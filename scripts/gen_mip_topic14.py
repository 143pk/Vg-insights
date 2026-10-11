import json
import sys
sys.path.append('scripts')
from make_plane_q import make_plane_q

qs = []

# ==============================================================================
# Topic 14: Relative velocity in two dimensions (Q233 to Q250, 18 questions)
# Distribution: 4 Easy, 8 Medium, 6 Hard
# ==============================================================================

# Q233 - Easy
qs.append(make_plane_q(
    num=233,
    question="The velocity of body A relative to body B in two dimensions is defined mathematically as:",
    options={
        "A": "$\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$",
        "B": "$\\vec{v}_{AB} = \\vec{v}_A + \\vec{v}_B$",
        "C": "$\\vec{v}_{AB} = \\vec{v}_B - \\vec{v}_A$",
        "D": "$\\vec{v}_{AB} = \\frac{\\vec{v}_A}{\\vec{v}_B}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity in two dimensions",
    concept="Relative velocity $\\vec{v}_{AB}$ represents the velocity of object A as observed from the reference frame of object B. It is calculated as the vector difference $\\vec{v}_A - \\vec{v}_B$.",
    given="Two bodies A and B with velocities $\\vec{v}_A$ and $\\vec{v}_B$ relative to ground.",
    formula="\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B",
    steps=(
        "1. In an inertial frame attached to observer B, observer B is at rest ($\\vec{v}_B' = 0$).\n"
        "2. To bring B to rest, subtract $\\vec{v}_B$ from all velocities in the system.\n"
        "3. Therefore, the velocity of A in B's frame is $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$.\n"
        "4. Notice also that $\\vec{v}_{BA} = -\\vec{v}_{AB}$."
    ),
    tip="Mnemonic: $\\vec{v}_{AB}$ is 'velocity of First minus velocity of Second' (A minus B).",
    why_wrong="Option B adds the velocities; Option C is $\\vec{v}_{BA}$ (velocity of B relative to A)."
))

# Q234 - Easy
qs.append(make_plane_q(
    num=234,
    question="Car A moves due north at $40\\text{ km/h}$ and car B moves due east at $30\\text{ km/h}$. What is the magnitude of the velocity of car A relative to car B?",
    options={
        "A": "$50\\text{ km/h}$",
        "B": "$70\\text{ km/h}$",
        "C": "$10\\text{ km/h}$",
        "D": "$35\\text{ km/h}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity in two dimensions",
    concept="Set up perpendicular coordinate axes: North as $+\\hat{j}$ and East as $+\\hat{i}$. Relative velocity $\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$ has magnitude $\\sqrt{v_{Ax}^2 + (-v_{Bx})^2}$.",
    given="$\\vec{v}_A = 40\\hat{j}\\text{ km/h}$, $\\vec{v}_B = 30\\hat{i}\\text{ km/h}$.",
    formula="\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B = -30\\hat{i} + 40\\hat{j}; |\\vec{v}_{AB}| = \\sqrt{(-30)^2 + 40^2}",
    steps=(
        "1. Express in vector notation:\n"
        "   $\\vec{v}_A = 40\\hat{j}\\text{ km/h}$ (North).\n"
        "   $\\vec{v}_B = 30\\hat{i}\\text{ km/h}$ (East).\n"
        "2. Compute relative velocity:\n"
        "   $\\vec{v}_{AB} = 40\\hat{j} - 30\\hat{i} = -30\\hat{i} + 40\\hat{j}\\text{ km/h}$.\n"
        "3. Compute magnitude:\n"
        "   $|\\vec{v}_{AB}| = \\sqrt{(-30)^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ km/h}$."
    ),
    tip="Since North and East are perpendicular ($90^\\circ$), the Pythagorean theorem gives $|\\vec{v}_{AB}| = \\sqrt{v_A^2 + v_B^2} = \\sqrt{40^2 + 30^2} = 50\\text{ km/h}$.",
    why_wrong="Option B adds the speeds algebraically ($40+30 = 70$), valid only for opposite 1D motion; Option C subtracts speeds."
))

# Q235 - Easy
qs.append(make_plane_q(
    num=235,
    question="Rain is falling vertically downwards at $4\\text{ m/s}$. A man walks horizontally at $3\\text{ m/s}$. At what angle with the vertical should he hold his umbrella to protect himself from the rain?",
    options={
        "A": "$\\tan^{-1}(0.75) \\approx 37^\\circ$",
        "B": "$\\tan^{-1}(1.33) \\approx 53^\\circ$",
        "C": "$45^\\circ$",
        "D": "$90^\\circ$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity in two dimensions",
    concept="The man experiences the relative velocity of rain with respect to himself: $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m$. The angle with the vertical is given by $\\tan\\theta = \\frac{v_m}{v_r}$.",
    given="$v_r = 4\\text{ m/s}$ (downwards), $v_m = 3\\text{ m/s}$ (horizontal).",
    formula="\\tan\\theta = \\frac{v_m}{v_r} = \\frac{3}{4} = 0.75",
    steps=(
        "1. Let the horizontal forward direction be $+\\hat{i}$ and upward be $+\\hat{j}$.\n"
        "2. Rain velocity: $\\vec{v}_r = -4\\hat{j}\\text{ m/s}$.\n"
        "3. Man velocity: $\\vec{v}_m = 3\\hat{i}\\text{ m/s}$.\n"
        "4. Relative velocity of rain: $\\vec{v}_{rm} = \\vec{v}_r - \\vec{v}_m = -3\\hat{i} - 4\\hat{j}\\text{ m/s}$.\n"
        "5. The rain appears to come from ahead at an angle $\\theta$ to the vertical:\n"
        "   $\\tan\\theta = \\frac{|v_{rm,x}|}{|v_{rm,y}|} = \\frac{3}{4} = 0.75 \\implies \\theta = \\tan^{-1}(0.75) \\approx 37^\\circ$."
    ),
    tip="Umbrella rule: Always slant the umbrella in the direction of relative velocity of rain (slanted forward at $\\tan\\theta = v_{man} / v_{rain}$ with vertical).",
    why_wrong="Option B inverts the fraction ($\tan\theta = 4/3$), giving the angle with the horizontal instead of vertical."
))

# Q236 - Easy
qs.append(make_plane_q(
    num=236,
    question="A river flows due east at $2\\text{ m/s}$. A swimmer who can swim at $4\\text{ m/s}$ in still water dives in pointing directly north (perpendicular to current). What is the swimmer's resultant speed relative to the riverbank?",
    options={
        "A": "$\\sqrt{20}\\text{ m/s} = 2\\sqrt{5}\\text{ m/s} \\approx 4.47\\text{ m/s}$",
        "B": "$6\\text{ m/s}$",
        "C": "$2\\text{ m/s}$",
        "D": "$\\sqrt{12}\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity in two dimensions",
    concept="The swimmer's velocity relative to ground is the vector sum of his swimming velocity relative to water and the water velocity: $\\vec{v} = \\vec{v}_{sr} + \\vec{v}_r$.",
    given="$v_{sr} = 4\\text{ m/s}$ (North), $v_r = 2\\text{ m/s}$ (East).",
    formula="v = \\sqrt{v_{sr}^2 + v_r^2}",
    steps=(
        "1. Swimmer's velocity in water: $\\vec{v}_{sr} = 4\\hat{j}\\text{ m/s}$.\n"
        "2. River water velocity: $\\vec{v}_r = 2\\hat{i}\\text{ m/s}$.\n"
        "3. Resultant velocity relative to ground: $\\vec{v} = 2\\hat{i} + 4\\hat{j}\\text{ m/s}$.\n"
        "4. Magnitude: $|\\vec{v}| = \\sqrt{2^2 + 4^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}\\text{ m/s}$."
    ),
    tip="Perpendicular vectors add according to Pythagoras: $\\sqrt{4^2 + 2^2} = \\sqrt{20}$.",
    why_wrong="Option B simply adds speeds linearly ($4+2=6\\text{ m/s}$), which would only happen if swimming directly downstream."
))

# Q237 - Medium
qs.append(make_plane_q(
    num=237,
    question="The speed of a swimmer in still water is $20\\text{ m/s}$. The speed of river water is $10\\text{ m/s}$ and is flowing due east. If he is standing on the south bank and wishes to cross the river along the shortest path, the angle at which he should make his strokes with respect to north is:",
    options={
        "A": "$30^\\circ\\text{ west}$",
        "B": "$30^\\circ\\text{ east}$",
        "C": "$60^\\circ\\text{ west}$",
        "D": "$45^\\circ\\text{ west}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="For the shortest path (straight across, perpendicular to river flow), the resultant velocity must be strictly due North. Thus, the downstream river current must be cancelled by the upstream component of swimmer velocity: $v_{sr}\\sin\\theta = v_r$.",
    given="$v_{sr} = 20\\text{ m/s}$, $v_r = 10\\text{ m/s}$ East.",
    formula="\\sin\\theta = \\frac{v_r}{v_{sr}} = \\frac{10}{20} = \\frac{1}{2}",
    steps=(
        "1. Let North be $+\\hat{j}$ and East be $+\\hat{i}$. River flows East: $\\vec{v}_r = 10\\hat{i}\\text{ m/s}$.\n"
        "2. To cross along the shortest path (straight North), the resultant velocity $\\vec{v}$ must have zero East-West component: $v_x = 0$.\n"
        "3. Swimmer must aim upstream (towards West) at angle $\\theta$ west of north:\n"
        "   $v_{sr, x} = -v_{sr}\\sin\\theta = -20\\sin\\theta$.\n"
        "4. Set net x-velocity to zero:\n"
        "   $10 - 20\\sin\\theta = 0 \\implies \\sin\\theta = \\frac{10}{20} = 0.5$.\n"
        "5. Therefore, $\\theta = 30^\\circ$ west of north."
    ),
    tip="Shortest path condition: $\\sin\\theta = v_{river} / v_{swimmer}$. Since $\\sin\\theta = 10/20 = 1/2$, the angle is $30^\\circ$ upstream (west of north)!",
    why_wrong="Option B aims downstream, increasing drift instead of cancelling it; Option C gives $\\sin 60^\\circ = \\sqrt{3}/2$.",
    is_pyq=True,
    pyq_year=2019,
    source="NEET UG 2019"
))

# Q238 - Medium
qs.append(make_plane_q(
    num=238,
    question="In the previous question, if the width of the river is $400\\sqrt{3}\\text{ m}$, what is the time taken by the swimmer to cross the river along the shortest path?",
    options={
        "A": "$40\\text{ s}$",
        "B": "$20\\text{ s}$",
        "C": "$80\\text{ s}$",
        "D": "$20\\sqrt{3}\\text{ s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="Along the shortest path, the resultant crossing speed is $v = v_{sr}\\cos\\theta = \\sqrt{v_{sr}^2 - v_r^2}$. The time taken is $t = \\frac{d}{v}$.",
    given="$d = 400\\sqrt{3}\\text{ m}$, $v_{sr} = 20\\text{ m/s}$, $v_r = 10\\text{ m/s}$, $\\theta = 30^\\circ$.",
    formula="v = \\sqrt{20^2 - 10^2} = \\sqrt{300} = 10\\sqrt{3}\\text{ m/s}; t = \\frac{d}{v}",
    steps=(
        "1. Compute the northward crossing speed:\n"
        "   $v_y = v_{sr}\\cos 30^\\circ = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ m/s}$.\n"
        "2. Alternatively, $v_y = \\sqrt{v_{sr}^2 - v_r^2} = \\sqrt{400 - 100} = \\sqrt{300} = 10\\sqrt{3}\\text{ m/s}$.\n"
        "3. Compute time to cross width $d$:\n"
        "   $t = \\frac{d}{v_y} = \\frac{400\\sqrt{3}}{10\\sqrt{3}} = 40\\text{ s}$."
    ),
    tip="Notice the $\\sqrt{3}$ cancels out completely: $400\\sqrt{3} / (10\\sqrt{3}) = 40\\text{ s}$!",
    why_wrong="Option B uses full still water speed $20\\text{ m/s}$ directly ($400/20 = 20$), ignoring the upstream component loss."
))

# Q239 - Medium
qs.append(make_plane_q(
    num=239,
    question="A swimmer wishes to cross a river of width $d = 500\\text{ m}$ in the SHORTEST POSSIBLE TIME. The river flows at $3\\text{ m/s}$ and the swimmer's speed in still water is $5\\text{ m/s}$. What is the minimum time required and the resulting downstream drift?",
    options={
        "A": "$100\\text{ s}$ and drift $= 300\\text{ m}$",
        "B": "$125\\text{ s}$ and drift $= 375\\text{ m}$",
        "C": "$100\\text{ s}$ and drift $= 0\\text{ m}$",
        "D": "$80\\text{ s}$ and drift $= 240\\text{ m}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="To cross in minimum time, the swimmer must direct their velocity entirely across the river ($90^\\circ$ to current), giving maximum crossing speed $v_y = v_{sr}$. Drift is then $x = v_r \\times t_{min}$.",
    given="$d = 500\\text{ m}$, $v_r = 3\\text{ m/s}$, $v_{sr} = 5\\text{ m/s}$.",
    formula="t_{min} = \\frac{d}{v_{sr}}; \\text{Drift } x = v_r \\times t_{min}",
    steps=(
        "1. Minimum crossing time occurs when heading straight across ($\\theta = 90^\\circ$ to bank):\n"
        "   $t_{min} = \\frac{d}{v_{sr}} = \\frac{500}{5} = 100\\text{ s}$.\n"
        "2. During this time, the river carries the swimmer downstream:\n"
        "   $\\text{Drift } x = v_r \\times t_{min} = 3 \\times 100 = 300\\text{ m}$."
    ),
    tip="Distinguish sharply: Shortest PATH takes more time ($t = d/\\sqrt{v_{sr}^2-v_r^2} = 500/4 = 125\\text{ s}$ with zero drift), but shortest TIME is $t = d/v_{sr} = 100\\text{ s}$ with drift!",
    why_wrong="Option B corresponds to the shortest path case ($t = 125\\text{ s}$); Option C is impossible because heading straight across always produces drift."
))

# Q240 - Medium
qs.append(make_plane_q(
    num=240,
    question="A man running at $8\\text{ km/h}$ finds the rain hitting him vertically. When he increases his speed to $12\\text{ km/h}$, the rain appears to hit him at $30^\\circ$ to the vertical. What is the actual velocity of the rain relative to the ground?",
    options={
        "A": "$8\\hat{i} - 4\\sqrt{3}\\hat{j}\\text{ km/h}$",
        "B": "$8\\hat{i} - 4\\hat{j}\\text{ km/h}$",
        "C": "$12\\hat{i} - 4\\sqrt{3}\\hat{j}\\text{ km/h}$",
        "D": "$4\\hat{i} - 8\\hat{j}\\text{ km/h}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="Let actual rain velocity be $\\vec{v}_r = v_{rx}\\hat{i} - v_{ry}\\hat{j}$. In the first case, rain appears vertical, so $v_{rx} - v_{m1} = 0 \\implies v_{rx} = 8\\text{ km/h}$. In the second case, use $\\tan 30^\\circ$ to find $v_{ry}$.",
    given="$v_{m1} = 8\\hat{i}$, rain appears vertical; $v_{m2} = 12\\hat{i}$, rain appears at $30^\\circ$ to vertical.",
    formula="v_{rx} = 8; \\tan 30^\\circ = \\frac{|v_{rx} - v_{m2}|}{v_{ry}}",
    steps=(
        "1. Relative velocity in Case 1: $\\vec{v}_{r/m1} = (v_{rx} - 8)\\hat{i} - v_{ry}\\hat{j}$.\n"
        "2. Since rain appears purely vertical, the horizontal relative velocity is zero:\n"
        "   $v_{rx} - 8 = 0 \\implies v_{rx} = 8\\text{ km/h}$.\n"
        "3. Relative velocity in Case 2 (man at $12\\hat{i}$):\n"
        "   $\\vec{v}_{r/m2} = (8 - 12)\\hat{i} - v_{ry}\\hat{j} = -4\\hat{i} - v_{ry}\\hat{j}$.\n"
        "4. Rain appears at $30^\\circ$ to vertical:\n"
        "   $\\tan 30^\\circ = \\frac{4}{v_{ry}} \\implies \\frac{1}{\\sqrt{3}} = \\frac{4}{v_{ry}} \\implies v_{ry} = 4\\sqrt{3}\\text{ km/h}$.\n"
        "5. Therefore, the actual velocity of rain is $\\vec{v}_r = 8\\hat{i} - 4\\sqrt{3}\\hat{j}\\text{ km/h}$."
    ),
    tip="Whenever rain appears vertical to a moving person, the rain's actual horizontal speed EQUALS the person's speed!",
    why_wrong="Option B forgets $\\sqrt{3}$ from $\\tan 30^\\circ$; Option C uses man's second speed as the rain's horizontal velocity."
))

# Q241 - Medium
qs.append(make_plane_q(
    num=241,
    question="Ship A is moving due west with a speed of $10\\text{ km/h}$, and ship B is $100\\text{ km}$ south of A and is moving due north with a speed of $10\\text{ km/h}$. What is the time after which the distance between them is minimum?",
    options={
        "A": "$5\\text{ h}$",
        "B": "$10\\text{ h}$",
        "C": "$5\\sqrt{2}\\text{ h}$",
        "D": "$2.5\\text{ h}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="Set up coordinate positions as functions of time $t$, or compute relative velocity and the perpendicular distance from origin.",
    given="Ship A: starts at $(0, 100)$, $\\vec{v}_A = -10\\hat{i}$. Ship B: starts at $(0, 0)$, $\\vec{v}_B = 10\\hat{j}$.",
    formula="s(t)^2 = x(t)^2 + y(t)^2; \\frac{d(s^2)}{dt} = 0",
    steps=(
        "1. Relative to B's initial position at origin $(0, 0)$:\n"
        "   Ship A position: $\\vec{r}_A(t) = -10t\\hat{i} + 100\\hat{j}$.\n"
        "   Ship B position: $\\vec{r}_B(t) = 0\\hat{i} + 10t\\hat{j}$.\n"
        "2. Displacement vector between them: $\\vec{r}_{AB}(t) = \\vec{r}_A - \\vec{r}_B = -10t\\hat{i} + (100 - 10t)\\hat{j}$.\n"
        "3. Square of separation distance:\n"
        "   $D^2(t) = (-10t)^2 + (100 - 10t)^2 = 100t^2 + 10000 - 2000t + 100t^2 = 200t^2 - 2000t + 10000$.\n"
        "4. Differentiate with respect to $t$ and set to zero:\n"
        "   $\\frac{d(D^2)}{dt} = 400t - 2000 = 0 \\implies t = \\frac{2000}{400} = 5\\text{ h}$."
    ),
    tip="Standard NEET shortcut: $t_{min} = \\frac{-(\\vec{r}_0 \\cdot \\vec{v}_{rel})}{|\\vec{v}_{rel}|^2} = \\frac{-(-100 \\times (-10))}{10^2 + 10^2} = \\frac{1000}{200} = 5\\text{ h}$!",
    why_wrong="Option B calculates $100 / 10 = 10\\text{ h}$, which is the time for B to reach A's initial position; Option C introduces an unnecessary square root."
))

# Q242 - Medium
qs.append(make_plane_q(
    num=242,
    question="In the previous question, what is the minimum distance between ship A and ship B?",
    options={
        "A": "$50\\sqrt{2}\\text{ km} \\approx 70.7\\text{ km}$",
        "B": "$50\\text{ km}$",
        "C": "$100\\text{ km}$",
        "D": "$25\\sqrt{2}\\text{ km}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="Substitute $t = 5\\text{ h}$ into the separation distance expression $D(t) = \\sqrt{(-10t)^2 + (100 - 10t)^2}$.",
    given="$t = 5\\text{ h}$, $x = -10(5) = -50\\text{ km}$, $y = 100 - 10(5) = 50\\text{ km}$.",
    formula="D_{min} = \\sqrt{(-50)^2 + 50^2} = 50\\sqrt{2}\\text{ km}",
    steps=(
        "1. At $t = 5\\text{ h}$:\n"
        "   x-separation: $x = -10(5) = -50\\text{ km}$.\n"
        "   y-separation: $y = 100 - 10(5) = 100 - 50 = 50\\text{ km}$.\n"
        "2. Compute distance:\n"
        "   $D_{min} = \\sqrt{(-50)^2 + 50^2} = \\sqrt{2500 + 2500} = \\sqrt{5000} = 50\\sqrt{2}\\text{ km}$."
    ),
    tip="Geometric insight: At closest approach, the relative position vector is perpendicular to the relative velocity vector, forming an isosceles right triangle with legs $50\\text{ km}$ and hypotenuse $50\\sqrt{2}\\text{ km}$.",
    why_wrong="Option B ignores the x-coordinate displacement; Option C is the initial distance."
))

# Q243 - Medium
qs.append(make_plane_q(
    num=243,
    question="A train is moving with velocity $v = 20\\text{ m/s}$ along a straight horizontal track. A passenger throws a ball vertically upward relative to the train with speed $15\\text{ m/s}$. What is the speed of the ball relative to an observer on the ground just after the throw?",
    options={
        "A": "$25\\text{ m/s}$",
        "B": "$35\\text{ m/s}$",
        "C": "$5\\text{ m/s}$",
        "D": "$20\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="Velocity relative to ground is the vector sum of the train's velocity and the ball's velocity relative to the train: $\\vec{v}_g = \\vec{v}_t + \\vec{v}_{b/t}$. Since they are orthogonal, use Pythagoras.",
    given="$\\vec{v}_t = 20\\hat{i}\\text{ m/s}$, $\\vec{v}_{b/t} = 15\\hat{j}\\text{ m/s}$.",
    formula="v_g = \\sqrt{v_t^2 + v_{b/t}^2}",
    steps=(
        "1. Horizontal component of velocity: $v_x = 20\\text{ m/s}$.\n"
        "2. Vertical component of velocity: $v_y = 15\\text{ m/s}$.\n"
        "3. Resultant ground speed:\n"
        "   $v_g = \\sqrt{20^2 + 15^2} = \\sqrt{400 + 225} = \\sqrt{625} = 25\\text{ m/s}$."
    ),
    tip="To the passenger, the ball goes straight up and down in 1D. To the ground observer, the ball follows a parabolic projectile trajectory in 2D with launch speed $25\\text{ m/s}$!",
    why_wrong="Option B adds scalar speeds directly ($20+15 = 35\\text{ m/s}$); Option C subtracts them ($20-15 = 5\\text{ m/s}$)."
))

# Q244 - Medium
qs.append(make_plane_q(
    num=244,
    question="Two cars P and Q are traveling along perpendicular roads towards an intersection at constant speeds of $12\\text{ m/s}$ and $16\\text{ m/s}$ respectively. What is the speed of car P as observed by car Q?",
    options={
        "A": "$20\\text{ m/s}$",
        "B": "$28\\text{ m/s}$",
        "C": "$4\\text{ m/s}$",
        "D": "$14\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity in two dimensions",
    concept="Relative velocity is $\\vec{v}_{PQ} = \\vec{v}_P - \\vec{v}_Q$. For perpendicular motions, the magnitude is $\\sqrt{v_P^2 + v_Q^2}$.",
    given="$v_P = 12\\text{ m/s}$, $v_Q = 16\\text{ m/s}$, perpendicular directions.",
    formula="|\\vec{v}_{PQ}| = \\sqrt{v_P^2 + v_Q^2}",
    steps=(
        "1. Let $\\vec{v}_P = 12\\hat{i}\\text{ m/s}$ and $\\vec{v}_Q = 16\\hat{j}\\text{ m/s}$.\n"
        "2. $\\vec{v}_{PQ} = 12\\hat{i} - 16\\hat{j}\\text{ m/s}$.\n"
        "3. Magnitude:\n"
        "   $|\\vec{v}_{PQ}| = \\sqrt{12^2 + (-16)^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ m/s}$."
    ),
    tip="Notice the 3-4-5 Pythagorean triple scaled by 4: $3(4)=12$, $4(4)=16$, so hypotenuse is $5(4)=20\\text{ m/s}$!",
    why_wrong="Option B adds speeds ($12+16=28$); Option C subtracts speeds ($16-12=4$)."
))

# Q245 - Hard
qs.append(make_plane_q(
    num=245,
    question="A river is flowing from west to east with speed $5\\text{ m/s}$. A swimmer who can swim at $3\\text{ m/s}$ in still water wants to cross the river. What is the MINIMUM DRIFT that the swimmer can achieve?",
    options={
        "A": "$\\frac{4}{3} d$",
        "B": "$d$",
        "C": "$\\frac{5}{3} d$",
        "D": "$0$ (zero drift)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity in two dimensions",
    concept="When swimmer speed $v_{sr} < v_r$, zero drift is impossible. Minimum drift occurs when the swimmer aims upstream at an angle $\\theta$ such that $\\sin\\theta = \\frac{v_{sr}}{v_r}$. Drift is then $x_{min} = d \\frac{\\sqrt{v_r^2 - v_{sr}^2}}{v_{sr}}$.",
    given="$v_r = 5\\text{ m/s}$, $v_{sr} = 3\\text{ m/s}$, river width $d$.",
    formula="\\sin\\theta = \\frac{v_{sr}}{v_r} = \\frac{3}{5}; x_{min} = d \\cot\\theta = d \\frac{\\cos\\theta}{\\sin\\theta} = d \\frac{\\sqrt{1 - (3/5)^2}}{3/5}",
    steps=(
        "1. Since $v_{sr} = 3 < v_r = 5$, the river is faster than the swimmer, so zero drift is physically IMPOSSIBLE.\n"
        "2. To minimize drift, draw a tangent from the origin to the circle of radius $v_{sr}$ centered at $(v_r, 0)$.\n"
        "3. This tangent condition yields $\\sin\\theta = \\frac{v_{sr}}{v_r} = \\frac{3}{5} = 0.6$.\n"
        "4. Then $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5} = 0.8$.\n"
        "5. The minimum drift is given by $x_{min} = d \\frac{\\sqrt{v_r^2 - v_{sr}^2}}{v_{sr}} = d \\frac{\\sqrt{5^2 - 3^2}}{3} = d \\frac{4}{3} = \\frac{4}{3}d$."
    ),
    tip="Crucial NEET distinction: When $v_{sr} \\ge v_r$, minimum drift is ZERO (with $\\sin\\theta = v_r/v_{sr}$). When $v_{sr} < v_r$, zero drift is impossible, and minimum drift is $d \\frac{\\sqrt{v_r^2 - v_{sr}^2}}{v_{sr}}$ (with $\\sin\\theta = v_{sr}/v_r$)!",
    why_wrong="Option D is impossible because the river current exceeds the swimmer's maximum speed; Option C uses $5/3 d$."
))

# Q246 - Hard
qs.append(make_plane_q(
    num=246,
    question="A man standing on a road has to hold his umbrella at $30^\\circ$ with the vertical to keep the rain away. He throws the umbrella and starts running at $10\\text{ km/h}$. He finds that rain drops are hitting his head vertically. What is the speed of the raindrops with respect to moving man and ground?",
    options={
        "A": "$v_{r/m} = 10\\sqrt{3}\\text{ km/h}$, $v_r = 20\\text{ km/h}$",
        "B": "$v_{r/m} = 10\\text{ km/h}$, $v_r = 10\\sqrt{3}\\text{ km/h}$",
        "C": "$v_{r/m} = 20\\text{ km/h}$, $v_r = 10\\sqrt{3}\\text{ km/h}$",
        "D": "$v_{r/m} = 10\\sqrt{3}\\text{ km/h}$, $v_r = 10\\text{ km/h}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity in two dimensions",
    concept="When at rest, rain is at $30^\\circ$ with vertical: $\\tan 30^\\circ = \\frac{v_{rx}}{v_{ry}}$. When running at $10\\text{ km/h}$, rain appears purely vertical, so $v_{rx} = 10\\text{ km/h}$.",
    given="Stationary angle $\\theta = 30^\\circ$ to vertical; running speed $v_m = 10\\text{ km/h}$ makes rain vertical.",
    formula="v_{rx} = 10\\text{ km/h}; \\tan 30^\\circ = \\frac{v_{rx}}{v_{ry}} \\implies v_{ry} = \\frac{v_{rx}}{\\tan 30^\\circ} = 10\\sqrt{3}",
    steps=(
        "1. For the moving man, rain is vertical $\\implies$ relative horizontal velocity is zero $\\implies v_{rx} = v_m = 10\\text{ km/h}$.\n"
        "2. For stationary man, angle with vertical is $30^\\circ$:\n"
        "   $\\tan 30^\\circ = \\frac{v_{rx}}{v_{ry}} = \\frac{1}{\\sqrt{3}} \\implies v_{ry} = v_{rx}\\sqrt{3} = 10\\sqrt{3}\\text{ km/h}$.\n"
        "3. Speed of rain relative to moving man is purely its vertical component:\n"
        "   $v_{r/m} = v_{ry} = 10\\sqrt{3}\\text{ km/h}$.\n"
        "4. Speed of raindrops relative to ground:\n"
        "   $v_r = \\sqrt{v_{rx}^2 + v_{ry}^2} = \\sqrt{10^2 + (10\\sqrt{3})^2} = \\sqrt{100 + 300} = \\sqrt{400} = 20\\text{ km/h}$."
    ),
    tip="Notice: $\\sin 30^\\circ = v_{rx}/v_r = 10/v_r \\implies v_r = 10 / 0.5 = 20\\text{ km/h}$. Clean, beautiful trigonometry!",
    why_wrong="Option B inverts the components; Option C confuses ground speed with relative speed."
))

# Q247 - Hard
qs.append(make_plane_q(
    num=247,
    question="An aeroplane flies from city A to city B situated at a distance $L$ due north of A. A steady wind blows from west to east with speed $v_w$. If the airspeed of the plane is $v$, what is the total time taken for the round trip from A to B and back to A?",
    options={
        "A": "$\\frac{2L}{\\sqrt{v^2 - v_w^2}}$",
        "B": "$\\frac{2Lv}{v^2 - v_w^2}$",
        "C": "$\\frac{2L}{v + v_w}$",
        "D": "$\\frac{2L}{v}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity in two dimensions",
    concept="For crosswind (perpendicular to flight path), the plane must head upwind at angle $\\theta$ such that $v\\sin\\theta = v_w$ on both legs. Resultant ground speed is $\\sqrt{v^2 - v_w^2}$ in both directions.",
    given="Round trip distance $2L$ along North-South axis, wind speed $v_w$ along East-West axis, airspeed $v$.",
    formula="v_g = \\sqrt{v^2 - v_w^2}; t_{total} = t_{north} + t_{south} = \\frac{L}{v_g} + \\frac{L}{v_g} = \\frac{2L}{\\sqrt{v^2 - v_w^2}}",
    steps=(
        "1. For the northward journey (A to B): wind pushes East ($v_w\\hat{i}$).\n"
        "   To fly straight North, the plane must aim West of North: $v_x = -v\\sin\\theta + v_w = 0 \\implies \\sin\\theta = v_w/v$.\n"
        "   The resultant northward ground speed is $v_{g1} = v\\cos\\theta = \\sqrt{v^2 - v_w^2}$.\n"
        "   Time from A to B: $t_1 = \\frac{L}{\\sqrt{v^2 - v_w^2}}$.\n"
        "2. For the southward journey (B to A): wind still pushes East ($v_w\\hat{i}$).\n"
        "   The plane must aim West of South to cancel the east wind.\n"
        "   The resultant southward ground speed is identical: $v_{g2} = \\sqrt{v^2 - v_w^2}$.\n"
        "   Time from B to A: $t_2 = \\frac{L}{\\sqrt{v^2 - v_w^2}}$.\n"
        "3. Total time: $t_{total} = t_1 + t_2 = \\frac{2L}{\\sqrt{v^2 - v_w^2}}$."
    ),
    tip="Compare carefully: Along the wind (headwind/tailwind in 1D), round trip time is $\\frac{2Lv}{v^2 - v_w^2}$ (Option B). ACROSS the wind (perpendicular in 2D), it is $\\frac{2L}{\\sqrt{v^2 - v_w^2}}$ (Option A)!",
    why_wrong="Option B is the round trip time for motion parallel to the wind (1D headwind/tailwind), not perpendicular."
))

# Q248 - Hard
qs.append(make_plane_q(
    num=248,
    question="Three particles A, B, and C are situated at the vertices of an equilateral triangle of side $a$ at $t = 0$. Each particle moves with constant speed $v$ such that A always heads towards B, B towards C, and C towards A. At what time will the three particles meet at the centroid of the triangle?",
    options={
        "A": "$\\frac{2a}{3v}$",
        "B": "$\\frac{a}{v}$",
        "C": "$\\frac{a}{2v}$",
        "D": "$\\frac{a}{\\sqrt{3}v}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity in two dimensions",
    concept="Consider the rate of approach between any pair, say A and B: A moves towards B with speed $v$, while B moves at $60^\\circ$ to the line BA. Thus B recedes along the line with speed $v\\cos 60^\\circ$. The rate of approach is $v_{app} = v - (-v\\cos 60^\\circ) = v + v\\cos 60^\\circ = 1.5v$.",
    given="Equilateral triangle of side $a$, speed $v$.",
    formula="v_{app} = v - (-v\\cos 60^\\circ) = v(1 + \\cos 60^\\circ) = \\frac{3}{2}v; t = \\frac{a}{v_{app}} = \\frac{2a}{3v}",
    steps=(
        "1. Distance between A and B initially is $a$.\n"
        "2. Velocity of A along line AB is $+v$.\n"
        "3. Velocity of B is along BC, which makes an angle of $120^\\circ$ with vector $\\vec{AB}$, or its component along BA is $v\\cos 60^\\circ$ away from A.\n"
        "4. Therefore, the rate at which the separation between A and B decreases is:\n"
        "   $-\\frac{dr}{dt} = v - (-v\\cos 60^\\circ) = v + v(0.5) = 1.5v = \\frac{3}{2}v$.\n"
        "5. Since the rate of decrease is constant by symmetry:\n"
        "   $t = \\frac{a}{3v/2} = \\frac{2a}{3v}$."
    ),
    tip="General formula for regular polygon of $n$ sides: $t = \\frac{a}{v(1 - \\cos(2\\pi/n))}$. For $n=3$, $t = \\frac{a}{v(1 - \\cos 120^\\circ)} = \\frac{a}{v(1 - (-1/2))} = \\frac{2a}{3v}$!",
    why_wrong="Option B assumes rate of approach is $v$; Option D divides the centroid distance by $v$."
))

# Q249 - Hard
qs.append(make_plane_q(
    num=249,
    question="In the previous pursuit problem, what is the total distance traveled by each particle before they meet at the centroid?",
    options={
        "A": "$\\frac{2a}{3}$",
        "B": "$a$",
        "C": "$\\frac{a}{\\sqrt{3}}$",
        "D": "$\\frac{4a}{3}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity in two dimensions",
    concept="Since each particle moves at constant scalar speed $v$, the total distance traveled along the spiral curved path is simply $\\text{Distance} = v \\times t$.",
    given="Speed $v$, time of flight $t = \\frac{2a}{3v}$.",
    formula="\\text{Distance} = v \\times t = v \\times \\left(\\frac{2a}{3v}\\right) = \\frac{2a}{3}",
    steps=(
        "1. The speed $v$ is constant throughout the motion.\n"
        "2. The total time taken to reach the centroid is $t = \\frac{2a}{3v}$.\n"
        "3. Total path distance: $s = v \\times t = v \\times \\frac{2a}{3v} = \\frac{2a}{3}$."
    ),
    tip="Notice that $v$ cancels out completely! The total distance traveled along each spiral arm depends only on the initial side length $a$: $s = 2a/3$.",
    why_wrong="Option B assumes the path length equals side length $a$; Option C is the straight-line displacement from vertex to centroid ($a/\\sqrt{3}$)."
))

# Q250 - Hard
qs.append(make_plane_q(
    num=250,
    question="Two particles A and B start simultaneously from the same point O. Particle A moves with constant velocity $\\vec{v}_A = (3\\hat{i} + 4\\hat{j})\\text{ m/s}$, while particle B starts from rest and moves with constant acceleration $\\vec{a}_B = (2\\hat{i} + 2\\hat{j})\\text{ m/s}^2$. At what time $t > 0$ will the velocity of B relative to A be perpendicular to the initial velocity of A?",
    options={
        "A": "$3.5\\text{ s}$",
        "B": "$2.5\\text{ s}$",
        "C": "$4.0\\text{ s}$",
        "D": "$1.5\\text{ s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity in two dimensions",
    concept="Find velocity $\\vec{v}_B(t) = \\vec{a}_B t$, then relative velocity $\\vec{v}_{BA}(t) = \\vec{v}_B(t) - \\vec{v}_A$. Apply the orthogonality condition $\\vec{v}_{BA}(t) \\cdot \\vec{v}_A = 0$.",
    given="$\\vec{v}_A = 3\\hat{i} + 4\\hat{j}$, $\\vec{a}_B = 2\\hat{i} + 2\\hat{j}$, $\\vec{v}_{BA} \\perp \\vec{v}_A$.",
    formula="\\vec{v}_{BA}(t) \\cdot \\vec{v}_A = 0",
    steps=(
        "1. Velocity of B at time $t$: $\\vec{v}_B(t) = 2t\\hat{i} + 2t\\hat{j}$.\n"
        "2. Relative velocity $\\vec{v}_{BA}(t) = \\vec{v}_B(t) - \\vec{v}_A = (2t - 3)\\hat{i} + (2t - 4)\\hat{j}$.\n"
        "3. For orthogonality to $\\vec{v}_A = 3\\hat{i} + 4\\hat{j}$:\n"
        "   $\\vec{v}_{BA} \\cdot \\vec{v}_A = 3(2t - 3) + 4(2t - 4) = 0$.\n"
        "4. Expand terms:\n"
        "   $6t - 9 + 8t - 16 = 0 \\implies 14t - 25 = 0$ (Wait! Let's check: $14t = 25 \\implies t = 25/14 \\approx 1.78\\text{ s}$!)\n"
        "   Let's check if we want an integer or clean half! If $\\vec{a}_B = (1\\hat{i} + 2\\hat{j})$, then $3(t-3) + 4(2t-4) = 3t-9 + 8t-16 = 11t-25$.\n"
        "   Wait, what if $\\vec{v}_A = 4\\hat{i} + 3\\hat{j}$ and $\\vec{a}_B = 2\\hat{i} + 0\\hat{j}$? Or what if $\\vec{v}_A = 3\\hat{i} + 4\\hat{j}$ and $\\vec{a}_B = 2\\hat{i} + 3\\hat{j}$? Then $3(2t-3) + 4(3t-4) = 6t-9 + 12t-16 = 18t - 25$.\n"
        "   Wait! What if $\\vec{v}_A = 3\\hat{i} + 4\\hat{j}$ ($|v_A|^2 = 25$) and $\\vec{a}_B = 2\\hat{i} + 1\\hat{j}$? Then $3(2t-3) + 4(t-4) = 6t-9+4t-16 = 10t - 25 = 0 \\implies 10t = 25 \\implies t = 2.5\\text{ s}$! Wow, exactly $2.5\\text{ s}$! Let's set $\\vec{a}_B = (2\\hat{i} + \\hat{j})\\text{ m/s}^2$!)."
    ),
    tip="Dot product condition: $\\vec{v}_B(t) \\cdot \\vec{v}_A - |\\vec{v}_A|^2 = 0 \\implies (\\vec{a}_B \\cdot \\vec{v}_A) t = |\\vec{v}_A|^2$.",
    why_wrong="Option A and C result from miscalculating the scalar dot product."
))

# Adjust Q250 to clean numbers:
qs[-1]["question"] = "Two particles A and B start simultaneously from the same point O. Particle A moves with constant velocity $\\vec{v}_A = (3\\hat{i} + 4\\hat{j})\\text{ m/s}$, while particle B starts from rest and moves with constant acceleration $\\vec{a}_B = (2\\hat{i} + \\hat{j})\\text{ m/s}^2$. At what time $t > 0$ will the velocity of B relative to A be perpendicular to the velocity of A?"
qs[-1]["given"] = "$\\vec{v}_A = 3\\hat{i} + 4\\hat{j}\\text{ m/s}$, $\\vec{a}_B = 2\\hat{i} + \\hat{j}\\text{ m/s}^2$."
qs[-1]["options"] = {
    "A": "$2.5\\text{ s}$",
    "B": "$3.5\\text{ s}$",
    "C": "$1.5\\text{ s}$",
    "D": "$4.0\\text{ s}$"
}
qs[-1]["correct_opt"] = "A"
qs[-1]["steps"] = (
    "1. Velocity of B at time $t$: $\\vec{v}_B(t) = 2t\\hat{i} + t\\hat{j}$.\n"
    "2. Relative velocity: $\\vec{v}_{BA}(t) = \\vec{v}_B - \\vec{v}_A = (2t - 3)\\hat{i} + (t - 4)\\hat{j}$.\n"
    "3. Set dot product with $\\vec{v}_A = 3\\hat{i} + 4\\hat{j}$ to zero:\n"
    "   $\\vec{v}_{BA} \\cdot \\vec{v}_A = 3(2t - 3) + 4(t - 4) = 0$.\n"
    "4. Expand: $6t - 9 + 4t - 16 = 0 \\implies 10t - 25 = 0$.\n"
    "5. Solve for $t$: $10t = 25 \\implies t = 2.5\\text{ s}$."
)
qs[-1]["tip"] = "Shortcut: $\\vec{v}_{BA} \\cdot \\vec{v}_A = (\\vec{v}_B - \\vec{v}_A)\\cdot\\vec{v}_A = \\vec{v}_B\\cdot\\vec{v}_A - v_A^2 = 0 \\implies (\\vec{a}_B \\cdot \\vec{v}_A) t = v_A^2$. Here $(\\vec{a}_B \\cdot \\vec{v}_A) = (2)(3)+(1)(4) = 10$, and $v_A^2 = 3^2+4^2 = 25$. So $t = 25/10 = 2.5\\text{ s}$!"
qs[-1]["solutionStructured"]["given"] = qs[-1]["given"]
qs[-1]["solutionStructured"]["stepByStep"] = qs[-1]["steps"]
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: 2.5 s"

with open('scripts/mip_topic14.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Topic 14 generated successfully:", len(qs))
