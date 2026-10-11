import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 8: Conservation of linear momentum (Q110 to Q125, 16 questions: 3 Easy, 8 Medium, 5 Hard)
# ==============================================================================

# Q110 - Easy
qs.append(make_lom_q(
    num=110,
    question="The total linear momentum of an isolated system of particles remains strictly conserved if:",
    options={
        "A": "The net external force acting on the system is zero",
        "B": "The net internal force within the system is zero",
        "C": "No collisions occur between particles",
        "D": "The system is in a uniform gravitational field"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Conservation of linear momentum",
    concept="By Newton's second law for a system of particles, $\\vec{F}_{\\text{ext, net}} = \\frac{d\\vec{P}_{\\text{total}}}{dt}$. If $\\vec{F}_{\\text{ext, net}} = 0$, then $\\frac{d\\vec{P}}{dt} = 0$, which means $\\vec{P} = \\text{constant}$.",
    given="Isolated system condition.",
    formula="\\sum \\vec{F}_{\\text{ext}} = 0 \\iff \\vec{P}_{\\text{total}} = \\text{constant}",
    steps="1. Internal forces occur in action-reaction pairs and always cancel out to zero for the whole system ($\\sum \\vec{F}_{\\text{int}} = 0$).\n2. The time rate of change of total momentum depends exclusively on net external force: $\\frac{d\\vec{P}}{dt} = \\sum \\vec{F}_{\\text{ext}}$.\n3. When net external force is zero, total momentum is conserved.",
    tip="Internal forces NEVER change the total momentum of a system! Only external forces can change total momentum.",
    why_wrong="Option B: Internal forces cancel out automatically by Newton's third law, so they never change total momentum."
))

# Q111 - Easy
qs.append(make_lom_q(
    num=111,
    question="A bullet of mass $m = 20\\text{ g}$ is fired horizontally with velocity $v = 300\\text{ m/s}$ from a rifle of mass $M = 3\\text{ kg}$. The recoil velocity of the rifle is:",
    options={
        "A": "-2.0 m/s",
        "B": "-1.0 m/s",
        "C": "-0.5 m/s",
        "D": "-3.0 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Conservation of linear momentum",
    concept="Before firing, total momentum is zero. With no external horizontal forces, momentum is conserved: $M V + m v = 0 \\implies V = -\\frac{m v}{M}$.",
    given="$m = 0.02\\text{ kg}$, $v = 300\\text{ m/s}$, $M = 3\\text{ kg}$.",
    formula="P_i = 0 = P_f = M V + m v \\implies V = -\\frac{m v}{M}",
    steps="1. Initial momentum: $P_i = 0$.\n2. Final momentum: $P_f = M V + m v = 0$.\n3. Substitute values: $3 V + (0.02 \\times 300) = 0 \\implies 3V + 6 = 0$.\n4. Recoil velocity: $V = -6 / 3 = -2.0\\text{ m/s}$.\n5. The minus sign indicates recoil in the opposite direction.",
    tip="Recoil speed $V = \\frac{m v}{M} = \\frac{0.02 \\times 300}{3} = 2.0\\text{ m/s}$! Make sure bullet mass is converted from grams to kilograms ($20\\text{ g} = 0.02\\text{ kg}$).",
    why_wrong="Option B ($1.0\\text{ m/s}$) would occur if rifle mass were $6\\text{ kg}$."
))

# Q112 - Easy
qs.append(make_lom_q(
    num=112,
    question="A bomb of mass $9\\text{ kg}$ initially at rest explodes into two fragments of masses $3\\text{ kg}$ and $6\\text{ kg}$. If the $3\\text{ kg}$ fragment flies off with a speed of $16\\text{ m/s}$, what is the speed of the $6\\text{ kg}$ fragment?",
    options={
        "A": "8 m/s",
        "B": "16 m/s",
        "C": "4 m/s",
        "D": "32 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Conservation of linear momentum",
    concept="Explosions are driven entirely by internal forces. Since no external impulsive force acts, total linear momentum is conserved: $m_1 v_1 + m_2 v_2 = 0$.",
    given="$M = 9\\text{ kg}$, $m_1 = 3\\text{ kg}$, $v_1 = 16\\text{ m/s}$, $m_2 = 6\\text{ kg}$.",
    formula="m_1 v_1 = m_2 v_2 \\implies v_2 = \\frac{m_1 v_1}{m_2}",
    steps="1. Total momentum before explosion is zero: $P_i = 0$.\n2. After explosion: $m_1 v_1 + m_2 v_2 = 0 \\implies |m_2 v_2| = |m_1 v_1|$.\n3. Substitute values: $6 \\times v_2 = 3 \\times 16 = 48$.\n4. Solve for $v_2$: $v_2 = 48 / 6 = 8\\text{ m/s}$.",
    tip="The fragments fly off in opposite directions, and their speeds are in the inverse ratio of their masses: $v_2 / v_1 = m_1 / m_2 = 3/6 = 1/2$!",
    why_wrong="Option B assumes equal speeds, which violates momentum conservation for unequal masses."
))

# Q113 - Medium
qs.append(make_lom_q(
    num=113,
    question="In the previous explosion problem ($3\\text{ kg}$ fragment at $16\\text{ m/s}$ and $6\\text{ kg}$ fragment at $8\\text{ m/s}$), what is the ratio of the kinetic energy of the lighter fragment to that of the heavier fragment ($K_1 / K_2$)?",
    options={
        "A": "2 : 1",
        "B": "1 : 2",
        "C": "4 : 1",
        "D": "1 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="Since both fragments have equal magnitude of momentum ($p_1 = p_2 = p$), their kinetic energies satisfy $K = \\frac{p^2}{2m}$. Kinetic energy is inversely proportional to mass: $K_1 / K_2 = m_2 / m_1$.",
    given="$m_1 = 3\\text{ kg}$, $v_1 = 16\\text{ m/s}$; $m_2 = 6\\text{ kg}$, $v_2 = 8\\text{ m/s}$.",
    formula="K = \\frac{p^2}{2m} \\implies \\frac{K_1}{K_2} = \\frac{m_2}{m_1}",
    steps="1. Kinetic energy of fragment 1: $K_1 = \\frac{1}{2}(3)(16^2) = \\frac{1}{2}(3)(256) = 384\\text{ J}$.\n2. Kinetic energy of fragment 2: $K_2 = \\frac{1}{2}(6)(8^2) = \\frac{1}{2}(6)(64) = 192\\text{ J}$.\n3. Ratio: $\\frac{K_1}{K_2} = \\frac{384}{192} = 2$.\n4. Notice $\\frac{m_2}{m_1} = \\frac{6}{3} = 2$.",
    tip="NEET Rule for any 2-body explosion from rest: The lighter fragment ALWAYS carries the greater fraction of the total kinetic energy, inversely proportional to mass ($K_1/K_2 = m_2/m_1$)!",
    why_wrong="Option B ($1:2$) inverts the ratio, mistakenly giving more energy to the heavier piece."
))

# Q114 - Medium
qs.append(make_lom_q(
    num=114,
    question="A body of mass $M$ at rest explodes into three pieces of masses in the ratio $1 : 1 : 2$. The two pieces of equal mass fly off perpendicular to each other, each with a speed of $30\\text{ m/s}$. What is the speed of the third, heavier piece?",
    options={
        "A": "15\\sqrt{2} m/s (approx 21.2 m/s)",
        "B": "30 m/s",
        "C": "30\\sqrt{2} m/s",
        "D": "15 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="Let the equal masses be $m$ and the heavier piece be $2m$. The two equal pieces fly along $\hat{i}$ and $\hat{j}$. The third piece must carry equal and opposite momentum to balance the vector sum.",
    given="$m_1 = m$, $\\vec{v}_1 = 30\\hat{i}$; $m_2 = m$, $\\vec{v}_2 = 30\\hat{j}$; $m_3 = 2m$.",
    formula="\\vec{p}_1 + \\vec{p}_2 + \\vec{p}_3 = 0 \\implies \\vec{p}_3 = -(\\vec{p}_1 + \\vec{p}_2)",
    steps="1. Momentum of first piece: $\\vec{p}_1 = 30m\\hat{i}$.\n2. Momentum of second piece: $\\vec{p}_2 = 30m\\hat{j}$.\n3. Resultant of first two pieces: $|\\vec{p}_1 + \\vec{p}_2| = \\sqrt{(30m)^2 + (30m)^2} = 30\\sqrt{2}m$.\n4. Momentum of third piece: $p_3 = m_3 v_3 = (2m) v_3$.\n5. By conservation of momentum: $2m v_3 = 30\\sqrt{2}m \\implies v_3 = \\frac{30\\sqrt{2}}{2} = 15\\sqrt{2}\\text{ m/s} \\approx 21.21\\text{ m/s}$.",
    tip="Resultant of two equal perpendicular momenta $p$ is $\\sqrt{2}p$. The third piece must balance it: $m_3 v_3 = \\sqrt{2} p$!",
    why_wrong="Option C forgets to divide by the mass of the third piece ($2m$)."
))

# Q115 - Medium
qs.append(make_lom_q(
    num=115,
    question="A shell is fired from a cannon with a velocity $u$ at an angle $\\theta$ to the horizontal. At the highest point of its trajectory, the shell explodes into two equal fragments. If one fragment falls vertically downward with initial speed zero immediately after explosion, what is the initial horizontal velocity of the other fragment?",
    options={
        "A": "2 u \\cos\\theta",
        "B": "u \\cos\\theta",
        "C": "\\frac{u \\cos\\theta}{2}",
        "D": "4 u \\cos\\theta"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="At the highest point, the shell's velocity is purely horizontal: $v_x = u\\cos\\theta$, so total momentum is $M u\\cos\\theta\\hat{i}$. Apply conservation of momentum during the explosion.",
    given="Shell mass $M$, velocity at top $u\\cos\\theta\\hat{i}$. Fragments: $m_1 = M/2$ with $v_{1x} = 0$, $m_2 = M/2$.",
    formula="P_{ix} = M u\\cos\\theta = \\left(\\frac{M}{2}\\right)(0) + \\left(\\frac{M}{2}\\right)v_{2x}",
    steps="1. Total horizontal momentum just before explosion: $P = M u\\cos\\theta$.\n2. Fragment 1 has zero horizontal velocity ($v_{1x} = 0$).\n3. Conserve horizontal momentum:\n   $$M u\\cos\\theta = \\frac{M}{2}(0) + \\frac{M}{2} v_{2x} = \\frac{M}{2} v_{2x}$$\n4. Multiply both sides by $2/M$:\n   $$v_{2x} = 2 u\\cos\\theta$$.\n5. The second fragment moves horizontally with twice the apex velocity.",
    tip="Since one half has zero momentum, the other half must carry ALL the system's momentum, doubling its speed ($v = 2u\\cos\\theta$)!",
    why_wrong="Option B assumes the speed remains $u\\cos\\theta$, which violates momentum conservation."
))

# Q116 - Medium
qs.append(make_lom_q(
    num=116,
    question="A stationary radioactive nucleus of mass number $A$ decays by emitting an alpha particle (mass number $4$) with speed $v_\\alpha$. What is the recoil speed of the daughter nucleus?",
    options={
        "A": "\\frac{4 v_\\alpha}{A - 4}",
        "B": "\\frac{4 v_\\alpha}{A}",
        "C": "\\frac{(A - 4) v_\\alpha}{4}",
        "D": "\\frac{v_\\alpha}{A - 4}"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="The parent nucleus is initially at rest ($P_i = 0$). The daughter nucleus has mass number $A - 4$. Momentum conservation requires $M_d v_d = m_\\alpha v_\\alpha$.",
    given="Parent mass $A$, alpha particle mass $4$, daughter mass $A - 4$.",
    formula="m_\\alpha v_\\alpha = m_d v_d \\implies 4 v_\\alpha = (A - 4) v_d",
    steps="1. Total initial momentum is zero: $P_i = 0$.\n2. After decay: $4 v_\\alpha + (A - 4) v_d = 0$.\n3. Magnitude of recoil speed: $v_d = \\frac{4 v_\\alpha}{A - 4}$.",
    tip="For nuclear alpha decay: $v_{\\text{recoil}} = \\frac{4}{A-4} v_\\alpha$! For Uranium-238, $v_d = \\frac{4}{234}v_\\alpha$.",
    why_wrong="Option B incorrectly uses parent mass $A$ in the denominator instead of daughter mass $A - 4$."
))

# Q117 - Medium
qs.append(make_lom_q(
    num=117,
    question="A gun of mass $M = 4\\text{ kg}$ fires a bullet of mass $m = 50\\text{ g}$ with a muzzle velocity of $400\\text{ m/s}$. What is the ratio of the kinetic energy of the bullet to the recoil kinetic energy of the gun ($K_b / K_g$)?",
    options={
        "A": "80 : 1",
        "B": "1 : 80",
        "C": "40 : 1",
        "D": "160 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="For a gun and bullet system firing from rest, both acquire equal and opposite momentum: $p_b = p_g = p$. Kinetic energy is $K = \\frac{p^2}{2m}$, so $K_b / K_g = M / m$.",
    given="$M = 4\\text{ kg}$, $m = 50\\text{ g} = 0.05\\text{ kg}$.",
    formula="\\frac{K_b}{K_g} = \\frac{p^2 / (2m)}{p^2 / (2M)} = \\frac{M}{m}",
    steps="1. By conservation of linear momentum: $p_b = p_g$.\n2. The kinetic energies are $K_b = \\frac{p^2}{2m}$ and $K_g = \\frac{p^2}{2M}$.\n3. Ratio of kinetic energies: $\\frac{K_b}{K_g} = \\frac{M}{m} = \\frac{4\\text{ kg}}{0.05\\text{ kg}} = 80$.\n4. Therefore, the bullet carries 80 times more kinetic energy than the recoiling gun.",
    tip="Shortcut: For recoil from rest, $K_{\\text{bullet}} / K_{\\text{gun}} = M / m = 4 / 0.05 = 80$ directly without computing speeds!",
    why_wrong="Option B is the inverted ratio."
))

# Q118 - Medium
qs.append(make_lom_q(
    num=118,
    question="A trolley of mass $200\\text{ kg}$ is moving with a uniform speed of $36\\text{ km/h}$ on a frictionless horizontal track. A child of mass $20\\text{ kg}$ runs on the trolley from one end to the other (a distance of $10\\text{ m}$) with a speed of $4\\text{ m/s}$ relative to the trolley in a direction opposite to the trolley's motion and then jumps off. What is the final speed of the trolley after the child jumps off?",
    options={
        "A": "10.4 m/s",
        "B": "10.0 m/s",
        "C": "9.6 m/s",
        "D": "11.2 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="Convert initial speed to SI: $36\\text{ km/h} = 10\\text{ m/s}$. Apply conservation of linear momentum along the track axis where no external horizontal force acts.",
    given="$M = 200\\text{ kg}$, $m = 20\\text{ kg}$, $u = 10\\text{ m/s}$, child's relative speed $v_{\\text{rel}} = -4\\text{ m/s}$.",
    formula="P_i = (M + m)u = M V + m(V - v_{\\text{rel}})",
    steps="1. Initial momentum: $P_i = (M + m)u = (200 + 20)(10) = 2200\\text{ kg}\\cdot\\text{m/s}$.\n2. Let final trolley speed be $V$. Child jumps backward with speed $4\\text{ m/s}$ relative to trolley, so child's velocity relative to ground is $V - 4$.\n3. Conservation of momentum:\n   $$2200 = 200 V + 20(V - 4) = 220 V - 80$$\n   $$220 V = 2280 \\implies V = \\frac{2280}{220} = \\frac{114}{11} \\approx 10.36\\text{ m/s} \\approx 10.4\\text{ m/s}$$.",
    tip="Jumping backward pushes the trolley FORWARD, so the trolley speeds up from $10.0\\text{ m/s}$ to $10.4\\text{ m/s}$!",
    why_wrong="Option C ($9.6\\text{ m/s}$) would occur if the child jumped forward in the direction of motion."
))

# Q119 - Medium
qs.append(make_lom_q(
    num=119,
    question="Two gliders of masses $m_1 = 0.3\\text{ kg}$ and $m_2 = 0.5\\text{ kg}$ move toward each other on a frictionless air track with speeds $2.0\\text{ m/s}$ and $1.0\\text{ m/s}$ respectively. If they stick together upon collision (completely inelastic collision), what is their common velocity after collision?",
    options={
        "A": "+0.125 m/s in the initial direction of m_1",
        "B": "-0.125 m/s in the initial direction of m_2",
        "C": "+0.500 m/s",
        "D": "0 m/s (come to rest)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="In a completely inelastic collision, the two bodies coalesce and move with a single common velocity $v_f = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$.",
    given="$m_1 = 0.3\\text{ kg}$, $v_1 = +2.0\\text{ m/s}$, $m_2 = 0.5\\text{ kg}$, $v_2 = -1.0\\text{ m/s}$.",
    formula="m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_f",
    steps="1. Total initial momentum: $P_i = (0.3)(+2.0) + (0.5)(-1.0) = +0.6 - 0.5 = +0.1\\text{ kg}\\cdot\\text{m/s}$.\n2. Total mass: $M_{\\text{total}} = 0.3 + 0.5 = 0.8\\text{ kg}$.\n3. Final common velocity: $v_f = \\frac{+0.1}{0.8} = +0.125\\text{ m/s}$.\n4. Since $v_f > 0$, the combination moves in the original direction of $m_1$.",
    tip="Always assign signs to velocities moving in opposite directions ($+2.0$ and $-1.0$)!",
    why_wrong="Option D incorrectly assumes the momenta cancel, but $0.6 \\neq 0.5$."
))

# Q120 - Medium
qs.append(make_lom_q(
    num=120,
    question="A bullet of mass $m = 25\\text{ g}$ is fired horizontally with speed $400\\text{ m/s}$ into a ballistic pendulum consisting of a wooden block of mass $M = 4.975\\text{ kg}$ suspended by light cords. The bullet embeds into the block. To what vertical height $h$ does the block swing up? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "0.204 m (approx 20.4 cm)",
        "B": "0.408 m",
        "C": "0.102 m",
        "D": "0.816 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conservation of linear momentum",
    concept="Two-stage problem: (1) Inelastic collision: momentum is conserved to find common speed $V = \\frac{m v}{M + m}$. (2) Swing up: mechanical energy is conserved: $\\frac{1}{2}(M+m)V^2 = (M+m)gh \\implies h = V^2 / (2g)$.",
    given="$m = 0.025\\text{ kg}$, $v = 400\\text{ m/s}$, $M = 4.975\\text{ kg}$, $M + m = 5.0\\text{ kg}$, $g = 9.8\\text{ m/s}^2$.",
    formula="V = \\frac{m v}{M + m},\\quad h = \\frac{V^2}{2g}",
    steps="1. Total momentum conserved during embedding:\n   $$V = \\frac{0.025 \\times 400}{4.975 + 0.025} = \\frac{10}{5.0} = 2.0\\text{ m/s}$$\n2. Energy conserved during upward swing:\n   $$h = \\frac{V^2}{2g} = \\frac{(2.0)^2}{2 \\times 9.8} = \\frac{4.0}{19.6} = 0.204\\text{ m} = 20.4\\text{ cm}$$.",
    tip="Ballistic pendulum: Stage 1 = Conservation of MOMENTUM (energy is lost in embedding!). Stage 2 = Conservation of MECHANICAL ENERGY ($h = V^2/2g$).",
    why_wrong="Option B ($0.408\\text{ m}$) forgets the factor of 2 in $V^2/(2g)$."
))

# Q121 - Hard
qs.append(make_lom_q(
    num=121,
    question="A stationary radioactive nucleus decays into an alpha particle and a recoil nucleus. If the total energy released (Q-value) in the decay is $E_0$, what fraction of this total energy is carried away as kinetic energy by the alpha particle? (Let mass of alpha particle be $m$ and daughter nucleus be $M$)",
    options={
        "A": "\\frac{M}{M + m}",
        "B": "\\frac{m}{M + m}",
        "C": "\\frac{M - m}{M + m}",
        "D": "\\frac{m}{M}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conservation of linear momentum",
    concept="Linear momentum conservation: $p_\\alpha = p_d = p$. The kinetic energies are $K_\\alpha = \\frac{p^2}{2m}$ and $K_d = \\frac{p^2}{2M}$. Total kinetic energy is $E_0 = K_\\alpha + K_d$.",
    given="Decay from rest: $p_\\alpha = p_d$, $E_0 = K_\\alpha + K_d$.",
    formula="\\frac{K_\\alpha}{E_0} = \\frac{p^2 / (2m)}{\\frac{p^2}{2m} + \\frac{p^2}{2M}} = \\frac{1/m}{1/m + 1/M} = \\frac{M}{M + m}",
    steps="1. $K_\\alpha = \\frac{p^2}{2m}$ and $K_d = \\frac{p^2}{2M}$.\n2. Total energy: $E_0 = K_\\alpha + K_d = \\frac{p^2}{2}\\left( \\frac{1}{m} + \\frac{1}{M} \\right) = \\frac{p^2}{2}\\left( \\frac{M + m}{m M} \\right)$.\n3. Divide $K_\\alpha$ by $E_0$:\n   $$\\frac{K_\\alpha}{E_0} = \\frac{p^2 / (2m)}{\\frac{p^2 (M+m)}{2 m M}} = \\frac{M}{M + m}$$.\n4. Because $M \\gg m$, the alpha particle carries almost all the decay energy (e.g., $234/238 \\approx 98.3\\%$).",
    tip="Standard NEET formula for alpha decay: $K_\\alpha = \\left( \\frac{A - 4}{A} \\right) Q$!",
    why_wrong="Option B gives the fraction carried by the heavy daughter nucleus, which is only $\\sim 1.7\\%$."
))

# Q122 - Hard
qs.append(make_lom_q(
    num=122,
    question="A ball of mass $m_1$ moving with speed $u$ collides head-on elastically with another ball of mass $m_2$ initially at rest. What is the fraction of initial kinetic energy transferred from $m_1$ to $m_2$?",
    options={
        "A": "\\frac{4 m_1 m_2}{(m_1 + m_2)^2}",
        "B": "\\frac{2 m_1 m_2}{(m_1 + m_2)^2}",
        "C": "\\frac{(m_1 - m_2)^2}{(m_1 + m_2)^2}",
        "D": "\\frac{4 m_1^2}{(m_1 + m_2)^2}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conservation of linear momentum",
    concept="For a 1D elastic collision with $m_2$ at rest, the velocity of $m_2$ after collision is $v_2 = \\frac{2m_1}{m_1 + m_2}u$. The fractional kinetic energy transferred is $\\frac{K_2}{K_1} = \\frac{\\frac{1}{2}m_2 v_2^2}{\\frac{1}{2}m_1 u^2}$.",
    given="$u_1 = u$, $u_2 = 0$, perfectly elastic ($e = 1$).",
    formula="v_2 = \\frac{2m_1}{m_1 + m_2}u,\\quad \\frac{\\Delta K}{K_1} = \\frac{m_2 v_2^2}{m_1 u^2} = \\frac{4 m_1 m_2}{(m_1 + m_2)^2}",
    steps="1. Final velocity of target mass: $v_2 = \\frac{2m_1 u}{m_1 + m_2}$.\n2. Kinetic energy transferred to target: $K_2 = \\frac{1}{2}m_2 v_2^2 = \\frac{1}{2}m_2 \\frac{4m_1^2 u^2}{(m_1 + m_2)^2}$.\n3. Initial kinetic energy: $K_1 = \\frac{1}{2}m_1 u^2$.\n4. Fraction transferred: $\\frac{K_2}{K_1} = \\frac{4 m_1 m_2}{(m_1 + m_2)^2}$.\n5. When $m_1 = m_2$, the fraction is $\\frac{4m^2}{(2m)^2} = 1$ ($100\\%$ transferred!).",
    tip="Memorize: Fraction of KE transferred in 1D elastic collision = $\\frac{4 m_1 m_2}{(m_1 + m_2)^2}$. Maximum transfer ($100\\%$) occurs when $m_1 = m_2$!",
    why_wrong="Option C is the fraction of kinetic energy RETAINED by $m_1$ ($\frac{(m_1 - m_2)^2}{(m_1 + m_2)^2}$)."
))

# Q123 - Hard
qs.append(make_lom_q(
    num=123,
    question="A neutron moving with speed $v$ collides head-on elastically with a stationary carbon nucleus ($^{12}\\text{C}$) of mass number $12$. What fraction of the neutron's initial kinetic energy is lost to the carbon nucleus?",
    options={
        "A": "48 / 169 (approx 28.4%)",
        "B": "121 / 169 (approx 71.6%)",
        "C": "12 / 13 (approx 92.3%)",
        "D": "1 / 12 (approx 8.3%)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conservation of linear momentum",
    concept="Apply the fractional energy transfer formula for head-on elastic collision: $\\frac{\\Delta K}{K} = \\frac{4 m_1 m_2}{(m_1 + m_2)^2}$ with $m_1 = 1$ (neutron) and $m_2 = 12$ (carbon).",
    given="$m_1 = 1$, $m_2 = 12$, head-on elastic collision.",
    formula="\\frac{\\Delta K}{K} = \\frac{4 m_1 m_2}{(m_1 + m_2)^2}",
    steps="1. Substitute $m_1 = 1$ and $m_2 = 12$:\n   $$\\frac{\\Delta K}{K} = \\frac{4(1)(12)}{(1 + 12)^2} = \\frac{48}{13^2} = \\frac{48}{169}$$\n2. As a percentage: $\\frac{48}{169} \\approx 0.284 = 28.4\\%$.\n3. This explains why heavy water or graphite is used as a moderator in nuclear reactors to slow neutrons down.",
    tip="Nuclear physics application of Newton's laws! For hydrogen ($m_2=1$), transfer is $100\\%$. For Carbon-12, transfer is $\\frac{48}{169} \\approx 28.4\\%$.",
    why_wrong="Option B ($121/169$) is the fraction of kinetic energy RETAINED by the neutron ($1 - 48/169 = 121/169$)."
))

# Q124 - Hard
qs.append(make_lom_q(
    num=124,
    question="A wooden block of mass $M$ is suspended by a vertical wire of length $L$. A horizontal bullet of mass $m$ strikes the block with speed $v$ and emerges from the opposite side with speed $v/3$. What is the minimum speed $v$ of the bullet such that the block completes a full vertical circle? (Assume wire is replaced by a light rigid rod)",
    options={
        "A": "\\frac{3M}{2m} \\sqrt{4 g L}",
        "B": "\\frac{3M}{2m} \\sqrt{5 g L}",
        "C": "\\frac{M}{m} \\sqrt{4 g L}",
        "D": "\\frac{3M}{m} \\sqrt{5 g L}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conservation of linear momentum",
    concept="For a rigid rod, the minimum speed at the lowest point to complete a full vertical circle is $v_{\\text{bottom}} = \\sqrt{4gL} = 2\\sqrt{gL}$ (just reaching the top with zero speed). Conservation of momentum during bullet penetration relates this to initial bullet speed.",
    given="Rigid rod of length $L$, bullet mass $m$ slows from $v$ to $v/3$, block mass $M$ acquires $V = \\sqrt{4gL}$.",
    formula="m v = m\\left(\\frac{v}{3}\\right) + M V \\implies m\\left(\\frac{2}{3}v\\right) = M V",
    steps="1. Momentum transferred to block:\n   $$\\Delta p = mv - m\\left(\\frac{v}{3}\\right) = \\frac{2}{3}mv$$\n2. Speed acquired by block: $V = \\frac{2mv}{3M}$.\n3. For a light rigid rod, the condition to complete a full vertical circle is $V \\ge \\sqrt{4gL}$.\n4. Equate:\n   $$\\frac{2mv}{3M} = \\sqrt{4gL} \\implies v = \\frac{3M}{2m}\\sqrt{4gL}$$.",
    tip="Rigid rod $\\implies V_{\\min} = \\sqrt{4gL} = 2\\sqrt{gL}$! Light string $\\implies V_{\\min} = \\sqrt{5gL}$. Notice the question explicitly specified a rigid rod!",
    why_wrong="Option B ($\sqrt{5gL}$) is the condition for a flexible string, not a rigid rod."
))

# Q125 - Hard
qs.append(make_lom_q(
    num=125,
    question="A small sphere of mass $m$ is released from rest at the top edge of a smooth hemispherical bowl of mass $M$ and radius $R$, which is free to slide on a frictionless horizontal table. What is the speed of the bowl when the sphere reaches the bottom of the bowl?",
    options={
        "A": "\\sqrt{\\frac{2 m^2 g R}{M(M + m)}}",
        "B": "\\sqrt{\\frac{2 g R M}{m(M + m)}}",
        "C": "\\sqrt{\\frac{2 g R}{M + m}}",
        "D": "\\sqrt{\\frac{m g R}{M}}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conservation of linear momentum",
    concept="Horizontal linear momentum is conserved because no external horizontal forces act on the (sphere + bowl) system. Mechanical energy is also conserved as all surfaces are smooth.",
    given="Bowl mass $M$, sphere mass $m$, released from rest, radius $R$.",
    formula="P_{ix} = 0 \\implies m v_x = M V \\implies v_x = \\frac{M}{m}V,\\quad m g R = \\frac{1}{2}m v_x^2 + \\frac{1}{2}M V^2",
    steps="1. Conservation of horizontal momentum: At the bottom, the sphere's velocity is purely horizontal ($v_x$).\n   $$m v_x - M V = 0 \\implies v_x = \\frac{M}{m}V$$\n2. Conservation of mechanical energy:\n   $$m g R = \\frac{1}{2}M V^2 + \\frac{1}{2}m v_x^2 = \\frac{1}{2}M V^2 + \\frac{1}{2}m \\left( \\frac{M^2}{m^2} V^2 \\right)$$\n   $$m g R = \\frac{1}{2} V^2 \\left[ M + \\frac{M^2}{m} \\right] = \\frac{1}{2} V^2 \\left[ \\frac{M(m + M)}{m} \\right]$$\n3. Solve for $V^2$:\n   $$V^2 = \\frac{2 m^2 g R}{M(M + m)} \\implies V = \\sqrt{\\frac{2 m^2 g R}{M(M + m)}}$$.",
    tip="Two conservation laws: Horizontal momentum ($m v = M V$) + Total energy ($mgR = \\frac{1}{2}MV^2 + \\frac{1}{2}mv^2$)!",
    why_wrong="Option C assumes both have the same speed, which violates momentum conservation."
))

print("Topic 8 done: 16 questions.")
