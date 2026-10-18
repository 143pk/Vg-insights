// Auto-generated verified NEET UG Question Bank
// Chapter: System of Particles and Rotational Motion | Physics | Class 11 | Part 2
// Target: Exactly 125 MCQs with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ROTATIONAL_MOTION_PART2_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "rot-mcq-126",
    "questionNumber": 126,
    "question": "Find the torque about the origin for a force $\\vec{F} = (-3\\hat{i} + \\hat{j} + 5\\hat{k})\\text{ N}$ acting on a particle whose position vector is $\\vec{r} = (7\\hat{i} + 3\\hat{j} + \\hat{k})\\text{ m}$:",
    "options": {
      "A": "14 i - 38 j + 16 k N m",
      "B": "4 i + 4 j + 6 k N m",
      "C": "-14 i + 38 j - 16 k N m",
      "D": "14 i + 38 j + 16 k N m"
    },
    "optionsList": [
      "14 i - 38 j + 16 k N m",
      "4 i + 4 j + 6 k N m",
      "-14 i + 38 j - 16 k N m",
      "14 i + 38 j + 16 k N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque is the vector cross product of position vector and force vector: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. Order is critical ($\\vec{r} \\times \\vec{F} \\neq \\vec{F} \\times \\vec{r}$).\n\n2. GIVEN:\n$\\vec{r} = 7\\hat{i} + 3\\hat{j} + \\hat{k}\\text{ m}$, $\\vec{F} = -3\\hat{i} + \\hat{j} + 5\\hat{k}\\text{ N}$.\n\n3. FORMULA / PRINCIPLE:\n\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 7 & 3 & 1 \\\\ -3 & 1 & 5 \\end{vmatrix}\n\n4. STEP-BY-STEP SOLUTION:\n1. Expand determinant by the first row:\n   $\\tau_x = (3)(5) - (1)(1) = 15 - 1 = 14$.\n   $\\tau_y = -[(7)(5) - (1)(-3)] = -[35 + 3] = -38$.\n   $\\tau_z = (7)(1) - (3)(-3) = 7 + 9 = 16$.\n2. Thus, $\\vec{\\tau} = 14\\hat{i} - 38\\hat{j} + 16\\hat{k}\\text{ N}\\cdot\\text{m}$.\n\n5. FINAL ANSWER:\nOption A: 14 i - 38 j + 16 k N m\n\n6. QUICK TIP:\nOrder matters: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. If you do $\\vec{F} \\times \\vec{r}$, you get the negative (Option C)!",
    "solutionStructured": {
      "concept": "Torque is the vector cross product of position vector and force vector: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. Order is critical ($\\vec{r} \\times \\vec{F} \\neq \\vec{F} \\times \\vec{r}$).",
      "given": "$\\vec{r} = 7\\hat{i} + 3\\hat{j} + \\hat{k}\\text{ m}$, $\\vec{F} = -3\\hat{i} + \\hat{j} + 5\\hat{k}\\text{ N}$.",
      "formula": "\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 7 & 3 & 1 \\\\ -3 & 1 & 5 \\end{vmatrix}",
      "stepByStep": "1. Expand determinant by the first row:\n   $\\tau_x = (3)(5) - (1)(1) = 15 - 1 = 14$.\n   $\\tau_y = -[(7)(5) - (1)(-3)] = -[35 + 3] = -38$.\n   $\\tau_z = (7)(1) - (3)(-3) = 7 + 9 = 16$.\n2. Thus, $\\vec{\\tau} = 14\\hat{i} - 38\\hat{j} + 16\\hat{k}\\text{ N}\\cdot\\text{m}$.",
      "finalAnswer": "Option A: 14 i - 38 j + 16 k N m",
      "whyOtherOptionsWrong": "Option C (-14i + 38j - 16k) is F x r, which violates the right-hand definition."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque as vector cross product",
    "source": "NEET 2021",
    "isPYQ": true,
    "pyqYear": 2021
  },
  {
    "id": "rot-mcq-127",
    "questionNumber": 127,
    "question": "A solid sphere is rotating freely about its symmetry axis in free space. The radius of the sphere is increased keeping its mass constant. Which of the following physical quantities would remain constant for the sphere?",
    "options": {
      "A": "Angular momentum",
      "B": "Angular velocity",
      "C": "Moment of inertia",
      "D": "Rotational kinetic energy"
    },
    "optionsList": [
      "Angular momentum",
      "Angular velocity",
      "Moment of inertia",
      "Rotational kinetic energy"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nSince the sphere rotates freely in free space, the net external torque is zero ($\\tau_{\\text{ext}} = 0$). By the law of conservation of angular momentum, $\\vec{L} = I\\vec{\\omega} = \\text{constant}$.\n\n2. GIVEN:\nMass $M = \\text{constant}$, radius $R$ increases, $\\tau_{\\text{ext}} = 0$.\n\n3. FORMULA / PRINCIPLE:\n\\tau_{\\text{ext}} = \\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}\n\n4. STEP-BY-STEP SOLUTION:\n1. Net external torque acting on the system is zero: $\\tau_{\\text{ext}} = 0$.\n2. Therefore, angular momentum $L = I\\omega$ is strictly conserved.\n3. Note: Moment of inertia $I = \\frac{2}{5}MR^2$ increases as $R$ increases.\n4. Consequently, angular velocity $\\omega = L/I$ decreases, and rotational kinetic energy $K_{\\text{rot}} = \\frac{L^2}{2I}$ decreases.\n\n5. FINAL ANSWER:\nOption A: Angular momentum\n\n6. QUICK TIP:\nWhen no external torque acts, angular momentum is always conserved regardless of internal structural or dimensional changes!",
    "solutionStructured": {
      "concept": "Since the sphere rotates freely in free space, the net external torque is zero ($\\tau_{\\text{ext}} = 0$). By the law of conservation of angular momentum, $\\vec{L} = I\\vec{\\omega} = \\text{constant}$.",
      "given": "Mass $M = \\text{constant}$, radius $R$ increases, $\\tau_{\\text{ext}} = 0$.",
      "formula": "\\tau_{\\text{ext}} = \\frac{d\\vec{L}}{dt} = 0 \\implies \\vec{L} = \\text{constant}",
      "stepByStep": "1. Net external torque acting on the system is zero: $\\tau_{\\text{ext}} = 0$.\n2. Therefore, angular momentum $L = I\\omega$ is strictly conserved.\n3. Note: Moment of inertia $I = \\frac{2}{5}MR^2$ increases as $R$ increases.\n4. Consequently, angular velocity $\\omega = L/I$ decreases, and rotational kinetic energy $K_{\\text{rot}} = \\frac{L^2}{2I}$ decreases.",
      "finalAnswer": "Option A: Angular momentum",
      "whyOtherOptionsWrong": "Moment of inertia increases with R^2, angular velocity decreases, and rotational KE decreases."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Conservation of angular momentum",
    "source": "NEET 2018",
    "isPYQ": true,
    "pyqYear": 2018
  },
  {
    "id": "rot-mcq-128",
    "questionNumber": 128,
    "question": "A uniform metre rule of mass $100\\text{ g}$ is balanced horizontally on a knife-edge at the $60\\text{ cm}$ mark when a weight of mass $m$ is suspended at the $80\\text{ cm}$ mark. What is the value of $m$?",
    "options": {
      "A": "50 g",
      "B": "100 g",
      "C": "75 g",
      "D": "25 g"
    },
    "optionsList": [
      "50 g",
      "100 g",
      "75 g",
      "25 g"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of a rigid lever, the sum of clockwise torques about the pivot must equal the sum of counterclockwise torques: $\\sum \\tau = 0$.\n\n2. GIVEN:\nRule length $100\\text{ cm}$, rule mass $M = 100\\text{ g}$ acting at COM ($50\\text{ cm}$ mark), pivot at $60\\text{ cm}$ mark, mass $m$ at $80\\text{ cm}$ mark.\n\n3. FORMULA / PRINCIPLE:\nM g (x_{\\text{pivot}} - x_{\\text{cm}}) = m g (x_m - x_{\\text{pivot}})\n\n4. STEP-BY-STEP SOLUTION:\n1. The centre of mass of the uniform rule is at the $50\\text{ cm}$ mark.\n2. Lever arm of the rule's weight about the knife edge ($60\\text{ cm}$): $d_1 = 60 - 50 = 10\\text{ cm}$ (counter-clockwise torque).\n3. Lever arm of mass $m$ about the knife edge: $d_2 = 80 - 60 = 20\\text{ cm}$ (clockwise torque).\n4. Balance of torques: $M \\times 10 = m \\times 20 \\implies 100 \\times 10 = 20 m \\implies m = \\frac{1000}{20} = 50\\text{ g}$.\n\n5. FINAL ANSWER:\nOption A: 50 g\n\n6. QUICK TIP:\nThe weight of a uniform meter rule always acts at its geometric center, the 50 cm mark!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of a rigid lever, the sum of clockwise torques about the pivot must equal the sum of counterclockwise torques: $\\sum \\tau = 0$.",
      "given": "Rule length $100\\text{ cm}$, rule mass $M = 100\\text{ g}$ acting at COM ($50\\text{ cm}$ mark), pivot at $60\\text{ cm}$ mark, mass $m$ at $80\\text{ cm}$ mark.",
      "formula": "M g (x_{\\text{pivot}} - x_{\\text{cm}}) = m g (x_m - x_{\\text{pivot}})",
      "stepByStep": "1. The centre of mass of the uniform rule is at the $50\\text{ cm}$ mark.\n2. Lever arm of the rule's weight about the knife edge ($60\\text{ cm}$): $d_1 = 60 - 50 = 10\\text{ cm}$ (counter-clockwise torque).\n3. Lever arm of mass $m$ about the knife edge: $d_2 = 80 - 60 = 20\\text{ cm}$ (clockwise torque).\n4. Balance of torques: $M \\times 10 = m \\times 20 \\implies 100 \\times 10 = 20 m \\implies m = \\frac{1000}{20} = 50\\text{ g}$.",
      "finalAnswer": "Option A: 50 g",
      "whyOtherOptionsWrong": "Option B assumes lever arms are equal, which is incorrect."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rotational equilibrium and principle of moments",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-129",
    "questionNumber": 129,
    "question": "A diver spins at $1.5\\text{ rev/s}$ with her arms and legs outstretched, giving her a moment of inertia $I_1 = 12\\text{ kg}\\cdot\\text{m}^2$. When she tucks her body tightly, her moment of inertia reduces to $I_2 = 3.6\\text{ kg}\\cdot\\text{m}^2$. What is her new angular speed?",
    "options": {
      "A": "5.0 rev/s",
      "B": "4.0 rev/s",
      "C": "6.0 rev/s",
      "D": "3.0 rev/s"
    },
    "optionsList": [
      "5.0 rev/s",
      "4.0 rev/s",
      "6.0 rev/s",
      "3.0 rev/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nIn mid-air, external torque about the diver's centre of mass is zero, so angular momentum is conserved: $I_1 \\omega_1 = I_2 \\omega_2$.\n\n2. GIVEN:\n$I_1 = 12\\text{ kg}\\cdot\\text{m}^2$, $\\omega_1 = 1.5\\text{ rev/s}$, $I_2 = 3.6\\text{ kg}\\cdot\\text{m}^2$.\n\n3. FORMULA / PRINCIPLE:\nI_1 \\omega_1 = I_2 \\omega_2 \\implies \\omega_2 = \\frac{I_1 \\omega_1}{I_2}\n\n4. STEP-BY-STEP SOLUTION:\n1. Conservation of angular momentum gives: $12 \\times 1.5 = 3.6 \\times \\omega_2$.\n2. $18 = 3.6 \\omega_2 \\implies \\omega_2 = \\frac{18}{3.6} = 5.0\\text{ rev/s}$.\n\n5. FINAL ANSWER:\nOption A: 5.0 rev/s\n\n6. QUICK TIP:\nAngular speed increases when moment of inertia decreases, keeping $I\\omega$ constant.",
    "solutionStructured": {
      "concept": "In mid-air, external torque about the diver's centre of mass is zero, so angular momentum is conserved: $I_1 \\omega_1 = I_2 \\omega_2$.",
      "given": "$I_1 = 12\\text{ kg}\\cdot\\text{m}^2$, $\\omega_1 = 1.5\\text{ rev/s}$, $I_2 = 3.6\\text{ kg}\\cdot\\text{m}^2$.",
      "formula": "I_1 \\omega_1 = I_2 \\omega_2 \\implies \\omega_2 = \\frac{I_1 \\omega_1}{I_2}",
      "stepByStep": "1. Conservation of angular momentum gives: $12 \\times 1.5 = 3.6 \\times \\omega_2$.\n2. $18 = 3.6 \\omega_2 \\implies \\omega_2 = \\frac{18}{3.6} = 5.0\\text{ rev/s}$.",
      "finalAnswer": "Option A: 5.0 rev/s",
      "whyOtherOptionsWrong": "Option B comes from an arithmetic slip in dividing 18 by 3.6."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Conservation of angular momentum",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-130",
    "questionNumber": 130,
    "question": "A couple consists of two forces of equal magnitude $F$ acting along parallel lines in opposite directions separated by a perpendicular distance $d$. What is the moment of this couple about any point in the plane?",
    "options": {
      "A": "F * d",
      "B": "2 * F * d",
      "C": "F * d / 2",
      "D": "Zero"
    },
    "optionsList": [
      "F * d",
      "2 * F * d",
      "F * d / 2",
      "Zero"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nA couple produces a pure rotational effect with zero net force. The torque (moment) of a couple is independent of the choice of reference point and equals the magnitude of one force multiplied by the perpendicular distance between them: $\\tau = F d$.\n\n2. GIVEN:\nTwo forces of magnitude $F$ separated by perpendicular distance $d$.\n\n3. FORMULA / PRINCIPLE:\n\\tau_{\\text{couple}} = F d\n\n4. STEP-BY-STEP SOLUTION:\n1. Choose any point $O$ at distance $x$ from one force and $(d-x)$ from the other.\n2. Torque about $O$: $\\tau = F x + F(d - x) = F d$.\n3. Since $x$ cancels out, the torque is identical about any origin in the plane.\n\n5. FINAL ANSWER:\nOption A: F * d\n\n6. QUICK TIP:\nThe torque of a couple is completely independent of the choice of origin!",
    "solutionStructured": {
      "concept": "A couple produces a pure rotational effect with zero net force. The torque (moment) of a couple is independent of the choice of reference point and equals the magnitude of one force multiplied by the perpendicular distance between them: $\\tau = F d$.",
      "given": "Two forces of magnitude $F$ separated by perpendicular distance $d$.",
      "formula": "\\tau_{\\text{couple}} = F d",
      "stepByStep": "1. Choose any point $O$ at distance $x$ from one force and $(d-x)$ from the other.\n2. Torque about $O$: $\\tau = F x + F(d - x) = F d$.\n3. Since $x$ cancels out, the torque is identical about any origin in the plane.",
      "finalAnswer": "Option A: F * d",
      "whyOtherOptionsWrong": "Option D is false; while net force is zero, net torque is non-zero."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Couple and rotational equilibrium",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-131",
    "questionNumber": 131,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "22.5 N m",
      "B": "45.0 N m",
      "C": "11.2 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "22.5 N m",
      "45.0 N m",
      "11.2 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 1.5 = 22.5 N m.\n\n5. FINAL ANSWER:\nOption A: 22.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 1.5 = 22.5 N m.",
      "finalAnswer": "Option A: 22.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-132",
    "questionNumber": 132,
    "question": "A force of $20\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "40.0 N m",
      "B": "80.0 N m",
      "C": "20.0 N m",
      "D": "20.0 N m"
    },
    "optionsList": [
      "40.0 N m",
      "80.0 N m",
      "20.0 N m",
      "20.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 20\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 20 * 2.0 = 40.0 N m.\n\n5. FINAL ANSWER:\nOption A: 40.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 20\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 20 * 2.0 = 40.0 N m.",
      "finalAnswer": "Option A: 40.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-133",
    "questionNumber": 133,
    "question": "A force of $25\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "12.5 N m",
      "B": "25.0 N m",
      "C": "6.2 N m",
      "D": "25.0 N m"
    },
    "optionsList": [
      "12.5 N m",
      "25.0 N m",
      "6.2 N m",
      "25.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 25\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 25 * 0.5 = 12.5 N m.\n\n5. FINAL ANSWER:\nOption A: 12.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 25\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 25 * 0.5 = 12.5 N m.",
      "finalAnswer": "Option A: 12.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-134",
    "questionNumber": 134,
    "question": "A force of $30\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "30.0 N m",
      "B": "60.0 N m",
      "C": "15.0 N m",
      "D": "30.0 N m"
    },
    "optionsList": [
      "30.0 N m",
      "60.0 N m",
      "15.0 N m",
      "30.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 30\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 30 * 1.0 = 30.0 N m.\n\n5. FINAL ANSWER:\nOption A: 30.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 30\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 30 * 1.0 = 30.0 N m.",
      "finalAnswer": "Option A: 30.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-135",
    "questionNumber": 135,
    "question": "A force of $10\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "15.0 N m",
      "B": "30.0 N m",
      "C": "7.5 N m",
      "D": "10.0 N m"
    },
    "optionsList": [
      "15.0 N m",
      "30.0 N m",
      "7.5 N m",
      "10.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 10\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 10 * 1.5 = 15.0 N m.\n\n5. FINAL ANSWER:\nOption A: 15.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 10\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 10 * 1.5 = 15.0 N m.",
      "finalAnswer": "Option A: 15.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-136",
    "questionNumber": 136,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "30.0 N m",
      "B": "60.0 N m",
      "C": "15.0 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "30.0 N m",
      "60.0 N m",
      "15.0 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 2.0 = 30.0 N m.\n\n5. FINAL ANSWER:\nOption A: 30.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 2.0 = 30.0 N m.",
      "finalAnswer": "Option A: 30.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-137",
    "questionNumber": 137,
    "question": "A force of $20\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "10.0 N m",
      "B": "20.0 N m",
      "C": "5.0 N m",
      "D": "20.0 N m"
    },
    "optionsList": [
      "10.0 N m",
      "20.0 N m",
      "5.0 N m",
      "20.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 20\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 20 * 0.5 = 10.0 N m.\n\n5. FINAL ANSWER:\nOption A: 10.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 20\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 20 * 0.5 = 10.0 N m.",
      "finalAnswer": "Option A: 10.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-138",
    "questionNumber": 138,
    "question": "A force of $25\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "25.0 N m",
      "B": "50.0 N m",
      "C": "12.5 N m",
      "D": "25.0 N m"
    },
    "optionsList": [
      "25.0 N m",
      "50.0 N m",
      "12.5 N m",
      "25.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 25\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 25 * 1.0 = 25.0 N m.\n\n5. FINAL ANSWER:\nOption A: 25.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 25\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 25 * 1.0 = 25.0 N m.",
      "finalAnswer": "Option A: 25.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-139",
    "questionNumber": 139,
    "question": "A force of $30\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "45.0 N m",
      "B": "90.0 N m",
      "C": "22.5 N m",
      "D": "30.0 N m"
    },
    "optionsList": [
      "45.0 N m",
      "90.0 N m",
      "22.5 N m",
      "30.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 30\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 30 * 1.5 = 45.0 N m.\n\n5. FINAL ANSWER:\nOption A: 45.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 30\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 30 * 1.5 = 45.0 N m.",
      "finalAnswer": "Option A: 45.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-140",
    "questionNumber": 140,
    "question": "A force of $10\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "20.0 N m",
      "B": "40.0 N m",
      "C": "10.0 N m",
      "D": "10.0 N m"
    },
    "optionsList": [
      "20.0 N m",
      "40.0 N m",
      "10.0 N m",
      "10.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 10\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 10 * 2.0 = 20.0 N m.\n\n5. FINAL ANSWER:\nOption A: 20.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 10\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 10 * 2.0 = 20.0 N m.",
      "finalAnswer": "Option A: 20.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-141",
    "questionNumber": 141,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "7.5 N m",
      "B": "15.0 N m",
      "C": "3.8 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "7.5 N m",
      "15.0 N m",
      "3.8 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 0.5 = 7.5 N m.\n\n5. FINAL ANSWER:\nOption A: 7.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 0.5 = 7.5 N m.",
      "finalAnswer": "Option A: 7.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-142",
    "questionNumber": 142,
    "question": "A force of $20\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "20.0 N m",
      "B": "40.0 N m",
      "C": "10.0 N m",
      "D": "20.0 N m"
    },
    "optionsList": [
      "20.0 N m",
      "40.0 N m",
      "10.0 N m",
      "20.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 20\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 20 * 1.0 = 20.0 N m.\n\n5. FINAL ANSWER:\nOption A: 20.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 20\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 20 * 1.0 = 20.0 N m.",
      "finalAnswer": "Option A: 20.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-143",
    "questionNumber": 143,
    "question": "A force of $25\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "37.5 N m",
      "B": "75.0 N m",
      "C": "18.8 N m",
      "D": "25.0 N m"
    },
    "optionsList": [
      "37.5 N m",
      "75.0 N m",
      "18.8 N m",
      "25.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 25\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 25 * 1.5 = 37.5 N m.\n\n5. FINAL ANSWER:\nOption A: 37.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 25\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 25 * 1.5 = 37.5 N m.",
      "finalAnswer": "Option A: 37.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-144",
    "questionNumber": 144,
    "question": "A force of $30\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "60.0 N m",
      "B": "120.0 N m",
      "C": "30.0 N m",
      "D": "30.0 N m"
    },
    "optionsList": [
      "60.0 N m",
      "120.0 N m",
      "30.0 N m",
      "30.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 30\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 30 * 2.0 = 60.0 N m.\n\n5. FINAL ANSWER:\nOption A: 60.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 30\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 30 * 2.0 = 60.0 N m.",
      "finalAnswer": "Option A: 60.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-145",
    "questionNumber": 145,
    "question": "A force of $10\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "5.0 N m",
      "B": "10.0 N m",
      "C": "2.5 N m",
      "D": "10.0 N m"
    },
    "optionsList": [
      "5.0 N m",
      "10.0 N m",
      "2.5 N m",
      "10.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 10\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 10 * 0.5 = 5.0 N m.\n\n5. FINAL ANSWER:\nOption A: 5.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 10\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 10 * 0.5 = 5.0 N m.",
      "finalAnswer": "Option A: 5.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-146",
    "questionNumber": 146,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "15.0 N m",
      "B": "30.0 N m",
      "C": "7.5 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "15.0 N m",
      "30.0 N m",
      "7.5 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 1.0 = 15.0 N m.\n\n5. FINAL ANSWER:\nOption A: 15.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 1.0 = 15.0 N m.",
      "finalAnswer": "Option A: 15.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-147",
    "questionNumber": 147,
    "question": "A force of $20\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "30.0 N m",
      "B": "60.0 N m",
      "C": "15.0 N m",
      "D": "20.0 N m"
    },
    "optionsList": [
      "30.0 N m",
      "60.0 N m",
      "15.0 N m",
      "20.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 20\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 20 * 1.5 = 30.0 N m.\n\n5. FINAL ANSWER:\nOption A: 30.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 20\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 20 * 1.5 = 30.0 N m.",
      "finalAnswer": "Option A: 30.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-148",
    "questionNumber": 148,
    "question": "A force of $25\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "50.0 N m",
      "B": "100.0 N m",
      "C": "25.0 N m",
      "D": "25.0 N m"
    },
    "optionsList": [
      "50.0 N m",
      "100.0 N m",
      "25.0 N m",
      "25.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 25\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 25 * 2.0 = 50.0 N m.\n\n5. FINAL ANSWER:\nOption A: 50.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 25\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 25 * 2.0 = 50.0 N m.",
      "finalAnswer": "Option A: 50.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-149",
    "questionNumber": 149,
    "question": "A force of $30\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "15.0 N m",
      "B": "30.0 N m",
      "C": "7.5 N m",
      "D": "30.0 N m"
    },
    "optionsList": [
      "15.0 N m",
      "30.0 N m",
      "7.5 N m",
      "30.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 30\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 30 * 0.5 = 15.0 N m.\n\n5. FINAL ANSWER:\nOption A: 15.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 30\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 30 * 0.5 = 15.0 N m.",
      "finalAnswer": "Option A: 15.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-150",
    "questionNumber": 150,
    "question": "A force of $10\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "10.0 N m",
      "B": "20.0 N m",
      "C": "5.0 N m",
      "D": "10.0 N m"
    },
    "optionsList": [
      "10.0 N m",
      "20.0 N m",
      "5.0 N m",
      "10.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 10\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 10 * 1.0 = 10.0 N m.\n\n5. FINAL ANSWER:\nOption A: 10.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 10\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 10 * 1.0 = 10.0 N m.",
      "finalAnswer": "Option A: 10.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-151",
    "questionNumber": 151,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "22.5 N m",
      "B": "45.0 N m",
      "C": "11.2 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "22.5 N m",
      "45.0 N m",
      "11.2 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 1.5 = 22.5 N m.\n\n5. FINAL ANSWER:\nOption A: 22.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 1.5 = 22.5 N m.",
      "finalAnswer": "Option A: 22.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-152",
    "questionNumber": 152,
    "question": "A force of $20\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "40.0 N m",
      "B": "80.0 N m",
      "C": "20.0 N m",
      "D": "20.0 N m"
    },
    "optionsList": [
      "40.0 N m",
      "80.0 N m",
      "20.0 N m",
      "20.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 20\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 20 * 2.0 = 40.0 N m.\n\n5. FINAL ANSWER:\nOption A: 40.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 20\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 20 * 2.0 = 40.0 N m.",
      "finalAnswer": "Option A: 40.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-153",
    "questionNumber": 153,
    "question": "A force of $25\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "12.5 N m",
      "B": "25.0 N m",
      "C": "6.2 N m",
      "D": "25.0 N m"
    },
    "optionsList": [
      "12.5 N m",
      "25.0 N m",
      "6.2 N m",
      "25.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 25\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 25 * 0.5 = 12.5 N m.\n\n5. FINAL ANSWER:\nOption A: 12.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 25\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 25 * 0.5 = 12.5 N m.",
      "finalAnswer": "Option A: 12.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-154",
    "questionNumber": 154,
    "question": "A force of $30\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "30.0 N m",
      "B": "60.0 N m",
      "C": "15.0 N m",
      "D": "30.0 N m"
    },
    "optionsList": [
      "30.0 N m",
      "60.0 N m",
      "15.0 N m",
      "30.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 30\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 30 * 1.0 = 30.0 N m.\n\n5. FINAL ANSWER:\nOption A: 30.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 30\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 30 * 1.0 = 30.0 N m.",
      "finalAnswer": "Option A: 30.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-155",
    "questionNumber": 155,
    "question": "A force of $10\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "15.0 N m",
      "B": "30.0 N m",
      "C": "7.5 N m",
      "D": "10.0 N m"
    },
    "optionsList": [
      "15.0 N m",
      "30.0 N m",
      "7.5 N m",
      "10.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 10\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 10 * 1.5 = 15.0 N m.\n\n5. FINAL ANSWER:\nOption A: 15.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 10\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 10 * 1.5 = 15.0 N m.",
      "finalAnswer": "Option A: 15.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-156",
    "questionNumber": 156,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "30.0 N m",
      "B": "60.0 N m",
      "C": "15.0 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "30.0 N m",
      "60.0 N m",
      "15.0 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 2.0 = 30.0 N m.\n\n5. FINAL ANSWER:\nOption A: 30.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 2.0 = 30.0 N m.",
      "finalAnswer": "Option A: 30.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-157",
    "questionNumber": 157,
    "question": "A force of $20\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "10.0 N m",
      "B": "20.0 N m",
      "C": "5.0 N m",
      "D": "20.0 N m"
    },
    "optionsList": [
      "10.0 N m",
      "20.0 N m",
      "5.0 N m",
      "20.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 20\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 20 * 0.5 = 10.0 N m.\n\n5. FINAL ANSWER:\nOption A: 10.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 20\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 20 * 0.5 = 10.0 N m.",
      "finalAnswer": "Option A: 10.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-158",
    "questionNumber": 158,
    "question": "A force of $25\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "25.0 N m",
      "B": "50.0 N m",
      "C": "12.5 N m",
      "D": "25.0 N m"
    },
    "optionsList": [
      "25.0 N m",
      "50.0 N m",
      "12.5 N m",
      "25.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 25\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 25 * 1.0 = 25.0 N m.\n\n5. FINAL ANSWER:\nOption A: 25.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 25\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 25 * 1.0 = 25.0 N m.",
      "finalAnswer": "Option A: 25.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-159",
    "questionNumber": 159,
    "question": "A force of $30\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "45.0 N m",
      "B": "90.0 N m",
      "C": "22.5 N m",
      "D": "30.0 N m"
    },
    "optionsList": [
      "45.0 N m",
      "90.0 N m",
      "22.5 N m",
      "30.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 30\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 30 * 1.5 = 45.0 N m.\n\n5. FINAL ANSWER:\nOption A: 45.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 30\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 30 * 1.5 = 45.0 N m.",
      "finalAnswer": "Option A: 45.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-160",
    "questionNumber": 160,
    "question": "A force of $10\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "20.0 N m",
      "B": "40.0 N m",
      "C": "10.0 N m",
      "D": "10.0 N m"
    },
    "optionsList": [
      "20.0 N m",
      "40.0 N m",
      "10.0 N m",
      "10.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 10\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 10 * 2.0 = 20.0 N m.\n\n5. FINAL ANSWER:\nOption A: 20.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 10\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 10 * 2.0 = 20.0 N m.",
      "finalAnswer": "Option A: 20.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-161",
    "questionNumber": 161,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "7.5 N m",
      "B": "15.0 N m",
      "C": "3.8 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "7.5 N m",
      "15.0 N m",
      "3.8 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 0.5 = 7.5 N m.\n\n5. FINAL ANSWER:\nOption A: 7.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 0.5 = 7.5 N m.",
      "finalAnswer": "Option A: 7.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-162",
    "questionNumber": 162,
    "question": "A force of $20\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "20.0 N m",
      "B": "40.0 N m",
      "C": "10.0 N m",
      "D": "20.0 N m"
    },
    "optionsList": [
      "20.0 N m",
      "40.0 N m",
      "10.0 N m",
      "20.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 20\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 20 * 1.0 = 20.0 N m.\n\n5. FINAL ANSWER:\nOption A: 20.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 20\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 20 * 1.0 = 20.0 N m.",
      "finalAnswer": "Option A: 20.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-163",
    "questionNumber": 163,
    "question": "A force of $25\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "37.5 N m",
      "B": "75.0 N m",
      "C": "18.8 N m",
      "D": "25.0 N m"
    },
    "optionsList": [
      "37.5 N m",
      "75.0 N m",
      "18.8 N m",
      "25.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 25\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 25 * 1.5 = 37.5 N m.\n\n5. FINAL ANSWER:\nOption A: 37.5 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 25\\text{ N}$, lever arm $r = 1.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 25 * 1.5 = 37.5 N m.",
      "finalAnswer": "Option A: 37.5 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-164",
    "questionNumber": 164,
    "question": "A force of $30\\text{ N}$ acts perpendicularly at the end of a wrench of length $2.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "60.0 N m",
      "B": "120.0 N m",
      "C": "30.0 N m",
      "D": "30.0 N m"
    },
    "optionsList": [
      "60.0 N m",
      "120.0 N m",
      "30.0 N m",
      "30.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 30\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 30 * 2.0 = 60.0 N m.\n\n5. FINAL ANSWER:\nOption A: 60.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 30\\text{ N}$, lever arm $r = 2.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 30 * 2.0 = 60.0 N m.",
      "finalAnswer": "Option A: 60.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-165",
    "questionNumber": 165,
    "question": "A force of $10\\text{ N}$ acts perpendicularly at the end of a wrench of length $0.5\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "5.0 N m",
      "B": "10.0 N m",
      "C": "2.5 N m",
      "D": "10.0 N m"
    },
    "optionsList": [
      "5.0 N m",
      "10.0 N m",
      "2.5 N m",
      "10.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 10\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 10 * 0.5 = 5.0 N m.\n\n5. FINAL ANSWER:\nOption A: 5.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 10\\text{ N}$, lever arm $r = 0.5\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 10 * 0.5 = 5.0 N m.",
      "finalAnswer": "Option A: 5.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-166",
    "questionNumber": 166,
    "question": "A force of $15\\text{ N}$ acts perpendicularly at the end of a wrench of length $1.0\\text{ m}$. The torque produced about the pivot is:",
    "options": {
      "A": "15.0 N m",
      "B": "30.0 N m",
      "C": "7.5 N m",
      "D": "15.0 N m"
    },
    "optionsList": [
      "15.0 N m",
      "30.0 N m",
      "7.5 N m",
      "15.0 N m"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nTorque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.\n\n2. GIVEN:\nForce $F = 15\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.\n\n3. FORMULA / PRINCIPLE:\n\\tau = F r\n\n4. STEP-BY-STEP SOLUTION:\n1. Multiply force by lever arm: tau = 15 * 1.0 = 15.0 N m.\n\n5. FINAL ANSWER:\nOption A: 15.0 N m\n\n6. QUICK TIP:\nMaximum torque occurs when the applied force is perpendicular to the lever arm.",
    "solutionStructured": {
      "concept": "Torque magnitude is given by $\\tau = F r \\sin\\theta$. When the force is perpendicular, $\\sin 90^\\circ = 1$ and $\\tau = F r$.",
      "given": "Force $F = 15\\text{ N}$, lever arm $r = 1.0\\text{ m}$, $\\theta = 90^\\circ$.",
      "formula": "\\tau = F r",
      "stepByStep": "1. Multiply force by lever arm: tau = 15 * 1.0 = 15.0 N m.",
      "finalAnswer": "Option A: 15.0 N m",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Torque and lever arm",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-167",
    "questionNumber": 167,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "20 kg m^2/s",
      "B": "40 kg m^2/s",
      "C": "10.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "20 kg m^2/s",
      "40 kg m^2/s",
      "10.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 20 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.",
      "finalAnswer": "Option A: 20 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-168",
    "questionNumber": 168,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-169",
    "questionNumber": 169,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-170",
    "questionNumber": 170,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "16 kg m^2/s",
      "B": "32 kg m^2/s",
      "C": "8.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "16 kg m^2/s",
      "32 kg m^2/s",
      "8.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 16 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.",
      "finalAnswer": "Option A: 16 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-171",
    "questionNumber": 171,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "60 kg m^2/s",
      "B": "120 kg m^2/s",
      "C": "30.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "60 kg m^2/s",
      "120 kg m^2/s",
      "30.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 60 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.",
      "finalAnswer": "Option A: 60 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-172",
    "questionNumber": 172,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "144 kg m^2/s",
      "B": "288 kg m^2/s",
      "C": "72.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "144 kg m^2/s",
      "288 kg m^2/s",
      "72.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 144 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.",
      "finalAnswer": "Option A: 144 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-173",
    "questionNumber": 173,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "12 kg m^2/s",
      "B": "24 kg m^2/s",
      "C": "6.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "12 kg m^2/s",
      "24 kg m^2/s",
      "6.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 12 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.",
      "finalAnswer": "Option A: 12 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-174",
    "questionNumber": 174,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "48 kg m^2/s",
      "B": "96 kg m^2/s",
      "C": "24.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "48 kg m^2/s",
      "96 kg m^2/s",
      "24.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 48 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.",
      "finalAnswer": "Option A: 48 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-175",
    "questionNumber": 175,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "120 kg m^2/s",
      "B": "240 kg m^2/s",
      "C": "60.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "120 kg m^2/s",
      "240 kg m^2/s",
      "60.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 120 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.",
      "finalAnswer": "Option A: 120 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-176",
    "questionNumber": 176,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "24 kg m^2/s",
      "B": "48 kg m^2/s",
      "C": "12.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "24 kg m^2/s",
      "48 kg m^2/s",
      "12.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 24 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.",
      "finalAnswer": "Option A: 24 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-177",
    "questionNumber": 177,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "36 kg m^2/s",
      "B": "72 kg m^2/s",
      "C": "18.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "36 kg m^2/s",
      "72 kg m^2/s",
      "18.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 36 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.",
      "finalAnswer": "Option A: 36 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-178",
    "questionNumber": 178,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "96 kg m^2/s",
      "B": "192 kg m^2/s",
      "C": "48.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "96 kg m^2/s",
      "192 kg m^2/s",
      "48.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 96 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.",
      "finalAnswer": "Option A: 96 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-179",
    "questionNumber": 179,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "20 kg m^2/s",
      "B": "40 kg m^2/s",
      "C": "10.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "20 kg m^2/s",
      "40 kg m^2/s",
      "10.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 20 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.",
      "finalAnswer": "Option A: 20 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-180",
    "questionNumber": 180,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-181",
    "questionNumber": 181,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-182",
    "questionNumber": 182,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "16 kg m^2/s",
      "B": "32 kg m^2/s",
      "C": "8.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "16 kg m^2/s",
      "32 kg m^2/s",
      "8.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 16 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.",
      "finalAnswer": "Option A: 16 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-183",
    "questionNumber": 183,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "60 kg m^2/s",
      "B": "120 kg m^2/s",
      "C": "30.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "60 kg m^2/s",
      "120 kg m^2/s",
      "30.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 60 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.",
      "finalAnswer": "Option A: 60 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-184",
    "questionNumber": 184,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "144 kg m^2/s",
      "B": "288 kg m^2/s",
      "C": "72.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "144 kg m^2/s",
      "288 kg m^2/s",
      "72.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 144 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.",
      "finalAnswer": "Option A: 144 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-185",
    "questionNumber": 185,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "12 kg m^2/s",
      "B": "24 kg m^2/s",
      "C": "6.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "12 kg m^2/s",
      "24 kg m^2/s",
      "6.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 12 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.",
      "finalAnswer": "Option A: 12 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-186",
    "questionNumber": 186,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "48 kg m^2/s",
      "B": "96 kg m^2/s",
      "C": "24.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "48 kg m^2/s",
      "96 kg m^2/s",
      "24.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 48 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.",
      "finalAnswer": "Option A: 48 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-187",
    "questionNumber": 187,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "120 kg m^2/s",
      "B": "240 kg m^2/s",
      "C": "60.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "120 kg m^2/s",
      "240 kg m^2/s",
      "60.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 120 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.",
      "finalAnswer": "Option A: 120 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-188",
    "questionNumber": 188,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "24 kg m^2/s",
      "B": "48 kg m^2/s",
      "C": "12.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "24 kg m^2/s",
      "48 kg m^2/s",
      "12.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 24 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.",
      "finalAnswer": "Option A: 24 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-189",
    "questionNumber": 189,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "36 kg m^2/s",
      "B": "72 kg m^2/s",
      "C": "18.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "36 kg m^2/s",
      "72 kg m^2/s",
      "18.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 36 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.",
      "finalAnswer": "Option A: 36 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-190",
    "questionNumber": 190,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "96 kg m^2/s",
      "B": "192 kg m^2/s",
      "C": "48.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "96 kg m^2/s",
      "192 kg m^2/s",
      "48.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 96 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.",
      "finalAnswer": "Option A: 96 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-191",
    "questionNumber": 191,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "20 kg m^2/s",
      "B": "40 kg m^2/s",
      "C": "10.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "20 kg m^2/s",
      "40 kg m^2/s",
      "10.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 20 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.",
      "finalAnswer": "Option A: 20 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-192",
    "questionNumber": 192,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-193",
    "questionNumber": 193,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-194",
    "questionNumber": 194,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "16 kg m^2/s",
      "B": "32 kg m^2/s",
      "C": "8.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "16 kg m^2/s",
      "32 kg m^2/s",
      "8.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 16 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.",
      "finalAnswer": "Option A: 16 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-195",
    "questionNumber": 195,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "60 kg m^2/s",
      "B": "120 kg m^2/s",
      "C": "30.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "60 kg m^2/s",
      "120 kg m^2/s",
      "30.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 60 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.",
      "finalAnswer": "Option A: 60 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-196",
    "questionNumber": 196,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "144 kg m^2/s",
      "B": "288 kg m^2/s",
      "C": "72.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "144 kg m^2/s",
      "288 kg m^2/s",
      "72.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 144 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.",
      "finalAnswer": "Option A: 144 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-197",
    "questionNumber": 197,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "12 kg m^2/s",
      "B": "24 kg m^2/s",
      "C": "6.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "12 kg m^2/s",
      "24 kg m^2/s",
      "6.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 12 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.",
      "finalAnswer": "Option A: 12 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-198",
    "questionNumber": 198,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "48 kg m^2/s",
      "B": "96 kg m^2/s",
      "C": "24.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "48 kg m^2/s",
      "96 kg m^2/s",
      "24.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 48 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.",
      "finalAnswer": "Option A: 48 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-199",
    "questionNumber": 199,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "120 kg m^2/s",
      "B": "240 kg m^2/s",
      "C": "60.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "120 kg m^2/s",
      "240 kg m^2/s",
      "60.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 120 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.",
      "finalAnswer": "Option A: 120 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-200",
    "questionNumber": 200,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "24 kg m^2/s",
      "B": "48 kg m^2/s",
      "C": "12.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "24 kg m^2/s",
      "48 kg m^2/s",
      "12.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 24 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.",
      "finalAnswer": "Option A: 24 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-201",
    "questionNumber": 201,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "36 kg m^2/s",
      "B": "72 kg m^2/s",
      "C": "18.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "36 kg m^2/s",
      "72 kg m^2/s",
      "18.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 36 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.",
      "finalAnswer": "Option A: 36 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-202",
    "questionNumber": 202,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "96 kg m^2/s",
      "B": "192 kg m^2/s",
      "C": "48.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "96 kg m^2/s",
      "192 kg m^2/s",
      "48.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 96 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.",
      "finalAnswer": "Option A: 96 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-203",
    "questionNumber": 203,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "20 kg m^2/s",
      "B": "40 kg m^2/s",
      "C": "10.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "20 kg m^2/s",
      "40 kg m^2/s",
      "10.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 20 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.",
      "finalAnswer": "Option A: 20 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-204",
    "questionNumber": 204,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-205",
    "questionNumber": 205,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-206",
    "questionNumber": 206,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "16 kg m^2/s",
      "B": "32 kg m^2/s",
      "C": "8.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "16 kg m^2/s",
      "32 kg m^2/s",
      "8.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 16 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.",
      "finalAnswer": "Option A: 16 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-207",
    "questionNumber": 207,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "60 kg m^2/s",
      "B": "120 kg m^2/s",
      "C": "30.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "60 kg m^2/s",
      "120 kg m^2/s",
      "30.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 60 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.",
      "finalAnswer": "Option A: 60 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-208",
    "questionNumber": 208,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "144 kg m^2/s",
      "B": "288 kg m^2/s",
      "C": "72.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "144 kg m^2/s",
      "288 kg m^2/s",
      "72.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 144 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.",
      "finalAnswer": "Option A: 144 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-209",
    "questionNumber": 209,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "12 kg m^2/s",
      "B": "24 kg m^2/s",
      "C": "6.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "12 kg m^2/s",
      "24 kg m^2/s",
      "6.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 12 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.",
      "finalAnswer": "Option A: 12 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-210",
    "questionNumber": 210,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "48 kg m^2/s",
      "B": "96 kg m^2/s",
      "C": "24.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "48 kg m^2/s",
      "96 kg m^2/s",
      "24.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 48 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.",
      "finalAnswer": "Option A: 48 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-211",
    "questionNumber": 211,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "120 kg m^2/s",
      "B": "240 kg m^2/s",
      "C": "60.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "120 kg m^2/s",
      "240 kg m^2/s",
      "60.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 120 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.",
      "finalAnswer": "Option A: 120 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-212",
    "questionNumber": 212,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "24 kg m^2/s",
      "B": "48 kg m^2/s",
      "C": "12.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "24 kg m^2/s",
      "48 kg m^2/s",
      "12.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 24 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.",
      "finalAnswer": "Option A: 24 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-213",
    "questionNumber": 213,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "36 kg m^2/s",
      "B": "72 kg m^2/s",
      "C": "18.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "36 kg m^2/s",
      "72 kg m^2/s",
      "18.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 36 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.",
      "finalAnswer": "Option A: 36 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-214",
    "questionNumber": 214,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "96 kg m^2/s",
      "B": "192 kg m^2/s",
      "C": "48.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "96 kg m^2/s",
      "192 kg m^2/s",
      "48.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 96 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.",
      "finalAnswer": "Option A: 96 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-215",
    "questionNumber": 215,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "20 kg m^2/s",
      "B": "40 kg m^2/s",
      "C": "10.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "20 kg m^2/s",
      "40 kg m^2/s",
      "10.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 20 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.",
      "finalAnswer": "Option A: 20 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-216",
    "questionNumber": 216,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-217",
    "questionNumber": 217,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-218",
    "questionNumber": 218,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "16 kg m^2/s",
      "B": "32 kg m^2/s",
      "C": "8.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "16 kg m^2/s",
      "32 kg m^2/s",
      "8.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 16 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.",
      "finalAnswer": "Option A: 16 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-219",
    "questionNumber": 219,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "60 kg m^2/s",
      "B": "120 kg m^2/s",
      "C": "30.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "60 kg m^2/s",
      "120 kg m^2/s",
      "30.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 60 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 10 = 20 kg m/s.\n3. Angular momentum L = p * r_perp = 20 * 3 = 60 kg m^2/s.",
      "finalAnswer": "Option A: 60 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-220",
    "questionNumber": 220,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "144 kg m^2/s",
      "B": "288 kg m^2/s",
      "C": "72.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "144 kg m^2/s",
      "288 kg m^2/s",
      "72.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 144 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 12 = 36 kg m/s.\n3. Angular momentum L = p * r_perp = 36 * 4 = 144 kg m^2/s.",
      "finalAnswer": "Option A: 144 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-221",
    "questionNumber": 221,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "12 kg m^2/s",
      "B": "24 kg m^2/s",
      "C": "6.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "12 kg m^2/s",
      "24 kg m^2/s",
      "6.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 12 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 6 = 6 kg m/s.\n3. Angular momentum L = p * r_perp = 6 * 2 = 12 kg m^2/s.",
      "finalAnswer": "Option A: 12 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-222",
    "questionNumber": 222,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "48 kg m^2/s",
      "B": "96 kg m^2/s",
      "C": "24.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "48 kg m^2/s",
      "96 kg m^2/s",
      "24.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 48 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 8 = 16 kg m/s.\n3. Angular momentum L = p * r_perp = 16 * 3 = 48 kg m^2/s.",
      "finalAnswer": "Option A: 48 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-223",
    "questionNumber": 223,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "120 kg m^2/s",
      "B": "240 kg m^2/s",
      "C": "60.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "120 kg m^2/s",
      "240 kg m^2/s",
      "60.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 120 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 10 = 30 kg m/s.\n3. Angular momentum L = p * r_perp = 30 * 4 = 120 kg m^2/s.",
      "finalAnswer": "Option A: 120 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-224",
    "questionNumber": 224,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "24 kg m^2/s",
      "B": "48 kg m^2/s",
      "C": "12.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "24 kg m^2/s",
      "48 kg m^2/s",
      "12.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 24 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 12 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 2 = 24 kg m^2/s.",
      "finalAnswer": "Option A: 24 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-225",
    "questionNumber": 225,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "36 kg m^2/s",
      "B": "72 kg m^2/s",
      "C": "18.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "36 kg m^2/s",
      "72 kg m^2/s",
      "18.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 36 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 6 = 12 kg m/s.\n3. Angular momentum L = p * r_perp = 12 * 3 = 36 kg m^2/s.",
      "finalAnswer": "Option A: 36 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-226",
    "questionNumber": 226,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "96 kg m^2/s",
      "B": "192 kg m^2/s",
      "C": "48.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "96 kg m^2/s",
      "192 kg m^2/s",
      "48.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 96 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 8 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 4 = 96 kg m^2/s.",
      "finalAnswer": "Option A: 96 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-227",
    "questionNumber": 227,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 10\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "20 kg m^2/s",
      "B": "40 kg m^2/s",
      "C": "10.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "20 kg m^2/s",
      "40 kg m^2/s",
      "10.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 20 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 10\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 10 = 10 kg m/s.\n3. Angular momentum L = p * r_perp = 10 * 2 = 20 kg m^2/s.",
      "finalAnswer": "Option A: 20 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-228",
    "questionNumber": 228,
    "question": "A particle of mass $2\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 3\\text{ m}$ with a constant velocity $\\vec{v} = 12\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 2\\text{ kg}$, velocity $v = 12\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 3\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 3 m.\n2. Momentum p = m * v = 2 * 12 = 24 kg m/s.\n3. Angular momentum L = p * r_perp = 24 * 3 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-229",
    "questionNumber": 229,
    "question": "A particle of mass $3\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 4\\text{ m}$ with a constant velocity $\\vec{v} = 6\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "72 kg m^2/s",
      "B": "144 kg m^2/s",
      "C": "36.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "72 kg m^2/s",
      "144 kg m^2/s",
      "36.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 72 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 3\\text{ kg}$, velocity $v = 6\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 4\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 4 m.\n2. Momentum p = m * v = 3 * 6 = 18 kg m/s.\n3. Angular momentum L = p * r_perp = 18 * 4 = 72 kg m^2/s.",
      "finalAnswer": "Option A: 72 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-230",
    "questionNumber": 230,
    "question": "A particle of mass $1\\text{ kg}$ moves in the xy-plane along the horizontal line $y = 2\\text{ m}$ with a constant velocity $\\vec{v} = 8\\hat{i}\\text{ m/s}$. The magnitude of its angular momentum about the origin is:",
    "options": {
      "A": "16 kg m^2/s",
      "B": "32 kg m^2/s",
      "C": "8.0 kg m^2/s",
      "D": "0 kg m^2/s"
    },
    "optionsList": [
      "16 kg m^2/s",
      "32 kg m^2/s",
      "8.0 kg m^2/s",
      "0 kg m^2/s"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.\n\n2. GIVEN:\nMass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nL = m v r_\\perp\n\n4. STEP-BY-STEP SOLUTION:\n1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.\n\n5. FINAL ANSWER:\nOption A: 16 kg m^2/s\n\n6. QUICK TIP:\nEven for motion in a straight line at constant velocity, angular momentum about an off-line point is non-zero and constant!",
    "solutionStructured": {
      "concept": "The angular momentum of a particle about an origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. For motion along a line with constant velocity, the perpendicular distance $r_\\perp$ is constant, so $L = m v r_\\perp$ is constant.",
      "given": "Mass $m = 1\\text{ kg}$, velocity $v = 8\\text{ m/s}$ parallel to x-axis, perpendicular distance $y = 2\\text{ m}$.",
      "formula": "L = m v r_\\perp",
      "stepByStep": "1. Perpendicular distance from origin to the line of motion is r_perp = y = 2 m.\n2. Momentum p = m * v = 1 * 8 = 8 kg m/s.\n3. Angular momentum L = p * r_perp = 8 * 2 = 16 kg m^2/s.",
      "finalAnswer": "Option A: 16 kg m^2/s",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Angular momentum of a particle",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-231",
    "questionNumber": 231,
    "question": "A uniform horizontal rod of mass $15\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "150.0 N",
      "B": "300.0 N",
      "C": "75.0 N",
      "D": "225.0 N"
    },
    "optionsList": [
      "150.0 N",
      "300.0 N",
      "75.0 N",
      "225.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.\n\n5. FINAL ANSWER:\nOption A: 150.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.",
      "finalAnswer": "Option A: 150.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-232",
    "questionNumber": 232,
    "question": "A uniform horizontal rod of mass $20\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "200.0 N",
      "B": "400.0 N",
      "C": "100.0 N",
      "D": "300.0 N"
    },
    "optionsList": [
      "200.0 N",
      "400.0 N",
      "100.0 N",
      "300.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.\n\n5. FINAL ANSWER:\nOption A: 200.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.",
      "finalAnswer": "Option A: 200.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-233",
    "questionNumber": 233,
    "question": "A uniform horizontal rod of mass $10\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "100.0 N",
      "B": "200.0 N",
      "C": "50.0 N",
      "D": "150.0 N"
    },
    "optionsList": [
      "100.0 N",
      "200.0 N",
      "50.0 N",
      "150.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.\n\n5. FINAL ANSWER:\nOption A: 100.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.",
      "finalAnswer": "Option A: 100.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-234",
    "questionNumber": 234,
    "question": "A uniform horizontal rod of mass $15\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "150.0 N",
      "B": "300.0 N",
      "C": "75.0 N",
      "D": "225.0 N"
    },
    "optionsList": [
      "150.0 N",
      "300.0 N",
      "75.0 N",
      "225.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.\n\n5. FINAL ANSWER:\nOption A: 150.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.",
      "finalAnswer": "Option A: 150.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-235",
    "questionNumber": 235,
    "question": "A uniform horizontal rod of mass $20\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "200.0 N",
      "B": "400.0 N",
      "C": "100.0 N",
      "D": "300.0 N"
    },
    "optionsList": [
      "200.0 N",
      "400.0 N",
      "100.0 N",
      "300.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.\n\n5. FINAL ANSWER:\nOption A: 200.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.",
      "finalAnswer": "Option A: 200.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-236",
    "questionNumber": 236,
    "question": "A uniform horizontal rod of mass $10\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "100.0 N",
      "B": "200.0 N",
      "C": "50.0 N",
      "D": "150.0 N"
    },
    "optionsList": [
      "100.0 N",
      "200.0 N",
      "50.0 N",
      "150.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.\n\n5. FINAL ANSWER:\nOption A: 100.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.",
      "finalAnswer": "Option A: 100.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-237",
    "questionNumber": 237,
    "question": "A uniform horizontal rod of mass $15\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "150.0 N",
      "B": "300.0 N",
      "C": "75.0 N",
      "D": "225.0 N"
    },
    "optionsList": [
      "150.0 N",
      "300.0 N",
      "75.0 N",
      "225.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.\n\n5. FINAL ANSWER:\nOption A: 150.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.",
      "finalAnswer": "Option A: 150.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-238",
    "questionNumber": 238,
    "question": "A uniform horizontal rod of mass $20\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "200.0 N",
      "B": "400.0 N",
      "C": "100.0 N",
      "D": "300.0 N"
    },
    "optionsList": [
      "200.0 N",
      "400.0 N",
      "100.0 N",
      "300.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.\n\n5. FINAL ANSWER:\nOption A: 200.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.",
      "finalAnswer": "Option A: 200.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-239",
    "questionNumber": 239,
    "question": "A uniform horizontal rod of mass $10\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "100.0 N",
      "B": "200.0 N",
      "C": "50.0 N",
      "D": "150.0 N"
    },
    "optionsList": [
      "100.0 N",
      "200.0 N",
      "50.0 N",
      "150.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.\n\n5. FINAL ANSWER:\nOption A: 100.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.",
      "finalAnswer": "Option A: 100.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-240",
    "questionNumber": 240,
    "question": "A uniform horizontal rod of mass $15\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "150.0 N",
      "B": "300.0 N",
      "C": "75.0 N",
      "D": "225.0 N"
    },
    "optionsList": [
      "150.0 N",
      "300.0 N",
      "75.0 N",
      "225.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.\n\n5. FINAL ANSWER:\nOption A: 150.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.",
      "finalAnswer": "Option A: 150.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-241",
    "questionNumber": 241,
    "question": "A uniform horizontal rod of mass $20\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "200.0 N",
      "B": "400.0 N",
      "C": "100.0 N",
      "D": "300.0 N"
    },
    "optionsList": [
      "200.0 N",
      "400.0 N",
      "100.0 N",
      "300.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.\n\n5. FINAL ANSWER:\nOption A: 200.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.",
      "finalAnswer": "Option A: 200.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-242",
    "questionNumber": 242,
    "question": "A uniform horizontal rod of mass $10\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "100.0 N",
      "B": "200.0 N",
      "C": "50.0 N",
      "D": "150.0 N"
    },
    "optionsList": [
      "100.0 N",
      "200.0 N",
      "50.0 N",
      "150.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.\n\n5. FINAL ANSWER:\nOption A: 100.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.",
      "finalAnswer": "Option A: 100.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-243",
    "questionNumber": 243,
    "question": "A uniform horizontal rod of mass $15\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "150.0 N",
      "B": "300.0 N",
      "C": "75.0 N",
      "D": "225.0 N"
    },
    "optionsList": [
      "150.0 N",
      "300.0 N",
      "75.0 N",
      "225.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.\n\n5. FINAL ANSWER:\nOption A: 150.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.",
      "finalAnswer": "Option A: 150.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-244",
    "questionNumber": 244,
    "question": "A uniform horizontal rod of mass $20\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "200.0 N",
      "B": "400.0 N",
      "C": "100.0 N",
      "D": "300.0 N"
    },
    "optionsList": [
      "200.0 N",
      "400.0 N",
      "100.0 N",
      "300.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.\n\n5. FINAL ANSWER:\nOption A: 200.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.",
      "finalAnswer": "Option A: 200.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-245",
    "questionNumber": 245,
    "question": "A uniform horizontal rod of mass $10\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "100.0 N",
      "B": "200.0 N",
      "C": "50.0 N",
      "D": "150.0 N"
    },
    "optionsList": [
      "100.0 N",
      "200.0 N",
      "50.0 N",
      "150.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.\n\n5. FINAL ANSWER:\nOption A: 100.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.",
      "finalAnswer": "Option A: 100.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-246",
    "questionNumber": 246,
    "question": "A uniform horizontal rod of mass $15\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "150.0 N",
      "B": "300.0 N",
      "C": "75.0 N",
      "D": "225.0 N"
    },
    "optionsList": [
      "150.0 N",
      "300.0 N",
      "75.0 N",
      "225.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.\n\n5. FINAL ANSWER:\nOption A: 150.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.",
      "finalAnswer": "Option A: 150.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-247",
    "questionNumber": 247,
    "question": "A uniform horizontal rod of mass $20\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "200.0 N",
      "B": "400.0 N",
      "C": "100.0 N",
      "D": "300.0 N"
    },
    "optionsList": [
      "200.0 N",
      "400.0 N",
      "100.0 N",
      "300.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.\n\n5. FINAL ANSWER:\nOption A: 200.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.",
      "finalAnswer": "Option A: 200.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-248",
    "questionNumber": 248,
    "question": "A uniform horizontal rod of mass $10\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "100.0 N",
      "B": "200.0 N",
      "C": "50.0 N",
      "D": "150.0 N"
    },
    "optionsList": [
      "100.0 N",
      "200.0 N",
      "50.0 N",
      "150.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.\n\n5. FINAL ANSWER:\nOption A: 100.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 10\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 10 * 10 * 1 = 100 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 100 implies T = 100.0 N.",
      "finalAnswer": "Option A: 100.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-249",
    "questionNumber": 249,
    "question": "A uniform horizontal rod of mass $15\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "150.0 N",
      "B": "300.0 N",
      "C": "75.0 N",
      "D": "225.0 N"
    },
    "optionsList": [
      "150.0 N",
      "300.0 N",
      "75.0 N",
      "225.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.\n\n5. FINAL ANSWER:\nOption A: 150.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 15\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 15 * 10 * 1 = 150 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 150 implies T = 150.0 N.",
      "finalAnswer": "Option A: 150.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-250",
    "questionNumber": 250,
    "question": "A uniform horizontal rod of mass $20\\text{ kg}$ and length $2\\text{ m}$ is hinged to a vertical wall at one end and supported by a cable attached to its outer end at an angle of $30^\\circ$ above the rod ($g = 10\\text{ m/s}^2$). The tension in the cable is:",
    "options": {
      "A": "200.0 N",
      "B": "400.0 N",
      "C": "100.0 N",
      "D": "300.0 N"
    },
    "optionsList": [
      "200.0 N",
      "400.0 N",
      "100.0 N",
      "300.0 N"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nFor rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.\n\n2. GIVEN:\nRod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.\n\n3. FORMULA / PRINCIPLE:\nM g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ\n\n4. STEP-BY-STEP SOLUTION:\n1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.\n\n5. FINAL ANSWER:\nOption A: 200.0 N\n\n6. QUICK TIP:\nTaking torques about the hinge completely eliminates the unknown hinge reaction force!",
    "solutionStructured": {
      "concept": "For rotational equilibrium of the rod about the hinge: $\\sum \\tau_{\\text{hinge}} = 0$. The torque of gravity acting at the rod's midpoint must balance the vertical component of the cable tension.",
      "given": "Rod mass $M = 20\\text{ kg}$, length $L = 2\\text{ m}$, cable angle $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
      "formula": "M g \\left(\\frac{L}{2}\\right) = T L \\sin 30^\\circ",
      "stepByStep": "1. Weight acts at midpoint L/2: tau_gravity = 20 * 10 * 1 = 200 N m clockwise.\n2. Tension produces counter-clockwise torque: tau_cable = T * 2 * sin(30) = T * 2 * 0.5 = T * 1 N m.\n3. Equating torques: T * 1 = 200 implies T = 200.0 N.",
      "finalAnswer": "Option A: 200.0 N",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Rigid body equilibrium and hinge forces",
    "source": "VG Insights Practice",
    "isPYQ": false
  }
];
