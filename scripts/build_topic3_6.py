import json, sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

qs = []

# ==============================================================================
# Topic 3: Scalars and vectors in one-dimensional motion (Q43 - Q63)
# 5 Easy, 11 Medium, 5 Hard
# ==============================================================================

# Q43 (Easy)
qs.append(make_motion_q(
    num=43,
    question="Which of the following physical quantities is a scalar quantity in one-dimensional kinematics?",
    options={
        "A": "Displacement",
        "B": "Instantaneous speed",
        "C": "Instantaneous velocity",
        "D": "Acceleration"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Scalars and vectors in one-dimensional motion",
    concept="A scalar quantity has magnitude only and no direction. Instantaneous speed is the magnitude of instantaneous velocity, making it a pure scalar.",
    given="Physical quantities in 1D kinematics.",
    formula="Speed = |Velocity| (scalar).",
    steps="1. Displacement has both magnitude and direction (+ or - in 1D), so it is a vector.\n2. Instantaneous velocity specifies both rate of motion and direction, so it is a vector.\n3. Acceleration is the rate of change of velocity, which has direction, so it is a vector.\n4. Instantaneous speed is the magnitude of velocity: v = |v⃗|, which possesses only magnitude and no directional sign. Hence, it is a scalar quantity.",
    tip="Speed and distance are always scalars (never negative). Velocity and displacement are vectors (can be positive, negative, or zero).",
    why_wrong="Options A, C, and D are all vector quantities that specify directional sense (+ or -)."
))

# Q44 (Easy)
qs.append(make_motion_q(
    num=44,
    question="In one-dimensional motion, vector directions are completely specified by:",
    options={
        "A": "Angles in degrees or radians",
        "B": "Unit vectors î, ĵ, and k̂ simultaneously",
        "C": "Positive (+) and negative (-) algebraic signs",
        "D": "Magnitude values only"
    },
    correct_opt="C",
    difficulty="Easy",
    topic="Scalars and vectors in one-dimensional motion",
    concept="In 1D motion along a line, there are only two possible directions of motion. These are fully described by plus (+) and minus (-) algebraic signs.",
    given="Kinematics in one dimension.",
    formula="Direction in 1D = sign (+ or -) along the designated axis.",
    steps="1. One-dimensional motion takes place along a single straight line.\n2. Once an axis (say, the x-axis) is chosen, there are only two opposite senses of motion along it.\n3. One direction is assigned the positive sign (+), and the opposite direction is assigned the negative sign (-).\n4. Hence, full vector direction in 1D is represented simply by algebraic signs (+ or -).",
    tip="In 1D kinematics, you don't need complex vector notation; just use + and - signs consistently!",
    why_wrong="Option A is needed for 2D or 3D vectors. Option B requires all three axes. Option D cannot represent direction."
))

# Q45 (Easy)
qs.append(make_motion_q(
    num=45,
    question="If a car is moving along the negative x-axis with an increasing speed, the signs of its velocity and acceleration are respectively:",
    options={
        "A": "Velocity negative, acceleration positive",
        "B": "Velocity negative, acceleration negative",
        "C": "Velocity positive, acceleration positive",
        "D": "Velocity positive, acceleration negative"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Velocity takes the sign of the direction of motion. Speed increases if and only if acceleration has the SAME sign as velocity.",
    given="Motion along negative x-axis (velocity < 0); speed is increasing.",
    formula="Speed increasing <=> v and a have identical signs; Speed decreasing <=> v and a have opposite signs.",
    steps="1. Motion is in the negative x-direction, so velocity is negative (v < 0).\n2. Speed is the magnitude |v|. For speed to increase, the magnitude of velocity must grow.\n3. Therefore, acceleration must act in the same direction as velocity (negative direction).\n4. Hence, both velocity and acceleration are negative.",
    tip="Golden rule: Speed increases when v and a have the SAME sign. Speed decreases (retardation) when v and a have OPPOSITE signs.",
    why_wrong="Option A would mean acceleration opposes velocity, which would decrease speed (retardation). Options C and D have positive velocity."
))

# Q46 (Easy)
qs.append(make_motion_q(
    num=46,
    question="Which of the following conditions implies that a moving body is slowing down (experiencing retardation)?",
    options={
        "A": "Velocity and acceleration have the same sign",
        "B": "Velocity is positive and acceleration is positive",
        "C": "Velocity is negative and acceleration is negative",
        "D": "Velocity and acceleration have opposite signs"
    },
    correct_opt="D",
    difficulty="Easy",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Retardation (deceleration) means the magnitude of velocity (speed) is decreasing with time. This occurs when acceleration opposes velocity: v * a < 0.",
    given="Condition for slowing down.",
    formula="d|v|/dt < 0 <=> v⃗ · a⃗ < 0 (opposite signs in 1D).",
    steps="1. Let velocity be v and acceleration be a = dv/dt.\n2. Rate of change of speed: d(v²)/dt = 2v (dv/dt) = 2(v * a).\n3. For speed to decrease, d(v²)/dt < 0, which requires v * a < 0.\n4. This condition means that v and a must have opposite signs.\n5. Whether v is positive and a is negative, or v is negative and a is positive, the body slows down.",
    tip="Retardation does NOT simply mean 'a is negative'. If v is negative and a is negative, the object is speeding up! Retardation means v and a have opposite signs.",
    why_wrong="Options A, B, and C all have v and a with the same sign, which causes speed to increase."
))

# Q47 (Easy)
qs.append(make_motion_q(
    num=47,
    question="A ball is thrown vertically upwards. Taking the upward direction as positive, the signs of its velocity and acceleration during the upward journey are respectively:",
    options={
        "A": "Positive, positive",
        "B": "Positive, negative",
        "C": "Negative, negative",
        "D": "Negative, positive"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Direction of velocity is the direction of motion (upward = positive). Acceleration due to gravity is always directed downward towards Earth's center (downward = negative).",
    given="Ball moving upward; upward is positive (+); gravity acts downward (-).",
    formula="v > 0 (upward), a = -g (downward).",
    steps="1. The ball moves upwards, so its displacement changes in the positive direction. Thus, velocity is positive (v > 0).\n2. Gravity pulls objects downwards, towards the center of Earth.\n3. Since downward is chosen as negative, acceleration due to gravity is negative (a = -g).\n4. Therefore, velocity is positive and acceleration is negative.",
    tip="Gravity always accelerates objects downward (a = -g), whether the body is rising, falling, or momentarily at rest at the highest point!",
    why_wrong="Option A incorrectly assigns positive to gravity. Option C assumes downward motion. Option D inverts both signs."
))

# Q48 (Medium)
qs.append(make_motion_q(
    num=48,
    question="A particle moves along a straight line with velocity v = (4 - 2t) m/s. During which time interval is the speed of the particle increasing?",
    options={
        "A": "0 < t < 2 s only",
        "B": "t > 2 s only",
        "C": "For all t > 0",
        "D": "Never"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Speed is |v|. Acceleration a = dv/dt = -2 m/s². Speed increases when v and a have the same sign.",
    given="v(t) = 4 - 2t m/s; a(t) = -2 m/s².",
    formula="Speed = |v(t)| = |4 - 2t|; increases when v and a have same sign.",
    steps="1. Calculate acceleration: a = dv/dt = -2 m/s² (constant negative acceleration).\n2. For 0 < t < 2 s: v > 0, while a < 0. Since v and a have opposite signs, the particle is slowing down (speed decreases from 4 m/s to 0 m/s).\n3. At t = 2 s: v = 0 m/s (momentary rest).\n4. For t > 2 s: v = 4 - 2t < 0 (negative), and a = -2 m/s² (negative). Now both v and a are negative (same sign)!\n5. Therefore, for t > 2 s, the magnitude of velocity (speed) increases continuously.\n6. Hence, speed increases for t > 2 s.",
    tip="Speed is the absolute value: for t in (0, 2), speed is 4 - 2t (decreases). For t > 2, speed is 2t - 4 (increases).",
    why_wrong="Option A is when speed is decreasing. Option C ignores the slowing down phase. Option D overlooks the reverse acceleration."
))

# Q49 (Medium)
qs.append(make_motion_q(
    num=49,
    question="Can an object have a constant speed and a varying velocity in one-dimensional motion?",
    options={
        "A": "Yes, if it reverses its direction periodically.",
        "B": "No, because in 1D motion, constant speed implies constant velocity as long as direction does not change, and changing direction implies zero speed at the turning instant.",
        "C": "Yes, whenever the acceleration is non-zero.",
        "D": "Yes, if it moves along a closed 1D loop."
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="In 1D motion, direction can only be forward or backward. To change direction from +v to -v, velocity must pass continuously through zero, so speed cannot remain constant.",
    given="Condition: constant speed in 1D motion.",
    formula="v = ± speed. A change of sign requires passing through v = 0.",
    steps="1. Velocity in 1D is v = ± speed.\n2. If speed is constant and non-zero, the only way velocity could change is by reversing direction (+ to -).\n3. But for a physical particle with finite acceleration, reversing direction requires the velocity to pass through zero continuously.\n4. If velocity passes through zero, the speed is not constant!\n5. If the particle does not reverse direction, both magnitude and direction are constant, so velocity is constant.\n6. Therefore, an object cannot have constant speed and varying velocity in 1D motion.",
    tip="In 2D motion (e.g. uniform circular motion), an object CAN have constant speed with changing velocity. But in 1D motion, it is IMPOSSIBLE!",
    why_wrong="Options A, C, and D are incorrect because in 1D motion, turning around requires v = 0, violating constant speed."
))

# Q50 (Medium)
qs.append(make_motion_q(
    num=50,
    question="The position vector of a particle is r⃗ = (3t) î + (4t²) ĵ + 7 k̂ (in meters). What is the component of its velocity vector along the z-axis?",
    options={
        "A": "7 m/s",
        "B": "0 m/s",
        "C": "3 m/s",
        "D": "8 m/s"
    },
    correct_opt="B",
    difficulty="Medium",
    topic="Scalars and vectors in one-dimensional motion",
    concept="Velocity is the time derivative of position: v⃗ = dr⃗/dt. The z-component is vz = dz/dt.",
    given="z(t) = 7 (constant).",
    formula="vz = dz/dt",
    steps="1. Position components are: x(t) = 3t, y(t) = 4t², z(t) = 7.\n2. Differentiate each component with respect to time:\n   vx = dx/dt = 3 m/s.\n   vy = dy/dt = 8t m/s.\n   vz = dz/dt = d(7)/dt = 0 m/s.\n3. Since z coordinate is constant (7 m), there is no motion along the z-axis.\n4. Therefore, the z-component of velocity is identically 0 m/s.",
    tip="Derivative of any constant coordinate is zero: if position coordinate does not change with time, velocity along that axis is 0.",
    why_wrong="Option A treats the constant position (7 m) as velocity. Option C is vx. Option D is the coefficient of vy."
))

print("Q43-Q50 added")
