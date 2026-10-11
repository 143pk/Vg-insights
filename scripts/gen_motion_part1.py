import json
import sys
sys.path.append('scripts')
from make_motion_q import make_motion_q

questions = []

# ==============================================================================
# Topic 1: Position, reference point and coordinate system (Q1 - Q21)
# 5 Easy, 11 Medium, 5 Hard
# ==============================================================================

# Q1 (Easy)
questions.append(make_motion_q(
    num=1,
    question="Which of the following statements best describes a 'frame of reference' in kinematics?",
    options={
        "A": "An absolute coordinate system fixed permanently at the center of the Earth.",
        "B": "A coordinate system along with a clock attached to an observer with respect to which position and time are measured.",
        "C": "Only an inertial coordinate system where Newton's laws are valid.",
        "D": "A geometrical point without any reference axes or time measurement device."
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Position, reference point and coordinate system",
    concept="In physics, motion is relative. To describe the motion of an object, we need a reference point (origin), a set of coordinate axes, and a clock to measure time. This combination forms a frame of reference.",
    given="Theoretical definition of a reference frame.",
    formula="Frame of reference = Coordinate system (axes) + Time measuring device (clock).",
    steps="1. Motion cannot be described without a reference point and coordinate axes.\n2. Specifying location requires coordinates (x, y, z), and specifying the instant requires time t.\n3. Therefore, an observer's coordinate system coupled with a clock constitutes a frame of reference.\n4. It does not need to be fixed at the center of Earth, nor is it restricted solely to inertial frames.",
    tip="Remember: 'Rest' and 'motion' are relative terms; neither exists in an absolute sense without a chosen frame of reference.",
    why_wrong="Option A incorrectly claims the frame must be fixed at the center of Earth. Option C restricts it to inertial frames only. Option D omits axes and clocks."
))

# Q2 (Easy)
questions.append(make_motion_q(
    num=2,
    question="A passenger sitting inside a moving train observes another passenger sitting across from them. With respect to the moving train and with respect to an observer standing on the railway platform, the second passenger is respectively:",
    options={
        "A": "In motion, at rest",
        "B": "At rest, in motion",
        "C": "At rest, at rest",
        "D": "In motion, in motion"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Position, reference point and coordinate system",
    concept="The state of rest or motion of a body depends on the choice of reference frame.",
    given="Passenger A and Passenger B sit in a moving train. Observer C stands on the ground platform.",
    formula="Velocity of B relative to frame S: v_{B/S} = v_B - v_S.",
    steps="1. Inside the train's reference frame, the position coordinate of the second passenger does not change with time. Hence, with respect to the train, the passenger is at rest.\n2. In the platform reference frame, the train and its passengers move with velocity v relative to the ground. Hence, the position coordinate changes with time, meaning the passenger is in motion.\n3. Therefore, the passenger is at rest with respect to the train, and in motion with respect to the platform.",
    tip="Always identify the observer's frame before stating whether a body is at rest or in motion.",
    why_wrong="Option A reverses the states. Options C and D fail to recognise the relativity of motion."
))

# Q3 (Easy)
questions.append(make_motion_q(
    num=3,
    question="A particle moves along the x-axis. At time t = 0, its position is x = -4 m, and at time t = 5 s, its position is x = +6 m. What is the displacement of the particle during this time interval?",
    options={
        "A": "+2 m",
        "B": "+10 m",
        "C": "-10 m",
        "D": "+14 m"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Position, reference point and coordinate system",
    concept="Displacement is the change in the position vector of a particle: Δx = x_final - x_initial.",
    given="x_initial = -4 m, x_final = +6 m, Δt = 5 s.",
    formula="Δx = x_final - x_initial",
    steps="1. Identify initial position: x_i = -4 m.\n2. Identify final position: x_f = +6 m.\n3. Calculate displacement: Δx = x_f - x_i = (+6 m) - (-4 m) = 6 + 4 = +10 m.\n4. The positive sign indicates displacement in the positive x-direction.",
    tip="Be careful with negative coordinates: subtracting a negative value yields a positive quantity: 6 - (-4) = +10 m.",
    why_wrong="Option A subtracts magnitudes (6 - 4 = 2). Option C has the wrong sign. Option D adds 6 + 4 + 4."
))

# Q4 (Easy)
questions.append(make_motion_q(
    num=4,
    question="In a one-dimensional coordinate system, how many coordinates are required to completely specify the position of an object at any instant?",
    options={
        "A": "One spatial coordinate along with time",
        "B": "Two spatial coordinates",
        "C": "Three spatial coordinates",
        "D": "No spatial coordinates, only time"
    },
    correct_opt="A",
    difficulty="Easy",
    topic="Position, reference point and coordinate system",
    concept="One-dimensional motion (rectilinear motion) takes place along a single straight line, requiring only one coordinate (e.g., x) varying with time t.",
    given="One-dimensional motion along a straight line.",
    formula="Position specification: x(t).",
    steps="1. By definition, rectilinear motion occurs along a straight line.\n2. We align our coordinate axis (e.g., the x-axis) along this line of motion.\n3. The position at any instant t is completely specified by a single value x.\n4. Along with the time coordinate t, (x, t) fully specifies the kinematic state.",
    tip="1D motion needs 1 coordinate (e.g., car on a straight road), 2D needs 2 (projectile in a plane), 3D needs 3 (gas molecule in a room).",
    why_wrong="Option B describes 2D motion (motion in a plane). Option C describes 3D motion. Option D cannot locate position without a coordinate."
))

# Q5 (Easy)
questions.append(make_motion_q(
    num=5,
    question="If the origin of a coordinate system is shifted from x = 0 to x = +5 m, which of the following physical quantities remains invariant for a moving particle?",
    options={
        "A": "The position coordinate of the particle",
        "B": "The displacement of the particle between two points",
        "C": "The distance of the particle from the origin",
        "D": "The initial position coordinate"
    },
    correct_opt="B",
    difficulty="Easy",
    topic="Position, reference point and coordinate system",
    concept="Displacement is the difference between two position coordinates: Δx = x_2 - x_1. Shifting the origin shifts both x_1 and x_2 by the same constant, leaving their difference unchanged.",
    given="Shift of origin by constant x_0 = +5 m.",
    formula="x' = x - x_0; Δx' = x'_2 - x'_1 = (x_2 - x_0) - (x_1 - x_0) = x_2 - x_1 = Δx.",
    steps="1. Let original positions be x_1 and x_2. The displacement is Δx = x_2 - x_1.\n2. In the new coordinate system with origin shifted to +5 m, new coordinates are x'_1 = x_1 - 5 and x'_2 = x_2 - 5.\n3. The new displacement is Δx' = (x_2 - 5) - (x_1 - 5) = x_2 - x_1 = Δx.\n4. Thus, displacement is invariant under translation of the origin.",
    tip="Displacement, velocity, and acceleration are independent of the choice of origin.",
    why_wrong="Options A, C, and D change whenever the origin is shifted because coordinates and distances from origin depend on origin placement."
))

# Save first 5 questions to verify
with open('scripts/motion_part1_test.json', 'w') as f:
    json.dump(questions, f, indent=2)

print("Saved test 5 questions")
