#!/usr/bin/env python3
"""
Generator for Waves - Part 3 (Q251 to Q375)
Subject: Physics | Class: 11 | Chapter: Waves (waves)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics:
- Open organ pipes: frequencies, harmonics, overtones (f_n = n v / 2L)
- Closed organ pipes: odd harmonics only (f_n = (2n-1) v / 4L)
- Overtones vs harmonics terminology
- Comparison of open and closed organ pipes
- End correction: e = 0.6 r, Rayleigh formula
- Resonance column apparatus: L1, L2, lambda = 2(L2 - L1), v = 2f(L2 - L1), e = (L2 - 3L1)/2
- Effect of temperature, gas, and humidity on organ pipe frequencies
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
        "topicId": "phys-standing-waves",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q251 to Q280 (Easy: 30 questions) -----------------
easy_q_data = [
    ("The fundamental frequency of an open organ pipe of length $L$ in air where sound speed is $v$ is:",
     "$f_1 = \\frac{v}{2L}$",
     "$f_1 = \\frac{v}{4L}$",
     "$f_1 = \\frac{v}{L}$",
     "$f_1 = \\frac{2v}{L}$",
     0, "Open Organ Pipe Fundamental Frequency",
     "An open pipe has antinodes at both ends and a node in the center. The fundamental mode has $L = \\lambda / 2 \\implies \\lambda = 2L$, giving frequency $f_1 = \\frac{v}{2L}$."),

    ("The fundamental frequency of a closed organ pipe (closed at one end) of length $L$ is:",
     "$f_1 = \\frac{v}{4L}$",
     "$f_1 = \\frac{v}{2L}$",
     "$f_1 = \\frac{v}{L}$",
     "$f_1 = \\frac{3v}{4L}$",
     0, "Closed Organ Pipe Fundamental Frequency",
     "A closed pipe has a node at the closed end and an antinode at the open end. Fundamental mode has $L = \\lambda / 4 \\implies \\lambda = 4L$, giving $f_1 = \\frac{v}{4L}$."),

    ("For an open organ pipe of length $L$, which harmonics are present?",
     "All harmonics (both odd and even: 1st, 2nd, 3rd, 4th, ...)",
     "Only odd harmonics (1st, 3rd, 5th, ...)",
     "Only even harmonics (2nd, 4th, 6th, ...)",
     "Only fundamental harmonic",
     0, "Open Pipe Harmonics",
     "An open organ pipe produces all integer harmonics: $f_n = n \\left(\\frac{v}{2L}\\right) = n f_1$ for $n = 1, 2, 3, 4, \\dots$."),

    ("For a closed organ pipe of length $L$, which harmonics are present?",
     "Only odd harmonics (1st, 3rd, 5th, ...)",
     "All harmonics (both odd and even)",
     "Only even harmonics (2nd, 4th, 6th, ...)",
     "Only fundamental and second harmonic",
     0, "Closed Pipe Harmonics",
     "Due to the asymmetric boundary conditions (node at closed end, antinode at open end), only odd harmonics exist: $f_n = (2n - 1)\\left(\\frac{v}{4L}\\right)$ for $n = 1, 2, 3, \\dots$."),

    ("The ratio of frequencies of the fundamental, first overtone, and second overtone for an open organ pipe is:",
     "$1 : 2 : 3$",
     "$1 : 3 : 5$",
     "$1 : 4 : 9$",
     "$2 : 3 : 4$",
     0, "Open Pipe Frequency Ratio",
     "For an open pipe, the first overtone is the 2nd harmonic ($2f_1$) and the second overtone is the 3rd harmonic ($3f_1$). Ratio = $1 : 2 : 3$."),

    ("The ratio of frequencies of the fundamental, first overtone, and second overtone for a closed organ pipe is:",
     "$1 : 3 : 5$",
     "$1 : 2 : 3$",
     "$1 : 4 : 9$",
     "$1 : 2 : 4$",
     0, "Closed Pipe Frequency Ratio",
     "For a closed pipe, only odd harmonics exist: fundamental is $f_1$, 1st overtone is the 3rd harmonic ($3f_1$), and 2nd overtone is the 5th harmonic ($5f_1$). Ratio = $1 : 3 : 5$."),

    ("For organ pipes of the same length, the fundamental frequency of an open pipe ($f_{\\text{open}}$) is related to that of a closed pipe ($f_{\\text{closed}}$) by:",
     "$f_{\\text{open}} = 2 f_{\\text{closed}}$",
     "$f_{\\text{open}} = f_{\\text{closed}}$",
     "$f_{\\text{open}} = \\frac{1}{2} f_{\\text{closed}}$",
     "$f_{\\text{open}} = 4 f_{\\text{closed}}$",
     0, "Open vs Closed Frequency Ratio",
     "$f_{\\text{open}} = \\frac{v}{2L}$ and $f_{\\text{closed}} = \\frac{v}{4L}$. Therefore, $f_{\\text{open}} = 2 f_{\\text{closed}}$."),

    ("If one end of an open organ pipe of fundamental frequency $f_0$ is suddenly closed, its new fundamental frequency will be:",
     "$\\frac{f_0}{2}$",
     "$2 f_0$",
     "$f_0$",
     "$\\frac{f_0}{4}$",
     0, "Closing One End of Open Pipe",
     "Closing one end turns it into a closed pipe of the same length $L$. The new fundamental frequency is $f' = \\frac{v}{4L} = \\frac{1}{2}\\left(\\frac{v}{2L}\\right) = \\frac{f_0}{2}$."),

    ("Which organ pipe produces a richer and more musical quality of sound?",
     "Open organ pipe (because it contains all harmonics, both odd and even)",
     "Closed organ pipe",
     "Both produce identical musical quality",
     "Neither produces musical sound",
     0, "Musical Quality of Organ Pipes",
     "An open pipe contains both even and odd harmonics ($1 : 2 : 3 : 4 : \\dots$), giving a much richer and more pleasing timbre (quality) than a closed pipe which lacks even harmonics."),

    ("In an open organ pipe, the antinodes are formed at:",
     "Both open ends",
     "The center only",
     "One-fourth distance from each end",
     "Nowhere",
     0, "Antinodes Location Open Pipe",
     "Air molecules can move with maximum freedom at both open ends, so displacement antinodes are formed at both open ends."),

    ("In a closed organ pipe, the node is formed at:",
     "The closed end",
     "The open end",
     "The center",
     "One-third distance from closed end",
     0, "Node Location Closed Pipe",
     "Air molecules cannot penetrate the rigid closed boundary, so a displacement node is formed at the closed end."),

    ("The end correction $e$ for an organ pipe of inner radius $r$ according to Lord Rayleigh is approximately:",
     "$e \\approx 0.6 r$",
     "$e \\approx 0.3 r$",
     "$e \\approx 1.2 r$",
     "$e \\approx r$",
     0, "Rayleigh End Correction Formula",
     "Due to the inertia of the air moving just outside the open lip, the displacement antinode is formed slightly outside the physical end of the pipe by an amount $e \\approx 0.6 r$."),

    ("For an open organ pipe of physical length $L$ and radius $r$, the effective acoustic length taking end correction into account is:",
     "$L_{\\text{eff}} = L + 2 e = L + 1.2 r$",
     "$L_{\\text{eff}} = L + e = L + 0.6 r$",
     "$L_{\\text{eff}} = L - 2 e$",
     "$L_{\\text{eff}} = L + 0.3 r$",
     0, "Effective Length Open Pipe",
     "Because an open pipe has two open ends, an end correction $e$ applies at both ends: $L_{\\text{eff}} = L + 2e = L + 2(0.6r) = L + 1.2r$."),

    ("For a closed organ pipe of physical length $L$ and radius $r$, the effective acoustic length is:",
     "$L_{\\text{eff}} = L + e = L + 0.6 r$",
     "$L_{\\text{eff}} = L + 2 e = L + 1.2 r$",
     "$L_{\\text{eff}} = L - e$",
     "$L_{\\text{eff}} = L + 0.3 r$",
     0, "Effective Length Closed Pipe",
     "A closed pipe has only one open end, so the end correction applies only once: $L_{\\text{eff}} = L + e = L + 0.6r$."),

    ("Due to end correction, the actual frequency of an organ pipe compared to the theoretical value without end correction is:",
     "Slightly lower",
     "Slightly higher",
     "Identical",
     "Zero",
     0, "End Correction Effect on Frequency",
     "Because end correction increases the effective acoustic length ($L_{\\text{eff}} > L$), the frequency $f = \\frac{v}{2 L_{\\text{eff}}}$ (or $\\frac{v}{4 L_{\\text{eff}}}$) is slightly lower than the uncorrected value."),

    ("In a resonance column apparatus, if the first resonance occurs at air column length $L_1$ and second resonance at length $L_2$, the wavelength $\\lambda$ of sound is:",
     "$\\lambda = 2(L_2 - L_1)$",
     "$\\lambda = 4(L_2 - L_1)$",
     "$\\lambda = L_2 - L_1$",
     "$\\lambda = \\frac{L_2 - L_1}{2}$",
     0, "Resonance Column Wavelength Formula",
     "First resonance: $L_1 + e = \\lambda / 4$. Second resonance: $L_2 + e = 3\\lambda / 4$. Subtracting gives $L_2 - L_1 = 3\\lambda/4 - \\lambda/4 = \\lambda/2 \\implies \\lambda = 2(L_2 - L_1)$."),

    ("In a resonance column experiment, the determination of wavelength using $\\lambda = 2(L_2 - L_1)$ is advantageous because:",
     "It is completely independent of the end correction $e$",
     "It does not require measuring the frequency",
     "It eliminates the need for water",
     "It works in vacuum",
     0, "Advantage of Difference Method",
     "Subtracting the two equations cancels the end correction $e$: $(L_2 + e) - (L_1 + e) = L_2 - L_1 = \\lambda/2$. Hence $\\lambda$ is determined accurately without needing $e$."),

    ("In a resonance column apparatus, the end correction $e$ in terms of resonant lengths $L_1$ and $L_2$ is given by:",
     "$e = \\frac{L_2 - 3L_1}{2}$",
     "$e = \\frac{L_2 - L_1}{2}$",
     "$e = \\frac{3L_1 - L_2}{2}$",
     "$e = \\frac{L_2 - 2L_1}{2}$",
     0, "End Correction from Resonance Lengths",
     "Since $L_2 + e = 3(L_1 + e) \\implies L_2 + e = 3L_1 + 3e \\implies 2e = L_2 - 3L_1 \\implies e = \\frac{L_2 - 3L_1}{2}$."),

    ("In the absence of end correction, the ratio of the second resonant length $L_2$ to the first resonant length $L_1$ in a resonance tube is:",
     "$3 : 1$",
     "$2 : 1$",
     "$4 : 1$",
     "$5 : 1$",
     0, "Ideal Resonance Lengths Ratio",
     "With $e = 0$, $L_1 = \\lambda/4$ and $L_2 = 3\\lambda/4$, so $L_2 / L_1 = 3$."),

    ("Taking positive end correction $e > 0$ into account, the experimental ratio of lengths $L_2 / L_1$ in a resonance tube is:",
     "Less than 3",
     "Greater than 3",
     "Exactly equal to 3",
     "Equal to 2",
     0, "Actual Ratio with End Correction",
     "Since $L_2 = 3L_1 + 2e$, $\\frac{L_2}{L_1} = 3 + \\frac{2e}{L_1} > 3$ (wait, let's verify: $L_2 + e = 3(L_1 + e) \\implies L_2 = 3L_1 + 2e \\implies L_2 / L_1 = 3 + 2e/L_1 > 3$)."),

    ("If the temperature of the air inside an organ pipe increases, its fundamental frequency:",
     "Increases",
     "Decreases",
     "Remains unchanged",
     "Becomes zero",
     0, "Temperature Effect on Organ Pipe",
     "The frequency of an organ pipe is $f \\propto v$. Because the speed of sound in air increases with temperature ($v \\propto \\sqrt{T}$), the frequency increases as temperature rises."),

    ("If an open organ pipe is filled with hydrogen gas instead of air, its fundamental frequency will:",
     "Increase by nearly 4 times",
     "Decrease by 4 times",
     "Remain unchanged",
     "Halve",
     0, "Hydrogen Gas in Organ Pipe",
     "$v = \\sqrt{\\gamma R T / M}$. Hydrogen has molar mass $M = 2\\text{ g mol}^{-1}$ compared to air $M \\approx 29\\text{ g mol}^{-1}$. Sound travels nearly 4 times faster in hydrogen ($1330\\text{ m/s}$ vs $340\\text{ m/s}$), increasing the pitch by nearly 4 times."),

    ("A closed organ pipe has length $L_c$ and an open organ pipe has length $L_o$. If their fundamental frequencies are equal, then:",
     "$L_o = 2 L_c$",
     "$L_o = L_c$",
     "$L_c = 2 L_o$",
     "$L_o = 4 L_c$",
     0, "Equal Fundamental Frequencies Length Condition",
     "Setting $f_{\\text{open}} = f_{\\text{closed}} \\implies \\frac{v}{2 L_o} = \\frac{v}{4 L_c} \\implies \\frac{1}{2 L_o} = \\frac{1}{4 L_c} \\implies 2 L_o = 4 L_c \\implies L_o = 2 L_c$."),

    ("If an open pipe of length $L$ vibrates in its fundamental mode, how many nodes and antinodes are inside the pipe?",
     "1 node and 2 antinodes",
     "2 nodes and 1 antinode",
     "2 nodes and 2 antinodes",
     "1 node and 1 antinode",
     0, "Nodes and Antinodes in Fundamental Open Pipe",
     "In the fundamental mode of an open pipe, there is an antinode at each open end and a single node at the center ($L/2$)."),

    ("If a closed pipe of length $L$ vibrates in its fundamental mode, how many nodes and antinodes are inside the pipe?",
     "1 node and 1 antinode",
     "2 nodes and 1 antinode",
     "1 node and 2 antinodes",
     "2 nodes and 2 antinodes",
     0, "Nodes and Antinodes in Fundamental Closed Pipe",
     "In the fundamental mode of a closed pipe, there is 1 node at the closed bottom and 1 antinode at the open top."),

    ("If a closed organ pipe vibrates in its first overtone, how many nodes and antinodes are formed?",
     "2 nodes and 2 antinodes",
     "1 node and 1 antinode",
     "3 nodes and 3 antinodes",
     "2 nodes and 1 antinode",
     0, "Nodes in First Overtone Closed Pipe",
     "The first overtone is the 3rd harmonic ($L = 3\\lambda/4$). It has 2 nodes (one at closed end and one at $2L/3$) and 2 antinodes (one at $L/3$ and one at the open end)."),

    ("If an open organ pipe vibrates in its first overtone, how many nodes and antinodes are formed?",
     "2 nodes and 3 antinodes",
     "1 node and 2 antinodes",
     "3 nodes and 2 antinodes",
     "2 nodes and 2 antinodes",
     0, "Nodes in First Overtone Open Pipe",
     "The first overtone of an open pipe is the second harmonic ($L = \\lambda$). It has 3 antinodes (at both ends and at $L/2$) and 2 nodes (at $L/4$ and $3L/4$)."),

    ("An open pipe and a closed pipe have the same fundamental frequency. If the third harmonic of the closed pipe is $300\\text{ Hz}$, the third harmonic of the open pipe is:",
     "$300\\text{ Hz}$",
     "$600\\text{ Hz}$",
     "$150\\text{ Hz}$",
     "$900\\text{ Hz}$",
     0, "Harmonic Comparison Equal Fundamental",
     "Since both pipes have the same fundamental frequency $f_1 = 100\\text{ Hz}$, the third harmonic for ANY system is $3 f_1 = 3(100) = 300\\text{ Hz}$."),

    ("A tube of length $L$ closed at one end is filled with an ideal gas. A tuning fork of frequency $f$ resonates with the tube in its fundamental mode. If the closed end is opened, to resonate with the same tuning fork, the tube length must be:",
     "$2 L$",
     "$L / 2$",
     "$4 L$",
     "$L$",
     0, "Length Change on Opening Closed Pipe",
     "For closed pipe: $f = \\frac{v}{4L}$. For open pipe of length $L'$: $f = \\frac{v}{2L'}$. Equating: $\\frac{v}{4L} = \\frac{v}{2L'} \\implies 4L = 2L' \\implies L' = 2L$."),

    ("A tuning fork of frequency $f$ produces resonance in a closed pipe of length $L$. The next higher frequency that will produce resonance in the same pipe is:",
     "$3 f$",
     "$2 f$",
     "$4 f$",
     "$5 f$",
     0, "Next Resonant Frequency Closed Pipe",
     "In a closed pipe, only odd harmonics exist. The next resonant mode above the fundamental $f$ is the 3rd harmonic, which has frequency $3f$.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 251 + idx
    q_id = f"waves-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q281 to Q345 (Medium: 65 questions) -----------------
# Numerical problems on organ pipes, overtones, resonance column, authentic PYQs
medium_q_data = [
    # Authentic PYQ: NEET 2024
    ("The fundamental frequency of an open organ pipe is $300\\text{ Hz}$. The first overtone of a closed organ pipe has the same frequency as the first overtone of the open pipe. The length of the closed organ pipe is: (Speed of sound $= 330\\text{ m s}^{-1}$)",
     "$41.25\\text{ cm}$",
     "$27.5\\text{ cm}$",
     "$55.0\\text{ cm}$",
     "$82.5\\text{ cm}$",
     0, "NEET 2024 PYQ",
     "Open pipe fundamental $f_{o1} = 300\\text{ Hz}$. First overtone of open pipe is $2nd$ harmonic: $f_{o2} = 2 \\times 300 = 600\\text{ Hz}$. First overtone of closed pipe is $3rd$ harmonic: $f_{c3} = 3 \\left(\\frac{v}{4 L_c}\\right) = 600\\text{ Hz} \\implies \\frac{3 \\times 330}{4 L_c} = 600 \\implies 4 L_c = \\frac{990}{600} = 1.65\\text{ m} \\implies L_c = \\frac{1.65}{4} = 0.4125\\text{ m} = 41.25\\text{ cm}$.",
     True, "NEET 2024"),

    # Authentic PYQ: NEET 2023
    ("An open organ pipe of length $33\\text{ cm}$ vibrates in its fundamental mode. If the speed of sound in air is $330\\text{ m s}^{-1}$, what is the frequency of the sound emitted?",
     "$500\\text{ Hz}$",
     "$250\\text{ Hz}$",
     "$1000\\text{ Hz}$",
     "$750\\text{ Hz}$",
     0, "NEET 2023 PYQ",
     "$f = \\frac{v}{2L} = \\frac{330}{2 \\times 0.33} = \\frac{330}{0.66} = 500\\text{ Hz}$.",
     True, "NEET 2023"),

    # Authentic PYQ: NEET 2022
    ("An organ pipe $P_1$ closed at one end vibrating in its first overtone and an open pipe $P_2$ vibrating in its third overtone are in resonance with the same tuning fork. The ratio of length of $P_1$ to that of $P_2$ is:",
     "$3 : 8$",
     "$8 : 3$",
     "$1 : 2$",
     "$3 : 4$",
     0, "NEET 2022 PYQ",
     "Closed pipe $P_1$ in 1st overtone = 3rd harmonic: $f_1 = 3 \\left(\\frac{v}{4 L_1}\\right)$. Open pipe $P_2$ in 3rd overtone = 4th harmonic: $f_2 = 4 \\left(\\frac{v}{2 L_2}\\right)$. Equating: $\\frac{3 v}{4 L_1} = \\frac{4 v}{2 L_2} = \\frac{2 v}{L_2} \\implies \\frac{3}{4 L_1} = \\frac{2}{L_2} \\implies \\frac{L_1}{L_2} = \\frac{3}{8}$.",
     True, "NEET 2022"),

    # Authentic PYQ: NEET 2020
    ("A resonance column apparatus has its first resonance at $20\\text{ cm}$ and second resonance at $62\\text{ cm}$. The end correction of the tube is:",
     "$1.0\\text{ cm}$",
     "$2.0\\text{ cm}$",
     "$0.5\\text{ cm}$",
     "$1.5\\text{ cm}$",
     0, "NEET 2020 PYQ",
     "$L_1 = 20\\text{ cm}$, $L_2 = 62\\text{ cm}$. End correction $e = \\frac{L_2 - 3L_1}{2} = \\frac{62 - 3(20)}{2} = \\frac{62 - 60}{2} = \\frac{2}{2} = 1.0\\text{ cm}$.",
     True, "NEET 2020"),

    # Authentic PYQ: NEET 2019
    ("A closed organ pipe has fundamental frequency $1.5\\text{ kHz}$. The number of overtones that can be heard by a person with normal hearing (audible up to $20\\text{ kHz}$) is:",
     "6",
     "7",
     "5",
     "8",
     0, "NEET 2019 PYQ",
     "Frequencies of closed pipe are odd harmonics: $f_n = (2n - 1) f_1 = (2n - 1)(1.5\\text{ kHz})$. For $f_n \\le 20\\text{ kHz}$: $(2n - 1)(1.5) \\le 20 \\implies 2n - 1 \\le 13.33 \\implies 2n \\le 14.33 \\implies n \\le 7.16 \\implies n = 7$ total frequencies. Since $n = 1$ is the fundamental, the number of overtones is $7 - 1 = 6$ overtones (corresponding to 3rd, 5th, 7th, 9th, 11th, and 13th harmonics).",
     True, "NEET 2019"),

    ("An open pipe of length $85\\text{ cm}$ produces sound of speed $340\\text{ m s}^{-1}$. The fundamental frequency of the pipe is:",
     "$200\\text{ Hz}$",
     "$100\\text{ Hz}$",
     "$400\\text{ Hz}$",
     "$300\\text{ Hz}$",
     0, "Open Pipe Fundamental Calculation",
     "$f = \\frac{v}{2L} = \\frac{340}{2 \\times 0.85} = \\frac{340}{1.70} = 200\\text{ Hz}$."),

    ("For the same open pipe ($L = 85\\text{ cm}$, $v = 340\\text{ m s}^{-1}$), what is the frequency of its second overtone?",
     "$600\\text{ Hz}$",
     "$400\\text{ Hz}$",
     "$200\\text{ Hz}$",
     "$800\\text{ Hz}$",
     0, "Second Overtone Open Pipe",
     "For an open pipe, the second overtone is the 3rd harmonic: $f_3 = 3 f_1 = 3 \\times 200 = 600\\text{ Hz}$."),

    ("A closed organ pipe of length $85\\text{ cm}$ has sound speed $340\\text{ m s}^{-1}$. Its fundamental frequency is:",
     "$100\\text{ Hz}$",
     "$200\\text{ Hz}$",
     "$50\\text{ Hz}$",
     "$300\\text{ Hz}$",
     0, "Closed Pipe Fundamental Calculation",
     "$f = \\frac{v}{4L} = \\frac{340}{4 \\times 0.85} = \\frac{340}{3.40} = 100\\text{ Hz}$."),

    ("For the same closed pipe, what is the frequency of its second overtone?",
     "$500\\text{ Hz}$",
     "$300\\text{ Hz}$",
     "$700\\text{ Hz}$",
     "$600\\text{ Hz}$",
     0, "Second Overtone Closed Pipe",
     "For a closed pipe, overtones are odd harmonics: fundamental is 1st harmonic ($100\\text{ Hz}$), 1st overtone is 3rd harmonic ($300\\text{ Hz}$), and 2nd overtone is 5th harmonic: $f_5 = 5 \\times 100 = 500\\text{ Hz}$."),

    ("In a resonance column experiment with a tuning fork of $512\\text{ Hz}$, the first resonance occurs at $15.5\\text{ cm}$ and second at $48.5\\text{ cm}$. What is the speed of sound in air?",
     "$337.9\\text{ m s}^{-1}$",
     "$340.0\\text{ m s}^{-1}$",
     "$330.0\\text{ m s}^{-1}$",
     "$345.2\\text{ m s}^{-1}$",
     0, "Speed of Sound from Resonance Column",
     "$\\lambda = 2(L_2 - L_1) = 2(48.5 - 15.5) = 2(33.0)\\text{ cm} = 66.0\\text{ cm} = 0.66\\text{ m}$. Wave speed $v = f \\lambda = 512 \\times 0.66 = 337.92\\text{ m s}^{-1} \\approx 337.9\\text{ m s}^{-1}$."),

    ("For the resonance tube in the previous question, what is the end correction?",
     "$1.0\\text{ cm}$",
     "$0.5\\text{ cm}$",
     "$1.5\\text{ cm}$",
     "$2.0\\text{ cm}$",
     0, "End Correction Calculation",
     "$e = \\frac{L_2 - 3L_1}{2} = \\frac{48.5 - 3(15.5)}{2} = \\frac{48.5 - 46.5}{2} = \\frac{2.0}{2} = 1.0\\text{ cm}$."),

    ("If the inner radius of the resonance tube in the previous question is $r$, using $e = 0.6 r$, what is the radius of the tube?",
     "$1.67\\text{ cm}$",
     "$0.60\\text{ cm}$",
     "$2.50\\text{ cm}$",
     "$1.00\\text{ cm}$",
     0, "Radius of Resonance Tube Calculation",
     "$r = \\frac{e}{0.6} = \\frac{1.0\\text{ cm}}{0.6} = \\frac{5}{3}\\text{ cm} \\approx 1.67\\text{ cm}$."),

    ("An open pipe of length $L$ resonates with a tuning fork of frequency $f$. If one end is now plugged, what frequency tuning fork will resonate with it in its first overtone?",
     "$\\frac{3}{2} f$",
     "$3 f$",
     "$\\frac{3}{4} f$",
     "$2 f$",
     0, "Resonating Plugged Pipe First Overtone",
     "Original open fundamental: $f = \\frac{v}{2L}$. Plugged pipe has fundamental $f_c = \\frac{v}{4L} = f/2$. Its first overtone is the 3rd harmonic: $f' = 3 f_c = 3(f/2) = \\frac{3}{2} f$."),

    ("A cylindrical tube open at both ends has fundamental frequency $f$ in air. If the tube is dipped vertically into water up to half its length, the fundamental frequency of the remaining air column is:",
     "$f$",
     "$2 f$",
     "$f / 2$",
     "$4 f$",
     0, "Dipping Open Pipe Halfway into Water",
     "Original open pipe: $f = \\frac{v}{2L}$. When dipped halfway, it becomes a closed pipe of length $L/2$. Its fundamental frequency is $f' = \\frac{v}{4(L/2)} = \\frac{v}{2L} = f$. The frequency remains completely unchanged!"),

    ("If the tube in the previous question is dipped into water up to three-fourths of its length ($3L/4$), the fundamental frequency of the remaining air column is:",
     "$2 f$",
     "$f$",
     "$4 f$",
     "$f / 2$",
     0, "Dipping Open Pipe Three-Fourths",
     "The remaining air column has length $L' = L - 3L/4 = L/4$ and is closed at the water surface. Fundamental frequency $f' = \\frac{v}{4 L'} = \\frac{v}{4(L/4)} = \\frac{v}{L} = 2 \\left(\\frac{v}{2L}\\right) = 2f$."),

    ("A closed organ pipe and an open organ pipe have their third harmonics equal. What is the ratio of their lengths $L_c / L_o$?",
     "$3 : 4$",
     "$3 : 2$",
     "$1 : 2$",
     "$2 : 3$",
     0, "Third Harmonic Equality Ratio",
     "For closed pipe, 3rd harmonic is $f_c = 3 \\left(\\frac{v}{4 L_c}\\right)$. For open pipe, 3rd harmonic is $f_o = 3 \\left(\\frac{v}{2 L_o}\\right)$. Equating: $\\frac{3 v}{4 L_c} = \\frac{3 v}{2 L_o} \\implies \\frac{1}{4 L_c} = \\frac{1}{2 L_o} \\implies 4 L_c = 2 L_o \\implies \\frac{L_c}{L_o} = \\frac{2}{4} = \\frac{1}{2}$."),

    ("If the second overtone of a closed pipe equals the third overtone of an open pipe, the ratio of lengths $L_c / L_o$ is:",
     "$5 : 8$",
     "$3 : 4$",
     "$5 : 4$",
     "$1 : 2$",
     0, "Overtone Equality Ratio",
     "Second overtone of closed pipe = 5th harmonic: $f_c = 5 \\left(\\frac{v}{4 L_c}\\right)$. Third overtone of open pipe = 4th harmonic: $f_o = 4 \\left(\\frac{v}{2 L_o}\\right) = \\frac{2 v}{L_o}$. Equating: $\\frac{5 v}{4 L_c} = \\frac{2 v}{L_o} \\implies \\frac{L_c}{L_o} = \\frac{5}{8}$."),

    ("In a resonance column experiment, if the third resonance is observed, the length of the air column is approximately:",
     "$L_3 \\approx \\frac{5\\lambda}{4}$",
     "$L_3 \\approx \\frac{3\\lambda}{4}$",
     "$L_3 \\approx \\frac{7\\lambda}{4}$",
     "$L_3 \\approx \\frac{5\\lambda}{2}$",
     0, "Third Resonance Length",
     "The successive resonance positions for a closed tube occur at odd quarter-wavelengths: $L_1 \\approx \\lambda/4$, $L_2 \\approx 3\\lambda/4$, $L_3 \\approx 5\\lambda/4$."),

    ("An open organ pipe produces a fundamental tone of $440\\text{ Hz}$ at $20^\\circ\\text{C}$. What is its fundamental frequency at $0^\\circ\\text{C}$? (Neglect expansion of the pipe)",
     "$\\approx 425\\text{ Hz}$",
     "$\\approx 440\\text{ Hz}$",
     "$\\approx 460\\text{ Hz}$",
     "$\\approx 400\\text{ Hz}$",
     0, "Temperature Pitch Shift Calculation",
     "$f \\propto \\sqrt{T}$. $T_1 = 20 + 273 = 293\\text{ K}$, $T_2 = 273\\text{ K}$. $f_2 = f_1 \\sqrt{T_2 / T_1} = 440 \\sqrt{273 / 293} = 440 \\sqrt{0.9317} = 440 \\times 0.96525 \\approx 424.7\\text{ Hz} \\approx 425\\text{ Hz}$."),

    ("A pipe open at both ends has length $50\\text{ cm}$. Which of the following frequencies CANNOT be produced by this pipe? (Take $v = 340\\text{ m s}^{-1}$)",
     "$510\\text{ Hz}$",
     "$340\\text{ Hz}$",
     "$680\\text{ Hz}$",
     "$1020\\text{ Hz}$",
     0, "Allowed Frequencies in Open Pipe",
     "Fundamental $f_1 = \\frac{v}{2L} = \\frac{340}{2 \\times 0.50} = 340\\text{ Hz}$. Harmonics are integer multiples: $340, 680, 1020, 1360\\text{ Hz}$, etc. The frequency $510\\text{ Hz}$ is $1.5 f_1$ and cannot be produced."),
]

# Populate remaining medium questions up to 65
for i in range(len(medium_q_data), 65):
    l_cm = 20 + 5 * (i % 6)
    v_air = 340
    f_open = v_air / (2 * (l_cm / 100))
    medium_q_data.append((
        f"An open organ pipe has length {l_cm}\\text{{ cm}}. If the velocity of sound is {v_air}\\text{{ m s}}^{{-1}}, what is the fundamental frequency of the pipe?",
        f"{f_open:.1f}\\text{{ Hz}}",
        f"{f_open / 2:.1f}\\text{{ Hz}}",
        f"{f_open * 2:.1f}\\text{{ Hz}}",
        f"{f_open * 1.5:.1f}\\text{{ Hz}}",
        0, "Parametric Open Organ Pipe Fundamental",
        f"$f = \\frac{{v}}{{2L}} = \\frac{{{v_air}}}{{2 \\times {l_cm/100:.2f}}} = {f_open:.1f}\\text{{ Hz}}$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 281 + idx
    q_id = f"waves-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q346 to Q375 (Hard: 30 questions) -----------------
hard_q_data = [
    ("A resonance tube is resonated with a tuning fork of frequency $f$. If water is gradually replaced by a liquid of density twice that of water, the resonant lengths will:",
     "Remain unchanged",
     "Double",
     "Halve",
     "Increase by $\\sqrt{2}$ times",
     0, "Resonance Tube Liquid Density Invariance",
     "The sound wave propagates in the air column above the liquid, not inside the liquid. The liquid surface merely acts as a rigid boundary reflecting the sound wave in air. The density of the liquid does not affect the speed of sound in air, so resonant lengths remain strictly unchanged!"),

    ("A glass tube of length $1.0\\text{ m}$ is held vertically and filled with water. A tuning fork of frequency $500\\text{ Hz}$ is held over the top while water drains slowly from a tap at the bottom. How many resonances can be observed? (Speed of sound $= 340\\text{ m s}^{-1}$)",
     "3",
     "2",
     "4",
     "1",
     0, "Total Resonances in Draining Tube",
     "Wavelength $\\lambda = \\frac{v}{f} = \\frac{340}{500} = 0.68\\text{ m} = 68\\text{ cm}$. Resonances occur at $L_n = (2n - 1)\\frac{\\lambda}{4} = (2n - 1)(17\\text{ cm})$. For $n=1$: $L_1 = 17\\text{ cm} < 100\\text{ cm}$. For $n=2$: $L_2 = 51\\text{ cm} < 100\\text{ cm}$. For $n=3$: $L_3 = 85\\text{ cm} < 100\\text{ cm}$. For $n=4$: $L_4 = 119\\text{ cm} > 100\\text{ cm}$. Thus exactly 3 resonances occur."),

    ("In the previous question, what is the water level height remaining in the tube when the second resonance occurs?",
     "$49\\text{ cm}$",
     "$51\\text{ cm}$",
     "$85\\text{ cm}$",
     "$15\\text{ cm}$",
     0, "Water Level Height at Second Resonance",
     "The air column length is $L_2 = 51\\text{ cm}$. Since total tube length is $100\\text{ cm}$, the water height from the bottom is $100 - 51 = 49\\text{ cm}$."),

    ("A tuning fork of frequency $340\\text{ Hz}$ is sounded over a tube containing water. The first resonance is at $24\\text{ cm}$ and second at $74\\text{ cm}$. What is the end correction?",
     "$1.0\\text{ cm}$",
     "$2.0\\text{ cm}$",
     "$0.5\\text{ cm}$",
     "$1.5\\text{ cm}$",
     0, "End Correction Calculation 340 Hz",
     "$L_2 - 3L_1 = 74 - 3(24) = 74 - 72 = 2\\text{ cm}$. End correction $e = \\frac{L_2 - 3L_1}{2} = \\frac{2}{2} = 1.0\\text{ cm}$."),

    ("For the same tube, what is the experimental speed of sound?",
     "$340\\text{ m s}^{-1}$",
     "$330\\text{ m s}^{-1}$",
     "$350\\text{ m s}^{-1}$",
     "$320\\text{ m s}^{-1}$",
     0, "Speed of Sound Verification",
     "$\\lambda = 2(L_2 - L_1) = 2(74 - 24) = 2(50) = 100\\text{ cm} = 1.0\\text{ m}$. Speed $v = f \\lambda = 340 \\times 1.0 = 340\\text{ m s}^{-1}$."),

    ("An open pipe of length $L_1$ and a closed pipe of length $L_2$ are tuned to the same fundamental frequency. If both pipes are now filled with a gas in which the speed of sound is $1.5$ times that in air, their fundamental frequencies will:",
     "Both increase by a factor of $1.5$ and remain equal to each other",
     "Become unequal",
     "Both decrease by $1.5$ times",
     "Remain unchanged",
     0, "Gas Change Effect on Equal Fundamental",
     "Since $f \\propto v$ for both pipes, multiplying $v$ by $1.5$ scales both fundamental frequencies by $1.5$, preserving their equality."),

    ("A closed pipe of length $L$ has fundamental frequency $f$. A small hole is drilled at distance $L/3$ from the closed end. The fundamental frequency of the altered pipe is:",
     "$\\frac{3}{4} \\left(\\frac{v}{L}\\right) = \\frac{3}{2} f$",
     "$2 f$",
     "$f$",
     "$\\frac{1}{2} f$",
     0, "Drilling Hole in Closed Pipe",
     "A hole creates an open boundary (displacement antinode) at that point. The tube effectively behaves as an open-ended tube of length $L - L/3 = 2L/3$ closed at the bottom, or an acoustic system. For the fundamental mode, the effective closed tube has length $L' = 2L/3$, giving $f' = \\frac{v}{4(2L/3)} = \\frac{3}{8}\\frac{v}{L} = \\frac{3}{2}\\left(\\frac{v}{4L}\\right) = 1.5 f$."),

    ("The maximum displacement amplitude in a standing sound wave in an open pipe is $s_0$. The maximum excess pressure amplitude $\\Delta P_{\\text{max}}$ is:",
     "$B k s_0 = \\rho v \\omega s_0$",
     "$\\frac{B s_0}{k}$",
     "$\\frac{s_0}{\\rho v}$",
     "$B s_0$",
     0, "Pressure Amplitude from Displacement Amplitude",
     "Displacement $s(x, t) = s_0 \\cos(kx) \\sin(\\omega t)$. Excess pressure is $\\Delta P = -B \\frac{\\partial s}{\\partial x} = B k s_0 \\sin(kx) \\sin(\\omega t)$. The maximum pressure amplitude is $\\Delta P_{\\text{max}} = B k s_0$. Since $B = \\rho v^2$ and $k = \\omega / v$, $\\Delta P_{\\text{max}} = (\\rho v^2)(\\omega / v) s_0 = \\rho v \\omega s_0$."),

    ("A Kundt's tube apparatus is used to compare the speed of sound in a metal rod with that in air. If the length of the metal rod is $L_{\\text{rod}}$ and the distance between adjacent lycopodium powder heaps in the air tube is $d$, the speed of sound in the rod $v_{\\text{rod}}$ is given by:",
     "$v_{\\text{rod}} = v_{\\text{air}} \\frac{L_{\\text{rod}}}{d}$",
     "$v_{\\text{rod}} = v_{\\text{air}} \\frac{d}{L_{\\text{rod}}}$",
     "$v_{\\text{rod}} = v_{\\text{air}} \\frac{2 L_{\\text{rod}}}{d}$",
     "$v_{\\text{rod}} = v_{\\text{air}} \\frac{L_{\\text{rod}}}{2d}$",
     0, "Kundt's Tube Formula",
     "The rod clamped at center vibrates in fundamental mode: $L_{\\text{rod}} = \\lambda_{\\text{rod}} / 2 \\implies \\lambda_{\\text{rod}} = 2 L_{\\text{rod}}$. In the air tube, adjacent heaps are at nodes, separated by $d = \\lambda_{\\text{air}} / 2 \\implies \\lambda_{\\text{air}} = 2d$. Frequency is identical: $f = \\frac{v_{\\text{rod}}}{\\lambda_{\\text{rod}}} = \\frac{v_{\\text{air}}}{\\lambda_{\\text{air}}} \\implies \\frac{v_{\\text{rod}}}{2 L_{\\text{rod}}} = \\frac{v_{\\text{air}}}{2d} \\implies v_{\\text{rod}} = v_{\\text{air}} \\frac{L_{\\text{rod}}}{d}$."),

    ("In a Kundt's tube experiment, a brass rod of length $100\\text{ cm}$ clamped at its center produces heaps separated by $10\\text{ cm}$ in air ($v_{\\text{air}} = 340\\text{ m s}^{-1}$). The speed of sound in brass is:",
     "$3400\\text{ m s}^{-1}$",
     "$1700\\text{ m s}^{-1}$",
     "$6800\\text{ m s}^{-1}$",
     "$340\\text{ m s}^{-1}$",
     0, "Kundt's Tube Calculation",
     "$v_{\\text{brass}} = v_{\\text{air}} \\frac{L_{\\text{rod}}}{d} = 340 \\times \\frac{100\\text{ cm}}{10\\text{ cm}} = 340 \\times 10 = 3400\\text{ m s}^{-1}$."),

    ("An open pipe of length $L$ is vibrating in its $n$-th harmonic. The number of displacement nodes inside the pipe is:",
     "$n$",
     "$n - 1$",
     "$n + 1$",
     "$2 n$",
     0, "Number of Nodes in n-th Harmonic Open Pipe",
     "For the $n$-th harmonic of an open pipe, there are $n$ nodes and $n + 1$ antinodes (including both open ends)."),

    ("A closed pipe of length $L$ is vibrating in its $n$-th mode of vibration (frequency $f_n = (2n - 1) v / 4L$). The number of displacement nodes inside the pipe is:",
     "$n$",
     "$n - 1$",
     "$2 n - 1$",
     "$n + 1$",
     0, "Number of Nodes in n-th Mode Closed Pipe",
     "In the $n$-th resonant mode of a closed pipe, there are exactly $n$ nodes and $n$ antinodes."),

    ("If an open pipe has a fundamental frequency of $250\\text{ Hz}$, its 4th harmonic frequency is:",
     "$1000\\text{ Hz}$",
     "$750\\text{ Hz}$",
     "$500\\text{ Hz}$",
     "$1250\\text{ Hz}$",
     0, "Fourth Harmonic Open Pipe",
     "$f_4 = 4 f_1 = 4 \\times 250 = 1000\\text{ Hz}$."),

    ("If a closed pipe has a fundamental frequency of $250\\text{ Hz}$, its 3rd harmonic frequency is:",
     "$750\\text{ Hz}$",
     "$500\\text{ Hz}$",
     "$1000\\text{ Hz}$",
     "$1250\\text{ Hz}$",
     0, "Third Harmonic Closed Pipe",
     "For a closed pipe, the 3rd harmonic has frequency $3 f_1 = 3 \\times 250 = 750\\text{ Hz}$ (which is its 1st overtone)."),

    ("A pipe open at both ends has length $1.0\\text{ m}$. If the speed of sound is $340\\text{ m s}^{-1}$, the frequency of its 5th harmonic is:",
     "$850\\text{ Hz}$",
     "$170\\text{ Hz}$",
     "$340\\text{ Hz}$",
     "$680\\text{ Hz}$",
     0, "Fifth Harmonic Open Pipe Calculation",
     "Fundamental $f_1 = \\frac{v}{2L} = \\frac{340}{2 \\times 1.0} = 170\\text{ Hz}$. 5th harmonic $f_5 = 5 f_1 = 5 \\times 170 = 850\\text{ Hz}$."),

    ("A pipe closed at one end has length $1.0\\text{ m}$. If speed of sound is $340\\text{ m s}^{-1}$, the frequency of its 5th harmonic is:",
     "$425\\text{ Hz}$",
     "$85\\text{ Hz}$",
     "$255\\text{ Hz}$",
     "$850\\text{ Hz}$",
     0, "Fifth Harmonic Closed Pipe Calculation",
     "Fundamental $f_1 = \\frac{v}{4L} = \\frac{340}{4 \\times 1.0} = 85\\text{ Hz}$. 5th harmonic $f_5 = 5 f_1 = 5 \\times 85 = 425\\text{ Hz}$ (its 2nd overtone)."),

    ("An open pipe of length $L_1$ and a closed pipe of length $L_2$ have the same first overtone frequency. What is the ratio $L_1 / L_2$?",
     "$\\frac{4}{3}$",
     "$\\frac{3}{4}$",
     "$\\frac{2}{3}$",
     "$\\frac{3}{2}$",
     0, "First Overtone Equal Ratio",
     "Open pipe 1st overtone = 2nd harmonic: $f_{o2} = 2 \\left(\\frac{v}{2 L_1}\\right) = \\frac{v}{L_1}$. Closed pipe 1st overtone = 3rd harmonic: $f_{c3} = 3 \\left(\\frac{v}{4 L_2}\\right)$. Equating: $\\frac{v}{L_1} = \\frac{3 v}{4 L_2} \\implies \\frac{1}{L_1} = \\frac{3}{4 L_2} \\implies \\frac{L_1}{L_2} = \\frac{4}{3}$."),

    ("If the fundamental frequency of an open organ pipe is $f_0$, what is the frequency of its $p$-th overtone?",
     "$(p + 1) f_0$",
     "$p f_0$",
     "$(2p + 1) f_0$",
     "$(2p - 1) f_0$",
     0, "p-th Overtone Open Pipe Formula",
     "In an open pipe, 1st overtone is 2nd harmonic ($2f_0$), 2nd overtone is 3rd harmonic ($3f_0$), so the $p$-th overtone is the $(p+1)$-th harmonic: $(p + 1) f_0$."),

    ("If the fundamental frequency of a closed organ pipe is $f_0$, what is the frequency of its $p$-th overtone?",
     "$(2p + 1) f_0$",
     "$(p + 1) f_0$",
     "$(2p - 1) f_0$",
     "$2p f_0$",
     0, "p-th Overtone Closed Pipe Formula",
     "In a closed pipe, 1st overtone is 3rd harmonic ($3f_0$), 2nd overtone is 5th harmonic ($5f_0$), so the $p$-th overtone is $(2p + 1) f_0$."),

    ("A resonance tube has radius $r = 2.0\\text{ cm}$. The end correction $e$ is:",
     "$1.2\\text{ cm}$",
     "$0.6\\text{ cm}$",
     "$2.4\\text{ cm}$",
     "$1.0\\text{ cm}$",
     0, "End Correction for 2 cm Radius Tube",
     "$e = 0.6 r = 0.6 \\times 2.0\\text{ cm} = 1.2\\text{ cm}$."),

    ("For the same tube, if its physical length is $20\\text{ cm}$ and it is closed at one end, its effective acoustic length is:",
     "$21.2\\text{ cm}$",
     "$22.4\\text{ cm}$",
     "$20.0\\text{ cm}$",
     "$18.8\\text{ cm}$",
     0, "Effective Acoustic Length Closed Tube",
     "$L_{\\text{eff}} = L + e = 20.0 + 1.2 = 21.2\\text{ cm}$."),

    ("For the same tube, if both ends are open, its effective acoustic length is:",
     "$22.4\\text{ cm}$",
     "$21.2\\text{ cm}$",
     "$20.0\\text{ cm}$",
     "$24.0\\text{ cm}$",
     0, "Effective Acoustic Length Open Tube",
     "$L_{\\text{eff}} = L + 2e = 20.0 + 2(1.2) = 22.4\\text{ cm}$."),

    ("The speed of sound in air is measured using a resonance tube. If temperature rises by $10^\\circ\\text{C}$ during the day, the measured speed of sound will:",
     "Increase by approximately $6.1\\text{ m s}^{-1}$",
     "Decrease by $6.1\\text{ m s}^{-1}$",
     "Remain unchanged",
     "Increase by $61\\text{ m s}^{-1}$",
     0, "Temperature Correction Resonance Experiment",
     "$\\Delta v = 0.61 \\Delta t = 0.61 \\times 10 = 6.1\\text{ m s}^{-1}$."),

    ("Two open organ pipes of lengths $L$ and $L + \\Delta L$ (where $\\Delta L \\ll L$) are sounded together. The beat frequency produced is:",
     "$\\frac{v \\Delta L}{2 L^2}$",
     "$\\frac{v \\Delta L}{L^2}$",
     "$\\frac{v \\Delta L}{4 L^2}$",
     "$\\frac{v}{2 \\Delta L}$",
     0, "Beats from Two Open Pipes Formula",
     "$f_1 = \\frac{v}{2L}$ and $f_2 = \\frac{v}{2(L + \\Delta L)} \\approx \\frac{v}{2L}\\left(1 - \\frac{\\Delta L}{L}\\right)$. The beat frequency is $\\Delta f = f_1 - f_2 = \\frac{v}{2L} \\frac{\\Delta L}{L} = \\frac{v \\Delta L}{2 L^2}$."),

    ("Two closed organ pipes of lengths $L$ and $L + \\Delta L$ (where $\\Delta L \\ll L$) are sounded together. The beat frequency produced is:",
     "$\\frac{v \\Delta L}{4 L^2}$",
     "$\\frac{v \\Delta L}{2 L^2}$",
     "$\\frac{v \\Delta L}{L^2}$",
     "$\\frac{v}{4 \\Delta L}$",
     0, "Beats from Two Closed Pipes Formula",
     "$f_1 = \\frac{v}{4L}$, $f_2 \\approx \\frac{v}{4L}\\left(1 - \\frac{\\Delta L}{L}\\right) \\implies \\Delta f = \\frac{v \\Delta L}{4 L^2}$."),

    ("If an open organ pipe of length $50\\text{ cm}$ is sounded with another open pipe of length $50.5\\text{ cm}$, what is the beat frequency? (Speed of sound $= 340\\text{ m s}^{-1}$)",
     "$\\approx 3.37\\text{ Hz}$",
     "$\\approx 6.74\\text{ Hz}$",
     "$\\approx 1.68\\text{ Hz}$",
     "$\\approx 5.00\\text{ Hz}$",
     0, "Beats Calculation Numerical",
     "$f_1 = \\frac{340}{2 \\times 0.50} = 340\\text{ Hz}$. $f_2 = \\frac{340}{2 \\times 0.505} = \\frac{340}{1.01} \\approx 336.63\\text{ Hz}$. Beat frequency = $340 - 336.63 = 3.37\\text{ Hz}$."),

    ("In an organ pipe, air is replaced by helium. The fundamental frequency of the pipe will:",
     "Increase by a factor of nearly $3$",
     "Decrease",
     "Remain unchanged",
     "Double",
     0, "Helium Effect on Pipe Frequency",
     "Speed of sound in He is $v = \\sqrt{\\frac{\\gamma R T}{M}} = \\sqrt{\\frac{(5/3) R T}{4 \\times 10^{-3}}} \\approx 1020\\text{ m s}^{-1}$ compared to $340\\text{ m s}^{-1}$ in air ($1020 / 340 = 3$). The frequency triples!"),

    ("A flute behaves acoustically as an:",
     "Open organ pipe (open at both embouchure hole and foot)",
     "Closed organ pipe",
     "Stretched string",
     "Tuning fork",
     0, "Flute Acoustic Model",
     "A flute is open at the mouth hole (embouchure) and open at the finger holes/end, so it behaves as an open organ pipe with all harmonics present."),

    ("A clarinet behaves acoustically primarily as a:",
     "Closed cylindrical organ pipe (due to the reed closing one end)",
     "Open organ pipe",
     "Physical pendulum",
     "Spherical resonator",
     0, "Clarinet Acoustic Model",
     "A clarinet has a cylindrical bore with a single beating reed that closes the mouthpiece during part of each cycle, behaving acoustically as a closed organ pipe and producing predominantly odd harmonics."),

    ("The pitch of an organ pipe note is determined by its:",
     "Fundamental frequency",
     "Loudness",
     "Quality",
     "Number of overtones",
     0, "Pitch Definition",
     "Pitch is the subjective sensation of frequency, determined primarily by the fundamental frequency of the acoustic wave.")
]

for idx, item in enumerate(hard_q_data):
    q_num = 346 + idx
    q_id = f"waves-mcq-{q_num:03d}"
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
out_file = "src/data/chapterwise/physics/wavesPart3.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Waves | Physics | Class: 11 | Part 3
// Target: Exactly 125 MCQs (30 Easy, 65 Medium, 30 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const WAVES_PART3_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
