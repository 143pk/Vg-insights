import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 22: Conceptual and numerical mixed problems (Q476 to Q500, 25 questions)
# Required Difficulties: 2 Easy, 15 Medium, 8 Hard
# Total = 25 questions
# ==============================================================================

# Q476 - Easy
qs.append(make_motion_q(
    num=476,
    question="Which of the following physical quantities can NEVER be negative in one-dimensional motion?",
    options={
        "A": "Total distance traveled",
        "B": "Instantaneous acceleration",
        "C": "Net displacement",
        "D": "Average velocity"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Conceptual and numerical mixed problems",
    concept="Distance is the total path length traversed by an object and is fundamentally a scalar quantity with non-negative values ($s \\geq 0$). Displacement, velocity, and acceleration are vector quantities along a 1D line and can be positive, negative, or zero.",
    given="Physical quantities in one-dimensional motion: distance, acceleration, displacement, velocity.",
    formula="Distance $s = \\int |v(t)| dt \\geq 0$",
    steps=(
        "1. In 1D kinematics, vectors are represented with algebraic signs (+ or -) denoting direction along the axis.\n"
        "2. Displacement, instantaneous acceleration, and average velocity can all be negative if directed along the -x axis.\n"
        "3. Distance represents the scalar length of the actual path traversed and can never decrease or take negative values.\n"
        "4. Therefore, total distance traveled is strictly non-negative."
    ),
    tip="Distance is scalar and cumulative (never negative); displacement is a directed vector (can be negative).",
    why_wrong="Displacement and velocity are vectors that have negative values whenever motion is in the negative direction."
))

# Q477 - Easy
qs.append(make_motion_q(
    num=477,
    question="Can an object have a constant speed along a straight line while having a non-zero acceleration?",
    options={
        "A": "No, in straight-line motion, constant speed implies zero acceleration",
        "B": "Yes, if the direction of motion is constantly reversing",
        "C": "Yes, if the object is in free fall",
        "D": "Yes, if the object is experiencing uniform friction"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Conceptual and numerical mixed problems",
    concept="In straight-line (1D) motion, velocity vector direction is fixed (or reverses only when speed drops to zero). If speed is constant along a line, velocity cannot change in magnitude or direction, meaning acceleration must be zero.",
    given="Straight-line motion with constant speed.",
    formula="In 1D: $\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d(\\pm v\\hat{i})}{dt} = 0$",
    steps=(
        "1. Acceleration is the time rate of change of velocity: a = dv/dt.\n"
        "2. In one-dimensional motion, velocity consists of speed and a sign (+ or -).\n"
        "3. If speed is constant and the particle moves in a straight line without reversing, velocity is constant.\n"
        "4. Hence dv/dt = 0, so acceleration must be zero."
    ),
    tip="In 2D motion (like uniform circular motion), constant speed can have acceleration. But in 1D straight-line motion, constant speed always means zero acceleration!",
    why_wrong="Option B is impossible because direction reversal in 1D requires speed to drop to zero first."
))

# Q478 - Medium
qs.append(make_motion_q(
    num=478,
    question="A body moves with uniform acceleration along a straight line. If the distances covered in the 3rd second and 5th second are 12 m and 20 m respectively, what was its initial velocity?",
    options={
        "A": "2 m/s",
        "B": "4 m/s",
        "C": "6 m/s",
        "D": "1 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Distance traveled in the nth second is given by $s_n = u + \\frac{a}{2}(2n - 1)$.",
    given="s₃ = 12 m, s₅ = 20 m.",
    formula="s_n = u + \\frac{a}{2}(2n - 1)",
    steps=(
        "1. For n = 3: s₃ = u + (a/2)(2(3) - 1) = u + 2.5 a = 12.\n"
        "2. For n = 5: s₅ = u + (a/2)(2(5) - 1) = u + 4.5 a = 20.\n"
        "3. Subtract equation (1) from (2): (u + 4.5 a) - (u + 2.5 a) = 20 - 12 => 2 a = 8 => a = 4 m/s².\n"
        "4. Substitute a = 4 m/s² into equation (1): u + 2.5(4) = 12 => u + 10 = 12 => u = 2 m/s."
    ),
    tip="Subtracting successive nth second equations eliminates u instantly: $s_n - s_{n-k} = k \\cdot a$. Here $s_5 - s_3 = 2a = 8 \\implies a = 4$.",
    why_wrong="4 m/s is the acceleration, not the initial velocity."
))

# Q479 - Medium
qs.append(make_motion_q(
    num=479,
    question="A particle starts from rest with acceleration a = 2 m/s². After reaching a certain speed, it immediately decelerates at β = 4 m/s² to come to rest. If the total distance covered is 300 m, what is the maximum speed attained by the particle?",
    options={
        "A": "20√2 m/s",
        "B": "20 m/s",
        "C": "20√3 m/s",
        "D": "40 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="When a body starts from rest, accelerates at α, and then decelerates at β to rest, total distance is $s = \\frac{v_{\\max}^2}{2} \\left(\\frac{1}{\\alpha} + \\frac{1}{\\beta}\\right)$.",
    given="α = 2 m/s², β = 4 m/s², total distance s = 300 m.",
    formula="s = \\frac{v_{\\max}^2}{2}\\left(\\frac{\\alpha + \\beta}{\\alpha\\beta}\\right)",
    steps=(
        "1. Distance during acceleration: s₁ = v_max² / (2α) = v_max² / 4.\n"
        "2. Distance during deceleration: s₂ = v_max² / (2β) = v_max² / 8.\n"
        "3. Total distance: s = s₁ + s₂ = v_max² (1/4 + 1/8) = v_max² (3/8) = 300 m.\n"
        "4. v_max² = 300 × 8 / 3 = 100 × 8 = 800.\n"
        "5. v_max = √800 = √(400 × 2) = 20√2 m/s."
    ),
    tip="Quick NEET formula: $v_{\\max} = \\sqrt{\\frac{2 s \\alpha \\beta}{\\alpha + \\beta}} = \\sqrt{\\frac{2 \\times 300 \\times 8}{6}} = \\sqrt{800} = 20\\sqrt{2}\\text{ m/s}$.",
    why_wrong="20 m/s misses the factor of 2 under the square root."
))

# Q480 - Medium
qs.append(make_motion_q(
    num=480,
    question="The velocity-displacement equation of a particle moving along a straight line is given by v = √(49 - 14x). What is the acceleration of the particle?",
    options={
        "A": "-7 m/s²",
        "B": "-14 m/s²",
        "C": "+7 m/s²",
        "D": "-3.5 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Acceleration in terms of velocity and displacement is given by $a = v \\frac{dv}{dx} = \\frac{1}{2} \\frac{d(v^2)}{dx}$.",
    given="v = √(49 - 14x) => v² = 49 - 14x.",
    formula="a = \\frac{1}{2}\\frac{d(v^2)}{dx}",
    steps=(
        "1. Square both sides: v² = 49 - 14x.\n"
        "2. Compare with standard third equation of motion v² = u² + 2as.\n"
        "3. Here u² = 49 and 2a = -14.\n"
        "4. Therefore, acceleration a = -14 / 2 = -7 m/s²."
    ),
    tip="Whenever you see $v^2$ as a linear function of $x$ ($v^2 = A + Bx$), acceleration is simply $B / 2$!",
    why_wrong="-14 m/s² forgets to divide the coefficient by 2."
))

# Q481 - Medium
qs.append(make_motion_q(
    num=481,
    question="A bullet fired into a wooden block loses 20% of its velocity after penetrating 9 cm. How much further will the bullet penetrate before coming to rest, assuming the block offers constant resistance?",
    options={
        "A": "16 cm",
        "B": "7 cm",
        "C": "9 cm",
        "D": "12 cm"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Constant resistance implies uniform retardation a. Use $v^2 - u^2 = 2as$.",
    given="Initial speed u, velocity after x₁ = 9 cm is v₁ = 0.8 u (since it loses 20%).",
    formula="v² = u² + 2ax",
    steps=(
        "1. After 9 cm: (0.8 u)² = u² - 2a(9) => 0.64 u² = u² - 18a => 18a = 0.36 u² => 2a = 0.04 u².\n"
        "2. Total penetration distance x_total to rest (v = 0): 0 = u² - 2a(x_total) => x_total = u² / (2a).\n"
        "3. x_total = u² / (0.04 u²) = 1 / 0.04 = 25 cm.\n"
        "4. Further penetration distance = x_total - x₁ = 25 cm - 9 cm = 16 cm."
    ),
    tip="Always distinguish between total penetration depth ($25\\text{ cm}$) and further penetration depth ($25 - 9 = 16\\text{ cm}$).",
    why_wrong="25 cm is the total penetration distance from the front face, not further distance."
))

# Q482 - Medium
qs.append(make_motion_q(
    num=482,
    question="A body released from height H takes time T to reach the ground. What is the position of the body at time t = T / 2 from the ground?",
    options={
        "A": "3H / 4 above the ground",
        "B": "H / 4 above the ground",
        "C": "H / 2 above the ground",
        "D": "H / √2 above the ground"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Distance fallen from rest is proportional to $t^2$. In half the total time, the body falls one-fourth of the total height.",
    given="Total height H, total time T, time elapsed t = T / 2.",
    formula="h_fallen = (1/2)gt²; Height from ground = H - h_fallen",
    steps=(
        "1. Total height H = (1/2) g T².\n"
        "2. Distance fallen in time t = T/2: h_fallen = (1/2) g (T/2)² = (1/4) [(1/2) g T²] = H / 4.\n"
        "3. Height above the ground = H - h_fallen = H - H/4 = 3H / 4."
    ),
    tip="Be careful with wording: 'distance fallen' is $H/4$, but 'height above the ground' is $3H/4$!",
    why_wrong="H / 4 is the distance fallen from the release point, not the height above ground."
))

# Q483 - Medium
qs.append(make_motion_q(
    num=483,
    question="A ball is dropped from a balloon ascending with a constant velocity of 12 m/s when the balloon is at a height of 65 m above the ground. Taking g = 10 m/s², how long does the ball take to reach the ground?",
    options={
        "A": "5 s",
        "B": "4 s",
        "C": "3 s",
        "D": "6 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="The ball inherits the instantaneous velocity of the ascending balloon at the instant of release ($u = +12\\text{ m/s}$ upwards).",
    given="u = +12 m/s (upward), displacement s = -65 m (downward to ground), a = -10 m/s².",
    formula="s = ut + (1/2)at²",
    steps=(
        "1. Sign convention: Upward positive (+), downward negative (-).\n"
        "2. Displacement to ground s = -65 m.\n"
        "3. Equation: -65 = 12 t - (1/2)(10) t² = 12 t - 5 t².\n"
        "4. Rearrange: 5 t² - 12 t - 65 = 0.\n"
        "5. Factorize: (5 t - 25)(t + ...) => 5 t² - 25 t + 13 t - 65 = 5t(t - 5) + 13(t - 5) = (t - 5)(5t + 13) = 0.\n"
        "6. Since t > 0, t = 5 s."
    ),
    tip="Always remember that a dropped object inherits the velocity of its carrier, NOT zero!",
    why_wrong="Assuming u = 0 gives t = √(2h/g) = √13 ≈ 3.6 s, ignoring the initial upward velocity."
))

# Q484 - Medium
qs.append(make_motion_q(
    num=484,
    question="Water drops fall at regular intervals from a tap 5 m above the ground. The third drop is leaving the tap at the exact instant the first drop hits the ground. What is the height of the second drop from the ground at that instant? (Take g = 10 m/s²)",
    options={
        "A": "3.75 m",
        "B": "1.25 m",
        "C": "2.50 m",
        "D": "4.00 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="For drops falling at equal time intervals $\\Delta t$, the time elapsed for drop 1 is $2\\Delta t$ and for drop 2 is $\\Delta t$.",
    given="Tap height H = 5 m, g = 10 m/s², drop 3 leaving (t = 0), drop 1 at ground.",
    formula="H = (1/2) g (2Δt)²; h₂ = (1/2) g (Δt)²",
    steps=(
        "1. Time for drop 1 to hit ground: 5 = (1/2)(10) T² = 5 T² => T = 1 s.\n"
        "2. Since drop 3 is leaving, two equal intervals have passed: 2 Δt = 1 s => Δt = 0.5 s.\n"
        "3. Drop 2 has been falling for time t = Δt = 0.5 s.\n"
        "4. Distance fallen by drop 2: y = (1/2)(10)(0.5)² = 5 × 0.25 = 1.25 m from tap.\n"
        "5. Height of drop 2 above ground = 5 - 1.25 = 3.75 m."
    ),
    tip="Galileo's ratio of distances in successive equal time intervals is 1 : 3. The lower section is 3 parts and upper is 1 part: height above ground = 3/4 of 5 m = 3.75 m.",
    why_wrong="1.25 m is the distance fallen from the tap, not height above ground."
))

# Q485 - Medium
qs.append(make_motion_q(
    num=485,
    question="A stone dropped from the top of a tower traverses 24.5 m in the last second of its journey. Taking g = 9.8 m/s², what is the height of the tower?",
    options={
        "A": "44.1 m",
        "B": "78.4 m",
        "C": "39.2 m",
        "D": "49.0 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Distance covered in the nth second from rest: $s_n = \\frac{g}{2}(2n - 1)$.",
    given="s_n = 24.5 m, g = 9.8 m/s².",
    formula="s_n = \\frac{g}{2}(2n - 1); H = \\frac{1}{2} g n²",
    steps=(
        "1. 24.5 = (9.8 / 2)(2n - 1) = 4.9 (2n - 1).\n"
        "2. 2n - 1 = 24.5 / 4.9 = 5 => 2n = 6 => n = 3 s.\n"
        "3. Total time of fall is T = 3 s.\n"
        "4. Total height of the tower: H = (1/2) g T² = (1/2)(9.8)(3)² = 4.9 × 9 = 44.1 m."
    ),
    tip="When $g = 9.8\\text{ m/s}^2$, distances in successive seconds are $4.9\\text{ m}, 14.7\\text{ m}, 24.5\\text{ m}, 34.3\\text{ m}$. Notice $24.5\\text{ m}$ is the 3rd second!",
    why_wrong="78.4 m corresponds to a fall of 4 seconds."
))

# Q486 - Medium
qs.append(make_motion_q(
    num=486,
    question="A body is thrown vertically upward with speed u. It passes a certain point P at height h at times t₁ and t₂ during its flight. What is the initial velocity u?",
    options={
        "A": "g (t₁ + t₂) / 2",
        "B": "g √(t₁ t₂)",
        "C": "g (t₂ - t₁)",
        "D": "2g / (t₁ + t₂)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="The equation of motion $h = ut - \\frac{1}{2}gt^2$ is a quadratic in $t$ whose roots are $t_1$ and $t_2$. The sum of roots is $t_1 + t_2 = \\frac{2u}{g}$.",
    given="Height h reached at times t₁ (ascent) and t₂ (descent).",
    formula="t₁ + t₂ = \\frac{2u}{g} => u = \\frac{g(t₁ + t₂)}{2}",
    steps=(
        "1. Set up the vertical position equation: h = ut - (1/2) g t².\n"
        "2. Rearrange as standard quadratic in t: (1/2) g t² - u t + h = 0 => g t² - 2u t + 2h = 0.\n"
        "3. The roots of this equation are the two times t₁ and t₂.\n"
        "4. By Vieta's formulas, sum of roots: t₁ + t₂ = -(-2u) / g = 2u / g.\n"
        "5. Solving for u gives: u = g(t₁ + t₂) / 2."
    ),
    tip="Useful NEET relations: (1) $u = \\frac{g(t_1 + t_2)}{2}$, (2) $h = \\frac{1}{2}gt_1 t_2$.",
    why_wrong="g √(t₁ t₂) is related to velocity at height h, not initial launch speed u."
))

# Q487 - Medium
qs.append(make_motion_q(
    num=487,
    question="In the previous question, what is the height h of the point P in terms of t₁, t₂, and g?",
    options={
        "A": "(1/2) g t₁ t₂",
        "B": "g (t₁ + t₂)² / 8",
        "C": "g t₁ t₂",
        "D": "(1/4) g t₁ t₂"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Product of roots of the quadratic $g t^2 - 2u t + 2h = 0$ is $t_1 t_2 = \\frac{2h}{g}$.",
    given="Roots t₁ and t₂ of equation g t² - 2u t + 2h = 0.",
    formula="t₁ t₂ = 2h / g => h = (1/2) g t₁ t₂",
    steps=(
        "1. From the quadratic equation for time at height h: g t² - 2u t + 2h = 0.\n"
        "2. The product of the roots is: t₁ t₂ = constant term / leading coefficient = 2h / g.\n"
        "3. Multiplying both sides by g/2 yields: h = (1/2) g t₁ t₂."
    ),
    tip="Direct memory trick for NEET: $h = \\frac{1}{2} g t_1 t_2$.",
    why_wrong="g t₁ t₂ misses the factor of 1/2 from the quadratic equation."
))

# Q488 - Medium
qs.append(make_motion_q(
    num=488,
    question="A particle moves along a straight line with velocity v = k √x, where k is a positive constant and x is the position. The acceleration of the particle is:",
    options={
        "A": "k² / 2, independent of position",
        "B": "k² √x",
        "C": "k / (2√x)",
        "D": "k² x"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Use $a = v \\frac{dv}{dx}$ to determine acceleration.",
    given="v = k √x = k x^{1/2}.",
    formula="a = v \\frac{dv}{dx}",
    steps=(
        "1. Differentiate v with respect to x: dv/dx = k (1 / (2√x)) = k / (2√x).\n"
        "2. Multiply by velocity v: a = v (dv/dx) = (k √x) × (k / (2√x)).\n"
        "3. √x cancels out: a = k² / 2.\n"
        "4. Since k is a constant, acceleration a is constant and independent of x."
    ),
    tip="If $v \\propto x^{1/2}$, acceleration is constant! This is the hallmark of motion under uniform acceleration starting from rest ($v^2 = 2as \\implies v = \\sqrt{2a} \\sqrt{s}$).",
    why_wrong="k / (2√x) is dv/dx, not acceleration v (dv/dx)."
))

# Q489 - Medium
qs.append(make_motion_q(
    num=489,
    question="The displacement of a particle is given by x = (t - 2)². What is the total distance traveled by the particle in the first 4 seconds?",
    options={
        "A": "8 m",
        "B": "4 m",
        "C": "0 m",
        "D": "16 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Velocity is $v = dx/dt = 2(t - 2)$. The particle reverses direction at $t = 2\\text{ s}$. Distance is the sum of magnitudes of displacements.",
    given="x(t) = (t - 2)², interval t = 0 to 4 s.",
    formula="v = 2(t - 2) = 0 => t = 2 s. Distance = |x(2) - x(0)| + |x(4) - x(2)|",
    steps=(
        "1. At t = 0: x(0) = (0 - 2)² = 4 m.\n"
        "2. Turnaround point: v(t) = 2(t - 2) = 0 => t = 2 s. Position x(2) = (2 - 2)² = 0 m.\n"
        "3. At t = 4: x(4) = (4 - 2)² = 4 m.\n"
        "4. Distance in [0, 2]: |0 - 4| = 4 m.\n"
        "5. Distance in [2, 4]: |4 - 0| = 4 m.\n"
        "6. Total distance = 4 + 4 = 8 m."
    ),
    tip="Net displacement is $x(4) - x(0) = 4 - 4 = 0\\text{ m}$, but distance is $8\\text{ m}$.",
    why_wrong="0 m is the net displacement, not the distance."
))

# Q490 - Medium
qs.append(make_motion_q(
    num=490,
    question="A body travels 200 cm in the first 2 s and 220 cm in the next 4 s with constant acceleration. What is the velocity of the body at the end of the 7th second from the start?",
    options={
        "A": "10 cm/s",
        "B": "15 cm/s",
        "C": "20 cm/s",
        "D": "5 cm/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Use equations of motion for multi-interval data: $s = ut + \\frac{1}{2}at^2$.",
    given="s₁ = 200 cm in t₁ = 2 s; s₂ = 220 cm in next 4 s (total s = 420 cm in t = 6 s).",
    formula="s = ut + (1/2)at²; v = u + at",
    steps=(
        "1. For first 2 s: 200 = u(2) + (1/2) a (2)² = 2u + 2a => u + a = 100  --- (Eq 1).\n"
        "2. For total 6 s: total distance = 200 + 220 = 420 cm.\n"
        "420 = u(6) + (1/2) a (6)² = 6u + 18a => u + 3a = 70  --- (Eq 2).\n"
        "3. Subtract (Eq 1) from (Eq 2): 2a = -30 => a = -15 cm/s².\n"
        "4. Substitute into (Eq 1): u + (-15) = 100 => u = 115 cm/s.\n"
        "5. Velocity at t = 7 s: v = u + at = 115 + (-15)(7) = 115 - 105 = 10 cm/s."
    ),
    tip="Always measure time and total distance from $t = 0$ rather than setting a new origin to avoid algebraic pitfalls.",
    why_wrong="15 cm/s is the magnitude of acceleration, not the velocity."
))

# Q491 - Medium
qs.append(make_motion_q(
    num=491,
    question="A car accelerates from rest at a constant rate a₁ for some time, after which it decelerates at a constant rate a₂ to come to rest. If the total time elapsed is t, the maximum velocity acquired by the car is:",
    options={
        "A": "(a₁ a₂ / (a₁ + a₂)) t",
        "B": "((a₁ + a₂) / (a₁ a₂)) t",
        "C": "(a₁² + a₂²) t / 2",
        "D": "√(a₁ a₂) t"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Total time $t = t_1 + t_2 = \\frac{v_{\\max}}{a_1} + \\frac{v_{\\max}}{a_2} = v_{\\max}\\left(\\frac{1}{a_1} + \\frac{1}{a_2}\\right)$.",
    given="Acceleration a₁, deceleration a₂, total time t.",
    formula="t = v_max (1/a₁ + 1/a₂)",
    steps=(
        "1. Acceleration stage: v_max = a₁ t₁ => t₁ = v_max / a₁.\n"
        "2. Deceleration stage: 0 = v_max - a₂ t₂ => t₂ = v_max / a₂.\n"
        "3. Total time: t = t₁ + t₂ = v_max (1/a₁ + 1/a₂) = v_max (a₁ + a₂) / (a₁ a₂).\n"
        "4. Solving for v_max gives: v_max = (a₁ a₂ / (a₁ + a₂)) t."
    ),
    tip="This expression $(a_1 a_2 / (a_1 + a_2))$ is the reduced harmonic mean acceleration $\\frac{1}{1/a_1 + 1/a_2}$.",
    why_wrong="Option B has the dimensional units inverted."
))

# Q492 - Medium
qs.append(make_motion_q(
    num=492,
    question="For the motion described in the previous question, what is the total distance traveled by the car?",
    options={
        "A": "(1/2) [a₁ a₂ / (a₁ + a₂)] t²",
        "B": "[a₁ a₂ / (a₁ + a₂)] t²",
        "C": "(1/2) (a₁ + a₂) t²",
        "D": "(1/4) [a₁ a₂ / (a₁ + a₂)] t²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Conceptual and numerical mixed problems",
    concept="Total distance under a triangular v-t graph is the area of the triangle: $s = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} t v_{\\max}$.",
    given="Total time t, peak velocity v_max = [a₁ a₂ / (a₁ + a₂)] t.",
    formula="s = (1/2) t v_max",
    steps=(
        "1. On a velocity-time graph, the curve forms a triangle with base = total time t and height = peak velocity v_max.\n"
        "2. Total distance s = Area under v-t graph = (1/2) × base × height = (1/2) t v_max.\n"
        "3. Substitute v_max = [a₁ a₂ / (a₁ + a₂)] t:\n"
        "4. s = (1/2) [a₁ a₂ / (a₁ + a₂)] t²."
    ),
    tip="Use the triangular v-t graph method for any two-stage motion starting and ending at rest. Area is simply $\\frac{1}{2} t v_{\\max}$!",
    why_wrong="Option B forgets the factor of 1/2 from the area of the triangle."
))

# Q493 - Hard
qs.append(make_motion_q(
    num=493,
    question="A particle moves along a straight line such that its deceleration is proportional to its displacement x: a = -k x (where k > 0). If its velocity at x = 0 is v₀, at what displacement does the particle momentarily come to rest?",
    options={
        "A": "v₀ / √k",
        "B": "v₀² / k",
        "C": "v₀ / k",
        "D": "√(v₀ / k)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Deceleration varying with displacement: use $a = v \\frac{dv}{dx} = -k x$. Integrate to find $v(x)$.",
    given="a = -kx, v(0) = v₀.",
    formula="v dv = -k x dx",
    steps=(
        "1. Express acceleration as v (dv/dx) = -kx.\n"
        "2. Separate variables and integrate from x = 0 (v = v₀) to x = x_max (v = 0):\n"
        "∫_{v₀}^0 v dv = -k ∫_0^{x_max} x dx.\n"
        "3. [v² / 2]_{v₀}^0 = -k [x² / 2]_0^{x_max}.\n"
        "4. -v₀² / 2 = -k x_max² / 2 => x_max² = v₀² / k.\n"
        "5. x_max = v₀ / √k."
    ),
    tip="This is simple harmonic motion where $\\omega = \\sqrt{k}$ and $v_0 = \\omega A \\implies A = v_0 / \\sqrt{k}$!",
    why_wrong="v₀² / k forgets that the relation is between x² and v₀²."
))

# Q494 - Hard
qs.append(make_motion_q(
    num=494,
    question="A particle moves along the x-axis with acceleration a(t) = 6t - 18 m/s². At t = 0, its position is x(0) = 0 and velocity is v(0) = 24 m/s. What is the total distance traveled by the particle in the time interval t = 0 to t = 4 s?",
    options={
        "A": "24 m",
        "B": "16 m",
        "C": "20 m",
        "D": "28 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Find velocity $v(t) = \\int a dt$ and identify zeros of $v(t)$ to find direction changes.",
    given="a(t) = 6t - 18, v(0) = 24, x(0) = 0, interval [0, 4] s.",
    formula="v(t) = 3t² - 18t + 24 = 3(t - 2)(t - 4) = 0",
    steps=(
        "1. Velocity: v(t) = ∫ (6t - 18) dt = 3t² - 18t + C. Since v(0) = 24, v(t) = 3t² - 18t + 24.\n"
        "2. Roots of v(t): 3(t² - 6t + 8) = 3(t - 2)(t - 4) = 0 => t = 2 s and t = 4 s.\n"
        "3. Position x(t) = ∫ (3t² - 18t + 24) dt = t³ - 9t² + 24t (with x(0) = 0).\n"
        "4. At t = 0: x(0) = 0.\n"
        "5. At t = 2: x(2) = 2³ - 9(4) + 24(2) = 8 - 36 + 48 = 20 m.\n"
        "6. At t = 4: x(4) = 4³ - 9(16) + 24(4) = 64 - 144 + 96 = 16 m.\n"
        "7. Distance from t = 0 to 2 s: |20 - 0| = 20 m.\n"
        "8. Distance from t = 2 to 4 s: |16 - 20| = 4 m (turning back).\n"
        "9. Total distance = 20 + 4 = 24 m."
    ),
    tip="Always find the zeros of velocity to split into monotonic intervals for distance calculation.",
    why_wrong="16 m is displacement, not total distance."
))

# Q495 - Hard
qs.append(make_motion_q(
    num=495,
    question="A body starts from rest at x = 0 and moves along the x-axis with an acceleration given by a = α √v, where α is a positive constant. What is the position x of the body as a function of velocity v?",
    options={
        "A": "(2 / (3α)) v^{3/2}",
        "B": "(1 / α) v^2",
        "C": "(2 / α) √v",
        "D": "(3 / (2α)) v^{3/2}"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Use $a = v \\frac{dv}{dx}$ to relate velocity and position directly.",
    given="a = α √v, initial condition x = 0 when v = 0.",
    formula="v \\frac{dv}{dx} = \\alpha \\sqrt{v} => \\sqrt{v} dv = \\alpha dx",
    steps=(
        "1. Write acceleration as: v (dv/dx) = α v^{1/2}.\n"
        "2. Separate variables: (v / v^{1/2}) dv = α dx => v^{1/2} dv = α dx.\n"
        "3. Integrate both sides from 0 to v and 0 to x:\n"
        "∫_0^v v^{1/2} dv = α ∫_0^x dx.\n"
        "4. (2/3) v^{3/2} = α x.\n"
        "5. Solving for x: x = (2 / (3α)) v^{3/2}."
    ),
    tip="Use $v \\frac{dv}{dx}$ whenever time $t$ is not involved in the relation between $a$, $v$, and $x$.",
    why_wrong="Option D inverts the numerical coefficient."
))

# Q496 - Hard
qs.append(make_motion_q(
    num=496,
    question="A stone is dropped into a well of depth h = 80 m. The splash sound is heard at the top after a time t. If g = 10 m/s² and the speed of sound in air is 320 m/s, what is the value of t?",
    options={
        "A": "4.25 s",
        "B": "4.00 s",
        "C": "4.50 s",
        "D": "3.75 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Total time is the sum of time taken by the stone to fall ($t_1$) and time taken by sound to travel up ($t_2$): $t = t_1 + t_2$.",
    given="Depth h = 80 m, g = 10 m/s², speed of sound v_s = 320 m/s.",
    formula="t₁ = √(2h / g), t₂ = h / v_s, t = t₁ + t₂",
    steps=(
        "1. Time for stone to fall to the water surface: t₁ = √(2h / g) = √(2 × 80 / 10) = √16 = 4 s.\n"
        "2. Time for the splash sound to travel up the well: t₂ = h / v_s = 80 / 320 = 0.25 s.\n"
        "3. Total time heard by observer at top: t = t₁ + t₂ = 4 + 0.25 = 4.25 s."
    ),
    tip="Classic NEET trap: Don't forget that sound travels at a finite speed and takes time $h / v_s$ to reach the listener!",
    why_wrong="4.00 s neglects the time taken by the sound wave to propagate up the well."
))

# Q497 - Hard
qs.append(make_motion_q(
    num=497,
    question="A ball is dropped from a height H onto a horizontal floor. After each bounce, it rebounds with a speed that is a fraction e (coefficient of restitution) of its impact speed. What is the total distance traveled by the ball before coming to rest?",
    options={
        "A": "H (1 + e²) / (1 - e²)",
        "B": "H (1 + e) / (1 - e)",
        "C": "H / (1 - e²)",
        "D": "2H / (1 - e²)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Total distance is the initial drop plus twice the height of every subsequent bounce, forming an infinite geometric series.",
    given="Drop height H, coefficient of restitution e (0 < e < 1).",
    formula="Total distance = H + 2 e² H + 2 e⁴ H + ... = H + 2H e² / (1 - e²)",
    steps=(
        "1. Initial drop: distance = H.\n"
        "2. Speed before 1st bounce: v₁ = √(2gH). Rebound speed: v₁' = e v₁.\n"
        "3. Height of 1st bounce: h₁ = (v₁')² / (2g) = e² H.\n"
        "4. Ball ascends and descends h₁, contributing 2 h₁ = 2 e² H to total distance.\n"
        "5. Similarly, nth bounce contributes 2 e^{2n} H.\n"
        "6. Total distance: D = H + 2H (e² + e⁴ + e⁶ + ...) = H + 2H [e² / (1 - e²)].\n"
        "7. D = H [1 + 2e² / (1 - e²)] = H [(1 - e² + 2e²) / (1 - e²)] = H (1 + e²) / (1 - e²)."
    ),
    tip="Direct NEET standard result: Total distance $= H \\left(\\frac{1 + e^2}{1 - e^2}\\right)$. Total time $= T \\left(\\frac{1 + e}{1 - e}\\right)$.",
    why_wrong="Option B is the formula for total time of motion, not total distance."
))

# Q498 - Hard
qs.append(make_motion_q(
    num=498,
    question="In the bouncing ball problem above, what is the total time elapsed from the initial release until the ball stops bouncing?",
    options={
        "A": "√(2H / g) × ((1 + e) / (1 - e))",
        "B": "√(2H / g) × ((1 + e²) / (1 - e²))",
        "C": "√(2H / g) / (1 - e)",
        "D": "2 √(2H / g) / (1 - e)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Initial drop time is $t_0 = \\sqrt{2H/g}$. Each subsequent bounce has time of flight $T_n = 2 e^n t_0$, forming a geometric series in $e$.",
    given="Drop height H, coefficient of restitution e.",
    formula="Total time = t₀ + 2 e t₀ + 2 e² t₀ + ... = t₀ (1 + 2e/(1 - e)) = t₀ (1 + e)/(1 - e)",
    steps=(
        "1. Time for initial drop: t₀ = √(2H / g).\n"
        "2. Time of flight for first bounce: T₁ = 2 v₁' / g = 2 e v₁ / g = 2 e t₀.\n"
        "3. Time of flight for nth bounce: T_n = 2 e^n t₀.\n"
        "4. Total time T = t₀ + 2 t₀ (e + e² + e³ + ...).\n"
        "5. The geometric series sum is e / (1 - e).\n"
        "6. T = t₀ [1 + 2e / (1 - e)] = t₀ [(1 - e + 2e) / (1 - e)] = t₀ (1 + e) / (1 - e)."
    ),
    tip="Notice the exponent: distance involves $e^2$ because height $\\propto v^2$, while time involves $e$ because time $\\propto v$!",
    why_wrong="Option B wrongly uses e² instead of e."
))

# Q499 - Hard
qs.append(make_motion_q(
    num=499,
    question="A body moves in a straight line with uniform acceleration. If its displacements in the pth, qth, and rth seconds are in arithmetic progression (AP), then p, q, and r must:",
    options={
        "A": "Also be in arithmetic progression (AP)",
        "B": "Be in geometric progression (GP)",
        "C": "Be in harmonic progression (HP)",
        "D": "Satisfy p + r = 2q only if acceleration is zero"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Displacement in the nth second is a linear function of $n$: $s_n = u - \\frac{a}{2} + a n$. Any linear transformation of an AP is also an AP.",
    given="s_p, s_q, s_r are in AP for uniformly accelerated motion.",
    formula="s_n = A + B n where B = a ≠ 0",
    steps=(
        "1. Displacement in the nth second is s_n = u + (a/2)(2n - 1) = (u - a/2) + a n.\n"
        "2. This is a linear function of n: s_n = C + a n (with a ≠ 0).\n"
        "3. Since s_p, s_q, s_r are in AP: s_q - s_p = s_r - s_q.\n"
        "4. Substitute: (C + a q) - (C + a p) = (C + a r) - (C + a q).\n"
        "5. a(q - p) = a(r - q). Since a ≠ 0, divide by a: q - p = r - q.\n"
        "6. This means 2q = p + r, which proves that p, q, and r are in arithmetic progression."
    ),
    tip="A linear function $f(n) = A + Bn$ maps an AP to an AP and vice-versa!",
    why_wrong="They are strictly in AP, not GP or HP."
))

# Q500 - Hard
qs.append(make_motion_q(
    num=500,
    question="A particle starts from the origin at t = 0 and moves along the positive x-axis such that its speed v depends on position x as v = b x^{-n}, where b and n are positive constants. For what range of values of n does the particle reach infinity in a finite time?",
    options={
        "A": "n < -1 (i.e., not possible for positive n; for v = b x^m, finite time requires m > 1)",
        "B": "n > 1",
        "C": "0 < n < 1",
        "D": "n = 1"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Conceptual and numerical mixed problems",
    concept="Time to travel from $x_0$ to $\\infty$ is $T = \\int_{x_0}^\\infty \\frac{dx}{v(x)} = \\int_{x_0}^\\infty \\frac{x^n}{b} dx$. For $n > 0$, the integral $\\int^\\infty x^n dx$ diverges to infinity, so it takes infinite time.",
    given="v = b x^{-n} with b > 0, n > 0.",
    formula="dt = \\frac{dx}{v} = \\frac{x^n}{b} dx => T = \\frac{1}{b} \\int_{x_0}^\\infty x^n dx",
    steps=(
        "1. Express time element: dt = dx / v = (1/b) x^n dx.\n"
        "2. Total time to reach infinity from some initial point x₀ > 0:\n"
        "T = (1/b) ∫_{x₀}^∞ x^n dx.\n"
        "3. The integral ∫_{x₀}^∞ x^n dx converges if and only if the exponent n < -1 (meaning speed must grow faster than linearly with x, i.e., v ∝ x^m with m > 1).\n"
        "4. Since n is given as a positive constant (n > 0), x^n increases as x → ∞, meaning the integral diverges to infinity.\n"
        "5. Thus, for any positive n, it takes infinite time to reach infinity (it cannot reach infinity in finite time for positive n)."
    ),
    tip="Dimensional & integral check: $\\int^\\infty x^n dx$ converges at $\\infty$ only when exponent is less than $-1$.",
    why_wrong="n > 1 would make the integrand diverge even faster to +infinity."
))

with open('scripts/part4_topic22.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Generated Topic 22 questions:", len(qs))
