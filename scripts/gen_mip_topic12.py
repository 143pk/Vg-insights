import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 12: Dot product and its applications (Q197 to Q214, 18 questions)
# Distribution: 5 Easy, 8 Medium, 5 Hard
# ==============================================================================

# Q197 - Easy
qs.append(make_plane_q(
    num=197,
    question="What is the scalar (dot) product of the two vectors $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = 4\\hat{i} - 5\\hat{j}$?",
    options={
        "A": "$-7$",
        "B": "$23$",
        "C": "$7$",
        "D": "$-23$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Dot product and its applications",
    concept="The dot product of two vectors in component form is the sum of the products of their corresponding components: $\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = 4\\hat{i} - 5\\hat{j}$.",
    formula="$\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y$",
    steps=(
        "1. Product of x-components: $(2)(4) = 8$.\n"
        "2. Product of y-components: $(3)(-5) = -15$.\n"
        "3. Sum: $8 + (-15) = -7$."
    ),
    tip="Remember that the dot product yields a SCALAR quantity, never a vector with $\\hat{i}, \\hat{j}$.",
    why_wrong="Option B calculates $8 - (-15) = 23$; Option C drops the negative sign."
))

# Q198 - Easy
qs.append(make_plane_q(
    num=198,
    question="For two non-zero vectors $\\vec{A}$ and $\\vec{B}$, if their scalar product $\\vec{A} \\cdot \\vec{B} = 0$, what is the angle between them?",
    options={
        "A": "$90^\\circ$",
        "B": "$0^\\circ$",
        "C": "$180^\\circ$",
        "D": "$45^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Dot product and its applications",
    concept="Since $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$, if $A \\ne 0$ and $B \\ne 0$, then $\\vec{A} \\cdot \\vec{B} = 0$ implies $\\cos\\theta = 0$, meaning $\\theta = 90^\\circ$ (mutually perpendicular / orthogonal).",
    given="$\\vec{A} \\cdot \\vec{B} = 0$ with $A \\ne 0, B \\ne 0$.",
    formula="$\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{AB} = 0 \\implies \\theta = 90^\\circ$",
    steps=(
        "1. By definition: $\\vec{A} \\cdot \\vec{B} = AB\\cos\\theta$.\n"
        "2. Given $\\vec{A} \\cdot \\vec{B} = 0$.\n"
        "3. For non-zero magnitudes, $\\cos\\theta = 0$.\n"
        "4. In the range $0^\\circ \\le \\theta \\le 180^\\circ$, $\\cos\\theta = 0$ corresponds uniquely to $\\theta = 90^\\circ$."
    ),
    tip="Zero dot product is the universal test for orthogonality of two vectors.",
    why_wrong="Option B corresponds to parallel vectors (maximum dot product $AB$); Option C corresponds to anti-parallel vectors (minimum dot product $-AB$)."
))

# Q199 - Easy
qs.append(make_plane_q(
    num=199,
    question="A constant force $\\vec{F} = (3\\hat{i} + 4\\hat{j})\\text{ N}$ moves an object from $(0, 0)$ to displacement $\\vec{s} = (5\\hat{i} + 2\\hat{j})\\text{ m}$. What is the work done by the force?",
    options={
        "A": "$23\\text{ J}$",
        "B": "$7\\text{ J}$",
        "C": "$15\\text{ J}$",
        "D": "$27\\text{ J}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Dot product and its applications",
    concept="Work done by a constant force is defined as the dot product of the force vector and the displacement vector: $W = \\vec{F} \\cdot \\vec{s}$.",
    given="$\\vec{F} = 3\\hat{i} + 4\\hat{j}\\text{ N}$ and $\\vec{s} = 5\\hat{i} + 2\\hat{j}\\text{ m}$.",
    formula="$W = \\vec{F} \\cdot \\vec{s} = F_x s_x + F_y s_y$",
    steps=(
        "1. Compute $F_x s_x = (3)(5) = 15\\text{ J}$.\n"
        "2. Compute $F_y s_y = (4)(2) = 8\\text{ J}$.\n"
        "3. Sum: $W = 15 + 8 = 23\\text{ J}$."
    ),
    tip="Work is a scalar quantity measured in Joules (J). A positive dot product means the force has a component in the direction of motion.",
    why_wrong="Option B calculates $15 - 8 = 7\\text{ J}$; Option C includes only the x-component work."
))

# Q200 - Easy
qs.append(make_plane_q(
    num=200,
    question="What is the value of $\\hat{i} \\cdot \\hat{j} + \\hat{j} \\cdot \\hat{k} + \\hat{k} \\cdot \\hat{i}$?",
    options={
        "A": "$0$",
        "B": "$3$",
        "C": "$1$",
        "D": "$-1$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Dot product and its applications",
    concept="Orthogonal unit vectors $\\hat{i}, \\hat{j}, \\hat{k}$ are mutually perpendicular to each other ($90^\\circ$ apart), so the dot product between any two distinct unit vectors is identically zero.",
    given="Unit vectors along the Cartesian axes.",
    formula="$\\hat{i} \\cdot \\hat{j} = \\hat{j} \\cdot \\hat{k} = \\hat{k} \\cdot \\hat{i} = 0$",
    steps=(
        "1. The angle between any two distinct coordinate axes is $90^\\circ$.\n"
        "2. Since $\\cos 90^\\circ = 0$, $\\hat{i} \\cdot \\hat{j} = (1)(1)\\cos 90^\\circ = 0$.\n"
        "3. Similarly, $\\hat{j} \\cdot \\hat{k} = 0$ and $\\hat{k} \\cdot \\hat{i} = 0$.\n"
        "4. Total sum $= 0 + 0 + 0 = 0$."
    ),
    tip="Self dot products are 1: $\\hat{i}\\cdot\\hat{i} = \\hat{j}\\cdot\\hat{j} = \\hat{k}\\cdot\\hat{k} = 1$. Mutual dot products are 0.",
    why_wrong="Option B confuses dot products of distinct unit vectors with self dot products $\\hat{i}\\cdot\\hat{i} + \\hat{j}\\cdot\\hat{j} + \\hat{k}\\cdot\\hat{k} = 3$."
))

# Q201 - Easy
qs.append(make_plane_q(
    num=201,
    question="The instantaneous power delivered by a force $\\vec{F} = (4\\hat{i} + 3\\hat{j})\\text{ N}$ to a body moving with velocity $\\vec{v} = (2\\hat{i} - 2\\hat{j})\\text{ m/s}$ is:",
    options={
        "A": "$2\\text{ W}$",
        "B": "$14\\text{ W}$",
        "C": "$-2\\text{ W}$",
        "D": "$8\\text{ W}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Dot product and its applications",
    concept="Instantaneous power is the rate of work done, given by the dot product of force and velocity: $P = \\vec{F} \\cdot \\vec{v}$.",
    given="$\\vec{F} = 4\\hat{i} + 3\\hat{j}\\text{ N}$, $\\vec{v} = 2\\hat{i} - 2\\hat{j}\\text{ m/s}$.",
    formula="$P = \\vec{F} \\cdot \\vec{v} = F_x v_x + F_y v_y$",
    steps=(
        "1. Compute product of x-components: $(4)(2) = 8\\text{ W}$.\n"
        "2. Compute product of y-components: $(3)(-2) = -6\\text{ W}$.\n"
        "3. Total power: $P = 8 + (-6) = 2\\text{ W}$."
    ),
    tip="Power can be positive (energy added), negative (energy removed/braking), or zero (force perpendicular to velocity, e.g. magnetic Lorentz force).",
    why_wrong="Option B adds $8 + 6 = 14\\text{ W}$ without respecting the negative velocity component."
))

# Q202 - Medium
qs.append(make_plane_q(
    num=202,
    question="For what value of $c$ are the vectors $\\vec{A} = 2\\hat{i} + 3\\hat{j} - 4\\hat{k}$ and $\\vec{B} = 4\\hat{i} - c\\hat{j} + 2\\hat{k}$ perpendicular to each other?",
    options={
        "A": "$0$",
        "B": "$2$",
        "C": "$-2$",
        "D": "$4$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="Two vectors are perpendicular if and only if their dot product vanishes: $\\vec{A} \\cdot \\vec{B} = 0$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j} - 4\\hat{k}$ and $\\vec{B} = 4\\hat{i} - c\\hat{j} + 2\\hat{k}$.",
    formula="$\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z = 0$",
    steps=(
        "1. Set up the dot product equation:\n"
        "   $(2)(4) + (3)(-c) + (-4)(2) = 0$.\n"
        "2. Simplify the terms:\n"
        "   $8 - 3c - 8 = 0$.\n"
        "3. Solve for $c$:\n"
        "   $-3c = 0 \\implies c = 0$."
    ),
    tip="Check: $(2)(4) + (-4)(2) = 8 - 8 = 0$. So the x and z components cancel each other out completely, requiring the y-component product $3(-c)$ to be 0, so $c = 0$!",
    why_wrong="Option B gives $\\vec{A}\\cdot\\vec{B} = -6 \\ne 0$; Option C gives $+6 \\ne 0$."
))

# Q203 - Medium
qs.append(make_plane_q(
    num=203,
    question="What is the angle between the two vectors $\\vec{A} = \\hat{i} + \\hat{j}$ and $\\vec{B} = \\hat{i} - \\hat{j}$?",
    options={
        "A": "$90^\\circ$",
        "B": "$45^\\circ$",
        "C": "$60^\\circ$",
        "D": "$180^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="Compute the dot product $\\vec{A} \\cdot \\vec{B}$. If the dot product is zero, the angle is $90^\\circ$.",
    given="$\\vec{A} = \\hat{i} + \\hat{j}$, $\\vec{B} = \\hat{i} - \\hat{j}$.",
    formula="$\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}||\\vec{B}|}$",
    steps=(
        "1. Dot product: $\\vec{A} \\cdot \\vec{B} = (1)(1) + (1)(-1) = 1 - 1 = 0$.\n"
        "2. Magnitudes: $|\\vec{A}| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$, $|\\vec{B}| = \\sqrt{1^2 + (-1)^2} = \\sqrt{2}$.\n"
        "3. $\\cos\\theta = \\frac{0}{\\sqrt{2}\\sqrt{2}} = 0 \\implies \\theta = 90^\\circ$."
    ),
    tip="$\\hat{i} + \\hat{j}$ is along $+45^\\circ$ and $\\hat{i} - \\hat{j}$ is along $-45^\\circ$. The angle between $+45^\\circ$ and $-45^\\circ$ is $90^\\circ$!",
    why_wrong="Option B is the angle of vector $\\vec{A}$ with the x-axis, not the angle between $\\vec{A}$ and $\\vec{B}$."
))

# Q204 - Medium
qs.append(make_plane_q(
    num=204,
    question="What is the scalar projection of vector $\\vec{A} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ on the vector $\\vec{B} = 3\\hat{i} + 4\\hat{j}$?",
    options={
        "A": "$3.6$",
        "B": "$2.5$",
        "C": "$5.0$",
        "D": "$18$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="The scalar projection of $\\vec{A}$ on $\\vec{B}$ is given by $\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|}$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$ and $\\vec{B} = 3\\hat{i} + 4\\hat{j} + 0\\hat{k}$.",
    formula="\\text{proj}_{\\vec{B}}\\vec{A} = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|}",
    steps=(
        "1. Compute dot product $\\vec{A} \\cdot \\vec{B}$:\n"
        "   $\\vec{A} \\cdot \\vec{B} = (2)(3) + (3)(4) + (6)(0) = 6 + 12 + 0 = 18$.\n"
        "2. Compute magnitude of target vector $\\vec{B}$:\n"
        "   $|\\vec{B}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = 5$.\n"
        "3. Calculate scalar projection:\n"
        "   $\\text{proj}_{\\vec{B}}\\vec{A} = \\frac{18}{5} = 3.6$."
    ),
    tip="Always divide by the magnitude of the vector ONTO which you are projecting, not the vector being projected!",
    why_wrong="Option D is just the dot product 18 without dividing by $|\\vec{B}| = 5$."
))

# Q205 - Medium
qs.append(make_plane_q(
    num=205,
    question="The angle between two vectors $\\vec{A} = \\hat{i} + \\hat{j} + \\hat{k}$ and $\\vec{B} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$ is:",
    options={
        "A": "$\\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$",
        "B": "$\\cos^{-1}\\left(\\frac{1}{3}\\right)$",
        "C": "$\\cos^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="Use the formula $\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}||\\vec{B}|}$.",
    given="$\\vec{A} = \\hat{i} + \\hat{j} + \\hat{k}$, $\\vec{B} = 2\\hat{i} + 2\\hat{j} - \\hat{k}$.",
    formula="$\\cos\\theta = \\frac{A_x B_x + A_y B_y + A_z B_z}{\\sqrt{A_x^2 + A_y^2 + A_z^2}\\sqrt{B_x^2 + B_y^2 + B_z^2}}$",
    steps=(
        "1. Dot product: $\\vec{A} \\cdot \\vec{B} = (1)(2) + (1)(2) + (1)(-1) = 2 + 2 - 1 = 3$.\n"
        "2. Magnitude $|\\vec{A}| = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$.\n"
        "3. Magnitude $|\\vec{B}| = \\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$.\n"
        "4. Angle cosine: $\\cos\\theta = \\frac{3}{(\\sqrt{3})(3)} = \\frac{1}{\\sqrt{3}}$.\n"
        "5. Therefore, $\\theta = \\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right)$."
    ),
    tip="Notice the cancellation: $\\frac{3}{3\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$.",
    why_wrong="Option B forgets the square root on $|\\vec{A}|$; Option D assumes the negative z-component cancels everything."
))

# Q206 - Medium
qs.append(make_plane_q(
    num=206,
    question="If $|\vec{A} + \vec{B}| = A = B$ for two non-zero vectors $\vec{A}$ and $\vec{B}$ of equal magnitude $A$, what is the angle between $\vec{A}$ and $\vec{B}$?",
    options={
        "A": "$120^\\circ$",
        "B": "$60^\\circ$",
        "C": "$90^\\circ$",
        "D": "$150^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="Use the magnitude formula $|\vec{A} + \vec{B}|^2 = A^2 + B^2 + 2AB\cos\\theta$ and solve for $\cos\\theta$.",
    given="$|\vec{A} + \vec{B}| = A$ with $B = A$.",
    formula="$A^2 = A^2 + A^2 + 2A^2\cos\\theta$",
    steps=(
        "1. Substitute into the resultant formula:\n"
        "   $A^2 = 2A^2 + 2A^2\cos\\theta$.\n"
        "2. Subtract $2A^2$ from both sides:\n"
        "   $-A^2 = 2A^2\cos\\theta$.\n"
        "3. Divide by $2A^2$:\n"
        "   $\cos\\theta = -\\frac{1}{2}$.\n"
        "4. Since $\cos 120^\circ = -1/2$, the angle between them is $\\theta = 120^\circ$."
    ),
    tip="When two equal vectors produce a resultant equal in magnitude to either of them, the angle is ALWAYS $120^\\circ$. A classic NEET memory result!",
    why_wrong="Option B ($60^\\circ$) gives resultant $A\\sqrt{3}$; Option C ($90^\\circ$) gives $A\\sqrt{2}$."
))

# Q207 - Medium
qs.append(make_plane_q(
    num=207,
    question="A body constrained to move along the y-axis is subjected to a force $\\vec{F} = (-2\\hat{i} + 15\\hat{j} + 6\\hat{k})\\text{ N}$. What is the work done by this force in moving the body a distance of $10\\text{ m}$ along the y-axis?",
    options={
        "A": "$150\\text{ J}$",
        "B": "$190\\text{ J}$",
        "C": "$-20\\text{ J}$",
        "D": "$60\\text{ J}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="Since the body is constrained to move along the y-axis, the displacement vector is purely along $\\hat{j}$: $\\vec{s} = 10\\hat{j}\\text{ m}$. Only the y-component of the force does work.",
    given="$\\vec{F} = -2\\hat{i} + 15\\hat{j} + 6\\hat{k}\\text{ N}$, $\\vec{s} = 10\\hat{j}\\text{ m}$.",
    formula="$W = \\vec{F} \\cdot \\vec{s} = F_y \\times s_y$",
    steps=(
        "1. The displacement vector is $\\vec{s} = 0\\hat{i} + 10\\hat{j} + 0\\hat{k}\\text{ m}$.\n"
        "2. Compute dot product:\n"
        "   $W = \\vec{F} \\cdot \\vec{s} = (-2)(0) + (15)(10) + (6)(0) = 0 + 150 + 0 = 150\\text{ J}$.\n"
        "3. The components along x and z are perpendicular to displacement and do zero work."
    ),
    tip="Forces perpendicular to the allowed path do ZERO work. Only the parallel component $F_y = 15\\text{ N}$ contributes: $W = 15 \\times 10 = 150\\text{ J}$.",
    why_wrong="Option B incorrectly adds $(15+6-2)\\times 10 = 190\\text{ J}$; Option C uses the x-component."
))

# Q208 - Medium
qs.append(make_plane_q(
    num=208,
    question="The work done in moving a particle from point $P(1, 2, 3)\\text{ m}$ to point $Q(2, 4, 1)\\text{ m}$ under the action of force $\\vec{F} = (3\\hat{i} + 2\\hat{j} + 4\\hat{k})\\text{ N}$ is:",
    options={
        "A": "$-1\\text{ J}$",
        "B": "$15\\text{ J}$",
        "C": "$7\\text{ J}$",
        "D": "$23\\text{ J}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="First find the displacement vector $\\vec{s} = \\vec{r}_Q - \\vec{r}_P$, then compute work $W = \\vec{F} \\cdot \\vec{s}$.",
    given="Initial $P(1, 2, 3)$, final $Q(2, 4, 1)$, $\\vec{F} = 3\\hat{i} + 2\\hat{j} + 4\\hat{k}$.",
    formula="$\\vec{s} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j} + (z_2 - z_1)\\hat{k}$; $W = \\vec{F} \\cdot \\vec{s}$",
    steps=(
        "1. Compute displacement $\\vec{s}$:\n"
        "   $\\vec{s} = (2 - 1)\\hat{i} + (4 - 2)\\hat{j} + (1 - 3)\\hat{k} = \\hat{i} + 2\\hat{j} - 2\\hat{k}$.\n"
        "2. Compute dot product $\\vec{F} \\cdot \\vec{s}$:\n"
        "   $W = (3)(1) + (2)(2) + (4)(-2) = 3 + 4 - 8 = -1\\text{ J}$."
    ),
    tip="Careful with signs! $z_2 - z_1 = 1 - 3 = -2$. Thus $4 \\times (-2) = -8$, resulting in negative net work.",
    why_wrong="Option C computes $3 + 4 = 7$ ignoring z-work; Option B computes $3 + 4 + 8 = 15$ with sign error in $\\Delta z$."
))

# Q209 - Medium
qs.append(make_plane_q(
    num=209,
    question="If vector $\\vec{A} = 3\\hat{i} + 4\\hat{j}$, what is the vector projection of $\\vec{A}$ onto the vector $\\vec{B} = \\hat{i} + \\hat{j}$?",
    options={
        "A": "$3.5\\hat{i} + 3.5\\hat{j}$",
        "B": "$7\\hat{i} + 7\\hat{j}$",
        "C": "$1.75\\hat{i} + 1.75\\hat{j}$",
        "D": "$3\\hat{i} + 4\\hat{j}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Dot product and its applications",
    concept="The vector projection of $\\vec{A}$ onto $\\vec{B}$ is given by $\\left(\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|^2}\\right)\\vec{B}$.",
    given="$\\vec{A} = 3\\hat{i} + 4\\hat{j}$, $\\vec{B} = \\hat{i} + \\hat{j}$.",
    formula="\\text{proj}_{\\vec{B}}(\\vec{A}) = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|^2}\\vec{B}",
    steps=(
        "1. Compute dot product: $\\vec{A} \\cdot \\vec{B} = (3)(1) + (4)(1) = 7$.\n"
        "2. Compute $|\\vec{B}|^2 = 1^2 + 1^2 = 2$.\n"
        "3. Vector projection:\n"
        "   $\\text{proj}_{\\vec{B}}(\\vec{A}) = \\frac{7}{2}(\\hat{i} + \\hat{j}) = 3.5\\hat{i} + 3.5\\hat{j}$."
    ),
    tip="Scalar projection has $|\\vec{B}|$ in denominator; vector projection has $|\\vec{B}|^2$ in denominator multiplied by $\\vec{B}$.",
    why_wrong="Option B forgets to divide by $|\\vec{B}|^2 = 2$; Option C divides by 4."
))

# Q210 - Hard
qs.append(make_plane_q(
    num=210,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ satisfy $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = 0$. Which of the following statements must be true?",
    options={
        "A": "$|\\vec{A}| = |\\vec{B}|$",
        "B": "$\\vec{A}$ is perpendicular to $\\vec{B}$",
        "C": "$\\vec{A}$ is parallel to $\\vec{B}$",
        "D": "$\\vec{A} + \\vec{B} = \\vec{0}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Dot product and its applications",
    concept="Expand the dot product using distributivity: $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = \\vec{A} \\cdot \\vec{A} - \\vec{A} \\cdot \\vec{B} + \\vec{B} \\cdot \\vec{A} - \\vec{B} \\cdot \\vec{B} = A^2 - B^2 = 0 \\implies A = B$.",
    given="$(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = 0$.",
    formula="$A^2 - B^2 = 0 \\implies |\\vec{A}| = |\\vec{B}|$",
    steps=(
        "1. Apply distributive property of dot product:\n"
        "   $(\\vec{A} + \\vec{B}) \\cdot (\\vec{A} - \\vec{B}) = \\vec{A}\\cdot\\vec{A} - \\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{A} - \\vec{B}\\cdot\\vec{B}$.\n"
        "2. Since dot product is commutative, $\\vec{A}\\cdot\\vec{B} = \\vec{B}\\cdot\\vec{A}$, so the middle terms cancel out.\n"
        "3. This simplifies to $A^2 - B^2 = 0$.\n"
        "4. Since magnitudes are non-negative real numbers, $A^2 = B^2 \\implies A = B$."
    ),
    tip="Geometric meaning: The diagonals of a parallelogram are perpendicular if and only if the parallelogram is a rhombus (all sides equal in length: $A = B$)!",
    why_wrong="Option B confuses this with $|\\vec{A}+\\vec{B}| = |\\vec{A}-\\vec{B}|$ (which implies $\\vec{A} \\perp \\vec{B}$); Option C implies collinearity."
))

# Q211 - Hard
qs.append(make_plane_q(
    num=211,
    question="The linear velocity of a rotating body is given by $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$. If $\\vec{\\omega} = 3\\hat{i} - 4\\hat{j} + \\hat{k}$ and $\\vec{r} = 5\\hat{i} - 6\\hat{j} + 6\\hat{k}$, what is the value of $\\vec{v} \\cdot \\vec{\\omega}$?",
    options={
        "A": "$0$",
        "B": "$26$",
        "C": "$-12$",
        "D": "$45$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Dot product and its applications",
    concept="The cross product of two vectors is strictly perpendicular to both constituent vectors. Therefore, $\\vec{v} = (\\vec{\\omega} \\times \\vec{r})$ is perpendicular to $\\vec{\\omega}$, making $\\vec{v} \\cdot \\vec{\\omega} = 0$.",
    given="$\\vec{v} = \\vec{\\omega} \\times \\vec{r}$, $\\vec{\\omega} = 3\\hat{i} - 4\\hat{j} + \\hat{k}$, $\\vec{r} = 5\\hat{i} - 6\\hat{j} + 6\\hat{k}$.",
    formula="(\\vec{\\omega} \\times \\vec{r}) \\cdot \\vec{\\omega} = 0$",
    steps=(
        "1. By definition of vector cross product, $\\vec{A} \\times \\vec{B}$ is orthogonal to both $\\vec{A}$ and $\\vec{B}$.\n"
        "2. Here, $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$ is perpendicular to $\\vec{\\omega}$ (and also perpendicular to $\\vec{r}$).\n"
        "3. Since two perpendicular vectors have a dot product of zero, $\\vec{v} \\cdot \\vec{\\omega} = 0$ identically.\n"
        "4. No calculation of components is needed!"
    ),
    tip="Save 2 minutes in NEET: Any expression of the form $(\\vec{A} \\times \\vec{B}) \\cdot \\vec{A} = 0$ and $(\\vec{A} \\times \\vec{B}) \\cdot \\vec{B} = 0$ without doing any matrix math!",
    why_wrong="Options B, C, and D are traps for students who attempt to compute $\\vec{\\omega} \\cdot \\vec{r} = 15 + 24 + 6 = 45$."
))

# Q212 - Hard
qs.append(make_plane_q(
    num=212,
    question="Find the angle between the diagonal of a cube and one of its edges.",
    options={
        "A": "$\\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) \\approx 54.7^\\circ$",
        "B": "$\\cos^{-1}\\left(\\frac{1}{3}\\right)$",
        "C": "$45^\\circ$",
        "D": "$60^\\circ$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Dot product and its applications",
    concept="Let the cube have edge length $a$ with one vertex at origin. An edge along the x-axis is $\\vec{E} = a\\hat{i}$, and the main body diagonal is $\\vec{D} = a\\hat{i} + a\\hat{j} + a\\hat{k}$. Find the angle using dot product.",
    given="Cube of edge $a$. Edge vector $\\vec{E} = a\\hat{i}$, body diagonal $\\vec{D} = a\\hat{i} + a\\hat{j} + a\\hat{k}$.",
    formula="$\\cos\\theta = \\frac{\\vec{E} \\cdot \\vec{D}}{|\\vec{E}||\\vec{D}|}$",
    steps=(
        "1. Compute dot product:\n"
        "   $\\vec{E} \\cdot \\vec{D} = (a)(a) + (0)(a) + (0)(a) = a^2$.\n"
        "2. Compute magnitudes:\n"
        "   $|\\vec{E}| = a$.\n"
        "   $|\\vec{D}| = \\sqrt{a^2 + a^2 + a^2} = a\\sqrt{3}$.\n"
        "3. Calculate cosine of the angle:\n"
        "   $\\cos\\theta = \\frac{a^2}{a(a\\sqrt{3})} = \\frac{1}{\\sqrt{3}}$.\n"
        "4. Thus, $\\theta = \\cos^{-1}\\left(\\frac{1}{\\sqrt{3}}\\right) \\approx 54.7^\\circ$."
    ),
    tip="Between body diagonal and edge: $\\cos\\theta = 1/\\sqrt{3}$. Between body diagonal and face diagonal: $\\cos\\theta = \\sqrt{2/3}$. Between two body diagonals: $\\cos\\theta = 1/3$. Memorize all three for NEET!",
    why_wrong="Option B is the angle between two body diagonals of the cube; Option C is the angle between face diagonal and edge."
))

# Q213 - Hard
qs.append(make_plane_q(
    num=213,
    question="If $\\vec{A} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and $\\vec{B} = -\\hat{i} + 3\\hat{j} + 2\\hat{k}$, find the component of $\\vec{A}$ that is PERPENDICULAR to $\\vec{B}$.",
    options={
        "A": "$\\frac{1}{14}(35\\hat{i} + 27\\hat{j} - 24\\hat{k})$",
        "B": "$\\frac{1}{14}(7\\hat{i} - 21\\hat{j} - 14\\hat{k})$",
        "C": "$2\\hat{i} + 3\\hat{j} - \\hat{k}$",
        "D": "$\\frac{5}{14}(-\\hat{i} + 3\\hat{j} + 2\\hat{k})$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Dot product and its applications",
    concept="Any vector $\\vec{A}$ can be resolved into parallel and perpendicular components relative to $\\vec{B}$: $\\vec{A} = \\vec{A}_{\\parallel} + \\vec{A}_{\\perp}$, where $\\vec{A}_{\\parallel} = \\left(\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|^2}\\right)\\vec{B}$ and $\\vec{A}_{\\perp} = \\vec{A} - \\vec{A}_{\\parallel}$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$, $\\vec{B} = -\\hat{i} + 3\\hat{j} + 2\\hat{k}$.",
    formula="$\\vec{A}_{\\perp} = \\vec{A} - \\left(\\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|^2}\\right)\\vec{B}$",
    steps=(
        "1. Compute dot product: $\\vec{A} \\cdot \\vec{B} = (2)(-1) + (3)(3) + (-1)(2) = -2 + 9 - 2 = 5$.\n"
        "2. Compute $|\\vec{B}|^2 = (-1)^2 + 3^2 + 2^2 = 1 + 9 + 4 = 14$.\n"
        "3. Parallel component: $\\vec{A}_{\\parallel} = \\frac{5}{14}(-\\hat{i} + 3\\hat{j} + 2\\hat{k})$.\n"
        "4. Perpendicular component: $\\vec{A}_{\\perp} = \\vec{A} - \\vec{A}_{\\parallel}$:\n"
        "   $x = 2 - \\frac{5(-1)}{14} = 2 + \\frac{5}{14} = \\frac{33}{14}$ (Wait, let's recheck! $2 - (-5/14) = 28/14 + 5/14 = 33/14$! Wait, let's check: $2(14) + 5 = 33$! Let's check $y$: $3 - 15/14 = 42/14 - 15/14 = 27/14$! Let's check $z$: $-1 - 10/14 = -24/14$! So $33\\hat{i} + 27\\hat{j} - 24\\hat{k}$ divided by 14! Let's make option A precisely $\\frac{1}{14}(33\\hat{i} + 27\\hat{j} - 24\\hat{k})$!)."
    ),
    tip="Verification check: $\\vec{A}_{\\perp} \\cdot \\vec{B} = \\frac{1}{14}[(33)(-1) + (27)(3) + (-24)(2)] = \\frac{1}{14}[-33 + 81 - 48] = \\frac{0}{14} = 0$! Perfectly orthogonal!",
    why_wrong="Option D is the parallel component $\\vec{A}_{\\parallel}$, not the perpendicular component."
))

# Adjust Q213 option A to exact calculation:
qs[-1]["options"] = {
    "A": "$\\frac{1}{14}(33\\hat{i} + 27\\hat{j} - 24\\hat{k})$",
    "B": "$\\frac{1}{14}(7\\hat{i} - 21\\hat{j} - 14\\hat{k})$",
    "C": "$2\\hat{i} + 3\\hat{j} - \\hat{k}$",
    "D": "$\\frac{5}{14}(-\\hat{i} + 3\\hat{j} + 2\\hat{k})$"
}
qs[-1]["steps"] = (
    "1. Compute dot product: $\\vec{A} \\cdot \\vec{B} = (2)(-1) + (3)(3) + (-1)(2) = -2 + 9 - 2 = 5$.\n"
    "2. Compute $|\\vec{B}|^2 = (-1)^2 + 3^2 + 2^2 = 1 + 9 + 4 = 14$.\n"
    "3. Parallel component: $\\vec{A}_{\\parallel} = \\frac{5}{14}(-\\hat{i} + 3\\hat{j} + 2\\hat{k})$.\n"
    "4. Perpendicular component: $\\vec{A}_{\\perp} = \\vec{A} - \\vec{A}_{\\parallel}$:\n"
    "   $x = 2 - \\left(-\\frac{5}{14}\\right) = \\frac{28 + 5}{14} = \\frac{33}{14}$.\n"
    "   $y = 3 - \\frac{15}{14} = \\frac{42 - 15}{14} = \\frac{27}{14}$.\n"
    "   $z = -1 - \\frac{10}{14} = \\frac{-14 - 10}{14} = -\\frac{24}{14}$.\n"
    "5. $\\vec{A}_{\\perp} = \\frac{1}{14}(33\\hat{i} + 27\\hat{j} - 24\\hat{k})$."
)
qs[-1]["solutionStructured"]["stepByStep"] = qs[-1]["steps"]
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: $\\frac{1}{14}(33\\hat{i} + 27\\hat{j} - 24\\hat{k})$"

# Q214 - Hard
qs.append(make_plane_q(
    num=214,
    question="If $\\vec{a}, \\vec{b}, \\vec{c}$ are three unit vectors such that $\\vec{a} + \\vec{b} + \\vec{c} = \\vec{0}$, what is the value of $\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{c} + \\vec{c} \\cdot \\vec{a}$?",
    options={
        "A": "$-\\frac{3}{2}$",
        "B": "$0$",
        "C": "$1$",
        "D": "$-\\frac{1}{2}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Dot product and its applications",
    concept="Square the condition $|\vec{a} + \vec{b} + \vec{c}|^2 = 0$: $|\vec{a}|^2 + |\vec{b}|^2 + |\vec{c}|^2 + 2(\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a}) = 0$.",
    given="Unit vectors $|\vec{a}| = |\vec{b}| = |\vec{c}| = 1$ with $\vec{a} + \vec{b} + \vec{c} = \vec{0}$.",
    formula="|\vec{a} + \vec{b} + \vec{c}|^2 = 1 + 1 + 1 + 2(\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a}) = 0$",
    steps=(
        "1. Since $\vec{a} + \vec{b} + \vec{c} = \vec{0}$, we have:\n"
        "   $(\vec{a} + \vec{b} + \vec{c}) \cdot (\vec{a} + \vec{b} + \vec{c}) = 0$.\n"
        "2. Expanding:\n"
        "   $a^2 + b^2 + c^2 + 2(\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a}) = 0$.\n"
        "3. Since they are unit vectors, $a^2 = b^2 = c^2 = 1$.\n"
        "   $1 + 1 + 1 + 2(\dots) = 0 \\implies 3 + 2(\dots) = 0$.\n"
        "4. Solving: $\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a} = -\\frac{3}{2}$."
    ),
    tip="Three coplanar unit vectors summing to zero form an equilateral triangle with angles of $120^\\circ$ between any pair: each dot product is $\\cos 120^\\circ = -1/2$. Sum $= 3 \\times (-1/2) = -3/2$!",
    why_wrong="Option D is the value of a single dot product $\\vec{a}\\cdot\\vec{b} = -1/2$, rather than the sum of all three."
))

with open('scripts/mip_topic12.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 12 generated successfully:", len(qs))
