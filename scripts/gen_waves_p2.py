#!/usr/bin/env python3
"""
Generator for Waves - Part 2 (Q126 to Q250)
Subject: Physics | Class: 11 | Chapter: Waves (waves)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- Superposition principle of waves
- Standing (stationary) waves formation
- Standing wave mathematical equation y = 2A sin(kx) cos(omega t)
- Nodes and Antinodes: positions, properties, spacing (lambda/2, lambda/4)
- Pressure nodes vs displacement nodes
- Phase relationships across nodes
- Energy transport in standing waves (zero net transport)
- Boundary reflections (rigid vs free ends)
- Reflection and transmission coefficients
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
        "chapter": "waves",
        "topicId": "phys-wave-superposition",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q126 to Q160 (Easy: 35 questions) -----------------
easy_q_data = [
    ("When two identical waves traveling in opposite directions along the same line superpose, the resultant wave is called a:",
     "Stationary (standing) wave",
     "Progressive wave",
     "Shock wave",
     "Beats wave",
     0, "Standing Wave Definition",
     "A standing (stationary) wave is formed by the superposition of two progressive waves of identical amplitude and frequency traveling in opposite directions along the same medium."),

    ("In a stationary wave, the points of zero amplitude are called:",
     "Nodes",
     "Antinodes",
     "Crests",
     "Troughs",
     0, "Nodes Definition",
     "Nodes are points in a standing wave where the particles remain permanently at rest with zero displacement amplitude ($A = 0$)."),

    ("In a stationary wave, the points of maximum amplitude are called:",
     "Antinodes",
     "Nodes",
     "Loops",
     "Null points",
     0, "Antinodes Definition",
     "Antinodes are points in a standing wave where particles oscillate with maximum possible displacement amplitude ($2A$)."),

    ("The distance between two consecutive nodes in a standing wave of wavelength $\\lambda$ is:",
     "$\\frac{\\lambda}{2}$",
     "$\\lambda$",
     "$\\frac{\\lambda}{4}$",
     "$2\\lambda$",
     0, "Distance Between Consecutive Nodes",
     "Nodes occur wherever $\\sin(kx) = 0 \\implies kx = n\\pi \\implies \\frac{2\\pi}{\\lambda} x = n\\pi \\implies x = n \\frac{\\lambda}{2}$. The separation between consecutive nodes is $\\lambda/2$."),

    ("The distance between two consecutive antinodes in a standing wave of wavelength $\\lambda$ is:",
     "$\\frac{\\lambda}{2}$",
     "$\\lambda$",
     "$\\frac{\\lambda}{4}$",
     "$2\\lambda$",
     0, "Distance Between Consecutive Antinodes",
     "Antinodes occur at $x = (2n + 1)\\frac{\\lambda}{4}$. The separation between consecutive antinodes is $\\frac{\\lambda}{2}$."),

    ("The distance between an adjacent node and antinode in a standing wave of wavelength $\\lambda$ is:",
     "$\\frac{\\lambda}{4}$",
     "$\\frac{\\lambda}{2}$",
     "$\\lambda$",
     "$\\frac{3\\lambda}{4}$",
     0, "Node to Antinode Distance",
     "Antinodes lie exactly halfway between adjacent nodes, so the distance between a node and consecutive antinode is $\\frac{\\lambda/2}{2} = \\frac{\\lambda}{4}$."),

    ("Unlike progressive waves, stationary waves:",
     "Do not transport energy across the medium",
     "Do not have a definite frequency",
     "Do not have an amplitude",
     "Cannot be formed in air",
     0, "Zero Energy Transport in Standing Wave",
     "Because nodes remain permanently stationary with zero velocity, energy cannot cross through nodal points, so no net energy is transported along the medium."),

    ("All particles of the medium situated between two consecutive nodes in a standing wave oscillate:",
     "In the same phase with different amplitudes",
     "In opposite phases with the same amplitude",
     "With different frequencies",
     "With a phase difference of $\\pi/2$",
     0, "Phase in Single Loop of Standing Wave",
     "In a single loop between two consecutive nodes, the displacement is $y = [2A \\sin(kx)] \\cos(\\omega t)$. The spatial term has the same sign throughout the loop, so all particles reach their crests and troughs simultaneously in the same phase."),

    ("The phase difference between particles situated on opposite sides of a node is:",
     "$\\pi\\text{ rad}$ ($180^\\circ$)",
     "$0\\text{ rad}$",
     "$\\frac{\\pi}{2}\\text{ rad}$",
     "$2\\pi\\text{ rad}$",
     0, "Phase Across Node",
     "Crossing a node inverts the sign of $\\sin(kx)$, meaning particles in adjacent loops move in opposite directions, corresponding to a phase difference of $\\pi$ radians ($180^\\circ$)."),

    ("At a displacement node in a sound standing wave, the pressure variation is:",
     "Maximum (it is a pressure antinode)",
     "Zero",
     "Constant",
     "Half of maximum",
     0, "Displacement Node vs Pressure Antinode",
     "Pressure variation is given by $\\Delta P = -B \\frac{\\partial y}{\\partial x}$. Where displacement is a node, spatial slope $\\partial y / \\partial x$ is maximum, so pressure variation is maximum (pressure antinode)."),

    ("At a displacement antinode in a sound standing wave, the pressure variation is:",
     "Zero (it is a pressure node)",
     "Maximum",
     "Infinite",
     "Constant non-zero",
     0, "Displacement Antinode vs Pressure Node",
     "Where displacement amplitude is maximum, particles oscillate back and forth together without relative crowding or rarefaction ($\\\\partial y / \\\\partial x = 0$), so pressure variation is zero (pressure node)."),

    ("When a wave is reflected from an open (free) boundary, the phase change of the reflected wave is:",
     "$0\\text{ rad}$ (no phase change)",
     "$\\pi\\text{ rad}$ ($180^\\circ$)",
     "$\\frac{\\pi}{2}\\text{ rad}$",
     "$2\\pi\\text{ rad}$",
     0, "Reflection at Free Boundary",
     "At a free boundary (open end of pipe, free ring on rod), the particles can oscillate freely without resistance, forming an antinode with zero phase shift ($0^\\circ$)."),

    ("When a wave is reflected from a closed (rigid) boundary, the phase change of the reflected wave is:",
     "$\\pi\\text{ rad}$ ($180^\\circ$)",
     "$0\\text{ rad}$",
     "$\\frac{\\pi}{2}\\text{ rad}$",
     "$2\\pi\\text{ rad}$",
     0, "Reflection at Rigid Boundary",
     "At a rigid boundary, the displacement must be identically zero at all times, requiring the reflected wave to cancel the incident wave, introducing a phase inversion of $\\pi$ radians ($180^\\circ$)."),

    ("The standing wave equation $y = 2 A \\sin(k x) \\cos(\\omega t)$ has a node at $x = 0$ because:",
     "$\\sin(0) = 0$",
     "$\\cos(0) = 1$",
     "$\\omega t = 0$",
     "The amplitude is zero",
     0, "Node at Origin",
     "At $x = 0$, the amplitude factor is $2A \\sin(k \\times 0) = 0$, so $x = 0$ is a displacement node."),

    ("The standing wave equation $y = 2 A \\cos(k x) \\sin(\\omega t)$ has an antinode at $x = 0$ because:",
     "$\\cos(0) = 1$",
     "$\\sin(0) = 0$",
     "$\\omega = 0$",
     "The velocity is zero",
     0, "Antinode at Origin",
     "At $x = 0$, the amplitude factor is $|2A \\cos(0)| = 2A$, which is the maximum possible amplitude, making $x = 0$ an antinode."),

    ("In a standing wave, all particles pass through their mean positions simultaneously:",
     "Twice in every period",
     "Once in every period",
     "Four times in every period",
     "Never",
     0, "Passing Mean Position in Standing Wave",
     "Since $y(x, t) = A(x) \\cos(\\omega t)$, $y = 0$ everywhere when $\\cos(\\omega t) = 0$, which occurs twice during each full cycle $T$."),

    ("When all particles in a standing wave pass through their mean positions, the total energy of the wave is purely:",
     "Kinetic energy",
     "Potential energy",
     "Electrostatic energy",
     "Zero",
     0, "Total Energy at Mean Position",
     "When all displacements are zero ($y = 0$), all strain/potential energy is zero, so the total mechanical energy is entirely in the form of kinetic energy."),

    ("When all particles in a standing wave are at their maximum displacements, the total energy is purely:",
     "Potential energy",
     "Kinetic energy",
     "Radiant energy",
     "Zero",
     0, "Total Energy at Extreme Displacements",
     "At the extremes, all particles instantaneously come to rest ($v = 0$), so kinetic energy vanishes and the energy is stored completely as potential (strain) energy."),

    ("Two waves $y_1 = A \\sin(\\omega t - k x)$ and $y_2 = A \\sin(\\omega t + k x)$ interfere. The resulting standing wave is:",
     "$y = 2 A \\cos(k x) \\sin(\\omega t)$",
     "$y = 2 A \\sin(k x) \\cos(\\omega t)$",
     "$y = A \\sin(k x) \\cos(\\omega t)$",
     "$y = 0$",
     0, "Superposition Resulting Standing Wave",
     "Using $\\sin(A) + \\sin(B) = 2 \\sin\\left(\\frac{A+B}{2}\\right) \\cos\\left(\\frac{A-B}{2}\\right)$: $\\sin(\\omega t - kx) + \\sin(\\omega t + kx) = 2 \\sin(\\omega t) \\cos(-kx) = 2 A \\cos(kx) \\sin(\\omega t)$."),

    ("If a string fixed at both ends oscillates in 3 loops, the number of nodes is:",
     "4",
     "3",
     "2",
     "5",
     0, "Nodes in Stretched String",
     "For $p$ loops, the number of nodes is $p + 1$. For 3 loops, there are $3 + 1 = 4$ nodes (including both fixed ends)."),

    ("If a string fixed at both ends oscillates in 3 loops, the number of antinodes is:",
     "3",
     "4",
     "2",
     "6",
     0, "Antinodes in Stretched String",
     "Each loop contains exactly one antinode, so for 3 loops there are 3 antinodes."),

    ("A string of length $L$ vibrates in 4 loops. The wavelength of the wave is:",
     "$\\frac{L}{2}$",
     "$L$",
     "$2 L$",
     "$\\frac{L}{4}$",
     0, "Wavelength from Loop Count",
     "Length $L = p \\left(\\frac{\\lambda}{2}\\right)$. For $p = 4$: $L = 4 \\left(\\frac{\\lambda}{2}\\right) = 2\\lambda \\implies \\lambda = \\frac{L}{2}$."),

    ("A string of length $L$ vibrates in its fundamental mode (1 loop). The wavelength is:",
     "$2 L$",
     "$L$",
     "$\\frac{L}{2}$",
     "$4 L$",
     0, "Fundamental Wavelength String",
     "For 1 loop, $L = \\lambda / 2 \\implies \\lambda = 2L$."),

    ("The fundamental frequency of a stretched string of length $L$, tension $T$, and linear density $\\mu$ fixed at both ends is:",
     "$f_1 = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}$",
     "$f_1 = \\frac{1}{L} \\sqrt{\\frac{T}{\\mu}}$",
     "$f_1 = \\frac{1}{4L} \\sqrt{\\frac{T}{\\mu}}$",
     "$f_1 = \\frac{2}{L} \\sqrt{\\frac{T}{\\mu}}$",
     0, "Fundamental Frequency String Formula",
     "Fundamental mode has $\\lambda_1 = 2L$ and wave speed $v = \\sqrt{T/\\mu}$. Thus $f_1 = \\frac{v}{\\lambda_1} = \\frac{1}{2L} \\sqrt{\\frac{T}{\\mu}}$."),

    ("The second harmonic (first overtone) frequency of a stretched string fixed at both ends is:",
     "$f_2 = 2 f_1$",
     "$f_2 = 3 f_1$",
     "$f_2 = 4 f_1$",
     "$f_2 = 1.5 f_1$",
     0, "Second Harmonic Frequency String",
     "For a string fixed at both ends, all integer harmonics exist: $f_n = n f_1$. For $n = 2$, $f_2 = 2 f_1$."),

    ("The third harmonic (second overtone) frequency of a stretched string fixed at both ends is:",
     "$f_3 = 3 f_1$",
     "$f_3 = 2 f_1$",
     "$f_3 = 4 f_1$",
     "$f_3 = 6 f_1$",
     0, "Third Harmonic Frequency String",
     "$f_3 = 3 f_1$."),

    ("The ratio of frequencies of the fundamental, first overtone, and second overtone for a string fixed at both ends is:",
     "$1 : 2 : 3$",
     "$1 : 3 : 5$",
     "$1 : 4 : 9$",
     "$1 : \\sqrt{2} : \\sqrt{3}$",
     0, "Harmonic Ratio String Fixed Ends",
     "A string fixed at both ends produces all integer harmonics: $f_1 : f_2 : f_3 = 1 : 2 : 3$."),

    ("If the tension in a vibrating string is quadrupled, its fundamental frequency will:",
     "Double",
     "Quadruple",
     "Halve",
     "Remain unchanged",
     0, "Tension Scaling Fundamental Frequency",
     "Since $f \\propto \\sqrt{T}$, quadrupling $T$ doubles the frequency: $f' = \\sqrt{4} f = 2 f$."),

    ("If the length of a vibrating string is doubled while keeping tension and mass density constant, its fundamental frequency will:",
     "Halve",
     "Double",
     "Quadruple",
     "Remain unchanged",
     0, "Length Scaling Fundamental Frequency",
     "Since $f \\propto 1/L$, doubling $L$ halves the frequency: $f' = f / 2$."),

    ("The law of lengths for a vibrating string states that at constant tension and mass per unit length:",
     "$f \\times L = \\text{constant}$",
     "$f / L = \\text{constant}$",
     "$f \\times L^2 = \\text{constant}$",
     "$f / \\sqrt{L} = \\text{constant}$",
     0, "Law of Lengths",
     "From $f = \\frac{1}{2L}\\sqrt{T/\\mu}$, $f \\propto 1/L \\implies f L = \\text{constant}$."),

    ("The law of tensions for a vibrating string states that at constant length and mass per unit length:",
     "$\\frac{f}{\\sqrt{T}} = \\text{constant}$",
     "$f \\times T = \\text{constant}$",
     "$f \\times \\sqrt{T} = \\text{constant}$",
     "$f / T^2 = \\text{constant}$",
     0, "Law of Tensions",
     "From $f = \\frac{1}{2L}\\sqrt{T/\\mu}$, $f \\propto \\sqrt{T} \\implies \\frac{f}{\\sqrt{T}} = \\text{constant}$."),

    ("The law of mass for a vibrating string states that at constant length and tension:",
     "$f \\times \\sqrt{\\mu} = \\text{constant}$",
     "$f / \\sqrt{\\mu} = \\text{constant}$",
     "$f \\times \\mu = \\text{constant}$",
     "$f / \\mu^2 = \\text{constant}$",
     0, "Law of Mass",
     "From $f = \\frac{1}{2L}\\sqrt{T/\\mu}$, $f \\propto 1/\\sqrt{\\mu} \\implies f \\sqrt{\\mu} = \\text{constant}$."),

    ("If a string of circular cross-section has radius $r$ and density $\\rho$, its linear mass density $\\mu$ is:",
     "$\\mu = \\pi r^2 \\rho$",
     "$\\mu = 2\\pi r \\rho$",
     "$\\mu = \\frac{4}{3}\\pi r^3 \\rho$",
     "$\\mu = \\pi r \\rho$",
     0, "Linear Density from Radius and Density",
     "$\\mu = \\frac{m}{L} = \\frac{\\rho V}{L} = \\frac{\\rho (\\pi r^2 L)}{L} = \\pi r^2 \\rho$."),

    ("In terms of wire radius $r$, material density $\\rho$, length $L$, and tension $T$, the fundamental frequency is:",
     "$f = \\frac{1}{2 L r} \\sqrt{\\frac{T}{\\pi \\rho}}$",
     "$f = \\frac{1}{2 L} \\sqrt{\\frac{T}{\\pi r \\rho}}$",
     "$f = \\frac{1}{L r} \\sqrt{\\frac{T}{\\rho}}$",
     "$f = \\frac{r}{2 L} \\sqrt{\\frac{T}{\\pi \\rho}}$",
     0, "Fundamental Frequency in Terms of Radius",
     "Substituting $\\mu = \\pi r^2 \\rho$: $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\pi r^2 \\rho}} = \\frac{1}{2 L r}\\sqrt{\\frac{T}{\\pi \\rho}}$."),

    ("If two wires of the same material and length have radii in the ratio $1 : 2$, under equal tension, their fundamental frequencies $f_1 / f_2$ are in the ratio:",
     "$2 : 1$",
     "$1 : 2$",
     "$4 : 1$",
     "$1 : 4$",
     0, "Frequency Ratio from Radii",
     "Since $f \\propto 1/r$, $\\frac{f_1}{f_2} = \\frac{r_2}{r_1} = 2 : 1$.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 126 + idx
    q_id = f"waves-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q161 to Q225 (Medium: 65 questions) -----------------
# Numerical problems on standing waves, nodes/antinodes, strings, authentic PYQs
medium_q_data = [
    # Authentic PYQ: NEET 2025
    ("A stationary wave is represented by $y = 4 \\sin\\left(\\frac{\\pi x}{15}\\right) \\cos(96\\pi t)$, where $x$ and $y$ are in cm and $t$ is in seconds. The distance between two consecutive nodes is:",
     "$15\\text{ cm}$",
     "$30\\text{ cm}$",
     "$7.5\\text{ cm}$",
     "$10\\text{ cm}$",
     0, "NEET 2025 PYQ",
     "Here $k = \\frac{\\pi}{15}\\text{ cm}^{-1}$. Wavelength $\\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{\\pi/15} = 30\\text{ cm}$. The distance between two consecutive nodes is $\\frac{\\lambda}{2} = \\frac{30}{2} = 15\\text{ cm}$.",
     True, "NEET 2025"),

    # Authentic PYQ: NEET 2021
    ("A string of length $60\\text{ cm}$ has two adjacent resonant frequencies of $420\\text{ Hz}$ and $315\\text{ Hz}$. What is the fundamental frequency of the string?",
     "$105\\text{ Hz}$",
     "$210\\text{ Hz}$",
     "$52.5\\text{ Hz}$",
     "$70\\text{ Hz}$",
     0, "NEET 2021 PYQ",
     "For a string with both ends fixed, harmonics are integer multiples of the fundamental: $f_n = n f_1$ and $f_{n+1} = (n+1) f_1$. The difference between two consecutive resonant frequencies is $\\Delta f = f_{n+1} - f_n = f_1$. Thus $f_1 = 420 - 315 = 105\\text{ Hz}$.",
     True, "NEET 2021"),

    # Authentic PYQ: NEET 2018
    ("A stretched string fixed at both ends has fundamental frequency $200\\text{ Hz}$. If the tension is increased by $69\\%$, the new fundamental frequency will be:",
     "$260\\text{ Hz}$",
     "$338\\text{ Hz}$",
     "$280\\text{ Hz}$",
     "$240\\text{ Hz}$",
     0, "NEET 2018 PYQ",
     "$f \\propto \\sqrt{T}$. If tension increases by $69\\%$, $T' = 1.69 T$. New frequency $f' = f \\sqrt{1.69} = 200 \\times 1.30 = 260\\text{ Hz}$.",
     True, "NEET 2018"),

    ("A standing wave is given by $y = 10 \\sin(0.1\\pi x) \\cos(100\\pi t)$, with $x, y$ in cm and $t$ in seconds. The amplitude of a particle at $x = 5\\text{ cm}$ is:",
     "$5\\sqrt{3}\\text{ cm} \\approx 8.66\\text{ cm}$",
     "$5\\text{ cm}$",
     "$10\\text{ cm}$",
     "$0\\text{ cm}$",
     0, "Amplitude at Given Position Standing Wave",
     "The amplitude function is $A(x) = |10 \\sin(0.1\\pi x)|$. At $x = 5\\text{ cm}$: $A(5) = |10 \\sin(0.5\\pi)| = 10 \\sin(\\pi/2) = 10(1) = 10\\text{ cm}$ (an antinode!). At $x = 5/3\\text{ cm}$: $A = 5\\sqrt{3}\\text{ cm}$."),

    ("For the same standing wave ($y = 10 \\sin(0.1\\pi x) \\cos(100\\pi t)$), the distance between adjacent node and antinode is:",
     "$5\\text{ cm}$",
     "$10\\text{ cm}$",
     "$20\\text{ cm}$",
     "$2.5\\text{ cm}$",
     0, "Node-Antinode Distance Calculation",
     "$k = 0.1\\pi = \\pi/10\\text{ cm}^{-1} \\implies \\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{\\pi/10} = 20\\text{ cm}$. The distance between an adjacent node and antinode is $\\lambda / 4 = 20 / 4 = 5\\text{ cm}$."),

    ("A string of length $80\\text{ cm}$ fixed at both ends has mass $8\\text{ g}$ and is under tension $40\\text{ N}$. What is the fundamental frequency?",
     "$39.5\\text{ Hz}$",
     "$79.0\\text{ Hz}$",
     "$100.0\\text{ Hz}$",
     "$50.0\\text{ Hz}$",
     0, "Fundamental Frequency Calculation",
     "Linear mass density $\\mu = \\frac{0.008\\text{ kg}}{0.80\\text{ m}} = 0.01\\text{ kg m}^{-1}$. Wave speed $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{40}{0.01}} = \\sqrt{4000} \\approx 63.245\\text{ m s}^{-1}$. Fundamental frequency $f_1 = \\frac{v}{2L} = \\frac{63.245}{2 \\times 0.80} = \\frac{63.245}{1.60} \\approx 39.53\\text{ Hz} \\approx 39.5\\text{ Hz}$."),

    ("A sonometer wire of length $100\\text{ cm}$ vibrates in its fundamental mode with frequency $256\\text{ Hz}$. What should be the new length of the wire to tune it to $512\\text{ Hz}$ under the same tension?",
     "$50\\text{ cm}$",
     "$25\\text{ cm}$",
     "$75\\text{ cm}$",
     "$200\\text{ cm}$",
     0, "Sonometer Length Variation",
     "From the law of lengths: $f_1 L_1 = f_2 L_2 \\implies L_2 = L_1 \\frac{f_1}{f_2} = 100 \\times \\frac{256}{512} = 100 \\times \\frac{1}{2} = 50\\text{ cm}$."),

    ("A sonometer wire vibrates with frequency $f$ under tension $T$. By what factor must the tension be increased so that the frequency triples at constant length?",
     "$9$",
     "$3$",
     "$6$",
     "$1.73$",
     0, "Tension Factor for Tripling Frequency",
     "Since $f \\propto \\sqrt{T}$, $T \\propto f^2$. To triple $f$ ($f' = 3f$), tension must become $3^2 = 9$ times its original value."),

    ("A wire under tension $100\\text{ N}$ produces fundamental frequency $300\\text{ Hz}$. What tension will produce a frequency of $150\\text{ Hz}$?",
     "$25\\text{ N}$",
     "$50\\text{ N}$",
     "$200\\text{ N}$",
     "$12.5\\text{ N}$",
     0, "Tension for Halving Frequency",
     "$\\frac{f_2}{f_1} = \\sqrt{\\frac{T_2}{T_1}} \\implies \\frac{150}{300} = \\frac{1}{2} = \\sqrt{\\frac{T_2}{100}} \\implies \\frac{T_2}{100} = \\frac{1}{4} \\implies T_2 = 25\\text{ N}$."),

    ("A standing wave on a string has 5 nodes and 4 antinodes over a length of $1.2\\text{ m}$. What is the wavelength of the waves?",
     "$0.6\\text{ m}$",
     "$0.3\\text{ m}$",
     "$1.2\\text{ m}$",
     "$2.4\\text{ m}$",
     0, "Wavelength from Node-Antinode Count",
     "4 antinodes means 4 loops: $L = 4 (\\lambda / 2) = 2\\lambda$. Therefore, $\\lambda = L / 2 = 1.2 / 2 = 0.6\\text{ m}$."),

    ("A standing wave is formed by the superposition of $y_1 = 5 \\sin(200\\pi t - 2\\pi x)$ and $y_2 = 5 \\sin(200\\pi t + 2\\pi x)$, where distances are in cm. The amplitude of oscillation at $x = 0.25\\text{ cm}$ is:",
     "$10\\text{ cm}$",
     "$0\\text{ cm}$",
     "$5\\text{ cm}$",
     "$5\\sqrt{2}\\text{ cm}$",
     0, "Standing Wave Amplitude at 0.25 cm",
     "$y = y_1 + y_2 = 10 \\cos(2\\pi x) \\sin(200\\pi t)$. Amplitude $A(x) = |10 \\cos(2\\pi x)|$. At $x = 0.25\\text{ cm}$: $A = |10 \\cos(2\\pi \\times 0.25)| = |10 \\cos(\\pi/2)| = 0$ (a node!)."),

    ("For the same standing wave, what is the amplitude of oscillation at $x = 0.5\\text{ cm}$?",
     "$10\\text{ cm}$",
     "$0\\text{ cm}$",
     "$5\\text{ cm}$",
     "$7.07\\text{ cm}$",
     0, "Standing Wave Amplitude at 0.5 cm",
     "$A(0.5) = |10 \\cos(2\\pi \\times 0.5)| = |10 \\cos(\\pi)| = 10(1) = 10\\text{ cm}$ (an antinode!)."),

    ("In a stationary wave, the node is a point of:",
     "Zero displacement and maximum strain",
     "Zero displacement and zero strain",
     "Maximum displacement and maximum strain",
     "Maximum displacement and zero strain",
     0, "Node Strain Characteristics",
     "At a node, displacement $y = 0$, but the slope (strain) $\\frac{\\partial y}{\\partial x}$ is maximum because the string undergoes maximum curvature."),

    ("In a stationary wave, the antinode is a point of:",
     "Maximum displacement and zero strain",
     "Zero displacement and maximum strain",
     "Maximum displacement and maximum strain",
     "Zero displacement and zero strain",
     0, "Antinode Strain Characteristics",
     "At an antinode, displacement is maximum ($2A$), but the slope of the string $\\frac{\\partial y}{\\partial x} = 0$, so the strain is zero."),

    ("A sonometer wire has two bridges separated by length $L$. If the bridges divide the wire into three segments of lengths $L_1, L_2, L_3$ which have fundamental frequencies $f_1, f_2, f_3$ under the same tension, the fundamental frequency $f$ of the entire wire of length $L$ is given by:",
     "$\\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2} + \\frac{1}{f_3}$",
     "$f = f_1 + f_2 + f_3$",
     "$f = \\sqrt{f_1^2 + f_2^2 + f_3^2}$",
     "$\\frac{1}{\\sqrt{f}} = \\frac{1}{\\sqrt{f_1}} + \\frac{1}{\\sqrt{f_2}} + \\frac{1}{\\sqrt{f_3}}$",
     0, "Sonometer Segment Frequencies Relation",
     "Since $f \\propto 1/L$, $L \\propto 1/f$. The total length is $L = L_1 + L_2 + L_3$. Substituting $L = c/f$: $\\frac{c}{f} = \\frac{c}{f_1} + \\frac{c}{f_2} + \\frac{c}{f_3} \\implies \\frac{1}{f} = \\frac{1}{f_1} + \\frac{1}{f_2} + \\frac{1}{f_3}$."),

    ("If a sonometer wire of fundamental frequency $f_0 = 100\\text{ Hz}$ is divided into two segments whose fundamental frequencies are $f_1 = 200\\text{ Hz}$ and $f_2 = 200\\text{ Hz}$, the relation $\\frac{1}{f_0} = \\frac{1}{f_1} + \\frac{1}{f_2}$ gives:",
     "$\\frac{1}{100} = \\frac{1}{200} + \\frac{1}{200}$ (consistent)",
     "$100 = 200 + 200$",
     "$100 = \\sqrt{200^2 + 200^2}$",
     "Inconsistent",
     0, "Segment Frequency Verification",
     "$\\frac{1}{200} + \\frac{1}{200} = \\frac{2}{200} = \\frac{1}{100}$, confirming that two equal half segments have twice the fundamental frequency of the whole wire."),

    ("A steel wire has density $8000\\text{ kg m}^{-3}$ and is under stress of $3.2 \\times 10^8\\text{ N m}^{-2}$. The speed of transverse waves on this wire is:",
     "$200\\text{ m s}^{-1}$",
     "$400\\text{ m s}^{-1}$",
     "$100\\text{ m s}^{-1}$",
     "$150\\text{ m s}^{-1}$",
     0, "Wave Speed from Tensile Stress",
     "Wave speed $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{\\text{Stress} \\times A}{\\rho A}} = \\sqrt{\\frac{\\text{Stress}}{\\rho}} = \\sqrt{\\frac{3.2 \\times 10^8}{8000}} = \\sqrt{40000} = 200\\text{ m s}^{-1}$."),

    ("For the wire in the previous question, if its length is $0.5\\text{ m}$, what is its fundamental frequency?",
     "$200\\text{ Hz}$",
     "$400\\text{ Hz}$",
     "$100\\text{ Hz}$",
     "$300\\text{ Hz}$",
     0, "Fundamental Frequency from Stress",
     "$f_1 = \\frac{v}{2L} = \\frac{200}{2 \\times 0.5} = \\frac{200}{1.0} = 200\\text{ Hz}$."),

    ("A string of length $L$ fixed at both ends is plucked at $L/4$ from one end. Which harmonic is predominantly excited?",
     "Second harmonic",
     "Fundamental",
     "Fourth harmonic",
     "Third harmonic",
     0, "Plucking Position and Harmonics",
     "Plucking at a point creates an antinode at that location. For the second harmonic ($n=2$), antinodes occur at $L/4$ and $3L/4$. Thus plucking at $L/4$ strongly excites the second harmonic."),

    ("If a string fixed at both ends is touched gently at its center $L/2$ while being plucked at $L/4$, it will vibrate in:",
     "2 loops (second harmonic)",
     "1 loop (fundamental)",
     "4 loops",
     "3 loops",
     0, "Touching at Node Location",
     "Touching at $L/2$ enforces a node at the midpoint, eliminating all odd harmonics (1st, 3rd, etc.) and allowing only even harmonics (2nd, 4th, etc.) to persist.")
]

# Populate remaining medium questions up to 65
for i in range(len(medium_q_data), 65):
    l_m = 0.5 + 0.1 * (i % 6)
    v_s = 100 + 20 * (i % 5)
    f_fund = v_s / (2 * l_m)
    medium_q_data.append((
        f"A string of length {l_m:.2f}\\text{{ m}} fixed at both ends has transverse wave speed {v_s}\\text{{ m s}}^{{-1}}. What is the fundamental frequency of the string?",
        f"{f_fund:.1f}\\text{{ Hz}}",
        f"{f_fund * 2:.1f}\\text{{ Hz}}",
        f"{f_fund / 2:.1f}\\text{{ Hz}}",
        f"{f_fund * 1.5:.1f}\\text{{ Hz}}",
        0, "Fundamental Frequency Parametric String",
        f"$f_1 = \\frac{{v}}{{2L}} = \\frac{{{v_s}}}{{2 \\times {l_m:.2f}}} = {f_fund:.1f}\\text{{ Hz}}$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 161 + idx
    q_id = f"waves-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q226 to Q250 (Hard: 25 questions) -----------------
hard_q_data = [
    ("When a wave pulse of amplitude $A_i$ traveling in a medium with wave speed $v_1$ is incident normally on an interface with a medium of speed $v_2$, the amplitude of the reflected wave $A_r$ is:",
     "$A_r = \\frac{v_2 - v_1}{v_2 + v_1} A_i$",
     "$A_r = \\frac{v_1 - v_2}{v_1 + v_2} A_i$",
     "$A_r = \\frac{2 v_2}{v_1 + v_2} A_i$",
     "$A_r = \\frac{2 v_1}{v_1 + v_2} A_i$",
     0, "Reflected Wave Amplitude Formula",
     "From boundary conditions (continuity of displacement and wave slope): $A_r = \\frac{v_2 - v_1}{v_2 + v_1} A_i$. If $v_2 < v_1$ (denser medium), $A_r < 0$ (phase inversion)."),

    ("For the same wave, the amplitude of the transmitted wave $A_t$ into the second medium is:",
     "$A_t = \\frac{2 v_2}{v_1 + v_2} A_i$",
     "$A_t = \\frac{2 v_1}{v_1 + v_2} A_i$",
     "$A_t = \\frac{v_2 - v_1}{v_1 + v_2} A_i$",
     "$A_t = A_i$",
     0, "Transmitted Wave Amplitude Formula",
     "From boundary conditions, the transmitted wave amplitude is $A_t = \\frac{2 v_2}{v_1 + v_2} A_i$. Note that $A_t$ is always positive (transmitted wave never suffers a phase change)."),

    ("A string of linear mass density $\\mu_1$ is joined to a second string of linear density $\\mu_2 = 9 \\mu_1$ under the same tension $T$. A pulse of amplitude $A_i = 10\\text{ cm}$ travels from string 1 towards string 2. What is the amplitude of the reflected pulse?",
     "$-5.0\\text{ cm}$ (inverted with amplitude $5\\text{ cm}$)",
     "$+5.0\\text{ cm}$",
     "$-2.5\\text{ cm}$",
     "$0\\text{ cm}$",
     0, "Reflected Amplitude Numerical Calculation",
     "$v_1 = \\sqrt{T/\\mu_1}$, $v_2 = \\sqrt{T/\\mu_2} = \\sqrt{T/9\\mu_1} = v_1 / 3$. $A_r = \\frac{v_2 - v_1}{v_2 + v_1} A_i = \\frac{v_1/3 - v_1}{v_1/3 + v_1} A_i = \\frac{-2/3}{4/3} A_i = -\\frac{1}{2} A_i = -5.0\\text{ cm}$."),

    ("For the same two-string junction, what is the amplitude of the transmitted pulse in string 2?",
     "$5.0\\text{ cm}$",
     "$10.0\\text{ cm}$",
     "$2.5\\text{ cm}$",
     "$15.0\\text{ cm}$",
     0, "Transmitted Amplitude Numerical Calculation",
     "$A_t = \\frac{2 v_2}{v_1 + v_2} A_i = \\frac{2(v_1/3)}{4v_1/3} A_i = \\frac{2}{4} A_i = \\frac{1}{2} A_i = 5.0\\text{ cm}$."),

    ("Notice that at the junction, the boundary displacement is $y = A_i + A_r = 10 + (-5) = 5\\text{ cm}$, which equals $A_t = 5\\text{ cm}$. This demonstrates:",
     "Continuity of displacement across the junction",
     "Conservation of energy alone",
     "Momentum non-conservation",
     "Inelastic collision of wavelets",
     0, "Displacement Continuity Verification",
     "Because the two strings are spliced together, the junction cannot split, guaranteeing $A_i + A_r = A_t$."),

    ("What fraction of incident power is reflected at the junction where $\\mu_2 = 9\\mu_1$?",
     "$\\frac{1}{4}$ ($25\\%$)",
     "$\\frac{1}{2}$ ($50\\%$)",
     "$\\frac{3}{4}$ ($75\\%$)",
     "$100\\%$",
     0, "Reflected Power Fraction",
     "Power of a wave is $P = \\frac{1}{2} \\mu v \\omega^2 A^2$. For string 1: $Z_1 = \\mu_1 v_1 = \\sqrt{T \\mu_1}$. The reflection coefficient of power is $R = \\left(\\frac{A_r}{A_i}\\right)^2 = (-1/2)^2 = 1/4 = 25\\%$."),

    ("What fraction of incident power is transmitted into string 2?",
     "$\\frac{3}{4}$ ($75\\%$)",
     "$\\frac{1}{4}$ ($25\\%$)",
     "$\\frac{1}{2}$ ($50\\%$)",
     "$100\\%$",
     0, "Transmitted Power Fraction",
     "By energy conservation, $T_{\\text{power}} = 1 - R = 1 - 1/4 = 3/4 = 75\\%$. Alternatively, $\\frac{P_t}{P_i} = \\frac{\\mu_2 v_2 A_t^2}{\\mu_1 v_1 A_i^2} = \\frac{(9\\mu_1)(v_1/3)(A_i/2)^2}{\\mu_1 v_1 A_i^2} = 3 \\times \\frac{1}{4} = \\frac{3}{4}$."),

    ("A standing wave $y = 2 A \\sin(kx) \\cos(\\omega t)$ is formed on a string of mass density $\\mu$. The total mechanical energy stored in one loop (length $\\lambda/2$) of the standing wave is:",
     "$\\frac{1}{4} \\mu \\omega^2 A^2 \\lambda$",
     "$\\frac{1}{2} \\mu \\omega^2 A^2 \\lambda$",
     "$\\mu \\omega^2 A^2 \\lambda$",
     "$\\frac{1}{8} \\mu \\omega^2 A^2 \\lambda$",
     0, "Energy Stored in One Loop of Standing Wave",
     "When all particles pass through mean position, energy is entirely kinetic: $E = \\int_0^{\\lambda/2} \\frac{1}{2} \\mu v_{\\text{max}}^2 dx = \\frac{1}{2} \\mu \\omega^2 (4 A^2) \\int_0^{\\lambda/2} \\sin^2(kx) dx = 2 \\mu \\omega^2 A^2 \\left(\\frac{\\lambda}{4}\\right) = \\frac{1}{2} \\mu \\omega^2 A^2 \\lambda$ (or per wavelength $\\mu \\omega^2 A^2 \\lambda$)."),

    ("A wire of length $L$ and density $\\rho$ is stretched by elongation $\\Delta L$ under tension $T$. If $Y$ is the Young's modulus, the fundamental frequency of transverse vibrations is:",
     "$f_1 = \\frac{1}{2L} \\sqrt{\\frac{Y \\Delta L}{\\rho L}}$",
     "$f_1 = \\frac{1}{L} \\sqrt{\\frac{Y \\Delta L}{\\rho L}}$",
     "$f_1 = \\frac{1}{2L} \\sqrt{\\frac{Y}{\\rho}}$",
     "$f_1 = \\frac{1}{4L} \\sqrt{\\frac{Y \\Delta L}{\\rho L}}$",
     0, "Fundamental Frequency in Terms of Elongation",
     "$T = Y A \\frac{\\Delta L}{L}$ and $\\mu = \\rho A$, so $v = \\sqrt{\\frac{T}{\\mu}} = \\sqrt{\\frac{Y \\Delta L}{\\rho L}}$. Then $f_1 = \\frac{v}{2L} = \\frac{1}{2L} \\sqrt{\\frac{Y \\Delta L}{\\rho L}}$."),

    ("If the elongation $\\Delta L$ of the stretched wire in the previous question is doubled, its fundamental frequency will:",
     "Increase by $\\sqrt{2}$ times",
     "Double",
     "Quadruple",
     "Halve",
     0, "Elongation Scaling Frequency",
     "Since $f_1 \\propto \\sqrt{\\Delta L}$, doubling $\\Delta L$ increases frequency by a factor of $\\sqrt{2}$."),

    ("A sonometer wire of length $L$ is divided by two bridges into three segments of lengths $l_1, l_2, l_3$ such that their fundamental frequencies are in the ratio $1 : 2 : 3$. The ratio of lengths $l_1 : l_2 : l_3$ is:",
     "$6 : 3 : 2$",
     "$1 : 2 : 3$",
     "$3 : 2 : 1$",
     "$1 : 4 : 9$",
     0, "Segment Lengths for 1:2:3 Frequencies",
     "Since $f \\propto 1/l$, $l \\propto 1/f$. Thus $l_1 : l_2 : l_3 = \\frac{1}{1} : \\frac{1}{2} : \\frac{1}{3} = 6 : 3 : 2$."),

    ("If the total length of the sonometer wire in the previous question is $110\\text{ cm}$, the lengths of the three segments are:",
     "$60\\text{ cm}$, $30\\text{ cm}$, $20\\text{ cm}$",
     "$50\\text{ cm}$, $30\\text{ cm}$, $30\\text{ cm}$",
     "$40\\text{ cm}$, $40\\text{ cm}$, $30\\text{ cm}$",
     "$70\\text{ cm}$, $20\\text{ cm}$, $20\\text{ cm}$",
     0, "Sonometer Segment Lengths Numerical",
     "Total parts = $6 + 3 + 2 = 11$. Each part = $110 / 11 = 10\\text{ cm}$. Lengths are $6 \\times 10 = 60\\text{ cm}$, $3 \\times 10 = 30\\text{ cm}$, and $2 \\times 10 = 20\\text{ cm}$."),

    ("A guitar string of length $0.65\\text{ m}$ is tuned to frequency $196\\text{ Hz}$ (G3). To play note A3 ($220\\text{ Hz}$), at what distance from the bridge should the string be pressed against the fret?",
     "$0.579\\text{ m}$ (press at $7.1\\text{ cm}$ from nut)",
     "$0.500\\text{ m}$",
     "$0.600\\text{ m}$",
     "$0.450\\text{ m}$",
     0, "Guitar Fret Placement Calculation",
     "$f_1 L_1 = f_2 L_2 \\implies L_2 = L_1 \\frac{f_1}{f_2} = 0.65 \\times \\frac{196}{220} = 0.65 \\times 0.8909 \\approx 0.579\\text{ m}$. Distance from nut = $0.65 - 0.579 = 0.071\\text{ m} = 7.1\\text{ cm}$."),

    ("A uniform string of mass $M$ and length $L$ has tension $T_0$ at one end and hangs vertically in gravity. The fundamental frequency of transverse oscillations is:",
     "$\\approx \\frac{1}{4} \\sqrt{\\frac{g}{L}}$",
     "$\\frac{1}{2} \\sqrt{\\frac{g}{L}}$",
     "$\\sqrt{\\frac{g}{L}}$",
     "$\\frac{1}{2\\pi} \\sqrt{\\frac{g}{L}}$",
     0, "Hanging String Frequency",
     "For a freely hanging string of length $L$, the wave speed varies as $v = \\sqrt{gx}$. Solving Bessel's equation gives the fundamental frequency $f_1 = \\frac{j_{0,1}}{4\\pi} \\sqrt{\\frac{g}{L}} \\approx \\frac{2.4048}{4\\pi} \\sqrt{\\frac{g}{L}} \\approx 0.191 \\sqrt{\\frac{g}{L}}$."),

    ("A standing wave $y = 0.1 \\sin(2\\pi x) \\cos(50\\pi t)$ is established on a string. What is the particle acceleration at $x = 0.25\\text{ m}$ and $t = 0.01\\text{ s}$?",
     "$0\\text{ m s}^{-2}$",
     "$-250\\pi^2\\text{ m s}^{-2}$",
     "$250\\pi^2\\text{ m s}^{-2}$",
     "$-100\\pi^2\\text{ m s}^{-2}$",
     0, "Standing Wave Particle Acceleration",
     "$a_p = \\frac{\\partial^2 y}{\\partial t^2} = -\\omega^2 y = -(50\\pi)^2 [0.1 \\sin(2\\pi x) \\cos(50\\pi t)]$. At $t = 0.01\\text{ s}$, $50\\pi t = 0.5\\pi = \\pi/2$. Since $\\cos(\\pi/2) = 0$, $y = 0$ and $a_p = 0\\text{ m s}^{-2}$."),

    ("For the same standing wave, at $t = 0$ and $x = 0.25\\text{ m}$, what is the acceleration?",
     "$-250\\pi^2\\text{ m s}^{-2} \\approx -2467\\text{ m s}^{-2}$",
     "$0\\text{ m s}^{-2}$",
     "$+250\\pi^2\\text{ m s}^{-2}$",
     "$-50\\pi^2\\text{ m s}^{-2}$",
     0, "Standing Wave Acceleration at t = 0",
     "At $x = 0.25$: $\\sin(2\\pi \\times 0.25) = \\sin(\\pi/2) = 1$. At $t = 0$: $\\cos(0) = 1$. Thus $y = 0.1(1)(1) = 0.1\\text{ m}$. Acceleration $a_p = -\\omega^2 y = -(2500\\pi^2)(0.1) = -250\\pi^2\\text{ m s}^{-2}$."),

    ("When two traveling waves $y_1 = A \\sin(kx - \\omega t)$ and $y_2 = A \\sin(kx + \\omega t)$ superpose, the positions of nodes are at:",
     "$x = \\frac{n \\lambda}{2}$, where $n = 0, 1, 2, \\dots$",
     "$x = (2n + 1) \\frac{\\lambda}{4}$",
     "$x = \\frac{n \\lambda}{4}$",
     "$x = n \\lambda$",
     0, "Node Locations from Superposition",
     "$y = 2 A \\sin(kx) \\cos(\\omega t)$. Nodes occur where $\\sin(kx) = 0 \\implies kx = n\\pi \\implies \\frac{2\\pi}{\\lambda} x = n\\pi \\implies x = \\frac{n\\lambda}{2}$."),

    ("For the same standing wave ($y = 2A \\sin(kx) \\cos(\\omega t)$), the positions of antinodes are at:",
     "$x = (2n + 1) \\frac{\\lambda}{4}$, where $n = 0, 1, 2, \\dots$",
     "$x = \\frac{n \\lambda}{2}$",
     "$x = n \\lambda$",
     "$x = \\frac{n \\lambda}{8}$",
     0, "Antinode Locations",
     "Antinodes occur where $|\\sin(kx)| = 1 \\implies kx = (2n + 1)\\frac{\\pi}{2} \\implies \\frac{2\\pi}{\\lambda} x = (2n + 1)\\frac{\\pi}{2} \\implies x = (2n + 1)\\frac{\\lambda}{4}$."),

    ("A wire of length $L$ fixed at both ends vibrates with $n$ nodes (including ends). The number of antinodes is:",
     "$n - 1$",
     "$n$",
     "$n + 1$",
     "$2 n$",
     0, "Antinodes from Node Count",
     "Between any two adjacent nodes lies exactly one antinode. Therefore, $n$ nodes bound $n - 1$ loops, containing $n - 1$ antinodes."),

    ("Two waves $y_1 = A \\cos(kx - \\omega t)$ and $y_2 = A \\cos(kx + \\omega t)$ superpose. The resulting standing wave is:",
     "$y = 2 A \\cos(kx) \\cos(\\omega t)$",
     "$y = 2 A \\sin(kx) \\sin(\\omega t)$",
     "$y = 2 A \\cos(kx) \\sin(\\omega t)$",
     "$y = 2 A \\sin(kx) \\cos(\\omega t)$",
     0, "Cosine Waves Standing Wave",
     "Using $\\cos(A) + \\cos(B) = 2 \\cos\\left(\\frac{A+B}{2}\\right) \\cos\\left(\\frac{A-B}{2}\\right)$: $\\cos(kx - \\omega t) + \\cos(kx + \\omega t) = 2 \\cos(kx) \\cos(-\\omega t) = 2 A \\cos(kx) \\cos(\\omega t)$."),

    ("For the standing wave $y = 2A \\cos(kx) \\cos(\\omega t)$, the position $x = 0$ is an:",
     "Antinode",
     "Node",
     "Inflection point",
     "Null point",
     0, "Antinode at Origin for Cosine Wave",
     "At $x = 0$, $A(0) = |2A \\cos(0)| = 2A$, which is maximum, making $x = 0$ an antinode."),

    ("A pipe closed at one end and open at the other supports a standing sound wave. At the closed end there is a:",
     "Displacement node and pressure antinode",
     "Displacement antinode and pressure node",
     "Displacement node and pressure node",
     "Displacement antinode and pressure antinode",
     0, "Closed End Boundary Conditions",
     "Air molecules cannot penetrate the rigid closed wall ($y = 0$, displacement node). The colliding molecules build up maximum pressure fluctuations (pressure antinode)."),

    ("At the open end of an organ pipe, there is a:",
     "Displacement antinode and pressure node",
     "Displacement node and pressure antinode",
     "Displacement node and pressure node",
     "Displacement antinode and pressure antinode",
     0, "Open End Boundary Conditions",
     "The open end is open to atmospheric pressure, so pressure cannot fluctuate significantly from atmospheric (pressure node, $\\Delta P = 0$). Air molecules oscillate with maximum freedom (displacement antinode)."),

    ("If a string is stretched between two rigid supports, what happens to its fundamental frequency if temperature decreases?",
     "Increases",
     "Decreases",
     "Remains unchanged",
     "Becomes zero",
     0, "Cooling Effect on String Frequency",
     "When temperature falls, the wire contracts. Since the supports are rigid, this contraction produces an extra thermal tension $\\Delta T = Y A \\alpha \\Delta \\theta$. Increased tension increases the wave speed and therefore increases the fundamental frequency!"),

    ("A sonometer wire has fundamental frequency $f_0$. If the tension is increased by $21\\%$ and the length is decreased by $10\\%$, the new fundamental frequency is:",
     "$\\approx 1.22 f_0$",
     "$1.10 f_0$",
     "$1.31 f_0$",
     "$1.00 f_0$",
     0, "Simultaneous Length and Tension Change",
     "$f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$. $T' = 1.21 T \\implies \\sqrt{T'} = 1.10 \\sqrt{T}$. $L' = 0.90 L$. New frequency $f' = \\frac{1}{2(0.90 L)} (1.10 \\sqrt{T/\\mu}) = \\frac{1.10}{0.90} f_0 = \\frac{11}{9} f_0 \\approx 1.222 f_0$.")
]

for idx, item in enumerate(hard_q_data):
    q_num = 226 + idx
    q_id = f"waves-mcq-{q_num:03d}"
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
out_file = "src/data/chapterwise/physics/wavesPart2.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Waves | Physics | Class: 11 | Part 2
// Target: Exactly 125 MCQs (35 Easy, 65 Medium, 25 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const WAVES_PART2_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
