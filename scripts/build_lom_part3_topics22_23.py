import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 22: Motion on a horizontal surface with friction (Q345 to Q360: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q345: Easy (NEET 2023 Verified PYQ)
qs.append(make_lom_q(
    num=345,
    question="The coefficient of static friction between a box and the horizontal floor of a truck is $\\mu_s = 0.15$. The maximum acceleration of the truck for which the box remains stationary with respect to the floor is (take $g = 10\\text{ m/s}^2$):",
    options={
        "A": "$1.5\\text{ m/s}^2$",
        "B": "$2.0\\text{ m/s}^2$",
        "C": "$2.5\\text{ m/s}^2$",
        "D": "$3.0\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion on a horizontal surface with friction",
    concept="In the accelerating frame of the truck, the box experiences a pseudo force $F_{\\text{pseudo}} = m a$ directed opposite to the truck's acceleration. For the box not to slip relative to the truck floor, static friction must balance this pseudo force: $f_s = m a$. Since maximum static friction is $f_{\\text{lim}} = \\mu_s N = \\mu_s m g$, the condition for no slipping is $m a \\le \\mu_s m g \\implies a \\le \\mu_s g$.",
    given="Coefficient of static friction $\\mu_s = 0.15$, $g = 10\\text{ m/s}^2$.",
    formula="$a_{\\text{max}} = \\mu_s g$.",
    steps="1. In the ground frame, the only horizontal force accelerating the box forward is the static friction exerted by the truck floor: $f_s = ma$.\n2. The normal force on the horizontal floor is $N = mg$.\n3. The maximum possible static friction is $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.\n4. For the box to remain stationary relative to the truck floor without slipping:\n   $ma \\le \\mu_s mg \\implies a \\le \\mu_s g$.\n5. Maximum acceleration: $a_{\\text{max}} = \\mu_s g = 0.15 \\times 10 = 1.5\\text{ m/s}^2$.",
    tip="Independent of mass! The maximum acceleration without slipping on a horizontal vehicle bed is ALWAYS $a_{\\text{max}} = \\mu_s g$.",
    why_wrong="Option B, C, and D are higher accelerations that would cause the box to slip backwards relative to the truck.",
    is_pyq=True,
    pyq_year=2023,
    source="NEET UG 2023"
))

# Q346: Easy
qs.append(make_lom_q(
    num=346,
    question="Why is it easier to pull a lawn roller than to push it on a horizontal surface?",
    options={
        "A": "Pulling reduces the normal reaction and thus decreases friction, whereas pushing increases the normal reaction and increases friction",
        "B": "Pulling creates a negative mass for the roller",
        "C": "Pushing reduces the gravitational acceleration $g$",
        "D": "Pulling eliminates friction entirely"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion on a horizontal surface with friction",
    concept="When pulling at an angle $\\theta$ above the horizontal, the vertical component $F\\sin\\theta$ acts upward, reducing the normal force to $N = mg - F\\sin\\theta$, thereby decreasing friction $f = \\mu N$. When pushing at an angle $\\theta$ below the horizontal, $F\\sin\\theta$ acts downward, increasing the normal force to $N = mg + F\\sin\\theta$, thereby increasing friction.",
    given="Pulling vs pushing on a horizontal rough surface.",
    formula="Pulling: $N = mg - F\\sin\\theta$; Pushing: $N = mg + F\\sin\\theta$; $f = \\mu N$.",
    steps="1. Resolving forces for PULLING:\n   - Applied force has upward component $F\\sin\\theta$.\n   - Normal force: $N_{\\text{pull}} = mg - F\\sin\\theta$.\n   - Friction: $f_{\\text{pull}} = \\mu(mg - F\\sin\\theta)$.\n2. Resolving forces for PUSHING:\n   - Applied force has downward component $F\\sin\\theta$.\n   - Normal force: $N_{\\text{push}} = mg + F\\sin\\theta$.\n   - Friction: $f_{\\text{push}} = \\mu(mg + F\\sin\\theta)$.\n3. Since $N_{\\text{pull}} < N_{\\text{push}}$, friction is significantly smaller when pulling, making it much easier.",
    tip="Classic NCERT Question: Pulling has $N = mg - F\\sin\\theta$ (less friction); Pushing has $N = mg + F\\sin\\theta$ (more friction).",
    why_wrong="Option B, C, and D are absurd physical statements."
))

# Q347: Easy
qs.append(make_lom_q(
    num=347,
    question="A body of mass $m$ sliding with initial speed $v$ on a rough horizontal floor comes to rest after covering a distance $s$. If the coefficient of kinetic friction is doubled while the initial speed remains the same, the new stopping distance will be:",
    options={
        "A": "$\\frac{s}{2}$",
        "B": "$2s$",
        "C": "$\\frac{s}{4}$",
        "D": "$4s$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion on a horizontal surface with friction",
    concept="Stopping distance is $s = \\frac{v^2}{2\\mu_k g}$. Since $s \\propto 1/\\mu_k$, doubling the friction coefficient halves the stopping distance.",
    given="Initial speed $v$, original distance $s$, new coefficient $\\mu' = 2\\mu_k$.",
    formula="$s = \\frac{v^2}{2\\mu_k g} \\propto \\frac{1}{\\mu_k}$.",
    steps="1. The deceleration is $a = \\mu_k g$.\n2. From $v_f^2 = v_i^2 - 2as$ with $v_f = 0$, we have $s = \\frac{v^2}{2\\mu_k g}$.\n3. If $\\mu_k$ is doubled to $2\\mu_k$, the new stopping distance is:\n   $s' = \\frac{v^2}{2(2\\mu_k)g} = \\frac{1}{2} \\left(\\frac{v^2}{2\\mu_k g}\\right) = \\frac{s}{2}$.",
    tip="Stopping distance is inversely proportional to friction coefficient ($s \\propto 1/\\mu$) and directly proportional to velocity squared ($s \\propto v^2$)!",
    why_wrong="Option B assumes direct proportionality. Option C squares the factor. Option D inverts and squares."
))

# Q348: Easy
qs.append(make_lom_q(
    num=348,
    question="A horizontal force of $20\\text{ N}$ pulls a block of mass $5\\text{ kg}$ along a rough horizontal floor at a constant speed of $2\\text{ m/s}$. What is the work done against friction over a distance of $10\\text{ m}$?",
    options={
        "A": "200 J",
        "B": "100 J",
        "C": "500 J",
        "D": "20 J"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion on a horizontal surface with friction",
    concept="Because the speed is constant, the acceleration is zero ($a = 0$). By Newton's first law, the frictional force must exactly balance the applied force: $f_k = F = 20\\text{ N}$. The work done against friction is $W = f_k \\times d = 20 \\times 10 = 200\\text{ J}$.",
    given="$F = 20\\text{ N}$, $m = 5\\text{ kg}$, constant speed $v = 2\\text{ m/s}$, distance $d = 10\\text{ m}$.",
    formula="$f_k = F = 20\\text{ N}$; $W = f_k d = 20 \\times 10 = 200\\text{ J}$.",
    steps="1. The block moves with constant velocity, meaning net force is zero: $\\sum F_x = 0$.\n2. Therefore, kinetic friction is $f_k = F = 20\\text{ N}$.\n3. The work done against friction is given by $W = f_k \\cdot d$.\n4. Substituting values: $W = 20\\text{ N} \\times 10\\text{ m} = 200\\text{ J}$.",
    tip="Constant speed $\\implies$ friction equals applied force! No need to calculate $\\mu_k$ separately.",
    why_wrong="Option B is $10 \\times 10$. Option C is $mg \\times d = 50 \\times 10$. Option D is just the force."
))

# Q349: Medium
qs.append(make_lom_q(
    num=349,
    question="A block of mass $m = 10\\text{ kg}$ is moving on a rough horizontal floor with an initial velocity of $15\\text{ m/s}$. The coefficient of kinetic friction is $\\mu_k = 0.3$. Taking $g = 10\\text{ m/s}^2$, how much distance will the block cover in the first 3 seconds?",
    options={
        "A": "31.5 m",
        "B": "37.5 m",
        "C": "45.0 m",
        "D": "22.5 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="First find the total stopping time $t_{\\text{stop}} = \\frac{u}{\\mu_k g} = \\frac{15}{3} = 5\\text{ s}$. Since $t = 3\\text{ s} < t_{\\text{stop}}$, the block is still in motion throughout the entire 3 seconds. Use $s = ut - \\frac{1}{2}at^2$.",
    given="$u = 15\\text{ m/s}$, $\\mu_k = 0.3$, $g = 10\\text{ m/s}^2$, $t = 3\\text{ s}$.",
    formula="$a = \\mu_k g = 3\\text{ m/s}^2$; $s = ut - \\frac{1}{2}at^2$.",
    steps="1. Retardation due to kinetic friction: $a = \\mu_k g = 0.3 \\times 10 = 3\\text{ m/s}^2$.\n2. Total time to come to rest: $t_{\\text{stop}} = \\frac{u}{a} = \\frac{15}{3} = 5\\text{ s}$.\n3. Since the requested time $t = 3\\text{ s}$ is less than $5\\text{ s}$, the block is continuously moving during these 3 seconds.\n4. Distance covered in 3 seconds:\n   $s = ut - \\frac{1}{2}at^2 = (15)(3) - \\frac{1}{2}(3)(3)^2 = 45 - \\frac{27}{2} = 45 - 13.5 = 31.5\\text{ m}$.",
    tip="Always verify $t \\le t_{\\text{stop}}$ first! If $t > t_{\\text{stop}}$, the body stops at $t_{\\text{stop}}$ and stays at rest (friction doesn't accelerate it backward!).",
    why_wrong="Option B (37.5 m) is the total stopping distance over the full 5 seconds ($s = u^2 / 2a = 225 / 6$). Option C (45 m) ignores friction ($ut$). Option D is $15 \\times 3 - 3 \\times 9$."
))

# Q350: Medium
qs.append(make_lom_q(
    num=350,
    question="In the previous question ($m = 10\\text{ kg}$, $u = 15\\text{ m/s}$, $\\mu_k = 0.3$), what is the total distance covered by the block in 6 seconds?",
    options={
        "A": "37.5 m",
        "B": "36.0 m",
        "C": "45.0 m",
        "D": "54.0 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="The block stops completely at $t = t_{\\text{stop}} = 5\\text{ s}$. For $t > 5\\text{ s}$, the block remains stationary at its stopping position. Friction cannot move the body backwards! The distance covered in 6 seconds is identical to the distance covered in 5 seconds.",
    given="$u = 15\\text{ m/s}$, $a = 3\\text{ m/s}^2$, $t = 6\\text{ s}$.",
    formula="$t_{\\text{stop}} = 5\\text{ s}$; $s_{\\text{total}} = \\frac{u^2}{2a} = \\frac{15^2}{2(3)} = 37.5\\text{ m}$.",
    steps="1. Time to come to rest is $t_{\\text{stop}} = \\frac{u}{a} = \\frac{15}{3} = 5\\text{ s}$.\n2. At $t = 5\\text{ s}$, velocity drops to zero, and kinetic friction drops to zero.\n3. The block remains at rest from $t = 5\\text{ s}$ to $t = 6\\text{ s}$.\n4. Therefore, total distance covered in 6 seconds is the distance covered up to 5 seconds:\n   $s = \\frac{u^2}{2a} = \\frac{15^2}{2 \\times 3} = \\frac{225}{6} = 37.5\\text{ m}$.",
    tip="NEET Trap: If you blindly use $s = ut - \\frac{1}{2}at^2$ with $t = 6$, you get $15(6) - 0.5(3)(36) = 90 - 54 = 36\\text{ m}$ (Option B)! That is physically WRONG because friction never drives an object backwards.",
    why_wrong="Option B (36.0 m) is the classic trap of blindly plugging $t = 6$ into the kinematic formula. Option C and D are incorrect."
))

# Q351: Medium
qs.append(make_lom_q(
    num=351,
    question="A block of mass $m = 4\\text{ kg}$ is moving on a rough horizontal surface with velocity $v = 10\\text{ m/s}$. A constant retarding force $F = 8\\text{ N}$ is applied in addition to friction. If $\\mu_k = 0.2$ and $g = 10\\text{ m/s}^2$, what is the total deceleration of the block?",
    options={
        "A": "$4\\text{ m/s}^2$",
        "B": "$2\\text{ m/s}^2$",
        "C": "$6\\text{ m/s}^2$",
        "D": "$1\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="Both the applied retarding force $F$ and the kinetic friction $f_k$ act in the backward direction, opposing motion. Total retarding force is $F_{\\text{retard}} = F + f_k$. Total deceleration is $a = \\frac{F + f_k}{m}$.",
    given="$m = 4\\text{ kg}$, $F = 8\\text{ N}$, $\\mu_k = 0.2$, $g = 10\\text{ m/s}^2$.",
    formula="$f_k = \\mu_k mg = 0.2 \\times 4 \\times 10 = 8\\text{ N}$; $a = \\frac{F + f_k}{m}$.",
    steps="1. Normal force on horizontal surface: $N = mg = 4 \\times 10 = 40\\text{ N}$.\n2. Kinetic friction opposing motion: $f_k = \\mu_k N = 0.2 \\times 40 = 8\\text{ N}$.\n3. Additional applied retarding force: $F = 8\\text{ N}$.\n4. Both forces point in the direction opposing motion.\n5. Total opposing force: $F_{\\text{total}} = F + f_k = 8 + 8 = 16\\text{ N}$.\n6. Total deceleration: $a = \\frac{F_{\\text{total}}}{m} = \\frac{16\\text{ N}}{4\\text{ kg}} = 4\\text{ m/s}^2$.",
    tip="When an external force also opposes motion, add it to friction: $a = \\frac{F + f_k}{m}$!",
    why_wrong="Option B ($2\\text{ m/s}^2$) only counts friction ($8/4$). Option C is $24/4$. Option D is $(8 - 4)/4$."
))

# Q352: Medium
qs.append(make_lom_q(
    num=352,
    question="A heavy crate of mass $100\\text{ kg}$ is at rest on a rough horizontal floor with $\\mu_s = 0.5$ and $\\mu_k = 0.4$. A horizontal force of $600\\text{ N}$ is applied to it for $4\\text{ seconds}$ and then removed. How much further does the crate slide before coming to rest (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "8 m",
        "B": "16 m",
        "C": "32 m",
        "D": "4 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="Phase 1: Acceleration under applied force $F = 600\\text{ N}$. $a_1 = \\frac{F - \\mu_k mg}{m}$. Speed at $t = 4\\text{ s}$ is $v = a_1 t$. Phase 2: Force removed, only kinetic friction retards the crate: $a_2 = \\mu_k g$. Further distance is $s_2 = \\frac{v^2}{2 a_2}$.",
    given="$m = 100\\text{ kg}$, $\\mu_s = 0.5$, $\\mu_k = 0.4$, $F = 600\\text{ N}$, $t_1 = 4\\text{ s}$, $g = 10\\text{ m/s}^2$.",
    formula="$a_1 = \\frac{F - \\mu_k mg}{m}$; $v = a_1 t$; $s_2 = \\frac{v^2}{2\\mu_k g}$.",
    steps="1. Limiting friction: $f_{\\text{lim}} = \\mu_s mg = 0.5 \\times 1000 = 500\\text{ N}$.\n2. Since $F = 600\\text{ N} > 500\\text{ N}$, the crate begins moving.\n3. Kinetic friction during sliding: $f_k = \\mu_k mg = 0.4 \\times 1000 = 400\\text{ N}$.\n4. Accelerating force: $F_{\\text{net}} = 600 - 400 = 200\\text{ N}$.\n5. Acceleration during first 4 seconds: $a_1 = \\frac{200}{100} = 2\\text{ m/s}^2$.\n6. Velocity after 4 seconds: $v = a_1 t_1 = 2 \\times 4 = 8\\text{ m/s}$.\n7. After $F$ is removed, the only horizontal force is kinetic friction: $f_k = 400\\text{ N}$, producing retardation $a_2 = \\frac{400}{100} = 4\\text{ m/s}^2 = \\mu_k g$.\n8. Further distance before stopping: $s_2 = \\frac{v^2}{2 a_2} = \\frac{8^2}{2(4)} = \\frac{64}{8} = 8\\text{ m}$.",
    tip="Multi-phase Motion: Break into Phase 1 (applied force + friction) and Phase 2 (friction alone). Then use $s_2 = \\frac{v^2}{2\\mu_k g}$!",
    why_wrong="Option B (16 m) is the distance covered during Phase 1 ($s_1 = \\frac{1}{2}a_1 t^2 = \\frac{1}{2}(2)(16) = 16\\text{ m}$). The question asks for how much FURTHER it slides! Option C is the total distance ($16 + 8 = 24\\text{ m}$ is not 32). Option D is $8/2$."
))

# Q353: Medium
qs.append(make_lom_q(
    num=353,
    question="A body of mass $2\\text{ kg}$ is thrown horizontally along a rough surface with an initial velocity of $20\\text{ m/s}$. If it comes to rest after $10\\text{ seconds}$, what is the coefficient of kinetic friction (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "0.2",
        "B": "0.4",
        "C": "0.1",
        "D": "0.5"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="From $v = u - at$ with $v = 0$, deceleration is $a = \\frac{u}{t}$. On a horizontal surface, $a = \\mu_k g \\implies \\mu_k = \\frac{a}{g} = \\frac{u}{gt}$.",
    given="$u = 20\\text{ m/s}$, $t = 10\\text{ s}$, $v = 0$, $g = 10\\text{ m/s}^2$.",
    formula="$a = \\frac{u}{t}$; $\\mu_k = \\frac{a}{g} = \\frac{u}{gt}$.",
    steps="1. Using first equation of motion: $v = u - at$.\n2. $0 = 20 - a(10) \\implies 10a = 20 \\implies a = 2\\text{ m/s}^2$.\n3. Since deceleration is caused solely by kinetic friction on the horizontal surface: $a = \\mu_k g$.\n4. Therefore, $\\mu_k = \\frac{a}{g} = \\frac{2\\text{ m/s}^2}{10\\text{ m/s}^2} = 0.2$.",
    tip="Direct relationship: $\\mu_k = \\frac{u}{gt}$. Two-second calculation in NEET!",
    why_wrong="Option B (0.4) is $20 / (10 \\times 5)$. Option C is $0.1$. Option D is $0.5$."
))

# Q354: Medium
qs.append(make_lom_q(
    num=354,
    question="A block of mass $m$ is moving on a rough horizontal surface with kinetic friction coefficient $\\mu_k$. If the block's kinetic energy is $K$, what is the distance it will travel before coming to rest?",
    options={
        "A": "$\\frac{K}{\\mu_k mg}$",
        "B": "$\\frac{2K}{\\mu_k mg}$",
        "C": "$\\frac{K}{2\\mu_k mg}$",
        "D": "$\\frac{\\mu_k mg}{K}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="Work-Energy Theorem: The work done by friction $-f_k \\cdot s$ must absorb the entire initial kinetic energy $K$: $W_{\\text{friction}} = \\Delta K \\implies f_k s = K \\implies s = \\frac{K}{f_k} = \\frac{K}{\\mu_k mg}$.",
    given="Kinetic energy $K$, friction force $f_k = \\mu_k mg$, final $K_f = 0$.",
    formula="$W_{\\text{friction}} = f_k s = K \\implies s = \\frac{K}{\\mu_k mg}$.",
    steps="1. By the work-energy theorem, the net work done on the block equals its change in kinetic energy: $W_{\\text{net}} = K_f - K_i$.\n2. Here, $K_f = 0$ and $K_i = K$.\n3. The only horizontal force doing work is kinetic friction $f_k = \\mu_k mg$ acting opposite to displacement: $W = -f_k s$.\n4. Equating: $-f_k s = 0 - K \\implies f_k s = K$.\n5. Solving for distance $s$: $s = \\frac{K}{f_k} = \\frac{K}{\\mu_k mg}$.",
    tip="Work done by friction equals initial kinetic energy: $f_k s = K \\implies s = \\frac{K}{\\mu_k mg}$!",
    why_wrong="Option B introduces an extra factor of 2. Option C divides by 2. Option D inverts the expression."
))

# Q355: Medium
qs.append(make_lom_q(
    num=355,
    question="Two cars of masses $m_1 = 1000\\text{ kg}$ and $m_2 = 2000\\text{ kg}$ are traveling on the same horizontal road with the same initial speed $v$. If both cars lock their wheels, and the tires have the same coefficient of kinetic friction $\\mu_k$, the ratio of the stopping distance of car 1 to car 2 is:",
    options={
        "A": "1 : 1",
        "B": "1 : 2",
        "C": "2 : 1",
        "D": "1 : 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="Stopping distance is $s = \\frac{v^2}{2\\mu_k g}$. This formula is completely independent of mass! Since both cars have the same initial speed $v$ and same friction coefficient $\\mu_k$, their stopping distances are identical.",
    given="$m_1 = 1000\\text{ kg}$, $m_2 = 2000\\text{ kg}$, same speed $v$, same $\\mu_k$.",
    formula="$s = \\frac{v^2}{2\\mu_k g}$; independent of $m$.",
    steps="1. Retarding force on car 1: $f_1 = \\mu_k m_1 g$. Retardation: $a_1 = f_1 / m_1 = \\mu_k g$.\n2. Retarding force on car 2: $f_2 = \\mu_k m_2 g$. Retardation: $a_2 = f_2 / m_2 = \\mu_k g$.\n3. Both cars experience the exact same deceleration: $a = \\mu_k g$.\n4. With identical initial speed $v$ and identical deceleration $a$, their stopping distances are identical:\n   $s = \\frac{v^2}{2\\mu_k g}$.\n5. Therefore, the ratio $s_1 : s_2 = 1 : 1$.",
    tip="NEET Classic Trap: A heavy truck and a light car traveling at the same speed have the SAME braking distance if their tire-road friction is the same!",
    why_wrong="Option B (1 : 2) mistakenly assumes heavier vehicles take longer to stop. Option C (2 : 1) assumes lighter vehicles take longer. Option D squares the mass ratio."
))

# Q356: Medium
qs.append(make_lom_q(
    num=356,
    question="In the previous setup, what is the ratio of the work done by friction in stopping car 1 to car 2?",
    options={
        "A": "1 : 2",
        "B": "1 : 1",
        "C": "2 : 1",
        "D": "1 : 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on a horizontal surface with friction",
    concept="By the work-energy theorem, the work done by friction equals the initial kinetic energy: $W_f = \\frac{1}{2}mv^2$. Since initial kinetic energy is directly proportional to mass, the ratio of work done is $\\frac{W_1}{W_2} = \\frac{m_1}{m_2} = \\frac{1000}{2000} = 1 : 2$.",
    given="$m_1 = 1000\\text{ kg}$, $m_2 = 2000\\text{ kg}$, same initial speed $v$.",
    formula="$W_f = K_i = \\frac{1}{2}m v^2 \\implies \\frac{W_1}{W_2} = \\frac{m_1}{m_2}$.",
    steps="1. Work done by friction in bringing a car to rest equals its initial kinetic energy.\n2. Initial kinetic energy of car 1: $K_1 = \\frac{1}{2}m_1 v^2$.\n3. Initial kinetic energy of car 2: $K_2 = \\frac{1}{2}m_2 v^2$.\n4. Taking the ratio: $\\frac{W_1}{W_2} = \\frac{K_1}{K_2} = \\frac{m_1}{m_2} = \\frac{1000}{2000} = \\frac{1}{2}$.\n5. Thus, the ratio of work done is $1 : 2$.",
    tip="Compare carefully:\n- Stopping distance ratio: $1 : 1$\n- Stopping time ratio: $1 : 1$\n- Work done by friction ratio: $1 : 2$ (because braking force is twice as large for the 2000 kg car)!",
    why_wrong="Option B (1 : 1) confuses work done with stopping distance. Option C and D have wrong mass proportions."
))

# Q357: Hard
qs.append(make_lom_q(
    num=357,
    question="A block of mass $m$ rests on a rough horizontal plank. The plank starts moving horizontally with an acceleration $a > \\mu_s g$. The acceleration of the block relative to the ground is:",
    options={
        "A": "$\\mu_k g$",
        "B": "$a - \\mu_k g$",
        "C": "$a$",
        "D": "$\\mu_s g$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on a horizontal surface with friction",
    concept="When the plank accelerates at $a > \\mu_s g$, slipping inevitably occurs between the plank and the block. The only horizontal force acting on the block in the ground frame is kinetic friction from the plank: $f_k = \\mu_k mg$. From Newton's second law in the ground frame, the acceleration of the block is $a_{\\text{block}} = f_k / m = \\mu_k g$.",
    given="Plank accelerates at $a > \\mu_s g$, block mass $m$, friction $\\mu_k$.",
    formula="$f_k = \\mu_k mg$; $a_{\\text{block, ground}} = \\frac{f_k}{m} = \\mu_k g$.",
    steps="1. Since $a > \\mu_s g$, static friction is insufficient to accelerate the block at $a$.\n2. Relative slipping occurs between the plank and the block.\n3. Because the plank moves forward faster than the block, the kinetic friction exerted by the plank on the block acts forward.\n4. The magnitude of this kinetic friction is $f_k = \\mu_k N = \\mu_k mg$.\n5. In the inertial ground frame, $f_k$ is the SOLE horizontal force acting on the block.\n6. Newton's second law on the block: $f_k = m a_{\\text{block}} \\implies a_{\\text{block}} = \\frac{\\mu_k mg}{m} = \\mu_k g$.",
    tip="Ground frame acceleration of the slipping block is $\\mu_k g$! Its acceleration RELATIVE to the plank is $a_{\\text{rel}} = a - \\mu_k g$ backwards.",
    why_wrong="Option B ($a - \\mu_k g$) is the acceleration of the block RELATIVE TO THE PLANK, not relative to the ground! Read frames of reference carefully. Option C assumes no slip. Option D uses static coefficient."
))

# Q358: Hard
qs.append(make_lom_q(
    num=358,
    question="A body of mass $m$ slides across a rough horizontal surface whose coefficient of friction varies with distance $x$ from the origin as $\\mu(x) = kx$, where $k$ is a constant. If the body was projected from $x = 0$ with initial velocity $v_0$, what is the total distance $x_{\\text{stop}}$ it travels before coming to rest?",
    options={
        "A": "$\\sqrt{\\frac{v_0^2}{kg}}$",
        "B": "$\\frac{v_0^2}{kg}$",
        "C": "$\\sqrt{\\frac{2v_0^2}{kg}}$",
        "D": "$\\frac{v_0}{kg}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on a horizontal surface with friction",
    concept="Work-Energy Theorem with variable friction: $W = -\\int_0^{x_f} f(x) dx = -\\int_0^{x_f} \\mu(x) mg dx = -mg k \\int_0^{x_f} x dx = -\\frac{1}{2}mg k x_f^2$. Setting work equal to $\\Delta K = 0 - \\frac{1}{2}mv_0^2$ gives $\\frac{1}{2}mg k x_f^2 = \\frac{1}{2}mv_0^2 \\implies x_f = \\sqrt{\\frac{v_0^2}{kg}}$.",
    given="$\\mu(x) = kx$, initial velocity $v_0$ at $x = 0$.",
    formula="$\\Delta K = W_{\\text{friction}} \\implies \\frac{1}{2}mv_0^2 = \\int_0^{x_f} kx mg dx = \\frac{1}{2}mg k x_f^2 \\implies x_f = \\sqrt{\\frac{v_0^2}{kg}}$.",
    steps="1. Frictional force at position $x$ is $f(x) = \\mu(x) mg = (kx) mg$.\n2. Work done by friction as the body moves from $x = 0$ to $x_f$:\n   $W = -\\int_0^{x_f} f(x) dx = -mg k \\int_0^{x_f} x dx = -\\frac{1}{2}mg k x_f^2$.\n3. By the work-energy theorem: $W = K_f - K_i = 0 - \\frac{1}{2}mv_0^2$.\n4. Equating magnitudes: $\\frac{1}{2}mg k x_f^2 = \\frac{1}{2}mv_0^2$.\n5. Cancelling $\\frac{1}{2}m$: $g k x_f^2 = v_0^2 \\implies x_f^2 = \\frac{v_0^2}{kg}$.\n6. Taking square root: $x_f = \\sqrt{\\frac{v_0^2}{kg}} = \\frac{v_0}{\\sqrt{kg}}$.",
    tip="Whenever friction varies as $\\mu = kx$, integrate work: $\\int kx mg dx = \\frac{1}{2}kmg x^2$. Stopping distance is $x_f = \\frac{v_0}{\\sqrt{kg}}$!",
    why_wrong="Option B misses taking the square root. Option C has an incorrect factor of 2. Option D has incorrect dimensions."
))

# Q359: Hard
qs.append(make_lom_q(
    num=359,
    question="A block of mass $m$ is given an initial velocity $v_0$ on a rough horizontal floor. The coefficient of friction is $\\mu_k$. The power dissipated by friction as a function of time $t$ until the block comes to rest is:",
    options={
        "A": "$\\mu_k mg (v_0 - \\mu_k gt)$",
        "B": "$\\mu_k mg v_0$",
        "C": "$\\mu_k mg (v_0 + \\mu_k gt)$",
        "D": "$\\frac{1}{2}\\mu_k mg (v_0 - \\mu_k gt)^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on a horizontal surface with friction",
    concept="Instantaneous power dissipated by friction is $P(t) = f_k \\cdot v(t)$. Frictional force is constant: $f_k = \\mu_k mg$. Velocity at time $t$ is $v(t) = v_0 - at = v_0 - \\mu_k gt$. Thus, $P(t) = \\mu_k mg(v_0 - \\mu_k gt)$.",
    given="Initial speed $v_0$, constant friction $f_k = \\mu_k mg$, deceleration $a = \\mu_k g$.",
    formula="$P(t) = f_k v(t) = \\mu_k mg (v_0 - \\mu_k gt)$ for $0 \\le t \\le \\frac{v_0}{\\mu_k g}$.",
    steps="1. Velocity decreases linearly with time: $v(t) = v_0 - at = v_0 - \\mu_k gt$.\n2. Kinetic friction has constant magnitude $f_k = \\mu_k N = \\mu_k mg$.\n3. Instantaneous rate of mechanical energy dissipation (power) is $P = |\\vec{f}_k \\cdot \\vec{v}| = f_k v(t)$.\n4. Substituting expressions: $P(t) = \\mu_k mg (v_0 - \\mu_k gt)$.\n5. Power starts at a maximum $\\mu_k mg v_0$ at $t = 0$ and decreases linearly to zero at $t = t_{\\text{stop}} = \\frac{v_0}{\\mu_k g}$.",
    tip="Frictional power decreases linearly with time because speed decreases linearly with time!",
    why_wrong="Option B assumes constant power, but speed is decreasing. Option C adds velocity instead of subtracting. Option D has incorrect units (not power)."
))

# Q360: Hard
qs.append(make_lom_q(
    num=360,
    question="A block of mass $m$ is placed on an infinitely long conveyor belt moving with velocity $v$. If the block is given an initial velocity $2v$ in the SAME direction as the belt, the time taken for the relative sliding between the block and the belt to cease is (coefficient of kinetic friction $\\mu_k$):",
    options={
        "A": "$\\frac{v}{\\mu_k g}$",
        "B": "$\\frac{2v}{\\mu_k g}$",
        "C": "$\\frac{3v}{\\mu_k g}$",
        "D": "$\\frac{v}{2\\mu_k g}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on a horizontal surface with friction",
    concept="Relative velocity of the block with respect to the belt initially is $v_{\\text{rel}} = 2v - v = v$ forward. Because the block moves faster than the belt, kinetic friction from the belt acts BACKWARD on the block with magnitude $f_k = \\mu_k mg$, producing deceleration $a = \\mu_k g$. Relative sliding ceases when the block's speed slows to $v$. Time taken is $t = \\frac{\\Delta v}{a} = \\frac{2v - v}{\\mu_k g} = \\frac{v}{\\mu_k g}$.",
    given="Belt velocity $v$, block initial velocity $2v$ in same direction, coefficient $\\mu_k$.",
    formula="$\\Delta v = 2v - v = v$; $a = \\mu_k g$; $t = \\frac{\\Delta v}{a} = \\frac{v}{\\mu_k g}$.",
    steps="1. In the ground frame, the belt moves forward at speed $v$.\n2. The block is launched forward at speed $2v$.\n3. Since the block's speed exceeds the belt's speed, the block slides forward relative to the belt.\n4. Kinetic friction opposes this relative motion, acting in the backward direction on the block: $f_k = \\mu_k mg$.\n5. The deceleration of the block in the ground frame is $a = \\frac{f_k}{m} = \\mu_k g$.\n6. Slipping ceases when the block's velocity drops to match the belt's velocity $v$:\n   $v(t) = v_{\\text{initial}} - at \\implies v = 2v - (\\mu_k g)t$.\n7. Solving for time $t$: $(\\mu_k g)t = v \\implies t = \\frac{v}{\\mu_k g}$.",
    tip="Relative motion insight: Slipping stops when velocities match! $\\Delta v = 2v - v = v$, so $t = \\frac{\\Delta v}{\\mu_k g} = \\frac{v}{\\mu_k g}$.",
    why_wrong="Option B ($2v / \\mu_k g$) is the time to come to rest relative to the ground, not the belt. Option C adds the velocities. Option D halves the time."
))

# ==============================================================================
# Topic 23: Motion on an inclined plane with friction (Q361 to Q375: 3 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q361: Easy
qs.append(make_lom_q(
    num=361,
    question="A block of mass $m$ slides down a rough inclined plane of inclination $\\theta$. Which force is responsible for retarding its acceleration compared to a smooth inclined plane?",
    options={
        "A": "Kinetic friction acting up the inclined plane",
        "B": "Static friction acting down the inclined plane",
        "C": "Normal reaction acting into the inclined plane",
        "D": "Centrifugal force acting horizontally"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion on an inclined plane",
    concept="When a body slides down an inclined plane, the kinetic friction acts in the direction opposite to the relative velocity, which is parallel to the inclined plane pointing upwards: $f_k = \\mu_k mg\\cos\\theta$.",
    given="Block sliding down a rough inclined plane.",
    formula="$a = g\\sin\\theta - \\frac{f_k}{m} = g(\\sin\\theta - \\mu_k\\cos\\theta)$.",
    steps="1. The block slides downwards along the inclined surface.\n2. By definition, friction opposes relative sliding motion between contacting surfaces.\n3. Therefore, kinetic friction acts parallel to the incline pointing upwards.\n4. This upward friction reduces the net downward driving force from $mg\\sin\\theta$ to $(mg\\sin\\theta - f_k)$, thus retarding the acceleration.",
    tip="Sliding down $\\implies$ friction acts UP the incline! Sliding up $\\implies$ friction acts DOWN the incline.",
    why_wrong="Option B is wrong because active sliding involves kinetic friction, not static. Option C acts perpendicular to motion and does zero work. Option D does not exist here."
))

# Q362: Easy
qs.append(make_lom_q(
    num=362,
    question="For a block sliding down a rough inclined plane of angle $\\theta$ with coefficient of kinetic friction $\\mu_k$, the normal reaction force is:",
    options={
        "A": "$mg \\cos\\theta$",
        "B": "$mg \\sin\\theta$",
        "C": "$mg$",
        "D": "$mg \\tan\\theta$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion on an inclined plane",
    concept="Perpendicular to the inclined plane, the block has zero acceleration. Therefore, the normal force exactly balances the component of gravity perpendicular to the incline: $N = mg\\cos\\theta$.",
    given="Inclined plane of inclination $\\theta$, mass $m$.",
    formula="$\\sum F_\\perp = N - mg\\cos\\theta = 0 \\implies N = mg\\cos\\theta$.",
    steps="1. Choose an axis perpendicular to the inclined plane.\n2. The component of gravity along this axis into the plane is $mg\\cos\\theta$.\n3. The normal reaction $N$ acts perpendicular to the plane outwards.\n4. Because there is no motion or acceleration into or off the plane, these two forces must balance:\n   $N = mg\\cos\\theta$.",
    tip="On any simple inclined plane without extra external forces, $N$ is ALWAYS $mg\\cos\\theta$!",
    why_wrong="Option B is the parallel driving component. Option C is the total weight. Option D is incorrect."
))

# Q363: Easy
qs.append(make_lom_q(
    num=363,
    question="Under what condition will a block released from rest on a rough inclined plane of inclination $\\theta$ begin to slide down?",
    options={
        "A": "$\\tan\\theta > \\mu_s$",
        "B": "$\\tan\\theta < \\mu_s$",
        "C": "$\\sin\\theta < \\mu_s$",
        "D": "$\\cos\\theta > \\mu_s$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion on an inclined plane",
    concept="Motion initiates only when the component of gravity down the incline exceeds the maximum limiting static friction: $mg\\sin\\theta > \\mu_s mg\\cos\\theta \\implies \\tan\\theta > \\mu_s$.",
    given="Block released from rest on rough incline $\\theta$.",
    formula="$mg\\sin\\theta > \\mu_s mg\\cos\\theta \\iff \\tan\\theta > \\mu_s$.",
    steps="1. Downward gravitational pull along incline: $F_g = mg\\sin\\theta$.\n2. Maximum opposing limiting static friction: $f_{\\text{lim}} = \\mu_s mg\\cos\\theta$.\n3. For motion to start, $F_g$ must overcome $f_{\\text{lim}}$:\n   $mg\\sin\\theta > \\mu_s mg\\cos\\theta$.\n4. Dividing both sides by $mg\\cos\\theta$:\n   $\\frac{\\sin\\theta}{\\cos\\theta} > \\mu_s \\implies \\tan\\theta > \\mu_s$.",
    tip="Condition to start sliding: $\\tan\\theta > \\mu_s$ (inclination exceeds angle of repose $\\theta > \\theta_r$)!",
    why_wrong="Option B is the condition to remain at rest. Option C and D use wrong trigonometric components."
))

# Q364: Medium
qs.append(make_lom_q(
    num=364,
    question="A block of mass $m = 4\\text{ kg}$ slides down an inclined plane of inclination $30^\\circ$ with an acceleration of $1\\text{ m/s}^2$. What is the coefficient of kinetic friction $\\mu_k$ between the block and the plane (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$\\frac{4}{5\\sqrt{3}} \\approx 0.462$",
        "B": "$\\frac{1}{\\sqrt{3}} \\approx 0.577$",
        "C": "0.25",
        "D": "0.1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="Acceleration down incline is $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$. Rearranging: $\\mu_k\\cos\\theta = \\sin\\theta - \\frac{a}{g} \\implies \\mu_k = \\frac{g\\sin\\theta - a}{g\\cos\\theta}$.",
    given="$m = 4\\text{ kg}$, $\\theta = 30^\\circ$, $a = 1\\text{ m/s}^2$, $g = 10\\text{ m/s}^2$.",
    formula="$a = g(\\sin 30^\\circ - \\mu_k\\cos 30^\\circ) \\implies \\mu_k = \\frac{g\\sin 30^\\circ - a}{g\\cos 30^\\circ}$.",
    steps="1. Calculate $g\\sin 30^\\circ = 10 \\times 0.5 = 5\\text{ m/s}^2$.\n2. Calculate $g\\cos 30^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\text{ m/s}^2$.\n3. Substitute into the acceleration formula:\n   $1 = 5 - \\mu_k(5\\sqrt{3})$.\n4. $5\\sqrt{3}\\mu_k = 5 - 1 = 4$.\n5. $\\mu_k = \\frac{4}{5\\sqrt{3}} = \\frac{4}{5 \\times 1.732} = \\frac{4}{8.66} \\approx 0.462$.",
    tip="Formula for finding friction from acceleration down incline: $\\mu_k = \\tan\\theta - \\frac{a}{g\\cos\\theta}$!",
    why_wrong="Option B is $\\tan 30^\\circ$ (which gives $a = 0$). Option C and D are incorrect calculations."
))

# Q365: Medium
qs.append(make_lom_q(
    num=365,
    question="A block of mass $m = 2\\text{ kg}$ is released from rest from the top of an inclined plane of length $L = 10\\text{ m}$ and angle $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). If $\\mu_k = 0.25$ and $g = 10\\text{ m/s}^2$, what is the speed of the block when it reaches the bottom of the incline?",
    options={
        "A": "$8.94\\text{ m/s}$",
        "B": "$10.0\\text{ m/s}$",
        "C": "$6.32\\text{ m/s}$",
        "D": "$4.00\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="Find acceleration down incline $a = g(\\sin 37^\\circ - \\mu_k\\cos 37^\\circ)$. Then use $v^2 = u^2 + 2aL = 2aL$ to find bottom speed $v = \\sqrt{2aL}$.",
    given="$L = 10\\text{ m}$, $\\theta = 37^\\circ$, $\\mu_k = 0.25$, $u = 0$, $g = 10\\text{ m/s}^2$.",
    formula="$a = g(\\sin 37^\\circ - \\mu_k\\cos 37^\\circ) = 10(0.6 - 0.25 \\times 0.8) = 10(0.6 - 0.2) = 4\\text{ m/s}^2$; $v = \\sqrt{2aL}$.",
    steps="1. Acceleration down the plane:\n   $a = g(\\sin 37^\\circ - \\mu_k\\cos 37^\\circ) = 10(0.6 - 0.25 \\times 0.8) = 10(0.6 - 0.20) = 10 \\times 0.4 = 4\\text{ m/s}^2$.\n2. Using third equation of motion starting from rest ($u = 0$):\n   $v^2 = 2aL = 2 \\times 4\\text{ m/s}^2 \\times 10\\text{ m} = 80\\text{ m}^2/\\text{s}^2$.\n3. Speed at the bottom: $v = \\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5} \\approx 4 \\times 2.236 = 8.944 \\approx 8.94\\text{ m/s}$.",
    tip="For $\\theta = 37^\\circ$, $\\sin = 0.6$ and $\\cos = 0.8$. Standard 3-4-5 triangle numbers are ubiquitous in NEET!",
    why_wrong="Option B ($10\\text{ m/s}$) is the speed on a smooth plane ($v = \\sqrt{2(6)(10)} \\approx 10.95$). Option C ($6.32\\text{ m/s}$) is $\\sqrt{40}$. Option D is $a$."
))

# Q366: Medium
qs.append(make_lom_q(
    num=366,
    question="In the previous question, what is the time taken by the block to slide down the $10\\text{ m}$ length of the incline?",
    options={
        "A": "$\\sqrt{5} \\approx 2.24\\text{ s}$",
        "B": "$2.5\\text{ s}$",
        "C": "$1.8\\text{ s}$",
        "D": "$5.0\\text{ s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="Using kinematic equation $L = \\frac{1}{2}at^2$, the time of descent is $t = \\sqrt{\\frac{2L}{a}}$.",
    given="$L = 10\\text{ m}$, $a = 4\\text{ m/s}^2$, $u = 0$.",
    formula="$t = \\sqrt{\\frac{2L}{a}} = \\sqrt{\\frac{2 \\times 10}{4}} = \\sqrt{5} \\approx 2.24\\text{ s}$.",
    steps="1. Acceleration down the plane is $a = 4\\text{ m/s}^2$.\n2. Distance is $L = 10\\text{ m}$, initial velocity $u = 0$.\n3. $L = \\frac{1}{2}at^2 \\implies 10 = \\frac{1}{2}(4)t^2 = 2t^2$.\n4. $t^2 = 5 \\implies t = \\sqrt{5} \\approx 2.236 \\approx 2.24\\text{ s}$.",
    tip="Time to slide down an incline of length $L$: $t = \\sqrt{\\frac{2L}{g(\\sin\\theta - \\mu_k\\cos\\theta)}}$.",
    why_wrong="Option B (2.5 s) is $10/4$. Option C is $v/a$ with rounded numbers. Option D is $10/2$."
))

# Q367: Medium
qs.append(make_lom_q(
    num=367,
    question="A block is projected UP an inclined plane of inclination $\\theta = 30^\\circ$ with an initial velocity $u = 10\\text{ m/s}$. If $\\mu_k = \\frac{1}{2\\sqrt{3}}$ and $g = 10\\text{ m/s}^2$, what is the distance traveled along the incline before coming momentarily to rest?",
    options={
        "A": "6.67 m",
        "B": "10 m",
        "C": "5 m",
        "D": "8 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="When moving UP the incline, both gravity and friction act down the plane: $a_{\\text{up}} = g(\\sin\\theta + \\mu_k\\cos\\theta)$. Stopping distance is $s = \\frac{u^2}{2a_{\\text{up}}}$.",
    given="$u = 10\\text{ m/s}$, $\\theta = 30^\\circ$, $\\mu_k = \\frac{1}{2\\sqrt{3}}$, $g = 10\\text{ m/s}^2$.",
    formula="$a_{\\text{up}} = g\\left(\\sin 30^\\circ + \\mu_k\\cos 30^\\circ\\right)$; $s = \\frac{u^2}{2a_{\\text{up}}}$.",
    steps="1. Retardation going UP the plane:\n   $a_{\\text{up}} = 10 \\left(0.5 + \\frac{1}{2\\sqrt{3}} \\times \\frac{\\sqrt{3}}{2}\\right) = 10 \\left(0.5 + \\frac{1}{4}\\right) = 10 \\times 0.75 = 7.5\\text{ m/s}^2$.\n2. Final velocity at highest point is $v = 0$.\n3. Using $v^2 = u^2 - 2as$:\n   $0 = (10)^2 - 2(7.5)s = 100 - 15s$.\n4. $s = \\frac{100}{15} = \\frac{20}{3} \\approx 6.67\\text{ m}$.",
    tip="Notice: Going UP, $\\sin 30^\\circ + \\mu_k\\cos 30^\\circ = 0.5 + 0.25 = 0.75$, so $a = 7.5\\text{ m/s}^2$. Distance is $100 / (2 \\times 7.5) = 6.67\\text{ m}$!",
    why_wrong="Option B (10 m) is for a frictionless plane ($100 / (2 \\times 5)$). Option C is $100 / 20$. Option D is an arbitrary round number."
))

# Q368: Medium
qs.append(make_lom_q(
    num=368,
    question="In the previous question ($s = 6.67\\text{ m}$, $\\theta = 30^\\circ$, $\\mu_s = \\mu_k = \\frac{1}{2\\sqrt{3}}$), will the block slide back down after reaching the highest point?",
    options={
        "A": "Yes, because $\\tan 30^\\circ > \\mu_s$",
        "B": "No, because it comes to rest permanently",
        "C": "No, because $\\tan 30^\\circ < \\mu_s$",
        "D": "Yes, but only if pushed"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="Check the angle of repose condition: $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$. The static friction coefficient is $\\mu_s = \\frac{1}{2\\sqrt{3}} \\approx 0.289$. Since $\\tan 30^\\circ > \\mu_s$ ($0.577 > 0.289$), the downward gravity component exceeds limiting friction, so the block WILL slide back down!",
    given="$\\theta = 30^\\circ$, $\\mu_s = \\frac{1}{2\\sqrt{3}} \\approx 0.289$.",
    formula="Condition to slide down: $\\tan\\theta > \\mu_s$.",
    steps="1. Calculate $\\tan\\theta = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$.\n2. Compare with $\\mu_s = \\frac{1}{2\\sqrt{3}} = 0.5 \\times 0.577 \\approx 0.289$.\n3. Since $\\tan 30^\\circ > \\mu_s$ ($0.577 > 0.289$), the component of gravity down the incline ($mg\\sin 30^\\circ$) is TWICE the maximum static friction ($f_{\\text{lim}} = \\mu_s mg\\cos 30^\\circ$).\n4. Therefore, as soon as upward velocity drops to zero, the unbalanced downward force accelerates the block back down.",
    tip="Always compare $\\tan\\theta$ with $\\mu_s$! If $\\tan\\theta > \\mu_s$, it slides back down. If $\\tan\\theta \\le \\mu_s$, it stops and remains stuck permanently at the top.",
    why_wrong="Option B incorrectly assumes it sticks at the top. Option C makes an arithmetic error comparing $1/\\sqrt{3}$ with $1/(2\\sqrt{3})$."
))

# Q369: Medium
qs.append(make_lom_q(
    num=369,
    question="In the previous setup, what will be the speed of the block when it returns to the bottom of the incline?",
    options={
        "A": "$5.77\\text{ m/s}$",
        "B": "$10.0\\text{ m/s}$",
        "C": "$7.07\\text{ m/s}$",
        "D": "$4.50\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="Descent acceleration is $a_{\\text{down}} = g(\\sin 30^\\circ - \\mu_k\\cos 30^\\circ) = 10(0.5 - 0.25) = 2.5\\text{ m/s}^2$. Distance slid down is $s = \\frac{20}{3}\\text{ m}$. Velocity at bottom is $v = \\sqrt{2 a_{\\text{down}} s} = \\sqrt{2 \\times 2.5 \\times \\frac{20}{3}} = \\sqrt{\\frac{100}{3}} = \\frac{10}{\\sqrt{3}} \\approx 5.77\\text{ m/s}$.",
    given="$s = \\frac{20}{3}\\text{ m}$, $a_{\\text{down}} = 2.5\\text{ m/s}^2$.",
    formula="$v = \\sqrt{2 a_{\\text{down}} s} = \\sqrt{2 \\times 2.5 \\times \\frac{20}{3}} = \\frac{10}{\\sqrt{3}} \\approx 5.77\\text{ m/s}$.",
    steps="1. Descent acceleration:\n   $a_{\\text{down}} = g(\\sin 30^\\circ - \\mu_k\\cos 30^\\circ) = 10(0.5 - 0.25) = 2.5\\text{ m/s}^2$.\n2. Distance to travel back down: $s = \\frac{20}{3}\\text{ m}$.\n3. Using $v^2 = 2 a_{\\text{down}} s$:\n   $v^2 = 2 \\times 2.5 \\times \\frac{20}{3} = 5 \\times \\frac{20}{3} = \\frac{100}{3}$.\n4. Taking square root: $v = \\frac{10}{\\sqrt{3}} \\approx \\frac{10}{1.732} \\approx 5.77\\text{ m/s}$.",
    tip="Return speed formula: $v = u \\sqrt{\\frac{a_{\\text{down}}}{a_{\\text{up}}}} = 10 \\sqrt{\\frac{2.5}{7.5}} = 10\\sqrt{\\frac{1}{3}} = \\frac{10}{\\sqrt{3}} \\approx 5.77\\text{ m/s}$! Elegant shortcut.",
    why_wrong="Option B ($10\\text{ m/s}$) is the launch speed (only true if frictionless). Option C is $\\sqrt{50}$. Option D is a rounded guess."
))

# Q370: Medium
qs.append(make_lom_q(
    num=370,
    question="A block of mass $m$ is placed on an inclined plane of inclination $\\theta$. The upper half of the incline is perfectly smooth, while the lower half is rough with coefficient of kinetic friction $\\mu_k$. If the block starts from rest at the top and comes to rest just as it reaches the bottom, the coefficient $\\mu_k$ is:",
    options={
        "A": "$2\\tan\\theta$",
        "B": "$\\tan\\theta$",
        "C": "$\\frac{1}{2}\\tan\\theta$",
        "D": "$4\\tan\\theta$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="Work-Energy Theorem: Total work done from top to bottom must be zero since initial and final kinetic energies are zero. Gravity does positive work over total length $L$: $W_g = mg L\\sin\\theta$. Friction does negative work only on the lower half of length $L/2$: $W_f = -(\\mu_k mg\\cos\\theta)(L/2)$. Net work: $mg L\\sin\\theta - \\mu_k mg\\cos\\theta \\frac{L}{2} = 0 \\implies \\mu_k = 2\\tan\\theta$.",
    given="Top half smooth ($L/2$), bottom half rough ($L/2$), $v_i = 0$, $v_f = 0$.",
    formula="$W_{\\text{net}} = W_g + W_f = 0 \\implies mg L\\sin\\theta = \\mu_k mg\\cos\\theta \\frac{L}{2} \\implies \\mu_k = 2\\tan\\theta$.",
    steps="1. Total length of incline is $L$. The block starts at rest at the top ($K_i = 0$) and stops at the bottom ($K_f = 0$).\n2. By the work-energy theorem: $\\Delta K = W_{\\text{total}} = 0$.\n3. Work done by gravity along the entire length $L$:\n   $W_g = (mg\\sin\\theta) L$.\n4. Friction acts only over the bottom half of length $L/2$:\n   $W_f = -(f_k) \\left(\\frac{L}{2}\\right) = -(\\mu_k mg\\cos\\theta) \\left(\\frac{L}{2}\\right)$.\n5. Setting total work to zero:\n   $mg L\\sin\\theta - \\mu_k mg\\cos\\theta \\frac{L}{2} = 0$.\n6. Dividing by $mg L\\cos\\theta$:\n   $\\tan\\theta - \\frac{\\mu_k}{2} = 0 \\implies \\mu_k = 2\\tan\\theta$.",
    tip="Super Classic NEET Question: If upper half is smooth and lower half rough, and block stops at bottom, $\\mu = 2\\tan\\theta$! Memorize this result.",
    why_wrong="Option B ($\\tan\\theta$) gives zero acceleration on the second half, so it would never stop. Option C is $\\frac{1}{2}\\tan\\theta$. Option D is $4\\tan\\theta$."
))

# Q371: Medium
qs.append(make_lom_q(
    num=371,
    question="In the previous question, if the upper $(1 - \\eta)$ fraction of the incline is smooth and the lower fraction $\\eta$ is rough, what is $\\mu_k$ if the block stops at the bottom?",
    options={
        "A": "$\\frac{\\tan\\theta}{\\eta}$",
        "B": "$\\eta \\tan\\theta$",
        "C": "$\\frac{1 - \\eta}{\\eta} \\tan\\theta$",
        "D": "$\\frac{\\tan\\theta}{1 - \\eta}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion on an inclined plane",
    concept="Work done by gravity over full length $L$ is $mg L\\sin\\theta$. Work done by friction over length $\\eta L$ is $-\\mu_k mg\\cos\\theta (\\eta L)$. For net work to be zero: $mg L\\sin\\theta = \\mu_k mg\\cos\\theta (\\eta L) \\implies \\mu_k = \\frac{\\tan\\theta}{\\eta}$.",
    given="Rough fraction is $\\eta$, full length $L$, $v_i = 0$, $v_f = 0$.",
    formula="$mg L\\sin\\theta = \\mu_k mg\\cos\\theta (\\eta L) \\implies \\mu_k = \\frac{\\tan\\theta}{\\eta}$.",
    steps="1. Total work done by gravity over the full length $L$ is $W_g = (mg\\sin\\theta) L$.\n2. Friction only acts over the rough segment of length $\\eta L$.\n3. Work done by friction is $W_f = -f_k (\\eta L) = -(\\mu_k mg\\cos\\theta) (\\eta L)$.\n4. For initial and final kinetic energies to both be zero, net work must be zero:\n   $mg L\\sin\\theta - \\mu_k mg\\cos\\theta (\\eta L) = 0$.\n5. Dividing by $mg L\\cos\\theta$:\n   $\\tan\\theta = \\mu_k \\eta \\implies \\mu_k = \\frac{\\tan\\theta}{\\eta}$.\n6. Notice that for $\\eta = 1/2$, this yields $\\mu_k = 2\\tan\\theta$, matching the previous problem perfectly.",
    tip="General formula: $\\mu_k = \\frac{\\tan\\theta}{\\eta}$ where $\\eta$ is the rough fraction of the incline!",
    why_wrong="Option B multiplies by $\\eta$ instead of dividing. Option C and D use wrong length fractions."
))

# Q372: Hard
qs.append(make_lom_q(
    num=372,
    question="A block of mass $m$ is placed on a rough inclined plane of angle $\\theta = 45^\\circ$. The coefficient of static friction is $\\mu_s = 0.5$. What is the minimum horizontal force $F$ applied to the block to prevent it from sliding down the incline?",
    options={
        "A": "$\\frac{1}{3} mg \\approx 0.33 mg$",
        "B": "$0.5 mg$",
        "C": "$mg$",
        "D": "$\\frac{2}{3} mg$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on an inclined plane",
    concept="For a HORIZONTAL pushing force $F$ on an incline: Force parallel to incline pointing up is $F\\cos\\theta$. Force perpendicular pushing into incline is $F\\sin\\theta$. Normal force is $N = mg\\cos\\theta + F\\sin\\theta$. Limiting friction acts up the plane: $f_{\\text{lim}} = \\mu_s(mg\\cos\\theta + F\\sin\\theta)$. Impending slide down requires: $F\\cos\\theta + f_{\\text{lim}} = mg\\sin\\theta \\implies F = mg \\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta}$. For $\\theta = 45^\\circ$, $F = mg \\frac{1 - \\mu_s}{1 + \\mu_s}$.",
    given="$\\theta = 45^\\circ$, $\\mu_s = 0.5$, horizontal force $F$, preventing downward sliding.",
    formula="$F_{\\text{min}} = mg \\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta} = mg \\frac{1 - \\mu_s}{1 + \\mu_s}$ for $\\theta = 45^\\circ$.",
    steps="1. Resolve forces along and perpendicular to the inclined plane:\n   - Gravity: $mg\\sin 45^\\circ$ down the plane, $mg\\cos 45^\\circ$ into the plane.\n   - Horizontal force $F$: $F\\cos 45^\\circ$ up the plane, $F\\sin 45^\\circ$ into the plane.\n2. Normal reaction: $N = mg\\cos 45^\\circ + F\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}(mg + F)$.\n3. Because the block tends to slide down, limiting static friction acts UP the plane:\n   $f_{\\text{lim}} = \\mu_s N = \\frac{\\mu_s}{\\sqrt{2}}(mg + F)$.\n4. Upward forces along incline balance downward component of gravity:\n   $F\\cos 45^\\circ + f_{\\text{lim}} = mg\\sin 45^\\circ$.\n5. $\\frac{F}{\\sqrt{2}} + \\frac{\\mu_s}{\\sqrt{2}}(mg + F) = \\frac{mg}{\\sqrt{2}}$.\n6. Multiplying by $\\sqrt{2}$: $F(1 + \\mu_s) + \\mu_s mg = mg \\implies F(1 + \\mu_s) = mg(1 - \\mu_s)$.\n7. Therefore, $F = mg \\frac{1 - \\mu_s}{1 + \\mu_s}$.\n8. Substitute $\\mu_s = 0.5$: $F = mg \\frac{1 - 0.5}{1 + 0.5} = mg \\frac{0.5}{1.5} = \\frac{1}{3}mg \\approx 0.33 mg$.",
    tip="At $45^\\circ$, minimum horizontal force to prevent slip is $F = mg\\frac{1 - \\mu_s}{1 + \\mu_s}$. Minimum horizontal force to push up is $F = mg\\frac{1 + \\mu_s}{1 - \\mu_s}$!",
    why_wrong="Option B ($0.5 mg$) ignores the friction increase due to $F\\sin\\theta$. Option C is for zero friction. Option D is $\\frac{2}{3}mg$."
))

# Q373: Hard
qs.append(make_lom_q(
    num=373,
    question="In the previous setup ($\\theta = 45^\\circ$, $\\mu_s = 0.5$), what is the minimum horizontal force $F$ required to START moving the block UP the incline?",
    options={
        "A": "$3 mg$",
        "B": "$2 mg$",
        "C": "$1.5 mg$",
        "D": "$0.33 mg$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on an inclined plane",
    concept="To push up the plane, friction acts DOWN the plane: $F\\cos\\theta = mg\\sin\\theta + \\mu_s(mg\\cos\\theta + F\\sin\\theta) \\implies F = mg \\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta}$. For $\\theta = 45^\\circ$, $F = mg \\frac{1 + \\mu_s}{1 - \\mu_s}$.",
    given="$\\theta = 45^\\circ$, $\\mu_s = 0.5$, pushing up the incline.",
    formula="$F_{\\text{up}} = mg \\frac{1 + \\mu_s}{1 - \\mu_s} = mg \\frac{1 + 0.5}{1 - 0.5} = mg \\frac{1.5}{0.5} = 3 mg$.",
    steps="1. When the block is on the verge of moving UP the incline, friction acts DOWN the plane.\n2. Upward force along incline is $F\\cos 45^\\circ$.\n3. Downward forces along incline: gravity component $mg\\sin 45^\\circ$ and limiting friction $f_{\\text{lim}} = \\mu_s N$.\n4. Normal force is $N = mg\\cos 45^\\circ + F\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}(mg + F)$.\n5. Equilibrium equation:\n   $F\\cos 45^\\circ = mg\\sin 45^\\circ + \\mu_s N \\implies \\frac{F}{\\sqrt{2}} = \\frac{mg}{\\sqrt{2}} + \\frac{\\mu_s}{\\sqrt{2}}(mg + F)$.\n6. Multiplying by $\\sqrt{2}$: $F - \\mu_s F = mg + \\mu_s mg \\implies F(1 - \\mu_s) = mg(1 + \\mu_s)$.\n7. Therefore, $F = mg \\frac{1 + \\mu_s}{1 - \\mu_s}$.\n8. With $\\mu_s = 0.5$: $F = mg \\frac{1.5}{0.5} = 3 mg$.",
    tip="Notice the massive contrast: To PREVENT sliding down requires only $0.33 mg$, but to PUSH UP requires $3 mg$ (9 times as much force)!",
    why_wrong="Option B ($2mg$) uses incorrect algebra. Option C is $1.5mg$. Option D ($0.33mg$) is the force to prevent sliding down."
))

# Q374: Hard
qs.append(make_lom_q(
    num=374,
    question="A body of mass $m$ is projected up a rough inclined plane of inclination $\\theta$ with an initial kinetic energy $K$. If the body returns to the starting point with kinetic energy $K'$, and $\\lambda$ is the angle of friction (with $\\lambda < \\theta$), then the ratio $\\frac{K'}{K}$ is:",
    options={
        "A": "$\\frac{\\sin(\\theta - \\lambda)}{\\sin(\\theta + \\lambda)}$",
        "B": "$\\frac{\\sin(\\theta + \\lambda)}{\\sin(\\theta - \\lambda)}$",
        "C": "$\\frac{\\tan(\\theta - \\lambda)}{\\tan(\\theta + \\lambda)}$",
        "D": "$\\frac{\\cos(\\theta - \\lambda)}{\\cos(\\theta + \\lambda)}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on an inclined plane",
    concept="During ascent, $a_1 = g(\\sin\\theta + \\mu\\cos\\theta)$. During descent, $a_2 = g(\\sin\\theta - \\mu\\cos\\theta)$. Using $v^2 = 2as$, the ratio of kinetic energies is $\\frac{K'}{K} = \\frac{a_2}{a_1} = \\frac{\\sin\\theta - \\mu\\cos\\theta}{\\sin\\theta + \\mu\\cos\\theta}$. Substituting $\\mu = \\tan\\lambda = \\frac{\\sin\\lambda}{\\cos\\lambda}$ yields $\\frac{K'}{K} = \\frac{\\sin\\theta\\cos\\lambda - \\cos\\theta\\sin\\lambda}{\\sin\\theta\\cos\\lambda + \\cos\\theta\\sin\\lambda} = \\frac{\\sin(\\theta - \\lambda)}{\\sin(\\theta + \\lambda)}$.",
    given="Incline $\\theta$, angle of friction $\\lambda$, initial KE $K$, return KE $K'$.",
    formula="$\\frac{K'}{K} = \\frac{a_{\\text{down}}}{a_{\\text{up}}} = \\frac{\\sin(\\theta - \\lambda)}{\\sin(\\theta + \\lambda)}$.",
    steps="1. Let $s$ be the distance traveled up the plane. At the highest point, speed is 0.\n2. Initial kinetic energy: $K = \\frac{1}{2}m u^2 = m a_1 s$, where $a_1 = g(\\sin\\theta + \\mu\\cos\\theta)$.\n3. The body accelerates down from rest over the same distance $s$.\n4. Return kinetic energy: $K' = \\frac{1}{2}m v^2 = m a_2 s$, where $a_2 = g(\\sin\\theta - \\mu\\cos\\theta)$.\n5. The ratio of kinetic energies is:\n   $\\frac{K'}{K} = \\frac{a_2}{a_1} = \\frac{\\sin\\theta - \\mu\\cos\\theta}{\\sin\\theta + \\mu\\cos\\theta}$.\n6. Express $\\mu = \\tan\\lambda = \\frac{\\sin\\lambda}{\\cos\\lambda}$:\n   $\\frac{K'}{K} = \\frac{\\sin\\theta - \\frac{\\sin\\lambda}{\\cos\\lambda}\\cos\\theta}{\\sin\\theta + \\frac{\\sin\\lambda}{\\cos\\lambda}\\cos\\theta} = \\frac{\\sin\\theta\\cos\\lambda - \\cos\\theta\\sin\\lambda}{\\sin\\theta\\cos\\lambda + \\cos\\theta\\sin\\lambda} = \\frac{\\sin(\\theta - \\lambda)}{\\sin(\\theta + \\lambda)}$.",
    tip="Master NEET Formula: Ratio of return kinetic energy to initial kinetic energy is $\\frac{K'}{K} = \\frac{\\sin(\\theta - \\lambda)}{\\sin(\\theta + \\lambda)}$!",
    why_wrong="Option B is greater than 1 (violates energy conservation). Option C uses tangents instead of sines. Option D uses cosines."
))

# Q375: Hard
qs.append(make_lom_q(
    num=375,
    question="A wedge of mass $M$ with an inclined face of angle $\\theta$ is placed on a smooth horizontal floor. A block of mass $m$ is placed on the smooth inclined face of the wedge. What horizontal force $F$ must be applied to the wedge so that the block remains stationary relative to the wedge?",
    options={
        "A": "$(M + m) g \\tan\\theta$",
        "B": "$(M + m) g \\sin\\theta$",
        "C": "$M g \\tan\\theta$",
        "D": "$m g \\tan\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion on an inclined plane",
    concept="For the block not to slide down the smooth inclined face, the wedge must accelerate with acceleration $a$ such that the pseudo force $ma\\cos\\theta$ up the incline balances the gravity component $mg\\sin\\theta$ down the incline: $ma\\cos\\theta = mg\\sin\\theta \\implies a = g\\tan\\theta$. The external horizontal force accelerating the combined system of mass $(M + m)$ is $F = (M + m) a = (M + m) g \\tan\\theta$.",
    given="Wedge mass $M$, block mass $m$, smooth surfaces, inclination $\\theta$.",
    formula="$a = g\\tan\\theta$; $F = (M + m) a = (M + m) g \\tan\\theta$.",
    steps="1. In the frame of reference of the accelerating wedge (acceleration $a$ to the left):\n   - Block experiences a backward pseudo force $ma$ directed to the right horizontally.\n   - Component of pseudo force up the incline: $F_{\\text{pseudo}, \\parallel} = ma\\cos\\theta$.\n   - Component of gravity down the incline: $F_{g, \\parallel} = mg\\sin\\theta$.\n2. For the block to remain stationary relative to the wedge, these two opposing components along the incline must balance:\n   $ma\\cos\\theta = mg\\sin\\theta \\implies a = g\\frac{\\sin\\theta}{\\cos\\theta} = g\\tan\\theta$.\n3. Now consider the entire system of total mass $(M + m)$ in the ground frame:\n   - Both masses accelerate together horizontally at $a = g\\tan\\theta$.\n   - The floor is smooth, so no horizontal external friction acts.\n4. Therefore, the required applied force is:\n   $F = (M + m) a = (M + m) g \\tan\\theta$.",
    tip="Universal NEET Benchmark Question: Required acceleration is $a = g\\tan\\theta$, and required external force is $F = (M + m)g\\tan\\theta$!",
    why_wrong="Option B uses $\\sin\\theta$. Option C forgets the mass of the block $m$. Option D only accelerates the block."
))

print(f"Topics 22 & 23 done: {len(qs)} questions.")
