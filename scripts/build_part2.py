import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 7: Acceleration and retardation (Q126 - Q146)
# 5 Easy, 11 Medium, 5 Hard (Total 21)
# ==============================================================================

# Q126 (Easy)
qs.append(make_motion_q(
    num=126,
    question="Acceleration is defined mathematically as:",
    options={
        "A": "Rate of change of position with respect to time",
        "B": "Rate of change of velocity with respect to time",
        "C": "Rate of change of speed with respect to time",
        "D": "Rate of change of displacement with respect to distance"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Acceleration and retardation",
    concept="Acceleration is a vector quantity defined as the rate of change of the velocity vector with respect to time: a⃗ = dv⃗/dt.",
    given="Definition of acceleration.",
    formula="a⃗ = dv⃗/dt = lim_{Δt -> 0} (Δv⃗ / Δt)",
    steps="1. Velocity is the rate of change of position (v⃗ = dr⃗/dt).\n2. Acceleration is the rate of change of velocity: a⃗ = dv⃗/dt.\n3. Because velocity is a vector, acceleration can arise from a change in magnitude (speed), a change in direction, or both.\n4. Its SI unit is m/s² and its dimensional formula is [M⁰ L T⁻²].",
    tip="Acceleration is rate of change of VELOCITY, not speed! In uniform circular motion, speed is constant but acceleration is non-zero because direction changes.",
    why_wrong="Option A is velocity. Option C is tangential acceleration only, neglecting direction change. Option D is a dimensionless ratio."
))

# Q127 (Easy)
qs.append(make_motion_q(
    num=127,
    question="A car accelerates uniformly along a straight road from 18 km/h to 72 km/h in 5 seconds. What is the magnitude of its acceleration?",
    options={
        "A": "3 m/s²",
        "B": "5.4 m/s²",
        "C": "10.8 m/s²",
        "D": "15 m/s²"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration and retardation",
    concept="Convert speeds from km/h to m/s, then apply definition a = (v - u) / t.",
    given="u = 18 km/h = 5 m/s, v = 72 km/h = 20 m/s, t = 5 s.",
    formula="a = (v - u) / t",
    steps="1. Convert initial speed: u = 18 * (5/18) = 5 m/s.\n2. Convert final speed: v = 72 * (5/18) = 20 m/s.\n3. Change in velocity: Δv = 20 - 5 = 15 m/s.\n4. Acceleration: a = Δv / t = 15 m/s / 5 s = 3 m/s².\n5. Therefore, the acceleration is 3 m/s².",
    tip="Always convert km/h to m/s first: 18 km/h = 5 m/s and 72 km/h = 20 m/s. Then a = (20 - 5)/5 = 3 m/s².",
    why_wrong="Option B forgets to convert units ((72 - 18)/10 = 5.4). Option C uses 54/5. Option D is Δv."
))

# Q128 (Easy)
qs.append(make_motion_q(
    num=128,
    question="Which of the following statements about retardation is strictly correct?",
    options={
        "A": "Retardation is always negative in all coordinate systems.",
        "B": "Retardation means acceleration opposes the direction of velocity.",
        "C": "Retardation occurs whenever acceleration is negative, regardless of the sign of velocity.",
        "D": "Retardation increases the speed of an object moving in the negative direction."
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Acceleration and retardation",
    concept="Retardation (deceleration) is the decrease of speed (|v|) with time. This occurs if and only if the acceleration vector is directed opposite to the velocity vector (v * a < 0).",
    given="Definition of retardation.",
    formula="Retardation <=> d|v|/dt < 0 <=> v⃗ · a⃗ < 0.",
    steps="1. Speed is the magnitude |v| of velocity.\n2. For speed to decrease, acceleration must push against the direction of motion.\n3. Thus, acceleration opposes velocity.\n4. If v is positive, retardation requires a to be negative.\n5. If v is negative, retardation requires a to be POSITIVE!\n6. Therefore, retardation does NOT simply mean 'a is negative'; it means acceleration opposes velocity.",
    tip="Crucial NEET concept: If a car moves in the -x direction (v < 0), a positive acceleration (a > 0) causes it to slow down (retardation)!",
    why_wrong="Option A is false because if v < 0, retardation has a > 0. Option C is false because if v < 0 and a < 0, the car speeds up. Option D contradicts the definition of retardation."
))

# Q129 (Easy)
qs.append(make_motion_q(
    num=129,
    question="The velocity of a particle at any time t is given by v = 20 - 4t (in m/s). What is its retardation?",
    options={
        "A": "4 m/s²",
        "B": "-4 m/s²",
        "C": "20 m/s²",
        "D": "5 m/s²"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration and retardation",
    concept="Acceleration is a = dv/dt = -4 m/s². Retardation is defined as the magnitude of deceleration (rate of decrease of speed), so Retardation = -a = +4 m/s².",
    given="v(t) = 20 - 4t m/s.",
    formula="a = dv/dt = -4 m/s²; Retardation = -a = 4 m/s².",
    steps="1. Differentiate velocity to find acceleration:\n   a = dv/dt = d(20 - 4t)/dt = -4 m/s².\n2. Since the particle is moving in the positive direction (v > 0 for t < 5 s), the negative acceleration opposes motion, causing it to slow down.\n3. Retardation is defined as the negative of acceleration (the rate at which speed decreases):\n   Retardation = -a = -(-4) = 4 m/s².\n4. Therefore, the retardation is 4 m/s².",
    tip="'Retardation' already implies slowing down; its value is stated as a positive magnitude (4 m/s²). Stating '-4 m/s² retardation' is a double negative!",
    why_wrong="Option B is the acceleration (which is -4 m/s²), whereas retardation is 4 m/s². Option C is initial velocity. Option D is the time to stop (20/4 = 5 s)."
))

# Q130 (Easy)
qs.append(make_motion_q(
    num=130,
    question="A ball thrown vertically upwards reaches its maximum height and begins to fall back down. At the highest point of its trajectory, which of the following is true?",
    options={
        "A": "Both velocity and acceleration are zero",
        "B": "Velocity is zero, but acceleration is non-zero and directed downwards",
        "C": "Velocity is non-zero, but acceleration is zero",
        "D": "Both velocity and acceleration are non-zero"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Acceleration and retardation",
    concept="At the zenith of vertical projectile motion, instantaneous velocity is momentarily zero (turning point), but gravitational force mg continues to act downward uninterrupted, so acceleration is g downwards.",
    given="Highest point of vertical throw.",
    formula="v = 0, a = -g = 9.8 m/s² downwards.",
    steps="1. At the highest point, the ball momentarily reverses its direction of motion from upward to downward.\n2. Therefore, its instantaneous velocity is zero: v = 0.\n3. However, Earth's gravity still pulls on the ball with force F = mg downwards.\n4. By Newton's second law, a = F/m = -g downwards (approx 9.8 m/s²).\n5. If acceleration were also zero, the ball would remain suspended in mid-air forever!\n6. Hence, velocity is zero while acceleration is non-zero and directed downwards.",
    tip="NEET Favorite: A body CAN have zero velocity and non-zero acceleration simultaneously (e.g. at the highest point of throw, or at extreme positions of SHM).",
    why_wrong="Option A would mean the ball floats in the air forever. Option C reverses the quantities. Option D fails because vertical velocity must stop to reverse."
))

# Q131 (Medium)
qs.append(make_motion_q(
    num=131,
    question="The displacement of a particle moving along a straight line is given by x = 2t³ - 9t² + 12t + 4 (in meters). What is the acceleration of the particle at the instant when its velocity is zero for the first time?",
    options={
        "A": "-6 m/s²",
        "B": "+6 m/s²",
        "C": "0 m/s²",
        "D": "-12 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="First find the instants when velocity is zero by solving v(t) = dx/dt = 0. Then substitute the smaller time (first time) into the acceleration expression a(t) = dv/dt.",
    given="x(t) = 2t³ - 9t² + 12t + 4.",
    formula="v = dx/dt = 6t² - 18t + 12 = 0; a = dv/dt = 12t - 18.",
    steps="1. Find velocity:\n   v(t) = dx/dt = 6t² - 18t + 12 = 6(t² - 3t + 2) = 6(t - 1)(t - 2).\n2. Velocity is zero at t = 1 s and t = 2 s.\n   The first time velocity is zero is t = 1 s.\n3. Find acceleration:\n   a(t) = dv/dt = 12t - 18.\n4. Substitute t = 1 s:\n   a(1) = 12(1) - 18 = -6 m/s².\n5. Therefore, the acceleration at this instant is -6 m/s².",
    tip="At t = 1 s, a = -6 m/s² (particle is at a local maximum of x). At t = 2 s, a = +6 m/s² (local minimum).",
    why_wrong="Option B is the acceleration at the second stopping instant (t = 2 s). Option C is when t = 1.5 s. Option D is an arithmetic error."
))

# Q132 (Medium)
qs.append(make_motion_q(
    num=132,
    question="A body moving along the x-axis has its position related to time by t = α x² + β x, where α and β are positive constants. What is the retardation of the body expressed in terms of its instantaneous velocity v?",
    options={
        "A": "2α v³",
        "B": "2α v²",
        "C": "α v³",
        "D": "2β v³"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="Differentiate t with respect to x to find 1/v = dt/dx, then differentiate velocity using the chain rule to find acceleration.",
    given="t = α x² + β x.",
    formula="dt/dx = 2α x + β = 1/v => v = (2α x + β)⁻¹; a = v (dv/dx).",
    steps="1. Differentiate t with respect to x:\n   dt/dx = 2α x + β.\n2. Since v = dx/dt = 1 / (dt/dx):\n   v = (2α x + β)⁻¹.\n3. Differentiate v with respect to x using the chain rule:\n   dv/dx = -(2α x + β)⁻² * (2α) = -2α (2α x + β)⁻² = -2α v².\n4. Compute acceleration using a = v (dv/dx):\n   a = v * (-2α v²) = -2α v³.\n5. The negative sign denotes retardation.\n6. Therefore, the retardation (magnitude of deceleration) is 2α v³.",
    tip="Top NEET Classic Question! If t = αx² + βx, then v = (2αx + β)⁻¹ and Retardation = 2α v³.",
    why_wrong="Option B has power v² instead of v³. Option C misses the factor of 2. Option D uses β instead of α."
))

# Q133 (Medium)
qs.append(make_motion_q(
    num=133,
    question="A car moves along a straight line such that its velocity decreases uniformly from 25 m/s to 15 m/s while covering a distance of 80 m. What is the magnitude of its retardation, and how much further will it travel before stopping with the same retardation?",
    options={
        "A": "Retardation = 2.5 m/s², Extra distance = 45 m",
        "B": "Retardation = 5.0 m/s², Extra distance = 30 m",
        "C": "Retardation = 2.5 m/s², Extra distance = 60 m",
        "D": "Retardation = 1.25 m/s², Extra distance = 90 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="Apply v² = u² - 2as to find retardation a, then apply v_final² = u'² - 2as' to find the additional stopping distance.",
    given="u = 25 m/s, v = 15 m/s, s = 80 m.",
    formula="v² = u² - 2as => a = (u² - v²) / (2s); Extra distance s' = v² / (2a).",
    steps="1. Find retardation from the first segment:\n   15² = 25² - 2a(80)\n   225 = 625 - 160a\n   160a = 625 - 225 = 400\n   a = 400 / 160 = 2.5 m/s².\n2. Now the car is at 15 m/s and brakes to rest (v_final = 0):\n   0² = 15² - 2(2.5) s'\n   0 = 225 - 5 s'\n   5 s' = 225 => s' = 225 / 5 = 45 m.\n3. Therefore, Retardation = 2.5 m/s² and Extra distance = 45 m.",
    tip="Check total distance from 25 m/s to rest: s_total = 25² / (2 * 2.5) = 625 / 5 = 125 m. Extra distance = 125 - 80 = 45 m!",
    why_wrong="Option B overestimates retardation. Option C and D give incorrect extra distances."
))

# Q134 (Medium)
qs.append(make_motion_q(
    num=134,
    question="A particle starts from rest and moves along a straight line with an acceleration that increases linearly with time as a = 3t (in m/s²). What is the velocity of the particle after 4 seconds?",
    options={
        "A": "24 m/s",
        "B": "12 m/s",
        "C": "48 m/s",
        "D": "6 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="For non-uniform acceleration, velocity is obtained by integrating acceleration with respect to time: v = u + ∫ a dt.",
    given="u = 0, a(t) = 3t, t = 4 s.",
    formula="v(t) = ∫_0^t a dt = ∫_0^4 3t dt.",
    steps="1. Integrate acceleration:\n   v(t) = ∫_0^t 3t dt = [ (3/2) t² ]_0^t = (3/2) t².\n2. Substitute t = 4 s:\n   v(4) = (3/2) * (4²) = (3/2) * 16 = 3 * 8 = 24 m/s.\n3. Therefore, the velocity after 4 seconds is 24 m/s.",
    tip="Common trap: Do not use v = a*t = 3(4)*4 = 48! Acceleration is varying, so you must integrate: v = (1/2) * 3 * t² = 24 m/s.",
    why_wrong="Option B divides by 4. Option C simply multiplies a(4) * 4 = 12 * 4 = 48 (trap!). Option D is 24 / 4."
))

# Q135 (Medium)
qs.append(make_motion_q(
    num=135,
    question="The acceleration of a particle is given by a = 4 - 2t (in m/s²). If the particle starts from rest at t = 0, what is the maximum velocity attained by the particle?",
    options={
        "A": "4 m/s",
        "B": "8 m/s",
        "C": "2 m/s",
        "D": "16 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="Velocity is maximum when acceleration becomes zero: a(t) = 0. Find this time and integrate acceleration up to that time.",
    given="a(t) = 4 - 2t, u = 0.",
    formula="a(t) = 0 => 4 - 2t = 0 => t = 2 s; v_max = ∫_0^2 (4 - 2t) dt.",
    steps="1. Find the instant when acceleration changes from positive to negative (turning point of velocity):\n   a(t) = 4 - 2t = 0 => 2t = 4 => t = 2 s.\n2. Before t = 2 s, a > 0, so velocity is increasing.\n   After t = 2 s, a < 0, so velocity decreases.\n3. Therefore, maximum velocity occurs at t = 2 s.\n4. Integrate acceleration from 0 to 2 s:\n   v_max = ∫_0^2 (4 - 2t) dt = [ 4t - t² ]_0^2 = 4(2) - 2² = 8 - 4 = 4 m/s.\n5. Therefore, the maximum velocity attained is 4 m/s.",
    tip="v_max occurs when dv/dt = a = 0. Area of the triangle on the a-t graph from 0 to 2 s is (1/2)(2)(4) = 4 m/s!",
    why_wrong="Option B forgets to subtract t² (gives 4*2 = 8). Option C is half of v_max. Option D is 4²."
))

# Q136 (Medium)
qs.append(make_motion_q(
    num=136,
    question="A bullet enters a wooden plank with a velocity of 100 m/s and emerges with a velocity of 60 m/s. If the plank provides a uniform resistive retardation, what is the velocity of the bullet after traversing the first half of the thickness of the plank?",
    options={
        "A": "20√17 m/s ≈ 82.46 m/s",
        "B": "80 m/s",
        "C": "70 m/s",
        "D": "40√2 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="For constant retardation across distance d, the velocity at the spatial midpoint d/2 is the root-mean-square: v_mid = √((u² + v²) / 2).",
    given="u = 100 m/s, v = 60 m/s.",
    formula="v_mid = √((u² + v²) / 2)",
    steps="1. Using v² = u² - 2ad across the entire thickness d:\n   60² = 100² - 2ad => 2ad = 10000 - 3600 = 6400.\n2. Across the first half of the thickness (d/2):\n   v_mid² = u² - 2a(d/2) = u² - ad.\n3. Since ad = 6400 / 2 = 3200:\n   v_mid² = 10000 - 3200 = 6800.\n   (Notice this equals (100² + 60²) / 2 = (10000 + 3600)/2 = 13600/2 = 6800!).\n4. Compute v_mid:\n   v_mid = √6800 = √(400 * 17) = 20√17 m/s.\n5. Since √17 ≈ 4.123:\n   v_mid ≈ 20 * 4.123 = 82.46 m/s.\n6. Hence, Option A is the exact answer.",
    tip="At the spatial midpoint of any uniformly retarding medium, v_mid = √((u² + v²)/2) = √(6800) = 20√17 m/s ≈ 82.5 m/s. Never take the arithmetic average (80 m/s)!",
    why_wrong="Option B is the arithmetic average (100 + 60)/2 = 80 m/s (common trap!). Option C and D are incorrect guesses."
))

# Q137 (Hard)
qs.append(make_motion_q(
    num=137,
    question="A particle moves along a straight line such that its acceleration is given by a = -k √v, where k is a positive constant and v is velocity. If the initial velocity is v₀ at t = 0, how long does the particle take to come to a complete stop?",
    options={
        "A": "2 √v₀ / k",
        "B": "√v₀ / k",
        "C": "v₀ / (2k)",
        "D": "2 v₀ / k"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration and retardation",
    concept="Separate variables in dv/dt = -k √v and integrate from v₀ to 0.",
    given="dv/dt = -k v^(1/2), v(0) = v₀, v(t_stop) = 0.",
    formula="∫_{v₀}^0 dv / √v = -k ∫_0^{t_stop} dt",
    steps="1. Separate variables:\n   dv / √v = -k dt\n   v^(-1/2) dv = -k dt.\n2. Integrate from v₀ to 0:\n   ∫_{v₀}^0 v^(-1/2) dv = -k ∫_0^{t_stop} dt.\n3. Evaluate the antiderivative of v^(-1/2):\n   [ 2 v^(1/2) ]_{v₀}^0 = -k t_stop\n   0 - 2 √v₀ = -k t_stop\n   -2 √v₀ = -k t_stop.\n4. Solve for stopping time:\n   t_stop = 2 √v₀ / k.\n5. Therefore, the stopping time is 2 √v₀ / k.",
    tip="Integration with power rule: ∫ v^(-1/2) dv = 2√v. Limits from v₀ to 0 yield Δt = 2√v₀ / k.",
    why_wrong="Option B forgets the factor of 2 from integrating v^(-1/2). Option C and D have wrong dimensions."
))

# Q138 (Hard)
qs.append(make_motion_q(
    num=138,
    question="For the particle in Q137 with a = -k √v and initial velocity v₀, what is the total distance covered before it comes to rest?",
    options={
        "A": "2 v₀^(3/2) / (3k)",
        "B": "v₀^(3/2) / k",
        "C": "v₀² / (2k)",
        "D": "4 v₀^(3/2) / (3k)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration and retardation",
    concept="Use a = v (dv/dx) = -k √v to relate velocity directly to displacement x, then integrate.",
    given="a = v (dv/dx) = -k √v, v = v₀ at x = 0, v = 0 at x = s_total.",
    formula="v (dv/dx) = -k √v => √v dv = -k dx.",
    steps="1. Write acceleration in terms of position:\n   v (dv/dx) = -k v^(1/2).\n2. Divide both sides by v^(1/2) (for v > 0):\n   v^(1/2) dv = -k dx.\n3. Integrate from initial state (x = 0, v = v₀) to rest (x = s, v = 0):\n   ∫_{v₀}^0 v^(1/2) dv = -k ∫_0^s dx.\n4. Evaluate the antiderivative of v^(1/2):\n   [ (2/3) v^(3/2) ]_{v₀}^0 = -k s\n   0 - (2/3) v₀^(3/2) = -k s\n   -(2/3) v₀^(3/2) = -k s.\n5. Solve for total stopping distance s:\n   s = 2 v₀^(3/2) / (3k).\n6. Therefore, the total distance covered is 2 v₀^(3/2) / (3k).",
    tip="Use a = v dv/dx to find stopping distance directly without finding time t first: ∫ √v dv = -k ∫ dx => s = 2 v₀^(3/2) / (3k).",
    why_wrong="Option B misses the factor of 2/3. Option C is for constant acceleration. Option D has 4/3."
))

# Q139 (Hard)
qs.append(make_motion_q(
    num=139,
    question="A body moves in a straight line with an initial velocity of 5 m/s. Its acceleration is given by a = 2v² (in m/s²), where v is velocity. What is its velocity after traveling a distance of 1 meter?",
    options={
        "A": "5 e² m/s",
        "B": "5 e m/s",
        "C": "10 m/s",
        "D": "25 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration and retardation",
    concept="Express acceleration as v (dv/dx) = 2v², simplify to dv/v = 2 dx, and integrate.",
    given="a = 2v², u = 5 m/s, x = 1 m.",
    formula="v (dv/dx) = 2v² => dv / v = 2 dx.",
    steps="1. Substitute a = v (dv/dx):\n   v (dv/dx) = 2v².\n2. Divide both sides by v (v ≠ 0):\n   dv/dx = 2v.\n3. Separate variables:\n   dv / v = 2 dx.\n4. Integrate from x = 0 (v = 5) to x = 1 m (v):\n   ∫_5^v (1/v) dv = 2 ∫_0^1 dx.\n5. Evaluate:\n   ln(v / 5) = 2(1) = 2\n   v / 5 = e²\n   v = 5 e² m/s.\n6. (Since e² ≈ 7.389, v ≈ 36.95 m/s).",
    tip="Whenever a = k v², the spatial derivative dv/dx = kv, which integrates directly to an exponential in x: v = v₀ e^(kx).",
    why_wrong="Option B has power e¹ instead of e². Options C and D assume linear relationships."
))

# Q140 (Hard)
qs.append(make_motion_q(
    num=140,
    question="A particle moving along the x-axis experiences an acceleration given by a = -ω² x. If the particle is released from rest at x = A, what is its speed when it reaches x = A / 2?",
    options={
        "A": "(√3 / 2) ω A",
        "B": "(1 / 2) ω A",
        "C": "ω A",
        "D": "(√2 / 2) ω A"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration and retardation",
    concept="In SHM with a = -ω² x, velocity as a function of position is given by v = ω √(A² - x²).",
    given="a = -ω² x, released from rest at x = A (amplitude), x = A/2.",
    formula="v = ω √(A² - x²)",
    steps="1. Integrate v dv = -ω² x dx from (x = A, v = 0) to (x, v):\n   ∫_0^v v dv = -ω² ∫_A^x x dx\n   v² / 2 = -ω² [ x² / 2 - A² / 2 ] = (ω² / 2) (A² - x²)\n   v² = ω² (A² - x²).\n2. Substitute x = A / 2:\n   v² = ω² [ A² - (A/2)² ] = ω² [ A² - A²/4 ] = ω² (3A² / 4).\n3. Take the square root:\n   v = ω √(3A² / 4) = (√3 / 2) ω A.\n4. Therefore, the speed at x = A/2 is (√3 / 2) ω A ≈ 0.866 ωA.",
    tip="Standard SHM relation: v = ω√(A² - x²). At x = A/2, v = ω√(A² - A²/4) = (√3/2) ωA.",
    why_wrong="Option B assumes linear speed change. Option C is maximum speed at origin x = 0. Option D is for x = A/√2."
))

# Q141 (Hard)
qs.append(make_motion_q(
    num=141,
    question="The velocity of a particle moving in a straight line is given by v² = 2 - 3x (in SI units). What is the acceleration of the particle?",
    options={
        "A": "-1.5 m/s²",
        "B": "-3 m/s²",
        "C": "+1.5 m/s²",
        "D": "-0.75 m/s²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration and retardation",
    concept="Differentiating v² with respect to x yields 2v (dv/dx) = 2a, so a = (1/2) d(v²)/dx.",
    given="v² = 2 - 3x.",
    formula="a = (1/2) * d(v²)/dx",
    steps="1. Differentiate both sides of v² = 2 - 3x with respect to x:\n   d(v²)/dx = d(2 - 3x)/dx = -3.\n2. By the chain rule: d(v²)/dx = 2v (dv/dx) = 2a.\n3. Therefore: 2a = -3 => a = -3 / 2 = -1.5 m/s².\n4. Notice that acceleration is completely constant and negative (-1.5 m/s²).\n5. (Compare with v² = u² + 2as: 2a = -3 => a = -1.5 m/s²).",
    tip="Whenever given v² as a linear function of x (v² = c₁ + c₂ x), acceleration is CONSTANT and equals c₂ / 2!",
    why_wrong="Option B forgets to divide by 2. Option C has positive sign. Option D divides by 4."
))

# Q142 (Medium)
qs.append(make_motion_q(
    num=142,
    question="A body starts from rest and moves with uniform acceleration. If it covers a distance s₁ in the first 10 seconds and an additional distance s₂ in the next 10 seconds, what is the relation between s₁ and s₂?",
    options={
        "A": "s₂ = 3 s₁",
        "B": "s₂ = 2 s₁",
        "C": "s₂ = 4 s₁",
        "D": "s₂ = s₁"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="Galileo's law of odd numbers: The distances covered in successive equal time intervals by a body starting from rest under uniform acceleration are in the ratio 1 : 3 : 5 : 7...",
    given="u = 0, constant acceleration a, t₁ = 10 s, t₂ = 20 s total.",
    formula="s₁ = (1/2) a (10²); s_total(20) = (1/2) a (20²); s₂ = s_total - s₁.",
    steps="1. Distance in first 10 seconds:\n   s₁ = (1/2) a (10)² = 50a.\n2. Total distance in 20 seconds:\n   s_total = (1/2) a (20)² = 200a.\n3. Distance covered in the next 10 seconds (from t = 10 s to t = 20 s):\n   s₂ = s_total - s₁ = 200a - 50a = 150a.\n4. Compare s₂ and s₁:\n   s₂ / s₁ = 150a / 50a = 3.\n5. Therefore: s₂ = 3 s₁.",
    tip="Galileo's odd-number rule: 1st interval = 1 unit, 2nd interval = 3 units, 3rd interval = 5 units. So s₂ = 3 s₁ always!",
    why_wrong="Option B assumes doubling. Option C is the total distance s_total = 4 s₁. Option D assumes uniform speed."
))

# Q143 (Medium)
qs.append(make_motion_q(
    num=143,
    question="In the previous question, if the body continues to accelerate uniformly for another 10 seconds (from t = 20 s to t = 30 s) covering distance s₃, what is the ratio s₁ : s₂ : s₃?",
    options={
        "A": "1 : 3 : 5",
        "B": "1 : 2 : 3",
        "C": "1 : 4 : 9",
        "D": "1 : 2 : 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="Galileo's law of odd numbers for equal time intervals starting from rest under constant acceleration: Δs_n ∝ (2n - 1).",
    given="Successive equal time intervals of 10 s from rest.",
    formula="s_n ∝ (2n - 1) => s₁ : s₂ : s₃ = 1 : 3 : 5.",
    steps="1. For 1st interval (n = 1): 2(1) - 1 = 1.\n2. For 2nd interval (n = 2): 2(2) - 1 = 3.\n3. For 3rd interval (n = 3): 2(3) - 1 = 5.\n4. Therefore, the ratio of distances covered in successive equal time intervals is:\n   s₁ : s₂ : s₃ = 1 : 3 : 5.",
    tip="Galileo's odd number ratio: 1 : 3 : 5 : 7 : 9... The cumulative distances are 1 : 4 : 9 : 16 (squares of time)!",
    why_wrong="Option B is linear ratio. Option C is the ratio of CUMULATIVE distances (1 : 4 : 9), not incremental intervals. Option D is powers of 2."
))

# Q144 (Medium)
qs.append(make_motion_q(
    num=144,
    question="A particle moving with uniform acceleration along a straight line passes three consecutive points A, B, and C with velocities u, v, and w respectively. If AB = BC, then which of the following relations is correct?",
    options={
        "A": "v² = (u² + w²) / 2",
        "B": "v = (u + w) / 2",
        "C": "v = √(u w)",
        "D": "2/v = 1/u + 1/w"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="For constant acceleration, the velocity at the midpoint between two points of equal distance is the root-mean-square: v = √((u² + w²) / 2).",
    given="AB = BC = s, constant acceleration a.",
    formula="v² = u² + 2as; w² = v² + 2as => w² - v² = v² - u².",
    steps="1. For segment AB: v² - u² = 2as.\n2. For segment BC: w² - v² = 2as.\n3. Since AB = BC = s and acceleration a is constant, both right-hand sides are equal:\n   v² - u² = w² - v².\n4. Rearrange:\n   2v² = u² + w²\n   v² = (u² + w²) / 2.\n5. Therefore: v = √((u² + w²) / 2).\n6. Hence, Option A is the correct relation.",
    tip="Equal distances => v² in arithmetic progression (v² is average of u² and w²). Equal times => v in arithmetic progression (v = (u+w)/2).",
    why_wrong="Option B applies when time intervals are equal (t_AB = t_BC). Option C is geometric mean. Option D is harmonic mean."
))

# Q145 (Medium)
qs.append(make_motion_q(
    num=145,
    question="A body accelerates uniformly from rest for time t₁ and then retards uniformly to rest in time t₂. What is the ratio of the distance traveled during acceleration to the distance traveled during retardation?",
    options={
        "A": "t₁ : t₂",
        "B": "t₁² : t₂²",
        "C": "t₂ : t₁",
        "D": "1 : 1 always"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="In both phases, motion is triangular on the v-t graph with the same peak velocity v_max. Distance is the area under each triangle.",
    given="Accelerates from 0 to v_max in t₁, retards from v_max to 0 in t₂.",
    formula="s₁ = (1/2) v_max t₁; s₂ = (1/2) v_max t₂; s₁ / s₂ = t₁ / t₂.",
    steps="1. In the acceleration phase: initial speed = 0, final speed = v_max, time = t₁.\n   Distance s₁ = (1/2) v_max t₁.\n2. In the retardation phase: initial speed = v_max, final speed = 0, time = t₂.\n   Distance s₂ = (1/2) v_max t₂.\n3. Take the ratio of distances:\n   s₁ / s₂ = [ (1/2) v_max t₁ ] / [ (1/2) v_max t₂ ] = t₁ / t₂.\n4. Therefore, the ratio of distances is simply t₁ : t₂.",
    tip="Since both phases have the same peak velocity v_max, average speed in each phase is identical (v_max / 2). Distance = average speed * time ∝ time!",
    why_wrong="Option B assumes time-squared dependence (which only applies if acceleration was the same). Option C inverts the ratio. Option D requires t₁ = t₂."
))

# Q146 (Medium)
qs.append(make_motion_q(
    num=146,
    question="In the previous question, what is the ratio of the magnitude of acceleration a₁ to the magnitude of retardation a₂?",
    options={
        "A": "t₂ : t₁",
        "B": "t₁ : t₂",
        "C": "t₁² : t₂²",
        "D": "1 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration and retardation",
    concept="Since v_max = a₁ t₁ = a₂ t₂, the accelerations are inversely proportional to the respective time intervals.",
    given="v_max = a₁ t₁ = a₂ t₂.",
    formula="a₁ / a₂ = t₂ / t₁",
    steps="1. Acceleration: a₁ = v_max / t₁.\n2. Retardation: a₂ = v_max / t₂.\n3. Take the ratio:\n   a₁ / a₂ = (v_max / t₁) / (v_max / t₂) = t₂ / t₁.\n4. Therefore, acceleration and time are inversely proportional: a₁ : a₂ = t₂ : t₁.",
    tip="Short time means steep slope means large acceleration! a ∝ 1/t for the same Δv.",
    why_wrong="Option B inverts the ratio. Option C squares the times. Option D assumes equal times."
))

print("Topic 7 generated: Q126 to Q146 (21 questions)")

with open('scripts/part2_topic7.json', 'w') as f:
    json.dump(qs, f, indent=2)
