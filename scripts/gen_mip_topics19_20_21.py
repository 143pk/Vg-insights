import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 19: Maximum height (Q322 to Q339, 18 questions)
# Distribution: 4 Easy, 9 Medium, 5 Hard
# ==============================================================================

# Q322 - Easy
qs.append(make_plane_q(
    num=322,
    question="The maximum height $H$ reached by an oblique projectile launched with speed $u$ at angle $\\theta$ to the horizontal is given by:",
    options={
        "A": "$H = \\frac{u^2 \\sin^2\\theta}{2g}$",
        "B": "$H = \\frac{u^2 \\sin\\theta}{2g}$",
        "C": "$H = \\frac{u^2 \\cos^2\\theta}{2g}$",
        "D": "$H = \\frac{u^2 \\sin 2\\theta}{g}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum height",
    concept="At the maximum height, the vertical component of velocity is momentarily zero ($v_y = 0$). Applying the kinematic relation $v_y^2 = u_y^2 - 2gH = 0$ yields $H = \\frac{u_y^2}{2g} = \\frac{u^2\\sin^2\\theta}{2g}$.",
    given="Launch velocity $u$ at angle $\\theta$ with horizontal.",
    formula="H = \\frac{u_y^2}{2g} = \\frac{u^2\\sin^2\\theta}{2g}",
    steps=(
        "1. Along the vertical direction, motion is uniformly decelerated: $v_y^2 = u_y^2 - 2g y$.\n"
        "2. At the peak ($y = H$), the vertical velocity ceases momentarily: $v_y = 0$.\n"
        "3. Thus: $0 = (u\\sin\\theta)^2 - 2gH$.\n"
        "4. Solve for $H$: $H = \\frac{u^2\\sin^2\\theta}{2g}$."
    ),
    tip="Notice $H$ depends strictly on the vertical velocity component: $H = u_y^2 / (2g)$.",
    why_wrong="Option D is the horizontal range formula; Option B lacks the squaring on sine."
))

# Q323 - Easy
qs.append(make_plane_q(
    num=323,
    question="A ball is projected with speed $u = 20\\text{ m/s}$ at an angle of $30^\\circ$ to the horizontal. Taking $g = 10\\text{ m/s}^2$, what is the maximum height attained by the ball?",
    options={
        "A": "$5\\text{ m}$",
        "B": "$10\\text{ m}$",
        "C": "$15\\text{ m}$",
        "D": "$20\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum height",
    concept="Substitute values into $H = \\frac{u^2\\sin^2\\theta}{2g}$.",
    given="$u = 20\\text{ m/s}$, $\\theta = 30^\\circ$, $g = 10\\text{ m/s}^2$.",
    formula="H = \\frac{u^2\\sin^2 30^\\circ}{2g}",
    steps=(
        "1. Vertical velocity component: $u_y = u\\sin 30^\\circ = 20 \\times 0.5 = 10\\text{ m/s}$.\n"
        "2. Maximum height: $H = \\frac{u_y^2}{2g} = \\frac{10^2}{2 \\times 10} = \\frac{100}{20} = 5\\text{ m}$."
    ),
    tip="Direct calculation: $H = 10^2 / 20 = 5\\text{ m}$.",
    why_wrong="Option B forgets the factor of 2 in $2g$; Option D is the height for a vertical throw ($u^2/2g = 20\\text{ m}$)."
))

# Q324 - Easy
qs.append(make_plane_q(
    num=324,
    question="For a given launch speed $u$, at what angle of projection $\\theta$ is the maximum height greatest?",
    options={
        "A": "$90^\\circ$",
        "B": "$45^\\circ$",
        "C": "$60^\\circ$",
        "D": "$0^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum height",
    concept="Maximum height $H = \\frac{u^2\\sin^2\\theta}{2g}$ is maximized when $\\sin\\theta$ attains its maximum value of $1$, which occurs at $\\theta = 90^\\circ$ (pure vertical throw), giving $H_{max} = \\frac{u^2}{2g}$.",
    given="Constant launch speed $u$.",
    formula="H_{max} = \\frac{u^2}{2g} \\text{ at } \\theta = 90^\\circ",
    steps=(
        "1. The formula is $H = \\frac{u^2}{2g} \\sin^2\\theta$.\n"
        "2. The maximum possible value of $\\sin^2\\theta$ is 1.\n"
        "3. $\\sin\\theta = 1$ when $\\theta = 90^\\circ$.\n"
        "4. Thus, maximum height is greatest when the object is thrown straight up."
    ),
    tip="Do not confuse maximum height (maximized at $90^\\circ$) with horizontal range (maximized at $45^\\circ$)!",
    why_wrong="Option B maximizes horizontal range ($R$), not maximum height ($H$)."
))

# Q325 - Easy
qs.append(make_plane_q(
    num=325,
    question="If the launch angle of a projectile is increased from $30^\\circ$ to $60^\\circ$ while keeping the initial speed $u$ constant, by what factor does its maximum height increase?",
    options={
        "A": "3 times",
        "B": "$\\sqrt{3}$ times",
        "C": "2 times",
        "D": "9 times"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum height",
    concept="Maximum height is proportional to $\\sin^2\\theta$: $\\frac{H_2}{H_1} = \\frac{\\sin^2 60^\\circ}{\\sin^2 30^\\circ}$.",
    given="$\\theta_1 = 30^\\circ, \\theta_2 = 60^\\circ$, constant $u$.",
    formula="\\frac{H_2}{H_1} = \\frac{\\sin^2\\theta_2}{\\sin^2\\theta_1}",
    steps=(
        "1. At $\\theta_1 = 30^\\circ$, $\\sin 30^\\circ = \\frac{1}{2}$, so $\\sin^2 30^\\circ = \\frac{1}{4}$.\n"
        "2. At $\\theta_2 = 60^\\circ$, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, so $\\sin^2 60^\\circ = \\frac{3}{4}$.\n"
        "3. Ratio of heights: $\\frac{H_2}{H_1} = \\frac{3/4}{1/4} = 3$.\n"
        "4. The maximum height triples."
    ),
    tip="$\\sin^2 60^\\circ / \\sin^2 30^\\circ = (\\sqrt{3})^2 = 3$. Height triples!",
    why_wrong="Option B forgets that height depends on the SQUARE of sine, not the first power."
))

# Q326 - Medium
qs.append(make_plane_q(
    num=326,
    question="The horizontal range $R$ of a projectile launched with velocity $u$ at an angle $\\theta$ with the horizontal is equal to its maximum height $H$. What is the launch angle $\\theta$?",
    options={
        "A": "$\\tan^{-1}(4) \\approx 76^\\circ$",
        "B": "$\\tan^{-1}(2) \\approx 63.4^\\circ$",
        "C": "$45^\\circ$",
        "D": "$\\tan^{-1}(0.25) \\approx 14^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="Equate the formulas for horizontal range $R$ and maximum height $H$: $\\frac{2u^2\\sin\\theta\\cos\\theta}{g} = \\frac{u^2\\sin^2\\theta}{2g}$. Cancel common factors to obtain $\\tan\\theta = 4$.",
    given="$R = H$.",
    formula="R = \\frac{2u^2\\sin\\theta\\cos\\theta}{g}; H = \\frac{u^2\\sin^2\\theta}{2g}; R = H",
    steps=(
        "1. Write the equality: $\\frac{2u^2\\sin\\theta\\cos\\theta}{g} = \\frac{u^2\\sin^2\\theta}{2g}$.\n"
        "2. Cancel $u^2/g$ from both sides: $2\\sin\\theta\\cos\\theta = \\frac{\\sin^2\\theta}{2}$.\n"
        "3. For $\\sin\\theta \\ne 0$, divide both sides by $\\sin\\theta\\cos\\theta$:\n"
        "   $2 = \\frac{1}{2} \\tan\\theta$.\n"
        "4. Multiply by 2: $\\tan\\theta = 4$.\n"
        "5. Therefore, $\\theta = \\tan^{-1}(4) \\approx 76^\\circ$."
    ),
    tip="NEET benchmark question: $R = 4H\\cot\\theta \\iff \\frac{R}{H} = \\frac{4}{\\tan\\theta}$. When $R = H \\implies \\tan\\theta = 4$!",
    why_wrong="Option B forgets the factor of 2 in denominator of $H$; Option C gives $R = 4H$.",
    is_pyq=True,
    pyq_year=2014,
    source="NEET UG 2014"
))

# Q327 - Medium
qs.append(make_plane_q(
    num=327,
    question="If the horizontal range of a projectile is $n$ times its maximum height ($R = n H$), what is the launch angle $\\theta$?",
    options={
        "A": "$\\tan^{-1}\\left(\\frac{4}{n}\\right)$",
        "B": "$\\tan^{-1}\\left(\\frac{n}{4}\\right)$",
        "C": "$\\tan^{-1}\\left(\\frac{2}{n}\\right)$",
        "D": "$\\tan^{-1}(n)$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="From the universal relationship $\\frac{R}{H} = \\frac{4}{\\tan\\theta}$, if $R/H = n$, then $n = \\frac{4}{\\tan\\theta} \\implies \\tan\\theta = \\frac{4}{n}$.",
    given="$R = n H$.",
    formula="\\tan\\theta = \\frac{4}{n}",
    steps=(
        "1. Start with the standard relation: $R = \\frac{u^2\\sin 2\\theta}{g} = \\frac{2u^2\\sin\\theta\\cos\\theta}{g}$.\n"
        "2. Maximum height: $H = \\frac{u^2\\sin^2\\theta}{2g}$.\n"
        "3. Ratio: $\\frac{R}{H} = \\frac{2\\sin\\theta\\cos\\theta}{\\sin^2\\theta / 2} = \\frac{4\\cos\\theta}{\\sin\\theta} = \\frac{4}{\\tan\\theta}$.\n"
        "4. Given $R = nH \\implies \\frac{R}{H} = n$.\n"
        "5. Thus, $n = \\frac{4}{\\tan\\theta} \\implies \\tan\\theta = \\frac{4}{n} \\implies \\theta = \\tan^{-1}\\left(\\frac{4}{n}\\right)$."
    ),
    tip="Universal mnemonic: $\\tan\\theta = \\frac{4H}{R}$. For $R = H \\implies 4$. For $R = 4H (\\theta=45^\\circ) \\implies 1$. For $R = 2H \\implies 2$.",
    why_wrong="Option B inverts the formula; Option C loses a factor of 2."
))

# Q328 - Medium
qs.append(make_plane_q(
    num=328,
    question="A body is projected with kinetic energy $K$ at an angle of $45^\\circ$ to the horizontal. What is its potential energy (taking ground as reference) at the maximum height?",
    options={
        "A": "$\\frac{K}{2}$",
        "B": "$K$",
        "C": "$\\frac{K}{4}$",
        "D": "$\\frac{3K}{4}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="By conservation of mechanical energy, $E = K = K_{top} + U_{top}$. At $45^\\circ$, $K_{top} = K\\cos^2 45^\\circ = K/2$. Therefore, $U_{top} = K - K/2 = K/2$.",
    given="$\\theta = 45^\\circ$, initial $K = \\frac{1}{2}mu^2$.",
    formula="U_{top} = m g H = m g \\left(\\frac{u^2\\sin^2 45^\\circ}{2g}\\right) = \\frac{1}{2}m u^2 \\sin^2 45^\\circ = K\\sin^2\\theta",
    steps=(
        "1. Gravitational potential energy at height $H$: $U_{top} = mgH$.\n"
        "2. Substitute $H = \\frac{u^2\\sin^2\\theta}{2g}$:\n"
        "   $U_{top} = mg \\left(\\frac{u^2\\sin^2\\theta}{2g}\\right) = \\left(\\frac{1}{2}mu^2\\right)\\sin^2\\theta = K\\sin^2\\theta$.\n"
        "3. For $\\theta = 45^\\circ$, $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$, so $\\sin^2 45^\\circ = \\frac{1}{2}$.\n"
        "4. Therefore, $U_{top} = \\frac{K}{2}$."
    ),
    tip="Energy partition at maximum height: Kinetic energy is $K\\cos^2\\theta$, Potential energy is $K\\sin^2\\theta$. Their sum is $K(\\cos^2\\theta + \\sin^2\\theta) = K$!",
    why_wrong="Option C is the kinetic energy at the peak for $\\theta = 60^\\circ$."
))

# Q329 - Medium
qs.append(make_plane_q(
    num=329,
    question="Two projectiles launched from the same point reach the exact same maximum height $H$. Which of the following statements must be true?",
    options={
        "A": "Their initial vertical components of velocity $u_y$ and times of flight $T$ must be identical",
        "B": "Their launch speeds $u$ must be identical",
        "C": "Their horizontal ranges $R$ must be identical",
        "D": "Their launch angles $\\theta$ must be identical"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="Since $H = \\frac{u_y^2}{2g}$ and $T = \\frac{2u_y}{g}$, both $H$ and $T$ depend exclusively on the vertical component $u_y$. Equal maximum heights guarantee equal $u_y$ and identical flight times $T$.",
    given="Equal maximum heights: $H_1 = H_2$.",
    formula="H = \\frac{u_y^2}{2g}; T = \\frac{2u_y}{g} \\implies T = 2\\sqrt{\\frac{2H}{g}}",
    steps=(
        "1. Maximum height depends solely on $u_y$: $H = \\frac{u_y^2}{2g}$.\n"
        "2. If $H_1 = H_2$, then $u_{y1} = u_{y2}$.\n"
        "3. Time of flight also depends solely on $u_y$: $T = \\frac{2u_y}{g}$.\n"
        "4. Since $u_{y1} = u_{y2}$, their times of flight must be identical ($T_1 = T_2$).\n"
        "5. However, their horizontal components $u_x$ can be completely different, so ranges, launch angles, and total speeds need not be equal."
    ),
    tip="Same peak height $\\implies$ Same vertical speed $\\implies$ Same time in air!",
    why_wrong="Options B, C, and D depend on $u_x = u\\cos\\theta$, which can vary independently."
))

# Q330 - Medium
qs.append(make_plane_q(
    num=330,
    question="A ball is projected at an angle $\\theta$ with speed $u$. At what height $y$ above the ground does the kinetic energy of the projectile equal its potential energy (taking launch point as reference)?",
    options={
        "A": "$\\frac{u^2}{4g}$",
        "B": "$\\frac{u^2}{2g}$",
        "C": "$\\frac{u^2\\sin^2\\theta}{4g} = \\frac{H}{2}$",
        "D": "$\\frac{u^2}{8g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="Total energy is $E = K_0 = \\frac{1}{2}mu^2$. If $K = U$ at height $y$, then $U = \\frac{E}{2} = \\frac{1}{4}mu^2$. Set $mgy = \\frac{1}{4}mu^2 \\implies y = \\frac{u^2}{4g}$.",
    given="$K(y) = U(y)$ with reference $U(0) = 0$.",
    formula="U = mgy = \\frac{1}{2} E_{total} = \\frac{1}{4}mu^2 \\implies y = \\frac{u^2}{4g}",
    steps=(
        "1. By conservation of mechanical energy: $K(y) + U(y) = K_0 = \\frac{1}{2}mu^2$.\n"
        "2. When $K(y) = U(y)$, we have $2U(y) = \\frac{1}{2}mu^2 \\implies U(y) = \\frac{1}{4}mu^2$.\n"
        "3. Since $U(y) = mgy$:\n"
        "   $mgy = \\frac{1}{4}mu^2 \\implies y = \\frac{u^2}{4g}$."
    ),
    tip="Notice this height $y = \\frac{u^2}{4g}$ is completely INDEPENDENT of the angle of projection $\\theta$, provided $y \\le H$ (which requires $H \\ge \\frac{u^2}{4g} \\implies \\sin^2\\theta \\ge 0.5 \\implies \\theta \\ge 45^\\circ$)!",
    why_wrong="Option C is half of maximum height, which equates potential energy to half of maximum potential energy, not to kinetic energy."
))

# Q331 - Medium
qs.append(make_plane_q(
    num=331,
    question="If the maximum height of a projectile is $100\\text{ m}$ and its horizontal range is $400\\text{ m}$, what was the launch angle $\\theta$?",
    options={
        "A": "$45^\\circ$",
        "B": "$30^\\circ$",
        "C": "$60^\\circ$",
        "D": "$76^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="Apply $\\tan\\theta = \\frac{4H}{R}$.",
    given="$H = 100\\text{ m}$, $R = 400\\text{ m}$.",
    formula="\\tan\\theta = \\frac{4H}{R} = \\frac{4 \\times 100}{400} = 1",
    steps=(
        "1. Substitute into the standard relation:\n"
        "   $\\tan\\theta = \\frac{4H}{R} = \\frac{4(100)}{400} = \\frac{400}{400} = 1$.\n"
        "2. Since $\\tan 45^\\circ = 1$, the angle of projection is $\\theta = 45^\\circ$."
    ),
    tip="Whenever Range is 4 times Maximum Height ($R = 4H$), the launch angle is ALWAYS $45^\\circ$!",
    why_wrong="Option D corresponds to $R = H$."
))

# Q332 - Medium
qs.append(make_plane_q(
    num=332,
    question="The maximum height reached by a projectile launched at $60^\\circ$ to the horizontal is $60\\text{ m}$. What would be the maximum height reached by the same projectile if launched with the same speed at $30^\\circ$ to the horizontal?",
    options={
        "A": "$20\\text{ m}$",
        "B": "$30\\text{ m}$",
        "C": "$15\\text{ m}$",
        "D": "$40\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="For complementary angles with the same launch speed, $\\frac{H_1}{H_2} = \\frac{\\sin^2 60^\\circ}{\\sin^2 30^\\circ} = \\frac{3/4}{1/4} = 3$.",
    given="$H_1 = 60\\text{ m}$ at $\\theta_1 = 60^\\circ$, $\\theta_2 = 30^\\circ$.",
    formula="H_2 = \\frac{H_1}{3}",
    steps=(
        "1. Height is proportional to $\\sin^2\\theta$.\n"
        "2. $\\frac{H(30^\\circ)}{H(60^\\circ)} = \\frac{\\sin^2 30^\\circ}{\\sin^2 60^\\circ} = \\frac{1/4}{3/4} = \\frac{1}{3}$.\n"
        "3. Therefore, $H(30^\\circ) = \\frac{60\\text{ m}}{3} = 20\\text{ m}$."
    ),
    tip="For complementary angles $(30^\\circ, 60^\\circ)$, the ratio of maximum heights is always $1 : 3$!",
    why_wrong="Option B divides by 2 instead of 3; Option D subtracts 20."
))

# Q333 - Medium
qs.append(make_plane_q(
    num=333,
    question="In the previous question, what is the SUM of the maximum heights $(H_1 + H_2)$ reached at $60^\\circ$ and $30^\\circ$?",
    options={
        "A": "$80\\text{ m} = \\frac{u^2}{2g}$",
        "B": "$60\\text{ m}$",
        "C": "$100\\text{ m}$",
        "D": "$120\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum height",
    concept="For complementary angles $\\theta$ and $90^\\circ - \\theta$, $H_1 + H_2 = \\frac{u^2\\sin^2\\theta}{2g} + \\frac{u^2\\cos^2\\theta}{2g} = \\frac{u^2}{2g}(\\sin^2\\theta + \\cos^2\\theta) = \\frac{u^2}{2g}$.",
    given="$H_1 = 60\\text{ m}, H_2 = 20\\text{ m}$.",
    formula="H_1 + H_2 = \\frac{u^2}{2g}",
    steps=(
        "1. Sum the two heights:\n"
        "   $H_1 + H_2 = 60 + 20 = 80\\text{ m}$.\n"
        "2. Notice this equals $\\frac{u^2}{2g}$, which is the maximum possible height if the object were thrown vertically upward ($90^\\circ$)!"
    ),
    tip="Universal NEET identity: For ANY complementary angles, $H_1 + H_2 = \\frac{u^2}{2g} = H_{max}$!",
    why_wrong="Option C is not the sum of $60 + 20$."
))

# Q334 - Hard
qs.append(make_plane_q(
    num=334,
    question="A projectile attains a maximum height $H$. What is the magnitude of its velocity when it is at a height of $\\frac{3}{4}H$ above the ground, in terms of initial speed $u$ and launch angle $\\theta$?",
    options={
        "A": "$\\sqrt{u^2\\cos^2\\theta + \\frac{1}{4}u^2\\sin^2\\theta}$",
        "B": "$\\frac{1}{2}u$",
        "C": "$u\\cos\\theta$",
        "D": "$\\frac{\\sqrt{3}}{2}u$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum height",
    concept="Vertical velocity at height $y$ satisfies $v_y^2 = u_y^2 - 2gy$. At $y = \\frac{3}{4}H$, $2gy = 2g\\left(\\frac{3}{4} \\frac{u_y^2}{2g}\\right) = \\frac{3}{4}u_y^2$. Thus $v_y^2 = u_y^2 - \\frac{3}{4}u_y^2 = \\frac{1}{4}u_y^2$. Net speed squared is $v_x^2 + v_y^2$.",
    given="$y = \\frac{3}{4}H$, $H = \\frac{u^2\\sin^2\\theta}{2g}$.",
    formula="v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{u^2\\cos^2\\theta + \\frac{1}{4}u^2\\sin^2\\theta}",
    steps=(
        "1. Horizontal velocity is unchanged: $v_x = u\\cos\\theta$.\n"
        "2. Vertical velocity at height $y = \\frac{3}{4}H$:\n"
        "   $v_y^2 = u_y^2 - 2g \\left(\\frac{3}{4} \\frac{u_y^2}{2g}\\right) = u_y^2 - \\frac{3}{4}u_y^2 = \\frac{1}{4}u_y^2 = \\frac{1}{4}u^2\\sin^2\\theta$.\n"
        "3. Total speed squared:\n"
        "   $v^2 = v_x^2 + v_y^2 = u^2\\cos^2\\theta + \\frac{1}{4}u^2\\sin^2\\theta$.\n"
        "4. Total speed: $v = \\sqrt{u^2\\cos^2\\theta + \\frac{1}{4}u^2\\sin^2\\theta}$."
    ),
    tip="Notice: At $y = H$, $v_y = 0 \\implies v = u\\cos\\theta$. At $y = 3H/4$, $v_y = u_y/2$. At $y = H/2$, $v_y = u_y/\\sqrt{2}$!",
    why_wrong="Option C is the speed at the maximum height $y = H$."
))

# Q335 - Hard
qs.append(make_plane_q(
    num=335,
    question="In the previous question, if the launch angle was $\\theta = 60^\\circ$, what is the speed at $y = \\frac{3}{4}H$ as a fraction of the launch speed $u$?",
    options={
        "A": "$\\frac{\\sqrt{7}}{4} u \\approx 0.66 u$",
        "B": "$\\frac{1}{2} u$",
        "C": "$\\frac{3}{4} u$",
        "D": "$\\frac{\\sqrt{3}}{2} u$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum height",
    concept="Substitute $\\theta = 60^\\circ$ into $v^2 = u^2(\\cos^2 60^\\circ + \\frac{1}{4}\\sin^2 60^\\circ)$.",
    given="$\\theta = 60^\\circ$, $\\cos 60^\\circ = 1/2$, $\\sin 60^\\circ = \\sqrt{3}/2$.",
    formula="v^2 = u^2 \\left( \\frac{1}{4} + \\frac{1}{4} \\times \\frac{3}{4} \\right) = u^2 \\left( \\frac{1}{4} + \\frac{3}{16} \\right) = u^2 \\left( \\frac{7}{16} \\right)",
    steps=(
        "1. Compute $\\cos^2 60^\\circ = (1/2)^2 = \\frac{1}{4} = \\frac{4}{16}$.\n"
        "2. Compute $\\frac{1}{4}\\sin^2 60^\\circ = \\frac{1}{4} (3/4) = \\frac{3}{16}$.\n"
        "3. Sum the fractional components:\n"
        "   $\\frac{4}{16} + \\frac{3}{16} = \\frac{7}{16}$.\n"
        "4. Take the square root:\n"
        "   $v = \\sqrt{\\frac{7}{16}} u = \\frac{\\sqrt{7}}{4} u \\approx 0.661 u$."
    ),
    tip="Check: At launch, $v = u$. At peak, $v = u\\cos 60^\\circ = 0.5 u$. At $3H/4$, $v = \\frac{\\sqrt{7}}{4}u \\approx 0.66u$, comfortably between $0.5u$ and $1.0u$!",
    why_wrong="Option B is the speed at the peak ($0.5 u$)."
))

# Q336 - Hard
qs.append(make_plane_q(
    num=336,
    question="A projectile is launched from ground with speed $u$ at angle $\\theta$. What is the angular momentum of the projectile about the launch point when it is at its maximum height?",
    options={
        "A": "$\\frac{m u^3 \\sin^2\\theta \\cos\\theta}{2g}$",
        "B": "$\\frac{m u^3 \\sin\\theta \\cos^2\\theta}{2g}$",
        "C": "$0$",
        "D": "$\\frac{m u^3 \\sin 2\\theta}{2g}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum height",
    concept="Angular momentum about the origin is $\\vec{L} = \\vec{r} \\times \\vec{p}$. At the highest point, $\\vec{r} = \\frac{R}{2}\\hat{i} + H\\hat{j}$ and $\\vec{p} = m(u\\cos\\theta)\\hat{i}$. The cross product magnitude is $p_x \\times y = m(u\\cos\\theta) H$.",
    given="At apex: $p_x = mu\\cos\\theta$, $p_y = 0$, $y = H = \\frac{u^2\\sin^2\\theta}{2g}$.",
    formula="|\\vec{L}| = p_x \\times H = (m u \\cos\\theta) \\left(\\frac{u^2\\sin^2\\theta}{2g}\\right) = \\frac{m u^3 \\sin^2\\theta \\cos\\theta}{2g}",
    steps=(
        "1. Position vector at apex: $\\vec{r} = \\frac{R}{2}\\hat{i} + H\\hat{j}$.\n"
        "2. Momentum vector at apex: $\\vec{p} = (mu\\cos\\theta)\\hat{i} + 0\\hat{j}$.\n"
        "3. Cross product $\\vec{L} = \\vec{r} \\times \\vec{p}$:\n"
        "   $\\vec{L} = \\left(\\frac{R}{2}\\hat{i} + H\\hat{j}\\right) \\times (mu\\cos\\theta)\\hat{i} = -H(mu\\cos\\theta)\\hat{k}$.\n"
        "4. Substitute $H = \\frac{u^2\\sin^2\\theta}{2g}$:\n"
        "   $|\\vec{L}| = (mu\\cos\\theta) \\left(\\frac{u^2\\sin^2\\theta}{2g}\\right) = \\frac{mu^3\\sin^2\\theta\\cos\\theta}{2g}$."
    ),
    tip="Notice: Torque by gravity about launch point is $\\tau = r_x \\times mg = (u\\cos\\theta t) mg$. Integrating $\\tau dt$ from $0$ to $t_{top}$ gives the EXACT same angular momentum!",
    why_wrong="Option C wrongly assumes angular momentum is zero; Option B swaps the powers of sine and cosine."
))

# Q337 - Hard
qs.append(make_plane_q(
    num=337,
    question="What is the angular momentum of the projectile about the launch point at the instant of LANDING?",
    options={
        "A": "$\\frac{2 m u^3 \\sin^2\\theta \\cos\\theta}{g}$",
        "B": "$\\frac{m u^3 \\sin^2\\theta \\cos\\theta}{2g}$",
        "C": "$0$",
        "D": "$\\frac{m u^3 \\cos\\theta}{g}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum height",
    concept="At landing, $\\vec{r} = R\\hat{i} + 0\\hat{j}$ and $\\vec{p} = m(u\\cos\\theta\\hat{i} - u\\sin\\theta\\hat{j})$. The cross product is $R \\times (-p_y) = R(mu\\sin\\theta)$.",
    given="Landing point: $x = R = \\frac{2u^2\\sin\\theta\\cos\\theta}{g}$, $y = 0$, $v_y = -u\\sin\\theta$.",
    formula="|\\vec{L}| = R \\times (mu\\sin\\theta) = \\left(\\frac{2u^2\\sin\\theta\\cos\\theta}{g}\\right)(mu\\sin\\theta) = \\frac{2mu^3\\sin^2\\theta\\cos\\theta}{g}",
    steps=(
        "1. Position at landing: $\\vec{r} = R\\hat{i}$.\n"
        "2. Velocity at landing: $\\vec{v} = u\\cos\\theta\\hat{i} - u\\sin\\theta\\hat{j}$.\n"
        "3. Cross product $\\vec{L} = \\vec{r} \\times (m\\vec{v})$:\n"
        "   $\\vec{L} = (R\\hat{i}) \\times m(u\\cos\\theta\\hat{i} - u\\sin\\theta\\hat{j}) = -m R u\\sin\\theta\\hat{k}$.\n"
        "4. Substitute $R = \\frac{2u^2\\sin\\theta\\cos\\theta}{g}$:\n"
        "   $|\\vec{L}| = m \\left(\\frac{2u^2\\sin\\theta\\cos\\theta}{g}\\right) (u\\sin\\theta) = \\frac{2mu^3\\sin^2\\theta\\cos\\theta}{g}$."
    ),
    tip="Comparing with previous question: Angular momentum at landing is exactly 4 TIMES the angular momentum at the maximum height ($L_{land} = 4 L_{top}$)!",
    why_wrong="Option B is the value at maximum height ($L_{top}$)."
))

# Q338 - Hard
qs.append(make_plane_q(
    num=338,
    question="A projectile is thrown with speed $u$ at angle $\\theta$. What is the ratio of the radius of curvature at the highest point to that at the launch point?",
    options={
        "A": "$\\cos^3\\theta$",
        "B": "$\\cos^2\\theta$",
        "C": "$\\frac{1}{\\cos^3\\theta}$",
        "D": "$\\sin^3\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum height",
    concept="Radius of curvature at launch is $R_{launch} = \\frac{u^2}{g\\cos\\theta}$. Radius of curvature at highest point is $R_{top} = \\frac{u^2\\cos^2\\theta}{g}$. The ratio is $\\frac{R_{top}}{R_{launch}} = \\frac{u^2\\cos^2\\theta / g}{u^2 / (g\\cos\\theta)} = \\cos^3\\theta$.",
    given="Formula for radius of curvature at launch and top.",
    formula="\\frac{R_{top}}{R_{launch}} = \\frac{u^2\\cos^2\\theta / g}{u^2 / (g\\cos\\theta)} = \\cos^3\\theta",
    steps=(
        "1. Radius of curvature at peak: $R_{top} = \\frac{v_{top}^2}{g} = \\frac{u^2\\cos^2\\theta}{g}$.\n"
        "2. Radius of curvature at launch: $R_{launch} = \\frac{u^2}{g\\cos\\theta}$.\n"
        "3. Divide $R_{top}$ by $R_{launch}$:\n"
        "   $\\frac{R_{top}}{R_{launch}} = \\frac{\\frac{u^2\\cos^2\\theta}{g}}{\\frac{u^2}{g\\cos\\theta}} = \\cos^2\\theta \\times \\cos\\theta = \\cos^3\\theta$."
    ),
    tip="For $\\theta = 60^\\circ$: ratio is $\\cos^3 60^\\circ = (1/2)^3 = 1/8$! The trajectory is 8 times sharper (smaller radius of curvature) at the top than at launch!",
    why_wrong="Option B has the wrong power of cosine; Option C is the inverse ratio."
))

# Q339 - Hard
qs.append(make_plane_q(
    num=339,
    question="A ball is projected from the ground with speed $u$ at angle $\\theta$. At what height $y$ is the speed of the projectile equal to $\\sqrt{\\frac{u^2 + v_{top}^2}{2}}$ (the root-mean-square of its launch speed and peak speed)?",
    options={
        "A": "$\\frac{H}{2}$",
        "B": "$\\frac{H}{4}$",
        "C": "$\\frac{3H}{4}$",
        "D": "$\\frac{H}{\\sqrt{2}}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum height",
    concept="Use energy conservation: $v^2 = u^2 - 2gy$. Equate to $\\frac{u^2 + u^2\\cos^2\\theta}{2}$ and solve for $y$ in terms of $H = \\frac{u^2\\sin^2\\theta}{2g}$.",
    given="$v^2 = \\frac{u^2 + u^2\\cos^2\\theta}{2}$, $v^2 = u^2 - 2gy$.",
    formula="u^2 - 2gy = \\frac{u^2(1 + \\cos^2\\theta)}{2} \\implies 2gy = u^2 - \\frac{u^2(1 + \\cos^2\\theta)}{2} = \\frac{u^2(1 - \\cos^2\\theta)}{2} = \\frac{u^2\\sin^2\\theta}{2}",
    steps=(
        "1. Write the speed condition:\n"
        "   $v^2 = \\frac{u^2 + u^2\\cos^2\\theta}{2}$.\n"
        "2. From conservation of mechanical energy:\n"
        "   $v^2 = u^2 - 2gy$.\n"
        "3. Equate the two expressions:\n"
        "   $u^2 - 2gy = \\frac{u^2 + u^2\\cos^2\\theta}{2}$.\n"
        "4. Solve for $2gy$:\n"
        "   $2gy = u^2 - \\frac{u^2}{2} - \\frac{u^2\\cos^2\\theta}{2} = \\frac{u^2}{2}(1 - \\cos^2\\theta) = \\frac{u^2\\sin^2\\theta}{2}$.\n"
        "5. Divide by $2g$:\n"
        "   $y = \\frac{1}{2} \\left(\\frac{u^2\\sin^2\\theta}{2g}\\right) = \\frac{H}{2}$."
    ),
    tip="At EXACTLY half the maximum height ($y = H/2$), the square of speed is the arithmetic mean of launch speed squared and peak speed squared: $v^2 = \\frac{u^2 + v_{top}^2}{2}$!",
    why_wrong="Option C is where vertical speed is halved ($v_y = u_y/2$), but total speed squared is different."
))

# ==============================================================================
# Topic 20: Horizontal range (Q340 to Q357, 18 questions)
# Distribution: 5 Easy, 8 Medium, 5 Hard
# ==============================================================================

# Q340 - Easy
qs.append(make_plane_q(
    num=340,
    question="The horizontal range $R$ of an oblique projectile launched with speed $u$ at angle $\\theta$ to the horizontal is given by:",
    options={
        "A": "$R = \\frac{u^2 \\sin 2\\theta}{g}$",
        "B": "$R = \\frac{u^2 \\sin^2\\theta}{g}$",
        "C": "$R = \\frac{u^2 \\cos 2\\theta}{g}$",
        "D": "$R = \\frac{2u\\sin\\theta}{g}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Horizontal range",
    concept="The horizontal range is the horizontal displacement during the total time of flight: $R = u_x \\times T = (u\\cos\\theta)\\left(\\frac{2u\\sin\\theta}{g}\\right) = \\frac{u^2(2\\sin\\theta\\cos\\theta)}{g} = \\frac{u^2\\sin 2\\theta}{g}$.",
    given="Launch speed $u$, angle $\\theta$.",
    formula="R = \\frac{u^2\\sin 2\\theta}{g}",
    steps=(
        "1. Horizontal velocity is constant: $v_x = u\\cos\\theta$.\n"
        "2. Time of flight: $T = \\frac{2u\\sin\\theta}{g}$.\n"
        "3. Range: $R = v_x \\times T = (u\\cos\\theta) \\left(\\frac{2u\\sin\\theta}{g}\\right)$.\n"
        "4. Using trigonometric identity $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$:\n"
        "   $R = \\frac{u^2\\sin 2\\theta}{g}$."
    ),
    tip="Remember that $R$ depends on $\\sin 2\\theta$ (double angle), while $H$ depends on $\\sin^2\\theta$ (squared angle)!",
    why_wrong="Option B has $\\sin^2\\theta$; Option D is the time of flight $T$."
))

# Q341 - Easy
qs.append(make_plane_q(
    num=341,
    question="For a given initial speed $u$, at what launch angle $\\theta$ is the horizontal range maximum?",
    options={
        "A": "$45^\\circ$",
        "B": "$90^\\circ$",
        "C": "$60^\\circ$",
        "D": "$30^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Horizontal range",
    concept="Horizontal range $R = \\frac{u^2\\sin 2\\theta}{g}$ is maximized when $\\sin 2\\theta$ achieves its maximum value of $1$. This occurs when $2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$.",
    given="Constant launch speed $u$.",
    formula="R_{max} = \\frac{u^2}{g} \\text{ at } \\theta = 45^\\circ",
    steps=(
        "1. The range formula is $R = \\frac{u^2}{g} \\sin 2\\theta$.\n"
        "2. For maximum range, $\\sin 2\\theta = 1$.\n"
        "3. $2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$.\n"
        "4. The maximum horizontal range is $R_{max} = \\frac{u^2}{g}$."
    ),
    tip="At $45^\\circ$, horizontal and vertical launch components are equal ($u_x = u_y = u/\\sqrt{2}$), balancing time in air with horizontal speed.",
    why_wrong="Option B ($90^\\circ$) maximizes height, but gives zero horizontal range ($R = 0$)."
))

# Q342 - Easy
qs.append(make_plane_q(
    num=342,
    question="A projectile is thrown with a velocity of $20\\text{ m/s}$ at an angle of $45^\\circ$ to the horizontal. Taking $g = 10\\text{ m/s}^2$, what is its maximum horizontal range?",
    options={
        "A": "$40\\text{ m}$",
        "B": "$20\\text{ m}$",
        "C": "$80\\text{ m}$",
        "D": "$20\\sqrt{2}\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Horizontal range",
    concept="For $\\theta = 45^\\circ$, $R = R_{max} = \\frac{u^2}{g}$.",
    given="$u = 20\\text{ m/s}$, $\\theta = 45^\\circ$, $g = 10\\text{ m/s}^2$.",
    formula="R_{max} = \\frac{u^2}{g}",
    steps=(
        "1. At $\\theta = 45^\\circ$, $\\sin 2\\theta = \\sin 90^\\circ = 1$.\n"
        "2. $R = \\frac{u^2}{g} = \\frac{20^2}{10} = \\frac{400}{10} = 40\\text{ m}$."
    ),
    tip="Whenever $\\theta = 45^\\circ$, simply compute $u^2 / g$!",
    why_wrong="Option B calculates $u^2 / 2g = 20\\text{ m}$, which is the maximum height $H$ at $45^\\circ$."
))

# Q343 - Easy
qs.append(make_plane_q(
    num=343,
    question="Which of the following pairs of projection angles with the horizontal produces the EXACT same horizontal range for the same launch speed $u$?",
    options={
        "A": "$20^\\circ$ and $70^\\circ$",
        "B": "$30^\\circ$ and $45^\\circ$",
        "C": "$15^\\circ$ and $60^\\circ$",
        "D": "$40^\\circ$ and $60^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Horizontal range",
    concept="Complementary angles rule: angles $\\theta$ and $(90^\\circ - \\theta)$ produce identical horizontal ranges because $\\sin 2(90^\\circ - \\theta) = \\sin(180^\\circ - 2\\theta) = \\sin 2\\theta$.",
    given="Pairs of launch angles.",
    formula="R(\\theta) = R(90^\\circ - \\theta)",
    steps=(
        "1. Two angles yield the same range if they sum to $90^\\circ$ (complementary angles).\n"
        "2. Check Option A: $20^\\circ + 70^\\circ = 90^\\circ$.\n"
        "3. Since they are complementary, $\\sin 2(20^\\circ) = \\sin 40^\\circ$ and $\\sin 2(70^\\circ) = \\sin 140^\\circ = \\sin 40^\\circ$.\n"
        "4. Both produce the identical range."
    ),
    tip="Complementary angles sum to $90^\\circ$ ($45^\\circ \\pm \\alpha$). For any $\\alpha$, range is the same!",
    why_wrong="Options B, C, and D do not sum to $90^\\circ$."
))

# Q344 - Easy
qs.append(make_plane_q(
    num=344,
    question="A cricketer can throw a ball to a maximum horizontal distance of $100\\text{ m}$. To what maximum height can the cricketer throw the same ball with the same speed?",
    options={
        "A": "$50\\text{ m}$",
        "B": "$100\\text{ m}$",
        "C": "$25\\text{ m}$",
        "D": "$200\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Horizontal range",
    concept="Maximum horizontal range is $R_{max} = \\frac{u^2}{g}$ (at $45^\\circ$). Maximum vertical height is $H_{max} = \\frac{u^2}{2g}$ (at $90^\\circ$). Thus, $H_{max} = \\frac{R_{max}}{2}$.",
    given="$R_{max} = 100\\text{ m}$.",
    formula="H_{max} = \\frac{R_{max}}{2}",
    steps=(
        "1. Maximum horizontal range occurs at $\\theta = 45^\\circ$: $R_{max} = \\frac{u^2}{g} = 100\\text{ m}$.\n"
        "2. Maximum height occurs at $\\theta = 90^\\circ$: $H_{max} = \\frac{u^2}{2g}$.\n"
        "3. Dividing $R_{max}$ by 2 gives: $H_{max} = \\frac{100}{2} = 50\\text{ m}$."
    ),
    tip="Golden rule: $H_{max} = R_{max} / 2$. You can throw twice as far horizontally as you can high vertically!",
    why_wrong="Option C is the height achieved when thrown at $45^\\circ$ ($H = R/4 = 25\\text{ m}$), but the question asks for the maximum height with the same speed (thrown vertically at $90^\\circ$)."
))

# Q345 - Medium
qs.append(make_plane_q(
    num=345,
    question="The horizontal range of a projectile is $4\\sqrt{3}$ times its maximum height ($R = 4\\sqrt{3} H$). What is the launch angle $\\theta$?",
    options={
        "A": "$30^\\circ$",
        "B": "$60^\\circ$",
        "C": "$45^\\circ$",
        "D": "$15^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="Apply the formula $\\tan\\theta = \\frac{4H}{R}$. Here $\\frac{4H}{R} = \\frac{4H}{4\\sqrt{3}H} = \\frac{1}{\\sqrt{3}}$, so $\\theta = 30^\\circ$.",
    given="$R = 4\\sqrt{3} H$.",
    formula="\\tan\\theta = \\frac{4H}{R} = \\frac{1}{\\sqrt{3}}",
    steps=(
        "1. Use the identity: $\\tan\\theta = \\frac{4H}{R}$.\n"
        "2. Substitute $R = 4\\sqrt{3} H$:\n"
        "   $\\tan\\theta = \\frac{4H}{4\\sqrt{3}H} = \\frac{1}{\\sqrt{3}}$.\n"
        "3. Since $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$, the launch angle is $\\theta = 30^\\circ$."
    ),
    tip="If $R = 4\\sqrt{3} H \\implies \\tan\\theta = 1/\\sqrt{3} \\implies 30^\\circ$. If $R = \\frac{4}{\\sqrt{3}} H \\implies \\tan\\theta = \\sqrt{3} \\implies 60^\\circ$.",
    why_wrong="Option B corresponds to $R = \\frac{4}{\\sqrt{3}} H$."
))

# Q346 - Medium
qs.append(make_plane_q(
    num=346,
    question="A projectile has a range of $50\\text{ m}$ when launched at an angle $\\theta$ with speed $u$. If the launch speed is doubled to $2u$ at the same angle, what is its new horizontal range?",
    options={
        "A": "$200\\text{ m}$",
        "B": "$100\\text{ m}$",
        "C": "$400\\text{ m}$",
        "D": "$150\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="Horizontal range is proportional to the square of initial speed: $R \\propto u^2$. Doubling $u$ increases range by a factor of $2^2 = 4$.",
    given="$R_1 = 50\\text{ m}$, $u_2 = 2u_1$.",
    formula="R_2 = 4 R_1",
    steps=(
        "1. Range formula: $R = \\frac{u^2\\sin 2\\theta}{g}$.\n"
        "2. Since $\\theta$ and $g$ are constant, $R \\propto u^2$.\n"
        "3. With $u_2 = 2u_1$:\n"
        "   $R_2 = (2)^2 R_1 = 4 \\times 50 = 200\\text{ m}$."
    ),
    tip="Speed squared scaling: $2\\times$ speed $\\implies 4\\times$ range and $4\\times$ height!",
    why_wrong="Option B assumes linear proportionality with speed ($2 \\times 50 = 100$)."
))

# Q347 - Medium
qs.append(make_plane_q(
    num=347,
    question="The velocity of a projectile at its maximum height is $\\frac{\\sqrt{3}}{2}$ times its initial velocity $u$. What is its horizontal range? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "$\\frac{\\sqrt{3} u^2}{2g}$",
        "B": "$\\frac{u^2}{2g}$",
        "C": "$\\frac{\\sqrt{3} u^2}{g}$",
        "D": "$\\frac{u^2}{g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="Velocity at top is $u\\cos\\theta = \\frac{\\sqrt{3}}{2} u \\implies \\cos\\theta = \\frac{\\sqrt{3}}{2} \\implies \\theta = 30^\\circ$. The range is $R = \\frac{u^2\\sin(2 \\times 30^\\circ)}{g} = \\frac{u^2\\sin 60^\\circ}{g} = \\frac{\\sqrt{3}u^2}{2g}$.",
    given="$v_{top} = u\\cos\\theta = \\frac{\\sqrt{3}}{2}u$.",
    formula="R = \\frac{u^2\\sin 2\\theta}{g}",
    steps=(
        "1. Find angle: $u\\cos\\theta = \\frac{\\sqrt{3}}{2} u \\implies \\theta = 30^\\circ$.\n"
        "2. Double angle: $2\\theta = 60^\\circ$.\n"
        "3. Horizontal range:\n"
        "   $R = \\frac{u^2\\sin 60^\\circ}{g} = \\frac{u^2}{g} \\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\sqrt{3}u^2}{2g}$."
    ),
    tip="Two steps: first identify $\\theta = 30^\\circ$, then compute $\\sin 2\\theta = \\sin 60^\\circ = \\sqrt{3}/2$.",
    why_wrong="Option C forgets the factor of 2 in $\\sin 60^\\circ = \\sqrt{3}/2$."
))

# Q348 - Medium
qs.append(make_plane_q(
    num=348,
    question="A ball is projected with speed $u$ at angle $\\theta$. If the horizontal range is equal to the maximum possible range divided by 2 ($R = \\frac{1}{2} R_{max}$), what are the possible launch angles?",
    options={
        "A": "$15^\\circ$ and $75^\\circ$",
        "B": "$30^\\circ$ and $60^\\circ$",
        "C": "$45^\\circ$ and $90^\\circ$",
        "D": "$22.5^\\circ$ and $67.5^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="Since $R = R_{max}\\sin 2\\theta$, we have $R_{max}\\sin 2\\theta = \\frac{1}{2}R_{max} \\implies \\sin 2\\theta = \\frac{1}{2}$. Thus $2\\theta = 30^\\circ$ or $150^\\circ \\implies \\theta = 15^\\circ$ or $75^\\circ$.",
    given="$R = \\frac{1}{2} R_{max}$.",
    formula="\\sin 2\\theta = \\frac{1}{2}",
    steps=(
        "1. Write the relation: $R = R_{max} \\sin 2\\theta$.\n"
        "2. Given $R = 0.5 R_{max} \\implies \\sin 2\\theta = 0.5$.\n"
        "3. In the first quadrant: $2\\theta = 30^\\circ \\implies \\theta = 15^\\circ$.\n"
        "4. The second solution: $2\\theta = 180^\\circ - 30^\\circ = 150^\\circ \\implies \\theta = 75^\\circ$."
    ),
    tip="Complementary pair: $15^\\circ + 75^\\circ = 90^\\circ$!",
    why_wrong="Option B gives $\\sin 2(30^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\ne \\frac{1}{2}$."
))

# Q349 - Medium
qs.append(make_plane_q(
    num=349,
    question="A projectile launched from the ground covers a horizontal range of $80\\text{ m}$ while remaining in the air for $4\\text{ s}$. Taking $g = 10\\text{ m/s}^2$, what was its launch speed $u$ and angle $\\theta$?",
    options={
        "A": "$u = 20\\sqrt{2}\\text{ m/s} \\approx 28.3\\text{ m/s}$ at $\\theta = 45^\\circ$",
        "B": "$u = 20\\text{ m/s}$ at $\\theta = 30^\\circ$",
        "C": "$u = 40\\text{ m/s}$ at $\\theta = 60^\\circ$",
        "D": "$u = 25\\text{ m/s}$ at $\\theta = 37^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="Find $u_x$ and $u_y$ separately from $R$ and $T$: $u_x = R / T$ and $u_y = g T / 2$. Then compute $u = \\sqrt{u_x^2 + u_y^2}$ and $\\tan\\theta = u_y / u_x$.",
    given="$R = 80\\text{ m}$, $T = 4\\text{ s}$, $g = 10\\text{ m/s}^2$.",
    formula="u_x = \\frac{R}{T}; u_y = \\frac{g T}{2}; u = \\sqrt{u_x^2 + u_y^2}",
    steps=(
        "1. Horizontal component: $u_x = \\frac{R}{T} = \\frac{80}{4} = 20\\text{ m/s}$.\n"
        "2. Vertical component: $T = \\frac{2u_y}{g} \\implies u_y = \\frac{g T}{2} = \\frac{10 \\times 4}{2} = 20\\text{ m/s}$.\n"
        "3. Since $u_x = u_y = 20\\text{ m/s}$, the angle is $\\tan\\theta = \\frac{20}{20} = 1 \\implies \\theta = 45^\\circ$.\n"
        "4. Launch speed: $u = \\sqrt{20^2 + 20^2} = 20\\sqrt{2}\\text{ m/s} \\approx 28.3\\text{ m/s}$."
    ),
    tip="When $R = g T^2 / 2$, $u_x = u_y$, so $\\theta = 45^\\circ$!",
    why_wrong="Option B has launch speed too low to produce $T = 4\\text{ s}$."
))

# Q350 - Medium
qs.append(make_plane_q(
    num=350,
    question="What is the percentage change in the horizontal range of a projectile if its launch speed $u$ is increased by $2\\%$ (keeping angle $\\theta$ constant)?",
    options={
        "A": "Increases by $4\\%$",
        "B": "Increases by $2\\%$",
        "C": "Increases by $8\\%$",
        "D": "Increases by $1\\%$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="By error/percentage analysis, since $R \\propto u^2$, small fractional change is $\\frac{\\Delta R}{R} = 2 \\frac{\\Delta u}{u}$.",
    given="$\\frac{\\Delta u}{u} = +2\\%$.",
    formula="\\frac{\\Delta R}{R} \\approx 2 \\left(\\frac{\\Delta u}{u}\\right)",
    steps=(
        "1. Range depends on speed as $R = k u^2$.\n"
        "2. Take logarithms: $\\ln R = \\ln k + 2\\ln u$.\n"
        "3. Differentiating gives: $\\frac{dR}{R} = 2 \\frac{du}{u}$.\n"
        "4. For a small $2\\%$ increase: $\\% \\Delta R = 2 \\times 2\\% = 4\\%$."
    ),
    tip="Power rule: An exponent of 2 doubles the percentage change for small percentages ($< 5\\%$).",
    why_wrong="Option B assumes linear variation; Option C uses an exponent of 4."
))

# Q351 - Medium
qs.append(make_plane_q(
    num=351,
    question="A body is projected with speed $u$ at angle $\\theta$. When its kinetic energy at the summit is $75\\%$ of its initial kinetic energy, what is the horizontal range in terms of $u$ and $g$?",
    options={
        "A": "$\\frac{\\sqrt{3} u^2}{2g}$",
        "B": "$\\frac{u^2}{2g}$",
        "C": "$\\frac{\\sqrt{3} u^2}{4g}$",
        "D": "$\\frac{3u^2}{4g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="Kinetic energy at summit is $K_{top} = K_0\\cos^2\\theta$. If $K_{top} = 0.75 K_0$, then $\\cos^2\\theta = \\frac{3}{4} \\implies \\cos\\theta = \\frac{\\sqrt{3}}{2} \\implies \\theta = 30^\\circ$. Range is $\\frac{u^2\\sin 60^\\circ}{g} = \\frac{\\sqrt{3}u^2}{2g}$.",
    given="$K_{top} = 0.75 K_0$.",
    formula="\\cos^2\\theta = 0.75 = \\frac{3}{4} \\implies \\theta = 30^\\circ; R = \\frac{u^2\\sin 60^\\circ}{g}",
    steps=(
        "1. Relate kinetic energy: $K_{top} = K_0 \\cos^2\\theta$.\n"
        "2. Given: $\\cos^2\\theta = 0.75 = \\frac{3}{4} \\implies \\cos\\theta = \\frac{\\sqrt{3}}{2} \\implies \\theta = 30^\\circ$.\n"
        "3. Double angle: $2\\theta = 60^\\circ$.\n"
        "4. Horizontal range: $R = \\frac{u^2\\sin 60^\\circ}{g} = \\frac{\\sqrt{3}u^2}{2g}$."
    ),
    tip="Recognize standard fractions: $75\\% = 3/4 \\implies \\cos\\theta = \\sqrt{3}/2 \\implies 30^\\circ$!",
    why_wrong="Option D is the kinetic energy fraction, not the range."
))

# Q352 - Medium
qs.append(make_plane_q(
    num=352,
    question="Two bodies are projected from the same point with the same speed $u$ at angles $(45^\\circ + \\theta)$ and $(45^\\circ - \\theta)$. What is the ratio of their horizontal ranges?",
    options={
        "A": "$1 : 1$",
        "B": "$\\cos 2\\theta : \\sin 2\\theta$",
        "C": "$\\tan(45^\\circ + \\theta) : 1$",
        "D": "$2 : 1$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Horizontal range",
    concept="The sum of the two angles is $(45^\\circ + \\theta) + (45^\\circ - \\theta) = 90^\\circ$. Since they are complementary angles, their horizontal ranges are strictly identical ($1 : 1$).",
    given="Angles $\\theta_1 = 45^\\circ + \\theta$ and $\\theta_2 = 45^\\circ - \\theta$.",
    formula="\\theta_1 + \\theta_2 = 90^\\circ \\implies R_1 = R_2",
    steps=(
        "1. Sum the angles: $(45^\\circ + \\theta) + (45^\\circ - \\theta) = 90^\\circ$.\n"
        "2. For complementary angles, $\\sin 2\\theta_1 = \\sin 2(45^\\circ + \\theta) = \\sin(90^\\circ + 2\\theta) = \\cos 2\\theta$.\n"
        "3. For the second angle, $\\sin 2\\theta_2 = \\sin 2(45^\\circ - \\theta) = \\sin(90^\\circ - 2\\theta) = \\cos 2\\theta$.\n"
        "4. Both produce $\\frac{u^2\\cos 2\\theta}{g}$, so their ratio is $1 : 1$."
    ),
    tip="Complementary angles are always symmetric about $45^\\circ$: $(45^\\circ \\pm \\theta)$. Range ratio is always 1!",
    why_wrong="Option B compares heights, not ranges."
))

# Q353 - Hard
qs.append(make_plane_q(
    num=353,
    question="In the previous question, what is the ratio of their MAXIMUM HEIGHTS $\\frac{H_1}{H_2}$?",
    options={
        "A": "$\\frac{1 + \\sin 2\\theta}{1 - \\sin 2\\theta}$",
        "B": "$1$",
        "C": "$\\frac{1 + \\cos 2\\theta}{1 - \\cos 2\\theta}$",
        "D": "$\\tan 2\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Horizontal range",
    concept="Ratio of maximum heights for angles $\\alpha_1 = 45^\\circ + \\theta$ and $\\alpha_2 = 45^\\circ - \\theta$ is $\\frac{\\sin^2(45^\\circ + \\theta)}{\\sin^2(45^\\circ - \\theta)} = \\frac{1 - \\cos(90^\\circ + 2\\theta)}{1 - \\cos(90^\\circ - 2\\theta)} = \\frac{1 + \\sin 2\\theta}{1 - \\sin 2\\theta}$.",
    given="$\\alpha_1 = 45^\\circ + \\theta$, $\\alpha_2 = 45^\\circ - \\theta$.",
    formula="\\frac{H_1}{H_2} = \\frac{\\sin^2(45^\\circ + \\theta)}{\\sin^2(45^\\circ - \\theta)} = \\frac{1 + \\sin 2\\theta}{1 - \\sin 2\\theta}",
    steps=(
        "1. Use half-angle formula: $\\sin^2 A = \\frac{1 - \\cos 2A}{2}$.\n"
        "2. For $A = 45^\\circ + \\theta$: $2A = 90^\\circ + 2\\theta$.\n"
        "   $\\sin^2(45^\\circ + \\theta) = \\frac{1 - \\cos(90^\\circ + 2\\theta)}{2} = \\frac{1 - (-\\sin 2\\theta)}{2} = \\frac{1 + \\sin 2\\theta}{2}$.\n"
        "3. For $A = 45^\\circ - \\theta$: $2A = 90^\\circ - 2\\theta$.\n"
        "   $\\sin^2(45^\\circ - \\theta) = \\frac{1 - \\cos(90^\\circ - 2\\theta)}{2} = \\frac{1 - \\sin 2\\theta}{2}$.\n"
        "4. Divide the two expressions:\n"
        "   $\\frac{H_1}{H_2} = \\frac{1 + \\sin 2\\theta}{1 - \\sin 2\\theta}$."
    ),
    tip="Notice: As $\\theta \\to 0$, $H_1/H_2 = 1/1 = 1$. For $\\theta = 15^\\circ$ ($60^\\circ$ vs $30^\\circ$), $\\frac{1 + \\sin 30^\\circ}{1 - \\sin 30^\\circ} = \\frac{1.5}{0.5} = 3$! Matches perfectly!",
    why_wrong="Option B is the range ratio, not height ratio."
))

# Q354 - Hard
qs.append(make_plane_q(
    num=354,
    question="A gun mounted on top of a cliff of height $h$ fires a shell with muzzle speed $u$. What is the MAXIMUM HORIZONTAL RANGE that the shell can achieve on the ground below?",
    options={
        "A": "$\\frac{u}{g}\\sqrt{u^2 + 2gh}$",
        "B": "$\\frac{u^2}{g} + h$",
        "C": "$\\frac{u^2}{g}\\sqrt{1 + \\frac{2gh}{u^2}}$",
        "D": "$\\frac{u^2}{g}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Horizontal range",
    concept="For projection from an elevated cliff of height $h$, maximum range is obtained by optimizing the launch angle $\\theta$. The maximum range on the ground is given by $R_{max} = \\frac{u}{g}\\sqrt{u^2 + 2gh}$.",
    given="Launch height $h$, speed $u$.",
    formula="R_{max} = \\frac{u}{g}\\sqrt{u^2 + 2gh}",
    steps=(
        "1. Trajectory equation with ground at $y = -h$:\n"
        "   $-h = x\\tan\\theta - \\frac{g x^2}{2u^2}(1 + \\tan^2\\theta)$.\n"
        "2. Rearrange as a quadratic in $\\tan\\theta$:\n"
        "   $\\frac{gx^2}{2u^2}\\tan^2\\theta - x\\tan\\theta + \\left(\\frac{gx^2}{2u^2} - h\\right) = 0$.\n"
        "3. For real solutions of $\\tan\\theta$, discriminant $\\Delta \\ge 0$:\n"
        "   $x^2 - 4 \\left(\\frac{gx^2}{2u^2}\\right) \\left(\\frac{gx^2}{2u^2} - h\\right) \\ge 0$.\n"
        "4. Divide by $x^2$:\n"
        "   $1 - \\frac{2g}{u^2} \\left(\\frac{gx^2}{2u^2} - h\\right) \\ge 0 \\implies 1 + \\frac{2gh}{u^2} \\ge \\frac{g^2 x^2}{u^4}$.\n"
        "5. Take square root:\n"
        "   $x_{max} = \\frac{u^2}{g} \\sqrt{1 + \\frac{2gh}{u^2}} = \\frac{u}{g}\\sqrt{u^2 + 2gh}$."
    ),
    tip="Notice that if $h = 0$, $R_{max} = \\frac{u}{g}\\sqrt{u^2} = \\frac{u^2}{g}$, which matches standard ground-to-ground maximum range!",
    why_wrong="Option B simply adds cliff height to ground range; Option D ignores the extra height completely."
))

# Q355 - Hard
qs.append(make_plane_q(
    num=355,
    question="In the previous question, what is the optimum launch angle $\\theta$ for achieving this maximum range from the cliff?",
    options={
        "A": "$\\tan\\theta = \\frac{u}{\\sqrt{u^2 + 2gh}}$",
        "B": "$45^\\circ$ always",
        "C": "$\\tan\\theta = \\sqrt{1 + \\frac{2gh}{u^2}}$",
        "D": "$30^\\circ$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Horizontal range",
    concept="The optimum launch angle satisfies $\\tan\\theta_{opt} = \\frac{u}{\\sqrt{u^2 + 2gh}} = \\frac{u}{v_f} < 1$, which means $\\theta_{opt} < 45^\\circ$.",
    given="Cliff of height $h$, launch speed $u$.",
    formula="\\tan\\theta = \\frac{u}{\\sqrt{u^2 + 2gh}}",
    steps=(
        "1. From the condition of equal roots (discriminant $= 0$ in the quadratic equation):\n"
        "   $\\tan\\theta = \\frac{x_{max}}{2 (gx_{max}^2 / 2u^2)} = \\frac{u^2}{g x_{max}}$.\n"
        "2. Substitute $x_{max} = \\frac{u}{g}\\sqrt{u^2 + 2gh}$:\n"
        "   $\\tan\\theta = \\frac{u^2}{g \\left(\\frac{u}{g}\\sqrt{u^2 + 2gh}\\right)} = \\frac{u}{\\sqrt{u^2 + 2gh}}$.\n"
        "3. Since $\\sqrt{u^2 + 2gh} > u$, the ratio is strictly less than 1.\n"
        "4. Therefore, the optimum launch angle is LESS than $45^\\circ$."
    ),
    tip="When launching from a height, throw flatter ($\\theta < 45^\\circ$) to achieve maximum range, because gravity will assist in providing time of flight!",
    why_wrong="Option B ($45^\\circ$) is optimum only when launch and landing heights are the same ($h = 0$)."
))

# Q356 - Hard
qs.append(make_plane_q(
    num=356,
    question="A projectile has horizontal range $R_1$ and $R_2$ when launched at angles $\\theta$ and $(90^\\circ - \\theta)$ respectively. If $H_1$ and $H_2$ are the corresponding maximum heights, what is the value of $16 H_1 H_2$?",
    options={
        "A": "$R^2$ (where $R$ is the common range)",
        "B": "$4 R^2$",
        "C": "$R$",
        "D": "$2 R^2$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Horizontal range",
    concept="For complementary angles, $H_1 = \\frac{u^2\\sin^2\\theta}{2g}$ and $H_2 = \\frac{u^2\\cos^2\\theta}{2g}$. Multiply them: $H_1 H_2 = \\frac{u^4\\sin^2\\theta\\cos^2\\theta}{4g^2} = \\frac{(2u^2\\sin\\theta\\cos\\theta / g)^2}{16} = \\frac{R^2}{16}$.",
    given="Complementary launch angles with common range $R$.",
    formula="16 H_1 H_2 = R^2",
    steps=(
        "1. Write the product of heights:\n"
        "   $H_1 H_2 = \\left(\\frac{u^2\\sin^2\\theta}{2g}\\right) \\left(\\frac{u^2\\cos^2\\theta}{2g}\\right) = \\frac{u^4 \\sin^2\\theta\\cos^2\\theta}{4g^2}$.\n"
        "2. Multiply numerator and denominator by 4:\n"
        "   $H_1 H_2 = \\frac{u^4 (4\\sin^2\\theta\\cos^2\\theta)}{16g^2} = \\frac{1}{16} \\left(\\frac{u^2\\sin 2\\theta}{g}\\right)^2$.\n"
        "3. Since $R = \\frac{u^2\\sin 2\\theta}{g}$:\n"
        "   $H_1 H_2 = \\frac{R^2}{16} \\implies 16 H_1 H_2 = R^2$."
    ),
    tip="Famous NEET identity: $R = 4\\sqrt{H_1 H_2}$, or $R^2 = 16 H_1 H_2$!",
    why_wrong="Option B forgets to square the factor of 2."
))

# Q357 - Hard
qs.append(make_plane_q(
    num=357,
    question="In the previous question, if $H_1 = 40\\text{ m}$ and $H_2 = 10\\text{ m}$, what is the horizontal range $R$ of the projectile?",
    options={
        "A": "$80\\text{ m}$",
        "B": "$40\\text{ m}$",
        "C": "$160\\text{ m}$",
        "D": "$20\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Horizontal range",
    concept="Apply $R = 4\\sqrt{H_1 H_2}$.",
    given="$H_1 = 40\\text{ m}, H_2 = 10\\text{ m}$.",
    formula="R = 4\\sqrt{H_1 H_2}",
    steps=(
        "1. Product of heights: $H_1 H_2 = 40 \\times 10 = 400$.\n"
        "2. Square root: $\\sqrt{400} = 20\\text{ m}$.\n"
        "3. Multiply by 4:\n"
        "   $R = 4 \\times 20 = 80\\text{ m}$."
    ),
    tip="Direct evaluation: $R = 4\\sqrt{400} = 4 \\times 20 = 80\\text{ m}$. Clean and instant!",
    why_wrong="Option B forgets the multiplier 4; Option C uses multiplier 8."
))

# ==============================================================================
# Topic 21: Trajectory equation (Q358 to Q375, 18 questions)
# Distribution: 4 Easy, 9 Medium, 5 Hard
# ==============================================================================

# Q358 - Easy
qs.append(make_plane_q(
    num=358,
    question="The Cartesian equation of the trajectory of an ideal projectile launched from the origin with speed $u$ at angle $\\theta$ to the horizontal is:",
    options={
        "A": "$y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$",
        "B": "$y = x\\cot\\theta - \\frac{g x^2}{2u^2}$",
        "C": "$y = x\\tan\\theta - \\frac{g x^2}{u^2\\sin^2\\theta}$",
        "D": "$y = x\\cos\\theta - \\frac{g x^2}{2u^2}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Trajectory equation",
    concept="Eliminate time $t$ between the horizontal equation $x = (u\\cos\\theta)t \\implies t = \\frac{x}{u\\cos\\theta}$ and the vertical equation $y = (u\\sin\\theta)t - \\frac{1}{2}gt^2$.",
    given="Kinematic equations $x(t) = u\\cos\\theta t$, $y(t) = u\\sin\\theta t - \\frac{1}{2}gt^2$.",
    formula="y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}",
    steps=(
        "1. Express $t$ from horizontal motion: $t = \\frac{x}{u\\cos\\theta}$.\n"
        "2. Substitute $t$ into vertical displacement:\n"
        "   $y = (u\\sin\\theta)\\left(\\frac{x}{u\\cos\\theta}\\right) - \\frac{1}{2}g \\left(\\frac{x}{u\\cos\\theta}\\right)^2$.\n"
        "3. Simplify:\n"
        "   $y = x \\left(\\frac{\\sin\\theta}{\\cos\\theta}\\right) - \\frac{g x^2}{2u^2\\cos^2\\theta} = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$."
    ),
    tip="Since $y$ is quadratic in $x$ with a negative coefficient ($-g/2u^2\\cos^2\\theta$), the path is an inverted PARABOLA.",
    why_wrong="Option B uses $\\cot\\theta$; Option C uses $\\sin^2\\theta$ in the denominator."
))

# Q359 - Easy
qs.append(make_plane_q(
    num=359,
    question="Which alternative form represents the trajectory equation of a projectile in terms of its horizontal range $R$?",
    options={
        "A": "$y = x\\tan\\theta \\left(1 - \\frac{x}{R}\\right)$",
        "B": "$y = x\\tan\\theta \\left(1 + \\frac{x}{R}\\right)$",
        "C": "$y = R\\tan\\theta \\left(1 - \\frac{x}{R}\\right)$",
        "D": "$y = x\\cot\\theta \\left(1 - \\frac{R}{x}\\right)$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Trajectory equation",
    concept="Factor $x\\tan\\theta$ from the standard equation: $y = x\\tan\\theta \\left(1 - \\frac{g x}{2u^2\\cos^2\\theta\\tan\\theta}\\right)$. Since $2u^2\\sin\\theta\\cos\\theta / g = R$, the second term simplifies to $x/R$.",
    given="Trajectory equation and range $R = \\frac{2u^2\\sin\\theta\\cos\\theta}{g}$.",
    formula="y = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right)",
    steps=(
        "1. Start with $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$.\n"
        "2. Factor out $x\\tan\\theta$:\n"
        "   $y = x\\tan\\theta \\left[1 - \\frac{g x}{2u^2\\cos^2\\theta\\tan\\theta}\\right]$.\n"
        "3. Simplify denominator: $\\cos^2\\theta \\tan\\theta = \\cos^2\\theta \\frac{\\sin\\theta}{\\cos\\theta} = \\sin\\theta\\cos\\theta$.\n"
        "4. Recognize range: $\\frac{2u^2\\sin\\theta\\cos\\theta}{g} = R$, so $\\frac{gx}{2u^2\\sin\\theta\\cos\\theta} = \\frac{x}{R}$.\n"
        "5. Therefore: $y = x\\tan\\theta \\left(1 - \\frac{x}{R}\\right)$."
    ),
    tip="This factored form is the FASTEST formula for solving trajectory problems in NEET!",
    why_wrong="Option B has a plus sign, which would not yield $y = 0$ at $x = R$."
))

# Q360 - Easy
qs.append(make_plane_q(
    num=360,
    question="The equation of trajectory of a projectile is $y = \\sqrt{3}x - 5x^2$. What is the angle of projection $\\theta$?",
    options={
        "A": "$60^\\circ$",
        "B": "$30^\\circ$",
        "C": "$45^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Trajectory equation",
    concept="Compare the given equation with $y = x\\tan\\theta - bx^2$. The coefficient of $x$ directly equals $\\tan\\theta$.",
    given="$y = \\sqrt{3}x - 5x^2$.",
    formula="\\tan\\theta = \\text{coefficient of } x = \\sqrt{3}",
    steps=(
        "1. Standard equation: $y = x\\tan\\theta - \\frac{g}{2u^2\\cos^2\\theta}x^2$.\n"
        "2. Equating linear coefficient: $\\tan\\theta = \\sqrt{3}$.\n"
        "3. Since $\\tan 60^\\circ = \\sqrt{3}$, the angle of projection is $\\theta = 60^\\circ$."
    ),
    tip="Direct match: The linear coefficient of $x$ is ALWAYS $\\tan\\theta$!",
    why_wrong="Option B gives $\\tan 30^\\circ = 1/\\sqrt{3}$."
))

# Q361 - Easy
qs.append(make_plane_q(
    num=361,
    question="In the previous question, what is the horizontal range $R$ of the projectile?",
    options={
        "A": "$\\frac{\\sqrt{3}}{5}\\text{ m} = 0.2\\sqrt{3}\\text{ m}$",
        "B": "$\\frac{5}{\\sqrt{3}}\\text{ m}$",
        "C": "$\\sqrt{3}\\text{ m}$",
        "D": "$5\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Trajectory equation",
    concept="At landing, $y = 0$. Solve $\\sqrt{3}x - 5x^2 = 0 \\implies x(\\sqrt{3} - 5x) = 0 \\implies x = \\frac{\\sqrt{3}}{5}$.",
    given="$y = \\sqrt{3}x - 5x^2 = 0$.",
    formula="R = \\frac{\\tan\\theta}{b} = \\frac{\\sqrt{3}}{5}",
    steps=(
        "1. Set $y = 0$ for landing points:\n"
        "   $x(\\sqrt{3} - 5x) = 0$.\n"
        "2. Non-zero root corresponds to the horizontal range:\n"
        "   $5x = \\sqrt{3} \\implies x = R = \\frac{\\sqrt{3}}{5}\\text{ m}$."
    ),
    tip="Quick shortcut: For $y = ax - bx^2$, the range is always $R = a / b$!",
    why_wrong="Option B inverts the fraction $b/a$."
))

# Q362 - Medium
qs.append(make_plane_q(
    num=362,
    question="The trajectory of a projectile is given by $y = x - \\frac{x^2}{80}$, where $x$ and $y$ are in meters. What is the maximum height $H$ reached by the projectile?",
    options={
        "A": "$20\\text{ m}$",
        "B": "$40\\text{ m}$",
        "C": "$80\\text{ m}$",
        "D": "$10\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="First find range $R = a/b = 1 / (1/80) = 80\\text{ m}$. Since $\\tan\\theta = 1 \\implies \\theta = 45^\\circ$, we have $H = \\frac{R\\tan\\theta}{4} = \\frac{80(1)}{4} = 20\\text{ m}$.",
    given="$y = x - \\frac{x^2}{80}$.",
    formula="R = 80\\text{ m}; \\tan\\theta = 1; H = \\frac{R\\tan\\theta}{4}",
    steps=(
        "1. Range is the root of $x - \\frac{x^2}{80} = 0 \\implies R = 80\\text{ m}$.\n"
        "2. Maximum height occurs at the midpoint of range: $x = \\frac{R}{2} = 40\\text{ m}$.\n"
        "3. Substitute $x = 40$ into the trajectory equation:\n"
        "   $H = y(40) = 40 - \\frac{40^2}{80} = 40 - \\frac{1600}{80} = 40 - 20 = 20\\text{ m}$."
    ),
    tip="Find $H$ by simply plugging $x = R/2$ into the trajectory equation!",
    why_wrong="Option B is the value of $x$ at maximum height ($40\\text{ m}$), not the height itself."
))

# Q363 - Medium
qs.append(make_plane_q(
    num=363,
    question="In the previous question, what was the initial launch speed $u$? (Take $g = 10\\text{ m/s}^2$)",
    options={
        "A": "$20\\sqrt{2}\\text{ m/s} \\approx 28.3\\text{ m/s}$",
        "B": "$20\\text{ m/s}$",
        "C": "$40\\text{ m/s}$",
        "D": "$10\\sqrt{2}\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="From $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$, compare the coefficient of $x^2$: $\\frac{g}{2u^2\\cos^2\\theta} = \\frac{1}{80}$.",
    given="$\\frac{g}{2u^2\\cos^2\\theta} = \\frac{1}{80}$, $g = 10$, $\\theta = 45^\\circ$.",
    formula="\\frac{10}{2u^2(1/2)} = \\frac{1}{80} \\implies \\frac{10}{u^2} = \\frac{1}{80}",
    steps=(
        "1. For $\\theta = 45^\\circ$, $\\cos^2 45^\\circ = \\frac{1}{2}$.\n"
        "2. The denominator term is $2u^2\\cos^2 45^\\circ = 2u^2(1/2) = u^2$.\n"
        "3. Therefore: $\\frac{g}{u^2} = \\frac{1}{80}$.\n"
        "4. Substitute $g = 10$:\n"
        "   $\\frac{10}{u^2} = \\frac{1}{80} \\implies u^2 = 800$.\n"
        "5. $u = \\sqrt{800} = 20\\sqrt{2}\\text{ m/s}$."
    ),
    tip="Notice: $R = u^2/g$ at $45^\\circ$. Since $R = 80$, $u^2/10 = 80 \\implies u^2 = 800 \\implies u = 20\\sqrt{2}\\text{ m/s}$!",
    why_wrong="Option B gives $R = 400/10 = 40\\text{ m}$."
))

# Q364 - Medium
qs.append(make_plane_q(
    num=364,
    question="The equation of trajectory of a projectile is $y = 16x - \\frac{5x^2}{4}$, with $g = 10\\text{ m/s}^2$. What are the initial velocity components $u_x$ and $u_y$?",
    options={
        "A": "$u_x = 2\\text{ m/s}$, $u_y = 32\\text{ m/s}$",
        "B": "$u_x = 4\\text{ m/s}$, $u_y = 16\\text{ m/s}$",
        "C": "$u_x = 16\\text{ m/s}$, $u_y = 2\\text{ m/s}$",
        "D": "$u_x = 8\\text{ m/s}$, $u_y = 16\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="Trajectory equation is $y = \\left(\\frac{u_y}{u_x}\\right)x - \\frac{g}{2u_x^2}x^2$. Compare coefficients with $y = 16x - \\frac{5}{4}x^2$.",
    given="$\\frac{u_y}{u_x} = 16$, $\\frac{g}{2u_x^2} = \\frac{5}{4}$, $g = 10$.",
    formula="u_x = \\sqrt{\\frac{g}{2 b}}; u_y = a \\times u_x",
    steps=(
        "1. Coefficient of $x^2$: $\\frac{g}{2u_x^2} = \\frac{5}{4}$.\n"
        "2. Substitute $g = 10$:\n"
        "   $\\frac{10}{2u_x^2} = \\frac{5}{u_x^2} = \\frac{5}{4} \\implies u_x^2 = 4 \\implies u_x = 2\\text{ m/s}$.\n"
        "3. Coefficient of $x$: $\\tan\\theta = \\frac{u_y}{u_x} = 16$.\n"
        "4. Solve for $u_y$:\n"
        "   $u_y = 16 \\times u_x = 16 \\times 2 = 32\\text{ m/s}$."
    ),
    tip="Super useful form: $y = \\left(\\frac{u_y}{u_x}\\right)x - \\frac{g}{2u_x^2}x^2$. You can find $u_x$ and $u_y$ in 10 seconds flat!",
    why_wrong="Option B swaps or miscalculates the $u_x^2$ coefficient."
))

# Q365 - Medium
qs.append(make_plane_q(
    num=365,
    question="A projectile is launched from ground such that its coordinates at time $t$ are $x = 36t$ and $y = 48t - 4.9t^2$. What is the angle of projection with the horizontal?",
    options={
        "A": "$\\tan^{-1}\\left(\\frac{4}{3}\\right) \\approx 53^\\circ$",
        "B": "$\\tan^{-1}\\left(\\frac{3}{4}\\right) \\approx 37^\\circ$",
        "C": "$45^\\circ$",
        "D": "$60^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="From parametric equations $x = u_x t$ and $y = u_y t - \\frac{1}{2}gt^2$, we identify $u_x = 36\\text{ m/s}$ and $u_y = 48\\text{ m/s}$. Then $\\tan\\theta = \\frac{u_y}{u_x} = \\frac{48}{36} = \\frac{4}{3}$.",
    given="$x = 36t$, $y = 48t - 4.9t^2$.",
    formula="\\tan\\theta = \\frac{u_y}{u_x} = \\frac{48}{36} = \\frac{4}{3}",
    steps=(
        "1. Horizontal velocity: $u_x = 36\\text{ m/s}$.\n"
        "2. Vertical launch velocity: $u_y = 48\\text{ m/s}$.\n"
        "3. Launch angle: $\\tan\\theta = \\frac{u_y}{u_x} = \\frac{48}{36} = \\frac{4}{3}$.\n"
        "4. Therefore, $\\theta = \\tan^{-1}(4/3) \\approx 53^\\circ$."
    ),
    tip="Notice $36 = 12 \\times 3$ and $48 = 12 \\times 4$. The ratio is simply $4/3$!",
    why_wrong="Option B inverts the ratio ($36/48 = 3/4$), giving the angle with vertical."
))

# Q366 - Medium
qs.append(make_plane_q(
    num=366,
    question="In the previous question, what is the initial launch speed $u$ of the projectile?",
    options={
        "A": "$60\\text{ m/s}$",
        "B": "$48\\text{ m/s}$",
        "C": "$36\\text{ m/s}$",
        "D": "$84\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="Total launch speed is $u = \\sqrt{u_x^2 + u_y^2} = \\sqrt{36^2 + 48^2}$.",
    given="$u_x = 36\\text{ m/s}, u_y = 48\\text{ m/s}$.",
    formula="u = \\sqrt{u_x^2 + u_y^2} = 12\\sqrt{3^2 + 4^2} = 12 \\times 5 = 60\\text{ m/s}",
    steps=(
        "1. Use Pythagoras on orthogonal components:\n"
        "   $u = \\sqrt{36^2 + 48^2}$.\n"
        "2. Factor out 12:\n"
        "   $u = 12\\sqrt{3^2 + 4^2} = 12\\sqrt{9 + 16} = 12\\sqrt{25} = 12 \\times 5 = 60\\text{ m/s}$."
    ),
    tip="Always factor common numbers before squaring: $36 = 12 \\times 3$, $48 = 12 \\times 4$, so hypotenuse is $12 \\times 5 = 60$!",
    why_wrong="Option D simply adds the components $36 + 48 = 84$."
))

# Q367 - Medium
qs.append(make_plane_q(
    num=367,
    question="A projectile thrown from ground just clears two vertical hurdles of equal height $h = 30\\text{ m}$ situated at distances $x_1 = 20\\text{ m}$ and $x_2 = 60\\text{ m}$ from the projection point. What is the total horizontal range of the projectile?",
    options={
        "A": "$80\\text{ m}$",
        "B": "$100\\text{ m}$",
        "C": "$90\\text{ m}$",
        "D": "$75\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="Using $y = x\\tan\\theta\\left(1 - \\frac{x}{R}\\right)$, for the same height $h$ at two different points $x_1$ and $x_2$, the sum $x_1 + x_2$ equals the range $R$ by symmetry about the peak: $R = x_1 + x_2$.",
    given="$h = 30\\text{ m}$ at $x_1 = 20\\text{ m}$ and $x_2 = 60\\text{ m}$.",
    formula="R = x_1 + x_2",
    steps=(
        "1. Parabolic trajectories are symmetric about the vertical line passing through the maximum height ($x = R/2$).\n"
        "2. Any horizontal line $y = h$ intersects the parabola at two symmetric points $x_1$ and $x_2$.\n"
        "3. The midpoint of these two points is the peak: $\\frac{x_1 + x_2}{2} = \\frac{R}{2}$.\n"
        "4. Therefore: $R = x_1 + x_2 = 20 + 60 = 80\\text{ m}$."
    ),
    tip="Golden symmetry rule: For any equal heights on a parabola, $R = x_1 + x_2$!",
    why_wrong="Option B assumes $R = 100\\text{ m}$."
))

# Q368 - Medium
qs.append(make_plane_q(
    num=368,
    question="In the previous question, what is the launch angle $\\theta$ of the projectile?",
    options={
        "A": "$\\tan^{-1}(2) \\approx 63.4^\\circ$",
        "B": "$45^\\circ$",
        "C": "$\\tan^{-1}(1.5)$",
        "D": "$\\tan^{-1}(4)$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="Substitute $x_1 = 20\\text{ m}$, $R = 80\\text{ m}$, and $y = 30\\text{ m}$ into $y = x\\tan\\theta(1 - x/R)$ to solve for $\\tan\\theta$.",
    given="$y = 30$, $x = 20$, $R = 80$.",
    formula="30 = 20\\tan\\theta\\left(1 - \\frac{20}{80}\\right)",
    steps=(
        "1. Factor in parentheses: $1 - \\frac{20}{80} = 1 - \\frac{1}{4} = \\frac{3}{4}$.\n"
        "2. Substitute into equation:\n"
        "   $30 = 20\\tan\\theta \\times \\frac{3}{4} = 15\\tan\\theta$.\n"
        "3. Solve for $\\tan\\theta$:\n"
        "   $\\tan\\theta = \\frac{30}{15} = 2$.\n"
        "4. Therefore, $\\theta = \\tan^{-1}(2) \\approx 63.4^\\circ$."
    ),
    tip="Factored form makes this complex two-hurdle problem take less than 15 seconds: $30 = 20 \\tan\\theta (3/4) \\implies 30 = 15\\tan\\theta \\implies \\tan\\theta = 2$!",
    why_wrong="Option B gives $30 = 15(1) = 15 \\ne 30$."
))

# Q369 - Medium
qs.append(make_plane_q(
    num=369,
    question="In the same problem, what is the MAXIMUM HEIGHT $H$ reached by the projectile?",
    options={
        "A": "$40\\text{ m}$",
        "B": "$30\\text{ m}$",
        "C": "$60\\text{ m}$",
        "D": "$50\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Trajectory equation",
    concept="Using $R = 80\\text{ m}$ and $\\tan\\theta = 2$, compute maximum height $H = \\frac{R\\tan\\theta}{4}$.",
    given="$R = 80\\text{ m}$, $\\tan\\theta = 2$.",
    formula="H = \\frac{R\\tan\\theta}{4} = \\frac{80 \\times 2}{4} = 40\\text{ m}",
    steps=(
        "1. Apply the standard relation: $H = \\frac{R\\tan\\theta}{4}$.\n"
        "2. Substitute $R = 80\\text{ m}$ and $\\tan\\theta = 2$:\n"
        "   $H = \\frac{80 \\times 2}{4} = \\frac{160}{4} = 40\\text{ m}$."
    ),
    tip="Since the hurdles are $30\\text{ m}$ high, the projectile rises $10\\text{ m}$ higher to reach its summit at $40\\text{ m}$.",
    why_wrong="Option B is the hurdle height."
))

# Q370 - Hard
qs.append(make_plane_q(
    num=370,
    question="A ball projected from the ground passes through point $(x_1, y_1) = (2\\text{ m}, 6\\text{ m})$ and point $(x_2, y_2) = (4\\text{ m}, 8\\text{ m})$. What is the angle of projection $\\theta$?",
    options={
        "A": "$\\tan^{-1}(4) \\approx 76^\\circ$",
        "B": "$\\tan^{-1}(2)$",
        "C": "$45^\\circ$",
        "D": "$\\tan^{-1}(3)$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Trajectory equation",
    concept="Write $y/x = \\tan\\theta - b x$. For two points, $\\frac{y_1}{x_1} = \\tan\\theta - b x_1$ and $\\frac{y_2}{x_2} = \\tan\\theta - b x_2$. Eliminate $b$ to find $\\tan\\theta$.",
    given="$(2, 6)$ and $(4, 8)$.",
    formula="\\frac{y}{x} = \\tan\\theta - bx",
    steps=(
        "1. Rewrite trajectory equation: $\\frac{y}{x} = \\tan\\theta - bx$, where $b = \\frac{g}{2u^2\\cos^2\\theta}$.\n"
        "2. At point $(2, 6)$: $\\frac{6}{2} = 3 = \\tan\\theta - 2b$  --- (Eq 1)\n"
        "3. At point $(4, 8)$: $\\frac{8}{4} = 2 = \\tan\\theta - 4b$  --- (Eq 2)\n"
        "4. Subtract Eq 2 from Eq 1:\n"
        "   $3 - 2 = (-2b) - (-4b) \\implies 1 = 2b \\implies b = 0.5$.\n"
        "5. Substitute $b = 0.5$ into Eq 1:\n"
        "   $3 = \\tan\\theta - 2(0.5) = \\tan\\theta - 1 \\implies \\tan\\theta = 4$.\n"
        "6. Therefore, $\\theta = \\tan^{-1}(4)$."
    ),
    tip="Transform $y = x\\tan\\theta - bx^2$ to the linear form $Y = \\tan\\theta - bX$ where $Y = y/x$! This turns a quadratic problem into a simple 2-variable linear system!",
    why_wrong="Option B gives $3 = 2 - 1 = 1 \\ne 3$."
))

# Q371 - Hard
qs.append(make_plane_q(
    num=371,
    question="In the previous question, what is the horizontal range of the projectile?",
    options={
        "A": "$8\\text{ m}$",
        "B": "$4\\text{ m}$",
        "C": "$16\\text{ m}$",
        "D": "$6\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Trajectory equation",
    concept="Using the parameters $\\tan\\theta = 4$ and $b = 0.5$ found from $\\frac{y}{x} = \\tan\\theta - bx$, the horizontal range is $R = \\frac{\\tan\\theta}{b} = \\frac{4}{0.5} = 8\\text{ m}$.",
    given="$\\tan\\theta = 4, b = 0.5$.",
    formula="R = \\frac{\\tan\\theta}{b}",
    steps=(
        "1. The trajectory equation is $y = 4x - 0.5x^2$.\n"
        "2. For horizontal range, set $y = 0$:\n"
        "   $4x - 0.5x^2 = 0 \\implies x(4 - 0.5x) = 0$.\n"
        "3. For $x > 0$: $0.5x = 4 \\implies x = 8\\text{ m}$.\n"
        "4. Range is $R = 8\\text{ m}$."
    ),
    tip="Notice: $y(8) = 4(8) - 0.5(64) = 32 - 32 = 0$! Matches perfectly!",
    why_wrong="Option B is the second coordinate point; Option C is double the range."
))

# Q372 - Hard
qs.append(make_plane_q(
    num=372,
    question="A boy throws a ball to clear a wall of height $H$ at a distance $D$ away. If the speed of projection is $u$, what is the condition on $u$ for the ball to be able to clear the wall for SOME angle of projection?",
    options={
        "A": "$u \\ge \\sqrt{g(H + \\sqrt{D^2 + H^2})}$",
        "B": "$u \\ge \\sqrt{2gH}$",
        "C": "$u \\ge \\sqrt{g(D + H)}$",
        "D": "$u \\ge \\sqrt{gD}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Trajectory equation",
    concept="Parabola of safety (envelope of trajectories): The boundary of all points $(D, H)$ reachable with speed $u$ is given by $H \\le \\frac{u^2}{2g} - \\frac{g D^2}{2u^2}$. Solve for $u^2$.",
    given="Point $(D, H)$ to be cleared.",
    formula="H = \\frac{u^2}{2g} - \\frac{g D^2}{2u^2} \\implies u^4 - 2gH u^2 - g^2 D^2 \\ge 0",
    steps=(
        "1. Write the quadratic in $\\tan\\theta$ for clearing $(D, H)$:\n"
        "   $\\frac{g D^2}{2u^2}\\tan^2\\theta - D\\tan\\theta + \\left(H + \\frac{g D^2}{2u^2}\\right) = 0$.\n"
        "2. Real roots exist if discriminant $\\Delta \\ge 0$:\n"
        "   $D^2 - 4 \\left(\\frac{g D^2}{2u^2}\\right) \\left(H + \\frac{g D^2}{2u^2}\\right) \\ge 0$.\n"
        "3. Divide by $D^2$:\n"
        "   $1 - \\frac{2g}{u^2}H - \\frac{g^2 D^2}{u^4} \\ge 0 \\implies u^4 - 2gH u^2 - g^2 D^2 \\ge 0$.\n"
        "4. Solving for $u^2$ using quadratic formula:\n"
        "   $u^2 = \\frac{2gH + \\sqrt{4g^2 H^2 + 4g^2 D^2}}{2} = g(H + \\sqrt{D^2 + H^2})$.\n"
        "5. Therefore: $u \\ge \\sqrt{g(H + \\sqrt{D^2 + H^2})}$."
    ),
    tip="Classic 'bounding parabola' problem: Minimum speed to hit a target $(D, H)$ is $u_{min} = \\sqrt{g(H + \\sqrt{D^2 + H^2})}$.",
    why_wrong="Option B only allows clearing the height vertically with $D = 0$."
))

# Q373 - Hard
qs.append(make_plane_q(
    num=373,
    question="The equation of motion of a projectile is $y = \\alpha x - \\beta x^2$. If the acceleration due to gravity is $g$, what is the speed of projection $u$ in terms of $\\alpha, \\beta$, and $g$?",
    options={
        "A": "$\\sqrt{\\frac{g(1 + \\alpha^2)}{2\\beta}}$",
        "B": "$\\sqrt{\\frac{g}{2\\beta(1 + \\alpha^2)}}$",
        "C": "$\\sqrt{\\frac{2\\beta(1 + \\alpha^2)}{g}}$",
        "D": "$\\sqrt{\\frac{g\\alpha^2}{2\\beta}}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Trajectory equation",
    concept="From $y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$, we have $\\alpha = \\tan\\theta$ and $\\beta = \\frac{g}{2u^2\\cos^2\\theta}$. Since $\\frac{1}{\\cos^2\\theta} = 1 + \\tan^2\\theta = 1 + \\alpha^2$, solve for $u$.",
    given="$\\alpha = \\tan\\theta$, $\\beta = \\frac{g(1 + \\alpha^2)}{2u^2}$.",
    formula="u^2 = \\frac{g(1 + \\alpha^2)}{2\\beta}",
    steps=(
        "1. Identify coefficients from trajectory equation:\n"
        "   $\\alpha = \\tan\\theta$.\n"
        "   $\\beta = \\frac{g}{2u^2\\cos^2\\theta}$.\n"
        "2. Express $\\frac{1}{\\cos^2\\theta}$ in terms of $\\alpha$:\n"
        "   $\\frac{1}{\\cos^2\\theta} = 1 + \\tan^2\\theta = 1 + \\alpha^2$.\n"
        "3. Substitute into $\\beta$:\n"
        "   $\\beta = \\frac{g(1 + \\alpha^2)}{2u^2}$.\n"
        "4. Rearrange for $u^2$:\n"
        "   $u^2 = \\frac{g(1 + \\alpha^2)}{2\\beta}$.\n"
        "5. Take square root: $u = \\sqrt{\\frac{g(1 + \\alpha^2)}{2\\beta}}$."
    ),
    tip="Use the identity $\\sec^2\\theta = 1 + \\tan^2\\theta$ to write the coefficient purely in terms of $\\alpha$ and $\\beta$!",
    why_wrong="Option B inverts the expression; Option D forgets the $+1$ in $1 + \\alpha^2$."
))

# Q374 - Hard
qs.append(make_plane_q(
    num=374,
    question="A stone is projected from the ground with speed $u$ at angle $\\theta$. It clears three vertical poles of heights $h_1, h_2, h_3$ located at equal horizontal intervals $d$ ($x = d, 2d, 3d$). What is the relationship between the three heights?",
    options={
        "A": "$h_1 - 2h_2 + h_3 = -\\frac{g d^2}{u^2\\cos^2\\theta}$ (a constant)",
        "B": "$h_1 + h_2 + h_3 = 0$",
        "C": "$h_2 = \\frac{h_1 + h_3}{2}$ (arithmetic progression)",
        "D": "$h_2 = \\sqrt{h_1 h_3}$ (geometric progression)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Trajectory equation",
    concept="For any quadratic function $y(x) = ax - bx^2$, the second finite difference $\\Delta^2 y = y(x+d) - 2y(x) + y(x-d) = -2b d^2$ is strictly constant, equal to $-\\frac{g d^2}{u^2\\cos^2\\theta}$.",
    given="$x = d, 2d, 3d$ with $y = ax - bx^2$ where $b = \\frac{g}{2u^2\\cos^2\\theta}$.",
    formula="h_1 - 2h_2 + h_3 = -2b d^2 = -\\frac{g d^2}{u^2\\cos^2\\theta}",
    steps=(
        "1. Write the heights at the three locations:\n"
        "   $h_1 = a d - b d^2$.\n"
        "   $h_2 = a(2d) - b(2d)^2 = 2ad - 4bd^2$.\n"
        "   $h_3 = a(3d) - b(3d)^2 = 3ad - 9bd^2$.\n"
        "2. Compute the linear combination $h_1 - 2h_2 + h_3$:\n"
        "   $a d - 2(2ad) + 3ad = (1 - 4 + 3)ad = 0$ (the linear terms cancel!).\n"
        "3. Now combine the quadratic terms:\n"
        "   $-bd^2 - 2(-4bd^2) + (-9bd^2) = -bd^2 + 8bd^2 - 9bd^2 = -2bd^2$.\n"
        "4. Substitute $b = \\frac{g}{2u^2\\cos^2\\theta}$:\n"
        "   $-2 \\left(\\frac{g}{2u^2\\cos^2\\theta}\\right) d^2 = -\\frac{g d^2}{u^2\\cos^2\\theta}$."
    ),
    tip="The second derivative of a parabola is constant ($-2b$), so the second difference at equal steps is constant!",
    why_wrong="Option C holds true for a straight line ($b = 0$), not a curved parabola."
))

# Q375 - Hard
qs.append(make_plane_q(
    num=375,
    question="A projectile is thrown with velocity $u$ at angle $\\theta$. What is the focal length of the parabolic path it traces?",
    options={
        "A": "$\\frac{u^2\\cos^2\\theta}{2g}$",
        "B": "$\\frac{u^2\\sin^2\\theta}{2g}$",
        "C": "$\\frac{u^2}{2g}$",
        "D": "$\\frac{u^2\\cos^2\\theta}{4g}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Trajectory equation",
    concept="For a standard vertical parabola $x^2 = -4f(y - H)$, the focal length is $f$. Comparing with $x^2 = -\\frac{2u^2\\cos^2\\theta}{g}(y - H)$, we get $4f = \\frac{2u^2\\cos^2\\theta}{g} \\implies f = \\frac{u^2\\cos^2\\theta}{2g}$.",
    given="Parabola $y - H = -\\frac{g}{2u^2\\cos^2\\theta}\\left(x - \\frac{R}{2}\\right)^2$.",
    formula="X^2 = -4f Y \\implies 4f = \\frac{2u^2\\cos^2\\theta}{g} \\implies f = \\frac{u^2\\cos^2\\theta}{2g}",
    steps=(
        "1. Write the parabola in vertex form relative to the apex $(R/2, H)$:\n"
        "   $y - H = -b X^2$, where $X = x - R/2$ and $b = \\frac{g}{2u^2\\cos^2\\theta}$.\n"
        "2. Rearrange to standard conic form: $X^2 = -\\frac{1}{b}(y - H)$.\n"
        "3. In conics, a vertical parabola has form $X^2 = -4f(y - H)$, where $f$ is the focal length.\n"
        "4. Equate coefficients:\n"
        "   $4f = \\frac{1}{b} = \\frac{2u^2\\cos^2\\theta}{g}$.\n"
        "5. Solve for focal length $f$:\n"
        "   $f = \\frac{2u^2\\cos^2\\theta}{4g} = \\frac{u^2\\cos^2\\theta}{2g}$."
    ),
    tip="Fascinating geometric result: The focus of the parabolic trajectory lies at height $y = H - f = \\frac{u^2\\sin^2\\theta - u^2\\cos^2\\theta}{2g} = -\\frac{u^2\\cos 2\\theta}{2g}$!",
    why_wrong="Option B is the maximum height $H$; Option C is the maximum possible height at $90^\\circ$."
))

# Save topics 19, 20, 21
with open('scripts/mip_topics19_20_21.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topics 19, 20, 21 generated successfully:", len(qs))
