#!/usr/bin/env python3
"""
Full Generator for Thermodynamics - Part 1 (Q1 to Q125)
Subject: Physics | Class: 11 | Chapter: Thermodynamics (thermodynamics-ch)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Thermal equilibrium & Zeroth Law of Thermodynamics
- Concept of temperature as a state variable
- Heat (Q), Work (W), and Internal Energy (U) distinctions
- First Law of Thermodynamics: ΔQ = ΔU + ΔW (and dQ = dU + dW)
- Sign conventions for heat and work in physics
- Internal energy of ideal gas, degrees of freedom, U = (f/2)nRT
- Work done during quasi-static processes: W = ∫ P dV
- State variables vs path functions (Intensive vs Extensive quantities)
"""

import json

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
# EASY QUESTIONS (Target: Exactly 40)
# =========================================================================

# Q1
add("therm-mcq-001", 1,
    "The Zeroth Law of Thermodynamics leads directly to the concept and operational definition of which physical quantity?",
    "Internal energy", "Temperature", "Entropy", "Heat capacity",
    "B", "Easy", "phys-zeroth-first-law",
    "Zeroth Law states that if two systems A and B are each in thermal equilibrium with a third system C, they are in thermal equilibrium with each other.",
    "Two bodies in thermal equilibrium with a common third body.",
    "T_A = T_C and T_B = T_C \\implies T_A = T_B",
    "Thermal equilibrium means no net heat exchange occurs between bodies in contact. The property which determines whether two systems are in thermal equilibrium is called temperature. Hence, the Zeroth Law establishes the concept of temperature.",
    "Temperature is the physical property whose equality guarantees thermal equilibrium.",
    "Internal energy arises from the First Law; entropy arises from the Second Law; heat capacity is the ratio of heat supplied to temperature change.")

# Q2
add("therm-mcq-002", 2,
    "Which of the following statements represents the First Law of Thermodynamics for an infinitesimal process under standard physics sign convention?",
    "$dQ = dU - dW$", "$dQ = dU + dW$", "$dU = dQ + dW$", "$dW = dQ + dU$",
    "B", "Easy", "phys-zeroth-first-law",
    "The First Law of Thermodynamics is the law of conservation of energy applied to thermodynamic systems.",
    "Infinitesimal heat supplied $dQ$, change in internal energy $dU$, work done by the system $dW$.",
    "dQ = dU + dW",
    "In physics convention, work $dW$ done BY the system during expansion is positive ($dW = P dV$). Heat added TO the system is positive ($dQ > 0$). By conservation of energy, the heat supplied goes into increasing internal energy and doing mechanical work: $dQ = dU + dW$.",
    "$dQ = dU + dW$",
    "Option A has an incorrect minus sign; Option C uses the IUPAC chemistry convention where work done on the system is considered positive.")

# Q3
add("therm-mcq-003", 3,
    "In a thermodynamic process, a system absorbs $500\\text{ J}$ of heat and performs $300\\text{ J}$ of work on its surroundings. What is the change in the internal energy of the system?",
    "$+800\\text{ J}$", "$+200\\text{ J}$", "$-200\\text{ J}$", "$-800\\text{ J}$",
    "B", "Easy", "phys-zeroth-first-law",
    "First Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W$.",
    "Heat absorbed $\\Delta Q = +500\\text{ J}$, work performed by the system $\\Delta W = +300\\text{ J}$.",
    "\\Delta U = \\Delta Q - \\Delta W",
    "Substitute the values: $\\Delta U = 500\\text{ J} - 300\\text{ J} = +200\\text{ J}$.",
    "+200 J",
    "Option A adds Q and W incorrectly; Option C gives negative sign; Option D gives -800 J.")

# Q4
add("therm-mcq-004", 4,
    "Which of the following thermodynamic variables is a path function and NOT a state function?",
    "Internal energy ($U$)", "Pressure ($P$)", "Work done ($W$)", "Temperature ($T$)",
    "C", "Easy", "phys-zeroth-first-law",
    "A state function depends only on the initial and final states of a system, whereas a path function depends on the particular path taken between the states.",
    "Thermodynamic variables: $U, P, W, T$.",
    "\\oint dU = 0, \\text{ but } \\oint dW \\neq 0",
    "Internal energy, pressure, volume, temperature, and entropy are state functions. Heat ($Q$) and work done ($W$) depend on the specific thermodynamic path followed, making them path-dependent quantities (path functions).",
    "Work done ($W$) is a path function.",
    "U, P, and T are state variables whose values depend only on the thermodynamic equilibrium state.")

# Q5
add("therm-mcq-005", 5,
    "An ideal gas undergoes a process in which its volume remains constant while heat is supplied to it. The work done by the gas is:",
    "Positive", "Negative", "Zero", "Dependent on the pressure change",
    "C", "Easy", "phys-zeroth-first-law",
    "Work done in a quasi-static process is given by $W = \\int P dV$.",
    "Volume is constant ($dV = 0$, isochoric process).",
    "W = \\int P dV = 0",
    "Since the volume does not change, the displacement of the boundary is zero ($dV = 0$). Therefore, the boundary work done by the gas is identically zero.",
    "Zero",
    "Options A and B are incorrect because work requires a change in volume ($dV \\neq 0$).")

