import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 9: Position and displacement vectors in two dimensions (Q144 to Q161, 18 questions)
# Difficulties: 4 Easy, 10 Medium, 4 Hard
# ==============================================================================

# Q144 - Easy
qs.append(make_plane_q(
    num=144,
    question="A particle moves from point A(2, 3) to point B(5, 7) in the xy-plane (coordinates in meters). What is the displacement vector $\\Delta\\vec{r}$ of the particle?",
    options={
        "A": "3 î + 4 ĵ m",
        "B": "7 î + 10 ĵ m",
        "C": "-3 î - 4 ĵ m",
        "D": "5 î + 7 ĵ m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position and displacement vectors in two dimensions",
    concept="Displacement vector is defined as change in position vector: $\\Delta\\vec{r} = \\vec{r}_B - \\vec{r}_A = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j}$.",
    given="Initial point $A(2, 3)$, final point $B(5, 7)$.",
    formula="$\\Delta\\vec{r} = (x_2 - x_1)\\hat{i} + (y_2 - y_1)\\hat{j}$",
    steps=(
        "1. Identify coordinates: $x_1 = 2, y_1 = 3$ and $x_2 = 5, y_2 = 7$.\n"
        "2. Compute changes along each axis:\n"
        "   $\\Delta x = x_2 - x_1 = 5 - 2 = 3\\text{ m}$\n"
        "   $\\Delta y = y_2 - y_1 = 7 - 3 = 4\\text{ m}$\n"
        "3. Combine into displacement vector: $\\Delta\\vec{r} = 3\\hat{i} + 4\\hat{j}\\text{ m}$."
    ),
    tip="Displacement is always FINAL position minus INITIAL position!",
    why_wrong="Option B adds the coordinates instead of subtracting; Option C is $\\vec{r}_A - \\vec{r}_B$."
))

# Q145 - Easy
qs.append(make_plane_q(
    num=145,
    question="In the previous question, what is the magnitude of the displacement of the particle?",
    options={
        "A": "5 m",
        "B": "7 m",
        "C": "1 m",
        "D": "25 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position and displacement vectors in two dimensions",
    concept="The magnitude of displacement is the straight-line distance: $|\\Delta\\vec{r}| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$.",
    given="$\\Delta x = 3\\text{ m}$, $\\Delta y = 4\\text{ m}$.",
    formula="$|\\Delta\\vec{r}| = \\sqrt{3^2 + 4^2} = 5\\text{ m}$",
    steps=(
        "1. From the displacement vector $\\Delta\\vec{r} = 3\\hat{i} + 4\\hat{j}$:\n"
        "   $|\\Delta\\vec{r}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ m}$.\n"
        "2. This is the shortest straight-line distance between point A and point B."
    ),
    tip="Pythagorean triple (3, 4, 5) gives magnitude 5 m instantly.",
    why_wrong="7 m is the taxi-cab distance $\\Delta x + \\Delta y = 3 + 4$."
))

# Q146 - Easy
qs.append(make_plane_q(
    num=146,
    question="The position vector of a particle is given by $\\vec{r}(t) = (4t)\\hat{i} + (3t^2)\\hat{j}$ (in SI units). What is the position vector of the particle at t = 2 s?",
    options={
        "A": "8 î + 12 ĵ m",
        "B": "4 î + 3 ĵ m",
        "C": "8 î + 6 ĵ m",
        "D": "16 î + 12 ĵ m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position and displacement vectors in two dimensions",
    concept="Substitute time $t = 2\\text{ s}$ directly into the position vector equation $\\vec{r}(t)$.",
    given="$\\vec{r}(t) = (4t)\\hat{i} + (3t^2)\\hat{j}$, $t = 2\\text{ s}$.",
    formula="$\\vec{r}(2) = 4(2)\\hat{i} + 3(2^2)\\hat{j}$",
    steps=(
        "1. Compute x-component at $t = 2$: $x(2) = 4(2) = 8\\text{ m}$.\n"
        "2. Compute y-component at $t = 2$: $y(2) = 3(2^2) = 3(4) = 12\\text{ m}$.\n"
        "3. Combine: $\\vec{r}(2) = 8\\hat{i} + 12\\hat{j}\\text{ m}$."
    ),
    tip="Just substitute the value of $t$ into each component.",
    why_wrong="Option C forgets to square $t$ in the y-component ($3 \\times 2 = 6$ instead of $3 \\times 4 = 12$)."
))

# Q147 - Easy
qs.append(make_plane_q(
    num=147,
    question="In the previous question, what is the displacement of the particle between t = 0 and t = 2 s?",
    options={
        "A": "8 î + 12 ĵ m",
        "B": "4 î + 6 ĵ m",
        "C": "8 î + 6 ĵ m",
        "D": "0 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position and displacement vectors in two dimensions",
    concept="Displacement is $\\Delta\\vec{r} = \\vec{r}(2) - \\vec{r}(0)$. Since the particle starts at the origin $\\vec{r}(0) = 0\\hat{i} + 0\\hat{j}$, displacement equals the position vector at $t = 2\\text{ s}$.",
    given="$\\vec{r}(2) = 8\\hat{i} + 12\\hat{j}$, $\\vec{r}(0) = 0\\hat{i} + 0\\hat{j}$.",
    formula="$\\Delta\\vec{r} = \\vec{r}(2) - \\vec{r}(0) = 8\\hat{i} + 12\\hat{j}$",
    steps=(
        "1. Position at $t = 0$: $\\vec{r}(0) = 4(0)\\hat{i} + 3(0)^2\\hat{j} = 0\\hat{i} + 0\\hat{j}$.\n"
        "2. Position at $t = 2$: $\\vec{r}(2) = 8\\hat{i} + 12\\hat{j}$.\n"
        "3. Displacement: $\\Delta\\vec{r} = \\vec{r}(2) - \\vec{r}(0) = (8 - 0)\\hat{i} + (12 - 0)\\hat{j} = 8\\hat{i} + 12\\hat{j}\\text{ m}$."
    ),
    tip="When an object starts from the origin, position vector and displacement vector are IDENTICAL!",
    why_wrong="Option B divides the displacement by 2 (which would relate to average velocity, not displacement)."
))

# Q148 - Medium
qs.append(make_plane_q(
    num=148,
    question="A particle moves along a circular path of radius R with constant speed. What is the magnitude of its displacement when it moves through an angular displacement of 60°?",
    options={
        "A": "R",
        "B": "R √2",
        "C": "R √3",
        "D": "2R"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="For a particle on a circle of radius $R$ turning through angle $\\theta$, the chord length (magnitude of displacement) is $|\\Delta\\vec{r}| = 2R\\sin(\\theta/2)$.",
    given="Radius $R$, angle $\\theta = 60^\\circ$.",
    formula="$|\\Delta\\vec{r}| = 2R\\sin(\\theta/2) = 2R\\sin 30^\\circ = 2R(1/2) = R$",
    steps=(
        "1. The initial position vector has length $R$ and final position vector has length $R$.\n"
        "2. The angle between them at the center of the circle is $\\theta = 60^\\circ$.\n"
        "3. In the triangle formed by the center and the two positions, two sides are equal to $R$.\n"
        "4. Since the vertex angle is $60^\\circ$, the remaining two angles are $(180^\\circ - 60^\\circ)/2 = 60^\\circ$.\n"
        "5. The triangle is equilateral, so the third side (displacement) is also exactly equal to $R$."
    ),
    tip="General circular displacement chord formula: $\\Delta r = 2R\\sin(\\theta/2)$. Memorize this for NEET!",
    why_wrong="R √2 is the displacement for a 90° turn."
))

# Q149 - Medium
qs.append(make_plane_q(
    num=149,
    question="A particle moves along a circle of radius R. What is the ratio of distance traveled to the magnitude of displacement when it completes half a revolution?",
    options={
        "A": "π / 2",
        "B": "π",
        "C": "2 / π",
        "D": "2π"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="In half a revolution, path length (distance) is half the circumference: $s = \\pi R$. Displacement is the diameter connecting opposite points: $|\\Delta\\vec{r}| = 2R$.",
    given="Half revolution on circle of radius $R$.",
    formula="$\\text{Distance} = \\pi R$; $\\text{Displacement} = 2R$; $\\text{Ratio} = \\frac{\\pi R}{2R} = \\frac{\\pi}{2}$",
    steps=(
        "1. Distance is the actual curved path length along the semicircle: $s = \\frac{1}{2}(2\\pi R) = \\pi R$.\n"
        "2. Displacement is the straight-line distance from starting point to the diametrically opposite point: $d = 2R$.\n"
        "3. Ratio of distance to displacement = $\\frac{\\pi R}{2R} = \\frac{\\pi}{2} \\approx 1.57$."
    ),
    tip="Since straight line is the shortest path, Distance / Displacement $\\ge 1$. Here $\\pi/2 \\approx 1.57 > 1$.",
    why_wrong="Option C inverts the ratio (displacement / distance)."
))

# Q150 - Medium
qs.append(make_plane_q(
    num=150,
    question="The position vector of a particle is given by $\\vec{r}(t) = (3t^2 - 6t)\\hat{i} + (4t)\\hat{j}$. At what time t is the position vector perpendicular to the acceleration vector?",
    options={
        "A": "1 s",
        "B": "2 s",
        "C": "0.5 s",
        "D": "At no time t > 0"
    },
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="Differentiate $\\vec{r}(t)$ twice to find acceleration $\\vec{a}(t)$. Condition for perpendicularity is $\\vec{r}(t) \\cdot \\vec{a}(t) = 0$.",
    given="$\\vec{r}(t) = (3t^2 - 6t)\\hat{i} + 4t\\hat{j}$.",
    formula="$\\vec{v} = \\frac{d\\vec{r}}{dt} = (6t - 6)\\hat{i} + 4\\hat{j}$; $\\vec{a} = \\frac{d\\vec{v}}{dt} = 6\\hat{i} + 0\\hat{j}$; $\\vec{r} \\cdot \\vec{a} = 0$",
    steps=(
        "1. Velocity: $\\vec{v}(t) = \\frac{d}{dt}[(3t^2 - 6t)\\hat{i} + 4t\\hat{j}] = (6t - 6)\\hat{i} + 4\\hat{j}$.\n"
        "2. Acceleration: $\\vec{a}(t) = \\frac{d}{dt}[(6t - 6)\\hat{i} + 4\\hat{j}] = 6\\hat{i} + 0\\hat{j}$.\n"
        "3. Compute dot product $\\vec{r}(t) \\cdot \\vec{a}(t)$:\n"
        "   $\\vec{r} \\cdot \\vec{a} = (3t^2 - 6t)(6) + (4t)(0) = 18t^2 - 36t$.\n"
        "4. Set dot product to zero for orthogonality:\n"
        "   $18t(t - 2) = 0$ (wait, let's recheck! $18t^2 - 36t = 0 \\implies 18t(t - 2) = 0 \\implies t = 2\\text{ s}$ or $t = 0$!).\n"
        "   Wait, let's check: at $t = 2$: $x = 3(4) - 12 = 0$, so $\\vec{r} = 0\\hat{i} + 8\\hat{j}$, which is along y-axis! And $\\vec{a} = 6\\hat{i}$ is along x-axis! Wow, they are perpendicular at $t = 2\\text{ s}$!\n"
        "   Wait, let's check options: Option B is 2 s! Let's set correct_opt to B!",
    ),
    correct_opt="B",
    tip="Notice: $\\vec{a} = 6\\hat{i}$ is strictly along the x-axis, so $\\vec{r} \\perp \\vec{a}$ occurs whenever $\\vec{r}$ has ZERO x-component ($x(t) = 0$)! $3t^2 - 6t = 0 \\implies t = 2\\text{ s}$!",
    why_wrong="1 s is when velocity is perpendicular to acceleration ($6t - 6 = 0 \\implies t = 1\\text{ s}$), not position vector."
))

# Q151 - Medium
qs.append(make_plane_q(
    num=151,
    question="In the previous question, at what time t is the VELOCITY vector perpendicular to the acceleration vector?",
    options={
        "A": "1 s",
        "B": "2 s",
        "C": "0 s",
        "D": "1.5 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="Condition for velocity perpendicular to acceleration: $\\vec{v} \\cdot \\vec{a} = 0$. Since $\\vec{a} = 6\\hat{i}$, this requires $v_x = 0$.",
    given="$\\vec{v}(t) = (6t - 6)\\hat{i} + 4\\hat{j}$, $\\vec{a} = 6\\hat{i}$.",
    formula="$\\vec{v} \\cdot \\vec{a} = (6t - 6)(6) + 4(0) = 0 \\implies 6t - 6 = 0 \\implies t = 1\\text{ s}$",
    steps=(
        "1. From previous calculation, $\\vec{v}(t) = (6t - 6)\\hat{i} + 4\\hat{j}$.\n"
        "2. Acceleration $\\vec{a} = 6\\hat{i}$.\n"
        "3. Dot product: $\\vec{v} \\cdot \\vec{a} = (6t - 6)(6) = 36(t - 1) = 0$.\n"
        "4. Solving gives $t - 1 = 0 \\implies t = 1\\text{ s}$.\n"
        "5. At $t = 1\\text{ s}$, $v_x = 0$ and $\\vec{v} = 4\\hat{j}$, which is perpendicular to $\\vec{a} = 6\\hat{i}$."
    ),
    tip="At the turning point of 1D horizontal motion ($v_x = 0$), horizontal velocity is zero, so total velocity is purely vertical!",
    why_wrong="2 s is when position vector is perpendicular to acceleration."
))

# Q152 - Medium
qs.append(make_plane_q(
    num=152,
    question="A particle moves in the xy-plane according to $x(t) = a\\sin(\\omega t)$ and $y(t) = a(1 - \\cos(\\omega t))$. What is the trajectory of the particle?",
    options={
        "A": "A circle of radius a centered at (0, a)",
        "B": "A circle of radius a centered at the origin (0, 0)",
        "C": "A parabola opening along the y-axis",
        "D": "An ellipse with semi-major axis 2a"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="Eliminate the parameter $t$ using the identity $\\sin^2(\\omega t) + \\cos^2(\\omega t) = 1$.",
    given="$x = a\\sin(\\omega t)$, $y = a(1 - \\cos(\\omega t)) = a - a\\cos(\\omega t)$.",
    formula="$x^2 + (y - a)^2 = a^2\\sin^2(\\omega t) + a^2\\cos^2(\\omega t) = a^2$",
    steps=(
        "1. From $x = a\\sin(\\omega t)$, we have $\\frac{x}{a} = \\sin(\\omega t)$.\n"
        "2. From $y = a - a\\cos(\\omega t)$, we have $y - a = -a\\cos(\\omega t) \\implies \\frac{y - a}{a} = -\\cos(\\omega t)$.\n"
        "3. Square and add both equations:\n"
        "   $\\left(\\frac{x}{a}\\right)^2 + \\left(\\frac{y - a}{a}\\right)^2 = \\sin^2(\\omega t) + \\cos^2(\\omega t) = 1$.\n"
        "4. Multiply by $a^2$:\n"
        "   $x^2 + (y - a)^2 = a^2$.\n"
        "5. This is the standard Cartesian equation of a circle of radius $a$ with center at $(0, a)$."
    ),
    tip="Whenever you see $x = a\\sin\\omega t$ and $y = a - a\\cos\\omega t$, shift center to $(0, a)$ to get a circle of radius $a$!",
    why_wrong="Option B has center at (0, 0), which would require $y = a\\cos\\omega t$."
))

# Q153 - Hard
qs.append(make_plane_q(
    num=153,
    question="For the particle in the previous question with $x(t) = a\\sin(\\omega t)$ and $y(t) = a(1 - \\cos(\\omega t))$, what is the distance traveled by the particle in time $t = 2\\pi / \\omega$?",
    options={
        "A": "2πa",
        "B": "4πa",
        "C": "0",
        "D": "πa"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position and displacement vectors in two dimensions",
    concept="Compute speed $v = \\sqrt{v_x^2 + v_y^2}$ and integrate over time $T = 2\\pi/\\omega$.",
    given="$v_x = a\\omega\\cos(\\omega t)$, $v_y = a\\omega\\sin(\\omega t)$.",
    formula="$v = \\sqrt{(a\\omega\\cos\\omega t)^2 + (a\\omega\\sin\\omega t)^2} = a\\omega$; $\\text{Distance} = v \\times T = a\\omega \\times \\frac{2\\pi}{\\omega} = 2\\pi a$",
    steps=(
        "1. Differentiate to get velocity components:\n"
        "   $v_x = \\frac{dx}{dt} = a\\omega\\cos(\\omega t)$\n"
        "   $v_y = \\frac{dy}{dt} = a\\omega\\sin(\\omega t)$\n"
        "2. Speed (magnitude of velocity):\n"
        "   $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{a^2\\omega^2(\\cos^2\\omega t + \\sin^2\\omega t)} = a\\omega$ (constant speed!).\n"
        "3. Time period of one complete cycle: $T = \\frac{2\\pi}{\\omega}$.\n"
        "4. Distance = Speed $\\times$ Time = $(a\\omega) \\times \\left(\\frac{2\\pi}{\\omega}\\right) = 2\\pi a$.\n"
        "5. This matches the circumference of the circle of radius $a$."
    ),
    tip="Notice the displacement after one full cycle ($t = 2\\pi/\\omega$) is ZERO, but distance is $2\\pi a$!",
    why_wrong="0 is the displacement, not the distance traveled."
))

# Q154 - Hard
qs.append(make_plane_q(
    num=154,
    question="A particle moves along a path such that its position vector is $\\vec{r}(t) = b t^2 \\hat{i} + c t^3 \\hat{j}$. What is the equation of the trajectory $y(x)$ of the particle?",
    options={
        "A": "y = c (x / b)³ᐟ²",
        "B": "y = (c / b) x²",
        "C": "y = c (x / b)²ᐟ³",
        "D": "y = (c / b²) x³"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position and displacement vectors in two dimensions",
    concept="To find the equation of trajectory $y(x)$, eliminate the time parameter $t$ between $x(t)$ and $y(t)$.",
    given="$x = b t^2$, $y = c t^3$.",
    formula="$t = (x / b)^{1/2} \\implies y = c [(x / b)^{1/2}]^3 = c (x / b)^{3/2}$",
    steps=(
        "1. Express $t$ in terms of $x$ from the first equation:\n"
        "   $x = b t^2 \\implies t^2 = \\frac{x}{b} \\implies t = \\left(\\frac{x}{b}\\right)^{1/2}$.\n"
        "2. Substitute this expression for $t$ into the y-coordinate equation:\n"
        "   $y = c t^3 = c \\left[\\left(\\frac{x}{b}\\right)^{1/2}\\right]^3$.\n"
        "3. Simplify the exponent:\n"
        "   $y = c \\left(\\frac{x}{b}\\right)^{3/2} = \\frac{c}{b^{3/2}} x^{3/2}$.\n"
        "4. This is a semi-cubical parabola."
    ),
    tip="Eliminate $t$: $t^6 = (t^2)^3 = (x/b)^3$, and $t^6 = (t^3)^2 = (y/c)^2 \\implies (y/c)^2 = (x/b)^3 \\implies y = c(x/b)^{3/2}$.",
    why_wrong="Option C inverts the fractional power to 2/3."
))

# Q155 - Hard
qs.append(make_plane_q(
    num=155,
    question="The position coordinates of a moving particle at any time t are given by $x = 2t$ and $y = 2t - 4t^2$ (in meters). What is the angle made by the initial velocity with the positive x-axis at t = 0?",
    options={
        "A": "45°",
        "B": "30°",
        "C": "60°",
        "D": "0°"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position and displacement vectors in two dimensions",
    concept="Differentiate to find velocity components $v_x(t)$ and $v_y(t)$, then evaluate at $t = 0$: $\\tan\\theta = v_y(0) / v_x(0)$.",
    given="$x = 2t$, $y = 2t - 4t^2$.",
    formula="$v_x = \\frac{dx}{dt} = 2$; $v_y = \\frac{dy}{dt} = 2 - 8t$; $\\tan\\theta = \\frac{v_y(0)}{v_x(0)}$",
    steps=(
        "1. Find horizontal velocity: $v_x(t) = \\frac{d}{dt}(2t) = 2\\text{ m/s}$ (constant).\n"
        "2. Find vertical velocity: $v_y(t) = \\frac{d}{dt}(2t - 4t^2) = 2 - 8t$.\n"
        "3. Evaluate at initial instant $t = 0$:\n"
        "   $v_x(0) = 2\\text{ m/s}$\n"
        "   $v_y(0) = 2 - 8(0) = 2\\text{ m/s}$\n"
        "4. Angle with the x-axis:\n"
        "   $\\tan\\theta = \\frac{v_y(0)}{v_x(0)} = \\frac{2}{2} = 1$.\n"
        "5. Since $\\tan\\theta = 1$, the initial angle is $\\theta = 45^\\circ$."
    ),
    tip="This represents a projectile launched at $45^\\circ$ with downward acceleration $a_y = -8\\text{ m/s}^2$!",
    why_wrong="0° would require $v_y(0) = 0$."
))

# Q156 - Medium
qs.append(make_plane_q(
    num=156,
    question="A body moves in the xy-plane from point $(0, 0)$ to $(3\\text{ m}, 0)$ along the x-axis, and then from $(3\\text{ m}, 0)$ to $(3\\text{ m}, 4\\text{ m})$ parallel to the y-axis. What is the average velocity of the body if the total time taken is 2 seconds?",
    options={
        "A": "2.5 m/s at 53° to x-axis",
        "B": "3.5 m/s at 53° to x-axis",
        "C": "2.5 m/s at 37° to x-axis",
        "D": "5.0 m/s at 53° to x-axis"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="Average velocity is total displacement divided by total time: $\\vec{v}_{\\text{avg}} = \\frac{\\Delta\\vec{r}}{\\Delta t}$. Direction is along the displacement vector.",
    given="Initial: $(0, 0)$, Final: $(3, 4)$, $\\Delta t = 2\\text{ s}$.",
    formula="$\\Delta\\vec{r} = 3\\hat{i} + 4\\hat{j}$; $|\\Delta\\vec{r}| = 5\\text{ m}$; $\\vec{v}_{\\text{avg}} = \\frac{3\\hat{i} + 4\\hat{j}}{2} = 1.5\\hat{i} + 2\\hat{j}$",
    steps=(
        "1. Net displacement vector: $\\Delta\\vec{r} = (3 - 0)\\hat{i} + (4 - 0)\\hat{j} = 3\\hat{i} + 4\\hat{j}\\text{ m}$.\n"
        "2. Magnitude of displacement: $|\\Delta\\vec{r}| = \\sqrt{3^2 + 4^2} = 5\\text{ m}$.\n"
        "3. Magnitude of average velocity: $v_{\\text{avg}} = \\frac{|\\Delta\\vec{r}|}{\\Delta t} = \\frac{5\\text{ m}}{2\\text{ s}} = 2.5\\text{ m/s}$.\n"
        "4. Direction of average velocity: $\\tan\\theta = \\frac{\\Delta y}{\\Delta x} = \\frac{4}{3} \\implies \\theta = 53^\\circ$ to the x-axis.\n"
        "5. (Notice average speed is total distance / time = $(3 + 4)/2 = 3.5\\text{ m/s}$)."
    ),
    tip="Average velocity uses straight displacement ($5/2 = 2.5$), while average speed uses total distance ($7/2 = 3.5$)!",
    why_wrong="3.5 m/s is the average speed, not average velocity."
))

# Q157 - Medium
qs.append(make_plane_q(
    num=157,
    question="The position of a particle in meters is given by $\\vec{r} = (3t)\\hat{i} - (t^2)\\hat{j} + 4\\hat{k}$. What is the magnitude of its velocity at t = 2 s?",
    options={
        "A": "5 m/s",
        "B": "7 m/s",
        "C": "3 m/s",
        "D": "4 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="Differentiate $\\vec{r}(t)$ to find $\\vec{v}(t) = \\frac{d\\vec{r}}{dt}$, then compute magnitude $|\\vec{v}(2)|$.",
    given="$\\vec{r} = (3t)\\hat{i} - (t^2)\\hat{j} + 4\\hat{k}$, $t = 2\\text{ s}$.",
    formula="$\\vec{v} = \\frac{d\\vec{r}}{dt} = 3\\hat{i} - (2t)\\hat{j} + 0\\hat{k}$",
    steps=(
        "1. Differentiate each component:\n"
        "   $v_x = \\frac{d}{dt}(3t) = 3\\text{ m/s}$\n"
        "   $v_y = \\frac{d}{dt}(-t^2) = -2t\\text{ m/s}$\n"
        "   $v_z = \\frac{d}{dt}(4) = 0\\text{ m/s}$\n"
        "2. Substitute $t = 2\\text{ s}$:\n"
        "   $v_x = 3\\text{ m/s}$\n"
        "   $v_y = -2(2) = -4\\text{ m/s}$\n"
        "   $v_z = 0\\text{ m/s}$\n"
        "3. Compute magnitude:\n"
        "   $|\\vec{v}| = \\sqrt{3^2 + (-4)^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\text{ m/s}$."
    ),
    tip="The constant term $4\\hat{k}$ has a derivative of ZERO because it is stationary along the z-axis!",
    why_wrong="7 m/s is $3 + 4$, which is scalar addition."
))

# Q158 - Medium
qs.append(make_plane_q(
    num=158,
    question="A wheel of radius $R = 1\\text{ m}$ rolls forward along a flat horizontal road without slipping. What is the magnitude of the displacement of the point of the wheel initially in contact with the ground after half a revolution?",
    options={
        "A": "√(π² + 4) m",
        "B": "π m",
        "C": "2 m",
        "D": "(π + 2) m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="In half a revolution without slipping, the wheel rolls horizontally by distance $\\Delta x = \\pi R$. The contact point moves from the bottom of the wheel to the top, so its vertical displacement is $\\Delta y = 2R$. Net displacement is $\\sqrt{(\\pi R)^2 + (2R)^2} = R\\sqrt{\\pi^2 + 4}$.",
    given="Radius $R = 1\\text{ m}$, half a revolution of pure rolling.",
    formula="$|\\Delta\\vec{r}| = \\sqrt{(\\pi R)^2 + (2R)^2} = R\\sqrt{\\pi^2 + 4}$",
    steps=(
        "1. Let the initial position of the contact point at $t = 0$ be the origin $(0, 0)$.\n"
        "2. In half a revolution, the center of the wheel advances horizontally by half the circumference:\n"
        "   $\\Delta x = \\pi R$.\n"
        "3. The contact point rotates from the lowest point to the highest point of the wheel, so its final y-coordinate is the diameter:\n"
        "   $\\Delta y = 2R$.\n"
        "4. Net displacement vector: $\\Delta\\vec{r} = (\\pi R)\\hat{i} + (2R)\\hat{j}$.\n"
        "5. Magnitude: $|\\Delta\\vec{r}| = \\sqrt{(\\pi R)^2 + (2R)^2} = R\\sqrt{\\pi^2 + 4}$.\n"
        "6. For $R = 1\\text{ m}$: $|\\Delta\\vec{r}| = \\sqrt{\\pi^2 + 4}\\text{ m} \\approx \\sqrt{9.87 + 4} = \\sqrt{13.87} \\approx 3.72\\text{ m}$."
    ),
    tip="Classic NEET rolling kinematics problem: Contact point displacement after half roll is ALWAYS $R\\sqrt{\\pi^2 + 4}$!",
    why_wrong="Option D is the scalar sum $\\pi R + 2R$, which ignores orthogonality."
))

# Q159 - Medium
qs.append(make_plane_q(
    num=159,
    question="In the rolling wheel problem above, what angle does the displacement vector make with the horizontal road?",
    options={
        "A": "tan⁻¹(2 / π)",
        "B": "tan⁻¹(π / 2)",
        "C": "tan⁻¹(1 / π)",
        "D": "45°"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="The displacement vector has horizontal component $\\Delta x = \\pi R$ and vertical component $\\Delta y = 2R$. Angle with horizontal is $\\tan\\theta = \\frac{\\Delta y}{\\Delta x} = \\frac{2R}{\\pi R} = \\frac{2}{\\pi}$.",
    given="$\\Delta x = \\pi R$, $\\Delta y = 2R$.",
    formula="$\\tan\\theta = \\frac{\\Delta y}{\\Delta x} = \\frac{2}{\\pi}$",
    steps=(
        "1. Horizontal component: $\\Delta x = \\pi R$.\n"
        "2. Vertical component: $\\Delta y = 2R$.\n"
        "3. The angle with the horizontal is $\\theta$ where $\\tan\\theta = \\frac{\\text{Vertical}}{\\text{Horizontal}} = \\frac{2R}{\\pi R} = \\frac{2}{\\pi}$.\n"
        "4. Therefore, $\\theta = \\tan^{-1}(2/\\pi) \\approx \\tan^{-1}(0.637) \\approx 32.5^\\circ$."
    ),
    tip="Angle with horizontal = $\\tan^{-1}(2/\\pi)$; Angle with vertical = $\\tan^{-1}(\\pi/2)$.",
    why_wrong="Option B is the angle with the vertical, not the horizontal."
))

# Q160 - Hard
qs.append(make_plane_q(
    num=160,
    question="A particle moves in the xy-plane with constant acceleration $\\vec{a} = 2\\hat{i} + 4\\hat{j}\\text{ m/s}^2$. At t = 0, its position is $\\vec{r}_0 = 0$ and velocity is $\\vec{v}_0 = 5\\hat{i}\\text{ m/s}$. At what time t will the y-coordinate of the particle be equal to 32 m, and what is its x-coordinate at that instant?",
    options={
        "A": "t = 4 s, x = 36 m",
        "B": "t = 4 s, x = 20 m",
        "C": "t = 2 s, x = 14 m",
        "D": "t = 8 s, x = 72 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position and displacement vectors in two dimensions",
    concept="Independent 2D kinematic equations: $x(t) = v_{0x} t + \\frac{1}{2} a_x t^2$ and $y(t) = v_{0y} t + \\frac{1}{2} a_y t^2$.",
    given="$v_{0x} = 5\\text{ m/s}, v_{0y} = 0, a_x = 2\\text{ m/s}^2, a_y = 4\\text{ m/s}^2, y = 32\\text{ m}$.",
    formula="$y = \\frac{1}{2} a_y t^2 \\implies 32 = \\frac{1}{2}(4)t^2$; $x = 5t + \\frac{1}{2}(2)t^2$",
    steps=(
        "1. Set up the equation for y-motion (since $v_{0y} = 0$):\n"
        "   $y(t) = 0 \\cdot t + \\frac{1}{2} a_y t^2 = \\frac{1}{2}(4)t^2 = 2t^2$.\n"
        "2. Solve for time when $y = 32\\text{ m}$:\n"
        "   $2t^2 = 32 \\implies t^2 = 16 \\implies t = 4\\text{ s}$ (taking $t > 0$).\n"
        "3. Now substitute $t = 4\\text{ s}$ into the equation for x-motion:\n"
        "   $x(t) = v_{0x} t + \\frac{1}{2} a_x t^2 = 5(4) + \\frac{1}{2}(2)(4^2)$.\n"
        "4. Calculate:\n"
        "   $x(4) = 20 + 1(16) = 20 + 16 = 36\\text{ m}$.\n"
        "5. Therefore, at $t = 4\\text{ s}$, the x-coordinate is $36\\text{ m}$."
    ),
    tip="Independence of x and y motions: Solve for time in whichever axis has the known constraint, then plug $t$ into the other axis!",
    why_wrong="Option B calculates $x = 5(4) = 20\\text{ m}$, forgetting the acceleration term $\\frac{1}{2}a_x t^2 = 16\\text{ m}$."
))

# Q161 - Medium
qs.append(make_plane_q(
    num=161,
    question="A particle is moving such that its position vector is $\\vec{r} = \\cos(\\omega t)\\hat{i} + \\sin(\\omega t)\\hat{j}$. The velocity of the particle is:",
    options={
        "A": "Parallel to the position vector",
        "B": "Perpendicular to the position vector",
        "C": "Directed towards the origin",
        "D": "Directed away from the origin"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Position and displacement vectors in two dimensions",
    concept="Check dot product of position and velocity: if $\\vec{r} \\cdot \\vec{v} = 0$, velocity is strictly perpendicular to position vector.",
    given="$\\vec{r} = \\cos(\\omega t)\\hat{i} + \\sin(\\omega t)\\hat{j}$.",
    formula="$\\vec{v} = \\frac{d\\vec{r}}{dt} = -\\omega\\sin(\\omega t)\\hat{i} + \\omega\\cos(\\omega t)\\hat{j}$; $\\vec{r} \\cdot \\vec{v} = -\\omega\\sin\\omega t\\cos\\omega t + \\omega\\sin\\omega t\\cos\\omega t = 0$",
    steps=(
        "1. Differentiate the position vector:\n"
        "   $\\vec{v} = -\\omega\\sin(\\omega t)\\hat{i} + \\omega\\cos(\\omega t)\\hat{j}$.\n"
        "2. Compute the scalar dot product $\\vec{r} \\cdot \\vec{v}$:\n"
        "   $\\vec{r} \\cdot \\vec{v} = [\\cos(\\omega t)][-\\omega\\sin(\\omega t)] + [\\sin(\\omega t)][\\omega\\cos(\\omega t)]$.\n"
        "3. $\\vec{r} \\cdot \\vec{v} = -\\omega\\sin(\\omega t)\\cos(\\omega t) + \\omega\\sin(\\omega t)\\cos(\\omega t) = 0$.\n"
        "4. Since the dot product is identically zero at all times, the velocity vector is perpendicular to the position vector."
    ),
    tip="For any motion on a circle of fixed radius, $\\frac{d}{dt}(r^2) = 2\\vec{r}\\cdot\\vec{v} = 0 \\implies \\vec{r} \\perp \\vec{v}$ always!",
    why_wrong="Option C and D describe the acceleration and position directions, not velocity."
))

# Save Topic 9
with open('scripts/mip_topic9.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 9 generated successfully:", len(qs))
