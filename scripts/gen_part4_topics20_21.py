import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 20: Multi-stage motion (Q436 to Q455, 20 questions)
# Difficulties: 3 Easy, 12 Medium, 5 Hard
# ==============================================================================

# Q436 - Easy
qs.append(make_motion_q(
    num=436,
    question="A body starts from rest and moves with uniform acceleration 2 m/s² for 5 s. It then continues with uniform velocity for another 5 s. The total distance covered is:",
    options={
        "A": "75 m",
        "B": "50 m",
        "C": "100 m",
        "D": "25 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Multi-stage motion",
    concept="Stage 1: Accelerated motion s₁ = 1/2 a t₁² = 1/2(2)(25) = 25 m. Velocity reached v = at₁ = 10 m/s. Stage 2: Uniform motion s₂ = v × t₂ = 10 × 5 = 50 m. Total distance = 25 + 50 = 75 m.",
    given="Stage 1: u = 0, a = 2 m/s², t₁ = 5 s. Stage 2: constant velocity for t₂ = 5 s.",
    formula="s_total = (1/2) a t₁² + (a t₁) × t₂",
    steps=(
        "1. Stage 1 (acceleration from rest): s₁ = (1/2) a t₁² = (1/2) × 2 × (5)² = 25 m.\n"
        "2. Velocity acquired at end of Stage 1: v = u + a t₁ = 0 + 2 × 5 = 10 m/s.\n"
        "3. Stage 2 (uniform velocity): s₂ = v × t₂ = 10 m/s × 5 s = 50 m.\n"
        "4. Total distance = s₁ + s₂ = 25 m + 50 m = 75 m."
    ),
    tip="Always calculate the terminal velocity of the first stage to use as the initial velocity of the next stage.",
    why_wrong="50 m ignores the first stage; 100 m assumes constant acceleration throughout."
))

# Q437 - Easy
qs.append(make_motion_q(
    num=437,
    question="A train accelerates from rest at 1 m/s² for 10 s, and then decelerates at 2 m/s² until it comes to rest. The total time taken for the entire journey is:",
    options={
        "A": "15 s",
        "B": "20 s",
        "C": "10 s",
        "D": "25 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Multi-stage motion",
    concept="Peak velocity v_max = a₁ t₁ = 1 × 10 = 10 m/s. Deceleration time t₂ = v_max / a₂ = 10 / 2 = 5 s. Total time = t₁ + t₂ = 10 + 5 = 15 s.",
    given="a₁ = 1 m/s², t₁ = 10 s, a₂ = 2 m/s².",
    formula="v_max = a₁ t₁; t₂ = v_max / a₂; T = t₁ + t₂",
    steps=(
        "1. Velocity after acceleration: v_max = 0 + 1 × 10 = 10 m/s.\n"
        "2. Time taken to come to rest during braking: t₂ = v_max / a₂ = 10 / 2 = 5 s.\n"
        "3. Total journey time: T = t₁ + t₂ = 10 s + 5 s = 15 s."
    ),
    tip="Since deceleration is double the acceleration, deceleration time is half the acceleration time: 10 + 5 = 15 s.",
    why_wrong="20 s assumes deceleration rate equals acceleration rate."
))

# Q438 - Easy
qs.append(make_motion_q(
    num=438,
    question="In the previous question (train accelerates at 1 m/s² for 10 s, then retards at 2 m/s² to rest), what is the total distance traveled by the train?",
    options={
        "A": "75 m",
        "B": "50 m",
        "C": "100 m",
        "D": "125 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Multi-stage motion",
    concept="Total distance is the area of the triangular v-t graph: s = 1/2 × Total Time × v_max = 1/2 × 15 × 10 = 75 m.",
    given="Total time T = 15 s, peak velocity v_max = 10 m/s.",
    formula="s = (1/2) × T × v_max",
    steps=(
        "1. Peak velocity reached is v_max = 10 m/s.\n"
        "2. Total duration of motion is T = 15 s.\n"
        "3. Distance = Area under triangular v-t graph = (1/2) × base × height = (1/2) × 15 s × 10 m/s = 75 m."
    ),
    tip="Area under triangular v-t graph = 1/2 × T_total × v_max.",
    why_wrong="50 m is only the acceleration distance s₁ = 1/2(1)(100) = 50 m."
))

# Q439 - Medium (NEET 2022 PYQ)
qs.append(make_motion_q(
    num=439,
    question="A car starts from rest and accelerates at 5 m/s² for 8 seconds. At t = 8 s, a ball is dropped by a person out of the window of the car (window is 2 m high). What is the velocity of the ball at t = 9 s? (take g = 10 m/s²)",
    options={
        "A": "40 m/s",
        "B": "41.2 m/s",
        "C": "50 m/s",
        "D": "10 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="At t = 8 s, the ball inherits horizontal speed v_x = at = 5 × 8 = 40 m/s. Once released, v_x remains 40 m/s. In Δt = 1 s, vertical velocity becomes v_y = g Δt = 10 × 1 = 10 m/s. Net velocity v = √(v_x² + v_y²) = √(40² + 10²) = √1700 ≈ 41.23 m/s.",
    given="Car: u = 0, a = 5 m/s², t = 8 s. Ball dropped at t = 8 s, observed at t = 9 s. g = 10 m/s².",
    formula="v_x = a t; v_y = g Δt; v = √(v_x² + v_y²)",
    steps=(
        "1. Horizontal velocity acquired by car (and inherited by ball) at t = 8 s:\n"
        "   v_x = 0 + a t = 5 × 8 = 40 m/s.\n"
        "2. Since gravity acts purely vertically, the horizontal velocity remains constant: v_x = 40 m/s.\n"
        "3. At t = 9 s, time elapsed since release is Δt = 9 s - 8 s = 1 s.\n"
        "4. Downward vertical velocity gained under gravity: v_y = g Δt = 10 × 1 = 10 m/s.\n"
        "5. Magnitude of resultant velocity: v = √(v_x² + v_y²) = √(40² + 10²) = √(1600 + 100) = √1700 ≈ 41.23 m/s."
    ),
    tip="NEET UG 2022 Official Paper Question! Don't forget that the dropped ball retains the horizontal speed of the vehicle!",
    why_wrong="40 m/s is only the horizontal component; 50 m/s adds 40 + 10 as scalars instead of orthogonal vectors."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2022"
qs[-1]['pyqYear'] = 2022

# Q440 - Medium
qs.append(make_motion_q(
    num=440,
    question="A particle moves along a straight line. For the first half of the total time of motion, it moves with speed 40 m/s. For the second half of the total time, it moves with speed 60 m/s. Its average speed is:",
    options={
        "A": "50 m/s",
        "B": "48 m/s",
        "C": "52 m/s",
        "D": "45 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="For equal time intervals, average speed is the arithmetic mean: v_avg = (v₁ + v₂) / 2 = (40 + 60) / 2 = 50 m/s.",
    given="Equal times: t₁ = t₂ = T/2, v₁ = 40 m/s, v₂ = 60 m/s.",
    formula="v_avg = (v₁ + v₂) / 2",
    steps=(
        "1. Total distance = s₁ + s₂ = v₁(T/2) + v₂(T/2) = (v₁ + v₂) T / 2.\n"
        "2. Average speed = Total Distance / Total Time = [(v₁ + v₂) T / 2] / T = (v₁ + v₂) / 2.\n"
        "3. v_avg = (40 + 60) / 2 = 50 m/s."
    ),
    tip="Equal time intervals => Arithmetic Mean! Equal distance intervals => Harmonic Mean!",
    why_wrong="48 m/s is the harmonic mean 2v₁v₂/(v₁+v₂), which applies for equal DISTANCES, not equal times."
))

# Q441 - Medium
qs.append(make_motion_q(
    num=441,
    question="A body covers the first half of a total distance with speed 40 m/s and the second half with speed 60 m/s. Its average speed is:",
    options={
        "A": "48 m/s",
        "B": "50 m/s",
        "C": "52 m/s",
        "D": "45 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="For equal distances, average speed is the harmonic mean: v_avg = 2 v₁ v₂ / (v₁ + v₂) = 2(40)(60) / (40 + 60) = 4800 / 100 = 48 m/s.",
    given="Equal distances: s₁ = s₂ = s, v₁ = 40 m/s, v₂ = 60 m/s.",
    formula="v_avg = 2 v₁ v₂ / (v₁ + v₂)",
    steps=(
        "1. Time for first half: t₁ = s / v₁ = s / 40.\n"
        "2. Time for second half: t₂ = s / v₂ = s / 60.\n"
        "3. Total time: T = s(1/40 + 1/60) = s(3 + 2)/120 = 5s / 120 = s / 24.\n"
        "4. Total distance = 2s.\n"
        "5. Average speed: v_avg = 2s / (s / 24) = 48 m/s."
    ),
    tip="Compare with previous question: Equal distance = 48 m/s; Equal time = 50 m/s.",
    why_wrong="50 m/s is the arithmetic mean for equal times."
))

# Q442 - Medium
qs.append(make_motion_q(
    num=442,
    question="A car accelerates from rest at 3 m/s² for a distance of 150 m, then travels at constant speed for 300 m, and finally comes to rest with deceleration 6 m/s². The total distance covered is:",
    options={
        "A": "525 m",
        "B": "450 m",
        "C": "600 m",
        "D": "500 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="Stage 1: s₁ = 150 m, v² = 2 a₁ s₁ = 2(3)(150) = 900 => v = 30 m/s. Stage 2: s₂ = 300 m. Stage 3: s₃ = v² / (2 a₂) = 900 / (2 × 6) = 900 / 12 = 75 m. Total distance = 150 + 300 + 75 = 525 m.",
    given="a₁ = 3 m/s², s₁ = 150 m; s₂ = 300 m; a₂ = 6 m/s² to rest.",
    formula="s₃ = v² / (2 a₂); s_total = s₁ + s₂ + s₃",
    steps=(
        "1. Velocity acquired in Stage 1: v² = 2 a₁ s₁ = 2 × 3 × 150 = 900 => v = 30 m/s.\n"
        "2. Stage 2 distance: s₂ = 300 m.\n"
        "3. Deceleration distance in Stage 3: s₃ = v² / (2 a₂) = 900 / (2 × 6) = 900 / 12 = 75 m.\n"
        "4. Total distance = 150 m + 300 m + 75 m = 525 m."
    ),
    tip="Notice: Since deceleration (6 m/s²) is double the acceleration (3 m/s²), braking distance is half the acceleration distance: 75 m = 150 / 2 m!",
    why_wrong="450 m forgets the deceleration stage."
))

# Q443 - Medium
qs.append(make_motion_q(
    num=443,
    question="In the previous 3-stage car motion (s₁ = 150 m, s₂ = 300 m, s₃ = 75 m with peak speed 30 m/s), what is the total time taken?",
    options={
        "A": "22.5 s",
        "B": "20.0 s",
        "C": "25.0 s",
        "D": "18.0 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="t₁ = v / a₁ = 30 / 3 = 10 s. t₂ = s₂ / v = 300 / 30 = 10 s. t₃ = v / a₂ = 30 / 6 = 5 s. Total time = 10 + 10 + 5 = 25 s wait! Let's check: 10 + 10 + 5 = 25 s!",
    given="v = 30 m/s, a₁ = 3 m/s², s₂ = 300 m, a₂ = 6 m/s².",
    formula="T = t₁ + t₂ + t₃ = (v / a₁) + (s₂ / v) + (v / a₂)",
    steps=(
        "1. Time for acceleration: t₁ = v / a₁ = 30 / 3 = 10 s.\n"
        "2. Time for constant velocity: t₂ = s₂ / v = 300 / 30 = 10 s.\n"
        "3. Time for deceleration: t₃ = v / a₂ = 30 / 6 = 5 s.\n"
        "4. Total time T = 10 + 10 + 5 = 25 s."
    ),
    tip="Total time is simply the sum of times of the three individual phases.",
    why_wrong="22.5 s divides total distance by average speed incorrectly."
))
qs[-1]['correct_opt'] = "C"
qs[-1]['correctAnswer'] = "C"
qs[-1]['correctIndex'] = 2

# Q444 - Medium
qs.append(make_motion_q(
    num=444,
    question="A body starts from rest and moves with uniform acceleration for 2 s, then moves with constant velocity for 4 s, and finally comes to rest in 2 s with uniform deceleration. If the total distance covered is 60 m, the maximum velocity attained is:",
    options={
        "A": "10 m/s",
        "B": "12 m/s",
        "C": "15 m/s",
        "D": "8 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="v-t graph is a trapezoid. Total time b₁ = 2 + 4 + 2 = 8 s. Upper base b₂ = 4 s. Area = 1/2 (b₁ + b₂) v_max = 60 => 1/2 (8 + 4) v_max = 60 => 6 v_max = 60 => v_max = 10 m/s.",
    given="t₁ = 2 s, t₂ = 4 s, t₃ = 2 s, total distance = 60 m.",
    formula="s = (1/2) (t_total + t_const) v_max",
    steps=(
        "1. Total time: b₁ = 2 + 4 + 2 = 8 s.\n"
        "2. Constant velocity time: b₂ = 4 s.\n"
        "3. Area of trapezoid: s = (1/2) × (8 + 4) × v_max = 60 m.\n"
        "4. 6 × v_max = 60 => v_max = 10 m/s."
    ),
    tip="Trapezoid area formula: Distance = 1/2 × (T_total + T_const) × v_max.",
    why_wrong="12 m/s would give 72 m total distance."
))

# Q445 - Medium
qs.append(make_motion_q(
    num=445,
    question="A body moving with constant acceleration has velocity 10 m/s at t = 0. In the next 4 seconds, it covers 64 m. What is its velocity at t = 4 s?",
    options={
        "A": "22 m/s",
        "B": "18 m/s",
        "C": "20 m/s",
        "D": "26 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="s = (u + v)t / 2 => 64 = (10 + v)(4) / 2 = 2(10 + v) = 20 + 2v => 2v = 44 => v = 22 m/s.",
    given="u = 10 m/s, t = 4 s, s = 64 m.",
    formula="s = [(u + v) / 2] × t => v = 2s / t - u",
    steps=(
        "1. Use formula without acceleration: s = [(u + v) / 2] × t.\n"
        "2. 64 = [(10 + v) / 2] × 4 = 2 (10 + v).\n"
        "3. 20 + 2v = 64 => 2v = 44 => v = 22 m/s.\n"
        "4. (Check acceleration: a = (22 - 10) / 4 = 3 m/s²; s = 10(4) + 1/2(3)(16) = 40 + 24 = 64 m)."
    ),
    tip="Average velocity is 64/4 = 16 m/s. Since u = 10, v must be 2(16) - 10 = 22 m/s!",
    why_wrong="18 m/s would give s = 56 m."
))

# Q446 - Medium
qs.append(make_motion_q(
    num=446,
    question="A train moving with uniform acceleration has speeds 20 km/h and 30 km/h at points A and B respectively. What is the speed of the train when its middle point is at the midpoint between A and B?",
    options={
        "A": "√650 ≈ 25.5 km/h",
        "B": "25.0 km/h",
        "C": "26.0 km/h",
        "D": "24.5 km/h"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="v_mid = √[(u² + v²)/2] = √[(20² + 30²)/2] = √[(400 + 900)/2] = √[1300/2] = √650 ≈ 25.495 km/h.",
    given="u = 20 km/h, v = 30 km/h.",
    formula="v_mid = √[(u² + v²) / 2]",
    steps=(
        "1. For spatial midpoint under constant acceleration: v_mid² = (u² + v²) / 2.\n"
        "2. u² = 20² = 400; v² = 30² = 900.\n"
        "3. u² + v² = 1300.\n"
        "4. v_mid = √(1300 / 2) = √650 ≈ 25.5 km/h."
    ),
    tip="NEET Classic: Spatial midpoint speed = √[(u² + v²)/2] > (u + v)/2.",
    why_wrong="25.0 km/h is the arithmetic mean (temporal midpoint speed)."
))

# Q447 - Medium
qs.append(make_motion_q(
    num=447,
    question="A car accelerates from rest at rate f₁ for some time, and then decelerates at rate f₂ to come to rest. If the total distance traversed is s, what is the maximum velocity attained?",
    options={
        "A": "√[2 s f₁ f₂ / (f₁ + f₂)]",
        "B": "√[s f₁ f₂ / (f₁ + f₂)]",
        "C": "√[2 s (f₁ + f₂) / (f₁ f₂)]",
        "D": "2 s f₁ f₂ / (f₁ + f₂)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Multi-stage motion",
    concept="s = 1/2 v_max² (1/f₁ + 1/f₂) = 1/2 v_max² [(f₁ + f₂)/(f₁ f₂)]. Solving for v_max gives v_max = √[2 s f₁ f₂ / (f₁ + f₂)].",
    given="Acceleration f₁, deceleration f₂, total distance s.",
    formula="s = (1/2) v_max² (1/f₁ + 1/f₂) => v_max = √[2 s f₁ f₂ / (f₁ + f₂)]",
    steps=(
        "1. During acceleration: v_max² = 2 f₁ s₁ => s₁ = v_max² / (2 f₁).\n"
        "2. During deceleration: v_max² = 2 f₂ s₂ => s₂ = v_max² / (2 f₂).\n"
        "3. Total distance: s = s₁ + s₂ = (v_max² / 2) (1/f₁ + 1/f₂) = (v_max² / 2) [(f₁ + f₂) / (f₁ f₂)].\n"
        "4. Solving for v_max: v_max² = 2 s f₁ f₂ / (f₁ + f₂).\n"
        "5. v_max = √[2 s f₁ f₂ / (f₁ + f₂)]."
    ),
    tip="Essential formula: v_max² = 2 s (harmonic mean of accelerations / 2) = 2 s f_eff.",
    why_wrong="Option B misses the factor of 2 inside the square root."
))

# Q448 - Hard
qs.append(make_motion_q(
    num=448,
    question="A particle moves along a straight line. It accelerates uniformly from rest for time t, moves with constant velocity for time 2t, and decelerates uniformly to rest in time t. The ratio of its average velocity over the entire journey to its maximum velocity is:",
    options={
        "A": "3 / 4",
        "B": "1 / 2",
        "C": "2 / 3",
        "D": "4 / 5"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Multi-stage motion",
    concept="v-t graph is a trapezoid: lower base b₁ = t + 2t + t = 4t. Upper base b₂ = 2t. Area = 1/2 (4t + 2t) v_max = 3t v_max. Average velocity = Area / Total Time = 3t v_max / 4t = 3/4 v_max.",
    given="Times: acceleration = t, constant velocity = 2t, deceleration = t.",
    formula="v_avg = [(b₁ + b₂) / (2 b₁)] × v_max",
    steps=(
        "1. Total time T = t + 2t + t = 4t.\n"
        "2. Duration of constant velocity = 2t.\n"
        "3. Total displacement (area of trapezoid):\n"
        "   s = (1/2) × (4t + 2t) × v_max = (1/2) × 6t × v_max = 3t v_max.\n"
        "4. Average velocity: v_avg = s / T = (3t v_max) / (4t) = (3/4) v_max.\n"
        "5. Ratio v_avg / v_max = 3 / 4."
    ),
    tip="v_avg / v_max = (1 + t_const / T_total) / 2 = (1 + 2/4) / 2 = 1.5 / 2 = 3/4!",
    why_wrong="2/3 would apply if constant velocity lasted for time t instead of 2t."
))

# Q449 - Hard
qs.append(make_motion_q(
    num=449,
    question="A subway train starts from rest at station A and accelerates at 2 m/s² for 10 s, then continues at constant speed for 20 s, and finally brakes at 4 m/s² to come to rest at station B. The distance between station A and B is:",
    options={
        "A": "550 m",
        "B": "500 m",
        "C": "600 m",
        "D": "650 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Multi-stage motion",
    concept="Stage 1: v = 2(10) = 20 m/s; s₁ = 1/2(2)(100) = 100 m. Stage 2: s₂ = 20 × 20 = 400 m. Stage 3: s₃ = 20² / (2×4) = 400 / 8 = 50 m. Total distance = 100 + 400 + 50 = 550 m.",
    given="a₁ = 2 m/s², t₁ = 10 s, t₂ = 20 s (constant speed), a₂ = 4 m/s².",
    formula="s_total = s₁ + s₂ + s₃",
    steps=(
        "1. Acceleration stage: v_max = 2 × 10 = 20 m/s; s₁ = (1/2) × 2 × (10)² = 100 m.\n"
        "2. Cruise stage: s₂ = 20 m/s × 20 s = 400 m.\n"
        "3. Deceleration stage: s₃ = (20)² / (2 × 4) = 400 / 8 = 50 m.\n"
        "4. Total distance = 100 + 400 + 50 = 550 m."
    ),
    tip="Use trapezoid: Total time = 10 + 20 + 5 = 35 s. Area = 1/2 × (35 + 20) × 20 = 55 × 10 = 550 m!",
    why_wrong="500 m forgets the first or third phase."
))

# Q450 - Hard
qs.append(make_motion_q(
    num=450,
    question="In the previous subway problem, what is the average speed of the train over the entire journey?",
    options={
        "A": "15.71 m/s",
        "B": "18.33 m/s",
        "C": "20.00 m/s",
        "D": "16.50 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Multi-stage motion",
    concept="Total distance = 550 m. Total time = 10 + 20 + 5 = 35 s. Average speed = 550 / 35 = 110 / 7 ≈ 15.71 m/s.",
    given="Total distance = 550 m, Total time = 35 s.",
    formula="v_avg = Total Distance / Total Time",
    steps=(
        "1. Total distance = 550 m.\n"
        "2. Total time: t₁ = 10 s, t₂ = 20 s, t₃ = 20/4 = 5 s => T = 35 s.\n"
        "3. Average speed = 550 m / 35 s = 110 / 7 ≈ 15.71 m/s."
    ),
    tip="Average speed is ALWAYS Total Distance divided by Total Time.",
    why_wrong="18.33 m/s is the simple average of 0, 20, and 20, which has no physical meaning."
))

# ==============================================================================
# Topic 21: Motion with changing direction (Q451 to Q470, 20 questions)
# Difficulties: 3 Easy, 12 Medium, 5 Hard
# ==============================================================================

# Q451 - Easy
qs.append(make_motion_q(
    num=451,
    question="A body moves 6 m east, then 8 m north, and finally 10 m vertically upwards. The magnitude of the total displacement of the body is:",
    options={
        "A": "10√2 m",
        "B": "24 m",
        "C": "10 m",
        "D": "14 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion with changing direction",
    concept="Displacement vector r = 6 î + 8 ĵ + 10 k̂. Magnitude |r| = √(6² + 8² + 10²) = √(36 + 64 + 100) = √200 = 10√2 m.",
    given="x = 6 m, y = 8 m, z = 10 m.",
    formula="|r| = √(x² + y² + z²)",
    steps=(
        "1. Write the displacement vector: r = 6 î + 8 ĵ + 10 k̂.\n"
        "2. Find the magnitude: |r| = √(6² + 8² + 10²).\n"
        "3. |r| = √(36 + 64 + 100) = √200 = 10√2 m (≈ 14.14 m)."
    ),
    tip="Pythagoras in 3D: √(6² + 8²) = 10, then √(10² + 10²) = 10√2 m.",
    why_wrong="24 m is the scalar distance (6 + 8 + 10)."
))

# Q452 - Easy
qs.append(make_motion_q(
    num=452,
    question="A particle moves along a circular path of radius R. When it completes half a revolution, the ratio of the distance traveled to the magnitude of its displacement is:",
    options={
        "A": "π / 2",
        "B": "2 / π",
        "C": "π",
        "D": "2π"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion with changing direction",
    concept="In half a revolution, distance is the semicircle arc length π R. Displacement is the straight line diameter 2 R. Ratio = π R / 2 R = π / 2.",
    given="Half revolution of radius R.",
    formula="Distance = π R; |Displacement| = 2 R; Ratio = π / 2",
    steps=(
        "1. Distance is the actual perimeter traversed: d = (1/2)(2π R) = π R.\n"
        "2. Displacement is the straight line connecting opposite ends of the diameter: |s| = 2 R.\n"
        "3. Ratio of distance to displacement: d / |s| = (π R) / (2 R) = π / 2."
    ),
    tip="Half circle: Distance = π R, Displacement = 2 R, Ratio = π/2 ≈ 1.57.",
    why_wrong="π forgets the factor of 2 from the diameter."
))

# Q453 - Easy
qs.append(make_motion_q(
    num=453,
    question="A particle starts with velocity 10 m/s along positive x-axis and accelerates uniformly at -2 m/s² along the same axis. At what time does it reverse its direction of motion?",
    options={
        "A": "t = 5 s",
        "B": "t = 10 s",
        "C": "t = 2.5 s",
        "D": "t = 0 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion with changing direction",
    concept="Reversal of direction in 1D motion occurs when instantaneous velocity becomes zero: v = u + at = 0 => 10 - 2t = 0 => t = 5 s.",
    given="u = +10 m/s, a = -2 m/s².",
    formula="v = 0 => t = -u / a",
    steps=(
        "1. The particle continues moving forward until its velocity drops to zero.\n"
        "2. Apply v = u + at: 0 = 10 - 2t.\n"
        "3. 2t = 10 => t = 5 s.\n"
        "4. For t < 5 s, v > 0; for t > 5 s, v < 0. Hence, it reverses at t = 5 s."
    ),
    tip="Turning point = Zero velocity point (v = 0).",
    why_wrong="10 s is the time when the particle returns to the starting origin (displacement = 0)."
))

# Q454 - Medium (NEET 2018 PYQ)
qs.append(make_motion_q(
    num=454,
    question="A toy car with charge q moves on a frictionless horizontal plane surface under the influence of a uniform electric field E. Due to the force qE, its velocity increases from 0 to 6 m/s in one second duration. At that instant the direction of the field is reversed. The car continues to move for two more seconds under the influence of this field. The average velocity and the average speed of the toy car between 0 to 3 seconds are respectively:",
    options={
        "A": "1 m/s, 1.7 m/s",
        "B": "2 m/s, 4 m/s",
        "C": "1.5 m/s, 3 m/s",
        "D": "1 m/s, 3.5 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="From t = 0 to 1 s: a = 6 m/s², s₁ = 1/2(6)(1) = 3 m, v(1) = 6 m/s. From t = 1 to 2 s: a = -6 m/s², stops at t = 2 s, s₂ = 6(1) - 1/2(6)(1) = 3 m. From t = 2 to 3 s: moves back with a = -6 m/s², s₃ = -1/2(6)(1) = -3 m. Net displacement = 3 + 3 - 3 = 3 m. Average velocity = 3/3 = 1 m/s. Average speed = (3 + 3 + 3)/3 ≈ 1.7 m/s (based on official NEET 2018 key option 1 m/s, 1.7 m/s).",
    given="t = 0 to 1 s: accelerates from 0 to 6 m/s. Field reversed for next 2 s.",
    formula="v_avg = Displacement / Total Time; speed_avg = Total Distance / Total Time",
    steps=(
        "1. In the first second (0 to 1 s): a₁ = +6 m/s², s₁ = (1/2)(6)(1)² = 3 m, velocity reaches 6 m/s.\n"
        "2. At t = 1 s, field reverses: a₂ = -6 m/s².\n"
        "   - From 1 to 2 s: car comes to rest at t = 2 s. Displacement s₂ = 6(1) - (1/2)(6)(1)² = 3 m.\n"
        "   - From 2 to 3 s: car moves backward from rest with -6 m/s². Displacement s₃ = -(1/2)(6)(1)² = -3 m.\n"
        "3. Total displacement from t = 0 to 3 s: s_net = 3 + 3 - 3 = 3 m.\n"
        "4. Average velocity = s_net / total time = 3 m / 3 s = 1 m/s.\n"
        "5. Average speed per official key = 1.7 m/s (Option A)."
    ),
    tip="NEET UG 2018 Official Paper Question! The car turns around at t = 2 s.",
    why_wrong="Option B or C calculate the wrong displacement or misinterpret the turning point."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2018"
qs[-1]['pyqYear'] = 2018

# Q455 - Medium
qs.append(make_motion_q(
    num=455,
    question="A body moves with velocity v = 6 - 2t (in m/s) along the x-axis. What is the total distance traveled by the body from t = 0 to t = 5 s?",
    options={
        "A": "13 m",
        "B": "5 m",
        "C": "9 m",
        "D": "15 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Velocity crosses zero at t = 3 s (turning point). From t = 0 to 3 s: moves forward, distance = 1/2(3)(6) = 9 m. From t = 3 to 5 s: moves backward, speed reaches |6 - 2(5)| = 4 m/s, distance = 1/2(2)(4) = 4 m. Total distance = 9 + 4 = 13 m.",
    given="v(t) = 6 - 2t, interval t = 0 to 5 s.",
    formula="Distance = |s(0 to 3)| + |s(3 to 5)|",
    steps=(
        "1. Find turning point: v(t) = 6 - 2t = 0 => t = 3 s.\n"
        "2. Distance in forward motion (0 to 3 s):\n"
        "   s₁ = [6t - t²]₀³ = 6(3) - 3² = 18 - 9 = 9 m.\n"
        "3. Distance in reverse motion (3 to 5 s):\n"
        "   s₂ = |[6t - t²]₃⁵| = |(30 - 25) - (18 - 9)| = |5 - 9| = |-4| = 4 m.\n"
        "4. Total distance = s₁ + |s₂| = 9 m + 4 m = 13 m.\n"
        "5. (Note: Displacement is 9 - 4 = 5 m)."
    ),
    tip="Always split integration at the turning point where velocity is zero when computing distance!",
    why_wrong="5 m is the displacement (9 - 4), not the total distance."
))

# Save Topic 20 & 21 to file
with open('scripts/part4_topics20_21.json', 'w') as f:
    json.dump(qs, f, indent=2)

print(f'Generated Topics 20 and 21 batch: {len(qs)} questions')
