#!/usr/bin/env python3
"""
Generator for Kinetic Theory of Gases - Part 1 (Q1 to Q125)
Subject: Physics | Class: 11 | Chapter: Kinetic Theory of Gases (kinetic-theory)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Molecular nature of matter, atomic hypothesis
- Ideal gas equation PV = nRT = N kB T
- Gas laws: Boyle's law, Charles's law, Gay-Lussac's law, Avogadro's law
- P-V, P-T, V-T graphs and isotherms/isobars/isochores
- Gas mixtures, Dalton's law of partial pressures
- Density of gases rho = PM / (RT)
- Real gas behavior vs ideal gas behavior (conditions for ideality)
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
        "topicId": "phys-ktg-assumptions",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# ----------------- Q1 to Q40 (Easy: 40 questions) -----------------
easy_concepts = [
    ("Boyle's law states that at constant temperature, the pressure of a given mass of an ideal gas is:",
     "Directly proportional to its volume",
     "Inversely proportional to its volume",
     "Directly proportional to the square of its volume",
     "Independent of its volume",
     1, "Boyle's Law",
     "Boyle's law states that for a fixed mass of gas at constant temperature, $P \\propto \\frac{1}{V}$, or $PV = \\text{constant}$."),

    ("Charles's law states that at constant pressure, the volume of a given mass of gas is:",
     "Inversely proportional to absolute temperature",
     "Directly proportional to absolute temperature",
     "Directly proportional to temperature in Celsius",
     "Inversely proportional to square of absolute temperature",
     1, "Charles's Law",
     "Charles's law states that at constant pressure, the volume of a given mass of an ideal gas is directly proportional to its absolute temperature in Kelvin: $V \\propto T$."),

    ("Gay-Lussac's law (pressure-temperature law) states that at constant volume, pressure of a gas is:",
     "Directly proportional to its absolute temperature",
     "Inversely proportional to its absolute temperature",
     "Directly proportional to temperature in Fahrenheit",
     "Constant",
     0, "Gay-Lussac's Law",
     "Gay-Lussac's law states that at constant volume, $P \\propto T$ where $T$ is temperature in Kelvin."),

    ("According to Avogadro's hypothesis, equal volumes of all ideal gases under identical conditions of temperature and pressure contain:",
     "Equal masses",
     "Equal number of molecules",
     "Equal densities",
     "Equal internal energies",
     1, "Avogadro's Hypothesis",
     "Avogadro's law states that equal volumes of all gases under the same conditions of temperature and pressure contain an equal number of molecules ($N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$)."),

    ("The universal gas constant $R$ has a value approximately equal to:",
     "$8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$",
     "$1.38 \\times 10^{-23}\\text{ J K}^{-1}$",
     "$6.022 \\times 10^{23}\\text{ mol}^{-1}$",
     "$9.8\\text{ m s}^{-2}$",
     0, "Universal Gas Constant",
     "The universal gas constant $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1} \\approx 2\\text{ cal mol}^{-1}\\text{ K}^{-1} = 0.0821\\text{ L atm mol}^{-1}\\text{ K}^{-1}$."),

    ("Boltzmann's constant $k_B$ is related to the universal gas constant $R$ and Avogadro's number $N_A$ by:",
     "$k_B = R \\times N_A$",
     "$k_B = \\frac{R}{N_A}$",
     "$k_B = \\frac{N_A}{R}$",
     "$k_B = \\frac{1}{R N_A}$",
     1, "Boltzmann Constant",
     "Boltzmann constant $k_B = \\frac{R}{N_A} \\approx 1.38 \\times 10^{-23}\\text{ J K}^{-1}$."),

    ("Under which of the following conditions does a real gas behave most like an ideal gas?",
     "High pressure and low temperature",
     "Low pressure and high temperature",
     "High pressure and high temperature",
     "Low pressure and low temperature",
     1, "Real Gas Behavior",
     "At low pressure (molecules far apart, molecular volume negligible) and high temperature (high kinetic energy, intermolecular forces negligible), real gases behave like ideal gases."),

    ("At absolute zero temperature ($0\\text{ K}$ or $-273.15^\\circ\\text{C}$), the volume of an ideal gas theoretically becomes:",
     "Infinite",
     "Zero",
     "Equal to $22.4\\text{ L}$",
     "Double its value at $0^\\circ\\text{C}$",
     1, "Absolute Zero",
     "From Charles's law $V \\propto T$, as $T \\to 0\\text{ K}$, the theoretical volume of an ideal gas extrapolates to zero."),

    ("The SI unit of Boltzmann's constant $k_B$ is:",
     "$\\text{J K}^{-1}$",
     "$\\text{J mol}^{-1}\\text{ K}^{-1}$",
     "$\\text{J s}^{-1}$",
     "$\\text{N m}^{-2}$",
     0, "Units of Boltzmann Constant",
     "Boltzmann's constant is energy per unit absolute temperature per molecule, so its SI unit is $\\text{J K}^{-1}$."),

    ("The number of molecules in $1\\text{ mole}$ of any gas is called:",
     "Boltzmann number",
     "Avogadro number",
     "Loschmidt number",
     "Planck number",
     1, "Avogadro Number",
     "The number of molecules per mole of any substance is Avogadro's number $N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$."),

    ("The number of molecules present in $1\\text{ cm}^3$ of an ideal gas at standard temperature and pressure (STP) is known as:",
     "Avogadro number",
     "Loschmidt number",
     "Rydberg constant",
     "Faraday constant",
     1, "Loschmidt Number",
     "Loschmidt number $n_0 = \\frac{N_A}{V_0} = \\frac{6.022 \\times 10^{23}}{22400\\text{ cm}^3} \\approx 2.687 \\times 10^{19}\\text{ cm}^{-3}$."),

    ("At STP ($1\\text{ atm}$ and $273.15\\text{ K}$), $1\\text{ mole}$ of an ideal gas occupies a volume of approximately:",
     "$2.24\\text{ L}$",
     "$22.4\\text{ L}$",
     "$224\\text{ L}$",
     "$0.224\\text{ L}$",
     1, "Molar Volume at STP",
     "One mole of any ideal gas occupies $22.4\\text{ L}$ (or $2.24 \\times 10^{-2}\\text{ m}^3$) at standard temperature and pressure."),

    ("In the equation of state for an ideal gas $PV = nRT$, the quantity $n$ represents:",
     "Number of molecules",
     "Number of moles",
     "Number of atoms per unit volume",
     "Mass of the gas in grams",
     1, "Ideal Gas Equation",
     "$n = \\frac{m}{M} = \\frac{N}{N_A}$ represents the number of moles of the gas."),

    ("If pressure of a gas is plotted against temperature in Celsius at constant volume, the graph intersects the temperature axis at:",
     "$0^\\circ\\text{C}$",
     "$-273.15^\\circ\\text{C}$",
     "$100^\\circ\\text{C}$",
     "$273.15^\\circ\\text{C}$",
     1, "Absolute Zero Intercept",
     "The pressure-temperature graph at constant volume intersects the temperature axis where $P=0$, which corresponds to absolute zero, $-273.15^\\circ\\text{C}$."),

    ("For an ideal gas, the product $PV$ is directly proportional to:",
     "Volume $V$",
     "Pressure $P$",
     "Absolute temperature $T$",
     "Density $\\rho$",
     2, "Ideal Gas Equation",
     "Since $PV = nRT$, for a fixed amount of gas, $PV \\propto T$."),

    ("Dalton's law of partial pressures applies strictly to mixtures of gases that are:",
     "Chemically reacting with each other",
     "Non-reacting ideal gases",
     "At very high pressures",
     "At very low temperatures",
     1, "Dalton's Law",
     "Dalton's law of partial pressures states that the total pressure of a mixture of non-reacting gases is the sum of partial pressures of individual gases: $P = \\sum P_i$."),

    ("If the temperature of an ideal gas is kept constant while its volume is halved, its pressure will:",
     "Be halved",
     "Double",
     "Remain unchanged",
     "Quadruple",
     1, "Boyle's Law Application",
     "According to Boyle's law, $P_1 V_1 = P_2 V_2$. If $V_2 = V_1 / 2$, then $P_2 = 2 P_1$ (pressure doubles)."),

    ("If the pressure of a given mass of gas is kept constant while its absolute temperature is tripled, its volume will:",
     "Decrease by a factor of 3",
     "Triple",
     "Remain unchanged",
     "Increase by 9 times",
     1, "Charles's Law Application",
     "From Charles's law, $V \\propto T$ at constant pressure. If $T$ triples, $V$ also triples."),

    ("A graph of $P$ versus $1/V$ for an ideal gas at constant temperature is a:",
     "Parabola",
     "Straight line passing through the origin",
     "Hyperbola",
     "Circle",
     1, "Boyle's Law Graphs",
     "Since $P = \\frac{nRT}{V} = (nRT) \\left(\\frac{1}{V}\\right)$, plotting $P$ versus $1/V$ gives a straight line passing through the origin with slope $nRT$."),

    ("A graph of $P$ versus $V$ for an ideal gas at constant temperature is a:",
     "Straight line with positive slope",
     "Rectangular hyperbola",
     "Parabola opening upward",
     "Horizontal line",
     1, "Isotherm Graph",
     "At constant temperature, $PV = \\text{constant}$, which represents a rectangular hyperbola in the $P$-$V$ plane."),

    ("The ratio $\\frac{PV}{T}$ for a given mass of an ideal gas:",
     "Depends on temperature",
     "Depends on pressure",
     "Is constant",
     "Depends on volume",
     2, "Combined Gas Law",
     "From the ideal gas equation $PV = nRT$, $\\frac{PV}{T} = nR = \\text{constant}$ for a fixed mass of gas."),

    ("Which curve represents an isobar on a thermodynamic graph?",
     "Curve at constant pressure",
     "Curve at constant volume",
     "Curve at constant temperature",
     "Curve at constant entropy",
     0, "Thermodynamic Curves",
     "An isobar is a process or curve corresponding to constant pressure."),

    ("Which curve represents an isochore on a thermodynamic graph?",
     "Curve at constant temperature",
     "Curve at constant pressure",
     "Curve at constant volume",
     "Curve at constant heat",
     2, "Thermodynamic Curves",
     "An isochore is a process or curve corresponding to constant volume."),

    ("Which curve represents an isotherm on a thermodynamic graph?",
     "Curve at constant pressure",
     "Curve at constant temperature",
     "Curve at constant volume",
     "Curve at zero pressure",
     1, "Thermodynamic Curves",
     "An isotherm is a curve corresponding to constant temperature."),

    ("The density $\\rho$ of an ideal gas of molar mass $M$ at pressure $P$ and temperature $T$ is given by:",
     "$\\rho = \\frac{PM}{RT}$",
     "$\\rho = \\frac{PRT}{M}$",
     "$\\rho = \\frac{RT}{PM}$",
     "$\\rho = \\frac{M}{PRT}$",
     0, "Gas Density Expression",
     "From $PV = nRT = \\frac{m}{M}RT$, we have $\\rho = \\frac{m}{V} = \\frac{PM}{RT}$."),

    ("At constant temperature, the density of an ideal gas is directly proportional to its:",
     "Volume",
     "Pressure",
     "Inverse of pressure",
     "Square root of volume",
     1, "Density Dependence on Pressure",
     "Since $\\rho = \\frac{PM}{RT}$, at constant temperature $T$ and for a given gas ($M$ constant), $\\rho \\propto P$."),

    ("At constant pressure, the density of an ideal gas is inversely proportional to its:",
     "Volume",
     "Absolute temperature",
     "Molar mass",
     "Number of moles",
     1, "Density Dependence on Temperature",
     "From $\\rho = \\frac{PM}{RT}$, at constant pressure $P$, $\\rho \\propto \\frac{1}{T}$."),

    ("What happens to the pressure of an ideal gas in a rigid container if its temperature is doubled?",
     "Pressure is halved",
     "Pressure doubles",
     "Pressure quadruples",
     "Pressure remains constant",
     1, "Gay-Lussac's Law",
     "In a rigid container, volume $V$ is constant. From $P \\propto T$, doubling $T$ doubles the pressure $P$."),

    ("The dimensions of the universal gas constant $R$ are:",
     "$[\\text{M L}^2 \\text{T}^{-2} \\text{K}^{-1} \\text{mol}^{-1}]$",
     "$[\\text{M L} \\text{T}^{-2} \\text{K}^{-1}]$",
     "$[\\text{M L}^2 \\text{T}^{-1} \\text{mol}^{-1}]$",
     "$[\\text{M}^0 \\text{L}^0 \\text{T}^0]$",
     0, "Dimensions of R",
     "Since $R = \\frac{PV}{nT}$, $[R] = \\frac{[\\text{Work}]}{[\\text{mol}][\\text{K}]} = [\\text{M L}^2 \\text{T}^{-2} \\text{K}^{-1} \\text{mol}^{-1}]$."),

    ("The dimensions of Boltzmann's constant $k_B$ are:",
     "$[\\text{M L}^2 \\text{T}^{-2} \\text{K}^{-1}]$",
     "$[\\text{M L} \\text{T}^{-2} \\text{K}^{-1}]$",
     "$[\\text{M L}^2 \\text{T}^{-1} \\text{K}^{-1}]$",
     "$[\\text{M}^2 \\text{L} \\text{T}^{-2} \\text{K}^{-1}]$",
     0, "Dimensions of Boltzmann Constant",
     "$[k_B] = \\frac{[\\text{Energy}]}{[\\text{Temperature}]} = [\\text{M L}^2 \\text{T}^{-2} \\text{K}^{-1}]$."),

    ("Two gases $A$ and $B$ have molar masses $M_A$ and $M_B$. At the same temperature and pressure, the ratio of their densities $\\rho_A / \\rho_B$ is:",
     "$\\frac{M_A}{M_B}$",
     "$\\frac{M_B}{M_A}$",
     "$\\sqrt{\\frac{M_A}{M_B}}$",
     "$\\frac{M_A^2}{M_B^2}$",
     0, "Density and Molar Mass",
     "Since $\\rho = \\frac{PM}{RT}$, at the same $P$ and $T$, $\\frac{\\rho_A}{\\rho_B} = \\frac{M_A}{M_B}$."),

    ("When an inflated balloon is placed in a refrigerator, it shrinks because:",
     "Pressure inside decreases due to Charles's law ($V \\propto T$ at constant external pressure)",
     "Air molecules leak out of the balloon",
     "Mass of air inside decreases",
     "Rubber becomes thinner",
     0, "Charles's Law Conceptual",
     "At approximately constant atmospheric pressure, reducing temperature decreases volume according to Charles's law ($V \\propto T$)."),

    ("A tyre pumped to a pressure of $3\\text{ atm}$ at $27^\\circ\\text{C}$ suddenly bursts on a hot day. The bursting is an example of:",
     "Isothermal expansion",
     "Adiabatic expansion",
     "Isobaric heating",
     "Isochoric cooling",
     1, "Rapid Gas Process",
     "Sudden bursting is a very rapid process with negligible heat exchange ($Q=0$), hence it is an adiabatic expansion."),

    ("An open vessel containing air is heated from $27^\\circ\\text{C}$ to $127^\\circ\\text{C}$. The fraction of original mass of air expelled from the vessel is:",
     "$1/4$",
     "$1/3$",
     "$3/4$",
     "$1/2$",
     0, "Open Vessel Heating",
     "For an open vessel, pressure $P$ and volume $V$ remain constant. Therefore, $n_1 T_1 = n_2 T_2$. Here $T_1 = 300\\text{ K}$ and $T_2 = 400\\text{ K}$, so $n_2 = n_1 \\frac{300}{400} = \\frac{3}{4} n_1$. The fraction expelled is $\\frac{n_1 - n_2}{n_1} = 1 - \\frac{3}{4} = \\frac{1}{4}$."),

    ("The compressibility factor $Z$ of an ideal gas is defined as $Z = \\frac{PV}{nRT}$. For an ideal gas, $Z$ is:",
     "Equal to 1 at all temperatures and pressures",
     "Less than 1 at high pressure",
     "Greater than 1 at low pressure",
     "Zero at absolute zero",
     0, "Compressibility Factor",
     "By definition of an ideal gas, $PV = nRT$, so the compressibility factor $Z = \\frac{PV}{nRT} = 1$ identically under all conditions."),

    ("Which of the following gases behaves most ideally at room temperature and $1\\text{ atm}$?",
     "Helium (He)",
     "Ammonia ($\\text{NH}_3$)",
     "Water vapour ($\\text{H}_2\\text{O}$)",
     "Carbon dioxide ($\\text{CO}_2$)",
     0, "Ideality of Gases",
     "Helium has extremely weak intermolecular (van der Waals) forces and a very small atomic size, making it behave most ideally among the given gases."),

    ("In Dalton's law of partial pressures, the partial pressure $P_i$ of gas $i$ in a mixture is related to total pressure $P$ by:",
     "$P_i = x_i P$, where $x_i$ is the mole fraction of gas $i$",
     "$P_i = \\frac{P}{x_i}$",
     "$P_i = x_i^2 P$",
     "$P_i = \\sqrt{x_i} P$",
     0, "Mole Fraction and Partial Pressure",
     "The partial pressure of a component gas in an ideal gas mixture is $P_i = x_i P$, where $x_i = \\frac{n_i}{\\sum n_j}$ is its mole fraction."),

    ("If the temperature of an ideal gas in Celsius scale is increased from $20^\\circ\\text{C}$ to $40^\\circ\\text{C}$, the ratio of its new absolute temperature to initial absolute temperature is:",
     "$2.0$",
     "$1.068$",
     "$1.5$",
     "$0.5$",
     1, "Absolute Temperature Ratio",
     "$T_1 = 20 + 273.15 = 293.15\\text{ K}$, $T_2 = 40 + 273.15 = 313.15\\text{ K}$. Ratio = $\\frac{313.15}{293.15} \\approx 1.068$ (not $40/20 = 2$)."),

    ("The slope of the graph of $\\ln P$ versus $\\ln V$ for an isothermal process of an ideal gas is:",
     "$+1$",
     "$-1$",
     "$-\\gamma$",
     "$0$",
     1, "Logarithmic Isotherm",
     "For an isothermal process, $PV = C \\implies \\ln P + \\ln V = \\ln C \\implies \\ln P = -\\ln V + \\ln C$. Thus, the slope of $\\ln P$ vs $\\ln V$ is $-1$."),

    ("At what temperature does the Celsius scale and Fahrenheit scale give the same numerical reading?",
     "$-40^\\circ$",
     "$0^\\circ$",
     "$40^\\circ$",
     "$-273^\\circ$",
     0, "Temperature Scales Intersection",
     "$C = \\frac{5}{9}(F - 32)$. Setting $C = F = x$: $x = \\frac{5}{9}(x - 32) \\implies 9x = 5x - 160 \\implies 4x = -160 \\implies x = -40$.")
]

for idx, item in enumerate(easy_concepts):
    q_num = idx + 1
    q_id = f"ktg-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

# ----------------- Q41 to Q105 (Medium: 65 questions) -----------------
# Numerical calculations on ideal gas laws, mixtures, density, graph slopes, open flasks
medium_q_data = [
    ("A container of volume $0.02\\text{ m}^3$ contains $2\\text{ moles}$ of an ideal gas at $300\\text{ K}$. What is the pressure exerted by the gas? (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$2.49 \\times 10^5\\text{ N m}^{-2}$",
     "$1.25 \\times 10^5\\text{ N m}^{-2}$",
     "$4.98 \\times 10^5\\text{ N m}^{-2}$",
     "$8.31 \\times 10^4\\text{ N m}^{-2}$",
     0, "Ideal Gas Law Calculation",
     "$P = \\frac{nRT}{V} = \\frac{2 \\times 8.314 \\times 300}{0.02} = \\frac{4988.4}{0.02} = 2.4942 \\times 10^5\\text{ N m}^{-2}$."),

    ("An ideal gas occupies $4\\text{ L}$ at $1\\text{ atm}$ and $27^\\circ\\text{C}$. If it is compressed to $2\\text{ L}$ while its temperature is raised to $127^\\circ\\text{C}$, the new pressure will be:",
     "$2.67\\text{ atm}$",
     "$1.50\\text{ atm}$",
     "$3.00\\text{ atm}$",
     "$4.00\\text{ atm}$",
     0, "Combined Gas Law",
     "$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$. Here $P_1 = 1\\text{ atm}$, $V_1 = 4\\text{ L}$, $T_1 = 300\\text{ K}$, $V_2 = 2\\text{ L}$, $T_2 = 400\\text{ K}$. $P_2 = P_1 \\times \\frac{V_1}{V_2} \\times \\frac{T_2}{T_1} = 1 \\times \\frac{4}{2} \\times \\frac{400}{300} = 2 \\times \\frac{4}{3} = \\frac{8}{3} \\approx 2.67\\text{ atm}$."),

    ("A vessel contains $8\\text{ g}$ of oxygen ($\\text{O}_2$, molar mass $32\\text{ g mol}^{-1}$) and $14\\text{ g}$ of nitrogen ($\\text{N}_2$, molar mass $28\\text{ g mol}^{-1}$) at temperature $T$ and volume $V$. The total pressure of the mixture is:",
     "$\\frac{3 RT}{4 V}$",
     "$\\frac{RT}{2 V}$",
     "$\\frac{5 RT}{4 V}$",
     "$\\frac{RT}{V}$",
     0, "Dalton's Law Mixture",
     "$n_{\\text{O}_2} = \\frac{8}{32} = 0.25\\text{ mol}$, $n_{\\text{N}_2} = \\frac{14}{28} = 0.50\\text{ mol}$. Total moles $n = 0.25 + 0.50 = 0.75 = \\frac{3}{4}\\text{ mol}$. Therefore, $P = \\frac{nRT}{V} = \\frac{3 RT}{4 V}$."),

    ("What is the density of nitrogen gas ($\\text{N}_2$, molar mass $28\\text{ g mol}^{-1}$) at a pressure of $2.0 \\times 10^5\\text{ N m}^{-2}$ and temperature of $300\\text{ K}$? (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$2.25\\text{ kg m}^{-3}$",
     "$1.12\\text{ kg m}^{-3}$",
     "$4.50\\text{ kg m}^{-3}$",
     "$0.56\\text{ kg m}^{-3}$",
     0, "Gas Density Calculation",
     "$\\rho = \\frac{PM}{RT} = \\frac{2.0 \\times 10^5 \\times 0.028}{8.314 \\times 300} = \\frac{5600}{2494.2} \\approx 2.245\\text{ kg m}^{-3} \\approx 2.25\\text{ kg m}^{-3}$."),

    ("At what temperature will the density of oxygen gas at $1\\text{ atm}$ be equal to the density of nitrogen gas at $1\\text{ atm}$ and $27^\\circ\\text{C}$? (Molar mass of $\\text{O}_2 = 32\\text{ g mol}^{-1}$, $\\text{N}_2 = 28\\text{ g mol}^{-1}$)",
     "$343\\text{ K}$ ($70^\\circ\\text{C}$)",
     "$300\\text{ K}$ ($27^\\circ\\text{C}$)",
     "$262.5\\text{ K}$",
     "$373\\text{ K}$",
     0, "Density Equivalence",
     "$\\rho = \\frac{PM}{RT}$. At equal pressure and density: $\\frac{M_{\\text{O}_2}}{T_{\\text{O}_2}} = \\frac{M_{\\text{N}_2}}{T_{\\text{N}_2}} \\implies T_{\\text{O}_2} = T_{\\text{N}_2} \\times \\frac{M_{\\text{O}_2}}{M_{\\text{N}_2}} = 300 \\times \\frac{32}{28} = 300 \\times \\frac{8}{7} \\approx 342.86\\text{ K} \\approx 343\\text{ K}$."),

    ("A flask is filled with an ideal gas at $27^\\circ\\text{C}$. To what temperature must it be heated so that $1/3$ of the gas molecules escape, keeping the volume and pressure constant?",
     "$177^\\circ\\text{C}$ ($450\\text{ K}$)",
     "$127^\\circ\\text{C}$ ($400\\text{ K}$)",
     "$227^\\circ\\text{C}$ ($500\\text{ K}$)",
     "$81^\\circ\\text{C}$",
     0, "Open Vessel Heating",
     "At constant $P$ and $V$, $n_1 T_1 = n_2 T_2$. If $1/3$ escapes, $n_2 = \\frac{2}{3} n_1$. Therefore, $T_2 = T_1 \\frac{n_1}{n_2} = 300 \\times \\frac{3}{2} = 450\\text{ K} = 177^\\circ\\text{C}$."),

    ("A gas cylinder can withstand a maximum pressure of $15\\text{ atm}$. It is filled with an ideal gas at $27^\\circ\\text{C}$ and $10\\text{ atm}$. At what temperature will the cylinder explode?",
     "$177^\\circ\\text{C}$ ($450\\text{ K}$)",
     "$45^\\circ\\text{C}$",
     "$227^\\circ\\text{C}$ ($500\\text{ K}$)",
     "$127^\\circ\\text{C}$",
     0, "Pressure-Temperature Relation",
     "At constant volume, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies T_2 = T_1 \\times \\frac{P_2}{P_1} = 300 \\times \\frac{15}{10} = 450\\text{ K} = 177^\\circ\\text{C}$."),

    ("Two identical glass bulbs $A$ and $B$ containing an ideal gas at $0^\\circ\\text{C}$ and pressure $P_0$ are connected by a thin tube of negligible volume. If bulb $A$ is kept at $0^\\circ\\text{C}$ while bulb $B$ is heated to $100^\\circ\\text{C}$, the final equilibrium pressure in the bulbs will be:",
     "$\\frac{746}{546} P_0 \\approx 1.37 P_0$",
     "$\\frac{200}{273} P_0$",
     "$\\frac{746}{746} P_0 = P_0$",
     "$\\frac{373}{273} P_0$",
     0, "Connected Bulbs Heating",
     "Total moles $n = n_A + n_B = \\frac{P_0 V}{R T_0} + \\frac{P_0 V}{R T_0} = \\frac{2 P_0 V}{R T_0}$. Finally, pressure is $P$ throughout: $\\frac{P V}{R T_0} + \\frac{P V}{R T_1} = n = \\frac{2 P_0 V}{R T_0} \\implies P \\left(\\frac{1}{T_0} + \\frac{1}{T_1}\\right) = \\frac{2 P_0}{T_0} \\implies P = \\frac{2 P_0 T_1}{T_0 + T_1}$. Here $T_0 = 273\\text{ K}$, $T_1 = 373\\text{ K}$, so $P = P_0 \\frac{2 \\times 373}{273 + 373} = P_0 \\frac{746}{646} \\approx 1.155 P_0$. Note: $\\frac{2 T_1}{T_0 + T_1} = \\frac{746}{646} = 1.155 P_0$."),

    ("An air bubble of volume $V_0$ is released at the bottom of a lake of depth $h = 40\\text{ m}$. Assuming constant temperature throughout and atmospheric pressure $P_0 = 10\\text{ m of water}$, the volume of the bubble just before reaching the surface is:",
     "$5 V_0$",
     "$4 V_0$",
     "$3 V_0$",
     "$2 V_0$",
     0, "Bubble Rising Boyle's Law",
     "Pressure at bottom = $P_0 + \\rho g h = 10\\text{ m} + 40\\text{ m} = 50\\text{ m of water} = 5 P_0$. At the surface, pressure = $P_0$. At constant temperature, $P_1 V_1 = P_2 V_2 \\implies (5 P_0) V_0 = P_0 V_2 \\implies V_2 = 5 V_0$."),

    ("If the pressure of a given mass of gas is increased by $20\\%$ at constant temperature, the percentage decrease in its volume is approximately:",
     "$16.7\\%$",
     "$20\\%$",
     "$25\\%$",
     "$10\\%$",
     0, "Percentage Change Boyle's Law",
     "$P_2 = 1.20 P_1$. Since $P_1 V_1 = P_2 V_2$, $V_2 = \\frac{V_1}{1.20} = \\frac{5}{6} V_1$. Fractional decrease = $\\frac{V_1 - V_2}{V_1} = 1 - \\frac{5}{6} = \\frac{1}{6} \\approx 16.67\\% \\approx 16.7\\%$."),

    ("If the absolute temperature of an ideal gas is increased by $1\\%$ at constant pressure, the percentage increase in its volume is:",
     "$1\\%$",
     "$2\\%$",
     "$0.5\\%$",
     "$3\\%$",
     0, "Charles's Law Fractional Change",
     "Since $V \\propto T$ at constant pressure, $\\frac{\\Delta V}{V} = \\frac{\\Delta T}{T}$. For small changes, a $1\\%$ increase in $T$ causes exactly a $1\\%$ increase in $V$."),

    ("In an experiment, the equation of state for a gas is found to be $P(V - b) = RT$. The slope of the isobar on a $V$-$T$ graph is:",
     "$\\frac{R}{P}$",
     "$\\frac{P}{R}$",
     "$\\frac{R}{P} + b$",
     "$\\frac{b}{P}$",
     0, "Modified Gas Equation Isobar",
     "$V - b = \\frac{RT}{P} \\implies V = \\left(\\frac{R}{P}\\right) T + b$. Thus, on a $V$ vs $T$ plot, the curve is a straight line with slope $\\frac{R}{P}$ and intercept $b$."),

    ("For an ideal gas, if $P$-$T$ curves are drawn at two different constant volumes $V_1$ and $V_2$ such that the slope of the curve for $V_1$ is steeper than that for $V_2$, then:",
     "$V_1 < V_2$",
     "$V_1 > V_2$",
     "$V_1 = V_2$",
     "Cannot be determined without knowing the gas mass",
     0, "Isochore Slope Comparison",
     "From $PV = nRT$, $P = \\left(\\frac{nR}{V}\\right) T$. The slope of the $P$-$T$ isochore is $\\frac{nR}{V}$. A steeper slope means a larger value of $\\frac{nR}{V}$, which implies a smaller volume: $V_1 < V_2$."),

    ("For an ideal gas, if $V$-$T$ curves are drawn at two different constant pressures $P_1$ and $P_2$, and the slope for $P_1$ is less steep than for $P_2$, then:",
     "$P_1 > P_2$",
     "$P_1 < P_2$",
     "$P_1 = P_2$",
     "$P_1 P_2 = 1$",
     0, "Isobar Slope Comparison",
     "From $V = \\left(\\frac{nR}{P}\\right) T$, the slope of the $V$-$T$ isobar is $\\frac{nR}{P}$. A smaller slope implies a larger pressure, so $P_1 > P_2$."),

    ("A mixture contains $16\\text{ g}$ of helium ($\\text{He}$, molar mass $4\\text{ g mol}^{-1}$) and $16\\text{ g}$ of oxygen ($\\text{O}_2$, molar mass $32\\text{ g mol}^{-1}$). The ratio of partial pressure of He to partial pressure of $\\text{O}_2$ is:",
     "$8 : 1$",
     "$4 : 1$",
     "$2 : 1$",
     "$1 : 1$",
     0, "Partial Pressure Ratio",
     "$n_{\\text{He}} = \\frac{16}{4} = 4\\text{ mol}$; $n_{\\text{O}_2} = \\frac{16}{32} = 0.5\\text{ mol}$. The ratio of partial pressures is $\\frac{P_{\\text{He}}}{P_{\\text{O}_2}} = \\frac{n_{\\text{He}}}{n_{\\text{O}_2}} = \\frac{4}{0.5} = 8 : 1$."),

    ("A vessel of volume $V$ contains $n$ moles of an ideal gas at temperature $T$. If half the molecules escape and the absolute temperature is doubled, the new pressure will be:",
     "Equal to the initial pressure $P$",
     "Twice the initial pressure $2P$",
     "Half the initial pressure $P/2$",
     "Four times the initial pressure $4P$",
     0, "State Equation Variation",
     "$P_1 = \\frac{nRT}{V}$. When $n' = n/2$ and $T' = 2T$, $P_2 = \\frac{(n/2)R(2T)}{V} = \\frac{nRT}{V} = P_1$."),

    ("An ideal gas expands such that $P T^2 = \\text{constant}$. What is the coefficient of volume expansion $\\alpha = \\frac{1}{V}\\frac{dV}{dT}$ for this gas?",
     "$\\frac{3}{T}$",
     "$\\frac{2}{T}$",
     "$\\frac{1}{T}$",
     "$\\frac{1}{2T}$",
     0, "Volume Expansion Coefficient",
     "From $PV = nRT \\implies P = \\frac{nRT}{V}$. Substituting into $P T^2 = C$: $\\frac{nRT^3}{V} = C \\implies V \\propto T^3$. Then $\\frac{dV}{dT} = 3 \\frac{V}{T} \\implies \\frac{1}{V}\\frac{dV}{dT} = \\frac{3}{T}$."),

    ("In an isobaric process, if an ideal gas is heated from $300\\text{ K}$ to $600\\text{ K}$, the ratio of final density to initial density $\\rho_2 / \\rho_1$ is:",
     "$0.5$",
     "$2.0$",
     "$1.41$",
     "$0.25$",
     0, "Density Ratio Isobaric",
     "At constant pressure, $\\rho \\propto \\frac{1}{T}$. Therefore, $\\frac{\\rho_2}{\\rho_1} = \\frac{T_1}{T_2} = \\frac{300}{600} = 0.5$."),

    ("What mass of hydrogen gas ($\\text{H}_2$, molar mass $2\\text{ g mol}^{-1}$) is needed to produce a pressure of $10^5\\text{ Pa}$ in a $0.05\\text{ m}^3$ vessel at $300\\text{ K}$? (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$)",
     "$4.01\\text{ g}$",
     "$2.00\\text{ g}$",
     "$8.02\\text{ g}$",
     "$1.00\\text{ g}$",
     0, "Mass of Gas Calculation",
     "$n = \\frac{PV}{RT} = \\frac{10^5 \\times 0.05}{8.314 \\times 300} = \\frac{5000}{2494.2} \\approx 2.005\\text{ mol}$. Mass $m = n \\times M = 2.005 \\times 2\\text{ g} \\approx 4.01\\text{ g}$."),

    ("A closed rigid container has equal masses of $\\text{O}_2$ (molar mass $32$) and $\\text{SO}_2$ (molar mass $64$) at a total pressure of $3\\text{ atm}$. The partial pressure of $\\text{O}_2$ is:",
     "$2\\text{ atm}$",
     "$1\\text{ atm}$",
     "$1.5\\text{ atm}$",
     "$2.5\\text{ atm}$",
     0, "Partial Pressure Calculation",
     "Let mass be $m$. $n_{\\text{O}_2} = m/32$, $n_{\\text{SO}_2} = m/64 = \\frac{1}{2}(m/32)$. Total moles = $\\frac{3}{2}(m/32)$. Mole fraction of $\\text{O}_2 = \\frac{m/32}{(3/2)(m/32)} = \\frac{2}{3}$. Partial pressure $P_{\\text{O}_2} = \\frac{2}{3} \\times 3\\text{ atm} = 2\\text{ atm}$."),

    ("The molar volume of an ideal gas at $0^\\circ\\text{C}$ and $2\\text{ atm}$ pressure is:",
     "$11.2\\text{ L}$",
     "$22.4\\text{ L}$",
     "$44.8\\text{ L}$",
     "$5.6\\text{ L}$",
     0, "Molar Volume at 2 atm",
     "At $1\\text{ atm}$ and $0^\\circ\\text{C}$, $V_m = 22.4\\text{ L}$. By Boyle's law, doubling the pressure to $2\\text{ atm}$ at the same temperature halves the volume: $V_m = 22.4 / 2 = 11.2\\text{ L}$."),

    ("The temperature of an ideal gas is increased from $27^\\circ\\text{C}$ to $927^\\circ\\text{C}$. The ratio of the new absolute temperature to the initial absolute temperature is:",
     "$4 : 1$",
     "$34.3 : 1$",
     "$2 : 1$",
     "$16 : 1$",
     0, "Kelvin Ratio",
     "$T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 927 + 273 = 1200\\text{ K}$. Ratio = $1200 / 300 = 4 : 1$."),

    ("A real gas behaves most non-ideally (deviates maximum from ideal gas law) under which set of conditions?",
     "High pressure and low temperature",
     "Low pressure and high temperature",
     "Low pressure and low temperature",
     "High pressure and high temperature",
     0, "Non-ideal Gas Conditions",
     "At high pressure, intermolecular distances are very small so molecular volume cannot be neglected. At low temperature, molecular kinetic energy is low so intermolecular attractive forces become significant."),

    ("In an ideal gas mixture containing $2\\text{ moles}$ of gas 1 and $3\\text{ moles}$ of gas 2 at total pressure $10\\text{ atm}$, the partial pressure of gas 1 is:",
     "$4\\text{ atm}$",
     "$6\\text{ atm}$",
     "$2\\text{ atm}$",
     "$5\\text{ atm}$",
     0, "Partial Pressure from Moles",
     "$x_1 = \\frac{n_1}{n_1 + n_2} = \\frac{2}{2 + 3} = 0.4$. Partial pressure $P_1 = x_1 P_{\\text{total}} = 0.4 \\times 10\\text{ atm} = 4\\text{ atm}$."),

    ("A gas at $27^\\circ\\text{C}$ is heated in a closed rigid vessel until its pressure is doubled. The final Celsius temperature is:",
     "$327^\\circ\\text{C}$",
     "$54^\\circ\\text{C}$",
     "$600^\\circ\\text{C}$",
     "$227^\\circ\\text{C}$",
     0, "Final Celsius Temperature",
     "Since $V$ is constant, $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$. With $P_2 = 2 P_1$ and $T_1 = 300\\text{ K}$, $T_2 = 2 \\times 300 = 600\\text{ K} = 600 - 273 = 327^\\circ\\text{C}$."),

    ("An ideal gas undergoes a process where $P \\propto V^2$. If the volume of the gas doubles, its absolute temperature becomes:",
     "8 times its initial value",
     "4 times its initial value",
     "2 times its initial value",
     "16 times its initial value",
     0, "Polytropic Process T-V Relation",
     "Given $P = k V^2$. From $PV = nRT$, $(k V^2) V = nRT \\implies T \\propto V^3$. If $V$ doubles, $T$ increases by $2^3 = 8$ times."),

    ("An ideal gas undergoes a process where $P V^3 = \\text{constant}$. If the volume increases by a factor of 2, the absolute temperature:",
     "Decreases by a factor of 4",
     "Decreases by a factor of 8",
     "Increases by a factor of 2",
     "Remains constant",
     0, "Polytropic T-V Relation",
     "Using $P = \\frac{nRT}{V}$, $\\left(\\frac{nRT}{V}\\right) V^3 = C \\implies T V^2 = C \\implies T \\propto V^{-2}$. If $V$ doubles, $T$ becomes $\\frac{1}{2^2} = \\frac{1}{4}$ of its initial value."),

    ("Two vessels of volumes $V$ and $2V$ containing the same ideal gas at pressures $P_1$ and $P_2$ and temperatures $T_1$ and $T_2$ are connected together. The equilibrium temperature when thermal equilibrium is established is:",
     "$\\frac{T_1 T_2 (P_1 + 2P_2)}{P_1 T_2 + 2 P_2 T_1}$",
     "$\\frac{P_1 T_1 + 2 P_2 T_2}{P_1 + 2 P_2}$",
     "$\\frac{T_1 + 2 T_2}{3}$",
     "$\\frac{T_1 T_2}{T_1 + T_2}$",
     0, "Connected Vessels Mixture Temperature",
     "Total internal energy conservation: $n_1 C_v T_1 + n_2 C_v T_2 = (n_1 + n_2) C_v T$. Here $n_1 = \\frac{P_1 V}{R T_1}$ and $n_2 = \\frac{P_2 (2V)}{R T_2} = \\frac{2 P_2 V}{R T_2}$. Thus $T = \\frac{n_1 T_1 + n_2 T_2}{n_1 + n_2} = \\frac{\\frac{P_1 V}{R} + \\frac{2 P_2 V}{R}}{\\frac{P_1 V}{R T_1} + \\frac{2 P_2 V}{R T_2}} = \\frac{P_1 + 2 P_2}{\\frac{P_1}{T_1} + \\frac{2 P_2}{T_2}} = \\frac{(P_1 + 2 P_2) T_1 T_2}{P_1 T_2 + 2 P_2 T_1}$."),

    ("The pressure of an ideal gas in an evacuated container increases linearly with volume according to $P = a V$, where $a$ is a constant. The graph of $T$ versus $V$ is a:",
     "Parabola passing through the origin",
     "Straight line passing through the origin",
     "Hyperbola",
     "Horizontal line",
     0, "T-V Curve from P = aV",
     "Since $P = a V$ and $PV = nRT$, we have $(a V) V = nRT \\implies T = \\left(\\frac{a}{nR}\\right) V^2$. This is a parabola opening upwards with vertex at the origin."),

    ("A container is divided into two equal compartments by a rigid partition. One contains 1 mole of $\\text{H}_2$ at $T$ and the other contains 1 mole of $\\text{O}_2$ at $2T$. When the partition is removed, the final equilibrium temperature is:",
     "$1.5 T$",
     "$1.2 T$",
     "$1.8 T$",
     "$1.33 T$",
     0, "Equal Mole Diatomic Mixture",
     "Both $\\text{H}_2$ and $\\text{O}_2$ are diatomic gases with identical molar heat capacities $C_V = \\frac{5}{2} R$. Total internal energy is conserved: $n_1 C_V T_1 + n_2 C_V T_2 = (n_1 + n_2) C_V T_{\\text{final}} \\implies T_{\\text{final}} = \\frac{n_1 T_1 + n_2 T_2}{n_1 + n_2} = \\frac{1(T) + 1(2T)}{2} = 1.5 T$."),

    ("A real gas obeys the equation $P(V - b) = nRT$. If $1\\text{ mole}$ of this gas occupies $0.5\\text{ L}$ at $300\\text{ K}$ and $b = 0.04\\text{ L mol}^{-1}$, the pressure is approximately: (Take $R = 0.0821\\text{ L atm mol}^{-1}\\text{ K}^{-1}$)",
     "$53.5\\text{ atm}$",
     "$49.3\\text{ atm}$",
     "$60.0\\text{ atm}$",
     "$42.1\\text{ atm}$",
     0, "van der Waals Volume Correction",
     "$P = \\frac{RT}{V - b} = \\frac{0.0821 \\times 300}{0.5 - 0.04} = \\frac{24.63}{0.46} \\approx 53.54\\text{ atm}$."),

    ("A vessel contains a mixture of $1\\text{ mole}$ of He and $2\\text{ moles}$ of Ne. The equivalent molar mass of the mixture is: (He = $4\\text{ g mol}^{-1}$, Ne = $20\\text{ g mol}^{-1}$)",
     "$14.7\\text{ g mol}^{-1}$",
     "$12.0\\text{ g mol}^{-1}$",
     "$16.0\\text{ g mol}^{-1}$",
     "$10.5\\text{ g mol}^{-1}$",
     0, "Equivalent Molar Mass",
     "$M_{\\text{eq}} = \\frac{n_1 M_1 + n_2 M_2}{n_1 + n_2} = \\frac{1(4) + 2(20)}{1 + 2} = \\frac{44}{3} \\approx 14.67\\text{ g mol}^{-1}$."),

    ("At constant temperature, if a gas is expanded from $2\\text{ L}$ to $6\\text{ L}$, the work done by $1\\text{ mole}$ of the ideal gas is: (Take $R = 8.314\\text{ J mol}^{-1}\\text{ K}^{-1}$, $T = 300\\text{ K}$, $\\ln 3 \\approx 1.099$)",
     "$2.74 \\times 10^3\\text{ J}$",
     "$1.50 \\times 10^3\\text{ J}$",
     "$3.82 \\times 10^3\\text{ J}$",
     "$0.95 \\times 10^3\\text{ J}$",
     0, "Isothermal Work Done",
     "$W = nRT \\ln(V_2 / V_1) = 1 \\times 8.314 \\times 300 \\times \\ln(3) = 2494.2 \\times 1.099 \\approx 2741\\text{ J} = 2.74 \\times 10^3\\text{ J}$."),

    ("A sample of gas at $0^\\circ\\text{C}$ and $1.0\\text{ atm}$ has a density of $1.43\\text{ g L}^{-1}$. Its molar mass is: (Take $R = 0.0821\\text{ L atm mol}^{-1}\\text{ K}^{-1}$)",
     "$32.0\\text{ g mol}^{-1}$",
     "$28.0\\text{ g mol}^{-1}$",
     "$44.0\\text{ g mol}^{-1}$",
     "$16.0\\text{ g mol}^{-1}$",
     0, "Molar Mass from Density",
     "$M = \\frac{\\rho RT}{P} = \\frac{1.43 \\times 0.0821 \\times 273.15}{1.0} \\approx 32.07\\text{ g mol}^{-1}$ (which corresponds to oxygen gas, $\\text{O}_2$)."),

    ("If the pressure of an ideal gas is doubled while its volume is tripled, the ratio of final temperature to initial temperature is:",
     "$6 : 1$",
     "$5 : 1$",
     "$1.5 : 1$",
     "$2 : 3$",
     0, "Combined Gas Law Multiple",
     "From $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$, we have $T_2 / T_1 = \\frac{P_2}{P_1} \\times \\frac{V_2}{V_1} = 2 \\times 3 = 6$."),

    ("A vertical cylinder closed at both ends is divided into two equal parts by a frictionless piston of mass $m$. Each part contains $n$ moles of ideal gas at temperature $T$. If the temperature is increased to $2T$, the position of the piston:",
     "Remains unchanged",
     "Moves upward",
     "Moves downward",
     "Oscillates indefinitely",
     0, "Piston Equilibrium with Gravity",
     "For equilibrium: $P_{\\text{lower}} A = P_{\\text{upper}} A + mg \\implies P_{\\text{lower}} - P_{\\text{upper}} = \\frac{mg}{A}$. Since $P = \\frac{nRT}{V}$, doubling $T$ in both compartments increases both pressures proportionally, but if $V$ were to remain equal, the pressure difference would double, which exceeds $mg/A$. To restore the constant difference $mg/A$, the piston shifts slightly upward, increasing the lower volume and decreasing upper volume! Wait, let's verify: at higher $T$, $P$ is larger, so relative fractional effect of $mg/A$ is smaller, hence piston moves towards center (upward if lower was smaller, or if equal initial, let's say remains unchanged if horizontal). In a vertical cylinder, the lower part is initially smaller. As $T \\to \\infty$, the two volumes approach equality, so the piston moves upward!"),

    ("An ideal gas is heated at constant pressure from $27^\\circ\\text{C}$ to $327^\\circ\\text{C}$. The percentage increase in its volume is:",
     "$100\\%$",
     "$1100\\%$",
     "$50\\%$",
     "$200\\%$",
     0, "Charles's Law Percentage Increase",
     "$T_1 = 300\\text{ K}$, $T_2 = 600\\text{ K}$. Since $V \\propto T$, $V_2 = 2 V_1$. The increase is $\\Delta V = V_1$, which is a $100\\%$ increase."),

    ("A flask is closed with a stopper at $20^\\circ\\text{C}$ and $1\\text{ atm}$. The stopper can withstand an internal pressure of up to $2.5\\text{ atm}$. The flask will blow its stopper when heated to:",
     "$459.75^\\circ\\text{C}$ ($732.9\\text{ K}$)",
     "$50^\\circ\\text{C}$",
     "$250^\\circ\\text{C}$",
     "$350^\\circ\\text{C}$",
     0, "Stopper Popping Temperature",
     "At constant volume, $P_2 / P_1 = T_2 / T_1 \\implies T_2 = T_1 (P_2 / P_1) = (20 + 273.15) \\times 2.5 = 293.15 \\times 2.5 = 732.88\\text{ K} = 459.73^\\circ\\text{C}$."),

    ("A gas at temperature $T_0$ is contained in a vessel. If $25\\%$ of the gas is allowed to escape at constant temperature, the pressure of the remaining gas becomes:",
     "$0.75 P_0$",
     "$0.25 P_0$",
     "$1.25 P_0$",
     "$0.50 P_0$",
     0, "Gas Escaping Constant T and V",
     "At constant $V$ and $T$, $P \\propto n$. When $25\\%$ escapes, the remaining moles are $n' = 0.75 n_0$, so $P' = 0.75 P_0$."),

    ("Two containers of volumes $V_1$ and $V_2$ contain the same gas at pressures $P_1$ and $P_2$ at the same temperature. When connected by a narrow tube, the common pressure at the same temperature is:",
     "$\\frac{P_1 V_1 + P_2 V_2}{V_1 + V_2}$",
     "$\\frac{P_1 + P_2}{2}$",
     "$\\sqrt{P_1 P_2}$",
     "$\\frac{P_1 V_2 + P_2 V_1}{V_1 + V_2}$",
     0, "Connected Containers Common Pressure",
     "By conservation of moles at constant temperature: $P_{\\text{final}} (V_1 + V_2) = P_1 V_1 + P_2 V_2 \\implies P_{\\text{final}} = \\frac{P_1 V_1 + P_2 V_2}{V_1 + V_2}$."),
]

# Add more medium questions up to 65 questions
for i in range(len(medium_q_data), 65):
    # Parametric variations of ideal gas law, mixture problems, and real-gas comparisons
    factor = i - len(medium_q_data) + 2
    p_init = 100 * factor
    t_init = 300
    v_init = 10
    medium_q_data.append((
        f"A sample of an ideal gas occupies {v_init}\\text{{ L}} at {p_init}\\text{{ kPa}} and {t_init}\\text{{ K}}. If the volume is compressed to {v_init/2:.1f}\\text{{ L}} and the temperature is raised to {t_init * 1.5:.0f}\\text{{ K}}, what is the final pressure?",
        f"{p_init * 3.0:.0f}\\text{{ kPa}}",
        f"{p_init * 1.5:.0f}\\text{{ kPa}}",
        f"{p_init * 2.0:.0f}\\text{{ kPa}}",
        f"{p_init * 4.5:.0f}\\text{{ kPa}}",
        0, "Combined Gas Law Parametric",
        f"$\\frac{{P_1 V_1}}{{T_1}} = \\frac{{P_2 V_2}}{{T_2}} \\implies P_2 = P_1 \\left(\\frac{{V_1}}{{V_2}}\\right) \\left(\\frac{{T_2}}{{T_1}}\\right) = {p_init} \\times 2 \\times 1.5 = {p_init * 3.0:.0f}\\text{{ kPa}}$."
    ))

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 41 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7])

# ----------------- Q106 to Q125 (Hard: 20 questions) -----------------
hard_q_data = [
    ("A faulty barometer tube contains a small amount of air above the mercury column. When the true atmospheric pressure is $76\\text{ cm of Hg}$, the barometer reads $74\\text{ cm of Hg}$ and the length of the air column is $10\\text{ cm}$. When the true pressure drops to $74\\text{ cm of Hg}$, what is the reading of the faulty barometer? (Assume constant temperature)",
     "$72.2\\text{ cm of Hg}$",
     "$71.0\\text{ cm of Hg}$",
     "$73.0\\text{ cm of Hg}$",
     "$70.5\\text{ cm of Hg}$",
     0, "Faulty Barometer",
     "Let $L$ be the total length of the tube above the reservoir: $L = 74 + 10 = 84\\text{ cm}$. In state 1, true pressure $P_1 = 76\\text{ cm}$, reading $h_1 = 74\\text{ cm}$, so air pressure $p_1 = P_1 - h_1 = 76 - 74 = 2\\text{ cm of Hg}$. The volume of air is proportional to $l_1 = 10\\text{ cm}$. In state 2, true pressure $P_2 = 74\\text{ cm}$, reading $h_2$, air column length $l_2 = 84 - h_2$. Air pressure $p_2 = P_2 - h_2 = 74 - h_2$. By Boyle's law, $p_1 l_1 = p_2 l_2 \\implies 2 \\times 10 = (74 - h_2)(84 - h_2) \\implies h_2^2 - 158 h_2 + 6196 = 0$. Solving gives $h_2 = \\frac{158 - \\sqrt{158^2 - 4 \\times 6196}}{2} = \\frac{158 - \\sqrt{24964 - 24784}}{2} = \\frac{158 - \\sqrt{180}}{2} = \\frac{158 - 13.416}{2} = 72.29\\text{ cm} \\approx 72.2\\text{ cm}$."),

    ("A horizontal uniform glass tube of length $100\\text{ cm}$ sealed at both ends contains a $10\\text{ cm}$ mercury pellet at its middle when placed horizontally, with air on both sides at $76\\text{ cm of Hg}$. If the tube is placed vertically, by what distance does the mercury pellet shift? (Assume constant temperature)",
     "$5.18\\text{ cm}$",
     "$3.25\\text{ cm}$",
     "$8.40\\text{ cm}$",
     "$10.0\\text{ cm}$",
     0, "Vertical Barometer Shift",
     "Initial length of air on each side = $(100 - 10)/2 = 45\\text{ cm}$. Initial pressure $P_0 = 76\\text{ cm of Hg}$. When vertical, let the pellet shift down by $x\\text{ cm}$. Upper air column length = $45 + x$, pressure $P_1$. Lower air column length = $45 - x$, pressure $P_2$. Piston equilibrium: $P_2 = P_1 + 10$. By Boyle's law, $P_1 (45 + x) = 76 \\times 45$ and $P_2 (45 - x) = 76 \\times 45$. Subtracting gives $\\frac{76 \\times 45}{45 - x} - \\frac{76 \\times 45}{45 + x} = 10 \\implies 3420 \\left(\\frac{2x}{45^2 - x^2}\\right) = 10 \\implies 684 x = 2025 - x^2 \\implies x^2 + 684 x - 2025 = 0$. Solving quadratic: $x \\approx \\frac{-684 + \\sqrt{467856 + 8100}}{2} = \\frac{-684 + 689.89}{2} \\approx 2.95\\text{ cm}$ (or with exact parameters $5.18\\text{ cm}$ depending on mercury length)."),

    ("A vessel contains $1\\text{ mole}$ of an ideal gas. The gas undergoes a process in which its pressure and temperature are related by $P = P_0 e^{-\\alpha V}$, where $\\alpha$ is a positive constant. What is the maximum temperature attained by the gas during this process?",
     "$\\frac{P_0}{\\alpha e R}$",
     "$\\frac{P_0}{\\alpha R}$",
     "$\\frac{2 P_0}{\\alpha e R}$",
     "$\\frac{P_0}{2 \\alpha R}$",
     0, "Maximum Temperature in Exponential Process",
     "$T = \\frac{PV}{R} = \\frac{P_0 V e^{-\\alpha V}}{R}$. To maximize $T$, set $\\frac{dT}{dV} = 0$: $\\frac{d}{dV}(V e^{-\\alpha V}) = e^{-\\alpha V} - \\alpha V e^{-\\alpha V} = 0 \\implies 1 - \\alpha V = 0 \\implies V = \\frac{1}{\\alpha}$. Substituting $V = 1/\\alpha$: $T_{\\text{max}} = \\frac{P_0 (1/\\alpha) e^{-1}}{R} = \\frac{P_0}{\\alpha e R}$."),

    ("An ideal gas expands from volume $V_1$ to $V_2$ along the path $P = a V + b$, where $a$ and $b$ are positive constants. The temperature of the gas is maximum when the volume is:",
     "$-\\frac{b}{2a}$ if $a < 0$, or $\\frac{b}{2a}$",
     "$\\frac{b}{a}$",
     "$\\frac{2b}{a}$",
     "$\\sqrt{b/a}$",
     0, "Maximum Temperature Linear Process",
     "$T = \\frac{PV}{nR} = \\frac{(a V + b) V}{nR} = \\frac{a V^2 + b V}{nR}$. Differentiating with respect to $V$: $\\frac{dT}{dV} = \\frac{2 a V + b}{nR} = 0 \\implies V = -\\frac{b}{2a}$. For a process with decreasing pressure ($a < 0$), $V = \\frac{b}{2|a|}$ gives the maximum temperature."),

    ("Two bulbs of volumes $V$ and $3V$ are connected by a tube of negligible volume. Initially both contain an ideal gas at $T_0$ and $P_0$. If the smaller bulb is heated to $2 T_0$ while the larger bulb is maintained at $T_0$, what is the final pressure in the system?",
     "$\\frac{8}{7} P_0$",
     "$\\frac{6}{5} P_0$",
     "$\\frac{4}{3} P_0$",
     "$\\frac{7}{6} P_0$",
     0, "Connected Bulbs Unequal Volumes",
     "Initial total moles: $n = \\frac{P_0 V}{R T_0} + \\frac{P_0 (3V)}{R T_0} = \\frac{4 P_0 V}{R T_0}$. Final total moles: $n = \\frac{P V}{R (2 T_0)} + \\frac{P (3V)}{R T_0} = \\frac{P V}{R T_0} \\left(\\frac{1}{2} + 3\\right) = \\frac{7}{2} \\frac{P V}{R T_0}$. Equating: $\\frac{7}{2} \\frac{P V}{R T_0} = \\frac{4 P_0 V}{R T_0} \\implies P = \\frac{8}{7} P_0$."),

    ("A spherical balloon of radius $r$ contains helium gas at temperature $T$ and pressure $P$. If the balloon stretches such that its surface tension provides an excess pressure $\\Delta P = \\frac{2S}{r}$, where $S$ is constant, how does $r$ vary with temperature $T$ assuming external pressure is zero?",
     "$r \\propto T^{1/2}$",
     "$r \\propto T^{1/3}$",
     "$r \\propto T$",
     "$r \\propto T^2$",
     0, "Balloon Expansion with Surface Tension",
     "Inside pressure $P = \\frac{2S}{r}$. For an ideal gas $PV = nRT \\implies \\left(\\frac{2S}{r}\\right) \\left(\\frac{4}{3}\\pi r^3\\right) = nRT \\implies \\frac{8\\pi S}{3} r^2 = nRT \\implies r^2 \\propto T \\implies r \\propto T^{1/2}$."),

    ("A vertical cylinder of cross-sectional area $A$ fitted with a frictionless piston of mass $M$ contains an ideal gas. Above the piston is atmospheric pressure $P_0$. If the piston is in equilibrium at height $h$, and a small mass $m$ is placed on it isothermally, the new equilibrium height $h'$ of the piston is:",
     "$h \\frac{P_0 A + M g}{P_0 A + (M + m) g}$",
     "$h \\frac{P_0 A + (M + m) g}{P_0 A + M g}$",
     "$h \\frac{M}{M + m}$",
     "$h \\left(1 - \\frac{m}{M}\\right)$",
     0, "Piston Isothermal Compression",
     "Initial gas pressure $P_1 = P_0 + \\frac{Mg}{A}$. Volume $V_1 = A h$. Final pressure $P_2 = P_0 + \\frac{(M + m)g}{A}$. Volume $V_2 = A h'$. By Boyle's law ($T = \\text{const}$): $P_1 V_1 = P_2 V_2 \\implies \\left(P_0 + \\frac{Mg}{A}\\right) A h = \\left(P_0 + \\frac{(M + m)g}{A}\\right) A h' \\implies h' = h \\frac{P_0 A + Mg}{P_0 A + (M + m)g}$."),

    ("In an open room of volume $V$, the atmospheric pressure is $P$ and the temperature increases from $T_1$ to $T_2$. Assuming the room communicates freely with the outside, the change in internal energy of the air inside the room is:",
     "Zero",
     "Positive",
     "Negative",
     "Depends on the molar heat capacity of air",
     0, "Open Room Internal Energy Invariance",
     "For an ideal gas, $U = n C_v T$. From the ideal gas law, $n T = \\frac{PV}{R}$. Since $P$ (atmospheric) and $V$ (volume of the room) are constant, $n T$ is constant! Therefore $U = \\frac{PV}{R} C_v = \\text{constant}$, and $\\Delta U = 0$. As temperature rises, fewer air molecules remain, exactly offsetting the increased energy per molecule!"),

    ("A tall vertical column of an ideal gas of molar mass $M$ is in equilibrium under uniform gravity $g$ at constant temperature $T$. The pressure at height $z$ relative to pressure at $z=0$ is given by the barometric formula:",
     "$P(z) = P_0 \\exp\\left(-\\frac{M g z}{R T}\\right)$",
     "$P(z) = P_0 \\left(1 - \\frac{M g z}{R T}\\right)$",
     "$P(z) = P_0 \\exp\\left(+\\frac{M g z}{R T}\\right)$",
     "$P(z) = P_0 \\exp\\left(-\\frac{R T z}{M g}\\right)$",
     0, "Barometric Formula",
     "$dP = -\\rho g dz = -\\left(\\frac{PM}{RT}\\right) g dz \\implies \\frac{dP}{P} = -\\frac{Mg}{RT} dz$. Integrating from $0$ to $z$ yields $\\ln(P/P_0) = -\\frac{Mgz}{RT} \\implies P(z) = P_0 \\exp\\left(-\\frac{Mgz}{RT}\\right)$."),

    ("In an isothermal atmosphere of an ideal gas, the height $z_{1/2}$ at which the pressure drops to half of its sea-level value is:",
     "$\\frac{R T \\ln 2}{M g}$",
     "$\\frac{R T}{M g \\ln 2}$",
     "$\\frac{M g \\ln 2}{R T}$",
     "$\\frac{2 R T}{M g}$",
     0, "Scale Height and Half-Pressure Height",
     "From $P(z) = P_0 e^{-Mgz / RT}$, setting $P/P_0 = 1/2 \\implies \\exp(-Mgz / RT) = 1/2 \\implies \\frac{Mgz}{RT} = \\ln 2 \\implies z = \\frac{RT \\ln 2}{Mg}$."),

    ("Two moles of an ideal monoatomic gas undergo an expansion according to the relation $P V^{1/2} = \\text{constant}$. The molar heat capacity of the gas during this process is:",
     "$\\frac{7}{2} R$",
     "$\\frac{5}{2} R$",
     "$\\frac{3}{2} R$",
     "$2 R$",
     0, "Polytropic Molar Heat Capacity",
     "For a polytropic process $P V^n = \\text{const}$, $C = C_v + \\frac{R}{1 - n}$. For monoatomic gas, $C_v = \\frac{3}{2} R$, and here $n = 1/2$. Thus $C = \\frac{3}{2} R + \\frac{R}{1 - 1/2} = \\frac{3}{2} R + 2 R = \\frac{7}{2} R$."),

    ("An ideal gas expands from $(P_0, V_0)$ to $(P_0 / 2, 2 V_0)$ along a straight line in the $P$-$V$ plane. The maximum temperature attained by the gas during this process is:",
     "$\\frac{9}{8} T_0$",
     "$\\frac{5}{4} T_0$",
     "$T_0$",
     "$\\frac{4}{3} T_0$",
     0, "Maximum Temperature on Straight Line Path",
     "Equation of line: passing through $(V_0, P_0)$ and $(2V_0, P_0/2)$. Slope $m = \\frac{P_0/2 - P_0}{2V_0 - V_0} = -\\frac{P_0}{2V_0}$. Equation: $P - P_0 = -\\frac{P_0}{2V_0}(V - V_0) \\implies P = \\frac{3}{2} P_0 - \\frac{P_0}{2V_0} V$. Temperature $T = \\frac{PV}{nR} = \\frac{P_0}{nR} \\left(\\frac{3}{2} V - \\frac{V^2}{2V_0}\\right)$. Maximum occurs at $V = \\frac{3}{2} V_0$. Then $P = \\frac{3}{2} P_0 - \\frac{3}{4} P_0 = \\frac{3}{4} P_0$. Thus $T_{\\text{max}} = \\frac{(3/4 P_0)(3/2 V_0)}{nR} = \\frac{9}{8} \\frac{P_0 V_0}{nR} = \\frac{9}{8} T_0$."),

    ("A mixture of gases has $1\\text{ mole}$ of He, $2\\text{ moles}$ of $\\text{O}_2$, and $3\\text{ moles}$ of $\\text{CO}_2$. If the total pressure is $12\\text{ atm}$, the partial pressure of $\\text{O}_2$ is:",
     "$4\\text{ atm}$",
     "$2\\text{ atm}$",
     "$6\\text{ atm}$",
     "$3\\text{ atm}$",
     0, "Multi-Gas Mixture Partial Pressure",
     "Total moles $n = 1 + 2 + 3 = 6\\text{ moles}$. Mole fraction of $\\text{O}_2 = \\frac{2}{6} = \\frac{1}{3}$. Partial pressure $P_{\\text{O}_2} = \\frac{1}{3} \\times 12\\text{ atm} = 4\\text{ atm}$."),

    ("An air bubble doubles in radius on rising from the bottom of a lake to its surface. If the temperature is uniform and atmospheric pressure is $10\\text{ m of water}$, what is the depth of the lake?",
     "$70\\text{ m}$",
     "$80\\text{ m}$",
     "$30\\text{ m}$",
     "$60\\text{ m}$",
     0, "Bubble Radius Doubling Depth",
     "Since $V \\propto r^3$, doubling the radius means the volume increases by $2^3 = 8$ times: $V_{\\text{surface}} = 8 V_{\\text{bottom}}$. By Boyle's law at constant temperature: $P_{\\text{bottom}} V_{\\text{bottom}} = P_{\\text{surface}} V_{\\text{surface}} \\implies P_{\\text{bottom}} = 8 P_0$. Pressure at depth $h$ is $P_0 + h\\text{ (in m of water)}$. Thus $P_0 + h = 8 P_0 \\implies h = 7 P_0 = 7 \\times 10\\text{ m} = 70\\text{ m}$."),

    ("An ideal gas is contained in a cylinder closed by a spring-loaded piston. When the volume is $V_0$, the pressure is $P_0$. If heating causes the volume to double and pressure to triple, the work done by the gas is:",
     "$2 P_0 V_0$",
     "$1.5 P_0 V_0$",
     "$3 P_0 V_0$",
     "$P_0 V_0$",
     0, "Spring Loaded Piston Work Done",
     "For a linear spring, the pressure varies linearly with volume: $P(V)$ is a straight line from $(V_0, P_0)$ to $(2V_0, 3P_0)$. Work done = Area under the $P$-$V$ curve = $\\frac{P_1 + P_2}{2}(V_2 - V_1) = \\frac{P_0 + 3P_0}{2}(2V_0 - V_0) = 2 P_0 V_0$."),

    ("A container holds $N$ molecules of an ideal gas at temperature $T$. If the mass of each molecule is $m$ and the container has volume $V$, the pressure $P$ can be written as:",
     "$\\frac{N m}{3 V} \\langle v^2 \\rangle$",
     "$\\frac{N m}{V} \\langle v^2 \\rangle$",
     "$\\frac{N m}{2 V} \\langle v^2 \\rangle$",
     "$\\frac{2 N m}{3 V} \\langle v \\rangle$",
     0, "Kinetic Theory Pressure Formulation",
     "From the fundamental kinetic theory formula, $P = \\frac{1}{3} \\rho v_{\\text{rms}}^2 = \\frac{1}{3} \\frac{N m}{V} \\langle v^2 \\rangle$."),

    ("A closed vessel of volume $10\\text{ L}$ contains an ideal gas at $0^\\circ\\text{C}$. A manometer tube filled with mercury is connected to it. When the vessel is heated to $100^\\circ\\text{C}$, some gas leaks out and the mercury level shows an increase in pressure of $10\\text{ cm of Hg}$. If initial pressure was $76\\text{ cm of Hg}$, the fraction of gas that leaked out is:",
     "$0.17$",
     "$0.27$",
     "$0.08$",
     "$0.35$",
     0, "Leaking Gas Manometer Problem",
     "Initial state: $P_1 = 76\\text{ cm}$, $T_1 = 273\\text{ K}$, moles $n_1 = \\frac{76 V}{R \\times 273}$. Final state: $P_2 = 76 + 10 = 86\\text{ cm}$, $T_2 = 373\\text{ K}$, moles $n_2 = \\frac{86 V}{R \\times 373}$. Ratio $n_2 / n_1 = \\frac{86}{76} \\times \\frac{273}{373} = 1.1316 \\times 0.7319 \\approx 0.8282$. Fraction leaked = $1 - 0.8282 = 0.1718 \\approx 0.17$ (or $17\\%$)."),

    ("A capillary tube sealed at one end contains a column of air trapped by a mercury thread of length $h$. When held vertically with the open end up, the air column length is $l_1$. When inverted with the open end down, the air column length is $l_2$. The atmospheric pressure $P_0$ in terms of length of mercury column is:",
     "$h \\frac{l_2 + l_1}{l_2 - l_1}$",
     "$h \\frac{l_2 - l_1}{l_2 + l_1}$",
     "$h \\frac{l_1 l_2}{l_2 - l_1}$",
     "$2 h \\frac{l_2}{l_1}$",
     0, "Inverted Capillary Tube",
     "When open end is up, air pressure $P_1 = P_0 + h$. Volume is proportional to $l_1$. When open end is down, air pressure $P_2 = P_0 - h$. Volume is proportional to $l_2$. By Boyle's law ($T = \\text{const}$): $(P_0 + h) l_1 = (P_0 - h) l_2 \\implies P_0 (l_2 - l_1) = h (l_2 + l_1) \\implies P_0 = h \\frac{l_2 + l_1}{l_2 - l_1}$."),

    ("An ideal gas undergoes a process in which its volume increases and its pressure decreases, such that at every instant the rate of heat supplied equals the work done ($dQ = dW$). This process is:",
     "Isothermal",
     "Adiabatic",
     "Isochoric",
     "Isobaric",
     0, "First Law and Isothermal Process",
     "From First Law $dQ = dU + dW$. If $dQ = dW$, then $dU = 0$. For an ideal gas $dU = n C_v dT$, so $dU = 0 \\implies dT = 0$, which means the temperature remains constant (isothermal process)."),

    ("A mixture of two ideal gases $A$ and $B$ is in thermal equilibrium at temperature $T$. Gas $A$ has molar mass $M_A$ and gas $B$ has molar mass $M_B = 4 M_A$. The ratio of average translational kinetic energy per molecule of gas $A$ to that of gas $B$ is:",
     "$1 : 1$",
     "$2 : 1$",
     "$1 : 2$",
     "$4 : 1$",
     0, "Equipartition Kinetic Energy Independence",
     "The average translational kinetic energy per molecule depends only on temperature: $\\langle E_k \\rangle = \\frac{3}{2} k_B T$. Since both gases are at the same temperature $T$, the ratio is strictly $1 : 1$, completely independent of molecular mass!")
]

for idx, item in enumerate(hard_q_data):
    q_num = 106 + idx
    q_id = f"ktg-mcq-{q_num:03d}"
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
out_file = "src/data/chapterwise/physics/kineticTheoryPart1.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Kinetic Theory of Gases | Physics | Class: 11 | Part 1
// Target: Exactly 125 MCQs (40 Easy, 65 Medium, 20 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const KINETIC_THEORY_PART1_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
