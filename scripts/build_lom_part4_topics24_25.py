import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 24: Connected bodies and pulley systems (Q376 to Q391: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q376: Easy (NEET 2017 Verified PYQ)
qs.append(make_lom_q(
    num=376,
    question="Two blocks A and B of masses $3m$ and $m$ respectively are connected by a massless and inextensible string. The whole system is suspended by a light spring of stiffness $k$ from a rigid ceiling. The magnitudes of acceleration of A and B immediately after the string is cut are respectively:",
    options={
        "A": "$g/3$, $g$",
        "B": "$g$, $g$",
        "C": "$3g$, $g$",
        "D": "$g/3$, $g/3$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Connected bodies and pulley systems",
    concept="Before cutting, the spring supports both blocks, so spring tension is $F_s = (3m + m)g = 4mg$. The string tension is $T = mg$. Immediately after cutting the string, the string tension drops instantly to zero ($T = 0$), but the spring cannot change its elongation instantaneously, so $F_s$ remains $4mg$. Block B is under gravity alone ($a_B = g$ downward). For block A, net upward force is $F_s - 3mg = 4mg - 3mg = mg$, giving upward acceleration $a_A = \\frac{mg}{3m} = \\frac{g}{3}$.",
    given="Block A mass $3m$, Block B mass $m$, spring stiffness $k$, string cut.",
    formula="Spring force $F_s = 4mg$ (remains constant immediately after cut); $a_A = \\frac{F_s - 3mg}{3m} = \\frac{g}{3}$; $a_B = g$.",
    steps="1. Before cutting the string, the entire system is in static equilibrium:\n   - Tension in the string supporting B: $T = mg$.\n   - Tension in the spring supporting both A and B: $F_s = (3m + m)g = 4mg$.\n2. Immediately after the string is cut:\n   - Tension in the string vanishes instantly: $T = 0$.\n   - The spring, being elastic, cannot change its length or tension in zero time, so $F_s = 4mg$ remains unchanged.\n3. Acceleration of block B:\n   - The only force on B is downward gravity $mg$.\n   - Newton's second law on B: $mg = m a_B \\implies a_B = g$ (downward).\n4. Acceleration of block A:\n   - Upward force: spring force $F_s = 4mg$.\n   - Downward force: its own weight $3mg$.\n   - Net upward force on A: $F_{\\text{net}} = 4mg - 3mg = mg$.\n   - Applying Newton's second law on A: $F_{\\text{net}} = (3m) a_A \\implies a_A = \\frac{mg}{3m} = \\frac{g}{3}$ (upward).\n5. Therefore, the magnitudes are $g/3$ and $g$.",
    tip="Golden Rule of Cut-String Systems: String tension changes INSTANTANEOUSLY to 0, but spring force CANNOT change instantaneously!",
    why_wrong="Option B assumes spring force adjusts instantly. Option C divides by wrong mass. Option D assumes both accelerate equally.",
    is_pyq=True,
    pyq_year=2017,
    source="NEET UG 2017"
))

# Q377: Easy
qs.append(make_lom_q(
    num=377,
    question="In an ideal Atwood machine, two masses $m_1$ and $m_2$ ($m_1 > m_2$) are connected by a light inextensible string passing over a light frictionless pulley. The acceleration of the system is:",
    options={
        "A": "$\\frac{m_1 - m_2}{m_1 + m_2} g$",
        "B": "$\\frac{m_1 + m_2}{m_1 - m_2} g$",
        "C": "$\\frac{2 m_1 m_2}{m_1 + m_2} g$",
        "D": "$\\frac{m_1 m_2}{m_1 + m_2} g$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Connected bodies and pulley systems",
    concept="For an ideal Atwood machine, net pulling force is $(m_1 - m_2)g$. Total mass being accelerated is $(m_1 + m_2)$. Acceleration is $a = \\frac{\\text{Net pulling force}}{\\text{Total mass}} = \\frac{m_1 - m_2}{m_1 + m_2} g$.",
    given="Two masses $m_1 > m_2$, light inextensible string, frictionless pulley.",
    formula="$a = \\frac{m_1 - m_2}{m_1 + m_2} g$.",
    steps="1. FBD of $m_1$: $m_1 g - T = m_1 a$.\n2. FBD of $m_2$: $T - m_2 g = m_2 a$.\n3. Add the two equations to eliminate tension $T$:\n   $m_1 g - m_2 g = (m_1 + m_2) a$.\n4. Solving for acceleration $a$: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$.",
    tip="Atwood Acceleration: $a = \\frac{m_1 - m_2}{m_1 + m_2} g$. If $m_1 = m_2$, $a = 0$. If $m_2 = 0$, $a = g$.",
    why_wrong="Option B inverts numerator and denominator. Option C is the formula for tension (without the mass dimensions). Option D has wrong dimensions."
))

# Q378: Easy
qs.append(make_lom_q(
    num=378,
    question="In the ideal Atwood machine described above, the tension $T$ in the string is:",
    options={
        "A": "$\\frac{2 m_1 m_2}{m_1 + m_2} g$",
        "B": "$\\frac{m_1 m_2}{m_1 + m_2} g$",
        "C": "$\\frac{m_1 - m_2}{m_1 + m_2} g$",
        "D": "$(m_1 + m_2) g$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Connected bodies and pulley systems",
    concept="Substitute acceleration $a = \\frac{m_1 - m_2}{m_1 + m_2} g$ into $T = m_2(g + a)$ to obtain $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$.",
    given="Atwood machine with masses $m_1$ and $m_2$.",
    formula="$T = \\frac{2 m_1 m_2}{m_1 + m_2} g$.",
    steps="1. From the equation of motion for $m_2$: $T - m_2 g = m_2 a \\implies T = m_2(g + a)$.\n2. Substitute $a = \\frac{m_1 - m_2}{m_1 + m_2} g$:\n   $T = m_2 \\left(g + \\frac{m_1 - m_2}{m_1 + m_2} g\\right) = m_2 g \\left(1 + \\frac{m_1 - m_2}{m_1 + m_2}\\right)$.\n3. Simplify the bracket:\n   $1 + \\frac{m_1 - m_2}{m_1 + m_2} = \\frac{m_1 + m_2 + m_1 - m_2}{m_1 + m_2} = \\frac{2 m_1}{m_1 + m_2}$.\n4. Therefore, $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$.",
    tip="Tension is proportional to the harmonic mean of the two masses: $T = 2 \\mu g$ where $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$ is the reduced mass!",
    why_wrong="Option B misses the factor of 2. Option C is the acceleration expression. Option D is the total weight."
))

# Q379: Easy
qs.append(make_lom_q(
    num=379,
    question="A block of mass $m_1 = 3\\text{ kg}$ lies on a smooth horizontal table and is connected by a light string over a frictionless pulley to a hanging mass $m_2 = 2\\text{ kg}$. Taking $g = 10\\text{ m/s}^2$, what is the acceleration of the system?",
    options={
        "A": "$4\\text{ m/s}^2$",
        "B": "$6\\text{ m/s}^2$",
        "C": "$10\\text{ m/s}^2$",
        "D": "$2\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Connected bodies and pulley systems",
    concept="For a table-pulley system on a smooth table, the sole driving force is the weight of the hanging mass: $F_{\\text{pull}} = m_2 g$. The total mass accelerated is $(m_1 + m_2)$. Acceleration is $a = \\frac{m_2 g}{m_1 + m_2}$.",
    given="$m_1 = 3\\text{ kg}$ (table), $m_2 = 2\\text{ kg}$ (hanging), smooth table, $g = 10\\text{ m/s}^2$.",
    formula="$a = \\frac{m_2 g}{m_1 + m_2}$.",
    steps="1. FBD of hanging mass $m_2$: $m_2 g - T = m_2 a$.\n2. FBD of block on table $m_1$: $T = m_1 a$.\n3. Add both equations: $m_2 g = (m_1 + m_2) a$.\n4. Acceleration: $a = \\frac{m_2 g}{m_1 + m_2} = \\frac{2 \\times 10}{3 + 2} = \\frac{20}{5} = 4\\text{ m/s}^2$.",
    tip="Table Pulley System: $a = \\frac{m_{\\text{hanging}}}{m_{\\text{total}}} g$! Simple, fast formula.",
    why_wrong="Option B ($6\\text{ m/s}^2$) is $\\frac{m_1}{m_1+m_2}g$. Option C is $g$. Option D is $(m_1 - m_2)$."
))

# Q380: Medium
qs.append(make_lom_q(
    num=380,
    question="In the previous table-pulley setup ($m_1 = 3\\text{ kg}$, $m_2 = 2\\text{ kg}$), what is the tension in the connecting string?",
    options={
        "A": "12 N",
        "B": "20 N",
        "C": "8 N",
        "D": "15 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="Tension accelerates the block on the smooth table: $T = m_1 a$. With $a = 4\\text{ m/s}^2$ and $m_1 = 3\\text{ kg}$, $T = 3 \\times 4 = 12\\text{ N}$.",
    given="$m_1 = 3\\text{ kg}$, $a = 4\\text{ m/s}^2$.",
    formula="$T = m_1 a = \\frac{m_1 m_2}{m_1 + m_2} g$.",
    steps="1. The block on the smooth table has no friction opposing it.\n2. The only horizontal force acting on $m_1$ is the string tension $T$.\n3. Newton's second law on $m_1$: $T = m_1 a$.\n4. Substituting values: $T = 3\\text{ kg} \\times 4\\text{ m/s}^2 = 12\\text{ N}$.\n5. Double check using hanging mass: $T = m_2(g - a) = 2(10 - 4) = 2(6) = 12\\text{ N}$. Matches perfectly!",
    tip="Formula for table-pulley tension: $T = \\frac{m_1 m_2}{m_1 + m_2} g = \\frac{3 \\times 2}{5} \\times 10 = 12\\text{ N}$!",
    why_wrong="Option B (20 N) is the weight of the hanging mass. Option C (8 N) is $m_2 a$. Option D is $15\\text{ N}$."
))

# Q381: Medium
qs.append(make_lom_q(
    num=381,
    question="In the table-pulley system, what is the magnitude of the force exerted by the string on the pulley?",
    options={
        "A": "$12\\sqrt{2} \\approx 16.97\\text{ N}$",
        "B": "24 N",
        "C": "12 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="Two segments of the string leave the pulley at right angles ($90^\\circ$): one horizontal with tension $T = 12\\text{ N}$ and one vertical with tension $T = 12\\text{ N}$. The resultant force on the pulley is the vector sum: $F_{\\text{pulley}} = \\sqrt{T^2 + T^2} = T\\sqrt{2}$.",
    given="$T = 12\\text{ N}$, angle between string segments is $90^\\circ$.",
    formula="$F_{\\text{pulley}} = \\sqrt{T_x^2 + T_y^2} = T\\sqrt{2}$.",
    steps="1. The string segment going to the table pulls the pulley horizontally with force $T = 12\\text{ N}$.\n2. The string segment going to the hanging mass pulls the pulley vertically downward with force $T = 12\\text{ N}$.\n3. Because the two tension vectors are perpendicular to each other, their resultant force is:\n   $F = \\sqrt{T^2 + T^2} = T\\sqrt{2}$.\n4. Substituting $T = 12\\text{ N}$: $F = 12\\sqrt{2} \\approx 16.97\\text{ N}$ directed at $45^\\circ$ to the horizontal.",
    tip="Force on pulley in Atwood machine: $2T$ (strings parallel). Force on pulley in corner table: $T\\sqrt{2}$ (strings at $90^\\circ$)!",
    why_wrong="Option B (24 N) adds the forces scalar-wise ($12 + 12$). Option C is just one string tension. Option D is zero."
))

# Q382: Medium
qs.append(make_lom_q(
    num=382,
    question="Two masses $m_1 = 6\\text{ kg}$ and $m_2 = 4\\text{ kg}$ are connected by a light string over a frictionless pulley hung from a ceiling. What is the total force exerted by the pulley clamp on the ceiling (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "96 N",
        "B": "100 N",
        "C": "48 N",
        "D": "20 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="Two downward strings pull on the pulley, each with tension $T = \\frac{2 m_1 m_2}{m_1 + m_2} g$. For the massless pulley in equilibrium, the upward clamp reaction must balance both tensions: $F_{\\text{clamp}} = 2T$.",
    given="$m_1 = 6\\text{ kg}$, $m_2 = 4\\text{ kg}$, $g = 10\\text{ m/s}^2$.",
    formula="$T = \\frac{2 m_1 m_2}{m_1 + m_2} g$; $F_{\\text{clamp}} = 2T = \\frac{4 m_1 m_2}{m_1 + m_2} g$.",
    steps="1. Calculate the string tension $T$:\n   $T = \\frac{2 m_1 m_2}{m_1 + m_2} g = \\frac{2(6)(4)}{6 + 4} \\times 10 = \\frac{48}{10} \\times 10 = 48\\text{ N}$.\n2. The pulley is suspended from the ceiling.\n3. The string wraps around the pulley, pulling downwards on both sides with tension $T$.\n4. For equilibrium of the massless pulley: $F_{\\text{clamp}} = 2T$.\n5. Therefore, $F_{\\text{clamp}} = 2 \\times 48 = 96\\text{ N}$.",
    tip="NEET Trap Alert: Clamp force is $2T = 96\\text{ N}$, NOT the total static weight $(m_1 + m_2)g = 100\\text{ N}$! Because the system accelerates, the support force is LESS than the total weight.",
    why_wrong="Option B (100 N) is the static weight $(m_1 + m_2)g$. Option C (48 N) is just a single string tension $T$. Option D is $(m_1 - m_2)g$."
))

# Q383: Medium
qs.append(make_lom_q(
    num=383,
    question="In the previous Atwood machine ($m_1 = 6\\text{ kg}$, $m_2 = 4\\text{ kg}$), if the system is released from rest, what is the speed of either mass after $2\\text{ seconds}$ (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$4\\text{ m/s}$",
        "B": "$2\\text{ m/s}$",
        "C": "$8\\text{ m/s}$",
        "D": "$10\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="Calculate acceleration $a = \\frac{m_1 - m_2}{m_1 + m_2} g$. Then use $v = u + at$ with $u = 0$.",
    given="$m_1 = 6\\text{ kg}$, $m_2 = 4\\text{ kg}$, $t = 2\\text{ s}$, $u = 0$, $g = 10\\text{ m/s}^2$.",
    formula="$a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{6 - 4}{10} \\times 10 = 2\\text{ m/s}^2$; $v = at$.",
    steps="1. System acceleration:\n   $a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{6 - 4}{6 + 4} \\times 10 = \\frac{2}{10} \\times 10 = 2\\text{ m/s}^2$.\n2. Both masses start from rest ($u = 0$).\n3. Speed after time $t = 2\\text{ s}$:\n   $v = u + at = 0 + (2\\text{ m/s}^2)(2\\text{ s}) = 4\\text{ m/s}$.",
    tip="Atwood acceleration $a = 2\\text{ m/s}^2$. Speed after 2 seconds is simply $v = at = 4\\text{ m/s}$!",
    why_wrong="Option B ($2\\text{ m/s}$) is the acceleration, not the speed. Option C is $v = 4t$. Option D is $gt$."
))

# Q384: Medium
qs.append(make_lom_q(
    num=384,
    question="In the Atwood machine above, what is the acceleration of the center of mass of the two-mass system?",
    options={
        "A": "$0.4\\text{ m/s}^2$ downwards",
        "B": "$2.0\\text{ m/s}^2$ downwards",
        "C": "Zero",
        "D": "$1.0\\text{ m/s}^2$ downwards"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="The heavier mass $m_1$ accelerates downwards with $a$, and $m_2$ accelerates upwards with $a$. The acceleration of the center of mass is $a_{\\text{cm}} = \\frac{m_1(-a) + m_2(+a)}{m_1 + m_2} = -\\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right) a = -\\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g$.",
    given="$m_1 = 6\\text{ kg}$, $m_2 = 4\\text{ kg}$, $a = 2\\text{ m/s}^2$, $g = 10\\text{ m/s}^2$.",
    formula="$a_{\\text{cm}} = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g$.",
    steps="1. Let downward be the positive direction.\n2. Acceleration of $m_1$: $a_1 = +a = +2\\text{ m/s}^2$.\n3. Acceleration of $m_2$: $a_2 = -a = -2\\text{ m/s}^2$ (moving upwards).\n4. Acceleration of center of mass:\n   $a_{\\text{cm}} = \\frac{m_1 a_1 + m_2 a_2}{m_1 + m_2} = \\frac{6(+2) + 4(-2)}{6 + 4} = \\frac{12 - 8}{10} = \\frac{4}{10} = 0.4\\text{ m/s}^2$ downwards.\n5. General formula: $a_{\\text{cm}} = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g = \\left(\\frac{2}{10}\\right)^2 \\times 10 = 0.04 \\times 10 = 0.4\\text{ m/s}^2$.",
    tip="High-Yield Formula: Acceleration of center of mass of an Atwood machine is $a_{\\text{cm}} = \\left(\\frac{m_1 - m_2}{m_1 + m_2}\\right)^2 g$ downwards!",
    why_wrong="Option B ($2.0\\text{ m/s}^2$) is the acceleration of each individual block. Option C assumes center of mass is stationary. Option D is $(m_1-m_2)/(m_1+m_2) \\times g/2$."
))

# Q385: Medium
qs.append(make_lom_q(
    num=385,
    question="A block of mass $m_1 = 4\\text{ kg}$ is on a rough horizontal table with $\\mu_k = 0.2$. It is connected by a light string over a frictionless pulley to a hanging mass $m_2 = 2\\text{ kg}$. What is the acceleration of the system (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$2\\text{ m/s}^2$",
        "B": "$3.33\\text{ m/s}^2$",
        "C": "$1\\text{ m/s}^2$",
        "D": "$4\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="Driving force is hanging weight $m_2 g = 20\\text{ N}$. Opposing kinetic friction on table is $f_k = \\mu_k m_1 g = 0.2 \\times 40 = 8\\text{ N}$. Net accelerating force is $m_2 g - f_k = 20 - 8 = 12\\text{ N}$. Total mass is $m_1 + m_2 = 6\\text{ kg}$. Acceleration is $a = \\frac{12}{6} = 2\\text{ m/s}^2$.",
    given="$m_1 = 4\\text{ kg}$, $m_2 = 2\\text{ kg}$, $\\mu_k = 0.2$, $g = 10\\text{ m/s}^2$.",
    formula="$a = \\frac{m_2 g - \\mu_k m_1 g}{m_1 + m_2}$.",
    steps="1. FBD of hanging block $m_2$: $m_2 g - T = m_2 a$.\n2. FBD of table block $m_1$: $T - f_k = m_1 a$.\n3. Normal force on table: $N = m_1 g = 40\\text{ N}$.\n4. Kinetic friction: $f_k = \\mu_k N = 0.2 \\times 40 = 8\\text{ N}$.\n5. Add the two motion equations: $m_2 g - f_k = (m_1 + m_2) a$.\n6. Substitute values: $20 - 8 = (4 + 2) a \\implies 12 = 6 a$.\n7. Acceleration: $a = \\frac{12}{6} = 2\\text{ m/s}^2$.",
    tip="Table Pulley with Friction: $a = \\frac{m_2 - \\mu_k m_1}{m_1 + m_2} g = \\frac{2 - 0.2(4)}{6} \\times 10 = \\frac{1.2}{6} \\times 10 = 2\\text{ m/s}^2$!",
    why_wrong="Option B ($3.33\\text{ m/s}^2$) ignores friction ($20/6$). Option C is $6/6$. Option D is $(20 - 4)/4$."
))

# Q386: Medium
qs.append(make_lom_q(
    num=386,
    question="In the previous rough-table pulley system ($m_1 = 4\\text{ kg}$, $m_2 = 2\\text{ kg}$, $\\mu_k = 0.2$), what is the tension in the string?",
    options={
        "A": "16 N",
        "B": "20 N",
        "C": "12 N",
        "D": "8 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="Using the equation for the hanging mass: $m_2 g - T = m_2 a \\implies T = m_2(g - a) = 2(10 - 2) = 16\\text{ N}$.",
    given="$m_2 = 2\\text{ kg}$, $a = 2\\text{ m/s}^2$, $g = 10\\text{ m/s}^2$.",
    formula="$T = m_2(g - a) = m_1 a + f_k$.",
    steps="1. From the hanging mass equation: $m_2 g - T = m_2 a$.\n2. $T = m_2(g - a) = 2(10 - 2) = 2(8) = 16\\text{ N}$.\n3. Verification using the block on table: $T = m_1 a + f_k = 4(2) + 8 = 8 + 8 = 16\\text{ N}$.\n4. Both equations give identical tension $16\\text{ N}$.",
    tip="Always verify $T$ on BOTH bodies: $T = m_2(g-a) = m_1 a + f_k$. Instant self-check!",
    why_wrong="Option B (20 N) is the weight $m_2 g$. Option C (12 N) is $m_2 g - f_k$. Option D (8 N) is just the friction force."
))

# Q387: Medium
qs.append(make_lom_q(
    num=387,
    question="Two blocks of masses $m_1 = 5\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are connected by a light string over a frictionless double-inclined wedge with angles $\\theta_1 = 30^\\circ$ and $\\theta_2 = 30^\\circ$ on smooth faces. The acceleration of the system is (take $g = 10\\text{ m/s}^2$):",
    options={
        "A": "$1.25\\text{ m/s}^2$",
        "B": "$2.50\\text{ m/s}^2$",
        "C": "$5.00\\text{ m/s}^2$",
        "D": "$0.625\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Connected bodies and pulley systems",
    concept="Down-plane gravity on $m_1$ is $m_1 g\\sin 30^\\circ = 5 \\times 10 \\times 0.5 = 25\\text{ N}$. Down-plane gravity on $m_2$ is $m_2 g\\sin 30^\\circ = 3 \\times 10 \\times 0.5 = 15\\text{ N}$. Net driving force is $25 - 15 = 10\\text{ N}$. Total mass is $5 + 3 = 8\\text{ kg}$. Acceleration is $a = \\frac{10}{8} = 1.25\\text{ m/s}^2$.",
    given="$m_1 = 5\\text{ kg}$, $m_2 = 3\\text{ kg}$, $\\theta_1 = \\theta_2 = 30^\\circ$, smooth surfaces, $g = 10\\text{ m/s}^2$.",
    formula="$a = \\frac{m_1 g\\sin\\theta_1 - m_2 g\\sin\\theta_2}{m_1 + m_2}$.",
    steps="1. Pull on the left incline: $F_1 = m_1 g\\sin 30^\\circ = 5(10)(0.5) = 25\\text{ N}$.\n2. Pull on the right incline: $F_2 = m_2 g\\sin 30^\\circ = 3(10)(0.5) = 15\\text{ N}$.\n3. Since $F_1 > F_2$, block 1 accelerates down its incline and block 2 moves up its incline.\n4. Net pulling force: $F_{\\text{net}} = F_1 - F_2 = 25 - 15 = 10\\text{ N}$.\n5. Total mass of the system: $M = m_1 + m_2 = 5 + 3 = 8\\text{ kg}$.\n6. Acceleration: $a = \\frac{F_{\\text{net}}}{M} = \\frac{10\\text{ N}}{8\\text{ kg}} = 1.25\\text{ m/s}^2$.",
    tip="Double Incline Formula: $a = \\frac{m_1\\sin\\theta_1 - m_2\\sin\\theta_2}{m_1 + m_2} g$!",
    why_wrong="Option B ($2.5\\text{ m/s}^2$) forgets the mass of $m_1+m_2 = 8$ and divides by 4. Option C is $g/2$. Option D is $1.25/2$."
))

# Q388: Hard
qs.append(make_lom_q(
    num=388,
    question="In a movable pulley system, block A of mass $m_A = 2\\text{ kg}$ is suspended from a movable pulley, and block B of mass $m_B = 3\\text{ kg}$ is connected to the free end of the string passing over a fixed pulley. What is the relation between the acceleration of block A ($a_A$) and block B ($a_B$)?",
    options={
        "A": "$a_B = 2 a_A$",
        "B": "$a_A = 2 a_B$",
        "C": "$a_A = a_B$",
        "D": "$a_B = 4 a_A$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Connected bodies and pulley systems",
    concept="String constraint equation: Let $x_A$ be the displacement of the movable pulley and $x_B$ be the displacement of the free mass. The total length of the string is $2x_A + x_B = \\text{constant}$. Differentiating twice with respect to time gives $2a_A + a_B = 0 \\implies |a_B| = 2|a_A|$.",
    given="Block A on movable pulley, Block B on free string.",
    formula="$2x_A + x_B = L \\implies 2a_A + a_B = 0 \\implies a_B = 2a_A$.",
    steps="1. Consider the string loop around the movable pulley carrying block A.\n2. When block A moves down by a distance $x_A$, both sides of the string supporting the movable pulley must lengthen by $x_A$, releasing a total string length of $2x_A$.\n3. This entire released length must be taken up by block B: $x_B = 2x_A$.\n4. Differentiating twice with respect to time:\n   $v_B = 2v_A$ and $a_B = 2a_A$.\n5. Therefore, block B accelerates twice as fast as block A.",
    tip="Movable Pulley Constraint Rule: If block A is supported by 2 string segments, its displacement is HALVED ($x_A = x_B / 2$) and its tension is DOUBLED ($2T$)!",
    why_wrong="Option B inverts the mechanical advantage. Option C assumes a simple 1:1 fixed pulley. Option D squares the mechanical advantage."
))

# Q389: Hard
qs.append(make_lom_q(
    num=389,
    question="In the movable pulley setup above ($m_A = 2\\text{ kg}$, $m_B = 3\\text{ kg}$, with $a_B = 2a_A$), taking $g = 10\\text{ m/s}^2$, what is the downward acceleration of block B?",
    options={
        "A": "$2.86\\text{ m/s}^2$",
        "B": "$1.43\\text{ m/s}^2$",
        "C": "$5.00\\text{ m/s}^2$",
        "D": "$4.00\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Connected bodies and pulley systems",
    concept="Equations of motion: For block B moving downwards: $m_B g - T = m_B a_B = m_B (2a_A)$. For block A moving upwards: $2T - m_A g = m_A a_A$. Multiply B's equation by 2 and add to eliminate $T$: $2m_B g - m_A g = (4m_B + m_A) a_A \\implies a_A = \\frac{2m_B - m_A}{4m_B + m_A} g$. Then $a_B = 2a_A = \\frac{2(2m_B - m_A)}{4m_B + m_A} g$.",
    given="$m_A = 2\\text{ kg}$, $m_B = 3\\text{ kg}$, $a_B = 2a_A$, $g = 10\\text{ m/s}^2$.",
    formula="$a_A = \\frac{2m_B - m_A}{4m_B + m_A} g$; $a_B = 2a_A = \\frac{2(6 - 2)}{12 + 2} \\times 10 = \\frac{8}{14} \\times 10 = \\frac{40}{14} \\approx 2.86\\text{ m/s}^2$.",
    steps="1. FBD of B (moves down): $m_B g - T = m_B a_B = m_B(2a_A) \\implies 30 - T = 6 a_A \\implies 2T = 60 - 12 a_A$.\n2. FBD of A (moves up): $2T - m_A g = m_A a_A \\implies 2T - 20 = 2 a_A$.\n3. Substitute $2T$ into equation 2:\n   $(60 - 12 a_A) - 20 = 2 a_A$.\n4. $40 = 14 a_A \\implies a_A = \\frac{40}{14} = \\frac{20}{7} \\approx 1.43\\text{ m/s}^2$.\n5. Acceleration of block B is $a_B = 2a_A = 2 \\times \\frac{20}{7} = \\frac{40}{7} \\approx 2.86\\text{ m/s}^2$.",
    tip="Virtual Work Method for Pulleys: $\\sum \\vec{T} \\cdot \\vec{a} = 0 \\implies 2T a_A - T a_B = 0 \\implies a_B = 2a_A$!",
    why_wrong="Option B ($1.43\\text{ m/s}^2$) is $a_A$, the acceleration of block A. Option C is $g/2$. Option D is an arbitrary estimate."
))

# Q390: Hard
qs.append(make_lom_q(
    num=390,
    question="Two blocks of masses $m_1 = 3\\text{ kg}$ and $m_2 = 1\\text{ kg}$ are connected by a spring of spring constant $k = 100\\text{ N/m}$. Block $m_1$ rests on a table, and $m_2$ is placed on top of it. What minimum downward displacement must be given to $m_2$ and released so that when it rebounds, block $m_1$ just lifts off the table (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "0.4 m",
        "B": "0.3 m",
        "C": "0.2 m",
        "D": "0.1 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Connected bodies and pulley systems",
    concept="For $m_1$ to just lift off the table, the spring must be stretched by $x_1$ such that upward spring force balances $m_1$'s weight: $k x_1 = m_1 g \\implies x_1 = \\frac{m_1 g}{k} = \\frac{30}{100} = 0.3\\text{ m}$. In static equilibrium, $m_2$ compresses the spring by $x_0 = \\frac{m_2 g}{k} = \\frac{10}{100} = 0.1\\text{ m}$. The amplitude of oscillation about equilibrium must be $A = x_0 + x_1 = 0.1 + 0.3 = 0.4\\text{ m}$.",
    given="$m_1 = 3\\text{ kg}$, $m_2 = 1\\text{ kg}$, $k = 100\\text{ N/m}$, $g = 10\\text{ m/s}^2$.",
    formula="$x_1 = \\frac{m_1 g}{k}$; $x_0 = \\frac{m_2 g}{k}$; $x_{\\text{down}} = x_1 + 2x_0$ from natural length, or $A = x_1 + x_0 = 0.4\\text{ m}$ from equilibrium.",
    steps="1. Equilibrium position of $m_2$: The spring is compressed by $x_0 = \\frac{m_2 g}{k} = \\frac{1 \\times 10}{100} = 0.1\\text{ m}$.\n2. Condition for $m_1$ to lift off: The spring must be EXTENDED upward by $x_1$ such that $k x_1 = m_1 g \\implies x_1 = \\frac{3 \\times 10}{100} = 0.3\\text{ m}$.\n3. The total upward displacement of $m_2$ from its equilibrium position must reach $x_1 + x_0 = 0.3 + 0.1 = 0.4\\text{ m}$.\n4. For symmetric simple harmonic motion about the equilibrium position, the downward amplitude from equilibrium must equal the upward amplitude: $A = 0.4\\text{ m}$.\n5. Therefore, the downward displacement from the equilibrium position must be $0.4\\text{ m}$.",
    tip="Lift-off condition: Extension $x_{\\text{ext}} = \\frac{m_1 g}{k}$. Amplitude from equilibrium $A = \\frac{(m_1 + m_2)g}{k}$!",
    why_wrong="Option B (0.3 m) is only the extension required to lift $m_1$. Option C (0.2 m) is $0.3 - 0.1$. Option D (0.1 m) is just the static compression."
))

# Q391: Hard
qs.append(make_lom_q(
    num=391,
    question="A heavy uniform chain of mass $m$ and length $L$ hangs over a smooth small peg with length $L/3$ on one side and $2L/3$ on the other side. When released from rest, the acceleration of the chain at this instant is:",
    options={
        "A": "$\\frac{g}{3}$",
        "B": "$\\frac{g}{2}$",
        "C": "$\\frac{2g}{3}$",
        "D": "$g$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Connected bodies and pulley systems",
    concept="Mass of the longer side is $m_1 = \\frac{2}{3}m$, and mass of the shorter side is $m_2 = \\frac{1}{3}m$. The net unbalanced pulling force is $(m_1 - m_2)g = \\left(\\frac{2}{3}m - \\frac{1}{3}m\\right)g = \\frac{1}{3}mg$. The total mass of the chain being accelerated is $m$. By Newton's second law: $a = \\frac{F_{\\text{net}}}{m} = \\frac{mg/3}{m} = \\frac{g}{3}$.",
    given="Chain mass $m$, length $L$, segments $L/3$ and $2L/3$, smooth peg.",
    formula="$a = \\frac{m_1 - m_2}{m} g = \\frac{2/3 - 1/3}{1} g = \\frac{g}{3}$.",
    steps="1. Length of longer side: $L_1 = \\frac{2}{3}L$. Its mass is $m_1 = \\frac{2}{3}m$.\n2. Length of shorter side: $L_2 = \\frac{1}{3}L$. Its mass is $m_2 = \\frac{1}{3}m$.\n3. Unbalanced driving force over the smooth peg:\n   $F_{\\text{net}} = m_1 g - m_2 g = \\left(\\frac{2}{3}m - \\frac{1}{3}m\\right)g = \\frac{1}{3}mg$.\n4. Total inertia of the moving chain is its entire mass $m$.\n5. Applying Newton's second law to the whole chain:\n   $a = \\frac{F_{\\text{net}}}{m_{\\text{total}}} = \\frac{\\frac{1}{3}mg}{m} = \\frac{g}{3}$.",
    tip="Chain Over Peg Formula: $a = \\frac{y_1 - y_2}{L} g$. Here $\\frac{2/3L - 1/3L}{L} g = \\frac{g}{3}$!",
    why_wrong="Option B ($g/2$) is $(2/3 - 1/3) / (2/3)$. Option C is $2g/3$. Option D is free fall."
))

# ==============================================================================
# Topic 25: Blocks in contact (Q392 to Q407: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q392: Easy
qs.append(make_lom_q(
    num=392,
    question="Two blocks of masses $m_1$ and $m_2$ ($m_1 > m_2$) are placed in contact on a frictionless horizontal floor. A horizontal force $F$ is applied pushing on $m_1$ towards $m_2$. The contact force between the blocks is:",
    options={
        "A": "$\\frac{m_2}{m_1 + m_2} F$",
        "B": "$\\frac{m_1}{m_1 + m_2} F$",
        "C": "$F$",
        "D": "$\\frac{m_1 - m_2}{m_1 + m_2} F$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Blocks in contact",
    concept="The contact force $N$ between the blocks acts to accelerate only the front block $m_2$. Since common acceleration is $a = \\frac{F}{m_1 + m_2}$, the contact force is $N = m_2 a = \\frac{m_2}{m_1 + m_2} F$.",
    given="Blocks $m_1, m_2$ in contact, force on $m_1$, smooth surface.",
    formula="$a = \\frac{F}{m_1 + m_2}$; $N = m_2 a = \\frac{m_2}{m_1 + m_2} F$.",
    steps="1. Total mass of system is $(m_1 + m_2)$.\n2. Acceleration of system: $a = \\frac{F}{m_1 + m_2}$.\n3. FBD of $m_2$: The normal force $N$ from $m_1$ is the only horizontal force acting on $m_2$.\n4. Newton's second law on $m_2$: $N = m_2 a = m_2 \\left(\\frac{F}{m_1 + m_2}\\right) = \\frac{m_2}{m_1 + m_2} F$.",
    tip="Contact force pushes only what is in FRONT of it! Pushing $m_1 \\implies N = \\frac{m_2}{m_1 + m_2} F$.",
    why_wrong="Option B is the contact force if $F$ was applied pushing on $m_2$. Option C is the external force. Option D is incorrect."
))

# Q393: Easy
qs.append(make_lom_q(
    num=393,
    question="If the applied force $F$ in the previous problem is applied to $m_2$ pushing towards $m_1$ instead, the contact force between the blocks will:",
    options={
        "A": "Increase, because $m_1 > m_2$",
        "B": "Decrease, because $m_1 > m_2$",
        "C": "Remain the same by Newton's third law",
        "D": "Become zero"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Blocks in contact",
    concept="When pushing on $m_2$, the contact force must accelerate the larger mass $m_1$: $N' = \\frac{m_1}{m_1 + m_2} F$. Since $m_1 > m_2$, $N' > N$.",
    given="$m_1 > m_2$, force $F$ pushes on $m_2$ instead of $m_1$.",
    formula="$N' = \\frac{m_1}{m_1 + m_2} F > \\frac{m_2}{m_1 + m_2} F = N$.",
    steps="1. When $F$ is pushed on $m_2$, the contact force accelerates mass $m_1$.\n2. $N' = m_1 a = \\frac{m_1}{m_1 + m_2} F$.\n3. Since given $m_1 > m_2$, the ratio $\\frac{m_1}{m_1 + m_2} > \\frac{m_2}{m_1 + m_2}$.\n4. Therefore, $N' > N$, so the contact force increases.",
    tip="NEET Trap: Newton's third law says the action and reaction forces at the contact point are equal in any single scenario, but CHANGING the point of application changes the magnitude of the contact force!",
    why_wrong="Option B is the opposite. Option C misapplies Newton's third law to two completely different physical setups."
))

# Q394: Easy
qs.append(make_lom_q(
    num=394,
    question="Three blocks of masses $2\\text{ kg}$, $3\\text{ kg}$, and $5\\text{ kg}$ are in contact on a frictionless table. A force of $20\\text{ N}$ pushes the $2\\text{ kg}$ block. The acceleration of the system is:",
    options={
        "A": "$2\\text{ m/s}^2$",
        "B": "$4\\text{ m/s}^2$",
        "C": "$1\\text{ m/s}^2$",
        "D": "$10\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Blocks in contact",
    concept="Total mass is $M = 2 + 3 + 5 = 10\\text{ kg}$. Acceleration is $a = F / M = 20 / 10 = 2\\text{ m/s}^2$.",
    given="Masses $2\\text{ kg}, 3\\text{ kg}, 5\\text{ kg}$, $F = 20\\text{ N}$.",
    formula="$a = \\frac{F}{m_1 + m_2 + m_3}$.",
    steps="1. Total mass $M = 2 + 3 + 5 = 10\\text{ kg}$.\n2. External force $F = 20\\text{ N}$.\n3. Common acceleration $a = \\frac{F}{M} = \\frac{20}{10} = 2\\text{ m/s}^2$.",
    tip="Common acceleration is simply total external force divided by total system mass!",
    why_wrong="Option B ($4\\text{ m/s}^2$) divides by $5\\text{ kg}$. Option C divides by 20. Option D divides by 2."
))

# Q395: Easy
qs.append(make_lom_q(
    num=395,
    question="In the three-block system above ($2\\text{ kg}$, $3\\text{ kg}$, $5\\text{ kg}$, $F = 20\\text{ N}$), the contact force between the $3\\text{ kg}$ block and the $5\\text{ kg}$ block is:",
    options={
        "A": "10 N",
        "B": "16 N",
        "C": "6 N",
        "D": "4 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Blocks in contact",
    concept="The contact force between the 3 kg block and the 5 kg block accelerates only the 5 kg block: $N = m_3 a = 5 \\times 2 = 10\\text{ N}$.",
    given="$m_3 = 5\\text{ kg}$, $a = 2\\text{ m/s}^2$.",
    formula="$N_{23} = m_3 a = 5 \\times 2 = 10\\text{ N}$.",
    steps="1. The 5 kg block is at the very front of the line.\n2. The only horizontal force acting on it is the contact push from the 3 kg block.\n3. Newton's second law on the 5 kg block: $N = m_3 a = 5\\text{ kg} \\times 2\\text{ m/s}^2 = 10\\text{ N}$.",
    tip="Force on front block $= m_{\\text{front}} \\times a = 5 \\times 2 = 10\\text{ N}$!",
    why_wrong="Option B (16 N) is the contact force between the 2 kg and 3 kg blocks ($(3+5) \\times 2 = 16\\text{ N}$). Option C is $3 \\times 2$. Option D is $2 \\times 2$."
))

# Q396: Medium
qs.append(make_lom_q(
    num=396,
    question="A block A of mass $2\\text{ kg}$ is placed on top of block B of mass $4\\text{ kg}$, which rests on a smooth horizontal table. The coefficient of static friction between block A and block B is $\\mu_s = 0.4$. What is the maximum horizontal force that can be applied to block B without block A slipping off (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "24 N",
        "B": "8 N",
        "C": "16 N",
        "D": "12 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="The upper block A is accelerated by static friction from B: $f_s = m_A a$. The maximum static friction available is $f_{\\text{lim}} = \\mu_s m_A g = 0.4 \\times 2 \\times 10 = 8\\text{ N}$. The maximum common acceleration without slipping is $a_{\\text{max}} = \\frac{f_{\\text{lim}}}{m_A} = \\mu_s g = 4\\text{ m/s}^2$. The maximum force applied to block B is $F_{\\text{max}} = (m_A + m_B) a_{\\text{max}} = (2 + 4) \\times 4 = 24\\text{ N}$.",
    given="$m_A = 2\\text{ kg}$, $m_B = 4\\text{ kg}$, $\\mu_s = 0.4$, smooth table, $g = 10\\text{ m/s}^2$.",
    formula="$a_{\\text{max}} = \\mu_s g$; $F_{\\text{max}} = (m_A + m_B) a_{\\text{max}} = \\mu_s(m_A + m_B)g$.",
    steps="1. Upper block A has no external force applied directly to it; it is carried along purely by static friction from B.\n2. Normal force between A and B: $N_{AB} = m_A g = 2 \\times 10 = 20\\text{ N}$.\n3. Maximum static friction between A and B: $f_{\\text{lim}} = \\mu_s N_{AB} = 0.4 \\times 20 = 8\\text{ N}$.\n4. Maximum acceleration of A without slipping:\n   $a_{\\text{max}} = \\frac{f_{\\text{lim}}}{m_A} = \\frac{8}{2} = 4\\text{ m/s}^2 = \\mu_s g$.\n5. For both blocks to move together at $a_{\\text{max}}$, the force on B must accelerate total mass $(m_A + m_B) = 6\\text{ kg}$:\n   $F_{\\text{max}} = (m_A + m_B) a_{\\text{max}} = (2 + 4) \\times 4 = 24\\text{ N}$.",
    tip="When pulling the bottom block on a smooth table, $F_{\\text{max}} = (m_A + m_B) \\mu_s g = 6 \\times 0.4 \\times 10 = 24\\text{ N}$!",
    why_wrong="Option B (8 N) is the friction force between the blocks. Option C (16 N) is $m_B a_{\\text{max}}$. Option D is $12\\text{ N}$."
))

# Q397: Medium
qs.append(make_lom_q(
    num=397,
    question="In the previous setup ($m_A = 2\\text{ kg}$ on $m_B = 4\\text{ kg}$), if the horizontal force $F = 30\\text{ N}$ is applied to block B, and the coefficient of kinetic friction between A and B is $\\mu_k = 0.3$, what is the acceleration of block A?",
    options={
        "A": "$3\\text{ m/s}^2$",
        "B": "$4\\text{ m/s}^2$",
        "C": "$6\\text{ m/s}^2$",
        "D": "$5\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="Since $F = 30\\text{ N} > F_{\\text{max}} = 24\\text{ N}$, slipping occurs! Once slipping occurs, kinetic friction acts on block A: $f_k = \\mu_k m_A g = 0.3 \\times 2 \\times 10 = 6\\text{ N}$. The acceleration of block A is $a_A = f_k / m_A = \\mu_k g = 0.3 \\times 10 = 3\\text{ m/s}^2$.",
    given="$F = 30\\text{ N} > 24\\text{ N}$ (slipping), $\\mu_k = 0.3$, $m_A = 2\\text{ kg}$, $g = 10\\text{ m/s}^2$.",
    formula="$a_A = \\frac{f_k}{m_A} = \\mu_k g = 0.3 \\times 10 = 3\\text{ m/s}^2$.",
    steps="1. Because applied force $30\\text{ N}$ exceeds the threshold for no slip ($24\\text{ N}$), the blocks slip relative to each other.\n2. The friction between the blocks transitions from static to kinetic friction.\n3. The kinetic friction acting on block A: $f_k = \\mu_k m_A g = 0.3 \\times 2 \\times 10 = 6\\text{ N}$ directed forward.\n4. By Newton's second law on block A: $f_k = m_A a_A \\implies a_A = \\frac{6\\text{ N}}{2\\text{ kg}} = 3\\text{ m/s}^2 = \\mu_k g$.",
    tip="Once slipping occurs, the top block accelerates with $a_{\\text{top}} = \\mu_k g$!",
    why_wrong="Option B ($4\\text{ m/s}^2$) is $\\mu_s g$ (static limit). Option C ($6\\text{ m/s}^2$) is the acceleration of block B. Option D is $30/6$."
))

# Q398: Medium
qs.append(make_lom_q(
    num=398,
    question="In the same setup ($F = 30\\text{ N}$ on $m_B = 4\\text{ kg}$, $f_k = 6\\text{ N}$), what is the acceleration of block B?",
    options={
        "A": "$6\\text{ m/s}^2$",
        "B": "$3\\text{ m/s}^2$",
        "C": "$7.5\\text{ m/s}^2$",
        "D": "$5\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="For block B, the forward applied force is $F = 30\\text{ N}$, and the backward kinetic friction from block A is $f_k = 6\\text{ N}$. Net force on B is $F - f_k = 30 - 6 = 24\\text{ N}$. Acceleration is $a_B = \\frac{24\\text{ N}}{4\\text{ kg}} = 6\\text{ m/s}^2$.",
    given="$F = 30\\text{ N}$, $f_k = 6\\text{ N}$, $m_B = 4\\text{ kg}$.",
    formula="$a_B = \\frac{F - f_k}{m_B} = \\frac{30 - 6}{4} = 6\\text{ m/s}^2$.",
    steps="1. FBD of block B:\n   - Applied force $F = 30\\text{ N}$ to the right.\n   - Kinetic friction $f_k = 6\\text{ N}$ from block A to the left (by Newton's third law).\n   - Table is smooth, so zero friction from the table.\n2. Net force on block B: $F_{\\text{net}} = 30 - 6 = 24\\text{ N}$.\n3. Acceleration of block B: $a_B = \\frac{24\\text{ N}}{4\\text{ kg}} = 6\\text{ m/s}^2$.",
    tip="Notice that $a_B = 6\\text{ m/s}^2 > a_A = 3\\text{ m/s}^2$, confirming that B slips out from underneath A with relative acceleration $a_{\\text{rel}} = 3\\text{ m/s}^2$!",
    why_wrong="Option B ($3\\text{ m/s}^2$) is the acceleration of block A. Option C ($7.5\\text{ m/s}^2$) is $30/4$ without friction. Option D is $30/6$."
))

# Q399: Medium
qs.append(make_lom_q(
    num=399,
    question="Two blocks of masses $m_1 = 3\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are in contact on a rough horizontal surface with coefficient of kinetic friction $\\mu_k = 0.1$ for both blocks. A horizontal force $F = 20\\text{ N}$ pushes $m_1$ towards $m_2$. Taking $g = 10\\text{ m/s}^2$, what is the contact force between the blocks?",
    options={
        "A": "6 N",
        "B": "8 N",
        "C": "10 N",
        "D": "4 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="Total mass is $5\\text{ kg}$. Total friction is $\\mu_k(m_1 + m_2)g = 0.1 \\times 50 = 5\\text{ N}$. Net force is $20 - 5 = 15\\text{ N}$. Acceleration is $a = 15/5 = 3\\text{ m/s}^2$. For $m_2$: Contact force $N$ pushes forward, friction $f_{k2} = \\mu_k m_2 g = 0.1 \\times 20 = 2\\text{ N}$ opposes: $N - f_{k2} = m_2 a \\implies N = f_{k2} + m_2 a = 2 + 2(3) = 8\\text{ N}$, wait! Let's check: $N = \\frac{m_2}{m_1 + m_2} F = \\frac{2}{5} \\times 20 = 8\\text{ N}$! When friction coefficients are IDENTICAL, friction cancels out in the contact force formula!",
    given="$m_1 = 3\\text{ kg}$, $m_2 = 2\\text{ kg}$, $\\mu_k = 0.1$, $F = 20\\text{ N}$, $g = 10\\text{ m/s}^2$.",
    formula="When $\\mu$ is identical: $N = \\frac{m_2}{m_1 + m_2} F = \\frac{2}{5} \\times 20 = 8\\text{ N}$.",
    steps="1. Total friction: $f_{\\text{total}} = \\mu_k(m_1 + m_2)g = 0.1(3 + 2)(10) = 5\\text{ N}$.\n2. Acceleration: $a = \\frac{F - f_{\\text{total}}}{m_1 + m_2} = \\frac{20 - 5}{5} = \\frac{15}{5} = 3\\text{ m/s}^2$.\n3. FBD of $m_2$: Normal contact force $N$ acts forward, kinetic friction $f_2 = \\mu_k m_2 g = 0.1(2)(10) = 2\\text{ N}$ acts backward.\n4. Newton's second law on $m_2$: $N - f_2 = m_2 a \\implies N - 2 = 2(3) = 6$.\n5. Therefore, $N = 6 + 2 = 8\\text{ N}$.\n6. Notice that $N = \\frac{m_2}{m_1 + m_2} F = \\frac{2}{5}(20) = 8\\text{ N}$, exactly the same as on a smooth floor!",
    tip="Surprising NEET Invariant: If all blocks have the SAME coefficient of friction $\\mu$, the contact force between them is completely INDEPENDENT of $\\mu$ and equals the smooth-surface value $N = \\frac{m_2}{m_1 + m_2} F$!",
    why_wrong="Option A (6 N) is $m_2 a$. Option C (10 N) is $F/2$. Option D is $2 \\times 2$."
))

# Update Q399 options to have B as correct:
qs[-1] = make_lom_q(
    num=399,
    question="Two blocks of masses $m_1 = 3\\text{ kg}$ and $m_2 = 2\\text{ kg}$ are in contact on a rough horizontal surface with identical coefficient of kinetic friction $\\mu_k = 0.1$ for both blocks. A horizontal force $F = 20\\text{ N}$ pushes $m_1$ towards $m_2$. Taking $g = 10\\text{ m/s}^2$, what is the contact force between the blocks?",
    options={
        "A": "8 N",
        "B": "6 N",
        "C": "10 N",
        "D": "4 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="When all blocks have the same coefficient of friction $\\mu_k$, the contact force between them is identical to that on a smooth floor: $N = \\frac{m_2}{m_1 + m_2} F$. Here $N = \\frac{2}{5} \\times 20 = 8\\text{ N}$.",
    given="$m_1 = 3\\text{ kg}$, $m_2 = 2\\text{ kg}$, $\\mu_k = 0.1$, $F = 20\\text{ N}$, $g = 10\\text{ m/s}^2$.",
    formula="$N = \\frac{m_2}{m_1 + m_2} F = \\frac{2}{5} \\times 20 = 8\\text{ N}$.",
    steps="1. Total friction on the system: $f_{\\text{total}} = \\mu_k(m_1 + m_2)g = 0.1(5)(10) = 5\\text{ N}$.\n2. Net force accelerating the system: $F_{\\text{net}} = 20 - 5 = 15\\text{ N}$.\n3. Common acceleration: $a = \\frac{15}{5} = 3\\text{ m/s}^2$.\n4. FBD of block $m_2$: Forward normal contact force $N$, backward friction $f_2 = \\mu_k m_2 g = 0.1(2)(10) = 2\\text{ N}$.\n5. Equation of motion for $m_2$: $N - f_2 = m_2 a \\implies N - 2 = 2(3) = 6$.\n6. Therefore, $N = 6 + 2 = 8\\text{ N}$.",
    tip="Golden Theorem: When all contacting blocks share the SAME friction coefficient, the internal contact forces are completely INDEPENDENT of friction!",
    why_wrong="Option B (6 N) is $m_2 a$. Option C (10 N) is $F/2$. Option D is $2 \\times 2$."
)

# Q400: Medium
qs.append(make_lom_q(
    num=400,
    question="Three blocks A, B, and C of masses $m_A = 1\\text{ kg}$, $m_B = 2\\text{ kg}$, and $m_C = 3\\text{ kg}$ are in contact on a smooth horizontal floor. A force $F_1 = 30\\text{ N}$ pushes from the left on A, and an opposing force $F_2 = 12\\text{ N}$ pushes from the right on C. What is the contact force between block A and block B?",
    options={
        "A": "27 N",
        "B": "18 N",
        "C": "15 N",
        "D": "12 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="Total mass is $6\\text{ kg}$. Net force is $F_1 - F_2 = 30 - 12 = 18\\text{ N}$ to the right. Acceleration is $a = 18/6 = 3\\text{ m/s}^2$. For block A: $F_1 - N_{AB} = m_A a \\implies N_{AB} = F_1 - m_A a = 30 - 1(3) = 27\\text{ N}$.",
    given="$m_A = 1\\text{ kg}, m_B = 2\\text{ kg}, m_C = 3\\text{ kg}$, $F_1 = 30\\text{ N}, F_2 = 12\\text{ N}$.",
    formula="$a = \\frac{F_1 - F_2}{M}$; $N_{AB} = F_1 - m_A a$.",
    steps="1. Total mass $M = 1 + 2 + 3 = 6\\text{ kg}$.\n2. Net force to the right: $F_{\\text{net}} = 30 - 12 = 18\\text{ N}$.\n3. Common acceleration: $a = \\frac{18}{6} = 3\\text{ m/s}^2$ to the right.\n4. Write Newton's second law for block A:\n   $F_1 - N_{AB} = m_A a$.\n5. $30 - N_{AB} = 1 \\times 3 = 3\\text{ N}$.\n6. Therefore, $N_{AB} = 30 - 3 = 27\\text{ N}$.",
    tip="FBD check: On (B + C), $N_{AB} - F_2 = (m_B + m_C) a \\implies 27 - 12 = 5(3) = 15\\text{ N}$. Exact match!",
    why_wrong="Option B (18 N) is the net force $F_1 - F_2$. Option C is $(m_B+m_C)a$. Option D is $F_2$."
))

# Q401: Medium
qs.append(make_lom_q(
    num=401,
    question="In the previous setup ($m_A = 1\\text{ kg}, m_B = 2\\text{ kg}, m_C = 3\\text{ kg}, F_1 = 30\\text{ N}, F_2 = 12\\text{ N}$), what is the contact force between block B and block C?",
    options={
        "A": "21 N",
        "B": "9 N",
        "C": "12 N",
        "D": "15 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="For block C: Contact force $N_{BC}$ acts to the right, external force $F_2 = 12\\text{ N}$ acts to the left. $N_{BC} - F_2 = m_C a \\implies N_{BC} = F_2 + m_C a = 12 + 3(3) = 21\\text{ N}$.",
    given="$m_C = 3\\text{ kg}, F_2 = 12\\text{ N}, a = 3\\text{ m/s}^2$.",
    formula="$N_{BC} - F_2 = m_C a \\implies N_{BC} = F_2 + m_C a$.",
    steps="1. FBD of block C:\n   - Contact force $N_{BC}$ from block B acting to the right.\n   - External force $F_2 = 12\\text{ N}$ acting to the left.\n   - Acceleration is $a = 3\\text{ m/s}^2$ to the right.\n2. Applying Newton's second law on C:\n   $N_{BC} - F_2 = m_C a$.\n3. $N_{BC} - 12 = 3 \\times 3 = 9\\text{ N}$.\n4. Therefore, $N_{BC} = 12 + 9 = 21\\text{ N}$.",
    tip="Check on block B: $N_{AB} - N_{BC} = m_B a \\implies 27 - 21 = 6 = 2(3)$. Fully verified!",
    why_wrong="Option B (9 N) is $m_C a$. Option C is $F_2$. Option D is $(m_B+m_C)a$."
))

# Q402: Medium
qs.append(make_lom_q(
    num=402,
    question="A block of mass $m$ is placed on an inclined plane of wedge angle $\theta$. The wedge accelerates horizontally with acceleration $a$. If the block remains stationary relative to the wedge, what is the normal contact force exerted by the wedge on the block?",
    options={
        "A": "$m(g \\cos\\theta + a \\sin\\theta)$",
        "B": "$mg \\cos\\theta$",
        "C": "$ma \\cos\\theta$",
        "D": "$m(g \\cos\\theta - a \\sin\\theta)$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="In the accelerating frame of the wedge (accelerating horizontally to the left with $a$), the pseudo force $ma$ acts horizontally to the right. Its component perpendicular to the incline into the surface is $ma\\sin\\theta$. The gravity component perpendicular into the surface is $mg\\cos\\theta$. Normal force balances both: $N = mg\\cos\\theta + ma\\sin\\theta$.",
    given="Wedge accelerates with $a$, block stationary on incline $\\theta$.",
    formula="$N = m(g\\cos\\theta + a\\sin\\theta)$.",
    steps="1. In the frame of the wedge, the block experiences:\n   - Downward gravity $mg$, giving perpendicular component $mg\\cos\\theta$ into the wedge.\n   - Horizontal pseudo force $ma$, giving perpendicular component $ma\\sin\\theta$ into the wedge.\n2. Both components press the block into the inclined face.\n3. The normal reaction $N$ opposes both components.\n4. Equating perpendicular forces: $N = mg\\cos\\theta + ma\\sin\\theta = m(g\\cos\\theta + a\\sin\\theta)$.",
    tip="Normal force on accelerated wedge increases: $N = m(g\\cos\\theta + a\\sin\\theta)$. For $a = g\\tan\\theta$, this simplifies to $N = \\frac{mg}{\\cos\\theta}$!",
    why_wrong="Option B assumes the wedge is stationary ($a = 0$). Option C only considers pseudo force. Option D subtracts instead of adding."
))

# Q403: Medium
qs.append(make_lom_q(
    num=403,
    question="In the previous setup, if $a = g\\tan\\theta$ (the condition for zero friction required), the normal force $N$ simplifies to:",
    options={
        "A": "$\\frac{mg}{\\cos\\theta}$",
        "B": "$mg \\cos\\theta$",
        "C": "$mg \\sin\\theta$",
        "D": "$mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Blocks in contact",
    concept="Substitute $a = g\\tan\\theta = g\\frac{\\sin\\theta}{\\cos\\theta}$ into $N = m(g\\cos\\theta + a\\sin\\theta)$: $N = mg\\left(\\cos\\theta + \\frac{\\sin^2\\theta}{\\cos\\theta}\\right) = mg\\left(\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\cos\\theta}\\right) = \\frac{mg}{\\cos\\theta}$.",
    given="$a = g\\tan\\theta$.",
    formula="$N = mg\\left(\\cos\\theta + \\frac{\\sin^2\\theta}{\\cos\\theta}\\right) = \\frac{mg}{\\cos\\theta}$.",
    steps="1. Start from $N = m(g\\cos\\theta + a\\sin\\theta)$.\n2. Substitute $a = g\\tan\\theta = g \\frac{\\sin\\theta}{\\cos\\theta}$:\n   $N = mg\\cos\\theta + m\\left(g\\frac{\\sin\\theta}{\\cos\\theta}\\right)\\sin\\theta = mg \\left(\\cos\\theta + \\frac{\\sin^2\\theta}{\\cos\\theta}\\right)$.\n3. Take common denominator $\\cos\\theta$:\n   $N = mg \\left(\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\cos\\theta}\\right)$.\n4. Using identity $\\cos^2\\theta + \\sin^2\\theta = 1$:\n   $N = \\frac{mg}{\\cos\\theta}$.",
    tip="Super Formula: On an accelerating smooth wedge at $a = g\\tan\\theta$, the normal force is $N = \\frac{mg}{\\cos\\theta} > mg$!",
    why_wrong="Option B ($mg\\cos\\theta$) is for a fixed wedge. Option C is the parallel component. Option D is flat horizontal."
))

# Q404: Hard
qs.append(make_lom_q(
    num=404,
    question="A block of mass $m_1 = 5\\text{ kg}$ is placed on top of block $m_2 = 10\\text{ kg}$, which rests on a rough horizontal floor with coefficient of friction $\\mu_2 = 0.1$. The coefficient of static friction between the two blocks is $\\mu_1 = 0.4$. What is the minimum horizontal force $F$ applied to block $m_2$ to start moving the combined system (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "15 N",
        "B": "20 N",
        "C": "60 N",
        "D": "10 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Blocks in contact",
    concept="To start moving the entire two-block system along the floor, the external force $F$ applied to $m_2$ must overcome the limiting friction between $m_2$ and the floor: $f_{\\text{floor, lim}} = \\mu_2 N_{\\text{floor}} = \\mu_2 (m_1 + m_2)g = 0.1(5 + 10)(10) = 15\\text{ N}$.",
    given="$m_1 = 5\\text{ kg}, m_2 = 10\\text{ kg}$, floor $\\mu_2 = 0.1$, between blocks $\\mu_1 = 0.4$, $g = 10\\text{ m/s}^2$.",
    formula="$N_{\\text{floor}} = (m_1 + m_2)g$; $F_{\\text{start}} = \\mu_2 (m_1 + m_2)g$.",
    steps="1. Total mass supported by the floor is $M = m_1 + m_2 = 5 + 10 = 15\\text{ kg}$.\n2. The normal reaction from the floor is $N_{\\text{floor}} = 15 \\times 10 = 150\\text{ N}$.\n3. The limiting static friction between the floor and block $m_2$ is:\n   $f_{\\text{floor, lim}} = \\mu_2 N_{\\text{floor}} = 0.1 \\times 150 = 15\\text{ N}$.\n4. For any $F > 15\\text{ N}$, the system starts moving.\n5. (Between the blocks, limiting friction is $0.4 \\times 50 = 20\\text{ N}$, which is higher than what is needed to accelerate $m_1$ initially, so they move together without relative slipping).\n6. Therefore, the minimum force to start motion is $15\\text{ N}$.",
    tip="Always identify the boundary being overcome! To move along the floor, overcome floor friction $= \\mu_{\\text{floor}} M_{\\text{total}} g = 15\\text{ N}$.",
    why_wrong="Option B (20 N) is the limiting friction between the two blocks ($0.4 \\times 50$). Option C (60 N) is the force at which slipping between the blocks begins ($15 + (15 \\times 4)$). Option D is $10\\text{ N}$."
))

# Q405: Hard
qs.append(make_lom_q(
    num=405,
    question="In the previous setup ($m_1 = 5\\text{ kg}$ on $m_2 = 10\\text{ kg}$, $\\mu_1 = 0.4$, $\\mu_2 = 0.1$), what is the maximum force $F$ applied to $m_2$ such that block $m_1$ does NOT slip on $m_2$?",
    options={
        "A": "75 N",
        "B": "60 N",
        "C": "45 N",
        "D": "80 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Blocks in contact",
    concept="Upper block $m_1$ accelerates via friction from $m_2$: $a_{\\text{max}} = \\mu_1 g = 0.4 \\times 10 = 4\\text{ m/s}^2$. The net force on the whole system is $F - f_{\\text{floor}} = (m_1 + m_2) a$. Here $f_{\\text{floor}} = \\mu_2(m_1 + m_2)g = 0.1(15)(10) = 15\\text{ N}$. Setting $a = a_{\\text{max}} = 4\\text{ m/s}^2$: $F - 15 = 15 \\times 4 = 60 \\implies F_{\\text{max}} = 60 + 15 = 75\\text{ N}$.",
    given="$m_1 = 5\\text{ kg}, m_2 = 10\\text{ kg}, \\mu_1 = 0.4, \\mu_2 = 0.1, g = 10\\text{ m/s}^2$.",
    formula="$a_{\\text{max}} = \\mu_1 g$; $F_{\\text{max}} = f_{\\text{floor}} + (m_1 + m_2) a_{\\text{max}}$.",
    steps="1. Maximum acceleration of upper block $m_1$ without slipping:\n   $a_{\\text{max}} = \\frac{\\mu_1 m_1 g}{m_1} = \\mu_1 g = 0.4 \\times 10 = 4\\text{ m/s}^2$.\n2. Kinetic friction opposing the entire system at the floor:\n   $f_{\\text{floor}} = \\mu_2(m_1 + m_2)g = 0.1 \\times 15 \\times 10 = 15\\text{ N}$.\n3. Equation of motion for the combined system moving together at $a_{\\text{max}}$:\n   $F_{\\text{max}} - f_{\\text{floor}} = (m_1 + m_2) a_{\\text{max}}$.\n4. $F_{\\text{max}} - 15 = 15 \\times 4 = 60\\text{ N}$.\n5. Therefore, $F_{\\text{max}} = 60 + 15 = 75\\text{ N}$.",
    tip="Block-on-Block Master Formula with Floor Friction: $F_{\\text{max}} = \\mu_{\\text{floor}}(m_1 + m_2)g + (m_1 + m_2)\\mu_{\\text{contact}}g$!",
    why_wrong="Option B (60 N) forgets to add floor friction ($15\\text{ N}$). Option C (45 N) uses incorrect mass. Option D is $80\\text{ N}$."
))

# Q406: Hard
qs.append(make_lom_q(
    num=406,
    question="Two blocks A and B of masses $m_A = 2\\text{ kg}$ and $m_B = 3\\text{ kg}$ are connected by a spring and placed on a smooth table. A force $F = 10\\text{ N}$ acts on A to the right. At an instant when block A has acceleration $a_A = 2\\text{ m/s}^2$, what is the force exerted by the spring on block B?",
    options={
        "A": "6 N",
        "B": "4 N",
        "C": "10 N",
        "D": "2 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Blocks in contact",
    concept="Write Newton's second law for block A: $F - F_s = m_A a_A \\implies F_s = F - m_A a_A = 10 - 2(2) = 6\\text{ N}$. By Newton's third law, the spring exerts an equal force $F_s = 6\\text{ N}$ on block B.",
    given="$m_A = 2\\text{ kg}, F = 10\\text{ N}, a_A = 2\\text{ m/s}^2$.",
    formula="$F - F_s = m_A a_A \\implies F_s = F - m_A a_A$.",
    steps="1. FBD of block A: External force $F = 10\\text{ N}$ acts to the right, spring force $F_s$ acts to the left.\n2. Equation of motion for A: $F - F_s = m_A a_A$.\n3. Substitute given values: $10 - F_s = 2\\text{ kg} \\times 2\\text{ m/s}^2 = 4\\text{ N}$.\n4. Therefore, the tension force in the spring is $F_s = 10 - 4 = 6\\text{ N}$.\n5. By Newton's third law, the spring pulls block B to the right with this same force $F_s = 6\\text{ N}$.",
    tip="Instantaneous spring force is found directly from the known body's FBD: $F_s = F - m_A a_A$!",
    why_wrong="Option B (4 N) is $m_A a_A$. Option C is the total force $F$. Option D is $(10 - 6) / 2$."
))

# Q407: Hard
qs.append(make_lom_q(
    num=407,
    question="In the previous spring-connected setup, what is the instantaneous acceleration of block B?",
    options={
        "A": "$2\\text{ m/s}^2$",
        "B": "$3\\text{ m/s}^2$",
        "C": "$1\\text{ m/s}^2$",
        "D": "$4\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Blocks in contact",
    concept="The only horizontal force acting on block B is the spring force $F_s = 6\\text{ N}$. Newton's second law on B gives $a_B = F_s / m_B = 6 / 3 = 2\\text{ m/s}^2$.",
    given="$F_s = 6\\text{ N}, m_B = 3\\text{ kg}$.",
    formula="$a_B = \\frac{F_s}{m_B} = \\frac{6\\text{ N}}{3\\text{ kg}} = 2\\text{ m/s}^2$.",
    steps="1. The spring force acting on block B is $F_s = 6\\text{ N}$.\n2. The table is frictionless, so no other horizontal force acts on B.\n3. Applying Newton's second law to block B:\n   $F_s = m_B a_B$.\n4. $6\\text{ N} = 3\\text{ kg} \\times a_B \\implies a_B = \\frac{6}{3} = 2\\text{ m/s}^2$.",
    tip="Notice that $a_{\\text{cm}} = \\frac{F}{m_A + m_B} = \\frac{10}{5} = 2\\text{ m/s}^2$. Since $a_A = 2\\text{ m/s}^2$ and $a_B = 2\\text{ m/s}^2$, $a_{\\text{cm}} = 2\\text{ m/s}^2$ is completely consistent!",
    why_wrong="Option B ($3\\text{ m/s}^2$) is $6/2$. Option C ($1\\text{ m/s}^2$) is $(10-6)/4$. Option D is $F/m_B$."
))

print(f"Topics 24 & 25 done: {len(qs)} questions.")
