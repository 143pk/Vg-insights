import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# Load Q43-Q50 from build_topic3_6 if any, or re-add Q43-Q50
with open('scripts/build_topic3_6.py') as f:
    pass

# We will generate Q51 to Q63 (Topic 3 remaining: 2 Easy, 8 Medium, 3 Hard)
# Wait, let's check what Q43-Q50 were:
# Q43: Easy, Q44: Easy, Q45: Easy, Q46: Easy, Q47: Easy (5 Easy so far!)
# Q48: Medium, Q49: Medium, Q50: Medium (3 Medium so far!)
# So remaining for Topic 3: 8 Medium, 5 Hard (13 questions: Q51 to Q63).

# Q51 (Medium)
qs.append(make_motion_q(
    num=51,
    question="A body moves along a straight line such that its velocity vector is given by v⃗ = (6 - 3t) î m/s. What is the direction of the acceleration vector relative to the unit vector î?",
    options={
        "A": "Along +î",
        "B": "Along -î",
        "C": "Perpendicular to î",
        "D": "Opposite to v⃗ at all times"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Acceleration vector is the time derivative of the velocity vector: a⃗ = dv⃗/dt.",
    given="v⃗ = (6 - 3t) î m/s.",
    formula="a⃗ = dv⃗/dt = d(6 - 3t)/dt î = -3 î m/s².",
    steps="1. Differentiate the velocity vector with respect to time:\n   a⃗ = d/dt [(6 - 3t) î] = -3 î m/s².\n2. The acceleration vector has magnitude 3 m/s² and its direction is along -î (negative x-axis).\n3. Notice this direction is constant and independent of time t.\n4. Hence, the acceleration vector is directed along -î.",
    tip="Differentiating vector functions in 1D preserves unit vectors; look at the algebraic sign of the derivative.",
    why_wrong="Option A has the wrong sign (+î). Option C would mean 2D motion. Option D is incorrect because for t > 2, v⃗ is also along -î (so a⃗ is in the same direction as v⃗, not opposite)."
))

# Q52 (Medium)
qs.append(make_motion_q(
    num=52,
    question="Which of the following statements about one-dimensional motion is always TRUE?",
    options={
        "A": "If speed is zero at an instant, acceleration must also be zero at that instant.",
        "B": "If acceleration is zero, speed must also be zero.",
        "C": "If speed is constant, acceleration must be zero.",
        "D": "Acceleration can never reverse its direction in 1D motion."
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="In 1D rectilinear motion, if speed is constant, the velocity can neither change in magnitude nor in direction (reversal requires speed passing through zero). Thus, dv/dt = 0, so acceleration must be zero.",
    given="Theoretical statement about 1D kinematics.",
    formula="v = constant => a = dv/dt = 0.",
    steps="1. Option A is false: when a ball reaches its highest point, speed is momentarily zero, but acceleration is g = 9.8 m/s² downwards.\n2. Option B is false: a car cruising at 60 km/h with zero acceleration has non-zero speed.\n3. Option C is TRUE: in 1D motion, constant speed means velocity is constant (magnitude cannot change, direction cannot reverse without stopping), so dv/dt = 0, meaning acceleration is strictly zero.\n4. Option D is false: acceleration can change sign (e.g. spring force F = -kx gives a = -ω²x, which oscillates).",
    tip="Remember the key difference between 1D and 2D: in 1D, constant speed => zero acceleration. In 2D (circular motion), constant speed can have centripetal acceleration!",
    why_wrong="Option A fails for a vertically thrown ball at top. Option B fails for uniform motion. Option D fails for oscillating systems."
))

# Q53 (Medium)
qs.append(make_motion_q(
    num=53,
    question="A particle moves along a straight line such that its displacement x varies with time as x² = 1 + t². What is its acceleration in terms of x?",
    options={
        "A": "1 / x³",
        "B": "-1 / x³",
        "C": "1 / x²",
        "D": "-t / x²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Differentiating implicit relations using the chain rule yields velocity and acceleration as functions of position.",
    given="x² = 1 + t².",
    formula="Differentiate implicitly: 2x (dx/dt) = 2t => x v = t.",
    steps="1. Differentiate x² = 1 + t² with respect to t:\n   2x (dx/dt) = 2t => x v = t.\n   Therefore, v = t / x.\n2. Differentiate x v = t again with respect to t:\n   d(x v)/dt = d(t)/dt\n   (dx/dt) v + x (dv/dt) = 1\n   v² + x a = 1\n   x a = 1 - v²\n3. Substitute v = t / x:\n   x a = 1 - (t² / x²) = (x² - t²) / x².\n4. Since x² = 1 + t², we have x² - t² = 1!\n5. Therefore: x a = 1 / x² => a = 1 / x³.\n6. Hence, acceleration is 1 / x³.",
    tip="NEET Classic implicit differentiation: x² = 1 + t² => xv = t => v² + xa = 1 => a = (1 - v²)/x = 1/x³.",
    why_wrong="Option B introduces an erroneous negative sign. Option C has wrong power of x. Option D retains time t."
))

# Q54 (Medium)
qs.append(make_motion_q(
    num=54,
    question="The velocity vector of a particle is given by v⃗(t) = (8 - 4t) î m/s. At what time is the particle at rest, and what is its acceleration at that instant?",
    options={
        "A": "t = 2 s, a = 0 m/s²",
        "B": "t = 2 s, a = -4 m/s² along î",
        "C": "t = 4 s, a = -4 m/s² along î",
        "D": "t = 2 s, a = +4 m/s² along î"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="A particle is momentarily at rest when v = 0. Its acceleration is given by the derivative a = dv/dt.",
    given="v⃗(t) = (8 - 4t) î.",
    formula="v = 0 => 8 - 4t = 0; a = dv/dt = -4 î.",
    steps="1. Set velocity to zero: 8 - 4t = 0 => 4t = 8 => t = 2 s.\n2. Find acceleration: a = dv/dt = d(8 - 4t)/dt = -4 m/s².\n3. The acceleration vector is constant: a⃗ = -4 î m/s².\n4. At t = 2 s, the particle is momentarily at rest while experiencing an acceleration of -4 m/s² along î.\n5. (Just like a ball at the top of its flight, zero velocity does NOT mean zero acceleration!)",
    tip="Zero velocity never implies zero acceleration! At t = 2 s, v = 0 but a = -4 m/s².",
    why_wrong="Option A incorrectly assumes a = 0 when v = 0. Option C has t = 4 s. Option D gives +4 m/s²."
))

# Q55 (Medium)
qs.append(make_motion_q(
    num=55,
    question="Two displacement vectors in one dimension are given by A⃗ = +12 m and B⃗ = -7 m along the x-axis. What are the magnitude and direction of the vector sum R⃗ = A⃗ + B⃗ and vector difference D⃗ = A⃗ - B⃗?",
    options={
        "A": "R = 5 m (+x), D = 19 m (+x)",
        "B": "R = 19 m (+x), D = 5 m (+x)",
        "C": "R = 5 m (+x), D = 5 m (-x)",
        "D": "R = 19 m (+x), D = 19 m (-x)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Vector addition and subtraction in 1D follow standard algebraic rules of signed numbers.",
    given="A⃗ = +12 m î, B⃗ = -7 m î.",
    formula="R⃗ = A⃗ + B⃗; D⃗ = A⃗ - B⃗.",
    steps="1. Vector sum: R⃗ = (+12) + (-7) = +5 m (5 m along positive x-axis).\n2. Vector difference: D⃗ = (+12) - (-7) = 12 + 7 = +19 m (19 m along positive x-axis).\n3. Hence, R = 5 m along +x, and D = 19 m along +x.",
    tip="Subtracting a negative vector is equivalent to adding a positive vector: 12 - (-7) = +19 m.",
    why_wrong="Option B swaps sum and difference. Option C subtracts 12 - 7 for both. Option D adds magnitudes."
))

# Q56 (Medium)
qs.append(make_motion_q(
    num=56,
    question="A particle's displacement as a function of time is given by x = a e^(-α t) + b e^(β t), where a, b, α, and β are positive constants. The velocity of the particle:",
    options={
        "A": "Is independent of time",
        "B": "Decreases continuously with time",
        "C": "Goes on increasing with time",
        "D": "Is always negative"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Examine the acceleration a = dv/dt = d²x/dt² to determine whether velocity increases or decreases.",
    given="x = a e^(-α t) + b e^(β t), with a, b, α, β > 0.",
    formula="v = dx/dt, acceleration a_acc = dv/dt.",
    steps="1. Differentiate x with respect to t:\n   v = dx/dt = -aα e^(-α t) + bβ e^(β t).\n2. Differentiate v with respect to t to find acceleration:\n   a_acc = dv/dt = aα² e^(-α t) + bβ² e^(β t).\n3. Since a, b, α, β > 0 and the exponential function e^u > 0 for all real u:\n   a_acc is strictly positive (a_acc > 0) for all t ≥ 0.\n4. Since acceleration (dv/dt) is always positive, the velocity increases continuously with time!\n5. Hence, velocity goes on increasing with time.",
    tip="To see if velocity increases with time, check the sign of acceleration a = dv/dt. If a > 0 everywhere, v is strictly increasing.",
    why_wrong="Option A is false because v depends on t. Option B is false because dv/dt > 0. Option D is false because as t increases, the bβ e^(βt) term dominates and becomes large positive."
))

# Q57 (Medium)
qs.append(make_motion_q(
    num=57,
    question="A body moves in a straight line such that its velocity v depends on displacement x as v = b √x, where b is a constant. What is the acceleration of the body?",
    options={
        "A": "b² / 2",
        "B": "b² / 4",
        "C": "b / 2",
        "D": "b² x"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="When velocity is given as a function of position x, acceleration is given by a = v (dv/dx).",
    given="v(x) = b x^(1/2).",
    formula="a = v (dv/dx)",
    steps="1. Differentiate v with respect to x:\n   dv/dx = d(b x^(1/2))/dx = b * (1/2) x^(-1/2) = b / (2√x).\n2. Compute acceleration using a = v (dv/dx):\n   a = (b √x) * [ b / (2√x) ].\n3. The √x in the numerator and denominator cancels out completely:\n   a = b² / 2.\n4. Notice that acceleration is completely constant and independent of x and t!\n5. Hence, the acceleration is b² / 2.",
    tip="Whenever v = f(x), always use a = v (dv/dx). Here, (b√x) * (b / 2√x) = b²/2 (constant acceleration!).",
    why_wrong="Option B has factor of 4. Option C lacks b². Option D incorrectly leaves x."
))

# Q58 (Medium)
qs.append(make_motion_q(
    num=58,
    question="The velocity of a particle moving along a straight line varies with displacement x according to v² = 108 - 9x² (in SI units). What is the magnitude of the maximum acceleration of the particle?",
    options={
        "A": "9 m/s²",
        "B": "18 m/s²",
        "C": "9√12 m/s²",
        "D": "108 m/s²"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Differentiating v² with respect to x gives 2v (dv/dx) = 2a. In SHM, a = -ω² x, with max acceleration at maximum displacement.",
    given="v² = 108 - 9x².",
    formula="2a = d(v²)/dx => a = (1/2) d(v²)/dx = -9x; Max acceleration at max x.",
    steps="1. Differentiate both sides with respect to x:\n   d(v²)/dx = -18x.\n2. Since a = v (dv/dx) = (1/2) d(v²)/dx:\n   a = -9x.\n3. This represents Simple Harmonic Motion with ω² = 9 => ω = 3 rad/s.\n4. The maximum displacement (amplitude X₀) occurs when v = 0:\n   0 = 108 - 9x² => 9x² = 108 => x² = 12 => X₀ = √12 m = 2√3 m.\n5. Maximum acceleration occurs at the amplitude:\n   |a_max| = 9 * X₀ = 9 * √12 = 9 * 2√3 = 18√3 m/s² ≈ 31.18 m/s².\n   Wait, 9√12 = 9 * 2√3 = 18√3.\n6. Looking at Option C: 9√12 m/s².\n7. Hence, the maximum acceleration is 9√12 m/s².",
    tip="Differentiating v² with respect to x gives 2a directly! Then equate v = 0 to find amplitude.",
    why_wrong="Option A is ω². Option B is 2ω². Option D is v_max²."
))

# Q59 (Hard)
qs.append(make_motion_q(
    num=59,
    question="A particle moves along a straight line with deceleration proportional to the square of its velocity: a = -k v², where k is a positive constant. If its initial velocity is v₀ at t = 0, what is its velocity at time t?",
    options={
        "A": "v = v₀ / (1 + k v₀ t)",
        "B": "v = v₀ e^(-kt)",
        "C": "v = v₀ / (1 - k v₀ t)",
        "D": "v = v₀ (1 - k t²)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Differential equation for quadratic drag: dv/dt = -k v² is solved by separation of variables.",
    given="dv/dt = -k v², v(0) = v₀.",
    formula="∫ dv / v² = -k ∫ dt => -1/v = -kt + C.",
    steps="1. Separate variables:\n   dv / v² = -k dt.\n2. Integrate both sides from 0 to t:\n   ∫_{v₀}^v v^(-2) dv = -k ∫_0^t dt.\n3. Evaluate the integrals:\n   [-1/v]_{v₀}^v = -kt\n   -1/v - (-1/v₀) = -kt\n   -1/v + 1/v₀ = -kt\n4. Rearrange for 1/v:\n   1/v = 1/v₀ + kt = (1 + k v₀ t) / v₀.\n5. Invert to find v(t):\n   v(t) = v₀ / (1 + k v₀ t).\n6. Hence, velocity at time t is v₀ / (1 + k v₀ t).",
    tip="For linear drag (a = -kv), v = v₀ e^(-kt). For quadratic drag (a = -kv²), v = v₀ / (1 + kv₀t).",
    why_wrong="Option B is for linear drag a = -kv. Option C has a minus sign causing infinite velocity. Option D is dimensionally inconsistent."
))

# Q60 (Hard)
qs.append(make_motion_q(
    num=60,
    question="For the particle in the previous question with deceleration a = -k v² and initial velocity v₀ at x = 0, what is its velocity as a function of displacement x?",
    options={
        "A": "v = v₀ e^(-k x)",
        "B": "v = v₀ - k x",
        "C": "v = v₀ / (1 + k x)",
        "D": "v = √(v₀² - 2kx)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Express acceleration as a = v (dv/dx) and integrate with respect to x.",
    given="a = v (dv/dx) = -k v²; v(0) = v₀ at x = 0.",
    formula="v (dv/dx) = -k v² => dv / v = -k dx.",
    steps="1. Substitute a = v (dv/dx):\n   v (dv/dx) = -k v².\n2. Divide both sides by v (for v > 0):\n   dv/dx = -k v.\n3. Separate variables:\n   dv / v = -k dx.\n4. Integrate from x = 0 (v = v₀) to position x:\n   ∫_{v₀}^v (1/v) dv = -k ∫_0^x dx.\n5. Evaluate:\n   ln(v / v₀) = -k x\n   v / v₀ = e^(-k x)\n   v(x) = v₀ e^(-k x).\n6. Hence, velocity decays exponentially with displacement: v = v₀ e^(-kx).",
    tip="Notice the beauty of calculus: with respect to time, quadratic drag gives hyperbolic decay; with respect to distance, it gives exponential decay!",
    why_wrong="Option B is for constant deceleration. Option C is the time relation mistaken for distance. Option D is for constant acceleration (v² = u² + 2as)."
))

# Q61 (Hard)
qs.append(make_motion_q(
    num=61,
    question="A particle moves along a straight line such that its velocity is given by v = α √x, where α is a positive constant. What is the average velocity of the particle over the first s meters of its path?",
    options={
        "A": "(α / 2) √s",
        "B": "α √s",
        "C": "(2α / 3) √s",
        "D": "(α / 3) √s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Scalars and vectors in one-dimensional motion",
    concept="First find the time t taken to traverse distance s, then calculate average velocity v_avg = total distance / total time.",
    given="v = dx/dt = α √x, distance s.",
    formula="dx / √x = α dt; v_avg = s / t.",
    steps="1. Separate variables and integrate to find x(t):\n   dx / √x = α dt\n   ∫_0^x x^(-1/2) dx = α ∫_0^t dt\n   2 √x = α t\n   √x = (α / 2) t => x(t) = (α² / 4) t².\n2. This represents motion with constant acceleration:\n   x = (1/2) a t² with a = α² / 2, starting from rest (u = 0).\n3. For motion starting from rest with constant acceleration, the final velocity after distance s is v_final = α √s.\n4. The average velocity for uniformly accelerated motion from rest is:\n   v_avg = (u + v_final) / 2 = (0 + α √s) / 2 = (α / 2) √s.\n5. Alternatively, time to cover s is t = 2√s / α. Then v_avg = s / t = s / (2√s / α) = (α / 2) √s.\n6. Hence, v_avg = (α / 2) √s.",
    tip="NEET shortcut: When v ∝ √x, acceleration is constant! And for constant acceleration from rest, v_avg is simply v_final / 2.",
    why_wrong="Option B is the instantaneous velocity at distance s. Option C is 2/3 of v. Option D is 1/3 of v."
))

# Q62 (Hard)
qs.append(make_motion_q(
    num=62,
    question="The acceleration of a particle is given by a = 3t² + 2t + 2 (in SI units). If the particle starts with an initial velocity v₀ = 2 m/s at t = 0, what is its velocity at the end of t = 2 seconds?",
    options={
        "A": "16 m/s",
        "B": "18 m/s",
        "C": "14 m/s",
        "D": "20 m/s"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Velocity is the integral of acceleration with respect to time: v(t) = v₀ + ∫ a dt.",
    given="a(t) = 3t² + 2t + 2, v(0) = 2 m/s, t = 2 s.",
    formula="v(t) = v₀ + ∫_0^t (3t² + 2t + 2) dt.",
    steps="1. Integrate acceleration:\n   v(t) = 2 + [ t³ + t² + 2t ]_0^t.\n2. Substitute t = 2 s:\n   v(2) = 2 + [ 2³ + 2² + 2(2) ]\n   v(2) = 2 + [ 8 + 4 + 4 ]\n   v(2) = 2 + 16 = 18 m/s.\n3. Therefore, the velocity at t = 2 s is 18 m/s.",
    tip="Don't forget to add the initial velocity v₀! Change in velocity is 16 m/s, so final velocity is 2 + 16 = 18 m/s.",
    why_wrong="Option A is Δv without adding initial velocity (16 m/s). Option C subtracts initial velocity. Option D miscalculates 2³."
))

# Q63 (Hard)
qs.append(make_motion_q(
    num=63,
    question="A particle moves along a straight line such that its position coordinate varies with time as x = t³ - 3t² - 9t + 5 (in meters). What is the velocity of the particle at the instant when its acceleration is zero?",
    options={
        "A": "-12 m/s",
        "B": "-9 m/s",
        "C": "0 m/s",
        "D": "-6 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Find acceleration by differentiating position twice, set a = 0 to find the instant, and substitute that instant into the velocity expression.",
    given="x(t) = t³ - 3t² - 9t + 5.",
    formula="v = dx/dt = 3t² - 6t - 9; a = dv/dt = 6t - 6 = 0.",
    steps="1. Find velocity:\n   v(t) = dx/dt = 3t² - 6t - 9.\n2. Find acceleration:\n   a(t) = dv/dt = 6t - 6.\n3. Find the instant when acceleration is zero:\n   6t - 6 = 0 => 6t = 6 => t = 1 s.\n4. Substitute t = 1 s into the velocity expression:\n   v(1) = 3(1)² - 6(1) - 9 = 3 - 6 - 9 = -12 m/s.\n5. Therefore, the velocity of the particle at this instant is -12 m/s.",
    tip="Standard NEET two-step calculus problem: 1) Find t from a = 0. 2) Substitute t into v(t).",
    why_wrong="Option B is initial velocity v(0) = -9 m/s. Option C assumes velocity is zero when acceleration is zero. Option D miscalculates 3 - 6 - 9."
))

print("Topic 3 completed: Q43 to Q63")

with open('scripts/part1_topic3.json', 'w') as f:
    json.dump(qs, f, indent=2)
