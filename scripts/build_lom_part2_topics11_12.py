import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 11: Net force and free-body diagrams (Q158 to Q173, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q158 - Easy
qs.append(make_lom_q(
    num=158,
    question="What is the primary purpose of constructing a Free-Body Diagram (FBD) for an object in mechanics?",
    options={
        "A": "To isolate the object and show all external forces acting directly ON it",
        "B": "To show the forces that the object exerts on other surrounding bodies",
        "C": "To represent the path and trajectory of the object",
        "D": "To calculate the internal molecular forces inside the object"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Net force and free-body diagrams",
    concept="An FBD is a pictorial representation used by physicists to isolate a chosen body or system and explicitly display the vectors of all external forces acting directly ON that body.",
    given="Definition of Free-Body Diagram.",
    formula="\\sum \\vec{F}_{\\text{ext on body}} = m\\vec{a}",
    steps="1. An FBD isolates the single body of interest from its surroundings.\n2. All external contact forces (normal, friction, tension) and field forces (gravity) acting ON the body are drawn as vectors starting from the body.\n3. Forces exerted BY the body on other objects are strictly excluded.",
    tip="FBD Rule 1: Include ONLY forces acting ON the object! NEVER include forces exerted BY the object on other things.",
    why_wrong="Option B is the most common error; forces exerted by the object belong on the FBD of the other bodies."
))

# Q159 - Easy
qs.append(make_lom_q(
    num=159,
    question="A block of mass $m$ is sliding down a smooth inclined plane of inclination $\\theta$. Which forces should be included in its Free-Body Diagram?",
    options={
        "A": "Downward gravity mg and normal reaction N perpendicular to the incline",
        "B": "Gravity mg, normal reaction N, and a downhill force ma",
        "C": "Normal reaction N, friction force, and gravity mg",
        "D": "Downhill force mg sin\\theta only"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Net force and free-body diagrams",
    concept="On a smooth incline, only two real physical forces act on the block: gravity ($mg$) vertically downward and the normal contact force ($N$) perpendicular to the incline surface. The component $mg\\sin\\theta$ is part of gravity, not a third force.",
    given="Block on smooth incline of angle $\\theta$.",
    formula="\\vec{F}_{\\text{real}} = m\\vec{g} + \\vec{N}",
    steps="1. Identify contact: The only contact is with the smooth incline, giving normal force $\\vec{N}$ perpendicular to the plane.\n2. Identify field forces: Gravity pulls vertically downward with $m\\vec{g}$.\n3. Since the surface is smooth, friction is zero.\n4. $ma$ is the resultant acceleration, NOT a force acting on the body.\n5. Therefore, exactly two forces are drawn: $mg$ and $N$.",
    tip="NEET Trap: Never draw $ma$ as an actual force in an inertial frame! $ma$ is the RESULT of the real forces, not an independent force itself.",
    why_wrong="Option B incorrectly treats $ma$ as an applied force. Option C includes friction on a smooth surface."
))

# Q160 - Easy
qs.append(make_lom_q(
    num=160,
    question="A body of mass $2\\text{ kg}$ is acted upon by two forces: $F_1 = 10\\text{ N}$ directed North and $F_2 = 10\\text{ N}$ directed East. What is the magnitude of the net acceleration of the body?",
    options={
        "A": "5\\sqrt{2} m/s^2 (approx 7.07 m/s^2)",
        "B": "10 m/s^2",
        "C": "10\\sqrt{2} m/s^2",
        "D": "5 m/s^2"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Net force and free-body diagrams",
    concept="Perpendicular forces sum via Pythagorean theorem: $F_{\\text{net}} = \\sqrt{F_1^2 + F_2^2}$. Acceleration is $a = F_{\\text{net}} / m$.",
    given="$m = 2\\text{ kg}$, $F_1 = 10\\text{ N}$ (North), $F_2 = 10\\text{ N}$ (East).",
    formula="F_{\\text{net}} = \\sqrt{F_1^2 + F_2^2} = 10\\sqrt{2}\\text{ N},\\quad a = \\frac{F_{\\text{net}}}{m}",
    steps="1. Magnitude of net force: $F_{\\text{net}} = \\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}\\text{ N}$.\n2. Acceleration: $a = \\frac{10\\sqrt{2}\\text{ N}}{2\\text{ kg}} = 5\\sqrt{2}\\text{ m/s}^2 \\approx 7.07\\text{ m/s}^2$.\n3. Direction is North-East ($45^\\circ$).",
    tip="Divide by mass $m = 2\\text{ kg}$: $a = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}\\text{ m/s}^2$!",
    why_wrong="Option C is the net force $10\\sqrt{2}\\text{ N}$, forgetting to divide by mass."
))

# Q161 - Easy
qs.append(make_lom_q(
    num=161,
    question="When resolving the weight $mg$ of a block on an inclined plane of angle $\\theta$ into components parallel and perpendicular to the incline:",
    options={
        "A": "Parallel component = mg sin\\theta; Perpendicular component = mg cos\\theta",
        "B": "Parallel component = mg cos\\theta; Perpendicular component = mg sin\\theta",
        "C": "Parallel component = mg tan\\theta; Perpendicular component = mg",
        "D": "Both components equal mg / \\sqrt{2}"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Net force and free-body diagrams",
    concept="The angle between the downward vertical ($mg$) and the normal to the incline is $\\theta$. Therefore, the perpendicular component is $mg\\cos\\theta$ and the downhill component along the incline is $mg\\sin\\theta$.",
    given="Incline of angle $\\theta$ with the horizontal.",
    formula="F_\\parallel = mg\\sin\\theta,\\quad F_\\perp = mg\\cos\\theta",
    steps="1. The incline is tilted by $\\theta$ with respect to the horizontal.\n2. The normal to the incline is tilted by $\\theta$ with respect to the vertical.\n3. The component of gravity along the normal is $mg\\cos\\theta$.\n4. The component of gravity along the plane is $mg\\sin\\theta$.",
    tip="Always remember: Downhill gravity is $mg\\sin\\theta$ (sliding component). Pressing gravity into the incline is $mg\\cos\\theta$ (normal component)!",
    why_wrong="Option B inverts sine and cosine."
))

# Q162 - Medium
qs.append(make_lom_q(
    num=162,
    question="A block of mass $m = 4\\text{ kg}$ is pulled along a frictionless horizontal floor by a cord applying a force $F = 20\\text{ N}$ at an angle $\\theta = 30^\\circ$ above the horizontal. What is the normal reaction force $N$ exerted by the floor on the block? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "29.2 N",
        "B": "39.2 N",
        "C": "49.2 N",
        "D": "19.2 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="The upward pulling component $F\\sin\\theta$ relieves some of the block's weight pressing against the floor. Vertical equilibrium requires $N + F\\sin\\theta - mg = 0 \\implies N = mg - F\\sin\\theta$.",
    given="$m = 4\\text{ kg}$, $F = 20\\text{ N}$, $\\theta = 30^\\circ$, $g = 9.8\\text{ m/s}^2$.",
    formula="N = mg - F\\sin\\theta",
    steps="1. Downward gravitational force: $mg = 4 \\times 9.8 = 39.2\\text{ N}$.\n2. Upward vertical component of pull: $F\\sin 30^\\circ = 20 \\times 0.5 = 10.0\\text{ N}$.\n3. Vertical equilibrium: $N + 10.0 = 39.2$.\n4. Normal force: $N = 39.2 - 10.0 = 29.2\\text{ N}$.",
    tip="Pulling at an upward angle REDUCES the normal force ($N = mg - F\\sin\\theta$). Pushing at a downward angle INCREASES normal force ($N = mg + F\\sin\\theta$)!",
    why_wrong="Option B ($39.2\\text{ N}$) is the static weight $mg$, forgetting the upward vertical pull component."
))

# Q163 - Medium
qs.append(make_lom_q(
    num=163,
    question="In the previous problem ($m = 4\\text{ kg}$, $F = 20\\text{ N}$ at $30^\\circ$), what is the horizontal acceleration of the block along the frictionless floor?",
    options={
        "A": "2.5\\sqrt{3} m/s^2 (approx 4.33 m/s^2)",
        "B": "5.0 m/s^2",
        "C": "2.5 m/s^2",
        "D": "4.0 m/s^2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="Only the horizontal component of the pulling force ($F\\cos\\theta$) accelerates the block along the frictionless floor: $a = \\frac{F\\cos\\theta}{m}$.",
    given="$F = 20\\text{ N}$, $\\theta = 30^\\circ$, $m = 4\\text{ kg}$.",
    formula="a = \\frac{F\\cos\\theta}{m} = \\frac{20\\cos 30^\\circ}{4} = 5\\cos 30^\\circ",
    steps="1. Horizontal net force: $F_x = F\\cos 30^\\circ = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ N}$.\n2. Acceleration: $a = \\frac{F_x}{m} = \\frac{10\\sqrt{3}}{4} = 2.5\\sqrt{3}\\text{ m/s}^2 \\approx 4.33\\text{ m/s}^2$.",
    tip="Remember $\\cos 30^\\circ = \\sqrt{3}/2 \\approx 0.866$. $a = \\frac{20 \\times 0.866}{4} = 4.33\\text{ m/s}^2$!",
    why_wrong="Option B ($5.0\\text{ m/s}^2$) uses $F/m = 20/4 = 5$, ignoring the angle $\\cos 30^\\circ$."
))

# Q164 - Medium
qs.append(make_lom_q(
    num=164,
    question="Why is it easier to pull a lawn roller than to push it across a rough ground?",
    options={
        "A": "Pulling has an upward vertical force component that reduces normal force and friction, whereas pushing has a downward component that increases them",
        "B": "Pulling reduces the mass of the roller",
        "C": "Pushing changes the direction of gravity",
        "D": "Pulling creates negative acceleration"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="Pulling at angle $\\theta$ gives normal force $N_{\\text{pull}} = mg - F\\sin\\theta$, so limiting friction is $f_k = \\mu(mg - F\\sin\\theta)$. Pushing gives $N_{\\text{push}} = mg + F\\sin\\theta$, which increases friction.",
    given="Pulling vs pushing a roller of mass $m$ with force $F$ at angle $\\theta$.",
    formula="N_{\\text{pull}} = mg - F\\sin\\theta < N_{\\text{push}} = mg + F\\sin\\theta \\implies f_{\\text{pull}} < f_{\\text{push}}",
    steps="1. When pulling at angle $\\theta$: The vertical component $F\\sin\\theta$ acts upward, reducing the normal force to $N = mg - F\\sin\\theta$.\n2. Consequently, friction $f = \\mu N$ is smaller.\n3. When pushing at angle $\\theta$: The vertical component $F\\sin\\theta$ acts downward, increasing normal force to $N = mg + F\\sin\\theta$.\n4. Friction increases, requiring greater effort.\n5. Hence, pulling is easier than pushing.",
    tip="Classic NCERT reasoning question: Pulling decreases $N$ (less friction); Pushing increases $N$ (more friction)!",
    why_wrong="Option B is absurd; mass is an invariant intrinsic property."
))

# Q165 - Medium
qs.append(make_lom_q(
    num=165,
    question="A block of mass $m = 10\\text{ kg}$ is released from rest on a smooth incline of angle $\\theta = 30^\\circ$. The distance traveled by the block down the incline in $2\\text{ s}$ is: (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "9.8 m",
        "B": "19.6 m",
        "C": "4.9 m",
        "D": "14.7 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="On a smooth incline, the downhill acceleration is $a = g\\sin\\theta$. Distance from rest is $s = \\frac{1}{2}at^2$.",
    given="$m = 10\\text{ kg}$, $\\theta = 30^\\circ$, $g = 9.8\\text{ m/s}^2$, $t = 2\\text{ s}$, $u = 0$.",
    formula="a = g\\sin\\theta = 9.8\\sin 30^\\circ = 4.9\\text{ m/s}^2,\\quad s = \\frac{1}{2}at^2",
    steps="1. Downhill acceleration: $a = g\\sin 30^\\circ = 9.8 \\times 0.5 = 4.9\\text{ m/s}^2$.\n2. Distance in $2\\text{ s}$: $s = \\frac{1}{2} a t^2 = \\frac{1}{2}(4.9)(2^2) = \\frac{1}{2}(4.9)(4) = 4.9 \\times 2 = 9.8\\text{ m}$.",
    tip="Notice that acceleration down a smooth incline $a = g\\sin\\theta$ is completely INDEPENDENT of mass $m$!",
    why_wrong="Option B ($19.6\\text{ m}$) forgets the $\\sin 30^\\circ = 0.5$ factor (free fall distance)."
))

# Q166 - Medium
qs.append(make_lom_q(
    num=166,
    question="A helicopter of mass $2000\\text{ kg}$ accelerates vertically upward at $2.2\\text{ m/s}^2$. What is the upward lift force exerted by the air on the helicopter? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "24000 N (24 kN)",
        "B": "19600 N",
        "C": "4400 N",
        "D": "15200 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="FBD of helicopter accelerating upward: Upward lift $F_{\\text{lift}}$ minus downward gravity $mg$ equals $ma$: $F_{\\text{lift}} = m(g + a)$.",
    given="$m = 2000\\text{ kg}$, $a = 2.2\\text{ m/s}^2$, $g = 9.8\\text{ m/s}^2$.",
    formula="F_{\\text{lift}} - mg = ma \\implies F_{\\text{lift}} = m(g + a)",
    steps="1. Effective acceleration: $g + a = 9.8 + 2.2 = 12.0\\text{ m/s}^2$.\n2. Lift force: $F_{\\text{lift}} = m(g + a) = 2000 \\times 12.0 = 24000\\text{ N} = 24\\text{ kN}$.",
    tip="Accelerating upward $\\implies F = m(g + a)$. Accelerating downward $\\implies F = m(g - a)$!",
    why_wrong="Option B ($19600\\text{ N}$) is the lift required only for hovering ($a = 0$)."
))

# Q167 - Medium
qs.append(make_lom_q(
    num=167,
    question="A block of mass $m$ on a horizontal frictionless surface is acted upon by two forces $\\vec{F}_1 = 8\\hat{i}\\text{ N}$ and $\\vec{F}_2 = 6\\hat{j}\\text{ N}$. If the block accelerates at $5\\text{ m/s}^2$, what is the mass $m$ of the block?",
    options={
        "A": "2 kg",
        "B": "4 kg",
        "C": "1.4 kg",
        "D": "2.8 kg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="Compute the magnitude of the net horizontal force: $F_{\\text{net}} = \\sqrt{F_x^2 + F_y^2}$. Mass is $m = F_{\\text{net}} / a$.",
    given="$F_1 = 8\\text{ N}$, $F_2 = 6\\text{ N}$ at $90^\\circ$, $a = 5\\text{ m/s}^2$.",
    formula="F_{\\text{net}} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = 10\\text{ N},\\quad m = \\frac{F_{\\text{net}}}{a}",
    steps="1. Magnitude of net force: $F_{\\text{net}} = \\sqrt{8^2 + 6^2} = 10\\text{ N}$.\n2. Mass: $m = \\frac{10\\text{ N}}{5\\text{ m/s}^2} = 2\\text{ kg}$.",
    tip="$(6, 8, 10)$ is a standard 3-4-5 right triangle! $F = 10\\text{ N} \\implies m = 10 / 5 = 2\\text{ kg}$.",
    why_wrong="Option C ($1.4\\text{ kg}$) is $(8 + 6) / 10 = 1.4$, adding scalars instead of vectors."
))

# Q168 - Medium
qs.append(make_lom_q(
    num=168,
    question="A body of mass $2\\text{ kg}$ is suspended by two light strings attached to a horizontal ceiling. One string makes an angle of $60^\\circ$ with the vertical, and the other makes an angle of $30^\\circ$ with the vertical. What are the tensions $T_1$ and $T_2$ in the strings? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "T_1 (at 60°) = 9.8 N, T_2 (at 30°) = 9.8\\sqrt{3} N (approx 17.0 N)",
        "B": "T_1 = 9.8\\sqrt{3} N, T_2 = 9.8 N",
        "C": "T_1 = 19.6 N, T_2 = 19.6 N",
        "D": "T_1 = 4.9 N, T_2 = 4.9\\sqrt{3} N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="Notice that the angle between the two strings is $60^\\circ + 30^\\circ = 90^\\circ$, so the strings are perpendicular. Resolve horizontally: $T_1\\sin 60^\\circ = T_2\\sin 30^\\circ$. Resolve vertically: $T_1\\cos 60^\\circ + T_2\\cos 30^\\circ = mg$.",
    given="$m = 2\\text{ kg}$, $mg = 19.6\\text{ N}$, $\\theta_1 = 60^\\circ$ to vertical, $\\theta_2 = 30^\\circ$ to vertical.",
    formula="T_1\\sin 60^\\circ = T_2\\sin 30^\\circ \\implies T_2 = T_1\\sqrt{3}",
    steps="1. Horizontal balance: $T_1\\sin 60^\\circ = T_2\\sin 30^\\circ \\implies T_1\\left(\\frac{\\sqrt{3}}{2}\\right) = T_2\\left(\\frac{1}{2}\\right) \\implies T_2 = T_1\\sqrt{3}$.\n2. Vertical balance: $T_1\\cos 60^\\circ + T_2\\cos 30^\\circ = 19.6\\text{ N}$.\n3. Substitute $T_2$: $T_1(0.5) + (T_1\\sqrt{3})\\left(\\frac{\\sqrt{3}}{2}\\right) = 19.6$.\n4. $0.5 T_1 + 1.5 T_1 = 19.6 \\implies 2 T_1 = 19.6 \\implies T_1 = 9.8\\text{ N}$.\n5. Then $T_2 = T_1\\sqrt{3} = 9.8\\sqrt{3}\\text{ N} \\approx 16.97\\text{ N}$.",
    tip="Since strings are perpendicular ($90^\\circ$), $T_1 = mg\\cos 60^\\circ = mg/2 = 9.8\\text{ N}$ and $T_2 = mg\\cos 30^\\circ = 9.8\\sqrt{3}\\text{ N}$!",
    why_wrong="Option B inverts the tensions."
))

# Q169 - Medium
qs.append(make_lom_q(
    num=169,
    question="A block of mass $m$ is pushed up a smooth inclined plane of angle $\\theta$ with a constant velocity $v$ by a force $F$ directed parallel to the incline. What is the magnitude of the pushing force $F$?",
    options={
        "A": "mg sin\\theta",
        "B": "mg cos\\theta",
        "C": "mg tan\\theta",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Net force and free-body diagrams",
    concept="Moving with constant velocity means acceleration is zero ($a = 0$). By Newton's second law, the uphill applied force $F$ must exactly balance the downhill component of gravity $mg\\sin\\theta$.",
    given="Constant velocity $v$, smooth incline $\\theta$, $F$ parallel to plane.",
    formula="\\sum F_\\parallel = F - mg\\sin\\theta = 0 \\implies F = mg\\sin\\theta",
    steps="1. The surface is smooth, so friction $f = 0$.\n2. Downhill force component of gravity is $mg\\sin\\theta$.\n3. Since velocity is constant, acceleration $a = 0$.\n4. Therefore, the net force along the incline is zero: $F - mg\\sin\\theta = 0 \\implies F = mg\\sin\\theta$.",
    tip="Constant velocity $\\implies a = 0 \\implies$ Applied force = Opposing force! For a smooth incline, opposing force is simply $mg\\sin\\theta$.",
    why_wrong="Option D ($mg$) would be required for lifting the block vertically upward, not pushing it along the incline."
))

# Q170 - Hard
qs.append(make_lom_q(
    num=170,
    question="Two blocks of masses $m_1 = 2\\text{ kg}$ and $m_2 = 4\\text{ kg}$ are connected by a light spring of stiffness $k = 200\\text{ N/m}$ on a smooth horizontal table. A constant pulling force $F = 30\\text{ N}$ is applied horizontally to mass $m_2$. At a certain instant, block $m_1$ has an acceleration of $3\\text{ m/s}^2$. What is the acceleration of block $m_2$ at that exact instant?",
    options={
        "A": "6.0 m/s^2",
        "B": "5.0 m/s^2",
        "C": "3.0 m/s^2",
        "D": "7.5 m/s^2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Net force and free-body diagrams",
    concept="Use individual FBDs: The spring force $F_s$ is the ONLY horizontal force acting on $m_1$, so $F_s = m_1 a_1$. On block $m_2$, the net force is $F - F_s = m_2 a_2$.",
    given="$m_1 = 2\\text{ kg}$, $m_2 = 4\\text{ kg}$, $F = 30\\text{ N}$ on $m_2$, $a_1 = 3\\text{ m/s}^2$.",
    formula="F_s = m_1 a_1,\\quad F - F_s = m_2 a_2 \\implies a_2 = \\frac{F - m_1 a_1}{m_2}",
    steps="1. FBD on $m_1$: The spring tension $F_s$ pulls $m_1$.\n   $$F_s = m_1 a_1 = 2\\text{ kg} \\times 3\\text{ m/s}^2 = 6\\text{ N}$$\n2. FBD on $m_2$: External pull $F$ acts forward, spring tension $F_s$ pulls backward.\n   $$F_{\\text{net}, 2} = F - F_s = 30\\text{ N} - 6\\text{ N} = 24\\text{ N}$$\n3. Acceleration of $m_2$:\n   $$a_2 = \\frac{F_{\\text{net}, 2}}{m_2} = \\frac{24\\text{ N}}{4\\text{ kg}} = 6.0\\text{ m/s}^2$$.\n4. Notice: Center of mass acceleration is $a_{\\text{cm}} = \\frac{F}{m_1+m_2} = \\frac{30}{6} = 5.0\\text{ m/s}^2$, and $\\frac{2(3) + 4(6)}{6} = \\frac{30}{6} = 5.0\\text{ m/s}^2$!",
    tip="FBD of block 1 gives the instantaneous spring force $F_s = m_1 a_1 = 6\\text{ N}$. Then apply FBD on block 2: $a_2 = (F - F_s)/m_2 = (30-6)/4 = 6\\text{ m/s}^2$!",
    why_wrong="Option B ($5.0\\text{ m/s}^2$) is the acceleration of the center of mass, not of block $m_2$."
))

# Q171 - Hard
qs.append(make_lom_q(
    num=171,
    question="In the previous two-block spring system ($m_1 = 2\\text{ kg}, m_2 = 4\\text{ kg}, k = 200\\text{ N/m}$), what is the extension $x$ of the spring at that instant?",
    options={
        "A": "0.03 m (3 cm)",
        "B": "0.06 m (6 cm)",
        "C": "0.15 m (15 cm)",
        "D": "0.015 m (1.5 cm)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Net force and free-body diagrams",
    concept="The spring force is given by Hooke's law: $F_s = k x$. From the previous FBD, $F_s = 6\\text{ N}$.",
    given="$k = 200\\text{ N/m}$, $F_s = 6\\text{ N}$.",
    formula="F_s = k x \\implies x = \\frac{F_s}{k}",
    steps="1. Instantaneous spring force: $F_s = 6\\text{ N}$.\n2. Hooke's law: $F_s = k x$.\n3. Extension: $x = \\frac{6\\text{ N}}{200\\text{ N/m}} = 0.03\\text{ m} = 3\\text{ cm}$.",
    tip="Hooke's law $x = F_s / k = 6 / 200 = 0.03\\text{ m}$!",
    why_wrong="Option C ($0.15\\text{ m}$) would be the steady-state extension where $F_s = \\frac{m_1}{m_1+m_2}F = \\frac{2}{6}(30) = 10\\text{ N} \\implies 10/200 = 0.05\\text{ m}$."
))

# Q172 - Hard
qs.append(make_lom_q(
    num=172,
    question="A bead of mass $m$ is threaded on a smooth horizontal wire. Two light strings of equal length $L$ are tied to the bead, carrying two identical masses $M$ hanging freely under gravity through slots. If the angle between the two strings is $2\\theta$, what upward force must be applied to the bead to keep it in vertical equilibrium?",
    options={
        "A": "(m + 2M)g",
        "B": "mg + 2M g \\cos\\theta",
        "C": "2M g \\sin\\theta",
        "D": "(m + M)g"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Net force and free-body diagrams",
    concept="For the entire system in static equilibrium, the net vertical force must balance the total weight of all three bodies: $F_{\\text{ext}} = (m + 2M)g$.",
    given="Bead mass $m$, two hanging masses $M$ each.",
    formula="\\sum F_y = 0 \\implies F = W_{\\text{total}} = (m + 2M)g",
    steps="1. Each hanging mass is in vertical equilibrium, so string tension $T = Mg$.\n2. The bead experiences downward pull from both strings plus its own weight $mg$.\n3. The vertical components of the two string tensions add up to $2 T = 2Mg$.\n4. Total downward force on the bead is $mg + 2Mg = (m + 2M)g$.\n5. To maintain vertical equilibrium, the upward applied force must be $(m + 2M)g$.",
    tip="System thinking: Total upward force on any isolated equilibrium system MUST equal total weight $(m + 2M)g$!",
    why_wrong="Option B introduces an unnecessary cosine factor, but the masses hang vertically so their tension is $Mg$."
))

# Q173 - Hard
qs.append(make_lom_q(
    num=173,
    question="A block of mass $m$ is held stationary against a vertical wall by a force $F$ applied at an angle $\\theta$ above the horizontal. If the coefficient of static friction between block and wall is $\\mu_s$, what is the minimum force $F_{\\min}$ required to prevent the block from sliding down?",
    options={
        "A": "\\frac{mg}{\\sin\\theta + \\mu_s \\cos\\theta}",
        "B": "\\frac{mg}{\\cos\\theta + \\mu_s \\sin\\theta}",
        "C": "\\frac{mg}{\\mu_s \\cos\\theta}",
        "D": "\\frac{mg}{\\sin\\theta - \\mu_s \\cos\\theta}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Net force and free-body diagrams",
    concept="FBD of block impending downward motion: Normal force is $N = F\\cos\\theta$. Upward forces are $F\\sin\\theta$ (vertical push) and $f_s = \\mu_s N = \\mu_s F\\cos\\theta$ (limiting friction). Downward force is $mg$.",
    given="Force $F$ at angle $\\theta$ above horizontal, mass $m$, friction $\\mu_s$.",
    formula="F\\sin\\theta + \\mu_s (F\\cos\\theta) = mg \\implies F(\\sin\\theta + \\mu_s\\cos\\theta) = mg",
    steps="1. Horizontal equilibrium: $N = F\\cos\\theta$.\n2. Impending downward sliding means static friction acts UPWARD with maximum value $f_L = \\mu_s N = \\mu_s F\\cos\\theta$.\n3. Vertical equilibrium:\n   $$F\\sin\\theta + f_L - mg = 0$$\n   $$F\\sin\\theta + \\mu_s F\\cos\\theta = mg$$\n   $$F(\\sin\\theta + \\mu_s\\cos\\theta) = mg$$\n4. Solve for $F_{\\min}$:\n   $$F_{\\min} = \\frac{mg}{\\sin\\theta + \\mu_s\\cos\\theta}$$.",
    tip="FBD equilibrium equations: $N = F\\cos\\theta$ and $F\\sin\\theta + \\mu_s N = mg \\implies F = \\frac{mg}{\\sin\\theta + \\mu_s\\cos\\theta}$! To minimize $F$, choose $\\tan\\theta = 1/\\mu_s$.",
    why_wrong="Option D has a minus sign, which would correspond to impending upward motion."
))

# ==============================================================================
# Topic 12: Tension in strings (Q174 to Q189, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q174 - Easy
qs.append(make_lom_q(
    num=174,
    question="In an ideal string used in physics problems, which two properties are always assumed?",
    options={
        "A": "Massless and inextensible (zero mass and constant length)",
        "B": "Elastic and heavy",
        "C": "Rigid and conductive",
        "D": "Frictionless and compressible"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Tension in strings",
    concept="An ideal string is assumed to be massless ($m = 0$) and inextensible (cannot stretch, so connected bodies have identical acceleration magnitudes).",
    given="Ideal string idealizations.",
    formula="m_{\\text{string}} = 0 \\implies T = \\text{uniform everywhere};\\quad \\Delta L = 0 \\implies a_1 = a_2",
    steps="1. Massless assumption ensures tension $T$ is the same at every point along the string.\n2. Inextensibility ensures the distance along the string remains constant, tying the accelerations of connected masses together.\n3. Hence, the string is massless and inextensible.",
    tip="Massless string $\\implies$ Tension is UNIFORM throughout. Inextensible string $\\implies$ Acceleration magnitude is EQUAL for both ends!",
    why_wrong="Option B describes real rubber cords or heavy chains, not ideal strings."
))

# Q175 - Easy
qs.append(make_lom_q(
    num=175,
    question="A mass of $5\\text{ kg}$ hangs stationary from a ceiling by an ideal light string. What is the tension in the string? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "49 N",
        "B": "5 N",
        "C": "98 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Tension in strings",
    concept="For a stationary hanging mass in equilibrium, upward tension balances downward weight: $T = mg$.",
    given="$m = 5\\text{ kg}$, $g = 9.8\\text{ m/s}^2$, $a = 0$.",
    formula="T = mg",
    steps="1. FBD of mass: Upward tension $T$, downward gravity $mg$.\n2. Equilibrium equation: $T - mg = 0 \\implies T = mg$.\n3. Substitute values: $T = 5 \\times 9.8 = 49\\text{ N}$.",
    tip="Hanging stationary: $T = mg$! If accelerating upward, $T = m(g+a)$. If accelerating downward, $T = m(g-a)$.",
    why_wrong="Option B ($5\\text{ N}$) confuses mass with force."
))

# Q176 - Easy
qs.append(make_lom_q(
    num=176,
    question="Can an ideal flexible string exert a pushing force on an object?",
    options={
        "A": "No, a flexible string can only pull (tension must be positive or zero: T >= 0)",
        "B": "Yes, if the string is very short",
        "C": "Yes, when accelerated rapidly",
        "D": "Yes, under high pressure"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Tension in strings",
    concept="Strings cannot support compressive stress; they go slack ($T = 0$) when pushed. Tension can only be a pulling force ($T \\ge 0$).",
    given="Mechanical nature of strings.",
    formula="T \\ge 0\\text{ (string goes slack when } T = 0\\text{)}",
    steps="1. Flexible ropes and cords can only transmit tensile stress (pulling forces).\n2. Any attempt to compress a flexible string causes it to buckle and go slack.\n3. Therefore, $T \\ge 0$ is a fundamental constraint in string mechanics.",
    tip="Strings can only PULL ($T \\ge 0$), never push! If a calculation gives negative tension, the string has gone slack.",
    why_wrong="Options B, C, and D are physically impossible for flexible strings."
))

# Q177 - Easy
qs.append(make_lom_q(
    num=177,
    question="A bird of mass $m$ sits on the midpoint of a stretched horizontal wire of length $L$. Can the wire remain completely horizontal?",
    options={
        "A": "No, the wire must sag by a non-zero angle because a horizontal tension has zero vertical component to support weight",
        "B": "Yes, if the wire is made of steel",
        "C": "Yes, if the bird sits very gently",
        "D": "Yes, if the wire is under infinite tension"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Tension in strings",
    concept="Vertical force balance requires $2T\\sin\\theta = mg$, where $\\theta$ is the sag angle. If $\\theta = 0$, $2T\\sin 0 = 0 \\neq mg$. Thus, $\\theta$ must be strictly greater than zero.",
    given="Bird on horizontal wire.",
    formula="2T\\sin\\theta = mg \\implies \\sin\\theta = \\frac{mg}{2T}",
    steps="1. The bird exerts downward force $mg$.\n2. To support this weight, the wire must have an upward vertical force component.\n3. A purely horizontal wire has zero vertical force component ($\sin 0 = 0$).\n4. Therefore, the wire must sag to create an angle $\\theta > 0$ such that $2T\\sin\\theta = mg$.",
    tip="No force, however large, can pull a cable completely straight when any transverse weight acts on it!",
    why_wrong="Option D is physically impossible as infinite tension does not exist in nature."
))

# Q178 - Medium
qs.append(make_lom_q(
    num=178,
    question="Two blocks of masses $m_1 = 4\\text{ kg}$ and $m_2 = 6\\text{ kg}$ are connected by a light string on a frictionless horizontal table. A horizontal pulling force $F = 30\\text{ N}$ is applied to $m_2$. What is the tension $T$ in the string connecting the two blocks?",
    options={
        "A": "12 N",
        "B": "18 N",
        "C": "15 N",
        "D": "30 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="Both blocks accelerate together at $a = \\frac{F}{m_1 + m_2}$. The tension in the connecting string is the sole horizontal force accelerating $m_1$: $T = m_1 a$.",
    given="$m_1 = 4\\text{ kg}$, $m_2 = 6\\text{ kg}$, $F = 30\\text{ N}$ on $m_2$.",
    formula="a = \\frac{F}{m_1 + m_2},\\quad T = m_1 a = \\frac{m_1}{m_1 + m_2} F",
    steps="1. Common acceleration: $a = \\frac{30\\text{ N}}{4 + 6\\text{ kg}} = \\frac{30}{10} = 3\\text{ m/s}^2$.\n2. FBD of trailing block $m_1$: Only tension $T$ acts horizontally.\n3. $T = m_1 a = 4\\text{ kg} \\times 3\\text{ m/s}^2 = 12\\text{ N}$.\n4. Check on $m_2$: $F - T = m_2 a \\implies 30 - 12 = 6(3) = 18\\text{ N}$ (consistent!).",
    tip="Connecting string tension: $T = \\frac{m_{\\text{trailing}}}{m_{\\text{total}}} F = \\frac{4}{10} \\times 30 = 12\\text{ N}$!",
    why_wrong="Option B ($18\\text{ N}$) is the tension if $F$ was applied to $m_1$ instead of $m_2$."
))

# Q179 - Medium
qs.append(make_lom_q(
    num=179,
    question="In the previous two-block system, if the same force $F = 30\\text{ N}$ is applied to $m_1$ pulling to the left, what is the new tension in the connecting string?",
    options={
        "A": "18 N",
        "B": "12 N",
        "C": "15 N",
        "D": "30 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="When pulling on $m_1$, the string now accelerates the trailing block $m_2 = 6\\text{ kg}$: $T = m_2 a$.",
    given="$m_1 = 4\\text{ kg}$, $m_2 = 6\\text{ kg}$, $F = 30\\text{ N}$ on $m_1$.",
    formula="a = \\frac{F}{m_1 + m_2} = 3\\text{ m/s}^2,\\quad T' = m_2 a",
    steps="1. Acceleration remains $a = 3\\text{ m/s}^2$.\n2. FBD of trailing block $m_2$: $T' = m_2 a = 6 \\times 3 = 18\\text{ N}$.\n3. Tension is $18\\text{ N}$.",
    tip="Pulling the smaller block results in higher tension ($18\\text{ N}$) because the string has to pull the larger mass ($6\\text{ kg}$)!",
    why_wrong="Option B ($12\\text{ N}$) was the tension when pulling $m_2$."
))

# Q180 - Medium
qs.append(make_lom_q(
    num=180,
    question="Three blocks of masses $m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, and $m_3 = 3\\text{ kg}$ are connected in series by two light strings on a frictionless horizontal table. A pulling force $F = 18\\text{ N}$ is applied to $m_3$. What are the tensions $T_1$ (between $m_1$ and $m_2$) and $T_2$ (between $m_2$ and $m_3$)?",
    options={
        "A": "T_1 = 3 N, T_2 = 9 N",
        "B": "T_1 = 6 N, T_2 = 12 N",
        "C": "T_1 = 3 N, T_2 = 6 N",
        "D": "T_1 = 9 N, T_2 = 15 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="Total mass $M = 1 + 2 + 3 = 6\\text{ kg}$. Acceleration $a = F/M = 18/6 = 3\\text{ m/s}^2$. String 1 accelerates $m_1$: $T_1 = m_1 a$. String 2 accelerates $(m_1 + m_2)$: $T_2 = (m_1 + m_2) a$.",
    given="$m_1 = 1\\text{ kg}$, $m_2 = 2\\text{ kg}$, $m_3 = 3\\text{ kg}$, $F = 18\\text{ N}$.",
    formula="a = \\frac{F}{m_1 + m_2 + m_3},\\quad T_1 = m_1 a,\\quad T_2 = (m_1 + m_2) a",
    steps="1. System acceleration: $a = \\frac{18}{1 + 2 + 3} = \\frac{18}{6} = 3\\text{ m/s}^2$.\n2. String 1 pulls only $m_1$: $T_1 = m_1 a = 1 \\times 3 = 3\\text{ N}$.\n3. String 2 pulls both $m_1$ and $m_2$: $T_2 = (m_1 + m_2) a = (1 + 2) \\times 3 = 3 \\times 3 = 9\\text{ N}$.\n4. Therefore, $T_1 = 3\\text{ N}$ and $T_2 = 9\\text{ N}$.",
    tip="Each string pulls ALL the mass trailing behind it! $T_1 = 1 \\times 3 = 3\\text{ N}$, $T_2 = (1+2) \\times 3 = 9\\text{ N}$.",
    why_wrong="Option C sets $T_2 = m_2 a = 6\\text{ N}$, forgetting that string 2 also pulls block 1."
))

# Q181 - Medium
qs.append(make_lom_q(
    num=181,
    question="A monkey of mass $m = 40\\text{ kg}$ climbs up a vertical light rope with an acceleration of $2\\text{ m/s}^2$. What is the tension in the rope? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "472 N",
        "B": "392 N",
        "C": "312 N",
        "D": "80 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="FBD of monkey: Upward tension $T$ minus downward gravity $mg$ equals $ma$: $T = m(g + a)$.",
    given="$m = 40\\text{ kg}$, $a = 2\\text{ m/s}^2$ upwards, $g = 9.8\\text{ m/s}^2$.",
    formula="T - mg = ma \\implies T = m(g + a)",
    steps="1. FBD on monkey: $T$ acts upward, $mg$ acts downward.\n2. Equation of motion: $T - mg = ma$.\n3. Solve for tension: $T = m(g + a) = 40(9.8 + 2) = 40(11.8) = 472\\text{ N}$.",
    tip="Climbing UP with acceleration $a \\implies T = m(g + a)$. Climbing DOWN with acceleration $a \\implies T = m(g - a)$!",
    why_wrong="Option B ($392\\text{ N}$) is for climbing with constant speed ($a = 0$)."
))

# Q182 - Medium
qs.append(make_lom_q(
    num=182,
    question="In the previous monkey problem ($m = 40\\text{ kg}$), if the monkey climbs down the rope with an acceleration of $2\\text{ m/s}^2$, what is the tension in the rope?",
    options={
        "A": "312 N",
        "B": "472 N",
        "C": "392 N",
        "D": "80 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="For downward acceleration: $mg - T = ma \\implies T = m(g - a)$.",
    given="$m = 40\\text{ kg}$, $a = 2\\text{ m/s}^2$ downwards, $g = 9.8\\text{ m/s}^2$.",
    formula="T = m(g - a)",
    steps="1. FBD for downward acceleration: $mg - T = ma$.\n2. Solve for $T$: $T = m(g - a) = 40(9.8 - 2) = 40(7.8) = 312\\text{ N}$.",
    tip="Downwards acceleration reduces tension: $T = 40 \\times 7.8 = 312\\text{ N}$!",
    why_wrong="Option B ($472\\text{ N}$) is for upward acceleration."
))

# Q183 - Medium
qs.append(make_lom_q(
    num=183,
    question="A rope of breaking strength $600\\text{ N}$ hangs from a branch. A man of mass $50\\text{ kg}$ wants to slide down the rope without breaking it. What is the minimum downward acceleration with which he must slide? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "0 m/s^2 (The rope will not break even if he hangs stationary)",
        "B": "2 m/s^2",
        "C": "5 m/s^2",
        "D": "10 m/s^2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="Check the stationary weight of the man: $W = mg = 50 \\times 10 = 500\\text{ N}$. Since the breaking strength is $600\\text{ N} > 500\\text{ N}$, the rope will not break even if he hangs at rest ($a = 0$).",
    given="$m = 50\\text{ kg}$, $g = 10\\text{ m/s}^2$, $T_{\\max} = 600\\text{ N}$.",
    formula="T = m(g - a) \\le T_{\\max}",
    steps="1. The weight of the man is $mg = 50 \\times 10 = 500\\text{ N}$.\n2. The breaking strength of the rope is $600\\text{ N}$.\n3. Since $500\\text{ N} < 600\\text{ N}$, the static tension does not exceed the threshold.\n4. Therefore, he can slide down at any acceleration, including $a = 0$ (constant speed or at rest).",
    tip="Always compare $mg$ with $T_{\\max}$ first! Here $500\\text{ N} < 600\\text{ N}$, so no acceleration is required to keep tension below the limit.",
    why_wrong="Option B would be needed if the breaking strength were $400\\text{ N}$ ($a = g - T/m = 10 - 8 = 2$)."
))

# Q184 - Medium
qs.append(make_lom_q(
    num=184,
    question="A heavy rope of mass $m$ and length $L$ hangs vertically from a ceiling. What is the tension in the rope at a distance $y$ measured from the free bottom end?",
    options={
        "A": "\\left(\\frac{m}{L}\\right) g y",
        "B": "\\left(\\frac{m}{L}\\right) g (L - y)",
        "C": "mg",
        "D": "\\frac{1}{2}mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="For a massive rope hanging under its own weight, the tension at distance $y$ from the bottom supports only the weight of the portion of rope hanging below that point: $T(y) = m_{\\text{below}} g = \\left(\\frac{m}{L} y\\right) g$.",
    given="Rope mass $m$, length $L$, distance $y$ from free bottom end.",
    formula="T(y) = \\mu y g = \\left(\\frac{m}{L}\\right) g y",
    steps="1. Cut the rope mentally at distance $y$ from the bottom.\n2. The mass of the hanging segment below the cut is $m' = \\frac{m}{L} y$.\n3. In static equilibrium, the tension at the cut must balance this weight: $T(y) = m' g = \\left(\\frac{m}{L}\\right) g y$.\n4. At the bottom end ($y = 0$), $T = 0$.\n5. At the ceiling ($y = L$), $T = mg$.",
    tip="Tension in a hanging heavy rope varies linearly with distance from bottom: $T(y) = \\frac{mgy}{L}$. Bottom has zero tension; top supports the full weight $mg$!",
    why_wrong="Option B is the tension if $y$ was measured from the top ceiling."
))

# Q185 - Medium
qs.append(make_lom_q(
    num=185,
    question="In the previous hanging heavy rope problem (mass $m$, length $L$), a block of mass $M$ is attached to the bottom end. What is the tension in the rope at a distance $y$ from the bottom end?",
    options={
        "A": "M g + \\left(\\frac{m}{L}\\right) g y",
        "B": "(M + m) g",
        "C": "M g",
        "D": "\\left(\\frac{M + m}{L}\\right) g y"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Tension in strings",
    concept="The tension at height $y$ from the bottom must support the attached block of mass $M$ plus the mass of the rope below $y$: $T(y) = M g + \\left(\\frac{m}{L} y\\right) g$.",
    given="Attached mass $M$ at bottom, rope mass $m$, length $L$.",
    formula="T(y) = M g + \\left(\\frac{m}{L}\\right) g y",
    steps="1. Total mass supported below the cross-section at $y$ is $M + m' = M + \\frac{m}{L}y$.\n2. In equilibrium, tension equals the weight of this total mass: $T(y) = (M + m')g = Mg + \\left(\\frac{m}{L}\\right)gy$.\n3. At the bottom ($y=0$): $T = Mg$.\n4. At the top ($y=L$): $T = (M + m)g$.",
    tip="At bottom: $T = Mg$. At top: $T = (M + m)g$. Linear interpolation in between: $T(y) = Mg + \\frac{mgy}{L}$!",
    why_wrong="Option B is the tension at the TOP of the rope ($y = L$)."
))

# Q186 - Hard
qs.append(make_lom_q(
    num=186,
    question="A heavy uniform rope of length $L$ and mass $m$ is pulled vertically upward with a constant acceleration $a$ by a force $F$ applied at the top end. What is the tension in the rope at a distance $x$ from the top end?",
    options={
        "A": "m(g + a)\\left(1 - \\frac{x}{L}\\right)",
        "B": "m(g + a)\\left(\\frac{x}{L}\\right)",
        "C": "m(g - a)\\left(1 - \\frac{x}{L}\\right)",
        "D": "mg\\left(1 - \\frac{x}{L}\\right)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Tension in strings",
    concept="Effective gravity in upward accelerating frame is $g_{\\text{eff}} = g + a$. The segment below distance $x$ has length $L - x$ and mass $m' = m\\left(1 - \\frac{x}{L}\\right)$. The tension accelerates this segment: $T(x) = m'(g + a)$.",
    given="Upward acceleration $a$, distance $x$ from top end.",
    formula="T(x) = m\\left(1 - \\frac{x}{L}\\right)(g + a)",
    steps="1. The portion below distance $x$ has length $L - x$ and mass $m' = m\\frac{L-x}{L} = m\\left(1 - \\frac{x}{L}\\right)$.\n2. FBD of this lower portion: Upward tension $T(x)$, downward gravity $m'g$, accelerating upward at $a$.\n3. Equation of motion: $T(x) - m'g = m'a \\implies T(x) = m'(g + a)$.\n4. Substitute $m'$: $T(x) = m(g + a)\\left(1 - \\frac{x}{L}\\right)$.\n5. At the top ($x = 0$): $T = m(g+a) = F$.\n6. At the bottom ($x = L$): $T = 0$.",
    tip="Effective gravity replacement: Replace $g$ with $(g + a)$ in the static formula $T(x) = mg(1 - x/L)$!",
    why_wrong="Option B gives zero tension at the top and maximum at the bottom, which is backward."
))

# Q187 - Hard
qs.append(make_lom_q(
    num=187,
    question="A uniform rope of mass $m$ and length $L$ hangs over a smooth peg such that a length $l$ hangs on one side and length $(L - l)$ hangs on the other side, with $l > L - l$. What is the acceleration of the rope as it begins to slide off the peg?",
    options={
        "A": "\\left(\\frac{2l - L}{L}\\right) g",
        "B": "\\left(\\frac{l}{L}\\right) g",
        "C": "\\left(\\frac{L - l}{L}\\right) g",
        "D": "\\left(\\frac{2l}{L}\\right) g"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Tension in strings",
    concept="The net driving force is the difference in weight between the two sides: $F_{\\text{net}} = m_1 g - m_2 g = \\left(\\frac{m}{L}l\\right)g - \\left(\\frac{m}{L}(L - l)\\right)g = \\frac{m}{L}(2l - L)g$. Acceleration is $a = F_{\\text{net}} / m$.",
    given="Rope length $L$, mass $m$, side lengths $l$ and $L - l$.",
    formula="a = \\frac{F_{\\text{net}}}{M_{\\text{total}}} = \\frac{\\frac{m}{L}(l - (L - l))g}{m} = \\left(\\frac{2l - L}{L}\\right)g",
    steps="1. Weight of longer side: $W_1 = \\frac{m}{L} l g$.\n2. Weight of shorter side: $W_2 = \\frac{m}{L} (L - l) g$.\n3. Net driving gravitational force:\n   $$F_{\\text{net}} = W_1 - W_2 = \\frac{m g}{L} [l - (L - l)] = \\frac{mg}{L}(2l - L)$$\n4. Total mass being accelerated is the entire rope of mass $m$.\n5. Acceleration: $a = \\frac{F_{\\text{net}}}{m} = \\left(\\frac{2l - L}{L}\\right) g$.",
    tip="Atwood's machine for a continuous rope: $a = \\frac{M_1 - M_2}{M_1 + M_2}g = \\frac{l - (L-l)}{L}g = \\frac{2l - L}{L}g$!",
    why_wrong="Option B neglects the opposing weight of the shorter side."
))

# Q188 - Hard
qs.append(make_lom_q(
    num=188,
    question="In the previous rope problem sliding over a peg, what is the tension in the rope right at the peg at that instant?",
    options={
        "A": "\\frac{2 m g l (L - l)}{L^2}",
        "B": "\\frac{m g l}{L}",
        "C": "\\frac{m g (L - l)}{L}",
        "D": "\\frac{m g}{2}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Tension in strings",
    concept="Treat as Atwood's machine where $m_1 = \\frac{m}{L}l$ and $m_2 = \\frac{m}{L}(L - l)$. Tension at the peg is $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$.",
    given="$m_1 = \\frac{ml}{L}$, $m_2 = \\frac{m(L - l)}{L}$, total mass $m_1 + m_2 = m$.",
    formula="T = \\frac{2 m_1 m_2 g}{m_1 + m_2} = \\frac{2 \\left(\\frac{ml}{L}\\right) \\left(\\frac{m(L-l)}{L}\\right) g}{m} = \\frac{2 m g l (L - l)}{L^2}",
    steps="1. Acceleration: $a = \\frac{2l - L}{L}g$.\n2. FBD of the shorter side: $T - m_2 g = m_2 a$.\n3. Tension: $T = m_2(g + a) = \\frac{m(L-l)}{L} \\left[ g + \\frac{2l - L}{L}g \\right] = \\frac{m(L-l)g}{L} \\left[ \\frac{L + 2l - L}{L} \\right] = \\frac{m(L-l)g}{L} \\left[ \\frac{2l}{L} \\right] = \\frac{2mgl(L-l)}{L^2}$.",
    tip="Atwood formula for tension: $T = \\frac{2 m_1 m_2}{m_1 + m_2}g$. Works seamlessly for rope segments over a peg!",
    why_wrong="Option D is only true when $l = L/2$ (symmetric equilibrium)."
))

# Q189 - Hard
qs.append(make_lom_q(
    num=189,
    question="A light flexible cord of breaking strength $T_0$ is used to suspend a mass $M$ from a ceiling. If the mass is displaced horizontally and released, it swings as a simple pendulum. At the lowest point of its swing, the speed of the mass is $v$. What is the maximum mass $M$ that can swing with speed $v$ without snapping the cord?",
    options={
        "A": "\\frac{T_0}{g + \\frac{v^2}{L}}",
        "B": "\\frac{T_0}{g - \\frac{v^2}{L}}",
        "C": "\\frac{T_0}{g}",
        "D": "\\frac{T_0}{\\frac{v^2}{L}}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Tension in strings",
    concept="At the lowest point of a vertical swing, tension must provide both the gravitational support and the centripetal acceleration: $T_{\\text{bottom}} - Mg = M \\frac{v^2}{L} \\implies T_{\\text{bottom}} = M\\left(g + \\frac{v^2}{L}\\right)$.",
    given="Breaking tension $T_0$, speed at lowest point $v$, radius $L$.",
    formula="T_{\\max} = M\\left(g + \\frac{v^2}{L}\\right) \\le T_0 \\implies M \\le \\frac{T_0}{g + v^2/L}",
    steps="1. At the bottom of the circular arc, the acceleration is purely centripetal and points upward: $a_c = v^2/L$.\n2. Newton's second law vertically: $T - Mg = M a_c = M \\frac{v^2}{L}$.\n3. Tension at bottom: $T = M\\left(g + \\frac{v^2}{L}\\right)$.\n4. For the cord not to break: $M\\left(g + \\frac{v^2}{L}\\right) \\le T_0$.\n5. Maximum mass: $M_{\\max} = \\frac{T_0}{g + \\frac{v^2}{L}}$.",
    tip="Tension at the bottom of a vertical circle is ALWAYS maximum: $T_{\\text{bottom}} = M(g + v^2/L)$! This is why swinging strings snap at the very bottom.",
    why_wrong="Option B has a minus sign, which would apply at the TOP of the circle."
))

print("Topics 11 & 12 done: 32 questions.")
