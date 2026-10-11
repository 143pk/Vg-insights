import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 18: Kinetic friction (Q283 to Q298: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q283: Easy
qs.append(make_lom_q(
    num=283,
    question="Kinetic friction comes into play when:",
    options={
        "A": "There is relative sliding motion between two surfaces in contact",
        "B": "A body is stationary on a horizontal floor",
        "C": "There is an impending motion without actual sliding",
        "D": "Two bodies move together with identical velocities without slipping"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Kinetic friction",
    concept="Kinetic (or dynamic) friction acts exclusively when there is actual relative sliding motion between the contacting surfaces.",
    given="Definition and condition for kinetic friction.",
    formula="$f_k = \\mu_k N$, opposes relative velocity $\\vec{v}_{\\text{rel}}$.",
    steps="1. Static friction prevents sliding before motion occurs.\n2. Once the applied tangential force exceeds limiting static friction, relative sliding begins.\n3. During relative sliding, the opposing force is called kinetic friction.\n4. Its direction always opposes the instantaneous relative velocity of the contacting surfaces.",
    tip="Key distinction: Static friction opposes IMPENDING motion; Kinetic friction opposes ACTUAL relative motion!",
    why_wrong="Option B and C describe static friction. Option D has zero relative velocity, so static friction acts between them, not kinetic."
))

# Q284: Easy
qs.append(make_lom_q(
    num=284,
    question="Which of the following is an established experimental fact regarding kinetic friction between solid surfaces?",
    options={
        "A": "Kinetic friction is slightly less than limiting static friction",
        "B": "Kinetic friction is always greater than limiting static friction",
        "C": "Kinetic friction is directly proportional to the area of contact",
        "D": "Kinetic friction increases sharply with speed for moderate velocities"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Kinetic friction",
    concept="Once relative motion begins, the microscopic contact asperities do not have sufficient time to form deep intermolecular cold welds. Consequently, kinetic friction is slightly less than limiting static friction ($f_k < f_{\\text{lim}}$), meaning $\\mu_k < \\mu_s$.",
    given="Properties of kinetic friction.",
    formula="$f_k = \\mu_k N < \\mu_s N = f_{\\text{lim}}$.",
    steps="1. Intermolecular cold-welds require contact time to bond fully.\n2. In static contact, asperities settle into one another, creating strong bonds.\n3. During sliding, asperities shear across each other rapidly without having time to interlock as deeply.\n4. Hence, the force needed to maintain motion ($f_k$) is less than the force needed to initiate motion ($f_{\\text{lim}}$).",
    tip="$\\mu_k < \\mu_s$ always for any pair of dry surfaces! It is always easier to keep a body sliding than to start it sliding.",
    why_wrong="Option B contradicts experimental fact. Option C and D violate Coulomb's laws of dry friction for moderate speeds."
))

# Q285: Easy
qs.append(make_lom_q(
    num=285,
    question="A block of mass $4\\text{ kg}$ is sliding on a rough horizontal surface with coefficient of kinetic friction $\\mu_k = 0.25$. Taking $g = 10\\text{ m/s}^2$, what is the magnitude of the kinetic friction acting on the block?",
    options={
        "A": "10 N",
        "B": "40 N",
        "C": "2.5 N",
        "D": "1 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Kinetic friction",
    concept="Kinetic friction is given by $f_k = \\mu_k N$, where $N$ is the normal reaction.",
    given="$m = 4\\text{ kg}$, $\\mu_k = 0.25$, $g = 10\\text{ m/s}^2$.",
    formula="$N = mg = 4 \\times 10 = 40\\text{ N}$; $f_k = \\mu_k N = 0.25 \\times 40 = 10\\text{ N}$.",
    steps="1. Calculate the normal reaction force on the horizontal surface: $N = mg = 4\\text{ kg} \\times 10\\text{ m/s}^2 = 40\\text{ N}$.\n2. Apply the formula for kinetic friction: $f_k = \\mu_k N$.\n3. Substitute values: $f_k = 0.25 \\times 40\\text{ N} = 10\\text{ N}$.",
    tip="Kinetic friction has a constant value $f_k = \\mu_k N$ regardless of the sliding speed (for moderate velocities)!",
    why_wrong="Option B (40 N) is the normal reaction. Option C is $0.25 \\times 10$. Option D is $40 / 40$."
))

# Q286: Easy
qs.append(make_lom_q(
    num=286,
    question="A block sliding on a rough horizontal floor with an initial speed $u$ comes to rest due to friction alone. If the coefficient of kinetic friction is $\\mu_k$, the deceleration of the block is:",
    options={
        "A": "$\\mu_k g$",
        "B": "$\\mu_k / g$",
        "C": "$g / \\mu_k$",
        "D": "$\\mu_k m g$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Kinetic friction",
    concept="The only horizontal force acting on the sliding block is kinetic friction $f_k = \\mu_k mg$ opposing motion. From Newton's second law, deceleration is $a = f_k / m = \\mu_k g$.",
    given="Sliding block, only friction acts, coefficient $\\mu_k$.",
    formula="$f_k = \\mu_k mg$; $a = \\frac{f_k}{m} = \\mu_k g$.",
    steps="1. Draw the horizontal free-body diagram: The sole force is kinetic friction $f_k$ opposing the direction of velocity.\n2. The normal force is $N = mg$, so $f_k = \\mu_k N = \\mu_k mg$.\n3. Newton's second law along the direction of motion: $-f_k = m a \\implies -\\mu_k mg = ma$.\n4. Cancelling mass $m$ yields deceleration: $a = -\\mu_k g$ (magnitude $\\mu_k g$).",
    tip="Deceleration due to friction alone on a horizontal floor is $a = \\mu_k g$, completely INDEPENDENT of the mass of the vehicle/block!",
    why_wrong="Option B and C have incorrect dimensions. Option D has units of force, not acceleration."
))

# Q287: Medium
qs.append(make_lom_q(
    num=287,
    question="A car traveling at $20\\text{ m/s}$ along a straight horizontal road slams on its brakes, locking all four wheels. If the coefficient of kinetic friction between the tires and the road is $\\mu_k = 0.5$ (take $g = 10\\text{ m/s}^2$), what is the stopping distance of the car?",
    options={
        "A": "40 m",
        "B": "20 m",
        "C": "80 m",
        "D": "10 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="Deceleration due to skidding is $a = \\mu_k g$. Use kinematic equation $v^2 = u^2 - 2as$ with final velocity $v = 0$ to find stopping distance $s = \\frac{u^2}{2\\mu_k g}$.",
    given="Initial speed $u = 20\\text{ m/s}$, $\\mu_k = 0.5$, $g = 10\\text{ m/s}^2$, $v = 0$.",
    formula="$a = \\mu_k g = 0.5 \\times 10 = 5\\text{ m/s}^2$; $s = \\frac{u^2}{2a} = \\frac{u^2}{2\\mu_k g}$.",
    steps="1. Retardation produced by kinetic friction: $a = \\mu_k g = 0.5 \\times 10 = 5\\text{ m/s}^2$.\n2. The car comes to rest ($v = 0$).\n3. Using third equation of motion: $v^2 = u^2 - 2as \\implies 0 = (20)^2 - 2(5)s$.\n4. $10s = 400 \\implies s = 40\\text{ m}$.",
    tip="Stopping distance formula: $s = \\frac{u^2}{2\\mu_k g}$. Note that stopping distance is proportional to $u^2$!",
    why_wrong="Option B (20 m) misses the factor of 2 in $2a$. Option C (80 m) uses $a = 2.5$. Option D (10 m) uses wrong power."
))

# Q288: Medium
qs.append(make_lom_q(
    num=288,
    question="In the previous question, how long does it take for the car to come to a complete stop?",
    options={
        "A": "4 s",
        "B": "2 s",
        "C": "5 s",
        "D": "8 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="Stopping time is given by the first kinematic equation: $v = u - at \\implies t = \\frac{u}{a} = \\frac{u}{\\mu_k g}$.",
    given="$u = 20\\text{ m/s}$, $a = \\mu_k g = 5\\text{ m/s}^2$, $v = 0$.",
    formula="$t = \\frac{u}{\\mu_k g}$.",
    steps="1. Retardation is $a = \\mu_k g = 0.5 \\times 10 = 5\\text{ m/s}^2$.\n2. From $v = u - at$, setting $v = 0$ gives $t = \\frac{u}{a}$.\n3. Substituting values: $t = \\frac{20}{5} = 4\\text{ s}$.",
    tip="Stopping time is proportional to speed ($t \\propto u$), while stopping distance is proportional to speed squared ($s \\propto u^2$)!",
    why_wrong="Option B (2 s) uses $a = 10$. Option C (5 s) is $20 / 4$. Option D (8 s) multiplies instead of dividing."
))

# Q289: Medium
qs.append(make_lom_q(
    num=289,
    question="A block of mass $m = 2\\text{ kg}$ is sliding on a rough horizontal floor under the action of a constant horizontal pulling force $F = 14\\text{ N}$. If the coefficient of kinetic friction is $\\mu_k = 0.3$ and $g = 10\\text{ m/s}^2$, what is the acceleration of the block?",
    options={
        "A": "$4\\text{ m/s}^2$",
        "B": "$7\\text{ m/s}^2$",
        "C": "$3\\text{ m/s}^2$",
        "D": "$1\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="Net horizontal force is $F_{\\text{net}} = F - f_k = F - \\mu_k mg$. Acceleration is $a = \\frac{F_{\\text{net}}}{m}$.",
    given="$m = 2\\text{ kg}$, $F = 14\\text{ N}$, $\\mu_k = 0.3$, $g = 10\\text{ m/s}^2$.",
    formula="$f_k = \\mu_k mg = 0.3 \\times 2 \\times 10 = 6\\text{ N}$; $a = \\frac{F - f_k}{m}$.",
    steps="1. Normal force: $N = mg = 2 \\times 10 = 20\\text{ N}$.\n2. Kinetic friction opposing sliding: $f_k = \\mu_k N = 0.3 \\times 20 = 6\\text{ N}$.\n3. Net forward accelerating force: $F_{\\text{net}} = F - f_k = 14 - 6 = 8\\text{ N}$.\n4. Acceleration: $a = \\frac{F_{\\text{net}}}{m} = \\frac{8\\text{ N}}{2\\text{ kg}} = 4\\text{ m/s}^2$.",
    tip="Always subtract kinetic friction from the applied force to find the net driving force: $F_{\\text{net}} = F - \\mu_k mg$!",
    why_wrong="Option B ($7\\text{ m/s}^2$) is $F/m$ without friction. Option C is $6/2$. Option D is $(14 - 12)/2$."
))

# Q290: Medium
qs.append(make_lom_q(
    num=290,
    question="A block of mass $m = 5\\text{ kg}$ is pulled along a rough horizontal floor by a force $F = 25\\text{ N}$ inclined at an angle of $37^\\circ$ above the horizontal ($\\cos 37^\\circ = 0.8$, $\\sin 37^\\circ = 0.6$). If $\\mu_k = 0.2$ and $g = 10\\text{ m/s}^2$, what is the kinetic friction acting on the block?",
    options={
        "A": "7 N",
        "B": "10 N",
        "C": "4 N",
        "D": "8 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="An upward inclined pulling force reduces the normal reaction: $N = mg - F\\sin\\theta$. Consequently, kinetic friction is $f_k = \\mu_k N = \\mu_k(mg - F\\sin\\theta)$.",
    given="$m = 5\\text{ kg}$, $F = 25\\text{ N}$, $\\theta = 37^\\circ$, $\\mu_k = 0.2$, $g = 10\\text{ m/s}^2$.",
    formula="$N = mg - F\\sin 37^\\circ$; $f_k = \\mu_k N$.",
    steps="1. Downward gravity: $mg = 5 \\times 10 = 50\\text{ N}$.\n2. Vertical upward component of pulling force: $F_y = F\\sin 37^\\circ = 25 \\times 0.6 = 15\\text{ N}$.\n3. Normal force: $N = mg - F_y = 50 - 15 = 35\\text{ N}$.\n4. Kinetic friction: $f_k = \\mu_k N = 0.2 \\times 35 = 7\\text{ N}$.",
    tip="Pulling at an angle reduces the normal force and thereby decreases kinetic friction!",
    why_wrong="Option B (10 N) is $\\mu_k mg$ (ignoring the vertical component). Option C is $0.2 \\times 20$. Option D is $25 \\times 0.2 + 3$."
))

# Q291: Medium
qs.append(make_lom_q(
    num=291,
    question="In the previous question, what is the acceleration of the block along the horizontal surface?",
    options={
        "A": "$2.6\\text{ m/s}^2$",
        "B": "$4.0\\text{ m/s}^2$",
        "C": "$1.3\\text{ m/s}^2$",
        "D": "$3.2\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="Horizontal component of pulling force accelerates the block against kinetic friction: $F_x - f_k = ma \\implies a = \\frac{F\\cos\\theta - f_k}{m}$.",
    given="$m = 5\\text{ kg}$, $F = 25\\text{ N}$, $\\theta = 37^\\circ$, $f_k = 7\\text{ N}$.",
    formula="$F_x = F\\cos 37^\\circ = 25 \\times 0.8 = 20\\text{ N}$; $a = \\frac{F_x - f_k}{m}$.",
    steps="1. Horizontal driving force: $F_x = F\\cos 37^\\circ = 25 \\times 0.8 = 20\\text{ N}$.\n2. Opposing kinetic friction: $f_k = 7\\text{ N}$.\n3. Net horizontal force: $F_{\\text{net}} = 20 - 7 = 13\\text{ N}$.\n4. Acceleration: $a = \\frac{F_{\\text{net}}}{m} = \\frac{13\\text{ N}}{5\\text{ kg}} = 2.6\\text{ m/s}^2$.",
    tip="Always calculate along axes independently: $N$ from y-axis, then $f_k = \\mu_k N$, then $a_x = (F_x - f_k)/m$!",
    why_wrong="Option B ($4.0\\text{ m/s}^2$) is $20/5$ (ignoring friction). Option C is $1.3$. Option D is $(20 - 4)/5$."
))

# Q292: Medium
qs.append(make_lom_q(
    num=292,
    question="A bullet of mass $m$ moving with speed $v$ penetrates a thick wooden target experiencing a constant resistive frictional force $f$. The penetration depth of the bullet is:",
    options={
        "A": "$\\frac{m v^2}{2f}$",
        "B": "$\\frac{m v^2}{f}$",
        "C": "$\\frac{m v}{f}$",
        "D": "$\\frac{2 m v^2}{f}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="Work-energy theorem or kinematics: The work done by the resistive frictional force $-f \\cdot d$ equals the change in kinetic energy: $-f d = 0 - \\frac{1}{2}mv^2 \\implies d = \\frac{mv^2}{2f}$.",
    given="Bullet mass $m$, speed $v$, constant resistive force $f$.",
    formula="Work-Energy Theorem: $W_{\\text{friction}} = \\Delta K \\implies -f d = -\\frac{1}{2}m v^2 \\implies d = \\frac{m v^2}{2f}$.",
    steps="1. The resistive force is constant: $F = -f$.\n2. Deceleration of the bullet inside wood is $a = \\frac{f}{m}$.\n3. Using $v_f^2 = v_i^2 - 2ad$ with final speed $v_f = 0$:\n   $0 = v^2 - 2\\left(\\frac{f}{m}\\right)d$.\n4. Solving for depth $d$: $d = \\frac{v^2}{2(f/m)} = \\frac{m v^2}{2f}$.",
    tip="Penetration depth is proportional to kinetic energy ($K \\propto v^2$) when resisting force is constant!",
    why_wrong="Option B misses the factor of $1/2$ from kinetic energy. Option C is stopping time multiplied by mass."
))

# Q293: Medium
qs.append(make_lom_q(
    num=293,
    question="A body of mass $m$ sliding down an inclined plane of angle $\\theta$ moves with a constant velocity. What is the coefficient of kinetic friction between the body and the plane?",
    options={
        "A": "$\\tan\\theta$",
        "B": "$\\sin\\theta$",
        "C": "$\\cos\\theta$",
        "D": "$\\cot\\theta$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="Constant velocity means zero acceleration ($a = 0$). Therefore, the component of gravity down the incline must exactly balance the kinetic friction up the incline: $mg\\sin\\theta = \\mu_k mg\\cos\\theta \\implies \\mu_k = \\tan\\theta$.",
    given="Incline angle $\\theta$, sliding down at constant velocity ($a = 0$).",
    formula="$mg\\sin\\theta = f_k = \\mu_k mg\\cos\\theta \\implies \\mu_k = \\tan\\theta$.",
    steps="1. Forces acting parallel to the incline: gravity component $mg\\sin\\theta$ downwards, kinetic friction $f_k$ upwards.\n2. Normal force perpendicular to incline: $N = mg\\cos\\theta$.\n3. Since velocity is constant, acceleration $a = 0$.\n4. Applying Newton's first law along the incline: $mg\\sin\\theta - f_k = 0$.\n5. Substitute $f_k = \\mu_k N = \\mu_k mg\\cos\\theta$:\n   $mg\\sin\\theta = \\mu_k mg\\cos\\theta \\implies \\mu_k = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$.",
    tip="Constant velocity sliding on incline $\\iff \\mu_k = \\tan\\theta$! High yield NEET concept.",
    why_wrong="Option B, C, and D are incorrect trigonometric functions."
))

# Q294: Medium
qs.append(make_lom_q(
    num=294,
    question="A block of mass $m$ slides down a rough incline of angle $\\theta$. If the coefficient of kinetic friction is $\\mu_k$, the acceleration of the block down the incline is:",
    options={
        "A": "$g(\\sin\\theta - \\mu_k \\cos\\theta)$",
        "B": "$g(\\sin\\theta + \\mu_k \\cos\\theta)$",
        "C": "$g(\\cos\\theta - \\mu_k \\sin\\theta)$",
        "D": "$g\\sin\\theta$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Kinetic friction",
    concept="Downward driving force along incline is $mg\\sin\\theta$. Opposing kinetic friction is $f_k = \\mu_k mg\\cos\\theta$. Net force is $mg(\\sin\\theta - \\mu_k\\cos\\theta) = ma$.",
    given="Rough incline angle $\\theta$, sliding downwards, kinetic friction coefficient $\\mu_k$.",
    formula="$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$.",
    steps="1. Choose axis parallel to incline pointing downwards.\n2. Gravity component pulling down the incline: $F_g = mg\\sin\\theta$.\n3. Perpendicular normal reaction: $N = mg\\cos\\theta$.\n4. Because the block moves downwards, kinetic friction acts upwards: $f_k = \\mu_k N = \\mu_k mg\\cos\\theta$.\n5. Net force down the incline: $F_{\\text{net}} = mg\\sin\\theta - \\mu_k mg\\cos\\theta$.\n6. Divide by mass $m$ to get acceleration: $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$.",
    tip="Memorize the standard signs: Sliding DOWN $\\rightarrow a = g(\\sin\\theta - \\mu_k\\cos\\theta)$; Projected UP $\\rightarrow a = -g(\\sin\\theta + \\mu_k\\cos\\theta)$.",
    why_wrong="Option B is the retardation when moving UP the incline. Option C swaps sin and cos. Option D is for a frictionless incline."
))

# Q295: Hard
qs.append(make_lom_q(
    num=295,
    question="A block takes $n$ times as much time to slide down a rough inclined plane of angle $\\theta$ as it takes to slide down a perfectly smooth inclined plane of the same length and inclination. What is the coefficient of kinetic friction $\\mu_k$?",
    options={
        "A": "$\\tan\\theta \\left(1 - \\frac{1}{n^2}\\right)$",
        "B": "$\\tan\\theta \\left(1 - \\frac{1}{n}\\right)$",
        "C": "$\\cot\\theta \\left(1 - \\frac{1}{n^2}\\right)$",
        "D": "$\\tan\\theta \\left(n^2 - 1\\right)$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Kinetic friction",
    concept="For distance $s = \\frac{1}{2}at^2$, time is $t = \\sqrt{2s/a}$. Hence $t \\propto 1/\\sqrt{a}$. If $t_{\\text{rough}} = n t_{\\text{smooth}}$, then $a_{\\text{smooth}} = n^2 a_{\\text{rough}}$.",
    given="Time ratio $t_r / t_s = n$, length $s$, incline $\\theta$.",
    formula="$a_s = g\\sin\\theta$; $a_r = g(\\sin\\theta - \\mu_k\\cos\\theta)$; $a_s / a_r = n^2 \\implies \\mu_k = \\tan\\theta(1 - 1/n^2)$.",
    steps="1. On a smooth incline, acceleration is $a_s = g\\sin\\theta$.\n2. On a rough incline, acceleration is $a_r = g(\\sin\\theta - \\mu_k\\cos\\theta)$.\n3. Since both start from rest and travel distance $s$: $s = \\frac{1}{2}a_s t_s^2 = \\frac{1}{2}a_r t_r^2$.\n4. Therefore, $\\frac{a_s}{a_r} = \\left(\\frac{t_r}{t_s}\\right)^2 = n^2$.\n5. Substitute the accelerations:\n   $\\frac{g\\sin\\theta}{g(\\sin\\theta - \\mu_k\\cos\\theta)} = n^2$.\n6. $\\sin\\theta = n^2(\\sin\\theta - \\mu_k\\cos\\theta)$.\n7. $n^2\\mu_k\\cos\\theta = (n^2 - 1)\\sin\\theta$.\n8. $\\mu_k = \\frac{n^2 - 1}{n^2} \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta \\left(1 - \\frac{1}{n^2}\\right)$.",
    tip="Classic NEET Top Formula: $\\mu_k = \\tan\\theta\\left(1 - \\frac{1}{n^2}\\right)$. If it takes twice as long ($n = 2$), $\\mu_k = \\tan\\theta(1 - 1/4) = \\frac{3}{4}\\tan\\theta$!",
    why_wrong="Option B misses the square on $n$. Option C uses $\\cot\\theta$. Option D has inverted brackets."
))

# Q296: Hard
qs.append(make_lom_q(
    num=296,
    question="A block of mass $m$ is projected up a rough inclined plane of inclination $\\theta$ with an initial velocity $u$. The coefficient of kinetic friction is $\\mu_k$. The time taken by the block to reach its highest point is:",
    options={
        "A": "$\\frac{u}{g(\\sin\\theta + \\mu_k \\cos\\theta)}$",
        "B": "$\\frac{u}{g(\\sin\\theta - \\mu_k \\cos\\theta)}$",
        "C": "$\\frac{u}{g\\sin\\theta}$",
        "D": "$\\frac{u^2}{2g(\\sin\\theta + \\mu_k \\cos\\theta)}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Kinetic friction",
    concept="When moving UP the incline, both gravity component ($mg\\sin\\theta$) and kinetic friction ($f_k = \\mu_k mg\\cos\\theta$) act DOWN the incline, reinforcing each other. The total retardation is $a = g(\\sin\\theta + \\mu_k\\cos\\theta)$. Using $v = u - at = 0$ gives $t = u / a$.",
    given="Initial velocity $u$ up incline, angle $\\theta$, coefficient $\\mu_k$.",
    formula="$a_{\\text{up}} = g(\\sin\\theta + \\mu_k\\cos\\theta)$; $t_{\\text{up}} = \\frac{u}{a_{\\text{up}}}$.",
    steps="1. FBD while moving UP the incline:\n   - Gravity parallel to plane: $mg\\sin\\theta$ directed downward along incline.\n   - Kinetic friction: opposes upward velocity, directed downward along incline: $f_k = \\mu_k mg\\cos\\theta$.\n2. Net opposing force: $F = mg\\sin\\theta + \\mu_k mg\\cos\\theta$.\n3. Retardation: $a = g(\\sin\\theta + \\mu_k\\cos\\theta)$.\n4. At highest point, $v = 0$.\n5. Using $v = u - at$: $0 = u - at \\implies t_{\\text{up}} = \\frac{u}{g(\\sin\\theta + \\mu_k\\cos\\theta)}$.",
    tip="While ascending, friction and gravity work together to stop the body, so their magnitudes ADD! While descending, friction opposes gravity, so they SUBTRACT.",
    why_wrong="Option B is the time if friction assisted upward motion (physically absurd). Option D has units of distance, not time."
))

# Q297: Hard
qs.append(make_lom_q(
    num=297,
    question="A body is projected up a rough inclined plane and returns to the point of projection. If $t_1$ is the time of ascent and $t_2$ is the time of descent, which of the following is correct?",
    options={
        "A": "$t_1 < t_2$",
        "B": "$t_1 > t_2$",
        "C": "$t_1 = t_2$",
        "D": "$t_1 = 2 t_2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Kinetic friction",
    concept="During ascent, acceleration is $a_1 = g(\\sin\\theta + \\mu_k\\cos\\theta)$. During descent, acceleration is $a_2 = g(\\sin\\theta - \\mu_k\\cos\\theta)$. Since $a_1 > a_2$, and distance traveled is the same ($s = \\frac{1}{2}a t^2$), time of ascent is strictly less than time of descent: $t_1 < t_2$.",
    given="Body projected up rough incline, returns to starting point.",
    formula="$s = \\frac{1}{2}a_1 t_1^2 = \\frac{1}{2}a_2 t_2^2$; $a_1 > a_2 \\implies t_1 < t_2$.",
    steps="1. Let $s$ be the distance traveled along the incline.\n2. Retardation during ascent: $a_1 = g(\\sin\\theta + \\mu_k\\cos\\theta)$.\n3. Acceleration during descent: $a_2 = g(\\sin\\theta - \\mu_k\\cos\\theta)$.\n4. Clearly, $a_1 > a_2$.\n5. Since the body starts from rest at the top for descent: $s = \\frac{1}{2}a_2 t_2^2 \\implies t_2 = \\sqrt{\\frac{2s}{a_2}}$.\n6. For ascent from bottom to top: $s = \\frac{1}{2}a_1 t_1^2 \\implies t_1 = \\sqrt{\\frac{2s}{a_1}}$.\n7. Because $a_1 > a_2$, the denominator for $t_1$ is larger, meaning $t_1 < t_2$.",
    tip="Ascent is quicker than descent on a rough incline: $t_{\\text{ascent}} < t_{\\text{descent}}$! On a smooth incline, $t_1 = t_2$.",
    why_wrong="Option B is the opposite of reality. Option C only holds for frictionless planes. Option D is an arbitrary factor."
))

# Q298: Hard
qs.append(make_lom_q(
    num=298,
    question="A conveyor belt moves horizontally at a constant speed of $2\\text{ m/s}$. A box of mass $m$ is gently placed on the belt with zero initial velocity. The coefficient of kinetic friction is $\\mu_k = 0.2$ (take $g = 10\\text{ m/s}^2$). How far does the box slide along the belt before it stops slipping?",
    options={
        "A": "1 m",
        "B": "2 m",
        "C": "0.5 m",
        "D": "4 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Kinetic friction",
    concept="In the ground frame, the belt accelerates the box via kinetic friction: $a = \\mu_k g = 0.2 \\times 10 = 2\\text{ m/s}^2$. The box reaches belt speed $v = 2\\text{ m/s}$ in time $t = v/a = 1\\text{ s}$. During this time, the belt moves $x_{\\text{belt}} = vt = 2\\text{ m}$, and the box moves $x_{\\text{box}} = \\frac{1}{2}at^2 = 1\\text{ m}$. Relative slipping distance is $x_{\\text{belt}} - x_{\\text{box}} = 1\\text{ m}$.",
    given="Belt speed $v = 2\\text{ m/s}$, box initial speed $u = 0$, $\\mu_k = 0.2$, $g = 10\\text{ m/s}^2$.",
    formula="$a = \\mu_k g$; $t = \\frac{v}{a}$; $d_{\\text{rel}} = vt - \\frac{1}{2}at^2 = \\frac{v^2}{2a}$.",
    steps="1. The kinetic friction on the box acts in the direction of the belt's motion, accelerating the box: $a = \\mu_k g = 0.2 \\times 10 = 2\\text{ m/s}^2$.\n2. Time taken by the box to match the belt's speed: $t = \\frac{v}{a} = \\frac{2\\text{ m/s}}{2\\text{ m/s}^2} = 1\\text{ s}$.\n3. In this 1 second, distance moved by the conveyor belt: $s_{\\text{belt}} = v \\times t = 2 \\times 1 = 2\\text{ m}$.\n4. Distance moved by the box relative to the ground: $s_{\\text{box}} = \\frac{1}{2}at^2 = \\frac{1}{2}(2)(1)^2 = 1\\text{ m}$.\n5. The relative distance slid by the box along the surface of the belt: $\\Delta s = s_{\\text{belt}} - s_{\\text{box}} = 2 - 1 = 1\\text{ m}$.",
    tip="Relative sliding distance on conveyor belt is $s_{\\text{rel}} = \\frac{v^2}{2\\mu_k g}$! Notice this matches the ground stopping distance formula.",
    why_wrong="Option B (2 m) is the distance moved by the belt in ground frame. Option C (0.5 m) uses wrong kinematic formula. Option D (4 m) squares without dividing."
))

# ==============================================================================
# Topic 19: Coefficients of friction (Q299 to Q313: 4 Easy, 8 Medium, 3 Hard)
# ==============================================================================

# Q299: Easy
qs.append(make_lom_q(
    num=299,
    question="The coefficient of static friction $\\mu_s$ and coefficient of kinetic friction $\\mu_k$ for a given pair of dry surfaces satisfy which of the following relations?",
    options={
        "A": "$\\mu_s > \\mu_k$",
        "B": "$\\mu_s < \\mu_k$",
        "C": "$\\mu_s = \\mu_k$",
        "D": "$\\mu_s \\times \\mu_k = 1$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Coefficients of friction",
    concept="The coefficient of static friction is always greater than the coefficient of kinetic friction ($\\mu_s > \\mu_k$) because microscopic cold welds have more time to establish stronger bonds in static contact than during active sliding.",
    given="Comparison between $\\mu_s$ and $\\mu_k$.",
    formula="$\\mu_s > \\mu_k$.",
    steps="1. When two surfaces are stationary, microscopic roughness settles together, forming strong atomic adhesion bonds.\n2. When sliding occurs, the contact asperities skate over each other, having much less time to bond.\n3. Therefore, breaking existing static bonds requires greater force than sustaining motion against transient contacts.\n4. Hence, $\\mu_s > \\mu_k$.",
    tip="Remember: $\\mu_s > \\mu_k$ is an absolute standard across all classical mechanics problems in NEET!",
    why_wrong="Option B, C, and D contradict established experimental physics."
))

# Q300: Easy
qs.append(make_lom_q(
    num=300,
    question="The dimensions of the coefficient of friction $\\mu$ are:",
    options={
        "A": "$[M^0 L^0 T^0]$ (dimensionless)",
        "B": "$[M L T^{-2}]$",
        "C": "$[M^0 L T^{-1}]$",
        "D": "$[M L^2 T^{-2}]$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Coefficients of friction",
    concept="The coefficient of friction is the ratio of two forces: the frictional force and the normal reaction force. Being the ratio of two identical physical quantities, it is purely dimensionless.",
    given="Definition $\\mu = f / N$.",
    formula="[\\mu] = \\frac{[f]}{[N]} = \\frac{[M L T^{-2}]}{[M L T^{-2}]} = [M^0 L^0 T^0]$.",
    steps="1. Frictional force has dimensions of force: $[M L T^{-2}]$.\n2. Normal reaction also has dimensions of force: $[M L T^{-2}]$.\n3. The coefficient of friction is defined as $\\mu = \\frac{f}{N}$.\n4. Therefore, $[\\mu] = \\frac{[M L T^{-2}]}{[M L T^{-2}]} = 1 = [M^0 L^0 T^0]$.\n5. It has no units and no dimensions.",
    tip="$\\mu$ has no units and no dimensions! It depends solely on the nature and roughness of the contacting materials.",
    why_wrong="Option B is the dimension of force. Option C is velocity. Option D is energy or work."
))

# Q301: Easy
qs.append(make_lom_q(
    num=301,
    question="Can the coefficient of static friction $\\mu_s$ ever exceed 1?",
    options={
        "A": "Yes, for very rough or tacky surfaces (e.g., rubber on dry concrete)",
        "B": "No, it is mathematically bounded between 0 and 1 by definition",
        "C": "No, because friction can never exceed normal force",
        "D": "Yes, but only in outer space"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Coefficients of friction",
    concept="The coefficient of friction is not a trigonometric sine or cosine; it is a material property ratio. For surfaces with strong adhesion (like racing car tires on dry asphalt or silicone rubber), $\\mu_s$ can exceed 1 (often reaching 1.2 to 1.5).",
    given="Range and upper bounds of $\\mu_s$.",
    formula="$\\mu = f/N$; there is no theoretical law restricting $\\mu \\le 1$.",
    steps="1. Friction arises from intermolecular adhesion and mechanical interlocking.\n2. When adhesion is very strong, the tangential force required to shear the contact can be larger than the normal force pressing them together.\n3. For instance, drag racing tires have $\\mu_s \\approx 1.5 - 2.0$.\n4. Therefore, $\\mu_s > 1$ is physically possible and routinely observed.",
    tip="Common student misconception: thinking $\\mu \\le 1$ like $\\sin\\theta$! $\\mu$ can easily exceed 1 for tacky materials.",
    why_wrong="Option B is a common misconception. Option C is false because frictional force can exceed normal force when $\\mu > 1$."
))

# Q302: Easy
qs.append(make_lom_q(
    num=302,
    question="The value of the coefficient of friction between two surfaces depends primarily upon:",
    options={
        "A": "The nature of the materials in contact and the roughness of their surfaces",
        "B": "The apparent surface area of contact",
        "C": "The normal reaction force",
        "D": "The shape of the bodies"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Coefficients of friction",
    concept="The coefficient of friction is an empirical constant determined by the chemical nature of the materials, surface roughness, presence of lubricants, and surface cleanliness. It does not depend on macroscopic area or shape.",
    given="Determinants of coefficient of friction.",
    formula="$\\mu = f(material, roughness, contamination)$.",
    steps="1. Microscopic interactions depend on the chemical bonding between the atoms of the two contacting materials.\n2. Surface finish (roughness, polishing, or lubrication) directly affects the asperities.\n3. It is independent of the macroscopic contact area or the weight of the object.\n4. Therefore, it depends primarily on the nature of the materials and surface condition.",
    tip="$\\mu$ depends on: (1) nature of materials, (2) surface roughness, (3) lubrication. It does NOT depend on area or normal force!",
    why_wrong="Option B and D violate Coulomb's laws of friction. Option C: Normal force determines the friction force $f = \\mu N$, but does NOT alter $\\mu$ itself."
))

# Q303: Medium
qs.append(make_lom_q(
    num=303,
    question="A block of mass $m = 2\\text{ kg}$ is kept on a rough horizontal surface where $\\mu_s = 0.5$ and $\\mu_k = 0.4$. If a horizontal force $F = 12\\text{ N}$ is applied to the block (take $g = 10\\text{ m/s}^2$), what is the magnitude of the frictional force acting on the block once motion begins?",
    options={
        "A": "8 N",
        "B": "10 N",
        "C": "12 N",
        "D": "2 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="Check if motion starts: Limiting friction is $f_{\\text{lim}} = \\mu_s N = 0.5 \\times 20 = 10\\text{ N}$. Since $F = 12\\text{ N} > 10\\text{ N}$, the block accelerates and motion begins. Once moving, friction immediately switches to kinetic friction: $f_k = \\mu_k N = 0.4 \\times 20 = 8\\text{ N}$.",
    given="$m = 2\\text{ kg}$, $\\mu_s = 0.5$, $\\mu_k = 0.4$, $F = 12\\text{ N}$, $g = 10\\text{ m/s}^2$.",
    formula="$f_{\\text{lim}} = \\mu_s mg = 10\\text{ N}$; $f_k = \\mu_k mg = 8\\text{ N}$.",
    steps="1. Normal force: $N = mg = 2 \\times 10 = 20\\text{ N}$.\n2. Limiting static friction: $f_{\\text{lim}} = \\mu_s N = 0.5 \\times 20 = 10\\text{ N}$.\n3. Since applied force $F = 12\\text{ N} > f_{\\text{lim}} = 10\\text{ N}$, the block begins sliding.\n4. Once in motion, static friction ceases, and kinetic friction acts.\n5. Kinetic friction is $f_k = \\mu_k N = 0.4 \\times 20 = 8\\text{ N}$.",
    tip="NEET Trap: When $F > f_L$, friction drops from $f_L$ to $f_k$! Never keep using $\\mu_s$ once the object is sliding.",
    why_wrong="Option B (10 N) is the limiting friction before slipping. Option C (12 N) is the applied force. Option D is $F - f_L$."
))

# Q304: Medium
qs.append(make_lom_q(
    num=304,
    question="In the previous question ($m = 2\\text{ kg}$, $\\mu_s = 0.5$, $\\mu_k = 0.4$, $F = 12\\text{ N}$), what is the resulting acceleration of the block?",
    options={
        "A": "$2\\text{ m/s}^2$",
        "B": "$1\\text{ m/s}^2$",
        "C": "$6\\text{ m/s}^2$",
        "D": "$4\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="Once moving, the net accelerating force is $F_{\\text{net}} = F - f_k = 12 - 8 = 4\\text{ N}$. Acceleration is $a = F_{\\text{net}} / m = 4 / 2 = 2\\text{ m/s}^2$.",
    given="$F = 12\\text{ N}$, $f_k = 8\\text{ N}$, $m = 2\\text{ kg}$.",
    formula="$a = \\frac{F - f_k}{m} = \\frac{12 - 8}{2} = 2\\text{ m/s}^2$.",
    steps="1. Applied forward force: $F = 12\\text{ N}$.\n2. Opposing kinetic friction: $f_k = \\mu_k mg = 8\\text{ N}$.\n3. Net driving force: $F_{\\text{net}} = F - f_k = 12 - 8 = 4\\text{ N}$.\n4. Acceleration: $a = \\frac{F_{\\text{net}}}{m} = \\frac{4\\text{ N}}{2\\text{ kg}} = 2\\text{ m/s}^2$.",
    tip="Watch out: Using limiting friction instead would give $(12 - 10)/2 = 1\\text{ m/s}^2$, which is WRONG because once moving, friction is kinetic!",
    why_wrong="Option B ($1\\text{ m/s}^2$) mistakenly subtracts limiting friction ($10\\text{ N}$) instead of kinetic friction ($8\\text{ N}$). Option C is $12/2$."
))

# Q305: Medium
qs.append(make_lom_q(
    num=305,
    question="If two surfaces in contact are polished excessively until they become mirror-smooth, what happens to the coefficient of static friction between them?",
    options={
        "A": "It increases significantly due to cold welding of atomic contact points",
        "B": "It drops to exactly zero",
        "C": "It decreases linearly to 0.01",
        "D": "It remains unchanged"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="Moderate polishing reduces friction by eliminating rough jagged asperities. However, excessive polishing makes the surfaces atomically flat, causing the real area of contact to approach the apparent area. Strong electrostatic molecular bonds (cold welding) then form across large areas, dramatically increasing friction.",
    given="Excessive polishing of contact surfaces.",
    formula="Friction decreases with moderate polishing, but increases sharply upon ultra-polishing due to cold-welding.",
    steps="1. At ordinary microscopic scales, contact occurs only at high peaks (asperities).\n2. Light polishing smooths peaks, decreasing interlocking and reducing $\\mu$.\n3. Beyond an optimal smoothness, the surfaces become so flat that millions of atoms come within bonding distance ($< 1\\text{ nm}$).\n4. Large-scale adhesive cold-welding occurs across the interface.\n5. As a result, the coefficient of friction increases dramatically.",
    tip="NCERT Highlight: Excessive polishing INCREASES friction due to adhesive cold welding! Don't assume smoother always means less friction.",
    why_wrong="Option B and C assume friction continues decreasing indefinitely, ignoring intermolecular cold welds. Option D ignores surface mechanics."
))

# Q306: Medium
qs.append(make_lom_q(
    num=306,
    question="A block of mass $m$ is sliding down an inclined plane of inclination $\\theta = 45^\\circ$. If the coefficient of kinetic friction is $\\mu_k = 0.5$, what is the acceleration of the block down the incline (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$3.54\\text{ m/s}^2$",
        "B": "$5.00\\text{ m/s}^2$",
        "C": "$7.07\\text{ m/s}^2$",
        "D": "$2.50\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="Acceleration down incline: $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$. For $\\theta = 45^\\circ$, $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}} \\approx 0.7071$.",
    given="$\\theta = 45^\\circ$, $\\mu_k = 0.5$, $g = 10\\text{ m/s}^2$.",
    formula="$a = g(\\sin 45^\\circ - \\mu_k\\cos 45^\\circ) = g\\cos 45^\\circ(1 - \\mu_k)$.",
    steps="1. For $\\theta = 45^\\circ$, $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{1}{\\sqrt{2}} \\approx 0.7071$.\n2. $a = 10 \\times (0.7071 - 0.5 \\times 0.7071) = 10 \\times 0.7071 \\times (1 - 0.5)$.\n3. $a = 10 \\times 0.7071 \\times 0.5 = 3.5355 \\approx 3.54\\text{ m/s}^2$.",
    tip="At $45^\\circ$, $\\sin\\theta = \\cos\\theta$, so $a = \\frac{g}{\\sqrt{2}}(1 - \\mu_k)$!",
    why_wrong="Option B ($5.0\\text{ m/s}^2$) is $g \\times 0.5$. Option C ($7.07\\text{ m/s}^2$) is $g/\\sqrt{2}$ (frictionless). Option D is $10/4$."
))

# Q307: Medium
qs.append(make_lom_q(
    num=307,
    question="The coefficient of static friction between two steel surfaces is $0.6$, and kinetic friction is $0.4$. A $5\\text{ kg}$ steel block is placed on a steel floor. A horizontal force $F$ is gradually increased from 0. What force must be maintained to keep the block moving with constant velocity once it has started sliding (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "20 N",
        "B": "30 N",
        "C": "10 N",
        "D": "50 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="To start sliding, the force must momentarily reach $f_{\\text{lim}} = \\mu_s mg = 0.6 \\times 50 = 30\\text{ N}$. But to maintain constant velocity ($a = 0$), the force only needs to balance kinetic friction: $F = f_k = \\mu_k mg = 0.4 \\times 50 = 20\\text{ N}$.",
    given="$m = 5\\text{ kg}$, $\\mu_s = 0.6$, $\\mu_k = 0.4$, $g = 10\\text{ m/s}^2$, constant velocity motion.",
    formula="$F = f_k = \\mu_k N = \\mu_k mg$.",
    steps="1. Normal force: $N = mg = 5 \\times 10 = 50\\text{ N}$.\n2. The threshold force to start motion was $f_{\\text{lim}} = \\mu_s N = 0.6 \\times 50 = 30\\text{ N}$.\n3. Once sliding, friction drops to $f_k = \\mu_k N = 0.4 \\times 50 = 20\\text{ N}$.\n4. For constant velocity, acceleration $a = 0$, so net horizontal force must be zero:\n   $F - f_k = 0 \\implies F = f_k = 20\\text{ N}$.",
    tip="Carefully read what the question asks: 'force to START motion' $= 30\\text{ N}$; 'force to MAINTAIN motion' $= 20\\text{ N}$!",
    why_wrong="Option B (30 N) is the force to start motion. Option C is the difference between static and kinetic. Option D is $mg$."
))

# Q308: Medium
qs.append(make_lom_q(
    num=308,
    question="A block of mass $m$ is pushed against a rough vertical ceiling with an upward vertical force $F > mg$. If the coefficient of static friction is $\\mu_s$, what is the minimum horizontal force required to slide the block along the ceiling?",
    options={
        "A": "$\\mu_s (F - mg)$",
        "B": "$\\mu_s (F + mg)$",
        "C": "$\\mu_s F$",
        "D": "$\\mu_s mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="For a block pressed against a ceiling by upward force $F$, vertical equilibrium gives $F - mg - N = 0 \\implies N = F - mg$. Limiting friction along the ceiling is $f_{\\text{lim}} = \\mu_s N = \\mu_s(F - mg)$.",
    given="Upward force $F$, downward gravity $mg$, ceiling above, static friction $\\mu_s$.",
    formula="$N = F - mg$; $f_{\\text{lim}} = \\mu_s N = \\mu_s(F - mg)$.",
    steps="1. Vertical forces on the block: upward pushing force $F$, downward gravity $mg$, downward normal reaction $N$ from the ceiling.\n2. Since the block does not move vertically: $F - mg - N = 0 \\implies N = F - mg$.\n3. The limiting static friction parallel to the ceiling is $f_{\\text{lim}} = \\mu_s N$.\n4. Substituting $N$: $f_{\\text{lim}} = \\mu_s(F - mg)$.\n5. To slide the block horizontally, the applied horizontal force must overcome this friction.",
    tip="Against a ceiling, normal force is $N = F - mg$, so limiting friction is $\\mu_s(F - mg)$!",
    why_wrong="Option B adds $mg$, which would apply to pushing against the floor. Option C ignores gravity. Option D ignores the pushing force $F$."
))

# Q309: Medium
qs.append(make_lom_q(
    num=309,
    question="A block of mass $m = 1\\text{ kg}$ is resting on a rough horizontal floor with $\\mu_s = 0.5$. If a horizontal force of $4\\text{ N}$ is applied to the block, what is the coefficient of friction called into play?",
    options={
        "A": "0.4",
        "B": "0.5",
        "C": "0.1",
        "D": "0.8"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="The coefficient of friction 'called into play' is the actual ratio of the instantaneous static friction to the normal reaction: $\\mu_{\\text{actual}} = \\frac{f_s}{N}$. Since $F = 4\\text{ N} < f_{\\text{lim}} = 5\\text{ N}$, $f_s = 4\\text{ N}$ and $N = 10\\text{ N}$, so $\\mu_{\\text{actual}} = 4/10 = 0.4$.",
    given="$m = 1\\text{ kg}$, $\\mu_s = 0.5$, $F = 4\\text{ N}$, $g = 10\\text{ m/s}^2$.",
    formula="$f_s = F = 4\\text{ N}$; $N = mg = 10\\text{ N}$; $\\mu_{\\text{called into play}} = \\frac{f_s}{N} = \\frac{4}{10} = 0.4$.",
    steps="1. Normal force: $N = mg = 1 \\times 10 = 10\\text{ N}$.\n2. Limiting friction: $f_{\\text{lim}} = \\mu_s N = 0.5 \\times 10 = 5\\text{ N}$.\n3. Since applied force $F = 4\\text{ N} < 5\\text{ N}$, the block does not move.\n4. Actual static friction acting is $f_s = 4\\text{ N}$.\n5. The fraction of normal force utilized (coefficient called into play) is:\n   $\\mu_{\\text{eff}} = \\frac{f_s}{N} = \\frac{4\\text{ N}}{10\\text{ N}} = 0.4$.",
    tip="The coefficient 'called into play' equals $\\frac{f_s}{N} \\le \\mu_s$. It only reaches $\\mu_s$ at impending motion!",
    why_wrong="Option B (0.5) is the maximum static coefficient. Option C and D are incorrect arithmetic."
))

# Q310: Medium
qs.append(make_lom_q(
    num=310,
    question="The coefficient of friction between two surfaces is $\\mu$. If the normal force pressing the two surfaces together is tripled, what happens to the coefficient of friction $\\mu$?",
    options={
        "A": "It remains unchanged",
        "B": "It is tripled",
        "C": "It is reduced to one-third",
        "D": "It increases by a factor of 9"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Coefficients of friction",
    concept="The coefficient of friction $\\mu$ is an intrinsic property of the materials in contact and their surface condition. It is independent of the normal force. It is the frictional force $f = \\mu N$ that triples, not $\\mu$.",
    given="Normal force tripled from $N$ to $3N$.",
    formula="$f = \\mu N$; $\\mu$ is constant.",
    steps="1. $\\mu$ is a material property determined by atomic composition and surface roughness.\n2. When normal force $N$ increases to $3N$, the limiting friction increases to $f' = \\mu(3N) = 3f$.\n3. The ratio $\\frac{f'}{N'} = \\frac{3f}{3N} = \\mu$ remains constant.\n4. Therefore, the coefficient of friction $\\mu$ does not change.",
    tip="NEET Trap: Don't confuse the frictional force ($f$) with the coefficient of friction ($\\mu$)! $f$ triples, but $\\mu$ stays constant.",
    why_wrong="Option B confuses $\\mu$ with $f$. Option C and D are incorrect."
))

# Q311: Hard
qs.append(make_lom_q(
    num=311,
    question="A block of mass $m$ is placed on another block of mass $M$, which rests on a smooth horizontal table. The coefficient of static friction between the two blocks is $\\mu_s$. What is the maximum horizontal force that can be applied to the lower block $M$ such that both blocks accelerate together without slipping?",
    options={
        "A": "$\\mu_s (m + M) g$",
        "B": "$\\mu_s m g$",
        "C": "$\\mu_s M g$",
        "D": "$\\frac{\\mu_s m M g}{m + M}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Coefficients of friction",
    concept="For the top block $m$, the sole horizontal force accelerating it is the static friction from the bottom block: $f = m a$. The maximum acceleration without slipping is $a_{\\text{max}} = \\frac{f_{\\text{lim}}}{m} = \\frac{\\mu_s m g}{m} = \\mu_s g$. For the whole system to accelerate at $a_{\\text{max}}$, the applied force on the lower block is $F_{\\text{max}} = (m + M) a_{\\text{max}} = \\mu_s(m + M)g$.",
    given="Top block $m$, bottom block $M$, table is smooth, friction $\\mu_s$ between blocks, force $F$ on $M$.",
    formula="$a_{\\text{max}} = \\mu_s g$; $F_{\\text{max}} = (m + M) a_{\\text{max}} = \\mu_s (m + M) g$.",
    steps="1. Analyze the upper block $m$: The only force driving $m$ horizontally is static friction from $M$.\n2. Maximum static friction on $m$ is $f_{\\text{lim}} = \\mu_s N = \\mu_s m g$.\n3. Therefore, the maximum acceleration $m$ can sustain without slipping is:\n   $a_{\\text{max}} = \\frac{f_{\\text{lim}}}{m} = \\frac{\\mu_s mg}{m} = \\mu_s g$.\n4. For both blocks to move together as a single unit, their common acceleration cannot exceed $a_{\\text{max}}$.\n5. Consider the combined system of mass $(m + M)$ on the smooth table:\n   $F = (m + M) a$.\n6. Setting $a = a_{\\text{max}} = \\mu_s g$:\n   $F_{\\text{max}} = (m + M) \\mu_s g = \\mu_s (m + M) g$.",
    tip="Super Formula: When force is on BOTTOM block $M$, $F_{\\text{max}} = \\mu_s (m + M)g$. When force is on TOP block $m$, $F_{\\text{max}} = \\mu_s \\frac{m+M}{M} mg$!",
    why_wrong="Option B ($\\mu_s mg$) is the friction force on $m$. Option C is $\\mu_s Mg$. Option D is reduced mass times friction."
))

# Q312: Hard
qs.append(make_lom_q(
    num=312,
    question="In the previous setup, if the horizontal force $F$ is applied to the UPPER block of mass $m$ instead, what is the maximum force $F_{\\text{max}}$ for which the two blocks move together without slipping?",
    options={
        "A": "$\\mu_s m g \\left(1 + \\frac{m}{M}\\right)$",
        "B": "$\\mu_s (m + M) g$",
        "C": "$\\mu_s m g$",
        "D": "$\\mu_s M g$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Coefficients of friction",
    concept="When force $F$ is applied to top block $m$, the lower block $M$ is accelerated solely by friction from $m$: $f = M a$. Maximum acceleration of $M$ without slipping is $a_{\\text{max}} = \\frac{f_{\\text{lim}}}{M} = \\frac{\\mu_s m g}{M}$. For both blocks, $F_{\\text{max}} = (m + M) a_{\\text{max}} = (m + M) \\frac{\\mu_s m g}{M} = \\mu_s m g \\left(1 + \\frac{m}{M}\\right)$.",
    given="Force on top block $m$, bottom block $M$ on smooth floor.",
    formula="$a_{\\text{max}} = \\frac{\\mu_s mg}{M}$; $F_{\\text{max}} = (m + M) a_{\\text{max}} = \\mu_s mg \\left(1 + \\frac{m}{M}\\right)$.",
    steps="1. Analyze the bottom block $M$: The ONLY horizontal force acting on $M$ is the friction $f$ exerted by $m$.\n2. Maximum friction available between the blocks is $f_{\\text{lim}} = \\mu_s mg$.\n3. Therefore, the maximum acceleration $M$ can achieve is:\n   $a_{\\text{max}} = \\frac{f_{\\text{lim}}}{M} = \\frac{\\mu_s mg}{M}$.\n4. For the system to move together, the acceleration of $m$ must also not exceed $a_{\\text{max}}$.\n5. Total mass is $(m + M)$, so $F_{\\text{max}} = (m + M) a_{\\text{max}} = (m + M) \\frac{\\mu_s mg}{M} = \\mu_s mg \\left(1 + \\frac{m}{M}\\right)$.",
    tip="Compare the two cases: Force on lower block $\\rightarrow F_{\\text{max}} = \\mu_s (m+M)g$; Force on upper block $\\rightarrow F_{\\text{max}} = \\mu_s mg \\left(1 + \\frac{m}{M}\\right)$. Highly tested NEET concept!",
    why_wrong="Option B is the result when force is applied to the lower block. Option C is just the friction on $m$."
))

# Q313: Hard
qs.append(make_lom_q(
    num=313,
    question="A body of mass $m$ is placed on a rough horizontal turntable at a distance $r$ from the axis of rotation. The coefficient of static friction is $\\mu_s$. If the turntable starts rotating with angular speed $\\omega$, what is the maximum angular speed $\\omega_{\\text{max}}$ for which the body does not slip?",
    options={
        "A": "$\\sqrt{\\frac{\\mu_s g}{r}}$",
        "B": "$\\sqrt{\\frac{g}{\\mu_s r}}$",
        "C": "$\\frac{\\mu_s g}{r}$",
        "D": "$\\sqrt{\\mu_s g r}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Coefficients of friction",
    concept="For a body on a rotating turntable, the required centripetal force is provided solely by static friction pointing towards the center: $f_s = m \\omega^2 r$. To avoid slipping, $f_s \\le \\mu_s N = \\mu_s mg \\implies m \\omega^2 r \\le \\mu_s mg \\implies \\omega \\le \\sqrt{\\frac{\\mu_s g}{r}}$.",
    given="Turntable, radius $r$, static friction $\\mu_s$, mass $m$.",
    formula="$f_s = m \\omega^2 r \\le \\mu_s mg \\implies \\omega_{\\text{max}} = \\sqrt{\\frac{\\mu_s g}{r}}$.",
    steps="1. In circular motion with radius $r$ and angular velocity $\\omega$, the required centripetal acceleration is $a_c = \\omega^2 r$.\n2. The only horizontal force acting on the body is static friction pointing towards the rotation axis.\n3. Newton's second law along the radial direction: $f_s = m \\omega^2 r$.\n4. The maximum static friction available is $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.\n5. For no slipping: $f_s \\le f_{\\text{lim}} \\implies m \\omega^2 r \\le \\mu_s mg$.\n6. Dividing by $m$ and solving for $\\omega$:\n   $\\omega^2 \\le \\frac{\\mu_s g}{r} \\implies \\omega_{\\text{max}} = \\sqrt{\\frac{\\mu_s g}{r}}$.",
    tip="Memorize: $\\omega_{\\text{max}} = \\sqrt{\\frac{\\mu_s g}{r}}$ and $v_{\\text{max}} = \\sqrt{\\mu_s g r}$. Independent of mass $m$!",
    why_wrong="Option B inverts $\\mu_s$. Option C lacks the square root. Option D has dimensions of velocity, not angular velocity."
))

print(f"Topics 18 & 19 done: {len(qs)} questions.")