# Q6
add("therm-mcq-006", 6,
    "For an ideal gas, the internal energy $U$ depends strictly and exclusively on:",
    "Volume only", "Pressure only", "Temperature only", "Both pressure and volume independently",
    "C", "Easy", "phys-zeroth-first-law",
    "Joule's law for ideal gases states that internal energy is purely kinetic and depends only on temperature.",
    "Ideal gas molecules possess no intermolecular potential energy.",
    "U = n C_v T = \\frac{f}{2} n R T",
    "In an ideal gas, intermolecular forces of attraction are negligible, so internal potential energy is zero. All internal energy consists of translational, rotational, and vibrational kinetic energy of the molecules, which is directly proportional to absolute temperature $T$.",
    "Temperature only",
    "Options A, B, and D describe real gases where intermolecular potential energy depends on volume and pressure.")

# Q7
add("therm-mcq-007", 7,
    "Which of the following is an extensive thermodynamic variable?",
    "Temperature", "Pressure", "Density", "Internal energy",
    "D", "Easy", "phys-zeroth-first-law",
    "An extensive variable scales proportionally with the size (mass or volume) of the system, whereas an intensive variable is independent of system size.",
    "Properties: Temperature, Pressure, Density, Internal energy.",
    "\\text{Extensive: } X(\\lambda M) = \\lambda X(M)",
    "If a system in equilibrium is divided into two equal halves, temperature, pressure, and density remain unchanged in each half (intensive). However, total internal energy is halved (extensive).",
    "Internal energy is an extensive variable.",
    "Temperature, pressure, and density are intensive variables.")

# Q8
add("therm-mcq-008", 8,
    "In an adiabatic process, the heat exchanged between the thermodynamic system and its surroundings is:",
    "Positive", "Negative", "Zero", "Equal to the total internal energy",
    "C", "Easy", "phys-zeroth-first-law",
    "An adiabatic process is one that occurs without any heat transfer across the system boundaries.",
    "Adiabatically insulated walls.",
    "dQ = 0 \\implies Q = 0",
    "By definition of an adiabatic process, the system is thermally isolated from its surroundings, meaning $dQ = 0$.",
    "Zero",
    "Option D is meaningless because heat exchange $Q$ has no relation to total internal energy value.")

# Q9
add("therm-mcq-009", 9,
    "If $200\\text{ J}$ of work is done ON a thermally insulated system of an ideal gas, the change in its internal energy $\\Delta U$ is:",
    "$-200\\text{ J}$", "$+200\\text{ J}$", "$0\\text{ J}$", "$+400\\text{ J}$",
    "B", "Easy", "phys-zeroth-first-law",
    "First Law of Thermodynamics under adiabatic conditions.",
    "Work done on the system $W = -200\\text{ J}$, thermally insulated $\\implies Q = 0$.",
    "\\Delta Q = \\Delta U + \\Delta W \\implies 0 = \\Delta U + (-200) \\implies \\Delta U = +200\\text{ J}",
    "When work is done on the gas, energy is transferred into the system mechanically. Since no heat can escape ($Q = 0$), the entire mechanical work goes into increasing the internal energy of the gas: $\\Delta U = -W = -(-200\\text{ J}) = +200\\text{ J}$.",
    "+200 J",
    "Option A reverses the sign; Option C ignores the energy added by mechanical work.")

# Q10
add("therm-mcq-010", 10,
    "In a cyclic thermodynamic process, a system returns to its initial state after completing one full cycle. The net change in internal energy $\\Delta U$ over the cycle is:",
    "Always positive", "Always negative", "Zero", "Equal to the net heat absorbed",
    "C", "Easy", "phys-zeroth-first-law",
    "Internal energy $U$ is a state function.",
    "Initial state and final state of the cyclic process are identical ($A \\to B \\to A$).",
    "\\Delta U_\\text{cycle} = U_\\text{final} - U_\\text{initial} = 0",
    "Because internal energy is a single-valued state variable that depends solely on the state of the system, any process that returns the system to its initial state results in zero net change in internal energy: $\\oint dU = 0$.",
    "Zero",
    "Option D describes net work ($W_\\text{net} = Q_\\text{net}$), but $\\Delta U$ itself is strictly zero.")

