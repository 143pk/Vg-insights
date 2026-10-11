import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 13: Slope and area interpretations of graphs (Q251 to Q275, 25 questions)
# Difficulties: 6 Easy, 13 Medium, 6 Hard
# ==============================================================================

# Q251 - Easy
qs.append(make_motion_q(
    num=251,
    question="On a position-time (x-t) graph of a moving particle, what does the slope of the tangent at any point represent?",
    options={
        "A": "Instantaneous acceleration",
        "B": "Instantaneous velocity",
        "C": "Average acceleration",
        "D": "Total displacement"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Slope and area interpretations of graphs",
    concept="The derivative of position with respect to time dx/dt equals instantaneous velocity, which is geometrically the slope of the tangent to the x-t curve.",
    given="Position-time (x-t) graph.",
    formula="v = dx/dt = slope of tangent to x-t curve.",
    steps=(
        "1. By definition, instantaneous velocity is the rate of change of position with time: v = dx/dt.\n"
        "2. On a Cartesian graph with x on the vertical axis and t on the horizontal axis, dx/dt represents the slope of the tangent at that instantaneous time point.\n"
        "3. Therefore, the tangent slope directly gives instantaneous velocity."
    ),
    tip="Slope of x-t gives velocity. Slope of v-t gives acceleration. Slope of a-t gives jerk.",
    why_wrong="Acceleration is the slope of a velocity-time graph, not a position-time graph."
))

# Q252 - Easy
qs.append(make_motion_q(
    num=252,
    question="The area under a velocity-time (v-t) graph between time t₁ and t₂ represents which physical quantity?",
    options={
        "A": "Total acceleration",
        "B": "Change in velocity",
        "C": "Displacement of the particle",
        "D": "Average speed"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Slope and area interpretations of graphs",
    concept="The definite integral of velocity with respect to time ∫ v dt equals displacement Δx.",
    given="Velocity-time (v-t) graph from t₁ to t₂.",
    formula="Δx = ∫_{t₁}^{t₂} v(t) dt = Area under v-t curve.",
    steps=(
        "1. Since v = dx/dt, we have dx = v dt.\n"
        "2. Integrating both sides from t₁ to t₂ gives: ∫ dx = ∫_{t₁}^{t₂} v dt = Δx (displacement).\n"
        "3. Geometrically, this definite integral corresponds to the net area enclosed between the v-t curve and the time axis (taking area above axis as positive and below as negative)."
    ),
    tip="Area under v-t graph gives displacement (with signs) or total distance (taking absolute values of areas).",
    why_wrong="Change in velocity is given by the area under the acceleration-time graph."
))

# Q253 - Easy
qs.append(make_motion_q(
    num=253,
    question="The area under an acceleration-time (a-t) graph between times t₁ and t₂ represents:",
    options={
        "A": "Displacement of the particle",
        "B": "Average speed of the particle",
        "C": "Change in velocity (v₂ - v₁)",
        "D": "Final position of the particle"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Slope and area interpretations of graphs",
    concept="The integral of acceleration with respect to time ∫ a dt gives the change in velocity Δv = v₂ - v₁.",
    given="Acceleration-time (a-t) graph between t₁ and t₂.",
    formula="Δv = v₂ - v₁ = ∫_{t₁}^{t₂} a dt = Area under a-t curve.",
    steps=(
        "1. Acceleration is defined as a = dv/dt.\n"
        "2. Multiplying by dt and integrating from t₁ to t₂: ∫_{v₁}^{v₂} dv = ∫_{t₁}^{t₂} a dt.\n"
        "3. This yields v₂ - v₁ = Area under the a-t graph.\n"
        "4. Note that it gives change in velocity, not the instantaneous final velocity itself (unless initial velocity v₁ = 0)."
    ),
    tip="NEET Trap: Area under a-t curve gives CHANGE in velocity (v_final - v_initial), not just v_final!",
    why_wrong="Area under a-t gives change in velocity, while displacement requires integrating velocity."
))

# Q254 - Easy
qs.append(make_motion_q(
    num=254,
    question="What does the slope of a velocity-time (v-t) graph represent at any given instant?",
    options={
        "A": "Total displacement",
        "B": "Instantaneous acceleration",
        "C": "Average velocity",
        "D": "Kinetic energy"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Slope and area interpretations of graphs",
    concept="The time derivative of velocity dv/dt represents instantaneous acceleration, which is the slope of the v-t graph.",
    given="Velocity-time (v-t) graph.",
    formula="a = dv/dt = slope of tangent to v-t curve.",
    steps=(
        "1. By definition, acceleration is the rate of change of velocity with time: a = dv/dt.\n"
        "2. On a plot of v versus t, dv/dt is the slope of the tangent line.\n"
        "3. A positive slope denotes acceleration, a negative slope denotes deceleration (retardation), and zero slope denotes uniform velocity."
    ),
    tip="Horizontal line on v-t graph means zero slope, hence zero acceleration (uniform motion).",
    why_wrong="Displacement is the area under the v-t graph, not its slope."
))

# Q255 - Easy
qs.append(make_motion_q(
    num=255,
    question="A velocity-time graph is a horizontal straight line parallel to the time axis. The area under this graph between t = 0 and t = T represents:",
    options={
        "A": "Zero displacement",
        "B": "Uniform acceleration",
        "C": "Displacement equal to v₀ × T",
        "D": "Infinite distance"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Slope and area interpretations of graphs",
    concept="For constant velocity v₀, the v-t graph forms a rectangle of height v₀ and width T, so area = v₀ × T.",
    given="Constant velocity v₀, time duration T.",
    formula="Displacement s = v₀ × T = Area of rectangle.",
    steps=(
        "1. The curve is v(t) = v₀ (constant).\n"
        "2. The area under this horizontal line between t = 0 and t = T is a rectangle of height v₀ and base T.\n"
        "3. Area = base × height = T × v₀ = v₀T, which equals displacement."
    ),
    tip="Uniform motion has zero acceleration, rectangular v-t area, and linear x-t graph.",
    why_wrong="Displacement is not zero because the velocity is non-zero and constant."
))

# Q256 - Easy
qs.append(make_motion_q(
    num=256,
    question="To find the total distance traveled from a velocity-time graph when velocity becomes negative during parts of the motion, one must:",
    options={
        "A": "Subtract the negative area from the positive area",
        "B": "Add the absolute magnitudes of all areas (above and below the time axis)",
        "C": "Only consider the area above the time axis",
        "D": "Calculate the slope of the curve"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Slope and area interpretations of graphs",
    concept="Distance is a scalar and always increases. Total distance is the sum of magnitudes of all areas under the v-t graph: Total Distance = |Area₁| + |Area₂|.",
    given="Velocity-time graph with positive and negative velocity regions.",
    formula="Displacement = Area₁ - |Area₂|; Total Distance = Area₁ + |Area₂|.",
    steps=(
        "1. Area above the time axis represents forward displacement (+Δx₁).\n"
        "2. Area below the time axis represents backward displacement (-Δx₂).\n"
        "3. Total displacement is the vector sum: Δx = Δx₁ - Δx₂.\n"
        "4. Total distance is the total path length: d = |Δx₁| + |Δx₂|."
    ),
    tip="Displacement = Area with signs (+ and -). Distance = Sum of absolute values of areas (|Area|).",
    why_wrong="Subtracting gives displacement, not total distance."
))

# Q257 - Medium
qs.append(make_motion_q(
    num=257,
    question="The velocity-time graph of a particle is a right triangle with base along the time axis from t = 0 to t = 6 s, and peak velocity 12 m/s at t = 6 s. The displacement during these 6 seconds is:",
    options={
        "A": "72 m",
        "B": "36 m",
        "C": "18 m",
        "D": "48 m"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Area of a triangle under the v-t graph equals displacement: Area = 1/2 × base × height.",
    given="Base = 6 s, Height (peak velocity) = 12 m/s.",
    formula="Displacement = (1/2) × base × height",
    steps=(
        "1. Identify the geometric shape under the v-t graph: it is a triangle.\n"
        "2. Base of triangle = 6 s - 0 s = 6 s.\n"
        "3. Height of triangle = 12 m/s.\n"
        "4. Displacement = Area = (1/2) × 6 s × 12 m/s = 36 m."
    ),
    tip="For constant acceleration starting from rest, average velocity is v_max / 2 = 6 m/s, so displacement = 6 m/s × 6 s = 36 m.",
    why_wrong="72 m is base × height without dividing by 2 (area of rectangle)."
))

# Q258 - Medium
qs.append(make_motion_q(
    num=258,
    question="A body moves along a straight line. Its v-t graph consists of a triangle from t = 0 to 4 s with peak velocity 10 m/s at t = 2 s, followed by a rectangular portion from t = 4 to 8 s with velocity 10 m/s. The total displacement from t = 0 to 8 s is:",
    options={
        "A": "40 m",
        "B": "60 m",
        "C": "50 m",
        "D": "80 m"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Total displacement equals the sum of individual geometric areas under the v-t graph.",
    given="Triangle from t = 0 to 4 s (peak 10 m/s), rectangle from t = 4 to 8 s (height 10 m/s).",
    formula="Total Displacement = Area(triangle) + Area(rectangle)",
    steps=(
        "1. Area of triangular part (t = 0 to 4 s): Base = 4 s, Height = 10 m/s.\n"
        "   Area₁ = (1/2) × 4 × 10 = 20 m.\n"
        "2. Area of rectangular part (t = 4 to 8 s): Base = 8 - 4 = 4 s, Height = 10 m/s.\n"
        "   Area₂ = 4 × 10 = 40 m.\n"
        "3. Total displacement = Area₁ + Area₂ = 20 m + 40 m = 60 m."
    ),
    tip="Break complex piecewise v-t graphs into simple shapes (triangles, rectangles, trapezoids).",
    why_wrong="40 m is only the rectangular portion; 20 m is only the triangle."
))

# Q259 - Medium
qs.append(make_motion_q(
    num=259,
    question="The acceleration-time graph of a particle starting from rest is a triangle of base 10 s and height 6 m/s². What is the velocity of the particle at t = 10 s?",
    options={
        "A": "60 m/s",
        "B": "30 m/s",
        "C": "15 m/s",
        "D": "45 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Change in velocity Δv = Area under a-t graph. Since initial velocity u = 0, final velocity v = Area.",
    given="Base = 10 s, Height (maximum acceleration) = 6 m/s², Initial velocity u = 0.",
    formula="v - u = Area under a-t curve = (1/2) × base × height",
    steps=(
        "1. The particle starts from rest, so u = 0 m/s.\n"
        "2. The area under the triangular a-t graph is: Area = (1/2) × base × height.\n"
        "3. Area = (1/2) × 10 s × 6 m/s² = 30 m/s.\n"
        "4. Since v - u = 30 m/s and u = 0, we have v = 30 m/s."
    ),
    tip="Always check whether initial velocity is zero before equating final velocity directly to the area under the a-t graph.",
    why_wrong="60 m/s forgets the factor of 1/2 for the triangle."
))

# Q260 - Medium
qs.append(make_motion_q(
    num=260,
    question="The velocity-time graph of a moving object shows a positive triangular area of 30 m above the time axis (from t = 0 to 4 s) and a negative triangular area of 10 m below the time axis (from t = 4 to 6 s). The ratio of total distance to magnitude of displacement is:",
    options={
        "A": "2 : 1",
        "B": "3 : 1",
        "C": "4 : 1",
        "D": "1 : 2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Total distance = Area₁ + Area₂ = 30 + 10 = 40 m. Displacement = Area₁ - Area₂ = 30 - 10 = 20 m. Ratio = 40 / 20 = 2 : 1.",
    given="Positive area = 30 m, Negative area = 10 m.",
    formula="Distance = |A₁| + |A₂|; Displacement = A₁ - |A₂|",
    steps=(
        "1. Total distance = 30 m + 10 m = 40 m.\n"
        "2. Magnitude of displacement = |30 m - 10 m| = 20 m.\n"
        "3. Ratio of distance to displacement = 40 / 20 = 2 / 1 = 2 : 1."
    ),
    tip="Distance ≥ |Displacement| always. The ratio distance / |displacement| is always ≥ 1.",
    why_wrong="3:1 forgets to add the negative area to find total distance."
))

# Q261 - Medium
qs.append(make_motion_q(
    num=261,
    question="A car accelerates uniformly from rest for 10 s, maintaining a constant velocity for 20 s, and then decelerates uniformly to rest in 10 s. If the total distance covered is 600 m, the maximum velocity attained is:",
    options={
        "A": "15 m/s",
        "B": "20 m/s",
        "C": "25 m/s",
        "D": "30 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="The v-t graph forms a trapezoid. Area of trapezoid = (1/2) × (sum of parallel sides) × height.",
    given="t₁ = 10 s, t₂ = 20 s (constant speed), t₃ = 10 s. Total time = 40 s. Constant speed duration = 20 s. Total distance = 600 m.",
    formula="Area = (1/2) × (b₁ + b₂) × v_max",
    steps=(
        "1. The lower base of the trapezoid is total time: b₁ = 10 + 20 + 10 = 40 s.\n"
        "2. The upper base is the duration of constant velocity: b₂ = 20 s.\n"
        "3. Area = (1/2) × (40 + 20) × v_max = 600 m.\n"
        "4. (1/2) × 60 × v_max = 30 × v_max = 600 m.\n"
        "5. v_max = 600 / 30 = 20 m/s."
    ),
    tip="Trapezoid area formula saves massive calculation time in 3-stage motion problems: Area = 1/2 × (t_total + t_const) × v_max.",
    why_wrong="15 m/s or 30 m/s arise from incorrect base identification."
))

# Q262 - Medium
qs.append(make_motion_q(
    num=262,
    question="The displacement-time equation of a particle is x = 2t³ - 6t² + 4t + 5. At what time is the slope of the velocity-time graph equal to zero?",
    options={
        "A": "t = 1 s",
        "B": "t = 2 s",
        "C": "t = 0.5 s",
        "D": "t = 1.5 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="The slope of the v-t graph is acceleration a = dv/dt = d²x/dt². Setting a = 0 gives the required time.",
    given="x(t) = 2t³ - 6t² + 4t + 5.",
    formula="v = dx/dt, a = dv/dt = 0",
    steps=(
        "1. Velocity: v = dx/dt = 6t² - 12t + 4.\n"
        "2. Acceleration (slope of v-t curve): a = dv/dt = 12t - 12.\n"
        "3. Set slope = 0: 12t - 12 = 0 => 12t = 12 => t = 1 s."
    ),
    tip="Slope of v-t graph = acceleration = second derivative of position.",
    why_wrong="Setting velocity to zero gives roots of 6t² - 12t + 4 = 0, which is where slope of x-t is zero, not slope of v-t."
))

# Q263 - Medium
qs.append(make_motion_q(
    num=263,
    question="A body starts from rest at t = 0 and moves along a line. Its acceleration increases linearly with time as a(t) = 3t (in m/s²). The displacement of the body at t = 2 s is:",
    options={
        "A": "4 m",
        "B": "6 m",
        "C": "8 m",
        "D": "12 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Integrate acceleration twice: v = ∫ a dt = 3t²/2, x = ∫ v dt = 3t³/6 = t³/2.",
    given="a = 3t, u = 0, x(0) = 0, t = 2 s.",
    formula="x(t) = ∫ (∫ a dt) dt",
    steps=(
        "1. v(t) = ∫ 3t dt = 3t²/2 (since u = 0).\n"
        "2. x(t) = ∫ (3t²/2) dt = (3/2) × (t³/3) = t³/2 (since x(0) = 0).\n"
        "3. At t = 2 s: x(2) = (2)³ / 2 = 8 / 2 = 4 m."
    ),
    tip="For a = kt: v = 1/2 k t², and x = 1/6 k t³. Here k = 3, so x = 3/6 × 2³ = 4 m.",
    why_wrong="Using standard kinematic equation s = 1/2 a t² is WRONG because acceleration is not constant!"
))

# Q264 - Medium
qs.append(make_motion_q(
    num=264,
    question="The velocity-time graph of a particle moving in a straight line is shown with v = 20 - 4t (m/s) from t = 0 to t = 8 s. At what time does the particle reverse its direction of motion?",
    options={
        "A": "t = 4 s",
        "B": "t = 5 s",
        "C": "t = 8 s",
        "D": "t = 2.5 s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Reversal of direction occurs when velocity changes sign, passing through v = 0.",
    given="v(t) = 20 - 4t.",
    formula="v(t) = 0 for reversal of direction.",
    steps=(
        "1. Reversal of direction requires instantaneous velocity to become zero: v = 0.\n"
        "2. 20 - 4t = 0 => 4t = 20 => t = 5 s.\n"
        "3. For t < 5 s, v > 0 (moving forward). For t > 5 s, v < 0 (moving backward).\n"
        "4. Hence direction reverses at t = 5 s."
    ),
    tip="On a v-t graph, reversal of direction corresponds to the curve crossing the time axis (v = 0).",
    why_wrong="t = 4 s is when velocity is 4 m/s, not zero."
))

# Q265 - Medium
qs.append(make_motion_q(
    num=265,
    question="For the velocity function v(t) = 20 - 4t (m/s) from t = 0 to t = 8 s, what is the total distance traveled by the particle?",
    options={
        "A": "32 m",
        "B": "50 m",
        "C": "68 m",
        "D": "18 m"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Total distance is the sum of magnitudes of area before and after the zero-crossing at t = 5 s.",
    given="v(t) = 20 - 4t, t goes from 0 to 8 s, zero crossing at t = 5 s.",
    formula="Distance = |Area(0 to 5 s)| + |Area(5 to 8 s)|",
    steps=(
        "1. From t = 0 to 5 s: triangle with base = 5 s, height = 20 m/s.\n"
        "   Area₁ = (1/2) × 5 × 20 = 50 m.\n"
        "2. From t = 5 to 8 s: base = 3 s, height at t = 8 s is |20 - 4(8)| = |-12| = 12 m/s.\n"
        "   Area₂ = (1/2) × 3 × 12 = 18 m.\n"
        "3. Total distance = Area₁ + Area₂ = 50 m + 18 m = 68 m.\n"
        "4. (Note: Displacement would be 50 - 18 = 32 m)."
    ),
    tip="Always calculate distance piecewise when the velocity crosses zero!",
    why_wrong="32 m is displacement (50 - 18), not total distance."
))

# Q266 - Medium
qs.append(make_motion_q(
    num=266,
    question="The velocity versus displacement (v-x) graph of a particle is a straight line passing through (0, 10 m/s) and (20 m, 0). What is the acceleration of the particle when x = 10 m?",
    options={
        "A": "-2.5 m/s²",
        "B": "-5.0 m/s²",
        "C": "+2.5 m/s²",
        "D": "0 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="In terms of position, acceleration is given by a = v (dv/dx). Here dv/dx is the slope of the v-x graph.",
    given="Points (0, 10) and (20, 0) on v-x line.",
    formula="a = v × (dv/dx)",
    steps=(
        "1. Slope of the v-x line: dv/dx = (0 - 10) / (20 - 0) = -10 / 20 = -0.5 s⁻¹.\n"
        "2. Equation of the line: v(x) = 10 - 0.5x.\n"
        "3. At x = 10 m: v = 10 - 0.5(10) = 5 m/s.\n"
        "4. Acceleration a = v × (dv/dx) = 5 × (-0.5) = -2.5 m/s²."
    ),
    tip="CRITICAL NEET FORMULA: a = v (dv/dx). Do not confuse dv/dt with dv/dx!",
    why_wrong="-5.0 m/s² mistakenly uses a = v/t or squares the slope."
))

# Q267 - Medium
qs.append(make_motion_q(
    num=267,
    question="On an a-t graph, the acceleration of a particle is given by a = 4 - 2t (in m/s²). If initial velocity u = 3 m/s at t = 0, what is the maximum velocity attained by the particle?",
    options={
        "A": "7 m/s",
        "B": "4 m/s",
        "C": "11 m/s",
        "D": "8 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Velocity is maximum when dv/dt = a = 0. Then v_max = u + Area under a-t curve up to that time.",
    given="a(t) = 4 - 2t, u = 3 m/s.",
    formula="v_max occurs when a = 0; v = u + ∫ a dt",
    steps=(
        "1. Velocity is maximum when acceleration passes through zero: a = 4 - 2t = 0 => t = 2 s.\n"
        "2. Change in velocity from t = 0 to 2 s is area under a-t graph (triangle):\n"
        "   Δv = (1/2) × base × height = (1/2) × 2 s × 4 m/s² = 4 m/s.\n"
        "3. Therefore, maximum velocity v_max = u + Δv = 3 m/s + 4 m/s = 7 m/s."
    ),
    tip="Maximum velocity occurs at the zero-crossing of acceleration (a = 0).",
    why_wrong="4 m/s is only the change in velocity (Δv), forgetting initial velocity u = 3 m/s."
))

# Q268 - Medium
qs.append(make_motion_q(
    num=268,
    question="A particle moves along a straight line. Its velocity-time graph has a slope of +3 m/s² from t = 0 to 4 s, and a slope of -2 m/s² from t = 4 to 10 s. If it starts from rest, what is its velocity at t = 10 s?",
    options={
        "A": "0 m/s",
        "B": "6 m/s",
        "C": "-2 m/s",
        "D": "12 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Velocity change in each stage is given by Δv = a × Δt (slope × time interval).",
    given="u = 0, a₁ = +3 m/s² for Δt₁ = 4 s, a₂ = -2 m/s² for Δt₂ = 6 s.",
    formula="v = u + a₁Δt₁ + a₂Δt₂",
    steps=(
        "1. Stage 1 (t = 0 to 4 s): Δv₁ = (+3 m/s²) × 4 s = +12 m/s. Velocity at t = 4 s is 12 m/s.\n"
        "2. Stage 2 (t = 4 to 10 s): time interval Δt₂ = 10 - 4 = 6 s.\n"
        "   Δv₂ = (-2 m/s²) × 6 s = -12 m/s.\n"
        "3. Velocity at t = 10 s: v = 12 m/s + (-12 m/s) = 0 m/s."
    ),
    tip="Since positive area under a-t graph (3 × 4 = 12) equals negative area (2 × 6 = 12), net change in velocity is zero.",
    why_wrong="6 m/s or -2 m/s result from miscalculating the second time interval."
))

# Q269 - Medium
qs.append(make_motion_q(
    num=269,
    question="The position-time graph of two particles A and B are straight lines making angles of 30° and 60° respectively with the time axis. The ratio of their velocities v_A : v_B is:",
    options={
        "A": "1 : 3",
        "B": "3 : 1",
        "C": "1 : √3",
        "D": "√3 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Slope and area interpretations of graphs",
    concept="Velocity is the slope of the x-t line: v = tan(θ). Ratio v_A / v_B = tan(30°) / tan(60°).",
    given="θ_A = 30°, θ_B = 60° with time axis.",
    formula="v = tan(θ) => v_A / v_B = tan(θ_A) / tan(θ_B)",
    steps=(
        "1. Velocity of particle A: v_A = tan(30°) = 1/√3.\n"
        "2. Velocity of particle B: v_B = tan(60°) = √3.\n"
        "3. Ratio v_A / v_B = (1/√3) / √3 = 1 / 3 = 1 : 3."
    ),
    tip="Frequent NEET question! Always check whether angles are given with the time axis or the position axis.",
    why_wrong="1 : √3 forgets that tan(60°) = √3 and (1/√3)/√3 = 1/3."
))

# Q270 - Hard
qs.append(make_motion_q(
    num=270,
    question="A particle moves along the x-axis such that its velocity is related to position by v = √(4x + 16) in SI units. What is the acceleration of the particle?",
    options={
        "A": "4 m/s²",
        "B": "2 m/s²",
        "C": "8 m/s²",
        "D": "1 m/s²"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Slope and area interpretations of graphs",
    concept="Square both sides: v² = 4x + 16. Compare with 3rd equation of motion v² = u² + 2as, which gives 2a = 4 => a = 2 m/s².",
    given="v = √(4x + 16).",
    formula="v² = u² + 2ax => a = (1/2) × d(v²)/dx",
    steps=(
        "1. Squaring both sides: v² = 16 + 4x.\n"
        "2. Differentiating with respect to x: 2v (dv/dx) = 4.\n"
        "3. Since acceleration a = v (dv/dx), we have: 2a = 4 => a = 2 m/s².\n"
        "4. The acceleration is constant and equals 2 m/s²."
    ),
    tip="Whenever you see v = √(2ax + c), squaring immediately gives v² = 2ax + c, so a = (coefficient of x) / 2.",
    why_wrong="4 m/s² is the coefficient of x, forgetting the factor of 2 in 2ax."
))

# Q271 - Hard
qs.append(make_motion_q(
    num=271,
    question="The velocity-time graph of a body is a semicircle of radius R = 4 with diameter along the time axis from t = 0 to t = 8 s. The total displacement of the body is:",
    options={
        "A": "8π m",
        "B": "4π m",
        "C": "16π m",
        "D": "32 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Slope and area interpretations of graphs",
    concept="Displacement equals the area under the semicircle: Area = (1/2) × π × R².",
    given="Radius R = 4, diameter = 8 s.",
    formula="Displacement = Area of semicircle = (1/2) π R²",
    steps=(
        "1. Base along time axis = 8 s, so diameter = 8 s and radius R = 4 units.\n"
        "2. The area under the semicircle is (1/2) × π × R².\n"
        "3. Area = (1/2) × π × (4)² = (1/2) × π × 16 = 8π m."
    ),
    tip="For circular or semicircular v-t graphs, use standard circle geometry: area of semicircle = 1/2 π r².",
    why_wrong="4π forgets that radius squared is 16; 16π is the area of a full circle."
))

# Q272 - Hard
qs.append(make_motion_q(
    num=272,
    question="A particle starts from rest from x = 0 at t = 0. Its acceleration is given by a(x) = 2x + 3 (in m/s²). What is its velocity when it reaches x = 2 m?",
    options={
        "A": "4 m/s",
        "B": "√20 m/s",
        "C": "5 m/s",
        "D": "√10 m/s"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Slope and area interpretations of graphs",
    concept="When acceleration depends on position, use a = v dv/dx => ∫ v dv = ∫ a dx.",
    given="a(x) = 2x + 3, u = 0 at x = 0, target x = 2 m.",
    formula="∫_{0}^{v} v dv = ∫_{0}^{x} a(x) dx => v²/2 = [x² + 3x]_{0}^{2}",
    steps=(
        "1. Write a = v (dv/dx) => v dv = a(x) dx = (2x + 3) dx.\n"
        "2. Integrate both sides from initial state (v=0, x=0) to final state (v, x=2):\n"
        "   ∫₀ᵛ v dv = [v²/2]₀ᵛ = v²/2.\n"
        "3. Right-hand side: ∫₀² (2x + 3) dx = [x² + 3x]₀² = (2² + 3(2)) - 0 = 4 + 6 = 10.\n"
        "4. Therefore: v²/2 = 10 => v² = 20 => v = √20 m/s (≈ 4.47 m/s)."
    ),
    tip="When acceleration is a function of position, always integrate v dv = a(x) dx!",
    why_wrong="4 m/s or 5 m/s use constant acceleration formulas which do not apply here."
))
qs[-1]['correctAnswer'] = "B"
qs[-1]['correctIndex'] = 1

# Q273 - Hard
qs.append(make_motion_q(
    num=273,
    question="The acceleration-time graph of a particle is an isosceles triangle with peak acceleration 8 m/s² at t = 4 s, starting at a = 0 at t = 0 and returning to a = 0 at t = 8 s. If the particle was initially moving with velocity 2 m/s at t = 0, its velocity at t = 8 s is:",
    options={
        "A": "34 m/s",
        "B": "32 m/s",
        "C": "66 m/s",
        "D": "18 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Slope and area interpretations of graphs",
    concept="Final velocity v = u + Area under a-t graph. Area of triangle = 1/2 × base × height.",
    given="u = 2 m/s, base = 8 s, height = 8 m/s².",
    formula="v = u + Area under a-t curve",
    steps=(
        "1. The a-t graph is a triangle with base = 8 s and height = 8 m/s².\n"
        "2. Area under triangle = (1/2) × base × height = (1/2) × 8 s × 8 m/s² = 32 m/s.\n"
        "3. This area represents change in velocity: Δv = v - u = 32 m/s.\n"
        "4. Final velocity v = u + Δv = 2 m/s + 32 m/s = 34 m/s."
    ),
    tip="Never forget to add the non-zero initial velocity u to the area!",
    why_wrong="32 m/s is the area (Δv), forgetting initial velocity u = 2 m/s."
))

# Q274 - Hard
qs.append(make_motion_q(
    num=274,
    question="A body starts from rest at the origin and moves along the x-axis. Its v-t graph consists of a straight line with slope +2 m/s² from t = 0 to t = 6 s, and then slope -3 m/s² from t = 6 s until it comes to rest at time T. What is the total time T of motion and total distance?",
    options={
        "A": "T = 10 s, Distance = 60 m",
        "B": "T = 10 s, Distance = 72 m",
        "C": "T = 8 s, Distance = 48 m",
        "D": "T = 12 s, Distance = 72 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Slope and area interpretations of graphs",
    concept="Peak velocity v_max = a₁ × t₁ = 2 × 6 = 12 m/s. Deceleration time t₂ = v_max / a₂ = 12 / 3 = 4 s. Total time = 10 s. Area = 1/2 × 10 × 12 = 60 m.",
    given="a₁ = 2 m/s², t₁ = 6 s, a₂ = 3 m/s².",
    formula="v_max = a₁t₁; t₂ = v_max / a₂; Distance = (1/2) × (t₁ + t₂) × v_max",
    steps=(
        "1. Maximum velocity reached: v_max = 0 + 2 m/s² × 6 s = 12 m/s.\n"
        "2. Time taken to decelerate to rest: t₂ = v_max / 3 m/s² = 12 / 3 = 4 s.\n"
        "3. Total time T = t₁ + t₂ = 6 s + 4 s = 10 s.\n"
        "4. Total distance = Area of triangle = (1/2) × Base × Height = (1/2) × 10 s × 12 m/s = 60 m."
    ),
    tip="Alpha-Beta motion formula: T = v_max(1/α + 1/β) and s = 1/2 v_max T.",
    why_wrong="72 m forgets the 1/2 factor or assumes 12 seconds of motion."
))

# Q275 - Hard
qs.append(make_motion_q(
    num=275,
    question="The acceleration of a particle is related to its velocity by a = -k √v, where k is a positive constant. If the initial velocity is v₀, what is the total distance covered by the particle before coming to rest?",
    options={
        "A": "2 v₀^(3/2) / (3k)",
        "B": "v₀^(3/2) / (3k)",
        "C": "3 v₀^(3/2) / (2k)",
        "D": "2 v₀ / k"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Slope and area interpretations of graphs",
    concept="Express acceleration as v dv/dx = -k √v => √v dv = -k dx, then integrate from v₀ to 0.",
    given="a = v dv/dx = -k √v, initial velocity v₀, final velocity 0.",
    formula="v dv/dx = -k √v => v^(1/2) dv = -k dx",
    steps=(
        "1. Rewrite acceleration in terms of position: a = v (dv/dx).\n"
        "2. v (dv/dx) = -k √v => (v / √v) dv = -k dx => v^(1/2) dv = -k dx.\n"
        "3. Integrate both sides from initial state (v = v₀, x = 0) to rest (v = 0, x = s):\n"
        "   ∫_{v₀}^{0} v^(1/2) dv = -k ∫_{0}^{s} dx.\n"
        "4. Left side: [(2/3) v^(3/2)]_{v₀}^{0} = 0 - (2/3) v₀^(3/2) = -(2/3) v₀^(3/2).\n"
        "5. Right side: -k s.\n"
        "6. Equating: -(2/3) v₀^(3/2) = -k s => s = 2 v₀^(3/2) / (3k)."
    ),
    tip="Whenever stopping distance is asked with velocity-dependent acceleration a(v), use a = v (dv/dx) to eliminate time!",
    why_wrong="Option B forgets the 2/3 factor from integrating v^(1/2)."
))

# Save Topic 13 questions to file
with open('scripts/part3_topic13.json', 'w') as f:
    json.dump(qs, f, indent=2)

print(f'Generated Topic 13: {len(qs)} questions')
