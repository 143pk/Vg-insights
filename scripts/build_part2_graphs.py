import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 9: Position-time graphs (Q168 - Q188)
# 5 Easy, 11 Medium, 5 Hard (Total 21)
# ==============================================================================

# Q168 (Easy)
qs.append(make_motion_q(
    num=168,
    question="The slope of a position-time (x-t) graph at any given instant represents:",
    options={
        "A": "Instantaneous velocity",
        "B": "Instantaneous acceleration",
        "C": "Total distance traveled",
        "D": "Average acceleration"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position-time graphs",
    concept="In an x-t graph, the vertical axis is position and the horizontal axis is time. The slope of the tangent is dx/dt, which is the instantaneous velocity.",
    given="Position-time graph.",
    formula="Slope = tan θ = dx/dt = v.",
    steps="1. Slope of a curve y vs x is dy/dx.\n2. For an x vs t graph, y = x and x = t.\n3. Slope = dx/dt.\n4. By definition, dx/dt is the instantaneous velocity.\n5. Therefore, the slope of the tangent at any point on an x-t graph gives the instantaneous velocity.",
    tip="Slope of x-t graph = Velocity. Slope of v-t graph = Acceleration. Area of v-t graph = Displacement.",
    why_wrong="Option B is the second derivative (curvature) or slope of v-t graph. Option C is path length. Option D is Δv/Δt."
))

# Q169 (Easy)
qs.append(make_motion_q(
    num=169,
    question="A horizontal straight line parallel to the time axis on a position-time graph represents an object that is:",
    options={
        "A": "At rest",
        "B": "Moving with uniform velocity",
        "C": "Moving with constant acceleration",
        "D": "Moving with increasing speed"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position-time graphs",
    concept="A horizontal line has zero slope: dx/dt = 0, meaning position does not change with time, so the object is at rest.",
    given="x-t graph is a horizontal line (x = constant).",
    formula="Slope = dx/dt = 0 => v = 0.",
    steps="1. The graph is a line parallel to the time axis, so x(t) = constant.\n2. Slope = dx/dt = 0.\n3. Since velocity is zero, the position coordinate remains unchanged as time elapses.\n4. Therefore, the object is at rest.",
    tip="Horizontal line on x-t graph: v = 0 (At rest). Horizontal line on v-t graph: a = 0 (Uniform motion).",
    why_wrong="Option B requires an inclined line (non-zero constant slope). Option C requires a parabola. Option D requires steepening curve."
))

# Q170 (Easy)
qs.append(make_motion_q(
    num=170,
    question="Two straight lines on an x-t graph make angles of 30° and 60° with the time axis. What is the ratio of their velocities v₁ : v₂?",
    options={
        "A": "1 : 3",
        "B": "1 : √3",
        "C": "√3 : 1",
        "D": "3 : 1"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position-time graphs",
    concept="Velocity equals the tangent of the angle made by the straight-line x-t graph with the time axis: v = tan θ.",
    given="θ₁ = 30°, θ₂ = 60° with the time axis.",
    formula="v = tan θ => v₁ / v₂ = tan θ₁ / tan θ₂.",
    steps="1. For the first line: v₁ = tan 30° = 1 / √3.\n2. For the second line: v₂ = tan 60° = √3.\n3. Take the ratio:\n   v₁ / v₂ = (1 / √3) / (√3) = 1 / (√3 * √3) = 1 / 3.\n4. Therefore, the ratio of their velocities is 1 : 3.",
    tip="Classic NEET question: tan 30° / tan 60° = (1/√3) / √3 = 1/3.",
    why_wrong="Option B is 1 : √3 (takes tan 30° directly). Option C and D invert the ratio."
))

# Q171 (Easy)
qs.append(make_motion_q(
    num=171,
    question="Can a position-time graph be a straight line perpendicular to the time axis?",
    options={
        "A": "No, because that would imply infinite velocity and multiple positions at a single instant of time.",
        "B": "Yes, it represents an object moving at the speed of light.",
        "C": "Yes, it represents an object with infinite acceleration.",
        "D": "Yes, it represents an object at the origin."
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position-time graphs",
    concept="A vertical line has slope tan 90° = ∞ (infinite velocity) and violates the single-valued nature of physical time (an object cannot be in infinitely many places at the exact same instant).",
    given="Vertical line on x-t graph.",
    formula="Slope = tan 90° = ∞ => v = ∞ (physically impossible).",
    steps="1. A line perpendicular to the time axis corresponds to a single time t with an infinite range of position values x.\n2. In classical and relativistic physics, a particle can only occupy one unique position at any given instant.\n3. Furthermore, the slope of such a line would be tan(90°) = ∞, implying infinite speed.\n4. Therefore, such a graph is physically impossible.",
    tip="A real physical graph can never be vertical (infinite speed) and can never double back on the time axis (time only flows forward).",
    why_wrong="Options B, C, and D are physically impossible in kinematics."
))

# Q172 (Easy)
qs.append(make_motion_q(
    num=172,
    question="If a position-time graph is a parabola opening upwards (convex downwards), the motion is:",
    options={
        "A": "Uniformly accelerated with positive acceleration",
        "B": "Uniformly retarded with negative acceleration",
        "C": "Uniform motion with zero acceleration",
        "D": "At rest"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position-time graphs",
    concept="Parabola opening upwards has positive second derivative: d²x/dt² = a > 0, which means positive acceleration.",
    given="x-t graph is a parabola opening upwards (concave up).",
    formula="x(t) ∝ +t² => a = d²x/dt² > 0.",
    steps="1. A parabola opening upwards has the equation x(t) = (1/2) a t² with a > 0.\n2. As time increases, the slope dx/dt increases continuously (becomes steeper and steeper).\n3. Since slope is velocity, velocity is increasing with time.\n4. Rate of change of velocity is acceleration: a = dv/dt > 0.\n5. Therefore, the motion has constant positive acceleration.",
    tip="Smiling curve (concave up) = positive acceleration (a > 0). Frowning curve (concave down) = negative acceleration (a < 0).",
    why_wrong="Option B corresponds to a parabola opening downwards (frowning curve). Option C is a straight line. Option D is a horizontal line."
))

# Q173 (Medium)
qs.append(make_motion_q(
    num=173,
    question="The position-time graph of a moving particle is a curve whose slope decreases continuously with time until it becomes zero. What does this indicate about the particle's motion?",
    options={
        "A": "The particle is slowing down (retarding) and eventually comes to rest.",
        "B": "The particle is speeding up and reaches maximum speed.",
        "C": "The particle is moving with uniform velocity.",
        "D": "The particle is moving backwards with increasing speed."
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="Slope of x-t graph is velocity. A decreasing slope means velocity is decreasing (retardation). When slope becomes zero, velocity is zero (at rest).",
    given="Slope dx/dt decreases to 0 as time increases.",
    formula="v = dx/dt; dv/dt < 0; v_final = 0.",
    steps="1. The slope of the tangent to an x-t graph at any point gives the instantaneous velocity v.\n2. A decreasing slope means the velocity v is decreasing with time (dv/dt < 0).\n3. This represents retardation (deceleration).\n4. When the slope becomes zero (tangent is horizontal), instantaneous velocity is zero.\n5. Therefore, the particle is slowing down and eventually comes to rest.",
    tip="Always translate slope behavior into velocity: Slope decreasing -> Velocity decreasing -> Retardation. Slope = 0 -> Rest.",
    why_wrong="Option B would require slope to increase. Option C requires constant slope. Option D would require negative slope."
))

# Q174 (Medium)
qs.append(make_motion_q(
    num=174,
    question="On an x-t graph, two particles A and B start from the same position at t = 0. Curve A is a straight line of constant slope, while curve B is a parabola opening upwards that starts with zero slope and intersects line A at time t = T. At time t = T:",
    options={
        "A": "Particle B has twice the velocity of particle A",
        "B": "Particle B has the same velocity as particle A",
        "C": "Particle B has half the velocity of particle A",
        "D": "Particle B has four times the velocity of particle A"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="Particle A moves with uniform velocity v_A: x_A = v_A t. Particle B moves with uniform acceleration a from rest: x_B = (1/2) a t². At intersection, x_A(T) = x_B(T), so v_B(T) = 2 v_A.",
    given="x_A(t) = v_A t; x_B(t) = (1/2) a t²; at t = T, x_A(T) = x_B(T).",
    formula="v_A T = (1/2) a T² => a T = 2 v_A; v_B(T) = a T = 2 v_A.",
    steps="1. Particle A has constant velocity v_A, so its position is x_A(t) = v_A t.\n2. Particle B starts from rest with constant acceleration a, so x_B(t) = (1/2) a t².\n3. At the point of intersection t = T:\n   v_A T = (1/2) a T².\n4. Cancel T (since T > 0):\n   v_A = (1/2) a T => a T = 2 v_A.\n5. The velocity of particle B at time T is:\n   v_B(T) = a T.\n6. Since a T = 2 v_A:\n   v_B(T) = 2 v_A.\n7. Therefore, particle B is moving at twice the velocity of particle A at the moment they intersect!",
    tip="Geometric insight: At the intersection of a line from origin and a parabola from origin, the slope of the parabola is exactly DOUBLE the slope of the line!",
    why_wrong="Option B assumes equal velocities (they have equal positions, NOT equal slopes!). Options C and D are incorrect multiples."
))

# Q175 (Medium)
qs.append(make_motion_q(
    num=175,
    question="The position-time graph of a particle is given by x(t) = 4t - t². At what time is the slope of the graph zero, and what is the physical meaning of this point?",
    options={
        "A": "t = 2 s; the particle momentarily stops and reverses its direction of motion",
        "B": "t = 4 s; the particle crosses the origin",
        "C": "t = 2 s; the particle has maximum acceleration",
        "D": "t = 0 s; the particle starts from rest"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="The slope of the x-t graph is the velocity v = dx/dt. A zero slope corresponds to a peak (turning point) where v = 0 and direction of motion reverses.",
    given="x(t) = 4t - t².",
    formula="Slope = dx/dt = 4 - 2t = 0 => t = 2 s.",
    steps="1. Find the slope of the tangent:\n   Slope = dx/dt = 4 - 2t.\n2. Set slope equal to zero:\n   4 - 2t = 0 => 2t = 4 => t = 2 s.\n3. At t = 2 s, the tangent to the curve is horizontal (slope = 0), meaning instantaneous velocity is zero.\n4. Before t = 2 s, slope is positive (moving forward). After t = 2 s, slope is negative (moving backward).\n5. Therefore, at t = 2 s the particle momentarily stops at its maximum displacement (x = 4 m) and reverses its direction.",
    tip="Zero slope on an x-t graph always marks a turning point (crest or trough of the curve).",
    why_wrong="Option B is when x = 0 (t = 4 s, crossing origin). Option C is incorrect because acceleration is constant (-2 m/s²). Option D is false because initial velocity is 4 m/s."
))

# Q176 (Medium)
qs.append(make_motion_q(
    num=176,
    question="An object's x-t graph consists of two straight segments: from t = 0 to 4 s, it goes from x = 0 to 20 m; from t = 4 to 10 s, it goes from x = 20 m to 20 m. What are the velocities in these two intervals?",
    options={
        "A": "5 m/s and 0 m/s",
        "B": "5 m/s and 2 m/s",
        "C": "4 m/s and 0 m/s",
        "D": "20 m/s and 0 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position-time graphs",
    concept="Slope of each straight segment gives the velocity during that interval: v = Δx / Δt.",
    given="Segment 1: Δx = 20 m, Δt = 4 s. Segment 2: Δx = 0 m, Δt = 6 s.",
    formula="v₁ = Δx₁ / Δt₁; v₂ = Δx₂ / Δt₂.",
    steps="1. For the first segment (0 to 4 s):\n   v₁ = (20 - 0) / (4 - 0) = 20 / 4 = 5 m/s.\n2. For the second segment (4 to 10 s):\n   v₂ = (20 - 20) / (10 - 4) = 0 / 6 = 0 m/s (object is stationary).\n3. Therefore, the velocities are 5 m/s and 0 m/s.",
    tip="Segment with slope = moving; flat segment = resting.",
    why_wrong="Option B gives non-zero velocity for the flat section. Option C and D use wrong divisions."
))

# Q177 (Medium)
qs.append(make_motion_q(
    num=177,
    question="Which of the following features on a position-time graph indicates that acceleration is negative?",
    options={
        "A": "The graph is concave downward (frowning curve)",
        "B": "The graph has a positive slope",
        "C": "The graph is a straight line inclined at 45°",
        "D": "The graph is concave upward (smiling curve)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="Curvature of x-t graph corresponds to the second derivative d²x/dt² = a. Concave downward means d²x/dt² < 0 (negative acceleration).",
    given="Criterion for negative acceleration on x-t graph.",
    formula="a = d²x/dt² < 0 <=> Concave downward (frowning curve).",
    steps="1. Acceleration is the rate of change of slope: a = d(slope)/dt = d²x/dt².\n2. If acceleration is negative (a < 0), the slope decreases as time progresses.\n3. A curve whose slope decreases from left to right is concave downward (frowning shape).\n4. Conversely, a curve whose slope increases is concave upward (a > 0).\n5. Therefore, concave downward indicates negative acceleration.",
    tip="Memory trick: 'Cup holds water' (concave up) -> Positive (+). 'Cup spills water' (concave down) -> Negative (-).",
    why_wrong="Option B only means velocity is positive. Option C means acceleration is zero. Option D means positive acceleration."
))

# Q178 (Medium)
qs.append(make_motion_q(
    num=178,
    question="The x-t graph of a particle is shown to be a circle of radius R. Why is such a graph physically impossible for a real particle?",
    options={
        "A": "It gives two distinct positions at the same instant of time, and has infinite slopes at the extremities.",
        "B": "A particle cannot move in a circle.",
        "C": "The radius R would have mixed units of meters and seconds.",
        "D": "Both A and C are correct physical and dimensional reasons."
    },
    correct_opt="D",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="An x-t graph cannot be a circle because: 1) time cannot have multiple position values (fails vertical line test), 2) vertical tangents imply infinite velocity, and 3) the x and t axes have different units (meters vs seconds), so a 'circle' has no well-defined metric.",
    given="A closed circular curve in the x-t plane.",
    formula="x² + t² = R² fails the function definition x(t).",
    steps="1. A closed circle fails the vertical line test: for a given time t, there are two different position values x. A single particle cannot be in two places at once!\n2. At the left and right extremities, the tangent is vertical, implying infinite velocity.\n3. The x-axis is in meters and the t-axis is in seconds, so an equation like x² + t² = R² is dimensionally inconsistent unless multiplied by dimensional constants.\n4. Therefore, both A and C are valid reasons why an x-t graph can never be a circle.",
    tip="Remember: In an x-t graph, a particle cannot move backwards in time, and can never have two positions at one instant.",
    why_wrong="Options A and C are each partially correct, but Option D correctly encompasses both."
))

# Q179 (Medium)
qs.append(make_motion_q(
    num=179,
    question="The position-time graph of a ball thrown vertically upwards from the ground and caught again upon return (neglecting air resistance) is best represented by:",
    options={
        "A": "An inverted parabola opening downwards with apex at maximum height",
        "B": "A parabola opening upwards with vertex at the ground",
        "C": "Two straight lines forming a triangle",
        "D": "A semicircle"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="For vertical motion under gravity, y(t) = u t - (1/2) g t². This is a quadratic equation with a negative t² coefficient, representing an inverted parabola opening downwards.",
    given="Vertical motion under gravity: y(t) = u t - (1/2) g t².",
    formula="y(t) = - (g/2) t² + u t (quadratic with negative leading coefficient).",
    steps="1. Equation of vertical motion: y(t) = u t - (1/2) g t².\n2. The coefficient of t² is -g/2 < 0.\n3. In coordinate geometry, a quadratic y = -A t² + B t represents a parabola opening downwards (inverted parabola).\n4. The apex (vertex) occurs at t = u/g, where y_max = u² / (2g).\n5. The ball returns to ground (y = 0) at t = 2u/g.\n6. Therefore, the graph is an inverted parabola opening downwards.",
    tip="Free fall / gravity problems ALWAYS produce parabolic x-t curves with downward curvature (a = -g).",
    why_wrong="Option B has positive acceleration (+g). Option C assumes constant velocity. Option D is not a quadratic."
))

# Q180 (Medium)
qs.append(make_motion_q(
    num=180,
    question="On an x-t graph, the secant line joining two points (t₁, x₁) and (t₂, x₂) has a slope equal to:",
    options={
        "A": "The average velocity over the time interval [t₁, t₂]",
        "B": "The instantaneous velocity at t = (t₁ + t₂)/2",
        "C": "The average acceleration over the interval",
        "D": "The instantaneous speed at t₁"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="Slope of secant line = Δx / Δt = [x(t₂) - x(t₁)] / (t₂ - t₁), which by definition is the average velocity over the interval.",
    given="Secant line between (t₁, x₁) and (t₂, x₂).",
    formula="Slope of secant = (x₂ - x₁) / (t₂ - t₁) = Δx / Δt = v_avg.",
    steps="1. By coordinate geometry, the slope of the straight line joining two points (t₁, x₁) and (t₂, x₂) is:\n   m = (x₂ - x₁) / (t₂ - t₁) = Δx / Δt.\n2. In physics, Δx / Δt is the definition of average velocity over the interval [t₁, t₂].\n3. (As t₂ approaches t₁, the secant line becomes the tangent line, whose slope is instantaneous velocity).\n4. Therefore, the slope of the secant line represents the average velocity.",
    tip="Secant slope = Average velocity. Tangent slope = Instantaneous velocity.",
    why_wrong="Option B is only true for uniform acceleration (special case), whereas Option A is universally true. Option C is Δv/Δt. Option D is tangent at t₁."
))

# Q181 (Medium)
qs.append(make_motion_q(
    num=181,
    question="A particle's x-t graph has positive slope that is increasing with time. This implies that:",
    options={
        "A": "Velocity is positive and acceleration is positive (speeding up)",
        "B": "Velocity is positive and acceleration is negative (slowing down)",
        "C": "Velocity is negative and acceleration is positive",
        "D": "Velocity is constant"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="Positive slope => v > 0. Increasing slope => dv/dt = a > 0. Both have the same sign, so the particle is speeding up in the positive direction.",
    given="Slope > 0 and d(slope)/dt > 0.",
    formula="v = slope > 0; a = d(slope)/dt > 0.",
    steps="1. Slope of x-t graph represents velocity: Slope > 0 => v > 0.\n2. The slope is increasing with time: d(slope)/dt > 0 => dv/dt = a > 0.\n3. Since both velocity and acceleration are positive, they act in the same direction.\n4. Therefore, the particle is moving in the positive direction and speeding up.",
    tip="Positive slope getting steeper = moving forward and accelerating!",
    why_wrong="Option B would have slope decreasing (flattening curve). Option C would have negative slope. Option D would have constant slope."
))

# Q182 (Medium)
qs.append(make_motion_q(
    num=182,
    question="A particle's x-t graph has negative slope that is becoming steeper (more negative) with time. This indicates that the particle is:",
    options={
        "A": "Moving in the negative direction with increasing speed",
        "B": "Moving in the negative direction with decreasing speed",
        "C": "Moving in the positive direction with increasing speed",
        "D": "At rest"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Position-time graphs",
    concept="Negative slope => moving in -x direction (v < 0). Steeper slope => magnitude of slope (|v|) is increasing => speed is increasing.",
    given="Slope < 0, |slope| increasing with time.",
    formula="v < 0; |v| increasing => speeding up in the negative direction.",
    steps="1. Negative slope means velocity is directed along the negative axis: v < 0.\n2. The curve is becoming steeper, which means the absolute value of the slope (|dx/dt|) is growing.\n3. Absolute value of velocity is speed.\n4. Since speed is increasing in the negative direction, acceleration is also negative (a < 0).\n5. Therefore, the particle is moving in the negative direction with increasing speed.",
    tip="Steeper curve ALWAYS means higher speed, regardless of whether slope is positive or negative!",
    why_wrong="Option B would have the curve flattening out towards horizontal. Options C and D contradict negative slope."
))

# Q183 (Hard)
qs.append(make_motion_q(
    num=183,
    question="The x-t graphs of two cars A and B are shown. Car A starts from x = 0 at t = 0 with constant speed v_A = 15 m/s. Car B starts from x = 100 m at t = 0 and moves in the negative direction with constant speed v_B = 10 m/s. At what time and position do their x-t graphs intersect?",
    options={
        "A": "t = 4 s, x = 60 m",
        "B": "t = 5 s, x = 75 m",
        "C": "t = 4 s, x = 40 m",
        "D": "t = 10 s, x = 150 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position-time graphs",
    concept="Intersection of two x-t graphs corresponds to the meeting point where x_A(t) = x_B(t).",
    given="x_A(t) = 15t; x_B(t) = 100 - 10t.",
    formula="x_A(t) = x_B(t) => 15t = 100 - 10t.",
    steps="1. Write position equations for both cars:\n   Car A: x_A(t) = 0 + 15t = 15t.\n   Car B: x_B(t) = 100 - 10t.\n2. Equate the two positions to find the point of intersection:\n   15t = 100 - 10t\n   25t = 100\n   t = 100 / 25 = 4 seconds.\n3. Find the position of intersection:\n   x = 15 * 4 = 60 m.\n   (Check with Car B: 100 - 10(4) = 100 - 40 = 60 m. Perfect!).\n4. Therefore, the graphs intersect at t = 4 s and x = 60 m.",
    tip="Relative speed approach: Closing speed = 15 + 10 = 25 m/s. Time = 100 / 25 = 4 s. Position = 15 * 4 = 60 m.",
    why_wrong="Option B uses closing speed 20 m/s. Option C has wrong position. Option D assumes same direction."
))

# Q184 (Hard)
qs.append(make_motion_q(
    num=184,
    question="The position-time graph of a particle is an ellipse given by x² / a² + t² / b² = 1 for t ≥ 0. At what time t is the velocity of the particle equal to -a / b?",
    options={
        "A": "b / √2",
        "B": "b / 2",
        "C": "b √3 / 2",
        "D": "b"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position-time graphs",
    concept="Differentiate the ellipse equation implicitly with respect to t to find dx/dt = v, then set v = -a/b.",
    given="x² / a² + t² / b² = 1, condition v = dx/dt = -a / b.",
    formula="(2x / a²) (dx/dt) + 2t / b² = 0 => dx/dt = -(a² t) / (b² x).",
    steps="1. Differentiate implicitly with respect to t:\n   (2x / a²) (dx/dt) + 2t / b² = 0\n   (x / a²) v = -t / b²\n   v = -(a² t) / (b² x).\n2. Set velocity equal to -a / b:\n   -(a² t) / (b² x) = -a / b\n   (a t) / (b x) = 1 => x = (a / b) t.\n3. Substitute x = (a / b) t back into the ellipse equation:\n   [ (a / b) t ]² / a² + t² / b² = 1\n   (t² / b²) + (t² / b²) = 1\n   2 (t² / b²) = 1\n   t² = b² / 2\n   t = b / √2.\n4. Therefore, the velocity equals -a/b at t = b / √2.",
    tip="Implicit differentiation makes geometric graph problems straightforward: v = -(a²t)/(b²x).",
    why_wrong="Option B gives t = b/2. Option C gives t = b√3/2. Option D gives t = b (where slope is vertical/infinite)."
))

# Q185 (Hard)
qs.append(make_motion_q(
    num=185,
    question="A body moves along a straight line such that its x-t graph is a curve with an inflection point at t = t₀ (where d²x/dt² = 0, changing from concave down to concave up). At t = t₀, which of the following is true?",
    options={
        "A": "Velocity has a local extremum (minimum), and acceleration is zero.",
        "B": "Velocity is zero, and acceleration is maximum.",
        "C": "Position is zero, and speed is maximum.",
        "D": "The body momentarily reverses its direction of motion."
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position-time graphs",
    concept="An inflection point on an x-t graph is where d²x/dt² = 0. Since d²x/dt² = dv/dt = a, zero acceleration means velocity has a local extremum.",
    given="Inflection point on x-t curve at t = t₀.",
    formula="d²x/dt² = a = 0 => dv/dt = 0 (velocity is stationary/extremized).",
    steps="1. At an inflection point of a curve y = f(x), the second derivative is zero: f''(x) = 0.\n2. For an x-t curve, the second derivative is acceleration: d²x/dt² = a = 0.\n3. Since a = dv/dt, dv/dt = 0 means velocity has a local extremum (maximum or minimum).\n4. Because the curve changes from concave down (a < 0) to concave up (a > 0), the slope (velocity) was decreasing and now begins increasing.\n5. Therefore, velocity reaches a local minimum at t = t₀, and acceleration is zero.\n6. Hence, Option A is correct.",
    tip="Inflection point on x-t graph <=> a = 0 <=> Extremum of velocity. Peak/trough on x-t graph <=> v = 0 <=> Turning point of motion.",
    why_wrong="Option B confuses inflection point with peak of curve. Option C is unrelated to origin. Option D requires v = 0, not a = 0."
))

# Q186 (Hard)
qs.append(make_motion_q(
    num=186,
    question="The position-time graph of a particle is given by x = 2t³ - 15t² + 36t (in meters). Over the interval t ∈ [0, 5] s, at how many points is the tangent to the graph parallel to the time axis?",
    options={
        "A": "2 points",
        "B": "1 point",
        "C": "3 points",
        "D": "0 points"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position-time graphs",
    concept="Tangent parallel to time axis means slope is zero: dx/dt = v = 0.",
    given="x(t) = 2t³ - 15t² + 36t, interval [0, 5] s.",
    formula="Slope = dx/dt = 6t² - 30t + 36 = 0.",
    steps="1. Differentiate position with respect to time:\n   Slope = dx/dt = 6t² - 30t + 36.\n2. Set slope equal to zero (horizontal tangent):\n   6(t² - 5t + 6) = 0\n   6(t - 2)(t - 3) = 0.\n3. Roots are t = 2 s and t = 3 s.\n4. Both values lie within the interval [0, 5] s.\n5. Therefore, the tangent is parallel to the time axis at exactly 2 points (t = 2 s and t = 3 s).",
    tip="Horizontal tangent <=> Slope = 0 <=> v = 0. Factor the quadratic derivative: 6(t - 2)(t - 3) = 0 => 2 roots.",
    why_wrong="Option B finds only one root. Option C assumes degree 3 has 3 critical points. Option D claims no stationary points."
))

# Q187 (Hard)
qs.append(make_motion_q(
    num=187,
    question="A ball is dropped from height h onto a hard horizontal floor. It bounces elastically repeatedly between the floor and height h. What is the nature of the height-time (y-t) graph?",
    options={
        "A": "A series of inverted parabolas meeting at sharp cusps (points of impact) on the time axis",
        "B": "A continuous smooth sine wave",
        "C": "A series of triangles",
        "D": "A series of semicircles"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position-time graphs",
    concept="Between bounces, motion is under gravity: y(t) = - (1/2) g t² + ..., which is an inverted parabola. At the floor, velocity instantaneously reverses sign from -v to +v, creating a sharp cusp (discontinuous derivative) on the time axis.",
    given="Elastic bouncing ball from height h.",
    formula="y(t) is piecewise parabolic with sharp cusps at y = 0.",
    steps="1. Between bounces, the ball moves under constant gravitational acceleration a = -g.\n2. The position-time equation is a quadratic with negative t² term: an inverted parabola.\n3. When the ball strikes the floor (y = 0), an ideal elastic bounce instantly reverses the velocity from -√(2gh) to +√(2gh).\n4. Because velocity (the slope of the y-t curve) changes sign instantaneously, the tangent is discontinuous at y = 0.\n5. This creates sharp pointed cusps (V-shaped rebounds) touching the time axis at intervals of 2√(2h/g).\n6. Therefore, the graph is a series of inverted parabolas with sharp cusps on the time axis.",
    tip="Bouncing ball graph: smooth curves in the air (parabolas), sharp pointed cusps at the floor (instant velocity reversal).",
    why_wrong="Option B requires smooth derivative everywhere (no instantaneous velocity change). Option C assumes constant speed. Option D is not parabolic."
))

# Q188 (Hard)
qs.append(make_motion_q(
    num=188,
    question="In the bouncing ball scenario of Q187, what is the time period T between two successive bounces on the floor from height h?",
    options={
        "A": "2 √(2h / g)",
        "B": "√(2h / g)",
        "C": "4 √(2h / g)",
        "D": "√(h / 2g)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Position-time graphs",
    concept="Time between bounces is the time to rise to height h plus the time to fall back from height h: T = t_rise + t_fall = 2 * √(2h/g).",
    given="Bounce height h, acceleration g.",
    formula="t_fall = √(2h / g); T = 2 t_fall = 2 √(2h / g).",
    steps="1. The ball rebounds from the floor with speed v = √(2gh).\n2. Time taken to reach maximum height h:\n   t_rise = v / g = √(2gh) / g = √(2h / g).\n3. Time taken to fall back from height h to the floor:\n   t_fall = √(2h / g).\n4. Total time between successive bounces:\n   T = t_rise + t_fall = √(2h / g) + √(2h / g) = 2 √(2h / g).\n5. Hence, the period of the bouncing motion is 2 √(2h / g).",
    tip="Time of flight for bounce to height h is 2 * √(2h/g).",
    why_wrong="Option B is only the one-way fall time. Option C is four times. Option D has 2 in denominator."
))

print(f"Topic 9 generated: Q168 to Q188 (21 questions)")

with open('scripts/part2_topic9.json', 'w') as f:
    json.dump(qs, f, indent=2)
