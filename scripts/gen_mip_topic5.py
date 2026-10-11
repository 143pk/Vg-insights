import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 5: Triangle law and parallelogram law of vector addition (Q072 to Q089, 18 questions)
# Difficulties: 4 Easy, 9 Medium, 5 Hard
# ==============================================================================

# Q072 - Easy
qs.append(make_plane_q(
    num=72,
    question="According to the triangle law of vector addition, if two vectors are represented in magnitude and direction by two consecutive sides of a triangle taken in the same order, then their resultant is represented by:",
    options={
        "A": "The third side of the triangle taken in the reverse order",
        "B": "The third side of the triangle taken in the same order",
        "C": "The diagonal passing through the common origin",
        "D": "The altitude of the triangle"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Triangle law and parallelogram law of vector addition",
    concept="The triangle law states that if two vectors $\\vec{A}$ and $\\vec{B}$ are represented by two sides of a triangle taken in order (head of $\\vec{A}$ connected to tail of $\\vec{B}$), their resultant $\\vec{R} = \\vec{A} + \\vec{B}$ is represented by the third closing side taken in reverse order (from tail of $\\vec{A}$ to head of $\\vec{B}$).",
    given="Two vectors forming two consecutive sides of a triangle in the same order.",
    formula="$\\vec{AB} + \\vec{BC} = \\vec{AC}$",
    steps=(
        "1. Let vector $\\vec{A}$ be represented by directed segment $\\vec{OP}$.\n"
        "2. Let vector $\\vec{B}$ be represented by directed segment $\\vec{PQ}$ (tail at $P$, head at $Q$, i.e. in the same order).\n"
        "3. The net displacement from initial point $O$ to final point $Q$ is represented by the line segment $\\vec{OQ}$.\n"
        "4. This is the third side of the triangle taken from initial point to final point (in the reverse order of traversing the perimeter).\n"
        "5. Hence, option A is correct."
    ),
    tip="If taken in the SAME order around the perimeter ($\\vec{AB} + \\vec{BC} + \\vec{CA}$), the sum is zero ($\vec{0}$)!",
    why_wrong="Option B describes a closed cycle whose sum would be zero, not the resultant."
))

# Q073 - Easy
qs.append(make_plane_q(
    num=73,
    question="In the parallelogram law of vector addition, the resultant of two vectors acting from a common point is represented by:",
    options={
        "A": "The diagonal of the parallelogram passing through the common point",
        "B": "The other diagonal not passing through the common point",
        "C": "The sum of the lengths of the adjacent sides",
        "D": "The perimeter of the parallelogram"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Triangle law and parallelogram law of vector addition",
    concept="If two vectors acting simultaneously at a point are represented in magnitude and direction by the two adjacent sides of a parallelogram drawn from that point, their resultant is represented in magnitude and direction by the diagonal passing through that common point (co-initial point).",
    given="Two co-initial vectors $\\vec{A}$ and $\\vec{B}$ forming adjacent sides of a parallelogram.",
    formula="$\\vec{R} = \\vec{A} + \\vec{B}$ (main diagonal from common origin); $\\vec{D} = \\vec{A} - \\vec{B}$ (connecting diagonal).",
    steps=(
        "1. Let two vectors $\\vec{A}$ and $\\vec{B}$ start from a common point $O$.\n"
        "2. Complete the parallelogram $OACB$ with adjacent sides $OA = \\vec{A}$ and $OB = \\vec{B}$.\n"
        "3. By vector addition: $\\vec{OC} = \\vec{OA} + \\vec{AC} = \\vec{OA} + \\vec{OB} = \\vec{A} + \\vec{B}$.\n"
        "4. Therefore, the diagonal $OC$ passing through the common point $O$ represents the resultant vector sum $\\vec{R}$."
    ),
    tip="Main diagonal through origin = SUM ($\vec{A} + \vec{B}$); other diagonal connecting the heads = DIFFERENCE ($\vec{A} - \vec{B}$).",
    why_wrong="Option B represents vector difference $\\vec{A} - \\vec{B}$, not the resultant sum."
))

# Q074 - Easy
qs.append(make_plane_q(
    num=74,
    question="The angle $\\alpha$ that the resultant $\\vec{R}$ makes with the vector $\\vec{A}$ in the parallelogram law is given by:",
    options={
        "A": "tan α = (B sin θ) / (A + B cos θ)",
        "B": "tan α = (A sin θ) / (B + A cos θ)",
        "C": "tan α = (B cos θ) / (A + B sin θ)",
        "D": "tan α = (A cos θ) / (B + A sin θ)"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Triangle law and parallelogram law of vector addition",
    concept="By resolving $\\vec{B}$ into components perpendicular ($B\\sin\\theta$) and parallel ($B\\cos\\theta$) to $\\vec{A}$, the right triangle formed with the resultant gives $\\tan\\alpha = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$.",
    given="Vectors $\\vec{A}$ and $\\vec{B}$ at angle $\\theta$, angle of resultant with $\\vec{A}$ is $\\alpha$.",
    formula="$\\tan\\alpha = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$",
    steps=(
        "1. Draw $\\vec{A}$ along the baseline.\n"
        "2. The vector $\\vec{B}$ is inclined at angle $\\theta$ to the baseline.\n"
        "3. The horizontal projection of $\\vec{B}$ is $B\\cos\\theta$, so the total base is $A + B\\cos\\theta$.\n"
        "4. The vertical projection of $\\vec{B}$ is $B\\sin\\theta$, which forms the opposite side.\n"
        "5. In the large right triangle: $\\tan\\alpha = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$."
    ),
    tip="Memory hook: The vector with which the angle is measured ($\vec{A}$) sits alone in the denominator without any trigonometric function!",
    why_wrong="Option B gives the angle with respect to $\\vec{B}$, not $\\vec{A}$."
))

# Q075 - Easy
qs.append(make_plane_q(
    num=75,
    question="If two forces of equal magnitude F act on a particle, at what angle $\\theta$ between them will their resultant also have magnitude F?",
    options={
        "A": "120°",
        "B": "60°",
        "C": "90°",
        "D": "180°"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Triangle law and parallelogram law of vector addition",
    concept="For two equal vectors, $R = 2F\\cos(\\theta/2)$. Setting $R = F$ gives $2F\\cos(\\theta/2) = F \\implies \\cos(\\theta/2) = 1/2 \\implies \\theta/2 = 60^\\circ \\implies \\theta = 120^\\circ$.",
    given="$A = B = F$, $R = F$.",
    formula="$R = 2F\\cos(\\theta/2) = F \\implies \\cos(\\theta/2) = 1/2$",
    steps=(
        "1. Write the resultant formula: $R^2 = F^2 + F^2 + 2F^2\\cos\\theta$.\n"
        "2. Given $R = F$: $F^2 = 2F^2 + 2F^2\\cos\\theta$.\n"
        "3. Divide both sides by $F^2$: $1 = 2 + 2\\cos\\theta$.\n"
        "4. $2\\cos\\theta = 1 - 2 = -1 \\implies \\cos\\theta = -1/2$.\n"
        "5. The angle whose cosine is $-1/2$ is $\\theta = 180^\\circ - 60^\\circ = 120^\\circ$."
    ),
    tip="Most iconic NEET vector question: If $|\vec{A}| = |\vec{B}| = |\vec{A} + \vec{B}|$, angle is ALWAYS $120^\\circ$!",
    why_wrong="60° gives $R = F\\sqrt{3} \\approx 1.732 F$."
))

# Q076 - Medium
qs.append(make_plane_q(
    num=76,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes 8 N and 6 N respectively. What is the angle between them if their resultant has magnitude 10 N?",
    options={
        "A": "90°",
        "B": "60°",
        "C": "45°",
        "D": "120°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="Check Pythagoras relation: $8^2 + 6^2 = 64 + 36 = 100 = 10^2$. This means the vectors are perpendicular ($\\theta = 90^\\circ$).",
    given="$A = 8\\text{ N}$, $B = 6\\text{ N}$, $R = 10\\text{ N}$.",
    formula="$R^2 = A^2 + B^2 + 2AB\\cos\\theta \\implies 100 = 64 + 36 + 2(8)(6)\\cos\\theta$",
    steps=(
        "1. Substitute into the parallelogram law formula:\n"
        "   $10^2 = 8^2 + 6^2 + 2(8)(6)\\cos\\theta$.\n"
        "2. $100 = 64 + 36 + 96\\cos\\theta$.\n"
        "3. $100 = 100 + 96\\cos\\theta$.\n"
        "4. $96\\cos\\theta = 0 \\implies \\cos\\theta = 0$.\n"
        "5. Therefore, $\\theta = 90^\\circ$."
    ),
    tip="Whenever $A^2 + B^2 = R^2$, the vectors are strictly orthogonal ($\\theta = 90^\\circ$).",
    why_wrong="Angles other than 90° would produce resultants strictly different from 10 N."
))

# Q077 - Medium
qs.append(make_plane_q(
    num=77,
    question="The resultant of two forces $P$ and $Q$ is equal to $\\sqrt{P^2 + Q^2}$. What is the angle between the two forces?",
    options={
        "A": "π / 2 (90°)",
        "B": "π (180°)",
        "C": "0",
        "D": "π / 3 (60°)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="$R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta} = \\sqrt{P^2 + Q^2} \\implies 2PQ\\cos\\theta = 0 \\implies \\cos\\theta = 0 \\implies \\theta = \\pi/2$.",
    given="$R = \\sqrt{P^2 + Q^2}$.",
    formula="$R^2 = P^2 + Q^2 + 2PQ\\cos\\theta = P^2 + Q^2$",
    steps=(
        "1. Equate the given resultant squared to the general formula:\n"
        "   $P^2 + Q^2 = P^2 + Q^2 + 2PQ\\cos\\theta$.\n"
        "2. Subtract $P^2 + Q^2$ from both sides: $2PQ\\cos\\theta = 0$.\n"
        "3. For non-zero forces $P, Q > 0$, this requires $\\cos\\theta = 0$.\n"
        "4. Hence, $\\theta = \\pi/2 = 90^\\circ$."
    ),
    tip="Pythagorean resultant $\\iff$ right-angled forces.",
    why_wrong="π gives resultant $|P - Q|$."
))

# Q078 - Medium
qs.append(make_plane_q(
    num=78,
    question="Two forces of magnitudes $P$ and $2P$ act on a body. If the first force is doubled and the second is increased by 20 N, the direction of their resultant remains unchanged. What is the value of P?",
    options={
        "A": "10 N",
        "B": "20 N",
        "C": "5 N",
        "D": "40 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="For the direction $\\alpha$ of the resultant to remain unchanged when the individual forces are scaled, the ratio of the two forces must remain constant: $\\frac{F_2'}{F_1'} = \\frac{F_2}{F_1}$.",
    given="Initial forces: $F_1 = P, F_2 = 2P$. New forces: $F_1' = 2P, F_2' = 2P + 20$. Resultant direction $\\alpha$ is unchanged.",
    formula="$\\tan\\alpha = \\frac{F_2\\sin\\theta}{F_1 + F_2\\cos\\theta} = \\frac{F_2'\\sin\\theta}{F_1' + F_2'\\cos\\theta} \\implies \\frac{F_2'}{F_1'} = \\frac{F_2}{F_1}$",
    steps=(
        "1. The angle of the resultant depends only on the ratio of the components along and perpendicular to $F_1$.\n"
        "2. For the direction to remain unchanged for any arbitrary angle $\\theta$, both forces must be multiplied by the same scaling factor $k$.\n"
        "3. Since $F_1$ is doubled from $P$ to $2P$, the scaling factor is $k = 2$.\n"
        "4. Therefore, the second force must also be doubled: $F_2' = 2 F_2 = 2(2P) = 4P$.\n"
        "5. We are given $F_2' = 2P + 20\\text{ N}$.\n"
        "6. Equating: $4P = 2P + 20 \\implies 2P = 20 \\implies P = 10\\text{ N}$."
    ),
    tip="Geometric similarity: If a vector triangle scales up without changing shape (angles unchanged), all sides scale by the same factor!",
    why_wrong="20 N gives $F_1$ doubled to 40 N while $F_2$ increases from 40 to 60 (scaling factor 1.5, not 2)."
))

# Q079 - Medium
qs.append(make_plane_q(
    num=79,
    question="Two forces acting in opposite directions have a resultant of 10 N. If they act at right angles to each other, their resultant is 50 N. What are the magnitudes of the two forces?",
    options={
        "A": "40 N and 30 N",
        "B": "35 N and 25 N",
        "C": "45 N and 35 N",
        "D": "50 N and 10 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="In opposite directions ($\\theta = 180^\\circ$): $A - B = 10$. At right angles ($\\theta = 90^\\circ$): $A^2 + B^2 = 50^2 = 2500$.",
    given="$A - B = 10$, $A^2 + B^2 = 2500$.",
    formula="$(A + B)^2 = 2(A^2 + B^2) - (A - B)^2$",
    steps=(
        "1. Write the identity: $(A + B)^2 + (A - B)^2 = 2(A^2 + B^2)$.\n"
        "2. Substitute known values: $(A + B)^2 + 10^2 = 2(2500) = 5000$.\n"
        "3. $(A + B)^2 + 100 = 5000 \\implies (A + B)^2 = 4900$.\n"
        "4. Take square root: $A + B = \\sqrt{4900} = 70$.\n"
        "5. Solve the linear system:\n"
        "   $A + B = 70$\n"
        "   $A - B = 10$\n"
        "   Adding gives $2A = 80 \\implies A = 40\\text{ N}$.\n"
        "   Subtracting gives $2B = 60 \\implies B = 30\\text{ N}$."
    ),
    tip="Recognize Pythagorean triple 30-40-50! $40 - 30 = 10\\text{ N}$ and $\\sqrt{40^2 + 30^2} = 50\\text{ N}$. Done in 3 seconds!",
    why_wrong="35 N and 25 N gives difference 10, but $\\sqrt{35^2 + 25^2} = \\sqrt{1225 + 625} = \\sqrt{1850} \\approx 43\\text{ N} \\neq 50\\text{ N}$."
))

# Q080 - Medium
qs.append(make_plane_q(
    num=80,
    question="The resultant of two vectors $\\vec{A}$ and $\\vec{B}$ is perpendicular to $\\vec{A}$. What is the angle $\\theta$ between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "cos⁻¹(-A / B)",
        "B": "sin⁻¹(-A / B)",
        "C": "cos⁻¹(-B / A)",
        "D": "tan⁻¹(-A / B)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="From the direction formula $\\tan\\alpha = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$, if $\\alpha = 90^\\circ$, then $\\tan 90^\\circ \\to \\infty \\implies A + B\\cos\\theta = 0 \\implies \\cos\\theta = -A/B$.",
    given="$\\vec{R} \\perp \\vec{A} \\implies \\alpha = 90^\\circ$.",
    formula="$\\tan\\alpha = \\infty \\implies A + B\\cos\\theta = 0 \\implies \\cos\\theta = -\\frac{A}{B}$",
    steps=(
        "1. Write the direction formula of resultant with vector $\\vec{A}$:\n"
        "   $\\tan\\alpha = \\frac{B\\sin\\theta}{A + B\\cos\\theta}$.\n"
        "2. For $\\vec{R}$ to be perpendicular to $\\vec{A}$, $\\alpha = 90^\\circ$.\n"
        "3. Since $\\tan 90^\\circ$ is undefined (approaches infinity), the denominator must be zero:\n"
        "   $A + B\\cos\\theta = 0$.\n"
        "4. Solving for $\\cos\\theta$:\n"
        "   $\\cos\\theta = -\\frac{A}{B}$.\n"
        "5. Therefore, $\\theta = \\cos^{-1}(-A/B)$."
    ),
    tip="For $\\vec{R} \\perp \\vec{A}$ to be physically possible, the magnitude $A$ must be less than $B$ ($A < B$) so that $|{-A/B}| \\le 1$.",
    why_wrong="Option C inverts the ratio, which would mean $\\vec{R} \\perp \\vec{B}$."
))

# Q081 - Medium
qs.append(make_plane_q(
    num=81,
    question="In the previous question, what is the magnitude of the resultant $\\vec{R}$ in terms of $A$ and $B$?",
    options={
        "A": "√(B² - A²)",
        "B": "√(A² + B²)",
        "C": "√(A² - B²)",
        "D": "B - A"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="When $\\vec{R} \\perp \\vec{A}$, the vectors $\\vec{A}$, $\\vec{R}$, and $\\vec{B}$ form a right-angled triangle with $\\vec{B}$ as the hypotenuse: $B^2 = A^2 + R^2 \\implies R = \\sqrt{B^2 - A^2}$.",
    given="$\\vec{A} + \\vec{R}_{\\perp} = \\vec{B}$ (vector triangle), $\\cos\\theta = -A/B$.",
    formula="$R^2 = A^2 + B^2 + 2AB\\cos\\theta = A^2 + B^2 + 2AB(-A/B) = B^2 - A^2$",
    steps=(
        "1. Substitute $\\cos\\theta = -A/B$ into the resultant magnitude formula:\n"
        "   $R^2 = A^2 + B^2 + 2AB\\cos\\theta$.\n"
        "2. $R^2 = A^2 + B^2 + 2AB\\left(-\\frac{A}{B}\\right) = A^2 + B^2 - 2A^2 = B^2 - A^2$.\n"
        "3. Take square root: $R = \\sqrt{B^2 - A^2}$.\n"
        "4. Geometrically, in the right triangle, $\\vec{A}$ and $\\vec{R}$ are the legs and $\\vec{B}$ is the hypotenuse."
    ),
    tip="Right triangle visual check: Legs are $A$ and $R$, hypotenuse is $B \\implies R = \\sqrt{B^2 - A^2}$.",
    why_wrong="Option B is for perpendicular vectors ($A \\perp B$), not for resultant perpendicular to $A$."
))

# Q082 - Hard
qs.append(make_plane_q(
    num=82,
    question="The resultant of two forces $\\vec{P}$ and $\\vec{Q}$ acting at an angle $\\theta$ is $\\vec{R}$. If the force $\\vec{Q}$ is reversed in direction, the resultant becomes $\\vec{S}$. If $R^2 + S^2 = 2(P^2 + Q^2)$, what is the angle between $\\vec{P}$ and $\\vec{Q}$?",
    options={
        "A": "Any angle θ (the equation is an identity valid for all angles)",
        "B": "90° only",
        "C": "0° only",
        "D": "60° only"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Triangle law and parallelogram law of vector addition",
    concept="The relation $R^2 + S^2 = 2(P^2 + Q^2)$ is the fundamental parallelogram law identity and holds universally for ANY angle $\\theta$ between the vectors.",
    given="$\\vec{R} = \\vec{P} + \\vec{Q}$, $\\vec{S} = \\vec{P} - \\vec{Q}$.",
    formula="$R^2 + S^2 = (P^2 + Q^2 + 2PQ\\cos\\theta) + (P^2 + Q^2 - 2PQ\\cos\\theta) = 2(P^2 + Q^2)$",
    steps=(
        "1. Write expressions for $R^2$ and $S^2$:\n"
        "   $R^2 = P^2 + Q^2 + 2PQ\\cos\\theta$\n"
        "   $S^2 = P^2 + Q^2 - 2PQ\\cos\\theta$\n"
        "2. Add the two expressions:\n"
        "   $R^2 + S^2 = 2P^2 + 2Q^2 = 2(P^2 + Q^2)$.\n"
        "3. The term involving $\\cos\\theta$ cancels out entirely, regardless of the value of $\\theta$.\n"
        "4. Therefore, this equation holds for ANY angle $\\theta$ between the vectors."
    ),
    tip="Don't get tricked into setting $\\cos\\theta = 0$! Because $\\cos\\theta$ cancels out identically, the identity is unconditionally true for all $\\theta$.",
    why_wrong="Options B, C, and D mistakenly think the condition requires a specific angle."
))

# Q083 - Hard
qs.append(make_plane_q(
    num=83,
    question="The resultant of two vectors $\\vec{A}$ and $\\vec{B}$ is perpendicular to $\\vec{A}$ and has magnitude $\\frac{B}{\\sqrt{3}}$. What is the ratio $A : B$?",
    options={
        "A": "√(2/3)",
        "B": "1 / √3",
        "C": "1 / 2",
        "D": "√2 / 3"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Triangle law and parallelogram law of vector addition",
    concept="When $\\vec{R} \\perp \\vec{A}$, $R^2 = B^2 - A^2$. Substitute $R = B/\\sqrt{3}$ to find $A/B$.",
    given="$\\vec{R} \\perp \\vec{A}$, $R = B/\\sqrt{3}$.",
    formula="$R^2 = B^2 - A^2 \\implies \\frac{B^2}{3} = B^2 - A^2$",
    steps=(
        "1. In the right-angled triangle formed by $\\vec{A}$, $\\vec{R}$, and hypotenuse $\\vec{B}$:\n"
        "   $A^2 + R^2 = B^2$.\n"
        "2. Substitute $R = B/\\sqrt{3}$:\n"
        "   $A^2 + \\left(\\frac{B}{\\sqrt{3}}\\right)^2 = B^2$.\n"
        "3. $A^2 + \\frac{B^2}{3} = B^2 \\implies A^2 = B^2 - \\frac{B^2}{3} = \\frac{2B^2}{3}$.\n"
        "4. Divide by $B^2$: $\\frac{A^2}{B^2} = \\frac{2}{3}$.\n"
        "5. Taking square root: $\\frac{A}{B} = \\sqrt{\\frac{2}{3}}$."
    ),
    tip="Pythagoras makes vector resultant problems simple: $\\text{Leg}^2 + \\text{Leg}^2 = \\text{Hypotenuse}^2$.",
    why_wrong="1/√3 is the ratio $R / B$, not $A / B$."
))

# Q084 - Hard
qs.append(make_plane_q(
    num=84,
    question="Two forces $\\vec{F}_1$ and $\\vec{F}_2$ act at a point such that their resultant is $\\vec{R}$. If $\\vec{F}_2$ is doubled, the new resultant becomes perpendicular to $\\vec{F}_1$. If $\\vec{F}_1$ is doubled instead, the new resultant becomes perpendicular to $\\vec{F}_2$. What is the ratio of their magnitudes $F_1 : F_2$?",
    options={
        "A": "1 : 1",
        "B": "1 : 2",
        "C": "2 : 1",
        "D": "1 : √2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Triangle law and parallelogram law of vector addition",
    concept="By symmetry, if doubling either force makes the resultant perpendicular to the other, the two forces must be equal in magnitude.",
    given="Condition 1: Doubling $F_2$ makes resultant $\\perp F_1 \\implies F_1 + 2F_2\\cos\\theta = 0$.\nCondition 2: Doubling $F_1$ makes resultant $\\perp F_2 \\implies F_2 + 2F_1\\cos\\theta = 0$.",
    formula="$\\cos\\theta = -\\frac{F_1}{2F_2} = -\\frac{F_2}{2F_1} \\implies F_1^2 = F_2^2$",
    steps=(
        "1. Condition 1: When $F_2$ is doubled to $2F_2$, the resultant is perpendicular to $F_1$:\n"
        "   $\\tan 90^\\circ = \\infty \\implies F_1 + 2F_2\\cos\\theta = 0 \\implies \\cos\\theta = -\\frac{F_1}{2F_2}$.\n"
        "2. Condition 2: When $F_1$ is doubled to $2F_1$, the resultant is perpendicular to $F_2$:\n"
        "   $F_2 + 2F_1\\cos\\theta = 0 \\implies \\cos\\theta = -\\frac{F_2}{2F_1}$.\n"
        "3. Equating both expressions for $\\cos\\theta$:\n"
        "   $-\\frac{F_1}{2F_2} = -\\frac{F_2}{2F_1} \\implies \\frac{F_1}{F_2} = \\frac{F_2}{F_1}$.\n"
        "4. Cross-multiplying: $F_1^2 = F_2^2 \\implies F_1 = F_2$.\n"
        "5. Therefore, the ratio $F_1 : F_2 = 1 : 1$."
    ),
    tip="Also notice $\\cos\\theta = -1/2 \\implies \\theta = 120^\\circ$!",
    why_wrong="Options B and C violate the mutual symmetry of the conditions."
))

# Q085 - Hard
qs.append(make_plane_q(
    num=85,
    question="A particle is in equilibrium under three concurrent coplanar forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. If $F_1 = 10\\text{ N}$ and the angles opposite to $F_1, F_2, F_3$ are 150°, 120°, and 90° respectively (Lami's Theorem), what are the magnitudes of $F_2$ and $F_3$?",
    options={
        "A": "F₂ = 10√3 N, F₃ = 20 N",
        "B": "F₂ = 20 N, F₃ = 10√3 N",
        "C": "F₂ = 10 N, F₃ = 10 N",
        "D": "F₂ = 5√3 N, F₃ = 10 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Triangle law and parallelogram law of vector addition",
    concept="Lami's Theorem states that for three forces in equilibrium: $\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$, where $\\alpha, \\beta, \\gamma$ are the angles opposite to $F_1, F_2, F_3$ respectively.",
    given="$F_1 = 10\\text{ N}$, $\\alpha = 150^\\circ$, $\\beta = 120^\\circ$, $\\gamma = 90^\\circ$. Note: $150 + 120 + 90 = 360^\\circ$.",
    formula="$\\frac{F_1}{\\sin 150^\\circ} = \\frac{F_2}{\\sin 120^\\circ} = \\frac{F_3}{\\sin 90^\\circ}$",
    steps=(
        "1. Compute the sine values:\n"
        "   $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = 1/2 = 0.5$.\n"
        "   $\\sin 120^\\circ = \\sin(180^\\circ - 60^\\circ) = \\sin 60^\\circ = \\sqrt{3}/2$.\n"
        "   $\\sin 90^\\circ = 1$.\n"
        "2. Find the constant ratio from $F_1$:\n"
        "   $\\frac{F_1}{\\sin 150^\\circ} = \\frac{10}{1/2} = 20$.\n"
        "3. Calculate $F_2$:\n"
        "   $\\frac{F_2}{\\sin 120^\\circ} = 20 \\implies F_2 = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ N}$.\n"
        "4. Calculate $F_3$:\n"
        "   $\\frac{F_3}{\\sin 90^\\circ} = 20 \\implies F_3 = 20 \\times 1 = 20\\text{ N}$.\n"
        "5. Thus, $F_2 = 10\\sqrt{3}\\text{ N}$ and $F_3 = 20\\text{ N}$."
    ),
    tip="Lami's Theorem is the sine rule of trigonometry applied directly to the closed vector triangle of equilibrium!",
    why_wrong="Option B swaps $F_2$ and $F_3$."
))

# Q086 - Medium
qs.append(make_plane_q(
    num=86,
    question="The resultant of two forces $P$ and $Q$ is perpendicular to $P$. If $P = 12\\text{ N}$ and $Q = 13\\text{ N}$, what is the magnitude of their resultant $R$?",
    options={
        "A": "5 N",
        "B": "1 N",
        "C": "25 N",
        "D": "√313 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="In the right triangle formed when resultant $\\vec{R}$ is perpendicular to $\\vec{P}$: $R = \\sqrt{Q^2 - P^2}$.",
    given="$P = 12\\text{ N}$, $Q = 13\\text{ N}$, $\\vec{R} \\perp \\vec{P}$.",
    formula="$R = \\sqrt{Q^2 - P^2} = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5\\text{ N}$",
    steps=(
        "1. Draw the vector triangle: $\\vec{P}$ is one leg, $\\vec{R}$ is the second leg, and $\\vec{Q}$ is the hypotenuse.\n"
        "2. By the Pythagorean theorem: $P^2 + R^2 = Q^2$.\n"
        "3. $R^2 = Q^2 - P^2 = 13^2 - 12^2 = 169 - 144 = 25$.\n"
        "4. Taking square root: $R = 5\\text{ N}$."
    ),
    tip="Pythagorean triple 5-12-13 is instant in NEET physics!",
    why_wrong="1 N is $|Q - P|$, which would only apply if they were antiparallel ($180^\\circ$)."
))

# Q087 - Medium
qs.append(make_plane_q(
    num=87,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes in the ratio 3 : 5 and their resultant is 35 N. If the angle between them is 60°, what are the magnitudes of $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "15 N and 25 N",
        "B": "9 N and 15 N",
        "C": "12 N and 20 N",
        "D": "18 N and 30 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="Let $A = 3x$ and $B = 5x$. Apply $R^2 = A^2 + B^2 + 2AB\\cos 60^\\circ$.",
    given="$A : B = 3 : 5$, $\\theta = 60^\\circ$, $R = 35\\text{ N}$.",
    formula="$R^2 = (3x)^2 + (5x)^2 + 2(3x)(5x)\\cos(60^\\circ)$",
    steps=(
        "1. Express magnitudes in terms of $x$: $A = 3x$, $B = 5x$.\n"
        "2. Compute terms in resultant formula:\n"
        "   $R^2 = 9x^2 + 25x^2 + 2(15x^2)(1/2) = 9x^2 + 25x^2 + 15x^2 = 49x^2$.\n"
        "3. Taking square root: $R = \\sqrt{49x^2} = 7x$.\n"
        "4. We are given $R = 35\\text{ N} \\implies 7x = 35 \\implies x = 5\\text{ N}$.\n"
        "5. Therefore:\n"
        "   $A = 3x = 3(5) = 15\\text{ N}$\n"
        "   $B = 5x = 5(5) = 25\\text{ N}$."
    ),
    tip="Notice $9 + 25 + 15 = 49 = 7^2$. So $R = 7x$. $35 / 7 = 5$. Pure mental math!",
    why_wrong="9 N and 15 N uses $x = 3$, giving $R = 21\\text{ N} \\neq 35\\text{ N}$."
))

# Q088 - Medium
qs.append(make_plane_q(
    num=88,
    question="The resultant of two vectors of magnitudes $P$ and $Q$ is $R$. If the angle between them is increased from 60° to 120°, the magnitude of the resultant:",
    options={
        "A": "Decreases",
        "B": "Increases",
        "C": "Remains unchanged",
        "D": "First decreases then increases"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="As the angle $\\theta$ between two vectors increases from $0^\\circ$ to $180^\\circ$, $\\cos\\theta$ decreases monotonically from $+1$ to $-1$. Consequently, the resultant $R = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta}$ strictly decreases.",
    given="Angle $\\theta$ increases from $60^\\circ$ to $120^\\circ$.",
    formula="$\\frac{dR}{d\\theta} = -\\frac{PQ\\sin\\theta}{R} < 0$ for $0 < \\theta < \\pi$",
    steps=(
        "1. Write the resultant equation: $R(\\theta) = \\sqrt{P^2 + Q^2 + 2PQ\\cos\\theta}$.\n"
        "2. At $\\theta = 60^\\circ$, $\\cos 60^\\circ = +0.5$, so $R^2 = P^2 + Q^2 + PQ$.\n"
        "3. At $\\theta = 120^\\circ$, $\\cos 120^\\circ = -0.5$, so $R^2 = P^2 + Q^2 - PQ$.\n"
        "4. Since $PQ > 0$, $P^2 + Q^2 - PQ < P^2 + Q^2 + PQ$.\n"
        "5. Therefore, the resultant strictly decreases."
    ),
    tip="Golden rule: Widening the angle between two forces always reduces their combined resultant pull!",
    why_wrong="Increases is opposite of the true monotonic behavior."
))

# Q089 - Medium
qs.append(make_plane_q(
    num=89,
    question="If $\\vec{A} + \\vec{B} = \\vec{C}$ and $A^2 + B^2 = C^2$, then the angle between $\\vec{A}$ and $\\vec{B}$ is:",
    options={
        "A": "90°",
        "B": "0°",
        "C": "45°",
        "D": "180°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Triangle law and parallelogram law of vector addition",
    concept="Converse of Pythagorean theorem in vector form: $|\\vec{A} + \\vec{B}|^2 = A^2 + B^2 + 2AB\\cos\\theta = C^2$. If $A^2 + B^2 = C^2$, then $2AB\\cos\\theta = 0 \\implies \\theta = 90^\\circ$.",
    given="$\\vec{A} + \\vec{B} = \\vec{C}$, $A^2 + B^2 = C^2$.",
    formula="$C^2 = A^2 + B^2 + 2AB\\cos\\theta = A^2 + B^2 \\implies \\cos\\theta = 0$",
    steps=(
        "1. Take the magnitude squared of $\\vec{A} + \\vec{B}$:\n"
        "   $|\\vec{A} + \\vec{B}|^2 = A^2 + B^2 + 2AB\\cos\\theta$.\n"
        "2. Since $\\vec{A} + \\vec{B} = \\vec{C}$, this equals $C^2$:\n"
        "   $C^2 = A^2 + B^2 + 2AB\\cos\\theta$.\n"
        "3. We are given $C^2 = A^2 + B^2$.\n"
        "4. Equating: $A^2 + B^2 + 2AB\\cos\\theta = A^2 + B^2$.\n"
        "5. $2AB\\cos\\theta = 0 \\implies \\cos\\theta = 0 \\implies \\theta = 90^\\circ$."
    ),
    tip="If $A + B = C \\implies \\theta = 0^\\circ$. If $A - B = C \\implies \\theta = 180^\\circ$. If $A^2 + B^2 = C^2 \\implies \\theta = 90^\\circ$!",
    why_wrong="0° requires $(A + B)^2 = C^2$, not $A^2 + B^2 = C^2$."
))

# Save Topic 5
with open('scripts/mip_topic5.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 5 generated successfully:", len(qs))
