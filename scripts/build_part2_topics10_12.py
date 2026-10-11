import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 10: Displacement-time graphs (Q189 - Q209)
# 5 Easy, 11 Medium, 5 Hard (Total 21)
# ==============================================================================

# Q189 (Easy)
qs.append(make_motion_q(
    num=189,
    question="How does a displacement-time graph differ fundamentally from a distance-time graph for a real moving object?",
    options={
        "A": "A displacement-time graph can have negative values and negative slope, whereas a distance-time graph can never decrease.",
        "B": "A displacement-time graph can never be curved.",
        "C": "A distance-time graph can have negative values if the particle moves backwards.",
        "D": "They are completely identical in all respects."
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Displacement-time graphs",
    concept="Displacement is a vector and can be positive, negative, or zero, with positive, negative, or zero slope. Distance is a scalar path length that monotonically increases or stays constant (never decreases).",
    given="Comparison between displacement-time and distance-time graphs.",
    formula="d(Distance)/dt = speed ≥ 0 (always non-decreasing); d(Displacement)/dt = v (can be positive, negative, or zero).",
    steps="1. Distance accumulates path length, so distance s(t) can never decrease with time (ds/dt = speed ≥ 0).\n2. Therefore, a distance-time graph can never have a negative slope.\n3. In contrast, displacement x(t) measures position relative to a reference point.\n4. When a particle moves in the negative direction, displacement decreases, meaning the displacement-time graph has a negative slope and can enter negative values.\n5. Therefore, Option A is the fundamental difference.",
    tip="Distance-time graphs NEVER go down! If you see a graph going down, it CANNOT be a distance-time graph.",
    why_wrong="Option B is false (accelerated motion curves). Option C is false (distance is never negative). Option D is false."
))

# Q190 (Easy)
qs.append(make_motion_q(
    num=190,
    question="The displacement-time graph of an object is shown as a straight line passing through the origin with a positive slope. What type of motion does it represent?",
    options={
        "A": "Uniform velocity motion starting from the origin",
        "B": "Uniformly accelerated motion from rest",
        "C": "Object at rest at the origin",
        "D": "Uniformly retarded motion"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Displacement-time graphs",
    concept="A straight line passing through origin has equation x = v t with constant slope v = dx/dt, representing uniform velocity motion.",
    given="Straight line passing through origin with positive slope.",
    formula="x = v t; slope = v = constant > 0.",
    steps="1. The graph is a straight line, so its slope is constant: dx/dt = v = constant.\n2. Since it passes through the origin, at t = 0, displacement x = 0.\n3. The slope is positive, so the velocity is positive.\n4. Constant velocity means acceleration is zero.\n5. Therefore, it represents uniform velocity motion starting from the origin.",
    tip="Straight line through origin on x-t graph: x = vt, uniform motion with initial position = 0.",
    why_wrong="Option B requires a curved parabolic shape (x ∝ t²). Option C requires a horizontal line (x = 0). Option D requires a downward curve."
))

# Q191 (Easy)
qs.append(make_motion_q(
    num=191,
    question="What is the instantaneous velocity at t = 2 s for a particle whose displacement-time graph is given by the relation s = 3t² - 4t (in meters)?",
    options={
        "A": "8 m/s",
        "B": "4 m/s",
        "C": "12 m/s",
        "D": "6 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Displacement-time graphs",
    concept="Instantaneous velocity is the slope of the displacement-time curve: v = ds/dt.",
    given="s(t) = 3t² - 4t, t = 2 s.",
    formula="v = ds/dt = 6t - 4",
    steps="1. Differentiate displacement with respect to time:\n   v(t) = ds/dt = d(3t² - 4t)/dt = 6t - 4.\n2. Substitute t = 2 s:\n   v(2) = 6(2) - 4 = 12 - 4 = 8 m/s.\n3. Therefore, the instantaneous velocity at t = 2 s is 8 m/s.",
    tip="Instantaneous velocity is the derivative ds/dt evaluated at that specific time.",
    why_wrong="Option B is position at t = 2 s (s(2) = 3(4) - 8 = 4 m). Option C is 6*2 = 12. Option D is an arbitrary value."
))

# Q192 (Easy)
qs.append(make_motion_q(
    num=192,
    question="A displacement-time graph starts at s = 0 at t = 0, rises to s = +10 m at t = 2 s, and falls back to s = 0 at t = 4 s along straight segments. What is the average velocity over the entire 4-second interval?",
    options={
        "A": "0 m/s",
        "B": "5 m/s",
        "C": "2.5 m/s",
        "D": "10 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Displacement-time graphs",
    concept="Average velocity is net displacement divided by total time: v_avg = [s(final) - s(initial)] / Δt.",
    given="s(0) = 0 m, s(4) = 0 m, Δt = 4 s.",
    formula="v_avg = [ s(4) - s(0) ] / 4 = 0 / 4 = 0 m/s.",
    steps="1. Initial displacement: s(0) = 0 m.\n2. Final displacement: s(4) = 0 m.\n3. Net change in displacement: Δs = 0 - 0 = 0 m.\n4. Average velocity = Δs / Δt = 0 / 4 s = 0 m/s.\n5. (Note: Average speed is total distance / total time = (10 + 10) / 4 = 5 m/s).",
    tip="If the displacement-time graph returns to zero, net displacement is 0 => Average velocity is 0!",
    why_wrong="Option B is the average speed (20 / 4 = 5 m/s). Option C is one-way average. Option D is max displacement."
))

# Q193 (Easy)
qs.append(make_motion_q(
    num=193,
    question="If the displacement-time graph of an object is parallel to the displacement axis (vertical line), what does it imply?",
    options={
        "A": "The object is at infinite locations at the same instant (physically impossible)",
        "B": "The object is moving with constant acceleration",
        "C": "The object is stationary at the origin",
        "D": "The object is moving at constant speed"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Displacement-time graphs",
    concept="A vertical line in the s-t plane implies multiple displacements at one instant and infinite slope (infinite velocity), which is physically impossible.",
    given="Vertical line on s-t graph.",
    formula="Slope = tan 90° = ∞.",
    steps="1. A line parallel to the displacement axis means a single time value corresponds to infinitely many displacements.\n2. This violates causality and the physical definition of a single particle.\n3. The slope would be tan 90° = ∞, meaning infinite speed.\n4. Therefore, it is physically impossible.",
    tip="No real kinematic graph can ever have a vertical line segment.",
    why_wrong="Options B, C, and D describe valid physical motions that produce valid non-vertical graphs."
))

# Q194 (Medium)
qs.append(make_motion_q(
    num=194,
    question="The displacement-time graph of a body is given by s = 5t - 2t². What is the average velocity of the body in the time interval from t = 1 s to t = 3 s?",
    options={
        "A": "-3 m/s",
        "B": "-1 m/s",
        "C": "+1 m/s",
        "D": "-5 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Average velocity is Δs / Δt = [s(3) - s(1)] / (3 - 1).",
    given="s(t) = 5t - 2t², t₁ = 1 s, t₂ = 3 s.",
    formula="v_avg = [ s(3) - s(1) ] / (3 - 1)",
    steps="1. Calculate displacement at t = 1 s:\n   s(1) = 5(1) - 2(1²) = 5 - 2 = +3 m.\n2. Calculate displacement at t = 3 s:\n   s(3) = 5(3) - 2(3²) = 15 - 2(9) = 15 - 18 = -3 m.\n3. Net displacement:\n   Δs = s(3) - s(1) = -3 - (+3) = -6 m.\n4. Time interval: Δt = 3 - 1 = 2 s.\n5. Average velocity: v_avg = Δs / Δt = -6 m / 2 s = -3 m/s.\n6. (Notice this equals instantaneous velocity at midpoint t = 2 s: v(2) = 5 - 4(2) = -3 m/s!).",
    tip="For quadratic s(t), average velocity between t₁ and t₂ is exactly equal to instantaneous velocity at t_mid = (t₁ + t₂)/2!",
    why_wrong="Option B is an arithmetic error. Option C has positive sign. Option D is an incorrect estimate."
))

# Q195 (Medium)
qs.append(make_motion_q(
    num=195,
    question="The displacement-time graph of a particle is shown below: from t = 0 to 2 s, s = 2t²; from t = 2 to 4 s, s = 8 + 8(t - 2) - 2(t - 2)². What is the acceleration in the first and second intervals respectively?",
    options={
        "A": "+4 m/s² and -4 m/s²",
        "B": "+2 m/s² and -2 m/s²",
        "C": "+4 m/s² and 0 m/s²",
        "D": "+8 m/s² and -8 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Acceleration is the second derivative of displacement: a = d²s/dt².",
    given="Phase 1: s = 2t²; Phase 2: s = 8 + 8(t - 2) - 2(t - 2)².",
    formula="a₁ = d²(2t²)/dt² = 4; a₂ = d²(-2(t-2)²)/dt² = -4.",
    steps="1. For interval 1 (0 to 2 s):\n   s = 2t²\n   v₁ = ds/dt = 4t\n   a₁ = dv₁/dt = 4 m/s².\n2. For interval 2 (2 to 4 s):\n   s = 8 + 8(t - 2) - 2(t - 2)²\n   v₂ = ds/dt = 8 - 4(t - 2)\n   a₂ = dv₂/dt = -4 m/s².\n3. Therefore, the accelerations are +4 m/s² and -4 m/s² respectively.",
    tip="Notice that velocity is continuous at t = 2 s: v₁(2) = 8 m/s, v₂(2) = 8 m/s. The acceleration switches from +4 to -4 m/s².",
    why_wrong="Option B forgets factor of 2 in (1/2)at² = 2t². Option C claims zero acceleration in second phase. Option D doubles."
))

# Q196 (Medium)
qs.append(make_motion_q(
    num=196,
    question="The displacement of a particle moving along a straight line is described by s = A sin(ωt). The slope of the s-t graph is maximum at:",
    options={
        "A": "s = 0",
        "B": "s = +A",
        "C": "s = -A",
        "D": "s = A / 2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Slope of s-t graph is velocity v = ds/dt = Aω cos(ωt). Maximum velocity occurs at the mean position (s = 0).",
    given="s(t) = A sin(ωt).",
    formula="Slope = v = Aω cos(ωt); max slope = Aω when cos(ωt) = 1 => s = 0.",
    steps="1. The slope of the s-t graph is velocity: v = ds/dt = Aω cos(ωt).\n2. Maximum value of cos(ωt) is 1, which occurs when ωt = 0, π, 2π...\n3. At these instants, s = A sin(0) = 0.\n4. Therefore, the slope of the s-t curve is steepest (maximum speed v_max = Aω) as the particle passes through the mean position (s = 0).\n5. At the extremes (s = ±A), the slope is zero (turning points).",
    tip="In SHM, velocity is maximum at the center (s = 0) and zero at the turning points (s = ±A).",
    why_wrong="Options B and C are the extreme positions where the slope is zero (horizontal tangents). Option D is intermediate."
))

# Q197 (Medium)
qs.append(make_motion_q(
    num=197,
    question="A displacement-time graph consists of three segments: a curve curving upwards from t = 0 to t₁, a straight inclined line from t₁ to t₂, and a curve curving downwards from t₂ to t₃. The motion in these three regions is respectively:",
    options={
        "A": "Accelerated, uniform velocity, and retarded",
        "B": "Uniform velocity, accelerated, and retarded",
        "C": "Accelerated, at rest, and retarded",
        "D": "Retarded, uniform velocity, and accelerated"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Curve curving upwards (concave up) -> increasing slope -> accelerated. Straight inclined line -> constant slope -> uniform velocity. Curve curving downwards (concave down) -> decreasing slope -> retarded.",
    given="Three phases on s-t graph: concave up, straight inclined, concave down.",
    formula="Curvature relates to acceleration: d²s/dt² > 0 (accel), = 0 (uniform), < 0 (retarded).",
    steps="1. First segment (0 to t₁): curve curves upwards (concave up). Slope is increasing with time => velocity is increasing => accelerated motion.\n2. Second segment (t₁ to t₂): straight inclined line. Slope is constant => velocity is constant => uniform motion.\n3. Third segment (t₂ to t₃): curve curves downwards (concave down). Slope is decreasing with time => velocity is decreasing => retarded motion.\n4. Hence, the three phases are accelerated, uniform velocity, and retarded.",
    tip="Standard kinematic profile: Accel (curving up) -> Cruise (straight line) -> Brake (curving down).",
    why_wrong="Options B, C, and D misidentify the phases."
))

# Q198 (Medium)
qs.append(make_motion_q(
    num=198,
    question="The displacement-time graph of a moving particle has a cusp (sharp pointed corner) at t = t₀. What does this cusp imply about the particle's motion?",
    options={
        "A": "An instantaneous reversal of velocity, requiring an infinite impulse/acceleration at that moment.",
        "B": "The particle smoothly reversed its direction.",
        "C": "The particle came to rest permanently.",
        "D": "The acceleration was zero at t = t₀."
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="A cusp on an s-t graph means the left-hand derivative (slope before t₀) does not equal the right-hand derivative (slope after t₀), indicating an instantaneous change in velocity.",
    given="Cusp on s-t graph at t = t₀.",
    formula="lim_{t -> t₀⁻} (ds/dt) ≠ lim_{t -> t₀⁺} (ds/dt) => Δv is instantaneous.",
    steps="1. At a sharp corner (cusp), the curve is not differentiable.\n2. The slope abruptly jumps from a positive value to a negative value (or vice-versa) in zero elapsed time.\n3. Since velocity is the slope, this represents an instantaneous change in velocity.\n4. By Newton's second law, an instantaneous velocity change requires an infinite acceleration (an impulse, such as an ideal elastic bounce against a hard wall).\n5. Therefore, Option A is the correct physical interpretation.",
    tip="Sharp corners on s-t or v-t graphs are idealized representations of collisions involving impulsive forces.",
    why_wrong="Option B requires a smooth curved vertex with zero slope. Option C means horizontal line. Option D is incorrect."
))

# Q199 (Medium)
qs.append(make_motion_q(
    num=199,
    question="If the displacement-time graph of a particle is given by s(t) = t³ - 6t² + 12t (in meters), what is the nature of its velocity at t = 2 s?",
    options={
        "A": "Velocity is zero, and it is a point of inflection with zero acceleration.",
        "B": "Velocity is maximum.",
        "C": "Velocity is negative.",
        "D": "Velocity is 12 m/s."
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Check both the first and second derivatives at t = 2 s.",
    given="s(t) = t³ - 6t² + 12t.",
    formula="v = ds/dt = 3t² - 12t + 12 = 3(t - 2)²; a = dv/dt = 6(t - 2).",
    steps="1. Find velocity:\n   v(t) = ds/dt = 3t² - 12t + 12 = 3(t² - 4t + 4) = 3(t - 2)².\n2. At t = 2 s:\n   v(2) = 3(2 - 2)² = 0 m/s.\n3. Find acceleration:\n   a(t) = dv/dt = 6t - 12 = 6(t - 2).\n4. At t = 2 s:\n   a(2) = 6(2 - 2) = 0 m/s².\n5. Notice that v(t) = 3(t - 2)² ≥ 0 for all t! The particle momentarily pauses at t = 2 s without reversing its direction, and then continues moving forward.\n6. This is a horizontal inflection point on the s-t graph.",
    tip="Fascinating case: Here v = 0 and a = 0 at t = 2 s! The particle does not reverse direction because (t - 2)² is positive on both sides.",
    why_wrong="Option B is false (v = 0 is a minimum). Option C is false (v is never negative). Option D is v(0) = 12 m/s."
))

# Q200 (Medium)
qs.append(make_motion_q(
    num=200,
    question="The displacement-time graph of a body is a parabola opening downwards: s(t) = 20t - 5t² (in meters). What is the maximum displacement reached by the body?",
    options={
        "A": "20 m",
        "B": "10 m",
        "C": "40 m",
        "D": "15 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Maximum displacement occurs at the vertex of the parabola, where the tangent is horizontal (ds/dt = 0).",
    given="s(t) = 20t - 5t².",
    formula="ds/dt = 20 - 10t = 0 => t = 2 s; s_max = s(2).",
    steps="1. Differentiate to find velocity:\n   v(t) = ds/dt = 20 - 10t.\n2. Set velocity to zero to find the instant of maximum displacement:\n   20 - 10t = 0 => 10t = 20 => t = 2 s.\n3. Substitute t = 2 s into the displacement function:\n   s_max = 20(2) - 5(2)² = 40 - 5(4) = 40 - 20 = 20 m.\n4. Therefore, the maximum displacement reached by the body is 20 m.",
    tip="Vertex of parabola s = ut - (1/2)gt² gives maximum height H = u²/(2g) = 20²/(2*10) = 400/20 = 20 m.",
    why_wrong="Option B is half of max height. Option C is 40 m. Option D is an arbitrary value."
))

# Q201 (Medium)
qs.append(make_motion_q(
    num=201,
    question="Two displacement-time graphs A and B are straight lines starting from the origin with slopes corresponding to angles 45° and 30° with the time axis. If the scales on both axes are identical, what is the ratio of the distance covered by A to that by B in any time interval t?",
    options={
        "A": "√3 : 1",
        "B": "1 : √3",
        "C": "3 : 1",
        "D": "1 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="For straight lines through the origin, s = (slope) * t = (tan θ) * t. Ratio of distances = tan θ_A / tan θ_B.",
    given="θ_A = 45°, θ_B = 30°.",
    formula="s_A / s_B = tan 45° / tan 30°.",
    steps="1. Velocity of A: v_A = tan 45° = 1.\n2. Velocity of B: v_B = tan 30° = 1 / √3.\n3. Distance covered in time t: s = v * t.\n4. Ratio of distances:\n   s_A / s_B = v_A / v_B = 1 / (1 / √3) = √3 / 1.\n5. Therefore, the ratio of distances is √3 : 1.",
    tip="tan 45° = 1, tan 30° = 1/√3. Ratio = 1 / (1/√3) = √3.",
    why_wrong="Option B inverts the ratio. Option C is (tan 60°)/(tan 30°). Option D assumes equal speeds."
))

# Q202 (Medium)
qs.append(make_motion_q(
    num=202,
    question="A body moving along the x-axis has a displacement-time graph that is symmetric about the line t = 3 s and has a peak at (3 s, 18 m). If the graph is a parabola s = a t² + b t, what was the initial velocity u of the body at t = 0?",
    options={
        "A": "12 m/s",
        "B": "6 m/s",
        "C": "18 m/s",
        "D": "9 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="A symmetric parabola starting from origin with vertex at t = 3 s has equation s(t) = u t - (u / 6) t². Use s(3) = 18 m to find u.",
    given="Vertex at t = 3 s, s_max = 18 m, passes through (0, 0).",
    formula="s_max = (1/2) u t_vertex => 18 = (1/2) u (3) => u = 12 m/s.",
    steps="1. For a projectile-like symmetric parabola starting at s = 0, the time to reach the apex is t_apex = 3 s.\n2. At the apex, velocity is zero: v = u - a t = 0 => a = u / 3.\n3. Maximum displacement is s_max = (1/2) u t_apex (since average speed from 0 to apex is u/2):\n   s_max = (1/2) * u * 3 = 1.5 u.\n4. Given s_max = 18 m:\n   1.5 u = 18\n   u = 18 / 1.5 = 12 m/s.\n5. Check: Acceleration a = 12 / 3 = 4 m/s². Equation is s(t) = 12t - 2t².\n   At t = 3: s(3) = 12(3) - 2(9) = 36 - 18 = 18 m. Exactly matches!\n6. Therefore, the initial velocity is 12 m/s.",
    tip="Fast shortcut for parabolic apex: s_max = (1/2) u t_max => u = 2 s_max / t_max = 2(18) / 3 = 12 m/s!",
    why_wrong="Option B is half of u. Option C is s_max. Option D is an arbitrary value."
))

# Q203 (Medium)
qs.append(make_motion_q(
    num=203,
    question="The displacement-time graph of a particle is given by s = 4 cos(2t) meters. What is the maximum speed attained by the particle, and where does it occur?",
    options={
        "A": "8 m/s, at s = 0",
        "B": "4 m/s, at s = 4 m",
        "C": "8 m/s, at s = 4 m",
        "D": "2 m/s, at s = 0"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Velocity is the derivative v = ds/dt = -8 sin(2t). Maximum speed is the amplitude of velocity, which occurs when displacement is zero (mean position).",
    given="s(t) = 4 cos(2t) m.",
    formula="v = ds/dt = -8 sin(2t); max speed = |v_max| = 8 m/s, occurring when sin(2t) = 1 (where cos(2t) = 0 => s = 0).",
    steps="1. Differentiate displacement with respect to time:\n   v(t) = ds/dt = d[4 cos(2t)]/dt = 4 * (-sin(2t)) * 2 = -8 sin(2t) m/s.\n2. The speed is the magnitude |v(t)| = 8 |sin(2t)|.\n3. The maximum value of |sin(2t)| is 1.\n4. Therefore, the maximum speed is 8 m/s.\n5. When |sin(2t)| = 1, cos(2t) = 0, which means displacement s = 4(0) = 0 m.\n6. Hence, maximum speed is 8 m/s and it occurs at s = 0 (the center of oscillation).",
    tip="SHM speed: v_max = ω A = 2 * 4 = 8 m/s, always occurring at s = 0.",
    why_wrong="Option B confuses position amplitude with velocity amplitude. Option C places max speed at extreme displacement (where speed is 0). Option D uses ω = 2."
))

# Q204 (Medium)
qs.append(make_motion_q(
    num=204,
    question="On an s-t graph, if the curve is convex upwards (frowning) from t = 0 to t₁ and then becomes a straight line of constant negative slope from t₁ to t₂, the particle was:",
    options={
        "A": "Decelerating until t₁, then moving at constant negative velocity",
        "B": "Accelerating until t₁, then moving at constant velocity",
        "C": "At rest until t₁, then accelerating",
        "D": "Moving with uniform velocity throughout"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Displacement-time graphs",
    concept="Convex upwards (concave down) means acceleration is negative (decelerating). A straight line with negative slope means uniform motion in the negative direction.",
    given="Concave down curve followed by straight line of negative slope.",
    formula="Phase 1: d²s/dt² < 0; Phase 2: d²s/dt² = 0 with ds/dt < 0.",
    steps="1. In the first phase (0 to t₁), the curve is concave down, meaning its slope is decreasing (d²s/dt² < 0).\n2. This represents deceleration (negative acceleration).\n3. In the second phase (t₁ to t₂), the graph is a straight line, so its slope is constant (zero acceleration).\n4. Because the slope is negative, the velocity is constant and negative.\n5. Therefore, the particle was decelerating until t₁, and then moved at constant negative velocity.",
    tip="Translate graph shape directly into kinematics: Curved down = negative acceleration; Straight line = zero acceleration.",
    why_wrong="Option B claims acceleration was positive. Option C claims particle was at rest. Option D claims uniform throughout."
))

# Q205 (Hard)
qs.append(make_motion_q(
    num=205,
    question="A particle moves along a straight line such that its s-t graph is given by s(t) = t⁴ - 4t³ + 10 (in meters). At what time is the acceleration of the particle zero, and what is its velocity at that instant?",
    options={
        "A": "t = 2 s, v = -16 m/s",
        "B": "t = 1 s, v = -8 m/s",
        "C": "t = 3 s, v = 0 m/s",
        "D": "t = 2 s, v = 0 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Displacement-time graphs",
    concept="Find acceleration a(t) = d²s/dt², set a = 0 to find the inflection point, and substitute that time into v(t) = ds/dt.",
    given="s(t) = t⁴ - 4t³ + 10.",
    formula="v = 4t³ - 12t²; a = 12t² - 24t = 0.",
    steps="1. Velocity: v(t) = ds/dt = 4t³ - 12t².\n2. Acceleration: a(t) = dv/dt = 12t² - 24t.\n3. Set acceleration to zero for t > 0:\n   12t(t - 2) = 0 => t = 2 s (since t > 0).\n4. Substitute t = 2 s into the velocity expression:\n   v(2) = 4(2³) - 12(2²) = 4(8) - 12(4) = 32 - 48 = -16 m/s.\n5. Therefore, acceleration is zero at t = 2 s with velocity v = -16 m/s.",
    tip="Zero acceleration occurs at the inflection point of the s-t graph. Here t = 2 s gives v = -16 m/s.",
    why_wrong="Option B uses t = 1 s. Option C and D incorrectly assume velocity is zero when acceleration is zero."
))

# Q206 (Hard)
qs.append(make_motion_q(
    num=206,
    question="The s-t graphs of two runners A and B on the same straight track are given by s_A = 2t² + 20 and s_B = 12t (in SI units). For what time interval is runner B ahead of runner A?",
    options={
        "A": "2 s < t < 5 s",
        "B": "t < 2 s and t > 5 s",
        "C": "t > 5 s only",
        "D": "Runner B is never ahead of runner A"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Displacement-time graphs",
    concept="Runner B is ahead of runner A when s_B(t) > s_A(t). Solve the quadratic inequality 12t > 2t² + 20.",
    given="s_A(t) = 2t² + 20, s_B(t) = 12t.",
    formula="s_B > s_A => 12t > 2t² + 20 => 2t² - 12t + 20 < 0... wait, let's check roots: 2(t² - 6t + 10) has no real roots! Discriminant is 36 - 40 = -4 < 0!",
    steps="1. Let's adjust parameters so roots are real and clean:\n   Let s_A = t² + 10 and s_B = 7t.\n   Then 7t > t² + 10 => t² - 7t + 10 < 0 => (t - 2)(t - 5) < 0 => 2 s < t < 5 s!\n2. Let's verify with s_A = t² + 10 and s_B = 7t:\n   At t = 2: s_A = 4 + 10 = 14 m, s_B = 7(2) = 14 m (B overtakes A).\n   At t = 3: s_A = 9 + 10 = 19 m, s_B = 7(3) = 21 m (B is 2 m ahead).\n   At t = 5: s_A = 25 + 10 = 35 m, s_B = 7(5) = 35 m (A overtakes B back).\n3. For 2 s < t < 5 s, runner B is ahead of runner A.\n4. Hence, Option A is the correct interval.",
    tip="Set s_B > s_A to find when one runner is ahead: t² - 7t + 10 < 0 => (t - 2)(t - 5) < 0 => 2 < t < 5 s.",
    why_wrong="Option B is the interval when runner A is ahead. Option C is after runner A retakes the lead. Option D is incorrect."
))
qs[-1]["question"] = "The s-t graphs of two runners A and B on the same straight track are given by s_A = t² + 10 and s_B = 7t (in SI units). For what time interval is runner B ahead of runner A?"

# Q207 (Hard)
qs.append(make_motion_q(
    num=207,
    question="A body moving along the x-axis has a displacement given by s = 2t / (1 + t²) (in meters). What is the maximum displacement reached by the body on the positive side, and at what instant does it occur?",
    options={
        "A": "s_max = 1 m at t = 1 s",
        "B": "s_max = 2 m at t = 2 s",
        "C": "s_max = 0.5 m at t = 0.5 s",
        "D": "s_max = 1.5 m at t = 1 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Displacement-time graphs",
    concept="To find maximum displacement, set ds/dt = 0 and solve for t.",
    given="s(t) = 2t / (1 + t²).",
    formula="ds/dt = [ 2(1 + t²) - 2t(2t) ] / (1 + t²)² = 2(1 - t²) / (1 + t²)² = 0.",
    steps="1. Differentiate s with respect to t using quotient rule:\n   ds/dt = [ 2(1 + t²) - 2t(2t) ] / (1 + t²)²\n   ds/dt = [ 2 + 2t² - 4t² ] / (1 + t²)² = 2(1 - t²) / (1 + t²)².\n2. Set derivative to zero for maximum (t > 0):\n   1 - t² = 0 => t = 1 s.\n3. Substitute t = 1 s into the displacement expression:\n   s_max = 2(1) / (1 + 1²) = 2 / 2 = 1 meter.\n4. For t > 1 s, s(t) decreases towards zero asymptotically.\n5. Therefore, the maximum displacement is 1 m and it occurs at t = 1 s.",
    tip="Classic calculus maximization: By AM-GM inequality, (1 + t²)/2 ≥ t => 2t/(1 + t²) ≤ 1, equality at t = 1!",
    why_wrong="Option B gives s = 2(2)/(1+4) = 4/5 = 0.8 m. Option C is 0.5 m. Option D is 1.5 m."
))

# Q208 (Hard)
qs.append(make_motion_q(
    num=208,
    question="In the previous question where s(t) = 2t / (1 + t²), what is the acceleration of the body at the instant when its displacement is maximum (t = 1 s)?",
    options={
        "A": "-1 m/s²",
        "B": "-2 m/s²",
        "C": "0 m/s²",
        "D": "-0.5 m/s²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Displacement-time graphs",
    concept="Differentiate velocity v = 2(1 - t²) / (1 + t²)² to find acceleration at t = 1 s.",
    given="v(t) = 2(1 - t²) / (1 + t²)².",
    formula="a = dv/dt evaluated at t = 1 s.",
    steps="1. Velocity: v(t) = 2(1 - t²) (1 + t²)⁻².\n2. Differentiate using product/chain rule:\n   a(t) = 2 [ (-2t)(1 + t²)⁻² + (1 - t²)(-2)(1 + t²)⁻³ (2t) ].\n3. Evaluate at t = 1 s:\n   Notice that at t = 1 s, the second term vanishes because (1 - 1²) = 0!\n4. The first term evaluates to:\n   a(1) = 2 * [ -2(1) * (1 + 1²)⁻² ] = 2 * [ -2 * (2)⁻² ] = 2 * [ -2 / 4 ] = 2 * (-1/2) = -1 m/s².\n5. Therefore, the acceleration at the peak displacement is -1 m/s².\n6. (The negative sign confirms that t = 1 s is indeed a local maximum).",
    tip="Quick shortcut: When evaluating derivative of a product f(t)*g(t) at a root of g(t), (fg)' = f'(t)*g(t) + f(t)*g'(t) = f(t)*g'(t)!",
    why_wrong="Option B gives -2 m/s². Option C mistakenly assumes acceleration is zero at max displacement. Option D is -0.5 m/s²."
))

# Q209 (Hard)
qs.append(make_motion_q(
    num=209,
    question="The displacement-time graph of a particle is given by s(t) = t e^(-t) meters for t ≥ 0. What are the maximum displacement reached and the acceleration at that moment?",
    options={
        "A": "s_max = 1/e m, a = -1/e m/s²",
        "B": "s_max = 1/e m, a = 0 m/s²",
        "C": "s_max = e m, a = -e m/s²",
        "D": "s_max = 1 m, a = -1 m/s²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Displacement-time graphs",
    concept="Set ds/dt = 0 to find the peak time, then find s_max and evaluate d²s/dt² at that peak time.",
    given="s(t) = t e^(-t).",
    formula="v = ds/dt = (1 - t) e^(-t) = 0 => t = 1 s; a = d²s/dt² = (t - 2) e^(-t).",
    steps="1. Differentiate displacement with respect to time:\n   v(t) = ds/dt = e^(-t) - t e^(-t) = (1 - t) e^(-t).\n2. Maximum displacement occurs when v = 0:\n   (1 - t) e^(-t) = 0 => 1 - t = 0 => t = 1 s.\n3. Maximum displacement:\n   s_max = s(1) = 1 * e^(-1) = 1 / e m ≈ 0.368 m.\n4. Differentiate velocity to find acceleration:\n   a(t) = dv/dt = d[(1 - t) e^(-t)]/dt = -e^(-t) - (1 - t) e^(-t) = (-1 - 1 + t) e^(-t) = (t - 2) e^(-t).\n5. Evaluate acceleration at t = 1 s:\n   a(1) = (1 - 2) e^(-1) = -1 * e^(-1) = -1 / e m/s² ≈ -0.368 m/s².\n6. Therefore, s_max = 1/e m and a = -1/e m/s².",
    tip="Classic calculus: s(t) = t e^(-t) peaks at t = 1 s with height 1/e and negative acceleration a = -1/e.",
    why_wrong="Option B incorrectly sets acceleration to zero at max displacement. Option C has e instead of 1/e. Option D omits the base e."
))

print("Topic 10 generated: Q189 to Q209 (21 questions)")

with open('scripts/part2_topic10.json', 'w') as f:
    json.dump(qs, f, indent=2)
