import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 21: Motion with changing direction (Q456 to Q475, 20 questions)
# Difficulties: 2 Easy, 12 Medium, 6 Hard
# ==============================================================================

# Q456 - Easy
qs.append(make_motion_q(
    num=456,
    question="When a particle moving along the x-axis reverses its direction of motion, what must momentarily happen to its instantaneous velocity and acceleration?",
    options={
        "A": "Instantaneous velocity must be zero, but acceleration need not be zero",
        "B": "Both instantaneous velocity and acceleration must be zero",
        "C": "Instantaneous acceleration must be zero, but velocity need not be zero",
        "D": "Neither velocity nor acceleration can be zero"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion with changing direction",
    concept="Direction reversal in 1D motion requires the velocity to pass through zero ($v = 0$). Acceleration at that instant is non-zero (otherwise the particle would come to permanent rest rather than turning back).",
    given="A particle reverses its direction along the straight line x-axis.",
    formula="Reversal occurs when $v = dx/dt = 0$, while $a = dv/dt \\neq 0$.",
    steps=(
        "1. In 1D motion along the x-axis, direction is indicated by the sign of velocity v.\n"
        "2. To change sign (e.g. from positive to negative), continuous velocity v(t) must pass through zero.\n"
        "3. If acceleration were also zero, velocity would stay at zero. For v to change sign, dv/dt = a ≠ 0.\n"
        "4. Example: A ball at the top of its flight has v = 0 and a = -g ≠ 0."
    ),
    tip="At the turning point of 1D motion, speed is instantaneously zero, but acceleration is generally non-zero.",
    why_wrong="Option B is wrong because if both were zero, the particle would remain at rest forever."
))

# Q457 - Easy
qs.append(make_motion_q(
    num=457,
    question="A particle moves along the x-axis according to x(t) = 12t - 3t², where x is in meters and t is in seconds. At what time does the particle momentarily reverse its direction of motion?",
    options={
        "A": "1 s",
        "B": "2 s",
        "C": "4 s",
        "D": "6 s"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion with changing direction",
    concept="The particle changes direction when its velocity becomes zero ($v = 0$).",
    given="Position function x(t) = 12t - 3t².",
    formula="v(t) = dx/dt = 0",
    steps=(
        "1. Differentiate position x(t) with respect to time: v(t) = dx/dt = 12 - 6t.\n"
        "2. Set velocity to zero to find the turnaround point: 12 - 6t = 0.\n"
        "3. Solving yields t = 12 / 6 = 2 s.\n"
        "4. Acceleration a = dv/dt = -6 m/s² ≠ 0, confirming reversal."
    ),
    tip="To find the turnaround point, differentiate position to get velocity and solve v(t) = 0.",
    why_wrong="4 s is the time when the particle returns to the origin x = 0, not when it reverses direction."
))

# Q458 - Medium
qs.append(make_motion_q(
    num=458,
    question="A particle moves along a straight line such that its position is given by x(t) = 20 + 8t - 2t² (in SI units). What is the total distance traveled by the particle from t = 0 to t = 4 s?",
    options={
        "A": "0 m",
        "B": "8 m",
        "C": "16 m",
        "D": "24 m"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="When direction changes, total distance is the sum of magnitudes of displacements for each monotonic interval, whereas total displacement is simply x(t₂) - x(t₁).",
    given="Position equation x(t) = 20 + 8t - 2t², interval t = 0 to t = 4 s.",
    formula="d = |x(t_turn) - x(0)| + |x(4) - x(t_turn)|",
    steps=(
        "1. Velocity v(t) = dx/dt = 8 - 4t. Setting v = 0 gives t = 2 s (turnaround point in [0, 4]).\n"
        "2. Position at t = 0: x(0) = 20 m.\n"
        "3. Position at turnaround t = 2 s: x(2) = 20 + 8(2) - 2(4) = 28 m.\n"
        "4. Position at t = 4 s: x(4) = 20 + 8(4) - 2(16) = 20 m.\n"
        "5. Distance = |28 - 20| + |20 - 28| = 8 m + 8 m = 16 m."
    ),
    tip="Displacement is x(4) - x(0) = 20 - 20 = 0 m, but total distance traveled is 16 m.",
    why_wrong="0 m is the net displacement, not the total distance."
))

# Q459 - Medium
qs.append(make_motion_q(
    num=459,
    question="A particle moves along the x-axis with an initial velocity of +30 m/s and a constant acceleration of -6 m/s². What is the ratio of the distance traveled in the first 7 seconds to the magnitude of the displacement in the first 7 seconds?",
    options={
        "A": "13 : 9",
        "B": "29 : 21",
        "C": "25 : 21",
        "D": "15 : 7"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="For uniformly accelerated motion where initial velocity and acceleration have opposite signs, the particle stops and turns back at t = u/|a|.",
    given="u = +30 m/s, a = -6 m/s², total time t = 7 s.",
    formula="Turnaround at t = u/|a| = 5 s. Distance = d₁ + d₂; Displacement s = ut + (1/2)at².",
    steps=(
        "1. Turnaround time: v = u + at = 30 - 6t = 0 => t = 5 s.\n"
        "2. Distance in first 5 s (forward): d₁ = u² / (2|a|) = 30² / (2 × 6) = 75 m.\n"
        "3. Motion in next 2 s (backward from rest): d₂ = (1/2)|a|(Δt)² = (1/2)(6)(2)² = 12 m.\n"
        "4. Total distance in 7 s = 75 + 12 = 87 m.\n"
        "5. Displacement in 7 s: s = ut + (1/2)at² = 30(7) - 3(49) = 210 - 147 = +63 m.\n"
        "6. Ratio = Distance / |Displacement| = 87 / 63 = 29 / 21."
    ),
    tip="Always split the motion into two intervals: before turnaround and after turnaround.",
    why_wrong="Assuming distance equals displacement gives 63 / 63 = 1."
))

# Q460 - Medium
qs.append(make_motion_q(
    num=460,
    question="A body starts from the origin at t = 0 with velocity u = -10 m/s and moves with constant acceleration a = +4 m/s². At what time does the body return to the origin, and what is the total distance covered up to that time?",
    options={
        "A": "t = 5 s, distance = 25 m",
        "B": "t = 5 s, distance = 50 m",
        "C": "t = 2.5 s, distance = 12.5 m",
        "D": "t = 4 s, distance = 32 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Returning to origin means net displacement s = 0. Total distance is twice the maximum backward excursion.",
    given="u = -10 m/s, a = +4 m/s², s = 0.",
    formula="s = ut + (1/2)at² = 0; s_max = u² / (2a); Total distance = 2 × s_max.",
    steps=(
        "1. Return to origin: s = -10t + (1/2)(4)t² = -10t + 2t² = 0 => t(2t - 10) = 0 => t = 5 s.\n"
        "2. Turnaround occurs when v = -10 + 4t = 0 => t = 2.5 s.\n"
        "3. Maximum backward distance reached: d₁ = |u|² / (2a) = 10² / (2 × 4) = 12.5 m.\n"
        "4. Since it returns to origin, forward return distance d₂ = 12.5 m.\n"
        "5. Total distance = 12.5 + 12.5 = 25 m."
    ),
    tip="When returning to origin after turning back, total distance = 2 × s_max = u² / a = 100 / 4 = 25 m.",
    why_wrong="50 m wrongly multiplies by 4 instead of 2; 12.5 m is only one-way excursion."
))

# Q461 - Medium
qs.append(make_motion_q(
    num=461,
    question="A toy car travels along a straight track: forward at 4 m/s for 6 s, then backward at 2 m/s for 4 s, and finally forward at 3 m/s for 2 s. What are the average speed and average velocity over the entire 12-second journey?",
    options={
        "A": "Average speed = 3.17 m/s, Average velocity = 1.83 m/s",
        "B": "Average speed = 3.50 m/s, Average velocity = 2.00 m/s",
        "C": "Average speed = 3.17 m/s, Average velocity = 3.17 m/s",
        "D": "Average speed = 2.50 m/s, Average velocity = 1.50 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Average speed = total distance / total time; Average velocity = net displacement / total time.",
    given="Leg 1: +4 m/s, 6 s. Leg 2: -2 m/s, 4 s. Leg 3: +3 m/s, 2 s. Total time = 12 s.",
    formula="v_avg_speed = Σ |v_i| t_i / T; v_avg_vel = Σ v_i t_i / T",
    steps=(
        "1. Displacements: s₁ = (+4)(6) = +24 m; s₂ = (-2)(4) = -8 m; s₃ = (+3)(2) = +6 m.\n"
        "2. Net displacement = 24 - 8 + 6 = +22 m.\n"
        "3. Distances: d₁ = 24 m; d₂ = 8 m; d₃ = 6 m. Total distance = 24 + 8 + 6 = 38 m.\n"
        "4. Total time = 6 + 4 + 2 = 12 s.\n"
        "5. Average speed = 38 / 12 = 3.17 m/s.\n"
        "6. Average velocity = 22 / 12 = 1.83 m/s."
    ),
    tip="Average speed is scalar (path length), average velocity is vector (displacement).",
    why_wrong="Setting them equal ignores the directional reversal in the second leg."
))

# Q462 - Medium
qs.append(make_motion_q(
    num=462,
    question="A ball is thrown vertically upward with speed u under gravity. Which of the following statements is INCORRECT regarding the motion?",
    options={
        "A": "The acceleration at the highest point is non-zero and directed downward",
        "B": "The time taken to ascend equals the time taken to descend back to the projection point",
        "C": "The speed upon returning to the projection level equals the launch speed",
        "D": "At the highest point, both the velocity and acceleration are momentarily zero"
    },
    correct_opt="D",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="In vertical motion under gravity, gravity acts downward continuously with acceleration g at every instant, including at the apex.",
    given="Vertically thrown ball under gravity.",
    formula="At peak: v = 0, a = -g",
    steps=(
        "1. At the highest point, vertical velocity is momentarily zero (v = 0).\n"
        "2. The gravitational force F = mg acts continuously downward.\n"
        "3. Therefore, acceleration a = F/m = g downwards at all times, including at the peak.\n"
        "4. Statement D claims acceleration is zero, which is incorrect, making D the right option."
    ),
    tip="Never say acceleration is zero at the peak of free fall! If a were zero when v = 0, the body would remain floating in mid-air.",
    why_wrong="A, B, and C are all well-known correct physical properties of free projectile motion."
))

# Q463 - Medium
qs.append(make_motion_q(
    num=463,
    question="A particle moves along the x-axis with velocity v(t) = t² - 6t + 8 m/s. How many times does the particle reverse its direction of motion in the time interval t = 0 to t = 5 s?",
    options={
        "A": "0",
        "B": "1",
        "C": "2",
        "D": "3"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="A particle reverses direction when v(t) = 0 and the velocity changes sign across that root.",
    given="v(t) = t² - 6t + 8, interval [0, 5] s.",
    formula="v(t) = (t - 2)(t - 4) = 0",
    steps=(
        "1. Factorize velocity: v(t) = (t - 2)(t - 4) = 0.\n"
        "2. Roots are t = 2 s and t = 4 s, both within the interval (0, 5).\n"
        "3. For t < 2: v > 0 (forward). At t = 2: v = 0 and a = 2(2) - 6 = -2 m/s² ≠ 0 (reversal 1).\n"
        "4. For 2 < t < 4: v < 0 (backward). At t = 4: v = 0 and a = 2(4) - 6 = +2 m/s² ≠ 0 (reversal 2).\n"
        "5. For 4 < t ≤ 5: v > 0 (forward again). Total reversals = 2."
    ),
    tip="Every simple root of v(t) = 0 within the interior of the time interval represents a reversal of direction.",
    why_wrong="Counting only one root or assuming velocity never becomes zero."
))

# Q464 - Hard
qs.append(make_motion_q(
    num=464,
    question="For the particle with velocity v(t) = t² - 6t + 8 m/s starting from x(0) = 0, what is the total distance traveled from t = 0 to t = 5 s?",
    options={
        "A": "9.33 m",
        "B": "6.67 m",
        "C": "12.00 m",
        "D": "4.67 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion with changing direction",
    concept="Total distance is ∫ |v(t)| dt. We split the integral at the zeros of velocity: t = 2 s and t = 4 s.",
    given="v(t) = t² - 6t + 8, zeros at t = 2 and t = 4, interval [0, 5] s.",
    formula="d = |∫₀² v dt| + |∫₂⁴ v dt| + |∫₄⁵ v dt|",
    steps=(
        "1. Indefinite integral: x(t) = t³/3 - 3t² + 8t.\n"
        "2. x(0) = 0.\n"
        "3. x(2) = 8/3 - 12 + 16 = 20/3 m => d₁ = 20/3 m.\n"
        "4. x(4) = 64/3 - 48 + 32 = 16/3 m => d₂ = |16/3 - 20/3| = 4/3 m.\n"
        "5. x(5) = 125/3 - 75 + 40 = 20/3 m => d₃ = |20/3 - 16/3| = 4/3 m.\n"
        "6. Total distance = 20/3 + 4/3 + 4/3 = 28/3 ≈ 9.33 m."
    ),
    tip="Always split integration of speed into separate intervals where velocity maintains a constant sign.",
    why_wrong="Integrating directly without splitting gives net displacement x(5) - x(0) = 20/3 = 6.67 m, which is not distance."
))

# Q465 - Hard
qs.append(make_motion_q(
    num=465,
    question="A particle moves along a straight line with an initial velocity of 20 m/s and experiences a constant deceleration of 5 m/s². What is the distance traveled by the particle in the 5th second of its motion?",
    options={
        "A": "2.5 m",
        "B": "5.0 m",
        "C": "1.25 m",
        "D": "0 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion with changing direction",
    concept="The 5th second runs from t = 4 s to t = 5 s. Since turnaround occurs at t = 4 s, the particle turns around right at the start of the 5th second.",
    given="u = 20 m/s, a = -5 m/s², 5th second interval [4 s, 5 s].",
    formula="Turnaround time t₀ = u/|a| = 20/5 = 4 s. Distance in next 1 s from rest = (1/2)|a|(Δt)².",
    steps=(
        "1. Stopping time: v = u + at = 20 - 5t = 0 => t = 4 s.\n"
        "2. The 5th second spans from t = 4 s to t = 5 s.\n"
        "3. At t = 4 s, the particle is momentarily at rest (v = 0).\n"
        "4. During the 5th second, the particle accelerates in the reverse direction for 1 second.\n"
        "5. Distance traveled = (1/2)|a|(Δt)² = (1/2)(5)(1)² = 2.5 m."
    ),
    tip="The standard formula s_n = u + (a/2)(2n - 1) gives displacement: 20 + (-5/2)(9) = -2.5 m. Distance is magnitude = 2.5 m.",
    why_wrong="0 m assumes the particle stays permanently stopped after coming to rest."
))

# Q466 - Hard
qs.append(make_motion_q(
    num=466,
    question="A body is projected vertically upwards with a speed of 40 m/s. Taking g = 10 m/s², what is the distance covered by the body during the 5th second of its motion?",
    options={
        "A": "5 m",
        "B": "10 m",
        "C": "15 m",
        "D": "20 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion with changing direction",
    concept="The body reaches maximum height at t = u/g = 4 s. The 5th second is from t = 4 s to t = 5 s, which is the first second of its downward fall.",
    given="u = 40 m/s, g = 10 m/s², 5th second (t = 4 s to 5 s).",
    formula="Ascent time t_a = u/g = 4 s. Distance fallen in first second = (1/2)gt².",
    steps=(
        "1. Time of ascent: t = u/g = 40 / 10 = 4 s.\n"
        "2. The 5th second is the time interval from t = 4 s to t = 5 s.\n"
        "3. At t = 4 s, the body reaches maximum height with v = 0.\n"
        "4. During the 5th second, it falls freely from rest for 1 second: d = (1/2)gt² = (1/2)(10)(1)² = 5 m."
    ),
    tip="The distance fallen in the 1st second of descent is always 5 m (for g = 10 m/s²).",
    why_wrong="Using s_n without understanding direction gives -5 m, but distance must be positive."
))

# Q467 - Hard
qs.append(make_motion_q(
    num=467,
    question="A body is projected vertically upwards with velocity u = 30 m/s. Taking g = 10 m/s², what is the ratio of distance traveled in the 3rd second to that in the 4th second?",
    options={
        "A": "1 : 1",
        "B": "5 : 1",
        "C": "3 : 1",
        "D": "2 : 1"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion with changing direction",
    concept="By symmetry of motion under gravity, the distance traveled in the last second of ascent equals the distance fallen in the first second of descent.",
    given="u = 30 m/s, g = 10 m/s². Time to top t = 30/10 = 3 s.",
    formula="Ascent time = 3 s. 3rd second is last second of ascent; 4th second is first second of descent.",
    steps=(
        "1. Time of ascent: t = u/g = 30 / 10 = 3 s.\n"
        "2. 3rd second (t = 2 s to 3 s): v(2) = 30 - 20 = 10 m/s, v(3) = 0. Distance = (0² - 10²) / (-2 × 10) = 5 m.\n"
        "3. 4th second (t = 3 s to 4 s): falls from rest for 1 s. Distance = (1/2)(10)(1)² = 5 m.\n"
        "4. Ratio = 5 m : 5 m = 1 : 1."
    ),
    tip="NEET symmetry rule: Distance in the last second before reaching the peak always equals distance in the first second after leaving the peak (5 m for g = 10 m/s²).",
    why_wrong="5 : 1 is the ratio of distance in 1st second to 3rd second."
))

# Q468 - Medium
qs.append(make_motion_q(
    num=468,
    question="A particle starts with an initial velocity of 15 m/s along the positive x-direction and experiences a constant deceleration of 5 m/s². What is the ratio of the distance traveled in the 3rd second to the distance traveled in the 4th second?",
    options={
        "A": "1 : 1",
        "B": "2 : 1",
        "C": "1 : 2",
        "D": "3 : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Deceleration brings the particle to rest at t = 15/5 = 3 s. The 3rd second is immediately before rest, and the 4th second is immediately after turnaround.",
    given="u = 15 m/s, a = -5 m/s². Turnaround time t = 3 s.",
    formula="Distance to/from rest in time Δt = 1 s is (1/2)|a|(Δt)².",
    steps=(
        "1. Stopping time: t₀ = 15 / 5 = 3 s.\n"
        "2. 3rd second (t = 2 s to 3 s): v(2) = 5 m/s, v(3) = 0. Distance = 5² / (2 × 5) = 2.5 m.\n"
        "3. 4th second (t = 3 s to 4 s): starts from rest with a = 5 m/s². Distance = (1/2)(5)(1)² = 2.5 m.\n"
        "4. Ratio = 2.5 m : 2.5 m = 1 : 1."
    ),
    tip="Due to time-reversal symmetry around the turning point, distance in [t₀ - τ, t₀] equals distance in [t₀, t₀ + τ].",
    why_wrong="Assuming acceleration vanishes after stopping."
))

# Q469 - Medium
qs.append(make_motion_q(
    num=469,
    question="A particle moves along a straight line with an initial velocity of u = 12 m/s and constant acceleration a = -4 m/s². What is the average speed of the particle in the first 5 seconds of its motion?",
    options={
        "A": "5.2 m/s",
        "B": "3.6 m/s",
        "C": "2.0 m/s",
        "D": "4.8 m/s"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Average speed = total distance / total time. Calculate distance before turnaround and after turnaround.",
    given="u = 12 m/s, a = -4 m/s², total time t = 5 s.",
    formula="Turnaround time t₀ = u/|a| = 3 s. Total distance d = d₁ + d₂.",
    steps=(
        "1. Turnaround time: v = 12 - 4t = 0 => t = 3 s.\n"
        "2. Forward distance in first 3 s: d₁ = 12² / (2 × 4) = 144 / 8 = 18 m.\n"
        "3. Backward distance in next 2 s (from t = 3 s to 5 s): d₂ = (1/2)(4)(2)² = 8 m.\n"
        "4. Total distance = 18 + 8 = 26 m.\n"
        "5. Average speed = 26 m / 5 s = 5.2 m/s."
    ),
    tip="Net displacement is 18 - 8 = 10 m, giving average velocity 2.0 m/s. Do not confuse average speed with average velocity!",
    why_wrong="2.0 m/s is the average velocity, not average speed."
))

# Q470 - Medium
qs.append(make_motion_q(
    num=470,
    question="A ball is dropped from a height of 20 m above a hard floor. Upon striking the floor, it rebounds vertically with half the speed it hit the floor with. Taking g = 10 m/s², what is the total distance traveled by the ball from the release until it reaches the peak of its first bounce?",
    options={
        "A": "25 m",
        "B": "30 m",
        "C": "22.5 m",
        "D": "27.5 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Motion with sudden change of direction upon impact. Downward drop followed by upward bounce.",
    given="Drop height h₁ = 20 m, rebound speed v' = v/2, g = 10 m/s².",
    formula="v = √(2gh₁), h₂ = (v')² / (2g) = h₁ / 4",
    steps=(
        "1. Speed just before hitting floor: v = √(2 × 10 × 20) = √400 = 20 m/s.\n"
        "2. Rebound speed: v' = 20 / 2 = 10 m/s.\n"
        "3. Peak height of bounce: h₂ = (10)² / (2 × 10) = 100 / 20 = 5 m.\n"
        "4. Total distance traveled = h₁ + h₂ = 20 m + 5 m = 25 m."
    ),
    tip="Since rebound speed is halved, rebound height is (1/2)² = 1/4 of the drop height.",
    why_wrong="30 m assumes rebound height equals half the drop height (10 m) instead of one-fourth."
))

# Q471 - Medium
qs.append(make_motion_q(
    num=471,
    question="In the previous question, what is the net displacement of the ball from its initial drop position to the peak of the first bounce?",
    options={
        "A": "15 m downward",
        "B": "25 m downward",
        "C": "5 m upward",
        "D": "15 m upward"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Displacement is the vector from the initial position to the final position.",
    given="Initial position: +20 m above floor. Final position: +5 m above floor.",
    formula="Δy = y_final - y_initial",
    steps=(
        "1. Coordinate system: Floor at y = 0, upward positive.\n"
        "2. Initial position y_i = +20 m.\n"
        "3. Final position at apex of bounce y_f = +5 m.\n"
        "4. Displacement Δy = 5 - 20 = -15 m (15 m downward)."
    ),
    tip="Displacement depends only on initial and final positions, regardless of the floor collision in between.",
    why_wrong="25 m downward is the total distance traveled, not displacement."
))

# Q472 - Medium
qs.append(make_motion_q(
    num=472,
    question="A particle moves along a straight line with velocity v(t) = 6 - 2t m/s. Find the displacement and the distance traveled between t = 1 s and t = 5 s.",
    options={
        "A": "Displacement = 0 m, Distance = 8 m",
        "B": "Displacement = 8 m, Distance = 8 m",
        "C": "Displacement = 0 m, Distance = 16 m",
        "D": "Displacement = 4 m, Distance = 10 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Reversal occurs at t = 3 s. The interval [1, 5] s is symmetric around t = 3 s.",
    given="v(t) = 6 - 2t, interval [1, 5] s.",
    formula="Turnaround at v = 0 => t = 3 s. Δx₁ = ∫₁³ v dt, Δx₂ = ∫₃⁵ v dt.",
    steps=(
        "1. Velocity becomes zero at 6 - 2t = 0 => t = 3 s.\n"
        "2. Forward displacement (t = 1 to 3 s): Δx₁ = [6t - t²]₁³ = (18 - 9) - (6 - 1) = 9 - 5 = +4 m.\n"
        "3. Backward displacement (t = 3 to 5 s): Δx₂ = [6t - t²]₃⁵ = (30 - 25) - (18 - 9) = 5 - 9 = -4 m.\n"
        "4. Net displacement = +4 - 4 = 0 m.\n"
        "5. Total distance = |+4| + |-4| = 8 m."
    ),
    tip="Due to symmetry around t = 3 s, forward and backward displacements cancel to 0, while distances add to 8 m.",
    why_wrong="Equating distance with displacement gives 0 m for distance."
))

# Q473 - Hard
qs.append(make_motion_q(
    num=473,
    question="A vehicle moving along a straight road at 25 m/s experiences a constant acceleration of -5 m/s². If this acceleration acts for 6 seconds (accelerating the vehicle in reverse after stopping), what is the total distance traveled in those 6 seconds?",
    options={
        "A": "65 m",
        "B": "60 m",
        "C": "70 m",
        "D": "50 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion with changing direction",
    concept="Motion comes to rest at t = 5 s and then continues in reverse for the remaining 1 s.",
    given="u = 25 m/s, a = -5 m/s², t = 6 s.",
    formula="Stopping time t₀ = u/|a| = 5 s. Distance = d₁ + d₂ = u²/(2|a|) + (1/2)|a|(Δt)².",
    steps=(
        "1. Forward stopping time: t₀ = 25 / 5 = 5 s.\n"
        "2. Forward distance: d₁ = 25² / (2 × 5) = 625 / 10 = 62.5 m.\n"
        "3. Reverse distance in remaining time (Δt = 6 - 5 = 1 s): d₂ = (1/2)(5)(1)² = 2.5 m.\n"
        "4. Total distance = 62.5 + 2.5 = 65 m."
    ),
    tip="Net displacement is 62.5 - 2.5 = 60 m, but total distance is 65 m.",
    why_wrong="60 m is displacement, not distance."
))

# Q474 - Medium
qs.append(make_motion_q(
    num=474,
    question="A body moves along a straight line such that its velocity v and position x are related by v² = 64 - 16x (in SI units). What is the maximum displacement of the body along the positive x-direction before it reverses its direction?",
    options={
        "A": "4 m",
        "B": "8 m",
        "C": "16 m",
        "D": "2 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Motion with changing direction",
    concept="Reversal of motion occurs when velocity v = 0.",
    given="Velocity-position relation: v² = 64 - 16x.",
    formula="Set v = 0 => 64 - 16x = 0",
    steps=(
        "1. The particle continues in the positive x direction until its speed drops to zero.\n"
        "2. Set v² = 0: 64 - 16x = 0.\n"
        "3. 16x = 64 => x = 4 m.\n"
        "4. Comparing with v² = u² + 2as gives u² = 64 and 2a = -16 => a = -8 m/s²."
    ),
    tip="When given v²(x), find the turning point directly by setting v = 0.",
    why_wrong="8 m confuses 64 / 16 with 64 / 8."
))

# Q475 - Hard
qs.append(make_motion_q(
    num=475,
    question="A particle starts with velocity +u and uniform retardation -a. It reaches the turnaround point and returns to the starting point. What is the average velocity and average speed for the entire round trip?",
    options={
        "A": "Average velocity = 0, Average speed = u / 2",
        "B": "Average velocity = 0, Average speed = u",
        "C": "Average velocity = u / 2, Average speed = u / 2",
        "D": "Average velocity = 0, Average speed = 0"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Motion with changing direction",
    concept="Round trip means net displacement is zero. Total distance is twice the maximum excursion, and total time is 2u/a.",
    given="Initial velocity u, retardation a, round trip back to start.",
    formula="Displacement = 0 => v_avg = 0. Total distance D = 2(u²/(2a)) = u²/a. Total time T = 2u/a.",
    steps=(
        "1. For any round trip starting and ending at the same point, net displacement = 0.\n"
        "2. Therefore, Average velocity = 0.\n"
        "3. Time to turn around: t₀ = u/a. Total time T = 2u/a.\n"
        "4. Maximum distance d₁ = u² / (2a). Total distance D = 2 × d₁ = u² / a.\n"
        "5. Average speed = D / T = (u² / a) / (2u / a) = u / 2."
    ),
    tip="For any uniformly accelerated round trip returning to start, average speed is always u / 2.",
    why_wrong="Average speed is never zero for a moving particle."
))

with open('scripts/part4_topic21.json', 'w') as f:
    json.dump(qs, f, indent=2)

print("Generated Topic 21 questions:", len(qs))
