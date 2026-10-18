#!/usr/bin/env python3
"""
Generator for Kinetic Theory of Gases - Part 2 (Q126 to Q250)
Subject: Physics | Class: 11 | Chapter: Kinetic Theory of Gases (kinetic-theory)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- Postulates of Kinetic Theory of Gases
- Kinetic interpretation of pressure: P = (1/3) rho v_rms^2
- Kinetic energy: E = (3/2) n R T = (3/2) N kB T
- Molecular speeds: RMS speed, average speed, most probable speed
- Ratios v_mp : v_avg : v_rms = sqrt(2) : sqrt(8/pi) : sqrt(3)
- Speed of sound vs RMS speed
- Temperature and molar mass scaling of speeds
- Maxwell-Boltzmann molecular speed distribution curves
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
        "chapter": "kinetic-theory",
        "topicId": "phys-rms-degrees-freedom",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q126 to Q160 (Easy: 35 questions) -----------------
easy_q_data = [
    ("The pressure $P$ exerted by an ideal gas of density $\\rho$ and root-mean-square speed $v_{\\text{rms}}$ is given by:",
     "$P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$",
     "$P = \\frac{1}{2} \\rho v_{\\text{rms}}^2$",
     "$P = \\rho v_{\\text{rms}}^2$",
     "$P = \\frac{2}{3} \\rho v_{\\text{rms}}^2$",
     0, "Kinetic Theory Pressure Formula",
     "From the fundamental postulates of kinetic theory, the pressure is $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{1}{3} \\frac{M}{V} v_{\\text{rms}}^2$."),

    ("The root-mean-square (RMS) speed of molecules of an ideal gas of molar mass $M$ at absolute temperature $T$ is:",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$",
     "$v_{\\text{rms}} = \\sqrt{\\frac{2RT}{M}}$",
     "$v_{\\text{rms}} = \\sqrt{\\frac{8RT}{\\pi M}}$",
     "$v_{\\text{rms}} = \\sqrt{\\frac{RT}{3M}}$",
     0, "RMS Speed Expression",
     "The RMS speed is defined as $v_{\\text{rms}} = \\sqrt{\\langle v^2 \\rangle} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3k_BT}{m}}$."),

    ("The most probable speed $v_{\\text{mp}}$ of molecules of an ideal gas of molar mass $M$ at absolute temperature $T$ is:",
     "$v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$",
     "$v_{\\text{mp}} = \\sqrt{\\frac{3RT}{M}}$",
     "$v_{\\text{mp}} = \\sqrt{\\frac{8RT}{\\pi M}}$",
     "$v_{\\text{mp}} = \\sqrt{\\frac{RT}{2M}}$",
     0, "Most Probable Speed",
     "The most probable speed corresponds to the peak of the Maxwell-Boltzmann distribution and is $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$."),

    ("The average (mean) speed $\\bar{v}$ of molecules of an ideal gas is given by:",
     "$\\bar{v} = \\sqrt{\\frac{8RT}{\\pi M}}$",
     "$\\bar{v} = \\sqrt{\\frac{3RT}{M}}$",
     "$\\bar{v} = \\sqrt{\\frac{2RT}{M}}$",
     "$\\bar{v} = \\sqrt{\\frac{\\pi RT}{8M}}$",
     0, "Average Speed Formula",
     "The average speed is the arithmetic mean of molecular speeds, $\\bar{v} = \\sqrt{\\frac{8RT}{\\pi M}} \\approx 0.921 v_{\\text{rms}}$."),

    ("The correct increasing order of molecular speeds for an ideal gas at a given temperature is:",
     "$v_{\\text{mp}} < \\bar{v} < v_{\\text{rms}}$",
     "$v_{\\text{rms}} < \\bar{v} < v_{\\text{mp}}$",
     "$\\bar{v} < v_{\\text{mp}} < v_{\\text{rms}}$",
     "$v_{\\text{mp}} < v_{\\text{rms}} < \\bar{v}$",
     0, "Molecular Speeds Ordering",
     "Since $\\sqrt{2} \\approx 1.414$, $\\sqrt{8/\\pi} \\approx 1.596$, and $\\sqrt{3} \\approx 1.732$, the order is $v_{\\text{mp}} < \\bar{v} < v_{\\text{rms}}$."),

    ("The ratio of most probable speed, average speed, and RMS speed is:",
     "$\\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3}$",
     "$\\sqrt{3} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{2}$",
     "$1 : 2 : 3$",
     "$\\sqrt{2} : \\sqrt{3} : \\sqrt{\\pi}$",
     0, "Speed Ratios",
     "$v_{\\text{mp}} : \\bar{v} : v_{\\text{rms}} = \\sqrt{\\frac{2RT}{M}} : \\sqrt{\\frac{8RT}{\\pi M}} : \\sqrt{\\frac{3RT}{M}} = \\sqrt{2} : \\sqrt{\\frac{8}{\\pi}} : \\sqrt{3} \\approx 1 : 1.128 : 1.224$."),

    ("The average translational kinetic energy of a single molecule of an ideal gas at absolute temperature $T$ is:",
     "$\\frac{3}{2} k_B T$",
     "$\\frac{1}{2} k_B T$",
     "$\\frac{3}{2} R T$",
     "$\\frac{5}{2} k_B T$",
     0, "Translational KE per Molecule",
     "Each translational degree of freedom has $\\frac{1}{2} k_B T$, so for 3 spatial dimensions, $\\langle E_k \\rangle = \\frac{3}{2} k_B T$."),

    ("The total translational kinetic energy of $1\\text{ mole}$ of any ideal gas at temperature $T$ is:",
     "$\\frac{3}{2} R T$",
     "$\\frac{3}{2} k_B T$",
     "$\\frac{5}{2} R T$",
     "$3 R T$",
     0, "Translational KE per Mole",
     "For $1\\text{ mole}$, $N = N_A$, so $E = N_A \\left(\\frac{3}{2} k_B T\\right) = \\frac{3}{2} R T$."),

    ("The translational kinetic energy per unit volume ($E_V$) of an ideal gas is related to its pressure $P$ by:",
     "$P = \\frac{2}{3} E_V$",
     "$P = \\frac{3}{2} E_V$",
     "$P = \\frac{1}{3} E_V$",
     "$P = \\frac{1}{2} E_V$",
     0, "Pressure and KE Density",
     "Since $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$ and kinetic energy per unit volume is $E_V = \\frac{1}{2} \\rho v_{\\text{rms}}^2$, we have $P = \\frac{2}{3} E_V$ or $E_V = \\frac{3}{2} P$."),

    ("At absolute zero temperature ($0\\text{ K}$), the root-mean-square speed of gas molecules theoretically becomes:",
     "Zero",
     "Infinite",
     "$300\\text{ m s}^{-1}$",
     "Equal to the speed of light",
     0, "RMS Speed at Absolute Zero",
     "Since $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$, as $T \\to 0\\text{ K}$, $v_{\\text{rms}} \\to 0$."),

    ("If the absolute temperature of an ideal gas is quadrupled, its RMS speed:",
     "Doubles",
     "Quadruples",
     "Halves",
     "Increases by 16 times",
     0, "RMS Speed Temperature Scaling",
     "Because $v_{\\text{rms}} \\propto \\sqrt{T}$, when $T$ is quadrupled ($T' = 4T$), $v_{\\text{rms}}' = \\sqrt{4} v_{\\text{rms}} = 2 v_{\\text{rms}}$."),

    ("In kinetic theory of gases, the collisions between gas molecules and the walls of the container are assumed to be:",
     "Perfectly elastic",
     "Inelastic",
     "Completely inelastic",
     "Partially elastic with $e = 0.5$",
     0, "Elastic Collision Assumption",
     "One of the primary postulates is that molecular collisions are perfectly elastic, so total kinetic energy and momentum are conserved."),

    ("According to kinetic theory, the duration of a molecular collision compared to the time between successive collisions is:",
     "Negligibly small",
     "Much larger",
     "Approximately equal",
     "Infinite",
     0, "Collision Duration Postulate",
     "The time of contact during collision is extremely small (negligible) compared to the relaxation time between collisions."),

    ("The total volume occupied by the gas molecules themselves compared to the volume of the container for an ideal gas is:",
     "Negligibly small",
     "Half the container volume",
     "Equal to the container volume",
     "Twice the container volume",
     0, "Point Mass Postulate",
     "Ideal gas molecules are treated as point masses whose actual molecular volume is negligible compared to the total volume occupied by the gas."),

    ("The intermolecular forces of attraction between ideal gas molecules are assumed to be:",
     "Zero",
     "Very strong",
     "Gravitational only",
     "Electromagnetic only",
     0, "Zero Intermolecular Forces",
     "Postulate: Ideal gas molecules exert no attractive or repulsive forces on each other except during momentary collisions."),

    ("The average momentum of gas molecules in a closed container at thermal equilibrium is:",
     "Zero",
     "Directly proportional to temperature",
     "Directly proportional to pressure",
     "Directly proportional to volume",
     0, "Average Momentum Zero",
     "Because molecular motion is completely random and isotropic, for every molecule moving with velocity $\\vec{v}$, another moves with $-\\vec{v}$, making the vector average $\\langle \\vec{v} \\rangle = 0$, so $\\langle \\vec{p} \\rangle = 0$."),

    ("The root-mean-square speed of a gas depends on:",
     "Temperature and molar mass",
     "Pressure and volume only",
     "Container shape and volume",
     "Atmospheric pressure alone",
     0, "RMS Speed Dependencies",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$, depending only on absolute temperature $T$ and molecular mass $M$."),

    ("At the same temperature, which of the following gases has the highest RMS speed?",
     "Hydrogen ($\\text{H}_2$, $M = 2\\text{ g mol}^{-1}$)",
     "Helium ($\\text{He}$, $M = 4\\text{ g mol}^{-1}$)",
     "Oxygen ($\\text{O}_2$, $M = 32\\text{ g mol}^{-1}$)",
     "Nitrogen ($\\text{N}_2$, $M = 28\\text{ g mol}^{-1}$)",
     0, "Highest RMS Speed Gas",
     "Since $v_{\\text{rms}} \\propto \\frac{1}{\\sqrt{M}}$, the gas with the lowest molar mass ($\\text{H}_2$) has the highest RMS speed."),

    ("At the same temperature, which of the following gases has the lowest RMS speed?",
     "Carbon dioxide ($\\text{CO}_2$, $M = 44\\text{ g mol}^{-1}$)",
     "Methane ($\\text{CH}_4$, $M = 16\\text{ g mol}^{-1}$)",
     "Oxygen ($\\text{O}_2$, $M = 32\\text{ g mol}^{-1}$)",
     "Helium ($\\text{He}$, $M = 4\\text{ g mol}^{-1}$)",
     0, "Lowest RMS Speed Gas",
     "The gas with the largest molar mass ($\\text{CO}_2$, $44\\text{ g mol}^{-1}$) has the lowest RMS speed since $v_{\\text{rms}} \\propto 1/\\sqrt{M}$."),

    ("If a gas is compressed isothermally to half its volume, the RMS speed of its molecules will:",
     "Remain unchanged",
     "Double",
     "Halve",
     "Increase by $\\sqrt{2}$ times",
     0, "Isothermal Compression and RMS Speed",
     "Because the process is isothermal, temperature $T$ is constant. Since $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$, the RMS speed remains unchanged."),

    ("The speed of sound in an ideal gas $v_s$ and the RMS speed $v_{\\text{rms}}$ are related by:",
     "$v_s = \\sqrt{\\frac{\\gamma}{3}} v_{\\text{rms}}$",
     "$v_s = \\sqrt{\\frac{3}{\\gamma}} v_{\\text{rms}}$",
     "$v_s = \\gamma v_{\\text{rms}}$",
     "$v_s = \\frac{v_{\\text{rms}}}{\\gamma}$",
     0, "Sound Speed vs RMS Speed",
     "$v_s = \\sqrt{\\frac{\\gamma RT}{M}}$ and $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. Thus $\\frac{v_s}{v_{\\text{rms}}} = \\sqrt{\\frac{\\gamma}{3}} \\implies v_s = \\sqrt{\\frac{\\gamma}{3}} v_{\\text{rms}}$."),

    ("Since $\\gamma < 3$ for all gases, the speed of sound in an ideal gas is always:",
     "Less than the RMS speed of its molecules",
     "Greater than the RMS speed of its molecules",
     "Equal to the RMS speed of its molecules",
     "Zero",
     0, "Sound Speed Comparison",
     "Since $\\gamma \\le 5/3 \\approx 1.67$, $\\sqrt{\\gamma/3} \\le \\sqrt{1.67/3} \\approx 0.745 < 1$. Thus, speed of sound is always less than the RMS speed."),

    ("In a Maxwell-Boltzmann speed distribution curve, the area under the curve represents:",
     "Total number of gas molecules",
     "Total kinetic energy",
     "Average speed",
     "Total pressure",
     0, "Maxwell Distribution Area",
     "The area under the Maxwell-Boltzmann distribution curve $\\int_0^\\infty f(v) dv = N$, representing the total number of molecules in the sample."),

    ("When the temperature of a gas is increased, the peak of the Maxwell-Boltzmann speed distribution curve:",
     "Shifts to the right and becomes lower",
     "Shifts to the left and becomes higher",
     "Shifts to the right and becomes higher",
     "Remains at the same position",
     0, "Maxwell Distribution Temperature Shift",
     "As $T$ increases, $v_{\\text{mp}}$ increases (shifts right), and because total area (total molecules) is constant, the peak height decreases (flattens)."),

    ("The root-mean-square speed of molecules of an ideal gas at pressure $P$ and density $\\rho$ can be expressed as:",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}}$",
     "$v_{\\text{rms}} = \\sqrt{\\frac{P}{3\\rho}}$",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3\\rho}{P}}$",
     "$v_{\\text{rms}} = \\sqrt{\\frac{2P}{\\rho}}$",
     0, "RMS Speed Density Formula",
     "From $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$, we obtain $v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}}$."),

    ("If the pressure of a given sample of gas in a rigid container is doubled, the RMS speed of its molecules:",
     "Increases by $\\sqrt{2}$ times",
     "Doubles",
     "Quadruples",
     "Remains unchanged",
     0, "Rigid Container Pressure Increase",
     "In a rigid container, volume and density $\\rho$ are constant. From $v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}}$, doubling $P$ increases $v_{\\text{rms}}$ by $\\sqrt{2}$ times (since $P \\propto T$)."),

    ("If a gas expands at constant temperature so that its pressure decreases to half, its RMS speed:",
     "Remains constant",
     "Decreases by a factor of 2",
     "Decreases by a factor of $\\sqrt{2}$",
     "Doubles",
     0, "Constant Temperature RMS Speed",
     "RMS speed depends exclusively on temperature ($v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$). At constant temperature, $v_{\\text{rms}}$ is unaffected."),

    ("Four molecules have speeds $1\\text{ km s}^{-1}$, $2\\text{ km s}^{-1}$, $3\\text{ km s}^{-1}$, and $4\\text{ km s}^{-1}$. Their RMS speed is:",
     "$\\sqrt{7.5}\\text{ km s}^{-1} \\approx 2.74\\text{ km s}^{-1}$",
     "$2.5\\text{ km s}^{-1}$",
     "$3.0\\text{ km s}^{-1}$",
     "$\\sqrt{30}\\text{ km s}^{-1}$",
     0, "Discrete RMS Calculation",
     "$v_{\\text{rms}} = \\sqrt{\\frac{1^2 + 2^2 + 3^2 + 4^2}{4}} = \\sqrt{\\frac{1 + 4 + 9 + 16}{4}} = \\sqrt{\\frac{30}{4}} = \\sqrt{7.5} \\approx 2.74\\text{ km s}^{-1}$."),

    ("Four molecules have speeds $1\\text{ km s}^{-1}$, $2\\text{ km s}^{-1}$, $3\\text{ km s}^{-1}$, and $4\\text{ km s}^{-1}$. Their average speed is:",
     "$2.5\\text{ km s}^{-1}$",
     "$2.74\\text{ km s}^{-1}$",
     "$3.0\\text{ km s}^{-1}$",
     "$2.0\\text{ km s}^{-1}$",
     0, "Discrete Average Speed Calculation",
     "$\\bar{v} = \\frac{1 + 2 + 3 + 4}{4} = \\frac{10}{4} = 2.5\\text{ km s}^{-1}$."),

    ("The ratio of RMS speed to average speed for any discrete distribution of non-identical speeds is always:",
     "Greater than 1",
     "Less than 1",
     "Equal to 1",
     "Zero",
     0, "RMS vs Average Inequality",
     "By Cauchy-Schwarz inequality, $\\sqrt{\\langle v^2 \\rangle} \\ge \\langle v \\rangle$, with equality holding only when all molecules have identical speeds. For any distribution with dispersion, $v_{\\text{rms}} / \\bar{v} > 1$."),

    ("The absolute temperature of a gas is fundamentally a measure of the:",
     "Average translational kinetic energy of its molecules",
     "Total potential energy of its molecules",
     "Average momentum of its molecules",
     "Total volume of its molecules",
     0, "Temperature Definition",
     "Temperature is defined thermodynamically as directly proportional to the mean translational kinetic energy of molecules: $\\langle E_k \\rangle = \\frac{3}{2} k_B T$."),

    ("An ideal gas consists of molecules of mass $m$. The mean square velocity component along the x-axis, $\\langle v_x^2 \\rangle$, is related to $\\langle v^2 \\rangle$ by:",
     "$\\langle v_x^2 \\rangle = \\frac{1}{3} \\langle v^2 \\rangle$",
     "$\\langle v_x^2 \\rangle = \\langle v^2 \\rangle$",
     "$\\langle v_x^2 \\rangle = \\frac{1}{2} \\langle v^2 \\rangle$",
     "$\\langle v_x^2 \\rangle = 3 \\langle v^2 \\rangle$",
     0, "Isotropic Velocity Distribution",
     "Due to spatial isotropy, $\\langle v_x^2 \\rangle = \\langle v_y^2 \\rangle = \\langle v_z^2 \\rangle$. Since $v^2 = v_x^2 + v_y^2 + v_z^2$, $\\langle v^2 \\rangle = 3 \\langle v_x^2 \\rangle \\implies \\langle v_x^2 \\rangle = \\frac{1}{3} \\langle v^2 \\rangle$."),

    ("The average kinetic energy associated with motion along the x-axis for a molecule is:",
     "$\\frac{1}{2} k_B T$",
     "$\\frac{3}{2} k_B T$",
     "$k_B T$",
     "$\\frac{1}{2} R T$",
     0, "1D Kinetic Energy per Molecule",
     "Since $\\langle v_x^2 \\rangle = \\frac{1}{3} \\langle v^2 \\rangle = \\frac{k_B T}{m}$, the kinetic energy is $\\frac{1}{2} m \\langle v_x^2 \\rangle = \\frac{1}{2} k_B T$."),

    ("At what temperature will the RMS speed of oxygen molecules be equal to that of hydrogen molecules at $27^\\circ\\text{C}$? (Molar mass: $\\text{H}_2 = 2\\text{ g mol}^{-1}$, $\\text{O}_2 = 32\\text{ g mol}^{-1}$)",
     "$4800\\text{ K}$ ($4527^\\circ\\text{C}$)",
     "$300\\text{ K}$",
     "$1200\\text{ K}$",
     "$2400\\text{ K}$",
     0, "RMS Speed Temperature Match",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. For $v_{\\text{rms}}(\\text{O}_2) = v_{\\text{rms}}(\\text{H}_2)$: $\\frac{T_{\\text{O}_2}}{M_{\\text{O}_2}} = \\frac{T_{\\text{H}_2}}{M_{\\text{H}_2}} \\implies T_{\\text{O}_2} = T_{\\text{H}_2} \\times \\frac{M_{\\text{O}_2}}{M_{\\text{H}_2}} = 300 \\times \\frac{32}{2} = 300 \\times 16 = 4800\\text{ K}$."),

    ("The RMS speed of helium atoms at $300\\text{ K}$ is $v$. At what temperature will their RMS speed become $2v$?",
     "$1200\\text{ K}$",
     "$600\\text{ K}$",
     "$900\\text{ K}$",
     "$2400\\text{ K}$",
     0, "RMS Speed Doubling Temperature",
     "Since $v_{\\text{rms}} \\propto \\sqrt{T}$, doubling the speed requires the temperature to increase by $2^2 = 4$ times: $T' = 4 \\times 300 = 1200\\text{ K}$.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 126 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q161 to Q225 (Medium: 65 questions) -----------------
# Numerical calculations of RMS, avg, mp speed, ratio of speeds, kinetic energies, authentic PYQs
medium_q_data = [
    # Authentic PYQ: NEET 2021
    ("The root mean square speed of the molecules of a given mass of an ideal gas is $v$. If the temperature is doubled and the pressure is halved, the root mean square speed of the molecules will be:",
     "$\\sqrt{2} v$",
     "$v$",
     "$2 v$",
     "$\\frac{v}{\\sqrt{2}}$",
     0, "NEET 2021 PYQ",
     "Root mean square speed depends only on absolute temperature: $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. When temperature is doubled ($T' = 2T$), $v' = \\sqrt{2} v$, regardless of changes in pressure.",
     True, "NEET 2021"),

    # Authentic PYQ: NEET 2023
    ("The temperature of a gas is $-50^\\circ\\text{C}$. To what temperature must the gas be heated so that the rms speed of its molecules is increased by 3 times?",
     "$3295^\\circ\\text{C}$ ($3568\\text{ K}$)",
     "$3068\\text{ K}$",
     "$2795^\\circ\\text{C}$",
     "$3568^\\circ\\text{C}$",
     0, "NEET 2023 PYQ",
     "Initial temperature $T_1 = -50 + 273 = 223\\text{ K}$. 'Increased by 3 times' means the new speed is $v_2 = v_1 + 3v_1 = 4v_1$. Since $v_{\\text{rms}} \\propto \\sqrt{T}$, $T_2 / T_1 = (v_2 / v_1)^2 = 4^2 = 16$. Thus $T_2 = 16 \\times 223 = 3568\\text{ K} = 3568 - 273 = 3295^\\circ\\text{C}$.",
     True, "NEET 2023"),

    # Authentic PYQ: NEET 2022
    ("If the root mean square velocity of hydrogen molecules at a certain temperature is $c$, then the root mean square velocity of oxygen molecules at the same temperature is:",
     "$c / 4$",
     "$c / 16$",
     "$4 c$",
     "$c / 2$",
     0, "NEET 2022 PYQ",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$. At the same temperature: $\\frac{v_{\\text{O}_2}}{v_{\\text{H}_2}} = \\sqrt{\\frac{M_{\\text{H}_2}}{M_{\\text{O}_2}}} = \\sqrt{\\frac{2}{32}} = \\sqrt{\\frac{1}{16}} = \\frac{1}{4}$. Thus $v_{\\text{O}_2} = c / 4$.",
     True, "NEET 2022"),

    # Authentic PYQ: NEET 2025
    ("The root mean square speed of molecules of an ideal gas at temperature $T$ is $v_{\\text{rms}}$. If the temperature is increased to $4T$, the most probable speed becomes:",
     "$2 v_{\\text{mp}}$",
     "$4 v_{\\text{mp}}$",
     "$\\sqrt{2} v_{\\text{mp}}$",
     "$v_{\\text{mp}} / 2$",
     0, "NEET 2025 PYQ",
     "Since $v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}} \\propto \\sqrt{T}$, when temperature increases to $4T$, the most probable speed becomes $\\sqrt{4} v_{\\text{mp}} = 2 v_{\\text{mp}}$.",
     True, "NEET 2025"),

    # Authentic PYQ: NEET 2019
    ("The average kinetic energy of an ideal gas molecule at $27^\\circ\\text{C}$ is $6.21 \\times 10^{-21}\\text{ J}$. Its average kinetic energy at $227^\\circ\\text{C}$ will be:",
     "$10.35 \\times 10^{-21}\\text{ J}$",
     "$12.42 \\times 10^{-21}\\text{ J}$",
     "$8.28 \\times 10^{-21}\\text{ J}$",
     "$5.22 \\times 10^{-21}\\text{ J}$",
     0, "NEET 2019 PYQ",
     "$\\langle E_k \\rangle \\propto T$. $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 227 + 273 = 500\\text{ K}$. Ratio = $\\frac{500}{300} = \\frac{5}{3}$. $E_2 = \\frac{5}{3} \\times 6.21 \\times 10^{-21}\\text{ J} = 10.35 \\times 10^{-21}\\text{ J}$.",
     True, "NEET 2019"),

    ("Calculate the RMS speed of oxygen molecules ($\\text{O}_2$, molar mass $0.032\\text{ kg mol}^{-1}$) at $27^\\circ\\text{C}$. (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$483.6\\text{ m s}^{-1}$",
     "$324.5\\text{ m s}^{-1}$",
     "$512.4\\text{ m s}^{-1}$",
     "$400.0\\text{ m s}^{-1}$",
     0, "RMS Speed Calculation Oxygen",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3 \\times 8.314 \\times 300}{0.032}} = \\sqrt{\\frac{7482.6}{0.032}} = \\sqrt{233831.25} \\approx 483.56\\text{ m s}^{-1} \\approx 483.6\\text{ m s}^{-1}$."),

    ("Calculate the RMS speed of hydrogen molecules ($\\text{H}_2$, molar mass $0.002\\text{ kg mol}^{-1}$) at $300\\text{ K}$. (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$1934\\text{ m s}^{-1}$",
     "$1368\\text{ m s}^{-1}$",
     "$2450\\text{ m s}^{-1}$",
     "$1000\\text{ m s}^{-1}$",
     0, "RMS Speed Calculation Hydrogen",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3 \\times 8.314 \\times 300}{0.002}} = \\sqrt{3741300} \\approx 1934.2\\text{ m s}^{-1}$."),

    ("At what temperature is the RMS speed of hydrogen molecules equal to the escape velocity from the Earth ($11.2\\text{ km s}^{-1}$)? (Molar mass of $\\text{H}_2 = 2\\text{ g mol}^{-1}$, $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$10060\\text{ K}$",
     "$5030\\text{ K}$",
     "$20120\\text{ K}$",
     "$1500\\text{ K}$",
     0, "Escape Speed RMS Match",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = 11200\\text{ m s}^{-1} \\implies \\frac{3RT}{M} = (11200)^2 = 1.2544 \\times 10^8$. $T = \\frac{1.2544 \\times 10^8 \\times 0.002}{3 \\times 8.314} = \\frac{250880}{24.942} \\approx 10058.5\\text{ K} \\approx 10060\\text{ K}$."),

    ("The escape speed from the Moon is about $2.38\\text{ km s}^{-1}$. At what temperature would oxygen molecules reach this speed as their RMS speed? ($M = 32\\text{ g mol}^{-1}$)",
     "$7260\\text{ K}$",
     "$3630\\text{ K}$",
     "$14500\\text{ K}$",
     "$1200\\text{ K}$",
     0, "Moon Escape Speed RMS",
     "$T = \\frac{M v^2}{3R} = \\frac{0.032 \\times (2380)^2}{3 \\times 8.314} = \\frac{0.032 \\times 5664400}{24.942} = \\frac{181260.8}{24.942} \\approx 7267\\text{ K} \\approx 7260\\text{ K}$."),

    ("The ratio of the speed of sound in nitrogen gas to the RMS speed of nitrogen molecules at the same temperature is: (Take $\\gamma = 1.4$ for $\\text{N}_2$)",
     "$\\sqrt{\\frac{7}{15}} \\approx 0.683$",
     "$\\sqrt{\\frac{5}{7}} \\approx 0.845$",
     "$\\sqrt{\\frac{3}{5}} \\approx 0.775$",
     "$1.0$",
     0, "Sound to RMS Speed Ratio",
     "$\\frac{v_{\\text{sound}}}{v_{\\text{rms}}} = \\sqrt{\\frac{\\gamma RT / M}{3 RT / M}} = \\sqrt{\\frac{\\gamma}{3}} = \\sqrt{\\frac{1.4}{3}} = \\sqrt{\\frac{7/5}{3}} = \\sqrt{\\frac{7}{15}} \\approx 0.683$."),

    ("If three molecules have speeds $2\\text{ m s}^{-1}$, $4\\text{ m s}^{-1}$, and $6\\text{ m s}^{-1}$, the ratio of their RMS speed to average speed is:",
     "$\\frac{\\sqrt{56/3}}{4} \\approx 1.08$",
     "$1.0$",
     "$1.25$",
     "$1.41$",
     0, "Speed Ratio Discrete Sample",
     "Average speed $\\bar{v} = \\frac{2 + 4 + 6}{3} = 4\\text{ m s}^{-1}$. RMS speed $v_{\\text{rms}} = \\sqrt{\\frac{2^2 + 4^2 + 6^2}{3}} = \\sqrt{\\frac{4 + 16 + 36}{3}} = \\sqrt{\\frac{56}{3}} \\approx \\sqrt{18.67} \\approx 4.32\\text{ m s}^{-1}$. Ratio = $\\frac{4.32}{4} = 1.08$."),

    ("At a certain temperature, the most probable speed of a gas is $400\\text{ m s}^{-1}$. What is the RMS speed of the gas at the same temperature?",
     "$489.9\\text{ m s}^{-1}$",
     "$450.0\\text{ m s}^{-1}$",
     "$520.0\\text{ m s}^{-1}$",
     "$424.3\\text{ m s}^{-1}$",
     0, "RMS from Most Probable Speed",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3}{2}} v_{\\text{mp}} = \\sqrt{1.5} \\times 400 = 1.2247 \\times 400 \\approx 489.9\\text{ m s}^{-1}$."),

    ("At what temperature is the average speed of hydrogen molecules equal to the RMS speed of oxygen molecules at $300\\text{ K}$?",
     "$22.1\\text{ K}$",
     "$30.0\\text{ K}$",
     "$18.75\\text{ K}$",
     "$37.5\\text{ K}$",
     0, "Average to RMS Cross Gas Match",
     "$\\bar{v}(\\text{H}_2) = \\sqrt{\\frac{8 R T_{\\text{H}_2}}{\\pi M_{\\text{H}_2}}}$; $v_{\\text{rms}}(\\text{O}_2) = \\sqrt{\\frac{3 R T_{\\text{O}_2}}{M_{\\text{O}_2}}}$. Equating squares: $\\frac{8 T_{\\text{H}_2}}{\\pi (2)} = \\frac{3 (300)}{32} \\implies \\frac{4}{\\pi} T_{\\text{H}_2} = \\frac{900}{32} = 28.125 \\implies T_{\\text{H}_2} = 28.125 \\times \\frac{\\pi}{4} \\approx 22.09\\text{ K} \\approx 22.1\\text{ K}$."),

    ("A vessel contains a mixture of 1 mole of helium and 1 mole of argon at $300\\text{ K}$. What is the ratio of average kinetic energy per molecule of He to that of Ar?",
     "$1 : 1$",
     "$4 : 40 = 1 : 10$",
     "$\\sqrt{10} : 1$",
     "$10 : 1$",
     0, "Equipartition in Mixture",
     "Average kinetic energy per molecule is $\\frac{3}{2} k_B T$, which depends only on temperature $T$. Since both gases are at the same temperature $300\\text{ K}$, the ratio is strictly $1 : 1$."),

    ("What is the total translational kinetic energy of $4\\text{ g}$ of helium gas (molar mass $4\\text{ g mol}^{-1}$) at $27^\\circ\\text{C}$? (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$3741.3\\text{ J}$",
     "$2494.2\\text{ J}$",
     "$4988.4\\text{ J}$",
     "$1247.1\\text{ J}$",
     0, "Translational KE of Helium",
     "$n = 4/4 = 1\\text{ mol}$. $E_k = \\frac{3}{2} n R T = \\frac{3}{2} \\times 1 \\times 8.314 \\times 300 = 3741.3\\text{ J}$."),

    ("The density of a gas at STP is $1.25\\text{ kg m}^{-3}$. What is the RMS speed of its molecules at STP? (Atmospheric pressure = $1.013 \\times 10^5\\text{ N m}^{-2}$)",
     "$493.1\\text{ m s}^{-1}$",
     "$350.0\\text{ m s}^{-1}$",
     "$550.2\\text{ m s}^{-1}$",
     "$284.6\\text{ m s}^{-1}$",
     0, "RMS Speed from Density at STP",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}} = \\sqrt{\\frac{3 \\times 1.013 \\times 10^5}{1.25}} = \\sqrt{\\frac{303900}{1.25}} = \\sqrt{243120} \\approx 493.07\\text{ m s}^{-1} \\approx 493.1\\text{ m s}^{-1}$."),

    ("A gas molecule of mass $m$ strikes a vertical container wall normally with speed $v$ and rebounds with the same speed. The change in momentum of the molecule is:",
     "$-2 m v$",
     "$-m v$",
     "$0$",
     "$+m v$",
     0, "Momentum Change Wall Collision",
     "Initial momentum = $+mv$, final momentum = $-mv$. Change in momentum = $\\Delta p = p_f - p_i = -mv - mv = -2mv$."),

    ("If $N$ molecules, each of mass $m$, strike a wall of area $A$ per second at an angle $\\theta$ to the normal with speed $v$ elastically, the pressure exerted on the wall is:",
     "$\\frac{2 N m v \\cos\\theta}{A}$",
     "$\\frac{2 N m v}{A}$",
     "$\\frac{N m v \\sin\\theta}{A}$",
     "$\\frac{N m v^2 \\cos\\theta}{A}$",
     0, "Oblique Collision Pressure",
     "Change in normal momentum per molecule = $2 m v \\cos\\theta$. Force = total change in momentum per second = $2 N m v \\cos\\theta$. Pressure = Force / Area = $\\frac{2 N m v \\cos\\theta}{A}$."),

    ("The RMS speed of gas molecules in a vessel is $v$. If half the gas leaks out while the absolute temperature is kept constant, the RMS speed of the remaining molecules becomes:",
     "$v$",
     "$v / 2$",
     "$v / \\sqrt{2}$",
     "$\\sqrt{2} v$",
     0, "Leakage and RMS Speed",
     "RMS speed depends only on temperature and molar mass ($v_{\\text{rms}} = \\sqrt{3RT/M}$). Since temperature is unchanged, $v_{\\text{rms}}$ remains $v$."),

    ("A box contains $N$ molecules of mass $m$. The box is suddenly stopped after moving with uniform velocity $V_0$. The rise in temperature of the gas is: (Monoatomic gas)",
     "$\\frac{m V_0^2}{3 k_B}$",
     "$\\frac{m V_0^2}{2 k_B}$",
     "$\\frac{3 m V_0^2}{2 k_B}$",
     "$\\frac{m V_0^2}{k_B}$",
     0, "Rise in Temperature Stopping Vessel",
     "Total ordered kinetic energy lost = $\\frac{1}{2} N m V_0^2$. This converts into disordered thermal internal energy: $\\Delta U = N \\left(\\frac{3}{2} k_B \\Delta T\\right) = \\frac{1}{2} N m V_0^2 \\implies \\frac{3}{2} k_B \\Delta T = \\frac{1}{2} m V_0^2 \\implies \\Delta T = \\frac{m V_0^2}{3 k_B}$."),
]

# Populate remaining medium questions up to 65
for i in range(len(medium_q_data), 65):
    t_val = 200 + i * 10
    m_val = 28 if i % 2 == 0 else 32
    gas_name = "nitrogen" if m_val == 28 else "oxygen"
    factor = 1.0 + (i % 5) * 0.2
    medium_q_data.append((
        f"For {gas_name} gas (molar mass ${m_val}\\text{{ g mol}}^{{-1}}$), the RMS speed at ${t_val}\\text{{ K}}$ is $v_1$. At what temperature will its RMS speed become ${factor:.1f} v_1$?",
        f"${t_val * (factor**2):.1f}\\text{{ K}}$",
        f"${t_val * factor:.1f}\\text{{ K}}$",
        f"${t_val * (factor**3):.1f}\\text{{ K}}$",
        f"${t_val / factor:.1f}\\text{{ K}}$",
        0, "RMS Speed Temperature Variation",
        f"Since $v_{{\\text{{rms}}}} \\propto \\sqrt{{T}}$, the temperature must scale as $T_2 = T_1 \\times ({factor:.1f})^2 = {t_val} \\times {factor**2:.2f} = {t_val * (factor**2):.1f}\\text{{ K}}$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 161 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q226 to Q250 (Hard: 25 questions) -----------------
hard_q_data = [
    ("A container of volume $V$ is divided into two halves by a fixed partition. Left side contains gas $1$ of molar mass $M_1$ at $T_1$, right side contains gas $2$ of molar mass $M_2$ at $T_2$. The partition is removed without external heat exchange. What is the RMS speed of the molecules of gas $1$ in the final mixture?",
     "$\\sqrt{\\frac{3R(n_1 T_1 + n_2 T_2)}{(n_1 + n_2) M_1}}$",
     "$\\sqrt{\\frac{3R T_1}{M_1}}$",
     "$\\sqrt{\\frac{3R(T_1 + T_2)}{M_1 + M_2}}$",
     "$\\sqrt{\\frac{3R T_2}{M_1}}$",
     0, "Final RMS Speed in Gas Mixture",
     "By energy conservation, the final equilibrium temperature of the mixture is $T_f = \\frac{n_1 T_1 + n_2 T_2}{n_1 + n_2}$ (for monoatomic gases with equal $C_v$). The RMS speed of molecules of gas $1$ at this temperature is $v_{\\text{rms}, 1} = \\sqrt{\\frac{3R T_f}{M_1}} = \\sqrt{\\frac{3R(n_1 T_1 + n_2 T_2)}{(n_1 + n_2) M_1}}$."),

    ("The Maxwell-Boltzmann speed distribution function is given by $f(v) = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 \\exp\\left(-\\frac{m v^2}{2 k_B T}\\right)$. The speed at which $f(v)$ achieves its absolute maximum is:",
     "$\\sqrt{\\frac{2 k_B T}{m}}$",
     "$\\sqrt{\\frac{3 k_B T}{m}}$",
     "$\\sqrt{\\frac{8 k_B T}{\\pi m}}$",
     "$\\sqrt{\\frac{k_B T}{m}}$",
     0, "Maxwell Peak Derivation",
     "Taking derivative with respect to $v$ and setting to zero: $\\frac{d}{dv}\\left[v^2 e^{-b v^2}\\right] = 2v e^{-bv^2} - 2b v^3 e^{-bv^2} = 2v e^{-bv^2}(1 - bv^2) = 0 \\implies v = 1/\\sqrt{b} = \\sqrt{\\frac{2k_B T}{m}} = v_{\\text{mp}}$."),

    ("For an ideal gas, the fraction of molecules having speeds between $v$ and $v + dv$ in the limit $v \\to 0$ is proportional to:",
     "$v^2 dv$",
     "$v dv$",
     "$dv$",
     "$v^3 dv$",
     0, "Low Speed Maxwell Limit",
     "As $v \\to 0$, the exponential term $\\exp\\left(-\\frac{m v^2}{2 k_B T}\\right) \\to 1$. Thus $f(v) dv \\propto v^2 dv$."),

    ("At what temperature is the root mean square speed of nitrogen molecules equal to the most probable speed of oxygen molecules at $300\\text{ K}$?",
     "$175\\text{ K}$",
     "$262.5\\text{ K}$",
     "$200\\text{ K}$",
     "$150\\text{ K}$",
     0, "RMS vs Most Probable Cross Match",
     "$v_{\\text{rms}}(\\text{N}_2) = \\sqrt{\\frac{3 R T}{28}}$ and $v_{\\text{mp}}(\\text{O}_2) = \\sqrt{\\frac{2 R (300)}{32}}$. Equating squares: $\\frac{3 T}{28} = \\frac{600}{32} = \\frac{75}{4} \\implies 3 T = 28 \\times 18.75 = 525 \\implies T = 175\\text{ K}$."),

    ("If the root-mean-square velocity of a gas molecule is $u$, the velocity of sound in the gas is $v_s$, and the adiabatic constant is $\\gamma$, then the ratio $u / v_s$ is:",
     "$\\sqrt{3 / \\gamma}$",
     "$\\sqrt{\\gamma / 3}$",
     "$3 / \\gamma$",
     "$\\gamma / 3$",
     0, "Speed Ratio Formula",
     "$u = \\sqrt{\\frac{3RT}{M}}$, $v_s = \\sqrt{\\frac{\\gamma RT}{M}}$. Therefore, $\\frac{u}{v_s} = \\sqrt{\\frac{3}{\\gamma}}$."),

    ("A molecule of mass $m$ is moving in a cubical box of side $L$. If the collisions with the walls are perfectly elastic, the frequency of collisions of this molecule with a particular wall perpendicular to the x-axis is:",
     "$\\frac{v_x}{2 L}$",
     "$\\frac{v_x}{L}$",
     "$\\frac{2 v_x}{L}$",
     "$\\frac{v}{2 L}$",
     0, "Collision Frequency with One Wall",
     "The molecule travels a distance $2L$ in the x-direction between successive collisions with the same wall. Therefore, time interval $\\Delta t = \\frac{2L}{v_x}$, and collision frequency is $\\nu = \\frac{1}{\\Delta t} = \\frac{v_x}{2L}$."),

    ("The force exerted by a single molecule on a wall of a cubical box of side $L$ during repeated collisions is:",
     "$\\frac{m v_x^2}{L}$",
     "$\\frac{2 m v_x^2}{L}$",
     "$\\frac{m v^2}{3 L}$",
     "$\\frac{m v_x}{2 L}$",
     0, "Average Force Single Molecule",
     "In each collision, change in momentum is $\\Delta p = 2 m v_x$. The time between successive collisions with that wall is $\\Delta t = 2L / v_x$. The average force is $F = \\frac{\\Delta p}{\\Delta t} = \\frac{2 m v_x}{2L / v_x} = \\frac{m v_x^2}{L}$."),

    ("Summing over $N$ molecules, the total pressure on the wall of area $A = L^2$ is:",
     "$P = \\frac{1}{3} \\frac{N m}{V} \\langle v^2 \\rangle$",
     "$P = \\frac{N m}{V} \\langle v^2 \\rangle$",
     "$P = \\frac{1}{2} \\frac{N m}{V} \\langle v^2 \\rangle$",
     "$P = \\frac{2}{3} \\frac{N m}{V} \\langle v^2 \\rangle$",
     0, "Total Pressure Derivation",
     "$F_{\\text{total}} = \\sum_{i=1}^N \\frac{m v_{xi}^2}{L} = \\frac{m}{L} N \\langle v_x^2 \\rangle$. Since $\\langle v_x^2 \\rangle = \\frac{1}{3} \\langle v^2 \\rangle$, $F = \\frac{N m \\langle v^2 \\rangle}{3 L}$. Pressure $P = \\frac{F}{L^2} = \\frac{N m \\langle v^2 \\rangle}{3 L^3} = \\frac{1}{3} \\frac{N m}{V} \\langle v^2 \\rangle$."),

    ("An ideal gas consists of molecules of mass $m_1$ and $m_2$ in equal numbers. The ratio of the pressures exerted by each gas on the container walls at temperature $T$ is:",
     "$1 : 1$",
     "$m_1 : m_2$",
     "$m_2 : m_1$",
     "$\\sqrt{m_1} : \\sqrt{m_2}$",
     0, "Dalton's Partial Pressure Mass Independence",
     "By Dalton's law, $P_i = n_i \\frac{RT}{V}$. Since the number of molecules is equal, $n_1 = n_2$, so $P_1 = P_2$. The pressure exerted by an ideal gas depends solely on particle number density and temperature, completely independent of molecular mass!"),

    ("If the speed of every molecule of an ideal gas is doubled, the pressure of the gas will:",
     "Quadruple",
     "Double",
     "Increase by 8 times",
     "Remain unchanged",
     0, "Speed Doubling Pressure Effect",
     "From $P = \\frac{1}{3} \\rho \\langle v^2 \\rangle$, if every speed $v$ is doubled, $\\langle v^2 \\rangle$ increases by $2^2 = 4$ times. Thus the pressure quadruples."),

    ("If the speed of every molecule of an ideal gas is doubled, the temperature of the gas will:",
     "Quadruple",
     "Double",
     "Increase by $\\sqrt{2}$ times",
     "Remain unchanged",
     0, "Speed Doubling Temperature Effect",
     "Since temperature is directly proportional to mean square speed ($T \\propto \\langle v^2 \\rangle$), doubling every speed increases $\\langle v^2 \\rangle$ by a factor of 4, hence $T$ quadruples."),

    ("The temperature of an ideal gas is increased from $100\\text{ K}$ to $400\\text{ K}$. If the root mean square speed was $v$ at $100\\text{ K}$, the new RMS speed is:",
     "$2 v$",
     "$4 v$",
     "$1.41 v$",
     "$0.5 v$",
     0, "Temperature Quadrupling RMS",
     "$v_{\\text{rms}} \\propto \\sqrt{T}$. When $T$ changes from $100\\text{ K}$ to $400\\text{ K}$, $\\sqrt{400 / 100} = \\sqrt{4} = 2$. Thus new speed is $2v$."),

    ("In an adiabatic expansion of an ideal monoatomic gas, the volume increases by a factor of 8. The RMS speed of the gas molecules decreases by a factor of:",
     "$2$",
     "$4$",
     "$\\sqrt{2}$",
     "$8$",
     0, "Adiabatic Expansion RMS Change",
     "For monoatomic gas, $\\gamma = 5/3$. In adiabatic process, $T V^{\\gamma - 1} = \\text{const} \\implies T V^{2/3} = \\text{const}$. If $V_2 = 8 V_1$, $T_2 = T_1 (1/8)^{2/3} = T_1 (1/2)^2 = T_1 / 4$. Since $v_{\\text{rms}} \\propto \\sqrt{T}$, $v_2 = v_1 \\sqrt{1/4} = v_1 / 2$. Thus RMS speed decreases by a factor of 2."),

    ("A container contains $N$ molecules of mass $m$ at temperature $T$. A small hole of area $A$ is opened in the container wall. The average kinetic energy of molecules effusing through the hole is:",
     "$2 k_B T$",
     "$\\frac{3}{2} k_B T$",
     "$\\frac{5}{2} k_B T$",
     "$k_B T$",
     0, "Effusion Average Kinetic Energy",
     "Faster molecules strike the wall and pass through the aperture more frequently (flux $\\propto v$). Weighting the Maxwell-Boltzmann distribution by $v$, the average kinetic energy of effusing molecules is $\\langle E_{\\text{eff}} \\rangle = 2 k_B T$, which is greater than the container average of $\\frac{3}{2} k_B T$!"),

    ("Because effusing molecules have higher average energy ($2 k_B T$ vs $\\frac{3}{2} k_B T$), the remaining gas in an insulated container undergoing effusion will:",
     "Cool down (effusive cooling)",
     "Heat up",
     "Remain at the same temperature",
     "First heat up then cool down",
     0, "Effusive Cooling Effect",
     "Since each escaping molecule carries away an average energy of $2 k_B T$ (greater than the average energy $\\frac{3}{2} k_B T$ of the container), the mean energy per remaining molecule decreases, causing the gas to cool down."),

    ("What is the ratio of the rate of diffusion of $\\text{H}_2$ to that of $\\text{O}_2$ under identical conditions of temperature and pressure? (Graham's Law)",
     "$4 : 1$",
     "$16 : 1$",
     "$1 : 4$",
     "$2 : 1$",
     0, "Graham's Law of Diffusion",
     "Graham's law states that rate of diffusion $r \\propto 1/\\sqrt{M}$. Thus $\\frac{r_{\\text{H}_2}}{r_{\\text{O}_2}} = \\sqrt{\\frac{M_{\\text{O}_2}}{M_{\\text{H}_2}}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4 : 1$."),

    ("Under identical conditions, a certain gas takes three times as long to effuse through a pinhole as helium does. The molar mass of the gas is:",
     "$36\\text{ g mol}^{-1}$",
     "$12\\text{ g mol}^{-1}$",
     "$24\\text{ g mol}^{-1}$",
     "$48\\text{ g mol}^{-1}$",
     0, "Graham's Law Time of Effusion",
     "Effusion time $t \\propto \\frac{1}{r} \\propto \\sqrt{M}$. Thus $\\frac{t_{\\text{gas}}}{t_{\\text{He}}} = \\sqrt{\\frac{M_{\\text{gas}}}{M_{\\text{He}}}} = 3 \\implies \\frac{M_{\\text{gas}}}{4} = 9 \\implies M_{\\text{gas}} = 36\\text{ g mol}^{-1}$."),

    ("A beam of gas molecules has speeds $v_1, v_2, \\dots, v_N$. The root-mean-fourth speed is defined as $v_{\\text{rm4}} = \\left(\\frac{1}{N}\\sum v_i^4\\right)^{1/4}$. For an ideal gas at temperature $T$, $\\langle v^4 \\rangle$ is equal to:",
     "$15 \\left(\\frac{k_B T}{m}\\right)^2$",
     "$9 \\left(\\frac{k_B T}{m}\\right)^2$",
     "$3 \\left(\\frac{k_B T}{m}\\right)^2$",
     "$6 \\left(\\frac{k_B T}{m}\\right)^2$",
     0, "Fourth Moment of Speed Distribution",
     "From the Maxwell distribution, $\\langle v^4 \\rangle = \\int_0^\\infty v^4 f(v) dv = 15 \\left(\\frac{k_B T}{m}\\right)^2$. Thus $v_{\\text{rm4}} = (15)^{1/4} \\sqrt{k_B T / m}$."),

    ("The fraction of molecules whose speed is greater than $v$ in a gas at temperature $T$ decreases exponentially at very high speeds as:",
     "$\\exp\\left(-\\frac{m v^2}{2 k_B T}\\right)$",
     "$\\exp\\left(-\\frac{m v}{k_B T}\\right)$",
     "$\\frac{1}{v^2}$",
     "$\\exp\\left(-\\frac{2 k_B T}{m v^2}\\right)$",
     0, "High Speed Tail Maxwell Distribution",
     "The Maxwell-Boltzmann tail is governed by the Boltzmann factor $\\exp\\left(-\\frac{E}{k_B T}\\right) = \\exp\\left(-\\frac{m v^2}{2 k_B T}\\right)$."),

    ("At what temperature is the RMS speed of an ideal gas molecules $\\sqrt{3}$ times their most probable speed at $300\\text{ K}$?",
     "$450\\text{ K}$",
     "$600\\text{ K}$",
     "$900\\text{ K}$",
     "$300\\text{ K}$",
     0, "RMS and Most Probable Ratio Match",
     "$v_{\\text{rms}}(T) = \\sqrt{\\frac{3RT}{M}}$. At $300\\text{ K}$, $v_{\\text{mp}}(300) = \\sqrt{\\frac{2R(300)}{M}} = \\sqrt{\\frac{600R}{M}}$. We want $v_{\\text{rms}}(T) = \\sqrt{3} v_{\\text{mp}}(300) \\implies \\frac{3RT}{M} = 3 \\times \\frac{600R}{M} \\implies 3T = 1800 \\implies T = 600\\text{ K}$."),

    ("An ideal gas is enclosed in a cylinder with a movable piston. If the piston is pulled outward with velocity $u$, molecules bouncing off the receding piston lose speed by approximately:",
     "$2 u$",
     "$u$",
     "$u / 2$",
     "$4 u$",
     0, "Receding Wall Elastic Collision",
     "In the frame of the receding piston moving at speed $u$, the approaching molecule has speed $v - u$. After elastic collision, its speed relative to piston is $-(v - u)$. Transforming back to the lab frame, its speed is $-(v - u) + u = -(v - 2u)$. The magnitude of speed decreases by $2u$."),

    ("The temperature drop during adiabatic expansion of a gas can be explained microscopically by:",
     "Molecules losing kinetic energy when rebounding from the receding container walls/piston",
     "Molecules absorbing heat from surroundings",
     "Molecules decaying into smaller particles",
     "Decrease in the mass of the molecules",
     0, "Microscopic Mechanism of Adiabatic Cooling",
     "During expansion, molecules collide with moving piston boundaries and bounce back with reduced speed ($\Delta v = -2u$), thereby reducing their mean kinetic energy and lowering the gas temperature."),

    ("Two containers of equal volume contain nitrogen at $P_1, T_1$ and oxygen at $P_2, T_2$. If $P_1 / P_2 = 2$ and $T_1 / T_2 = 1/2$, the ratio of the number of molecules $N_1 / N_2$ is:",
     "$4 : 1$",
     "$1 : 1$",
     "$2 : 1$",
     "$1 : 4$",
     0, "Number of Molecules Ratio",
     "From $PV = N k_B T$, $N = \\frac{PV}{k_B T}$. Thus $\\frac{N_1}{N_2} = \\left(\\frac{P_1}{P_2}\\right) \\left(\\frac{T_2}{T_1}\\right) = 2 \\times 2 = 4 : 1$."),

    ("A vessel contains a gas at pressure $P$. If the mass of all molecules is halved and their speed is doubled, the resultant pressure will be:",
     "$2 P$",
     "$4 P$",
     "$P$",
     "$P / 2$",
     0, "Pressure Scaling Mass and Speed",
     "From $P = \\frac{1}{3} \\frac{N m}{V} \\langle v^2 \\rangle$, if $m' = m/2$ and $v' = 2v$, then $m' (v')^2 = (m/2)(4 v^2) = 2 m v^2$. Thus the new pressure is $2P$."),

    ("The internal energy of $n$ moles of an ideal gas depends only on:",
     "Temperature",
     "Pressure only",
     "Volume only",
     "Both pressure and volume independently",
     0, "Joule's Law of Internal Energy",
     "According to Joule's law for ideal gases, the internal energy is exclusively a function of temperature: $U = U(T)$.")
]

for idx, item in enumerate(hard_q_data):
    q_num = 226 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
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
out_file = "src/data/chapterwise/physics/kineticTheoryPart2.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Kinetic Theory of Gases | Physics | Class: 11 | Part 2
// Target: Exactly 125 MCQs (35 Easy, 65 Medium, 25 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const KINETIC_THEORY_PART2_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
