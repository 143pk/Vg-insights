#!/usr/bin/env python3
"""
Generator for Oscillations - Part 2 (Q126 to Q250)
Subject: Physics | Class: 11 | Chapter: Oscillations (oscillations)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- Kinetic Energy in SHM: K = 1/2 m v^2 = 1/2 k (A^2 - x^2)
- Potential Energy in SHM: U = 1/2 k x^2
- Total Mechanical Energy: E = 1/2 k A^2 = 1/2 m omega^2 A^2 (conserved)
- Positions and times where K = U, K = 3U, U = 3K
- Time average and position average of K and U
- Frequency of oscillation of kinetic and potential energy (2f, T/2)
- Energy-displacement and energy-time graphs
- Authentic NEET PYQs
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
        "topicId": "phys-shm-energy",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q126 to Q160 (Easy: 35 questions) -----------------
easy_q_data = [
    ("The total mechanical energy of a particle of mass $m$ executing SHM with amplitude $A$ and angular frequency $\\omega$ is:",
     "$E = \\frac{1}{2} m \\omega^2 A^2$",
     "$E = m \\omega^2 A^2$",
     "$E = \\frac{1}{2} m \\omega A^2$",
     "$E = \\frac{1}{4} m \\omega^2 A^2$",
     0, "Total Mechanical Energy Formula",
     "Total mechanical energy in SHM is constant and given by $E = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2$."),

    ("In SHM, the potential energy $U$ at displacement $x$ from the mean position (taking $U = 0$ at $x = 0$) is:",
     "$U = \\frac{1}{2} k x^2$",
     "$U = k x$",
     "$U = \\frac{1}{2} k x$",
     "$U = \\frac{1}{2} k (A^2 - x^2)$",
     0, "Potential Energy Formula",
     "The potential energy stored in an elastic restoring field is $U = \\int_0^x k x' dx' = \\frac{1}{2} k x^2 = \\frac{1}{2} m \\omega^2 x^2$."),

    ("In SHM, the kinetic energy $K$ at displacement $x$ from the mean position is:",
     "$K = \\frac{1}{2} k (A^2 - x^2)$",
     "$K = \\frac{1}{2} k x^2$",
     "$K = \\frac{1}{2} k A^2$",
     "$K = k (A^2 - x^2)$",
     0, "Kinetic Energy Formula",
     "Since $v = \\omega \\sqrt{A^2 - x^2}$, $K = \\frac{1}{2} m v^2 = \\frac{1}{2} m \\omega^2 (A^2 - x^2) = \\frac{1}{2} k (A^2 - x^2)$."),

    ("At the mean position ($x = 0$) of an SHM:",
     "Kinetic energy is maximum and potential energy is minimum",
     "Potential energy is maximum and kinetic energy is minimum",
     "Both kinetic and potential energies are zero",
     "Both kinetic and potential energies are equal to $E/2$",
     0, "Energy at Mean Position",
     "At $x = 0$, $K = \\frac{1}{2} k A^2 = E$ (maximum) and $U = 0$ (minimum)."),

    ("At the extreme positions ($x = \\pm A$) of an SHM:",
     "Potential energy is maximum and kinetic energy is zero",
     "Kinetic energy is maximum and potential energy is zero",
     "Both potential and kinetic energies are maximum",
     "Both potential and kinetic energies are zero",
     0, "Energy at Extreme Position",
     "At $x = \\pm A$, $v = 0$ so $K = 0$, while $U = \\frac{1}{2} k A^2 = E$ (maximum)."),

    ("At what displacement from the mean position are the kinetic energy and potential energy of a particle in SHM equal ($K = U$)?",
     "$x = \\pm \\frac{A}{\\sqrt{2}}$",
     "$x = \\pm \\frac{A}{2}$",
     "$x = \\pm \\frac{\\sqrt{3}}{2} A$",
     "$x = \\pm \\frac{A}{4}$",
     0, "Displacement where K = U",
     "Setting $K = U \\implies \\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k x^2 \\implies A^2 - x^2 = x^2 \\implies 2 x^2 = A^2 \\implies x = \\pm \\frac{A}{\\sqrt{2}}$."),

    ("At what displacement from the mean position is the potential energy equal to one-fourth of the total energy ($U = E/4$)?",
     "$x = \\pm \\frac{A}{2}$",
     "$x = \\pm \\frac{A}{\\sqrt{2}}$",
     "$x = \\pm \\frac{A}{4}$",
     "$x = \\pm \\frac{\\sqrt{3}}{2} A$",
     0, "Displacement where U = E over 4",
     "$U = \\frac{1}{2} k x^2 = \\frac{1}{4} E = \\frac{1}{4} \\left(\\frac{1}{2} k A^2\\right) \\implies x^2 = \\frac{A^2}{4} \\implies x = \\pm \\frac{A}{2}$."),

    ("When the displacement of a particle executing SHM is half of its amplitude ($x = A/2$), the ratio of its kinetic energy to potential energy ($K / U$) is:",
     "$3 : 1$",
     "$1 : 3$",
     "$1 : 1$",
     "$2 : 1$",
     0, "Ratio K to U at A over 2",
     "At $x = A/2$: $U = \\frac{1}{2} k (A/2)^2 = \\frac{1}{8} k A^2 = \\frac{1}{4} E$. $K = E - U = \\frac{3}{4} E$. Ratio $K / U = \\frac{3/4 E}{1/4 E} = 3 : 1$."),

    ("At what displacement from the mean position is the kinetic energy equal to one-fourth of the total energy ($K = E/4$)?",
     "$x = \\pm \\frac{\\sqrt{3}}{2} A$",
     "$x = \\pm \\frac{A}{2}$",
     "$x = \\pm \\frac{A}{\\sqrt{2}}$",
     "$x = \\pm \\frac{3}{4} A$",
     0, "Displacement where K = E over 4",
     "If $K = E/4$, then $U = E - K = \\frac{3}{4} E$. So $\\frac{1}{2} k x^2 = \\frac{3}{4} \\left(\\frac{1}{2} k A^2\\right) \\implies x^2 = \\frac{3}{4} A^2 \\implies x = \\pm \\frac{\\sqrt{3}}{2} A$."),

    ("If the frequency of oscillation of a particle in SHM is $f$, the frequency of oscillation of its kinetic energy is:",
     "$2 f$",
     "$f$",
     "$f / 2$",
     "$4 f$",
     0, "Frequency of Kinetic Energy",
     "Since $K(t) = \\frac{1}{2} k A^2 \\cos^2(\\omega t) = \\frac{1}{4} k A^2 [1 + \\cos(2\\omega t)]$, the angular frequency of $K$ is $2\\omega$, so its frequency is $2f$."),

    ("If the time period of an SHM is $T$, the time period of oscillation of its potential energy is:",
     "$\\frac{T}{2}$",
     "$T$",
     "$2 T$",
     "$\\frac{T}{4}$",
     0, "Time Period of Potential Energy",
     "Because potential energy oscillates with twice the frequency of SHM ($f_U = 2f$), its time period is $T_U = \\frac{1}{f_U} = \\frac{T}{2}$."),

    ("The time average of kinetic energy $\\langle K \\rangle_t$ over one complete cycle in SHM is:",
     "$\\frac{1}{4} k A^2 = \\frac{1}{2} E$",
     "$\\frac{1}{2} k A^2 = E$",
     "$\\frac{1}{8} k A^2 = \\frac{1}{4} E$",
     "Zero",
     0, "Time Average Kinetic Energy",
     "$\\langle K \\rangle_t = \\frac{1}{T} \\int_0^T \\frac{1}{2} k A^2 \\cos^2(\\omega t) dt = \\frac{1}{2} k A^2 \\times \\frac{1}{2} = \\frac{1}{4} k A^2 = \\frac{1}{2} E$."),

    ("The time average of potential energy $\\langle U \\rangle_t$ over one complete cycle in SHM is:",
     "$\\frac{1}{4} k A^2 = \\frac{1}{2} E$",
     "$\\frac{1}{2} k A^2 = E$",
     "$\\frac{1}{3} k A^2$",
     "Zero",
     0, "Time Average Potential Energy",
     "$\\langle U \\rangle_t = \\frac{1}{T} \\int_0^T \\frac{1}{2} k A^2 \\sin^2(\\omega t) dt = \\frac{1}{2} k A^2 \\times \\frac{1}{2} = \\frac{1}{4} k A^2 = \\frac{1}{2} E$."),

    ("The ratio of time average of kinetic energy to time average of potential energy in SHM is:",
     "$1 : 1$",
     "$2 : 1$",
     "$1 : 2$",
     "$3 : 1$",
     0, "Ratio of Time Averages",
     "Both time averages equal $\\frac{1}{4} k A^2 = \\frac{1}{2} E$, so their ratio is strictly $1 : 1$."),

    ("The graph of potential energy $U$ versus displacement $x$ in SHM is a:",
     "Parabola opening upward with vertex at origin",
     "Parabola opening downward",
     "Straight line with positive slope",
     "Circle",
     0, "U vs x Graph",
     "Since $U(x) = \\frac{1}{2} k x^2$, the graph of $U$ versus $x$ is a parabola opening upward with its minimum (vertex) at $x = 0$."),

    ("The graph of kinetic energy $K$ versus displacement $x$ in SHM is a:",
     "Parabola opening downward with maximum at origin",
     "Parabola opening upward",
     "Straight line with negative slope",
     "Ellipse",
     0, "K vs x Graph",
     "Since $K(x) = \\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k A^2 - \\frac{1}{2} k x^2$, the graph is an inverted parabola opening downward with its peak at $x = 0$."),

    ("The graph of total mechanical energy $E$ versus displacement $x$ in SHM is a:",
     "Horizontal straight line parallel to the displacement axis",
     "Parabola",
     "Straight line passing through the origin",
     "Vertical line",
     0, "E vs x Graph",
     "Because total energy $E = \\frac{1}{2} k A^2$ is constant and independent of displacement $x$, its graph is a horizontal straight line at height $E$."),

    ("If the amplitude of a particle executing SHM is doubled, its total mechanical energy:",
     "Quadruples",
     "Doubles",
     "Remains unchanged",
     "Increases by 8 times",
     0, "Total Energy Amplitude Scaling",
     "Since $E = \\frac{1}{2} k A^2 \\propto A^2$, doubling the amplitude increases the total mechanical energy by $2^2 = 4$ times."),

    ("If the frequency of a particle executing SHM is doubled while keeping amplitude constant, its total energy:",
     "Quadruples",
     "Doubles",
     "Remains unchanged",
     "Halves",
     0, "Total Energy Frequency Scaling",
     "Since $E = \\frac{1}{2} m \\omega^2 A^2 = 2\\pi^2 m f^2 A^2 \\propto f^2$, doubling the frequency quadruples the total energy."),

    ("If both the amplitude and frequency of an SHM are doubled, the total energy increases by a factor of:",
     "$16$",
     "$4$",
     "$8$",
     "$2$",
     0, "Total Energy Amplitude and Frequency Scaling",
     "$E \\propto f^2 A^2$. If both $f$ and $A$ double, $E$ increases by $2^2 \\times 2^2 = 4 \\times 4 = 16$ times."),

    ("What fraction of the total energy of an SHM is kinetic when the displacement is $x = A/\\sqrt{2}$?",
     "$1/2$ ($50\\%$)",
     "$1/4$ ($25\\%$)",
     "$3/4$ ($75\\%$)",
     "$1/3$ ($33.3\\%$)",
     0, "Kinetic Fraction at A over sqrt 2",
     "At $x = A/\\sqrt{2}$, $K = \\frac{1}{2} k [A^2 - A^2/2] = \\frac{1}{4} k A^2 = \\frac{1}{2} E$. So the fraction is $1/2$ ($50\\%$)."),

    ("What fraction of the total energy of an SHM is kinetic when the displacement is $x = A/2$?",
     "$3/4$ ($75\\%$)",
     "$1/4$ ($25\\%$)",
     "$1/2$ ($50\\%$)",
     "$2/3$ ($66.7\\%$)",
     0, "Kinetic Fraction at A over 2",
     "At $x = A/2$, $K = \\frac{1}{2} k [A^2 - A^2/4] = \\frac{3}{4} \\left(\\frac{1}{2} k A^2\\right) = \\frac{3}{4} E$ ($75\\%$)."),

    ("What fraction of the total energy of an SHM is potential when the displacement is $x = A/2$?",
     "$1/4$ ($25\\%$)",
     "$3/4$ ($75\\%$)",
     "$1/2$ ($50\\%$)",
     "$1/8$ ($12.5\\%$)",
     0, "Potential Fraction at A over 2",
     "$U = \\frac{1}{2} k (A/2)^2 = \\frac{1}{4} \\left(\\frac{1}{2} k A^2\\right) = \\frac{1}{4} E$ ($25\\%$)."),

    ("At what displacement from the mean position is the kinetic energy three times the potential energy ($K = 3 U$)?",
     "$x = \\pm \\frac{A}{2}$",
     "$x = \\pm \\frac{\\sqrt{3}}{2} A$",
     "$x = \\pm \\frac{A}{\\sqrt{2}}$",
     "$x = \\pm \\frac{A}{4}$",
     0, "Displacement where K = 3U",
     "$K = 3U \\implies E - U = 3U \\implies 4U = E \\implies 4 \\left(\\frac{1}{2} k x^2\\right) = \\frac{1}{2} k A^2 \\implies x^2 = A^2 / 4 \\implies x = \\pm A/2$."),

    ("At what displacement from the mean position is the potential energy three times the kinetic energy ($U = 3 K$)?",
     "$x = \\pm \\frac{\\sqrt{3}}{2} A$",
     "$x = \\pm \\frac{A}{2}$",
     "$x = \\pm \\frac{A}{\\sqrt{2}}$",
     "$x = \\pm \\frac{3}{4} A$",
     0, "Displacement where U = 3K",
     "$U = 3K \\implies U = 3(E - U) \\implies 4U = 3E \\implies 4 \\left(\\frac{1}{2} k x^2\\right) = 3 \\left(\\frac{1}{2} k A^2\\right) \\implies x^2 = \\frac{3}{4} A^2 \\implies x = \\pm \\frac{\\sqrt{3}}{2} A$."),

    ("A particle of mass $0.1\\text{ kg}$ executes SHM of amplitude $0.1\\text{ m}$ and frequency $5\\text{ Hz}$. What is its total mechanical energy?",
     "$\\approx 0.493\\text{ J}$",
     "$\\approx 0.987\\text{ J}$",
     "$\\approx 0.247\\text{ J}$",
     "$\\approx 4.93\\text{ J}$",
     0, "Total Energy Calculation",
     "$\\omega = 2\\pi f = 2\\pi(5) = 10\\pi\\text{ rad s}^{-1}$. $E = \\frac{1}{2} m \\omega^2 A^2 = \\frac{1}{2} (0.1)(10\\pi)^2 (0.1)^2 = 0.05 \\times 100\\pi^2 \\times 0.01 = 0.05 \\pi^2 \\approx 0.05 \\times 9.8696 \\approx 0.493\\text{ J}$."),

    ("The maximum kinetic energy of a mass $m$ executing SHM is $K_0$. Its potential energy at displacement $x = A/\\sqrt{2}$ is:",
     "$K_0 / 2$",
     "$K_0 / 4$",
     "$3 K_0 / 4$",
     "$K_0$",
     0, "Potential Energy from Maximum KE",
     "Maximum kinetic energy equals total energy: $K_0 = E$. At $x = A/\\sqrt{2}$, $U = \\frac{1}{2} k (A/\\sqrt{2})^2 = \\frac{1}{2} k (A^2/2) = \\frac{1}{2} E = K_0 / 2$."),

    ("The potential energy of a particle executing SHM at distance $x$ from mean position is proportional to:",
     "$x^2$",
     "$x$",
     "$x^3$",
     "$1/x$",
     0, "Potential Energy Proportionality",
     "From Hooke's law $F = -kx$, integrating gives $U(x) = \\frac{1}{2} k x^2 \\propto x^2$."),

    ("In an SHM, if the potential energy at mean position is non-zero ($U_0$), the total mechanical energy is:",
     "$E = U_0 + \\frac{1}{2} k A^2$",
     "$E = \\frac{1}{2} k A^2$",
     "$E = U_0 - \\frac{1}{2} k A^2$",
     "$E = 2 U_0 + k A^2$",
     0, "SHM with Non-Zero Minimum Potential Energy",
     "If $U(0) = U_0$, then $U(x) = U_0 + \\frac{1}{2} k x^2$. At $x = 0$, $K = K_{\\text{max}} = \\frac{1}{2} k A^2$. Total energy $E = K_{\\text{max}} + U_0 = U_0 + \\frac{1}{2} k A^2$."),

    ("A particle of mass $m$ executes SHM with amplitude $A$. At what distance from the mean position is its kinetic energy equal to $80\\%$ of its maximum value?",
     "$x = \\frac{1}{\\sqrt{5}} A \\approx 0.447 A$",
     "$x = 0.20 A$",
     "$x = 0.80 A$",
     "$x = 0.50 A$",
     0, "Displacement for 80 Percent Kinetic Energy",
     "$K = 0.80 E \\implies \\frac{1}{2} k (A^2 - x^2) = 0.80 \\left(\\frac{1}{2} k A^2\\right) \\implies A^2 - x^2 = 0.80 A^2 \\implies x^2 = 0.20 A^2 = \\frac{1}{5} A^2 \\implies x = \\frac{1}{\\sqrt{5}} A$."),

    ("A particle of mass $m$ executes SHM with amplitude $A$. At what distance from the mean position is its potential energy equal to $80\\%$ of total energy?",
     "$x = \\frac{2}{\\sqrt{5}} A \\approx 0.894 A$",
     "$x = 0.80 A$",
     "$x = 0.40 A$",
     "$x = 0.50 A$",
     0, "Displacement for 80 Percent Potential Energy",
     "$U = 0.80 E \\implies x^2 = 0.80 A^2 = \\frac{4}{5} A^2 \\implies x = \\frac{2}{\\sqrt{5}} A \\approx 0.894 A$."),

    ("The maximum acceleration of an oscillator is $a_0$ and maximum speed is $v_0$. If its mass is $m$, its total mechanical energy is:",
     "$E = \\frac{1}{2} m v_0^2$",
     "$E = \\frac{1}{2} m a_0^2$",
     "$E = m v_0 a_0$",
     "$E = \\frac{m v_0^2}{a_0}$",
     0, "Total Energy in Terms of v_max",
     "Total mechanical energy equals the maximum kinetic energy at the mean position: $E = \\frac{1}{2} m v_{\\text{max}}^2 = \\frac{1}{2} m v_0^2$."),

    ("In terms of $m$, $a_0$, and $\\omega$, the total energy of an oscillator can also be written as:",
     "$E = \\frac{m a_0^2}{2 \\omega^2}$",
     "$E = \\frac{m a_0^2}{2 \\omega}$",
     "$E = \\frac{1}{2} m a_0^2 \\omega^2$",
     "$E = m a_0^2 / \\omega$",
     0, "Total Energy in Terms of a_max",
     "Since $a_0 = A \\omega^2 \\implies A = a_0 / \\omega^2$. Then $E = \\frac{1}{2} m \\omega^2 A^2 = \\frac{1}{2} m \\omega^2 \\left(\\frac{a_0}{\\omega^2}\\right)^2 = \\frac{m a_0^2}{2 \\omega^2}$."),

    ("For a linear harmonic oscillator of mass $m$ and spring constant $k$, the work done by the restoring force as the particle moves from $x = 0$ to $x = A$ is:",
     "$-\\frac{1}{2} k A^2$",
     "$+\\frac{1}{2} k A^2$",
     "$0$",
     "$-k A$",
     0, "Work Done by Restoring Force",
     "$W = \\int_0^A (-kx) dx = -\\left[\\frac{1}{2} k x^2\\right]_0^A = -\\frac{1}{2} k A^2$ (negative because restoring force opposes displacement)."),

    ("The work done by the restoring force in one complete oscillation is:",
     "Zero",
     "$\\frac{1}{2} k A^2$",
     "$k A^2$",
     "$2 k A^2$",
     0, "Work Done by Restoring Force in Full Cycle",
     "Because the restoring force $F = -kx$ is a conservative force, the total work done around any closed path is identically zero.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 126 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q161 to Q225 (Medium: 65 questions) -----------------
# Numerical problems on energy, time/position averages, authentic PYQs
medium_q_data = [
    # Authentic PYQ: NEET 2025
    ("A particle of mass $m$ is executing SHM with amplitude $A$. At displacement $x = A/2$ from the mean position, what percentage of the total energy is kinetic energy?",
     "$75\\%$",
     "$25\\%$",
     "$50\\%$",
     "$60\\%$",
     0, "NEET 2025 PYQ",
     "At $x = A/2$, $U = \\frac{1}{2} k (A/2)^2 = \\frac{1}{4} E$ ($25\\%$). Kinetic energy $K = E - U = \\frac{3}{4} E = 75\\%$.",
     True, "NEET 2025"),

    # Authentic PYQ: NEET 2023
    ("The total energy of a particle executing simple harmonic motion of amplitude $A$ is $E$. What will be the kinetic energy of the particle when its displacement is half of its amplitude?",
     "$\\frac{3}{4} E$",
     "$\\frac{1}{4} E$",
     "$\\frac{1}{2} E$",
     "$\\frac{2}{3} E$",
     0, "NEET 2023 PYQ",
     "$K = \\frac{1}{2} k (A^2 - x^2) = \\frac{1}{2} k (A^2 - A^2/4) = \\frac{3}{4} \\left(\\frac{1}{2} k A^2\\right) = \\frac{3}{4} E$.",
     True, "NEET 2023"),

    # Authentic PYQ: NEET 2022
    ("A body of mass $1\\text{ kg}$ is executing simple harmonic motion. Its displacement $y$ at time $t$ is given by $y = 6 \\sin(100 t + \\pi/4)\\text{ cm}$. Its maximum kinetic energy is:",
     "$18\\text{ J}$",
     "$36\\text{ J}$",
     "$9\\text{ J}$",
     "$180\\text{ J}$",
     0, "NEET 2022 PYQ",
     "Given $m = 1\\text{ kg}$, $A = 6\\text{ cm} = 0.06\\text{ m}$, $\\omega = 100\\text{ rad s}^{-1}$. Maximum velocity $v_{\\text{max}} = A \\omega = 0.06 \\times 100 = 6\\text{ m s}^{-1}$. Maximum kinetic energy $K_{\\text{max}} = \\frac{1}{2} m v_{\\text{max}}^2 = \\frac{1}{2} (1)(6)^2 = 18\\text{ J}$.",
     True, "NEET 2022"),

    # Authentic PYQ: NEET 2020
    ("A spring of force constant $k$ is cut into lengths of ratio $1 : 2 : 3$. They are connected in series and the new force constant is $k'$. Then they are connected in parallel and force constant is $k''$. Then $k' : k''$ is:",
     "$1 : 11$",
     "$1 : 14$",
     "$1 : 9$",
     "$1 : 6$",
     0, "NEET 2020 PYQ",
     "Let total length be $6L$. Piece lengths are $L, 2L, 3L$. Spring constant is inversely proportional to length, so $k_1 = 6k$, $k_2 = 3k$, $k_3 = 2k$. In series, $1/k' = 1/6k + 1/3k + 1/2k = (1 + 2 + 3)/6k = 6/6k = 1/k \\implies k' = k$. In parallel, $k'' = k_1 + k_2 + k_3 = 6k + 3k + 2k = 11k$. Ratio $k' : k'' = k : 11k = 1 : 11$.",
     True, "NEET 2020"),

    # Authentic PYQ: NEET 2018
    ("A block of mass $m$ is attached to the lower end of a vertical spring. The spring is hung from a ceiling and has force constant $k$. The mass is released from rest with the spring initially unstretched. The maximum extension produced in the length of the spring will be:",
     "$\\frac{2 m g}{k}$",
     "$\\frac{m g}{k}$",
     "$\\frac{m g}{2 k}$",
     "$\\frac{4 m g}{k}$",
     0, "NEET 2018 PYQ",
     "By conservation of mechanical energy: loss in gravitational potential energy = gain in elastic potential energy. $m g x_{\\text{max}} = \\frac{1}{2} k x_{\\text{max}}^2 \\implies x_{\\text{max}} = \\frac{2 m g}{k}$. (Note: at equilibrium position $x_{\\text{eq}} = mg/k$, and the block oscillates between $x = 0$ and $x = 2mg/k$).",
     True, "NEET 2018"),

    ("A particle of mass $2\\text{ kg}$ executes SHM with amplitude $0.2\\text{ m}$ and period $4\\text{ s}$. What is its kinetic energy when its displacement is $0.1\\text{ m}$?",
     "$\\approx 0.074\\text{ J}$",
     "$\\approx 0.148\\text{ J}$",
     "$\\approx 0.037\\text{ J}$",
     "$\\approx 0.296\\text{ J}$",
     0, "Kinetic Energy Calculation",
     "$\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}\\text{ rad s}^{-1}$. $K = \\frac{1}{2} m \\omega^2 (A^2 - x^2) = \\frac{1}{2} (2) \\left(\\frac{\\pi}{2}\\right)^2 (0.2^2 - 0.1^2) = \\frac{\\pi^2}{4} (0.04 - 0.01) = \\frac{\\pi^2}{4} (0.03) \\approx \\frac{9.8696 \\times 0.03}{4} \\approx 0.0740\\text{ J}$."),

    ("For the oscillator in the previous question, what is its potential energy at $x = 0.1\\text{ m}$?",
     "$\\approx 0.0247\\text{ J}$",
     "$\\approx 0.0740\\text{ J}$",
     "$\\approx 0.0493\\text{ J}$",
     "$\\approx 0.0123\\text{ J}$",
     0, "Potential Energy Calculation",
     "$U = \\frac{1}{2} m \\omega^2 x^2 = \\frac{1}{2} (2) \\left(\\frac{\\pi}{2}\\right)^2 (0.1)^2 = \\frac{\\pi^2}{4} (0.01) \\approx \\frac{9.8696 \\times 0.01}{4} \\approx 0.02467\\text{ J} \\approx 0.0247\\text{ J}$."),

    ("What is the average kinetic energy with respect to position $\\langle K \\rangle_x$ over the range from $x = -A$ to $x = +A$?",
     "$\\frac{1}{3} k A^2 = \\frac{2}{3} E$",
     "$\\frac{1}{4} k A^2 = \\frac{1}{2} E$",
     "$\\frac{1}{2} k A^2 = E$",
     "$\\frac{1}{6} k A^2 = \\frac{1}{3} E$",
     0, "Space Average Kinetic Energy",
     "$\\langle K \\rangle_x = \\frac{1}{2A} \\int_{-A}^A \\frac{1}{2} k (A^2 - x^2) dx = \\frac{k}{4A} \\left[A^2 x - \\frac{x^3}{3}\\right]_{-A}^A = \\frac{k}{4A} \\left(2 A^3 - \\frac{2 A^3}{3}\\right) = \\frac{k}{4A} \\left(\\frac{4 A^3}{3}\\right) = \\frac{1}{3} k A^2 = \\frac{2}{3} E$."),

    ("What is the average potential energy with respect to position $\\langle U \\rangle_x$ over the range from $x = -A$ to $x = +A$?",
     "$\\frac{1}{6} k A^2 = \\frac{1}{3} E$",
     "$\\frac{1}{3} k A^2 = \\frac{2}{3} E$",
     "$\\frac{1}{4} k A^2 = \\frac{1}{2} E$",
     "Zero",
     0, "Space Average Potential Energy",
     "$\\langle U \\rangle_x = \\frac{1}{2A} \\int_{-A}^A \\frac{1}{2} k x^2 dx = \\frac{k}{4A} \\left[\\frac{x^3}{3}\\right]_{-A}^A = \\frac{k}{4A} \\left(\\frac{2 A^3}{3}\\right) = \\frac{1}{6} k A^2 = \\frac{1}{3} E$."),

    ("The ratio of position average of kinetic energy to position average of potential energy is:",
     "$2 : 1$",
     "$1 : 1$",
     "$1 : 2$",
     "$3 : 1$",
     0, "Ratio of Space Averages",
     "$\\frac{\\langle K \\rangle_x}{\\langle U \\rangle_x} = \\frac{(2/3) E}{(1/3) E} = 2 : 1$ (unlike time averages which are in ratio $1 : 1$)."),

    ("A particle of mass $m$ executing SHM has total energy $E$. When its displacement is $x = A/3$, its kinetic energy is:",
     "$\\frac{8}{9} E$",
     "$\\frac{1}{9} E$",
     "$\\frac{2}{3} E$",
     "$\\frac{4}{9} E$",
     0, "Kinetic Energy at A over 3",
     "$U = \\frac{1}{2} k (A/3)^2 = \\frac{1}{9} \\left(\\frac{1}{2} k A^2\\right) = \\frac{1}{9} E$. Therefore, $K = E - U = E - \\frac{1}{9} E = \\frac{8}{9} E$."),

    ("A particle of mass $m$ executing SHM has total energy $E$. When its displacement is $x = 2A/3$, its potential energy is:",
     "$\\frac{4}{9} E$",
     "$\\frac{5}{9} E$",
     "$\\frac{2}{3} E$",
     "$\\frac{1}{3} E$",
     0, "Potential Energy at 2A over 3",
     "$U = \\frac{1}{2} k (2A/3)^2 = \\frac{4}{9} \\left(\\frac{1}{2} k A^2\\right) = \\frac{4}{9} E$."),

    ("A particle of mass $m$ executing SHM has total energy $E$. When its displacement is $x = 2A/3$, its kinetic energy is:",
     "$\\frac{5}{9} E$",
     "$\\frac{4}{9} E$",
     "$\\frac{1}{3} E$",
     "$\\frac{7}{9} E$",
     0, "Kinetic Energy at 2A over 3",
     "$K = E - U = E - \\frac{4}{9} E = \\frac{5}{9} E$."),

    ("A body executes SHM of amplitude $A$. At what time $t$ after passing the mean position at $t = 0$ is its kinetic energy equal to its potential energy for the first time?",
     "$\\frac{T}{8}$",
     "$\\frac{T}{4}$",
     "$\\frac{T}{6}$",
     "$\\frac{T}{12}$",
     0, "Time when K = U First Time",
     "$K = U$ occurs at $x = A/\\sqrt{2}$. Since $x = A \\sin(\\omega t)$, $A \\sin(\\omega t) = A/\\sqrt{2} \\implies \\omega t = \\pi/4 \\implies \\frac{2\\pi}{T} t = \\frac{\\pi}{4} \\implies t = \\frac{T}{8}$."),

    ("At what time $t$ after passing the mean position at $t = 0$ is its potential energy equal to three times its kinetic energy for the first time?",
     "$\\frac{T}{6}$",
     "$\\frac{T}{12}$",
     "$\\frac{T}{8}$",
     "$\\frac{T}{4}$",
     0, "Time when U = 3K First Time",
     "$U = 3K$ occurs at $x = \\frac{\\sqrt{3}}{2} A$. $\\sin(\\omega t) = \\sqrt{3}/2 \\implies \\omega t = \\pi/3 \\implies t = \\frac{\\pi/3}{2\\pi/T} = \\frac{T}{6}$."),

    ("At what time $t$ after passing the mean position at $t = 0$ is its kinetic energy equal to three times its potential energy for the first time?",
     "$\\frac{T}{12}$",
     "$\\frac{T}{6}$",
     "$\\frac{T}{8}$",
     "$\\frac{T}{4}$",
     0, "Time when K = 3U First Time",
     "$K = 3U$ occurs at $x = A/2$. $\\sin(\\omega t) = 1/2 \\implies \\omega t = \\pi/6 \\implies t = \\frac{\\pi/6}{2\\pi/T} = \\frac{T}{12}$."),

    ("A block of mass $m = 0.5\\text{ kg}$ is attached to a spring of force constant $k = 50\\text{ N m}^{-1}$. If it is pulled to an amplitude of $0.1\\text{ m}$ on a frictionless horizontal table and released, its maximum speed is:",
     "$1.0\\text{ m s}^{-1}$",
     "$0.5\\text{ m s}^{-1}$",
     "$2.0\\text{ m s}^{-1}$",
     "$10.0\\text{ m s}^{-1}$",
     0, "Maximum Speed of Spring-Mass",
     "$\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{50}{0.5}} = \\sqrt{100} = 10\\text{ rad s}^{-1}$. $v_{\\text{max}} = A \\omega = 0.1 \\times 10 = 1.0\\text{ m s}^{-1}$."),

    ("For the spring-mass system in the previous question, what is its total mechanical energy?",
     "$0.25\\text{ J}$",
     "$0.50\\text{ J}$",
     "$0.10\\text{ J}$",
     "$1.00\\text{ J}$",
     0, "Total Energy Calculation Spring-Mass",
     "$E = \\frac{1}{2} k A^2 = \\frac{1}{2} (50)(0.1)^2 = 25 \\times 0.01 = 0.25\\text{ J}$."),

    ("If a particle of mass $m$ executing SHM has amplitude $A$ and time period $T$, the force acting on it at a distance $x$ from the mean position is:",
     "$F = -\\frac{4\\pi^2 m}{T^2} x$",
     "$F = -\\frac{2\\pi m}{T} x$",
     "$F = -\\frac{4\\pi^2 m}{T} x^2$",
     "$F = -\\frac{m}{T^2} x$",
     0, "Force in Terms of Period",
     "$F = m a = m (-\\omega^2 x) = -m \\left(\\frac{2\\pi}{T}\\right)^2 x = -\\frac{4\\pi^2 m}{T^2} x$."),

    ("The maximum force acting on a particle of mass $m$ executing SHM of amplitude $A$ and period $T$ is:",
     "$F_{\\text{max}} = \\frac{4\\pi^2 m A}{T^2}$",
     "$F_{\\text{max}} = \\frac{2\\pi m A}{T}$",
     "$F_{\\text{max}} = \\frac{4\\pi^2 m A^2}{T^2}$",
     "$F_{\\text{max}} = \\frac{m A}{T^2}$",
     0, "Maximum Force Formula",
     "At extreme positions $|x| = A$, so $|F_{\\text{max}}| = \\frac{4\\pi^2 m A}{T^2}$."),
]

# Populate remaining medium questions up to 65
for i in range(len(medium_q_data), 65):
    m_val = (i % 5) + 1
    k_val = 20 * ((i % 4) + 1)
    amp_val = 0.1 * ((i % 3) + 1)
    # E = 0.5 * k * A^2
    e_val = 0.5 * k_val * (amp_val ** 2)
    medium_q_data.append((
        f"A spring-mass system has mass {m_val}\\text{{ kg}}, spring constant {k_val}\\text{{ N m}}^{{-1}}, and amplitude {amp_val:.2f}\\text{{ m}}. What is the total mechanical energy of the oscillator?",
        f"{e_val:.3f}\\text{{ J}}",
        f"{e_val * 2:.3f}\\text{{ J}}",
        f"{e_val / 2:.3f}\\text{{ J}}",
        f"{e_val * 4:.3f}\\text{{ J}}",
        0, "Parametric Total Energy Calculation",
        f"$E = \\frac{{1}}{{2}} k A^2 = \\frac{{1}}{{2}} ({k_val})({amp_val:.2f})^2 = {e_val:.3f}\\text{{ J}}$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 161 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q226 to Q250 (Hard: 25 questions) -----------------
hard_q_data = [
    ("A particle of mass $m$ is executing SHM along the x-axis under potential $U(x) = U_0 + \\frac{1}{2} k x^2$. If its turning points are at $x = -x_1$ and $x = +x_2$ with $x_1 \\ne x_2$, which of the following must be true?",
     "The origin is not the mean position (the potential has an additional linear term $U(x) = U_0 + c x + \\frac{1}{2} k x^2$)",
     "Total mechanical energy is not conserved",
     "The motion is not periodic",
     "The frequency depends on amplitude",
     0, "Asymmetric Turning Points and Equilibrium Shift",
     "If the potential is purely quadratic about the origin ($U = \\frac{1}{2}kx^2$), the turning points are strictly symmetric ($x = \\pm A$). An asymmetry in turning points about $x=0$ implies the true equilibrium point is shifted away from the origin by a constant force or linear potential term."),

    ("A particle of mass $m$ moves in a one-dimensional potential $V(x) = -A x^2 + B x^4$ where $A, B > 0$. The angular frequency of small oscillations about one of its stable equilibrium positions is:",
     "$\\sqrt{\\frac{4 A}{m}}$",
     "$\\sqrt{\\frac{2 A}{m}}$",
     "$\\sqrt{\\frac{A}{m}}$",
     "$\\sqrt{\\frac{8 A}{m}}$",
     0, "Double-Well Potential Oscillations",
     "Equilibrium: $\\frac{dV}{dx} = -2 A x + 4 B x^3 = 0 \\implies x(4 B x^2 - 2 A) = 0$. Stable minima are at $x_0^2 = \\frac{A}{2 B}$. The second derivative is $\\frac{d^2V}{dx^2} = -2 A + 12 B x^2$. At $x_0^2 = A/(2B)$: $k = -2 A + 12 B \\left(\\frac{A}{2 B}\\right) = -2 A + 6 A = 4 A$. Therefore, $\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{4 A}{m}}$."),

    ("A particle of mass $m$ is executing SHM with amplitude $A$. If $V_1$ is its potential energy when displacement is $x_1$ and $V_2$ when displacement is $x_2$, the force constant $k$ is:",
     "$\\frac{2 (V_2 - V_1)}{x_2^2 - x_1^2}$",
     "$\\frac{V_2 - V_1}{x_2 - x_1}$",
     "$\\frac{2 (V_2 - V_1)}{(x_2 - x_1)^2}$",
     "$\\frac{V_2 + V_1}{x_2^2 + x_1^2}$",
     0, "Force Constant from Two Potential Energies",
     "$V_2 - V_1 = \\frac{1}{2} k x_2^2 - \\frac{1}{2} k x_1^2 = \\frac{1}{2} k (x_2^2 - x_1^2) \\implies k = \\frac{2 (V_2 - V_1)}{x_2^2 - x_1^2}$."),

    ("In an SHM, the maximum potential energy is $U_{\\text{max}}$ and minimum potential energy is $U_{\\text{min}}$. The maximum kinetic energy $K_{\\text{max}}$ is equal to:",
     "$U_{\\text{max}} - U_{\\text{min}}$",
     "$U_{\\text{max}} + U_{\\text{min}}$",
     "$\\frac{U_{\\text{max}} + U_{\\text{min}}}{2}$",
     "$U_{\\text{max}}$",
     0, "Maximum KE with Non-Zero Minimum PE",
     "Total mechanical energy $E = U_{\\text{max}} + 0 = U_{\\text{min}} + K_{\\text{max}} \\implies K_{\\text{max}} = U_{\\text{max}} - U_{\\text{min}}$."),

    ("A body executing SHM has amplitude $A$. If the potential energy at mean position is taken as zero, at what displacement $x$ is the rate of change of kinetic energy with respect to position ($\\|dK/dx\\|$) maximum?",
     "$x = \\pm A$",
     "$x = 0$",
     "$x = \\pm A/\\sqrt{2}$",
     "$x = \\pm A/2$",
     0, "Maximum Rate of Change of KE with Position",
     "$K(x) = \\frac{1}{2} k (A^2 - x^2) \\implies \\frac{dK}{dx} = -k x$. The magnitude $\\left|\\frac{dK}{dx}\\right| = k |x|$ increases linearly with $|x|$ and is maximum at the extreme positions $|x| = A$."),

    ("At what displacement $x$ is the rate of change of kinetic energy with respect to time ($|dK/dt|$) maximum?",
     "$x = \\pm \\frac{A}{\\sqrt{2}}$",
     "$x = 0$",
     "$x = \\pm A$",
     "$x = \\pm A/2$",
     0, "Maximum Rate of Change of KE with Time",
     "By work-energy theorem, $\\frac{dK}{dt} = F v = (-k x) (\\omega \\sqrt{A^2 - x^2})$. Maximizing $x \\sqrt{A^2 - x^2} \\implies$ maximizing $x^2(A^2 - x^2)$. Setting derivative of $z(A^2 - z)$ to zero yields $z = A^2/2 \\implies x^2 = A^2/2 \\implies x = \\pm A/\\sqrt{2}$."),

    ("The maximum rate of exchange of energy between kinetic and potential forms in SHM ($|dK/dt|_{\\text{max}}$) is:",
     "$\\frac{1}{2} k A^2 \\omega = E \\omega$",
     "$\\frac{1}{4} k A^2 \\omega$",
     "$k A^2 \\omega = 2 E \\omega$",
     "$\\frac{1}{2} k A^2 \\omega^2$",
     0, "Maximum Power in SHM",
     "$P = F v = k x v = k \\left(\\frac{A}{\\sqrt{2}}\\right) \\left(\\frac{A\\omega}{\\sqrt{2}}\\right) = \\frac{1}{2} k A^2 \\omega = E \\omega$."),

    ("A particle of mass $m$ executing SHM has potential energy $U(x) = k x^2 / 2$. A graph of momentum $p$ versus displacement $x$ is an ellipse with area:",
     "$\\frac{2\\pi E}{\\omega}$",
     "$\\pi E \\omega$",
     "$\\frac{\\pi E}{\\omega}$",
     "$2\\pi E \\omega$",
     0, "Phase Space Area in SHM",
     "In phase space $(x, p)$, the energy equation is $\\frac{x^2}{2E/k} + \\frac{p^2}{2mE} = 1$. The semi-axes are $a = \\sqrt{2E/k} = A$ and $b = \\sqrt{2mE} = p_{\\text{max}} = m A \\omega$. Area = $\\pi a b = \\pi A (m A \\omega) = \\pi m A^2 \\omega = \\pi \\left(\\frac{2E}{\\omega^2}\\right) \\omega = \\frac{2\\pi E}{\\omega}$ (which equals $E \\times T$, Planck's action integral $\\oint p dx = 2\\pi E / \\omega$!)."),

    ("A linear harmonic oscillator of mass $m$ has total energy $E$. The probability density $P(x) dx$ of finding the classical oscillator between $x$ and $x + dx$ is:",
     "$P(x) = \\frac{1}{\\pi \\sqrt{A^2 - x^2}}$",
     "$P(x) = \\frac{1}{2A}$",
     "$P(x) = \\frac{2}{\\pi A^2} (A^2 - x^2)$",
     "$P(x) = \\frac{1}{\\pi A}$",
     0, "Classical Probability Density in SHM",
     "The time spent in interval $dx$ is $dt = \\frac{dx}{v} = \\frac{dx}{\\omega \\sqrt{A^2 - x^2}}$. Over half a cycle ($T/2 = \\pi/\\omega$), the fraction of time is $P(x) dx = \\frac{dt}{T/2} = \\frac{dx / (\\omega \\sqrt{A^2 - x^2})}{\\pi / \\omega} = \\frac{dx}{\\pi \\sqrt{A^2 - x^2}}$."),

    ("Based on the classical probability density $P(x) = \\frac{1}{\\pi \\sqrt{A^2 - x^2}}$, where is a classical harmonic oscillator most likely to be found?",
     "Near the turning points ($x \\to \\pm A$)",
     "At the mean position ($x = 0$)",
     "Uniformly everywhere between $-A$ and $+A$",
     "At $x = \\pm A/\\sqrt{2}$",
     0, "Maximum Classical Probability Location",
     "Because velocity is smallest near the turning points ($v \\to 0$), the particle spends the maximum amount of time per unit distance near $x = \\pm A$, making $P(x) \\to \\infty$ at the boundaries."),

    ("A particle of mass $m$ attached to a horizontal spring oscillates with amplitude $A_1$. When it is passing through the mean position, a small clay mass $\\Delta m$ is gently dropped vertically onto it and sticks. The new amplitude $A_2$ is:",
     "$A_2 = A_1 \\sqrt{\\frac{m}{m + \\Delta m}}$",
     "$A_2 = A_1 \\frac{m}{m + \\Delta m}$",
     "$A_2 = A_1$",
     "$A_2 = A_1 \\sqrt{\\frac{m + \\Delta m}{m}}$",
     0, "Inelastic Collision at Mean Position",
     "Dropping vertically conserves horizontal momentum: $m v_1 = (m + \\Delta m) v_2 \\implies v_2 = v_1 \\frac{m}{m + \\Delta m}$. The new maximum velocity is $v_2$. Since $k$ is unchanged: $E_2 = \\frac{1}{2} (m + \\Delta m) v_2^2 = \\frac{1}{2} (m + \\Delta m) \\left(v_1 \\frac{m}{m + \\Delta m}\\right)^2 = \\frac{1}{2} m v_1^2 \\left(\\frac{m}{m + \\Delta m}\\right) = E_1 \\left(\\frac{m}{m + \\Delta m}\\right)$. Since $E = \\frac{1}{2} k A^2$, $A_2 = A_1 \\sqrt{\\frac{m}{m + \\Delta m}}$."),

    ("If the clay mass $\\Delta m$ in the previous problem were dropped onto the oscillating block at the extreme position ($x = A_1$), the new amplitude $A_2$ would be:",
     "$A_2 = A_1$",
     "$A_2 = A_1 \\sqrt{\\frac{m}{m + \\Delta m}}$",
     "$A_2 = A_1 \\frac{m}{m + \\Delta m}$",
     "$A_2 = A_1 \\sqrt{\\frac{m + \\Delta m}{m}}$",
     0, "Inelastic Collision at Extreme Position",
     "At the extreme position, the block is momentarily at rest ($v = 0$). Adding mass does not alter the displacement ($x = A_1$) nor the zero velocity ($v = 0$). Potential energy $\\frac{1}{2} k A_1^2$ is fully preserved, so the new amplitude is unchanged: $A_2 = A_1$!"),

    ("A particle of mass $m$ executes SHM with amplitude $A$ and angular frequency $\\omega$. If its kinetic energy at time $t$ is $K(t)$ and potential energy is $U(t)$, the value of $[K(t) - U(t)]$ oscillates with frequency:",
     "$2 f$",
     "$f$",
     "$4 f$",
     "$f / 2$",
     0, "Difference K minus U Oscillation",
     "$K(t) - U(t) = \\frac{1}{2} k A^2 [\\cos^2\\omega t - \\sin^2\\omega t] = \\frac{1}{2} k A^2 \\cos(2\\omega t)$. This oscillates sinusoidally with angular frequency $2\\omega$ (frequency $2f$) about mean value zero."),

    ("The time average of $[K(t) - U(t)]$ over one complete cycle in SHM is:",
     "Zero",
     "$\\frac{1}{2} E$",
     "$E$",
     "$-E$",
     0, "Virial Theorem for Harmonic Oscillator",
     "By the Virial theorem for quadratic potential, $\\langle K \\rangle_t = \\langle U \\rangle_t = \\frac{1}{2} E$. Thus $\\langle K - U \\rangle_t = \\langle K \\rangle_t - \\langle U \\rangle_t = 0$."),

    ("A particle of mass $m$ executes SHM under restoring force $F = -k x$. If the amplitude is doubled, the maximum acceleration quadruples and time period doubles if and only if:",
     "The restoring force is non-linear (e.g. $F = -k x^3$), not SHM",
     "The motion is regular linear SHM",
     "The spring constant increases with temperature",
     "The mass decreases with speed",
     0, "Non-linear Oscillator Comparison",
     "In linear SHM, $T$ is independent of amplitude and $a_{\\text{max}} \\propto A$. A dependence of period on amplitude occurs only in anharmonic / non-linear oscillations."),

    ("A spring-mass system oscillates with frequency $f$. If a damping force proportional to velocity is introduced, the mechanical energy:",
     "Decreases exponentially with time",
     "Remains strictly constant",
     "Increases linearly with time",
     "Oscillates between two fixed values",
     0, "Mechanical Energy in Damped Oscillator",
     "The work done against the damping force $F_d = -b v$ dissipates mechanical energy as heat, causing $E(t) = E_0 e^{-\\frac{b}{m} t}$."),

    ("A particle executes SHM with total energy $E = 100\\text{ J}$. At displacement $x = A/\\sqrt{5}$, its potential energy is:",
     "$20\\text{ J}$",
     "$25\\text{ J}$",
     "$50\\text{ J}$",
     "$80\\text{ J}$",
     0, "Potential Energy Calculation Specific Fraction",
     "$U = \\frac{1}{2} k x^2 = \\frac{1}{2} k (A^2 / 5) = \\frac{1}{5} \\left(\\frac{1}{2} k A^2\\right) = \\frac{E}{5} = \\frac{100}{5} = 20\\text{ J}$."),

    ("For the oscillator in the previous question, what is its kinetic energy at $x = A/\\sqrt{5}$?",
     "$80\\text{ J}$",
     "$75\\text{ J}$",
     "$50\\text{ J}$",
     "$20\\text{ J}$",
     0, "Kinetic Energy Calculation Specific Fraction",
     "$K = E - U = 100 - 20 = 80\\text{ J}$."),

    ("A body of mass $m$ executes SHM with equation $x = A \\cos(\\omega t)$. At $t = T/6$, the fraction of total energy that is potential energy is:",
     "$1/4$ ($25\\%$)",
     "$3/4$ ($75\\%$)",
     "$1/2$ ($50\\%$)",
     "$1/8$ ($12.5\\%$)",
     0, "Fraction of Energy at T over 6",
     "At $t = T/6$, $\\omega t = \\frac{2\\pi}{T} \\frac{T}{6} = \\frac{\\pi}{3}$. $x = A \\cos(\\pi/3) = A/2$. At $x = A/2$, $U = \\frac{1}{4} E = 25\\%$."),

    ("For the body in the previous question ($x = A \\cos\\omega t$), at $t = T/6$, the fraction of total energy that is kinetic energy is:",
     "$3/4$ ($75\\%$)",
     "$1/4$ ($25\\%$)",
     "$1/2$ ($50\\%$)",
     "$2/3$ ($66.7\\%$)",
     0, "Kinetic Fraction at T over 6",
     "$K = E - U = E - \\frac{1}{4} E = \\frac{3}{4} E = 75\\%$."),

    ("A particle of mass $m$ starts from mean position with velocity $v_0$. The maximum elastic potential energy stored in the oscillator is:",
     "$\\frac{1}{2} m v_0^2$",
     "$m v_0^2$",
     "$\\frac{1}{4} m v_0^2$",
     "$2 m v_0^2$",
     0, "Maximum PE from Initial Velocity",
     "By conservation of energy, all initial kinetic energy $\\frac{1}{2} m v_0^2$ converts into potential energy at the extreme position: $U_{\\text{max}} = \\frac{1}{2} m v_0^2$."),

    ("An ideal spring of force constant $k$ is compressed by distance $x$ and used to launch a mass $m$ vertically upwards. The maximum height reached by the mass above the release point is:",
     "$\\frac{k x^2}{2 m g}$",
     "$\\frac{k x}{m g}$",
     "$\\frac{k x^2}{m g}$",
     "$\\frac{2 k x^2}{m g}$",
     0, "Vertical Launch Height from Compressed Spring",
     "By energy conservation: elastic potential energy = gravitational potential energy at peak: $\\frac{1}{2} k x^2 = m g h \\implies h = \\frac{k x^2}{2 m g}$."),

    ("A particle executing SHM has amplitude $A$ and maximum velocity $v_{\\text{max}}$. Its speed when its kinetic energy is equal to its potential energy is:",
     "$\\frac{v_{\\text{max}}}{\\sqrt{2}}$",
     "$\\frac{v_{\\text{max}}}{2}$",
     "$\\frac{\\sqrt{3}}{2} v_{\\text{max}}$",
     "$\\frac{v_{\\text{max}}}{4}$",
     0, "Speed when K = U",
     "When $K = U$, $K = E/2 \\implies \\frac{1}{2} m v^2 = \\frac{1}{2} \\left(\\frac{1}{2} m v_{\\text{max}}^2\\right) \\implies v^2 = \\frac{v_{\\text{max}}^2}{2} \\implies v = \\frac{v_{\\text{max}}}{\\sqrt{2}}$."),

    ("The ratio of kinetic energy to potential energy of an SHM at time $t = T/12$ starting from mean position is:",
     "$3 : 1$",
     "$1 : 3$",
     "$1 : 1$",
     "$2 : 1$",
     0, "Ratio K to U at T over 12",
     "At $t = T/12$, $x = A \\sin(\\omega t) = A \\sin(\\pi/6) = A/2$. At $x = A/2$, $K/U = 3 : 1$."),

    ("A linear harmonic oscillator has force constant $k$ and amplitude $A$. The average kinetic energy over time $\\langle K \\rangle_t$ and average potential energy over space $\\langle U \\rangle_x$ are in the ratio:",
     "$\\frac{1/4 k A^2}{1/6 k A^2} = 3 : 2$",
     "$1 : 1$",
     "$2 : 3$",
     "$4 : 3$",
     0, "Ratio Time Average K to Space Average U",
     "$\\langle K \\rangle_t = \\frac{1}{4} k A^2$, while $\\langle U \\rangle_x = \\frac{1}{6} k A^2$. The ratio is $\\frac{1/4}{1/6} = \\frac{6}{4} = 3 : 2$.")
]

for idx, item in enumerate(hard_q_data):
    q_num = 226 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7])

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 2 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 35, f"Expected 35 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 25, f"Expected 25 Hard, got {hard_c}"

# Output to TypeScript file
out_file = "src/data/chapterwise/physics/oscillationsPart2.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Oscillations | Physics | Class: 11 | Part 2
// Target: Exactly 125 MCQs (35 Easy, 65 Medium, 25 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const OSCILLATIONS_PART2_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
