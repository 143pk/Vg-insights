import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 22: Projectile launched from an elevated position (Q376 to Q391, 16 questions)
# Distribution: 4 Easy, 8 Medium, 4 Hard
# ==============================================================================

# Q376 - Easy
qs.append(make_plane_q(
    num=376,
    question="A stone is thrown horizontally with velocity $u$ from the top of a tower of height $h$. If it strikes the ground with velocity $v$, what is the relationship between $v, u, h$ and $g$?",
    options={
        "A": "$v = \\sqrt{u^2 + 2gh}$",
        "B": "$v = u + \\sqrt{2gh}$",
        "C": "$v = \\sqrt{u^2 - 2gh}$",
        "D": "$v = \\sqrt{2gh}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile launched from an elevated position",
    concept="By conservation of mechanical energy, the initial energy $E_i = \\frac{1}{2}m u^2 + mgh$ equals the final kinetic energy at ground impact $E_f = \\frac{1}{2}m v^2$. Thus, $v = \\sqrt{u^2 + 2gh}$.",
    given="Horizontal launch speed $u$, tower height $h$.",
    formula="v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{u^2 + 2gh}",
    steps=(
        "1. Horizontal component of velocity remains constant: $v_x = u$.\n"
        "2. Vertical component acquired in falling through height $h$: $v_y^2 = 0 + 2gh = 2gh$.\n"
        "3. Total impact speed: $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{u^2 + 2gh}$."
    ),
    tip="Energy shortcut: The striking speed depends ONLY on launch speed $u$ and height $h$, regardless of whether thrown horizontally, upwards, or downwards!",
    why_wrong="Option B simply adds speeds; Option D is for dropping from rest ($u = 0$)."
))

# Q377 - Easy
qs.append(make_plane_q(
    num=377,
    question="From the top of a building $45\\text{ m}$ high, a ball is thrown horizontally with speed $12\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, what is the horizontal distance from the base of the building to the landing point?",
    options={
        "A": "$36\\text{ m}$",
        "B": "$45\\text{ m}$",
        "C": "$24\\text{ m}$",
        "D": "$54\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile launched from an elevated position",
    concept="Time of flight is $t = \\sqrt{2h/g}$. Horizontal range is $R = u \\times t$.",
    given="$h = 45\\text{ m}$, $u = 12\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
    formula="t = \\sqrt{\\frac{2h}{g}}; R = u t",
    steps=(
        "1. Time of flight: $t = \\sqrt{\\frac{2 \\times 45}{10}} = \\sqrt{9} = 3\\text{ s}$.\n"
        "2. Horizontal distance: $R = u \\times t = 12 \\times 3 = 36\\text{ m}$."
    ),
    tip="Vertical fall time is always $\\sqrt{2h/g}$ for horizontal projection.",
    why_wrong="Option B assumes range equals building height; Option C uses $t = 2\\text{ s}$."
))

# Q378 - Easy
qs.append(make_plane_q(
    num=378,
    question="Three balls A, B, and C are projected from the top of a tower of height $h$ with the SAME speed $u$. Ball A is thrown vertically upwards, Ball B horizontally, and Ball C vertically downwards. Comparing their speeds $v_A, v_B, v_C$ upon striking the ground (neglecting air resistance):",
    options={
        "A": "$v_A = v_B = v_C$",
        "B": "$v_A > v_B > v_C$",
        "C": "$v_C > v_B > v_A$",
        "D": "$v_B > v_A = v_C$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile launched from an elevated position",
    concept="Mechanical energy conservation: All three balls start with the same kinetic energy $\\frac{1}{2}mu^2$ and same potential energy $mgh$. Since gravity is conservative and air resistance is neglected, all three have the exact same kinetic energy and therefore the same speed upon hitting the ground: $v = \\sqrt{u^2 + 2gh}$.",
    given="Same launch speed $u$, same height $h$, different projection angles.",
    formula="v = \\sqrt{u^2 + 2gh}",
    steps=(
        "1. Mechanical energy at launch: $E = \\frac{1}{2}m u^2 + mgh$ for all three balls.\n"
        "2. Upon reaching the ground, potential energy is zero: $E = \\frac{1}{2}m v^2$.\n"
        "3. By conservation of energy, $\\frac{1}{2}m v^2 = \\frac{1}{2}m u^2 + mgh \\implies v = \\sqrt{u^2 + 2gh}$.\n"
        "4. Since $u, g, h$ are identical for all three, $v_A = v_B = v_C$."
    ),
    tip="Their landing SPEEDS are identical, but their times of flight differ ($t_A > t_B > t_C$) and their velocity DIRECTIONS differ!",
    why_wrong="Options B and C confuse landing speed with time of flight."
))

# Q379 - Easy
qs.append(make_plane_q(
    num=379,
    question="In the previous question, comparing their TIMES OF FLIGHT $t_A, t_B, t_C$:",
    options={
        "A": "$t_A > t_B > t_C$",
        "B": "$t_A = t_B = t_C$",
        "C": "$t_C > t_B > t_A$",
        "D": "$t_B > t_A > t_C$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile launched from an elevated position",
    concept="Ball A has initial upward vertical velocity $+u$ (rises before falling, longest time). Ball B has zero initial vertical velocity (intermediate time). Ball C has downward vertical velocity $-u$ (accelerates downward immediately, shortest time).",
    given="Balls thrown up, horizontal, and down.",
    formula="t_A = \\frac{u + \\sqrt{u^2 + 2gh}}{g}; t_B = \\sqrt{\\frac{2h}{g}}; t_C = \\frac{-u + \\sqrt{u^2 + 2gh}}{g}",
    steps=(
        "1. Ball A must rise to apex and fall all the way down: longest duration $t_A$.\n"
        "2. Ball B falls from rest vertically: $t_B = \\sqrt{2h/g}$.\n"
        "3. Ball C is pushed directly downwards: shortest duration $t_C$.\n"
        "4. Therefore, $t_A > t_B > t_C$."
    ),
    tip="Famous NEET relation between the three times: $t_B = \\sqrt{t_A t_C}$! The horizontal flight time is the geometric mean of the vertical flight times!",
    why_wrong="Option B falsely assumes equal flight times."
))

# Q380 - Medium
qs.append(make_plane_q(
    num=380,
    question="A ball is thrown from the top of a tower of height $h$. If $t_1$ is the time taken to reach the ground when thrown vertically upwards with speed $u$, and $t_2$ is the time taken when thrown vertically downwards with the same speed $u$, what is the time taken $t$ to reach the ground when thrown HORIZONTALLY with speed $u$?",
    options={
        "A": "$t = \\sqrt{t_1 t_2}$",
        "B": "$t = \\frac{t_1 + t_2}{2}$",
        "C": "$t = \\frac{t_1 - t_2}{2}$",
        "D": "$t = \\frac{2 t_1 t_2}{t_1 + t_2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="For upward throw: $-h = u t_1 - \\frac{1}{2}gt_1^2 \\implies \\frac{1}{2}gt_1^2 - ut_1 - h = 0$. For downward throw: $h = u t_2 + \\frac{1}{2}gt_2^2 \\implies \\frac{1}{2}gt_2^2 + ut_2 - h = 0$. Eliminating $u$ yields $h = \\frac{1}{2}g t_1 t_2$. Since horizontal flight time is $t = \\sqrt{2h/g}$, we have $t = \\sqrt{t_1 t_2}$.",
    given="Upward time $t_1$, downward time $t_2$, horizontal time $t$.",
    formula="h = \\frac{1}{2}g t_1 t_2; t = \\sqrt{\\frac{2h}{g}} = \\sqrt{t_1 t_2}",
    steps=(
        "1. Equation for upward throw: $h = -u t_1 + \\frac{1}{2}g t_1^2$.\n"
        "2. Equation for downward throw: $h = u t_2 + \\frac{1}{2}g t_2^2$.\n"
        "3. Multiply Eq 1 by $t_2$ and Eq 2 by $t_1$, and add them:\n"
        "   $h(t_1 + t_2) = \\frac{1}{2}g t_1 t_2(t_1 + t_2) \\implies h = \\frac{1}{2}g t_1 t_2$.\n"
        "4. Horizontal projection flight time is $t = \\sqrt{\\frac{2h}{g}}$.\n"
        "5. Substitute $h = \\frac{1}{2}g t_1 t_2$:\n"
        "   $t = \\sqrt{\\frac{2(\\frac{1}{2}g t_1 t_2)}{g}} = \\sqrt{t_1 t_2}$."
    ),
    tip="NEET classic result: $t_{horizontal} = \\sqrt{t_{up} \\times t_{down}}$. Geometric mean!",
    why_wrong="Option B is the arithmetic mean; Option D is the harmonic mean."
))

# Q381 - Medium
qs.append(make_plane_q(
    num=381,
    question="In the previous question, if $t_1 = 9\\text{ s}$ and $t_2 = 4\\text{ s}$, what is the height of the tower $h$? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "$180\\text{ m}$",
        "B": "$360\\text{ m}$",
        "C": "$90\\text{ m}$",
        "D": "$60\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="Apply $h = \\frac{1}{2}g t_1 t_2$.",
    given="$t_1 = 9\\text{ s}, t_2 = 4\\text{ s}, g = 10\\text{ m/s}^2$.",
    formula="h = \\frac{1}{2}g t_1 t_2",
    steps=(
        "1. Substitute into formula:\n"
        "   $h = \\frac{1}{2} \\times 10 \\times (9 \\times 4) = 5 \\times 36 = 180\\text{ m}$."
    ),
    tip="Also notice: $t_{horiz} = \\sqrt{9 \\times 4} = \\sqrt{36} = 6\\text{ s}$, which gives $h = \\frac{1}{2}(10)(6^2) = 180\\text{ m}$!",
    why_wrong="Option B forgets the factor of $1/2$."
))

# Q382 - Medium
qs.append(make_plane_q(
    num=382,
    question="A body is projected horizontally from the top of a tower. After $t = 2\\text{ s}$, the velocity vector makes an angle of $45^\\circ$ with the horizontal. What was the initial speed of projection? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "$20\\text{ m/s}$",
        "B": "$10\\text{ m/s}$",
        "C": "$40\\text{ m/s}$",
        "D": "$15\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="For horizontal projection, $\\tan\\theta = \\frac{v_y}{v_x} = \\frac{gt}{u}$. For $\\theta = 45^\\circ$, $\\tan 45^\\circ = 1 \\implies u = gt$.",
    given="$t = 2\\text{ s}$, $\\theta = 45^\\circ$, $g = 10\\text{ m/s}^2$.",
    formula="u = gt = 10 \\times 2 = 20\\text{ m/s}",
    steps=(
        "1. Horizontal velocity: $v_x = u$.\n"
        "2. Vertical velocity after $t = 2\\text{ s}$: $v_y = gt = 10 \\times 2 = 20\\text{ m/s}$.\n"
        "3. Angle condition: $\\tan 45^\\circ = \\frac{v_y}{v_x} = 1 \\implies v_x = v_y$.\n"
        "4. Therefore, $u = 20\\text{ m/s}$."
    ),
    tip="At $45^\\circ$, horizontal speed equals vertical speed: $u = gt$.",
    why_wrong="Option B calculates $u = gt/2 = 10\\text{ m/s}$."
))

# Q383 - Medium
qs.append(make_plane_q(
    num=383,
    question="A bomber aircraft is flying horizontally at an altitude of $500\\text{ m}$ with a speed of $100\\text{ m/s}$. To hit a stationary target on the ground, at what horizontal distance from the target must the pilot release the bomb? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "$1000\\text{ m} = 1\\text{ km}$",
        "B": "$500\\text{ m}$",
        "C": "$1500\\text{ m}$",
        "D": "$2000\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="The released bomb maintains the horizontal speed of the aircraft $u = 100\\text{ m/s}$. The required distance is $x = u\\sqrt{\\frac{2h}{g}}$.",
    given="$h = 500\\text{ m}$, $u = 100\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
    formula="t = \\sqrt{\\frac{2h}{g}}; x = u t",
    steps=(
        "1. Fall time of bomb: $t = \\sqrt{\\frac{2 \\times 500}{10}} = \\sqrt{100} = 10\\text{ s}$.\n"
        "2. Horizontal distance traveled during fall:\n"
        "   $x = u \\times t = 100 \\times 10 = 1000\\text{ m} = 1\\text{ km}$."
    ),
    tip="Release lead distance = Plane speed $\\times$ Free fall time.",
    why_wrong="Option B is the vertical altitude, not the horizontal release distance."
))

# Q384 - Medium
qs.append(make_plane_q(
    num=384,
    question="In the previous question, what is the line-of-sight sighting angle $\\phi$ with the vertical at which the pilot should view the target at the moment of bomb release?",
    options={
        "A": "$\\tan^{-1}(2) \\approx 63.4^\\circ$",
        "B": "$45^\\circ$",
        "C": "$\\tan^{-1}(0.5) \\approx 26.6^\\circ$",
        "D": "$30^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="The sighting angle with the vertical is $\\tan\\phi = \\frac{\\text{horizontal distance}}{\\text{vertical altitude}} = \\frac{x}{h}$.",
    given="$x = 1000\\text{ m}, h = 500\\text{ m}$.",
    formula="\\tan\\phi = \\frac{x}{h} = \\frac{1000}{500} = 2",
    steps=(
        "1. Horizontal separation at release: $x = 1000\\text{ m}$.\n"
        "2. Vertical altitude: $h = 500\\text{ m}$.\n"
        "3. Angle with vertical: $\\tan\\phi = \\frac{x}{h} = \\frac{1000}{500} = 2$.\n"
        "4. Thus, $\\phi = \\tan^{-1}(2) \\approx 63.4^\\circ$."
    ),
    tip="Angle with vertical is $x/h = 2$; angle with horizontal is $h/x = 0.5$. Always verify the reference axis requested!",
    why_wrong="Option C is the angle with horizontal, not with vertical."
))

# Q385 - Medium
qs.append(make_plane_q(
    num=385,
    question="A ball is thrown from the top of an elevated tower of height $H = 25\\text{ m}$ at an angle of $30^\\circ$ above the horizontal with speed $u = 20\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, what is the maximum height reached by the ball ABOVE THE GROUND?",
    options={
        "A": "$30\\text{ m}$",
        "B": "$5\\text{ m}$",
        "C": "$25\\text{ m}$",
        "D": "$45\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="Total maximum height above ground is the sum of tower height $H$ and the maximum projectile rise above the launch level: $H_{total} = H + \\frac{u^2\\sin^2\\theta}{2g}$.",
    given="$H = 25\\text{ m}$, $u = 20\\text{ m/s}$, $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
    formula="H_{total} = H + \\frac{u^2\\sin^2\\theta}{2g}",
    steps=(
        "1. Rise above tower: $h_{rise} = \\frac{u^2\\sin^2 30^\\circ}{2g} = \\frac{20^2 (0.5)^2}{2(10)} = \\frac{400 \\times 0.25}{20} = \\frac{100}{20} = 5\\text{ m}$.\n"
        "2. Tower height: $H = 25\\text{ m}$.\n"
        "3. Total height above ground: $H_{total} = 25 + 5 = 30\\text{ m}$."
    ),
    tip="Watch the wording carefully: 'Above ground' means add tower height ($25 + 5 = 30\\text{ m}$); 'above tower' means just $5\\text{ m}$.",
    why_wrong="Option B is the height above the tower roof only."
))

# Q386 - Medium
qs.append(make_plane_q(
    num=386,
    question="A projectile is thrown horizontally with velocity $u$ from the top of a tower. After what time $t$ will the displacement vector of the projectile make an angle of $45^\\circ$ with the horizontal?",
    options={
        "A": "$\\frac{2u}{g}$",
        "B": "$\\frac{u}{g}$",
        "C": "$\\frac{u}{2g}$",
        "D": "$\\frac{\\sqrt{2}u}{g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="Distinguish displacement angle from velocity angle! Horizontal displacement is $x = ut$, vertical displacement is $y = \\frac{1}{2}gt^2$. Displacement angle is $\\tan\\beta = \\frac{y}{x} = \\frac{gt}{2u}$. For $\\beta = 45^\\circ$, $\\frac{gt}{2u} = 1 \\implies t = \\frac{2u}{g}$.",
    given="Displacement angle $\\beta = 45^\\circ$.",
    formula="\\tan\\beta = \\frac{y}{x} = \\frac{gt}{2u} = 1 \\implies t = \\frac{2u}{g}",
    steps=(
        "1. Horizontal displacement: $x = ut$.\n"
        "2. Vertical displacement downward: $y = \\frac{1}{2}gt^2$.\n"
        "3. Direction of displacement vector: $\\tan\\beta = \\frac{y}{x} = \\frac{\\frac{1}{2}gt^2}{ut} = \\frac{gt}{2u}$.\n"
        "4. Given $\\beta = 45^\\circ \\implies \\tan 45^\\circ = 1$:\n"
        "   $\\frac{gt}{2u} = 1 \\implies t = \\frac{2u}{g}$."
    ),
    tip="CRUCIAL DISTINCTION: Velocity makes $45^\\circ$ at $t = u/g$ (since $\\tan\\theta = v_y/v_x = gt/u$). But DISPLACEMENT makes $45^\\circ$ at $t = 2u/g$ (since $y/x = gt/2u$)! Double the time!",
    why_wrong="Option B is the time when the VELOCITY vector makes $45^\\circ$, not the displacement vector."
))

# Q387 - Medium
qs.append(make_plane_q(
    num=387,
    question="In horizontal projection from height $h$, what is the relationship between the angle $\\theta$ made by the velocity vector with the horizontal and the angle $\\beta$ made by the displacement vector with the horizontal at any instant?",
    options={
        "A": "$\\tan\\theta = 2\\tan\\beta$",
        "B": "$\\tan\\theta = \\tan\\beta$",
        "C": "$\\tan\\beta = 2\\tan\\theta$",
        "D": "$\\tan\\theta = \\frac{1}{2}\\tan\\beta$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile launched from an elevated position",
    concept="Velocity angle satisfies $\\tan\\theta = \\frac{v_y}{v_x} = \\frac{gt}{u}$. Displacement angle satisfies $\\tan\\beta = \\frac{y}{x} = \\frac{gt}{2u}$. Therefore, $\\tan\\theta = 2\\tan\\beta$.",
    given="Horizontal projection at time $t$.",
    formula="\\tan\\theta = \\frac{gt}{u}; \\tan\\beta = \\frac{gt}{2u} \\implies \\tan\\theta = 2\\tan\\beta",
    steps=(
        "1. Velocity ratio: $\\tan\\theta = \\frac{v_y}{v_x} = \\frac{gt}{u}$.\n"
        "2. Displacement ratio: $\\tan\\beta = \\frac{y}{x} = \\frac{\\frac{1}{2}gt^2}{ut} = \\frac{gt}{2u}$.\n"
        "3. Comparing the two expressions:\n"
        "   $\\tan\\theta = 2 \\left(\\frac{gt}{2u}\\right) = 2\\tan\\beta$."
    ),
    tip="Universal property of all parabolas: The slope of the tangent (velocity) is always TWICE the slope of the secant (displacement) from the vertex!",
    why_wrong="Option C inverts the ratio 2."
))

# Q388 - Hard
qs.append(make_plane_q(
    num=388,
    question="Two towers of heights $h_1 = 40\\text{ m}$ and $h_2 = 20\\text{ m}$ are separated by a horizontal distance $d = 20\\text{ m}$. A stone is thrown horizontally from the top of the taller tower with speed $u$. What must be the speed $u$ so that it lands exactly on top of the shorter tower? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "$10\\text{ m/s}$",
        "B": "$20\\text{ m/s}$",
        "C": "$5\\text{ m/s}$",
        "D": "$14.14\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile launched from an elevated position",
    concept="The vertical drop between the two tower roofs is $\\Delta h = h_1 - h_2 = 40 - 20 = 20\\text{ m}$. Time to fall this distance is $t = \\sqrt{2\\Delta h/g}$. Then $u = d / t$.",
    given="$h_1 = 40\\text{ m}, h_2 = 20\\text{ m}, d = 20\\text{ m}, g = 10\\text{ m/s}^2$.",
    formula="\\Delta h = h_1 - h_2; t = \\sqrt{\\frac{2\\Delta h}{g}}; u = \\frac{d}{t}",
    steps=(
        "1. Vertical distance to be fallen: $\\Delta h = 40 - 20 = 20\\text{ m}$.\n"
        "2. Fall time: $t = \\sqrt{\\frac{2 \\times 20}{10}} = \\sqrt{4} = 2\\text{ s}$.\n"
        "3. Horizontal distance between roofs: $d = 20\\text{ m}$.\n"
        "4. Required launch speed: $u = \\frac{d}{t} = \\frac{20}{2} = 10\\text{ m/s}$."
    ),
    tip="Notice that ground height is irrelevant: only the difference in height $\\Delta h$ matters!",
    why_wrong="Option B uses $t = 1\\text{ s}$."
))

# Q389 - Hard
qs.append(make_plane_q(
    num=389,
    question="A ball is projected horizontally with velocity $u$ from the top of a tower. At the instant when the velocity vector makes an angle of $45^\\circ$ with the horizontal, what is the radius of curvature of the path?",
    options={
        "A": "$\\frac{2\\sqrt{2} u^2}{g}$",
        "B": "$\\frac{\\sqrt{2} u^2}{g}$",
        "C": "$\\frac{u^2}{g}$",
        "D": "$\\frac{2u^2}{g}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile launched from an elevated position",
    concept="Radius of curvature is $R_c = \\frac{v^2}{a_{\\perp}}$. At $45^\\circ$, $v_x = u$ and $v_y = u$, so $v = u\\sqrt{2}$. The component of gravity perpendicular to velocity is $g\\cos 45^\\circ = g/\\sqrt{2}$.",
    given="$v_x = u, v_y = u, v = u\\sqrt{2}$, angle with horizontal is $45^\\circ$.",
    formula="R_c = \\frac{v^2}{a_{\\perp}} = \\frac{(u\\sqrt{2})^2}{g\\cos 45^\\circ} = \\frac{2u^2}{g / \\sqrt{2}} = \\frac{2\\sqrt{2}u^2}{g}",
    steps=(
        "1. At $45^\\circ$, $v_y = v_x = u$, so total speed is $v = \\sqrt{u^2 + u^2} = u\\sqrt{2}$.\n"
        "2. Gravity acts vertically downward. The angle between gravity and velocity is $45^\\circ$.\n"
        "3. Perpendicular acceleration component: $a_{\\perp} = g\\cos 45^\\circ = \\frac{g}{\\sqrt{2}}$.\n"
        "4. Radius of curvature:\n"
        "   $R_c = \\frac{v^2}{a_{\\perp}} = \\frac{(u\\sqrt{2})^2}{g / \\sqrt{2}} = \\frac{2u^2}{g / \\sqrt{2}} = \\frac{2\\sqrt{2}u^2}{g}$."
    ),
    tip="Substitute carefully: $v^2 = 2u^2$ and $a_{\\perp} = g/\\sqrt{2} \\implies R_c = 2\\sqrt{2}u^2/g$.",
    why_wrong="Option B forgets the factor of 2 from $v^2 = 2u^2$."
))

# Q390 - Hard
qs.append(make_plane_q(
    num=390,
    question="From the top of a tower of height $H = 20\\text{ m}$, two particles are projected horizontally in opposite directions with speeds $u_1 = 3\\text{ m/s}$ and $u_2 = 4\\text{ m/s}$. What is the distance between the two particles when their velocity vectors are MUTUALLY PERPENDICULAR?",
    options={
        "A": "$2.45\\sqrt{12}\\dots$ wait, compute time first: $t = \\frac{\\sqrt{u_1 u_2}}{g}$",
        "B": "$2.45\\text{ m}$",
        "C": "$7\\text{ m}$",
        "D": "$4.9\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile launched from an elevated position",
    concept="Velocities are $\\vec{v}_1 = u_1\\hat{i} - gt\\hat{j}$ and $\\vec{v}_2 = -u_2\\hat{i} - gt\\hat{j}$. Perpendicularity condition is $\\vec{v}_1 \\cdot \\vec{v}_2 = 0 \\implies -u_1 u_2 + g^2 t^2 = 0 \\implies t = \\frac{\\sqrt{u_1 u_2}}{g}$. Separation distance is $(u_1 + u_2)t$.",
    given="$u_1 = 3\\text{ m/s}, u_2 = 4\\text{ m/s}, g = 10\\text{ m/s}^2$.",
    formula="t = \\frac{\\sqrt{u_1 u_2}}{g}; d = (u_1 + u_2)t",
    steps=(
        "1. Dot product condition for perpendicularity:\n"
        "   $\\vec{v}_1 \\cdot \\vec{v}_2 = (u_1)(-u_2) + (-gt)(-gt) = -u_1 u_2 + g^2 t^2 = 0$.\n"
        "2. Solve for time: $t = \\frac{\\sqrt{u_1 u_2}}{g}$.\n"
        "3. For $u_1 = 3, u_2 = 4$: $u_1 u_2 = 12 \\implies t = \\frac{\\sqrt{12}}{10} = \\frac{2\\sqrt{3}}{10} = \\frac{\\sqrt{3}}{5}\\text{ s}$.\n"
        "4. Both particles fall at the same vertical rate, so vertical separation is zero!\n"
        "5. Horizontal separation distance: $d = x_1 - (-x_2) = (u_1 + u_2)t = (3 + 4)t = 7 \\times \\frac{\\sqrt{12}}{10} = \\frac{7\\sqrt{12}}{10} = \\frac{14\\sqrt{3}}{10} = 1.4\\sqrt{3} \\approx 2.42\\text{ m}$."
    ),
    tip="Famous NEET result: Condition for mutual perpendicularity is $t = \\frac{\\sqrt{u_1 u_2}}{g}$, and horizontal separation is $\\frac{(u_1 + u_2)\\sqrt{u_1 u_2}}{g}$!",
    why_wrong="Option C is $(u_1 + u_2) \\times 1\\text{ s}$."
))

# Clean Q390 options:
qs[-1]["options"] = {
    "A": "$1.4\\sqrt{3}\\text{ m} \\approx 2.42\\text{ m}$",
    "B": "$3.5\\text{ m}$",
    "C": "$7.0\\text{ m}$",
    "D": "$4.9\\text{ m}$"
}
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: $1.4\\sqrt{3}\\text{ m} \\approx 2.42\\text{ m}$"

# Q391 - Hard
qs.append(make_plane_q(
    num=391,
    question="In the previous question, what is the vertical displacement fallen by each particle when their velocity vectors become mutually perpendicular?",
    options={
        "A": "$\\frac{u_1 u_2}{2g} = 0.6\\text{ m}$",
        "B": "$1.2\\text{ m}$",
        "C": "$0.3\\text{ m}$",
        "D": "$2.4\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile launched from an elevated position",
    concept="Substitute $t^2 = \\frac{u_1 u_2}{g^2}$ into $y = \\frac{1}{2}gt^2$: $y = \\frac{1}{2}g \\left(\\frac{u_1 u_2}{g^2}\\right) = \\frac{u_1 u_2}{2g}$.",
    given="$u_1 = 3\\text{ m/s}, u_2 = 4\\text{ m/s}, g = 10\\text{ m/s}^2$.",
    formula="y = \\frac{u_1 u_2}{2g}",
    steps=(
        "1. Time of perpendicularity squared: $t^2 = \\frac{u_1 u_2}{g^2}$.\n"
        "2. Vertical drop: $y = \\frac{1}{2}g t^2 = \\frac{1}{2}g \\left(\\frac{u_1 u_2}{g^2}\\right) = \\frac{u_1 u_2}{2g}$.\n"
        "3. Substitute values:\n"
        "   $y = \\frac{3 \\times 4}{2 \\times 10} = \\frac{12}{20} = 0.6\\text{ m}$."
    ),
    tip="Universal NEET formula: Vertical drop when velocities are perpendicular is $y = \\frac{u_1 u_2}{2g}$.",
    why_wrong="Option B forgets the $1/2$ in $\\frac{1}{2}gt^2$."
))

# ==============================================================================
# Topic 23: Complementary projection angles (Q392 to Q406, 15 questions)
# Distribution: 4 Easy, 8 Medium, 3 Hard
# ==============================================================================

# Q392 - Easy
qs.append(make_plane_q(
    num=392,
    question="Two angles of projection are said to be complementary if their sum is:",
    options={
        "A": "$90^\\circ$ (or $\\frac{\\pi}{2}\\text{ rad}$)",
        "B": "$180^\\circ$ (or $\\pi\\text{ rad}$)",
        "C": "$45^\\circ$",
        "D": "$360^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Complementary projection angles",
    concept="By geometric definition, two angles are complementary if their sum is $90^\\circ$. For projectiles with the same launch speed, complementary angles produce the identical horizontal range.",
    given="Definition of complementary angles.",
    formula="\\theta_1 + \\theta_2 = 90^\\circ",
    steps=(
        "1. Two angles $\\theta_1$ and $\\theta_2$ are complementary if $\\theta_1 + \\theta_2 = 90^\\circ$.\n"
        "2. Examples include $(30^\\circ, 60^\\circ)$, $(15^\\circ, 75^\\circ)$, and $(45^\\circ + \\alpha, 45^\\circ - \\alpha)$."
    ),
    tip="Complementary means $90^\\circ$; supplementary means $180^\\circ$.",
    why_wrong="Option B defines supplementary angles."
))

# Q393 - Easy
qs.append(make_plane_q(
    num=393,
    question="A projectile thrown at $30^\\circ$ has a horizontal range of $60\\text{ m}$. What will be the horizontal range if thrown with the SAME speed at $60^\\circ$?",
    options={
        "A": "$60\\text{ m}$",
        "B": "$30\\text{ m}$",
        "C": "$120\\text{ m}$",
        "D": "$60\\sqrt{3}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Complementary projection angles",
    concept="Since $30^\\circ + 60^\\circ = 90^\\circ$, they are complementary angles. For the same speed $u$, $R(30^\\circ) = R(60^\\circ) = 60\\text{ m}$.",
    given="$R(30^\\circ) = 60\\text{ m}$, same speed at $60^\\circ$.",
    formula="R(\\theta) = R(90^\\circ - \\theta)",
    steps=(
        "1. $30^\\circ$ and $60^\\circ$ are complementary angles.\n"
        "2. The horizontal range for both angles is given by $R = \\frac{u^2\\sin 2\\theta}{g}$.\n"
        "3. $\\sin(2 \\times 30^\\circ) = \\sin 60^\\circ$ and $\\sin(2 \\times 60^\\circ) = \\sin 120^\\circ = \\sin 60^\\circ$.\n"
        "4. Both produce the identical range of $60\\text{ m}$."
    ),
    tip="Zero calculation needed: Complementary angles always have equal ranges for the same launch speed!",
    why_wrong="Options B, C, and D violate the complementary angle theorem."
))

# Q394 - Easy
qs.append(make_plane_q(
    num=394,
    question="Between two complementary angles $\\theta$ and $(90^\\circ - \\theta)$ with $\\theta < 45^\\circ$, which trajectory has the longer time of flight?",
    options={
        "A": "The larger angle $(90^\\circ - \\theta)$",
        "B": "The smaller angle $\\theta$",
        "C": "Both have the same time of flight",
        "D": "It depends on the mass"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Complementary projection angles",
    concept="Time of flight is $T = \\frac{2u\\sin\\alpha}{g}$. Since $\\sin\\alpha$ increases with angle $\\alpha$ in $[0, 90^\\circ]$, the larger angle has a larger vertical velocity component $u_y$, resulting in a longer time of flight.",
    given="Complementary angles with $\\theta < 45^\\circ < (90^\\circ - \\theta)$.",
    formula="T \\propto \\sin\\alpha",
    steps=(
        "1. Time of flight: $T = \\frac{2u\\sin\\alpha}{g}$.\n"
        "2. For the larger angle, $\\sin(90^\\circ - \\theta) = \\cos\\theta > \\sin\\theta$.\n"
        "3. Therefore, $T(90^\\circ - \\theta) > T(\\theta)$."
    ),
    tip="The steeper trajectory stays in the air longer and reaches higher, even though both land at the same horizontal distance!",
    why_wrong="Option C is true for range, not time of flight."
))

# Q395 - Easy
qs.append(make_plane_q(
    num=395,
    question="For complementary angles of projection with the same launch speed $u$, what is the sum of the maximum heights $(H_1 + H_2)$?",
    options={
        "A": "$\\frac{u^2}{2g}$",
        "B": "$\\frac{u^2}{g}$",
        "C": "$\\frac{2u^2}{g}$",
        "D": "$\\frac{u^2}{4g}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Complementary projection angles",
    concept="$H_1 + H_2 = \\frac{u^2\\sin^2\\theta}{2g} + \\frac{u^2\\cos^2\\theta}{2g} = \\frac{u^2}{2g}(\\sin^2\\theta + \\cos^2\\theta) = \\frac{u^2}{2g}$.",
    given="$\theta_1 = \theta, \theta_2 = 90^\circ - \theta$.",
    formula="H_1 + H_2 = \\frac{u^2}{2g}",
    steps=(
        "1. $H_1 = \\frac{u^2\\sin^2\\theta}{2g}$.\n"
        "2. $H_2 = \\frac{u^2\\sin^2(90^\\circ - \\theta)}{2g} = \\frac{u^2\\cos^2\\theta}{2g}$.\n"
        "3. Add: $H_1 + H_2 = \\frac{u^2}{2g}(\\sin^2\\theta + \\cos^2\\theta) = \\frac{u^2}{2g}$."
    ),
    tip="The sum of the heights is constant and equal to the maximum vertical height achieved at $90^\\circ$!",
    why_wrong="Option B lacks the 2 in the denominator."
))

# Q396 - Medium
qs.append(make_plane_q(
    num=396,
    question="If $T_1$ and $T_2$ are the times of flight for two complementary angles with the same launch speed $u$, what is the relationship between $(T_1^2 + T_2^2)$ and $u$?",
    options={
        "A": "$T_1^2 + T_2^2 = \\frac{4u^2}{g^2}$",
        "B": "$T_1^2 + T_2^2 = \\frac{2u^2}{g^2}$",
        "C": "$T_1^2 + T_2^2 = \\frac{u^2}{g^2}$",
        "D": "$T_1^2 + T_2^2 = \\frac{8u^2}{g^2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Complementary projection angles",
    concept="Sum of squares: $T_1^2 + T_2^2 = \\frac{4u^2\\sin^2\\theta}{g^2} + \\frac{4u^2\\cos^2\\theta}{g^2} = \\frac{4u^2}{g^2}(\\sin^2\\theta + \\cos^2\\theta) = \\frac{4u^2}{g^2}$.",
    given="Complementary times of flight $T_1$ and $T_2$.",
    formula="T_1^2 + T_2^2 = \\frac{4u^2}{g^2}",
    steps=(
        "1. $T_1 = \\frac{2u\\sin\\theta}{g} \\implies T_1^2 = \\frac{4u^2\\sin^2\\theta}{g^2}$.\n"
        "2. $T_2 = \\frac{2u\\cos\\theta}{g} \\implies T_2^2 = \\frac{4u^2\\cos^2\\theta}{g^2}$.\n"
        "3. Add them: $T_1^2 + T_2^2 = \\frac{4u^2}{g^2}(\\sin^2\\theta + \\cos^2\\theta) = \\frac{4u^2}{g^2}$."
    ),
    tip="Universal constant: $T_1^2 + T_2^2 = \\frac{4u^2}{g^2}$ is independent of the angle $\\theta$!",
    why_wrong="Option B loses a factor of 2 in squaring."
))

# Q397 - Medium
qs.append(make_plane_q(
    num=397,
    question="The ratio of the maximum heights reached by a projectile at complementary angles is $1 : 3$. What are the two projection angles?",
    options={
        "A": "$30^\\circ$ and $60^\\circ$",
        "B": "$15^\\circ$ and $75^\\circ$",
        "C": "$45^\\circ$ and $45^\\circ$",
        "D": "$20^\\circ$ and $70^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Complementary projection angles",
    concept="The ratio of heights is $\\frac{H_1}{H_2} = \\frac{\\sin^2\\theta}{\\cos^2\\theta} = \\tan^2\\theta$. If $\\tan^2\\theta = 1/3$, then $\\tan\\theta = 1/\\sqrt{3} \\implies \\theta = 30^\\circ$. The complementary angle is $60^\\circ$.",
    given="$\\frac{H_1}{H_2} = \\frac{1}{3}$.",
    formula="\\tan^2\\theta = \\frac{1}{3} \\implies \\tan\\theta = \\frac{1}{\\sqrt{3}} \\implies \\theta = 30^\\circ",
    steps=(
        "1. Ratio of heights: $\\frac{H_1}{H_2} = \\frac{u^2\\sin^2\\theta / 2g}{u^2\\cos^2\\theta / 2g} = \\tan^2\\theta$.\n"
        "2. Given: $\\tan^2\\theta = \\frac{1}{3}$.\n"
        "3. Take square root: $\\tan\\theta = \\frac{1}{\\sqrt{3}}$.\n"
        "4. Therefore, $\\theta = 30^\\circ$, and its complement is $90^\\circ - 30^\\circ = 60^\\circ$."
    ),
    tip="$\\frac{H_1}{H_2} = \\tan^2\\theta$. If ratio is $1:3 \\implies \\theta = 30^\\circ$. If ratio is $1:1 \\implies \\theta = 45^\\circ$!",
    why_wrong="Option B gives $\\tan^2 15^\\circ = (2 - \\sqrt{3})^2 \\approx 0.07$."
))

# Q398 - Medium
qs.append(make_plane_q(
    num=398,
    question="For two complementary projection angles $\\theta$ and $(90^\\circ - \\theta)$, if $R$ is the common range, what is $\\frac{R}{\\sqrt{H_1 H_2}}$?",
    options={
        "A": "$4$",
        "B": "$2$",
        "C": "$16$",
        "D": "$1$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Complementary projection angles",
    concept="From $R = 4\\sqrt{H_1 H_2}$, the ratio $\\frac{R}{\\sqrt{H_1 H_2}}$ is identically equal to $4$.",
    given="Common range $R$, complementary heights $H_1, H_2$.",
    formula="R = 4\\sqrt{H_1 H_2} \\implies \\frac{R}{\\sqrt{H_1 H_2}} = 4",
    steps=(
        "1. $H_1 = \\frac{u^2\\sin^2\\theta}{2g}$, $H_2 = \\frac{u^2\\cos^2\\theta}{2g}$.\n"
        "2. $\\sqrt{H_1 H_2} = \\frac{u^2\\sin\\theta\\cos\\theta}{2g}$.\n"
        "3. Range $R = \\frac{2u^2\\sin\\theta\\cos\\theta}{g} = 4 \\left(\\frac{u^2\\sin\\theta\\cos\\theta}{2g}\\right) = 4\\sqrt{H_1 H_2}$.\n"
        "4. Thus, $\\frac{R}{\\sqrt{H_1 H_2}} = 4$."
    ),
    tip="A pure numerical invariant: $R / \\sqrt{H_1 H_2} = 4$, regardless of speed, gravity, or angles!",
    why_wrong="Option C is $R^2 / (H_1 H_2) = 16$."
))

# Q399 - Medium
qs.append(make_plane_q(
    num=399,
    question="Two projectiles launched with the same speed at complementary angles have times of flight $T_1 = 3\\text{ s}$ and $T_2 = 4\\text{ s}$. Taking $g = 10\\text{ m/s}^2$, what is their common horizontal range?",
    options={
        "A": "$60\\text{ m}$",
        "B": "$120\\text{ m}$",
        "C": "$30\\text{ m}$",
        "D": "$240\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Complementary projection angles",
    concept="Apply $R = \\frac{1}{2}g T_1 T_2$.",
    given="$T_1 = 3\\text{ s}, T_2 = 4\\text{ s}, g = 10\\text{ m/s}^2$.",
    formula="R = \\frac{1}{2}g T_1 T_2",
    steps=(
        "1. From $T_1 T_2 = \\frac{2R}{g}$, we have $R = \\frac{1}{2}g T_1 T_2$.\n"
        "2. Substitute values:\n"
        "   $R = \\frac{1}{2} \\times 10 \\times (3 \\times 4) = 5 \\times 12 = 60\\text{ m}$."
    ),
    tip="Direct substitution: $R = 5 \\times 3 \\times 4 = 60\\text{ m}$!",
    why_wrong="Option B forgets the factor of $1/2$ ($g T_1 T_2 = 120$)."
))

# Q400 - Medium
qs.append(make_plane_q(
    num=400,
    question="In the previous question, what was the initial launch speed $u$ of both projectiles?",
    options={
        "A": "$25\\text{ m/s}$",
        "B": "$20\\text{ m/s}$",
        "C": "$50\\text{ m/s}$",
        "D": "$15\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Complementary projection angles",
    concept="From $T_1^2 + T_2^2 = \\frac{4u^2}{g^2}$, solve for $u$: $u = \\frac{g}{2}\\sqrt{T_1^2 + T_2^2}$.",
    given="$T_1 = 3\\text{ s}, T_2 = 4\\text{ s}, g = 10\\text{ m/s}^2$.",
    formula="u = \\frac{g}{2}\\sqrt{T_1^2 + T_2^2}",
    steps=(
        "1. Sum of squares: $T_1^2 + T_2^2 = 3^2 + 4^2 = 9 + 16 = 25$.\n"
        "2. Square root: $\\sqrt{T_1^2 + T_2^2} = 5\\text{ s}$.\n"
        "3. Launch speed:\n"
        "   $u = \\frac{g}{2} \\times 5 = \\frac{10}{2} \\times 5 = 5 \\times 5 = 25\\text{ m/s}$."
    ),
    tip="Notice the 3-4-5 triangle: $\\sqrt{3^2 + 4^2} = 5$. Speed is $\\frac{g}{2} \\times 5 = 25\\text{ m/s}$!",
    why_wrong="Option C forgets to divide by 2."
))

# Q401 - Medium
qs.append(make_plane_q(
    num=401,
    question="Two projectiles are launched at complementary angles with the same speed $u$. What is the angle between their initial velocity vectors?",
    options={
        "A": "$|90^\\circ - 2\\theta|$",
        "B": "$90^\\circ$",
        "C": "$2\\theta$",
        "D": "$45^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Complementary projection angles",
    concept="The angle between the two velocity vectors is the difference between their launch angles: $\\Delta\\alpha = |(90^\\circ - \\theta) - \\theta| = |90^\\circ - 2\\theta|$.",
    given="Angles $\\theta$ and $90^\\circ - \\theta$.",
    formula="\\Delta\\alpha = |90^\\circ - 2\\theta|",
    steps=(
        "1. First vector makes angle $\\theta$ with horizontal.\n"
        "2. Second vector makes angle $90^\\circ - \\theta$ with horizontal.\n"
        "3. Angle between them is the difference: $(90^\\circ - \\theta) - \\theta = 90^\\circ - 2\\theta$."
    ),
    tip="For example: for $30^\\circ$ and $60^\\circ$, angle between them is $60^\\circ - 30^\\circ = 30^\\circ = 90^\\circ - 2(30^\\circ)$!",
    why_wrong="Option B confuses the sum of angles ($90^\\circ$) with their difference."
))

# Q402 - Medium
qs.append(make_plane_q(
    num=402,
    question="If two projectiles are launched with the same speed at complementary angles, when are their initial velocity vectors MUTUALLY PERPENDICULAR?",
    options={
        "A": "Never (unless one is $0^\\circ$ and the other is $90^\\circ$)",
        "B": "When $\\theta = 45^\\circ$",
        "C": "When $\\theta = 30^\\circ$",
        "D": "Always"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Complementary projection angles",
    concept="For $\\Delta\\alpha = 90^\\circ$, $|90^\\circ - 2\\theta| = 90^\\circ \\implies 2\\theta = 0 \\implies \\theta = 0^\\circ$ (horizontal) and $90^\\circ$ (vertical). For any intermediate angle ($0 < \\theta < 90^\\circ$), the angle between them is strictly less than $90^\\circ$.",
    given="Angle difference $|90^\\circ - 2\\theta| = 90^\\circ$.",
    formula="|90^\\circ - 2\\theta| = 90^\\circ \\implies \\theta = 0^\\circ",
    steps=(
        "1. Angle between vectors is $|90^\\circ - 2\\theta|$.\n"
        "2. For perpendicularity, $|90^\\circ - 2\\theta| = 90^\\circ$.\n"
        "3. This requires $2\\theta = 0^\\circ \\implies \\theta = 0^\\circ$ or $2\\theta = 180^\\circ \\implies \\theta = 90^\\circ$.\n"
        "4. For true oblique projectiles ($0 < \\theta < 90^\\circ$), they can never be mutually perpendicular."
    ),
    tip="At $\\theta = 45^\\circ$, they are collinear (angle difference is $0^\\circ$). The difference is strictly between $0^\\circ$ and $90^\\circ$.",
    why_wrong="Option B gives angle difference $0^\\circ$ (parallel)."
))

# Q403 - Hard
qs.append(make_plane_q(
    num=403,
    question="Two bodies are projected from the same point with the same speed $u$ at complementary angles $\\theta$ and $(90^\\circ - \\theta)$. What is the distance between them at the instant when the lower projectile reaches its maximum height?",
    options={
        "A": "$\\frac{u^2}{2g}\\sin\\theta\\sqrt{(\\cot\\theta - 1)^2 + (\\tan\\theta - 1)^2}\\dots$ wait, compute directly using coordinates",
        "B": "$\\frac{u^2}{g}$",
        "C": "$H_2 - H_1$",
        "D": "$\\frac{u^2\\cos 2\\theta}{g}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Complementary projection angles",
    concept="Since both experience the same acceleration $\\vec{g}$, their relative acceleration is zero: $\\vec{a}_{rel} = 0$. The separation vector at time $t$ is simply $\\Delta\\vec{r}(t) = (\\vec{u}_1 - \\vec{u}_2)t$. At $t = \\frac{u\\sin\\theta}{g}$, compute $|\\vec{u}_1 - \\vec{u}_2| t$.",
    given="Relative velocity $\\Delta\\vec{u} = u(\\cos\\theta - \\sin\\theta)\\hat{i} + u(\\sin\\theta - \\cos\\theta)\\hat{j}$.",
    formula="|\\Delta\\vec{r}| = |\\Delta\\vec{u}| t = \\sqrt{2} u |\\cos\\theta - \\sin\\theta| \\left(\\frac{u\\sin\\theta}{g}\\right)",
    steps=(
        "1. Relative velocity between the two projectiles:\n"
        "   $\\Delta v_x = u\\cos\\theta - u\\sin\\theta = u(\\cos\\theta - \\sin\\theta)$.\n"
        "   $\\Delta v_y = u\\sin\\theta - u\\cos\\theta = -u(\\cos\\theta - \\sin\\theta)$.\n"
        "2. Magnitude of relative velocity:\n"
        "   $|\\Delta\\vec{v}| = \\sqrt{(\\Delta v_x)^2 + (\\Delta v_y)^2} = \\sqrt{2} u |\\cos\\theta - \\sin\\theta|$.\n"
        "3. Since relative acceleration is ZERO ($\\vec{a}_{rel} = \\vec{g} - \\vec{g} = 0$):\n"
        "   Separation distance at time $t$ is $d(t) = |\\Delta\\vec{v}| \\times t$.\n"
        "4. Time to reach maximum height for the lower projectile: $t = \\frac{u\\sin\\theta}{g}$.\n"
        "5. Distance: $d = \\sqrt{2} u |\\cos\\theta - \\sin\\theta| \\times \\frac{u\\sin\\theta}{g} = \\frac{\\sqrt{2}u^2\\sin\\theta(\\cos\\theta - \\sin\\theta)}{g}$."
    ),
    tip="Super shortcut: Because relative acceleration is zero, separation is simply Relative Speed $\\times$ Time!",
    why_wrong="Option B ignores the angular dependence."
))

# Clean Q403 options:
qs[-1]["options"] = {
    "A": "$\\frac{\\sqrt{2}u^2\\sin\\theta(\\cos\\theta - \\sin\\theta)}{g}$",
    "B": "$\\frac{u^2\\cos 2\\theta}{g}$",
    "C": "$\\frac{u^2}{2g}$",
    "D": "$\\frac{\\sqrt{2}u^2}{g}$"
}
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: $\\frac{\\sqrt{2}u^2\\sin\\theta(\\cos\\theta - \\sin\\theta)}{g}$"

# Q404 - Hard
qs.append(make_plane_q(
    num=404,
    question="In the previous question, if $\\theta = 30^\\circ$ and $u = 20\\text{ m/s}$ (with $g = 10\\text{ m/s}^2$), what is the separation distance between the two projectiles at $t = 1\\text{ s}$ (the peak of the $30^\\circ$ projectile)?",
    options={
        "A": "$20\\sqrt{2}(\\frac{\\sqrt{3}-1}{2})\\text{ m} = 10\\sqrt{2}(\\sqrt{3}-1)\\text{ m} \\approx 10.35\\text{ m}$",
        "B": "$15.5\\text{ m}$",
        "C": "$20\\text{ m}$",
        "D": "$5\\sqrt{2}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Complementary projection angles",
    concept="Substitute values into $d = \\sqrt{2}u(\\cos 30^\\circ - \\sin 30^\\circ) t$.",
    given="$u = 20\\text{ m/s}, \\theta = 30^\\circ, t = 1\\text{ s}$.",
    formula="d = \\sqrt{2} \\times 20 \\times \\left(\\frac{\\sqrt{3} - 1}{2}\\right) \\times 1 = 10\\sqrt{2}(\\sqrt{3} - 1)",
    steps=(
        "1. Component difference: $\\cos 30^\\circ - \\sin 30^\\circ = \\frac{\\sqrt{3}}{2} - \\frac{1}{2} = \\frac{\\sqrt{3} - 1}{2}$.\n"
        "2. Relative speed: $v_{rel} = \\sqrt{2} u \\left(\\frac{\\sqrt{3}-1}{2}\\right) = \\sqrt{2}(20)\\left(\\frac{\\sqrt{3}-1}{2}\\right) = 10\\sqrt{2}(\\sqrt{3}-1)$.\n"
        "3. At $t = 1\\text{ s}$, distance is $d = v_{rel} \\times 1 = 10\\sqrt{2}(\\sqrt{3}-1) \\approx 14.14 \\times 0.732 \\approx 10.35\\text{ m}$."
    ),
    tip="Calculate: $10\\sqrt{2} \\approx 14.14$, $(\\sqrt{3}-1) \\approx 0.732$. Product $\\approx 10.35\\text{ m}$.",
    why_wrong="Option C ignores the relative angle trigonometric factors."
))

# Q405 - Hard
qs.append(make_plane_q(
    num=405,
    question="For complementary angles $\\theta$ and $(90^\\circ - \\theta)$, what is the ratio of their kinetic energies at their respective highest points?",
    options={
        "A": "$\\cot^2\\theta$",
        "B": "$\\tan^2\\theta$",
        "C": "$\\tan\\theta$",
        "D": "$1$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Complementary projection angles",
    concept="At highest point, kinetic energy is $K_{top} = K_0\\cos^2\\alpha$. For $\\alpha_1 = \\theta$, $K_{top1} = K_0\\cos^2\\theta$. For $\\alpha_2 = 90^\\circ - \\theta$, $K_{top2} = K_0\\cos^2(90^\\circ - \\theta) = K_0\\sin^2\\theta$. Ratio is $\\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\cot^2\\theta$.",
    given="Angles $\\theta$ and $90^\\circ - \\theta$.",
    formula="\\frac{K_{top1}}{K_{top2}} = \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\cot^2\\theta",
    steps=(
        "1. Kinetic energy at top for first projectile: $K_1 = \\frac{1}{2}m (u\\cos\\theta)^2 = K_0 \\cos^2\\theta$.\n"
        "2. Kinetic energy at top for second projectile: $K_2 = \\frac{1}{2}m (u\\cos(90^\\circ - \\theta))^2 = K_0 \\sin^2\\theta$.\n"
        "3. Ratio: $\\frac{K_1}{K_2} = \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\cot^2\\theta$."
    ),
    tip="Notice this is the INVERSE of the height ratio: $\\frac{K_{top1}}{K_{top2}} = \\frac{H_2}{H_1} = \\cot^2\\theta$!",
    why_wrong="Option B is the height ratio $H_1/H_2 = \\tan^2\\theta$."
))

# Q406 - Hard
qs.append(make_plane_q(
    num=406,
    question="A target at distance $R$ can be hit by two trajectories with times of flight $T_1$ and $T_2$. If a delay $\\Delta t = (T_2 - T_1)$ is introduced between firing the faster trajectory and the slower trajectory, both projectiles will strike the target simultaneously. What is the value of $(T_2 - T_1)$ in terms of $R, \\theta$ and $g$?",
    options={
        "A": "$\\frac{2u}{g}(\\cos\\theta - \\sin\\theta)$",
        "B": "$\\frac{2u}{g}$",
        "C": "$\\frac{R}{u}$",
        "D": "$\\frac{2u}{g}\\sin 2\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Complementary projection angles",
    concept="Subtract the two times of flight: $T_2 - T_1 = \\frac{2u\\cos\\theta}{g} - \\frac{2u\\sin\\theta}{g} = \\frac{2u}{g}(\\cos\\theta - \\sin\\theta)$.",
    given="$T_1 = \\frac{2u\\sin\\theta}{g}, T_2 = \\frac{2u\\cos\\theta}{g}$ with $\\theta < 45^\\circ$.",
    formula="T_2 - T_1 = \\frac{2u}{g}(\\cos\\theta - \\sin\\theta)",
    steps=(
        "1. Times of flight: $T_1 = \\frac{2u\\sin\\theta}{g}$ and $T_2 = \\frac{2u\\cos\\theta}{g}$.\n"
        "2. Since $\\theta < 45^\\circ$, $\\cos\\theta > \\sin\\theta$, so $T_2 > T_1$.\n"
        "3. Difference: $\\Delta t = T_2 - T_1 = \\frac{2u}{g}(\\cos\\theta - \\sin\\theta)$."
    ),
    tip="Military ballistics application: To hit a target simultaneously with two shells from one gun, fire the high trajectory first, then wait $\\Delta t$ and fire the low trajectory!",
    why_wrong="Option B lacks the angle factor; Option C is just the flat transit time."
))

# ==============================================================================
# Topic 24: Projectile motion on inclined or sloping ground (Q407 to Q421, 15 questions)
# Distribution: 4 Easy, 7 Medium, 4 Hard
# ==============================================================================

# Q407 - Easy
qs.append(make_plane_q(
    num=407,
    question="When analyzing projectile motion on an inclined plane of inclination $\\alpha$, which coordinate axes are most convenient to choose?",
    options={
        "A": "x-axis along the inclined plane and y-axis perpendicular to the inclined plane",
        "B": "Horizontal and vertical axes",
        "C": "Polar coordinates",
        "D": "Only vertical axis"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion on inclined or sloping ground",
    concept="Tilting the coordinate axes such that the x-axis lies along the incline and the y-axis is perpendicular to the incline reduces the landing condition to simply $y = 0$.",
    given="Motion on an incline of angle $\\alpha$.",
    formula="a_x = -g\\sin\\alpha; a_y = -g\\cos\\alpha",
    steps=(
        "1. Choosing the x-axis parallel to the incline and y-axis normal to the incline means the surface of the incline is the line $y = 0$.\n"
        "2. The landing condition is then simply $y(T) = 0$, exactly like standard projectile motion on level ground.\n"
        "3. Acceleration due to gravity decomposes into: $a_x = -g\\sin\\alpha$ (down the slope) and $a_y = -g\\cos\\alpha$ (into the slope)."
    ),
    tip="In tilted axes: gravity has BOTH an x-component ($-g\\sin\\alpha$) and a y-component ($-g\\cos\\alpha$)!",
    why_wrong="Option B makes the landing boundary an oblique line $y = x\\tan\\alpha$, complicating the algebra."
))

# Q408 - Easy
qs.append(make_plane_q(
    num=408,
    question="What is the component of acceleration due to gravity PERPENDICULAR to an inclined plane of angle $\\alpha$?",
    options={
        "A": "$g\\cos\\alpha$",
        "B": "$g\\sin\\alpha$",
        "C": "$g\\tan\\alpha$",
        "D": "$g$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion on inclined or sloping ground",
    concept="Resolve the vertically downward gravity vector along the tilted axes: the normal component into the incline is $g\\cos\\alpha$, and the downhill component is $g\\sin\\alpha$.",
    given="Incline of angle $\\alpha$.",
    formula="a_{\\perp} = g\\cos\\alpha; a_{\\parallel} = g\\sin\\alpha",
    steps=(
        "1. Incline angle with horizontal is $\\alpha$.\n"
        "2. The normal to the incline makes an angle $\\alpha$ with the vertical.\n"
        "3. Therefore, the component of gravity along the normal is $g\\cos\\alpha$."
    ),
    tip="At $\\alpha = 0$ (flat ground), normal component is $g\\cos 0^\\circ = g$. As $\\alpha \\to 90^\\circ$ (cliff), normal component approaches 0.",
    why_wrong="Option B is the parallel (downhill) component."
))

# Q409 - Easy
qs.append(make_plane_q(
    num=409,
    question="A projectile is thrown UP an inclined plane of angle $\\alpha$ with speed $u$ at an angle $\\beta$ with the inclined plane. What is its time of flight $T$ on the incline?",
    options={
        "A": "$T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$",
        "B": "$T = \\frac{2u\\sin\\beta}{g}$",
        "C": "$T = \\frac{2u\\cos\\beta}{g\\sin\\alpha}$",
        "D": "$T = \\frac{u\\sin\\beta}{g\\cos\\alpha}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion on inclined or sloping ground",
    concept="In the tilted frame, initial velocity normal to incline is $u_y = u\\sin\\beta$ and normal acceleration is $a_y = -g\\cos\\alpha$. Set $y = u_y T - \\frac{1}{2}(g\\cos\\alpha)T^2 = 0 \\implies T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$.",
    given="Incline angle $\\alpha$, launch angle with incline $\\beta$.",
    formula="T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}",
    steps=(
        "1. Initial velocity perpendicular to incline: $u_{\\perp} = u\\sin\\beta$.\n"
        "2. Acceleration perpendicular to incline: $a_{\\perp} = g\\cos\\alpha$.\n"
        "3. Flight time is when perpendicular displacement returns to zero: $y = 0$.\n"
        "4. $u_{\\perp} T - \\frac{1}{2}a_{\\perp} T^2 = 0 \\implies T = \\frac{2u_{\\perp}}{a_{\\perp}} = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$."
    ),
    tip="Notice: simply replace $g$ with the effective normal gravity $g\\cos\\alpha$!",
    why_wrong="Option B uses standard flat-ground gravity $g$."
))

# Q410 - Easy
qs.append(make_plane_q(
    num=410,
    question="How does the time of flight for projectile motion DOWN an incline compare with that UP an incline, for the same launch speed $u$, same incline angle $\\alpha$, and same relative launch angle $\\beta$?",
    options={
        "A": "They are exactly equal: $T_{down} = T_{up} = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$",
        "B": "$T_{down} > T_{up}$",
        "C": "$T_{down} < T_{up}$",
        "D": "$T_{down} = 2 T_{up}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Projectile motion on inclined or sloping ground",
    concept="The perpendicular motion is governed solely by $u_{\\perp} = u\\sin\\beta$ and $a_{\\perp} = g\\cos\\alpha$, which are completely identical whether moving uphill or downhill. Thus $T_{down} = T_{up}$.",
    given="Uphill vs downhill projection with identical $u, \\alpha, \\beta$.",
    formula="T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}",
    steps=(
        "1. For uphill: $a_y = -g\\cos\\alpha$, $u_y = u\\sin\\beta \\implies T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$.\n"
        "2. For downhill: $a_y = -g\\cos\\alpha$, $u_y = u\\sin\\beta \\implies T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$.\n"
        "3. The normal acceleration does not care whether motion is up or down the slope.\n"
        "4. Therefore, the times of flight are identical."
    ),
    tip="Time of flight is identical up or down the incline! But RANGE down the incline is much larger because downhill gravity assists the motion!",
    why_wrong="Options B and C confuse range with time of flight."
))

# Q411 - Medium
qs.append(make_plane_q(
    num=411,
    question="A particle is projected up an incline of angle $\\alpha = 30^\\circ$ with speed $u = 20\\text{ m/s}$ at an angle $\\beta = 30^\\circ$ with the incline. Taking $g = 10\\text{ m/s}^2$, what is its time of flight on the incline?",
    options={
        "A": "$\\frac{4}{\\sqrt{3}}\\text{ s} \\approx 2.31\\text{ s}$",
        "B": "$2\\text{ s}$",
        "C": "$4\\text{ s}$",
        "D": "$2\\sqrt{3}\\text{ s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion on inclined or sloping ground",
    concept="Substitute into $T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$.",
    given="$u = 20\\text{ m/s}, \\beta = 30^\\circ, \\alpha = 30^\\circ, g = 10\\text{ m/s}^2$.",
    formula="T = \\frac{2(20)\\sin 30^\\circ}{10\\cos 30^\\circ} = \\frac{40(0.5)}{10(\\sqrt{3}/2)} = \\frac{20}{5\\sqrt{3}} = \\frac{4}{\\sqrt{3}}\\text{ s}",
    steps=(
        "1. Perpendicular speed: $u_{\\perp} = 20\\sin 30^\\circ = 10\\text{ m/s}$.\n"
        "2. Perpendicular acceleration: $a_{\\perp} = g\\cos 30^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\text{ m/s}^2$.\n"
        "3. Time of flight:\n"
        "   $T = \\frac{2 u_{\\perp}}{a_{\\perp}} = \\frac{2 \\times 10}{5\\sqrt{3}} = \\frac{4}{\\sqrt{3}}\\text{ s}$."
    ),
    tip="Direct calculation: $T = 20 / (5\\sqrt{3}) = 4/\\sqrt{3}\\text{ s}$.",
    why_wrong="Option B forgets the $g\\cos\\alpha$ reduction ($20/10 = 2\\text{ s}$)."
))

# Q412 - Medium
qs.append(make_plane_q(
    num=412,
    question="The range $R$ of a projectile thrown UP an incline of angle $\\alpha$ with speed $u$ at angle $\\beta$ with the incline is given by:",
    options={
        "A": "$R = \\frac{u^2}{g\\cos^2\\alpha}[\\sin(2\\beta + \\alpha) - \\sin\\alpha]$",
        "B": "$R = \\frac{u^2}{g\\cos^2\\alpha}[\\sin(2\\beta + \\alpha) + \\sin\\alpha]$",
        "C": "$R = \\frac{u^2\\sin 2\\beta}{g\\cos\\alpha}$",
        "D": "$R = \\frac{u^2\\sin 2\\beta}{g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion on inclined or sloping ground",
    concept="Kinematics along the incline: $R = u_x T - \\frac{1}{2}a_x T^2 = (u\\cos\\beta)T - \\frac{1}{2}(g\\sin\\alpha)T^2$. Substituting $T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$ simplifies to $\\frac{u^2}{g\\cos^2\\alpha}[\\sin(2\\beta + \\alpha) - \\sin\\alpha]$.",
    given="Incline projection up the slope.",
    formula="R = \\frac{u^2}{g\\cos^2\\alpha}[\\sin(2\\beta + \\alpha) - \\sin\\alpha]",
    steps=(
        "1. Along the incline: $x(t) = u\\cos\\beta t - \\frac{1}{2}(g\\sin\\alpha) t^2$.\n"
        "2. Substitute $T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$:\n"
        "   $R = (u\\cos\\beta)\\left(\\frac{2u\\sin\\beta}{g\\cos\\alpha}\\right) - \\frac{1}{2}(g\\sin\\alpha)\\left(\\frac{2u\\sin\\beta}{g\\cos\\alpha}\\right)^2$.\n"
        "3. Factor common terms and use product-to-sum trigonometric identities:\n"
        "   $R = \\frac{u^2}{g\\cos^2\\alpha}[\\sin(2\\beta + \\alpha) - \\sin\\alpha]$."
    ),
    tip="For $\\alpha = 0$ (level ground), it reduces to $\\frac{u^2}{g}[\\sin 2\\beta - 0] = \\frac{u^2\\sin 2\\beta}{g}$! Always check $\\alpha = 0$ to verify!",
    why_wrong="Option B has a plus sign, which corresponds to motion DOWN the incline."
))

# Q413 - Medium
qs.append(make_plane_q(
    num=413,
    question="For a projectile thrown up an incline of angle $\\alpha$, what angle $\\beta$ with the incline maximizes the range up the incline?",
    options={
        "A": "$\\beta = \\frac{\\pi}{4} - \\frac{\\alpha}{2} = 45^\\circ - \\frac{\\alpha}{2}$",
        "B": "$\\beta = 45^\\circ$",
        "C": "$\\beta = 45^\\circ + \\frac{\\alpha}{2}$",
        "D": "$\\beta = \\frac{\\alpha}{2}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion on inclined or sloping ground",
    concept="In $R = \\frac{u^2}{g\\cos^2\\alpha}[\\sin(2\\beta + \\alpha) - \\sin\\alpha]$, the range is maximum when $\\sin(2\\beta + \\alpha) = 1 \\implies 2\\beta + \\alpha = 90^\\circ \\implies \\beta = 45^\\circ - \\frac{\\alpha}{2}$.",
    given="Range formula with variable $\\beta$.",
    formula="2\\beta + \\alpha = 90^\\circ \\implies \\beta = 45^\\circ - \\frac{\\alpha}{2}",
    steps=(
        "1. To maximize $R$, maximize the term $\\sin(2\\beta + \\alpha)$.\n"
        "2. The maximum of sine is 1, occurring when the argument is $90^\\circ$:\n"
        "   $2\\beta + \\alpha = 90^\\circ$.\n"
        "3. Solve for $\\beta$:\n"
        "   $2\\beta = 90^\\circ - \\alpha \\implies \\beta = 45^\\circ - \\frac{\\alpha}{2}$."
    ),
    tip="Bisector rule: The optimum launch direction bisects the angle between the inclined plane and the vertical!",
    why_wrong="Option B ($45^\\circ$) is optimum only for flat ground ($\alpha = 0$); Option C is optimum for DOWN the incline."
))

# Q414 - Medium
qs.append(make_plane_q(
    num=414,
    question="What is the MAXIMUM RANGE achievable up an incline of angle $\\alpha$ for launch speed $u$?",
    options={
        "A": "$R_{max} = \\frac{u^2}{g(1 + \\sin\\alpha)}$",
        "B": "$R_{max} = \\frac{u^2}{g(1 - \\sin\\alpha)}$",
        "C": "$R_{max} = \\frac{u^2}{g\\cos\\alpha}$",
        "D": "$R_{max} = \\frac{u^2}{g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion on inclined or sloping ground",
    concept="Substitute $\\sin(2\\beta + \\alpha) = 1$ into range formula: $R_{max} = \\frac{u^2}{g\\cos^2\\alpha}(1 - \\sin\\alpha) = \\frac{u^2(1 - \\sin\\alpha)}{g(1 - \\sin^2\\alpha)} = \\frac{u^2}{g(1 + \\sin\\alpha)}$.",
    given="$\sin(2\beta + \alpha) = 1$.",
    formula="R_{max} = \\frac{u^2}{g(1 + \\sin\\alpha)}",
    steps=(
        "1. Set $\\sin(2\\beta + \\alpha) = 1$ in the range equation:\n"
        "   $R_{max} = \\frac{u^2}{g\\cos^2\\alpha}(1 - \\sin\\alpha)$.\n"
        "2. Use $\\cos^2\\alpha = 1 - \\sin^2\\alpha = (1 - \\sin\\alpha)(1 + \\sin\\alpha)$:\n"
        "   $R_{max} = \\frac{u^2(1 - \\sin\\alpha)}{g(1 - \\sin\\alpha)(1 + \\sin\\alpha)}$.\n"
        "3. Cancel $(1 - \\sin\\alpha)$:\n"
        "   $R_{max} = \\frac{u^2}{g(1 + \\sin\\alpha)}$."
    ),
    tip="NEET standard formulas: Up the incline: $\\frac{u^2}{g(1 + \\sin\\alpha)}$. Down the incline: $\\frac{u^2}{g(1 - \\sin\\alpha)}$!",
    why_wrong="Option B is the maximum range DOWN the incline."
))

# Q415 - Medium
qs.append(make_plane_q(
    num=415,
    question="A particle is projected from the base of an incline of angle $30^\\circ$ with speed $u = 20\\text{ m/s}$. Taking $g = 10\\text{ m/s}^2$, what is the MAXIMUM RANGE it can achieve UP the incline?",
    options={
        "A": "\\frac{80}{3}\\text{ m} \\approx 26.67\\text{ m}",
        "B": "$40\\text{ m}$",
        "C": "$20\\text{ m}$",
        "D": "$80\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion on inclined or sloping ground",
    concept="Use $R_{max} = \\frac{u^2}{g(1 + \\sin\\alpha)}$ with $\\alpha = 30^\\circ$.",
    given="$u = 20\\text{ m/s}, \\alpha = 30^\\circ, g = 10\\text{ m/s}^2$.",
    formula="R_{max} = \\frac{u^2}{g(1 + \\sin 30^\\circ)} = \\frac{20^2}{10(1 + 0.5)} = \\frac{400}{15} = \\frac{80}{3}\\text{ m}",
    steps=(
        "1. Calculate $1 + \\sin 30^\\circ = 1 + 0.5 = 1.5 = \\frac{3}{2}$.\n"
        "2. Compute maximum range:\n"
        "   $R_{max} = \\frac{20^2}{10 \\times 1.5} = \\frac{400}{15} = \\frac{80}{3}\\text{ m} \\approx 26.67\\text{ m}$."
    ),
    tip="Compare with flat ground maximum range: $u^2/g = 40\\text{ m}$. Up a $30^\\circ$ incline, range is reduced to $26.67\\text{ m}$!",
    why_wrong="Option B is the flat ground range $u^2/g = 40\\text{ m}$."
))

# Q416 - Medium
qs.append(make_plane_q(
    num=416,
    question="In the previous question, what would be the MAXIMUM RANGE if the particle were projected DOWN the same incline with the same speed?",
    options={
        "A": "$80\\text{ m}$",
        "B": "$40\\text{ m}$",
        "C": "$\\frac{80}{3}\\text{ m}$",
        "D": "$160\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion on inclined or sloping ground",
    concept="For projection down the incline, $R_{max, down} = \\frac{u^2}{g(1 - \\sin\\alpha)}$.",
    given="$u = 20\\text{ m/s}, \\alpha = 30^\\circ, g = 10\\text{ m/s}^2$.",
    formula="R_{max} = \\frac{u^2}{g(1 - \\sin 30^\\circ)} = \\frac{400}{10(1 - 0.5)} = \\frac{400}{5} = 80\\text{ m}",
    steps=(
        "1. Downhill denominator: $1 - \\sin 30^\\circ = 1 - 0.5 = 0.5$.\n"
        "2. Maximum range down the incline:\n"
        "   $R_{max, down} = \\frac{20^2}{10(0.5)} = \\frac{400}{5} = 80\\text{ m}$."
    ),
    tip="Notice: Downhill range ($80\\text{ m}$) is EXACTLY 3 times the uphill range ($80/3\\text{ m}$) for a $30^\\circ$ incline!",
    why_wrong="Option B is flat ground range; Option C is uphill range."
))

# Q417 - Medium
qs.append(make_plane_q(
    num=417,
    question="A particle is projected from the base of an incline of angle $\\alpha$ with velocity $u$ at angle $\\beta$ with the incline. If the particle strikes the incline PERPENDICULARLY, what is the condition relating $\\beta$ and $\\alpha$?",
    options={
        "A": "$\\tan\\beta = \\frac{\\cot\\alpha}{2}$ (or $\\cot\\beta = 2\\tan\\alpha$)",
        "B": "$\\tan\\beta = 2\\tan\\alpha$",
        "C": "$\\beta = \\alpha$",
        "D": "$\\tan\\beta = \\tan\\alpha$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Projectile motion on inclined or sloping ground",
    concept="If the projectile strikes the incline perpendicularly, its velocity parallel to the incline at landing must be ZERO: $v_x(T) = 0 \\implies u\\cos\\beta - (g\\sin\\alpha)T = 0$. Substitute $T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$.",
    given="Strikes incline perpendicularly $\\implies v_x(T) = 0$.",
    formula="u\\cos\\beta = (g\\sin\\alpha)\\left(\\frac{2u\\sin\\beta}{g\\cos\\alpha}\\right) \\implies \\cot\\beta = 2\\tan\\alpha",
    steps=(
        "1. Perpendicular landing means velocity along the incline is zero: $v_x = 0$.\n"
        "2. Kinematic equation along incline: $v_x = u\\cos\\beta - (g\\sin\\alpha)T = 0$.\n"
        "3. Substitute $T = \\frac{2u\\sin\\beta}{g\\cos\\alpha}$:\n"
        "   $u\\cos\\beta = (g\\sin\\alpha) \\frac{2u\\sin\\beta}{g\\cos\\alpha} = 2u\\sin\\beta \\tan\\alpha$.\n"
        "4. Divide by $u\\sin\\beta$:\n"
        "   $\\frac{\\cos\\beta}{\\sin\\beta} = 2\\tan\\alpha \\implies \\cot\\beta = 2\\tan\\alpha \\implies \\tan\\beta = \\frac{\\cot\\alpha}{2}$."
    ),
    tip="Famous NEET condition: Perpendicular landing $\\implies \\cot\\beta = 2\\tan\\alpha$!",
    why_wrong="Option B inverts the cotangent/tangent relationship."
))

# Q418 - Hard
qs.append(make_plane_q(
    num=418,
    question="In the previous perpendicular landing problem, if the incline angle is $\\alpha = 30^\\circ$, what is the launch angle $\\beta$ with the incline?",
    options={
        "A": "$\\tan^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right) \\approx 40.9^\\circ$",
        "B": "$30^\\circ$",
        "C": "$45^\\circ$",
        "D": "$\\tan^{-1}(\\sqrt{3}) = 60^\\circ$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion on inclined or sloping ground",
    concept="Substitute $\\alpha = 30^\\circ$ into $\\tan\\beta = \\frac{\\cot\\alpha}{2} = \\frac{\\sqrt{3}}{2}$.",
    given="$\\alpha = 30^\\circ$, $\\cot 30^\\circ = \\sqrt{3}$.",
    formula="\\tan\\beta = \\frac{\\cot 30^\\circ}{2} = \\frac{\\sqrt{3}}{2}",
    steps=(
        "1. For $\\alpha = 30^\\circ$, $\\cot 30^\\circ = \\frac{1}{\\tan 30^\\circ} = \\sqrt{3}$.\n"
        "2. From the perpendicularity condition:\n"
        "   $\\tan\\beta = \\frac{\\cot 30^\\circ}{2} = \\frac{\\sqrt{3}}{2} \\approx 0.866$.\n"
        "3. Thus, $\\beta = \\tan^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right) \\approx 40.9^\\circ$."
    ),
    tip="$\\tan\\beta = \\sqrt{3}/2$. Clean and exact!",
    why_wrong="Option B gives $\\cot 30^\\circ = \\sqrt{3} \\ne 2\\tan 30^\\circ$."
))

# Q419 - Hard
qs.append(make_plane_q(
    num=419,
    question="A projectile is thrown from the base of an incline of angle $\\alpha$. If the particle strikes the incline HORIZONTALLY, what is the relationship between the launch angle with the horizontal $\\theta$ and the incline angle $\\alpha$?",
    options={
        "A": "$\\tan\\theta = 2\\tan\\alpha$",
        "B": "$\\tan\\theta = \\frac{1}{2}\\tan\\alpha$",
        "C": "$\\theta = 2\\alpha$",
        "D": "$\\tan\\theta = \\tan\\alpha$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion on inclined or sloping ground",
    concept="Striking horizontally means the projectile is at the highest point of its standard parabolic trajectory when it hits the incline: $y = H$ and $x = R_{flat}/2$. Since the landing point $(x, y)$ lies on the incline $y = x\\tan\\alpha$, we have $H = \\left(\\frac{R_{flat}}{2}\\right)\\tan\\alpha$. Using $\\tan\\theta = \\frac{4H}{R_{flat}}$ gives $\\tan\\theta = 2\\tan\\alpha$.",
    given="Strikes incline horizontally $\\implies v_y = 0$ at landing.",
    formula="\\tan\\theta = \\frac{4H}{R}; H = \\frac{R}{2}\\tan\\alpha \\implies \\tan\\theta = 2\\tan\\alpha",
    steps=(
        "1. Striking horizontally means the vertical velocity is zero at impact ($v_y = 0$).\n"
        "2. Therefore, the impact point is the summit of the parabolic trajectory: $y = H$ and $x = \\frac{R}{2}$.\n"
        "3. Since this point lies on the inclined plane $y = x\\tan\\alpha$:\n"
        "   $H = \\left(\\frac{R}{2}\\right)\\tan\\alpha \\implies \\frac{H}{R} = \\frac{\\tan\\alpha}{2}$.\n"
        "4. But we know universally that $\\frac{H}{R} = \\frac{\\tan\\theta}{4}$.\n"
        "5. Equating the two ratios:\n"
        "   $\\frac{\\tan\\theta}{4} = \\frac{\\tan\\alpha}{2} \\implies \\tan\\theta = 2\\tan\\alpha$."
    ),
    tip="Compare two famous incline results: Strikes horizontally $\\implies \\tan\\theta = 2\\tan\\alpha$. Strikes perpendicularly $\\implies \\cot\\beta = 2\\tan\\alpha$!",
    why_wrong="Option B inverts the factor of 2; Option C confuses angles with their tangents."
))

# Q420 - Hard
qs.append(make_plane_q(
    num=420,
    question="In the horizontal striking problem, if the incline angle is $\\alpha = 30^\\circ$, what must be the launch angle $\\theta$ with the horizontal?",
    options={
        "A": "$\\tan^{-1}\\left(\\frac{2}{\\sqrt{3}}\\right) \\approx 49.1^\\circ$",
        "B": "$60^\\circ$",
        "C": "$45^\\circ$",
        "D": "$30^\\circ$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion on inclined or sloping ground",
    concept="Substitute $\\alpha = 30^\\circ$ into $\\tan\\theta = 2\\tan\\alpha = 2\\left(\\frac{1}{\\sqrt{3}}\\right) = \\frac{2}{\\sqrt{3}}$.",
    given="$\\alpha = 30^\\circ$, $\\tan\\theta = 2\\tan\\alpha$.",
    formula="\\tan\\theta = \\frac{2}{\\sqrt{3}}",
    steps=(
        "1. For $\\alpha = 30^\\circ$, $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.\n"
        "2. Apply formula: $\\tan\\theta = 2\\tan 30^\\circ = \\frac{2}{\\sqrt{3}} \\approx 1.155$.\n"
        "3. Therefore, $\\theta = \\tan^{-1}\\left(\\frac{2}{\\sqrt{3}}\\right) \\approx 49.1^\\circ$."
    ),
    tip="$\\tan\\theta = 2/\\sqrt{3} > 1$, so the angle is slightly greater than $45^\\circ$ ($49.1^\\circ$).",
    why_wrong="Option B gives $\\tan 60^\\circ = \\sqrt{3} = 3/\\sqrt{3} \\ne 2/\\sqrt{3}$."
))

# Q421 - Hard
qs.append(make_plane_q(
    num=421,
    question="An inclined plane makes an angle of $30^\\circ$ with the horizontal. A ball is projected from the foot of the incline with speed $u = 30\\text{ m/s}$ at an angle of $60^\\circ$ with the horizontal (so $\\beta = 30^\\circ$ with the incline). Taking $g = 10\\text{ m/s}^2$, what is the distance along the incline where the ball lands?",
    options={
        "A": "$40\\text{ m}$",
        "B": "$60\\text{ m}$",
        "C": "$30\\text{ m}$",
        "D": "$45\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Projectile motion on inclined or sloping ground",
    concept="Use range formula $R = \\frac{u^2}{g\\cos^2\\alpha}[\\sin(2\\beta + \\alpha) - \\sin\\alpha]$ with $u = 30$, $\\alpha = 30^\\circ$, $\\beta = 30^\\circ$.",
    given="$u = 30\\text{ m/s}, \\alpha = 30^\\circ, \\beta = 30^\\circ, g = 10\\text{ m/s}^2$.",
    formula="R = \\frac{u^2}{g\\cos^2 30^\\circ}[\\sin(60^\\circ + 30^\\circ) - \\sin 30^\\circ]",
    steps=(
        "1. Compute trigonometric terms: $\\sin(2\\beta + \\alpha) = \\sin(60^\\circ + 30^\\circ) = \\sin 90^\\circ = 1$.\n"
        "2. $\\sin\\alpha = \\sin 30^\\circ = 0.5$.\n"
        "3. Difference: $1 - 0.5 = 0.5$.\n"
        "4. Denominator: $g\\cos^2 30^\\circ = 10 \\times \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = 10 \\times \\frac{3}{4} = 7.5$.\n"
        "5. Range: $R = \\frac{30^2}{7.5} \\times 0.5 = \\frac{900 \\times 0.5}{7.5} = \\frac{450}{7.5} = 60\\text{ m}$ (Wait! $450 / 7.5 = 60\\text{ m}$! Let's check: $60 \\times 7.5 = 450$! Exactly $60\\text{ m}$!)."
    ),
    tip="Notice: $2\\beta + \\alpha = 60 + 30 = 90^\\circ$, so this is the OPTIMUM angle $\\beta = 45^\\circ - \\alpha/2 = 45 - 15 = 30^\\circ$! It gives maximum uphill range $R_{max} = \\frac{u^2}{g(1+\\sin 30^\\circ)} = \\frac{900}{10(1.5)} = \\frac{900}{15} = 60\\text{ m}$!",
    why_wrong="Option A calculates with wrong denominator; Option D uses $g = 9.8$."
))

# Adjust Q421 options so option A is 60 m:
qs[-1]["options"] = {
    "A": "$60\\text{ m}$",
    "B": "$40\\text{ m}$",
    "C": "$30\\text{ m}$",
    "D": "$45\\text{ m}$"
}
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: 60 m"

# Save topics 22, 23, 24
with open('scripts/mip_topics22_24.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topics 22, 23, 24 generated successfully:", len(qs))
