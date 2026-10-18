// Auto-generated verified NEET UG Question Bank
// Chapter: System of Particles and Rotational Motion | Physics | Class 11 | Part 3
// Target: Exactly 125 MCQs with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const ROTATIONAL_MOTION_PART3_MCQS: ChapterwiseMCQ[] = [
  {
    "id": "rot-mcq-251",
    "questionNumber": 251,
    "question": "The ratio of the radius of gyration of a thin uniform disc about an axis passing through its centre and normal to its plane to the radius of gyration of the disc about its diameter is:",
    "options": {
      "A": "sqrt(2) : 1",
      "B": "1 : sqrt(2)",
      "C": "2 : 1",
      "D": "1 : 2"
    },
    "optionsList": [
      "sqrt(2) : 1",
      "1 : sqrt(2)",
      "2 : 1",
      "1 : 2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe radius of gyration $k$ is defined by $I = M k^2 \\implies k = \\sqrt{I/M}$. For a disc of mass $M$ and radius $R$:\n1. Central perpendicular axis: $I_1 = \\frac{1}{2} M R^2 \\implies k_1 = \\frac{R}{\\sqrt{2}}$.\n2. Diameter axis: $I_2 = \\frac{1}{4} M R^2 \\implies k_2 = \\frac{R}{2}$.\n\n2. GIVEN:\nThin uniform disc of mass $M$ and radius $R$.\n\n3. FORMULA / PRINCIPLE:\nk_1 = \\frac{R}{\\sqrt{2}}, \\quad k_2 = \\frac{R}{2}, \\quad \\frac{k_1}{k_2} = \\frac{R/\\sqrt{2}}{R/2} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}\n\n4. STEP-BY-STEP SOLUTION:\n1. For the perpendicular central axis: $I_1 = \\frac{1}{2} M R^2 \\implies k_1 = \\sqrt{\\frac{R^2}{2}} = \\frac{R}{\\sqrt{2}}$.\n2. By perpendicular axis theorem, $I_z = I_x + I_y = 2 I_{\\text{dia}} \\implies I_{\\text{dia}} = \\frac{1}{4} M R^2$.\n3. Radius of gyration about diameter: $k_2 = \\sqrt{\\frac{R^2}{4}} = \\frac{R}{2}$.\n4. Ratio: $\\frac{k_1}{k_2} = \\frac{R / \\sqrt{2}}{R / 2} = \\frac{2}{\\sqrt{2}} = \\sqrt{2} : 1$.\n\n5. FINAL ANSWER:\nOption A: sqrt(2) : 1\n\n6. QUICK TIP:\nRadius of gyration scales as $\\sqrt{I}$: ratio $k_1 / k_2 = \\sqrt{I_1 / I_2} = \\sqrt{(1/2)/(1/4)} = \\sqrt{2} : 1$.",
    "solutionStructured": {
      "concept": "The radius of gyration $k$ is defined by $I = M k^2 \\implies k = \\sqrt{I/M}$. For a disc of mass $M$ and radius $R$:\n1. Central perpendicular axis: $I_1 = \\frac{1}{2} M R^2 \\implies k_1 = \\frac{R}{\\sqrt{2}}$.\n2. Diameter axis: $I_2 = \\frac{1}{4} M R^2 \\implies k_2 = \\frac{R}{2}$.",
      "given": "Thin uniform disc of mass $M$ and radius $R$.",
      "formula": "k_1 = \\frac{R}{\\sqrt{2}}, \\quad k_2 = \\frac{R}{2}, \\quad \\frac{k_1}{k_2} = \\frac{R/\\sqrt{2}}{R/2} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}",
      "stepByStep": "1. For the perpendicular central axis: $I_1 = \\frac{1}{2} M R^2 \\implies k_1 = \\sqrt{\\frac{R^2}{2}} = \\frac{R}{\\sqrt{2}}$.\n2. By perpendicular axis theorem, $I_z = I_x + I_y = 2 I_{\\text{dia}} \\implies I_{\\text{dia}} = \\frac{1}{4} M R^2$.\n3. Radius of gyration about diameter: $k_2 = \\sqrt{\\frac{R^2}{4}} = \\frac{R}{2}$.\n4. Ratio: $\\frac{k_1}{k_2} = \\frac{R / \\sqrt{2}}{R / 2} = \\frac{2}{\\sqrt{2}} = \\sqrt{2} : 1$.",
      "finalAnswer": "Option A: sqrt(2) : 1",
      "whyOtherOptionsWrong": "Option B (1 : sqrt(2)) inverts the ratio. Option C (2 : 1) compares the moments of inertia instead of their square roots."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Radius of gyration",
    "source": "NEET 2022",
    "isPYQ": true,
    "pyqYear": 2022
  },
  {
    "id": "rot-mcq-252",
    "questionNumber": 252,
    "question": "From a uniform disc of radius $R$ and mass $M$, a circular hole of diameter $R$, whose rim passes through the centre of the disc, is cut out. What is the moment of inertia of the remaining part of the disc about a perpendicular axis passing through the centre of the original disc?",
    "options": {
      "A": "13 M R^2 / 32",
      "B": "11 M R^2 / 32",
      "C": "9 M R^2 / 32",
      "D": "15 M R^2 / 32"
    },
    "optionsList": [
      "13 M R^2 / 32",
      "11 M R^2 / 32",
      "9 M R^2 / 32",
      "15 M R^2 / 32"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nUse the principle of superposition and the parallel-axis theorem:\n$I_{\\text{rem}} = I_{\\text{original}} - I_{\\text{hole}}$.\n\n2. GIVEN:\nOriginal disc: mass $M$, radius $R$. Cutout: diameter $R \\implies$ radius $r = R/2$. Cutout touches center and rim, so its center is at distance $d = R/2$ from main center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{rem}} = I_{\\text{orig}} - (I_{\\text{hole, cm}} + m d^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Area of original disc $A_0 = \\pi R^2$. Area of hole $A = \\pi (R/2)^2 = \\frac{\\pi R^2}{4}$.\n2. Mass of removed portion: $m = \\frac{M}{4}$.\n3. Original disc MOI about central perpendicular axis: $I_{\\text{orig}} = \\frac{1}{2} M R^2$.\n4. MOI of cutout about its own center: $I_{\\text{hole, cm}} = \\frac{1}{2} m r^2 = \\frac{1}{2} \\left(\\frac{M}{4}\\right) \\left(\\frac{R}{2}\\right)^2 = \\frac{M R^2}{32}$.\n5. MOI of cutout about original center (via parallel-axis theorem): $I_{\\text{hole}} = I_{\\text{hole, cm}} + m d^2 = \\frac{M R^2}{32} + \\left(\\frac{M}{4}\\right) \\left(\\frac{R}{2}\\right)^2 = \\frac{M R^2}{32} + \\frac{M R^2}{16} = \\frac{3 M R^2}{32}$.\n6. Remaining MOI: $I_{\\text{rem}} = \\frac{1}{2} M R^2 - \\frac{3}{32} M R^2 = \\frac{16 - 3}{32} M R^2 = \\frac{13 M R^2}{32}$.\n\n5. FINAL ANSWER:\nOption A: 13 M R^2 / 32\n\n6. QUICK TIP:\nAlways remember both steps for the cutout: (1) Find mass fraction from area ratio ($M/4$), and (2) Apply parallel axis theorem to transfer to the required axis!",
    "solutionStructured": {
      "concept": "Use the principle of superposition and the parallel-axis theorem:\n$I_{\\text{rem}} = I_{\\text{original}} - I_{\\text{hole}}$.",
      "given": "Original disc: mass $M$, radius $R$. Cutout: diameter $R \\implies$ radius $r = R/2$. Cutout touches center and rim, so its center is at distance $d = R/2$ from main center.",
      "formula": "I_{\\text{rem}} = I_{\\text{orig}} - (I_{\\text{hole, cm}} + m d^2)",
      "stepByStep": "1. Area of original disc $A_0 = \\pi R^2$. Area of hole $A = \\pi (R/2)^2 = \\frac{\\pi R^2}{4}$.\n2. Mass of removed portion: $m = \\frac{M}{4}$.\n3. Original disc MOI about central perpendicular axis: $I_{\\text{orig}} = \\frac{1}{2} M R^2$.\n4. MOI of cutout about its own center: $I_{\\text{hole, cm}} = \\frac{1}{2} m r^2 = \\frac{1}{2} \\left(\\frac{M}{4}\\right) \\left(\\frac{R}{2}\\right)^2 = \\frac{M R^2}{32}$.\n5. MOI of cutout about original center (via parallel-axis theorem): $I_{\\text{hole}} = I_{\\text{hole, cm}} + m d^2 = \\frac{M R^2}{32} + \\left(\\frac{M}{4}\\right) \\left(\\frac{R}{2}\\right)^2 = \\frac{M R^2}{32} + \\frac{M R^2}{16} = \\frac{3 M R^2}{32}$.\n6. Remaining MOI: $I_{\\text{rem}} = \\frac{1}{2} M R^2 - \\frac{3}{32} M R^2 = \\frac{16 - 3}{32} M R^2 = \\frac{13 M R^2}{32}$.",
      "finalAnswer": "Option A: 13 M R^2 / 32",
      "whyOtherOptionsWrong": "Option B (11/32) forgets the intrinsic MI of the hole about its own center."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of bodies with cutouts",
    "source": "NEET 2016",
    "isPYQ": true,
    "pyqYear": 2016
  },
  {
    "id": "rot-mcq-253",
    "questionNumber": 253,
    "question": "What is the moment of inertia of a uniform thin rod of mass $M$ and length $L$ about an axis perpendicular to the rod and passing through one of its ends?",
    "options": {
      "A": "M L^2 / 3",
      "B": "M L^2 / 12",
      "C": "M L^2 / 2",
      "D": "M L^2 / 4"
    },
    "optionsList": [
      "M L^2 / 3",
      "M L^2 / 12",
      "M L^2 / 2",
      "M L^2 / 4"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nAccording to the parallel-axis theorem, $I = I_{\\text{cm}} + M d^2$. For a thin rod, $I_{\\text{cm}} = \\frac{1}{12} M L^2$ and distance from center to end is $d = L/2$.\n\n2. GIVEN:\nUniform thin rod of mass $M$, length $L$, axis through one end.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{end}} = I_{\\text{cm}} + M \\left(\\frac{L}{2}\\right)^2 = \\frac{1}{12} M L^2 + \\frac{1}{4} M L^2 = \\frac{1}{3} M L^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Center of mass MOI is $I_{\\text{cm}} = \\frac{1}{12} M L^2$.\n2. Distance to end is $d = L/2$.\n3. $I = \\frac{1}{12} M L^2 + M (L/2)^2 = \\left(\\frac{1}{12} + \\frac{1}{4}\\right) M L^2 = \\frac{4}{12} M L^2 = \\frac{1}{3} M L^2$.\n\n5. FINAL ANSWER:\nOption A: M L^2 / 3\n\n6. QUICK TIP:\nThrough center: $ML^2/12$. Through end: $ML^2/3$. Memorize this standard pair!",
    "solutionStructured": {
      "concept": "According to the parallel-axis theorem, $I = I_{\\text{cm}} + M d^2$. For a thin rod, $I_{\\text{cm}} = \\frac{1}{12} M L^2$ and distance from center to end is $d = L/2$.",
      "given": "Uniform thin rod of mass $M$, length $L$, axis through one end.",
      "formula": "I_{\\text{end}} = I_{\\text{cm}} + M \\left(\\frac{L}{2}\\right)^2 = \\frac{1}{12} M L^2 + \\frac{1}{4} M L^2 = \\frac{1}{3} M L^2",
      "stepByStep": "1. Center of mass MOI is $I_{\\text{cm}} = \\frac{1}{12} M L^2$.\n2. Distance to end is $d = L/2$.\n3. $I = \\frac{1}{12} M L^2 + M (L/2)^2 = \\left(\\frac{1}{12} + \\frac{1}{4}\\right) M L^2 = \\frac{4}{12} M L^2 = \\frac{1}{3} M L^2$.",
      "finalAnswer": "Option A: M L^2 / 3",
      "whyOtherOptionsWrong": "Option B ($ML^2/12$) is the moment of inertia through the center of mass."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rods",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-254",
    "questionNumber": 254,
    "question": "The perpendicular-axis theorem ($I_z = I_x + I_y$) is strictly applicable to:",
    "options": {
      "A": "Planar (two-dimensional) laminar bodies only",
      "B": "Any three-dimensional rigid body",
      "C": "Only spherical bodies",
      "D": "Only bodies with cylindrical symmetry"
    },
    "optionsList": [
      "Planar (two-dimensional) laminar bodies only",
      "Any three-dimensional rigid body",
      "Only spherical bodies",
      "Only bodies with cylindrical symmetry"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe perpendicular-axis theorem applies exclusively to flat, two-dimensional planar laminae where all particles lie in the xy-plane (so $z = 0$ for all mass elements).\n\n2. GIVEN:\nPerpendicular-axis theorem $I_z = I_x + I_y$.\n\n3. FORMULA / PRINCIPLE:\nI_z = \\int (x^2 + y^2) dm = \\int y^2 dm + \\int x^2 dm = I_x + I_y\n\n4. STEP-BY-STEP SOLUTION:\n1. For planar bodies in xy-plane, $z = 0$.\n2. Distance squared from z-axis is $x^2 + y^2$.\n3. Therefore $I_z = \\int (x^2 + y^2) dm = I_x + I_y$.\n4. For a 3D body, $z \\neq 0$, so the relation does not hold.\n\n5. FINAL ANSWER:\nOption A: Planar (two-dimensional) laminar bodies only\n\n6. QUICK TIP:\nNever apply the perpendicular-axis theorem to 3D objects like solid cylinders or spheres!",
    "solutionStructured": {
      "concept": "The perpendicular-axis theorem applies exclusively to flat, two-dimensional planar laminae where all particles lie in the xy-plane (so $z = 0$ for all mass elements).",
      "given": "Perpendicular-axis theorem $I_z = I_x + I_y$.",
      "formula": "I_z = \\int (x^2 + y^2) dm = \\int y^2 dm + \\int x^2 dm = I_x + I_y",
      "stepByStep": "1. For planar bodies in xy-plane, $z = 0$.\n2. Distance squared from z-axis is $x^2 + y^2$.\n3. Therefore $I_z = \\int (x^2 + y^2) dm = I_x + I_y$.\n4. For a 3D body, $z \\neq 0$, so the relation does not hold.",
      "finalAnswer": "Option A: Planar (two-dimensional) laminar bodies only",
      "whyOtherOptionsWrong": "Option B is a dangerous misconception; 3D bodies have z-coordinates that invalidate $I_z = I_x + I_y$."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Perpendicular-axis theorem applicability",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-255",
    "questionNumber": 255,
    "question": "Four point masses, each of mass $m$, are placed at the four corners of a light square frame of side $a$. What is the moment of inertia of the system about an axis passing through one of the masses and perpendicular to the plane of the square?",
    "options": {
      "A": "4 m a^2",
      "B": "2 m a^2",
      "C": "3 m a^2",
      "D": "m a^2"
    },
    "optionsList": [
      "4 m a^2",
      "2 m a^2",
      "3 m a^2",
      "m a^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nMoment of inertia of a discrete system of particles is $I = \\sum m_i r_i^2$, where $r_i$ is the perpendicular distance of each mass from the axis of rotation.\n\n2. GIVEN:\nFour masses $m$ at $(0,0)$, $(a,0)$, $(0,a)$, and $(a,a)$. Axis perpendicular to plane passing through $(0,0)$.\n\n3. FORMULA / PRINCIPLE:\nI = m r_1^2 + m r_2^2 + m r_3^2 + m r_4^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Mass 1 at origin: r1 = 0, contribution = 0.\n2. Mass 2 at (a, 0): r2 = a, contribution = m a^2.\n3. Mass 3 at (0, a): r3 = a, contribution = m a^2.\n4. Mass 4 at (a, a): r4 = a * sqrt(2), contribution = m * (2 a^2) = 2 m a^2.\n5. Total I = 0 + m a^2 + m a^2 + 2 m a^2 = 4 m a^2.\n\n5. FINAL ANSWER:\nOption A: 4 m a^2\n\n6. QUICK TIP:\nDo not forget the diagonally opposite corner at distance a*sqrt(2); its contribution is 2 m a^2!",
    "solutionStructured": {
      "concept": "Moment of inertia of a discrete system of particles is $I = \\sum m_i r_i^2$, where $r_i$ is the perpendicular distance of each mass from the axis of rotation.",
      "given": "Four masses $m$ at $(0,0)$, $(a,0)$, $(0,a)$, and $(a,a)$. Axis perpendicular to plane passing through $(0,0)$.",
      "formula": "I = m r_1^2 + m r_2^2 + m r_3^2 + m r_4^2",
      "stepByStep": "1. Mass 1 at origin: r1 = 0, contribution = 0.\n2. Mass 2 at (a, 0): r2 = a, contribution = m a^2.\n3. Mass 3 at (0, a): r3 = a, contribution = m a^2.\n4. Mass 4 at (a, a): r4 = a * sqrt(2), contribution = m * (2 a^2) = 2 m a^2.\n5. Total I = 0 + m a^2 + m a^2 + 2 m a^2 = 4 m a^2.",
      "finalAnswer": "Option A: 4 m a^2",
      "whyOtherOptionsWrong": "Option B (2 m a^2) omits the diagonally opposite corner."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of discrete system",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-256",
    "questionNumber": 256,
    "question": "A uniform solid sphere has mass $M = 6\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.600 kg m^2",
      "B": "0.900 kg m^2",
      "C": "1.500 kg m^2",
      "D": "0.300 kg m^2"
    },
    "optionsList": [
      "0.600 kg m^2",
      "0.900 kg m^2",
      "1.500 kg m^2",
      "0.300 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 6\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 6 * (0.5)^2 = 0.4 * 6 * 0.25 = 0.600 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.600 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 6\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 6 * (0.5)^2 = 0.4 * 6 * 0.25 = 0.600 kg m^2.",
      "finalAnswer": "Option A: 0.600 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-257",
    "questionNumber": 257,
    "question": "A uniform solid sphere has mass $M = 8\\text{ kg}$ and radius $R = 1.0\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "3.200 kg m^2",
      "B": "4.800 kg m^2",
      "C": "8.000 kg m^2",
      "D": "1.600 kg m^2"
    },
    "optionsList": [
      "3.200 kg m^2",
      "4.800 kg m^2",
      "8.000 kg m^2",
      "1.600 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 8\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 8 * (1.0)^2 = 0.4 * 8 * 1.00 = 3.200 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.200 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 8\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 8 * (1.0)^2 = 0.4 * 8 * 1.00 = 3.200 kg m^2.",
      "finalAnswer": "Option A: 3.200 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-258",
    "questionNumber": 258,
    "question": "A uniform solid sphere has mass $M = 2\\text{ kg}$ and radius $R = 1.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "1.800 kg m^2",
      "B": "2.700 kg m^2",
      "C": "4.500 kg m^2",
      "D": "0.900 kg m^2"
    },
    "optionsList": [
      "1.800 kg m^2",
      "2.700 kg m^2",
      "4.500 kg m^2",
      "0.900 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 2 * (1.5)^2 = 0.4 * 2 * 2.25 = 1.800 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.800 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 2 * (1.5)^2 = 0.4 * 2 * 2.25 = 1.800 kg m^2.",
      "finalAnswer": "Option A: 1.800 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-259",
    "questionNumber": 259,
    "question": "A uniform solid sphere has mass $M = 4\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.400 kg m^2",
      "B": "0.600 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.200 kg m^2"
    },
    "optionsList": [
      "0.400 kg m^2",
      "0.600 kg m^2",
      "1.000 kg m^2",
      "0.200 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 4\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 4 * (0.5)^2 = 0.4 * 4 * 0.25 = 0.400 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.400 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 4\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 4 * (0.5)^2 = 0.4 * 4 * 0.25 = 0.400 kg m^2.",
      "finalAnswer": "Option A: 0.400 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-260",
    "questionNumber": 260,
    "question": "A uniform solid sphere has mass $M = 6\\text{ kg}$ and radius $R = 1.0\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "2.400 kg m^2",
      "B": "3.600 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.200 kg m^2"
    },
    "optionsList": [
      "2.400 kg m^2",
      "3.600 kg m^2",
      "6.000 kg m^2",
      "1.200 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 6\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 6 * (1.0)^2 = 0.4 * 6 * 1.00 = 2.400 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 2.400 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 6\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 6 * (1.0)^2 = 0.4 * 6 * 1.00 = 2.400 kg m^2.",
      "finalAnswer": "Option A: 2.400 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-261",
    "questionNumber": 261,
    "question": "A uniform solid sphere has mass $M = 8\\text{ kg}$ and radius $R = 1.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "7.200 kg m^2",
      "B": "10.800 kg m^2",
      "C": "18.000 kg m^2",
      "D": "3.600 kg m^2"
    },
    "optionsList": [
      "7.200 kg m^2",
      "10.800 kg m^2",
      "18.000 kg m^2",
      "3.600 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 8\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 8 * (1.5)^2 = 0.4 * 8 * 2.25 = 7.200 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 7.200 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 8\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 8 * (1.5)^2 = 0.4 * 8 * 2.25 = 7.200 kg m^2.",
      "finalAnswer": "Option A: 7.200 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-262",
    "questionNumber": 262,
    "question": "A uniform solid sphere has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.200 kg m^2",
      "B": "0.300 kg m^2",
      "C": "0.500 kg m^2",
      "D": "0.100 kg m^2"
    },
    "optionsList": [
      "0.200 kg m^2",
      "0.300 kg m^2",
      "0.500 kg m^2",
      "0.100 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 2 * (0.5)^2 = 0.4 * 2 * 0.25 = 0.200 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.200 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 2 * (0.5)^2 = 0.4 * 2 * 0.25 = 0.200 kg m^2.",
      "finalAnswer": "Option A: 0.200 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-263",
    "questionNumber": 263,
    "question": "A uniform solid sphere has mass $M = 4\\text{ kg}$ and radius $R = 1.0\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "1.600 kg m^2",
      "B": "2.400 kg m^2",
      "C": "4.000 kg m^2",
      "D": "0.800 kg m^2"
    },
    "optionsList": [
      "1.600 kg m^2",
      "2.400 kg m^2",
      "4.000 kg m^2",
      "0.800 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 4\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 4 * (1.0)^2 = 0.4 * 4 * 1.00 = 1.600 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.600 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 4\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 4 * (1.0)^2 = 0.4 * 4 * 1.00 = 1.600 kg m^2.",
      "finalAnswer": "Option A: 1.600 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-264",
    "questionNumber": 264,
    "question": "A uniform solid sphere has mass $M = 6\\text{ kg}$ and radius $R = 1.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "5.400 kg m^2",
      "B": "8.100 kg m^2",
      "C": "13.500 kg m^2",
      "D": "2.700 kg m^2"
    },
    "optionsList": [
      "5.400 kg m^2",
      "8.100 kg m^2",
      "13.500 kg m^2",
      "2.700 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 6\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 6 * (1.5)^2 = 0.4 * 6 * 2.25 = 5.400 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 5.400 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 6\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 6 * (1.5)^2 = 0.4 * 6 * 2.25 = 5.400 kg m^2.",
      "finalAnswer": "Option A: 5.400 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-265",
    "questionNumber": 265,
    "question": "A uniform solid sphere has mass $M = 8\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.800 kg m^2",
      "B": "1.200 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.400 kg m^2"
    },
    "optionsList": [
      "0.800 kg m^2",
      "1.200 kg m^2",
      "2.000 kg m^2",
      "0.400 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 8\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 8 * (0.5)^2 = 0.4 * 8 * 0.25 = 0.800 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.800 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 8\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 8 * (0.5)^2 = 0.4 * 8 * 0.25 = 0.800 kg m^2.",
      "finalAnswer": "Option A: 0.800 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-266",
    "questionNumber": 266,
    "question": "A uniform solid sphere has mass $M = 2\\text{ kg}$ and radius $R = 1.0\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.800 kg m^2",
      "B": "1.200 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.400 kg m^2"
    },
    "optionsList": [
      "0.800 kg m^2",
      "1.200 kg m^2",
      "2.000 kg m^2",
      "0.400 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 2 * (1.0)^2 = 0.4 * 2 * 1.00 = 0.800 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.800 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 2 * (1.0)^2 = 0.4 * 2 * 1.00 = 0.800 kg m^2.",
      "finalAnswer": "Option A: 0.800 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-267",
    "questionNumber": 267,
    "question": "A uniform solid sphere has mass $M = 4\\text{ kg}$ and radius $R = 1.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "3.600 kg m^2",
      "B": "5.400 kg m^2",
      "C": "9.000 kg m^2",
      "D": "1.800 kg m^2"
    },
    "optionsList": [
      "3.600 kg m^2",
      "5.400 kg m^2",
      "9.000 kg m^2",
      "1.800 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 4\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 4 * (1.5)^2 = 0.4 * 4 * 2.25 = 3.600 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.600 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 4\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 4 * (1.5)^2 = 0.4 * 4 * 2.25 = 3.600 kg m^2.",
      "finalAnswer": "Option A: 3.600 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-268",
    "questionNumber": 268,
    "question": "A uniform solid sphere has mass $M = 6\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.600 kg m^2",
      "B": "0.900 kg m^2",
      "C": "1.500 kg m^2",
      "D": "0.300 kg m^2"
    },
    "optionsList": [
      "0.600 kg m^2",
      "0.900 kg m^2",
      "1.500 kg m^2",
      "0.300 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 6\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 6 * (0.5)^2 = 0.4 * 6 * 0.25 = 0.600 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.600 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 6\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 6 * (0.5)^2 = 0.4 * 6 * 0.25 = 0.600 kg m^2.",
      "finalAnswer": "Option A: 0.600 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-269",
    "questionNumber": 269,
    "question": "A uniform solid sphere has mass $M = 8\\text{ kg}$ and radius $R = 1.0\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "3.200 kg m^2",
      "B": "4.800 kg m^2",
      "C": "8.000 kg m^2",
      "D": "1.600 kg m^2"
    },
    "optionsList": [
      "3.200 kg m^2",
      "4.800 kg m^2",
      "8.000 kg m^2",
      "1.600 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 8\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 8 * (1.0)^2 = 0.4 * 8 * 1.00 = 3.200 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.200 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 8\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 8 * (1.0)^2 = 0.4 * 8 * 1.00 = 3.200 kg m^2.",
      "finalAnswer": "Option A: 3.200 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-270",
    "questionNumber": 270,
    "question": "A uniform solid sphere has mass $M = 2\\text{ kg}$ and radius $R = 1.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "1.800 kg m^2",
      "B": "2.700 kg m^2",
      "C": "4.500 kg m^2",
      "D": "0.900 kg m^2"
    },
    "optionsList": [
      "1.800 kg m^2",
      "2.700 kg m^2",
      "4.500 kg m^2",
      "0.900 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 2 * (1.5)^2 = 0.4 * 2 * 2.25 = 1.800 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.800 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 2 * (1.5)^2 = 0.4 * 2 * 2.25 = 1.800 kg m^2.",
      "finalAnswer": "Option A: 1.800 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-271",
    "questionNumber": 271,
    "question": "A uniform solid sphere has mass $M = 4\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.400 kg m^2",
      "B": "0.600 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.200 kg m^2"
    },
    "optionsList": [
      "0.400 kg m^2",
      "0.600 kg m^2",
      "1.000 kg m^2",
      "0.200 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 4\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 4 * (0.5)^2 = 0.4 * 4 * 0.25 = 0.400 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.400 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 4\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 4 * (0.5)^2 = 0.4 * 4 * 0.25 = 0.400 kg m^2.",
      "finalAnswer": "Option A: 0.400 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-272",
    "questionNumber": 272,
    "question": "A uniform solid sphere has mass $M = 6\\text{ kg}$ and radius $R = 1.0\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "2.400 kg m^2",
      "B": "3.600 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.200 kg m^2"
    },
    "optionsList": [
      "2.400 kg m^2",
      "3.600 kg m^2",
      "6.000 kg m^2",
      "1.200 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 6\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 6 * (1.0)^2 = 0.4 * 6 * 1.00 = 2.400 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 2.400 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 6\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 6 * (1.0)^2 = 0.4 * 6 * 1.00 = 2.400 kg m^2.",
      "finalAnswer": "Option A: 2.400 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-273",
    "questionNumber": 273,
    "question": "A uniform solid sphere has mass $M = 8\\text{ kg}$ and radius $R = 1.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "7.200 kg m^2",
      "B": "10.800 kg m^2",
      "C": "18.000 kg m^2",
      "D": "3.600 kg m^2"
    },
    "optionsList": [
      "7.200 kg m^2",
      "10.800 kg m^2",
      "18.000 kg m^2",
      "3.600 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 8\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 8 * (1.5)^2 = 0.4 * 8 * 2.25 = 7.200 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 7.200 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 8\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 8 * (1.5)^2 = 0.4 * 8 * 2.25 = 7.200 kg m^2.",
      "finalAnswer": "Option A: 7.200 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-274",
    "questionNumber": 274,
    "question": "A uniform solid sphere has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.200 kg m^2",
      "B": "0.300 kg m^2",
      "C": "0.500 kg m^2",
      "D": "0.100 kg m^2"
    },
    "optionsList": [
      "0.200 kg m^2",
      "0.300 kg m^2",
      "0.500 kg m^2",
      "0.100 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 2 * (0.5)^2 = 0.4 * 2 * 0.25 = 0.200 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.200 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 2 * (0.5)^2 = 0.4 * 2 * 0.25 = 0.200 kg m^2.",
      "finalAnswer": "Option A: 0.200 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-275",
    "questionNumber": 275,
    "question": "A uniform solid sphere has mass $M = 4\\text{ kg}$ and radius $R = 1.0\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "1.600 kg m^2",
      "B": "2.400 kg m^2",
      "C": "4.000 kg m^2",
      "D": "0.800 kg m^2"
    },
    "optionsList": [
      "1.600 kg m^2",
      "2.400 kg m^2",
      "4.000 kg m^2",
      "0.800 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 4\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 4 * (1.0)^2 = 0.4 * 4 * 1.00 = 1.600 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.600 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 4\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 4 * (1.0)^2 = 0.4 * 4 * 1.00 = 1.600 kg m^2.",
      "finalAnswer": "Option A: 1.600 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-276",
    "questionNumber": 276,
    "question": "A uniform solid sphere has mass $M = 6\\text{ kg}$ and radius $R = 1.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "5.400 kg m^2",
      "B": "8.100 kg m^2",
      "C": "13.500 kg m^2",
      "D": "2.700 kg m^2"
    },
    "optionsList": [
      "5.400 kg m^2",
      "8.100 kg m^2",
      "13.500 kg m^2",
      "2.700 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 6\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 6 * (1.5)^2 = 0.4 * 6 * 2.25 = 5.400 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 5.400 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 6\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 6 * (1.5)^2 = 0.4 * 6 * 2.25 = 5.400 kg m^2.",
      "finalAnswer": "Option A: 5.400 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-277",
    "questionNumber": 277,
    "question": "A uniform solid sphere has mass $M = 8\\text{ kg}$ and radius $R = 0.5\\text{ m}$. Its moment of inertia about any diametrical axis is:",
    "options": {
      "A": "0.800 kg m^2",
      "B": "1.200 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.400 kg m^2"
    },
    "optionsList": [
      "0.800 kg m^2",
      "1.200 kg m^2",
      "2.000 kg m^2",
      "0.400 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.\n\n2. GIVEN:\nMass $M = 8\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI = \\frac{2}{5} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Formula: I = 0.4 * 8 * (0.5)^2 = 0.4 * 8 * 0.25 = 0.800 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.800 kg m^2\n\n6. QUICK TIP:\nSolid sphere is 2/5 M R^2, while hollow spherical shell is 2/3 M R^2.",
    "solutionStructured": {
      "concept": "The moment of inertia of a uniform solid sphere about any diameter is $I = \\frac{2}{5} M R^2$.",
      "given": "Mass $M = 8\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I = \\frac{2}{5} M R^2",
      "stepByStep": "1. Formula: I = 0.4 * 8 * (0.5)^2 = 0.4 * 8 * 0.25 = 0.800 kg m^2.",
      "finalAnswer": "Option A: 0.800 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Easy",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Standard moment of inertia formulas",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-278",
    "questionNumber": 278,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.750 kg m^2",
      "B": "0.500 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.250 kg m^2"
    },
    "optionsList": [
      "0.750 kg m^2",
      "0.500 kg m^2",
      "1.000 kg m^2",
      "0.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.",
      "finalAnswer": "Option A: 0.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-279",
    "questionNumber": 279,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "4.500 kg m^2",
      "B": "3.000 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.500 kg m^2"
    },
    "optionsList": [
      "4.500 kg m^2",
      "3.000 kg m^2",
      "6.000 kg m^2",
      "1.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 4.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.",
      "finalAnswer": "Option A: 4.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-280",
    "questionNumber": 280,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.375 kg m^2",
      "B": "2.250 kg m^2",
      "C": "4.500 kg m^2",
      "D": "1.125 kg m^2"
    },
    "optionsList": [
      "3.375 kg m^2",
      "2.250 kg m^2",
      "4.500 kg m^2",
      "1.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.",
      "finalAnswer": "Option A: 3.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-281",
    "questionNumber": 281,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "12.000 kg m^2",
      "B": "8.000 kg m^2",
      "C": "16.000 kg m^2",
      "D": "4.000 kg m^2"
    },
    "optionsList": [
      "12.000 kg m^2",
      "8.000 kg m^2",
      "16.000 kg m^2",
      "4.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 12.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.",
      "finalAnswer": "Option A: 12.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-282",
    "questionNumber": 282,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.125 kg m^2",
      "B": "0.750 kg m^2",
      "C": "1.500 kg m^2",
      "D": "0.375 kg m^2"
    },
    "optionsList": [
      "1.125 kg m^2",
      "0.750 kg m^2",
      "1.500 kg m^2",
      "0.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.",
      "finalAnswer": "Option A: 1.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-283",
    "questionNumber": 283,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.500 kg m^2",
      "B": "1.000 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.500 kg m^2"
    },
    "optionsList": [
      "1.500 kg m^2",
      "1.000 kg m^2",
      "2.000 kg m^2",
      "0.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.",
      "finalAnswer": "Option A: 1.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-284",
    "questionNumber": 284,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.750 kg m^2",
      "B": "4.500 kg m^2",
      "C": "9.000 kg m^2",
      "D": "2.250 kg m^2"
    },
    "optionsList": [
      "6.750 kg m^2",
      "4.500 kg m^2",
      "9.000 kg m^2",
      "2.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.",
      "finalAnswer": "Option A: 6.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-285",
    "questionNumber": 285,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "18.000 kg m^2",
      "B": "12.000 kg m^2",
      "C": "24.000 kg m^2",
      "D": "6.000 kg m^2"
    },
    "optionsList": [
      "18.000 kg m^2",
      "12.000 kg m^2",
      "24.000 kg m^2",
      "6.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 18.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.",
      "finalAnswer": "Option A: 18.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-286",
    "questionNumber": 286,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.375 kg m^2",
      "B": "0.250 kg m^2",
      "C": "0.500 kg m^2",
      "D": "0.125 kg m^2"
    },
    "optionsList": [
      "0.375 kg m^2",
      "0.250 kg m^2",
      "0.500 kg m^2",
      "0.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.",
      "finalAnswer": "Option A: 0.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-287",
    "questionNumber": 287,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.000 kg m^2",
      "B": "2.000 kg m^2",
      "C": "4.000 kg m^2",
      "D": "1.000 kg m^2"
    },
    "optionsList": [
      "3.000 kg m^2",
      "2.000 kg m^2",
      "4.000 kg m^2",
      "1.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.",
      "finalAnswer": "Option A: 3.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-288",
    "questionNumber": 288,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "10.125 kg m^2",
      "B": "6.750 kg m^2",
      "C": "13.500 kg m^2",
      "D": "3.375 kg m^2"
    },
    "optionsList": [
      "10.125 kg m^2",
      "6.750 kg m^2",
      "13.500 kg m^2",
      "3.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 10.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.",
      "finalAnswer": "Option A: 10.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-289",
    "questionNumber": 289,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.000 kg m^2",
      "B": "4.000 kg m^2",
      "C": "8.000 kg m^2",
      "D": "2.000 kg m^2"
    },
    "optionsList": [
      "6.000 kg m^2",
      "4.000 kg m^2",
      "8.000 kg m^2",
      "2.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.",
      "finalAnswer": "Option A: 6.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-290",
    "questionNumber": 290,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.750 kg m^2",
      "B": "0.500 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.250 kg m^2"
    },
    "optionsList": [
      "0.750 kg m^2",
      "0.500 kg m^2",
      "1.000 kg m^2",
      "0.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.",
      "finalAnswer": "Option A: 0.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-291",
    "questionNumber": 291,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "4.500 kg m^2",
      "B": "3.000 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.500 kg m^2"
    },
    "optionsList": [
      "4.500 kg m^2",
      "3.000 kg m^2",
      "6.000 kg m^2",
      "1.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 4.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.",
      "finalAnswer": "Option A: 4.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-292",
    "questionNumber": 292,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.375 kg m^2",
      "B": "2.250 kg m^2",
      "C": "4.500 kg m^2",
      "D": "1.125 kg m^2"
    },
    "optionsList": [
      "3.375 kg m^2",
      "2.250 kg m^2",
      "4.500 kg m^2",
      "1.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.",
      "finalAnswer": "Option A: 3.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-293",
    "questionNumber": 293,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "12.000 kg m^2",
      "B": "8.000 kg m^2",
      "C": "16.000 kg m^2",
      "D": "4.000 kg m^2"
    },
    "optionsList": [
      "12.000 kg m^2",
      "8.000 kg m^2",
      "16.000 kg m^2",
      "4.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 12.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.",
      "finalAnswer": "Option A: 12.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-294",
    "questionNumber": 294,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.125 kg m^2",
      "B": "0.750 kg m^2",
      "C": "1.500 kg m^2",
      "D": "0.375 kg m^2"
    },
    "optionsList": [
      "1.125 kg m^2",
      "0.750 kg m^2",
      "1.500 kg m^2",
      "0.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.",
      "finalAnswer": "Option A: 1.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-295",
    "questionNumber": 295,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.500 kg m^2",
      "B": "1.000 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.500 kg m^2"
    },
    "optionsList": [
      "1.500 kg m^2",
      "1.000 kg m^2",
      "2.000 kg m^2",
      "0.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.",
      "finalAnswer": "Option A: 1.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-296",
    "questionNumber": 296,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.750 kg m^2",
      "B": "4.500 kg m^2",
      "C": "9.000 kg m^2",
      "D": "2.250 kg m^2"
    },
    "optionsList": [
      "6.750 kg m^2",
      "4.500 kg m^2",
      "9.000 kg m^2",
      "2.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.",
      "finalAnswer": "Option A: 6.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-297",
    "questionNumber": 297,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "18.000 kg m^2",
      "B": "12.000 kg m^2",
      "C": "24.000 kg m^2",
      "D": "6.000 kg m^2"
    },
    "optionsList": [
      "18.000 kg m^2",
      "12.000 kg m^2",
      "24.000 kg m^2",
      "6.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 18.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.",
      "finalAnswer": "Option A: 18.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-298",
    "questionNumber": 298,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.375 kg m^2",
      "B": "0.250 kg m^2",
      "C": "0.500 kg m^2",
      "D": "0.125 kg m^2"
    },
    "optionsList": [
      "0.375 kg m^2",
      "0.250 kg m^2",
      "0.500 kg m^2",
      "0.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.",
      "finalAnswer": "Option A: 0.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-299",
    "questionNumber": 299,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.000 kg m^2",
      "B": "2.000 kg m^2",
      "C": "4.000 kg m^2",
      "D": "1.000 kg m^2"
    },
    "optionsList": [
      "3.000 kg m^2",
      "2.000 kg m^2",
      "4.000 kg m^2",
      "1.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.",
      "finalAnswer": "Option A: 3.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-300",
    "questionNumber": 300,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "10.125 kg m^2",
      "B": "6.750 kg m^2",
      "C": "13.500 kg m^2",
      "D": "3.375 kg m^2"
    },
    "optionsList": [
      "10.125 kg m^2",
      "6.750 kg m^2",
      "13.500 kg m^2",
      "3.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 10.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.",
      "finalAnswer": "Option A: 10.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-301",
    "questionNumber": 301,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.000 kg m^2",
      "B": "4.000 kg m^2",
      "C": "8.000 kg m^2",
      "D": "2.000 kg m^2"
    },
    "optionsList": [
      "6.000 kg m^2",
      "4.000 kg m^2",
      "8.000 kg m^2",
      "2.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.",
      "finalAnswer": "Option A: 6.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-302",
    "questionNumber": 302,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.750 kg m^2",
      "B": "0.500 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.250 kg m^2"
    },
    "optionsList": [
      "0.750 kg m^2",
      "0.500 kg m^2",
      "1.000 kg m^2",
      "0.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.",
      "finalAnswer": "Option A: 0.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-303",
    "questionNumber": 303,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "4.500 kg m^2",
      "B": "3.000 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.500 kg m^2"
    },
    "optionsList": [
      "4.500 kg m^2",
      "3.000 kg m^2",
      "6.000 kg m^2",
      "1.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 4.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.",
      "finalAnswer": "Option A: 4.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-304",
    "questionNumber": 304,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.375 kg m^2",
      "B": "2.250 kg m^2",
      "C": "4.500 kg m^2",
      "D": "1.125 kg m^2"
    },
    "optionsList": [
      "3.375 kg m^2",
      "2.250 kg m^2",
      "4.500 kg m^2",
      "1.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.",
      "finalAnswer": "Option A: 3.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-305",
    "questionNumber": 305,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "12.000 kg m^2",
      "B": "8.000 kg m^2",
      "C": "16.000 kg m^2",
      "D": "4.000 kg m^2"
    },
    "optionsList": [
      "12.000 kg m^2",
      "8.000 kg m^2",
      "16.000 kg m^2",
      "4.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 12.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.",
      "finalAnswer": "Option A: 12.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-306",
    "questionNumber": 306,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.125 kg m^2",
      "B": "0.750 kg m^2",
      "C": "1.500 kg m^2",
      "D": "0.375 kg m^2"
    },
    "optionsList": [
      "1.125 kg m^2",
      "0.750 kg m^2",
      "1.500 kg m^2",
      "0.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.",
      "finalAnswer": "Option A: 1.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-307",
    "questionNumber": 307,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.500 kg m^2",
      "B": "1.000 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.500 kg m^2"
    },
    "optionsList": [
      "1.500 kg m^2",
      "1.000 kg m^2",
      "2.000 kg m^2",
      "0.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.",
      "finalAnswer": "Option A: 1.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-308",
    "questionNumber": 308,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.750 kg m^2",
      "B": "4.500 kg m^2",
      "C": "9.000 kg m^2",
      "D": "2.250 kg m^2"
    },
    "optionsList": [
      "6.750 kg m^2",
      "4.500 kg m^2",
      "9.000 kg m^2",
      "2.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.",
      "finalAnswer": "Option A: 6.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-309",
    "questionNumber": 309,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "18.000 kg m^2",
      "B": "12.000 kg m^2",
      "C": "24.000 kg m^2",
      "D": "6.000 kg m^2"
    },
    "optionsList": [
      "18.000 kg m^2",
      "12.000 kg m^2",
      "24.000 kg m^2",
      "6.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 18.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.",
      "finalAnswer": "Option A: 18.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-310",
    "questionNumber": 310,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.375 kg m^2",
      "B": "0.250 kg m^2",
      "C": "0.500 kg m^2",
      "D": "0.125 kg m^2"
    },
    "optionsList": [
      "0.375 kg m^2",
      "0.250 kg m^2",
      "0.500 kg m^2",
      "0.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.",
      "finalAnswer": "Option A: 0.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-311",
    "questionNumber": 311,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.000 kg m^2",
      "B": "2.000 kg m^2",
      "C": "4.000 kg m^2",
      "D": "1.000 kg m^2"
    },
    "optionsList": [
      "3.000 kg m^2",
      "2.000 kg m^2",
      "4.000 kg m^2",
      "1.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.",
      "finalAnswer": "Option A: 3.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-312",
    "questionNumber": 312,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "10.125 kg m^2",
      "B": "6.750 kg m^2",
      "C": "13.500 kg m^2",
      "D": "3.375 kg m^2"
    },
    "optionsList": [
      "10.125 kg m^2",
      "6.750 kg m^2",
      "13.500 kg m^2",
      "3.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 10.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.",
      "finalAnswer": "Option A: 10.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-313",
    "questionNumber": 313,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.000 kg m^2",
      "B": "4.000 kg m^2",
      "C": "8.000 kg m^2",
      "D": "2.000 kg m^2"
    },
    "optionsList": [
      "6.000 kg m^2",
      "4.000 kg m^2",
      "8.000 kg m^2",
      "2.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.",
      "finalAnswer": "Option A: 6.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-314",
    "questionNumber": 314,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.750 kg m^2",
      "B": "0.500 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.250 kg m^2"
    },
    "optionsList": [
      "0.750 kg m^2",
      "0.500 kg m^2",
      "1.000 kg m^2",
      "0.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.",
      "finalAnswer": "Option A: 0.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-315",
    "questionNumber": 315,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "4.500 kg m^2",
      "B": "3.000 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.500 kg m^2"
    },
    "optionsList": [
      "4.500 kg m^2",
      "3.000 kg m^2",
      "6.000 kg m^2",
      "1.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 4.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.",
      "finalAnswer": "Option A: 4.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-316",
    "questionNumber": 316,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.375 kg m^2",
      "B": "2.250 kg m^2",
      "C": "4.500 kg m^2",
      "D": "1.125 kg m^2"
    },
    "optionsList": [
      "3.375 kg m^2",
      "2.250 kg m^2",
      "4.500 kg m^2",
      "1.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.",
      "finalAnswer": "Option A: 3.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-317",
    "questionNumber": 317,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "12.000 kg m^2",
      "B": "8.000 kg m^2",
      "C": "16.000 kg m^2",
      "D": "4.000 kg m^2"
    },
    "optionsList": [
      "12.000 kg m^2",
      "8.000 kg m^2",
      "16.000 kg m^2",
      "4.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 12.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.",
      "finalAnswer": "Option A: 12.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-318",
    "questionNumber": 318,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.125 kg m^2",
      "B": "0.750 kg m^2",
      "C": "1.500 kg m^2",
      "D": "0.375 kg m^2"
    },
    "optionsList": [
      "1.125 kg m^2",
      "0.750 kg m^2",
      "1.500 kg m^2",
      "0.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.",
      "finalAnswer": "Option A: 1.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-319",
    "questionNumber": 319,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.500 kg m^2",
      "B": "1.000 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.500 kg m^2"
    },
    "optionsList": [
      "1.500 kg m^2",
      "1.000 kg m^2",
      "2.000 kg m^2",
      "0.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.",
      "finalAnswer": "Option A: 1.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-320",
    "questionNumber": 320,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.750 kg m^2",
      "B": "4.500 kg m^2",
      "C": "9.000 kg m^2",
      "D": "2.250 kg m^2"
    },
    "optionsList": [
      "6.750 kg m^2",
      "4.500 kg m^2",
      "9.000 kg m^2",
      "2.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.",
      "finalAnswer": "Option A: 6.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-321",
    "questionNumber": 321,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "18.000 kg m^2",
      "B": "12.000 kg m^2",
      "C": "24.000 kg m^2",
      "D": "6.000 kg m^2"
    },
    "optionsList": [
      "18.000 kg m^2",
      "12.000 kg m^2",
      "24.000 kg m^2",
      "6.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 18.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.",
      "finalAnswer": "Option A: 18.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-322",
    "questionNumber": 322,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.375 kg m^2",
      "B": "0.250 kg m^2",
      "C": "0.500 kg m^2",
      "D": "0.125 kg m^2"
    },
    "optionsList": [
      "0.375 kg m^2",
      "0.250 kg m^2",
      "0.500 kg m^2",
      "0.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.",
      "finalAnswer": "Option A: 0.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-323",
    "questionNumber": 323,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.000 kg m^2",
      "B": "2.000 kg m^2",
      "C": "4.000 kg m^2",
      "D": "1.000 kg m^2"
    },
    "optionsList": [
      "3.000 kg m^2",
      "2.000 kg m^2",
      "4.000 kg m^2",
      "1.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.",
      "finalAnswer": "Option A: 3.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-324",
    "questionNumber": 324,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "10.125 kg m^2",
      "B": "6.750 kg m^2",
      "C": "13.500 kg m^2",
      "D": "3.375 kg m^2"
    },
    "optionsList": [
      "10.125 kg m^2",
      "6.750 kg m^2",
      "13.500 kg m^2",
      "3.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 10.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.",
      "finalAnswer": "Option A: 10.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-325",
    "questionNumber": 325,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.000 kg m^2",
      "B": "4.000 kg m^2",
      "C": "8.000 kg m^2",
      "D": "2.000 kg m^2"
    },
    "optionsList": [
      "6.000 kg m^2",
      "4.000 kg m^2",
      "8.000 kg m^2",
      "2.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.",
      "finalAnswer": "Option A: 6.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-326",
    "questionNumber": 326,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.750 kg m^2",
      "B": "0.500 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.250 kg m^2"
    },
    "optionsList": [
      "0.750 kg m^2",
      "0.500 kg m^2",
      "1.000 kg m^2",
      "0.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.",
      "finalAnswer": "Option A: 0.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-327",
    "questionNumber": 327,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "4.500 kg m^2",
      "B": "3.000 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.500 kg m^2"
    },
    "optionsList": [
      "4.500 kg m^2",
      "3.000 kg m^2",
      "6.000 kg m^2",
      "1.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 4.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.",
      "finalAnswer": "Option A: 4.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-328",
    "questionNumber": 328,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.375 kg m^2",
      "B": "2.250 kg m^2",
      "C": "4.500 kg m^2",
      "D": "1.125 kg m^2"
    },
    "optionsList": [
      "3.375 kg m^2",
      "2.250 kg m^2",
      "4.500 kg m^2",
      "1.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.",
      "finalAnswer": "Option A: 3.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-329",
    "questionNumber": 329,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "12.000 kg m^2",
      "B": "8.000 kg m^2",
      "C": "16.000 kg m^2",
      "D": "4.000 kg m^2"
    },
    "optionsList": [
      "12.000 kg m^2",
      "8.000 kg m^2",
      "16.000 kg m^2",
      "4.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 12.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.",
      "finalAnswer": "Option A: 12.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-330",
    "questionNumber": 330,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.125 kg m^2",
      "B": "0.750 kg m^2",
      "C": "1.500 kg m^2",
      "D": "0.375 kg m^2"
    },
    "optionsList": [
      "1.125 kg m^2",
      "0.750 kg m^2",
      "1.500 kg m^2",
      "0.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 0.25 = 1.125 kg m^2.",
      "finalAnswer": "Option A: 1.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-331",
    "questionNumber": 331,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "1.500 kg m^2",
      "B": "1.000 kg m^2",
      "C": "2.000 kg m^2",
      "D": "0.500 kg m^2"
    },
    "optionsList": [
      "1.500 kg m^2",
      "1.000 kg m^2",
      "2.000 kg m^2",
      "0.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 1.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 1.00 = 1.500 kg m^2.",
      "finalAnswer": "Option A: 1.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-332",
    "questionNumber": 332,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.750 kg m^2",
      "B": "4.500 kg m^2",
      "C": "9.000 kg m^2",
      "D": "2.250 kg m^2"
    },
    "optionsList": [
      "6.750 kg m^2",
      "4.500 kg m^2",
      "9.000 kg m^2",
      "2.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 2.25 = 6.750 kg m^2.",
      "finalAnswer": "Option A: 6.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-333",
    "questionNumber": 333,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "18.000 kg m^2",
      "B": "12.000 kg m^2",
      "C": "24.000 kg m^2",
      "D": "6.000 kg m^2"
    },
    "optionsList": [
      "18.000 kg m^2",
      "12.000 kg m^2",
      "24.000 kg m^2",
      "6.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 18.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 4.00 = 18.000 kg m^2.",
      "finalAnswer": "Option A: 18.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-334",
    "questionNumber": 334,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.375 kg m^2",
      "B": "0.250 kg m^2",
      "C": "0.500 kg m^2",
      "D": "0.125 kg m^2"
    },
    "optionsList": [
      "0.375 kg m^2",
      "0.250 kg m^2",
      "0.500 kg m^2",
      "0.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 0.25 = 0.375 kg m^2.",
      "finalAnswer": "Option A: 0.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-335",
    "questionNumber": 335,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.000 kg m^2",
      "B": "2.000 kg m^2",
      "C": "4.000 kg m^2",
      "D": "1.000 kg m^2"
    },
    "optionsList": [
      "3.000 kg m^2",
      "2.000 kg m^2",
      "4.000 kg m^2",
      "1.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 1.00 = 3.000 kg m^2.",
      "finalAnswer": "Option A: 3.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-336",
    "questionNumber": 336,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "10.125 kg m^2",
      "B": "6.750 kg m^2",
      "C": "13.500 kg m^2",
      "D": "3.375 kg m^2"
    },
    "optionsList": [
      "10.125 kg m^2",
      "6.750 kg m^2",
      "13.500 kg m^2",
      "3.375 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 10.125 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 2.25 = 10.125 kg m^2.",
      "finalAnswer": "Option A: 10.125 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-337",
    "questionNumber": 337,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "6.000 kg m^2",
      "B": "4.000 kg m^2",
      "C": "8.000 kg m^2",
      "D": "2.000 kg m^2"
    },
    "optionsList": [
      "6.000 kg m^2",
      "4.000 kg m^2",
      "8.000 kg m^2",
      "2.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 6.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 4.00 = 6.000 kg m^2.",
      "finalAnswer": "Option A: 6.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-338",
    "questionNumber": 338,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 0.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "0.750 kg m^2",
      "B": "0.500 kg m^2",
      "C": "1.000 kg m^2",
      "D": "0.250 kg m^2"
    },
    "optionsList": [
      "0.750 kg m^2",
      "0.500 kg m^2",
      "1.000 kg m^2",
      "0.250 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.750 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 0.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 0.25 = 0.750 kg m^2.",
      "finalAnswer": "Option A: 0.750 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-339",
    "questionNumber": 339,
    "question": "A thin uniform circular ring has mass $M = 3\\text{ kg}$ and radius $R = 1.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "4.500 kg m^2",
      "B": "3.000 kg m^2",
      "C": "6.000 kg m^2",
      "D": "1.500 kg m^2"
    },
    "optionsList": [
      "4.500 kg m^2",
      "3.000 kg m^2",
      "6.000 kg m^2",
      "1.500 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 4.500 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 3\\text{ kg}$, radius $R = 1.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 3 * 1.00 = 4.500 kg m^2.",
      "finalAnswer": "Option A: 4.500 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-340",
    "questionNumber": 340,
    "question": "A thin uniform circular ring has mass $M = 1\\text{ kg}$ and radius $R = 1.5\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "3.375 kg m^2",
      "B": "2.250 kg m^2",
      "C": "4.500 kg m^2",
      "D": "1.125 kg m^2"
    },
    "optionsList": [
      "3.375 kg m^2",
      "2.250 kg m^2",
      "4.500 kg m^2",
      "1.125 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 3.375 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 1\\text{ kg}$, radius $R = 1.5\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 1 * 2.25 = 3.375 kg m^2.",
      "finalAnswer": "Option A: 3.375 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-341",
    "questionNumber": 341,
    "question": "A thin uniform circular ring has mass $M = 2\\text{ kg}$ and radius $R = 2.0\\text{ m}$. The moment of inertia of the ring about a tangent in the plane of the ring is:",
    "options": {
      "A": "12.000 kg m^2",
      "B": "8.000 kg m^2",
      "C": "16.000 kg m^2",
      "D": "4.000 kg m^2"
    },
    "optionsList": [
      "12.000 kg m^2",
      "8.000 kg m^2",
      "16.000 kg m^2",
      "4.000 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nBy perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.\n\n2. GIVEN:\nMass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2\n\n4. STEP-BY-STEP SOLUTION:\n1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 12.000 kg m^2\n\n6. QUICK TIP:\nTangent in plane of ring = 3/2 MR^2; Tangent perpendicular to plane = 2 MR^2. Distinguish the two!",
    "solutionStructured": {
      "concept": "By perpendicular-axis theorem, MOI of ring about diameter is $I_{\\text{dia}} = \\frac{1}{2} M R^2$. By parallel-axis theorem, MOI about a tangent in the plane of the ring is $I = I_{\\text{dia}} + M R^2 = \\frac{3}{2} M R^2$.",
      "given": "Mass $M = 2\\text{ kg}$, radius $R = 2.0\\text{ m}$.",
      "formula": "I_{\\text{tangent, plane}} = \\frac{1}{2} M R^2 + M R^2 = \\frac{3}{2} M R^2",
      "stepByStep": "1. Diameter axis: I_dia = 0.5 * M * R^2.\n2. Tangent parallel to diameter: distance d = R.\n3. I = 0.5 * M * R^2 + M * R^2 = 1.5 * M * R^2 = 1.5 * 2 * 4.00 = 12.000 kg m^2.",
      "finalAnswer": "Option A: 12.000 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Medium",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Parallel-axis theorem for rings",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-342",
    "questionNumber": 342,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-343",
    "questionNumber": 343,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-344",
    "questionNumber": 344,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-345",
    "questionNumber": 345,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-346",
    "questionNumber": 346,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-347",
    "questionNumber": 347,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-348",
    "questionNumber": 348,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-349",
    "questionNumber": 349,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-350",
    "questionNumber": 350,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-351",
    "questionNumber": 351,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-352",
    "questionNumber": 352,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-353",
    "questionNumber": 353,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-354",
    "questionNumber": 354,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-355",
    "questionNumber": 355,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-356",
    "questionNumber": 356,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-357",
    "questionNumber": 357,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-358",
    "questionNumber": 358,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-359",
    "questionNumber": 359,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-360",
    "questionNumber": 360,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-361",
    "questionNumber": 361,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-362",
    "questionNumber": 362,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-363",
    "questionNumber": 363,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-364",
    "questionNumber": 364,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-365",
    "questionNumber": 365,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-366",
    "questionNumber": 366,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-367",
    "questionNumber": 367,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-368",
    "questionNumber": 368,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-369",
    "questionNumber": 369,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-370",
    "questionNumber": 370,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-371",
    "questionNumber": 371,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-372",
    "questionNumber": 372,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-373",
    "questionNumber": 373,
    "question": "A uniform disc of mass $M = 2\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.480 kg m^2",
      "B": "0.160 kg m^2",
      "C": "0.720 kg m^2",
      "D": "0.360 kg m^2"
    },
    "optionsList": [
      "0.480 kg m^2",
      "0.160 kg m^2",
      "0.720 kg m^2",
      "0.360 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.480 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 2\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 2 * (0.4)^2 = 0.160 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.160 + 0.320 = 0.480 kg m^2.",
      "finalAnswer": "Option A: 0.480 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-374",
    "questionNumber": 374,
    "question": "A uniform disc of mass $M = 3\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.560 kg m^2",
      "B": "0.240 kg m^2",
      "C": "0.840 kg m^2",
      "D": "0.420 kg m^2"
    },
    "optionsList": [
      "0.560 kg m^2",
      "0.240 kg m^2",
      "0.840 kg m^2",
      "0.420 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.560 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 3\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 3 * (0.4)^2 = 0.240 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.240 + 0.320 = 0.560 kg m^2.",
      "finalAnswer": "Option A: 0.560 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  },
  {
    "id": "rot-mcq-375",
    "questionNumber": 375,
    "question": "A uniform disc of mass $M = 4\\text{ kg}$ and radius $R = 0.4\\text{ m}$ has two point masses, each of mass $m = 1.0\\text{ kg}$, attached at the opposite ends of one of its diameters. The moment of inertia of the entire composite system about an axis passing through the centre of the disc and perpendicular to its plane is:",
    "options": {
      "A": "0.640 kg m^2",
      "B": "0.320 kg m^2",
      "C": "0.960 kg m^2",
      "D": "0.480 kg m^2"
    },
    "optionsList": [
      "0.640 kg m^2",
      "0.320 kg m^2",
      "0.960 kg m^2",
      "0.480 kg m^2"
    ],
    "correctAnswer": "A",
    "correctIndex": 0,
    "explanation": "1. CONCEPT:\nThe moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.\n\n2. GIVEN:\nDisc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.\n\n3. FORMULA / PRINCIPLE:\nI_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)\n\n4. STEP-BY-STEP SOLUTION:\n1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.\n\n5. FINAL ANSWER:\nOption A: 0.640 kg m^2\n\n6. QUICK TIP:\nMoments of inertia about the SAME axis simply add up algebraically: I_total = I_1 + I_2!",
    "solutionStructured": {
      "concept": "The moment of inertia of a composite system is the scalar sum of the moments of inertia of each component about the common axis: $I_{\\text{total}} = I_{\\text{disc}} + \\sum m_i r_i^2$.",
      "given": "Disc $M = 4\\text{ kg}$, $R = 0.4\\text{ m}$, two particles $m = 1.0\\text{ kg}$ at distance $R$ from center.",
      "formula": "I_{\\text{total}} = \\frac{1}{2} M R^2 + 2 (m R^2)",
      "stepByStep": "1. Disc contribution: I_disc = 0.5 * 4 * (0.4)^2 = 0.320 kg m^2.\n2. Particles contribution: 2 * (1.0 * (0.4)^2) = 2 * 0.16 = 0.320 kg m^2.\n3. Total I = 0.320 + 0.320 = 0.640 kg m^2.",
      "finalAnswer": "Option A: 0.640 kg m^2",
      "whyOtherOptionsWrong": "Other choices result from algebraic inversions, wrong geometric moment of inertia formulas, or sign oversights."
    },
    "difficulty": "Hard",
    "subject": "Physics",
    "class": "11",
    "chapter": "System of Particles and Rotational Motion",
    "chapterId": "rotational-motion",
    "topic": "Moment of inertia of composite bodies",
    "source": "VG Insights Practice",
    "isPYQ": false
  }
];