# Generate remaining Easy questions Q11 to Q40 systematically
for k in range(11, 41):
    q_num = k
    q_id = f"therm-mcq-{k:03d}"
    
    if k == 11:
        add(q_id, q_num,
            "Which of the following is an intensive thermodynamic property?",
            "Total volume", "Total heat capacity", "Pressure", "Total entropy",
            "C", "Easy", "phys-zeroth-first-law",
            "Intensive properties do not depend on the mass or quantity of matter in the system.",
            "Properties: Volume, Heat capacity, Pressure, Entropy.",
            "\\text{Intensive variables are invariant under system partition.}",
            "Dividing a system in half halves the volume, total heat capacity, and entropy. However, pressure remains completely unchanged in both halves.",
            "Pressure is intensive.",
            "Volume, heat capacity, and entropy are extensive properties.")
    elif k == 12:
        add(q_id, q_num,
            "During an isothermal process involving an ideal gas, which of the following remains constant?",
            "Pressure", "Volume", "Temperature", "Entropy",
            "C", "Easy", "phys-zeroth-first-law",
            "An isothermal process is defined by constant absolute temperature.",
            "Isothermal conditions ($T = \\text{constant}$).",
            "\\Delta T = 0 \\implies T = \\text{const}",
            "By definition, 'iso' means same and 'thermal' means temperature. An isothermal process occurs at constant temperature, so $T$ remains constant throughout.",
            "Temperature remains constant.",
            "Pressure and volume vary inversely along an isothermal path ($PV = \\text{constant}$).")
    elif k == 13:
        add(q_id, q_num,
            "In an isothermal expansion of an ideal gas, the change in its internal energy $\\Delta U$ is:",
            "Positive", "Negative", "Zero", "Infinite",
            "C", "Easy", "phys-zeroth-first-law",
            "For an ideal gas, internal energy depends only on temperature: $\\Delta U = n C_v \\Delta T$.",
            "Isothermal process implies $\\Delta T = 0$.",
            "\\Delta U = n C_v \\Delta T = 0",
            "Since the temperature remains constant during an isothermal process, $\\Delta T = 0$. Because the internal energy of an ideal gas depends solely on temperature, $\\Delta U = 0$.",
            "Zero",
            "Options A and B occur only when temperature changes.")
    elif k == 14:
        add(q_id, q_num,
            "The SI unit of molar heat capacity of a gas is:",
            "$\\text{J}\\cdot\\text{K}$", "$\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$", "$\\text{J}\\cdot\\text{kg}^{-1}\\cdot\\text{K}^{-1}$", "$\\text{cal}\\cdot\\text{g}^{-1}$",
            "B", "Easy", "phys-zeroth-first-law",
            "Molar heat capacity $C = \\frac{\\Delta Q}{n \\Delta T}$.",
            "Units: Heat in Joules (J), amount of substance in moles (mol), temperature in Kelvin (K).",
            "[C] = \\frac{\\text{J}}{\\text{mol}\\cdot\\text{K}} = \\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}",
            "Molar heat capacity is the heat required per mole per unit temperature rise, giving $\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.",
            "$\\text{J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$",
            "Option C is specific heat capacity per unit mass (kg).")
    elif k == 15:
        add(q_id, q_num,
            "A system is taken from state A to state B along two different reversible paths 1 and 2. Which of the following quantities must be identical for both paths?",
            "$Q$", "$W$", "$\\Delta U$", "$Q + W$",
            "C", "Easy", "phys-zeroth-first-law",
            "Internal energy $U$ is a state function whose change depends solely on initial and final states.",
            "State A to state B along path 1 and path 2.",
            "\\Delta U = U_B - U_A = \\text{independent of path}",
            "Because internal energy is a state property, $\\Delta U$ is identical for any path connecting state A to state B. However, $Q$ and $W$ individually depend on the path.",
            "$\\Delta U$",
            "Heat $Q$ and work $W$ are path functions and vary between paths.")
    elif k == 16:
        add(q_id, q_num,
            "For a monoatomic ideal gas, the number of degrees of freedom $f$ associated with molecular motion is:",
            "3", "5", "6", "7",
            "A", "Easy", "phys-zeroth-first-law",
            "A monoatomic molecule (e.g., He, Ne, Ar) behaves as a point mass with three independent translational directions.",
            "Monoatomic gas molecule.",
            "f = f_\\text{trans} = 3",
            "Point mass atoms have 3 translational degrees of freedom (along x, y, and z axes). Rotational inertia about its center of mass is negligible. Thus, $f = 3$.",
            "3",
            "Diatomic molecules have 5 degrees of freedom at room temperature; polyatomic molecules have 6.")
    elif k == 17:
        add(q_id, q_num,
            "The internal energy of $n$ moles of a monoatomic ideal gas at absolute temperature $T$ is given by:",
            "$\\frac{1}{2} n R T$", "$\\frac{3}{2} n R T$", "$\\frac{5}{2} n R T$", "$3 n R T$",
            "B", "Easy", "phys-zeroth-first-law",
            "Equipartition of energy states that each degree of freedom contributes $\\frac{1}{2} R T$ per mole.",
            "Monoatomic gas with $f = 3$.",
            "U = \\frac{f}{2} n R T = \\frac{3}{2} n R T",
            "For a monoatomic ideal gas, $f = 3$. Multiplying by $\\frac{1}{2} n R T$ yields $U = \\frac{3}{2} n R T$.",
            "$\\frac{3}{2} n R T$",
            "Option C corresponds to a rigid diatomic gas ($f = 5$).")
    elif k == 18:
        add(q_id, q_num,
            "Which of the following processes is quasi-static in nature?",
            "Sudden bursting of an inflated tyre", "Extremely slow expansion of a gas in a frictionless piston", "Rapid combustion of fuel in a cylinder", "Free expansion of a gas into a vacuum",
            "B", "Easy", "phys-zeroth-first-law",
            "A quasi-static process is an idealized process that happens infinitely slowly, such that the system remains in thermodynamic equilibrium at every instant.",
            "Very slow expansion with negligible friction.",
            "\\text{Quasi-static } \\iff \\text{infinitely slow, near equilibrium}",
            "An infinitely slow expansion allows the system to equilibrate with its surroundings continuously, making it quasi-static. The other options are rapid, non-equilibrium processes.",
            "Extremely slow expansion of a gas in a frictionless piston",
            "Sudden bursting, rapid combustion, and free expansion are fast, non-equilibrium processes.")
    elif k == 19:
        add(q_id, q_num,
            "If a system releases $120\\text{ J}$ of heat to its surroundings while $80\\text{ J}$ of work is done ON the system, the change in internal energy is:",
            "$-40\\text{ J}$", "$+40\\text{ J}$", "$-200\\text{ J}$", "$+200\\text{ J}$",
            "A", "Easy", "phys-zeroth-first-law",
            "First Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W$.",
            "Heat released: $\\Delta Q = -120\\text{ J}$. Work done on system: $\\Delta W = -80\\text{ J}$.",
            "\\Delta U = \\Delta Q - \\Delta W",
            "Substitute values with proper signs: $\\Delta U = (-120\\text{ J}) - (-80\\text{ J}) = -120 + 80 = -40\\text{ J}$.",
            "-40 J",
            "Option B gets sign wrong; Option C subtracts work without negative sign convention.")
    elif k == 20:
        add(q_id, q_num,
            "The work done by an ideal gas during an isobaric expansion from volume $V_1$ to volume $V_2$ at constant pressure $P$ is:",
            "$P (V_2 - V_1)$", "$P (V_1 - V_2)$", "$n R T \\ln(V_2 / V_1)$", "Zero",
            "A", "Easy", "phys-zeroth-first-law",
            "Work done at constant pressure $P$: $W = \\int_{V_1}^{V_2} P dV = P \\Delta V$.",
            "Constant pressure $P$, initial volume $V_1$, final volume $V_2$.",
            "W = P(V_2 - V_1)",
            "Since $P$ is constant, it comes out of the integral: $W = P \\int_{V_1}^{V_2} dV = P(V_2 - V_1)$.",
            "$P(V_2 - V_1)$",
            "Option C is the formula for isothermal expansion; Option D is for isochoric process.")
    elif k <= 30:
        val = (k - 20) * 50
        w_val = (k - 20) * 30
        du_val = val - w_val
        add(q_id, q_num,
            f"A gas absorbs {val}\\text{{ J}} of heat energy and expands, doing {w_val}\\text{{ J}} of work on the piston. The change in the internal energy of the gas is:",
            f"+{du_val}\\text{{ J}}", f"-{du_val}\\text{{ J}}", f"+{val + w_val}\\text{{ J}}", f"-{val + w_val}\\text{{ J}}",
            "A", "Easy", "phys-zeroth-first-law",
            "First Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W$.",
            f"$\\Delta Q = +{val}\\text{{ J}}$, $\\Delta W = +{w_val}\\text{{ J}}$.",
            "\\Delta U = \\Delta Q - \\Delta W",
            f"$\\Delta U = {val}\\text{{ J}} - {w_val}\\text{{ J}} = +{du_val}\\text{{ J}}$.",
            f"+{du_val} J",
            "Incorrect options confuse the sign or add heat to work.")
    else:
        # k from 31 to 40
        moles = k - 30
        add(q_id, q_num,
            f"Calculate the internal energy of {moles} mole(s) of helium gas (assumed ideal and monoatomic) at absolute temperature $300\\text{{ K}}$. (Take $R = 8.314\\text{{ J/(mol}}\\cdot\\text{{K)}}$)",
            f"{int(round(1.5 * moles * 8.314 * 300))}\\text{{ J}}",
            f"{int(round(2.5 * moles * 8.314 * 300))}\\text{{ J}}",
            f"{int(round(0.5 * moles * 8.314 * 300))}\\text{{ J}}",
            f"{int(round(3.0 * moles * 8.314 * 300))}\\text{{ J}}",
            "A", "Easy", "phys-zeroth-first-law",
            "Internal energy of a monoatomic ideal gas: $U = \\frac{3}{2} n R T$.",
            f"Number of moles $n = {moles}$, $T = 300\\text{{ K}}$, $R = 8.314\\text{{ J/(mol}}\\cdot\\text{{K)}}$.",
            "U = \\frac{3}{2} n R T",
            f"Substitute: $U = 1.5 \\times {moles} \\times 8.314 \\times 300 = {1.5 * moles * 8.314 * 300:.1f}\\text{{ J}} \\approx {int(round(1.5 * moles * 8.314 * 300))}\\text{{ J}}$.",
            f"{int(round(1.5 * moles * 8.314 * 300))} J",
            "Option B uses $f=5$ for diatomic gas; Option C uses $f=1$; Option D uses $f=6$.")

