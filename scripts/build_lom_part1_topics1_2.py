import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q
from gen_lom_part1_topic1 import qs as t1_qs

all_qs = list(t1_qs)

# ==============================================================================
# Topic 2: Newton's first law of motion (Q017 to Q031, 15 questions: 4 Easy, 8 Medium, 3 Hard)
# ==============================================================================

# Q017 - Easy
all_qs.append(make_lom_q(
    num=17,
    question="Newton's first law of motion is also famously known as:",
    options={
        "A": "The law of inertia",
        "B": "The law of momentum",
        "C": "The law of action-reaction",
        "D": "The law of gravitation"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's first law of motion",
    concept="Galileo first deduced the principle of inertia, which states that a body continues in its state of rest or uniform motion unless acted upon by a net external force. Newton formalized this as his First Law.",
    given="Newton's First Law formulation.",
    formula="\\sum \\vec{F}_{\\text{ext}} = 0 \\iff \\vec{v} = \\text{constant}",
    steps="1. Newton's first law defines the natural state of an isolated body.\n2. It asserts that bodies have an inherent resistance to changing their state of motion, termed inertia.\n3. Hence, it is known as the Law of Inertia.",
    tip="First Law defines force qualitatively (inertia). Second Law defines force quantitatively ($F = dp/dt$). Third Law describes the nature of forces (interactions occur in pairs)!",
    why_wrong="Option B is the Second Law. Option C is the Third Law."
))

# Q018 - Easy
all_qs.append(make_lom_q(
    num=18,
    question="An astronaut floating in deep outer space far from any celestial body throws a wrench with speed $v$. What will happen to the wrench after it leaves the astronaut's hand?",
    options={
        "A": "It continues moving in a straight line with constant speed v indefinitely",
        "B": "It gradually slows down and eventually stops",
        "C": "It moves along a curved parabolic path",
        "D": "It accelerates continuously"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's first law of motion",
    concept="In deep space far from gravitational bodies and neglecting resistance, the net external force on the wrench is zero ($\sum \vec{F} = 0$). By Newton's First Law, its velocity remains strictly constant.",
    given="$\\sum \\vec{F} = 0$, initial velocity $\\vec{v}$.",
    formula="\\vec{a} = \\frac{\\sum \\vec{F}}{m} = 0 \\implies \\vec{v}(t) = \\vec{v}_0 = \\text{constant}",
    steps="1. Once released, no forces act on the wrench.\n2. Without external force, no acceleration can occur ($a = 0$).\n3. The wrench maintains its speed and direction indefinitely.",
    tip="Aristotle incorrectly believed a force is needed to maintain motion. Galileo and Newton proved no force is needed to maintain uniform motion—force is only needed to CHANGE motion!",
    why_wrong="Option B is the Aristotelian fallacy of motion requiring a continuous push."
))

# Q019 - Easy
all_qs.append(make_lom_q(
    num=19,
    question="A body moving with a constant velocity $\\vec{v}$ must have:",
    options={
        "A": "Zero net external force acting on it",
        "B": "No forces acting on it at all",
        "C": "A constant non-zero net external force",
        "D": "A net force in the direction of motion"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's first law of motion",
    concept="Constant velocity means $\vec{a} = d\vec{v}/dt = 0$. By Newton's First and Second Laws, $\vec{F}_{\text{net}} = m\vec{a} = 0$. Forces may act on the body, but their vector sum must be zero.",
    given="$\\vec{v} = \\text{constant}$.",
    formula="\\vec{a} = 0 \\implies \\sum \\vec{F} = 0",
    steps="1. Velocity is constant in both magnitude and direction.\n2. Acceleration is the time rate of change of velocity, so $\\vec{a} = 0$.\n3. $\\vec{F}_{\\text{net}} = m\\vec{a} = 0$.\n4. This does NOT mean no forces act on it; rather, all applied forces balance out completely.",
    tip="Distinguish 'no forces act' from 'net force is zero'. A car cruising at constant speed has gravity, normal, driving, and air resistance forces all balancing out to zero net force!",
    why_wrong="Option B is too restrictive; multiple forces can act as long as their vector sum is zero."
))

# Q020 - Easy
all_qs.append(make_lom_q(
    num=20,
    question="Newton's first law of motion is valid strictly in which type of reference frame?",
    options={
        "A": "Inertial reference frames",
        "B": "Non-inertial reference frames",
        "C": "Rotating reference frames",
        "D": "Accelerating reference frames"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's first law of motion",
    concept="An inertial frame of reference is defined as one in which Newton's First Law holds true—that is, a frame that is either at rest or moving with constant velocity relative to distant stars.",
    given="Newton's First Law postulates.",
    formula="\\text{Inertial frame: } \\vec{a}_{\\text{frame}} = 0",
    steps="1. In an accelerating frame, a body at rest appears to accelerate without any real interaction, requiring pseudo forces.\n2. Newton's laws in their standard form without fictitious forces apply exclusively to inertial frames.",
    tip="An inertial frame is one with zero acceleration ($a = 0$). Non-inertial, rotating, and accelerating frames all require pseudo forces to apply Newton's laws!",
    why_wrong="Options B, C, and D are all accelerated frames where Newton's first law does not hold in its basic form."
))

# Q021 - Medium
all_qs.append(make_lom_q(
    num=21,
    question="A bird is sitting on the floor of a wire cage being carried by a boy. If the bird starts flying inside the cage, the boy will perceive the cage to:",
    options={
        "A": "Become lighter",
        "B": "Become heavier",
        "C": "Show no change in weight",
        "D": "First become lighter then heavier"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="In a wire cage, the downward air currents pushed by the bird's flapping wings pass out through the wire mesh into the outside atmosphere, so the downward reaction force does not act on the cage floor.",
    given="Bird inside a wire mesh cage.",
    formula="W_{\\text{perceived}} = W_{\\text{cage}} + F_{\\text{downward reaction on cage}}",
    steps="1. While resting on the floor, the cage supports the bird's full weight $mg$.\n2. When flying in a wire cage, the air pushed down passes through the open mesh.\n3. The boy no longer carries the bird's weight, so the cage feels lighter.",
    tip="Wire cage = feels lighter (air escapes). Airtight closed box = weight remains UNCHANGED (air pushes on the bottom of the box with force $mg$)!",
    why_wrong="Option C is only true for a completely sealed airtight box, not a wire mesh cage."
))

# Q022 - Medium
all_qs.append(make_lom_q(
    num=22,
    question="A sealed airtight glass box containing a bird is placed on a sensitive weighing scale. When the bird flies horizontally at constant velocity inside the box, the scale reading will:",
    options={
        "A": "Remain completely unchanged",
        "B": "Decrease because the bird is not touching the floor",
        "C": "Increase because of the bird's wing flapping",
        "D": "Fluctuate randomly with average reading zero"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="In an airtight sealed container, the bird is supported by the air column. For the bird to fly at constant altitude and velocity, the upward lift force must equal the bird's weight $mg$. By Newton's third law, the air pushes downward on the container floor with an equal force $mg$.",
    given="Airtight sealed container, bird flying with constant velocity.",
    formula="F_{\\text{air on floor}} = mg \\implies W_{\\text{total}} = M_{\\text{box}}g + mg",
    steps="1. Net vertical acceleration of the system center of mass is zero ($a_{\\text{cm}, y} = 0$).\n2. The normal reaction from the scale must balance the total weight of the system: $N = (M + m)g$.\n3. Therefore, the weighing scale reading remains unchanged.",
    tip="Center of mass theorem: If the center of mass of the system has zero vertical acceleration, the scale reading is ALWAYS the total static weight!",
    why_wrong="Option B neglects the downward air pressure column created by the wings on the sealed floor."
))

# Q023 - Medium
all_qs.append(make_lom_q(
    num=23,
    question="A block of mass $m$ is placed on a smooth horizontal table in an elevator. The elevator accelerates upward with acceleration $a$. With respect to an observer standing inside the elevator, the net force on the block is:",
    options={
        "A": "Zero, because the block is at rest relative to the elevator",
        "B": "m(g + a) downwards",
        "C": "ma upwards",
        "D": "mg downwards"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="In the accelerating frame of the elevator, the block experiences upward normal force $N = m(g+a)$, downward gravity $mg$, and downward pseudo force $ma$. The net force in this non-inertial frame is $N - mg - ma = 0$, in accordance with the block remaining stationary relative to the elevator.",
    given="Elevator accelerating upward at $a$, observer inside elevator.",
    formula="\\sum \\vec{F}_{\\text{effective}} = \\vec{N} + m\\vec{g} + \\vec{F}_{\\text{pseudo}} = 0",
    steps="1. With respect to the internal observer, the block does not move (acceleration relative to elevator is $a_{\\text{rel}} = 0$).\n2. The normal force on the block is $N = m(g+a)$.\n3. Downward real gravity is $mg$ and downward pseudo force is $ma$.\n4. Net force in the frame of the observer is $N - (mg + ma) = 0$.",
    tip="If an object is at rest in any reference frame, the net force (including pseudo force if non-inertial) acting on it in that frame MUST be zero!",
    why_wrong="Option B confuses the normal reaction force with the net force."
))

# Q024 - Medium
all_qs.append(make_lom_q(
    num=24,
    question="A passenger in a moving train tosses a coin vertically upward. The coin lands behind the passenger. This observation proves that the train is moving with:",
    options={
        "A": "Forward acceleration",
        "B": "Constant velocity",
        "C": "Deceleration (retardation)",
        "D": "Uniform speed along a circular track"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="When the coin is tossed, it retains the horizontal velocity of the train at that instant ($u$). If the train accelerates forward, the train's speed increases ($v_{\\text{train}} > u$), so the train moves ahead while the coin falls behind.",
    given="Coin tossed vertically, lands behind the passenger.",
    formula="x_{\\text{train}} = ut + \\frac{1}{2}at^2,\\quad x_{\\text{coin}} = ut \\implies \\Delta x = x_{\\text{coin}} - x_{\\text{train}} = -\\frac{1}{2}at^2",
    steps="1. Horizontal speed of coin during flight is constant ($v_{x} = u$).\n2. If the train accelerates forward ($a > 0$), the passenger covers a greater horizontal distance than the coin during time of flight.\n3. Consequently, the coin lands behind the passenger.",
    tip="Coin lands: In hand $\\implies$ uniform velocity ($a=0$). Behind $\\implies$ forward acceleration ($a>0$). In front $\\implies$ deceleration/braking ($a<0$)!",
    why_wrong="Option B means the coin lands back in the passenger's hand. Option C means it lands in front."
))

# Q025 - Medium
all_qs.append(make_lom_q(
    num=25,
    question="Which of the following physical quantities is an intrinsic measure of a body's inertia in linear motion?",
    options={
        "A": "Inertial mass",
        "B": "Weight",
        "C": "Momentum",
        "D": "Velocity"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="In classical mechanics, mass is the quantitative measure of inertia. The greater the mass of a body, the greater the force required to produce a given acceleration.",
    given="Inertia concept.",
    formula="a = \\frac{F}{m} \\implies m = \\frac{F}{a}",
    steps="1. Inertia is the resistance of an object to changes in its state of motion.\n2. For a given force $F$, acceleration is inversely proportional to mass: $a \\propto 1/m$.\n3. Therefore, mass is the intrinsic quantitative measure of inertia.",
    tip="Mass is independent of location, whereas weight ($W = mg$) depends on the local acceleration due to gravity!",
    why_wrong="Option B (Weight) varies with gravitational field $g$, whereas inertia is invariant."
))

# Q026 - Medium
all_qs.append(make_lom_q(
    num=26,
    question="A particle of mass $m$ is moving along the line $y = c$ with a constant velocity $\\vec{v} = v\\hat{i}$. What is the net external force acting on the particle?",
    options={
        "A": "Zero",
        "B": "m v / c",
        "C": "m v^2 / c",
        "D": "-m v \\hat{j}"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="Motion in a straight line with constant speed means velocity is constant in both magnitude and direction ($\vec{a} = 0$). By Newton's First Law, $\vec{F}_{\text{net}} = 0$.",
    given="$\\vec{v} = v\\hat{i} = \\text{constant}$, along $y = c$.",
    formula="\\vec{F}_{\\text{net}} = m\\frac{d\\vec{v}}{dt} = 0",
    steps="1. The position is $\\vec{r}(t) = (vt)\\hat{i} + c\\hat{j}$.\n2. The velocity is $\\vec{v} = \\frac{d\\vec{r}}{dt} = v\\hat{i}$.\n3. The acceleration is $\\vec{a} = \\frac{d\\vec{v}}{dt} = 0$.\n4. Hence, $\\vec{F}_{\\text{net}} = m\\vec{a} = 0$.",
    tip="Don't confuse angular momentum with force! The angular momentum about origin is non-zero ($L = mvc$), but the NET FORCE is strictly zero!",
    why_wrong="Options B and C confuse linear motion with circular centripetal acceleration."
))

# Q027 - Medium
all_qs.append(make_lom_q(
    num=27,
    question="A book rests on a table. The force of gravity pulls the book downward. According to Newton's first law, the book remains at rest because:",
    options={
        "A": "The table exerts an upward normal force that balances the downward gravitational force",
        "B": "The gravitational force is an internal force",
        "C": "Inertia prevents any gravitational pull on stationary objects",
        "D": "The table absorbs the gravitational force completely"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="Newton's first law states that an object remains at rest when the vector sum of all external forces acting on it is zero. The downward pull of Earth ($W = mg$) is balanced by the upward contact normal force from the tabletop ($N = mg$).",
    given="Book at rest on a horizontal table.",
    formula="\\sum F_y = N - mg = 0 \\implies N = mg",
    steps="1. Earth exerts downward gravitational force $\\vec{F}_g = -mg\\hat{j}$.\n2. The table compresses slightly at contact and exerts an upward normal force $\\vec{N} = mg\\hat{j}$.\n3. The net external force on the book is $\\vec{F}_{\\text{net}} = \\vec{N} + \\vec{F}_g = 0$.\n4. Because net force is zero, the book remains at rest.",
    tip="Note: The normal force and gravitational force act on the SAME body and cancel out to give equilibrium. They are NOT an action-reaction pair!",
    why_wrong="Option B is wrong because gravity from Earth is an external force on the book."
))

# Q028 - Medium
all_qs.append(make_lom_q(
    num=28,
    question="A body of mass $5\\text{ kg}$ is sliding on a frictionless horizontal floor with a velocity of $10\\text{ m/s}$. The horizontal force required to keep it moving with the same velocity is:",
    options={
        "A": "0 N",
        "B": "50 N",
        "C": "5 N",
        "D": "0.5 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's first law of motion",
    concept="On a frictionless surface, there is no resisting force. By Newton's First Law, no force is required to sustain uniform motion.",
    given="$m = 5\\text{ kg}$, $v = 10\\text{ m/s}$, surface is frictionless.",
    formula="F = ma = m(0) = 0",
    steps="1. Velocity is constant, so acceleration $a = 0$.\n2. Since the floor is frictionless, resistive force is zero.\n3. The net force required to maintain constant velocity is $F = ma = 0\\text{ N}$.",
    tip="Common mistake: Students often multiply $m \\times v$ ($5 \\times 10 = 50$) and choose 50 N. That is momentum (50 kg·m/s), not force!",
    why_wrong="Option B ($50\\text{ N}$) is momentum in magnitude, not force."
))

# Q029 - Hard
all_qs.append(make_lom_q(
    num=29,
    question="A plumb bob hangs from the ceiling of a train carriage. The train moves along a horizontal track with a constant forward acceleration $a$. The angle $\\theta$ that the plumb bob string makes with the vertical at equilibrium is:",
    options={
        "A": "\\tan^{-1}(a/g)",
        "B": "\\sin^{-1}(a/g)",
        "C": "\\tan^{-1}(g/a)",
        "D": "\\cos^{-1}(a/g)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's first law of motion",
    concept="In the accelerating frame of the carriage, the bob experiences pseudo force $ma$ backwards and gravity $mg$ downwards. Tension components balance both forces.",
    given="Train acceleration $a$, gravity $g$.",
    formula="T\\sin\\theta = ma,\\quad T\\cos\\theta = mg \\implies \\tan\\theta = \\frac{a}{g}",
    steps="1. In the carriage frame, the bob is in static equilibrium.\n2. Horizontal balance: $T\\sin\\theta = ma$ (pseudo force).\n3. Vertical balance: $T\\cos\\theta = mg$ (gravity).\n4. Dividing the two equations: $\\frac{T\\sin\\theta}{T\\cos\\theta} = \\frac{ma}{mg} \\implies \\tan\\theta = \\frac{a}{g}$.\n5. Thus, $\\theta = \\tan^{-1}(a/g)$.",
    tip="Memorize: $\\tan\\theta = a/g$. The string tilts opposite to the acceleration of the vehicle!",
    why_wrong="Option C is $\\tan^{-1}(g/a)$, which inverts the ratio."
))

# Q030 - Hard
all_qs.append(make_lom_q(
    num=30,
    question="A heavy stone hanging by a string of breaking strength $T_0$ is pulled downward by another identical string attached to its bottom. If the bottom string is pulled with a sudden sharp jerk, which string breaks first?",
    options={
        "A": "The lower string breaks first because of the stone's inertia",
        "B": "The upper string breaks first because it supports the stone's weight plus the pull",
        "C": "Both strings break simultaneously",
        "D": "Neither string breaks"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's first law of motion",
    concept="When pulled with a sudden jerk (large force over very brief time $\Delta t$), the inertia of the heavy stone prevents it from moving appreciably. The strain builds up almost entirely in the lower string before the upper string experiences the transmitted force.",
    given="Stone hanging by upper string, lower string pulled by sharp jerk.",
    formula="F\\Delta t = m\\Delta v \\implies \\text{for large } m \\text{ and tiny } \\Delta t, \\Delta x \\approx 0",
    steps="1. With a sudden jerk, the time interval is extremely small.\n2. Due to the high inertia of the stone, it does not displace downward in this tiny interval.\n3. Therefore, the tension in the upper string does not increase significantly.\n4. The lower string exceeds its breaking strength first and snaps.\n5. Conversely, a slow steady pull would break the upper string because $T_{\\text{upper}} = T_{\\text{lower}} + mg$.",
    tip="Sharp jerk $\\implies$ Lower string breaks (inertia of mass). Slow, gradual pull $\\implies$ Upper string breaks ($T_{\\text{upper}} = W + F$). Classic NEET conceptual question!",
    why_wrong="Option B occurs only for a slow, steady pull, not a sudden sharp jerk."
))

# Q031 - Hard
all_qs.append(make_lom_q(
    num=31,
    question="Consider two observers: Observer A is in an inertial frame, while Observer B is inside a carousel rotating with constant angular velocity $\\omega$. Observer B observes a hockey puck sliding on frictionless ice. Which observer can apply $\\sum \\vec{F} = m\\vec{a}$ directly without introducing fictitious forces?",
    options={
        "A": "Only Observer A",
        "B": "Only Observer B",
        "C": "Both observers",
        "D": "Neither observer"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's first law of motion",
    concept="Newton's laws of motion are valid only in inertial frames of reference. In rotating frames, fictitious (pseudo) forces—namely centrifugal force and Coriolis force—must be added to apply equations of motion.",
    given="Observer A (inertial), Observer B (rotating with angular velocity $\\omega$).",
    formula="\\vec{F}_{\\text{rot}} = \\vec{F}_{\\text{real}} - m\\vec{A} - 2m(\\vec{\\omega} \\times \\vec{v}_{\\text{rot}}) - m\\vec{\\omega} \\times (\\vec{\\omega} \\times \\vec{r})",
    steps="1. A rotating frame undergoes centripetal acceleration, making it non-inertial.\n2. In Observer B's frame, the puck curves due to Coriolis and centrifugal effects without any real physical interaction.\n3. Therefore, only Observer A (in an inertial frame) can apply $\\sum \\vec{F} = m\\vec{a}$ without fictitious forces.",
    tip="Standard Newton's laws hold ONLY in inertial frames! Any accelerating or rotating frame requires fictitious/pseudo forces.",
    why_wrong="Option C is incorrect because Observer B is in a non-inertial rotating frame."
))

print("Topics 1 & 2 done: 31 questions.")
