import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 11: Velocity-time graphs (Q210 - Q230)
# 5 Easy, 11 Medium, 5 Hard (Total 21)
# ==============================================================================

# Q210 (Easy)
qs.append(make_motion_q(
    num=210,
    question="The area under a velocity-time (v-t) graph bounded by the time axis between t₁ and t₂ represents the:",
    options={
        "A": "Displacement of the object",
        "B": "Acceleration of the object",
        "C": "Force acting on the object",
        "D": "Instantaneous speed"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Velocity-time graphs",
    concept="In calculus, displacement is the integral of velocity with respect to time: Δx = ∫ v dt. On a graph, the definite integral corresponds to the area between the curve and the horizontal axis.",
    given="Velocity-time graph.",
    formula="Area = ∫_{t₁}^{t₂} v dt = Δx (Displacement).",
    steps="1. By definition, v = dx/dt => dx = v dt.\n2. Integrating both sides from t₁ to t₂:\n   Δx = ∫_{t₁}^{t₂} v dt.\n3. The definite integral represents the area bounded by the curve, the time axis, and the vertical lines t = t₁ and t = t₂.\n4. If the curve lies above the time axis, area is positive; if below, area is negative.\n5. Therefore, the area represents the displacement of the object.",
    tip="Golden Graph Rule: Area under v-t graph = Displacement. Area under a-t graph = Change in velocity. Slope of v-t graph = Acceleration.",
    why_wrong="Option B is the slope of the v-t graph (dv/dt). Option C requires mass. Option D is the height of the curve."
))

# Q211 (Easy)
qs.append(make_motion_q(
    num=211,
    question="The slope of a velocity-time graph represents:",
    options={
        "A": "Acceleration",
        "B": "Displacement",
        "C": "Work done",
        "D": "Power"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Velocity-time graphs",
    concept="Slope of a v-t graph is the time rate of change of velocity: dv/dt = a (acceleration).",
    given="Velocity-time curve.",
    formula="Slope = tan θ = dv/dt = a.",
    steps="1. Slope of a curve y vs x is dy/dx.\n2. For a v-t graph, y = v and x = t, so slope is dv/dt.\n3. By definition of kinematics, dv/dt is the acceleration.\n4. A positive slope indicates positive acceleration, a negative slope indicates retardation, and zero slope indicates uniform velocity.\n5. Therefore, the slope represents acceleration.",
    tip="Slope of v-t curve = a. Positive slope = speeding up (if v>0); Negative slope = slowing down (if v>0).",
    why_wrong="Option B is the area under the v-t graph. Options C and D are energetic quantities requiring force."
))

# Q212 (Easy)
qs.append(make_motion_q(
    num=212,
    question="A car moves with a constant velocity of 15 m/s for 8 seconds. What is the displacement of the car as determined from its velocity-time graph?",
    options={
        "A": "120 m",
        "B": "60 m",
        "C": "240 m",
        "D": "15 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Velocity-time graphs",
    concept="For constant velocity, the v-t graph is a horizontal line forming a rectangle of height v and width t. Area = v * t = displacement.",
    given="v = 15 m/s (constant), t = 8 s.",
    formula="Displacement = Area of rectangle = height * width = v * t.",
    steps="1. The v-t graph is a horizontal line at v = 15 m/s from t = 0 to t = 8 s.\n2. The area bounded by the graph and the time axis is a rectangle:\n   Height = 15 m/s\n   Base = 8 s.\n3. Area = 15 m/s * 8 s = 120 m.\n4. Therefore, the displacement of the car is 120 m.",
    tip="Area of rectangle = v * t = 15 * 8 = 120 m.",
    why_wrong="Option B uses triangle area (1/2 vt = 60 m). Option C doubles the area. Option D is velocity."
))

# Q213 (Easy)
qs.append(make_motion_q(
    num=213,
    question="A particle starts from rest and its velocity increases linearly with time, reaching 20 m/s in 4 seconds. What is the displacement of the particle during these 4 seconds?",
    options={
        "A": "40 m",
        "B": "80 m",
        "C": "20 m",
        "D": "5 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Velocity-time graphs",
    concept="For uniformly accelerated motion starting from rest, the v-t graph is a triangle with base t and height v. Area = (1/2) * base * height.",
    given="u = 0, v = 20 m/s, t = 4 s.",
    formula="Displacement = Area of triangle = (1/2) * base * height = (1/2) * t * v.",
    steps="1. The v-t curve is a straight line from (0, 0) to (4, 20).\n2. The shape bounded by this line and the time axis is a right triangle:\n   Base = 4 s\n   Height = 20 m/s.\n3. Area of triangle = (1/2) * 4 s * 20 m/s = 2 * 20 = 40 m.\n4. Therefore, the displacement is 40 m.",
    tip="Displacement from rest = Area of triangle = (1/2) * t * v_max = (1/2) * 4 * 20 = 40 m.",
    why_wrong="Option B forgets the 1/2 factor (rectangle area = 80 m). Option C is half the answer. Option D is acceleration (20/4 = 5 m/s²)."
))

# Q214 (Easy)
qs.append(make_motion_q(
    num=214,
    question="If a velocity-time graph is a straight line parallel to the time axis, what is the acceleration of the particle?",
    options={
        "A": "Zero",
        "B": "Constant and positive",
        "C": "Constant and negative",
        "D": "Continuously increasing"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Velocity-time graphs",
    concept="A horizontal line has zero slope. Since slope of v-t graph represents acceleration, a = 0.",
    given="v-t graph is horizontal (v = constant).",
    formula="Slope = dv/dt = a = 0.",
    steps="1. A line parallel to the time axis means velocity v is constant (does not change with time).\n2. Slope = dv/dt = 0.\n3. Acceleration is defined as dv/dt.\n4. Therefore, acceleration is zero.",
    tip="Horizontal line on v-t graph means uniform motion with zero acceleration.",
    why_wrong="Options B, C, and D all describe non-zero acceleration, which would require an inclined or curved line."
))

# Q215 (Medium)
qs.append(make_motion_q(
    num=215,
    question="A particle's v-t graph has a positive triangular area of +30 m above the time axis from t = 0 to 4 s, and a negative triangular area of -10 m below the time axis from t = 4 to 6 s. What are the net displacement and total distance covered by the particle in 6 seconds?",
    options={
        "A": "Displacement = +20 m, Distance = 40 m",
        "B": "Displacement = +40 m, Distance = 20 m",
        "C": "Displacement = +20 m, Distance = 20 m",
        "D": "Displacement = +30 m, Distance = 30 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Displacement is the ALGEBRAIC sum of areas (taking signs into account): Δx = Area_above - Area_below. Distance is the ABSOLUTE sum of areas: s = |Area_above| + |Area_below|.",
    given="Area₁ = +30 m (above axis), Area₂ = -10 m (below axis).",
    formula="Displacement = Area₁ + Area₂; Distance = |Area₁| + |Area₂|.",
    steps="1. Area above the time axis represents positive displacement (forward motion): +30 m.\n2. Area below the time axis represents negative displacement (backward motion): -10 m.\n3. Net displacement = (+30 m) + (-10 m) = +20 m.\n4. Total distance is the total path length traversed, treating all movements as positive:\n   Distance = |+30 m| + |-10 m| = 30 + 10 = 40 m.\n5. Therefore, Displacement = +20 m and Distance = 40 m.",
    tip="Vital NEET Rule: For displacement, subtract areas below the axis. For distance, ADD all areas positively!",
    why_wrong="Option B swaps displacement and distance. Option C subtracts for distance as well. Option D ignores the second interval."
))

# Q216 (Medium)
qs.append(make_motion_q(
    num=216,
    question="A velocity-time graph is a trapezoid: the particle accelerates from rest to 10 m/s in 2 seconds, moves at 10 m/s for 4 seconds, and retards to rest in 2 seconds. What is the total distance traveled by the particle?",
    options={
        "A": "60 m",
        "B": "80 m",
        "C": "50 m",
        "D": "40 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Area of a trapezoid is (1/2) * (sum of parallel sides) * (height).",
    given="Base b₁ = 8 s (total time), Top parallel side b₂ = 4 s (cruising time), Height h = 10 m/s.",
    formula="Area = (1/2) * (b₁ + b₂) * h",
    steps="1. Total time on base: b₁ = 2 + 4 + 2 = 8 seconds.\n2. Cruising time on top parallel side: b₂ = 4 seconds.\n3. Height of trapezoid (peak velocity): h = 10 m/s.\n4. Area of trapezoid = (1/2) * (b₁ + b₂) * h = (1/2) * (8 + 4) * 10 = (1/2) * 12 * 10 = 60 m.\n5. Alternatively, sum the 3 individual areas:\n   Triangle 1 (accel): (1/2) * 2 * 10 = 10 m.\n   Rectangle (cruise): 4 * 10 = 40 m.\n   Triangle 2 (brake): (1/2) * 2 * 10 = 10 m.\n   Total distance = 10 + 40 + 10 = 60 m.\n6. Therefore, the total distance traveled is 60 m.",
    tip="Use the trapezoid formula directly for 3-stage motion: Area = (1/2) * (t_total + t_cruise) * v_max = (1/2) * (8 + 4) * 10 = 60 m.",
    why_wrong="Option B treats it as a rectangle (8 * 10 = 80 m). Option C is 50 m. Option D is 40 m."
))

# Q217 (Medium)
qs.append(make_motion_q(
    num=217,
    question="The velocity-time graph of a lift ascending from ground level is shown: it accelerates uniformly at a = 2 m/s² for time t₁, moves at constant speed for time t₂, and retards uniformly at 2 m/s² to rest in time t₃ = t₁. If the total height reached is 75 m and maximum speed is 10 m/s, what is the cruising time t₂?",
    options={
        "A": "2.5 seconds",
        "B": "5.0 seconds",
        "C": "7.5 seconds",
        "D": "10.0 seconds"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Find acceleration time t₁ from v_max / a, find distance covered in acceleration and deceleration phases, and deduce cruising time t₂ from remaining height.",
    given="a = 2 m/s², v_max = 10 m/s, total height H = 75 m, t₃ = t₁.",
    formula="t₁ = v_max / a; s₁ = (1/2) v_max t₁; s₂ = v_max t₂; H = 2 s₁ + s₂.",
    steps="1. Time to accelerate to 10 m/s:\n   t₁ = v_max / a = 10 / 2 = 5 seconds.\n2. Height gained during acceleration:\n   s₁ = (1/2) * v_max * t₁ = (1/2) * 10 * 5 = 25 m.\n3. Since deceleration is also 2 m/s², t₃ = 5 s and height gained during deceleration is s₃ = 25 m.\n4. Total height gained during acceleration and deceleration = s₁ + s₃ = 25 + 25 = 50 m.\n5. Remaining height to be covered during constant speed:\n   s₂ = 75 m - 50 m = 25 m.\n6. Cruising time at constant speed v_max = 10 m/s:\n   t₂ = s₂ / v_max = 25 m / 10 m/s = 2.5 seconds.\n7. Therefore, the cruising time is 2.5 seconds.",
    tip="Break trapezoid into 2 triangles (25 m each) and 1 rectangle (25 m). t₂ = 25 / 10 = 2.5 s.",
    why_wrong="Option B is t₁ (5.0 s). Option C is 7.5 s. Option D is total time minus something."
))

# Q218 (Medium)
qs.append(make_motion_q(
    num=218,
    question="A body is projected vertically upwards with velocity u. Neglecting air resistance, which of the following best represents its velocity-time (v-t) graph from launch until it returns to the ground?",
    options={
        "A": "A single straight line with a constant negative slope (-g) crossing the time axis at t = u/g",
        "B": "A parabola opening downwards",
        "C": "Two straight lines forming a V-shape",
        "D": "A horizontal line at v = u"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Velocity-time graphs",
    concept="For free fall under gravity, v(t) = u - g t. This is a linear equation with constant slope equal to -g.",
    given="v(t) = u - g t, from t = 0 to t = 2u/g.",
    formula="Slope = dv/dt = -g (constant).",
    steps="1. Taking upward as positive, acceleration is a = -g (constant).\n2. Equation of velocity: v(t) = u - g t.\n3. This is a straight line of equation y = mx + c with slope m = -g and y-intercept c = u.\n4. At launch (t = 0), v = +u.\n5. At the highest point (t = u/g), v = 0 (the line crosses the time axis).\n6. On the way down, velocity becomes negative, reaching -u at t = 2u/g.\n7. Since acceleration is constant throughout, the slope does not change, forming a single continuous straight line.\n8. Therefore, Option A is the correct graph.",
    tip="Common student misconception: Many think the graph must bend or bounce at the top! The v-t graph does NOT bend; it is a single unbroken straight line of constant slope -g.",
    why_wrong="Option B confuses the position-time graph (parabola) with the velocity-time graph (straight line). Option C is the SPEED-time graph, not velocity-time. Option D assumes zero acceleration."
))

# Q219 (Medium)
qs.append(make_motion_q(
    num=219,
    question="In the vertical projection of Q218, what would the SPEED-time graph look like?",
    options={
        "A": "A V-shaped graph: a straight line descending from u to 0, then a straight line ascending from 0 to u with positive slope +g",
        "B": "A single straight line continuing into negative values",
        "C": "A horizontal line",
        "D": "A parabola opening downwards"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Speed is the absolute value of velocity: Speed(t) = |v(t)| = |u - g t|. The negative portion of the v-t line reflects across the time axis, forming a V-shape.",
    given="Speed = |v(t)| = |u - gt|.",
    formula="Speed ≥ 0 at all times; V-shaped reflected graph.",
    steps="1. Speed is the scalar magnitude of velocity: speed = |v|.\n2. For 0 ≤ t ≤ u/g (rising phase), v ≥ 0, so speed decreases linearly from u to 0 with slope -g.\n3. For u/g ≤ t ≤ 2u/g (falling phase), v ≤ 0, so speed = |v| = -(u - gt) = gt - u.\n4. This is a straight line increasing linearly from 0 to u with positive slope +g.\n5. Therefore, the speed-time graph forms a V-shape touching the time axis at t = u/g.",
    tip="Speed-time graphs are formed by reflecting all negative parts of the v-t graph upwards across the time axis!",
    why_wrong="Option B is the velocity-time graph (which goes negative). Option C is for uniform motion. Option D is position-time graph."
))

# Q220 (Medium)
qs.append(make_motion_q(
    num=220,
    question="A particle's v-t graph is a circle of radius R centered at (R, 0). Over the time interval from t = 0 to t = 2R, what is the total displacement of the particle?",
    options={
        "A": "π R² / 2",
        "B": "π R²",
        "C": "2R²",
        "D": "4R"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Displacement is the area under the v-t curve. For an upper semicircle of radius R, the area is (1/2) π R².",
    given="Upper semicircle of radius R on v-t graph, base from t = 0 to t = 2R.",
    formula="Displacement = Area of semicircle = (1/2) π R².",
    steps="1. The curve is the upper half of a circle of radius R: v(t) = √(R² - (t - R)²).\n2. The base lies along the time axis from t = 0 to t = 2R (width = 2R).\n3. The area bounded by this upper semicircle and the time axis is:\n   Area = (1/2) * (area of full circle of radius R) = (1/2) * π R².\n4. Since the entire semicircle lies above the time axis (v ≥ 0), this area represents the displacement.\n5. Therefore, the displacement is π R² / 2.",
    tip="Area of semicircle = (1/2) π R². Notice the units: if R has units of both s and m/s, the area has units of meters.",
    why_wrong="Option B is the full circle area. Option C is a bounding rectangle estimate. Option D is the perimeter."
))

# Q221 (Medium)
qs.append(make_motion_q(
    num=221,
    question="The velocity-time graph of an object moving in a straight line is shown. From t = 0 to 2 s, v increases linearly from 0 to 6 m/s. From t = 2 to 6 s, v decreases linearly from 6 m/s to 0. What is the average velocity over the entire 6 seconds?",
    options={
        "A": "3 m/s",
        "B": "4 m/s",
        "C": "2 m/s",
        "D": "6 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Average velocity is total displacement divided by total time: v_avg = (Area of v-t graph) / t_total.",
    given="Triangle with base = 6 s, height = 6 m/s.",
    formula="Displacement = (1/2) * base * height = (1/2) * 6 * 6 = 18 m; v_avg = Displacement / 6 s.",
    steps="1. The v-t graph forms a single triangle with:\n   Base = 6 s\n   Height = 6 m/s.\n2. Area of triangle = (1/2) * base * height = (1/2) * 6 * 6 = 18 m.\n3. Total displacement = 18 m.\n4. Total time = 6 s.\n5. Average velocity = 18 m / 6 s = 3 m/s.\n6. (Notice that for ANY triangular v-t profile from rest to rest, average velocity is ALWAYS exactly half of peak velocity: v_max / 2 = 6 / 2 = 3 m/s!).",
    tip="Universal NEET shortcut: For ANY triangular v-t graph starting and ending at rest, Average Velocity = v_max / 2!",
    why_wrong="Option B is an arithmetic error. Option C is 18/9. Option D is the peak velocity."
))

# Q222 (Medium)
qs.append(make_motion_q(
    num=222,
    question="A car accelerates from rest at a constant rate a₁ for time t₁ and then immediately retards to rest at a constant rate a₂ for time t₂. What is the ratio of average velocity for the whole trip to the peak velocity v_max?",
    options={
        "A": "1 : 2",
        "B": "1 : 1",
        "C": "2 : 1",
        "D": "(a₁ + a₂) : (a₁ a₂)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="For a triangular v-t graph of base t and height v_max, area is (1/2) t v_max, so v_avg = Area / t = (1/2) v_max.",
    given="Triangular v-t profile of height v_max and total base t = t₁ + t₂.",
    formula="v_avg = [ (1/2) t v_max ] / t = (1/2) v_max.",
    steps="1. On the v-t graph, the motion forms a triangle with base t = t₁ + t₂ and apex height v_max.\n2. Area under the curve = (1/2) * base * height = (1/2) * t * v_max.\n3. Total displacement = (1/2) * t * v_max.\n4. Average velocity = displacement / total time = [ (1/2) * t * v_max ] / t = (1/2) v_max.\n5. Ratio v_avg : v_max = (1/2) : 1 = 1 : 2.\n6. This result is completely independent of the individual accelerations a₁ and a₂!",
    tip="Triangular v-t graph ALWAYS has v_avg = v_max / 2. Memorize this 1:2 ratio!",
    why_wrong="Option B implies constant speed. Option C inverts the ratio. Option D introduces unnecessary acceleration terms."
))

# Q223 (Hard)
qs.append(make_motion_q(
    num=223,
    question="A particle moves along a straight line such that its velocity-time equation is v(t) = 3t² - 12 (in m/s). What are the displacement and total distance covered by the particle in the time interval from t = 0 to t = 3 s?",
    options={
        "A": "Displacement = -9 m, Distance = 23 m",
        "B": "Displacement = -9 m, Distance = 9 m",
        "C": "Displacement = +9 m, Distance = 23 m",
        "D": "Displacement = -23 m, Distance = 23 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Velocity-time graphs",
    concept="Find where v(t) crosses the time axis (turning point), calculate positive and negative areas under the v-t curve separately. Displacement = net area, Distance = sum of absolute areas.",
    given="v(t) = 3t² - 12, interval [0, 3] s.",
    formula="v = 0 => 3t² = 12 => t = 2 s.",
    steps="1. Velocity is zero at: 3t² - 12 = 0 => t² = 4 => t = 2 s (since t ≥ 0).\n2. For 0 ≤ t ≤ 2 s, v(t) ≤ 0 (curve lies below the time axis):\n   Area₁ = ∫_0^2 (3t² - 12) dt = [ t³ - 12t ]_0^2 = 8 - 24 = -16 m.\n3. For 2 ≤ t ≤ 3 s, v(t) ≥ 0 (curve lies above the time axis):\n   Area₂ = ∫_2^3 (3t² - 12) dt = [ t³ - 12t ]_2^3 = [ 27 - 36 ] - [ 8 - 24 ] = -9 - (-16) = +7 m.\n4. Net displacement = Area₁ + Area₂ = -16 m + 7 m = -9 m.\n5. Total distance = |Area₁| + |Area₂| = |-16 m| + |+7 m| = 16 m + 7 m = 23 m.\n6. Therefore, Displacement = -9 m and Distance = 23 m.",
    tip="Always calculate area below axis (16 m backward) and area above axis (7 m forward). Net = -16 + 7 = -9 m. Total = 16 + 7 = 23 m.",
    why_wrong="Option B assumes distance equals magnitude of displacement. Option C has positive displacement. Option D equates displacement to distance."
))

# Q224 (Hard)
qs.append(make_motion_q(
    num=224,
    question="The velocity-time graph of a particle is given by v = v₀ sin(π t / T) for 0 ≤ t ≤ T. What is the maximum acceleration of the particle, and at what instant does it occur?",
    options={
        "A": "a_max = π v₀ / T, at t = 0 and t = T",
        "B": "a_max = v₀ / T, at t = T / 2",
        "C": "a_max = π v₀ / T, at t = T / 2",
        "D": "a_max = 2π v₀ / T, at t = 0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Velocity-time graphs",
    concept="Acceleration is the derivative of velocity: a(t) = dv/dt = (π v₀ / T) cos(π t / T). Maximum magnitude occurs when cos = ±1, which is at the endpoints t = 0 and t = T.",
    given="v(t) = v₀ sin(π t / T).",
    formula="a(t) = dv/dt = (π v₀ / T) cos(π t / T).",
    steps="1. Differentiate velocity with respect to time using the chain rule:\n   a(t) = dv/dt = v₀ * cos(π t / T) * (π / T) = (π v₀ / T) cos(π t / T).\n2. The cosine function has its maximum absolute value of 1 at:\n   π t / T = 0 => t = 0 (where a = +π v₀ / T)\n   π t / T = π => t = T (where a = -π v₀ / T).\n3. At t = T/2, cos(π/2) = 0, so acceleration is zero (where velocity is maximum!).\n4. Therefore, the maximum magnitude of acceleration is π v₀ / T, occurring at t = 0 and t = T.",
    tip="Slope of sine curve is steepest at the zero-crossings (t = 0 and t = T), and zero at the crest (t = T/2).",
    why_wrong="Option B omits π and selects the crest. Option C selects t = T/2 (where a = 0). Option D doubles π."
))

# Q225 (Hard)
qs.append(make_motion_q(
    num=225,
    question="In the previous question where v(t) = v₀ sin(π t / T) for 0 ≤ t ≤ T, what is the total displacement of the particle in time T?",
    options={
        "A": "2 v₀ T / π",
        "B": "v₀ T / π",
        "C": "v₀ T",
        "D": "π v₀ T / 2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Velocity-time graphs",
    concept="Displacement is the integral of the half-sine velocity curve over time T: Δx = ∫_0^T v₀ sin(π t / T) dt = 2 v₀ T / π.",
    given="v(t) = v₀ sin(π t / T), interval [0, T].",
    formula="Δx = ∫_0^T v₀ sin(π t / T) dt = [ -v₀ (T / π) cos(π t / T) ]_0^T.",
    steps="1. Integrate velocity with respect to time:\n   Δx = ∫_0^T v₀ sin(π t / T) dt = [ - (v₀ T / π) cos(π t / T) ]_0^T.\n2. Evaluate at upper limit t = T:\n   - (v₀ T / π) cos(π) = - (v₀ T / π) (-1) = + (v₀ T / π).\n3. Evaluate at lower limit t = 0:\n   - (v₀ T / π) cos(0) = - (v₀ T / π) (1) = - (v₀ T / π).\n4. Subtract:\n   Δx = (v₀ T / π) - [ - (v₀ T / π) ] = 2 v₀ T / π.\n5. Therefore, the displacement is 2 v₀ T / π ≈ 0.637 v₀ T.",
    tip="Standard definite integral: Area under half-cycle of sine wave = (2 / π) * (bounding rectangle) = 2 v₀ T / π.",
    why_wrong="Option B misses the factor of 2 (evaluates cos(π) - cos(0) incorrectly). Option C is for rectangle. Option D is an inverse factor."
))

# Q226 (Hard)
qs.append(make_motion_q(
    num=226,
    question="The velocity-time graph of an object moving in 1D is a parabola: v(t) = 4t - t² (in m/s). What is the total displacement of the object from t = 0 until it momentarily comes to rest again at t = 4 s?",
    options={
        "A": "32/3 m ≈ 10.67 m",
        "B": "16 m",
        "C": "8 m",
        "D": "64/3 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Velocity-time graphs",
    concept="Displacement is the definite integral of the parabolic velocity curve: Δx = ∫_0^4 (4t - t²) dt.",
    given="v(t) = 4t - t², limits t = 0 to t = 4 s.",
    formula="Δx = ∫_0^4 (4t - t²) dt = [ 2t² - t³/3 ]_0^4.",
    steps="1. Find the roots of velocity:\n   v(t) = t(4 - t) = 0 => t = 0 and t = 4 s.\n2. In the interval [0, 4] s, v(t) ≥ 0.\n3. Integrate velocity to find displacement:\n   Δx = ∫_0^4 (4t - t²) dt = [ 2t² - (1/3) t³ ]_0^4.\n4. Evaluate at t = 4 s:\n   Δx = 2(4²) - (1/3)(4³) = 2(16) - 64/3 = 32 - 64/3.\n5. Common denominator:\n   32 - 64/3 = (96 - 64) / 3 = 32 / 3 m ≈ 10.67 m.\n6. Therefore, the total displacement is 32/3 m.",
    tip="Archimedes' parabolic formula: Area under parabola = (2/3) * base * height! Base = 4, Height = v(2) = 4. Area = (2/3) * 4 * 4 = 32/3 m!",
    why_wrong="Option B is base * height (16 m). Option C is (1/2) * base * height (8 m, triangle). Option D doubles the area."
))

# Q227 (Medium)
qs.append(make_motion_q(
    num=227,
    question="On a v-t graph, two lines A and B have slopes of 2 m/s² and -3 m/s² respectively. If both start with an initial velocity of 12 m/s at t = 0, at what time will particle B come to rest, and what will be the velocity of particle A at that instant?",
    options={
        "A": "Particle B stops at t = 4 s; v_A = 20 m/s",
        "B": "Particle B stops at t = 3 s; v_A = 18 m/s",
        "C": "Particle B stops at t = 4 s; v_A = 24 m/s",
        "D": "Particle B stops at t = 6 s; v_A = 24 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Slopes are accelerations: a_A = +2 m/s², a_B = -3 m/s². Use v = u + at for each particle.",
    given="u_A = u_B = 12 m/s, a_A = +2 m/s², a_B = -3 m/s².",
    formula="v_B = 12 - 3t = 0 => t = 4 s; v_A = 12 + 2t.",
    steps="1. Particle B stops when v_B = 0:\n   12 - 3t = 0 => 3t = 12 => t = 4 seconds.\n2. At this instant t = 4 s, find velocity of particle A:\n   v_A = u_A + a_A t = 12 + (2 * 4) = 12 + 8 = 20 m/s.\n3. Therefore, particle B stops at t = 4 s, and particle A has velocity 20 m/s.",
    tip="Direct kinematics from v-t slope: a is slope. B stops at 12/3 = 4 s. A reaches 12 + 2(4) = 20 m/s.",
    why_wrong="Option B uses t = 3 s. Option C calculates v_A = 24 m/s. Option D uses t = 6 s."
))

# Q228 (Medium)
qs.append(make_motion_q(
    num=228,
    question="The v-t graph of a moving body is shown as a line joining (0 s, 10 m/s) to (5 s, -10 m/s). What is the total distance covered by the body in these 5 seconds?",
    options={
        "A": "25 m",
        "B": "0 m",
        "C": "50 m",
        "D": "12.5 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="The line crosses the time axis at the midpoint t = 2.5 s. Total distance is the sum of the magnitudes of the two triangular areas.",
    given="Line from (0, 10) to (5, -10). Crosses axis at t = 2.5 s.",
    formula="Distance = |Area₁| + |Area₂| = (1/2)(2.5)(10) + (1/2)(2.5)(10).",
    steps="1. Find the time when velocity crosses zero:\n   v(t) = 10 - 4t = 0 => 4t = 10 => t = 2.5 s.\n2. Area of first triangle (0 to 2.5 s):\n   Area₁ = (1/2) * base * height = (1/2) * 2.5 s * 10 m/s = 12.5 m (forward).\n3. Area of second triangle (2.5 to 5 s):\n   Area₂ = (1/2) * 2.5 s * (-10 m/s) = -12.5 m (backward).\n4. Net displacement = 12.5 m - 12.5 m = 0 m.\n5. Total distance = |12.5 m| + |-12.5 m| = 12.5 + 12.5 = 25 m.\n6. Therefore, the total distance covered is 25 m.",
    tip="Crucial NEET difference: Displacement = 0 m (returns to start). Distance = 12.5 + 12.5 = 25 m!",
    why_wrong="Option B is the displacement (0 m). Option C is double. Option D is one-way distance."
))

# Q229 (Medium)
qs.append(make_motion_q(
    num=229,
    question="In the previous question (v-t line from 10 m/s at t = 0 to -10 m/s at t = 5 s), what is the acceleration of the body throughout the motion?",
    options={
        "A": "-4 m/s² (constant)",
        "B": "-2 m/s²",
        "C": "0 m/s²",
        "D": "Varying from +4 to -4 m/s²"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Velocity-time graphs",
    concept="Acceleration is the slope of the v-t line: a = (v₂ - v₁) / (t₂ - t₁).",
    given="(t₁, v₁) = (0, 10), (t₂, v₂) = (5, -10).",
    formula="a = Slope = (-10 - 10) / (5 - 0) = -20 / 5 = -4 m/s².",
    steps="1. Calculate slope of the line:\n   Slope = (v_final - v_initial) / (t_final - t_initial)\n   Slope = (-10 - 10) / (5 - 0) = -20 / 5 = -4 m/s².\n2. Because the graph is a single straight line, the slope is constant at all points.\n3. Therefore, the acceleration is constant and equal to -4 m/s².",
    tip="Straight line on v-t graph = constant acceleration everywhere.",
    why_wrong="Option B is -2 m/s². Option C implies zero acceleration. Option D confuses varying velocity with varying acceleration."
))

# Q230 (Medium)
qs.append(make_motion_q(
    num=230,
    question="A body accelerates uniformly from rest for time t and then moves at constant speed for time 2t. What fraction of the total distance was covered during the acceleration phase?",
    options={
        "A": "1 / 5",
        "B": "1 / 3",
        "C": "1 / 4",
        "D": "1 / 2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Velocity-time graphs",
    concept="Calculate the triangular area of the acceleration phase and the rectangular area of the cruising phase, then find the fraction.",
    given="Acceleration phase: base t, height v. Cruising phase: base 2t, height v.",
    formula="s₁ = (1/2) t v; s₂ = 2t * v = 2 t v; Fraction = s₁ / (s₁ + s₂).",
    steps="1. In the acceleration phase (0 to t):\n   The v-t graph is a triangle of base t and height v.\n   Distance s₁ = (1/2) t v.\n2. In the cruising phase (t to 3t, duration 2t):\n   The v-t graph is a rectangle of base 2t and height v.\n   Distance s₂ = 2t * v = 2 t v.\n3. Total distance = s₁ + s₂ = 0.5 t v + 2 t v = 2.5 t v = (5/2) t v.\n4. Fraction covered during acceleration:\n   Fraction = s₁ / s_total = [ (1/2) t v ] / [ (5/2) t v ] = 1 / 5.\n5. Therefore, exactly 1/5 (or 20%) of the total distance was covered during acceleration.",
    tip="Ratio of areas: Triangle is (1/2)(1) = 0.5 units. Rectangle is (2)(1) = 2.0 units. Total = 2.5 units. Fraction = 0.5 / 2.5 = 1/5!",
    why_wrong="Option B is 1/3 (confuses time fraction with distance fraction). Option C is 1/4. Option D is 1/2."
))

# ==============================================================================
# Topic 12: Acceleration-time graphs (Q231 - Q250)
# 6 Easy, 8 Medium, 6 Hard (Total 20)
# ==============================================================================

# Q231 (Easy)
qs.append(make_motion_q(
    num=231,
    question="The area under an acceleration-time (a-t) graph bounded by the time axis represents the:",
    options={
        "A": "Change in velocity (Δv)",
        "B": "Total displacement",
        "C": "Average velocity",
        "D": "Rate of change of acceleration (jerk)"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration-time graphs",
    concept="Since a = dv/dt, integrating acceleration gives change in velocity: Δv = ∫ a dt. Geometrically, this integral is the area under the a-t curve.",
    given="Acceleration-time curve.",
    formula="Area = ∫_{t₁}^{t₂} a dt = v(t₂) - v(t₁) = Δv.",
    steps="1. Definition of acceleration: a = dv/dt => dv = a dt.\n2. Integrating between t₁ and t₂:\n   Δv = v₂ - v₁ = ∫_{t₁}^{t₂} a dt.\n3. The integral ∫ a dt is the area under the a-t graph between t₁ and t₂.\n4. Therefore, the area under an a-t graph gives the change in velocity (Δv).\n5. (Note: To find the final velocity, add the initial velocity: v₂ = v₁ + Area).",
    tip="Crucial Rule: Area under a-t graph = CHANGE IN VELOCITY (Δv), NOT displacement and NOT final velocity!",
    why_wrong="Option B is the area under the v-t graph. Option C is Δx/Δt. Option D is the slope of the a-t graph."
))

# Q232 (Easy)
qs.append(make_motion_q(
    num=232,
    question="The slope of an acceleration-time graph represents which physical quantity?",
    options={
        "A": "Jerk (time rate of change of acceleration)",
        "B": "Velocity",
        "C": "Force",
        "D": "Work"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration-time graphs",
    concept="The time derivative of acceleration is known as 'jerk': j = da/dt. On an a-t graph, this is the slope of the curve.",
    given="Slope of a-t curve.",
    formula="Slope = da/dt = jerk.",
    steps="1. Slope of a curve y vs x is dy/dx.\n2. For an a-t graph, slope is da/dt.\n3. The time rate of change of acceleration is called jerk (or jolt).\n4. Its SI unit is m/s³.\n5. Therefore, the slope of the a-t graph represents jerk.",
    tip="Kinematic derivative chain: Position -> (derivative) Velocity -> (derivative) Acceleration -> (derivative) Jerk.",
    why_wrong="Option B is the integral of a. Option C is mass * acceleration. Option D is force * distance."
))

# Q233 (Easy)
qs.append(make_motion_q(
    num=233,
    question="A body starts from rest at t = 0. Its a-t graph is a horizontal line at a = 4 m/s² for 5 seconds. What is the velocity of the body at t = 5 s?",
    options={
        "A": "20 m/s",
        "B": "10 m/s",
        "C": "40 m/s",
        "D": "4 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration-time graphs",
    concept="For constant acceleration, the area under the a-t graph is a rectangle of height a and width t: Δv = a * t.",
    given="u = 0, a = 4 m/s² (constant), t = 5 s.",
    formula="v = u + Area = 0 + (a * t) = 4 * 5 = 20 m/s.",
    steps="1. The a-t graph is a rectangle:\n   Height = 4 m/s²\n   Base = 5 s.\n2. Area under the a-t graph = 4 m/s² * 5 s = 20 m/s.\n3. Since initial velocity u = 0, final velocity v = u + Δv = 0 + 20 = 20 m/s.\n4. Therefore, the velocity at t = 5 s is 20 m/s.",
    tip="Area of rectangle = a * t = 4 * 5 = 20 m/s.",
    why_wrong="Option B uses (1/2)at. Option C doubles. Option D is acceleration."
))

# Q234 (Easy)
qs.append(make_motion_q(
    num=234,
    question="What does an a-t graph lying entirely on the horizontal time axis (a = 0) represent?",
    options={
        "A": "Uniform motion with constant velocity (or an object at rest)",
        "B": "Uniformly accelerated motion",
        "C": "Free fall motion",
        "D": "SHM"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration-time graphs",
    concept="When acceleration is identically zero (a = 0), velocity is constant (dv/dt = 0), which describes uniform motion (or rest if v = 0).",
    given="a(t) = 0 for all t.",
    formula="a = 0 <=> v = constant.",
    steps="1. The graph lies on the horizontal axis, so a(t) = 0.\n2. dv/dt = 0 means velocity does not change with time.\n3. Therefore, the object moves at constant velocity (uniform motion) or remains at rest if v = 0.",
    tip="a = 0 <=> Constant velocity <=> Straight-line x-t graph.",
    why_wrong="Option B requires a non-zero horizontal line. Option C requires a = -g. Option D requires an oscillating a-t graph."
))

# Q235 (Easy)
qs.append(make_motion_q(
    num=235,
    question="The a-t graph of a particle is a right triangle with base = 6 s and height = 4 m/s² (starting from a = 0 at t = 0). If the particle was initially at rest, what is its velocity at t = 6 s?",
    options={
        "A": "12 m/s",
        "B": "24 m/s",
        "C": "6 m/s",
        "D": "4 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration-time graphs",
    concept="Change in velocity is the area under the triangular a-t graph: Δv = (1/2) * base * height.",
    given="u = 0, base = 6 s, height = 4 m/s².",
    formula="Δv = (1/2) * base * height = (1/2) * 6 * 4 = 12 m/s; v = u + Δv = 12 m/s.",
    steps="1. The a-t graph is a triangle with base 6 s and height 4 m/s².\n2. Area of triangle = (1/2) * base * height = (1/2) * 6 * 4 = 12 m/s.\n3. Since initial velocity u = 0:\n   v(6) = 0 + 12 m/s = 12 m/s.\n4. Therefore, the velocity at t = 6 s is 12 m/s.",
    tip="Area of triangle under a-t curve = (1/2) * 6 * 4 = 12 m/s.",
    why_wrong="Option B forgets 1/2 factor (rectangle area = 24 m/s). Option C is half. Option D is peak acceleration."
))

# Q236 (Easy)
qs.append(make_motion_q(
    num=236,
    question="For an object in free fall near the Earth's surface (taking downward as negative), the acceleration-time graph is:",
    options={
        "A": "A horizontal line at a = -g (approximately -9.8 m/s²)",
        "B": "A line sloping downwards with slope -g",
        "C": "A parabola opening downwards",
        "D": "A line passing through the origin"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Acceleration-time graphs",
    concept="Acceleration due to gravity near Earth is constant at g ≈ 9.8 m/s² directed downwards, so the a-t graph is a horizontal line at a = -g.",
    given="Free fall near Earth's surface.",
    formula="a(t) = -g = constant.",
    steps="1. In free fall, the only force acting is gravity: F = -mg.\n2. By Newton's second law, acceleration is a = F/m = -g = constant.\n3. A constant quantity plotted against time is a horizontal line parallel to the time axis.\n4. With downward defined as negative, this line lies below the time axis at a = -g ≈ -9.8 m/s².\n5. Therefore, Option A is the correct graph.",
    tip="Free fall acceleration NEVER changes with time; it is always a flat horizontal line at a = -g.",
    why_wrong="Option B confuses velocity-time graph with acceleration-time graph. Option C is the position-time graph. Option D assumes zero initial acceleration."
))

# Q237 (Medium)
qs.append(make_motion_q(
    num=237,
    question="A particle starts with an initial velocity of 5 m/s at t = 0. Its a-t graph consists of a positive rectangular area of +12 m/s from t = 0 to 3 s, and a negative rectangular area of -8 m/s from t = 3 to 5 s. What is the velocity of the particle at t = 5 s?",
    options={
        "A": "9 m/s",
        "B": "4 m/s",
        "C": "13 m/s",
        "D": "17 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="Final velocity is initial velocity plus net area under the a-t graph: v_final = u + Area_net.",
    given="u = 5 m/s, Area₁ = +12 m/s, Area₂ = -8 m/s.",
    formula="v(5) = u + Area₁ + Area₂ = 5 + 12 - 8.",
    steps="1. Net area under the a-t graph:\n   Area_net = (+12 m/s) + (-8 m/s) = +4 m/s.\n2. The net area represents the total change in velocity:\n   Δv = v(5) - v(0) = +4 m/s.\n3. Add initial velocity v(0) = 5 m/s:\n   v(5) = v(0) + Δv = 5 m/s + 4 m/s = 9 m/s.\n4. Therefore, the velocity at t = 5 s is 9 m/s.",
    tip="Don't forget initial velocity! Final v = u + Net Area = 5 + (12 - 8) = 9 m/s.",
    why_wrong="Option B is only the net area (Δv = 4 m/s) without adding initial velocity. Option C is 5 + 8. Option D is 5 + 12."
))

# Q238 (Medium)
qs.append(make_motion_q(
    num=238,
    question="The a-t graph of a particle is given by a(t) = 6 - 2t (in m/s²). If the particle starts from rest at t = 0, at what time will the particle attain its maximum velocity, and what will that maximum velocity be?",
    options={
        "A": "t = 3 s, v_max = 9 m/s",
        "B": "t = 3 s, v_max = 18 m/s",
        "C": "t = 6 s, v_max = 9 m/s",
        "D": "t = 2 s, v_max = 8 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="Velocity is maximum when acceleration changes sign from positive to negative: a(t) = 0. The maximum velocity is the area under the a-t curve up to that time.",
    given="a(t) = 6 - 2t, u = 0.",
    formula="a(t) = 0 => 6 - 2t = 0 => t = 3 s; v_max = ∫_0^3 (6 - 2t) dt.",
    steps="1. Acceleration crosses zero at:\n   6 - 2t = 0 => 2t = 6 => t = 3 seconds.\n2. For t < 3 s, a > 0, so velocity is increasing.\n   For t > 3 s, a < 0, so velocity decreases.\n3. Therefore, maximum velocity occurs at t = 3 s.\n4. Compute area under the a-t graph from 0 to 3 s:\n   Area = (1/2) * base * height = (1/2) * 3 s * 6 m/s² = 9 m/s.\n   (Or integrate: [ 6t - t² ]_0^3 = 6(3) - 3² = 18 - 9 = 9 m/s).\n5. Since u = 0, v_max = 0 + 9 = 9 m/s.\n6. Hence, t = 3 s and v_max = 9 m/s.",
    tip="v_max occurs when a = 0. Area of triangle on a-t graph = (1/2)(3)(6) = 9 m/s!",
    why_wrong="Option B forgets 1/2 factor (evaluates 6*3 = 18). Option C uses t = 6 s. Option D is an arbitrary guess."
))

# Q239 (Medium)
qs.append(make_motion_q(
    num=239,
    question="In the previous question where a(t) = 6 - 2t (in m/s²) and u = 0, at what time does the particle come to rest again?",
    options={
        "A": "t = 6 s",
        "B": "t = 3 s",
        "C": "t = 4 s",
        "D": "t = 9 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="The particle returns to rest when its velocity becomes zero again: v(t) = 0, meaning net area under the a-t graph is zero.",
    given="v(t) = 6t - t².",
    formula="v(t) = 0 => 6t - t² = 0 => t(6 - t) = 0 => t = 6 s.",
    steps="1. Velocity function: v(t) = ∫_0^t (6 - 2t) dt = 6t - t².\n2. Set velocity to zero to find the instant of rest (for t > 0):\n   6t - t² = 0\n   t(6 - t) = 0 => t = 6 seconds.\n3. Notice that on the a-t graph, the positive area from 0 to 3 s is +9 m/s, and the negative area from 3 to 6 s is -9 m/s!\n4. Net area from 0 to 6 s is (+9) + (-9) = 0 m/s, so velocity returns to initial value (0 m/s).\n5. Therefore, the particle comes to rest at t = 6 s.",
    tip="Symmetry: It takes 3 s to reach peak velocity with positive acceleration, and another symmetric 3 s to cancel it with negative acceleration: total time = 6 s.",
    why_wrong="Option B is the instant of peak velocity (v = 9 m/s). Options C and D give non-zero velocities."
))

# Q240 (Medium)
qs.append(make_motion_q(
    num=240,
    question="The a-t graph of a particle is shown as two triangles: from t = 0 to 2 s, a increases from 0 to 4 m/s²; from t = 2 to 4 s, a decreases from 4 m/s² to 0. If initial velocity was u = 2 m/s, what is the velocity at t = 4 s?",
    options={
        "A": "10 m/s",
        "B": "8 m/s",
        "C": "16 m/s",
        "D": "6 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="Total area under the full triangular a-t graph is (1/2) * base * height. Then v = u + Area.",
    given="u = 2 m/s, Base = 4 s, Height = 4 m/s².",
    formula="Area = (1/2) * base * height = (1/2) * 4 * 4 = 8 m/s; v = u + Area = 2 + 8 = 10 m/s.",
    steps="1. The full a-t graph from 0 to 4 s forms a single large triangle with:\n   Base = 4 s\n   Height = 4 m/s².\n2. Area under the curve = (1/2) * base * height = (1/2) * 4 * 4 = 8 m/s.\n3. The area represents the total change in velocity: Δv = 8 m/s.\n4. Final velocity: v(4) = u + Δv = 2 m/s + 8 m/s = 10 m/s.\n5. Therefore, the velocity at t = 4 s is 10 m/s.",
    tip="Area of full triangle = (1/2)(4)(4) = 8 m/s. Add initial velocity: 2 + 8 = 10 m/s.",
    why_wrong="Option B is only the area without adding u (8 m/s). Option C assumes rectangle. Option D is an arbitrary value."
))

# Q241 (Medium)
qs.append(make_motion_q(
    num=241,
    question="A body starts from rest at t = 0. Its a-t graph is given by a = 3t² (in m/s²). What is the velocity of the body at t = 3 s?",
    options={
        "A": "27 m/s",
        "B": "9 m/s",
        "C": "81 m/s",
        "D": "18 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="Velocity is the integral of acceleration with respect to time: v = ∫ a dt.",
    given="a(t) = 3t², u = 0, t = 3 s.",
    formula="v(t) = ∫_0^t 3t² dt = [ t³ ]_0^t = t³.",
    steps="1. Integrate acceleration to find velocity:\n   v(t) = ∫_0^t 3t² dt = [ t³ ]_0^t = t³.\n2. Substitute t = 3 s:\n   v(3) = 3³ = 27 m/s.\n3. Therefore, the velocity at t = 3 s is 27 m/s.",
    tip="Integrate power rule: ∫ 3t² dt = t³ => 3³ = 27 m/s.",
    why_wrong="Option B is 3². Option C is 3⁴. Option D is a(3) * 3 / 2 (or 18 m/s)."
))

# Q242 (Medium)
qs.append(make_motion_q(
    num=242,
    question="For the body in Q241 where a(t) = 3t² and u = 0, what is the displacement of the body at t = 2 s?",
    options={
        "A": "4 m",
        "B": "8 m",
        "C": "12 m",
        "D": "16 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="Integrate acceleration twice: v(t) = t³, then s(t) = ∫ t³ dt = t⁴ / 4.",
    given="a(t) = 3t², u = 0, s(0) = 0, t = 2 s.",
    formula="v(t) = t³; s(t) = ∫_0^t t³ dt = t⁴ / 4.",
    steps="1. First integration gives velocity: v(t) = t³.\n2. Second integration gives displacement:\n   s(t) = ∫_0^t t³ dt = [ t⁴ / 4 ]_0^t = t⁴ / 4.\n3. Substitute t = 2 s:\n   s(2) = 2⁴ / 4 = 16 / 4 = 4 meters.\n4. Therefore, the displacement at t = 2 s is 4 m.",
    tip="Double integration: a = 3t² => v = t³ => s = t⁴ / 4. For t = 2: 16 / 4 = 4 m.",
    why_wrong="Option B is velocity at t = 2 s (v(2) = 2³ = 8 m/s). Option C is an arbitrary value. Option D is 2⁴ = 16 m."
))

# Q243 (Medium)
qs.append(make_motion_q(
    num=243,
    question="The a-t graph of a particle starting from rest is shown: a = +2 m/s² for 4 s, and a = -2 m/s² for the next 4 s. What is the total displacement of the particle at t = 8 s?",
    options={
        "A": "32 m",
        "B": "16 m",
        "C": "0 m",
        "D": "64 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="Convert the a-t graph to a v-t graph: velocity rises to 8 m/s in 4 s and returns to 0 in another 4 s (a triangle). Displacement is the area of the v-t triangle.",
    given="Phase 1: a = +2 for 4 s; Phase 2: a = -2 for 4 s; u = 0.",
    formula="v_max = a * t₁ = 2 * 4 = 8 m/s; Displacement = (1/2) * t_total * v_max.",
    steps="1. At t = 4 s, velocity reached is v = u + a₁ t₁ = 0 + 2(4) = 8 m/s.\n2. From t = 4 to 8 s, deceleration is a₂ = -2 m/s², so velocity decreases from 8 m/s to 0 at t = 8 s.\n3. Notice that velocity was POSITIVE throughout the entire 8 seconds (v ≥ 0)!\n4. On the v-t graph, this forms a triangle with base 8 s and height 8 m/s.\n5. Total displacement = Area of v-t triangle = (1/2) * base * height = (1/2) * 8 * 8 = 32 m.\n6. (Common trap: Net area under a-t graph is zero, which means final VELOCITY is zero, NOT displacement!).",
    tip="Top NEET trap: Area of a-t graph is zero => v_final = 0. But displacement is the area of the v-t triangle = (1/2)(8)(8) = 32 m!",
    why_wrong="Option C falls into the trap of confusing zero a-t area with zero displacement. Option B is only the first phase. Option D doubles."
))

# Q244 (Medium)
qs.append(make_motion_q(
    num=244,
    question="A body moves in a straight line with an acceleration given by a = a₀ (1 - t / T) for 0 ≤ t ≤ T. If it starts from rest, what is its velocity at t = T?",
    options={
        "A": "(1/2) a₀ T",
        "B": "a₀ T",
        "C": "(1/3) a₀ T",
        "D": "2 a₀ T"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Acceleration-time graphs",
    concept="The a-t graph is a triangle of base T and height a₀. The velocity gained is the area of this triangle: (1/2) a₀ T.",
    given="a(t) = a₀ (1 - t/T), u = 0, interval [0, T].",
    formula="v(T) = ∫_0^T a₀ (1 - t/T) dt = (1/2) a₀ T.",
    steps="1. The a-t graph starts at a = a₀ at t = 0 and decreases linearly to a = 0 at t = T.\n2. The shape bounded by this line and the time axis is a right triangle with base T and height a₀.\n3. Area of triangle = (1/2) * base * height = (1/2) * T * a₀ = (1/2) a₀ T.\n4. Since initial velocity u = 0:\n   v(T) = u + Area = 0 + (1/2) a₀ T = (1/2) a₀ T.\n5. Therefore, the velocity at t = T is (1/2) a₀ T.",
    tip="Area under linear decay a(t) = triangle = (1/2) a₀ T.",
    why_wrong="Option B assumes constant acceleration a₀. Options C and D are incorrect multiples."
))

# Q245 (Hard)
qs.append(make_motion_q(
    num=245,
    question="For the body in Q244 where a(t) = a₀ (1 - t / T) and u = 0, what is the displacement of the body at t = T?",
    options={
        "A": "(1/3) a₀ T²",
        "B": "(1/2) a₀ T²",
        "C": "(1/6) a₀ T²",
        "D": "(1/4) a₀ T²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration-time graphs",
    concept="Integrate acceleration twice from rest to find displacement at t = T.",
    given="a(t) = a₀ (1 - t/T), u = 0, s(0) = 0.",
    formula="v(t) = a₀ [ t - t²/(2T) ]; s(t) = a₀ [ t²/2 - t³/(6T) ].",
    steps="1. Velocity: v(t) = ∫_0^t a₀ (1 - t'/T) dt' = a₀ [ t - t² / (2T) ].\n2. Displacement: s(t) = ∫_0^t v(t') dt' = a₀ ∫_0^t [ t' - t'² / (2T) ] dt'.\n3. Integrate:\n   s(t) = a₀ [ t² / 2 - t³ / (6T) ].\n4. Evaluate at t = T:\n   s(T) = a₀ [ T² / 2 - T³ / (6T) ] = a₀ [ T² / 2 - T² / 6 ].\n5. Subtract fractions:\n   1/2 - 1/6 = 3/6 - 1/6 = 2/6 = 1/3.\n6. Therefore:\n   s(T) = (1/3) a₀ T².\n7. Hence, the displacement at t = T is (1/3) a₀ T².",
    tip="Memorize the fraction progression: a(t) linear decay => v(T) = (1/2) a₀ T => s(T) = (1/3) a₀ T².",
    why_wrong="Option B is for constant acceleration (1/2 a₀ T²). Option C is the second term (1/6). Option D is an arbitrary guess."
))

# Q246 (Hard)
qs.append(make_motion_q(
    num=246,
    question="The a-t graph of a particle is given by a = a₀ sin(π t / T) for 0 ≤ t ≤ T. If the particle starts from rest at t = 0, what is its velocity at t = T?",
    options={
        "A": "2 a₀ T / π",
        "B": "a₀ T / π",
        "C": "0",
        "D": "π a₀ T / 2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration-time graphs",
    concept="Integrate the half-sine acceleration curve from 0 to T: Δv = ∫_0^T a₀ sin(π t / T) dt = 2 a₀ T / π.",
    given="a(t) = a₀ sin(π t / T), u = 0, interval [0, T].",
    formula="v(T) = ∫_0^T a₀ sin(π t / T) dt = [ -a₀ (T / π) cos(π t / T) ]_0^T.",
    steps="1. Integrate acceleration with respect to time:\n   Δv = ∫_0^T a₀ sin(π t / T) dt = [ - (a₀ T / π) cos(π t / T) ]_0^T.\n2. Evaluate at upper limit t = T:\n   - (a₀ T / π) cos(π) = - (a₀ T / π) (-1) = + (a₀ T / π).\n3. Evaluate at lower limit t = 0:\n   - (a₀ T / π) cos(0) = - (a₀ T / π) (1) = - (a₀ T / π).\n4. Subtract limits:\n   Δv = (a₀ T / π) - [ - (a₀ T / π) ] = 2 a₀ T / π.\n5. Since initial velocity u = 0:\n   v(T) = 2 a₀ T / π.\n6. Therefore, the velocity at t = T is 2 a₀ T / π.",
    tip="Area under half-period of sine wave = 2 / π * peak * duration = 2 a₀ T / π.",
    why_wrong="Option B misses the factor of 2. Option C assumes velocity returns to zero. Option D inverts the factor."
))

# Q247 (Hard)
qs.append(make_motion_q(
    num=247,
    question="In the previous question where a(t) = a₀ sin(π t / T) and u = 0, what is the displacement of the particle at t = T?",
    options={
        "A": "a₀ T² / π",
        "B": "2 a₀ T² / π²",
        "C": "a₀ T² / (2π)",
        "D": "a₀ T² / 2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration-time graphs",
    concept="Integrate velocity v(t) = (a₀ T / π) [ 1 - cos(π t / T) ] from 0 to T.",
    given="v(t) = (a₀ T / π) [ 1 - cos(π t / T) ], limits 0 to T.",
    formula="s(T) = (a₀ T / π) ∫_0^T [ 1 - cos(π t / T) ] dt.",
    steps="1. Velocity function from Q246:\n   v(t) = ∫_0^t a₀ sin(π t'/T) dt' = (a₀ T / π) [ 1 - cos(π t / T) ].\n2. Integrate velocity to find displacement:\n   s(T) = (a₀ T / π) ∫_0^T [ 1 - cos(π t / T) ] dt.\n3. The integral of cos(π t / T) over a full half-period [0, T] is:\n   ∫_0^T cos(π t / T) dt = [ (T / π) sin(π t / T) ]_0^T = (T/π)(sin π - sin 0) = 0.\n4. Therefore, only the constant term '1' contributes:\n   s(T) = (a₀ T / π) * [ T - 0 ] = a₀ T² / π.\n5. Hence, the displacement at t = T is a₀ T² / π.",
    tip="Beautiful calculus cancellation: The oscillating cosine term integrates to zero, leaving only the DC term: (a₀ T / π) * T = a₀ T² / π!",
    why_wrong="Option B has π² in denominator. Option C divides by 2π. Option D assumes constant acceleration."
))

# Q248 (Hard)
qs.append(make_motion_q(
    num=248,
    question="A body starts from rest at the origin. Its acceleration varies with position as a(x) = k x (where k > 0). What is its position as a function of time t?",
    options={
        "A": "x(t) ∝ e^(√k t) + e^(-√k t) = cosh(√k t)",
        "B": "x(t) ∝ cos(√k t)",
        "C": "x(t) ∝ t²",
        "D": "x(t) ∝ t³"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration-time graphs",
    concept="The differential equation d²x/dt² = +k x has exponential (hyperbolic) solutions: x(t) = A e^(√k t) + B e^(-√k t).",
    given="d²x/dt² = k x (k > 0).",
    formula="d²x/dt² - k x = 0 => characteristic roots r = ±√k.",
    steps="1. The equation of motion is d²x/dt² - k x = 0.\n2. The characteristic equation is r² - k = 0 => r = ±√k.\n3. The general solution is a linear combination of exponentials:\n   x(t) = C₁ e^(√k t) + C₂ e^(-√k t).\n4. This can be expressed in terms of hyperbolic functions: x(t) = A cosh(√k t) + B sinh(√k t).\n5. Notice the contrast with SHM: when a = -k x, roots are imaginary and x(t) is sinusoidal (cos √k t). When a = +k x, roots are real and x(t) grows exponentially (cosh √k t)!\n6. Therefore, Option A is the correct functional form.",
    tip="Compare: a = -k x -> SHM (sinusoidal, bounded). a = +k x -> Repulsive force (hyperbolic/exponential, unbounded).",
    why_wrong="Option B is for attractive restoring force a = -k x (SHM). Options C and D are polynomial."
))

# Q249 (Hard)
qs.append(make_motion_q(
    num=249,
    question="The a-t graph of a particle is shown as a semi-ellipse of height a₀ and base 2T centered at t = T. If the particle was initially at rest, what is its velocity at t = 2T?",
    options={
        "A": "π a₀ T / 2",
        "B": "π a₀ T",
        "C": "2 a₀ T",
        "D": "4 a₀ T / π"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration-time graphs",
    concept="The change in velocity is the area of the semi-ellipse: Area = (1/2) * π * (semi-major axis) * (semi-minor axis).",
    given="Semi-ellipse with semi-axis along t equal to T, and semi-axis along a equal to a₀.",
    formula="Area = (1/2) * π * a₀ * T = π a₀ T / 2.",
    steps="1. The area of a full ellipse with semi-axes A and B is π A B.\n2. For a semi-ellipse, the area is half that of a full ellipse:\n   Area = (1/2) π A B.\n3. Here, the semi-axis along time is T (since full base is 2T).\n   The semi-axis along acceleration is a₀ (height of the apex).\n4. Area = (1/2) * π * a₀ * T = π a₀ T / 2.\n5. The area represents the total change in velocity: Δv = π a₀ T / 2.\n6. Since the particle was initially at rest (u = 0):\n   v(2T) = u + Δv = π a₀ T / 2.\n7. Therefore, the velocity at t = 2T is π a₀ T / 2.",
    tip="Area of semi-ellipse = (1/2) π * a₀ * T. Exact analog of the semicircle area!",
    why_wrong="Option B is the full ellipse area. Option C is a bounding rectangle estimate. Option D is an inverted factor."
))

# Q250 (Hard)
qs.append(make_motion_q(
    num=250,
    question="A body accelerates from rest with an acceleration that decreases continuously according to a(t) = a₀ e^(-t / τ). What is the terminal velocity attained by the body as t -> ∞?",
    options={
        "A": "a₀ τ",
        "B": "a₀ / τ",
        "C": "a₀ τ²",
        "D": "Infinite velocity"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Acceleration-time graphs",
    concept="Terminal velocity is initial velocity plus the total area under the exponential a-t curve from 0 to ∞: v_terminal = u + ∫_0^∞ a₀ e^(-t / τ) dt.",
    given="a(t) = a₀ e^(-t/τ), u = 0, t -> ∞.",
    formula="v_terminal = ∫_0^∞ a₀ e^(-t/τ) dt = a₀ [ -τ e^(-t/τ) ]_0^∞ = a₀ τ.",
    steps="1. Integrate acceleration from t = 0 to t = ∞:\n   v_terminal = ∫_0^∞ a₀ e^(-t / τ) dt.\n2. Standard exponential integral:\n   ∫_0^∞ e^(-t / τ) dt = [ -τ e^(-t / τ) ]_0^∞ = 0 - (-τ) = τ.\n3. Multiply by constant a₀:\n   v_terminal = a₀ * τ.\n4. Since initial velocity u = 0, the final terminal velocity reached is a₀ τ.\n5. Notice the units: [a₀] = m/s², [τ] = s, so [a₀ τ] = m/s (velocity). Perfect dimensional consistency!",
    tip="Area under exponential decay curve from 0 to infinity = Peak height * Time constant = a₀ * τ.",
    why_wrong="Option B is dimensionally incorrect ([m/s³]). Option C is dimensionally displacement ([m]). Option D fails to realize that the integral converges to a finite value."
))

print(f"Generated Q210 to Q250: {len(qs)} questions")

with open('scripts/part2_topics11_12.json', 'w') as f:
    json.dump(qs, f, indent=2)
