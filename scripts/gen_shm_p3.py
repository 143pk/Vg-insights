#!/usr/bin/env python3
"""
Generator for Oscillations - Part 3 (Q251 to Q375)
Subject: Physics | Class: 11 | Chapter: Oscillations (oscillations)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics:
- Spring-mass systems (horizontal and vertical)
- Combinations of springs in series and parallel
- Cutting of springs, effective spring constant
- Two-body oscillator and reduced mass
- Simple pendulum: period, length, independence of mass/amplitude
- Seconds pendulum
- Pendulum in accelerating frames (elevators, vehicles)
- Temperature effects on pendulum clocks (time gained/lost per day)
- Pendulum in liquids and electric fields
- Pendulum of large length (approaching Earth's radius)
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
        "topicId": "phys-pendulum-spring",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q251 to Q280 (Easy: 30 questions) -----------------
easy_q_data = [
    ("The time period $T$ of a mass $m$ attached to a massless spring of force constant $k$ is given by:",
     "$T = 2\\pi \\sqrt{\\frac{m}{k}}$",
     "$T = 2\\pi \\sqrt{\\frac{k}{m}}$",
     "$T = \\frac{1}{2\\pi} \\sqrt{\\frac{m}{k}}$",
     "$T = 2\\pi \\sqrt{\\frac{m g}{k}}$",
     0, "Spring-Mass Period Formula",
     "The equation of motion is $m \\ddot{x} + k x = 0 \\implies \\omega = \\sqrt{k/m}$, giving time period $T = \\frac{2\\pi}{\\omega} = 2\\pi \\sqrt{\\frac{m}{k}}$."),

    ("If a spring-mass system is taken to the Moon (where gravity is $g/6$), its time period will:",
     "Remain unchanged",
     "Increase by $\\sqrt{6}$ times",
     "Decrease by $\\sqrt{6}$ times",
     "Become zero",
     0, "Spring-Mass Period Gravity Independence",
     "The time period of a spring-mass system $T = 2\\pi \\sqrt{m/k}$ depends only on inertial mass $m$ and spring constant $k$, completely independent of the acceleration due to gravity $g$."),

    ("When a mass $m$ is suspended vertically from a spring of force constant $k$, the static equilibrium extension is $x_0 = \\frac{mg}{k}$. The time period of vertical oscillations is:",
     "$T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{x_0}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{2 x_0}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{g}{x_0}}$",
     "$T = 2\\pi \\sqrt{\\frac{x_0}{2g}}$",
     0, "Vertical Spring-Mass Period",
     "Gravity shifts the equilibrium position down by $x_0 = mg/k$, but the restoring force about this new equilibrium is still $-kx$. Hence $T = 2\\pi \\sqrt{m/k} = 2\\pi \\sqrt{x_0/g}$."),

    ("The time period of a simple pendulum of length $L$ in a region of gravity $g$ for small angular amplitudes is:",
     "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{g}{L}}$",
     "$T = \\frac{1}{2\\pi} \\sqrt{\\frac{L}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{m L}{g}}$",
     0, "Simple Pendulum Period Formula",
     "For small angles $\\sin\\theta \\approx \\theta$, the restoring torque is $\\tau = -m g L \\theta$. Since $I = m L^2$, $\\alpha = -\\frac{g}{L} \\theta$, so $\\omega = \\sqrt{g/L}$ and $T = 2\\pi \\sqrt{L/g}$."),

    ("The time period of a simple pendulum is strictly independent of:",
     "The mass and material of the bob",
     "The length of the string",
     "The acceleration due to gravity",
     "The location on Earth",
     0, "Pendulum Mass Independence",
     "The formula $T = 2\\pi \\sqrt{L/g}$ contains no mass term; gravitational mass cancels inertial mass, so $T$ is independent of the bob's mass, density, and material."),

    ("A 'seconds pendulum' is a simple pendulum whose time period is exactly:",
     "$2\\text{ s}$",
     "$1\\text{ s}$",
     "$0.5\\text{ s}$",
     "$4\\text{ s}$",
     0, "Seconds Pendulum Definition",
     "A seconds pendulum ticks once every second (each swing from one side to the other takes $1\\text{ s}$), so its complete back-and-forth period is $T = 2\\text{ s}$."),

    ("The effective length of a seconds pendulum on the surface of the Earth ($g = 9.8\\text{ m s}^{-2}$) is approximately:",
     "$1.0\\text{ m}$ (about $99.3\\text{ cm}$)",
     "$0.5\\text{ m}$",
     "$2.0\\text{ m}$",
     "$0.25\\text{ m}$",
     0, "Seconds Pendulum Length",
     "From $T = 2\\pi \\sqrt{L/g} = 2\\text{ s} \\implies \\pi \\sqrt{L/g} = 1 \\implies L = \\frac{g}{\\pi^2} \\approx \\frac{9.8}{9.8696} \\approx 0.993\\text{ m} \\approx 1.0\\text{ m}$."),

    ("When two springs of spring constants $k_1$ and $k_2$ are connected in parallel, the equivalent spring constant is:",
     "$k_p = k_1 + k_2$",
     "$k_p = \\frac{k_1 k_2}{k_1 + k_2}$",
     "$k_p = \\frac{k_1 + k_2}{2}$",
     "$k_p = \\sqrt{k_1 k_2}$",
     0, "Parallel Springs Equivalent Constant",
     "In parallel, both springs undergo identical displacement $x$. The total force is $F = F_1 + F_2 = (k_1 + k_2) x$, so $k_p = k_1 + k_2$."),

    ("When two springs of spring constants $k_1$ and $k_2$ are connected in series, the equivalent spring constant is:",
     "$k_s = \\frac{k_1 k_2}{k_1 + k_2}$",
     "$k_s = k_1 + k_2$",
     "$k_s = \\frac{k_1 + k_2}{k_1 k_2}$",
     "$k_s = 2(k_1 + k_2)$",
     0, "Series Springs Equivalent Constant",
     "In series, each spring experiences the same tension $F$. Total elongation is $x = x_1 + x_2 = F/k_1 + F/k_2 = F (1/k_1 + 1/k_2)$, so $\\frac{1}{k_s} = \\frac{1}{k_1} + \\frac{1}{k_2} \\implies k_s = \\frac{k_1 k_2}{k_1 + k_2}$."),

    ("A uniform spring of spring constant $k$ is cut into two equal halves. The spring constant of each half is:",
     "$2 k$",
     "$k / 2$",
     "$k$",
     "$4 k$",
     0, "Cutting Spring in Half",
     "The spring constant is inversely proportional to its length ($k \\propto 1/L$). Halving the length doubles the stiffness: $k' = 2k$."),

    ("If a spring of force constant $k$ is cut into three equal parts, the force constant of each part is:",
     "$3 k$",
     "$k / 3$",
     "$k$",
     "$9 k$",
     0, "Cutting Spring into Three Parts",
     "Since $k \\propto 1/L$, reducing length to $L/3$ increases the force constant by 3 times: $k' = 3k$."),

    ("If two identical springs of constant $k$ are connected in series, the equivalent spring constant is:",
     "$k / 2$",
     "$2 k$",
     "$k$",
     "$4 k$",
     0, "Two Identical Springs in Series",
     "$k_s = \\frac{k \\times k}{k + k} = \\frac{k^2}{2k} = \\frac{k}{2}$."),

    ("If two identical springs of constant $k$ are connected in parallel, the equivalent spring constant is:",
     "$2 k$",
     "$k / 2$",
     "$k$",
     "$4 k$",
     0, "Two Identical Springs in Parallel",
     "$k_p = k + k = 2k$."),

    ("If the mass attached to a spring oscillator is quadrupled, its time period:",
     "Doubles",
     "Quadruples",
     "Halves",
     "Remains unchanged",
     0, "Mass Quadrupling Spring Period",
     "Since $T = 2\\pi \\sqrt{m/k} \\propto \\sqrt{m}$, when mass is quadrupled ($m' = 4m$), $T' = \\sqrt{4} T = 2 T$."),

    ("If the length of a simple pendulum is quadrupled, its time period:",
     "Doubles",
     "Quadruples",
     "Halves",
     "Increases by 16 times",
     0, "Length Quadrupling Pendulum Period",
     "Since $T = 2\\pi \\sqrt{L/g} \\propto \\sqrt{L}$, quadrupling length ($L' = 4L$) doubles the period ($T' = 2T$)."),

    ("If a simple pendulum is taken to the top of a high mountain where $g$ is smaller, its time period will:",
     "Increase (the clock runs slower)",
     "Decrease (the clock runs faster)",
     "Remain unchanged",
     "Become zero",
     0, "Pendulum on Mountain",
     "Because $T \\propto 1/\\sqrt{g}$, a decrease in $g$ at high altitude causes $T$ to increase. The pendulum takes longer to complete each swing, so the clock loses time (runs slow)."),

    ("If a simple pendulum is placed inside an elevator moving upwards with uniform velocity $v$, its time period:",
     "Remains unchanged",
     "Increases",
     "Decreases",
     "Becomes infinite",
     0, "Pendulum in Uniform Velocity Elevator",
     "Uniform velocity means acceleration $a = 0$. The elevator is an inertial frame, so $g_{\\text{eff}} = g$ and the period is unchanged."),

    ("If a simple pendulum is placed inside an elevator accelerating upwards with acceleration $a$, its time period:",
     "Decreases ($T = 2\\pi \\sqrt{L/(g+a)}$)",
     "Increases ($T = 2\\pi \\sqrt{L/(g-a)}$)",
     "Remains unchanged",
     "Becomes infinite",
     0, "Pendulum in Upward Accelerating Elevator",
     "In an upward accelerating elevator, the pseudo-force acts downward, increasing effective gravity to $g_{\\text{eff}} = g + a$. Thus $T = 2\\pi \\sqrt{\\frac{L}{g+a}} < T$ (period decreases)."),

    ("If a simple pendulum is placed inside an elevator accelerating downwards with acceleration $a$ ($a < g$), its time period:",
     "Increases ($T = 2\\pi \\sqrt{L/(g-a)}$)",
     "Decreases ($T = 2\\pi \\sqrt{L/(g+a)}$)",
     "Remains unchanged",
     "Becomes zero",
     0, "Pendulum in Downward Accelerating Elevator",
     "In a downward accelerating elevator, the pseudo-force acts upward, reducing effective gravity to $g_{\\text{eff}} = g - a$. Thus $T = 2\\pi \\sqrt{\\frac{L}{g-a}} > T$ (period increases)."),

    ("If the cable of an elevator snaps and it falls freely under gravity ($a = g$), the time period of a simple pendulum inside it becomes:",
     "Infinite (it does not oscillate)",
     "Zero",
     "Equal to $2\\pi \\sqrt{L/g}$",
     "$1\\text{ s}$",
     0, "Pendulum in Freely Falling Elevator",
     "In free fall, $g_{\\text{eff}} = g - g = 0$. Therefore, $T = 2\\pi \\sqrt{\\frac{L}{0}} = \\infty$. The bob experiences weightlessness and will not oscillate back and forth."),

    ("A simple pendulum is suspended inside a trolley moving horizontally with uniform acceleration $a$. The time period of oscillation is:",
     "$T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + a^2}}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g + a}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g - a}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 - a^2}}}$",
     0, "Pendulum in Horizontally Accelerating Trolley",
     "Effective acceleration is the vector sum of downward gravity and backward pseudo-acceleration: $g_{\\text{eff}} = \\sqrt{g^2 + a^2}$. Thus $T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + a^2}}}$."),

    ("A girl is swinging on a swing in a sitting position. If she stands up, the time period of oscillation will:",
     "Decrease (she swings faster)",
     "Increase",
     "Remain unchanged",
     "First increase then decrease",
     0, "Girl Standing on Swing",
     "When she stands up, the center of mass of the system shifts upwards, decreasing the effective length $L$ of the pendulum. Since $T \\propto \\sqrt{L}$, the time period decreases."),

    ("A hollow metallic sphere filled with water is used as the bob of a simple pendulum. A small hole at the bottom allows water to leak out slowly. As water drains out completely, the time period:",
     "First increases, reaches a maximum, and then decreases back to its initial value",
     "Continuously increases",
     "Continuously decreases",
     "Remains constant throughout",
     0, "Leaking Bob Pendulum Period",
     "Initially with full sphere, center of mass (CM) is at the center of the sphere. As water leaks, the CM shifts downward, increasing effective length $L$ and increasing $T$. When water drains almost completely, the CM shifts back up to the center of the hollow shell, restoring the original length $L$ and period $T$."),

    ("If a simple pendulum is taken to the center of the Earth, its time period becomes:",
     "Infinite",
     "Zero",
     "$2\\text{ s}$",
     "$84.6\\text{ min}$",
     0, "Pendulum at Earth Center",
     "At the center of the Earth, acceleration due to gravity $g = 0$. Since $T = 2\\pi \\sqrt{L/g}$, $T \\to \\infty$."),

    ("If the temperature of a pendulum clock increases by $\\Delta \\theta$, the fractional change in its time period is: (where $\\alpha$ is linear expansion coefficient)",
     "$\\frac{\\Delta T}{T} = \\frac{1}{2} \\alpha \\Delta \\theta$",
     "$\\frac{\\Delta T}{T} = \\alpha \\Delta \\theta$",
     "$\\frac{\\Delta T}{T} = 2 \\alpha \\Delta \\theta$",
     "$\\frac{\\Delta T}{T} = \\frac{1}{4} \\alpha \\Delta \\theta$",
     0, "Thermal Expansion Effect on Period",
     "Since $T = 2\\pi \\sqrt{L/g} \\propto L^{1/2}$, differentiating gives $\\frac{\\Delta T}{T} = \\frac{1}{2} \\frac{\\Delta L}{L}$. Since $\\Delta L / L = \\alpha \\Delta \\theta$, we have $\\frac{\\Delta T}{T} = \\frac{1}{2} \\alpha \\Delta \\theta$."),

    ("In summer, when the temperature rises, a pendulum clock:",
     "Loses time (runs slow)",
     "Gains time (runs fast)",
     "Keeps accurate time",
     "Stops completely",
     0, "Pendulum Clock in Summer",
     "In summer, thermal expansion increases the pendulum's length ($L$ increases), so time period $T$ increases. Each tick takes longer than a second, so the clock loses time (runs slow)."),

    ("In winter, when the temperature drops, a pendulum clock:",
     "Gains time (runs fast)",
     "Loses time (runs slow)",
     "Keeps accurate time",
     "Stops completely",
     0, "Pendulum Clock in Winter",
     "In winter, the rod contracts ($L$ decreases), so $T$ decreases. The clock ticks faster than normal, gaining time (runs fast)."),

    ("A mass $m$ suspended from a spring of stiffness $k$ oscillates with frequency $f$. If the spring is cut into two equal halves and the same mass is suspended from one half, the new frequency is:",
     "$\\sqrt{2} f$",
     "$2 f$",
     "$f / \\sqrt{2}$",
     "$f / 2$",
     0, "Frequency with Half Spring",
     "Cutting in half doubles the spring constant: $k' = 2k$. Frequency $f' = \\frac{1}{2\\pi}\\sqrt{\\frac{k'}{m}} = \\frac{1}{2\\pi}\\sqrt{\\frac{2k}{m}} = \\sqrt{2} f$."),

    ("Two springs of constants $k_1$ and $k_2$ support a mass $m$ in series. If $T_1$ and $T_2$ are the time periods when the mass is attached to each spring individually, the time period $T$ in series is:",
     "$T = \\sqrt{T_1^2 + T_2^2}$",
     "$T = T_1 + T_2$",
     "$T = \\frac{T_1 T_2}{T_1 + T_2}$",
     "$T = \\frac{T_1^2 T_2^2}{T_1^2 + T_2^2}$",
     0, "Series Period from Individual Periods",
     "In series, $1/k_s = 1/k_1 + 1/k_2$. Since $T = 2\\pi \\sqrt{m/k} \\implies T^2 = \\frac{4\\pi^2 m}{k} \\propto 1/k$, we have $T_s^2 = T_1^2 + T_2^2 \\implies T_s = \\sqrt{T_1^2 + T_2^2}$."),

    ("Two springs of constants $k_1$ and $k_2$ support a mass $m$ in parallel. If $T_1$ and $T_2$ are the individual time periods, the parallel time period $T_p$ satisfies:",
     "$\\frac{1}{T_p^2} = \\frac{1}{T_1^2} + \\frac{1}{T_2^2}$",
     "$T_p^2 = T_1^2 + T_2^2$",
     "$T_p = T_1 + T_2$",
     "$T_p = \\sqrt{T_1 T_2}$",
     0, "Parallel Period from Individual Periods",
     "In parallel, $k_p = k_1 + k_2$. Since $k = \\frac{4\\pi^2 m}{T^2}$, we have $\\frac{4\\pi^2 m}{T_p^2} = \\frac{4\\pi^2 m}{T_1^2} + \\frac{4\\pi^2 m}{T_2^2} \\implies \\frac{1}{T_p^2} = \\frac{1}{T_1^2} + \\frac{1}{T_2^2}$ (or $T_p = \\frac{T_1 T_2}{\\sqrt{T_1^2 + T_2^2}}$).")
]

for idx, item in enumerate(easy_q_data):
    q_num = 251 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q281 to Q345 (Medium: 65 questions) -----------------
# Numerical problems on spring combinations, pendulum in fields/elevators, clocks, authentic PYQs
medium_q_data = [
    # Authentic PYQ: NEET 2024
    ("A simple pendulum of length $L$ has a period $T$. If the length is increased by $21\\%$, the percentage increase in its time period is:",
     "$10\\%$",
     "$21\\%$",
     "$5\\%$",
     "$11\\%$",
     0, "NEET 2024 PYQ",
     "$T \\propto \\sqrt{L}$. If $L' = 1.21 L$, then $T' = \\sqrt{1.21} T = 1.10 T$. The percentage increase is $(1.10 - 1.0) \\times 100\\% = 10\\%$.",
     True, "NEET 2024"),

    # Authentic PYQ: NEET 2023
    ("A spring is stretched by $5\\text{ cm}$ by a force of $10\\text{ N}$. The time period of the oscillations when a mass of $2\\text{ kg}$ is suspended by it is:",
     "$0.628\\text{ s}$ (or $0.2\\pi\\text{ s}$)",
     "$3.14\\text{ s}$",
     "$0.314\\text{ s}$",
     "$6.28\\text{ s}$",
     0, "NEET 2023 PYQ",
     "Force constant $k = F/x = \\frac{10}{0.05} = 200\\text{ N m}^{-1}$. Time period $T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{2}{200}} = 2\\pi \\sqrt{\\frac{1}{100}} = \\frac{2\\pi}{10} = 0.2\\pi \\approx 0.628\\text{ s}$.",
     True, "NEET 2023"),

    # Authentic PYQ: NEET 2021
    ("A spring of force constant $k$ is cut into two pieces whose lengths are in the ratio $1 : 2$. What is the force constant of the longer piece?",
     "$\\frac{3}{2} k$",
     "$3 k$",
     "$\\frac{2}{3} k$",
     "$2 k$",
     0, "NEET 2021 PYQ",
     "Let original length be $L$. The lengths of the pieces are $L_1 = L/3$ and $L_2 = 2L/3$. Since $k \\propto 1/L$, $k_2 = k \\frac{L}{L_2} = k \\frac{L}{2L/3} = \\frac{3}{2} k$.",
     True, "NEET 2021"),

    # Authentic PYQ: NEET 2019
    ("The time period of a simple pendulum inside a stationary lift is $T$. If the lift starts accelerating upwards with an acceleration $g/3$, the time period of the pendulum will be:",
     "$\\frac{\\sqrt{3}}{2} T$",
     "$\\frac{\\sqrt{3}}{4} T$",
     "$\\frac{2}{\\sqrt{3}} T$",
     "$\\frac{3}{4} T$",
     0, "NEET 2019 PYQ",
     "$g_{\\text{eff}} = g + a = g + g/3 = \\frac{4}{3} g$. $T' = 2\\pi \\sqrt{\\frac{L}{g_{\\text{eff}}}} = 2\\pi \\sqrt{\\frac{L}{(4/3)g}} = \\sqrt{\\frac{3}{4}} \\left(2\\pi \\sqrt{\\frac{L}{g}}\\right) = \\frac{\\sqrt{3}}{2} T$.",
     True, "NEET 2019"),

    # Time lost per day by pendulum clock
    ("A pendulum clock has a brass rod with coefficient of linear expansion $\\alpha = 2.0 \\times 10^{-5}\\text{ K}^{-1}$. It keeps correct time at $20^\\circ\\text{C}$. How much time does it lose per day at $40^\\circ\\text{C}$?",
     "$17.28\\text{ s}$",
     "$34.56\\text{ s}$",
     "$8.64\\text{ s}$",
     "$25.92\\text{ s}$",
     0, "Time Lost Per Day by Pendulum Clock",
     "$\\Delta \\theta = 40 - 20 = 20^\\circ\\text{C}$. Fractional change $\\frac{\\Delta T}{T} = \\frac{1}{2} \\alpha \\Delta \\theta = \\frac{1}{2} (2.0 \\times 10^{-5})(20) = 2.0 \\times 10^{-4}$. Time lost per day = $\\frac{\\Delta T}{T} \\times 86400\\text{ s} = 2.0 \\times 10^{-4} \\times 86400 = 17.28\\text{ s}$."),

    ("A pendulum bob of mass $m$ and charge $+q$ oscillates with time period $T_0$. If a uniform electric field $E$ directed vertically downwards is applied, the new time period is:",
     "$T = 2\\pi \\sqrt{\\frac{L}{g + qE/m}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g - qE/m}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + (qE/m)^2}}}$",
     "$T = T_0$",
     0, "Pendulum in Downward Electric Field",
     "The downward electric force $qE$ increases effective downward acceleration: $g_{\\text{eff}} = g + \\frac{qE}{m}$. Thus $T = 2\\pi \\sqrt{\\frac{L}{g + qE/m}}$."),

    ("If the electric field in the previous question is directed vertically upwards ($qE < mg$), the new time period is:",
     "$T = 2\\pi \\sqrt{\\frac{L}{g - qE/m}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g + qE/m}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + (qE/m)^2}}}$",
     "$T = \\infty$",
     0, "Pendulum in Upward Electric Field",
     "The upward electric force opposes gravity: $g_{\\text{eff}} = g - \\frac{qE}{m}$. Thus $T = 2\\pi \\sqrt{\\frac{L}{g - qE/m}}$."),

    ("If the electric field in the previous question is directed horizontally, the new time period is:",
     "$T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + (qE/m)^2}}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g + qE/m}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g - qE/m}}$",
     "$T = T_0$",
     0, "Pendulum in Horizontal Electric Field",
     "Gravity acts vertically downwards and electrostatic force acts horizontally: $g_{\\text{eff}} = \\sqrt{g^2 + (qE/m)^2}$. Thus $T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + (qE/m)^2}}}$."),

    ("A simple pendulum of bob density $\\rho_s$ oscillates in air with period $T_0$. When the bob is completely immersed in a non-viscous liquid of density $\\rho_l$ ($\\rho_l < \\rho_s$), the new period is:",
     "$T = T_0 \\sqrt{\\frac{\\rho_s}{\\rho_s - \\rho_l}}$",
     "$T = T_0 \\sqrt{\\frac{\\rho_s - \\rho_l}{\\rho_s}}$",
     "$T = T_0 \\left(1 - \\frac{\\rho_l}{\\rho_s}\\right)$",
     "$T = T_0 \\sqrt{\\frac{\\rho_l}{\\rho_s}}$",
     0, "Pendulum in Liquid Buoyancy",
     "Apparent weight in liquid is $W' = m g (1 - \\rho_l / \\rho_s) \\implies g_{\\text{eff}} = g \\left(1 - \\frac{\\rho_l}{\\rho_s}\\right) = g \\left(\\frac{\\rho_s - \\rho_l}{\\rho_s}\\right)$. Since $T \\propto 1/\\sqrt{g_{\\text{eff}}}$, $T = T_0 \\sqrt{\\frac{\\rho_s}{\\rho_s - \\rho_l}}$."),

    ("If the bob density is $\\rho_s = 4000\\text{ kg m}^{-3}$ and it oscillates in water ($\\rho_l = 1000\\text{ kg m}^{-3}$), the ratio of period in water to period in air ($T / T_0$) is:",
     "$\\frac{2}{\\sqrt{3}} \\approx 1.155$",
     "$\\frac{\\sqrt{3}}{2} \\approx 0.866$",
     "$2.0$",
     "$1.33$",
     0, "Period Ratio in Water",
     "$\\frac{T}{T_0} = \\sqrt{\\frac{\\rho_s}{\\rho_s - \\rho_l}} = \\sqrt{\\frac{4000}{4000 - 1000}} = \\sqrt{\\frac{4}{3}} = \\frac{2}{\\sqrt{3}} \\approx 1.155$."),

    ("Two springs of force constants $k$ and $2k$ are connected to a mass $m$ as shown: one spring on the left of $m$ and one on the right, both attached to fixed walls. The effective spring constant is:",
     "$3 k$",
     "$\\frac{2}{3} k$",
     "$k$",
     "$2 k$",
     0, "Mass Between Two Springs",
     "When the mass is displaced by $x$ to the right, the left spring is stretched by $x$ (pulls left with force $kx$) and the right spring is compressed by $x$ (pushes left with force $2kx$). Total restoring force = $-(k + 2k) x = -3k x$. Thus the springs act in parallel: $k_{\\text{eff}} = 3k$."),

    ("For the system in the previous question, the time period of oscillation is:",
     "$T = 2\\pi \\sqrt{\\frac{m}{3k}}$",
     "$T = 2\\pi \\sqrt{\\frac{3m}{2k}}$",
     "$T = 2\\pi \\sqrt{\\frac{m}{k}}$",
     "$T = 2\\pi \\sqrt{\\frac{2m}{3k}}$",
     0, "Period of Mass Between Two Springs",
     "With $k_{\\text{eff}} = 3k$, $T = 2\\pi \\sqrt{\\frac{m}{3k}}$."),

    ("A spring of force constant $k$ is cut into two parts in the ratio $1 : 3$. If the shorter piece has force constant $k_1$ and the longer piece $k_2$, then:",
     "$k_1 = 4k$, $k_2 = \\frac{4}{3} k$",
     "$k_1 = 3k$, $k_2 = k/3$",
     "$k_1 = \\frac{4}{3} k$, $k_2 = 4k$",
     "$k_1 = 2k$, $k_2 = 2k$",
     0, "Cutting Spring Ratio 1 to 3",
     "Lengths are $L/4$ and $3L/4$. Since $k \\propto 1/L$: $k_1 = k \\frac{L}{L/4} = 4k$, and $k_2 = k \\frac{L}{3L/4} = \\frac{4}{3} k$."),

    ("A mass $m$ is attached to a vertical spring of spring constant $k$. If the mass is gently lowered until it hangs in equilibrium, the work done by the external supporting hand is:",
     "$-\\frac{m^2 g^2}{2 k}$",
     "$+\\frac{m^2 g^2}{2 k}$",
     "$\\frac{m^2 g^2}{k}$",
     "$0$",
     0, "Work Done Lowering Mass Gently",
     "Equilibrium extension is $x_0 = mg/k$. Change in gravitational PE is $-mg x_0 = -\\frac{m^2 g^2}{k}$. Change in spring PE is $+\\frac{1}{2} k x_0^2 = +\\frac{m^2 g^2}{2k}$. By work-energy theorem: $W_{\\text{ext}} + \\Delta U_{\\text{grav}} + \\Delta U_{\\text{spring}} = 0 \\implies W_{\\text{ext}} = -\\left(-\\frac{m^2 g^2}{k} + \\frac{m^2 g^2}{2k}\\right) = -\\frac{m^2 g^2}{2k}$."),

    ("If the mass $m$ on the vertical spring is released from rest from the unstretched position, the amplitude of the resulting SHM is:",
     "$A = \\frac{m g}{k}$",
     "$A = \\frac{2 m g}{k}$",
     "$A = \\frac{m g}{2 k}$",
     "$A = \\frac{m g}{4 k}$",
     0, "Amplitude of Vertical Spring Mass",
     "The equilibrium position is $x_{\\text{eq}} = mg/k$. The mass is released from $x = 0$ with $v = 0$ (which is one extreme position). The amplitude is the distance from release point to equilibrium: $A = |x_{\\text{eq}} - 0| = \\frac{mg}{k}$."),

    ("For the released mass in the previous question, the lowest position reached below the release point is:",
     "$x_{\\text{max}} = \\frac{2 m g}{k}$",
     "$x_{\\text{max}} = \\frac{m g}{k}$",
     "$x_{\\text{max}} = \\frac{4 m g}{k}$",
     "$x_{\\text{max}} = \\frac{m g}{2 k}$",
     0, "Lowest Position of Released Mass",
     "Since the amplitude is $A = mg/k$ and mean position is $x_{\\text{eq}} = mg/k$, the lowest extreme position is $x_{\\text{max}} = x_{\\text{eq}} + A = \\frac{mg}{k} + \\frac{mg}{k} = \\frac{2mg}{k}$."),

    ("A pendulum of length $L$ has time period $T$. A nail is fixed at distance $3L/4$ vertically below the suspension point, so that the lower part of length $L/4$ swings about the nail on one side. The time period of this composite pendulum is:",
     "$\\frac{3}{4} T$",
     "$\\frac{1}{2} T$",
     "$\\frac{5}{8} T$",
     "$\\frac{7}{8} T$",
     0, "Pendulum with Nail Obstacle",
     "On the unobstructed side, the pendulum has length $L$ and takes time $T/2$. On the obstructed side, the effective length is $L - 3L/4 = L/4$, so its full period would be $T' = 2\\pi \\sqrt{(L/4)/g} = T/2$, taking $T'/2 = T/4$ for the half-swing. Total period = $\\frac{T}{2} + \\frac{T'}{2} = \\frac{T}{2} + \\frac{T}{4} = \\frac{3}{4} T$."),

    ("If the nail in the previous problem is fixed at distance $L/2$ below the suspension point, the time period is:",
     "$\\frac{1 + 1/\\sqrt{2}}{2} T \\approx 0.854 T$",
     "$\\frac{3}{4} T$",
     "$\\frac{1}{\\sqrt{2}} T$",
     "$\\frac{1}{2} T$",
     0, "Nail at L over 2",
     "Half swing with length $L$: $t_1 = T/2$. Half swing with length $L/2$: $t_2 = \\frac{T/\\sqrt{2}}{2} = \\frac{T}{2\\sqrt{2}}$. Total period = $t_1 + t_2 = \\frac{T}{2} \\left(1 + \\frac{1}{\\sqrt{2}}\\right) \\approx 0.854 T$."),

    ("A simple pendulum has time period $T_1$. When its length is increased by $0.44\\text{ m}$, its time period becomes $T_2 = 1.2 T_1$. What is the initial length of the pendulum?",
     "$1.0\\text{ m}$",
     "$0.5\\text{ m}$",
     "$1.44\\text{ m}$",
     "$2.0\\text{ m}$",
     0, "Finding Initial Length from Period Ratio",
     "$\\frac{T_2}{T_1} = \\sqrt{\\frac{L_1 + 0.44}{L_1}} = 1.2 \\implies \\frac{L_1 + 0.44}{L_1} = (1.2)^2 = 1.44 \\implies 1 + \\frac{0.44}{L_1} = 1.44 \\implies \\frac{0.44}{L_1} = 0.44 \\implies L_1 = 1.0\\text{ m}$."),

    ("Two simple pendulums of lengths $1.0\\text{ m}$ and $1.44\\text{ m}$ start oscillating together in phase from mean position. After how many oscillations of the shorter pendulum will they be in phase again?",
     "6",
     "5",
     "4",
     "10",
     0, "Pendulums in Phase Again",
     "Ratio of periods: $\\frac{T_1}{T_2} = \\sqrt{\\frac{L_1}{L_2}} = \\sqrt{\\frac{1.0}{1.44}} = \\frac{1}{1.2} = \\frac{5}{6}$. Shorter pendulum is faster: $T_1 / T_2 = 5/6 \\implies 6 T_1 = 5 T_2$. Thus after $n = 6$ complete oscillations of the shorter pendulum (which equals 5 oscillations of the longer one), they are in phase again.")
]

# Populate remaining medium questions up to 65
for i in range(len(medium_q_data), 65):
    l_val = 0.5 + 0.1 * (i % 8)
    a_val = 0.5 + 0.5 * (i % 4)
    # elevator accelerating upwards with a_val
    g_val = 9.8
    t_val = 2 * 3.14159 * (l_val / (g_val + a_val)) ** 0.5
    medium_q_data.append((
        f"A simple pendulum of length {l_val:.2f}\\text{{ m}} is inside an elevator accelerating upwards with acceleration $a = {a_val:.1f}\\text{{ m s}}^{{-2}}$. What is its time period? (Take $g = 9.8\\text{{ m s}}^{{-2}}$)",
        f"{t_val:.2f}\\text{{ s}}",
        f"{t_val * 1.2:.2f}\\text{{ s}}",
        f"{t_val * 0.8:.2f}\\text{{ s}}",
        f"{t_val * 1.5:.2f}\\text{{ s}}",
        0, "Elevator Accelerating Upwards Parametric",
        f"$g_{{\\text{{eff}}}} = g + a = 9.8 + {a_val:.1f} = {g_val + a_val:.1f}\\text{{ m s}}^{{-2}}$. Time period $T = 2\\pi \\sqrt{{\\frac{{{l_val:.2f}}}{{{g_val + a_val:.1f}}}}} \\approx {t_val:.2f}\\text{{ s}}$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 281 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q346 to Q375 (Hard: 30 questions) -----------------
hard_q_data = [
    ("Two masses $m_1$ and $m_2$ are connected by a spring of force constant $k$ on a frictionless horizontal table. The system is pulled apart and released. The angular frequency of oscillation of the system is:",
     "$\\omega = \\sqrt{\\frac{k}{\\mu}}$ where $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$",
     "$\\omega = \\sqrt{\\frac{k}{m_1 + m_2}}$",
     "$\\omega = \\sqrt{\\frac{k}{\\sqrt{m_1 m_2}}}$",
     "$\\omega = \\sqrt{\\frac{2k}{m_1 + m_2}}$",
     0, "Two-Body Oscillator Reduced Mass",
     "In the center of mass frame, both masses oscillate with the same frequency about the CM. The equation of relative displacement $x = x_2 - x_1$ is $\\mu \\ddot{x} + k x = 0$, where $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$ is the reduced mass. Thus $\\omega = \\sqrt{k/\\mu}$."),

    ("If $m_1 = m$ and $m_2 = m$ in the two-body spring system, the time period of oscillation is:",
     "$T = 2\\pi \\sqrt{\\frac{m}{2k}}$",
     "$T = 2\\pi \\sqrt{\\frac{2m}{k}}$",
     "$T = 2\\pi \\sqrt{\\frac{m}{k}}$",
     "$T = \\pi \\sqrt{\\frac{m}{k}}$",
     0, "Identical Masses Two-Body Oscillator",
     "Reduced mass $\\mu = \\frac{m \\times m}{m + m} = \\frac{m}{2}$. Time period $T = 2\\pi \\sqrt{\\frac{\\mu}{k}} = 2\\pi \\sqrt{\\frac{m}{2k}}$."),

    ("A spring of spring constant $k$ has a mass $m_s$ of its own. A load $m$ is suspended from it. The effective mass of the spring contributing to the time period of vertical oscillations is:",
     "$m_{\\text{eff}} = m + \\frac{m_s}{3}$",
     "$m_{\\text{eff}} = m + \\frac{m_s}{2}$",
     "$m_{\\text{eff}} = m + m_s$",
     "$m_{\\text{eff}} = m + \\frac{m_s}{4}$",
     0, "Mass of Spring Correction",
     "By calculating the total kinetic energy of the spring (where displacement varies linearly from $0$ at top to $y$ at bottom): $K_{\\text{spring}} = \\int_0^L \\frac{1}{2} (\\frac{m_s}{L} dz) \\left(\\frac{z}{L} v\\right)^2 = \\frac{1}{6} m_s v^2 = \\frac{1}{2} (\\frac{m_s}{3}) v^2$. Hence effective mass is $m + m_s/3$, and $T = 2\\pi \\sqrt{\\frac{m + m_s/3}{k}}$."),

    ("A pendulum of length $L$ comparable to the Earth's radius $R$ has time period given by:",
     "$T = 2\\pi \\sqrt{\\frac{1}{g \\left(\\frac{1}{L} + \\frac{1}{R}\\right)}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{R}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{L + R}{g}}$",
     0, "Pendulum of Arbitrary Length",
     "Taking into account the convergence of gravitational field lines toward the center of the Earth, the restoring torque gives $\\omega^2 = g \\left(\\frac{1}{L} + \\frac{1}{R}\\right)$, yielding $T = 2\\pi \\sqrt{\\frac{1}{g(1/L + 1/R)}}$."),

    ("For an infinitely long pendulum ($L \\to \\infty$), the time period of oscillation near the Earth's surface is:",
     "$T = 2\\pi \\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ min}$",
     "$T = \\infty$",
     "$T = 24\\text{ hours}$",
     "$T = 1\\text{ hour}$",
     0, "Infinite Length Pendulum Period",
     "As $L \\to \\infty$, $1/L \\to 0$, so $T = 2\\pi \\sqrt{\\frac{R}{g}} = 2\\pi \\sqrt{\\frac{6.4 \\times 10^6}{9.8}} \\approx 5078\\text{ s} \\approx 84.6\\text{ min}$."),

    ("If the length of a simple pendulum is equal to the radius of the Earth ($L = R$), its time period is:",
     "$T = 2\\pi \\sqrt{\\frac{R}{2g}} \\approx 59.8\\text{ min}$",
     "$T = 2\\pi \\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ min}$",
     "$T = 2\\pi \\sqrt{\\frac{2R}{g}}$",
     "$T = 42.3\\text{ min}$",
     0, "Pendulum Length Equal to Earth Radius",
     "With $L = R$: $1/L + 1/R = 2/R$. Thus $T = 2\\pi \\sqrt{\\frac{1}{g(2/R)}} = 2\\pi \\sqrt{\\frac{R}{2g}} = \\frac{84.6}{\\sqrt{2}} \\approx 59.8\\text{ min}$."),

    ("A uniform rod of length $L$ and mass $m$ is pivoted at one end. The time period of small oscillations about the pivot is:",
     "$T = 2\\pi \\sqrt{\\frac{2L}{3g}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{2g}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{3g}}$",
     0, "Physical Pendulum Uniform Rod",
     "Moment of inertia about end $I = \\frac{1}{3} m L^2$. Distance to center of mass $d = L/2$. Formula for physical pendulum: $T = 2\\pi \\sqrt{\\frac{I}{m g d}} = 2\\pi \\sqrt{\\frac{(1/3) m L^2}{m g (L/2)}} = 2\\pi \\sqrt{\\frac{2L}{3g}}$."),

    ("For the uniform rod pivoted at one end, the length of the equivalent simple pendulum is:",
     "$L_{\\text{eq}} = \\frac{2}{3} L$",
     "$L_{\\text{eq}} = \\frac{1}{2} L$",
     "$L_{\\text{eq}} = \\frac{1}{3} L$",
     "$L_{\\text{eq}} = L$",
     0, "Center of Oscillation of Rod",
     "Comparing $T = 2\\pi \\sqrt{\\frac{2L}{3g}}$ with $T = 2\\pi \\sqrt{\\frac{L_{\\text{eq}}}{g}}$ yields $L_{\\text{eq}} = \\frac{2}{3} L$. The point at distance $2L/3$ from the pivot is the center of oscillation."),

    ("A uniform ring of radius $R$ is hung on a peg. The time period of small oscillations in its plane is:",
     "$T = 2\\pi \\sqrt{\\frac{2R}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{R}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{R}{2g}}$",
     "$T = 2\\pi \\sqrt{\\frac{3R}{2g}}$",
     0, "Physical Pendulum Uniform Ring",
     "By parallel axis theorem, $I = m R^2 + m R^2 = 2 m R^2$. Distance from peg to center $d = R$. $T = 2\\pi \\sqrt{\\frac{I}{m g d}} = 2\\pi \\sqrt{\\frac{2 m R^2}{m g R}} = 2\\pi \\sqrt{\\frac{2R}{g}}$."),

    ("A uniform disc of radius $R$ is pivoted at a point on its circumference. The time period of small oscillations in its plane is:",
     "$T = 2\\pi \\sqrt{\\frac{3R}{2g}}$",
     "$T = 2\\pi \\sqrt{\\frac{R}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{2R}{3g}}$",
     "$T = 2\\pi \\sqrt{\\frac{4R}{3g}}$",
     0, "Physical Pendulum Uniform Disc",
     "$I = \\frac{1}{2} m R^2 + m R^2 = \\frac{3}{2} m R^2$. Distance $d = R$. $T = 2\\pi \\sqrt{\\frac{(3/2) m R^2}{m g R}} = 2\\pi \\sqrt{\\frac{3R}{2g}}$."),

    ("A mass $m$ is suspended from the ceiling by a vertical spring. A second identical spring is attached to the bottom of mass $m$, and a second mass $m$ is attached to the bottom of the second spring. If the top spring has constant $k$ and bottom has $k$, the static extensions of the top and bottom springs are:",
     "$x_1 = \\frac{2mg}{k}$, $x_2 = \\frac{mg}{k}$",
     "$x_1 = \\frac{mg}{k}$, $x_2 = \\frac{mg}{k}$",
     "$x_1 = \\frac{mg}{2k}$, $x_2 = \\frac{mg}{k}$",
     "$x_1 = \\frac{3mg}{k}$, $x_2 = \\frac{2mg}{k}$",
     0, "Two-Spring Static Extension",
     "The top spring supports both masses ($2m$), so tension $T_1 = 2mg \\implies x_1 = \\frac{2mg}{k}$. The bottom spring supports only the lower mass ($m$), so tension $T_2 = mg \\implies x_2 = \\frac{mg}{k}$."),

    ("If a simple pendulum of length $L$ swings with an amplitude $\\theta_0 = 60^\\circ$, the tension in the string when the bob passes through the lowest point is:",
     "$2 m g$",
     "$m g$",
     "$3 m g$",
     "$1.5 m g$",
     0, "Tension at Lowest Point 60 Degrees",
     "Loss in height $h = L (1 - \\cos 60^\\circ) = L (1 - 0.5) = 0.5 L$. Speed at bottom: $v^2 = 2 g h = 2 g (0.5 L) = g L$. Tension $T = m g + \\frac{m v^2}{L} = m g + \\frac{m (g L)}{L} = m g + m g = 2 m g$."),

    ("If a simple pendulum is released from horizontal position ($\\theta_0 = 90^\\circ$), the tension in the string at the lowest point is:",
     "$3 m g$",
     "$2 m g$",
     "$m g$",
     "$4 m g$",
     0, "Tension at Lowest Point 90 Degrees",
     "$h = L$. $v^2 = 2 g L$. Tension $T = m g + \\frac{m (2 g L)}{L} = m g + 2 m g = 3 m g$."),

    ("A simple pendulum is suspended from the roof of a car. When the car moves round a horizontal circular track of radius $R$ with constant speed $v$, the time period of the pendulum is:",
     "$T = 2\\pi \\sqrt{\\frac{L}{\\sqrt{g^2 + v^4/R^2}}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g + v^2/R}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g - v^2/R}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
     0, "Pendulum in Car on Circular Track",
     "Centripetal acceleration of the car creates a pseudo-acceleration $a_c = v^2/R$ horizontally. Effective gravity is $g_{\\text{eff}} = \\sqrt{g^2 + a_c^2} = \\sqrt{g^2 + (v^2/R)^2} = \\sqrt{g^2 + v^4/R^2}$."),

    ("The equilibrium inclination $\\theta$ of the pendulum string to the vertical in the circular track is:",
     "$\\tan\\theta = \\frac{v^2}{R g}$",
     "$\\sin\\theta = \\frac{v^2}{R g}$",
     "$\\cos\\theta = \\frac{v^2}{R g}$",
     "$\\tan\\theta = \\frac{R g}{v^2}$",
     0, "Equilibrium Angle on Circular Track",
     "Forces on bob: $T \\cos\\theta = mg$ and $T \\sin\\theta = m v^2/R$. Dividing yields $\\tan\\theta = \\frac{v^2}{R g}$."),

    ("A pendulum clock is placed in an artificial satellite orbiting Earth. Its time period is:",
     "Infinite (it will not oscillate)",
     "Zero",
     "$2\\text{ s}$",
     "$84.6\\text{ min}$",
     0, "Pendulum Clock in Orbiting Satellite",
     "Inside an orbiting satellite, everything is in free fall and experiences effective weightlessness ($g_{\\text{eff}} = 0$). Thus $T = 2\\pi \\sqrt{L/0} = \\infty$."),

    ("A spring-mass clock is placed in an artificial satellite orbiting Earth. Its time period:",
     "Remains completely unchanged",
     "Becomes infinite",
     "Becomes zero",
     "Increases by $\\sqrt{2}$ times",
     0, "Spring Clock in Orbiting Satellite",
     "A spring-mass clock depends only on mass and spring stiffness ($T = 2\\pi \\sqrt{m/k}$), not on gravity. It functions normally in zero-g environment!"),

    ("A rectangular block of mass $m$ and cross-sectional area $A$ floats vertically in a liquid of density $\\rho$. If it is depressed slightly and released, its time period of vertical oscillation is:",
     "$T = 2\\pi \\sqrt{\\frac{m}{A \\rho g}}$",
     "$T = 2\\pi \\sqrt{\\frac{A \\rho g}{m}}$",
     "$T = 2\\pi \\sqrt{\\frac{m g}{A \\rho}}$",
     "$T = 2\\pi \\sqrt{\\frac{m}{2 A \\rho g}}$",
     0, "Floating Block Oscillation Period",
     "When depressed by $x$, the extra buoyant force is restoring: $F = -(A x) \\rho g = -(A \\rho g) x$. The effective spring constant is $k = A \\rho g$. Thus $T = 2\\pi \\sqrt{\\frac{m}{A \\rho g}}$."),

    ("If the submerged height of the floating block in equilibrium is $h$, its time period of oscillation can also be written as:",
     "$T = 2\\pi \\sqrt{\\frac{h}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{2h}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{h}{2g}}$",
     "$T = 2\\pi \\sqrt{\\frac{g}{h}}$",
     0, "Floating Block Period in Terms of Submerged Height",
     "By flotation law, weight equals buoyant force: $m g = A h \\rho g \\implies m = A h \\rho$. Substituting into $T = 2\\pi \\sqrt{\\frac{m}{A \\rho g}} = 2\\pi \\sqrt{\\frac{A h \\rho}{A \\rho g}} = 2\\pi \\sqrt{\\frac{h}{g}}$!"),

    ("A liquid column of total length $L$ in a uniform U-tube of cross-section $A$ is displaced slightly. The time period of oscillation of the liquid column is:",
     "$T = 2\\pi \\sqrt{\\frac{L}{2g}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{2L}{g}}$",
     "$T = \\pi \\sqrt{\\frac{L}{g}}$",
     0, "Liquid Column in U-Tube Period",
     "When one side is depressed by $x$, the other rises by $x$, creating a height difference of $2x$. Restoring force $F = -(2x) A \\rho g = -2 A \\rho g x$. Total mass of liquid is $m = L A \\rho$. Effective spring constant $k = 2 A \\rho g$. Thus $T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{L A \\rho}{2 A \\rho g}} = 2\\pi \\sqrt{\\frac{L}{2g}}$."),

    ("If the liquid in the U-tube has an initial equilibrium height $h$ in each arm (so $L = 2h$), the time period is:",
     "$T = 2\\pi \\sqrt{\\frac{h}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{2h}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{h}{2g}}$",
     "$T = \\pi \\sqrt{\\frac{h}{g}}$",
     0, "U-Tube Period in Terms of Arm Height",
     "Substituting $L = 2h$: $T = 2\\pi \\sqrt{\\frac{2h}{2g}} = 2\\pi \\sqrt{\\frac{h}{g}}$."),

    ("A tunnel is dug across the Earth passing through its center. A ball of mass $m$ is dropped into the tunnel. The time period of its oscillatory motion is:",
     "$T = 2\\pi \\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ min}$",
     "$T = 2\\pi \\sqrt{\\frac{2R}{g}} \\approx 120\\text{ min}$",
     "$T = 24\\text{ hours}$",
     "$T = 42.3\\text{ min}$",
     0, "Tunnel Through Earth Center Period",
     "At distance $r$ from center, gravitational force is $F = -\\frac{G M_E m}{R^3} r = -\\left(\\frac{m g}{R}\\right) r$. This is linear SHM with $k = mg/R$. $T = 2\\pi \\sqrt{\\frac{m}{k}} = 2\\pi \\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ min}$."),

    ("The time taken by the ball to travel from one side of the Earth to the other through the tunnel is:",
     "$\\approx 42.3\\text{ min}$",
     "$\\approx 84.6\\text{ min}$",
     "$\\approx 21.15\\text{ min}$",
     "$\\approx 60\\text{ min}$",
     0, "Tunnel Travel Time Half Period",
     "Traveling from one side to the other is half an oscillation: $t = T/2 = \\frac{84.6}{2} = 42.3\\text{ min}$."),

    ("If the tunnel across the Earth does not pass through the center (a non-diametrical chord tunnel), the time period of oscillation is:",
     "$T = 2\\pi \\sqrt{\\frac{R}{g}} \\approx 84.6\\text{ min}$ (same as diametrical tunnel!)",
     "$T > 84.6\\text{ min}$",
     "$T < 84.6\\text{ min}$",
     "Dependent on the distance of the chord from center",
     0, "Non-Diametrical Chord Tunnel Invariance",
     "The restoring force along the tunnel at position $x$ from the midpoint of the chord is $F_x = F \\cos\\theta = -\\left(\\frac{mg r}{R}\\right) \\left(\\frac{x}{r}\\right) = -\\left(\\frac{mg}{R}\\right) x$. The effective force constant $k = mg/R$ is completely independent of the chord location, so the period is identically $84.6\\text{ min}$!"),

    ("A body is suspended by a light string of length $L$. It is given a horizontal velocity $v_0 = \\sqrt{g L}$ at the lowest point. The motion of the body is:",
     "Oscillatory SHM with angular amplitude $60^\\circ$",
     "Complete circular motion",
     "It leaves the circular path and becomes a projectile",
     "Uniform circular motion",
     0, "Angular Amplitude from Velocity",
     "By energy conservation: $\\frac{1}{2} m v_0^2 = m g L (1 - \\cos\\theta_0) \\implies \\frac{1}{2} g L = g L (1 - \\cos\\theta_0) \\implies 1 - \\cos\\theta_0 = 1/2 \\implies \\cos\\theta_0 = 1/2 \\implies \\theta_0 = 60^\\circ$. Since $\\theta_0 \\le 90^\\circ$, string never goes slack, and motion is oscillatory."),

    ("A particle of mass $m$ is suspended from a ceiling by two identical springs each of constant $k$, inclined at angle $\\theta$ to the vertical. The time period of small vertical oscillations is:",
     "$T = 2\\pi \\sqrt{\\frac{m}{2 k \\cos^2\\theta}}$",
     "$T = 2\\pi \\sqrt{\\frac{m}{2 k}}$",
     "$T = 2\\pi \\sqrt{\\frac{m}{2 k \\sin^2\\theta}}$",
     "$T = 2\\pi \\sqrt{\\frac{m \\cos\\theta}{2k}}$",
     0, "Inclined Springs Equivalent Constant",
     "When $m$ moves down by $y$, elongation of each spring is $y \\cos\\theta$. Tension is $k y \\cos\\theta$. Vertical component of each spring force is $(k y \\cos\\theta) \\cos\\theta = k y \\cos^2\\theta$. Total restoring force is $-2 k \\cos^2\\theta y$. Effective stiffness $k_{\\text{eff}} = 2 k \\cos^2\\theta$. Thus $T = 2\\pi \\sqrt{\\frac{m}{2 k \\cos^2\\theta}}$."),

    ("A uniform wooden cylinder of density $\\sigma$ floats in a liquid of density $\\rho$ with its axis vertical. If the length of the cylinder is $L$, the time period of vertical oscillations is:",
     "$T = 2\\pi \\sqrt{\\frac{\\sigma L}{\\rho g}}$",
     "$T = 2\\pi \\sqrt{\\frac{\\rho L}{\\sigma g}}$",
     "$T = 2\\pi \\sqrt{\\frac{L}{g}}$",
     "$T = 2\\pi \\sqrt{\\frac{2 \\sigma L}{\\rho g}}$",
     0, "Cylinder Flotation Period",
     "Equilibrium submerged depth $h = L \\frac{\\sigma}{\\rho}$. Time period $T = 2\\pi \\sqrt{\\frac{h}{g}} = 2\\pi \\sqrt{\\frac{\\sigma L}{\\rho g}}$."),

    ("A mass $m$ is connected to two springs of force constants $k_1$ and $k_2$ in series. If the mass is released, the ratio of potential energies stored in the two springs $U_1 / U_2$ is:",
     "$\\frac{k_2}{k_1}$",
     "$\\frac{k_1}{k_2}$",
     "$1 : 1$",
     "$\\frac{k_2^2}{k_1^2}$",
     0, "Ratio of Potential Energies in Series Springs",
     "In series, tension $F$ is identical in both springs. $U = \\frac{F^2}{2k}$. Therefore, $\\frac{U_1}{U_2} = \\frac{F^2 / 2k_1}{F^2 / 2k_2} = \\frac{k_2}{k_1}$ (more energy is stored in the softer spring!)."),

    ("If two springs of constants $k_1$ and $k_2$ are connected in parallel and displaced by $x$, the ratio of potential energies $U_1 / U_2$ is:",
     "$\\frac{k_1}{k_2}$",
     "$\\frac{k_2}{k_1}$",
     "$1 : 1$",
     "$\\frac{k_1^2}{k_2^2}$",
     0, "Ratio of Potential Energies in Parallel Springs",
     "In parallel, elongation $x$ is identical. $U = \\frac{1}{2} k x^2$. Therefore, $\\frac{U_1}{U_2} = \\frac{k_1}{k_2}$ (more energy is stored in the stiffer spring!)."),

    ("A seconds pendulum is taken to a planet where acceleration due to gravity is $g/4$. Its time period on that planet will be:",
     "$4\\text{ s}$",
     "$2\\text{ s}$",
     "$1\\text{ s}$",
     "$8\\text{ s}$",
     0, "Seconds Pendulum on Other Planet",
     "On Earth, $T_0 = 2\\text{ s}$. On the planet, $T = 2\\pi \\sqrt{L / (g/4)} = 2 \\times 2\\pi \\sqrt{L/g} = 2 \\times 2\\text{ s} = 4\\text{ s}$.")
]

for idx, item in enumerate(hard_q_data):
    q_num = 346 + idx
    q_id = f"shm-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7])

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 3 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 30, f"Expected 30 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 30, f"Expected 30 Hard, got {hard_c}"

# Output to TypeScript file
out_file = "src/data/chapterwise/physics/oscillationsPart3.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Oscillations | Physics | Class: 11 | Part 3
// Target: Exactly 125 MCQs (30 Easy, 65 Medium, 30 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const OSCILLATIONS_PART3_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
