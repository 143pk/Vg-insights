import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 8: Unit vectors and vector notation (Q126 to Q143, 18 questions)
# Difficulties: 4 Easy, 10 Medium, 4 Hard
# ==============================================================================

# Q126 - Easy
qs.append(make_plane_q(
    num=126,
    question="What is a unit vector, and what are its dimensions and physical units?",
    options={
        "A": "A vector of unit magnitude; it is dimensionless and has no units",
        "B": "A vector of unit magnitude; its unit is always meters",
        "C": "A vector whose components are all equal to 1; unit is dimensionless",
        "D": "A scalar with value 1 and no units"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Unit vectors and vector notation",
    concept="A unit vector $\\hat{A} = \\frac{\\vec{A}}{|\\vec{A}|}$ is defined as a vector divided by its own magnitude. Since the numerator and denominator have the same physical units and dimensions, the unit vector is dimensionless and unitless, serving purely to specify direction in space.",
    given="Definition of a unit vector.",
    formula="$\\hat{A} = \\frac{\\vec{A}}{|\\vec{A}|}$; $[\\hat{A}] = \\frac{[\\vec{A}]}{[|\\vec{A}|]} = [M^0 L^0 T^0]$",
    steps=(
        "1. By definition, a unit vector specifies a direction in space.\n"
        "2. It is constructed by dividing any non-zero vector $\\vec{A}$ by its scalar magnitude $|\\vec{A}|$.\n"
        "3. Since both $\\vec{A}$ and $|\\vec{A}|$ carry identical units (e.g., m/s for velocity or N for force), the units cancel out completely.\n"
        "4. Therefore, a unit vector has magnitude 1, is completely dimensionless, and has no physical units."
    ),
    tip="Golden NEET rule: Unit vectors ($\\hat{i}, \\hat{j}, \\hat{k}$) have NO physical units and NO dimensions!",
    why_wrong="Option B incorrectly assigns meters; Option C confuses unit magnitude with all components being 1."
))

# Q127 - Easy
qs.append(make_plane_q(
    num=127,
    question="In a right-handed Cartesian coordinate system, what are the standard unit vectors along the positive x, y, and z axes?",
    options={
        "A": "î, ĵ, and k̂ respectively",
        "B": "x̂, ŷ, and ẑ with magnitudes equal to x, y, and z",
        "C": "î, ĵ, and k̂ with magnitudes dependent on the scale of axes",
        "D": "î, ĵ, and k̂ where î × ĵ = -k̂"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Unit vectors and vector notation",
    concept="The standard orthogonal base vectors are denoted by $\\hat{i}, \\hat{j}, \\hat{k}$ along the $+x, +y, +z$ axes respectively, each having magnitude 1.",
    given="Cartesian coordinate system.",
    formula="$|\\hat{i}| = |\\hat{j}| = |\\hat{k}| = 1$; $\\hat{i} \\cdot \\hat{j} = \\hat{j} \\cdot \\hat{k} = \\hat{k} \\cdot \\hat{i} = 0$",
    steps=(
        "1. The unit vectors along the three mutually perpendicular coordinate axes are conventionally designated as $\\hat{i}$ (x-axis), $\\hat{j}$ (y-axis), and $\\hat{k}$ (z-axis).\n"
        "2. In a right-handed system, they satisfy $\\hat{i} \\times \\hat{j} = \\hat{k}$.\n"
        "3. Each has magnitude strictly equal to 1, independent of any scaling of the physical system.\n"
        "4. Therefore, option A is correct."
    ),
    tip="Right-hand cyclic order: $\\hat{i} \\to \\hat{j} \\to \\hat{k} \\to \\hat{i}$.",
    why_wrong="Option D has $\\hat{i} \\times \\hat{j} = -\\hat{k}$, which would be a left-handed coordinate system."
))

# Q128 - Easy
qs.append(make_plane_q(
    num=128,
    question="What is the unit vector in the direction of the vector $\\vec{A} = 3\\hat{i} + 4\\hat{j}$?",
    options={
        "A": "0.6 î + 0.8 ĵ",
        "B": "0.8 î + 0.6 ĵ",
        "C": "3 î + 4 ĵ",
        "D": "0.5 î + 0.5 ĵ"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Unit vectors and vector notation",
    concept="$\\hat{A} = \\frac{\\vec{A}}{|\\vec{A}|} = \\frac{3\\hat{i} + 4\\hat{j}}{\\sqrt{3^2 + 4^2}} = \\frac{3\\hat{i} + 4\\hat{j}}{5} = 0.6\\hat{i} + 0.8\\hat{j}$.",
    given="$\\vec{A} = 3\\hat{i} + 4\\hat{j}$.",
    formula="$\\hat{A} = \\frac{A_x\\hat{i} + A_y\\hat{j}}{\\sqrt{A_x^2 + A_y^2}}$",
    steps=(
        "1. Magnitude: $|\\vec{A}| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\n"
        "2. Divide each component by 5:\n"
        "   $3/5 = 0.6$\n"
        "   $4/5 = 0.8$\n"
        "3. Unit vector: $\\hat{A} = 0.6\\hat{i} + 0.8\\hat{j}$.\n"
        "4. Magnitude verification: $\\sqrt{(0.6)^2 + (0.8)^2} = \\sqrt{0.36 + 0.64} = 1$."
    ),
    tip="0.6 and 0.8 are the most common unit vector coefficients in NEET!",
    why_wrong="Option B swaps the x and y components."
))

# Q129 - Easy
qs.append(make_plane_q(
    num=129,
    question="A vector $\\vec{A}$ has magnitude 15 and points in the direction of the unit vector $\\hat{u} = \\frac{2}{3}\\hat{i} + \\frac{1}{3}\\hat{j} - \\frac{2}{3}\\hat{k}$. What is the vector $\\vec{A}$?",
    options={
        "A": "10 î + 5 ĵ - 10 k̂",
        "B": "5 î + 10 ĵ - 5 k̂",
        "C": "2 î + ĵ - 2 k̂",
        "D": "30 î + 15 ĵ - 30 k̂"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Unit vectors and vector notation",
    concept="Any vector is the product of its scalar magnitude and its unit vector: $\\vec{A} = |\\vec{A}| \\hat{u}$.",
    given="$|\\vec{A}| = 15$, $\\hat{u} = \\frac{2}{3}\\hat{i} + \\frac{1}{3}\\hat{j} - \\frac{2}{3}\\hat{k}$.",
    formula="$\\vec{A} = 15 \\times \\left(\\frac{2}{3}\\hat{i} + \\frac{1}{3}\\hat{j} - \\frac{2}{3}\\hat{k}\\right)$",
    steps=(
        "1. First verify that $\\hat{u}$ is indeed a unit vector:\n"
        "   $|\\hat{u}| = \\sqrt{(2/3)^2 + (1/3)^2 + (-2/3)^2} = \\sqrt{4/9 + 1/9 + 4/9} = \\sqrt{9/9} = 1$.\n"
        "2. Multiply each component by magnitude 15:\n"
        "   $A_x = 15 \\times (2/3) = 10$\n"
        "   $A_y = 15 \\times (1/3) = 5$\n"
        "   $A_z = 15 \\times (-2/3) = -10$\n"
        "3. Therefore, $\\vec{A} = 10\\hat{i} + 5\\hat{j} - 10\\hat{k}$."
    ),
    tip="Vector = Magnitude $\\times$ Direction (Unit vector).",
    why_wrong="Option C is just the unscaled integer ratios $(2, 1, -2)$."
))

# Q130 - Medium
qs.append(make_plane_q(
    num=130,
    question="If $\\vec{A} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and $\\vec{B} = -\\hat{i} + 2\\hat{j} + 4\\hat{k}$, what is the unit vector parallel to $\\vec{A} + \\vec{B}$?",
    options={
        "A": "(î + 5 ĵ + 3 k̂) / √35",
        "B": "(î + 5 ĵ + 3 k̂) / 35",
        "C": "(3 î + ĵ - 5 k̂) / √35",
        "D": "(î + 5 ĵ + 3 k̂) / 9"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="First find the sum vector $\\vec{R} = \\vec{A} + \\vec{B}$, then normalize it by dividing by $|\\vec{R}|$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j} - 1\\hat{k}$, $\\vec{B} = -1\\hat{i} + 2\\hat{j} + 4\\hat{k}$.",
    formula="$\\vec{R} = \\vec{A} + \\vec{B}$; $\\hat{R} = \\frac{\\vec{R}}{|\\vec{R}|}$",
    steps=(
        "1. Sum components:\n"
        "   $R_x = 2 + (-1) = 1$\n"
        "   $R_y = 3 + 2 = 5$\n"
        "   $R_z = -1 + 4 = 3$\n"
        "   So $\\vec{R} = \\hat{i} + 5\\hat{j} + 3\\hat{k}$.\n"
        "2. Compute magnitude of $\\vec{R}$:\n"
        "   $|\\vec{R}| = \\sqrt{1^2 + 5^2 + 3^2} = \\sqrt{1 + 25 + 9} = \\sqrt{35}$.\n"
        "3. Unit vector:\n"
        "   $\\hat{R} = \\frac{\\hat{i} + 5\\hat{j} + 3\\hat{k}}{\\sqrt{35}}$."
    ),
    tip="Always check that you divide by the SQUARE ROOT of the sum of squares, not the sum of squares itself!",
    why_wrong="Option B divides by 35 instead of $\\sqrt{35}$."
))

# Q131 - Medium
qs.append(make_plane_q(
    num=131,
    question="What is the unit vector along the direction of $\\vec{A} - \\vec{B}$ if $\\vec{A} = 4\\hat{i} + 3\\hat{j}$ and $\\vec{B} = \\hat{i} - \\hat{j}$?",
    options={
        "A": "0.6 î + 0.8 ĵ",
        "B": "0.8 î + 0.6 ĵ",
        "C": "3 î + 4 ĵ",
        "D": "(3 î + 2 ĵ) / √13"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="Compute difference $\\vec{D} = \\vec{A} - \\vec{B}$, then divide by $|\\vec{D}|$.",
    given="$\\vec{A} = 4\\hat{i} + 3\\hat{j}$, $\\vec{B} = 1\\hat{i} - 1\\hat{j}$.",
    formula="$\\vec{D} = (4 - 1)\\hat{i} + (3 - (-1))\\hat{j} = 3\\hat{i} + 4\\hat{j}$; $|\\vec{D}| = 5$",
    steps=(
        "1. Subtract components:\n"
        "   $D_x = 4 - 1 = 3$\n"
        "   $D_y = 3 - (-1) = 3 + 1 = 4$\n"
        "   So $\\vec{D} = 3\\hat{i} + 4\\hat{j}$.\n"
        "2. Magnitude: $|\\vec{D}| = \\sqrt{3^2 + 4^2} = 5$.\n"
        "3. Unit vector: $\\hat{D} = \\frac{3\\hat{i} + 4\\hat{j}}{5} = 0.6\\hat{i} + 0.8\\hat{j}$."
    ),
    tip="Watch the double minus: $3 - (-1) = 4$, forming the classic 3-4-5 triangle!",
    why_wrong="Option D incorrectly computes $3 - 1 = 2$ for the y-component."
))

# Q132 - Medium
qs.append(make_plane_q(
    num=132,
    question="A vector $\\vec{F} = a\\hat{i} + b\\hat{j} + c\\hat{k}$ is perpendicular to $\\hat{k}$ and has magnitude 5. If $a = 3$, what are the possible values of b and c?",
    options={
        "A": "b = ± 4, c = 0",
        "B": "b = 4, c = 3",
        "C": "b = ± 2, c = ± 4",
        "D": "b = 0, c = ± 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="Perpendicular to $\\hat{k}$ means the dot product with $\\hat{k}$ is zero: $\\vec{F} \\cdot \\hat{k} = c = 0$. Then $a^2 + b^2 = 5^2$.",
    given="$\\vec{F} \\perp \\hat{k} \\implies c = 0$, $a = 3$, $|\\vec{F}| = 5$.",
    formula="$a^2 + b^2 + c^2 = 5^2 \\implies 3^2 + b^2 + 0 = 25 \\implies b = \\pm 4$",
    steps=(
        "1. The vector is perpendicular to the z-axis ($\\hat{k}$):\n"
        "   $\\vec{F} \\cdot \\hat{k} = 0 \\implies c = 0$.\n"
        "2. Magnitude condition:\n"
        "   $a^2 + b^2 + c^2 = 5^2$.\n"
        "3. Substitute $a = 3$ and $c = 0$:\n"
        "   $3^2 + b^2 + 0 = 25 \\implies 9 + b^2 = 25 \\implies b^2 = 16$.\n"
        "4. Taking square root: $b = \\pm 4$.\n"
        "5. Therefore, $b = \\pm 4$ and $c = 0$."
    ),
    tip="Perpendicular to $\\hat{k}$ $\\implies$ vector lies entirely in the xy-plane $\\implies z\\text{-component} = 0$.",
    why_wrong="Option B has $c = 3 \\neq 0$, which is not perpendicular to $\\hat{k}$."
))

# Q133 - Medium
qs.append(make_plane_q(
    num=133,
    question="The position vectors of two points P and Q are $\\vec{r}_P = \\hat{i} + 2\\hat{j} + 3\\hat{k}$ and $\\vec{r}_Q = 4\\hat{i} + 6\\hat{j} + 3\\hat{k}$ respectively. What is the unit vector directed from P towards Q?",
    options={
        "A": "0.6 î + 0.8 ĵ",
        "B": "0.8 î + 0.6 ĵ",
        "C": "(3 î + 4 ĵ + 6 k̂) / √61",
        "D": "0.6 î - 0.8 ĵ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="The displacement vector from P to Q is $\\vec{r}_{PQ} = \\vec{r}_Q - \\vec{r}_P$. The unit vector is $\\hat{r}_{PQ} = \\frac{\\vec{r}_{PQ}}{|\\vec{r}_{PQ}|}$.",
    given="$\\vec{r}_P = 1\\hat{i} + 2\\hat{j} + 3\\hat{k}$, $\\vec{r}_Q = 4\\hat{i} + 6\\hat{j} + 3\\hat{k}$.",
    formula="$\\vec{r}_{PQ} = (4 - 1)\\hat{i} + (6 - 2)\\hat{j} + (3 - 3)\\hat{k} = 3\\hat{i} + 4\\hat{j} + 0\\hat{k}$",
    steps=(
        "1. Compute displacement vector $\\vec{r}_{PQ} = \\vec{r}_Q - \\vec{r}_P$:\n"
        "   $\\Delta x = 4 - 1 = 3$\n"
        "   $\\Delta y = 6 - 2 = 4$\n"
        "   $\\Delta z = 3 - 3 = 0$\n"
        "   So $\\vec{r}_{PQ} = 3\\hat{i} + 4\\hat{j}$.\n"
        "2. Magnitude: $|\\vec{r}_{PQ}| = \\sqrt{3^2 + 4^2 + 0^2} = 5$.\n"
        "3. Unit vector: $\\hat{r}_{PQ} = \\frac{3\\hat{i} + 4\\hat{j}}{5} = 0.6\\hat{i} + 0.8\\hat{j}$."
    ),
    tip="Vector from P to Q is always FINAL minus INITIAL: $\\vec{r}_Q - \\vec{r}_P$!",
    why_wrong="Option C adds the position vectors instead of subtracting."
))

# Q134 - Hard
qs.append(make_plane_q(
    num=134,
    question="A vector $\\vec{A}$ has magnitude 6 and is equally inclined to the coordinate axes $\\hat{i}, \\hat{j}, \\hat{k}$. What is $\\vec{A}$?",
    options={
        "A": "± 2√3 (î + ĵ + k̂)",
        "B": "± 2 (î + ĵ + k̂)",
        "C": "± 6 (î + ĵ + k̂)",
        "D": "± √2 (î + ĵ + k̂)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Unit vectors and vector notation",
    concept="For equal inclination, direction cosines are $l = m = n = \\pm 1/\\sqrt{3}$. Unit vector is $\\hat{u} = \\pm \\frac{\\hat{i} + \\hat{j} + \\hat{k}}{\\sqrt{3}}$. Then $\\vec{A} = A\\hat{u} = \\pm 6 \\frac{\\hat{i} + \\hat{j} + \\hat{k}}{\\sqrt{3}} = \\pm 2\\sqrt{3}(\\hat{i} + \\hat{j} + \\hat{k})$.",
    given="$A = 6$, $\\cos\\alpha = \\cos\\beta = \\cos\\gamma = \\pm 1/\\sqrt{3}$.",
    formula="$\\vec{A} = A\\hat{u} = 6 \\left(\\pm \\frac{\\hat{i} + \\hat{j} + \\hat{k}}{\\sqrt{3}}\\right) = \\pm 2\\sqrt{3}(\\hat{i} + \\hat{j} + \\hat{k})$",
    steps=(
        "1. Let the direction cosines be $l, m, n$. Since the vector is equally inclined: $l = m = n$.\n"
        "2. Condition: $l^2 + m^2 + n^2 = 1 \\implies 3l^2 = 1 \\implies l = \\pm 1/\\sqrt{3}$.\n"
        "3. The unit vector is $\\hat{u} = \\pm \\frac{1}{\\sqrt{3}}(\\hat{i} + \\hat{j} + \\hat{k})$.\n"
        "4. Multiply by magnitude $A = 6$:\n"
        "   $\\vec{A} = 6 \\left(\\pm \\frac{1}{\\sqrt{3}}\\right)(\\hat{i} + \\hat{j} + \\hat{k}) = \\pm \\frac{6\\sqrt{3}}{3}(\\hat{i} + \\hat{j} + \\hat{k}) = \\pm 2\\sqrt{3}(\\hat{i} + \\hat{j} + \\hat{k})$.\n"
        "5. Verify magnitude: $|\\vec{A}| = 2\\sqrt{3} \\times \\sqrt{1^2 + 1^2 + 1^2} = 2\\sqrt{3} \\times \\sqrt{3} = 6$."
    ),
    tip="Rationalizing: $6 / \\sqrt{3} = 2\\sqrt{3}$. Magnitude check: $2\\sqrt{3} \\times \\sqrt{3} = 6$!",
    why_wrong="Option B has magnitude $2\\sqrt{3} \\approx 3.46 \\neq 6$."
))

# Q135 - Hard
qs.append(make_plane_q(
    num=135,
    question="Find a unit vector perpendicular to BOTH $\\vec{A} = 2\\hat{i} + \\hat{j} - \\hat{k}$ and $\\vec{B} = \\hat{i} - \\hat{j} + 2\\hat{k}$.",
    options={
        "A": "(î - 5 ĵ - 3 k̂) / √35",
        "B": "(î + 5 ĵ + 3 k̂) / √35",
        "C": "(3 î + ĵ - k̂) / √11",
        "D": "(î - ĵ + k̂) / √3"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Unit vectors and vector notation",
    concept="A vector perpendicular to two vectors is along their cross product $\\vec{A} \\times \\vec{B}$. A unit vector is obtained by dividing by $|\\vec{A} \\times \\vec{B}|$.",
    given="$\\vec{A} = 2\\hat{i} + 1\\hat{j} - 1\\hat{k}$, $\\vec{B} = 1\\hat{i} - 1\\hat{j} + 2\\hat{k}$.",
    formula="$\\vec{C} = \\vec{A} \\times \\vec{B}$; $\\hat{n} = \\pm \\frac{\\vec{A} \\times \\vec{B}}{|\\vec{A} \\times \\vec{B}|}$",
    steps=(
        "1. Compute the cross product using a $3 \\times 3$ determinant:\n"
        "   $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & 1 & -1 \\\\ 1 & -1 & 2 \\end{vmatrix}$.\n"
        "2. x-component: $\\hat{i}[(1)(2) - (-1)(-1)] = \\hat{i}[2 - 1] = +1\\hat{i}$.\n"
        "3. y-component: $-\\hat{j}[(2)(2) - (-1)(1)] = -\\hat{j}[4 - (-1)] = -5\\hat{j}$.\n"
        "4. z-component: $\\hat{k}[(2)(-1) - (1)(1)] = \\hat{k}[-2 - 1] = -3\\hat{k}$.\n"
        "5. So $\\vec{A} \\times \\vec{B} = \\hat{i} - 5\\hat{j} - 3\\hat{k}$.\n"
        "6. Compute magnitude: $|\\vec{A} \\times \\vec{B}| = \\sqrt{1^2 + (-5)^2 + (-3)^2} = \\sqrt{1 + 25 + 9} = \\sqrt{35}$.\n"
        "7. Unit vector: $\\hat{n} = \\frac{\\hat{i} - 5\\hat{j} - 3\\hat{k}}{\\sqrt{35}}$.\n"
        "8. Check dot product with $\\vec{A}$: $(1)(2) + (-5)(1) + (-3)(-1) = 2 - 5 + 3 = 0$. Orthogonal!"
    ),
    tip="Always verify with dot product: $\\vec{C} \\cdot \\vec{A} = 0$ and $\\vec{C} \\cdot \\vec{B} = 0$ takes 5 seconds and guarantees 100% accuracy!",
    why_wrong="Option B has the wrong sign on the y-component."
))

# Q136 - Hard
qs.append(make_plane_q(
    num=136,
    question="If $\\hat{n}_1$ and $\\hat{n}_2$ are two unit vectors such that the angle between them is $\\theta$, what is the value of $|\\hat{n}_1 - \\hat{n}_2|$?",
    options={
        "A": "2 sin(θ / 2)",
        "B": "2 cos(θ / 2)",
        "C": "sin(θ / 2)",
        "D": "cos(θ / 2)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Unit vectors and vector notation",
    concept="For any two unit vectors, $|\\hat{n}_1 - \\hat{n}_2|^2 = 1^2 + 1^2 - 2(1)(1)\\cos\\theta = 2(1 - \\cos\\theta) = 4\\sin^2(\\theta/2)$.",
    given="$|\\hat{n}_1| = 1$, $|\\hat{n}_2| = 1$, angle $\\theta$.",
    formula="$|\\hat{n}_1 - \\hat{n}_2| = \\sqrt{2(1 - \\cos\\theta)} = 2\\sin(\\theta/2)$",
    steps=(
        "1. Expand the square of the difference:\n"
        "   $|\\hat{n}_1 - \\hat{n}_2|^2 = |\\hat{n}_1|^2 + |\\hat{n}_2|^2 - 2\\hat{n}_1\\cdot\\hat{n}_2$.\n"
        "2. Substitute unit magnitudes:\n"
        "   $= 1 + 1 - 2\\cos\\theta = 2(1 - \\cos\\theta)$.\n"
        "3. Use trigonometric identity $1 - \\cos\\theta = 2\\sin^2(\\theta/2)$:\n"
        "   $= 2 \\times 2\\sin^2(\\theta/2) = 4\\sin^2(\\theta/2)$.\n"
        "4. Take square root:\n"
        "   $|\\hat{n}_1 - \\hat{n}_2| = 2\\sin(\\theta/2)$."
    ),
    tip="Golden NEET formula: $|\\hat{a} - \\hat{b}| = 2\\sin(\\theta/2)$ and $|\\hat{a} + \\hat{b}| = 2\\cos(\\theta/2)$!",
    why_wrong="Option B is for the sum $|\\hat{n}_1 + \\hat{n}_2|$."
))

# Q137 - Hard
qs.append(make_plane_q(
    num=137,
    question="Using the result of the previous question, if $|\\hat{n}_1 - \\hat{n}_2| = \\sqrt{2}$, what is the angle $\\theta$ between the unit vectors?",
    options={
        "A": "90°",
        "B": "60°",
        "C": "45°",
        "D": "120°"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Unit vectors and vector notation",
    concept="Equate $2\\sin(\\theta/2) = \\sqrt{2} \\implies \\sin(\\theta/2) = \\sqrt{2}/2 = 1/\\sqrt{2} \\implies \\theta/2 = 45^\\circ \\implies \\theta = 90^\\circ$.",
    given="$|\\hat{n}_1 - \\hat{n}_2| = \\sqrt{2}$.",
    formula="$2\\sin(\\theta/2) = \\sqrt{2} \\implies \\sin(\\theta/2) = \\frac{1}{\\sqrt{2}}$",
    steps=(
        "1. From the established formula: $|\\hat{n}_1 - \\hat{n}_2| = 2\\sin(\\theta/2)$.\n"
        "2. Set equal to $\\sqrt{2}$:\n"
        "   $2\\sin(\\theta/2) = \\sqrt{2}$.\n"
        "3. Divide by 2:\n"
        "   $\\sin(\\theta/2) = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$.\n"
        "4. Therefore, $\\theta/2 = 45^\\circ$.\n"
        "5. Multiply by 2: $\\theta = 90^\\circ$."
    ),
    tip="Direct check: If $\\theta = 90^\\circ$, $|\\hat{i} - \\hat{j}| = \\sqrt{1^2 + (-1)^2} = \\sqrt{2}$! Instant confirmation.",
    why_wrong="60° gives $|\\hat{n}_1 - \\hat{n}_2| = 2\\sin 30^\\circ = 1$."
))

# Q138 - Medium
qs.append(make_plane_q(
    num=138,
    question="A force of magnitude 26 N acts along the line connecting point A(1, 2, 3) to point B(5, -1, 15). What is the vector representation of this force?",
    options={
        "A": "8 î - 6 ĵ + 24 k̂",
        "B": "4 î - 3 ĵ + 12 k̂",
        "C": "10 î - 8 ĵ + 26 k̂",
        "D": "16 î - 12 ĵ + 48 k̂"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="Displacement vector $\\vec{AB} = (5-1)\\hat{i} + (-1-2)\\hat{j} + (15-3)\\hat{k} = 4\\hat{i} - 3\\hat{j} + 12\\hat{k}$. Find unit vector and scale by 26 N.",
    given="$A = (1, 2, 3)$, $B = (5, -1, 15)$, $F = 26\\text{ N}$.",
    formula="$\\vec{F} = F \\frac{\\vec{AB}}{|\\vec{AB}|}$",
    steps=(
        "1. Compute displacement vector $\\vec{AB} = \\vec{r}_B - \\vec{r}_A$:\n"
        "   $\\Delta x = 5 - 1 = 4$\n"
        "   $\\Delta y = -1 - 2 = -3$\n"
        "   $\\Delta z = 15 - 3 = 12$\n"
        "   So $\\vec{AB} = 4\\hat{i} - 3\\hat{j} + 12\\hat{k}$.\n"
        "2. Compute magnitude of $\\vec{AB}$:\n"
        "   $|\\vec{AB}| = \\sqrt{4^2 + (-3)^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13$.\n"
        "3. Find the force vector:\n"
        "   $\\vec{F} = 26 \\left(\\frac{4\\hat{i} - 3\\hat{j} + 12\\hat{k}}{13}\\right) = 2(4\\hat{i} - 3\\hat{j} + 12\\hat{k}) = 8\\hat{i} - 6\\hat{j} + 24\\hat{k}$.\n"
        "4. Check magnitude: $\\sqrt{8^2 + (-6)^2 + 24^2} = \\sqrt{64 + 36 + 576} = \\sqrt{676} = 26\\text{ N}$."
    ),
    tip="The factor is $26 / 13 = 2$. Just multiply the vector $(4, -3, 12)$ by 2!",
    why_wrong="Option B has magnitude 13 N, not 26 N."
))

# Q139 - Medium
qs.append(make_plane_q(
    num=139,
    question="What is the unit vector coplanar with $\\hat{i}$ and $\\hat{j}$ that makes an angle of 30° with the x-axis?",
    options={
        "A": "(√3/2) î + (1/2) ĵ",
        "B": "(1/2) î + (√3/2) ĵ",
        "C": "(1/√2) î + (1/√2) ĵ",
        "D": "(√3/2) î - (1/2) ĵ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="Any unit vector in the xy-plane making angle $\\theta$ with the positive x-axis can be written as $\\hat{u} = \\cos\\theta\\hat{i} + \\sin\\theta\\hat{j}$.",
    given="Angle $\\theta = 30^\\circ$ with x-axis in xy-plane.",
    formula="$\\hat{u} = \\cos(30^\\circ)\\hat{i} + \\sin(30^\\circ)\\hat{j} = \\frac{\\sqrt{3}}{2}\\hat{i} + \\frac{1}{2}\\hat{j}$",
    steps=(
        "1. In the xy-plane, the parametric form of a unit vector is:\n"
        "   $\\hat{u} = \\cos\\theta\\hat{i} + \\sin\\theta\\hat{j}$.\n"
        "2. Substitute $\\theta = 30^\\circ$:\n"
        "   $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$\n"
        "   $\\sin 30^\\circ = \\frac{1}{2}$\n"
        "3. Therefore, $\\hat{u} = \\frac{\\sqrt{3}}{2}\\hat{i} + \\frac{1}{2}\\hat{j}$.\n"
        "4. Magnitude check: $(\\sqrt{3}/2)^2 + (1/2)^2 = 3/4 + 1/4 = 1$."
    ),
    tip="Standard unit circle representation: $(\\cos\\theta)\\hat{i} + (\\sin\\theta)\\hat{j}$.",
    why_wrong="Option B corresponds to $\\theta = 60^\\circ$."
))

# Q140 - Medium
qs.append(make_plane_q(
    num=140,
    question="If $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ and $\\vec{B} = 7\\hat{i} + 24\\hat{j}$, what is the vector having the same magnitude as $\\vec{B}$ and parallel to $\\vec{A}$?",
    options={
        "A": "15 î + 20 ĵ",
        "B": "25 î + 25 ĵ",
        "C": "7 î + 24 ĵ",
        "D": "9 î + 12 ĵ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="Desired vector has magnitude equal to $|\\vec{B}| = \\sqrt{7^2 + 24^2} = 25$, and direction equal to $\\hat{A} = \\frac{3\\hat{i} + 4\\hat{j}}{5}$.",
    given="$\\vec{A} = 3\\hat{i} + 4\\hat{j}$, $\\vec{B} = 7\\hat{i} + 24\\hat{j}$.",
    formula="$\\vec{C} = |\\vec{B}| \\hat{A} = 25 \\left(\\frac{3\\hat{i} + 4\\hat{j}}{5}\\right) = 5(3\\hat{i} + 4\\hat{j}) = 15\\hat{i} + 20\\hat{j}$",
    steps=(
        "1. Calculate magnitude of $\\vec{B}$:\n"
        "   $|\\vec{B}| = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$.\n"
        "2. Calculate unit vector along $\\vec{A}$:\n"
        "   $|\\vec{A}| = \\sqrt{3^2 + 4^2} = 5$.\n"
        "   $\\hat{A} = \\frac{3\\hat{i} + 4\\hat{j}}{5} = 0.6\\hat{i} + 0.8\\hat{j}$.\n"
        "3. Construct the required vector:\n"
        "   $\\vec{C} = |\\vec{B}| \\hat{A} = 25 \\times (0.6\\hat{i} + 0.8\\hat{j}) = 15\\hat{i} + 20\\hat{j}$.\n"
        "4. Check magnitude: $\\sqrt{15^2 + 20^2} = \\sqrt{225 + 400} = \\sqrt{625} = 25 = |\\vec{B}|$."
    ),
    tip="Two Pythagorean triples in one problem: (7, 24, 25) gives magnitude 25, and (3, 4, 5) gives direction!",
    why_wrong="Option D has magnitude 15, not 25."
))

# Q141 - Medium
qs.append(make_plane_q(
    num=141,
    question="Which of the following vectors is NOT a unit vector?",
    options={
        "A": "(î + ĵ + k̂)",
        "B": "(î + ĵ + k̂) / √3",
        "C": "(î + ĵ) / √2",
        "D": "0.6 î + 0.8 ĵ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="A unit vector must have magnitude strictly equal to 1. The magnitude of $\\hat{i} + \\hat{j} + \\hat{k}$ is $\\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3} \\neq 1$.",
    given="Four candidate vectors.",
    formula="$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2 + v_z^2} = 1$",
    steps=(
        "1. For option A: $|\\hat{i} + \\hat{j} + \\hat{k}| = \\sqrt{1 + 1 + 1} = \\sqrt{3} \\approx 1.732 \\neq 1$. Hence, it is NOT a unit vector.\n"
        "2. For option B: $|(\\hat{i} + \\hat{j} + \\hat{k})/\\sqrt{3}| = \\sqrt{3}/\\sqrt{3} = 1$ (unit vector).\n"
        "3. For option C: $|(\\hat{i} + \\hat{j})/\\sqrt{2}| = \\sqrt{2}/\\sqrt{2} = 1$ (unit vector).\n"
        "4. For option D: $\\sqrt{0.6^2 + 0.8^2} = \\sqrt{0.36 + 0.64} = 1$ (unit vector).\n"
        "5. Therefore, option A is the only non-unit vector."
    ),
    tip="Beginner trap: $\\hat{i} + \\hat{j} + \\hat{k}$ is NOT a unit vector! You must divide by $\\sqrt{3}$.",
    why_wrong="Options B, C, and D all have magnitude exactly 1."
))

# Q142 - Medium
qs.append(make_plane_q(
    num=142,
    question="If $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = p\\hat{i} + 6\\hat{j}$ are parallel vectors, what is the value of p?",
    options={
        "A": "4",
        "B": "6",
        "C": "9",
        "D": "1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="Two vectors are parallel if and only if their corresponding components are proportional: $\\frac{A_x}{B_x} = \\frac{A_y}{B_y}$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j}$, $\\vec{B} = p\\hat{i} + 6\\hat{j}$, $\\vec{A} \\parallel \\vec{B}$.",
    formula="$\\frac{2}{p} = \\frac{3}{6} \\implies p = \\frac{2 \\times 6}{3} = 4$",
    steps=(
        "1. Condition for parallel vectors: $\\vec{B} = k\\vec{A}$.\n"
        "2. Equating components:\n"
        "   $B_y = k A_y \\implies 6 = k(3) \\implies k = 2$.\n"
        "3. Now find the x-component:\n"
        "   $B_x = k A_x \\implies p = 2(2) = 4$.\n"
        "4. Check: $\\vec{B} = 4\\hat{i} + 6\\hat{j} = 2(2\\hat{i} + 3\\hat{j}) = 2\\vec{A}$. Parallel!"
    ),
    tip="Parallel vectors test: $\\frac{A_x}{B_x} = \\frac{A_y}{B_y} = \\frac{A_z}{B_z}$.",
    why_wrong="9 would give $p / 2 = 4.5 \\neq 2$."
))

# Q143 - Medium
qs.append(make_plane_q(
    num=143,
    question="A vector $\\vec{A}$ has magnitude 10 and points along $\\hat{i}$. A vector $\\vec{B}$ has magnitude 10 and points along $\\hat{j}$. What is the unit vector along $\\vec{A} + \\vec{B}$?",
    options={
        "A": "(î + ĵ) / √2",
        "B": "(î - ĵ) / √2",
        "C": "î + ĵ",
        "D": "(î + ĵ) / 2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Unit vectors and vector notation",
    concept="$\\vec{A} + \\vec{B} = 10\\hat{i} + 10\\hat{j} = 10(\\hat{i} + \\hat{j})$. The unit vector is $\\frac{10(\\hat{i} + \\hat{j})}{10\\sqrt{2}} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$.",
    given="$\\vec{A} = 10\\hat{i}$, $\\vec{B} = 10\\hat{j}$.",
    formula="$\\hat{R} = \\frac{\\vec{A} + \\vec{B}}{|\\vec{A} + \\vec{B}|} = \\frac{10\\hat{i} + 10\\hat{j}}{10\\sqrt{2}} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$",
    steps=(
        "1. Sum vector: $\\vec{R} = 10\\hat{i} + 10\\hat{j}$.\n"
        "2. Magnitude: $|\\vec{R}| = \\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}$.\n"
        "3. Unit vector: $\\hat{R} = \\frac{10\\hat{i} + 10\\hat{j}}{10\\sqrt{2}} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$.\n"
        "4. This points at $45^\\circ$ to both axes."
    ),
    tip="Bisector of $+x$ and $+y$ is always $\\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$.",
    why_wrong="Option C is not a unit vector (magnitude is $\\sqrt{2}$)."
))

# Save Topic 8
with open('scripts/mip_topic8.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 8 generated successfully:", len(qs))
