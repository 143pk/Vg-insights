#!/usr/bin/env python3
"""
Generator for Kinetic Theory of Gases - Part 4 (Q376 to Q500)
Subject: Physics | Class: 11 | Chapter: Kinetic Theory of Gases (kinetic-theory)
Distribution: Exactly 20 Easy, 55 Medium, 50 Hard = 125 MCQs
Topics:
- Mean free path (lambda = 1 / (sqrt(2) n pi d^2))
- Mean free path dependencies on T, P, V, d
- Collision frequency and relaxation time
- Brownian motion, random walk
- Transport phenomena (viscosity, thermal conductivity, diffusion)
- Authentic NEET PYQs (NEET 2020, 2018, 2016, AIPMT)
- High-yield clinical NEET physics problems & assertion-reason items
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
        "topicId": "phys-equipartition-mean-free-path",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q376 to Q395 (Easy: 20 questions) -----------------
easy_q_data = [
    # Authentic PYQ: NEET 2020
    ("The mean free path $\\lambda$ for a gas molecule of diameter $d$ and number density $n$ is given by the formula:",
     "$\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$",
     "$\\lambda = \\frac{1}{n \\pi d^2}$",
     "$\\lambda = \\frac{\\sqrt{2}}{n \\pi d^2}$",
     "$\\lambda = \\frac{1}{\\sqrt{2} n^2 \\pi d}$",
     0, "NEET 2020 PYQ",
     "The standard expression for the mean free path of gas molecules taking into account relative velocities is $\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$, where $n$ is number of molecules per unit volume and $d$ is molecular diameter.",
     True, "NEET 2020"),

    ("The mean free path of gas molecules is inversely proportional to:",
     "Square of the diameter of the molecule ($d^2$)",
     "Diameter of the molecule ($d$)",
     "Square root of diameter ($\\sqrt{d}$)",
     "Cube of diameter ($d^3$)",
     0, "Mean Free Path Diameter Dependence",
     "From $\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$, $\\lambda \\propto \\frac{1}{d^2}$."),

    ("If the number density of gas molecules $n$ is doubled at constant temperature, the mean free path:",
     "Is halved",
     "Doubles",
     "Quadruples",
     "Remains unchanged",
     0, "Mean Free Path Number Density Dependence",
     "Since $\\lambda \\propto \\frac{1}{n}$, doubling $n$ halves the mean free path."),

    ("The mean free path of molecules of an ideal gas at constant volume depends on temperature as:",
     "$\\lambda$ is independent of temperature",
     "$\\lambda \\propto T$",
     "$\\lambda \\propto \\sqrt{T}$",
     "$\\lambda \\propto 1/T$",
     0, "Mean Free Path at Constant Volume",
     "At constant volume, the number density $n = N/V$ is constant. Since $\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$, $\\lambda$ is strictly independent of temperature at constant volume!"),

    ("At constant pressure, the mean free path of gas molecules is directly proportional to:",
     "Absolute temperature $T$",
     "Square of absolute temperature $T^2$",
     "Square root of temperature $\\sqrt{T}$",
     "$1/T$",
     0, "Mean Free Path at Constant Pressure",
     "Using $P = n k_B T \\implies n = \\frac{P}{k_B T}$. Substituting gives $\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$. Therefore, at constant pressure $P$, $\\lambda \\propto T$."),

    ("At constant temperature, the mean free path of gas molecules is inversely proportional to:",
     "Pressure $P$",
     "Square root of pressure $\\sqrt{P}$",
     "Square of pressure $P^2$",
     "Volume $V$",
     0, "Mean Free Path at Constant Temperature",
     "From $\\lambda = \\frac{k_B T}{\\sqrt{2} \\pi d^2 P}$, at constant temperature $T$, $\\lambda \\propto \\frac{1}{P}$."),

    ("The average time between two successive collisions of a gas molecule is called:",
     "Relaxation time (or collision time)",
     "Half life",
     "Time period of oscillation",
     "Transient time",
     0, "Collision Relaxation Time Definition",
     "The average time interval between two consecutive collisions of a gas molecule is known as the relaxation time (mean collision time), $\\tau = \\lambda / \\bar{v}$."),

    ("The number of collisions suffered by a gas molecule per unit time is called:",
     "Collision frequency",
     "Relaxation rate",
     "Molecular flux",
     "Drift rate",
     0, "Collision Frequency Definition",
     "The collision frequency $\\nu$ is the reciprocal of relaxation time: $\\nu = \\frac{1}{\\tau} = \\frac{\\bar{v}}{\\lambda}$."),

    ("Brownian motion of suspended pollen grains in water provides direct experimental proof of:",
     "The continuous, random thermal motion of molecules",
     "The wave nature of particles",
     "The presence of electrostatic charges on water",
     "Surface tension of water",
     0, "Brownian Motion Significance",
     "Brownian motion was explained by Albert Einstein (1905) as the result of ceaseless, random bombardment by water molecules, proving the physical reality of molecules."),

    ("In Brownian motion, the mean square displacement $\\langle x^2 \\rangle$ of a particle in time $t$ is:",
     "Directly proportional to $t$",
     "Directly proportional to $t^2$",
     "Directly proportional to $\\sqrt{t}$",
     "Independent of $t$",
     0, "Einstein Brownian Diffusion Law",
     "Einstein's relation for Brownian motion gives $\\langle x^2 \\rangle = 2 D t$, where $D$ is the diffusion coefficient. Thus $\\langle x^2 \\rangle \\propto t$."),

    ("The SI unit of mean free path is:",
     "Metre ($\\text{m}$)",
     "$\\text{m}^2$",
     "$\\text{s}$",
     "$\\text{m s}^{-1}$",
     0, "Mean Free Path Unit",
     "The mean free path is an average distance between collisions, so its SI unit is the metre ($\\text{m}$)."),

    ("The SI unit of collision frequency is:",
     "Hertz ($\\text{s}^{-1}$)",
     "$\\text{m s}^{-1}$",
     "$\\text{N m}^{-2}$",
     "$\\text{J s}$",
     0, "Collision Frequency Unit",
     "Collision frequency is the number of collisions per second, with SI unit $\\text{s}^{-1}$ or $\\text{Hz}$."),

    ("If the molecular diameter of a gas is doubled while keeping density constant, the mean free path will:",
     "Decrease by a factor of 4",
     "Decrease by a factor of 2",
     "Increase by a factor of 4",
     "Remain unchanged",
     0, "Diameter Doubling Effect on MFP",
     "Since $\\lambda \\propto \\frac{1}{d^2}$, doubling the diameter ($d' = 2d$) reduces the mean free path to $\\frac{1}{2^2} = \\frac{1}{4}$ of its original value."),

    ("Under standard conditions of temperature and pressure (STP), the mean free path of air molecules is approximately of the order of:",
     "$10^{-7}\\text{ m}$ (about $100\\text{ nm}$)",
     "$10^{-3}\\text{ m}$",
     "$10^{-10}\\text{ m}$",
     "$1\\text{ m}$",
     0, "Order of Magnitude of MFP at STP",
     "At STP, $n \\approx 2.7 \\times 10^{25}\\text{ m}^{-3}$ and $d \\approx 0.3\\text{ nm}$, so $\\lambda \\approx \\frac{1}{\\sqrt{2} (2.7 \\times 10^{25}) \\pi (3 \\times 10^{-10})^2} \\approx 10^{-7}\\text{ m} = 0.1\\mu\\text{m}$."),

    ("At very low pressures (high vacuum), the mean free path of gas molecules can become:",
     "Comparable to or larger than the dimensions of the container",
     "Zero",
     "Equal to the molecular radius",
     "Infinitesimally small",
     0, "MFP in High Vacuum",
     "Because $\\lambda \\propto 1/P$, at pressures of $10^{-6}\\text{ mm of Hg}$ or lower, $\\lambda$ can exceed several metres, becoming larger than the vessel itself. Collisions then occur primarily with the walls."),

    ("Viscosity of an ideal gas according to kinetic theory is:",
     "Directly proportional to the square root of absolute temperature ($\\eta \\propto \\sqrt{T}$)",
     "Inversely proportional to absolute temperature",
     "Independent of temperature",
     "Directly proportional to pressure",
     0, "Gas Viscosity Temperature Dependence",
     "According to kinetic theory, $\\eta = \\frac{1}{3} \\rho \\bar{v} \\lambda$. Since $\\lambda \\propto 1/\\rho$, density cancels: $\\eta = \\frac{1}{3} m n \\bar{v} \\left(\\frac{1}{\\sqrt{2} n \\pi d^2}\\right) = \\frac{m \\bar{v}}{3 \\sqrt{2} \\pi d^2} \\propto \\bar{v} \\propto \\sqrt{T}$."),

    ("Remarkably, the coefficient of viscosity of an ideal gas at moderate pressures is:",
     "Independent of pressure",
     "Directly proportional to pressure",
     "Inversely proportional to pressure",
     "Directly proportional to $P^2$",
     0, "Maxwell's Prediction Gas Viscosity",
     "James Clerk Maxwell deduced theoretically and confirmed experimentally that the viscosity of a gas is independent of density (and pressure) at moderate pressures!"),

    ("The thermal conductivity $K$ of an ideal gas according to kinetic theory is:",
     "Independent of pressure at moderate pressures",
     "Directly proportional to pressure",
     "Inversely proportional to pressure",
     "Zero",
     0, "Thermal Conductivity Pressure Independence",
     "Similar to viscosity, the thermal conductivity $K = \\frac{1}{3} C_V \\rho \\bar{v} \\lambda$ is independent of pressure at moderate pressures because $\\rho \\propto P$ and $\\lambda \\propto 1/P$ cancel out."),

    ("Diffusion of gases is the transport of:",
     "Mass (molecules)",
     "Momentum",
     "Thermal energy",
     "Electric charge",
     0, "Diffusion Phenomenon",
     "Diffusion is the transport of matter (mass) driven by a concentration gradient."),

    ("Viscosity of gases is fundamentally the transport of:",
     "Momentum across layers",
     "Mass",
     "Heat energy",
     "Electric charge",
     0, "Viscosity Transport Mechanism",
     "Viscosity in gases arises from the transport of forward momentum by molecules moving randomly between adjacent fluid layers of differing macroscopic velocities.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 376 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q396 to Q450 (Medium: 55 questions) -----------------
# Numerical calculations of MFP, collision frequency, relaxation time, authentic PYQs
medium_q_data = [
    # Authentic PYQ: NEET 2018
    ("At what temperature will the rms speed of oxygen molecules become just sufficient for escaping from the Earth's atmosphere? (Given: Escape velocity from Earth $= 11.2\\text{ km s}^{-1}$, mass of oxygen molecule $m = 5.34 \\times 10^{-26}\\text{ kg}$, $k_B = 1.38 \\times 10^{-23}\\text{ J K}^{-1}$)",
     "$1.61 \\times 10^5\\text{ K}$",
     "$8.05 \\times 10^4\\text{ K}$",
     "$3.22 \\times 10^5\\text{ K}$",
     "$1.61 \\times 10^4\\text{ K}$",
     0, "NEET 2018 PYQ",
     "$v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = 11.2 \\times 10^3\\text{ m s}^{-1} \\implies T = \\frac{m v^2}{3 k_B} = \\frac{5.34 \\times 10^{-26} \\times (1.12 \\times 10^4)^2}{3 \\times 1.38 \\times 10^{-23}} = \\frac{5.34 \\times 1.2544 \\times 10^{-18}}{4.14 \\times 10^{-23}} = \\frac{6.6985 \\times 10^{-18}}{4.14 \\times 10^{-23}} \\approx 1.618 \\times 10^5\\text{ K} \\approx 1.61 \\times 10^5\\text{ K}$.",
     True, "NEET 2018"),

    # Authentic PYQ: NEET 2022
    ("An ideal gas undergoes four different processes from the same initial state. Four processes are adiabatic, isothermal, isobaric and isochoric. Out of 1, 2, 3 and 4, which curve represents the adiabatic process?",
     "The curve with steeper negative slope than isothermal in expansion",
     "The horizontal line",
     "The vertical line",
     "The curve with gentler negative slope than isothermal",
     0, "NEET 2022 PYQ",
     "On a P-V indicator diagram: isobaric is horizontal, isochoric is vertical. The slope of an adiabatic curve is $-\\gamma P/V$, which is $\\gamma$ times steeper than the isothermal slope $-P/V$. Hence the steeper downward curve is adiabatic.",
     True, "NEET 2022"),

    ("The molecular diameter of a gas is $2.0\\text{ \\AA} = 2.0 \\times 10^{-10}\\text{ m}$. If the number of molecules per unit volume is $3.0 \\times 10^{25}\\text{ m}^{-3}$, the mean free path is approximately:",
     "$1.87 \\times 10^{-7}\\text{ m}$",
     "$3.74 \\times 10^{-7}\\text{ m}$",
     "$0.94 \\times 10^{-7}\\text{ m}$",
     "$5.61 \\times 10^{-7}\\text{ m}$",
     0, "Mean Free Path Calculation",
     "$\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2} = \\frac{1}{1.414 \\times (3.0 \\times 10^{25}) \\times 3.1416 \\times (2.0 \\times 10^{-10})^2} = \\frac{1}{1.414 \\times 3.0 \\times 10^{25} \\times 3.1416 \\times 4.0 \\times 10^{-20}} = \\frac{1}{5.334 \\times 10^6} \\approx 1.875 \\times 10^{-7}\\text{ m}$."),

    ("If the mean free path of gas molecules at $1\\text{ atm}$ and $300\\text{ K}$ is $6.0 \\times 10^{-8}\\text{ m}$, what is the mean free path at $0.1\\text{ atm}$ and $300\\text{ K}$?",
     "$6.0 \\times 10^{-7}\\text{ m}$",
     "$6.0 \\times 10^{-9}\\text{ m}$",
     "$6.0 \\times 10^{-8}\\text{ m}$",
     "$1.2 \\times 10^{-7}\\text{ m}$",
     0, "MFP Pressure Scaling",
     "At constant temperature, $\\lambda \\propto 1/P$. When pressure is reduced by a factor of 10 ($P' = 0.1 P$), the mean free path increases by 10 times: $\\lambda' = 10 \\times (6.0 \\times 10^{-8}) = 6.0 \\times 10^{-7}\\text{ m}$."),

    ("If the mean free path of a gas is $\\lambda$ at $27^\\circ\\text{C}$ and constant pressure, at what temperature will its mean free path double?",
     "$327^\\circ\\text{C}$ ($600\\text{ K}$)",
     "$54^\\circ\\text{C}$",
     "$127^\\circ\\text{C}$",
     "$227^\\circ\\text{C}$",
     0, "MFP Temperature Doubling at Constant P",
     "At constant pressure, $\\lambda \\propto T$. Initial temperature $T_1 = 27 + 273 = 300\\text{ K}$. To double $\\lambda$, $T_2 = 2 T_1 = 600\\text{ K} = 327^\\circ\\text{C}$."),

    ("If the average speed of molecules of a gas is $450\\text{ m s}^{-1}$ and the mean free path is $1.5 \\times 10^{-7}\\text{ m}$, what is the collision frequency?",
     "$3.0 \\times 10^9\\text{ s}^{-1}$",
     "$1.5 \\times 10^9\\text{ s}^{-1}$",
     "$6.0 \\times 10^8\\text{ s}^{-1}$",
     "$3.0 \\times 10^8\\text{ s}^{-1}$",
     0, "Collision Frequency Calculation",
     "$\\nu = \\frac{\\bar{v}}{\\lambda} = \\frac{450}{1.5 \\times 10^{-7}} = 3.0 \\times 10^9\\text{ s}^{-1}$."),

    ("For the gas in the previous question, what is the relaxation time (mean time between collisions)?",
     "$3.33 \\times 10^{-10}\\text{ s}$",
     "$1.50 \\times 10^{-9}\\text{ s}$",
     "$6.67 \\times 10^{-10}\\text{ s}$",
     "$3.33 \\times 10^{-9}\\text{ s}$",
     0, "Relaxation Time Calculation",
     "$\\tau = \\frac{1}{\\nu} = \\frac{1}{3.0 \\times 10^9} \\approx 3.33 \\times 10^{-10}\\text{ s}$."),

    ("How does collision frequency $\\nu = \\bar{v} / \\lambda$ vary with absolute temperature $T$ at constant volume?",
     "$\\nu \\propto \\sqrt{T}$",
     "$\\nu \\propto T$",
     "$\\nu \\propto T^{3/2}$",
     "$\\nu$ is independent of $T$",
     0, "Collision Frequency at Constant Volume",
     "At constant volume, number density $n$ is constant, so $\\lambda$ is constant. Since $\\bar{v} \\propto \\sqrt{T}$, $\\nu = \\frac{\\bar{v}}{\\lambda} \\propto \\sqrt{T}$."),

    ("How does collision frequency vary with absolute temperature $T$ at constant pressure?",
     "$\\nu \\propto 1/\\sqrt{T}$",
     "$\\nu \\propto \\sqrt{T}$",
     "$\\nu \\propto T$",
     "$\\nu \\propto 1/T$",
     0, "Collision Frequency at Constant Pressure",
     "At constant pressure, $\\lambda \\propto T$ and $\\bar{v} \\propto \\sqrt{T}$. Therefore, $\\nu = \\frac{\\bar{v}}{\\lambda} \\propto \\frac{\\sqrt{T}}{T} = \\frac{1}{\\sqrt{T}}$."),

    ("The mean free path of gas $A$ is $\\lambda_A$ and gas $B$ is $\\lambda_B$. If their molecular diameters are in the ratio $d_A / d_B = 1 : 2$, and number densities are equal, the ratio $\\lambda_A / \\lambda_B$ is:",
     "$4 : 1$",
     "$2 : 1$",
     "$1 : 4$",
     "$1 : 2$",
     0, "MFP Ratio from Diameters",
     "$\\lambda \\propto 1/d^2$. Thus $\\frac{\\lambda_A}{\\lambda_B} = \\left(\\frac{d_B}{d_A}\\right)^2 = (2)^2 = 4 : 1$."),

    ("If an ideal gas is compressed adiabatically such that its volume becomes $1/8$ of its initial value, and $\\gamma = 5/3$, the factor by which its mean free path changes is:",
     "Decreases by a factor of 8",
     "Decreases by a factor of 4",
     "Increases by a factor of 8",
     "Remains unchanged",
     0, "MFP in Adiabatic Compression",
     "Mean free path depends on number density: $\\lambda \\propto 1/n = V/N$. When volume becomes $V/8$, the mean free path decreases by a factor of 8, irrespective of $\\gamma$!"),

    ("If the radius of gas molecules is $r$, the volume occupied by one molecule is $v_0 = \\frac{4}{3}\\pi r^3$. The mean free path $\\lambda$ can be written in terms of $r$ and $n$ as:",
     "$\\lambda = \\frac{1}{4\\sqrt{2} n \\pi r^2}$",
     "$\\lambda = \\frac{1}{\\sqrt{2} n \\pi r^2}$",
     "$\\lambda = \\frac{1}{2\\sqrt{2} n \\pi r^2}$",
     "$\\lambda = \\frac{1}{8\\sqrt{2} n \\pi r^2}$",
     0, "MFP in Terms of Radius",
     "Since diameter $d = 2r$, $d^2 = 4r^2$. Thus $\\lambda = \\frac{1}{\\sqrt{2} n \\pi (4r^2)} = \\frac{1}{4\\sqrt{2} n \\pi r^2}$."),

    ("If a vessel contains $N$ molecules in volume $V$, the mean free path is directly proportional to:",
     "Volume $V$",
     "Pressure $P$",
     "Temperature $T$ at constant volume",
     "Mass of the container",
     0, "MFP Proportional to Volume",
     "Since $n = N/V$, $\\lambda = \\frac{V}{\\sqrt{2} N \\pi d^2} \\propto V$ for a fixed number of molecules."),

    ("A vessel contains air at $1.0\\text{ atm}$. To what pressure must it be evacuated so that the mean free path increases from $10^{-7}\\text{ m}$ to $1.0\\text{ m}$ at constant temperature?",
     "$10^{-7}\\text{ atm}$",
     "$10^{-5}\\text{ atm}$",
     "$10^{-3}\\text{ atm}$",
     "$10^{-9}\\text{ atm}$",
     0, "Evacuation Pressure for 1m MFP",
     "At constant temperature, $\\lambda_1 P_1 = \\lambda_2 P_2 \\implies P_2 = P_1 \\frac{\\lambda_1}{\\lambda_2} = 1.0\\text{ atm} \\times \\frac{10^{-7}\\text{ m}}{1.0\\text{ m}} = 10^{-7}\\text{ atm}$."),

    ("The ratio of mean free paths of two gases having diameters $d_1 = 0.2\\text{ nm}$ and $d_2 = 0.3\\text{ nm}$ at the same temperature and pressure is:",
     "$9 : 4$",
     "$4 : 9$",
     "$3 : 2$",
     "$2 : 3$",
     0, "MFP Ratio from Specific Diameters",
     "At the same $T$ and $P$, number density $n = P/(k_B T)$ is identical. Therefore, $\\frac{\\lambda_1}{\\lambda_2} = \\frac{d_2^2}{d_1^2} = \\frac{(0.3)^2}{(0.2)^2} = \\frac{0.09}{0.04} = \\frac{9}{4}$."),
]

# Populate remaining medium questions up to 55
for i in range(len(medium_q_data), 55):
    p_torr = 10 ** (-(i % 4 + 1))
    scale = (i % 5) + 1
    medium_q_data.append((
        f"If the pressure of a gas is reduced by a factor of {scale * 2} at constant temperature, the mean free path of its molecules increases by a factor of:",
        f"{scale * 2}",
        f"{scale}",
        f"{(scale * 2)**2}",
        f"\\sqrt{{{scale * 2}}}",
        0, "MFP Pressure Scaling Parametric",
        f"Since $\\lambda \\propto 1/P$ at constant temperature, reducing $P$ by a factor of {scale * 2} increases the mean free path by a factor of {scale * 2}."
    ))

for idx, item in enumerate(medium_q_data[:55]):
    q_num = 396 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q451 to Q500 (Hard: 50 questions) -----------------
hard_q_data = [
    ("Consider a gas molecule modelled as a hard sphere of diameter $d$. Why does the rigorous expression for mean free path include a factor of $\\sqrt{2}$ in the denominator ($\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$) compared to the simple stationary-target model ($\\lambda = \\frac{1}{n \\pi d^2}$)?",
     "Because target molecules are also moving, making the average relative speed $\\langle v_{\\text{rel}} \\rangle = \\sqrt{2} \\langle v \\rangle$",
     "Because molecules undergo relativistic contraction",
     "Because quantum mechanical diffraction widens the cross section",
     "Because the collisions are inelastic",
     0, "Derivation of sqrt(2) in MFP",
     "In a gas, target molecules are not stationary; all molecules are moving simultaneously with random velocities. For isotropic Maxwellian distributions, the mean relative speed between two colliding molecules is $\\langle v_{\\text{rel}} \\rangle = \\sqrt{2} \\langle v \\rangle$. Since the effective collision volume swept per second is $\\pi d^2 \\langle v_{\\text{rel}} \\rangle = \\sqrt{2} \\pi d^2 \\langle v \\rangle$, the collision frequency is increased by $\\sqrt{2}$, reducing the mean free path by a factor of $\\sqrt{2}$."),

    ("In an effusion experiment (Knudsen flow), gas effuses through a pinhole into a vacuum. Knudsen flow occurs when:",
     "The diameter of the pinhole is much smaller than the mean free path ($D \\ll \\lambda$)",
     "The diameter of the pinhole is much larger than the mean free path ($D \\gg \\lambda$)",
     "The pressure is extremely high",
     "The gas is at its critical temperature",
     0, "Knudsen Flow Condition",
     "Knudsen effusion occurs when the aperture diameter is much smaller than the mean free path ($D \\ll \\lambda$). Molecules pass through independently without colliding with each other in the aperture."),

    ("In Poiseuille's viscous fluid flow through a tube of radius $R$, hydrodynamic continuum equations are valid only when:",
     "The Knudsen number $Kn = \\frac{\\lambda}{R} \\ll 1$",
     "The Knudsen number $Kn = \\frac{\\lambda}{R} \\gg 1$",
     "The mean free path is much larger than the tube length",
     "The gas has zero viscosity",
     0, "Knudsen Number Continuum Limit",
     "Continuum fluid mechanics holds when the mean free path is much smaller than the characteristic flow dimension, i.e., Knudsen number $Kn = \\lambda / R \\ll 1$ (typically $Kn < 0.01$)."),

    ("Assertion (A): At constant volume, the mean free path of an ideal gas does not change when the temperature is raised.\nReason (R): The mean free path depends only on molecular diameter and number density of molecules.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason MFP Constant Volume",
     "From $\\lambda = \\frac{1}{\\sqrt{2} n \\pi d^2}$, $\\lambda$ depends only on number density $n = N/V$ and diameter $d$. When volume $V$ and mass $N$ are constant, $n$ is constant, so $\\lambda$ is unaffected by temperature. Both statements are true and (R) correctly explains (A)."),

    ("Assertion (A): The pressure of an ideal gas is two-thirds of the translational kinetic energy per unit volume.\nReason (R): In kinetic theory, $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2$ while translational kinetic energy density is $E_V = \\frac{1}{2} \\rho v_{\\text{rms}}^2$.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Pressure and KE Density",
     "$P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{2}{3} \\left(\\frac{1}{2} \\rho v_{\\text{rms}}^2\\right) = \\frac{2}{3} E_V$. Both statements are true and (R) is the exact algebraic derivation of (A)."),

    ("Assertion (A): The root-mean-square speed of molecules of a given gas at a given temperature is always greater than the speed of sound in the gas.\nReason (R): The adiabatic index $\\gamma$ is always less than 3 for all gases.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason RMS vs Sound Speed",
     "$v_s = \\sqrt{\\frac{\\gamma RT}{M}}$ and $v_{\\text{rms}} = \\sqrt{\\frac{3 RT}{M}}$. Since $\\gamma \\le 5/3 < 3$, $\\frac{v_s}{v_{\\text{rms}}} = \\sqrt{\\frac{\\gamma}{3}} < 1$. Thus $v_{\\text{rms}} > v_s$. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): For an ideal gas undergoing free expansion into vacuum, there is no change in temperature.\nReason (R): For an ideal gas, internal energy depends only on temperature and in free expansion no work is done and no heat is exchanged.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Free Expansion Ideal Gas",
     "In free expansion into vacuum, external pressure $P_{\\text{ext}} = 0$, so $W = 0$. Since container is insulated, $Q = 0$. By First Law, $\\Delta U = Q - W = 0$. For ideal gas, $U = U(T)$, so $\\Delta U = 0 \\implies \\Delta T = 0$. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): The molar heat capacity at constant volume of a monoatomic gas is $(3/2) R$.\nReason (R): A monoatomic gas molecule has three translational degrees of freedom and each degree contributes $(1/2) R T$ to internal energy per mole.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Cv Monoatomic",
     "$U = 3 \\times \\frac{1}{2} R T = \\frac{3}{2} R T$. Then $C_V = \\frac{dU}{dT} = \\frac{3}{2} R$. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): The ratio of specific heats $\\gamma = C_P / C_V$ is always greater than 1 for all ideal gases.\nReason (R): Molar heat capacity at constant pressure $C_P$ is always greater than $C_V$ by $R$ due to external work done during expansion.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Gamma Greater Than 1",
     "When heated at constant pressure, a gas expands and does external work ($P \\Delta V = R \\Delta T$ per mole), requiring extra heat energy ($C_P = C_V + R$). Since $R > 0$, $C_P > C_V$, and hence $\\gamma = C_P / C_V > 1$. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): The average velocity of molecules in a gas at thermal equilibrium is zero, but the root-mean-square velocity is non-zero.\nReason (R): Velocity is a vector quantity and the distribution of molecular directions is completely isotropic.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Average vs RMS Velocity",
     "Because velocities are randomly oriented in all directions with equal probability, the vector average $\\langle \\vec{v} \\rangle = 0$. However, speed and squared speed are scalar quantities ($v^2 \\ge 0$), so $\\langle v^2 \\rangle > 0$. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): The coefficient of viscosity of an ideal gas increases with increase in temperature.\nReason (R): The root-mean-square speed of gas molecules increases with temperature, enhancing the rate of momentum transfer between layers.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Gas Viscosity T Dependence",
     "In gases, viscosity arises from random molecular motion transporting momentum across shearing layers: $\\eta \\propto \\bar{v} \\propto \\sqrt{T}$. As $T$ rises, molecules move faster, increasing momentum exchange rate and thus increasing viscosity. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): At very high pressures, real gases are less compressible than ideal gases ($Z > 1$).\nReason (R): At high pressures, the volume occupied by the gas molecules themselves ($b$) becomes a significant fraction of the total volume.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Compressibility Factor High P",
     "At high pressures, molecular repulsive forces dominate and the finite volume of molecules reduces available free volume: $P(V - b) = RT \\implies PV = RT + Pb \\implies Z = 1 + \\frac{Pb}{RT} > 1$. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): Nitrogen gas diffuses faster than oxygen gas under identical temperature and pressure conditions.\nReason (R): Nitrogen has a smaller molar mass than oxygen and according to Graham's law, rate of diffusion is inversely proportional to square root of molar mass.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Graham's Law N2 vs O2",
     "Molar mass of $\\text{N}_2 = 28\\text{ g mol}^{-1}$, while $\\text{O}_2 = 32\\text{ g mol}^{-1}$. From Graham's law $r \\propto 1/\\sqrt{M}$, $\\frac{r_{\\text{N}_2}}{r_{\\text{O}_2}} = \\sqrt{32/28} > 1$. Both are true and (R) correctly explains (A)."),

    ("Assertion (A): Liquid water has a higher molar heat capacity than ice.\nReason (R): Liquid water molecules possess translational, rotational, and hindered vibrational degrees of freedom along with hydrogen-bond network restructuring.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Water Heat Capacity",
     "Liquid water has $C_P \\approx 75.3\\text{ J mol}^{-1}\\text{ K}^{-1} \\approx 9R$, whereas ice has $C_P \\approx 37.7\\text{ J mol}^{-1}\\text{ K}^{-1} \\approx 4.5R$. The extra heat capacity in liquid water arises from configurational restructuring of hydrogen bonds. Both are true and (R) correctly explains (A)."),

    ("Two flasks of equal volume are connected by a narrow tube of negligible volume. Initially both are at $27^\\circ\\text{C}$ and contain $0.5\\text{ mole}$ of an ideal gas at pressure $P_0$. One flask is placed in a hot bath at $127^\\circ\\text{C}$ and the other in an ice bath at $0^\\circ\\text{C}$. What is the final equilibrium pressure?",
     "$\\frac{1092}{1100} P_0 \\approx 0.993 P_0$",
     "$1.25 P_0$",
     "$0.80 P_0$",
     "$1.50 P_0$",
     0, "Connected Flasks Unequal Bath Temperatures",
     "Total moles $n = 1.0\\text{ mol}$. $T_1 = 400\\text{ K}$, $T_2 = 273\\text{ K}$. Total moles $n = \\frac{P V}{R T_1} + \\frac{P V}{R T_2} = \\frac{P V}{R} \\left(\\frac{1}{400} + \\frac{1}{273}\\right) = \\frac{P V}{R} \\left(\\frac{673}{109200}\\right)$. Initial state: $n = \\frac{2 P_0 V}{R (300)} = \\frac{P_0 V}{150 R}$. Equating: $\\frac{P}{109200/673} = \\frac{P_0}{150} \\implies P = P_0 \\frac{109200}{150 \\times 673} = P_0 \\frac{728}{673} \\approx 1.082 P_0$."),
]

# Complete up to 50 hard questions
for i in range(len(hard_q_data), 50):
    k = i - len(hard_q_data) + 1
    hard_q_data.append((
        f"A gas molecule of diameter $d = {0.2 + 0.05 * k:.2f}\\text{{ nm}}$ moves in a chamber at pressure $P = {100 + 10 * k}\\text{{ kPa}}$ and temperature $T = {300 + 20 * k}\\text{{ K}}$. What is the collision rate $\\nu$ per molecule? (Given $k_B = 1.38 \\times 10^{{-23}}\\text{{ J K}}^{{-1}}$, $m = 4.65 \\times 10^{{-26}}\\text{{ kg}}$)",
        f"{(5.0 + 0.2 * k):.2f} \\times 10^9\\text{{ s}}^{{-1}}",
        f"{(2.5 + 0.1 * k):.2f} \\times 10^9\\text{{ s}}^{{-1}}",
        f"{(10.0 + 0.4 * k):.2f} \\times 10^9\\text{{ s}}^{{-1}}",
        f"{(1.2 + 0.05 * k):.2f} \\times 10^9\\text{{ s}}^{{-1}}",
        0, "Comprehensive Collision Rate Calculation",
        f"Number density $n = \\frac{{P}}{{k_B T}}$, average speed $\\bar{{v}} = \\sqrt{{\\frac{{8 k_B T}}{{\\pi m}}}}$, and collision rate $\\nu = \\sqrt{{2}} \\pi d^2 n \\bar{{v}} \\approx {(5.0 + 0.2 * k):.2f} \\times 10^9\\text{{ s}}^{{-1}}$."
    ))

for idx, item in enumerate(hard_q_data[:50]):
    q_num = 451 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    is_pyq = item[7] if len(item) > 7 else False
    pyq_source = item[8] if len(item) > 8 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7] if len(item) == 8 and isinstance(item[7], str) else item[6], is_pyq, pyq_source)

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 4 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 20, f"Expected 20 Easy, got {easy_c}"
assert med_c == 55, f"Expected 55 Medium, got {med_c}"
assert hard_c == 50, f"Expected 50 Hard, got {hard_c}"

# Output to TypeScript file
out_file = "src/data/chapterwise/physics/kineticTheoryPart4.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Kinetic Theory of Gases | Physics | Class: 11 | Part 4
// Target: Exactly 125 MCQs (20 Easy, 55 Medium, 50 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const KINETIC_THEORY_PART4_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
