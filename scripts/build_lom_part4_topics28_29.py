import json
import sys
sys.path.append('scripts')
from make_lom_q import make_lom_q

qs = []

# ==============================================================================
# Topic 28: Banking of roads and related applications (Q439 to Q454: 4 Easy, 8 Medium, 4 Hard)
# ==============================================================================

# Q439: Easy (NEET 2024 Verified PYQ)
qs.append(make_lom_q(
    num=439,
    question="The optimum speed $v_0$ with which a vehicle can negotiate a curve of radius $r$ on a road banked at an angle $\\theta$ without relying on friction is:",
    options={
        "A": "$v_0 = \\sqrt{rg \\tan\\theta}$",
        "B": "$v_0 = rg \\sin\\theta$",
        "C": "$v_0 = \\sqrt{\\frac{rg}{\\tan\\theta}}$",
        "D": "$v_0 = \\sqrt{rg \\cos\\theta}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Banking of roads and related applications",
    concept="On a banked curve without friction, the horizontal component of the normal reaction provides the centripetal force ($N\\sin\\theta = \\frac{mv^2}{r}$), while the vertical component balances the vehicle's weight ($N\\cos\\theta = mg$). Dividing these two equations gives $\\tan\\theta = \\frac{v^2}{rg} \\implies v_0 = \\sqrt{rg\\tan\\theta}$.",
    given="Radius $r$, banking angle $\\theta$, acceleration due to gravity $g$, zero friction.",
    formula="$N\\sin\\theta = \\frac{mv^2}{r}$; $N\\cos\\theta = mg \\implies \\tan\\theta = \\frac{v^2}{rg} \\implies v_0 = \\sqrt{rg\\tan\\theta}$.",
    steps="1. Draw the free-body diagram of the vehicle on the friction-free banked road:\n   - Downward gravitational weight $mg$.\n   - Normal reaction $N$ perpendicular to the banked surface, tilted at angle $\\theta$ to the vertical.\n2. Resolve the normal reaction into components:\n   - Vertical component: $N\\cos\\theta$ pointing upwards.\n   - Horizontal radial component: $N\\sin\\theta$ pointing towards the center of curvature.\n3. Vertical equilibrium (no vertical acceleration): $N\\cos\\theta = mg$.\n4. Horizontal equation of motion (centripetal force): $N\\sin\\theta = \\frac{mv^2}{r}$.\n5. Divide horizontal equation by vertical equation:\n   $\\frac{N\\sin\\theta}{N\\cos\\theta} = \\frac{mv^2/r}{mg} \\implies \\tan\\theta = \\frac{v^2}{rg}$.\n6. Solving for speed: $v_0 = \\sqrt{rg\\tan\\theta}$.",
    tip="At the optimum speed $v_0 = \\sqrt{rg\\tan\\theta}$, there is zero lateral friction on the tires, minimizing tire wear and tear!",
    why_wrong="Option B has wrong dimensions ($L^2 T^{-2}$ instead of $L T^{-1}$). Option C inverts the tangent. Option D uses cosine.",
    is_pyq=True,
    pyq_year=2024,
    source="NEET UG 2024"
))

# Q440: Easy (NEET 2025 Verified PYQ)
qs.append(make_lom_q(
    num=440,
    question="A circular track of radius $400\\text{ m}$ is banked at an angle of $45^\\circ$. If the coefficient of friction between the wheels of a vehicle and the road surface is $0.2$, what is the optimum speed of the vehicle to avoid wear and tear of tires (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$40\\text{ m/s}$",
        "B": "$63.2\\text{ m/s}$",
        "C": "$80\\text{ m/s}$",
        "D": "$20\\text{ m/s}$"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Banking of roads and related applications",
    concept="The optimum speed to avoid wear and tear of tires is the speed at which no frictional force is needed to negotiate the banked turn. This optimum speed depends purely on radius and banking angle, not on friction: $v_0 = \\sqrt{rg\\tan\\theta}$. For $r = 400\\text{ m}, \\theta = 45^\\circ, g = 10\\text{ m/s}^2$, $v_0 = \\sqrt{400 \\times 10 \\times \\tan 45^\\circ} = \\sqrt{4000} \\approx 63.2\\text{ m/s}$.",
    given="$r = 400\\text{ m}, \\theta = 45^\\circ, \\mu = 0.2, g = 10\\text{ m/s}^2$.",
    formula="$v_0 = \\sqrt{rg\\tan\\theta}$.",
    steps="1. The question asks for the 'optimum speed to avoid wear and tear of tires'.\n2. Wear and tear is avoided when the frictional force between the tires and the road is ZERO.\n3. At zero friction, the required speed is given by the ideal banking formula: $v_0 = \\sqrt{rg\\tan\\theta}$.\n4. Given $\\tan 45^\\circ = 1$, $r = 400\\text{ m}$, $g = 10\\text{ m/s}^2$.\n5. Substitute values: $v_0 = \\sqrt{400 \\times 10 \\times 1} = \\sqrt{4000}\\text{ m/s}$.\n6. Since $\\sqrt{4000} = 20\\sqrt{10} \\approx 20 \\times 3.162 = 63.24\\text{ m/s} \\approx 63.2\\text{ m/s}$.",
    tip="NEET Trap: The friction coefficient $\\mu = 0.2$ is extra distractor information! 'Optimum speed to avoid wear' means $f = 0$, so $\\mu$ is NOT used.",
    why_wrong="Option A ($40\\text{ m/s}$) is $\\sqrt{1600}$. Option C ($80\\text{ m/s}$) is double 40. Option D is 20.",
    is_pyq=True,
    pyq_year=2025,
    source="NEET UG 2025"
))

# Q441: Easy
qs.append(make_lom_q(
    num=441,
    question="Why are outer rails elevated (banked) above inner rails on curved railway tracks?",
    options={
        "A": "To provide the necessary centripetal force from the horizontal component of the normal reaction, reducing wear on the wheel flanges",
        "B": "To increase the gravitational pull on the train",
        "C": "To allow the train to stop more quickly",
        "D": "To prevent air resistance from overturning the train"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Banking of roads and related applications",
    concept="When a railway track is curved, the train needs a centripetal force towards the center of curvature. On a flat track, this force is provided by the lateral thrust of the wheel flanges against the inner side of the rail, causing severe wear. Raising the outer rail (super-elevation) tilts the track by angle $\\theta$ so that the normal reaction's horizontal component $N\\sin\\theta$ provides the centripetal force.",
    given="Banking of railway tracks (super-elevation).",
    formula="$\\tan\\theta = \\frac{v^2}{rg} = \\frac{h}{d}$, where $h$ is super-elevation and $d$ is gauge width.",
    steps="1. A train negotiating a curve requires centripetal acceleration $a_c = v^2/r$.\n2. Without banking, the normal reaction is strictly vertical, so only the mechanical flange of the wheel pushing horizontally against the rail provides this force, causing massive friction and risk of derailment.\n3. By raising the outer rail by height $h$ (super-elevation), the track is tilted at angle $\\theta$.\n4. The normal reaction tilts inward, and its horizontal component $N\\sin\\theta$ naturally provides the required centripetal force.",
    tip="Super-elevation in railways: $h = \\frac{v^2 d}{rg}$ where $d$ is the gauge width (distance between rails)!",
    why_wrong="Options B, C, and D are absurd physical explanations."
))

# Q442: Easy
qs.append(make_lom_q(
    num=442,
    question="A cyclist negotiating a sharp unbanked circular curve of radius $r$ at speed $v$ leans inward by an angle $\\theta$ with the vertical. The angle $\\theta$ is given by:",
    options={
        "A": "$\\tan\\theta = \\frac{v^2}{rg}$",
        "B": "$\\sin\\theta = \\frac{v^2}{rg}$",
        "C": "$\\tan\\theta = \\frac{rg}{v^2}$",
        "D": "$\\cos\\theta = \\frac{v^2}{rg}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Banking of roads and related applications",
    concept="To avoid toppling over due to the outward overturning torque of inertia (or friction about the center of mass), the cyclist leans inward so that the resultant contact force from the ground passes directly through the center of mass. This requires $\\tan\\theta = \\frac{v^2}{rg}$.",
    given="Cyclist on circular curve, speed $v$, radius $r$, lean angle $\\theta$ with vertical.",
    formula="$\\tan\\theta = \\frac{v^2}{rg}$.",
    steps="1. Ground exerts upward normal force $N = mg$ and inward static friction $f_s = \\frac{mv^2}{r}$.\n2. The resultant contact force $\\vec{R}$ makes an angle $\\theta$ with the vertical.\n3. For rotational equilibrium (no toppling), the line of action of $\\vec{R}$ must pass straight through the cyclist's center of mass.\n4. Therefore: $\\tan\\theta = \\frac{\\text{horizontal component}}{\\text{vertical component}} = \\frac{f_s}{N} = \\frac{mv^2/r}{mg} = \\frac{v^2}{rg}$.",
    tip="Bending of a Cyclist: $\\tan\\theta = \\frac{v^2}{rg}$ measured with the VERTICAL!",
    why_wrong="Option B and D use incorrect trigonometric functions. Option C inverts the ratio."
))

# Q443: Medium
qs.append(make_lom_q(
    num=443,
    question="A road of radius $r = 50\\text{ m}$ is banked at an angle $\\theta = 45^\\circ$. What is the ideal speed for a car to take this curve without any friction (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$22.36\\text{ m/s}$",
        "B": "$15.81\\text{ m/s}$",
        "C": "$50.0\\text{ m/s}$",
        "D": "$10.0\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="Ideal speed is $v_0 = \\sqrt{rg\\tan\\theta}$. For $r = 50\\text{ m}, \\theta = 45^\\circ, g = 10\\text{ m/s}^2$, $v_0 = \\sqrt{50 \\times 10 \\times 1} = \\sqrt{500} \\approx 22.36\\text{ m/s}$.",
    given="$r = 50\\text{ m}, \\theta = 45^\\circ, g = 10\\text{ m/s}^2$.",
    formula="$v_0 = \\sqrt{rg\\tan 45^\\circ} = \\sqrt{500} \\approx 22.36\\text{ m/s}$.",
    steps="1. Formula for ideal banking speed: $v_0 = \\sqrt{rg\\tan\\theta}$.\n2. Given $\\tan 45^\\circ = 1$.\n3. Substitute values: $v_0 = \\sqrt{50 \\times 10 \\times 1} = \\sqrt{500}$.\n4. $\\sqrt{500} = 10\\sqrt{5} \\approx 10 \\times 2.236 = 22.36\\text{ m/s}$.",
    tip="In km/h, this is $22.36 \\times 3.6 \\approx 80.5\\text{ km/h}$!",
    why_wrong="Option B ($15.81\\text{ m/s}$) is $\\sqrt{250}$. Option C is $50\\text{ m/s}$. Option D is $10\\text{ m/s}$."
))

# Q444: Medium
qs.append(make_lom_q(
    num=444,
    question="A railway track has a gauge width $d = 1.0\\text{ m}$ and a radius of curvature $r = 200\\text{ m}$. If the train is designed to negotiate the curve at a speed of $v = 10\\text{ m/s}$ without lateral thrust on the wheel flanges, what must be the super-elevation $h$ of the outer rail (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "0.05 m (5 cm)",
        "B": "0.10 m (10 cm)",
        "C": "0.02 m (2 cm)",
        "D": "0.20 m (20 cm)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="For small banking angle $\\theta$, $\\tan\\theta \\approx \\sin\\theta = \\frac{h}{d}$. The banking condition is $\\tan\\theta = \\frac{v^2}{rg} \\implies \\frac{h}{d} = \\frac{v^2}{rg} \\implies h = \\frac{v^2 d}{rg}$.",
    given="$d = 1.0\\text{ m}, r = 200\\text{ m}, v = 10\\text{ m/s}, g = 10\\text{ m/s}^2$.",
    formula="$h = \\frac{v^2 d}{rg}$.",
    steps="1. Banking formula: $\\tan\\theta = \\frac{v^2}{rg}$.\n2. For small angles, $\\tan\\theta \\approx \\frac{h}{d}$ where $h$ is elevation and $d$ is track gauge.\n3. Equating: $\\frac{h}{d} = \\frac{v^2}{rg} \\implies h = \\frac{v^2 d}{rg}$.\n4. Substitute values:\n   $h = \\frac{(10)^2 \\times 1.0}{200 \\times 10} = \\frac{100}{2000} = \\frac{1}{20} = 0.05\\text{ m} = 5\\text{ cm}$.",
    tip="Super-elevation formula: $h = \\frac{v^2 d}{rg}$. Direct formula application in NEET!",
    why_wrong="Option B (0.10 m) uses $d = 2$. Option C (0.02 m) divides by 5000. Option D (0.20 m) is $4 \\times 0.05$."
))

# Q445: Medium
qs.append(make_lom_q(
    num=445,
    question="On a banked road of angle $\\theta$ and radius $r$, if a vehicle travels at a speed $v > v_0$ (where $v_0 = \\sqrt{rg\\tan\\theta}$), in which direction does the frictional force on the tires act?",
    options={
        "A": "Downwards along the inclined surface of the road",
        "B": "Upwards along the inclined surface of the road",
        "C": "Horizontally towards the center",
        "D": "Vertically upwards"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="When $v > v_0$, the inward component of normal force $N\\sin\\theta$ is insufficient to provide the larger required centripetal force $\\frac{mv^2}{r}$. The car tends to skid outwards and UP the banked incline. To oppose this upward slip, friction acts DOWNWARDS along the incline.",
    given="Banked road, vehicle speed $v > v_0$.",
    formula="When $v > v_0$, tendency to slide is up the incline, so friction $f$ acts down the incline.",
    steps="1. At the ideal speed $v_0$, $N\\sin\\theta = \\frac{mv_0^2}{r}$ and friction is zero.\n2. When $v > v_0$, the required centripetal force $\\frac{mv^2}{r} > N\\sin\\theta$.\n3. The vehicle tends to drift outwards away from the center, which means sliding UP the banked plane.\n4. Friction always opposes the tendency of relative motion.\n5. Therefore, static friction acts DOWNWARDS along the banked inclined surface to provide the additional inward force.",
    tip="Direction of Friction on Banked Road:\n- $v > v_0$: Friction acts DOWN the incline!\n- $v < v_0$: Friction acts UP the incline!\n- $v = v_0$: Friction is ZERO!",
    why_wrong="Option B occurs when $v < v_0$. Option C is the direction of centripetal force, not friction. Option D is incorrect."
))

# Q446: Medium
qs.append(make_lom_q(
    num=446,
    question="Conversely, if a vehicle travels at a speed $v < v_0$ on a banked road of angle $\\theta$ and radius $r$, the frictional force on the tires acts:",
    options={
        "A": "Upwards along the inclined surface of the road",
        "B": "Downwards along the inclined surface of the road",
        "C": "Zero",
        "D": "Radially outward horizontally"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="When $v < v_0$, the inward component of normal force $N\\sin\\theta$ exceeds the required centripetal force $\\frac{mv^2}{r}$. The car tends to slip downwards into the center of curvature. To prevent this downward slip, static friction acts UPWARDS along the incline.",
    given="Banked road, vehicle speed $v < v_0$.",
    formula="When $v < v_0$, tendency to slide is down the incline, so friction $f$ acts up the incline.",
    steps="1. At speed $v < v_0$, the horizontal component of normal force $N\\sin\\theta$ is greater than $\\frac{mv^2}{r}$.\n2. The car tends to slip down the banked incline towards the inside of the curve.\n3. Friction opposes this downward sliding tendency.\n4. Therefore, static friction acts UPWARDS along the inclined surface.",
    tip="Remember: $v < v_0 \\implies$ friction acts UP the incline to prevent the car from sliding down!",
    why_wrong="Option B occurs when $v > v_0$. Option C only occurs at $v = v_0$. Option D is not parallel to the surface."
))

# Q447: Medium
qs.append(make_lom_q(
    num=447,
    question="The maximum safe speed $v_{\\text{max}}$ on a curved road of radius $r$ banked at an angle $\\theta$ with coefficient of static friction $\\mu_s$ is given by:",
    options={
        "A": "$\\sqrt{rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$",
        "B": "$\\sqrt{rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$",
        "C": "$\\sqrt{rg (\\tan\\theta + \\mu_s)}$",
        "D": "$\\sqrt{rg \\tan\\theta}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="At maximum speed, friction acts down the incline at limiting value $f = \\mu_s N$. Force balance along radial and vertical directions gives $N\\sin\\theta + f\\cos\\theta = \\frac{mv^2}{r}$ and $N\\cos\\theta - f\\sin\\theta = mg$. Dividing gives $v_{\\text{max}} = \\sqrt{rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$.",
    given="Banked road with friction $\\mu_s$, radius $r$, angle $\\theta$.",
    formula="$v_{\\text{max}} = \\sqrt{rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$.",
    steps="1. At maximum speed, the car is on the verge of skidding outwards and up the incline.\n2. Limiting friction $f_L = \\mu_s N$ acts down the incline.\n3. Horizontal forces towards center:\n   $N\\sin\\theta + f_L\\cos\\theta = \\frac{mv^2}{r} \\implies N(\\sin\\theta + \\mu_s\\cos\\theta) = \\frac{mv^2}{r}$.\n4. Vertical forces in equilibrium:\n   $N\\cos\\theta - f_L\\sin\\theta = mg \\implies N(\\cos\\theta - \\mu_s\\sin\\theta) = mg$.\n5. Dividing the two equations:\n   $\\frac{\\sin\\theta + \\mu_s\\cos\\theta}{\\cos\\theta - \\mu_s\\sin\\theta} = \\frac{v^2}{rg}$.\n6. Dividing numerator and denominator by $\\cos\\theta$:\n   $\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta} = \\frac{v^2}{rg} \\implies v_{\\text{max}} = \\sqrt{rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$.",
    tip="Master Formula for Banked Roads:\n$v_{\\text{max}} = \\sqrt{rg \\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}}$\n$v_{\\text{min}} = \\sqrt{rg \\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}}$!",
    why_wrong="Option B gives the minimum speed $v_{\\text{min}}$. Option C ignores the denominator. Option D is for zero friction."
))

# Q448: Medium
qs.append(make_lom_q(
    num=448,
    question="The minimum safe speed $v_{\\text{min}}$ below which a vehicle will slide down a banked road of inclination $\\theta > \\theta_r$ (where $\\theta_r = \\tan^{-1}\\mu_s$) is:",
    options={
        "A": "$\\sqrt{rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$",
        "B": "$\\sqrt{rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$",
        "C": "Zero, vehicles can always stop on any banked road",
        "D": "$\\sqrt{rg \\tan\\theta}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="When $\\theta > \\theta_r$, a stationary car would slide down into the ditch. To prevent sliding down, friction acts UP the incline. At the minimum speed, limiting friction is reached, giving $v_{\\text{min}} = \\sqrt{rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$.",
    given="Banked road $\\theta > \\tan^{-1}\\mu_s$, radius $r$, static friction $\\mu_s$.",
    formula="$v_{\\text{min}} = \\sqrt{rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$.",
    steps="1. At the lower speed limit, the vehicle is on the verge of sliding DOWN the incline.\n2. Limiting friction $f_L = \\mu_s N$ acts UP the incline.\n3. Horizontal equation: $N\\sin\\theta - f_L\\cos\\theta = \\frac{mv^2}{r} \\implies N(\\sin\\theta - \\mu_s\\cos\\theta) = \\frac{mv^2}{r}$.\n4. Vertical equation: $N\\cos\\theta + f_L\\sin\\theta = mg \\implies N(\\cos\\theta + \\mu_s\\sin\\theta) = mg$.\n5. Dividing the two equations:\n   $\\frac{\\sin\\theta - \\mu_s\\cos\\theta}{\\cos\\theta + \\mu_s\\sin\\theta} = \\frac{v^2}{rg} \\implies \\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta} = \\frac{v^2}{rg}$.\n6. Therefore, $v_{\\text{min}} = \\sqrt{rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$.",
    tip="If $\\tan\\theta \\le \\mu_s$, then $v_{\\text{min}} = 0$ (the car can safely park on the slope without slipping down)!",
    why_wrong="Option B gives $v_{\\text{max}}$. Option C is only true if $\\tan\\theta \\le \\mu_s$. Option D is the zero-friction speed."
))

# Q449: Medium
qs.append(make_lom_q(
    num=449,
    question="An aircraft executes a horizontal turn of radius $R$ at speed $v$ by banking its wings at angle $\\theta$ to the horizontal. The lift force $L$ provided by the wings is related to the aircraft's weight $mg$ and speed by:",
    options={
        "A": "$L\\cos\\theta = mg$ and $L\\sin\\theta = \\frac{mv^2}{R}$, so $\\tan\\theta = \\frac{v^2}{Rg}$",
        "B": "$L = mg$ and $L = \\frac{mv^2}{R}$",
        "C": "$L\\sin\\theta = mg$ and $L\\cos\\theta = \\frac{mv^2}{R}$",
        "D": "$L = \\frac{mv^2}{R} - mg$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="An aircraft turns by banking its wings. The aerodynamic lift force $L$ is perpendicular to the wing surface. Its vertical component $L\\cos\\theta$ balances gravity ($mg$), while its horizontal component $L\\sin\\theta$ provides the centripetal force ($\\frac{mv^2}{R}$). Dividing yields $\\tan\\theta = \\frac{v^2}{Rg}$.",
    given="Aircraft in horizontal turn radius $R$, speed $v$, bank angle $\\theta$.",
    formula="$L\\cos\\theta = mg$; $L\\sin\\theta = \\frac{mv^2}{R} \\implies \\tan\\theta = \\frac{v^2}{Rg}$; $L = \\frac{mg}{\\cos\\theta}$.",
    steps="1. In coordinated flight, aerodynamic lift $L$ is perpendicular to the wings.\n2. When the plane banks at angle $\\theta$ to the horizontal, lift tilts inward by angle $\\theta$ to the vertical.\n3. Vertical balance: $L\\cos\\theta = mg$.\n4. Centripetal horizontal force: $L\\sin\\theta = \\frac{mv^2}{R}$.\n5. Dividing gives $\\tan\\theta = \\frac{v^2}{Rg}$.\n6. The total lift required is $L = \\frac{mg}{\\cos\\theta} > mg$ (the pilot experiences a load factor $n = 1/\\cos\\theta$).",
    tip="Aircraft banking is mathematically identical to a conical pendulum and a frictionless banked road: $\\tan\\theta = \\frac{v^2}{Rg}$!",
    why_wrong="Option B ignores vector components. Option C swaps vertical and horizontal components. Option D subtracts forces."
))

# Q450: Medium
qs.append(make_lom_q(
    num=450,
    question="A jet fighter flies in a horizontal circle of radius $R = 1000\\text{ m}$ at speed $v = 100\\text{ m/s}$. What is the required bank angle $\\theta$ (take $g = 10\\text{ m/s}^2$)?",
    options={
        "A": "$45^\\circ$",
        "B": "$30^\\circ$",
        "C": "$60^\\circ$",
        "D": "$15^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Banking of roads and related applications",
    concept="Use $\\tan\\theta = \\frac{v^2}{Rg}$. Here $v = 100\\text{ m/s}$, $R = 1000\\text{ m}$, $g = 10\\text{ m/s}^2$. $\\tan\\theta = \\frac{100^2}{1000 \\times 10} = \\frac{10000}{10000} = 1 \\implies \\theta = 45^\\circ$.",
    given="$R = 1000\\text{ m}, v = 100\\text{ m/s}, g = 10\\text{ m/s}^2$.",
    formula="$\\tan\\theta = \\frac{v^2}{Rg} = \\frac{10000}{10000} = 1 \\implies \\theta = 45^\\circ$.",
    steps="1. Formula for banking angle: $\\tan\\theta = \\frac{v^2}{Rg}$.\n2. Substitute values: $\\tan\\theta = \\frac{(100)^2}{1000 \\times 10} = \\frac{10000}{10000} = 1$.\n3. $\\tan\\theta = 1 \\implies \\theta = 45^\\circ$.",
    tip="When $v^2 = Rg$, the banking angle is ALWAYS $45^\\circ$!",
    why_wrong="Option B ($30^\\circ$) requires $\\tan\\theta = 0.577$. Option C ($60^\\circ$) requires $\\tan\\theta = 1.732$. Option D is $15^\\circ$."
))

# Q451: Hard
qs.append(make_lom_q(
    num=451,
    question="A curved road of radius $R = 100\\text{ m}$ is banked at angle $\\theta = 45^\\circ$. The coefficient of static friction is $\\mu_s = 0.5$. Taking $g = 10\\text{ m/s}^2$, what is the maximum speed $v_{\\text{max}}$ with which a car can take the curve without skidding?",
    options={
        "A": "$54.77\\text{ m/s}$ (approx. $197\\text{ km/h}$)",
        "B": "$31.62\\text{ m/s}$",
        "C": "$40.00\\text{ m/s}$",
        "D": "$22.36\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Banking of roads and related applications",
    concept="Substitute into maximum speed formula: $v_{\\text{max}} = \\sqrt{Rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$. With $\\theta = 45^\\circ$ ($\\tan 45^\\circ = 1$), $\\frac{1 + 0.5}{1 - 0.5} = \\frac{1.5}{0.5} = 3$. $v_{\\text{max}} = \\sqrt{100 \\times 10 \\times 3} = \\sqrt{3000} \\approx 54.77\\text{ m/s}$.",
    given="$R = 100\\text{ m}, \\theta = 45^\\circ, \\mu_s = 0.5, g = 10\\text{ m/s}^2$.",
    formula="$v_{\\text{max}} = \\sqrt{Rg \\left(\\frac{\\tan 45^\\circ + \\mu_s}{1 - \\mu_s\\tan 45^\\circ}\\right)} = \\sqrt{1000 \\times 3} = \\sqrt{3000} \\approx 54.77\\text{ m/s}$.",
    steps="1. Use the full banked road formula for maximum speed:\n   $v_{\\text{max}} = \\sqrt{Rg \\left(\\frac{\\tan\\theta + \\mu_s}{1 - \\mu_s\\tan\\theta}\\right)}$.\n2. Here $\\tan 45^\\circ = 1$ and $\\mu_s = 0.5$.\n3. The bracket term simplifies to:\n   $\\frac{1 + 0.5}{1 - (0.5)(1)} = \\frac{1.5}{0.5} = 3$.\n4. Calculate inside the radical:\n   $Rg \\times 3 = 100 \\times 10 \\times 3 = 3000\\text{ m}^2/\\text{s}^2$.\n5. Taking square root:\n   $v_{\\text{max}} = \\sqrt{3000} = 10\\sqrt{30} \\approx 10 \\times 5.477 = 54.77\\text{ m/s}$.",
    tip="At $\\theta = 45^\\circ$, the friction multiplier is $\\frac{1 + \\mu}{1 - \\mu}$! For $\\mu = 0.5$, this is $1.5/0.5 = 3$.",
    why_wrong="Option B ($31.62\\text{ m/s}$) is the zero-friction speed $\\sqrt{1000}$. Option C is $40\\text{ m/s}$. Option D is $22.36\\text{ m/s}$."
))

# Q452: Hard
qs.append(make_lom_q(
    num=452,
    question="In the previous setup ($R = 100\\text{ m}, \\theta = 45^\\circ, \\mu_s = 0.5, g = 10\\text{ m/s}^2$), what is the minimum speed $v_{\\text{min}}$ below which the car will slide down the banked road?",
    options={
        "A": "$18.26\\text{ m/s}$ (approx. $65.7\\text{ km/h}$)",
        "B": "$31.62\\text{ m/s}$",
        "C": "$10.00\\text{ m/s}$",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Banking of roads and related applications",
    concept="Substitute into minimum speed formula: $v_{\\text{min}} = \\sqrt{Rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$. With $\\theta = 45^\\circ$ ($\\tan 45^\\circ = 1$), $\\frac{1 - 0.5}{1 + 0.5} = \\frac{0.5}{1.5} = \\frac{1}{3}$. $v_{\\text{min}} = \\sqrt{100 \\times 10 \\times \\frac{1}{3}} = \\sqrt{\\frac{1000}{3}} \\approx \\sqrt{333.33} \\approx 18.26\\text{ m/s}$.",
    given="$R = 100\\text{ m}, \\theta = 45^\\circ, \\mu_s = 0.5, g = 10\\text{ m/s}^2$.",
    formula="$v_{\\text{min}} = \\sqrt{Rg \\left(\\frac{\\tan 45^\\circ - \\mu_s}{1 + \\mu_s\\tan 45^\\circ}\\right)} = \\sqrt{\\frac{1000}{3}} \\approx 18.26\\text{ m/s}$.",
    steps="1. Use the minimum speed formula:\n   $v_{\\text{min}} = \\sqrt{Rg \\left(\\frac{\\tan\\theta - \\mu_s}{1 + \\mu_s\\tan\\theta}\\right)}$.\n2. With $\\tan 45^\\circ = 1$ and $\\mu_s = 0.5$:\n   $\\frac{1 - 0.5}{1 + 0.5} = \\frac{0.5}{1.5} = \\frac{1}{3}$.\n3. Calculate under the radical:\n   $v_{\\text{min}}^2 = 100 \\times 10 \\times \\frac{1}{3} = \\frac{1000}{3} \\approx 333.33$.\n4. Taking square root:\n   $v_{\\text{min}} = \\sqrt{333.33} \\approx 18.257 \\approx 18.26\\text{ m/s}$.",
    tip="Safe speed corridor on this banked track is $18.26\\text{ m/s} \\le v \\le 54.77\\text{ m/s}$ (approx. $66\\text{ km/h}$ to $197\\text{ km/h}$)!",
    why_wrong="Option B ($31.62\\text{ m/s}$) is the optimum zero-friction speed. Option C is $10\\text{ m/s}$. Option D (zero) would cause the car to slide into the ditch because $\\tan 45^\\circ = 1 > \\mu_s = 0.5$."
))

# Q453: Hard
qs.append(make_lom_q(
    num=453,
    question="At what banking angle $\\theta$ will a car be able to travel around a curve of radius $r$ at speed $v$ with ZERO lateral thrust on its tires?",
    options={
        "A": "$\\tan\\theta = \\frac{v^2}{rg}$",
        "B": "$\\sin\\theta = \\frac{v^2}{rg}$",
        "C": "$\\cos\\theta = \\frac{v^2}{rg}$",
        "D": "$\\cot\\theta = \\frac{v^2}{rg}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Banking of roads and related applications",
    concept="Zero lateral thrust means zero friction ($f = 0$). As derived from Newton's laws: $N\\sin\\theta = \\frac{mv^2}{r}$ and $N\\cos\\theta = mg$, dividing gives $\\tan\\theta = \\frac{v^2}{rg}$.",
    given="Curve radius $r$, speed $v$, zero friction.",
    formula="$\\tan\\theta = \\frac{v^2}{rg}$.",
    steps="1. Zero lateral thrust means no tangential force acts parallel to the road surface.\n2. The only contact force from the road is the perpendicular normal reaction $N$.\n3. The horizontal component $N\\sin\\theta$ must supply the entire centripetal force: $N\\sin\\theta = \\frac{mv^2}{r}$.\n4. The vertical component $N\\cos\\theta$ must balance gravity: $N\\cos\\theta = mg$.\n5. Dividing these two equations:\n   $\\frac{N\\sin\\theta}{N\\cos\\theta} = \\frac{mv^2/r}{mg} \\implies \\tan\\theta = \\frac{v^2}{rg}$.",
    tip="Design condition for highway engineers: Set banking angle $\\theta = \\tan^{-1}\\left(\\frac{v^2}{rg}\\right)$ for the expected speed limit!",
    why_wrong="Option B, C, and D are incorrect trigonometric relationships."
))

# Q454: Hard
qs.append(make_lom_q(
    num=454,
    question="A car is traveling along a banked road at the optimum speed $v_0 = \\sqrt{rg\\tan\\theta}$. What is the magnitude of the normal force $N$ exerted by the road on the car of mass $m$?",
    options={
        "A": "$\\frac{mg}{\\cos\\theta}$",
        "B": "$mg \\cos\\theta$",
        "C": "$mg$",
        "D": "$mg \\sin\\theta$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Banking of roads and related applications",
    concept="In the vertical direction, the car has zero acceleration. Vertical equilibrium requires $N\\cos\\theta = mg \\implies N = \\frac{mg}{\\cos\\theta}$. Since $\\cos\\theta < 1$, $N > mg$.",
    given="Optimum speed $v_0$, mass $m$, banking angle $\\theta$, zero friction.",
    formula="$N\\cos\\theta = mg \\implies N = \\frac{mg}{\\cos\\theta}$.",
    steps="1. At the optimum speed, friction is zero.\n2. The normal reaction $N$ is tilted at angle $\\theta$ to the vertical.\n3. Along the vertical axis, forces must balance since there is no vertical acceleration:\n   $N\\cos\\theta = mg$.\n4. Therefore: $N = \\frac{mg}{\\cos\\theta}$.\n5. Alternative expression: $N = \\sqrt{(mg)^2 + \\left(\\frac{mv_0^2}{r}\\right)^2} = mg\\sqrt{1 + \\tan^2\\theta} = \\frac{mg}{\\cos\\theta}$.",
    tip="On a banked curve, normal force is GREATER than weight: $N = \\frac{mg}{\\cos\\theta} > mg$! Passenger feels pushed into seat.",
    why_wrong="Option B ($mg\\cos\\theta$) is for an inclined plane where acceleration is down the plane. Option C ignores banking. Option D is the horizontal component."
))

# ==============================================================================
# Topic 29: Maximum speed and friction in circular motion (Q455 to Q469: 4 Easy, 7 Medium, 4 Hard)
# ==============================================================================

# Q455: Easy
qs.append(make_lom_q(
    num=455,
    question="On a flat (unbanked) horizontal road of radius $r$, the maximum safe speed $v_{\\text{max}}$ for a car to turn without skidding depends on the coefficient of static friction $\\mu_s$ as:",
    options={
        "A": "$v_{\\text{max}} = \\sqrt{\\mu_s r g}$",
        "B": "$v_{\\text{max}} = \\mu_s r g$",
        "C": "$v_{\\text{max}} = \\sqrt{\\frac{r g}{\\mu_s}}$",
        "D": "$v_{\\text{max}} = \\frac{\\mu_s g}{r}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum speed and friction in circular motion",
    concept="On a flat unbanked road, the required centripetal force is provided solely by static friction between tires and road: $f_s = \\frac{mv^2}{r}$. The maximum static friction available is $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$. Setting $\\frac{mv^2}{r} \\le \\mu_s mg$ gives $v \\le \\sqrt{\\mu_s rg}$.",
    given="Flat unbanked circular road, radius $r$, static friction $\\mu_s$.",
    formula="$v_{\\text{max}} = \\sqrt{\\mu_s r g}$.",
    steps="1. Normal force on flat road: $N = mg$.\n2. Maximum static friction: $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.\n3. Inward centripetal force needed: $F_c = \\frac{mv^2}{r}$.\n4. For no skidding: $F_c \\le f_{\\text{lim}} \\implies \\frac{mv^2}{r} \\le \\mu_s mg$.\n5. Cancelling mass $m$: $v^2 \\le \\mu_s rg \\implies v_{\\text{max}} = \\sqrt{\\mu_s r g}$.",
    tip="Unbanked curve maximum speed: $v_{\\text{max}} = \\sqrt{\\mu_s r g}$. Independent of car mass!",
    why_wrong="Option B misses the square root. Option C inverts $\\mu_s$. Option D has wrong dimensions."
))

# Q456: Easy
qs.append(make_lom_q(
    num=456,
    question="A car of mass $1000\\text{ kg}$ rounds an unbanked circular curve of radius $50\\text{ m}$ on a dry asphalt road with $\\mu_s = 0.8$. Taking $g = 10\\text{ m/s}^2$, what is the maximum speed without skidding?",
    options={
        "A": "$20\\text{ m/s}$",
        "B": "$40\\text{ m/s}$",
        "C": "$10\\text{ m/s}$",
        "D": "$28.3\\text{ m/s}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum speed and friction in circular motion",
    concept="Apply $v_{\\text{max}} = \\sqrt{\\mu_s rg} = \\sqrt{0.8 \\times 50 \\times 10} = \\sqrt{400} = 20\\text{ m/s}$.",
    given="$r = 50\\text{ m}, \\mu_s = 0.8, g = 10\\text{ m/s}^2$.",
    formula="$v_{\\text{max}} = \\sqrt{\\mu_s r g} = \\sqrt{0.8 \\times 50 \\times 10} = \\sqrt{400} = 20\\text{ m/s}$.",
    steps="1. Formula: $v_{\\text{max}} = \\sqrt{\\mu_s r g}$.\n2. Substitute values: $v_{\\text{max}} = \\sqrt{0.8 \\times 50 \\times 10} = \\sqrt{400}$.\n3. Taking square root: $v_{\\text{max}} = 20\\text{ m/s}$.",
    tip="$20\\text{ m/s} = 72\\text{ km/h}$. Notice the car's mass ($1000\\text{ kg}$) is completely irrelevant!",
    why_wrong="Option B ($40\\text{ m/s}$) is $v^2 / 10$. Option C is half. Option D is $\\sqrt{800}$."
))

# Q457: Easy
qs.append(make_lom_q(
    num=457,
    question="When the road surface becomes wet or icy, the coefficient of static friction $\\mu_s$ is reduced to one-fourth of its dry value. The maximum safe speed on the curve will:",
    options={
        "A": "Be halved",
        "B": "Be reduced to one-fourth",
        "C": "Remain unchanged",
        "D": "Be reduced to one-sixteenth"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum speed and friction in circular motion",
    concept="Because $v_{\\text{max}} = \\sqrt{\\mu_s rg}$, speed is proportional to the square root of friction: $v_{\\text{max}} \\propto \\sqrt{\\mu_s}$. Reducing $\\mu_s$ by a factor of 4 reduces $v_{\\text{max}}$ by a factor of $\\sqrt{4} = 2$ (it is halved).",
    given="$\\mu' = \\mu_s / 4$.",
    formula="$v' = \\sqrt{\\frac{\\mu_s}{4} r g} = \\frac{1}{2}\\sqrt{\\mu_s r g} = \\frac{v}{2}$.",
    steps="1. Formula: $v_{\\text{max}} = \\sqrt{\\mu_s rg}$.\n2. When $\\mu_s$ becomes $\\mu_s / 4$:\n   $v' = \\sqrt{\\frac{\\mu_s}{4} rg} = \\frac{1}{2}\\sqrt{\\mu_s rg} = \\frac{v_{\\text{max}}}{2}$.\n3. Therefore, the maximum safe speed is halved.",
    tip="Driving Safety Rule: Wet roads have 4 times less grip $\\implies$ maximum safe cornering speed drops by half!",
    why_wrong="Option B assumes linear dependence. Option C assumes independence. Option D squares the factor."
))

# Q458: Easy
qs.append(make_lom_q(
    num=458,
    question="For a four-wheeled vehicle of track width $2a$ and center of mass height $h$ turning on a flat circular curve of radius $r$, the condition for skidding before overturning is:",
    options={
        "A": "$\\mu_s < \\frac{a}{h}$",
        "B": "$\\mu_s > \\frac{a}{h}$",
        "C": "$\\mu_s = \\frac{h}{a}$",
        "D": "$\\mu_s > \\frac{h}{a}$"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Maximum speed and friction in circular motion",
    concept="The critical speed for skidding is $v_{\\text{skid}} = \\sqrt{\\mu_s rg}$. The critical speed for overturning is $v_{\\text{topple}} = \\sqrt{\\frac{arg}{h}}$. A vehicle will skid before overturning if $v_{\\text{skid}} < v_{\\text{topple}} \\implies \\mu_s rg < \\frac{arg}{h} \\implies \\mu_s < \\frac{a}{h}$.",
    given="Track width $2a$ (half-width $a$), CM height $h$, radius $r$, coefficient $\\mu_s$.",
    formula="$v_{\\text{skid}} = \\sqrt{\\mu_s rg}$; $v_{\\text{topple}} = \\sqrt{\\frac{arg}{h}}$; Skidding precedes overturning if $\\mu_s < \\frac{a}{h}$.",
    steps="1. Speed at which skidding occurs: $v_s = \\sqrt{\\mu_s rg}$.\n2. Speed at which inner wheels lift off and vehicle topples: $v_t = \\sqrt{\\frac{arg}{h}}$.\n3. For the vehicle to skid rather than overturn, the skidding threshold must be reached at a lower speed: $v_s < v_t$.\n4. $\\sqrt{\\mu_s rg} < \\sqrt{\\frac{arg}{h}} \\implies \\mu_s rg < \\frac{arg}{h}$.\n5. Cancelling $rg$: $\\mu_s < \\frac{a}{h}$.",
    tip="Vehicle Dynamics Golden Rule:\n- $\\mu_s < \\frac{a}{h} \\implies$ Skids first (safer)\n- $\\mu_s > \\frac{a}{h} \\implies$ Overturns first (tall vehicles like SUVs on high-friction dry pavement)!",
    why_wrong="Option B is the condition for overturning before skidding. Option C and D invert the geometry ratio."
))

# Q459: Medium
qs.append(make_lom_q(
    num=459,
    question="A truck has its center of mass at height $h = 1.5\\text{ m}$ above the ground, and its wheel track width is $2a = 1.8\\text{ m}$ (so $a = 0.9\\text{ m}$). The coefficient of friction with the road is $\\mu_s = 0.8$. On a flat curve, this truck will:",
    options={
        "A": "Overturn before skidding, because $\\mu_s > \\frac{a}{h}$",
        "B": "Skid before overturning, because $\\mu_s < \\frac{a}{h}$",
        "C": "Neither skid nor overturn at any speed",
        "D": "Skid and overturn simultaneously"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="Calculate the stability ratio: $\\frac{a}{h} = \\frac{0.9}{1.5} = 0.6$. The coefficient of friction is $\\mu_s = 0.8$. Since $\\mu_s = 0.8 > 0.6 = \\frac{a}{h}$, the overturning speed is lower than the skidding speed ($v_{\\text{topple}} < v_{\\text{skid}}$). Therefore, the truck will overturn before it skids.",
    given="$h = 1.5\\text{ m}, a = 0.9\\text{ m}, \\mu_s = 0.8$.",
    formula="$\\frac{a}{h} = \\frac{0.9}{1.5} = 0.6$; $\\mu_s = 0.8 > 0.6 \\implies v_{\\text{topple}} < v_{\\text{skid}}$.",
    steps="1. Compute the overturning geometric ratio: $\\frac{a}{h} = \\frac{0.9\\text{ m}}{1.5\\text{ m}} = 0.6$.\n2. Compare with friction coefficient: $\\mu_s = 0.8$.\n3. Since $\\mu_s > \\frac{a}{h}$ ($0.8 > 0.6$), the friction force can hold the tires firmly even as the overturning torque flips the vehicle.\n4. Therefore, the inner wheels lift off and the truck topples over before the tires begin to slide.",
    tip="Tall vehicles (large $h$, small $a$) on high-friction pavement flip over rather than slide! This is why SUVs have higher rollover risk.",
    why_wrong="Option B makes an inequality error ($0.8 > 0.6$, not $<$). Option C and D violate mechanics."
))

# Q460: Medium
qs.append(make_lom_q(
    num=460,
    question="When a four-wheeled car turns to the right on a flat circular track, which wheels experience the greatest normal reaction from the ground?",
    options={
        "A": "The outer (left) wheels",
        "B": "The inner (right) wheels",
        "C": "All wheels experience equal normal force",
        "D": "The rear wheels only"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="When turning right, the centrifugal inertia torque about the contact patch tends to roll the car outward (to the left). To maintain roll equilibrium, the normal reaction shifts outward: $N_{\\text{outer}} = \\frac{mg}{2}\\left(1 + \\frac{v^2 h}{arg}\\right)$ and $N_{\\text{inner}} = \\frac{mg}{2}\\left(1 - \\frac{v^2 h}{arg}\\right)$. Therefore, the outer (left) wheels carry more load.",
    given="Car turning right on flat road.",
    formula="$N_{\\text{outer}} > N_{\\text{inner}}$.",
    steps="1. The center of curvature is to the right.\n2. In the car's frame, the centrifugal pseudo force acts outwards (to the left) at the center of mass (height $h$).\n3. This produces a clockwise overturning torque about the left wheels.\n4. To counteract this torque, the ground normal reaction increases on the outer (left) wheels and decreases on the inner (right) wheels.\n5. Hence, the outer wheels bear the greatest normal reaction.",
    tip="Always remember: In any turn, OUTER wheels carry MORE weight ($N_{\\text{outer}} > N_{\\text{inner}}$)!",
    why_wrong="Option B: Inner wheels lose contact at high speed. Option C is only true when traveling straight."
))

# Q461: Medium
qs.append(make_lom_q(
    num=461,
    question="A motorcyclist takes a turn of radius $30\\text{ m}$ at a speed of $17.32\\text{ m/s}$ (take $g = 10\\text{ m/s}^2$). At what angle $\\theta$ with the vertical must the motorcyclist lean?",
    options={
        "A": "$45^\\circ$",
        "B": "$30^\\circ$",
        "C": "$60^\\circ$",
        "D": "$15^\\circ$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="Use $\\tan\\theta = \\frac{v^2}{rg}$. Here $v = 17.32\\text{ m/s} = 10\\sqrt{3}\\text{ m/s}$, so $v^2 = 300\\text{ m}^2/\\text{s}^2$. $rg = 30 \\times 10 = 300\\text{ m}^2/\\text{s}^2$. $\\tan\\theta = \\frac{300}{300} = 1 \\implies \\theta = 45^\\circ$.",
    given="$r = 30\\text{ m}, v = 17.32\\text{ m/s} = 10\\sqrt{3}\\text{ m/s}, g = 10\\text{ m/s}^2$.",
    formula="$\\tan\\theta = \\frac{v^2}{rg} = \\frac{300}{300} = 1 \\implies \\theta = 45^\\circ$.",
    steps="1. Formula: $\\tan\\theta = \\frac{v^2}{rg}$.\n2. Note that $17.32 = 10\\sqrt{3}$.\n3. $v^2 = (10\\sqrt{3})^2 = 100 \\times 3 = 300$.\n4. $rg = 30 \\times 10 = 300$.\n5. $\\tan\\theta = \\frac{300}{300} = 1$.\n6. Therefore, $\\theta = 45^\\circ$.",
    tip="Recognize standard roots: $17.32 = 10\\sqrt{3}$! Squaring it gives exactly 300.",
    why_wrong="Option B ($30^\\circ$) requires $v^2 = 300/\\sqrt{3} \\approx 173$. Option C ($60^\\circ$) requires $v^2 = 300\\sqrt{3} \\approx 520$."
))

# Q462: Medium
qs.append(make_lom_q(
    num=462,
    question="A car is moving with speed $v$ on an unbanked circular curve of radius $r$. If the speed of the car is doubled while the radius is halved, the centripetal force required to keep the car on track increases by a factor of:",
    options={
        "A": "8",
        "B": "4",
        "C": "2",
        "D": "16"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="Centripetal force is $F = \\frac{mv^2}{r}$. If $v' = 2v$ and $r' = r/2$, then $F' = \\frac{m(2v)^2}{r/2} = \\frac{4mv^2}{r/2} = 8 \\frac{mv^2}{r} = 8F$.",
    given="$v' = 2v$, $r' = r/2$.",
    formula="$F' = \\frac{m(2v)^2}{r/2} = 8 \\frac{mv^2}{r} = 8F$.",
    steps="1. Original centripetal force: $F = \\frac{mv^2}{r}$.\n2. New speed is $2v$, so numerator increases by $2^2 = 4$.\n3. New radius is $r/2$, so denominator is halved, multiplying the fraction by 2.\n4. Combined change: $F' = \\frac{m(4v^2)}{r/2} = 8 \\left(\\frac{mv^2}{r}\\right) = 8F$.\n5. Therefore, the required centripetal force increases by a factor of 8.",
    tip="Centripetal force scales as $v^2 / r$! Doubling speed $\\rightarrow \\times 4$; Halving radius $\\rightarrow \\times 2$; Total $\\rightarrow \\times 8$.",
    why_wrong="Option B (4) forgets the halving of radius. Option C is 2. Option D is 16."
))

# Q463: Medium
qs.append(make_lom_q(
    num=463,
    question="A particle of mass $m$ is attached to a string of length $L$ and rotated in a horizontal circle at constant angular speed $\\omega$ on a smooth table. What is the tension in the string?",
    options={
        "A": "$m \\omega^2 L$",
        "B": "$\\frac{m \\omega^2}{L}$",
        "C": "$\\frac{m \\omega}{L}$",
        "D": "$m \\omega L$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="On a smooth horizontal table, tension provides the centripetal force: $T = m a_c = m \\omega^2 L$.",
    given="Mass $m$, string length $L$, angular velocity $\\omega$, smooth table.",
    formula="$T = m \\omega^2 L$.",
    steps="1. In circular motion, centripetal acceleration is $a_c = \\omega^2 r = \\omega^2 L$.\n2. On a smooth table, the only horizontal force is the string tension $T$.\n3. Applying Newton's second law: $T = m a_c = m \\omega^2 L$.",
    tip="Centripetal force formulas: $F = \\frac{mv^2}{r} = m\\omega^2 r$! Both are equivalent via $v = \\omega r$.",
    why_wrong="Option B, C, and D have incorrect dimensions."
))

# Q464: Medium
qs.append(make_lom_q(
    num=464,
    question="Two bodies of masses $m_1$ and $m_2$ are moving in concentric circles of radii $r_1$ and $r_2$ respectively with the same time period $T$. What is the ratio of their centripetal accelerations $\\frac{a_1}{a_2}$?",
    options={
        "A": "$\\frac{r_1}{r_2}$",
        "B": "$\\frac{r_2}{r_1}$",
        "C": "$\\frac{r_1^2}{r_2^2}$",
        "D": "1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="Same time period means identical angular velocity $\\omega = \\frac{2\\pi}{T}$. Since centripetal acceleration is $a = \\omega^2 r$, with $\\omega$ constant, $a \\propto r$. Therefore, $\\frac{a_1}{a_2} = \\frac{r_1}{r_2}$.",
    given="Same time period $T$, radii $r_1, r_2$.",
    formula="$a = \\omega^2 r$; $\\omega_1 = \\omega_2 \\implies \\frac{a_1}{a_2} = \\frac{r_1}{r_2}$.",
    steps="1. Time period is $T = \\frac{2\\pi}{\\omega}$.\n2. Since $T$ is the same for both, their angular velocities are equal: $\\omega_1 = \\omega_2 = \\omega$.\n3. Centripetal acceleration of mass 1: $a_1 = \\omega^2 r_1$.\n4. Centripetal acceleration of mass 2: $a_2 = \\omega^2 r_2$.\n5. Taking the ratio: $\\frac{a_1}{a_2} = \\frac{\\omega^2 r_1}{\\omega^2 r_2} = \\frac{r_1}{r_2}$.",
    tip="When angular speed $\\omega$ or time period $T$ is constant: $a \\propto r$! (When linear speed $v$ is constant: $a \\propto 1/r$).",
    why_wrong="Option B inverts the ratio. Option C squares the radii. Option D assumes equal accelerations."
))

# Q465: Medium
qs.append(make_lom_q(
    num=465,
    question="In the previous setup, if both bodies had the SAME linear speed $v$ instead of the same period, the ratio of their centripetal accelerations $\\frac{a_1}{a_2}$ would be:",
    options={
        "A": "$\\frac{r_2}{r_1}$",
        "B": "$\\frac{r_1}{r_2}$",
        "C": "$\\frac{r_1^2}{r_2^2}$",
        "D": "1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="For constant linear speed $v$, centripetal acceleration is $a = \\frac{v^2}{r}$. Since $v$ is constant, $a \\propto \\frac{1}{r}$. Therefore, $\\frac{a_1}{a_2} = \\frac{r_2}{r_1}$.",
    given="Same linear speed $v$, radii $r_1, r_2$.",
    formula="$a = \\frac{v^2}{r} \\implies \\frac{a_1}{a_2} = \\frac{r_2}{r_1}$.",
    steps="1. Acceleration formula in terms of linear speed: $a = \\frac{v^2}{r}$.\n2. Given $v_1 = v_2 = v$.\n3. $a_1 = \\frac{v^2}{r_1}$ and $a_2 = \\frac{v^2}{r_2}$.\n4. Taking the ratio: $\\frac{a_1}{a_2} = \\frac{v^2/r_1}{v^2/r_2} = \\frac{r_2}{r_1}$.",
    tip="Compare carefully:\n- Constant $\\omega \\implies a \\propto r$\n- Constant $v \\implies a \\propto 1/r$",
    why_wrong="Option B is the ratio for constant $\\omega$. Option C and D are incorrect."
))

# Q466: Hard
qs.append(make_lom_q(
    num=466,
    question="A small block of mass $m$ rests on the rough horizontal floor of a vehicle. The vehicle moves in a circle of radius $R$ with speed $v$. If the block is on the verge of sliding outwards, the coefficient of static friction $\\mu_s$ must satisfy:",
    options={
        "A": "$\\mu_s = \\frac{v^2}{Rg}$",
        "B": "$\\mu_s = \\frac{Rg}{v^2}$",
        "C": "$\\mu_s = \\frac{v}{Rg}$",
        "D": "$\\mu_s = \\frac{v^2}{g}$"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Maximum speed and friction in circular motion",
    concept="In the vehicle frame, centrifugal pseudo force is $m v^2/R$. Limiting static friction balances it: $f_{\\text{lim}} = \\mu_s mg$. At verge of sliding: $\\mu_s mg = \\frac{mv^2}{R} \\implies \\mu_s = \\frac{v^2}{Rg}$.",
    given="Circular radius $R$, speed $v$, block on horizontal vehicle floor.",
    formula="$\\mu_s = \\frac{v^2}{Rg}$.",
    steps="1. The required centripetal acceleration is $a_c = \\frac{v^2}{R}$.\n2. The only horizontal force on the block is static friction from the floor: $f_s = m a_c = \\frac{mv^2}{R}$.\n3. The maximum static friction available is $f_{\\text{lim}} = \\mu_s N = \\mu_s mg$.\n4. At the verge of slipping: $f_s = f_{\\text{lim}} \\implies \\frac{mv^2}{R} = \\mu_s mg$.\n5. Cancelling $m$: $\\mu_s = \\frac{v^2}{Rg}$.",
    tip="Friction coefficient at verge of circular slip: $\\mu_s = \\frac{v^2}{Rg}$!",
    why_wrong="Option B inverts the ratio. Option C misses the square on $v$. Option D misses the radius $R$."
))

# Q467: Hard
qs.append(make_lom_q(
    num=467,
    question="A heavy uniform ring of mass $m$ and radius $R$ rotates in a horizontal plane about its central vertical axis with constant angular speed $\\omega$. The tension developed in the ring due to its rotation is:",
    options={
        "A": "$m \\omega^2 R / (2\\pi)$",
        "B": "$m \\omega^2 R$",
        "C": "$m \\omega^2 R / \\pi$",
        "D": "$2\\pi m \\omega^2 R$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum speed and friction in circular motion",
    concept="Consider a small element of the ring subtending angle $d\\theta$ at the center. Its mass is $dm = \\frac{m}{2\\pi} d\\theta$. The inward radial force provided by the tensions $T$ at each end is $2T\\sin(d\\theta/2) \\approx T d\\theta$. This provides the centripetal force: $T d\\theta = (dm) \\omega^2 R = \\left(\\frac{m}{2\\pi} d\\theta\\right) \\omega^2 R \\implies T = \\frac{m \\omega^2 R}{2\\pi}$.",
    given="Uniform ring mass $m$, radius $R$, angular speed $\\omega$.",
    formula="$T = \\frac{m \\omega^2 R}{2\\pi} = \\mu v^2$ where $\\mu = \\frac{m}{2\\pi R}$ is linear mass density and $v = \\omega R$.",
    steps="1. Total mass of the ring is $m$ and circumference is $2\\pi R$.\n2. Linear mass density: $\\lambda = \\frac{m}{2\\pi R}$.\n3. Consider an infinitesimal arc element subtending angle $d\\theta$:\n   - Mass of element: $dm = \\lambda (R d\\theta) = \\frac{m}{2\\pi} d\\theta$.\n   - It moves in a circle of radius $R$ with centripetal acceleration $a_c = \\omega^2 R$.\n4. Tensions $T$ act tangentially at both ends of the element.\n5. The radial inward component of these tensions is:\n   $F_{\\text{radial}} = 2 T \\sin\\left(\\frac{d\\theta}{2}\\right) \\approx 2 T \\left(\\frac{d\\theta}{2}\\right) = T d\\theta$.\n6. Equating to centripetal force: $T d\\theta = (dm) \\omega^2 R = \\left(\\frac{m}{2\\pi} d\\theta\\right) \\omega^2 R$.\n7. Cancelling $d\\theta$: $T = \\frac{m \\omega^2 R}{2\\pi}$.",
    tip="Tension in rotating ring: $T = \\frac{m \\omega^2 R}{2\\pi} = \\lambda v^2$. Very famous advanced NEET question!",
    why_wrong="Option B misses the $2\\pi$ geometric integration factor. Option C has $\\pi$ instead of $2\\pi$. Option D multiplies by $2\\pi$."
))

# Q468: Hard
qs.append(make_lom_q(
    num=468,
    question="In the rotating ring problem, if $v = \\omega R$ is the linear speed of the ring, the tension in the ring expressed in terms of linear mass density $\\mu = \\frac{m}{2\\pi R}$ and speed $v$ is:",
    options={
        "A": "$\\mu v^2$",
        "B": "$\\frac{1}{2}\\mu v^2$",
        "C": "$2\\mu v^2$",
        "D": "$\\frac{\\mu v^2}{2\\pi}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum speed and friction in circular motion",
    concept="Substitute $\\omega R = v$ and $\\frac{m}{2\\pi R} = \\mu$ into $T = \\frac{m\\omega^2 R}{2\\pi}$: $T = \\left(\\frac{m}{2\\pi R}\\right) (\\omega R)^2 = \\mu v^2$.",
    given="$v = \\omega R$, $\\mu = \\frac{m}{2\\pi R}$.",
    formula="$T = \\mu v^2$.",
    steps="1. From the previous derivation: $T = \\frac{m \\omega^2 R}{2\\pi}$.\n2. Multiply numerator and denominator by $R$:\n   $T = \\left(\\frac{m}{2\\pi R}\\right) (\\omega^2 R^2) = \\mu (\\omega R)^2$.\n3. Substitute linear velocity $v = \\omega R$:\n   $T = \\mu v^2$.",
    tip="Remarkable Insight: The tension in a rotating hoop is $T = \\mu v^2$. Notice that the wave speed on a string is $v_{\\text{wave}} = \\sqrt{T/\\mu} = v$! A transverse pulse moves at the same speed as the hoop.",
    why_wrong="Option B misses the factor of 1. Option C and D have incorrect coefficients."
))

# Q469: Hard
qs.append(make_lom_q(
    num=469,
    question="A particle of mass $m$ moves along a horizontal circle of radius $r$ on the rough inner surface of an inverted cone of half-angle $\\alpha$. If the coefficient of static friction is $\\mu_s$, what is the maximum angular speed $\\omega_{\\text{max}}$ for which the particle does not slide up the surface?",
    options={
        "A": "$\\sqrt{\\frac{g}{r} \\left(\\frac{\\cos\\alpha + \\mu_s\\sin\\alpha}{\\sin\\alpha - \\mu_s\\cos\\alpha}\\right)}$",
        "B": "$\\sqrt{\\frac{g}{r} \\tan\\alpha}$",
        "C": "$\\sqrt{\\frac{g}{r} \\cot\\alpha}$",
        "D": "$\\sqrt{\\frac{g}{r} \\left(\\frac{\\sin\\alpha - \\mu_s\\cos\\alpha}{\\cos\\alpha + \\mu_s\\sin\\alpha}\\right)}$"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Maximum speed and friction in circular motion",
    concept="In an inverted cone of semi-vertical angle $\\alpha$, the inclined surface makes angle $\\theta = 90^\\circ - \\alpha$ with the horizontal, meaning the normal makes angle $\\alpha$ with the horizontal. At maximum angular speed, friction acts down the slant height of the cone. Force balance gives $\\omega_{\\text{max}} = \\sqrt{\\frac{g}{r} \\left(\\frac{\\cos\\alpha + \\mu_s\\sin\\alpha}{\\sin\\alpha - \\mu_s\\cos\\alpha}\\right)}$.",
    given="Inverted cone, half-angle $\\alpha$, radius $r$, coefficient $\\mu_s$.",
    formula="$\\omega_{\\text{max}} = \\sqrt{\\frac{g}{r} \\left(\\frac{\\cos\\alpha + \\mu_s\\sin\\alpha}{\\sin\\alpha - \\mu_s\\cos\\alpha}\\right)}$.",
    steps="1. Slant surface of cone makes angle $(90^\\circ - \\alpha)$ with horizontal.\n2. Normal force $N$ points inward and upward, making angle $\\alpha$ with horizontal.\n3. At maximum speed, the particle tends to slide UP the slant surface, so limiting friction $f_L = \\mu_s N$ acts DOWN the slant surface.\n4. Vertical equilibrium:\n   $N\\sin\\alpha - f_L\\cos\\alpha = mg \\implies N(\\sin\\alpha - \\mu_s\\cos\\alpha) = mg$.\n5. Horizontal centripetal force:\n   $N\\cos\\alpha + f_L\\sin\\alpha = m\\omega^2 r \\implies N(\\cos\\alpha + \\mu_s\\sin\\alpha) = m\\omega^2 r$.\n6. Dividing equation 5 by equation 4:\n   $\\frac{\\cos\\alpha + \\mu_s\\sin\\alpha}{\\sin\\alpha - \\mu_s\\cos\\alpha} = \\frac{\\omega^2 r}{g}$.\n7. Solving for $\\omega$:\n   $\\omega_{\\text{max}} = \\sqrt{\\frac{g}{r} \\left(\\frac{\\cos\\alpha + \\mu_s\\sin\\alpha}{\\sin\\alpha - \\mu_s\\cos\\alpha}\\right)}$.",
    tip="For zero friction ($\\mu_s = 0$), $\\omega_0 = \\sqrt{\\frac{g}{r}\\cot\\alpha}$! Matches standard inverted cone result.",
    why_wrong="Option B and C assume frictionless cone. Option D is the minimum angular velocity to prevent sliding down."
))

print(f"Topics 28 & 29 done: {len(qs)} questions.")
