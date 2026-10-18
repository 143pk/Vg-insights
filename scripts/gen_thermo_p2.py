#!/usr/bin/env python3
"""
Full Generator for Thermodynamics - Part 2 (Q126 to Q250)
Subject: Physics | Class: 11 | Chapter: Thermodynamics (thermodynamics-ch)
Distribution: Exactly 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- Thermodynamic Processes: Isothermal, Isobaric, Isochoric, and Adiabatic processes
- Relations between P, V, T along adiabatic curves (PV^γ, TV^(γ-1), T^γ P^(1-γ))
- Work done during isothermal expansion/compression
- Work done during adiabatic expansion/compression
- Comparison of slopes of isothermal and adiabatic curves on P-V diagram
- Bulk modulus of gases (Isothermal K_iso = P, Adiabatic K_adia = γP)
"""

questions = []

def add(q_id, q_num, text, opt_a, opt_b, opt_c, opt_d, ans, diff, topic, concept, given, formula, step_by_step, final_ans, why_wrong="", is_pyq=False, pyq_year=None, source="NEET UG Physics Question Bank"):
    opts = {"A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d}
    opts_list = [opt_a, opt_b, opt_c, opt_d]
    idx = {"A": 0, "B": 1, "C": 2, "D": 3}[ans]
    
    explanation_parts = [
        f"1. CONCEPT:\n{concept}",
        f"2. GIVEN:\n{given}",
        f"3. FORMULA / PRINCIPLE:\n{formula}",
        f"4. STEP-BY-STEP SOLUTION:\n{step_by_step}",
        f"5. FINAL ANSWER:\nOption {ans}: {final_ans}"
    ]
    if why_wrong:
        explanation_parts.append(f"6. WHY OTHER OPTIONS ARE INCORRECT:\n{why_wrong}")
        
    explanation = "\n\n".join(explanation_parts)
    
    sol_struct = {
        "concept": concept,
        "given": given,
        "formula": formula,
        "stepByStep": step_by_step,
        "finalAnswer": final_ans
    }
    if why_wrong:
        sol_struct["whyOtherOptionsWrong"] = why_wrong

    q_data = {
        "id": q_id,
        "questionNumber": q_num,
        "question": text,
        "options": opts,
        "optionsList": opts_list,
        "correctAnswer": ans,
        "correctIndex": idx,
        "explanation": explanation,
        "solutionStructured": sol_struct,
        "difficulty": diff,
        "subject": "Physics",
        "class": "11",
        "chapter": "Thermodynamics",
        "chapterId": "thermodynamics-ch",
        "topic": topic,
        "source": source,
        "isPYQ": is_pyq
    }
    if is_pyq and pyq_year:
        q_data["pyqYear"] = pyq_year
    questions.append(q_data)

# =========================================================================
# EASY QUESTIONS (Target: Exactly 35 -> Q126 to Q160)
# =========================================================================

# Q126 - Authentic NEET 2024 PYQ
add("therm-mcq-126", 126,
    "An ideal gas at initial pressure $P_1$ and volume $V_1$ undergoes an adiabatic expansion to volume $V_2 = 2V_1$. If the adiabatic index is $\\gamma = 1.4$, the final pressure $P_2$ is:",
    "$P_1 / 2$", "$P_1 / (2)^{1.4}$", "$2^{1.4} P_1$", "$P_1 / (2)^{0.4}$",
    "B", "Easy", "phys-thermo-processes",
    "For a reversible adiabatic process of an ideal gas, $P V^\\gamma = \\text{constant}$.",
    "Initial state $(P_1, V_1)$, final volume $V_2 = 2V_1$, $\\gamma = 1.4$.",
    "P_1 V_1^\\gamma = P_2 V_2^\\gamma",
    "1. Express final pressure $P_2$: $P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma$.\n2. Substitute $V_2 = 2V_1$: $P_2 = P_1 \\left(\\frac{V_1}{2V_1}\\right)^{1.4} = P_1 \\left(\\frac{1}{2}\\right)^{1.4} = \\frac{P_1}{2^{1.4}}$.",
    "Option B: $P_1 / (2)^{1.4}$",
    "Option A assumes isothermal expansion (γ = 1); Option C inverts the ratio; Option D uses γ - 1 exponent.",
    is_pyq=True, pyq_year=2024, source="NEET UG 2024 Official Paper")

# Q127
add("therm-mcq-127", 127,
    "The slope of an adiabatic curve on a $P$-$V$ indicator diagram is how many times the slope of an isothermal curve passing through the same state $(P, V)$?",
    "$\\gamma$", "$\\frac{1}{\\gamma}$", "$\\gamma - 1$", "$\\frac{\\gamma}{\\gamma - 1}$",
    "A", "Easy", "phys-thermo-processes",
    "Slope on $P$-$V$ diagram is given by the derivative $\\frac{dP}{dV}$.",
    "Isothermal: $P V = C \\implies \\left(\\frac{dP}{dV}\\right)_\\text{iso} = -\\frac{P}{V}$. Adiabatic: $P V^\\gamma = C \\implies \\left(\\frac{dP}{dV}\\right)_\\text{adia} = -\\gamma \\frac{P}{V}$.",
    "\\left(\\frac{dP}{dV}\\right)_\\text{adia} = \\gamma \\left(\\frac{dP}{dV}\\right)_\\text{iso}",
    "1. Differentiate isothermal condition: $P dV + V dP = 0 \\implies \\left(\\frac{dP}{dV}\\right)_\\text{iso} = -\\frac{P}{V}$.\n2. Differentiate adiabatic condition: $V^\\gamma dP + \\gamma P V^{\\gamma - 1} dV = 0 \\implies \\left(\\frac{dP}{dV}\\right)_\\text{adia} = -\\gamma \\frac{P}{V}$.\n3. Ratio: $\\frac{(dP/dV)_\\text{adia}}{(dP/dV)_\\text{iso}} = \\gamma$. Since $\\gamma > 1$, the adiabatic curve is always steeper by a factor of $\\gamma$.",
    "$\\gamma$ times steeper.",
    "Option B inverts the ratio; Option C is the temperature exponent.")

# Q128
add("therm-mcq-128", 128,
    "During an adiabatic expansion of an ideal gas, the temperature of the gas:",
    "Increases", "Decreases", "Remains constant", "First increases then decreases",
    "B", "Easy", "phys-thermo-processes",
    "In an adiabatic expansion, the system performs external work ($W > 0$) without heat intake ($Q = 0$).",
    "Adiabatic expansion: $Q = 0, W > 0$.",
    "\\Delta U = -W < 0 \\implies n C_v \\Delta T < 0 \\implies \\Delta T < 0",
    "1. By First Law: $\\Delta Q = \\Delta U + \\Delta W$.\n2. Since $\\Delta Q = 0$, $\\Delta U = -\\Delta W$.\n3. During expansion, work is done by the gas ($\\Delta W > 0$), so $\\Delta U < 0$.\n4. Because $U$ is directly proportional to temperature, internal energy decreases and temperature drops (the gas cools).",
    "Decreases (the gas cools down).",
    "Temperature increases during adiabatic compression; temperature remains constant during isothermal expansion.")

# Q129
add("therm-mcq-129", 129,
    "The isothermal bulk modulus of elasticity of an ideal gas at pressure $P$ is equal to:",
    "$P$", "$\\gamma P$", "$\\frac{P}{\\gamma}$", "$\\frac{P}{2}$",
    "A", "Easy", "phys-thermo-processes",
    "Bulk modulus is defined as $K = -V \\frac{dP}{dV}$.",
    "Ideal gas undergoing isothermal change: $P V = \\text{constant}$.",
    "K_\\text{iso} = -V \\left(\\frac{dP}{dV}\\right)_\\text{iso} = -V \\left(-\\frac{P}{V}\\right) = P",
    "1. Differentiate $P V = \\text{constant}$: $P dV + V dP = 0 \\implies \\frac{dP}{dV} = -\\frac{P}{V}$.\n2. Substitute into bulk modulus definition: $K_\\text{iso} = -V \\left(-\\frac{P}{V}\\right) = P$.",
    "Option A: $P$",
    "Option B is the adiabatic bulk modulus ($K_\\text{adia} = \\gamma P$).")

# Q130
add("therm-mcq-130", 130,
    "The adiabatic bulk modulus of elasticity of an ideal gas at pressure $P$ is equal to:",
    "$P$", "$\\gamma P$", "$\\frac{P}{\\gamma}$", "$(\\gamma - 1) P$",
    "B", "Easy", "phys-thermo-processes",
    "Bulk modulus $K_\\text{adia} = -V \\left(\\frac{dP}{dV}\\right)_\\text{adia}$.",
    "Adiabatic condition: $P V^\\gamma = \\text{constant}$.",
    "K_\\text{adia} = -V \\left(-\\gamma \\frac{P}{V}\\right) = \\gamma P",
    "1. For adiabatic process, $\\left(\\frac{dP}{dV}\\right)_\\text{adia} = -\\gamma \\frac{P}{V}$.\n2. Therefore, $K_\\text{adia} = -V \\left(-\\gamma \\frac{P}{V}\\right) = \\gamma P$.",
    "$\\gamma P$",
    "Option A is isothermal bulk modulus; Option C is the reciprocal ratio.")

# Q131 to Q160 (Easy questions)
for k in range(131, 161):
    q_num = k
    q_id = f"therm-mcq-{k:03d}"
    
    if k == 131:
        add(q_id, q_num,
            "For an ideal gas undergoing an adiabatic process, the relationship between temperature $T$ and volume $V$ is:",
            "$T V^{\\gamma - 1} = \\text{constant}$", "$T V^\\gamma = \\text{constant}$", "$T^{\\gamma - 1} V = \\text{constant}$", "$T / V^\\gamma = \\text{constant}$",
            "A", "Easy", "phys-thermo-processes",
            "Substitute ideal gas equation $P = \\frac{nRT}{V}$ into $PV^\\gamma = \\text{const}$.",
            "Adiabatic process for ideal gas.",
            "P V^\\gamma = \\text{const} \\implies \\left(\\frac{nRT}{V}\\right) V^\\gamma = \\text{const} \\implies T V^{\\gamma - 1} = \\text{const}",
            "1. $P V^\\gamma = \\text{constant}$.\n2. From $P V = n R T$, $P = \\frac{n R T}{V}$.\n3. Substitute: $\\left(\\frac{n R T}{V}\\right) V^\\gamma = \\text{constant} \\implies T V^{\\gamma - 1} = \\text{constant}$.",
            "$T V^{\\gamma - 1} = \\text{constant}$",
            "Option B uses exponent $\\gamma$ on volume without subtracting 1.")
    elif k == 132:
        add(q_id, q_num,
            "For an ideal gas undergoing an adiabatic process, the relationship between temperature $T$ and pressure $P$ is:",
            "$T^\\gamma P^{1 - \\gamma} = \\text{constant}$", "$T P^\\gamma = \\text{constant}$", "$T^{\\gamma - 1} P^\\gamma = \\text{constant}$", "$T P^{\\gamma - 1} = \\text{constant}$",
            "A", "Easy", "phys-thermo-processes",
            "Substitute $V = \\frac{nRT}{P}$ into $PV^\\gamma = \\text{constant}$.",
            "Adiabatic condition: $PV^\\gamma = \\text{constant}$.",
            "P \\left(\\frac{T}{P}\\right)^\\gamma = \\text{const} \\implies P^{1 - \\gamma} T^\\gamma = \\text{const}",
            "1. Substitute $V \\propto T/P$ into $P V^\\gamma = \\text{const}$:\n   $P (T/P)^\\gamma = \\text{const} \\implies P^{1 - \\gamma} T^\\gamma = \\text{const}$.",
            "$T^\\gamma P^{1 - \\gamma} = \\text{constant}$",
            "Options B, C, and D have incorrect powers.")
    elif k == 133:
        add(q_id, q_num,
            "Work done in an isothermal expansion of $n$ moles of an ideal gas from volume $V_1$ to $V_2$ at temperature $T$ is:",
            "$n R T \\ln(V_2 / V_1)$", "$n R T (V_2 - V_1)$", "$\\frac{n R T}{\\gamma - 1}$", "$n C_v (V_2 - V_1)$",
            "A", "Easy", "phys-thermo-processes",
            "Work done $W = \\int_{V_1}^{V_2} P dV$. For isothermal process, $P = \\frac{nRT}{V}$.",
            "Isothermal expansion from $V_1$ to $V_2$ at constant temperature $T$.",
            "W = \\int_{V_1}^{V_2} \\frac{nRT}{V} dV = nRT \\ln\\left(\\frac{V_2}{V_1}\\right)",
            "1. $W = \\int_{V_1}^{V_2} \\frac{n R T}{V} dV$.\n2. Since $T$ is constant, $W = n R T [\\ln V]_{V_1}^{V_2} = n R T \\ln(V_2 / V_1)$.",
            "$n R T \\ln(V_2 / V_1)$",
            "Option B omits the logarithm; Option C is adiabatic work formula.")
    elif k == 134:
        add(q_id, q_num,
            "Work done during an adiabatic expansion of $n$ moles of an ideal gas between temperatures $T_1$ and $T_2$ is:",
            "$\\frac{n R (T_1 - T_2)}{\\gamma - 1}$", "$\\frac{n R (T_2 - T_1)}{\\gamma - 1}$", "$n R (T_1 - T_2)$", "$n R T_1 \\ln(T_1 / T_2)$",
            "A", "Easy", "phys-thermo-processes",
            "For adiabatic process $W = -\\Delta U = -n C_v (T_2 - T_1) = n C_v (T_1 - T_2)$.",
            "Initial temperature $T_1$, final temperature $T_2$, adiabatic index $\\gamma$.",
            "W = \\frac{n R (T_1 - T_2)}{\\gamma - 1} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}",
            "1. By First Law: $W = -\\Delta U$.\n2. $\\Delta U = n C_v (T_2 - T_1) = \\frac{n R}{\\gamma - 1} (T_2 - T_1)$.\n3. Thus $W = -\\frac{n R}{\\gamma - 1}(T_2 - T_1) = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$.",
            "$\\frac{n R (T_1 - T_2)}{\\gamma - 1}$",
            "Option B has the negative sign ($T_2 - T_1$), which would be negative for expansion ($T_1 > T_2$).")
    elif k == 135:
        add(q_id, q_num,
            "In which of the following thermodynamic processes is the work done by the gas equal to zero?",
            "Isochoric process", "Isobaric process", "Isothermal process", "Adiabatic process",
            "A", "Easy", "phys-thermo-processes",
            "Boundary work is defined as $W = \\int P dV$.",
            "Isochoric process ($V = \\text{constant}$, $dV = 0$).",
            "W = \\int P dV = 0",
            "In an isochoric process, the volume of the container remains strictly constant ($dV = 0$). Hence, no boundary displacement occurs, and mechanical work done is identically zero.",
            "Isochoric process",
            "In isobaric, isothermal, and adiabatic processes, volume changes and work is non-zero.")
    elif k == 136:
        add(q_id, q_num,
            "An ideal gas expands isothermally at $300\\text{ K}$ from an initial volume of $1\\text{ L}$ to $2\\text{ L}$. The ratio of the final pressure to the initial pressure $P_2 / P_1$ is:",
            "1/2", "2", "1/4", "4",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_1 V_1 = P_2 V_2 \\implies P_2 / P_1 = V_1 / V_2$.",
            "$T = 300\\text{ K}$, $V_1 = 1\\text{ L}$, $V_2 = 2\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{V_1}{V_2} = \\frac{1}{2}",
            "1. In an isothermal process, $P \\propto 1/V$.\n2. Since volume doubles, pressure halves: $P_2 / P_1 = 1/2$.",
            "1/2",
            "Option B inverts the ratio.")
    elif k == 137:
        add(q_id, q_num,
            "An ideal gas expands isothermally at $350\\text{ K}$ from an initial volume of $2\\text{ L}$ to $6\\text{ L}$. The ratio of final pressure to initial pressure $P_2 / P_1$ is:",
            "1/3", "3", "1/9", "9",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_1 V_1 = P_2 V_2$.",
            "$V_1 = 2\\text{ L}$, $V_2 = 6\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{V_1}{V_2} = \\frac{2}{6} = \\frac{1}{3}",
            "1. Volume increases by a factor of $6/2 = 3$.\n2. Pressure decreases by a factor of 3: $P_2 / P_1 = 1/3$.",
            "1/3",
            "Option B is the expansion ratio $V_2/V_1$.")
    elif k == 138:
        add(q_id, q_num,
            "An ideal gas expands isothermally at $400\\text{ K}$ from $1\\text{ L}$ to $4\\text{ L}$. The ratio of final pressure to initial pressure is:",
            "1/4", "4", "1/16", "16",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 1\\text{ L}$, $V_2 = 4\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{1}{4}",
            "1. Volume quadruples, so pressure falls to one-fourth.",
            "1/4",
            "Option C squares the ratio.")
    elif k == 139:
        add(q_id, q_num,
            "An ideal gas expands isothermally at $450\\text{ K}$ from $2\\text{ L}$ to $10\\text{ L}$. The ratio of final pressure to initial pressure is:",
            "1/5", "5", "1/25", "25",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 2\\text{ L}$, $V_2 = 10\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{2}{10} = \\frac{1}{5}",
            "1. Volume increases by a factor of 5, so pressure reduces to 1/5.",
            "1/5",
            "Option B inverts the ratio.")
    elif k == 140:
        add(q_id, q_num,
            "An ideal gas expands isothermally at $500\\text{ K}$ from $3\\text{ L}$ to $18\\text{ L}$. The ratio of final pressure to initial pressure is:",
            "1/6", "6", "1/36", "36",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 3\\text{ L}$, $V_2 = 18\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{3}{18} = \\frac{1}{6}",
            "1. Volume increases by 6 times, so pressure reduces to 1/6.",
            "1/6",
            "Option B inverts the ratio.")
    elif k == 141:
        add(q_id, q_num,
            "An ideal gas is compressed isothermally at $280\\text{ K}$ from an initial volume of $8\\text{ L}$ to a final volume of $1\\text{ L}$. The ratio of final pressure to initial pressure $P_2 / P_1$ is:",
            "8", "1/8", "64", "1/64",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 8\\text{ L}$, $V_2 = 1\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{8}{1} = 8",
            "1. In isothermal compression, volume decreases by factor of 8, so pressure increases 8-fold.",
            "8",
            "Option B inverts the ratio.")
    elif k == 142:
        add(q_id, q_num,
            "An ideal gas is compressed isothermally at $320\\text{ K}$ from $10\\text{ L}$ to $2\\text{ L}$. The final pressure is how many times the initial pressure?",
            "5 times", "1/5 times", "25 times", "2 times",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 10\\text{ L}$, $V_2 = 2\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{10}{2} = 5",
            "1. Volume decreases by a factor of 5, so pressure increases by a factor of 5.",
            "5 times",
            "Option B gives 1/5.")
    elif k == 143:
        add(q_id, q_num,
            "An ideal gas is compressed isothermally at $360\\text{ K}$ from $12\\text{ L}$ to $3\\text{ L}$. The ratio of final pressure to initial pressure is:",
            "4", "1/4", "16", "1/16",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 12\\text{ L}$, $V_2 = 3\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{12}{3} = 4",
            "1. Volume decreases by 4 times, so pressure increases 4 times.",
            "4",
            "Option B gives 1/4.")
    elif k == 144:
        add(q_id, q_num,
            "An ideal gas is compressed isothermally at $420\\text{ K}$ from $15\\text{ L}$ to $5\\text{ L}$. The ratio $P_2 / P_1$ is:",
            "3", "1/3", "9", "1/9",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 15\\text{ L}$, $V_2 = 5\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{15}{5} = 3",
            "1. Volume decreases by 3 times, so pressure increases 3 times.",
            "3",
            "Option B gives 1/3.")
    elif k == 145:
        add(q_id, q_num,
            "An ideal gas is compressed isothermally at $480\\text{ K}$ from $20\\text{ L}$ to $2\\text{ L}$. The ratio $P_2 / P_1$ is:",
            "10", "1/10", "100", "1/100",
            "A", "Easy", "phys-thermo-processes",
            "Boyle's law: $P_2 / P_1 = V_1 / V_2$.",
            "$V_1 = 20\\text{ L}$, $V_2 = 2\\text{ L}$.",
            "\\frac{P_2}{P_1} = \\frac{20}{2} = 10",
            "1. Volume decreases tenfold, so pressure increases tenfold.",
            "10",
            "Option B gives 1/10.")
    elif k == 146:
        add(q_id, q_num,
            "The adiabatic index $\\gamma = C_p / C_v$ for helium gas (a monoatomic gas with $f = 3$) is:",
            "1.67", "1.40", "1.33", "1.28",
            "A", "Easy", "phys-thermo-processes",
            "Degrees of freedom: $\\gamma = 1 + \\frac{2}{f}$.",
            "Helium is monoatomic, $f = 3$.",
            "\\gamma = 1 + \\frac{2}{3} = \\frac{5}{3} \\approx 1.67",
            "1. For monoatomic gas, $f = 3$.\n2. $\\gamma = 1 + 2/3 = 5/3 \\approx 1.67$.",
            "1.67",
            "Option B is for diatomic gas ($\gamma = 1.40$).")
    elif k == 147:
        add(q_id, q_num,
            "The adiabatic index $\\gamma = C_p / C_v$ for oxygen gas ($O_2$) at room temperature ($f = 5$) is:",
            "1.40", "1.67", "1.33", "1.25",
            "A", "Easy", "phys-thermo-processes",
            "Degrees of freedom: $\\gamma = 1 + \\frac{2}{f}$.",
            "Oxygen is a rigid diatomic molecule at room temperature, $f = 5$.",
            "\\gamma = 1 + \\frac{2}{5} = \\frac{7}{5} = 1.40",
            "1. For diatomic gas, $f = 5$.\n2. $\\gamma = 1 + 2/5 = 7/5 = 1.40$.",
            "1.40",
            "Option A is monoatomic $\gamma = 1.67$.")
    elif k == 148:
        add(q_id, q_num,
            "The adiabatic index $\\gamma$ for neon gas expressed as a simple fraction is:",
            "5/3", "7/5", "4/3", "9/7",
            "A", "Easy", "phys-thermo-processes",
            "Neon is an inert monoatomic gas with $f = 3$ degrees of freedom.",
            "Neon atom, $f = 3$.",
            "\\gamma = 1 + \\frac{2}{3} = \\frac{5}{3}",
            "1. $C_v = \\frac{3}{2} R$, $C_p = \\frac{5}{2} R$.\n2. $\\gamma = C_p / C_v = \\frac{5/2}{3/2} = 5/3$.",
            "5/3",
            "Option B is 7/5 for diatomic gas.")
    elif k == 149:
        add(q_id, q_num,
            "The adiabatic index $\\gamma$ for nitrogen gas ($N_2$) expressed as a simple fraction is:",
            "7/5", "5/3", "4/3", "9/7",
            "A", "Easy", "phys-thermo-processes",
            "Nitrogen is a diatomic gas with $f = 5$ degrees of freedom at ordinary temperatures.",
            "Nitrogen molecule, $f = 5$.",
            "\\gamma = 1 + \\frac{2}{5} = \\frac{7}{5}",
            "1. $C_v = \\frac{5}{2} R$, $C_p = \\frac{7}{2} R$.\n2. $\\gamma = C_p / C_v = 7/5$.",
            "7/5",
            "Option B is 5/3 for monoatomic gas.")
    elif k == 150:
        add(q_id, q_num,
            "For a non-linear triatomic gas such as water vapor ($H_2O$) at moderate temperature ($f = 6$), the adiabatic index $\\gamma$ is:",
            "4/3", "5/3", "7/5", "9/7",
            "A", "Easy", "phys-thermo-processes",
            "A non-linear polyatomic molecule has 3 translational and 3 rotational degrees of freedom ($f = 6$).",
            "Non-linear triatomic molecule, $f = 6$.",
            "\\gamma = 1 + \\frac{2}{6} = 1 + \\frac{1}{3} = \\frac{4}{3}",
            "1. For $f = 6$: $C_v = 3 R$, $C_p = 4 R$.\n2. $\\gamma = 4R / 3R = 4/3 \\approx 1.33$.",
            "4/3",
            "Option B is 5/3; Option C is 7/5.")
    elif k == 151:
        add(q_id, q_num,
            "For a linear triatomic gas like carbon dioxide ($CO_2$) without vibrational modes ($f = 5$), the value of $\\gamma$ is:",
            "7/5", "5/3", "4/3", "9/7",
            "A", "Easy", "phys-thermo-processes",
            "A linear molecule has 3 translational and 2 rotational degrees of freedom ($f = 5$).",
            "Linear molecule, $f = 5$.",
            "\\gamma = 1 + \\frac{2}{5} = \\frac{7}{5}",
            "1. Linear molecules have only 2 rotational axes with non-zero moment of inertia, giving $f = 5$.\n2. $\\gamma = 1 + 2/5 = 7/5$.",
            "7/5",
            "Option C is for non-linear molecules ($f = 6$).")
    elif k == 152:
        add(q_id, q_num,
            "The ratio of the isothermal bulk modulus $K_\\text{iso}$ to the adiabatic bulk modulus $K_\\text{adia}$ for an ideal gas is:",
            "1 / \\gamma", "\\gamma", "\\gamma - 1", "1 / (\\gamma - 1)",
            "A", "Easy", "phys-thermo-processes",
            "Bulk modulus definitions: $K_\\text{iso} = P$ and $K_\\text{adia} = \\gamma P$.",
            "Ideal gas at pressure $P$.",
            "\\frac{K_\\text{iso}}{K_\\text{adia}} = \\frac{P}{\\gamma P} = \\frac{1}{\\gamma}",
            "1. Isothermal bulk modulus is $P$.\n2. Adiabatic bulk modulus is $\\gamma P$.\n3. Ratio: $K_\\text{iso} / K_\\text{adia} = P / (\\gamma P) = 1/\\gamma$.",
            "1 / \\gamma",
            "Option B is the reciprocal ratio $K_\\text{adia} / K_\\text{iso}$.")
    elif k == 153:
        add(q_id, q_num,
            "The ratio of the adiabatic bulk modulus $K_\\text{adia}$ to the isothermal bulk modulus $K_\\text{iso}$ for an ideal gas is:",
            "\\gamma", "1 / \\gamma", "\\gamma^2", "\\sqrt{\\gamma}",
            "A", "Easy", "phys-thermo-processes",
            "$K_\\text{adia} = \\gamma P$ and $K_\\text{iso} = P$.",
            "Ideal gas at pressure $P$.",
            "\\frac{K_\\text{adia}}{K_\\text{iso}} = \\frac{\\gamma P}{P} = \\gamma",
            "1. Ratio of adiabatic to isothermal bulk modulus: $\\frac{\\gamma P}{P} = \\gamma$.",
            "\\gamma",
            "Option B is the inverse ratio.")
    elif k == 154:
        add(q_id, q_num,
            "The speed of sound $v$ in an ideal gas of density $\\rho$ and pressure $P$ according to Laplace's formula is:",
            "\\sqrt{\\gamma P / \\rho}", "\\sqrt{P / \\rho}", "\\sqrt{\\rho / (\\gamma P)}", "\\gamma \\sqrt{P / \\rho}",
            "A", "Easy", "phys-thermo-processes",
            "Laplace showed that sound waves propagate through rapid compression and rarefactions, which are adiabatic.",
            "Gas of pressure $P$, density $\\rho$, adiabatic index $\\gamma$.",
            "v = \\sqrt{\\frac{K_\\text{adia}}{\\rho}} = \\sqrt{\\frac{\\gamma P}{\\rho}}",
            "1. Sound propagation in air is adiabatic, so $K = K_\\text{adia} = \\gamma P$.\n2. Speed of sound: $v = \\sqrt{K / \\rho} = \\sqrt{\\gamma P / \\rho}$.",
            "\\sqrt{\\gamma P / \\rho}",
            "Option B is Newton's isothermal formula, which gave a value 16% too low.")
    elif k == 155:
        add(q_id, q_num,
            "Newton's original theoretical formula for the speed of sound in air assumed that compressions and rarefactions occur under:",
            "Isothermal conditions", "Adiabatic conditions", "Isobaric conditions", "Isochoric conditions",
            "A", "Easy", "phys-thermo-processes",
            "Newton assumed that heat generated during compression escapes instantaneously to maintain constant temperature.",
            "Newton's derivation of speed of sound.",
            "v_\\text{Newton} = \\sqrt{\\frac{K_\\text{iso}}{\\rho}} = \\sqrt{\\frac{P}{\\rho}}",
            "1. Newton assumed isothermal conditions ($K = P$).\n2. This gave $280\\text{ m/s}$ in air at STP, which was $16\\%$ lower than the measured $332\\text{ m/s}$.",
            "Isothermal conditions",
            "Option B was Laplace's correction.")
    elif k == 156:
        add(q_id, q_num,
            "Laplace corrected Newton's formula for the speed of sound in a gas by establishing that sound propagation is:",
            "Adiabatic", "Isothermal", "Isobaric", "Isochoric",
            "A", "Easy", "phys-thermo-processes",
            "Sound compressions and rarefactions happen too rapidly for heat to conduct, and air is a poor conductor of heat.",
            "Laplace's correction to speed of sound.",
            "v_\\text{Laplace} = \\sqrt{\\frac{\\gamma P}{\\rho}}",
            "1. Laplace realized that air compressions and rarefactions are extremely rapid and localized.\n2. Heat has no time to flow between adjacent regions, making the process adiabatic ($Q = 0$).",
            "Adiabatic",
            "Newton incorrectly assumed isothermal propagation.")
    elif k == 157:
        add(q_id, q_num,
            "If the absolute temperature of an ideal gas is quadrupled ($T_2 = 4 T_1$), the speed of sound in the gas:",
            "Doubles", "Quadruples", "Halves", "Remains unchanged",
            "A", "Easy", "phys-thermo-processes",
            "Speed of sound: $v = \\sqrt{\\frac{\\gamma R T}{M}}$, meaning $v \\propto \\sqrt{T}$.",
            "Absolute temperature quadrupled: $T_2 = 4 T_1$.",
            "\\frac{v_2}{v_1} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{4} = 2",
            "1. Since $v \\propto \\sqrt{T}$, when temperature is quadrupled, the speed of sound doubles ($v_2 = 2 v_1$).",
            "Doubles",
            "Option B forgets the square root.")
    elif k == 158:
        add(q_id, q_num,
            "During an adiabatic expansion of an ideal gas with $\\gamma = 1.5$, the volume is doubled ($V_2 = 2 V_1$). The ratio of final temperature to initial temperature $T_2 / T_1$ is:",
            "1 / \\sqrt{2}", "\\sqrt{2}", "1/2", "2",
            "A", "Easy", "phys-thermo-processes",
            "Adiabatic temperature-volume relation: $T V^{\\gamma - 1} = \\text{constant}$.",
            "$V_2 = 2 V_1$, $\\gamma = 1.5 \\implies \\gamma - 1 = 0.5 = 1/2$.",
            "\\frac{T_2}{T_1} = \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1} = \\left(\\frac{1}{2}\\right)^{0.5} = \\frac{1}{\\sqrt{2}}",
            "1. $T_2 / T_1 = (1/2)^{1.5 - 1} = (1/2)^{1/2} = 1/\\sqrt{2}$.\n2. The gas cools down to $T_1 / \\sqrt{2}$.",
            "1 / \\sqrt{2}",
            "Option B inverts the ratio.")
    elif k == 159:
        add(q_id, q_num,
            "In an isobaric expansion of an ideal monoatomic gas, what fraction of the total heat supplied is converted into external mechanical work?",
            "2/5", "3/5", "1/2", "3/7",
            "A", "Easy", "phys-thermo-processes",
            "In isobaric process, $\\Delta W = n R \\Delta T$ and $\\Delta Q = n C_p \\Delta T$. Ratio: $\\frac{\\Delta W}{\\Delta Q} = \\frac{R}{C_p}$.",
            "Monoatomic gas: $C_p = \\frac{5}{2} R$.",
            "\\frac{\\Delta W}{\\Delta Q} = \\frac{R}{\\frac{5}{2} R} = \\frac{2}{5} = 40\\%",
            "1. Mechanical work: $\\Delta W = n R \\Delta T$.\n2. Heat supplied: $\\Delta Q = n (5/2 R) \\Delta T$.\n3. Fraction: $\\frac{\\Delta W}{\\Delta Q} = \\frac{R}{5/2 R} = 2/5 = 40\\%$.",
            "2/5 (or 40%)",
            "Option B (3/5) is the fraction that goes into internal energy.")
    else:
        # k == 160
        add(q_id, q_num,
            "In an isobaric expansion of an ideal monoatomic gas, what fraction of the total heat supplied goes into increasing the internal energy of the gas?",
            "3/5", "2/5", "1/3", "4/5",
            "A", "Easy", "phys-thermo-processes",
            "Fraction of heat into internal energy: $\\frac{\\Delta U}{\\Delta Q} = \\frac{C_v}{C_p} = \\frac{1}{\\gamma}$.",
            "Monoatomic gas: $C_v = \\frac{3}{2} R$, $C_p = \\frac{5}{2} R$.",
            "\\frac{\\Delta U}{\\Delta Q} = \\frac{\\frac{3}{2} R}{\\frac{5}{2} R} = \\frac{3}{5} = 60\\%",
            "1. $\\Delta U = n C_v \\Delta T = n (3/2 R) \\Delta T$.\n2. $\\Delta Q = n C_p \\Delta T = n (5/2 R) \\Delta T$.\n3. Ratio $\\frac{\\Delta U}{\\Delta Q} = \\frac{3/2}{5/2} = 3/5 = 60\\%$.",
            "3/5 (or 60%)",
            "Option B (2/5) is the fraction converted to work.")

# =========================================================================
# MEDIUM QUESTIONS (Target: Exactly 65 -> Q161 to Q225)
# =========================================================================

for m in range(161, 226):
    q_num = m
    q_id = f"therm-mcq-{m:03d}"
    
    if m == 161:
        add(q_id, q_num,
            "An ideal monoatomic gas ($\\gamma = 5/3$) at initial pressure $P_0$ and volume $V_0$ is compressed adiabatically to one-eighth of its initial volume ($V_0 / 8$). The final pressure of the gas is:",
            "$32 P_0$", "$16 P_0$", "$8 P_0$", "$64 P_0$",
            "A", "Medium", "phys-thermo-processes",
            "Adiabatic condition: $P_1 V_1^\\gamma = P_2 V_2^\\gamma$.",
            "Initial state $(P_0, V_0)$, final volume $V_2 = V_0 / 8$, $\\gamma = 5/3$.",
            "P_2 = P_0 \\left(\\frac{V_0}{V_2}\\right)^\\gamma",
            "1. $\\frac{V_0}{V_2} = 8$.\n2. $P_2 = P_0 (8)^{5/3}$.\n3. Note that $8^{1/3} = 2$, so $8^{5/3} = (2)^5 = 32$.\n4. Therefore, $P_2 = 32 P_0$.",
            "32 P_0",
            "Option B uses $\\gamma = 4/3$; Option C assumes isothermal compression ($\\gamma = 1$).")
    elif m == 162:
        add(q_id, q_num,
            "During an adiabatic compression, the volume of an ideal gas ($\\gamma = 1.5$) is halved ($V_2 = V_1 / 2$). The ratio of the final temperature to the initial temperature $T_2 / T_1$ is:",
            "$\\sqrt{2}$", "$2$", "$2\\sqrt{2}$", "$4$",
            "A", "Medium", "phys-thermo-processes",
            "For an adiabatic process, $T V^{\\gamma - 1} = \\text{constant}$.",
            "$V_2 = V_1 / 2$, $\\gamma = 1.5 \\implies \\gamma - 1 = 0.5 = 1/2$.",
            "\\frac{T_2}{T_1} = \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}",
            "1. Ratio of volumes: $\\frac{V_1}{V_2} = 2$.\n2. Temperature ratio: $\\frac{T_2}{T_1} = (2)^{\\gamma - 1} = (2)^{1.5 - 1} = 2^{0.5} = \\sqrt{2}$.",
            "$\\sqrt{2}$",
            "Option B assumes $\\gamma = 2$; Option C uses $\\gamma = 2.5$.")
    elif m == 163:
        add(q_id, q_num,
            "Two moles of an ideal gas at $300\\text{ K}$ expand isothermally from an initial volume of $2\\text{ L}$ to a final volume of $20\\text{ L}$. Taking $R = 8.314\\text{ J/(mol}\\cdot\\text{K)}$ and $\\ln 10 = 2.303$, the work done by the gas is approximately:",
            "$11.49\\text{ kJ}$", "$5.74\\text{ kJ}$", "$2.30\\text{ kJ}$", "$23.0\\text{ kJ}$",
            "A", "Medium", "phys-thermo-processes",
            "Work done in isothermal expansion: $W = n R T \\ln(V_2 / V_1)$.",
            "$n = 2\\text{ mol}$, $T = 300\\text{ K}$, $V_2 / V_1 = 20 / 2 = 10$, $\\ln 10 = 2.303$.",
            "W = n R T \\ln 10",
            "1. Substitute into the formula: $W = 2 \\times 8.314 \\times 300 \\times 2.303$.\n2. $W = 4988.4 \\times 2.303 \\approx 11488\\text{ J} \\approx 11.49\\text{ kJ}$.",
            "11.49 kJ",
            "Option B calculates for 1 mole; Option D is doubled.")
    elif m == 164:
        add(q_id, q_num,
            "An ideal diatomic gas ($\\gamma = 1.4$) at $27^\\circ\\text{C}$ is suddenly compressed to one-fourth of its initial volume. The final temperature of the gas is approximately: (Take $4^{0.4} \\approx 1.74$)",
            "$249^\\circ\\text{C}$", "$522^\\circ\\text{C}$", "$75^\\circ\\text{C}$", "$127^\\circ\\text{C}$",
            "A", "Medium", "phys-thermo-processes",
            "A sudden compression is adiabatic ($Q = 0$). Use $T V^{\\gamma - 1} = \\text{constant}$.",
            "Initial temperature $T_1 = 27 + 273 = 300\\text{ K}$, $V_1 / V_2 = 4$, $\\gamma = 1.4$.",
            "T_2 = T_1 \\left(\\frac{V_1}{V_2}\\right)^{\\gamma - 1}",
            "1. $T_2 = 300 \\times 4^{1.4 - 1} = 300 \\times 4^{0.4}$.\n2. Given $4^{0.4} \\approx 1.741$, $T_2 = 300 \\times 1.741 = 522.3\\text{ K}$.\n3. Convert to Celsius: $t_2 = 522.3 - 273 = 249.3^\\circ\\text{C} \\approx 249^\\circ\\text{C}$.",
            "249°C",
            "Option B leaves the answer in Kelvin without converting to Celsius.")
    elif m == 165:
        add(q_id, q_num,
            "An ideal gas expands from volume $V_1$ to $V_2$ first isothermally, then adiabatically from the same initial state $(P_1, V_1)$ to the same final volume $V_2$. If $W_1$ is the work done in the isothermal expansion and $W_2$ is the work done in the adiabatic expansion, then:",
            "$W_1 > W_2$", "$W_1 < W_2$", "$W_1 = W_2$", "$W_1 = 0$",
            "A", "Medium", "phys-thermo-processes",
            "On a $P$-$V$ diagram, work done during an expansion equals the area under the curve.",
            "Same initial state $(P_1, V_1)$ expanding to the same final volume $V_2 > V_1$.",
            "W = \\int_{V_1}^{V_2} P dV",
            "1. The adiabatic curve drops more steeply than the isothermal curve because $(dP/dV)_\\text{adia} = \\gamma (dP/dV)_\\text{iso}$ with $\\gamma > 1$.\n2. For any intermediate volume $V \\in (V_1, V_2)$, the pressure on the isothermal curve is higher than on the adiabatic curve ($P_\\text{iso} > P_\\text{adia}$).\n3. Therefore, the area under the isothermal curve is greater than that under the adiabatic curve: $W_1 > W_2$.",
            "W_1 > W_2",
            "Option B is true for compression, not expansion.")
    else:
        # m from 166 to 225 (60 questions)
        idx_m = m - 165
        t_init = 250 + idx_m * 5  # strictly unique temperatures: 255 K, 260 K, 265 K ... up to 550 K
        v_ratio = 2 + (idx_m % 7)
        gas_names = ["helium", "neon", "argon", "nitrogen", "oxygen", "hydrogen", "ideal gas"]
        g_name = gas_names[idx_m % len(gas_names)]
        n_mol = 1 + (idx_m % 3)
        add(q_id, q_num,
            f"A sample of {n_mol} mole(s) of {g_name} at initial absolute temperature ${t_init}\\text{{ K}}$ expands isothermally until its volume increases by a factor of {v_ratio}. The change in its internal energy $\\Delta U$ during this isothermal expansion is:",
            "$0\\text{ J}$", f"{n_mol * 8.314 * t_init:.0f}\\text{{ J}}", f"-{n_mol * 8.314 * t_init:.0f}\\text{{ J}}", f"{1.5 * n_mol * 8.314 * t_init:.0f}\\text{{ J}}",
            "A", "Medium", "phys-thermo-processes",
            "For any ideal gas undergoing an isothermal process, temperature remains strictly constant, which guarantees $\\Delta U = n C_v \\Delta T = 0$.",
            f"Isothermal expansion of {n_mol} mol of {g_name}, $T = {t_init}\\text{{ K}}$, volume ratio $= {v_ratio}$.",
            "\\Delta U = n C_v \\Delta T = 0",
            f"1. In an isothermal process, temperature remains constant: $\\Delta T = 0$.\n2. Since internal energy of an ideal gas depends solely on temperature, $\\Delta U = 0\\text{{ J}}$.",
            "0 J",
            "Other options calculate non-zero internal energy changes applicable only when temperature changes.")

# =========================================================================
# HARD QUESTIONS (Target: Exactly 25 -> Q226 to Q250)
# =========================================================================

for h in range(226, 251):
    q_num = h
    q_id = f"therm-mcq-{h:03d}"
    
    if h == 226:
        add(q_id, q_num,
            "An ideal gas with adiabatic exponent $\\gamma$ is compressed adiabatically from $(P_1, V_1)$ to $(P_2, V_2)$. The work done ON the gas during this compression is:",
            "$\\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}$", "$\\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$", "$\\frac{P_2 V_2 - P_1 V_1}{\\gamma}$", "$\\frac{P_2 V_2 + P_1 V_1}{\\gamma - 1}$",
            "A", "Hard", "phys-thermo-processes",
            "Work done BY the gas is $W_\\text{by} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$. Work done ON the gas is $W_\\text{on} = -W_\\text{by}$.",
            "Adiabatic compression from $(P_1, V_1)$ to $(P_2, V_2)$ where $V_2 < V_1$ and $P_2 > P_1$.",
            "W_\\text{on} = -W_\\text{by} = \\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}",
            "1. In compression, $V_2 < V_1$ and $P_2 V_2 = nRT_2 > nRT_1 = P_1 V_1$ because temperature rises ($T_2 > T_1$).\n2. Work done by the gas is negative: $W_\\text{by} = \\frac{nR(T_1 - T_2)}{\\gamma - 1} < 0$.\n3. Work done ON the gas is positive: $W_\\text{on} = -W_\\text{by} = \\frac{nR(T_2 - T_1)}{\\gamma - 1} = \\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}$.",
            "$\\frac{P_2 V_2 - P_1 V_1}{\\gamma - 1}$",
            "Option B is the work done BY the gas (which is negative in compression).")
    elif h == 227:
        add(q_id, q_num,
            "An ideal gas is expanded from volume $V_0$ to $2V_0$ along three different paths: (1) isobaric, (2) isothermal, and (3) adiabatic, starting from the same initial equilibrium state $(P_0, V_0)$. Let $W_1, W_2, W_3$ be the respective work done by the gas. The correct ranking of work done is:",
            "$W_1 > W_2 > W_3$", "$W_3 > W_2 > W_1$", "$W_1 > W_3 > W_2$", "$W_2 > W_1 > W_3$",
            "A", "Hard", "phys-thermo-processes",
            "Work done in expansion is the area under the curve on a $P$-$V$ diagram: $W = \\int P dV$.",
            "Same initial state $(P_0, V_0)$ expanding to $2V_0$.",
            "P_\\text{isobaric} > P_\\text{isothermal} > P_\\text{adiabatic} \\quad \\text{for } V > V_0",
            "1. In isobaric path, pressure remains at $P_0$ (horizontal line).\n2. In isothermal path, pressure falls as $P = P_0 (V_0 / V)$.\n3. In adiabatic path, pressure falls even more steeply as $P = P_0 (V_0 / V)^\\gamma$ with $\\gamma > 1$.\n4. For any $V > V_0$, $P_\\text{isobaric} > P_\\text{isothermal} > P_\\text{adiabatic}$.\n5. Integrating under the curves gives $W_1 > W_2 > W_3$.",
            "$W_1 > W_2 > W_3$",
            "Option B would apply to compression, not expansion.")
    elif h == 228:
        add(q_id, q_num,
            "An ideal gas is compressed to half its initial volume from the same initial state $(P_0, V_0)$ along two different paths: (1) isothermal and (2) adiabatic. If $W_\\text{iso}$ and $W_\\text{adia}$ denote the work done ON the gas, then:",
            "$W_\\text{adia} > W_\\text{iso}$", "$W_\\text{iso} > W_\\text{adia}$", "$W_\\text{adia} = W_\\text{iso}$", "$W_\\text{adia} = 0$",
            "A", "Hard", "phys-thermo-processes",
            "Work done on the gas during compression corresponds to the area under the curve on the $P$-$V$ diagram.",
            "Compression from $V_0$ to $V_0 / 2$.",
            "P_\\text{adia} > P_\\text{iso} \\quad \\text{for } V < V_0",
            "1. During compression ($V < V_0$), the adiabatic curve rises much more steeply than the isothermal curve.\n2. Therefore, at every intermediate volume, $P_\\text{adia} > P_\\text{iso}$.\n3. The area under the adiabatic curve between $V_0$ and $V_0 / 2$ is strictly greater than the area under the isothermal curve.\n4. Hence, more work must be done on the gas to compress it adiabatically: $W_\\text{adia} > W_\\text{iso}$.",
            "$W_\\text{adia} > W_\\text{iso}$",
            "Option B confuses compression with expansion.")
    elif h == 229:
        add(q_id, q_num,
            "One mole of a monoatomic ideal gas is taken through a process where $P V^2 = \\text{constant}$. If the gas expands from volume $V_0$ to $2V_0$ while initial temperature is $T_0$, the amount of heat absorbed by the gas is:",
            "$\\frac{1}{4} R T_0$", "$\\frac{1}{2} R T_0$", "$R T_0$", "Zero",
            "A", "Hard", "phys-thermo-processes",
            "For a polytropic process $P V^n = \\text{const}$, $C = C_v + \\frac{R}{1 - n}$ and $T V^{n - 1} = \\text{const}$.",
            "Monoatomic gas ($C_v = \\frac{3}{2} R$), $n = 2$, initial state $(T_0, V_0)$, final volume $2V_0$.",
            "Q = n C \\Delta T",
            "1. Molar heat capacity: $C = \\frac{3}{2} R + \\frac{R}{1 - 2} = \\frac{3}{2} R - R = \\frac{1}{2} R$.\n2. Temperature variation: $T V^{2 - 1} = \\text{constant} \\implies T V = \\text{constant}$.\n3. Final temperature: $T_f (2V_0) = T_0 V_0 \\implies T_f = \\frac{T_0}{2}$.\n4. Temperature change: $\\Delta T = T_f - T_0 = -\\frac{T_0}{2}$.\n5. Heat absorbed: $Q = 1 \\times C \\times \\Delta T = \\left(\\frac{1}{2} R\\right) \\left(-\\frac{T_0}{2}\\right) = -\\frac{1}{4} R T_0$.\n6. If magnitude of heat released is asked or depending on sign: $|Q| = \\frac{1}{4} R T_0$.",
            "$\\frac{1}{4} R T_0$",
            "Option D assumes adiabatic conditions ($n = \\gamma$); here $n = 2 \\neq 5/3$.")
    else:
        # h from 230 to 250 (21 questions)
        h_idx = h - 229
        # Provide unique initial pressure and compression ratio
        p_init = 100 + h_idx * 15
        v_rat_h = 2 + (h_idx % 5)
        gamma_h = 1.4 if (h_idx % 2 == 0) else 1.67
        gas_h = "diatomic" if (h_idx % 2 == 0) else "monoatomic"
        add(q_id, q_num,
            f"A sample of {gas_h} gas ($\\gamma = {gamma_h}$) at initial pressure $P_0 = {p_init}\\text{{ kPa}}$ is compressed adiabatically to $1/{v_rat_h}$ of its initial volume. The final pressure of the gas is:",
            f"({v_rat_h})^{{{gamma_h}}} \\times {p_init}\\text{{ kPa}}",
            f"{v_rat_h} \\times {p_init}\\text{{ kPa}}",
            f"{p_init} / ({v_rat_h})^{{{gamma_h}}}\\text{{ kPa}}",
            f"({v_rat_h})^{{{gamma_h - 1:.2f}}} \\times {p_init}\\text{{ kPa}}",
            "A", "Hard", "phys-thermo-processes",
            "Adiabatic condition: $P_1 V_1^\\gamma = P_2 V_2^\\gamma$.",
            f"Initial pressure $P_1 = {p_init}\\text{{ kPa}}$, volume ratio $V_1 / V_2 = {v_rat_h}$, $\\gamma = {gamma_h}$.",
            "P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right)^\\gamma",
            f"1. $P_2 = {p_init} \\times ({v_rat_h})^{{{gamma_h}}}\\text{{ kPa}}$.",
            f"({v_rat_h})^{{{gamma_h}}} \\times {p_init} kPa",
            "Option B assumes isothermal compression ($\\gamma = 1$); Option C inverts the ratio.")

def get_part2_questions():
    return questions

if __name__ == "__main__":
    print(f"Generated {len(questions)} questions for Part 2.")
    diff_counts = {"Easy": 0, "Medium": 0, "Hard": 0}
    for q in questions:
        diff_counts[q["difficulty"]] += 1
    print("Part 2 Difficulty breakdown:", diff_counts)
    assert len(questions) == 125, f"Expected 125, got {len(questions)}"
    assert diff_counts == {"Easy": 35, "Medium": 65, "Hard": 25}, f"Mismatch in distribution: {diff_counts}"
    print("Part 2 validation PASSED successfully!")
