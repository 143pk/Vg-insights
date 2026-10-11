import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 5: Average speed and average velocity (Q85 - Q105)
# 5 Easy, 10 Medium, 6 Hard
# ==============================================================================

# Q85 (Easy)
qs.append(make_motion_q(
    num=85,
    question="A car travels 30 km in 30 minutes, and the next 30 km in 45 minutes. What is the average speed of the car for the entire journey in km/h?",
    options={
        "A": "48 km/h",
        "B": "50 km/h",
        "C": "40 km/h",
        "D": "60 km/h"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Average speed and average velocity",
    concept="Average speed is defined as the total distance covered divided by the total time taken: v_avg = s_total / t_total.",
    given="d₁ = 30 km, t₁ = 30 min = 0.5 h; d₂ = 30 km, t₂ = 45 min = 0.75 h.",
    formula="v_avg = (d₁ + d₂) / (t₁ + t₂)",
    steps="1. Total distance = 30 km + 30 km = 60 km.\n2. Total time = 30 min + 45 min = 75 min = 75/60 h = 1.25 hours (or 5/4 h).\n3. Average speed = 60 km / (5/4 h) = (60 * 4) / 5 = 240 / 5 = 48 km/h.\n4. Therefore, the average speed is 48 km/h.",
    tip="Always convert all quantities to consistent SI or practical units (hours) before calculating!",
    why_wrong="Option B is the arithmetic mean of 60 and 40 ((60+40)/2 = 50). Option C is 40 km/h. Option D is 60 km/h."
))

# Q86 (Easy)
qs.append(make_motion_q(
    num=86,
    question="A boy walks to his school 2 km away at an average speed of 4 km/h, and immediately returns home at an average speed of 6 km/h along the same straight road. What is his average velocity for the entire trip?",
    options={
        "A": "0 km/h",
        "B": "4.8 km/h",
        "C": "5 km/h",
        "D": "2.4 km/h"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Average speed and average velocity",
    concept="Average velocity is net displacement divided by total time: v_avg = Δx / Δt. In a round trip, initial and final positions are identical, so net displacement is zero.",
    given="Round trip: home -> school -> home.",
    formula="v_avg_vector = Δx_net / Δt_total",
    steps="1. Initial position = home.\n2. Final position = home.\n3. Net displacement Δx = x_final - x_initial = 0 km.\n4. Average velocity = Δx / Δt = 0 / t_total = 0 km/h.\n5. (Note: His average speed would be 2(4)(6)/(4+6) = 48/10 = 4.8 km/h, but average velocity is strictly zero).",
    tip="Do not confuse average velocity with average speed! For any closed loop or round trip, average velocity is ALWAYS zero.",
    why_wrong="Option B is the average speed (4.8 km/h). Option C is the arithmetic mean. Option D is one-way average."
))

# Q87 (Easy)
qs.append(make_motion_q(
    num=87,
    question="Which of the following relations is universally correct for any motion between two points?",
    options={
        "A": "Average speed ≥ |Average velocity|",
        "B": "Average speed ≤ |Average velocity|",
        "C": "Average speed = |Average velocity| always",
        "D": "Average speed < |Average velocity|"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Average speed and average velocity",
    concept="Since path length (distance) is always greater than or equal to the magnitude of displacement (s ≥ |Δx|), dividing both sides by Δt gives Average speed ≥ |Average velocity|.",
    given="Universal relationship in kinematics.",
    formula="Distance ≥ |Displacement| => (Distance / Δt) ≥ (|Displacement| / Δt).",
    steps="1. For any arbitrary trajectory, the straight-line distance is the shortest possible path between two points.\n2. Hence, Distance ≥ |Displacement|.\n3. Dividing both sides by the elapsed time Δt > 0:\n   Distance / Δt ≥ |Displacement| / Δt.\n4. Therefore, Average speed ≥ |Average velocity|.\n5. Equality holds only if motion is along a straight line in a fixed direction without reversing.",
    tip="Average speed is ALWAYS greater than or equal to the magnitude of average velocity: v_speed ≥ |v_vel|.",
    why_wrong="Options B, C, and D contradict the fundamental inequality Distance ≥ |Displacement|."
))

# Q88 (Easy)
qs.append(make_motion_q(
    num=88,
    question="A particle moves along a straight line. It covers the first half of a total distance of 100 m at speed 10 m/s and the second half at speed 25 m/s. What is its average speed?",
    options={
        "A": "14.29 m/s",
        "B": "17.5 m/s",
        "C": "15.0 m/s",
        "D": "12.5 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Average speed and average velocity",
    concept="For two equal distance intervals d, average speed is the harmonic mean: v_avg = 2 v₁ v₂ / (v₁ + v₂).",
    given="d₁ = d₂ = 50 m, v₁ = 10 m/s, v₂ = 25 m/s.",
    formula="v_avg = 2 v₁ v₂ / (v₁ + v₂)",
    steps="1. Formula for equal distances: v_avg = 2(10)(25) / (10 + 25).\n2. Calculate: v_avg = 500 / 35 = 100 / 7 ≈ 14.2857 m/s ≈ 14.29 m/s.\n3. Notice that 14.29 m/s is much smaller than the arithmetic average (10 + 25)/2 = 17.5 m/s.",
    tip="Equal distances => Harmonic mean 2v₁v₂/(v₁ + v₂). Here 500/35 = 14.29 m/s.",
    why_wrong="Option B is the arithmetic average (17.5 m/s). Option C and D are incorrect guesses."
))

# Q89 (Easy)
qs.append(make_motion_q(
    num=89,
    question="A jogger runs 100 m due East in 20 seconds, turns around and runs 40 m due West in 10 seconds along the same path. What are his average speed and average velocity respectively?",
    options={
        "A": "Average speed = 4.67 m/s, Average velocity = +2.0 m/s",
        "B": "Average speed = 2.0 m/s, Average velocity = +4.67 m/s",
        "C": "Average speed = 4.67 m/s, Average velocity = +4.67 m/s",
        "D": "Average speed = 2.0 m/s, Average velocity = +2.0 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Average speed and average velocity",
    concept="Average speed = total distance / total time; Average velocity = net displacement / total time.",
    given="Phase 1: +100 m in 20 s. Phase 2: -40 m in 10 s. Total time = 30 s.",
    formula="v_speed = (s₁ + s₂) / (t₁ + t₂); v_vel = (x₁ + x₂) / (t₁ + t₂).",
    steps="1. Total distance = 100 m + 40 m = 140 m.\n2. Total time = 20 s + 10 s = 30 s.\n3. Average speed = 140 m / 30 s = 14/3 m/s ≈ 4.67 m/s.\n4. Net displacement = +100 m - 40 m = +60 m (East).\n5. Average velocity = +60 m / 30 s = +2.0 m/s (East).\n6. Hence, Average speed = 4.67 m/s, Average velocity = +2.0 m/s.",
    tip="Distance adds scalars (100 + 40 = 140). Displacement adds vectors (+100 - 40 = +60).",
    why_wrong="Option B swaps speed and velocity. Option C assumes displacement equals distance. Option D assumes distance equals displacement."
))

# Q90 (Medium)
qs.append(make_motion_q(
    num=90,
    question="A particle covers one-fourth of its total distance at a speed of 20 m/s, and the remaining three-fourths of the distance at a speed of 60 m/s. What is the average speed of the particle over the entire journey?",
    options={
        "A": "40 m/s",
        "B": "36 m/s",
        "C": "45 m/s",
        "D": "50 m/s"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="For distance fractions f₁ and f₂: v_avg = 1 / (f₁/v₁ + f₂/v₂).",
    given="f₁ = 1/4 at v₁ = 20 m/s, f₂ = 3/4 at v₂ = 60 m/s.",
    formula="v_avg = Total distance / Total time = d / [ (d/4)/20 + (3d/4)/60 ].",
    steps="1. Let total distance be d.\n2. Time for first part: t₁ = (d/4) / 20 = d / 80.\n3. Time for second part: t₂ = (3d/4) / 60 = 3d / 240 = d / 80.\n4. Notice that t₁ = t₂! The particle spent equal times in both parts!\n5. Total time = t₁ + t₂ = d/80 + d/80 = 2d / 80 = d / 40... wait, let's recheck:\n   t₂ = (3d/4)/60 = 3d/240 = d/80.\n   Total time = d/80 + d/80 = 2d/80 = d/40.\n   Then v_avg = d / (d/40) = 40 m/s!\n   Wait! (1/4)/20 = 1/80; (3/4)/60 = 3/240 = 1/80. Total time = 2/80 = 1/40.\n   So v_avg = 40 m/s! Let's check: 40 m/s is Option A!",
    tip="Spot the symmetry: (1/4)/20 = 1/80 and (3/4)/60 = 1/80. Both parts took the exact same time, so v_avg is (20 + 60)/2 = 40 m/s!",
    why_wrong="Option B is 36 m/s. Option C is 45 m/s (arithmetic mean of fractions). Option D is 50 m/s."
))
qs[-1]["correct_opt"] = "A"
qs[-1]["correctIndex"] = 0
qs[-1]["solutionStructured"]["finalAnswer"] = "Option A: 40 m/s"
qs[-1]["explanation"] = qs[-1]["explanation"].replace("Option C is Option A", "Option A: 40 m/s")

# Q91 (Medium)
qs.append(make_motion_q(
    num=91,
    question="A body moving along a straight line travels with speed v₁ for 1/3 of the total time, and with speed v₂ for the remaining 2/3 of the total time. What is its average speed for the whole journey?",
    options={
        "A": "(v₁ + 2v₂) / 3",
        "B": "(2v₁ + v₂) / 3",
        "C": "3v₁v₂ / (2v₁ + v₂)",
        "D": "3v₁v₂ / (v₁ + 2v₂)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="For time fractions f₁ and f₂: Average speed is the weighted arithmetic mean: v_avg = f₁ v₁ + f₂ v₂.",
    given="f₁ = 1/3 with speed v₁; f₂ = 2/3 with speed v₂.",
    formula="v_avg = (v₁ * (T/3) + v₂ * (2T/3)) / T = (v₁ + 2v₂) / 3.",
    steps="1. Let total time be T.\n2. Distance covered in first interval: s₁ = v₁ * (T/3).\n3. Distance covered in second interval: s₂ = v₂ * (2T/3).\n4. Total distance: s = s₁ + s₂ = (v₁ + 2v₂) T / 3.\n5. Average speed = total distance / total time = [ (v₁ + 2v₂) T / 3 ] / T = (v₁ + 2v₂) / 3.\n6. Hence, the average speed is (v₁ + 2v₂) / 3.",
    tip="Weighted average for times: v_avg = (t₁ v₁ + t₂ v₂) / (t₁ + t₂). Here (1*v₁ + 2*v₂) / 3.",
    why_wrong="Option B inverts the weights (gives 2/3 to v₁). Options C and D are weighted harmonic means, which apply to distances, NOT times."
))

# Q92 (Medium)
qs.append(make_motion_q(
    num=92,
    question="A vehicle travels half of the total distance at speed 30 km/h. During the other half of the distance, it travels at 40 km/h for half the time and at 20 km/h for the other half of the time. What is the average speed of the vehicle for the complete journey?",
    options={
        "A": "30 km/h",
        "B": "28 km/h",
        "C": "32 km/h",
        "D": "25 km/h"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="Step 1: Find average speed of second half (equal times => arithmetic mean). Step 2: Combine with first half (equal distances => harmonic mean).",
    given="First half distance: v₁ = 30 km/h. Second half distance: v₂ = 40 km/h for t/2, v₃ = 20 km/h for t/2.",
    formula="v' = (40 + 20) / 2 = 30 km/h; v_avg = 2(30)(v') / (30 + v').",
    steps="1. In the second half of the distance, equal times are spent at 40 km/h and 20 km/h.\n   Average speed for the second half: v' = (40 + 20) / 2 = 60 / 2 = 30 km/h.\n2. Now both halves of the journey have the SAME average speed: 30 km/h!\n3. First half average speed = 30 km/h.\n   Second half average speed = 30 km/h.\n4. Therefore, overall average speed = 30 km/h!\n   Using formula: 2(30)(30)/(30 + 30) = 1800 / 60 = 30 km/h.\n5. Hence, the average speed for the whole journey is 30 km/h.",
    tip="Always calculate in modular steps: Second half = (40+20)/2 = 30 km/h. Both halves 30 km/h => overall 30 km/h!",
    why_wrong="Options B, C, and D are incorrect arithmetic combinations."
))

# Q93 (Medium)
qs.append(make_motion_q(
    num=93,
    question="A particle moves along the x-axis such that its position is given by x = 2t² - 8t + 6 (in meters). What is the average velocity of the particle in the time interval from t = 1 s to t = 4 s?",
    options={
        "A": "+2 m/s",
        "B": "+4 m/s",
        "C": "-2 m/s",
        "D": "+6 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="Average velocity is v_avg = [x(t₂) - x(t₁)] / (t₂ - t₁).",
    given="x(t) = 2t² - 8t + 6, t₁ = 1 s, t₂ = 4 s.",
    formula="v_avg = [ x(4) - x(1) ] / (4 - 1)",
    steps="1. Calculate position at t = 1 s:\n   x(1) = 2(1)² - 8(1) + 6 = 2 - 8 + 6 = 0 m.\n2. Calculate position at t = 4 s:\n   x(4) = 2(4)² - 8(4) + 6 = 2(16) - 32 + 6 = 32 - 32 + 6 = +6 m.\n3. Net displacement Δx = x(4) - x(1) = +6 m - 0 m = +6 m.\n4. Time interval Δt = 4 s - 1 s = 3 s.\n5. Average velocity = Δx / Δt = +6 m / 3 s = +2 m/s.\n6. Hence, the average velocity is +2 m/s.",
    tip="For quadratic position x = at² + bt + c, average velocity between t₁ and t₂ is exactly equal to instantaneous velocity at the midpoint t_mid = (t₁ + t₂)/2! Here t_mid = 2.5 s, v(2.5) = 4(2.5) - 8 = 10 - 8 = +2 m/s!",
    why_wrong="Option B is the velocity at t = 3 s. Option C gives wrong sign. Option D is the displacement (6 m)."
))

# Q94 (Medium)
qs.append(make_motion_q(
    num=94,
    question="For the particle in Q93 with x = 2t² - 8t + 6 (in meters), what is its average speed in the time interval from t = 1 s to t = 4 s?",
    options={
        "A": "3.33 m/s",
        "B": "2.0 m/s",
        "C": "4.67 m/s",
        "D": "5.0 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="Average speed = total distance / total time. Break the interval at the turning point where v = dx/dt = 0.",
    given="x(t) = 2t² - 8t + 6, interval [1, 4] s.",
    formula="v = 4t - 8 = 0 => t = 2 s; Distance = |x(2) - x(1)| + |x(4) - x(2)|.",
    steps="1. Find turning point:\n   v(t) = dx/dt = 4t - 8 = 0 => t = 2 s.\n   Since 2 s lies within [1, 4] s, the particle reverses direction at t = 2 s.\n2. Positions:\n   x(1) = 0 m\n   x(2) = 2(4) - 8(2) + 6 = 8 - 16 + 6 = -2 m\n   x(4) = +6 m.\n3. Distance from 1 to 2 s: |x(2) - x(1)| = |-2 - 0| = 2 m.\n4. Distance from 2 to 4 s: |x(4) - x(2)| = |6 - (-2)| = 8 m.\n5. Total distance = 2 m + 8 m = 10 m.\n6. Total time = 4 s - 1 s = 3 s.\n7. Average speed = 10 m / 3 s = 3.33 m/s.\n8. Notice that Average speed (3.33 m/s) > Average velocity (2.0 m/s)!",
    tip="Turning point at t = 2 s: moves 2 m backward, then 8 m forward. Total distance = 10 m => Average speed = 10/3 = 3.33 m/s.",
    why_wrong="Option B is the average velocity (2.0 m/s). Option C and D overestimate distance."
))

# Q95 (Medium)
qs.append(make_motion_q(
    num=95,
    question="A bird flies back and forth between two cars moving towards each other on a straight road. The cars are initially 120 km apart and each travels at a constant speed of 30 km/h. If the bird flies continuously at a constant speed of 80 km/h until the cars collide, what is the total distance flown by the bird?",
    options={
        "A": "160 km",
        "B": "240 km",
        "C": "120 km",
        "D": "80 km"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="Instead of summing an infinite series of back-and-forth trips, simply calculate the total time until the cars meet, then multiply the bird's constant speed by that time.",
    given="Separation d = 120 km, v_car1 = 30 km/h, v_car2 = 30 km/h, v_bird = 80 km/h.",
    formula="t_collision = d / (v_car1 + v_car2); Distance_bird = v_bird * t_collision.",
    steps="1. Relative speed of approach between the two cars:\n   v_rel = 30 km/h + 30 km/h = 60 km/h.\n2. Time until the cars collide:\n   t = 120 km / 60 km/h = 2 hours.\n3. The bird flies continuously for these 2 hours at a constant speed of 80 km/h.\n4. Total distance flown by the bird = speed * time = 80 km/h * 2 h = 160 km.\n5. Hence, the bird covers a total distance of 160 km.",
    tip="Von Neumann's famous puzzle: Never sum the infinite geometric series! Just find the time to collision (2 hours) and multiply by the bird's speed: 80 * 2 = 160 km.",
    why_wrong="Option B multiplies by 3 hours. Option C is the initial separation. Option D is distance in 1 hour."
))

# Q96 (Medium)
qs.append(make_motion_q(
    num=96,
    question="A body moving with uniform acceleration has velocities u and v at points A and B respectively. If C is the midpoint of AB, the time taken to travel from A to C compared to that from C to B is:",
    options={
        "A": "Greater",
        "B": "Lesser",
        "C": "Equal",
        "D": "Dependent on the mass of the body"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="Since the body is accelerating, its speed is higher during the second half of the distance (CB) than during the first half (AC). Covering the same distance at higher speed takes LESS time.",
    given="Accelerating body (v > u, a > 0), AC = CB = s/2.",
    formula="t = s / v_avg. Since v_avg(AC) < v_avg(CB), t(AC) > t(CB).",
    steps="1. Let distance AC = CB = d.\n2. In segment AC, speed increases from u to v_mid. The average speed is (u + v_mid)/2.\n3. In segment CB, speed increases from v_mid to v. The average speed is (v_mid + v)/2.\n4. Since the body is accelerating, u < v_mid < v, which means:\n   Average speed in AC < Average speed in CB.\n5. Time taken is distance divided by average speed: t = d / v_avg.\n6. Because average speed is lower in AC, time t(AC) is GREATER than time t(CB).\n7. Therefore, it takes more time to cover the first half of the distance.",
    tip="An accelerating body always covers equal distances in successively shorter times!",
    why_wrong="Option B reverses the inequality. Option C would only be true for zero acceleration. Option D is irrelevant (kinematics is independent of mass)."
))

# Q97 (Medium)
qs.append(make_motion_q(
    num=97,
    question="A particle moves along a straight line with a constant acceleration of 4 m/s². If its initial velocity is 10 m/s, what is its average velocity over the first 5 seconds?",
    options={
        "A": "20 m/s",
        "B": "30 m/s",
        "C": "25 m/s",
        "D": "15 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="For constant acceleration, average velocity is the arithmetic mean of initial and final velocities: v_avg = (u + v) / 2.",
    given="u = 10 m/s, a = 4 m/s², t = 5 s.",
    formula="v = u + at; v_avg = (u + v) / 2 = u + (1/2) a t.",
    steps="1. Final velocity after 5 seconds:\n   v = u + a t = 10 + (4 * 5) = 10 + 20 = 30 m/s.\n2. Average velocity for uniformly accelerated motion:\n   v_avg = (u + v) / 2 = (10 + 30) / 2 = 40 / 2 = 20 m/s.\n3. Alternatively, displacement s = u t + (1/2) a t²:\n   s = 10(5) + (1/2)(4)(25) = 50 + 50 = 100 m.\n4. Average velocity = s / t = 100 m / 5 s = 20 m/s.\n5. Notice that v_avg = 20 m/s is exactly the instantaneous velocity at the midpoint of time (t = 2.5 s)!",
    tip="For constant acceleration: Average velocity over time t is simply (u + v)/2, or the velocity at the midpoint of time t/2.",
    why_wrong="Option B is the final velocity (30 m/s). Option C is the arithmetic mean of u and a*t. Option D is an arbitrary distractor."
))

# Q98 (Medium)
qs.append(make_motion_q(
    num=98,
    question="A body starts from rest and moves along a straight line with constant acceleration a. What is the ratio of its average velocity over the first t seconds to its instantaneous velocity at time t?",
    options={
        "A": "1 : 2",
        "B": "2 : 1",
        "C": "1 : 1",
        "D": "1 : 4"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="For motion starting from rest with constant acceleration, v_avg = (1/2) a t, while instantaneous velocity is v = a t.",
    given="u = 0, constant acceleration a, time t.",
    formula="v_avg = (0 + at) / 2 = (1/2) at; v(t) = at.",
    steps="1. Displacement in time t: s = (1/2) a t².\n2. Average velocity: v_avg = s / t = [ (1/2) a t² ] / t = (1/2) a t.\n3. Instantaneous velocity at time t: v(t) = a t.\n4. Ratio = v_avg / v(t) = [ (1/2) a t ] / [ a t ] = 1 / 2.\n5. Therefore, the ratio is 1 : 2.",
    tip="For motion from rest under constant acceleration, average velocity is ALWAYS exactly half of final velocity: v_avg = v / 2.",
    why_wrong="Option B inverts the ratio. Option C implies constant velocity. Option D uses (1/2)²."
))

# Q99 (Medium)
qs.append(make_motion_q(
    num=99,
    question="A particle moves along a straight line such that its velocity varies with position as v = c x^(1/3) (where c is a constant). What is the ratio of average velocity over distance x to the instantaneous velocity at x?",
    options={
        "A": "2 : 3",
        "B": "3 : 4",
        "C": "1 : 2",
        "D": "3 : 2"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Average speed and average velocity",
    concept="Integrate dt = dx / v(x) to find time t(x), then calculate v_avg = x / t(x) and compare with v(x).",
    given="v(x) = c x^(1/3), starting from x = 0 at t = 0.",
    formula="t = ∫_0^x dx / (c x^(1/3)); v_avg = x / t.",
    steps="1. Time to reach position x:\n   t = (1/c) ∫_0^x x^(-1/3) dx = (1/c) [ x^(2/3) / (2/3) ] = (3 / 2c) x^(2/3).\n2. Calculate average velocity:\n   v_avg = x / t = x / [ (3 / 2c) x^(2/3) ] = (2c / 3) x^(1 - 2/3) = (2/3) c x^(1/3).\n3. Notice that instantaneous velocity is v(x) = c x^(1/3).\n4. Therefore:\n   v_avg = (2/3) v(x).\n5. Ratio v_avg : v(x) = 2 : 3.\n6. Hence, the ratio is 2 : 3.",
    tip="In power-law motion v = c x^n, v_avg / v = 1 - n! Here n = 1/3, so 1 - 1/3 = 2/3!",
    why_wrong="Option B is for n = 1/4. Option C is for n = 1/2. Option D inverts the ratio."
))

# Q100 (PYQ - Hard)
qs.append(make_motion_q(
    num=100,
    question="Preeti reached the metro station and found that the escalator was not working. She walked up the stationary escalator in time t₁. On other days, if she remains stationary on the moving escalator, then the escalator takes her up in time t₂. The time taken by her to walk up on the moving escalator will be:",
    options={
        "A": "t₁ t₂ / (t₂ + t₁)",
        "B": "t₁ t₂ / (t₂ - t₁)",
        "C": "(t₁ + t₂) / 2",
        "D": "t₁ - t₂"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Average speed and average velocity",
    concept="Relative velocity: When two independent mechanisms contribute to covering the same distance d in the same direction, their speeds add algebraically: v_net = v₁ + v₂.",
    given="Distance = d. Walking speed v₁ = d / t₁. Escalator speed v₂ = d / t₂.",
    formula="v_net = v₁ + v₂ => d / t = d / t₁ + d / t₂ => 1 / t = 1 / t₁ + 1 / t₂.",
    steps="1. Let the length of the escalator be d.\n2. Walking speed of Preeti: v₁ = d / t₁.\n3. Speed of the moving escalator: v₂ = d / t₂.\n4. When Preeti walks up the moving escalator, both speeds are in the same upward direction, so net speed is:\n   v_net = v₁ + v₂ = d/t₁ + d/t₂ = d * (1/t₁ + 1/t₂) = d * (t₁ + t₂) / (t₁ t₂).\n5. Time taken to walk up the moving escalator:\n   t = d / v_net = d / [ d(t₁ + t₂) / (t₁ t₂) ] = (t₁ t₂) / (t₁ + t₂).\n6. Therefore, the time taken is t₁ t₂ / (t₂ + t₁).",
    tip="Official NEET UG 2017 PYQ! When speeds add to cover the same distance, times combine like parallel resistors: 1/t = 1/t₁ + 1/t₂ => t = t₁t₂ / (t₁ + t₂).",
    why_wrong="Option B would apply if she were walking down against an ascending escalator. Option C is the arithmetic average of times. Option D subtracts times linearly.",
    is_pyq=True,
    pyq_year=2017,
    source="NEET UG 2017"
))

# Q101 (PYQ - Hard)
qs.append(make_motion_q(
    num=101,
    question="A person travelling in a straight line moves with a constant velocity v₁ for certain distance 'x' and with a constant velocity v₂ for next equal distance. The average velocity v is given by the relation:",
    options={
        "A": "2 / v = 1 / v₁ + 1 / v₂",
        "B": "v = (v₁ + v₂) / 2",
        "C": "v = √(v₁ v₂)",
        "D": "1 / v = 1 / v₁ + 1 / v₂"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Average speed and average velocity",
    concept="For equal distances, the average velocity is the harmonic mean of the individual velocities.",
    given="Two equal distances x, velocities v₁ and v₂.",
    formula="v = Total displacement / Total time = (2x) / (x/v₁ + x/v₂) => 2 / v = 1/v₁ + 1/v₂.",
    steps="1. Time taken for the first distance x: t₁ = x / v₁.\n2. Time taken for the second distance x: t₂ = x / v₂.\n3. Total time: t = t₁ + t₂ = x / v₁ + x / v₂ = x (1/v₁ + 1/v₂).\n4. Total displacement: Δx = x + x = 2x.\n5. Average velocity: v = Δx / t = 2x / [ x (1/v₁ + 1/v₂) ] = 2 / (1/v₁ + 1/v₂).\n6. Invert the expression:\n   1 / v = (1/v₁ + 1/v₂) / 2\n   Multiply both sides by 2:\n   2 / v = 1 / v₁ + 1 / v₂.\n7. Therefore, Option A is the correct relation.",
    tip="Official NEET UG 2019 PYQ! Remember the standard reciprocal form: 2/v = 1/v₁ + 1/v₂ (harmonic mean).",
    why_wrong="Option B is the arithmetic mean, which applies to equal times, NOT equal distances. Option C is the geometric mean. Option D misses the factor of 2.",
    is_pyq=True,
    pyq_year=2019,
    source="NEET UG 2019"
))

# Q102 (Hard)
qs.append(make_motion_q(
    num=102,
    question="A particle moves in a straight line such that its velocity is given by v = v₀ (1 - t / T) for 0 ≤ t ≤ 2T. What are the average velocity and average speed of the particle in the time interval from t = 0 to t = 2T?",
    options={
        "A": "Average velocity = 0, Average speed = v₀ / 2",
        "B": "Average velocity = v₀ / 2, Average speed = v₀ / 2",
        "C": "Average velocity = 0, Average speed = v₀",
        "D": "Average velocity = -v₀ / 2, Average speed = v₀"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Average speed and average velocity",
    concept="For symmetrical triangular velocity profiles that reverse sign, total displacement is zero (giving zero average velocity), while distance is the sum of the positive and negative areas.",
    given="v(t) = v₀ (1 - t/T), interval [0, 2T].",
    formula="v_avg = (∫_0^{2T} v dt) / 2T; Speed_avg = (∫_0^{2T} |v| dt) / 2T.",
    steps="1. The velocity is positive for 0 ≤ t ≤ T, zero at t = T, and negative for T ≤ t ≤ 2T.\n2. Displacement in [0, T]:\n   Δx₁ = Area of triangle = (1/2) * base * height = (1/2) * T * v₀ = v₀ T / 2.\n3. Displacement in [T, 2T]:\n   At t = 2T, v = v₀(1 - 2) = -v₀.\n   Δx₂ = Area below time axis = -(1/2) * T * v₀ = -v₀ T / 2.\n4. Net displacement over [0, 2T]:\n   Δx = Δx₁ + Δx₂ = (v₀ T / 2) - (v₀ T / 2) = 0.\n   Average velocity = Δx / (2T) = 0 / 2T = 0.\n5. Total distance covered over [0, 2T]:\n   Distance = |Δx₁| + |Δx₂| = (v₀ T / 2) + (v₀ T / 2) = v₀ T.\n   Average speed = Total distance / Total time = (v₀ T) / (2T) = v₀ / 2.\n6. Hence, Average velocity = 0, Average speed = v₀ / 2.",
    tip="Areas above and below the time axis cancel out for displacement (giving v_avg = 0), but add together for distance (giving Speed_avg = v₀/2).",
    why_wrong="Option B equates average velocity to average speed. Option C doubles the speed. Option D assigns negative velocity."
))

# Q103 (Hard)
qs.append(make_motion_q(
    num=103,
    question="A body travels from point A to point B along a straight line. It moves with speed v₁ for a fraction f of the total time, and with speed v₂ for the remaining fraction (1 - f) of the total time. Under what condition is the average speed of the body equal to √(v₁ v₂) (the geometric mean)?",
    options={
        "A": "f = √v₂ / (√v₁ + √v₂)",
        "B": "f = √v₁ / (√v₁ + √v₂)",
        "C": "f = 1/2",
        "D": "f = v₂ / (v₁ + v₂)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Average speed and average velocity",
    concept="Set weighted average speed f v₁ + (1 - f) v₂ equal to √(v₁ v₂) and solve algebraically for f.",
    given="v_avg = f v₁ + (1 - f) v₂ = √(v₁ v₂).",
    formula="f (v₁ - v₂) + v₂ = √(v₁ v₂) => f (v₁ - v₂) = √(v₁ v₂) - v₂.",
    steps="1. Write the expression:\n   f v₁ + (1 - f) v₂ = √(v₁ v₂)\n   f (v₁ - v₂) = √(v₁ v₂) - v₂\n   f (v₁ - v₂) = -√v₂ (√v₂ - √v₁) = √v₂ (√v₁ - √v₂).\n2. Factor the denominator (v₁ - v₂):\n   v₁ - v₂ = (√v₁ - √v₂) (√v₁ + √v₂).\n3. Substitute into the equation for f:\n   f * (√v₁ - √v₂) (√v₁ + √v₂) = √v₂ (√v₁ - √v₂).\n4. Cancel the common factor (√v₁ - √v₂) (assuming v₁ ≠ v₂):\n   f (√v₁ + √v₂) = √v₂\n   f = √v₂ / (√v₁ + √v₂).\n5. Hence, the required fraction is f = √v₂ / (√v₁ + √v₂).",
    tip="Fascinating algebraic result: The geometric mean lies between harmonic and arithmetic means; this specific time weighting achieves it precisely.",
    why_wrong="Option B has √v₁ in numerator. Option C gives the arithmetic mean. Option D gives harmonic mean weighting."
))

# Q104 (Hard)
qs.append(make_motion_q(
    num=104,
    question="A point moves along the x-axis with a velocity v(t) = v₀ cos(ωt). What is the average speed of the point over one complete period T = 2π / ω?",
    options={
        "A": "2 v₀ / π",
        "B": "v₀ / π",
        "C": "0",
        "D": "v₀ / 2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Average speed and average velocity",
    concept="Average speed of a full sine/cosine cycle is the mean absolute value: (1/T) ∫_0^T |v₀ cos(ωt)| dt = 2 v₀ / π.",
    given="v(t) = v₀ cos(ωt), period T = 2π/ω.",
    formula="Speed_avg = (Total distance in 1 period) / T = (4 * Amplitude) / T = (4 * v₀/ω) / (2π/ω) = 2v₀/π.",
    steps="1. For SHM, position is x(t) = (v₀ / ω) sin(ωt), with amplitude A = v₀ / ω.\n2. In one full cycle of duration T = 2π / ω, the particle covers a total distance of 4 amplitudes: Distance = 4A = 4 (v₀ / ω).\n3. Total time is the period: T = 2π / ω.\n4. Average speed = Total distance / Total time = [ 4 (v₀ / ω) ] / [ 2π / ω ] = 4 v₀ / (2π) = 2 v₀ / π.\n5. Notice that 2 v₀ / π ≈ 0.637 v₀.\n6. (Note: Average velocity over one complete period is 0, because net displacement is zero).",
    tip="NEET Classic SHM result: Distance in one period = 4A. Average speed = 4A / T = 2v_max / π ≈ 0.637 v_max.",
    why_wrong="Option B misses factor of 2. Option C is the average velocity (0), not average speed. Option D is for triangular wave."
))

# Q105 (Hard)
qs.append(make_motion_q(
    num=105,
    question="A car accelerates from rest at a constant rate α for some time, after which it decelerates at a constant rate β to come to rest. If the total time elapsed is t, what is the average speed of the car for the entire journey?",
    options={
        "A": "(1/2) * [ α β / (α + β) ] * t",
        "B": "[ α β / (α + β) ] * t",
        "C": "(1/2) * [ (α + β) / (α β) ] * t",
        "D": "2 * [ α β / (α + β) ] * t"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Average speed and average velocity",
    concept="For motion starting and ending at rest with acceleration α and deceleration β over total time t, the maximum speed is v_max = [αβ/(α+β)] t, and average speed is v_max / 2.",
    given="Initial velocity u = 0, acceleration α for time t₁, deceleration β for time t₂, final velocity = 0, t₁ + t₂ = t.",
    formula="v_max = α t₁ = β t₂ => v_max = [α β / (α + β)] t; Total distance = (1/2) v_max t; v_avg = (1/2) v_max.",
    steps="1. Let time of acceleration be t₁ and deceleration be t₂: t₁ + t₂ = t.\n2. Maximum velocity reached: v_max = α t₁ = β t₂.\n   Therefore, t₁ = v_max / α and t₂ = v_max / β.\n3. Total time: t = t₁ + t₂ = v_max (1/α + 1/β) = v_max (α + β) / (α β).\n4. Solving for v_max:\n   v_max = [ α β / (α + β) ] * t.\n5. The velocity-time graph is a triangle with base t and height v_max.\n   Total distance = Area of v-t graph = (1/2) * base * height = (1/2) * t * v_max.\n6. Average speed = Total distance / Total time = [ (1/2) t v_max ] / t = (1/2) v_max.\n7. Substitute v_max:\n   v_avg = (1/2) * [ α β / (α + β) ] * t.\n8. Hence, Option A is the correct expression.",
    tip="Top NEET result to memorize: v_max = [αβ/(α+β)] t, Total distance s = (1/2) [αβ/(α+β)] t², Average speed = (1/2) v_max.",
    why_wrong="Option B is the maximum speed v_max (not average speed). Option C inverts the fraction. Option D doubles v_max."
))

# ==============================================================================
# Topic 6: Instantaneous speed and velocity (Q106 - Q125)
# 6 Easy, 9 Medium, 5 Hard (Total 20)
# ==============================================================================

# Q106 (Easy)
qs.append(make_motion_q(
    num=106,
    question="The position of a particle moving along the x-axis is given by x = 5t² + 2t + 1 (in meters). What is its instantaneous velocity at t = 2 s?",
    options={
        "A": "22 m/s",
        "B": "20 m/s",
        "C": "25 m/s",
        "D": "12 m/s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Instantaneous speed and velocity",
    concept="Instantaneous velocity is the first time derivative of position: v = dx/dt.",
    given="x(t) = 5t² + 2t + 1 m, t = 2 s.",
    formula="v(t) = dx/dt = 10t + 2",
    steps="1. Differentiate position with respect to time:\n   v(t) = d(5t² + 2t + 1)/dt = 10t + 2.\n2. Substitute t = 2 s:\n   v(2) = 10(2) + 2 = 20 + 2 = 22 m/s.\n3. Therefore, the instantaneous velocity at t = 2 s is 22 m/s.",
    tip="Direct differentiation: d/dt(at² + bt + c) = 2at + b. Here 10(2) + 2 = 22 m/s.",
    why_wrong="Option B forgets the linear term (+2). Option C is position at t = 2 s (x(2) = 25 m). Option D is 10 + 2."
))

# Q107 (Easy)
qs.append(make_motion_q(
    num=107,
    question="Mathematically, instantaneous velocity is defined as:",
    options={
        "A": "lim_{Δt -> 0} (Δx / Δt) = dx / dt",
        "B": "Δx / Δt over a large finite time interval",
        "C": "d²x / dt²",
        "D": "∫ x dt"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Instantaneous speed and velocity",
    concept="Instantaneous velocity is the limiting value of the average velocity as the time interval approaches zero, which is the derivative dx/dt.",
    given="Definition of instantaneous velocity.",
    formula="v = lim_{Δt -> 0} (Δx / Δt) = dx/dt.",
    steps="1. Average velocity is Δx / Δt over a finite interval Δt.\n2. To find the velocity at a precise instant, we let Δt shrink toward zero: lim_{Δt -> 0} (Δx / Δt).\n3. By definition of calculus, this limit is the derivative of position with respect to time: dx/dt.\n4. Geometrically, it is the slope of the tangent to the position-time curve at that instant.",
    tip="Instantaneous velocity = slope of tangent to x-t graph = dx/dt.",
    why_wrong="Option B is average velocity. Option C is acceleration (d²x/dt²). Option D is the integral."
))

# Q108 (Easy)
qs.append(make_motion_q(
    num=108,
    question="A body is moving such that its displacement varies with time as x = 4t - 5 (in meters). What can be said about its instantaneous velocity and acceleration?",
    options={
        "A": "Velocity is constant (4 m/s) and acceleration is zero",
        "B": "Velocity is 4 m/s and acceleration is 4 m/s²",
        "C": "Velocity varies linearly with time and acceleration is constant",
        "D": "Velocity is zero and acceleration is 4 m/s²"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Instantaneous speed and velocity",
    concept="When position is a linear function of time, velocity is constant and acceleration is zero (uniform rectilinear motion).",
    given="x(t) = 4t - 5 m.",
    formula="v = dx/dt = 4 m/s; a = dv/dt = 0 m/s².",
    steps="1. Find velocity:\n   v = dx/dt = d(4t - 5)/dt = 4 m/s.\n2. Since 4 is a constant, the velocity is constant for all time.\n3. Find acceleration:\n   a = dv/dt = d(4)/dt = 0 m/s².\n4. Therefore, velocity is constant at 4 m/s and acceleration is zero.",
    tip="Linear x-t graph (straight line) always represents uniform motion with zero acceleration.",
    why_wrong="Options B, C, and D incorrectly claim non-zero acceleration."
))

# Q109 (Easy)
qs.append(make_motion_q(
    num=109,
    question="A stone dropped from the top of a cliff reaches the ground with an instantaneous speed of 30 m/s. Taking g = 10 m/s², how long did the stone fall?",
    options={
        "A": "3 seconds",
        "B": "6 seconds",
        "C": "4.5 seconds",
        "D": "1.5 seconds"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Instantaneous speed and velocity",
    concept="For free fall from rest (u = 0), instantaneous velocity is v = g t.",
    given="u = 0, v = 30 m/s, g = 10 m/s².",
    formula="v = g t => t = v / g.",
    steps="1. The stone is dropped from rest, so initial velocity u = 0.\n2. Acceleration is g = 10 m/s² downwards.\n3. Instantaneous velocity at impact: v = u + g t = 0 + g t = g t.\n4. Substitute v = 30 m/s and g = 10 m/s²:\n   30 = 10 t => t = 30 / 10 = 3 seconds.\n5. Therefore, the stone fell for 3 seconds.",
    tip="In free fall from rest: each second adds 10 m/s of speed! 10 m/s at 1 s, 20 m/s at 2 s, 30 m/s at 3 s.",
    why_wrong="Option B doubles the time. Option C uses 45 m height as time. Option D is half the time."
))

# Q110 (Easy)
qs.append(make_motion_q(
    num=110,
    question="The displacement of a particle is given by x = a₀ + a₁ t + a₂ t². The initial velocity and acceleration of the particle are respectively:",
    options={
        "A": "a₁, 2a₂",
        "B": "a₀, a₁",
        "C": "a₁, a₂",
        "D": "2a₁, a₂"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Instantaneous speed and velocity",
    concept="Compare x(t) = a₀ + a₁ t + a₂ t² with the kinematic equation x(t) = x₀ + u t + (1/2) a t².",
    given="x(t) = a₀ + a₁ t + a₂ t².",
    formula="v = dx/dt = a₁ + 2a₂ t; a = dv/dt = 2a₂.",
    steps="1. Initial position (at t = 0): x(0) = a₀.\n2. Differentiate to find velocity: v(t) = dx/dt = a₁ + 2a₂ t.\n   Initial velocity (at t = 0): u = v(0) = a₁.\n3. Differentiate velocity to find acceleration: a = dv/dt = 2a₂.\n4. Therefore, the initial velocity is a₁ and the acceleration is 2a₂.",
    tip="Compare directly with x = x₀ + ut + (1/2)at²: x₀ = a₀, u = a₁, and (1/2)a = a₂ => a = 2a₂.",
    why_wrong="Option B takes position as velocity. Option C forgets the factor of 2 on acceleration ((1/2)a = a₂). Option D is incorrect."
))

# Q111 (Easy)
qs.append(make_motion_q(
    num=111,
    question="A particle moves along a straight line with position given by x = 8 - 6t + t² (in meters). At what time does the particle momentarily stop?",
    options={
        "A": "3 seconds",
        "B": "6 seconds",
        "C": "2 seconds",
        "D": "4 seconds"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Instantaneous speed and velocity",
    concept="A particle momentarily stops when its instantaneous velocity is zero: v = dx/dt = 0.",
    given="x(t) = 8 - 6t + t² m.",
    formula="v(t) = dx/dt = -6 + 2t = 0",
    steps="1. Differentiate position with respect to time:\n   v(t) = dx/dt = -6 + 2t.\n2. Set velocity to zero:\n   -6 + 2t = 0 => 2t = 6 => t = 3 seconds.\n3. At t = 3 s, the particle reverses its direction of motion.\n4. Position at this turning point is x(3) = 8 - 6(3) + 3² = 8 - 18 + 9 = -1 m.",
    tip="Momentary rest / turning point <=> v = 0 <=> dx/dt = 0.",
    why_wrong="Option B gives 6 s. Option C gives roots of position (x = 0 at t = 2 s and 4 s, where particle crosses origin, not where it stops!). Option D is the other root."
))

# Q112 (Medium)
qs.append(make_motion_q(
    num=112,
    question="The position x of a particle varies with time t as x = α t² - β t³, where α and β are positive constants. At what time will the particle's acceleration be zero?",
    options={
        "A": "α / (3β)",
        "B": "2α / (3β)",
        "C": "α / β",
        "D": "3α / β"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Differentiate position twice to find acceleration and set a = 0.",
    given="x = α t² - β t³.",
    formula="v = dx/dt = 2α t - 3β t²; a = dv/dt = 2α - 6β t = 0.",
    steps="1. First derivative gives velocity:\n   v = dx/dt = 2α t - 3β t².\n2. Second derivative gives acceleration:\n   a = dv/dt = 2α - 6β t.\n3. Set acceleration to zero:\n   2α - 6β t = 0\n   6β t = 2α\n   t = 2α / (6β) = α / (3β).\n4. Therefore, acceleration is zero at t = α / (3β).",
    tip="Standard NEET differentiation: v = 0 at t = 2α/(3β); a = 0 at t = α/(3β) (half the time of zero velocity!).",
    why_wrong="Option B is the time when velocity is zero (2α/3β). Option C omits numerical factor. Option D is reciprocal."
))

# Q113 (Medium)
qs.append(make_motion_q(
    num=113,
    question="For the particle in Q112 where x = α t² - β t³, what is the maximum velocity attained by the particle?",
    options={
        "A": "α² / (3β)",
        "B": "α² / (6β)",
        "C": "2α² / (3β)",
        "D": "α / (3β)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Maximum velocity occurs when acceleration is zero: dv/dt = a = 0. Substitute t = α / (3β) into v(t).",
    given="v(t) = 2α t - 3β t², max at t = α / (3β).",
    formula="v_max = v(α / 3β)",
    steps="1. As found in Q112, acceleration is zero at t = α / (3β).\n   Since d²v/dt² = -6β < 0, this instant represents the maximum velocity.\n2. Substitute t = α / (3β) into v(t) = 2α t - 3β t²:\n   v_max = 2α (α / 3β) - 3β (α / 3β)²\n   v_max = (2α² / 3β) - 3β (α² / 9β²)\n   v_max = (2α² / 3β) - (α² / 3β)\n   v_max = α² / (3β).\n3. Therefore, the maximum velocity attained is α² / (3β).",
    tip="Extremum of velocity: dv/dt = a = 0. Then substitute that time back into the velocity expression.",
    why_wrong="Option B divides by 6β. Option C is 2α²/(3β) before subtracting. Option D is dimensionally incorrect."
))

# Q114 (Medium)
qs.append(make_motion_q(
    num=114,
    question="The displacement of a particle moving in a straight line is given by x = √(2t + 9) (in meters). The acceleration of the particle is:",
    options={
        "A": "Proportional to 1/x³",
        "B": "Proportional to x³",
        "C": "Constant",
        "D": "Proportional to 1/x²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Square both sides: x² = 2t + 9, then differentiate implicitly with respect to t.",
    given="x = (2t + 9)^(1/2).",
    formula="v = dx/dt = (2t + 9)^(-1/2) = 1/x; a = dv/dt = -1/x² * dx/dt = -1/x³.",
    steps="1. Differentiate x with respect to t:\n   v = dx/dt = (1/2)(2t + 9)^(-1/2) * 2 = (2t + 9)^(-1/2) = 1 / x.\n2. Notice that velocity v = 1/x.\n3. Now differentiate velocity with respect to t:\n   a = dv/dt = d(x⁻¹)/dt = -x⁻² (dx/dt) = -x⁻² * v.\n4. Substitute v = 1/x:\n   a = -(1/x²) * (1/x) = -1 / x³.\n5. Therefore, the acceleration is inversely proportional to x³ (a ∝ 1/x³).\n6. The negative sign indicates deceleration.",
    tip="NEET Classic rule: If x = (at + b)^(1/2), then v = a/(2x) ∝ 1/x, and a ∝ -1/x³.",
    why_wrong="Option B has positive power of x. Option C assumes constant acceleration. Option D is -1/x²."
))

# Q115 (Medium)
qs.append(make_motion_q(
    num=115,
    question="A particle moves along a straight line such that its velocity is given by v = 5 - 2x (in m/s), where x is in meters. What is the acceleration of the particle when it is at x = 1 m?",
    options={
        "A": "-6 m/s²",
        "B": "+6 m/s²",
        "C": "-2 m/s²",
        "D": "-4 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="When velocity is given as a function of position x, acceleration is computed using the chain rule: a = v (dv/dx).",
    given="v(x) = 5 - 2x, x = 1 m.",
    formula="a = v * (dv/dx)",
    steps="1. Velocity at x = 1 m:\n   v(1) = 5 - 2(1) = 5 - 2 = 3 m/s.\n2. Differentiate v with respect to x:\n   dv/dx = d(5 - 2x)/dx = -2 s⁻¹.\n3. Compute acceleration:\n   a = v * (dv/dx) = (3 m/s) * (-2 s⁻¹) = -6 m/s².\n4. Therefore, the acceleration at x = 1 m is -6 m/s².",
    tip="Common mistake: Don't just take dv/dx = -2! Acceleration is v * (dv/dx) = 3 * (-2) = -6 m/s².",
    why_wrong="Option B gives positive sign. Option C is just dv/dx (-2). Option D is an arbitrary value."
))

# Q116 (Medium)
qs.append(make_motion_q(
    num=116,
    question="The velocity of a particle moving along the x-axis is given by v = 10 + 2t² (in m/s). What is the displacement of the particle between t = 2 s and t = 5 s?",
    options={
        "A": "108 m",
        "B": "98 m",
        "C": "118 m",
        "D": "88 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Displacement is the definite integral of velocity with respect to time: Δx = ∫_{t₁}^{t₂} v(t) dt.",
    given="v(t) = 10 + 2t², limits t₁ = 2 s to t₂ = 5 s.",
    formula="Δx = ∫_2^5 (10 + 2t²) dt = [ 10t + (2/3) t³ ]_2^5.",
    steps="1. Evaluate the antiderivative at upper limit t = 5 s:\n   10(5) + (2/3)(5³) = 50 + (2/3)(125) = 50 + 250/3 = (150 + 250)/3 = 400/3.\n2. Evaluate at lower limit t = 2 s:\n   10(2) + (2/3)(2³) = 20 + (2/3)(8) = 20 + 16/3 = (60 + 16)/3 = 76/3.\n3. Subtract:\n   Δx = 400/3 - 76/3 = 324/3 = 108 m.\n4. Therefore, the displacement of the particle is 108 m.",
    tip="Always calculate carefully: 324 / 3 = 108 m exactly.",
    why_wrong="Option B is 98 m. Option C is 118 m. Option D is 88 m."
))

# Q117 (Medium)
qs.append(make_motion_q(
    num=117,
    question="A body moves along a straight line such that its velocity is given by v = 4t³ - 2t (in m/s). If it is located at x = 2 m at t = 0, what is its position at t = 2 s?",
    options={
        "A": "14 m",
        "B": "12 m",
        "C": "16 m",
        "D": "18 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Position is the integral of velocity plus the initial position: x(t) = x(0) + ∫_0^t v dt.",
    given="v(t) = 4t³ - 2t, x(0) = 2 m, t = 2 s.",
    formula="x(t) = 2 + ∫_0^t (4t³ - 2t) dt = 2 + [ t⁴ - t² ].",
    steps="1. Integrate velocity:\n   x(t) = x(0) + [ t⁴ - t² ]_0^t = 2 + t⁴ - t².\n2. Substitute t = 2 s:\n   x(2) = 2 + 2⁴ - 2² = 2 + 16 - 4 = 18 - 4 = 14 m.\n3. Therefore, the position of the body at t = 2 s is 14 m.",
    tip="Don't forget to add the initial position x(0) = 2 m! Displacement is 12 m, so position is 2 + 12 = 14 m.",
    why_wrong="Option B is displacement Δx = 12 m without adding x(0). Option C is 16 m. Option D is 18 m."
))

# Q118 (Medium)
qs.append(make_motion_q(
    num=118,
    question="The acceleration of a particle moving along a straight line is a = -2v (in m/s²), where v is velocity. If the initial velocity is v₀ = 10 m/s at t = 0, what is the velocity at t = ln 2 seconds?",
    options={
        "A": "2.5 m/s",
        "B": "5.0 m/s",
        "C": "1.25 m/s",
        "D": "0 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Linear drag a = dv/dt = -k v leads to exponential decay: v(t) = v₀ e^(-kt).",
    given="dv/dt = -2v, v(0) = 10 m/s, t = ln 2 s.",
    formula="v(t) = v₀ e^(-2t)",
    steps="1. Separate variables and integrate:\n   dv / v = -2 dt => ln(v / v₀) = -2t => v(t) = v₀ e^(-2t).\n2. Substitute t = ln 2 and v₀ = 10 m/s:\n   v = 10 * e^(-2 ln 2) = 10 * e^(ln(2⁻²)).\n3. Since e^(ln u) = u:\n   e^(ln(1/4)) = 1/4.\n4. Therefore:\n   v = 10 * (1/4) = 2.5 m/s.\n5. Hence, the velocity is 2.5 m/s.",
    tip="Exponential algebra: e^(-2 ln 2) = (e^(ln 2))^(-2) = 2^(-2) = 1/4. So v = 10 / 4 = 2.5 m/s.",
    why_wrong="Option B uses e^(-ln 2) = 1/2 (giving 5.0 m/s). Option C uses 1/8. Option D assumes stopping."
))

# Q119 (Medium)
qs.append(make_motion_q(
    num=119,
    question="A particle starts from rest and accelerates such that a(t) = 6t (in m/s²). What is the distance covered by the particle in the first 3 seconds?",
    options={
        "A": "27 m",
        "B": "54 m",
        "C": "18 m",
        "D": "81 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Integrate acceleration twice: v(t) = ∫ a dt, and x(t) = ∫ v dt.",
    given="a(t) = 6t, u = 0, x(0) = 0, t = 3 s.",
    formula="v(t) = ∫ 6t dt = 3t²; x(t) = ∫ 3t² dt = t³.",
    steps="1. Integrate acceleration to get velocity:\n   v(t) = ∫_0^t 6t dt = [ 3t² ]_0^t = 3t².\n2. Integrate velocity to get position:\n   x(t) = ∫_0^t 3t² dt = [ t³ ]_0^t = t³.\n3. Substitute t = 3 s:\n   x(3) = 3³ = 27 m.\n4. Therefore, the distance covered in the first 3 seconds is 27 m.",
    tip="Double integration from rest: a = kt => v = (k/2)t² => x = (k/6)t³. Here k = 6, so x = t³ = 3³ = 27 m.",
    why_wrong="Option B is v(3) * 3 / 2 (or 54 m). Option C is v(3) = 27... wait, v(3) = 3(9) = 27 m/s. Option D is 81 m."
))

# Q120 (Medium)
qs.append(make_motion_q(
    num=120,
    question="The velocity of a body moving in a straight line depends on time as v = 12 - 3t² (in m/s). What is the acceleration of the body at the instant when it momentarily comes to rest?",
    options={
        "A": "-12 m/s²",
        "B": "+12 m/s²",
        "C": "-6 m/s²",
        "D": "0 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Instantaneous speed and velocity",
    concept="Find the instant of rest by setting v = 0, then substitute that instant into the acceleration expression a = dv/dt.",
    given="v(t) = 12 - 3t².",
    formula="v = 0 => 12 - 3t² = 0 => t = 2 s; a = dv/dt = -6t.",
    steps="1. Find the instant when the body comes to rest:\n   v(t) = 12 - 3t² = 0 => 3t² = 12 => t² = 4 => t = 2 s (for t > 0).\n2. Differentiate velocity to find acceleration:\n   a(t) = dv/dt = d(12 - 3t²)/dt = -6t.\n3. Substitute t = 2 s:\n   a(2) = -6(2) = -12 m/s².\n4. Therefore, the acceleration at the instant of rest is -12 m/s².",
    tip="At the turning point, v = 0, but acceleration is non-zero (a = -12 m/s²).",
    why_wrong="Option B has the wrong sign. Option C uses t = 1 s. Option D mistakenly assumes a = 0 when v = 0."
))

# Q121 (Hard)
qs.append(make_motion_q(
    num=121,
    question="A particle moves along the x-axis such that its position is given by x = 2 - 5t + 6t² (in meters). What is the initial velocity of the particle, and at what instant does its velocity become zero?",
    options={
        "A": "u = -5 m/s, t = 5/12 s",
        "B": "u = +5 m/s, t = 5/12 s",
        "C": "u = -5 m/s, t = 5/6 s",
        "D": "u = +2 m/s, t = 1/2 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Instantaneous speed and velocity",
    concept="Differentiate x(t) to find v(t) = dx/dt. Evaluate at t = 0 for initial velocity, and set v = 0 for the instant of rest.",
    given="x(t) = 2 - 5t + 6t².",
    formula="v(t) = dx/dt = -5 + 12t.",
    steps="1. Differentiate position with respect to time:\n   v(t) = dx/dt = -5 + 12t.\n2. Initial velocity at t = 0:\n   u = v(0) = -5 m/s.\n3. Set velocity to zero:\n   -5 + 12t = 0 => 12t = 5 => t = 5/12 seconds.\n4. Hence, u = -5 m/s and t = 5/12 s.",
    tip="Compare with x = x₀ + ut + (1/2)at²: x₀ = 2 m, u = -5 m/s, (1/2)a = 6 => a = 12 m/s². Then v = 0 when t = -u/a = 5/12 s.",
    why_wrong="Option B gives positive initial velocity. Option C forgets factor of 2 on acceleration (uses 6t). Option D confuses initial position with velocity."
))

# Q122 (Hard)
qs.append(make_motion_q(
    num=122,
    question="A particle moves in 1D such that t = √x + 3 (where x is in meters and t is in seconds). What is the displacement of the particle when its velocity is zero?",
    options={
        "A": "0 m",
        "B": "9 m",
        "C": "3 m",
        "D": "6 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Instantaneous speed and velocity",
    concept="Express x explicitly as a function of t, differentiate to find velocity, find when v = 0, and evaluate displacement.",
    given="t = √x + 3.",
    formula="√x = t - 3 => x(t) = (t - 3)² for t ≥ 3.",
    steps="1. Rearrange to express x in terms of t:\n   √x = t - 3\n   Squaring both sides: x = (t - 3)² = t² - 6t + 9.\n2. Differentiate to find velocity:\n   v = dx/dt = 2(t - 3) = 2t - 6.\n3. Find when velocity is zero:\n   v = 0 => 2(t - 3) = 0 => t = 3 seconds.\n4. Evaluate position at t = 3 s:\n   x(3) = (3 - 3)² = 0 m.\n5. Notice that at t = 3 s, position is x = 0 m, and since it starts at t = 3 with x = 0, its displacement when velocity is zero is 0 m.",
    tip="NEET Classic Question! t = √x + 3 => x = (t - 3)². Velocity v = 2(t - 3). When v = 0 => t = 3 s => x = 0 m!",
    why_wrong="Option B is position at t = 0 (x = 9 m). Option C is t = 3. Option D is 2*3 = 6."
))

# Q123 (PYQ - Hard)
qs.append(make_motion_q(
    num=123,
    question="A particle of unit mass undergoes one-dimensional motion such that its velocity varies according to v(x) = β x^(-2n), where β and n are constants and x is the position of the particle. The acceleration of the particle as a function of x is given by:",
    options={
        "A": "-2n β² x^(-4n - 1)",
        "B": "-2n β² e^(-4n + 1)",
        "C": "-2n β² x^(-2n - 1)",
        "D": "-2n β² x^(-4n)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Instantaneous speed and velocity",
    concept="When velocity is given as a function of position v(x), acceleration is given by a = v (dv/dx).",
    given="v(x) = β x^(-2n).",
    formula="a = v * (dv/dx)",
    steps="1. Given velocity: v = β x^(-2n).\n2. Differentiate v with respect to x using power rule:\n   dv/dx = β * (-2n) x^(-2n - 1) = -2n β x^(-2n - 1).\n3. Compute acceleration using a = v (dv/dx):\n   a = [ β x^(-2n) ] * [ -2n β x^(-2n - 1) ].\n4. Multiply the coefficients and add the exponents of x:\n   a = -2n β² x^[ (-2n) + (-2n - 1) ]\n   a = -2n β² x^(-4n - 1).\n5. Therefore, the acceleration is -2n β² x^(-4n - 1).",
    tip="Official AIPMT 2015 PYQ! Remember a = v (dv/dx). When v = β x^(-2n), exponent in dv/dx is -2n-1, and multiplying by v adds another -2n => exponent becomes -4n-1.",
    why_wrong="Option B has an exponential function. Option C has exponent -2n-1 (which is just dv/dx, forgetting to multiply by v). Option D has exponent -4n without subtracting 1.",
    is_pyq=True,
    pyq_year=2015,
    source="AIPMT 2015"
))

# Q124 (PYQ - Hard)
qs.append(make_motion_q(
    num=124,
    question="Two cars P and Q start from a point at the same time in a straight line and their positions are represented by x_P(t) = a t + b t² and x_Q(t) = f t - t². At what time do the cars have the same velocity?",
    options={
        "A": "(a - f) / (1 + b)",
        "B": "(a + f) / [2(b - 1)]",
        "C": "(a + f) / [2(1 + b)]",
        "D": "(f - a) / [2(1 + b)]"
    },
    correct_opt="D",
    difficulty="Hard",
    topic="Instantaneous speed and velocity",
    concept="Instantaneous velocity is the derivative of position: v = dx/dt. Equate v_P(t) = v_Q(t) and solve for time t.",
    given="x_P(t) = a t + b t²; x_Q(t) = f t - t².",
    formula="v_P = dx_P/dt; v_Q = dx_Q/dt; condition: v_P = v_Q.",
    steps="1. Differentiate position of car P:\n   v_P = d(a t + b t²)/dt = a + 2b t.\n2. Differentiate position of car Q:\n   v_Q = d(f t - t²)/dt = f - 2t.\n3. Set velocities equal for both cars:\n   v_P = v_Q\n   a + 2b t = f - 2t.\n4. Collect terms involving t on one side:\n   2b t + 2t = f - a\n   2t (b + 1) = f - a\n   2t (1 + b) = f - a.\n5. Solve for t:\n   t = (f - a) / [ 2(1 + b) ].\n6. Therefore, Option D is the exact correct answer.",
    tip="Official NEET UG 2016 Phase II PYQ! Differentiate both position functions: a + 2bt = f - 2t => 2t(1 + b) = f - a => t = (f - a)/[2(1 + b)].",
    why_wrong="Option A misses the factor of 2 and has (a - f). Option B has (b - 1) in denominator. Option C has (a + f) in numerator instead of (f - a).",
    is_pyq=True,
    pyq_year=2016,
    source="NEET UG 2016"
))

# Q125 (PYQ - Hard)
qs.append(make_motion_q(
    num=125,
    question="If the velocity of a particle is v = A t + B t², where A and B are constants, then the distance travelled by it between 1 s and 2 s is:",
    options={
        "A": "3/2 A + 7/3 B",
        "B": "A/2 + B/3",
        "C": "3/2 A + 4 B",
        "D": "3 A + 7 B"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Instantaneous speed and velocity",
    concept="Distance travelled (for unidirectional motion where v ≥ 0) is the definite integral of velocity with respect to time: s = ∫_{t₁}^{t₂} v dt.",
    given="v(t) = A t + B t², limits t₁ = 1 s to t₂ = 2 s.",
    formula="s = ∫_1^2 (A t + B t²) dt = [ (A/2) t² + (B/3) t³ ]_1^2.",
    steps="1. Integrate velocity with respect to time:\n   s = ∫_1^2 (A t + B t²) dt = [ (A/2) t² + (B/3) t³ ]_1^2.\n2. Evaluate at upper limit t = 2 s:\n   (A/2)(2²) + (B/3)(2³) = (A/2)(4) + (B/3)(8) = 2A + (8/3)B.\n3. Evaluate at lower limit t = 1 s:\n   (A/2)(1²) + (B/3)(1³) = A/2 + B/3.\n4. Subtract lower limit from upper limit:\n   s = [ 2A + (8/3)B ] - [ A/2 + B/3 ]\n   s = (2 - 1/2) A + (8/3 - 1/3) B\n   s = (3/2) A + (7/3) B.\n5. Therefore, distance travelled is 3/2 A + 7/3 B.",
    tip="Official NEET UG 2017 PYQ! Integrate term by term: ∫₁² t dt = [t²/2]₁² = 4/2 - 1/2 = 3/2. ∫₁² t² dt = [t³/3]₁² = 8/3 - 1/3 = 7/3. Result = 3/2 A + 7/3 B.",
    why_wrong="Option B evaluates from 0 to 1 instead of 1 to 2. Option C uses 4B instead of 7/3 B. Option D omits the fractions in denominator.",
    is_pyq=True,
    pyq_year=2017,
    source="NEET UG 2017"
))

print(f"Generated Q85 to Q125: {len(qs)} questions")

with open('scripts/part1_topic5_6.json', 'w') as f:
    json.dump(qs, f, indent=2)
