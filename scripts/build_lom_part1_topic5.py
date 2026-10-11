import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 5: Newton's second law of motion (Q064 to Q079, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q064 - Easy
qs.append(make_lom_q(
    num=64,
    question="Newton's second law of motion states that the net external force on a body is directly proportional to:",
    options={
        "A": "The rate of change of linear momentum with time",
        "B": "The velocity of the body",
        "C": "The total energy of the body",
        "D": "The displacement of the body"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's second law of motion",
    concept="Newton's second law formally states: $\\vec{F} = \\frac{d\\vec{p}}{dt}$. Force is the time derivative of linear momentum.",
    given="Newton's Second Law statement.",
    formula="\\vec{F} = \\frac{d\\vec{p}}{dt} = \\frac{d(m\\vec{v})}{dt}",
    steps="1. By definition, force causes momentum to change over time.\n2. The mathematical formulation is $\\vec{F} \\propto \\frac{d\\vec{p}}{dt}$.\n3. In the SI system, the constant of proportionality is defined as 1, yielding $\\vec{F} = \\frac{d\\vec{p}}{dt}$.",
    tip="When mass is constant, $\vec{F} = m\frac{d\vec{v}}{dt} = m\vec{a}$. But the general and more fundamental form is always $\vec{F} = \frac{d\vec{p}}{dt}$!",
    why_wrong="Option B: Aristotle believed force was proportional to velocity, which was disproved by Galileo and Newton."
))

# Q065 - Easy
qs.append(make_lom_q(
    num=65,
    question="A constant net force of $20\\text{ N}$ acts on an object of mass $4\\text{ kg}$ initially at rest. What is the acceleration produced in the object?",
    options={
        "A": "5 m/s^2",
        "B": "80 m/s^2",
        "C": "0.2 m/s^2",
        "D": "24 m/s^2"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's second law of motion",
    concept="When mass is constant, Newton's second law simplifies to $F = ma$, giving acceleration $a = F/m$.",
    given="$F = 20\\text{ N}$, $m = 4\\text{ kg}$.",
    formula="a = \\frac{F}{m}",
    steps="1. Substitute values: $a = \\frac{20\\text{ N}}{4\\text{ kg}} = 5\\text{ m/s}^2$.\n2. The acceleration is $5\\text{ m/s}^2$ in the direction of the force.",
    tip="Always double check that units are in SI: N, kg, m/s²!",
    why_wrong="Option B ($80\\text{ m/s}^2$) multiplies force by mass instead of dividing."
))

# Q066 - Easy
qs.append(make_lom_q(
    num=66,
    question="If the net force acting on a body of constant mass is doubled, the acceleration of the body will:",
    options={
        "A": "Be doubled",
        "B": "Be halved",
        "C": "Remain unchanged",
        "D": "Quadruple"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's second law of motion",
    concept="For a body with constant mass $m$, acceleration is directly proportional to the applied net force: $a \\propto F$.",
    given="Force is doubled ($F' = 2F$), mass $m$ is constant.",
    formula="a' = \\frac{F'}{m} = \\frac{2F}{m} = 2a",
    steps="1. Initial acceleration: $a = F/m$.\n2. New acceleration with doubled force: $a' = (2F)/m = 2(F/m) = 2a$.\n3. Thus, acceleration doubles.",
    tip="Linear relation: $a \\propto F$ (for constant $m$) and $a \\propto 1/m$ (for constant $F$).",
    why_wrong="Option D would apply if acceleration were proportional to $F^2$, which it is not."
))

# Q067 - Easy
qs.append(make_lom_q(
    num=67,
    question="A body of mass $m$ experiences a constant net force $F$. If its initial speed is zero, the distance traveled by the body in time $t$ is:",
    options={
        "A": "\\frac{F t^2}{2m}",
        "B": "\\frac{F t}{m}",
        "C": "\\frac{F^2 t^2}{2m}",
        "D": "\\frac{F t^2}{m}"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Newton's second law of motion",
    concept="A constant force produces a uniform acceleration $a = F/m$. The kinematic displacement from rest is $s = \\frac{1}{2}at^2$.",
    given="$u = 0$, $a = F/m$, time $t$.",
    formula="s = ut + \\frac{1}{2}at^2 = 0 + \\frac{1}{2}\\left(\\frac{F}{m}\\right)t^2 = \\frac{F t^2}{2m}",
    steps="1. Compute acceleration from Newton's second law: $a = F/m$.\n2. Use the second kinematic equation of motion: $s = ut + \\frac{1}{2}at^2$.\n3. Since $u = 0$, $s = \\frac{1}{2}(F/m)t^2 = \\frac{F t^2}{2m}$.",
    tip="Combines Newton's second law ($a = F/m$) with kinematics ($s = \\frac{1}{2}at^2$)!",
    why_wrong="Option D forgets the factor of $1/2$ from integration of constant acceleration."
))

# Q068 - Medium
qs.append(make_lom_q(
    num=68,
    question="The position of a particle of mass $m = 2\\text{ kg}$ as a function of time is given by $x(t) = 5t^2 - 4t + 3\\text{ m}$. What is the net force acting on the particle?",
    options={
        "A": "20 N",
        "B": "10 N",
        "C": "40 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="Acceleration is the second time derivative of position: $a = \\frac{d^2x}{dt^2}$. The net force is $F = ma$.",
    given="$m = 2\\text{ kg}$, $x(t) = 5t^2 - 4t + 3$.",
    formula="v(t) = \\frac{dx}{dt},\\quad a(t) = \\frac{d^2x}{dt^2},\\quad F = ma",
    steps="1. Differentiate once to get velocity: $v(t) = \\frac{dx}{dt} = 10t - 4\\text{ m/s}$.\n2. Differentiate a second time to get acceleration: $a(t) = \\frac{dv}{dt} = 10\\text{ m/s}^2$.\n3. Compute force: $F = ma = 2 \\times 10 = 20\\text{ N}$.",
    tip="If $x(t) \\propto t^2$, acceleration is CONSTANT, so force is constant ($F = m \\times 2c_2$)!",
    why_wrong="Option B is the acceleration ($10\\text{ m/s}^2$), not the force."
))

# Q069 - Medium
qs.append(make_lom_q(
    num=69,
    question="A body of mass $3\\text{ kg}$ is moving with an initial velocity $\\vec{u} = (6\\hat{i} - 2\\hat{j})\\text{ m/s}$. A constant force $\\vec{F} = (9\\hat{i} + 12\\hat{j})\\text{ N}$ acts on it for $2\\text{ s}$. What is its velocity at $t = 2\\text{ s}$?",
    options={
        "A": "12\\hat{i} + 6\\hat{j} m/s",
        "B": "15\\hat{i} + 10\\hat{j} m/s",
        "C": "9\\hat{i} + 4\\hat{j} m/s",
        "D": "6\\hat{i} + 8\\hat{j} m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="Vector kinematics with Newton's second law: $\\vec{a} = \\vec{F}/m$, and $\\vec{v} = \\vec{u} + \\vec{a}t$.",
    given="$m = 3\\text{ kg}$, $\\vec{u} = 6\\hat{i} - 2\\hat{j}\\text{ m/s}$, $\\vec{F} = 9\\hat{i} + 12\\hat{j}\\text{ N}$, $t = 2\\text{ s}$.",
    formula="\\vec{a} = \\frac{\\vec{F}}{m},\\quad \\vec{v} = \\vec{u} + \\vec{a}t",
    steps="1. Find acceleration vector:\n   $$\\vec{a} = \\frac{9\\hat{i} + 12\\hat{j}}{3} = 3\\hat{i} + 4\\hat{j}\\text{ m/s}^2$$\n2. Find final velocity vector at $t = 2\\text{ s}$:\n   $$\\vec{v} = (6\\hat{i} - 2\\hat{j}) + (3\\hat{i} + 4\\hat{j})(2) = (6\\hat{i} - 2\\hat{j}) + (6\\hat{i} + 8\\hat{j}) = 12\\hat{i} + 6\\hat{j}\\text{ m/s}$$.",
    tip="Handle components separately: $v_x = u_x + a_x t$ and $v_y = u_y + a_y t$!",
    why_wrong="Option D is just $\\vec{a}t = 6\\hat{i} + 8\\hat{j}$, forgetting initial velocity $\\vec{u}$."
))

# Q070 - Medium
qs.append(make_lom_q(
    num=70,
    question="A force of $100\\text{ N}$ acts on a body of mass $20\\text{ kg}$ for $10\\text{ s}$, initially at rest. The body then moves under no force for the next $20\\text{ s}$. The total distance covered by the body in the entire $30\\text{ s}$ is:",
    options={
        "A": "1250 m",
        "B": "1000 m",
        "C": "1500 m",
        "D": "750 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="Two-stage motion: Phase 1 has constant acceleration $a = F/m$ for time $t_1$. Phase 2 has zero force, meaning constant velocity $v_1$ for time $t_2$.",
    given="$F = 100\\text{ N}$, $m = 20\\text{ kg}$, $t_1 = 10\\text{ s}$, $t_2 = 20\\text{ s}$, $u = 0$.",
    formula="a = \\frac{F}{m},\\quad s_1 = \\frac{1}{2}at_1^2,\\quad v_1 = at_1,\\quad s_2 = v_1 t_2,\\quad s_{\\text{total}} = s_1 + s_2",
    steps="1. Acceleration in phase 1: $a = 100/20 = 5\\text{ m/s}^2$.\n2. Distance in phase 1: $s_1 = \\frac{1}{2}(5)(10^2) = \\frac{1}{2}(5)(100) = 250\\text{ m}$.\n3. Velocity at end of phase 1: $v_1 = a t_1 = 5 \\times 10 = 50\\text{ m/s}$.\n4. Distance in phase 2 (constant speed): $s_2 = v_1 t_2 = 50 \\times 20 = 1000\\text{ m}$.\n5. Total distance: $s_{\\text{total}} = s_1 + s_2 = 250 + 1000 = 1250\\text{ m}$.",
    tip="Always calculate both phases: Accelerated phase ($s_1 = \\frac{1}{2}at_1^2$) + Uniform motion phase ($s_2 = v_1 t_2$)!",
    why_wrong="Option B ($1000\\text{ m}$) only includes phase 2, forgetting phase 1 ($250\\text{ m}$)."
))

# Q071 - Medium
qs.append(make_lom_q(
    num=71,
    question="A constant retarding force of $50\\text{ N}$ is applied to a body of mass $10\\text{ kg}$ moving initially with a speed of $25\\text{ m/s}$. How long does it take for the body to come to a complete stop?",
    options={
        "A": "5 s",
        "B": "10 s",
        "C": "2.5 s",
        "D": "12.5 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="Retardation is $a = F/m$. Time to stop from initial speed $u$ is $t = u/a$.",
    given="$m = 10\\text{ kg}$, $u = 25\\text{ m/s}$, $F_{\\text{retard}} = 50\\text{ N}$, $v = 0$.",
    formula="a = \\frac{F}{m},\\quad v = u - at = 0 \\implies t = \\frac{u}{a}",
    steps="1. Retardation: $a = \\frac{50\\text{ N}}{10\\text{ kg}} = 5\\text{ m/s}^2$.\n2. Time to come to rest: $t = \\frac{u}{a} = \\frac{25\\text{ m/s}}{5\\text{ m/s}^2} = 5\\text{ s}$.",
    tip="Impulse shortcut: $F \\Delta t = m u \\implies \\Delta t = \\frac{m u}{F} = \\frac{10 \\times 25}{50} = 5\\text{ s}$!",
    why_wrong="Option C ($2.5\\text{ s}$) divides 25 by 10 instead of 5."
))

# Q072 - Medium
qs.append(make_lom_q(
    num=72,
    question="The momentum of a particle moving in a straight line varies with time as $p(t) = a + b t + c t^2$, where $a, b, c$ are positive constants. The force acting on the particle is:",
    options={
        "A": "Directly proportional to time t (linear function of time)",
        "B": "Constant and independent of time",
        "C": "Inversely proportional to time t",
        "D": "Zero at all times"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="By Newton's second law, force is the first time derivative of linear momentum: $F = \\frac{dp}{dt}$.",
    given="$p(t) = a + bt + ct^2$.",
    formula="F(t) = \\frac{dp}{dt} = \\frac{d}{dt}(a + bt + ct^2) = b + 2ct",
    steps="1. Differentiate momentum with respect to time: $F(t) = \\frac{d}{dt}(a + bt + ct^2) = 0 + b + 2ct = b + 2ct$.\n2. The expression $F(t) = b + 2ct$ is a linear function of time $t$.\n3. Hence, the force increases linearly with time.",
    tip="Remember: $F = dp/dt$. If $p(t)$ is quadratic in $t$, then $F(t)$ is linear in $t$!",
    why_wrong="Option B: Force would be constant only if $p(t)$ were linear ($c = 0$)."
))

# Q073 - Medium
qs.append(make_lom_q(
    num=73,
    question="A vehicle of mass $1000\\text{ kg}$ is moving at a speed of $72\\text{ km/h}$. What braking force is required to stop it in a distance of $40\\text{ m}$?",
    options={
        "A": "5000 N",
        "B": "2500 N",
        "C": "10000 N",
        "D": "7200 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="Convert speed to SI units: $72\\text{ km/h} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$. Apply work-energy theorem or kinematics: $F d = \\frac{1}{2}mv^2$.",
    given="$m = 1000\\text{ kg}$, $u = 72\\text{ km/h} = 20\\text{ m/s}$, $v = 0$, $d = 40\\text{ m}$.",
    formula="v^2 = u^2 - 2ad \\implies a = \\frac{u^2}{2d},\\quad F = ma = \\frac{m u^2}{2d}",
    steps="1. Convert velocity: $u = 72 \\times \\frac{5}{18} = 20\\text{ m/s}$.\n2. Work-energy theorem: Work done by braking force = Initial kinetic energy.\n   $$F \\times d = \\frac{1}{2}m u^2$$\n   $$F \\times 40 = \\frac{1}{2} \\times 1000 \\times (20)^2 = 500 \\times 400 = 200000\\text{ J}$$\n3. Braking force: $F = \\frac{200000}{40} = 5000\\text{ N}$.",
    tip="Always convert km/h to m/s by multiplying by $5/18$ before plugging into kinematic equations!",
    why_wrong="Option B ($2500\\text{ N}$) forgets to square velocity or halves it incorrectly."
))

# Q074 - Medium
qs.append(make_lom_q(
    num=74,
    question="A rocket of initial mass $m_0 = 600\\text{ kg}$ ejects exhaust gases at a constant speed $u = 1000\\text{ m/s}$ relative to the rocket at a rate of $r = 10\\text{ kg/s}$. Neglecting gravity, what is the initial acceleration of the rocket?",
    options={
        "A": "16.67 m/s^2",
        "B": "10.00 m/s^2",
        "C": "6.00 m/s^2",
        "D": "25.00 m/s^2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="For a variable-mass system like a rocket, the thrust force is $F_{\\text{thrust}} = u_{\\text{rel}} \\left(-\\frac{dm}{dt}\\right)$. The acceleration is $a = F_{\\text{thrust}}/m$.",
    given="$m_0 = 600\\text{ kg}$, $u_{\\text{rel}} = 1000\\text{ m/s}$, rate $r = \\frac{dm}{dt} = 10\\text{ kg/s}$.",
    formula="F_{\\text{thrust}} = u_{\\text{rel}} \\frac{dm}{dt},\\quad a = \\frac{F_{\\text{thrust}}}{m_0}",
    steps="1. Thrust generated by exhaust: $F = u_{\\text{rel}} r = 1000 \\times 10 = 10000\\text{ N}$.\n2. Initial acceleration: $a = \\frac{F}{m_0} = \\frac{10000\\text{ N}}{600\\text{ kg}} = \\frac{100}{6} = 16.67\\text{ m/s}^2$.",
    tip="Rocket thrust $F = u_{\\text{rel}} (dm/dt)$. Acceleration increases with time as the fuel is consumed and mass $m(t)$ decreases!",
    why_wrong="Option B is the mass ejection rate $r = 10$."
))

# Q075 - Medium
qs.append(make_lom_q(
    num=75,
    question="A rope of length $L = 5\\text{ m}$ and mass $M = 2\\text{ kg}$ lies on a frictionless horizontal floor. A constant pulling force $F = 15\\text{ N}$ is applied horizontally to one end. What is the tension in the rope at a distance $x = 2\\text{ m}$ from the pulled end?",
    options={
        "A": "9 N",
        "B": "6 N",
        "C": "15 N",
        "D": "12 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Newton's second law of motion",
    concept="For a massive rope under pull $F$, the acceleration of the entire rope is $a = F/M$. The tension at distance $x$ from the pulled end is the force required to accelerate the remaining portion of length $(L - x)$.",
    given="$L = 5\\text{ m}$, $M = 2\\text{ kg}$, $F = 15\\text{ N}$, $x = 2\\text{ m}$.",
    formula="a = \\frac{F}{M},\\quad T(x) = M_{\\text{remaining}} a = \\left[ M\\frac{L - x}{L} \\right] \\frac{F}{M} = F\\left(1 - \\frac{x}{L}\\right)",
    steps="1. Acceleration of the rope: $a = \\frac{15\\text{ N}}{2\\text{ kg}} = 7.5\\text{ m/s}^2$.\n2. The section behind distance $x$ has length $L - x = 5 - 2 = 3\\text{ m}$.\n3. Mass of this trailing section: $m' = M \\frac{L-x}{L} = 2 \\times \\frac{3}{5} = 1.2\\text{ kg}$.\n4. Tension at $x$ accelerates this mass: $T = m' a = 1.2 \\times 7.5 = 9\\text{ N}$.\n5. Shortcut formula: $T = F(1 - x/L) = 15(1 - 2/5) = 15(3/5) = 9\\text{ N}$.",
    tip="Tension in a massive rope drops linearly: $T(x) = F(1 - x/L)$. At the pulled end ($x=0$), $T = F$. At the free end ($x=L$), $T = 0$!",
    why_wrong="Option B ($6\\text{ N}$) is the tension if $x$ was measured from the free end instead of the pulled end."
))

# Q076 - Hard
qs.append(make_lom_q(
    num=76,
    question="A body of mass $m$ is initially at rest. A force $\\vec{F} = F_0\\sin(\\omega t)\\hat{i}$ acts on it from $t = 0$ to $t = \\pi / \\omega$. What is the velocity of the body at $t = \\pi / \\omega$?",
    options={
        "A": "\\frac{2 F_0}{m \\omega}\\hat{i}",
        "B": "0",
        "C": "\\frac{F_0}{m \\omega}\\hat{i}",
        "D": "\\frac{\\pi F_0}{m \\omega}\\hat{i}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's second law of motion",
    concept="Integrate the time-dependent force over the half-period to determine the net impulse delivered to the mass.",
    given="$F(t) = F_0\\sin(\\omega t)$, from $t = 0$ to $t = \\pi/\\omega$, $u = 0$.",
    formula="v = \\frac{1}{m}\\int_0^{\\pi/\\omega} F(t) dt",
    steps="1. Set up the integral:\n   $$v = \\frac{F_0}{m}\\int_0^{\\pi/\\omega} \\sin(\\omega t) dt$$\n2. The antiderivative of $\\sin(\\omega t)$ is $-\\frac{\\cos(\\omega t)}{\\omega}$:\n   $$v = \\frac{F_0}{m\\omega}\\left[ -\\cos(\\omega t) \\right]_0^{\\pi/\\omega} = \\frac{F_0}{m\\omega}\\left[ -\\cos(\\pi) - (-\\cos(0)) \\right]$$\n3. With $\\cos(\\pi) = -1$ and $\\cos(0) = 1$:\n   $$v = \\frac{F_0}{m\\omega}\\left[ -(-1) + 1 \\right] = \\frac{F_0}{m\\omega}[1 + 1] = \\frac{2F_0}{m\\omega}$$.\n4. Therefore, $\\vec{v} = \\frac{2F_0}{m\\omega}\\hat{i}$.",
    tip="Integral of $\\sin$ over half cycle $[0, \\pi]$ is 2! So impulse is $\\frac{2F_0}{\\omega}$ and velocity is $\\frac{2F_0}{m\\omega}$.",
    why_wrong="Option B assumes the integral over half a sine wave is zero, but that is only true for a FULL cycle $[0, 2\\pi]$."
))

# Q077 - Hard
qs.append(make_lom_q(
    num=77,
    question="A particle of mass $m$ moves along the x-axis under a force $F(x) = -k/x^2$ for $x > 0$. If it is released from rest at $x = x_0$, what is its speed when it reaches $x = x_0 / 2$?",
    options={
        "A": "\\sqrt{\\frac{2k}{m x_0}}",
        "B": "\\sqrt{\\frac{k}{m x_0}}",
        "C": "\\sqrt{\\frac{4k}{m x_0}}",
        "D": "\\sqrt{\\frac{k}{2m x_0}}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's second law of motion",
    concept="For a position-dependent force, express acceleration as $a = v \\frac{dv}{dx}$. Integrating $m v dv = F(x) dx$ corresponds to the work-energy theorem.",
    given="$F(x) = -k/x^2$, released from rest ($v=0$) at $x = x_0$, final position $x = x_0/2$.",
    formula="\\int_0^v m v dv = \\int_{x_0}^{x_0/2} F(x) dx",
    steps="1. Left-hand side: $\\frac{1}{2}m v^2$.\n2. Right-hand side:\n   $$W = \\int_{x_0}^{x_0/2} -\\frac{k}{x^2} dx = \\left[ \\frac{k}{x} \\right]_{x_0}^{x_0/2} = \\frac{k}{x_0/2} - \\frac{k}{x_0} = \\frac{2k}{x_0} - \\frac{k}{x_0} = \\frac{k}{x_0}$$\n3. Equate kinetic energy to work:\n   $$\\frac{1}{2}m v^2 = \\frac{k}{x_0} \\implies v^2 = \\frac{2k}{m x_0} \\implies v = \\sqrt{\\frac{2k}{m x_0}}$$.",
    tip="Use $v dv = a dx$: Work done by gravity/inverse-square force equals $\\Delta K$!",
    why_wrong="Option B forgets the factor of $2$ when converting from $\\frac{1}{2}mv^2$ to $v^2$."
))

# Q078 - Hard
qs.append(make_lom_q(
    num=78,
    question="Sand is poured at a constant rate of $\\mu = 0.5\\text{ kg/s}$ onto a conveyor belt moving horizontally with a constant speed $v = 2\\text{ m/s}$. What extra power must the motor deliver to maintain the belt at this constant speed?",
    options={
        "A": "2 W",
        "B": "1 W",
        "C": "4 W",
        "D": "0.5 W"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's second law of motion",
    concept="To accelerate incoming stationary sand to belt speed $v$, the belt exerts a force $F = v \\frac{dm}{dt} = \\mu v$. The power delivered by the motor is $P = F v = \\mu v^2$. Exactly half of this power is stored as kinetic energy of the sand ($\frac{1}{2}\\mu v^2$), while the other half is dissipated as heat by friction.",
    given="$\\mu = \\frac{dm}{dt} = 0.5\\text{ kg/s}$, $v = 2\\text{ m/s}$.",
    formula="F = v\\frac{dm}{dt} = \\mu v,\\quad P = F v = \\mu v^2",
    steps="1. Force required: $F = \\mu v = 0.5 \\times 2 = 1.0\\text{ N}$.\n2. Power required from motor: $P = F v = (1.0\\text{ N}) \\times (2\\text{ m/s}) = 2.0\\text{ W}$.\n3. Note: The rate of increase of kinetic energy of the sand is $\\frac{dK}{dt} = \\frac{1}{2}\\mu v^2 = \\frac{1}{2}(0.5)(4) = 1.0\\text{ W}$.\n4. The remaining $1.0\\text{ W}$ is lost as heat due to slipping friction as sand lands on the belt.",
    tip="Classic NEET Trap: The rate of kinetic energy gain is $\\frac{1}{2}\\mu v^2$, but the MOTOR POWER required is $\\mu v^2$ (double the kinetic energy rate)!",
    why_wrong="Option B ($1\\text{ W}$) only computes the rate of increase of kinetic energy $\\frac{1}{2}\\mu v^2$, ignoring frictional heat loss during slipping."
))

# Q079 - Hard
qs.append(make_lom_q(
    num=79,
    question="A body of mass $m$ is falling vertically downward in a viscous fluid under gravity. It experiences a resistive drag force proportional to its instantaneous velocity, $F_{\\text{drag}} = -b v$, where $b$ is a positive constant. What is the terminal velocity of the body?",
    options={
        "A": "\\frac{mg}{b}",
        "B": "\\frac{b}{mg}",
        "C": "\\frac{mg}{2b}",
        "D": "\\sqrt{\\frac{mg}{b}}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Newton's second law of motion",
    concept="Terminal velocity is reached when the upward drag force balances the downward gravitational force, resulting in zero net force and zero acceleration.",
    given="Downward gravity $mg$, upward drag force $b v$.",
    formula="F_{\\text{net}} = mg - bv = 0 \\implies v_{\\text{term}} = \\frac{mg}{b}",
    steps="1. Equation of motion: $m \\frac{dv}{dt} = mg - bv$.\n2. As speed increases, drag force increases until it equals weight.\n3. At terminal speed, acceleration ceases ($a = \\frac{dv}{dt} = 0$).\n4. $mg - bv_{\\text{term}} = 0 \\implies v_{\\text{term}} = \\frac{mg}{b}$.",
    tip="At terminal velocity, net force is zero: $a = 0 \\implies F_{\\text{down}} = F_{\\text{up}}$! If drag is proportional to $v^2$ ($bv^2$), terminal velocity would be $\\sqrt{mg/b}$.",
    why_wrong="Option D is the terminal velocity for quadratic drag ($F = bv^2$), not linear drag."
))

print("Topic 5 done: 16 questions.")
