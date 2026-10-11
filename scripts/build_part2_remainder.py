import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 8: Uniform and non-uniform motion (Q147 - Q167)
# 5 Easy, 11 Medium, 5 Hard (Total 21)
# ==============================================================================

# Q147 (Easy)
qs.append(make_motion_q(
    num=147,
    question="Which of the following conditions characterizes uniform motion in one dimension?",
    options={
        "A": "Equal distances are covered in equal intervals of time, however small these intervals may be.",
        "B": "Speed increases linearly with time.",
        "C": "Acceleration is a non-zero constant.",
        "D": "Velocity changes its direction periodically."
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform and non-uniform motion",
    concept="In uniform motion, velocity is strictly constant in both magnitude and direction, meaning equal displacements (and distances) are traversed in equal time intervals.",
    given="Definition of uniform motion.",
    formula="v = constant <=> a = 0 <=> x(t) = x₀ + v t.",
    steps="1. By definition, uniform motion along a straight line means velocity does not change with time.\n2. Acceleration is identically zero (a = 0).\n3. In any time interval Δt, the displacement is Δx = v * Δt.\n4. Therefore, equal distances and displacements are covered in equal intervals of time, regardless of how small the time interval is chosen.\n5. Hence, Option A is the correct definition.",
    tip="Uniform motion <=> Constant velocity <=> Zero acceleration <=> Linear position-time graph.",
    why_wrong="Option B describes uniformly accelerated motion. Option C has constant acceleration (non-uniform motion). Option D has varying direction."
))

# Q148 (Easy)
qs.append(make_motion_q(
    num=148,
    question="For a particle executing uniform motion along the x-axis, the shape of its position-time (x-t) graph is:",
    options={
        "A": "A straight line inclined to the time axis",
        "B": "A parabola opening upwards",
        "C": "A horizontal line parallel to the time axis",
        "D": "A circle or ellipse"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform and non-uniform motion",
    concept="In uniform motion, x(t) = x₀ + v t is a linear equation (y = mx + c), which graphs as a straight line whose slope is the constant velocity v.",
    given="Position function x(t) = x₀ + v t.",
    formula="Slope = dx/dt = v = constant.",
    steps="1. For uniform motion, velocity v is constant.\n2. Integrating velocity gives x(t) = x₀ + v t.\n3. This is a first-degree polynomial in time t (equation of a straight line).\n4. The slope of this line represents the constant velocity v.\n5. Therefore, the x-t graph is a straight line inclined to the time axis.",
    tip="Slope of x-t graph = velocity. Constant slope = constant velocity = straight line!",
    why_wrong="Option B is for uniformly accelerated motion (x ∝ t²). Option C represents an object at rest (v = 0). Option D cannot exist for a single-valued function of time."
))

# Q149 (Easy)
qs.append(make_motion_q(
    num=149,
    question="Which of the following physical quantities is necessarily zero in uniform rectilinear motion?",
    options={
        "A": "Acceleration",
        "B": "Velocity",
        "C": "Displacement",
        "D": "Speed"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform and non-uniform motion",
    concept="Uniform rectilinear motion has constant velocity, so its time derivative (acceleration) is identically zero.",
    given="Uniform rectilinear motion.",
    formula="a = dv/dt = d(constant)/dt = 0.",
    steps="1. Uniform motion means velocity v is constant.\n2. Acceleration is defined as a = dv/dt.\n3. The derivative of a constant is zero.\n4. Therefore, acceleration is necessarily zero in uniform rectilinear motion.",
    tip="Zero net force and zero acceleration are the defining criteria for uniform motion.",
    why_wrong="Options B, C, and D are non-zero for any moving object."
))

# Q150 (Easy)
qs.append(make_motion_q(
    num=150,
    question="A car moves along a straight highway at a constant velocity of 20 m/s for 15 seconds. How far does the car travel in this time?",
    options={
        "A": "300 m",
        "B": "150 m",
        "C": "600 m",
        "D": "75 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform and non-uniform motion",
    concept="For uniform motion, distance covered is simply speed multiplied by time: s = v * t.",
    given="v = 20 m/s, t = 15 s.",
    formula="s = v * t",
    steps="1. Velocity is constant: v = 20 m/s.\n2. Time elapsed: t = 15 s.\n3. Distance traveled: s = v * t = 20 m/s * 15 s = 300 m.\n4. Therefore, the car travels 300 m.",
    tip="When acceleration is zero, you don't need any complex kinematic equations; just use distance = speed * time!",
    why_wrong="Option B uses (1/2)vt. Option C doubles the product. Option D is (1/4)vt."
))

# Q151 (Easy)
qs.append(make_motion_q(
    num=151,
    question="Non-uniform motion is defined as motion in which:",
    options={
        "A": "Velocity of the object changes with time",
        "B": "Speed is constant along a straight line",
        "C": "Acceleration is identically zero at all times",
        "D": "Equal displacements are covered in equal time intervals"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Uniform and non-uniform motion",
    concept="If velocity varies with time (either in magnitude, direction, or both), the motion is non-uniform (accelerated).",
    given="Definition of non-uniform motion.",
    formula="dv⃗/dt ≠ 0 (a⃗ ≠ 0).",
    steps="1. Motion is uniform when velocity is constant.\n2. If velocity changes with time—meaning acceleration is non-zero—the motion is non-uniform.\n3. The change can be in speed, direction of motion, or both.\n4. Therefore, non-uniform motion is characterized by changing velocity.",
    tip="Non-uniform motion = accelerated motion (a ≠ 0).",
    why_wrong="Options B, C, and D all describe uniform motion with constant velocity."
))

# Q152 (Medium)
qs.append(make_motion_q(
    num=152,
    question="A body moves in a straight line such that its displacement x is proportional to t³ (x = c t³). The acceleration of the body is:",
    options={
        "A": "Proportional to t",
        "B": "Constant",
        "C": "Proportional to t²",
        "D": "Zero"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Differentiating x(t) = c t³ twice with respect to time yields acceleration a(t) = 6c t, which is directly proportional to t.",
    given="x(t) = c t³.",
    formula="v = dx/dt = 3c t²; a = dv/dt = 6c t ∝ t.",
    steps="1. Differentiate position with respect to time:\n   v = dx/dt = 3c t².\n2. Differentiate velocity to find acceleration:\n   a = dv/dt = 6c t.\n3. Since 6c is a constant, acceleration a is directly proportional to time t: a ∝ t.\n4. This represents non-uniformly accelerated motion (with constant jerk da/dt = 6c).",
    tip="Power rule: x ∝ t³ => v ∝ t² => a ∝ t.",
    why_wrong="Option B would require x ∝ t² (constant acceleration). Option C is velocity (v ∝ t²). Option D would require x ∝ t (uniform motion)."
))

# Q153 (Medium)
qs.append(make_motion_q(
    num=153,
    question="The velocity of a particle moving along a straight line varies with time as v = (2t² - 8) m/s. During which time interval is the particle undergoing retardation while moving in the negative direction?",
    options={
        "A": "0 < t < 2 s",
        "B": "t > 2 s",
        "C": "t = 2 s only",
        "D": "Never, because acceleration is always positive"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Moving in the negative direction requires v < 0. Retardation requires acceleration to oppose velocity (a > 0).",
    given="v(t) = 2t² - 8 m/s.",
    formula="v < 0 and a > 0 for retardation in the negative direction.",
    steps="1. Find acceleration:\n   a(t) = dv/dt = d(2t² - 8)/dt = 4t m/s².\n   Notice that for all t > 0, acceleration is positive: a(t) > 0.\n2. Condition for moving in the negative direction:\n   v(t) < 0 => 2t² - 8 < 0 => 2t² < 8 => t² < 4 => 0 < t < 2 s.\n3. For 0 < t < 2 s:\n   Velocity is negative (v < 0), but acceleration is positive (a > 0).\n4. Since v and a have opposite signs, the particle is slowing down (undergoing retardation)!\n5. Therefore, in the interval 0 < t < 2 s, the particle moves in the negative direction and undergoes retardation.",
    tip="Great NEET concept: Here a = +4t is positive, but because v is negative, the particle is RETARDING! Its speed decreases from 8 m/s at t=0 to 0 m/s at t=2 s.",
    why_wrong="Option B has v > 0 and a > 0, so the particle is moving in the positive direction and speeding up. Option C is just the instant of rest."
))

# Q154 (Medium)
qs.append(make_motion_q(
    num=154,
    question="A particle moves along a straight line such that its position is given by x = 12t - 3t² (in meters). What is the total distance covered by the particle from t = 0 to t = 3 s?",
    options={
        "A": "15 m",
        "B": "9 m",
        "C": "12 m",
        "D": "18 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="To find total distance in non-uniform motion, break the integral at any turning point where v = dx/dt = 0.",
    given="x(t) = 12t - 3t², interval [0, 3] s.",
    formula="v = 12 - 6t = 0 => t = 2 s; Distance = |x(2) - x(0)| + |x(3) - x(2)|.",
    steps="1. Find velocity:\n   v(t) = dx/dt = 12 - 6t.\n2. Turning point:\n   12 - 6t = 0 => t = 2 s.\n   Since 2 s is inside [0, 3] s, the particle stops and turns back at t = 2 s.\n3. Evaluate positions:\n   x(0) = 0 m.\n   x(2) = 12(2) - 3(2²) = 24 - 12 = 12 m.\n   x(3) = 12(3) - 3(3²) = 36 - 27 = 9 m.\n4. Distance from 0 to 2 s: |12 - 0| = 12 m (forward).\n5. Distance from 2 to 3 s: |9 - 12| = |-3| = 3 m (backward).\n6. Total distance = 12 m + 3 m = 15 m.\n7. (Note: Displacement is x(3) - x(0) = 9 m).",
    tip="Remember: Distance = Forward path + Backward path = 12 + 3 = 15 m. Displacement = 9 m.",
    why_wrong="Option B is displacement x(3) - x(0) = 9 m (common trap!). Option C is only the forward segment (12 m). Option D is 18 m."
))

# Q155 (Medium)
qs.append(make_motion_q(
    num=155,
    question="The acceleration of a moving particle along a straight line is inversely proportional to the square of its displacement from a fixed point: a = -k / x² (k > 0). If the particle is released from rest at x = x₀, its velocity at distance x is:",
    options={
        "A": "√[ 2k (1/x - 1/x₀) ]",
        "B": "√[ 2k (1/x₀ - 1/x) ]",
        "C": "√[ k (1/x² - 1/x₀²) ]",
        "D": "k (1/x - 1/x₀)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Use a = v (dv/dx) = -k / x² and integrate: v dv = -k x⁻² dx.",
    given="a = -k / x², released from rest (v = 0) at x = x₀.",
    formula="∫_0^v v dv = -k ∫_{x₀}^x x⁻² dx.",
    steps="1. Express acceleration as v (dv/dx):\n   v (dv/dx) = -k / x².\n2. Separate variables:\n   v dv = -k x⁻² dx.\n3. Integrate from initial point (x = x₀, v = 0) to position x (with x < x₀ as it falls inward):\n   ∫_0^v v dv = -k ∫_{x₀}^x x⁻² dx.\n4. Evaluate integrals:\n   v² / 2 = -k [ -1/x ]_{x₀}^x = k [ 1/x - 1/x₀ ].\n5. Multiply by 2 and take square root:\n   v² = 2k (1/x - 1/x₀)\n   v = √[ 2k (1/x - 1/x₀) ].\n6. This is the exact gravitational acceleration relation (falling towards Earth from height x₀)!",
    tip="This is gravitational free fall from outer space: (1/2) v² - GM/x = -GM/x₀ => v = √[2GM(1/x - 1/x₀)].",
    why_wrong="Option B would produce an imaginary number for inward motion (x < x₀). Option C integrates x⁻³ instead of x⁻². Option D lacks square root."
))

# Q156 (Medium)
qs.append(make_motion_q(
    num=156,
    question="A body starts from rest at the origin and moves along the positive x-axis such that its velocity varies with displacement as v = 4 √x (in SI units). What is the displacement of the body as a function of time t?",
    options={
        "A": "x = 4 t²",
        "B": "x = 8 t²",
        "C": "x = 2 t²",
        "D": "x = 16 t²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Express v as dx/dt = 4 √x, separate variables, and integrate.",
    given="dx/dt = 4 x^(1/2), x(0) = 0.",
    formula="∫ x^(-1/2) dx = 4 ∫ dt => 2 √x = 4t => √x = 2t.",
    steps="1. Write differential equation:\n   dx / dt = 4 √x.\n2. Separate variables:\n   dx / √x = 4 dt\n   x^(-1/2) dx = 4 dt.\n3. Integrate both sides from 0 to t:\n   [ 2 x^(1/2) ]_0^x = 4 [ t ]_0^t\n   2 √x = 4t\n   √x = 2t.\n4. Square both sides to find x(t):\n   x(t) = (2t)² = 4 t².\n5. Therefore, the displacement as a function of time is x = 4 t².",
    tip="Check: If x = 4t², v = dx/dt = 8t. Since √x = 2t, 4√x = 4(2t) = 8t = v! Perfect match.",
    why_wrong="Option B has coefficient 8. Option C has coefficient 2. Option D has coefficient 16."
))

# Q157 (Medium)
qs.append(make_motion_q(
    num=157,
    question="For the body in Q156 where v = 4 √x and x = 4 t², what is its acceleration?",
    options={
        "A": "8 m/s²",
        "B": "4 m/s²",
        "C": "16 m/s²",
        "D": "2 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Differentiate velocity with respect to time: a = dv/dt, or use a = v (dv/dx).",
    given="x(t) = 4 t² => v(t) = 8t.",
    formula="a = dv/dt = d(8t)/dt = 8 m/s².",
    steps="1. Position function: x(t) = 4 t².\n2. Differentiate once to get velocity: v(t) = dx/dt = 8t.\n3. Differentiate again to get acceleration: a = dv/dt = 8 m/s².\n4. Alternatively, using a = v (dv/dx):\n   v = 4 √x => dv/dx = 4 * (1 / 2√x) = 2 / √x.\n   Then a = (4 √x) * (2 / √x) = 8 m/s².\n5. Both methods yield an acceleration of exactly 8 m/s².",
    tip="When v = k√x, acceleration is always constant and equals k² / 2! Here (4²)/2 = 16/2 = 8 m/s².",
    why_wrong="Option B is 4. Option C is 16. Option D is 2."
))

# Q158 (Medium)
qs.append(make_motion_q(
    num=158,
    question="The velocity of a particle moving along a straight line is given by v = v₀ (1 - t / T) for 0 ≤ t ≤ T. What is the total distance traveled by the particle in time T?",
    options={
        "A": "(1/2) v₀ T",
        "B": "v₀ T",
        "C": "(1/3) v₀ T",
        "D": "(2/3) v₀ T"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Since velocity decreases linearly from v₀ to 0 in time T, the distance is the area of the triangular v-t graph: (1/2) * base * height.",
    given="v(t) = v₀ (1 - t/T), t ∈ [0, T].",
    formula="s = ∫_0^T v₀ (1 - t/T) dt = (1/2) v₀ T.",
    steps="1. In the interval [0, T], velocity is non-negative (v ≥ 0).\n2. Distance is simply the definite integral of velocity:\n   s = ∫_0^T v₀ (1 - t/T) dt = v₀ [ t - t² / (2T) ]_0^T.\n3. Evaluate at the limits:\n   s = v₀ [ T - T² / (2T) ] = v₀ [ T - T/2 ] = (1/2) v₀ T.\n4. Geometrically, on a v-t plot, this is a right triangle with base T and height v₀:\n   Area = (1/2) * T * v₀ = (1/2) v₀ T.\n5. Therefore, the distance is (1/2) v₀ T.",
    tip="Area of triangle under linear retardation = (1/2) * v_initial * t_stop.",
    why_wrong="Option B assumes constant velocity v₀. Options C and D are incorrect fractions."
))

# Q159 (Medium)
qs.append(make_motion_q(
    num=159,
    question="A body starts from rest and moves along a straight line such that its acceleration is proportional to the square root of time: a = k t^(1/2). What is the displacement of the body as a function of time t?",
    options={
        "A": "(4/15) k t^(5/2)",
        "B": "(2/5) k t^(5/2)",
        "C": "(2/3) k t^(3/2)",
        "D": "(1/6) k t^(5/2)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Integrate acceleration twice from rest: v = ∫ a dt, and x = ∫ v dt.",
    given="a(t) = k t^(1/2), u = 0, x(0) = 0.",
    formula="v = ∫ k t^(1/2) dt = (2/3) k t^(3/2); x = ∫ v dt = (2/3) k ∫ t^(3/2) dt.",
    steps="1. Integrate acceleration to find velocity:\n   v(t) = ∫_0^t k t^(1/2) dt = k [ t^(3/2) / (3/2) ] = (2/3) k t^(3/2).\n2. Integrate velocity to find displacement:\n   x(t) = ∫_0^t (2/3) k t^(3/2) dt = (2/3) k [ t^(5/2) / (5/2) ].\n3. Simplify the fraction:\n   (2/3) * (2/5) = 4/15.\n4. Therefore:\n   x(t) = (4/15) k t^(5/2).\n5. Hence, Option A is the correct expression.",
    tip="Integration fractions: 1/2 -> 3/2 (coeff 2/3) -> 5/2 (coeff (2/3)*(2/5) = 4/15).",
    why_wrong="Option B misses the first factor 2/3. Option C is the velocity v(t). Option D is an incorrect coefficient."
))

# Q160 (Medium)
qs.append(make_motion_q(
    num=160,
    question="A particle moves along a straight line such that its velocity varies with displacement as v² = a - b x, where a and b are positive constants. The motion of the particle is:",
    options={
        "A": "Uniformly retarded with acceleration -b/2",
        "B": "Uniformly accelerated with acceleration +b",
        "C": "Non-uniformly accelerated",
        "D": "Uniform motion with zero acceleration"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Differentiating v² = a - b x with respect to x gives 2v (dv/dx) = 2a_acc = -b => a_acc = -b/2 (constant negative acceleration).",
    given="v² = a - b x.",
    formula="2 a_acc = d(v²)/dx = -b => a_acc = -b/2.",
    steps="1. Differentiate both sides with respect to x:\n   d(v²)/dx = d(a - b x)/dx = -b.\n2. Since 2v (dv/dx) = d(v²)/dx:\n   2 a_acc = -b.\n3. Solve for acceleration:\n   a_acc = -b / 2.\n4. Because b is a positive constant, a_acc is constant and negative.\n5. Therefore, the motion is uniformly retarded with acceleration -b/2.",
    tip="Comparing with v² = u² + 2as: 2a_acc = -b => a_acc = -b/2 (constant acceleration!).",
    why_wrong="Option B has positive sign and misses 1/2. Option C incorrectly assumes non-uniform acceleration. Option D claims zero acceleration."
))

# Q161 (Hard)
qs.append(make_motion_q(
    num=161,
    question="A particle moves along the x-axis with an acceleration a = -32 x (in SI units). If it is released from rest at x = 2 m, what is the frequency of its oscillation?",
    options={
        "A": "(4√2 / π) Hz ≈ 1.80 Hz",
        "B": "(2√2 / π) Hz",
        "C": "4 Hz",
        "D": "8 Hz"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Uniform and non-uniform motion",
    concept="Acceleration proportional to negative displacement represents SHM: a = -ω² x. Frequency f = ω / (2π).",
    given="a = -32 x => ω² = 32.",
    formula="ω = √32 = 4√2 rad/s; f = ω / (2π) = 4√2 / (2π) = 2√2 / π Hz.",
    steps="1. Compare the given equation a = -32 x with the standard SHM equation a = -ω² x.\n2. We have ω² = 32 => ω = √32 = √(16 * 2) = 4√2 rad/s.\n3. The frequency f of oscillation is:\n   f = ω / (2π) = (4√2) / (2π) = (2√2 / π) Hz.\n4. Evaluating numerically: 2 * 1.414 / 3.1416 ≈ 2.828 / 3.1416 ≈ 0.90 Hz.\n5. Hence, Option B is the exact expression.",
    tip="In any 1D equation of the form a = -k x, motion is non-uniform SHM with angular frequency ω = √k.",
    why_wrong="Option A forgets to divide by 2 in f = ω/(2π). Options C and D neglect π."
))

# Q162 (Hard)
qs.append(make_motion_q(
    num=162,
    question="A particle moves along a straight line such that its velocity is given by v = v₀ (1 - x² / d²) for 0 ≤ x ≤ d. What is the acceleration of the particle at x = d / 2?",
    options={
        "A": "-3 v₀² / (4d)",
        "B": "-v₀² / (2d)",
        "C": "-3 v₀² / (2d)",
        "D": "-v₀² / d"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform and non-uniform motion",
    concept="Use a = v (dv/dx). First evaluate v and dv/dx at x = d/2, then multiply.",
    given="v(x) = v₀ (1 - x²/d²), x = d/2.",
    formula="a = v * (dv/dx)",
    steps="1. Evaluate velocity at x = d/2:\n   v(d/2) = v₀ [ 1 - (d/2)² / d² ] = v₀ [ 1 - 1/4 ] = (3/4) v₀.\n2. Differentiate v with respect to x:\n   dv/dx = d/dx [ v₀ (1 - x²/d²) ] = v₀ [ -2x / d² ] = -2 v₀ x / d².\n3. Evaluate dv/dx at x = d/2:\n   (dv/dx)_{x = d/2} = -2 v₀ (d/2) / d² = -v₀ / d.\n4. Compute acceleration:\n   a = v(d/2) * (dv/dx)_{x = d/2} = [ (3/4) v₀ ] * [ -v₀ / d ] = -3 v₀² / (4d).\n5. Therefore, the acceleration is -3 v₀² / (4d).",
    tip="Always calculate in two clean steps: v = (3/4)v₀ and dv/dx = -v₀/d => a = -(3/4)v₀²/d.",
    why_wrong="Option B is for x = 0. Option C lacks factor of 2. Option D is an incorrect estimate."
))

# Q163 (Hard)
qs.append(make_motion_q(
    num=163,
    question="A body starts from rest at t = 0 and moves along a straight line with an acceleration varying as a = 6t - 12 (in m/s²). What is the minimum position coordinate (most negative displacement) reached by the body?",
    options={
        "A": "-32 m",
        "B": "-16 m",
        "C": "-24 m",
        "D": "-48 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform and non-uniform motion",
    concept="Integrate acceleration twice from rest to get v(t) and x(t). The turning point (extrema of position) occurs when v(t) = 0.",
    given="a(t) = 6t - 12, u = 0, x(0) = 0.",
    formula="v(t) = 3t² - 12t; x(t) = t³ - 6t².",
    steps="1. Integrate acceleration to find velocity:\n   v(t) = ∫_0^t (6t - 12) dt = 3t² - 12t.\n2. Position extrema occur when v(t) = 0:\n   3t² - 12t = 0 => 3t(t - 4) = 0 => t = 0 and t = 4 s.\n3. Integrate velocity to find position:\n   x(t) = ∫_0^t (3t² - 12t) dt = t³ - 6t².\n4. Evaluate position at the turning point t = 4 s:\n   x(4) = 4³ - 6(4²) = 64 - 6(16) = 64 - 96 = -32 m.\n5. Since v < 0 for 0 < t < 4 s and v > 0 for t > 4 s, x = -32 m is indeed the absolute minimum position.\n6. Therefore, the minimum position coordinate is -32 m.",
    tip="Find turning point from v(t) = 0: 3t(t - 4) = 0 => t = 4 s. Then x(4) = 4³ - 6(16) = -32 m.",
    why_wrong="Option B uses t = 2 s (inflection point, where acceleration is zero: x(2) = 8 - 24 = -16 m). Option C and D are arithmetic errors."
))

# Q164 (Hard)
qs.append(make_motion_q(
    num=164,
    question="A particle moves along a straight line with deceleration proportional to its displacement: a = -k x (k > 0). If it passes through the origin (x = 0) with velocity v₀, what is the maximum displacement reached before it stops?",
    options={
        "A": "v₀ / √k",
        "B": "v₀² / (2k)",
        "C": "v₀ / k",
        "D": "√v₀ / k"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform and non-uniform motion",
    concept="Use conservation of energy or integrate v dv = -k x dx to find maximum displacement where v = 0.",
    given="a = -k x, at x = 0, v = v₀; at x = x_max, v = 0.",
    formula="∫_{v₀}^0 v dv = -k ∫_0^{x_max} x dx => -v₀² / 2 = -k x_max² / 2.",
    steps="1. Write a = v (dv/dx):\n   v (dv/dx) = -k x.\n2. Separate variables and integrate from x = 0 (v = v₀) to x = x_max (v = 0):\n   ∫_{v₀}^0 v dv = -k ∫_0^{x_max} x dx.\n3. Evaluate:\n   [ v² / 2 ]_{v₀}^0 = -k [ x² / 2 ]_0^{x_max}\n   0 - v₀² / 2 = -k x_max² / 2\n   v₀² = k x_max².\n4. Solve for x_max:\n   x_max² = v₀² / k => x_max = v₀ / √k.\n5. Therefore, the maximum displacement is v₀ / √k.",
    tip="Energy method: Kinetic energy at origin = Potential energy at extreme: (1/2) m v₀² = (1/2) k_eff x_max² => x_max = v₀ / √k.",
    why_wrong="Option B assumes constant acceleration a = -k. Option C has wrong dimensions. Option D is dimensional mismatch."
))

# Q165 (Hard)
qs.append(make_motion_q(
    num=165,
    question="A body moves in a straight line with an acceleration given by a = 2 / v (in SI units), where v is velocity. If it starts from rest at t = 0 (or from negligible initial velocity u -> 0), what is its velocity at time t?",
    options={
        "A": "2 √t",
        "B": "4 √t",
        "C": "2 t",
        "D": "4 t²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Uniform and non-uniform motion",
    concept="Separate variables in dv/dt = 2/v: v dv = 2 dt.",
    given="dv/dt = 2 / v, v(0) = 0.",
    formula="v dv = 2 dt => v² / 2 = 2t => v² = 4t => v = 2 √t.",
    steps="1. Write equation: dv/dt = 2 / v.\n2. Separate variables:\n   v dv = 2 dt.\n3. Integrate from 0 to t:\n   ∫_0^v v dv = 2 ∫_0^t dt.\n4. Evaluate:\n   v² / 2 = 2t\n   v² = 4t.\n5. Take square root:\n   v(t) = 2 √t.\n6. Therefore, the velocity at time t is 2 √t.",
    tip="Integrating v dv = 2 dt yields v² = 4t => v = 2√t. Acceleration a = 2/(2√t) = 1/√t.",
    why_wrong="Option B is 4√t. Option C assumes constant acceleration. Option D is 4t²."
))

# Q166 (Medium)
qs.append(make_motion_q(
    num=166,
    question="A particle moves along a straight line such that its displacement varies with time as x = a t² - b t³, with a = 6 m/s² and b = 1 m/s³. What is the distance traveled by the particle between t = 0 and t = 6 s?",
    options={
        "A": "64 m",
        "B": "32 m",
        "C": "0 m",
        "D": "48 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Check for turning points where v = 0, find distances for forward and backward parts, and add them.",
    given="x(t) = 6t² - t³, interval [0, 6] s.",
    formula="v = 12t - 3t² = 0 => 3t(4 - t) = 0 => t = 4 s.",
    steps="1. Velocity: v(t) = dx/dt = 12t - 3t².\n2. Turning points: v(t) = 0 => 3t(4 - t) = 0 => t = 0 and t = 4 s.\n   Since t = 4 s is within [0, 6] s, motion reverses at t = 4 s.\n3. Positions:\n   x(0) = 0 m\n   x(4) = 6(4²) - 4³ = 6(16) - 64 = 96 - 64 = +32 m\n   x(6) = 6(6²) - 6³ = 216 - 216 = 0 m.\n4. Segment 1 (0 to 4 s): |x(4) - x(0)| = |32 - 0| = 32 m (forward).\n5. Segment 2 (4 to 6 s): |x(6) - x(4)| = |0 - 32| = 32 m (backward).\n6. Total distance = 32 m + 32 m = 64 m.\n7. (Note: Net displacement is x(6) - x(0) = 0 m!).",
    tip="Great NEET trap: Displacement at t = 6 s is 0 m, but total distance is 32 + 32 = 64 m!",
    why_wrong="Option B is the maximum displacement at t = 4 s. Option C is the net displacement (0 m). Option D is 48 m."
))

# Q167 (Medium)
qs.append(make_motion_q(
    num=167,
    question="In the previous question (x = 6t² - t³), what is the instantaneous acceleration of the particle at the instant it returns to the origin (at t = 6 s)?",
    options={
        "A": "-24 m/s²",
        "B": "-12 m/s²",
        "C": "0 m/s²",
        "D": "-36 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Uniform and non-uniform motion",
    concept="Find acceleration a(t) = d²x/dt² and evaluate at t = 6 s.",
    given="x(t) = 6t² - t³, returns to origin at t = 6 s.",
    formula="a(t) = d²x/dt² = 12 - 6t.",
    steps="1. Velocity: v(t) = 12t - 3t².\n2. Acceleration: a(t) = dv/dt = 12 - 6t.\n3. Substitute t = 6 s:\n   a(6) = 12 - 6(6) = 12 - 36 = -24 m/s².\n4. Therefore, the acceleration at t = 6 s is -24 m/s².",
    tip="Direct evaluation: a(t) = 12 - 6t => a(6) = 12 - 36 = -24 m/s².",
    why_wrong="Option B is a(4) = 12 - 24 = -12 m/s². Option C is at t = 2 s. Option D is -36."
))

print("Topic 8 generated: Q147 to Q167 (21 questions)")

with open('scripts/part2_topic8.json', 'w') as f:
    json.dump(qs, f, indent=2)
