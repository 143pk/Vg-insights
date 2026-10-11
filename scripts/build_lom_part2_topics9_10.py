import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 9: Applications of conservation of momentum (Q126 to Q141, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q126 - Easy
qs.append(make_lom_q(
    num=126,
    question="The propulsion of a rocket in outer space operates primarily on the principle of:",
    options={
        "A": "Conservation of linear momentum",
        "B": "Conservation of mass only",
        "C": "Conservation of angular momentum only",
        "D": "Bernoulli's principle"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Applications of conservation of momentum",
    concept="A rocket expels combustion gases backward at high velocity. By conservation of linear momentum, the rocket body accelerates forward in the opposite direction.",
    given="Rocket in outer space.",
    formula="\\vec{P}_{\\text{system}} = \\text{constant} \\implies M \\Delta \\vec{v} = -\\Delta m \\vec{u}_{\\text{rel}}",
    steps="1. In space, no external atmospheric air exists to push against.\n2. Gas is ejected rearward with large momentum $\\Delta m \\vec{u}_{\\text{rel}}$.\n3. Conservation of total momentum mandates that the rocket acquires an equal and opposite forward momentum.\n4. Therefore, rocket propulsion is a direct application of conservation of linear momentum.",
    tip="Rockets do NOT push against air or the ground! They operate by throwing mass backwards, working even more efficiently in a pure vacuum.",
    why_wrong="Option D (Bernoulli's principle) relates to fluid pressure, not rocket propulsion."
))

# Q127 - Easy
qs.append(make_lom_q(
    num=127,
    question="A stationary cannon of mass $1000\\text{ kg}$ fires a $10\\text{ kg}$ cannonball horizontally with a velocity of $100\\text{ m/s}$. What is the recoil speed of the cannon?",
    options={
        "A": "1.0 m/s",
        "B": "0.1 m/s",
        "C": "10.0 m/s",
        "D": "0.01 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Applications of conservation of momentum",
    concept="Total momentum before firing is zero. By conservation of linear momentum: $M V + m v = 0 \\implies V = -\\frac{m v}{M}$.",
    given="$M = 1000\\text{ kg}$, $m = 10\\text{ kg}$, $v = 100\\text{ m/s}$.",
    formula="V = \\frac{m v}{M}",
    steps="1. Forward momentum of ball: $p = m v = 10 \\times 100 = 1000\\text{ kg}\\cdot\\text{m/s}$.\n2. By momentum conservation, backward momentum of cannon is $1000\\text{ kg}\\cdot\\text{m/s}$.\n3. Recoil speed: $V = \\frac{1000}{1000} = 1.0\\text{ m/s}$.",
    tip="Recoil speed $V = (m/M)v = (10/1000) \\times 100 = 1.0\\text{ m/s}$!",
    why_wrong="Option B ($0.1\\text{ m/s}$) is off by a factor of 10."
))

# Q128 - Easy
qs.append(make_lom_q(
    num=128,
    question="A heavy stone rests on a frictionless sheet of ice. A man standing on the ice throws the stone horizontally away from himself. What happens to the man?",
    options={
        "A": "The man slides backward in the opposite direction to the throw",
        "B": "The man remains stationary",
        "C": "The man slides forward in the direction of the throw",
        "D": "The man falls vertically downward"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Applications of conservation of momentum",
    concept="The ice surface is frictionless, so the net external horizontal force on the man-stone system is zero. By conservation of linear momentum, throwing the stone forward imparts backward momentum to the man.",
    given="Man and stone on frictionless ice, stone thrown with forward momentum $+p$.",
    formula="P_i = 0 = M V_{\\text{man}} + m v_{\\text{stone}} \\implies V_{\\text{man}} = -\\frac{m v_{\\text{stone}}}{M}",
    steps="1. Initially both man and stone are at rest ($P_i = 0$).\n2. The stone is thrown forward with positive momentum $+mv$.\n3. To conserve total momentum, the man must acquire equal negative momentum $-mv$.\n4. Thus, the man slides backward.",
    tip="If stranded on perfectly frictionless ice, throw your shoe or any heavy object away from you to slide toward the shore!",
    why_wrong="Option B violates conservation of linear momentum on a frictionless surface."
))

# Q129 - Easy
qs.append(make_lom_q(
    num=129,
    question="When an inflated rubber balloon with an untied neck is released, it zips forward across the room. The physical law demonstrated here is:",
    options={
        "A": "Conservation of linear momentum",
        "B": "Hooke's law of elasticity only",
        "C": "Boyle's law",
        "D": "Torricelli's law"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Applications of conservation of momentum",
    concept="Air escapes backward through the neck with momentum $\vec{p}_{\text{air}}$. By conservation of momentum, the balloon gains an equal and opposite forward momentum $\vec{p}_{\text{balloon}} = -\vec{p}_{\text{air}}$.",
    given="Untied balloon discharging air.",
    formula="\\vec{P}_{\\text{balloon}} = -\\vec{P}_{\\text{escaping air}}",
    steps="1. Pressurized air rushes backward out of the open nozzle.\n2. In the absence of net external horizontal forces, total system momentum is conserved.\n3. The balloon accelerates forward, identical to a miniature rocket engine.",
    tip="Every action of backward gas ejection produces a forward momentum gain—pure momentum conservation!",
    why_wrong="Option C (Boyle's law) describes gas volume vs pressure, not the propulsion mechanism."
))

# Q130 - Medium
qs.append(make_lom_q(
    num=130,
    question="A bullet of mass $10\\text{ g}$ is fired horizontally into a sandbag of mass $990\\text{ g}$ hanging from a tall ceiling. The bullet remains embedded in the sandbag. If the speed of the bullet just before impact is $100\\text{ m/s}$, the percentage of initial kinetic energy lost as heat and deformation during the collision is:",
    options={
        "A": "99%",
        "B": "90%",
        "C": "10%",
        "D": "1%"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="In a completely inelastic collision where target mass $M$ is initially at rest, the fraction of kinetic energy retained is $\\frac{m}{M + m}$. The fraction lost is $\\frac{M}{M + m}$.",
    given="$m = 0.01\\text{ kg}$ ($10\\text{ g}$), $M = 0.99\\text{ kg}$ ($990\\text{ g}$), $M + m = 1.0\\text{ kg}$.",
    formula="\\text{Fraction of KE lost} = \\frac{M}{M + m}",
    steps="1. Initial kinetic energy: $K_i = \\frac{1}{2}m v^2 = \\frac{1}{2}(0.01)(100^2) = 50\\text{ J}$.\n2. Common velocity from momentum conservation:\n   $$V = \\frac{m v}{M + m} = \\frac{0.01 \\times 100}{1.0} = 1.0\\text{ m/s}$$\n3. Final kinetic energy: $K_f = \\frac{1}{2}(M + m)V^2 = \\frac{1}{2}(1.0)(1.0^2) = 0.5\\text{ J}$.\n4. Kinetic energy lost: $\\Delta K = 50 - 0.5 = 49.5\\text{ J}$.\n5. Percentage lost: $\\frac{49.5}{50} \\times 100\\% = 99\\%$.",
    tip="Shortcut formula for completely inelastic collision: Percentage KE lost = $\\frac{M}{M + m} \\times 100\\% = \\frac{990}{1000} \\times 100\\% = 99\\%$!",
    why_wrong="Option D ($1\\%$) is the percentage of kinetic energy RETAINED, not lost."
))

# Q131 - Medium
qs.append(make_lom_q(
    num=131,
    question="A stationary shell explodes into two fragments of masses $m_1$ and $m_2$ with speeds $v_1$ and $v_2$. If the total energy released in the explosion is $E$, what is the kinetic energy of mass $m_1$?",
    options={
        "A": "\\frac{m_2}{m_1 + m_2} E",
        "B": "\\frac{m_1}{m_1 + m_2} E",
        "C": "\\frac{m_1 m_2}{m_1 + m_2} E",
        "D": "\\frac{m_2^2}{(m_1 + m_2)^2} E"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="By momentum conservation from rest, $p_1 = p_2 = p$. The kinetic energies are $K_1 = \\frac{p^2}{2m_1}$ and $K_2 = \\frac{p^2}{2m_2}$. Since $K_1 / K_2 = m_2 / m_1$, the fraction of total energy $E = K_1 + K_2$ taken by $m_1$ is $\\frac{m_2}{m_1 + m_2}$.",
    given="$p_1 = p_2$, $K_1 + K_2 = E$.",
    formula="K_1 = \\frac{m_2}{m_1 + m_2} E",
    steps="1. Total momentum is zero: $p_1 = p_2 = p$.\n2. $K_1 = \\frac{p^2}{2m_1}$ and $K_2 = \\frac{p^2}{2m_2}$.\n3. $K_2 = K_1 \\frac{m_1}{m_2}$.\n4. $E = K_1 + K_2 = K_1\\left(1 + \\frac{m_1}{m_2}\\right) = K_1\\left(\\frac{m_1 + m_2}{m_2}\\right)$.\n5. Solving for $K_1$: $K_1 = \\frac{m_2}{m_1 + m_2} E$.",
    tip="Lighter mass gets more kinetic energy: $K_1 = \\frac{m_2}{m_1 + m_2}E$ and $K_2 = \\frac{m_1}{m_1 + m_2}E$. Opposite mass in numerator!",
    why_wrong="Option B gives the kinetic energy of $m_2$, not $m_1$."
))

# Q132 - Medium
qs.append(make_lom_q(
    num=132,
    question="A bullet of mass $m$ travelling horizontally with velocity $v$ strikes a stationary wooden block of mass $M$ placed on a frictionless horizontal surface and emerges with velocity $v/2$. What is the final velocity of the block?",
    options={
        "A": "\\frac{m v}{2 M}",
        "B": "\\frac{m v}{M}",
        "C": "\\frac{2 m v}{M}",
        "D": "\\frac{m v}{2(M + m)}"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="Conserve horizontal linear momentum: Initial momentum of system = Final momentum of bullet + Final momentum of block.",
    given="Initial: bullet $m$ with speed $v$, block $M$ at rest. Final: bullet $m$ with speed $v/2$, block $M$ with speed $V$.",
    formula="m v = m\\left(\\frac{v}{2}\\right) + M V \\implies M V = m v - \\frac{mv}{2} = \\frac{mv}{2}",
    steps="1. Write momentum conservation equation: $m v = m\\left(\\frac{v}{2}\\right) + M V$.\n2. Rearrange: $M V = \\frac{1}{2} m v$.\n3. Solve for $V$: $V = \\frac{m v}{2M}$.",
    tip="Momentum lost by the bullet ($m v - mv/2 = mv/2$) is transferred entirely to the block ($MV$)!",
    why_wrong="Option D incorrectly assumes the bullet remained embedded in the block."
))

# Q133 - Medium
qs.append(make_lom_q(
    num=133,
    question="A body of mass $5\\text{ kg}$ explodes into three pieces of masses $1\\text{ kg}$, $1\\text{ kg}$, and $3\\text{ kg}$. The two $1\\text{ kg}$ pieces fly off along mutually perpendicular directions with equal speeds of $21\\text{ m/s}$. The speed of the $3\\text{ kg}$ piece is:",
    options={
        "A": "7\\sqrt{2} m/s (approx 9.9 m/s)",
        "B": "14 m/s",
        "C": "21\\sqrt{2} m/s",
        "D": "7 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="Vector momentum conservation: The resultant momentum of the two perpendicular $1\\text{ kg}$ fragments is $\\sqrt{p_1^2 + p_2^2} = \\sqrt{2}p_1$. The third piece must carry equal momentum in the opposite direction.",
    given="$m_1 = 1\\text{ kg}$, $v_1 = 21\\text{ m/s}$; $m_2 = 1\\text{ kg}$, $v_2 = 21\\text{ m/s}$; $m_3 = 3\\text{ kg}$.",
    formula="p_3 = \\sqrt{p_1^2 + p_2^2} = \\sqrt{(1 \\times 21)^2 + (1 \\times 21)^2} = 21\\sqrt{2}\\text{ kg}\\cdot\\text{m/s}",
    steps="1. Momenta of first two pieces: $p_1 = 21\\text{ kg}\\cdot\\text{m/s}$, $p_2 = 21\\text{ kg}\\cdot\\text{m/s}$ at $90^\\circ$.\n2. Vector sum magnitude: $p_{\\text{resultant}} = \\sqrt{21^2 + 21^2} = 21\\sqrt{2}\\text{ kg}\\cdot\\text{m/s}$.\n3. Momentum of the third piece: $m_3 v_3 = 3 v_3 = 21\\sqrt{2}$.\n4. Speed of third piece: $v_3 = \\frac{21\\sqrt{2}}{3} = 7\\sqrt{2}\\text{ m/s} \\approx 9.9\\text{ m/s}$.",
    tip="Divide the resultant momentum ($21\\sqrt{2}$) by mass $m_3 = 3\\text{ kg}$ to get $7\\sqrt{2}\\text{ m/s}$!",
    why_wrong="Option C forgets to divide by the third fragment's mass of $3\\text{ kg}$."
))

# Q134 - Medium
qs.append(make_lom_q(
    num=134,
    question="A boy of mass $40\\text{ kg}$ stands on a flat skateboard of mass $10\\text{ kg}$ resting on smooth ground. If the boy walks forward on the board with a velocity of $1.5\\text{ m/s}$ relative to the ground, with what velocity does the skateboard move relative to the ground?",
    options={
        "A": "-6.0 m/s (backward)",
        "B": "-1.5 m/s",
        "C": "-3.0 m/s",
        "D": "-0.375 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="Total horizontal momentum of the boy-skateboard system is conserved ($P_{\\text{total}} = 0$).",
    given="$m_{\\text{boy}} = 40\\text{ kg}$, $v_{\\text{boy}} = +1.5\\text{ m/s}$, $M_{\\text{board}} = 10\\text{ kg}$.",
    formula="m_{\\text{boy}} v_{\\text{boy}} + M_{\\text{board}} V_{\\text{board}} = 0",
    steps="1. Forward momentum of boy: $p = 40 \\times 1.5 = 60\\text{ kg}\\cdot\\text{m/s}$.\n2. Conservation of momentum: $60 + 10 V_{\\text{board}} = 0$.\n3. Solve for board velocity: $V_{\\text{board}} = -60 / 10 = -6.0\\text{ m/s}$.\n4. The skateboard shoots backward with a speed of $6.0\\text{ m/s}$.",
    tip="Velocity of board $V = -\\frac{m}{M}v = -\\frac{40}{10}(1.5) = -6.0\\text{ m/s}$!",
    why_wrong="Option D is the inverse ratio $\\frac{10}{40} \\times 1.5$."
))

# Q135 - Medium
qs.append(make_lom_q(
    num=135,
    question="A rocket of total mass $1000\\text{ kg}$ consumes fuel at a rate of $40\\text{ kg/s}$. If the exhaust gas is ejected at $2000\\text{ m/s}$ relative to the rocket, what is the net upward thrust on the rocket?",
    options={
        "A": "80000 N (80 kN)",
        "B": "40000 N",
        "C": "20000 N",
        "D": "160000 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="Thrust on a rocket is given by $F_{\\text{thrust}} = u_{\\text{rel}} \\frac{dm}{dt}$.",
    given="$u_{\\text{rel}} = 2000\\text{ m/s}$, $\\frac{dm}{dt} = 40\\text{ kg/s}$.",
    formula="F_{\\text{thrust}} = u_{\\text{rel}} \\frac{dm}{dt}",
    steps="1. The rate of momentum carried away by exhaust gases is $u_{\\text{rel}} \\frac{dm}{dt}$.\n2. Substitute values: $F_{\\text{thrust}} = 2000 \\times 40 = 80000\\text{ N} = 80\\text{ kN}$.\n3. This is the forward thrust generated on the rocket.",
    tip="Thrust depends only on exhaust velocity and burning rate: $F = u \\times (dm/dt)$, independent of the rocket's current mass!",
    why_wrong="Option B ($40000\\text{ N}$) is half the correct thrust."
))

# Q136 - Medium
qs.append(make_lom_q(
    num=136,
    question="Two skaters, A of mass $50\\text{ kg}$ and B of mass $70\\text{ kg}$, are connected by a taut light rope on frictionless ice, separated by $24\\text{ m}$. Skater A pulls on the rope to bring them together. If Skater B does not pull, at what distance from Skater A's initial position do they meet?",
    options={
        "A": "14 m",
        "B": "10 m",
        "C": "12 m",
        "D": "17 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="Because there are zero external horizontal forces, the center of mass of the system remains stationary: $\\Delta x_{\\text{cm}} = 0$. They meet at their center of mass.",
    given="$m_A = 50\\text{ kg}$ at $x = 0$, $m_B = 70\\text{ kg}$ at $x = 24\\text{ m}$.",
    formula="x_{\\text{cm}} = \\frac{m_A x_A + m_B x_B}{m_A + m_B}",
    steps="1. Choose Skater A's initial position as $x = 0$.\n2. Skater B is at $x = 24\\text{ m}$.\n3. Center of mass position:\n   $$x_{\\text{cm}} = \\frac{50(0) + 70(24)}{50 + 70} = \\frac{1680}{120} = 14\\text{ m}$$\n4. Since internal pulling cannot move the center of mass, they meet at $x = 14\\text{ m}$ from A's initial position.",
    tip="Distance moved by A is proportional to B's mass: $\\Delta x_A = \\frac{m_B}{m_A + m_B} d = \\frac{70}{120} \\times 24 = 14\\text{ m}$!",
    why_wrong="Option B ($10\\text{ m}$) is the distance moved by Skater B ($24 - 14 = 10\\text{ m}$)."
))

# Q137 - Medium
qs.append(make_lom_q(
    num=137,
    question="A block of mass $M$ with a curved frictionless ramp of height $h$ rests on a frictionless horizontal floor. A small block of mass $m$ is released from rest at the top of the ramp. What is the speed of mass $M$ when mass $m$ leaves the bottom of the ramp horizontally?",
    options={
        "A": "\\sqrt{\\frac{2 m^2 g h}{M(M + m)}}",
        "B": "\\sqrt{\\frac{2 g h M}{m(M + m)}}",
        "C": "\\sqrt{\\frac{2 g h}{M + m}}",
        "D": "\\frac{m}{M}\\sqrt{2gh}"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Applications of conservation of momentum",
    concept="Simultaneous application of conservation of horizontal momentum ($m v = M V$) and conservation of total mechanical energy ($mgh = \\frac{1}{2}m v^2 + \\frac{1}{2}M V^2$).",
    given="Height $h$, masses $m$ and $M$, all surfaces frictionless.",
    formula="m v = M V \\implies v = \\frac{M}{m}V,\\quad m g h = \\frac{1}{2}m v^2 + \\frac{1}{2}M V^2",
    steps="1. Substitute $v = \\frac{M}{m}V$ into the energy conservation equation:\n   $$m g h = \\frac{1}{2}m\\left(\\frac{M^2}{m^2}V^2\\right) + \\frac{1}{2}M V^2 = \\frac{1}{2}M V^2\\left( \\frac{M}{m} + 1 \\right) = \\frac{1}{2}V^2 \\frac{M(M+m)}{m}$$\n2. Rearrange for $V^2$:\n   $$V^2 = \\frac{2 m^2 g h}{M(M + m)}$$\n3. Take the square root: $V = \\sqrt{\\frac{2 m^2 g h}{M(M + m)}}$.",
    tip="Standard NEET advanced formula: $V = \\sqrt{\\frac{2 m^2 g h}{M(M + m)}}$!",
    why_wrong="Option C forgets the mass squaring in the kinetic energy substitution."
))

# Q138 - Hard
qs.append(make_lom_q(
    num=138,
    question="A rocket of initial mass $M_0$ has an exhaust speed $u$ relative to the rocket. What is the velocity of the rocket after its mass has been reduced to $M_0 / e$ due to fuel consumption, in the absence of gravity? (Here $e \\approx 2.718$ is the base of natural logarithms)",
    options={
        "A": "u",
        "B": "2u",
        "C": "0.5u",
        "D": "e u"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Applications of conservation of momentum",
    concept="Tsiolkovsky rocket equation: $v(t) = v_0 + u \\ln\\left(\\frac{M_0}{M(t)}\\right)$.",
    given="$v_0 = 0$, $M(t) = M_0 / e$, exhaust speed $u$.",
    formula="v = u \\ln\\left( \\frac{M_0}{M} \\right)",
    steps="1. Substitute $M = M_0 / e$ into Tsiolkovsky's equation:\n   $$v = u \\ln\\left( \\frac{M_0}{M_0 / e} \\right) = u \\ln(e)$$\n2. Since $\\ln(e) = 1$:\n   $$v = u \\times 1 = u$$.\n3. Therefore, the rocket speed equals the exhaust speed $u$.",
    tip="Tsiolkovsky Rocket Equation: $v = u \\ln(M_0/M)$. When mass reduces by a factor of $e$, speed gained is exactly $u$! When mass reduces to $M_0/e^2$, speed is $2u$.",
    why_wrong="Option B ($2u$) occurs when mass is reduced to $M_0 / e^2$."
))

# Q139 - Hard
qs.append(make_lom_q(
    num=139,
    question="Two particles of masses $m_1 = 2\\text{ kg}$ and $m_2 = 3\\text{ kg}$ are connected by a relaxed spring of spring constant $k = 120\\text{ N/m}$ on a frictionless horizontal plane. Mass $m_1$ is given an impulsive velocity $v_0 = 5\\text{ m/s}$ directly toward $m_2$. What is the maximum compression of the spring during the subsequent motion?",
    options={
        "A": "0.5 m",
        "B": "1.0 m",
        "C": "0.25 m",
        "D": "0.75 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Applications of conservation of momentum",
    concept="At maximum compression, both masses move with the common center of mass velocity $v_{\\text{cm}}$. The kinetic energy in the center of mass frame is fully converted into spring potential energy: $\\frac{1}{2}\\mu v_{\\text{rel}}^2 = \\frac{1}{2}k x_{\\max}^2$, where $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$ is the reduced mass.",
    given="$m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, $k = 120\\text{ N/m}$, $v_{\\text{rel}} = 5\\text{ m/s}$.",
    formula="\\mu = \\frac{m_1 m_2}{m_1 + m_2},\\quad \\frac{1}{2}\\mu v_{\\text{rel}}^2 = \\frac{1}{2}k x_{\\max}^2 \\implies x_{\\max} = v_{\\text{rel}}\\sqrt{\\frac{\\mu}{k}}",
    steps="1. Compute reduced mass:\n   $$\\mu = \\frac{2 \\times 3}{2 + 3} = \\frac{6}{5} = 1.2\\text{ kg}$$\n2. Kinetic energy in COM frame: $K_{\\text{cm, rel}} = \\frac{1}{2}\\mu v_0^2 = \\frac{1}{2}(1.2)(5^2) = 0.6 \\times 25 = 15\\text{ J}$.\n3. Equate to spring potential energy at maximum compression:\n   $$\\frac{1}{2}k x_{\\max}^2 = 15 \\implies \\frac{1}{2}(120)x_{\\max}^2 = 15 \\implies 60 x_{\\max}^2 = 15$$\n4. $x_{\\max}^2 = \\frac{15}{60} = \\frac{1}{4} = 0.25 \\implies x_{\\max} = \\sqrt{0.25} = 0.5\\text{ m}$.",
    tip="Golden Reduced Mass Shortcut: $x_{\\max} = v_{\\text{rel}}\\sqrt{\\frac{\\mu}{k}}$! Solves spring-connected collision problems in 2 lines.",
    why_wrong="Option B ($1.0\\text{ m}$) forgets the square root of $1/4$."
))

# Q140 - Hard
qs.append(make_lom_q(
    num=140,
    question="A flatcar of mass $M = 200\\text{ kg}$ is moving with speed $v_0 = 10\\text{ m/s}$ along a frictionless horizontal track. Two men, each of mass $m = 50\\text{ kg}$, are standing on the flatcar. Both jump off the rear end with a relative speed $u = 2\\text{ m/s}$ with respect to the flatcar. Which jumping strategy imparts a greater final speed to the flatcar: jumping simultaneously or jumping one after another?",
    options={
        "A": "Jumping one after another imparts a greater final speed",
        "B": "Jumping simultaneously imparts a greater final speed",
        "C": "Both strategies impart the exact same final speed",
        "D": "Neither; the flatcar slows down in both cases"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Applications of conservation of momentum",
    concept="When the first person jumps, the remaining mass of the flatcar is $M + m$. When the second person jumps from the already-faster flatcar, their backward push acts on a smaller flatcar mass $M$, imparting an even greater incremental speed.",
    given="$M = 200\\text{ kg}$, $m = 50\\text{ kg}$, $u_{\\text{rel}} = 2\\text{ m/s}$ backwards.",
    formula="\\Delta v_{\\text{one-by-one}} > \\Delta v_{\\text{simultaneous}}",
    steps="1. Simultaneous jump: Both jump from car of mass $M$:\n   $$v_{\\text{sim}} = v_0 + \\frac{2m u}{M + 2m} = 10 + \\frac{2(50)(2)}{200 + 100} = 10 + \\frac{200}{300} = 10 + 0.67 = 10.67\\text{ m/s}$$\n2. Successive jump:\n   First jump from mass $M + m = 250\\text{ kg}$:\n   $$\\Delta v_1 = \\frac{m u}{(M + m) + m} = \\frac{50 \\times 2}{300} = \\frac{100}{300} = 0.33\\text{ m/s}$$\n   Second jump from mass $M = 200\\text{ kg}$:\n   $$\\Delta v_2 = \\frac{m u}{M + m} = \\frac{50 \\times 2}{250} = \\frac{100}{250} = 0.40\\text{ m/s}$$\n   Total gain: $\\Delta v_{\\text{total}} = 0.33 + 0.40 = 0.73\\text{ m/s}$.\n3. Final speed is $10.73\\text{ m/s}$, which is strictly greater than $10.67\\text{ m/s}$.",
    tip="Classic mechanics theorem: Jumping one by one ALWAYS gives the boat or flatcar a greater final speed than jumping simultaneously!",
    why_wrong="Option B is mathematically disproved by comparing the series expansions."
))

# Q141 - Hard
qs.append(make_lom_q(
    num=141,
    question="A chain of mass $m$ and length $L$ is held vertically with its bottom end just touching a table and released from rest. What is the normal force exerted by the table on the chain when a length $x$ of the chain has fallen onto the table?",
    options={
        "A": "3 \\left(\\frac{m}{L}\\right) g x",
        "B": "2 \\left(\\frac{m}{L}\\right) g x",
        "C": "\\left(\\frac{m}{L}\\right) g x",
        "D": "4 \\left(\\frac{m}{L}\\right) g x"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Applications of conservation of momentum",
    concept="The force exerted by the table is the sum of two terms: (1) the static weight of the chain already on the table: $W = \\lambda x g$, and (2) the impulsive force required to destroy the momentum of incoming links: $F_{\\text{impulse}} = v \\frac{dm}{dt} = v (\\lambda v) = \\lambda v^2 = \\lambda (2gx) = 2 \\lambda x g$.",
    given="Linear mass density $\\lambda = m/L$, length $x$ fallen, speed $v = \\sqrt{2gx}$.",
    formula="N = W + v\\frac{dm}{dt} = \\lambda x g + 2 \\lambda x g = 3 \\lambda x g",
    steps="1. Weight of length $x$ resting on table: $W = \\left(\\frac{m}{L}\\right) g x$.\n2. Speed of links striking the table after falling height $x$: $v = \\sqrt{2gx}$.\n3. Rate at which mass lands on table: $\\frac{dm}{dt} = \\lambda v = \\left(\\frac{m}{L}\\right) v$.\n4. Impulsive momentum destruction force: $F_{\\text{imp}} = v \\frac{dm}{dt} = \\lambda v^2 = \\lambda(2gx) = 2\\left(\\frac{m}{L}\\right) g x$.\n5. Total normal force on table:\n   $$N = W + F_{\\text{imp}} = 1\\left(\\frac{m}{L}\\right)gx + 2\\left(\\frac{m}{L}\\right)gx = 3\\left(\\frac{m}{L}\\right)gx$$.\n6. At the moment the entire chain has just landed ($x = L$), the scale reading momentarily spikes to $3mg$!",
    tip="Falling chain on scale: Total force is $3 \\times$ the weight of the fallen portion! ($1 \\times$ weight + $2 \\times$ momentum impact). Very famous NEET problem.",
    why_wrong="Option C only accounts for the static weight, completely ignoring the dynamic impact of falling links."
))

# ==============================================================================
# Topic 10: Equilibrium of a particle (Q142 to Q157, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q142 - Easy
qs.append(make_lom_q(
    num=142,
    question="For a particle to be in static equilibrium under the action of concurrent coplanar forces, which condition is necessary and sufficient?",
    options={
        "A": "\\sum F_x = 0 and \\sum F_y = 0",
        "B": "\\sum F_x = 0 only",
        "C": "\\sum F_y = 0 only",
        "D": "The particle must have a constant non-zero acceleration"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Equilibrium of a particle",
    concept="Translational equilibrium of a particle requires the net external force vector to be identically zero: $\\sum \\vec{F} = 0$, which resolves into independent component equations $\\sum F_x = 0$ and $\\sum F_y = 0$.",
    given="Coplanar forces in 2D.",
    formula="\\sum \\vec{F} = 0 \\iff \\sum F_x = 0 \\quad \\text{and} \\quad \\sum F_y = 0",
    steps="1. A particle has no rotational degrees of freedom, so equilibrium requires only zero net force.\n2. In a 2D Cartesian plane, the vector equation $\\sum \\vec{F} = 0$ splits into two scalar conditions:\n   $$\\sum F_x = 0 \\quad \\text{and} \\quad \\sum F_y = 0$$.\n3. Both conditions must hold simultaneously.",
    tip="For a point particle: Only $\\sum \\vec{F} = 0$ is needed. For an extended rigid body: Both $\\sum \\vec{F} = 0$ (force equilibrium) and $\\sum \\vec{\\tau} = 0$ (torque equilibrium) are required!",
    why_wrong="Options B and C are insufficient because force balance must hold along ALL orthogonal axes."
))

# Q143 - Easy
qs.append(make_lom_q(
    num=143,
    question="Lami's theorem states that if three coplanar concurrent forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ acting on a particle keep it in equilibrium, then:",
    options={
        "A": "\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}",
        "B": "\\frac{F_1}{\\cos\\alpha} = \\frac{F_2}{\\cos\\beta} = \\frac{F_3}{\\cos\\gamma}",
        "C": "F_1 + F_2 = F_3",
        "D": "F_1\\sin\\alpha + F_2\\sin\\beta + F_3\\sin\\gamma = 0"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Equilibrium of a particle",
    concept="Lami's theorem is the sine rule applied to the closed triangle formed by three forces in equilibrium: $\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$, where each angle is the angle between the OTHER two forces.",
    given="Three coplanar forces in equilibrium.",
    formula="\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}",
    steps="1. Because the three forces sum to zero ($\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = 0$), they form the three sides of a closed triangle.\n2. Applying the law of sines to this triangle yields Lami's theorem.\n3. Each force magnitude is proportional to the sine of the angle between the other two forces.",
    tip="Angle $\\alpha$ is opposite to $F_1$ (i.e., angle between $F_2$ and $F_3$). Always double-check angle assignments!",
    why_wrong="Option B uses cosines instead of sines."
))

# Q144 - Easy
qs.append(make_lom_q(
    num=144,
    question="Can three forces of magnitudes $3\\text{ N}$, $5\\text{ N}$, and $9\\text{ N}$ keep a particle in equilibrium?",
    options={
        "A": "No, because the sum of the two smaller forces (3 + 5 = 8 N) is less than the third force (9 N)",
        "B": "Yes, if they act at right angles to each other",
        "C": "Yes, by applying Lami's theorem",
        "D": "Yes, if they act in opposite directions"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Equilibrium of a particle",
    concept="For three coplanar forces to produce equilibrium, they must be able to form the sides of a closed triangle. By the triangle inequality theorem, the sum of any two sides must be strictly greater than or equal to the third side.",
    given="Forces $3\\text{ N}$, $5\\text{ N}$, $9\\text{ N}$.",
    formula="F_1 + F_2 \\ge F_3",
    steps="1. Sum of the two smaller forces: $3 + 5 = 8\\text{ N}$.\n2. The third force is $9\\text{ N}$.\n3. Since $8 < 9$, the maximum possible resultant of the $3\\text{ N}$ and $5\\text{ N}$ forces (when parallel) is only $8\\text{ N}$.\n4. An $8\\text{ N}$ force can never balance a $9\\text{ N}$ force.\n5. Therefore, equilibrium is impossible.",
    tip="Triangle Inequality for Equilibrium: $F_{\\max} \\le F_1 + F_2$. If the largest force exceeds the sum of the other two, equilibrium is IMPOSSIBLE!",
    why_wrong="Options B, C, and D are geometrically impossible."
))

# Q145 - Easy
qs.append(make_lom_q(
    num=145,
    question="Three forces $\\vec{F}_1 = 2\\hat{i} + 3\\hat{j}\\text{ N}$, $\\vec{F}_2 = -5\\hat{i} + 4\\hat{j}\\text{ N}$, and $\\vec{F}_3$ act on a particle in equilibrium. What is $\\vec{F}_3$?",
    options={
        "A": "3\\hat{i} - 7\\hat{j} N",
        "B": "-3\\hat{i} + 7\\hat{j} N",
        "C": "7\\hat{i} - 3\\hat{j} N",
        "D": "-3\\hat{i} - 7\\hat{j} N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Equilibrium of a particle",
    concept="For equilibrium, $\\sum \\vec{F} = 0 \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$.",
    given="$\\vec{F}_1 = 2\\hat{i} + 3\\hat{j}\\text{ N}$, $\\vec{F}_2 = -5\\hat{i} + 4\\hat{j}\\text{ N}$.",
    formula="\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)",
    steps="1. Sum $\\vec{F}_1$ and $\\vec{F}_2$:\n   $$\\vec{F}_1 + \\vec{F}_2 = (2 - 5)\\hat{i} + (3 + 4)\\hat{j} = -3\\hat{i} + 7\\hat{j}\\text{ N}$$\n2. Equilibrant force $\\vec{F}_3$ is the negative of this sum:\n   $$\\vec{F}_3 = -(-3\\hat{i} + 7\\hat{j}) = 3\\hat{i} - 7\\hat{j}\\text{ N}$$.",
    tip="Add the components, then flip both signs!",
    why_wrong="Option B is $\\vec{F}_1 + \\vec{F}_2$, forgetting the negative sign needed for equilibrium."
))

# Q146 - Medium (Verified NEET 2019 PYQ)
qs.append(make_lom_q(
    num=146,
    question="A particle moving with velocity $\\vec{v}$ is acted upon by three concurrent forces represented in magnitude and direction by the sides of a triangle $ABC$ taken in order. The velocity of the particle will:",
    options={
        "A": "Remain constant",
        "B": "Increase",
        "C": "Decrease",
        "D": "Change in direction only"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="When three concurrent vectors are represented by the sides of a triangle taken in the same cyclic order, their vector sum is zero: $\\vec{AB} + \\vec{BC} + \\vec{CA} = 0$. By Newton's first law, zero net force means constant velocity.",
    given="Forces represented by $\\vec{AB}, \\vec{BC}, \\vec{CA}$ taken in order.",
    formula="\\sum \\vec{F} = \\vec{AB} + \\vec{BC} + \\vec{CA} = 0 \\implies \\vec{a} = 0 \\implies \\vec{v} = \\text{constant}",
    steps="1. The three forces form a closed polygon (triangle) in order.\n2. The resultant force is $\\vec{F}_{\\text{net}} = \\vec{AB} + \\vec{BC} + \\vec{CA} = 0$.\n3. Since the net force is zero, acceleration is zero ($\\vec{a} = 0$).\n4. Therefore, the velocity vector $\\vec{v}$ remains completely unchanged in both magnitude and direction.",
    tip="Sides of a closed polygon taken in order ALWAYS sum to zero! Net force = 0 $\\implies$ velocity is CONSTANT.",
    why_wrong="Options B, C, and D all imply a non-zero net force causing acceleration.",
    is_pyq=True,
    pyq_year=2019,
    source="NEET UG 2019"
))

# Q147 - Medium
qs.append(make_lom_q(
    num=147,
    question="A mass of $10\\text{ kg}$ is suspended by a rope of length $2\\text{ m}$ from the ceiling. A horizontal force $F$ is applied at the midpoint of the rope such that the upper half of the rope makes an angle of $45^\\circ$ with the vertical in equilibrium. What is the magnitude of the horizontal force $F$? (Take $g = 9.8\\text{ m/s}^2$)",
    options={
        "A": "98 N",
        "B": "49 N",
        "C": "98\\sqrt{2} N",
        "D": "49\\sqrt{2} N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="At the knot at the midpoint: downward tension $T_2 = mg = 98\\text{ N}$, horizontal force $F$, and upward-slanting tension $T_1$ at $45^\\circ$ to the vertical. Equate horizontal and vertical forces.",
    given="$m = 10\\text{ kg}$, $g = 9.8\\text{ m/s}^2$, $\\theta = 45^\\circ$.",
    formula="T_1\\cos 45^\\circ = mg,\\quad T_1\\sin 45^\\circ = F \\implies F = mg\\tan 45^\\circ",
    steps="1. Vertical equilibrium at the junction: $T_1\\cos 45^\\circ = mg = 10 \\times 9.8 = 98\\text{ N}$.\n2. Horizontal equilibrium at the junction: $T_1\\sin 45^\\circ = F$.\n3. Divide the horizontal equation by the vertical equation:\n   $$\\frac{T_1\\sin 45^\\circ}{T_1\\cos 45^\\circ} = \\frac{F}{mg} \\implies \\tan 45^\\circ = \\frac{F}{mg}$$\n4. Since $\\tan 45^\\circ = 1$, we get $F = mg = 98\\text{ N}$.",
    tip="For $\\theta = 45^\\circ$, $\\tan 45^\\circ = 1$, so $F = mg$ directly! If $\\theta = 30^\\circ$, $F = mg\\tan 30^\\circ = mg/\\sqrt{3}$.",
    why_wrong="Option B ($49\\text{ N}$) erroneously halves the force thinking the rope is at its midpoint."
))

# Q148 - Medium
qs.append(make_lom_q(
    num=148,
    question="In the previous problem, what is the tension $T_1$ in the upper half of the rope?",
    options={
        "A": "98\\sqrt{2} N (approx 138.6 N)",
        "B": "98 N",
        "C": "49\\sqrt{2} N",
        "D": "196 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="From vertical equilibrium, $T_1\\cos 45^\\circ = mg \\implies T_1 = \\frac{mg}{\\cos 45^\\circ} = mg\\sqrt{2}$.",
    given="$mg = 98\\text{ N}$, $\\theta = 45^\\circ$.",
    formula="T_1 = \\frac{mg}{\\cos 45^\\circ} = 98\\sqrt{2}\\text{ N}",
    steps="1. From $T_1\\cos 45^\\circ = 98\\text{ N}$:\n2. $T_1 = \\frac{98}{\\cos 45^\\circ} = \\frac{98}{1/\\sqrt{2}} = 98\\sqrt{2}\\text{ N}$.\n3. Numerically: $98 \\times 1.414 \\approx 138.6\\text{ N}$.",
    tip="Tension in the angled segment is the hypotenuse: $T_1 = \\sqrt{F^2 + (mg)^2} = \\sqrt{98^2 + 98^2} = 98\\sqrt{2}\\text{ N}$!",
    why_wrong="Option B ($98\\text{ N}$) is the tension in the LOWER vertical half of the rope."
))

# Q149 - Medium
qs.append(make_lom_q(
    num=149,
    question="A body of mass $m$ is suspended by two light strings of equal length attached to two hooks on a ceiling separated by distance $d$. If each string makes an angle of $30^\\circ$ with the ceiling, the tension $T$ in each string is:",
    options={
        "A": "mg",
        "B": "mg / 2",
        "C": "2 mg",
        "D": "mg / \\sqrt{3}"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="Each string makes an angle of $30^\\circ$ with the horizontal ceiling, so the vertical angle is $60^\\circ$ or the vertical component of tension is $T\\sin 30^\\circ$. By symmetry, both strings have equal tension.",
    given="Two strings, angle with horizontal ceiling is $30^\\circ$.",
    formula="2 T\\sin 30^\\circ = mg \\implies 2 T (1/2) = mg \\implies T = mg",
    steps="1. Resolve forces vertically: Both strings pull upward with $T\\sin 30^\\circ$.\n2. $2 T \\sin 30^\\circ = mg$.\n3. Since $\\sin 30^\\circ = 1/2$, we have $2 T (1/2) = mg \\implies T = mg$.\n4. Therefore, the tension in each string equals $mg$.",
    tip="Angle with CEILING is $30^\\circ$, so vertical component is $T\\sin 30^\\circ = T/2$. Two strings give $T/2 + T/2 = T = mg$!",
    why_wrong="Option B ($mg/2$) forgets that two strings together must balance $mg$."
))

# Q150 - Medium
qs.append(make_lom_q(
    num=150,
    question="In the previous symmetric two-string problem, if the angle of each string with the horizontal ceiling approaches $0^\\circ$ (strings pulled nearly horizontal), the tension in each string approaches:",
    options={
        "A": "Infinity",
        "B": "Zero",
        "C": "mg / 2",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="From $2 T\\sin\\theta = mg$, tension is $T = \\frac{mg}{2\\sin\\theta}$. As $\\theta \\to 0^\\circ$, $\\sin\\theta \\to 0$, causing $T \\to \\infty$.",
    given="$T = \\frac{mg}{2\\sin\\theta}$, as $\\theta \\to 0$.",
    formula="\\lim_{\\theta \\to 0} \\frac{mg}{2\\sin\\theta} = \\infty",
    steps="1. To support the weight $mg$, there MUST be a non-zero upward vertical force component: $2T\\sin\\theta = mg$.\n2. If the string is perfectly horizontal ($\theta = 0$), $\sin 0^\circ = 0$, so no vertical force component can exist.\n3. Therefore, as $\\theta \\to 0$, tension $T \\to \\infty$.\n4. It is physically impossible to make a sagging heavy rope or wire completely horizontal!",
    tip="A horizontal cable with any hanging weight (even its own weight!) can NEVER be pulled completely straight without infinite tension breaking it!",
    why_wrong="Option B: Tension increases dramatically, it does not decrease."
))

# Q151 - Medium
qs.append(make_lom_q(
    num=151,
    question="Three forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ keep a particle in equilibrium. If the angle between $\\vec{F}_1$ and $\\vec{F}_2$ is $90^\\circ$, and the angle between $\\vec{F}_2$ and $\\vec{F}_3$ is $120^\\circ$, what is the ratio of their magnitudes $F_1 : F_2 : F_3$?",
    options={
        "A": "\\sqrt{3} : 1 : 2",
        "B": "1 : \\sqrt{3} : 2",
        "C": "1 : 1 : \\sqrt{2}",
        "D": "3 : 4 : 5"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="Use Lami's theorem. Let the three angles between the pairs of forces be $\\theta_{12} = 90^\\circ$, $\\theta_{23} = 120^\\circ$, and $\\theta_{31} = 360^\\circ - (90^\\circ + 120^\\circ) = 150^\\circ$.",
    given="$\\theta_{12} = 90^\\circ$, $\\theta_{23} = 120^\\circ$, $\\theta_{31} = 150^\\circ$.",
    formula="\\frac{F_1}{\\sin\\theta_{23}} = \\frac{F_2}{\\sin\\theta_{31}} = \\frac{F_3}{\\sin\\theta_{12}}",
    steps="1. Angle opposite to $F_1$ is $\\theta_{23} = 120^\\circ$.\n2. Angle opposite to $F_2$ is $\\theta_{31} = 150^\\circ$.\n3. Angle opposite to $F_3$ is $\\theta_{12} = 90^\\circ$.\n4. Apply Lami's theorem:\n   $$\\frac{F_1}{\\sin 120^\\circ} = \\frac{F_2}{\\sin 150^\\circ} = \\frac{F_3}{\\sin 90^\\circ}$$\n5. Substitute values:\n   $$\\sin 120^\\circ = \\frac{\\sqrt{3}}{2},\\quad \\sin 150^\\circ = \\frac{1}{2},\\quad \\sin 90^\\circ = 1$$\n6. Multiply across by 2: $F_1 : F_2 : F_3 = \\sqrt{3} : 1 : 2$.",
    tip="Lami's theorem application: $\\sin 120^\\circ = \\sqrt{3}/2$, $\\sin 150^\\circ = 1/2$, $\\sin 90^\\circ = 1 \\implies \\sqrt{3} : 1 : 2$!",
    why_wrong="Option B inverts $F_1$ and $F_2$."
))

# Q152 - Medium
qs.append(make_lom_q(
    num=152,
    question="A smooth sphere of mass $m$ and radius $R$ is held at rest between a vertical wall and an inclined plane of inclination $60^\\circ$ with the horizontal. What is the normal reaction force $N_1$ exerted by the vertical wall on the sphere?",
    options={
        "A": "mg / \\sqrt{3}",
        "B": "\\sqrt{3} mg",
        "C": "mg / 2",
        "D": "2 mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="Three forces act on the sphere: (1) downward gravity $mg$, (2) horizontal normal force from vertical wall $N_1$, and (3) normal force from incline $N_2$ perpendicular to incline ($30^\\circ$ to vertical or $60^\\circ$ to horizontal).",
    given="Incline angle $60^\\circ$, vertical wall.",
    formula="N_2\\cos 60^\\circ = N_1,\\quad N_2\\sin 60^\\circ = mg \\implies N_1 = mg\\cot 60^\\circ = \\frac{mg}{\\sqrt{3}}",
    steps="1. Normal force $N_2$ from the $60^\\circ$ incline is directed at $30^\\circ$ below horizontal or $60^\\circ$ above horizontal: $N_{2y} = N_2\\sin 60^\\circ$, $N_{2x} = N_2\\cos 60^\\circ$.\n2. Vertical equilibrium: $N_2\\sin 60^\\circ = mg \\implies N_2 = \\frac{mg}{\\sin 60^\\circ} = \\frac{2mg}{\\sqrt{3}}$.\n3. Horizontal equilibrium: $N_1 = N_2\\cos 60^\\circ$.\n4. Substitute $N_2$: $N_1 = \\left(\\frac{2mg}{\\sqrt{3}}\\right) \\left(\\frac{1}{2}\\right) = \\frac{mg}{\\sqrt{3}}$.",
    tip="FBD of trapped sphere: $N_{\\text{wall}} = mg\\cot\\theta = mg\\cot 60^\\circ = mg/\\sqrt{3}$!",
    why_wrong="Option B ($mg\\sqrt{3}$) uses $\\tan 60^\\circ$ instead of $\\cot 60^\\circ$."
))

# Q153 - Medium
qs.append(make_lom_q(
    num=153,
    question="In the previous trapped sphere problem, what is the normal reaction force $N_2$ exerted by the inclined plane on the sphere?",
    options={
        "A": "2 mg / \\sqrt{3}",
        "B": "mg / \\sqrt{3}",
        "C": "\\sqrt{3} mg",
        "D": "mg"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equilibrium of a particle",
    concept="From vertical equilibrium, the vertical component of the incline's normal reaction balances the sphere's weight: $N_2\\sin 60^\\circ = mg$.",
    given="Incline angle $60^\\circ$, sphere mass $m$.",
    formula="N_2\\sin 60^\\circ = mg \\implies N_2 = \\frac{mg}{\\sin 60^\\circ} = \\frac{2mg}{\\sqrt{3}}",
    steps="1. Incline normal force makes an angle of $60^\\circ$ with the horizontal.\n2. Vertical component is $N_2\\sin 60^\\circ$.\n3. Balancing weight: $N_2 \\left(\\frac{\\sqrt{3}}{2}\\right) = mg$.\n4. Therefore, $N_2 = \\frac{2mg}{\\sqrt{3}}$.",
    tip="Notice $N_2 = \\sqrt{N_1^2 + (mg)^2} = \\sqrt{(mg/\\sqrt{3})^2 + (mg)^2} = mg\\sqrt{1/3 + 1} = \\frac{2mg}{\\sqrt{3}}$!",
    why_wrong="Option B is the force from the vertical wall ($N_1$)."
))

# Q154 - Hard
qs.append(make_lom_q(
    num=154,
    question="A block of mass $m$ is held in equilibrium on a smooth inclined plane of angle $\\theta$ by a horizontal force $F$. What is the magnitude of the horizontal force $F$ and the normal force $N$?",
    options={
        "A": "F = mg\\tan\\theta and N = mg / \\cos\\theta",
        "B": "F = mg\\sin\\theta and N = mg\\cos\\theta",
        "C": "F = mg / \\tan\\theta and N = mg\\sin\\theta",
        "D": "F = mg\\tan\\theta and N = mg\\cos\\theta"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equilibrium of a particle",
    concept="Resolve forces parallel and perpendicular to the incline. Parallel: $F\\cos\\theta$ pushes up the incline, balancing the downhill component $mg\\sin\\theta$. Perpendicular: $N = mg\\cos\\theta + F\\sin\\theta$.",
    given="Horizontal force $F$, incline angle $\\theta$, smooth surface.",
    formula="F\\cos\\theta = mg\\sin\\theta \\implies F = mg\\tan\\theta;\\quad N = mg\\cos\\theta + F\\sin\\theta = \\frac{mg}{\\cos\\theta}",
    steps="1. Along the incline: $F\\cos\\theta - mg\\sin\\theta = 0 \\implies F = mg\\tan\\theta$.\n2. Perpendicular to incline: $N - mg\\cos\\theta - F\\sin\\theta = 0$.\n3. Substitute $F = mg\\tan\\theta$:\n   $$N = mg\\cos\\theta + (mg\\tan\\theta)\\sin\\theta = mg\\left(\\cos\\theta + \\frac{\\sin^2\\theta}{\\cos\\theta}\\right) = mg\\left(\\frac{\\cos^2\\theta + \\sin^2\\theta}{\\cos\\theta}\\right) = \\frac{mg}{\\cos\\theta}$$.\n4. Both values match option A.",
    tip="Horizontal force on incline: $F = mg\\tan\\theta$ and $N = mg/\\cos\\theta = mg\\sec\\theta$! Very common in NEET dynamics and pseudo-force problems.",
    why_wrong="Option B assumes the pushing force acts parallel to the incline, but here $F$ is strictly horizontal."
))

# Q155 - Hard
qs.append(make_lom_q(
    num=155,
    question="A particle of mass $m$ is in equilibrium under the action of three coplanar forces $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. If $\\vec{F}_1$ is directed along the positive x-axis and $\\vec{F}_2$ is directed along the positive y-axis, what must be the angle $\\theta$ of $\\vec{F}_3$ measured counterclockwise from the positive x-axis?",
    options={
        "A": "180^\\circ + \\tan^{-1}(F_2 / F_1)",
        "B": "\\tan^{-1}(F_2 / F_1)",
        "C": "90^\\circ + \\tan^{-1}(F_2 / F_1)",
        "D": "360^\\circ - \\tan^{-1}(F_2 / F_1)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equilibrium of a particle",
    concept="For equilibrium, $\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) = -F_1\\hat{i} - F_2\\hat{j}$. Both components of $\\vec{F}_3$ are negative, placing it in the third quadrant (between $180^\\circ$ and $270^\\circ$).",
    given="$\\vec{F}_1 = F_1\\hat{i}$, $\\vec{F}_2 = F_2\\hat{j}$, $\\vec{F}_3 = -F_1\\hat{i} - F_2\\hat{j}$.",
    formula="\\theta_3 = 180^\\circ + \\arctan\\left(\\frac{-F_2}{-F_1}\\right) = 180^\\circ + \\tan^{-1}\\left(\\frac{F_2}{F_1}\\right)",
    steps="1. $\\vec{F}_1 + \\vec{F}_2 = F_1\\hat{i} + F_2\\hat{j}$ lies in Quadrant I at angle $\\phi = \\tan^{-1}(F_2/F_1)$.\n2. The equilibrant $\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$ points in the diametrically opposite direction (Quadrant III).\n3. The direction angle is $\\theta = 180^\\circ + \\phi = 180^\\circ + \\tan^{-1}(F_2/F_1)$.",
    tip="The equilibrant points exactly $180^\\circ$ opposite to the resultant!",
    why_wrong="Option B is the angle of the RESULTANT in Quadrant I, not the equilibrant."
))

# Q156 - Hard
qs.append(make_lom_q(
    num=156,
    question="A heavy uniform rod of mass $M$ and length $L$ rests with its smooth ends on two smooth planes inclined at $30^\\circ$ and $60^\\circ$ to the horizontal. For the rod to be in equilibrium, what angle $\\alpha$ does the rod make with the horizontal?",
    options={
        "A": "30^\\circ",
        "B": "15^\\circ",
        "C": "45^\\circ",
        "D": "0^\\circ"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equilibrium of a particle",
    concept="Use Cotangent Theorem for equilibrium of a rod: If planes have inclinations $\\theta_1$ and $\\theta_2$, the rod angle $\\alpha$ satisfies $\\tan\\alpha = \\frac{1}{2}(\\cot\\theta_1 - \\cot\\theta_2)$.",
    given="$\\theta_1 = 30^\\circ$, $\\theta_2 = 60^\\circ$, smooth surfaces.",
    formula="\\tan\\alpha = \\frac{1}{2}(\\cot 30^\\circ - \\cot 60^\\circ) = \\frac{1}{2}\\left(\\sqrt{3} - \\frac{1}{\\sqrt{3}}\\right) = \\frac{1}{2}\\left(\\frac{2}{\\sqrt{3}}\\right) = \\frac{1}{\\sqrt{3}}",
    steps="1. Substitute values: $\\cot 30^\\circ = \\sqrt{3}$ and $\\cot 60^\\circ = 1/\\sqrt{3}$.\n2. Difference: $\\sqrt{3} - \\frac{1}{\\sqrt{3}} = \\frac{3 - 1}{\\sqrt{3}} = \\frac{2}{\\sqrt{3}}$.\n3. Multiply by $1/2$: $\\tan\\alpha = \\frac{1}{2} \\times \\frac{2}{\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$.\n4. Therefore, $\\alpha = 30^\\circ$.",
    tip="Cotangent theorem for rod resting on two smooth inclines: $\\tan\\alpha = \\frac{1}{2}(\\cot\\theta_1 - \\cot\\theta_2)$! For $30^\\circ$ and $60^\\circ$, $\\alpha = 30^\\circ$.",
    why_wrong="Option C ($45^\\circ$) is the average of the two plane angles, which is incorrect."
))

# Q157 - Hard
qs.append(make_lom_q(
    num=157,
    question="Four coplanar concurrent forces of magnitudes $10\\text{ N}, 20\\text{ N}, 30\\text{ N}$, and $40\\text{ N}$ act on a particle along the directions East, North, West, and South respectively. What is the magnitude and direction of the single force required to achieve equilibrium?",
    options={
        "A": "20\\sqrt{2} N (approx 28.28 N) directed along North-East",
        "B": "20\\sqrt{2} N directed along South-West",
        "C": "20 N directed along North-East",
        "D": "40 N directed along South-East"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equilibrium of a particle",
    concept="Sum components: $F_x = 10 - 30 = -20\\text{ N}$ (West), $F_y = 20 - 40 = -20\\text{ N}$ (South). The equilibrant force must cancel this resultant, requiring $+20\\text{ N}$ (East) and $+20\\text{ N}$ (North), which is North-East.",
    given="$F_E = 10\\text{ N}$, $F_N = 20\\text{ N}$, $F_W = 30\\text{ N}$, $F_S = 40\\text{ N}$.",
    formula="\\vec{R} = (10 - 30)\\hat{i} + (20 - 40)\\hat{j} = -20\\hat{i} - 20\\hat{j}\\text{ N},\\quad \\vec{F}_{\\text{equil}} = -\\vec{R} = 20\\hat{i} + 20\\hat{j}\\text{ N}",
    steps="1. Net x-component of applied forces: $F_x = 10 - 30 = -20\\text{ N}$.\n2. Net y-component of applied forces: $F_y = 20 - 40 = -20\\text{ N}$.\n3. The resultant of the four forces is $\\vec{R} = -20\\hat{i} - 20\\hat{j}\\text{ N}$ (South-West).\n4. The balancing equilibrant force is $\\vec{F}_{\\text{eq}} = -\\vec{R} = +20\\hat{i} + 20\\hat{j}\\text{ N}$.\n5. Magnitude: $|\\vec{F}_{\\text{eq}}| = \\sqrt{20^2 + 20^2} = 20\\sqrt{2}\\text{ N} \\approx 28.28\\text{ N}$.\n6. Direction: $+20\\hat{i}$ (East) and $+20\\hat{j}$ (North) corresponds to North-East.",
    tip="Resultant is South-West ($-20\\hat{i} - 20\\hat{j}$), so Equilibrant is North-East ($+20\\hat{i} + 20\\hat{j}$)! Always check that equilibrant is opposite to resultant.",
    why_wrong="Option B is the RESULTANT, not the equilibrant."
))

print("Topics 9 & 10 done: 32 questions.")
