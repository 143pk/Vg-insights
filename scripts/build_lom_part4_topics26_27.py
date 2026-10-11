import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 26: Pseudo force and accelerating frames (Q408 to Q422: 4 Easy, 7 Medium, 4 Hard)
# ==============================================================================

# Q408: Easy (NEET 2018 Verified PYQ)
qs.append(make_lom_q(
    num=408,
    question="A block of mass $m$ is placed on a smooth inclined wedge of inclination $\\theta$. The wedge is given an acceleration $a$ towards the right (along the base). The relation between $a$ and $\\theta$ for the block to remain stationary on the wedge is:",
    options={
        "A": "$a = g \\tan\\theta$",
        "B": "$a = \\frac{g}{\\tan\\theta}$",
        "C": "$a = g \\sin\\theta$",
        "D": "$a = g \\cos\\theta$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Pseudo force and accelerating frames",
    concept="In the accelerating frame of the wedge (accelerating to the right with acceleration $a$), a pseudo force $m a$ acts horizontally to the left on the block. The component of the pseudo force up the inclined plane is $m a \\cos\\theta$. The component of gravity acting down the inclined plane is $m g \\sin\\theta$. For the block to remain stationary relative to the wedge, these two opposing components along the incline must balance: $m a \\cos\\theta = m g \\sin\\theta \\implies a = g \\tan\\theta$.",
    given="Block mass $m$, smooth wedge angle $\\theta$, horizontal acceleration $a$.",
    formula="$m a \\cos\\theta = m g \\sin\\theta \\implies a = g \\tan\\theta$.",
    steps="1. Choose the non-inertial frame of reference of the accelerating wedge.\n2. In this frame, the wedge is stationary, but every object of mass $m$ experiences a fictitious (pseudo) force $\\vec{F}_p = -m\\vec{a}$, directed horizontally to the left.\n3. Resolve forces parallel to the inclined plane:\n   - Downward component of gravity: $F_{g\\parallel} = mg\\sin\\theta$ (down the plane).\n   - Upward component of pseudo force: $F_{p\\parallel} = ma\\cos\\theta$ (up the plane).\n4. For the block to remain stationary on the smooth incline without sliding:\n   $ma\\cos\\theta = mg\\sin\\theta$.\n5. Cancelling mass $m$ and dividing by $\\cos\\theta$:\n   $a = g \\frac{\\sin\\theta}{\\cos\\theta} = g\\tan\\theta$.",
    tip="Universal NEET Result: To keep a block stationary on a smooth wedge, the wedge must accelerate towards the incline base with $a = g\\tan\\theta$!",
    why_wrong="Option B inverts the tangent. Option C and D use single trigonometric projections without accounting for the inclined axis.",
    is_pyq=True,
    pyq_year=2018,
    source="NEET UG 2018"
))

# Q409: Easy (NEET 2021 Verified PYQ)
qs.append(make_lom_q(
    num=409,
    question="A block of mass $m$ is in contact with the vertical front face of a cart C. The coefficient of static friction between the block and the cart is $\\mu$. The minimum acceleration $a$ of the cart that will prevent the block from falling is:",
    options={
        "A": "$\\frac{g}{\\mu}$",
        "B": "$\\mu g$",
        "C": "$\\frac{g}{\\mu^2}$",
        "D": "$\\frac{\\mu}{g}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Pseudo force and accelerating frames",
    concept="In the accelerating frame of the cart, a pseudo force $m a$ presses the block against the vertical wall of the cart, providing a normal reaction $N = m a$. The maximum available upward static friction is $f_{\\text{lim}} = \\mu N = \\mu m a$. To prevent the block from falling under its downward weight $m g$, friction must satisfy $f_{\\text{lim}} \\ge m g \\implies \\mu m a \\ge m g \\implies a \\ge \\frac{g}{\\mu}$.",
    given="Block mass $m$, vertical wall, static friction coefficient $\\mu$, cart acceleration $a$.",
    formula="$N = ma$; $f_{\\text{lim}} = \\mu ma \\ge mg \\implies a_{\\text{min}} = \\frac{g}{\\mu}$.",
    steps="1. Consider the non-inertial frame of reference of the cart accelerating horizontally with $a$.\n2. A pseudo force $ma$ acts horizontally on the block, pressing it against the vertical wall.\n3. By horizontal equilibrium: $N = ma$.\n4. The maximum static friction directed vertically upward is $f_{\\text{lim}} = \\mu N = \\mu ma$.\n5. The downward force tending to cause slipping is the weight $mg$.\n6. To prevent falling: $f_{\\text{lim}} \\ge mg \\implies \\mu ma \\ge mg$.\n7. Dividing both sides by $\\mu m$ gives $a \\ge \\frac{g}{\\mu}$.\n8. Therefore, the minimum acceleration is $a_{\\text{min}} = \\frac{g}{\\mu}$.",
    tip="Block on vertical front of an accelerating cart: $a_{\\text{min}} = \\frac{g}{\\mu}$. High yield NEET question!",
    why_wrong="Option B ($\\mu g$) is the acceleration of a box on a flat bed truck, not a vertical wall. Option C and D have wrong dimensions.",
    is_pyq=True,
    pyq_year=2021,
    source="NEET UG 2021"
))

# Q410: Easy
qs.append(make_lom_q(
    num=410,
    question="A pseudo force (fictitious force) must be introduced when applying Newton's second law in which type of reference frame?",
    options={
        "A": "A non-inertial (accelerating) reference frame",
        "B": "An inertial reference frame moving with constant velocity",
        "C": "A stationary reference frame fixed to distant stars",
        "D": "Any reference frame whatsoever"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Pseudo force and accelerating frames",
    concept="Newton's laws of motion are valid directly only in inertial reference frames. In a non-inertial (accelerating or rotating) frame, Newton's second law can only be applied by adding a fictitious pseudo force $\\vec{F}_p = -m\\vec{a}_0$ to account for the frame's acceleration $\\vec{a}_0$.",
    given="Application of Newton's laws in different frames.",
    formula="$\\vec{F}_{\\text{net}} - m\\vec{a}_0 = m\\vec{a}_{\\text{rel}}$.",
    steps="1. An inertial frame is one that is stationary or moving with constant velocity (zero acceleration).\n2. In an inertial frame, real physical forces alone explain acceleration: $\\sum \\vec{F} = m\\vec{a}$.\n3. A non-inertial frame is an accelerating reference frame.\n4. Observers inside an accelerating frame observe apparent accelerations not caused by physical interactions.\n5. To use $\\vec{F} = m\\vec{a}$ in such frames, we must include a pseudo force $\\vec{F}_{\\text{pseudo}} = -m\\vec{a}_{\\text{frame}}$.",
    tip="Pseudo forces are required ONLY in non-inertial (accelerating) frames, and they always act OPPOSITE to the frame's acceleration!",
    why_wrong="Options B and C describe inertial frames where pseudo forces are zero. Option D is incorrect because inertial frames need no pseudo forces."
))

# Q411: Easy
qs.append(make_lom_q(
    num=411,
    question="The direction of the pseudo force acting on an object of mass $m$ observed from a reference frame accelerating with acceleration $\\vec{a}_0$ is:",
    options={
        "A": "Opposite to the direction of $\\vec{a}_0$",
        "B": "In the same direction as $\\vec{a}_0$",
        "C": "Perpendicular to $\\vec{a}_0$",
        "D": "Always directed vertically downward"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Pseudo force and accelerating frames",
    concept="The pseudo force is defined as $\\vec{F}_{\\text{pseudo}} = -m \\vec{a}_0$. The negative sign indicates that it always acts in the direction strictly opposite to the frame's acceleration vector.",
    given="Frame acceleration $\\vec{a}_0$, mass $m$.",
    formula="$\\vec{F}_{\\text{pseudo}} = -m \\vec{a}_0$.",
    steps="1. By definition, the fictitious inertial force compensates for the acceleration of the observer's coordinate axes.\n2. In vector notation: $\\vec{F}_p = -m\\vec{a}_0$.\n3. The scalar mass $m$ is always positive.\n4. Therefore, the vector $\\vec{F}_p$ points in the exact opposite direction of $\\vec{a}_0$.",
    tip="If a car accelerates forward, pseudo force is backward! If an elevator accelerates upward, pseudo force is downward.",
    why_wrong="Option B forgets the negative sign. Option C and D describe incorrect geometries."
))

# Q412: Medium
qs.append(make_lom_q(
    num=412,
    question="A simple pendulum of mass $m$ is suspended from the roof of a car accelerating horizontally with a constant acceleration $a$. In equilibrium relative to the car, the string makes an angle $\\theta$ with the vertical given by:",
    options={
        "A": "$\\tan\\theta = \\frac{a}{g}$",
        "B": "$\\sin\\theta = \\frac{a}{g}$",
        "C": "$\\cos\\theta = \\frac{a}{g}$",
        "D": "$\\tan\\theta = \\frac{g}{a}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Pseudo force and accelerating frames",
    concept="In the frame of the car, the pendulum bob experiences downward gravity $mg$ and backward pseudo force $ma$. Tension $T$ in the deflected string has vertical component $T\\cos\\theta = mg$ and horizontal component $T\\sin\\theta = ma$. Dividing gives $\\tan\\theta = a / g$.",
    given="Car accelerating with $a$, pendulum deflected by $\\theta$ from vertical.",
    formula="$T\\sin\\theta = ma$; $T\\cos\\theta = mg \\implies \\tan\\theta = \\frac{a}{g}$.",
    steps="1. In the car's frame, the bob is at rest at deflection angle $\\theta$.\n2. Forces on the bob:\n   - Downward weight $mg$.\n   - Backward horizontal pseudo force $ma$.\n   - Tension $T$ along the string at angle $\\theta$ to the vertical.\n3. Vertical equilibrium: $T\\cos\\theta = mg$.\n4. Horizontal equilibrium: $T\\sin\\theta = ma$.\n5. Dividing the two equations: $\\frac{T\\sin\\theta}{T\\cos\\theta} = \\frac{ma}{mg} \\implies \\tan\\theta = \\frac{a}{g}$.",
    tip="Deflection of pendulum in accelerating vehicle: $\\tan\\theta = \\frac{a}{g}$. Apparent gravity is $g_{\\text{eff}} = \\sqrt{g^2 + a^2}$!",
    why_wrong="Option B and C use incorrect trigonometric functions. Option D inverts the ratio."
))

# Q413: Medium
qs.append(make_lom_q(
    num=413,
    question="In the previous accelerating car problem, what is the tension $T$ in the pendulum string?",
    options={
        "A": "$m \\sqrt{g^2 + a^2}$",
        "B": "$m(g + a)$",
        "C": "$m(g - a)$",
        "D": "$m \\sqrt{g^2 - a^2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Pseudo force and accelerating frames",
    concept="The tension must balance the vector resultant of gravity $mg$ and pseudo force $ma$. Since they are perpendicular ($90^\\circ$), $T = \\sqrt{(mg)^2 + (ma)^2} = m\\sqrt{g^2 + a^2}$.",
    given="$T\\cos\\theta = mg$, $T\\sin\\theta = ma$.",
    formula="$T = \\sqrt{(T\\cos\\theta)^2 + (T\\sin\\theta)^2} = m\\sqrt{g^2 + a^2}$.",
    steps="1. Square and add the equilibrium equations:\n   $(T\\sin\\theta)^2 + (T\\cos\\theta)^2 = (ma)^2 + (mg)^2$.\n2. $T^2(\\sin^2\\theta + \\cos^2\\theta) = m^2(a^2 + g^2)$.\n3. Since $\\sin^2\\theta + \\cos^2\\theta = 1$:\n   $T^2 = m^2(g^2 + a^2) \\implies T = m\\sqrt{g^2 + a^2}$.",
    tip="Tension in string of accelerating vehicle is $T = m g_{\\text{eff}} = m\\sqrt{g^2 + a^2}$!",
    why_wrong="Option B simply adds scalar-wise. Option C subtracts. Option D has a minus sign inside the radical."
))

# Q414: Medium
qs.append(make_lom_q(
    num=414,
    question="A plumb line hangs from the ceiling of a train compartment. If the train accelerates at $a = 5.77\\text{ m/s}^2$ (take $g = 10\\text{ m/s}^2$), what is the angle of deflection of the plumb line with the vertical?",
    options={
        "A": "$30^\\circ$",
        "B": "$45^\\circ$",
        "C": "$60^\\circ$",
        "D": "$15^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Pseudo force and accelerating frames",
    concept="Use $\\tan\\theta = a / g$. For $a = 5.77\\text{ m/s}^2$ and $g = 10\\text{ m/s}^2$, $\\tan\\theta = 0.577 = \\frac{1}{\\sqrt{3}}$, which corresponds to $\\theta = 30^\\circ$.",
    given="$a = 5.77\\text{ m/s}^2$, $g = 10\\text{ m/s}^2$.",
    formula="$\\tan\\theta = \\frac{a}{g} = \\frac{5.77}{10} = 0.577 = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ$.",
    steps="1. The deflection angle satisfies $\\tan\\theta = \\frac{a}{g}$.\n2. Substitute values: $\\tan\\theta = \\frac{5.77}{10} = 0.577$.\n3. Since $\\frac{1}{\\sqrt{3}} = \\frac{1}{1.732} \\approx 0.5773$, we have $\\tan\\theta = \\frac{1}{\\sqrt{3}}$.\n4. Therefore, $\\theta = 30^\\circ$.",
    tip="$\\tan 30^\\circ = 1/\\sqrt{3} \\approx 0.577$; $\\tan 45^\\circ = 1$; $\\tan 60^\\circ = \\sqrt{3} \\approx 1.732$. Recognizable NEET values!",
    why_wrong="Option B ($45^\\circ$) requires $a = g = 10\\text{ m/s}^2$. Option C ($60^\\circ$) requires $a = 17.32\\text{ m/s}^2$."
))

# Q415: Medium
qs.append(make_lom_q(
    num=415,
    question="A container filled with water accelerates horizontally with acceleration $a$ to the right. The angle $\\theta$ that the free surface of the water makes with the horizontal is given by:",
    options={
        "A": "$\\tan\\theta = \\frac{a}{g}$, with the surface tilted higher at the rear",
        "B": "$\\tan\\theta = \\frac{a}{g}$, with the surface tilted higher at the front",
        "C": "$\\tan\\theta = \\frac{g}{a}$, with the surface tilted higher at the rear",
        "D": "The water surface remains horizontal"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Pseudo force and accelerating frames",
    concept="In the accelerating frame, effective gravity $\\vec{g}_{\\text{eff}} = \\vec{g} - \\vec{a}$ is tilted backward at angle $\\theta$ to the vertical with $\\tan\\theta = a/g$. The free surface of any stationary fluid is always perpendicular to $\\vec{g}_{\\text{eff}}$, so it tilts up at the back by angle $\\theta = \\tan^{-1}(a/g)$ to the horizontal.",
    given="Water container accelerating horizontally to the right.",
    formula="$\\tan\\theta = \\frac{a}{g}$, tilted upwards at the rear.",
    steps="1. In the frame of the accelerating container, water experiences downward gravity $\\vec{g}$ and backward pseudo acceleration $-\\vec{a}$.\n2. The net effective gravity vector is $\\vec{g}_{\\text{eff}} = \\vec{g} - \\vec{a}$, pointing downward and backward.\n3. The free liquid surface must align perpendicular to $\\vec{g}_{\\text{eff}}$ so that no tangential force acts on surface molecules.\n4. Therefore, the liquid surface tilts so it is perpendicular to $\\vec{g}_{\\text{eff}}$.\n5. From geometry, the angle of the surface with the horizontal is $\\theta = \\tan^{-1}\\left(\\frac{a}{g}\\right)$, rising higher at the rear end of the container.",
    tip="Accelerating fluid surface tilts up at the rear with slope $\\tan\\theta = \\frac{a}{g}$! Always perpendicular to $g_{\\text{eff}}$.",
    why_wrong="Option B tilts the wrong way. Option C inverts the ratio. Option D ignores frame acceleration."
))

# Q416: Medium
qs.append(make_lom_q(
    num=416,
    question="A block of mass $m$ is suspended inside an elevator by a vertical string. If the elevator accelerates vertically downwards with an acceleration $a < g$, the tension in the string is:",
    options={
        "A": "$m(g - a)$",
        "B": "$m(g + a)$",
        "C": "$mg$",
        "D": "$ma$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Pseudo force and accelerating frames",
    concept="When an elevator accelerates downwards, the pseudo force on the block points vertically upward with magnitude $ma$. Equilibrium in the elevator frame gives $T + ma = mg \\implies T = m(g - a)$.",
    given="Elevator accelerating downwards with $a < g$.",
    formula="$T = m(g - a)$.",
    steps="1. In the elevator's downward-accelerating frame, every mass experiences an upward pseudo force $F_p = ma$.\n2. Downward real force: gravity $mg$.\n3. Upward forces: tension $T$ and pseudo force $ma$.\n4. For equilibrium in the elevator frame: $T + ma = mg$.\n5. Solving for tension: $T = m(g - a)$.",
    tip="Elevator going down with acceleration $a$: $T = m(g - a)$. Apparent weight decreases!",
    why_wrong="Option B ($m(g+a)$) is for upward acceleration. Option C is for zero acceleration. Option D ignores gravity."
))

# Q417: Medium
qs.append(make_lom_q(
    num=417,
    question="In the previous elevator problem, if the cable breaks so the elevator falls freely ($a = g$), what is the tension in the string?",
    options={
        "A": "Zero",
        "B": "$mg$",
        "C": "$2mg$",
        "D": "Infinite"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Pseudo force and accelerating frames",
    concept="During free fall, $a = g$. The tension becomes $T = m(g - g) = 0$. The block is in a state of apparent weightlessness.",
    given="Free fall $a = g$.",
    formula="$T = m(g - a) = m(g - g) = 0$.",
    steps="1. Substitute $a = g$ into the apparent weight formula: $T = m(g - a)$.\n2. $T = m(g - g) = 0$.\n3. Both the elevator and the block fall at identical accelerations ($g$).\n4. The string does not stretch and exerts zero tension.",
    tip="Free fall $\\implies$ Weightlessness $\\implies T = 0$!",
    why_wrong="Options B, C, and D are incorrect."
))

# Q418: Medium
qs.append(make_lom_q(
    num=418,
    question="A ball of mass $m$ is placed on the smooth horizontal floor of an elevator. If the elevator accelerates horizontally with acceleration $a$, what is the acceleration of the ball relative to the elevator?",
    options={
        "A": "$a$ in the backward direction",
        "B": "$a$ in the forward direction",
        "C": "Zero",
        "D": "$\\sqrt{a^2 + g^2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Pseudo force and accelerating frames",
    concept="In the ground frame, the floor is perfectly smooth, so zero horizontal force acts on the ball. The ball remains stationary relative to the ground. Because the elevator moves forward with acceleration $a$, an observer inside the elevator sees the ball accelerating backwards with acceleration $a$ (due to pseudo force $ma$).",
    given="Smooth floor, elevator accelerates horizontally with $a$.",
    formula="$F_{\\text{pseudo}} = ma$ (backward); $a_{\\text{rel}} = a$ backward.",
    steps="1. In the inertial ground frame, no horizontal force acts on the ball (floor is frictionless).\n2. By Newton's first law, the ball stays at rest relative to the ground ($a_{\\text{ground}} = 0$).\n3. The elevator moves forward with acceleration $a$.\n4. Relative acceleration of ball with respect to elevator:\n   $\\vec{a}_{\\text{rel}} = \\vec{a}_{\\text{ball}} - \\vec{a}_{\\text{elevator}} = 0 - a = -a$ (backward).\n5. From the non-inertial frame perspective, the pseudo force $-ma$ produces backward acceleration $a$.",
    tip="Frictionless floor means the ball stays put in the ground frame, so it slides backwards relative to the accelerating car with $a$!",
    why_wrong="Option B moves in the wrong direction. Option C would require friction. Option D includes vertical gravity."
))

# Q419: Hard
qs.append(make_lom_q(
    num=419,
    question="A block of mass $m$ is placed on a rough wedge of inclination $\\theta$ which is accelerating horizontally with acceleration $a$. If the coefficient of static friction is $\\mu_s$, what is the condition for the block to not slide UP the incline?",
    options={
        "A": "$a \\le g \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta}$",
        "B": "$a \\ge g \\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta}$",
        "C": "$a \\le g \\tan\\theta$",
        "D": "$a \\ge g \\tan\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Pseudo force and accelerating frames",
    concept="When the wedge accelerates with high acceleration $a$, the pseudo force $ma\\cos\\theta$ pushes the block UP the incline. Friction opposes this upward tendency and acts DOWN the incline: $f_{\\text{lim}} = \\mu_s N = \\mu_s(mg\\cos\\theta + ma\\sin\\theta)$. At the threshold of sliding up: $ma\\cos\\theta = mg\\sin\\theta + \\mu_s(mg\\cos\\theta + ma\\sin\\theta) \\implies a(\\cos\\theta - \\mu_s\\sin\\theta) = g(\\sin\\theta + \\mu_s\\cos\\theta) \\implies a_{\\text{max}} = g \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta}$.",
    given="Rough wedge $\\theta$, static friction $\\mu_s$, horizontal acceleration $a$.",
    formula="$a_{\\text{max}} = g \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta} = g \\tan(\\theta + \\lambda)$.",
    steps="1. In the frame of the accelerating wedge, forces along the incline pointing UP: $ma\\cos\\theta$.\n2. Forces along the incline pointing DOWN: gravity component $mg\\sin\\theta$ and limiting friction $f_{\\text{lim}}$.\n3. Normal force: $N = mg\\cos\\theta + ma\\sin\\theta$.\n4. Limiting friction acting down the plane: $f_{\\text{lim}} = \\mu_s N = \\mu_s(mg\\cos\\theta + ma\\sin\\theta)$.\n5. Condition to prevent sliding up: $ma\\cos\\theta \\le mg\\sin\\theta + \\mu_s(mg\\cos\\theta + ma\\sin\\theta)$.\n6. Grouping terms with $a$: $ma(\\cos\\theta - \\mu_s\\sin\\theta) \\le mg(\\sin\\theta + \\mu_s\\cos\\theta)$.\n7. Dividing by $m(\\cos\\theta - \\mu_s\\sin\\theta)$:\n   $a \\le g \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta}$.",
    tip="Range of safe acceleration on a rough wedge: $g\\tan(\\theta - \\lambda) \\le a \\le g\\tan(\\theta + \\lambda)$ where $\\lambda$ is the angle of friction!",
    why_wrong="Option B is the condition to not slide DOWN. Option C and D apply only to smooth frictionless wedges."
))

# Q420: Hard
qs.append(make_lom_q(
    num=420,
    question="In the previous setup, what is the minimum acceleration $a_{\\text{min}}$ of the wedge required to prevent the block from sliding DOWN the incline (assuming $\\tan\\theta > \\mu_s$)?",
    options={
        "A": "$g \\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta}$",
        "B": "$g \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta}$",
        "C": "$g \\tan\\theta$",
        "D": "$g (\\sin\\theta - \\mu_s\\cos\\theta)$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Pseudo force and accelerating frames",
    concept="To prevent downward sliding, friction acts UP the incline. Equilibrium gives $ma\\cos\\theta + \\mu_s N = mg\\sin\\theta \\implies a_{\\text{min}} = g \\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta} = g\\tan(\\theta - \\lambda)$.",
    given="Rough wedge $\\theta > \\theta_r$, impending downward slide.",
    formula="$a_{\\text{min}} = g \\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta} = g \\tan(\\theta - \\lambda)$.",
    steps="1. Tendency of motion is DOWN the incline, so static friction acts UP the incline.\n2. Total upward force along incline: $ma\\cos\\theta + f_{\\text{lim}}$.\n3. Downward force along incline: $mg\\sin\\theta$.\n4. Limiting friction: $f_{\\text{lim}} = \\mu_s N = \\mu_s(mg\\cos\\theta + ma\\sin\\theta)$.\n5. Condition for equilibrium: $ma\\cos\\theta + \\mu_s(mg\\cos\\theta + ma\\sin\\theta) \\ge mg\\sin\\theta$.\n6. $ma(\\cos\\theta + \\mu_s\\sin\\theta) \\ge mg(\\sin\\theta - \\mu_s\\cos\\theta)$.\n7. Solving for $a$: $a_{\\text{min}} = g \\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta}$.",
    tip="Memorize the twin limits: $a_{\\text{min}} = g\\tan(\\theta - \\lambda)$ and $a_{\\text{max}} = g\\tan(\\theta + \\lambda)$!",
    why_wrong="Option B is $a_{\\text{max}}$. Option C is for zero friction. Option D misses the normal force denominator."
))

# Q421: Hard
qs.append(make_lom_q(
    num=421,
    question="An open elevator of mass $M$ is moving upwards with an acceleration $a$. A person inside the elevator throws a ball vertically upwards with a velocity $u$ relative to the elevator. The time after which the ball returns to the person's hand is:",
    options={
        "A": "$\\frac{2u}{g + a}$",
        "B": "$\\frac{2u}{g - a}$",
        "C": "$\\frac{2u}{g}$",
        "D": "$\\frac{u}{g + a}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Pseudo force and accelerating frames",
    concept="In the non-inertial frame of the elevator accelerating upward with $a$, the effective gravitational acceleration is $g_{\\text{eff}} = g + a$. The time of flight of a ball thrown vertically with initial relative speed $u$ is $T = \\frac{2u}{g_{\\text{eff}}} = \\frac{2u}{g + a}$.",
    given="Upward acceleration $a$, relative launch speed $u$.",
    formula="$g_{\\text{eff}} = g + a$; $T = \\frac{2u}{g_{\\text{eff}}} = \\frac{2u}{g + a}$.",
    steps="1. In the frame of reference of the upwardly accelerating elevator, every free body experiences an additional downward pseudo acceleration $a$.\n2. The total downward acceleration relative to the elevator is $g_{\\text{eff}} = g + a$.\n3. In this frame, the person and the elevator floor are stationary.\n4. The ball is projected with speed $u$ and returns to the same height ($s_{\\text{rel}} = 0$).\n5. Using $s_{\\text{rel}} = u t - \\frac{1}{2}g_{\\text{eff}}t^2 = 0$ gives $t = \\frac{2u}{g_{\\text{eff}}} = \\frac{2u}{g + a}$.",
    tip="Relative motion in accelerating lift: Always replace $g$ with $g_{\\text{eff}} = g \\pm a$!",
    why_wrong="Option B ($g - a$) is for downward acceleration. Option C assumes zero acceleration. Option D is the time to reach maximum height."
))

# Q422: Hard
qs.append(make_lom_q(
    num=422,
    question="A pendulum bob of mass $m$ is hung inside a car traveling around a horizontal circular track of radius $R$ at a constant speed $v$. In equilibrium relative to the car, the angle $\\theta$ the string makes with the vertical and the tension $T$ in the string are:",
    options={
        "A": "$\\tan\\theta = \\frac{v^2}{Rg}$, $T = m \\sqrt{g^2 + \\left(\\frac{v^2}{R}\\right)^2}$",
        "B": "$\\tan\\theta = \\frac{Rg}{v^2}$, $T = mg$",
        "C": "$\\sin\\theta = \\frac{v^2}{Rg}$, $T = m(g + v^2/R)$",
        "D": "$\\tan\\theta = \\frac{v}{Rg}$, $T = m\\sqrt{g^2 + v^2}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Pseudo force and accelerating frames",
    concept="In the rotating car's frame, the car has centripetal acceleration $a_c = v^2/R$ towards the center. The bob experiences an outward centrifugal (pseudo) force $F_c = m v^2/R$ and downward gravity $mg$. Deflection angle satisfies $\\tan\\theta = \\frac{F_c}{mg} = \\frac{v^2}{Rg}$. Tension balances the vector sum: $T = \\sqrt{(mg)^2 + (m v^2/R)^2} = m\\sqrt{g^2 + (v^2/R)^2}$.",
    given="Circular path radius $R$, speed $v$, mass $m$.",
    formula="$\\tan\\theta = \\frac{v^2}{Rg}$; $T = m\\sqrt{g^2 + (v^2/R)^2}$.",
    steps="1. In the car's frame, the horizontal acceleration is $a = \\frac{v^2}{R}$ directed towards the center of curvature.\n2. The centrifugal pseudo force on the bob points radially outwards: $F_{\\text{centrifugal}} = m\\frac{v^2}{R}$.\n3. Vertical force is gravity: $W = mg$.\n4. Equilibrium of the string at angle $\\theta$ with the vertical:\n   - $T\\sin\\theta = m\\frac{v^2}{R}$\n   - $T\\cos\\theta = mg$\n5. Dividing: $\\tan\\theta = \\frac{v^2}{Rg}$.\n6. Squaring and adding: $T = \\sqrt{(mg)^2 + \\left(m\\frac{v^2}{R}\\right)^2} = m\\sqrt{g^2 + \\left(\\frac{v^2}{R}\\right)^2}$.",
    tip="Centrifugal Deflection: $\\tan\\theta = \\frac{v^2}{Rg}$, exactly analogous to linear acceleration with $a = \\frac{v^2}{R}$!",
    why_wrong="Option B inverts the ratio. Option C uses sine instead of tangent. Option D misses the square on $v$."
))

# ==============================================================================
# Topic 27: Circular motion and centripetal force (Q423 to Q438: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q423: Easy (NEET 2017 Verified PYQ)
qs.append(make_lom_q(
    num=423,
    question="One end of a string of length $L$ is connected to a particle of mass $m$ and the other to a small peg on a smooth horizontal table. If the particle moves in a circle with speed $v$, the net force on the particle (directed towards the centre) is: ($T$ is the tension in the string)",
    options={
        "A": "$T$",
        "B": "$T - \\frac{mv^2}{L}$",
        "C": "$T + \\frac{mv^2}{L}$",
        "D": "0"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Circular motion and centripetal force",
    concept="Centripetal force is not an additional physical force; it is the name given to the net inward radial force that causes centripetal acceleration. Here, the only physical horizontal force acting on the particle is the tension $T$ in the string. Therefore, the net inward force IS the tension $T$, which equals $\\frac{mv^2}{L}$.",
    given="Particle mass $m$, string length $L$, speed $v$, smooth horizontal table, tension $T$.",
    formula="Net radial force $F_{\\text{net}} = T = \\frac{mv^2}{L}$.",
    steps="1. Draw the horizontal free-body diagram of the particle on the smooth table:\n   - The only horizontal force acting on the particle is the tension $T$ exerted by the string directed towards the peg (center of the circle).\n   - There is no friction because the table is smooth.\n2. By Newton's second law, the net force towards the center is simply the vector sum of real horizontal forces.\n3. Since tension $T$ is the only force along the radial direction, the net force directed towards the center is $T$.\n4. (This net force provides the required centripetal acceleration: $T = \\frac{mv^2}{L}$).",
    tip="NEET Classic Concept: Centripetal force is NEVER a separate force to be added or subtracted! The net inward force is simply $T$.",
    why_wrong="Option B and C treat centripetal force as an independent force in an inertial frame, which is a fundamental error. Option D confuses an inertial frame with an equilibrium frame.",
    is_pyq=True,
    pyq_year=2017,
    source="NEET UG 2017"
))

# Q424: Easy (NEET 2019 Verified PYQ)
qs.append(make_lom_q(
    num=424,
    question="A block of mass $10\\text{ kg}$ is in contact against the inner wall of a hollow cylindrical drum of radius $1\\text{ m}$. The coefficient of friction between the block and the inner wall of the cylinder is $0.1$. The minimum angular velocity needed for the cylinder which is vertical to keep the block stationary is (take $g = 10\\text{ m/s}^2$):",
    options={
        "A": "$10\\text{ rad/s}$",
        "B": "$10\\pi\\text{ rad/s}$",
        "C": "$1\\text{ rad/s}$",
        "D": "$100\\text{ rad/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Circular motion and centripetal force",
    concept="In a vertical rotor (cylindrical drum), the normal reaction from the wall provides the required centripetal acceleration: $N = m \\omega^2 R$. Static friction acts vertically upward to balance the downward weight: $f_s = mg$. For no downward slipping: $f_s \\le \\mu_s N \\implies mg \\le \\mu_s (m \\omega^2 R) \\implies \\omega \\ge \\sqrt{\\frac{g}{\\mu_s R}}$.",
    given="$m = 10\\text{ kg}$, $R = 1\\text{ m}$, $\\mu = 0.1$, $g = 10\\text{ m/s}^2$.",
    formula="$\\omega_{\\text{min}} = \\sqrt{\\frac{g}{\\mu R}}$.",
    steps="1. The wall exerts an inward normal force on the block: $N = m \\omega^2 R$.\n2. The upward limiting static friction is: $f_{\\text{lim}} = \\mu N = \\mu m \\omega^2 R$.\n3. The downward gravity force is: $W = mg$.\n4. To prevent the block from slipping down the wall, we require:\n   $f_{\\text{lim}} \\ge mg \\implies \\mu m \\omega^2 R \\ge mg$.\n5. Dividing by $m$:\n   $\\mu \\omega^2 R \\ge g \\implies \\omega^2 \\ge \\frac{g}{\\mu R}$.\n6. Substitute values: $\\omega^2 \\ge \\frac{10}{0.1 \\times 1} = \\frac{10}{0.1} = 100$.\n7. Taking the square root: $\\omega_{\\text{min}} = \\sqrt{100} = 10\\text{ rad/s}$.",
    tip="Rotor Formula: $\\omega_{\\text{min}} = \\sqrt{\\frac{g}{\\mu R}}$. Mass of the block cancels out completely!",
    why_wrong="Option B incorrectly multiplies by $\\pi$. Option C is $\\sqrt{1}$. Option D is $\\omega^2$ before taking the square root.",
    is_pyq=True,
    pyq_year=2019,
    source="NEET UG 2019"
))

# Q425: Easy
qs.append(make_lom_q(
    num=425,
    question="In uniform circular motion of a particle with constant speed $v$ along a circle of radius $r$, the acceleration of the particle:",
    options={
        "A": "Has constant magnitude $\\frac{v^2}{r}$ but continuously changes direction",
        "B": "Is zero because the speed is constant",
        "C": "Has constant magnitude and constant direction",
        "D": "Points tangentially in the direction of velocity"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Circular motion and centripetal force",
    concept="In uniform circular motion, speed is constant, so tangential acceleration is zero. However, the direction of velocity continuously changes, giving rise to centripetal acceleration $a_c = \\frac{v^2}{r}$ pointing towards the center. Because the center is in a different direction relative to the particle at each instant, the acceleration vector continuously changes direction.",
    given="Uniform circular motion with constant speed $v$ and radius $r$.",
    formula="$a_c = \\frac{v^2}{r}$ directed radially inward.",
    steps="1. Magnitude of centripetal acceleration: $a = \\frac{v^2}{r} = \\text{constant}$.\n2. Direction: Always directed towards the instantaneous center of the circle.\n3. As the particle travels around the circle, this radial direction continuously rotates in space.\n4. Therefore, the acceleration vector is NOT constant; only its magnitude is constant.",
    tip="Uniform circular motion: Speed is constant, kinetic energy is constant, acceleration MAGNITUDE is constant, but velocity and acceleration VECTORS continuously change!",
    why_wrong="Option B forgets directional change. Option C claims constant direction. Option D describes tangential acceleration."
))

# Q426: Easy
qs.append(make_lom_q(
    num=426,
    question="The work done by the centripetal force on a particle undergoing uniform circular motion over any time interval is:",
    options={
        "A": "Zero",
        "B": "$\\frac{mv^2}{r} \\times 2\\pi r$",
        "C": "$\\frac{1}{2}mv^2$",
        "D": "$mv^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Circular motion and centripetal force",
    concept="Centripetal force is always perpendicular to the instantaneous velocity (and instantaneous displacement): $\\vec{F}_c \\perp d\\vec{r}$ (angle $90^\\circ$). Therefore, instantaneous power and work done are identically zero: $dW = \\vec{F}_c \\cdot d\\vec{r} = F_c dr \\cos 90^\\circ = 0$.",
    given="Centripetal force in uniform circular motion.",
    formula="$W = \\int \\vec{F}_c \\cdot d\\vec{r} = \\int F_c dr \\cos 90^\\circ = 0$.",
    steps="1. Centripetal force points radially inward towards the center.\n2. The displacement vector at every instant is along the tangent to the circle.\n3. Radius is perpendicular to tangent, so the angle between force and displacement is always $\\theta = 90^\\circ$.\n4. Work done is $W = F d\\cos 90^\\circ = 0$.\n5. By the work-energy theorem, since work done is zero, kinetic energy remains constant.",
    tip="Centripetal force NEVER does any work! It changes the direction of motion, never the speed or kinetic energy.",
    why_wrong="Option B multiplies force by circumference without accounting for the $90^\\circ$ dot product. Option C is the kinetic energy."
))

# Q427: Medium
qs.append(make_lom_q(
    num=427,
    question="A body of mass $m = 0.5\\text{ kg}$ is rotated in a horizontal circle of radius $r = 2\\text{ m}$ by a string. If the maximum tension the string can withstand without breaking is $T_{\\text{max}} = 100\\text{ N}$, what is the maximum speed with which the body can be rotated?",
    options={
        "A": "$20\\text{ m/s}$",
        "B": "$10\\text{ m/s}$",
        "C": "$14.14\\text{ m/s}$",
        "D": "$40\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Circular motion and centripetal force",
    concept="Tension provides the centripetal force: $T = \\frac{mv^2}{r}$. Setting $T = T_{\\text{max}}$ gives $v_{\\text{max}} = \\sqrt{\\frac{T_{\\text{max}} r}{m}}$.",
    given="$m = 0.5\\text{ kg}, r = 2\\text{ m}, T_{\\text{max}} = 100\\text{ N}$.",
    formula="$v_{\\text{max}} = \\sqrt{\\frac{T_{\\text{max}} r}{m}}$.",
    steps="1. Tension provides centripetal force: $T = \\frac{mv^2}{r}$.\n2. For the string not to break: $T \\le T_{\\text{max}} = 100\\text{ N}$.\n3. $\\frac{m v^2}{r} \\le 100 \\implies v^2 \\le \\frac{100 r}{m}$.\n4. Substitute values: $v^2 \\le \\frac{100 \\times 2}{0.5} = \\frac{200}{0.5} = 400$.\n5. Taking square root: $v_{\\text{max}} = \\sqrt{400} = 20\\text{ m/s}$.",
    tip="Breaking speed: $v_{\\text{max}} = \\sqrt{\\frac{T_{\\text{break}} r}{m}}$. Check that $0.5 \\times 400 / 2 = 100\\text{ N}$!",
    why_wrong="Option B ($10\\text{ m/s}$) gives $T = 25\\text{ N}$. Option C is $\\sqrt{200}$. Option D is $40\\text{ m/s}$ (gives $T = 400\\text{ N}$)."
))

# Q428: Medium
qs.append(make_lom_q(
    num=428,
    question="In a conical pendulum, a bob of mass $m$ moves in a horizontal circle of radius $r$ at the end of a string of length $L$. If the string makes an angle $\\theta$ with the vertical, what is the tension in the string?",
    options={
        "A": "$\\frac{mg}{\\cos\\theta}$",
        "B": "$mg \\cos\\theta$",
        "C": "$\\frac{mg}{\\sin\\theta}$",
        "D": "$mg \\tan\\theta$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Circular motion and centripetal force",
    concept="In a conical pendulum, the bob has zero vertical acceleration. The vertical component of tension balances the downward weight: $T\\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}$. The horizontal component provides the centripetal force: $T\\sin\\theta = \\frac{mv^2}{r}$.",
    given="Conical pendulum, string angle $\\theta$ with vertical, mass $m$.",
    formula="$T\\cos\\theta = mg \\implies T = \\frac{mg}{\\cos\\theta}$.",
    steps="1. Resolve tension $T$ along vertical and horizontal axes:\n   - Vertical component: $T\\cos\\theta$ pointing upward.\n   - Horizontal radial component: $T\\sin\\theta$ pointing toward the center of the horizontal circle.\n2. Since the bob moves in a strictly horizontal circle, its vertical acceleration is zero: $a_y = 0$.\n3. Balancing vertical forces: $T\\cos\\theta - mg = 0$.\n4. Therefore, $T = \\frac{mg}{\\cos\\theta}$.",
    tip="Conical Pendulum Tension: $T = \\frac{mg}{\\cos\\theta} > mg$. As $\\theta \\to 90^\\circ$, required tension approaches infinity!",
    why_wrong="Option B ($mg\\cos\\theta$) is the component of gravity on an inclined plane. Option C uses sine. Option D is $T\\sin\\theta$."
))

# Q429: Medium
qs.append(make_lom_q(
    num=429,
    question="In the conical pendulum above, the period of revolution $T_{\\text{period}}$ of the bob is:",
    options={
        "A": "$2\\pi \\sqrt{\\frac{L\\cos\\theta}{g}}$",
        "B": "$2\\pi \\sqrt{\\frac{L}{g}}$",
        "C": "$2\\pi \\sqrt{\\frac{L\\sin\\theta}{g}}$",
        "D": "$2\\pi \\sqrt{\\frac{g}{L\\cos\\theta}}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Circular motion and centripetal force",
    concept="From $T\\sin\\theta = m\\omega^2 r$ and $T\\cos\\theta = mg$, divide to get $\\tan\\theta = \\frac{\\omega^2 r}{g}$. Since $r = L\\sin\\theta$, we have $\\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\omega^2 L\\sin\\theta}{g} \\implies \\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$. Period is $T_{\\text{period}} = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$.",
    given="String length $L$, angle with vertical $\\theta$.",
    formula="$T = 2\\pi \\sqrt{\\frac{h}{g}} = 2\\pi \\sqrt{\\frac{L\\cos\\theta}{g}}$ where $h = L\\cos\\theta$ is the vertical height.",
    steps="1. Radius of circular path: $r = L\\sin\\theta$.\n2. Centripetal equation: $T\\sin\\theta = m \\omega^2 r = m \\omega^2 L\\sin\\theta$.\n3. Vertical equation: $T\\cos\\theta = mg$.\n4. From equation 2: $T = m\\omega^2 L$.\n5. Substitute into equation 3: $(m\\omega^2 L)\\cos\\theta = mg \\implies \\omega^2 = \\frac{g}{L\\cos\\theta}$.\n6. Angular frequency: $\\omega = \\sqrt{\\frac{g}{L\\cos\\theta}}$.\n7. Period of revolution: $T_{\\text{period}} = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{L\\cos\\theta}{g}}$.",
    tip="Conical Pendulum Time Period: $T = 2\\pi\\sqrt{\\frac{h}{g}} = 2\\pi\\sqrt{\\frac{L\\cos\\theta}{g}}$ where $h$ is the vertical distance from suspension to the circle!",
    why_wrong="Option B is the period of a simple planar pendulum. Option C uses sine. Option D inverts the radical."
))

# Q430: Medium
qs.append(make_lom_q(
    num=430,
    question="A coin placed on a rotating horizontal turntable at a distance of $9\\text{ cm}$ from the center just slips when the angular speed of the turntable is $10\\text{ rad/s}$. If the angular speed is doubled to $20\\text{ rad/s}$, at what distance from the center will the coin just slip?",
    options={
        "A": "2.25 cm",
        "B": "4.5 cm",
        "C": "18 cm",
        "D": "36 cm"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Circular motion and centripetal force",
    concept="For slipping on a turntable: $m \\omega^2 r = \\mu_s mg \\implies \\omega^2 r = \\mu_s g = \\text{constant}$. Therefore, $\\omega_1^2 r_1 = \\omega_2^2 r_2 \\implies r_2 = r_1 \\left(\\frac{\\omega_1}{\\omega_2}\\right)^2$.",
    given="$r_1 = 9\\text{ cm}$, $\\omega_1 = 10\\text{ rad/s}$, $\\omega_2 = 20\\text{ rad/s}$.",
    formula="$\\omega^2 r = \\text{constant} \\implies r_2 = r_1 \\left(\\frac{\\omega_1}{\\omega_2}\\right)^2$.",
    steps="1. The limiting condition for slipping is $m\\omega^2 r = \\mu_s mg$.\n2. Cancelling mass $m$: $\\omega^2 r = \\mu_s g$.\n3. Since $\\mu_s$ and $g$ are constant, the product $\\omega^2 r$ is constant.\n4. Therefore: $\\omega_1^2 r_1 = \\omega_2^2 r_2$.\n5. Given $\\omega_2 = 2\\omega_1$, we have: $(\\omega_1)^2 (9) = (2\\omega_1)^2 r_2 = 4\\omega_1^2 r_2$.\n6. $9 = 4 r_2 \\implies r_2 = \\frac{9}{4} = 2.25\\text{ cm}$.",
    tip="Inverse Square Relation: $r \\propto 1/\\omega^2$! Doubling angular speed means the safe distance is divided by 4.",
    why_wrong="Option B (4.5 cm) assumes $r \\propto 1/\\omega$ (linear). Option C and D increase distance instead of decreasing."
))

# Q431: Medium
qs.append(make_lom_q(
    num=431,
    question="In a 'Well of Death' (cylinder of radius $R = 4\\text{ m}$), a stunt motorcyclist rides horizontally around the vertical wall. The coefficient of friction between the tires and the wall is $\\mu_s = 0.4$. Taking $g = 10\\text{ m/s}^2$, what is the minimum linear speed $v$ the motorcyclist must maintain to avoid slipping down?",
    options={
        "A": "$10\\text{ m/s}$",
        "B": "$5\\text{ m/s}$",
        "C": "$20\\text{ m/s}$",
        "D": "$4\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Circular motion and centripetal force",
    concept="Normal force from the wall provides the centripetal acceleration: $N = \\frac{mv^2}{R}$. Upward static friction balances weight: $f_s = mg$. Condition for no slip: $f_{\\text{lim}} = \\mu_s N \\ge mg \\implies \\mu_s \\frac{mv^2}{R} \\ge mg \\implies v \\ge \\sqrt{\\frac{Rg}{\\mu_s}}$.",
    given="$R = 4\\text{ m}, \\mu_s = 0.4, g = 10\\text{ m/s}^2$.",
    formula="$v_{\\text{min}} = \\sqrt{\\frac{Rg}{\\mu_s}}$.",
    steps="1. Normal force from the vertical wall: $N = \\frac{mv^2}{R}$.\n2. Maximum upward static friction: $f_{\\text{lim}} = \\mu_s N = \\mu_s \\frac{mv^2}{R}$.\n3. Downward weight: $W = mg$.\n4. For vertical equilibrium without slipping: $f_{\\text{lim}} \\ge mg \\implies \\mu_s \\frac{mv^2}{R} \\ge mg$.\n5. Cancelling $m$: $v^2 \\ge \\frac{Rg}{\\mu_s}$.\n6. Substitute values: $v^2 \\ge \\frac{4 \\times 10}{0.4} = \\frac{40}{0.4} = 100$.\n7. Therefore, $v_{\\text{min}} = \\sqrt{100} = 10\\text{ m/s}$.",
    tip="Well of Death Minimum Speed: $v_{\\text{min}} = \\sqrt{\\frac{Rg}{\\mu_s}}$. Independent of rider and motorcycle mass!",
    why_wrong="Option B ($5\\text{ m/s}$) is $\\sqrt{25}$. Option C is $20\\text{ m/s}$. Option D is $4\\text{ m/s}$."
))

# Q432: Medium
qs.append(make_lom_q(
    num=432,
    question="A pilot of mass $m$ loops the loop in a vertical circle of radius $R$ with constant speed $v$. What is the normal force exerted by the seat on the pilot at the lowest point of the loop?",
    options={
        "A": "$m\\left(g + \\frac{v^2}{R}\\right)$",
        "B": "$m\\left(\\frac{v^2}{R} - g\\right)$",
        "C": "$\\frac{mv^2}{R}$",
        "D": "$mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Circular motion and centripetal force",
    concept="At the bottom of a vertical circle, the net force towards the center (upward) is $N - mg = \\frac{mv^2}{R}$. Therefore, the normal force exerted by the seat is $N = m\\left(g + \\frac{v^2}{R}\\right)$.",
    given="Vertical loop radius $R$, speed $v$, mass $m$, lowest point.",
    formula="$N - mg = \\frac{mv^2}{R} \\implies N = m\\left(g + \\frac{v^2}{R}\\right)$.",
    steps="1. At the lowest point, the center of the circle is directly overhead (upwards).\n2. Forces on the pilot:\n   - Upward normal reaction $N$ from the seat.\n   - Downward gravitational weight $mg$.\n3. The net inward radial force must provide the centripetal acceleration $\\frac{v^2}{R}$ upwards:\n   $N - mg = \\frac{mv^2}{R}$.\n4. Solving for $N$: $N = mg + \\frac{mv^2}{R} = m\\left(g + \\frac{v^2}{R}\\right)$.",
    tip="At the BOTTOM of a vertical loop, normal force is MAXIMUM: $N = m(g + v^2/R)$. The pilot feels heavier!",
    why_wrong="Option B is the normal force at the TOP of the loop. Option C ignores gravity. Option D is flat level ground."
))

# Q433: Medium
qs.append(make_lom_q(
    num=433,
    question="In the vertical loop above, what is the normal force exerted by the seat on the pilot at the HIGHEST point of the loop?",
    options={
        "A": "$m\\left(\\frac{v^2}{R} - g\\right)$",
        "B": "$m\\left(\\frac{v^2}{R} + g\\right)$",
        "C": "$\\frac{mv^2}{R}$",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Circular motion and centripetal force",
    concept="At the top of the loop, both the normal force $N$ (from seat downwards) and gravity $mg$ act downwards towards the center: $N + mg = \\frac{mv^2}{R} \\implies N = m\\left(\\frac{v^2}{R} - g\\right)$.",
    given="Highest point of vertical loop of radius $R$, speed $v$.",
    formula="$N + mg = \\frac{mv^2}{R} \\implies N = m\\left(\\frac{v^2}{R} - g\\right)$.",
    steps="1. At the highest point of the loop, the center of the circle is directly below.\n2. Both normal reaction $N$ (pushing down from the seat above) and gravity $mg$ point downwards towards the center.\n3. Newton's second law along the inward radial axis:\n   $N + mg = \\frac{mv^2}{R}$.\n4. Solving for normal force: $N = \\frac{mv^2}{R} - mg = m\\left(\\frac{v^2}{R} - g\\right)$.",
    tip="At the TOP of a vertical loop, $N = m(v^2/R - g)$. The minimum speed to not fall off is when $N = 0 \\implies v_{\\text{top}} = \\sqrt{gR}$!",
    why_wrong="Option B is the normal force at the bottom. Option C ignores gravity. Option D only occurs at the critical minimum speed."
))

# Q434: Hard
qs.append(make_lom_q(
    num=434,
    question="A small block of mass $m$ is resting on a smooth hemispherical dome of radius $R$. It is given an infinitesimal nudge from the top. At what height $h$ from the base of the dome will the block lose contact with the surface?",
    options={
        "A": "$\\frac{2}{3} R$",
        "B": "$\\frac{1}{2} R$",
        "C": "$\\frac{3}{4} R$",
        "D": "$\\frac{1}{3} R$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Circular motion and centripetal force",
    concept="Let $\\theta$ be the angle with the vertical. Conservation of mechanical energy gives $\\frac{1}{2}mv^2 = mgR(1 - \\cos\\theta) \\implies v^2 = 2gR(1 - \\cos\\theta)$. Radial force equation: $mg\\cos\\theta - N = \\frac{mv^2}{R}$. At the point of losing contact, $N = 0 \\implies mg\\cos\\theta = \\frac{m(2gR(1 - \\cos\\theta))}{R} = 2mg(1 - \\cos\\theta) \\implies \\cos\\theta = 2 - 2\\cos\\theta \\implies 3\\cos\\theta = 2 \\implies \\cos\\theta = \\frac{2}{3}$. The height from the base is $h = R\\cos\\theta = \\frac{2}{3}R$.",
    given="Smooth dome radius $R$, released from top, loses contact at $N = 0$.",
    formula="$\\cos\\theta = \\frac{2}{3}$; $h = R\\cos\\theta = \\frac{2}{3}R$.",
    steps="1. As the block slides down an angular distance $\\theta$ from the apex, vertical drop is $\\Delta y = R(1 - \\cos\\theta)$.\n2. By conservation of mechanical energy: $\\frac{1}{2}mv^2 = mg R(1 - \\cos\\theta) \\implies v^2 = 2gR(1 - \\cos\\theta)$.\n3. Forces along the radial direction towards the center of the sphere:\n   - Component of gravity inward: $mg\\cos\\theta$.\n   - Normal force outward: $N$.\n4. Centripetal equation: $mg\\cos\\theta - N = \\frac{mv^2}{R}$.\n5. Contact is lost when $N = 0$:\n   $mg\\cos\\theta = \\frac{mv^2}{R} = \\frac{m}{R}[2gR(1 - \\cos\\theta)] = 2mg(1 - \\cos\\theta)$.\n6. Dividing by $mg$: $\\cos\\theta = 2(1 - \\cos\\theta) = 2 - 2\\cos\\theta$.\n7. $3\\cos\\theta = 2 \\implies \\cos\\theta = \\frac{2}{3}$.\n8. Height above the horizontal base: $h = R\\cos\\theta = \\frac{2}{3}R$.",
    tip="Master NEET Result: On a smooth sphere, contact is lost at $\\cos\\theta = 2/3$, height $h = \\frac{2}{3}R$, and speed $v = \\sqrt{\\frac{2}{3}gR}$!",
    why_wrong="Option B ($R/2$) is for $\\theta = 60^\\circ$. Option C ($3R/4$) uses wrong energy balance. Option D is $R - 2R/3$ (the vertical drop)."
))

# Q435: Hard
qs.append(make_lom_q(
    num=435,
    question="In the previous dome problem, what is the speed of the block at the instant it leaves the dome?",
    options={
        "A": "$\\sqrt{\\frac{2}{3} g R}$",
        "B": "$\\sqrt{g R}$",
        "C": "$\\sqrt{2 g R}$",
        "D": "$\\sqrt{\\frac{1}{3} g R}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Circular motion and centripetal force",
    concept="Substitute $\\cos\\theta = 2/3$ into $v^2 = 2gR(1 - \\cos\\theta) = 2gR(1 - 2/3) = 2gR(1/3) = \\frac{2}{3}gR \\implies v = \\sqrt{\\frac{2}{3}gR}$.",
    given="$\\cos\\theta = 2/3$ at separation point.",
    formula="$v = \\sqrt{2gR(1 - \\cos\\theta)} = \\sqrt{\\frac{2}{3}gR}$.",
    steps="1. From energy conservation: $v^2 = 2gR(1 - \\cos\\theta)$.\n2. At separation: $\\cos\\theta = \\frac{2}{3}$.\n3. $v^2 = 2gR\\left(1 - \\frac{2}{3}\\right) = 2gR\\left(\\frac{1}{3}\\right) = \\frac{2}{3}gR$.\n4. Therefore, $v = \\sqrt{\\frac{2}{3}gR}$.",
    tip="Alternative Check: At $N = 0$, $mg\\cos\\theta = \\frac{mv^2}{R} \\implies v^2 = gR\\cos\\theta = gR(2/3) \\implies v = \\sqrt{\\frac{2}{3}gR}$! Instantly verified.",
    why_wrong="Option B ($\\sqrt{gR}$) is the critical speed at the top of a loop. Option C ($\\sqrt{2gR}$) is free fall from height $R$. Option D is $\\sqrt{gR/3}$."
))

# Q436: Hard
qs.append(make_lom_q(
    num=436,
    question="A particle of mass $m$ is tied to a string of length $L$ and whirled in a vertical circle. What is the minimum speed $v_{\\text{bottom}}$ that must be imparted to the particle at the lowest point so that it completes a full vertical circle?",
    options={
        "A": "$\\sqrt{5 g L}$",
        "B": "$\\sqrt{4 g L}$",
        "C": "$\\sqrt{3 g L}$",
        "D": "$\\sqrt{g L}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Circular motion and centripetal force",
    concept="At the highest point, the minimum speed to maintain string tautness ($T \\ge 0$) is $v_{\\text{top}} = \\sqrt{gL}$. By conservation of mechanical energy between bottom and top: $\\frac{1}{2}m v_{\\text{bottom}}^2 = \\frac{1}{2}m v_{\\text{top}}^2 + mg(2L) = \\frac{1}{2}m(gL) + 2mgL = \\frac{5}{2}mgL \\implies v_{\\text{bottom}} = \\sqrt{5gL}$.",
    given="Vertical circle with string length $L$, mass $m$.",
    formula="$v_{\\text{top}} = \\sqrt{gL}$; $v_{\\text{bottom}} = \\sqrt{v_{\\text{top}}^2 + 4gL} = \\sqrt{5gL}$.",
    steps="1. At the top of the circle, tension must be non-negative: $T_{\\text{top}} = \\frac{mv_{\\text{top}}^2}{L} - mg \\ge 0 \\implies v_{\\text{top}} \\ge \\sqrt{gL}$.\n2. Conservation of mechanical energy between lowest point and highest point:\n   $K_{\\text{bottom}} = K_{\\text{top}} + U_{\\text{top}}$.\n3. $\\frac{1}{2}mv_{\\text{bottom}}^2 = \\frac{1}{2}mv_{\\text{top}}^2 + mg(2L)$.\n4. Setting $v_{\\text{top}} = \\sqrt{gL}$:\n   $\\frac{1}{2}mv_{\\text{bottom}}^2 = \\frac{1}{2}m(gL) + 2mgL = \\frac{5}{2}mgL$.\n5. Multiply by $2/m$: $v_{\\text{bottom}}^2 = 5gL \\implies v_{\\text{bottom}} = \\sqrt{5gL}$.",
    tip="Crucial NEET Benchmarks for Vertical Circle (String):\n- Minimum speed at bottom: $\\sqrt{5gL}$\n- Minimum speed at horizontal: $\\sqrt{3gL}$\n- Minimum speed at top: $\\sqrt{gL}$",
    why_wrong="Option B ($\\sqrt{4gL}$) is for a rigid rod (where top speed can reach 0). Option C is the minimum speed at the horizontal position. Option D is the minimum speed at the top."
))

# Q437: Hard
qs.append(make_lom_q(
    num=437,
    question="In the vertical circle completed with a light string (with $v_{\\text{bottom}} = \\sqrt{5gL}$), what is the difference between the string tension at the lowest point ($T_{\\text{bottom}}$) and at the highest point ($T_{\\text{top}}$)?",
    options={
        "A": "$6 mg$",
        "B": "$4 mg$",
        "C": "$2 mg$",
        "D": "$5 mg$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Circular motion and centripetal force",
    concept="At the bottom: $T_{\\text{bottom}} = mg + \\frac{mv_{\\text{bottom}}^2}{L}$. At the top: $T_{\\text{top}} = \\frac{mv_{\\text{top}}^2}{L} - mg$. By energy conservation, $v_{\\text{bottom}}^2 - v_{\\text{top}}^2 = 4gL$. Thus, $T_{\\text{bottom}} - T_{\\text{top}} = 2mg + \\frac{m(4gL)}{L} = 2mg + 4mg = 6mg$.",
    given="Vertical circle with string length $L$.",
    formula="$T_{\\text{bottom}} - T_{\\text{top}} = 6 mg$ (universal for ANY vertical circular motion in gravity).",
    steps="1. At the lowest point: $T_B - mg = \\frac{m v_B^2}{L} \\implies T_B = mg + \\frac{m v_B^2}{L}$.\n2. At the highest point: $T_T + mg = \\frac{m v_T^2}{L} \\implies T_T = \\frac{m v_T^2}{L} - mg$.\n3. Difference in tension:\n   $T_B - T_T = 2mg + \\frac{m}{L}(v_B^2 - v_T^2)$.\n4. From mechanical energy conservation: $\\frac{1}{2}mv_B^2 - \\frac{1}{2}mv_T^2 = mg(2L) \\implies v_B^2 - v_T^2 = 4gL$.\n5. Substitute into the tension difference:\n   $T_B - T_T = 2mg + \\frac{m}{L}(4gL) = 2mg + 4mg = 6mg$.",
    tip="Universal Invariant: $T_{\\text{bottom}} - T_{\\text{top}} = 6 mg$ ALWAYS, regardless of the initial launch speed!",
    why_wrong="Option B (4 mg) is just the energy term without the $2mg$ gravity component. Option C is $2mg$. Option D is $5mg$."
))

# Q438: Hard
qs.append(make_lom_q(
    num=438,
    question="If a light rigid rod is used instead of a string to whirl a particle of mass $m$ in a vertical circle of radius $L$, what is the minimum speed required at the lowest point to complete the vertical circle?",
    options={
        "A": "$\\sqrt{4 g L} = 2\\sqrt{gL}$",
        "B": "$\\sqrt{5 g L}$",
        "C": "$\\sqrt{3 g L}$",
        "D": "$\\sqrt{2 g L}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Circular motion and centripetal force",
    concept="Unlike a flexible string which slacks if $T < 0$, a rigid rod can support compressive thrust ($T \\le 0$). Therefore, the particle only needs to reach the top with zero velocity ($v_{\\text{top}} = 0$). By energy conservation: $\\frac{1}{2}m v_{\\text{bottom}}^2 = mg(2L) \\implies v_{\\text{bottom}} = \\sqrt{4gL} = 2\\sqrt{gL}$.",
    given="Light rigid rod of length $L$, mass $m$.",
    formula="$v_{\\text{top}} = 0$; $v_{\\text{bottom}} = \\sqrt{4gL} = 2\\sqrt{gL}$.",
    steps="1. A string requires $v_{\\text{top}} \\ge \\sqrt{gL}$ because it cannot withstand compression (it slacks).\n2. A rigid rod can provide upward thrust, so it does not collapse even if speed at the top is zero.\n3. The minimum speed at the top to complete the loop is simply $v_{\\text{top}} = 0$.\n4. By conservation of mechanical energy:\n   $\\frac{1}{2}mv_{\\text{bottom}}^2 = 0 + mg(2L) = 2mgL$.\n5. Multiply by $2/m$: $v_{\\text{bottom}}^2 = 4gL \\implies v_{\\text{bottom}} = \\sqrt{4gL} = 2\\sqrt{gL}$.",
    tip="String vs Rod Contrast:\n- String requires $v_{\\text{bottom}} = \\sqrt{5gL}$\n- Rigid Rod requires $v_{\\text{bottom}} = \\sqrt{4gL} = 2\\sqrt{gL}$\nEssential distinction tested repeatedly in NEET!",
    why_wrong="Option B ($\\sqrt{5gL}$) is for a string. Option C ($\\sqrt{3gL}$) is speed at horizontal. Option D is $\\sqrt{2gL}$."
))

print(f"Topics 26 & 27 done: {len(qs)} questions.")
