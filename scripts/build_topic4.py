import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 4: Speed and velocity (Q64 - Q84)
# 5 Easy, 11 Medium, 5 Hard
# ==============================================================================

# Q64 (Easy)
qs.append(make_motion_q(
    num=64,
    question="The speedometer of a running motorcar indicates its:",
    options={
        "A": "Average speed over the entire trip",
        "B": "Average velocity",
        "C": "Instantaneous speed",
        "D": "Instantaneous acceleration"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Speed and velocity",
    concept="A speedometer measures the rate at which distance is being covered at that exact moment in time without indicating direction, which is by definition the instantaneous speed.",
    given="Measurement instrument: automobile speedometer.",
    formula="Speedometer reading = Instantaneous speed = lim_{Δt -> 0} (Δs / Δt) = |v(t)|.",
    steps="1. An automobile's speedometer responds continuously to the rotation rate of the wheels or transmission shaft at each instant.\n2. It does not record direction (e.g. it shows 60 km/h whether driving North, South, or around a roundabout).\n3. It does not average over past minutes or hours.\n4. Therefore, it measures instantaneous speed.",
    tip="Speedometer = Instantaneous speed. Odometer = Total distance traveled.",
    why_wrong="Option A is measured by dividing total distance by total time. Option B requires direction. Option D is rate of change of speed."
))

# Q65 (Easy)
qs.append(make_motion_q(
    num=65,
    question="A train is moving at a uniform speed of 90 km/h. What is its speed expressed in meters per second (m/s)?",
    options={
        "A": "25 m/s",
        "B": "30 m/s",
        "C": "20 m/s",
        "D": "15 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Speed and velocity",
    concept="To convert speed from km/h to m/s, multiply by the conversion factor (1000 m / 3600 s) = 5/18.",
    given="Speed v = 90 km/h.",
    formula="v (m/s) = v (km/h) * (5 / 18)",
    steps="1. Standard conversion factor: 1 km/h = 1000 m / 3600 s = 5/18 m/s.\n2. Calculate: v = 90 * (5 / 18) m/s.\n3. Since 90 / 18 = 5:\n   v = 5 * 5 = 25 m/s.\n4. Therefore, 90 km/h equals 25 m/s.",
    tip="Quick conversions to memorize for NEET: 18 km/h = 5 m/s; 36 km/h = 10 m/s; 54 km/h = 15 m/s; 72 km/h = 20 m/s; 90 km/h = 25 m/s; 108 km/h = 30 m/s.",
    why_wrong="Option B corresponds to 108 km/h. Option C corresponds to 72 km/h. Option D corresponds to 54 km/h."
))

# Q66 (Easy)
qs.append(make_motion_q(
    num=66,
    question="Under what condition are the magnitude of average velocity and average speed of a moving object strictly equal?",
    options={
        "A": "When the object moves with constant acceleration along any curved path.",
        "B": "When the object moves along a straight line without reversing its direction of motion.",
        "C": "When the object completes a closed circular loop at constant speed.",
        "D": "They are always equal for every type of motion."
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Speed and velocity",
    concept="Average speed = (total distance) / (total time). Magnitude of average velocity = |displacement| / (total time). They are equal if and only if total distance = |displacement|, which requires unidirectional rectilinear motion.",
    given="Condition: |v_avg| = Speed_avg.",
    formula="|Δx| / Δt = s / Δt <=> |Δx| = s.",
    steps="1. Average speed is total distance s divided by time Δt: v_s = s / Δt.\n2. Average velocity magnitude is |displacement| divided by time Δt: |v_avg| = |Δx| / Δt.\n3. These two quantities are equal if and only if s = |Δx|.\n4. Distance equals magnitude of displacement only when the body moves along a straight line in a single direction without turning around.\n5. If the object curves or reverses, s > |Δx|, so average speed strictly exceeds average velocity.",
    tip="Whenever motion reverses or bends, Distance > |Displacement|, so Average Speed > |Average Velocity|.",
    why_wrong="Option A has a curved path where distance > displacement. Option C has zero displacement (loop), so average velocity is 0 while average speed is non-zero. Option D is false in general."
))

# Q67 (Easy)
qs.append(make_motion_q(
    num=67,
    question="Which of the following statements about speed and velocity is strictly correct?",
    options={
        "A": "Speed can be negative if an object moves backwards.",
        "B": "Velocity can never be zero if speed is positive at an instant.",
        "C": "The magnitude of instantaneous velocity is always equal to the instantaneous speed.",
        "D": "Average velocity can never be zero if average speed is non-zero."
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Speed and velocity",
    concept="Instantaneous speed is defined mathematically as the magnitude of instantaneous velocity: speed = |v⃗| = |dr⃗/dt|.",
    given="Comparison between speed and velocity.",
    formula="v_instantaneous = |v⃗_instantaneous| = |dr⃗/dt|.",
    steps="1. Option A is false: speed is the magnitude of velocity and is always non-negative (speed ≥ 0).\n2. Option B is false: if speed is positive at an instant, velocity has non-zero magnitude, but average velocity over an interval can be zero.\n3. Option C is TRUE: by definition, instantaneous speed is the absolute value (magnitude) of the instantaneous velocity vector: v = |v⃗|.\n4. Option D is false: in a round trip, average speed is positive, but average velocity is zero.",
    tip="Crucial distinction: Instantaneous speed IS ALWAYS equal to magnitude of instantaneous velocity. But average speed is NOT always equal to magnitude of average velocity!",
    why_wrong="Option A incorrectly assigns negative sign to speed. Option D fails for any round trip where displacement is zero."
))

# Q68 (Easy)
qs.append(make_motion_q(
    num=68,
    question="The dimensional formula of velocity and speed is:",
    options={
        "A": "[M⁰ L T⁻¹]",
        "B": "[M⁰ L T⁻²]",
        "C": "[M L T⁻¹]",
        "D": "[M⁰ L² T⁻¹]"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Speed and velocity",
    concept="Velocity is displacement divided by time. Its SI unit is m/s and its dimensional formula is [M⁰ L T⁻¹].",
    given="Definition of speed/velocity.",
    formula="[v] = [displacement] / [time] = [L] / [T] = [M⁰ L T⁻¹].",
    steps="1. Velocity = displacement / time.\n2. Dimensions of displacement = [L].\n3. Dimensions of time = [T].\n4. Therefore, [velocity] = [L][T]⁻¹ = [M⁰ L T⁻¹].\n5. Speed also has units of meters per second, so [speed] = [M⁰ L T⁻¹].",
    tip="Speed and velocity share identical units (m/s) and dimensional formula [M⁰ L T⁻¹]. Acceleration is [M⁰ L T⁻²].",
    why_wrong="Option B is acceleration. Option C is linear momentum [M L T⁻¹]. Option D is angular momentum per unit mass."
))

# Q69 (Medium)
qs.append(make_motion_q(
    num=69,
    question="A car travels a distance of 120 km from city X to city Y at a constant speed of 60 km/h, and returns immediately from city Y to city X along the same route at a constant speed of 40 km/h. What are the average speed and average velocity of the car for the entire round trip?",
    options={
        "A": "Average speed = 48 km/h, Average velocity = 0 km/h",
        "B": "Average speed = 50 km/h, Average velocity = 0 km/h",
        "C": "Average speed = 48 km/h, Average velocity = 48 km/h",
        "D": "Average speed = 50 km/h, Average velocity = 50 km/h"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="For equal distances d, average speed is the harmonic mean: v_avg = 2 v₁ v₂ / (v₁ + v₂). For a round trip, displacement is zero, so average velocity is zero.",
    given="Distance X to Y = 120 km, v₁ = 60 km/h, v₂ = 40 km/h.",
    formula="v_avg = 2 v₁ v₂ / (v₁ + v₂); v_avg_vel = Δx_net / Δt = 0.",
    steps="1. Time taken from X to Y: t₁ = 120 km / 60 km/h = 2 hours.\n2. Time taken from Y to X: t₂ = 120 km / 40 km/h = 3 hours.\n3. Total time = t₁ + t₂ = 2 + 3 = 5 hours.\n4. Total distance covered = 120 + 120 = 240 km.\n5. Average speed = total distance / total time = 240 km / 5 h = 48 km/h.\n   Using formula: 2(60)(40)/(60 + 40) = 4800 / 100 = 48 km/h.\n6. Total displacement for round trip is zero: Δx = 0.\n7. Average velocity = 0 / 5 h = 0 km/h.\n8. Hence, Average speed = 48 km/h and Average velocity = 0 km/h.",
    tip="Common NEET trap: Never take the simple arithmetic mean (60 + 40)/2 = 50 km/h for equal distances! Average speed is the harmonic mean: 2(60)(40)/100 = 48 km/h.",
    why_wrong="Option B falls into the arithmetic mean trap (50 km/h). Options C and D assign a non-zero average velocity to a round trip."
))

# Q70 (Medium)
qs.append(make_motion_q(
    num=70,
    question="A body moves in a straight line with uniform acceleration. If its velocity changes from u = 10 m/s to v = 30 m/s over a displacement of s, what is its velocity at the midpoint of this displacement (i.e. at s/2)?",
    options={
        "A": "20 m/s",
        "B": "10√5 m/s",
        "C": "25 m/s",
        "D": "15√2 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="For constant acceleration, velocity at the spatial midpoint of displacement s is v_mid = √((u² + v²) / 2).",
    given="Initial velocity u = 10 m/s, final velocity v = 30 m/s.",
    formula="v_mid = √((u² + v²) / 2)",
    steps="1. Third equation of motion: v² = u² + 2as => 2as = v² - u².\n2. At the spatial midpoint (displacement s/2), let velocity be v_mid:\n   v_mid² = u² + 2a(s/2) = u² + as.\n3. Since as = (v² - u²) / 2:\n   v_mid² = u² + (v² - u²) / 2 = (2u² + v² - u²) / 2 = (u² + v²) / 2.\n4. Substitute u = 10 m/s and v = 30 m/s:\n   v_mid² = (10² + 30²) / 2 = (100 + 900) / 2 = 1000 / 2 = 500.\n5. Therefore: v_mid = √500 = √(100 * 5) = 10√5 m/s ≈ 22.36 m/s.\n6. Notice that 10√5 ≈ 22.36 m/s is greater than the arithmetic mean (20 m/s)!",
    tip="Crucial NEET result: Velocity at midpoint of displacement is the root-mean-square: v_mid = √((u² + v²)/2). Velocity at midpoint of time is (u + v)/2.",
    why_wrong="Option A is the velocity at the midpoint of time (10 + 30)/2 = 20 m/s, NOT spatial midpoint. Option C is an arbitrary guess. Option D is √450."
))

# Q71 (Medium)
qs.append(make_motion_q(
    num=71,
    question="A particle moves along a straight line. During the first half of the total time of travel, it moves with speed v₁ = 40 m/s, and during the second half of the total time, it moves with speed v₂ = 60 m/s. What is the average speed of the particle for the whole journey?",
    options={
        "A": "48 m/s",
        "B": "50 m/s",
        "C": "52 m/s",
        "D": "45 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="When an object moves with different speeds for equal time intervals, the average speed is simply the arithmetic mean: v_avg = (v₁ + v₂) / 2.",
    given="v₁ = 40 m/s for time t, v₂ = 60 m/s for time t. Total time = 2t.",
    formula="v_avg = (v₁ t + v₂ t) / (2t) = (v₁ + v₂) / 2.",
    steps="1. Let each time half be t. Total time = 2t.\n2. Distance covered in first half: s₁ = v₁ * t = 40t.\n3. Distance covered in second half: s₂ = v₂ * t = 60t.\n4. Total distance = s₁ + s₂ = 40t + 60t = 100t.\n5. Average speed = total distance / total time = 100t / (2t) = 50 m/s.\n6. Hence, v_avg = (40 + 60) / 2 = 50 m/s.",
    tip="Equal times => Arithmetic mean (v₁ + v₂)/2. Equal distances => Harmonic mean 2v₁v₂/(v₁ + v₂).",
    why_wrong="Option A is the harmonic mean (48 m/s), which applies to equal distances, NOT equal times. Options C and D are incorrect."
))

# Q72 (Medium)
qs.append(make_motion_q(
    num=72,
    question="A bullet fired into a target loses half of its velocity after penetrating a distance of 3 cm. Assuming constant resistive retardation, how much further will it penetrate before coming completely to rest?",
    options={
        "A": "1 cm",
        "B": "2 cm",
        "C": "3 cm",
        "D": "0.5 cm"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="Using v² = u² - 2as for constant deceleration. Relate penetration distance to initial velocity.",
    given="Initial velocity u; after distance x₁ = 3 cm, velocity becomes u/2; final velocity = 0.",
    formula="v² = u² - 2ax",
    steps="1. In the first phase: initial speed u, final speed u/2, distance x₁ = 3 cm.\n   (u/2)² = u² - 2a(3)\n   u²/4 = u² - 6a\n   6a = u² - u²/4 = (3/4) u²\n   2a = u² / 4.\n2. Let total distance to come to rest be x_total (where final velocity is 0):\n   0² = u² - 2a x_total\n   x_total = u² / (2a).\n3. Since 2a = u² / 4:\n   x_total = u² / (u² / 4) = 4 cm.\n4. Additional distance penetrated = x_total - x₁ = 4 cm - 3 cm = 1 cm.\n5. Therefore, the bullet penetrates a further 1 cm before stopping.",
    tip="NEET shortcut: If a bullet loses (1/n)th of its velocity in distance x, total distance to stop is x * n² / (2n - 1). For n = 2, total = 3 * 4 / 3 = 4 cm, so extra distance = 4 - 3 = 1 cm!",
    why_wrong="Option B assumes linear relationship with velocity. Option C assumes another 3 cm. Option D is 0.5 cm."
))

# Q73 (Medium)
qs.append(make_motion_q(
    num=73,
    question="A particle moves along a straight line such that its velocity is given by v = 3t² - 6t (in m/s). What is the average velocity of the particle between t = 0 and t = 3 s?",
    options={
        "A": "0 m/s",
        "B": "3 m/s",
        "C": "1 m/s",
        "D": "9 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="Average velocity is the total displacement divided by total time: v_avg = (∫ v dt) / Δt = Δx / Δt.",
    given="v(t) = 3t² - 6t, interval [0, 3] s.",
    formula="v_avg = [ ∫_0^3 v(t) dt ] / 3 = [ x(3) - x(0) ] / 3.",
    steps="1. Integrate velocity with respect to time to find displacement:\n   Δx = ∫_0^3 (3t² - 6t) dt = [ t³ - 3t² ]_0^3.\n2. Evaluate at the limits:\n   Δx = [ 3³ - 3(3²) ] - [ 0 ] = [ 27 - 27 ] = 0 m.\n3. Since the net displacement is zero (Δx = 0):\n   Average velocity v_avg = Δx / Δt = 0 / 3 = 0 m/s.\n4. Therefore, the average velocity over this interval is identically 0 m/s.",
    tip="Average velocity is always net displacement over time: if ∫ v dt = 0, average velocity is 0 m/s.",
    why_wrong="Option B is the instantaneous velocity at t = 3 s (3(9) - 18 = 9 m/s... wait). Option C and D give non-zero values."
))

# Q74 (Medium)
qs.append(make_motion_q(
    num=74,
    question="For the same particle with velocity v = 3t² - 6t (in m/s) between t = 0 and t = 3 s, what is its average speed over this 3-second interval?",
    options={
        "A": "0 m/s",
        "B": "8/3 m/s",
        "C": "4 m/s",
        "D": "2 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="Average speed is total distance divided by total time: Speed_avg = (∫ |v| dt) / Δt.",
    given="v(t) = 3t(t - 2), interval [0, 3] s. Velocity is negative for t in [0, 2] and positive for t in [2, 3].",
    formula="Distance = ∫_0^2 |v| dt + ∫_2^3 |v| dt; Speed_avg = Distance / 3.",
    steps="1. Find where velocity changes sign:\n   3t² - 6t = 0 => 3t(t - 2) = 0 => t = 0 and t = 2 s.\n2. For 0 ≤ t ≤ 2 s, v ≤ 0 (moving backward):\n   Distance d₁ = | ∫_0^2 (3t² - 6t) dt | = | [ t³ - 3t² ]_0^2 | = | 8 - 12 | = |-4| = 4 m.\n3. For 2 ≤ t ≤ 3 s, v ≥ 0 (moving forward):\n   Distance d₂ = ∫_2^3 (3t² - 6t) dt = [ t³ - 3t² ]_2^3 = [ 27 - 27 ] - [ 8 - 12 ] = 0 - (-4) = 4 m.\n4. Total distance traveled = d₁ + d₂ = 4 m + 4 m = 8 m.\n5. Average speed = total distance / total time = 8 m / 3 s = 8/3 m/s ≈ 2.67 m/s.\n6. Compare this with average velocity = 0 m/s from the previous problem!",
    tip="Average speed is NEVER zero for a moving body! Distance is 4 + 4 = 8 m => Average speed = 8/3 m/s.",
    why_wrong="Option A is average velocity (0 m/s). Option C assumes distance = 12 m. Option D assumes distance = 6 m."
))

# Q75 (Medium)
qs.append(make_motion_q(
    num=75,
    question="A cyclist covers the first third of a straight track with speed v₁ = 10 km/h, the second third with speed v₂ = 20 km/h, and the final third with speed v₃ = 30 km/h. What is the average speed of the cyclist for the entire journey?",
    options={
        "A": "20 km/h",
        "B": "16.36 km/h",
        "C": "18 km/h",
        "D": "22.5 km/h"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="For three equal distances, average speed is the harmonic mean of the three speeds: 3 / v_avg = 1/v₁ + 1/v₂ + 1/v₃.",
    given="Three equal distances d, speeds v₁ = 10, v₂ = 20, v₃ = 30 km/h.",
    formula="v_avg = 3 / (1/v₁ + 1/v₂ + 1/v₃)",
    steps="1. Sum the reciprocals:\n   1/v₁ + 1/v₂ + 1/v₃ = 1/10 + 1/20 + 1/30.\n2. Common denominator is 60:\n   = (6 + 3 + 2) / 60 = 11 / 60.\n3. Calculate average speed:\n   v_avg = 3 / (11 / 60) = (3 * 60) / 11 = 180 / 11 km/h.\n4. 180 / 11 = 16.36 km/h.\n5. Notice again that 16.36 km/h is significantly less than the arithmetic mean (20 km/h)!",
    tip="Three equal distances: v_avg = 3 / (1/v₁ + 1/v₂ + 1/v₃) = 3 v₁ v₂ v₃ / (v₁v₂ + v₂v₃ + v₃v₁).",
    why_wrong="Option A is the arithmetic mean (10 + 20 + 30)/3 = 20 km/h (trap!). Options C and D are arbitrary values."
))

# Q76 (Medium)
qs.append(make_motion_q(
    num=76,
    question="A body travels along a straight line such that for half of the total distance it moves with speed v₀. The remaining part of the distance was covered with speed v₁ for half the remaining time and with speed v₂ for the other half of the remaining time. What is the average speed over the whole distance?",
    options={
        "A": "2 v₀ (v₁ + v₂) / (2 v₀ + v₁ + v₂)",
        "B": "v₀ (v₁ + v₂) / (v₀ + v₁ + v₂)",
        "C": "2 v₀ (v₁ + v₂) / (v₀ + v₁ + v₂)",
        "D": "(v₀ + v₁ + v₂) / 3"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="Solve nested average speed problems in stages: first find the average speed of the second half using equal times, then combine the two halves using equal distances.",
    given="First half distance s: speed v₀. Second half distance s: covered in two equal times with v₁ and v₂.",
    formula="For equal times: v' = (v₁ + v₂) / 2. For equal distances s and s: v_avg = 2 v₀ v' / (v₀ + v').",
    steps="1. Consider the second half of the journey of distance s.\n   Since this distance is covered with speeds v₁ and v₂ for equal times, its average speed is the arithmetic mean:\n   v' = (v₁ + v₂) / 2.\n2. Now the entire journey consists of two equal distance halves s and s:\n   First half covered at average speed v₀.\n   Second half covered at average speed v'.\n3. The overall average speed for two equal distances is the harmonic mean:\n   v_avg = 2 v₀ v' / (v₀ + v').\n4. Substitute v' = (v₁ + v₂) / 2:\n   v_avg = 2 v₀ [ (v₁ + v₂) / 2 ] / [ v₀ + (v₁ + v₂) / 2 ]\n   v_avg = v₀ (v₁ + v₂) / [ (2 v₀ + v₁ + v₂) / 2 ]\n   v_avg = 2 v₀ (v₁ + v₂) / (2 v₀ + v₁ + v₂).\n5. Hence, Option A is the exact analytical expression.",
    tip="NEET Classic 2-tier problem: First average equal times: v' = (v₁ + v₂)/2. Then average equal distances: 2v₀v'/(v₀ + v').",
    why_wrong="Option B misses the factor of 2 in numerator. Option C has wrong denominator. Option D is simple arithmetic mean of all three."
))

# Q77 (Medium)
qs.append(make_motion_q(
    num=77,
    question="A particle starts from rest with acceleration a = 2 m/s² for 10 seconds. It then travels at constant speed for 20 seconds, and finally comes to rest with uniform retardation in 5 seconds. What is the maximum speed attained by the particle?",
    options={
        "A": "10 m/s",
        "B": "20 m/s",
        "C": "30 m/s",
        "D": "25 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="In multi-stage motion, the maximum speed is reached at the end of the acceleration phase: v_max = u + a t₁.",
    given="u = 0, a = 2 m/s², t₁ = 10 s.",
    formula="v_max = u + a t₁",
    steps="1. The particle accelerates from rest (u = 0) with a = 2 m/s² for t₁ = 10 s.\n2. Speed attained at the end of this phase:\n   v_max = 0 + (2 m/s² * 10 s) = 20 m/s.\n3. In the second phase, it travels at constant speed, so its speed remains 20 m/s.\n4. In the third phase, it retards to rest.\n5. Therefore, the maximum speed attained during the entire journey is 20 m/s.",
    tip="For trapezoidal velocity profiles (accelerate -> cruise -> brake), max speed is reached at the end of acceleration: v_max = a * t_acc.",
    why_wrong="Option A uses a = 1. Option C adds times. Option D is an arbitrary distractor."
))

# Q78 (Medium)
qs.append(make_motion_q(
    num=78,
    question="A body covers 10 m in the 2nd second and 25 m in the 5th second of its uniformly accelerated straight-line motion. What was its initial velocity u?",
    options={
        "A": "2.5 m/s",
        "B": "5 m/s",
        "C": "0 m/s",
        "D": "7.5 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="Displacement in the nth second is given by s_n = u + (a/2)(2n - 1).",
    given="s₂ = 10 m, s₅ = 25 m.",
    formula="s_n = u + (a/2)(2n - 1)",
    steps="1. Write equation for n = 2:\n   s₂ = u + (a/2)(2*2 - 1) = u + (3/2)a = 10 ... (Eq 1)\n2. Write equation for n = 5:\n   s₅ = u + (a/2)(2*5 - 1) = u + (9/2)a = 25 ... (Eq 2)\n3. Subtract Eq 1 from Eq 2:\n   [u + (9/2)a] - [u + (3/2)a] = 25 - 10\n   (6/2)a = 15 => 3a = 15 => a = 5 m/s².\n4. Substitute a = 5 m/s² back into Eq 1:\n   u + (3/2)(5) = 10\n   u + 7.5 = 10 => u = 10 - 7.5 = 2.5 m/s.\n5. Therefore, the initial velocity u is 2.5 m/s.",
    tip="Subtracting s_m from s_n gives (n - m)a directly! Here (5 - 2)a = 3a = 15 => a = 5 m/s².",
    why_wrong="Option B is the acceleration (5 m/s²). Option C assumes starting from rest. Option D is the term (3/2)a = 7.5 m/s."
))

# Q79 (Medium)
qs.append(make_motion_q(
    num=79,
    question="A car travelling at 72 km/h can be stopped by applying brakes over a minimum distance of 20 m. If the same car travels at 144 km/h, what will be its minimum stopping distance under identical braking conditions?",
    options={
        "A": "40 m",
        "B": "60 m",
        "C": "80 m",
        "D": "100 m"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Speed and velocity",
    concept="Stopping distance is proportional to the square of initial velocity: s = u² / (2a). Doubling the speed quadruples the stopping distance!",
    given="u₁ = 72 km/h, s₁ = 20 m; u₂ = 144 km/h = 2 u₁.",
    formula="s ∝ u² => s₂ / s₁ = (u₂ / u₁)²",
    steps="1. The stopping distance formula from v² = u² - 2as (with v = 0) is:\n   s = u² / (2a).\n2. Since the braking retardation a is identical in both cases, s is directly proportional to u²: s ∝ u².\n3. The ratio of speeds is u₂ / u₁ = 144 / 72 = 2 (speed is doubled).\n4. Therefore, the stopping distance increases by a factor of 2² = 4:\n   s₂ = s₁ * 4 = 20 m * 4 = 80 m.\n5. Hence, the minimum stopping distance is 80 m.",
    tip="Crucial rule for driving and NEET: Stopping distance ∝ u². Double the speed -> 4 times the stopping distance. Triple the speed -> 9 times!",
    why_wrong="Option A incorrectly assumes stopping distance is proportional to u (doubling 20 to 40 m). Option B is 3 times. Option D is 5 times."
))

# Q80 (Hard)
qs.append(make_motion_q(
    num=80,
    question="A particle moves along a straight line with a velocity that depends on position as v(x) = v₀ (1 - x / L) for 0 ≤ x ≤ L. How long does the particle take to reach x = L / 2 starting from x = 0?",
    options={
        "A": "(L / v₀) ln 2",
        "B": "L / (2 v₀)",
        "C": "(L / v₀) ln (1/2)",
        "D": "2L / v₀"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Speed and velocity",
    concept="Using definition of velocity v = dx/dt, integrate dt = dx / v(x) between the given position limits.",
    given="v(x) = v₀ (1 - x/L), limits x = 0 to x = L/2.",
    formula="t = ∫ dx / v(x) = (1 / v₀) ∫ dx / (1 - x/L)",
    steps="1. Express dt in terms of dx:\n   dt = dx / v(x) = dx / [ v₀ (1 - x/L) ].\n2. Integrate from x = 0 to x = L/2:\n   t = (1 / v₀) ∫_0^{L/2} dx / (1 - x/L).\n3. Let u = 1 - x/L, then du = -dx/L => dx = -L du.\n   When x = 0, u = 1. When x = L/2, u = 1 - 1/2 = 1/2.\n4. Evaluate integral:\n   t = (1 / v₀) * (-L) ∫_1^{1/2} du / u = (-L / v₀) [ ln(1/2) - ln(1) ]\n   t = (-L / v₀) [ -ln 2 ] = (L / v₀) ln 2.\n5. Therefore, the time taken is (L / v₀) ln 2.",
    tip="Standard calculus result: ∫_0^{L/2} dx / (1 - x/L) = L ln(1 / (1 - 1/2)) = L ln 2.",
    why_wrong="Option B assumes constant velocity v₀. Option C has a negative sign (time cannot be negative). Option D is dimensional mismatch."
))

# Q81 (Hard)
qs.append(make_motion_q(
    num=81,
    question="In the previous question where v(x) = v₀ (1 - x / L), how long does the particle take to reach the point x = L?",
    options={
        "A": "L / v₀",
        "B": "2L / v₀",
        "C": "Infinite time",
        "D": "(L / v₀) ln L"
    },
    correct_opt="C",
    difficulty="Hard",
    topic="Speed and velocity",
    concept="As x approaches L, v(x) approaches 0 linearly, meaning the particle slows down asymptotically and takes infinite time to reach x = L.",
    given="v(x) = v₀ (1 - x/L), upper limit x -> L.",
    formula="t = (L / v₀) [ -ln(1 - x/L) ]_0^L",
    steps="1. As computed previously, the time to reach position x is:\n   t(x) = (L / v₀) ln(1 / (1 - x/L)).\n2. As x -> L, the denominator (1 - x/L) -> 0.\n3. The logarithm ln(1/0) = ln(∞) -> ∞.\n4. Therefore, t -> ∞.\n5. The particle approaches x = L asymptotically, taking infinite time to actually reach it.",
    tip="When velocity approaches zero linearly with distance to target (v ∝ Δx), the target is only reached in infinite time (Zeno-like asymptotic slowing).",
    why_wrong="Options A, B, and D give finite times, failing to recognize that the integral ∫ dx / (L - x) diverges logarithmically as x -> L."
))

# Q82 (Hard)
qs.append(make_motion_q(
    num=82,
    question="A body moving along a straight line travels equal distances with velocities v₁, v₂, v₃, ..., v_n. What is the general expression for its average velocity over the entire journey?",
    options={
        "A": "(v₁ + v₂ + ... + v_n) / n",
        "B": "n / (1/v₁ + 1/v₂ + ... + 1/v_n)",
        "C": "(1/n) * (1/v₁ + 1/v₂ + ... + 1/v_n)",
        "D": "√(v₁ v₂ ... v_n)"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Speed and velocity",
    concept="Harmonic mean of n quantities: when an object traverses n equal distance segments, average speed is the harmonic mean of the individual speeds.",
    given="n equal distance segments d, speeds v_k for k = 1 to n.",
    formula="v_avg = (Total distance) / (Total time) = (n * d) / [ d ∑ (1/v_k) ] = n / ∑ (1/v_k).",
    steps="1. Let each distance segment have length d. Total distance = n * d.\n2. Time taken for kth segment: t_k = d / v_k.\n3. Total time: t_total = ∑_{k=1}^n (d / v_k) = d * [ 1/v₁ + 1/v₂ + ... + 1/v_n ].\n4. Average speed = total distance / total time:\n   v_avg = (n * d) / [ d * (1/v₁ + 1/v₂ + ... + 1/v_n) ].\n5. Cancel d from numerator and denominator:\n   v_avg = n / [ 1/v₁ + 1/v₂ + ... + 1/v_n ].\n6. This is the definition of the harmonic mean of n speeds.",
    tip="Equal distances => Harmonic Mean: n / ∑(1/v_i). Equal times => Arithmetic Mean: ∑(v_i) / n.",
    why_wrong="Option A is the arithmetic mean (applies to equal times). Option C is the reciprocal. Option D is the geometric mean."
))

# Q83 (Hard)
qs.append(make_motion_q(
    num=83,
    question="A particle moves along a straight line with an initial velocity u. Its retardation is proportional to displacement x: a = -k x (where k is a positive constant). What is the velocity of the particle after it has covered a displacement x?",
    options={
        "A": "v = √(u² - k x²)",
        "B": "v = u - k x",
        "C": "v = √(u² - 2k x)",
        "D": "v = u e^(-kx)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Speed and velocity",
    concept="Use a = v (dv/dx) and integrate: v dv = -k x dx.",
    given="a = -k x, v(0) = u at x = 0.",
    formula="v dv = a dx => ∫_u^v v dv = -k ∫_0^x x dx.",
    steps="1. Express acceleration as v (dv/dx):\n   v (dv/dx) = -k x.\n2. Separate variables:\n   v dv = -k x dx.\n3. Integrate from initial state (x = 0, v = u) to final state (x, v):\n   ∫_u^v v dv = -k ∫_0^x x dx.\n4. Evaluate integrals:\n   [ v² / 2 ]_u^v = -k [ x² / 2 ]_0^x\n   (v² - u²) / 2 = -k x² / 2.\n5. Multiply by 2:\n   v² - u² = -k x²\n   v² = u² - k x²\n   v = √(u² - k x²).\n6. Therefore, velocity at displacement x is √(u² - k x²).",
    tip="This is the exact kinematic relationship for simple harmonic motion: v = √(u² - ω²x²) with ω² = k!",
    why_wrong="Option B assumes constant acceleration. Option C is for constant acceleration a = -k. Option D is for drag force a = -kv."
))

# Q84 (Hard)
qs.append(make_motion_q(
    num=84,
    question="For the particle in Q83 with a = -k x and initial velocity u at x = 0, what is the maximum displacement x_max reached by the particle before it momentarily comes to rest?",
    options={
        "A": "u / √k",
        "B": "u² / (2k)",
        "C": "u / k",
        "D": "√u / k"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Speed and velocity",
    concept="The particle momentarily stops when its velocity becomes zero (v = 0).",
    given="v(x) = √(u² - k x²), condition for stopping is v = 0.",
    formula="0 = u² - k x_max² => x_max = u / √k.",
    steps="1. Set v = 0 in the velocity-displacement relation:\n   v² = u² - k x² = 0.\n2. Solve for x_max:\n   k x_max² = u²\n   x_max² = u² / k\n   x_max = u / √k.\n3. This maximum displacement corresponds to the amplitude of oscillation in SHM where ω = √k, so A = u / ω = u / √k.",
    tip="Energy conservation also gives this instantly: (1/2) m u² = (1/2) k x_max² => x_max = u / √k.",
    why_wrong="Option B is for constant acceleration a = -k (u²/2a). Option C has incorrect dimensions ([L T⁻¹] / [T⁻²] = [L T]). Option D is dimensional mismatch."
))

print("Topic 4 generated: Q64 to Q84 (21 questions)")

with open('scripts/part1_topic4.json', 'w') as f:
    json.dump(qs, f, indent=2)
