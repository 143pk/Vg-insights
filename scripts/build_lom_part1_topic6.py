import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 6: Newton's third law of motion (Q080 to Q094, 15 questions: 4 Easy, 8 Medium, 3 Hard)
# ==============================================================================

# Q080 - Easy
qs.append(make_lom_q(
    num=80,
    question="Newton's third law of motion states that for every action, there is an equal and opposite reaction. These action and reaction forces:",
    options={
        "A": "Act on two different interacting bodies simultaneously",
        "B": "Act on the same body and cancel each other out",
        "C": "Act one after the other with a slight time lag",
        "D": "Act along perpendicular directions"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's third law of motion",
    concept="Newton's third law ($\vec{F}_{AB} = -\vec{F}_{BA}$) states that forces always occur in matched pairs between two interacting bodies. They act simultaneously on two different bodies, which is why they never cancel each other out to produce equilibrium.",
    given="Newton's third law statement.",
    formula="\\vec{F}_{AB} = -\\vec{F}_{BA}",
    steps="1. Body A exerts force $\\vec{F}_{BA}$ on body B.\n2. Body B simultaneously exerts an equal and opposite force $\\vec{F}_{AB}$ on body A.\n3. Because they act on two DIFFERENT bodies, they cannot cancel each other.\n4. There is no cause-and-effect delay; both forces exist at the exact same instant.",
    tip="Golden rule for NEET: Action and reaction NEVER act on the same body! Therefore, they can NEVER cancel each other out.",
    why_wrong="Option B is the most common student error; forces can only cancel if they act on the same body."
))

# Q081 - Easy
qs.append(make_lom_q(
    num=81,
    question="When a person walks forward on level ground, the force that propels the person forward is:",
    options={
        "A": "The forward static friction exerted by the ground on the person's feet",
        "B": "The backward muscular force exerted by the feet on the ground",
        "C": "The normal reaction force of the ground acting upwards",
        "D": "The gravitational force of Earth"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's third law of motion",
    concept="To walk forward, a person pushes backward on the ground with their feet. By Newton's third law, the ground exerts an equal and opposite forward friction force on the feet, accelerating the person forward.",
    given="Person walking forward.",
    formula="F_{\\text{propulsion}} = f_{\\text{ground on foot}} = -F_{\\text{foot on ground}}",
    steps="1. The person's foot pushes backward against the rough ground.\n2. By Newton's third law, the ground pushes forward on the foot with an equal static friction force.\n3. This forward friction force is the external force that accelerates the person forward.",
    tip="Friction is often thought to only oppose motion, but during walking, running, and driving, static friction is the ESSENTIAL force that CAUSES forward acceleration!",
    why_wrong="Option B is an internal muscular force acting ON the ground, not ON the person."
))

# Q082 - Easy
qs.append(make_lom_q(
    num=82,
    question="A swimmer pushes water backward with their arms and legs to swim forward. This is a direct consequence of:",
    options={
        "A": "Newton's third law of motion",
        "B": "Newton's first law of motion only",
        "C": "Pascal's principle",
        "D": "Archimedes' principle only"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's third law of motion",
    concept="The swimmer exerts a backward force on the water ($F_{\\text{action}}$). By Newton's third law, the water exerts an equal and opposite forward thrust on the swimmer ($F_{\\text{reaction}}$).",
    given="Swimming mechanics.",
    formula="\\vec{F}_{\\text{water on swimmer}} = -\\vec{F}_{\\text{swimmer on water}}",
    steps="1. Swimmer pushes water backward.\n2. By Newton's third law, water exerts a reaction force forward on the swimmer.\n3. This reaction force propels the swimmer forward through the water.",
    tip="Rowing a boat, swimming, and jet propulsion all rely directly on pushing a fluid backward to receive a forward reaction force!",
    why_wrong="Option D (Archimedes' principle) provides upward buoyant force, but forward thrust comes from Newton's third law."
))

# Q083 - Easy
qs.append(make_lom_q(
    num=83,
    question="When a bullet is fired from a rifle, the rifle recoils backward. Which of the following is correct regarding the forces experienced?",
    options={
        "A": "The rifle exerts the exact same magnitude of force on the bullet as the bullet exerts on the rifle",
        "B": "The rifle exerts a greater force on the bullet because the bullet accelerates faster",
        "C": "The bullet exerts a greater force on the rifle because of high pressure",
        "D": "The force on the bullet is infinite"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's third law of motion",
    concept="Newton's third law mandates that the force on the bullet and the force on the rifle are strictly equal in magnitude and opposite in direction at every instant during firing: $|\vec{F}_b| = |\vec{F}_r|$.",
    given="Rifle firing a bullet.",
    formula="\\vec{F}_{\\text{rifle on bullet}} = -\\vec{F}_{\\text{bullet on rifle}}",
    steps="1. Expanding combustion gases exert equal and opposite forces on the bullet and the rifle breech.\n2. By Newton's third law, the magnitude of force on both is identical.\n3. The bullet accelerates much more than the rifle simply because its mass is vastly smaller ($a_b = F/m_b \\gg a_r = F/M_r$).",
    tip="Equal forces do NOT produce equal accelerations! $a = F/m$, so the smaller mass receives the larger acceleration.",
    why_wrong="Option B confuses force with acceleration ($a = F/m$)."
))

# Q084 - Medium
qs.append(make_lom_q(
    num=84,
    question="A horse pulls a cart along a level road with a constant velocity. If the horse exerts a forward force $\\vec{F}_{HC}$ on the cart, the cart exerts an equal and opposite backward force $\\vec{F}_{CH}$ on the horse. Why does the cart move forward?",
    options={
        "A": "Because the forward friction force exerted by the ground on the horse's hooves exceeds the backward friction force exerted by the ground on the cart's wheels",
        "B": "Because the horse pulls the cart before the cart can react",
        "C": "Because the force exerted by the horse is slightly greater than the reaction from the cart",
        "D": "Because the mass of the horse is greater than the mass of the cart"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="To analyze the motion of the horse-cart system, consider the external horizontal forces: the forward force from the ground on the horse's hooves ($f_H$) and the backward rolling resistance on the cart ($f_C$). Motion occurs when $f_H \\ge f_C$.",
    given="Horse and cart moving forward.",
    formula="\\sum F_{\\text{system}} = f_H - f_C = (M_H + M_C) a",
    steps="1. The force between horse and cart is an internal action-reaction pair ($\vec{F}_{HC} = -\vec{F}_{CH}$) and cannot accelerate the combined system.\n2. The horse pushes backward on the ground, so the ground pushes the horse forward with static friction $f_H$.\n3. The cart experiences backward ground resistance $f_C$.\n4. For forward motion or acceleration, the ground's forward force on the horse must balance or exceed the ground's backward resistance on the cart.",
    tip="Classic paradox solved: Never look at internal action-reaction forces between components! Look at external contact forces with the ground.",
    why_wrong="Option C is fundamentally false; Newton's third law requires $|\vec{F}_{HC}| = |\vec{F}_{CH}|$ unconditionally."
))

# Q085 - Medium
qs.append(make_lom_q(
    num=85,
    question="A helicopter of mass $M = 2000\\text{ kg}$ hovers stationary in mid-air. What downward force must the helicopter's rotor blades exert on the air column beneath them? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "19600 N",
        "B": "2000 N",
        "C": "0 N",
        "D": "39200 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="To hover stationary ($a = 0$), the upward lift force on the helicopter must balance its weight: $F_{\\text{lift}} = Mg$. By Newton's third law, the rotor blades push downward on the air with an equal force of magnitude $Mg$.",
    given="$M = 2000\\text{ kg}$, $g = 9.8\\text{ m/s}^2$, $a = 0$.",
    formula="F_{\\text{air on rotor}} = Mg,\\quad F_{\\text{rotor on air}} = F_{\\text{air on rotor}} = Mg",
    steps="1. Weight of the helicopter: $W = Mg = 2000 \\times 9.8 = 19600\\text{ N}$ downwards.\n2. For hovering in equilibrium, the upward aerodynamic lift must be $F_{\\text{lift}} = 19600\\text{ N}$.\n3. By Newton's third law, the blades push down on the air with an equal force of $19600\\text{ N}$.",
    tip="Hovering $\\implies$ Lift = Weight. By Third Law, force on air = force on helicopter = $Mg$!",
    why_wrong="Option B ($2000\\text{ N}$) confuses mass (2000 kg) with weight."
))

# Q086 - Medium
qs.append(make_lom_q(
    num=86,
    question="A man of mass $m_1 = 60\\text{ kg}$ and a boy of mass $m_2 = 30\\text{ kg}$ are standing on frictionless ice facing each other. The man pushes the boy with a force of $120\\text{ N}$ for $0.5\\text{ s}$. What are the accelerations of the boy and the man during the push?",
    options={
        "A": "Boy: 4 m/s^2; Man: 2 m/s^2",
        "B": "Boy: 4 m/s^2; Man: 4 m/s^2",
        "C": "Boy: 2 m/s^2; Man: 4 m/s^2",
        "D": "Boy: 2 m/s^2; Man: 1 m/s^2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="By Newton's third law, the boy experiences a forward force of $120\\text{ N}$, while the man simultaneously experiences a backward reaction force of $120\\text{ N}$. Accelerations are determined by $a = F/m$.",
    given="$F = 120\\text{ N}$, $m_1 = 60\\text{ kg}$, $m_2 = 30\\text{ kg}$.",
    formula="a_{\\text{boy}} = \\frac{F}{m_2},\\quad a_{\\text{man}} = \\frac{F}{m_1}",
    steps="1. Force on boy: $F = 120\\text{ N} \\implies a_{\\text{boy}} = \\frac{120\\text{ N}}{30\\text{ kg}} = 4\\text{ m/s}^2$.\n2. By Newton's third law, reaction force on man is also $120\\text{ N}$ (in opposite direction).\n3. Acceleration of man: $a_{\\text{man}} = \\frac{120\\text{ N}}{60\\text{ kg}} = 2\\text{ m/s}^2$.\n4. Therefore, $a_{\\text{boy}} = 4\\text{ m/s}^2$ and $a_{\\text{man}} = 2\\text{ m/s}^2$.",
    tip="Equal forces, unequal masses $\\implies$ accelerations are in the inverse ratio of masses: $a_1/a_2 = m_2/m_1 = 30/60 = 1/2$!",
    why_wrong="Option B assumes equal accelerations, which violates $a = F/m$ for unequal masses."
))

# Q087 - Medium
qs.append(make_lom_q(
    num=87,
    question="In the previous problem, what are the velocities of the boy and the man immediately after the 0.5 s push ends?",
    options={
        "A": "Boy: 2 m/s; Man: 1 m/s in opposite direction",
        "B": "Boy: 4 m/s; Man: 2 m/s in opposite direction",
        "C": "Boy: 1 m/s; Man: 0.5 m/s in opposite direction",
        "D": "Boy: 2 m/s; Man: 2 m/s in opposite direction"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="Velocity gained from rest under constant acceleration is $v = a t$, or using impulse $v = J/m$ where $J = F \\Delta t$.",
    given="$F = 120\\text{ N}$, $\\Delta t = 0.5\\text{ s}$, $m_1 = 60\\text{ kg}$, $m_2 = 30\\text{ kg}$.",
    formula="J = F \\Delta t = 120 \\times 0.5 = 60\\text{ N}\\cdot\\text{s},\\quad v_1 = \\frac{J}{m_1},\\quad v_2 = \\frac{J}{m_2}",
    steps="1. Total impulse exchanged: $J = 120 \\times 0.5 = 60\\text{ N}\\cdot\\text{s}$.\n2. Velocity of boy: $v_{\\text{boy}} = \\frac{60}{30} = 2\\text{ m/s}$.\n3. Velocity of man: $v_{\\text{man}} = \\frac{60}{60} = 1\\text{ m/s}$ in the opposite direction.\n4. Check momentum conservation: $m_1 v_1 + m_2 v_2 = 60(-1) + 30(2) = 0$ (conserved!).",
    tip="Impulse $J = F \\Delta t = 60\\text{ N}\\cdot\\text{s}$. Both get $60\\text{ kg}\\cdot\\text{m/s}$ of momentum in opposite directions!",
    why_wrong="Option B is the acceleration values from the previous question, not velocities."
))

# Q088 - Medium
qs.append(make_lom_q(
    num=88,
    question="A heavy iron ball of mass $M$ hangs from the ceiling by a wire. A small bird of mass $m$ collides with the ball and bounces off. During the collision, the magnitude of the force exerted by the bird on the ball is $F_1$, and that exerted by the ball on the bird is $F_2$. Which of the following is strictly true?",
    options={
        "A": "F_1 = F_2 always",
        "B": "F_2 > F_1 because the iron ball is much heavier",
        "C": "F_1 > F_2 because the bird was moving faster",
        "D": "F_1 = F_2 only if the collision is perfectly elastic"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="Newton's third law applies universally to all collisions, regardless of masses, velocities, or whether the collision is elastic or inelastic. The interaction forces are strictly equal in magnitude at every instant.",
    given="Collision between bird of mass $m$ and iron ball of mass $M$.",
    formula="\\vec{F}_{\\text{bird on ball}} = -\\vec{F}_{\\text{ball on bird}} \\implies F_1 = F_2",
    steps="1. By Newton's third law, every action has an equal and opposite reaction.\n2. The force exerted by the bird on the ball equals the force exerted by the ball on the bird.\n3. This equality holds true whether masses are equal or disparate, and whether the collision is elastic or inelastic.\n4. Hence, $F_1 = F_2$ always.",
    tip="Universal NEET rule: Action and reaction magnitudes are ALWAYS identical ($F_1 = F_2$), no matter how large the mass difference is!",
    why_wrong="Option B confuses force with effect: the bird suffers much more damage because its acceleration is vastly larger ($a = F/m$)."
))

# Q089 - Medium
qs.append(make_lom_q(
    num=89,
    question="A student presses a book against a vertical rough wall with a horizontal force $F$ so that the book does not slip down. The normal reaction force exerted by the wall on the book is:",
    options={
        "A": "Equal in magnitude to F",
        "B": "Equal in magnitude to the weight of the book",
        "C": "Equal to \\mu F",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="Along the horizontal axis, the book has zero acceleration. Therefore, the normal force from the wall balances the applied horizontal pushing force: $N = F$.",
    given="Book held stationary against vertical wall with horizontal force $F$.",
    formula="\\sum F_x = F - N = 0 \\implies N = F",
    steps="1. Apply equilibrium along the horizontal axis ($x$): $F_{\\text{applied}} - N = 0$.\n2. Thus, the normal reaction of the wall on the book is $N = F$.\n3. Along the vertical axis ($y$), static friction balances weight: $f_s = mg$.\n4. Therefore, the normal force equals $F$.",
    tip="Normal force is perpendicular to the contact surface! Here the surface is vertical, so normal force is horizontal and equals $F$, NOT $mg$!",
    why_wrong="Option B is only true for a horizontal surface. On a vertical wall, normal force is horizontal."
))

# Q090 - Medium
qs.append(make_lom_q(
    num=90,
    question="A garden sprinkler rotates automatically when water sprays out of its nozzles. This rotation is caused by:",
    options={
        "A": "The backward reaction force exerted by the exiting water jets on the sprinkler nozzles",
        "B": "The forward pressure of water entering the pipe",
        "C": "Atmospheric air pushing against the nozzles",
        "D": "Centrifugal force on the water"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="When water is expelled tangentially from the bent nozzle tips, it carries angular momentum. By Newton's third law, the water exerts an equal and opposite reactive torque on the nozzle arms, causing rotation.",
    given="Barker's mill / garden sprinkler.",
    formula="\\tau_{\\text{reaction}} = r \\times F_{\\text{thrust}} = r \\left( v \\frac{dm}{dt} \\right)",
    steps="1. Water exits the nozzles at speed $v$ in a tangential direction.\n2. By Newton's third law, the water exerts an equal and opposite reaction force (thrust) on the nozzle.\n3. This creates a net torque $\\tau = r F$ about the central axis, rotating the sprinkler.",
    tip="Barker's mill / rotary lawn sprinkler is a rotational demonstration of Newton's third law and conservation of angular momentum!",
    why_wrong="Option C: Atmospheric pressure opposes rotation; it does not drive it."
))

# Q091 - Medium
qs.append(make_lom_q(
    num=91,
    question="A tug-of-war match is won by Team A over Team B. What was the decisive external force that allowed Team A to win?",
    options={
        "A": "The greater backward force exerted by the ground on Team A's feet compared to Team B's feet",
        "B": "The greater tension in Team A's half of the rope compared to Team B's half",
        "C": "The greater force exerted by Team A directly on Team B",
        "D": "The greater weight of Team A pulling the rope down"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's third law of motion",
    concept="Assuming a light rope, tension is virtually uniform throughout ($T_A = T_B$). The winning team is determined by who exerts a greater backward push on the ground, thereby receiving a greater forward reaction from the ground.",
    given="Tug-of-war game between two teams.",
    formula="F_{\\text{net}} = f_{\\text{ground on A}} - f_{\\text{ground on B}}",
    steps="1. For an ideal light rope, tension is the same on both teams ($T$).\n2. Team A experiences forward force from rope $T$ and backward static friction from ground $f_A$.\n3. Team B experiences forward force from rope $T$ and backward static friction from ground $f_B$.\n4. The team that pushes the ground harder receives a larger ground reaction force ($f_A > f_B$), accelerating the entire system toward Team A.",
    tip="Tug-of-war is NOT won by pulling harder on the rope (tension is the same at both ends!). It is won by pushing harder on the GROUND!",
    why_wrong="Option B is wrong because in an ideal rope, tension is identical throughout."
))

# Q092 - Hard
qs.append(make_lom_q(
    num=92,
    question="A spring balance has two identical masses of $5\\text{ kg}$ hanging from either side over frictionless pulleys, pulling on opposite ends of the balance. What does the spring balance read? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "5 kg (or 49 N)",
        "B": "10 kg (or 98 N)",
        "C": "0 kg (or 0 N)",
        "D": "2.5 kg (or 24.5 N)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's third law of motion",
    concept="A spring balance measures the tension $T$ running through it. In ordinary use, one end is fixed to a wall (which pulls with force $T$) while a mass hangs from the other. Pulling both ends with $5\\text{ kg}$ weight ($49\\text{ N}$) creates a tension of exactly $49\\text{ N}$.",
    given="Two $5\\text{ kg}$ masses pulling on opposite ends of a spring balance.",
    formula="T = mg = 5 \\times 9.8 = 49\\text{ N}",
    steps="1. When a spring balance hangs from a ceiling with a $5\\text{ kg}$ mass, the ceiling pulls upward with $49\\text{ N}$ and the mass pulls downward with $49\\text{ N}$. The balance reads $5\\text{ kg}$.\n2. Replacing the rigid ceiling with a second $5\\text{ kg}$ mass hanging over a pulley provides the exact same $49\\text{ N}$ reaction force.\n3. The tension inside the spring balance is $T = 49\\text{ N}$.\n4. Therefore, the balance reading is $5\\text{ kg}$ (or $49\\text{ N}$).",
    tip="Classic NEET Trap: Two equal forces $F$ pulling on opposite ends of a spring balance yield a reading of $F$, NOT $2F$ and NOT zero!",
    why_wrong="Option B ($10\\text{ kg}$) is the classic error of adding the two forces. Option C ($0$) wrongly assumes they cancel inside the measuring spring."
))

# Q093 - Hard
qs.append(make_lom_q(
    num=93,
    question="A rocket burns fuel at a constant rate $r = \\frac{dm}{dt}$ and expels gas at a constant relative velocity $u$. The rocket is launched vertically upward from the surface of Earth. The equation governing the rocket's acceleration at time $t$ is:",
    options={
        "A": "a(t) = \\frac{u r}{m_0 - r t} - g",
        "B": "a(t) = \\frac{u r}{m_0} - g",
        "C": "a(t) = \\frac{u r}{m_0 - r t} + g",
        "D": "a(t) = \\frac{u r}{m_0 + r t} - g"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's third law of motion",
    concept="By Newton's third law and momentum conservation, the upward thrust on the rocket is $F_{\\text{thrust}} = u \\frac{dm}{dt} = u r$. At time $t$, the remaining mass is $m(t) = m_0 - r t$. Net upward force is $F_{\\text{thrust}} - m(t)g$.",
    given="Thrust $F_{\\text{thrust}} = u r$, mass $m(t) = m_0 - r t$, gravity $g$.",
    formula="F_{\\text{net}} = F_{\\text{thrust}} - m(t)g = m(t)a(t)",
    steps="1. Upward thrust from expelled gas: $F_{\\text{thrust}} = u r$.\n2. Downward weight: $W(t) = m(t) g = (m_0 - r t) g$.\n3. Newton's second law: $F_{\\text{net}} = u r - (m_0 - r t)g = (m_0 - r t) a(t)$.\n4. Divide by $m(t)$:\n   $$a(t) = \\frac{u r}{m_0 - r t} - g$$.",
    tip="Notice that as fuel burns ($t$ increases), the denominator $(m_0 - rt)$ shrinks, so the acceleration of the rocket continuously INCREASES!",
    why_wrong="Option B assumes the rocket mass remains constant at $m_0$, which ignores fuel consumption."
))

# Q094 - Hard
qs.append(make_lom_q(
    num=94,
    question="A cannon of mass $M$ rests on a frictionless horizontal surface. It fires a cannonball of mass $m$ with velocity $\\vec{v}_{b/c}$ relative to the cannon barrel at an angle $\\theta$ to the horizontal. What is the horizontal recoil speed $V$ of the cannon relative to the ground?",
    options={
        "A": "\\frac{m v_{b/c} \\cos\\theta}{M + m}",
        "B": "\\frac{m v_{b/c} \\cos\\theta}{M}",
        "C": "\\frac{m v_{b/c} \\sin\\theta}{M + m}",
        "D": "\\frac{M v_{b/c} \\cos\\theta}{M + m}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's third law of motion",
    concept="Relative velocity: If the cannon recoils with speed $V$ to the left, the ball's horizontal velocity relative to ground is $v_{bx} = v_{b/c}\\cos\\theta - V$. Apply conservation of horizontal linear momentum.",
    given="Mass of cannon $M$, ball $m$, muzzle velocity relative to cannon $v_{b/c}$ at angle $\\theta$.",
    formula="P_{ix} = 0 = m(v_{b/c}\\cos\\theta - V) - M V",
    steps="1. Total horizontal momentum before firing is zero ($P_{ix} = 0$).\n2. Let the cannon's recoil velocity relative to ground be $-V\\hat{i}$.\n3. The horizontal velocity of the ball relative to ground is $(v_{b/c}\\cos\\theta - V)\\hat{i}$.\n4. Conserve horizontal momentum:\n   $$m(v_{b/c}\\cos\\theta - V) - MV = 0$$\n   $$m v_{b/c}\\cos\\theta - mV - MV = 0$$\n   $$(M + m)V = m v_{b/c}\\cos\\theta$$\n5. Solve for $V$: $V = \\frac{m v_{b/c}\\cos\\theta}{M + m}$.",
    tip="Watch the relative velocity carefully: If muzzle speed is given RELATIVE TO CANNON, the denominator is $(M + m)$! If given relative to ground, denominator would be $M$.",
    why_wrong="Option B assumes the muzzle speed was given relative to the ground, which overlooks the cannon's recoil."
))

print("Topic 6 done: 15 questions.")
