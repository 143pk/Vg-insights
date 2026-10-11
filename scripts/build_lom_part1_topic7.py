import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 7: Action-reaction force pairs (Q095 to Q109, 15 questions: 4 Easy, 7 Medium, 4 Hard)
# ==============================================================================

# Q095 - Easy
qs.append(make_lom_q(
    num=95,
    question="Which of the following pairs of forces forms a true Newton's third law action-reaction pair?",
    options={
        "A": "The gravitational force exerted by Earth on the Moon and the gravitational force exerted by the Moon on Earth",
        "B": "The weight of a book resting on a table and the normal reaction exerted by the table on the book",
        "C": "The tension in a string pulling an object upward and the force of gravity pulling it downward",
        "D": "The driving force of an engine on a car and the drag force of air resistance on the car"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Action-reaction force pairs",
    concept="For two forces to constitute a Newton's third law pair: (1) they must be of the same physical nature (e.g., both gravitational), (2) they must act on two different bodies (A on B, and B on A), and (3) they must be strictly equal and opposite.",
    given="Four pairs of forces.",
    formula="\\vec{F}_{AB} = -\\vec{F}_{BA}",
    steps="1. Earth exerts gravitational attraction on Moon; Moon exerts gravitational attraction on Earth.\n2. Both are gravitational forces acting on opposite bodies ($A$ on $B$ and $B$ on $A$).\n3. Hence, they form a true action-reaction pair.\n4. In contrast, the book's weight (Earth on book) and the normal reaction (table on book) both act on the SAME body (the book) and are of different physical natures (gravitational vs electromagnetic contact).",
    tip="Golden test for Third Law pairs: Swap the subject and object! If force 1 is 'Earth on Moon', force 2 MUST be 'Moon on Earth'.",
    why_wrong="Option B is the most classic trap: both act on the book, so they are balancing forces on one body, NOT an action-reaction pair."
))

# Q096 - Easy
qs.append(make_lom_q(
    num=96,
    question="An apple falls freely from a tree toward Earth. Earth exerts a gravitational force $F_1$ on the apple, and the apple exerts a gravitational force $F_2$ on Earth. Which of the following statements is true?",
    options={
        "A": "F_1 = F_2 always",
        "B": "F_1 > F_2 because Earth has vastly greater mass",
        "C": "F_1 < F_2 because the apple is accelerating",
        "D": "F_2 = 0 because the apple has negligible gravitational pull"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Action-reaction force pairs",
    concept="By Newton's law of universal gravitation ($F = G M m / r^2$) and Newton's third law, the gravitational attraction between Earth and the apple is symmetric and strictly equal in magnitude.",
    given="Apple of mass $m$, Earth of mass $M$.",
    formula="F_1 = F_2 = \\frac{G M m}{r^2}",
    steps="1. Earth attracts the apple with force $F_1 = G M m / r^2$.\n2. By Newton's third law, the apple attracts Earth with an equal and opposite force $F_2 = G M m / r^2$.\n3. Therefore, $F_1 = F_2$ exactly.\n4. Earth's acceleration is imperceptible ($a_E = F/M \\approx 10^{-24}\\text{ m/s}^2$) only because $M$ is huge, not because the force is smaller.",
    tip="Forces are EQUAL ($F_1 = F_2$), but accelerations are vastly DIFFERENT ($a_{\\text{apple}} = F/m \\approx 9.8\\text{ m/s}^2$, $a_{\\text{Earth}} = F/M_{\\text{Earth}} \\approx 0$)!",
    why_wrong="Option B confuses force with acceleration."
))

# Q097 - Easy
qs.append(make_lom_q(
    num=97,
    question="When a horse pulls a wagon, what is the reaction force to the force that the horse exerts on the wagon?",
    options={
        "A": "The backward force that the wagon exerts on the horse",
        "B": "The forward friction force exerted by the ground on the horse",
        "C": "The backward friction force exerted by the ground on the wagon",
        "D": "The downward gravitational force on the wagon"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Action-reaction force pairs",
    concept="The reaction force to 'Force exerted by object A on object B' is simply 'Force exerted by object B on object A'.",
    given="Action force: Horse exerts force on wagon.",
    formula="\\text{Action: } \\vec{F}_{H \\to W},\\quad \\text{Reaction: } \\vec{F}_{W \\to H} = -\\vec{F}_{H \\to W}",
    steps="1. Identify the two interacting bodies: Horse ($H$) and Wagon ($W$).\n2. Action: Force exerted by Horse on Wagon ($\\vec{F}_{H \\to W}$).\n3. By Newton's third law, the reaction is the force exerted by Wagon on Horse ($\\vec{F}_{W \\to H}$).\n4. Hence, option A is the correct reaction pair.",
    tip="Simply flip the agent and recipient to identify the exact third-law partner!",
    why_wrong="Option B is the interaction between the horse and the ground, not between the horse and the wagon."
))

# Q098 - Easy
qs.append(make_lom_q(
    num=98,
    question="Two positive point charges $q_1$ and $q_2$ ($q_1 = 4 q_2$) are placed a distance $r$ apart in vacuum. The electrostatic repulsion exerted by $q_1$ on $q_2$ is $F_{12}$, and that exerted by $q_2$ on $q_1$ is $F_{21}$. The ratio $F_{12} / F_{21}$ is:",
    options={
        "A": "1 : 1",
        "B": "4 : 1",
        "C": "1 : 4",
        "D": "16 : 1"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Action-reaction force pairs",
    concept="Coulomb's Law obeys Newton's third law. The electrostatic force between two charges is mutual and symmetric: $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}$.",
    given="$q_1 = 4q_2$, separation $r$.",
    formula="F_{12} = F_{21} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}",
    steps="1. Magnitude of force on $q_2$ by $q_1$: $F_{12} = k \\frac{q_1 q_2}{r^2}$.\n2. Magnitude of force on $q_1$ by $q_2$: $F_{21} = k \\frac{q_2 q_1}{r^2}$.\n3. Since multiplication is commutative, $F_{12} = F_{21}$.\n4. The ratio is $1 : 1$.",
    tip="Electric, gravitational, and magnetic interaction forces between two bodies are ALWAYS 1:1, regardless of how unequal the charges or masses are!",
    why_wrong="Option B is a common trap where students assume the larger charge exerts a larger force."
))

# Q099 - Medium
qs.append(make_lom_q(
    num=99,
    question="A block of mass $m$ rests on the surface of a table on Earth. Consider the following four forces:\n1. $F_1$: Gravitational force exerted by Earth on the block (downward)\n2. $F_2$: Gravitational force exerted by the block on Earth (upward)\n3. $F_3$: Contact normal force exerted by the table on the block (upward)\n4. $F_4$: Contact normal force exerted by the block on the table (downward)\nWhich of the following correctly pairs the action-reaction partners?",
    options={
        "A": "(F_1, F_2) is an action-reaction pair, and (F_3, F_4) is an action-reaction pair",
        "B": "(F_1, F_3) is an action-reaction pair, and (F_2, F_4) is an action-reaction pair",
        "C": "(F_1, F_4) is an action-reaction pair, and (F_2, F_3) is an action-reaction pair",
        "D": "All four forces form a single interconnected action-reaction loop"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Action-reaction force pairs",
    concept="Action-reaction pairs must share the same physical mechanism and operate mutually between two bodies. Gravitational interaction between Earth and block forms $(F_1, F_2)$. Electromagnetic contact interaction between table and block forms $(F_3, F_4)$.",
    given="Four specified forces.",
    formula="\\vec{F}_{\\text{Earth}\\to\\text{Block}} = -\\vec{F}_{\\text{Block}\\to\\text{Earth}},\\quad \\vec{F}_{\\text{Table}\\to\\text{Block}} = -\\vec{F}_{\\text{Block}\\to\\text{Table}}",
    steps="1. $F_1$ is Earth acting on Block; $F_2$ is Block acting on Earth. This is a gravitational action-reaction pair: $(F_1, F_2)$.\n2. $F_3$ is Table acting on Block; $F_4$ is Block acting on Table. This is a contact normal action-reaction pair: $(F_3, F_4)$.\n3. $F_1$ and $F_3$ act on the same body (Block) and cancel for equilibrium, but they are NOT an action-reaction pair.",
    tip="Equilibrium pair $\\neq$ Action-Reaction pair! $F_1$ and $F_3$ cancel each other on the block, but their third-law partners are $F_2$ and $F_4$ respectively.",
    why_wrong="Option B incorrectly pairs the equilibrium forces acting on the same object."
))

# Q100 - Medium
qs.append(make_lom_q(
    num=100,
    question="Two bar magnets, A and B, are placed on a smooth horizontal table with their north poles facing each other. Magnet A has twice the magnetic pole strength of Magnet B ($m_A = 2 m_B$). If they are released from rest, the ratio of the magnetic repulsive force on A to that on B ($F_A / F_B$) is:",
    options={
        "A": "1 : 1",
        "B": "2 : 1",
        "C": "1 : 2",
        "D": "4 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Action-reaction force pairs",
    concept="Magnetic force between two poles obeys Newton's third law. The repulsive force exerted by pole A on pole B is equal and opposite to that exerted by pole B on pole A.",
    given="$m_A = 2m_B$, magnets facing each other.",
    formula="F = \\frac{\\mu_0}{4\\pi} \\frac{m_A m_B}{r^2} \\implies F_A = F_B",
    steps="1. The magnetic force magnitude between two magnetic poles is $F = \\frac{\\mu_0}{4\\pi}\\frac{m_A m_B}{r^2}$.\n2. The product $m_A m_B$ is identical for both magnets.\n3. By Newton's third law, the force on A by B equals the force on B by A.\n4. Hence, the ratio $F_A / F_B = 1 : 1$.",
    tip="No matter what kind of force (gravitational, electrostatic, magnetic, contact), the interaction force ratio between two objects is ALWAYS 1:1!",
    why_wrong="Option B confuses the ratio of pole strengths ($2:1$) with the ratio of forces."
))

# Q101 - Medium
qs.append(make_lom_q(
    num=101,
    question="A bird of mass $0.5\\text{ kg}$ is sitting on a branch of a tree. The branch exerts an upward normal force of $4.9\\text{ N}$ on the bird. What force does the bird exert on the branch? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "4.9 N downwards",
        "B": "4.9 N upwards",
        "C": "9.8 N downwards",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Action-reaction force pairs",
    concept="By Newton's third law, if the branch pushes upward on the bird with contact force $\vec{N}$, the bird pushes downward on the branch with a contact force of identical magnitude: $\vec{F}_{\text{bird on branch}} = -\vec{N}$.",
    given="Upward force on bird $N = 4.9\\text{ N}$.",
    formula="\\vec{F}_{\\text{bird on branch}} = -\\vec{F}_{\\text{branch on bird}}",
    steps="1. Branch on bird: $4.9\\text{ N}$ directed upwards.\n2. By Newton's third law, bird on branch: $4.9\\text{ N}$ directed downwards.\n3. The magnitude is $4.9\\text{ N}$, and the direction is vertically downward.",
    tip="Third law reaction is always equal in magnitude and opposite in direction!",
    why_wrong="Option B has the wrong direction. Option C doubles the force."
))

# Q102 - Medium
qs.append(make_lom_q(
    num=102,
    question="A person of mass $70\\text{ kg}$ steps out of a stationary rowboat of mass $140\\text{ kg}$ onto the riverbank with a horizontal velocity of $2\\text{ m/s}$. With what velocity does the boat move backward?",
    options={
        "A": "1.0 m/s",
        "B": "2.0 m/s",
        "C": "0.5 m/s",
        "D": "4.0 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Action-reaction force pairs",
    concept="When stepping off, the person pushes backward on the boat (action), while the boat pushes forward on the person (reaction). With zero external horizontal force, linear momentum is conserved.",
    given="$m_1 = 70\\text{ kg}$, $v_1 = 2\\text{ m/s}$, $m_2 = 140\\text{ kg}$, initially at rest.",
    formula="m_1 v_1 + m_2 v_2 = 0 \\implies v_2 = -\\frac{m_1 v_1}{m_2}",
    steps="1. Initial horizontal momentum of system is zero ($P_i = 0$).\n2. Forward momentum gained by person: $p_1 = m_1 v_1 = 70 \\times 2 = 140\\text{ kg}\\cdot\\text{m/s}$.\n3. By momentum conservation: $p_2 = -140\\text{ kg}\\cdot\\text{m/s}$.\n4. Velocity of the boat: $v_2 = -\\frac{140}{140} = -1.0\\text{ m/s}$.\n5. The boat moves backward with a speed of $1.0\\text{ m/s}$.",
    tip="Recoil speed $v_2 = v_1 \\times (m_1 / m_2) = 2 \\times (70 / 140) = 1.0\\text{ m/s}$!",
    why_wrong="Option B assumes the boat recoils with the same speed as the person, ignoring mass ratio."
))

# Q103 - Medium
qs.append(make_lom_q(
    num=103,
    question="A heavy truck and a lightweight compact car collide head-on. Which vehicle experiences a greater magnitude of force, and which experiences a greater magnitude of acceleration?",
    options={
        "A": "Both experience the same force; the car experiences greater acceleration",
        "B": "The truck exerts greater force; the car experiences greater acceleration",
        "C": "Both experience the same force; both experience the same acceleration",
        "D": "The car exerts greater force; the truck experiences greater acceleration"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Action-reaction force pairs",
    concept="Newton's third law guarantees $|\\vec{F}_{\\text{truck on car}}| = |\\vec{F}_{\\text{car on truck}}|$. By Newton's second law ($a = F/m$), the car (having smaller mass) experiences a vastly greater acceleration.",
    given="Head-on collision between heavy truck ($M$) and light car ($m$).",
    formula="F_{\\text{car}} = F_{\\text{truck}} = F,\\quad a_{\\text{car}} = \\frac{F}{m} \\gg a_{\\text{truck}} = \\frac{F}{M}",
    steps="1. By Newton's third law, the force on the car by the truck is identical in magnitude to the force on the truck by the car.\n2. Acceleration is inversely proportional to mass: $a = F/m$.\n3. Since $m_{\\text{car}} \\ll M_{\\text{truck}}$, the car undergoes a much greater acceleration (and deceleration damage).",
    tip="Forces are EQUAL; accelerations are INVERSE to masses! The lighter car suffers greater acceleration and catastrophic damage.",
    why_wrong="Option B is the intuitive misconception that the heavier vehicle exerts more force."
))

# Q104 - Medium
qs.append(make_lom_q(
    num=104,
    question="A block of mass $m = 5\\text{ kg}$ is pulled upward by a vertical cord with an acceleration of $2\\text{ m/s}^2$. What is the tension in the cord, and what downward force does the cord exert on the hand pulling it? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "Tension = 59 N; Downward force on hand = 59 N",
        "B": "Tension = 49 N; Downward force on hand = 49 N",
        "C": "Tension = 59 N; Downward force on hand = 49 N",
        "D": "Tension = 39 N; Downward force on hand = 39 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Action-reaction force pairs",
    concept="The block accelerates upward under tension $T$ and gravity $mg$: $T - mg = ma \\implies T = m(g + a)$. By Newton's third law, the cord pulls downward on the pulling hand with the exact same tension $T$.",
    given="$m = 5\\text{ kg}$, $a = 2\\text{ m/s}^2$, $g = 9.8\\text{ m/s}^2$.",
    formula="T = m(g + a),\\quad F_{\\text{cord on hand}} = T",
    steps="1. FBD on block: $T - mg = ma \\implies T = 5(9.8 + 2) = 5(11.8) = 59\\text{ N}$.\n2. The tension throughout the light cord is $59\\text{ N}$.\n3. By Newton's third law, the cord pulls downward on the hand with an equal force of $59\\text{ N}$.",
    tip="In an ideal light string, tension is the same at both ends! Force on hand = Tension = $m(g+a)$.",
    why_wrong="Option B ($49\\text{ N}$) is for zero acceleration ($a = 0$)."
))

# Q105 - Medium
qs.append(make_lom_q(
    num=105,
    question="A person pushes a refrigerator across a kitchen floor at a constant speed of $0.5\\text{ m/s}$ with a horizontal force of $200\\text{ N}$. What is the magnitude of the friction force that the floor exerts on the refrigerator, and what force does the refrigerator exert on the person?",
    options={
        "A": "Friction from floor = 200 N; Force on person = 200 N backward",
        "B": "Friction from floor = 100 N; Force on person = 200 N backward",
        "C": "Friction from floor = 200 N; Force on person = 0 N",
        "D": "Friction from floor = 400 N; Force on person = 200 N backward"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Action-reaction force pairs",
    concept="Constant speed implies zero acceleration ($a = 0$), so applied force balances kinetic friction on the refrigerator: $f_k = F = 200\\text{ N}$. By Newton's third law, the refrigerator exerts an equal and opposite force of $200\\text{ N}$ backward on the person.",
    given="$F_{\\text{push}} = 200\\text{ N}$, $v = \\text{constant}$, $a = 0$.",
    formula="F_{\\text{push}} - f_k = 0 \\implies f_k = 200\\text{ N};\\quad F_{\\text{refrig on person}} = -F_{\\text{push}}",
    steps="1. Net horizontal force on refrigerator is zero because $a = 0$.\n2. $F_{\\text{push}} - f_k = 0 \\implies f_k = 200\\text{ N}$ (friction from floor on refrigerator).\n3. By Newton's third law, the refrigerator pushes back on the person with an equal and opposite force of $200\\text{ N}$.",
    tip="Constant velocity $\\implies F_{\\text{push}} = f_k$. Action-reaction pair between person and fridge is always equal ($200\\text{ N}$)!",
    why_wrong="Option C violates Newton's third law by claiming the refrigerator exerts zero force on the person."
))

# Q106 - Hard
qs.append(make_lom_q(
    num=106,
    question="Consider a satellite of mass $m$ orbiting Earth (mass $M$) in a circular orbit of radius $r$. The satellite feels a gravitational pull toward Earth of magnitude $F$. Which of the following statements about the action-reaction pair is INCORRECT?",
    options={
        "A": "Earth does not accelerate at all in response to the satellite's pull",
        "B": "The satellite exerts an equal gravitational pull F directed toward the satellite on Earth",
        "C": "Both forces act along the line connecting the centers of mass of the two bodies",
        "D": "Both forces have the exact same physical origin (universal gravitation)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Action-reaction force pairs",
    concept="By Newton's third law and universal gravitation, Earth experiences an identical force $F$ directed toward the satellite. Consequently, Earth accelerates toward the satellite with acceleration $a_E = F/M$. Although $a_E$ is tiny ($10^{-20}\\text{ m/s}^2$), it is strictly non-zero.",
    given="Satellite in orbit around Earth.",
    formula="F = \\frac{GMm}{r^2},\\quad a_E = \\frac{F}{M} > 0",
    steps="1. Force on satellite: $F = GMm/r^2$ toward Earth.\n2. By Newton's third law, force on Earth is $F = GMm/r^2$ toward the satellite.\n3. By Newton's second law, Earth accelerates toward the satellite with $a_E = F/M$.\n4. Statement A claims Earth does not accelerate at all, which is scientifically false. Hence, A is the incorrect statement.",
    tip="Earth DOES accelerate in response to an orbiting satellite or falling apple! Its acceleration is just practically unmeasurable because Earth's mass $M \\approx 6 \\times 10^{24}\\text{ kg}$ is astronomical.",
    why_wrong="Statements B, C, and D are all completely true descriptions of Newton's third law."
))

# Q107 - Hard
qs.append(make_lom_q(
    num=107,
    question="Two blocks A and B of masses $m_A = 2\\text{ kg}$ and $m_B = 3\\text{ kg}$ are in contact on a frictionless horizontal surface. A horizontal force $F = 10\\text{ N}$ is applied to block A pushing toward block B. What is the contact force between block A and block B?",
    options={
        "A": "6 N",
        "B": "4 N",
        "C": "10 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Action-reaction force pairs",
    concept="Both blocks move together with common acceleration $a = \\frac{F}{m_A + m_B}$. The normal contact force $N$ between them is the sole horizontal force accelerating block B: $N = m_B a$.",
    given="$m_A = 2\\text{ kg}$, $m_B = 3\\text{ kg}$, $F = 10\\text{ N}$ applied on A.",
    formula="a = \\frac{F}{m_A + m_B},\\quad N = m_B a",
    steps="1. Common acceleration of the combined system:\n   $$a = \\frac{10\\text{ N}}{2 + 3\\text{ kg}} = \\frac{10}{5} = 2\\text{ m/s}^2$$\n2. Isolate block B: The only horizontal force acting on B is the contact force $N$ from A.\n3. Newton's second law for B: $N = m_B a = 3 \\times 2 = 6\\text{ N}$.\n4. Check on block A: $F - N = m_A a \\implies 10 - 6 = 2(2) = 4\\text{ N}$ (consistent!).",
    tip="Contact force between two blocks: $N = \\frac{m_{\\text{pushed}}}{M_{\\text{total}}} \\times F = \\frac{3}{2 + 3} \\times 10 = 6\\text{ N}$!",
    why_wrong="Option B ($4\\text{ N}$) is the contact force if $F$ was applied to block B pushing toward block A."
))

# Q108 - Hard
qs.append(make_lom_q(
    num=108,
    question="In the previous two-block problem, if the same horizontal force $F = 10\\text{ N}$ is applied to block B pushing toward block A, what is the new contact force between the blocks?",
    options={
        "A": "4 N",
        "B": "6 N",
        "C": "10 N",
        "D": "5 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Action-reaction force pairs",
    concept="When pushing from block B, the contact force now accelerates block A ($m_A = 2\\text{ kg}$) with the same system acceleration $a = 2\\text{ m/s}^2$.",
    given="$m_A = 2\\text{ kg}$, $m_B = 3\\text{ kg}$, $F = 10\\text{ N}$ applied on B.",
    formula="a = \\frac{F}{m_A + m_B} = 2\\text{ m/s}^2,\\quad N' = m_A a",
    steps="1. Acceleration remains $a = \\frac{10}{2+3} = 2\\text{ m/s}^2$.\n2. Now block A is pushed by contact force $N'$ from B.\n3. FBD on block A: $N' = m_A a = 2 \\times 2 = 4\\text{ N}$.\n4. Thus, the contact force is $4\\text{ N}$.",
    tip="Pushing from smaller block $\\implies$ larger contact force ($6\\text{ N}$). Pushing from larger block $\\implies$ smaller contact force ($4\\text{ N}$)!",
    why_wrong="Option B ($6\\text{ N}$) was the contact force when pushing from block A."
))

# Q109 - Hard
qs.append(make_lom_q(
    num=109,
    question="A bird of mass $m$ is hovering inside a closed cage of mass $M$ that hangs from a spring scale. If the bird accelerates vertically upward with acceleration $a$, what will the spring scale read during this acceleration?",
    options={
        "A": "(M + m)g + ma",
        "B": "(M + m)g - ma",
        "C": "(M + m)g",
        "D": "Mg + ma"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Action-reaction force pairs",
    concept="For the bird to accelerate upward with $a$, the upward aerodynamic force from the air column must be $F_{\\text{lift}} = m(g + a)$. By Newton's third law, the air pushes downward on the cage floor with $F_{\\text{down}} = m(g + a)$.",
    given="Cage mass $M$, bird mass $m$, bird accelerates upward at $a$.",
    formula="N_{\\text{scale}} = Mg + F_{\\text{air on floor}} = Mg + m(g + a) = (M + m)g + ma",
    steps="1. FBD on bird: $F_{\\text{lift}} - mg = ma \\implies F_{\\text{lift}} = m(g + a)$ upwards.\n2. By Newton's third law, the bird pushes downward on the enclosed air with $m(g+a)$.\n3. The air transmits this downward force to the floor of the closed cage.\n4. FBD on cage: $T_{\\text{scale}} - Mg - m(g + a) = 0$.\n5. Therefore, $T_{\\text{scale}} = (M + m)g + ma$.",
    tip="System COM method: $F_{\\text{ext}} - (M+m)g = m a_{\\text{cm}} \\implies F_{\\text{ext}} = (M+m)g + ma$! Instantaneous acceleration of any internal part changes the scale reading.",
    why_wrong="Option B would be the scale reading if the bird accelerated DOWNWARD with acceleration $a$."
))

print("Topic 7 done: 15 questions.")
