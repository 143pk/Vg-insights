import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 28: Vector-based conceptual and numerical applications (Q469 to Q484, 16 questions)
# Distribution: 4 Easy, 9 Medium, 3 Hard
# ==============================================================================

# Q469 - Easy
qs.append(make_plane_q(
    num=469,
    question="Three non-zero vectors $\\vec{A}$, $\\vec{B}$, and $\\vec{C}$ lie in the same plane (they are coplanar). Which of the following conditions must be satisfied?",
    options={
        "A": "$\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = 0$",
        "B": "$\\vec{A} \\times (\\vec{B} \\cdot \\vec{C}) = 0$",
        "C": "$\\vec{A} + \\vec{B} + \\vec{C} = 0$",
        "D": "$\\vec{A} \\cdot \\vec{B} = \\vec{B} \\cdot \\vec{C}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector-based conceptual and numerical applications",
    concept="The scalar triple product $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$ represents the volume of the parallelepiped formed by the three vectors. If the three vectors are coplanar, the parallelepiped has zero height and zero volume.",
    given="Three coplanar vectors $\\vec{A}$, $\\vec{B}$, and $\\vec{C}$.",
    formula="$\\text{Volume} = \\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = 0$ for coplanar vectors.",
    steps="1. The vector $\\vec{B} \\times \\vec{C}$ is perpendicular to the plane containing $\\vec{B}$ and $\\vec{C}$.\n2. Since $\\vec{A}$ also lies in that same plane, $\\vec{A}$ is perpendicular to $\\vec{B} \\times \\vec{C}$.\n3. The dot product of two mutually perpendicular vectors is zero: $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C}) = 0$.",
    tip="For any three coplanar vectors, their scalar triple product (or the determinant formed by their components) is always zero!",
    why_wrong="Option C is not necessary; coplanar vectors do not have to sum to zero. Option B is mathematically invalid as you cannot take the cross product of a vector with a scalar."
))

# Q470 - Easy
qs.append(make_plane_q(
    num=470,
    question="What is the projection of the vector $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ along the unit vector $\\hat{u} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$?",
    options={
        "A": "$\\frac{7}{\\sqrt{2}}$",
        "B": "$7$",
        "C": "$\\frac{1}{\\sqrt{2}}$",
        "D": "$5$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector-based conceptual and numerical applications",
    concept="The scalar projection of a vector $\\vec{A}$ along a unit vector $\\hat{u}$ is given by the dot product $\\vec{A} \\cdot \\hat{u}$.",
    given="$\\vec{A} = 3\\hat{i} + 4\\hat{j}$, $\\hat{u} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$.",
    formula="\\text{Projection} = \\vec{A} \\cdot \\hat{u} = A_x u_x + A_y u_y",
    steps="1. Compute the dot product:\n   $$\\vec{A} \\cdot \\hat{u} = (3\\hat{i} + 4\\hat{j}) \\cdot \\left(\\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}\\right) = \\frac{3(1) + 4(1)}{\\sqrt{2}} = \\frac{7}{\\sqrt{2}}$$.\n2. Therefore, the scalar projection is $\\frac{7}{\\sqrt{2}}$.",
    tip="Projection along a unit vector is simply the dot product with that unit vector!",
    why_wrong="Option B forgets the normalization factor $\\sqrt{2}$. Option D is the magnitude $|\vec{A}| = \\sqrt{3^2+4^2} = 5$."
))

# Q471 - Easy
qs.append(make_plane_q(
    num=471,
    question="A vector is given by $\\vec{A} = 2\\hat{i} + 2\\sqrt{3}\\hat{j}$. What angle does this vector make with the positive x-axis?",
    options={
        "A": "$60^\\circ$",
        "B": "$30^\\circ$",
        "C": "$45^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector-based conceptual and numerical applications",
    concept="The angle $\\theta$ made by a 2D vector $\\vec{A} = A_x\\hat{i} + A_y\\hat{j}$ with the positive x-axis is given by $\\tan\\theta = \\frac{A_y}{A_x}$.",
    given="$A_x = 2$, $A_y = 2\\sqrt{3}$.",
    formula="\\tan\\theta = \\frac{A_y}{A_x}",
    steps="1. Substitute components: $\\tan\\theta = \\frac{2\\sqrt{3}}{2} = \\sqrt{3}$.\n2. Since both $A_x > 0$ and $A_y > 0$, $\\theta$ lies in the first quadrant.\n3. $\\theta = \\arctan(\\sqrt{3}) = 60^\\circ$.",
    tip="Remember standard tangent values: $\\tan 30^\\circ = 1/\\sqrt{3}$, $\\tan 45^\\circ = 1$, $\\tan 60^\\circ = \\sqrt{3}$.",
    why_wrong="Option B is the angle made with the y-axis ($90^\\circ - 60^\\circ = 30^\\circ$)."
))

# Q472 - Easy
qs.append(make_plane_q(
    num=472,
    question="If two non-zero vectors $\\vec{A}$ and $\\vec{B}$ satisfy $\\vec{A} + \\vec{B} = \\vec{C}$ and $A^2 + B^2 = C^2$, the angle between $\\vec{A}$ and $\\vec{B}$ is:",
    options={
        "A": "$90^\\circ$",
        "B": "$0^\\circ$",
        "C": "$180^\\circ$",
        "D": "$45^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector-based conceptual and numerical applications",
    concept="By the law of vector addition, the magnitude of the resultant satisfies $C^2 = A^2 + B^2 + 2AB\\cos\\theta$. If $C^2 = A^2 + B^2$, the cross-term must vanish.",
    given="$C^2 = A^2 + B^2$.",
    formula="C^2 = A^2 + B^2 + 2AB\\cos\\theta",
    steps="1. Substitute given relation: $A^2 + B^2 + 2AB\\cos\\theta = A^2 + B^2$.\n2. This gives $2AB\\cos\\theta = 0$.\n3. Since $A \\neq 0$ and $B \\neq 0$, $\\cos\\theta = 0 \\implies \\theta = 90^\\circ$.",
    tip="This is simply the Pythagorean theorem in vector form: when two vectors are perpendicular, the square of the hypotenuse is the sum of the squares of the legs!",
    why_wrong="Option B corresponds to $\\cos\\theta = 1$ ($C = A + B$). Option C corresponds to $\\cos\\theta = -1$ ($C = |A - B|$)."
))

# Q473 - Medium
qs.append(make_plane_q(
    num=473,
    question="A constant force $\\vec{F} = (2\\hat{i} + 3\\hat{j} - \\hat{k})\\text{ N}$ acts on a particle, displacing it from $\\vec{r}_1 = (\\hat{i} + 2\\hat{j} + 3\\hat{k})\\text{ m}$ to $\\vec{r}_2 = (3\\hat{i} + 5\\hat{j} + \\hat{k})\\text{ m}$. The work done by the force is:",
    options={
        "A": "$15\\text{ J}$",
        "B": "$11\\text{ J}$",
        "C": "$19\\text{ J}$",
        "D": "$7\\text{ J}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="Work done by a constant force is the dot product of the force vector and the displacement vector: $W = \\vec{F} \\cdot \\Delta\\vec{r}$.",
    given="$\\vec{F} = 2\\hat{i} + 3\\hat{j} - \\hat{k}\\text{ N}$, $\\vec{r}_1 = \\hat{i} + 2\\hat{j} + 3\\hat{k}\\text{ m}$, $\\vec{r}_2 = 3\\hat{i} + 5\\hat{j} + \\hat{k}\\text{ m}$.",
    formula="\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1,\\quad W = \\vec{F} \\cdot \\Delta\\vec{r}",
    steps="1. Find displacement: $\\Delta\\vec{r} = (3-1)\\hat{i} + (5-2)\\hat{j} + (1-3)\\hat{k} = 2\\hat{i} + 3\\hat{j} - 2\\hat{k}\\text{ m}$.\n2. Compute dot product:\n   $$W = (2)(2) + (3)(3) + (-1)(-2) = 4 + 9 + 2 = 15\\text{ J}$$.\n3. The work done is $15\\text{ J}$.",
    tip="Carefully calculate $\\Delta\\vec{r} = \\vec{r}_\\text{final} - \\vec{r}_\\text{initial}$ and watch minus signs in the dot product!",
    why_wrong="Option B occurs if $(-1)(-2)$ is incorrectly subtracted as $-2$: $4 + 9 - 2 = 11\\text{ J}$."
))

# Q474 - Medium
qs.append(make_plane_q(
    num=474,
    question="The area of a parallelogram having adjacent sides formed by the vectors $\\vec{a} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{b} = \\hat{i} + 4\\hat{j}$ is:",
    options={
        "A": "$5\\text{ units}^2$",
        "B": "$11\\text{ units}^2$",
        "C": "$8\\text{ units}^2$",
        "D": "$14\\text{ units}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="The area of a parallelogram formed by two adjacent vector sides $\\vec{a}$ and $\\vec{b}$ is equal to the magnitude of their cross product: $\\text{Area} = |\\vec{a} \\times \\vec{b}|$.",
    given="$\\vec{a} = 2\\hat{i} + 3\\hat{j}$, $\\vec{b} = \\hat{i} + 4\\hat{j}$.",
    formula="\\text{Area} = |\\vec{a} \\times \\vec{b}|",
    steps="1. Calculate the cross product in 2D:\n   $$\\vec{a} \\times \\vec{b} = (a_x b_y - a_y b_x)\\hat{k}$$\n2. Substitute values: $(2 \\times 4 - 3 \\times 1)\\hat{k} = (8 - 3)\\hat{k} = 5\\hat{k}$.\n3. Magnitude $|5\\hat{k}| = 5\\text{ units}^2$.",
    tip="For 2D vectors in the xy-plane, the area is just the 2x2 determinant $|a_x b_y - a_y b_x|$!",
    why_wrong="Option B adds instead of subtracting ($8 + 3 = 11$). Option C is just $2 \\times 4 = 8$."
))

# Q475 - Medium
qs.append(make_plane_q(
    num=475,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ have equal magnitude ($A = B$). If $|\\vec{A} + \\vec{B}| = \\sqrt{3}|\\vec{A} - \\vec{B}|$, what is the angle between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "$60^\\circ$",
        "B": "$30^\\circ$",
        "C": "$90^\\circ$",
        "D": "$120^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="The magnitudes of the sum and difference of two vectors of equal magnitude $A$ are $2A\\cos(\\theta/2)$ and $2A\\sin(\\theta/2)$ respectively.",
    given="$A = B$, $|\\vec{A} + \\vec{B}| = \\sqrt{3}|\\vec{A} - \\vec{B}|$.",
    formula="|\\vec{A} + \\vec{B}|^2 = 3|\\vec{A} - \\vec{B}|^2",
    steps="1. Square both sides:\n   $$A^2 + B^2 + 2AB\\cos\\theta = 3(A^2 + B^2 - 2AB\\cos\\theta)$$\n2. Since $A = B$:\n   $$2A^2(1 + \\cos\\theta) = 3(2A^2(1 - \\cos\\theta))$$\n3. Divide by $2A^2$:\n   $$1 + \\cos\\theta = 3 - 3\\cos\\theta \\implies 4\\cos\\theta = 2 \\implies \\cos\\theta = \\frac{1}{2}$$\n4. Therefore, $\\theta = 60^\\circ$.",
    tip="Alternatively: $\\frac{2A\\cos(\\theta/2)}{2A\\sin(\\theta/2)} = \\cot(\\theta/2) = \\sqrt{3} \\implies \\theta/2 = 30^\\circ \\implies \\theta = 60^\\circ$!",
    why_wrong="Option B is $\\theta/2 = 30^\\circ$. Option D corresponds to $|\\vec{A} + \\vec{B}| = |\\vec{A} - \\vec{B}|/\\sqrt{3}$."
))

# Q476 - Medium
qs.append(make_plane_q(
    num=476,
    question="A unit vector perpendicular to both vectors $\\vec{A} = \\hat{i} + \\hat{j}$ and $\\vec{B} = \\hat{j} + \\hat{k}$ is:",
    options={
        "A": "$\\frac{\\hat{i} - \\hat{j} + \\hat{k}}{\\sqrt{3}}$",
        "B": "$\\frac{\\hat{i} + \\hat{j} + \\hat{k}}{\\sqrt{3}}$",
        "C": "$\\frac{-\\hat{i} - \\hat{j} + \\hat{k}}{\\sqrt{3}}$",
        "D": "$\\frac{\\hat{i} + \\hat{j} - \\hat{k}}{\\sqrt{3}}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="A vector perpendicular to both $\\vec{A}$ and $\\vec{B}$ is given by their cross product $\\vec{A} \\times \\vec{B}$. The unit vector is $\\hat{n} = \\frac{\\vec{A} \\times \\vec{B}}{|\\vec{A} \\times \\vec{B}|}$.",
    given="$\\vec{A} = \\hat{i} + \\hat{j} + 0\\hat{k}$, $\\vec{B} = 0\\hat{i} + \\hat{j} + \\hat{k}$.",
    formula="\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{vmatrix}",
    steps="1. Compute the determinant:\n   $$\\vec{A} \\times \\vec{B} = \\hat{i}(1 - 0) - \\hat{j}(1 - 0) + \\hat{k}(1 - 0) = \\hat{i} - \\hat{j} + \\hat{k}$$\n2. Find magnitude: $|\\vec{A} \\times \\vec{B}| = \\sqrt{1^2 + (-1)^2 + 1^2} = \\sqrt{3}$.\n3. The unit vector is $\\hat{n} = \\frac{\\hat{i} - \\hat{j} + \\hat{k}}{\\sqrt{3}}$.",
    tip="You can quickly check: $\\hat{n} \\cdot \\vec{A} = (1 - 1 + 0)/\\sqrt{3} = 0$ and $\\hat{n} \\cdot \\vec{B} = (0 - 1 + 1)/\\sqrt{3} = 0$!",
    why_wrong="Option B has dot product $(1 + 1)/\\sqrt{3} \\neq 0$ with $\\vec{A}$, so it is not perpendicular."
))

# Q477 - Medium
qs.append(make_plane_q(
    num=477,
    question="The resultant of two forces $\\vec{P}$ and $\\vec{Q}$ is perpendicular to $\\vec{P}$. The magnitude of the resultant force $R$ is:",
    options={
        "A": "$\\sqrt{Q^2 - P^2}$",
        "B": "$\\sqrt{P^2 + Q^2}$",
        "C": "$\\sqrt{P^2 - Q^2}$",
        "D": "$Q - P$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="When the resultant $\\vec{R} = \\vec{P} + \\vec{Q}$ is perpendicular to $\\vec{P}$, the vectors $\\vec{P}$, $\\vec{R}$, and $\\vec{Q}$ form a right-angled triangle where $\\vec{Q}$ is the hypotenuse.",
    given="$\\vec{R} \\perp \\vec{P}$, where $\\vec{R} = \\vec{P} + \\vec{Q}$.",
    formula="R^2 + P^2 = Q^2 \\implies R = \\sqrt{Q^2 - P^2}",
    steps="1. By vector triangle: $\\vec{P} + \\vec{R}_{\\perp} = \\vec{Q}$ or $\\vec{R} = \\vec{P} + \\vec{Q}$.\n2. The angle $\\alpha$ that $\\vec{R}$ makes with $\\vec{P}$ is $90^\\circ$.\n3. $\\tan 90^\\circ = \\frac{Q\\sin\\theta}{P + Q\\cos\\theta} = \\infty \\implies P + Q\\cos\\theta = 0 \\implies \\cos\\theta = -\\frac{P}{Q}$.\n4. Magnitude of resultant:\n   $$R^2 = P^2 + Q^2 + 2PQ\\cos\\theta = P^2 + Q^2 + 2PQ\\left(-\\frac{P}{Q}\\right) = Q^2 - P^2$$\n5. Thus, $R = \\sqrt{Q^2 - P^2}$.",
    tip="In a right triangle of vectors where $R \\perp P$, $Q$ is always the hypotenuse, so $R = \\sqrt{Q^2 - P^2}$ directly!",
    why_wrong="Option B assumes the angle between $P$ and $Q$ is $90^\\circ$, but here the angle between $P$ and $R$ is $90^\\circ$."
))

# Q478 - Medium
qs.append(make_plane_q(
    num=478,
    question="Three coplanar forces of magnitude $10\\text{ N}$ each act at a single point in directions separated by $120^\\circ$ from each other. If one of the forces is reversed in direction, the magnitude of the new resultant force is:",
    options={
        "A": "$20\\text{ N}$",
        "B": "$10\\text{ N}$",
        "C": "$0\\text{ N}$",
        "D": "$10\\sqrt{3}\\text{ N}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="Three equal coplanar forces separated by $120^\\circ$ sum to zero. When one force $\\vec{F}_1$ is reversed to $-\\vec{F}_1$, the new sum is $(\\vec{F}_2 + \\vec{F}_3) - \\vec{F}_1 = -\\vec{F}_1 - \\vec{F}_1 = -2\\vec{F}_1$.",
    given="$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0$, with $|\vec{F}_1| = |\vec{F}_2| = |\vec{F}_3| = 10\\text{ N}$.",
    formula="\\vec{R}_{\\text{new}} = (-\\vec{F}_1) + \\vec{F}_2 + \\vec{F}_3 = -2\\vec{F}_1",
    steps="1. Initially, $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0$, so $\\vec{F}_2 + \\vec{F}_3 = -\\vec{F}_1$.\n2. Reversing $\\vec{F}_1$ makes it $-\\vec{F}_1$.\n3. New resultant: $\\vec{R}_{\\text{new}} = (-\\vec{F}_1) + (\\vec{F}_2 + \\vec{F}_3) = -\\vec{F}_1 + (-\\vec{F}_1) = -2\\vec{F}_1$.\n4. Magnitude: $|\\vec{R}_{\\text{new}}| = 2|\\vec{F}_1| = 2(10) = 20\\text{ N}$.",
    tip="Reversing any vector $\\vec{v}$ in a balanced system (sum = 0) always gives a resultant of magnitude $2|\\vec{v}|$!",
    why_wrong="Option C is the original sum before reversal. Option B would be if one force was simply removed."
))

# Q479 - Medium
qs.append(make_plane_q(
    num=479,
    question="Vector $\\vec{A}$ has magnitude $10$ units directed at $30^\\circ$ north of east. Vector $\\vec{B}$ has magnitude $10$ units directed at $60^\\circ$ west of north. The magnitude of $\\vec{A} + \\vec{B}$ is:",
    options={
        "A": "$10\\text{ units}$",
        "B": "$10\\sqrt{3}\\text{ units}$",
        "C": "$10\\sqrt{2}\\text{ units}$",
        "D": "$20\\text{ units}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="The angle between two vectors can be found from their bearing angles. Two equal vectors separated by $120^\\circ$ produce a resultant whose magnitude equals that of either vector.",
    given="$A = 10$, $\\theta_A = 30^\\circ$ (from positive x-axis); $B = 10$, $\\theta_B = 90^\\circ + 60^\\circ = 150^\\circ$ (from positive x-axis).",
    formula="R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}",
    steps="1. Angle between the two vectors: $\\theta = 150^\\circ - 30^\\circ = 120^\\circ$.\n2. Since $A = B = 10$ and $\\theta = 120^\\circ$:\n   $$R = \\sqrt{10^2 + 10^2 + 2(10)(10)\\cos 120^\\circ}$$\n3. With $\\cos 120^\\circ = -1/2$:\n   $$R = \\sqrt{100 + 100 - 100} = \\sqrt{100} = 10\\text{ units}$$.",
    tip="Universal NEET rule: Two equal vectors at an angle of $120^\\circ$ always have a resultant equal in magnitude to each vector!",
    why_wrong="Option B corresponds to $\\theta = 60^\\circ$. Option C corresponds to $\\theta = 90^\\circ$."
))

# Q480 - Medium
qs.append(make_plane_q(
    num=480,
    question="A vector $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ is rotated anticlockwise through an angle of $90^\\circ$ about the origin in the xy-plane. The new vector $\\vec{A}'$ is:",
    options={
        "A": "$-4\\hat{i} + 3\\hat{j}$",
        "B": "$4\\hat{i} - 3\\hat{j}$",
        "C": "$-3\\hat{i} + 4\\hat{j}$",
        "D": "$3\\hat{i} - 4\\hat{j}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="When a 2D vector $(x, y)$ is rotated by $90^\\circ$ counterclockwise, the transformation is $x' = -y$ and $y' = x$.",
    given="$\\vec{A} = 3\\hat{i} + 4\\hat{j}$, $\\theta = 90^\\circ$ anticlockwise.",
    formula="x' = x\\cos\\theta - y\\sin\\theta,\\quad y' = x\\sin\\theta + y\\cos\\theta",
    steps="1. For $\\theta = 90^\\circ$, $\\cos 90^\\circ = 0$ and $\\sin 90^\\circ = 1$.\n2. $x' = 3(0) - 4(1) = -4$.\n3. $y' = 3(1) + 4(0) = 3$.\n4. Thus, $\\vec{A}' = -4\\hat{i} + 3\\hat{j}$.",
    tip="Check perpendicularity: $\\vec{A} \\cdot \\vec{A}' = (3)(-4) + (4)(3) = -12 + 12 = 0$. In quadrant II, $x < 0$ and $y > 0$!",
    why_wrong="Option B represents a $90^\\circ$ clockwise rotation. Option C is a reflection across the y-axis."
))

# Q481 - Medium
qs.append(make_plane_q(
    num=481,
    question="The angular velocity of a rotating rigid body is $\\vec{\\omega} = (3\\hat{i} - 4\\hat{j} + \\hat{k})\\text{ rad/s}$ and the position vector of a particle is $\\vec{r} = (5\\hat{i} - 6\\hat{j} + 6\\hat{k})\\text{ m}$. The linear velocity $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$ of the particle is:",
    options={
        "A": "$-18\\hat{i} - 13\\hat{j} + 2\\hat{k}\\text{ m/s}$",
        "B": "$18\\hat{i} + 13\\hat{j} - 2\\hat{k}\\text{ m/s}$",
        "C": "$-18\\hat{i} + 13\\hat{j} + 2\\hat{k}\\text{ m/s}$",
        "D": "$18\\hat{i} - 13\\hat{j} + 2\\hat{k}\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector-based conceptual and numerical applications",
    concept="Linear velocity is given by the vector cross product $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$.",
    given="$\\vec{\\omega} = 3\\hat{i} - 4\\hat{j} + \\hat{k}$, $\\vec{r} = 5\\hat{i} - 6\\hat{j} + 6\\hat{k}$.",
    formula="\\vec{v} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 3 & -4 & 1 \\\\ 5 & -6 & 6 \\end{vmatrix}",
    steps="1. Evaluate the cross product:\n   $$v_x = (-4)(6) - (1)(-6) = -24 + 6 = -18$$\n   $$v_y = -[ (3)(6) - (1)(5) ] = -[ 18 - 5 ] = -13$$\n   $$v_z = (3)(-6) - (-4)(5) = -18 + 20 = 2$$\n2. Therefore, $\\vec{v} = -18\\hat{i} - 13\\hat{j} + 2\\hat{k}\\text{ m/s}$.",
    tip="Check using dot product: $\\vec{v} \\cdot \\vec{\\omega} = (-18)(3) + (-13)(-4) + (2)(1) = -54 + 52 + 2 = 0$! It must be orthogonal to $\\vec{\\omega}$.",
    why_wrong="Option B has the opposite sign for all components (evaluating $\\vec{r} \\times \\vec{\\omega}$ instead)."
))

# Q482 - Hard
qs.append(make_plane_q(
    num=482,
    question="The position vector of a particle moving in the xy-plane is given by $\\vec{r}(t) = a\\cos(\\omega t)\\hat{i} + b\\sin(\\omega t)\\hat{j}$, where $a, b, \\omega$ are positive constants and $a \\neq b$. Which of the following statements is INCORRECT?",
    options={
        "A": "The acceleration vector is directed tangentially to the path.",
        "B": "The trajectory of the particle is an ellipse.",
        "C": "The acceleration vector is $\\vec{a} = -\\omega^2\\vec{r}$.",
        "D": "The acceleration is always directed towards the origin."
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector-based conceptual and numerical applications",
    concept="For harmonic motion in 2D with orthogonal components of unequal amplitude, the trajectory is an ellipse, and the acceleration is central (directed towards the origin).",
    given="$\\vec{r}(t) = a\\cos(\\omega t)\\hat{i} + b\\sin(\\omega t)\\hat{j}$.",
    formula="\\vec{v} = \\frac{d\\vec{r}}{dt},\\quad \\vec{a} = \\frac{d^2\\vec{r}}{dt^2}",
    steps="1. Differentiating $\\vec{r}$ twice with respect to $t$:\n   $$\\vec{v}(t) = -a\\omega\\sin(\\omega t)\\hat{i} + b\\omega\\cos(\\omega t)\\hat{j}$$\n   $$\\vec{a}(t) = -a\\omega^2\\cos(\\omega t)\\hat{i} - b\\omega^2\\sin(\\omega t)\\hat{j} = -\\omega^2\\vec{r}$$\n2. Since $\\vec{a} = -\\omega^2\\vec{r}$, the acceleration is directed along $-\\vec{r}$, which is straight towards the origin (central force motion).\n3. Therefore, the acceleration is NOT tangential to the path; statement A is false and thus the correct choice.",
    tip="Since $\\vec{a} = -\\omega^2\\vec{r}$, the force is central (towards origin), exactly like 2D anisotropic harmonic oscillator!",
    why_wrong="Statements B, C, and D are all physically and mathematically correct."
))

# Q483 - Hard
qs.append(make_plane_q(
    num=483,
    question="Three vectors $\\vec{A}$, $\\vec{B}$, and $\\vec{C}$ satisfy $\\vec{A} + \\vec{B} + \\vec{C} = 0$. If $|\vec{A}| = 3$, $|\vec{B}| = 5$, and $|\vec{C}| = 7$, what is the angle between vectors $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "$60^\\circ$",
        "B": "$120^\\circ$",
        "C": "$45^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector-based conceptual and numerical applications",
    concept="If the vector sum is zero, $\\vec{A} + \\vec{B} = -\\vec{C}$. Taking the dot product of both sides with themselves gives the relation between the magnitudes and the angle between $\\vec{A}$ and $\\vec{B}$.",
    given="$A = 3$, $B = 5$, $C = 7$, $\\vec{A} + \\vec{B} + \\vec{C} = 0$.",
    formula="|\\vec{A} + \\vec{B}|^2 = |-\\vec{C}|^2 = C^2",
    steps="1. Expand the magnitude squared:\n   $$A^2 + B^2 + 2AB\\cos\\theta = C^2$$\n2. Substitute the given numbers:\n   $$3^2 + 5^2 + 2(3)(5)\\cos\\theta = 7^2$$\n   $$9 + 25 + 30\\cos\\theta = 49$$\n   $$34 + 30\\cos\\theta = 49$$\n3. Solve for $\\cos\\theta$:\n   $$30\\cos\\theta = 15 \\implies \\cos\\theta = \\frac{1}{2}$$\n4. Therefore, $\\theta = 60^\\circ$.",
    tip="Isolate the third vector on the other side: $\\vec{A} + \\vec{B} = -\\vec{C}$ and square it: $A^2 + B^2 + 2AB\\cos\\theta = C^2$!",
    why_wrong="Option B is the external angle or the angle between $\\vec{A}$ and $-\\vec{C}$."
))

# Q484 - Hard
qs.append(make_plane_q(
    num=484,
    question="A particle moves in the xy-plane with its position coordinates given as a function of time by $x(t) = t^3\\text{ m}$ and $y(t) = t^2\\text{ m}$. What is the radius of curvature of the trajectory at $t = 1\\text{ s}$?",
    options={
        "A": "$\\frac{13\\sqrt{13}}{6}\\text{ m}$",
        "B": "$\\frac{13}{6}\\text{ m}$",
        "C": "$\\frac{5\\sqrt{5}}{2}\\text{ m}$",
        "D": "$\\frac{13\\sqrt{13}}{12}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector-based conceptual and numerical applications",
    concept="The radius of curvature $\\rho$ of any plane curve at speed $v$ with normal acceleration $a_n$ is given by $\\rho = \\frac{v^3}{|\\vec{v} \\times \\vec{a}|}$.",
    given="$x(t) = t^3$, $y(t) = t^2$ at $t = 1\\text{ s}$.",
    formula="\\rho = \\frac{v^3}{|\\vec{v} \\times \\vec{a}|}",
    steps="1. Differentiate to get velocity components:\n   $$v_x = \\frac{dx}{dt} = 3t^2,\\quad v_y = \\frac{dy}{dt} = 2t$$\n   At $t = 1\\text{ s}$: $v_x = 3\\text{ m/s}$, $v_y = 2\\text{ m/s}$, so $v = \\sqrt{3^2 + 2^2} = \\sqrt{13}\\text{ m/s}$.\n2. Differentiate to get acceleration components:\n   $$a_x = \\frac{dv_x}{dt} = 6t,\\quad a_y = \\frac{dv_y}{dt} = 2$$\n   At $t = 1\\text{ s}$: $a_x = 6\\text{ m/s}^2$, $a_y = 2\\text{ m/s}^2$.\n3. Calculate $|\\vec{v} \\times \\vec{a}|$:\n   $$|v_x a_y - v_y a_x| = |(3)(2) - (2)(6)| = |6 - 12| = 6\\text{ m}^2/\\text{s}^3$$\n4. Radius of curvature:\n   $$\\rho = \\frac{v^3}{|\\vec{v} \\times \\vec{a}|} = \\frac{(\\sqrt{13})^3}{6} = \\frac{13\\sqrt{13}}{6}\\text{ m}$$.",
    tip="The formula $\\rho = \\frac{v^3}{|\\vec{v} \\times \\vec{a}|}$ works for ANY parametric trajectory $\\vec{r}(t)$ in 2D or 3D!",
    why_wrong="Option B misses the power $v^3$ by using $v^2$. Option D has an erroneous factor of 2 in the denominator."
))


# ==============================================================================
# Topic 29: Mixed-concept NEET-level problems (Q485 to Q500, 16 questions)
# Distribution: 4 Easy, 9 Medium, 3 Hard
# ==============================================================================

# Q485 - Easy
qs.append(make_plane_q(
    num=485,
    question="A particle moves along a circular path of radius $r$ with a constant speed $v$. In completing half a revolution, the magnitude of the change in velocity is:",
    options={
        "A": "$2v$",
        "B": "$0$",
        "C": "$\\sqrt{2}v$",
        "D": "$v$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="Velocity is a vector quantity having both magnitude and direction. In half a revolution of circular motion, the direction of velocity completely reverses, though the speed remains constant.",
    given="Initial velocity $\\vec{v}_1 = v\\hat{j}$, final velocity after half a revolution $\\vec{v}_2 = -v\\hat{j}$.",
    formula="|\\Delta\\vec{v}| = |\\vec{v}_2 - \\vec{v}_1| = 2v\\sin(\\theta/2)",
    steps="1. Initially, velocity is $\\vec{v}_1 = v\\hat{j}$.\n2. After half a circle (angular displacement $\\theta = 180^\\circ$), the velocity is directed oppositely: $\\vec{v}_2 = -v\\hat{j}$.\n3. The change in velocity is $\\Delta\\vec{v} = \\vec{v}_2 - \\vec{v}_1 = -v\\hat{j} - v\\hat{j} = -2v\\hat{j}$.\n4. Magnitude: $|\\Delta\\vec{v}| = 2v$.",
    tip="Change in speed is zero ($v - v = 0$), but change in velocity is $2v$ because velocity reversed direction!",
    why_wrong="Option B is the change in SPEED, not the change in VELOCITY."
))

# Q486 - Easy
qs.append(make_plane_q(
    num=486,
    question="During the projectile motion of a particle launched obliquely from ground, at what point is the angle between the velocity vector and the acceleration vector equal to $90^\\circ$?",
    options={
        "A": "At the highest point of its trajectory",
        "B": "At the point of projection",
        "C": "At the point of landing",
        "D": "The angle is never $90^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="In projectile motion under gravity, acceleration $\\vec{g}$ is always directed vertically downwards. The velocity vector is tangential to the trajectory.",
    given="$\\vec{a} = -g\\hat{j}$ throughout flight.",
    formula="\\vec{v} \\cdot \\vec{a} = 0 \\iff \\vec{v} \\perp \\vec{a}",
    steps="1. At any general point, the velocity has both horizontal and vertical components: $\\vec{v} = u_x\\hat{i} + v_y\\hat{j}$.\n2. At the highest point, the vertical component of velocity becomes zero: $v_y = 0$.\n3. Therefore, the velocity is entirely horizontal: $\\vec{v} = u_x\\hat{i}$.\n4. Since acceleration is purely vertical ($\\vec{g} = -g\\hat{j}$), the velocity and acceleration vectors are mutually perpendicular ($90^\\circ$).",
    tip="At launch, angle is $90^\\circ + \\theta > 90^\\circ$. At the apex, angle is exactly $90^\\circ$. At landing, angle is $90^\\circ - \\theta < 90^\\circ$!",
    why_wrong="Option B: At projection, the velocity is directed above the horizontal while gravity is downwards, making the angle obtuse."
))

# Q487 - Easy
qs.append(make_plane_q(
    num=487,
    question="A ball is projected horizontally with an initial speed $u$ from the top of a cliff. Neglecting air resistance, what is the horizontal component of its velocity after time $t$?",
    options={
        "A": "$u$",
        "B": "$u + gt$",
        "C": "$\\sqrt{u^2 + (gt)^2}$",
        "D": "$gt$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="In projectile motion under gravity without air resistance, there is zero horizontal acceleration ($a_x = 0$), so the horizontal velocity remains constant throughout the entire motion.",
    given="Initial horizontal speed $u_x = u$, horizontal acceleration $a_x = 0$.",
    formula="v_x = u_x + a_x t = u + 0 = u",
    steps="1. Gravity acts solely in the vertical direction: $a_y = -g$, $a_x = 0$.\n2. Because $a_x = 0$, $v_x$ does not change with time.\n3. After time $t$, $v_x = u$.",
    tip="Horizontal motion and vertical motion in 2D are completely independent!",
    why_wrong="Option C is the total speed $\\sqrt{u^2 + (gt)^2}$. Option D is the magnitude of the vertical component $v_y = gt$."
))

# Q488 - Easy
qs.append(make_plane_q(
    num=488,
    question="Two projectiles are fired from level ground with the same speed $u$ at complementary angles $\\theta$ and $(90^\\circ - \\theta)$. What is the ratio of their horizontal ranges?",
    options={
        "A": "$1 : 1$",
        "B": "$\\tan\\theta : 1$",
        "C": "$\\tan^2\\theta : 1$",
        "D": "$1 : 2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="The horizontal range of a projectile on level ground depends on $\\sin(2\\theta)$. Since $\\sin(2(90^\\circ - \\theta)) = \\sin(180^\\circ - 2\\theta) = \\sin(2\\theta)$, complementary angles yield identical ranges.",
    given="Speed $u$, angles $\\theta_1 = \\theta$ and $\\theta_2 = 90^\\circ - \\theta$.",
    formula="R = \\frac{u^2\\sin(2\\theta)}{g}",
    steps="1. For angle $\\theta_1$: $R_1 = \\frac{u^2\\sin(2\\theta)}{g}$.\n2. For angle $\\theta_2 = 90^\\circ - \\theta$:\n   $$R_2 = \\frac{u^2\\sin(2(90^\\circ - \\theta))}{g} = \\frac{u^2\\sin(180^\\circ - 2\\theta)}{g} = \\frac{u^2\\sin(2\\theta)}{g}$$.\n3. Therefore, $R_1 = R_2$, and the ratio is $1 : 1$.",
    tip="Complementary angles (e.g. $30^\\circ$ and $60^\\circ$, or $15^\\circ$ and $75^\\circ$) always produce equal ranges for the same launch speed!",
    why_wrong="Option C is the ratio of their maximum heights: $H_1/H_2 = \\tan^2\\theta$."
))

# Q489 - Medium
qs.append(make_plane_q(
    num=489,
    question="A projectile is thrown from the ground at an angle of $45^\\circ$ to the horizontal with initial kinetic energy $K$. What is its kinetic energy at the highest point of its trajectory?",
    options={
        "A": "$\\frac{K}{2}$",
        "B": "$0$",
        "C": "$\\frac{K}{4}$",
        "D": "$\\frac{K}{\\sqrt{2}}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="At the highest point of projectile motion, the vertical velocity is zero, and the speed equals the horizontal component $u\\cos\\theta$. The kinetic energy is proportional to the square of speed.",
    given="$\\theta = 45^\\circ$, initial kinetic energy $K = \\frac{1}{2}mu^2$.",
    formula="K_{\\text{top}} = \\frac{1}{2}m(u\\cos\\theta)^2 = K\\cos^2\\theta",
    steps="1. At the peak, velocity is purely horizontal: $v_{\\text{top}} = u\\cos 45^\\circ = \\frac{u}{\\sqrt{2}}$.\n2. Kinetic energy at the peak:\n   $$K_{\\text{top}} = \\frac{1}{2}m v_{\\text{top}}^2 = \\frac{1}{2}m\\left(\\frac{u}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}\\left(\\frac{1}{2}mu^2\\right) = \\frac{K}{2}$$.\n3. Hence, the kinetic energy is $K/2$.",
    tip="Remember: $K_{\\text{top}} = K\\cos^2\\theta$. For $45^\\circ$, $\\cos^2 45^\\circ = 1/2$. For $60^\\circ$, $\\cos^2 60^\\circ = 1/4$!",
    why_wrong="Option B assumes the particle stops completely at the highest point, which is only true for purely vertical projection."
))

# Q490 - Medium
qs.append(make_plane_q(
    num=490,
    question="A small bob of mass $m$ is attached to a light string of length $L$ and whirled in a horizontal circle at constant speed, forming a conical pendulum. If the string makes an angle $\\theta$ with the vertical, the tension $T$ in the string is:",
    options={
        "A": "$\\frac{mg}{\\cos\\theta}$",
        "B": "$mg\\cos\\theta$",
        "C": "$mg\\sin\\theta$",
        "D": "$\\frac{mg}{\\sin\\theta}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="In a conical pendulum, the vertical component of the tension balances the gravitational force, while the horizontal component provides the necessary centripetal force.",
    given="Mass $m$, string angle $\\theta$ with vertical.",
    formula="T\\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}",
    steps="1. Resolve tension into components:\n   - Vertical component: $T\\cos\\theta$ upwards.\n   - Horizontal component: $T\\sin\\theta$ radially inwards towards the center of the circular orbit.\n2. Since there is no vertical acceleration: $T\\cos\\theta - mg = 0$.\n3. Therefore, $T = \\frac{mg}{\\cos\\theta}$.",
    tip="Since $\\cos\\theta < 1$, the tension $T = mg/\\cos\\theta > mg$ is always greater than the bob's weight!",
    why_wrong="Option B incorrectly multiplies by $\\cos\\theta$ instead of dividing."
))

# Q491 - Medium
qs.append(make_plane_q(
    num=491,
    question="A particle is projected from the origin in a uniform gravitational field $\\vec{g} = -10\\hat{j}\\text{ m/s}^2$ with initial velocity $\\vec{u} = (6\\hat{i} + 8\\hat{j})\\text{ m/s}$. The velocity of the particle when it reaches maximum height is:",
    options={
        "A": "$6\\hat{i}\\text{ m/s}$",
        "B": "$8\\hat{j}\\text{ m/s}$",
        "C": "$0\\text{ m/s}$",
        "D": "$10\\hat{i}\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="At maximum height, the vertical component of velocity $v_y$ vanishes, while the horizontal component $v_x$ remains unchanged.",
    given="$\\vec{u} = 6\\hat{i} + 8\\hat{j}\\text{ m/s}$, $\\vec{g} = -10\\hat{j}\\text{ m/s}^2$.",
    formula="\\vec{v}_{\\text{top}} = u_x\\hat{i} + 0\\hat{j}",
    steps="1. Horizontal component of velocity: $u_x = 6\\text{ m/s}$ (remains constant since $a_x = 0$).\n2. At maximum height, $v_y = 0$.\n3. Hence, the velocity vector is entirely horizontal: $\\vec{v} = 6\\hat{i}\\text{ m/s}$.",
    tip="At maximum height, the velocity is simply $u_x\\hat{i}$! Never answer zero unless projected straight up.",
    why_wrong="Option C is zero, which is only true for 1D vertical motion. Option D is the initial speed $\\sqrt{6^2+8^2} = 10\\text{ m/s}$."
))

# Q492 - Medium
qs.append(make_plane_q(
    num=492,
    question="For a projectile on level ground, the horizontal range $R$ and maximum height $H$ satisfy the relation $R = 4\\sqrt{3}H$. The angle of projection with the horizontal is:",
    options={
        "A": "$30^\\circ$",
        "B": "$60^\\circ$",
        "C": "$45^\\circ$",
        "D": "$15^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="The fundamental relation connecting horizontal range $R$ and maximum height $H$ is $R = 4H\\cot\\theta$ or $\\tan\\theta = \\frac{4H}{R}$.",
    given="$R = 4\\sqrt{3}H$.",
    formula="\\tan\\theta = \\frac{4H}{R}",
    steps="1. Using the standard relation $\\tan\\theta = \\frac{4H}{R}$:\n2. Substitute $R = 4\\sqrt{3}H$:\n   $$\\tan\\theta = \\frac{4H}{4\\sqrt{3}H} = \\frac{1}{\\sqrt{3}}$$\n3. Since $\\tan\\theta = 1/\\sqrt{3}$, we find $\\theta = 30^\\circ$.",
    tip="Memorize the golden formula: $\\tan\\theta = \\frac{4H}{R}$! If $R = H$, $\\tan\\theta = 4$. If $R = 4H$, $\\theta = 45^\\circ$. If $R = 4\\sqrt{3}H$, $\\theta = 30^\\circ$!",
    why_wrong="Option B gives $\\tan 60^\\circ = \\sqrt{3}$, which corresponds to $R = 4H/\\sqrt{3}$."
))

# Q493 - Medium
qs.append(make_plane_q(
    num=493,
    question="A small stone tied to the end of a string of length $r = 0.5\\text{ m}$ is whirled in a horizontal circle. If its centripetal acceleration is $98\\text{ m/s}^2$, what is its frequency of revolution?",
    options={
        "A": "$\\frac{7}{\\pi}\\text{ rev/s}$",
        "B": "$\\frac{14}{\\pi}\\text{ rev/s}$",
        "C": "$\\frac{7}{2\\pi}\\text{ rev/s}$",
        "D": "$14\\pi\\text{ rev/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Centripetal acceleration is related to angular frequency by $a_c = \\omega^2 r = (2\\pi f)^2 r$.",
    given="$r = 0.5\\text{ m}$, $a_c = 98\\text{ m/s}^2$.",
    formula="a_c = \\omega^2 r \\implies \\omega = \\sqrt{\\frac{a_c}{r}},\\quad f = \\frac{\\omega}{2\\pi}",
    steps="1. Calculate angular velocity:\n   $$\\omega^2 = \\frac{a_c}{r} = \\frac{98}{0.5} = 196\\text{ rad}^2/\\text{s}^2 \\implies \\omega = \\sqrt{196} = 14\\text{ rad/s}$$\n2. Find frequency $f$:\n   $$f = \\frac{\\omega}{2\\pi} = \\frac{14}{2\\pi} = \\frac{7}{\\pi}\\text{ rev/s}$$.\n3. The frequency is $\\frac{7}{\\pi}\\text{ rev/s}$.",
    tip="Recall that $\\sqrt{196} = 14$. Then dividing by $2\\pi$ yields $7/\\pi$!",
    why_wrong="Option B forgot to divide by 2 when converting from $\\omega$ to $f$."
))

# Q494 - Medium
qs.append(make_plane_q(
    num=494,
    question="A particle moves in the xy-plane along the parabolic path $y = \\frac{x^2}{2}$. The x-component of its velocity is constant at $v_x = 2\\text{ m/s}$. The acceleration of the particle is:",
    options={
        "A": "$4\\hat{j}\\text{ m/s}^2$",
        "B": "$2\\hat{j}\\text{ m/s}^2$",
        "C": "$4\\hat{i} + 2\\hat{j}\\text{ m/s}^2$",
        "D": "$8\\hat{j}\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Differentiating the trajectory equation with respect to time using the chain rule yields the relationship between velocity and acceleration components.",
    given="$y = \\frac{x^2}{2}$, $v_x = \\frac{dx}{dt} = 2\\text{ m/s}$ (constant, so $a_x = 0$).",
    formula="v_y = \\frac{dy}{dt} = x\\frac{dx}{dt},\\quad a_y = \\frac{dv_y}{dt}",
    steps="1. Differentiate $y = x^2/2$ with respect to time:\n   $$v_y = \\frac{dy}{dt} = \\frac{1}{2}(2x)\\frac{dx}{dt} = x v_x = 2x$$\n2. Differentiate $v_y$ with respect to time to get $a_y$:\n   $$a_y = \\frac{d}{dt}(2x) = 2\\frac{dx}{dt} = 2(2) = 4\\text{ m/s}^2$$\n3. Since $v_x$ is constant, $a_x = 0$.\n4. Therefore, total acceleration $\\vec{a} = a_x\\hat{i} + a_y\\hat{j} = 4\\hat{j}\\text{ m/s}^2$.",
    tip="Use the product/chain rule: $a_y = \\frac{d}{dt}(x v_x) = v_x^2 + x a_x = v_x^2 + 0 = 2^2 = 4\\text{ m/s}^2$!",
    why_wrong="Option B only took $\\frac{d}{dx}(x^2/2) = x$ without squaring $v_x$."
))

# Q495 - Medium
qs.append(make_plane_q(
    num=495,
    question="A projectile has a maximum height $H = 20\\text{ m}$ and horizontal range $R = 80\\text{ m}$. Taking $g = 10\\text{ m/s}^2$, what is its initial speed of projection?",
    options={
        "A": "$20\\sqrt{2}\\text{ m/s}$",
        "B": "$20\\text{ m/s}$",
        "C": "$40\\text{ m/s}$",
        "D": "$10\\sqrt{5}\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Maximum height gives the vertical velocity component $u_y$, while range relates $u_x$ and $u_y$. The initial speed is $u = \\sqrt{u_x^2 + u_y^2}$.",
    given="$H = 20\\text{ m}$, $R = 80\\text{ m}$, $g = 10\\text{ m/s}^2$.",
    formula="H = \\frac{u_y^2}{2g},\\quad R = \\frac{2 u_x u_y}{g}",
    steps="1. From maximum height:\n   $$20 = \\frac{u_y^2}{2(10)} \\implies u_y^2 = 400 \\implies u_y = 20\\text{ m/s}$$\n2. From horizontal range:\n   $$80 = \\frac{2 u_x (20)}{10} = 4 u_x \\implies u_x = \\frac{80}{4} = 20\\text{ m/s}$$\n3. Calculate initial speed:\n   $$u = \\sqrt{u_x^2 + u_y^2} = \\sqrt{20^2 + 20^2} = 20\\sqrt{2}\\text{ m/s}$$.",
    tip="Notice $R = 4H$ ($80 = 4 \\times 20$), which immediately tells us that $\\theta = 45^\\circ$ and $u_x = u_y$!",
    why_wrong="Option B is only the individual component $u_x$ or $u_y$, not the resultant speed."
))

# Q496 - Medium
qs.append(make_plane_q(
    num=496,
    question="An aeroplane is flying horizontally at a speed of $100\\text{ m/s}$ at an altitude of $490\\text{ m}$ above the ground. A relief packet is released from it. Taking $g = 9.8\\text{ m/s}^2$ and neglecting air resistance, the horizontal distance traveled by the packet before striking the ground is:",
    options={
        "A": "$1000\\text{ m}$",
        "B": "$490\\text{ m}$",
        "C": "$1414\\text{ m}$",
        "D": "$500\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="A body released from an aeroplane possesses the plane's horizontal velocity. The time of fall depends purely on the altitude and gravity.",
    given="$u = 100\\text{ m/s}$, $h = 490\\text{ m}$, $g = 9.8\\text{ m/s}^2$.",
    formula="t = \\sqrt{\\frac{2h}{g}},\\quad x = u t",
    steps="1. Time to fall through vertical height $h$:\n   $$t = \\sqrt{\\frac{2(490)}{9.8}} = \\sqrt{\\frac{980}{9.8}} = \\sqrt{100} = 10\\text{ s}$$\n2. Horizontal distance covered:\n   $$x = u_x t = 100\\text{ m/s} \\times 10\\text{ s} = 1000\\text{ m} = 1\\text{ km}$$.",
    tip="Time of flight from height $h$ with zero initial vertical velocity is always $t = \\sqrt{2h/g}$!",
    why_wrong="Option B is the vertical height $490\\text{ m}$, not the horizontal displacement."
))

# Q497 - Medium
qs.append(make_plane_q(
    num=497,
    question="A river of width $400\\text{ m}$ flows at a constant speed of $3\\text{ m/s}$. A swimmer can swim at $5\\text{ m/s}$ in still water. If the swimmer crosses the river in the shortest possible time, what is the downstream drift upon reaching the opposite bank?",
    options={
        "A": "$240\\text{ m}$",
        "B": "$0\\text{ m}$",
        "C": "$300\\text{ m}$",
        "D": "$400\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="For the shortest crossing time, the swimmer must point their velocity perpendicular to the river banks. During this crossing time, the river current carries the swimmer downstream.",
    given="River width $d = 400\\text{ m}$, river speed $v_r = 3\\text{ m/s}$, swimmer speed $v_s = 5\\text{ m/s}$.",
    formula="t_{\\min} = \\frac{d}{v_s},\\quad \\text{Drift } x = v_r t_{\\min}",
    steps="1. Shortest time occurs when swimmer heads directly across ($\\theta = 90^\\circ$ to flow):\n   $$t_{\\min} = \\frac{d}{v_s} = \\frac{400\\text{ m}}{5\\text{ m/s}} = 80\\text{ s}$$\n2. Downstream drift during this time:\n   $$x = v_r \\times t_{\\min} = 3\\text{ m/s} \\times 80\\text{ s} = 240\\text{ m}$$.",
    tip="Shortest time $\\implies$ point straight across. Shortest path $\\implies$ drift is zero (by swimming upstream at angle $\\sin\\theta = v_r/v_s$)!",
    why_wrong="Option B is the drift for the shortest PATH, which requires a longer crossing time."
))

# Q498 - Hard
qs.append(make_plane_q(
    num=498,
    question="A projectile is launched from ground with speed $u = 20\\text{ m/s}$ at an angle $\\theta = 60^\\circ$ above the horizontal. Taking $g = 10\\text{ m/s}^2$, what is the radius of curvature of its path at the instant of launch?",
    options={
        "A": "$80\\text{ m}$",
        "B": "$40\\text{ m}$",
        "C": "$20\\text{ m}$",
        "D": "$40\\sqrt{3}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="The radius of curvature of any curved path is $\\rho = \\frac{v^2}{a_\\perp}$, where $a_\\perp$ is the component of acceleration normal (perpendicular) to the instantaneous velocity vector.",
    given="$u = 20\\text{ m/s}$, $\\theta = 60^\\circ$, $g = 10\\text{ m/s}^2$.",
    formula="\\rho = \\frac{u^2}{g\\cos\\theta}",
    steps="1. At the moment of projection, velocity vector makes an angle $\\theta = 60^\\circ$ with the horizontal.\n2. Acceleration due to gravity acts vertically downwards.\n3. The component of acceleration perpendicular to velocity is:\n   $$a_\\perp = g\\cos\\theta = 10\\cos 60^\\circ = 10(0.5) = 5\\text{ m/s}^2$$\n4. The radius of curvature at launch:\n   $$\\rho = \\frac{u^2}{a_\\perp} = \\frac{20^2}{5} = \\frac{400}{5} = 80\\text{ m}$$.",
    tip="At launch: $\\rho = \\frac{u^2}{g\\cos\\theta}$. At apex: $\\rho = \\frac{(u\\cos\\theta)^2}{g}$. Note that at apex, velocity is perpendicular to gravity, so $a_\\perp = g$!",
    why_wrong="Option B forgets that $a_\\perp = g\\cos 60^\\circ = 5\\text{ m/s}^2$, mistakenly dividing $400$ by $10$."
))

# Q499 - Hard
qs.append(make_plane_q(
    num=499,
    question="Two particles are projected simultaneously from the same point on level ground with equal speed $u = 20\\text{ m/s}$ at angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 60^\\circ$ with the horizontal. What is the distance between them at $t = 1\\text{ s}$? (Take $\\sqrt{3} \\approx 1.732$, $\\sqrt{2} \\approx 1.414$)",
    options={
        "A": "$10.35\\text{ m}$",
        "B": "$14.14\\text{ m}$",
        "C": "$20.00\\text{ m}$",
        "D": "$7.32\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="Because both projectiles experience the identical gravitational acceleration $\\vec{g}$, their relative acceleration is zero: $\\vec{a}_{\\text{rel}} = \\vec{g} - \\vec{g} = 0$. Hence, their relative motion is at a constant relative velocity $\\vec{v}_{\\text{rel}}$.",
    given="$u = 20\\text{ m/s}$, $\\theta_1 = 30^\\circ$, $\\theta_2 = 60^\\circ$, $t = 1\\text{ s}$.",
    formula="\\vec{v}_{\\text{rel}} = \\vec{u}_2 - \\vec{u}_1,\\quad d = |\\vec{v}_{\\text{rel}}| t",
    steps="1. Velocity of particle 1:\n   $$\\vec{u}_1 = 20\\cos 30^\\circ\\hat{i} + 20\\sin 30^\\circ\\hat{j} = 10\\sqrt{3}\\hat{i} + 10\\hat{j}$$\n2. Velocity of particle 2:\n   $$\\vec{u}_2 = 20\\cos 60^\\circ\\hat{i} + 20\\sin 60^\\circ\\hat{j} = 10\\hat{i} + 10\\sqrt{3}\\hat{j}$$\n3. Relative velocity:\n   $$\\vec{v}_{\\text{rel}} = \\vec{u}_2 - \\vec{u}_1 = (10 - 10\\sqrt{3})\\hat{i} + (10\\sqrt{3} - 10)\\hat{j}$$\n4. Magnitude of relative velocity:\n   $$v_{\\text{rel}} = \\sqrt{(10 - 10\\sqrt{3})^2 + (10\\sqrt{3} - 10)^2} = \\sqrt{2}(10\\sqrt{3} - 10) = 10\\sqrt{2}(\\sqrt{3} - 1)$$\n5. Substitute values:\n   $$v_{\\text{rel}} = 10(1.414)(1.732 - 1) = 14.14 \\times 0.732 \\approx 10.35\\text{ m/s}$$\n6. Distance at $t = 1\\text{ s}$ is $d = 10.35\\text{ m/s} \\times 1\\text{ s} = 10.35\\text{ m}$.",
    tip="Since $\\vec{a}_{\\text{rel}} = 0$, the relative separation grows linearly with time: $d(t) = v_{\\text{rel}} t$!",
    why_wrong="Option B calculates $10\\sqrt{2} \\approx 14.14\\text{ m}$, missing the factor of $(\\sqrt{3}-1)$."
))

# Q500 - Hard
qs.append(make_plane_q(
    num=500,
    question="A particle starts from rest and moves in a circle of radius $R = 2\\text{ m}$ with a constant tangential acceleration $a_t = 3\\text{ m/s}^2$. What is the magnitude of its total acceleration after completing one full revolution?",
    options={
        "A": "$\\sqrt{9 + 144\\pi^2}\\text{ m/s}^2$",
        "B": "$12\\pi\\text{ m/s}^2$",
        "C": "$3\\text{ m/s}^2$",
        "D": "$\\sqrt{9 + 72\\pi^2}\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="In non-uniform circular motion, the total acceleration is the vector sum of two mutually perpendicular components: tangential acceleration $a_t$ and centripetal (radial) acceleration $a_c = v^2/R$.",
    given="$R = 2\\text{ m}$, $a_t = 3\\text{ m/s}^2$, $u = 0$, distance $s = 2\\pi R = 4\\pi\\text{ m}$.",
    formula="v^2 = 2 a_t s,\\quad a_c = \\frac{v^2}{R},\\quad a = \\sqrt{a_t^2 + a_c^2}",
    steps="1. Using third equation of motion along the circular arc:\n   $$v^2 = u^2 + 2 a_t s = 0 + 2(3)(4\\pi) = 24\\pi\\text{ m}^2/\\text{s}^2$$\n2. Centripetal acceleration:\n   $$a_c = \\frac{v^2}{R} = \\frac{24\\pi}{2} = 12\\pi\\text{ m/s}^2$$\n3. Since tangential and centripetal accelerations are perpendicular ($a_t \\perp a_c$):\n   $$a = \\sqrt{a_t^2 + a_c^2} = \\sqrt{3^2 + (12\\pi)^2} = \\sqrt{9 + 144\\pi^2}\\text{ m/s}^2$$.\n4. This yields approximately $37.8\\text{ m/s}^2$.",
    tip="Always remember that $a_t$ and $a_c$ are perpendicular! Total acceleration is $\\sqrt{a_t^2 + a_c^2}$, NOT their arithmetic sum!",
    why_wrong="Option B is only the centripetal acceleration $a_c = 12\\pi$. Option C is only the tangential acceleration $a_t = 3$."
))

# Save topics 28, 29
with open('scripts/mip_topics28_29.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topics 28, 29 generated successfully:", len(qs))