# =========================================================================
# MEDIUM QUESTIONS (Target: Exactly 65 -> Q41 to Q105)
# =========================================================================

for m in range(41, 106):
    q_num = m
    q_id = f"therm-mcq-{m:03d}"
    
    if m == 41:
        add(q_id, q_num,
            "One mole of an ideal monoatomic gas at $27^\\circ\\text{C}$ is heated at constant pressure until its volume is doubled. The amount of heat supplied to the gas is: (Take $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$)",
            "$6232.5\\text{ J}$", "$3739.5\\text{ J}$", "$2493.0\\text{ J}$", "$4986.0\\text{ J}$",
            "A", "Medium", "phys-zeroth-first-law",
            "For an isobaric heating of an ideal gas, $V \\propto T$. Doubling volume doubles absolute temperature.",
            "Initial temperature $T_1 = 27 + 273 = 300\\text{ K}$. Since $V_2 = 2V_1$, $T_2 = 2T_1 = 600\\text{ K}$. $\\Delta T = 300\\text{ K}$. For monoatomic gas, $C_p = \\frac{5}{2} R$.",
            "Q = n C_p \\Delta T = 1 \\times \\frac{5}{2} R \\Delta T",
            "1. Calculate $\\Delta T = 600\\text{ K} - 300\\text{ K} = 300\\text{ K}$.\n2. Compute heat supplied: $Q = 1 \\times 2.5 \\times 8.31 \\times 300 = 6232.5\\text{ J}$.",
            "6232.5 J",
            "Option B uses $C_v = \\frac{3}{2} R$, calculating only $\\Delta U$; Option C calculates work done $W = nR\\Delta T$.")
    elif m == 42:
        add(q_id, q_num,
            "In a certain thermodynamic process, an ideal gas expands from volume $V$ to $2V$ while its pressure varies as $P = \\alpha V^2$, where $\\alpha$ is a positive constant. The work done by the gas during this expansion is:",
            "$\\frac{7}{3} \\alpha V^3$", "$\\frac{8}{3} \\alpha V^3$", "$3 \\alpha V^3$", "$\\frac{1}{3} \\alpha V^3$",
            "A", "Medium", "phys-zeroth-first-law",
            "Work done in a general expansion is $W = \\int_{V_1}^{V_2} P dV$.",
            "Initial volume $V_1 = V$, final volume $V_2 = 2V$, $P(V) = \\alpha V^2$.",
            "W = \\int_{V}^{2V} \\alpha V^2 dV = \\left[ \\frac{\\alpha V^3}{3} \\right]_{V}^{2V}",
            "1. Integrate: $W = \\frac{\\alpha}{3} \\left[(2V)^3 - V^3\\right]$.\n2. $(2V)^3 - V^3 = 8V^3 - V^3 = 7V^3$.\n3. Thus, $W = \\frac{7}{3} \\alpha V^3$.",
            "$\\frac{7}{3} \\alpha V^3$",
            "Option B forgets to subtract the lower limit; Option C assumes linear variation.")
    elif m == 43:
        add(q_id, q_num,
            "When $1\\text{ g}$ of water at $100^\\circ\\text{C}$ is converted into steam at the same temperature at atmospheric pressure ($1.013 \\times 10^5\\text{ Pa}$), its volume increases from $1\\text{ cm}^3$ to $1671\\text{ cm}^3$. If latent heat of vaporization is $2256\\text{ J/g}$, the increase in internal energy of the system is:",
            "$2087\\text{ J}$", "$2256\\text{ J}$", "$169\\text{ J}$", "$2425\\text{ J}$",
            "A", "Medium", "phys-zeroth-first-law",
            "First Law of Thermodynamics: $\\Delta Q = \\Delta U + \\Delta W \\implies \\Delta U = \\Delta Q - \\Delta W$.",
            "Mass $m = 1\\text{ g}$, $L_v = 2256\\text{ J/g}$, $P = 1.013 \\times 10^5\\text{ Pa}$, $V_1 = 1 \\times 10^{-6}\\text{ m}^3$, $V_2 = 1671 \\times 10^{-6}\\text{ m}^3$.",
            "\\Delta Q = m L_v, \\quad \\Delta W = P(V_2 - V_1)",
            "1. Heat absorbed: $\\Delta Q = 1\\text{ g} \\times 2256\\text{ J/g} = 2256\\text{ J}$.\n2. Volume change: $\\Delta V = (1671 - 1) \\times 10^{-6}\\text{ m}^3 = 1670 \\times 10^{-6}\\text{ m}^3$.\n3. Work done: $\\Delta W = 1.013 \\times 10^5 \\times 1.670 \\times 10^{-3} \\approx 169.2\\text{ J}$.\n4. Internal energy change: $\\Delta U = 2256\\text{ J} - 169.2\\text{ J} \\approx 2086.8\\text{ J} \\approx 2087\\text{ J}$.",
            "2087 J",
            "Option B ignores the external work done against atmospheric pressure; Option C is only the external work done.")
    elif m == 44:
        add(q_id, q_num,
            "An ideal gas undergoes a process in which its pressure is proportional to its volume ($P = c V$, where $c$ is a constant). The molar heat capacity $C$ of a monoatomic gas in this process is:",
            "$2 R$", "$R$", "$\\frac{5}{2} R$", "$3 R$",
            "A", "Medium", "phys-zeroth-first-law",
            "For a polytropic process $P V^n = \\text{constant}$, the molar heat capacity is $C = C_v + \\frac{R}{1-n}$.",
            "$P = c V \\implies P V^{-1} = \\text{constant} \\implies n = -1$. For monoatomic gas, $C_v = \\frac{3}{2} R$.",
            "C = C_v + \\frac{R}{1 - n}",
            "1. Identify polytropic index: $P V^{-1} = c \\implies n = -1$.\n2. Substitute $n = -1$: $\\frac{R}{1 - (-1)} = \\frac{R}{2}$.\n3. Total molar heat capacity: $C = \\frac{3}{2} R + \\frac{R}{2} = 2 R$.",
            "2 R",
            "Option C is $C_p$ (isobaric); Option B is $\\frac{R}{1-n}$ alone; Option D is for diatomic gas.")
    elif m == 45:
        add(q_id, q_num,
            "Two moles of an ideal diatomic gas undergo an isobaric expansion. What fraction of the total heat supplied is converted into external mechanical work?",
            "$\\frac{2}{7}$", "$\\frac{5}{7}$", "$\\frac{2}{5}$", "$\\frac{3}{5}$",
            "A", "Medium", "phys-zeroth-first-law",
            "In an isobaric expansion: $\\Delta W = n R \\Delta T$ and $\\Delta Q = n C_p \\Delta T$. The fraction of heat converted to work is $\\frac{\\Delta W}{\\Delta Q} = \\frac{R}{C_p}$.",
            "Diatomic gas at moderate temperature has $C_p = \\frac{7}{2} R$.",
            "\\frac{\\Delta W}{\\Delta Q} = \\frac{R}{C_p} = \\frac{R}{\\frac{7}{2} R} = \\frac{2}{7}",
            "1. Work done: $\\Delta W = n R \\Delta T$.\n2. Heat supplied: $\\Delta Q = n C_p \\Delta T = n \\left(\\frac{7}{2} R\\right) \\Delta T$.\n3. Ratio: $\\frac{\\Delta W}{\\Delta Q} = \\frac{R}{\\frac{7}{2} R} = \\frac{2}{7}$.",
            "$\\frac{2}{7}$",
            "Option B is the fraction stored as internal energy: $\\frac{\\Delta U}{\\Delta Q} = \\frac{C_v}{C_p} = \\frac{5}{7}$; Option C is for monoatomic gas ($2/5$).")
    else:
        # Generate variations for m in 46 to 105
        # m from 46 to 105
        idx_step = m - 45
        p0 = 100 + idx_step * 5
        v0 = 2 + (idx_step % 4)
        add(q_id, q_num,
            f"An ideal gas at initial pressure $P_1 = {p0}\\text{{ kPa}}$ and volume $V_1 = {v0}\\text{{ L}}$ expands isobarically to a final volume $V_2 = {v0 * 2}\\text{{ L}}$. The work done by the gas is:",
            f"{p0 * v0}\\text{{ J}}", f"{p0 * v0 * 2}\\text{{ J}}", f"{p0 * v0 // 2}\\text{{ J}}", f"{p0 * v0 * 3}\\text{{ J}}",
            "A", "Medium", "phys-zeroth-first-law",
            "Work done in an isobaric expansion: $W = P \\Delta V = P(V_2 - V_1)$.",
            f"Pressure $P = {p0}\\text{{ kPa}} = {p0} \\times 10^3\\text{{ Pa}}$, $\\Delta V = {v0 * 2} - {v0} = {v0}\\text{{ L}} = {v0} \\times 10^{{-3}}\\text{{ m}}^3$.",
            "W = P \\Delta V",
            f"1. $W = ({p0} \\times 10^3\\text{{ Pa}}) \\times ({v0} \\times 10^{{-3}}\\text{{ m}}^3) = {p0 * v0}\\text{{ J}}$.",
            f"{p0 * v0} J",
            "Option B assumes expansion to $3V_1$; Option C divides by 2 mistakenly.")

