import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 15: Motion in two dimensions with constant acceleration (Q251 to Q268, 18 questions)
# Distribution: 5 Easy, 9 Medium, 4 Hard
# ==============================================================================

# Q251 - Easy
qs.append(make_plane_q(
    num=251,
    question="In two-dimensional motion with constant acceleration $\\vec{a}$, how are the motions along the x and y axes related to each other?",
    options={
        "A": "They are completely independent of each other and can be treated separately",
        "B": "Motion along the x-axis depends directly on the displacement along the y-axis",
        "C": "Acceleration along the x-axis must always equal acceleration along the y-axis",
        "D": "Velocity along the x-axis always equals velocity along the y-axis"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion in two dimensions with constant acceleration",
    concept="Independence of orthogonal motions: Galileo's principle of superposition states that motion in the x-direction and motion in the y-direction proceed independently, linked only by the common parameter of time $t$.",
    given="Two-dimensional kinematics with constant acceleration $\\vec{a} = a_x\\hat{i} + a_y\\hat{j}$.",
    formula="$x(t) = x_0 + u_x t + \\frac{1}{2}a_x t^2$; $y(t) = y_0 + u_y t + \\frac{1}{2}a_y t^2$",
    steps=(
        "1. In Cartesian coordinates, the unit vectors $\\hat{i}$ and $\\hat{j}$ are fixed and orthogonal.\n"
        "2. The vector equation $\\vec{r}(t) = \\vec{r}_0 + \\vec{u}t + \\frac{1}{2}\\vec{a}t^2$ splits into two uncoupled scalar 1D kinematic equations.\n"
        "3. Forces or accelerations along the x-axis have zero component along the y-axis, ensuring complete independence."
    ),
    tip="Always solve 2D motion problems by breaking them into two independent 1D problems linked by time $t$.",
    why_wrong="Options B, C, and D violate the independence of perpendicular dimensions."
))

# Q252 - Easy
qs.append(make_plane_q(
    num=252,
    question="A particle starts from the origin at $t = 0$ with initial velocity $\\vec{u} = 5\\hat{i}\\text{ m/s}$ and moves in the xy-plane with constant acceleration $\\vec{a} = (3\\hat{i} + 2\\hat{j})\\text{ m/s}^2$. What is the x-coordinate of the particle when $t = 2\\text{ s}$?",
    options={
        "A": "$16\\text{ m}$",
        "B": "$10\\text{ m}$",
        "C": "$6\\text{ m}$",
        "D": "$4\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion in two dimensions with constant acceleration",
    concept="Apply the 1D kinematic displacement equation along the x-axis: $x = u_x t + \\frac{1}{2}a_x t^2$.",
    given="$u_x = 5\\text{ m/s}$, $a_x = 3\\text{ m/s}^2$, $t = 2\\text{ s}$.",
    formula="x = u_x t + \\frac{1}{2} a_x t^2",
    steps=(
        "1. Identify initial x-velocity: $u_x = 5\\text{ m/s}$.\n"
        "2. Identify x-acceleration: $a_x = 3\\text{ m/s}^2$.\n"
        "3. Substitute into formula for $t = 2\\text{ s}$:\n"
        "   $x = (5)(2) + \\frac{1}{2}(3)(2^2) = 10 + \\frac{1}{2}(3)(4) = 10 + 6 = 16\\text{ m}$."
    ),
    tip="Ignore the y-parameters completely when asked only for x-coordinates!",
    why_wrong="Option B calculates only the initial velocity term $5 \\times 2 = 10$; Option C calculates only the acceleration term."
))

# Q253 - Easy
qs.append(make_plane_q(
    num=253,
    question="In the previous question, what is the y-coordinate of the particle at $t = 2\\text{ s}$?",
    options={
        "A": "$4\\text{ m}$",
        "B": "$8\\text{ m}$",
        "C": "$2\\text{ m}$",
        "D": "$16\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion in two dimensions with constant acceleration",
    concept="Apply the kinematic displacement equation along the y-axis: $y = u_y t + \\frac{1}{2}a_y t^2$.",
    given="$u_y = 0\\text{ m/s}$, $a_y = 2\\text{ m/s}^2$, $t = 2\\text{ s}$.",
    formula="y = u_y t + \\frac{1}{2} a_y t^2",
    steps=(
        "1. Identify initial y-velocity: $u_y = 0$ (initial velocity was purely along x).\n"
        "2. Identify y-acceleration: $a_y = 2\\text{ m/s}^2$.\n"
        "3. Substitute for $t = 2\\text{ s}$:\n"
        "   $y = 0 + \\frac{1}{2}(2)(2^2) = \\frac{1}{2}(2)(4) = 4\\text{ m}$."
    ),
    tip="Since initial velocity had no $\\hat{j}$ component, $u_y = 0$, so y-displacement comes entirely from acceleration.",
    why_wrong="Option B forgets the factor of $1/2$ in $\\frac{1}{2}a_y t^2$."
))

# Q254 - Easy
qs.append(make_plane_q(
    num=254,
    question="A body starts from rest at the origin. If its acceleration is $\\vec{a} = (4\\hat{i} + 3\\hat{j})\\text{ m/s}^2$, what is its speed after $2\\text{ s}$?",
    options={
        "A": "$10\\text{ m/s}$",
        "B": "$14\\text{ m/s}$",
        "C": "$5\\text{ m/s}$",
        "D": "$8\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion in two dimensions with constant acceleration",
    concept="For a body starting from rest, velocity after time $t$ is $\\vec{v} = \\vec{a}t$. The speed is the magnitude of the velocity vector: $v = |\\vec{a}| t$.",
    given="$\\vec{u} = 0$, $\\vec{a} = 4\\hat{i} + 3\\hat{j}\\text{ m/s}^2$, $t = 2\\text{ s}$.",
    formula="v = |\\vec{a}| t = \\sqrt{a_x^2 + a_y^2} \\times t",
    steps=(
        "1. Magnitude of acceleration: $|\\vec{a}| = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5\\text{ m/s}^2$.\n"
        "2. Since $\\vec{u} = 0$, velocity at $t = 2\\text{ s}$ is $\\vec{v} = \\vec{a}t = (4\\hat{i} + 3\\hat{j}) \\times 2 = 8\\hat{i} + 6\\hat{j}\\text{ m/s}$.\n"
        "3. Speed: $v = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ m/s}$.\n"
        "4. Alternatively, $v = |\\vec{a}| t = 5 \\times 2 = 10\\text{ m/s}$."
    ),
    tip="When starting from rest, speed scales directly as $v = a_{net} t$.",
    why_wrong="Option B simply adds components $(4+3)\\times 2 = 14$; Option C is the acceleration magnitude."
))

# Q255 - Easy
qs.append(make_plane_q(
    num=255,
    question="The x and y coordinates of a moving particle are given by $x = 5t - 2t^2$ and $y = 10t$ respectively, where $x, y$ are in meters and $t$ in seconds. What is the acceleration of the particle at $t = 2\\text{ s}$?",
    options={
        "A": "$-4\\text{ m/s}^2$",
        "B": "$-2\\text{ m/s}^2$",
        "C": "$0$",
        "D": "$5\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion in two dimensions with constant acceleration",
    concept="Differentiate the position coordinates twice with respect to time to find the acceleration components: $a_x = \\frac{d^2 x}{dt^2}$ and $a_y = \\frac{d^2 y}{dt^2}$.",
    given="$x(t) = 5t - 2t^2$, $y(t) = 10t$.",
    formula="a_x = \\frac{d^2 x}{dt^2}; a_y = \\frac{d^2 y}{dt^2}; \\vec{a} = a_x\\hat{i} + a_y\\hat{j}",
    steps=(
        "1. Differentiate $x(t)$: $v_x = \\frac{dx}{dt} = 5 - 4t$.\n"
        "2. Second derivative: $a_x = \\frac{dv_x}{dt} = -4\\text{ m/s}^2$.\n"
        "3. Differentiate $y(t)$: $v_y = \\frac{dy}{dt} = 10$.\n"
        "4. Second derivative: $a_y = \\frac{dv_y}{dt} = 0$.\n"
        "5. Net acceleration is purely along the x-axis: $a = a_x = -4\\text{ m/s}^2$ (independent of time $t$)."
    ),
    tip="Notice $a_x = -4\\text{ m/s}^2$ is constant! It is $-4\\text{ m/s}^2$ at $t = 2\\text{ s}$, $t = 0\\text{ s}$, and all other times.",
    why_wrong="Option C mistakenly thinks constant velocity along y means zero net acceleration; Option B takes only the first derivative coefficient.",
    is_pyq=True,
    pyq_year=2017,
    source="NEET UG 2017"
))

# Q256 - Medium
qs.append(make_plane_q(
    num=256,
    question="A particle moves in the xy-plane with constant acceleration $\\vec{a} = 2\\hat{j}\\text{ m/s}^2$. At $t = 0$, its position is origin and velocity is $\\vec{u} = (8\\hat{i} + 2\\hat{j})\\text{ m/s}$. At what time $t$ will the particle's velocity make an angle of $45^\\circ$ with the positive x-axis?",
    options={
        "A": "$3\\text{ s}$",
        "B": "$2\\text{ s}$",
        "C": "$4\\text{ s}$",
        "D": "$1\\text{ s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="The angle of velocity with the x-axis is given by $\\tan\\theta = \\frac{v_y}{v_x}$. For $\\theta = 45^\\circ$, $\\tan 45^\\circ = 1 \\implies v_y = v_x$.",
    given="$\\vec{u} = 8\\hat{i} + 2\\hat{j}\\text{ m/s}$, $\\vec{a} = 0\\hat{i} + 2\\hat{j}\\text{ m/s}^2$, $\\theta = 45^\\circ$.",
    formula="v_x(t) = u_x + a_x t = 8; v_y(t) = u_y + a_y t = 2 + 2t; v_y = v_x",
    steps=(
        "1. Horizontal velocity remains constant because $a_x = 0$: $v_x = 8\\text{ m/s}$.\n"
        "2. Vertical velocity increases uniformly: $v_y = 2 + 2t\\text{ m/s}$.\n"
        "3. For $\\theta = 45^\\circ$, we have $\\tan 45^\\circ = \\frac{v_y}{v_x} = 1 \\implies v_y = v_x$.\n"
        "4. Equate the two components:\n"
        "   $2 + 2t = 8 \\implies 2t = 6 \\implies t = 3\\text{ s}$."
    ),
    tip="Whenever angle with x-axis is $45^\\circ$, simply equate $v_y(t) = v_x(t)$!",
    why_wrong="Option B gives $v_y = 2 + 4 = 6 \\ne 8$; Option C gives $v_y = 2 + 8 = 10$."
))

# Q257 - Medium
qs.append(make_plane_q(
    num=257,
    question="In the previous question, what is the position vector $\\vec{r}$ of the particle at the instant $t = 3\\text{ s}$?",
    options={
        "A": "$24\\hat{i} + 15\\hat{j}\\text{ m}$",
        "B": "$24\\hat{i} + 24\\hat{j}\\text{ m}$",
        "C": "$16\\hat{i} + 12\\hat{j}\\text{ m}$",
        "D": "$24\\hat{i} + 9\\hat{j}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="Calculate $x(t) = u_x t + \\frac{1}{2}a_x t^2$ and $y(t) = u_y t + \\frac{1}{2}a_y t^2$ at $t = 3\\text{ s}$.",
    given="$u_x = 8, a_x = 0$; $u_y = 2, a_y = 2$; $t = 3\\text{ s}$.",
    formula="x = u_x t; y = u_y t + \\frac{1}{2}a_y t^2",
    steps=(
        "1. x-coordinate: $x = (8)(3) = 24\\text{ m}$.\n"
        "2. y-coordinate: $y = (2)(3) + \\frac{1}{2}(2)(3^2) = 6 + 9 = 15\\text{ m}$.\n"
        "3. Position vector: $\\vec{r} = 24\\hat{i} + 15\\hat{j}\\text{ m}$."
    ),
    tip="Notice that while velocity vector makes $45^\\circ$ ($v_x = v_y = 8$), position vector makes $\\tan\\phi = 15/24 < 1$ ($\phi \\approx 32^\\circ$). Velocity and position angles are generally NOT equal!",
    why_wrong="Option B assumes position coordinates must be equal because velocity components are equal."
))

# Q258 - Medium
qs.append(make_plane_q(
    num=258,
    question="A particle starts from the point $(0, 2)\\text{ m}$ with initial velocity $\\vec{u} = 3\\hat{i}\\text{ m/s}$ and constant acceleration $\\vec{a} = (2\\hat{i} + \\hat{j})\\text{ m/s}^2$. What is its distance from the origin at $t = 2\\text{ s}$?",
    options={
        "A": "$10\\sqrt{2}\\text{ m} \\approx 14.14\\text{ m}$",
        "B": "$10\\text{ m}$",
        "C": "$14\\text{ m}$",
        "D": "$8\\sqrt{2}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="Include initial coordinates $(x_0, y_0)$ in the kinematic position equations: $x = x_0 + u_x t + \\frac{1}{2}a_x t^2$ and $y = y_0 + u_y t + \\frac{1}{2}a_y t^2$.",
    given="$x_0 = 0$, $y_0 = 2$, $u_x = 3, u_y = 0$, $a_x = 2, a_y = 1$, $t = 2\\text{ s}$.",
    formula="x = x_0 + u_x t + \\frac{1}{2}a_x t^2; y = y_0 + u_y t + \\frac{1}{2}a_y t^2; r = \\sqrt{x^2 + y^2}",
    steps=(
        "1. Compute x-coordinate:\n"
        "   $x = 0 + (3)(2) + \\frac{1}{2}(2)(2^2) = 6 + 4 = 10\\text{ m}$.\n"
        "2. Compute y-coordinate:\n"
        "   $y = 2 + (0)(2) + \\frac{1}{2}(1)(2^2) = 2 + 2 = 4\\text{ m}$ (Wait! Let's check: $2 + 2 = 4\\text{ m}$! If $y=4$ and $x=10$, distance is $\\sqrt{100+16} = \\sqrt{116}$.\n"
        "   Wait, what if $y_0 = 0$ and $u_y = 3$? Let's make the coordinates produce clean numbers!\n"
        "   If $x = 10\\text{ m}$ and $y = 10\\text{ m}$, then $r = 10\\sqrt{2}\\text{ m}$!\n"
        "   How do we get $y = 10$? If $y_0 = 2$, $u_y = 2$, and $a_y = 2$: $y = 2 + (2)(2) + \\frac{1}{2}(2)(4) = 2 + 4 + 4 = 10\\text{ m}$!\n"
        "   Let's set $u_y = 2\\text{ m/s}$ and $a_y = 2\\text{ m/s}^2$ so that $x = 10\\text{ m}$ and $y = 10\\text{ m}$!)."
    ),
    tip="Always remember to add the initial position coordinates $(x_0, y_0)$ if the particle does not start from the origin!",
    why_wrong="Option B ignores the y-coordinate; Option C adds $10 + 4 = 14$ linearly."
))

# Adjust Q258 to clean numbers:
qs[-1]["question"] = "A particle starts from the point $(0, 2)\\text{ m}$ with initial velocity $\\vec{u} = (3\\hat{i} + 2\\hat{j})\\text{ m/s}$ and constant acceleration $\\vec{a} = (2\\hat{i} + 2\\hat{j})\\text{ m/s}^2$. What is its distance from the origin at $t = 2\\text{ s}$?"
qs[-1]["given"] = "$x_0 = 0, y_0 = 2\\text{ m}$; $\\vec{u} = 3\\hat{i} + 2\\hat{j}\\text{ m/s}$; $\\vec{a} = 2\\hat{i} + 2\\hat{j}\\text{ m/s}^2$; $t = 2\\text{ s}$."
qs[-1]["steps"] = (
    "1. Calculate x-coordinate at $t = 2\\text{ s}$:\n"
    "   $x = x_0 + u_x t + \\frac{1}{2}a_x t^2 = 0 + (3)(2) + \\frac{1}{2}(2)(2^2) = 6 + 4 = 10\\text{ m}$.\n"
    "2. Calculate y-coordinate at $t = 2\\text{ s}$:\n"
    "   $y = y_0 + u_y t + \\frac{1}{2}a_y t^2 = 2 + (2)(2) + \\frac{1}{2}(2)(2^2) = 2 + 4 + 4 = 10\\text{ m}$.\n"
    "3. Distance from origin:\n"
    "   $r = \\sqrt{x^2 + y^2} = \\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}\\text{ m} \\approx 14.14\\text{ m}$."
)
qs[-1]["solutionStructured"]["given"] = qs[-1]["given"]
qs[-1]["solutionStructured"]["stepByStep"] = qs[-1]["steps"]
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: $10\\sqrt{2}\\text{ m}$"

# Q259 - Medium
qs.append(make_plane_q(
    num=259,
    question="The velocity of a particle moving in the xy-plane is given by $\\vec{v}(t) = (6t)\\hat{i} + (4t^2)\\hat{j}$. What is the equation of the trajectory $y(x)$ if the particle was at the origin at $t = 0$?",
    options={
        "A": "$y = \\frac{4}{81} x^{3/2}$",
        "B": "$y = \\frac{4}{27} x^2$",
        "C": "$y = \\frac{2}{9} x^{3/2}$",
        "D": "$y = \\frac{1}{6} x^3$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="Integrate the velocity components to find position coordinates $x(t)$ and $y(t)$, then eliminate time parameter $t$ to obtain the trajectory equation $y(x)$.",
    given="$\\frac{dx}{dt} = 6t$, $\\frac{dy}{dt} = 4t^2$, with $x(0) = 0, y(0) = 0$.",
    formula="x(t) = \\int 6t dt = 3t^2; y(t) = \\int 4t^2 dt = \\frac{4}{3}t^3",
    steps=(
        "1. Integrate $v_x$: $x(t) = \\int_0^t 6t' dt' = 3t^2 \\implies t^2 = \\frac{x}{3} \\implies t = \\left(\\frac{x}{3}\\right)^{1/2}$.\n"
        "2. Integrate $v_y$: $y(t) = \\int_0^t 4t'^2 dt' = \\frac{4}{3}t^3$.\n"
        "3. Substitute $t = \\left(\\frac{x}{3}\\right)^{1/2}$ into $y(t)$:\n"
        "   $y = \\frac{4}{3} \\left(\\frac{x}{3}\\right)^{3/2} = \\frac{4}{3 \\times 3\\sqrt{3}} x^{3/2}$ (Wait! $3^{3/2} = 3\\sqrt{3}$, so $3 \\times 3^{3/2} = 3^{5/2} = 9\\sqrt{3}$!).\n"
        "   Wait, what if $v_x = 6$ (constant) and $v_y = 4t$? Then $x = 6t \\implies t = x/6$, and $y = 2t^2 = 2(x/6)^2 = 2x^2/36 = x^2/18$ (pure parabola)!\n"
        "   What if $v(t) = (6t)\\hat{i} + 4\\hat{j}$? Then $a_x = 6$ (constant acceleration) and $v_y = 4$ (constant velocity). Then $x = 3t^2$, $y = 4t \\implies t = y/4 \\implies x = 3(y/4)^2 = 3y^2/16 \\implies y^2 = \\frac{16}{3}x$!\n"
        "   Let's check the title of Topic 15: 'Motion in two dimensions with CONSTANT ACCELERATION'! Let's use constant acceleration!"
    ),
    tip="For constant acceleration, the path is always a parabola ($y^2 \\propto x$ or $y \\propto x^2$) whenever acceleration is not parallel to initial velocity.",
    why_wrong="Option B assumes linear acceleration along y; Option D uses direct multiplication."
))

# Adjust Q259 to pure constant acceleration:
qs[-1]["question"] = "A particle starts from rest at the origin and moves in the xy-plane with constant acceleration $\\vec{a} = 6\\hat{i}\\text{ m/s}^2$ and initial velocity $\\vec{u} = 4\\hat{j}\\text{ m/s}$. What is the Cartesian equation of its trajectory?"
qs[-1]["given"] = "$u_x = 0, u_y = 4\\text{ m/s}$, $a_x = 6\\text{ m/s}^2, a_y = 0$, $x(0) = 0, y(0) = 0$."
qs[-1]["options"] = {
    "A": "$y^2 = \\frac{16}{3} x$",
    "B": "$y = \\frac{3}{16} x^2$",
    "C": "$y^2 = 6x$",
    "D": "$x^2 = \\frac{16}{3} y$"
}
qs[-1]["correct_opt"] = "A"
qs[-1]["formula"] = "x = \\frac{1}{2}a_x t^2; y = u_y t"
qs[-1]["steps"] = (
    "1. Express coordinates in terms of time $t$:\n"
    "   $x(t) = \\frac{1}{2}(6)t^2 = 3t^2$.\n"
    "   $y(t) = 4t$.\n"
    "2. Express $t$ from the linear y-equation: $t = \\frac{y}{4}$.\n"
    "3. Substitute $t = \\frac{y}{4}$ into the x-equation:\n"
    "   $x = 3 \\left(\\frac{y}{4}\\right)^2 = 3 \\frac{y^2}{16} = \\frac{3}{16}y^2$.\n"
    "4. Rearrange for $y^2$:\n"
    "   $y^2 = \\frac{16}{3}x$."
)
qs[-1]["tip"] = "This is a standard parabola opening along the positive x-axis ($y^2 = 4ax$ form with $4a = 16/3$)."
qs[-1]["solutionStructured"]["given"] = qs[-1]["given"]
qs[-1]["solutionStructured"]["formula"] = qs[-1]["formula"]
qs[-1]["solutionStructured"]["stepByStep"] = qs[-1]["steps"]
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: $y^2 = \\frac{16}{3} x$"

# Q260 - Medium
qs.append(make_plane_q(
    num=260,
    question="A body moves in the xy-plane with acceleration $\\vec{a} = (3\\hat{i} + 4\\hat{j})\\text{ m/s}^2$. If its initial velocity is $\\vec{u} = (-6\\hat{i} - 8\\hat{j})\\text{ m/s}$, what is the nature of its trajectory?",
    options={
        "A": "Straight line motion",
        "B": "Parabolic motion",
        "C": "Circular motion",
        "D": "Elliptical motion"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="If the acceleration vector $\\vec{a}$ is anti-parallel (or parallel) to the initial velocity vector $\\vec{u}$, the motion is confined to a single straight line in space.",
    given="$\\vec{u} = -6\\hat{i} - 8\\hat{j}$, $\\vec{a} = 3\\hat{i} + 4\\hat{j}$.",
    formula="\\vec{u} = -2\\vec{a} \\implies \\vec{u} \\parallel \\vec{a}",
    steps=(
        "1. Check the ratio of components between $\\vec{u}$ and $\\vec{a}$:\n"
        "   $\\frac{u_x}{a_x} = \\frac{-6}{3} = -2$.\n"
        "   $\\frac{u_y}{a_y} = \\frac{-8}{4} = -2$.\n"
        "2. Since $\\vec{u} = -2\\vec{a}$, initial velocity and acceleration are strictly collinear (anti-parallel, $180^\\circ$ apart).\n"
        "3. Because there is zero acceleration perpendicular to the initial velocity, the particle slows down along this line, momentarily comes to rest at $t = 2\\text{ s}$, and reverses direction along the exact same line.\n"
        "4. Hence, the trajectory is a straight line."
    ),
    tip="Key NEET concept: Constant acceleration creates a PARABOLA only if $\\vec{a}$ is NOT parallel/anti-parallel to $\\vec{u}$. If $\\vec{a} \\parallel \\vec{u}$, the trajectory is a STRAIGHT LINE!",
    why_wrong="Option B incorrectly assumes that 2D motion with constant acceleration is always parabolic."
))

# Q261 - Medium
qs.append(make_plane_q(
    num=261,
    question="In the previous question, at what time $t$ will the particle momentarily come to rest, and where will it be relative to its starting point?",
    options={
        "A": "$t = 2\\text{ s}$ and displacement $= -10\\hat{i} - \\frac{40}{3}\\dots$ wait, compute exactly",
        "B": "$t = 2\\text{ s}$ and displacement $= -6\\hat{i} - 8\\hat{j}\\text{ m}$",
        "C": "$t = 1\\text{ s}$ and displacement $= 0$",
        "D": "$t = 4\\text{ s}$ and displacement $= 0$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="For $\\vec{v}(t) = 0$, set $\\vec{u} + \\vec{a}t = 0 \\implies t = 2\\text{ s}$. Then $\\vec{s} = \\vec{u}t + \\frac{1}{2}\\vec{a}t^2$.",
    given="$\\vec{u} = -6\\hat{i} - 8\\hat{j}\\text{ m/s}$, $\\vec{a} = 3\\hat{i} + 4\\hat{j}\\text{ m/s}^2$.",
    formula="\\vec{v} = \\vec{u} + \\vec{a}t = 0 \\implies t = 2\\text{ s}; \\vec{s} = \\vec{u}(2) + \\frac{1}{2}\\vec{a}(4)",
    steps=(
        "1. Setting velocity to zero:\n"
        "   $v_x = -6 + 3t = 0 \\implies t = 2\\text{ s}$.\n"
        "   $v_y = -8 + 4t = 0 \\implies t = 2\\text{ s}$.\n"
        "2. Displacement at $t = 2\\text{ s}$:\n"
        "   $s_x = (-6)(2) + \\frac{1}{2}(3)(4) = -12 + 6 = -6\\text{ m}$.\n"
        "   $s_y = (-8)(2) + \\frac{1}{2}(4)(4) = -16 + 8 = -8\\text{ m}$.\n"
        "3. Net displacement is $\\vec{s} = -6\\hat{i} - 8\\hat{j}\\text{ m}$, with magnitude $\\sqrt{(-6)^2 + (-8)^2} = 10\\text{ m}$."
    ),
    tip="Notice: $\\vec{s} = \\frac{\\vec{u}}{2} t = \\frac{-6\\hat{i} - 8\\hat{j}}{2} \\times 2 = -6\\hat{i} - 8\\hat{j}\\text{ m}$!",
    why_wrong="Option C and D confuse time of rest with time of return to origin ($t = 4\\text{ s}$)."
))

# Clean Q261 options:
qs[-1]["options"] = {
    "A": "$t = 2\\text{ s}$ with displacement $\\vec{s} = -6\\hat{i} - 8\\hat{j}\\text{ m}$ (magnitude $10\\text{ m}$)",
    "B": "$t = 2\\text{ s}$ with displacement $\\vec{s} = 6\\hat{i} + 8\\hat{j}\\text{ m}$",
    "C": "$t = 4\\text{ s}$ with displacement $\\vec{s} = 0$",
    "D": "$t = 1\\text{ s}$ with displacement $\\vec{s} = -3\\hat{i} - 4\\hat{j}\\text{ m}$"
}
qs[-1]["correct_opt"] = "A"
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: $t = 2\\text{ s}$ with displacement $\\vec{s} = -6\\hat{i} - 8\\hat{j}\\text{ m}$"

# Q262 - Medium
qs.append(make_plane_q(
    num=262,
    question="A particle moves in the xy-plane with constant acceleration. At $t = 0$, its velocity is $u\\hat{i}$. At $t = t_1$, its velocity becomes $u\\hat{j}$. What is the magnitude and direction of its constant acceleration?",
    options={
        "A": "$\\frac{u\\sqrt{2}}{t_1}$ at $135^\\circ$ to positive x-axis",
        "B": "$\\frac{u}{t_1}$ at $90^\\circ$ to positive x-axis",
        "C": "$\\frac{u\\sqrt{2}}{t_1}$ at $45^\\circ$ to positive x-axis",
        "D": "$\\frac{2u}{t_1}$ at $180^\\circ$ to positive x-axis"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="Acceleration is the change in velocity divided by time: $\\vec{a} = \\frac{\\vec{v} - \\vec{u}}{\\Delta t} = \\frac{u\\hat{j} - u\\hat{i}}{t_1}$.",
    given="$\\vec{u} = u\\hat{i}$, $\\vec{v} = u\\hat{j}$, $\\Delta t = t_1$.",
    formula="\\vec{a} = \\frac{-u\\hat{i} + u\\hat{j}}{t_1}; |\\vec{a}| = \\frac{\\sqrt{(-u)^2 + u^2}}{t_1} = \\frac{u\\sqrt{2}}{t_1}",
    steps=(
        "1. Change in velocity vector: $\\Delta\\vec{v} = \\vec{v} - \\vec{u} = u\\hat{j} - u\\hat{i} = -u\\hat{i} + u\\hat{j}$.\n"
        "2. Constant acceleration: $\\vec{a} = \\frac{\\Delta\\vec{v}}{t_1} = \\frac{-u\\hat{i} + u\\hat{j}}{t_1}$.\n"
        "3. Magnitude: $|\\vec{a}| = \\frac{\\sqrt{(-u)^2 + u^2}}{t_1} = \\frac{u\\sqrt{2}}{t_1}$.\n"
        "4. Direction: $\\tan\\theta = \\frac{a_y}{a_x} = \\frac{u}{-u} = -1$. Since $a_x < 0$ and $a_y > 0$, the vector lies in the second quadrant: $\\theta = 180^\\circ - 45^\\circ = 135^\\circ$."
    ),
    tip="Never subtract speeds ($u - u = 0$)! Vector change is $|\Delta\\vec{v}| = \\sqrt{u^2 + u^2} = u\\sqrt{2}$.",
    why_wrong="Option B subtracts speeds scalarly; Option C points into the first quadrant instead of the second."
))

# Q263 - Medium
qs.append(make_plane_q(
    num=263,
    question="A particle is projected from the origin in the xy-plane with initial velocity $\\vec{u} = (4\\hat{i} + 3\\hat{j})\\text{ m/s}$ and constant acceleration $\\vec{a} = (1\\hat{i} - 2\\hat{j})\\text{ m/s}^2$. What is the particle's speed when its y-coordinate becomes zero again?",
    options={
        "A": "$7\\text{ m/s}$",
        "B": "$5\\text{ m/s}$",
        "C": "$9\\text{ m/s}$",
        "D": "$4\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="Find the time when $y(t) = 0$ ($t > 0$), then evaluate the velocity vector components $v_x(t)$ and $v_y(t)$ at that instant to determine speed.",
    given="$u_x = 4, u_y = 3$, $a_x = 1, a_y = -2$.",
    formula="y(t) = u_y t + \\frac{1}{2}a_y t^2 = 0 \\implies t(3 - t) = 0 \\implies t = 3\\text{ s}",
    steps=(
        "1. Find time when $y = 0$:\n"
        "   $y(t) = 3t + \\frac{1}{2}(-2)t^2 = 3t - t^2 = t(3 - t) = 0$.\n"
        "   For $t > 0$, we get $t = 3\\text{ s}$.\n"
        "2. Compute velocity components at $t = 3\\text{ s}$:\n"
        "   $v_x = u_x + a_x t = 4 + (1)(3) = 7\\text{ m/s}$.\n"
        "   $v_y = u_y + a_y t = 3 + (-2)(3) = 3 - 6 = -3\\text{ m/s}$ (Wait! Let's compute speed: $\\sqrt{7^2 + (-3)^2} = \\sqrt{49 + 9} = \\sqrt{58}$!)\n"
        "   Wait, what if $a_x = 0$? Then $v_x = 4$, $v_y = -3$, speed is $\\sqrt{4^2 + (-3)^2} = 5\\text{ m/s}$!\n"
        "   What if $a_x = 0$ is pure projectile motion? Let's check: if $a_x = 0$, $v_x = 4$, $v_y = -3$, then speed is 5 m/s!\n"
        "   What if $u_x = 0$, $a_x = 2$? Then at $t = 3$, $v_x = 6$, $v_y = -3$, wait. What if we want speed = $\\sqrt{58}$ or integer?\n"
        "   What if $u_x = 0$ and $a_x = 4/3$? At $t = 3$, $v_x = 4$, $v_y = -3$, speed = $\\sqrt{4^2 + (-3)^2} = 5\\text{ m/s}$!\n"
        "   Let's check: if $u_x = 4, a_x = 0$, then at $y=0$ speed is exactly 5 m/s! Let's check if $a_x = 1, a_y = -2$: $\\sqrt{58} \\approx 7.62$. Let's make options exact!"
    ),
    tip="By symmetry of vertical motion with constant $a_y = -g$, $v_y$ at landing equals $-u_y$. If $a_x = 0$, the speed at landing equals initial launch speed!",
    why_wrong="Option D takes only the horizontal component."
))

# Clean Q263:
qs[-1]["question"] = "A particle is projected from the origin in the xy-plane with initial velocity $\\vec{u} = (4\\hat{i} + 3\\hat{j})\\text{ m/s}$ and constant acceleration $\\vec{a} = -2\\hat{j}\\text{ m/s}^2$ (with $a_x = 0$). What is the particle's speed when its y-coordinate becomes zero again?"
qs[-1]["given"] = "$\\vec{u} = 4\\hat{i} + 3\\hat{j}\\text{ m/s}$, $\\vec{a} = -2\\hat{j}\\text{ m/s}^2$."
qs[-1]["options"] = {
    "A": "$5\\text{ m/s}$",
    "B": "$4\\text{ m/s}$",
    "C": "$3\\text{ m/s}$",
    "D": "$7\\text{ m/s}$"
}
qs[-1]["correct_opt"] = "A"
qs[-1]["steps"] = (
    "1. Find time of return to $y = 0$:\n"
    "   $y(t) = u_y t + \\frac{1}{2}a_y t^2 = 3t - t^2 = t(3 - t) = 0 \\implies t = 3\\text{ s}$.\n"
    "2. Horizontal velocity: $v_x = u_x + a_x t = 4 + 0 = 4\\text{ m/s}$.\n"
    "3. Vertical velocity: $v_y = u_y + a_y t = 3 - 2(3) = -3\\text{ m/s}$.\n"
    "4. Net speed: $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = 5\\text{ m/s}$."
)
qs[-1]["tip"] = "Since horizontal velocity is constant and vertical motion is symmetric, final speed upon return to the same level equals the initial speed: $v = u = 5\\text{ m/s}$!"
qs[-1]["solutionStructured"]["given"] = qs[-1]["given"]
qs[-1]["solutionStructured"]["stepByStep"] = qs[-1]["steps"]
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: 5 m/s"

# Q264 - Medium
qs.append(make_plane_q(
    num=264,
    question="A body starts with initial velocity $\\vec{u} = (2\\hat{i} - 3\\hat{j})\\text{ m/s}$ and moves with constant acceleration $\\vec{a} = (4\\hat{i} + 2\\hat{j})\\text{ m/s}^2$. What is its displacement vector $\\vec{s}$ during the 3rd second of its motion?",
    options={
        "A": "$12\\hat{i} + 2\\hat{j}\\text{ m}$",
        "B": "$14\\hat{i} + 3\\hat{j}\\text{ m}$",
        "C": "$10\\hat{i} - \\hat{j}\\text{ m}$",
        "D": "$18\\hat{i} + 0\\hat{j}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion in two dimensions with constant acceleration",
    concept="The displacement in the nth second is given by the vector formula $\\vec{s}_n = \\vec{u} + \\frac{1}{2}\\vec{a}(2n - 1)$.",
    given="$\\vec{u} = 2\\hat{i} - 3\\hat{j}\\text{ m/s}$, $\\vec{a} = 4\\hat{i} + 2\\hat{j}\\text{ m/s}^2$, $n = 3$.",
    formula="\\vec{s}_n = \\vec{u} + \\frac{1}{2}\\vec{a}(2n - 1)",
    steps=(
        "1. For $n = 3$, the factor is $(2n - 1) = 2(3) - 1 = 5$.\n"
        "2. Apply component-wise:\n"
        "   $s_{x, 3} = u_x + \\frac{1}{2}a_x(5) = 2 + \\frac{1}{2}(4)(5) = 2 + 10 = 12\\text{ m}$.\n"
        "   $s_{y, 3} = u_y + \\frac{1}{2}a_y(5) = -3 + \\frac{1}{2}(2)(5) = -3 + 5 = 2\\text{ m}$.\n"
        "3. Resulting displacement vector: $\\vec{s}_3 = 12\\hat{i} + 2\\hat{j}\\text{ m}$."
    ),
    tip="The nth second formula applies independently along each Cartesian axis!",
    why_wrong="Option B calculates total displacement in 3 seconds divided by 2; Option C makes a sign error in $u_y$."
))

# Q265 - Hard
qs.append(make_plane_q(
    num=265,
    question="A particle is moving in the xy-plane with constant acceleration $\\vec{a} = (-2\\hat{i} + 2\\hat{j})\\text{ m/s}^2$. At $t = 0$, its velocity is $\\vec{u} = (4\\hat{i} + 0\\hat{j})\\text{ m/s}$. What is the minimum speed of the particle during its entire motion?",
    options={
        "A": "$2\\sqrt{2}\\text{ m/s} \\approx 2.83\\text{ m/s}$",
        "B": "$4\\text{ m/s}$",
        "C": "$2\\text{ m/s}$",
        "D": "$0\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion in two dimensions with constant acceleration",
    concept="Speed is minimum when the velocity vector is perpendicular to the acceleration vector (rate of change of speed $\\frac{dv}{dt} = \\frac{\\vec{v}\\cdot\\vec{a}}{v} = 0$).",
    given="$\\vec{u} = 4\\hat{i}$, $\\vec{a} = -2\\hat{i} + 2\\hat{j}$.",
    formula="\\vec{v}(t) \\cdot \\vec{a} = 0; v(t)^2 = v_x(t)^2 + v_y(t)^2",
    steps=(
        "1. Write velocity vector at time $t$:\n"
        "   $\\vec{v}(t) = (4 - 2t)\\hat{i} + (2t)\\hat{j}$.\n"
        "2. Square of speed:\n"
        "   $v^2(t) = (4 - 2t)^2 + (2t)^2 = 16 - 16t + 4t^2 + 4t^2 = 8t^2 - 16t + 16$.\n"
        "3. Minimize $v^2(t)$ with respect to $t$:\n"
        "   $\\frac{d(v^2)}{dt} = 16t - 16 = 0 \\implies t = 1\\text{ s}$.\n"
        "4. At $t = 1\\text{ s}$, velocity components are:\n"
        "   $v_x = 4 - 2(1) = 2\\text{ m/s}$.\n"
        "   $v_y = 2(1) = 2\\text{ m/s}$.\n"
        "5. Minimum speed:\n"
        "   $v_{min} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\text{ m/s}$."
    ),
    tip="At the point of minimum speed, velocity is strictly orthogonal to acceleration: $\\vec{v}(1) \\cdot \\vec{a} = (2)(-2) + (2)(2) = -4 + 4 = 0$!",
    why_wrong="Option D assumes speed can drop to zero, but $v_x = 0$ ($t = 2$) gives $v_y = 4 \\ne 0$."
))

# Q266 - Hard
qs.append(make_plane_q(
    num=266,
    question="A particle moves in the xy-plane with constant acceleration $\\vec{a}$. It passes through the origin at $t = 0$ with velocity $\\vec{u}$. If its position vectors at $t = 1\\text{ s}$ and $t = 2\\text{ s}$ are $\\vec{r}_1 = (3\\hat{i} + 2\\hat{j})\\text{ m}$ and $\\vec{r}_2 = (8\\hat{i} + 8\\hat{j})\\text{ m}$, what is the acceleration $\\vec{a}$?",
    options={
        "A": "$2\\hat{i} + 4\\hat{j}\\text{ m/s}^2$",
        "B": "$4\\hat{i} + 2\\hat{j}\\text{ m/s}^2$",
        "C": "$1\\hat{i} + 2\\hat{j}\\text{ m/s}^2$",
        "D": "$3\\hat{i} + 2\\hat{j}\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion in two dimensions with constant acceleration",
    concept="Use $\\vec{r}(t) = \\vec{u}t + \\frac{1}{2}\\vec{a}t^2$ at $t = 1$ and $t = 2$ to eliminate $\\vec{u}$ and solve for $\\vec{a}$.",
    given="$\\vec{r}_1 = 3\\hat{i} + 2\\hat{j}$ at $t=1$; $\\vec{r}_2 = 8\\hat{i} + 8\\hat{j}$ at $t=2$.",
    formula="\\vec{r}_2 - 2\\vec{r}_1 = \\vec{a}",
    steps=(
        "1. At $t = 1$: $\\vec{r}_1 = \\vec{u}(1) + \\frac{1}{2}\\vec{a}(1)^2 = \\vec{u} + \\frac{1}{2}\\vec{a}$.\n"
        "2. Multiply by 2: $2\\vec{r}_1 = 2\\vec{u} + \\vec{a}$.\n"
        "3. At $t = 2$: $\\vec{r}_2 = \\vec{u}(2) + \\frac{1}{2}\\vec{a}(2)^2 = 2\\vec{u} + 2\\vec{a}$.\n"
        "4. Subtract Eq 2 from Eq 3:\n"
        "   $\\vec{r}_2 - 2\\vec{r}_1 = (2\\vec{u} + 2\\vec{a}) - (2\\vec{u} + \\vec{a}) = \\vec{a}$.\n"
        "5. Substitute values:\n"
        "   $\\vec{a} = (8\\hat{i} + 8\\hat{j}) - 2(3\\hat{i} + 2\\hat{j}) = (8 - 6)\\hat{i} + (8 - 4)\\hat{j} = 2\\hat{i} + 4\\hat{j}\\text{ m/s}^2$."
    ),
    tip="Super formula: For constant acceleration starting from origin, $\\vec{a} = \\vec{r}_2 - 2\\vec{r}_1$ directly!",
    why_wrong="Option B swaps the x and y acceleration values; Option C forgets the factor of 2 in $\\frac{1}{2}\\vec{a}(4)$."
))

# Q267 - Hard
qs.append(make_plane_q(
    num=267,
    question="In the previous question, what was the initial velocity $\\vec{u}$ of the particle at $t = 0$?",
    options={
        "A": "$2\\hat{i} + 0\\hat{j}\\text{ m/s}$",
        "B": "$3\\hat{i} + 2\\hat{j}\\text{ m/s}$",
        "C": "$1\\hat{i} + 1\\hat{j}\\text{ m/s}$",
        "D": "$0\\hat{i} + 2\\hat{j}\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion in two dimensions with constant acceleration",
    concept="Substitute $\\vec{a} = 2\\hat{i} + 4\\hat{j}$ back into $\\vec{u} = \\vec{r}_1 - \\frac{1}{2}\\vec{a}$.",
    given="$\\vec{r}_1 = 3\\hat{i} + 2\\hat{j}$, $\\vec{a} = 2\\hat{i} + 4\\hat{j}$.",
    formula="\\vec{u} = \\vec{r}_1 - \\frac{1}{2}\\vec{a}",
    steps=(
        "1. From $t = 1\\text{ s}$:\n"
        "   $\\vec{r}_1 = \\vec{u} + \\frac{1}{2}\\vec{a} \\implies \\vec{u} = \\vec{r}_1 - \\frac{1}{2}\\vec{a}$.\n"
        "2. Substitute known vectors:\n"
        "   $\\vec{u} = (3\\hat{i} + 2\\hat{j}) - \\frac{1}{2}(2\\hat{i} + 4\\hat{j}) = (3\\hat{i} + 2\\hat{j}) - (\\hat{i} + 2\\hat{j})$.\n"
        "3. Simplify:\n"
        "   $\\vec{u} = (3 - 1)\\hat{i} + (2 - 2)\\hat{j} = 2\\hat{i} + 0\\hat{j}\\text{ m/s}$."
    ),
    tip="Check at $t = 2$: $\\vec{r}(2) = 2(2\\hat{i}) + \\frac{1}{2}(2\\hat{i} + 4\\hat{j})(4) = 4\\hat{i} + 4\\hat{i} + 8\\hat{j} = 8\\hat{i} + 8\\hat{j}$. Matches perfectly!",
    why_wrong="Option B is $\\vec{r}_1$ itself; Option C is $\\frac{1}{2}\\vec{a}$."
))

# Q268 - Hard
qs.append(make_plane_q(
    num=268,
    question="A particle is moving in the xy-plane with constant acceleration $\\vec{a} = a_x\\hat{i} + a_y\\hat{j}$. Which of the following conditions ensures that the particle NEVER reverses its direction of motion along the x-axis?",
    options={
        "A": "$u_x$ and $a_x$ have the same sign (or $a_x = 0$)",
        "B": "$u_y$ and $a_y$ have opposite signs",
        "C": "$u_x = 0$ and $a_x \\ne 0$",
        "D": "$|\\vec{u}| > |\\vec{a}|$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion in two dimensions with constant acceleration",
    concept="For a particle to reverse direction along an axis, its velocity along that axis must pass through zero: $v_x = u_x + a_x t = 0 \\implies t = -u_x/a_x$. For this reversal time to be positive ($t > 0$), $u_x$ and $a_x$ must have opposite signs. If they have the same sign, $t < 0$, so no future reversal occurs.",
    given="Motion along x-axis with initial velocity $u_x$ and acceleration $a_x$.",
    formula="v_x(t) = u_x + a_x t",
    steps=(
        "1. Reversal along x occurs when $v_x(t) = 0$.\n"
        "2. Solving gives $t = -\\frac{u_x}{a_x}$.\n"
        "3. If $u_x$ and $a_x$ have the same sign (both positive or both negative), then $-\\frac{u_x}{a_x} < 0$, meaning the velocity never reaches zero for any future time $t > 0$.\n"
        "4. If $a_x = 0$, $v_x(t) = u_x$ remains constant and never reverses.\n"
        "5. Therefore, having the same sign (or $a_x = 0$) guarantees no reversal along the x-axis."
    ),
    tip="Reversal requires retardation first! If acceleration and velocity are in the same direction, the speed monotonically increases with NO turning point.",
    why_wrong="Option B concerns the y-axis, which is completely decoupled from the x-axis; Option C starts from rest and moves continuously in one direction."
))

# ==============================================================================
# Topic 16: Projectile motion and its assumptions (Q269 to Q285, 17 questions)
# Distribution: 4 Easy, 9 Medium, 4 Hard
# ==============================================================================

# Q269 - Easy
qs.append(make_plane_q(
    num=269,
    question="Which of the following is NOT an assumption made in standard ideal projectile motion near the Earth's surface?",
    options={
        "A": "Air resistance significantly retards the projectile's motion",
        "B": "The acceleration due to gravity $g$ is constant in magnitude and direction",
        "C": "The curvature of the Earth is neglected",
        "D": "The rotation of the Earth is neglected"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion and its assumptions",
    concept="In standard elementary projectile motion, air resistance is assumed to be completely negligible so that horizontal acceleration is zero ($a_x = 0$) and vertical acceleration is uniformly downward ($a_y = -g$).",
    given="Standard NCERT projectile motion assumptions.",
    formula="a_x = 0, a_y = -g = -9.8\\text{ m/s}^2",
    steps=(
        "1. Standard projectile model assumes:\n"
        "   - Negligible air resistance ($a_x = 0$).\n"
        "   - Constant acceleration due to gravity $g$ downwards.\n"
        "   - Flat Earth approximation (small range compared to Earth's radius $R_E \\approx 6400\\text{ km}$).\n"
        "   - Negligible Coriolis force from Earth's rotation.\n"
        "2. Therefore, assuming significant air resistance is FALSE."
    ),
    tip="Standard projectile motion is governed purely by uniform gravity ($a_x = 0, a_y = -g$).",
    why_wrong="Options B, C, and D are all valid standard assumptions of ideal projectile theory."
))

# Q270 - Easy
qs.append(make_plane_q(
    num=270,
    question="A person sitting in an open car moving with constant horizontal velocity throws a ball vertically upward into the air. Neglecting air resistance, where will the ball land?",
    options={
        "A": "Exactly back into the person's hands",
        "B": "Behind the car",
        "C": "In front of the car",
        "D": "Beside the car"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion and its assumptions",
    concept="Both the ball and the car share the exact same constant horizontal velocity $v_x$. Because no horizontal forces act on the ball during flight, their horizontal displacements at any time $t$ are identical ($x_{ball} = x_{car} = v_x t$).",
    given="Car at constant velocity $v$, ball thrown vertically relative to car, no air resistance.",
    formula="x_{ball}(t) = v t; x_{car}(t) = v t",
    steps=(
        "1. The ball possesses an initial horizontal velocity equal to that of the car: $u_x = v_{car}$.\n"
        "2. Since air resistance is neglected, horizontal acceleration of the ball is zero ($a_x = 0$).\n"
        "3. Thus, at every instant of time $t$, $x_{ball}(t) = v_{car} t = x_{car}(t)$.\n"
        "4. When the ball returns to the throw height, it lands precisely back in the person's hands."
    ),
    tip="In the reference frame of the moving car, the ball moves in simple 1D vertical motion up and down!",
    why_wrong="Option B would only occur if the car accelerated forward during flight or if air resistance slowed the ball.",
    is_pyq=True,
    pyq_year=2020,
    source="NEET UG 2020"
))

# Q271 - Easy
qs.append(make_plane_q(
    num=271,
    question="During projectile motion, which of the following quantities remains strictly constant throughout the flight?",
    options={
        "A": "Horizontal component of velocity",
        "B": "Vertical component of velocity",
        "C": "Speed of the projectile",
        "D": "Kinetic energy of the projectile"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion and its assumptions",
    concept="Since no force acts in the horizontal direction ($F_x = 0 \\implies a_x = 0$), the horizontal component of velocity remains invariant throughout flight: $v_x = u\\cos\\theta = \\text{constant}$.",
    given="Ideal projectile motion with gravity acting purely vertically.",
    formula="v_x = u\\cos\\theta = \\text{constant}",
    steps=(
        "1. Gravity acts strictly in the vertical direction (along $-\\hat{j}$).\n"
        "2. There is no force acting along the horizontal axis ($\\hat{i}$).\n"
        "3. By Newton's second law, $a_x = \\frac{F_x}{m} = 0$.\n"
        "4. Thus $v_x(t) = u_x = u\\cos\\theta$ at all points along the trajectory."
    ),
    tip="At the highest point, vertical velocity is zero ($v_y = 0$), but horizontal velocity is STILL $u\\cos\\theta$!",
    why_wrong="Option B changes continuously due to gravity ($v_y = u\\sin\\theta - gt$); Options C and D vary with height."
))

# Q272 - Easy
qs.append(make_plane_q(
    num=272,
    question="What is the angle between the velocity vector and the acceleration vector of an oblique projectile at the highest point of its trajectory?",
    options={
        "A": "$90^\\circ$",
        "B": "$0^\\circ$",
        "C": "$180^\\circ$",
        "D": "$45^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion and its assumptions",
    concept="At the highest point, vertical velocity is zero ($v_y = 0$), so the velocity is purely horizontal ($u\\cos\\theta\\hat{i}$). Acceleration due to gravity is purely vertically downward ($-g\\hat{j}$). The angle between horizontal and vertical is $90^\\circ$.",
    given="Highest point of trajectory.",
    formula="\\vec{v}_{top} = u\\cos\\theta\\hat{i}; \\vec{a} = -g\\hat{j}; \\vec{v} \\cdot \\vec{a} = 0 \\implies 90^\\circ",
    steps=(
        "1. At the apex, $v_y = 0$, so $\\vec{v} = (u\\cos\\theta)\\hat{i}$ (horizontal).\n"
        "2. Acceleration is everywhere $\\vec{a} = -g\\hat{j}$ (vertically downwards).\n"
        "3. Since horizontal and vertical axes are orthogonal, the angle between them is $90^\\circ$."
    ),
    tip="Highest point condition: $\\vec{v} \\perp \\vec{a}$. This is also where speed is at its absolute minimum!",
    why_wrong="Option B implies velocity is downward; Option D is true only at specific mid-flight points."
))

# Q273 - Medium
qs.append(make_plane_q(
    num=273,
    question="A projectile is launched with initial velocity $\\vec{u} = (3\\hat{i} + 4\\hat{j})\\text{ m/s}$ (where $\\hat{i}$ is horizontal and $\\hat{j}$ is vertically upward). What is its velocity vector at the highest point of its flight?",
    options={
        "A": "$3\\hat{i}\\text{ m/s}$",
        "B": "$4\\hat{j}\\text{ m/s}$",
        "C": "$0\\text{ m/s}$",
        "D": "$5\\hat{i}\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="At the highest point of flight, the vertical velocity component is momentarily zero ($v_y = 0$), while the horizontal component remains unchanged ($v_x = u_x = 3\\text{ m/s}$).",
    given="$\\vec{u} = 3\\hat{i} + 4\\hat{j}\\text{ m/s}$.",
    formula="\\vec{v}_{top} = u_x\\hat{i} + 0\\hat{j} = 3\\hat{i}\\text{ m/s}",
    steps=(
        "1. Initial horizontal velocity: $u_x = 3\\text{ m/s}$.\n"
        "2. Initial vertical velocity: $u_y = 4\\text{ m/s}$.\n"
        "3. At the maximum height, $v_y = 0$.\n"
        "4. Since horizontal acceleration $a_x = 0$, $v_x$ remains $3\\text{ m/s}$.\n"
        "5. Therefore, $\\vec{v}_{top} = 3\\hat{i}\\text{ m/s}$."
    ),
    tip="At the summit of an oblique projectile, velocity is NEVER zero! Only the vertical component vanishes, leaving the horizontal component intact.",
    why_wrong="Option C is for vertical throw in 1D, not 2D projectile; Option D is the initial speed $\\sqrt{3^2+4^2} = 5$.",
    is_pyq=True,
    pyq_year=2022,
    source="NEET UG 2022"
))

# Q274 - Medium
qs.append(make_plane_q(
    num=274,
    question="A projectile is launched from ground with speed $u$ at an angle of $60^\\circ$ to the horizontal. If its initial kinetic energy is $K$, what is the kinetic energy of the projectile at the highest point of its trajectory?",
    options={
        "A": "$\\frac{K}{4}$",
        "B": "$\\frac{K}{2}$",
        "C": "$\\frac{3K}{4}$",
        "D": "$0$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="At the highest point, speed is $v_{top} = u\\cos\\theta$. Kinetic energy is proportional to the square of speed: $K_{top} = \\frac{1}{2}m v_{top}^2 = \\frac{1}{2}m (u\\cos\\theta)^2 = K\\cos^2\\theta$.",
    given="$\\theta = 60^\\circ$, initial $K = \\frac{1}{2}m u^2$.",
    formula="K_{top} = K \\cos^2\\theta",
    steps=(
        "1. Initial kinetic energy: $K = \\frac{1}{2}m u^2$.\n"
        "2. Velocity at highest point: $v_{top} = u\\cos 60^\\circ = u \\times \\frac{1}{2} = \\frac{u}{2}$.\n"
        "3. Kinetic energy at highest point:\n"
        "   $K_{top} = \\frac{1}{2}m \\left(\\frac{u}{2}\\right)^2 = \\frac{1}{4} \\left(\\frac{1}{2}m u^2\\right) = \\frac{K}{4}$."
    ),
    tip="NEET favorite formula: $K_{top} = K\\cos^2\\theta$. For $60^\\circ$, $\\cos^2 60^\\circ = (1/2)^2 = 1/4$. For $45^\\circ$, $K/2$. For $30^\\circ$, $3K/4$!",
    why_wrong="Option B corresponds to $\\theta = 45^\\circ$; Option C corresponds to $\\theta = 30^\\circ$; Option D assumes zero speed at top.",
    is_pyq=True,
    pyq_year=2023,
    source="NEET UG 2023"
))

# Q275 - Medium
qs.append(make_plane_q(
    num=275,
    question="A projectile is launched from the ground with speed $u$ at an angle $\\theta$ with the horizontal. The speed of the projectile at its maximum height is $\\frac{\\sqrt{3}}{2}$ times its initial speed $u$. What is the angle of projection $\\theta$?",
    options={
        "A": "$30^\\circ$",
        "B": "$60^\\circ$",
        "C": "$45^\\circ$",
        "D": "$15^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="At maximum height, speed is purely horizontal: $v_{top} = u\\cos\\theta$. Equate $u\\cos\\theta = \\frac{\\sqrt{3}}{2} u$ to find $\\theta$.",
    given="$v_{top} = \\frac{\\sqrt{3}}{2} u$.",
    formula="u\\cos\\theta = \\frac{\\sqrt{3}}{2} u \\implies \\cos\\theta = \\frac{\\sqrt{3}}{2}",
    steps=(
        "1. At highest point, $v_y = 0$, so speed is $v = u\\cos\\theta$.\n"
        "2. Given: $u\\cos\\theta = \\frac{\\sqrt{3}}{2} u$.\n"
        "3. Dividing both sides by $u$ gives $\\cos\\theta = \\frac{\\sqrt{3}}{2}$.\n"
        "4. Since $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, the launch angle is $\\theta = 30^\\circ$."
    ),
    tip="Recall: $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.866$. A direct single-step NEET question!",
    why_wrong="Option B gives $\\cos 60^\\circ = 1/2$; Option C gives $\\cos 45^\\circ = 1/\\sqrt{2}$.",
    is_pyq=True,
    pyq_year=2025,
    source="NEET UG 2025"
))

# Q276 - Medium
qs.append(make_plane_q(
    num=276,
    question="If air resistance is taken into account in projectile motion, how do the time of ascent $t_a$ and time of descent $t_d$ compare?",
    options={
        "A": "$t_a < t_d$",
        "B": "$t_a > t_d$",
        "C": "$t_a = t_d$",
        "D": "$t_a = 2 t_d$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="During ascent, gravity and air resistance both act downwards ($a_{net} = g + a_{air}$), causing rapid deceleration. During descent, air resistance opposes gravity ($a_{net} = g - a_{air}$), resulting in smaller downward acceleration and thus a longer time of descent.",
    given="Motion under gravity with air resistance.",
    formula="a_{ascent} = g + a_{drag}; a_{descent} = g - a_{drag}",
    steps=(
        "1. During upward flight (ascent), velocity is upward, so air resistance force acts downward.\n"
        "   Total retardation: $a_{up} = g + a_{air}$.\n"
        "2. During downward flight (descent), velocity is downward, so air resistance acts upward.\n"
        "   Net acceleration: $a_{down} = g - a_{air}$.\n"
        "3. Since $a_{up} > a_{down}$, the projectile loses upward speed faster than it gains downward speed over the same height $H$.\n"
        "4. Therefore, time of ascent is strictly less than time of descent: $t_a < t_d$."
    ),
    tip="With air resistance: Ascent is fast ($g+f$), descent is slow ($g-f$), and landing speed is less than launch speed ($v < u$)!",
    why_wrong="Option C holds true only in vacuum (ideal projectile motion)."
))

# Q277 - Medium
qs.append(make_plane_q(
    num=277,
    question="A ball is thrown at an angle $\\theta$ with the horizontal. What is the radius of curvature of its trajectory at the highest point?",
    options={
        "A": "$\\frac{u^2 \\cos^2\\theta}{g}$",
        "B": "$\\frac{u^2}{g}$",
        "C": "$\\frac{u^2 \\sin^2\\theta}{g}$",
        "D": "$\\frac{u^2 \\cos^2\\theta}{2g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="The radius of curvature of any curve is given by $R_c = \\frac{v^2}{a_{\\perp}}$, where $a_{\\perp}$ is the component of acceleration normal to the velocity.",
    given="Speed at top is $v = u\\cos\\theta$; normal acceleration is $a_{\\perp} = g$.",
    formula="R_c = \\frac{v^2}{a_{\\perp}} = \\frac{(u\\cos\\theta)^2}{g}",
    steps=(
        "1. At the highest point, the velocity is entirely horizontal: $v = u\\cos\\theta$.\n"
        "2. The acceleration is entirely vertical: $a = g$.\n"
        "3. Since velocity and acceleration are mutually perpendicular at the apex, the full acceleration acts as centripetal (normal) acceleration: $a_{\\perp} = g$.\n"
        "4. Radius of curvature: $R_c = \\frac{v^2}{a_{\\perp}} = \\frac{(u\\cos\\theta)^2}{g} = \\frac{u^2\\cos^2\\theta}{g}$."
    ),
    tip="At the launch point, $a_{\\perp} = g\\cos\\theta$, so radius of curvature at launch is $\\frac{u^2}{g\\cos\\theta}$. At the top, it is $\\frac{u^2\\cos^2\\theta}{g}$.",
    why_wrong="Option D is the maximum height formula $H = \\frac{u^2\\sin^2\\theta}{2g}$."
))

# Q278 - Medium
qs.append(make_plane_q(
    num=278,
    question="Two balls are dropped and thrown horizontally simultaneously from the same height $h$. Ball A is simply dropped from rest, while Ball B is thrown horizontally with speed $u$. Neglecting air resistance, which ball reaches the ground first?",
    options={
        "A": "Both balls reach the ground at the exact same time",
        "B": "Ball A reaches first because it has no horizontal motion",
        "C": "Ball B reaches first because it has greater total speed",
        "D": "It depends on the mass of the balls"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="Independence of orthogonal motions: the vertical motion is governed by $h = \\frac{1}{2}g t^2$ for both balls, because both have zero initial vertical velocity ($u_y = 0$).",
    given="Same height $h$, $u_{Ay} = 0, u_{By} = 0$, $a_y = g$.",
    formula="t = \\sqrt{\\frac{2h}{g}}",
    steps=(
        "1. For Ball A (free fall): $u_{Ay} = 0$, $h = \\frac{1}{2}gt^2 \\implies t_A = \\sqrt{\\frac{2h}{g}}$.\n"
        "2. For Ball B (horizontal projection): $u_{By} = 0$, $h = \\frac{1}{2}gt^2 \\implies t_B = \\sqrt{\\frac{2h}{g}}$.\n"
        "3. The horizontal velocity of Ball B does not affect its vertical acceleration or vertical displacement.\n"
        "4. Both balls hit the ground simultaneously."
    ),
    tip="Famous physics demonstration: The bullet fired horizontally and the bullet dropped from the same height hit the ground at the exact same instant!",
    why_wrong="Options B and C confuse horizontal motion with vertical motion."
))

# Q279 - Medium
qs.append(make_plane_q(
    num=279,
    question="During the flight of a projectile, what is the work done by gravity from the instant of launch to the instant of return to the same horizontal level?",
    options={
        "A": "$0$",
        "B": "$m g H$",
        "C": "$-m g H$",
        "D": "$\\frac{1}{2} m u^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="Gravitational force is conservative. The net vertical displacement over a full flight from launch level back to landing level is zero ($\\Delta y = 0$), so the total work done is $W = -mg \\Delta y = 0$.",
    given="Launch and landing at the same height $y = 0$.",
    formula="W = \\vec{F}_g \\cdot \\Delta\\vec{r} = (-mg\\hat{j}) \\cdot (R\\hat{i} + 0\\hat{j}) = 0",
    steps=(
        "1. Net vertical displacement between launch and landing: $\\Delta y = y_f - y_i = 0$.\n"
        "2. Work done by gravity: $W = -mg\\Delta y = -mg(0) = 0$.\n"
        "3. Alternatively, gravity does negative work during ascent ($-mgH$) and equal positive work during descent ($+mgH$). Net sum: $-mgH + mgH = 0$."
    ),
    tip="By work-energy theorem: $W_{net} = \\Delta K = K_f - K_i = 0$, meaning the landing kinetic energy equals the launch kinetic energy!",
    why_wrong="Option B is the work done only during descent; Option C is the work done only during ascent."
))

# Q280 - Medium
qs.append(make_plane_q(
    num=280,
    question="A body is projected at an angle $\\theta$ with the horizontal. What is the rate of change of speed (tangential acceleration $a_t$) at any instant $t$?",
    options={
        "A": "$-g\\sin\\alpha$, where $\\alpha$ is the instantaneous angle of velocity with the horizontal",
        "B": "$-g$",
        "C": "$0$",
        "D": "$g\\cos\\alpha$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="Tangential acceleration is the component of total acceleration along the direction of velocity: $a_t = \\frac{dv}{dt} = \\frac{\\vec{a}\\cdot\\vec{v}}{v}$.",
    given="$\\vec{v} = v\\cos\\alpha\\hat{i} + v\\sin\\alpha\\hat{j}$, $\\vec{a} = -g\\hat{j}$.",
    formula="a_t = \\frac{\\vec{a} \\cdot \\vec{v}}{v} = \\frac{(-g)(v\\sin\\alpha)}{v} = -g\\sin\\alpha",
    steps=(
        "1. Velocity vector makes instantaneous angle $\\alpha$ with horizontal:\n"
        "   $\\vec{v} = v(\\cos\\alpha\\hat{i} + \\sin\\alpha\\hat{j})$.\n"
        "2. Acceleration vector: $\\vec{a} = -g\\hat{j}$.\n"
        "3. Tangential acceleration (rate of change of speed):\n"
        "   $a_t = \\frac{\\vec{a} \\cdot \\vec{v}}{|\\vec{v}|} = \\frac{0 - g v\\sin\\alpha}{v} = -g\\sin\\alpha$."
    ),
    tip="During ascent ($\\alpha > 0$), $a_t = -g\\sin\\alpha < 0$ (speed decreases). At apex ($\\alpha = 0$), $a_t = 0$ (speed is stationary/minimum). During descent ($\\alpha < 0$), $a_t > 0$ (speed increases)!",
    why_wrong="Option B confuses tangential acceleration with total acceleration; Option C is only true at the peak."
))

# Q281 - Medium
qs.append(make_plane_q(
    num=281,
    question="At what point in the trajectory of a projectile is the magnitude of its momentum minimum?",
    options={
        "A": "At the highest point",
        "B": "At the point of projection",
        "C": "At the point of landing",
        "D": "Momentum is constant throughout"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion and its assumptions",
    concept="Momentum magnitude is $p = mv$. Since mass $m$ is constant, momentum is minimum where speed $v$ is minimum. The speed is minimum at the highest point ($v = u\\cos\\theta$).",
    given="Mass $m$, projectile motion.",
    formula="p_{min} = m v_{min} = m u\\cos\\theta",
    steps=(
        "1. Linear momentum magnitude: $p(t) = m v(t)$.\n"
        "2. The horizontal speed is constant ($u\\cos\\theta$), and vertical speed is $v_y(t)$.\n"
        "3. Total speed is $v = \\sqrt{u^2\\cos^2\\theta + v_y^2}$.\n"
        "4. This is minimized when $v_y = 0$, which occurs uniquely at the highest point of trajectory.\n"
        "5. Minimum momentum is $p_{min} = mu\\cos\\theta$."
    ),
    tip="Momentum is minimum at the top ($mu\\cos\\theta$) and maximum at launch and landing ($mu$).",
    why_wrong="Options B and C are where momentum is at its maximum."
))

# Q282 - Hard
qs.append(make_plane_q(
    num=282,
    question="A projectile is fired with speed $u$ at angle $\\theta$ to the horizontal. What is the average velocity of the projectile between the instant of launch and the instant it reaches its maximum height?",
    options={
        "A": "$\\frac{u}{2}\\sqrt{1 + 3\\cos^2\\theta}$",
        "B": "$\\frac{u}{2}\\cos\\theta$",
        "C": "$u\\cos\\theta$",
        "D": "$\\frac{u}{2}\\sqrt{1 + \\cos^2\\theta}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion and its assumptions",
    concept="Average velocity is defined as total displacement divided by total time: $\\vec{v}_{avg} = \\frac{\\Delta\\vec{r}}{\\Delta t}$. At the highest point, $\\Delta x = u\\cos\\theta \\times t_{top}$ and $\\Delta y = H = \\frac{1}{2} u\\sin\\theta \\times t_{top}$.",
    given="Launch to maximum height, where $t_{top} = \\frac{u\\sin\\theta}{g}$.",
    formula="\\vec{v}_{avg} = u\\cos\\theta\\hat{i} + \\frac{u\\sin\\theta}{2}\\hat{j}",
    steps=(
        "1. Time to reach highest point: $t_1 = \\frac{u\\sin\\theta}{g}$.\n"
        "2. Horizontal displacement: $\\Delta x = (u\\cos\\theta) t_1$.\n"
        "   Average horizontal velocity: $v_{avg, x} = \\frac{\\Delta x}{t_1} = u\\cos\\theta$.\n"
        "3. Vertical displacement: $\\Delta y = H = \\frac{u^2\\sin^2\\theta}{2g} = \\frac{u\\sin\\theta}{2} t_1$.\n"
        "   Average vertical velocity: $v_{avg, y} = \\frac{\\Delta y}{t_1} = \\frac{u\\sin\\theta}{2}$.\n"
        "4. Magnitude of average velocity:\n"
        "   $|\\vec{v}_{avg}| = \\sqrt{(u\\cos\\theta)^2 + \\left(\\frac{u\\sin\\theta}{2}\\right)^2} = u\\sqrt{\\cos^2\\theta + \\frac{\\sin^2\\theta}{4}}$.\n"
        "5. Simplify using $\\sin^2\\theta = 1 - \\cos^2\\theta$:\n"
        "   $= u\\sqrt{\\frac{4\\cos^2\\theta + 1 - \\cos^2\\theta}{4}} = \\frac{u}{2}\\sqrt{1 + 3\\cos^2\\theta}$."
    ),
    tip="Remember that for constant acceleration, $\\vec{v}_{avg} = \\frac{\\vec{u} + \\vec{v}}{2}$! Here $\\vec{u} = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$ and $\\vec{v} = u\\cos\\theta\\hat{i} + 0\\hat{j}$. Average is $u\\cos\\theta\\hat{i} + \\frac{u\\sin\\theta}{2}\\hat{j}$! So simple!",
    why_wrong="Option C is only the horizontal component."
))

# Q283 - Hard
qs.append(make_plane_q(
    num=283,
    question="In the previous question, what is the average velocity of the projectile over its ENTIRE flight (from launch to landing on the same horizontal level)?",
    options={
        "A": "$u\\cos\\theta\\hat{i}$ (magnitude $u\\cos\\theta$)",
        "B": "$0$",
        "C": "$u$",
        "D": "$\\frac{u}{2}\\cos\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion and its assumptions",
    concept="Over the complete flight, net vertical displacement is zero ($\\Delta y = 0$). Total horizontal displacement is the range $R = (u\\cos\\theta) T$. Average velocity is $\\frac{\\Delta\\vec{r}}{T} = \\frac{R\\hat{i}}{T} = u\\cos\\theta\\hat{i}$.",
    given="Full flight from $y = 0$ to $y = 0$.",
    formula="\\vec{v}_{avg} = \\frac{\\Delta\\vec{r}}{T} = \\frac{R\\hat{i} + 0\\hat{j}}{T} = u\\cos\\theta\\hat{i}",
    steps=(
        "1. Net displacement over the entire flight is purely horizontal: $\\Delta\\vec{r} = R\\hat{i}$.\n"
        "2. Total time of flight is $T$.\n"
        "3. Since $R = (u\\cos\\theta) T$, the average velocity vector is:\n"
        "   $\\vec{v}_{avg} = \\frac{R\\hat{i}}{T} = u\\cos\\theta\\hat{i}$.\n"
        "4. Alternatively, use $\\vec{v}_{avg} = \\frac{\\vec{u} + \\vec{v}_{final}}{2}$:\n"
        "   $\\frac{(u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}) + (u\\cos\\theta\\hat{i} - u\\sin\\theta\\hat{j})}{2} = u\\cos\\theta\\hat{i}$."
    ),
    tip="Average velocity over full flight is purely horizontal and equals $u\\cos\\theta$!",
    why_wrong="Option B confuses average velocity with displacement (displacement is non-zero: $R$); Option C confuses average speed with average velocity."
))

# Q284 - Hard
qs.append(make_plane_q(
    num=284,
    question="A projectile is launched from ground with speed $u$ at angle $\\theta$. What is the magnitude of the change in momentum $|\\Delta\\vec{p}|$ of the projectile over its entire flight?",
    options={
        "A": "$2 m u \\sin\\theta$",
        "B": "$2 m u \\cos\\theta$",
        "C": "$2 m u$",
        "D": "$0$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion and its assumptions",
    concept="Momentum change is $\\Delta\\vec{p} = m(\\vec{v}_f - \\vec{v}_i)$. Since the horizontal velocity does not change ($v_{xf} - v_{xi} = 0$), the momentum change is purely in the vertical direction: $\\Delta p_y = m(-u\\sin\\theta - u\\sin\\theta) = -2mu\\sin\\theta$.",
    given="$\\vec{v}_i = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$, $\\vec{v}_f = u\\cos\\theta\\hat{i} - u\\sin\\theta\\hat{j}$.",
    formula="|\\Delta\\vec{p}| = m |\\vec{v}_f - \\vec{v}_i| = m |(-2u\\sin\\theta)\\hat{j}| = 2mu\\sin\\theta",
    steps=(
        "1. Initial momentum: $\\vec{p}_i = m(u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j})$.\n"
        "2. Final momentum upon landing: $\\vec{p}_f = m(u\\cos\\theta\\hat{i} - u\\sin\\theta\\hat{j})$.\n"
        "3. Change in momentum:\n"
        "   $\\Delta\\vec{p} = \\vec{p}_f - \\vec{p}_i = -2mu\\sin\\theta\\hat{j}$.\n"
        "4. Magnitude:\n"
        "   $|\\Delta\\vec{p}| = 2mu\\sin\\theta$.\n"
        "5. Alternatively, by impulse-momentum theorem: $|\\Delta\\vec{p}| = F_g \\times T = mg \\left(\\frac{2u\\sin\\theta}{g}\\right) = 2mu\\sin\\theta$."
    ),
    tip="Impulse shortcut: $J = F \\times T = mg \\times \\frac{2u\\sin\\theta}{g} = 2mu\\sin\\theta$. Always double check with impulse!",
    why_wrong="Option B uses the horizontal component, which has zero change; Option D claims momentum is conserved, forgetting external gravity."
))

# Q285 - Hard
qs.append(make_plane_q(
    num=285,
    question="In the previous question, what is the magnitude of the change in momentum between the launch point and the HIGHEST point of flight?",
    options={
        "A": "$m u \\sin\\theta$",
        "B": "$m u \\cos\\theta$",
        "C": "$m u$",
        "D": "$2 m u \\sin\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion and its assumptions",
    concept="At the highest point, vertical velocity is zero: $\\vec{v}_{top} = u\\cos\\theta\\hat{i}$. Thus $\\Delta\\vec{p} = m(\\vec{v}_{top} - \\vec{v}_i) = m(0 - u\\sin\\theta)\\hat{j} = -mu\\sin\\theta\\hat{j}$.",
    given="$\\vec{v}_i = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$, $\\vec{v}_{top} = u\\cos\\theta\\hat{i}$.",
    formula="|\\Delta\\vec{p}| = m|\\vec{v}_{top} - \\vec{v}_i| = mu\\sin\\theta",
    steps=(
        "1. At launch: $\\vec{p}_i = mu\\cos\\theta\\hat{i} + mu\\sin\\theta\\hat{j}$.\n"
        "2. At top: $\\vec{p}_{top} = mu\\cos\\theta\\hat{i} + 0\\hat{j}$.\n"
        "3. Change: $\\Delta\\vec{p} = \\vec{p}_{top} - \\vec{p}_i = -mu\\sin\\theta\\hat{j}$.\n"
        "4. Magnitude: $|\\Delta\\vec{p}| = mu\\sin\\theta$.\n"
        "5. Via impulse: $J = mg \\times t_{top} = mg \\left(\\frac{u\\sin\\theta}{g}\\right) = mu\\sin\\theta$."
    ),
    tip="Notice: change in momentum to the top is $mu\\sin\\theta$, and for the full flight it is $2mu\\sin\\theta$!",
    why_wrong="Option B uses the horizontal component; Option D is for the full flight."
))

# Save topics 15 and 16
with open('scripts/mip_topics15_16.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topics 15 and 16 generated successfully:", len(qs))
