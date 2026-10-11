import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 4: Momentum and impulse (Q048 to Q063, 16 questions: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q048 - Easy
qs.append(make_lom_q(
    num=48,
    question="The linear momentum of a body of mass $m$ moving with velocity $\\vec{v}$ is defined as $\\vec{p} = m\\vec{v}$. What are the SI units and dimensions of linear momentum?",
    options={
        "A": "kg·m/s and [M L T^-1]",
        "B": "kg·m/s^2 and [M L T^-2]",
        "C": "N·m and [M L^2 T^-2]",
        "D": "J·s and [M L^2 T^-1]"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Momentum and impulse",
    concept="Linear momentum is the vector product of mass and velocity: $\\vec{p} = m\\vec{v}$. Its unit is $\\text{kg}\\cdot\\text{m/s}$ or $\\text{N}\\cdot\\text{s}$.",
    given="Mass $[m] = M$, velocity $[v] = L T^{-1}$.",
    formula="[p] = [m][v] = [M L T^{-1}]",
    steps="1. Unit of mass is $\\text{kg}$, unit of velocity is $\\text{m/s}$.\n2. Product unit is $\\text{kg}\\cdot\\text{m/s}$.\n3. Dimensional formula: $[M][L T^{-1}] = [M L T^{-1}]$.\n4. This is identical to the dimensional formula of impulse ($J = F \\Delta t$).",
    tip="Linear momentum and Impulse share the EXACT same SI units (kg·m/s or N·s) and dimensions $[M L T^{-1}]$!",
    why_wrong="Option B is force [M L T^-2]. Option C is work or torque [M L^2 T^-2]. Option D is Planck's constant or angular momentum [M L^2 T^-1]."
))

# Q049 - Easy
qs.append(make_lom_q(
    num=49,
    question="Impulse delivered by a constant force $\\vec{F}$ acting for a time interval $\\Delta t$ is mathematically equal to:",
    options={
        "A": "The change in linear momentum of the body",
        "B": "The rate of change of linear momentum",
        "C": "The change in kinetic energy of the body",
        "D": "The acceleration of the body"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Momentum and impulse",
    concept="The Impulse-Momentum Theorem states that the impulse of the net force acting on a particle equals the change in momentum of the particle: $\\vec{J} = \\int \\vec{F} dt = \\Delta \\vec{p}$.",
    given="Impulse definition $\\vec{J} = \\vec{F}\\Delta t$.",
    formula="\\vec{J} = \\vec{F}\\Delta t = m\\vec{a}\\Delta t = m\\Delta \\vec{v} = \\Delta \\vec{p}",
    steps="1. By Newton's second law, $\\vec{F} = \\frac{\\Delta \\vec{p}}{\\Delta t}$.\n2. Multiplying by $\\Delta t$ gives $\\vec{F}\\Delta t = \\Delta \\vec{p}$.\n3. By definition, $\\vec{J} = \\vec{F}\\Delta t$.\n4. Therefore, $\\vec{J} = \\Delta \\vec{p}$.",
    tip="Impulse = Change in momentum ($\vec{J} = \Delta \vec{p}$). Rate of change of momentum = Force ($\vec{F} = d\vec{p}/dt$)!",
    why_wrong="Option B is Force ($d\\vec{p}/dt$), not impulse."
))

# Q050 - Easy
qs.append(make_lom_q(
    num=50,
    question="A cricket player draws their hands backward while catching a fast cricket ball. Why?",
    options={
        "A": "To increase the time of impact, thereby reducing the impulsive force on the hands",
        "B": "To decrease the change in momentum of the ball",
        "C": "To increase the impulse delivered by the ball",
        "D": "To increase the reaction force from the hands"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Momentum and impulse",
    concept="The change in momentum $\\Delta p = mv - 0$ is fixed by the ball's incoming speed. Since $F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t}$, increasing the contact time $\\Delta t$ proportionally reduces the average impact force on the player's hands.",
    given="Catching a fast ball of mass $m$ and initial speed $v$.",
    formula="F_{\\text{avg}} = \\frac{\\Delta p}{\\Delta t}",
    steps="1. The ball comes to rest, so the momentum change $\\Delta p$ is constant regardless of how it is caught.\n2. By pulling hands backward, the catching time $\\Delta t$ increases significantly.\n3. Since $F_{\\text{avg}} = \\Delta p / \\Delta t$, a larger $\\Delta t$ produces a much smaller force on the hands, preventing pain or injury.",
    tip="Airbags in cars, padded gym mats, and catching cricket balls all work on the exact same principle: lengthen $\Delta t$ to reduce impact force $F$!",
    why_wrong="Option B is wrong because the momentum change is fixed: from $mv$ to $0$."
))

# Q051 - Easy
qs.append(make_lom_q(
    num=51,
    question="The area under a Force versus Time ($F-t$) graph represents:",
    options={
        "A": "Impulse or change in linear momentum",
        "B": "Work done by the force",
        "C": "Power delivered by the force",
        "D": "Acceleration of the body"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Momentum and impulse",
    concept="In calculus, $\\int F dt$ represents the definite integral of force with respect to time, which corresponds to the area under the $F-t$ curve and equals impulse $\\vec{J} = \\Delta \\vec{p}$.",
    given="$F-t$ graph.",
    formula="\\text{Area} = \\int_{t_1}^{t_2} F(t) dt = J = \\Delta p",
    steps="1. The area of a differential strip under the $F-t$ graph is $dA = F dt$.\n2. Total area is $\\int F dt$.\n3. By the Impulse-Momentum Theorem, $\\int F dt = \\Delta p = J$.\n4. Therefore, the area represents impulse or change in linear momentum.",
    tip="Area under $F-t$ graph = Impulse ($\Delta p$). Area under $F-x$ graph = Work done ($W$)! Memorize both for NEET.",
    why_wrong="Option B: Work is the area under a Force vs Position ($F-x$) graph, not an $F-t$ graph."
))

# Q052 - Medium (Verified NEET 2023 PYQ)
qs.append(make_lom_q(
    num=52,
    question="A football player is moving southward and suddenly turns eastward with the same speed to avoid an opponent. The force that acts on the player while turning is:",
    options={
        "A": "Along northward",
        "B": "Along north-east",
        "C": "Along south-west",
        "D": "Along eastward"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="By Newton's second law, the average force acting on the player is in the direction of the change in linear momentum: $\\vec{F} = \\frac{\\Delta \\vec{p}}{\\Delta t} = \\frac{m(\\vec{v}_f - \\vec{v}_i)}{\\Delta t}$.",
    given="Initial velocity: southward ($\\vec{v}_i = -v\\hat{j}$); Final velocity: eastward ($\\vec{v}_f = v\\hat{i}$) with same speed $v$.",
    formula="\\Delta \\vec{p} = m(\\vec{v}_f - \\vec{v}_i) = m(v\\hat{i} - (-v\\hat{j})) = mv\\hat{i} + mv\\hat{j}",
    steps="1. Define axes: East is $+\\hat{i}$, North is $+\\hat{j}$. South is $-\\hat{j}$, West is $-\\hat{i}$.\n2. Initial velocity: $\\vec{v}_i = -v\\hat{j}$ (southward).\n3. Final velocity: $\\vec{v}_f = v\\hat{i}$ (eastward).\n4. Change in velocity:\n   $$\\Delta \\vec{v} = \\vec{v}_f - \\vec{v}_i = v\\hat{i} - (-v\\hat{j}) = v\\hat{i} + v\\hat{j}$$\n5. The vector $v\\hat{i} + v\\hat{j}$ has equal positive components along East ($+\\hat{i}$) and North ($+\\hat{j}$).\n6. Therefore, the change in momentum and the force act along the north-east direction.",
    tip="$\\Delta \\vec{v} = \\vec{v}_f - \\vec{v}_i = \\text{East} - \\text{South} = \\text{East} + \\text{North} = \\text{North-East}$! Remember that subtracting south means adding north.",
    why_wrong="Option D incorrectly considers only the final velocity without subtracting the initial velocity vector.",
    is_pyq=True,
    pyq_year=2023,
    source="NEET UG 2023"
))

# Q053 - Medium
qs.append(make_lom_q(
    num=53,
    question="A ball of mass $0.2\\text{ kg}$ is thrown against a hard wall with a speed of $15\\text{ m/s}$ and bounces back along the same line with the same speed. If the contact time with the wall is $0.02\\text{ s}$, the average force exerted by the wall on the ball is:",
    options={
        "A": "300 N",
        "B": "150 N",
        "C": "600 N",
        "D": "0 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="For a ball reversing direction elastically along the normal, the change in velocity is $\\Delta v = (-v) - (+v) = -2v$. The magnitude of impulse is $|\Delta p| = 2mv$.",
    given="$m = 0.2\\text{ kg}$, $u = 15\\text{ m/s}$, $v = -15\\text{ m/s}$, $\\Delta t = 0.02\\text{ s}$.",
    formula="|\\Delta p| = m|v - u| = m|-15 - 15| = 2mu,\\quad F_{\\text{avg}} = \\frac{|\\Delta p|}{\\Delta t}",
    steps="1. Magnitude of change in momentum: $|\\Delta p| = 2 \\times 0.2 \\times 15 = 6.0\\text{ kg}\\cdot\\text{m/s}$.\n2. Average force: $F_{\\text{avg}} = \\frac{6.0\\text{ kg}\\cdot\\text{m/s}}{0.02\\text{ s}} = \\frac{600}{2} = 300\\text{ N}$.",
    tip="Rebounding back along same path with same speed $\\implies \\Delta p = 2mv$, NOT zero! The speeds are the same, but the velocities have opposite signs.",
    why_wrong="Option B ($150\\text{ N}$) forgets that velocity reverses, computing $mv/\\Delta t$ instead of $2mv/\\Delta t$."
))

# Q054 - Medium
qs.append(make_lom_q(
    num=54,
    question="A machine gun fires $20$ bullets per second, each of mass $35\\text{ g}$ with a muzzle velocity of $400\\text{ m/s}$. What is the average recoil force exerted on the gunner holding the gun?",
    options={
        "A": "280 N",
        "B": "140 N",
        "C": "700 N",
        "D": "560 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="The average force required to hold a firing gun equals the time rate of momentum carried away by the bullets: $F = n m v$, where $n$ is the number of bullets fired per second.",
    given="$n = 20\\text{ s}^{-1}$, $m = 35\\text{ g} = 0.035\\text{ kg}$, $v = 400\\text{ m/s}$.",
    formula="F = \\frac{\\Delta p}{\\Delta t} = n m v",
    steps="1. Momentum carried by a single bullet: $p = m v = 0.035 \\times 400 = 14\\text{ kg}\\cdot\\text{m/s}$.\n2. Momentum ejected per second: $\\frac{\\Delta p}{\\Delta t} = 20 \\times 14 = 280\\text{ N}$.\n3. By Newton's third law, the gunner must exert an average forward force of $280\\text{ N}$ to hold the gun steady.",
    tip="Rate of momentum ejection $F = n m v$. Keep mass in kilograms ($35\\text{ g} = 0.035\\text{ kg}$)!",
    why_wrong="Option B ($140\\text{ N}$) divides by 2 erroneously."
))

# Q055 - Medium
qs.append(make_lom_q(
    num=55,
    question="A triangular force pulse $F(t)$ acts on a particle of mass $2\\text{ kg}$ initially at rest. The force increases linearly from $0$ to $50\\text{ N}$ in $0.1\\text{ s}$, then decreases linearly back to $0$ at $t = 0.2\\text{ s}$. What is the final velocity of the particle?",
    options={
        "A": "2.5 m/s",
        "B": "5.0 m/s",
        "C": "10.0 m/s",
        "D": "1.25 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="The total impulse is the area under the triangular $F-t$ curve: $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$. Final velocity is $v = J/m$.",
    given="$m = 2\\text{ kg}$, base $b = 0.2\\text{ s}$, peak height $F_0 = 50\\text{ N}$, $u = 0$.",
    formula="J = \\text{Area} = \\frac{1}{2} b F_0,\\quad v = \\frac{J}{m}",
    steps="1. Calculate the area of the triangle:\n   $$J = \\frac{1}{2} \\times (0.2\\text{ s}) \\times (50\\text{ N}) = 5.0\\text{ N}\\cdot\\text{s}$$\n2. Find the final velocity:\n   $$v = \\frac{J}{m} = \\frac{5.0\\text{ N}\\cdot\\text{s}}{2\\text{ kg}} = 2.5\\text{ m/s}$$.",
    tip="Area of a triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$! Don't forget the factor of $1/2$.",
    why_wrong="Option B ($5.0\\text{ m/s}$) is the total impulse $J$, forgetting to divide by mass $m = 2\\text{ kg}$."
))

# Q056 - Medium
qs.append(make_lom_q(
    num=56,
    question="A ball of mass $m$ strikes a rigid vertical wall with speed $u$ at an angle of incidence $\\theta$ measured from the normal to the wall, and rebounds with the same speed $u$ at the same angle $\\theta$. What is the magnitude of impulse imparted to the ball by the wall?",
    options={
        "A": "2 m u \\cos\\theta",
        "B": "2 m u \\sin\\theta",
        "C": "2 m u",
        "D": "m u \\cos\\theta"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="Resolve velocity into normal (perpendicular to wall) and parallel components. The parallel component $u\\sin\\theta$ remains unchanged upon specular rebound, while the normal component reverses from $+u\\cos\\theta$ to $-u\\cos\\theta$.",
    given="Mass $m$, incident speed $u$ at angle $\\theta$ to the normal.",
    formula="\\Delta p_x = m(-u\\cos\\theta - u\\cos\\theta) = -2mu\\cos\\theta,\\quad \\Delta p_y = 0",
    steps="1. Choose normal as x-axis and wall as y-axis.\n2. Initial velocity: $\\vec{u} = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$.\n3. Final velocity: $\\vec{v} = -u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$.\n4. Change in momentum: $\\Delta\\vec{p} = \\vec{v} - \\vec{u} = -2mu\\cos\\theta\\hat{i}$.\n5. Magnitude of impulse: $J = |\\Delta\\vec{p}| = 2mu\\cos\\theta$.",
    tip="Angle to normal $\\implies J = 2mu\\cos\\theta$. Angle to wall surface $\\implies J = 2mu\\sin\\theta$. Always check which reference line the angle is measured from!",
    why_wrong="Option B applies if the angle $\\theta$ were measured from the surface of the wall."
))

# Q057 - Medium
qs.append(make_lom_q(
    num=57,
    question="A rubber ball and a clay ball of identical mass $m = 100\\text{ g}$ are dropped from the same height onto the floor with speed $v = 5\\text{ m/s}$. The rubber ball bounces back with speed $5\\text{ m/s}$, whereas the clay ball sticks to the floor and comes to rest. Which ball delivers a greater impulse to the floor, and what is the ratio $J_{\\text{rubber}} / J_{\\text{clay}}$?",
    options={
        "A": "Rubber ball delivers greater impulse; ratio is 2 : 1",
        "B": "Clay ball delivers greater impulse; ratio is 1 : 2",
        "C": "Both deliver identical impulse; ratio is 1 : 1",
        "D": "Rubber ball delivers greater impulse; ratio is 4 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="Impulse equals change in momentum. The rubber ball reverses direction ($\Delta p = 2mv$), whereas the clay ball merely stops ($\Delta p = mv$).",
    given="$m = 0.1\\text{ kg}$, $v = 5\\text{ m/s}$.",
    formula="J_{\\text{rubber}} = m(v - (-v)) = 2mv,\\quad J_{\\text{clay}} = m(0 - (-v)) = mv",
    steps="1. For the rubber ball: $\\Delta p = 2mv = 2(0.1)(5) = 1.0\\text{ N}\\cdot\\text{s}$.\n2. For the clay ball: $\\Delta p = mv = 0.1(5) = 0.5\\text{ N}\\cdot\\text{s}$.\n3. Ratio: $\\frac{J_{\\text{rubber}}}{J_{\\text{clay}}} = \\frac{2mv}{mv} = 2$.\n4. Therefore, the bouncy rubber ball delivers twice the impulse.",
    tip="Bouncing bodies always exert more impulse than sticky bodies because $\\Delta v$ is twice as large!",
    why_wrong="Option C is a common misconception that since both had the same incoming momentum, they deliver the same impulse."
))

# Q058 - Medium
qs.append(make_lom_q(
    num=58,
    question="A particle of mass $m$ is moving in a circular path of radius $R$ with constant speed $v$. What is the magnitude of the change in its linear momentum after completing one quarter ($1/4$) of a revolution?",
    options={
        "A": "\\sqrt{2} m v",
        "B": "2 m v",
        "C": "m v",
        "D": "0"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="In circular motion with constant speed, the magnitude of momentum is constant ($p = mv$), but its direction changes continuously. After a quarter revolution, the velocity vector rotates by $90^\\circ$.",
    given="Mass $m$, speed $v$, angle rotated $\\theta = 90^\\circ$.",
    formula="|\\Delta \\vec{p}| = 2 p \\sin(\\theta/2) = 2 m v \\sin(45^\\circ) = \\sqrt{2} m v",
    steps="1. Initial momentum: $\\vec{p}_1 = mv\\hat{j}$.\n2. After $90^\\circ$, final momentum: $\\vec{p}_2 = -mv\\hat{i}$.\n3. Change in momentum: $\\Delta \\vec{p} = \\vec{p}_2 - \\vec{p}_1 = -mv\\hat{i} - mv\\hat{j}$.\n4. Magnitude: $|\\Delta \\vec{p}| = \\sqrt{(-mv)^2 + (-mv)^2} = \\sqrt{2}mv$.",
    tip="Universal formula for circular motion with constant speed: $|\\Delta \\vec{p}| = 2mv\\sin(\\theta/2)$. For $90^\\circ \\implies \\sqrt{2}mv$; for $180^\\circ \\implies 2mv$; for $360^\\circ \\implies 0$!",
    why_wrong="Option B ($2mv$) is for half a revolution ($180^\\circ$). Option D ($0$) is for a full revolution ($360^\\circ$)."
))

# Q059 - Medium
qs.append(make_lom_q(
    num=59,
    question="Water flows horizontally out of a pipe of cross-sectional area $A = 0.01\\text{ m}^2$ with a speed $v = 10\\text{ m/s}$ and strikes a vertical wall normally, coming to rest without rebounding. Taking the density of water as $\\rho = 1000\\text{ kg/m}^3$, the force exerted by the water jet on the wall is:",
    options={
        "A": "1000 N",
        "B": "500 N",
        "C": "100 N",
        "D": "2000 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Momentum and impulse",
    concept="The mass flow rate of a fluid is $dm/dt = \\rho A v$. Since the fluid loses all its forward velocity upon striking the wall, the force exerted is $F = v \\frac{dm}{dt} = \\rho A v^2$.",
    given="$A = 0.01\\text{ m}^2$, $v = 10\\text{ m/s}$, $\\rho = 1000\\text{ kg/m}^3$.",
    formula="F = \\rho A v^2",
    steps="1. Mass of water striking per second: $\\frac{dm}{dt} = \\rho A v = 1000 \\times 0.01 \\times 10 = 100\\text{ kg/s}$.\n2. Momentum destroyed per second: $F = \\left(\\frac{dm}{dt}\\right) v = 100 \\times 10 = 1000\\text{ N}$.\n3. Hence, the force on the wall is $1000\\text{ N}$.",
    tip="Jet of liquid on wall: $F = \\rho A v^2$ (stops without rebounding). If it rebounds with same speed, $F = 2\\rho A v^2$!",
    why_wrong="Option B ($500\\text{ N}$) incorrectly divides by 2 like kinetic energy."
))

# Q060 - Hard
qs.append(make_lom_q(
    num=60,
    question="A variable force $F(t) = (20 + 10 t)\\text{ N}$ acts on a body of mass $2\\text{ kg}$ initially at rest for a time interval from $t = 0$ to $t = 4\\text{ s}$. The final velocity of the body at $t = 4\\text{ s}$ is:",
    options={
        "A": "80 m/s",
        "B": "160 m/s",
        "C": "40 m/s",
        "D": "60 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Momentum and impulse",
    concept="For a time-dependent force, impulse is the definite integral of force with respect to time: $J = \\int_{0}^{T} F(t) dt = m\\Delta v$.",
    given="$F(t) = 20 + 10t$, $m = 2\\text{ kg}$, $u = 0$, $t = 0$ to $4\\text{ s}$.",
    formula="J = \\int_0^4 (20 + 10t) dt = \\left[ 20t + 5t^2 \\right]_0^4",
    steps="1. Evaluate the integral:\n   $$J = 20(4) + 5(4^2) = 80 + 5(16) = 80 + 80 = 160\\text{ N}\\cdot\\text{s}$$\n2. Find velocity:\n   $$v = \\frac{J}{m} = \\frac{160\\text{ N}\\cdot\\text{s}}{2\\text{ kg}} = 80\\text{ m/s}$$.",
    tip="Integrate to get total impulse $J$, then divide by mass: $v = J/m$!",
    why_wrong="Option B ($160\\text{ m/s}$) is the impulse $J$, forgetting to divide by mass $m = 2\\text{ kg}$."
))

# Q061 - Hard
qs.append(make_lom_q(
    num=61,
    question="A ball of mass $m$ is projected with initial speed $u$ at an angle $\\theta$ with the horizontal. What is the magnitude of the change in its linear momentum between the launch point and the instant it reaches the maximum height?",
    options={
        "A": "m u \\sin\\theta",
        "B": "m u \\cos\\theta",
        "C": "m u",
        "D": "2 m u \\sin\\theta"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Momentum and impulse",
    concept="In projectile motion, horizontal velocity remains constant throughout ($u_x = u\\cos\\theta$). Therefore, the change in momentum is entirely along the vertical axis, from $u_y = u\\sin\\theta$ to $v_y = 0$.",
    given="Launch velocity $\\vec{u} = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$; velocity at apex $\\vec{v} = u\\cos\\theta\\hat{i}$.",
    formula="\\Delta \\vec{p} = m(\\vec{v} - \\vec{u}) = m(0 - u\\sin\\theta)\\hat{j} = -mu\\sin\\theta\\hat{j}",
    steps="1. $\\vec{p}_i = m u \\cos\\theta\\hat{i} + m u \\sin\\theta\\hat{j}$.\n2. At the peak, vertical velocity is zero: $\\vec{p}_f = m u \\cos\\theta\\hat{i}$.\n3. $\\Delta\\vec{p} = \\vec{p}_f - \\vec{p}_i = -m u \\sin\\theta\\hat{j}$.\n4. Magnitude: $|\\Delta\\vec{p}| = m u \\sin\\theta$.",
    tip="Alternatively: Gravity is the only force, so $J = F \\Delta t = mg \\times t_{\\text{up}} = mg \\times \\frac{u\\sin\\theta}{g} = mu\\sin\\theta$! Always check using impulse.",
    why_wrong="Option D ($2mu\\sin\\theta$) is the change in momentum over the ENTIRE flight, not just up to the apex."
))

# Q062 - Hard
qs.append(make_lom_q(
    num=62,
    question="In the previous projectile motion problem with launch speed $u$ and angle $\\theta$, what is the magnitude of the change in momentum of the projectile over its ENTIRE flight from launch until it strikes level ground?",
    options={
        "A": "2 m u \\sin\\theta",
        "B": "2 m u \\cos\\theta",
        "C": "2 m u",
        "D": "m u \\sin\\theta"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Momentum and impulse",
    concept="Over the entire flight, the horizontal momentum is unchanged ($p_{fx} = p_{ix}$), while the vertical momentum completely reverses from $+mu\\sin\\theta$ to $-mu\\sin\\theta$.",
    given="Launch velocity $\\vec{u} = u\\cos\\theta\\hat{i} + u\\sin\\theta\\hat{j}$, landing velocity $\\vec{v} = u\\cos\\theta\\hat{i} - u\\sin\\theta\\hat{j}$.",
    formula="\\Delta \\vec{p} = m(v_y - u_y)\\hat{j} = m(-u\\sin\\theta - u\\sin\\theta)\\hat{j} = -2mu\\sin\\theta\\hat{j}",
    steps="1. Total time of flight is $T = \\frac{2u\\sin\\theta}{g}$.\n2. The net force throughout flight is downward gravity $\\vec{F} = -mg\\hat{j}$.\n3. The total impulse imparted by gravity is $\\vec{J} = \\vec{F} T = (-mg\\hat{j}) \\left(\\frac{2u\\sin\\theta}{g}\\right) = -2mu\\sin\\theta\\hat{j}$.\n4. The magnitude is $2mu\\sin\\theta$.",
    tip="Entire flight $\\implies 2mu\\sin\\theta$. Halfway (highest point) $\\implies mu\\sin\\theta$! The change in momentum is purely vertical.",
    why_wrong="Option B incorrectly uses cosine instead of sine."
))

# Q063 - Hard
qs.append(make_lom_q(
    num=63,
    question="A bullet of mass $m = 10\\text{ g}$ moving with velocity $v_0 = 400\\text{ m/s}$ penetrates horizontally into a fixed wooden block to a depth of $d = 0.2\\text{ m}$ before stopping. Assuming a constant resistive force from the wood, what is the magnitude of the resistive force and the duration of penetration?",
    options={
        "A": "4000 N and 1.0 x 10^-3 s (1 ms)",
        "B": "2000 N and 2.0 x 10^-3 s",
        "C": "8000 N and 0.5 x 10^-3 s",
        "D": "4000 N and 2.0 x 10^-3 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Momentum and impulse",
    concept="Work-energy theorem yields resistive force: $F d = \\frac{1}{2} m v_0^2$. Average velocity is $\\bar{v} = v_0/2$, giving penetration time $t = d/\\bar{v} = 2d/v_0$.",
    given="$m = 0.01\\text{ kg}$, $v_0 = 400\\text{ m/s}$, $d = 0.2\\text{ m}$.",
    formula="F = \\frac{m v_0^2}{2d},\\quad t = \\frac{2d}{v_0}",
    steps="1. Resistive force:\n   $$F = \\frac{0.01 \\times (400)^2}{2 \\times 0.2} = \\frac{0.01 \\times 160000}{0.4} = \\frac{1600}{0.4} = 4000\\text{ N}$$\n2. Duration of penetration:\n   $$t = \\frac{2d}{v_0} = \\frac{2 \\times 0.2}{400} = \\frac{0.4}{400} = 1.0 \\times 10^{-3}\\text{ s} = 1\\text{ ms}$$\n3. Alternatively, check impulse: $J = F t = 4000 \\times 10^{-3} = 4\\text{ N}\\cdot\\text{s} = m v_0 = 0.01 \\times 400 = 4\\text{ kg}\\cdot\\text{m/s}$!",
    tip="Remember for constant deceleration from $v_0$ to $0$: $d = \\frac{v_0}{2} t \\implies t = \\frac{2d}{v_0}$!",
    why_wrong="Option B halves the resistive force by omitting the factor of 2 in $v^2 = 2ad$."
))

print("Topic 4 done: 16 questions.")
