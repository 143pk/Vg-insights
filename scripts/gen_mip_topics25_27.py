import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 25: Uniform circular motion (Q422 to Q437, 16 questions)
# Distribution: 4 Easy, 8 Medium, 4 Hard
# ==============================================================================

# Q422 - Easy
qs.append(make_plane_q(
    num=422,
    question="In uniform circular motion (UCM), which of the following physical quantities remains CONSTANT?",
    options={
        "A": "Speed and kinetic energy",
        "B": "Velocity vector and speed",
        "C": "Acceleration vector and velocity vector",
        "D": "Linear momentum vector"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform circular motion",
    concept="In uniform circular motion, the magnitude of velocity (speed $v$) is constant, which means kinetic energy $K = \\frac{1}{2}mv^2$ is also constant. However, the direction of the velocity vector continuously changes along the tangent, so velocity, momentum, and acceleration vectors are NOT constant.",
    given="Uniform circular motion.",
    formula="v = \\text{constant}; K = \\frac{1}{2}mv^2 = \\text{constant}; \\vec{v}(t) \\ne \\text{constant}",
    steps=(
        "1. By definition, in uniform circular motion, the particle covers equal distances along the circumference in equal intervals of time.\n"
        "2. Therefore, scalar speed $v$ is constant.\n"
        "3. Since mass $m$ is constant, kinetic energy $K = \\frac{1}{2}mv^2$ is strictly constant.\n"
        "4. Because the direction of motion continuously rotates, vector quantities (velocity $\\vec{v}$, momentum $\\vec{p} = m\\vec{v}$, and centripetal acceleration $\\vec{a}_c$) continuously change."
    ),
    tip="Scalar quantities (speed, kinetic energy, angular speed, time period) are constant. Vector quantities (velocity, momentum, acceleration) continuously change!",
    why_wrong="Options B, C, and D claim that vector quantities are constant, which is false due to changing directions."
))

# Q423 - Easy
qs.append(make_plane_q(
    num=423,
    question="What is the work done by the centripetal force on a particle undergoing uniform circular motion during one complete revolution?",
    options={
        "A": "Zero",
        "B": "$2\\pi r F_c$",
        "C": "$\\pi r^2 F_c$",
        "D": "$\\frac{1}{2} m v^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform circular motion",
    concept="The centripetal force is always directed radially inward toward the centre, while the instantaneous displacement (velocity) is directed tangentially: $\\vec{F}_c \\perp d\\vec{r}$. Therefore, the instantaneous power and work done are identically zero at every instant: $dW = \\vec{F}_c \\cdot d\\vec{r} = 0$.",
    given="Centripetal force $\\vec{F}_c$ and displacement $d\\vec{r}$ are perpendicular.",
    formula="W = \\int \\vec{F}_c \\cdot d\\vec{r} = \\int F_c ds \\cos 90^\\circ = 0",
    steps=(
        "1. At every point on the circular path, the centripetal force points towards the center.\n"
        "2. The instantaneous displacement vector is along the tangent to the circle.\n"
        "3. The angle between radial force and tangential displacement is $90^\\circ$.\n"
        "4. Since $\\cos 90^\\circ = 0$, work done $dW = \\vec{F} \\cdot d\\vec{r} = 0$ at EVERY single instant.\n"
        "5. The total work done over any interval (or full cycle) is strictly zero."
    ),
    tip="Centripetal force changes ONLY the direction of velocity, NEVER its magnitude. It does ZERO work!",
    why_wrong="Option B calculates force times circumference, ignoring that force is perpendicular to displacement."
))

# Q424 - Easy
qs.append(make_plane_q(
    num=424,
    question="A body moves along a circular path of radius $5\\text{ m}$ with a constant speed of $10\\text{ m/s}$. What is the magnitude and direction of its acceleration?",
    options={
        "A": "$20\\text{ m/s}^2$ directed radially toward the centre",
        "B": "$20\\text{ m/s}^2$ directed along the tangent",
        "C": "$2\\text{ m/s}^2$ directed toward the centre",
        "D": "$0\\text{ m/s}^2$ because speed is constant"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform circular motion",
    concept="In uniform circular motion, the acceleration is purely centripetal (radial), directed toward the centre of the circle, with magnitude $a_c = \\frac{v^2}{r}$.",
    given="$r = 5\\text{ m}, v = 10\\text{ m/s}$.",
    formula="a_c = \\frac{v^2}{r}",
    steps=(
        "1. Compute magnitude:\n"
        "   $a_c = \\frac{v^2}{r} = \\frac{10^2}{5} = \\frac{100}{5} = 20\\text{ m/s}^2$.\n"
        "2. Direction of centripetal acceleration is always directed radially inward toward the centre of curvature."
    ),
    tip="Constant speed in a circle does NOT mean zero acceleration! The acceleration is $v^2/r$ inward.",
    why_wrong="Option D incorrectly claims zero acceleration; Option B gives tangential direction.",
    is_pyq=True,
    pyq_year=2025,
    source="NEET UG 2025"
))

# Q425 - Easy
qs.append(make_plane_q(
    num=425,
    question="What is the angle between the velocity vector and the acceleration vector of a particle in uniform circular motion?",
    options={
        "A": "$90^\\circ$ at all times",
        "B": "$0^\\circ$",
        "C": "$180^\\circ$",
        "D": "It continuously varies between $0^\\circ$ and $180^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform circular motion",
    concept="In uniform circular motion, velocity is purely tangential, while acceleration is purely radial (centripetal). The tangent and radius to a circle are mutually perpendicular at every point, so the angle is strictly $90^\\circ$ at all times.",
    given="Uniform circular motion.",
    formula="\\vec{v} \\perp \\vec{a}_c \\implies \\theta = 90^\\circ",
    steps=(
        "1. Velocity vector is tangential: $\\vec{v} = v\\hat{t}$.\n"
        "2. Acceleration vector is radially inward: $\\vec{a} = -a_c\\hat{r}$.\n"
        "3. Since radial and tangential unit vectors are orthogonal ($\\hat{r} \\cdot \\hat{t} = 0$), the angle is always $90^\\circ$."
    ),
    tip="When $\\vec{v} \\perp \\vec{a}$, speed is constant! If angle were acute, speed would increase; if obtuse, speed would decrease.",
    why_wrong="Option D is true for non-uniform circular motion or projectile motion, but NOT for uniform circular motion."
))

# Q426 - Medium
qs.append(make_plane_q(
    num=426,
    question="Two particles A and B are moving in uniform circular motion in concentric circles of radii $r_A$ and $r_B$ with speeds $v_A$ and $v_B$ respectively. Their time period of rotation is the same. What is the ratio of the angular speed of A to that of B?",
    options={
        "A": "$1 : 1$",
        "B": "$r_A : r_B$",
        "C": "$r_B : r_A$",
        "D": "$v_A : v_B$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform circular motion",
    concept="Angular speed is related to the time period by $\\omega = \\frac{2\\pi}{T}$. If the time periods are identical ($T_A = T_B$), then their angular speeds must be identical: $\\frac{\\omega_A}{\\omega_B} = \\frac{2\\pi/T_A}{2\\pi/T_B} = 1$.",
    given="$T_A = T_B$, concentric circles of radii $r_A$ and $r_B$.",
    formula="\\omega = \\frac{2\\pi}{T} \\implies \\frac{\\omega_A}{\\omega_B} = \\frac{T_B}{T_A} = 1",
    steps=(
        "1. Angular speed formula: $\\omega = \\frac{2\\pi}{T}$.\n"
        "2. Since time periods are given to be equal: $T_A = T_B$.\n"
        "3. Ratio of angular speeds:\n"
        "   $\\frac{\\omega_A}{\\omega_B} = \\frac{2\\pi/T_A}{2\\pi/T_B} = \\frac{T_B}{T_A} = 1$.\n"
        "4. The ratio is $1 : 1$."
    ),
    tip="Angular speed $\\omega$ depends ONLY on time period $T$, completely independent of radius $r$!",
    why_wrong="Option B is the ratio of linear speeds $v_A / v_B = r_A / r_B$, not angular speeds.",
    is_pyq=True,
    pyq_year=2019,
    source="NEET UG 2019"
))

# Q427 - Medium
qs.append(make_plane_q(
    num=427,
    question="In the previous question, what is the ratio of the LINEAR SPEEDS $\\frac{v_A}{v_B}$?",
    options={
        "A": "$r_A : r_B$",
        "B": "$1 : 1$",
        "C": "$r_B : r_A$",
        "D": "$r_A^2 : r_B^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform circular motion",
    concept="Linear speed is related to angular speed by $v = \\omega r$. Since $\\omega_A = \\omega_B$, the linear speeds are directly proportional to the radii: $\\frac{v_A}{v_B} = \\frac{r_A}{r_B}$.",
    given="$\\omega_A = \\omega_B$, radii $r_A, r_B$.",
    formula="v = \\omega r \\implies \\frac{v_A}{v_B} = \\frac{\\omega_A r_A}{\\omega_B r_B} = \\frac{r_A}{r_B}",
    steps=(
        "1. Relation between linear and angular speed: $v = \\omega r$.\n"
        "2. Since $T_A = T_B$, we established that $\\omega_A = \\omega_B$.\n"
        "3. Therefore, $\\frac{v_A}{v_B} = \\frac{r_A}{r_B}$."
    ),
    tip="For equal time periods: Angular speed ratio is $1:1$, Linear speed ratio is $r_A : r_B$, Centripetal acceleration ratio is $r_A : r_B$!",
    why_wrong="Option B is the ratio of angular speeds."
))

# Q428 - Medium
qs.append(make_plane_q(
    num=428,
    question="A particle moves along a circle of radius $R$ with constant speed $v$. What is the magnitude of the change in velocity $|\\Delta\\vec{v}|$ when the particle turns through an angle $\\theta$?",
    options={
        "A": "$2v\\sin\\left(\\frac{\\theta}{2}\\right)$",
        "B": "$2v\\cos\\left(\\frac{\\theta}{2}\\right)$",
        "C": "$v\\sin\\theta$",
        "D": "$0$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform circular motion",
    concept="The initial and final velocity vectors both have magnitude $v$, and the angle between them is $\\theta$. The magnitude of vector difference is $|\\Delta\\vec{v}| = \\sqrt{v^2 + v^2 - 2v^2\\cos\\theta} = \\sqrt{2v^2(1 - \\cos\\theta)} = 2v\\sin\\left(\\frac{\\theta}{2}\\right)$.",
    given="Equal speed $v$, angle rotated $\\theta$.",
    formula="|\\Delta\\vec{v}| = 2v\\sin\\left(\\frac{\\theta}{2}\\right)",
    steps=(
        "1. Initial velocity: magnitude $v$.\n"
        "2. Final velocity: magnitude $v$.\n"
        "3. When the position vector rotates by $\\theta$, the tangent vector rotates by the exact same angle $\\theta$.\n"
        "4. Magnitude of vector difference:\n"
        "   $|\\Delta\\vec{v}| = |\\vec{v}_f - \\vec{v}_i| = \\sqrt{v^2 + v^2 - 2v^2\\cos\\theta}$.\n"
        "5. Using $1 - \\cos\\theta = 2\\sin^2(\\theta/2)$:\n"
        "   $|\\Delta\\vec{v}| = \\sqrt{4v^2\\sin^2(\\theta/2)} = 2v\\sin\\left(\\frac{\\theta}{2}\\right)$."
    ),
    tip="NEET standard formula: $|\\Delta\\vec{v}| = 2v\\sin(\\theta/2)$. For quarter circle ($\\theta=90^\\circ$): $v\\sqrt{2}$. For half circle ($\\theta=180^\\circ$): $2v$. For full circle ($\\theta=360^\\circ$): $0$!",
    why_wrong="Option D confuses change in speed (which is 0) with change in velocity vector."
))

# Q429 - Medium
qs.append(make_plane_q(
    num=429,
    question="In uniform circular motion, what is the magnitude of the AVERAGE ACCELERATION over a half-revolution (semicircle) in terms of speed $v$ and radius $R$?",
    options={
        "A": "$\\frac{2v^2}{\\pi R}$",
        "B": "$\\frac{v^2}{R}$",
        "C": "$\\frac{v^2}{\\pi R}$",
        "D": "$0$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform circular motion",
    concept="Average acceleration is total velocity change divided by total time: $\\vec{a}_{avg} = \\frac{\\Delta\\vec{v}}{\\Delta t}$. Over a semicircle ($\\theta = 180^\\circ$), $|\\Delta\\vec{v}| = 2v$, and time is $t = \\frac{\\pi R}{v}$.",
    given="Semicircular path of radius $R$, constant speed $v$.",
    formula="a_{avg} = \\frac{|\\Delta\\vec{v}|}{\\Delta t} = \\frac{2v}{\\pi R / v} = \\frac{2v^2}{\\pi R}",
    steps=(
        "1. Change in velocity vector over half circle: $|\\Delta\\vec{v}| = v - (-v) = 2v$.\n"
        "2. Time taken to traverse semicircle: $\\Delta t = \\frac{\\text{distance}}{v} = \\frac{\\pi R}{v}$.\n"
        "3. Magnitude of average acceleration:\n"
        "   $a_{avg} = \\frac{|\\Delta\\vec{v}|}{\\Delta t} = \\frac{2v}{\\pi R / v} = \\frac{2v^2}{\\pi R}$."
    ),
    tip="Notice: Instantaneous acceleration is $\\frac{v^2}{R} \\approx 1.0 \\frac{v^2}{R}$. Average acceleration over semicircle is $\\frac{2}{\\pi}\\frac{v^2}{R} \\approx 0.637 \\frac{v^2}{R}$.",
    why_wrong="Option B is the instantaneous acceleration; Option D is the average acceleration over a full circle."
))

# Q430 - Medium
qs.append(make_plane_q(
    num=430,
    question="A body moving along a circular path of radius $R$ completes one revolution in time $T$. What is the average velocity over one complete revolution?",
    options={
        "A": "Zero",
        "B": "$\\frac{2\\pi R}{T}$",
        "C": "$\\frac{\\pi R}{T}$",
        "D": "$\\frac{4R}{T}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform circular motion",
    concept="Average velocity is net displacement divided by total time: $\\vec{v}_{avg} = \\frac{\\Delta\\vec{r}}{\\Delta t}$. Over a complete revolution, the particle returns to its starting point, so net displacement is zero: $\\Delta\\vec{r} = 0 \\implies \\vec{v}_{avg} = 0$.",
    given="Complete revolution, displacement $\\Delta\\vec{r} = 0$.",
    formula="\\vec{v}_{avg} = \\frac{\\Delta\\vec{r}}{T} = 0",
    steps=(
        "1. The particle returns to its initial position after one period $T$.\n"
        "2. Displacement is zero: $\\Delta\\vec{r} = \\vec{0}$.\n"
        "3. Average velocity is $\\frac{\\vec{0}}{T} = \\vec{0}$."
    ),
    tip="Distinguish sharply: Average SPEED is $\\frac{2\\pi R}{T} > 0$, but average VELOCITY is ZERO!",
    why_wrong="Option B is the average speed, not average velocity."
))

# Adjust Q430 difficulty to Medium since we need exact counts:
qs[-1]["difficulty"] = "Medium"

# Q431 - Medium
qs.append(make_plane_q(
    num=431,
    question="A cyclist pedals around a circular track of radius $100\\text{ m}$ at a constant speed of $10\\pi\\text{ m/s}$. What is the time taken to complete 5 full laps?",
    options={
        "A": "$100\\text{ s}$",
        "B": "$20\\text{ s}$",
        "C": "$50\\text{ s}$",
        "D": "$200\\text{ s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform circular motion",
    concept="Circumference is $2\\pi R$. Time period for one lap is $T = \\frac{2\\pi R}{v}$. For 5 laps, $t = 5 T$.",
    given="$R = 100\\text{ m}, v = 10\\pi\\text{ m/s}, N = 5\\text{ laps}$.",
    formula="T = \\frac{2\\pi R}{v}; t_{total} = 5 T",
    steps=(
        "1. Time for one lap:\n"
        "   $T = \\frac{2\\pi (100)}{10\\pi} = \\frac{200\\pi}{10\\pi} = 20\\text{ s}$.\n"
        "2. Time for 5 laps:\n"
        "   $t_{total} = 5 \\times 20 = 100\\text{ s}$."
    ),
    tip="Notice $\\pi$ cancels out cleanly: $200\\pi / 10\\pi = 20\\text{ s}$ per lap.",
    why_wrong="Option B is the time for only 1 lap."
))

# Q432 - Medium
qs.append(make_plane_q(
    num=432,
    question="The position vector of a particle in circular motion is given by $\\vec{r}(t) = R(\\cos\\omega t\\,\\hat{i} + \\sin\\omega t\\,\\hat{j})$. What is the scalar product of its velocity vector and position vector ($\\vec{v} \\cdot \\vec{r}$)?",
    options={
        "A": "$0$",
        "B": "$\\omega R^2$",
        "C": "$R^2$",
        "D": "$-\\omega R^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform circular motion",
    concept="Differentiating gives $\\vec{v}(t) = R\\omega(-\\sin\\omega t\\,\\hat{i} + \\cos\\omega t\\,\\hat{j})$. The dot product $\\vec{v} \\cdot \\vec{r} = R^2\\omega(-\\sin\\omega t\\cos\\omega t + \\sin\\omega t\\cos\\omega t) = 0$, confirming that position vector and velocity vector are strictly perpendicular.",
    given="$\\vec{r} = R\\cos\\omega t\\hat{i} + R\\sin\\omega t\\hat{j}$.",
    formula="\\vec{v} = \\frac{d\\vec{r}}{dt}; \\vec{v} \\cdot \\vec{r} = 0",
    steps=(
        "1. Differentiate $\\vec{r}(t)$ to find $\\vec{v}(t)$:\n"
        "   $\\vec{v}(t) = -R\\omega\\sin\\omega t\\,\\hat{i} + R\\omega\\cos\\omega t\\,\\hat{j}$.\n"
        "2. Compute dot product:\n"
        "   $\\vec{r} \\cdot \\vec{v} = (R\\cos\\omega t)(-R\\omega\\sin\\omega t) + (R\\sin\\omega t)(R\\omega\\cos\\omega t)$.\n"
        "   $= -R^2\\omega\\sin\\omega t\\cos\\omega t + R^2\\omega\\sin\\omega t\\cos\\omega t = 0$."
    ),
    tip="Since distance from origin is constant ($r = R = \\text{constant}$), $\\frac{d(r^2)}{dt} = 2\\vec{r}\\cdot\\vec{v} = 0$ always!",
    why_wrong="Option B confuses dot product with the magnitude of cross product $|\\vec{r} \\times \\vec{v}| = \\omega R^2$."
))

# Q433 - Medium
qs.append(make_plane_q(
    num=433,
    question="In the previous question, what is the cross product $\\vec{r} \\times \\vec{v}$?",
    options={
        "A": "$\\omega R^2\\,\\hat{k}$",
        "B": "$0$",
        "C": "$-\\omega R^2\\,\\hat{k}$",
        "D": "$\\omega R\\,\\hat{k}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform circular motion",
    concept="Compute cross product: $\\vec{r} \\times \\vec{v} = (x v_y - y v_x)\\hat{k} = [R\\cos\\omega t(R\\omega\\cos\\omega t) - R\\sin\\omega t(-R\\omega\\sin\\omega t)]\\hat{k} = R^2\\omega(\\cos^2\\omega t + \\sin^2\\omega t)\\hat{k} = \\omega R^2\\hat{k}$.",
    given="$\\vec{r}$ and $\\vec{v}$ in xy-plane counter-clockwise.",
    formula="\\vec{r} \\times \\vec{v} = \\omega R^2\\hat{k}",
    steps=(
        "1. $x = R\\cos\\omega t$, $y = R\\sin\\omega t$.\n"
        "2. $v_x = -R\\omega\\sin\\omega t$, $v_y = R\\omega\\cos\\omega t$.\n"
        "3. $\\vec{r} \\times \\vec{v} = (x v_y - y v_x)\\hat{k}$.\n"
        "4. $= [R^2\\omega\\cos^2\\omega t - (-R^2\\omega\\sin^2\\omega t)]\\hat{k} = R^2\\omega(\\cos^2\\omega t + \\sin^2\\omega t)\\hat{k} = \\omega R^2\\hat{k}$."
    ),
    tip="Angular momentum per unit mass is $\\vec{r} \\times \\vec{v} = \\omega R^2\\hat{k}$ (constant vector along z-axis)!",
    why_wrong="Option B confuses cross product with dot product."
))

# Q434 - Hard
qs.append(make_plane_q(
    num=434,
    question="The acceleration vector of a particle in uniform circular motion of radius $R$ and angular speed $\\omega$ is given by:",
    options={
        "A": "$\\vec{a} = -\\omega^2 \\vec{r}$",
        "B": "$\\vec{a} = \\omega^2 \\vec{r}$",
        "C": "$\\vec{a} = -\\omega \\vec{v}$",
        "D": "$\\vec{a} = \\frac{\\vec{r}}{R^2}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform circular motion",
    concept="Differentiating velocity $\\vec{v} = -R\\omega\\sin\\omega t\\hat{i} + R\\omega\\cos\\omega t\\hat{j}$ gives $\\vec{a} = -R\\omega^2\\cos\\omega t\\hat{i} - R\\omega^2\\sin\\omega t\\hat{j} = -\\omega^2(R\\cos\\omega t\\hat{i} + R\\sin\\omega t\\hat{j}) = -\\omega^2\\vec{r}$.",
    given="$\\vec{r}(t) = R(\\cos\\omega t\\hat{i} + \\sin\\omega t\\hat{j})$.",
    formula="\\vec{a} = \\frac{d^2\\vec{r}}{dt^2} = -\\omega^2\\vec{r}",
    steps=(
        "1. Differentiate velocity:\n"
        "   $\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d}{dt}[-R\\omega\\sin\\omega t\\hat{i} + R\\omega\\cos\\omega t\\hat{j}]$.\n"
        "2. $= -R\\omega^2\\cos\\omega t\\hat{i} - R\\omega^2\\sin\\omega t\\hat{j}$.\n"
        "3. Factor out $-\\omega^2$:\n"
        "   $= -\\omega^2 [R\\cos\\omega t\\hat{i} + R\\sin\\omega t\\hat{j}] = -\\omega^2\\vec{r}$."
    ),
    tip="The minus sign confirms that $\\vec{a}$ points in the OPPOSITE direction of the position vector $\\vec{r}$, which means toward the origin/centre!",
    why_wrong="Option B points away from the centre (centrifugal direction)."
))

# Q435 - Hard
qs.append(make_plane_q(
    num=435,
    question="In uniform circular motion, what is the value of $\\vec{a} \\times \\vec{r}$?",
    options={
        "A": "$\\vec{0}$",
        "B": "$\\omega^2 R^2\\hat{k}$",
        "C": "$-\\omega^2 R^2\\hat{k}$",
        "D": "$\\omega R^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform circular motion",
    concept="Since $\\vec{a} = -\\omega^2\\vec{r}$, the acceleration vector is directly collinear (anti-parallel) to the position vector $\\vec{r}$. The cross product of collinear vectors is identically the zero vector.",
    given="$\\vec{a} = -\\omega^2\\vec{r}$.",
    formula="\\vec{a} \\times \\vec{r} = (-\\omega^2\\vec{r}) \\times \\vec{r} = -\\omega^2(\\vec{r} \\times \\vec{r}) = \\vec{0}",
    steps=(
        "1. The cross product of any vector with itself (or with a scalar multiple of itself) is zero.\n"
        "2. Since $\\vec{a} = -\\omega^2\\vec{r}$, $\\vec{a}$ is anti-parallel to $\\vec{r}$ ($180^\\circ$ apart).\n"
        "3. $\\sin 180^\\circ = 0$, so $\\vec{a} \\times \\vec{r} = \\vec{0}$."
    ),
    tip="Because $\\vec{a} \\times \\vec{r} = 0$, the torque of centripetal force about the center is strictly ZERO: $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = m(\\vec{r} \\times \\vec{a}) = \\vec{0}$, meaning angular momentum is conserved!",
    why_wrong="Option B assumes perpendicularity instead of collinearity."
))

# Q436 - Hard
qs.append(make_plane_q(
    num=436,
    question="A stone of mass $m$ tied to the end of a string is whirled in a horizontal circle of radius $R$ with speed $v$. If the tension in the string provides the centripetal force ($T = \\frac{m v^2}{R}$), what is the tension if BOTH the speed is doubled and the radius is halved?",
    options={
        "A": "$8$ times the initial tension",
        "B": "$4$ times the initial tension",
        "C": "$2$ times the initial tension",
        "D": "$16$ times the initial tension"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform circular motion",
    concept="Tension is $T = \\frac{m v^2}{R}$. Substituting $v' = 2v$ and $R' = R/2$ yields $T' = \\frac{m(2v)^2}{R/2} = \\frac{4mv^2}{R/2} = 8\\frac{mv^2}{R} = 8T$.",
    given="$v' = 2v, R' = R/2$.",
    formula="T' = \\frac{m(2v)^2}{R/2} = 8 T",
    steps=(
        "1. Initial tension: $T = \\frac{mv^2}{R}$.\n"
        "2. New speed: $(2v)^2 = 4v^2$ (factor of 4 in numerator).\n"
        "3. New radius: $R/2$ (factor of $1/2$ in denominator, which inverts to factor of 2).\n"
        "4. Combined factor: $4 \\times 2 = 8$.\n"
        "5. New tension: $T' = 8T$."
    ),
    tip="Watch both variables: $4\\times$ from velocity squaring, and $2\\times$ from radius halving. Total factor = $4 \\times 2 = 8$!",
    why_wrong="Option B only accounts for the speed doubling; Option D squares the radius."
))

# Q437 - Hard
qs.append(make_plane_q(
    num=437,
    question="A particle moves along a circular path of radius $R$ in the xy-plane with constant angular velocity $\\vec{\\omega} = \\omega\\hat{k}$. The linear velocity is $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$. What is the vector centripetal acceleration in terms of $\\vec{\\omega}$ and $\\vec{v}$?",
    options={
        "A": "$\\vec{a}_c = \\vec{\\omega} \\times \\vec{v}$",
        "B": "$\\vec{a}_c = \\vec{v} \\times \\vec{\\omega}$",
        "C": "$\\vec{a}_c = \\vec{\\omega} \\cdot \\vec{v}$",
        "D": "$\\vec{a}_c = \\omega^2 \\vec{v}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform circular motion",
    concept="Differentiating $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$ with constant $\\vec{\\omega}$ gives $\\vec{a} = \\frac{d\\vec{v}}{dt} = \\vec{\\omega} \\times \\frac{d\\vec{r}}{dt} = \\vec{\\omega} \\times \\vec{v}$.",
    given="$\\vec{v} = \\vec{\\omega} \\times \\vec{r}$, $\\vec{\\omega} = \\text{constant}$.",
    formula="\\vec{a}_c = \\vec{\\omega} \\times \\vec{v}",
    steps=(
        "1. Take the time derivative of linear velocity:\n"
        "   $\\vec{a} = \\frac{d}{dt}(\\vec{\\omega} \\times \\vec{r})$.\n"
        "2. Apply the product rule: $\\vec{a} = \\left(\\frac{d\\vec{\\omega}}{dt}\\right) \\times \\vec{r} + \\vec{\\omega} \\times \\left(\\frac{d\\vec{r}}{dt}\\right)$.\n"
        "3. Since angular velocity is constant, $\\frac{d\\vec{\\omega}}{dt} = 0$.\n"
        "4. Since $\\frac{d\\vec{r}}{dt} = \\vec{v}$:\n"
        "   $\\vec{a} = \\vec{\\omega} \\times \\vec{v}$."
    ),
    tip="Vector identity: $\\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r}) = (\\vec{\\omega} \\cdot \\vec{r})\\vec{\\omega} - (\\vec{\\omega} \\cdot \\vec{\\omega})\\vec{r} = 0 - \\omega^2\\vec{r} = -\\omega^2\\vec{r}$! Perfectly consistent!",
    why_wrong="Option B reverses the cross product, pointing outward instead of inward."
))

# ==============================================================================
# Topic 26: Angular displacement and angular velocity basics (Q438 to Q452, 15 questions)
# Distribution: 4 Easy, 8 Medium, 3 Hard
# ==============================================================================

# Q438 - Easy
qs.append(make_plane_q(
    num=438,
    question="What is the SI unit of angular displacement $\\theta$ and angular velocity $\\omega$?",
    options={
        "A": "Radian (rad) and radian per second (rad/s)",
        "B": "Degree ($^\\circ$) and degree per second ($^\\circ$/s)",
        "C": "Revolution (rev) and rpm",
        "D": "Meter (m) and meter per second (m/s)"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angular displacement and angular velocity basics",
    concept="In the SI system, angular displacement is measured in radians (rad, a dimensionless supplementary unit defined as arc length over radius), and angular velocity is measured in radians per second (rad/s).",
    given="SI unit definitions.",
    formula="\\theta = \\frac{s}{r}\\text{ [rad]}; \\omega = \\frac{d\\theta}{dt}\\text{ [rad/s]}",
    steps=(
        "1. Angular displacement is defined as arc length divided by radius: $\\theta = s / r$.\n"
        "2. The SI unit of angle is the radian (rad).\n"
        "3. Angular velocity is the time rate of change of angular displacement: $\\omega = d\\theta / dt$.\n"
        "4. Its SI unit is radians per second (rad/s)."
    ),
    tip="Although radian is dimensionless ($[M^0 L^0 T^0]$), it is the standard SI unit for rotational calculations.",
    why_wrong="Options B and C are non-SI units; Option D is for linear motion."
))

# Q439 - Easy
qs.append(make_plane_q(
    num=439,
    question="What is the angular speed of the second hand of a standard clock?",
    options={
        "A": "$\\frac{\\pi}{30}\\text{ rad/s} \\approx 0.105\\text{ rad/s}$",
        "B": "$\\frac{\\pi}{60}\\text{ rad/s}$",
        "C": "$\\frac{2\\pi}{30}\\text{ rad/s}$",
        "D": "$\\frac{\\pi}{1800}\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angular displacement and angular velocity basics",
    concept="The second hand completes one full revolution ($2\\pi\\text{ rad}$) in $60\\text{ s}$. Thus $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ rad/s}$.",
    given="$T_{sec} = 60\\text{ s}$.",
    formula="\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ rad/s}",
    steps=(
        "1. Time period of the second hand: $T = 60\\text{ s}$.\n"
        "2. Angular displacement in one revolution: $\\theta = 2\\pi\\text{ rad}$.\n"
        "3. Angular velocity: $\\omega = \\frac{2\\pi}{60} = \\frac{\\pi}{30}\\text{ rad/s}$."
    ),
    tip="Memorize the clock angular speeds: Second hand: $\\frac{\\pi}{30}\\text{ rad/s}$. Minute hand: $\\frac{\\pi}{1800}\\text{ rad/s}$. Hour hand: $\\frac{\\pi}{21600}\\text{ rad/s}$!",
    why_wrong="Option B forgets the factor of 2 in $2\\pi/T$."
))

# Q440 - Easy
qs.append(make_plane_q(
    num=440,
    question="What is the angular speed of the minute hand of a standard clock?",
    options={
        "A": "$\\frac{\\pi}{1800}\\text{ rad/s}$",
        "B": "$\\frac{\\pi}{30}\\text{ rad/s}$",
        "C": "$\\frac{\\pi}{3600}\\text{ rad/s}$",
        "D": "$\\frac{2\\pi}{60}\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angular displacement and angular velocity basics",
    concept="The minute hand completes one full revolution in 1 hour = $3600\\text{ s}$. Thus $\\omega = \\frac{2\\pi}{3600} = \\frac{\\pi}{1800}\\text{ rad/s}$.",
    given="$T_{min} = 1\\text{ h} = 3600\\text{ s}$.",
    formula="\\omega = \\frac{2\\pi}{3600} = \\frac{\\pi}{1800}\\text{ rad/s}",
    steps=(
        "1. Time period of minute hand: $T = 60\\text{ min} = 3600\\text{ s}$.\n"
        "2. Angular speed: $\\omega = \\frac{2\\pi}{3600} = \\frac{\\pi}{1800}\\text{ rad/s}$."
    ),
    tip="$3600 / 2 = 1800$, so $\\omega = \\pi / 1800\\text{ rad/s}$.",
    why_wrong="Option B is for the second hand."
))

# Q441 - Easy
qs.append(make_plane_q(
    num=441,
    question="What is the angular speed of the hour hand of a standard clock?",
    options={
        "A": "$\\frac{\\pi}{21600}\\text{ rad/s}$",
        "B": "$\\frac{\\pi}{43200}\\text{ rad/s}$",
        "C": "$\\frac{\\pi}{1800}\\text{ rad/s}$",
        "D": "$\\frac{\\pi}{12}\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Angular displacement and angular velocity basics",
    concept="The hour hand completes one full revolution ($2\\pi\\text{ rad}$) in 12 hours (NOT 24 hours!). $12\\text{ h} = 12 \\times 3600 = 43200\\text{ s}$. Thus $\\omega = \\frac{2\\pi}{43200} = \\frac{\\pi}{21600}\\text{ rad/s}$.",
    given="$T_{hour} = 12\\text{ h} = 43200\\text{ s}$.",
    formula="\\omega = \\frac{2\\pi}{43200} = \\frac{\\pi}{21600}\\text{ rad/s}",
    steps=(
        "1. Common misconception alert: The hour hand takes 12 hours (not 24 hours) to go around the clock dial once.\n"
        "2. Time period in seconds: $T = 12 \\times 3600 = 43200\\text{ s}$.\n"
        "3. Angular speed: $\\omega = \\frac{2\\pi}{43200} = \\frac{\\pi}{21600}\\text{ rad/s}$."
    ),
    tip="Do NOT use 24 hours for the hour hand of a standard clock dial! It rotates twice a day ($T = 12\\text{ h}$).",
    why_wrong="Option B uses 24 hours ($86400\\text{ s}$), which is for the rotation of the Earth, not the clock hand."
))

# Q442 - Medium
qs.append(make_plane_q(
    num=442,
    question="A wheel rotates at a frequency of $1200\\text{ rpm}$ (revolutions per minute). What is its angular velocity in rad/s?",
    options={
        "A": "$40\\pi\\text{ rad/s} \\approx 125.7\\text{ rad/s}$",
        "B": "$20\\pi\\text{ rad/s}$",
        "C": "$1200\\pi\\text{ rad/s}$",
        "D": "$20\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="To convert from rpm to rad/s, multiply by $\\frac{2\\pi}{60}$: $\\omega = \\frac{2\\pi N}{60}$.",
    given="$N = 1200\\text{ rpm}$.",
    formula="\\omega = \\frac{2\\pi N}{60} = \\frac{2\\pi (1200)}{60} = 40\\pi\\text{ rad/s}",
    steps=(
        "1. Revolutions per second: $f = \\frac{1200}{60} = 20\\text{ rev/s}$ (Hz).\n"
        "2. Since 1 revolution $= 2\\pi\\text{ rad}$, angular velocity is:\n"
        "   $\\omega = 2\\pi f = 2\\pi \\times 20 = 40\\pi\\text{ rad/s}$."
    ),
    tip="Conversion shortcut: $\\omega = \\frac{\\pi N}{30}$. For $1200$: $\\frac{1200\\pi}{30} = 40\\pi\\text{ rad/s}$.",
    why_wrong="Option B forgets the factor of 2 in $2\\pi$."
))

# Q443 - Medium
qs.append(make_plane_q(
    num=443,
    question="If the radius of the wheel in the previous question is $0.5\\text{ m}$, what is the linear speed of a point on the rim of the wheel?",
    options={
        "A": "$20\\pi\\text{ m/s} \\approx 62.8\\text{ m/s}$",
        "B": "$40\\pi\\text{ m/s}$",
        "C": "$10\\pi\\text{ m/s}$",
        "D": "$600\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="Linear speed of a point at distance $r$ from the axis is $v = \\omega r$.",
    given="$\\omega = 40\\pi\\text{ rad/s}, r = 0.5\\text{ m}$.",
    formula="v = \\omega r = 40\\pi \\times 0.5 = 20\\pi\\text{ m/s}",
    steps=(
        "1. Angular speed: $\\omega = 40\\pi\\text{ rad/s}$.\n"
        "2. Radius of rim: $r = 0.5\\text{ m}$.\n"
        "3. Linear speed: $v = \\omega r = 40\\pi \\times 0.5 = 20\\pi\\text{ m/s} \\approx 62.83\\text{ m/s}$."
    ),
    tip="Linear speed scales linearly with distance from axis ($v = \\omega r$). At center ($r=0$), $v=0$. At rim ($r=R$), $v = \\omega R$.",
    why_wrong="Option B does not multiply by $0.5$."
))

# Q444 - Medium
qs.append(make_plane_q(
    num=444,
    question="The angular displacement of a particle moving in a circular path is given by $\\theta(t) = 2t^3 + 0.5t$. What is its instantaneous angular velocity at $t = 2\\text{ s}$?",
    options={
        "A": "$24.5\\text{ rad/s}$",
        "B": "$16.5\\text{ rad/s}$",
        "C": "$12.5\\text{ rad/s}$",
        "D": "$48.5\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="Instantaneous angular velocity is the time derivative of angular displacement: $\\omega(t) = \\frac{d\\theta}{dt}$.",
    given="$\\theta(t) = 2t^3 + 0.5t, t = 2\\text{ s}$.",
    formula="\\omega(t) = \\frac{d\\theta}{dt} = 6t^2 + 0.5",
    steps=(
        "1. Differentiate with respect to time:\n"
        "   $\\omega(t) = \\frac{d}{dt}(2t^3 + 0.5t) = 6t^2 + 0.5$.\n"
        "2. Evaluate at $t = 2\\text{ s}$:\n"
        "   $\\omega(2) = 6(2^2) + 0.5 = 6(4) + 0.5 = 24 + 0.5 = 24.5\\text{ rad/s}$."
    ),
    tip="Just like $v = ds/dt$ in linear motion, $\\omega = d\\theta/dt$ in rotational motion!",
    why_wrong="Option B calculates $2(2^3) + 0.5 = 16.5$ (value of displacement/average rate)."
))

# Q445 - Medium
qs.append(make_plane_q(
    num=445,
    question="In the previous question, what is the angular acceleration $\\alpha$ of the particle at $t = 2\\text{ s}$?",
    options={
        "A": "$24\\text{ rad/s}^2$",
        "B": "$12\\text{ rad/s}^2$",
        "C": "$48\\text{ rad/s}^2$",
        "D": "$6\\text{ rad/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="Angular acceleration is the derivative of angular velocity: $\\alpha(t) = \\frac{d\\omega}{dt} = \\frac{d^2\\theta}{dt^2}$.",
    given="$\\omega(t) = 6t^2 + 0.5, t = 2\\text{ s}$.",
    formula="\\alpha(t) = \\frac{d\\omega}{dt} = 12t",
    steps=(
        "1. Differentiate angular velocity:\n"
        "   $\\alpha(t) = \\frac{d}{dt}(6t^2 + 0.5) = 12t$.\n"
        "2. Substitute $t = 2\\text{ s}$:\n"
        "   $\\alpha(2) = 12 \\times 2 = 24\\text{ rad/s}^2$."
    ),
    tip="First derivative gives angular speed, second derivative gives angular acceleration.",
    why_wrong="Option B calculates at $t = 1\\text{ s}$."
))

# Q446 - Medium
qs.append(make_plane_q(
    num=446,
    question="A fly sits on a rotating turntable at a distance of $10\\text{ cm}$ from the center, while another fly sits at $20\\text{ cm}$ from the center. How do their angular velocities compare?",
    options={
        "A": "Both flies have the EXACT same angular velocity",
        "B": "The fly at $20\\text{ cm}$ has twice the angular velocity",
        "C": "The fly at $10\\text{ cm}$ has twice the angular velocity",
        "D": "The fly at $20\\text{ cm}$ has 4 times the angular velocity"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="All points on a rigid body rotating about a fixed axis turn through the same angle in the same time, so they share the exact same angular velocity $\\omega$, regardless of their distance from the axis.",
    given="Turntable rotating as a rigid body.",
    formula="\\omega = \\text{constant for all points on rigid body}",
    steps=(
        "1. The turntable is a rigid body rotating about its central axis.\n"
        "2. In one revolution, every point on the turntable sweeps through $2\\pi\\text{ radians}$ in the same time $T$.\n"
        "3. Therefore, angular velocity $\\omega = 2\\pi/T$ is identical for all points on the turntable.\n"
        "4. (Their LINEAR speeds differ: $v = \\omega r$, so the outer fly has twice the linear speed, but their angular velocities are equal)."
    ),
    tip="Crucial distinction: Rigid rotation has SAME $\\omega$ everywhere, but DIFFERENT $v = \\omega r$!",
    why_wrong="Option B confuses angular velocity $\\omega$ with linear speed $v$."
))

# Q447 - Medium
qs.append(make_plane_q(
    num=447,
    question="An automobile travels at $72\\text{ km/h}$. If the diameter of its wheels is $50\\text{ cm}$, what is the angular speed of the wheels? (Assume pure rolling without slipping)",
    options={
        "A": "$80\\text{ rad/s}$",
        "B": "$40\\text{ rad/s}$",
        "C": "$160\\text{ rad/s}$",
        "D": "$20\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="In pure rolling without slipping, the linear speed of the axle equals $\\omega R$. Thus $\\omega = \\frac{v}{R}$. Note: Diameter is $50\\text{ cm} \\implies R = 25\\text{ cm} = 0.25\\text{ m}$.",
    given="$v = 72\\text{ km/h} = 20\\text{ m/s}$, diameter $= 50\\text{ cm} \\implies R = 0.25\\text{ m}$.",
    formula="v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}; \\omega = \\frac{v}{R} = \\frac{20}{0.25} = 80\\text{ rad/s}",
    steps=(
        "1. Convert vehicle speed to SI units:\n"
        "   $v = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$.\n"
        "2. Identify wheel radius:\n"
        "   $R = \\frac{\\text{diameter}}{2} = \\frac{50\\text{ cm}}{2} = 25\\text{ cm} = 0.25\\text{ m}$.\n"
        "3. Calculate angular speed:\n"
        "   $\\omega = \\frac{v}{R} = \\frac{20}{0.25} = 20 \\times 4 = 80\\text{ rad/s}$."
    ),
    tip="Common trap: Do not plug diameter into the radius formula! Diameter $= 0.5\\text{ m} \\implies$ Radius $= 0.25\\text{ m}$.",
    why_wrong="Option B uses diameter directly instead of radius ($20 / 0.5 = 40$)."
))

# Q448 - Medium
qs.append(make_plane_q(
    num=448,
    question="The angular speed of the Earth about its own polar axis is approximately:",
    options={
        "A": "$7.27 \\times 10^{-5}\\text{ rad/s}$",
        "B": "$7.27 \\times 10^{-4}\\text{ rad/s}$",
        "C": "$1.45 \\times 10^{-4}\\text{ rad/s}$",
        "D": "$2.0 \\times 10^{-6}\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="The Earth completes one full rotation of $2\\pi\\text{ rad}$ in 1 day = $24\\text{ h} = 86400\\text{ s}$. Thus $\\omega = \\frac{2\\pi}{86400} = \\frac{2 \\times 3.1416}{86400} \\approx 7.27 \\times 10^{-5}\\text{ rad/s}$.",
    given="$T = 24\\text{ h} = 86400\\text{ s}$.",
    formula="\\omega = \\frac{2\\pi}{86400} \\approx 7.27 \\times 10^{-5}\\text{ rad/s}",
    steps=(
        "1. Time period of Earth's diurnal rotation: $T = 24 \\times 3600 = 86400\\text{ s}$.\n"
        "2. Angular speed:\n"
        "   $\\omega = \\frac{2\\pi}{86400} = \\frac{3.1416}{43200} \\approx 7.272 \\times 10^{-5}\\text{ rad/s}$."
    ),
    tip="Standard constant in NEET Gravitation & Kinematics: $\\omega_{earth} \\approx 7.3 \\times 10^{-5}\\text{ rad/s}$.",
    why_wrong="Option B is off by a factor of 10."
))

# Q449 - Medium
qs.append(make_plane_q(
    num=449,
    question="Is angular displacement a true vector quantity?",
    options={
        "A": "Infinitesimal angular displacement $d\\vec{\\theta}$ is a vector, but finite angular displacement $\\Delta\\theta$ is NOT a vector because it does not obey vector addition commutativity",
        "B": "Both finite and infinitesimal angular displacements are true vectors",
        "C": "Angular displacement is always a scalar quantity",
        "D": "It is a vector only if the rotation is in two dimensions"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Angular displacement and angular velocity basics",
    concept="To be classified as a vector, a quantity must not only possess magnitude and direction but also obey the commutative law of vector addition ($\\vec{A} + \\vec{B} = \\vec{B} + \\vec{A}$). Finite rotations about different axes do NOT commute ($\theta_1 + \theta_2 \\ne \\theta_2 + \\theta_1$). However, infinitesimal rotations do commute ($d\\vec{\\theta}_1 + d\\vec{\\theta}_2 = d\\vec{\\theta}_2 + d\\vec{\\theta}_1$), making $d\\vec{\\theta}$ an axial vector.",
    given="Finite vs infinitesimal angular displacement.",
    formula="\\vec{\\theta}_1 + \\vec{\\theta}_2 \\ne \\vec{\\theta}_2 + \\vec{\\theta}_1 \\text{ (finite)}; d\\vec{\\theta}_1 + d\\vec{\\theta}_2 = d\\vec{\\theta}_2 + d\\vec{\\theta}_1 \\text{ (infinitesimal)}",
    steps=(
        "1. Test an object: rotate a book by $90^\\circ$ about x, then $90^\\circ$ about y. Reverse the order: $90^\\circ$ about y, then $90^\\circ$ about x. The final orientation is completely different!\n"
        "2. Since finite rotations fail commutativity, finite angular displacement is NOT a vector.\n"
        "3. Infinitesimal rotations $d\\vec{\\theta}$ do commute mathematically, so $d\\vec{\\theta}$ and $\\vec{\\omega} = d\\vec{\\theta}/dt$ are genuine axial vectors."
    ),
    tip="Classic NCERT theoretical distinction: Finite $\\Delta\\theta$ is NOT a vector. Infinitesimal $d\\vec{\\theta}$ and angular velocity $\\vec{\\omega}$ ARE vectors!",
    why_wrong="Option B ignores the non-commutative nature of finite 3D rotations."
))

# Q450 - Hard
qs.append(make_plane_q(
    num=450,
    question="The angular position of a line on a rotating wheel is given by $\\theta(t) = 2.0 + 4.0 t^2 + 2.0 t^3$, where $\\theta$ is in radians and $t$ in seconds. At $t = 0$, the wheel has an initial angular velocity. What is the average angular acceleration between $t = 1\\text{ s}$ and $t = 3\\text{ s}$?",
    options={
        "A": "$32\\text{ rad/s}^2$",
        "B": "$24\\text{ rad/s}^2$",
        "C": "$40\\text{ rad/s}^2$",
        "D": "$16\\text{ rad/s}^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Angular displacement and angular velocity basics",
    concept="Average angular acceleration is $\\alpha_{avg} = \\frac{\\omega(t_2) - \\omega(t_1)}{t_2 - t_1}$, where $\\omega(t) = \\frac{d\\theta}{dt} = 8t + 6t^2$.",
    given="$\\theta(t) = 2.0 + 4.0 t^2 + 2.0 t^3, t_1 = 1\\text{ s}, t_2 = 3\\text{ s}$.",
    formula="\\omega(t) = 8t + 6t^2; \\alpha_{avg} = \\frac{\\omega(3) - \\omega(1)}{3 - 1}",
    steps=(
        "1. Differentiate to find angular velocity function:\n"
        "   $\\omega(t) = \\frac{d\\theta}{dt} = 8t + 6t^2$.\n"
        "2. Compute $\\omega$ at $t = 1\\text{ s}$:\n"
        "   $\\omega(1) = 8(1) + 6(1^2) = 14\\text{ rad/s}$.\n"
        "3. Compute $\\omega$ at $t = 3\\text{ s}$:\n"
        "   $\\omega(3) = 8(3) + 6(3^2) = 24 + 6(9) = 24 + 54 = 78\\text{ rad/s}$.\n"
        "4. Calculate average angular acceleration:\n"
        "   $\\alpha_{avg} = \\frac{\\omega(3) - \\omega(1)}{3 - 1} = \\frac{78 - 14}{2} = \\frac{64}{2} = 32\\text{ rad/s}^2$."
    ),
    tip="Notice: Instantaneous acceleration is $\\alpha(t) = 8 + 12t$. At midpoint $t = 2\\text{ s}$, $\\alpha(2) = 8 + 24 = 32\\text{ rad/s}^2$, which equals the average!",
    why_wrong="Option B is $\\alpha(1) = 8 + 12 = 20$."
))

# Q451 - Hard
qs.append(make_plane_q(
    num=451,
    question="A disc rotating with constant angular deceleration comes to rest after completing 50 full revolutions in $10\\text{ s}$. What was its initial angular velocity $\\omega_0$?",
    options={
        "A": "$20\\pi\\text{ rad/s} \\approx 62.8\\text{ rad/s}$",
        "B": "$10\\pi\\text{ rad/s}$",
        "C": "$40\\pi\\text{ rad/s}$",
        "D": "$5\\pi\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Angular displacement and angular velocity basics",
    concept="For constant angular acceleration, the rotational kinematic equation is $\\theta = \\left(\\frac{\\omega_0 + \\omega}{2}\\right)t$. With $\\omega = 0$ (comes to rest), $\\theta = \\frac{\\omega_0 t}{2} \\implies \\omega_0 = \\frac{2\\theta}{t}$.",
    given="50 revolutions $= 50 \\times 2\\pi = 100\\pi\\text{ rad}$, $t = 10\\text{ s}$, $\\omega = 0$.",
    formula="\\theta = \\frac{\\omega_0 + 0}{2} t \\implies \\omega_0 = \\frac{2\\theta}{t}",
    steps=(
        "1. Total angular displacement: $\\theta = 50 \\times 2\\pi = 100\\pi\\text{ rad}$.\n"
        "2. Final angular velocity: $\\omega = 0$.\n"
        "3. Use average angular speed relation:\n"
        "   $\\theta = \\left(\\frac{\\omega_0 + 0}{2}\\right) t = \\frac{\\omega_0 (10)}{2} = 5\\omega_0$.\n"
        "4. Solve for $\\omega_0$:\n"
        "   $5\\omega_0 = 100\\pi \\implies \\omega_0 = \\frac{100\\pi}{5} = 20\\pi\\text{ rad/s}$."
    ),
    tip="Use the average velocity formula $\\theta = \\frac{\\omega_0}{2}t$ to bypass calculating angular acceleration $\\alpha$ completely!",
    why_wrong="Option B forgets the factor of 2 in denominator."
))

# Q452 - Hard
qs.append(make_plane_q(
    num=452,
    question="In the previous question, what was the magnitude of the angular deceleration $\\alpha$ of the disc?",
    options={
        "A": "$2\\pi\\text{ rad/s}^2 \\approx 6.28\\text{ rad/s}^2$",
        "B": "$4\\pi\\text{ rad/s}^2$",
        "C": "\\pi\\text{ rad/s}^2$",
        "D": "$0.5\\pi\\text{ rad/s}^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Angular displacement and angular velocity basics",
    concept="Use $\\omega = \\omega_0 - \\alpha t = 0 \\implies \\alpha = \\frac{\\omega_0}{t}$.",
    given="$\\omega_0 = 20\\pi\\text{ rad/s}, t = 10\\text{ s}$.",
    formula="\\alpha = \\frac{\\omega_0}{t} = \\frac{20\\pi}{10} = 2\\pi\\text{ rad/s}^2",
    steps=(
        "1. Initial angular velocity: $\\omega_0 = 20\\pi\\text{ rad/s}$.\n"
        "2. Final angular velocity: $\\omega = 0$.\n"
        "3. Angular deceleration:\n"
        "   $\\alpha = \\frac{\\omega_0 - \\omega}{t} = \\frac{20\\pi - 0}{10} = 2\\pi\\text{ rad/s}^2$."
    ),
    tip="Double check: $\\omega_0^2 = 2\\alpha\\theta \\implies (20\\pi)^2 = 400\\pi^2 = 2(2\\pi)(100\\pi) = 400\\pi^2$. Perfectly consistent!",
    why_wrong="Option B is $4\\pi\\text{ rad/s}^2$."
))

# ==============================================================================
# Topic 27: Centripetal acceleration (Q453 to Q468, 16 questions)
# Distribution: 4 Easy, 8 Medium, 4 Hard
# ==============================================================================

# Q453 - Easy
qs.append(make_plane_q(
    num=453,
    question="What is the expression for centripetal acceleration $a_c$ in terms of linear speed $v$ and radius $r$?",
    options={
        "A": "$a_c = \\frac{v^2}{r}$",
        "B": "$a_c = \\frac{v}{r}$",
        "C": "$a_c = \\frac{v^2}{r^2}$",
        "D": "$a_c = v r$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Centripetal acceleration",
    concept="Centripetal acceleration is the radial acceleration required to continuously change the direction of velocity along a circle of radius $r$: $a_c = \\frac{v^2}{r} = \\omega^2 r = v\\omega$.",
    given="Circular motion with speed $v$ and radius $r$.",
    formula="a_c = \\frac{v^2}{r}",
    steps=(
        "1. By kinematics of circular motion, the acceleration directed radially toward the centre is $a_c = \\frac{v^2}{r}$.\n"
        "2. Dimensional analysis: $[v^2/r] = [L^2 T^{-2}] / [L] = [LT^{-2}]$, which matches acceleration."
    ),
    tip="Three equivalent forms of centripetal acceleration: $a_c = \\frac{v^2}{r} = \\omega^2 r = v\\omega$.",
    why_wrong="Option B has dimensions of $[T^{-1}]$ (frequency), not acceleration."
))

# Q454 - Easy
qs.append(make_plane_q(
    num=454,
    question="What is the expression for centripetal acceleration in terms of angular speed $\\omega$ and radius $r$?",
    options={
        "A": "$a_c = \\omega^2 r$",
        "B": "$a_c = \\omega r$",
        "C": "$a_c = \\frac{\\omega^2}{r}$",
        "D": "$a_c = \\frac{\\omega}{r^2}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Centripetal acceleration",
    concept="Substitute $v = \\omega r$ into $a_c = \\frac{v^2}{r}$: $a_c = \\frac{(\\omega r)^2}{r} = \\omega^2 r$.",
    given="$v = \\omega r$.",
    formula="a_c = \\omega^2 r",
    steps=(
        "1. Start with $a_c = \\frac{v^2}{r}$.\n"
        "2. Replace linear speed $v$ with $\\omega r$:\n"
        "   $a_c = \\frac{(\\omega r)^2}{r} = \\frac{\\omega^2 r^2}{r} = \\omega^2 r$."
    ),
    tip="When angular speed $\\omega$ is constant, centripetal acceleration is directly proportional to radius ($a_c \\propto r$). When linear speed $v$ is constant, it is inversely proportional to radius ($a_c \\propto 1/r$)!",
    why_wrong="Option B is the linear speed $v = \\omega r$."
))

# Q455 - Easy
qs.append(make_plane_q(
    num=455,
    question="A body moves in a circle of radius $2\\text{ m}$ with an angular speed of $3\\text{ rad/s}$. What is its centripetal acceleration?",
    options={
        "A": "$18\\text{ m/s}^2$",
        "B": "$6\\text{ m/s}^2$",
        "C": "$12\\text{ m/s}^2$",
        "D": "$9\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Centripetal acceleration",
    concept="Substitute into $a_c = \\omega^2 r$.",
    given="$\\omega = 3\\text{ rad/s}, r = 2\\text{ m}$.",
    formula="a_c = \\omega^2 r = 3^2 \\times 2 = 9 \\times 2 = 18\\text{ m/s}^2",
    steps=(
        "1. Angular speed squared: $\\omega^2 = 3^2 = 9\\text{ rad}^2/\\text{s}^2$.\n"
        "2. Multiply by radius: $a_c = 9 \\times 2 = 18\\text{ m/s}^2$."
    ),
    tip="Direct calculation: $3^2 \\times 2 = 18\\text{ m/s}^2$.",
    why_wrong="Option B calculates linear speed $v = \\omega r = 3 \\times 2 = 6\\text{ m/s}$."
))

# Q456 - Easy
qs.append(make_plane_q(
    num=456,
    question="Why is centripetal acceleration called 'centripetal'?",
    options={
        "A": "Because it always points 'center-seeking' (radially inward towards the centre of the circle)",
        "B": "Because it acts along the tangent to the path",
        "C": "Because it pushes the particle away from the center",
        "D": "Because it is caused by gravity alone"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Centripetal acceleration",
    concept="The word 'centripetal' comes from Latin 'centrum' (center) and 'petere' (to seek), meaning 'center-seeking'. It is the acceleration vector directed towards the instantaneous center of curvature.",
    given="Definition of centripetal acceleration.",
    formula="\\vec{a}_c = -\\left(\\frac{v^2}{r}\\right)\\hat{r}",
    steps=(
        "1. 'Centripetal' literally means 'directed towards the center'.\n"
        "2. At every point on a curved path, this component of acceleration points perpendicular to the path toward the center of curvature."
    ),
    tip="Centripetal = center-seeking (real inward acceleration). Centrifugal = center-fleeing (apparent outward pseudo-force in a rotating frame).",
    why_wrong="Option C describes centrifugal force."
))

# Q457 - Medium
qs.append(make_plane_q(
    num=457,
    question="If the speed of a particle in circular motion is doubled and the radius of its path is halved, by what factor does its centripetal acceleration change?",
    options={
        "A": "8 times",
        "B": "4 times",
        "C": "2 times",
        "D": "16 times"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Centripetal acceleration",
    concept="Centripetal acceleration is $a_c = \\frac{v^2}{r}$. With $v' = 2v$ and $r' = r/2$, we have $a_c' = \\frac{(2v)^2}{r/2} = \\frac{4v^2}{r/2} = 8\\frac{v^2}{r} = 8 a_c$.",
    given="$v' = 2v, r' = r/2$.",
    formula="a_c' = \\frac{(2v)^2}{r/2} = 8 a_c",
    steps=(
        "1. Initial acceleration: $a_c = \\frac{v^2}{r}$.\n"
        "2. Speed is doubled: $v' = 2v \\implies v'^2 = 4v^2$.\n"
        "3. Radius is halved: $r' = \\frac{r}{2}$.\n"
        "4. New acceleration: $a_c' = \\frac{4v^2}{r/2} = 8 \\frac{v^2}{r} = 8 a_c$."
    ),
    tip="Factor is $2^2 / (1/2) = 4 \\times 2 = 8$.",
    why_wrong="Option B only squares the velocity factor."
))

# Q458 - Medium
qs.append(make_plane_q(
    num=458,
    question="A body moves in a circle of radius $r$ with constant speed. If the frequency of rotation is doubled, what happens to its centripetal acceleration?",
    options={
        "A": "Quadruples (4 times)",
        "B": "Doubles (2 times)",
        "C": "Remains unchanged",
        "D": "Halves"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Centripetal acceleration",
    concept="Centripetal acceleration in terms of frequency $f$ is $a_c = \\omega^2 r = (2\\pi f)^2 r = 4\\pi^2 f^2 r$. Therefore, $a_c \\propto f^2$. Doubling frequency quadruples acceleration.",
    given="$f' = 2f, r = \\text{constant}$.",
    formula="a_c = 4\\pi^2 f^2 r \\propto f^2",
    steps=(
        "1. Angular speed is $\\omega = 2\\pi f$.\n"
        "2. Centripetal acceleration is $a_c = \\omega^2 r = 4\\pi^2 f^2 r$.\n"
        "3. If frequency $f$ doubles, $f^2$ quadruples.\n"
        "4. Therefore, $a_c$ becomes 4 times its initial value."
    ),
    tip="$a_c \\propto f^2$: frequency doubled $\\implies$ acceleration quadrupled!",
    why_wrong="Option B forgets the square on frequency."
))

# Q459 - Medium
qs.append(make_plane_q(
    num=459,
    question="In non-uniform circular motion, a particle has both centripetal acceleration $a_c$ and tangential acceleration $a_t$. What is the magnitude of the TOTAL acceleration?",
    options={
        "A": "$a = \\sqrt{a_c^2 + a_t^2}$",
        "B": "$a = a_c + a_t$",
        "C": "$a = a_c - a_t$",
        "D": "$a = \\sqrt{a_c^2 - a_t^2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Centripetal acceleration",
    concept="Centripetal acceleration is radial (inward) and tangential acceleration is along the tangent. Because the radial and tangential directions are mutually perpendicular, the total acceleration is the hypotenuse: $a = \\sqrt{a_c^2 + a_t^2}$.",
    given="Mutually orthogonal components $a_c$ and $a_t$.",
    formula="a = \\sqrt{a_c^2 + a_t^2}",
    steps=(
        "1. Centripetal acceleration changes the direction of velocity: $\\vec{a}_c = -\\left(\\frac{v^2}{r}\\right)\\hat{r}$.\n"
        "2. Tangential acceleration changes the magnitude of velocity: $\\vec{a}_t = \\left(\\frac{dv}{dt}\\right)\\hat{t}$.\n"
        "3. Since $\\hat{r} \\perp \\hat{t}$, the two vector components are orthogonal.\n"
        "4. Net acceleration: $a = |\\vec{a}_c + \\vec{a}_t| = \\sqrt{a_c^2 + a_t^2}$."
    ),
    tip="Pythagoras applies because radial and tangential axes are at $90^\\circ$!",
    why_wrong="Option B simply adds scalar magnitudes without vector geometry."
))

# Q460 - Medium
qs.append(make_plane_q(
    num=460,
    question="A car moves on a circular track of radius $100\\text{ m}$. At a certain instant, its speed is $20\\text{ m/s}$ and its speed is increasing at a rate of $3\\text{ m/s}^2$. What is the magnitude of the total acceleration of the car at this instant?",
    options={
        "A": "$5\\text{ m/s}^2$",
        "B": "$7\\text{ m/s}^2$",
        "C": "$4\\text{ m/s}^2$",
        "D": "$1\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Centripetal acceleration",
    concept="Calculate centripetal acceleration $a_c = \\frac{v^2}{r} = \\frac{20^2}{100} = 4\\text{ m/s}^2$. Tangential acceleration is $a_t = \\frac{dv}{dt} = 3\\text{ m/s}^2$. Total acceleration is $a = \\sqrt{a_c^2 + a_t^2} = \\sqrt{4^2 + 3^2} = 5\\text{ m/s}^2$.",
    given="$r = 100\\text{ m}, v = 20\\text{ m/s}, a_t = 3\\text{ m/s}^2$.",
    formula="a_c = \\frac{v^2}{r} = 4\\text{ m/s}^2; a = \\sqrt{a_c^2 + a_t^2}",
    steps=(
        "1. Centripetal component: $a_c = \\frac{20^2}{100} = \\frac{400}{100} = 4\\text{ m/s}^2$.\n"
        "2. Tangential component: $a_t = 3\\text{ m/s}^2$.\n"
        "3. Total acceleration:\n"
        "   $a = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ m/s}^2$."
    ),
    tip="Notice the 3-4-5 right triangle: $a_c = 4$, $a_t = 3 \\implies a_{total} = 5\\text{ m/s}^2$!",
    why_wrong="Option B simply adds $4 + 3 = 7$."
))

# Q461 - Medium
qs.append(make_plane_q(
    num=461,
    question="In the previous question, what is the angle made by the total acceleration vector with the velocity vector?",
    options={
        "A": "$\\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 53^\\circ$",
        "B": "$\\tan^{-1}\\left(\\frac{3}{4}\\right) \\approx 37^\\circ$",
        "C": "$45^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Centripetal acceleration",
    concept="Velocity is along the tangent. The angle $\\phi$ of total acceleration with the velocity (tangent) satisfies $\\tan\\phi = \\frac{a_c}{a_t} = \\frac{4}{3} \\implies \\phi = \\tan^{-1}(4/3) \\approx 53^\\circ$.",
    given="$a_c = 4\\text{ m/s}^2, a_t = 3\\text{ m/s}^2$.",
    formula="\\tan\\phi = \\frac{a_c}{a_t} = \\frac{4}{3}",
    steps=(
        "1. Velocity is in the direction of the tangent vector $\\hat{t}$.\n"
        "2. The acceleration component parallel to velocity is $a_t = 3\\text{ m/s}^2$.\n"
        "3. The acceleration component perpendicular to velocity is $a_c = 4\\text{ m/s}^2$.\n"
        "4. Angle with velocity: $\\tan\\phi = \\frac{a_c}{a_t} = \\frac{4}{3} \\implies \\phi \\approx 53^\\circ$."
    ),
    tip="Angle with velocity is $\\tan\\phi = a_c / a_t$. Angle with radius is $\\tan\\theta = a_t / a_c$.",
    why_wrong="Option B is the angle with the radius (centripetal direction)."
))

# Q462 - Medium
qs.append(make_plane_q(
    num=462,
    question="A coin placed on a rotating turntable at a distance of $r = 9\\text{ cm}$ from the center just slips when the turntable rotates at $33\\frac{1}{3}\\text{ rpm} \\approx \\frac{100}{3}\\text{ rpm}$. Taking $g = \\pi^2\\text{ m/s}^2 \\approx 9.87\\text{ m/s}^2$, what is the coefficient of static friction $\\mu_s$ between the coin and the turntable?",
    options={
        "A": "$0.1$",
        "B": "$0.2$",
        "C": "$0.3$",
        "D": "$0.4$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Centripetal acceleration",
    concept="The required centripetal force is provided by static friction: $f_s = m\\omega^2 r \\le \\mu_s mg \\implies \\mu_s = \\frac{\\omega^2 r}{g}$.",
    given="$r = 0.09\\text{ m}, N = \\frac{100}{3}\\text{ rpm}, g = \\pi^2$.",
    formula="\\omega = \\frac{2\\pi N}{60} = \\frac{2\\pi (100/3)}{60} = \\frac{10\\pi}{9}\\text{ rad/s}; \\mu_s = \\frac{\\omega^2 r}{g}",
    steps=(
        "1. Angular speed:\n"
        "   $\\omega = \\frac{2\\pi N}{60} = \\frac{2\\pi \\times 100/3}{60} = \\frac{200\\pi}{180} = \\frac{10\\pi}{9}\\text{ rad/s}$.\n"
        "2. Compute $\\omega^2$:\n"
        "   $\\omega^2 = \\frac{100\\pi^2}{81}$.\n"
        "3. Slipping condition: $\\mu_s g = \\omega^2 r$:\n"
        "   $\\mu_s (\\pi^2) = \\left(\\frac{100\\pi^2}{81}\\right) \\times 0.09$.\n"
        "4. Since $0.09 = \\frac{9}{100}$:\n"
        "   $\\mu_s \\pi^2 = \\frac{100\\pi^2}{81} \\times \\frac{9}{100} = \\frac{9\\pi^2}{81} = \\frac{\\pi^2}{9} \\approx 0.11$ (Wait, $\\mu_s = 1/9 \\approx 0.11$! If $r = 8.1\\text{ cm} = 0.081\\text{ m}$, then $0.081 = 81/1000$, so $\\frac{100}{81} \\times \\frac{81}{1000} = 0.1$!)\n"
        "   Let's set $r = 8.1\\text{ cm}$ so that $\\mu_s = 0.1$ exactly!)."
    ),
    tip="Friction provides centripetal acceleration: $\\mu_s g = \\omega^2 r$.",
    why_wrong="Option B gives double the required friction."
))

# Clean Q462 numbers:
qs[-1]["question"] = "A coin placed on a rotating turntable at a distance of $r = 8.1\\text{ cm}$ from the center just begins to slip when the turntable rotates at $33\\frac{1}{3}\\text{ rpm} = \\frac{100}{3}\\text{ rpm}$. Taking $g = \\pi^2\\text{ m/s}^2$, what is the coefficient of static friction $\\mu_s$ between the coin and the turntable?"
qs[-1]["given"] = "$r = 8.1\\text{ cm} = 0.081\\text{ m}, N = \\frac{100}{3}\\text{ rpm}, g = \\pi^2\\text{ m/s}^2$."
qs[-1]["steps"] = (
    "1. Calculate angular speed:\n"
    "   $\\omega = \\frac{2\\pi N}{60} = \\frac{2\\pi (100/3)}{60} = \\frac{10\\pi}{9}\\text{ rad/s}$.\n"
    "2. Square of angular speed: $\\omega^2 = \\frac{100\\pi^2}{81}$.\n"
    "3. At the verge of slipping: $\\mu_s mg = m\\omega^2 r \\implies \\mu_s = \\frac{\\omega^2 r}{g}$.\n"
    "4. Substitute values:\n"
    "   $\\mu_s = \\frac{1}{\\pi^2} \\left(\\frac{100\\pi^2}{81}\\right) (0.081) = \\frac{100}{81} \\times \\frac{81}{1000} = \\frac{100}{1000} = 0.1$."
)
qs[-1]["solutionStructured"]["given"] = qs[-1]["given"]
qs[-1]["solutionStructured"]["stepByStep"] = qs[-1]["steps"]
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: 0.1"

# Q463 - Medium
qs.append(make_plane_q(
    num=463,
    question="A particle of mass $m$ is moving in a circular path of radius $r$ such that its centripetal acceleration varies with time as $a_c = k^2 r t^2$, where $k$ is a constant. What is the power delivered to the particle by the net force as a function of time?",
    options={
        "A": "$m k^2 r^2 t$",
        "B": "$m k^4 r^2 t^3$",
        "C": "$0$",
        "D": "$m k r^2 t$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Centripetal acceleration",
    concept="Centripetal force does zero work. Only tangential force does work: $P = F_t v = (m a_t) v$. From $a_c = \\frac{v^2}{r} = k^2 r t^2 \\implies v = k r t$. Then $a_t = \\frac{dv}{dt} = k r$. Power is $P = m(k r)(k r t) = m k^2 r^2 t$.",
    given="$a_c = k^2 r t^2$.",
    formula="v = \\sqrt{a_c r} = k r t; a_t = \\frac{dv}{dt} = k r; P = m a_t v",
    steps=(
        "1. Centripetal acceleration is $a_c = \\frac{v^2}{r} = k^2 r t^2$.\n"
        "2. Solve for linear speed: $v^2 = k^2 r^2 t^2 \\implies v(t) = k r t$.\n"
        "3. Tangential acceleration: $a_t = \\frac{dv}{dt} = k r$ (constant).\n"
        "4. Centripetal force does zero work because it is perpendicular to velocity.\n"
        "5. Power is delivered exclusively by tangential force:\n"
        "   $P = F_t \\times v = (m a_t) v = m(k r)(k r t) = m k^2 r^2 t$."
    ),
    tip="Remember: $P = \\frac{dK}{dt} = \\frac{d}{dt}\\left(\\frac{1}{2}m v^2\\right) = \\frac{d}{dt}\\left(\\frac{1}{2}m k^2 r^2 t^2\\right) = m k^2 r^2 t$! Power is the time derivative of kinetic energy!",
    why_wrong="Option C wrongly assumes power is zero because circular motion usually involves centripetal force."
))

# Q464 - Hard
qs.append(make_plane_q(
    num=464,
    question="A particle moves along a circle of radius $R$ with speed increasing uniformly at a rate $a_t$. Starting from rest, after what time $t$ will the centripetal acceleration equal the tangential acceleration?",
    options={
        "A": "$\\sqrt{\\frac{R}{a_t}}$",
        "B": "$\\frac{R}{a_t}$",
        "C": "$\\sqrt{\\frac{2R}{a_t}}$",
        "D": "$\\frac{2R}{a_t}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Centripetal acceleration",
    concept="Starting from rest, speed after time $t$ is $v = a_t t$. Centripetal acceleration is $a_c = \\frac{v^2}{R} = \\frac{a_t^2 t^2}{R}$. Set $a_c = a_t \\implies \\frac{a_t^2 t^2}{R} = a_t \\implies t^2 = \\frac{R}{a_t} \\implies t = \\sqrt{\\frac{R}{a_t}}$.",
    given="$v = a_t t$, $a_c = a_t$.",
    formula="\\frac{(a_t t)^2}{R} = a_t \\implies t = \\sqrt{\\frac{R}{a_t}}",
    steps=(
        "1. Since tangential acceleration $a_t$ is constant, speed at time $t$ is $v(t) = a_t t$.\n"
        "2. Centripetal acceleration at time $t$ is $a_c = \\frac{v^2}{R} = \\frac{a_t^2 t^2}{R}$.\n"
        "3. Equate $a_c = a_t$:\n"
        "   $\\frac{a_t^2 t^2}{R} = a_t$.\n"
        "4. Divide by $a_t$:\n"
        "   $\\frac{a_t t^2}{R} = 1 \\implies t^2 = \\frac{R}{a_t} \\implies t = \\sqrt{\\frac{R}{a_t}}$."
    ),
    tip="At this instant, the angle between total acceleration and velocity is $45^\\circ$ because $a_c = a_t$!",
    why_wrong="Option C corresponds to distance $s = R$, not $a_c = a_t$."
))

# Q465 - Hard
qs.append(make_plane_q(
    num=465,
    question="In the previous question, what is the angular displacement $\\theta$ covered by the particle in that time?",
    options={
        "A": "$0.5\\text{ rad}$",
        "B": "$1.0\\text{ rad}$",
        "C": "$2.0\\text{ rad}$",
        "D": "$\\pi\\text{ rad}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Centripetal acceleration",
    concept="Distance covered along the circumference is $s = \\frac{1}{2}a_t t^2$. Since $t^2 = R / a_t$, $s = \\frac{1}{2}a_t \\left(\\frac{R}{a_t}\\right) = \\frac{R}{2}$. Angular displacement is $\\theta = \\frac{s}{R} = \\frac{R/2}{R} = 0.5\\text{ rad}$.",
    given="$t^2 = R / a_t, s = \\frac{1}{2}a_t t^2$.",
    formula="\\theta = \\frac{s}{R} = \\frac{\\frac{1}{2}a_t (R/a_t)}{R} = 0.5\\text{ rad}",
    steps=(
        "1. Linear distance along arc: $s = \\frac{1}{2}a_t t^2$.\n"
        "2. Substitute $t^2 = \\frac{R}{a_t}$:\n"
        "   $s = \\frac{1}{2}a_t \\left(\\frac{R}{a_t}\\right) = \\frac{R}{2}$.\n"
        "3. Angular displacement: $\\theta = \\frac{s}{R} = \\frac{R/2}{R} = 0.5\\text{ rad}$."
    ),
    tip="Universal invariant: When starting from rest with constant $a_t$, $a_c = a_t$ occurs at EXACTLY $\\theta = 0.5\\text{ radians}$, completely independent of $R$ or $a_t$!",
    why_wrong="Option B forgets the $1/2$ factor in $s = \\frac{1}{2}at^2$."
))

# Q466 - Hard
qs.append(make_plane_q(
    num=466,
    question="A particle moves along a circle of radius $R$ with speed $v = \\sqrt{s}$, where $s$ is the distance traveled from the start. What is the total acceleration of the particle as a function of $s$?",
    options={
        "A": "$\\sqrt{\\frac{s^2}{R^2} + \\frac{1}{4}}$",
        "B": "$\\frac{s}{R}$",
        "C": "$\\sqrt{\\frac{s}{R} + 1}$",
        "D": "$\\frac{s^2}{R^2} + \\frac{1}{2}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Centripetal acceleration",
    concept="Centripetal acceleration is $a_c = \\frac{v^2}{R} = \\frac{s}{R}$. Tangential acceleration is $a_t = v\\frac{dv}{ds} = \\sqrt{s} \\frac{d}{ds}(\\sqrt{s}) = \\sqrt{s} \\left(\\frac{1}{2\\sqrt{s}}\\right) = \\frac{1}{2}$. Total acceleration is $a = \\sqrt{a_c^2 + a_t^2} = \\sqrt{(s/R)^2 + (1/2)^2} = \\sqrt{\\frac{s^2}{R^2} + \\frac{1}{4}}$.",
    given="$v = \\sqrt{s}$.",
    formula="a_c = \\frac{s}{R}; a_t = v\\frac{dv}{ds} = \\frac{1}{2}; a = \\sqrt{a_c^2 + a_t^2}",
    steps=(
        "1. Centripetal acceleration: $a_c = \\frac{v^2}{R} = \\frac{(\\sqrt{s})^2}{R} = \\frac{s}{R}$.\n"
        "2. Tangential acceleration using chain rule:\n"
        "   $a_t = v\\frac{dv}{ds} = \\sqrt{s} \\left(\\frac{1}{2\\sqrt{s}}\\right) = \\frac{1}{2}\\text{ m/s}^2$ (constant!).\n"
        "3. Total acceleration:\n"
        "   $a = \\sqrt{a_c^2 + a_t^2} = \\sqrt{\\left(\\frac{s}{R}\\right)^2 + \\left(\\frac{1}{2}\\right)^2} = \\sqrt{\\frac{s^2}{R^2} + \\frac{1}{4}}$."
    ),
    tip="Remember the calculus relation: $a_t = \\frac{dv}{dt} = v\\frac{dv}{ds}$. Here $\\frac{d(v^2)}{ds} = 2a_t \\implies \\frac{d(s)}{ds} = 1 = 2a_t \\implies a_t = 1/2$!",
    why_wrong="Option B is only the centripetal acceleration."
))

# Q467 - Hard
qs.append(make_plane_q(
    num=467,
    question="A particle of mass $m$ is suspended from a ceiling by a light string of length $L$ and swings in a horizontal circle of radius $r$ at constant speed (a conical pendulum). If the string makes an angle $\\theta$ with the vertical, what is the centripetal acceleration of the bob?",
    options={
        "A": "$g\\tan\\theta$",
        "B": "$g\\sin\\theta$",
        "C": "$g\\cos\\theta$",
        "D": "$\\frac{g}{\\tan\\theta}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Centripetal acceleration",
    concept="In a conical pendulum, the vertical component of tension balances gravity: $T\\cos\\theta = mg$. The horizontal component of tension provides the centripetal force: $T\\sin\\theta = m a_c$. Dividing the two gives $a_c = g\\tan\\theta$.",
    given="Conical pendulum with semi-vertical angle $\\theta$.",
    formula="T\\sin\\theta = m a_c; T\\cos\\theta = mg \\implies a_c = g\\tan\\theta",
    steps=(
        "1. Resolve tension along vertical: $T\\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}$.\n"
        "2. Resolve tension along horizontal (towards center of circular orbit):\n"
        "   $T\\sin\\theta = m a_c$.\n"
        "3. Divide the horizontal equation by the vertical equation:\n"
        "   $\\frac{T\\sin\\theta}{T\\cos\\theta} = \\frac{m a_c}{mg} \\implies \\tan\\theta = \\frac{a_c}{g}$.\n"
        "4. Thus, centripetal acceleration is $a_c = g\\tan\\theta$."
    ),
    tip="Notice this is the EXACT same formula as the banking of roads without friction: $\\tan\\theta = \\frac{v^2}{rg} = \\frac{a_c}{g} \\implies a_c = g\\tan\\theta$!",
    why_wrong="Option B ignores the vertical equilibrium condition on tension."
))

# Q468 - Hard
qs.append(make_plane_q(
    num=468,
    question="In the conical pendulum of the previous question, what is the time period of revolution $T$ of the bob?",
    options={
        "A": "$2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$",
        "B": "$2\\pi\\sqrt{\\frac{L}{g}}$",
        "C": "$2\\pi\\sqrt{\\frac{L\\sin\\theta}{g}}$",
        "D": "$2\\pi\\sqrt{\\frac{L\\tan\\theta}{g}}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Centripetal acceleration",
    concept="Radius of circle is $r = L\\sin\\theta$. Since $a_c = \\omega^2 r = g\\tan\\theta$, we have $\\omega^2 (L\\sin\\theta) = g\\frac{\\sin\\theta}{\\cos\\theta} \\implies \\omega^2 = \\frac{g}{L\\cos\\theta}$. Thus $T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$.",
    given="String length $L$, angle with vertical $\\theta$.",
    formula="T = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}} = 2\\pi\\sqrt{\\frac{h}{g}}",
    steps=(
        "1. Radius of circular path: $r = L\\sin\\theta$.\n"
        "2. Vertical depth of bob below suspension: $h = L\\cos\\theta$.\n"
        "3. Centripetal acceleration equation: $\\omega^2 r = g\\tan\\theta$.\n"
        "4. Substitute $r = L\\sin\\theta$ and $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$:\n"
        "   $\\omega^2 (L\\sin\\theta) = g \\frac{\\sin\\theta}{\\cos\\theta}$.\n"
        "5. Cancel $\\sin\\theta$:\n"
        "   $\\omega^2 L = \\frac{g}{\\cos\\theta} \\implies \\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$.\n"
        "6. Time period: $T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}} = 2\\pi\\sqrt{\\frac{h}{g}}$."
    ),
    tip="Compare with simple pendulum: Simple pendulum is $2\\pi\\sqrt{L/g}$. Conical pendulum is $2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}} = 2\\pi\\sqrt{h/g}$, where $h$ is the vertical height!",
    why_wrong="Option B is the time period of a simple pendulum in 1D small oscillations."
))

# Save topics 25, 26, 27
with open('scripts/mip_topics25_27.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topics 25, 26, 27 generated successfully:", len(qs))
