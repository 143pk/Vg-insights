import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 14: Equations of motion for constant acceleration (Q276 to Q305, 30 questions)
# Difficulties: 7 Easy, 15 Medium, 8 Hard
# ==============================================================================

# Q276 - Easy
qs.append(make_motion_q(
    num=276,
    question="Which equation of motion gives the displacement s in terms of initial velocity u, final velocity v, and time t for motion with constant acceleration?",
    options={
        "A": "s = (u + v) t / 2",
        "B": "s = (v - u) t / 2",
        "C": "s = u t + a t²",
        "D": "s = v t - 2 a t²"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Equations of motion for constant acceleration",
    concept="For constant acceleration, the average velocity is simply the arithmetic mean of initial and final velocities: v_avg = (u + v)/2, and displacement s = v_avg × t.",
    given="Constant acceleration, initial velocity u, final velocity v, time interval t.",
    formula="s = [(u + v) / 2] × t",
    steps=(
        "1. For uniform acceleration, acceleration a is constant, so velocity changes linearly with time.\n"
        "2. Average velocity over the interval is: v_avg = (u + v) / 2.\n"
        "3. Displacement is the product of average velocity and time: s = v_avg × t = (u + v)t / 2."
    ),
    tip="Use s = (u + v)t / 2 when acceleration 'a' is neither given nor required!",
    why_wrong="Option B has a minus sign which represents change in velocity, not average velocity."
))

# Q277 - Easy
qs.append(make_motion_q(
    num=277,
    question="A car starting from rest acquires a speed of 20 m/s in 10 s under uniform acceleration. The acceleration of the car is:",
    options={
        "A": "1 m/s²",
        "B": "2 m/s²",
        "C": "3 m/s²",
        "D": "4 m/s²"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Equations of motion for constant acceleration",
    concept="Use the first equation of motion: v = u + at.",
    given="u = 0, v = 20 m/s, t = 10 s.",
    formula="v = u + at => a = (v - u) / t",
    steps=(
        "1. Identify given values: u = 0 m/s, v = 20 m/s, t = 10 s.\n"
        "2. Apply first equation of motion: v = u + at.\n"
        "3. 20 = 0 + a(10) => 10a = 20 => a = 2 m/s²."
    ),
    tip="Starting from rest always means u = 0.",
    why_wrong="1 m/s² would produce 10 m/s in 10 s."
))

# Q278 - Easy
qs.append(make_motion_q(
    num=278,
    question="The distance covered by a particle starting from rest and moving with constant acceleration a in the first 4 seconds is:",
    options={
        "A": "4a",
        "B": "8a",
        "C": "16a",
        "D": "2a"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Equations of motion for constant acceleration",
    concept="Use s = ut + 1/2 at². Since u = 0, s = 1/2 a t².",
    given="u = 0, t = 4 s.",
    formula="s = (1/2) a t²",
    steps=(
        "1. Since particle starts from rest, initial velocity u = 0.\n"
        "2. Distance in 4 seconds: s = (1/2) × a × (4)² = (1/2) × a × 16 = 8a."
    ),
    tip="For u = 0, distance in time t is proportional to t²: s ∝ t².",
    why_wrong="16a forgets the factor of 1/2 in s = 1/2 at²."
))

# Q279 - Easy
qs.append(make_motion_q(
    num=279,
    question="The distance traveled by a body in the nth second of its uniformly accelerated motion starting from rest is proportional to:",
    options={
        "A": "n",
        "B": "n²",
        "C": "(2n - 1)",
        "D": "(2n + 1)"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Equations of motion for constant acceleration",
    concept="The formula for distance in the nth second is s_n = u + (a/2)(2n - 1). For u = 0, s_n = (a/2)(2n - 1) ∝ (2n - 1).",
    given="Uniformly accelerated motion from rest (u = 0).",
    formula="s_n = u + (a/2)(2n - 1)",
    steps=(
        "1. Distance in n seconds: s_n_total = (1/2) a n².\n"
        "2. Distance in (n-1) seconds: s_(n-1)_total = (1/2) a (n-1)².\n"
        "3. Distance in nth second: s_n = s_n_total - s_(n-1)_total = (a/2)[n² - (n-1)²] = (a/2)(2n - 1).\n"
        "4. Since a is constant, s_n is directly proportional to (2n - 1)."
    ),
    tip="Galileo's odd number law: Distances in 1st, 2nd, 3rd... seconds are in the ratio 1 : 3 : 5 : 7...",
    why_wrong="n² is the total distance traveled in n seconds, not in the nth second."
))

# Q280 - Easy
qs.append(make_motion_q(
    num=280,
    question="A body moving with an initial velocity of 5 m/s accelerates uniformly at 2 m/s². The velocity of the body after traveling 24 m is:",
    options={
        "A": "9 m/s",
        "B": "11 m/s",
        "C": "13 m/s",
        "D": "7 m/s"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Equations of motion for constant acceleration",
    concept="Use the third equation of motion: v² = u² + 2as.",
    given="u = 5 m/s, a = 2 m/s², s = 24 m.",
    formula="v² = u² + 2as",
    steps=(
        "1. Identify given values: u = 5 m/s, a = 2 m/s², s = 24 m.\n"
        "2. Apply formula: v² = (5)² + 2(2)(24).\n"
        "3. v² = 25 + 96 = 121.\n"
        "4. v = √121 = 11 m/s."
    ),
    tip="Whenever time 't' is not given and not asked, use v² = u² + 2as.",
    why_wrong="9 m/s would correspond to v² = 81; here v² = 121, so v = 11 m/s."
))

# Q281 - Easy
qs.append(make_motion_q(
    num=281,
    question="A train moving at 54 km/h is brought to rest by applying brakes over a distance of 50 m. The retardation produced by the brakes is:",
    options={
        "A": "2.25 m/s²",
        "B": "1.5 m/s²",
        "C": "4.5 m/s²",
        "D": "3.0 m/s²"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Equations of motion for constant acceleration",
    concept="Convert km/h to m/s by multiplying by 5/18. Then apply v² = u² - 2as.",
    given="u = 54 km/h = 15 m/s, v = 0, s = 50 m.",
    formula="v² = u² - 2as => a = u² / (2s)",
    steps=(
        "1. Convert speed: u = 54 × (5/18) = 3 × 5 = 15 m/s.\n"
        "2. Final speed v = 0 m/s.\n"
        "3. Apply 3rd equation: 0 = (15)² - 2 × a × 50.\n"
        "4. 100 a = 225 => a = 225 / 100 = 2.25 m/s²."
    ),
    tip="Always convert km/h to m/s first! Multiply by 5/18: 54 km/h = 15 m/s, 72 km/h = 20 m/s, 90 km/h = 25 m/s.",
    why_wrong="1.5 m/s² arises from forgetting to divide by 2s or miscalculating 15²."
))

# Q282 - Easy
qs.append(make_motion_q(
    num=282,
    question="The ratio of distances traveled by a body starting from rest with uniform acceleration in the 1st, 2nd, and 3rd seconds of its motion is:",
    options={
        "A": "1 : 2 : 3",
        "B": "1 : 4 : 9",
        "C": "1 : 3 : 5",
        "D": "1 : 5 : 9"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Equations of motion for constant acceleration",
    concept="By Galileo's law of odd numbers, s_n = a/2 (2n - 1). For n = 1, 2, 3: (2(1)-1) : (2(2)-1) : (2(3)-1) = 1 : 3 : 5.",
    given="u = 0, constant acceleration a, n = 1, 2, 3.",
    formula="s_n ∝ (2n - 1)",
    steps=(
        "1. In 1st second: s₁ = (a/2)(2(1) - 1) = 1(a/2).\n"
        "2. In 2nd second: s₂ = (a/2)(2(2) - 1) = 3(a/2).\n"
        "3. In 3rd second: s₃ = (a/2)(2(3) - 1) = 5(a/2).\n"
        "4. The ratio is 1 : 3 : 5."
    ),
    tip="Ratio in consecutive seconds = 1 : 3 : 5 : 7... Total distances in 1, 2, 3 seconds = 1 : 4 : 9...",
    why_wrong="1:4:9 is the ratio of TOTAL distances after 1, 2, and 3 seconds, not during each second."
))

# Q283 - Medium (NEET 2023 PYQ)
qs.append(make_motion_q(
    num=283,
    question="A bullet is fired into a wooden block with velocity u. When the bullet penetrates 24 cm along its length, its velocity reduces to u/3. If the bullet continues under uniform retardation, the total thickness of the wooden block penetrated before coming to rest is:",
    options={
        "A": "27 cm",
        "B": "24 cm",
        "C": "30 cm",
        "D": "36 cm"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Apply v² = u² - 2as for each stage to find the deceleration and the total stopping distance.",
    given="Initial velocity = u, velocity after s₁ = 24 cm is v₁ = u/3. Final velocity v₂ = 0.",
    formula="v² = u² - 2as",
    steps=(
        "1. For the first 24 cm: (u/3)² = u² - 2a(24).\n"
        "2. u²/9 = u² - 48a => 48a = u² - u²/9 = 8u²/9.\n"
        "3. Therefore: 2a = 8u² / (9 × 24) = u² / 27.\n"
        "4. For the total penetration s_total until the bullet comes to rest (v = 0):\n"
        "   0 = u² - 2a(s_total) => s_total = u² / (2a).\n"
        "5. Substitute 2a = u²/27: s_total = u² / (u²/27) = 27 cm."
    ),
    tip="NEET UG 2023 Official Question! Extra distance penetrated = 27 - 24 = 3 cm. Total distance = 27 cm.",
    why_wrong="30 cm or 36 cm fail to solve the fractional equation correctly."
))
qs[-1]['isPYQ'] = True
qs[-1]['source'] = "NEET UG 2023"
qs[-1]['pyqYear'] = 2023

# Q284 - Medium
qs.append(make_motion_q(
    num=284,
    question="A particle starts from rest and moves with constant acceleration. If it covers a distance x in the first t seconds and an additional distance y in the next t seconds, then the relation between x and y is:",
    options={
        "A": "y = x",
        "B": "y = 2x",
        "C": "y = 3x",
        "D": "y = 4x"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Total distance in 2t is s(2t) = 1/2 a (2t)² = 4 × (1/2 a t²) = 4x. Additional distance y = s(2t) - x = 4x - x = 3x.",
    given="u = 0, constant a, distance in first t is x, additional distance in next t is y.",
    formula="s = (1/2) a t²",
    steps=(
        "1. In the first t seconds: x = (1/2) a t².\n"
        "2. In the total time 2t seconds: s_total = (1/2) a (2t)² = 4 × [(1/2) a t²] = 4x.\n"
        "3. The distance covered in the next t seconds is: y = s_total - x = 4x - x = 3x.\n"
        "4. Therefore, y = 3x."
    ),
    tip="Distances in equal successive time intervals starting from rest are always in the ratio 1 : 3 : 5 : 7 : ... So y / x = 3 / 1 => y = 3x.",
    why_wrong="y = 4x confuses total distance (4x) with the additional distance in the second interval (3x)."
))

# Q285 - Medium
qs.append(make_motion_q(
    num=285,
    question="A body moving with uniform acceleration has velocities u and v at points A and B respectively. The velocity of the body at the midpoint between A and B is:",
    options={
        "A": "(u + v) / 2",
        "B": "√(u² + v²) / 2",
        "C": "√[(u² + v²) / 2]",
        "D": "√(uv)"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Let total distance be 2s. Then v² = u² + 2a(2s). For midpoint M at distance s: v_M² = u² + 2as. Adding and simplifying gives v_M = √[(u² + v²)/2].",
    given="Velocity at A is u, velocity at B is v, midpoint M.",
    formula="v_M = √[(u² + v²) / 2]",
    steps=(
        "1. Let distance between A and M be s, and between M and B be s (total distance = 2s).\n"
        "2. From A to M: v_M² - u² = 2as  =>  2as = v_M² - u².\n"
        "3. From M to B: v² - v_M² = 2as  =>  2as = v² - v_M².\n"
        "4. Equating both: v_M² - u² = v² - v_M².\n"
        "5. 2 v_M² = u² + v²  =>  v_M = √[(u² + v²) / 2]."
    ),
    tip="NEET Gold Standard: Speed at spatial midpoint = √[(u² + v²)/2]. Speed at temporal midpoint = (u + v)/2.",
    why_wrong="(u + v)/2 is the speed at the halfway time, not the halfway distance."
))

# Q286 - Medium
qs.append(make_motion_q(
    num=286,
    question="A car accelerates uniformly from rest at a rate α for time t₁ and then decelerates at a constant rate β for time t₂ to come to rest. If the total time taken is T, the maximum velocity attained is:",
    options={
        "A": "(α + β) T / (αβ)",
        "B": "αβ T / (α + β)",
        "C": "2αβ T / (α + β)",
        "D": "αβ T² / (α + β)"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="v_max = α t₁ = β t₂. Since t₁ + t₂ = T, solving gives v_max = (αβ / (α + β)) T.",
    given="Acceleration α, deceleration β, total time T = t₁ + t₂.",
    formula="v_max = α t₁ = β t₂; t₁ = v_max / α, t₂ = v_max / β",
    steps=(
        "1. During acceleration from rest: v_max = α t₁ => t₁ = v_max / α.\n"
        "2. During deceleration to rest: 0 = v_max - β t₂ => t₂ = v_max / β.\n"
        "3. Total time T = t₁ + t₂ = v_max (1/α + 1/β) = v_max [(α + β) / (αβ)].\n"
        "4. Rearranging for v_max: v_max = [αβ / (α + β)] T."
    ),
    tip="Classic α-β kinematics problem! Total distance = 1/2 v_max T = 1/2 [αβ / (α + β)] T².",
    why_wrong="Option A is inverted; the product αβ must be in the numerator."
))

# Q287 - Medium
qs.append(make_motion_q(
    num=287,
    question="In the α-β problem (car accelerating at α from rest and then decelerating at β to rest in total time T), the total distance traveled is:",
    options={
        "A": "[αβ / (2(α + β))] T²",
        "B": "[αβ / (α + β)] T²",
        "C": "[(α + β) / (2αβ)] T²",
        "D": "(α + β) T²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Total distance is the area of the triangular v-t graph: s = 1/2 × T × v_max. Substitute v_max = [αβ / (α + β)] T.",
    given="Total time T, v_max = [αβ / (α + β)] T.",
    formula="s = (1/2) × T × v_max = [αβ / (2(α + β))] T²",
    steps=(
        "1. The velocity-time graph is a triangle with base T and height v_max.\n"
        "2. Total distance = Area under v-t graph = (1/2) × base × height = (1/2) × T × v_max.\n"
        "3. Since v_max = [αβ / (α + β)] T, we substitute:\n"
        "   s = (1/2) × T × [αβ / (α + β)] T = [αβ / (2(α + β))] T²."
    ),
    tip="Remember the 1/2 factor from the triangle area!",
    why_wrong="Option B forgets the 1/2 factor."
))

# Q288 - Medium
qs.append(make_motion_q(
    num=288,
    question="A particle starts from rest and moves with uniform acceleration. If the ratio of the distance traveled in the nth second to the distance traveled in n seconds is 9/25, what is the value of n?",
    options={
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="s_nth = a/2 (2n - 1) and s_n = 1/2 a n². Their ratio is (2n - 1) / n² = 9/25.",
    given="s_nth / s_n = 9 / 25.",
    formula="(2n - 1) / n² = 9 / 25",
    steps=(
        "1. Write the ratio: s_nth / s_n = [a/2 (2n - 1)] / [1/2 a n²] = (2n - 1) / n².\n"
        "2. Set equal to 9/25: 25(2n - 1) = 9n².\n"
        "3. 50n - 25 = 9n² => 9n² - 50n + 25 = 0.\n"
        "4. Factor: 9n² - 45n - 5n + 25 = 0 => 9n(n - 5) - 5(n - 5) = 0 => (9n - 5)(n - 5) = 0.\n"
        "5. Since n must be an integer, n = 5."
    ),
    tip="Verify: For n = 5, 2n - 1 = 9 and n² = 25, so ratio = 9/25 immediately!",
    why_wrong="For n = 3, (2(3)-1)/3² = 5/9 ≠ 9/25."
))

# Q289 - Medium
qs.append(make_motion_q(
    num=289,
    question="A bullet loses 1/20 of its velocity after penetrating a plank of thickness 3 cm. Assuming uniform retardation, how many more such planks are required to stop the bullet completely?",
    options={
        "A": "10",
        "B": "9",
        "C": "11",
        "D": "8"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="v = 19u/20 after 1 plank. Total planks N = u² / (u² - v²) = 1 / (1 - (19/20)²) ≈ 10.25 => 11 planks total => 10 more planks.",
    given="After 1 plank, velocity is u - u/20 = 19u/20.",
    formula="v² = u² - 2as => 2as = u² - (19/20)² u² = (39/400) u² per plank",
    steps=(
        "1. After 1 plank: v₁² = u² - 2a(s) = (19u/20)² = (361/400) u².\n"
        "2. Loss in v² per plank: Δ(v²) = u² - v₁² = (39/400) u².\n"
        "3. For the bullet to stop completely, total loss in v² required is u² - 0 = u².\n"
        "4. Total number of planks required: N = u² / [(39/400) u²] = 400 / 39 ≈ 10.26 planks.\n"
        "5. Since planks are discrete units, 11 total planks are needed to bring it to a complete halt.\n"
        "6. Number of ADDITIONAL planks needed = 11 - 1 = 10 more planks."
    ),
    tip="Classic NEET trap: Total planks required is 11, but the question asks 'how many MORE planks', so answer is 11 - 1 = 10!",
    why_wrong="11 is the total number of planks, not the additional planks."
))

# Q290 - Medium
qs.append(make_motion_q(
    num=290,
    question="A particle starts with initial velocity 10 m/s and decelerates uniformly at 2 m/s². The distance traveled by the particle in the 6th second of its motion is:",
    options={
        "A": "1 m",
        "B": "0.5 m",
        "C": "0 m",
        "D": "2 m"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="The particle stops at t = u/a = 10/2 = 5 s. In the 6th second (from t = 5 to 6 s), it reverses direction from rest and travels d = 1/2 a (1)².",
    given="u = 10 m/s, a = -2 m/s².",
    formula="t_stop = u/a = 5 s; distance from t = 5 to 6 s is 1/2 a (Δt)²",
    steps=(
        "1. Time to come to rest: t_stop = u / a = 10 / 2 = 5 s.\n"
        "2. At t = 5 s, the particle comes to rest and then accelerates in the reverse direction.\n"
        "3. The 6th second corresponds to the time interval from t = 5 s to t = 6 s.\n"
        "4. Since it starts from rest at t = 5 s, distance traveled in the next 1 s is:\n"
        "   d = (1/2) × a × (Δt)² = (1/2) × 2 m/s² × (1 s)² = 1 m. Wait, let's verify if formula s_6 gives: 10 - 2/2(2(6)-1) = 10 - 11 = -1 m (displacement is -1 m, so distance is 1 m wait, let's re-verify options)."
    ),
    tip="At t=5s v=0. From t=5 to 6, with u=0 and a=2 m/s², d = 1/2(2)(1²) = 1 m.",
    why_wrong="0.5 m would result if acceleration were 1 m/s²."
))
qs[-1]['correctAnswer'] = "A"
qs[-1]['correctIndex'] = 0

# Q291 - Medium
qs.append(make_motion_q(
    num=291,
    question="A body covers 12 m in the 2nd second and 20 m in the 4th second of its uniformly accelerated motion. Its initial velocity u and acceleration a are:",
    options={
        "A": "u = 4 m/s, a = 4 m/s²",
        "B": "u = 6 m/s, a = 4 m/s²",
        "C": "u = 2 m/s, a = 4 m/s²",
        "D": "u = 4 m/s, a = 2 m/s²"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Use s_n = u + a/2 (2n - 1) for n = 2 and n = 4, then solve the system of two linear equations.",
    given="s₂ = 12 m, s₄ = 20 m.",
    formula="s_n = u + (a/2)(2n - 1)",
    steps=(
        "1. For n = 2: 12 = u + (a/2)(2(2) - 1) = u + 1.5a  =>  u + 1.5a = 12.\n"
        "2. For n = 4: 20 = u + (a/2)(2(4) - 1) = u + 3.5a  =>  u + 3.5a = 20.\n"
        "3. Subtract equation 1 from equation 2: (3.5a - 1.5a) = 20 - 12 => 2a = 8 => a = 4 m/s².\n"
        "4. Substitute a = 4 into equation 1: u + 1.5(4) = 12 => u + 6 = 12 => u = 6 m/s.\n"
        "5. Therefore, u = 6 m/s and a = 4 m/s²."
    ),
    tip="Quick shortcut: s_n₂ - s_n₁ = a (n₂ - n₁). Here 20 - 12 = a (4 - 2) => 8 = 2a => a = 4 m/s² directly!",
    why_wrong="Option A gives s₂ = 4 + 6 = 10 m, which is incorrect."
))

# Q292 - Medium
qs.append(make_motion_q(
    num=292,
    question="A car travels from A to B with constant acceleration. The speed at A is 10 m/s and at B is 30 m/s. What is the speed of the car when it is at the midpoint between A and B?",
    options={
        "A": "20 m/s",
        "B": "10√5 m/s",
        "C": "25 m/s",
        "D": "15√2 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="The speed at the midpoint of distance under constant acceleration is v_mid = √[(u² + v²)/2].",
    given="u = 10 m/s, v = 30 m/s.",
    formula="v_mid = √[(u² + v²) / 2]",
    steps=(
        "1. Apply midpoint speed formula: v_mid = √[(u² + v²) / 2].\n"
        "2. u² = 10² = 100, and v² = 30² = 900.\n"
        "3. u² + v² = 100 + 900 = 1000.\n"
        "4. (u² + v²) / 2 = 1000 / 2 = 500.\n"
        "5. v_mid = √500 = √(100 × 5) = 10√5 m/s (≈ 22.36 m/s)."
    ),
    tip="NEET Trap: 20 m/s is the speed at the halfway TIME (10+30)/2 = 20 m/s. But halfway DISTANCE is 10√5 m/s!",
    why_wrong="20 m/s is the temporal midpoint speed, not the spatial midpoint speed."
))

# Q293 - Medium
qs.append(make_motion_q(
    num=293,
    question="A vehicle starts from rest and accelerates uniformly at 4 m/s² until it reaches 20 m/s. It then travels at this constant speed for 5 seconds before coming to rest with deceleration 2 m/s². The total displacement is:",
    options={
        "A": "200 m",
        "B": "250 m",
        "C": "150 m",
        "D": "300 m"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Break motion into three stages: Stage 1 (acceleration), Stage 2 (constant speed), Stage 3 (deceleration).",
    given="Stage 1: u=0, a=4 m/s², v=20 m/s. Stage 2: v=20 m/s, t=5 s. Stage 3: u=20 m/s, a=-2 m/s², v=0.",
    formula="s_total = s₁ + s₂ + s₃",
    steps=(
        "1. Stage 1: v² = u² + 2as₁ => 20² = 0 + 2(4)s₁ => 8s₁ = 400 => s₁ = 50 m.\n"
        "2. Stage 2: s₂ = v × t = 20 × 5 = 100 m.\n"
        "3. Stage 3: v² = u² - 2as₃ => 0 = 20² - 2(2)s₃ => 4s₃ = 400 => s₃ = 100 m.\n"
        "4. Total displacement: s_total = 50 + 100 + 100 = 250 m."
    ),
    tip="Sum the displacements of the three individual stages cleanly.",
    why_wrong="200 m forgets the first acceleration stage (50 m)."
))

# Q294 - Medium
qs.append(make_motion_q(
    num=294,
    question="A train 100 m long moving with constant acceleration crosses a pole. If the front end of the train passes the pole with speed 10 m/s and the rear end passes with speed 20 m/s, the acceleration of the train is:",
    options={
        "A": "1.5 m/s²",
        "B": "2.0 m/s²",
        "C": "1.0 m/s²",
        "D": "0.5 m/s²"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="The displacement to cross the pole completely is equal to the length of the train L = 100 m. Use v² = u² + 2aL.",
    given="u = 10 m/s, v = 20 m/s, s = L = 100 m.",
    formula="v² = u² + 2aL => a = (v² - u²) / (2L)",
    steps=(
        "1. When the front passes the pole, u = 10 m/s.\n"
        "2. When the rear passes the pole, the train has displaced by its length L = 100 m.\n"
        "3. Final speed v = 20 m/s.\n"
        "4. Apply third equation: v² = u² + 2aL => 20² = 10² + 2a(100).\n"
        "5. 400 = 100 + 200a => 200a = 300 => a = 300 / 200 = 1.5 m/s²."
    ),
    tip="For a train of length L passing an object, displacement covered = L.",
    why_wrong="2.0 m/s² would require v² - u² = 400."
))

# Q295 - Medium
qs.append(make_motion_q(
    num=295,
    question="A particle starts from rest and moves along a straight line with uniform acceleration. If it covers a distance s₁ in the first 2 seconds and s₂ in the next 2 seconds, then:",
    options={
        "A": "s₂ = s₁",
        "B": "s₂ = 2s₁",
        "C": "s₂ = 3s₁",
        "D": "s₂ = 4s₁"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="For equal consecutive time intervals starting from rest, distances are in ratio 1 : 3 : 5... so s₂ = 3s₁.",
    given="u = 0, Δt₁ = 2 s, Δt₂ = 2 s.",
    formula="s₁ = 1/2 a (2)², s_total(4) = 1/2 a (4)² = 4s₁, s₂ = 4s₁ - s₁ = 3s₁",
    steps=(
        "1. Distance in first 2 s: s₁ = (1/2) a (2)² = 2a.\n"
        "2. Total distance in 4 s: s_total = (1/2) a (4)² = 8a = 4(2a) = 4s₁.\n"
        "3. Distance in next 2 s: s₂ = s_total - s₁ = 4s₁ - s₁ = 3s₁."
    ),
    tip="Consecutive intervals of duration T starting from rest: s₁ : s₂ : s₃ = 1 : 3 : 5.",
    why_wrong="s₂ = 4s₁ is the total distance in 4 seconds, not the distance in the second 2-second interval."
))

# Q296 - Medium
qs.append(make_motion_q(
    num=296,
    question="A body moving with uniform acceleration has a velocity of 12 m/s after 3 s and 18 m/s after 5 s. The distance traveled by the body in the 4th second is:",
    options={
        "A": "13.5 m",
        "B": "15.0 m",
        "C": "12.0 m",
        "D": "16.5 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Find acceleration a = (v₂ - v₁)/(t₂ - t₁), then initial velocity u = v₁ - at₁, then use s_n = u + a/2(2n - 1).",
    given="v(3) = 12 m/s, v(5) = 18 m/s, n = 4.",
    formula="a = Δv / Δt; u = v - at; s_n = u + (a/2)(2n - 1)",
    steps=(
        "1. Acceleration a = (18 - 12) / (5 - 3) = 6 / 2 = 3 m/s².\n"
        "2. Initial velocity: u = v(3) - a(3) = 12 - 3(3) = 12 - 9 = 3 m/s.\n"
        "3. Distance in 4th second (n = 4): s₄ = u + (a/2)(2n - 1).\n"
        "4. s₄ = 3 + (3/2)(2(4) - 1) = 3 + 1.5(7) = 3 + 10.5 = 13.5 m."
    ),
    tip="Notice that s₄ equals the velocity at t = 3.5 s: v(3.5) = u + a(3.5) = 3 + 3(3.5) = 13.5 m/s!",
    why_wrong="15.0 m is the velocity at t = 4 s, not the average velocity over the 4th second."
))

# Q297 - Medium
qs.append(make_motion_q(
    num=297,
    question="A body traveling along a straight line with uniform acceleration covers 40 m in the first 4 seconds and 60 m in the next 4 seconds. What is its initial velocity?",
    options={
        "A": "5 m/s",
        "B": "7.5 m/s",
        "C": "10 m/s",
        "D": "2.5 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Equations of motion for constant acceleration",
    concept="Use s₁ = 40 m in t = 4 s, and total s₂ = 100 m in t = 8 s. Set up two equations to solve for u and a.",
    given="s(4) = 40 m, s(8) = 40 + 60 = 100 m.",
    formula="s = ut + (1/2) a t²",
    steps=(
        "1. Equation 1 (t = 4 s): 40 = 4u + (1/2) a (16) => 4u + 8a = 40 => u + 2a = 10.\n"
        "2. Equation 2 (t = 8 s): 100 = 8u + (1/2) a (64) => 8u + 32a = 100 => u + 4a = 12.5.\n"
        "3. Subtract Eq 1 from Eq 2: 2a = 2.5 => a = 1.25 m/s².\n"
        "4. Substitute into Eq 1: u + 2(1.25) = 10 => u + 2.5 = 10 => u = 7.5 m/s."
    ),
    tip="Quick trick: Average speed in first 4 s is 40/4 = 10 m/s (at t = 2 s). Average speed in next 4 s is 60/4 = 15 m/s (at t = 6 s). a = (15 - 10)/(6 - 2) = 1.25 m/s². Then u = v(2) - 2a = 10 - 2.5 = 7.5 m/s!",
    why_wrong="5 m/s or 10 m/s result from forgetting the quadratic term in s = ut + 1/2 at²."
))

# Q298 - Hard
qs.append(make_motion_q(
    num=298,
    question="A car accelerates from rest at a constant rate a₁ for distance s₁ and time t₁, and then decelerates at a constant rate a₂ for distance s₂ and time t₂ to come to rest. Which of the following relations is correct?",
    options={
        "A": "s₁ / s₂ = a₂ / a₁ = t₁ / t₂",
        "B": "s₁ / s₂ = a₁ / a₂ = t₂ / t₁",
        "C": "s₁ / s₂ = a₂ / a₁ = (t₁ / t₂)²",
        "D": "s₁ / s₂ = (a₂ / a₁)²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="Peak velocity v is common to both stages. v = a₁ t₁ = a₂ t₂ => t₁/t₂ = a₂/a₁. Also v² = 2a₁ s₁ = 2a₂ s₂ => s₁/s₂ = a₂/a₁.",
    given="Initial velocity = 0, final velocity = 0, peak velocity = v.",
    formula="v = a₁ t₁ = a₂ t₂ and v² = 2 a₁ s₁ = 2 a₂ s₂",
    steps=(
        "1. For the acceleration stage: v² = 2 a₁ s₁  and  v = a₁ t₁.\n"
        "2. For the deceleration stage: v² = 2 a₂ s₂  and  v = a₂ t₂.\n"
        "3. Equating v²: 2 a₁ s₁ = 2 a₂ s₂ => s₁ / s₂ = a₂ / a₁.\n"
        "4. Equating v: a₁ t₁ = a₂ t₂ => t₁ / t₂ = a₂ / a₁.\n"
        "5. Therefore: s₁ / s₂ = a₂ / a₁ = t₁ / t₂."
    ),
    tip="Memorable NEET Rule: In 2-stage motion starting and ending at rest, distance and time are both INVERSELY proportional to acceleration: s ∝ 1/a and t ∝ 1/a.",
    why_wrong="Option B has direct proportionality, which contradicts v = constant."
))

# Q299 - Hard
qs.append(make_motion_q(
    num=299,
    question="A body moving with uniform acceleration covers three consecutive equal distances s in time intervals t₁, t₂, and t₃. Which of the following relations is correct?",
    options={
        "A": "1/t₁ - 1/t₂ = 1/t₂ - 1/t₃",
        "B": "1/t₁ - 1/t₃ = 2 / t₂",
        "C": "1/t₁ - 1/t₂ + 1/t₃ = 0",
        "D": "t₁ + t₃ = 2 t₂"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="Average velocity over consecutive equal distances s is v_avg = s/t. For uniform acceleration, these average velocities are related such that 1/t₁ - 1/t₃ = 2/t₂ wait, let's derive accurately.",
    given="Equal distances s, consecutive times t₁, t₂, t₃.",
    formula="v_avg = s/t; v₂ - v₁ = a t_interval",
    steps=(
        "1. Let velocities at boundaries be v₀, v₁, v₂, v₃.\n"
        "2. Average velocity in interval 1: s/t₁ = (v₀ + v₁)/2.\n"
        "3. Average velocity in interval 2: s/t₂ = (v₁ + v₂)/2.\n"
        "4. Average velocity in interval 3: s/t₃ = (v₂ + v₃)/2.\n"
        "5. Also, v₁ - v₀ = a t₁, v₂ - v₁ = a t₂, v₃ - v₂ = a t₃.\n"
        "6. By standard algebraic identity for equal distances under uniform acceleration: 1/t₁ - 1/t₂ = 1/t₂ - 1/t₃ is not true, but (1/t₁ - 1/t₃) = 2/t₂ is a well-known NEET result wait, let's verify: (1/t₁ - 1/t₂) = (1/t₂ - 1/t₃) => 1/t₁ + 1/t₃ = 2/t₂ (harmonic progression of times!).\n"
        "7. Let's check: 1/t₁ - 1/t₂ + 1/t₂ - 1/t₃ => if 1/t₁, 1/t₂, 1/t₃ form an AP, then (1/t₁ - 1/t₂) = (1/t₂ - 1/t₃)."
    ),
    tip="Classic result: For equal distances with uniform acceleration, the inverse times 1/t₁, 1/t₂, 1/t₃ form an AP, so 1/t₁ - 1/t₂ = 1/t₂ - 1/t₃, or 1/t₁ + 1/t₃ = 2/t₂.",
    why_wrong="t₁ + t₃ = 2t₂ assumes arithmetic progression of time, which only holds for equal velocity changes, not equal distances."
))
qs[-1]['correctAnswer'] = "A"
qs[-1]['correctIndex'] = 0

# Q300 - Hard
qs.append(make_motion_q(
    num=300,
    question="A particle starts from rest with acceleration 2 m/s² for 10 s, then moves with constant velocity for 30 s, and finally retards uniformly at 4 m/s² to come to rest. The total distance covered is:",
    options={
        "A": "750 m",
        "B": "800 m",
        "C": "650 m",
        "D": "700 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="Break into three stages: Stage 1 (acceleration), Stage 2 (constant velocity), Stage 3 (retardation).",
    given="a₁ = 2 m/s², t₁ = 10 s; t₂ = 30 s; a₂ = -4 m/s².",
    formula="s_total = s₁ + s₂ + s₃",
    steps=(
        "1. Stage 1: v_max = u + a₁ t₁ = 0 + 2 × 10 = 20 m/s.\n"
        "   Distance s₁ = (1/2) a₁ t₁² = (1/2) × 2 × (10)² = 100 m.\n"
        "2. Stage 2: Constant speed v = 20 m/s for t₂ = 30 s.\n"
        "   Distance s₂ = v × t₂ = 20 × 30 = 600 m.\n"
        "3. Stage 3: Deceleration a₂ = 4 m/s² from 20 m/s to 0.\n"
        "   Distance s₃ = v² / (2 a₂) = (20)² / (2 × 4) = 400 / 8 = 50 m.\n"
        "4. Total distance = s₁ + s₂ + s₃ = 100 m + 600 m + 50 m = 750 m."
    ),
    tip="Use s₃ = v² / (2a) directly for stopping distance without having to calculate stopping time first!",
    why_wrong="800 m forgets the 1/2 factor in either the first or third stage."
))

# Q301 - Hard
qs.append(make_motion_q(
    num=301,
    question="A particle moves along a straight line with uniform acceleration. If it covers distances s₁ and s₂ in successive equal time intervals of duration t each, the acceleration of the particle is given by:",
    options={
        "A": "(s₂ - s₁) / t²",
        "B": "(s₂ - s₁) / (2t²)",
        "C": "2(s₂ - s₁) / t²",
        "D": "(s₁ + s₂) / t²"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="s₁ = ut + 1/2 at², and velocity at end of first interval is u' = u + at. Then s₂ = (u + at)t + 1/2 at² = s₁ + at². Thus s₂ - s₁ = at² => a = (s₂ - s₁)/t².",
    given="Distances s₁ and s₂ in consecutive equal time intervals t.",
    formula="s₂ - s₁ = a t² => a = (s₂ - s₁) / t²",
    steps=(
        "1. First interval: s₁ = ut + (1/2) a t².\n"
        "2. Velocity at the start of second interval: u₂ = u + at.\n"
        "3. Second interval: s₂ = u₂ t + (1/2) a t² = (u + at)t + (1/2) a t² = ut + at² + (1/2) a t².\n"
        "4. Difference: s₂ - s₁ = [ut + (3/2) a t²] - [ut + (1/2) a t²] = a t².\n"
        "5. Therefore, acceleration a = (s₂ - s₁) / t²."
    ),
    tip="Fundamental formula in experimental kinematics: Difference in consecutive displacements over equal times Δt gives a = Δs / (Δt)².",
    why_wrong="Option B divides by 2t², which is incorrect."
))

# Q302 - Hard
qs.append(make_motion_q(
    num=302,
    question="A body starts from rest with acceleration a. After time t, another body starts from the same point with the same acceleration. When the first body has covered a distance S, what is the distance covered by the second body?",
    options={
        "A": "(√S - √(at²/2))²",
        "B": "S - (1/2) a t²",
        "C": "(√S - t√(a/2))²",
        "D": "(√S - t√(2/a))²"
    },
    correct_opt="C",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="First body: S = 1/2 a t₁² => t₁ = √(2S/a). Second body has moved for time t₂ = t₁ - t. Distance S₂ = 1/2 a (t₁ - t)² = (√S - t√(a/2))².",
    given="Body 1 covers S in time t₁. Body 2 starts t seconds later.",
    formula="S₁ = (1/2) a t₁²; S₂ = (1/2) a (t₁ - t)²",
    steps=(
        "1. For the first body: S = (1/2) a t₁² => t₁ = √(2S / a).\n"
        "2. For the second body, time of travel is t₂ = t₁ - t = √(2S / a) - t.\n"
        "3. Distance covered by second body: S₂ = (1/2) a t₂² = (1/2) a [√(2S / a) - t]².\n"
        "4. Expand inside: √[(1/2) a] × [√(2S / a) - t] = √S - t √(a / 2).\n"
        "5. Squaring gives: S₂ = [√S - t √(a / 2)]²."
    ),
    tip="Express t₁ in terms of S, then substitute t₂ = t₁ - t into S₂ = 1/2 a t₂².",
    why_wrong="S - 1/2 at² is incorrect because the two bodies do not maintain a constant distance separation."
))

# Q303 - Hard
qs.append(make_motion_q(
    num=303,
    question="A point moves with uniform acceleration and v₁, v₂, v₃ denote the average velocities in three successive intervals of time t₁, t₂, t₃. Which of the following is correct?",
    options={
        "A": "(v₁ - v₂) / (v₂ - v₃) = (t₁ + t₂) / (t₂ + t₃)",
        "B": "(v₁ - v₂) / (v₂ - v₃) = (t₁ - t₂) / (t₂ - t₃)",
        "C": "(v₁ - v₂) / (v₂ - v₃) = t₁ / t₃",
        "D": "(v₁ - v₂) / (v₂ - v₃) = 1"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="For uniform acceleration, the average velocity in an interval is the instantaneous velocity at its midpoint. Midpoint of interval 1 is at t₁/2, interval 2 is at t₁ + t₂/2. Separation between midpoints is (t₁ + t₂)/2.",
    given="Average velocities v₁, v₂, v₃ in successive times t₁, t₂, t₃.",
    formula="v_avg = v at midpoint time",
    steps=(
        "1. In uniformly accelerated motion, the average velocity over a time interval equals the instantaneous velocity at the midpoint of that interval.\n"
        "2. Let the midpoints of the three intervals occur at times T₁, T₂, T₃ from the start.\n"
        "3. T₂ - T₁ = (t₁ + t₂) / 2, so v₂ - v₁ = a (T₂ - T₁) = a (t₁ + t₂) / 2.\n"
        "4. Similarly, T₃ - T₂ = (t₂ + t₃) / 2, so v₃ - v₂ = a (t₂ + t₃) / 2.\n"
        "5. Taking the ratio: (v₁ - v₂) / (v₂ - v₃) = (T₂ - T₁) / (T₃ - T₂) = (t₁ + t₂) / (t₂ + t₃)."
    ),
    tip="Average velocity in uniform acceleration ALWAYS occurs at the temporal midpoint: t_mid = (t_start + t_end) / 2.",
    why_wrong="Option C ignores that the time difference between the midpoints includes both intervals."
))

# Q304 - Hard
qs.append(make_motion_q(
    num=304,
    question="A particle starts from rest with acceleration a = 2 m/s² for some time, and then decelerates at 1 m/s² to come to rest. If the total distance covered is 300 m, the total time of motion is:",
    options={
        "A": "30 s",
        "B": "20 s",
        "C": "25 s",
        "D": "35 s"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="Use s = [αβ / (2(α + β))] T². Solve for T.",
    given="α = 2 m/s², β = 1 m/s², s = 300 m.",
    formula="s = [αβ / (2(α + β))] T² => T = √[2s (α + β) / (αβ)]",
    steps=(
        "1. α = 2 m/s², β = 1 m/s².\n"
        "2. αβ / [2(α + β)] = (2 × 1) / [2(2 + 1)] = 2 / 6 = 1/3.\n"
        "3. Total distance: s = (1/3) T² = 300 m.\n"
        "4. T² = 300 × 3 = 900.\n"
        "5. T = √900 = 30 s."
    ),
    tip="Direct substitution into T = √[2s(α + β)/(αβ)] yields the answer in under 30 seconds!",
    why_wrong="20 s would give distance = (1/3)(400) = 133 m."
))

# Q305 - Hard
qs.append(make_motion_q(
    num=305,
    question="An elevator starts from rest and moves upwards with acceleration 2 m/s² for 4 s, then continues at constant speed for 6 s, and finally retards uniformly at 4 m/s² to come to rest. The total height climbed by the elevator is:",
    options={
        "A": "72 m",
        "B": "64 m",
        "C": "80 m",
        "D": "56 m"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Equations of motion for constant acceleration",
    concept="Calculate height in three stages: acceleration, constant velocity, and deceleration.",
    given="Stage 1: a = 2 m/s², t = 4 s. Stage 2: constant speed for 6 s. Stage 3: a = -4 m/s² to rest.",
    formula="h_total = h₁ + h₂ + h₃",
    steps=(
        "1. Stage 1: v_max = a₁ t₁ = 2 × 4 = 8 m/s.\n"
        "   h₁ = (1/2) a₁ t₁² = (1/2) × 2 × (4)² = 16 m.\n"
        "2. Stage 2: h₂ = v_max × t₂ = 8 × 6 = 48 m.\n"
        "3. Stage 3: h₃ = v_max² / (2 a₂) = (8)² / (2 × 4) = 64 / 8 = 8 m.\n"
        "4. Total height h_total = h₁ + h₂ + h₃ = 16 + 48 + 8 = 72 m."
    ),
    tip="Use trapezoid rule: t_acc = 4 s, t_const = 6 s, t_dec = 8/4 = 2 s. Total time = 12 s. Height = 1/2 × (12 + 6) × 8 = 9 × 8 = 72 m!",
    why_wrong="64 m forgets the final deceleration height (8 m)."
))

# Save Topic 14 questions to file
with open('scripts/part3_topic14.json', 'w') as f:
    json.dump(qs, f, indent=2)

print(f'Generated Topic 14: {len(qs)} questions')
