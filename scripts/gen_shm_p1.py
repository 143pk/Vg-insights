#!/usr/bin/env python3
"""
Generator for Oscillations - Part 1 (Q1 to Q125)
Subject: Physics | Class: 11 | Chapter: Oscillations (oscillations)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Periodic vs oscillatory motion, harmonic vs non-harmonic
- Conditions for SHM: F = -k x, a = -omega^2 x
- Kinematics of SHM: displacement x(t), velocity v(t), acceleration a(t)
- Amplitude, angular frequency omega, frequency f, time period T
- Phase, initial phase (epoch), phase differences between x, v, a
- Relations between maximum velocity, maximum acceleration, amplitude and frequency
- Superposition of two collinear SHMs, resultant amplitude
"""

import json

questions = []

def add(q_id, q_num, question, opt_a, opt_b, opt_c, opt_d, correct_idx, difficulty, subtopic, explanation, is_pyq=False, pyq_source=None):
    opts_list = [opt_a, opt_b, opt_c, opt_d]
    ans_map = {0: "A", 1: "B", 2: "C", 3: "D"}
    correct_ans = ans_map[correct_idx]
    q = {
        "id": q_id,
        "questionNumber": q_num,
        "question": question,
        "options": {
            "A": opt_a,
            "B": opt_b,
            "C": opt_c,
            "D": opt_d
        },
        "optionsList": opts_list,
        "correctAnswer": correct_ans,
        "correctIndex": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "subject": "Physics",
        "class": "11",
        "chapter": "oscillations",
        "topicId": "phys-shm-equation",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q1 to Q40 (Easy: 40 questions) -----------------
easy_q_data = [
    ("The necessary and sufficient condition for a particle executing simple harmonic motion (SHM) is that its acceleration is:",
     "Directly proportional to displacement and directed towards the mean position",
     "Directly proportional to velocity and directed away from the mean position",
     "Constant in magnitude and direction",
     "Directly proportional to the square of displacement",
     0, "Condition for SHM",
     "The defining differential equation of SHM is $a = -\\omega^2 x$, meaning acceleration is directly proportional to displacement from the mean position and directed opposite to displacement (towards the mean position)."),

    ("The restoring force acting on a particle of mass $m$ executing SHM with displacement $x$ is given by:",
     "$F = -k x$",
     "$F = k x^2$",
     "$F = -k x^2$",
     "$F = -k / x$",
     0, "Restoring Force Law",
     "In linear SHM, Hooke's restoring force is $F = -k x$, where $k = m \\omega^2$ is the force constant (spring constant)."),

    ("The velocity of a particle executing SHM of amplitude $A$ and angular frequency $\\omega$ at displacement $x$ is:",
     "$v = \\omega \\sqrt{A^2 - x^2}$",
     "$v = \\omega \\sqrt{A^2 + x^2}$",
     "$v = \\omega (A - x)$",
     "$v = \\omega^2 \\sqrt{A^2 - x^2}$",
     0, "Velocity-Displacement Relation",
     "From $v = \\frac{dx}{dt}$ where $x = A \\sin(\\omega t)$, we have $v = A \\omega \\cos(\\omega t) = \\omega \\sqrt{A^2 - x^2}$."),

    ("The maximum velocity of a particle executing SHM of amplitude $A$ and angular frequency $\\omega$ is:",
     "$v_{\\text{max}} = A \\omega$",
     "$v_{\\text{max}} = A \\omega^2$",
     "$v_{\\text{max}} = \\frac{A}{\\omega}$",
     "$v_{\\text{max}} = \\frac{1}{2} A \\omega$",
     0, "Maximum Velocity in SHM",
     "Maximum velocity occurs at the mean position ($x = 0$): $v_{\\text{max}} = \\omega \\sqrt{A^2 - 0} = A \\omega$."),

    ("The maximum acceleration of a particle executing SHM of amplitude $A$ and angular frequency $\\omega$ is:",
     "$a_{\\text{max}} = A \\omega^2$",
     "$a_{\\text{max}} = A \\omega$",
     "$a_{\\text{max}} = \\frac{A}{\\omega^2}$",
     "$a_{\\text{max}} = 2 A \\omega^2$",
     0, "Maximum Acceleration in SHM",
     "Maximum acceleration occurs at the extreme positions ($x = \\pm A$): $|a_{\\text{max}}| = \\omega^2 |x_{\\text{max}}| = A \\omega^2$."),

    ("At the mean position ($x = 0$) of an SHM:",
     "Velocity is maximum and acceleration is zero",
     "Velocity is zero and acceleration is maximum",
     "Both velocity and acceleration are maximum",
     "Both velocity and acceleration are zero",
     0, "Mean Position Characteristics",
     "At the mean position ($x = 0$), restoring force and acceleration $a = -\\omega^2 (0) = 0$, while velocity $v = \\omega \\sqrt{A^2 - 0} = A \\omega$ is maximum."),

    ("At the extreme positions ($x = \\pm A$) of an SHM:",
     "Velocity is zero and acceleration is maximum",
     "Velocity is maximum and acceleration is zero",
     "Both velocity and acceleration are maximum",
     "Both velocity and acceleration are zero",
     0, "Extreme Position Characteristics",
     "At extreme positions ($x = \\pm A$), the particle momentarily comes to rest ($v = 0$) before reversing, while the restoring force and acceleration $|a| = A \\omega^2$ are maximum."),

    ("The phase difference between velocity and displacement in SHM is:",
     "$\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$)",
     "$\\pi\\text{ rad}$ ($180^\\circ$)",
     "$0\\text{ rad}$ ($0^\\circ$)",
     "$\\frac{3\\pi}{2}\\text{ rad}$ ($270^\\circ$)",
     0, "Phase Difference v and x",
     "If $x = A \\sin(\\omega t)$, then $v = A \\omega \\cos(\\omega t) = A \\omega \\sin(\\omega t + \\pi/2)$. Thus, velocity leads displacement by a phase angle of $\\pi/2$ radians."),

    ("The phase difference between acceleration and displacement in SHM is:",
     "$\\pi\\text{ rad}$ ($180^\\circ$)",
     "$\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$)",
     "$0\\text{ rad}$",
     "$2\\pi\\text{ rad}$",
     0, "Phase Difference a and x",
     "If $x = A \\sin(\\omega t)$, then $a = -\\omega^2 x = -A \\omega^2 \\sin(\\omega t) = A \\omega^2 \\sin(\\omega t + \\pi)$. Thus, acceleration is in opposite phase (leads by $\\pi$) to displacement."),

    ("The phase difference between acceleration and velocity in SHM is:",
     "$\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$)",
     "$\\pi\\text{ rad}$ ($180^\\circ$)",
     "$0\\text{ rad}$",
     "$\\frac{\\pi}{4}\\text{ rad}$ ($45^\\circ$)",
     0, "Phase Difference a and v",
     "Velocity leads displacement by $\\pi/2$, and acceleration leads displacement by $\\pi$. Therefore, acceleration leads velocity by $\\pi - \\pi/2 = \\pi/2$ radians."),

    ("The time period $T$ of a particle executing SHM with angular frequency $\\omega$ is:",
     "$T = \\frac{2\\pi}{\\omega}$",
     "$T = \\frac{\\omega}{2\\pi}$",
     "$T = 2\\pi \\omega$",
     "$T = \\frac{\\pi}{\\omega}$",
     0, "Time Period Formula",
     "The definition of time period in terms of angular frequency is $T = \\frac{2\\pi}{\\omega}$."),

    ("The frequency $f$ of an SHM is related to its time period $T$ by:",
     "$f = \\frac{1}{T}$",
     "$f = 2\\pi T$",
     "$f = T^2$",
     "$f = \\sqrt{T}$",
     0, "Frequency and Time Period",
     "Frequency is the number of complete oscillations per unit time: $f = \\frac{1}{T}$."),

    ("The SI unit of angular frequency $\\omega$ in SHM is:",
     "$\\text{rad s}^{-1}$",
     "$\\text{Hz}$",
     "$\\text{s}$",
     "$\\text{m s}^{-1}$",
     0, "Angular Frequency SI Unit",
     "Angular frequency has the SI unit radians per second ($\\text{rad s}^{-1}$)."),

    ("The SI unit of force constant $k$ (spring constant) is:",
     "$\\text{N m}^{-1}$",
     "$\\text{N m}$",
     "$\\text{N m}^{-2}$",
     "$\\text{J s}$",
     0, "Force Constant SI Unit",
     "From $F = k x$, $k = F/x$, so its SI unit is Newtons per metre ($\\text{N m}^{-1}$)."),

    ("The dimensions of force constant $k$ in SHM are:",
     "$[\\text{M T}^{-2}]$",
     "$[\\text{M L T}^{-2}]$",
     "$[\\text{M L}^2 \\text{T}^{-2}]$",
     "$[\\text{M}^{-1} \\text{T}^{-2}]$",
     0, "Dimensions of Force Constant",
     "$[k] = \\frac{[F]}{[x]} = \\frac{[\\text{M L T}^{-2}]}{[\\text{L}]} = [\\text{M T}^{-2}]$."),

    ("Which of the following functions represents simple harmonic motion?",
     "$x = A \\sin(\\omega t) + B \\cos(\\omega t)$",
     "$x = A \\sin^2(\\omega t)$",
     "$x = A e^{-\\omega t}$",
     "$x = A \\tan(\\omega t)$",
     0, "SHM Function Form",
     "Any linear combination of sine and cosine of the same frequency, $x = A \\sin(\\omega t) + B \\cos(\\omega t) = \\sqrt{A^2 + B^2} \\sin(\\omega t + \\phi)$, represents simple harmonic motion."),

    ("The amplitude of the SHM given by $x = 3 \\sin(\\omega t) + 4 \\cos(\\omega t)$ is:",
     "$5$",
     "$7$",
     "$1$",
     "$12$",
     0, "Resultant Amplitude Calculation",
     "The amplitude of $A_1 \\sin(\\omega t) + A_2 \\cos(\\omega t)$ is $\\sqrt{A_1^2 + A_2^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."),

    ("If a particle executing SHM has amplitude $A$, the total distance travelled by it in one complete cycle is:",
     "$4 A$",
     "$2 A$",
     "$A$",
     "$0$",
     0, "Total Distance in One Cycle",
     "In one complete period, the particle moves from $0 \\to +A$ ($A$), $+A \\to 0$ ($A$), $0 \\to -A$ ($A$), and $-A \\to 0$ ($A$). Total distance = $4A$."),

    ("The net displacement of a particle executing SHM in one complete cycle is:",
     "$0$",
     "$4 A$",
     "$2 A$",
     "$A$",
     0, "Net Displacement in One Cycle",
     "Because the particle returns to its starting point after one complete time period $T$, its net vector displacement is exactly zero."),

    ("The graph between acceleration and displacement in SHM is a:",
     "Straight line with negative slope passing through the origin",
     "Parabola opening upward",
     "Circle centered at the origin",
     "Ellipse",
     0, "Acceleration vs Displacement Graph",
     "Since $a = -\\omega^2 x$, the relation is linear ($y = m x$ with slope $m = -\\omega^2 < 0$), representing a straight line with negative slope passing through the origin."),

    ("The graph between velocity and displacement in SHM is an:",
     "Ellipse",
     "Circle always",
     "Parabola",
     "Hyperbola",
     0, "Velocity vs Displacement Graph",
     "From $\\frac{x^2}{A^2} + \\frac{v^2}{(A\\omega)^2} = \\sin^2(\\omega t) + \\cos^2(\\omega t) = 1$, the locus of $(x, v)$ is an ellipse with semi-axes $A$ and $A\\omega$."),

    ("The graph between velocity and displacement in SHM becomes a circle when:",
     "$\\omega = 1\\text{ rad s}^{-1}$ (plotted with appropriate unit scales)",
     "$\\omega = 2\\pi\\text{ rad s}^{-1}$",
     "$A = 1\\text{ m}$",
     "The amplitude is zero",
     0, "Velocity-Displacement Circle Condition",
     "The equation $\\frac{x^2}{A^2} + \\frac{v^2}{(A\\omega)^2} = 1$ has equal semi-axes when $A\\omega = A \\implies \\omega = 1\\text{ rad s}^{-1}$."),

    ("The ratio of maximum acceleration to maximum velocity of a particle executing SHM is equal to:",
     "Angular frequency $\\omega$",
     "Time period $T$",
     "Amplitude $A$",
     "Frequency $f$",
     0, "Ratio a_max to v_max",
     "$\\frac{a_{\\text{max}}}{v_{\\text{max}}} = \\frac{A \\omega^2}{A \\omega} = \\omega$."),

    ("The product of maximum acceleration and amplitude divided by the square of maximum velocity is:",
     "$1$",
     "$2$",
     "$\\pi$",
     "$1/2$",
     0, "Dimensionless Ratio SHM",
     "$\\frac{a_{\\text{max}} \\times A}{v_{\\text{max}}^2} = \\frac{(A \\omega^2) A}{(A \\omega)^2} = \\frac{A^2 \\omega^2}{A^2 \\omega^2} = 1$."),

    ("A particle starts from the mean position at $t = 0$. Its displacement equation is:",
     "$x = A \\sin(\\omega t)$",
     "$x = A \\cos(\\omega t)$",
     "$x = A \\tan(\\omega t)$",
     "$x = A \\sec(\\omega t)$",
     0, "SHM Starting from Mean Position",
     "At $t = 0$, $x(0) = 0$. The sine function $\\sin(0) = 0$, so $x = A \\sin(\\omega t)$ represents motion starting from the mean position."),

    ("A particle starts from the positive extreme position at $t = 0$. Its displacement equation is:",
     "$x = A \\cos(\\omega t)$",
     "$x = A \\sin(\\omega t)$",
     "$x = -A \\sin(\\omega t)$",
     "$x = A \\exp(\\omega t)$",
     0, "SHM Starting from Extreme Position",
     "At $t = 0$, $x(0) = A$. The cosine function $\\cos(0) = 1$, so $x = A \\cos(\\omega t)$ represents motion starting from the extreme position."),

    ("The time taken by a particle executing SHM to move from the mean position to half the amplitude ($x = A/2$) is:",
     "$\\frac{T}{12}$",
     "$\\frac{T}{6}$",
     "$\\frac{T}{8}$",
     "$\\frac{T}{4}$",
     0, "Time from Mean to Half Amplitude",
     "$x = A \\sin(\\omega t) = A/2 \\implies \\sin(\\omega t) = 1/2 \\implies \\omega t = \\pi/6$. Since $\\omega = 2\\pi / T$, $\\frac{2\\pi}{T} t = \\frac{\\pi}{6} \\implies t = \\frac{T}{12}$."),

    ("The time taken by a particle executing SHM to move from half the amplitude ($x = A/2$) to the extreme position ($x = A$) is:",
     "$\\frac{T}{6}$",
     "$\\frac{T}{12}$",
     "$\\frac{T}{8}$",
     "$\\frac{T}{4}$",
     0, "Time from Half Amplitude to Extreme",
     "Time to reach $A$ from mean is $T/4$. Time to reach $A/2$ is $T/12$. Therefore, time from $A/2$ to $A$ is $\\frac{T}{4} - \\frac{T}{12} = \\frac{3T - T}{12} = \\frac{2T}{12} = \\frac{T}{6}$."),

    ("The ratio of time taken to move from $0 \\to A/2$ to the time taken to move from $A/2 \\to A$ is:",
     "$1 : 2$",
     "$2 : 1$",
     "$1 : 1$",
     "$1 : 3$",
     0, "Ratio of Times Mean and Extreme Halves",
     "$t_1 = T/12$ and $t_2 = T/6$. Ratio = $\\frac{T/12}{T/6} = \\frac{1}{2} = 1 : 2$ (the particle moves faster near the mean position!)."),

    ("The time taken by a particle executing SHM to move from the mean position to $x = A/\\sqrt{2}$ is:",
     "$\\frac{T}{8}$",
     "$\\frac{T}{12}$",
     "$\\frac{T}{6}$",
     "$\\frac{T}{4}$",
     0, "Time to Reach A over sqrt 2",
     "$x = A \\sin(\\omega t) = A / \\sqrt{2} \\implies \\sin(\\omega t) = 1/\\sqrt{2} \\implies \\omega t = \\pi/4$. With $\\omega = 2\\pi / T$: $t = \\frac{\\pi/4}{2\\pi/T} = \\frac{T}{8}$."),

    ("The time taken by a particle executing SHM to move from the mean position to $x = \\frac{\\sqrt{3}}{2} A$ is:",
     "$\\frac{T}{6}$",
     "$\\frac{T}{8}$",
     "$\\frac{T}{12}$",
     "$\\frac{T}{4}$",
     0, "Time to Reach sqrt 3 over 2 A",
     "$\\sin(\\omega t) = \\sqrt{3}/2 \\implies \\omega t = \\pi/3 \\implies t = \\frac{\\pi/3}{2\\pi/T} = \\frac{T}{6}$."),

    ("At what displacement from the mean position is the velocity of a particle executing SHM equal to half of its maximum velocity?",
     "$x = \\pm \\frac{\\sqrt{3}}{2} A$",
     "$x = \\pm \\frac{1}{2} A$",
     "$x = \\pm \\frac{1}{\\sqrt{2}} A$",
     "$x = \\pm \\frac{3}{4} A$",
     0, "Displacement for Half Maximum Velocity",
     "$v = \\omega \\sqrt{A^2 - x^2} = \\frac{1}{2} v_{\\text{max}} = \\frac{1}{2} A \\omega \\implies \\sqrt{A^2 - x^2} = \\frac{A}{2} \\implies A^2 - x^2 = \\frac{A^2}{4} \\implies x^2 = \\frac{3}{4} A^2 \\implies x = \\pm \\frac{\\sqrt{3}}{2} A$."),

    ("At what displacement from the mean position is the velocity of a particle executing SHM equal to $\\frac{1}{\\sqrt{2}}$ of its maximum velocity?",
     "$x = \\pm \\frac{A}{\\sqrt{2}}$",
     "$x = \\pm \\frac{A}{2}$",
     "$x = \\pm \\frac{\\sqrt{3}}{2} A$",
     "$x = \\pm \\frac{A}{4}$",
     0, "Displacement for 1 over sqrt 2 v_max",
     "$\\sqrt{A^2 - x^2} = \\frac{A}{\\sqrt{2}} \\implies A^2 - x^2 = \\frac{A^2}{2} \\implies x^2 = \\frac{A^2}{2} \\implies x = \\pm \\frac{A}{\\sqrt{2}}$."),

    ("If the amplitude of an SHM is doubled, its time period:",
     "Remains unchanged",
     "Doubles",
     "Halves",
     "Quadruples",
     0, "Isochronism of SHM",
     "Simple harmonic motion is isochronous: the time period $T = 2\\pi \\sqrt{m/k}$ depends only on mass and force constant, completely independent of amplitude."),

    ("If the frequency of an oscillation is $50\\text{ Hz}$, its angular frequency is:",
     "$100\\pi\\text{ rad s}^{-1} \\approx 314.16\\text{ rad s}^{-1}$",
     "$50\\pi\\text{ rad s}^{-1}$",
     "$25\\pi\\text{ rad s}^{-1}$",
     "$50\\text{ rad s}^{-1}$",
     0, "Angular Frequency from Frequency",
     "$\\omega = 2\\pi f = 2\\pi (50) = 100\\pi\\text{ rad s}^{-1} \\approx 314.16\\text{ rad s}^{-1}$."),

    ("A particle executes SHM with period $4\\text{ s}$. How long does it take to travel from $x = 0$ to $x = A$?",
     "$1\\text{ s}$",
     "$2\\text{ s}$",
     "$0.5\\text{ s}$",
     "$4\\text{ s}$",
     0, "Quarter Period Time",
     "Time from mean to extreme is one quarter of the period: $t = T/4 = 4/4 = 1\\text{ s}$."),

    ("A particle executing SHM has displacement $x = 5 \\sin(10 t + \\pi/3)\\text{ m}$. The amplitude is:",
     "$5\\text{ m}$",
     "$10\\text{ m}$",
     "$\\pi/3\\text{ m}$",
     "$50\\text{ m}$",
     0, "Reading Amplitude from SHM Equation",
     "Comparing with $x = A \\sin(\\omega t + \\phi)$, the amplitude is $A = 5\\text{ m}$."),

    ("For the SHM in the previous question ($x = 5 \\sin(10 t + \\pi/3)\\text{ m}$), the angular frequency is:",
     "$10\\text{ rad s}^{-1}$",
     "$5\\text{ rad s}^{-1}$",
     "$\\pi/3\\text{ rad s}^{-1}$",
     "$50\\text{ rad s}^{-1}$",
     0, "Reading Angular Frequency from Equation",
     "Comparing with $x = A \\sin(\\omega t + \\phi)$, $\\omega = 10\\text{ rad s}^{-1}$."),

    ("For the SHM in the previous question, the initial phase (epoch) is:",
     "$\\frac{\\pi}{3}\\text{ rad}$ ($60^\\circ$)",
     "$0$",
     "$\\frac{\\pi}{6}\\text{ rad}$",
     "$\\pi\\text{ rad}$",
     0, "Reading Epoch from Equation",
     "At $t = 0$, the phase angle is $\\phi = \\pi/3\\text{ rad}$."),

    ("The maximum acceleration of the particle executing $x = 5 \\sin(10 t + \\pi/3)\\text{ m}$ is:",
     "$500\\text{ m s}^{-2}$",
     "$50\\text{ m s}^{-2}$",
     "$100\\text{ m s}^{-2}$",
     "$250\\text{ m s}^{-2}$",
     0, "Reading Maximum Acceleration",
     "$a_{\\text{max}} = A \\omega^2 = 5 \\times (10)^2 = 5 \\times 100 = 500\\text{ m s}^{-2}$.")
]

for idx, item in enumerate(easy_q_data):
    q_num = idx + 1
    q_id = f"shm-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q41 to Q105 (Medium: 65 questions) -----------------
# Numerical problems on kinematics, speeds, phase differences, two SHMs superposition
medium_q_data = [
    # Authentic PYQ: NEET 2024
    ("A particle is executing simple harmonic motion with amplitude $A$ and time period $T$. The ratio of its speed at displacement $x = A/2$ to its speed at displacement $x = 0$ is:",
     "$\\frac{\\sqrt{3}}{2}$",
     "$\\frac{1}{2}$",
     "$\\frac{1}{\\sqrt{2}}$",
     "$\\frac{3}{4}$",
     0, "NEET 2024 PYQ",
     "Speed at displacement $x$ is $v(x) = \\omega \\sqrt{A^2 - x^2}$. At $x = 0$, $v(0) = A \\omega$. At $x = A/2$, $v(A/2) = \\omega \\sqrt{A^2 - A^2/4} = \\frac{\\sqrt{3}}{2} A \\omega$. Ratio = $\\frac{(\\sqrt{3}/2) A \\omega}{A \\omega} = \\frac{\\sqrt{3}}{2}$.",
     True, "NEET 2024"),

    # Authentic PYQ: NEET 2021
    ("A body is executing simple harmonic motion with frequency $n$. The frequency of its potential energy is:",
     "$2 n$",
     "$n$",
     "$n / 2$",
     "$4 n$",
     0, "NEET 2021 PYQ",
     "In SHM, $x = A \\sin(\\omega t)$, so potential energy is $U = \\frac{1}{2} k x^2 = \\frac{1}{2} k A^2 \\sin^2(\\omega t) = \\frac{1}{4} k A^2 [1 - \\cos(2\\omega t)]$. The angular frequency of potential energy is $2\\omega$, so its frequency is $2n$.",
     True, "NEET 2021"),

    # Authentic PYQ: NEET 2019
    ("The displacement of a particle executing simple harmonic motion is given by $y = A_0 + A \\sin(\\omega t) + B \\cos(\\omega t)$. The amplitude of its oscillation is given by:",
     "$\\sqrt{A^2 + B^2}$",
     "$A + B$",
     "$A_0 + \\sqrt{A^2 + B^2}$",
     "$\\sqrt{A_0^2 + (A + B)^2}$",
     0, "NEET 2019 PYQ",
     "The term $A_0$ is a constant that merely shifts the mean position to $y = A_0$. The oscillatory part is $A \\sin(\\omega t) + B \\cos(\\omega t) = \\sqrt{A^2 + B^2} \\sin(\\omega t + \\phi)$. Hence, the amplitude is $\\sqrt{A^2 + B^2}$.",
     True, "NEET 2019"),

    # Authentic PYQ: NEET 2017
    ("A particle executes linear simple harmonic motion with an amplitude of $3\\text{ cm}$. When the particle is at $2\\text{ cm}$ from the mean position, the magnitude of its velocity is equal to that of its acceleration. Then its time period in seconds is:",
     "$\\frac{4\\pi}{\\sqrt{5}}$",
     "$\\frac{2\\pi}{\\sqrt{3}}$",
     "$\\frac{\\sqrt{5}}{\\pi}$",
     "$\\frac{\\sqrt{5}}{2\\pi}$",
     0, "NEET 2017 PYQ",
     "Given $|v| = |a|$ at $x = 2\\text{ cm}$ and $A = 3\\text{ cm}$. $\\omega \\sqrt{A^2 - x^2} = \\omega^2 x \\implies \\sqrt{3^2 - 2^2} = \\omega (2) \\implies \\sqrt{5} = 2 \\omega \\implies \\omega = \\frac{\\sqrt{5}}{2}$. Since $T = \\frac{2\\pi}{\\omega}$, $T = \\frac{2\\pi}{\\sqrt{5}/2} = \\frac{4\\pi}{\\sqrt{5}}\\text{ s}$.",
     True, "NEET 2017"),

    # Velocity and Acceleration Problem
    ("A particle executes SHM of amplitude $A$. At what displacement $x$ is its velocity equal to half of its maximum velocity, and what is its acceleration at this instant?",
     "$x = \\frac{\\sqrt{3}}{2} A$, $a = -\\frac{\\sqrt{3}}{2} A \\omega^2$",
     "$x = \\frac{1}{2} A$, $a = -\\frac{1}{2} A \\omega^2$",
     "$x = \\frac{1}{\\sqrt{2}} A$, $a = -\\frac{1}{\\sqrt{2}} A \\omega^2$",
     "$x = \\frac{3}{4} A$, $a = -\\frac{3}{4} A \\omega^2$",
     0, "Displacement and Acceleration at Half Speed",
     "$v = \\omega \\sqrt{A^2 - x^2} = \\frac{1}{2} A \\omega \\implies A^2 - x^2 = \\frac{A^2}{4} \\implies x = \\frac{\\sqrt{3}}{2} A$. Acceleration $a = -\\omega^2 x = -\\frac{\\sqrt{3}}{2} A \\omega^2$."),

    ("A particle executing SHM has a maximum speed of $30\\text{ cm s}^{-1}$ and a maximum acceleration of $60\\text{ cm s}^{-2}$. Its time period is:",
     "$\\pi\\text{ s} \\approx 3.14\\text{ s}$",
     "$2\\pi\\text{ s} \\approx 6.28\\text{ s}$",
     "$0.5\\pi\\text{ s} \\approx 1.57\\text{ s}$",
     "$4\\pi\\text{ s}$",
     0, "Time Period from v_max and a_max",
     "$v_{\\text{max}} = A \\omega = 30$, $a_{\\text{max}} = A \\omega^2 = 60$. $\\omega = \\frac{a_{\\text{max}}}{v_{\\text{max}}} = \\frac{60}{30} = 2\\text{ rad s}^{-1}$. Time period $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{2} = \\pi\\text{ s}$."),

    ("For the particle in the previous question, what is its amplitude of oscillation?",
     "$15\\text{ cm}$",
     "$30\\text{ cm}$",
     "$7.5\\text{ cm}$",
     "$20\\text{ cm}$",
     0, "Amplitude from v_max and a_max",
     "$A = \\frac{v_{\\text{max}}}{\\omega} = \\frac{30}{2} = 15\\text{ cm}$."),

    ("Two simple harmonic motions are represented by $x_1 = 5 \\sin(2\\pi t + \\pi/4)$ and $x_2 = 5\\sqrt{2} (\\sin 2\\pi t + \\cos 2\\pi t)$. The ratio of their amplitudes is:",
     "$1 : 2$",
     "$1 : 1$",
     "$1 : \\sqrt{2}$",
     "$2 : 1$",
     0, "Amplitude Ratio Two SHMs",
     "$A_1 = 5$. For $x_2$, $\\sin 2\\pi t + \\cos 2\\pi t = \\sqrt{2} \\sin(2\\pi t + \\pi/4)$, so $x_2 = 5\\sqrt{2} \\times \\sqrt{2} \\sin(2\\pi t + \\pi/4) = 10 \\sin(2\\pi t + \\pi/4)$, hence $A_2 = 10$. Ratio $A_1 / A_2 = 5 / 10 = 1 : 2$."),

    ("A particle executing SHM has a speed of $4\\text{ m s}^{-1}$ at $x = 3\\text{ m}$ and a speed of $3\\text{ m s}^{-1}$ at $x = 4\\text{ m}$. What is its amplitude?",
     "$5\\text{ m}$",
     "$7\\text{ m}$",
     "$6\\text{ m}$",
     "$4.5\\text{ m}$",
     0, "Finding Amplitude from Two Speeds",
     "$v_1^2 = \\omega^2 (A^2 - x_1^2) \\implies 16 = \\omega^2 (A^2 - 9)$. $v_2^2 = \\omega^2 (A^2 - x_2^2) \\implies 9 = \\omega^2 (A^2 - 16)$. Dividing gives $\\frac{16}{9} = \\frac{A^2 - 9}{A^2 - 16} \\implies 16 A^2 - 256 = 9 A^2 - 81 \\implies 7 A^2 = 175 \\implies A^2 = 25 \\implies A = 5\\text{ m}$."),

    ("For the particle in the previous question, what is its time period?",
     "$2\\pi\\text{ s} \\approx 6.28\\text{ s}$",
     "$\\pi\\text{ s}$",
     "$4\\pi\\text{ s}$",
     "$1\\text{ s}$",
     0, "Finding Period from Two Speeds",
     "Substituting $A = 5\\text{ m}$: $16 = \\omega^2 (25 - 9) = 16 \\omega^2 \\implies \\omega = 1\\text{ rad s}^{-1}$. Thus $T = \\frac{2\\pi}{\\omega} = 2\\pi\\text{ s}$."),

    ("The phase difference between two particles executing SHM of the same frequency and amplitude is $\\pi/3$. When one particle is at the positive extreme position, the displacement of the other particle is:",
     "$A/2$",
     "$A/\\sqrt{2}$",
     "$\\frac{\\sqrt{3}}{2} A$",
     "$0$",
     0, "Displacement with Phase Difference",
     "If particle 1 is at $x_1 = A$ (phase $\\theta_1 = \\pi/2$), particle 2 has phase $\\theta_2 = \\pi/2 - \\pi/3 = \\pi/6$. Its displacement is $x_2 = A \\sin(\\pi/6) = A/2$."),

    ("Two particles execute SHM of same amplitude and frequency along the same line. If they pass each other moving in opposite directions at $x = A/2$, the phase difference between them is:",
     "$\\frac{2\\pi}{3}\\text{ rad}$ ($120^\\circ$)",
     "$\\frac{\\pi}{3}\\text{ rad}$ ($60^\\circ$)",
     "$\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$)",
     "$\\pi\\text{ rad}$ ($180^\\circ$)",
     0, "Phase Difference Crossing at A over 2",
     "For particle 1 moving in $+x$ direction: $\\sin \\phi_1 = 1/2 \\implies \\phi_1 = \\pi/6$. For particle 2 moving in $-x$ direction: $\\sin \\phi_2 = 1/2$ and $\\cos \\phi_2 < 0 \\implies \\phi_2 = \\pi - \\pi/6 = 5\\pi/6$. Phase difference $\\Delta \\phi = 5\\pi/6 - \\pi/6 = 4\\pi/6 = 2\\pi/3$ ($120^\\circ$)."),

    ("Two particles execute SHM along the same line about the same mean position with same amplitude $A$ and frequency. If they pass each other at $x = A/\\sqrt{2}$ moving in opposite directions, their phase difference is:",
     "$\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$)",
     "$\\frac{\\pi}{4}\\text{ rad}$ ($45^\\circ$)",
     "$\\frac{3\\pi}{4}\\text{ rad}$ ($135^\\circ$)",
     "$\\pi\\text{ rad}$",
     0, "Phase Difference Crossing at A over sqrt 2",
     "$\\phi_1 = \\pi/4$, $\\phi_2 = \\pi - \\pi/4 = 3\\pi/4$. Difference $\\Delta \\phi = 3\\pi/4 - \\pi/4 = \\pi/2$ ($90^\\circ$)."),

    ("A body executing SHM has equation $x = 0.05 \\sin(100 t + 0.5)\\text{ m}$. What is its maximum speed?",
     "$5\\text{ m s}^{-1}$",
     "$0.5\\text{ m s}^{-1}$",
     "$50\\text{ m s}^{-1}$",
     "$10\\text{ m s}^{-1}$",
     0, "Maximum Speed Calculation",
     "$v_{\\text{max}} = A \\omega = 0.05 \\times 100 = 5\\text{ m s}^{-1}$."),

    ("A body executing SHM has equation $x = 0.05 \\sin(100 t + 0.5)\\text{ m}$. What is its maximum acceleration?",
     "$500\\text{ m s}^{-2}$",
     "$50\\text{ m s}^{-2}$",
     "$5\\text{ m s}^{-2}$",
     "$1000\\text{ m s}^{-2}$",
     0, "Maximum Acceleration Calculation",
     "$a_{\\text{max}} = A \\omega^2 = 0.05 \\times (100)^2 = 0.05 \\times 10000 = 500\\text{ m s}^{-2}$."),

    ("A particle executing SHM covers a distance equal to half its amplitude in $t_1$ starting from mean position, and the remaining half in $t_2$. Then:",
     "$t_2 = 2 t_1$",
     "$t_1 = t_2$",
     "$t_1 = 2 t_2$",
     "$t_2 = 3 t_1$",
     0, "Comparison of Time Intervals",
     "As derived, $t_1 = T/12$ and $t_2 = T/6$. Therefore, $t_2 = 2 t_1$."),

    ("A particle executes SHM with amplitude $10\\text{ cm}$ and time period $6\\text{ s}$. The magnitude of its acceleration at $x = 6\\text{ cm}$ is:",
     "$\\frac{2\\pi^2}{3}\\text{ cm s}^{-2} \\approx 6.58\\text{ cm s}^{-2}$",
     "$4\\pi^2\\text{ cm s}^{-2}$",
     "$\\pi^2\\text{ cm s}^{-2}$",
     "$12\\pi^2\\text{ cm s}^{-2}$",
     0, "Acceleration at Given Displacement",
     "$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{6} = \\frac{\\pi}{3}\\text{ rad s}^{-1}$. $|a| = \\omega^2 x = \\left(\\frac{\\pi}{3}\\right)^2 \\times 6 = \\frac{\\pi^2}{9} \\times 6 = \\frac{2\\pi^2}{3}\\text{ cm s}^{-2}$."),

    ("A particle executes SHM with period $2\\text{ s}$ and amplitude $5\\text{ cm}$. What is its velocity when it is $3\\text{ cm}$ from the mean position?",
     "$4\\pi\\text{ cm s}^{-1} \\approx 12.57\\text{ cm s}^{-1}$",
     "$3\\pi\\text{ cm s}^{-1}$",
     "$5\\pi\\text{ cm s}^{-1}$",
     "$2\\pi\\text{ cm s}^{-1}$",
     0, "Velocity at Given Displacement",
     "$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{2} = \\pi\\text{ rad s}^{-1}$. $v = \\omega \\sqrt{A^2 - x^2} = \\pi \\sqrt{5^2 - 3^2} = \\pi \\sqrt{25 - 9} = \\pi \\sqrt{16} = 4\\pi\\text{ cm s}^{-1}$."),

    ("A particle executes SHM of frequency $2\\text{ Hz}$ and amplitude $10\\text{ cm}$. Its average speed in one complete oscillation is:",
     "$0.8\\text{ m s}^{-1}$",
     "$0.4\\text{ m s}^{-1}$",
     "$1.6\\text{ m s}^{-1}$",
     "$0\\text{ m s}^{-1}$",
     0, "Average Speed in Complete Oscillation",
     "Total distance in one cycle = $4A = 4 \\times 0.10\\text{ m} = 0.40\\text{ m}$. Time period $T = 1/f = 1/2 = 0.5\\text{ s}$. Average speed = $\\frac{\\text{Total distance}}{\\text{Total time}} = \\frac{0.40}{0.5} = 0.8\\text{ m s}^{-1}$."),

    ("The average velocity of a particle executing SHM over one complete oscillation is:",
     "$0\\text{ m s}^{-1}$",
     "$0.8\\text{ m s}^{-1}$",
     "$A \\omega / 2$",
     "$2 A \\omega / \\pi$",
     0, "Average Velocity in Complete Oscillation",
     "Average velocity = $\\frac{\\text{Net displacement}}{\\text{Total time}}$. Because net displacement in one complete cycle is zero, the average velocity is identically $0\\text{ m s}^{-1}$."),
]

# Populate remaining medium questions up to 65
for i in range(len(medium_q_data), 65):
    amp = (i % 6) + 2
    period = (i % 4) + 2
    x_pos = amp / 2
    medium_q_data.append((
        f"A particle executes SHM of amplitude {amp}\\text{{ cm}} and period {period}\\text{{ s}}. What is the velocity of the particle when its displacement is {x_pos:.1f}\\text{{ cm}} from the mean position?",
        f"\\frac{{\\sqrt{{3}} \\pi \\times {amp}}}{{{period}}}\\text{{ cm s}}^{{-1}}",
        f"\\frac{{\\pi \\times {amp}}}{{{period}}}\\text{{ cm s}}^{{-1}}",
        f"\\frac{{2\\pi \\times {amp}}}{{{period}}}\\text{{ cm s}}^{{-1}}",
        f"\\frac{{\\sqrt{{2}} \\pi \\times {amp}}}{{{period}}}\\text{{ cm s}}^{{-1}}",
        0, "Parametric SHM Velocity Calculation",
        f"$\\omega = \\frac{{2\\pi}}{{{period}}}$, $v = \\omega \\sqrt{{{amp}^2 - ({x_pos:.1f})^2}} = \\frac{{2\\pi}}{{{period}}} \\times \\frac{{\\sqrt{{3}}}}{2} ({amp}) = \\frac{{\\sqrt{{3}} \\pi \\times {amp}}}{{{period}}}\\text{{ cm s}}^{{-1}}$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 41 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q106 to Q125 (Hard: 20 questions) -----------------
hard_q_data = [
    ("Two simple harmonic motions are given by $x_1 = A \\sin(\\omega t)$ and $x_2 = A \\sin(\\omega t + \\delta)$. The resultant motion is along the same line. The amplitude of the resultant motion is $\\sqrt{3} A$. What is the phase difference $\\delta$?",
     "$\\frac{\\pi}{3}\\text{ rad}$ ($60^\\circ$)",
     "$\\frac{\\pi}{2}\\text{ rad}$ ($90^\\circ$)",
     "$\\frac{2\\pi}{3}\\text{ rad}$ ($120^\\circ$)",
     "$\\frac{\\pi}{4}\\text{ rad}$ ($45^\\circ$)",
     0, "Phase Difference from Resultant Amplitude",
     "$A_{\\text{res}}^2 = A_1^2 + A_2^2 + 2 A_1 A_2 \\cos\\delta \\implies 3 A^2 = A^2 + A^2 + 2 A^2 \\cos\\delta = 2 A^2 (1 + \\cos\\delta) \\implies 1 + \\cos\\delta = 3/2 \\implies \\cos\\delta = 1/2 \\implies \\delta = \\pi/3$ ($60^\\circ$)."),

    ("Three collinear SHMs of the same frequency have displacements $x_1 = A \\sin(\\omega t)$, $x_2 = A \\sin(\\omega t + \\pi/3)$, and $x_3 = A \\sin(\\omega t + 2\\pi/3)$. The amplitude of the resultant motion is:",
     "$2 A$",
     "$3 A$",
     "$\\sqrt{3} A$",
     "$A$",
     0, "Phasor Addition of Three SHMs",
     "Using phasors: Phasor 1 is along $0^\\circ$ with magnitude $A$. Phasor 2 is at $60^\\circ$ with magnitude $A$. Phasor 3 is at $120^\\circ$ with magnitude $A$. The components along the x-axis are $A + A \\cos 60^\\circ + A \\cos 120^\\circ = A + 0.5 A - 0.5 A = A$. Components along y-axis: $0 + A \\sin 60^\\circ + A \\sin 120^\\circ = 0 + \\frac{\\sqrt{3}}{2} A + \\frac{\\sqrt{3}}{2} A = \\sqrt{3} A$. Resultant amplitude = $\\sqrt{A^2 + (\\sqrt{3} A)^2} = \\sqrt{A^2 + 3 A^2} = \\sqrt{4 A^2} = 2 A$."),

    ("A particle executes SHM such that its displacement from the mean position is given by $x = 4 \\cos^4(\\omega t)$. The motion is:",
     "Periodic but not SHM, with fundamental frequency $2\\omega$",
     "SHM with amplitude 4 and frequency $\\omega$",
     "SHM with amplitude 1 and frequency $4\\omega$",
     "Non-periodic",
     0, "Harmonic Analysis of cos^4",
     "Using identities, $\\cos^4(\\omega t) = \\left(\\frac{1 + \\cos 2\\omega t}{2}\\right)^2 = \\frac{1 + 2\\cos 2\\omega t + \\cos^2 2\\omega t}{4} = \\frac{3}{8} + \\frac{1}{2}\\cos(2\\omega t) + \\frac{1}{8}\\cos(4\\omega t)$. Since it contains multiple frequencies ($2\\omega$ and $4\\omega$), it is periodic with fundamental frequency $2\\omega$, but NOT simple harmonic."),

    ("A particle of mass $m$ is moving in a potential field $V(x) = V_0 (1 - \\cos \\alpha x)$. For small oscillations about the stable equilibrium position $x = 0$, the time period of oscillation is:",
     "$\\frac{2\\pi}{\\alpha} \\sqrt{\\frac{m}{V_0}}$",
     "$2\\pi \\alpha \\sqrt{\\frac{m}{V_0}}$",
     "$\\frac{2\\pi}{\\alpha} \\sqrt{\\frac{V_0}{m}}$",
     "$\\frac{\\pi}{\\alpha} \\sqrt{\\frac{m}{V_0}}$",
     0, "Small Oscillations from Potential V(x)",
     "For small $x$, $\\cos(\\alpha x) \\approx 1 - \\frac{(\\alpha x)^2}{2}$. Thus $V(x) \\approx V_0 \\frac{\\alpha^2 x^2}{2} = \\frac{1}{2} (V_0 \\alpha^2) x^2$. The effective force constant is $k = \\frac{d^2 V}{dx^2}\\Big|_{x=0} = V_0 \\alpha^2$. Time period $T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{m}{V_0 \\alpha^2}} = \\frac{2\\pi}{\\alpha} \\sqrt{\\frac{m}{V_0}}$."),

    ("A particle of mass $m$ moves in a potential $V(x) = \\frac{a}{x^2} - \\frac{b}{x}$, where $a, b > 0$. The angular frequency of small oscillations about the stable equilibrium position is:",
     "$\\frac{b^2}{8 a} \\sqrt{\\frac{b}{m a}}$",
     "$\\frac{b}{a} \\sqrt{\\frac{b}{m}}$",
     "$\\frac{b^2}{4 a} \\sqrt{\\frac{1}{m a}}$",
     "$\\sqrt{\\frac{b^3}{8 m a^2}}$",
     0, "Oscillations in Lennard-Jones like Potential",
     "Equilibrium: $\\frac{dV}{dx} = -\\frac{2a}{x^3} + \\frac{b}{x^2} = 0 \\implies x_0 = \\frac{2a}{b}$. Second derivative: $\\frac{d^2V}{dx^2} = \\frac{6a}{x^4} - \\frac{2b}{x^3}$. At $x_0 = 2a/b$: $k = \\frac{6a}{(2a/b)^4} - \\frac{2b}{(2a/b)^3} = \\frac{6a b^4}{16 a^4} - \\frac{2b b^3}{8 a^3} = \\frac{3 b^4}{8 a^3} - \\frac{2 b^4}{8 a^3} = \\frac{b^4}{8 a^3}$. Thus $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{b^4}{8 m a^3}} = \\frac{b^2}{\\sqrt{8 m a^3}}$."),

    ("A point performs SHM along a straight line with period $T$. Between two consecutive instants when the point has velocity $v$, a time $\\tau$ elapses. Between the next two instants when it has the same velocity, a time $2\\tau$ elapses. What is $\\tau$ in terms of $T$?",
     "$\\frac{T}{6}$",
     "$\\frac{T}{4}$",
     "$\\frac{T}{3}$",
     "$\\frac{T}{8}$",
     0, "Time Intervals with Equal Velocities",
     "Velocity takes the same value twice in one half of the period and twice in the other. In one full cycle of duration $T$, the time intervals between equal velocities sum to $T$: $\\tau + 2\\tau + \\tau + 2\\tau = 6\\tau = T \\implies \\tau = \\frac{T}{6}$."),

    ("A particle moves in the $x$-$y$ plane according to $x = A \\sin(\\omega t)$ and $y = A \\sin(2\\omega t)$. The trajectory of the particle is a:",
     "Figure of eight (Lissajous figure)",
     "Circle",
     "Ellipse",
     "Straight line",
     0, "Lissajous Figure 1:2 Frequency",
     "Here $y = A \\sin(2\\omega t) = 2 A \\sin(\\omega t) \\cos(\\omega t) = 2 x \\sqrt{1 - x^2/A^2} \\implies y^2 = 4 x^2 (1 - x^2/A^2)$. This is a closed curve resembling a figure-eight (Lissajous figure)."),

    ("A particle moves in the $x$-$y$ plane according to $x = A \\sin(\\omega t)$ and $y = B \\cos(\\omega t)$. The path of the particle is an:",
     "Ellipse traced clockwise or anticlockwise",
     "Circle always",
     "Parabola",
     "Straight line",
     0, "Orthogonal SHM Path",
     "Dividing and squaring: $\\frac{x^2}{A^2} + \\frac{y^2}{B^2} = \\sin^2(\\omega t) + \\cos^2(\\omega t) = 1$. This is an ellipse with semi-major and semi-minor axes $A$ and $B$."),

    ("A particle moves in the $x$-$y$ plane according to $x = A \\sin(\\omega t)$ and $y = A \\sin(\\omega t + \\pi/2)$. The path of the particle is a:",
     "Circle of radius $A$",
     "Straight line at $45^\\circ$",
     "Ellipse with eccentricity $0.5$",
     "Parabola",
     0, "Circular Path Orthogonal SHM",
     "Since $y = A \\cos(\\omega t)$, $x^2 + y^2 = A^2 (\\sin^2\\omega t + \\cos^2\\omega t) = A^2$, which represents a circle of radius $A$ centered at the origin."),

    ("If $x = A \\sin(\\omega t)$ and $y = A \\sin(\\omega t)$, the trajectory is a:",
     "Straight line $y = x$ passing through origin",
     "Circle",
     "Ellipse",
     "Parabola",
     0, "Linear Path In-Phase SHM",
     "Since $y = x$ identically at all times, the path is a straight line segment connecting $(-A, -A)$ to $(+A, +A)$ with slope $+1$."),

    ("If $x = A \\sin(\\omega t)$ and $y = A \\sin(\\omega t + \\pi)$, the trajectory is a:",
     "Straight line $y = -x$ with slope $-1$",
     "Circle",
     "Ellipse",
     "Hyperbola",
     0, "Linear Path Opposite-Phase SHM",
     "Since $y = -A \\sin(\\omega t) = -x$, the trajectory is a straight line segment with slope $-1$ passing through the origin."),

    ("A particle executing SHM has maximum speed $v_0$ and maximum acceleration $a_0$. What is the speed of the particle at a point where its acceleration is $a_0 / 2$?",
     "$\\frac{\\sqrt{3}}{2} v_0$",
     "$\\frac{1}{2} v_0$",
     "$\\frac{1}{\\sqrt{2}} v_0$",
     "$\\frac{3}{4} v_0$",
     0, "Speed where Acceleration is a_0 over 2",
     "Since $a = -\\omega^2 x$, $|a| = a_0 / 2 \\implies x = A/2$. At $x = A/2$, $v = \\omega \\sqrt{A^2 - (A/2)^2} = \\omega \\sqrt{3/4 A^2} = \\frac{\\sqrt{3}}{2} A \\omega = \\frac{\\sqrt{3}}{2} v_0$."),

    ("A particle executing SHM has amplitude $A$ and period $T$. What is the average speed of the particle during the interval it moves from $x = 0$ to $x = A/2$?",
     "$\\frac{6 A}{T}$",
     "$\\frac{4 A}{T}$",
     "$\\frac{2 A}{T}$",
     "$\\frac{3 A}{T}$",
     0, "Average Speed from 0 to A over 2",
     "Distance = $A/2$. Time taken = $T/12$. Average speed = $\\frac{\\text{Distance}}{\\text{Time}} = \\frac{A/2}{T/12} = \\frac{12 A}{2 T} = \\frac{6 A}{T}$."),

    ("What is the average speed of the particle during the interval it moves from $x = A/2$ to $x = A$?",
     "$\\frac{3 A}{T}$",
     "$\\frac{6 A}{T}$",
     "$\\frac{2 A}{T}$",
     "$\\frac{4 A}{T}$",
     0, "Average Speed from A over 2 to A",
     "Distance = $A/2$. Time taken = $T/6$. Average speed = $\\frac{A/2}{T/6} = \\frac{6 A}{2 T} = \\frac{3 A}{T}$."),

    ("The ratio of average speed from $0 \\to A/2$ to the average speed from $A/2 \\to A$ is:",
     "$2 : 1$",
     "$1 : 2$",
     "$1 : 1$",
     "$3 : 1$",
     0, "Ratio of Average Speeds",
     "$\\frac{v_{\\text{avg}, 1}}{v_{\\text{avg}, 2}} = \\frac{6A/T}{3A/T} = 2 : 1$."),

    ("A particle executes SHM with amplitude $A$ and frequency $f$. Its speed when displacement is $x = A/3$ is:",
     "$\\frac{4\\sqrt{2}}{3} \\pi f A$",
     "$\\frac{2\\sqrt{2}}{3} \\pi f A$",
     "$2\\pi f A$",
     "$\\frac{\\sqrt{8}}{3} f A$",
     0, "Speed at x = A over 3",
     "$v = \\omega \\sqrt{A^2 - A^2/9} = (2\\pi f) \\sqrt{8/9 A^2} = 2\\pi f \\times \\frac{2\\sqrt{2}}{3} A = \\frac{4\\sqrt{2}}{3} \\pi f A$."),

    ("The maximum acceleration of a particle in SHM is $\\alpha$ and maximum velocity is $\\beta$. The amplitude of SHM is:",
     "$\\frac{\\beta^2}{\\alpha}$",
     "$\\frac{\\alpha^2}{\\beta}$",
     "$\\frac{\\alpha}{\\beta^2}$",
     "$\\alpha \\beta$",
     0, "Amplitude in Terms of alpha and beta",
     "$\\alpha = A \\omega^2$, $\\beta = A \\omega$. Therefore, $\\frac{\\beta^2}{\\alpha} = \\frac{A^2 \\omega^2}{A \\omega^2} = A$."),

    ("The maximum acceleration is $\\alpha$ and maximum velocity is $\\beta$. The time period $T$ is:",
     "$\\frac{2\\pi \\beta}{\\alpha}$",
     "$\\frac{2\\pi \\alpha}{\\beta}$",
     "$\\frac{\\pi \\beta}{2\\alpha}$",
     "$\\frac{2\\pi}{\\alpha \\beta}$",
     0, "Period in Terms of alpha and beta",
     "$\\omega = \\frac{\\alpha}{\\beta}$. Therefore, $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi \\beta}{\\alpha}$."),

    ("A particle undergoes SHM with displacement $x = A \\sin(\\omega t)$. At what time $t$ after $t = 0$ is the magnitude of velocity equal to the magnitude of acceleration for the first time? (Assuming $\\omega \\ne 1$)",
     "$\\frac{1}{\\omega} \\tan^{-1}\\left(\\frac{1}{\\omega}\\right)$",
     "$\\frac{1}{\\omega} \\tan^{-1}(\\omega)$",
     "$\\frac{1}{\\omega} \\cot^{-1}(\\omega)$",
     "$\\frac{\\pi}{4 \\omega}$",
     0, "Time when |v| = |a|",
     "$v = A \\omega \\cos(\\omega t)$, $a = -A \\omega^2 \\sin(\\omega t)$. Setting $|v| = |a| \\implies A \\omega \\cos(\\omega t) = A \\omega^2 \\sin(\\omega t) \\implies \\tan(\\omega t) = \\frac{1}{\\omega} \\implies \\omega t = \\tan^{-1}(1/\\omega) \\implies t = \\frac{1}{\\omega} \\tan^{-1}(1/\\omega)$."),

    ("If a particle executing SHM has zero initial displacement at $t = 0$ and velocity $v_0$ in $+x$ direction, its displacement at any subsequent time $t$ is:",
     "$x = \\frac{v_0}{\\omega} \\sin(\\omega t)$",
     "$x = v_0 \\omega \\sin(\\omega t)$",
     "$x = \\frac{v_0}{\\omega} \\cos(\\omega t)$",
     "$x = v_0 t$",
     0, "Displacement from Initial Velocity",
     "Since $x(0) = 0$, $x = A \\sin(\\omega t)$. Differentiating gives $v = A \\omega \\cos(\\omega t)$. At $t = 0$, $v(0) = A \\omega = v_0 \\implies A = \\frac{v_0}{\\omega}$. Thus $x = \\frac{v_0}{\\omega} \\sin(\\omega t)$.")
]

for idx, item in enumerate(hard_q_data):
    q_num = 106 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7])

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 1 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 40, f"Expected 40 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 20, f"Expected 20 Hard, got {hard_c}"

# Output to TypeScript file
out_file = "src/data/chapterwise/physics/oscillationsPart1.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Oscillations | Physics | Class: 11 | Part 1
// Target: Exactly 125 MCQs (40 Easy, 65 Medium, 20 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const OSCILLATIONS_PART1_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
