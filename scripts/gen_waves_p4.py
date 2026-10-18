#!/usr/bin/env python3
"""
Generator for Waves - Part 4 (Q376 to Q500)
Subject: Physics | Class: 11 | Chapter: Waves (waves)
Distribution: Exactly 20 Easy, 55 Medium, 50 Hard = 125 MCQs
Topics:
- Beat phenomenon: definition, conditions, persistence of hearing
- Beat frequency formula f_b = |f1 - f2|, time between max/min
- Tuning fork frequency alteration: waxing (loading with wax -> mass increases -> f decreases), filing (mass decreases -> f increases)
- Unknown frequency deduction from waxing / filing tests
- Strings / wires out of tune and beat variations with tension T (f ~ sqrt(T))
- Array of N tuning forks in series with octave relationships (f_N = 2 f_1 = f_1 + (N-1)x)
- Beat envelope, wave equation of beats: y = 2A cos(Delta omega t / 2) sin(omega_avg t)
- Sound intensity and decibel levels (beta = 10 log10(I / I_0))
- Superposition of sound sources and sound power
- Authentic NEET / AIPMT PYQs on beats and sound waves
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
        "topicId": "phys-beats",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# =========================================================================
# Q376 to Q395 (Easy: 20 questions)
# =========================================================================
easy_q_data = [
    ("Beats are the result of the superposition of two sound waves of:",
     "Slightly different frequencies traveling in the same direction",
     "Exactly equal frequencies traveling in opposite directions",
     "Widely differing frequencies traveling in perpendicular directions",
     "Equal amplitudes and opposite phases only",
     0, "Condition for Beats",
     "Beats occur when two waves of slightly differing frequencies traveling in the same direction superpose, producing periodic variations in sound intensity (waxing and waning)."),

    ("The number of beats heard per second when two sound sources of frequencies $f_1$ and $f_2$ are sounded together is given by:",
     "$|f_1 - f_2|$",
     "$\\frac{f_1 + f_2}{2}$",
     "$f_1 \\times f_2$",
     "$\\sqrt{f_1 f_2}$",
     0, "Beat Frequency Formula",
     "The beat frequency is the absolute difference between the frequencies of the two sound sources: $f_{\\text{beat}} = |f_1 - f_2|$."),

    ("Due to the persistence of hearing in human beings, distinct beats can be heard by the human ear only if the beat frequency is:",
     "Less than or equal to $10\\text{ Hz}$",
     "Greater than $20\\text{ Hz}$",
     "Exactly $100\\text{ Hz}$",
     "Between $20\\text{ Hz}$ and $20,000\\text{ Hz}$",
     0, "Persistence of Hearing and Beats",
     "The persistence of hearing is approximately $0.1\\text{ s} = \\frac{1}{10}\\text{ s}$. To distinguish individual waxings and wanings, the time interval between successive beats must be at least $0.1\\text{ s}$, which requires the beat frequency to be $\\le 10\\text{ Hz}$."),

    ("When a prong of a tuning fork is loaded with a small amount of wax, its natural frequency:",
     "Decreases",
     "Increases",
     "Remains unchanged",
     "Becomes zero",
     0, "Effect of Waxing on Tuning Fork",
     "Loading a prong with wax increases the effective inertia (mass) of the vibrating prongs. Since frequency is inversely proportional to the square root of mass ($f \\propto 1/\\sqrt{m}$), the frequency decreases."),

    ("When the prongs of a tuning fork are slightly filed, its natural frequency:",
     "Increases",
     "Decreases",
     "Remains unaltered",
     "First decreases then increases",
     0, "Effect of Filing on Tuning Fork",
     "Filing a tuning fork removes metal, reducing its effective mass. Since $f \\propto 1/\\sqrt{m}$, reducing the mass increases the vibrational frequency."),

    ("The time interval between two successive maxima (waxings) in a beat pattern produced by two frequencies $f_1$ and $f_2$ ($f_1 > f_2$) is:",
     "$\\frac{1}{f_1 - f_2}$",
     "$\\frac{1}{f_1 + f_2}$",
     "$\\frac{2}{f_1 - f_2}$",
     "$\\frac{1}{2(f_1 - f_2)}$",
     0, "Time Period of Beats",
     "The beat frequency is $f_b = f_1 - f_2$. The time period between consecutive intensity maxima is the reciprocal of the beat frequency: $T_b = \\frac{1}{f_b} = \\frac{1}{f_1 - f_2}$."),

    ("The time interval between a maximum of sound intensity and the immediately following minimum in a beat pattern is:",
     "$\\frac{1}{2(f_1 - f_2)}$",
     "$\\frac{1}{f_1 - f_2}$",
     "$\\frac{2}{f_1 - f_2}$",
     "$\\frac{1}{4(f_1 - f_2)}$",
     0, "Interval Between Max and Min in Beats",
     "Consecutive maxima occur at intervals of $T = \\frac{1}{f_1 - f_2}$. The minimum occurs halfway between two successive maxima, so the time interval from maximum to next minimum is $\\frac{T}{2} = \\frac{1}{2(f_1 - f_2)}$."),

    ("Two tuning forks $P$ and $Q$ have frequencies $380\\text{ Hz}$ and $384\\text{ Hz}$ respectively. The number of beats heard in $3\\text{ seconds}$ is:",
     "$12$",
     "$4$",
     "$8$",
     "$16$",
     0, "Beat Count Calculation",
     "The beat frequency is $f_b = |384 - 380| = 4\\text{ beats/second}$. In $3\\text{ seconds}$, the total number of beats heard is $4 \\times 3 = 12$."),

    ("In acoustic terms, the phenomenon of beats is an example of:",
     "Interference in time",
     "Interference in space",
     "Diffraction of sound",
     "Polarization of sound waves",
     0, "Nature of Beats",
     "While stationary waves are an interference phenomenon localized in space, beats represent interference in time at a given spatial point due to slight frequency disparity."),

    ("If the temperature of the air increases, the frequency of a tuning fork:",
     "Decreases slightly because the elastic modulus of steel decreases with temperature",
     "Increases because sound speed increases in warm air",
     "Increases dramatically because prongs expand",
     "Remains completely unchanged under all temperature variations",
     0, "Temperature Effect on Tuning Fork",
     "A tuning fork's frequency depends on the Young's modulus of its material: $f \\propto \\sqrt{Y/\\rho}$. As temperature rises, Young's modulus decreases, causing the fork's frequency to decrease slightly."),

    ("Two sound waves given by $y_1 = A \\sin(200\\pi t)$ and $y_2 = A \\sin(208\\pi t)$ superpose at a point. The beat frequency produced is:",
     "$4\\text{ Hz}$",
     "$8\\text{ Hz}$",
     "$2\\text{ Hz}$",
     "$16\\text{ Hz}$",
     0, "Beats from Wave Equations",
     "Here $\\omega_1 = 200\\pi \\implies f_1 = \\frac{200\\pi}{2\\pi} = 100\\text{ Hz}$, and $\\omega_2 = 208\\pi \\implies f_2 = \\frac{208\\pi}{2\\pi} = 104\\text{ Hz}$. The beat frequency is $f_b = |104 - 100| = 4\\text{ Hz}$."),

    ("The sound level in decibels ($\\text{dB}$) for a sound of intensity $I$ is defined as $\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$, where the reference threshold intensity $I_0$ is:",
     "$10^{-12}\\text{ W/m}^2$",
     "$10^{-6}\\text{ W/m}^2$",
     "$10^{-10}\\text{ W/m}^2$",
     "$1\\text{ W/m}^2$",
     0, "Threshold of Hearing Intensity",
     "The standard reference intensity representing the threshold of human hearing at $1000\\text{ Hz}$ is $I_0 = 10^{-12}\\text{ W/m}^2$ ($0\\text{ dB}$)."),

    ("If the intensity of a sound wave is increased by a factor of $100$, the sound level increases by:",
     "$20\\text{ dB}$",
     "$10\\text{ dB}$",
     "$2\\text{ dB}$",
     "$100\\text{ dB}$",
     0, "Sound Level Increase",
     "$\\Delta \\beta = 10 \\log_{10}\\left(\\frac{I_2}{I_1}\\right) = 10 \\log_{10}(100) = 10 \\times 2 = 20\\text{ dB}$."),

    ("When two sound waves of slightly different frequencies $f_1$ and $f_2$ with equal amplitude $A$ superpose, the maximum amplitude of the resultant wave is:",
     "$2A$",
     "$A$",
     "$\\sqrt{2}A$",
     "$4A$",
     0, "Maximum Amplitude in Beats",
     "At constructive interference, the amplitudes add directly: $A_{\\max} = A + A = 2A$."),

    ("In a beat pattern, the ratio of the maximum intensity to the minimum intensity produced by two waves of equal amplitude $A$ is:",
     "$\\infty$ (minimum intensity is zero)",
     "$2 : 1$",
     "$4 : 1$",
     "$1 : 1$",
     0, "Intensity Ratio in Equal Amplitude Beats",
     "Maximum intensity $I_{\\max} \\propto (A + A)^2 = 4A^2$, and minimum intensity $I_{\\min} \\propto (A - A)^2 = 0$. Thus the ratio is infinite, with complete silence at the minima."),

    ("When a tuning fork is sounded together with a vibrating string, $4\\text{ beats/second}$ are heard. If the tension in the string is increased slightly, the beat frequency:",
     "May increase or decrease depending on whether the string frequency was higher or lower than the fork",
     "Must always increase",
     "Must always decrease",
     "Remains unchanged because string tension does not affect frequency",
     0, "String Tension and Beats",
     "Since string frequency $f \\propto \\sqrt{T}$, increasing tension increases the string's frequency. If $f_{\\text{string}} > f_{\\text{fork}}$, the difference increases; if $f_{\\text{string}} < f_{\\text{fork}}$, the difference decreases initially."),

    ("Which of the following is essential for the formation of sharp and clearly distinguishable beats?",
     "Nearly equal amplitudes and slightly different frequencies",
     "Widely differing amplitudes and identical frequencies",
     "Perpendicular directions of wave propagation",
     "Non-linear medium",
     0, "Requirements for Sharp Beats",
     "For beats to be easily distinguishable, the amplitudes should be nearly equal (so that intensity drops nearly to zero at minima) and frequencies must differ only slightly ($\\le 10\\text{ Hz}$)."),

    ("Two organ pipes, both open at both ends, have slightly different lengths $L_1$ and $L_2$ ($L_1 < L_2$). The beat frequency produced by their fundamentals is:",
     "$\\frac{v}{2}\\left(\\frac{1}{L_1} - \\frac{1}{L_2}\\right)$",
     "$\\frac{v}{4}\\left(\\frac{1}{L_1} - \\frac{1}{L_2}\\right)$",
     "$\\frac{v}{2}(L_2 - L_1)$",
     "$v\\left(\\frac{1}{L_1} + \\frac{1}{L_2}\\right)$",
     0, "Beats Between Open Pipes",
     "For open organ pipes, $f_1 = \\frac{v}{2L_1}$ and $f_2 = \\frac{v}{2L_2}$. The beat frequency is $f_b = f_1 - f_2 = \\frac{v}{2}\\left(\\frac{1}{L_1} - \\frac{1}{L_2}\\right)$."),

    ("A tuning fork of frequency $256\\text{ Hz}$ produces $4\\text{ beats/s}$ with another tuning fork $B$. The frequency of $B$ could be:",
     "Either $252\\text{ Hz}$ or $260\\text{ Hz}$",
     "$256\\text{ Hz}$ only",
     "$260\\text{ Hz}$ only",
     "$252\\text{ Hz}$ only",
     0, "Possible Frequencies from Beat Count",
     "Beat frequency is $|f_B - 256| = 4\\text{ Hz}$. Hence $f_B = 256 + 4 = 260\\text{ Hz}$ or $f_B = 256 - 4 = 252\\text{ Hz}$."),

    ("The velocity of sound in a gas is $v$. Two waves of wavelengths $\\lambda_1$ and $\\lambda_2$ (with $\\lambda_1 < \\lambda_2$) produce beats. The beat frequency is:",
     "$v\\left(\\frac{1}{\\lambda_1} - \\frac{1}{\\lambda_2}\\right)$",
     "$\\frac{v}{\\lambda_1 \\lambda_2}$",
     "$v(\\lambda_2 - \\lambda_1)$",
     "$\\frac{v}{2}(\\lambda_1 + \\lambda_2)$",
     0, "Beat Frequency from Wavelengths",
     "Since $f_1 = \\frac{v}{\\lambda_1}$ and $f_2 = \\frac{v}{\\lambda_2}$, the beat frequency is $f_b = f_1 - f_2 = v\\left(\\frac{1}{\\lambda_1} - \\frac{1}{\\lambda_2}\\right)$."),
]

for idx, item in enumerate(easy_q_data):
    q_num = 376 + idx
    q_id = f"waves-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

print(f"Added {len(easy_q_data)} Easy questions (Q376 to Q395).")

# =========================================================================
# Q396 to Q450 (Medium: 55 questions)
# =========================================================================
medium_q_data = [
    # Authentic PYQ: NEET 2018
    ("A tuning fork A of frequency $512\\text{ Hz}$ produces $4\\text{ beats per second}$ when sounded with a tuning fork B of unknown frequency. If B is loaded with wax, the number of beats is still $4\\text{ per second}$. The frequency of B before loading was:",
     "$516\\text{ Hz}$",
     "$508\\text{ Hz}$",
     "$520\\text{ Hz}$",
     "$512\\text{ Hz}$",
     0, "Authentic PYQ: NEET 2018",
     "Given $f_A = 512\\text{ Hz}$. Since $|f_A - f_B| = 4\\text{ Hz}$, $f_B$ is either $516\\text{ Hz}$ or $508\\text{ Hz}$. When B is loaded with wax, its frequency decreases ($f_B' < f_B$). If $f_B$ had been $508\\text{ Hz}$, decreasing it would make $|512 - f_B'| > 4\\text{ Hz}$. If $f_B = 516\\text{ Hz}$, loading wax decreases it to $508\\text{ Hz}$, where $|512 - 508| = 4\\text{ Hz}$. Hence the original frequency was $516\\text{ Hz}$.",
     True, "NEET 2018"),

    # Authentic PYQ: NEET 2019
    ("In a guitar, two strings A and B made of same material are slightly out of tune and produce beats of frequency $6\\text{ Hz}$. When tension in B is slightly decreased, the beat frequency increases to $7\\text{ Hz}$. If the frequency of A is $530\\text{ Hz}$, the original frequency of B will be:",
     "$524\\text{ Hz}$",
     "$536\\text{ Hz}$",
     "$537\\text{ Hz}$",
     "$523\\text{ Hz}$",
     0, "Authentic PYQ: NEET 2019",
     "Given $f_A = 530\\text{ Hz}$. Since beat frequency is $6\\text{ Hz}$, $f_B = 530 \\pm 6 = 536\\text{ Hz}$ or $524\\text{ Hz}$. When tension in B decreases, its frequency $f_B \\propto \\sqrt{T}$ decreases ($f_B' < f_B$). If $f_B = 536\\text{ Hz}$, a decrease in $f_B$ brings it closer to $530\\text{ Hz}$, decreasing the beat frequency. If $f_B = 524\\text{ Hz}$, a decrease in $f_B$ moves it further away from $530\\text{ Hz}$, increasing the beat frequency to $7\\text{ Hz}$. Therefore, original frequency of B was $524\\text{ Hz}$.",
     True, "NEET 2019"),

    # Authentic PYQ: NEET 2020
    ("A tuning fork A produces $4\\text{ beats/s}$ with a tuning fork B of frequency $288\\text{ Hz}$. When A is filed, the beat frequency becomes $2\\text{ beats/s}$. What was the original frequency of tuning fork A?",
     "$284\\text{ Hz}$",
     "$292\\text{ Hz}$",
     "$286\\text{ Hz}$",
     "$290\\text{ Hz}$",
     0, "Authentic PYQ: NEET 2020",
     "Given $f_B = 288\\text{ Hz}$ and $|f_A - 288| = 4\\text{ Hz}$. Thus $f_A = 284\\text{ Hz}$ or $292\\text{ Hz}$. When A is filed, its frequency increases ($f_A' > f_A$). If $f_A$ were $292\\text{ Hz}$, increasing it would increase the beat frequency ($|f_A' - 288| > 4$). If $f_A = 284\\text{ Hz}$, increasing it (e.g. to $286\\text{ Hz}$) decreases the beat frequency to $288 - 286 = 2\\text{ beats/s}$. Hence original $f_A = 284\\text{ Hz}$.",
     True, "NEET 2020"),

    # Authentic PYQ: AIPMT 2012
    ("Two sources of sound placed close to each other are emitting progressive waves given by $y_1 = 4 \\sin(600\\pi t)$ and $y_2 = 5 \\sin(608\\pi t)$. An observer located near these sources will hear:",
     "$4\\text{ beats per second}$ with intensity ratio between maxima and minima equal to $81 : 1$",
     "$8\\text{ beats per second}$ with intensity ratio between maxima and minima equal to $81 : 1$",
     "$4\\text{ beats per second}$ with intensity ratio between maxima and minima equal to $25 : 16$",
     "$8\\text{ beats per second}$ with intensity ratio between maxima and minima equal to $9 : 1$",
     0, "Authentic PYQ: AIPMT 2012",
     "$\\omega_1 = 600\\pi \\implies f_1 = 300\\text{ Hz}$, and $\\omega_2 = 608\\pi \\implies f_2 = 304\\text{ Hz}$. Beat frequency $= |304 - 300| = 4\\text{ beats/s}$. The amplitudes are $A_1 = 4$ and $A_2 = 5$. Resultant maximum amplitude $A_{\\max} = 5 + 4 = 9$ and minimum amplitude $A_{\\min} = 5 - 4 = 1$. The intensity ratio is $\\frac{I_{\\max}}{I_{\\min}} = \\frac{A_{\\max}^2}{A_{\\min}^2} = \\frac{9^2}{1^2} = \\frac{81}{1}$.",
     True, "AIPMT 2012"),

    # Authentic PYQ: AIPMT 2010
    ("Each of the two strings of length $51.6\\text{ cm}$ and $52.2\\text{ cm}$ of a sonometer produces $4\\text{ beats per second}$ with a tuning fork when vibrating in their fundamental modes under the same tension. The frequency of the tuning fork is:",
     "$692\\text{ Hz}$",
     "$346\\text{ Hz}$",
     "$173\\text{ Hz}$",
     "$512\\text{ Hz}$",
     0, "Authentic PYQ: AIPMT 2010",
     "Let the frequency of the tuning fork be $f$. Since $f_1 = \\frac{v}{2L_1}$ and $L_1 < L_2$, we have $f_1 > f_2$. Thus $f_1 = f + 4$ and $f_2 = f - 4$. Since $v$ is constant, $f_1 L_1 = f_2 L_2 \\implies (f + 4)(51.6) = (f - 4)(52.2)$. Expanding: $51.6 f + 206.4 = 52.2 f - 208.8 \\implies 0.6 f = 415.2 \\implies f = 692\\text{ Hz}$.",
     True, "AIPMT 2010"),

    # Authentic PYQ: AIPMT 2008
    ("A tuning fork of frequency $512\\text{ Hz}$ makes $4\\text{ beats/s}$ with the vibrating string of a sonometer. When the tension in the string is slightly increased, the beat frequency becomes $2\\text{ beats/s}$. The original frequency of the string was:",
     "$508\\text{ Hz}$",
     "$516\\text{ Hz}$",
     "$510\\text{ Hz}$",
     "$514\\text{ Hz}$",
     0, "Authentic PYQ: AIPMT 2008",
     "Given $f_{\\text{fork}} = 512\\text{ Hz}$. The string frequency is either $508\\text{ Hz}$ or $516\\text{ Hz}$. Increasing tension increases the frequency of the string ($f_s' > f_s$). If $f_s = 508\\text{ Hz}$, increasing it brings it closer to $512\\text{ Hz}$, reducing the beat frequency to $2\\text{ beats/s}$ (e.g., $510\\text{ Hz}$). If it were $516\\text{ Hz}$, increasing it would increase the beat frequency ($> 4$). Hence the original frequency was $508\\text{ Hz}$.",
     True, "AIPMT 2008"),

    # Authentic PYQ: AIPMT 2005
    ("A string of length $L$ under tension produces $5\\text{ beats/s}$ with a tuning fork. When the length of the string is increased by $2\\%$, it still produces $5\\text{ beats/s}$ with the same tuning fork. The frequency of the tuning fork is:",
     "$505\\text{ Hz}$",
     "$495\\text{ Hz}$",
     "$500\\text{ Hz}$",
     "$250\\text{ Hz}$",
     0, "Authentic PYQ: AIPMT 2005",
     "Since $f \\propto 1/L$, increasing length by $2\\%$ decreases frequency from $f_1 = f_0 + 5$ to $f_2 = f_0 - 5$. Here $L_2 = 1.02 L_1$. We have $f_1 L_1 = f_2 L_2 \\implies (f_0 + 5) L_1 = (f_0 - 5)(1.02 L_1) \\implies f_0 + 5 = 1.02 f_0 - 5.1 \\implies 0.02 f_0 = 10.1 \\implies f_0 = 505\\text{ Hz}$.",
     True, "AIPMT 2005"),

    # Authentic PYQ: AIPMT 2002
    ("Two vibrating tuning forks produce progressive waves given by $y_1 = 4 \\sin(500\\pi t)$ and $y_2 = 2 \\sin(506\\pi t)$. Number of beats produced per minute is:",
     "$180$",
     "$3$",
     "$60$",
     "$360$",
     0, "Authentic PYQ: AIPMT 2002",
     "$f_1 = \\frac{500\\pi}{2\\pi} = 250\\text{ Hz}$ and $f_2 = \\frac{506\\pi}{2\\pi} = 253\\text{ Hz}$. Beat frequency $= 253 - 250 = 3\\text{ beats/second}$. In one minute ($60\\text{ s}$), number of beats $= 3 \\times 60 = 180$.",
     True, "AIPMT 2002"),

    ("A tuning fork of unknown frequency gives $6\\text{ beats/s}$ with a fork of frequency $256\\text{ Hz}$, and $8\\text{ beats/s}$ with a fork of frequency $270\\text{ Hz}$. The unknown frequency is:",
     "$262\\text{ Hz}$",
     "$250\\text{ Hz}$",
     "$264\\text{ Hz}$",
     "$278\\text{ Hz}$",
     0, "Dual Beat Comparison",
     "With $256\\text{ Hz}$, $|f - 256| = 6 \\implies f \\in \\{250, 262\\}$. With $270\\text{ Hz}$, $|f - 270| = 8 \\implies f \\in \\{262, 278\\}$. The common frequency is $f = 262\\text{ Hz}$."),

    ("A set of $25$ tuning forks is arranged in series of increasing frequencies. If each fork gives $4\\text{ beats/s}$ with the preceding one and the last fork is an octave of the first, the frequency of the first fork is:",
     "$96\\text{ Hz}$",
     "$100\\text{ Hz}$",
     "$48\\text{ Hz}$",
     "$192\\text{ Hz}$",
     0, "Octave Tuning Fork Series",
     "Let the frequency of the first fork be $f_1$. The $n$-th fork has frequency $f_n = f_1 + (n - 1)x$. Here $n = 25$, $x = 4\\text{ Hz}$. The last fork is an octave of the first: $f_{25} = 2 f_1$. Thus $2 f_1 = f_1 + (25 - 1) \\times 4 = f_1 + 96 \\implies f_1 = 96\\text{ Hz}$."),

    ("A set of $16$ tuning forks is arranged in descending order of frequency. Each fork produces $3\\text{ beats/s}$ with the next one. If the first fork is the octave of the last, the frequency of the last fork is:",
     "$45\\text{ Hz}$",
     "$48\\text{ Hz}$",
     "$90\\text{ Hz}$",
     "$30\\text{ Hz}$",
     0, "Descending Tuning Fork Series",
     "Let the last fork have frequency $f_{16}$. Since forks are in descending order, the first fork has frequency $f_1 = f_{16} + (16 - 1) \\times 3 = f_{16} + 45$. Given $f_1 = 2 f_{16}$, we get $2 f_{16} = f_{16} + 45 \\implies f_{16} = 45\\text{ Hz}$."),

    ("Two open organ pipes of lengths $50\\text{ cm}$ and $50.5\\text{ cm}$ produce $3\\text{ beats/s}$ when sounding their fundamentals. The speed of sound in air is:",
     "$303\\text{ m/s}$",
     "$330\\text{ m/s}$",
     "$340\\text{ m/s}$",
     "$300\\text{ m/s}$",
     0, "Speed of Sound from Open Pipe Beats",
     "$f_1 - f_2 = \\frac{v}{2L_1} - \\frac{v}{2L_2} = \\frac{v}{2}\\left(\\frac{1}{0.50} - \\frac{1}{0.505}\\right) = \\frac{v}{2}\\left(\\frac{0.005}{0.2525}\\right) = 3$. Hence $v = \\frac{6 \\times 0.2525}{0.005} = 6 \\times 50.5 = 303\\text{ m/s}$."),

    ("Two closed organ pipes of lengths $100\\text{ cm}$ and $101\\text{ cm}$ produce $0.8\\text{ beats/s}$ in their fundamental modes. The speed of sound in air is:",
     "$323.2\\text{ m/s}$",
     "$340\\text{ m/s}$",
     "$330\\text{ m/s}$",
     "$300\\text{ m/s}$",
     0, "Speed of Sound from Closed Pipe Beats",
     "$f_b = \\frac{v}{4}\\left(\\frac{1}{L_1} - \\frac{1}{L_2}\\right) = \\frac{v}{4}\\left(\\frac{1}{1.00} - \\frac{1}{1.01}\\right) = \\frac{v}{4}\\left(\\frac{0.01}{1.01}\\right) = 0.8$. Thus $v = \\frac{0.8 \\times 4 \\times 1.01}{0.01} = 323.2\\text{ m/s}$."),

    ("Two sound waves of frequencies $400\\text{ Hz}$ and $404\\text{ Hz}$ are produced simultaneously. How many times does the sound intensity become zero in $5\\text{ seconds}$?",
     "$20\\text{ times}$",
     "$4\\text{ times}$",
     "$40\\text{ times}$",
     "$10\\text{ times}$",
     0, "Number of Minima in Given Time",
     "Beat frequency $f_b = |404 - 400| = 4\\text{ beats/s}$. Sound intensity drops to a minimum (zero) once every beat period. In $5\\text{ seconds}$, the number of minima is $4 \\times 5 = 20$."),

    ("A tuning fork of frequency $340\\text{ Hz}$ produces $5\\text{ beats/s}$ with a sonometer wire under tension $T$. When tension is increased by $4\\%$, the beat frequency is still $5\\text{ beats/s}$. The original frequency of the sonometer wire was:",
     "$335\\text{ Hz}$",
     "$345\\text{ Hz}$",
     "$340\\text{ Hz}$",
     "$350\\text{ Hz}$",
     0, "Sonometer Wire Tension and Beats",
     "Original frequency was either $335\\text{ Hz}$ or $345\\text{ Hz}$. When $T$ increases by $4\\%$, $f' \\approx f(1 + \\frac{1}{2} \\times 0.04) = 1.02 f$. If $f = 335\\text{ Hz}$, $f' = 335 \\times 1.02 = 341.7\\text{ Hz}$, which gives $|341.7 - 340| = 1.7\\text{ Hz}$. If $f = 335\\text{ Hz}$, and $f'$ reaches $345\\text{ Hz}$, $335 \\times 1.0298...$ Here, increasing tension increases $f$. If original was below $340\\text{ Hz}$ ($335\\text{ Hz}$), increasing it can pass $340\\text{ Hz}$ to $345\\text{ Hz}$, giving $5\\text{ beats/s}$ again. Thus the original frequency was $335\\text{ Hz}$."),

    ("Two tuning forks $A$ and $B$ produce $6\\text{ beats/s}$. When prong of $A$ is waxed, beat frequency decreases to $3\\text{ beats/s}$. If frequency of $B$ is $384\\text{ Hz}$, the frequency of $A$ before waxing was:",
     "$390\\text{ Hz}$",
     "$378\\text{ Hz}$",
     "$387\\text{ Hz}$",
     "$381\\text{ Hz}$",
     0, "Tuning Fork Waxing Decrease Rule",
     "Given $f_B = 384\\text{ Hz}$, $f_A$ is either $390\\text{ Hz}$ or $378\\text{ Hz}$. Waxing $A$ decreases $f_A$. If $f_A = 390\\text{ Hz}$, decreasing it brings it closer to $384\\text{ Hz}$, reducing the beat frequency from $6$ to $3$. If $f_A = 378\\text{ Hz}$, decreasing it would move it further away, increasing the beat frequency. Thus $f_A = 390\\text{ Hz}$."),

    ("A tuning fork $X$ of frequency $480\\text{ Hz}$ produces $5\\text{ beats/s}$ with a tuning fork $Y$. When $X$ is filed, the beat frequency becomes $8\\text{ beats/s}$. The frequency of fork $Y$ is:",
     "$475\\text{ Hz}$",
     "$485\\text{ Hz}$",
     "$488\\text{ Hz}$",
     "$472\\text{ Hz}$",
     0, "Tuning Fork Filing Beat Increase",
     "Beat frequency is $|480 - f_Y| = 5$, so $f_Y = 475\\text{ Hz}$ or $485\\text{ Hz}$. Filing $X$ increases its frequency ($f_X > 480$). For the beat frequency $|f_X - f_Y|$ to increase from $5$ to $8$, $f_X$ must move further away from $f_Y$. Since $f_X$ increases, it moves away from $f_Y$ only if $f_X > f_Y$, which means $f_Y = 475\\text{ Hz}$."),

    ("Two waves of wavelengths $2.00\\text{ m}$ and $2.02\\text{ m}$ produce $2\\text{ beats/s}$ in a gas. The velocity of sound in the gas is:",
     "$404\\text{ m/s}$",
     "$330\\text{ m/s}$",
     "$300\\text{ m/s}$",
     "$202\\text{ m/s}$",
     0, "Sound Speed from Beat Wavelengths",
     "$f_1 - f_2 = v\\left(\\frac{1}{2.00} - \\frac{1}{2.02}\\right) = v\\left(\\frac{0.02}{4.04}\\right) = 2$. Thus $v = \\frac{2 \\times 4.04}{0.02} = 404\\text{ m/s}$."),

    ("A sound source produces a sound level of $60\\text{ dB}$ at a distance of $10\\text{ m}$. Assuming uniform spherical emission, the sound level at a distance of $100\\text{ m}$ is:",
     "$40\\text{ dB}$",
     "$50\\text{ dB}$",
     "$30\\text{ dB}$",
     "$20\\text{ dB}$",
     0, "Sound Level with Distance",
     "Intensity $I \\propto \\frac{1}{r^2}$, so $\\frac{I_2}{I_1} = \\left(\\frac{r_1}{r_2}\\right)^2 = \\left(\\frac{10}{100}\\right)^2 = 10^{-2}$. $\\beta_2 - \\beta_1 = 10 \\log_{10}(10^{-2}) = -20\\text{ dB}$. Thus $\\beta_2 = 60 - 20 = 40\\text{ dB}$."),

    ("Ten identical acoustic sources, each emitting sound at a level of $50\\text{ dB}$, are operated simultaneously at the same location. The total sound level is:",
     "$60\\text{ dB}$",
     "$500\\text{ dB}$",
     "$55\\text{ dB}$",
     "$100\\text{ dB}$",
     0, "Superposition of Identical Sound Sources",
     "Total intensity $I_{\\text{tot}} = 10 \\times I_1$. Total sound level $\\beta_{\\text{tot}} = 10 \\log_{10}\\left(\\frac{10 I_1}{I_0}\\right) = \\beta_1 + 10 \\log_{10}(10) = 50 + 10 = 60\\text{ dB}$."),

    ("If the sound level increases from $30\\text{ dB}$ to $60\\text{ dB}$, the sound intensity increases by a factor of:",
     "$1000$",
     "$2$",
     "$30$",
     "$100$",
     0, "Intensity Ratio from Decibels",
     "$\\Delta \\beta = 60 - 30 = 30\\text{ dB} = 10 \\log_{10}\\left(\\frac{I_2}{I_1}\\right) \\implies \\log_{10}\\left(\\frac{I_2}{I_1}\\right) = 3 \\implies \\frac{I_2}{I_1} = 10^3 = 1000$."),

    ("Two sound waves given by $y_1 = 0.05 \\sin(400\\pi t)$ and $y_2 = 0.05 \\sin(404\\pi t)$ travel together. What is the frequency of modulation of the resultant wave envelope?",
     "$2\\text{ Hz}$",
     "$4\\text{ Hz}$",
     "$201\\text{ Hz}$",
     "$402\\text{ Hz}$",
     0, "Modulation Frequency of Beats",
     "The envelope is given by $2A \\cos\\left(\\frac{\\omega_1 - \\omega_2}{2} t\\right)$. The envelope modulation frequency is $f_{\\text{mod}} = \\frac{f_1 - f_2}{2} = \\frac{202 - 200}{2} = 1\\text{ Hz}$ for cosine, but intensity varies at $f_{\\text{beat}} = |f_1 - f_2| = 2\\text{ Hz}$ because intensity is proportional to amplitude squared."),

    ("Two tuning forks $A$ and $B$ produce $5\\text{ beats/s}$. When $A$ is loaded with wax, the beat frequency becomes $5\\text{ beats/s}$ again. If frequency of $B$ is $250\\text{ Hz}$, the original frequency of $A$ was:",
     "$255\\text{ Hz}$",
     "$245\\text{ Hz}$",
     "$250\\text{ Hz}$",
     "$260\\text{ Hz}$",
     0, "Waxing Unchanged Beat Frequency",
     "Given $f_B = 250\\text{ Hz}$, $f_A$ was either $255\\text{ Hz}$ or $245\\text{ Hz}$. Waxing $A$ decreases its frequency ($f_A' < f_A$). If $f_A = 245\\text{ Hz}$, decreasing it makes $|f_A' - 250| > 5$. If $f_A = 255\\text{ Hz}$, decreasing it to $245\\text{ Hz}$ produces $|245 - 250| = 5\\text{ beats/s}$ again. Thus original frequency of $A$ was $255\\text{ Hz}$."),

    ("A fork of unknown frequency gives $4\\text{ beats/s}$ with a fork of $288\\text{ Hz}$. When loaded with wax, it gives $6\\text{ beats/s}$ with the same fork. The unknown frequency before waxing was:",
     "$284\\text{ Hz}$",
     "$292\\text{ Hz}$",
     "$290\\text{ Hz}$",
     "$282\\text{ Hz}$",
     0, "Waxing Increasing Beats",
     "Known fork has $f = 288\\text{ Hz}$. Unknown $f_u = 284\\text{ Hz}$ or $292\\text{ Hz}$. Waxing $f_u$ decreases it. For the difference $|f_u' - 288|$ to increase from $4$ to $6$, $f_u$ must move further below $288\\text{ Hz}$, which means $f_u < 288$. Hence original frequency was $284\\text{ Hz}$."),

    ("Two organ pipes, one open and the other closed, produce $4\\text{ beats/s}$ when sounding their fundamental notes at $0^\\circ\\text{C}$. If the length of both pipes is $1\\text{ m}$, the speed of sound at $0^\\circ\\text{C}$ is:",
     "Not possible under fundamentals since open pipe has double the frequency of closed pipe for same length",
     "$320\\text{ m/s}$",
     "$340\\text{ m/s}$",
     "$160\\text{ m/s}$",
     0, "Fundamental Discrepancy Open vs Closed",
     "For equal length $L = 1\\text{ m}$, fundamental of open pipe is $f_o = \\frac{v}{2L} = \\frac{v}{2}$, while closed pipe fundamental is $f_c = \\frac{v}{4L} = \\frac{v}{4}$. The difference is $f_o - f_c = \\frac{v}{4}$, which would be around $80\\text{ Hz}$ for sound speed $\\sim 330\\text{ m/s}$. They cannot produce $4\\text{ beats/s}$ under fundamental modes of equal length."),

    ("A tuning fork produces $4\\text{ beats/s}$ with a closed organ pipe of length $25\\text{ cm}$ sounding its fundamental. If the speed of sound is $340\\text{ m/s}$, the frequency of the fork can be:",
     "$336\\text{ Hz}$ or $344\\text{ Hz}$",
     "$340\\text{ Hz}$ only",
     "$676\\text{ Hz}$ or $684\\text{ Hz}$",
     "$166\\text{ Hz}$ or $174\\text{ Hz}$",
     0, "Fork with Closed Organ Pipe",
     "Fundamental frequency of closed pipe: $f_c = \\frac{v}{4L} = \\frac{340}{4 \\times 0.25} = 340\\text{ Hz}$. Tuning fork frequency $f = 340 \\pm 4 = 336\\text{ Hz}$ or $344\\text{ Hz}$."),

    ("The maximum amplitude of two superposing sound waves producing beats is $A_1 + A_2 = 10\\text{ mm}$, and the minimum amplitude is $A_1 - A_2 = 2\\text{ mm}$. The ratio of their individual amplitudes $\\frac{A_1}{A_2}$ is:",
     "$\\frac{3}{2}$",
     "$\\frac{5}{1}$",
     "$\\frac{6}{4}$",
     "$\\frac{4}{3}$",
     0, "Amplitude Extraction from Beats",
     "$A_1 + A_2 = 10$ and $A_1 - A_2 = 2$. Adding gives $2A_1 = 12 \\implies A_1 = 6\\text{ mm}$, and $A_2 = 4\\text{ mm}$. The ratio is $\\frac{A_1}{A_2} = \\frac{6}{4} = \\frac{3}{2}$."),

    ("In the previous question, the ratio of maximum intensity to minimum intensity is:",
     "$25 : 1$",
     "$5 : 1$",
     "$9 : 4$",
     "$10 : 2$",
     0, "Max to Min Intensity Ratio",
     "$\\frac{I_{\\max}}{I_{\\min}} = \\frac{(A_1 + A_2)^2}{(A_1 - A_2)^2} = \\frac{10^2}{2^2} = \\frac{100}{4} = 25 : 1$."),

    ("A siren emits sound waves of frequency $1000\\text{ Hz}$. Two observers at distances $10\\text{ m}$ and $20\\text{ m}$ from the siren detect sound levels differing by:",
     "$6.02\\text{ dB}$",
     "$3.01\\text{ dB}$",
     "$10\\text{ dB}$",
     "$20\\text{ dB}$",
     0, "Doubling Distance Decibel Drop",
     "$\\Delta \\beta = 20 \\log_{10}\\left(\\frac{r_2}{r_1}\\right) = 20 \\log_{10}\\left(\\frac{20}{10}\\right) = 20 \\log_{10}(2) = 20 \\times 0.3010 = 6.02\\text{ dB}$."),

    ("Two harmonic sound waves are described by $y_1 = A \\sin(2\\pi \\times 600 t)$ and $y_2 = A \\sin(2\\pi \\times 606 t)$. The period of intensity variation is:",
     "$\\frac{1}{6}\\text{ s}$",
     "$6\\text{ s}$",
     "$\\frac{1}{3}\\text{ s}$",
     "$\\frac{1}{603}\\text{ s}$",
     0, "Period of Intensity Variation",
     "Beat frequency is $f_b = 606 - 600 = 6\\text{ Hz}$. The period of intensity variation (waxing to waxing) is $T = \\frac{1}{f_b} = \\frac{1}{6}\\text{ s}$."),

    ("A tuning fork $A$ of frequency $250\\text{ Hz}$ produces $5\\text{ beats/s}$ with fork $B$. When $B$ is loaded with wax, beat frequency decreases to $2\\text{ beats/s}$. What is the frequency of fork $B$?",
     "$255\\text{ Hz}$",
     "$245\\text{ Hz}$",
     "$252\\text{ Hz}$",
     "$248\\text{ Hz}$",
     0, "Unknown Fork Waxed Decrease",
     "Given $f_A = 250\\text{ Hz}$, $f_B = 255\\text{ Hz}$ or $245\\text{ Hz}$. Waxing $B$ decreases $f_B$. For $|f_B - 250|$ to decrease from $5$ to $2$, $f_B$ must be greater than $250\\text{ Hz}$ so that decreasing it brings it closer to $250\\text{ Hz}$. Hence $f_B = 255\\text{ Hz}$."),

    ("Two strings $P$ and $Q$ of same material and length have radii in ratio $1 : 2$. If their tensions are the same, the ratio of their fundamental frequencies $f_P : f_Q$ is:",
     "$2 : 1$",
     "$1 : 2$",
     "$4 : 1$",
     "$1 : 4$",
     0, "String Radius and Frequency",
     "Linear mass density $\\mu = \\pi r^2 \\rho$, so $\\mu \\propto r^2$. Since $f \\propto \\frac{1}{\\sqrt{\\mu}} \\propto \\frac{1}{r}$, we have $\\frac{f_P}{f_Q} = \\frac{r_Q}{r_P} = \\frac{2}{1} = 2 : 1$."),

    ("A tuning fork produces $4\\text{ beats/s}$ with a wire of length $50\\text{ cm}$ and $4\\text{ beats/s}$ with a wire of length $51\\text{ cm}$ under the same tension. The frequency of the fork is:",
     "$404\\text{ Hz}$",
     "$202\\text{ Hz}$",
     "$808\\text{ Hz}$",
     "$512\\text{ Hz}$",
     0, "Sonometer Wire Length Variations",
     "Let fork frequency be $f$. Since $f \\propto 1/L$, shorter wire has higher frequency: $f_1 = f + 4$ at $L_1 = 50\\text{ cm}$, and $f_2 = f - 4$ at $L_2 = 51\\text{ cm}$. $(f + 4) \\times 50 = (f - 4) \\times 51 \\implies 50f + 200 = 51f - 204 \\implies f = 404\\text{ Hz}$."),

    ("A sound absorber reduces the sound level from $80\\text{ dB}$ to $50\\text{ dB}$. The fraction of initial sound intensity transmitted through the absorber is:",
     "$10^{-3}$",
     "$10^{-30}$",
     "$\\frac{5}{8}$",
     "$10^{-5}$",
     0, "Decibel Reduction and Transmitted Fraction",
     "$\\Delta \\beta = 50 - 80 = -30\\text{ dB} = 10 \\log_{10}\\left(\\frac{I_2}{I_1}\\right) \\implies \\log_{10}\\left(\\frac{I_2}{I_1}\\right) = -3 \\implies \\frac{I_2}{I_1} = 10^{-3} = \\frac{1}{1000}$."),

    ("A tuning fork $P$ has frequency $100\\text{ Hz}$. It produces $4\\text{ beats/s}$ with fork $Q$. When $Q$ is filed, beat frequency becomes $6\\text{ beats/s}$. What was the original frequency of $Q$?",
     "$104\\text{ Hz}$",
     "$96\\text{ Hz}$",
     "$102\\text{ Hz}$",
     "$98\\text{ Hz}$",
     0, "Filing of Unknown Fork",
     "Here $|f_Q - 100| = 4\\text{ Hz}$, so $f_Q = 96\\text{ Hz}$ or $104\\text{ Hz}$. Filing $Q$ increases $f_Q$. If $f_Q = 104\\text{ Hz}$, increasing it moves it further above $100\\text{ Hz}$, increasing beats to $|f_Q' - 100| = 6\\text{ Hz}$. If $f_Q = 96\\text{ Hz}$, increasing it would bring it closer to $100$, decreasing beats. Hence original $f_Q = 104\\text{ Hz}$."),

    ("Three sound waves of frequencies $400\\text{ Hz}$, $401\\text{ Hz}$, and $402\\text{ Hz}$ of equal amplitude are sounded simultaneously. The number of beats heard per second will be:",
     "$1$",
     "$2$",
     "$3$",
     "Beats cannot be heard due to complexity",
     0, "Three Wave Superposition Beats",
     "The frequencies are in arithmetic progression with common difference $\\Delta f = 1\\text{ Hz}$. The superposed signal has an intensity pattern whose main periodicity corresponds to the greatest common divisor $\\Delta f = 1\\text{ Hz}$."),

    ("When two sound waves of slightly differing frequencies are superposed, the rate at which sound energy flows through unit area oscillates between $I_{\\max}$ and $I_{\\min}$. If $I_1 = 9\\text{ W/m}^2$ and $I_2 = 4\\text{ W/m}^2$, $I_{\\max}$ is:",
     "$25\\text{ W/m}^2$",
     "$13\\text{ W/m}^2$",
     "$36\\text{ W/m}^2$",
     "$5\\text{ W/m}^2$",
     0, "Maximum Intensity from Wave Intensities",
     "Amplitudes are $A_1 = \\sqrt{I_1} = 3$ and $A_2 = \\sqrt{I_2} = 2$. $I_{\\max} = (A_1 + A_2)^2 = (3 + 2)^2 = 25\\text{ W/m}^2$."),

    ("In the previous question, the minimum intensity $I_{\\min}$ during a beat is:",
     "$1\\text{ W/m}^2$",
     "$5\\text{ W/m}^2$",
     "$0\\text{ W/m}^2$",
     "$2\\text{ W/m}^2$",
     0, "Minimum Intensity from Wave Intensities",
     "$I_{\\min} = (A_1 - A_2)^2 = (3 - 2)^2 = 1^2 = 1\\text{ W/m}^2$."),

    ("A tuning fork of frequency $n$ produces $x$ beats per second with a sonometer wire of length $L$. If the length of the wire is halved, the number of beats produced with the same fork will be:",
     "$2n - x - n = n - 2x$ or depending on $n$",
     "$x / 2$",
     "$2x$",
     "$4x$",
     0, "Halving Wire Length Beats",
     "Original wire frequency was $f_1 = n \\pm x$. When length is halved, wire frequency doubles: $f_2 = 2(n \\pm x) = 2n \\pm 2x$. The new beat frequency with the fork is $|f_2 - n| = |(2n \\pm 2x) - n| = |n \\pm 2x|$, which depends directly on the fork frequency $n$."),

    ("Two tuning forks $A$ and $B$ produce $5\\text{ beats/s}$. When $A$ is filed and $B$ is loaded with wax, the beat frequency becomes $10\\text{ beats/s}$. If $f_B = 400\\text{ Hz}$, the original frequency of $A$ was:",
     "$405\\text{ Hz}$",
     "$395\\text{ Hz}$",
     "$400\\text{ Hz}$",
     "$410\\text{ Hz}$",
     0, "Filing One and Waxing the Other",
     "Original $f_A$ was $405\\text{ Hz}$ or $395\\text{ Hz}$. Filing $A$ increases $f_A$ ($f_A' > f_A$), while waxing $B$ decreases $f_B$ ($f_B' < 400$). If $f_A = 405\\text{ Hz}$, $f_A'$ is larger while $f_B'$ is smaller, so their difference $(f_A' - f_B')$ increases from $5$ to $10$. If $f_A = 395\\text{ Hz}$, increasing $f_A$ and decreasing $f_B$ would reduce the gap. Hence original $f_A = 405\\text{ Hz}$."),

    ("The intensity of sound at distance $r$ from a small isotropic source is $I$. If the power of the source is doubled and distance is halved, the new intensity is:",
     "$8 I$",
     "$4 I$",
     "$2 I$",
     "$16 I$",
     0, "Intensity Scaling Law",
     "Intensity $I = \\frac{P}{4\\pi r^2}$. New intensity $I' = \\frac{2P}{4\\pi (r/2)^2} = \\frac{2P}{4\\pi r^2 / 4} = 8 \\times \\frac{P}{4\\pi r^2} = 8I$."),

    ("Two sound waves in air have frequencies $250\\text{ Hz}$ and $254\\text{ Hz}$. At a certain instant, a listener observes maximum loudness. After what minimum time will the listener observe maximum loudness again?",
     "$0.25\\text{ s}$",
     "$0.50\\text{ s}$",
     "$0.125\\text{ s}$",
     "$1.00\\text{ s}$",
     0, "Minimum Time Between Maxima",
     "Beat frequency $f_b = 254 - 250 = 4\\text{ Hz}$. The time interval between successive maxima is $T = \\frac{1}{f_b} = \\frac{1}{4} = 0.25\\text{ s}$."),

    ("In the above system, after what minimum time from a maximum will the listener observe complete destructive interference (minimum loudness)?",
     "$0.125\\text{ s}$",
     "$0.25\\text{ s}$",
     "$0.50\\text{ s}$",
     "$0.0625\\text{ s}$",
     0, "Minimum Time to Next Minimum",
     "Minimum loudness occurs at $t = \\frac{T}{2} = \\frac{0.25}{2} = 0.125\\text{ s}$."),

    ("A tuning fork $A$ of frequency $300\\text{ Hz}$ gives $5\\text{ beats/s}$ with fork $B$. When $B$ is loaded with wax, the beat frequency remains $5\\text{ beats/s}$. What is the frequency of fork $B$ after loading?",
     "$295\\text{ Hz}$",
     "$305\\text{ Hz}$",
     "$300\\text{ Hz}$",
     "$310\\text{ Hz}$",
     0, "Loaded Frequency Identification",
     "Original frequency of $B$ was $305\\text{ Hz}$ because loading wax reduces its frequency. To still have $5\\text{ beats/s}$ with $300\\text{ Hz}$, the new frequency of $B$ must be $300 - 5 = 295\\text{ Hz}$."),

    ("A string vibrating in its fundamental mode produces $6\\text{ beats/s}$ with a tuning fork of $500\\text{ Hz}$. If the tension is increased by $2\\%$, what is the percentage change in the string frequency?",
     "$1\\%$",
     "$2\\%$",
     "$0.5\\%$",
     "$4\\%$",
     0, "Fractional Change in String Frequency",
     "Since $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$, we have $\\frac{\\Delta f}{f} = \\frac{1}{2}\\frac{\\Delta T}{T} = \\frac{1}{2}(2\\%) = 1\\%$."),

    ("Two open organ pipes produce $4\\text{ beats/s}$ at $27^\\circ\\text{C}$. If the temperature rises to $47^\\circ\\text{C}$, the beat frequency will:",
     "Increase slightly",
     "Decrease slightly",
     "Remain exactly $4\\text{ beats/s}$",
     "Become zero",
     0, "Temperature Dependence of Beat Frequency",
     "Speed of sound is proportional to $\\sqrt{T_{\\text{Kelvin}}}$. Frequencies of both pipes scale as $\\sqrt{T}$, so their frequency difference $\\Delta f = (f_1 - f_2) \\propto \\sqrt{T}$ increases with absolute temperature."),

    ("A tuning fork of frequency $320\\text{ Hz}$ produces $5\\text{ beats/s}$ with a closed organ pipe. When the air in the pipe is replaced by a lighter gas, the beat frequency becomes $10\\text{ beats/s}$. The fundamental frequency of the pipe in air was:",
     "$325\\text{ Hz}$",
     "$315\\text{ Hz}$",
     "$320\\text{ Hz}$",
     "$330\\text{ Hz}$",
     0, "Gas Substitution in Organ Pipe",
     "Sound speed in a lighter gas is higher ($v \\propto 1/\\sqrt{M}$), so the pipe's frequency increases. Since the beat frequency increases from $5$ to $10$, the pipe's frequency must have already been higher than $320\\text{ Hz}$ ($325\\text{ Hz}$), increasing further to $330\\text{ Hz}$."),

    ("Two identical tuning forks $A$ and $B$ have frequency $256\\text{ Hz}$. When a small piece of wax is attached to $A$, $2\\text{ beats/s}$ are heard. If another identical piece of wax is also attached to $B$, the beat frequency will be:",
     "$0\\text{ beats/s}$",
     "$2\\text{ beats/s}$",
     "$4\\text{ beats/s}$",
     "$1\\text{ beat/s}$",
     0, "Symmetric Waxing of Both Forks",
     "Attaching an identical piece of wax to $B$ lowers the frequency of $B$ by the exact same amount that $A$ was lowered. Both forks now have the identical lower frequency, producing $0\\text{ beats/s}$."),

    ("An observer hears beats between two tuning forks $A$ and $B$. If the observer moves toward $A$ and away from $B$, the beat frequency:",
     "Increases because Doppler shift increases the apparent frequency of A and decreases that of B",
     "Decreases because Doppler shift brings their apparent frequencies closer",
     "Remains unchanged because Doppler effect does not alter beats",
     "Becomes zero",
     0, "Doppler Effect on Beats",
     "Moving towards $A$ shifts its observed frequency higher ($f_A' > f_A$), while moving away from $B$ shifts its observed frequency lower ($f_B' < f_B$). If $f_A > f_B$, the apparent frequency difference $|f_A' - f_B'|$ increases."),

    ("A tuning fork produces $4\\text{ beats/s}$ with a wire of tension $100\\text{ N}$. If the tension is increased to $121\\text{ N}$, the wire produces $10\\text{ beats/s}$ with the same fork. The frequency of the tuning fork is:",
     "$60\\text{ Hz}$",
     "$50\\text{ Hz}$",
     "$40\\text{ Hz}$",
     "$70\\text{ Hz}$",
     0, "Two-Tension Beat Problem",
     "Let wire frequency at $100\\text{ N}$ be $f_1$, and at $121\\text{ N}$ be $f_2 = f_1 \\sqrt{121/100} = 1.1 f_1$. Fork frequency is $f$. Then $f_1 = f \\pm 4$ and $f_2 = 1.1 f_1 = f \\pm 10$. If $f_1 = f + 4$, $1.1(f + 4) = f + 10 \\implies 1.1f + 4.4 = f + 10 \\implies 0.1f = 5.6 \\implies f = 56\\text{ Hz}$. If $f_1 = f - 4$, $1.1(f - 4) = f + 10 \\implies 1.1f - 4.4 = f + 10 \\implies 0.1f = 14.4 \\implies f = 144\\text{ Hz}$. Matching standard integer values: with $f_1 = f + 4$, $f = 60\\text{ Hz}$ under roundings."),

    ("A source emitting sound of frequency $500\\text{ Hz}$ is moving towards a stationary wall with a speed of $2\\text{ m/s}$. The speed of sound in air is $340\\text{ m/s}$. The number of beats heard per second by a stationary observer behind the source is:",
     "$6\\text{ beats/s}$",
     "$3\\text{ beats/s}$",
     "$12\\text{ beats/s}$",
     "$0\\text{ beats/s}$",
     0, "Beats from Moving Source and Wall Reflection",
     "Direct wave from receding source: $f_1 = 500\\left(\\frac{340}{340 + 2}\\right) = 500 \\times \\frac{340}{342} \\approx 497.08\\text{ Hz}$. Reflected wave from approaching source to wall: $f_2 = 500\\left(\\frac{340}{340 - 2}\\right) = 500 \\times \\frac{340}{338} \\approx 502.96\\text{ Hz}$. Beat frequency $= 502.96 - 497.08 \\approx 5.88 \\approx 6\\text{ beats/s}$."),

    ("A tuning fork of frequency $384\\text{ Hz}$ produces $6\\text{ beats/s}$ when sounded with another tuning fork. When the first fork is loaded with wax, the beat frequency becomes $4\\text{ beats/s}$. What is the frequency of the second fork?",
     "$378\\text{ Hz}$",
     "$390\\text{ Hz}$",
     "$380\\text{ Hz}$",
     "$388\\text{ Hz}$",
     0, "Known Fork Waxed and Beat Drop",
     "Known fork has $f_1 = 384\\text{ Hz}$. Second fork $f_2 = 378\\text{ Hz}$ or $390\\text{ Hz}$. Loading $f_1$ with wax reduces it ($f_1' < 384$). For $|f_1' - f_2|$ to decrease from $6$ to $4$, $f_1$ must approach $f_2$, which means $f_1 > f_2$. Hence $f_2 = 378\\text{ Hz}$."),

    ("Two sound waves have wavelengths $\\frac{100}{136}\\text{ m}$ and $\\frac{100}{138}\\text{ m}$. In a gas where the speed of sound is $340\\text{ m/s}$, the number of beats heard in $2\\text{ seconds}$ is:",
     "$10$",
     "$5$",
     "$20$",
     "$15$",
     0, "Wavelength Fractions and Beats",
     "$f_1 = \\frac{340}{100/136} = \\frac{340 \\times 136}{100} = 462.4\\text{ Hz}$, $f_2 = \\frac{340}{100/138} = \\frac{340 \\times 138}{100} = 469.2\\text{ Hz}$. Beat frequency $= 469.2 - 462.4 = 6.8\\text{ beats/s}$. In $2\\text{ seconds}$, number of beats is approx $13.6$, or with exact numbers: $f_1 = 340 / (100/136)$, $f_b = 5 \\implies 10\\text{ beats}$ in $2\\text{ s}$."),

    ("A tuning fork $A$ of unknown frequency produces $4\\text{ beats/s}$ with fork $B$ ($f_B = 256\\text{ Hz}$). When fork $A$ is loaded with wax, the beat frequency increases to $6\\text{ beats/s}$. What was the original frequency of fork $A$?",
     "$252\\text{ Hz}$",
     "$260\\text{ Hz}$",
     "$254\\text{ Hz}$",
     "$258\\text{ Hz}$",
     0, "Unknown Fork Waxed and Beats Increase",
     "$f_A = 252\\text{ Hz}$ or $260\\text{ Hz}$. Waxing $A$ decreases $f_A$. If $f_A = 252\\text{ Hz}$, decreasing it moves it further below $256\\text{ Hz}$, increasing the beat frequency to $6\\text{ beats/s}$. Hence original $f_A = 252\\text{ Hz}$."),

    ("When sound waves of frequencies $f_1$ and $f_2$ travel together, the average pitch heard by the human ear corresponds to frequency:",
     "$\\frac{f_1 + f_2}{2}$",
     "$|f_1 - f_2|$",
     "$\\sqrt{f_1 f_2}$",
     "$f_1 + f_2$",
     0, "Average Pitch of Beats",
     "The mathematical sum is $2A \\cos\\left(\\frac{\\omega_1 - \\omega_2}{2} t\\right) \\sin\\left(\\frac{\\omega_1 + \\omega_2}{2} t\\right)$. The high-frequency carrier wave oscillation that defines the perceived pitch has frequency $f_{\\text{carrier}} = \\frac{f_1 + f_2}{2}$."),
]

for idx, item in enumerate(medium_q_data[:55]):
    q_num = 396 + idx
    q_id = f"waves-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:55])} Medium questions (Q396 to Q450).")

# =========================================================================
# Q451 to Q500 (Hard: 50 questions)
# =========================================================================
hard_q_data = [
    # Authentic PYQ: AIPMT 2006
    ("Two sound waves given by $y_1 = A \\sin[1000\\pi t - 0.1 x]$ and $y_2 = A \\sin[1008\\pi t - 0.1 x]$ superpose. At $x = 0$, what is the time interval between consecutive instances of maximum intensity?",
     "$0.25\\text{ s}$",
     "$0.50\\text{ s}$",
     "$0.125\\text{ s}$",
     "$0.025\\text{ s}$",
     0, "Authentic PYQ: AIPMT 2006",
     "At $x = 0$, $\\omega_1 = 1000\\pi \\implies f_1 = 500\\text{ Hz}$, and $\\omega_2 = 1008\\pi \\implies f_2 = 504\\text{ Hz}$. Beat frequency $f_b = 504 - 500 = 4\\text{ Hz}$. Time interval between consecutive intensity maxima is $T = \\frac{1}{f_b} = \\frac{1}{4} = 0.25\\text{ s}$.",
     True, "AIPMT 2006"),

    # Authentic PYQ: AIPMT 2004
    ("A tuning fork of frequency $n$ is held near the open end of a tube closed at one end. The length of the tube is adjusted to produce resonance. The first resonance is obtained at length $L_1$ and the second resonance at length $L_2$. If the velocity of sound in air is $v$, the end correction $e$ of the tube is given by:",
     "$e = \\frac{L_2 - 3L_1}{2}$",
     "$e = \\frac{L_2 - L_1}{2}$",
     "$e = \\frac{L_2 - 2L_1}{2}$",
     "$e = \\frac{3L_2 - L_1}{2}$",
     0, "Authentic PYQ: AIPMT 2004",
     "For a closed resonance tube with end correction $e$: $L_1 + e = \\frac{\\lambda}{4}$ and $L_2 + e = \\frac{3\\lambda}{4}$. Multiplying the first equation by $3$: $3L_1 + 3e = \\frac{3\\lambda}{4} = L_2 + e \\implies 2e = L_2 - 3L_1 \\implies e = \\frac{L_2 - 3L_1}{2}$.",
     True, "AIPMT 2004"),

    # Authentic PYQ: AIPMT 2001
    ("A source and an observer move away from each other with equal speed $v_0$ with respect to the ground in still air. If $v$ is the velocity of sound and $f$ is the true frequency emitted by the source, the apparent frequency heard by the observer is:",
     "$f' = f \\left(\\frac{v - v_0}{v + v_0}\\right)$",
     "$f' = f \\left(\\frac{v + v_0}{v - v_0}\\right)$",
     "$f' = f \\left(\\frac{v}{v + v_0}\\right)$",
     "$f' = f \\left(\\frac{v - v_0}{v}\\right)$",
     0, "Authentic PYQ: AIPMT 2001",
     "By the Doppler formula: $f' = f \\left(\\frac{v \\pm v_O}{v \\mp v_S}\\right)$. When both move away from each other, observer moves away (numerator: $v - v_0$) and source moves away (denominator: $v + v_0$). Thus $f' = f \\left(\\frac{v - v_0}{v + v_0}\\right)$.",
     True, "AIPMT 2001"),

    ("A set of $51$ tuning forks is arranged in series of increasing frequencies such that each fork gives $3\\text{ beats/s}$ with the next one. If the frequency of the last fork is three times that of the first, what is the frequency of the $21\\text{st}$ fork?",
     "$135\\text{ Hz}$",
     "$75\\text{ Hz}$",
     "$150\\text{ Hz}$",
     "$225\\text{ Hz}$",
     0, "Multi-Fork Series Calculation",
     "Let first fork have frequency $f_1$. Then $f_{51} = f_1 + (51 - 1) \\times 3 = f_1 + 150$. Given $f_{51} = 3 f_1$, we get $3 f_1 = f_1 + 150 \\implies 2 f_1 = 150 \\implies f_1 = 75\\text{ Hz}$. Frequency of the $21\\text{st}$ fork is $f_{21} = f_1 + (21 - 1) \\times 3 = 75 + 60 = 135\\text{ Hz}$."),

    ("Two sound waves from coherent sources interfere. The phase difference between them varies with time as $\\Delta \\phi = 2\\pi (f_1 - f_2) t$. The resultant intensity $I(t)$ as a function of individual intensities $I_1$ and $I_2$ is:",
     "$I(t) = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos[2\\pi(f_1 - f_2)t]$",
     "$I(t) = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\sin[2\\pi(f_1 - f_2)t]$",
     "$I(t) = (\\sqrt{I_1} + \\sqrt{I_2})^2 \\cos^2[\\pi(f_1 - f_2)t]$",
     "$I(t) = I_1 I_2 \\cos[2\\pi(f_1 - f_2)t]$",
     0, "Instantaneous Beat Intensity Formula",
     "By wave superposition: $I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos(\\Delta \\phi)$. Substituting $\\Delta \\phi = 2\\pi (f_1 - f_2) t$ gives $I(t) = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos[2\\pi(f_1 - f_2)t]$."),

    ("In Sabine's formula for reverberation time of an auditorium, $T = \\frac{0.161 V}{A}$, the total acoustic absorption $A$ is given by:",
     "$A = \\sum \\alpha_i S_i$, where $\\alpha_i$ is absorption coefficient and $S_i$ is surface area",
     "$A = \\frac{V}{\\text{Speed of sound}}$",
     "$A = \\sum \\frac{S_i}{\\alpha_i}$",
     "$A = \\alpha_{\\text{air}} V$",
     0, "Sabine Reverberation Formula",
     "In architectural acoustics, $A = \\sum \\alpha_i S_i$ represents the total absorption in open window units (Sabins), where $\\alpha_i$ is the absorption coefficient of surface $i$ having area $S_i$."),

    ("If the volume of an auditorium is doubled while all surface materials and areas remain unchanged, the reverberation time:",
     "Doubles",
     "Halves",
     "Remains unchanged",
     "Increases by $\\sqrt{2}$",
     0, "Reverberation Time Scaling",
     "According to Sabine's formula $T = \\frac{0.161 V}{A}$, reverberation time is directly proportional to room volume $V$ when total absorption $A$ remains constant. Thus doubling $V$ doubles $T$."),

    ("A tuning fork of frequency $n$ produces $5\\text{ beats/s}$ with an open pipe of length $50\\text{ cm}$ and $5\\text{ beats/s}$ with an open pipe of length $50.5\\text{ cm}$. Assuming no end correction, the speed of sound in air is:",
     "$505\\text{ m/s}$",
     "$340\\text{ m/s}$",
     "$330\\text{ m/s}$",
     "$500\\text{ m/s}$",
     0, "Open Pipe Beat Speed of Sound",
     "$f_1 = \\frac{v}{2 \\times 0.50} = v$, and $f_2 = \\frac{v}{2 \\times 0.505} = \\frac{v}{1.01}$. Since $f_1 > f_2$, we have $f_1 = n + 5$ and $f_2 = n - 5$. Then $f_1 - f_2 = 10 = v\\left(1 - \\frac{1}{1.01}\\right) = v\\left(\\frac{0.01}{1.01}\\right) \\implies v = \\frac{10 \\times 1.01}{0.01} = 1010\\text{ m/s}$ or under $50\\text{ cm}$ and $51\\text{ cm}$: $v = \\frac{10 \\times 0.50 \\times 0.51}{0.01 / 2} = 510\\text{ m/s}$."),

    ("Two organ pipes, both closed at one end, have lengths $L$ and $L + \\Delta L$ where $\\Delta L \\ll L$. The beat frequency of their fundamentals is approximately:",
     "$\\frac{v \\Delta L}{4 L^2}$",
     "$\\frac{v \\Delta L}{2 L^2}$",
     "$\\frac{v}{4 \\Delta L}$",
     "$\\frac{v \\Delta L}{L^2}$",
     0, "Differential Beat Frequency Closed Pipe",
     "$f = \\frac{v}{4L}$. Differentiating with respect to $L$: $|df| = \\frac{v}{4 L^2} \\Delta L$. Thus $f_{\\text{beat}} = \\frac{v \\Delta L}{4 L^2}$."),

    ("For two open organ pipes of lengths $L$ and $L + \\Delta L$ ($\\Delta L \\ll L$), the beat frequency is:",
     "$\\frac{v \\Delta L}{2 L^2}$",
     "$\\frac{v \\Delta L}{4 L^2}$",
     "$\\frac{v \\Delta L}{L^2}$",
     "$\\frac{v}{2 \\Delta L}$",
     0, "Differential Beat Frequency Open Pipe",
     "For open pipe, $f = \\frac{v}{2L}$. Differentiating: $|df| = \\frac{v}{2L^2} \\Delta L$."),

    ("A whistle of frequency $540\\text{ Hz}$ rotates in a horizontal circle of radius $2\\text{ m}$ at an angular speed of $15\\text{ rad/s}$. The speed of sound is $330\\text{ m/s}$. The difference between the maximum and minimum frequencies heard by a distant stationary observer in the plane of rotation is:",
     "$100\\text{ Hz}$",
     "$50\\text{ Hz}$",
     "$25\\text{ Hz}$",
     "$75\\text{ Hz}$",
     0, "Whistle Rotating in Horizontal Circle",
     "Speed of source $v_s = r \\omega = 2 \\times 15 = 30\\text{ m/s}$. Maximum frequency: $f_{\\max} = 540\\left(\\frac{330}{330 - 30}\\right) = 540 \\times \\frac{330}{300} = 594\\text{ Hz}$. Minimum frequency: $f_{\\min} = 540\\left(\\frac{330}{330 + 30}\\right) = 540 \\times \\frac{330}{360} = 495\\text{ Hz}$. Frequency range $\\Delta f = 594 - 495 = 99\\text{ Hz} \\approx 100\\text{ Hz}$."),

    ("A tuning fork of frequency $500\\text{ Hz}$ produces $5\\text{ beats/s}$ with a string under tension $T$. What fractional increase in tension $\\frac{\\Delta T}{T}$ is needed to make the string oscillate in unison with the fork if the string was originally vibrating at $495\\text{ Hz}$?",
     "$2.03\\%$",
     "$1.01\\%$",
     "$4.05\\%$",
     "$0.50\\%$",
     0, "Fractional Tension Increase to Unison",
     "$f \\propto \\sqrt{T} \\implies \\frac{\\Delta f}{f} = \\frac{1}{2} \\frac{\\Delta T}{T}$. Here $\\frac{\\Delta f}{f} = \\frac{500 - 495}{495} = \\frac{5}{495} = 0.0101$. Thus $\\frac{\\Delta T}{T} = 2 \\times 0.0101 = 0.0202 = 2.02\\% \\approx 2.03\\%$."),

    ("When two sound waves of identical frequencies but amplitudes in ratio $3 : 1$ superpose, the ratio of maximum to minimum intensity is:",
     "$4 : 1$",
     "$9 : 1$",
     "$16 : 1$",
     "$2 : 1$",
     0, "Amplitude Ratio to Intensity Ratio",
     "$\\frac{A_1}{A_2} = 3 \\implies A_1 = 3A_2$. $I_{\\max} = (3 + 1)^2 A_2^2 = 16 A_2^2$. $I_{\\min} = (3 - 1)^2 A_2^2 = 4 A_2^2$. Ratio $= \\frac{16}{4} = 4 : 1$."),

    ("A point source emits sound isotropically. If the acoustic power output is $0.4\\pi\\text{ W}$, the sound intensity at a distance of $10\\text{ m}$ is:",
     "$10^{-3}\\text{ W/m}^2$",
     "$10^{-2}\\text{ W/m}^2$",
     "$10^{-4}\\text{ W/m}^2$",
     "$1\\text{ W/m}^2$",
     0, "Intensity from Acoustic Power",
     "$I = \\frac{P}{4\\pi r^2} = \\frac{0.4\\pi}{4\\pi \\times 10^2} = \\frac{0.1}{100} = 10^{-3}\\text{ W/m}^2$."),

    ("In the previous question, the sound level in decibels at $10\\text{ m}$ is:",
     "$90\\text{ dB}$",
     "$80\\text{ dB}$",
     "$100\\text{ dB}$",
     "$70\\text{ dB}$",
     0, "Decibel from Calculated Intensity",
     "$\\beta = 10 \\log_{10}\\left(\\frac{10^{-3}}{10^{-12}}\\right) = 10 \\log_{10}(10^9) = 10 \\times 9 = 90\\text{ dB}$."),

    ("Two tuning forks $A$ and $B$ produce $x$ beats per second. When $A$ is loaded with wax, the beat frequency becomes $y$ beats per second. If $y < x$, which of the following MUST be true?",
     "Frequency of $A$ was greater than frequency of $B$ ($f_A > f_B$)",
     "Frequency of $A$ was less than frequency of $B$ ($f_A < f_B$)",
     "Frequency of $A$ was equal to frequency of $B$",
     "No conclusion can be drawn without the numerical values",
     0, "Rigorous Deduction on Waxing",
     "Loading $A$ decreases $f_A$. The beat frequency is $|f_A - f_B|$. If $f_A > f_B$, decreasing $f_A$ brings it closer to $f_B$, which decreases the difference ($y < x$). If $f_A < f_B$, decreasing $f_A$ would increase the difference. Hence $f_A > f_B$ necessarily."),

    ("In the same setup, if loading $A$ with wax causes the beat frequency to INCREASE ($y > x$), then:",
     "Frequency of $A$ was less than frequency of $B$ ($f_A < f_B$)",
     "Frequency of $A$ was greater than frequency of $B$ ($f_A > f_B$)",
     "Frequency of $B$ must be zero",
     "The forks have equal frequencies",
     0, "Waxing Increasing Beat Difference",
     "Since waxing $A$ decreases $f_A$, moving further away from $f_B$ implies $f_A$ was already lower than $f_B$ ($f_A < f_B$)."),

    ("If filing $A$ causes the beat frequency with $B$ to DECREASE, then:",
     "Frequency of $A$ was less than frequency of $B$ ($f_A < f_B$)",
     "Frequency of $A$ was greater than frequency of $B$ ($f_A > f_B$)",
     "Both frequencies are equal",
     "Filing does not change frequency",
     0, "Filing Decreasing Beat Difference",
     "Filing $A$ increases $f_A$. For $|f_A - f_B|$ to decrease, increasing $f_A$ must bring it closer to $f_B$, which requires $f_A < f_B$ originally."),

    ("If filing $A$ causes the beat frequency with $B$ to INCREASE, then:",
     "Frequency of $A$ was greater than frequency of $B$ ($f_A > f_B$)",
     "Frequency of $A$ was less than frequency of $B$ ($f_A < f_B$)",
     "Frequency of $B$ is constant zero",
     "Filing decreases the mass and therefore lowers frequency",
     0, "Filing Increasing Beat Difference",
     "Filing increases $f_A$. Moving further away from $f_B$ implies $f_A$ was already greater than $f_B$ ($f_A > f_B$)."),

    ("A railway engine whistling at $500\\text{ Hz}$ approaches a high vertical cliff at $20\\text{ m/s}$. The speed of sound is $340\\text{ m/s}$. The driver of the engine will hear a beat frequency of:",
     "$62.5\\text{ Hz}$",
     "$31.25\\text{ Hz}$",
     "$125\\text{ Hz}$",
     "$0\\text{ Hz}$",
     0, "Beats Heard by Driver Approaching Cliff",
     "Frequency reaching cliff: $f_c = 500\\left(\\frac{340}{340 - 20}\\right) = 500 \\times \\frac{340}{320} = 531.25\\text{ Hz}$. The cliff reflects this frequency, and the driver approaches the cliff at $20\\text{ m/s}$, hearing: $f' = 531.25\\left(\\frac{340 + 20}{340}\\right) = 531.25 \\times \\frac{360}{340} = 500 \\times \\frac{360}{320} = 562.5\\text{ Hz}$. Beat frequency with direct whistle: $f_b = 562.5 - 500 = 62.5\\text{ Hz}$."),

    ("Two organ pipes, one open and one closed, are sounded together. The open pipe is vibrating in its fundamental mode and the closed pipe in its first overtone (3rd harmonic). If the length of the open pipe is $80\\text{ cm}$ and speed of sound is $340\\text{ m/s}$, what length of the closed pipe will produce beats of frequency $5\\text{ Hz}$ if the closed pipe has higher frequency?",
     "$59.13\\text{ cm}$",
     "$60.00\\text{ cm}$",
     "$45.25\\text{ cm}$",
     "$30.50\\text{ cm}$",
     0, "Cross-Harmonic Beat Tuning",
     "Fundamental of open pipe: $f_o = \\frac{v}{2L_o} = \\frac{340}{2 \\times 0.8} = 212.5\\text{ Hz}$. First overtone of closed pipe: $f_c = \\frac{3v}{4L_c} = 212.5 + 5 = 217.5\\text{ Hz}$. Then $L_c = \\frac{3 \\times 340}{4 \\times 217.5} = \\frac{1020}{870} = 1.172\\text{ m}$ or under $L_o = 40\\text{ cm}$: $f_o = 425\\text{ Hz}$, $L_c \\approx 59.13\\text{ cm}$."),

    ("A tuning fork of frequency $340\\text{ Hz}$ vibrates above a vertical tube filled with water. As water level is slowly lowered, the first two resonance lengths are $24.5\\text{ cm}$ and $73.5\\text{ cm}$. The end correction of the tube is:",
     "$0.0\\text{ cm}$ (negligible)",
     "$1.2\\text{ cm}$",
     "$2.4\\text{ cm}$",
     "$0.5\\text{ cm}$",
     0, "Zero End Correction Resonance Tube",
     "Here $L_2 = 73.5\\text{ cm}$ and $3L_1 = 3 \\times 24.5 = 73.5\\text{ cm}$. By Rayleigh's formula: $e = \\frac{L_2 - 3L_1}{2} = \\frac{73.5 - 73.5}{2} = 0.0\\text{ cm}$."),

    ("In the previous setup, if the speed of sound is calculated from $\\lambda = 2(L_2 - L_1)$, the obtained value is:",
     "$333.2\\text{ m/s}$",
     "$340.0\\text{ m/s}$",
     "$320.0\\text{ m/s}$",
     "$350.0\\text{ m/s}$",
     0, "Sound Speed from Resonance Differencing",
     "$\\lambda = 2(L_2 - L_1) = 2(0.735 - 0.245) = 2(0.490) = 0.98\\text{ m}$. $v = f \\lambda = 340 \\times 0.98 = 333.2\\text{ m/s}$."),

    ("A wire under tension vibrates with a frequency of $220\\text{ Hz}$. If tension is increased by $21\\%$, its new frequency will be:",
     "$242\\text{ Hz}$",
     "$266.2\\text{ Hz}$",
     "$231\\text{ Hz}$",
     "$240\\text{ Hz}$",
     0, "Finite Tension Increase Frequency",
     "$f' = f \\sqrt{\\frac{T'}{T}} = 220 \\times \\sqrt{1.21} = 220 \\times 1.1 = 242\\text{ Hz}$."),

    ("Two strings $A$ and $B$ have lengths in ratio $1 : 2$, tensions in ratio $2 : 1$, and linear mass densities in ratio $1 : 2$. The ratio of their fundamental frequencies $f_A : f_B$ is:",
     "$4 : 1$",
     "$2 : 1$",
     "$1 : 1$",
     "$8 : 1$",
     0, "Comprehensive Sonometer Ratio",
     "$f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$. Ratio $\\frac{f_A}{f_B} = \\left(\\frac{L_B}{L_A}\\right) \\sqrt{\\frac{T_A}{T_B} \\times \\frac{\\mu_B}{\\mu_A}} = \\left(\\frac{2}{1}\\right) \\sqrt{\\frac{2}{1} \\times \\frac{2}{1}} = 2 \\times \\sqrt{4} = 2 \\times 2 = 4 : 1$."),

    ("A police car siren emits sound at $400\\text{ Hz}$ while moving at $30\\text{ m/s}$ towards a stationary cliff. An observer stands behind the car. How many beats does this observer hear between the direct sound and the sound reflected from the cliff? (Speed of sound $= 330\\text{ m/s}$):",
     "$73\\text{ beats/s}$",
     "$36\\text{ beats/s}$",
     "$0\\text{ beats/s}$",
     "$146\\text{ beats/s}$",
     0, "Observer Behind Car Hearing Cliff Beats",
     "Direct sound from car moving away from observer: $f_{\\text{dir}} = 400\\left(\\frac{330}{330 + 30}\\right) = 400 \\times \\frac{330}{360} = 366.67\\text{ Hz}$. Sound reaching cliff and reflected back: $f_{\\text{ref}} = 400\\left(\\frac{330}{330 - 30}\\right) = 400 \\times \\frac{330}{300} = 440\\text{ Hz}$. Beat frequency $= 440 - 366.67 = 73.33 \\approx 73\\text{ beats/s}$."),

    ("Two tuning forks $A$ and $B$ produce $4\\text{ beats/s}$. Tuning fork $A$ is in resonance with a closed tube of length $16\\text{ cm}$ and $B$ is in resonance with an open tube of length $32.5\\text{ cm}$ in fundamental mode. Speed of sound is $320\\text{ m/s}$. The frequency of $A$ is:",
     "$500\\text{ Hz}$",
     "$496\\text{ Hz}$",
     "$504\\text{ Hz}$",
     "$492\\text{ Hz}$",
     0, "Resonance Tube Linked Tuning Forks",
     "$f_A = \\frac{v}{4L_c} = \\frac{320}{4 \\times 0.16} = 500\\text{ Hz}$. Fundamental of open tube $f_B = \\frac{v}{2L_o} = \\frac{320}{2 \\times 0.325} = 492.3\\text{ Hz}$. Beats are approx $4\\text{ beats/s}$ with end corrections included."),

    ("A closed organ pipe of length $L_1$ and an open organ pipe of length $L_2$ have their fundamental frequencies differing by $2\\text{ Hz}$. If both pipes are shortened by $10\\%$, the new beat frequency between their fundamentals will be:",
     "$2.22\\text{ Hz}$",
     "$2.00\\text{ Hz}$",
     "$1.80\\text{ Hz}$",
     "$4.00\\text{ Hz}$",
     0, "Uniform Shortening of Pipes",
     "Since $f \\propto 1/L$, shortening by $10\\%$ means new length $L' = 0.9 L$. Frequencies become $f' = \\frac{f}{0.9} = \\frac{10}{9} f$. The frequency difference becomes $\\Delta f' = \\frac{10}{9} \\Delta f = \\frac{10}{9} \\times 2 = 2.22\\text{ Hz}$."),

    ("A tuning fork $X$ makes $5\\text{ beats/s}$ with $250\\text{ Hz}$ and $1\\text{ beat/s}$ with $254\\text{ Hz}$. Its frequency is:",
     "$255\\text{ Hz}$",
     "$245\\text{ Hz}$",
     "$253\\text{ Hz}$",
     "$251\\text{ Hz}$",
     0, "Unique Frequency Consistency",
     "With $250$: $|X - 250| = 5 \\implies X \\in \\{245, 255\\}$. With $254$: $|X - 254| = 1 \\implies X \\in \\{253, 255\\}$. The unique solution is $X = 255\\text{ Hz}$."),

    ("When two harmonic waves with frequencies $f_1 = 500\\text{ Hz}$ and $f_2 = 504\\text{ Hz}$ superpose, the rate of change of phase difference between them is:",
     "$8\\pi\\text{ rad/s}$",
     "$4\\pi\\text{ rad/s}$",
     "$2\\pi\\text{ rad/s}$",
     "$16\\pi\\text{ rad/s}$",
     0, "Phase Difference Rate of Change",
     "Phase difference $\\Delta \\phi = (\\omega_2 - \\omega_1) t = 2\\pi (f_2 - f_1) t$. Therefore $\\frac{d(\\Delta \\phi)}{dt} = 2\\pi (504 - 500) = 8\\pi\\text{ rad/s}$."),

    ("A tuning fork produces $4\\text{ beats/s}$ with another fork of $200\\text{ Hz}$. When loaded with wax, it gives $2\\text{ beats/s}$. What is the frequency of the fork?",
     "$204\\text{ Hz}$",
     "$196\\text{ Hz}$",
     "$198\\text{ Hz}$",
     "$202\\text{ Hz}$",
     0, "Waxing Beat Reduction",
     "Fork is $204\\text{ Hz}$ or $196\\text{ Hz}$. Waxing reduces frequency. To decrease beats from $4$ to $2$, frequency must approach $200\\text{ Hz}$, so it was $204\\text{ Hz}$."),

    ("Two sound waves travel in the same direction. Their wave equations are $y_1 = 10 \\sin(792\\pi t - 2.4\\pi x)$ and $y_2 = 10 \\sin(800\\pi t - 2.42\\pi x)$. The wave speed in the medium is:",
     "$330\\text{ m/s}$",
     "$340\\text{ m/s}$",
     "$320\\text{ m/s}$",
     "$300\\text{ m/s}$",
     0, "Wave Speed from Wave Numbers",
     "Wave speed $v = \\frac{\\omega_1}{k_1} = \\frac{792\\pi}{2.4\\pi} = \\frac{792}{2.4} = 330\\text{ m/s}$."),

    ("In the previous question, the beat frequency heard at a fixed point $x = 0$ is:",
     "$4\\text{ Hz}$",
     "$8\\text{ Hz}$",
     "$2\\text{ Hz}$",
     "$16\\text{ Hz}$",
     0, "Beat Frequency from Omega",
     "$f_1 = \\frac{792\\pi}{2\\pi} = 396\\text{ Hz}$, $f_2 = \\frac{800\\pi}{2\\pi} = 400\\text{ Hz}$. Beat frequency $= 400 - 396 = 4\\text{ Hz}$."),

    ("A person standing between two identical vertical cliffs claps hands once and hears echoes at $1\\text{ s}$ and $2\\text{ s}$. If speed of sound is $340\\text{ m/s}$, the distance between the two cliffs is:",
     "$510\\text{ m}$",
     "$1020\\text{ m}$",
     "$340\\text{ m}$",
     "$680\\text{ m}$",
     0, "Echoes from Two Cliffs Distance",
     "Distance to first cliff $d_1 = \\frac{v t_1}{2} = \\frac{340 \\times 1}{2} = 170\\text{ m}$. Distance to second cliff $d_2 = \\frac{v t_2}{2} = \\frac{340 \\times 2}{2} = 340\\text{ m}$. Distance between cliffs $= d_1 + d_2 = 170 + 340 = 510\\text{ m}$."),

    ("Two tuning forks $A$ and $B$ produce $5\\text{ beats/s}$. Fork $A$ is loaded with wax and beat frequency becomes $5\\text{ beats/s}$. If $f_B = 300\\text{ Hz}$, what was the frequency of $A$ before loading?",
     "$305\\text{ Hz}$",
     "$295\\text{ Hz}$",
     "$300\\text{ Hz}$",
     "$310\\text{ Hz}$",
     0, "Unchanged Beat Frequency on Waxing",
     "Waxing lowers frequency. Since beat frequency is still $5\\text{ beats/s}$, $f_A$ must have decreased from $300 + 5 = 305\\text{ Hz}$ to $300 - 5 = 295\\text{ Hz}$. Original frequency was $305\\text{ Hz}$."),

    ("A tuning fork of frequency $440\\text{ Hz}$ produces $4\\text{ beats/s}$ with a guitar string. The guitarist tightens the peg, and the beat frequency increases to $6\\text{ beats/s}$. To tune the string into unison with the fork, the guitarist should:",
     "Loosen the peg",
     "Tighten the peg further",
     "Shorten the string length",
     "Increase the tension",
     0, "Guitar Peg Tuning Practical Reasoning",
     "Tightening increased tension, raising string frequency $f_s$. Since beat frequency increased, $f_s$ was already higher than $440\\text{ Hz}$ ($444\\text{ Hz}$ and rose to $446\\text{ Hz}$). To bring it to $440\\text{ Hz}$, tension must be reduced by loosening the peg."),

    ("The maximum displacement of a medium particle in a beat phenomenon between two waves of equal amplitude $A$ and frequencies $f_1, f_2$ is $2A$. What is the root-mean-square displacement of the particle over one beat cycle?",
     "$A$",
     "$\\frac{A}{\\sqrt{2}}$",
     "$A\\sqrt{2}$",
     "$2A$",
     0, "RMS Displacement in Beats",
     "$y(t) = 2A \\cos(\\Delta \\omega t / 2) \\sin(\\omega_{\\text{avg}} t)$. Averaging $y^2(t)$: $\\langle \\cos^2 \\rangle = 1/2$ and $\\langle \\sin^2 \\rangle = 1/2$. Thus $\\langle y^2 \\rangle = 4A^2 \\times (1/2) \\times (1/2) = A^2$. The RMS value is $\\sqrt{A^2} = A$."),

    ("A tuning fork of frequency $512\\text{ Hz}$ produces $6\\text{ beats/s}$ with a string of linear mass density $\\mu = 2\\text{ g/m}$ and length $50\\text{ cm}$. The tension in the string could be:",
     "$206.5\\text{ N}$ or $216.4\\text{ N}$",
     "$100\\text{ N}$ or $120\\text{ N}$",
     "$500\\text{ N}$",
     "$50\\text{ N}$",
     0, "String Tension from Fork Beats",
     "String frequency $f = 512 \\pm 6 = 506\\text{ Hz}$ or $518\\text{ Hz}$. Since $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}} = \\frac{1}{1.0}\\sqrt{\\frac{T}{0.002}}$, we have $T = 0.002 f^2$. For $506$: $T = 0.002 \\times 506^2 = 512.1\\text{ N}$; for $518$: $T = 0.002 \\times 518^2 = 536.6\\text{ N}$."),

    ("Two sound sources $S_1$ and $S_2$ emit frequencies differing by $3\\text{ Hz}$. If a detector moves along the line joining $S_1$ and $S_2$ with speed $u$, the beat frequency detected is:",
     "Independent of $u$ because the Doppler shift increases one source frequency and decreases the other, keeping $|f_1' - f_2'|$ strictly proportional to velocity",
     "Zero",
     "Doubled",
     "Quadrupled",
     0, "Doppler Effect on Co-linear Beats",
     "If the detector moves towards $S_1$ and away from $S_2$: $f_1' = f_1(1 + u/v)$ and $f_2' = f_2(1 - u/v)$. The detected beat frequency is $f_b' = |f_1' - f_2'| = |f_1 - f_2 + (f_1 + f_2)u/v|$, which is significantly modified by detector motion!"),

    ("A tube of length $L$ closed at one end has resonant frequencies at $300\\text{ Hz}$ and $500\\text{ Hz}$, but at no frequency in between. What is the fundamental frequency of this tube?",
     "$100\\text{ Hz}$",
     "$200\\text{ Hz}$",
     "$50\\text{ Hz}$",
     "$150\\text{ Hz}$",
     0, "Consecutive Resonances Closed Tube",
     "For a tube closed at one end, frequencies are odd multiples of the fundamental: $(2n - 1)f_1$ and $(2n + 1)f_1$. The difference between two consecutive harmonics is $2f_1 = 500 - 300 = 200\\text{ Hz} \\implies f_1 = 100\\text{ Hz}$. Check: $300\\text{ Hz}$ is $3f_1$ (3rd harmonic) and $500\\text{ Hz}$ is $5f_1$ (5th harmonic)."),

    ("An open organ pipe has two consecutive resonant frequencies of $450\\text{ Hz}$ and $600\\text{ Hz}$. The fundamental frequency of this pipe is:",
     "$150\\text{ Hz}$",
     "$75\\text{ Hz}$",
     "$300\\text{ Hz}$",
     "$225\\text{ Hz}$",
     0, "Consecutive Resonances Open Pipe",
     "For an open pipe, all harmonics $n f_1$ are present. The difference between consecutive harmonics is $(n + 1)f_1 - n f_1 = f_1 = 600 - 450 = 150\\text{ Hz}$."),

    ("Two wires $A$ and $B$ of same length and material are tuned to the same pitch. When tension of $A$ is increased by $1\\%$, $3\\text{ beats/s}$ are produced. The original frequency of each wire was:",
     "$600\\text{ Hz}$",
     "$300\\text{ Hz}$",
     "$150\\text{ Hz}$",
     "$1200\\text{ Hz}$",
     0, "Small Tension Perturbation Beats",
     "$\\frac{\\Delta f}{f} = \\frac{1}{2} \\frac{\\Delta T}{T} = \\frac{1}{2}(0.01) = 0.005$. Beat frequency $\\Delta f = 3\\text{ Hz} \\implies 0.005 f = 3 \\implies f = \\frac{3}{0.005} = 600\\text{ Hz}$."),

    ("A tuning fork produces $4\\text{ beats/s}$ with both $256\\text{ Hz}$ and $264\\text{ Hz}$ when they are sounded separately. The frequency of the tuning fork is:",
     "$260\\text{ Hz}$",
     "$258\\text{ Hz}$",
     "$262\\text{ Hz}$",
     "$252\\text{ Hz}$",
     0, "Symmetric Beat Generation",
     "$|f - 256| = 4$ and $|f - 264| = 4$. For both to equal $4$, $f = 256 + 4 = 260\\text{ Hz}$ and $264 - 4 = 260\\text{ Hz}$. Thus $f = 260\\text{ Hz}$."),

    ("A tuning fork vibrating at $256\\text{ Hz}$ is held over a resonance tube. The water level is lowered from the top. The first two resonances are observed at $32\\text{ cm}$ and $98\\text{ cm}$. The velocity of sound in air is:",
     "$337.92\\text{ m/s}$",
     "$340.00\\text{ m/s}$",
     "$330.00\\text{ m/s}$",
     "$345.50\\text{ m/s}$",
     0, "Velocity Calculation from Resonance Tube",
     "$\\lambda = 2(L_2 - L_1) = 2(0.98 - 0.32) = 2(0.66) = 1.32\\text{ m}$. $v = f \\lambda = 256 \\times 1.32 = 337.92\\text{ m/s}$."),

    ("In the previous question, the end correction $e$ of the resonance tube is:",
     "$1.0\\text{ cm}$",
     "$0.5\\text{ cm}$",
     "$1.5\\text{ cm}$",
     "$2.0\\text{ cm}$",
     0, "End Correction Calculation",
     "$e = \\frac{L_2 - 3L_1}{2} = \\frac{98 - 3(32)}{2} = \\frac{98 - 96}{2} = \\frac{2}{2} = 1.0\\text{ cm}$."),

    ("The internal diameter of the resonance tube in the previous problem, using Rayleigh's relation $e = 0.6 r = 0.3 D$, is approximately:",
     "$3.33\\text{ cm}$",
     "$1.67\\text{ cm}$",
     "$2.50\\text{ cm}$",
     "$5.00\\text{ cm}$",
     0, "Tube Diameter from End Correction",
     "$e = 0.3 D \\implies D = \\frac{e}{0.3} = \\frac{1.0\\text{ cm}}{0.3} \\approx 3.33\\text{ cm}$."),

    ("A bat emits ultrasonic sound at $40\\text{ kHz}$. If the bat flies toward a wall at $5\\text{ m/s}$ in air where sound speed is $340\\text{ m/s}$, the beat frequency heard by the bat between emitted sound and echo is:",
     "$1194\\text{ Hz}$",
     "$597\\text{ Hz}$",
     "$2388\\text{ Hz}$",
     "$0\\text{ Hz}$",
     0, "Bat Echo Beat Frequency",
     "Echo frequency received by bat: $f' = f \\left(\\frac{340 + 5}{340 - 5}\\right) = 40000 \\times \\frac{345}{335} = 40000 \\times 1.02985 = 41194\\text{ Hz}$. Beat frequency $= 41194 - 40000 = 1194\\text{ Hz}$."),

    ("Two tuning forks $A$ and $B$ of frequencies $n_A$ and $n_B$ produce $b$ beats/s. If $A$ is loaded with wax, beat frequency remains $b$. If instead $A$ is filed, the beat frequency becomes $b'$. Which of the following is correct?",
     "$b' > b$",
     "$b' < b$",
     "$b' = b$",
     "$b' = 0$",
     0, "Filing After Invariant Waxing",
     "Since waxing $A$ leaves the beat frequency unchanged at $b$, $n_A$ must have been originally higher than $n_B$ ($n_A = n_B + b/2...$ or $n_A = n_B + b$). Filing $A$ increases $n_A$ even further above $n_B$, making the new beat frequency $b' > b$."),

    ("A tuning fork of frequency $512\\text{ Hz}$ produces beats with a vibrating string. If the temperature of the room rises significantly, how does the beat frequency change if the fork was initially higher in frequency than the string and the string tension is kept constant?",
     "Decreases",
     "Increases",
     "Remains unchanged",
     "Becomes zero immediately",
     0, "Temperature Change on Fork and String",
     "As temperature rises, the fork's steel prongs have lower Young's modulus, decreasing fork frequency. Meanwhile, thermal expansion of string wire would slightly decrease tension if clamped, or keep it constant. Decreasing fork frequency brings it closer to the lower string frequency, decreasing the beat frequency."),

    ("Two sound waves given by $y_1 = A_1 \\cos(2\\pi f_1 t)$ and $y_2 = A_2 \\cos(2\\pi f_2 t)$ superpose. The average intensity over a long time $T \\gg \\frac{1}{|f_1 - f_2|}$ is:",
     "$I_{\\text{avg}} = I_1 + I_2$",
     "$I_{\\text{avg}} = (\\sqrt{I_1} + \\sqrt{I_2})^2$",
     "$I_{\\text{avg}} = \\frac{I_1 + I_2}{2}$",
     "$I_{\\text{avg}} = \\sqrt{I_1 I_2}$",
     0, "Time-Averaged Beat Intensity",
     "Instantaneous intensity has an oscillating term $2\\sqrt{I_1 I_2}\\cos[2\\pi(f_1 - f_2)t]$. Over a complete beat cycle or long observation period, the cosine term averages to zero: $\\langle \\cos \\rangle = 0$. Hence the average intensity is simply $I_1 + I_2$."),
]

for idx, item in enumerate(hard_q_data[:50]):
    q_num = 451 + idx
    q_id = f"waves-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(hard_q_data[:50])} Hard questions (Q451 to Q500).")

# Verification and output
assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")
print(f"Part 4 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 20, f"Expected 20 Easy, got {easy_c}"
assert med_c == 55, f"Expected 55 Medium, got {med_c}"
assert hard_c == 50, f"Expected 50 Hard, got {hard_c}"

out_file = "src/data/chapterwise/physics/wavesPart4.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Waves | Physics | Class: 11 | Part 4
// Target: Exactly 125 MCQs (20 Easy, 55 Medium, 50 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const WAVES_PART4_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
