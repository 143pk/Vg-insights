import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 2: Vector representation and notation (Q019 to Q035, 17 questions)
# Difficulties: 4 Easy, 9 Medium, 4 Hard
# ==============================================================================

# Q019 - Easy
qs.append(make_plane_q(
    num=19,
    question="In graphical representation of a vector by a directed line segment (arrow), what do the length of the arrow and the arrowhead represent, respectively?",
    options={
        "A": "Magnitude and direction of the vector",
        "B": "Direction and magnitude of the vector",
        "C": "Initial position and final position",
        "D": "Velocity and acceleration"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector representation and notation",
    concept="In standard geometrical vector representation, a vector is drawn as an arrow where length on a chosen scale represents magnitude and the tip (arrowhead) indicates direction.",
    given="Graphical representation of a vector.",
    formula="Arrow length $\\propto |\\vec{A}|$; arrowhead points along $\\hat{A}$.",
    steps=(
        "1. A vector is represented graphically by a straight arrow starting at a tail (initial point) and terminating at a tip (terminal point).\n"
        "2. The length of the line segment drawn to scale is directly proportional to the magnitude of the vector.\n"
        "3. The arrow mark at the tip gives the orientation or direction in space.\n"
        "4. Therefore, length represents magnitude and arrowhead represents direction."
    ),
    tip="Tail = initial point, Head = terminal point, Length = magnitude.",
    why_wrong="Option B reverses the roles of length and arrowhead."
))

# Q020 - Easy
qs.append(make_plane_q(
    num=20,
    question="Two vectors are said to be equal vectors if and only if they have:",
    options={
        "A": "The same magnitude and the same direction, regardless of their initial positions",
        "B": "The same magnitude only",
        "C": "The same direction only",
        "D": "The same magnitude, direction, and identical starting point"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector representation and notation",
    concept="Two free vectors are equal if they have equal magnitude and point in the same direction, even if their starting points (tails) are located at different positions in space.",
    given="Definition of equal vectors.",
    formula="$\\vec{A} = \\vec{B} \\iff |\\vec{A}| = |\\vec{B}|$ and $\\hat{A} = \\hat{B}$.",
    steps=(
        "1. In physics, unless dealing with localized or bound vectors (such as line of action for torque), vectors are treated as free vectors.\n"
        "2. A free vector can be translated parallel to itself anywhere in space without altering its physical identity.\n"
        "3. Hence, two vectors having identical magnitude and parallel direction are completely equal, even if drawn at different locations."
    ),
    tip="Parallel translation does not change a free vector!",
    why_wrong="Option D is unnecessarily restrictive for free vectors; starting point can be anywhere."
))

# Q021 - Easy
qs.append(make_plane_q(
    num=21,
    question="What is a null vector (zero vector), and what is its direction?",
    options={
        "A": "A vector having zero magnitude and an indeterminate (arbitrary) direction",
        "B": "A vector having zero magnitude and a fixed direction along the x-axis",
        "C": "A vector whose components are all equal to 1",
        "D": "A scalar with magnitude zero"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector representation and notation",
    concept="A null vector $\\vec{0}$ has zero magnitude ($|\\vec{0}| = 0$). Since its initial point and terminal point coincide, its direction cannot be specified uniquely and is considered arbitrary or indeterminate.",
    given="Definition of a null vector.",
    formula="$\\vec{A} + (-\\vec{A}) = \\vec{0}$, with $|\\vec{0}| = 0$.",
    steps=(
        "1. The vector sum of two equal and opposite vectors gives the null vector: $\\vec{A} - \\vec{A} = \\vec{0}$.\n"
        "2. The length of this vector is zero.\n"
        "3. Since length is zero, there is no distinct line segment to define a unique angle or direction in space.\n"
        "4. By convention in NCERT, the direction of a null vector is indeterminate or arbitrary."
    ),
    tip="Physical example of null vector: Velocity of a stationary particle, acceleration of a body moving with constant velocity.",
    why_wrong="Option B is wrong because a null vector cannot have a preferred direction like +x."
))

# Q022 - Easy
qs.append(make_plane_q(
    num=22,
    question="A vector is displaced parallel to itself in space. What happens to the vector?",
    options={
        "A": "It remains completely unchanged",
        "B": "Its magnitude changes but direction remains the same",
        "C": "Its direction changes but magnitude remains the same",
        "D": "Both its magnitude and direction change"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Vector representation and notation",
    concept="Translating a vector parallel to itself maintains both its length (magnitude) and its orientation (direction) unchanged. Hence, the vector remains unchanged.",
    given="Parallel displacement of a vector.",
    formula="$\\vec{A}' = \\vec{A}$ under pure spatial translation.",
    steps=(
        "1. A vector is uniquely specified by magnitude and direction.\n"
        "2. Parallel displacement does not change the length of the vector, so magnitude is invariant.\n"
        "3. It does not rotate the vector, so the angle with coordinate axes remains invariant.\n"
        "4. Therefore, the vector remains identical."
    ),
    tip="Parallel shifting of vectors is the foundation of the triangle and parallelogram laws of addition!",
    why_wrong="Options B, C, and D contradict the definition of a free vector."
))

# Q023 - Medium
qs.append(make_plane_q(
    num=23,
    question="If a vector $\\vec{A}$ is rotated through an angle $\\theta$ (where $\\theta \\neq 2n\\pi$) in its plane without changing its length, which of the following statements is TRUE?",
    options={
        "A": "The vector changes, but its magnitude remains unchanged",
        "B": "The vector remains completely unchanged",
        "C": "Both the vector and its magnitude change",
        "D": "The magnitude changes, but the vector remains unchanged"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="A vector has two defining characteristics: magnitude and direction. Changing either changes the vector itself. Rotation alters the direction while preserving length (magnitude).",
    given="Vector $\\vec{A}$ rotated by angle $\\theta \\neq 2n\\pi$.",
    formula="$|\\vec{A}'| = |\\vec{A}|$, but $\\vec{A}' \\neq \\vec{A}$ because $\\hat{A}' \\neq \\hat{A}$.",
    steps=(
        "1. The magnitude of the vector depends only on the length of the arrow, which is held constant during rotation.\n"
        "2. The direction of the vector changes by angle $\\theta$.\n"
        "3. Because direction has changed, the vector $\\vec{A}' \\neq \\vec{A}$.\n"
        "4. The change in vector is $\\Delta\\vec{A} = \\vec{A}' - \\vec{A}$, with magnitude $|\\Delta\\vec{A}| = 2A\\sin(\\theta/2) \\neq 0$.\n"
        "5. Hence, the vector changes, but its magnitude remains invariant."
    ),
    tip="Whenever velocity changes direction in uniform circular motion, magnitude (speed) is constant, but velocity vector changes!",
    why_wrong="Option B ignores the change in direction; Option C wrongly claims magnitude changes."
))

# Q024 - Medium
qs.append(make_plane_q(
    num=24,
    question="A vector $\\vec{A}$ of magnitude $A$ is rotated through an angle $\\theta$. What is the magnitude of the change in the vector, $|\\Delta\\vec{A}| = |\\vec{A}' - \\vec{A}|$?",
    options={
        "A": "2A sin(θ / 2)",
        "B": "2A cos(θ / 2)",
        "C": "A sin(θ)",
        "D": "A √2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="The magnitude of difference of two vectors of equal magnitude $A$ inclined at angle $\\theta$ is $|\\Delta\\vec{A}| = 2A\\sin(\\theta/2)$.",
    given="Original vector $\\vec{A}$, rotated vector $\\vec{A}'$, with $|\\vec{A}| = |\\vec{A}'| = A$, angle of rotation $\\theta$.",
    formula="$|\\vec{A}' - \\vec{A}| = \\sqrt{A^2 + A^2 - 2A^2\\cos\\theta} = \\sqrt{2A^2(1 - \\cos\\theta)} = \\sqrt{4A^2\\sin^2(\\theta/2)} = 2A\\sin(\\theta/2)$",
    steps=(
        "1. Using the formula for vector subtraction: $|\\vec{A}' - \\vec{A}|^2 = |\\vec{A}'|^2 + |\\vec{A}|^2 - 2|\\vec{A}'||\\vec{A}|\\cos\\theta$.\n"
        "2. Since $|\\vec{A}'| = |\\vec{A}| = A$, this simplifies to $A^2 + A^2 - 2A^2\\cos\\theta = 2A^2(1 - \\cos\\theta)$.\n"
        "3. Recall the trigonometric half-angle identity: $1 - \\cos\\theta = 2\\sin^2(\\theta/2)$.\n"
        "4. Substitute: $|\\Delta\\vec{A}|^2 = 2A^2 [2\\sin^2(\\theta/2)] = 4A^2\\sin^2(\\theta/2)$.\n"
        "5. Taking square root: $|\\Delta\\vec{A}| = 2A\\sin(\\theta/2)$."
    ),
    tip="Most famous NEET formula for circular motion: Change in velocity in turning by angle $\\theta$ is always $|\Delta\\vec{v}| = 2v\\sin(\\theta/2)$!",
    why_wrong="Option B gives $2A\\cos(\\theta/2)$, which is the magnitude of sum $|\\vec{A} + \\vec{A}'|$."
))

# Q025 - Medium
qs.append(make_plane_q(
    num=25,
    question="A car travels around a circular track of radius R at a constant speed v. When it completes a quarter of a circle (90° turn), what is the magnitude of the change in its velocity vector?",
    options={
        "A": "v √2",
        "B": "v",
        "C": "0",
        "D": "2v"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="For a turn of angle $\\theta = 90^\\circ$ with constant speed $v$, the change in velocity is $|\Delta\\vec{v}| = 2v\\sin(90^\\circ/2) = 2v\\sin 45^\\circ = v\\sqrt{2}$.",
    given="Speed $v_1 = v_2 = v$, angle of turn $\\theta = 90^\\circ$.",
    formula="$|\\Delta\\vec{v}| = \\sqrt{v_x^2 + v_y^2} = \\sqrt{v^2 + v^2} = v\\sqrt{2}$",
    steps=(
        "1. Initially let the car move along $+x$: $\\vec{v}_1 = v \\hat{i}$.\n"
        "2. After turning $90^\\circ$, it moves along $+y$: $\\vec{v}_2 = v \\hat{j}$.\n"
        "3. Change in velocity vector: $\\Delta\\vec{v} = \\vec{v}_2 - \\vec{v}_1 = v \\hat{j} - v \\hat{i}$.\n"
        "4. Magnitude: $|\\Delta\\vec{v}| = \\sqrt{(-v)^2 + v^2} = \\sqrt{2v^2} = v\\sqrt{2}$.\n"
        "5. Alternatively, use formula: $2v\\sin(90^\\circ/2) = 2v\\sin 45^\\circ = 2v(1/\\sqrt{2}) = v\\sqrt{2}$."
    ),
    tip="In uniform circular motion: $90^\\circ$ turn $\\implies |\\Delta\\vec{v}| = v\\sqrt{2}$. $60^\\circ$ turn $\\implies |\\Delta\\vec{v}| = v$. $180^\\circ$ turn $\\implies |\\Delta\\vec{v}| = 2v$.",
    why_wrong="0 is the change in SPEED, not the change in velocity vector!"
))

# Q026 - Medium
qs.append(make_plane_q(
    num=26,
    question="When the coordinate axes are rotated through an angle $\\theta$ in their plane, which of the following physical quantities associated with a vector $\\vec{A}$ remains INVARIANT?",
    options={
        "A": "The magnitude of the vector and the vector itself",
        "B": "The x-component of the vector",
        "C": "The y-component of the vector",
        "D": "The angle made by the vector with the new x-axis"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="Vectors are physical entities independent of the coordinate system chosen to describe them. Under a rotation of axes, the components change ($A_x' \\neq A_x$), but the magnitude $|\\vec{A}| = \\sqrt{A_x^2 + A_y^2}$ and the vector itself are strictly invariant.",
    given="Rotation of Cartesian coordinate axes by angle $\\theta$.",
    formula="$|\\vec{A}'| = \\sqrt{(A_x')^2 + (A_y')^2} = \\sqrt{A_x^2 + A_y^2} = |\\vec{A}|$",
    steps=(
        "1. Rotating axes is an observer's choice of description, not a change in the physical vector in nature.\n"
        "2. The components $A_x$ and $A_y$ transform into $A_x' = A_x\\cos\\theta + A_y\\sin\\theta$ and $A_y' = -A_x\\sin\\theta + A_y\\cos\\theta$.\n"
        "3. However, $(A_x')^2 + (A_y')^2 = A_x^2 + A_y^2$, proving magnitude is invariant.\n"
        "4. The angle with respect to the new axis changes by $\\theta$.\n"
        "5. Thus, the magnitude of the vector remains invariant."
    ),
    tip="Components depend on the choice of coordinate frame; magnitude and dot products are frame-independent invariants!",
    why_wrong="Components $A_x$ and $A_y$ explicitly change when axes are rotated."
))

# Q027 - Medium
qs.append(make_plane_q(
    num=27,
    question="A vector $\\vec{A}$ has magnitude 10 units. Another vector $\\vec{B}$ has magnitude 6 units and is antiparallel to $\\vec{A}$. What is the vector $\\vec{B}$ in terms of $\\vec{A}$?",
    options={
        "A": "-0.6 A⃗",
        "B": "+0.6 A⃗",
        "C": "-1.66 A⃗",
        "D": "-60 A⃗"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="Two antiparallel vectors have unit vectors related by $\\hat{B} = -\\hat{A}$. Therefore, $\\vec{B} = B\\hat{B} = B(-\\hat{A}) = -B(\\vec{A}/A) = -(B/A)\\vec{A}$.",
    given="$A = 10$, $B = 6$, $\\vec{B}$ antiparallel to $\\vec{A}$.",
    formula="$\\vec{B} = -\\frac{B}{A}\\vec{A}$",
    steps=(
        "1. The unit vector along $\\vec{A}$ is $\\hat{A} = \\vec{A}/10$.\n"
        "2. Since $\\vec{B}$ is antiparallel, its unit vector is $\\hat{B} = -\\hat{A} = -\\vec{A}/10$.\n"
        "3. Multiplying by magnitude $B = 6$ gives $\\vec{B} = 6 \\hat{B} = 6(-\\vec{A}/10) = -0.6\\vec{A}$.\n"
        "4. Thus, $\\vec{B} = -0.6\\vec{A}$."
    ),
    tip="Parallel vectors: $\\vec{B} = (B/A)\\vec{A}$. Antiparallel vectors: $\\vec{B} = -(B/A)\\vec{A}$.",
    why_wrong="+0.6 A⃗ would mean the vectors are parallel, not antiparallel."
))

# Q028 - Medium
qs.append(make_plane_q(
    num=28,
    question="Which of the following conditions ensures that two non-zero vectors $\\vec{A}$ and $\\vec{B}$ are collinear (parallel or antiparallel)?",
    options={
        "A": "A⃗ × B⃗ = 0",
        "B": "A⃗ · B⃗ = 0",
        "C": "|A⃗| = |B⃗|",
        "D": "A⃗ + B⃗ = 0"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="Two vectors are collinear if the angle between them is $0^\\circ$ or $180^\\circ$. The cross product magnitude is $|\\vec{A} \\times \\vec{B}| = AB\\sin\\theta$. Since $\\sin 0^\\circ = \\sin 180^\\circ = 0$, $\\vec{A} \\times \\vec{B} = \\vec{0}$.",
    given="Two non-zero vectors $\\vec{A}$ and $\\vec{B}$.",
    formula="$\\vec{A} \\times \\vec{B} = 0 \\iff \\sin\\theta = 0 \\iff \\theta = 0^\\circ \\text{ or } 180^\\circ$",
    steps=(
        "1. Collinear vectors lie along the same straight line or parallel lines.\n"
        "2. The angle $\\theta$ between them is either $0^\\circ$ (parallel) or $180^\\circ$ (antiparallel).\n"
        "3. In both cases, $\\sin\\theta = 0$, which yields $\\vec{A} \\times \\vec{B} = 0$.\n"
        "4. In contrast, $\\vec{A} \\cdot \\vec{B} = 0$ is the condition for orthogonality ($90^\\circ$)."
    ),
    tip="Collinear test: Cross product $= 0$. Perpendicular test: Dot product $= 0$.",
    why_wrong="A⃗ · B⃗ = 0 indicates perpendicular vectors, not collinear."
))

# Q029 - Medium
qs.append(make_plane_q(
    num=29,
    question="A vector $\\vec{A}$ is expressed as $\\vec{A} = 3\\hat{i} - 4\\hat{j}$. What is the unit vector pointing in the direction OPPOSITE to $\\vec{A}$?",
    options={
        "A": "-0.6 î + 0.8 ĵ",
        "B": "-0.6 î - 0.8 ĵ",
        "C": "0.6 î - 0.8 ĵ",
        "D": "-3 î + 4 ĵ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="A unit vector opposite to $\\vec{A}$ is given by $-\\hat{A} = -\\frac{\\vec{A}}{|\\vec{A}|}$.",
    given="$\\vec{A} = 3\\hat{i} - 4\\hat{j}$.",
    formula="$|\\vec{A}| = \\sqrt{3^2 + (-4)^2} = 5$; $-\\hat{A} = -\\frac{3\\hat{i} - 4\\hat{j}}{5} = -0.6\\hat{i} + 0.8\\hat{j}$.",
    steps=(
        "1. Compute the magnitude of $\\vec{A}$: $|\\vec{A}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.\n"
        "2. The unit vector in the direction of $\\vec{A}$ is $\\hat{A} = \\frac{3\\hat{i} - 4\\hat{j}}{5} = 0.6\\hat{i} - 0.8\\hat{j}$.\n"
        "3. The unit vector in the OPPOSITE direction is $-\\hat{A} = -(0.6\\hat{i} - 0.8\\hat{j}) = -0.6\\hat{i} + 0.8\\hat{j}$.\n"
        "4. Verify magnitude: $\\sqrt{(-0.6)^2 + (0.8)^2} = \\sqrt{0.36 + 0.64} = 1$."
    ),
    tip="Always check that the sum of squares of the unit vector components equals 1!",
    why_wrong="Option D has magnitude 5, not 1 (not a unit vector)."
))

# Q030 - Hard
qs.append(make_plane_q(
    num=30,
    question="A vector $\\vec{P}$ is directed at an angle of 30° East of North. What is the standard mathematical representation of $\\vec{P}$ in terms of unit vectors $\\hat{i}$ (East) and $\\hat{j}$ (North)?",
    options={
        "A": "P/2 î + (P√3/2) ĵ",
        "B": "(P√3/2) î + P/2 ĵ",
        "C": "-P/2 î + (P√3/2) ĵ",
        "D": "(P√3/2) î - P/2 ĵ"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector representation and notation",
    concept="In geographic notation, '30° East of North' means you start at North (+$y$ axis) and rotate by $30^\\circ$ towards East (+$x$ axis). Thus, the angle with the North axis is $30^\\circ$, and the angle with the East axis is $90^\\circ - 30^\\circ = 60^\\circ$.",
    given="Magnitude $P$, direction $30^\\circ$ East of North.",
    formula="$P_x = P\\sin(30^\\circ) = P/2$; $P_y = P\\cos(30^\\circ) = P\\sqrt{3}/2$.",
    steps=(
        "1. Identify the reference direction: 'of North' means the angle is measured from the North axis (+y axis).\n"
        "2. The component along North (+y axis) is adjacent to the $30^\\circ$ angle: $P_y = P\\cos 30^\\circ = P\\frac{\\sqrt{3}}{2}$.\n"
        "3. The component along East (+x axis) is opposite to the $30^\\circ$ angle: $P_x = P\\sin 30^\\circ = P\\frac{1}{2}$.\n"
        "4. Both components point in the positive directions (North and East are positive).\n"
        "5. Therefore, $\\vec{P} = P_x\\hat{i} + P_y\\hat{j} = \\frac{P}{2}\\hat{i} + \\frac{P\\sqrt{3}}{2}\\hat{j}$."
    ),
    tip="NEET Trap: '$\\theta$ East of North' $\\implies$ angle with North is $\\theta$. So North gets $\\cos\\theta$ and East gets $\\sin\\theta$!",
    why_wrong="Option B incorrectly measures the angle from the East axis (which would be 30° North of East)."
))

# Q031 - Hard
qs.append(make_plane_q(
    num=31,
    question="A vector $\\vec{A}$ has components $A_x = 3$ and $A_y = 4$. If the coordinate axes are rotated counterclockwise by 37° around the origin, what is the new component $A_x'$ along the new x-axis? (Take sin 37° ≈ 0.6, cos 37° ≈ 0.8)",
    options={
        "A": "4.8",
        "B": "5.0",
        "C": "0.0",
        "D": "1.4"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector representation and notation",
    concept="Under counterclockwise rotation of axes by $\\theta$, the new components are given by $A_x' = A_x\\cos\\theta + A_y\\sin\\theta$ and $A_y' = -A_x\\sin\\theta + A_y\\cos\\theta$.",
    given="$A_x = 3$, $A_y = 4$, $\\theta = 37^\\circ$, $\\cos 37^\\circ = 0.8$, $\\sin 37^\\circ = 0.6$.",
    formula="$A_x' = A_x\\cos\\theta + A_y\\sin\\theta$",
    steps=(
        "1. Write the 2D coordinate rotation transformation formula for components:\n"
        "   $A_x' = A_x\\cos\\theta + A_y\\sin\\theta$\n"
        "2. Substitute the given values:\n"
        "   $A_x' = 3(0.8) + 4(0.6) = 2.4 + 2.4 = 4.8$.\n"
        "3. Let us also calculate $A_y'$ to verify magnitude invariance:\n"
        "   $A_y' = -A_x\\sin\\theta + A_y\\cos\\theta = -3(0.6) + 4(0.8) = -1.8 + 3.2 = 1.4$.\n"
        "4. Check magnitude: $\\sqrt{(4.8)^2 + (1.4)^2} = \\sqrt{23.04 + 1.96} = \\sqrt{25} = 5.0$, which equals the original magnitude $\\sqrt{3^2 + 4^2} = 5.0$!\n"
        "5. Hence, $A_x' = 4.8$."
    ),
    tip="Notice: Before rotation, vector was at $\\alpha = 53^\\circ$. Rotating axes by $37^\\circ$ leaves angle with new x-axis as $53^\\circ - 37^\\circ = 16^\\circ$. $5\\cos 16^\\circ \\approx 4.8$!",
    why_wrong="5.0 is the full magnitude of the vector, not its new x-component."
))

# Q032 - Hard
qs.append(make_plane_q(
    num=32,
    question="In the previous question, what is the new component $A_y'$ along the new y-axis after the 37° rotation?",
    options={
        "A": "1.4",
        "B": "2.4",
        "C": "3.2",
        "D": "0.0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector representation and notation",
    concept="Under counterclockwise rotation of axes by $\\theta$, the new y-component is $A_y' = -A_x\\sin\\theta + A_y\\cos\\theta$.",
    given="$A_x = 3$, $A_y = 4$, $\\theta = 37^\\circ$.",
    formula="$A_y' = -A_x\\sin\\theta + A_y\\cos\\theta$",
    steps=(
        "1. Use the rotation formula for the y-component:\n"
        "   $A_y' = -A_x\\sin 37^\\circ + A_y\\cos 37^\\circ$.\n"
        "2. Substitute $A_x = 3$, $A_y = 4$, $\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$:\n"
        "   $A_y' = -3(0.6) + 4(0.8) = -1.8 + 3.2 = 1.4$.\n"
        "3. Therefore, $A_y' = 1.4$."
    ),
    tip="Remember that rotating the axes counterclockwise effectively rotates the vector clockwise relative to the new axes!",
    why_wrong="3.2 ignores the contribution from $A_x$."
))

# Q033 - Hard
qs.append(make_plane_q(
    num=33,
    question="A vector $\\vec{A}$ has length 6 units. If the coordinate system is inverted such that all coordinate axes reverse their directions ($x \\to -x, y \\to -y, z \\to -z$), how does the vector $\\vec{A}$ transform if it is a polar vector versus if it is an axial vector?",
    options={
        "A": "Polar vector reverses sign (A⃗ → -A⃗); axial vector remains unchanged (A⃗ → A⃗)",
        "B": "Both polar and axial vectors reverse sign",
        "C": "Both polar and axial vectors remain unchanged",
        "D": "Polar vector remains unchanged; axial vector reverses sign"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Vector representation and notation",
    concept="Under space inversion (parity transformation $\\vec{r} \\to -\\vec{r}$), polar vectors (like position, velocity, force) change sign: $\\vec{v} \\to -\\vec{v}$. Axial vectors (like angular momentum $\\vec{L} = \\vec{r} \\times \\vec{p}$, torque $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$) involve the cross product of two polar vectors: $(-\\vec{r}) \\times (-\\vec{p}) = \\vec{r} \\times \\vec{p}$, so they do NOT change sign.",
    given="Coordinate inversion: $\\vec{r} \\to -\\vec{r}$.",
    formula="Polar: $\\vec{V} \\to -\\vec{V}$; Axial: $\\vec{A} = \\vec{V}_1 \\times \\vec{V}_2 \\to (-\\vec{V}_1) \\times (-\\vec{V}_2) = +\\vec{A}$.",
    steps=(
        "1. A polar vector describes translational motion or direct displacement: under inversion of coordinates, all components reverse sign: $(A_x, A_y, A_z) \\to (-A_x, -A_y, -A_z)$, so $\\vec{A} \\to -\\vec{A}$.\n"
        "2. An axial vector (pseudo-vector) is defined via a cross product of two polar vectors: $\\vec{B} = \\vec{C} \\times \\vec{D}$.\n"
        "3. Under inversion, $\\vec{C} \\to -\\vec{C}$ and $\\vec{D} \\to -\\vec{D}$.\n"
        "4. The cross product becomes $(-\\vec{C}) \\times (-\\vec{D}) = (-1)(-1)(\\vec{C} \\times \\vec{D}) = \\vec{B}$.\n"
        "5. Hence, axial vectors do not change sign under parity inversion."
    ),
    tip="Parity rule: Cross product of two polar vectors is always an axial vector (sign invariant under parity)!",
    why_wrong="Option B incorrectly assumes all vectors behave like polar vectors under parity."
))

# Q034 - Medium
qs.append(make_plane_q(
    num=34,
    question="Which of the following representations describes a vector of magnitude 5 pointing towards the North-West direction?",
    options={
        "A": "-5/√2 î + 5/√2 ĵ",
        "B": "5/√2 î + 5/√2 ĵ",
        "C": "-5/√2 î - 5/√2 ĵ",
        "D": "5/√2 î - 5/√2 ĵ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="North-West direction corresponds to an angle of $45^\\circ$ between North (+$y$) and West (-$x$). Thus $A_x = -A\\cos 45^\\circ$ and $A_y = +A\\sin 45^\\circ$.",
    given="Magnitude $A = 5$, direction = North-West.",
    formula="$\\vec{A} = -A\\cos(45^\\circ)\\hat{i} + A\\sin(45^\\circ)\\hat{j}$",
    steps=(
        "1. North-West lies in the second quadrant of the Cartesian plane.\n"
        "2. In the second quadrant, the x-coordinate (West) is negative and the y-coordinate (North) is positive.\n"
        "3. The angle with both the -x axis and +y axis is $45^\\circ$.\n"
        "4. Component along West (-x): $A_x = -5\\cos 45^\\circ = -5/\\sqrt{2}$.\n"
        "5. Component along North (+y): $A_y = +5\\sin 45^\\circ = +5/\\sqrt{2}$.\n"
        "6. Therefore, $\\vec{A} = -\\frac{5}{\\sqrt{2}}\\hat{i} + \\frac{5}{\\sqrt{2}}\\hat{j}$."
    ),
    tip="Quadrant check: North-East = (+, +); North-West = (-, +); South-West = (-, -); South-East = (+, -).",
    why_wrong="Option B is North-East, Option C is South-West, Option D is South-East."
))

# Q035 - Medium
qs.append(make_plane_q(
    num=35,
    question="What is the angle between the vector $\\vec{A} = \\hat{i} + \\hat{j}$ and the vector $\\vec{B} = -\\hat{i} + \\hat{j}$?",
    options={
        "A": "90°",
        "B": "45°",
        "C": "180°",
        "D": "0°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Vector representation and notation",
    concept="The angle $\\theta$ between two vectors is given by $\\cos\\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{A}||\\vec{B}|}$. If the dot product is zero, the angle is $90^\\circ$.",
    given="$\\vec{A} = \\hat{i} + \\hat{j}$, $\\vec{B} = -\\hat{i} + \\hat{j}$.",
    formula="$\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y$",
    steps=(
        "1. Compute the dot product: $\\vec{A} \\cdot \\vec{B} = (1)(-1) + (1)(1) = -1 + 1 = 0$.\n"
        "2. Magnitudes: $|\\vec{A}| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$, $|\\vec{B}| = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}$.\n"
        "3. $\\cos\\theta = \\frac{0}{\\sqrt{2} \\times \\sqrt{2}} = 0$.\n"
        "4. Since $\\cos\\theta = 0$, the angle is $\\theta = 90^\\circ$."
    ),
    tip="Direct visual check: $\\vec{A}$ is along $45^\\circ$ (North-East) and $\\vec{B}$ is along $135^\\circ$ (North-West). The angle between them is $135^\\circ - 45^\\circ = 90^\\circ$!",
    why_wrong="45° is the angle of $\\vec{A}$ with the x-axis, not the angle between $\\vec{A}$ and $\\vec{B}$."
))

# Save Topic 2
with open('scripts/mip_topic2.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 2 generated successfully:", len(qs))
