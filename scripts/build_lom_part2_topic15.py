import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 15: Contact forces (Q220 to Q234, 15 questions: 3 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q220 - Easy
qs.append(make_lom_q(
    num=220,
    question="The total contact force $\\vec{F}_c$ exerted by a rough surface on an object is the vector resultant of which two components?",
    options={
        "A": "The normal reaction force N (perpendicular) and the friction force f (parallel)",
        "B": "Gravity mg and the normal force N",
        "C": "Weight mg and friction f",
        "D": "Applied force and friction force"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="The contact force exerted by a surface has two mutually perpendicular components: the normal reaction $N$ perpendicular to the surface, and friction $f$ parallel to the surface: $F_c = \\sqrt{N^2 + f^2}$.",
    given="Contact interaction with a rough surface.",
    formula="\\vec{F}_c = \\vec{N} + \\vec{f} \\implies F_c = \\sqrt{N^2 + f^2}",
    steps="1. At the contact interface, atomic interactions produce a total contact force $\\vec{F}_c$.\n2. Resolving along surface coordinates:\n   - Component perpendicular to the surface is the normal reaction $\\vec{N}$.\n   - Component parallel to the surface resisting sliding is the friction $\\vec{f}$.\n3. Since $\\vec{N} \\perp \\vec{f}$, the magnitude is $F_c = \\sqrt{N^2 + f^2}$.",
    tip="Total contact force is the vector sum: $F_c = \\sqrt{N^2 + f^2}$. If the surface is frictionless ($f = 0$), then $F_c = N$!",
    why_wrong="Option B includes gravity, which is a non-contact field force from Earth, not a surface contact force."
))

# Q221 - Easy
qs.append(make_lom_q(
    num=221,
    question="On a frictionless horizontal surface, what is the angle between the contact force exerted by the surface and the surface itself?",
    options={
        "A": "90^\\circ",
        "B": "0^\\circ",
        "C": "45^\\circ",
        "D": "180^\\circ"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="On a frictionless surface, the parallel friction component is strictly zero ($f = 0$). Therefore, the contact force consists entirely of the normal reaction $N$, which is perpendicular ($90^\\circ$) to the surface.",
    given="Frictionless surface ($f = 0$).",
    formula="\\vec{F}_c = \\vec{N} \\implies \\theta = 90^\\circ",
    steps="1. Contact force $\\vec{F}_c = \\vec{N} + \\vec{f}$.\n2. Frictionless implies $\\vec{f} = 0$.\n3. Thus $\\vec{F}_c = \\vec{N}$, which is perpendicular ($90^\\circ$) to the surface.",
    tip="Frictionless surface $\\implies$ contact force is 100% normal ($90^\\circ$). Rough surface $\\implies$ contact force tilts away from the normal by angle of friction $\\lambda$!",
    why_wrong="Option B would imply a purely horizontal force with zero support."
))

# Q222 - Easy
qs.append(make_lom_q(
    num=222,
    question="At the microscopic atomic level, the fundamental origin of all mechanical contact forces (normal reaction, tension, friction) is:",
    options={
        "A": "Electromagnetic interaction",
        "B": "Gravitational interaction",
        "C": "Strong nuclear interaction",
        "D": "Weak nuclear interaction"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Contact forces",
    concept="All macroscopic contact forces—including normal reaction, friction, string tension, and spring elasticity—arise from the Coulomb electrostatic interactions between the electrons and atomic nuclei of contacting materials.",
    given="Microscopic nature of mechanical forces.",
    formula="\\text{Contact forces} = \\text{Microscopic Electromagnetic forces}",
    steps="1. When two surfaces touch, their outermost electron clouds interact and repel.\n2. Chemical bonds and electrostatic attractions give rise to friction and tensile strength.\n3. Therefore, all contact forces are electromagnetic in origin.",
    tip="All forces in everyday mechanics except gravity are ELECTROMAGNETIC!",
    why_wrong="Option B: Gravity is far too weak ($10^{-36}$ times weaker) to account for normal forces or friction."
))

# Q223 - Medium
qs.append(make_lom_q(
    num=223,
    question="A block of mass $m = 4\\text{ kg}$ rests on a rough horizontal floor with coefficient of static friction $\\mu_s = 0.5$. A horizontal force $F = 10\\text{ N}$ is applied to the block. What is the magnitude of the total contact force exerted by the floor on the block? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "\\sqrt{1700} N (approx 41.23 N)",
        "B": "40 N",
        "C": "50 N",
        "D": "20 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="Check if block moves: Maximum static friction is $f_L = \\mu_s N = 0.5 \\times 40 = 20\\text{ N}$. Since applied force $F = 10\\text{ N} < 20\\text{ N}$, the block remains at rest and static friction is $f_s = 10\\text{ N}$. Total contact force is $F_c = \\sqrt{N^2 + f_s^2}$.",
    given="$m = 4\\text{ kg}$, $g = 10\\text{ m/s}^2$, $\\mu_s = 0.5$, $F = 10\\text{ N}$.",
    formula="N = mg = 40\\text{ N},\\quad f_s = F = 10\\text{ N},\\quad F_c = \\sqrt{N^2 + f_s^2}",
    steps="1. Normal force: $N = mg = 4 \\times 10 = 40\\text{ N}$.\n2. Limiting friction: $f_L = \\mu_s N = 0.5 \\times 40 = 20\\text{ N}$.\n3. Since applied force $F = 10\\text{ N} < 20\\text{ N}$, the block does NOT slip.\n4. Actual static friction is $f_s = 10\\text{ N}$.\n5. Total contact force:\n   $$F_c = \\sqrt{N^2 + f_s^2} = \\sqrt{40^2 + 10^2} = \\sqrt{1600 + 100} = \\sqrt{1700}\\text{ N} \\approx 41.23\\text{ N}$$.",
    tip="NEET Trap: Do not use $f_L = 20\\text{ N}$! Static friction is only $10\\text{ N}$ because the block has not reached the threshold of motion.",
    why_wrong="Option B ($40\\text{ N}$) is only the normal force, ignoring friction. Option C ($50\\text{ N}$) incorrectly uses $f_L = 20$ in $\\sqrt{40^2+20^2} \\approx 44.7$."
))

# Q224 - Medium
qs.append(make_lom_q(
    num=224,
    question="In the previous problem, what is the maximum possible value of the total contact force exerted by the floor on the block before it begins to slide?",
    options={
        "A": "20\\sqrt{5} N (approx 44.72 N)",
        "B": "40 N",
        "C": "60 N",
        "D": "50 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="The contact force reaches its maximum at the threshold of motion (limiting friction), where $f = f_L = \\mu_s N$: $F_{c, \\max} = \\sqrt{N^2 + (\\mu_s N)^2} = N\\sqrt{1 + \\mu_s^2}$.",
    given="$N = 40\\text{ N}$, $\\mu_s = 0.5$.",
    formula="F_{c, \\max} = N\\sqrt{1 + \\mu_s^2}",
    steps="1. Normal force: $N = 40\\text{ N}$.\n2. Limiting friction: $f_L = \\mu_s N = 0.5 \\times 40 = 20\\text{ N}$.\n3. Maximum total contact force:\n   $$F_{c, \\max} = \\sqrt{40^2 + 20^2} = \\sqrt{1600 + 400} = \\sqrt{2000} = 20\\sqrt{5}\\text{ N} \\approx 44.72\\text{ N}$$.",
    tip="Formula for maximum contact force: $F_{c, \\max} = N\\sqrt{1 + \\mu_s^2} = mg\\sqrt{1 + \\mu_s^2}$!",
    why_wrong="Option C ($60\\text{ N}$) adds the two forces algebraically ($40 + 20$) instead of vectorially."
))

# Q225 - Medium
qs.append(make_lom_q(
    num=225,
    question="Two blocks of masses $m_1 = 3\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are in contact on a frictionless horizontal table. A horizontal force $F = 15\\text{ N}$ is applied to $m_1$ pushing it toward $m_2$. What is the contact force between the two blocks?",
    options={
        "A": "6 N",
        "B": "9 N",
        "C": "15 N",
        "D": "3 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="Both blocks move with acceleration $a = \\frac{F}{m_1 + m_2} = \\frac{15}{5} = 3\\text{ m/s}^2$. The normal contact force between them accelerates block $m_2$: $N = m_2 a$.",
    given="$m_1 = 3\\text{ kg}$, $m_2 = 2\\text{ kg}$, $F = 15\\text{ N}$.",
    formula="a = \\frac{F}{m_1 + m_2},\\quad N = m_2 a = \\frac{m_2}{m_1 + m_2} F",
    steps="1. Acceleration: $a = \\frac{15\\text{ N}}{3 + 2\\text{ kg}} = 3\\text{ m/s}^2$.\n2. FBD of $m_2$: $N = m_2 a = 2 \\times 3 = 6\\text{ N}$.\n3. FBD of $m_1$: $F - N = m_1 a \\implies 15 - 6 = 3(3) = 9\\text{ N}$ (verified!).",
    tip="Contact force pushing $m_2$: $N = \\frac{m_2}{m_1 + m_2} F = \\frac{2}{5} \\times 15 = 6\\text{ N}$!",
    why_wrong="Option B ($9\\text{ N}$) is the contact force if the force were applied to $m_2$ pushing toward $m_1$."
))

# Q226 - Medium
qs.append(make_lom_q(
    num=226,
    question="Three blocks of masses $m_1 = 1\\text{ kg}, m_2 = 2\\text{ kg}$, and $m_3 = 3\\text{ kg}$ are placed in contact on a frictionless horizontal plane. A horizontal force $F = 12\\text{ N}$ pushes $m_1$ toward the right. What is the contact force between $m_2$ and $m_3$?",
    options={
        "A": "6 N",
        "B": "10 N",
        "C": "4 N",
        "D": "8 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="Total mass $M = 1 + 2 + 3 = 6\\text{ kg}$, so acceleration is $a = F/M = 12/6 = 2\\text{ m/s}^2$. The contact force between $m_2$ and $m_3$ is the force needed to accelerate block $m_3$ alone: $N_{23} = m_3 a$.",
    given="$m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, $m_3 = 3\\text{ kg}$, $F = 12\\text{ N}$ on $m_1$.",
    formula="a = \\frac{F}{m_1 + m_2 + m_3},\\quad N_{23} = m_3 a",
    steps="1. System acceleration: $a = \\frac{12\\text{ N}}{6\\text{ kg}} = 2\\text{ m/s}^2$.\n2. The interface between $m_2$ and $m_3$ accelerates only block $m_3$.\n3. Contact force: $N_{23} = m_3 a = 3 \\times 2 = 6\\text{ N}$.\n4. For comparison, contact force between $m_1$ and $m_2$ accelerates $(m_2 + m_3)$: $N_{12} = (2 + 3) \\times 2 = 10\\text{ N}$.",
    tip="Each contact interface accelerates all the masses in front of it! $N_{23} = m_3 a = 3 \\times 2 = 6\\text{ N}$.",
    why_wrong="Option B ($10\\text{ N}$) is the contact force between $m_1$ and $m_2$."
))

# Q227 - Medium
qs.append(make_lom_q(
    num=227,
    question="A block of mass $m$ rests on an incline of angle $\\theta = 45^\\circ$. The block is prevented from sliding down by static friction. What is the angle made by the total contact force exerted by the incline on the block with the vertical?",
    options={
        "A": "0^\\circ (the total contact force is vertically upward)",
        "B": "45^\\circ",
        "C": "90^\\circ",
        "D": "22.5^\\circ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="If the block is in static equilibrium, the ONLY external forces acting on it are gravity $m\\vec{g}$ (downward) and the total contact force $\\vec{F}_c$ from the incline. For $\\sum \\vec{F} = 0$, $\\vec{F}_c$ must be strictly equal and opposite to gravity: $\\vec{F}_c = -m\\vec{g}$, which points vertically upward ($0^\\circ$ with vertical).",
    given="Block at rest on incline, in static equilibrium.",
    formula="\\vec{F}_c + m\\vec{g} = 0 \\implies \\vec{F}_c = -m\\vec{g}",
    steps="1. The block is in static equilibrium.\n2. The only forces acting on it are gravity $\\vec{W} = -mg\\hat{j}$ and the total contact force $\\vec{F}_c$.\n3. Equilibrium requires $\\vec{F}_c + \\vec{W} = 0 \\implies \\vec{F}_c = mg\\hat{j}$.\n4. The total contact force points vertically upward.\n5. Therefore, the angle with the vertical is $0^\\circ$.",
    tip="Brilliant NEET concept: If a body resting on ANY surface is in equilibrium under gravity alone, the total contact force is ALWAYS vertically upward with magnitude $mg$!",
    why_wrong="Option B is the angle of the normal force, not the total contact force."
))

# Q228 - Medium
qs.append(make_lom_q(
    num=228,
    question="A heavy box rests on a horizontal floor. The angle of friction between the box and the floor is $\\lambda$. The angle made by the total contact force with the vertical normal when the box is at the verge of slipping is:",
    options={
        "A": "\\lambda",
        "B": "90^\\circ - \\lambda",
        "C": "\\lambda / 2",
        "D": "0^\\circ"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="The angle of friction $\\lambda$ is defined as the angle made by the resultant contact force with the normal reaction at limiting equilibrium: $\\tan\\lambda = \\frac{f_L}{N} = \\mu_s$.",
    given="Limiting friction state.",
    formula="\\tan\\lambda = \\frac{f_L}{N} = \\mu_s",
    steps="1. Total contact force is the vector sum $\\vec{F}_c = \\vec{N} + \\vec{f}_L$.\n2. Normal force is along the vertical normal.\n3. The tangent of the angle $\\lambda$ between $\\vec{F}_c$ and $\\vec{N}$ is $\\tan\\lambda = \\frac{f_L}{N}$.\n4. By definition, this angle is the angle of friction $\\lambda$.",
    tip="Definition of angle of friction: $\\tan\\lambda = \\mu_s$. It is the angle the total contact force makes with the NORMAL!",
    why_wrong="Option B would be the angle made with the horizontal surface."
))

# Q229 - Medium
qs.append(make_lom_q(
    num=229,
    question="A ladder of weight $W$ leans against a smooth vertical wall with its base on a rough horizontal floor. The contact force exerted by the vertical wall on the ladder is:",
    options={
        "A": "Purely horizontal (normal to the wall)",
        "B": "Purely vertical",
        "C": "Inclined at 45° to the wall",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="Because the vertical wall is smooth, it cannot exert any tangential friction force ($f = 0$). Therefore, its contact force consists solely of the normal reaction, which acts horizontally perpendicular to the wall.",
    given="Smooth vertical wall.",
    formula="f_{\\text{wall}} = 0 \\implies \\vec{F}_{c, \\text{wall}} = \\vec{N}_{\\text{wall}} = \\text{horizontal}",
    steps="1. Friction on a smooth surface is zero.\n2. Without a vertical friction component, the wall can only push normally.\n3. Since the wall is vertical, its normal is horizontal.\n4. Hence, the contact force from the wall is purely horizontal.",
    tip="Smooth surface $\\implies$ contact force is 100% normal reaction, with zero tangential component!",
    why_wrong="Option B: A smooth vertical wall cannot exert a vertical force because it has no friction."
))

# Q230 - Medium
qs.append(make_lom_q(
    num=230,
    question="A block of mass $m$ is pressed against a vertical wall with a horizontal force $F$. If the block is in static equilibrium and does not slide, what is the magnitude of the total contact force exerted by the wall on the block?",
    options={
        "A": "\\sqrt{F^2 + (mg)^2}",
        "B": "F + mg",
        "C": "F",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Contact forces",
    concept="The normal reaction is horizontal: $N = F$. The static friction is vertical: $f_s = mg$. Because they are perpendicular, the total contact force is $F_c = \\sqrt{N^2 + f_s^2} = \\sqrt{F^2 + (mg)^2}$.",
    given="Horizontal force $F$, vertical wall, block in equilibrium.",
    formula="N = F,\\quad f_s = mg,\\quad F_c = \\sqrt{N^2 + f_s^2} = \\sqrt{F^2 + (mg)^2}",
    steps="1. Horizontal balance: $N = F$.\n2. Vertical balance: $f_s = mg$.\n3. Normal force is horizontal, friction is vertical (perpendicular).\n4. Total contact force from the wall: $F_c = \\sqrt{N^2 + f_s^2} = \\sqrt{F^2 + (mg)^2}$.",
    tip="Total contact force on a vertical wall: $F_c = \\sqrt{F^2 + (mg)^2}$! Very common NEET question.",
    why_wrong="Option B adds the components as scalars rather than vectors."
))

# Q231 - Hard
qs.append(make_lom_q(
    num=231,
    question="Two blocks A (mass $2\\text{ kg}$) and B (mass $3\\text{ kg}$) are stacked vertically, with A on top of B, resting on a smooth horizontal floor. The coefficient of static friction between A and B is $\\mu_s = 0.3$. A horizontal force $F$ is applied to the lower block B. What is the maximum force $F$ that can be applied such that both blocks accelerate together without A slipping on B? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "15 N",
        "B": "6 N",
        "C": "10 N",
        "D": "25 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="Block A is accelerated solely by the static friction between A and B: $f_s = m_A a$. The maximum acceleration without slipping is $a_{\\max} = \\frac{f_L}{m_A} = \\frac{\\mu_s m_A g}{m_A} = \\mu_s g$. The maximum force applied to the combined system is $F_{\\max} = (m_A + m_B) a_{\\max} = (m_A + m_B) \\mu_s g$.",
    given="$m_A = 2\\text{ kg}$, $m_B = 3\\text{ kg}$, $\\mu_s = 0.3$, $g = 10\\text{ m/s}^2$.",
    formula="a_{\\max} = \\mu_s g,\\quad F_{\\max} = (m_A + m_B)\\mu_s g",
    steps="1. Maximum static friction on block A: $f_L = \\mu_s m_A g = 0.3 \\times 2 \\times 10 = 6\\text{ N}$.\n2. Maximum acceleration of block A without slipping: $a_{\\max} = \\frac{f_L}{m_A} = \\mu_s g = 0.3 \\times 10 = 3\\text{ m/s}^2$.\n3. Both blocks move together with this acceleration: $F_{\\max} = (m_A + m_B) a_{\\max} = (2 + 3) \\times 3 = 5 \\times 3 = 15\\text{ N}$.",
    tip="Stacked blocks: When force is applied to bottom block on smooth floor, $F_{\\max} = (m_A + m_B) \\mu_s g$! Here $5 \\times 0.3 \\times 10 = 15\\text{ N}$.",
    why_wrong="Option B ($6\\text{ N}$) is only the limiting friction force $f_L$ between the blocks."
))

# Q232 - Hard
qs.append(make_lom_q(
    num=232,
    question="In the previous stacked block problem ($m_A = 2\\text{ kg}, m_B = 3\\text{ kg}, \\mu_s = 0.3$), if the horizontal force $F$ is instead applied to the UPPER block A, what is the maximum force $F$ that can be applied without slipping?",
    options={
        "A": "10 N",
        "B": "15 N",
        "C": "6 N",
        "D": "25 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="When force is applied to block A, block B is accelerated solely by the friction force $f_s$: $a_{\\max} = \\frac{f_L}{m_B} = \\frac{\\mu_s m_A g}{m_B}$. The maximum force on block A is $F_{\\max} = (m_A + m_B) a_{\\max} = (m_A + m_B) \\frac{\\mu_s m_A g}{m_B}$.",
    given="$m_A = 2\\text{ kg}$, $m_B = 3\\text{ kg}$, $\\mu_s = 0.3$, $g = 10\\text{ m/s}^2$.",
    formula="a_{\\max} = \\frac{f_L}{m_B} = \\frac{\\mu_s m_A g}{m_B},\\quad F_{\\max} = (m_A + m_B) a_{\\max}",
    steps="1. Limiting friction between A and B is $f_L = \\mu_s m_A g = 0.3 \\times 2 \\times 10 = 6\\text{ N}$.\n2. This friction accelerates block B: $a_{\\max} = \\frac{f_L}{m_B} = \\frac{6\\text{ N}}{3\\text{ kg}} = 2\\text{ m/s}^2$.\n3. Maximum applied force on A: $F_{\\max} = (m_A + m_B) a_{\\max} = (2 + 3) \\times 2 = 5 \\times 2 = 10\\text{ N}$.",
    tip="Compare: Pulling bottom block $\\implies F_{\\max} = 15\\text{ N}$. Pulling top block $\\implies F_{\\max} = 10\\text{ N}$! It is much easier to cause slipping by pulling the top block.",
    why_wrong="Option B ($15\\text{ N}$) is the maximum force when pulling the bottom block."
))

# Q233 - Hard
qs.append(make_lom_q(
    num=233,
    question="Two smooth cylinders of equal radius $R$ and mass $m$ each lie side by side on a horizontal floor. A third identical cylinder of mass $m$ is placed on top of them, resting symmetrically between them. What is the normal contact force between the top cylinder and either of the bottom cylinders?",
    options={
        "A": "\\frac{mg}{\\sqrt{3}}",
        "B": "\\frac{mg}{2}",
        "C": "\\frac{2mg}{\\sqrt{3}}",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="The centers of the three cylinders form an equilateral triangle with side length $2R$. The lines connecting the center of the top cylinder to the centers of the bottom cylinders make an angle of $30^\\circ$ with the vertical. Vertical equilibrium of top cylinder: $2 N\\cos 30^\\circ = mg$.",
    given="Three identical cylinders in symmetric contact, equilateral center geometry.",
    formula="2 N\\cos 30^\\circ = mg \\implies 2 N \\left(\\frac{\\sqrt{3}}{2}\\right) = mg \\implies N\\sqrt{3} = mg",
    steps="1. Triangle of centers has side $2R$, so all angles are $60^\\circ$.\n2. The line of contact from the top cylinder to each bottom cylinder is tilted at $30^\\circ$ to the vertical.\n3. By symmetry, the top cylinder experiences two equal normal reactions $N$.\n4. Vertical equilibrium: $2 N\\cos 30^\\circ = mg$.\n5. Since $\\cos 30^\\circ = \\sqrt{3}/2$:\n   $$2 N \\left(\\frac{\\sqrt{3}}{2}\\right) = mg \\implies \\sqrt{3} N = mg \\implies N = \\frac{mg}{\\sqrt{3}}$$.",
    tip="Center triangle is equilateral ($60^\\circ$) $\\implies$ angle with vertical is $30^\\circ$ $\\implies 2N\\cos 30^\\circ = mg \\implies N = mg/\\sqrt{3}$!",
    why_wrong="Option B ($mg/2$) forgets the angle $\\cos 30^\\circ = \\sqrt{3}/2$."
))

# Q234 - Hard
qs.append(make_lom_q(
    num=234,
    question="In the previous three-cylinder problem, what is the normal force exerted by the horizontal floor on each of the bottom cylinders?",
    options={
        "A": "\\frac{3}{2}mg",
        "B": "mg",
        "C": "2 mg",
        "D": "\\frac{mg}{\\sqrt{3}}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Contact forces",
    concept="Total mass of the three-cylinder system is $3m$, so the total downward weight is $3mg$. By symmetry, the floor supports the system equally through the two contact points: $N_{\\text{floor}} = \\frac{3mg}{2}$.",
    given="Total mass $3m$, two bottom cylinders in contact with floor.",
    formula="2 N_{\\text{floor}} = 3 mg \\implies N_{\\text{floor}} = \\frac{3}{2}mg",
    steps="1. Consider all three cylinders as a single composite system.\n2. Total weight of the system is $3mg$ downward.\n3. The only upward forces from the outside are the two floor reactions $N_{\\text{floor}}$ on the bottom cylinders.\n4. By symmetry: $N_1 + N_2 = 2 N_{\\text{floor}} = 3mg$.\n5. Therefore, $N_{\\text{floor}} = \\frac{3}{2}mg = 1.5 mg$ on each cylinder.",
    tip="Total weight is $3mg$. Floor supports it equally at 2 points: $3mg / 2 = 1.5mg$ each! Never do complicated trigonometry when system equilibrium gives the answer in one line.",
    why_wrong="Option B ($mg$) forgets that the top cylinder's weight is shared by the bottom cylinders."
))

print("Topic 15 done: 15 questions.")
