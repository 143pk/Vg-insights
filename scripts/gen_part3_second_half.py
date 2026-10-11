import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 15: Free-fall motion in one dimension (Q306 to Q335, 30 questions)
# Difficulties: 7 Easy, 15 Medium, 8 Hard
# ==============================================================================

# Q306 - Easy
qs.append(make_motion_q(
    num=306,
    question="A stone is dropped from the top of a cliff and hits the ground after 4 s. Taking g = 9.8 m/s², the height of the cliff is:",
    options={
        "A": "39.2 m",
        "B": "78.4 m",
        "C": "156.8 m",
        "D": "19.6 m"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Free-fall motion in one dimension",
    concept="For a body dropped from rest (u = 0) under gravity, height fallen in time t is h = 1/2 g t².",
    given="u = 0, t = 4 s, g = 9.8 m/s².",
    formula="h = (1/2) g t²",
    steps=(
        "1. Identify given values: u = 0, t = 4 s, g = 9.8 m/s².\n"
        "2. Apply formula: h = (1/2) × 9.8 × (4)².\n"
        "3. h = 4.9 × 16 = 78.4 m.\n"
        "4. Therefore, the height of the cliff is 78.4 m."
    ),
    tip="For g = 9.8 m/s²: h = 4.9 t². For t = 1, 2, 3, 4 s: h = 4.9 m, 19.6 m, 44.1 m, 78.4 m.",
    why_wrong="39.2 m is the impact velocity (v = gt = 9.8 × 4 = 39.2 m/s), not the height."
))

# Q307 - Easy (NEET 2020 PYQ)
qs.append(make_motion_q(
    num=307,
    question="A ball is thrown vertically downward with a velocity of 20 m/s from the top of a tower. It hits the ground after some time with a velocity of 80 m/s. The height of the tower is: (take g = 10 m/s²)",
    options={
        "A": "300 m",
        "B": "360 m",
        "C": "340 m",
        "D": "320 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Free-fall motion in one dimension",
    concept="Using the third equation of motion under constant gravitational acceleration: v² = u² + 2gh.",
    given="u = 20 m/s (downward), v = 80 m/s (downward), g = 10 m/s².",
    formula="v² = u² + 2gh => h = (v² - u²) / (2g)",
    steps=(
        "1. Apply v² = u² + 2gh with downward direction positive.\n"
        "2. 80² = 20² + 2(10)h.\n"
        "3. 6400 = 400 + 20h.\n"
        "4. 20h = 6400 - 400 = 6000.\n"
        "5. h = 6000 / 20 = 300 m."
    ),
    tip="NEET UG 2020 Official Paper Question! Quick check: (80² - 20²)/(20) = (6400 - 400)/20 = 300 m.",
    why_wrong="320 m or 360 m arise from arithmetic errors in squaring 80 or 20."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2020"
qs[-1]['pyqYear'] = 2020

# Q308 - Easy (NEET 2021 PYQ)
qs.append(make_motion_q(
    num=308,
    question="A small ball is released from the top of a tower of height h. It takes T seconds to reach the ground. What is the position of the ball at T/3 seconds after release?",
    options={
        "A": "8h/9 meters above the ground",
        "B": "7h/9 meters above the ground",
        "C": "h/9 meters above the ground",
        "D": "17h/18 meters above the ground"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Free-fall motion in one dimension",
    concept="Total height h = 1/2 g T². In time t = T/3, downward distance fallen is y = 1/2 g (T/3)² = h/9. Position above ground = h - y = 8h/9.",
    given="Total height h, total time T, time elapsed t = T/3.",
    formula="y = (1/2) g t²; Height above ground = h - y",
    steps=(
        "1. Total height of tower: h = (1/2) g T².\n"
        "2. Distance fallen from the top in time T/3: y = (1/2) g (T/3)² = (1/9) [(1/2) g T²] = h/9.\n"
        "3. The position of the ball measured from the ground is: h - y = h - h/9 = 8h/9.\n"
        "4. Therefore, the ball is at a height of 8h/9 above the ground."
    ),
    tip="NEET UG 2021 Official Question! Always read carefully whether position is asked from top (h/9) or from ground (8h/9).",
    why_wrong="h/9 is the distance fallen from the top, not the height above the ground."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2021"
qs[-1]['pyqYear'] = 2021

# Q309 - Easy
qs.append(make_motion_q(
    num=309,
    question="Two bodies of masses 1 kg and 5 kg are dropped simultaneously from heights 16 m and 25 m respectively in vacuum. The ratio of the times taken by them to reach the ground is:",
    options={
        "A": "4 : 5",
        "B": "5 : 4",
        "C": "1 : 5",
        "D": "16 : 25"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Free-fall motion in one dimension",
    concept="In vacuum, gravitational acceleration is independent of mass: t = √(2h/g). Therefore, t₁/t₂ = √(h₁/h₂).",
    given="h₁ = 16 m, h₂ = 25 m, masses m₁ = 1 kg, m₂ = 5 kg.",
    formula="t = √(2h / g) => t₁ / t₂ = √(h₁ / h₂)",
    steps=(
        "1. In free fall under gravity (no air resistance), time of fall is independent of mass: t = √(2h/g).\n"
        "2. Ratio of times: t₁ / t₂ = √(h₁ / h₂) = √(16 / 25) = 4 / 5.\n"
        "3. Therefore, t₁ : t₂ = 4 : 5."
    ),
    tip="Galileo's famous Leaning Tower principle: All masses accelerate equally under gravity in vacuum. Mass is irrelevant!",
    why_wrong="16 : 25 forgets the square root in t = √(2h/g)."
))

# Q310 - Easy
qs.append(make_motion_q(
    num=310,
    question="A ball is dropped from a balloon rising vertically at 10 m/s when the balloon is at a height of 75 m from the ground. Taking g = 10 m/s², the initial velocity of the ball relative to the ground is:",
    options={
        "A": "0 m/s",
        "B": "10 m/s upwards",
        "C": "10 m/s downwards",
        "D": "5 m/s upwards"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Free-fall motion in one dimension",
    concept="When a body is released from a moving vehicle, it inherits the instantaneous velocity of the vehicle due to inertia.",
    given="Balloon velocity = 10 m/s upwards, balloon height = 75 m.",
    formula="u_ball = v_balloon = +10 m/s (upwards)",
    steps=(
        "1. By the law of inertia, any object detached from a moving frame initially shares the exact velocity of that frame.\n"
        "2. The balloon is moving upward at 10 m/s.\n"
        "3. Immediately upon release, the ball has an upward velocity of 10 m/s.\n"
        "4. Gravity then acts downwards on it with acceleration g = 10 m/s²."
    ),
    tip="A dropped object is not at rest if its carrier was moving! u = v_carrier.",
    why_wrong="0 m/s is a common misconception that releasing an object stops it instantaneously."
))

# Q311 - Easy
qs.append(make_motion_q(
    num=311,
    question="The velocity of a freely falling body dropped from rest after falling through a height h is:",
    options={
        "A": "gh",
        "B": "√(2gh)",
        "C": "2gh",
        "D": "√(gh)"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Free-fall motion in one dimension",
    concept="From the third equation of motion v² = u² + 2gh, with u = 0, v = √(2gh).",
    given="u = 0, acceleration = g, distance fallen = h.",
    formula="v² = 2gh => v = √(2gh)",
    steps=(
        "1. Particle starts from rest: u = 0.\n"
        "2. Downward acceleration: a = g.\n"
        "3. Distance fallen: s = h.\n"
        "4. Apply 3rd equation: v² = u² + 2as = 0 + 2gh = 2gh.\n"
        "5. v = √(2gh)."
    ),
    tip="Torricelli's speed of free fall: v = √(2gh). Same as speed of efflux from an orifice at depth h!",
    why_wrong="gh has dimensions of velocity squared per unit length [L² T⁻²], not velocity [L T⁻¹]."
))

# Q312 - Easy
qs.append(make_motion_q(
    num=312,
    question="A body is dropped from rest. The ratio of distances fallen in the 1st second, 2nd second, and 3rd second is:",
    options={
        "A": "1 : 2 : 3",
        "B": "1 : 4 : 9",
        "C": "1 : 3 : 5",
        "D": "1 : √2 : √3"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Free-fall motion in one dimension",
    concept="Galileo's odd-number rule applies directly to free fall: s_n = g/2 (2n - 1) ∝ 1 : 3 : 5.",
    given="u = 0, a = g, n = 1, 2, 3.",
    formula="s_n = (g/2)(2n - 1)",
    steps=(
        "1. For n = 1: s₁ = (g/2)(2(1) - 1) = 1(g/2) = 5 m (for g=10).\n"
        "2. For n = 2: s₂ = (g/2)(2(2) - 1) = 3(g/2) = 15 m.\n"
        "3. For n = 3: s₃ = (g/2)(2(3) - 1) = 5(g/2) = 25 m.\n"
        "4. Ratio s₁ : s₂ : s₃ = 1 : 3 : 5."
    ),
    tip="Galileo: Ratio in successive 1-second intervals = 1 : 3 : 5 : 7 : 9...",
    why_wrong="1 : 4 : 9 is the ratio of TOTAL distances fallen after 1 s, 2 s, 3 s."
))

# Q313 - Medium
qs.append(make_motion_q(
    num=313,
    question="A stone dropped from the roof of a single-story building takes 0.2 s to fall past a window 1.8 m high. How far above the top of the window was the stone released? (take g = 10 m/s²)",
    options={
        "A": "3.2 m",
        "B": "4.0 m",
        "C": "2.8 m",
        "D": "5.0 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Let velocity at top of window be v₁. Then s = v₁ t + 1/2 g t² = 1.8 m with t = 0.2 s. Find v₁, then height above window h = v₁² / (2g).",
    given="Window height s = 1.8 m, time to cross window t = 0.2 s, g = 10 m/s².",
    formula="s = v₁ t + (1/2) g t²; h = v₁² / (2g)",
    steps=(
        "1. Across the window: 1.8 = v₁(0.2) + (1/2)(10)(0.2)².\n"
        "2. 1.8 = 0.2 v₁ + 5(0.04) = 0.2 v₁ + 0.2.\n"
        "3. 0.2 v₁ = 1.8 - 0.2 = 1.6 => v₁ = 1.6 / 0.2 = 8 m/s.\n"
        "4. The stone reached speed 8 m/s starting from rest (u = 0) at height h above the window:\n"
        "   v₁² = 2gh => 8² = 2(10)h => 64 = 20h => h = 64 / 20 = 3.2 m."
    ),
    tip="Find the speed at the top of the window first using s = ut + 1/2 gt², then use v² = 2gh to find height fallen.",
    why_wrong="4.0 m or 2.8 m arise from forgetting the 1/2 gt² term during window crossing."
))

# Q314 - Medium
qs.append(make_motion_q(
    num=314,
    question="Water drops fall at regular intervals from a tap 5 m above the ground. The third drop is leaving the tap at the instant the first drop touches the ground. How far above the ground is the second drop at that instant? (take g = 10 m/s²)",
    options={
        "A": "3.75 m",
        "B": "1.25 m",
        "C": "2.50 m",
        "D": "4.00 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Total time for 1st drop: T = √(2H/g) = √(2(5)/10) = 1 s. Intervals Δt = T/2 = 0.5 s. Second drop has fallen for 0.5 s: y = 1/2 g (0.5)² = 1.25 m from tap. Height above ground = 5 - 1.25 = 3.75 m.",
    given="Height of tap H = 5 m, g = 10 m/s², 3rd drop leaves when 1st touches ground.",
    formula="T = √(2H/g); Δt = T / (n - 1); y = (1/2) g (t_elapsed)²; h_ground = H - y",
    steps=(
        "1. Time taken for the first drop to reach the ground: T = √(2H / g) = √(2 × 5 / 10) = √1 = 1 s.\n"
        "2. Between the 1st and 3rd drop, there are 2 equal time intervals: Δt = 1 s / 2 = 0.5 s.\n"
        "3. When the 3rd drop is leaving (t = 1 s):\n"
        "   - 1st drop has fallen for 1.0 s (at the ground).\n"
        "   - 2nd drop has fallen for 0.5 s.\n"
        "   - 3rd drop has fallen for 0 s.\n"
        "4. Distance fallen by 2nd drop from the tap: y = (1/2) g (0.5)² = (1/2)(10)(0.25) = 1.25 m.\n"
        "5. Height of 2nd drop above the ground: h = 5 m - 1.25 m = 3.75 m."
    ),
    tip="Super classic NEET question! Always check whether distance is asked from the tap (1.25 m) or from the ground (3.75 m)!",
    why_wrong="1.25 m is the distance from the tap, not above the ground."
))

# Q315 - Medium
qs.append(make_motion_q(
    num=315,
    question="A body released from the top of a tower of height H covers 36% of the total height in the last second of its fall. The total height H of the tower is: (take g = 10 m/s²)",
    options={
        "A": "125 m",
        "B": "100 m",
        "C": "80 m",
        "D": "180 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Distance in last second is 0.36 H, so distance in the first (t - 1) seconds is 0.64 H. Since H ∝ t², (t - 1)/t = √0.64 = 0.8 => t = 5 s. H = 1/2 g (5)² = 125 m.",
    given="Last second distance = 0.36 H, g = 10 m/s².",
    formula="H(t - 1) / H(t) = (t - 1)² / t² = 1 - 0.36 = 0.64",
    steps=(
        "1. Let total time of fall be t seconds.\n"
        "2. Total height H = (1/2) g t².\n"
        "3. Height fallen in the first (t - 1) seconds: H' = (1/2) g (t - 1)² = H - 0.36 H = 0.64 H.\n"
        "4. Taking the ratio: (t - 1)² / t² = 0.64.\n"
        "5. Taking square root: (t - 1) / t = 0.8 => t - 1 = 0.8t => 0.2t = 1 => t = 5 s.\n"
        "6. Total height H = (1/2) × 10 × (5)² = 5 × 25 = 125 m."
    ),
    tip="Speed trick: (t - 1)/t = √(1 - fraction). Here √(1 - 0.36) = √0.64 = 0.8 => 1 - 1/t = 0.8 => 1/t = 0.2 => t = 5 s => H = 125 m!",
    why_wrong="100 m would correspond to 4.47 s, which doesn't satisfy the 36% condition."
))

# Q316 - Medium
qs.append(make_motion_q(
    num=316,
    question="A particle is dropped from a height H. The time taken to cover the first half of the distance is t₁, and the time taken to cover the second half is t₂. The ratio t₁ / t₂ is:",
    options={
        "A": "1 / (√2 - 1)",
        "B": "√2 - 1",
        "C": "1 / √2",
        "D": "√2 + 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="t₁ = √(2(H/2)/g) = √(H/g). Total time T = √(2H/g) = √2 t₁. Then t₂ = T - t₁ = (√2 - 1)t₁. Thus t₁ / t₂ = 1 / (√2 - 1) = √2 + 1.",
    given="Height H, first half H/2, second half H/2.",
    formula="t₁ = √(H/g); T = √(2H/g); t₂ = T - t₁",
    steps=(
        "1. Time to cover first half H/2 from rest: t₁ = √(2(H/2) / g) = √(H / g).\n"
        "2. Total time to cover height H: T = √(2H / g) = √2 √(H / g) = √2 t₁.\n"
        "3. Time to cover second half: t₂ = T - t₁ = √2 t₁ - t₁ = (√2 - 1) t₁.\n"
        "4. Ratio t₁ / t₂ = 1 / (√2 - 1).\n"
        "5. Rationalizing the denominator: 1 / (√2 - 1) = (√2 + 1) / (2 - 1) = √2 + 1.\n"
        "6. Both forms 1 / (√2 - 1) and (√2 + 1) are mathematically identical; option A gives 1 / (√2 - 1)."
    ),
    tip="Always remember: The second half takes LESS time than the first half because the body has already gained speed! So t₁ > t₂.",
    why_wrong="√2 - 1 is t₂ / t₁, the reciprocal of the asked ratio."
))

# Q317 - Medium
qs.append(make_motion_q(
    num=317,
    question="A stone is dropped into a well 44.1 m deep. The splash is heard 3.13 seconds after the stone is dropped. The speed of sound in air is: (take g = 9.8 m/s²)",
    options={
        "A": "340 m/s",
        "B": "339.2 m/s",
        "C": "330 m/s",
        "D": "350 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Total time T = t_fall + t_sound. t_fall = √(2h/g). t_sound = T - t_fall. Speed of sound v = h / t_sound.",
    given="Depth h = 44.1 m, total time T = 3.13 s, g = 9.8 m/s².",
    formula="t_fall = √(2h/g); v_sound = h / (T - t_fall)",
    steps=(
        "1. Time taken for stone to hit the water: t_fall = √(2 × 44.1 / 9.8) = √(88.2 / 9.8) = √9 = 3.0 s.\n"
        "2. Time taken for the sound of the splash to travel back up to the top:\n"
        "   t_sound = T_total - t_fall = 3.13 s - 3.0 s = 0.13 s.\n"
        "3. Speed of sound v = distance / time = 44.1 m / 0.13 s ≈ 339.23 m/s."
    ),
    tip="Standard NEET well-splash question: Always separate stone falling time from sound traveling time!",
    why_wrong="340 m/s is an approximation; the precise value from 44.1 / 0.13 is 339.2 m/s."
))

# Q318 - Medium
qs.append(make_motion_q(
    num=318,
    question="From the top of a tower, a ball is dropped (u = 0) and at the same time another ball is projected horizontally with speed 15 m/s. Which ball reaches the ground first (neglecting air resistance)?",
    options={
        "A": "The dropped ball",
        "B": "The horizontally projected ball",
        "C": "Both reach the ground simultaneously",
        "D": "Depends on the height of the tower"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Independence of orthogonal motions: Vertical motion is determined solely by initial vertical velocity u_y and vertical acceleration g. For both balls, u_y = 0 and a_y = g.",
    given="Ball 1: dropped (u_y = 0). Ball 2: projected horizontally (u_y = 0, u_x = 15 m/s).",
    formula="t = √(2h / g) for vertical descent",
    steps=(
        "1. For the dropped ball: initial vertical velocity u_y₁ = 0.\n"
        "2. For the horizontally projected ball: initial velocity is purely horizontal, so initial vertical velocity u_y₂ = 0.\n"
        "3. Both balls experience the exact same downward acceleration g and fall through the same vertical height h.\n"
        "4. Since h = 1/2 g t² for both, the time of flight t = √(2h/g) is identical for both balls."
    ),
    tip="Classic NCERT conceptual fact: Horizontal velocity does not affect the vertical time of fall!",
    why_wrong="Option B falsely assumes that having more initial velocity helps it reach the ground faster."
))

# Q319 - Medium
qs.append(make_motion_q(
    num=319,
    question="A ball is dropped from a height of 20 m above the ground. If on each bounce it loses 25% of its kinetic energy, the height to which it rebounds after the first bounce is: (take g = 10 m/s²)",
    options={
        "A": "15 m",
        "B": "10 m",
        "C": "12 m",
        "D": "5 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Kinetic energy is directly proportional to rebound height: KE = mgh. Retaining 75% KE means rebounding to 75% of original height: h' = 0.75 h.",
    given="Original height h = 20 m, energy lost = 25%, energy retained = 75%.",
    formula="h' = (1 - 0.25) × h = 0.75 × 20 m",
    steps=(
        "1. Just before impact, kinetic energy equals initial potential energy: KE₁ = mgh.\n"
        "2. After impact, it loses 25% of KE, so it retains 75% of its KE: KE₂ = 0.75 KE₁.\n"
        "3. At the peak of the rebound, this remaining KE converts to potential energy: mgh' = KE₂ = 0.75 mgh.\n"
        "4. Canceling mg gives: h' = 0.75 h = 0.75 × 20 m = 15 m."
    ),
    tip="Height reached after bounce is proportional to retained kinetic energy: h_new / h_old = KE_new / KE_old.",
    why_wrong="10 m would correspond to 50% energy loss."
))

# Q320 - Medium
qs.append(make_motion_q(
    num=320,
    question="A body is dropped from a height h and falls under gravity. The distance traveled by it during the second second of its motion is:",
    options={
        "A": "1.5 g",
        "B": "0.5 g",
        "C": "2.5 g",
        "D": "2 g"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Use s_n = g/2 (2n - 1) for n = 2: s₂ = (g/2)(2(2) - 1) = 3g/2 = 1.5 g.",
    given="u = 0, a = g, n = 2.",
    formula="s_n = (g/2)(2n - 1)",
    steps=(
        "1. Distance in the nth second for a body dropped from rest: s_n = (g/2)(2n - 1).\n"
        "2. For the 2nd second, set n = 2:\n"
        "   s₂ = (g/2)(2(2) - 1) = (g/2)(4 - 1) = 3g / 2 = 1.5 g.\n"
        "3. (If g = 10 m/s², s₂ = 1.5 × 10 = 15 m)."
    ),
    tip="s₁ = 0.5 g, s₂ = 1.5 g, s₃ = 2.5 g, s₄ = 3.5 g.",
    why_wrong="2.5 g is the distance in the 3rd second."
))

# Q321 - Medium
qs.append(make_motion_q(
    num=321,
    question="A body falls freely from rest. If the velocity acquired by it after falling through distance x is v, then after falling through an additional distance 3x, its velocity will be:",
    options={
        "A": "2v",
        "B": "3v",
        "C": "4v",
        "D": "√3 v"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Total distance from the start is x + 3x = 4x. Since v = √(2gh), v_new = √(2g(4x)) = 2√(2gx) = 2v.",
    given="After falling distance x, speed is v. Additional distance is 3x.",
    formula="v = √(2gh); Total height h_new = 4x",
    steps=(
        "1. Initial speed from rest: after distance x, v² = 2gx => v = √(2gx).\n"
        "2. After falling an additional 3x, total distance fallen from the rest position is:\n"
        "   h_total = x + 3x = 4x.\n"
        "3. Final speed: v_final² = 2g(4x) = 4(2gx) = 4 v².\n"
        "4. Taking the square root: v_final = √(4v²) = 2v."
    ),
    tip="Total distance fallen is 4x, so speed doubles: v ∝ √h, so √4 = 2.",
    why_wrong="4v would mean speed scales linearly with height, which violates v ∝ √h."
))

# Q322 - Medium
qs.append(make_motion_q(
    num=322,
    question="A parachutist bails out from an aeroplane and drops freely for 50 m without friction. When the parachute opens, he decelerates at 2 m/s² and reaches the ground with speed 3 m/s. If g = 10 m/s², what is the total height from which he bailed out?",
    options={
        "A": "297.75 m",
        "B": "293 m",
        "C": "300 m",
        "D": "350 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Stage 1: Free fall for h₁ = 50 m, acquires v₁² = 2gh₁ = 2(10)(50) = 1000. Stage 2: Deceleration a = 2 m/s² from v₁ to v = 3 m/s: v² = v₁² - 2ah₂ => h₂ = (1000 - 9) / 4 = 247.75 m. Total height = 50 + 247.75 = 297.75 m.",
    given="h₁ = 50 m, g = 10 m/s², a_dec = 2 m/s², v_ground = 3 m/s.",
    formula="v₁² = 2gh₁; v² = v₁² - 2ah₂; H = h₁ + h₂",
    steps=(
        "1. Stage 1 (free fall from rest): v₁² = 0 + 2gh₁ = 2 × 10 × 50 = 1000 (m/s)².\n"
        "2. Stage 2 (with parachute): initial speed squared is 1000, final speed is 3 m/s, deceleration a = 2 m/s².\n"
        "3. Apply 3rd equation: (3)² = 1000 - 2(2) h₂.\n"
        "4. 9 = 1000 - 4 h₂ => 4 h₂ = 991 => h₂ = 991 / 4 = 247.75 m.\n"
        "5. Total height H = h₁ + h₂ = 50 m + 247.75 m = 297.75 m."
    ),
    tip="Multi-stage problem: Calculate the intermediate velocity squared (1000) and use it directly without taking square root!",
    why_wrong="247.75 m forgets to add the initial 50 m of free fall."
))

# Q323 - Hard
qs.append(make_motion_q(
    num=323,
    question="A ball is dropped from height H. At the same instant, another ball is thrown vertically upwards from the ground such that it would just reach height H. At what height above the ground do the two balls cross each other?",
    options={
        "A": "H / 2",
        "B": "3H / 4",
        "C": "2H / 3",
        "D": "H / 4"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="Ball 2 has u = √(2gH). Meeting time t = H / (u_rel) = H / √(2gH) = √(H / 2g). Ball 1 falls y = 1/2 g t² = 1/2 g (H / 2g) = H/4. Height above ground = H - H/4 = 3H/4.",
    given="Ball 1 dropped from H. Ball 2 thrown from ground with u = √(2gH).",
    formula="t_meet = H / u; y₁ = (1/2) g t²; h_meet = H - y₁",
    steps=(
        "1. Ball 2 can just reach height H, so its initial velocity is u = √(2gH).\n"
        "2. Since both experience downward acceleration g, their relative acceleration is a_rel = g - g = 0.\n"
        "3. Relative speed between them is constant: v_rel = u + 0 = √(2gH).\n"
        "4. Time taken to meet: t = H / v_rel = H / √(2gH) = √(H / 2g).\n"
        "5. Distance fallen by the dropped ball in this time:\n"
        "   y₁ = (1/2) g t² = (1/2) g [H / (2g)] = H / 4.\n"
        "6. Height of meeting point above the ground: h = H - y₁ = H - H/4 = 3H/4."
    ),
    tip="Relative motion shortcut: Since relative acceleration is ZERO under gravity, meeting time is simply t = Separation / Relative Speed!",
    why_wrong="H/4 is the distance fallen from the top, not the height above the ground."
))

# Q324 - Hard
qs.append(make_motion_q(
    num=324,
    question="A particle is dropped from the top of a tower. During the last 2 seconds of its fall, it covers 80 m. What is the total height of the tower? (take g = 10 m/s²)",
    options={
        "A": "125 m",
        "B": "180 m",
        "C": "100 m",
        "D": "80 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="H = 1/2 g t² and H - 80 = 1/2 g (t - 2)². Subtracting gives 80 = 1/2 g [t² - (t-2)²] = 5(4t - 4) = 20t - 20 => 20t = 100 => t = 5 s. H = 1/2(10)(25) = 125 m.",
    given="Distance in last 2 seconds = 80 m, g = 10 m/s².",
    formula="Δs = (1/2) g [t² - (t - 2)²] = 80 m",
    steps=(
        "1. Total height: H = (1/2) g t² = 5t².\n"
        "2. Height in first (t - 2) seconds: H' = 5(t - 2)².\n"
        "3. Distance in last 2 s: H - H' = 5[t² - (t² - 4t + 4)] = 5(4t - 4) = 20t - 20.\n"
        "4. Set equal to 80: 20t - 20 = 80 => 20t = 100 => t = 5 s.\n"
        "5. Total height H = 5 × (5)² = 5 × 25 = 125 m."
    ),
    tip="Notice: In 5 seconds, distances per second are 5, 15, 25, 35, 45 m. Last 2 seconds = 35 + 45 = 80 m! Matches perfectly!",
    why_wrong="180 m would correspond to t = 6 s, where last 2 seconds would cover 45 + 55 = 100 m."
))

# Q325 - Hard
qs.append(make_motion_q(
    num=325,
    question="A body is dropped from a height H. If t₁ is the time taken to fall through the first half of the height and t₂ is the time taken to fall through the second half, then which of the following is correct?",
    options={
        "A": "t₂ = (√2 - 1) t₁",
        "B": "t₂ = t₁ / √2",
        "C": "t₂ = (√2 + 1) t₁",
        "D": "t₂ = t₁ / 2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="t₁ = √(H/g). Total time T = √(2H/g) = √2 t₁. Then t₂ = T - t₁ = (√2 - 1) t₁.",
    given="Height H, split into first H/2 and second H/2.",
    formula="T = t₁ + t₂ = √2 t₁ => t₂ = (√2 - 1) t₁",
    steps=(
        "1. Time for first half H/2: t₁ = √(2(H/2)/g) = √(H/g).\n"
        "2. Time for total height H: T = √(2H/g) = √2 √(H/g) = √2 t₁.\n"
        "3. Time for second half: t₂ = T - t₁ = √2 t₁ - t₁ = (√2 - 1) t₁.\n"
        "4. Since √2 ≈ 1.414, t₂ ≈ 0.414 t₁."
    ),
    tip="The second half takes only ~41.4% of the time taken for the first half!",
    why_wrong="t₂ = t₁ / 2 falsely assumes average speed in second half is exactly double."
))

# Q326 - Hard
qs.append(make_motion_q(
    num=326,
    question="A flowerpot falls from a ledge of an apartment building. If it takes 0.1 s to pass by a window of height 1.45 m, what was the speed of the pot when it was at the top of the window? (take g = 10 m/s²)",
    options={
        "A": "14 m/s",
        "B": "14.5 m/s",
        "C": "15 m/s",
        "D": "12 m/s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="Apply h = u t + 1/2 g t²: 1.45 = u(0.1) + 1/2(10)(0.1)² = 0.1 u + 0.05 => 0.1 u = 1.40 => u = 14 m/s.",
    given="Window height h = 1.45 m, passage time t = 0.1 s, g = 10 m/s².",
    formula="h = u t + (1/2) g t²",
    steps=(
        "1. Let u be the downward speed of the flowerpot at the top of the window.\n"
        "2. Apply displacement formula for the window passage:\n"
        "   h = u t + (1/2) g t².\n"
        "3. 1.45 = u (0.1) + (1/2) (10) (0.1)².\n"
        "4. 1.45 = 0.1 u + 5 (0.01) = 0.1 u + 0.05.\n"
        "5. 0.1 u = 1.45 - 0.05 = 1.40.\n"
        "6. u = 1.40 / 0.1 = 14 m/s."
    ),
    tip="Quick formula for speed entering window of height h in time t: u = h/t - 1/2 gt = 1.45/0.1 - 0.5 = 14.5 - 0.5 = 14 m/s!",
    why_wrong="14.5 m/s is simply h/t, ignoring the acceleration during the window crossing."
))

# Q327 - Hard
qs.append(make_motion_q(
    num=327,
    question="A ball is released from the top of a tower of height H. It takes time T to reach the ground. The ratio of the distance traveled by the ball in the first T/2 seconds to the distance traveled in the next T/2 seconds is:",
    options={
        "A": "1 : 3",
        "B": "1 : 2",
        "C": "1 : 4",
        "D": "1 : √2"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="For equal time intervals starting from rest, distances are in ratio 1 : 3 : 5... so s₁ : s₂ = 1 : 3.",
    given="Time intervals t₁ = T/2, t₂ = T/2.",
    formula="s₁ = (1/2) g (T/2)² = H/4; s₂ = H - s₁ = 3H/4 => s₁ : s₂ = 1 : 3",
    steps=(
        "1. Distance in first half of total time (t = T/2):\n"
        "   s₁ = (1/2) g (T/2)² = (1/4) [(1/2) g T²] = H / 4.\n"
        "2. Total distance in time T is H.\n"
        "3. Distance in second half of time: s₂ = H - s₁ = H - H/4 = 3H / 4.\n"
        "4. Ratio s₁ : s₂ = (H/4) : (3H/4) = 1 : 3."
    ),
    tip="Galileo's rule applies to any equal time intervals starting from rest: 1 : 3 : 5 : 7...",
    why_wrong="1 : 2 falsely assumes uniform velocity."
))

# Q328 - Hard
qs.append(make_motion_q(
    num=328,
    question="A stone is dropped from a height h. Simultaneously, another stone is thrown upwards from the ground with such a velocity that it can reach maximum height 4h. The time at which the two stones pass each other is:",
    options={
        "A": "√(h / (8g))",
        "B": "√(h / (2g))",
        "C": "√(h / g)",
        "D": "2 √(h / g)"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="Maximum height of 2nd stone is 4h = u² / (2g) => u = √(8gh). Relative acceleration is zero, so t = h / u = h / √(8gh) = √(h / (8g)).",
    given="Separation = h, max height of second stone = 4h.",
    formula="u = √(2g H_max) = √(8gh); t_meet = h / u",
    steps=(
        "1. For the stone thrown upwards, maximum height is 4h:\n"
        "   H_max = u² / (2g) = 4h => u² = 8gh => u = √(8gh).\n"
        "2. The relative acceleration between both stones is a_rel = g - g = 0.\n"
        "3. The initial relative velocity is v_rel = u + 0 = √(8gh).\n"
        "4. The initial distance between them is h.\n"
        "5. Time to pass each other: t = separation / v_rel = h / √(8gh) = √(h / 8g)."
    ),
    tip="Zero relative acceleration makes vertical meeting problems a one-step division: t = separation / relative speed!",
    why_wrong="Option B corresponds to max height being h instead of 4h."
))

# Q329 - Hard
qs.append(make_motion_q(
    num=329,
    question="A body is dropped from rest at height H. If it travels a distance 9H/25 in the last second of its fall, the value of H is: (take g = 10 m/s²)",
    options={
        "A": "125 m",
        "B": "180 m",
        "C": "245 m",
        "D": "80 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="Distance in first (t-1) seconds is H - 9H/25 = 16H/25. Thus (t-1)/t = √(16/25) = 4/5 => t = 5 s. H = 1/2(10)(5)² = 125 m.",
    given="Last second covers 9H/25, g = 10 m/s².",
    formula="(t - 1)² / t² = 1 - 9/25 = 16/25 => (t - 1) / t = 4/5",
    steps=(
        "1. Height fallen in first (t - 1) seconds: H' = H - (9/25)H = (16/25)H.\n"
        "2. Ratio of heights: H' / H = (t - 1)² / t² = 16 / 25.\n"
        "3. Taking square root: (t - 1) / t = 4 / 5.\n"
        "4. 5t - 5 = 4t => t = 5 s.\n"
        "5. Total height H = (1/2) g t² = (1/2) × 10 × (5)² = 5 × 25 = 125 m."
    ),
    tip="Fast shortcut: (t - 1)/t = √(1 - 9/25) = 4/5 => t = 5 s => H = 125 m in 10 seconds flat!",
    why_wrong="180 m would correspond to t = 6 s."
))

# Q330 - Hard
qs.append(make_motion_q(
    num=330,
    question="A body falls freely from rest. If the distance covered in the last second is equal to the distance covered in the first three seconds, the total time of fall is:",
    options={
        "A": "5 s",
        "B": "4.5 s",
        "C": "6 s",
        "D": "5.5 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="s_last = g/2 (2t - 1). s_first3 = 1/2 g (3)² = 9(g/2). Equating gives 2t - 1 = 9 => 2t = 10 => t = 5 s.",
    given="Distance in last second = distance in first 3 seconds.",
    formula="(g/2)(2t - 1) = (1/2) g (3)²",
    steps=(
        "1. Distance in first 3 seconds: s₃ = (1/2) g (3)² = 9 (g/2).\n"
        "2. Distance in the last (t-th) second: s_t = (g/2)(2t - 1).\n"
        "3. Given s_t = s₃: (g/2)(2t - 1) = 9 (g/2).\n"
        "4. Canceling g/2 gives: 2t - 1 = 9 => 2t = 10 => t = 5 s."
    ),
    tip="Notice: In 5 s, s_last = s₅ = (g/2)(2(5)-1) = 9(g/2) = 45 m. First 3 s = 5 + 15 + 25 = 45 m!",
    why_wrong="4.5 s gives 2t - 1 = 8, which does not equal 9."
))

# Q331 - Medium
qs.append(make_motion_q(
    num=331,
    question="A ball is dropped from a height h on a floor. If the coefficient of restitution is e, the height to which the ball bounces after the first impact is:",
    options={
        "A": "e h",
        "B": "e² h",
        "C": "e⁴ h",
        "D": "h / e²"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Speed after impact is v' = e v. Height h' = v'² / (2g) = e² v² / (2g) = e² h.",
    given="Original height h, coefficient of restitution e.",
    formula="v = √(2gh); v' = e v; h' = v'² / (2g) = e² h",
    steps=(
        "1. Velocity just before impact: v = √(2gh).\n"
        "2. By definition of coefficient of restitution: rebound velocity v' = e v.\n"
        "3. Height reached after bounce: h' = v'² / (2g) = (e v)² / (2g) = e² (v² / 2g).\n"
        "4. Since v² / (2g) = h, we get h' = e² h."
    ),
    tip="After n bounces: h_n = e^(2n) h and v_n = e^n v.",
    why_wrong="eh is the velocity ratio, not the height ratio (since height scales with velocity squared)."
))

# Q332 - Medium
qs.append(make_motion_q(
    num=332,
    question="A body is dropped from the top of a tower. After falling for 2 seconds, it passes an electric pole. If the pole is 100 m above the ground, what is the total height of the tower? (take g = 10 m/s²)",
    options={
        "A": "120 m",
        "B": "140 m",
        "C": "100 m",
        "D": "125 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Height fallen in 2 s is h₁ = 1/2 g (2)² = 20 m. Total height of tower = height of pole + h₁ = 100 + 20 = 120 m.",
    given="t = 2 s to reach pole, pole height = 100 m above ground, g = 10 m/s².",
    formula="h_fallen = (1/2) g t²; H_total = h_fallen + h_pole",
    steps=(
        "1. Distance fallen by body in 2 seconds from the top of the tower:\n"
        "   h_fallen = (1/2) g t² = (1/2) × 10 × (2)² = 20 m.\n"
        "2. The pole is located 100 m above the ground.\n"
        "3. Therefore, the top of the tower is 20 m above the pole.\n"
        "4. Total height of tower = 100 m + 20 m = 120 m."
    ),
    tip="Add distance fallen from top to the remaining height above ground.",
    why_wrong="140 m adds 40 m incorrectly."
))

# Q333 - Medium
qs.append(make_motion_q(
    num=333,
    question="A stone falls freely under gravity. It covers distances h₁, h₂, and h₃ in the first 5 seconds, the next 5 seconds, and the further next 5 seconds respectively. The relation between h₁, h₂, and h₃ is:",
    options={
        "A": "h₁ = 2h₂ = 3h₃",
        "B": "h₁ = h₂ / 3 = h₃ / 5",
        "C": "h₂ = 3h₁, h₃ = 3h₂",
        "D": "h₁ = h₂ = h₃"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Free-fall motion in one dimension",
    concept="Distances in equal successive intervals of time starting from rest are in the ratio 1 : 3 : 5. So h₁ : h₂ : h₃ = 1 : 3 : 5 => h₁ = h₂/3 = h₃/5.",
    given="Equal consecutive time intervals of 5 seconds each.",
    formula="h₁ : h₂ : h₃ = 1 : 3 : 5",
    steps=(
        "1. Distance in first 5 s: h₁ = (1/2) g (5)² = 12.5 g.\n"
        "2. Total distance in 10 s: s₁₀ = (1/2) g (10)² = 50 g.\n"
        "   Distance in second 5 s: h₂ = 50g - 12.5g = 37.5 g = 3 h₁.\n"
        "3. Total distance in 15 s: s₁₅ = (1/2) g (15)² = 112.5 g.\n"
        "   Distance in third 5 s: h₃ = 112.5g - 50g = 62.5 g = 5 h₁.\n"
        "4. Therefore, h₁ : h₂ : h₃ = 1 : 3 : 5, which means h₁ = h₂/3 = h₃/5."
    ),
    tip="Classic Galileo ratio: 1 : 3 : 5 : 7... Expressed as h₁ = h₂/3 = h₃/5.",
    why_wrong="Option C says h₃ = 3h₂ = 9h₁, but the ratio is 5, not 9."
))

# Q334 - Hard
qs.append(make_motion_q(
    num=334,
    question="A body is dropped from height H. If it travels a distance 5H/9 in the last second of its motion, the value of H is: (take g = 10 m/s²)",
    options={
        "A": "45 m",
        "B": "20 m",
        "C": "80 m",
        "D": "60 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="(t-1)/t = √(1 - 5/9) = √(4/9) = 2/3 => 3t - 3 = 2t => t = 3 s. H = 1/2(10)(3)² = 45 m.",
    given="Last second covers 5H/9, g = 10 m/s².",
    formula="(t - 1) / t = √(1 - 5/9) = 2/3 => t = 3 s",
    steps=(
        "1. Distance in first (t - 1) seconds: H' = H - 5H/9 = 4H/9.\n"
        "2. Taking ratio: (t - 1)² / t² = 4/9.\n"
        "3. (t - 1) / t = 2/3 => 3t - 3 = 2t => t = 3 s.\n"
        "4. Total height H = (1/2) g t² = (1/2) × 10 × (3)² = 5 × 9 = 45 m."
    ),
    tip="Verify: For t = 3 s, H = 45 m. In 3rd second: s₃ = 5(2(3)-1) = 25 m. 25/45 = 5/9! Exactly matches!",
    why_wrong="20 m corresponds to t = 2 s."
))

# Q335 - Hard
qs.append(make_motion_q(
    num=335,
    question="A ball is dropped from a height. After 1 second, another ball is dropped from a point 20 m below the first point. The time after the release of the first ball when the two balls are at the same height is: (take g = 10 m/s²)",
    options={
        "A": "2.5 s",
        "B": "2.0 s",
        "C": "3.0 s",
        "D": "1.5 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Free-fall motion in one dimension",
    concept="Let t be time from drop of first ball. y₁ = 1/2 g t². Ball 2 dropped from y₀ = 20 m at t = 1 s: y₂ = 20 + 1/2 g (t - 1)². Set y₁ = y₂.",
    given="Ball 1 released at t = 0 from y = 0. Ball 2 released at t = 1 s from y = 20 m.",
    formula="1/2 g t² = 20 + 1/2 g (t - 1)²",
    steps=(
        "1. Position of ball 1 from origin: y₁ = (1/2)(10) t² = 5t².\n"
        "2. Position of ball 2: starts 20 m below at t = 1 s, so y₂ = 20 + 5(t - 1)².\n"
        "3. Set y₁ = y₂: 5t² = 20 + 5(t² - 2t + 1).\n"
        "4. 5t² = 20 + 5t² - 10t + 5.\n"
        "5. 0 = 25 - 10t => 10t = 25 => t = 2.5 s.\n"
        "6. Time after release of the first ball is 2.5 s."
    ),
    tip="Always choose a consistent coordinate system and set positions equal to solve meeting problems.",
    why_wrong="1.5 s is the time after release of the second ball (2.5 - 1.0 = 1.5 s)."
))

# ==============================================================================
# Topic 16: Motion under gravity and sign conventions (Q336 to Q375, 40 questions)
# Difficulties: 10 Easy, 21 Medium, 9 Hard
# ==============================================================================

# Q336 - Easy
qs.append(make_motion_q(
    num=336,
    question="A body is thrown vertically upwards with initial speed u. The maximum height reached by the body is given by:",
    options={
        "A": "u / g",
        "B": "u² / (2g)",
        "C": "u² / g",
        "D": "2u / g"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="At maximum height, vertical velocity becomes zero: v = 0. Using v² = u² - 2gh gives h_max = u² / (2g).",
    given="Initial speed = u, acceleration = -g, final speed v = 0.",
    formula="v² = u² - 2gh => h_max = u² / (2g)",
    steps=(
        "1. At the peak of vertical flight, instantaneous velocity is zero: v = 0.\n"
        "2. Apply 3rd equation of motion: v² = u² - 2gh.\n"
        "3. 0 = u² - 2gh => 2gh = u².\n"
        "4. h = u² / (2g)."
    ),
    tip="Essential formula: Maximum height H = u² / (2g); Time to reach maximum height t_up = u / g.",
    why_wrong="u/g is the time to reach maximum height, not the height itself."
))

# Q337 - Easy (NEET 2024 PYQ)
qs.append(make_motion_q(
    num=337,
    question="A body thrown vertically upwards with an initial speed u attains a maximum height H. The speed of the body at height H / 2 from the ground is:",
    options={
        "A": "u / 2",
        "B": "u / √2",
        "C": "u / 4",
        "D": "u √2"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Maximum height H = u² / (2g). Using equation of motion v² = u² - 2gh at h = H/2 gives v² = u² - 2g(u²/4g) = u²/2 => v = u / √2.",
    given="Initial speed u, maximum height H, height h = H/2.",
    formula="v² = u² - 2gh; H = u² / (2g)",
    steps=(
        "1. Maximum height attained: H = u² / (2g).\n"
        "2. At height h = H / 2 = u² / (4g), apply 3rd equation of motion:\n"
        "   v² = u² - 2gh = u² - 2g [u² / (4g)] = u² - u² / 2 = u² / 2.\n"
        "3. Taking square root: v = u / √2."
    ),
    tip="NEET UG 2024 Official Paper Question! At half maximum height, kinetic energy is half, so speed is u / √2.",
    why_wrong="u / 2 is the speed at 3/4 maximum height, not at half maximum height."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2024"
qs[-1]['pyqYear'] = 2024

# Q338 - Easy (NEET 2023 PYQ)
qs.append(make_motion_q(
    num=338,
    question="A ball is thrown vertically upwards with a velocity of 4 m/s from the top of a bridge. If the ball strikes the water surface after 4 s, the height of the bridge above the water surface is: (take g = 10 m/s²)",
    options={
        "A": "64 m",
        "B": "48 m",
        "C": "80 m",
        "D": "32 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Taking upward as positive and bridge as origin: u = +4 m/s, a = -10 m/s², t = 4 s. Displacement s = ut + 1/2 at² = 4(4) - 5(16) = 16 - 80 = -64 m.",
    given="u = +4 m/s, t = 4 s, g = 10 m/s².",
    formula="s = ut - (1/2) g t²",
    steps=(
        "1. Set up coordinate frame: upward is positive, origin at the bridge.\n"
        "2. Initial velocity u = +4 m/s.\n"
        "3. Acceleration a = -g = -10 m/s².\n"
        "4. Time of flight t = 4 s.\n"
        "5. Net displacement: s = u t + (1/2) a t² = (4 × 4) + (1/2)(-10)(4)² = 16 - 80 = -64 m.\n"
        "6. The negative displacement indicates the water is 64 m below the bridge. Height = 64 m."
    ),
    tip="NEET UG 2023 Official Paper Question! Use single displacement equation with signs (+ for up, - for down).",
    why_wrong="80 m ignores the initial upward velocity of 4 m/s."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2023"
qs[-1]['pyqYear'] = 2023

# Q339 - Easy
qs.append(make_motion_q(
    num=339,
    question="A body is projected vertically upwards with a velocity of 29.4 m/s. The time taken to reach the maximum height is: (take g = 9.8 m/s²)",
    options={
        "A": "2 s",
        "B": "3 s",
        "C": "4 s",
        "D": "6 s"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Time of ascent t_up = u / g. At peak, v = 0 = u - gt => t = u / g.",
    given="u = 29.4 m/s, g = 9.8 m/s².",
    formula="t_up = u / g",
    steps=(
        "1. At highest point, vertical velocity v = 0.\n"
        "2. Using v = u - gt: 0 = 29.4 - 9.8 t.\n"
        "3. 9.8 t = 29.4 => t = 29.4 / 9.8 = 3 s."
    ),
    tip="Notice: 9.8 × 3 = 29.4 s! Total time of flight T = 2 × 3 = 6 s.",
    why_wrong="6 s is the total time of flight (time of ascent + time of descent), not just time of ascent."
))

# Q340 - Easy
qs.append(make_motion_q(
    num=340,
    question="For a body projected vertically upwards, what is the value of its acceleration at the highest point of its trajectory?",
    options={
        "A": "Zero",
        "B": "g downwards",
        "C": "g upwards",
        "D": "Cannot be determined"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Gravitational force acts downward continuously regardless of the state of motion. At the highest point, velocity is zero, but acceleration is g downward.",
    given="Body at the highest point of its vertical flight.",
    formula="a = g (downwards) at all times",
    steps=(
        "1. Newton's second law states that F_net = ma.\n"
        "2. Throughout the flight in vacuum, the only force acting on the body is gravity: F_net = mg downwards.\n"
        "3. Therefore, acceleration a = F_net / m = g downwards at every single instant, including at the apex.\n"
        "4. Velocity momentarily becomes zero (v = 0), but acceleration is non-zero (a = g downwards)."
    ),
    tip="NEET Classic Trap: Zero velocity does NOT mean zero acceleration! At highest point, v = 0 but a = g downward.",
    why_wrong="Zero acceleration would mean the body stays suspended in the air forever at the top!"
))

# Q341 - Easy
qs.append(make_motion_q(
    num=341,
    question="Total time of flight for a projectile projected vertically upwards from ground with velocity u and returning to ground is:",
    options={
        "A": "u / g",
        "B": "2u / g",
        "C": "u² / g",
        "D": "u / (2g)"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Time of flight T = t_ascent + t_descent = u/g + u/g = 2u/g (in absence of air resistance).",
    given="Initial velocity u, return to same level.",
    formula="T = 2u / g",
    steps=(
        "1. Net displacement when returning to the ground: s = 0.\n"
        "2. Apply displacement equation: s = u T - (1/2) g T² = 0.\n"
        "3. T [u - (1/2) g T] = 0.\n"
        "4. For T ≠ 0, we have: (1/2) g T = u => T = 2u / g."
    ),
    tip="Time of ascent = Time of descent = u / g. Total time T = 2u / g.",
    why_wrong="u / g is only the time of ascent (to reach maximum height)."
))

# Q342 - Easy
qs.append(make_motion_q(
    num=342,
    question="A ball thrown vertically upwards returns to the thrower's hand after 6 s. Taking g = 10 m/s², the initial velocity was:",
    options={
        "A": "60 m/s",
        "B": "30 m/s",
        "C": "15 m/s",
        "D": "45 m/s"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Total time of flight T = 2u / g => u = g T / 2.",
    given="T = 6 s, g = 10 m/s².",
    formula="u = (g T) / 2",
    steps=(
        "1. Total time of flight T = 6 s.\n"
        "2. Time of ascent: t_up = T / 2 = 6 / 2 = 3 s.\n"
        "3. At top, v = 0 = u - g t_up => u = g t_up.\n"
        "4. u = 10 m/s² × 3 s = 30 m/s."
    ),
    tip="Initial velocity = g × (T / 2). For 6 seconds total flight, u = 10 × 3 = 30 m/s.",
    why_wrong="60 m/s would result in a 12-second round trip."
))

# Q343 - Easy
qs.append(make_motion_q(
    num=343,
    question="A ball thrown vertically upwards rises to a maximum height of 45 m. Taking g = 10 m/s², the speed with which it was thrown is:",
    options={
        "A": "20 m/s",
        "B": "30 m/s",
        "C": "45 m/s",
        "D": "25 m/s"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Use u = √(2gh).",
    given="H = 45 m, g = 10 m/s².",
    formula="u = √(2gH)",
    steps=(
        "1. At highest point, v = 0.\n"
        "2. 0 = u² - 2gH => u² = 2gH.\n"
        "3. u² = 2 × 10 × 45 = 900.\n"
        "4. u = √900 = 30 m/s."
    ),
    tip="H = 45 m => u = 30 m/s; H = 20 m => u = 20 m/s; H = 80 m => u = 40 m/s.",
    why_wrong="20 m/s would give H = 400 / 20 = 20 m."
))

# Q344 - Easy
qs.append(make_motion_q(
    num=344,
    question="If a body is thrown vertically upwards with initial velocity u, what is the ratio of its velocity at height h while going up to its velocity at height h while coming down?",
    options={
        "A": "1 : 1 in magnitude, opposite in direction",
        "B": "1 : 2",
        "C": "2 : 1",
        "D": "Depends on the mass of the body"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Conservation of mechanical energy: speed at any given height h is √(u² - 2gh) both going up and coming down. Magnitudes are identical, directions are opposite.",
    given="Same height h on upward and downward paths.",
    formula="v² = u² - 2gh => |v_up| = |v_down| = √(u² - 2gh)",
    steps=(
        "1. By conservation of mechanical energy, potential energy at height h is the same (mgh).\n"
        "2. Therefore, kinetic energy is the same: 1/2 m v² = 1/2 m u² - mgh.\n"
        "3. Hence, the magnitude of velocity is identical: |v_up| = |v_down| = √(u² - 2gh).\n"
        "4. Upward velocity is +v, downward velocity is -v."
    ),
    tip="Symmetry of vertical flight: Speed at any level is the same going up as coming down!",
    why_wrong="Speeds are not different because energy is conserved in vacuum."
))

# Q345 - Easy
qs.append(make_motion_q(
    num=345,
    question="A ball is projected upwards. Which of the following graphs represents its acceleration versus time throughout the upward and downward motion (taking upward as positive)?",
    options={
        "A": "A horizontal line at a = -g below the time axis",
        "B": "A horizontal line at a = +g above the time axis",
        "C": "A line starting at +g and sloping downward to -g",
        "D": "A line starting at -g and sloping upward to +g"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Motion under gravity and sign conventions",
    concept="Under standard sign convention (upward positive), gravitational acceleration is constant and directed downwards: a = -g at all times.",
    given="Upward positive convention.",
    formula="a(t) = -g = constant",
    steps=(
        "1. Gravity always pulls downward toward the center of the Earth.\n"
        "2. With upward taken as positive, downward is negative.\n"
        "3. Therefore, acceleration is constant: a = -g (approximately -9.8 m/s² or -10 m/s²).\n"
        "4. On an a-t graph, a constant negative value is represented by a horizontal straight line below the time axis."
    ),
    tip="Acceleration does NOT change sign when the ball reverses direction! a = -g continuously.",
    why_wrong="Option C is a common mistake confusing velocity (which decreases) with acceleration (which is constant)."
))

# Save Topic 15 and 16 questions to file
with open('scripts/part3_topics15_16.json', 'w') as f:
    json.dump(qs, f, indent=2)

print(f'Generated Topics 15 and 16 (first batch): {len(qs)} questions')
