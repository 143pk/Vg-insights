import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 13: Normal reaction (Q190 to Q204, 15 questions: 4 Easy, 8 Medium, 3 Hard)
# ==============================================================================

# Q190 - Easy
qs.append(make_lom_q(
    num=190,
    question="The direction of the normal reaction force exerted by a surface on an object is always:",
    options={
        "A": "Perpendicular to the contact surface pointing away from the surface into the object",
        "B": "Parallel to the contact surface in the direction of motion",
        "C": "Vertically downward toward the center of the Earth",
        "D": "Opposite to the velocity of the object"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Normal reaction",
    concept="In geometry and physics, 'normal' means perpendicular. The normal contact force is an electromagnetic repulsive force that acts perpendicular to the tangent plane of contact to prevent interpenetration.",
    given="Definition of normal reaction force.",
    formula="\\vec{N} \\perp \\text{surface}",
    steps="1. Normal force arises from the microscopic electrostatic repulsion between electrons in the contacting surfaces.\n2. By definition, it is directed perpendicular (normal) to the surface of contact.\n3. It acts away from the supporting surface, pushing into the object.",
    tip="Normal force is NOT always vertically upward! On an incline, it is perpendicular to the incline; on a vertical wall, it is horizontal!",
    why_wrong="Option B describes friction, which is parallel to the surface."
))

# Q191 - Easy
qs.append(make_lom_q(
    num=191,
    question="A block of mass $m = 8\\text{ kg}$ rests on a horizontal floor. What is the normal reaction force exerted by the floor on the block? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "78.4 N",
        "B": "8.0 N",
        "C": "80.0 N",
        "D": "39.2 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Normal reaction",
    concept="For a resting block on a horizontal floor with no other vertical forces, the normal force balances the weight: $N = mg$.",
    given="$m = 8\\text{ kg}$, $g = 9.8\\text{ m/s}^2$.",
    formula="N = mg",
    steps="1. Vertical equilibrium: $N - mg = 0 \\implies N = mg$.\n2. Substitute values: $N = 8 \\times 9.8 = 78.4\\text{ N}$.",
    tip="On flat ground with no vertical acceleration: $N = mg = 78.4\\text{ N}$.",
    why_wrong="Option C uses $g = 10\\text{ m/s}^2$ instead of $9.8\\text{ m/s}^2$."
))

# Q192 - Easy
qs.append(make_lom_q(
    num=192,
    question="A block of mass $m$ rests on a smooth plane inclined at an angle $\\theta$ to the horizontal. The normal reaction force exerted by the plane on the block is:",
    options={
        "A": "mg cos\\theta",
        "B": "mg sin\\theta",
        "C": "mg tan\\theta",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Normal reaction",
    concept="Perpendicular to the incline, the block has zero acceleration ($a_\\perp = 0$). The normal reaction balances the perpendicular component of gravity: $N = mg\\cos\\theta$.",
    given="Incline of angle $\\theta$.",
    formula="\\sum F_\\perp = N - mg\\cos\\theta = 0 \\implies N = mg\\cos\\theta",
    steps="1. Resolve gravity $mg$ along and perpendicular to the inclined plane.\n2. The perpendicular component pressing the block into the plane is $mg\\cos\\theta$.\n3. For equilibrium perpendicular to the plane: $N = mg\\cos\\theta$.",
    tip="As the incline gets steeper ($\theta$ increases towards $90^\circ$), $\cos\theta$ decreases, so normal force $N$ approaches ZERO!",
    why_wrong="Option B is the parallel downhill component $mg\\sin\\theta$."
))

# Q193 - Easy
qs.append(make_lom_q(
    num=193,
    question="Can the normal reaction force on an object ever be zero while the object is in contact with a surface?",
    options={
        "A": "Yes, at the instant contact is lost or when a lift falls in free fall",
        "B": "No, normal force must always be non-zero as long as mass is positive",
        "C": "No, because gravity always exists",
        "D": "Yes, but only in deep outer space"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Normal reaction",
    concept="Normal force requires pressing contact. If an object is in free fall ($a = g$ downwards) or at the point of toppling/separating, $N = m(g - g) = 0$.",
    given="Condition for $N = 0$.",
    formula="N = m(g - a) = 0\\text{ when } a = g",
    steps="1. Normal force is a self-adjusting constraint force, not an intrinsic constant.\n2. In free fall, $a = g$, so $N = m(g - g) = 0$.\n3. When a looping roller coaster just maintains contact at the top, $N = 0$.\n4. Therefore, $N$ can indeed be zero.",
    tip="The condition for 'just losing contact' in any physics problem is always $N = 0$!",
    why_wrong="Option B is false; normal force depends on contact compression, not just mass."
))

# Q194 - Medium
qs.append(make_lom_q(
    num=194,
    question="A block of mass $m = 5\\text{ kg}$ rests on a horizontal floor. A downward force of $30\\text{ N}$ is applied vertically on top of the block. What is the normal reaction force exerted by the floor on the block? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "79 N",
        "B": "49 N",
        "C": "19 N",
        "D": "30 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="Downward forces add together to press against the floor: $N = mg + F_{\\text{down}}$.",
    given="$m = 5\\text{ kg}$, $g = 9.8\\text{ m/s}^2$, $F_{\\text{down}} = 30\\text{ N}$.",
    formula="N = mg + F_{\\text{down}}",
    steps="1. Weight of the block: $mg = 5 \\times 9.8 = 49\\text{ N}$.\n2. Downward applied force: $F = 30\\text{ N}$.\n3. Vertical equilibrium: $N - mg - F = 0 \\implies N = 49 + 30 = 79\\text{ N}$.",
    tip="Downward force INCREASES normal reaction: $N = mg + F = 49 + 30 = 79\\text{ N}$!",
    why_wrong="Option C ($19\\text{ N}$) would occur if the $30\\text{ N}$ force were directed UPWARD."
))

# Q195 - Medium
qs.append(make_lom_q(
    num=195,
    question="In the previous problem, if the $30\\text{ N}$ force is applied vertically UPWARD on the block of mass $5\\text{ kg}$, what is the new normal reaction force exerted by the floor?",
    options={
        "A": "19 N",
        "B": "79 N",
        "C": "49 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="Upward pulling force relieves weight pressing on the floor: $N = mg - F_{\\text{up}}$.",
    given="$m = 5\\text{ kg}$, $mg = 49\\text{ N}$, $F_{\\text{up}} = 30\\text{ N}$.",
    formula="N = mg - F_{\\text{up}}",
    steps="1. Weight: $mg = 49\\text{ N}$.\n2. Upward pull: $F_{\\text{up}} = 30\\text{ N}$.\n3. Since $F_{\\text{up}} < mg$, the block does not lift off the floor.\n4. Normal force: $N = 49 - 30 = 19\\text{ N}$.",
    tip="If $F_{\\text{up}} \\ge mg$, the block lifts off and $N = 0$. Here $30 < 49$, so $N = 19\\text{ N}$.",
    why_wrong="Option D would only occur if $F_{\\text{up}} \\ge 49\\text{ N}$."
))

# Q196 - Medium
qs.append(make_lom_q(
    num=196,
    question="A block of mass $m = 2\\text{ kg}$ is kept in equilibrium against a rough vertical wall by applying a horizontal force $F = 50\\text{ N}$. What is the normal reaction force exerted by the wall on the block?",
    options={
        "A": "50 N",
        "B": "19.6 N",
        "C": "69.6 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="The normal reaction is perpendicular to the vertical wall, which means it acts horizontally. Horizontal equilibrium requires $N = F$.",
    given="$F = 50\\text{ N}$ horizontal, vertical wall.",
    formula="\\sum F_x = F - N = 0 \\implies N = F = 50\\text{ N}",
    steps="1. The wall is vertical, so its normal force is horizontal.\n2. The only applied horizontal force is $F = 50\\text{ N}$.\n3. Horizontal equilibrium: $N = F = 50\\text{ N}$.\n4. The weight $mg = 19.6\\text{ N}$ acts vertically and is balanced by vertical static friction, not the normal force.",
    tip="Normal force is ALWAYS perpendicular to the contact surface! For a vertical wall, $N = F_{\\text{horizontal}}$, NOT $mg$!",
    why_wrong="Option B ($19.6\\text{ N}$) is the weight $mg$, which acts vertically."
))

# Q197 - Medium
qs.append(make_lom_q(
    num=197,
    question="A sphere of mass $M$ rests in a V-shaped symmetrical trough formed by two smooth planes, each making an angle of $45^\\circ$ with the horizontal. What is the normal reaction force exerted by each inclined plane on the sphere?",
    options={
        "A": "\\frac{M g}{\\sqrt{2}}",
        "B": "M g",
        "C": "\\sqrt{2} M g",
        "D": "\\frac{M g}{2}"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="By symmetry, both planes exert equal normal forces $N$. The normal forces act perpendicular to each $45^\\circ$ plane, so each makes an angle of $45^\\circ$ with the vertical. The sum of their vertical components balances the sphere's weight: $2 N\\cos 45^\\circ = Mg$.",
    given="Symmetric trough with planes at $45^\\circ$ to horizontal, sphere mass $M$.",
    formula="2 N\\cos 45^\\circ = M g \\implies 2 N \\left(\\frac{1}{\\sqrt{2}}\\right) = M g \\implies \\sqrt{2} N = M g",
    steps="1. Each incline has slope $45^\\circ$, so the normal force is tilted at $45^\\circ$ to the vertical.\n2. Horizontal components cancel by symmetry ($N\\sin 45^\\circ = N\\sin 45^\\circ$).\n3. Vertical components add up: $N\\cos 45^\\circ + N\\cos 45^\\circ = 2 N\\cos 45^\\circ$.\n4. Equate to weight: $2 N \\left(\\frac{1}{\\sqrt{2}}\\right) = Mg \\implies \\sqrt{2} N = Mg$.\n5. Solve for $N$: $N = \\frac{Mg}{\\sqrt{2}}$.",
    tip="Symmetrical V-trough: $2N\\cos\\theta = Mg \\implies N = \\frac{Mg}{2\\cos\\theta}$! For $45^\\circ$, $N = Mg/\\sqrt{2}$.",
    why_wrong="Option C ($Mg\\sqrt{2}$) inverts the division."
))

# Q198 - Medium
qs.append(make_lom_q(
    num=198,
    question="A block of mass $m = 6\\text{ kg}$ is on an inclined plane of inclination $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0.6, \\cos 37^\\circ = 0.8$). The normal reaction force exerted by the plane on the block is: (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "48 N",
        "B": "36 N",
        "C": "60 N",
        "D": "24 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="Normal reaction on an incline is $N = mg\\cos\\theta$.",
    given="$m = 6\\text{ kg}$, $g = 10\\text{ m/s}^2$, $\\theta = 37^\\circ$, $\\cos 37^\\circ = 0.8$.",
    formula="N = mg\\cos 37^\\circ",
    steps="1. Total weight: $mg = 6 \\times 10 = 60\\text{ N}$.\n2. Normal force: $N = mg\\cos 37^\\circ = 60 \\times 0.8 = 48\\text{ N}$.",
    tip="37°-53° triangle is ubiquitous in NEET! $\\sin 37^\\circ = 0.6, \\cos 37^\\circ = 0.8$. $\\sin 53^\\circ = 0.8, \\cos 53^\\circ = 0.6$!",
    why_wrong="Option B ($36\\text{ N}$) is the parallel downhill component $mg\\sin 37^\\circ = 60 \\times 0.6 = 36\\text{ N}$."
))

# Q199 - Medium
qs.append(make_lom_q(
    num=199,
    question="In the previous problem on the $37^\\circ$ incline ($m = 6\\text{ kg}, g = 10\\text{ m/s}^2$), what is the downhill gravitational force pulling the block down the incline?",
    options={
        "A": "36 N",
        "B": "48 N",
        "C": "60 N",
        "D": "30 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="Downhill gravity component along the plane is $F_\\parallel = mg\\sin\\theta$.",
    given="$m = 6\\text{ kg}$, $g = 10\\text{ m/s}^2$, $\\sin 37^\\circ = 0.6$.",
    formula="F_\\parallel = mg\\sin 37^\\circ",
    steps="1. $F_\\parallel = 6 \\times 10 \\times 0.6 = 36\\text{ N}$.",
    tip="Notice $F_\\parallel^2 + N^2 = 36^2 + 48^2 = 1296 + 2304 = 3600 = 60^2 = (mg)^2$! The components always reconstruct the full weight.",
    why_wrong="Option B ($48\\text{ N}$) is the normal reaction force."
))

# Q200 - Medium
qs.append(make_lom_q(
    num=200,
    question="A body of mass $m$ is placed on an elevator floor. The elevator is moving upward with a CONSTANT VELOCITY $v$. What is the normal force exerted by the floor on the body?",
    options={
        "A": "mg",
        "B": "m(g + v)",
        "C": "m(g - v)",
        "D": "mg + \\frac{1}{2}mv^2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="Constant velocity means acceleration is strictly zero ($a = 0$). By Newton's second law, $N - mg = ma = m(0) = 0 \\implies N = mg$.",
    given="Elevator moving with constant velocity $v$, acceleration $a = 0$.",
    formula="N - mg = ma = 0 \\implies N = mg",
    steps="1. Acceleration is the time rate of change of velocity: $a = dv/dt = 0$.\n2. With $a = 0$, Newton's second law yields $N - mg = 0$.\n3. Therefore, $N = mg$ exactly.",
    tip="NEET Trap: Velocity does NOT change normal force or weight! Only ACCELERATION changes apparent weight.",
    why_wrong="Option B introduces velocity into a force equation, which is dimensionally incorrect."
))

# Q201 - Medium
qs.append(make_lom_q(
    num=201,
    question="A passenger of mass $m$ stands in an elevator that accelerates downward with acceleration $a = g/4$. What is the normal force exerted by the elevator floor on the passenger?",
    options={
        "A": "\\frac{3}{4}mg",
        "B": "\\frac{5}{4}mg",
        "C": "\\frac{1}{4}mg",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Normal reaction",
    concept="Downward acceleration reduces the floor's normal contact force: $N = m(g - a)$.",
    given="Downward acceleration $a = g/4$.",
    formula="N = m(g - a) = m\\left(g - \\frac{g}{4}\\right) = \\frac{3}{4}mg",
    steps="1. FBD on passenger: $N$ acts upward, $mg$ acts downward, accelerating downward with $a$.\n2. $mg - N = ma \\implies N = m(g - a)$.\n3. Substitute $a = g/4$: $N = m(g - g/4) = \\frac{3}{4}mg$.",
    tip="Downward acceleration $\\implies N = m(g - a) = \\frac{3}{4}mg$!",
    why_wrong="Option B ($\\frac{5}{4}mg$) would be for upward acceleration $a = g/4$."
))

# Q202 - Hard
qs.append(make_lom_q(
    num=202,
    question="A cylinder of mass $m$ and radius $R$ is placed in a corner between a vertical wall and a horizontal floor. A horizontal force $F$ is applied to the center of the cylinder pushing it toward the vertical wall. If the floor is smooth and the vertical wall is smooth, what are the normal reactions from the floor ($N_f$) and the wall ($N_w$)?",
    options={
        "A": "N_f = mg and N_w = F",
        "B": "N_f = F and N_w = mg",
        "C": "N_f = \\sqrt{F^2 + (mg)^2} and N_w = F",
        "D": "N_f = mg - F and N_w = F"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Normal reaction",
    concept="Orthogonal axes are independent: Vertical equilibrium gives $N_f = mg$. Horizontal equilibrium gives $N_w = F$.",
    given="Horizontal force $F$ pushing into vertical wall; floor supports weight.",
    formula="\\sum F_y = N_f - mg = 0 \\implies N_f = mg;\\quad \\sum F_x = F - N_w = 0 \\implies N_w = F",
    steps="1. Along the vertical axis: The only forces are downward gravity $mg$ and upward normal force from the floor $N_f$. Hence $N_f = mg$.\n2. Along the horizontal axis: The applied force $F$ pushes right, and the wall's normal force $N_w$ pushes left. Hence $N_w = F$.\n3. Both forces operate completely independently.",
    tip="Vertical contact balances vertical forces ($N_f = mg$); Horizontal contact balances horizontal forces ($N_w = F$)!",
    why_wrong="Option B swaps the wall and floor normal reactions."
))

# Q203 - Hard
qs.append(make_lom_q(
    num=203,
    question="A solid sphere of mass $M$ and radius $R$ rests between two smooth planes inclined at angles $\\theta_1$ and $\\theta_2$ to the horizontal. The normal reactions from the two planes are $N_1$ and $N_2$ respectively. The ratio $N_1 / N_2$ is:",
    options={
        "A": "\\frac{\\sin\\theta_2}{\\sin\\theta_1}",
        "B": "\\frac{\\cos\\theta_2}{\\cos\\theta_1}",
        "C": "\\frac{\\sin\\theta_1}{\\sin\\theta_2}",
        "D": "\\frac{\\tan\\theta_1}{\\tan\\theta_2}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Normal reaction",
    concept="Lami's theorem or horizontal force balance: The normal to plane 1 makes an angle $\\theta_1$ with the vertical (or $90^\\circ - \\theta_1$ with horizontal). Horizontal components must balance: $N_1\\sin\\theta_1 = N_2\\sin\\theta_2 \\implies \\frac{N_1}{N_2} = \\frac{\\sin\\theta_2}{\\sin\\theta_1}$.",
    given="Two inclines at $\\theta_1$ and $\\theta_2$ to the horizontal.",
    formula="N_1\\sin\\theta_1 = N_2\\sin\\theta_2 \\implies \\frac{N_1}{N_2} = \\frac{\\sin\\theta_2}{\\sin\\theta_1}",
    steps="1. Normal force $N_1$ is perpendicular to plane 1 (angle $\\theta_1$ with vertical).\n2. Its horizontal component is $N_1\\sin\\theta_1$.\n3. Normal force $N_2$ is perpendicular to plane 2 (angle $\\theta_2$ with vertical).\n4. Its horizontal component is $N_2\\sin\\theta_2$.\n5. Horizontal equilibrium requires: $N_1\\sin\\theta_1 = N_2\\sin\\theta_2$.\n6. Therefore, $\\frac{N_1}{N_2} = \\frac{\\sin\\theta_2}{\\sin\\theta_1}$.",
    tip="Horizontal balance immediately yields $N_1\\sin\\theta_1 = N_2\\sin\\theta_2 \\implies N_1/N_2 = \\sin\\theta_2 / \\sin\\theta_1$!",
    why_wrong="Option C inverts the ratio."
))

# Q204 - Hard
qs.append(make_lom_q(
    num=204,
    question="A car moves over the crest of a convex spherical bridge of radius of curvature $R$ with speed $v$. What is the normal force exerted by the bridge on the car of mass $m$ at the highest point of the bridge?",
    options={
        "A": "m\\left(g - \\frac{v^2}{R}\\right)",
        "B": "m\\left(g + \\frac{v^2}{R}\\right)",
        "C": "m g",
        "D": "m \\frac{v^2}{R}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Normal reaction",
    concept="At the convex crest, the circular path is concave downward, so the center of curvature is below the bridge. The downward centripetal acceleration is $a_c = v^2/R$. Newton's second law vertically: $mg - N = m\\frac{v^2}{R} \\implies N = m\\left(g - \\frac{v^2}{R}\\right)$.",
    given="Convex bridge of radius $R$, speed $v$, mass $m$.",
    formula="mg - N = m\\frac{v^2}{R} \\implies N = m\\left(g - \\frac{v^2}{R}\\right)",
    steps="1. At the highest point, forces acting are downward gravity $mg$ and upward normal force $N$.\n2. The net downward force provides the required centripetal acceleration toward the center: $F_{\\text{net}} = mg - N$.\n3. Set equal to mass $\\times$ centripetal acceleration: $mg - N = m \\frac{v^2}{R}$.\n4. Solve for $N$: $N = m\\left(g - \\frac{v^2}{R}\\right)$.\n5. If $v = \\sqrt{gR}$, $N = 0$, and the car becomes airborne!",
    tip="Convex bridge crest: $N = m(g - v^2/R)$ (feels lighter). Concave bridge valley: $N = m(g + v^2/R)$ (feels heavier)!",
    why_wrong="Option B is for the bottom of a concave dip/valley, not the crest of a convex bridge."
))

print("Topic 13 done: 15 questions.")
