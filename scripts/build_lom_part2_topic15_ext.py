import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 15 Extension: Contact forces and System dynamics (Q235 to Q250: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q235: Easy
qs.append(make_lom_q(
    num=235,
    question="Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are placed in contact on a smooth horizontal surface. A horizontal force $F = 10\\text{ N}$ is applied to $m_1$ pushing towards $m_2$. What is the magnitude of the contact force between the two blocks?",
    options={
        "A": "6 N",
        "B": "4 N",
        "C": "10 N",
        "D": "2 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="When blocks are in contact and accelerate together without slipping, the common acceleration is $a = F / (m_1 + m_2)$. The contact force $N_{12}$ on $m_2$ provides the sole horizontal force accelerating $m_2$: $N_{12} = m_2 a$.",
    given="Masses $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, applied force $F = 10\\text{ N}$, smooth surface (frictionless).",
    formula="Common acceleration $a = \\frac{F}{m_1 + m_2}$; Contact force $N = m_2 a = \\frac{m_2}{m_1 + m_2} F$.",
    steps="1. Total mass of the system: $M = m_1 + m_2 = 2 + 3 = 5\\text{ kg}$.\n2. Common acceleration of the two blocks: $a = \\frac{F}{M} = \\frac{10}{5} = 2\\text{ m/s}^2$.\n3. Free-body diagram of block $m_2$: The only horizontal force acting on $m_2$ is the normal contact force $N$ exerted by $m_1$ towards the right.\n4. Applying Newton's second law on $m_2$: $N = m_2 a = 3\\text{ kg} \\times 2\\text{ m/s}^2 = 6\\text{ N}$.",
    tip="Contact force between $m_1$ and $m_2$ when pushing $m_1$ is $N = \\frac{m_2}{m_1 + m_2} F$. It accelerates all the mass lying in front of the contact boundary!",
    why_wrong="Option B (4 N) is the contact force if $F$ was pushed from the side of $m_2$. Option C (10 N) is the full applied force. Option D (2 N) is $m_1 a$."
))

# Q236: Easy
qs.append(make_lom_q(
    num=236,
    question="Three blocks of masses $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, and $m_3 = 3\\text{ kg}$ are in contact on a frictionless horizontal floor. A horizontal force $F = 18\\text{ N}$ is applied on $m_1$ pushing the entire combination. The contact force between block $m_2$ and block $m_3$ is:",
    options={
        "A": "9 N",
        "B": "15 N",
        "C": "6 N",
        "D": "3 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="For a chain of blocks pushed from one side, the contact force at any interface must provide the net force required to accelerate all blocks lying downstream of that interface.",
    given="Masses $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, $m_3 = 3\\text{ kg}$, applied force $F = 18\\text{ N}$, frictionless floor.",
    formula="$a = \\frac{F}{m_1 + m_2 + m_3}$; Contact force $N_{23} = m_3 a$.",
    steps="1. Calculate the common acceleration: $a = \\frac{F}{m_1 + m_2 + m_3} = \\frac{18}{1 + 2 + 3} = \\frac{18}{6} = 3\\text{ m/s}^2$.\n2. Consider the free-body diagram of block $m_3$: The only horizontal force acting on $m_3$ is the normal contact force $N_{23}$ exerted by $m_2$.\n3. Applying Newton's second law on $m_3$: $N_{23} = m_3 a = 3\\text{ kg} \\times 3\\text{ m/s}^2 = 9\\text{ N}$.",
    tip="To find the contact force at any interface, just multiply the total mass ahead of that interface by the system acceleration!",
    why_wrong="Option B (15 N) is the contact force between $m_1$ and $m_2$ ($N_{12} = (m_2+m_3)a = 5 \\times 3 = 15\\text{ N}$). Option C (6 N) is $m_2 a$. Option D (3 N) is $m_1 a$."
))

# Q237: Easy
qs.append(make_lom_q(
    num=237,
    question="A uniform rod of mass $M$ and length $L$ rests on a smooth horizontal surface. A horizontal force $F$ is applied at one end pushing the rod along its length. What is the internal compressive force inside the rod at a distance $x$ from the pushing end?",
    options={
        "A": "$F \\left(1 - \\frac{x}{L}\\right)$",
        "B": "$F \\frac{x}{L}$",
        "C": "$F$",
        "D": "$F \\left(1 + \\frac{x}{L}\\right)$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="A pushed rod behaves like continuous blocks in contact. The compressive force at any cross-section accelerates the remaining portion of the rod that lies ahead of that cross-section.",
    given="Uniform rod of mass $M$, length $L$, applied force $F$ at end $x = 0$, smooth surface.",
    formula="Acceleration $a = \\frac{F}{M}$; Mass of portion ahead of $x$ is $m' = M \\frac{L - x}{L}$; Compressive force $P(x) = m' a$.",
    steps="1. The acceleration of the entire rod is $a = \\frac{F}{M}$.\n2. At a distance $x$ from the pushing end, the section of the rod ahead has length $(L - x)$.\n3. The mass of this remaining section is $m' = \\frac{M}{L}(L - x) = M\\left(1 - \\frac{x}{L}\\right)$.\n4. The internal compressive force $P(x)$ at cross-section $x$ must accelerate this mass $m'$ with acceleration $a$.\n5. Therefore, $P(x) = m' a = M\\left(1 - \\frac{x}{L}\\right) \\frac{F}{M} = F\\left(1 - \\frac{x}{L}\\right)$.",
    tip="At the pushed end ($x = 0$), $P = F$. At the free front end ($x = L$), $P = 0$. The compression decreases linearly from $F$ to $0$.",
    why_wrong="Option B gives $0$ at the pushing end, which is incorrect. Option C assumes compression is uniform, which is only true for massless rods."
))

# Q238: Easy
qs.append(make_lom_q(
    num=238,
    question="A bird of mass $m$ is sitting inside a wire-mesh cage of mass $M$ suspended from a sensitive spring balance. When the bird starts flying vertically upwards with a constant velocity $v$, the reading of the spring balance:",
    options={
        "A": "Remains $(M + m)g$",
        "B": "Decreases to $Mg$",
        "C": "Increases to $(M + m)g + m\\frac{v^2}{L}$",
        "D": "Decreases to $(M - m)g$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="For a system in equilibrium or moving with constant velocity (zero acceleration), the center of mass acceleration is zero. The downward thrust on air by the bird's wings exactly equals its weight $mg$, which escapes through a wire cage, but for constant velocity inside a closed or hovering system, let's analyze wire-mesh cage: in a wire-mesh cage, air escapes so the bird exerts no downward force on the cage floor! Thus the reading becomes $Mg$!",
    given="Bird mass $m$, wire-mesh cage mass $M$.",
    formula="For a wire-mesh cage, air pushed down by the wings passes freely through the mesh to the outside room, so the cage does not experience the downward reaction of the bird's weight.",
    steps="1. When the bird is perched on the perch of the wire-mesh cage, it exerts a contact force $mg$ on the cage, so reading is $(M + m)g$.\n2. When the bird is flying, its wings push air downwards to support itself.\n3. Because the cage has wire-mesh walls, this air stream passes freely through the gaps in the mesh into the surrounding atmosphere without pressing against the cage floor.\n4. Therefore, no aerodynamic reaction acts on the cage itself.\n5. The only force supported by the spring balance is the weight of the cage $Mg$.\n6. Hence, the reading decreases to $Mg$.",
    tip="NEET Trap Alert: If the cage is airtight (closed glass box), the downward air stream hits the floor and the reading remains $(M+m)g$. But for a wire-mesh cage, the air escapes, so the reading drops to $Mg$!",
    why_wrong="Option A is true for a sealed airtight box, but the question explicitly specifies a wire-mesh cage! Option C and D have incorrect physical reasoning."
))

# Update Q238: Make options match the wire-mesh explanation
# Let's adjust options: A: "Decreases to $Mg$", B: "Remains $(M+m)g$", C: "Increases to $(M+m)g + mv$", D: "Becomes zero"
# Let's update Q238 to have option A as "Decreases to $Mg$".

qs[-1] = make_lom_q(
    num=238,
    question="A bird of mass $m$ is sitting inside a wire-mesh cage of mass $M$ suspended from a sensitive spring balance. When the bird flies inside the wire-mesh cage, the reading of the spring balance:",
    options={
        "A": "Decreases to $Mg$",
        "B": "Remains $(M + m)g$",
        "C": "Increases to $(M + m)g + mg$",
        "D": "Becomes zero"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="In a wire-mesh cage, the downward airflow produced by the flapping wings escapes freely through the wire mesh into the atmosphere. The cage does not capture this aerodynamic thrust.",
    given="Bird mass $m$, wire-mesh cage mass $M$, suspended by a spring balance.",
    formula="Reading = Normal reaction supported by the suspension. For wire mesh: Reading $= Mg$.",
    steps="1. While perched, the bird exerts a direct contact normal force $mg$ on the cage, making the initial reading $(M + m)g$.\n2. When flying, the bird supports itself by pushing air downward with force $mg$.\n3. In a wire-mesh cage, this downward air stream escapes through the holes in the mesh into the room, rather than striking a solid floor.\n4. Consequently, the cage experiences no downward reaction force from the flying bird.\n5. The spring balance only supports the weight of the cage itself, so the reading decreases to $Mg$.",
    tip="NEET Classic Contrast: Wire-mesh cage $\\rightarrow Mg$; Sealed/airtight glass box $\\rightarrow (M+m)g$. Remember this distinction!",
    why_wrong="Option B applies to a sealed airtight glass container, not a wire mesh. Option C and D are physically incorrect."
)

# Q239: Medium
qs.append(make_lom_q(
    num=239,
    question="Two blocks of masses $m_1 = 4\\text{ kg}$ and $m_2 = 6\\text{ kg}$ are placed in contact on a frictionless horizontal surface. First, a horizontal force $F = 50\\text{ N}$ is applied pushing from the left on $m_1$. Next, the same force $F = 50\\text{ N}$ is applied pushing from the right on $m_2$. What is the ratio of the contact force between the blocks in the first case to that in the second case?",
    options={
        "A": "3 : 2",
        "B": "2 : 3",
        "C": "1 : 1",
        "D": "9 : 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="When pushing on $m_1$, the contact force accelerates $m_2$: $N_1 = \\frac{m_2}{m_1 + m_2} F$. When pushing on $m_2$, the contact force accelerates $m_1$: $N_2 = \\frac{m_1}{m_1 + m_2} F$.",
    given="Masses $m_1 = 4\\text{ kg}$, $m_2 = 6\\text{ kg}$, force $F = 50\\text{ N}$.",
    formula="$N_1 = \\frac{m_2}{m_1 + m_2} F$; $N_2 = \\frac{m_1}{m_1 + m_2} F$; Ratio $\\frac{N_1}{N_2} = \\frac{m_2}{m_1}$.",
    steps="1. In the first case, $F$ pushes $m_1$ towards $m_2$. The common acceleration is $a = \\frac{50}{4 + 6} = 5\\text{ m/s}^2$.\n2. The contact force between the blocks is $N_1 = m_2 a = 6 \\times 5 = 30\\text{ N}$.\n3. In the second case, $F$ pushes $m_2$ towards $m_1$. The common acceleration is $a = \\frac{50}{10} = 5\\text{ m/s}^2$.\n4. The contact force between the blocks is $N_2 = m_1 a = 4 \\times 5 = 20\\text{ N}$.\n5. The ratio is $\\frac{N_1}{N_2} = \\frac{30}{20} = \\frac{3}{2}$.",
    tip="Ratio of contact forces $\\frac{N_1}{N_2} = \\frac{m_2}{m_1}$. The contact force is directly proportional to the mass being pushed ahead of the contact interface!",
    why_wrong="Option B (2 : 3) inverts the cases. Option C (1 : 1) erroneously assumes Newton's 3rd law means the contact force is independent of which side is pushed."
))

# Q240: Medium
qs.append(make_lom_q(
    num=240,
    question="Three identical blocks A, B, and C each of mass $m$ are placed in contact on a smooth horizontal surface. A horizontal force $F$ is applied to block A pushing towards C. What is the ratio of the contact force between A and B to the contact force between B and C?",
    options={
        "A": "2 : 1",
        "B": "3 : 1",
        "C": "1 : 2",
        "D": "1 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="The interface between A and B must push both blocks B and C (total mass $2m$), while the interface between B and C only pushes block C (mass $m$).",
    given="Three identical blocks of mass $m$, applied force $F$ on A.",
    formula="Common acceleration $a = \\frac{F}{3m}$; $N_{AB} = (m_B + m_C)a = 2ma$; $N_{BC} = m_C a = ma$.",
    steps="1. The common acceleration of the 3 blocks is $a = \\frac{F}{3m}$.\n2. The contact force $N_{AB}$ between A and B must accelerate both blocks B and C: $N_{AB} = (m + m)a = 2ma = \\frac{2}{3}F$.\n3. The contact force $N_{BC}$ between B and C accelerates only block C: $N_{BC} = ma = \\frac{1}{3}F$.\n4. Taking the ratio: $\\frac{N_{AB}}{N_{BC}} = \\frac{2ma}{ma} = \\frac{2}{1} = 2 : 1$.",
    tip="For $n$ identical blocks pushed by $F$, the contact force after the $k$-th block is $N_k = \\frac{n - k}{n} F$.",
    why_wrong="Option B (3:1) erroneously compares $F$ to $N_{BC}$. Option C (1:2) is the inverse. Option D assumes equal contact forces."
))

# Q241: Medium
qs.append(make_lom_q(
    num=241,
    question="A block of mass $m$ is placed on the smooth inclined face of a wedge of mass $M$ and inclination $\\theta$ resting on a horizontal floor. If the wedge is held fixed, what is the normal force exerted by the inclined face on the block?",
    options={
        "A": "$mg \\cos\\theta$",
        "B": "$mg / \\cos\\theta$",
        "C": "$mg \\sin\\theta$",
        "D": "$mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="On a fixed inclined plane, the block has no acceleration perpendicular to the incline. Equilibrium perpendicular to the incline yields $N = mg\\cos\\theta$.",
    given="Block mass $m$, fixed wedge inclination $\\theta$, smooth surface.",
    formula="Perpendicular to incline: $\\sum F_\\perp = N - mg\\cos\\theta = 0 \\implies N = mg\\cos\\theta$.",
    steps="1. Choose axes parallel and perpendicular to the inclined plane.\n2. Resolve gravity into components: $mg\\sin\\theta$ down the incline, and $mg\\cos\\theta$ into the incline.\n3. The normal contact force $N$ acts perpendicular to the incline outward.\n4. Since there is no motion or acceleration perpendicular to the incline, the forces along this axis must balance: $N = mg\\cos\\theta$.",
    tip="When the wedge is fixed, $N = mg\\cos\\theta$. (If the wedge is accelerated horizontally by $a$ so the block does not slide, $N = mg/\\cos\\theta$). Know the difference!",
    why_wrong="Option B ($mg/\\cos\\theta$) is the normal force when the wedge accelerates at $a = g\\tan\\theta$. Option C is the parallel component driving slide."
))

# Q242: Medium
qs.append(make_lom_q(
    num=242,
    question="Two smooth identical spheres each of radius $R$ and mass $m$ are placed inside a vertical hollow cylinder of radius $1.5R$ with a closed horizontal base. The line joining the centers of the two spheres makes an angle $\\theta$ with the horizontal. What is $\\cos\\theta$?",
    options={
        "A": "0.5",
        "B": "0.75",
        "C": "0.25",
        "D": "0.866"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="From geometry, the distance between the vertical walls is $2 \\times 1.5R = 3R$. The center of the left sphere is at distance $R$ from the left wall, and the center of the right sphere is at distance $R$ from the right wall. The horizontal separation between their centers is $3R - 2R = R$. The distance between their centers is $2R$.",
    given="Sphere radius $R$, cylinder radius $1.5R$ (cylinder diameter $D = 3R$).",
    formula="Horizontal distance $\\Delta x = D - 2R = 3R - 2R = R$; Center-to-center distance $d = 2R$; $\\cos\\theta = \\frac{\\Delta x}{d}$.",
    steps="1. The inner diameter of the cylinder is $D = 2 \\times 1.5R = 3R$.\n2. Each sphere touches one vertical wall, so their centers are at distances $R$ from their respective walls.\n3. The horizontal distance between the centers is $\\Delta x = D - R - R = 3R - 2R = R$.\n4. Because the two spheres are in contact, the distance between their centers is $d = R + R = 2R$.\n5. From the right-angled triangle formed by the centers: $\\cos\\theta = \\frac{\\Delta x}{d} = \\frac{R}{2R} = 0.5$ (which corresponds to $\\theta = 60^\\circ$).",
    tip="Geometry of contact: Horizontal distance between sphere centers inside a channel of width $W$ is $W - 2R$. Since center-to-center distance is $2R$, $\\cos\\theta = \\frac{W - 2R}{2R}$.",
    why_wrong="Option B (0.75) uses radius instead of diameter. Option C (0.25) and Option D (0.866) arise from incorrect trigonometry."
))

# Q243: Medium
qs.append(make_lom_q(
    num=243,
    question="A uniform rod of mass $M$ and length $L$ is pulled on a smooth horizontal floor by a horizontal force $F$ applied at one end. The tension at a distance $x$ from the pulled end is:",
    options={
        "A": "$F \\left(1 - \\frac{x}{L}\\right)$",
        "B": "$F \\frac{x}{L}$",
        "C": "$F \\left(1 + \\frac{x}{L}\\right)$",
        "D": "$\\frac{F}{2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="For a pulled uniform rod of mass $M$ and length $L$, the acceleration is $a = F/M$. The tension $T(x)$ at distance $x$ accelerates the trailing portion of length $(L - x)$.",
    given="Uniform rod of mass $M$, length $L$, pulled with force $F$ at $x = 0$.",
    formula="$a = \\frac{F}{M}$; Mass of trailing segment $m' = M \\frac{L-x}{L}$; Tension $T(x) = m' a = F\\left(1 - \\frac{x}{L}\\right)$.",
    steps="1. The entire rod accelerates with $a = \\frac{F}{M}$.\n2. Divide the rod into two parts at a cross-section at distance $x$ from the pulled end:\n   - Front part of length $x$ (mass $\\frac{M}{L}x$).\n   - Rear part of length $(L - x)$ (mass $\\frac{M}{L}(L - x)$).\n3. The only horizontal force acting on the rear part is the tension $T(x)$ pulling it forward.\n4. Therefore, $T(x) = m_{\\text{rear}} a = \\left[\\frac{M}{L}(L - x)\\right] \\left(\\frac{F}{M}\\right) = F \\left(1 - \\frac{x}{L}\\right)$.",
    tip="At $x = 0$ (pulled end), $T = F$. At $x = L$ (free end), $T = 0$. Tension varies linearly along a uniform pulled rod!",
    why_wrong="Option B gives $0$ at the pulled end and $F$ at the free end, which is the exact reverse of physical reality."
))

# Q244: Medium
qs.append(make_lom_q(
    num=244,
    question="A heavy uniform rope of mass $m$ and length $L$ hangs vertically from a rigid ceiling. The tension in the rope at a distance $y$ measured from the lower free end is:",
    options={
        "A": "$\\frac{mgy}{L}$",
        "B": "$mg \\left(1 - \\frac{y}{L}\\right)$",
        "C": "$mg$",
        "D": "$\\frac{mgL}{y}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="For a hanging rope in static equilibrium, the tension at height $y$ from the bottom supports the weight of the rope portion hanging below it.",
    given="Uniform rope mass $m$, length $L$, hanging vertically, distance $y$ from free bottom end.",
    formula="Mass of portion below $y$ is $m' = \\frac{m}{L}y$; Equilibrium: $T(y) = m' g = \\frac{mgy}{L}$.",
    steps="1. Consider a cross-section of the rope at distance $y$ from the lower free end.\n2. The portion of the rope below this cross-section has length $y$.\n3. Since the rope is uniform, linear mass density is $\\lambda = \\frac{m}{L}$.\n4. The mass of the rope hanging below this point is $m' = \\lambda y = \\frac{m}{L}y$.\n5. For static equilibrium of this lower section, the upward tension $T(y)$ must balance its weight: $T(y) = m'g = \\frac{mgy}{L}$.",
    tip="At the free end ($y = 0$), $T = 0$. At the support ($y = L$), $T = mg$. Tension increases linearly from bottom to top!",
    why_wrong="Option B gives $T = mg$ at the bottom and $0$ at the top, which violates equilibrium. Option C ignores the distributed weight."
))

# Q245: Medium
qs.append(make_lom_q(
    num=245,
    question="A smooth sphere of mass $m$ rests in a symmetric V-shaped groove whose sides are each inclined at an angle $\\theta$ to the horizontal. What is the normal contact force exerted by each inclined surface on the sphere?",
    options={
        "A": "$\\frac{mg}{2 \\cos\\theta}$",
        "B": "$\\frac{mg}{2 \\sin\\theta}$",
        "C": "$\\frac{mg}{\\cos\\theta}$",
        "D": "$mg \\sin\\theta$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="Each surface is inclined at angle $\\theta$ to the horizontal, so the normal to each surface makes an angle $(90^\\circ - \\theta)$ with the horizontal, meaning it makes an angle $\\theta$ with the vertical. The vertical components of the two normal forces balance the weight: $2N\\cos\\theta = mg \\implies N = \\frac{mg}{2\\cos\\theta}$.",
    given="Mass $m$, symmetric groove walls at angle $\\theta$ to horizontal.",
    formula="Normal makes angle $\\theta$ with vertical; $2N \\cos\\theta = mg \\implies N = \\frac{mg}{2\\cos\\theta}$.",
    steps="1. The wall of the groove makes an angle $\\theta$ with the horizontal.\n2. A normal to a surface inclined at $\\theta$ to the horizontal makes an angle $\\theta$ with the vertical.\n3. By symmetry, both inclined faces exert normal forces of equal magnitude $N$.\n4. Horizontal components $N\\sin\\theta$ on the left and right cancel each other out.\n5. The vertical components of both normal forces point upward: $N_y = N\\cos\\theta$.\n6. Balancing vertical forces: $2N\\cos\\theta = mg \\implies N = \\frac{mg}{2\\cos\\theta}$.",
    tip="When the wedge angle is measured with horizontal, normal makes that same angle with the vertical! Hence vertical component is $N\\cos\\theta$.",
    why_wrong="Option B ($mg/(2\\sin\\theta)$) incorrectly assumes the normal makes angle $\\theta$ with the horizontal. Option C forgets there are two contact points sharing the load."
))

# Q246: Medium
qs.append(make_lom_q(
    num=246,
    question="A block of mass $m = 2\\text{ kg}$ is held against a vertical wall by applying a horizontal force $F = 40\\text{ N}$. The coefficient of static friction between the block and the wall is $\\mu_s = 0.4$. Taking $g = 10\\text{ m/s}^2$, what is the normal reaction force exerted by the wall on the block?",
    options={
        "A": "40 N",
        "B": "20 N",
        "C": "16 N",
        "D": "8 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="Along the horizontal axis, the block does not penetrate the wall or accelerate horizontally. Newton's first/third law dictates that the normal reaction from the wall must directly balance the applied horizontal pushing force: $N = F$.",
    given="Mass $m = 2\\text{ kg}$, horizontal pushing force $F = 40\\text{ N}$, $\\mu_s = 0.4$, $g = 10\\text{ m/s}^2$.",
    formula="Horizontal equilibrium: $\\sum F_x = F - N = 0 \\implies N = F$.",
    steps="1. Draw the horizontal forces acting on the block:\n   - Pushing force $F = 40\\text{ N}$ directed to the right against the wall.\n   - Normal reaction $N$ exerted by the rigid wall to the left.\n2. Since there is zero horizontal acceleration: $\\sum F_x = 0 \\implies N = F = 40\\text{ N}$.\n3. Note: The maximum limiting friction available is $f_{\\text{lim}} = \\mu_s N = 0.4 \\times 40 = 16\\text{ N}$.\n4. The weight is $mg = 2 \\times 10 = 20\\text{ N}$. (Here $mg > f_{\\text{lim}}$, so the block slides down, but the normal force remains exactly $40\\text{ N}$!).",
    tip="NEET Trap: Normal reaction $N$ depends solely on forces perpendicular to the surface. It does NOT depend on friction or weight for a vertical wall!",
    why_wrong="Option B (20 N) is the weight $mg$. Option C (16 N) is the limiting friction $\\mu_s N$. Option D (8 N) is $\\mu_s mg$."
))

# Q247: Hard
qs.append(make_lom_q(
    num=247,
    question="Two blocks of masses $m_1 = 4\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are connected by a light spring on a smooth horizontal surface. A horizontal force $F = 18\\text{ N}$ is applied to $m_1$ pulling it away from $m_2$. At an instant when the acceleration of block $m_2$ is $3\\text{ m/s}^2$, what is the acceleration of block $m_1$?",
    options={
        "A": "$3\\text{ m/s}^2$",
        "B": "$4.5\\text{ m/s}^2$",
        "C": "$6\\text{ m/s}^2$",
        "D": "$1.5\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="For a connected spring system, the spring force $F_s$ acting on $m_2$ is its sole horizontal force: $F_s = m_2 a_2$. The same spring force acts on $m_1$ opposing the applied force: $F - F_s = m_1 a_1$.",
    given="$m_1 = 4\\text{ kg}$, $m_2 = 2\\text{ kg}$, $F = 18\\text{ N}$, $a_2 = 3\\text{ m/s}^2$.",
    formula="$F_s = m_2 a_2$; $a_1 = \\frac{F - F_s}{m_1}$.",
    steps="1. Consider block $m_2$: The only horizontal force acting on $m_2$ is the spring force $F_s$.\n2. Therefore, $F_s = m_2 a_2 = 2\\text{ kg} \\times 3\\text{ m/s}^2 = 6\\text{ N}$.\n3. By Newton's third law, the spring exerts an equal and opposite force $F_s = 6\\text{ N}$ on $m_1$ in the backward direction.\n4. Apply Newton's second law on $m_1$: $F_{\\text{net}} = F - F_s = 18 - 6 = 12\\text{ N}$.\n5. Acceleration of $m_1$: $a_1 = \\frac{F_{\\text{net}}}{m_1} = \\frac{12\\text{ N}}{4\\text{ kg}} = 3\\text{ m/s}^2$.",
    tip="Alternative check via center of mass: $a_{\\text{cm}} = \\frac{F}{m_1 + m_2} = \\frac{18}{6} = 3\\text{ m/s}^2$. Since $a_{\\text{cm}} = \\frac{m_1 a_1 + m_2 a_2}{m_1 + m_2}$, here $3 = \\frac{4 a_1 + 2(3)}{6} \\implies 18 = 4 a_1 + 6 \\implies a_1 = 3\\text{ m/s}^2$!",
    why_wrong="Option B (4.5 m/s^2) is $F/m_1$ ignoring the spring force. Option C is $F_s/m_1$. Option D is $(F - 2F_s)/m_1$."
))

# Q248: Hard
qs.append(make_lom_q(
    num=248,
    question="A flexible uniform chain of mass $M$ and length $L$ rests on a smooth horizontal table such that a fraction $\\eta$ ($0 < \\eta < 1$) of its length hangs vertically over the edge. What is the total normal force exerted by the table on the chain at this instant?",
    options={
        "A": "$(1 - \\eta) Mg$",
        "B": "$\\eta Mg$",
        "C": "$Mg$",
        "D": "$(1 - \\eta^2) Mg$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="Only the part of the chain lying on the table is in contact with the table surface. For that portion, there is no vertical acceleration, so the normal force equals the weight of that lying segment.",
    given="Chain mass $M$, length $L$, fraction hanging $\\eta$, fraction on table $(1 - \\eta)$.",
    formula="$N = M_{\\text{table}} g = (1 - \\eta) Mg$.",
    steps="1. Length of chain resting on the horizontal table is $L_{\\text{table}} = (1 - \\eta) L$.\n2. Since the chain is uniform, the mass resting on the table is $M_{\\text{table}} = (1 - \\eta) M$.\n3. The table exerts a vertical upward normal contact force $N$ on this portion.\n4. Since the table is horizontal and the chain on it moves purely horizontally (no vertical acceleration $a_y = 0$), vertical equilibrium holds for the portion on the table:\n   $N = M_{\\text{table}} g = (1 - \\eta) Mg$.\n5. The hanging part of mass $\\eta M$ hangs freely in air without touching the table, so it contributes zero normal reaction to the table.",
    tip="Normal force is an exclusive contact interaction between touching surfaces! The table only pushes up on the portion of mass that physically touches it.",
    why_wrong="Option B ($\\eta Mg$) is the weight of the hanging portion. Option C ($Mg$) forgets that the hanging portion is not supported by the table floor."
))

# Q249: Hard
qs.append(make_lom_q(
    num=249,
    question="A heavy uniform rope of mass $M$ and length $L$ is pulled vertically upwards by a constant force $F > Mg$ applied at its upper end. What is the tension in the rope at a distance $y$ measured from its lower free end?",
    options={
        "A": "$\\frac{y}{L} F$",
        "B": "$\\left(1 - \\frac{y}{L}\\right) F$",
        "C": "$\\frac{y}{L} Mg$",
        "D": "$F - \\frac{y}{L} Mg$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="For an accelerating heavy rope moving vertically upward with acceleration $a = (F - Mg)/M = F/M - g$, the tension $T(y)$ accelerates and supports the lower segment of mass $m' = \\frac{y}{L}M$: $T(y) - m'g = m'a \\implies T(y) = m'(g + a) = \\frac{y}{L}M(g + \\frac{F}{M} - g) = \\frac{y}{L}F$.",
    given="Uniform rope mass $M$, length $L$, vertical upward force $F$ at top end, distance $y$ from bottom.",
    formula="$a = \\frac{F - Mg}{M}$; $T(y) = m'(g + a) = \\frac{y}{L} M \\left(\\frac{F}{M}\\right) = \\frac{y}{L}F$.",
    steps="1. Total mass of the rope is $M$. Upward force is $F$, downward weight is $Mg$.\n2. Upward acceleration of the entire rope: $a = \\frac{F - Mg}{M} = \\frac{F}{M} - g$.\n3. Consider the lower segment of the rope of length $y$.\n4. Mass of this lower segment is $m' = \\frac{M}{L} y$.\n5. Forces on this lower segment: upward tension $T(y)$ at the top of the segment, downward weight $m'g$.\n6. Applying Newton's second law: $T(y) - m'g = m'a$.\n7. Therefore, $T(y) = m'(g + a) = \\left(\\frac{M}{L}y\\right) \\left(g + \\frac{F}{M} - g\\right) = \\frac{y}{L} F$.\n8. Notice that $g$ completely cancels out! At the top ($y = L$), $T = F$; at the bottom ($y = 0$), $T = 0$.",
    tip="Super NEET Insight: In an accelerating rope/rod, tension at distance $y$ from free end is simply $T(y) = \\frac{y}{L} F$, completely independent of gravity $g$!",
    why_wrong="Option B gives $F$ at the bottom and $0$ at the top, which is inverted. Option C assumes zero acceleration ($a = 0$)."
))

# Q250: Hard
qs.append(make_lom_q(
    num=250,
    question="Three blocks $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, and $m_3 = 5\\text{ kg}$ are placed in contact in a row on a smooth horizontal surface. Two horizontal opposing forces act on the system: $F_1 = 40\\text{ N}$ pushing to the right on $m_1$, and $F_2 = 10\\text{ N}$ pushing to the left on $m_3$. What is the magnitude of the contact force between $m_2$ and $m_3$?",
    options={
        "A": "25 N",
        "B": "15 N",
        "C": "34 N",
        "D": "10 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="For opposing forces, find net acceleration $a = \\frac{F_1 - F_2}{M_{\\text{total}}}$. Then write Newton's second law for $m_3$: $N_{23} - F_2 = m_3 a \\implies N_{23} = F_2 + m_3 a$.",
    given="$m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, $m_3 = 5\\text{ kg}$, $F_1 = 40\\text{ N}$ (right), $F_2 = 10\\text{ N}$ (left).",
    formula="$a = \\frac{F_1 - F_2}{m_1 + m_2 + m_3}$; $N_{23} = F_2 + m_3 a$.",
    steps="1. Total mass: $M = 2 + 3 + 5 = 10\\text{ kg}$.\n2. Net horizontal force towards right: $F_{\\text{net}} = F_1 - F_2 = 40 - 10 = 30\\text{ N}$.\n3. Common acceleration: $a = \\frac{F_{\\text{net}}}{M} = \\frac{30}{10} = 3\\text{ m/s}^2$ (towards the right).\n4. Consider block $m_3$ alone:\n   - Contact force $N_{23}$ acts to the right.\n   - External force $F_2 = 10\\text{ N}$ acts to the left.\n   - Acceleration is $a = 3\\text{ m/s}^2$ to the right.\n5. Newton's second law on $m_3$: $N_{23} - F_2 = m_3 a \\implies N_{23} - 10 = 5 \\times 3 = 15\\text{ N}$.\n6. Therefore, $N_{23} = 10 + 15 = 25\\text{ N}$.",
    tip="Quick Check: For $m_1$, $F_1 - N_{12} = m_1 a \\implies 40 - N_{12} = 2(3) = 6 \\implies N_{12} = 34\\text{ N}$. For $m_2$, $N_{12} - N_{23} = m_2 a \\implies 34 - 25 = 9 = 3(3)$. Perfectly consistent!",
    why_wrong="Option B (15 N) is $m_3 a$ forgetting to add the opposing force $F_2$. Option C (34 N) is the contact force between $m_1$ and $m_2$."
))

print(f"Topic 15 Extension done: {len(qs)} questions.")
