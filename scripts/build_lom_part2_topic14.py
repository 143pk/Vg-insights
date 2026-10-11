import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 14: Apparent weight (Q205 to Q219, 15 questions: 4 Easy, 7 Medium, 4 Hard)
# ==============================================================================

# Q205 - Easy
qs.append(make_lom_q(
    num=205,
    question="Apparent weight of a person standing on a weighing scale in a lift is defined as:",
    options={
        "A": "The normal reaction force exerted by the weighing scale on the person",
        "B": "The true gravitational pull of the Earth on the person",
        "C": "The mass of the person multiplied by velocity",
        "D": "The difference between mass and volume"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Apparent weight",
    concept="A weighing scale does not measure gravity directly; it measures the contact normal reaction force $N$ pushing upward on the feet of the person.",
    given="Definition of apparent weight.",
    formula="W_{\\text{apparent}} = N",
    steps="1. Earth's true gravitational pull $W_{\\text{true}} = mg$ remains constant near Earth's surface.\n2. A scale measures the compressive normal force $N$ pressing on its surface.\n3. By Newton's third law, the person presses on the scale with force $N$.\n4. Therefore, apparent weight is the normal reaction force $N$.",
    tip="Weighing scales read NORMAL FORCE, not gravitational pull! In an accelerating elevator, $N$ changes, so apparent weight changes.",
    why_wrong="Option B is the true gravitational weight, which does not depend on elevator acceleration."
))

# Q206 - Easy
qs.append(make_lom_q(
    num=206,
    question="If a lift cable snaps and the lift falls freely under gravity, the apparent weight of a person of mass $m$ inside the lift becomes:",
    options={
        "A": "Zero (complete weightlessness)",
        "B": "mg",
        "C": "2 mg",
        "D": "Infinite"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Apparent weight",
    concept="In free fall, the downward acceleration of the lift is $a = g$. The normal force is $N = m(g - a) = m(g - g) = 0$.",
    given="Free fall $a = g$ downwards.",
    formula="N = m(g - a) = m(g - g) = 0",
    steps="1. FBD on person: Downward gravity $mg$, upward normal force $N$, downward acceleration $a = g$.\n2. Newton's second law: $mg - N = ma = mg$.\n3. Solve for $N$: $N = mg - mg = 0$.\n4. The person exerts no force on the floor, experiencing weightlessness.",
    tip="Free fall $\\implies a = g \\implies N = 0$ (Weightlessness)! This is why astronauts in an orbiting spacecraft feel weightless: they are in continuous free fall around Earth.",
    why_wrong="Option B is the static weight, which only occurs when $a = 0$."
))

# Q207 - Easy
qs.append(make_lom_q(
    num=207,
    question="A person of mass $60\\text{ kg}$ stands on a spring balance inside a lift. The lift accelerates upward with acceleration $a = 2\\text{ m/s}^2$. Taking $g = 9.8\\text{ m/s}^2$, what is the reading on the spring balance?",
    options={
        "A": "708 N",
        "B": "588 N",
        "C": "468 N",
        "D": "120 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Apparent weight",
    concept="When accelerating upward, the floor must support weight and provide upward acceleration: $N = m(g + a)$.",
    given="$m = 60\\text{ kg}$, $a = 2\\text{ m/s}^2$ upwards, $g = 9.8\\text{ m/s}^2$.",
    formula="N = m(g + a)",
    steps="1. Calculate effective acceleration: $g + a = 9.8 + 2.0 = 11.8\\text{ m/s}^2$.\n2. Apparent weight: $N = 60 \\times 11.8 = 708\\text{ N}$.\n3. The balance reads $708\\text{ N}$.",
    tip="Upward acceleration $\\implies$ feels HEAVIER: $N = m(g + a)$!",
    why_wrong="Option B ($588\\text{ N}$) is the static weight $mg = 60 \\times 9.8$."
))

# Q208 - Easy
qs.append(make_lom_q(
    num=208,
    question="In the previous problem, if the lift accelerates DOWNWARD with acceleration $a = 2\\text{ m/s}^2$, what is the reading on the spring balance?",
    options={
        "A": "468 N",
        "B": "708 N",
        "C": "588 N",
        "D": "120 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Apparent weight",
    concept="When accelerating downward, the floor drops away, reducing contact normal reaction: $N = m(g - a)$.",
    given="$m = 60\\text{ kg}$, $a = 2\\text{ m/s}^2$ downwards, $g = 9.8\\text{ m/s}^2$.",
    formula="N = m(g - a)",
    steps="1. Effective acceleration: $g - a = 9.8 - 2.0 = 7.8\\text{ m/s}^2$.\n2. Apparent weight: $N = 60 \\times 7.8 = 468\\text{ N}$.",
    tip="Downward acceleration $\\implies$ feels LIGHTER: $N = m(g - a)$!",
    why_wrong="Option B ($708\\text{ N}$) is for upward acceleration."
))

# Q209 - Medium
qs.append(make_lom_q(
    num=209,
    question="A lift is moving upward while DECELERATING (slowing down) at a rate of $a = 3\\text{ m/s}^2$. What does a scale read for a passenger of mass $m = 70\\text{ kg}$? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "476 N",
        "B": "896 N",
        "C": "686 N",
        "D": "210 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Apparent weight",
    concept="Direction of ACCELERATION determines apparent weight, NOT velocity! Moving upward and slowing down means the acceleration vector points DOWNWARD: $\\vec{a} = -3\\hat{j}\\text{ m/s}^2$. Therefore, $N = m(g - a)$.",
    given="$m = 70\\text{ kg}$, moving up, slowing down $\\implies a = 3\\text{ m/s}^2$ downwards, $g = 9.8\\text{ m/s}^2$.",
    formula="N = m(g - a)",
    steps="1. Velocity is upward ($v > 0$), but the elevator is slowing down, so acceleration is directed downward ($a = 3\\text{ m/s}^2$ downward).\n2. Equation of motion: $mg - N = ma \\implies N = m(g - a)$.\n3. Substitute values: $N = 70(9.8 - 3) = 70(6.8) = 476\\text{ N}$.\n4. The scale reads $476\\text{ N}$.",
    tip="NEET Trap: Moving upward does NOT automatically mean heavier! If it is slowing down while moving up, acceleration is DOWNWARD, so $N = m(g - a)$ (lighter)!",
    why_wrong="Option B ($896\\text{ N}$) mistakenly uses $m(g+a)$ because of upward velocity."
))

# Q210 - Medium
qs.append(make_lom_q(
    num=210,
    question="A lift is moving downward while DECELERATING (braking to a stop) at $a = 2.5\\text{ m/s}^2$. The apparent weight of a person of mass $80\\text{ kg}$ is: (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "984 N",
        "B": "584 N",
        "C": "784 N",
        "D": "200 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Apparent weight",
    concept="Moving downward and slowing down means the acceleration vector points UPWARD: $N = m(g + a)$.",
    given="$m = 80\\text{ kg}$, moving down, slowing down $\\implies a = 2.5\\text{ m/s}^2$ upward, $g = 9.8\\text{ m/s}^2$.",
    formula="N = m(g + a)",
    steps="1. Moving downward while braking means the velocity is downward but acceleration is UPWARD.\n2. Upward acceleration increases apparent weight: $N = m(g + a)$.\n3. Calculate: $N = 80(9.8 + 2.5) = 80(12.3) = 984\\text{ N}$.",
    tip="Braking while moving down $\\implies$ upward acceleration $\\implies$ passenger feels heavier: $N = m(g + a)$!",
    why_wrong="Option B ($584\\text{ N}$) mistakenly uses $m(g - a)$."
))

# Q211 - Medium
qs.append(make_lom_q(
    num=211,
    question="A person stands on a weighing scale in a lift. The scale reads $1.2$ times their true weight. What is the acceleration of the lift? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "1.96 m/s^2 upward",
        "B": "1.96 m/s^2 downward",
        "C": "2.0 m/s^2 upward",
        "D": "0.2 m/s^2 downward"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Apparent weight",
    concept="Apparent weight $N = 1.2 mg$. Since $N > mg$, acceleration is upward: $N = m(g + a) = 1.2 mg \\implies g + a = 1.2 g \\implies a = 0.2 g$.",
    given="$N = 1.2 mg$, $g = 9.8\\text{ m/s}^2$.",
    formula="m(g + a) = 1.2 mg \\implies a = 0.2 g",
    steps="1. $g + a = 1.2 g \\implies a = 1.2 g - g = 0.2 g$.\n2. Substitute $g = 9.8\\text{ m/s}^2$: $a = 0.2 \\times 9.8 = 1.96\\text{ m/s}^2$.\n3. Since $N > mg$, the acceleration is directed upward.",
    tip="$N = k mg \\implies a = (k - 1)g$ upward! Here $k = 1.2 \\implies a = 0.2 g = 1.96\\text{ m/s}^2$.",
    why_wrong="Option B has the wrong acceleration direction."
))

# Q212 - Medium
qs.append(make_lom_q(
    num=212,
    question="A person stands on a weighing scale in a lift. The scale reads $0.75$ times their true weight. What is the acceleration of the lift? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "2.45 m/s^2 downward",
        "B": "2.45 m/s^2 upward",
        "C": "0.25 m/s^2 downward",
        "D": "7.35 m/s^2 upward"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Apparent weight",
    concept="Since $N < mg$, acceleration is downward: $N = m(g - a) = 0.75 mg \\implies a = 0.25 g$.",
    given="$N = 0.75 mg$, $g = 9.8\\text{ m/s}^2$.",
    formula="m(g - a) = 0.75 mg \\implies a = 0.25 g",
    steps="1. $g - a = 0.75 g \\implies a = g - 0.75 g = 0.25 g$.\n2. Substitute $g = 9.8\\text{ m/s}^2$: $a = 0.25 \\times 9.8 = 2.45\\text{ m/s}^2$.\n3. Since $N < mg$, acceleration is directed downward.",
    tip="Weight is $75\\% \\implies a = 25\\% g = g/4 = 2.45\\text{ m/s}^2$ downward!",
    why_wrong="Option B has the wrong direction."
))

# Q213 - Medium
qs.append(make_lom_q(
    num=213,
    question="A lift of mass $M = 500\\text{ kg}$ carrying a passenger of mass $m = 80\\text{ kg}$ accelerates upward at $a = 2\\text{ m/s}^2$. What is the tension $T$ in the supporting lift cable? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "6844 N",
        "B": "5880 N",
        "C": "944 N",
        "D": "4524 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Apparent weight",
    concept="The cable tension must accelerate the total combined mass of lift and passenger: $T = (M + m)(g + a)$.",
    given="$M = 500\\text{ kg}$, $m = 80\\text{ kg}$, $M_{\\text{total}} = 580\\text{ kg}$, $a = 2\\text{ m/s}^2$, $g = 9.8\\text{ m/s}^2$.",
    formula="T = (M + m)(g + a)",
    steps="1. Total mass: $M_{\\text{total}} = 500 + 80 = 580\\text{ kg}$.\n2. Effective acceleration: $g + a = 9.8 + 2.0 = 11.8\\text{ m/s}^2$.\n3. Tension in cable: $T = 580 \\times 11.8 = 6844\\text{ N}$.",
    tip="Cable tension accelerates the ENTIRE system: $T = (M + m)(g + a)$. The floor scale on the passenger reads only $m(g + a) = 80(11.8) = 944\\text{ N}$!",
    why_wrong="Option C ($944\\text{ N}$) is only the normal force on the passenger, not the cable tension."
))

# Q214 - Medium
qs.append(make_lom_q(
    num=214,
    question="A simple pendulum with time period $T_0$ is suspended inside a stationary elevator. If the elevator begins to accelerate UPWARD with acceleration $a$, the new time period of the pendulum $T'$ will:",
    options={
        "A": "Decrease, because effective gravity increases to (g + a)",
        "B": "Increase, because effective gravity decreases to (g - a)",
        "C": "Remain unchanged",
        "D": "Become zero"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Apparent weight",
    concept="The period of a simple pendulum is $T = 2\\pi\\sqrt{L / g_{\\text{eff}}}$. For upward acceleration, $g_{\\text{eff}} = g + a$. As $g_{\\text{eff}}$ increases, $T$ decreases.",
    given="Upward accelerating elevator, pendulum length $L$.",
    formula="T' = 2\\pi\\sqrt{\\frac{L}{g + a}} < T_0 = 2\\pi\\sqrt{\\frac{L}{g}}",
    steps="1. In the accelerating frame, effective gravity is $g_{\\text{eff}} = g + a$.\n2. The period is $T' = 2\\pi\\sqrt{L / g_{\\text{eff}}} = 2\\pi\\sqrt{L / (g+a)}$.\n3. Since the denominator increases, the time period decreases (the pendulum ticks faster).",
    tip="Upward acceleration $\\implies g_{\\text{eff}} = g + a \\implies T$ decreases! In free fall ($a = g$), $g_{\\text{eff}} = 0 \\implies T \\to \\infty$ (stops oscillating).",
    why_wrong="Option B occurs when the elevator accelerates downward."
))

# Q215 - Medium
qs.append(make_lom_q(
    num=215,
    question="In the previous pendulum problem, if the elevator falls in free fall ($a = g$), what is the time period of the pendulum?",
    options={
        "A": "Infinite (the pendulum will not oscillate)",
        "B": "Zero",
        "C": "T_0",
        "D": "2 T_0"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Apparent weight",
    concept="In free fall, effective gravity vanishes: $g_{\\text{eff}} = g - g = 0$. In $T = 2\\pi\\sqrt{L / g_{\\text{eff}}}$, division by zero yields an infinite time period.",
    given="Free fall $a = g$.",
    formula="T = 2\\pi\\sqrt{\\frac{L}{0}} = \\infty",
    steps="1. Effective gravity inside the freely falling elevator is $g_{\\text{eff}} = 0$.\n2. Restoring torque on the pendulum is $\\tau = -mg_{\\text{eff}}L\\sin\\theta = 0$.\n3. Without restoring torque, the pendulum cannot oscillate.\n4. Hence, $T = \\infty$.",
    tip="Zero restoring force $\\implies$ infinite time period! If displaced, the bob stays wherever it is placed or rotates with constant angular speed.",
    why_wrong="Option B confuses frequency with time period."
))

# Q216 - Hard
qs.append(make_lom_q(
    num=216,
    question="An elevator of mass $M$ is pulled downward by a motor with an acceleration $a > g$. A block of mass $m$ is resting on the floor of the elevator. What will be the observed behavior of the block?",
    options={
        "A": "The block lifts off the floor and strikes the ceiling with acceleration (a - g) relative to the elevator",
        "B": "The block remains on the floor with negative normal force",
        "C": "The block experiences zero acceleration relative to the ground",
        "D": "The block breaks through the floor"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Apparent weight",
    concept="When downward acceleration $a > g$, the elevator floor accelerates downward faster than free fall. The block can only accelerate downward under gravity ($g$). In the elevator frame, the pseudo force $ma$ upward exceeds gravity $mg$, accelerating the block toward the ceiling with $a_{\\text{rel}} = a - g$.",
    given="Elevator accelerates downward with $a > g$.",
    formula="a_{\\text{rel}} = a_{\\text{elevator}} - g = a - g\\text{ upwards}",
    steps="1. To stay on the floor, the block would need a downward force greater than gravity, requiring the floor to pull down on it (which a normal contact force cannot do, as $N \\ge 0$).\n2. The block accelerates downward at maximum acceleration $g$ (free fall).\n3. The elevator accelerates downward at $a > g$.\n4. Relative to the elevator, the block accelerates UPWARD at $a_{\\text{rel}} = a - g$.\n5. It floats up and collides with the ceiling.",
    tip="If $a > g$ downwards: The floor leaves the object behind! Normal force becomes zero, and the object accelerates toward the ceiling with $a - g$.",
    why_wrong="Option B: Normal force cannot be negative; surfaces cannot pull objects."
))

# Q217 - Hard
qs.append(make_lom_q(
    num=217,
    question="A cork is held at the bottom of a water-filled beaker resting in an elevator by a light thread. If the elevator accelerates vertically upward with acceleration $a$, what happens to the tension in the thread?",
    options={
        "A": "Increases to T = V(\\rho_w - \\rho_c)(g + a)",
        "B": "Decreases to T = V(\\rho_w - \\rho_c)(g - a)",
        "C": "Remains unchanged",
        "D": "Becomes zero"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Apparent weight",
    concept="Effective gravity in upward accelerating frame is $g_{\\text{eff}} = g + a$. Both the buoyant force ($F_B = \\rho_w V g_{\\text{eff}}$) and the cork's weight ($W = \\rho_c V g_{\\text{eff}}$) increase by the same factor $(g + a)/g$. Tension is $T = F_B - W = V(\\rho_w - \\rho_c)(g + a)$.",
    given="Upward acceleration $a$, water density $\\rho_w$, cork density $\\rho_c$ ($\rho_w > \rho_c$).",
    formula="T = V(\\rho_w - \\rho_c)g_{\\text{eff}} = V(\\rho_w - \\rho_c)(g + a)",
    steps="1. In the elevator frame, effective gravity is $g_{\\text{eff}} = g + a$.\n2. Upward buoyant force: $F_B = \\rho_w V (g + a)$.\n3. Downward weight: $W = \\rho_c V (g + a)$.\n4. Tension required to hold cork submerged: $T = F_B - W = V(\\rho_w - \\rho_c)(g + a)$.\n5. Since $g + a > g$, tension strictly increases.",
    tip="Archimedes principle under acceleration: Replace $g$ with $g_{\\text{eff}}$! In upward acceleration, buoyancy and tension both INCREASE.",
    why_wrong="Option B occurs for downward acceleration."
))

# Q218 - Hard
qs.append(make_lom_q(
    num=218,
    question="A helium-filled balloon is tied by a string to the floor of a car. When the car accelerates forward horizontally with acceleration $a$, what does the balloon do relative to the car?",
    options={
        "A": "Tilts forward in the direction of the car's acceleration",
        "B": "Tilts backward opposite to the car's acceleration",
        "C": "Remains perfectly vertical",
        "D": "Drops to the floor"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Apparent weight",
    concept="Because the car accelerates forward, the air inside the car is pushed backward, creating a horizontal pressure gradient where air pressure is higher at the rear than at the front. The forward buoyant force on the lighter-than-air helium balloon pushes it forward.",
    given="Car accelerating forward with acceleration $a$, helium balloon ($\rho_{\\text{He}} < \rho_{\\text{air}}$).",
    formula="\\tan\\theta = \\frac{a}{g}\\text{ (tilted FORWARD)}",
    steps="1. In the accelerating car frame, effective gravity tilts backward and downward: $\\vec{g}_{\\text{eff}} = -a\\hat{i} - g\\hat{j}$.\n2. A heavy pendulum hangs along $\\vec{g}_{\\text{eff}}$, tilting backward.\n3. A buoyant balloon floats OPPOSITE to effective gravity (up and forward).\n4. Higher air density at the back creates a forward buoyant force.\n5. Therefore, the helium balloon tilts FORWARD.",
    tip="Fascinating contrast: A heavy plumb bob swings BACKWARD, but a helium balloon tilts FORWARD! Air rushes back, so the less dense balloon is squeezed forward.",
    why_wrong="Option B is true for a heavy pendulum, but the balloon is lighter than air."
))

# Q219 - Hard
qs.append(make_lom_q(
    num=219,
    question="A U-tube containing liquid of density $\\rho$ is accelerated horizontally with constant acceleration $a$. If the distance between the two vertical limbs is $L$, what is the difference in liquid height $h$ between the two limbs?",
    options={
        "A": "h = \\frac{a L}{g}",
        "B": "h = \\frac{g L}{a}",
        "C": "h = \\frac{a^2 L}{2 g^2}",
        "D": "h = \\frac{2 a L}{g}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Apparent weight",
    concept="In the accelerating frame, effective gravity makes an angle $\\theta$ with the vertical: $\\tan\\theta = a/g$. The liquid surface must align perpendicular to effective gravity, so the slope of the liquid surface is $\\tan\\theta = h/L = a/g$.",
    given="Horizontal acceleration $a$, limb separation $L$.",
    formula="\\tan\\theta = \\frac{h}{L} = \\frac{a}{g} \\implies h = \\frac{a L}{g}",
    steps="1. Pressure gradient horizontally across length $L$: $\\Delta P = \\rho a L$.\n2. Pressure difference from vertical height column $h$: $\\Delta P = \\rho g h$.\n3. Equating both expressions: $\\rho a L = \\rho g h$.\n4. Divide by $\\rho g$: $h = \\frac{a L}{g}$.\n5. The liquid level rises in the rear limb and drops in the front limb.",
    tip="Accelerating fluid slope: $\\tan\\theta = \\frac{h}{L} = \\frac{a}{g} \\implies h = \\frac{aL}{g}$! Liquid always piles up at the rear.",
    why_wrong="Option B inverts $a$ and $g$."
))

print("Topic 14 done: 15 questions.")
