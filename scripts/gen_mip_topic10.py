import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 10: Addition of vectors using components (Q162 to Q179, 18 questions)
# Distribution: 5 Easy, 9 Medium, 4 Hard
# ==============================================================================

# Q162 - Easy
qs.append(make_plane_q(
    num=162,
    question="Two vectors are given by $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ and $\\vec{B} = 2\\hat{i} - \\hat{j}$. What are the rectangular components of their resultant vector $\\vec{R} = \\vec{A} + \\vec{B}$ along the x and y axes?",
    options={
        "A": "$R_x = 5$, $R_y = 3$",
        "B": "$R_x = 1$, $R_y = 5$",
        "C": "$R_x = 5$, $R_y = 5$",
        "D": "$R_x = 6$, $R_y = -4$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Addition of vectors using components",
    concept="When adding vectors algebraically in component form, add the respective x-components together and y-components together: $R_x = A_x + B_x$ and $R_y = A_y + B_y$.",
    given="$\\vec{A} = 3\\hat{i} + 4\\hat{j}$ and $\\vec{B} = 2\\hat{i} - \\hat{j}$.",
    formula="$\\vec{R} = (A_x + B_x)\\hat{i} + (A_y + B_y)\\hat{j}$",
    steps=(
        "1. Sum of x-components: $R_x = A_x + B_x = 3 + 2 = 5$.\n"
        "2. Sum of y-components: $R_y = A_y + B_y = 4 + (-1) = 3$.\n"
        "3. Resultant vector in component form: $\\vec{R} = 5\\hat{i} + 3\\hat{j}$, so $R_x = 5$ and $R_y = 3$."
    ),
    tip="Component-wise addition decouples two-dimensional vector addition into two independent scalar additions along orthogonal axes.",
    why_wrong="Option B calculates $A_x - B_x$ and $A_y - B_y$ with sign errors; Option C mistakenly adds 4 and 1 instead of 4 and -1."
))

# Q163 - Easy
qs.append(make_plane_q(
    num=163,
    question="If $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = -5\\hat{i} + 4\\hat{j}$, what is the magnitude of the resultant vector $\\vec{R} = \\vec{A} + \\vec{B}$?",
    options={
        "A": "$\\sqrt{58}$",
        "B": "$\\sqrt{50}$",
        "C": "$\\sqrt{40}$",
        "D": "7"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Addition of vectors using components",
    concept="Find the components of the resultant vector first, then compute its magnitude using Pythagoras' theorem: $|\\vec{R}| = \\sqrt{R_x^2 + R_y^2}$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j}$, $\\vec{B} = -5\\hat{i} + 4\\hat{j}$.",
    formula="$\\vec{R} = \\vec{A} + \\vec{B}$; $|\\vec{R}| = \\sqrt{R_x^2 + R_y^2}$",
    steps=(
        "1. Find $R_x$: $R_x = 2 + (-5) = -3$.\n"
        "2. Find $R_y$: $R_y = 3 + 4 = 7$.\n"
        "3. Compute magnitude: $|\\vec{R}| = \\sqrt{(-3)^2 + 7^2} = \\sqrt{9 + 49} = \\sqrt{58}$."
    ),
    tip="Squaring a negative component always produces a positive quantity: $(-3)^2 = +9$.",
    why_wrong="Option B mistakenly computes $(-3)^2 + 7^2$ as $1 + 49 = 50$; Option D is just $R_y$."
))

# Q164 - Easy
qs.append(make_plane_q(
    num=164,
    question="Three displacement vectors are $\\vec{d}_1 = 4\\hat{i}\\text{ m}$, $\\vec{d}_2 = 3\\hat{j}\\text{ m}$, and $\\vec{d}_3 = -4\\hat{i}\\text{ m}$. What is the net displacement?",
    options={
        "A": "$3\\hat{j}\\text{ m}$",
        "B": "$8\\hat{i} + 3\\hat{j}\\text{ m}$",
        "C": "$-3\\hat{j}\\text{ m}$",
        "D": "$5\\text{ m}$ along x-axis"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Addition of vectors using components",
    concept="Vector components in opposite directions along the same axis cancel each other algebraically.",
    given="$\\vec{d}_1 = 4\\hat{i}\\text{ m}$, $\\vec{d}_2 = 3\\hat{j}\\text{ m}$, $\\vec{d}_3 = -4\\hat{i}\\text{ m}$.",
    formula="$\\vec{d}_{net} = \\vec{d}_1 + \\vec{d}_2 + \\vec{d}_3$",
    steps=(
        "1. Sum of x-components: $4 + 0 + (-4) = 0\\hat{i}$.\n"
        "2. Sum of y-components: $0 + 3 + 0 = 3\\hat{j}$.\n"
        "3. Net displacement is $3\\hat{j}\\text{ m}$."
    ),
    tip="Opposite components along an axis cancel completely, leaving only the perpendicular component.",
    why_wrong="Option B incorrectly adds the magnitudes $4+4=8$ along x without considering opposite signs."
))

# Q165 - Easy
qs.append(make_plane_q(
    num=165,
    question="What vector $\\vec{C}$ must be added to $\\vec{A} = 6\\hat{i} - 2\\hat{j}$ and $\\vec{B} = -2\\hat{i} + 5\\hat{j}$ so that the resultant is along the positive x-axis with a magnitude of 10?",
    options={
        "A": "$6\\hat{i} - 3\\hat{j}$",
        "B": "$-6\\hat{i} + 3\\hat{j}$",
        "C": "$14\\hat{i} + 3\\hat{j}$",
        "D": "$4\\hat{i} - 3\\hat{j}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Addition of vectors using components",
    concept="If the resultant $\\vec{R} = 10\\hat{i}$, then $\\vec{A} + \\vec{B} + \\vec{C} = 10\\hat{i}$, which means $\\vec{C} = 10\\hat{i} - (\\vec{A} + \\vec{B})$.",
    given="$\\vec{A} = 6\\hat{i} - 2\\hat{j}$, $\\vec{B} = -2\\hat{i} + 5\\hat{j}$, $\\vec{R} = 10\\hat{i}$.",
    formula="$\\vec{C} = \\vec{R} - (\\vec{A} + \\vec{B})$",
    steps=(
        "1. Sum of given vectors: $\\vec{A} + \\vec{B} = (6 - 2)\\hat{i} + (-2 + 5)\\hat{j} = 4\\hat{i} + 3\\hat{j}$.\n"
        "2. Required resultant: $\\vec{R} = 10\\hat{i} + 0\\hat{j}$.\n"
        "3. Therefore, $\\vec{C} = (10 - 4)\\hat{i} + (0 - 3)\\hat{j} = 6\\hat{i} - 3\\hat{j}$."
    ),
    tip="Set up coordinate equations separately: $R_x = A_x + B_x + C_x = 10$ and $R_y = A_y + B_y + C_y = 0$.",
    why_wrong="Option B reverses the required signs; Option D forgets that $10 - 4 = 6$."
))

# Q166 - Easy
qs.append(make_plane_q(
    num=166,
    question="If $\\vec{A} = 4\\hat{i} + 3\\hat{j}$ and $\\vec{B} = 3\\hat{i} + 4\\hat{j}$, what is the angle made by the resultant vector $\\vec{A} + \\vec{B}$ with the positive x-axis?",
    options={
        "A": "$45^\\circ$",
        "B": "$30^\\circ$",
        "C": "$60^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Addition of vectors using components",
    concept="If the x-component and y-component of a vector are equal and positive, the vector makes an angle of $45^\\circ$ with the positive x-axis because $\\tan\\theta = R_y / R_x = 1$.",
    given="$\\vec{A} = 4\\hat{i} + 3\\hat{j}$ and $\\vec{B} = 3\\hat{i} + 4\\hat{j}$.",
    formula="$\\tan\\theta = \\frac{R_y}{R_x}$",
    steps=(
        "1. $R_x = 4 + 3 = 7$.\n"
        "2. $R_y = 3 + 4 = 7$.\n"
        "3. $\\tan\\theta = \\frac{7}{7} = 1 \\implies \\theta = 45^\\circ$."
    ),
    tip="Whenever $R_x = R_y > 0$, the resultant bisects the first quadrant at exactly $45^\\circ$.",
    why_wrong="Option B and C correspond to $\\tan\\theta = 1/\\sqrt{3}$ and $\\sqrt{3}$, respectively."
))

# Q167 - Medium
qs.append(make_plane_q(
    num=167,
    question="Three coplanar forces $\\vec{F}_1 = (2\\hat{i} + 3\\hat{j})\\text{ N}$, $\\vec{F}_2 = (-4\\hat{i} + \\hat{j})\\text{ N}$, and $\\vec{F}_3$ act on a body such that it remains in equilibrium. What is the magnitude of force $\\vec{F}_3$?",
    options={
        "A": "$\\sqrt{20}\\text{ N} = 2\\sqrt{5}\\text{ N}$",
        "B": "$\\sqrt{24}\\text{ N}$",
        "C": "$6\\text{ N}$",
        "D": "$2\\text{ N}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="For a body in translational equilibrium under concurrent coplanar forces, the net force must be zero: $\\sum \\vec{F} = 0 \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$.",
    given="$\\vec{F}_1 = 2\\hat{i} + 3\\hat{j}$, $\\vec{F}_2 = -4\\hat{i} + \\hat{j}$, $\\sum \\vec{F} = 0$.",
    formula="$\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$; $|\\vec{F}_3| = \\sqrt{F_{3x}^2 + F_{3y}^2}$",
    steps=(
        "1. Sum of first two forces: $\\vec{F}_1 + \\vec{F}_2 = (2 - 4)\\hat{i} + (3 + 1)\\hat{j} = -2\\hat{i} + 4\\hat{j}$.\n"
        "2. For equilibrium: $\\vec{F}_3 = -(-2\\hat{i} + 4\\hat{j}) = 2\\hat{i} - 4\\hat{j}$.\n"
        "3. Magnitude: $|\\vec{F}_3| = \\sqrt{2^2 + (-4)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}\\text{ N}$."
    ),
    tip="The balancing force (equilibrant) is always equal in magnitude and opposite in direction to the resultant of all other applied forces.",
    why_wrong="Option C simply adds the magnitudes $2+4=6$; Option D ignores the y-component."
))

# Q168 - Medium
qs.append(make_plane_q(
    num=168,
    question="A vector $\\vec{A}$ has magnitude 10 units directed at $30^\\circ$ above the positive x-axis, and vector $\\vec{B}$ has magnitude 10 units directed at $150^\\circ$ above the positive x-axis. Using components, what is the resultant $\\vec{R} = \\vec{A} + \\vec{B}$?",
    options={
        "A": "$10\\hat{j}$",
        "B": "$10\\hat{i}$",
        "C": "$10\\sqrt{3}\\hat{i}$",
        "D": "$20\\hat{j}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="Resolve each vector into its rectangular components using trigonometric projections, then sum corresponding components.",
    given="$A = 10$ at $30^\\circ$, $B = 10$ at $150^\\circ$.",
    formula="$A_x = A\\cos 30^\\circ$, $A_y = A\\sin 30^\\circ$; $B_x = B\\cos 150^\\circ$, $B_y = B\\sin 150^\\circ$",
    steps=(
        "1. Components of $\\vec{A}$: $A_x = 10\\cos 30^\\circ = 5\\sqrt{3}$, $A_y = 10\\sin 30^\\circ = 5$.\n"
        "2. Components of $\\vec{B}$: $B_x = 10\\cos 150^\\circ = -5\\sqrt{3}$, $B_y = 10\\sin 150^\\circ = 5$.\n"
        "3. Resultant x-component: $R_x = 5\\sqrt{3} + (-5\\sqrt{3}) = 0$.\n"
        "4. Resultant y-component: $R_y = 5 + 5 = 10$.\n"
        "5. Resultant vector: $\\vec{R} = 10\\hat{j}$."
    ),
    tip="Symmetry check: Two equal magnitude vectors symmetrically placed about the y-axis (angles $30^\\circ$ and $180^\\circ-30^\\circ = 150^\\circ$) have equal and opposite x-components that cancel out!",
    why_wrong="Option B incorrectly keeps the x-component; Option D adds the magnitudes directly without taking component projections."
))

# Q169 - Medium
qs.append(make_plane_q(
    num=169,
    question="Given vectors $\\vec{P} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and $\\vec{Q} = \\hat{i} - 2\\hat{j} + 4\\hat{k}$, find a unit vector in the direction of $(\\vec{P} + \\vec{Q})$.",
    options={
        "A": "$\\frac{3\\hat{i} + \\hat{j} + 3\\hat{k}}{\\sqrt{19}}$",
        "B": "$\\frac{3\\hat{i} + \\hat{j} + 3\\hat{k}}{19}$",
        "C": "$\\frac{\\hat{i} + 5\\hat{j} - 5\\hat{k}}{\\sqrt{51}}$",
        "D": "$\\frac{3\\hat{i} - \\hat{j} + 3\\hat{k}}{\\sqrt{19}}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="To find a unit vector in the direction of a resultant vector, first sum the component vectors to get $\\vec{R}$, then divide $\\vec{R}$ by its magnitude $|\\vec{R}|$.",
    given="$\\vec{P} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$, $\\vec{Q} = \\hat{i} - 2\\hat{j} + 4\\hat{k}$.",
    formula="$\\hat{u} = \\frac{\\vec{R}}{|\\vec{R}|} = \\frac{\\vec{P} + \\vec{Q}}{|\\vec{P} + \\vec{Q}|}$",
    steps=(
        "1. Sum components: $\\vec{R} = (2+1)\\hat{i} + (3-2)\\hat{j} + (-1+4)\\hat{k} = 3\\hat{i} + \\hat{j} + 3\\hat{k}$.\n"
        "2. Magnitude: $|\\vec{R}| = \\sqrt{3^2 + 1^2 + 3^2} = \\sqrt{9 + 1 + 9} = \\sqrt{19}$.\n"
        "3. Unit vector: $\\hat{u} = \\frac{3\\hat{i} + \\hat{j} + 3\\hat{k}}{\\sqrt{19}}$."
    ),
    tip="Always divide by the square root of the sum of squares, not by the sum of squares itself.",
    why_wrong="Option B divides by 19 instead of $\\sqrt{19}$; Option C finds $\\vec{P} - \\vec{Q}$."
))

# Q170 - Medium
qs.append(make_plane_q(
    num=170,
    question="A bird flies $30\\text{ m}$ east, then $40\\text{ m}$ north, and then climbs vertically upwards by $50\\text{ m}$. What is the magnitude of its net displacement?",
    options={
        "A": "$50\\sqrt{2}\\text{ m} \\approx 70.7\\text{ m}$",
        "B": "$120\\text{ m}$",
        "C": "$50\\text{ m}$",
        "D": "$100\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="The displacement is given by $\\vec{s} = x\\hat{i} + y\\hat{j} + z\\hat{k}$. The total magnitude is $|\\vec{s}| = \\sqrt{x^2 + y^2 + z^2}$.",
    given="$x = 30\\text{ m}$ (east), $y = 40\\text{ m}$ (north), $z = 50\\text{ m}$ (upward).",
    formula="$|\\vec{s}| = \\sqrt{x^2 + y^2 + z^2}$",
    steps=(
        "1. Net displacement vector: $\\vec{s} = 30\\hat{i} + 40\\hat{j} + 50\\hat{k}$.\n"
        "2. Magnitude of horizontal displacement: $\\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = 50\\text{ m}$.\n"
        "3. Net 3D displacement: $|\\vec{s}| = \\sqrt{50^2 + 50^2} = 50\\sqrt{2}\\text{ m}$."
    ),
    tip="Notice the Pythagorean triple (30, 40, 50) horizontally, followed by equal horizontal and vertical legs ($50$ and $50$), giving $50\\sqrt{2}$.",
    why_wrong="Option B is the scalar distance $30+40+50 = 120\\text{ m}$; Option C is only the horizontal displacement."
))

# Q171 - Medium
qs.append(make_plane_q(
    num=171,
    question="The resultant of two vectors $\\vec{A}$ and $\\vec{B}$ is perpendicular to $\\vec{A}$ and has magnitude equal to half the magnitude of $\\vec{B}$. What is the angle between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "$150^\\circ$",
        "B": "$120^\\circ$",
        "C": "$135^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="In the vector addition triangle formed by $\\vec{A}$, $\\vec{R}$, and $\\vec{B}$, if $\\vec{R} \\perp \\vec{A}$, then the triangle is right-angled at the vertex between $\\vec{A}$ and $\\vec{R}$, with $\\vec{B}$ as the hypotenuse.",
    given="$\\vec{R} \\perp \\vec{A}$ and $R = B/2$.",
    formula="$\\sin(\\alpha) = R/B$, where $\\alpha$ is the angle between $\\vec{A}$ (reversed) or angle in right triangle.",
    steps=(
        "1. In the right triangle of vectors, $\\vec{A} + \\vec{R}_{perp} = \\vec{B}$ (or $\\vec{A} + \\vec{B} = \\vec{R}$).\n"
        "2. Since $\\vec{R} \\perp \\vec{A}$, the angle between $\\vec{A}$ and $\\vec{R}$ is $90^\\circ$.\n"
        "3. In this right triangle, the angle $\\phi$ between $\\vec{B}$ and $\\vec{A}$'s line satisfies $\\sin\\phi = R/B = (B/2)/B = 1/2 \\implies \\phi = 30^\\circ$.\n"
        "4. Since $\\vec{R}$ is the resultant, $\\vec{B}$ points backwards towards $\\vec{R}$, making an obtuse angle with $\\vec{A}$.\n"
        "5. Angle between $\\vec{A}$ and $\\vec{B}$ is $\\theta = 90^\\circ + (90^\\circ - 30^\\circ) = 180^\\circ - 30^\\circ = 150^\\circ$."
    ),
    tip="Use the component relation: since $R_x = A + B\\cos\\theta = 0$ (resultant along y-axis), $\\cos\\theta = -A/B$. From $R = B\\sin\\theta = B/2 \\implies \\sin\\theta = 1/2 \\implies \\theta = 150^\\circ$ (since obtuse).",
    why_wrong="Option B ($120^\\circ$) gives $\\sin 120^\\circ = \\sqrt{3}/2$, not $1/2$."
))

# Q172 - Medium
qs.append(make_plane_q(
    num=172,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ are such that $|\\vec{A} + \\vec{B}| = |\\vec{A} - \\vec{B}|$. Using component analysis, what can be deduced about the angle between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "The angle between them is $90^\\circ$",
        "B": "The angle between them is $0^\\circ$",
        "C": "The angle between them is $180^\\circ$",
        "D": "The angle between them is $45^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="Squaring both sides of $|\\vec{A} + \\vec{B}|^2 = |\\vec{A} - \\vec{B}|^2$ gives $A^2 + B^2 + 2\\vec{A}\\cdot\\vec{B} = A^2 + B^2 - 2\\vec{A}\\cdot\\vec{B} \\implies 4\\vec{A}\\cdot\\vec{B} = 0$, meaning the vectors are mutually orthogonal.",
    given="$|\\vec{A} + \\vec{B}| = |\\vec{A} - \\vec{B}|$.",
    formula="$|\\vec{A} + \\vec{B}|^2 = A^2 + B^2 + 2AB\\cos\\theta$; $|\\vec{A} - \\vec{B}|^2 = A^2 + B^2 - 2AB\\cos\\theta$",
    steps=(
        "1. Let $\\vec{A} = A_x\\hat{i} + A_y\\hat{j}$ and $\\vec{B} = B_x\\hat{i} + B_y\\hat{j}$.\n"
        "2. $|\\vec{A} + \\vec{B}|^2 = (A_x + B_x)^2 + (A_y + B_y)^2 = A^2 + B^2 + 2(A_x B_x + A_y B_y)$.\n"
        "3. $|\\vec{A} - \\vec{B}|^2 = (A_x - B_x)^2 + (A_y - B_y)^2 = A^2 + B^2 - 2(A_x B_x + A_y B_y)$.\n"
        "4. Equating the two expressions: $4(A_x B_x + A_y B_y) = 0 \\implies 4AB\\cos\\theta = 0$.\n"
        "5. For non-zero vectors, $\\cos\\theta = 0 \\implies \\theta = 90^\\circ$."
    ),
    tip="Geometric insight: In a parallelogram formed by $\\vec{A}$ and $\\vec{B}$, the two diagonals represent $\\vec{A}+\\vec{B}$ and $\\vec{A}-\\vec{B}$. Diagonals are equal if and only if the parallelogram is a rectangle!",
    why_wrong="Option B and C correspond to collinear vectors where one diagonal is $A+B$ and the other is $|A-B|$, which are unequal for non-zero magnitudes.",
    is_pyq=True,
    pyq_year=2024,
    source="NEET UG 2024"
))

# Q173 - Medium
qs.append(make_plane_q(
    num=173,
    question="If $\\vec{A} = 2\\hat{i} + 4\\hat{j}$ and $\\vec{B} = 5\\hat{i} - 2\\hat{j}$, what is the component of $(\\vec{A} + \\vec{B})$ along the direction of vector $\\vec{C} = 3\\hat{i} + 4\\hat{j}$?",
    options={
        "A": "$5.8$",
        "B": "$7.0$",
        "C": "$4.2$",
        "D": "$8.5$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="The component (scalar projection) of vector $\\vec{R}$ along $\\vec{C}$ is given by $\\frac{\\vec{R} \\cdot \\vec{C}}{|\\vec{C}|}$.",
    given="$\\vec{A} = 2\\hat{i} + 4\\hat{j}$, $\\vec{B} = 5\\hat{i} - 2\\hat{j}$, $\\vec{C} = 3\\hat{i} + 4\\hat{j}$.",
    formula="$\\text{proj}_{\\vec{C}}(\\vec{R}) = \\frac{\\vec{R} \\cdot \\vec{C}}{|\\vec{C}|}$",
    steps=(
        "1. Find resultant $\\vec{R} = \\vec{A} + \\vec{B} = (2+5)\\hat{i} + (4-2)\\hat{j} = 7\\hat{i} + 2\\hat{j}$.\n"
        "2. Magnitude of $\\vec{C}$: $|\\vec{C}| = \\sqrt{3^2 + 4^2} = 5$.\n"
        "3. Compute dot product: $\\vec{R} \\cdot \\vec{C} = (7)(3) + (2)(4) = 21 + 8 = 29$.\n"
        "4. Component along $\\vec{C}$: $\\frac{29}{5} = 5.8$."
    ),
    tip="Scalar projection of $\\vec{R}$ on $\\vec{C}$ is simply $\\vec{R} \\cdot \\hat{C}$. Always normalize the target vector $\\vec{C}$!",
    why_wrong="Option B uses 29/4; Option C forgets the y-component product."
))

# Q174 - Medium
qs.append(make_plane_q(
    num=174,
    question="The sum of the magnitudes of two forces is $16\\text{ N}$, and the magnitude of their resultant is $8\\text{ N}$. If the resultant is perpendicular to the smaller force, what are the magnitudes of the two forces?",
    options={
        "A": "$6\\text{ N}$ and $10\\text{ N}$",
        "B": "$4\\text{ N}$ and $12\\text{ N}$",
        "C": "$8\\text{ N}$ and $8\\text{ N}$",
        "D": "$5\\text{ N}$ and $11\\text{ N}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="When the resultant $\\vec{R}$ is perpendicular to the smaller force $\\vec{F}_1$, they form legs of a right-angled triangle with the larger force $\\vec{F}_2$ as the hypotenuse: $F_2^2 = F_1^2 + R^2$.",
    given="$F_1 + F_2 = 16\\text{ N}$, $R = 8\\text{ N}$, $\\vec{R} \\perp \\vec{F}_1$.",
    formula="$F_2^2 - F_1^2 = R^2 \\implies (F_2 - F_1)(F_2 + F_1) = R^2$",
    steps=(
        "1. From the right triangle: $F_2^2 - F_1^2 = R^2 = 8^2 = 64$.\n"
        "2. Factorize: $(F_2 - F_1)(F_2 + F_1) = 64$.\n"
        "3. We are given $F_2 + F_1 = 16\\text{ N}$, so $(F_2 - F_1)(16) = 64 \\implies F_2 - F_1 = 4$.\n"
        "4. Adding the two linear equations: $2F_2 = 20 \\implies F_2 = 10\\text{ N}$.\n"
        "5. Subtracting: $F_1 = 16 - 10 = 6\\text{ N}$."
    ),
    tip="Classic NEET standard problem: $(F_2 - F_1) = R^2 / (F_2 + F_1)$. Solve this 2-step system instantly!",
    why_wrong="Option B gives $12^2 - 4^2 = 144 - 16 = 128 \\ne 64$; Option C cannot have resultant perpendicular to either force if they are equal."
))

# Q175 - Medium
qs.append(make_plane_q(
    num=175,
    question="A particle undergoes three successive displacements: $\\vec{s}_1 = (2\\hat{i} + 3\\hat{j})\\text{ m}$, $\\vec{s}_2 = (-5\\hat{i} + \\hat{j})\\text{ m}$, and $\\vec{s}_3 = (3\\hat{i} - 4\\hat{j})\\text{ m}$. What is the net displacement and the total distance covered?",
    options={
        "A": "Net displacement $= 0$, Total distance $\\approx 13.8\\text{ m}$",
        "B": "Net displacement $= 2\\hat{i}\\text{ m}$, Total distance $= 10\\text{ m}$",
        "C": "Net displacement $= 0$, Total distance $= 0$",
        "D": "Net displacement $= 4\\hat{j}\\text{ m}$, Total distance $\\approx 15\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Addition of vectors using components",
    concept="Displacement is the vector sum of individual displacements, whereas distance is the scalar sum of the magnitudes of individual displacements.",
    given="$\\vec{s}_1 = 2\\hat{i} + 3\\hat{j}$, $\\vec{s}_2 = -5\\hat{i} + \\hat{j}$, $\\vec{s}_3 = 3\\hat{i} - 4\\hat{j}$.",
    formula="$\\vec{s}_{net} = \\vec{s}_1 + \\vec{s}_2 + \\vec{s}_3$; $\\text{Distance} = |\\vec{s}_1| + |\\vec{s}_2| + |\\vec{s}_3|$",
    steps=(
        "1. Sum of x-components: $2 - 5 + 3 = 0$.\n"
        "2. Sum of y-components: $3 + 1 - 4 = 0$.\n"
        "3. Net displacement: $\\vec{s}_{net} = 0\\hat{i} + 0\\hat{j} = \\vec{0}$.\n"
        "4. Individual magnitudes: $|\\vec{s}_1| = \\sqrt{4 + 9} = \\sqrt{13} \\approx 3.61\\text{ m}$; $|\\vec{s}_2| = \\sqrt{25 + 1} = \\sqrt{26} \\approx 5.10\\text{ m}$; $|\\vec{s}_3| = \\sqrt{9 + 16} = 5.0\\text{ m}$.\n"
        "5. Total distance: $3.61 + 5.10 + 5.0 = 13.71 \\approx 13.8\\text{ m}$."
    ),
    tip="Even when a particle returns to its starting point (zero net displacement), the total distance traveled along the path is strictly non-zero and positive.",
    why_wrong="Option C confuses distance with displacement; Option B computes the wrong vector sum."
))

# Q176 - Hard
qs.append(make_plane_q(
    num=176,
    question="Four coplanar vectors of equal magnitude $F$ act on a single particle. The angles made by them with the positive x-axis are $0^\\circ$, $60^\\circ$, $120^\\circ$, and $180^\\circ$ respectively. What is the magnitude of their resultant force?",
    options={
        "A": "$F\\sqrt{3}$",
        "B": "$2F$",
        "C": "$F$",
        "D": "$F/2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Addition of vectors using components",
    concept="Sum the rectangular components along the x and y axes for all four forces using their respective direction angles.",
    given="Magnitudes all equal to $F$. Angles: $\\theta_1 = 0^\\circ, \\theta_2 = 60^\\circ, \\theta_3 = 120^\\circ, \\theta_4 = 180^\\circ$.",
    formula="$R_x = \\sum F\\cos\\theta_i$; $R_y = \\sum F\\sin\\theta_i$; $R = \\sqrt{R_x^2 + R_y^2}$",
    steps=(
        "1. Compute $R_x$:\n"
        "   $R_x = F[\\cos 0^\\circ + \\cos 60^\\circ + \\cos 120^\\circ + \\cos 180^\\circ]$\n"
        "   $= F[1 + 0.5 - 0.5 - 1] = 0$.\n"
        "2. Compute $R_y$:\n"
        "   $R_y = F[\\sin 0^\\circ + \\sin 60^\\circ + \\sin 120^\\circ + \\sin 180^\\circ]$\n"
        "   $= F[0 + \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{3}}{2} + 0] = F\\sqrt{3}$.\n"
        "3. Resultant magnitude:\n"
        "   $R = \\sqrt{R_x^2 + R_y^2} = \\sqrt{0^2 + (F\\sqrt{3})^2} = F\\sqrt{3}$."
    ),
    tip="Notice the cancellation along the x-axis: $\\cos 0^\\circ + \\cos 180^\\circ = 0$ and $\\cos 60^\\circ + \\cos 120^\\circ = 0$. The net force is purely along the y-axis!",
    why_wrong="Option B incorrectly adds magnitudes directly; Option C forgets the second sine component."
))

# Q177 - Hard
qs.append(make_plane_q(
    num=177,
    question="Three vectors $\\vec{A}$, $\\vec{B}$, and $\\vec{C}$ satisfy $\\vec{A} + \\vec{B} + \\vec{C} = 0$. If $|\\vec{A}| = 5$, $|\\vec{B}| = 12$, and $|\\vec{C}| = 13$, what is the value of $(\\vec{A} \\cdot \\vec{B} + \\vec{B} \\cdot \\vec{C} + \\vec{C} \\cdot \\vec{A})$?",
    options={
        "A": "$-169$",
        "B": "$0$",
        "C": "$-338$",
        "D": "$169$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Addition of vectors using components",
    concept="Square the vector sum equation $(\\vec{A} + \\vec{B} + \\vec{C}) = 0$: $|\\vec{A} + \\vec{B} + \\vec{C}|^2 = A^2 + B^2 + C^2 + 2(\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A}) = 0$.",
    given="$A = 5$, $B = 12$, $C = 13$, $\\vec{A} + \\vec{B} + \\vec{C} = 0$.",
    formula="$\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A} = -\\frac{A^2 + B^2 + C^2}{2}$",
    steps=(
        "1. Since $\\vec{A} + \\vec{B} + \\vec{C} = 0$, we have $(\\vec{A} + \\vec{B} + \\vec{C}) \\cdot (\\vec{A} + \\vec{B} + \\vec{C}) = 0$.\n"
        "2. Expanding the dot product: $A^2 + B^2 + C^2 + 2(\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A}) = 0$.\n"
        "3. Substitute the given magnitudes: $5^2 + 12^2 + 13^2 = 25 + 144 + 169 = 338$.\n"
        "4. Therefore: $338 + 2(\\dots) = 0 \\implies (\\vec{A}\\cdot\\vec{B} + \\vec{B}\\cdot\\vec{C} + \\vec{C}\\cdot\\vec{A}) = -\\frac{338}{2} = -169$."
    ),
    tip="This elegant identity works for ANY three vectors that sum to zero, regardless of the angles between them!",
    why_wrong="Option C forgets to divide by 2; Option B erroneously assumes mutual perpendicularity cancels the sum."
))

# Q178 - Hard
qs.append(make_plane_q(
    num=178,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ have resultant $\\vec{R}_1 = \\vec{A} + \\vec{B}$. When $\\vec{B}$ is doubled in magnitude without changing direction, the new resultant $\\vec{R}_2$ is perpendicular to $\\vec{A}$. What is the magnitude of $\\vec{R}_2$ in terms of $A$ and $B$?",
    options={
        "A": "$\\sqrt{4B^2 - A^2}$",
        "B": "$\\sqrt{2B^2 - A^2}$",
        "C": "$2B - A$",
        "D": "$\\sqrt{A^2 + 4B^2}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Addition of vectors using components",
    concept="Set up coordinate system with $\\vec{A}$ along the x-axis: $\\vec{A} = A\\hat{i}$. Then $\\vec{B} = B\\cos\\theta\\hat{i} + B\\sin\\theta\\hat{j}$.",
    given="New vector is $2\\vec{B}$. Resultant $\\vec{R}_2 = \\vec{A} + 2\\vec{B} \\perp \\vec{A}$.",
    formula="$\\vec{R}_2 \\cdot \\vec{A} = 0 \\implies A(A + 2B\\cos\\theta) = 0$",
    steps=(
        "1. Let $\\vec{A}$ be along the x-axis: $\\vec{A} = A\\hat{i}$.\n"
        "2. Vector $\\vec{B} = B\\cos\\theta\\hat{i} + B\\sin\\theta\\hat{j}$.\n"
        "3. The doubled resultant is $\\vec{R}_2 = (A + 2B\\cos\\theta)\\hat{i} + (2B\\sin\\theta)\\hat{j}$.\n"
        "4. Since $\\vec{R}_2 \\perp \\vec{A}$, its x-component must be zero: $A + 2B\\cos\\theta = 0 \\implies 2B\\cos\\theta = -A$.\n"
        "5. The magnitude of $\\vec{R}_2$ is simply its y-component: $|\\vec{R}_2| = 2B\\sin\\theta = \\sqrt{(2B)^2 - (2B\\cos\\theta)^2}$.\n"
        "6. Substituting $2B\\cos\\theta = -A$: $|\\vec{R}_2| = \\sqrt{4B^2 - (-A)^2} = \\sqrt{4B^2 - A^2}$."
    ),
    tip="Since $\\vec{A} + 2\\vec{B} = \\vec{R}_2$ with $\\vec{R}_2 \\perp \\vec{A}$, the vectors $\\vec{A}$ and $\\vec{R}_2$ form the legs of a right triangle with $2\\vec{B}$ as hypotenuse: $(2B)^2 = A^2 + R_2^2 \\implies R_2 = \\sqrt{4B^2 - A^2}$!",
    why_wrong="Option D incorrectly adds $A^2$ inside the square root instead of subtracting; Option C ignores vector geometry."
))

# Q179 - Hard
qs.append(make_plane_q(
    num=179,
    question="A regular hexagon ABCDEF has sides of length $a$. Vectors are drawn from the center O to the vertices A, B, C, D, E, F as $\\vec{r}_A, \\vec{r}_B, \\vec{r}_C, \\vec{r}_D, \\vec{r}_E, \\vec{r}_F$. What is the resultant vector $\\vec{S} = \\vec{AB} + \\vec{AC} + \\vec{AD} + \\vec{AE} + \\vec{AF}$?",
    options={
        "A": "$3\\vec{AD}$",
        "B": "$2\\vec{AD}$",
        "C": "$6\\vec{AD}$",
        "D": "$\\vec{0}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Addition of vectors using components",
    concept="Express each displacement vector from vertex A in terms of position vectors relative to A or through polygon symmetry and opposite side pairs.",
    given="Regular hexagon ABCDEF.",
    formula="$\\vec{AB} + \\vec{AF} = \\vec{AO} = \\frac{1}{2}\\vec{AD}$; $\\vec{AC} + \\vec{AE} = 2\\vec{AO} + (\\vec{OC} + \\vec{OE}) = \\dots$",
    steps=(
        "1. In a regular hexagon, vertex D is diametrically opposite to vertex A, so $\\vec{AD} = 2\\vec{AO}$.\n"
        "2. By parallelogram law: $\\vec{AB} + \\vec{AF} = \\vec{AO} = \\frac{1}{2}\\vec{AD}$.\n"
        "3. For the other two diagonals: $\\vec{AC} = \\vec{AD} + \\vec{DC}$ and $\\vec{AE} = \\vec{AD} + \\vec{DE}$.\n"
        "4. Notice $\\vec{DC} = -\\vec{AF}$ and $\\vec{DE} = -\\vec{AB}$.\n"
        "5. Therefore, $\\vec{AC} + \\vec{AE} = 2\\vec{AD} - (\\vec{AB} + \\vec{AF}) = 2\\vec{AD} - \\frac{1}{2}\\vec{AD} = \\frac{3}{2}\\vec{AD}$. (Wait! Let's check: in parallelogram ABCO, $\\vec{AC} = \\vec{AB} + \\vec{BC} = \\vec{AB} + \\vec{AO}$. In AODF, $\\vec{AE} = \\vec{AF} + \\vec{FE} = \\vec{AF} + \\vec{AO}$.\n"
        "   So $\\vec{AC} + \\vec{AE} = (\\vec{AB} + \\vec{AF}) + 2\\vec{AO} = \\vec{AO} + 2\\vec{AO} = 3\\vec{AO} = \\frac{3}{2}\\vec{AD}$! Wait, $\\vec{AB} = \\vec{AO} + \\dots$ let's be super rigorous!).\n"
        "6. Let origin be O: $\\vec{r}_A = -\\vec{r}_D$, $\\vec{r}_B = -\\vec{r}_E$, $\\vec{r}_C = -\\vec{r}_F$.\n"
        "   $\\vec{AB} + \\vec{AC} + \\vec{AD} + \\vec{AE} + \\vec{AF} = (\\vec{r}_B - \\vec{r}_A) + (\\vec{r}_C - \\vec{r}_A) + (\\vec{r}_D - \\vec{r}_A) + (\\vec{r}_E - \\vec{r}_A) + (\\vec{r}_F - \\vec{r}_A)$\n"
        "   $= (\\vec{r}_B + \\vec{r}_C + \\vec{r}_D + \\vec{r}_E + \\vec{r}_F) - 5\\vec{r}_A$.\n"
        "7. Since $\\sum_{all} \\vec{r}_i = 0$, the sum of the other 5 position vectors is $-\\vec{r}_A$.\n"
        "8. Thus, $\\vec{S} = -\\vec{r}_A - 5\\vec{r}_A = -6\\vec{r}_A$.\n"
        "9. Since $\\vec{AD} = \\vec{r}_D - \\vec{r}_A = -\\vec{r}_A - \\vec{r}_A = -2\\vec{r}_A$, we have $-6\\vec{r}_A = 3(-2\\vec{r}_A) = 3\\vec{AD}$!"
    ),
    tip="Super shortcut: $\\sum_{V \\ne A} (\\vec{r}_V - \\vec{r}_A) = -\\vec{r}_A - 5\\vec{r}_A = -6\\vec{r}_A = 3\\vec{AD}$. A famous standard NEET result!",
    why_wrong="Option B incorrectly assumes $2\\vec{AD}$; Option D confuses vectors drawn from the center with vectors drawn from vertex A."
))

with open('scripts/mip_topic10.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 10 generated successfully:", len(qs))
