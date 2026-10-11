import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 13: Cross product and its applications (Q215 to Q232, 18 questions)
# Distribution: 5 Easy, 8 Medium, 5 Hard
# ==============================================================================

# Q215 - Easy
qs.append(make_plane_q(
    num=215,
    question="What is the cross product of the unit vectors $\\hat{i} \\times \\hat{j}$?",
    options={
        "A": "$\\hat{k}$",
        "B": "$-\\hat{k}$",
        "C": "$0$",
        "D": "$1$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Cross product and its applications",
    concept="In a right-handed Cartesian coordinate system, the cyclic rule states: $\\hat{i} \\times \\hat{j} = \\hat{k}$, $\\hat{j} \\times \\hat{k} = \\hat{i}$, and \\hat{k} \\times \\hat{i} = \\hat{j}$.",
    given="Unit vectors $\\hat{i}$ and $\\hat{j}$.",
    formula="\\hat{i} \\times \\hat{j} = \\hat{k}",
    steps=(
        "1. Magnitudes of both $\\hat{i}$ and $\\hat{j}$ are equal to 1.\n"
        "2. The angle between them is $90^\\circ$, and $\\sin 90^\\circ = 1$.\n"
        "3. By the right-hand thumb rule, curling fingers from the positive x-axis ($\\hat{i}$) toward the positive y-axis ($\\hat{j}$) points the thumb along the positive z-axis ($\\hat{k}$).\n"
        "4. Therefore, $\\hat{i} \\times \\hat{j} = \\hat{k}$."
    ),
    tip="Use the cyclic wheel: Clockwise ($\\{i \\to j \\to k\\}$) is positive $+$. Counter-clockwise ($\\{j \\to i\\}$) is negative $-$.",
    why_wrong="Option B is $\\hat{j} \\times \\hat{i}$; Option C confuses cross product with dot product $\\hat{i} \\cdot \\hat{j} = 0$."
))

# Q216 - Easy
qs.append(make_plane_q(
    num=216,
    question="Which of the following is the correct relationship between $\\vec{A} \\times \\vec{B}$ and $\\vec{B} \\times \\vec{A}$?",
    options={
        "A": "$\\vec{A} \\times \\vec{B} = -(\\vec{B} \\times \\vec{A})$",
        "B": "$\\vec{A} \\times \\vec{B} = \\vec{B} \\times \\vec{A}$",
        "C": "$\\vec{A} \\times \\vec{B} = \\frac{1}{\\vec{B} \\times \\vec{A}}$",
        "D": "$\\vec{A} \\times \\vec{B} = 0$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Cross product and its applications",
    concept="The cross product is anti-commutative: reversing the order of operands reverses the direction of the resulting vector by the right-hand rule.",
    given="Vectors $\\vec{A}$ and $\\vec{B}$.",
    formula="\\vec{A} \\times \\vec{B} = -(\\vec{B} \\times \\vec{A})",
    steps=(
        "1. By definition, $\\vec{A} \\times \\vec{B} = AB\\sin\\theta\\,\\hat{n}$, where $\\hat{n}$ is given by the right-hand rule.\n"
        "2. Reversing the order to $\\vec{B} \\times \\vec{A}$ curls the fingers from $\\vec{B}$ to $\\vec{A}$, pointing the thumb in the opposite direction $(-\\hat{n})$.\n"
        "3. Therefore, $\\vec{B} \\times \\vec{A} = AB\\sin\\theta(-\\hat{n}) = -(\\vec{A} \\times \\vec{B})$."
    ),
    tip="Dot product is commutative ($\\vec{A}\\cdot\\vec{B} = \\vec{B}\\cdot\\vec{A}$), but cross product is ANTI-commutative!",
    why_wrong="Option B incorrectly asserts commutativity; Option C attempts division by vectors, which is undefined."
))

# Q217 - Easy
qs.append(make_plane_q(
    num=217,
    question="What is the magnitude of the cross product of two collinear (parallel) vectors $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "$0$",
        "B": "$AB$",
        "C": "$A^2 B^2$",
        "D": "$A + B$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Cross product and its applications",
    concept="For parallel vectors, the angle between them is $\\theta = 0^\\circ$ (or $\\theta = 180^\\circ$ for anti-parallel vectors). Since $\\sin 0^\\circ = \\sin 180^\\circ = 0$, the cross product vanishes.",
    given="Collinear vectors with $\\theta = 0^\\circ$ or $180^\\circ$.",
    formula="|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta = AB\\sin 0^\\circ = 0",
    steps=(
        "1. Formula for magnitude: $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$.\n"
        "2. When two vectors are collinear, the angle between them is $0^\\circ$ or $180^\\circ$.\n"
        "3. $\\sin 0^\\circ = 0$ and $\\sin 180^\\circ = 0$.\n"
        "4. Therefore, $|\\vec{A} \\times \\vec{B}| = 0$."
    ),
    tip="Zero cross product is the definitive test for collinearity/parallelism of two non-zero vectors.",
    why_wrong="Option B occurs when vectors are perpendicular ($\\theta = 90^\\circ, \\sin 90^\\circ = 1$)."
))

# Q218 - Easy
qs.append(make_plane_q(
    num=218,
    question="Which of the following physical quantities is defined using a vector cross product?",
    options={
        "A": "Torque ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$)",
        "B": "Work done ($W = \\vec{F} \\cdot \\vec{s}$)",
        "C": "Electric flux ($\\Phi = \\vec{E} \\cdot \\vec{A}$)",
        "D": "Kinetic energy ($K = \\frac{1}{2} m v^2$)"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Cross product and its applications",
    concept="Torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ and angular momentum $\\vec{L} = \\vec{r} \\times \\vec{p}$ are axial vectors defined as the cross product of position and linear force/momentum.",
    given="Physical formulas in mechanics.",
    formula="\\vec{\\tau} = \\vec{r} \\times \\vec{F}",
    steps=(
        "1. Torque is the rotational analogue of force, defined as $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$.\n"
        "2. It is a pseudovector (axial vector) directed perpendicular to the plane containing $\\vec{r}$ and $\\vec{F}$.\n"
        "3. Work and electric flux are scalar quantities defined by dot products."
    ),
    tip="Order matters in torque: it is $\\vec{r} \\times \\vec{F}$, NOT $\\vec{F} \\times \\vec{r}$!",
    why_wrong="Options B and C are scalar dot products; Option D is a pure scalar."
))

# Q219 - Easy
qs.append(make_plane_q(
    num=219,
    question="What is the area of a parallelogram whose adjacent sides are represented by the vectors $\\vec{A} = 3\\hat{i}$ and $\\vec{B} = 4\\hat{j}$?",
    options={
        "A": "$12\\text{ sq units}$",
        "B": "$6\\text{ sq units}$",
        "C": "$5\\text{ sq units}$",
        "D": "$24\\text{ sq units}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Cross product and its applications",
    concept="The area of a parallelogram formed by adjacent sides $\\vec{A}$ and $\\vec{B}$ equals the magnitude of their cross product: $\\text{Area} = |\\vec{A} \\times \\vec{B}|$.",
    given="$\\vec{A} = 3\\hat{i}$ and $\\vec{B} = 4\\hat{j}$.",
    formula="\\text{Area} = |\\vec{A} \\times \\vec{B}|",
    steps=(
        "1. Cross product: $\\vec{A} \\times \\vec{B} = (3\\hat{i}) \\times (4\\hat{j}) = 12(\\hat{i} \\times \\hat{j}) = 12\\hat{k}$.\n"
        "2. Magnitude: $|12\\hat{k}| = 12$.\n"
        "3. Thus, the area is $12\\text{ sq units}$."
    ),
    tip="Area of parallelogram is $|\vec{A} \times \vec{B}|$; area of the triangle formed by them is $\\frac{1}{2}|\vec{A} \times \vec{B}| = 6$.",
    why_wrong="Option B is the area of the triangle formed by the vectors; Option C is the hypotenuse $\\sqrt{3^2 + 4^2} = 5$."
))

# Q220 - Medium
qs.append(make_plane_q(
    num=220,
    question="Given $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = \\hat{i} + 4\\hat{j}$, what is the cross product $\\vec{A} \\times \\vec{B}$?",
    options={
        "A": "$5\\hat{k}$",
        "B": "$-5\\hat{k}$",
        "C": "$11\\hat{k}$",
        "D": "$5\\hat{i}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="In the xy-plane, the cross product of two vectors is perpendicular to the plane (along $\\hat{k}$), given by $(A_x B_y - A_y B_x)\\hat{k}$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j}$, $\\vec{B} = \\hat{i} + 4\\hat{j}$.",
    formula="\\vec{A} \\times \\vec{B} = (A_x B_y - A_y B_x)\\hat{k}",
    steps=(
        "1. Multiply: $A_x B_y = (2)(4) = 8$.\n"
        "2. Multiply: $A_y B_x = (3)(1) = 3$.\n"
        "3. Subtract: $A_x B_y - A_y B_x = 8 - 3 = 5$.\n"
        "4. Attach unit vector along z-axis: $\\vec{A} \\times \\vec{B} = 5\\hat{k}$."
    ),
    tip="For any 2D vectors in the xy-plane, the cross product ALWAYS points along $\\pm\\hat{k}$ (z-axis).",
    why_wrong="Option B calculates $3 - 8 = -5\\hat{k}$ (which is $\\vec{B} \\times \\vec{A}$); Option C calculates $8 + 3 = 11$."
))

# Q221 - Medium
qs.append(make_plane_q(
    num=221,
    question="Find a unit vector perpendicular to both vectors $\\vec{A} = 2\\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{B} = \\hat{i} - \\hat{j} + 2\\hat{k}$.",
    options={
        "A": "$\\frac{3\\hat{i} - 3\\hat{j} - 3\\hat{k}}{3\\sqrt{3}} = \\frac{\\hat{i} - \\hat{j} - \\hat{k}}{\\sqrt{3}}$",
        "B": "$\\frac{\\hat{i} + \\hat{j} + \\hat{k}}{\\sqrt{3}}$",
        "C": "$\\frac{3\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{11}}$",
        "D": "$\\frac{\\hat{i} - 2\\hat{j} + \\hat{k}}{\\sqrt{6}}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="A vector perpendicular to both $\\vec{A}$ and $\\vec{B}$ is given by their cross product $\\vec{C} = \\vec{A} \\times \\vec{B}$. A unit vector is obtained by dividing $\\vec{C}$ by its magnitude $|\\vec{C}|$.",
    given="$\\vec{A} = 2\\hat{i} + \\hat{j} + \\hat{k}$, $\\vec{B} = \\hat{i} - \\hat{j} + 2\\hat{k}$.",
    formula="\\hat{n} = \\frac{\\vec{A} \\times \\vec{B}}{|\\vec{A} \\times \\vec{B}|}",
    steps=(
        "1. Compute the determinant:\n"
        "   $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 1 & 1 \\\\ 1 & -1 & 2 \\end{vmatrix}$.\n"
        "2. Expand by minors:\n"
        "   $\\hat{i}[(1)(2) - (1)(-1)] = \\hat{i}[2 + 1] = 3\\hat{i}$.\n"
        "   $-\\hat{j}[(2)(2) - (1)(1)] = -\\hat{j}[4 - 1] = -3\\hat{j}$.\n"
        "   $\\hat{k}[(2)(-1) - (1)(1)] = \\hat{k}[-2 - 1] = -3\\hat{k}$.\n"
        "3. Resultant cross product: $\\vec{C} = 3\\hat{i} - 3\\hat{j} - 3\\hat{k}$.\n"
        "4. Magnitude: $|\\vec{C}| = \\sqrt{3^2 + (-3)^2 + (-3)^2} = \\sqrt{27} = 3\\sqrt{3}$.\n"
        "5. Unit vector: $\\hat{n} = \\frac{3(\\hat{i} - \\hat{j} - \\hat{k})}{3\\sqrt{3}} = \\frac{\\hat{i} - \\hat{j} - \\hat{k}}{\\sqrt{3}}$."
    ),
    tip="Verify perpendicularity instantly: $(\\hat{i} - \\hat{j} - \\hat{k}) \\cdot (2\\hat{i} + \\hat{j} + \\hat{k}) = 2 - 1 - 1 = 0$! And $(1 - (-1) - 2) = 1 + 1 - 2 = 0$!",
    why_wrong="Option B gives dot product $(1)(2) + (1)(1) + (1)(1) = 4 \\ne 0$."
))

# Q222 - Medium
qs.append(make_plane_q(
    num=222,
    question="The torque of a force $\\vec{F} = (2\\hat{i} - 3\\hat{j} + 4\\hat{k})\\text{ N}$ acting at the point $\\vec{r} = (3\\hat{i} + 2\\hat{j} + 3\\hat{k})\\text{ m}$ about the origin is:",
    options={
        "A": "$17\\hat{i} - 6\\hat{j} - 13\\hat{k}\\text{ N m}$",
        "B": "$-17\\hat{i} + 6\\hat{j} + 13\\hat{k}\\text{ N m}$",
        "C": "$17\\hat{i} + 6\\hat{j} - 13\\hat{k}\\text{ N m}$",
        "D": "$7\\hat{i} - 6\\hat{j} - 13\\hat{k}\\text{ N m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="Torque is defined as $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$, calculated using determinant expansion.",
    given="$\\vec{r} = 3\\hat{i} + 2\\hat{j} + 3\\hat{k}\\text{ m}$, $\\vec{F} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}\\text{ N}$.",
    formula="\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}",
    steps=(
        "1. Write the determinant with $\\vec{r}$ in the second row and $\\vec{F}$ in the third row:\n"
        "   $\\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 2 & 3 \\\\ 2 & -3 & 4 \\end{vmatrix}$.\n"
        "2. Component along $\\hat{i}$: $(2)(4) - (3)(-3) = 8 - (-9) = 17$.\n"
        "3. Component along $\\hat{j}$: $-[(3)(4) - (3)(2)] = -[12 - 6] = -6$.\n"
        "4. Component along $\\hat{k}$: $(3)(-3) - (2)(2) = -9 - 4 = -13$.\n"
        "5. Torque vector: $\\vec{\\tau} = 17\\hat{i} - 6\\hat{j} - 13\\hat{k}\\text{ N m}$."
    ),
    tip="Do not swap rows! Putting $\\vec{F}$ first gives $\\vec{F} \\times \\vec{r} = -\\vec{\\tau}$ (Option B), which is incorrect.",
    why_wrong="Option B calculates $\\vec{F} \\times \\vec{r}$; Option C makes a sign error in the middle term."
))

# Q223 - Medium
qs.append(make_plane_q(
    num=223,
    question="The area of a triangle having vertices with position vectors $\\vec{A} = \\vec{0}$, $\\vec{B} = 2\\hat{i} + 3\\hat{j}$, and $\\vec{C} = 4\\hat{i} - \\hat{j}$ is:",
    options={
        "A": "$7\\text{ sq units}$",
        "B": "$14\\text{ sq units}$",
        "C": "$10\\text{ sq units}$",
        "D": "$28\\text{ sq units}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="The area of a triangle formed by vectors $\\vec{B}$ and $\\vec{C}$ originating from a common vertex $\\vec{A} = 0$ is $\\frac{1}{2}|\\vec{B} \\times \\vec{C}|$.",
    given="$\\vec{B} = 2\\hat{i} + 3\\hat{j}$, $\\vec{C} = 4\\hat{i} - \\hat{j}$.",
    formula="\\text{Area} = \\frac{1}{2}|\\vec{B} \\times \\vec{C}| = \\frac{1}{2}|B_x C_y - B_y C_x|",
    steps=(
        "1. Compute the cross product term: $B_x C_y - B_y C_x = (2)(-1) - (3)(4) = -2 - 12 = -14$.\n"
        "2. Take the absolute value: $|-14| = 14$.\n"
        "3. Divide by 2 for the triangle area: $\\text{Area} = \\frac{1}{2} \\times 14 = 7\\text{ sq units}$."
    ),
    tip="Triangle area is HALF the parallelogram area. Parallelogram $= 14$, Triangle $= 7$.",
    why_wrong="Option B forgets to divide by 2 (area of parallelogram); Option D multiplies by 2."
))

# Q224 - Medium
qs.append(make_plane_q(
    num=224,
    question="If $|\\vec{A} \\times \\vec{B}| = \\sqrt{3}(\\vec{A} \\cdot \\vec{B})$, what is the angle $\\theta$ between vectors $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "$60^\\circ$",
        "B": "$30^\\circ$",
        "C": "$45^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="Substitute $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$ and $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$ to find $\\tan\\theta$.",
    given="$|\\vec{A} \\times \\vec{B}| = \\sqrt{3}(\\vec{A} \\cdot \\vec{B})$.",
    formula="$AB\\sin\\theta = \\sqrt{3} AB\\cos\\theta \\implies \\tan\\theta = \\sqrt{3}$",
    steps=(
        "1. Express magnitudes in trigonometric form:\n"
        "   $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$.\n"
        "   $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$.\n"
        "2. Substitute into given relation:\n"
        "   $AB\\sin\\theta = \\sqrt{3} AB\\cos\\theta$.\n"
        "3. Divide by $AB\\cos\\theta$:\n"
        "   $\\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta = \\sqrt{3}$.\n"
        "4. Since $\\tan 60^\\circ = \\sqrt{3}$, the angle is $\\theta = 60^\\circ$."
    ),
    tip="Classic NEET relationship: $\\tan\\theta = \\frac{|\\vec{A} \\times \\vec{B}|}{\\vec{A} \\cdot \\vec{B}}$. When ratio is $\\sqrt{3} \\implies 60^\\circ$. When ratio is $1 \\implies 45^\\circ$. When ratio is $1/\\sqrt{3} \\implies 30^\\circ$.",
    why_wrong="Option B ($30^\\circ$) corresponds to ratio $1/\\sqrt{3}$; Option C corresponds to ratio $1$."
))

# Q225 - Medium
qs.append(make_plane_q(
    num=225,
    question="In the previous question, what is the magnitude of the resultant vector $|\\vec{A} + \\vec{B}|$ when $|\\vec{A}| = A$ and $|\\vec{B}| = A$?",
    options={
        "A": "$A\\sqrt{3}$",
        "B": "$A$",
        "C": "$A\\sqrt{2}$",
        "D": "$2A$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="Using the angle $\\theta = 60^\\circ$ found earlier, compute the magnitude of the resultant $|\\vec{A} + \\vec{B}| = \\sqrt{A^2 + B^2 + 2AB\\cos 60^\\circ}$.",
    given="$A = B$ and $\\theta = 60^\\circ$.",
    formula="$R = \\sqrt{A^2 + A^2 + 2A^2\\cos 60^\\circ}$",
    steps=(
        "1. From previous question, $\\theta = 60^\\circ$.\n"
        "2. Resultant formula for equal vectors: $R = 2A\\cos(\\theta/2) = 2A\\cos 30^\\circ$.\n"
        "3. Since $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $R = 2A \\left(\\frac{\\sqrt{3}}{2}\\right) = A\\sqrt{3}$.\n"
        "4. Or using standard formula: $\\sqrt{A^2 + A^2 + 2A^2(0.5)} = \\sqrt{3A^2} = A\\sqrt{3}$."
    ),
    tip="For two equal vectors: at $60^\\circ$, resultant is $A\\sqrt{3}$; at $90^\\circ$, resultant is $A\\sqrt{2}$; at $120^\\circ$, resultant is $A$.",
    why_wrong="Option B corresponds to $\\theta = 120^\\circ$; Option C corresponds to $\\theta = 90^\\circ$."
))

# Q226 - Medium
qs.append(make_plane_q(
    num=226,
    question="The diagonals of a parallelogram are represented by $\\vec{d}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{d}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$. What is the area of the parallelogram?",
    options={
        "A": "$5\\sqrt{3} \\approx 8.66\\text{ sq units}$",
        "B": "$10\\sqrt{3}\\text{ sq units}$",
        "C": "$15\\text{ sq units}$",
        "D": "$20\\text{ sq units}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="When the diagonals $\\vec{d}_1$ and $\\vec{d}_2$ of a parallelogram are given, its area is given by $\\text{Area} = \\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2|$.",
    given="$\\vec{d}_1 = 3\\hat{i} + \\hat{j} - 2\\hat{k}$, $\\vec{d}_2 = \\hat{i} - 3\\hat{j} + 4\\hat{k}$.",
    formula="\\text{Area} = \\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2|",
    steps=(
        "1. Compute cross product $\\vec{d}_1 \\times \\vec{d}_2$:\n"
        "   $\\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & 1 & -2 \\\\ 1 & -3 & 4 \\end{vmatrix}$.\n"
        "2. $\\hat{i}[(1)(4) - (-2)(-3)] = \\hat{i}[4 - 6] = -2\\hat{i}$.\n"
        "3. $-\\hat{j}[(3)(4) - (-2)(1)] = -\\hat{j}[12 + 2] = -14\\hat{j}$.\n"
        "4. $\\hat{k}[(3)(-3) - (1)(1)] = \\hat{k}[-9 - 1] = -10\\hat{k}$.\n"
        "5. $\\vec{d}_1 \\times \\vec{d}_2 = -2\\hat{i} - 14\\hat{j} - 10\\hat{k}$.\n"
        "6. Magnitude: $\\sqrt{(-2)^2 + (-14)^2 + (-10)^2} = \\sqrt{4 + 196 + 100} = \\sqrt{300} = 10\\sqrt{3}$.\n"
        "7. Area: $\\frac{1}{2} \\times 10\\sqrt{3} = 5\\sqrt{3}\\text{ sq units}$."
    ),
    tip="CRITICAL DIFFERENCE: If sides are given $\\implies |\\vec{A} \\times \\vec{B}|$. If DIAGONALS are given $\\implies \\frac{1}{2}|\\vec{d}_1 \\times \\vec{d}_2|$!",
    why_wrong="Option B forgets the factor of $\\frac{1}{2}$ for diagonals."
))

# Q227 - Medium
qs.append(make_plane_q(
    num=227,
    question="A particle of mass $m = 2\\text{ kg}$ is moving with a constant velocity $\\vec{v} = 5\\hat{i}\\text{ m/s}$ along the line $y = 4\\text{ m}$. What is the magnitude of its angular momentum about the origin?",
    options={
        "A": "$40\\text{ kg m}^2\\text{/s}$",
        "B": "$10\\text{ kg m}^2\\text{/s}$",
        "C": "$0$",
        "D": "$20\\text{ kg m}^2\\text{/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Cross product and its applications",
    concept="Angular momentum is $\\vec{L} = \\vec{r} \\times \\vec{p} = m(\\vec{r} \\times \\vec{v})$. For a line parallel to velocity, the magnitude is $m v r_{\\perp}$.",
    given="$m = 2\\text{ kg}$, $\\vec{v} = 5\\hat{i}\\text{ m/s}$, path is along $y = 4\\text{ m}$ (so $\\vec{r} = x\\hat{i} + 4\\hat{j}$).",
    formula="\\vec{L} = \\vec{r} \\times (m\\vec{v}); |\\vec{L}| = m v y_0",
    steps=(
        "1. Linear momentum: $\\vec{p} = m\\vec{v} = 2 \\times 5\\hat{i} = 10\\hat{i}\\text{ kg m/s}$.\n"
        "2. Position vector of any point on the trajectory: $\\vec{r} = x\\hat{i} + 4\\hat{j}$.\n"
        "3. Cross product:\n"
        "   $\\vec{L} = (x\\hat{i} + 4\\hat{j}) \\times (10\\hat{i}) = x(10)(\\hat{i} \\times \\hat{i}) + 4(10)(\\hat{j} \\times \\hat{i}) = 0 + 40(-\\hat{k}) = -40\\hat{k}\\text{ kg m}^2\\text{/s}$.\n"
        "4. Magnitude: $|\\vec{L}| = 40\\text{ kg m}^2\\text{/s}$."
    ),
    tip="Notice that $x$ completely drops out! The angular momentum of a free particle moving at constant velocity is strictly CONSERVED about any chosen fixed point.",
    why_wrong="Option D forgets mass $m=2$; Option C wrongly assumes angular momentum is zero for straight-line motion."
))

# Fix option C key typo in Q227
qs[-1]["options"] = {
    "A": "$40\\text{ kg m}^2\\text{/s}$",
    "B": "$10\\text{ kg m}^2\\text{/s}$",
    "C": "$0$",
    "D": "$20\\text{ kg m}^2\\text{/s}$"
}

# Q228 - Hard
qs.append(make_plane_q(
    num=228,
    question="Using Lagrange's identity, if $|\vec{A}| = 5$, $|\vec{B}| = 6$, and $\vec{A} \cdot \vec{B} = 24$, what is the magnitude of the cross product $|\vec{A} \times \vec{B}|$?",
    options={
        "A": "$18$",
        "B": "$20$",
        "C": "$15$",
        "D": "$12$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Cross product and its applications",
    concept="Lagrange's vector identity connects dot product and cross product: $|\vec{A} \times \vec{B}|^2 + (\vec{A} \cdot \vec{B})^2 = A^2 B^2$.",
    given="$A = 5$, $B = 6$, $\vec{A} \cdot \vec{B} = 24$.",
    formula="$|\vec{A} \times \vec{B}| = \sqrt{A^2 B^2 - (\vec{A} \cdot \vec{B})^2}$",
    steps=(
        "1. Calculate $A^2 B^2 = (5^2)(6^2) = 25 \times 36 = 900$.\n"
        "2. Calculate $(\vec{A} \cdot \vec{B})^2 = 24^2 = 576$.\n"
        "3. Apply Lagrange's identity:\n"
        "   $|\vec{A} \times \vec{B}|^2 = 900 - 576 = 324$.\n"
        "4. Take square root:\n"
        "   $|\vec{A} \times \vec{B}| = \sqrt{324} = 18$."
    ),
    tip="Lagrange's identity is just $\\sin^2\\theta + \\cos^2\\theta = 1$ in vector clothing! $A^2 B^2 \\sin^2\\theta + A^2 B^2 \\cos^2\\theta = A^2 B^2$.",
    why_wrong="Option B calculates $\\sqrt{900 - 500}$; Option D uses $\\cos\\theta$ directly without squaring."
))

# Q229 - Hard
qs.append(make_plane_q(
    num=229,
    question="If $\\vec{A} \\times \\vec{B} = \\vec{C} \\times \\vec{D}$ and $\\vec{A} \\times \\vec{C} = \\vec{B} \\times \\vec{D}$, which of the following vector pairs is collinear?",
    options={
        "A": "$(\\vec{A} - \\vec{D})$ and $(\\vec{B} - \\vec{C})$",
        "B": "$(\\vec{A} + \\vec{B})$ and $(\\vec{C} + \\vec{D})$",
        "C": "$(\\vec{A} - \\vec{B})$ and $(\\vec{C} - \\vec{D})$",
        "D": "$\\vec{A}$ and $\\vec{D}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Cross product and its applications",
    concept="Subtract the two equations and factor using distributivity: two vectors whose cross product vanishes are collinear.",
    given="$\\vec{A} \\times \\vec{B} = \\vec{C} \\times \\vec{D}$ and $\\vec{A} \\times \\vec{C} = \\vec{B} \\times \\vec{D}$.",
    formula="(\\vec{A} - \\vec{D}) \\times (\\vec{B} - \\vec{C}) = 0$",
    steps=(
        "1. Subtract the second equation from the first:\n"
        "   $(\\vec{A} \\times \\vec{B}) - (\\vec{A} \\times \\vec{C}) = (\\vec{C} \\times \\vec{D}) - (\\vec{B} \\times \\vec{D})$.\n"
        "2. Factor the left-hand side: $\\vec{A} \\times (\\vec{B} - \\vec{C})$.\n"
        "3. Use anti-commutativity on the RHS: $(\\vec{C} \\times \\vec{D}) - (\\vec{B} \\times \\vec{D}) = -(\\vec{D} \\times \\vec{C}) + (\\vec{D} \\times \\vec{B}) = \\vec{D} \\times (\\vec{B} - \\vec{C})$.\n"
        "4. Bring to one side:\n"
        "   $\\vec{A} \\times (\\vec{B} - \\vec{C}) - \\vec{D} \\times (\\vec{B} - \\vec{C}) = 0$.\n"
        "5. Factor common term $(\\vec{B} - \\vec{C})$:\n"
        "   $(\\vec{A} - \\vec{D}) \\times (\\vec{B} - \\vec{C}) = 0$.\n"
        "6. Since their cross product is zero, $(\\vec{A} - \\vec{D})$ and $(\\vec{B} - \\vec{C})$ must be collinear (parallel)."
    ),
    tip="Classic algebra technique: gather terms with common factors and use $\\vec{u} \\times \\vec{v} = 0 \\iff \\vec{u} \\parallel \\vec{v}$.",
    why_wrong="Option C is incorrect because the cross terms do not match the given equations."
))

# Q230 - Hard
qs.append(make_plane_q(
    num=230,
    question="A force $\\vec{F} = \\alpha\\hat{i} + 3\\hat{j} + 6\\hat{k}$ acts at a point $\\vec{r} = 2\\hat{i} - 6\\hat{j} - 12\\hat{k}$. If the torque of this force about the origin is strictly ZERO, what is the value of the scalar constant $\\alpha$?",
    options={
        "A": "$-1$",
        "B": "$1$",
        "C": "$2$",
        "D": "$-2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Cross product and its applications",
    concept="For torque about origin to be zero, $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = \\vec{0}$, which means force $\\vec{F}$ and position $\\vec{r}$ must be collinear: $\\frac{F_x}{r_x} = \\frac{F_y}{r_y} = \\frac{F_z}{r_z}$.",
    given="$\\vec{r} = 2\\hat{i} - 6\\hat{j} - 12\\hat{k}$, $\\vec{F} = \\alpha\\hat{i} + 3\\hat{j} + 6\\hat{k}$, $\\vec{\\tau} = \\vec{0}$.",
    formula="\\frac{\\alpha}{2} = \\frac{3}{-6} = \\frac{6}{-12}",
    steps=(
        "1. Check the ratio of the given components:\n"
        "   $\\frac{F_y}{r_y} = \\frac{3}{-6} = -\\frac{1}{2}$.\n"
        "   $\\frac{F_z}{r_z} = \\frac{6}{-12} = -\\frac{1}{2}$.\n"
        "2. For collinearity, the x-ratio must also equal $-\\frac{1}{2}$:\n"
        "   $\\frac{F_x}{r_x} = \\frac{\\alpha}{2} = -\\frac{1}{2}$.\n"
        "3. Solve for $\\alpha$:\n"
        "   $\\alpha = 2 \\times \\left(-\\frac{1}{2}\\right) = -1$."
    ),
    tip="When cross product is zero, avoid computing the full 3x3 determinant! Simply equate the component ratios: $F_x/r_x = F_y/r_y = F_z/r_z$!",
    why_wrong="Option B gives $\\alpha = 1$, which would give ratio $+1/2 \\ne -1/2$, resulting in a non-zero torque."
))

# Q231 - Hard
qs.append(make_plane_q(
    num=231,
    question="If $\\vec{A}, \\vec{B}, \\vec{C}$ are three non-coplanar vectors, what does the scalar triple product $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$ physically represent?",
    options={
        "A": "Volume of a parallelepiped with coterminous edges $\\vec{A}, \\vec{B}, \\vec{C}$",
        "B": "Area of a triangle with sides $\\vec{A}, \\vec{B}, \\vec{C}$",
        "C": "Surface area of the parallelepiped",
        "D": "Work done in rotating the vectors"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Cross product and its applications",
    concept="The base area of the parallelepiped is $|\vec{B} \times \vec{C}|$, and the height is the projection of $\vec{A}$ along the normal to the base $A\cos\phi$. Thus, $\text{Volume} = \text{Base} \times \text{Height} = \vec{A} \cdot (\vec{B} \times \vec{C})$.",
    given="Vectors $\\vec{A}, \\vec{B}, \\vec{C}$ forming coterminous edges of a 3D prism.",
    formula="V = |\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})|",
    steps=(
        "1. The cross product $\\vec{B} \\times \\vec{C}$ yields a vector whose magnitude is the area of the base parallelogram, pointing perpendicular to that base.\n"
        "2. The dot product of $\\vec{A}$ with this normal vector multiplies the base area by the perpendicular height of the solid.\n"
        "3. Base Area $\\times$ Height = Volume of the parallelepiped.\n"
        "4. If the three vectors are coplanar, the volume is 0, so $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = 0$."
    ),
    tip="Scalar triple product test: Coplanar vectors have $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = 0$ because a flat 2D shape has zero 3D volume!",
    why_wrong="Option B is a 2D measure; Option C requires sum of 6 face areas."
))

# Q232 - Hard
qs.append(make_plane_q(
    num=232,
    question="What is the value of $(\\vec{A} - \\vec{B}) \\times (\\vec{A} + \\vec{B})$ in simplified form?",
    options={
        "A": "$2(\\vec{A} \\times \\vec{B})$",
        "B": "$\\vec{0}$",
        "C": "$A^2 - B^2$",
        "D": "$2(\\vec{B} \\times \\vec{A})$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Cross product and its applications",
    concept="Expand using the distributive property and anti-commutativity of the cross product: $\\vec{A} \\times \\vec{A} = 0$, $\\vec{B} \\times \\vec{B} = 0$, and $-\\vec{B} \\times \\vec{A} = +\\vec{A} \\times \\vec{B}$.",
    given="Expression $(\\vec{A} - \\vec{B}) \\times (\\vec{A} + \\vec{B})$.",
    formula="(\\vec{A} - \\vec{B}) \\times (\\vec{A} + \\vec{B}) = \\vec{A}\\times\\vec{A} + \\vec{A}\\times\\vec{B} - \\vec{B}\\times\\vec{A} - \\vec{B}\\times\\vec{B}",
    steps=(
        "1. Expand using distributivity:\n"
        "   $(\\vec{A} - \\vec{B}) \\times (\\vec{A} + \\vec{B}) = \\vec{A}\\times\\vec{A} + \\vec{A}\\times\\vec{B} - \\vec{B}\\times\\vec{A} - \\vec{B}\\times\\vec{B}$.\n"
        "2. The self cross products vanish: $\\vec{A}\\times\\vec{A} = \\vec{0}$ and $\\vec{B}\\times\\vec{B} = \\vec{0}$.\n"
        "3. By anti-commutativity: $-\\vec{B}\\times\\vec{A} = +\\vec{A}\\times\\vec{B}$.\n"
        "4. Substitute: $\\vec{0} + \\vec{A}\\times\\vec{B} + \\vec{A}\\times\\vec{B} - \\vec{0} = 2(\\vec{A} \\times \\vec{B})$."
    ),
    tip="Geometric insight: The diagonals of a parallelogram formed by $\\vec{A}$ and $\\vec{B}$ are $\\vec{d}_1 = \\vec{A}+\\vec{B}$ and $\\vec{d}_2 = \\vec{A}-\\vec{B}$. The cross product of the diagonals is TWICE the cross product of the sides!",
    why_wrong="Option B falsely treats it as an algebraic difference of squares; Option C confuses cross product with dot product $(\\vec{A}-\\vec{B})\\cdot(\\vec{A}+\\vec{B}) = A^2 - B^2$."
))

with open('scripts/mip_topic13.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 13 generated successfully:", len(qs))