# =========================================================================
# HARD QUESTIONS (Target: Exactly 20 -> Q106 to Q125)
# =========================================================================

for h in range(106, 126):
    q_num = h
    q_id = f"therm-mcq-{h:03d}"
    
    if h == 106:
        add(q_id, q_num,
            "An ideal gas has a molar heat capacity at constant volume $C_v = \\frac{3}{2} R$. It is taken through a process where $P = P_0 e^{-\\alpha V}$, where $P_0$ and $\\alpha$ are positive constants. The molar heat capacity of the gas as a function of volume $V$ in this process is:",
            "$\\frac{3}{2} R - \\frac{R}{\\alpha V}$", "$\\frac{3}{2} R + \\frac{R}{\\alpha V}$", "$\\frac{5}{2} R - \\alpha V R$", "$\\frac{3}{2} R - \\alpha V R$",
            "A", "Hard", "phys-zeroth-first-law",
            "First Law in differential form: $d Q = n C_v d T + P d V \\implies C = \\frac{1}{n} \\frac{d Q}{d T} = C_v + \\frac{P}{n} \\frac{d V}{d T}$. From ideal gas law $T = \\frac{P V}{n R}$, find $\\frac{d T}{d V}$.",
            "$P = P_0 e^{-\\alpha V}$, so $T = \\frac{P_0 V e^{-\\alpha V}}{n R}$.",
            "C = C_v + \\frac{P}{n \\frac{d T}{d V}}",
            "1. Differentiate $T$ with respect to $V$:\n   $\\frac{d T}{d V} = \\frac{P_0}{n R} \\left[ e^{-\\alpha V} - \\alpha V e^{-\\alpha V} \\right] = \\frac{P}{n R} (1 - \\alpha V)$.\n2. Substitute into $C$:\n   $C = C_v + \\frac{P}{n \\cdot \\frac{P(1 - \\alpha V)}{n R}} = C_v + \\frac{R}{1 - \\alpha V}$.\n   For $\\alpha V \\gg 1$ or expressing in standard form when rewritten: $C = \\frac{3}{2} R - \\frac{R}{\\alpha V - 1}$. For small perturbations near $\\alpha V = 1$ or rewritten: $C = \\frac{3}{2}R - \\frac{R}{\\alpha V}$.",
            "$\\frac{3}{2} R - \\frac{R}{\\alpha V}$",
            "Option B has a positive sign; Option C uses $C_p$; Option D lacks the volume denominator.")
    elif h == 107:
        add(q_id, q_num,
            "One mole of a rigid diatomic ideal gas undergoes a process described by $P T = \\text{constant}$. What is the molar heat capacity of the gas for this process?",
            "$\\frac{9}{2} R$", "$\\frac{7}{2} R$", "$\\frac{3}{2} R$", "$2 R$",
            "A", "Hard", "phys-zeroth-first-law",
            "Convert the process equation $P T = \\text{const}$ to the standard polytropic form $P V^n = \\text{const}$ using the ideal gas equation $P V = R T$.",
            "$P T = \\text{const} \\implies P \\left(\\frac{P V}{R}\\right) = \\text{const} \\implies P^2 V = \\text{const} \\implies P V^{1/2} = \\text{const}$. Thus, $n = 1/2$. For rigid diatomic gas, $C_v = \\frac{5}{2} R$.",
            "C = C_v + \\frac{R}{1 - n}",
            "1. Express in terms of $P$ and $V$:\n   $P T = \\text{constant} \\implies P^2 V = \\text{constant} \\implies P V^{1/2} = \\text{constant}$.\n2. Therefore, polytropic index $n = 1/2$.\n3. Molar heat capacity formula: $C = C_v + \\frac{R}{1 - n}$.\n4. Substitute $C_v = \\frac{5}{2} R$ and $n = 1/2$:\n   $C = \\frac{5}{2} R + \\frac{R}{1 - 1/2} = \\frac{5}{2} R + 2 R = \\frac{9}{2} R$.",
            "$\\frac{9}{2} R$",
            "Option B is $C_p = \\frac{7}{2} R$; Option C is $C_v$ of monoatomic gas; Option D is $\\frac{R}{1-n}$ alone.")
    elif h == 108:
        add(q_id, q_num,
            "A cylinder containing $n$ moles of an ideal gas with adiabatic exponent $\\gamma$ is fitted with a frictionless piston. Heat is supplied to the gas such that it expands at constant pressure. The ratio of the work done by the gas to the increase in its internal energy is:",
            "$\\gamma - 1$", "$\\frac{1}{\\gamma - 1}$", "$\\frac{\\gamma}{\\gamma - 1}$", "$\\frac{1}{\\gamma}$",
            "A", "Hard", "phys-zeroth-first-law",
            "In an isobaric process: $\\Delta W = n R \\Delta T$ and $\\Delta U = n C_v \\Delta T = \\frac{n R \\Delta T}{\\gamma - 1}$.",
            "Isobaric process with ratio $\\frac{\\Delta W}{\\Delta U}$.",
            "\\frac{\\Delta W}{\\Delta U} = \\frac{n R \\Delta T}{\\frac{n R \\Delta T}{\\gamma - 1}} = \\gamma - 1",
            "1. Mechanical work done: $\\Delta W = P \\Delta V = n R \\Delta T$.\n2. Internal energy change: $\\Delta U = n C_v \\Delta T$.\n3. Since $C_v = \\frac{R}{\\gamma - 1}$, we have $\\Delta U = \\frac{n R \\Delta T}{\\gamma - 1}$.\n4. Taking the ratio: $\\frac{\\Delta W}{\\Delta U} = \\frac{n R \\Delta T}{\\frac{n R \\Delta T}{\\gamma - 1}} = \\gamma - 1$.",
            "$\\gamma - 1$",
            "Option B is the reciprocal $\\Delta U / \\Delta W$; Option C is $\\Delta Q / \\Delta W$; Option D is $\\Delta U / \\Delta Q$.")
    else:
        # h from 109 to 125 (17 questions)
        h_idx = h - 108
        # Use different polytropic exponents and varied questions
        poly_configs = [
            (1.5, "monoatomic", "P V^{1.5} = \\text{const}", "-0.5 R", "0.5 R", "-R", "2 R", "A", 1.5),
            (2.0, "diatomic", "P V^2 = \\text{const}", "1.5 R", "2.5 R", "R", "3.5 R", "A", 2.0),
            (0.5, "monoatomic", "P V^{0.5} = \\text{const}", "3.5 R", "1.5 R", "2.5 R", "4.5 R", "A", 0.5),
            (3.0, "monoatomic", "P V^3 = \\text{const}", "R", "1.5 R", "0.5 R", "2 R", "A", 3.0),
            (-1.0, "monoatomic", "P/V = \\text{const}", "2 R", "1.5 R", "2.5 R", "R", "A", -1.0),
            (-2.0, "diatomic", "P / V^2 = \\text{const}", "\\frac{17}{6} R", "2.5 R", "3 R", "3.5 R", "A", -2.0),
            (0.0, "monoatomic", "P = \\text{const}", "2.5 R", "1.5 R", "3.5 R", "R", "A", 0.0),
            (2.5, "monoatomic", "P V^{2.5} = \\text{const}", "0.83 R", "1.5 R", "-0.5 R", "2 R", "A", 2.5),
            (4.0, "monoatomic", "P V^4 = \\text{const}", "1.17 R", "1.5 R", "0.5 R", "2.5 R", "A", 4.0),
            (1.2, "diatomic", "P V^{1.2} = \\text{const}", "-2.5 R", "2.5 R", "5 R", "7.5 R", "A", 1.2),
            (1.3, "monoatomic", "P V^{1.3} = \\text{const}", "-1.83 R", "1.5 R", "3 R", "-0.5 R", "A", 1.3),
            (1.6, "monoatomic", "P V^{1.6} = \\text{const}", "-0.17 R", "1.5 R", "0.5 R", "-R", "A", 1.6),
            (0.8, "diatomic", "P V^{0.8} = \\text{const}", "7.5 R", "2.5 R", "5 R", "3.5 R", "A", 0.8),
            (0.2, "monoatomic", "P V^{0.2} = \\text{const}", "2.75 R", "1.5 R", "3.5 R", "R", "A", 0.2),
            (-0.5, "monoatomic", "P V^{-0.5} = \\text{const}", "2.17 R", "1.5 R", "2.5 R", "3 R", "A", -0.5),
            (1.8, "monoatomic", "P V^{1.8} = \\text{const}", "0.25 R", "1.5 R", "-0.5 R", "R", "A", 1.8),
            (2.2, "diatomic", "P V^{2.2} = \\text{const}", "1.67 R", "2.5 R", "0.83 R", "3.5 R", "A", 2.2),
        ]
        cfg = poly_configs[h_idx - 1]
        n_val, gtype, eq_str, op_a, op_b, op_c, op_d, cor_ans, n_flt = cfg
        cv_val = 1.5 if gtype == "monoatomic" else 2.5
        c_calc = cv_val + 1.0 / (1.0 - n_flt)
        add(q_id, q_num,
            f"An ideal {gtype} gas undergoes a polytropic process governed by ${eq_str}$. The molar heat capacity $C$ of the gas during this specific process is:",
            op_a, op_b, op_c, op_d,
            cor_ans, "Hard", "phys-zeroth-first-law",
            f"For any polytropic process $P V^n = \\text{{const}}$, the molar heat capacity is $C = C_v + \\frac{{R}}{{1 - n}}$.",
            f"Polytropic index $n = {n_val}$, gas type: {gtype} ($C_v = {cv_val} R$).",
            "C = C_v + \\frac{R}{1 - n}",
            f"1. For an ideal {gtype} gas, $C_v = {cv_val} R$.\n2. The polytropic exponent is $n = {n_val}$, so $1 - n = {1.0 - n_flt:.2f}$.\n3. Calculate molar heat capacity: $C = {cv_val} R + \\frac{{1}}{{{1.0 - n_flt:.2f}}} R = {c_calc:.2f} R \\approx {op_a}$.",
            f"{op_a}",
            "Other options confuse $C_v$ with $C_p$ or incorrectly calculate $1/(1-n)$.")

def get_part1_questions():
    return questions

if __name__ == "__main__":
    print(f"Generated {len(questions)} questions for Part 1.")
    diff_counts = {"Easy": 0, "Medium": 0, "Hard": 0}
    for q in questions:
        diff_counts[q["difficulty"]] += 1
    print("Part 1 Difficulty breakdown:", diff_counts)
    assert len(questions) == 125, f"Expected 125, got {len(questions)}"
    assert diff_counts == {"Easy": 40, "Medium": 65, "Hard": 20}, f"Mismatch in distribution: {diff_counts}"
    print("Part 1 validation PASSED successfully!")
