import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 7: Rectangular components of vectors (Q108 to Q125, 18 questions)
# Difficulties: 5 Easy, 9 Medium, 4 Hard
# ==============================================================================

# Q108 - Easy
qs.append(make_plane_q(
    num=108,
    question="The rectangular components of a vector in a two-dimensional Cartesian plane are oriented at what angle to each other?",
    options={
        "A": "90°",
        "B": "180°",
        "C": "45°",
        "D": "0°"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Rectangular components of vectors",
    concept="By definition, 'rectangular' components are components along mutually perpendicular axes ($90^\\circ$ to each other).",
    given="Definition of rectangular components.",
    formula="Angle between coordinate axes $\\hat{i}$ and $\\hat{j}$ is $90^\\circ$.",
    steps=(
        "1. In a Cartesian coordinate system, the x-axis and y-axis intersect at right angles ($90^\\circ$).\n"
        "2. When a vector is projected along these perpendicular axes, the resulting components are termed 'rectangular components'.\n"
        "3. Hence, the angle between rectangular components is always $90^\\circ$."
    ),
    tip="Rectangular = Orthogonal = Perpendicular = $90^\\circ$!",
    why_wrong="Other angles define oblique (non-rectangular) components."
))

# Q109 - Easy
qs.append(make_plane_q(
    num=109,
    question="A vector $\\vec{A}$ has magnitude $A$. If its angle with the y-axis is $\\beta$, what is its rectangular component along the x-axis?",
    options={
        "A": "A sin β",
        "B": "A cos β",
        "C": "A tan β",
        "D": "A / sin β"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Rectangular components of vectors",
    concept="If angle $\\beta$ is measured from the y-axis, then the component along the y-axis is $A_y = A\\cos\\beta$, and the component along the perpendicular x-axis is $A_x = A\\sin\\beta$.",
    given="Vector magnitude $A$, angle with y-axis $= \\beta$.",
    formula="$A_x = A\\sin\\beta$, $A_y = A\\cos\\beta$",
    steps=(
        "1. The angle with the x-axis is $\\alpha = 90^\\circ - \\beta$.\n"
        "2. The x-component is $A_x = A\\cos\\alpha = A\\cos(90^\\circ - \\beta)$.\n"
        "3. Using the co-function identity: $\\cos(90^\\circ - \\beta) = \\sin\\beta$.\n"
        "4. Therefore, $A_x = A\\sin\\beta$."
    ),
    tip="NEET Trap: Always check WHICH axis the angle is given with! If with y-axis, the x-component gets $\\sin$ and y-component gets $\\cos$!",
    why_wrong="Option B gives the y-component ($A_y = A\\cos\\beta$)."
))

# Q110 - Easy
qs.append(make_plane_q(
    num=110,
    question="What are the rectangular components of a displacement of 50 m in a direction 37° South of East?",
    options={
        "A": "40 m East, 30 m South",
        "B": "30 m East, 40 m South",
        "C": "40 m East, 30 m North",
        "D": "30 m West, 40 m South"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Rectangular components of vectors",
    concept="Angle is $37^\\circ$ from East towards South. Component along East is $50\\cos 37^\\circ = 40\\text{ m}$. Component along South is $50\\sin 37^\\circ = 30\\text{ m}$.",
    given="$s = 50\\text{ m}$, direction $37^\\circ$ South of East, $\\cos 37^\\circ = 0.8$, $\\sin 37^\\circ = 0.6$.",
    formula="$s_{\\text{East}} = 50\\cos 37^\\circ$; $s_{\\text{South}} = 50\\sin 37^\\circ$",
    steps=(
        "1. 'South of East' means the angle is measured from East towards South.\n"
        "2. East component (adjacent): $50\\cos 37^\\circ = 50 \\times 0.8 = 40\\text{ m}$.\n"
        "3. South component (opposite): $50\\sin 37^\\circ = 50 \\times 0.6 = 30\\text{ m}$.\n"
        "4. Check magnitude: $\\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = 50\\text{ m}$."
    ),
    tip="37°-53°-90° triangle has side ratios 3 : 4 : 5. With hypotenuse 50, legs are 30 and 40!",
    why_wrong="Option B swaps East and South (which would be 37° East of South)."
))

# Q111 - Easy
qs.append(make_plane_q(
    num=111,
    question="If a vector has equal rectangular components in a plane ($A_x = A_y$), what angle does it make with the x-axis in the first quadrant?",
    options={
        "A": "45°",
        "B": "30°",
        "C": "60°",
        "D": "90°"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Rectangular components of vectors",
    concept="$\\tan\\theta = \\frac{A_y}{A_x} = 1 \\implies \\theta = 45^\\circ$.",
    given="$A_x = A_y > 0$.",
    formula="$\\tan\\theta = \\frac{A_y}{A_x} = 1$",
    steps=(
        "1. Write the direction formula: $\\tan\\theta = A_y / A_x$.\n"
        "2. Since $A_x = A_y$, the ratio is 1.\n"
        "3. In the first quadrant, $\\tan 45^\\circ = 1$.\n"
        "4. Hence, $\\theta = 45^\\circ$."
    ),
    tip="Equal components in 2D $\\iff$ line of symmetry $y = x \\iff 45^\\circ$.",
    why_wrong="30° has $A_x = \\sqrt{3} A_y$; 60° has $A_y = \\sqrt{3} A_x$."
))

# Q112 - Easy
qs.append(make_plane_q(
    num=112,
    question="A vector $\\vec{A}$ has magnitude 10 units. Can one of its rectangular components be equal to 12 units?",
    options={
        "A": "No, because a rectangular component cannot exceed the total magnitude",
        "B": "Yes, if the other component is negative",
        "C": "Yes, if the other component is imaginary",
        "D": "Yes, if the angle is greater than 90°"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Rectangular components of vectors",
    concept="For real rectangular components, $A^2 = A_x^2 + A_y^2 \\ge A_x^2 \\implies |A_x| \\le A$.",
    given="$A = 10$, candidate component $A_x = 12$.",
    formula="$A_y^2 = A^2 - A_x^2 = 10^2 - 12^2 = -44 < 0$ (impossible for real physics)",
    steps=(
        "1. In Euclidean space, components are real numbers.\n"
        "2. $A^2 = A_x^2 + A_y^2$.\n"
        "3. If $A_x = 12$, then $A_y^2 = 100 - 144 = -44$.\n"
        "4. The square of a real component cannot be negative.\n"
        "5. Therefore, a rectangular component can never exceed the magnitude of the vector."
    ),
    tip="The hypotenuse of a right triangle is always the longest side!",
    why_wrong="Options B, C, and D violate basic real Euclidean geometry."
))

# Q113 - Medium
qs.append(make_plane_q(
    num=113,
    question="A force $\\vec{F}$ of magnitude 50 N acts at an angle of 120° to the positive x-axis. What are its rectangular components $F_x$ and $F_y$?",
    options={
        "A": "Fx = -25 N, Fy = +25√3 N",
        "B": "Fx = +25 N, Fy = -25√3 N",
        "C": "Fx = -25√3 N, Fy = +25 N",
        "D": "Fx = -50 N, Fy = 0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="In the second quadrant ($120^\\circ$): $F_x = F\\cos 120^\\circ = -F/2$ and $F_y = F\\sin 120^\\circ = +F\\sqrt{3}/2$.",
    given="$F = 50\\text{ N}$, $\\theta = 120^\\circ$.",
    formula="$F_x = 50\\cos 120^\\circ$; $F_y = 50\\sin 120^\\circ$",
    steps=(
        "1. Evaluate $\\cos 120^\\circ$: $\\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -1/2$.\n"
        "2. Evaluate $\\sin 120^\\circ$: $\\sin(180^\\circ - 60^\\circ) = +\\sin 60^\\circ = +\\sqrt{3}/2$.\n"
        "3. $F_x = 50 \\times (-1/2) = -25\\text{ N}$.\n"
        "4. $F_y = 50 \\times (+\\sqrt{3}/2) = +25\\sqrt{3}\\text{ N} \\approx +43.3\\text{ N}$.\n"
        "5. Check magnitude: $\\sqrt{(-25)^2 + (25\\sqrt{3})^2} = \\sqrt{625 + 1875} = \\sqrt{2500} = 50\\text{ N}$."
    ),
    tip="Quadrant II: $x$ is always negative, $y$ is always positive!",
    why_wrong="Option C swaps $\\cos$ and $\\sin$ values."
))

# Q114 - Medium
qs.append(make_plane_q(
    num=114,
    question="The rectangular components of a vector $\\vec{A}$ in three dimensions are $A_x = 1, A_y = \\sqrt{2}, A_z = 1$. What are the angles made by $\\vec{A}$ with the x, y, and z axes, respectively?",
    options={
        "A": "60°, 45°, 60°",
        "B": "45°, 60°, 45°",
        "C": "30°, 45°, 30°",
        "D": "60°, 30°, 60°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="Compute total magnitude $A = \\sqrt{A_x^2 + A_y^2 + A_z^2}$, then direction cosines $\\cos\\alpha = A_x/A, \\cos\\beta = A_y/A, \\cos\\gamma = A_z/A$.",
    given="$A_x = 1, A_y = \\sqrt{2}, A_z = 1$.",
    formula="$A = \\sqrt{1 + 2 + 1} = 2$; $\\cos\\alpha = 1/2, \\cos\\beta = \\sqrt{2}/2, \\cos\\gamma = 1/2$",
    steps=(
        "1. Compute magnitude: $A = \\sqrt{1^2 + (\\sqrt{2})^2 + 1^2} = \\sqrt{1 + 2 + 1} = \\sqrt{4} = 2$.\n"
        "2. Direction cosine with x-axis: $\\cos\\alpha = A_x / A = 1/2 \\implies \\alpha = 60^\\circ$.\n"
        "3. Direction cosine with y-axis: $\\cos\\beta = A_y / A = \\sqrt{2}/2 = 1/\\sqrt{2} \\implies \\beta = 45^\\circ$.\n"
        "4. Direction cosine with z-axis: $\\cos\\gamma = A_z / A = 1/2 \\implies \\gamma = 60^\\circ$.\n"
        "5. Angles are $60^\\circ, 45^\\circ, 60^\\circ$."
    ),
    tip="Verify: $\\cos^2 60^\\circ + \\cos^2 45^\\circ + \\cos^2 60^\\circ = 1/4 + 1/2 + 1/4 = 1$. Perfect consistency!",
    why_wrong="Option B swaps the angles for the x and y axes."
))

# Q115 - Medium
qs.append(make_plane_q(
    num=115,
    question="A vector $\\vec{A}$ has rectangular components $A_x$ and $A_y$. If the coordinate axes are rotated by 90° counterclockwise, what are the new components $A_x'$ and $A_y'$?",
    options={
        "A": "Ax' = Ay, Ay' = -Ax",
        "B": "Ax' = -Ay, Ay' = Ax",
        "C": "Ax' = Ax, Ay' = Ay",
        "D": "Ax' = -Ax, Ay' = -Ay"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="Under rotation of axes by $\\theta = 90^\\circ$: $A_x' = A_x\\cos 90^\\circ + A_y\\sin 90^\\circ = A_y$, and $A_y' = -A_x\\sin 90^\\circ + A_y\\cos 90^\\circ = -A_x$.",
    given="Rotation angle $\\theta = 90^\\circ$, $\\cos 90^\\circ = 0$, $\\sin 90^\\circ = 1$.",
    formula="$A_x' = A_x\\cos\\theta + A_y\\sin\\theta$; $A_y' = -A_x\\sin\\theta + A_y\\cos\\theta$",
    steps=(
        "1. Substitute $\\theta = 90^\\circ$ into the standard transformation equations:\n"
        "   $A_x' = A_x\\cos 90^\\circ + A_y\\sin 90^\\circ = A_x(0) + A_y(1) = A_y$.\n"
        "   $A_y' = -A_x\\sin 90^\\circ + A_y\\cos 90^\\circ = -A_x(1) + A_y(0) = -A_x$.\n"
        "2. Check with a simple test vector: let $\\vec{A} = (1, 0)$ (points along original x-axis).\n"
        "   Rotating axes $90^\\circ$ counterclockwise makes the new x-axis point along original +y, and new y-axis along original -x.\n"
        "   Relative to the new axes, $\\vec{A}$ points along the negative new y-axis: $A_x' = 0 = A_y$ and $A_y' = -1 = -A_x$!\n"
        "3. Thus, $A_x' = A_y$ and $A_y' = -A_x$."
    ),
    tip="Rotating the axes counterclockwise by $90^\\circ$ is equivalent to rotating the vector clockwise by $90^\\circ$ relative to the axes!",
    why_wrong="Option B represents rotating the VECTOR counterclockwise, not the coordinate axes."
))

# Q116 - Medium
qs.append(make_plane_q(
    num=116,
    question="A vector $\\vec{A}$ of magnitude 10 makes an angle of 60° with the x-axis and 60° with the y-axis. What must be its component along the z-axis?",
    options={
        "A": "± 5√2",
        "B": "± 5",
        "C": "± 10",
        "D": "0"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="Direction cosines relation: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$. Here $\\cos 60^\\circ = 1/2$, so $(1/2)^2 + (1/2)^2 + \\cos^2\\gamma = 1 \\implies \\cos^2\\gamma = 1/2 \\implies \\cos\\gamma = \\pm 1/\\sqrt{2}$. Then $A_z = A\\cos\\gamma$.",
    given="$A = 10, \\alpha = 60^\\circ, \\beta = 60^\\circ$.",
    formula="$A_z = A\\cos\\gamma = \\pm 10 \\times \\frac{1}{\\sqrt{2}} = \\pm 5\\sqrt{2}$",
    steps=(
        "1. Write the direction cosine condition: $\\cos^2 60^\\circ + \\cos^2 60^\\circ + \\cos^2\\gamma = 1$.\n"
        "2. $1/4 + 1/4 + \\cos^2\\gamma = 1 \\implies 1/2 + \\cos^2\\gamma = 1$.\n"
        "3. $\\cos^2\\gamma = 1/2 \\implies \\cos\\gamma = \\pm \\frac{1}{\\sqrt{2}}$.\n"
        "4. Component along z-axis is $A_z = A\\cos\\gamma = 10 \\times \\left(\\pm \\frac{1}{\\sqrt{2}}\\right) = \\pm \\frac{10\\sqrt{2}}{2} = \\pm 5\\sqrt{2}$.\n"
        "5. Verify: $A_x = 10(1/2) = 5$, $A_y = 5$, $A_z = 5\\sqrt{2}$. Sum of squares: $25 + 25 + 50 = 100 = 10^2$."
    ),
    tip="Always double check that $A_x^2 + A_y^2 + A_z^2 = A^2$!",
    why_wrong="± 5 gives $25 + 25 + 25 = 75 \\neq 100$."
))

# Q117 - Hard
qs.append(make_plane_q(
    num=117,
    question="A vector $\\vec{A}$ has length $L$. It is resolved into three rectangular components $A_x, A_y, A_z$. If $A_x = A_y = A_z$, what is the value of each component in terms of $L$?",
    options={
        "A": "L / √3",
        "B": "L / 3",
        "C": "L / √2",
        "D": "L √3"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Rectangular components of vectors",
    concept="For equal 3D rectangular components: $A_x^2 + A_y^2 + A_z^2 = L^2 \\implies 3 A_x^2 = L^2 \\implies A_x = L/\\sqrt{3}$.",
    given="$A_x = A_y = A_z$, $|\\vec{A}| = L$.",
    formula="$A_x^2 + A_y^2 + A_z^2 = L^2 \\implies 3A_x^2 = L^2 \\implies A_x = \\frac{L}{\\sqrt{3}}$",
    steps=(
        "1. By the 3D Pythagorean theorem: $A_x^2 + A_y^2 + A_z^2 = L^2$.\n"
        "2. Since all three components are equal: $A_x^2 + A_x^2 + A_x^2 = L^2$.\n"
        "3. $3 A_x^2 = L^2$.\n"
        "4. Divide by 3: $A_x^2 = L^2 / 3$.\n"
        "5. Taking positive square root: $A_x = L / \\sqrt{3}$."
    ),
    tip="In $N$ dimensions with equal components: Each component is $L / \\sqrt{N}$! For 2D: $L/\\sqrt{2}$. For 3D: $L/\\sqrt{3}$.",
    why_wrong="L / 3 confuses the square with linear addition ($3 A_x = L$ is wrong for orthogonal vectors)."
))

# Q118 - Hard
qs.append(make_plane_q(
    num=118,
    question="A force $\\vec{F}$ has magnitude 14 N. Its direction cosines are proportional to 2, 3, and 6. What are the rectangular components of $\\vec{F}$?",
    options={
        "A": "4 N, 6 N, 12 N",
        "B": "2 N, 3 N, 6 N",
        "C": "28 N, 42 N, 84 N",
        "D": "7 N, 10.5 N, 21 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Rectangular components of vectors",
    concept="If direction ratios are $a, b, c$, direction cosines are $\\frac{a}{\\sqrt{a^2+b^2+c^2}}, \\frac{b}{\\sqrt{a^2+b^2+c^2}}, \\frac{c}{\\sqrt{a^2+b^2+c^2}}$.",
    given="$F = 14\\text{ N}$, direction ratios $(2, 3, 6)$.",
    formula="$\\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = 7$; $l = 2/7, m = 3/7, n = 6/7$; $F_i = F \\times \\text{dir cosine}$",
    steps=(
        "1. Compute the normalizing factor for the direction ratios:\n"
        "   $\\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.\n"
        "2. The direction cosines are:\n"
        "   $l = \\frac{2}{7}$, $m = \\frac{3}{7}$, $n = \\frac{6}{7}$.\n"
        "3. Compute the rectangular components:\n"
        "   $F_x = F \\times l = 14 \\times \\frac{2}{7} = 4\\text{ N}$.\n"
        "   $F_y = F \\times m = 14 \\times \\frac{3}{7} = 6\\text{ N}$.\n"
        "   $F_z = F \\times n = 14 \\times \\frac{6}{7} = 12\\text{ N}$.\n"
        "4. Check magnitude: $\\sqrt{4^2 + 6^2 + 12^2} = \\sqrt{16 + 36 + 144} = \\sqrt{196} = 14\\text{ N}$."
    ),
    tip="Scaling factor is $F / \\sqrt{\\sum r_i^2} = 14 / 7 = 2$. Multiply each ratio by 2: $(2\\times 2, 3\\times 2, 6\\times 2) = (4, 6, 12)$!",
    why_wrong="Option B has magnitude 7, not 14."
))

# Q119 - Hard
qs.append(make_plane_q(
    num=119,
    question="A vector $\\vec{A}$ has magnitude 10 and is inclined at 30° to the xy-plane. Its projection on the xy-plane makes an angle of 45° with the positive x-axis. What are the three rectangular components of $\\vec{A}$?",
    options={
        "A": "Ax = 5√(3/2), Ay = 5√(3/2), Az = 5",
        "B": "Ax = 5√3, Ay = 5, Az = 5",
        "C": "Ax = 5, Ay = 5, Az = 5√2",
        "D": "Ax = 5√2, Ay = 5√2, Az = 5"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Rectangular components of vectors",
    concept="In spherical coordinates, $A_z = A\\sin\\phi$ (where $\\phi = 30^\\circ$ is elevation angle above xy-plane). The projection on xy-plane is $A_{xy} = A\\cos\\phi$. Then $A_x = A_{xy}\\cos\\theta$ and $A_y = A_{xy}\\sin\\theta$ (where $\\theta = 45^\\circ$ is azimuth).",
    given="$A = 10$, angle with xy-plane $\\phi = 30^\\circ$, angle of projection with x-axis $\\theta = 45^\\circ$.",
    formula="$A_z = 10\\sin 30^\\circ = 5$; $A_{xy} = 10\\cos 30^\\circ = 5\\sqrt{3}$; $A_x = A_{xy}\\cos 45^\\circ = \\frac{5\\sqrt{3}}{\\sqrt{2}} = 5\\sqrt{3/2}$",
    steps=(
        "1. Vertical component along z-axis:\n"
        "   $A_z = A\\sin 30^\\circ = 10 \\times \\frac{1}{2} = 5$.\n"
        "2. Magnitude of horizontal projection on the xy-plane:\n"
        "   $A_{xy} = A\\cos 30^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$.\n"
        "3. Now resolve $A_{xy}$ in the xy-plane at $45^\\circ$ to the x-axis:\n"
        "   $A_x = A_{xy}\\cos 45^\\circ = 5\\sqrt{3} \\times \\frac{1}{\\sqrt{2}} = 5\\sqrt{\\frac{3}{2}}$.\n"
        "   $A_y = A_{xy}\\sin 45^\\circ = 5\\sqrt{3} \\times \\frac{1}{\\sqrt{2}} = 5\\sqrt{\\frac{3}{2}}$.\n"
        "4. Check: $A_x^2 + A_y^2 + A_z^2 = 25(3/2) + 25(3/2) + 25 = 75/2 + 75/2 + 25 = 75 + 25 = 100 = 10^2$."
    ),
    tip="Two-step 3D resolution: (1) Resolve into z-axis and xy-plane. (2) Resolve the xy-plane shadow into x and y axes!",
    why_wrong="Option B forgets to resolve the projection between x and y axes."
))

# Q120 - Hard
qs.append(make_plane_q(
    num=120,
    question="If $\\vec{A} = 2\\hat{i} + 3\\hat{j}$ and $\\vec{B} = 4\\hat{i} - 5\\hat{j}$, what is the rectangular component of the vector $\\vec{C} = 2\\vec{A} - 3\\vec{B}$ along the x-axis?",
    options={
        "A": "-8",
        "B": "+8",
        "C": "+16",
        "D": "-2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Rectangular components of vectors",
    concept="Component-wise linear combination: $C_x = 2 A_x - 3 B_x$.",
    given="$A_x = 2, B_x = 4$.",
    formula="$C_x = 2(2) - 3(4) = 4 - 12 = -8$",
    steps=(
        "1. Identify the x-components of $\\vec{A}$ and $\\vec{B}$:\n"
        "   $A_x = 2$\n"
        "   $B_x = 4$\n"
        "2. Apply the linear scalar combination for the x-component:\n"
        "   $C_x = 2 A_x - 3 B_x$.\n"
        "3. Substitute the values:\n"
        "   $C_x = 2(2) - 3(4) = 4 - 12 = -8$.\n"
        "4. (For completeness, $C_y = 2(3) - 3(-5) = 6 + 15 = 21$).\n"
        "5. The x-component is -8."
    ),
    tip="You do not need to compute the y-component when only the x-component is asked—saves 30 seconds in NEET!",
    why_wrong="+8 misses the negative sign from $4 - 12$."
))

# Q121 - Medium
qs.append(make_plane_q(
    num=121,
    question="A vector $\\vec{A}$ has magnitude 25. Its x-component is 15 and its y-component is positive. If it is in the xy-plane, what is its y-component?",
    options={
        "A": "20",
        "B": "10",
        "C": "12",
        "D": "16"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="$A_y = +\\sqrt{A^2 - A_x^2} = \\sqrt{25^2 - 15^2} = \\sqrt{625 - 225} = \\sqrt{400} = 20$.",
    given="$A = 25, A_x = 15, A_y > 0$.",
    formula="$A_y = \\sqrt{A^2 - A_x^2}$",
    steps=(
        "1. $A_x^2 + A_y^2 = A^2$.\n"
        "2. $15^2 + A_y^2 = 25^2$.\n"
        "3. $225 + A_y^2 = 625$.\n"
        "4. $A_y^2 = 625 - 225 = 400$.\n"
        "5. Since $A_y > 0$, $A_y = +\\sqrt{400} = 20$."
    ),
    tip="Pythagorean triple 3-4-5 scaled by factor 5: $(3\\times 5, 4\\times 5, 5\\times 5) = (15, 20, 25)$!",
    why_wrong="10 is $25 - 15$, which is scalar subtraction, not Pythagorean."
))

# Q122 - Medium
qs.append(make_plane_q(
    num=122,
    question="Which of the following vectors makes equal angles with all three coordinate axes (x, y, and z)?",
    options={
        "A": "î + ĵ + k̂",
        "B": "î + ĵ - k̂",
        "C": "2 î + ĵ + k̂",
        "D": "î + 2 ĵ + 3 k̂"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="For equal angles with positive axes, direction cosines must be identical: $\\cos\\alpha = \\cos\\beta = \\cos\\gamma \\implies A_x = A_y = A_z$.",
    given="Equal angles $\\alpha = \\beta = \\gamma$.",
    formula="$\\cos\\alpha = \\cos\\beta = \\cos\\gamma = 1/\\sqrt{3} \\implies \\vec{A} = c(\\hat{i} + \\hat{j} + \\hat{k})$",
    steps=(
        "1. Equal angles $\\alpha = \\beta = \\gamma$ means $\\cos\\alpha = \\cos\\beta = \\cos\\gamma$.\n"
        "2. From $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$, we get $3\\cos^2\\alpha = 1 \\implies \\cos\\alpha = 1/\\sqrt{3}$.\n"
        "3. The components are $A_x = A\\cos\\alpha, A_y = A\\cos\\beta, A_z = A\\cos\\gamma$.\n"
        "4. Therefore, $A_x = A_y = A_z$.\n"
        "5. The vector $\\hat{i} + \\hat{j} + \\hat{k}$ has $A_x = A_y = A_z = 1$, so it makes equal angles with all three axes."
    ),
    tip="Angle is $\\cos^{-1}(1/\\sqrt{3}) \\approx 54.74^\\circ$ with all three coordinate axes.",
    why_wrong="Option B has an obtuse angle with the z-axis ($180^\\circ - 54.74^\\circ = 125.26^\\circ$)."
))

# Q123 - Medium
qs.append(make_plane_q(
    num=123,
    question="A force $\\vec{F} = 10\\text{ N}$ acts in the direction of the vector $3\\hat{i} + 4\\hat{j}$. What is the rectangular component of $\\vec{F}$ along the x-axis?",
    options={
        "A": "6 N",
        "B": "3 N",
        "C": "8 N",
        "D": "10 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="Find the unit vector $\\hat{u} = \\frac{3\\hat{i} + 4\\hat{j}}{\\sqrt{3^2+4^2}} = \\frac{3\\hat{i} + 4\\hat{j}}{5} = 0.6\\hat{i} + 0.8\\hat{j}$. Then $\\vec{F} = F\\hat{u} = 10(0.6\\hat{i} + 0.8\\hat{j}) = 6\\hat{i} + 8\\hat{j}$.",
    given="Magnitude $F = 10\\text{ N}$, direction vector $\\vec{d} = 3\\hat{i} + 4\\hat{j}$.",
    formula="$\\vec{F} = F \\frac{\\vec{d}}{|\\vec{d}|} = 10 \\left(\\frac{3\\hat{i} + 4\\hat{j}}{5}\\right) = 6\\hat{i} + 8\\hat{j}$",
    steps=(
        "1. Magnitude of the direction vector: $|\\vec{d}| = \\sqrt{3^2 + 4^2} = 5$.\n"
        "2. The unit vector in this direction is $\\hat{u} = \\frac{3}{5}\\hat{i} + \\frac{4}{5}\\hat{j}$.\n"
        "3. Multiply by the force magnitude $F = 10\\text{ N}$:\n"
        "   $\\vec{F} = 10 \\left(\\frac{3}{5}\\hat{i} + \\frac{4}{5}\\hat{j}\\right) = 6\\hat{i} + 8\\hat{j}$.\n"
        "4. The x-component is $F_x = 6\\text{ N}$."
    ),
    tip="Multiply the unit vector by the required magnitude!",
    why_wrong="3 N is the coefficient in the direction vector, not scaled by the magnitude 10 N."
))

# Q124 - Medium
qs.append(make_plane_q(
    num=124,
    question="If the rectangular components of velocity are $v_x = 8\\text{ m/s}$ and $v_y = 6\\text{ m/s}$, what is the angle made by the velocity vector with the y-axis?",
    options={
        "A": "53°",
        "B": "37°",
        "C": "45°",
        "D": "60°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="Angle $\\beta$ with the y-axis is given by $\\tan\\beta = \\frac{v_x}{v_y} = \\frac{8}{6} = \\frac{4}{3} \\implies \\beta = 53^\\circ$.",
    given="$v_x = 8\\text{ m/s}, v_y = 6\\text{ m/s}$.",
    formula="$\\tan\\beta = \\frac{v_x}{v_y} = \\frac{8}{6} = \\frac{4}{3} \\implies \\beta \\approx 53^\\circ$",
    steps=(
        "1. The angle with the x-axis is $\\alpha$: $\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{6}{8} = \\frac{3}{4} \\implies \\alpha = 37^\\circ$.\n"
        "2. The angle with the y-axis is $\\beta = 90^\\circ - \\alpha = 90^\\circ - 37^\\circ = 53^\\circ$.\n"
        "3. Alternatively, directly: $\\tan\\beta = \\frac{v_x}{v_y} = \\frac{8}{6} = \\frac{4}{3}$.\n"
        "4. Since $\\tan 53^\\circ = 4/3$, the angle with the y-axis is $53^\\circ$."
    ),
    tip="NEET Trap: Question asks for angle with Y-AXIS, not x-axis! $37^\\circ$ is with x-axis, $53^\\circ$ is with y-axis.",
    why_wrong="37° is the angle with the x-axis."
))

# Q125 - Medium
qs.append(make_plane_q(
    num=125,
    question="A vector $\\vec{A}$ has magnitude 20 units and points along the negative y-axis. What are its rectangular components $A_x, A_y, A_z$?",
    options={
        "A": "Ax = 0, Ay = -20, Az = 0",
        "B": "Ax = -20, Ay = 0, Az = 0",
        "C": "Ax = 0, Ay = +20, Az = 0",
        "D": "Ax = 0, Ay = 0, Az = -20"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Rectangular components of vectors",
    concept="A vector pointing along $-\\hat{j}$ has $A_x = 0$, $A_y = -A = -20$, and $A_z = 0$.",
    given="Magnitude $A = 20$, direction along negative y-axis ($-\\hat{j}$).",
    formula="$\\vec{A} = -20\\hat{j} = 0\\hat{i} - 20\\hat{j} + 0\\hat{k}$",
    steps=(
        "1. The vector lies purely along the negative y-axis.\n"
        "2. It has no projection on the x-axis ($A_x = 0$) and no projection on the z-axis ($A_z = 0$).\n"
        "3. Its projection on the y-axis is in the negative direction with full magnitude: $A_y = -20$.\n"
        "4. Therefore, $(A_x, A_y, A_z) = (0, -20, 0)$."
    ),
    tip="Vectors lying purely along coordinate axes have all other components equal to zero.",
    why_wrong="Option B places the component along the negative x-axis."
))

# Save Topic 7
with open('scripts/mip_topic7.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 7 generated successfully:", len(qs))
