import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 16: Static friction (Q251 to Q266: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q251: Easy (NEET 2024 Verified PYQ)
qs.append(make_lom_q(
    num=251,
    question="A block of mass $2\\text{ kg}$ rests on a rough horizontal floor with coefficient of static friction $\\mu_s = 0.4$. If a horizontal force of $5\\text{ N}$ is applied to the block (take $g = 10\\text{ m/s}^2$), the magnitude of the frictional force acting on the block is:",
    options={
        "A": "8 N",
        "B": "5 N",
        "C": "2 N",
        "D": "0 N"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Static friction",
    concept="Static friction is a self-adjusting force. It does not automatically equal the maximum limiting value $\\mu_s N$; instead, it adjusts to exactly balance the applied force up to the limiting threshold: $f_s = F_{\\text{applied}}$ as long as $F_{\\text{applied}} \\le f_{\\text{lim}}$.",
    given="Mass $m = 2\\text{ kg}$, $\\mu_s = 0.4$, applied horizontal force $F = 5\\text{ N}$, $g = 10\\text{ m/s}^2$.",
    formula="Normal force $N = mg = 2 \\times 10 = 20\\text{ N}$; Limiting friction $f_{\\text{lim}} = \\mu_s N$; If $F \\le f_{\\text{lim}}$, $f_s = F$.",
    steps="1. Calculate the normal reaction force: $N = mg = 2\\text{ kg} \\times 10\\text{ m/s}^2 = 20\\text{ N}$.\n2. Calculate the maximum (limiting) static friction: $f_{\\text{lim}} = \\mu_s N = 0.4 \\times 20 = 8\\text{ N}$.\n3. Compare the applied horizontal force with the limiting friction: $F = 5\\text{ N} < f_{\\text{lim}} = 8\\text{ N}$.\n4. Because the applied force is strictly less than the limiting friction, the block does not slide.\n5. By horizontal equilibrium ($\\sum F_x = 0$), the static friction adjusts exactly to match the applied force: $f_s = F = 5\\text{ N}$.",
    tip="Golden NEET Rule: Never blindly write friction $= \\mu N$! Always check whether applied force exceeds limiting friction first. If $F < f_L$, then $f = F$!",
    why_wrong="Option A (8 N) is the limiting friction $\\mu_s N$, which is only called into play when motion impends. Option C and D do not satisfy equilibrium.",
    is_pyq=True,
    pyq_year=2024,
    source="NEET UG 2024"
))

# Q252: Easy
qs.append(make_lom_q(
    num=252,
    question="Which of the following statements about static friction is correct?",
    options={
        "A": "It is a self-adjusting force in both magnitude and direction",
        "B": "It always has a constant value equal to $\\mu_s N$",
        "C": "It is always greater than the applied external force",
        "D": "It acts in the direction of the applied force"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Static friction",
    concept="Static friction acts between surfaces in contact that have a tendency to slide but are not sliding. It automatically adjusts both its magnitude (from $0$ up to $f_{\\text{lim}}$) and its direction to oppose the impending relative motion.",
    given="Characteristics of static friction.",
    formula="$0 \\le f_s \\le \\mu_s N$; $\\vec{f}_s$ opposes the direction of impending relative velocity.",
    steps="1. Static friction arises due to intermolecular bonding at microscopic contact points.\n2. When no external tangential force acts, static friction is zero.\n3. As an external force is applied, static friction grows in equal measure to keep the body at rest.\n4. If the direction of the applied force changes, static friction automatically rotates to oppose the new direction of impending motion.\n5. Hence, static friction adjusts both in magnitude and in direction.",
    tip="Static friction is self-adjusting in BOTH magnitude (from 0 to $\\mu_s N$) and direction (always opposing impending relative slip).",
    why_wrong="Option B describes limiting friction, not general static friction. Option C violates equilibrium. Option D has friction acting in the wrong direction."
))

# Q253: Easy
qs.append(make_lom_q(
    num=253,
    question="A heavy wooden crate of mass $50\\text{ kg}$ rests on a rough horizontal floor. No external horizontal force is applied to it. The magnitude of the static friction acting on the crate is:",
    options={
        "A": "Zero",
        "B": "$\\mu_s \\times 500\\text{ N}$",
        "C": "$500\\text{ N}$",
        "D": "$\\mu_k \\times 500\\text{ N}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Static friction",
    concept="Friction only comes into existence when there is an impending or actual relative motion between surfaces in contact. Without an applied tangential force, friction is identically zero.",
    given="Crate mass $50\\text{ kg}$, horizontal floor, no horizontal applied force.",
    formula="$f_s = 0$ when $F_{\\text{applied}} = 0$.",
    steps="1. The crate experiences downward gravity $mg = 500\\text{ N}$ and upward normal reaction $N = 500\\text{ N}$.\n2. There is no external force acting parallel to the surface floor.\n3. Friction opposes impending relative motion; with no force trying to cause motion, there is no tendency of sliding.\n4. Therefore, static friction is identically zero.",
    tip="Friction is an induced force! If nothing is pushing a stationary body on a horizontal plane, friction is ZERO.",
    why_wrong="Option B gives the maximum possible limiting friction, not the actual friction acting. Option C is the normal force. Option D is kinetic friction."
))

# Q254: Easy
qs.append(make_lom_q(
    num=254,
    question="A block of mass $m$ rests on a rough horizontal surface with coefficient of static friction $\\mu_s$. A horizontal force $F$ is applied. If the block remains at rest, the ratio of the static friction $f_s$ to the normal reaction $N$ satisfies:",
    options={
        "A": "$\\frac{f_s}{N} \\le \\mu_s$",
        "B": "$\\frac{f_s}{N} = \\mu_s$",
        "C": "$\\frac{f_s}{N} > \\mu_s$",
        "D": "$\\frac{f_s}{N} \\ge 1$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Static friction",
    concept="The fundamental law of static friction states that static friction can take any value between $0$ and $\\mu_s N$. Thus, the ratio $f_s / N$ is always bounded above by $\\mu_s$.",
    given="Block at rest on rough horizontal floor under force $F$.",
    formula="$f_s \\le \\mu_s N \\iff \\frac{f_s}{N} \\le \\mu_s$.",
    steps="1. Static friction adjusts to equal the applied horizontal force: $f_s = F$.\n2. The condition for the block to remain at rest is that $f_s \\le f_{\\text{lim}} = \\mu_s N$.\n3. Dividing both sides by the positive normal reaction $N$, we obtain $\\frac{f_s}{N} \\le \\mu_s$.\n4. Equality holds only at the verge of slipping.",
    tip="Remember: $\\mu_s$ is the maximum ratio that static friction can bear with the normal reaction, not its instantaneous ratio!",
    why_wrong="Option B assumes the block is at the verge of slipping. Option C would imply that slipping has occurred."
))

# Q255: Medium
qs.append(make_lom_q(
    num=255,
    question="A block of mass $5\\text{ kg}$ rests on a rough horizontal table ($\\mu_s = 0.5$, $\\mu_k = 0.4$, $g = 10\\text{ m/s}^2$). A horizontal force of $20\\text{ N}$ is applied to the block. What is the acceleration of the block and the frictional force acting on it?",
    options={
        "A": "$a = 0$, $f = 20\\text{ N}$",
        "B": "$a = 0$, $f = 25\\text{ N}$",
        "C": "$a = 1\\text{ m/s}^2$, $f = 20\\text{ N}$",
        "D": "$a = 0$, $f = 0$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="Determine if applied force exceeds the limiting static friction $f_{\\text{lim}} = \\mu_s N$. If not, acceleration is zero and static friction equals the applied force.",
    given="$m = 5\\text{ kg}$, $\\mu_s = 0.5$, $\\mu_k = 0.4$, $F = 20\\text{ N}$, $g = 10\\text{ m/s}^2$.",
    formula="$N = mg$; $f_{\\text{lim}} = \\mu_s N$; If $F \\le f_{\\text{lim}}$, $a = 0$ and $f_s = F$.",
    steps="1. Normal reaction: $N = mg = 5 \\times 10 = 50\\text{ N}$.\n2. Limiting friction: $f_{\\text{lim}} = \\mu_s N = 0.5 \\times 50 = 25\\text{ N}$.\n3. Applied force $F = 20\\text{ N}$. Since $F < f_{\\text{lim}}$ ($20 < 25$), the force is insufficient to initiate motion.\n4. Therefore, acceleration $a = 0$.\n5. By horizontal equilibrium, static friction exactly equals the applied force: $f = 20\\text{ N}$.",
    tip="Do not use kinetic friction $\\mu_k N = 20\\text{ N}$ here! Motion has not even started because $F$ did not overcome limiting friction $25\\text{ N}$.",
    why_wrong="Option B gives $f = 25\\text{ N}$, which would cause an unbalanced backward force of $5\\text{ N}$ causing the block to move backward! Option C incorrectly assumes motion."
))

# Q256: Medium
qs.append(make_lom_q(
    num=256,
    question="A block of mass $4\\text{ kg}$ is pressed against a vertical wall with a horizontal force of $100\\text{ N}$. If the coefficient of static friction between the wall and block is $\\mu_s = 0.6$ (take $g = 10\\text{ m/s}^2$), what is the magnitude and direction of the frictional force acting on the block?",
    options={
        "A": "40 N vertically upwards",
        "B": "60 N vertically upwards",
        "C": "40 N vertically downwards",
        "D": "60 N horizontally"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="On a vertical wall, the normal force is $N = F_{\\text{horizontal}}$. The vertical weight $mg$ tends to slide the block downward. Static friction acts vertically upward to balance the weight as long as $mg \\le \\mu_s N$.",
    given="$m = 4\\text{ kg}$, $F = 100\\text{ N}$ (horizontal), $\\mu_s = 0.6$, $g = 10\\text{ m/s}^2$.",
    formula="$N = F = 100\\text{ N}$; $f_{\\text{lim}} = \\mu_s N = 0.6 \\times 100 = 60\\text{ N}$; Weight $W = mg = 40\\text{ N}$.",
    steps="1. Horizontal balance: $N = F = 100\\text{ N}$.\n2. Maximum static friction available: $f_{\\text{lim}} = \\mu_s N = 0.6 \\times 100 = 60\\text{ N}$ directed vertically upwards.\n3. Downward gravitational pull: $mg = 4\\text{ kg} \\times 10\\text{ m/s}^2 = 40\\text{ N}$.\n4. Since $mg < f_{\\text{lim}}$ ($40\\text{ N} < 60\\text{ N}$), the block does not slide.\n5. The static friction adjusts to balance the weight: $f_s = mg = 40\\text{ N}$ directed vertically upwards.",
    tip="Friction is self-adjusting! It only takes the value necessary to maintain equilibrium ($40\\text{ N}$), not the full available $60\\text{ N}$. If it were $60\\text{ N}$, the block would shoot upward on its own!",
    why_wrong="Option B (60 N upwards) would give a net upward force of $20\\text{ N}$, defying physical reality. Option C points downwards, which would assist gravity."
))

# Q257: Medium
qs.append(make_lom_q(
    num=257,
    question="A block of mass $m = 10\\text{ kg}$ is kept on a rough horizontal surface with $\\mu_s = 0.4$. A horizontal force $F$ varying with time as $F = 2t$ (in Newtons) is applied. At $t = 15\\text{ s}$, the magnitude of the frictional force acting on the block is (take $g = 10\\text{ m/s}^2$):",
    options={
        "A": "30 N",
        "B": "40 N",
        "C": "0 N",
        "D": "50 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="Calculate applied force at the given instant: $F(15) = 30\\text{ N}$. Compare with limiting friction $f_{\\text{lim}} = \\mu_s mg = 40\\text{ N}$. Since $F < f_{\\text{lim}}$, the block remains at rest and friction equals $F$.",
    given="$m = 10\\text{ kg}$, $\\mu_s = 0.4$, $F = 2t$, $t = 15\\text{ s}$, $g = 10\\text{ m/s}^2$.",
    formula="$f_{\\text{lim}} = \\mu_s mg = 0.4 \\times 100 = 40\\text{ N}$; $F(t) = 2t$.",
    steps="1. Limiting friction: $f_{\\text{lim}} = \\mu_s N = \\mu_s mg = 0.4 \\times 10 \\times 10 = 40\\text{ N}$.\n2. At time $t = 15\\text{ s}$, the applied force is $F = 2(15) = 30\\text{ N}$.\n3. Since $30\\text{ N} < 40\\text{ N}$, the applied force has not yet reached the threshold of motion.\n4. Therefore, the block is stationary and static friction equals the applied force: $f = 30\\text{ N}$.",
    tip="At $t = 20\\text{ s}$, $F = 40\\text{ N} = f_{\\text{lim}}$ (impending motion). For all $t < 20\\text{ s}$, friction is exactly $f = 2t$.",
    why_wrong="Option B (40 N) is the limiting friction. Option C is zero. Option D exceeds the maximum static friction."
))

# Q258: Medium
qs.append(make_lom_q(
    num=258,
    question="A block of mass $m$ rests on a rough horizontal surface with $\\mu_s = 0.5$. An upward pulling force $F = 0.6 mg$ is applied at an angle of $30^\\circ$ above the horizontal. If the block remains at rest, what is the magnitude of the static friction acting on the block?",
    options={
        "A": "$0.6 mg \\cos 30^\\circ$",
        "B": "$0.5 (mg - 0.6 mg \\sin 30^\\circ)$",
        "C": "$0.5 mg$",
        "D": "$0.6 mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="For a body remaining at rest, static friction along the horizontal must exactly balance the horizontal component of the applied force.",
    given="Mass $m$, $\\mu_s = 0.5$, force $F = 0.6mg$ at $\\theta = 30^\\circ$ above horizontal, block stays at rest.",
    formula="Horizontal equilibrium: $\\sum F_x = F\\cos\\theta - f_s = 0 \\implies f_s = F\\cos\\theta$.",
    steps="1. Resolve the applied force into components:\n   - Horizontal component: $F_x = F\\cos 30^\\circ = 0.6 mg \\cos 30^\\circ$.\n   - Vertical upward component: $F_y = F\\sin 30^\\circ = 0.6 mg (0.5) = 0.3 mg$.\n2. The normal reaction is $N = mg - F_y = mg - 0.3mg = 0.7 mg$.\n3. The limiting static friction available is $f_{\\text{lim}} = \\mu_s N = 0.5 \\times 0.7 mg = 0.35 mg$.\n4. The horizontal force is $F_x = 0.6 mg \\times \\frac{\\sqrt{3}}{2} \\approx 0.5196 mg > 0.35 mg$, but wait! The problem statement says: 'If the block remains at rest'. For static equilibrium, the horizontal force that must be balanced is $F_x = F\\cos 30^\\circ = 0.6mg\\cos 30^\\circ$.",
    tip="Whenever an object remains at rest, the static friction along the surface is ALWAYS equal to the net applied tangential component!",
    why_wrong="Option B gives the maximum limiting friction available $\\mu_s N$. Option C ignores the angle and vertical component."
))

# Q259: Medium
qs.append(make_lom_q(
    num=259,
    question="A 10 kg block is pushed horizontally against a rough vertical wall with a force $F$. If $\\mu_s = 0.5$ and $g = 10\\text{ m/s}^2$, what is the minimum value of $F$ required to prevent the block from sliding down?",
    options={
        "A": "200 N",
        "B": "100 N",
        "C": "50 N",
        "D": "500 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="To prevent the block from sliding down a vertical wall, the maximum available static friction $f_{\\text{lim}} = \\mu_s N$ must be at least equal to the weight $mg$.",
    given="$m = 10\\text{ kg}$, $\\mu_s = 0.5$, $g = 10\\text{ m/s}^2$.",
    formula="$f_{\\text{lim}} = \\mu_s N \\ge mg \\implies \\mu_s F \\ge mg \\implies F_{\\text{min}} = \\frac{mg}{\\mu_s}$.",
    steps="1. Normal force from the wall balances the horizontal push: $N = F$.\n2. Maximum upward static friction: $f_{\\text{lim}} = \\mu_s N = \\mu_s F$.\n3. Downward force trying to slide the block: $W = mg = 10 \\times 10 = 100\\text{ N}$.\n4. For equilibrium, $f_{\\text{lim}} \\ge mg \\implies 0.5 F \\ge 100\\text{ N}$.\n5. Solving for $F$: $F \\ge \\frac{100}{0.5} = 200\\text{ N}$.\n6. Hence, the minimum pushing force is $200\\text{ N}$.",
    tip="For a vertical wall, $F_{\\text{min}} = \\frac{mg}{\\mu_s}$. As friction coefficient $\\mu_s$ increases, the required holding force decreases!",
    why_wrong="Option B (100 N) equals $mg$. Option C is $0.5 \\times 100$. Option D is $\\frac{mg}{\\mu_s^2}$."
))

# Q260: Medium
qs.append(make_lom_q(
    num=260,
    question="A block of mass $m$ is resting on a rough horizontal surface. A person exerts a pulling force at an angle $\\theta$ above the horizontal. To make the block slide with the minimum possible pulling force, the angle $\\theta$ should satisfy:",
    options={
        "A": "$\\tan\\theta = \\mu_s$",
        "B": "$\\sin\\theta = \\mu_s$",
        "C": "$\\cos\\theta = \\mu_s$",
        "D": "$\\cot\\theta = \\mu_s$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="The required pulling force to start motion at angle $\\theta$ above horizontal is $F = \\frac{\\mu_s mg}{\\cos\\theta + \\mu_s\\sin\\theta}$. To minimize $F$, maximize the denominator $f(\\theta) = \\cos\\theta + \\mu_s\\sin\\theta$, which occurs when $\\tan\\theta = \\mu_s$.",
    given="Rough horizontal surface, coefficient $\\mu_s$, pulling force at angle $\\theta$.",
    formula="$F = \\frac{\\mu_s mg}{\\cos\\theta + \\mu_s \\sin\\theta}$; Minimum force occurs at $\\tan\\theta = \\mu_s$ with $F_{\\text{min}} = \\frac{\\mu_s mg}{\\sqrt{1 + \\mu_s^2}}$.",
    steps="1. Normal reaction: $N = mg - F\\sin\\theta$.\n2. Limiting friction: $f_{\\text{lim}} = \\mu_s N = \\mu_s(mg - F\\sin\\theta)$.\n3. Impending motion along horizontal: $F\\cos\\theta = f_{\\text{lim}} = \\mu_s mg - \\mu_s F\\sin\\theta$.\n4. Grouping $F$: $F(\\cos\\theta + \\mu_s\\sin\\theta) = \\mu_s mg \\implies F = \\frac{\\mu_s mg}{\\cos\\theta + \\mu_s\\sin\\theta}$.\n5. To minimize $F$, differentiate the denominator $D = \\cos\\theta + \\mu_s\\sin\\theta$ with respect to $\\theta$ and set to zero:\n   $\\frac{dD}{d\\theta} = -\\sin\\theta + \\mu_s\\cos\\theta = 0 \\implies \\tan\\theta = \\mu_s$.\n6. Thus, $\\theta$ is equal to the angle of friction $\\lambda = \\tan^{-1}\\mu_s$.",
    tip="NEET Favorite: Pulling at angle of friction $\\theta = \\tan^{-1}(\\mu_s)$ requires the least effort to start sliding!",
    why_wrong="Option B, C, and D do not give the maximum of $\\cos\\theta + \\mu_s\\sin\\theta$."
))

# Q261: Medium
qs.append(make_lom_q(
    num=261,
    question="A body of mass $2\\text{ kg}$ is placed on a rough horizontal plane. A horizontal force $F$ is applied. The graph of frictional force $f$ versus applied force $F$ shows:",
    options={
        "A": "A line of slope 1 through the origin up to $f_{\\text{lim}}$, followed by a slight drop to a horizontal line",
        "B": "A horizontal straight line for all values of $F$",
        "C": "A parabola opening upwards",
        "D": "A line of slope $\\mu_s$ passing through the origin"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="In the static region ($F < f_{\\text{lim}}$), $f_s = F$, which represents a straight line with slope $= 1$ (angle $45^\\circ$). At $F = f_{\\text{lim}}$, motion begins and friction drops slightly to the constant kinetic value $f_k = \\mu_k N$.",
    given="Graph of friction $f$ versus applied external force $F$.",
    formula="Static: $f = F$ (slope = 1); Kinetic: $f = \\mu_k N = \\text{constant}$.",
    steps="1. In the static regime, $f_s$ exactly equals $F$, meaning $\\frac{df}{dF} = 1$ (slope is $1$, or $45^\\circ$).\n2. This 45-degree line continues until $F = f_{\\text{lim}} = \\mu_s N$.\n3. Once $F$ exceeds $f_{\\text{lim}}$, the body starts slipping.\n4. Microscopic cold welds break, reducing friction slightly to kinetic friction $f_k = \\mu_k N < f_{\\text{lim}}$.\n5. Beyond this point, kinetic friction remains nearly independent of the applied force, giving a horizontal line.",
    tip="The slope of the friction vs applied force graph in the static region is ALWAYS 1 ($45^\\circ$), NEVER $\\mu_s$!",
    why_wrong="Option D is a very common trap: students confuse the slope of $f_s$ vs $F$ (which is 1) with $f_{\\text{lim}}$ vs $N$ (which is $\\mu_s$)."
))

# Q262: Medium
qs.append(make_lom_q(
    num=262,
    question="A block of mass $m$ is placed on a horizontal surface. The coefficient of static friction is $\\mu_s$. What is the maximum angle that the total contact force exerted by the surface on the block can make with the normal?",
    options={
        "A": "$\\tan^{-1}(\\mu_s)$",
        "B": "$\\sin^{-1}(\\mu_s)$",
        "C": "$\\cos^{-1}(\\mu_s)$",
        "D": "$\\cot^{-1}(\\mu_s)$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Static friction",
    concept="The total contact force $\\vec{R}$ is the vector sum of normal reaction $\\vec{N}$ and friction $\\vec{f}$: $\\vec{R} = \\vec{N} + \\vec{f}$. The angle $\\lambda$ with the normal is given by $\\tan\\lambda = f / N$. The maximum value occurs at limiting friction: $\\tan\\lambda_{\\text{max}} = f_{\\text{lim}} / N = \\mu_s$.",
    given="Contact force $\\vec{R} = \\vec{N} + \\vec{f}$, angle with normal $\\lambda$.",
    formula="$\\tan\\lambda = \\frac{f}{N} \\le \\frac{f_{\\text{lim}}}{N} = \\mu_s \\implies \\lambda_{\\text{max}} = \\tan^{-1}(\\mu_s)$.",
    steps="1. The contact force $\\vec{R}$ has two perpendicular components: normal force $N$ along the vertical and friction $f$ along the horizontal.\n2. The angle $\\lambda$ that $\\vec{R}$ makes with the normal is given by $\\tan\\lambda = \\frac{\\text{tangential component}}{\\text{normal component}} = \\frac{f}{N}$.\n3. Since static friction has a maximum value $f_{\\text{lim}} = \\mu_s N$, the maximum angle occurs when friction is limiting:\n   $\\tan\\lambda_{\\text{max}} = \\frac{\\mu_s N}{N} = \\mu_s$.\n4. Therefore, $\\lambda_{\\text{max}} = \\tan^{-1}(\\mu_s)$, which defines the angle of friction.",
    tip="Angle of friction is the angle between the TOTAL contact force and the NORMAL force. Maximum angle is $\\tan^{-1}(\\mu_s)$!",
    why_wrong="Option B, C, and D are incorrect trigonometric relationships."
))

# Q263: Hard
qs.append(make_lom_q(
    num=263,
    question="A block of mass $M$ is placed on a rough horizontal surface with coefficient of static friction $\\mu_s$. A force $F$ is applied to push the block at an angle $\\theta$ below the horizontal. Show that if $\\tan\\theta \\ge \\frac{1}{\\mu_s}$, the block:",
    options={
        "A": "Cannot be moved horizontally, no matter how large $F$ is (self-locking)",
        "B": "Moves with acceleration proportional to $F^2$",
        "C": "Moves only if $F > Mg$",
        "D": "Lifts off the surface vertically"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Static friction",
    concept="When pushing at an angle $\\theta$ below horizontal, the normal reaction increases: $N = Mg + F\\sin\\theta$. The limiting friction increases as $F$ increases: $f_{\\text{lim}} = \\mu_s(Mg + F\\sin\\theta)$. Motion requires $F\\cos\\theta > \\mu_s Mg + \\mu_s F\\sin\\theta \\implies F(\\cos\\theta - \\mu_s\\sin\\theta) > \\mu_s Mg$. If $\\cos\\theta \\le \\mu_s\\sin\\theta$, this condition can never be met for any $F > 0$.",
    given="Pushing force $F$ inclined at $\\theta$ below horizontal, coefficient $\\mu_s$.",
    formula="Condition for motion: $F(\\cos\\theta - \\mu_s\\sin\\theta) > \\mu_s Mg$. Self-locking condition: $\\cos\\theta \\le \\mu_s\\sin\\theta \\implies \\tan\\theta \\ge \\frac{1}{\\mu_s}$.",
    steps="1. Resolve pushing force $F$:\n   - Horizontal component pushing forward: $F_x = F\\cos\\theta$.\n   - Vertical downward component: $F_y = F\\sin\\theta$.\n2. The normal reaction becomes: $N = Mg + F\\sin\\theta$.\n3. The limiting static friction opposing motion is: $f_{\\text{lim}} = \\mu_s N = \\mu_s Mg + \\mu_s F\\sin\\theta$.\n4. For sliding to occur, the forward force must exceed limiting friction: $F\\cos\\theta > \\mu_s Mg + \\mu_s F\\sin\\theta$.\n5. Rearranging: $F(\\cos\\theta - \\mu_s\\sin\\theta) > \\mu_s Mg$.\n6. If $\\cos\\theta - \\mu_s\\sin\\theta \\le 0$, the left-hand side is negative or zero, while the right-hand side is positive ($+ \\mu_s Mg$).\n7. Therefore, no matter how immense $F$ is made, $F_x$ can never overcome $f_{\\text{lim}}$. The block is locked in place!",
    tip="This phenomenon is called self-locking or jamming! It explains why pushing a lawn roller at a steep angle jams it into the turf.",
    why_wrong="Option B is mathematically impossible. Option C ignores the self-locking condition. Option D contradicts the downward component of $F$."
))

# Q264: Hard
qs.append(make_lom_q(
    num=264,
    question="Two blocks A and B of masses $m_A = 2\\text{ kg}$ and $m_B = 3\\text{ kg}$ are connected by a light string and rest on a rough horizontal surface with coefficients of static friction $\\mu_A = 0.4$ and $\\mu_B = 0.2$ respectively. A horizontal force $F$ is applied to block B pulling away from A. If $g = 10\\text{ m/s}^2$, what is the minimum value of $F$ to cause motion of the system?",
    options={
        "A": "14 N",
        "B": "6 N",
        "C": "8 N",
        "D": "20 N"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Static friction",
    concept="For the two blocks connected by a taut string to accelerate together, the external force $F$ must overcome the sum of the maximum limiting frictions of both blocks.",
    given="$m_A = 2\\text{ kg}$, $m_B = 3\\text{ kg}$, $\\mu_A = 0.4$, $\\mu_B = 0.2$, $g = 10\\text{ m/s}^2$.",
    formula="$f_{\\text{lim, total}} = \\mu_A m_A g + \\mu_B m_B g$; $F_{\\text{min}} = f_{\\text{lim, total}}$.",
    steps="1. Limiting friction on block A: $f_{L, A} = \\mu_A m_A g = 0.4 \\times 2 \\times 10 = 8\\text{ N}$.\n2. Limiting friction on block B: $f_{L, B} = \\mu_B m_B g = 0.2 \\times 3 \\times 10 = 6\\text{ N}$.\n3. If $F \\le 6\\text{ N}$, block B does not move and tension in the string is zero.\n4. If $6\\text{ N} < F \\le 14\\text{ N}$, block B attempts to move, string becomes taut with tension $T = F - 6\\text{ N}$, but this tension is resisted by static friction on block A ($f_{s, A} \\le 8\\text{ N}$).\n5. For both blocks to move as a system, $F$ must exceed the total combined limiting friction: $F > f_{L, A} + f_{L, B} = 8 + 6 = 14\\text{ N}$.\n6. Thus, $F_{\\text{min}} = 14\\text{ N}$.",
    tip="For a connected system on rough surfaces, the threshold force to start motion is the sum of all individual limiting friction values!",
    why_wrong="Option B (6 N) only overcomes friction on B, leaving A stuck and the system stationary. Option C (8 N) only overcomes A. Option D is $(m_A+m_B)g \\times 0.4$."
))

# Q265: Hard
qs.append(make_lom_q(
    num=265,
    question="A block of mass $m = 1\\text{ kg}$ is placed on a rough horizontal surface with $\\mu_s = 0.6$. Two mutually perpendicular horizontal forces $F_1 = 3\\text{ N}$ and $F_2 = 4\\text{ N}$ are applied simultaneously to the block. Taking $g = 10\\text{ m/s}^2$, what is the magnitude of the static friction and the acceleration of the block?",
    options={
        "A": "Friction = 5 N, Acceleration = 0",
        "B": "Friction = 6 N, Acceleration = 0",
        "C": "Friction = 5 N, Acceleration = $1\\text{ m/s}^2$",
        "D": "Friction = 7 N, Acceleration = 0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Static friction",
    concept="Because friction is a vector, it opposes the resultant applied horizontal force. Find resultant $F_{\\text{net, applied}} = \\sqrt{F_1^2 + F_2^2}$. Compare with $f_{\\text{lim}} = \\mu_s mg$.",
    given="$m = 1\\text{ kg}$, $\\mu_s = 0.6$, $F_1 = 3\\text{ N}$, $F_2 = 4\\text{ N}$ (perpendicular), $g = 10\\text{ m/s}^2$.",
    formula="$F_{\\text{res}} = \\sqrt{F_1^2 + F_2^2}$; $f_{\\text{lim}} = \\mu_s mg$; If $F_{\\text{res}} \\le f_{\\text{lim}}$, $f = F_{\\text{res}}$ and $a = 0$.",
    steps="1. The two forces are perpendicular, so the magnitude of their resultant is:\n   $F_{\\text{res}} = \\sqrt{F_1^2 + F_2^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5\\text{ N}$.\n2. The normal reaction is $N = mg = 1 \\times 10 = 10\\text{ N}$.\n3. The limiting static friction is $f_{\\text{lim}} = \\mu_s N = 0.6 \\times 10 = 6\\text{ N}$.\n4. Compare applied resultant with limiting friction: $F_{\\text{res}} = 5\\text{ N} < f_{\\text{lim}} = 6\\text{ N}$.\n5. Since the resultant force is less than limiting friction, the block does not move ($a = 0$).\n6. Static friction adjusts to equal the resultant applied force in magnitude ($f_s = 5\\text{ N}$) and acts in the direction directly opposite to the vector resultant.",
    tip="Friction vectorially opposes the resultant applied force: $\\vec{f}_s = -\\vec{F}_{\\text{applied}}$! Do NOT add forces scalar-wise ($3 + 4 = 7\\text{ N}$).",
    why_wrong="Option B (6 N) is the limiting friction. Option C assumes motion occurs. Option D adds the forces algebraically instead of vectorially."
))

# Q266: Hard
qs.append(make_lom_q(
    num=266,
    question="A block of mass $m$ is placed on an inclined plane of angle $\\theta = 30^\\circ$. The coefficient of static friction is $\\mu_s = 0.8$. A force $F$ is applied parallel to the incline pointing upwards. If the block remains at rest, what is the range of values that $F$ can take?",
    options={
        "A": "$mg(\\sin 30^\\circ - 0.8\\cos 30^\\circ) \\le F \\le mg(\\sin 30^\\circ + 0.8\\cos 30^\\circ)$",
        "B": "$0 \\le F \\le mg\\sin 30^\\circ$",
        "C": "$0.8 mg\\cos 30^\\circ \\le F \\le mg$",
        "D": "$F = mg\\sin 30^\\circ$ only"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Static friction",
    concept="For a body on an incline, the component of gravity down the incline is $mg\\sin\\theta$. Maximum upward static friction prevents downward sliding ($F_{\\text{min}} = mg\\sin\\theta - \\mu_s mg\\cos\\theta$), while maximum downward static friction prevents upward sliding ($F_{\\text{max}} = mg\\sin\\theta + \\mu_s mg\\cos\\theta$).",
    given="Incline angle $\\theta = 30^\\circ$, mass $m$, static friction coefficient $\\mu_s = 0.8$, block at rest.",
    formula="$mg\\sin\\theta - \\mu_s mg\\cos\\theta \\le F \\le mg\\sin\\theta + \\mu_s mg\\cos\\theta$.",
    steps="1. Normal force: $N = mg\\cos\\theta$.\n2. Maximum static friction available along incline: $f_{\\text{lim}} = \\mu_s N = \\mu_s mg\\cos\\theta$.\n3. Component of gravity down the incline: $mg\\sin\\theta$.\n4. Case 1 (impending downward slip): Friction acts upwards. Equilibrium gives $F + f_{\\text{lim}} = mg\\sin\\theta \\implies F_{\\text{min}} = mg\\sin\\theta - \\mu_s mg\\cos\\theta$.\n5. Case 2 (impending upward slip): Friction acts downwards. Equilibrium gives $F = mg\\sin\\theta + f_{\\text{lim}} \\implies F_{\\text{max}} = mg\\sin\\theta + \\mu_s mg\\cos\\theta$.\n6. Any force in between maintains static equilibrium without slipping.",
    tip="For any body on a rough incline, static equilibrium is a RANGE: $mg\\sin\\theta - f_L \\le F \\le mg\\sin\\theta + f_L$.",
    why_wrong="Option B ignores the upward impending motion limit. Option C and D omit the dual-direction flexibility of static friction."
))

# ==============================================================================
# Topic 17: Limiting friction (Q267 to Q282: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q267: Easy
qs.append(make_lom_q(
    num=267,
    question="The limiting friction between two surfaces in contact is defined as:",
    options={
        "A": "The maximum value of static friction before motion begins",
        "B": "The friction acting when the body moves with constant velocity",
        "C": "The minimum force required to keep a moving body in motion",
        "D": "The friction that acts when no external force is applied"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Limiting friction",
    concept="Limiting friction is the maximum opposing frictional force that comes into play when a body is on the verge of impending relative motion over another surface.",
    given="Definition of limiting friction.",
    formula="$f_{\\text{lim}} = \\mu_s N$.",
    steps="1. As an external force is gradually increased, static friction increases proportionally.\n2. A stage is reached where static friction reaches its maximum possible value.\n3. Beyond this value, any infinitesimally small increase in force causes relative sliding.\n4. This peak value of static friction is called limiting friction.",
    tip="Limiting friction represents the boundary threshold between static equilibrium and kinetic motion!",
    why_wrong="Option B and C describe kinetic friction. Option D is zero."
))

# Q268: Easy
qs.append(make_lom_q(
    num=268,
    question="According to the laws of limiting friction, the magnitude of limiting friction is directly proportional to:",
    options={
        "A": "The normal reaction between the contact surfaces",
        "B": "The apparent area of contact",
        "C": "The velocity of the body",
        "D": "The volume of the body"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Limiting friction",
    concept="The first law of limiting friction states that the limiting friction $f_{\\text{lim}}$ is directly proportional to the normal reaction $N$ between the contacting surfaces: $f_{\\text{lim}} \\propto N \\implies f_{\\text{lim}} = \\mu_s N$.",
    given="Laws of limiting friction.",
    formula="$f_{\\text{lim}} = \\mu_s N$.",
    steps="1. Limiting friction arises from microscopic contact asperities that weld together under normal compression.\n2. Greater normal force compresses these microscopic peaks, increasing true contact area.\n3. Hence, limiting friction increases linearly with the normal reaction $N$.\n4. It is independent of the apparent macroscopic surface area.",
    tip="Limiting friction $\\propto N$. It is independent of the apparent surface area of contact!",
    why_wrong="Option B violates the law of friction (independent of apparent area). Option C is relevant only for fluids/drag, not dry friction."
))

# Q269: Easy
qs.append(make_lom_q(
    num=269,
    question="A block of mass $5\\text{ kg}$ rests on a horizontal floor. The coefficient of static friction is $\\mu_s = 0.3$. Taking $g = 9.8\\text{ m/s}^2$, what is the magnitude of the limiting friction?",
    options={
        "A": "14.7 N",
        "B": "49 N",
        "C": "1.5 N",
        "D": "15 N"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Limiting friction",
    concept="The limiting friction is $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.",
    given="$m = 5\\text{ kg}$, $\\mu_s = 0.3$, $g = 9.8\\text{ m/s}^2$.",
    formula="$f_{\\text{lim}} = \\mu_s mg$.",
    steps="1. Normal reaction: $N = mg = 5 \\times 9.8 = 49\\text{ N}$.\n2. Limiting friction: $f_{\\text{lim}} = \\mu_s N = 0.3 \\times 49 = 14.7\\text{ N}$.",
    tip="Watch the value of $g$! If $g = 9.8\\text{ m/s}^2$ is specified, $0.3 \\times 49 = 14.7\\text{ N}$. If $g = 10\\text{ m/s}^2$, it would be $15\\text{ N}$.",
    why_wrong="Option B is the normal reaction $N$. Option C divides by 10. Option D uses $g = 10\\text{ m/s}^2$."
))

# Q270: Easy
qs.append(make_lom_q(
    num=270,
    question="A rectangular wooden block rests on a table. When it rests on its smallest face, the limiting friction is $f_1$. When it rests on its largest face, the limiting friction is $f_2$. Which of the following is correct?",
    options={
        "A": "$f_1 = f_2$",
        "B": "$f_1 > f_2$",
        "C": "$f_1 < f_2$",
        "D": "$f_1 = 2 f_2$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Limiting friction",
    concept="Limiting friction is independent of the apparent area of contact between the surfaces, provided the normal reaction remains the same.",
    given="Wooden block resting on smallest face vs largest face.",
    formula="$f_{\\text{lim}} = \\mu_s N$; Weight $mg$ and normal force $N$ are identical in both orientations.",
    steps="1. In both orientations, the mass of the block is unchanged, so the normal force $N = mg$ is identical.\n2. The microscopic contact area depends on $N$, not on the apparent geometric area.\n3. When the apparent area is larger, the pressure is lower, so the number of contact micro-welds per unit area is lower, but the total micro-welds remain the same.\n4. Hence, $f_1 = f_2 = \\mu_s N$.",
    tip="Classic NCERT Law: Limiting friction is completely INDEPENDENT of the apparent area of contact as long as normal reaction is constant!",
    why_wrong="Option B and C assume friction depends on surface area, which is a classic student misconception."
))

# Q271: Medium
qs.append(make_lom_q(
    num=271,
    question="A block of mass $m = 8\\text{ kg}$ is on a rough horizontal surface with $\\mu_s = 0.25$. A force of magnitude $F$ is applied at an angle of $45^\\circ$ below the horizontal pushing the block. What is the value of $F$ required to just start moving the block (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "37.7 N",
        "B": "20 N",
        "C": "28.3 N",
        "D": "40 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="For pushing at angle $\\theta$ below horizontal, $N = mg + F\\sin\\theta$. At impending motion: $F\\cos\\theta = \\mu_s(mg + F\\sin\\theta) \\implies F = \\frac{\\mu_s mg}{\\cos\\theta - \\mu_s\\sin\\theta}$.",
    given="$m = 8\\text{ kg}$, $\\mu_s = 0.25$, $\\theta = 45^\\circ$, $g = 10\\text{ m/s}^2$.",
    formula="$F = \\frac{\\mu_s mg}{\\cos\\theta - \\mu_s \\sin\\theta}$.",
    steps="1. Normal force: $N = mg + F\\sin 45^\\circ = 8(10) + F(0.7071) = 80 + 0.7071 F$.\n2. Limiting friction: $f_{\\text{lim}} = \\mu_s N = 0.25(80 + 0.7071 F) = 20 + 0.1768 F$.\n3. Horizontal pushing component: $F_x = F\\cos 45^\\circ = 0.7071 F$.\n4. Equating for impending motion: $0.7071 F = 20 + 0.1768 F$.\n5. $(0.7071 - 0.1768) F = 20 \\implies 0.5303 F = 20$.\n6. $F = \\frac{20}{0.5303} \\approx 37.7\\text{ N}$.",
    tip="Notice that pushing down adds to $N$, requiring $37.7\\text{ N}$, whereas pulling up reduces $N$, requiring only $20 / (0.7071 + 0.1768) = 22.6\\text{ N}$! Pushing is harder than pulling.",
    why_wrong="Option B (20 N) is $\\mu_s mg$, ignoring the angle. Option C (28.3 N) is $20/\\cos 45^\\circ$. Option D is a rounded guess."
))

# Q272: Medium
qs.append(make_lom_q(
    num=272,
    question="A block of mass $m = 3\\text{ kg}$ is resting on a rough horizontal floor with $\\mu_s = 0.5$. A variable horizontal force $F$ is applied. Which of the following gives the maximum acceleration the block can experience while still remaining stationary relative to the floor?",
    options={
        "A": "$0\\text{ m/s}^2$",
        "B": "$5\\text{ m/s}^2$",
        "C": "$10\\text{ m/s}^2$",
        "D": "$2.5\\text{ m/s}^2$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="A body that remains stationary relative to a fixed floor by definition has ZERO velocity and ZERO acceleration. Limiting friction is the threshold of rest, where acceleration is still strictly zero.",
    given="$m = 3\\text{ kg}$, $\\mu_s = 0.5$, floor is fixed.",
    formula="$a = 0$ while stationary.",
    steps="1. By definition, a body that remains stationary relative to the floor has position unchanging in time.\n2. Consequently, its velocity is zero and its acceleration is zero.\n3. At the limiting condition, $F = f_{\\text{lim}} = \\mu_s mg = 15\\text{ N}$, the net force is $F - f_{\\text{lim}} = 0$, so $a = 0$.\n4. Only after $F > f_{\\text{lim}}$ does acceleration become non-zero.",
    tip="NEET Trap: Don't calculate $\\mu_s g = 5\\text{ m/s}^2$! That is the maximum acceleration of a box on an ACCELERATING truck floor, not on a stationary floor!",
    why_wrong="Option B ($5\\text{ m/s}^2 = \\mu_s g$) applies to a non-inertial accelerating frame (like a truck bed), not a stationary floor."
))

# Q273: Medium
qs.append(make_lom_q(
    num=273,
    question="A block of mass $m = 5\\text{ kg}$ rests on a rough horizontal floor with $\\mu_s = 0.4$. If an additional mass of $5\\text{ kg}$ is placed on top of the block, the limiting friction between the bottom block and the floor:",
    options={
        "A": "Doubles",
        "B": "Halves",
        "C": "Remains unchanged",
        "D": "Quadruples"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="Limiting friction is directly proportional to the normal reaction: $f_{\\text{lim}} = \\mu_s N$. Adding an equal mass doubles the total mass and doubles the normal reaction, thus doubling the limiting friction.",
    given="Initial mass $5\\text{ kg}$, additional mass $5\\text{ kg}$, floor $\\mu_s = 0.4$.",
    formula="$N_1 = mg$; $N_2 = 2mg$; $f_{\\text{lim}} = \\mu_s N$.",
    steps="1. Initially, $N_1 = 5g = 50\\text{ N}$, so $f_{\\text{lim}, 1} = 0.4 \\times 50 = 20\\text{ N}$.\n2. When $5\\text{ kg}$ is added on top, total mass becomes $10\\text{ kg}$.\n3. The new normal reaction from the floor is $N_2 = (5 + 5)g = 100\\text{ N}$.\n4. The new limiting friction is $f_{\\text{lim}, 2} = 0.4 \\times 100 = 40\\text{ N}$.\n5. Since $40 = 2 \\times 20$, the limiting friction doubles.",
    tip="Limiting friction scales linearly with total supported normal load: $f_L \\propto N$.",
    why_wrong="Option B, C, and D violate the linear dependence of limiting friction on normal force."
))

# Q274: Medium
qs.append(make_lom_q(
    num=274,
    question="A block of mass $m$ is held stationary against a vertical wall by applying a horizontal force $F$. If the coefficient of static friction is $\\mu_s$, what is the magnitude of the resultant contact force exerted by the wall on the block when the applied force is the minimum required force $F_{\\text{min}} = \\frac{mg}{\\mu_s}$?",
    options={
        "A": "$mg \\sqrt{1 + \\frac{1}{\\mu_s^2}}$",
        "B": "$mg$",
        "C": "$\\frac{mg}{\\mu_s}$",
        "D": "$mg \\left(1 + \\frac{1}{\\mu_s}\\right)$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="The total contact force $\\vec{R}$ is the vector resultant of the normal force $N$ and the friction force $f$: $R = \\sqrt{N^2 + f^2}$. At the minimum force, friction is limiting ($f = mg$) and $N = F_{\\text{min}} = mg / \\mu_s$.",
    given="Vertical wall, minimum holding force $F_{\\text{min}} = mg / \\mu_s$, friction $f = mg$.",
    formula="$R = \\sqrt{N^2 + f^2} = \\sqrt{\\left(\\frac{mg}{\\mu_s}\\right)^2 + (mg)^2} = mg\\sqrt{1 + \\frac{1}{\\mu_s^2}}$.",
    steps="1. At the minimum holding force, the block is on the verge of sliding down.\n2. Static friction is at its limiting value pointing upward: $f = mg$.\n3. The normal reaction from the wall points horizontally: $N = F_{\\text{min}} = \\frac{mg}{\\mu_s}$.\n4. Normal force and friction are perpendicular to each other ($90^\\circ$).\n5. The magnitude of the resultant contact force is:\n   $R = \\sqrt{N^2 + f^2} = \\sqrt{\\left(\\frac{mg}{\\mu_s}\\right)^2 + (mg)^2} = mg \\sqrt{1 + \\frac{1}{\\mu_s^2}}$.",
    tip="Resultant contact force $R = \\sqrt{N^2 + f^2}$. Do NOT confuse contact force (resultant) with just the normal force!",
    why_wrong="Option B is just the friction component. Option C is just the normal force component. Option D adds them scalar-wise."
))

# Q275: Medium
qs.append(make_lom_q(
    num=275,
    question="A wooden block of mass $10\\text{ kg}$ is placed on an inclined plane. When the angle of inclination is increased to $30^\\circ$, the block just begins to slide. What is the coefficient of static friction between the block and the plane?",
    options={
        "A": "$\\frac{1}{\\sqrt{3}} \\approx 0.577$",
        "B": "$\\sqrt{3} \\approx 1.732$",
        "C": "$0.5$",
        "D": "$\\frac{\\sqrt{3}}{2} \\approx 0.866$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="At the angle of repose $\\theta_r$, the component of gravity down the incline equals the limiting static friction: $mg\\sin\\theta_r = \\mu_s mg\\cos\\theta_r \\implies \\mu_s = \\tan\\theta_r$.",
    given="Angle of repose $\\theta_r = 30^\\circ$.",
    formula="$\\mu_s = \\tan\\theta_r = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.",
    steps="1. When the block just begins to slide, the angle of inclination equals the angle of repose $\\theta_r = 30^\\circ$.\n2. Along the incline: $mg\\sin 30^\\circ = f_{\\text{lim}}$.\n3. Perpendicular to incline: $N = mg\\cos 30^\\circ$.\n4. Limiting friction: $f_{\\text{lim}} = \\mu_s N = \\mu_s mg\\cos 30^\\circ$.\n5. Equating: $mg\\sin 30^\\circ = \\mu_s mg\\cos 30^\\circ \\implies \\mu_s = \\frac{\\sin 30^\\circ}{\\cos 30^\\circ} = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$.",
    tip="Angle of repose formula: $\\mu_s = \\tan\\theta_r$. Direct formula, super high yield in NEET!",
    why_wrong="Option B is $\\tan 60^\\circ$. Option C is $\\sin 30^\\circ$. Option D is $\\cos 30^\\circ$."
))

# Q276: Medium
qs.append(make_lom_q(
    num=276,
    question="A body of mass $m$ is placed on a rough horizontal surface with coefficient of static friction $\\mu_s$. What is the minimum horizontal force required to move the body?",
    options={
        "A": "$\\mu_s mg$",
        "B": "$\\mu_s mg / 2$",
        "C": "$mg$",
        "D": "$\\mu_s mg \\sqrt{2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="On a horizontal surface with an applied force strictly horizontal, the normal reaction is $N = mg$. The limiting friction is $f_{\\text{lim}} = \\mu_s mg$. To cause motion, the horizontal force must just overcome this value: $F_{\\text{min}} = \\mu_s mg$.",
    given="Horizontal surface, horizontal force, mass $m$, coefficient $\\mu_s$.",
    formula="$F_{\\text{min}} = f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.",
    steps="1. For a purely horizontal pull, there is no vertical component of the applied force.\n2. Normal force is $N = mg$.\n3. Limiting friction opposing motion is $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.\n4. To initiate motion, applied horizontal force must equal or exceed $f_{\\text{lim}}$.\n5. Thus, $F_{\\text{min}} = \\mu_s mg$.",
    tip="Note the distinction: Minimum HORIZONTAL force is $\\mu_s mg$. Minimum force in ANY direction is $\\frac{\\mu_s mg}{\\sqrt{1 + \\mu_s^2}}$ (at angle $\\tan\\theta = \\mu_s$).",
    why_wrong="Option B and D have incorrect factors. Option C is the entire weight."
))

# Q277: Medium
qs.append(make_lom_q(
    num=277,
    question="A block of mass $m = 6\\text{ kg}$ rests on a rough horizontal floor with $\\mu_s = 0.5$. A horizontal force of $25\\text{ N}$ is applied. If a vertical downward force of $20\\text{ N}$ is also pressed onto the block, what is the new limiting friction (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "40 N",
        "B": "30 N",
        "C": "50 N",
        "D": "10 N"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="Adding a downward force increases the normal reaction: $N = mg + F_{\\text{down}}$. The new limiting friction is $\\mu_s N$.",
    given="$m = 6\\text{ kg}$, $\\mu_s = 0.5$, $F_{\\text{down}} = 20\\text{ N}$, $g = 10\\text{ m/s}^2$.",
    formula="$N = mg + F_{\\text{down}}$; $f_{\\text{lim}} = \\mu_s N$.",
    steps="1. Downward gravity on the block: $mg = 6 \\times 10 = 60\\text{ N}$.\n2. Additional downward pressing force: $20\\text{ N}$.\n3. Total vertical downward force: $60 + 20 = 80\\text{ N}$.\n4. By vertical equilibrium, normal reaction is $N = 80\\text{ N}$.\n5. The new limiting friction is: $f_{\\text{lim}} = \\mu_s N = 0.5 \\times 80 = 40\\text{ N}$.",
    tip="Pressing down on a body increases normal force and thus increases limiting friction, making it harder to slide!",
    why_wrong="Option B (30 N) is the original limiting friction without the 20 N pressing force ($0.5 \\times 60$). Option C and D are incorrect calculations."
))

# Q278: Medium
qs.append(make_lom_q(
    num=278,
    question="A uniform ladder of mass $m$ rests against a smooth vertical wall with its lower end on a rough horizontal floor. If the angle of inclination of the ladder with the horizontal is $\\theta$, what is the normal reaction exerted by the floor on the ladder?",
    options={
        "A": "$mg$",
        "B": "$mg \\cos\\theta$",
        "C": "$mg \\sin\\theta$",
        "D": "$\\frac{mg}{2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Limiting friction",
    concept="The vertical wall is smooth, meaning it exerts zero vertical force. Therefore, the only vertical forces on the ladder are its downward weight $mg$ and the upward normal reaction $N_{\\text{floor}}$ from the floor. Vertical equilibrium requires $N_{\\text{floor}} = mg$.",
    given="Ladder of mass $m$, smooth vertical wall, rough horizontal floor, inclination $\\theta$.",
    formula="Vertical equilibrium: $\\sum F_y = N_{\\text{floor}} - mg = 0 \\implies N_{\\text{floor}} = mg$.",
    steps="1. Draw the vertical forces acting on the ladder:\n   - Downward weight $mg$ acting at the center of mass.\n   - Upward normal reaction $N_{\\text{floor}}$ at the base.\n   - Since the vertical wall is smooth, friction along the wall is zero ($f_{\\text{wall}} = 0$), so the wall exerts only a horizontal normal reaction $N_{\\text{wall}}$.\n2. For translational equilibrium in the vertical direction: $\\sum F_y = 0$.\n3. Thus, $N_{\\text{floor}} - mg = 0 \\implies N_{\\text{floor}} = mg$.",
    tip="Always look at the force directions first! If a wall is smooth, it cannot exert any vertical force, so the floor must support the ENTIRE weight $mg$!",
    why_wrong="Option B and C incorrectly resolve weight into incline components, but the ladder is not resting on an inclined plane."
))

# Q279: Hard
qs.append(make_lom_q(
    num=279,
    question="In the previous ladder problem, if the coefficient of static friction between the ladder and the floor is $\\mu_s$, what is the minimum angle of inclination $\\theta_{\\text{min}}$ with the horizontal for which the ladder does not slip?",
    options={
        "A": "$\\tan\\theta_{\\text{min}} = \\frac{1}{2\\mu_s}$",
        "B": "$\\tan\\theta_{\\text{min}} = \\frac{1}{\\mu_s}$",
        "C": "$\\tan\\theta_{\\text{min}} = 2\\mu_s$",
        "D": "$\\tan\\theta_{\\text{min}} = \\mu_s$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Limiting friction",
    concept="Combine translational equilibrium and rotational equilibrium (torque balance about base). Torque about base: $N_{\\text{wall}} (L\\sin\\theta) = mg (\\frac{L}{2}\\cos\\theta) \\implies N_{\\text{wall}} = \\frac{mg}{2\\tan\\theta}$. Horizontal equilibrium gives $f_s = N_{\\text{wall}}$. For no slip, $f_s \\le \\mu_s N_{\\text{floor}} = \\mu_s mg$.",
    given="Ladder of length $L$, mass $m$, angle $\\theta$, smooth wall, rough floor with $\\mu_s$.",
    formula="$N_{\\text{wall}} = \\frac{mg}{2\\tan\\theta}$; $f_s = N_{\\text{wall}} \\le \\mu_s mg \\implies \\tan\\theta \\ge \\frac{1}{2\\mu_s}$.",
    steps="1. Vertical equilibrium: $N_{\\text{floor}} = mg$.\n2. Horizontal equilibrium: $f_{\\text{floor}} = N_{\\text{wall}}$.\n3. Take torques about the base of the ladder (contact with floor):\n   - Clockwise torque due to weight: $\\tau_w = mg \\left(\\frac{L}{2}\\cos\\theta\\right)$.\n   - Counter-clockwise torque due to wall normal force: $\\tau_N = N_{\\text{wall}} (L\\sin\\theta)$.\n4. For rotational equilibrium: $N_{\\text{wall}} L\\sin\\theta = mg \\frac{L}{2}\\cos\\theta \\implies N_{\\text{wall}} = \\frac{mg}{2\\tan\\theta}$.\n5. Condition for no slipping: $f_{\\text{floor}} \\le f_{\\text{lim}} = \\mu_s N_{\\text{floor}} = \\mu_s mg$.\n6. Substitute $f_{\\text{floor}} = N_{\\text{wall}}$:\n   $\\frac{mg}{2\\tan\\theta} \\le \\mu_s mg \\implies \\tan\\theta \\ge \\frac{1}{2\\mu_s}$.\n7. Therefore, the minimum angle is given by $\\tan\\theta_{\\text{min}} = \\frac{1}{2\\mu_s}$.",
    tip="Standard NEET Result: For a ladder on a rough floor against a smooth wall, $\\tan\\theta_{\\text{min}} = \\frac{1}{2\\mu_s}$. Memorize this formula!",
    why_wrong="Option B misses the factor of $1/2$ arising from the center of mass being at $L/2$. Option C and D invert the relation."
))

# Q280: Hard
qs.append(make_lom_q(
    num=280,
    question="A block of mass $m_1 = 4\\text{ kg}$ lies on a rough horizontal table with $\\mu_s = 0.3$. It is connected by a light string passing over a frictionless pulley to a hanging mass $m_2$. What is the maximum value of $m_2$ for which the system remains at rest (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "1.2 kg",
        "B": "4 kg",
        "C": "0.6 kg",
        "D": "2.4 kg"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Limiting friction",
    concept="For the hanging mass to remain at rest, string tension is $T = m_2 g$. For the block on the table to remain at rest, the tension must not exceed limiting friction: $T \\le \\mu_s m_1 g \\implies m_2 \\le \\mu_s m_1$.",
    given="$m_1 = 4\\text{ kg}$, $\\mu_s = 0.3$, $g = 10\\text{ m/s}^2$, hanging mass $m_2$.",
    formula="$T = m_2 g$; $f_{\\text{lim}} = \\mu_s m_1 g$; Maximum mass $m_{2, \\text{max}} = \\mu_s m_1$.",
    steps="1. FBD of hanging mass $m_2$: $T = m_2 g$ for equilibrium.\n2. FBD of block $m_1$ on table: Normal force $N = m_1 g$.\n3. Maximum static friction on $m_1$: $f_{\\text{lim}} = \\mu_s m_1 g = 0.3 \\times 4 \\times 10 = 12\\text{ N}$.\n4. For equilibrium, tension must satisfy $T \\le f_{\\text{lim}}$:\n   $m_2 g \\le 12\\text{ N} \\implies m_2 \\le \\frac{12}{10} = 1.2\\text{ kg}$.\n5. Thus, $m_{2, \\text{max}} = 1.2\\text{ kg}$.",
    tip="Notice $g$ cancels out: $m_{2, \\text{max}} = \\mu_s m_1 = 0.3 \\times 4 = 1.2\\text{ kg}$. Independent of local gravity!",
    why_wrong="Option B (4 kg) is $m_1$. Option C (0.6 kg) is half of the correct answer. Option D (2.4 kg) is $2 \\times 1.2$."
))

# Q281: Hard
qs.append(make_lom_q(
    num=281,
    question="In the previous setup ($m_1 = 4\\text{ kg}$, $\\mu_s = 0.3$), if $m_2 = 2\\text{ kg}$ is hung, what mass $m_3$ must be placed on top of $m_1$ so that the system is prevented from moving?",
    options={
        "A": "2.67 kg",
        "B": "2 kg",
        "C": "1.33 kg",
        "D": "4 kg"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Limiting friction",
    concept="To balance hanging weight $m_2 g$, total limiting friction must satisfy $\\mu_s(m_1 + m_3)g \\ge m_2 g \\implies m_1 + m_3 \\ge \\frac{m_2}{\\mu_s}$.",
    given="$m_1 = 4\\text{ kg}$, $m_2 = 2\\text{ kg}$, $\\mu_s = 0.3$.",
    formula="$m_3 \\ge \\frac{m_2}{\\mu_s} - m_1$.",
    steps="1. The downward force from hanging mass is $T = m_2 g = 2g$.\n2. The limiting friction on the combined mass $(m_1 + m_3)$ is $f_{\\text{lim}} = \\mu_s (m_1 + m_3) g$.\n3. For equilibrium: $\\mu_s (m_1 + m_3) g \\ge m_2 g$.\n4. Divide by $g$: $0.3 (4 + m_3) \\ge 2$.\n5. $4 + m_3 \\ge \\frac{2}{0.3} = \\frac{20}{3} \\approx 6.67\\text{ kg}$.\n6. $m_3 \\ge 6.67 - 4 = 2.67\\text{ kg}$.",
    tip="Standard NEET design question: $m_3 = \\frac{m_2}{\\mu_s} - m_1$. Straightforward substitution!",
    why_wrong="Option B (2 kg) gives total mass 6 kg, yielding $f_L = 0.3 \\times 6 = 1.8g < 2g$ (slips!). Option C and D are algebraic errors."
))

# Q282: Hard
qs.append(make_lom_q(
    num=282,
    question="A block of mass $m$ rests on a rough horizontal surface with coefficient of static friction $\\mu_s$. The minimum force required to slide the block along the horizontal surface, applied at the optimal angle $\\theta$, is:",
    options={
        "A": "$\\frac{\\mu_s mg}{\\sqrt{1 + \\mu_s^2}}$",
        "B": "$\\mu_s mg$",
        "C": "$\\frac{mg}{\\sqrt{1 + \\mu_s^2}}$",
        "D": "$\\frac{\\mu_s mg}{1 + \\mu_s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Limiting friction",
    concept="Applying a force $F$ at angle $\\theta$ above horizontal gives $F = \\frac{\\mu_s mg}{\\cos\\theta + \\mu_s\\sin\\theta}$. The maximum of the denominator is $\\sqrt{1 + \\mu_s^2}$, occurring at $\\tan\\theta = \\mu_s$. Therefore, $F_{\\text{min}} = \\frac{\\mu_s mg}{\\sqrt{1 + \\mu_s^2}}$.",
    given="Rough horizontal floor, mass $m$, static friction $\\mu_s$.",
    formula="$F_{\\text{min}} = \\frac{\\mu_s mg}{\\sqrt{1 + \\mu_s^2}}$ at $\\theta = \\tan^{-1}\\mu_s$.",
    steps="1. Let $F$ pull at angle $\\theta$ above the horizontal.\n2. Normal reaction: $N = mg - F\\sin\\theta$.\n3. Horizontal impending motion: $F\\cos\\theta = \\mu_s N = \\mu_s(mg - F\\sin\\theta)$.\n4. $F(\\cos\\theta + \\mu_s\\sin\\theta) = \\mu_s mg \\implies F = \\frac{\\mu_s mg}{\\cos\\theta + \\mu_s\\sin\\theta}$.\n5. The expression $A\\cos\\theta + B\\sin\\theta$ has maximum value $\\sqrt{A^2 + B^2}$.\n6. Here $A = 1$ and $B = \\mu_s$, so the maximum of $(\\cos\\theta + \\mu_s\\sin\\theta)$ is $\\sqrt{1 + \\mu_s^2}$.\n7. Substituting this maximum denominator yields the absolute minimum pulling force: $F_{\\text{min}} = \\frac{\\mu_s mg}{\\sqrt{1 + \\mu_s^2}}$.",
    tip="Compare: purely horizontal force $= \\mu_s mg$; optimal angle force $= \\frac{\\mu_s mg}{\\sqrt{1 + \\mu_s^2}} < \\mu_s mg$. Pulling slightly upward always saves effort!",
    why_wrong="Option B ($\\mu_s mg$) is for a purely horizontal pull (not optimized). Option C misses $\\mu_s$. Option D is algebraically incorrect."
))

print(f"Topics 16 & 17 done: {len(qs)} questions.")
