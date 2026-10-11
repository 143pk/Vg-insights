import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 2: Distance and displacement (Q22 - Q42)
# 5 Easy, 11 Medium, 5 Hard
# ==============================================================================

# Q22 (Easy)
qs.append(make_motion_q(
    num=22,
    question="The numerical ratio of displacement to distance for a moving particle is always:",
    options={
        "A": "Always equal to 1",
        "B": "Always greater than 1",
        "C": "Equal to or less than 1",
        "D": "Equal to or greater than 1"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Distance and displacement",
    concept="Distance is the total length of the actual path traversed, whereas displacement is the shortest straight-line distance between initial and final points. Hence, |Displacement| ≤ Distance.",
    given="Ratio: |Displacement| / Distance.",
    formula="|Displacement| ≤ Distance => |Displacement| / Distance ≤ 1.",
    steps="1. Distance is the actual path traversed, which is always positive and accumulates monotonically.\n2. Displacement is the straight-line vector between initial and final positions.\n3. The straight line is the shortest possible path between two points.\n4. Therefore, |Displacement| ≤ Distance.\n5. The ratio |Displacement| / Distance is equal to 1 only for unidirectional straight-line motion without reversal, and less than 1 in all other cases.\n6. Hence, the ratio is always equal to or less than 1.",
    tip="Golden rule: Distance ≥ |Displacement|. Ratio (Displacement/Distance) ≤ 1, whereas (Distance/Displacement) ≥ 1.",
    why_wrong="Option A holds only for unidirectional motion without turning. Option B is physically impossible because shortest distance is displacement. Option D inverts the inequality."
))

# Q23 (Easy)
qs.append(make_motion_q(
    num=23,
    question="An athlete completes one round of a circular track of radius R in 40 seconds. What will be the magnitude of his displacement at the end of 2 minutes 20 seconds?",
    options={
        "A": "Zero",
        "B": "2R",
        "C": "2πR",
        "D": "7πR"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Distance and displacement",
    concept="For circular motion, displacement depends strictly on the initial and final positions on the circle.",
    given="Radius R, period T = 40 s, total time t = 2 min 20 s = 140 s.",
    formula="Number of rounds n = t / T.",
    steps="1. Convert total time to seconds: t = 2 * 60 + 20 = 140 s.\n2. Calculate number of rounds completed:\n   n = 140 / 40 = 3.5 rounds.\n3. After 3 complete rounds, the athlete returns to the initial starting point (displacement = 0).\n4. In the remaining 0.5 round (half a circle), the athlete reaches the diametrically opposite point.\n5. The straight-line distance between diametrically opposite points on a circle of radius R is its diameter: 2R.\n6. Therefore, the magnitude of displacement is 2R.",
    tip="NEET Classic: Half a round on a circle always produces a displacement equal to the diameter (2R), while the distance is πR.",
    why_wrong="Option A would be the displacement after an integer number of rounds (e.g. 40 s, 80 s, 120 s). Option C is the distance of one round. Option D is the total distance (3.5 * 2πR = 7πR)."
))

# Q24 (Easy)
qs.append(make_motion_q(
    num=24,
    question="A body moves 6 m towards East and then 8 m towards North. What is the total distance covered and the magnitude of the net displacement?",
    options={
        "A": "Distance = 14 m, Displacement = 10 m",
        "B": "Distance = 10 m, Displacement = 14 m",
        "C": "Distance = 14 m, Displacement = 2 m",
        "D": "Distance = 10 m, Displacement = 10 m"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Distance and displacement",
    concept="Distance is scalar sum of path segments: s = s₁ + s₂. Displacement is vector sum: s_net = √(s₁² + s₂²) for mutually perpendicular motions.",
    given="s₁ = 6 m East, s₂ = 8 m North (angle θ = 90°).",
    formula="Distance = s₁ + s₂; Displacement = √(s₁² + s₂²).",
    steps="1. Total path length (distance) = 6 m + 8 m = 14 m.\n2. Since East and North are perpendicular:\n   Magnitude of displacement = √(6² + 8²) = √(36 + 64) = √100 = 10 m.\n3. Direction is tan⁻¹(8/6) = 53° North of East.\n4. Hence, Distance = 14 m and Displacement = 10 m.",
    tip="Recognize the standard Pythagorean 3-4-5 triangle scaled by 2: 6, 8, 10!",
    why_wrong="Option B swaps distance and displacement. Option C subtracts 8 - 6 = 2 m for displacement. Option D claims distance equals displacement."
))

# Q25 (Easy)
qs.append(make_motion_q(
    num=25,
    question="Which of the following physical statements regarding distance and displacement is FALSE?",
    options={
        "A": "Distance can never be negative, but displacement can be positive, negative, or zero.",
        "B": "For a moving particle, distance can never decrease with time.",
        "C": "A body can have zero displacement and non-zero distance.",
        "D": "A body can have zero distance and non-zero displacement."
    },
    correct_opt="D",
    difficulty="Easy",
    topic="Distance and displacement",
    concept="Since |Displacement| ≤ Distance, if Distance = 0, the body has not moved at all, so Displacement must also be identically zero.",
    given="Comparison between distance and displacement.",
    formula="|Δx| ≤ Total Distance.",
    steps="1. Statement A is TRUE: distance is scalar path length (always ≥ 0), while displacement is a vector and can be +, -, or 0.\n2. Statement B is TRUE: as time elapses, any motion adds to the odometer reading; distance never decreases.\n3. Statement C is TRUE: a round trip back to the origin has zero displacement but positive distance.\n4. Statement D is FALSE: if distance is zero, the particle remained strictly at rest, meaning its position never changed, so displacement is 0. Displacement can never be non-zero when distance is zero.\n5. Therefore, Statement D is the false statement.",
    tip="If distance = 0, the particle is strictly at rest: displacement is guaranteed to be 0.",
    why_wrong="Options A, B, and C are physically correct statements, so they are not the requested false statement."
))

# Q26 (Easy)
qs.append(make_motion_q(
    num=26,
    question="A car travels along a straight road from town A to town B, covering a distance of 60 km towards East. It then returns back along the same road to town A. What are the total distance covered and the net displacement of the car for the entire round trip?",
    options={
        "A": "Distance = 120 km, Displacement = 0 km",
        "B": "Distance = 60 km, Displacement = 60 km East",
        "C": "Distance = 120 km, Displacement = 120 km East",
        "D": "Distance = 0 km, Displacement = 0 km"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Distance and displacement",
    concept="In a complete round trip, the initial and final positions are identical, so displacement is zero, while total distance is the sum of both journeys.",
    given="Journey A to B: 60 km East. Return journey B to A: 60 km West.",
    formula="Total Distance = d₁ + d₂; Net Displacement = x_final - x_initial.",
    steps="1. Path length from A to B = 60 km.\n2. Path length from B to A = 60 km.\n3. Total distance = 60 km + 60 km = 120 km.\n4. Initial position is town A, and final position is town A.\n5. Net displacement = 0 km.\n6. Hence, Distance = 120 km, Displacement = 0 km.",
    tip="Round trip means initial position = final position => Net displacement = 0 always!",
    why_wrong="Option B considers only one-way trip. Option C treats displacement as scalar addition. Option D claims the odometer did not roll."
))

# Q27 (Medium)
qs.append(make_motion_q(
    num=27,
    question="A particle moves along a semicircular path of radius r from point P to point Q. What is the ratio of the distance traversed to the magnitude of displacement?",
    options={
        "A": "π : 2",
        "B": "2 : π",
        "C": "π : 1",
        "D": "2π : 1"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="For a semicircle of radius r, path length is half the circumference (πr) and displacement magnitude is the diameter (2r).",
    given="Semicircular path of radius r.",
    formula="Distance = πr; |Displacement| = 2r.",
    steps="1. The perimeter of a full circle is 2πr.\n2. The path length along the semicircle is: Distance = (1/2) * 2πr = πr.\n3. The straight-line separation between the two endpoints P and Q is the diameter: |Displacement| = 2r.\n4. Ratio = Distance / |Displacement| = (πr) / (2r) = π / 2.\n5. Hence, the ratio is π : 2.",
    tip="For semicircle: Distance = πr, Displacement = 2r. Ratio = π/2 ≈ 1.57.",
    why_wrong="Option B inverts the ratio (displacement to distance). Option C assumes displacement is r. Option D uses full circumference."
))

# Q28 (Medium)
qs.append(make_motion_q(
    num=28,
    question="A wheel of radius R = 1 m is resting on a horizontal ground. The wheel rolls forward without slipping through half a revolution. What is the magnitude of the displacement of the point of the wheel initially in contact with the ground?",
    options={
        "A": "2 m",
        "B": "π m",
        "C": "√(π² + 4) m",
        "D": "√(π² + 1) m"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="When a wheel rolls forward through half a revolution without slipping, the point of contact undergoes both horizontal and vertical displacements.",
    given="Radius R = 1 m; rolls through half a revolution (180°).",
    formula="Δx = πR (horizontal); Δy = 2R (vertical); Displacement = √(Δx² + Δy²).",
    steps="1. In half a revolution, the wheel rolls forward horizontally by half its circumference: Δx = πR.\n2. The point initially at the bottom moves to the top of the wheel, so its vertical displacement is the diameter: Δy = 2R.\n3. The net displacement vector is Δr = (πR) î + (2R) ĵ.\n4. Magnitude: |Δr| = √((πR)² + (2R)²) = R √(π² + 4).\n5. For R = 1 m, |Δr| = √(π² + 4) m ≈ √(9.87 + 4) = √13.87 ≈ 3.72 m.",
    tip="Classic NEET rolling question: In half rotation, horizontal shift is πR, vertical shift is 2R => Displacement = R√(π² + 4).",
    why_wrong="Option A only considers vertical shift (2R). Option B only considers horizontal shift (πR). Option D uses R instead of 2R for the vertical rise."
))

# Q29 (Medium)
qs.append(make_motion_q(
    num=29,
    question="A particle moves along a straight line with its position defined by x(t) = t² - 6t + 8 (in meters). What is the total distance covered by the particle in the time interval from t = 0 to t = 5 s?",
    options={
        "A": "5 m",
        "B": "13 m",
        "C": "9 m",
        "D": "17 m"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="To find total distance when velocity reverses sign, break the interval at the turning point t_turn where v = 0.",
    given="x(t) = t² - 6t + 8, interval [0, 5] s.",
    formula="v = dx/dt = 2t - 6; turning point at v = 0 => t = 3 s.",
    steps="1. Find turning point: v(t) = 2t - 6 = 0 => t = 3 s.\n   Since 3 s lies in [0, 5] s, the particle reverses direction at t = 3 s.\n2. Evaluate positions:\n   x(0) = 0 - 0 + 8 = +8 m.\n   x(3) = 3² - 6(3) + 8 = 9 - 18 + 8 = -1 m.\n   x(5) = 5² - 6(5) + 8 = 25 - 30 + 8 = +3 m.\n3. Distance traveled from t = 0 to t = 3 s:\n   d₁ = |x(3) - x(0)| = |-1 - 8| = |-9| = 9 m.\n4. Distance traveled from t = 3 to t = 5 s:\n   d₂ = |x(5) - x(3)| = |3 - (-1)| = |4| = 4 m.\n5. Total distance = d₁ + d₂ = 9 m + 4 m = 13 m.\n6. (Note: Displacement is x(5) - x(0) = 3 - 8 = -5 m, with magnitude 5 m).",
    tip="Never just do x(final) - x(initial) for distance! That gives displacement (-5 m). Always break at the turning point: 9 + 4 = 13 m.",
    why_wrong="Option A is the magnitude of displacement (|-5| = 5 m). Option C is only the first segment (9 m). Option D overcalculates."
))

# Q30 (Medium)
qs.append(make_motion_q(
    num=30,
    question="A body starts from the origin and undergoes three successive displacements: d₁ = 4 m along East, d₂ = 3 m along North, and d₃ = 12 m vertically upwards. What is the magnitude of the net displacement of the body?",
    options={
        "A": "19 m",
        "B": "13 m",
        "C": "5 m",
        "D": "12 m"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="For three mutually perpendicular displacements along x, y, and z axes: d_net = √(dx² + dy² + dz²).",
    given="dx = 4 m (East), dy = 3 m (North), dz = 12 m (Upwards).",
    formula="d_net = √(dx² + dy² + dz²)",
    steps="1. Net horizontal displacement on the ground = √(dx² + dy²) = √(4² + 3²) = √25 = 5 m.\n2. Now combine with the vertical displacement dz = 12 m:\n   d_net = √(5² + 12²) = √(25 + 144) = √169 = 13 m.\n3. Therefore, the magnitude of the net displacement is 13 m.\n4. Total distance covered would be 4 + 3 + 12 = 19 m.",
    tip="Use the two-step Pythagorean triples: (3, 4 -> 5) and then (5, 12 -> 13)!",
    why_wrong="Option A is the total scalar distance (4 + 3 + 12 = 19 m). Option C is only the horizontal displacement (5 m). Option D is only the vertical displacement."
))

# Q31 (Medium)
qs.append(make_motion_q(
    num=31,
    question="An airplane flies 400 m North, then 300 m West, and then flies straight back to its starting base. The magnitude of displacement of the airplane after completing the entire flight is:",
    options={
        "A": "700 m",
        "B": "500 m",
        "C": "0 m",
        "D": "1200 m"
    },
    correct_opt="C",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="Displacement is the vector from initial point to final point. If the final point coincides with the initial starting base, net displacement is identically zero.",
    given="Initial position: starting base. Final position: starting base.",
    formula="Δr = r_final - r_initial = 0",
    steps="1. The airplane flies North 400 m, West 300 m (displacement from base is 500 m North-West).\n2. It then flies straight back to its starting base.\n3. The final position of the airplane is the starting base.\n4. Displacement = r_final - r_initial = 0 m.\n5. (Note: Total distance is 400 + 300 + 500 = 1200 m).",
    tip="Always check whether the motion terminates at the starting point; any closed path has zero displacement.",
    why_wrong="Option A adds 400 + 300. Option B is displacement before returning. Option D is the total distance traveled."
))

# Q32 (Medium)
qs.append(make_motion_q(
    num=32,
    question="A particle moves along a circle of radius R. What is the magnitude of its displacement when it traverses an arc subtending an angle θ at the center?",
    options={
        "A": "2R sin(θ/2)",
        "B": "2R cos(θ/2)",
        "C": "R sin(θ)",
        "D": "R (1 - cos θ)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="The chord length connecting two points on a circle of radius R separated by angle θ gives the magnitude of displacement: |Δr| = 2R sin(θ/2).",
    given="Circle of radius R, subtended central angle θ.",
    formula="|Δr| = √(R² + R² - 2R² cos θ) = √(2R²(1 - cos θ)) = 2R sin(θ/2).",
    steps="1. Let initial position vector be r₁ and final position vector be r₂ with |r₁| = |r₂| = R.\n2. The angle between r₁ and r₂ is θ.\n3. Displacement vector Δr = r₂ - r₁.\n4. Magnitude: |Δr| = √(R² + R² - 2R² cos θ) = √(2R² (1 - cos θ)).\n5. Use the trigonometric identity 1 - cos θ = 2 sin²(θ/2):\n   |Δr| = √(4R² sin²(θ/2)) = 2R sin(θ/2).\n6. For example: if θ = 180° (semicircle), |Δr| = 2R sin(90°) = 2R.",
    tip="Universal NEET formula for displacement on circular path: |Δr| = 2R sin(θ/2). For change in velocity: |Δv| = 2v sin(θ/2).",
    why_wrong="Option B uses cos(θ/2). Option C uses sin θ. Option D is the sagitta (height of arc)."
))

# Q33 (Medium)
qs.append(make_motion_q(
    num=33,
    question="Using the relation |Δr| = 2R sin(θ/2), what is the magnitude of displacement of a particle moving on a circular path of radius R when it sweeps an angle of 60° at the center?",
    options={
        "A": "R",
        "B": "R√3",
        "C": "R/2",
        "D": "2R"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="For θ = 60°, the two radii and the chord form an equilateral triangle, meaning chord length equals R.",
    given="Radius R, angle θ = 60°.",
    formula="|Δr| = 2R sin(θ/2)",
    steps="1. Substitute θ = 60° into the chord formula:\n   |Δr| = 2R sin(60° / 2) = 2R sin(30°).\n2. Since sin(30°) = 1/2:\n   |Δr| = 2R * (1/2) = R.\n3. Geometrically, the two radii (length R) and the chord form an isosceles triangle with vertex angle 60°, so all three angles are 60° (equilateral triangle).\n4. Hence, the chord length (displacement) is exactly R.",
    tip="Quick memory aid for circle displacement: θ = 60° -> R; θ = 90° -> R√2; θ = 120° -> R√3; θ = 180° -> 2R.",
    why_wrong="Option B is for θ = 120°. Option C is half the radius. Option D is for θ = 180° (diameter)."
))

# Q34 (Medium)
qs.append(make_motion_q(
    num=34,
    question="A body moves along a circular path of radius R. When it sweeps an angle of 120° at the center, what is the ratio of distance traveled to the magnitude of displacement?",
    options={
        "A": "2π / (3√3)",
        "B": "π / (3√3)",
        "C": "2π / 3",
        "D": "√3 / (2π)"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="Distance along an arc is s = Rθ (with θ in radians). Displacement magnitude is |Δr| = 2R sin(θ/2).",
    given="Radius R, central angle θ = 120° = 2π/3 radians.",
    formula="Distance = Rθ; Displacement = 2R sin(θ/2).",
    steps="1. Angle in radians: θ = 120° * (π / 180°) = 2π / 3 radians.\n2. Distance along arc: s = R * (2π / 3) = 2πR / 3.\n3. Displacement magnitude: |Δr| = 2R sin(120° / 2) = 2R sin(60°) = 2R * (√3 / 2) = R√3.\n4. Ratio = Distance / Displacement = (2πR / 3) / (R√3) = 2π / (3√3).\n5. Hence, the ratio is 2π / (3√3).",
    tip="Always express angle θ in radians when calculating arc length s = Rθ!",
    why_wrong="Option B misses factor of 2. Option C omits √3 in denominator. Option D inverts the ratio."
))

# Q35 (Medium)
qs.append(make_motion_q(
    num=35,
    question="A particle moves from point A(1, 2, 3) to point B(4, 6, 15) in meters. What is the magnitude of the displacement vector of the particle?",
    options={
        "A": "13 m",
        "B": "15 m",
        "C": "11 m",
        "D": "17 m"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="Displacement in Cartesian 3D coordinates: Δr = (x₂ - x₁)î + (y₂ - y₁)ĵ + (z₂ - z₁)k̂.",
    given="A(1, 2, 3) and B(4, 6, 15).",
    formula="|Δr| = √((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²)",
    steps="1. Δx = 4 - 1 = 3 m.\n2. Δy = 6 - 2 = 4 m.\n3. Δz = 15 - 3 = 12 m.\n4. Magnitude: |Δr| = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 m.\n5. Hence, the displacement magnitude is 13 m.",
    tip="Classic Pythagorean triple: √(3² + 4² + 12²) = √(5² + 12²) = 13.",
    why_wrong="Option B adds components directly. Option C and D miscalculate √169."
))

# Q36 (Medium)
qs.append(make_motion_q(
    num=36,
    question="A drunkard takes 5 steps forward and 3 steps backward, each step being 1 meter long and taking 1 second. He continues this pattern until he falls into a pit located 13 meters away from his starting point. How long does he take to fall into the pit?",
    options={
        "A": "37 seconds",
        "B": "52 seconds",
        "C": "32 seconds",
        "D": "40 seconds"
    },
    correct_opt="A",
    difficulty="Medium",
    topic="Distance and displacement",
    concept="In step-cycle problems, the net progress per cycle applies only until the person is within one forward burst of the target.",
    given="Cycle: 5 steps forward (5 s) + 3 steps backward (3 s) = 8 steps (8 s). Net displacement per cycle = 5 - 3 = 2 m.",
    formula="Net displacement per cycle = 2 m in 8 s; final forward burst reaches pit without taking backward steps.",
    steps="1. Total distance to pit = 13 m.\n2. One cycle takes 8 s and achieves a net displacement of +2 m.\n3. Before the final forward burst of 5 m, the drunkard must reach at least 13 - 5 = 8 m.\n4. To achieve net displacement of 8 m:\n   Number of complete cycles = 8 m / (2 m/cycle) = 4 cycles.\n5. Time for 4 complete cycles = 4 * 8 s = 32 s.\n   Net position at t = 32 s is x = 4 * 2 m = 8 m.\n6. From x = 8 m, the drunkard takes his next 5 steps forward:\n   Position reaches 8 + 5 = 13 m!\n7. He falls directly into the pit at this moment and takes no backward steps!\n8. Time for these last 5 forward steps = 5 s.\n9. Total time = 32 s + 5 s = 37 seconds.",
    tip="Common NEET trap: Do not simply divide 13 by 2 (giving 6.5 cycles = 52 s). Once he reaches 13 m on forward steps, he falls into the pit and does NOT step backward!",
    why_wrong="Option B falls into the trap of using average rate (13 / 2 * 8 = 52 s). Option C is the time after 4 cycles (at 8 m). Option D miscalculates the final burst."
))

# Q37 (Hard)
qs.append(make_motion_q(
    num=37,
    question="A clock has a second hand of length R = 6 cm. What is the magnitude of displacement of the tip of the second hand between the 15-second mark and the 45-second mark?",
    options={
        "A": "6 cm",
        "B": "12 cm",
        "C": "6√2 cm",
        "D": "6π cm"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Distance and displacement",
    concept="On a clock dial, the 15-second mark is at 3 o'clock (horizontal right) and the 45-second mark is at 9 o'clock (horizontal left). These two points are diametrically opposite.",
    given="Length of second hand R = 6 cm; t₁ = 15 s, t₂ = 45 s.",
    formula="|Δr| = 2R for diametrically opposite positions (θ = 180°).",
    steps="1. At 15 s, the tip is at position vector r₁ = +R î = +6 î cm.\n2. At 45 s, the tip is at position vector r₂ = -R î = -6 î cm.\n3. Displacement vector Δr = r₂ - r₁ = -6 î - (+6 î) = -12 î cm.\n4. Magnitude of displacement = |-12 cm| = 12 cm.\n5. (Note: Distance traveled along the circular circumference is half the perimeter = πR = 6π cm).",
    tip="15 s to 45 s is exactly 30 s elapsed = half a circle = diametrically opposite => Displacement = 2R.",
    why_wrong="Option A is the radius. Option C is for 15 s to 30 s (a 90° turn, where |Δr| = R√2). Option D is the distance traveled."
))

# Q38 (Hard)
qs.append(make_motion_q(
    num=38,
    question="A particle moves along the x-axis according to the equation x(t) = 2t³ - 15t² + 36t - 10 (in meters). Find the total distance traveled by the particle in the time interval from t = 0 to t = 4 s.",
    options={
        "A": "22 m",
        "B": "38 m",
        "C": "26 m",
        "D": "18 m"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Distance and displacement",
    concept="For a cubic trajectory, find all real roots of velocity v(t) = 0 in the interval, evaluate positions at all turning points, and sum the absolute increments.",
    given="x(t) = 2t³ - 15t² + 36t - 10, interval [0, 4] s.",
    formula="v = dx/dt = 6t² - 30t + 36 = 0",
    steps="1. Find velocity:\n   v(t) = 6(t² - 5t + 6) = 6(t - 2)(t - 3).\n2. Turning points occur at t = 2 s and t = 3 s. Both lie inside [0, 4] s!\n3. Evaluate positions at key times:\n   t = 0: x(0) = -10 m.\n   t = 2: x(2) = 2(8) - 15(4) + 36(2) - 10 = 16 - 60 + 72 - 10 = +18 m.\n   t = 3: x(3) = 2(27) - 15(9) + 36(3) - 10 = 54 - 135 + 108 - 10 = +17 m.\n   t = 4: x(4) = 2(64) - 15(16) + 36(4) - 10 = 128 - 240 + 144 - 10 = +22 m.\n4. Segment 1 (0 to 2 s): |x(2) - x(0)| = |18 - (-10)| = 28 m.\n5. Segment 2 (2 to 3 s): |x(3) - x(2)| = |17 - 18| = 1 m.\n6. Segment 3 (3 to 4 s): |x(4) - x(3)| = |22 - 17| = 5 m.\n7. Total distance = 28 + 1 + 5 = 34 m... wait, let's recalculate x(4) carefully:\n   2(64) = 128.\n   15(16) = 240.\n   36(4) = 144.\n   128 - 240 + 144 - 10 = 32 - 10 = +22 m.\n   Wait, 28 + 1 + 5 = 34 m? Wait, what about x(0) = -10, x(2) = 18 => 28 m. x(3) = 17 => 1 m. x(4) = 22 => 5 m. Sum = 34 m!\n   Let's check option B: 34 m. Let's make Option B: 34 m, Option A: 32 m, Option C: 28 m, Option D: 22 m.",
    tip="Always evaluate x at every root of v = 0 in the interval and sum the absolute differences |x_{k+1} - x_k|.",
    why_wrong="Option A is displacement x(4) - x(0) = 22 - (-10) = 32 m. Options C and D miss reversing segments."
))
qs[-1]["options"] = {
    "A": "32 m",
    "B": "34 m",
    "C": "28 m",
    "D": "22 m"
}
qs[-1]["solutionStructured"]["finalAnswer"] = "Option B: 34 m"
qs[-1]["explanation"] = qs[-1]["explanation"].replace("Option B: 38 m", "Option B: 34 m")

# Q39 (Hard)
qs.append(make_motion_q(
    num=39,
    question="A room has dimensions 10 m × 12 m × 14 m. A fly starts from one corner on the floor and flies to the diagonally opposite corner on the ceiling. What is the magnitude of the displacement of the fly?",
    options={
        "A": "36 m",
        "B": "2√110 m",
        "C": "10√2 m",
        "D": "22 m"
    },
    correct_opt="B",
    concept="Body diagonal of a rectangular cuboid: d = √(L² + W² + H²).",
    given="L = 10 m, W = 12 m, H = 14 m.",
    formula="d = √(L² + W² + H²)",
    steps="1. Choose the starting corner as the origin (0, 0, 0).\n2. The diagonally opposite corner has coordinates (10, 12, 14) in meters.\n3. Magnitude of displacement:\n   d = √(10² + 12² + 14²) = √(100 + 144 + 196) = √440 m.\n4. Simplify √440:\n   √440 = √(4 * 110) = 2√110 m ≈ 2 * 10.488 = 20.98 m.\n5. Hence, the displacement is 2√110 m.",
    tip="The shortest straight line between opposite corners of a cuboid is the space diagonal: √(a² + b² + c²).",
    why_wrong="Option A is the perimeter sum L + W + H = 36 m (scalar sum). Option C is for square base. Option D is an approximation."
, difficulty="Hard", topic="Distance and displacement"))

# Q40 (Hard)
qs.append(make_motion_q(
    num=40,
    question="A particle moves along a path such that its position vector varies with time as r(t) = (3 cos t) î + (3 sin t) ĵ + (4t) k̂ (in meters). What is the distance traveled by the particle in time interval t = 0 to t = 2π seconds?",
    options={
        "A": "5π m",
        "B": "10π m",
        "C": "8π m",
        "D": "6π m"
    },
    correct_opt="B",
    difficulty="Hard",
    topic="Distance and displacement",
    concept="For helical motion, speed v = |dr/dt| is constant, and distance traveled is s = ∫ v dt.",
    given="r(t) = 3 cos t î + 3 sin t ĵ + 4t k̂, interval [0, 2π].",
    formula="v(t) = dr/dt; Speed = |v| = √(vx² + vy² + vz²); Distance = |v| * Δt.",
    steps="1. Find velocity components:\n   vx = -3 sin t\n   vy = 3 cos t\n   vz = 4\n2. Compute speed:\n   |v| = √((-3 sin t)² + (3 cos t)² + 4²) = √(9(sin² t + cos² t) + 16) = √(9 + 16) = √25 = 5 m/s.\n3. Notice that speed is constant: |v| = 5 m/s at all times!\n4. Time interval Δt = 2π - 0 = 2π seconds.\n5. Total distance = speed * time = 5 m/s * 2π s = 10π m.\n6. (Note: Displacement is |r(2π) - r(0)| = |(3î + 8πk̂) - (3î)| = 8π m).",
    tip="In uniform helical motion, speed is constant = √(v_circ² + v_axial²) = √(3² + 4²) = 5 m/s.",
    why_wrong="Option A uses Δt = π. Option C is the magnitude of displacement (8π m). Option D considers only circular perimeter."
))

# Q41 (Hard)
qs.append(make_motion_q(
    num=41,
    question="A particle moves along the x-axis. Its velocity is given by v(t) = 6 - 2t (in m/s). If it starts from x = 0 at t = 0, what is the ratio of total distance covered to the magnitude of displacement in the interval from t = 0 to t = 5 s?",
    options={
        "A": "13 / 5",
        "B": "9 / 5",
        "C": "5 / 13",
        "D": "1"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Distance and displacement",
    concept="Distance = ∫ |v(t)| dt, while displacement = ∫ v(t) dt. Ratio = Distance / |Displacement|.",
    given="v(t) = 6 - 2t, interval [0, 5] s, x(0) = 0.",
    formula="Turning point at v = 0 => t = 3 s.",
    steps="1. Velocity is zero at: 6 - 2t = 0 => t = 3 s.\n2. Position function: x(t) = ∫ (6 - 2t) dt = 6t - t² (since x(0) = 0).\n3. Positions at key times:\n   x(0) = 0 m.\n   x(3) = 6(3) - 3² = 18 - 9 = +9 m.\n   x(5) = 6(5) - 5² = 30 - 25 = +5 m.\n4. Distance from 0 to 3 s: |x(3) - x(0)| = 9 m (moving forward).\n5. Distance from 3 to 5 s: |x(5) - x(3)| = |5 - 9| = 4 m (moving backward).\n6. Total distance = 9 + 4 = 13 m.\n7. Net displacement = x(5) - x(0) = +5 m - 0 = +5 m.\n8. Ratio = Distance / |Displacement| = 13 / 5 = 2.6.",
    tip="Whenever motion reverses, Distance / Displacement > 1. Here, 13 / 5 = 2.6.",
    why_wrong="Option B only includes forward distance (9/5). Option C inverts the ratio. Option D assumes no reversal."
))

# Q42 (Hard)
qs.append(make_motion_q(
    num=42,
    question="A particle moves in a plane. Its position at time t is given by x = a cos(ωt) and y = a sin(ωt). What are the distance traversed and the magnitude of displacement in one quarter of a time period (from t = 0 to t = T/4)?",
    options={
        "A": "Distance = πa / 2, Displacement = a√2",
        "B": "Distance = a√2, Displacement = πa / 2",
        "C": "Distance = 2πa, Displacement = 0",
        "D": "Distance = πa, Displacement = 2a"
    },
    correct_opt="A",
    difficulty="Hard",
    topic="Distance and displacement",
    concept="x² + y² = a² is uniform circular motion of radius a with period T = 2π/ω. In T/4, the particle traverses a quadrant (90° arc).",
    given="Radius a, time interval Δt = T/4 (angle θ = 90° = π/2 rad).",
    formula="Distance = arc length = a * θ; Displacement = 2a sin(θ/2).",
    steps="1. In one quarter period (t = T/4), the particle covers one quadrant of the circle of radius a.\n2. Total distance = (1/4) of circumference = (1/4) * (2πa) = πa / 2.\n3. Initial position (t = 0): (a, 0).\n4. Position at t = T/4: (0, a).\n5. Displacement vector = (0 - a) î + (a - 0) ĵ = -a î + a ĵ.\n6. Magnitude of displacement = √((-a)² + a²) = a√2.\n7. Hence, Distance = πa / 2 and Displacement = a√2.",
    tip="For a quarter circle (θ = 90°): Arc length = πa/2 ≈ 1.57a, Chord length = a√2 ≈ 1.414a.",
    why_wrong="Option B swaps distance and displacement. Option C is for full period T. Option D is for half period T/2."
))

print(f"Topic 2 generated: {len(qs)} questions")

with open('scripts/part1_topic2.json', 'w') as f:
    json.dump(qs, f, indent=2)
