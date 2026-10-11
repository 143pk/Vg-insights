import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 16 (Continued): Motion under gravity and sign conventions (Q346 to Q375, 30 questions)
# Difficulties: 23 Medium, 7 Hard
# ==============================================================================

# Q346 - Medium
qs.append(make_motion_q(
    num=346,
    question="A ball thrown vertically upwards passes a certain height h at time t₁ on its way up and at time t₂ on its way down. The initial speed of projection u is:",
    options={
        "A": "g (t₁ + t₂) / 2",
        "B": "g (t₁ + t₂)",
        "C": "g √(t₁ t₂)",
        "D": "g (t₂ - t₁) / 2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="The displacement equation h = ut - 1/2 gt² is quadratic in t: 1/2 gt² - ut + h = 0. The sum of roots is t₁ + t₂ = u / (g/2) = 2u / g => u = g (t₁ + t₂) / 2.",
    given="Height h passed at t₁ and t₂.",
    formula="1/2 g t² - u t + h = 0 => t₁ + t₂ = 2u / g => u = g (t₁ + t₂) / 2",
    steps=(
        "1. Write the vertical position equation: h = u t - (1/2) g t².\n"
        "2. Rearrange as a standard quadratic equation in t: (g/2) t² - u t + h = 0.\n"
        "3. By Vieta's formulas, the sum of the roots t₁ and t₂ is: t₁ + t₂ = -(-u) / (g/2) = 2u / g.\n"
        "4. Solving for u: u = g (t₁ + t₂) / 2."
    ),
    tip="Golden NEET Formula: u = g(t₁ + t₂)/2 and h = 1/2 g t₁ t₂!",
    why_wrong="Option B forgets the factor of 1/2 in the sum of roots."
))

# Q347 - Medium
qs.append(make_motion_q(
    num=347,
    question="Using the same setup (a ball passing height h at times t₁ and t₂), what is the value of the height h?",
    options={
        "A": "(1/2) g t₁ t₂",
        "B": "g t₁ t₂",
        "C": "2 g t₁ t₂",
        "D": "(1/4) g t₁ t₂"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="From Vieta's formulas on (g/2) t² - u t + h = 0, the product of roots is t₁ t₂ = h / (g/2) => h = 1/2 g t₁ t₂.",
    given="Times t₁ and t₂ at height h.",
    formula="Product of roots: t₁ t₂ = h / (g/2) => h = (1/2) g t₁ t₂",
    steps=(
        "1. From the quadratic (g/2) t² - ut + h = 0, the product of roots is:\n"
        "   Product = constant term / leading coefficient = h / (g/2).\n"
        "2. Therefore: t₁ t₂ = 2h / g.\n"
        "3. Solving for h: h = (1/2) g t₁ t₂."
    ),
    tip="Memorable NEET Identity: Height h = 1/2 g t₁ t₂. Very commonly tested!",
    why_wrong="g t₁ t₂ forgets the 1/2 factor."
))

# Q348 - Medium
qs.append(make_motion_q(
    num=348,
    question="A ball is thrown vertically upwards from the top of a tower of height 20 m with initial speed 10 m/s. Taking g = 10 m/s², the time taken by the ball to reach the ground is:",
    options={
        "A": "2 s",
        "B": "3 s",
        "C": "4 s",
        "D": "1 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Taking upward positive: s = -20 m, u = +10 m/s, a = -10 m/s². Solve -20 = 10t - 5t² => 5t² - 10t - 20 = 0 => t² - 2t - 4 = 0 wait, let's check values.",
    given="h = 20 m (ground is -20 m from top), u = 10 m/s, g = 10 m/s².",
    formula="s = ut - (1/2) g t² => -20 = 10t - 5t² => 5t² - 10t - 20 = 0 wait, roots: t = [2 ± √(4+16)]/2 = 1 ± √5 ≈ 3.23 s. Wait, let's choose u=15 or h=25 so roots are integers!",
    steps=(
        "Let's choose h = 25 m, u = 20 m/s: -25 = 20t - 5t² => 5t² - 20t - 25 = 0 => t² - 4t - 5 = 0 => (t - 5)(t + 1) = 0 => t = 5 s. Or h = 40 m, u = 10 m/s => 5t² - 10t - 40 = 0 => t² - 2t - 8 = 0 => (t - 4)(t + 2) = 0 => t = 4 s! Perfect integer roots."
    ),
    tip="Set s = -h in s = ut - 1/2 gt².",
    why_wrong="Sign error in displacement."
))
# Let's fix Q348 question stem to have clean integer roots:
qs[-1]['question'] = "A ball is thrown vertically upwards from the top of a tower of height 40 m with an initial speed of 10 m/s. Taking g = 10 m/s², the time taken by the ball to reach the ground is:"
qs[-1]['options'] = {"A": "4 s", "B": "2 s", "C": "3 s", "D": "5 s"}
qs[-1]['correct_opt'] = "A"
qs[-1]['correctAnswer'] = "A"
qs[-1]['correctIndex'] = 0
qs[-1]['concept'] = "Taking upward as positive and the tower top as the origin: s = -40 m, u = +10 m/s, a = -g = -10 m/s²."
qs[-1]['formula'] = "s = u t - (1/2) g t² => -40 = 10t - 5t²"
qs[-1]['steps'] = (
    "1. Coordinate system: upward is positive, origin at the top of the tower.\n"
    "2. Displacement to the ground: s = -40 m.\n"
    "3. Apply displacement formula: -40 = 10t - (1/2)(10)t² = 10t - 5t².\n"
    "4. Rearrange: 5t² - 10t - 40 = 0 => t² - 2t - 8 = 0.\n"
    "5. Factor: (t - 4)(t + 2) = 0.\n"
    "6. Since time cannot be negative, t = 4 s."
)

# Q349 - Medium
qs.append(make_motion_q(
    num=349,
    question="A ball thrown vertically upwards from the top of a tower of height 40 m with speed 10 m/s hits the ground with what speed? (take g = 10 m/s²)",
    options={
        "A": "30 m/s",
        "B": "25 m/s",
        "C": "20 m/s",
        "D": "35 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Using v² = u² + 2gh (or v = u - gt): v² = 10² + 2(10)(40) = 100 + 800 = 900 => v = 30 m/s.",
    given="u = 10 m/s, h = 40 m, g = 10 m/s².",
    formula="v² = u² + 2gh",
    steps=(
        "1. By conservation of mechanical energy or 3rd equation of motion:\n"
        "   v² = u² + 2gh (since net vertical drop is h = 40 m).\n"
        "2. v² = (10)² + 2 × 10 × 40 = 100 + 800 = 900.\n"
        "3. v = √900 = 30 m/s.\n"
        "4. Alternatively, using t = 4 s: v = u - gt = 10 - 10(4) = -30 m/s (downward speed is 30 m/s)."
    ),
    tip="Speed upon hitting the ground does NOT depend on whether the ball was thrown upwards or downwards at initial speed u!",
    why_wrong="20 m/s forgets the initial kinetic energy."
))

# Q350 - Medium
qs.append(make_motion_q(
    num=350,
    question="From the top of a tower, one ball is thrown vertically upwards with speed u and another ball is thrown vertically downwards with the same speed u. If they reach the ground with speeds v₁ and v₂ respectively, then:",
    options={
        "A": "v₁ = v₂",
        "B": "v₁ > v₂",
        "C": "v₁ < v₂",
        "D": "Depends on the mass of the balls"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="By conservation of energy, the mechanical energy at the top is E = 1/2 m u² + mgh for both balls. Therefore, the kinetic energy at the ground is identical: 1/2 m v² = 1/2 m u² + mgh => v₁ = v₂ = √(u² + 2gh).",
    given="Same height h, same initial speed u in opposite vertical directions.",
    formula="v = √(u² + 2gh)",
    steps=(
        "1. For the ball thrown upwards, it rises to max height and returns to the tower top with the same speed u downwards.\n"
        "2. From that point on, its motion is identical to the ball thrown downwards with speed u.\n"
        "3. Alternatively, by energy conservation: 1/2 m v² = 1/2 m u² + mgh.\n"
        "4. Since mass cancels and energy is a scalar independent of velocity direction, v₁ = v₂ = √(u² + 2gh)."
    ),
    tip="Their final speeds are identical (v₁ = v₂), but their times of flight are different (t₁ > t₂)!",
    why_wrong="Option B falsely assumes going higher gives it more final speed (it actually just takes more time)."
))

# Q351 - Medium
qs.append(make_motion_q(
    num=351,
    question="In the previous problem, if the times taken to reach the ground are t₁ (thrown upwards) and t₂ (thrown downwards), the time t taken by a third ball dropped from rest from the same height is:",
    options={
        "A": "t = √(t₁ t₂)",
        "B": "t = (t₁ + t₂) / 2",
        "C": "t = 2 t₁ t₂ / (t₁ + t₂)",
        "D": "t = √(t₁² + t₂²)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="For ball 1: -h = ut₁ - 1/2 gt₁². For ball 2: -h = -ut₂ - 1/2 gt₂². Eliminating u gives h = 1/2 g t₁ t₂. For dropped ball: h = 1/2 g t². Equating gives t = √(t₁ t₂).",
    given="Times t₁ (thrown up), t₂ (thrown down), t (dropped).",
    formula="t = √(t₁ t₂)",
    steps=(
        "1. Ball thrown upwards: -h = u t₁ - (1/2) g t₁² => u t₁ = (1/2) g t₁² - h.\n"
        "2. Ball thrown downwards: -h = -u t₂ - (1/2) g t₂² => u t₂ = h - (1/2) g t₂².\n"
        "3. Dividing equations: t₁ / t₂ = [(1/2) g t₁² - h] / [h - (1/2) g t₂²].\n"
        "4. Cross multiplying and simplifying yields: h = (1/2) g t₁ t₂.\n"
        "5. For a ball dropped from rest: h = (1/2) g t².\n"
        "6. Comparing both: (1/2) g t² = (1/2) g t₁ t₂ => t² = t₁ t₂ => t = √(t₁ t₂)."
    ),
    tip="FAMOUS NEET RESULT: Geometric mean of flight times! t = √(t₁ t₂).",
    why_wrong="Arithmetic mean (t₁ + t₂)/2 gives the time to reach maximum height from the ground."
))

# Q352 - Medium
qs.append(make_motion_q(
    num=352,
    question="A body is thrown vertically upwards with speed u. The ratio of its velocity at t = u / (2g) to its velocity at t = 3u / (2g) is:",
    options={
        "A": "-1",
        "B": "1",
        "C": "-2",
        "D": "1/2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="v(t) = u - gt. At t₁ = u/(2g), v₁ = u - u/2 = +u/2. At t₂ = 3u/(2g), v₂ = u - 3u/2 = -u/2. Ratio v₁/v₂ = (u/2) / (-u/2) = -1.",
    given="u, t₁ = u / (2g), t₂ = 3u / (2g).",
    formula="v = u - gt",
    steps=(
        "1. Velocity at t₁ = u / (2g): v₁ = u - g [u / (2g)] = u - u/2 = +u/2.\n"
        "2. Velocity at t₂ = 3u / (2g): v₂ = u - g [3u / (2g)] = u - 1.5u = -u/2.\n"
        "3. Ratio of velocities: v₁ / v₂ = (+u/2) / (-u/2) = -1."
    ),
    tip="At t = u/(2g), body is ascending halfway to its peak. At t = 3u/(2g), body is descending halfway down from its peak with equal and opposite velocity!",
    why_wrong="+1 is the ratio of speeds, but the question asks for the ratio of velocities (which includes direction)."
))

# Q353 - Medium
qs.append(make_motion_q(
    num=353,
    question="A rocket is fired vertically upwards from the ground with a constant net acceleration of 10 m/s². Its fuel is exhausted after 10 s. What is the maximum height attained by the rocket? (take g = 10 m/s²)",
    options={
        "A": "1000 m",
        "B": "500 m",
        "C": "1500 m",
        "D": "750 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Stage 1 (powered): h₁ = 1/2 a t² = 1/2(10)(100) = 500 m. Velocity at burnout v = at = 10(10) = 100 m/s. Stage 2 (free flight under gravity): h₂ = v² / (2g) = 100² / (2×10) = 500 m. Total max height = h₁ + h₂ = 1000 m.",
    given="Net acceleration a = 10 m/s², burn time t = 10 s, g = 10 m/s².",
    formula="h₁ = (1/2) a t²; v = a t; h₂ = v² / (2g); H_max = h₁ + h₂",
    steps=(
        "1. Stage 1 (powered flight from rest): a = 10 m/s², t = 10 s.\n"
        "   Height reached at burnout: h₁ = (1/2) a t² = (1/2) × 10 × 100 = 500 m.\n"
        "   Velocity at burnout: v = a t = 10 × 10 = 100 m/s.\n"
        "2. Stage 2 (coasting under gravity from 100 m/s to 0 m/s):\n"
        "   Additional height climbed: h₂ = v² / (2g) = (100)² / (2 × 10) = 10000 / 20 = 500 m.\n"
        "3. Total maximum height from ground: H_max = h₁ + h₂ = 500 m + 500 m = 1000 m."
    ),
    tip="Two-stage motion: The rocket does NOT stop when the fuel runs out! It coasts upward under gravity.",
    why_wrong="500 m is only the height at burnout, forgetting the 500 m coasting phase."
))

# Q354 - Medium
qs.append(make_motion_q(
    num=354,
    question="In the previous rocket problem, what is the total time elapsed from launch until the rocket reaches its maximum height?",
    options={
        "A": "20 s",
        "B": "15 s",
        "C": "10 s",
        "D": "25 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Total time to peak = t_powered + t_coasting. t_powered = 10 s. t_coasting = v / g = 100 / 10 = 10 s. Total time = 10 + 10 = 20 s.",
    given="Burn time t₁ = 10 s, burnout velocity v = 100 m/s, g = 10 m/s².",
    formula="t_total = t₁ + v / g",
    steps=(
        "1. Time of powered ascent: t₁ = 10 s.\n"
        "2. Burnout velocity: v = 100 m/s.\n"
        "3. Time taken to come to rest under gravity: t₂ = v / g = 100 / 10 = 10 s.\n"
        "4. Total time to reach maximum height: T = t₁ + t₂ = 10 s + 10 s = 20 s."
    ),
    tip="Add the powered time to the gravitational ascent time.",
    why_wrong="10 s is only the burn time."
))

# Q355 - Medium
qs.append(make_motion_q(
    num=355,
    question="A juggler maintains 4 balls in the air simultaneously, throwing each ball to a height of 20 m. With what time interval does he throw the successive balls? (take g = 10 m/s²)",
    options={
        "A": "1.0 s",
        "B": "0.5 s",
        "C": "1.5 s",
        "D": "2.0 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Time of flight for each ball T = 2 √(2h/g) = 2 √(40/10) = 4 s. With 4 balls in the air, interval between throws is Δt = T / n = 4 / 4 = 1.0 s.",
    given="Height h = 20 m, number of balls n = 4, g = 10 m/s².",
    formula="T = 2 √(2h / g); Δt = T / n",
    steps=(
        "1. Time of flight for one ball: T = 2 √(2h / g) = 2 √(2 × 20 / 10) = 2 √4 = 4 s.\n"
        "2. To keep 4 balls in the air continuously, the total time T must be divided equally among the 4 balls.\n"
        "3. Interval between successive throws: Δt = T / 4 = 4 s / 4 = 1.0 s."
    ),
    tip="Juggling formula: Time interval between throws = (Time of flight of one ball) / (Number of balls).",
    why_wrong="0.5 s would accommodate 8 balls in the air."
))

# Q356 - Medium
qs.append(make_motion_q(
    num=356,
    question="A ball is thrown vertically upwards with speed 20 m/s. What is the distance traveled by the ball during the 3rd second of its motion? (take g = 10 m/s²)",
    options={
        "A": "5 m",
        "B": "15 m",
        "C": "25 m",
        "D": "10 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Time to peak is t_up = u/g = 20/10 = 2 s. The 3rd second is from t = 2 to 3 s, during which the ball falls from rest at the apex: d = 1/2 g (1)² = 5 m.",
    given="u = 20 m/s, g = 10 m/s², 3rd second interval is t = 2 s to t = 3 s.",
    formula="d = (1/2) g (Δt)² from apex",
    steps=(
        "1. Time to reach the highest point: t_peak = u / g = 20 / 10 = 2 s.\n"
        "2. The 3rd second corresponds to the time from t = 2 s to t = 3 s.\n"
        "3. At t = 2 s, the ball is at the top with v = 0.\n"
        "4. During the next 1 second (from t = 2 to 3 s), the ball falls freely from rest.\n"
        "5. Distance traveled: d = (1/2) g (1)² = (1/2) × 10 × 1 = 5 m."
    ),
    tip="Since peak is at t = 2 s, the 3rd second is simply the 1st second of free fall: d = 5 m!",
    why_wrong="Blindly using s_n = u - g/2(2n-1) gives 20 - 5(5) = -5 m (displacement). Distance is | -5 | = 5 m."
))

# Q357 - Medium
qs.append(make_motion_q(
    num=357,
    question="A ball is thrown vertically upwards with speed 30 m/s. What is its displacement and total distance traveled after 4 seconds? (take g = 10 m/s²)",
    options={
        "A": "Displacement = 40 m, Distance = 50 m",
        "B": "Displacement = 50 m, Distance = 40 m",
        "C": "Displacement = 40 m, Distance = 40 m",
        "D": "Displacement = 45 m, Distance = 55 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Time to peak: t_up = 30/10 = 3 s. Height at peak = 1/2(10)(3²) = 45 m. At t = 4 s: falls for 1 s from peak, dropping 1/2(10)(1²) = 5 m. Distance = 45 + 5 = 50 m. Displacement = 45 - 5 = 40 m.",
    given="u = 30 m/s, g = 10 m/s², t = 4 s.",
    formula="s = ut - (1/2) g t²; Distance = h_max + h_fall",
    steps=(
        "1. Time to reach maximum height: t_up = u / g = 30 / 10 = 3 s.\n"
        "2. Maximum height reached: H_max = u² / (2g) = (30)² / 20 = 45 m.\n"
        "3. At t = 4 s, the ball has been falling for 1 s after reaching the apex.\n"
        "4. Distance fallen in that 1 s: h_fall = (1/2) g (1)² = 5 m.\n"
        "5. Total distance traveled: d = H_max + h_fall = 45 m + 5 m = 50 m.\n"
        "6. Net displacement: s = u t - (1/2) g t² = 30(4) - 5(16) = 120 - 80 = 40 m."
    ),
    tip="When time t > time to peak, Distance > Displacement. Distance = H_max + (H_max - s) = 2 H_max - s.",
    why_wrong="Option C equates displacement and distance, which only holds when motion has not reversed."
))

# Q358 - Medium
qs.append(make_motion_q(
    num=358,
    question="A ball is thrown vertically upwards. It reaches a maximum height H. At what fraction of H is its kinetic energy equal to three times its potential energy (taking PE = 0 at the ground)?",
    options={
        "A": "H / 4",
        "B": "H / 3",
        "C": "H / 2",
        "D": "3H / 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Total energy E = mgH = KE + PE. Given KE = 3 PE => 3 PE + PE = 4 PE = mgH => 4 mgh = mgH => h = H/4.",
    given="KE = 3 PE, max height H, PE(0) = 0.",
    formula="E_total = KE + PE = mgH; KE = 3 PE => 4 PE = mgH",
    steps=(
        "1. Total mechanical energy is conserved: E = mgH.\n"
        "2. At height h: PE = mgh and KE = 3 PE = 3 mgh.\n"
        "3. Total energy: E = KE + PE = 3 mgh + mgh = 4 mgh.\n"
        "4. Equating to total energy: 4 mgh = mgH.\n"
        "5. Canceling mg gives: 4h = H => h = H / 4."
    ),
    tip="If KE = n PE, then (n + 1) PE = Total Energy => h = H / (n + 1). Here n = 3, so h = H / 4.",
    why_wrong="3H / 4 is where PE is three times KE, not where KE is three times PE."
))

# Q359 - Medium
qs.append(make_motion_q(
    num=359,
    question="Two balls are thrown vertically upwards from the same point with the same initial speed u, but with a time interval of 2 s between the throws. If they collide at the maximum height of the first ball, the initial speed u is: (take g = 10 m/s²)",
    options={
        "A": "20 m/s",
        "B": "10 m/s",
        "C": "30 m/s",
        "D": "40 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Collision occurs at peak of first ball: t₁ = u/g. The second ball has been moving for t₂ = t₁ - 2 = u/g - 2. At collision, its height must equal H_max = u²/(2g). Solve for u.",
    given="Interval = 2 s, collision at max height of ball 1, g = 10 m/s².",
    formula="h₂(t₂ = u/g - 2) = u² / (2g)",
    steps=(
        "1. Ball 1 reaches max height at t₁ = u / g, where h₁ = u² / (2g).\n"
        "2. Ball 2 was thrown 2 s later, so it has traveled for time t₂ = u/g - 2.\n"
        "3. At collision, ball 2 must also reach height h₁ = u² / (2g).\n"
        "4. Since max height can only be reached at t = u/g, ball 2 must also be at its peak! Hence t₂ = u/g, wait, no: ball 2 is thrown later, so if it collides with ball 1 at ball 1's peak while ball 1 is stationary: u(u/g - 2) - 1/2 g(u/g - 2)² = u²/(2g).\n"
        "5. Let's test u = 20 m/s: t₁ = 20/10 = 2 s. Since ball 2 was thrown 2 s later, at t = 2 s ball 2 is JUST leaving the ground! That means H_max would have to be 0 m, which is impossible.\n"
        "6. Let's reconsider: for collision at max height, t₁ = u/g. If ball 2 has traveled for t₂ = t₁ - 2 and reaches H_max: 20(t₂) - 5t₂² = 20 m. With u = 20, t₁ = 2 s, t₂ = 0 s, h₂ = 0 ≠ 20 m.\n"
        "7. Let's solve: u(t - 2) - 1/2 g (t - 2)² = 1/2 g t² where t = u/g. Then u(u/g - 2) - 1/2 g (u²/g² - 4u/g + 4) = u²/(2g) => u²/g - 2u - u²/(2g) + 2u - 2g = u²/(2g) => u²/(2g) - 2g = u²/(2g) => 2g = 0 (impossible!).\n"
        "8. That means ball 1 must be falling down from max height, or ball 2 collides with ball 1 at some height."
    ),
    tip="Let's make this problem unambiguous: 'Two balls are thrown vertically upwards with the same speed u, 2 seconds apart. They collide at a height of 15 m...'",
    why_wrong="Ambiguity in collision condition."
))
# Let's fix Q359 to a pristine NEET problem:
qs[-1]['question'] = "Two bodies are thrown vertically upwards from the same spot with the same initial velocity u, separated by an interval of 2 s. If they meet in the air at a time 3 s after the launch of the first body, the initial speed u is: (take g = 10 m/s²)"
qs[-1]['options'] = {"A": "20 m/s", "B": "25 m/s", "C": "15 m/s", "D": "30 m/s"}
qs[-1]['correct_opt'] = "A"
qs[-1]['correctAnswer'] = "A"
qs[-1]['correctIndex'] = 0
qs[-1]['concept'] = "Body 1 travels for t₁ = 3 s. Body 2 travels for t₂ = 3 - 2 = 1 s. They meet at the same height: s₁(3) = s₂(1)."
qs[-1]['formula'] = "u t₁ - (1/2) g t₁² = u t₂ - (1/2) g t₂²"
qs[-1]['steps'] = (
    "1. For the first body at t₁ = 3 s: h₁ = u(3) - (1/2)(10)(3)² = 3u - 45.\n"
    "2. For the second body at t₂ = 3 - 2 = 1 s: h₂ = u(1) - (1/2)(10)(1)² = u - 5.\n"
    "3. At collision, h₁ = h₂: 3u - 45 = u - 5.\n"
    "4. 2u = 40 => u = 20 m/s.\n"
    "5. Height of meeting: h = 20(1) - 5 = 15 m."
)

# Q360 - Medium
qs.append(make_motion_q(
    num=360,
    question="A ball is released from an elevator moving upwards with an acceleration of 2 m/s² at an instant when the upward velocity of the elevator is 4 m/s. What is the acceleration of the ball immediately after its release? (take g = 10 m/s²)",
    options={
        "A": "10 m/s² downwards",
        "B": "12 m/s² downwards",
        "C": "8 m/s² downwards",
        "D": "2 m/s² upwards"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Once detached, the only force acting on the ball in the ground reference frame is gravity: a = g = 10 m/s² downwards.",
    given="Elevator upward acceleration = 2 m/s², velocity = 4 m/s.",
    formula="a_ball = g (downwards) in ground frame",
    steps=(
        "1. Once the ball is released from the hand or elevator floor, it is no longer in contact with the elevator.\n"
        "2. The only force acting on the ball (in an inertial frame attached to the ground) is the force of Earth's gravity mg.\n"
        "3. Therefore, its acceleration relative to the ground is simply g = 10 m/s² downwards.\n"
        "4. (Note: Relative to the elevator, its acceleration would be g + a_elevator = 10 + 2 = 12 m/s² downwards)."
    ),
    tip="CRUCIAL NEET DISTINCTION: In the GROUND frame, free fall acceleration is always g downwards. In the accelerating elevator frame, effective acceleration is g + a.",
    why_wrong="12 m/s² is the acceleration relative to the elevator, not relative to the ground."
))

# Q361 - Medium
qs.append(make_motion_q(
    num=361,
    question="In the previous elevator problem, what is the acceleration of the ball relative to the elevator?",
    options={
        "A": "12 m/s² downwards",
        "B": "10 m/s² downwards",
        "C": "8 m/s² downwards",
        "D": "2 m/s² downwards"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="a_rel = a_ball - a_elevator = (-10 m/s²) - (+2 m/s²) = -12 m/s² (i.e. 12 m/s² downwards).",
    given="a_ball = -10 m/s², a_elevator = +2 m/s².",
    formula="a_rel = a_ball - a_lift",
    steps=(
        "1. In the upward-accelerating non-inertial frame of the elevator, a pseudo-force acts downwards: -m a_lift.\n"
        "2. Effective acceleration felt inside the elevator: g_eff = g + a_lift = 10 + 2 = 12 m/s² downwards.\n"
        "3. Alternatively, by relative acceleration: a_rel = a_ball - a_lift = (-10) - (+2) = -12 m/s² (downwards)."
    ),
    tip="Inside an elevator accelerating upwards at a, gravity feels stronger: g_eff = g + a.",
    why_wrong="8 m/s² would apply if the elevator were accelerating downwards."
))

# Q362 - Medium
qs.append(make_motion_q(
    num=362,
    question="A ball is thrown vertically upwards from the ground with speed 25 m/s. How long does it spend at an elevation of 20 m or higher? (take g = 10 m/s²)",
    options={
        "A": "3 s",
        "B": "2 s",
        "C": "1 s",
        "D": "4 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Find the two times when height is 20 m from 20 = 25t - 5t² => 5t² - 25t + 20 = 0 => t² - 5t + 4 = 0 => t₁ = 1 s and t₂ = 4 s. Time spent above 20 m is Δt = t₂ - t₁ = 4 - 1 = 3 s.",
    given="u = 25 m/s, h = 20 m, g = 10 m/s².",
    formula="5t² - 25t + 20 = 0 => Δt = t₂ - t₁",
    steps=(
        "1. Apply displacement formula: h = u t - (1/2) g t².\n"
        "2. 20 = 25t - 5t² => 5t² - 25t + 20 = 0.\n"
        "3. Divide by 5: t² - 5t + 4 = 0.\n"
        "4. Factor: (t - 1)(t - 4) = 0 => t₁ = 1 s and t₂ = 4 s.\n"
        "5. The ball passes 20 m going up at t = 1 s and passes 20 m coming down at t = 4 s.\n"
        "6. Time duration spent above 20 m is: Δt = t₂ - t₁ = 4 s - 1 s = 3 s."
    ),
    tip="Time spent above height h is Δt = t₂ - t₁ = √( (t₁+t₂)² - 4t₁t₂ ) = √( (2u/g)² - 8h/g )!",
    why_wrong="1 s or 4 s are the individual times, not the difference between them."
))

# Q363 - Medium
qs.append(make_motion_q(
    num=363,
    question="A stone thrown vertically upwards reaches half of its maximum height with a speed of 10 m/s. The maximum height reached is: (take g = 10 m/s²)",
    options={
        "A": "10 m",
        "B": "15 m",
        "C": "20 m",
        "D": "5 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="From height H/2 to the peak H, the stone rises an additional height H/2, decelerating from 10 m/s to 0 m/s. v² = u² - 2g(H/2) => 0 = 10² - g H => H = 100 / 10 = 10 m.",
    given="Speed at H/2 is 10 m/s, g = 10 m/s².",
    formula="0 = v_half² - 2g (H / 2) => H = v_half² / g",
    steps=(
        "1. Consider motion from the halfway point h = H/2 to the maximum height H.\n"
        "2. Initial speed at halfway point: u' = 10 m/s.\n"
        "3. Final speed at top: v = 0 m/s.\n"
        "4. Distance climbed in this portion: Δh = H - H/2 = H/2.\n"
        "5. Using 3rd equation: v² = u'² - 2g (Δh) => 0 = (10)² - 2g(H/2) = 100 - gH.\n"
        "6. g H = 100 => 10 H = 100 => H = 10 m."
    ),
    tip="Brilliant shortcut: Treat the second half as a separate throw starting with speed v_half! Δh = v_half² / (2g) = 100/20 = 5 m. Since Δh = H/2, total H = 2 × 5 = 10 m!",
    why_wrong="5 m is the height of the second half, not the total maximum height."
))

# Q364 - Medium
qs.append(make_motion_q(
    num=364,
    question="A person throws balls into the air vertically at regular intervals of 2 seconds. What must be the speed of throw so that more than 2 balls are in the air at any time? (take g = 10 m/s²)",
    options={
        "A": "u > 20 m/s",
        "B": "u > 10 m/s",
        "C": "u > 30 m/s",
        "D": "u > 40 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="To have more than 2 balls in the air, the total time of flight T of each ball must exceed 2 intervals: T > 2 × 2 s = 4 s. Since T = 2u/g, 2u/10 > 4 => u > 20 m/s.",
    given="Interval between throws = 2 s, more than 2 balls in the air, g = 10 m/s².",
    formula="T = 2u / g > 2 × Δt",
    steps=(
        "1. Balls are thrown at t = 0 s, t = 2 s, t = 4 s...\n"
        "2. For more than 2 balls to be in the air simultaneously, the first ball must still be in the air when the third ball is launched at t = 4 s.\n"
        "3. This requires the total time of flight T to be greater than 4 seconds: T > 4 s.\n"
        "4. Time of flight: T = 2u / g = 2u / 10 = u / 5.\n"
        "5. u / 5 > 4 => u > 20 m/s."
    ),
    tip="Condition for n balls in air: Total time of flight T > (n - 1) × interval.",
    why_wrong="u > 10 m/s gives T = 2 s, so each ball lands just as the next is thrown (only 1 ball in the air)."
))

# Q365 - Medium
qs.append(make_motion_q(
    num=365,
    question="A body is projected vertically upwards with a velocity of 98 m/s. The ratio of times taken by it to attain half of its maximum height while ascending and descending is: (take g = 9.8 m/s²)",
    options={
        "A": "(√2 - 1) / (√2 + 1)",
        "B": "1 / √2",
        "C": "(2 - √2) / (2 + √2)",
        "D": "1 / 2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="Time to peak is T = u/g. At h = H/2, distance from peak is H/2, so time from peak is t' = √(2(H/2)/g) = T / √2. Ascending time t₁ = T - T/√2 = T(1 - 1/√2). Descending time t₂ = T + T/√2 = T(1 + 1/√2). Ratio = (1 - 1/√2) / (1 + 1/√2) = (√2 - 1) / (√2 + 1).",
    given="u = 98 m/s, g = 9.8 m/s², height = H/2.",
    formula="t₁ = T(1 - 1/√2); t₂ = T(1 + 1/√2) => t₁ / t₂ = (√2 - 1) / (√2 + 1)",
    steps=(
        "1. Time to reach the apex: T = u / g = 98 / 9.8 = 10 s.\n"
        "2. At maximum height H, velocity is 0.\n"
        "3. The time taken to fall from apex H to H/2 is: Δt = √(2(H/2)/g) = √(H/g) = T / √2.\n"
        "4. By symmetry, the ascending time to reach H/2 is: t₁ = T - Δt = T(1 - 1/√2).\n"
        "5. The descending time from launch to reach H/2 is: t₂ = T + Δt = T(1 + 1/√2).\n"
        "6. Ratio t₁ / t₂ = (1 - 1/√2) / (1 + 1/√2) = (√2 - 1) / (√2 + 1)."
    ),
    tip="Use symmetry about the peak: t₁ = T - Δt and t₂ = T + Δt, where Δt = T/√2 for H/2!",
    why_wrong="1 / √2 is the ratio of peak time to Δt."
))

# Q366 - Medium
qs.append(make_motion_q(
    num=366,
    question="A ball thrown vertically upwards with initial speed u takes time t to return to the ground. If air resistance exerts a constant retarding force f on the ball, which of the following is correct?",
    options={
        "A": "Time of ascent < Time of descent",
        "B": "Time of ascent > Time of descent",
        "C": "Time of ascent = Time of descent",
        "D": "Maximum height is unchanged"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion under gravity and sign conventions",
    concept="During ascent, gravity and air resistance both act downwards: a_up = g + f/m. During descent, gravity acts down and air resistance acts up: a_down = g - f/m. Since a_up > a_down, time of ascent t_up < t_down.",
    given="Constant air resistance retarding force f.",
    formula="a_up = g + f/m; a_down = g - f/m; t = √(2h / a)",
    steps=(
        "1. On the upward journey, both gravity (mg) and air resistance (f) act downwards.\n"
        "   Total acceleration: a_up = g + f/m.\n"
        "2. On the downward journey, gravity acts downwards while air resistance acts upwards.\n"
        "   Total acceleration: a_down = g - f/m.\n"
        "3. Since a_up > a_down, the upward journey experiences greater deceleration than the downward acceleration.\n"
        "4. Since height H is the same, time t = √(2H / a) is shorter when acceleration is larger.\n"
        "5. Therefore, Time of ascent < Time of descent (t_up < t_down)."
    ),
    tip="NEET Favorite Conceptual Question: With air drag, t_ascent < t_descent and v_impact < v_projection!",
    why_wrong="Option B is the reverse; larger acceleration means faster change in velocity and shorter time."
))

# Q367 - Hard
qs.append(make_motion_q(
    num=367,
    question="A rocket is launched vertically from the surface of the Earth. It moves with a constant upward acceleration of 20 m/s² for 30 s, after which its fuel is completely consumed. How long after launch does the rocket return to the ground? (take g = 10 m/s²)",
    options={
        "A": "150 s",
        "B": "120 s",
        "C": "90 s",
        "D": "180 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="Stage 1: t₁ = 30 s, v₁ = 20×30 = 600 m/s, h₁ = 1/2(20)(900) = 9000 m. Stage 2 + 3 (free fall under gravity from h₁ with u = 600 m/s): -9000 = 600 t₂ - 5 t₂² => 5t₂² - 600t₂ - 9000 = 0 => t₂² - 120t₂ - 1800 = 0 => (t₂ - 133.something wait, let's solve carefully).",
    given="a = 20 m/s², t₁ = 30 s, g = 10 m/s².",
    formula="h₁ = 9000 m, v₁ = 600 m/s. -9000 = 600t₂ - 5t₂² => t₂² - 120t₂ - 1800 = 0 wait, roots: [120 ± √(14400 + 7200)]/2 = [120 ± √21600]/2. Not clean integer. Let's make t₁ = 10 s, a = 10 m/s² or similar!",
    steps=(
        "Let's choose: a = 10 m/s², t₁ = 10 s => v₁ = 100 m/s, h₁ = 500 m.\n"
        "Then -500 = 100 t₂ - 5 t₂² => 5t₂² - 100t₂ - 500 = 0 => t₂² - 20t₂ - 100 = 0 (still not factorable).\n"
        "Let's make: a = 20 m/s², t₁ = 10 s => v₁ = 200 m/s, h₁ = 1000 m.\n"
        "What if h₁ = 1200 m, v₁ = 40 m/s? -1200 = 40t - 5t² => t² - 8t - 240 = 0 => (t - 20)(t + 12) = 0! t₂ = 20 s!\n"
        "Let's construct clean parameters: Rocket accelerates at 4 m/s² for 10 s: v₁ = 40 m/s, h₁ = 1/2(4)(100) = 200 m. Then -200 = 40t₂ - 5t₂² => t₂² - 8t₂ - 40 = 0 (not clean).\n"
        "What about: Rocket accelerates at 5 m/s² for 20 s => v₁ = 100 m/s, h₁ = 1000 m. -1000 = 100t - 5t² => t² - 20t - 200 = 0.\n"
        "Let's make: a = 2 m/s² for 10 s => v₁ = 20 m/s, h₁ = 100 m. -100 = 20t - 5t² => 5t² - 20t - 100 = 0 => t² - 4t - 20 = 0.\n"
        "How about: from burnout, coast to peak t_coast = v/g = 60 s, then free fall from H_max! If H_max is a perfect square times 5! For example, H_max = 5 × (t_fall)²."
    ),
    tip="Multi-stage rocket with clean integer values.",
    why_wrong="Arithmetic inconsistency."
))
# Let's adjust Q367 cleanly:
qs[-1]['question'] = "A rocket is launched vertically upwards with a constant net acceleration of 10 m/s². Its fuel is exhausted after 20 s. What is the total time from launch until the rocket reaches its maximum height? (take g = 10 m/s²)"
qs[-1]['options'] = {"A": "40 s", "B": "30 s", "C": "20 s", "D": "50 s"}
qs[-1]['correct_opt'] = "A"
qs[-1]['correctAnswer'] = "A"
qs[-1]['correctIndex'] = 0
qs[-1]['difficulty'] = "Medium"
qs[-1]['concept'] = "Total time to peak = powered time + coasting time under gravity."
qs[-1]['formula'] = "t_total = t_burn + v_burn / g"
qs[-1]['steps'] = (
    "1. Powered stage: a = 10 m/s², t_burn = 20 s.\n"
    "2. Velocity at burnout: v_burn = a × t_burn = 10 × 20 = 200 m/s.\n"
    "3. Coasting stage: The rocket decelerates under gravity (g = 10 m/s²) from 200 m/s to 0 m/s.\n"
    "4. Time of coasting: t_coast = v_burn / g = 200 / 10 = 20 s.\n"
    "5. Total time to reach maximum height: T = t_burn + t_coast = 20 s + 20 s = 40 s."
)

# Q368 - Hard
qs.append(make_motion_q(
    num=368,
    question="A ball is thrown vertically upwards from the ground. It is at a height of 100 m at two times t₁ and t₂ such that t₂ - t₁ = 4 s. What was the initial velocity of projection? (take g = 10 m/s²)",
    options={
        "A": "20√5 m/s",
        "B": "10√29 m/s",
        "C": "30 m/s",
        "D": "50 m/s"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="For h = 100 m: (t₂ - t₁)² = (t₁ + t₂)² - 4 t₁ t₂. We know t₁ + t₂ = 2u/g and t₁ t₂ = 2h/g. Thus 4² = (2u/g)² - 8h/g => 16 = 4u²/100 - 800/10 = u²/25 - 80 => u²/25 = 96 => u² = 2400 => wait, 96 × 25 = 2400 => u = √2400 = 20√6. Wait, let's pick h = 60 m: 8h/g = 48 => u²/25 - 48 = 16 => u²/25 = 64 => u² = 1600 => u = 40 m/s!",
    given="Height h, time difference between crossings t₂ - t₁ = 4 s.",
    formula="(t₂ - t₁)² = (2u / g)² - 8h / g",
    steps=(
        "Let's choose h = 60 m and t₂ - t₁ = 4 s so that u = 40 m/s cleanly!"
    ),
    tip="Use the discriminant relation: (Δt)² = (2u/g)² - 8h/g.",
    why_wrong="Arithmetic error."
))
# Let's write Q368 with clean numbers:
qs[-1]['question'] = "A ball is thrown vertically upwards from the ground. It passes a height of 60 m twice, with an interval of 4 s between the two passages. What was the initial speed of projection? (take g = 10 m/s²)"
qs[-1]['options'] = {"A": "40 m/s", "B": "30 m/s", "C": "50 m/s", "D": "45 m/s"}
qs[-1]['correct_opt'] = "A"
qs[-1]['correctAnswer'] = "A"
qs[-1]['correctIndex'] = 0
qs[-1]['concept'] = "From 1/2 gt² - ut + h = 0, the difference of roots is Δt = √( (2u/g)² - 8h/g )."
qs[-1]['formula'] = "(Δt)² = (2u / g)² - 8h / g"
qs[-1]['steps'] = (
    "1. The height equation is 5t² - ut + 60 = 0 => t² - (u/5)t + 12 = 0.\n"
    "2. Sum of roots: t₁ + t₂ = u / 5.\n"
    "3. Product of roots: t₁ t₂ = 12.\n"
    "4. Difference of roots: (t₂ - t₁)² = (t₁ + t₂)² - 4 t₁ t₂.\n"
    "5. Given t₂ - t₁ = 4 s: (4)² = (u / 5)² - 4(12).\n"
    "6. 16 = u² / 25 - 48 => u² / 25 = 16 + 48 = 64.\n"
    "7. u² = 64 × 25 = 1600 => u = √1600 = 40 m/s."
)

# Q369 - Hard
qs.append(make_motion_q(
    num=369,
    question="A ball is dropped from a balloon rising with constant velocity 10 m/s at a height of 40 m above the ground. How long does the ball take to reach the ground? (take g = 10 m/s²)",
    options={
        "A": "4 s",
        "B": "2 s",
        "C": "3 s",
        "D": "5 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="Ball inherits upward velocity u = +10 m/s. Origin at balloon: s = -40 m. -40 = 10t - 5t² => 5t² - 10t - 40 = 0 => t² - 2t - 8 = 0 => (t - 4)(t + 2) = 0 => t = 4 s.",
    given="u = +10 m/s (upward), displacement to ground s = -40 m, g = 10 m/s².",
    formula="s = u t - (1/2) g t²",
    steps=(
        "1. The ball is released from the rising balloon, so its initial velocity is u = +10 m/s (upward).\n"
        "2. The ground is 40 m below the point of release, so displacement is s = -40 m.\n"
        "3. Acceleration is a = -g = -10 m/s².\n"
        "4. Apply displacement equation: -40 = 10t - (1/2)(10)t² = 10t - 5t².\n"
        "5. Rearrange: 5t² - 10t - 40 = 0 => t² - 2t - 8 = 0.\n"
        "6. Factor: (t - 4)(t + 2) = 0.\n"
        "7. Discard negative root: t = 4 s."
    ),
    tip="The ball initially rises to 45 m (1 second after release), then takes 3 seconds to fall from 45 m to the ground. Total time = 1 + 3 = 4 s!",
    why_wrong="2 s ignores the height and only considers the rise time."
))

# Q370 - Hard
qs.append(make_motion_q(
    num=370,
    question="A body is projected vertically upwards with speed u. If it travels a distance s in the last second of its upward journey, then s is equal to:",
    options={
        "A": "g / 2",
        "B": "g",
        "C": "u - g / 2",
        "D": "u - g"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="By time reversal symmetry, the last second of the upward journey is identical in distance to the first second of the downward fall from rest: s = 1/2 g (1)² = g/2.",
    given="Last second of ascent before reaching the peak.",
    formula="s = (1/2) g (1)² = g / 2",
    steps=(
        "1. At the peak of upward motion, velocity is v = 0.\n"
        "2. Consider the motion reversed in time: falling from rest from the peak.\n"
        "3. In the first second of fall from rest, distance covered is: d = (1/2) g (1)² = g / 2.\n"
        "4. By symmetry, the distance covered in the last second of ascent to the peak is exactly equal to the distance covered in the first second of descent from the peak.\n"
        "5. Therefore, s = g / 2 (which is 4.9 m for g = 9.8 m/s², or 5 m for g = 10 m/s²)."
    ),
    tip="Fascinating NEET Concept: The distance traveled in the LAST second of ascent is INDEPENDENT of the initial velocity u! It is ALWAYS g/2 (~5 m).",
    why_wrong="Option C mistakenly assumes u affects the final second of ascent."
))

# Q371 - Hard
qs.append(make_motion_q(
    num=371,
    question="A ball is thrown vertically upwards. It crosses a point P with speed v₁ and a higher point Q with speed v₂. If the distance between P and Q is h, what is the distance from Q to the maximum height reached by the ball?",
    options={
        "A": "v₂² h / (v₁² - v₂²)",
        "B": "v₁² h / (v₁² - v₂²)",
        "C": "(v₁² - v₂²) / (2g)",
        "D": "v₂² / g"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="Between P and Q: v₂² = v₁² - 2gh => 2g = (v₁² - v₂²)/h. From Q to max height: 0 = v₂² - 2g H' => H' = v₂² / (2g). Substitute 2g to get H' = v₂² h / (v₁² - v₂²).",
    given="Speeds v₁ at P, v₂ at Q, distance PQ = h.",
    formula="H' = v₂² / (2g); 2g = (v₁² - v₂²) / h",
    steps=(
        "1. Between point P and point Q: v₂² = v₁² - 2gh => 2gh = v₁² - v₂² => 2g = (v₁² - v₂²) / h.\n"
        "2. From point Q to the highest point (where speed is 0), let the distance be H'.\n"
        "3. Using 3rd equation from Q to peak: 0 = v₂² - 2g H' => H' = v₂² / (2g).\n"
        "4. Substitute 2g = (v₁² - v₂²) / h:\n"
        "   H' = v₂² / [(v₁² - v₂²) / h] = v₂² h / (v₁² - v₂²)."
    ),
    tip="Notice that g cancels completely! The result is expressed purely in terms of given quantities h, v₁, and v₂.",
    why_wrong="Option B puts v₁² in the numerator, which would represent the distance from P to the peak."
))

# Q372 - Hard
qs.append(make_motion_q(
    num=372,
    question="A particle is projected vertically upwards from the ground. If t₁ is the time taken to rise to maximum height and t₂ is the time taken to fall back to the ground from maximum height in the presence of air resistance, then:",
    options={
        "A": "t₁ < t₂",
        "B": "t₁ > t₂",
        "C": "t₁ = t₂",
        "D": "Cannot be predicted without knowing the mass"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="Ascent deceleration is (g + a_drag). Descent acceleration is (g - a_drag). Since acceleration during ascent is greater, ascent time is smaller: t₁ < t₂.",
    given="Motion under gravity with air resistance.",
    formula="a_up = g + a_drag; a_down = g - a_drag; t = √(2h / a)",
    steps=(
        "1. During ascent, air drag opposes upward velocity, acting downward alongside gravity: a_up = g + a_drag.\n"
        "2. During descent, air drag opposes downward velocity, acting upward against gravity: a_down = g - a_drag.\n"
        "3. Clearly, a_up > a_down.\n"
        "4. Both phases cover the same vertical distance H.\n"
        "5. Since t = √(2H / a), larger acceleration means smaller time.\n"
        "6. Therefore, t₁ < t₂ (time of ascent is strictly less than time of descent)."
    ),
    tip="Air drag always opposes motion, making ascent quicker (harder braking) and descent slower (cushioned fall).",
    why_wrong="t₁ = t₂ holds only in vacuum (no air drag)."
))

# Q373 - Hard
qs.append(make_motion_q(
    num=373,
    question="A stone is thrown vertically upwards with initial velocity u. If it attains a velocity u/2 at height h₁, and velocity u/3 at height h₂, the ratio h₁ / h₂ is:",
    options={
        "A": "27 / 32",
        "B": "3 / 4",
        "C": "9 / 16",
        "D": "8 / 9"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="v² = u² - 2gh => 2gh = u² - v². At h₁: 2gh₁ = u² - u²/4 = 3u²/4. At h₂: 2gh₂ = u² - u²/9 = 8u²/9. Ratio h₁ / h₂ = (3/4) / (8/9) = 27 / 32.",
    given="Speeds u/2 at h₁, u/3 at h₂.",
    formula="2gh = u² - v² => h₁ / h₂ = (u² - (u/2)²) / (u² - (u/3)²)",
    steps=(
        "1. For height h₁: (u/2)² = u² - 2gh₁ => u²/4 = u² - 2gh₁ => 2gh₁ = 3u² / 4.\n"
        "2. For height h₂: (u/3)² = u² - 2gh₂ => u²/9 = u² - 2gh₂ => 2gh₂ = 8u² / 9.\n"
        "3. Taking the ratio:\n"
        "   h₁ / h₂ = (3u² / 4) / (8u² / 9) = (3/4) × (9/8) = 27 / 32."
    ),
    tip="Direct fraction math: (1 - 1/4) / (1 - 1/9) = (3/4) / (8/9) = 27/32.",
    why_wrong="3/4 is just the numerator fraction."
))

# Q374 - Hard
qs.append(make_motion_q(
    num=374,
    question="A stone is dropped from a cliff of height 180 m. Simultaneously, another stone is thrown upwards from the base of the cliff with speed 60 m/s. At what time and at what height from the base do the two stones meet? (take g = 10 m/s²)",
    options={
        "A": "t = 3 s, height = 135 m",
        "B": "t = 3 s, height = 45 m",
        "C": "t = 2 s, height = 100 m",
        "D": "t = 4 s, height = 140 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="Relative acceleration = 0. Relative velocity = 60 m/s. Meeting time t = 180 / 60 = 3 s. Height of upward stone from base: h = ut - 1/2 gt² = 60(3) - 5(9) = 180 - 45 = 135 m.",
    given="Separation = 180 m, u₁ = 0, u₂ = 60 m/s upwards, g = 10 m/s².",
    formula="t = H / u; h_base = u t - (1/2) g t²",
    steps=(
        "1. Relative acceleration between the two stones: a_rel = g - g = 0.\n"
        "2. Relative speed of approach: v_rel = 60 m/s + 0 = 60 m/s.\n"
        "3. Time of collision: t = Distance / v_rel = 180 m / 60 m/s = 3 s.\n"
        "4. Height of the meeting point from the ground (base of cliff):\n"
        "   h_base = u t - (1/2) g t² = 60(3) - (1/2)(10)(3)² = 180 - 45 = 135 m.\n"
        "5. (Check from top: distance fallen by dropped stone = 1/2 × 10 × 9 = 45 m. Height from base = 180 - 45 = 135 m. Matches!)."
    ),
    tip="Meeting time = Total height / Speed of upward stone. Always check height measured from ground vs from cliff top!",
    why_wrong="45 m is the distance from the top of the cliff, not from the base."
))

# Q375 - Hard
qs.append(make_motion_q(
    num=375,
    question="A ball is thrown vertically upwards with an initial speed u. During its flight, it has speed v at height h. If the total time for which the speed of the ball is less than or equal to v is Δt, then Δt is equal to:",
    options={
        "A": "2v / g",
        "B": "v / g",
        "C": "2u / g",
        "D": "2 √(u² - v²) / g"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion under gravity and sign conventions",
    concept="The speed is v at time t₁ on the way up (v = u - gt₁) and at time t₂ on the way down (-v = u - gt₂). Between t₁ and t₂, the speed decreases to 0 at the peak and increases back to v. The duration is t₂ - t₁ = 2v / g.",
    given="Initial speed u, speed threshold v.",
    formula="v_up = +v at t₁, v_down = -v at t₂ => Δt = t₂ - t₁ = 2v / g",
    steps=(
        "1. On the upward journey, the ball reaches speed v at time t₁: v = u - g t₁ => t₁ = (u - v) / g.\n"
        "2. On the downward journey, the ball again has speed v (velocity -v) at time t₂: -v = u - g t₂ => t₂ = (u + v) / g.\n"
        "3. For all times between t₁ and t₂, the speed |v(t)| is strictly less than v (reaching 0 at the peak).\n"
        "4. The duration of this time interval is: Δt = t₂ - t₁ = [(u + v) / g] - [(u - v) / g] = 2v / g."
    ),
    tip="Fascinating result: The time spent with speed ≤ v depends ONLY on v and g: Δt = 2v / g! Initial speed u does not affect Δt at all!",
    why_wrong="v / g is only the time from speed v to the apex (where speed is 0)."
))

# Save Topic 16 final questions to file
with open('scripts/part3_topic16_final.json', 'w') as f:
    json.dump(qs, f, indent=2)

print(f'Generated Topic 16 final: {len(qs)} questions')
