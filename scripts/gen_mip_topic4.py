import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 4: Vector addition and subtraction (Q054 to Q071, 18 questions)
# Difficulties: 4 Easy, 9 Medium, 5 Hard
# ==============================================================================

# Q054 - Easy
qs.append(make_plane_q(
    num=54,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes 3 N and 4 N respectively. If they act at an angle of 90° to each other, what is the magnitude of their resultant?",
    options={
        "A": "5 N",
        "B": "7 N",
        "C": "1 N",
        "D": "12 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector addition and subtraction",
    concept="For two mutually perpendicular vectors ($\\theta = 90^\\circ$), the resultant magnitude is $R = \\sqrt{A^2 + B^2}$.",
    given="$A = 3\\text{ N}$, $B = 4\\text{ N}$, $\\theta = 90^\\circ$.",
    formula="$R = \\sqrt{A^2 + B^2 + 2AB\\cos(90^\\circ)} = \\sqrt{A^2 + B^2}$",
    steps=(
        "1. Since $\\cos 90^\\circ = 0$, the cross term $2AB\\cos\\theta$ vanishes.\n"
        "2. $R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25}$.\n"
        "3. $R = 5\\text{ N}$.\n"
        "4. This is the standard 3-4-5 right triangle."
    ),
    tip="When $\\theta = 90^\\circ$, vector addition reduces directly to Pythagoras theorem: $R = \\sqrt{A^2 + B^2}$.",
    why_wrong="7 N is the scalar sum $3 + 4$ (valid only when parallel at $\\theta = 0^\\circ$)."
))

# Q055 - Easy
qs.append(make_plane_q(
    num=55,
    question="The maximum and minimum resultants of two forces acting at a point are 16 N and 4 N respectively. What are the individual magnitudes of the two forces?",
    options={
        "A": "10 N and 6 N",
        "B": "12 N and 4 N",
        "C": "8 N and 8 N",
        "D": "11 N and 5 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector addition and subtraction",
    concept="The maximum resultant occurs when vectors are parallel ($A + B = R_{\\max}$), and minimum occurs when antiparallel ($A - B = R_{\\min}$).",
    given="$R_{\\max} = 16\\text{ N}$, $R_{\\min} = 4\\text{ N}$.",
    formula="$A + B = 16$, $A - B = 4$",
    steps=(
        "1. Set up the two simultaneous equations:\n"
        "   $A + B = 16$  --- (1)\n"
        "   $A - B = 4$   --- (2)\n"
        "2. Add equations (1) and (2): $2A = 20 \\implies A = 10\\text{ N}$.\n"
        "3. Subtract equation (2) from (1): $2B = 12 \\implies B = 6\\text{ N}$.\n"
        "4. Check: $10 + 6 = 16$, $10 - 6 = 4$."
    ),
    tip="Quick shortcut: $A = \\frac{R_{\\max} + R_{\\min}}{2} = 10\\text{ N}$; $B = \\frac{R_{\\max} - R_{\\min}}{2} = 6\\text{ N}$.",
    why_wrong="12 N and 4 N gives $R_{\\max} = 16$ but $R_{\\min} = 8$, not 4."
))

# Q056 - Easy
qs.append(make_plane_q(
    num=56,
    question="Which of the following algebraic properties is obeyed by vector subtraction?",
    options={
        "A": "It is neither commutative nor associative",
        "B": "It is commutative only",
        "C": "It is associative only",
        "D": "It is both commutative and associative"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector addition and subtraction",
    concept="Vector addition is commutative ($\\vec{A} + \\vec{B} = \\vec{B} + \\vec{A}$) and associative ($(\\vec{A} + \\vec{B}) + \\vec{C} = \\vec{A} + (\\vec{B} + \\vec{C})$). However, vector subtraction is anti-commutative ($\\vec{A} - \\vec{B} = -(\\vec{B} - \\vec{A})$) and non-associative.",
    given="Vector subtraction operation $\\vec{A} - \\vec{B}$.",
    formula="$\\vec{A} - \\vec{B} \\neq \\vec{B} - \\vec{A}$ and $(\\vec{A} - \\vec{B}) - \\vec{C} \\neq \\vec{A} - (\\vec{B} - \\vec{C})$.",
    steps=(
        "1. Consider commutativity: $\\vec{A} - \\vec{B} = -(\\vec{B} - \\vec{A})$. The two vectors have opposite directions, so they are not equal. Hence, subtraction is NOT commutative.\n"
        "2. Consider associativity: $(\\vec{A} - \\vec{B}) - \\vec{C} = \\vec{A} - \\vec{B} - \\vec{C}$, whereas $\\vec{A} - (\\vec{B} - \\vec{C}) = \\vec{A} - \\vec{B} + \\vec{C}$. These are generally unequal. Hence, subtraction is NOT associative.\n"
        "3. Therefore, vector subtraction is neither commutative nor associative."
    ),
    tip="Vector addition obeys commutative and associative laws; vector subtraction obeys neither!",
    why_wrong="Options B, C, and D incorrectly claim commutativity or associativity for subtraction."
))

# Q057 - Easy
qs.append(make_plane_q(
    num=57,
    question="Two vectors $\\vec{A} = 3\\hat{i} - 2\\hat{j} + \\hat{k}$ and $\\vec{B} = \\hat{i} + 4\\hat{j} - 3\\hat{k}$ are given. What is the difference vector $\\vec{C} = \\vec{A} - \\vec{B}$?",
    options={
        "A": "2 î - 6 ĵ + 4 k̂",
        "B": "4 î + 2 ĵ - 2 k̂",
        "C": "-2 î + 6 ĵ - 4 k̂",
        "D": "2 î + 2 ĵ + 4 k̂"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector addition and subtraction",
    concept="Component-wise vector subtraction: $C_x = A_x - B_x$, $C_y = A_y - B_y$, $C_z = A_z - B_z$.",
    given="$\\vec{A} = 3\\hat{i} - 2\\hat{j} + 1\\hat{k}$, $\\vec{B} = 1\\hat{i} + 4\\hat{j} - 3\\hat{k}$.",
    formula="$\\vec{C} = (A_x - B_x)\\hat{i} + (A_y - B_y)\\hat{j} + (A_z - B_z)\\hat{k}$",
    steps=(
        "1. Subtract x-components: $C_x = 3 - 1 = 2$.\n"
        "2. Subtract y-components: $C_y = -2 - 4 = -6$.\n"
        "3. Subtract z-components: $C_z = 1 - (-3) = 1 + 3 = 4$.\n"
        "4. Combine into vector form: $\\vec{C} = 2\\hat{i} - 6\\hat{j} + 4\\hat{k}$."
    ),
    tip="Be extremely careful with double negatives: $1 - (-3) = +4$!",
    why_wrong="Option B adds the vectors instead of subtracting; Option C is $\\vec{B} - \\vec{A}$."
))

# Q058 - Medium
qs.append(make_plane_q(
    num=58,
    question="The resultant of two forces 3 N and 4 N acting at angle $\\theta$ is $\\sqrt{37}$ N. What is the angle $\\theta$ between the two forces?",
    options={
        "A": "60°",
        "B": "45°",
        "C": "30°",
        "D": "90°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="Use the law of cosines for vector addition: $R^2 = A^2 + B^2 + 2AB\\cos\\theta$.",
    given="$A = 3$, $B = 4$, $R = \\sqrt{37}$.",
    formula="$R^2 = A^2 + B^2 + 2AB\\cos\\theta \\implies \\cos\\theta = \\frac{R^2 - A^2 - B^2}{2AB}$",
    steps=(
        "1. Square the resultant: $R^2 = (\\sqrt{37})^2 = 37$.\n"
        "2. Compute individual squares: $A^2 = 9$, $B^2 = 16$. Sum $A^2 + B^2 = 25$.\n"
        "3. Substitute into formula: $37 = 25 + 2(3)(4)\\cos\\theta$.\n"
        "4. $37 - 25 = 24\\cos\\theta \\implies 12 = 24\\cos\\theta$.\n"
        "5. $\\cos\\theta = 12/24 = 1/2$.\n"
        "6. Therefore, $\\theta = 60^\\circ$."
    ),
    tip="If $R = \\sqrt{A^2 + B^2 + AB}$, the angle is ALWAYS $60^\\circ$. Here $9 + 16 + 12 = 37$!",
    why_wrong="45° would yield $\\cos 45^\\circ = 1/\\sqrt{2} \\implies R^2 = 25 + 12\\sqrt{2} \\approx 41.97$."
))

# Q059 - Medium
qs.append(make_plane_q(
    num=59,
    question="Two vectors of equal magnitude F act at an angle $\\theta$. What is the ratio of the magnitude of their vector sum to the magnitude of their vector difference, $\\frac{|\\vec{F}_1 + \\vec{F}_2|}{|\\vec{F}_1 - \\vec{F}_2|}$?",
    options={
        "A": "cot(θ / 2)",
        "B": "tan(θ / 2)",
        "C": "cos(θ / 2)",
        "D": "sin(θ / 2)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="For equal magnitudes $F$: $|\\vec{F}_1 + \\vec{F}_2| = 2F\\cos(\\theta/2)$ and $|\\vec{F}_1 - \\vec{F}_2| = 2F\\sin(\\theta/2)$.",
    given="$F_1 = F_2 = F$, angle $\\theta$.",
    formula="Ratio $= \\frac{2F\\cos(\\theta/2)}{2F\\sin(\\theta/2)} = \\cot(\\theta/2)$",
    steps=(
        "1. Sum magnitude: $|\\vec{F}_1 + \\vec{F}_2| = \\sqrt{F^2 + F^2 + 2F^2\\cos\\theta} = \\sqrt{2F^2(1 + \\cos\\theta)} = 2F\\cos(\\theta/2)$.\n"
        "2. Difference magnitude: $|\\vec{F}_1 - \\vec{F}_2| = \\sqrt{F^2 + F^2 - 2F^2\\cos\\theta} = \\sqrt{2F^2(1 - \\cos\\theta)} = 2F\\sin(\\theta/2)$.\n"
        "3. Take the ratio: $\\frac{2F\\cos(\\theta/2)}{2F\\sin(\\theta/2)} = \\frac{\\cos(\\theta/2)}{\\sin(\\theta/2)} = \\cot(\\theta/2)$.\n"
        "4. Thus, the ratio is $\\cot(\\theta/2)$."
    ),
    tip="Test with $\\theta = 90^\\circ$: Sum $= F\\sqrt{2}$, Diff $= F\\sqrt{2}$, Ratio $= 1 = \\cot(45^\\circ)$! Instant verification.",
    why_wrong="Option B inverts the ratio (giving difference over sum)."
))

# Q060 - Medium
qs.append(make_plane_q(
    num=60,
    question="At what angle $\\theta$ between two vectors of equal magnitude is the magnitude of their sum equal to $\\sqrt{3}$ times the magnitude of their difference?",
    options={
        "A": "60°",
        "B": "30°",
        "C": "90°",
        "D": "120°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="From $|\\vec{A} + \\vec{B}| / |\\vec{A} - \\vec{B}| = \\cot(\\theta/2)$, equate $\\cot(\\theta/2) = \\sqrt{3}$.",
    given="$|\\vec{A} + \\vec{B}| = \\sqrt{3} |\\vec{A} - \\vec{B}|$ with $A = B$.",
    formula="$\\cot(\\theta/2) = \\sqrt{3} \\implies \\theta/2 = 30^\\circ \\implies \\theta = 60^\\circ$",
    steps=(
        "1. Use the ratio formula derived in the previous question: $\\frac{|\\vec{A} + \\vec{B}|}{|\\vec{A} - \\vec{B}|} = \\cot(\\theta/2)$.\n"
        "2. Given ratio is $\\sqrt{3}$, so $\\cot(\\theta/2) = \\sqrt{3}$.\n"
        "3. Therefore, $\\tan(\\theta/2) = 1/\\sqrt{3}$.\n"
        "4. $\\theta/2 = 30^\\circ$.\n"
        "5. Multiply by 2: $\\theta = 60^\\circ$."
    ),
    tip="At $60^\\circ$: sum $= F\\sqrt{3}$, diff $= F$. So sum is $\\sqrt{3} \\times$ diff!",
    why_wrong="30° is $\\theta/2$, not $\\theta$."
))

# Q061 - Medium
qs.append(make_plane_q(
    num=61,
    question="A body is displaced 10 m East, then 10 m North, and finally 10 m vertically upward. What is the total magnitude of displacement from the starting point?",
    options={
        "A": "10√3 m",
        "B": "10√2 m",
        "C": "30 m",
        "D": "20 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="The displacement is a 3D vector: $\\vec{s} = 10\\hat{i} + 10\\hat{j} + 10\\hat{k}$. Its magnitude is $|\\vec{s}| = \\sqrt{s_x^2 + s_y^2 + s_z^2}$.",
    given="Displacement components: $\\Delta x = 10\\text{ m}$, $\\Delta y = 10\\text{ m}$, $\\Delta z = 10\\text{ m}$.",
    formula="$|\\vec{s}| = \\sqrt{10^2 + 10^2 + 10^2} = 10\\sqrt{3}\\text{ m}$",
    steps=(
        "1. Write the net displacement vector in Cartesian unit vector form:\n"
        "   $\\vec{s} = 10\\hat{i} + 10\\hat{j} + 10\\hat{k}$.\n"
        "2. Magnitude formula: $|\\vec{s}| = \\sqrt{10^2 + 10^2 + 10^2} = \\sqrt{100 + 100 + 100} = \\sqrt{300}$.\n"
        "3. $\\sqrt{300} = 10\\sqrt{3} \\approx 17.32\\text{ m}$.\n"
        "4. Total distance traveled is $10 + 10 + 10 = 30\\text{ m}$, but net displacement is $10\\sqrt{3}\\text{ m}$."
    ),
    tip="Diagonal of a cube of side $L$ is always $L\\sqrt{3}$!",
    why_wrong="30 m is distance, not displacement; 10√2 m is only the horizontal displacement in the xy-plane."
))

# Q062 - Medium
qs.append(make_plane_q(
    num=62,
    question="A vector $\\vec{A}$ has magnitude 10 and points East. A vector $\\vec{B}$ has magnitude 10 and points North. What is the magnitude and direction of $\\vec{A} - \\vec{B}$?",
    options={
        "A": "10√2, pointing South-East",
        "B": "10√2, pointing North-East",
        "C": "10√2, pointing South-West",
        "D": "10, pointing South-East"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="Vector subtraction $\\vec{A} - \\vec{B} = \\vec{A} + (-\\vec{B})$. Since $\\vec{B}$ points North, $-\\vec{B}$ points South. Adding East and South gives South-East.",
    given="$\\vec{A} = 10\\hat{i}$ (East), $\\vec{B} = 10\\hat{j}$ (North).",
    formula="$\\vec{A} - \\vec{B} = 10\\hat{i} - 10\\hat{j}$; $|\\vec{A} - \\vec{B}| = \\sqrt{10^2 + (-10)^2} = 10\\sqrt{2}$",
    steps=(
        "1. Express $\\vec{A}$ and $\\vec{B}$ in unit vectors: $\\vec{A} = 10\\hat{i}$, $\\vec{B} = 10\\hat{j}$.\n"
        "2. Compute $\\vec{A} - \\vec{B} = 10\\hat{i} - 10\\hat{j}$.\n"
        "3. Magnitude: $\\sqrt{10^2 + (-10)^2} = \\sqrt{100 + 100} = \\sqrt{200} = 10\\sqrt{2}$.\n"
        "4. Direction: $+x$ is East and $-y$ is South. Equal components in East and South yield South-East ($45^\\circ$ South of East).\n"
        "5. Hence, magnitude is $10\\sqrt{2}$ pointing South-East."
    ),
    tip="NEET Trap: $\\vec{A} + \\vec{B}$ points North-East, but $\\vec{A} - \\vec{B}$ points South-East!",
    why_wrong="Option B gives the direction of the sum $\\vec{A} + \\vec{B}$."
))

# Q063 - Hard
qs.append(make_plane_q(
    num=63,
    question="The resultant of two forces $\\vec{P}$ and $\\vec{Q}$ has magnitude $P$. If $\\vec{P}$ is doubled, the new resultant is still of magnitude $P$. What is the angle between $\\vec{P}$ and $\\vec{Q}$?",
    options={
        "A": "150°",
        "B": "120°",
        "C": "135°",
        "D": "180°"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector addition and subtraction",
    concept="Set up equations for the resultant magnitude before and after doubling $\\vec{P}$, and solve for $\\cos\\theta$.",
    given="Case 1: $R_1^2 = P^2 + Q^2 + 2PQ\\cos\\theta = P^2$. Case 2: $R_2^2 = (2P)^2 + Q^2 + 2(2P)Q\\cos\\theta = P^2$.",
    formula="$Q^2 + 2PQ\\cos\\theta = 0$ and $4P^2 + Q^2 + 4PQ\\cos\\theta = P^2$",
    steps=(
        "1. From Case 1: $P^2 + Q^2 + 2PQ\\cos\\theta = P^2 \\implies Q^2 + 2PQ\\cos\\theta = 0 \\implies Q = -2P\\cos\\theta$.\n"
        "2. From Case 2: $(2P)^2 + Q^2 + 2(2P)Q\\cos\\theta = P^2 \\implies 4P^2 + Q^2 + 4PQ\\cos\\theta = P^2$.\n"
        "3. Notice from step 1 that $2PQ\\cos\\theta = -Q^2$, so $4PQ\\cos\\theta = -2Q^2$.\n"
        "4. Substitute into Case 2: $4P^2 + Q^2 + (-2Q^2) = P^2 \\implies 3P^2 - Q^2 = 0 \\implies Q^2 = 3P^2 \\implies Q = P\\sqrt{3}$.\n"
        "5. Now substitute $Q = P\\sqrt{3}$ into $Q = -2P\\cos\\theta$:\n"
        "   $P\\sqrt{3} = -2P\\cos\\theta \\implies \\cos\\theta = -\\frac{\\sqrt{3}}{2}$.\n"
        "6. Therefore, $\\theta = 180^\\circ - 30^\\circ = 150^\\circ$."
    ),
    tip="Step-by-step substitution makes this tough problem crystal clear: $Q = P\\sqrt{3}$ and $\\cos\\theta = -\\sqrt{3}/2 \\implies \\theta = 150^\\circ$.",
    why_wrong="120° gives $\\cos 120^\\circ = -1/2$, which would require $Q = P$, violating Case 2."
))

# Q064 - Hard
qs.append(make_plane_q(
    num=64,
    question="The sum of the magnitudes of two forces is 18 N and the magnitude of their resultant is 12 N. If the resultant is at 90° to the smaller force, what are the magnitudes of the two forces?",
    options={
        "A": "5 N and 13 N",
        "B": "6 N and 12 N",
        "C": "8 N and 10 N",
        "D": "7 N and 11 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector addition and subtraction",
    concept="When the resultant is perpendicular to the smaller force $A$, the three vectors form a right triangle with hypotenuse $B$, where $B^2 = A^2 + R^2$. Combine with $A + B = 18$.",
    given="$A + B = 18$, $R = 12$, $\\vec{R} \\perp \\vec{A}$.",
    formula="$B^2 - A^2 = R^2 = 144 \\implies (B - A)(B + A) = 144$",
    steps=(
        "1. Since resultant $\\vec{R}$ is perpendicular to $\\vec{A}$, the vector triangle $\\vec{A} + \\vec{R} = \\vec{B}$ (rearranged) forms a right triangle with $\\vec{B}$ as hypotenuse.\n"
        "2. Pythagoras relation: $B^2 = A^2 + R^2 \\implies B^2 - A^2 = R^2$.\n"
        "3. Substitute $R = 12$: $B^2 - A^2 = 12^2 = 144$.\n"
        "4. Factorize: $(B - A)(B + A) = 144$.\n"
        "5. We are given $A + B = 18$. Substitute: $(B - A)(18) = 144 \\implies B - A = 144/18 = 8$.\n"
        "6. Solve the linear system:\n"
        "   $B + A = 18$\n"
        "   $B - A = 8$\n"
        "   Adding: $2B = 26 \\implies B = 13\\text{ N}$.\n"
        "   Subtracting: $2A = 10 \\implies A = 5\\text{ N}$.\n"
        "7. Magnitudes are 5 N and 13 N."
    ),
    tip="Pythagorean triple 5-12-13: $A = 5, R = 12, B = 13$! Sum is $5 + 13 = 18$. Solved in 5 seconds without scratch paper!",
    why_wrong="Option C (8, 10) gives sum 18, but $10^2 - 8^2 = 36 = 6^2 \\neq 12^2$."
))

# Q065 - Hard
qs.append(make_plane_q(
    num=65,
    question="Two forces $\\vec{F}_1$ and $\\vec{F}_2$ act at an angle $\\theta$. If the magnitude of each force is doubled and the angle between them is halved, what is the new resultant if initially $F_1 = F_2 = F$ and $\\theta = 120^\\circ$?",
    options={
        "A": "2F√3",
        "B": "4F",
        "C": "2F",
        "D": "F√3"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector addition and subtraction",
    concept="For equal forces of magnitude $F'$ at angle $\\theta'$, resultant is $R' = 2F'\\cos(\\theta'/2)$.",
    given="Initially $F_1 = F_2 = F, \\theta = 120^\\circ$. New: $F' = 2F, \\theta' = 120^\\circ/2 = 60^\\circ$.",
    formula="$R' = 2(2F)\\cos(60^\\circ/2) = 4F\\cos 30^\\circ = 4F\\frac{\\sqrt{3}}{2} = 2F\\sqrt{3}$",
    steps=(
        "1. Initial parameters: $F_1 = F_2 = F$, $\\theta = 120^\\circ$.\n"
        "2. New magnitude of each force: $F' = 2F$.\n"
        "3. New angle between them: $\\theta' = \\theta/2 = 60^\\circ$.\n"
        "4. Resultant formula for equal forces: $R' = 2F'\\cos(\\theta'/2)$.\n"
        "5. Substitute $F' = 2F$ and $\\theta'/2 = 30^\\circ$:\n"
        "   $R' = 2(2F)\\cos 30^\\circ = 4F \\left(\\frac{\\sqrt{3}}{2}\\right) = 2F\\sqrt{3}$."
    ),
    tip="Formula for resultant of two equal vectors $F$ at angle $\\theta$: $R = 2F\\cos(\\theta/2)$. Always use this instead of expanding $\\sqrt{F^2+F^2+2F^2\\cos\\theta}$!",
    why_wrong="4F would correspond to $\\theta' = 0^\\circ$."
))

# Q066 - Hard
qs.append(make_plane_q(
    num=66,
    question="The resultant of two vectors $\\vec{A}$ and $\\vec{B}$ is $\\vec{R}_1$. When $\\vec{B}$ is reversed (i.e. replaced by $-\\vec{B}$), the new resultant is $\\vec{R}_2$. Which of the following equations is always strictly TRUE?",
    options={
        "A": "R₁² + R₂² = 2(A² + B²)",
        "B": "R₁² - R₂² = 2(A² + B²)",
        "C": "R₁² + R₂² = A² + B²",
        "D": "R₁ + R₂ = 2(A + B)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector addition and subtraction",
    concept="This is the fundamental Parallelogram Law Identity: The sum of the squares of the diagonals of a parallelogram equals the sum of the squares of its four sides ($2A^2 + 2B^2$).",
    given="$\\vec{R}_1 = \\vec{A} + \\vec{B}$ and $\\vec{R}_2 = \\vec{A} - \\vec{B}$.",
    formula="$R_1^2 = A^2 + B^2 + 2AB\\cos\\theta$; $R_2^2 = A^2 + B^2 - 2AB\\cos\\theta$",
    steps=(
        "1. Write the square of the magnitude of the sum:\n"
        "   $R_1^2 = |\\vec{A} + \\vec{B}|^2 = A^2 + B^2 + 2\\vec{A}\\cdot\\vec{B}$.\n"
        "2. Write the square of the magnitude of the difference:\n"
        "   $R_2^2 = |\\vec{A} - \\vec{B}|^2 = A^2 + B^2 - 2\\vec{A}\\cdot\\vec{B}$.\n"
        "3. Add the two equations together:\n"
        "   $R_1^2 + R_2^2 = (A^2 + B^2 + 2\\vec{A}\\cdot\\vec{B}) + (A^2 + B^2 - 2\\vec{A}\\cdot\\vec{B})$.\n"
        "4. The cross-terms $+2\\vec{A}\\cdot\\vec{B}$ and $-2\\vec{A}\\cdot\\vec{B}$ cancel out exactly:\n"
        "   $R_1^2 + R_2^2 = 2A^2 + 2B^2 = 2(A^2 + B^2)$.\n"
        "5. This proves the parallelogram identity."
    ),
    tip="Memory hook: $R_1^2 + R_2^2 = 2(A^2 + B^2)$ and $R_1^2 - R_2^2 = 4\\vec{A}\\cdot\\vec{B} = 4AB\\cos\\theta$. Both appear frequently in NEET!",
    why_wrong="Option C forgets the factor of 2; Option B has a minus sign on the left."
))

# Q067 - Hard
qs.append(make_plane_q(
    num=67,
    question="Using the relation from the previous question, what is the value of $R_1^2 - R_2^2$ in terms of $\\vec{A}$, $\\vec{B}$, and the angle $\\theta$ between them?",
    options={
        "A": "4AB cos θ",
        "B": "2AB cos θ",
        "C": "4AB sin θ",
        "D": "2(A² - B²)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector addition and subtraction",
    concept="Subtracting the square of difference from square of sum: $|\\vec{A} + \\vec{B}|^2 - |\\vec{A} - \\vec{B}|^2 = 4\\vec{A}\\cdot\\vec{B} = 4AB\\cos\\theta$.",
    given="$\\vec{R}_1 = \\vec{A} + \\vec{B}$, $\\vec{R}_2 = \\vec{A} - \\vec{B}$.",
    formula="$R_1^2 - R_2^2 = (A^2 + B^2 + 2AB\\cos\\theta) - (A^2 + B^2 - 2AB\\cos\\theta) = 4AB\\cos\\theta$",
    steps=(
        "1. $R_1^2 = A^2 + B^2 + 2AB\\cos\\theta$.\n"
        "2. $R_2^2 = A^2 + B^2 - 2AB\\cos\\theta$.\n"
        "3. Subtract $R_2^2$ from $R_1^2$:\n"
        "   $R_1^2 - R_2^2 = (A^2 + B^2 + 2AB\\cos\\theta) - (A^2 + B^2 - 2AB\\cos\\theta)$.\n"
        "4. $A^2 + B^2$ cancels out:\n"
        "   $2AB\\cos\\theta - (-2AB\\cos\\theta) = 4AB\\cos\\theta$.\n"
        "5. Therefore, $R_1^2 - R_2^2 = 4AB\\cos\\theta$."
    ),
    tip="Notice that if $\\theta = 90^\\circ$, $\\cos 90^\\circ = 0 \\implies R_1^2 - R_2^2 = 0 \\implies R_1 = R_2$, which confirms diagonals are equal for perpendicular vectors!",
    why_wrong="2AB cos θ misses the factor of 2 from subtracting a negative."
))

# Q068 - Medium
qs.append(make_plane_q(
    num=68,
    question="Three forces of magnitudes 10 N, 10 N, and 10 N act on a body in the same plane at angles of 0°, 120°, and 240° with the positive x-axis. What is the net force acting on the body?",
    options={
        "A": "0 N",
        "B": "10 N",
        "C": "30 N",
        "D": "10√3 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="Three equal coplanar forces separated by equal angles of $120^\\circ$ form an equilateral triangle in vector space and completely cancel to zero.",
    given="Three forces $F_1 = F_2 = F_3 = 10\\text{ N}$ at $\\theta_1 = 0^\\circ, \\theta_2 = 120^\\circ, \\theta_3 = 240^\\circ$.",
    formula="$\\sum F_x = \\sum F_i \\cos\\theta_i = 0$; $\\sum F_y = \\sum F_i \\sin\\theta_i = 0$",
    steps=(
        "1. Sum of x-components:\n"
        "   $F_x = 10\\cos 0^\\circ + 10\\cos 120^\\circ + 10\\cos 240^\\circ = 10(1) + 10(-1/2) + 10(-1/2) = 10 - 5 - 5 = 0$.\n"
        "2. Sum of y-components:\n"
        "   $F_y = 10\\sin 0^\\circ + 10\\sin 120^\\circ + 10\\sin 240^\\circ = 10(0) + 10(\\sqrt{3}/2) + 10(-\\sqrt{3}/2) = 0 + 5\\sqrt{3} - 5\\sqrt{3} = 0$.\n"
        "3. Since both $F_x = 0$ and $F_y = 0$, the net resultant force is strictly $0\\text{ N}$."
    ),
    tip="Symmetry theorem: $N$ coplanar forces of equal magnitude directed at angles $360^\\circ/N$ to each other ALWAYS sum to zero!",
    why_wrong="30 N is the scalar sum of magnitudes without considering directions."
))

# Q069 - Medium
qs.append(make_plane_q(
    num=69,
    question="Two vectors $\\vec{A}$ and $\\vec{B}$ have magnitudes such that $|\\vec{A} + \\vec{B}| = |\\vec{A}|$. Which of the following statements must be true about the angle $\\theta$ between $\\vec{A}$ and $\\vec{B}$?",
    options={
        "A": "cos θ = -B / (2A)",
        "B": "cos θ = -A / (2B)",
        "C": "cos θ = 0",
        "D": "cos θ = -1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="Square both sides of $|\\vec{A} + \\vec{B}| = A$: $A^2 + B^2 + 2AB\\cos\\theta = A^2$.",
    given="$|\\vec{A} + \\vec{B}| = A$.",
    formula="$A^2 + B^2 + 2AB\\cos\\theta = A^2 \\implies B(B + 2A\\cos\\theta) = 0$",
    steps=(
        "1. Expand the square of the resultant: $|\\vec{A} + \\vec{B}|^2 = A^2 + B^2 + 2AB\\cos\\theta$.\n"
        "2. Given that this equals $A^2$: $A^2 + B^2 + 2AB\\cos\\theta = A^2$.\n"
        "3. Cancel $A^2$ from both sides: $B^2 + 2AB\\cos\\theta = 0$.\n"
        "4. Since $B \\neq 0$, divide by $B$: $B + 2A\\cos\\theta = 0$.\n"
        "5. Solve for $\\cos\\theta$: $\\cos\\theta = -\\frac{B}{2A}$."
    ),
    tip="For this to be physically valid, $|\\cos\\theta| \\le 1 \\implies B \\le 2A$. The vector $\\vec{B}$ cannot be larger than $2A$.",
    why_wrong="Option B swaps $A$ and $B$, which would correspond to $|\\vec{A} + \\vec{B}| = B$."
))

# Q070 - Medium
qs.append(make_plane_q(
    num=70,
    question="A bird flies 40 m North, then 30 m East, and then 50 m vertically upward. What is the distance flown and the displacement of the bird, respectively?",
    options={
        "A": "Distance = 120 m, Displacement = 50√2 m",
        "B": "Distance = 50√2 m, Displacement = 120 m",
        "C": "Distance = 120 m, Displacement = 50 m",
        "D": "Distance = 100 m, Displacement = 50√2 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="Distance is scalar path length: $d = d_1 + d_2 + d_3$. Displacement is vector magnitude: $|\\vec{s}| = \\sqrt{s_x^2 + s_y^2 + s_z^2}$.",
    given="Displacement: $x = 30\\text{ m}$ (East), $y = 40\\text{ m}$ (North), $z = 50\\text{ m}$ (Up).",
    formula="$d = 40 + 30 + 50 = 120\\text{ m}$; $|\\vec{s}| = \\sqrt{30^2 + 40^2 + 50^2}$",
    steps=(
        "1. Total distance = sum of scalar path lengths = $40 + 30 + 50 = 120\\text{ m}$.\n"
        "2. Horizontal displacement in xy-plane: $\\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ m}$.\n"
        "3. Total 3D displacement: $\\sqrt{50_{\\text{horiz}}^2 + 50_{\\text{vert}}^2} = \\sqrt{2500 + 2500} = \\sqrt{5000} = 50\\sqrt{2}\\text{ m} \\approx 70.71\\text{ m}$.\n"
        "4. Therefore, distance = 120 m and displacement = $50\\sqrt{2}$ m."
    ),
    tip="Notice the two-step Pythagorean theorem: horizontal is 30-40-50, then combined with 50 vertical gives $50\\sqrt{2}$!",
    why_wrong="Option B swaps distance and displacement."
))

# Q071 - Medium
qs.append(make_plane_q(
    num=71,
    question="If two vectors $\\vec{A}$ and $\\vec{B}$ have equal magnitude and are inclined at an angle $\\theta = 60^\\circ$, by what factor is their sum larger than either vector?",
    options={
        "A": "√3",
        "B": "2",
        "C": "√2",
        "D": "1.5"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector addition and subtraction",
    concept="The resultant of two equal vectors $A$ at $60^\\circ$ is $R = 2A\\cos(60^\\circ/2) = 2A\\cos 30^\\circ = 2A(\\sqrt{3}/2) = A\\sqrt{3}$.",
    given="$A = B$, $\\theta = 60^\\circ$.",
    formula="$R = 2A\\cos(\\theta/2) = 2A\\cos 30^\\circ = A\\sqrt{3}$",
    steps=(
        "1. Formula for resultant of two equal vectors: $R = 2A\\cos(\\theta/2)$.\n"
        "2. Substitute $\\theta = 60^\\circ$: $\\theta/2 = 30^\\circ$.\n"
        "3. $R = 2A \\cos 30^\\circ = 2A \\left(\\frac{\\sqrt{3}}{2}\\right) = A\\sqrt{3}$.\n"
        "4. Ratio $R / A = \\sqrt{3} \\approx 1.732$."
    ),
    tip="NEET quick table for two equal forces $F$:\n- At $0^\\circ: R = 2F$\n- At $60^\\circ: R = F\\sqrt{3}$\n- At $90^\\circ: R = F\\sqrt{2}$\n- At $120^\\circ: R = F$\n- At $180^\\circ: R = 0$",
    why_wrong="√2 corresponds to an angle of 90° between the vectors."
))

# Save Topic 4
with open('scripts/mip_topic4.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 4 generated successfully:", len(qs))
