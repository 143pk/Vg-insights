import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 6: Resolution of vectors into components (Q090 to Q107, 18 questions)
# Difficulties: 4 Easy, 9 Medium, 5 Hard
# ==============================================================================

# Q090 - Easy
qs.append(make_plane_q(
    num=90,
    question="What is meant by the resolution of a vector in physics?",
    options={
        "A": "The process of splitting a single vector into two or more vectors whose combined effect is identical to the original vector",
        "B": "The process of finding the single resultant of multiple vectors",
        "C": "The process of measuring the length of a vector",
        "D": "The process of converting a vector into a scalar"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Resolution of vectors into components",
    concept="Resolution of a vector is the reverse of vector addition: breaking a single vector into components along specified directions such that their vector sum equals the original vector.",
    given="Definition of resolution of a vector.",
    formula="$\\vec{A} = \\vec{A}_1 + \\vec{A}_2 + \\dots + \\vec{A}_n$",
    steps=(
        "1. Vector addition combines multiple vectors into a single resultant vector.\n"
        "2. Resolution is the exact inverse process: taking a single vector and decomposing it into two or more component vectors along different chosen axes.\n"
        "3. When these components are added together according to the laws of vector addition, they reconstruct the original vector exactly.\n"
        "4. Thus, option A defines resolution."
    ),
    tip="Addition = Composition of vectors; Decomposition = Resolution of vectors.",
    why_wrong="Option B describes composition (finding the resultant), which is the opposite of resolution."
))

# Q091 - Easy
qs.append(make_plane_q(
    num=91,
    question="Into how many components can a single vector be resolved in a plane?",
    options={
        "A": "An infinite number of components",
        "B": "Only two components",
        "C": "Only three components",
        "D": "Only rectangular components"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Resolution of vectors into components",
    concept="A vector in a plane can be resolved into two rectangular components along mutually perpendicular axes, but it can be resolved into an infinite number of components along non-perpendicular or multiple arbitrary directions.",
    given="Resolution of a vector in a 2D plane.",
    formula="$\\vec{A} = \\sum_{i=1}^N \\vec{A}_i$ for any $N \\ge 2$.",
    steps=(
        "1. If mutually perpendicular axes are chosen, a 2D vector has uniquely two rectangular components.\n"
        "2. However, the general question asks for ANY components: a vector can be written as the sum of 2, 3, 4, or arbitrarily many vectors forming a closed polygon.\n"
        "3. Even if restricted to two non-parallel directions, infinitely many pairs of directions can be chosen in the plane.\n"
        "4. Hence, a vector can be resolved into an infinite number of components."
    ),
    tip="Rectangular components in a plane = strictly 2. General components in a plane = infinite!",
    why_wrong="Option B is true only for mutually perpendicular (rectangular) components, not general components."
))

# Q092 - Easy
qs.append(make_plane_q(
    num=92,
    question="A force of 100 N acts at an angle of 60° to the horizontal. What are its horizontal and vertical rectangular components?",
    options={
        "A": "50 N horizontal, 50√3 N vertical",
        "B": "50√3 N horizontal, 50 N vertical",
        "C": "50 N horizontal, 50 N vertical",
        "D": "100 N horizontal, 0 N vertical"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Resolution of vectors into components",
    concept="Horizontal component is $F_x = F\\cos\\theta$ and vertical component is $F_y = F\\sin\\theta$.",
    given="$F = 100\\text{ N}$, $\\theta = 60^\\circ$ to horizontal.",
    formula="$F_x = 100\\cos 60^\\circ = 50\\text{ N}$; $F_y = 100\\sin 60^\\circ = 50\\sqrt{3}\\text{ N}$",
    steps=(
        "1. Horizontal component: $F_x = F\\cos 60^\\circ = 100 \\times \\frac{1}{2} = 50\\text{ N}$.\n"
        "2. Vertical component: $F_y = F\\sin 60^\\circ = 100 \\times \\frac{\\sqrt{3}}{2} = 50\\sqrt{3}\\text{ N} \\approx 86.6\\text{ N}$.\n"
        "3. Check: $\\sqrt{F_x^2 + F_y^2} = \\sqrt{50^2 + (50\\sqrt{3})^2} = \\sqrt{2500 + 7500} = \\sqrt{10000} = 100\\text{ N}$."
    ),
    tip="Side adjacent to the angle gets $\\cos$; side opposite gets $\\sin$.",
    why_wrong="Option B swaps the horizontal and vertical components."
))

# Q093 - Easy
qs.append(make_plane_q(
    num=93,
    question="Can the magnitude of a rectangular component of a vector ever be greater than the magnitude of the vector itself?",
    options={
        "A": "No, a rectangular component can never exceed the magnitude of the vector",
        "B": "Yes, if the angle is greater than 45°",
        "C": "Yes, if the vector lies in the second quadrant",
        "D": "Yes, if the vector is a unit vector"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Resolution of vectors into components",
    concept="For rectangular components: $A = \\sqrt{A_x^2 + A_y^2}$. Since $A_x^2, A_y^2 \\ge 0$, it is strictly guaranteed that $|A_x| \\le A$ and $|A_y| \\le A$.",
    given="Rectangular components $A_x = A\\cos\\theta, A_y = A\\sin\\theta$.",
    formula="$|A_x| = A|\\cos\\theta| \\le A$ because $|\\cos\\theta| \\le 1$",
    steps=(
        "1. The components along perpendicular axes are $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$.\n"
        "2. The cosine and sine functions have a maximum absolute value of 1.\n"
        "3. Therefore, $|A_x| = A|\\cos\\theta| \\le A(1) = A$, and $|A_y| = A|\\sin\\theta| \\le A(1) = A$.\n"
        "4. A component equals the vector magnitude only when the vector lies entirely along that axis (e.g. $\\theta = 0^\\circ$).\n"
        "5. It can never exceed the vector's magnitude."
    ),
    tip="Non-rectangular oblique components CAN exceed the magnitude of a vector, but rectangular components NEVER can!",
    why_wrong="Options B, C, and D are geometrically and trigonometrically false."
))

# Q094 - Medium
qs.append(make_plane_q(
    num=94,
    question="A block of mass $m$ is placed on a frictionless incline of angle $\\theta$. What is the component of the gravitational force ($mg$) acting parallel to the inclined plane (pulling the block down)?",
    options={
        "A": "mg sin θ",
        "B": "mg cos θ",
        "C": "mg tan θ",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="Weight $mg$ acts vertically downward. The angle between the downward vertical and the normal to the incline is $\\theta$. Therefore, the normal component is $mg\\cos\\theta$ and the tangential downslope component is $mg\\sin\\theta$.",
    given="Incline angle $\\theta$, gravitational force $\\vec{W} = mg$ vertically downward.",
    formula="$W_{\\parallel} = mg\\sin\\theta$; $W_{\\perp} = mg\\cos\\theta$",
    steps=(
        "1. Set up axes: axis 1 parallel to the incline, axis 2 perpendicular to the incline.\n"
        "2. The incline makes angle $\\theta$ with the horizontal.\n"
        "3. Geometry of right triangles shows that the angle between the downward vertical and the normal to the surface is equal to $\\theta$.\n"
        "4. Component along the normal (perpendicular to surface): $mg\\cos\\theta$.\n"
        "5. Component along the incline (parallel to surface): $mg\\sin\\theta$.\n"
        "6. This downslope component accelerates the block down the incline."
    ),
    tip="Foundational NEET Physics rule: Parallel to incline is ALWAYS $mg\\sin\\theta$; perpendicular to incline is ALWAYS $mg\\cos\\theta$!",
    why_wrong="mg cos θ is perpendicular to the incline (balanced by normal reaction N)."
))

# Q095 - Medium
qs.append(make_plane_q(
    num=95,
    question="A lawn mower is pulled by a handle with a force $F$ at an angle $\\theta$ to the horizontal. Why is pulling a lawn mower easier than pushing it with the same force $F$ at the same angle?",
    options={
        "A": "Pulling provides an upward vertical component (F sin θ) that reduces normal reaction and friction",
        "B": "Pulling increases the horizontal forward force",
        "C": "Pushing reduces the gravitational force",
        "D": "Pulling eliminates friction entirely"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="When pulling, the vertical component $F\\sin\\theta$ acts upward, reducing the normal force to $N = mg - F\\sin\\theta$. When pushing, $F\\sin\\theta$ acts downward, increasing the normal force to $N = mg + F\\sin\\theta$. Since kinetic friction $f = \\mu N$, friction is smaller when pulling.",
    given="Pulling vs pushing with force $F$ at angle $\\theta$ to horizontal.",
    formula="Pulling: $N = mg - F\\sin\\theta$; Pushing: $N = mg + F\\sin\\theta$",
    steps=(
        "1. Resolve the applied force $F$ into horizontal ($F\\cos\\theta$) and vertical components.\n"
        "2. In pulling: the force is directed upward and forward, so vertical component $F\\sin\\theta$ points upward.\n"
        "   Vertical equilibrium: $N + F\\sin\\theta = mg \\implies N = mg - F\\sin\\theta$.\n"
        "3. In pushing: the force is directed downward and forward, so vertical component points downward.\n"
        "   Vertical equilibrium: $N = mg + F\\sin\\theta$.\n"
        "4. Frictional resistance is directly proportional to normal force: $f = \\mu N$.\n"
        "5. Since $N_{\\text{pull}} < N_{\\text{push}}$, friction is smaller during pulling, making pulling easier."
    ),
    tip="Classic NCERT conceptual question: 'It is easier to pull than to push' because pulling reduces normal reaction!",
    why_wrong="Option B is wrong because the horizontal force $F\\cos\\theta$ is identical in both cases."
))

# Q096 - Medium
qs.append(make_plane_q(
    num=96,
    question="A vector $\\vec{A}$ of magnitude 10 is resolved into two non-perpendicular components $\\vec{A}_1$ and $\\vec{A}_2$ making angles of 30° and 45° with $\\vec{A}$ on opposite sides. What is the magnitude of $\\vec{A}_1$?",
    options={
        "A": "10 sin(45°) / sin(75°)",
        "B": "10 sin(30°) / sin(75°)",
        "C": "10 cos(30°)",
        "D": "10 / sin(75°)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="When resolving a vector $\\vec{A}$ into two oblique components making angles $\\alpha$ and $\\beta$ on opposite sides, apply the sine rule on the vector triangle: $\\frac{A_1}{\\sin\\beta} = \\frac{A_2}{\\sin\\alpha} = \\frac{A}{\\sin(\\alpha + \\beta)}$.",
    given="$A = 10$, $\\alpha = 30^\\circ$ (angle of $A_1$), $\\beta = 45^\\circ$ (angle of $A_2$).",
    formula="$A_1 = \\frac{A\\sin\\beta}{\\sin(\\alpha + \\beta)}$; $A_2 = \\frac{A\\sin\\alpha}{\\sin(\\alpha + \\beta)}$",
    steps=(
        "1. Draw the vector triangle: $\\vec{A}_1 + \\vec{A}_2 = \\vec{A}$.\n"
        "2. In this triangle, the angle opposite to $\\vec{A}_1$ is $\\beta = 45^\\circ$.\n"
        "3. The angle opposite to $\\vec{A}_2$ is $\\alpha = 30^\\circ$.\n"
        "4. The angle opposite to the resultant $\\vec{A}$ is $180^\\circ - (\\alpha + \\beta) = 180^\\circ - 75^\\circ$.\n"
        "5. By the Law of Sines:\n"
        "   $\\frac{A_1}{\\sin\\beta} = \\frac{A}{\\sin(180^\\circ - (\\alpha + \\beta))} = \\frac{A}{\\sin(\\alpha + \\beta)}$.\n"
        "6. Substituting $\\beta = 45^\\circ$ and $\\alpha + \\beta = 75^\\circ$:\n"
        "   $A_1 = \\frac{A \\sin 45^\\circ}{\\sin 75^\\circ} = \\frac{10 \\sin 45^\\circ}{\\sin 75^\\circ}$."
    ),
    tip="Oblique components rule: $A_1$ takes the sine of the OTHER angle $\\beta$ in the numerator!",
    why_wrong="Option B uses $\\sin 30^\\circ$, which gives the magnitude of $A_2$, not $A_1$."
))

# Q097 - Medium
qs.append(make_plane_q(
    num=97,
    question="A force of 20 N acts along the positive x-axis. What is its component along a line making an angle of 60° with the x-axis?",
    options={
        "A": "10 N",
        "B": "10√3 N",
        "C": "20 N",
        "D": "5 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="The projection (component) of a vector $\\vec{F}$ along any direction making an angle $\\phi$ with it is simply $F\\cos\\phi$.",
    given="$F = 20\\text{ N}$, angle with the target line $\\phi = 60^\\circ$.",
    formula="$F_{\\text{line}} = F\\cos\\phi = 20\\cos 60^\\circ$",
    steps=(
        "1. The projection of a vector $\\vec{F}$ on a line is the length of its orthogonal shadow on that line.\n"
        "2. This is given by the scalar dot product with the unit vector along the line: $\\vec{F} \\cdot \\hat{u} = F \\cos\\phi$.\n"
        "3. Here $F = 20\\text{ N}$ and $\\phi = 60^\\circ$.\n"
        "4. $F_{\\text{line}} = 20 \\times \\cos 60^\\circ = 20 \\times \\frac{1}{2} = 10\\text{ N}$."
    ),
    tip="The component of ANY vector along a line inclined at angle $\\theta$ to it is always $F\\cos\\theta$.",
    why_wrong="10√3 N is $20\\sin 60^\\circ$, which is perpendicular to the specified line."
))

# Q098 - Hard
qs.append(make_plane_q(
    num=98,
    question="A vector $\\vec{A}$ lies in the xy-plane and makes an angle of 30° with the x-axis. Its x-component is $5\\sqrt{3}$. If the vector is resolved into two non-perpendicular components along axes at 0° and 60° to the x-axis, what are these components?",
    options={
        "A": "5√3 / 3 and 10 / √3",
        "B": "5 and 5",
        "C": "5√3 and 5",
        "D": "10 and 5"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Resolution of vectors into components",
    concept="First find magnitude $A$ from $A_x = A\\cos 30^\\circ \\implies A = 10$. Then resolve $\\vec{A}$ along directions $\\alpha = 30^\\circ$ (axis 1 at $0^\\circ$) and $\\beta = 30^\\circ$ (axis 2 at $60^\\circ$).",
    given="$A_x = 5\\sqrt{3}$ at $30^\\circ$ to x-axis. Target axes at $0^\\circ$ and $60^\\circ$.",
    formula="Sine rule for oblique resolution: $A_1 = \\frac{A\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{10(1/2)}{\\sqrt{3}/2} = \\frac{10}{\\sqrt{3}}$",
    steps=(
        "1. Find magnitude of $\\vec{A}$:\n"
        "   $A\\cos 30^\\circ = 5\\sqrt{3} \\implies A \\left(\\frac{\\sqrt{3}}{2}\\right) = 5\\sqrt{3} \\implies A = 10$.\n"
        "2. The vector $\\vec{A}$ makes $30^\\circ$ with axis 1 (at $0^\\circ$) and $60^\\circ - 30^\\circ = 30^\\circ$ with axis 2 (at $60^\\circ$).\n"
        "3. So $\\alpha = 30^\\circ$ and $\\beta = 30^\\circ$, and total angle between axes is $\\alpha + \\beta = 60^\\circ$.\n"
        "4. By symmetry, the components along both axes are equal:\n"
        "   $A_1 = A_2 = \\frac{A\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{10(1/2)}{\\sqrt{3}/2} = \\frac{10}{\\sqrt{3}} = \\frac{10\\sqrt{3}}{3}$.\n"
        "5. Both components equal $10/\\sqrt{3}$."
    ),
    tip="When the vector exactly bisects the angle between the two axes, the two oblique components must be equal!",
    why_wrong="Option C gives the rectangular components along perpendicular axes ($0^\\circ$ and $90^\\circ$)."
))

# Q099 - Hard
qs.append(make_plane_q(
    num=99,
    question="A force of 60 N is resolved into two components such that one component is 30 N and is perpendicular to the original 60 N force. What is the magnitude of the other component?",
    options={
        "A": "30√5 N",
        "B": "30√3 N",
        "C": "30 N",
        "D": "90 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Resolution of vectors into components",
    concept="If $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$, where $\\vec{F}_1 \\perp \\vec{F}$, then $\\vec{F}$ and $\\vec{F}_1$ are perpendicular legs of a right triangle whose hypotenuse is $\\vec{F}_2$: $F_2 = \\sqrt{F^2 + F_1^2}$.",
    given="Original force $F = 60\\text{ N}$, component $F_1 = 30\\text{ N}$ with $\\vec{F}_1 \\perp \\vec{F}$.",
    formula="$\\vec{F}_2 = \\vec{F} - \\vec{F}_1 \\implies F_2 = \\sqrt{F^2 + F_1^2}$ since $\\vec{F} \\perp \\vec{F}_1$",
    steps=(
        "1. By definition of vector components: $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$.\n"
        "2. Rearrange for the second component: $\\vec{F}_2 = \\vec{F} - \\vec{F}_1$.\n"
        "3. We are given that $\\vec{F}_1$ is perpendicular to $\\vec{F}$, meaning $\\vec{F} \\cdot \\vec{F}_1 = 0$.\n"
        "4. The magnitude of $\\vec{F}_2$ is:\n"
        "   $F_2 = |\\vec{F} - \\vec{F}_1| = \\sqrt{F^2 + F_1^2 - 2\\vec{F}\\cdot\\vec{F}_1} = \\sqrt{F^2 + F_1^2}$.\n"
        "5. Substitute $F = 60\\text{ N}$ and $F_1 = 30\\text{ N}$:\n"
        "   $F_2 = \\sqrt{60^2 + 30^2} = \\sqrt{3600 + 900} = \\sqrt{4500} = \\sqrt{900 \\times 5} = 30\\sqrt{5}\\text{ N}$.\n"
        "6. Thus, $F_2 = 30\\sqrt{5}\\text{ N} \\approx 67.08\\text{ N}$."
    ),
    tip="Careful! A component CAN be larger than the original vector if the components are not mutually perpendicular!",
    why_wrong="30√3 N assumes $F_2^2 = 60^2 - 30^2$, which would make $F$ the hypotenuse instead of $F_2$."
))

# Q100 - Hard
qs.append(make_plane_q(
    num=100,
    question="A vector $\\vec{A}$ has components $A_x = 2$, $A_y = 3$, $A_z = 6$. What is the component of $\\vec{A}$ along the direction of the vector $\\vec{B} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$?",
    options={
        "A": "20 / 3",
        "B": "20 / 7",
        "C": "7",
        "D": "3"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Resolution of vectors into components",
    concept="The scalar component (projection) of vector $\\vec{A}$ along vector $\\vec{B}$ is given by $A_B = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|}$.",
    given="$\\vec{A} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$, $\\vec{B} = 1\\hat{i} + 2\\hat{j} + 2\\hat{k}$.",
    formula="$A_B = \\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|} = \\frac{A_x B_x + A_y B_y + A_z B_z}{\\sqrt{B_x^2 + B_y^2 + B_z^2}}$",
    steps=(
        "1. Calculate the dot product $\\vec{A} \\cdot \\vec{B}$:\n"
        "   $\\vec{A} \\cdot \\vec{B} = (2)(1) + (3)(2) + (6)(2) = 2 + 6 + 12 = 20$.\n"
        "2. Calculate the magnitude of $\\vec{B}$:\n"
        "   $|\\vec{B}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$.\n"
        "3. Compute the projection:\n"
        "   $A_B = \\frac{\\vec{A} \\cdot \\vec{B}}{|\\vec{B}|} = \\frac{20}{3}$.\n"
        "4. Therefore, the component of $\\vec{A}$ along $\\vec{B}$ is $20/3$."
    ),
    tip="Component of $\\vec{A}$ along $\\vec{B}$ is $\\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|}$ (divide by the vector you are projecting ONTO)!",
    why_wrong="Option B divides by $|\\vec{A}| = 7$, which is the component of $\\vec{B}$ along $\\vec{A}$."
))

# Q101 - Hard
qs.append(make_plane_q(
    num=101,
    question="In the previous question, what is the vector component of $\\vec{A}$ perpendicular to $\\vec{B}$?",
    options={
        "A": "A⃗ - (20/9) B⃗",
        "B": "(20/3) B̂",
        "C": "A⃗ + (20/9) B⃗",
        "D": "0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Resolution of vectors into components",
    concept="Any vector can be resolved into parallel and perpendicular parts relative to $\\vec{B}$: $\\vec{A} = \\vec{A}_{\\parallel} + \\vec{A}_{\\perp}$. Therefore, $\\vec{A}_{\\perp} = \\vec{A} - \\vec{A}_{\\parallel} = \\vec{A} - \\left(\\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\right)\\vec{B}$.",
    given="$\\vec{A}$, $\\vec{B}$, $\\vec{A} \\cdot \\vec{B} = 20$, $|\\vec{B}|^2 = 9$.",
    formula="$\\vec{A}_{\\perp} = \\vec{A} - \\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\vec{B}$",
    steps=(
        "1. The vector component of $\\vec{A}$ parallel to $\\vec{B}$ is:\n"
        "   $\\vec{A}_{\\parallel} = A_B \\hat{B} = \\left(\\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|}\\right) \\frac{\\vec{B}}{|\\vec{B}|} = \\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\vec{B}$.\n"
        "2. With $\\vec{A}\\cdot\\vec{B} = 20$ and $|\\vec{B}|^2 = 3^2 = 9$:\n"
        "   $\\vec{A}_{\\parallel} = \\frac{20}{9}\\vec{B}$.\n"
        "3. The perpendicular component is the remainder:\n"
        "   $\\vec{A}_{\\perp} = \\vec{A} - \\vec{A}_{\\parallel} = \\vec{A} - \\frac{20}{9}\\vec{B}$.\n"
        "4. This satisfies $\\vec{A}_{\\perp} \\cdot \\vec{B} = \\vec{A}\\cdot\\vec{B} - \\frac{20}{9}(\\vec{B}\\cdot\\vec{B}) = 20 - \\frac{20}{9}(9) = 0$."
    ),
    tip="Gram-Schmidt orthogonalization: $\\vec{A}_{\\perp} = \\vec{A} - \\frac{\\vec{A}\\cdot\\vec{B}}{|\\vec{B}|^2}\\vec{B}$ is guaranteed to be perpendicular to $\\vec{B}$!",
    why_wrong="Option B is the parallel component $\\vec{A}_{\\parallel}$."
))

# Q102 - Medium
qs.append(make_plane_q(
    num=102,
    question="A force $\\vec{F} = (4\\hat{i} + 3\\hat{j})\\text{ N}$ acts on a particle. What is the component of this force along the line $y = x$?",
    options={
        "A": "7 / √2 N",
        "B": "1 / √2 N",
        "C": "5 N",
        "D": "7 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="The line $y = x$ makes an angle of $45^\\circ$ with the x-axis. Its unit vector is $\\hat{u} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$. The component is $\\vec{F} \\cdot \\hat{u}$.",
    given="$\\vec{F} = 4\\hat{i} + 3\\hat{j}$, target line $y = x$.",
    formula="$F_{\\text{line}} = \\vec{F} \\cdot \\hat{u} = (4\\hat{i} + 3\\hat{j}) \\cdot \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$",
    steps=(
        "1. The unit vector along the line $y = x$ is $\\hat{u} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{1^2 + 1^2}} = \\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}$.\n"
        "2. The component along the line is the dot product:\n"
        "   $F_{\\text{line}} = \\vec{F} \\cdot \\hat{u} = (4\\hat{i} + 3\\hat{j}) \\cdot \\left(\\frac{\\hat{i} + \\hat{j}}{\\sqrt{2}}\\right)$.\n"
        "3. $F_{\\text{line}} = \\frac{(4)(1) + (3)(1)}{\\sqrt{2}} = \\frac{4 + 3}{\\sqrt{2}} = \\frac{7}{\\sqrt{2}}\\text{ N}$.\n"
        "4. This can also be written as $3.5\\sqrt{2}\\text{ N} \\approx 4.95\\text{ N}$."
    ),
    tip="To find component along any line $a x + b y = 0$, construct unit vector along the line and take dot product!",
    why_wrong="5 N is the total magnitude of $\\vec{F}$, not its projection on $y = x$."
))

# Q103 - Medium
qs.append(make_plane_q(
    num=103,
    question="A heavy uniform sphere of mass $M$ rests between two smooth inclined planes making angles of 30° and 60° with the horizontal. What is the normal reaction exerted by the 30° incline on the sphere?",
    options={
        "A": "Mg cos(30°) = Mg√3 / 2",
        "B": "Mg sin(30°) = Mg / 2",
        "C": "Mg",
        "D": "Mg / √3"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="The two inclines are mutually perpendicular ($30^\\circ + 60^\\circ = 90^\\circ$). In this rotated coordinate frame, the normal reactions $N_1$ and $N_2$ are perpendicular and balance the resolved components of weight $Mg$.",
    given="Incline angles $\\theta_1 = 30^\\circ$, $\\theta_2 = 60^\\circ$, weight $W = Mg$.",
    formula="$N_1 = Mg\\cos 30^\\circ = Mg\\frac{\\sqrt{3}}{2}$; $N_2 = Mg\\cos 60^\\circ = Mg\\frac{1}{2}$",
    steps=(
        "1. The surfaces are inclined at $30^\\circ$ and $60^\\circ$, so the angle between the two surfaces is $180^\\circ - (30^\\circ + 60^\\circ) = 90^\\circ$.\n"
        "2. Their normal reactions $N_1$ and $N_2$ are therefore mutually perpendicular ($90^\\circ$).\n"
        "3. Resolving the vertical weight $Mg$ along the normal directions:\n"
        "   $N_1 = Mg\\cos 30^\\circ = Mg\\frac{\\sqrt{3}}{2}$.\n"
        "   $N_2 = Mg\\cos 60^\\circ = Mg\\frac{1}{2}$.\n"
        "4. Check equilibrium: $N_1^2 + N_2^2 = (Mg)^2 (3/4 + 1/4) = (Mg)^2$, exactly balancing weight!\n"
        "5. Reaction from the $30^\\circ$ incline is $Mg\\frac{\\sqrt{3}}{2}$."
    ),
    tip="Whenever two supporting surfaces are perpendicular ($30^\\circ + 60^\\circ = 90^\\circ$), normal reactions are simply $Mg\\cos\\theta_1$ and $Mg\\cos\\theta_2$!",
    why_wrong="Mg / 2 is the normal reaction from the 60° incline."
))

# Q104 - Medium
qs.append(make_plane_q(
    num=104,
    question="A vector $\\vec{A}$ has magnitude 10 and is inclined at 45° to the x-axis in the first quadrant. If its x-axis is tilted upwards by 15° (new x'-axis at 15° to original x-axis), what are the components of $\\vec{A}$ in the new coordinate system?",
    options={
        "A": "5√3 along x' and 5 along y'",
        "B": "5 along x' and 5√3 along y'",
        "C": "5√2 along x' and 5√2 along y'",
        "D": "10 along x' and 0 along y'"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="In the new coordinate frame, the angle between vector $\\vec{A}$ and the new x'-axis is $\\theta' = 45^\\circ - 15^\\circ = 30^\\circ$. New components are $A_{x'} = A\\cos 30^\\circ$ and $A_{y'} = A\\sin 30^\\circ$.",
    given="$A = 10$, original angle $= 45^\\circ$, axis rotated by $+15^\\circ$.",
    formula="$A_{x'} = 10\\cos(30^\\circ) = 5\\sqrt{3}$; $A_{y'} = 10\\sin(30^\\circ) = 5$",
    steps=(
        "1. The original vector makes $45^\\circ$ with the horizontal.\n"
        "2. The new x'-axis makes $15^\\circ$ with the horizontal.\n"
        "3. Therefore, the angle between the vector and the new x'-axis is:\n"
        "   $\\theta' = 45^\\circ - 15^\\circ = 30^\\circ$.\n"
        "4. Component along new x'-axis:\n"
        "   $A_{x'} = 10\\cos 30^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$.\n"
        "5. Component along new y'-axis:\n"
        "   $A_{y'} = 10\\sin 30^\\circ = 10 \\times \\frac{1}{2} = 5$."
    ),
    tip="Relative angle rule: Angle with new axis = Original angle - Axis rotation angle!",
    why_wrong="Option C gives the components in the original untilted coordinate frame ($10/\\sqrt{2} = 5\\sqrt{2}$)."
))

# Q105 - Medium
qs.append(make_plane_q(
    num=105,
    question="What is the component of the velocity vector $\\vec{v} = (20\\hat{i} + 30\\hat{j})\\text{ m/s}$ in the direction of the vector $\\vec{u} = 4\\hat{i} + 3\\hat{j}$?",
    options={
        "A": "34 m/s",
        "B": "170 m/s",
        "C": "25 m/s",
        "D": "17 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="Component of $\\vec{v}$ along $\\vec{u}$ is $\\frac{\\vec{v} \\cdot \\vec{u}}{|\\vec{u}|}$.",
    given="$\\vec{v} = 20\\hat{i} + 30\\hat{j}$, $\\vec{u} = 4\\hat{i} + 3\\hat{j}$.",
    formula="$v_u = \\frac{20(4) + 30(3)}{\\sqrt{4^2 + 3^2}} = \\frac{80 + 90}{5} = \\frac{170}{5} = 34\\text{ m/s}$",
    steps=(
        "1. Compute the dot product: $\\vec{v} \\cdot \\vec{u} = (20)(4) + (30)(3) = 80 + 90 = 170$.\n"
        "2. Compute the magnitude of $\\vec{u}$: $|\\vec{u}| = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\n"
        "3. Divide the dot product by the magnitude: $\\frac{170}{5} = 34\\text{ m/s}$.\n"
        "4. Hence, the component is 34 m/s."
    ),
    tip="Don't forget to divide by the magnitude of the target vector! 170 is the raw dot product.",
    why_wrong="170 m/s forgets to divide by $|\\vec{u}| = 5$."
))

# Q106 - Medium
qs.append(make_plane_q(
    num=106,
    question="A rope pulls a sled with force $T = 50\\text{ N}$ at an angle of 37° above the horizontal. If the sled moves horizontally by 10 m, what is the effective work done by the rope?",
    options={
        "A": "400 J",
        "B": "300 J",
        "C": "500 J",
        "D": "350 J"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="Only the component of force parallel to the displacement does work: $W = F_x d = (T\\cos\\theta) d$.",
    given="$T = 50\\text{ N}$, $\\theta = 37^\\circ$, displacement $d = 10\\text{ m}$, $\\cos 37^\\circ = 0.8$.",
    formula="$W = T d \\cos\\theta = 50 \\times 10 \\times 0.8$",
    steps=(
        "1. The vertical component $T\\sin 37^\\circ = 50(0.6) = 30\\text{ N}$ is perpendicular to horizontal displacement and does ZERO work.\n"
        "2. The horizontal component of tension is $T_x = T\\cos 37^\\circ = 50 \\times 0.8 = 40\\text{ N}$.\n"
        "3. Work done = Force component along displacement $\\times$ displacement:\n"
        "   $W = T_x \\times d = 40\\text{ N} \\times 10\\text{ m} = 400\\text{ J}$."
    ),
    tip="Components perpendicular to motion do NO work! Only the resolved parallel component contributes.",
    why_wrong="500 J assumes force is fully along displacement (cos 0° = 1)."
))

# Q107 - Medium
qs.append(make_plane_q(
    num=107,
    question="The x and y components of a force $\\vec{F}$ are 12 N and -5 N respectively. What is the magnitude of $\\vec{F}$ and which quadrant does it point into?",
    options={
        "A": "13 N, Fourth quadrant",
        "B": "13 N, Second quadrant",
        "C": "17 N, Fourth quadrant",
        "D": "7 N, First quadrant"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Resolution of vectors into components",
    concept="Magnitude is $\\sqrt{F_x^2 + F_y^2} = \\sqrt{12^2 + (-5)^2} = 13\\text{ N}$. Since $F_x > 0$ and $F_y < 0$, it lies in the fourth quadrant.",
    given="$F_x = +12\\text{ N}$, $F_y = -5\\text{ N}$.",
    formula="$|\\vec{F}| = \\sqrt{12^2 + (-5)^2} = \\sqrt{144 + 25} = 13\\text{ N}$; signs (+, -) $\\implies$ Quadrant IV.",
    steps=(
        "1. Calculate magnitude: $|\\vec{F}| = \\sqrt{12^2 + (-5)^2} = \\sqrt{169} = 13\\text{ N}$.\n"
        "2. Analyze coordinate signs:\n"
        "   - $F_x = +12 > 0$ (points right)\n"
        "   - $F_y = -5 < 0$ (points down)\n"
        "3. A point with $(+x, -y)$ lies in the fourth quadrant.\n"
        "4. Angle with positive x-axis is $\\theta = -\\tan^{-1}(5/12) \\approx -22.6^\\circ$ or $337.4^\\circ$."
    ),
    tip="Quadrant sign convention:\nQI: (+, +)\nQII: (-, +)\nQIII: (-, -)\nQIV: (+, -)",
    why_wrong="Second quadrant has $(-x, +y)$."
))

# Save Topic 6
with open('scripts/mip_topic6.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 6 generated successfully:", len(qs))
