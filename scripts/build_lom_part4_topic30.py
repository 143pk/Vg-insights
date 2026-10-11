import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 30: Mixed-concept NEET-level problems (Q470 to Q500: 8 Easy, 15 Medium, 8 Hard)
# ==============================================================================

# Q470: Easy
qs.append(make_lom_q(
    num=470,
    question="A body of mass $m$ is suspended by two identical spring balances arranged in series from a rigid ceiling. The reading of each spring balance is:",
    options={
        "A": "$mg$",
        "B": "$\\frac{mg}{2}$",
        "C": "$2mg$",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="In a series combination of light spring balances, the tension throughout the line is identical. The lower spring balance experiences tension $T = mg$, and transmits that exact same tension $T = mg$ to the upper spring balance. Therefore, BOTH spring balances read $mg$.",
    given="Two spring balances in series supporting mass $m$.",
    formula="Series: $T_1 = T_2 = mg$.",
    steps="1. Consider the lower spring balance: It directly supports the mass $m$, so the tension in it is $T_1 = mg$. Its pointer reads $mg$.\n2. The lower spring balance is light (negligible mass) and pulls on the bottom hook of the upper spring balance with tension $T_1 = mg$.\n3. Therefore, the tension in the upper spring balance is also $T_2 = mg$.\n4. Hence, both balances display a reading of $mg$.",
    tip="Series Spring Balances: Each reads $mg$! Parallel Spring Balances: Each reads $mg/2$. Classic NEET distinction.",
    why_wrong="Option B ($mg/2$) is for parallel spring balances. Option C would require extra masses. Option D is absurd."
))

# Q471: Easy
qs.append(make_lom_q(
    num=471,
    question="If the two identical spring balances in the previous question are connected in PARALLEL to support the mass $m$ symmetrically, the reading of each balance is:",
    options={
        "A": "$\\frac{mg}{2}$",
        "B": "$mg$",
        "C": "$2mg$",
        "D": "$\\frac{mg}{4}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="In a symmetric parallel arrangement, the two spring balances share the downward load equally: $T_1 + T_2 = mg$. By symmetry, $T_1 = T_2 = \\frac{mg}{2}$.",
    given="Two identical spring balances in parallel supporting mass $m$.",
    formula="$2T = mg \\implies T = \\frac{mg}{2}$.",
    steps="1. Both balances hang side by side from the ceiling, sharing the load.\n2. By symmetry, each balance carries half the total downward weight.\n3. $T_1 = T_2 = \\frac{mg}{2}$.\n4. Therefore, each spring balance reads $\\frac{mg}{2}$.",
    tip="Parallel springs divide the load: $T = mg/n$ where $n$ is the number of parallel supports!",
    why_wrong="Option B is for series connection. Option C is double. Option D is one-quarter."
))

# Q472: Easy
qs.append(make_lom_q(
    num=472,
    question="A heavy uniform rope of mass $m$ and length $L$ lies on a smooth table with a fraction $1/4$ of its length hanging over the edge. If the rope is released from rest, the initial acceleration of the rope is:",
    options={
        "A": "$\\frac{g}{4}$",
        "B": "$\\frac{g}{2}$",
        "C": "$g$",
        "D": "$\\frac{g}{8}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="The hanging portion has mass $m_1 = m/4$, and its weight $m_1 g = \\frac{mg}{4}$ is the sole driving force. The total mass being accelerated is the entire rope of mass $m$. Acceleration is $a = \\frac{F_{\\text{driving}}}{M_{\\text{total}}} = \\frac{mg/4}{m} = \\frac{g}{4}$.",
    given="Rope mass $m$, length $L$, fraction hanging $1/4$, smooth table.",
    formula="$a = \\frac{m_{\\text{hanging}} g}{m_{\\text{total}}} = \\frac{m/4}{m} g = \\frac{g}{4}$.",
    steps="1. Mass of the hanging segment: $m_{\\text{hang}} = \\frac{1}{4}m$.\n2. The table is smooth, so the segment on the table experiences zero friction.\n3. The sole unbalanced external force on the rope system is the weight of the hanging segment: $F = m_{\\text{hang}} g = \\frac{1}{4}mg$.\n4. By Newton's second law, this force accelerates the ENTIRE rope of mass $m$.\n5. Therefore: $a = \\frac{F}{m} = \\frac{\\frac{1}{4}mg}{m} = \\frac{g}{4}$.",
    tip="Hanging Rope on Smooth Table: Initial acceleration is ALWAYS $a = \\eta g$ where $\\eta$ is the fraction hanging!",
    why_wrong="Option B is $g/2$. Option C is free fall. Option D is $g/8$."
))

# Q473: Easy
qs.append(make_lom_q(
    num=473,
    question="A spring balance is attached to the ceiling of a lift. A man hangs his bag on the balance and notices that it reads $49\\text{ N}$ when the lift is stationary. What will the balance read if the lift moves downwards with a CONSTANT VELOCITY of $5\\text{ m/s}$?",
    options={
        "A": "49 N",
        "B": "Zero",
        "C": "24.5 N",
        "D": "98 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="A frame moving with constant velocity has ZERO acceleration ($a = 0$). It is an inertial frame! Apparent weight differs from real weight only when there is non-zero acceleration ($a \\ne 0$). Therefore, the reading remains $49\\text{ N}$.",
    given="Stationary reading $49\\text{ N}$, constant downward velocity $v = 5\\text{ m/s}$ ($a = 0$).",
    formula="$W_{\\text{app}} = m(g - a) = m(g - 0) = mg = 49\\text{ N}$.",
    steps="1. The lift is moving downwards with a constant velocity.\n2. Constant velocity means acceleration is zero: $a = \\frac{dv}{dt} = 0$.\n3. The apparent weight in an elevator is $W_{\\text{app}} = m(g \\pm a)$.\n4. Since $a = 0$, $W_{\\text{app}} = mg = 49\\text{ N}$.\n5. The balance reading is completely unaffected by velocity.",
    tip="NEET Trap: VELOCITY does not change the reading of a balance; only ACCELERATION does!",
    why_wrong="Option B (zero) occurs during free fall ($a = g$). Option C and D assume acceleration."
))

# Q474: Easy
qs.append(make_lom_q(
    num=474,
    question="When a horse pulls a cart, the force that makes the horse-cart system move forward is exerted by:",
    options={
        "A": "The ground on the horse's hooves",
        "B": "The horse on the cart",
        "C": "The cart on the horse",
        "D": "The horse on the ground"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="By Newton's third law, the horse pushes backward against the ground with its hooves. The ground exerts an equal and opposite forward reaction force on the horse's hooves. This external ground reaction accelerates the horse and cart forward.",
    given="Horse pulling a cart on the ground.",
    formula="External force $F_{\\text{ext}} = F_{\\text{ground on horse}} - f_{\\text{cart friction}} = (M_{\\text{horse}} + M_{\\text{cart}}) a$.",
    steps="1. The forces between the horse and the cart (tension in harnesses) are internal forces of the system; internal forces cancel out in pairs and cannot accelerate the center of mass.\n2. The horse pushes backwards against the ground with its hooves.\n3. By Newton's third law, the ground pushes forwards on the horse's hooves with an equal and opposite force.\n4. This forward force exerted by the ground is the external force that accelerates the whole system forward.",
    tip="Classic NCERT Question: The horse pushes the ground backward; the GROUND pushes the horse forward!",
    why_wrong="Option B and C are internal forces between horse and cart. Option D is a force acting ON the ground, not on the horse."
))

# Q475: Easy
qs.append(make_lom_q(
    num=475,
    question="A bullet of mass $0.02\\text{ kg}$ is fired from a rifle of mass $4\\text{ kg}$ with a muzzle velocity of $400\\text{ m/s}$. The recoil velocity of the rifle is:",
    options={
        "A": "$-2\\text{ m/s}$ (in backward direction)",
        "B": "$+2\\text{ m/s}$",
        "C": "$-4\\text{ m/s}$",
        "D": "$-0.2\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="Conservation of linear momentum: $m_{\\text{bullet}} v_{\\text{bullet}} + M_{\\text{rifle}} V_{\\text{recoil}} = 0 \\implies V_{\\text{recoil}} = -\\frac{m v}{M} = -\\frac{0.02 \\times 400}{4} = -2\\text{ m/s}$.",
    given="$m = 0.02\\text{ kg}, M = 4\\text{ kg}, v = 400\\text{ m/s}$.",
    formula="$V = -\\frac{m v}{M}$.",
    steps="1. Total initial momentum before firing is zero.\n2. Since no external horizontal force acts during firing, momentum is conserved:\n   $p_i = p_f \\implies 0 = m v + M V$.\n3. Solving for recoil velocity: $V = -\\frac{mv}{M}$.\n4. Substitute values:\n   $V = -\\frac{0.02 \\times 400}{4} = -\\frac{8}{4} = -2\\text{ m/s}$.",
    tip="Recoil Velocity Formula: $V = -\\frac{mv}{M}$. The negative sign indicates backward motion.",
    why_wrong="Option B misses the direction. Option C is $-4\\text{ m/s}$. Option D is $-0.2\\text{ m/s}$."
))

# Q476: Easy
qs.append(make_lom_q(
    num=476,
    question="A body of mass $2\\text{ kg}$ is acted upon by two forces $\\vec{F}_1 = 6\\hat{i}\\text{ N}$ and $\\vec{F}_2 = 8\\hat{j}\\text{ N}$. What is the magnitude of the acceleration of the body?",
    options={
        "A": "$5\\text{ m/s}^2$",
        "B": "$10\\text{ m/s}^2$",
        "C": "$7\\text{ m/s}^2$",
        "D": "$2.5\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="The resultant force is $\\vec{F} = 6\\hat{i} + 8\\hat{j}\\text{ N}$. Magnitude is $|\\vec{F}| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ N}$. Acceleration is $a = F / m = 10 / 2 = 5\\text{ m/s}^2$.",
    given="$\\vec{F}_1 = 6\\hat{i}\\text{ N}, \\vec{F}_2 = 8\\hat{j}\\text{ N}, m = 2\\text{ kg}$.",
    formula="$|\\vec{F}| = \\sqrt{F_x^2 + F_y^2} = 10\\text{ N}$; $a = \\frac{|\\vec{F}|}{m} = \\frac{10}{2} = 5\\text{ m/s}^2$.",
    steps="1. Net force vector: $\\vec{F}_{\\text{net}} = 6\\hat{i} + 8\\hat{j}\\text{ N}$.\n2. Magnitude of net force: $|\\vec{F}_{\\text{net}}| = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10\\text{ N}$.\n3. Mass of the body: $m = 2\\text{ kg}$.\n4. Acceleration: $a = \\frac{F}{m} = \\frac{10\\text{ N}}{2\\text{ kg}} = 5\\text{ m/s}^2$.",
    tip="Pythagorean 6-8-10 triangle! Resultant force is 10 N, divide by 2 kg gives 5 m/s^2.",
    why_wrong="Option B (10 m/s^2) is the net force, not acceleration. Option C adds scalar components $(6+8)/2$. Option D is $5/2$."
))

# Q477: Easy
qs.append(make_lom_q(
    num=477,
    question="Which of the following physical quantities is conserved for an isolated system experiencing non-conservative internal forces (such as friction or inelastic collision deformation)?",
    options={
        "A": "Total linear momentum",
        "B": "Total mechanical energy",
        "C": "Total kinetic energy",
        "D": "Total potential energy"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Mixed-concept NEET-level problems",
    concept="Linear momentum depends solely on net external force ($\sum \vec{F}_{\text{ext}} = \frac{d\vec{P}}{dt}$). In an isolated system ($\sum \vec{F}_{\text{ext}} = 0$), total linear momentum is ALWAYS strictly conserved, regardless of whether internal forces are conservative, non-conservative, frictional, or explosive.",
    given="Isolated system with non-conservative internal interactions.",
    formula="$\\sum \\vec{F}_{\\text{ext}} = 0 \\implies \\vec{P} = \\text{constant}$.",
    steps="1. Newton's second law for a system of particles states that $\\frac{d\\vec{P}}{dt} = \\sum \\vec{F}_{\\text{ext}}$.\n2. For an isolated system, external forces are zero ($\\sum \\vec{F}_{\\text{ext}} = 0$).\n3. Internal forces cancel out in action-reaction pairs by Newton's third law.\n4. Therefore, total linear momentum is conserved unconditionally.\n5. In contrast, mechanical and kinetic energy are converted into heat by friction/inelasticity.",
    tip="Golden NEET Rule: Momentum is conserved in ALL collisions (elastic or inelastic) as long as the system is isolated!",
    why_wrong="Option B and C are dissipated as heat by non-conservative forces. Option D is not conserved alone."
))

# Q478: Medium
qs.append(make_lom_q(
    num=478,
    question="A disc of mass $10\\text{ g}$ is kept floating horizontally in mid-air by firing marbles of mass $5\\text{ g}$ vertically upward at it. The marbles strike the disc from below at $10\\text{ m/s}$ and rebound downward with the same speed. How many marbles must strike the disc per second to keep it floating (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "1 marble/second",
        "B": "2 marbles/second",
        "C": "10 marbles/second",
        "D": "0.5 marbles/second"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Upward thrust force exerted by $n$ marbles per second is $F = n \\Delta p = n (2 m_{\\text{marble}} v)$. This force must balance the weight of the disc: $F = M_{\\text{disc}} g \\implies n (2 m v) = M g \\implies n = \\frac{M g}{2 m v}$.",
    given="$M = 10\\text{ g} = 0.01\\text{ kg}, m = 5\\text{ g} = 0.005\\text{ kg}, v = 10\\text{ m/s}, g = 10\\text{ m/s}^2$.",
    formula="$n = \\frac{M g}{2 m v}$.",
    steps="1. Weight of the disc: $W = M g = 0.01\\text{ kg} \\times 10\\text{ m/s}^2 = 0.1\\text{ N}$.\n2. Change in momentum per marble on elastic rebound:\n   $\\Delta p = m v - (-m v) = 2 m v = 2 \\times 0.005\\text{ kg} \\times 10\\text{ m/s} = 0.1\\text{ kg}\\cdot\\text{m/s}$.\n3. Upward force exerted by $n$ marbles hitting per second: $F = n \\Delta p = n \\times 0.1\\text{ N}$.\n4. For the disc to float in equilibrium: $F = W \\implies n \\times 0.1 = 0.1$.\n5. Solving for $n$: $n = 1\\text{ marble/second}$.",
    tip="Hovering Disc Formula: $n = \\frac{M g}{2 m v}$ for elastic rebound, and $\\frac{M g}{m v}$ if marbles stick!",
    why_wrong="Option B (2) forgets the factor of 2 from elastic rebound (assumes marbles stick). Option C is $10$. Option D is $0.5$."
))

# Q479: Medium
qs.append(make_lom_q(
    num=479,
    question="A rocket of initial mass $M_0 = 600\\text{ kg}$ is fired vertically. Gases are ejected downward at a constant relative speed $u = 1000\\text{ m/s}$. What must be the rate of consumption of fuel $\\frac{dm}{dt}$ to give the rocket an initial upward acceleration of $20\\text{ m/s}^2$ (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "18 kg/s",
        "B": "6 kg/s",
        "C": "12 kg/s",
        "D": "30 kg/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Upward thrust force is $F_{\\text{thrust}} = u \\left(-\\frac{dm}{dt}\\right)$. Net upward force is $F_{\\text{thrust}} - M_0 g = M_0 a \\implies u \\left(-\\frac{dm}{dt}\\right) = M_0 (g + a) \\implies -\\frac{dm}{dt} = \\frac{M_0(g + a)}{u}$.",
    given="$M_0 = 600\\text{ kg}, u = 1000\\text{ m/s}, a = 20\\text{ m/s}^2, g = 10\\text{ m/s}^2$.",
    formula="$-\\frac{dm}{dt} = \\frac{M_0(g + a)}{u}$.",
    steps="1. Total upward force required on the rocket: $F_{\\text{thrust}} = M_0 (g + a)$.\n2. Substitute values: $F_{\\text{thrust}} = 600 \\times (10 + 20) = 600 \\times 30 = 18000\\text{ N}$.\n3. Thrust is generated by fuel ejection: $F_{\\text{thrust}} = u \\left(-\\frac{dm}{dt}\\right)$.\n4. $18000 = 1000 \\times \\left(-\\frac{dm}{dt}\\right)$.\n5. Fuel consumption rate: $-\\frac{dm}{dt} = \\frac{18000}{1000} = 18\\text{ kg/s}$.",
    tip="Rocket Thrust Formula: $F = u \\frac{dm}{dt} = M(g + a)$. Remember to add $g$ to the desired acceleration $a$!",
    why_wrong="Option B (6 kg/s) only provides thrust to overcome gravity ($a = 0$). Option C (12 kg/s) is $M a / u$ without gravity. Option D is $30\\text{ kg/s}$."
))

# Q480: Medium
qs.append(make_lom_q(
    num=480,
    question="A helicopter of mass $2000\\text{ kg}$ accelerates vertically upwards at $2\\text{ m/s}^2$. The crew and passengers inside weigh $500\\text{ kg}$. Taking $g = 10\\text{ m/s}^2$, what is the vertical force exerted by the air on the helicopter rotors?",
    options={
        "A": "30,000 N",
        "B": "25,000 N",
        "C": "24,000 N",
        "D": "5,000 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Total mass of the helicopter plus crew is $M = 2000 + 500 = 2500\\text{ kg}$. Net upward acceleration is $a = 2\\text{ m/s}^2$. By Newton's second law, $F_{\\text{air}} - M g = M a \\implies F_{\\text{air}} = M(g + a) = 2500 \\times (10 + 2) = 30000\\text{ N}$.",
    given="$M_{\\text{heli}} = 2000\\text{ kg}, M_{\\text{crew}} = 500\\text{ kg}, a = 2\\text{ m/s}^2, g = 10\\text{ m/s}^2$.",
    formula="$F_{\\text{air}} = (M_{\\text{heli}} + M_{\\text{crew}})(g + a)$.",
    steps="1. Total mass of the system: $M = 2000 + 500 = 2500\\text{ kg}$.\n2. Downward weight of the system: $W = Mg = 2500 \\times 10 = 25000\\text{ N}$.\n3. Net upward accelerating force required: $F_{\\text{net}} = Ma = 2500 \\times 2 = 5000\\text{ N}$.\n4. Upward force exerted by the air on the rotors:\n   $F_{\\text{air}} = W + F_{\\text{net}} = 25000 + 5000 = 30000\\text{ N}$.",
    tip="Rotor force supports the ENTIRE system weight plus acceleration: $F = M_{\\text{total}}(g + a)$!",
    why_wrong="Option B (25,000 N) is only the hovering force ($a = 0$). Option C is for helicopter alone. Option D is just $M a$."
))

# Q481: Medium
qs.append(make_lom_q(
    num=481,
    question="In the previous helicopter problem, what is the force exerted by the crew and passengers on the floor of the helicopter?",
    options={
        "A": "6,000 N",
        "B": "5,000 N",
        "C": "4,000 N",
        "D": "1,000 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="For the crew and passengers of mass $m = 500\\text{ kg}$, the normal reaction from the floor accelerates them upward: $N - mg = ma \\implies N = m(g + a) = 500(10 + 2) = 6000\\text{ N}$. By Newton's third law, the force exerted by them on the floor is $6000\\text{ N}$.",
    given="$m = 500\\text{ kg}, a = 2\\text{ m/s}^2, g = 10\\text{ m/s}^2$.",
    formula="$N = m(g + a) = 500(12) = 6000\\text{ N}$.",
    steps="1. Isolate the crew and passengers of mass $m = 500\\text{ kg}$.\n2. Forces acting on them: upward normal reaction $N$ from the floor, downward gravity $mg = 5000\\text{ N}$.\n3. They accelerate upward with $a = 2\\text{ m/s}^2$.\n4. Applying Newton's second law: $N - mg = ma$.\n5. $N = m(g + a) = 500 \\times (10 + 2) = 6000\\text{ N}$.\n6. By Newton's third law, the force exerted by the crew on the floor has the same magnitude: $6000\\text{ N}$.",
    tip="Apparent weight in an upward accelerating lift/helicopter: $N = m(g + a)$!",
    why_wrong="Option B (5,000 N) is their static weight ($mg$). Option C (4,000 N) subtracts acceleration. Option D is $m a$."
))

# Q482: Medium
qs.append(make_lom_q(
    num=482,
    question="A ball of mass $0.2\\text{ kg}$ is thrown against a vertical wall with an angle of incidence of $60^\\circ$ to the normal at a speed of $10\\text{ m/s}$. It rebounds elastically at the same angle and speed. What is the magnitude of the impulse imparted by the wall to the ball?",
    options={
        "A": "$2\\text{ N}\\cdot\\text{s}$",
        "B": "$4\\text{ N}\\cdot\\text{s}$",
        "C": "$2\\sqrt{3}\\text{ N}\\cdot\\text{s}$",
        "D": "$1\\text{ N}\\cdot\\text{s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Choose the x-axis perpendicular to the wall. The velocity component perpendicular to the wall changes from $+v\\cos 60^\\circ$ to $-v\\cos 60^\\circ$. The parallel velocity component $v\\sin 60^\\circ$ is unchanged. The impulse is along the normal: $J = \\Delta p_x = m(v\\cos 60^\\circ - (-v\\cos 60^\\circ)) = 2mv\\cos 60^\\circ = 2(0.2)(10)(0.5) = 2\\text{ N}\\cdot\\text{s}$.",
    given="$m = 0.2\\text{ kg}, v = 10\\text{ m/s}, \\theta = 60^\\circ$ to normal.",
    formula="$J = 2mv\\cos\\theta = 2(0.2)(10)\\cos 60^\\circ = 2\\text{ N}\\cdot\\text{s}$.",
    steps="1. Incident normal component of momentum: $p_{xi} = -mv\\cos 60^\\circ$ (into the wall).\n2. Rebound normal component of momentum: $p_{xf} = +mv\\cos 60^\\circ$ (away from the wall).\n3. Change in normal momentum: $\\Delta p = p_{xf} - p_{xi} = 2mv\\cos 60^\\circ$.\n4. Parallel momentum component does not change (smooth wall), so $\\Delta p_y = 0$.\n5. Magnitude of impulse: $J = 2mv\\cos 60^\\circ = 2(0.2)(10)(0.5) = 2\\text{ N}\\cdot\\text{s}$.",
    tip="Impulse at an angle $\\theta$ to the normal: $J = 2mv\\cos\\theta$. If angle is given with the wall surface, use $2mv\\sin\\alpha$!",
    why_wrong="Option B (4 N s) is $2mv$ without the cosine factor. Option C ($2\\sqrt{3}$) uses $\\sin 60^\\circ$. Option D is $1\\text{ N}\\cdot\\text{s}$."
))

# Q483: Medium
qs.append(make_lom_q(
    num=483,
    question="A body of mass $m$ is suspended by a string of length $L$. It is given a horizontal velocity $u$ at the lowest point. If the string becomes slack (tension $T = 0$) at an angle $\\theta$ with the upward vertical, the speed $v$ at that point satisfies:",
    options={
        "A": "$v^2 = gL \\cos\\theta$",
        "B": "$v^2 = gL \\sin\\theta$",
        "C": "$v^2 = 2gL \\cos\\theta$",
        "D": "$v^2 = gL$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="At angle $\\theta$ with the upward vertical, the component of gravity directed towards the center is $mg\\cos\\theta$. The radial force equation is $T + mg\\cos\\theta = \\frac{mv^2}{L}$. When the string slacks, tension vanishes ($T = 0$). This leaves $mg\\cos\\theta = \\frac{mv^2}{L} \\implies v^2 = gL\\cos\\theta$.",
    given="String slacks ($T = 0$) at angle $\\theta$ to upward vertical.",
    formula="$T + mg\\cos\\theta = \\frac{mv^2}{L} \\implies v^2 = gL\\cos\\theta$ when $T = 0$.",
    steps="1. Let $\\theta$ be the angle of the string with the UPWARD vertical (in the upper half of the circle).\n2. Tension $T$ points toward the center of the circle.\n3. The component of gravity pointing towards the center is $mg\\cos\\theta$.\n4. Radial equation of motion: $T + mg\\cos\\theta = \\frac{mv^2}{L}$.\n5. Condition for slacking: $T = 0$.\n6. Setting $T = 0$: $mg\\cos\\theta = \\frac{mv^2}{L} \\implies v^2 = gL\\cos\\theta$.",
    tip="String Slacking Condition: $v^2 = gL\\cos\\theta$ where $\\theta$ is measured with the UPWARD vertical!",
    why_wrong="Option B uses sine. Option C has an extra factor of 2. Option D is only true at the very top ($\\theta = 0$)."
))

# Q484: Medium
qs.append(make_lom_q(
    num=484,
    question="A particle of mass $m$ is moving in a horizontal circle on the smooth inner surface of a hemispherical bowl of radius $R$ at a depth $h$ below the rim. The speed of the particle is:",
    options={
        "A": "$\\sqrt{g \\frac{(R^2 - h^2)}{h}}$",
        "B": "$\\sqrt{g h}$",
        "C": "$\\sqrt{g R}$",
        "D": "$\\sqrt{g \\frac{h^2}{R}}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Let $r$ be the radius of the horizontal circle: $r = \\sqrt{R^2 - h^2}$. The normal reaction $N$ makes angle $\\theta$ with the vertical, where $\\cos\\theta = h/R$ and $\\sin\\theta = r/R$. Vertical equilibrium: $N\\cos\\theta = mg \\implies N = \\frac{mgR}{h}$. Horizontal centripetal force: $N\\sin\\theta = \\frac{mv^2}{r} \\implies \\left(\\frac{mgR}{h}\\right)\\left(\\frac{r}{R}\\right) = \\frac{mv^2}{r} \\implies v^2 = \\frac{gr^2}{h} = \\frac{g(R^2 - h^2)}{h}$.",
    given="Hemispherical bowl radius $R$, depth below rim $h$.",
    formula="$r = \\sqrt{R^2 - h^2}$; $v = \\sqrt{\\frac{g r^2}{h}} = \\sqrt{g \\frac{R^2 - h^2}{h}}$.",
    steps="1. From the center of the sphere, vertical distance down is $h$, so radius of the horizontal circle is $r = \\sqrt{R^2 - h^2}$.\n2. The normal force $N$ points towards the sphere center at angle $\\theta$ to the vertical.\n3. $\\cos\\theta = \\frac{h}{R}$ and $\\sin\\theta = \\frac{r}{R}$.\n4. Vertical balance: $N\\cos\\theta = mg \\implies N\\left(\\frac{h}{R}\\right) = mg \\implies N = \\frac{mgR}{h}$.\n5. Radial centripetal force: $N\\sin\\theta = \\frac{mv^2}{r} \\implies \\left(\\frac{mgR}{h}\\right)\\left(\\frac{r}{R}\\right) = \\frac{mv^2}{r}$.\n6. $\\frac{mgr}{h} = \\frac{mv^2}{r} \\implies v^2 = \\frac{gr^2}{h} = \\frac{g(R^2 - h^2)}{h}$.\n7. Therefore, $v = \\sqrt{g \\frac{R^2 - h^2}{h}}$.",
    tip="Notice: When $h \\to R$ (bottom of bowl), $r \\to 0$ and $v \\to 0$. As $h \\to 0$ (rim), $v \\to \\infty$!",
    why_wrong="Option B, C, and D do not satisfy the geometry of a spherical bowl."
))

# Q485: Medium
qs.append(make_lom_q(
    num=485,
    question="Two blocks of masses $m_1 = 4\\text{ kg}$ and $m_2 = 6\\text{ kg}$ are connected by a light string passing over a frictionless pulley. Block $m_1$ is on a smooth inclined plane of angle $30^\\circ$, and $m_2$ hangs vertically. Taking $g = 10\\text{ m/s}^2$, what is the acceleration of the system?",
    options={
        "A": "$4\\text{ m/s}^2$",
        "B": "$2\\text{ m/s}^2$",
        "C": "$6\\text{ m/s}^2$",
        "D": "$1\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Down-plane gravity on $m_1$ is $m_1 g\\sin 30^\\circ = 4(10)(0.5) = 20\\text{ N}$. Downward gravity on hanging mass $m_2$ is $m_2 g = 6(10) = 60\\text{ N}$. Net driving force is $60 - 20 = 40\\text{ N}$. Total mass is $m_1 + m_2 = 10\\text{ kg}$. Acceleration is $a = 40 / 10 = 4\\text{ m/s}^2$.",
    given="$m_1 = 4\\text{ kg}, m_2 = 6\\text{ kg}, \\theta = 30^\\circ$, smooth plane, $g = 10\\text{ m/s}^2$.",
    formula="$a = \\frac{m_2 g - m_1 g\\sin 30^\\circ}{m_1 + m_2}$.",
    steps="1. FBD of hanging mass $m_2$: $m_2 g - T = m_2 a \\implies 60 - T = 6a$.\n2. FBD of block on incline $m_1$: $T - m_1 g\\sin 30^\\circ = m_1 a \\implies T - 20 = 4a$.\n3. Adding the two equations: $60 - 20 = (6 + 4) a \\implies 40 = 10 a$.\n4. Solving for acceleration: $a = \\frac{40}{10} = 4\\text{ m/s}^2$.",
    tip="Incline-Pulley Quick Formula: $a = \\frac{m_{\\text{hang}} - m_{\\text{inc}}\\sin\\theta}{m_{\\text{total}}} g$!",
    why_wrong="Option B ($2\\text{ m/s}^2$) is $(6-4)/10 \\times 10$. Option C is $6\\text{ m/s}^2$. Option D is $1\\text{ m/s}^2$."
))

# Q486: Medium
qs.append(make_lom_q(
    num=486,
    question="In the previous setup, what is the tension in the connecting string?",
    options={
        "A": "36 N",
        "B": "60 N",
        "C": "24 N",
        "D": "40 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Using the hanging mass equation: $T = m_2(g - a) = 6(10 - 4) = 6(6) = 36\\text{ N}$. Using the inclined mass: $T = m_1 a + m_1 g\\sin 30^\\circ = 4(4) + 20 = 16 + 20 = 36\\text{ N}$.",
    given="$m_2 = 6\\text{ kg}, a = 4\\text{ m/s}^2$.",
    formula="$T = m_2(g - a) = 6(6) = 36\\text{ N}$.",
    steps="1. Substitute $a = 4\\text{ m/s}^2$ into $T = m_2(g - a)$:\n   $T = 6\\text{ kg} \\times (10 - 4)\\text{ m/s}^2 = 6 \\times 6 = 36\\text{ N}$.\n2. Double check on $m_1$:\n   $T = m_1 g\\sin 30^\\circ + m_1 a = 20 + 4(4) = 36\\text{ N}$.\n3. Both yield exactly $36\\text{ N}$.",
    tip="Tension is identical along any ideal massless string!",
    why_wrong="Option B (60 N) is $m_2 g$. Option C (24 N) is $m_2 a$. Option D (40 N) is the net force."
))

# Q487: Medium
qs.append(make_lom_q(
    num=487,
    question="A body of mass $m$ is suspended by a string of length $L$. It is displaced through an angle of $60^\\circ$ from the vertical and released from rest. What is the tension in the string when the body passes through its lowest point?",
    options={
        "A": "$2 mg$",
        "B": "$3 mg$",
        "C": "$mg$",
        "D": "$1.5 mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Vertical drop is $h = L(1 - \\cos 60^\\circ) = L(1 - 0.5) = 0.5 L$. By energy conservation, speed at lowest point is $v^2 = 2gh = 2g(0.5L) = gL$. At the lowest point, tension must provide both weight support and centripetal acceleration: $T - mg = \\frac{mv^2}{L} \\implies T = mg + \\frac{m(gL)}{L} = mg + mg = 2mg$.",
    given="Released from $\\theta_0 = 60^\\circ$, passes lowest point.",
    formula="$v^2 = 2gL(1 - \\cos\\theta_0)$; $T = mg\\left(3 - 2\\cos\\theta_0\\right)$.",
    steps="1. Height drop from $\\theta_0 = 60^\\circ$: $h = L(1 - \\cos 60^\\circ) = L\\left(1 - \\frac{1}{2}\\right) = \\frac{L}{2}$.\n2. Kinetic energy at lowest point: $\\frac{1}{2}mv^2 = mgh = mg\\frac{L}{2} \\implies v^2 = gL$.\n3. Radial equation at lowest point:\n   $T - mg = \\frac{mv^2}{L} = \\frac{m(gL)}{L} = mg$.\n4. Therefore: $T = mg + mg = 2mg$.",
    tip="General Pendulum Tension at Lowest Point: $T = mg(3 - 2\\cos\\theta_0)$. For $\\theta_0 = 60^\\circ$, $T = mg(3 - 2(0.5)) = 2mg$. For $\\theta_0 = 90^\\circ$, $T = 3mg$!",
    why_wrong="Option B ($3mg$) is for release from horizontal ($\\theta_0 = 90^\\circ$). Option C is for zero speed. Option D is $1.5mg$."
))

# Q488: Medium
qs.append(make_lom_q(
    num=488,
    question="A body of mass $m$ is released from rest at angle $\\theta_0 = 90^\\circ$ (horizontal position) with a string of length $L$. What is the tension in the string at the lowest point?",
    options={
        "A": "$3 mg$",
        "B": "$2 mg$",
        "C": "$mg$",
        "D": "$5 mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Apply $T = mg(3 - 2\\cos\\theta_0)$. With $\\theta_0 = 90^\\circ$, $\\cos 90^\\circ = 0$, giving $T = mg(3 - 0) = 3mg$.",
    given="Released from $\\theta_0 = 90^\\circ$.",
    formula="$v^2 = 2gL$; $T = mg + \\frac{mv^2}{L} = mg + 2mg = 3mg$.",
    steps="1. Height drop from horizontal is $h = L$.\n2. Speed at lowest point: $v^2 = 2gh = 2gL$.\n3. Centripetal force at lowest point: $F_c = \\frac{mv^2}{L} = \\frac{m(2gL)}{L} = 2mg$.\n4. String tension must support weight and provide centripetal force:\n   $T = mg + F_c = mg + 2mg = 3mg$.",
    tip="Universal Result: Released from horizontal $\\implies$ Tension at bottom is ALWAYS $3mg$!",
    why_wrong="Option B is for $\\theta_0 = 60^\\circ$. Option C is static weight. Option D is for completing a full vertical loop."
))

# Q489: Medium
qs.append(make_lom_q(
    num=489,
    question="A ball of mass $m$ is suspended by a string of length $L$. It is given a speed $u = \\sqrt{2gL}$ at the lowest point. What is the maximum angle $\\theta_{\\text{max}}$ that the string makes with the downward vertical?",
    options={
        "A": "$90^\\circ$",
        "B": "$60^\\circ$",
        "C": "$45^\\circ$",
        "D": "$180^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="By energy conservation, the maximum height reached is $h = \\frac{u^2}{2g} = \\frac{2gL}{2g} = L$. Since $h = L(1 - \\cos\\theta)$, $L = L(1 - \\cos\\theta) \\implies 1 - \\cos\\theta = 1 \\implies \\cos\\theta = 0 \\implies \\theta = 90^\\circ$ (horizontal position).",
    given="$u = \\sqrt{2gL}$.",
    formula="$h = \\frac{u^2}{2g} = L$; $L(1 - \\cos\\theta) = L \\implies \\theta = 90^\\circ$.",
    steps="1. When the ball reaches maximum height, its speed is momentarily zero ($v = 0$).\n2. By conservation of energy: $\\frac{1}{2}mu^2 = mgh \\implies h = \\frac{u^2}{2g}$.\n3. Substitute $u = \\sqrt{2gL}$:\n   $h = \\frac{2gL}{2g} = L$.\n4. The vertical rise is $h = L(1 - \\cos\\theta)$.\n5. $L = L(1 - \\cos\\theta) \\implies 1 - \\cos\\theta = 1 \\implies \\cos\\theta = 0$.\n6. Therefore, $\\theta = 90^\\circ$, meaning the string reaches the horizontal position.",
    tip="If $u \\le \\sqrt{2gL}$, the pendulum simply oscillates with $\\theta_{\\text{max}} \\le 90^\\circ$ without any danger of slacking!",
    why_wrong="Option B ($60^\\circ$) is for $u = \\sqrt{gL}$. Option C is for $u = \\sqrt{gL(2 - \\sqrt{2})}$. Option D is the top of the circle."
))

# Q490: Medium
qs.append(make_lom_q(
    num=490,
    question="A uniform rope of mass $M$ and length $L$ hangs vertically from a ceiling. If a transverse pulse is created at the bottom of the rope, the time taken for the pulse to reach the ceiling is:",
    options={
        "A": "$2 \\sqrt{\\frac{L}{g}}$",
        "B": "$\\sqrt{\\frac{L}{g}}$",
        "C": "$2\\pi \\sqrt{\\frac{L}{g}}$",
        "D": "$\\sqrt{\\frac{2L}{g}}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Tension at height $y$ from the bottom free end is $T(y) = \\mu g y$, where $\\mu = M/L$. The wave speed at height $y$ is $v(y) = \\sqrt{\\frac{T(y)}{\\mu}} = \\sqrt{gy}$. Time taken is $t = \\int_0^L \\frac{dy}{v(y)} = \\int_0^L \\frac{dy}{\\sqrt{gy}} = \\frac{1}{\\sqrt{g}} [2\\sqrt{y}]_0^L = 2\\sqrt{\\frac{L}{g}}$.",
    given="Uniform rope mass $M$, length $L$, hanging vertically.",
    formula="$v = \\sqrt{gy}$; $t = \\int_0^L \\frac{dy}{\\sqrt{gy}} = 2\\sqrt{\\frac{L}{g}}$.",
    steps="1. Tension at distance $y$ from the bottom: $T = \\left(\\frac{M}{L}y\\right)g$.\n2. Mass per unit length: $\\mu = \\frac{M}{L}$.\n3. Wave speed on a string: $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{(M/L)gy}{M/L}} = \\sqrt{gy}$.\n4. Velocity is $v = \\frac{dy}{dt} \\implies dt = \\frac{dy}{\\sqrt{gy}}$.\n5. Integrating from bottom ($y = 0$) to top ($y = L$):\n   $t = \\frac{1}{\\sqrt{g}} \\int_0^L y^{-1/2} dy = \\frac{1}{\\sqrt{g}} [2\\sqrt{y}]_0^L = 2\\sqrt{\\frac{L}{g}}$.",
    tip="Master NEET Formula: Time for a pulse to climb a hanging rope is $t = 2\\sqrt{\\frac{L}{g}}$! Independent of rope mass $M$.",
    why_wrong="Option B misses the factor of 2. Option C is the pendulum period. Option D is $\\sqrt{2L/g}$."
))

# Q491: Medium
qs.append(make_lom_q(
    num=491,
    question="In the hanging rope problem above, the acceleration of the climbing transverse wave pulse is:",
    options={
        "A": "$\\frac{g}{2}$",
        "B": "$g$",
        "C": "$2g$",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Wave velocity is $v = \\sqrt{gy}$. Acceleration is $a = v \\frac{dv}{dy} = \\sqrt{gy} \\left(\\frac{1}{2\\sqrt{gy}} \\cdot g\\right) = \\frac{g}{2} = \\text{constant}$.",
    given="$v = \\sqrt{gy}$.",
    formula="$a = v \\frac{dv}{dy} = \\frac{g}{2}$.",
    steps="1. Velocity of pulse: $v = \\sqrt{gy} = g^{1/2} y^{1/2}$.\n2. Differentiate with respect to $y$:\n   $\\frac{dv}{dy} = \\frac{1}{2} g^{1/2} y^{-1/2} = \\frac{g}{2\\sqrt{gy}}$.\n3. Acceleration of the pulse: $a = v \\frac{dv}{dy} = \\sqrt{gy} \\times \\frac{g}{2\\sqrt{gy}} = \\frac{g}{2}$.\n4. Since $a = g/2$ is constant, we can also verify time using $L = \\frac{1}{2}at^2 = \\frac{1}{2}(g/2)t^2 \\implies t = \\sqrt{\\frac{4L}{g}} = 2\\sqrt{\\frac{L}{g}}$!",
    tip="The wave climbs with CONSTANT acceleration $a = \\frac{g}{2}$! Beautiful physics symmetry.",
    why_wrong="Option B ($g$) is gravitational acceleration. Option C is $2g$. Option D assumes constant speed."
))

# Q492: Medium
qs.append(make_lom_q(
    num=492,
    question="A bead of mass $m$ is threaded on a smooth horizontal wire. A spring of natural length $L_0$ and stiffness $k$ has one end attached to the bead and the other fixed to a point at distance $d$ perpendicular to the wire. What is the acceleration of the bead when it is at distance $x$ from the perpendicular projection?",
    options={
        "A": "$-\\frac{k x}{m} \\left(1 - \\frac{L_0}{\\sqrt{x^2 + d^2}}\\right)$",
        "B": "$-\\frac{k x}{m}$",
        "C": "$-\\frac{k}{m}\\sqrt{x^2 + d^2}$",
        "D": "$-\\frac{k d}{m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Mixed-concept NEET-level problems",
    concept="Instantaneous length of the spring is $L = \\sqrt{x^2 + d^2}$. Elongation is $\\Delta L = L - L_0 = \\sqrt{x^2 + d^2} - L_0$. Spring force is $F_s = k \\Delta L$. The component along the wire is $F_x = -F_s \\cos\\theta = -F_s \\frac{x}{L} = -k \\left(L - L_0\\right) \\frac{x}{L} = -kx \\left(1 - \\frac{L_0}{L}\\right) = -kx\\left(1 - \\frac{L_0}{\\sqrt{x^2 + d^2}}\\right)$. Acceleration is $a = F_x / m$.",
    given="Spring on bead along wire, $L_0, k, d$, position $x$.",
    formula="$F_x = -k x \\left(1 - \\frac{L_0}{\\sqrt{x^2 + d^2}}\\right)$; $a = \\frac{F_x}{m}$.",
    steps="1. By geometry, distance from fixed peg to bead is $L = \\sqrt{x^2 + d^2}$.\n2. Extension of spring: $\\Delta L = \\sqrt{x^2 + d^2} - L_0$.\n3. Spring tension magnitude: $F_s = k \\Delta L = k(\\sqrt{x^2 + d^2} - L_0)$.\n4. Angle $\\theta$ between spring and wire: $\\cos\\theta = \\frac{x}{\\sqrt{x^2 + d^2}}$.\n5. Restoring force along the wire: $F_x = -F_s \\cos\\theta = -k(\\sqrt{x^2 + d^2} - L_0) \\frac{x}{\\sqrt{x^2 + d^2}} = -kx \\left(1 - \\frac{L_0}{\\sqrt{x^2 + d^2}}\\right)$.\n6. Acceleration is $a = \\frac{F_x}{m} = -\\frac{kx}{m}\\left(1 - \\frac{L_0}{\\sqrt{x^2 + d^2}}\\right)$.",
    tip="Notice that for small displacements $x \\ll d$, if $L_0 = d$, $a \\approx -\\frac{kx^3}{2md^2}$, an anharmonic cubic restoring force!",
    why_wrong="Option B assumes linear Hooke's law along the line. Option C and D omit trigonometry."
))

# Q493: Hard
qs.append(make_lom_q(
    num=493,
    question="A system consists of three blocks $m_1 = 1\\text{ kg}, m_2 = 2\\text{ kg}, m_3 = 3\\text{ kg}$ connected by strings and suspended from a spring of stiffness $k$. If the string connecting $m_2$ and $m_3$ is suddenly cut, what is the acceleration of block $m_1$ immediately after the cut (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$10\\text{ m/s}^2$ upwards",
        "B": "$5\\text{ m/s}^2$ upwards",
        "C": "$15\\text{ m/s}^2$ upwards",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="Before cutting, spring force supports all three masses: $F_s = (m_1 + m_2 + m_3)g = (1 + 2 + 3)(10) = 60\\text{ N}$. Immediately after the bottom string is cut, $m_3$ drops away, but the string connecting $m_1$ and $m_2$ remains intact! Blocks $m_1$ and $m_2$ remain rigidly connected and accelerate together. The net upward force on the $(m_1 + m_2)$ system is $F_s - (m_1 + m_2)g = 60 - 30 = 30\\text{ N}$. Acceleration is $a = \\frac{30}{m_1 + m_2} = \\frac{30}{3} = 10\\text{ m/s}^2$ upwards.",
    given="$m_1 = 1\\text{ kg}, m_2 = 2\\text{ kg}, m_3 = 3\\text{ kg}$, string between 2 and 3 cut, $g = 10\\text{ m/s}^2$.",
    formula="$F_s = (m_1 + m_2 + m_3)g = 60\\text{ N}$; $a = \\frac{F_s - (m_1 + m_2)g}{m_1 + m_2} = \\frac{30}{3} = 10\\text{ m/s}^2$.",
    steps="1. Equilibrium before cut: Spring force $F_s = (1 + 2 + 3)g = 60\\text{ N}$.\n2. Immediately after string between $m_2$ and $m_3$ is cut:\n   - Mass $m_3$ is detached.\n   - Spring force $F_s = 60\\text{ N}$ remains unchanged instantaneously.\n   - The string between $m_1$ and $m_2$ remains taut, so $m_1$ and $m_2$ accelerate together as a single combined mass $M = m_1 + m_2 = 3\\text{ kg}$.\n3. Total downward gravity on the remaining $(m_1 + m_2)$ system: $W = (1 + 2)g = 30\\text{ N}$.\n4. Net upward accelerating force: $F_{\\text{net}} = F_s - W = 60 - 30 = 30\\text{ N}$.\n5. Upward acceleration of both $m_1$ and $m_2$: $a = \\frac{F_{\\text{net}}}{M} = \\frac{30\\text{ N}}{3\\text{ kg}} = 10\\text{ m/s}^2$ upwards.",
    tip="Crucial Distinction: If the string between $m_1$ and $m_2$ is still intact, they accelerate TOGETHER as $(m_1 + m_2)$! Do not treat $m_1$ in isolation.",
    why_wrong="Option B ($5\\text{ m/s}^2$) divides by wrong mass. Option C ($15\\text{ m/s}^2$) is $30/2$. Option D is zero."
))

# Q494: Hard
qs.append(make_lom_q(
    num=494,
    question="In the previous setup, what is the tension in the string connecting block $m_1$ and block $m_2$ immediately after the string connecting $m_2$ and $m_3$ is cut?",
    options={
        "A": "40 N",
        "B": "20 N",
        "C": "30 N",
        "D": "60 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="For block $m_2$: It accelerates upward at $a = 10\\text{ m/s}^2$. Upward tension $T$ must support its weight and provide its upward acceleration: $T - m_2 g = m_2 a \\implies T = m_2(g + a) = 2(10 + 10) = 40\\text{ N}$.",
    given="$m_2 = 2\\text{ kg}, a = 10\\text{ m/s}^2$ upwards, $g = 10\\text{ m/s}^2$.",
    formula="$T = m_2(g + a) = 2(20) = 40\\text{ N}$.",
    steps="1. FBD of block $m_2$ immediately after the cut:\n   - Upward tension $T$ from the string connecting to $m_1$.\n   - Downward gravity $m_2 g = 20\\text{ N}$.\n   - Block $m_2$ accelerates upwards at $a = 10\\text{ m/s}^2$.\n2. Newton's second law on $m_2$:\n   $T - m_2 g = m_2 a$.\n3. $T = m_2(g + a) = 2\\text{ kg} \\times (10 + 10)\\text{ m/s}^2 = 40\\text{ N}$.\n4. Check on block $m_1$: $F_s - T - m_1 g = m_1 a \\implies 60 - 40 - 10 = 10 = 1(10)$. Perfectly consistent!",
    tip="Always double check tension using both blocks: $F_s - T - m_1 g = m_1 a$ and $T - m_2 g = m_2 a$!",
    why_wrong="Option B (20 N) is the static weight of $m_2$. Option C (30 N) is $F_{\\text{net}}$. Option D is $F_s$."
))

# Q495: Hard
qs.append(make_lom_q(
    num=495,
    question="A massive chain of mass $M$ and length $L$ is held vertically with its bottom end just touching a table. The chain is released from rest. What is the total force exerted by the chain on the table at an instant when a length $y$ has fallen onto the table?",
    options={
        "A": "$\\frac{3 M g y}{L}$",
        "B": "$\\frac{M g y}{L}$",
        "C": "$\\frac{2 M g y}{L}$",
        "D": "$\\frac{4 M g y}{L}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="Total force on the table is the sum of two parts: (1) The static weight of the chain already resting on the table: $W = \\frac{Mgy}{L}$; and (2) The dynamic impact thrust force of the chain links coming to an abrupt stop: $F_{\\text{thrust}} = v \\frac{dm}{dt} = v (\\lambda v) = \\lambda v^2 = \\left(\\frac{M}{L}\\right)(2gy) = \\frac{2Mgy}{L}$. Total force is $F_{\\text{table}} = W + F_{\\text{thrust}} = \\frac{Mgy}{L} + \\frac{2Mgy}{L} = \\frac{3Mgy}{L}$.",
    given="Falling chain of mass $M$, length $L$, length $y$ fallen.",
    formula="$F_{\\text{total}} = \\lambda g y + \\lambda v^2 = \\lambda g y + \\lambda (2gy) = 3 \\lambda g y = \\frac{3 M g y}{L}$.",
    steps="1. Static weight contribution: The length of chain lying on the table is $y$. Its mass is $m(y) = \\frac{M}{L}y$. The weight pressing on the table is $W = m(y)g = \\frac{Mgy}{L}$.\n2. Dynamic thrust contribution: Chain links are in free fall, so their speed upon hitting the table is $v = \\sqrt{2gy}$.\n3. The rate at which mass arrives at the table is $\\frac{dm}{dt} = \\lambda \\frac{dy}{dt} = \\lambda v = \\frac{M}{L}v$.\n4. The rate of change of momentum (impact thrust) is $F_{\\text{impulse}} = v \\frac{dm}{dt} = \\lambda v^2 = \\left(\\frac{M}{L}\\right)(2gy) = \\frac{2Mgy}{L}$.\n5. Total force registered on the table:\n   $F_{\\text{total}} = W + F_{\\text{impulse}} = \\frac{Mgy}{L} + \\frac{2Mgy}{L} = \\frac{3Mgy}{L}$.",
    tip="Famous NEET Benchmark: Total force on the scale is THREE TIMES the weight of the fallen portion: $F = 3 \\times W_{\\text{fallen}}$! When the last link hits ($y = L$), the scale momentarily reads $3Mg$.",
    why_wrong="Option B ($\\frac{Mgy}{L}$) only includes static weight, forgetting the dynamic impact thrust. Option C only includes the impact thrust. Option D is $4Mgy/L$."
))

# Q496: Hard
qs.append(make_lom_q(
    num=496,
    question="A ball of mass $m$ is suspended by a light inextensible string from the ceiling. A horizontal force $F$ is applied to the ball to slowly pull it until the string makes an angle $\\theta$ with the vertical. The work done by the force $F$ during this slow process is:",
    options={
        "A": "$mgL (1 - \\cos\\theta)$",
        "B": "$F L \\sin\\theta$",
        "C": "$mgL \\sin\\theta$",
        "D": "$mgL \\cos\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="Because the ball is pulled SLOWLY (quasi-statically), kinetic energy remains zero ($\\Delta K = 0$). By the work-energy theorem: $W_F + W_g + W_T = 0$. Since string tension is perpendicular to displacement ($W_T = 0$), $W_F = -W_g = \\Delta U = mgL(1 - \\cos\\theta)$.",
    given="Ball pulled slowly to angle $\\theta$, string length $L$.",
    formula="$W_F = \\Delta U = mgL(1 - \\cos\\theta)$.",
    steps="1. 'Slowly' means the speed of the ball is infinitesimally small at all times, so $\\Delta K = 0$.\n2. By the Work-Energy Theorem: $W_{\\text{net}} = W_F + W_{\\text{gravity}} + W_{\\text{tension}} = \\Delta K = 0$.\n3. The tension $T$ is always perpendicular to the circular arc of displacement, so $W_{\\text{tension}} = 0$.\n4. Therefore: $W_F = -W_{\\text{gravity}} = mg \\Delta y$.\n5. The vertical height gained by the ball is $\\Delta y = L(1 - \\cos\\theta)$.\n6. Hence, $W_F = mgL(1 - \\cos\\theta)$.",
    tip="Quasi-static work done by external force equals the change in potential energy: $W_{\\text{slow}} = mgL(1 - \\cos\\theta)$!",
    why_wrong="Option B assumes constant force $F$, but $F$ varies as $mg\\tan\\theta$. Option C uses sine. Option D uses cosine."
))

# Q497: Hard
qs.append(make_lom_q(
    num=497,
    question="In contrast to the previous question, if a CONSTANT horizontal force $F = mg$ acts on the ball from rest, what is the maximum angle $\\theta_{\\text{max}}$ through which the string deflects?",
    options={
        "A": "$90^\\circ$",
        "B": "$45^\\circ$",
        "C": "$60^\\circ$",
        "D": "$30^\\circ$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="For a constant horizontal force $F = mg$, the work done by $F$ is $W_F = F x = mg(L\\sin\\theta)$. The work done by gravity is $W_g = -mg L(1 - \\cos\\theta)$. At the maximum deflection, the ball momentarily comes to rest, so $\\Delta K = 0 \\implies W_F + W_g = 0 \\implies mgL\\sin\\theta = mgL(1 - \\cos\\theta) \\implies \\sin\\theta + \\cos\\theta = 1$. Squaring gives $1 + 2\\sin\\theta\\cos\\theta = 1 \\implies \\sin 2\\theta = 0 \\implies 2\\theta = 180^\\circ \\implies \\theta = 90^\\circ$.",
    given="Constant force $F = mg$, starts from rest.",
    formula="$\\sin\\theta + \\cos\\theta = 1 \\implies \\theta_{\\text{max}} = 90^\\circ$.",
    steps="1. Work done by constant horizontal force: $W_F = F \\Delta x = (mg)(L\\sin\\theta)$.\n2. Work done by gravity: $W_g = -mg \\Delta y = -mgL(1 - \\cos\\theta)$.\n3. At maximum angle, speed is zero: $\\Delta K = 0$.\n4. $W_F + W_g = 0 \\implies mgL\\sin\\theta - mgL(1 - \\cos\\theta) = 0$.\n5. Dividing by $mgL$: $\\sin\\theta - 1 + \\cos\\theta = 0 \\implies \\sin\\theta + \\cos\\theta = 1$.\n6. The non-trivial solution for $\\theta > 0$ is $\\theta = 90^\\circ$ (since $\\sin 90^\\circ + \\cos 90^\\circ = 1 + 0 = 1$).",
    tip="Crucial Contrast: Equilibrium position is $\\tan\\theta = F/mg = 1 \\implies \\theta_{\\text{eq}} = 45^\\circ$. Maximum oscillation angle is DOUBLE the equilibrium angle: $\\theta_{\\text{max}} = 2 \\times 45^\\circ = 90^\\circ$!",
    why_wrong="Option B ($45^\\circ$) is the equilibrium angle, NOT the maximum angle of swing! (Mass overshoots equilibrium). Option C and D are incorrect."
))

# Q498: Hard
qs.append(make_lom_q(
    num=498,
    question="A wedge of mass $M$ with angle $\\alpha$ rests on a smooth horizontal table. A block of mass $m$ slides down the smooth inclined face of the wedge. What is the horizontal acceleration of the wedge?",
    options={
        "A": "$\\frac{m g \\sin\\alpha \\cos\\alpha}{M + m \\sin^2\\alpha}$",
        "B": "$\\frac{m g \\sin\\alpha}{M + m}$",
        "C": "$\\frac{m g \\cos\\alpha}{M + m \\sin^2\\alpha}$",
        "D": "$g \\tan\\alpha$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="Let $A$ be the horizontal acceleration of the wedge to the left. The normal reaction $N$ between wedge and block pushes the wedge with horizontal component $N\\sin\\alpha$: $N\\sin\\alpha = M A$. In the wedge frame, the block has relative acceleration $a_r$ down the incline. Perpendicular to the incline: $N = m(g\\cos\\alpha - A\\sin\\alpha)$. Substituting $N$ yields $m(g\\cos\\alpha - A\\sin\\alpha)\\sin\\alpha = M A \\implies A(M + m\\sin^2\\alpha) = mg\\sin\\alpha\\cos\\alpha \\implies A = \\frac{mg\\sin\\alpha\\cos\\alpha}{M + m\\sin^2\\alpha}$.",
    given="Wedge mass $M$, block mass $m$, smooth surfaces, incline $\\alpha$.",
    formula="$A = \\frac{m g \\sin\\alpha \\cos\\alpha}{M + m \\sin^2\\alpha}$.",
    steps="1. FBD of the wedge: The block exerts a normal contact force $N$ perpendicular to the incline.\n2. The horizontal component of $N$ pushing the wedge to the left is $N\\sin\\alpha$.\n3. Newton's second law on the wedge: $N\\sin\\alpha = MA$.\n4. In the accelerated frame of the wedge, the block experiences pseudo force $mA$ directed to the right.\n5. The component of the pseudo force away from the incline is $mA\\sin\\alpha$.\n6. Equilibrium perpendicular to the incline: $N + mA\\sin\\alpha = mg\\cos\\alpha \\implies N = m(g\\cos\\alpha - A\\sin\\alpha)$.\n7. Substitute $N$ into the wedge equation:\n   $m(g\\cos\\alpha - A\\sin\\alpha)\\sin\\alpha = MA$.\n8. $mg\\sin\\alpha\\cos\\alpha - mA\\sin^2\\alpha = MA \\implies A(M + m\\sin^2\\alpha) = mg\\sin\\alpha\\cos\\alpha$.\n9. Solving for $A$: $A = \\frac{mg\\sin\\alpha\\cos\\alpha}{M + m\\sin^2\\alpha}$.",
    tip="Master JEE/NEET Formula: Acceleration of a free wedge is $A = \\frac{mg\\sin\\alpha\\cos\\alpha}{M + m\\sin^2\\alpha}$. If $M \\to \\infty$, $A \\to 0$.",
    why_wrong="Option B misses the $\\cos\\alpha$ and $\\sin^2\\alpha$ factors. Option C misses $\\sin\\alpha$. Option D is the holding acceleration."
))

# Q499: Hard
qs.append(make_lom_q(
    num=499,
    question="In the previous wedge-block problem, what is the acceleration of the block RELATIVE to the wedge ($a_r$)?",
    options={
        "A": "$\\frac{(M + m) g \\sin\\alpha}{M + m \\sin^2\\alpha}$",
        "B": "$g \\sin\\alpha$",
        "C": "$\\frac{M g \\sin\\alpha}{M + m \\sin^2\\alpha}$",
        "D": "$\\frac{m g \\sin\\alpha}{M + m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="In the frame of the wedge, the forces parallel to the incline are the gravity component $mg\\sin\\alpha$ and the pseudo force component $mA\\cos\\alpha$, both pointing down the incline: $mg\\sin\\alpha + mA\\cos\\alpha = m a_r \\implies a_r = g\\sin\\alpha + A\\cos\\alpha$. Substituting $A = \\frac{mg\\sin\\alpha\\cos\\alpha}{M + m\\sin^2\\alpha}$ yields $a_r = g\\sin\\alpha \\left(1 + \\frac{m\\cos^2\\alpha}{M + m\\sin^2\\alpha}\\right) = \\frac{(M + m)g\\sin\\alpha}{M + m\\sin^2\\alpha}$.",
    given="Relative acceleration down incline $a_r = g\\sin\\alpha + A\\cos\\alpha$.",
    formula="$a_r = \\frac{(M + m) g \\sin\\alpha}{M + m \\sin^2\\alpha}$.",
    steps="1. Parallel to the incline, the forces on the block in the wedge frame are:\n   - Downward gravity component: $mg\\sin\\alpha$.\n   - Downward component of horizontal pseudo force $mA$: $mA\\cos\\alpha$.\n2. Newton's second law along the incline: $mg\\sin\\alpha + mA\\cos\\alpha = m a_r \\implies a_r = g\\sin\\alpha + A\\cos\\alpha$.\n3. Substitute $A = \\frac{mg\\sin\\alpha\\cos\\alpha}{M + m\\sin^2\\alpha}$:\n   $a_r = g\\sin\\alpha + \\frac{mg\\sin\\alpha\\cos^2\\alpha}{M + m\\sin^2\\alpha} = g\\sin\\alpha \\left[\\frac{M + m\\sin^2\\alpha + m\\cos^2\\alpha}{M + m\\sin^2\\alpha}\\right]$.\n4. Since $\\sin^2\\alpha + \\cos^2\\alpha = 1$, the bracket simplifies to:\n   $\\frac{M + m}{M + m\\sin^2\\alpha}$.\n5. Therefore: $a_r = \\frac{(M + m) g \\sin\\alpha}{M + m \\sin^2\\alpha}$.",
    tip="Notice: When $M \\to \\infty$ (fixed wedge), $a_r = \\frac{M g\\sin\\alpha}{M} = g\\sin\\alpha$, exactly reproducing a fixed incline!",
    why_wrong="Option B ($g\\sin\\alpha$) is only valid for a fixed wedge ($M = \\infty$). Option C is missing $m$ in numerator. Option D has wrong denominator."
))

# Q500: Hard
qs.append(make_lom_q(
    num=500,
    question="A block of mass $m$ is placed on a smooth table and connected by a light spring of constant $k$ to a wall. An identical block of mass $m$ is placed on top of it. The coefficient of static friction between the two blocks is $\\mu_s$. What is the maximum amplitude of simple harmonic oscillation $A_{\\text{max}}$ such that the top block does not slip on the bottom block?",
    options={
        "A": "$\\frac{2 \\mu_s m g}{k}$",
        "B": "$\\frac{\\mu_s m g}{k}$",
        "C": "$\\frac{\\mu_s m g}{2k}$",
        "D": "$\\frac{4 \\mu_s m g}{k}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Mixed-concept NEET-level problems",
    concept="For the two-block system of total mass $2m$, the angular frequency of SHM is $\\omega = \\sqrt{\\frac{k}{2m}}$. The maximum acceleration during SHM occurs at the extreme positions: $a_{\\text{max}} = \\omega^2 A = \\frac{k}{2m} A$. For the top block of mass $m$, the maximum force accelerating it is static friction, which cannot exceed $f_{\\text{lim}} = \\mu_s mg$. Therefore, $m a_{\\text{max}} \\le \\mu_s mg \\implies a_{\\text{max}} \\le \\mu_s g$. Setting $\\frac{k}{2m} A \\le \\mu_s g$ yields $A_{\\text{max}} = \\frac{2 \\mu_s m g}{k}$.",
    given="Two blocks of mass $m$ each, spring constant $k$, static friction $\\mu_s$.",
    formula="$\\omega^2 = \\frac{k}{2m}$; $a_{\\text{max}} = \\omega^2 A \\le \\mu_s g \\implies A_{\\text{max}} = \\frac{2 \\mu_s m g}{k}$.",
    steps="1. Total oscillating mass of the combined two-block system is $M = m + m = 2m$.\n2. The angular frequency of oscillation is $\\omega = \\sqrt{\\frac{k}{2m}}$, so $\\omega^2 = \\frac{k}{2m}$.\n3. The maximum acceleration of the system occurs at the amplitude extremes: $a_{\\text{max}} = \\omega^2 A = \\frac{k}{2m} A$.\n4. The upper block of mass $m$ is accelerated purely by the static friction between the blocks: $f = m a$.\n5. The maximum static friction available to hold the top block is $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.\n6. To prevent slipping at the extreme displacement: $m a_{\\text{max}} \\le f_{\\text{lim}} \\implies m \\left(\\frac{k}{2m} A\\right) \\le \\mu_s mg$.\n7. Simplifying: $\\frac{k}{2} A \\le \\mu_s mg \\implies A \\le \\frac{2 \\mu_s mg}{k}$.\n8. Therefore, the maximum amplitude without slipping is $A_{\\text{max}} = \\frac{2 \\mu_s m g}{k}$.",
    tip="SHM + Friction Master Question: $A_{\\text{max}} = \\frac{\\mu_s g}{\\omega^2} = \\frac{\\mu_s g}{k/(2m)} = \\frac{2\\mu_s mg}{k}$! High yield NEET synthesis question.",
    why_wrong="Option B ($\\frac{\\mu_s mg}{k}$) uses single mass $m$ instead of $2m$. Option C divides by 2 instead of multiplying. Option D multiplies by 4."
))

print(f"Topic 30 done: {len(qs)} questions.")
