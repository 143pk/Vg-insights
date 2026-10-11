import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 17: Relative velocity along a straight line (Q376 to Q395, 20 questions)
# Difficulties: 5 Easy, 10 Medium, 5 Hard
# ==============================================================================

# Q376 - Easy
qs.append(make_motion_q(
    num=376,
    question="Two trains A and B are moving along parallel tracks in the same direction with velocities 72 km/h and 36 km/h respectively. The relative velocity of train A with respect to train B is:",
    options={
        "A": "36 km/h in the direction of motion",
        "B": "108 km/h in the direction of motion",
        "C": "36 km/h opposite to the direction of motion",
        "D": "72 km/h in the direction of motion"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity along a straight line",
    concept="Relative velocity of object A with respect to object B is v_AB = v_A - v_B. When moving in the same direction, subtract speeds.",
    given="v_A = +72 km/h, v_B = +36 km/h (same direction).",
    formula="v_AB = v_A - v_B",
    steps=(
        "1. Let the forward direction be positive.\n"
        "2. Velocity of train A: v_A = +72 km/h.\n"
        "3. Velocity of train B: v_B = +36 km/h.\n"
        "4. Relative velocity of A with respect to B: v_AB = v_A - v_B = 72 - 36 = +36 km/h (in the direction of motion)."
    ),
    tip="Same direction: subtract speeds (|v₁ - v₂|). Opposite directions: add speeds (v₁ + v₂).",
    why_wrong="108 km/h is the relative velocity when moving in OPPOSITE directions."
))

# Q377 - Easy
qs.append(make_motion_q(
    num=377,
    question="Two cars are moving towards each other on a straight road with speeds 60 km/h and 40 km/h. The magnitude of relative velocity of one car with respect to the other is:",
    options={
        "A": "100 km/h",
        "B": "20 km/h",
        "C": "50 km/h",
        "D": "24 km/h"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity along a straight line",
    concept="When two objects move towards each other (opposite directions), their relative velocity is the sum of their individual speeds: v_rel = v₁ + v₂.",
    given="v₁ = +60 km/h, v₂ = -40 km/h (approaching).",
    formula="v_rel = v₁ - (-v₂) = v₁ + v₂",
    steps=(
        "1. Car 1 moves in the positive direction: v₁ = +60 km/h.\n"
        "2. Car 2 moves in the opposite direction (towards car 1): v₂ = -40 km/h.\n"
        "3. Relative velocity of car 1 with respect to car 2: v₁₂ = v₁ - v₂ = 60 - (-40) = 100 km/h.\n"
        "4. The magnitude is 100 km/h."
    ),
    tip="When objects approach each other or move in opposite directions, relative speed is the sum of speeds.",
    why_wrong="20 km/h is the relative speed if they were moving in the same direction."
))

# Q378 - Easy
qs.append(make_motion_q(
    num=378,
    question="A passenger sitting in a train moving at 50 km/h observes another train moving parallel to it at 50 km/h in the same direction. To the passenger, the second train appears to be:",
    options={
        "A": "At rest",
        "B": "Moving forward at 100 km/h",
        "C": "Moving backward at 50 km/h",
        "D": "Moving forward at 50 km/h"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity along a straight line",
    concept="v_rel = v₂ - v₁ = 50 - 50 = 0 km/h. When velocities are identical, relative velocity is zero, so the object appears stationary.",
    given="v₁ = 50 km/h, v₂ = 50 km/h (same direction).",
    formula="v_rel = v₂ - v₁ = 0",
    steps=(
        "1. Velocity of observer's train: v₁ = 50 km/h.\n"
        "2. Velocity of observed train: v₂ = 50 km/h.\n"
        "3. Relative velocity: v₂₁ = v₂ - v₁ = 50 - 50 = 0 km/h.\n"
        "4. Since relative velocity is zero, the second train appears stationary (at rest) to the observer."
    ),
    tip="Equal velocities in the same direction mean zero relative velocity.",
    why_wrong="100 km/h would occur if they were moving in opposite directions."
))

# Q379 - Easy
qs.append(make_motion_q(
    num=379,
    question="A 150 m long train is moving with a uniform velocity of 45 km/h. The time taken by the train to cross an electric pole is:",
    options={
        "A": "12 s",
        "B": "15 s",
        "C": "10 s",
        "D": "18 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity along a straight line",
    concept="Convert speed: 45 km/h = 45 × 5/18 = 12.5 m/s. Distance to cross a stationary pole is the length of the train L = 150 m. Time t = L / v.",
    given="L = 150 m, v = 45 km/h = 12.5 m/s.",
    formula="t = L / v",
    steps=(
        "1. Convert velocity to m/s: v = 45 × (5 / 18) = 2.5 × 5 = 12.5 m/s.\n"
        "2. To cross a stationary point object (pole), the train must displace by its own length: s = 150 m.\n"
        "3. Time taken: t = s / v = 150 m / 12.5 m/s = 12 s."
    ),
    tip="Crossing a pole/person: distance = Length of train. Crossing a platform/bridge: distance = Length of train + Length of platform.",
    why_wrong="15 s results from using 10 m/s instead of 12.5 m/s."
))

# Q380 - Easy
qs.append(make_motion_q(
    num=380,
    question="Two trains 100 m and 150 m long are moving in opposite directions on parallel tracks with speeds 36 km/h and 54 km/h respectively. The time taken by them to completely cross each other is:",
    options={
        "A": "10 s",
        "B": "15 s",
        "C": "20 s",
        "D": "8 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Relative velocity along a straight line",
    concept="Total distance to cross = L₁ + L₂ = 100 + 150 = 250 m. Relative speed = v₁ + v₂ = (36 + 54) km/h = 90 km/h = 25 m/s. Time t = 250 / 25 = 10 s.",
    given="L₁ = 100 m, L₂ = 150 m, v₁ = 36 km/h = 10 m/s, v₂ = 54 km/h = 15 m/s (opposite directions).",
    formula="t = (L₁ + L₂) / (v₁ + v₂)",
    steps=(
        "1. Total relative distance to clear each other: s_rel = L₁ + L₂ = 100 m + 150 m = 250 m.\n"
        "2. Speeds in m/s: v₁ = 36 × (5/18) = 10 m/s; v₂ = 54 × (5/18) = 15 m/s.\n"
        "3. Since they move in opposite directions, relative speed is: v_rel = v₁ + v₂ = 10 + 15 = 25 m/s.\n"
        "4. Time to cross: t = s_rel / v_rel = 250 m / 25 m/s = 10 s."
    ),
    tip="For two trains crossing in opposite directions: Time = (L₁ + L₂) / (v₁ + v₂).",
    why_wrong="15 s or 20 s arise from forgetting one train's length or subtracting speeds."
))

# Q381 - Medium
qs.append(make_motion_q(
    num=381,
    question="A 120 m long train moving at 20 m/s overtakes a 80 m long train moving at 10 m/s in the same direction on parallel tracks. How long does the overtaking take?",
    options={
        "A": "20 s",
        "B": "10 s",
        "C": "30 s",
        "D": "15 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="Total distance to overtake completely = L₁ + L₂ = 120 + 80 = 200 m. Relative speed = v₁ - v₂ = 20 - 10 = 10 m/s. Time = 200 / 10 = 20 s.",
    given="L₁ = 120 m, L₂ = 80 m, v₁ = 20 m/s, v₂ = 10 m/s (same direction).",
    formula="t = (L₁ + L₂) / (v₁ - v₂)",
    steps=(
        "1. To completely overtake, the faster train must gain a distance equal to the sum of lengths of both trains: s_rel = L₁ + L₂ = 120 + 80 = 200 m.\n"
        "2. Relative speed in the same direction: v_rel = v₁ - v₂ = 20 m/s - 10 m/s = 10 m/s.\n"
        "3. Time taken to overtake: t = s_rel / v_rel = 200 m / 10 m/s = 20 s."
    ),
    tip="Overtaking in same direction: Time = (L₁ + L₂) / (v₁ - v₂).",
    why_wrong="10 s would only cover 100 m of relative distance."
))

# Q382 - Medium
qs.append(make_motion_q(
    num=382,
    question="A man walks on a straight horizontal road at 3 km/h. Rain appears to him to fall vertically downwards with a speed of 4 km/h. The actual speed of the rain with respect to the ground is:",
    options={
        "A": "5 km/h",
        "B": "7 km/h",
        "C": "1 km/h",
        "D": "√7 km/h"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="v_rain/man = v_rain - v_man => v_rain = v_rain/man + v_man. Since v_rain/man is purely vertical (-4 ĵ) and v_man is horizontal (+3 î), v_rain = 3 î - 4 ĵ. Magnitude = √(3² + 4²) = 5 km/h.",
    given="v_man = 3 km/h (horizontal), v_rain/man = 4 km/h (vertically downward).",
    formula="|v_rain| = √[v_man² + v_rain/man²]",
    steps=(
        "1. Relative velocity formula: v_RM = v_R - v_M => v_R = v_RM + v_M.\n"
        "2. Given: v_M = 3 î (horizontal) and v_RM = -4 ĵ (vertical).\n"
        "3. True velocity of rain: v_R = 3 î - 4 ĵ.\n"
        "4. Magnitude of rain's true velocity: |v_R| = √(3² + (-4)²) = √(9 + 16) = √25 = 5 km/h."
    ),
    tip="Classic 3-4-5 right triangle in rain-man kinematics problems!",
    why_wrong="7 km/h simply adds scalar speeds 3 + 4, ignoring that they are perpendicular."
))

# Q383 - Medium
qs.append(make_motion_q(
    num=383,
    question="A bus is moving with a speed of 10 m/s on a straight road. A scooterist wishes to overtake the bus in 100 s. If the bus is 1 km ahead, with what minimum speed should the scooterist chase the bus?",
    options={
        "A": "20 m/s",
        "B": "15 m/s",
        "C": "25 m/s",
        "D": "30 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="Initial separation d = 1000 m. Time t = 100 s. Relative speed required: v_rel = d / t = 1000 / 100 = 10 m/s. Scooterist speed v_s = v_bus + v_rel = 10 + 10 = 20 m/s.",
    given="v_bus = 10 m/s, separation d = 1 km = 1000 m, t = 100 s.",
    formula="v_rel = d / t; v_scooter = v_bus + v_rel",
    steps=(
        "1. Distance separation to close: d = 1 km = 1000 m.\n"
        "2. Required time: t = 100 s.\n"
        "3. Required relative speed: v_rel = d / t = 1000 m / 100 s = 10 m/s.\n"
        "4. Since scooter is chasing the bus in the same direction: v_rel = v_scooter - v_bus.\n"
        "5. 10 m/s = v_scooter - 10 m/s => v_scooter = 10 + 10 = 20 m/s."
    ),
    tip="Relative speed required = Distance / Time. Then add the target's speed to find the pursuer's speed.",
    why_wrong="10 m/s is the relative speed, which equals the bus speed, so the scooterist would only maintain distance without catching up."
))

# Q384 - Medium
qs.append(make_motion_q(
    num=384,
    question="Two parallel rail tracks run north-south. Train A moves north with a speed of 54 km/h and train B moves south with a speed of 90 km/h. What is the velocity of train B with respect to train A? (taking north as positive)",
    options={
        "A": "-40 m/s",
        "B": "+40 m/s",
        "C": "-10 m/s",
        "D": "+10 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="Convert speeds: v_A = +54 × 5/18 = +15 m/s (north). v_B = -90 × 5/18 = -25 m/s (south). Relative velocity v_BA = v_B - v_A = -25 - (+15) = -40 m/s.",
    given="v_A = +54 km/h = +15 m/s (north), v_B = -90 km/h = -25 m/s (south).",
    formula="v_BA = v_B - v_A",
    steps=(
        "1. Let North be the positive direction and South be negative.\n"
        "2. Velocity of train A: v_A = +54 km/h = +54 × (5/18) = +15 m/s.\n"
        "3. Velocity of train B: v_B = -90 km/h = -90 × (5/18) = -25 m/s.\n"
        "4. Velocity of B with respect to A: v_BA = v_B - v_A = (-25) - (+15) = -40 m/s (40 m/s south)."
    ),
    tip="NCERT Textbook Example 3.9! Always assign signs (+ for North, - for South) before computing relative velocity.",
    why_wrong="+40 m/s is the velocity of train A with respect to train B (v_AB), not v_BA."
))

# Q385 - Medium
qs.append(make_motion_q(
    num=385,
    question="In the previous setup (train A moving north at 15 m/s, train B moving south at 25 m/s), a monkey runs on the roof of train A against its motion with a velocity of 18 km/h with respect to train A. What is the velocity of the monkey as observed by a person standing on the ground?",
    options={
        "A": "+10 m/s (North)",
        "B": "-10 m/s (South)",
        "C": "+20 m/s (North)",
        "D": "-5 m/s (South)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="v_monkey/ground = v_monkey/train + v_train/ground. Since the monkey runs against the train's motion (south), v_monkey/train = -18 km/h = -5 m/s. Then v_monkey/ground = -5 + 15 = +10 m/s.",
    given="v_train = +15 m/s (North), v_monkey/train = -18 km/h = -5 m/s (South).",
    formula="v_M = v_MT + v_T",
    steps=(
        "1. Let North be positive.\n"
        "2. Velocity of train A relative to ground: v_T = +15 m/s.\n"
        "3. Monkey runs against train motion (towards South): v_MT = -18 × (5/18) = -5 m/s.\n"
        "4. Velocity of monkey relative to ground:\n"
        "   v_M = v_MT + v_T = (-5 m/s) + (+15 m/s) = +10 m/s (North)."
    ),
    tip="NCERT Textbook Problem: Relative velocity addition: v_ground = v_rel + v_carrier.",
    why_wrong="20 m/s would apply if the monkey ran in the same direction as the train."
))

# Q386 - Medium
qs.append(make_motion_q(
    num=386,
    question="A police van moving on a highway with a speed of 30 km/h fires a bullet at a thief's car speeding away in the same direction with a speed of 192 km/h. If the muzzle speed of the bullet is 150 m/s, with what speed does the bullet hit the thief's car?",
    options={
        "A": "105 m/s",
        "B": "150 m/s",
        "C": "95 m/s",
        "D": "120 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="Speed of bullet relative to ground = v_van + v_muzzle. v_van = 30 × 5/18 = 25/3 m/s. v_thief = 192 × 5/18 = 160/3 m/s. Bullet speed w.r.t thief = v_bullet - v_thief = (25/3 + 150) - 160/3 = 150 - 135/3 = 150 - 45 = 105 m/s.",
    given="v_van = 30 km/h, v_thief = 192 km/h, v_muzzle = 150 m/s.",
    formula="v_hit = v_bullet - v_thief = (v_van + v_muzzle) - v_thief",
    steps=(
        "1. Convert van speed to m/s: v_van = 30 × (5/18) = 25/3 m/s.\n"
        "2. Convert thief's car speed to m/s: v_thief = 192 × (5/18) = 160/3 m/s.\n"
        "3. Speed of bullet relative to ground: v_bullet = v_van + v_muzzle = 25/3 + 150 m/s.\n"
        "4. Speed with which bullet hits thief's car:\n"
        "   v_rel = v_bullet - v_thief = (25/3 + 150) - 160/3 = 150 - (160/3 - 25/3) = 150 - (135/3) = 150 - 45 = 105 m/s."
    ),
    tip="NCERT Example 3.10! The muzzle speed is already relative to the firing gun/van, so add van speed first, then subtract thief's speed.",
    why_wrong="150 m/s ignores the velocities of the van and thief entirely."
))

# Q387 - Medium
qs.append(make_motion_q(
    num=387,
    question="A swimmer can swim with a speed of 4 km/h in still water. He crosses a river of width 1 km that flows at a constant speed of 3 km/h. To reach the point directly opposite on the other bank, how long will he take?",
    options={
        "A": "1 / √7 hours",
        "B": "1 / 5 hours",
        "C": "1 / 4 hours",
        "D": "1 / 3 hours"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="To cross directly opposite (shortest path), the resultant velocity must be perpendicular to the river bank: v_resultant = √(v_swimmer² - v_river²) = √(4² - 3²) = √7 km/h. Time t = width / v_resultant = 1 / √7 hours.",
    given="v_s = 4 km/h, v_r = 3 km/h, width d = 1 km.",
    formula="v_net = √(v_s² - v_r²); t = d / v_net",
    steps=(
        "1. To travel directly across to the opposite bank, the swimmer must head upstream at an angle θ such that the river flow is canceled: v_s sin θ = v_r.\n"
        "2. The net speed perpendicular to the river bank is: v_net = √(v_s² - v_r²) = √(4² - 3²) = √(16 - 9) = √7 km/h.\n"
        "3. Time taken to cross the 1 km wide river: t = d / v_net = 1 / √7 hours."
    ),
    tip="Shortest path across river requires v_s > v_r, and net velocity is √(v_s² - v_r²).",
    why_wrong="1/5 hours is 12 minutes, which would result from hypotenuse addition √(4² + 3²) = 5 km/h (shortest time, not shortest path)."
))

# Q388 - Medium
qs.append(make_motion_q(
    num=388,
    question="In the river problem (width 1 km, swimmer speed in still water 4 km/h, river speed 3 km/h), what is the minimum possible time required to cross the river?",
    options={
        "A": "15 minutes",
        "B": "20 minutes",
        "C": "12 minutes",
        "D": "25 minutes"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="Minimum time to cross occurs when the swimmer directs full swimming speed directly across the river (perpendicular to bank): t_min = width / v_swimmer = 1 km / 4 km/h = 1/4 h = 15 minutes.",
    given="Width d = 1 km, v_swimmer = 4 km/h, v_river = 3 km/h.",
    formula="t_min = d / v_s",
    steps=(
        "1. To minimize crossing time, the velocity component perpendicular to the river bank must be maximized.\n"
        "2. Maximum perpendicular velocity is the swimmer's full speed in still water: v_perp = v_s = 4 km/h.\n"
        "3. Minimum crossing time: t_min = width / v_s = 1 km / 4 km/h = 0.25 hours = 15 minutes.\n"
        "4. (In this case, the swimmer drifts downstream by distance x = v_r × t_min = 3 × 0.25 = 0.75 km)."
    ),
    tip="Shortest time condition: Head directly across! Time = d / v_swimmer (river flow speed does not affect crossing time).",
    why_wrong="12 minutes uses √(4² + 3²) = 5 km/h, but the swimmer cannot swim at 5 km/h perpendicular to the banks."
))

# Q389 - Medium
qs.append(make_motion_q(
    num=389,
    question="Two cars A and B are moving on straight parallel roads in the same direction. Car A moves at constant speed 20 m/s. Car B starts from rest at the same instant from the same position with acceleration 2 m/s². The relative velocity of car B with respect to car A when car B overtakes car A is:",
    options={
        "A": "+20 m/s",
        "B": "+40 m/s",
        "C": "0 m/s",
        "D": "+10 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="Catch up when displacements are equal: s_A = s_B => 20 t = 1/2 (2) t² => t² - 20t = 0 => t = 20 s. Velocity of B at t = 20 s: v_B = at = 2(20) = 40 m/s. Relative velocity v_BA = v_B - v_A = 40 - 20 = +20 m/s.",
    given="v_A = 20 m/s (constant), u_B = 0, a_B = 2 m/s².",
    formula="s_A = s_B => v_A t = (1/2) a_B t²; v_BA = v_B - v_A",
    steps=(
        "1. Displacements at overtake: s_A = 20t and s_B = (1/2)(2)t² = t².\n"
        "2. Equating: t² = 20t => t = 20 s (excluding t = 0).\n"
        "3. Velocity of car B at overtake: v_B = u_B + a_B t = 0 + 2(20) = 40 m/s.\n"
        "4. Relative velocity of B with respect to A: v_BA = v_B - v_A = 40 m/s - 20 m/s = +20 m/s."
    ),
    tip="When an accelerating car overtakes a constant speed car from the same start, its speed is EXACTLY DOUBLE the constant speed: v_B = 2 v_A!",
    why_wrong="0 m/s is the relative velocity when separation is MAXIMUM, not when overtaking occurs."
))

# Q390 - Medium
qs.append(make_motion_q(
    num=390,
    question="In the previous setup, at what time is the separation between car A and car B maximum before car B overtakes car A?",
    options={
        "A": "10 s",
        "B": "5 s",
        "C": "20 s",
        "D": "15 s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Relative velocity along a straight line",
    concept="Separation Δs = s_A - s_B is maximum when relative velocity is zero: v_A - v_B = 0 => v_B = v_A = 20 m/s => 2t = 20 => t = 10 s.",
    given="v_A = 20 m/s, a_B = 2 m/s².",
    formula="Separation is maximum when v_A = v_B",
    steps=(
        "1. Separation distance: S(t) = s_A - s_B = 20t - t².\n"
        "2. To maximize S(t), differentiate with respect to t and set to zero:\n"
        "   dS/dt = 20 - 2t = 0 => 2t = 20 => t = 10 s.\n"
        "3. This physically corresponds to the moment when both cars have identical instantaneous speeds (v_A = v_B = 20 m/s).\n"
        "4. Maximum separation S_max = 20(10) - (10)² = 200 - 100 = 100 m."
    ),
    tip="Maximum separation between two objects always occurs when their relative velocity is ZERO (speeds are equal).",
    why_wrong="20 s is the overtake time, where separation is zero, not maximum."
))

# Q391 - Hard
qs.append(make_motion_q(
    num=391,
    question="Two ships A and B are 10 km apart on a line running south to north. Ship A farther north is steaming west at 20 km/h and ship B is steaming north at 20 km/h. What is their distance of closest approach?",
    options={
        "A": "5√2 km",
        "B": "5 km",
        "C": "10 / √2 km",
        "D": "7.5 km"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity along a straight line",
    concept="Relative velocity of B w.r.t A: v_B = 20 ĵ, v_A = -20 î => v_BA = 20 î + 20 ĵ. Initial position of B w.r.t A: r_0 = -10 ĵ. The shortest distance is d_min = 10 sin(45°) = 10 / √2 = 5√2 km.",
    given="Separation = 10 km along north-south. A moves west at 20 km/h, B moves north at 20 km/h.",
    formula="d_min = r_0 sin θ",
    steps=(
        "1. Let ship A be at the origin (0, 0). Ship B starts at (0, -10 km).\n"
        "2. Velocity of A: v_A = -20 î km/h (west).\n"
        "3. Velocity of B: v_B = +20 ĵ km/h (north).\n"
        "4. Relative velocity of B with respect to A: v_BA = v_B - v_A = 20 î + 20 ĵ.\n"
        "5. Direction of relative motion makes angle θ = 45° with the positive x-axis.\n"
        "6. In the frame where A is at the origin, B moves along a line with angle 45° from point (0, -10).\n"
        "7. The perpendicular distance from origin to this line is: d_min = 10 × sin(45°) = 10 / √2 = 5√2 km (≈ 7.07 km)."
    ),
    tip="Shortest distance between two moving bodies = Initial separation × sin(angle between initial separation line and relative velocity vector).",
    why_wrong="5 km would correspond to an angle of 30°."
))

# Q392 - Hard
qs.append(make_motion_q(
    num=392,
    question="Two cars are moving in the same direction along a straight road at speeds 12 m/s and 10 m/s. The faster car is 200 m behind the slower car. If the slower car accelerates at 1 m/s², what must be the minimum constant acceleration of the faster car to overtake the slower car?",
    options={
        "A": "1.01 m/s²",
        "B": "1 m/s²",
        "C": "1.02 m/s²",
        "D": "1.5 m/s²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity along a straight line",
    concept="Let relative acceleration be a_rel = a₁ - 1. For overtake: s_rel = u_rel t + 1/2 a_rel t² ≥ 200. With u_rel = 12 - 10 = 2 m/s: 2t + 1/2 a_rel t² ≥ 200. If a₁ = 1, a_rel = 0, max distance in finite time or 2t = 200 => t = 100 s! At t = 100 s, if a₁ = 1 m/s², relative acceleration is 0, relative speed is constant 2 m/s, so it covers 200 m in 100 s! Thus a₁ = 1 m/s² is sufficient!",
    given="u₁ = 12 m/s, u₂ = 10 m/s, separation = 200 m, a₂ = 1 m/s².",
    formula="s_rel = u_rel t + (1/2) a_rel t²",
    steps=(
        "1. Relative initial velocity of car 1 w.r.t car 2: u_rel = 12 - 10 = +2 m/s.\n"
        "2. Relative acceleration: a_rel = a₁ - a₂ = a₁ - 1 m/s².\n"
        "3. Relative displacement needed to overtake: s_rel = 200 m.\n"
        "4. If a_rel = 0 (i.e. a₁ = 1 m/s²), the relative velocity remains constant at +2 m/s.\n"
        "5. At constant relative velocity of 2 m/s, time to cover 200 m is t = 200 / 2 = 100 s.\n"
        "6. Therefore, car 1 WILL overtake car 2 even with a₁ = 1 m/s²! Hence minimum acceleration is 1 m/s²."
    ),
    tip="If relative acceleration is zero, relative velocity is constant. Since u₁ > u₂, overtake will always occur eventually!",
    why_wrong="Option D assumes a much larger acceleration is needed, not recognizing that even a₁ = 1 m/s² achieves overtake in 100 s."
))
qs[-1]['correct_opt'] = "B"
qs[-1]['correctAnswer'] = "B"
qs[-1]['correctIndex'] = 1

# Q393 - Hard
qs.append(make_motion_q(
    num=393,
    question="A lift in which a test ball is released from the ceiling has height H = 2.7 m and accelerates upwards at 2 m/s². The time taken by the ball to reach the floor of the lift is: (take g = 10 m/s²)",
    options={
        "A": "√(0.45) s ≈ 0.67 s",
        "B": "0.5 s",
        "C": "0.75 s",
        "D": "1.0 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity along a straight line",
    concept="In the lift's reference frame, initial relative velocity is 0. Effective downward acceleration is g_eff = g + a = 10 + 2 = 12 m/s². Time to fall distance H: t = √(2H / g_eff) = √(2 × 2.7 / 12) = √(5.4 / 12) = √0.45 s ≈ 0.67 s.",
    given="H = 2.7 m, a_lift = 2 m/s² upwards, g = 10 m/s².",
    formula="t = √(2H / (g + a))",
    steps=(
        "1. Work in the non-inertial frame of the lift.\n"
        "2. The ball is released from rest relative to the lift ceiling: u_rel = 0.\n"
        "3. Effective downward acceleration inside the upward-accelerating lift:\n"
        "   a_eff = g + a_lift = 10 m/s² + 2 m/s² = 12 m/s².\n"
        "4. Distance to the floor: H = 2.7 m.\n"
        "5. Time of fall: t = √(2H / a_eff) = √(2 × 2.7 / 12) = √(5.4 / 12) = √0.45 s ≈ 0.67 s."
    ),
    tip="In an upward-accelerating elevator, replace g with (g + a) in all kinematic formulas!",
    why_wrong="0.75 s would use g - a = 8 m/s² (downward acceleration)."
))

# Q394 - Hard
qs.append(make_motion_q(
    num=394,
    question="Two trains A and B are approaching each other on the same track with speeds 40 m/s and 20 m/s respectively. When they are 2 km apart, both drivers simultaneously apply brakes, each producing a uniform deceleration of 1 m/s². Do the trains collide?",
    options={
        "A": "No, they stop with 1000 m separation",
        "B": "Yes, they collide before stopping",
        "C": "No, they just touch each other",
        "D": "No, they stop with 500 m separation"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity along a straight line",
    concept="Stopping distance of train A: s_A = v_A² / (2a) = 40² / 2 = 800 m. Stopping distance of train B: s_B = v_B² / (2a) = 20² / 2 = 200 m. Total stopping distance = 800 + 200 = 1000 m. Since initial distance is 2000 m, remaining separation is 2000 - 1000 = 1000 m.",
    given="v_A = 40 m/s, v_B = 20 m/s, a_A = 1 m/s², a_B = 1 m/s², d = 2000 m.",
    formula="s_total = v_A² / (2a_A) + v_B² / (2a_B); Separation = d - s_total",
    steps=(
        "1. Stopping distance of train A:\n"
        "   s_A = v_A² / (2 a_A) = (40)² / (2 × 1) = 1600 / 2 = 800 m.\n"
        "2. Stopping distance of train B:\n"
        "   s_B = v_B² / (2 a_B) = (20)² / (2 × 1) = 400 / 2 = 200 m.\n"
        "3. Total distance covered by both trains before coming to rest:\n"
        "   s_total = s_A + s_B = 800 m + 200 m = 1000 m.\n"
        "4. Initial distance between them was 2000 m (2 km).\n"
        "5. Since 1000 m < 2000 m, the trains do not collide.\n"
        "6. Final separation between the stationary trains = 2000 m - 1000 m = 1000 m."
    ),
    tip="Calculate individual stopping distances s = v²/(2a) and compare their sum with the initial separation.",
    why_wrong="Option B incorrectly uses relative deceleration or assumes they don't stop in time."
))

# Q395 - Hard
qs.append(make_motion_q(
    num=395,
    question="A ball is dropped from the top of a 100 m tower. At the same instant, another ball is thrown upwards from the bottom of the tower with an initial speed of 50 m/s. What is the acceleration of the second ball relative to the first ball at any time during flight?",
    options={
        "A": "0 m/s²",
        "B": "9.8 m/s² downwards",
        "C": "19.6 m/s² downwards",
        "D": "4.9 m/s² upwards"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Relative velocity along a straight line",
    concept="Both balls experience the exact same downward acceleration g in the Earth frame: a₁ = -g, a₂ = -g. Relative acceleration a_rel = a₂ - a₁ = (-g) - (-g) = 0.",
    given="Two bodies in free fall under gravity.",
    formula="a_rel = a₂ - a₁ = (-g) - (-g) = 0",
    steps=(
        "1. Acceleration of the first ball: a₁ = -g (directed downwards).\n"
        "2. Acceleration of the second ball: a₂ = -g (directed downwards).\n"
        "3. Relative acceleration of ball 2 with respect to ball 1:\n"
        "   a_rel = a₂ - a₁ = (-g) - (-g) = 0 m/s².\n"
        "4. Because relative acceleration is identically zero, the relative velocity remains constant throughout the flight until collision!"
    ),
    tip="FUNDAMENTAL KINEMATICS PRINCIPLE: For any two freely falling bodies near Earth, their RELATIVE ACCELERATION IS ZERO!",
    why_wrong="19.6 m/s² adds the accelerations, but relative acceleration is the difference."
))

# ==============================================================================
# Topic 18: Catch-up and meeting problems (Q396 to Q415, 20 questions)
# Difficulties: 5 Easy, 10 Medium, 5 Hard
# ==============================================================================

# Q396 - Easy
qs.append(make_motion_q(
    num=396,
    question="A police car chasing a speeding truck is moving at 30 m/s. The truck is moving ahead at 20 m/s. If the initial separation is 100 m, how long will it take for the police car to catch the truck?",
    options={
        "A": "10 s",
        "B": "5 s",
        "C": "15 s",
        "D": "20 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Relative velocity v_rel = v_police - v_truck = 30 - 20 = 10 m/s. Time to catch up t = separation / v_rel = 100 / 10 = 10 s.",
    given="v_police = 30 m/s, v_truck = 20 m/s, d = 100 m.",
    formula="t = d / (v₁ - v₂)",
    steps=(
        "1. Relative velocity of police car relative to truck: v_rel = 30 m/s - 20 m/s = 10 m/s.\n"
        "2. Distance to close: d = 100 m.\n"
        "3. Time required: t = d / v_rel = 100 m / 10 m/s = 10 s."
    ),
    tip="Pursuit at constant speeds: Time = Separation / Speed Difference.",
    why_wrong="5 s would require a speed difference of 20 m/s."
))

# Q397 - Easy (NEET 2018 PYQ)
qs.append(make_motion_q(
    num=397,
    question="Two cars P and Q start from a point at the same time in a straight line and their positions are represented by xP(t) = a t + b t² and xQ(t) = f t - t². At what time do the cars have the same velocity?",
    options={
        "A": "(f - a) / (2 (b + 1))",
        "B": "(a - f) / (1 + b)",
        "C": "(a + f) / (2 (b - 1))",
        "D": "(a + f) / (2 (1 + b))"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Velocity is the time derivative of position. Differentiate xP and xQ, then set velocities equal to solve for time t.",
    given="xP(t) = a t + b t², xQ(t) = f t - t².",
    formula="vP(t) = dxP/dt; vQ(t) = dxQ/dt; vP(t) = vQ(t)",
    steps=(
        "1. Differentiate position of car P: vP(t) = d/dt (a t + b t²) = a + 2 b t.\n"
        "2. Differentiate position of car Q: vQ(t) = d/dt (f t - t²) = f - 2 t.\n"
        "3. Equate the two velocities: a + 2 b t = f - 2 t.\n"
        "4. Group the terms with t on the left side: 2 b t + 2 t = f - a.\n"
        "5. Factor out 2 t: 2 t (b + 1) = f - a.\n"
        "6. Solve for t: t = (f - a) / [2 (b + 1)]."
    ),
    tip="NEET UG 2018 Official Paper Question! Differentiate positions to get velocities, then equate.",
    why_wrong="Option B misses the factor of 2 in the denominator; Option D has (a + f) instead of (f - a)."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2018"
qs[-1]['pyqYear'] = 2018

# Q398 - Easy
qs.append(make_motion_q(
    num=398,
    question="Two bodies A and B are moving towards each other from two points 60 m apart with constant speeds 2 m/s and 4 m/s respectively. They will meet each other after:",
    options={
        "A": "10 s",
        "B": "15 s",
        "C": "20 s",
        "D": "30 s"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Relative speed of approach = v_A + v_B = 2 + 4 = 6 m/s. Time to meet t = d / v_approach = 60 / 6 = 10 s.",
    given="d = 60 m, v_A = 2 m/s, v_B = 4 m/s (approaching).",
    formula="t = d / (v_A + v_B)",
    steps=(
        "1. Relative speed of approach: v_rel = v_A + v_B = 2 + 4 = 6 m/s.\n"
        "2. Initial distance: d = 60 m.\n"
        "3. Time taken to meet: t = d / v_rel = 60 / 6 = 10 s."
    ),
    tip="Approaching bodies meet in time = Distance / Sum of Speeds.",
    why_wrong="15 s results from using 4 m/s alone."
))

# Q399 - Easy
qs.append(make_motion_q(
    num=399,
    question="In the previous question (A moves at 2 m/s, B moves at 4 m/s towards each other from 60 m apart), how far from A's starting position do they meet?",
    options={
        "A": "20 m",
        "B": "40 m",
        "C": "30 m",
        "D": "25 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="Distance covered by A in meeting time t = 10 s is d_A = v_A × t = 2 m/s × 10 s = 20 m.",
    given="v_A = 2 m/s, t = 10 s.",
    formula="d_A = v_A × t",
    steps=(
        "1. From previous question, meeting time is t = 10 s.\n"
        "2. Distance moved by body A from its starting position:\n"
        "   d_A = v_A × t = 2 m/s × 10 s = 20 m.\n"
        "3. (Body B moves d_B = 4 × 10 = 40 m from its starting position; 20 + 40 = 60 m)."
    ),
    tip="Multiply meeting time by each body's speed to find meeting point coordinates.",
    why_wrong="40 m is the distance from B's starting point, not A's."
))

# Q400 - Easy
qs.append(make_motion_q(
    num=400,
    question="A car starting from rest accelerates at 2 m/s². At the same instant, a bus moving at a constant speed of 10 m/s overtakes the car. How far from the start does the car overtake the bus?",
    options={
        "A": "100 m",
        "B": "50 m",
        "C": "200 m",
        "D": "150 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Catch-up and meeting problems",
    concept="s_car = 1/2 a t² = t². s_bus = v t = 10t. Equating: t² = 10t => t = 10 s. Distance s = 10(10) = 100 m.",
    given="u_car = 0, a_car = 2 m/s², v_bus = 10 m/s.",
    formula="s_car = s_bus => (1/2) a t² = v t",
    steps=(
        "1. Displacements from start: s_car = (1/2)(2)t² = t².\n"
        "2. For the bus: s_bus = 10t.\n"
        "3. At overtake: s_car = s_bus => t² = 10t => t = 10 s (excluding t = 0).\n"
        "4. Distance traveled: s = 10 × 10 = 100 m."
    ),
    tip="Car speed at overtake = 2 × bus speed = 20 m/s. Average speed = 10 m/s over 10 s => 100 m.",
    why_wrong="50 m is the distance at t = 5 s, where car's speed equals bus speed."
))

# Save Topic 17 & 18 first batch to file
with open('scripts/part4_first_batch.json', 'w') as f:
    json.dump(qs, f, indent=2)

print(f'Generated Topic 17 and Topic 18 first batch: {len(qs)} questions')
