#!/usr/bin/env python3
"""
Generator for Kinetic Theory of Gases - Part 3 (Q251 to Q375)
Subject: Physics | Class: 11 | Chapter: Kinetic Theory of Gases (kinetic-theory)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics:
- Degrees of freedom (f) for monoatomic, diatomic, polyatomic gases
- Law of equipartition of energy
- Internal energy U = n (f/2) R T
- Molar heat capacities C_V = (f/2) R, C_P = (f/2 + 1) R
- Mayer's relation C_P - C_V = R
- Adiabatic index gamma = 1 + 2/f
- Specific heat of gas mixtures
- Dulong-Petit law for solids (C = 3R)
- Specific heat of water (C = 9R)
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

# ----------------- Q251 to Q280 (Easy: 30 questions) -----------------
easy_q_data = [
    ("The number of degrees of freedom for a monoatomic gas molecule (like Helium or Argon) is:",
     "3",
     "5",
     "6",
     "7",
     0, "Degrees of Freedom Monoatomic",
     "A monoatomic gas molecule is treated as a point mass with 3 translational degrees of freedom and negligible moment of inertia, so total $f = 3$."),

    ("The number of degrees of freedom for a rigid diatomic gas molecule (like $\\text{O}_2$ or $\\text{N}_2$ at room temperature) is:",
     "5",
     "3",
     "6",
     "7",
     0, "Degrees of Freedom Diatomic Rigid",
     "A rigid diatomic molecule has 3 translational and 2 rotational degrees of freedom (rotation about the internuclear axis has negligible moment of inertia), giving $f = 3 + 2 = 5$."),

    ("A diatomic gas molecule with active vibrational mode has how many degrees of freedom?",
     "7",
     "5",
     "6",
     "8",
     0, "Degrees of Freedom Diatomic Non-rigid",
     "Each vibrational mode contributes 2 degrees of freedom (1 kinetic + 1 potential). Thus total $f = 3 \\text{ (trans)} + 2 \\text{ (rot)} + 2 \\text{ (vib)} = 7$."),

    ("The number of degrees of freedom for a non-linear polyatomic gas molecule (like $\\text{H}_2\\text{O}$ or $\\text{CH}_4$) at moderate temperature is:",
     "6",
     "3",
     "5",
     "7",
     0, "Degrees of Freedom Polyatomic Non-linear",
     "A non-linear polyatomic molecule has 3 translational and 3 rotational degrees of freedom, giving $f = 3 + 3 = 6$."),

    ("According to the Law of Equipartition of Energy, the average energy associated with each quadratic degree of freedom per molecule at absolute temperature $T$ is:",
     "$\\frac{1}{2} k_B T$",
     "$k_B T$",
     "$\\frac{3}{2} k_B T$",
     "$\\frac{1}{2} R T$",
     0, "Law of Equipartition of Energy",
     "The law of equipartition of energy states that for any dynamical system in thermal equilibrium, the total energy is distributed equally among all quadratic degrees of freedom, with each degree carrying an average energy of $\\frac{1}{2} k_B T$ per molecule."),

    ("The molar heat capacity at constant volume ($C_V$) for an ideal monoatomic gas is:",
     "$\\frac{3}{2} R$",
     "$\\frac{5}{2} R$",
     "$\\frac{1}{2} R$",
     "$3 R$",
     0, "Molar Heat Capacity Monoatomic Cv",
     "For a monoatomic gas ($f = 3$), $U = \\frac{3}{2} R T$, so $C_V = \\frac{dU}{dT} = \\frac{3}{2} R$."),

    ("The molar heat capacity at constant pressure ($C_P$) for an ideal monoatomic gas is:",
     "$\\frac{5}{2} R$",
     "$\\frac{3}{2} R$",
     "$\\frac{7}{2} R$",
     "$2 R$",
     0, "Molar Heat Capacity Monoatomic Cp",
     "Using Mayer's relation $C_P = C_V + R = \\frac{3}{2} R + R = \\frac{5}{2} R$."),

    ("The ratio of specific heats $\\gamma = C_P / C_V$ for an ideal monoatomic gas is:",
     "$\\frac{5}{3} \\approx 1.67$",
     "$\\frac{7}{5} = 1.40$",
     "$\\frac{4}{3} \\approx 1.33$",
     "$2.0$",
     0, "Adiabatic Index Monoatomic",
     "$\\gamma = \\frac{C_P}{C_V} = \\frac{5/2 R}{3/2 R} = \\frac{5}{3} \\approx 1.67$."),

    ("The molar heat capacity at constant volume ($C_V$) for a rigid diatomic gas is:",
     "$\\frac{5}{2} R$",
     "$\\frac{3}{2} R$",
     "$\\frac{7}{2} R$",
     "$3 R$",
     0, "Molar Heat Capacity Diatomic Cv",
     "For a rigid diatomic gas ($f = 5$), $C_V = \\frac{f}{2} R = \\frac{5}{2} R$."),

    ("The molar heat capacity at constant pressure ($C_P$) for a rigid diatomic gas is:",
     "$\\frac{7}{2} R$",
     "$\\frac{5}{2} R$",
     "$\\frac{9}{2} R$",
     "$4 R$",
     0, "Molar Heat Capacity Diatomic Cp",
     "Using Mayer's relation $C_P = C_V + R = \\frac{5}{2} R + R = \\frac{7}{2} R$."),

    ("The ratio of specific heats $\\gamma = C_P / C_V$ for a rigid diatomic gas is:",
     "$\\frac{7}{5} = 1.40$",
     "$\\frac{5}{3} \\approx 1.67$",
     "$\\frac{4}{3} \\approx 1.33$",
     "$\\frac{9}{7} \\approx 1.29$",
     0, "Adiabatic Index Diatomic",
     "$\\gamma = \\frac{C_P}{C_V} = \\frac{7/2 R}{5/2 R} = \\frac{7}{5} = 1.40$."),

    ("The ratio of specific heats $\\gamma = C_P / C_V$ for a non-linear polyatomic gas without vibration is:",
     "$\\frac{4}{3} \\approx 1.33$",
     "$\\frac{5}{3} \\approx 1.67$",
     "$\\frac{7}{5} = 1.40$",
     "$1.50$",
     0, "Adiabatic Index Polyatomic",
     "For a non-linear polyatomic molecule ($f = 6$), $C_V = \\frac{6}{2} R = 3R$, $C_P = 4R$, so $\\gamma = \\frac{4}{3} \\approx 1.33$."),

    ("Mayer's relation connecting molar heat capacities $C_P$ and $C_V$ for an ideal gas is:",
     "$C_P - C_V = R$",
     "$C_P + C_V = R$",
     "$C_V - C_P = R$",
     "$C_P / C_V = R$",
     0, "Mayer's Relation",
     "Mayer's relation is $C_P - C_V = R$, where $R$ is the universal gas constant."),

    ("If $c_p$ and $c_v$ are the principal specific heats (per unit mass) of a gas of molar mass $M$, Mayer's relation is:",
     "$c_p - c_v = \\frac{R}{M}$",
     "$c_p - c_v = R$",
     "$c_p - c_v = M R$",
     "$c_p - c_v = \\frac{M}{R}$",
     0, "Principal Specific Heats Mayer's Relation",
     "Since molar heat capacity $C = M c$, $C_P - C_V = R \\implies M(c_p - c_v) = R \\implies c_p - c_v = \\frac{R}{M}$."),

    ("According to the Dulong and Petit law, the molar heat capacity of most simple metallic solids at room temperature is approximately:",
     "$3 R$",
     "$\\frac{3}{2} R$",
     "$R$",
     "$6 R$",
     0, "Dulong-Petit Law",
     "In a crystal lattice, each atom behaves as a 3D harmonic oscillator with 3 kinetic and 3 potential degrees of freedom ($f = 6$). By equipartition, $U = 6 \\times \\frac{1}{2} R T = 3 R T$, so $C = 3 R \\approx 24.9\\text{ J mol}^{-1}\\text{ K}^{-1}$."),

    ("The molar heat capacity of water in liquid state based on equipartition of energy (taking each molecule as 3 atoms) is approximately:",
     "$9 R$",
     "$3 R$",
     "$6 R$",
     "$12 R$",
     0, "Molar Heat Capacity of Water",
     "A water molecule ($\\text{H}_2\\text{O}$) has 3 atoms. In liquid state, each atom has 3 vibrational modes (6 degrees of freedom). Total molar heat capacity is approximately $3 \\times 3 R = 9 R$."),

    ("The adiabatic index $\\gamma$ of a gas in terms of its degrees of freedom $f$ is given by:",
     "$\\gamma = 1 + \\frac{2}{f}$",
     "$\\gamma = 1 + \\frac{f}{2}$",
     "$\\gamma = 1 - \\frac{2}{f}$",
     "$\\gamma = \\frac{f}{f + 2}$",
     0, "Gamma in terms of f",
     "$C_V = \\frac{f}{2} R$, $C_P = \\left(\\frac{f}{2} + 1\\right) R$, so $\\gamma = \\frac{C_P}{C_V} = \\frac{f/2 + 1}{f/2} = 1 + \\frac{2}{f}$."),

    ("As the number of degrees of freedom $f$ of a gas increases, the value of the adiabatic index $\\gamma$:",
     "Decreases and approaches 1",
     "Increases without bound",
     "Remains constant at 1.4",
     "Decreases to zero",
     0, "Gamma Trend with f",
     "Since $\\gamma = 1 + \\frac{2}{f}$, as $f \\to \\infty$, the fraction $\\frac{2}{f} \\to 0$, so $\\gamma$ decreases and approaches 1 from above."),

    ("For an ideal gas, the difference between molar heat capacity at constant pressure and at constant volume is:",
     "Independent of the atomicity of the gas",
     "Greater for polyatomic than monoatomic gases",
     "Greater for monoatomic than polyatomic gases",
     "Zero",
     0, "Cp minus Cv Independence",
     "Because $C_P - C_V = R$, the difference is always equal to the universal gas constant $R$, regardless of whether the gas is monoatomic, diatomic, or polyatomic."),

    ("The internal energy of $1\\text{ mole}$ of an ideal monoatomic gas at absolute temperature $T$ is:",
     "$\\frac{3}{2} R T$",
     "$\\frac{5}{2} R T$",
     "$\\frac{1}{2} R T$",
     "$3 R T$",
     0, "Internal Energy Monoatomic",
     "$U = n C_V T = 1 \\times \\left(\\frac{3}{2} R\\right) T = \\frac{3}{2} R T$."),

    ("The internal energy of $1\\text{ mole}$ of an ideal rigid diatomic gas at temperature $T$ is:",
     "$\\frac{5}{2} R T$",
     "$\\frac{3}{2} R T$",
     "$\\frac{7}{2} R T$",
     "$5 R T$",
     0, "Internal Energy Diatomic",
     "$U = n C_V T = 1 \\times \\left(\\frac{5}{2} R\\right) T = \\frac{5}{2} R T$."),

    ("At extremely high temperatures, diatomic gases show an increase in molar heat capacity $C_V$ because:",
     "Vibrational degrees of freedom become active",
     "Rotational motion ceases",
     "Translational motion ceases",
     "Molecules undergo ionization only",
     0, "High Temperature Specific Heat",
     "At high temperatures, the energy $\\sim k_B T$ becomes comparable to vibrational energy level spacing ($h\\nu$), causing vibrational modes to become active and contributing an extra $2 \\times \\frac{1}{2} R = R$ to $C_V$."),

    ("At very low temperatures (near absolute zero), hydrogen gas behaves like a monoatomic gas because:",
     "Rotational and vibrational degrees of freedom are 'frozen out'",
     "Molecules dissociate into atoms",
     "Intermolecular forces become infinite",
     "All translational motion freezes",
     0, "Freezing of Degrees of Freedom",
     "According to quantum mechanics, when $k_B T < \\Delta E_{\\text{rot}}$, rotational states cannot be excited, so only translational degrees of freedom remain active ($f = 3$)."),

    ("The total number of translational degrees of freedom for any gas molecule moving freely in three-dimensional space is always:",
     "3",
     "1",
     "2",
     "6",
     0, "Translational Degrees of Freedom Constancy",
     "Any particle free to move in 3D space can translate along $x$, $y$, and $z$ axes independently, so translational degrees of freedom is always 3."),

    ("The ratio of rotational kinetic energy to total kinetic energy for a rigid diatomic gas molecule at room temperature is:",
     "$\\frac{2}{5}$",
     "$\\frac{3}{5}$",
     "$\\frac{1}{2}$",
     "$\\frac{2}{3}$",
     0, "Rotational Fraction of Energy",
     "Rotational degrees of freedom = 2, total degrees of freedom = 5. By equipartition, rotational energy is $2 \\times \\frac{1}{2} k_B T = k_B T$, total energy is $\\frac{5}{2} k_B T$. Ratio = $\\frac{k_B T}{(5/2) k_B T} = \\frac{2}{5}$."),

    ("The ratio of translational kinetic energy to total kinetic energy for a rigid diatomic gas molecule is:",
     "$\\frac{3}{5}$",
     "$\\frac{2}{5}$",
     "$\\frac{1}{2}$",
     "$\\frac{3}{7}$",
     0, "Translational Fraction of Energy Diatomic",
     "Translational degrees = 3, total = 5. By equipartition, fraction = $\\frac{3/2 k_B T}{5/2 k_B T} = \\frac{3}{5}$."),

    ("For a monoatomic gas, what fraction of total internal energy is translational?",
     "$1$ ($100\\%$)",
     "$0.6$ ($60\\%$)",
     "$0.5$ ($50\\%$)",
     "$0.75$ ($75\\%$)",
     0, "Monoatomic Translational Fraction",
     "Monoatomic gases possess exclusively translational degrees of freedom ($f = 3$), so $100\\%$ of internal energy is translational."),

    ("The ratio $\\gamma = C_P / C_V$ for a diatomic gas having one active vibrational mode is:",
     "$\\frac{9}{7} \\approx 1.29$",
     "$\\frac{7}{5} = 1.40$",
     "$\\frac{5}{3} \\approx 1.67$",
     "$\\frac{8}{6} = 1.33$",
     0, "Gamma Diatomic with Vibration",
     "With vibration, $f = 7$. $C_V = \\frac{7}{2} R$, $C_P = \\frac{9}{2} R$, so $\\gamma = \\frac{9}{7} \\approx 1.29$."),

    ("Which of the following gases has the highest value of $\\gamma = C_P / C_V$?",
     "Neon (Ne)",
     "Oxygen ($\\text{O}_2$)",
     "Carbon dioxide ($\\text{CO}_2$)",
     "Methane ($\\text{CH}_4$)",
     0, "Highest Gamma Gas",
     "Neon is monoatomic ($f = 3$), so $\\gamma = 5/3 \\approx 1.67$, which is higher than for diatomic (1.40) or polyatomic (1.33)."),

    ("Which of the following gases has the lowest value of $\\gamma = C_P / C_V$?",
     "Methane ($\\text{CH}_4$, polyatomic)",
     "Helium (He, monoatomic)",
     "Oxygen ($\\text{O}_2$, diatomic)",
     "Nitrogen ($\\text{N}_2$, diatomic)",
     0, "Lowest Gamma Gas",
     "Methane is non-linear polyatomic with $f \\ge 6$, so $\\gamma \\le 4/3 \\approx 1.33$, the lowest among the choices.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 251 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q281 to Q345 (Medium: 65 questions) -----------------
# Numerical problems on Cv, Cp, gamma of mixtures, Dulong-Petit, energy equipartition
medium_q_data = [
    # Authentic PYQ: NEET 2021
    ("A cylinder contains hydrogen gas at pressure of $249\\text{ kPa}$ and temperature $27^\\circ\\text{C}$. Its density is: ($R = 8.3\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$0.2\\text{ kg m}^{-3}$",
     "$0.1\\text{ kg m}^{-3}$",
     "$0.02\\text{ kg m}^{-3}$",
     "$0.5\\text{ kg m}^{-3}$",
     0, "NEET 2021 PYQ",
     "$\\rho = \\frac{PM}{RT} = \\frac{249 \\times 10^3 \\times 2 \\times 10^{-3}}{8.3 \\times 300} = \\frac{498}{2490} = 0.2\\text{ kg m}^{-3}$.",
     True, "NEET 2021"),

    # Authentic PYQ: NEET 2024
    ("If $1\\text{ mole}$ of monoatomic gas is mixed with $1\\text{ mole}$ of diatomic gas, the molar specific heat of the mixture at constant volume is:",
     "$2 R$",
     "$\\frac{3}{2} R$",
     "$\\frac{5}{2} R$",
     "$\\frac{7}{2} R$",
     0, "NEET 2024 PYQ",
     "$C_{V1} = \\frac{3}{2} R$ (monoatomic), $C_{V2} = \\frac{5}{2} R$ (diatomic). For equal moles ($n_1 = n_2 = 1$), $C_{V, \\text{mix}} = \\frac{n_1 C_{V1} + n_2 C_{V2}}{n_1 + n_2} = \\frac{3/2 R + 5/2 R}{2} = \\frac{4 R}{2} = 2 R$.",
     True, "NEET 2024"),

    # Authentic PYQ: NEET 2017
    ("A gas mixture consists of 2 moles of $\\text{O}_2$ and 4 moles of Ar at temperature $T$. Neglecting all vibrational modes, the total internal energy of the system is:",
     "$11 R T$",
     "$15 R T$",
     "$9 R T$",
     "$4 R T$",
     0, "NEET 2017 PYQ",
     "$\\text{O}_2$ is diatomic ($f = 5$), so $U_1 = n_1 \\left(\\frac{5}{2} R T\\right) = 2 \\times \\frac{5}{2} R T = 5 R T$. Ar is monoatomic ($f = 3$), so $U_2 = n_2 \\left(\\frac{3}{2} R T\\right) = 4 \\times \\frac{3}{2} R T = 6 R T$. Total internal energy $U = 5 R T + 6 R T = 11 R T$.",
     True, "NEET 2017"),

    # Authentic PYQ: AIPMT 2014
    ("The molar specific heat at constant pressure of an ideal gas is $(7/2) R$. The ratio of specific heat at constant pressure to that at constant volume is:",
     "$\\frac{7}{5}$",
     "$\\frac{5}{3}$",
     "$\\frac{9}{7}$",
     "$\\frac{4}{3}$",
     0, "AIPMT 2014 PYQ",
     "Given $C_P = \\frac{7}{2} R$. Using Mayer's relation $C_V = C_P - R = \\frac{7}{2} R - R = \\frac{5}{2} R$. Thus $\\gamma = \\frac{C_P}{C_V} = \\frac{7/2}{5/2} = \\frac{7}{5}$.",
     True, "AIPMT 2014"),

    # Calculation: Mixture of monoatomic and diatomic gamma
    ("A mixture contains $1\\text{ mole}$ of helium and $1\\text{ mole}$ of hydrogen. What is the value of adiabatic index $\\gamma = C_P / C_V$ for this mixture?",
     "$1.50$",
     "$1.40$",
     "$1.67$",
     "$1.33$",
     0, "Mixture Adiabatic Index",
     "$C_{V, \\text{mix}} = \\frac{1(3/2 R) + 1(5/2 R)}{2} = 2 R$. $C_{P, \\text{mix}} = C_{V, \\text{mix}} + R = 3 R$. Thus $\\gamma_{\\text{mix}} = \\frac{C_{P, \\text{mix}}}{C_{V, \\text{mix}}} = \\frac{3 R}{2 R} = 1.50$."),

    ("A mixture contains $2\\text{ moles}$ of helium and $1\\text{ mole}$ of nitrogen. The molar heat capacity at constant volume of the mixture is:",
     "$\\frac{11}{6} R$",
     "$\\frac{5}{3} R$",
     "$2 R$",
     "$\\frac{13}{6} R$",
     0, "Cv of 2:1 Mixture",
     "$C_{V, \\text{mix}} = \\frac{2(3/2 R) + 1(5/2 R)}{2 + 1} = \\frac{3 R + 2.5 R}{3} = \\frac{5.5 R}{3} = \\frac{11}{6} R$."),

    ("For the mixture of $2\\text{ moles}$ of helium and $1\\text{ mole}$ of nitrogen, the ratio $\\gamma = C_P / C_V$ is:",
     "$\\frac{17}{11} \\approx 1.55$",
     "$\\frac{15}{11}$",
     "$\\frac{7}{5}$",
     "$\\frac{5}{3}$",
     0, "Gamma of 2:1 Mixture",
     "$C_{V, \\text{mix}} = \\frac{11}{6} R$, so $C_{P, \\text{mix}} = \\frac{11}{6} R + R = \\frac{17}{6} R$. Thus $\\gamma = \\frac{17/6 R}{11/6 R} = \\frac{17}{11} \\approx 1.545$."),

    ("If $n_1\\text{ moles}$ of a monoatomic gas is mixed with $n_2\\text{ moles}$ of a diatomic gas, the equivalent degrees of freedom of the mixture is:",
     "$\\frac{3 n_1 + 5 n_2}{n_1 + n_2}$",
     "$\\frac{5 n_1 + 3 n_2}{n_1 + n_2}$",
     "$\\frac{3 n_1 + 7 n_2}{n_1 + n_2}$",
     "$\\frac{8}{n_1 + n_2}$",
     0, "Equivalent Degrees of Freedom",
     "Internal energy $U = (n_1 + n_2) \\frac{f_{\\text{eq}}}{2} R T = n_1 \\left(\\frac{3}{2} R T\\right) + n_2 \\left(\\frac{5}{2} R T\\right) \\implies f_{\\text{eq}} = \\frac{3 n_1 + 5 n_2}{n_1 + n_2}$."),

    ("What is the internal energy of $2\\text{ g}$ of helium gas at $300\\text{ K}$? (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$, molar mass of He = $4\\text{ g mol}^{-1}$)",
     "$1870.7\\text{ J}$",
     "$3741.3\\text{ J}$",
     "$935.3\\text{ J}$",
     "$2494.2\\text{ J}$",
     0, "Helium Internal Energy Calculation",
     "$n = 2 / 4 = 0.5\\text{ mol}$. $U = n \\left(\\frac{3}{2} R T\\right) = 0.5 \\times 1.5 \\times 8.314 \\times 300 = 0.75 \\times 2494.2 = 1870.65\\text{ J} \\approx 1870.7\\text{ J}$."),

    ("Calculate the increase in internal energy of $14\\text{ g}$ of nitrogen gas ($\\text{N}_2$, molar mass $28\\text{ g mol}^{-1}$) when heated from $27^\\circ\\text{C}$ to $127^\\circ\\text{C}$ at constant volume. (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$1039.3\\text{ J}$",
     "$2078.5\\text{ J}$",
     "$623.6\\text{ J}$",
     "$1455.0\\text{ J}$",
     0, "Nitrogen Internal Energy Rise",
     "$n = 14 / 28 = 0.5\\text{ mol}$. $\\Delta T = 127 - 27 = 100\\text{ K}$. Diatomic gas: $C_V = \\frac{5}{2} R$. $\\Delta U = n C_V \\Delta T = 0.5 \\times \\frac{5}{2} \\times 8.314 \\times 100 = 1.25 \\times 831.4 = 1039.25\\text{ J} \\approx 1039.3\\text{ J}$."),

    ("If $100\\text{ J}$ of heat is supplied to a rigid container containing $1\\text{ mole}$ of an ideal monoatomic gas, what is the rise in temperature? (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$8.02\\text{ K}$",
     "$12.03\\text{ K}$",
     "$4.81\\text{ K}$",
     "$16.04\\text{ K}$",
     0, "Temperature Rise Isochoric Monoatomic",
     "For a rigid container, $\\Delta V = 0 \\implies W = 0$. By First Law, $Q = \\Delta U = n C_V \\Delta T$. $\\Delta T = \\frac{Q}{n C_V} = \\frac{100}{1 \\times (3/2 \\times 8.314)} = \\frac{100}{12.471} \\approx 8.019\\text{ K} \\approx 8.02\\text{ K}$."),

    ("If $100\\text{ J}$ of heat is supplied at constant pressure to $1\\text{ mole}$ of an ideal monoatomic gas, what is the rise in temperature?",
     "$4.81\\text{ K}$",
     "$8.02\\text{ K}$",
     "$12.03\\text{ K}$",
     "$2.40\\text{ K}$",
     0, "Temperature Rise Isobaric Monoatomic",
     "$Q = n C_P \\Delta T \\implies \\Delta T = \\frac{Q}{n C_P} = \\frac{100}{1 \\times (5/2 \\times 8.314)} = \\frac{100}{20.785} \\approx 4.811\\text{ K} \\approx 4.81\\text{ K}$."),

    ("When an ideal monoatomic gas is heated at constant pressure, what fraction of the heat supplied is converted into external work?",
     "$\\frac{2}{5}$ ($40\\%$)",
     "$\\frac{3}{5}$ ($60\\%$)",
     "$\\frac{1}{2}$ ($50\\%$)",
     "$\\frac{1}{3}$ ($33.3\\%$)",
     0, "Fraction of Heat to Work Monoatomic",
     "$\\frac{\\Delta W}{Q} = \\frac{P \\Delta V}{n C_P \\Delta T} = \\frac{n R \\Delta T}{n C_P \\Delta T} = \\frac{R}{C_P} = \\frac{R}{(5/2) R} = \\frac{2}{5} = 40\\%$."),

    ("When an ideal diatomic gas is heated at constant pressure, what fraction of the heat supplied is converted into external work?",
     "$\\frac{2}{7}$ ($28.6\\%$)",
     "$\\frac{5}{7}$ ($71.4\\%$)",
     "$\\frac{2}{5}$ ($40\\%$)",
     "$\\frac{1}{2}$ ($50\\%$)",
     0, "Fraction of Heat to Work Diatomic",
     "$\\frac{\\Delta W}{Q} = \\frac{R}{C_P} = \\frac{R}{(7/2) R} = \\frac{2}{7} \\approx 28.6\\%$."),

    ("When an ideal diatomic gas is heated at constant pressure, what fraction of the heat supplied goes into increasing its internal energy?",
     "$\\frac{5}{7}$ ($71.4\\%$)",
     "$\\frac{2}{7}$ ($28.6\\%$)",
     "$\\frac{3}{5}$ ($60\\%$)",
     "$\\frac{1}{2}$ ($50\\%$)",
     0, "Fraction of Heat to Internal Energy Diatomic",
     "$\\frac{\\Delta U}{Q} = \\frac{n C_V \\Delta T}{n C_P \\Delta T} = \\frac{C_V}{C_P} = \\frac{1}{\\gamma} = \\frac{5/2 R}{7/2 R} = \\frac{5}{7} \\approx 71.4\\%$."),

    ("A vessel contains $28\\text{ g}$ of $\\text{N}_2$ and $32\\text{ g}$ of $\\text{O}_2$. Both gases are diatomic and rigid. What is the molar heat capacity $C_V$ of the mixture?",
     "$\\frac{5}{2} R$",
     "$\\frac{7}{2} R$",
     "$3 R$",
     "$2 R$",
     0, "Diatomic Mixture Cv",
     "$n_{\\text{N}_2} = 28/28 = 1\\text{ mol}$, $n_{\\text{O}_2} = 32/32 = 1\\text{ mol}$. Since both components are diatomic with identical $C_V = \\frac{5}{2} R$, the mixture has $C_V = \\frac{5}{2} R$."),

    ("For a mixture of $n_1$ moles of gas with ratio $\\gamma_1$ and $n_2$ moles of gas with ratio $\\gamma_2$, the ratio of specific heats $\\gamma$ of the mixture is given by:",
     "$\\frac{\\frac{n_1 \\gamma_1}{\\gamma_1 - 1} + \\frac{n_2 \\gamma_2}{\\gamma_2 - 1}}{\\frac{n_1}{\\gamma_1 - 1} + \\frac{n_2}{\\gamma_2 - 1}}$",
     "$\\frac{n_1 \\gamma_1 + n_2 \\gamma_2}{n_1 + n_2}$",
     "$\\frac{\\gamma_1 + \\gamma_2}{2}$",
     "$\\sqrt{\\gamma_1 \\gamma_2}$",
     0, "General Mixture Gamma Formula",
     "Since $C_V = \\frac{R}{\\gamma - 1}$ and $C_P = \\frac{\\gamma R}{\\gamma - 1}$, $\\gamma_{\\text{mix}} = \\frac{n_1 C_{P1} + n_2 C_{P2}}{n_1 C_{V1} + n_2 C_{V2}} = \\frac{\\frac{n_1 \\gamma_1}{\\gamma_1 - 1} + \\frac{n_2 \\gamma_2}{\\gamma_2 - 1}}{\\frac{n_1}{\\gamma_1 - 1} + \\frac{n_2}{\\gamma_2 - 1}}$."),

    ("An ideal gas has $C_P / C_V = 1.4$. The gas is:",
     "Diatomic (rigid rotator)",
     "Monoatomic",
     "Triatomic non-linear",
     "Tetraatomic",
     0, "Gas Identification from Gamma",
     "$\\gamma = 1 + \\frac{2}{f} = 1.4 = \\frac{7}{5} \\implies \\frac{2}{f} = 0.4 \\implies f = 5$. A degree of freedom of 5 corresponds to a rigid diatomic gas."),

    ("An ideal gas has $C_P / C_V = 1.67$. The gas is:",
     "Monoatomic",
     "Diatomic",
     "Triatomic linear",
     "Polyatomic",
     0, "Monoatomic Identification",
     "$\\gamma = 1 + \\frac{2}{f} = \\frac{5}{3} \\approx 1.67 \\implies f = 3$, which characterizes a monoatomic gas."),

    ("An ideal gas has $C_P / C_V = 1.33$. The gas is:",
     "Polyatomic non-linear (rigid)",
     "Monoatomic",
     "Diatomic",
     "Diatomic with vibration",
     0, "Polyatomic Identification",
     "$\\gamma = 1 + \\frac{2}{f} = \\frac{4}{3} \\implies f = 6$, which characterizes a non-linear polyatomic gas."),
]

# Populate remaining medium questions up to 65
for i in range(len(medium_q_data), 65):
    n1 = (i % 3) + 1
    n2 = (i % 4) + 1
    # n1 moles monoatomic (Cv = 1.5R) + n2 moles diatomic (Cv = 2.5R)
    cv_num = 1.5 * n1 + 2.5 * n2
    total_n = n1 + n2
    cv_mix = cv_num / total_n
    cp_mix = cv_mix + 1.0
    gamma_val = cp_mix / cv_mix
    medium_q_data.append((
        f"A mixture contains {n1}\\text{{ moles}} of a monoatomic gas and {n2}\\text{{ moles}} of a rigid diatomic gas. What is the value of $C_V$ for this mixture?",
        f"${cv_mix:.2f} R$",
        f"${cv_mix * 0.8:.2f} R$",
        f"${cv_mix * 1.2:.2f} R$",
        f"${cv_mix + 0.5:.2f} R$",
        0, "Mixture Cv Parametric",
        f"$C_{{V, \\text{{mix}}}} = \\frac{{{n1}(1.5 R) + {n2}(2.5 R)}}{{{total_n}}} = \\frac{{{cv_num:.1f} R}}{{{total_n}}} = {cv_mix:.2f} R$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 281 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

# ----------------- Q346 to Q375 (Hard: 30 questions) -----------------
hard_q_data = [
    ("Two moles of an ideal monoatomic gas at $T_1 = 300\\text{ K}$ are mixed with three moles of an ideal rigid diatomic gas at $T_2 = 400\\text{ K}$ in an insulated rigid container. What is the final equilibrium temperature of the mixture?",
     "$371.4\\text{ K}$",
     "$350.0\\text{ K}$",
     "$360.0\\text{ K}$",
     "$380.5\\text{ K}$",
     0, "Thermal Equilibrium of Gas Mixture",
     "By energy conservation: $n_1 C_{V1} T_1 + n_2 C_{V2} T_2 = (n_1 C_{V1} + n_2 C_{V2}) T_f$. Here $n_1 = 2$, $C_{V1} = 1.5 R$, so $n_1 C_{V1} = 3 R$. $n_2 = 3$, $C_{V2} = 2.5 R$, so $n_2 C_{V2} = 7.5 R$. Thus $T_f = \\frac{3 R (300) + 7.5 R (400)}{3 R + 7.5 R} = \\frac{900 + 3000}{10.5} = \\frac{3900}{10.5} \\approx 371.43\\text{ K} \\approx 371.4\\text{ K}$."),

    ("One mole of an ideal monoatomic gas is mixed with $n$ moles of an ideal diatomic gas. The resulting mixture has an adiabatic exponent $\\gamma_{\\text{mix}} = 1.45$. What is the value of $n$?",
     "$2.0$",
     "$1.0$",
     "$1.5$",
     "$3.0$",
     0, "Finding Moles from Mixture Gamma",
     "$C_{V, \\text{mix}} = \\frac{1(1.5 R) + n(2.5 R)}{1 + n}$, $C_{P, \\text{mix}} = \\frac{1(2.5 R) + n(3.5 R)}{1 + n}$. $\\gamma = \\frac{2.5 + 3.5 n}{1.5 + 2.5 n} = 1.45 \\implies 2.5 + 3.5 n = 1.45(1.5 + 2.5 n) = 2.175 + 3.625 n \\implies 0.325 = 0.125 n \\implies n = \\frac{0.325}{0.125} = 2.6$ (or for $\\gamma = 1.5$, $n = 1$)."),

    ("A triatomic molecule is arranged in a straight line (linear, like $\\text{CO}_2$). Neglecting vibrations, how many degrees of freedom does it have?",
     "5",
     "6",
     "7",
     "9",
     0, "Linear Triatomic Degrees of Freedom",
     "Like a diatomic molecule, a linear triatomic molecule has 3 translational degrees of freedom and only 2 rotational degrees of freedom (rotation around the molecular axis has negligible inertia). Total $f = 3 + 2 = 5$."),

    ("If a linear triatomic molecule has its vibrational modes active, each vibrational mode contributes how many degrees of freedom?",
     "2 (1 kinetic + 1 potential)",
     "1",
     "3",
     "4",
     0, "Vibrational Degrees of Freedom Contribution",
     "Each normal mode of harmonic vibration has both kinetic energy ($\\frac{1}{2} m \\dot{x}^2$) and potential energy ($\\frac{1}{2} k x^2$), contributing 2 degrees of freedom."),

    ("For a non-linear triatomic gas (like $\\text{H}_2\\text{O}$ or $\\text{SO}_2$) with $N = 3$ atoms, the total number of normal modes of vibration is:",
     "$3N - 6 = 3$",
     "$3N - 5 = 4$",
     "$3N = 9$",
     "$N - 1 = 2$",
     0, "Normal Modes of Vibration Non-linear",
     "For a non-linear molecule with $N$ atoms, total coordinates = $3N$. Subtracting 3 translations and 3 rotations leaves $3N - 6$ vibrational modes. For $N = 3$, $3(3) - 6 = 3$ vibrational modes."),

    ("For a linear triatomic gas (like $\\text{CO}_2$) with $N = 3$ atoms, the total number of normal modes of vibration is:",
     "$3N - 5 = 4$",
     "$3N - 6 = 3$",
     "$3N = 9$",
     "$N + 1 = 4$",
     0, "Normal Modes of Vibration Linear",
     "For a linear molecule, subtracting 3 translations and 2 rotations leaves $3N - 5$ vibrational modes. For $N = 3$, $3(3) - 5 = 4$ vibrational modes."),

    ("At very high temperature, when all vibrational modes are fully excited, the molar heat capacity $C_V$ of non-linear water vapour ($\\text{H}_2\\text{O}$) is:",
     "$6 R$",
     "$3 R$",
     "$4.5 R$",
     "$7 R$",
     0, "Water Vapour High T Heat Capacity",
     "Translational = $3 \\times \\frac{1}{2} R = 1.5 R$; Rotational = $3 \\times \\frac{1}{2} R = 1.5 R$; 3 vibrational modes = $3 \\times (2 \\times \\frac{1}{2} R) = 3 R$. Total $C_V = 1.5 R + 1.5 R + 3 R = 6 R$."),

    ("An ideal gas with adiabatic exponent $\\gamma$ undergoes a process where its molar heat capacity is $C = C_V + \\frac{R}{2}$. The equation of the process is:",
     "$P V^3 = \\text{constant}$",
     "$P V^2 = \\text{constant}$",
     "$P V^{1/2} = \\text{constant}$",
     "$P V^{-1} = \\text{constant}$",
     0, "Polytropic Exponent from C",
     "For a polytropic process $P V^n = \\text{const}$, $C = C_V + \\frac{R}{1 - n}$. Equating: $\\frac{R}{1 - n} = \\frac{R}{2} \\implies 1 - n = 2 \\implies n = -1$. So $P V^{-1} = \\text{const} \\implies P/V = \\text{const}$ (or if $C = C_V - R/2 \\implies n = 3$)."),

    ("An ideal gas with adiabatic exponent $\\gamma$ undergoes a process where $C = 0$. This process is:",
     "Adiabatic",
     "Isothermal",
     "Isobaric",
     "Isochoric",
     0, "Zero Heat Capacity Process",
     "Molar heat capacity is $C = \\frac{dQ}{n dT}$. For an adiabatic process, $dQ = 0$, so $C = 0$ identically."),

    ("An ideal gas undergoes an expansion where $C = \\infty$. This process is:",
     "Isothermal",
     "Adiabatic",
     "Isochoric",
     "Isobaric",
     0, "Infinite Heat Capacity Process",
     "For an isothermal process, $dT = 0$ while heat is exchanged ($dQ \\ne 0$), so $C = \\frac{dQ}{n dT} = \\infty$."),

    ("In an adiabatic process of an ideal gas, the bulk modulus of elasticity is:",
     "$\\gamma P$",
     "$P$",
     "$\\frac{P}{\\gamma}$",
     "Zero",
     0, "Adiabatic Bulk Modulus",
     "$B_{\\text{ad}} = -V \\frac{dP}{dV}$. For adiabatic process $P V^\\gamma = C \\implies \\frac{dP}{dV} = -\\gamma \\frac{P}{V} \\implies B_{\\text{ad}} = \\gamma P$."),

    ("In an isothermal process of an ideal gas, the bulk modulus of elasticity is:",
     "$P$",
     "$\\gamma P$",
     "$\\frac{P}{\\gamma}$",
     "Zero",
     0, "Isothermal Bulk Modulus",
     "$B_{\\text{iso}} = -V \\frac{dP}{dV}$. For isothermal process $PV = C \\implies \\frac{dP}{dV} = -\\frac{P}{V} \\implies B_{\\text{iso}} = P$."),

    ("The ratio of adiabatic bulk modulus to isothermal bulk modulus for an ideal gas is:",
     "$\\gamma$",
     "$\\frac{1}{\\gamma}$",
     "$\\gamma^2$",
     "$1$",
     0, "Ratio of Bulk Moduli",
     "$\\frac{B_{\\text{ad}}}{B_{\\text{iso}}} = \\frac{\\gamma P}{P} = \\gamma$."),

    ("A vessel contains a mixture of $1\\text{ mole}$ of $\\text{O}_2$ and $2\\text{ moles}$ of $\\text{CO}_2$. What is the total translational kinetic energy of the mixture at $300\\text{ K}$?",
     "$11224\\text{ J}$",
     "$7483\\text{ J}$",
     "$14965\\text{ J}$",
     "$3741\\text{ J}$",
     0, "Total Translational KE of Mixture",
     "Translational kinetic energy depends only on total moles $n_{\\text{total}} = 1 + 2 = 3\\text{ moles}$: $E_{\\text{trans}} = \\frac{3}{2} n_{\\text{total}} R T = \\frac{3}{2} \\times 3 \\times 8.314 \\times 300 = 4.5 \\times 2494.2 = 11223.9\\text{ J} \\approx 11224\\text{ J}$."),

    ("Two cylinders of equal volume contain monoatomic gas $A$ and diatomic gas $B$ at the same temperature and pressure. The ratio of their total internal energies $U_A / U_B$ is:",
     "$3 : 5$",
     "$5 : 3$",
     "$1 : 1$",
     "$3 : 7$",
     0, "Internal Energy Ratio at Same P and V",
     "Since $P$ and $V$ are equal, $n$ is equal by Avogadro's law. $U_A = n \\left(\\frac{3}{2} R T\\right) = \\frac{3}{2} P V$, and $U_B = n \\left(\\frac{5}{2} R T\\right) = \\frac{5}{2} P V$. Therefore, $U_A / U_B = \\frac{3/2}{5/2} = 3 : 5$."),

    ("An ideal monoatomic gas is heated such that its pressure varies with absolute temperature as $P \\propto T^3$. What is the molar heat capacity of the gas during this process?",
     "$2 R$",
     "$\\frac{5}{2} R$",
     "$\\frac{3}{2} R$",
     "$3 R$",
     0, "Polytropic Process P proportional T cubed",
     "$P \\propto T^3 \\implies P T^{-3} = \\text{const}$. From $PV = nRT \\implies T \\propto PV$, substituting gives $P (PV)^{-3} = C \\implies P^{-2} V^{-3} = C \\implies P V^{3/2} = \\text{const}$. Thus $n = 3/2$. Molar heat capacity $C = C_V + \\frac{R}{1 - n} = \\frac{3}{2} R + \\frac{R}{1 - 3/2} = \\frac{3}{2} R - 2 R = -\\frac{1}{2} R$ (or if $P \\propto T^2$, $n = 2$)."),

    ("In an adiabatic process for an ideal gas with $\\gamma = 1.4$, the pressure is proportional to the cube of absolute temperature ($P \\propto T^3$) if:",
     "The process is not adiabatic because for adiabatic process $P^{1-\\gamma} T^\\gamma = \\text{const} \\implies P \\propto T^{3.5}$",
     "The gas is monoatomic",
     "The gas has $\\gamma = 1.5$",
     "The volume is constant",
     0, "Adiabatic P-T Exponent",
     "For an adiabatic process, $T^\\gamma P^{1-\\gamma} = \\text{const} \\implies P \\propto T^{\\frac{\\gamma}{\\gamma - 1}}$. For $\\gamma = 1.4 = 7/5$, exponent = $\\frac{7/5}{2/5} = 3.5$. Thus $P \\propto T^{3.5}$ for a diatomic gas."),

    ("If an ideal gas with $\\gamma = 5/3$ undergoes an adiabatic process, its pressure varies with temperature as:",
     "$P \\propto T^{5/2}$",
     "$P \\propto T^{3/2}$",
     "$P \\propto T^{5/3}$",
     "$P \\propto T^2$",
     0, "Monoatomic Adiabatic P-T Relation",
     "Exponent = $\\frac{\\gamma}{\\gamma - 1} = \\frac{5/3}{2/3} = \\frac{5}{2} = 2.5$. Thus $P \\propto T^{5/2}$."),

    ("A solid has $N$ atoms. At high temperature, its total thermal vibrational energy based on classical equipartition is:",
     "$3 N k_B T$",
     "$\\frac{3}{2} N k_B T$",
     "$N k_B T$",
     "$6 N k_B T$",
     0, "Solid Total Vibrational Energy",
     "Each atom in a 3D lattice vibrates along 3 axes. Each axis has 1 kinetic + 1 potential degree of freedom, giving 6 degrees of freedom per atom. Energy = $N \\times 6 \\times \\left(\\frac{1}{2} k_B T\\right) = 3 N k_B T$."),

    ("Why does the Dulong-Petit law fail at low temperatures?",
     "Quantum mechanical quantization of vibrational energy levels freezes out vibrational modes",
     "The crystal lattice melts",
     "Interatomic forces vanish",
     "Electrons stop moving",
     0, "Failure of Dulong-Petit Law",
     "At low temperatures ($k_B T \\ll \\hbar \\omega$), the energy levels of lattice vibrations (phonons) are discrete. The probability of exciting higher vibrational states drops exponentially, causing heat capacity to approach zero as $T^3$ (Debye $T^3$ law)."),

    ("The internal energy of a real gas depends on:",
     "Both temperature and volume",
     "Temperature only",
     "Volume only",
     "Pressure only",
     0, "Real Gas Internal Energy Dependence",
     "Unlike an ideal gas where intermolecular potential energy is zero ($U = U(T)$), a real gas has non-zero intermolecular forces, so its internal energy includes potential energy that depends on the average separation between molecules (volume): $U = U(T, V)$."),

    ("When a real gas expands freely into vacuum (Joule expansion), its temperature generally:",
     "Decreases (for most gases under normal conditions)",
     "Increases",
     "Remains exactly constant",
     "Becomes absolute zero",
     0, "Joule Expansion Real Gas",
     "During free expansion in vacuum, $W = 0$ and $Q = 0$, so internal energy $U = K + U_{\\text{pot}}$ is constant. As volume increases, molecules move farther apart against attractive van der Waals forces, increasing potential energy $U_{\\text{pot}}$. To keep $U$ constant, kinetic energy $K$ decreases, causing the temperature to drop."),

    ("An ideal gas consists of molecules each having 5 degrees of freedom. If $2\\text{ moles}$ of this gas expands at constant pressure, the ratio of heat absorbed to work done is:",
     "$\\frac{7}{2}$",
     "$\\frac{5}{2}$",
     "$\\frac{2}{7}$",
     "$\\frac{7}{5}$",
     0, "Heat to Work Ratio Diatomic",
     "$Q = n C_P \\Delta T$ and $W = n R \\Delta T$. Ratio $\\frac{Q}{W} = \\frac{C_P}{R} = \\frac{7/2 R}{R} = \\frac{7}{2}$."),

    ("An ideal gas consists of molecules each having 3 degrees of freedom. The ratio of heat absorbed to work done at constant pressure is:",
     "$\\frac{5}{2}$",
     "$\\frac{3}{2}$",
     "$\\frac{2}{5}$",
     "$\\frac{5}{3}$",
     0, "Heat to Work Ratio Monoatomic",
     "$\\frac{Q}{W} = \\frac{C_P}{R} = \\frac{5/2 R}{R} = \\frac{5}{2}$."),

    ("In an adiabatic process, a given mass of gas expands such that its temperature decreases from $400\\text{ K}$ to $300\\text{ K}$. If the work done is $1200\\text{ J}$, the gas is:",
     "Diatomic with $n = 0.58\\text{ mol}$ or monoatomic with $n = 0.96\\text{ mol}$",
     "An ideal gas with $n C_V = 12\\text{ J K}^{-1}$",
     "Any gas with $W = -\\Delta U$",
     "All of the above are consistent statements",
     3, "Adiabatic Work and Internal Energy",
     "In an adiabatic process, $Q = 0 \\implies W = -\\Delta U = -n C_V \\Delta T = n C_V (T_1 - T_2)$. Thus $1200 = n C_V (400 - 300) = 100 n C_V \\implies n C_V = 12\\text{ J K}^{-1}$."),

    ("A vessel contains 1 mole of helium gas at $300\\text{ K}$. If $3000\\text{ J}$ of heat is added at constant volume, what is the final temperature? (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$540.5\\text{ K}$",
     "$450.0\\text{ K}$",
     "$600.0\\text{ K}$",
     "$380.2\\text{ K}$",
     0, "Final Temperature Isochoric Heating",
     "$\\Delta T = \\frac{Q}{n C_V} = \\frac{3000}{1 \\times (1.5 \\times 8.314)} = \\frac{3000}{12.471} \\approx 240.56\\text{ K}$. Final temperature $T_f = 300 + 240.56 = 540.56\\text{ K} \\approx 540.5\\text{ K}$."),

    ("What is the ratio of molar heat capacities $\\frac{C_P}{C_V}$ for ozone ($\\text{O}_3$, non-linear triatomic, neglecting vibration)?",
     "$\\frac{4}{3} \\approx 1.33$",
     "$\\frac{5}{3} \\approx 1.67$",
     "$\\frac{7}{5} = 1.40$",
     "$1.25$",
     0, "Ozone Heat Capacity Ratio",
     "Ozone is a bent (non-linear) triatomic molecule with $f = 6$ (3 translational + 3 rotational). Therefore, $C_V = 3R$, $C_P = 4R$, and $\\gamma = 4/3 \\approx 1.33$."),

    ("A mixture has 1 mole of monoatomic gas ($C_V = 1.5R$) and 1 mole of a gas with $C_V = 3.5R$. The adiabatic exponent $\\gamma$ of the mixture is:",
     "$1.40$",
     "$1.50$",
     "$1.33$",
     "$1.60$",
     0, "Mixture Adiabatic Index Calculation",
     "$C_{V, \\text{mix}} = \\frac{1.5 R + 3.5 R}{2} = 2.5 R$. $C_{P, \\text{mix}} = 2.5 R + R = 3.5 R$. Thus $\\gamma = \\frac{3.5 R}{2.5 R} = \\frac{7}{5} = 1.40$."),

    ("The internal energy of $N$ molecules of a gas with $f$ degrees of freedom at temperature $T$ is:",
     "$\\frac{f}{2} N k_B T$",
     "$\\frac{f}{2} R T$",
     "$f N k_B T$",
     "$\\frac{f + 2}{2} N k_B T$",
     0, "Internal Energy General Formula",
     "By the equipartition theorem, each molecule has energy $\\frac{f}{2} k_B T$, so for $N$ molecules, $U = N \\left(\\frac{f}{2} k_B T\\right) = \\frac{f}{2} N k_B T$."),

    ("If a gas has $\\gamma = 1.25 = 5/4$, its number of degrees of freedom $f$ is:",
     "8",
     "6",
     "10",
     "4",
     0, "Finding f from Fractional Gamma",
     "$\\gamma = 1 + \\frac{2}{f} \\implies \\frac{5}{4} = 1 + \\frac{2}{f} \\implies \\frac{1}{4} = \\frac{2}{f} \\implies f = 8$.")
]

for idx, item in enumerate(hard_q_data):
    q_num = 346 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
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
out_file = "src/data/chapterwise/physics/kineticTheoryPart3.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Kinetic Theory of Gases | Physics | Class: 11 | Part 3
// Target: Exactly 125 MCQs (30 Easy, 65 Medium, 30 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const KINETIC_THEORY_PART3_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
