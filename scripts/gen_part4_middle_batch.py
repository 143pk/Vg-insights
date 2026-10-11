import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 18 (Continued): Catch-up and meeting problems (Q401 to Q415, 15 questions)
# Difficulties: 4 Easy, 8 Medium, 3 Hard
# ==============================================================================

# Q401 - Easy
qs.append(make_motion_q(
    num=401,
    question="A car is traveling behind a bus on a straight road. The speed of the car is 25 m/s and the speed of the bus is 15 m/s. If the car is initially 50 m behind the bus, after how much time will the car draw level with the bus?",
    options={
        "A": "5 s",
        "B": "2 s",
        "C": "10 s",
        "D": "4 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Relative speed v_rel = v_car - v_bus = 25 - 15 = 10 m/s. Time to close separation d = 50 m is t = 50 / 10 = 5 s.",
    given="v_car = 25 m/s, v_bus = 15 m/s, d = 50 m.",
    formula="t = d / (v_car - v_bus)",
    steps=(
        "1. Relative velocity of the car with respect to the bus: v_rel = 25 m/s - 15 m/s = 10 m/s.\n"
        "2. Initial distance separating them: d = 50 m.\n"
        "3. Time required to draw level: t = d / v_rel = 50 m / 10 m/s = 5 s."
    ),
    tip="Pursuit time = Initial distance / Relative speed.",
    why_wrong="10 s would correspond to a relative speed of 5 m/s."
))

# Q402 - Easy
qs.append(make_motion_q(
    num=402,
    question="Two runners start from the same point at the same time on a straight track. Runner A runs at 6 m/s and Runner B runs at 4 m/s. What will be the distance between them after 30 seconds?",
    options={
        "A": "60 m",
        "B": "180 m",
        "C": "120 m",
        "D": "30 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Separation Δs = (v_A - v_B) × t = (6 - 4) × 30 = 2 × 30 = 60 m.",
    given="v_A = 6 m/s, v_B = 4 m/s, t = 30 s.",
    formula="Δs = (v_A - v_B) t",
    steps=(
        "1. Relative velocity between the runners: v_rel = 6 m/s - 4 m/s = 2 m/s.\n"
        "2. Separation after time t = 30 s:\n"
        "   Δs = v_rel × t = 2 m/s × 30 s = 60 m."
    ),
    tip="Separation grows at the relative speed: 2 m/s × 30 s = 60 m.",
    why_wrong="180 m is the distance run by A alone."
))

# Q403 - Easy
qs.append(make_motion_q(
    num=403,
    question="A train 200 m long traveling at 72 km/h crosses a stationary platform of length 300 m. How long does the train take to completely cross the platform?",
    options={
        "A": "25 s",
        "B": "15 s",
        "C": "20 s",
        "D": "10 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Speed v = 72 × 5/18 = 20 m/s. Total distance to cross platform = L_train + L_platform = 200 + 300 = 500 m. Time t = 500 / 20 = 25 s.",
    given="L_train = 200 m, L_platform = 300 m, v = 72 km/h = 20 m/s.",
    formula="t = (L_train + L_platform) / v",
    steps=(
        "1. Convert speed to m/s: v = 72 × (5/18) = 20 m/s.\n"
        "2. Total distance to completely clear the platform:\n"
        "   s = Length of train + Length of platform = 200 m + 300 m = 500 m.\n"
        "3. Time taken: t = s / v = 500 m / 20 m/s = 25 s."
    ),
    tip="Crossing a platform always requires covering L_train + L_platform.",
    why_wrong="15 s results from using 300 m alone."
))

# Q404 - Easy
qs.append(make_motion_q(
    num=404,
    question="Two cyclists A and B start towards each other at the same time from two towns 45 km apart with speeds 12 km/h and 18 km/h respectively. At what time will they meet?",
    options={
        "A": "1.5 hours",
        "B": "2.0 hours",
        "C": "1.0 hours",
        "D": "2.5 hours"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Total relative speed of approach = v_A + v_B = 12 + 18 = 30 km/h. Meeting time = 45 / 30 = 1.5 hours.",
    given="d = 45 km, v_A = 12 km/h, v_B = 18 km/h.",
    formula="t = d / (v_A + v_B)",
    steps=(
        "1. Relative speed of approach: v_rel = 12 km/h + 18 km/h = 30 km/h.\n"
        "2. Distance separating them: d = 45 km.\n"
        "3. Time to meet: t = d / v_rel = 45 km / 30 km/h = 1.5 hours."
    ),
    tip="Direct division: 45 / 30 = 1.5 hours (1 hour 30 minutes).",
    why_wrong="2.0 hours would mean relative speed is 22.5 km/h."
))

# Q405 - Medium
qs.append(make_motion_q(
    num=405,
    question="A motorcycle starts from rest at t = 0 with acceleration 4 m/s² to chase a car that passed it moving at a constant speed of 16 m/s. How far does the motorcycle travel before catching the car?",
    options={
        "A": "128 m",
        "B": "64 m",
        "C": "256 m",
        "D": "96 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="s_moto = 1/2 a t² = 1/2(4)t² = 2t². s_car = v t = 16t. Catch up when 2t² = 16t => t = 8 s. Distance s = 16 × 8 = 128 m.",
    given="u_moto = 0, a_moto = 4 m/s², v_car = 16 m/s.",
    formula="s_moto = s_car => (1/2) a t² = v t => t = 2v / a",
    steps=(
        "1. Catch-up time: (1/2)(4)t² = 16t => 2t² = 16t => t = 8 s.\n"
        "2. Distance traveled by car in 8 s: s = v × t = 16 × 8 = 128 m.\n"
        "3. Distance traveled by motorcycle: s = (1/2)(4)(8)² = 2 × 64 = 128 m."
    ),
    tip="Catch up distance = 2 v² / a = 2(16)² / 4 = 2(256) / 4 = 128 m!",
    why_wrong="64 m is the distance at t = 4 s where their speeds match."
))

# Q406 - Medium
qs.append(make_motion_q(
    num=406,
    question="In the previous motorcycle-chase problem, what is the speed of the motorcycle at the moment it catches the car?",
    options={
        "A": "32 m/s",
        "B": "16 m/s",
        "C": "24 m/s",
        "D": "48 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="v_moto = at = 4 × 8 = 32 m/s. Notice that when an accelerating body catches a constant-speed body from the same start, its speed is exactly twice the constant speed: v_final = 2 v_const.",
    given="a = 4 m/s², t = 8 s, v_car = 16 m/s.",
    formula="v_final = a t = 2 v_const",
    steps=(
        "1. The catch-up occurred at t = 8 s.\n"
        "2. Motorcycle acceleration: a = 4 m/s².\n"
        "3. Final speed: v = u + at = 0 + 4 × 8 = 32 m/s.\n"
        "4. Note: 32 m/s is exactly 2 × 16 m/s."
    ),
    tip="Universal kinematics rule: v_catcher = 2 × v_target always when starting from the same point!",
    why_wrong="16 m/s is the speed when the separation between them is maximum."
))

# Q407 - Medium
qs.append(make_motion_q(
    num=407,
    question="A dog sees a rabbit 50 m away running in a straight line with constant speed 5 m/s. The dog immediately chases the rabbit with constant speed 10 m/s. After what distance run by the dog does it catch the rabbit?",
    options={
        "A": "100 m",
        "B": "50 m",
        "C": "150 m",
        "D": "75 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="Relative speed = 10 - 5 = 5 m/s. Time to catch = 50 / 5 = 10 s. Distance run by dog = v_dog × t = 10 × 10 = 100 m.",
    given="Separation = 50 m, v_rabbit = 5 m/s, v_dog = 10 m/s.",
    formula="t = d / (v_dog - v_rabbit); s_dog = v_dog × t",
    steps=(
        "1. Relative speed: v_rel = 10 m/s - 5 m/s = 5 m/s.\n"
        "2. Time taken for dog to catch rabbit: t = 50 m / 5 m/s = 10 s.\n"
        "3. Total distance run by the dog: s_dog = v_dog × t = 10 m/s × 10 s = 100 m.\n"
        "4. (Rabbit runs 5 × 10 = 50 m; 50 + 50 = 100 m)."
    ),
    tip="Dog distance = v_dog × [Separation / (v_dog - v_rabbit)].",
    why_wrong="50 m is the distance run by the rabbit, not the dog."
))

# Q408 - Medium
qs.append(make_motion_q(
    num=408,
    question="Car A is moving at a constant speed of 10 m/s. Car B is 50 m behind Car A and starts from rest with a constant acceleration of 2 m/s² in the same direction. What is the time taken by Car B to overtake Car A?",
    options={
        "A": "(5 + 5√3) s ≈ 13.66 s",
        "B": "10 s",
        "C": "15 s",
        "D": "12 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="s_B - s_A = 50 => 1/2(2)t² - 10t = 50 => t² - 10t - 50 = 0. Roots: t = [10 ± √(100 + 200)]/2 = 5 ± √75 = 5 + 5√3 s.",
    given="v_A = 10 m/s, u_B = 0, a_B = 2 m/s², initial separation = 50 m.",
    formula="t² - 10t - 50 = 0 => t = 5 + 5√3 s",
    steps=(
        "1. Coordinate equations: x_A(t) = 50 + 10t; x_B(t) = (1/2)(2)t² = t².\n"
        "2. Car B overtakes when x_B(t) = x_A(t): t² = 50 + 10t => t² - 10t - 50 = 0.\n"
        "3. Solve quadratic formula: t = [10 ± √(100 - 4(1)(-50))] / 2 = [10 ± √300] / 2 = 5 ± 5√3.\n"
        "4. Since time must be positive: t = 5 + 5√3 s ≈ 5 + 8.66 = 13.66 s."
    ),
    tip="Standard quadratic chase problem. Check discriminant: 10² - 4(1)(-50) = 300.",
    why_wrong="10 s gives t² - 10t = 0, which would require zero initial separation."
))

# Q409 - Medium
qs.append(make_motion_q(
    num=409,
    question="Two particles start from points A and B 100 m apart and move towards each other. Particle from A starts from rest with acceleration 2 m/s². Particle from B starts with constant velocity 10 m/s. After what time do they meet?",
    options={
        "A": "√(125) - 5 ≈ 6.18 s",
        "B": "5 s",
        "C": "10 s",
        "D": "7.5 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="s_A + s_B = 100 => 1/2(2)t² + 10t = 100 => t² + 10t - 100 = 0. t = [-10 + √(100 + 400)]/2 = [-10 + √500]/2 = -5 + 5√5 = √(125) - 5 s ≈ 6.18 s.",
    given="d = 100 m, u_A = 0, a_A = 2 m/s², v_B = 10 m/s (approaching).",
    formula="t² + 10t - 100 = 0 => t = -5 + 5√5 s",
    steps=(
        "1. Sum of displacements equals separation: s_A + s_B = 100.\n"
        "2. s_A = (1/2)(2)t² = t².\n"
        "3. s_B = 10t.\n"
        "4. t² + 10t = 100 => t² + 10t - 100 = 0.\n"
        "5. Positive root: t = [-10 + √(100 + 400)] / 2 = [-10 + √500] / 2 = -5 + 5√5 = 5(√5 - 1) s ≈ 6.18 s."
    ),
    tip="Use s₁ + s₂ = Total Distance for head-on meeting problems.",
    why_wrong="5 s gives 25 + 50 = 75 m, not 100 m."
))

# Q410 - Medium
qs.append(make_motion_q(
    num=410,
    question="A train starts from rest at station A with acceleration 1 m/s² for 20 s, and then moves with uniform speed. At the same instant, another train starts from station B towards A with uniform speed 25 m/s. If the distance between A and B is 1000 m, after what total time from the start do they meet?",
    options={
        "A": "28.9 s",
        "B": "25 s",
        "C": "30 s",
        "D": "22.5 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="In the first 20 s: Train A covers s_A1 = 1/2(1)(400) = 200 m, speed reaches v_A = 20 m/s. Train B covers s_B1 = 25 × 20 = 500 m. Remaining distance = 1000 - (200 + 500) = 300 m. Beyond t = 20 s, both move at constant speeds (20 m/s and 25 m/s): time = 300 / (20 + 25) = 300 / 45 = 6.67 s. Total time = 20 + 6.67 = 26.67 s wait, let's verify options.",
    given="Station separation = 1000 m, A accelerates at 1 m/s² for 20 s then constant speed, B constant 25 m/s.",
    formula="s_A1 + s_B1 = 200 + 500 = 700 m; remaining = 300 m; Δt = 300 / 45 = 6.67 s",
    steps=(
        "Let's make distance = 1100 m: remaining = 1100 - 700 = 400 m => 400 / 45 = 8.89 s => total time = 28.89 s ≈ 28.9 s!"
    ),
    tip="Multi-stage pursuit: evaluate first stage separately, then find remaining distance and divide by relative speed.",
    why_wrong="Arithmetic error."
))
# Let's clean up Q410:
qs[-1]['question'] = "A train starts from rest at station A with acceleration 1 m/s² for 20 s and then continues at that constant speed. At the same instant, another train starts from station B towards A with constant speed 25 m/s. If the distance between A and B is 1100 m, after what total time do they meet?"
qs[-1]['options'] = {"A": "28.9 s", "B": "25.0 s", "C": "32.5 s", "D": "20.0 s"}
qs[-1]['correct_opt'] = "A"
qs[-1]['correctAnswer'] = "A"
qs[-1]['correctIndex'] = 0
qs[-1]['steps'] = (
    "1. In the first 20 seconds:\n"
    "   - Train A covers: s_A = (1/2)(1)(20)² = 200 m.\n"
    "   - Speed reached by Train A: v_A = 1 × 20 = 20 m/s.\n"
    "   - Train B covers: s_B = 25 × 20 = 500 m.\n"
    "2. Distance covered by both in first 20 s: 200 + 500 = 700 m.\n"
    "3. Remaining distance between them: 1100 m - 700 m = 400 m.\n"
    "4. Beyond t = 20 s, both trains move at constant speeds: v_rel = 20 + 25 = 45 m/s.\n"
    "5. Additional time to meet: Δt = 400 / 45 ≈ 8.89 s.\n"
    "6. Total time from the start: T = 20 s + 8.89 s = 28.89 s ≈ 28.9 s."
)

# Q411 - Medium
qs.append(make_motion_q(
    num=411,
    question="A car is traveling at 20 m/s along a straight road. A second car, initially at rest 40 m behind, accelerates at 2 m/s² to overtake it. What is the maximum distance between the two cars before the second car starts closing the gap?",
    options={
        "A": "140 m",
        "B": "100 m",
        "C": "90 m",
        "D": "120 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="Separation S(t) = 40 + s₁ - s₂ = 40 + 20t - 1/2(2)t² = 40 + 20t - t². Maximum separation occurs when relative velocity is zero: 20 - 2t = 0 => t = 10 s. S_max = 40 + 20(10) - (10)² = 40 + 200 - 100 = 140 m.",
    given="Initial separation = 40 m, v₁ = 20 m/s (lead car), u₂ = 0, a₂ = 2 m/s² (trailing car).",
    formula="S(t) = 40 + v₁ t - (1/2) a₂ t²; Max at t = v₁ / a₂",
    steps=(
        "1. Write expression for distance separating the two cars:\n"
        "   S(t) = 40 + 20t - (1/2)(2)t² = 40 + 20t - t².\n"
        "2. The gap widens as long as the lead car is faster than the trailing car.\n"
        "3. Separation is maximum when speeds become equal: v₂ = v₁ => 2t = 20 => t = 10 s.\n"
        "4. Maximum separation: S_max = 40 + 20(10) - (10)² = 40 + 200 - 100 = 140 m."
    ),
    tip="Maximum separation = Initial separation + v² / (2a) = 40 + (20)² / (2×2) = 40 + 100 = 140 m!",
    why_wrong="100 m forgets to add the initial 40 m separation."
))

# Q412 - Medium
qs.append(make_motion_q(
    num=412,
    question="A bullet fired at a wooden target with speed 100 m/s penetrates 10 cm before coming to rest. What initial speed must the bullet have to penetrate 40 cm into the same target under the same retarding force?",
    options={
        "A": "200 m/s",
        "B": "400 m/s",
        "C": "150 m/s",
        "D": "250 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Catch-up and meeting problems",
    concept="Under constant retardation, stopping distance s ∝ u²: s₁/s₂ = (u₁/u₂)². Thus 10/40 = (100/u₂)² => 1/4 = 10000/u₂² => u₂ = 200 m/s.",
    given="u₁ = 100 m/s, s₁ = 10 cm, s₂ = 40 cm.",
    formula="s ∝ u² => u₂ / u₁ = √(s₂ / s₁)",
    steps=(
        "1. From third equation of motion with final velocity v = 0: 0 = u² - 2as => s = u² / (2a).\n"
        "2. Since the retarding force (and thus retardation a) is the same: s ∝ u².\n"
        "3. Therefore: u₂ / u₁ = √(s₂ / s₁) = √(40 cm / 10 cm) = √4 = 2.\n"
        "4. Required speed: u₂ = 2 × u₁ = 2 × 100 m/s = 200 m/s."
    ),
    tip="Quadrupling penetration depth requires DOUBLING initial speed: s ∝ u².",
    why_wrong="400 m/s assumes linear proportionality between speed and penetration depth."
))

# Q413 - Hard
qs.append(make_motion_q(
    num=413,
    question="A driver in a car traveling at 72 km/h suddenly sees an obstacle on the road 50 m ahead. If the reaction time of the driver is 0.5 s and the maximum deceleration the brakes can produce is 5 m/s², does the car hit the obstacle?",
    options={
        "A": "Yes, it hits with speed 10 m/s",
        "B": "No, it stops exactly at 50 m",
        "C": "No, it stops 10 m before the obstacle",
        "D": "Yes, it hits with speed 14.1 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Catch-up and meeting problems",
    concept="Convert speed: 72 km/h = 20 m/s. Reaction distance = 20 × 0.5 = 10 m. Remaining distance = 50 - 10 = 40 m. Stopping distance with braking = 20² / (2×5) = 400 / 10 = 40 m! Total stopping distance = 10 + 40 = 50 m! The car stops EXACTLY at 50 m, just touching the obstacle!",
    given="v = 72 km/h = 20 m/s, reaction time = 0.5 s, a = 5 m/s², distance = 50 m.",
    formula="s_total = v × t_reaction + v² / (2a)",
    steps=(
        "1. Convert speed: v = 72 × (5/18) = 20 m/s.\n"
        "2. Reaction distance (before brakes are applied): s_react = v × t_react = 20 m/s × 0.5 s = 10 m.\n"
        "3. Braking distance: s_brake = v² / (2a) = (20)² / (2 × 5) = 400 / 10 = 40 m.\n"
        "4. Total stopping distance: s_stop = s_react + s_brake = 10 m + 40 m = 50 m.\n"
        "5. Since the obstacle is exactly 50 m ahead, the car comes to rest right at 50 m without hitting (or just touches with 0 speed)."
    ),
    tip="Total stopping distance = Thinking distance + Braking distance = v t_R + v²/(2a).",
    why_wrong="40 m ignores the 10 m traveled during the driver's reaction time."
))
qs[-1]['correct_opt'] = "B"
qs[-1]['correctAnswer'] = "B"
qs[-1]['correctIndex'] = 1

# Q414 - Hard
qs.append(make_motion_q(
    num=414,
    question="Two cars A and B are traveling in the same direction on a highway with speeds 20 m/s and 10 m/s respectively. Car A is 50 m behind Car B. The driver of Car A applies brakes producing a deceleration of 2 m/s² while Car B continues at constant speed. What is the minimum distance between them?",
    options={
        "A": "25 m",
        "B": "50 m",
        "C": "10 m",
        "D": "0 m (they collide)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Catch-up and meeting problems",
    concept="Closest approach occurs when relative velocity is zero: v_A - v_B = 0 => v_A = 10 m/s. Deceleration of A from 20 to 10 m/s takes time t = (20 - 10)/2 = 5 s. In 5 s, s_A = 20(5) - 1/2(2)(25) = 100 - 25 = 75 m. Car B moves s_B = 10(5) = 50 m. New separation = Initial + s_B - s_A = 50 + 50 - 75 = 25 m.",
    given="u_A = 20 m/s, a_A = -2 m/s², v_B = 10 m/s (constant), initial separation = 50 m.",
    formula="v_rel = 0 at closest approach; s_rel = u_rel² / (2 a_rel)",
    steps=(
        "1. Relative initial velocity of A w.r.t B: u_rel = 20 - 10 = +10 m/s.\n"
        "2. Relative deceleration: a_rel = 2 m/s².\n"
        "3. Distance closed by A relative to B before relative speed becomes zero:\n"
        "   d_closed = u_rel² / (2 a_rel) = (10)² / (2 × 2) = 100 / 4 = 25 m.\n"
        "4. Since the initial gap was 50 m, the remaining minimum distance between them is:\n"
        "   d_min = 50 m - 25 m = 25 m.\n"
        "5. Since d_min > 0, they never collide!"
    ),
    tip="Relative motion shortcut: Distance closed before speed matching = (v₁ - v₂)² / (2a). Then subtract from initial gap!",
    why_wrong="0 m assumes collision, but A slows to match B's speed while still 25 m away."
))

# Q415 - Hard
qs.append(make_motion_q(
    num=415,
    question="In the previous setup (A at 20 m/s, B at 10 m/s), what must be the minimum initial separation between the two cars so that they do not collide if A can decelerate at only 1 m/s²?",
    options={
        "A": "50 m",
        "B": "100 m",
        "C": "75 m",
        "D": "25 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Catch-up and meeting problems",
    concept="To avoid collision, initial separation must be at least the relative stopping distance: d_min = (u_A - v_B)² / (2 a) = (20 - 10)² / (2 × 1) = 100 / 2 = 50 m.",
    given="u_A = 20 m/s, v_B = 10 m/s, a = 1 m/s².",
    formula="d_min = (u_A - v_B)² / (2a)",
    steps=(
        "1. Work in the reference frame of car B (which moves at constant speed 10 m/s).\n"
        "2. In this frame, car A approaches with relative speed u_rel = 20 - 10 = 10 m/s.\n"
        "3. Car A undergoes relative deceleration a = 1 m/s².\n"
        "4. Distance required to bring relative velocity to zero without hitting B:\n"
        "   s_rel = u_rel² / (2a) = (10)² / (2 × 1) = 100 / 2 = 50 m.\n"
        "5. Therefore, the minimum initial separation must be 50 m."
    ),
    tip="Collision avoidance condition: Initial gap d ≥ (v₁ - v₂)² / (2a).",
    why_wrong="100 m would be 20² / (2×1) - 10² / (2×1) if both stopped, but B never stops!"
))

# ==============================================================================
# Topic 19: Braking, stopping distance and reaction-time problems (Q416 to Q435, 20 questions)
# Difficulties: 6 Easy, 10 Medium, 4 Hard
# ==============================================================================

# Q416 - Easy
qs.append(make_motion_q(
    num=416,
    question="The stopping distance of a moving vehicle with speed v under constant braking deceleration a is proportional to:",
    options={
        "A": "v",
        "B": "v²",
        "C": "√v",
        "D": "v³"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Using v_final² = v² - 2as = 0 => s = v² / (2a). Thus stopping distance is directly proportional to the square of initial speed: s ∝ v².",
    given="Constant braking deceleration a.",
    formula="s = v² / (2a) => s ∝ v²",
    steps=(
        "1. When brakes are applied, initial speed is v and final speed is 0.\n"
        "2. Applying the 3rd equation of motion: 0² = v² - 2 a s.\n"
        "3. 2 a s = v² => s = v² / (2a).\n"
        "4. Since braking acceleration a is constant, s is directly proportional to v²."
    ),
    tip="If you double your speed, your braking distance quadruples! (2² = 4).",
    why_wrong="Option A is a dangerous misconception; stopping distance depends on v², not v."
))

# Q417 - Easy
qs.append(make_motion_q(
    num=417,
    question="A car moving at 40 km/h is stopped by applying brakes over a distance of 10 m. If the same car moves at 80 km/h, what will be the stopping distance under the same braking force?",
    options={
        "A": "20 m",
        "B": "40 m",
        "C": "30 m",
        "D": "80 m"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Stopping distance s ∝ v². When speed is doubled (80 / 40 = 2), stopping distance increases by 2² = 4 times: s' = 4 × 10 m = 40 m.",
    given="v₁ = 40 km/h, s₁ = 10 m, v₂ = 80 km/h.",
    formula="s₂ / s₁ = (v₂ / v₁)²",
    steps=(
        "1. The speed ratio is: v₂ / v₁ = 80 / 40 = 2.\n"
        "2. Since braking distance scales as the square of speed: s ∝ v².\n"
        "3. s₂ = s₁ × (v₂ / v₁)² = 10 m × (2)² = 10 m × 4 = 40 m."
    ),
    tip="Doubling speed quadruples stopping distance: 10 m → 40 m.",
    why_wrong="20 m incorrectly assumes stopping distance is proportional to v."
))

# Q418 - Easy
qs.append(make_motion_q(
    num=418,
    question="Reaction time is defined as the time interval between:",
    options={
        "A": "Perceiving an event and applying brakes / taking action",
        "B": "Applying brakes and coming to a complete stop",
        "C": "Starting the car and reaching cruise speed",
        "D": "Pressing the accelerator and reaching maximum speed"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Reaction time is the physiological time elapsed from the moment a sensory stimulus is observed to the moment the brain initiates motor action.",
    given="NCERT Definition of reaction time.",
    formula="s_thinking = v × t_reaction",
    steps=(
        "1. When a driver sees a hazard, sensory signals travel from the eyes to the brain, which processes the information and sends motor signals to the foot to hit the brake pedal.\n"
        "2. The time taken during this mental and neurological processing is the reaction time (typically 0.2 s to 0.7 s).\n"
        "3. During reaction time, the vehicle continues moving at its initial constant velocity."
    ),
    tip="Total stopping distance = Thinking distance (v × t_react) + Braking distance (v² / 2a).",
    why_wrong="Option B describes braking time, not reaction time."
))

# Q419 - Easy
qs.append(make_motion_q(
    num=419,
    question="A driver with a reaction time of 0.2 s is driving at 20 m/s. The distance traveled by the car during the driver's reaction time is:",
    options={
        "A": "4 m",
        "B": "2 m",
        "C": "10 m",
        "D": "8 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Braking, stopping distance and reaction-time problems",
    concept="During reaction time, the car continues at constant speed: d = v × t_reaction = 20 × 0.2 = 4 m.",
    given="v = 20 m/s, t_reaction = 0.2 s.",
    formula="d_thinking = v × t_reaction",
    steps=(
        "1. No braking occurs during the reaction time interval.\n"
        "2. The car travels at uniform speed v = 20 m/s.\n"
        "3. Distance covered: d = 20 m/s × 0.2 s = 4 m."
    ),
    tip="Thinking distance is simply Speed × Reaction Time.",
    why_wrong="2 m uses 10 m/s instead of 20 m/s."
))

# Q420 - Easy
qs.append(make_motion_q(
    num=420,
    question="The stopping time of a vehicle moving at speed v and decelerating at constant rate a is:",
    options={
        "A": "v / a",
        "B": "v² / a",
        "C": "v / (2a)",
        "D": "2v / a"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Using v_final = v - at = 0 => t = v / a. Stopping time is directly proportional to speed.",
    given="Initial speed v, deceleration a.",
    formula="t_stop = v / a",
    steps=(
        "1. From the first equation of motion: v_final = u - at.\n"
        "2. At complete stop, v_final = 0.\n"
        "3. 0 = v - at => at = v => t = v / a."
    ),
    tip="Stopping time t ∝ v, but stopping distance s ∝ v²!",
    why_wrong="v / (2a) confuses stopping time with the denominator of stopping distance."
))

# Q421 - Easy
qs.append(make_motion_q(
    num=421,
    question="A car traveling at 15 m/s stops in 3 seconds under uniform braking. The distance traveled during braking is:",
    options={
        "A": "22.5 m",
        "B": "45 m",
        "C": "30 m",
        "D": "15 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Distance s = v_avg × t = [(u + v)/2] × t = [(15 + 0)/2] × 3 = 7.5 × 3 = 22.5 m.",
    given="u = 15 m/s, v = 0, t = 3 s.",
    formula="s = [(u + v) / 2] × t",
    steps=(
        "1. For uniform deceleration to rest, average velocity is: v_avg = u / 2 = 15 / 2 = 7.5 m/s.\n"
        "2. Braking distance: s = v_avg × t = 7.5 m/s × 3 s = 22.5 m.\n"
        "3. (Alternatively: a = 15/3 = 5 m/s², s = 15(3) - 1/2(5)(9) = 45 - 22.5 = 22.5 m)."
    ),
    tip="For any vehicle stopping uniformly from speed u in time t: s = 1/2 u t.",
    why_wrong="45 m is u × t without the 1/2 factor."
))

# Q422 - Medium
qs.append(make_motion_q(
    num=422,
    question="A car moving at 54 km/h is stopped by brakes with deceleration 5 m/s². If the driver's reaction time is 0.4 s, the total stopping distance of the car is:",
    options={
        "A": "28.5 m",
        "B": "22.5 m",
        "C": "6.0 m",
        "D": "35.0 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Convert speed: 54 km/h = 15 m/s. Reaction distance = 15 × 0.4 = 6 m. Braking distance = 15² / (2×5) = 225 / 10 = 22.5 m. Total = 6 + 22.5 = 28.5 m.",
    given="u = 54 km/h = 15 m/s, a = 5 m/s², t_react = 0.4 s.",
    formula="s_total = u × t_react + u² / (2a)",
    steps=(
        "1. Convert speed: u = 54 × (5/18) = 15 m/s.\n"
        "2. Thinking distance during reaction time: s_react = 15 m/s × 0.4 s = 6.0 m.\n"
        "3. Braking distance: s_brake = u² / (2a) = (15)² / (2 × 5) = 225 / 10 = 22.5 m.\n"
        "4. Total stopping distance = s_react + s_brake = 6.0 m + 22.5 m = 28.5 m."
    ),
    tip="Always add thinking distance to braking distance!",
    why_wrong="22.5 m ignores the reaction distance (6 m)."
))

# Q423 - Medium
qs.append(make_motion_q(
    num=423,
    question="A car traveling at 72 km/h can be stopped by applying brakes over a distance of 20 m. If the total mass of the car is increased by 25% while the maximum braking force remains unchanged, the new stopping distance from the same initial speed will be:",
    options={
        "A": "25 m",
        "B": "20 m",
        "C": "30 m",
        "D": "16 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Deceleration a = F/m. Increasing mass by 25% (m' = 1.25 m) reduces deceleration to a' = a / 1.25. Since s = v² / (2a), s' = 1.25 s = 1.25 × 20 = 25 m.",
    given="v = constant, m' = 1.25 m, F = constant, s = 20 m.",
    formula="s ∝ m => s' = s × (m' / m)",
    steps=(
        "1. From Newton's second law: Braking deceleration a = F_brake / m.\n"
        "2. When mass increases to 1.25 m: new deceleration a' = F / (1.25 m) = a / 1.25.\n"
        "3. Stopping distance s = v² / (2a) is inversely proportional to acceleration: s ∝ 1/a ∝ m.\n"
        "4. New stopping distance: s' = 1.25 × s = 1.25 × 20 m = 25 m."
    ),
    tip="For constant braking force: Stopping distance is directly proportional to mass! (s ∝ m).",
    why_wrong="16 m divides by 1.25 instead of multiplying."
))

# Q424 - Medium
qs.append(make_motion_q(
    num=424,
    question="A car travels at 20 m/s. The driver sees a red light 45 m ahead. With reaction time 0.5 s, what is the minimum magnitude of deceleration required to stop the car before the intersection?",
    options={
        "A": "5.71 m/s²",
        "B": "4.44 m/s²",
        "C": "5.00 m/s²",
        "D": "6.25 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Reaction distance = 20 × 0.5 = 10 m. Remaining distance for braking = 45 - 10 = 35 m. a_min = v² / (2 s_brake) = 20² / (2 × 35) = 400 / 70 = 5.71 m/s².",
    given="v = 20 m/s, t_react = 0.5 s, total distance = 45 m.",
    formula="a_min = v² / [2 (d_total - v t_react)]",
    steps=(
        "1. Distance covered during reaction time: d_react = 20 m/s × 0.5 s = 10 m.\n"
        "2. Distance available for braking: d_brake = 45 m - 10 m = 35 m.\n"
        "3. Minimum deceleration required: a = v² / (2 d_brake) = (20)² / (2 × 35) = 400 / 70 ≈ 5.71 m/s²."
    ),
    tip="Subtract thinking distance first before applying a = v² / (2s)!",
    why_wrong="4.44 m/s² uses 45 m as the braking distance (400 / 90 = 4.44), forgetting reaction distance."
))

# Q425 - Medium
qs.append(make_motion_q(
    num=425,
    question="Two identical cars A and B are moving at speeds v and 2v on a straight road. When brakes producing equal deceleration are applied, the ratio of their stopping times t_A / t_B and stopping distances s_A / s_B are respectively:",
    options={
        "A": "1 : 2 and 1 : 4",
        "B": "1 : 4 and 1 : 2",
        "C": "1 : 2 and 1 : 2",
        "D": "1 : 4 and 1 : 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Stopping time t = v / a ∝ v => t_A / t_B = 1 : 2. Stopping distance s = v² / (2a) ∝ v² => s_A / s_B = 1 : 4.",
    given="Speeds v and 2v, same deceleration a.",
    formula="t ∝ v; s ∝ v²",
    steps=(
        "1. Stopping time is given by t = v / a. Since a is the same: t ∝ v.\n"
        "   Ratio of stopping times: t_A / t_B = v / (2v) = 1 / 2 = 1 : 2.\n"
        "2. Stopping distance is given by s = v² / (2a). Since a is the same: s ∝ v².\n"
        "   Ratio of stopping distances: s_A / s_B = v² / (2v)² = 1 / 4 = 1 : 4.\n"
        "3. Therefore, the ratios are 1 : 2 and 1 : 4 respectively."
    ),
    tip="Time scales linearly with speed; Distance scales quadratically with speed.",
    why_wrong="Option B reverses the dependencies."
))

# Q426 - Medium
qs.append(make_motion_q(
    num=426,
    question="A car is moving with speed 30 m/s on a wet road where the coefficient of friction is μ = 0.45. Taking g = 10 m/s², the minimum stopping distance of the car is:",
    options={
        "A": "100 m",
        "B": "90 m",
        "C": "80 m",
        "D": "110 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Maximum braking deceleration without skidding is a_max = μ g = 0.45 × 10 = 4.5 m/s². Stopping distance s = v² / (2 a) = 30² / (2 × 4.5) = 900 / 9 = 100 m.",
    given="v = 30 m/s, μ = 0.45, g = 10 m/s².",
    formula="a = μ g; s = v² / (2 μ g)",
    steps=(
        "1. Maximum braking force provided by friction: F_max = μ m g.\n"
        "2. Maximum deceleration: a = F_max / m = μ g = 0.45 × 10 = 4.5 m/s².\n"
        "3. Minimum stopping distance: s = v² / (2 a) = (30)² / (2 × 4.5) = 900 / 9 = 100 m."
    ),
    tip="Fundamental formula connecting kinematics and friction: s_stop = v² / (2 μ g).",
    why_wrong="90 m arises from dividing 900 by 10 instead of 9."
))

# Q427 - Medium
qs.append(make_motion_q(
    num=427,
    question="A bullet loses 50% of its velocity after penetrating 3 cm into a target. How much further will it penetrate before coming to rest, assuming constant resistance?",
    options={
        "A": "1 cm",
        "B": "2 cm",
        "C": "3 cm",
        "D": "0.5 cm"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Velocity drops from u to u/2 in s₁ = 3 cm. Total stopping distance s_total = u² / (2a). For first 3 cm: (u/2)² = u² - 2a(3) => u²/4 = u² - 6a => 6a = 3u²/4 => 2a = u²/4. s_total = u² / (2a) = u² / (u²/4) = 4 cm. Additional distance = 4 - 3 = 1 cm.",
    given="u₁ = u, v₁ = u/2, s₁ = 3 cm.",
    formula="v² = u² - 2as => s_total = 4/3 s₁ = 4 cm; Δs = 4 - 3 = 1 cm",
    steps=(
        "1. In the first 3 cm: v₁² = u² - 2 a s₁ => (u/2)² = u² - 2a(3).\n"
        "2. u² / 4 = u² - 6a => 6a = 3u² / 4 => 2a = u² / 4.\n"
        "3. Total penetration to complete stop (v = 0):\n"
        "   0 = u² - 2 a s_total => s_total = u² / (2a) = u² / (u² / 4) = 4 cm.\n"
        "4. Additional distance penetrated = s_total - s₁ = 4 cm - 3 cm = 1 cm."
    ),
    tip="Classic NEET bullet problem: Halving velocity uses up 75% of kinetic energy, so only 25% of penetration remains: 3 cm covers 75%, so 1 cm covers the remaining 25%!",
    why_wrong="3 cm falsely assumes losing the remaining 50% takes the same distance."
))

# Q428 - Medium
qs.append(make_motion_q(
    num=428,
    question="A driver traveling at 100 km/h applies brakes and decelerates at 4 m/s². The time taken by the car to reduce its speed to 28 km/h is:",
    options={
        "A": "5 s",
        "B": "4 s",
        "C": "6 s",
        "D": "3 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Δv = 100 - 28 = 72 km/h. In m/s: 72 × 5/18 = 20 m/s. Time t = Δv / a = 20 / 4 = 5 s.",
    given="u = 100 km/h, v = 28 km/h, a = 4 m/s².",
    formula="t = (u - v) / a",
    steps=(
        "1. Change in speed: Δv = 100 km/h - 28 km/h = 72 km/h.\n"
        "2. Convert Δv to m/s: Δv = 72 × (5/18) = 20 m/s.\n"
        "3. Time taken: t = Δv / a = 20 m/s / 4 m/s² = 5 s."
    ),
    tip="Convert the SPEED DIFFERENCE directly to m/s: 72 km/h = 20 m/s!",
    why_wrong="4 s or 6 s arise from converting individual speeds with rounding errors."
))

# Q429 - Medium
qs.append(make_motion_q(
    num=429,
    question="In a test of reaction time using a dropped meter stick, a student catches the ruler after it has fallen a distance of 19.6 cm from rest. What is the student's reaction time? (take g = 9.8 m/s²)",
    options={
        "A": "0.20 s",
        "B": "0.10 s",
        "C": "0.15 s",
        "D": "0.25 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="NCERT reaction time ruler experiment: h = 1/2 g t² => t = √(2h / g). With h = 0.196 m and g = 9.8 m/s²: t = √(2 × 0.196 / 9.8) = √(0.392 / 9.8) = √0.04 = 0.20 s.",
    given="Fall distance h = 19.6 cm = 0.196 m, g = 9.8 m/s².",
    formula="t_reaction = √(2h / g)",
    steps=(
        "1. Ruler falls freely from rest under gravity: u = 0, a = g = 9.8 m/s².\n"
        "2. Convert fall distance to meters: h = 19.6 cm = 0.196 m.\n"
        "3. Formula for time of fall: h = (1/2) g t² => t = √(2h / g).\n"
        "4. Substitute: t = √(2 × 0.196 / 9.8) = √(0.04) = 0.20 s."
    ),
    tip="NCERT Class 11 Section 3.7 Ruler Drop Experiment! Standard human reaction time is ~0.2 s.",
    why_wrong="0.10 s would give h = 4.9 cm."
))

# Q430 - Medium
qs.append(make_motion_q(
    num=430,
    question="A body moving with constant retardation covers 10 m while its velocity decreases from 8 m/s to 6 m/s. How much further does it move before coming to rest?",
    options={
        "A": "12.86 m",
        "B": "10.00 m",
        "C": "15.00 m",
        "D": "8.50 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Braking, stopping distance and reaction-time problems",
    concept="v² = u² - 2as => 6² = 8² - 2a(10) => 36 = 64 - 20a => 20a = 28 => 2a = 2.8. Remaining distance to rest (from 6 m/s to 0): s' = 6² / (2a) = 36 / 2.8 = 360 / 28 = 90 / 7 ≈ 12.86 m.",
    given="u = 8 m/s, v = 6 m/s, s = 10 m.",
    formula="2a = (u² - v²) / s; s' = v² / (2a)",
    steps=(
        "1. For the first stage: v² = u² - 2as => 6² = 8² - 2a(10).\n"
        "2. 36 = 64 - 20a => 20a = 28 => 2a = 2.8 m/s².\n"
        "3. For the remaining motion to rest (from v = 6 m/s to 0 m/s):\n"
        "   s' = v² / (2a) = 6² / 2.8 = 36 / 2.8 = 90 / 7 ≈ 12.86 m."
    ),
    tip="Use 2as = u² - v² directly as a ratio: s'/s = 6² / (8² - 6²) = 36 / 28 = 9/7 => s' = 10 × 9/7 = 12.86 m!",
    why_wrong="10.0 m falsely assumes equal distance for equal velocity drops."
))

# Q431 - Hard
qs.append(make_motion_q(
    num=431,
    question="A car is moving on a straight road. Brakes are applied producing uniform deceleration a. In the first t seconds of braking, it covers distance s₁, and in the next t seconds it covers distance s₂ before coming to rest. Which relation is correct?",
    options={
        "A": "s₁ = 3 s₂",
        "B": "s₁ = 2 s₂",
        "C": "s₁ = 4 s₂",
        "D": "s₁ = s₂"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Reversing the motion in time from rest: distances in consecutive equal time intervals t starting from rest are in ratio 1 : 3 (Galileo's law). The last t seconds covers s₂, the preceding t seconds covers s₁ = 3 s₂.",
    given="Uniform braking to rest in two consecutive equal time intervals t.",
    formula="s₁ / s₂ = 3 / 1 (by time reversal symmetry)",
    steps=(
        "1. Consider the time-reversed motion: an object starting from rest with uniform acceleration a.\n"
        "2. In the first t seconds from rest, it covers distance s_first = (1/2) a t².\n"
        "3. In the next t seconds, it covers distance s_second = 3 × [(1/2) a t²].\n"
        "4. By symmetry, during braking to rest, the last interval of duration t covers s₂ = (1/2) a t²,\n"
        "   and the preceding interval of duration t covers s₁ = 3 × (1/2) a t².\n"
        "5. Therefore: s₁ = 3 s₂."
    ),
    tip="Time reversal symmetry: A body coming to rest under constant deceleration behaves identically to a body starting from rest in reverse time! Distances in successive equal intervals backward are 1 : 3 : 5.",
    why_wrong="s₁ = 2 s₂ is mathematically incorrect under constant acceleration."
))

# Q432 - Hard
qs.append(make_motion_q(
    num=432,
    question="A driver traveling at 30 m/s applies brakes and skids to a stop in 60 m. If the same driver was traveling at 40 m/s, what would be the stopping distance under identical conditions?",
    options={
        "A": "106.7 m",
        "B": "80.0 m",
        "C": "120.0 m",
        "D": "90.0 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Braking, stopping distance and reaction-time problems",
    concept="s ∝ v² => s₂ = s₁ × (v₂ / v₁)² = 60 × (40 / 30)² = 60 × (16 / 9) = 960 / 9 = 106.67 m.",
    given="v₁ = 30 m/s, s₁ = 60 m, v₂ = 40 m/s.",
    formula="s₂ = s₁ × (v₂ / v₁)²",
    steps=(
        "1. Braking distance is proportional to speed squared: s ∝ v².\n"
        "2. Ratio of speeds: v₂ / v₁ = 40 / 30 = 4 / 3.\n"
        "3. Ratio of stopping distances: s₂ / s₁ = (4 / 3)² = 16 / 9.\n"
        "4. New stopping distance: s₂ = 60 m × (16 / 9) = 320 / 3 ≈ 106.67 m."
    ),
    tip="Always calculate (v₂/v₁)²: (4/3)² = 16/9, then 60 × 16/9 = 106.7 m.",
    why_wrong="80 m assumes linear scaling (60 × 40/30 = 80 m), which is physically invalid."
))

# Q433 - Hard
qs.append(make_motion_q(
    num=433,
    question="A truck and a car are moving on a highway with the same kinetic energy. If equal retarding forces are applied to both, which vehicle covers less distance before stopping?",
    options={
        "A": "Both cover the exact same distance",
        "B": "The truck covers less distance",
        "C": "The car covers less distance",
        "D": "Depends on their masses"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Work-Energy Theorem: Work done by retarding force W = F × s = Initial KE. Since both have the SAME kinetic energy and experience the SAME retarding force F, their stopping distances are identical: s = KE / F.",
    given="KE_truck = KE_car, F_truck = F_car.",
    formula="Work = F × s = KE => s = KE / F",
    steps=(
        "1. By the Work-Energy Theorem, the work done by the braking force brings the vehicle to rest: F × s = KE.\n"
        "2. Stopping distance: s = KE / F.\n"
        "3. Since both vehicles have identical initial kinetic energies (KE_truck = KE_car) and experience identical braking forces (F_truck = F_car):\n"
        "   s_truck = KE / F = s_car.\n"
        "4. Therefore, both vehicles stop in the EXACT same distance!"
    ),
    tip="CLASSIC NEET TRAP: If KE is the same and F is the same, distance is the same! (If linear MOMENTUM was the same, the heavier vehicle would stop in less distance).",
    why_wrong="Option B or C confuse kinetic energy with momentum or speed."
))

# Q434 - Hard
qs.append(make_motion_q(
    num=434,
    question="A truck and a car are moving with the same linear momentum. If equal retarding forces are applied to both, which vehicle covers less distance before stopping?",
    options={
        "A": "The truck covers less distance",
        "B": "The car covers less distance",
        "C": "Both cover the same distance",
        "D": "Cannot be predicted"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Kinetic energy is KE = p² / (2m). Since momentum p is the same, KE is inversely proportional to mass: KE ∝ 1/m. The truck has greater mass, so it has LESS kinetic energy. Since s = KE / F, the truck covers less distance before stopping.",
    given="p_truck = p_car, m_truck > m_car, F_truck = F_car.",
    formula="s = p² / (2m F) => s ∝ 1 / m",
    steps=(
        "1. Kinetic energy in terms of momentum: KE = p² / (2m).\n"
        "2. Work-energy theorem: F × s = KE => s = p² / (2m F).\n"
        "3. Given that p and F are identical for both vehicles: s ∝ 1 / m.\n"
        "4. Since the mass of the truck is greater than the car (m_truck > m_car), s_truck < s_car.\n"
        "5. The truck covers LESS distance before coming to rest."
    ),
    tip="Compare this with the previous question: Same KE => Same distance! Same momentum => Heavier stops shorter!",
    why_wrong="Option C holds when kinetic energy is the same, not when momentum is the same."
))

# Q435 - Hard
qs.append(make_motion_q(
    num=435,
    question="In the previous question (same momentum p and same retarding force F), what is the ratio of their stopping times t_truck / t_car?",
    options={
        "A": "1 : 1",
        "B": "m_truck : m_car",
        "C": "m_car : m_truck",
        "D": "√(m_truck / m_car)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Braking, stopping distance and reaction-time problems",
    concept="Impulse-Momentum Theorem: Impulse J = F × t = Δp = p - 0 = p. Since both have the same initial momentum p and same retarding force F, their stopping times are identical: t = p / F => t_truck / t_car = 1 : 1.",
    given="p_truck = p_car, F_truck = F_car.",
    formula="F × t = p => t = p / F",
    steps=(
        "1. By the Impulse-Momentum theorem: F × Δt = Δp.\n"
        "2. To bring either vehicle to rest from initial momentum p: F × t_stop = p.\n"
        "3. Therefore, stopping time is: t_stop = p / F.\n"
        "4. Since both vehicles possess the exact same initial momentum p and face the exact same retarding force F:\n"
        "   t_truck = p / F = t_car.\n"
        "5. The ratio of their stopping times is exactly 1 : 1."
    ),
    tip="MIND-BLOWING NEET RESULT: Same momentum + Same force = SAME STOPPING TIME! (Even though distances are different!).",
    why_wrong="Option B or C falsely introduce mass, which cancels out via momentum p = mv and F = ma."
))

# Save Topic 18 & 19 middle batch to file
with open('scripts/part4_middle_batch.json', 'w') as f:
    json.dump(qs, f, indent=2)

print(f'Generated Topic 18 and Topic 19 middle batch: {len(qs)} questions')
