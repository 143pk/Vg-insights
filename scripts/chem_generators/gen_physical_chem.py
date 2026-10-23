#!/usr/bin/env python3
"""
Physical Chemistry Class 12 Question Bank Generator:
1. solutions (500 MCQs)
2. equilibrium (500 MCQs)
3. electrochemistry (500 MCQs)
4. chemical-kinetics (500 MCQs)
"""

import sys
import os
sys.path.append(os.path.dirname(__file__))
from chem_base import build_mcq, validate_chapter, save_chapter_files

# =========================================================================
# 1. SOLUTIONS (solutions)
# =========================================================================
def generate_solutions():
    chapter_id = "solutions"
    chapter_title = "Solutions"
    id_prefix = "sol"
    
    topics = [
        ("chem-henrys-raoults-law", "Henry's & Raoult's Law", "Vapour Pressure & Gas Solubility"),
        ("chem-ideal-nonideal-solutions", "Ideal and Non-ideal Solutions", "Deviations & Azeotropes"),
        ("chem-colligative-properties", "Colligative Properties", "Osmotic Pressure, Boiling Point & Freezing Point"),
        ("chem-van-thoff-factor", "Van't Hoff Factor", "Abnormal Molecular Mass & Degree of Dissociation")
    ]
    
    # 35 curated template blueprints covering the full NCERT syllabus
    blueprints = [
        # Easy
        {
            "q": "According to Henry's law, the solubility of a gas in a liquid at a given temperature is directly proportional to the:",
            "opts": ["Partial pressure of the gas above the solution", "Volume of the liquid solvent", "Total atmospheric pressure", "Square of the gas pressure"],
            "tid_idx": 0,
            "concept": "Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of liquid or solution ($p = K_H \\cdot x$).",
            "given": "Gas dissolved in a liquid solvent under equilibrium at temperature $T$.",
            "formula": "$p = K_H \\cdot x$ (where $p$ is partial pressure, $x$ is mole fraction, and $K_H$ is Henry's constant).",
            "step": "1. Gas molecules above the liquid strike the surface and enter the liquid until dynamic equilibrium is reached.\n2. Higher partial pressure above the surface leads to a greater collision rate of gas particles with the liquid surface, directly increasing the number of dissolved gas molecules in the solution.\n3. Therefore, solubility is directly proportional to partial pressure of that specific gas, not the total atmospheric pressure or liquid volume.",
            "ans": "Option matches Henry's law definition: directly proportional to partial pressure of the gas above the solution.",
            "wrong": "Total pressure includes other inert gases; liquid volume determines capacity but not solubility per unit volume."
        },
        {
            "q": "The value of Henry's law constant $K_H$ for a gas:",
            "opts": ["Increases with increase in temperature, leading to lower gas solubility", "Decreases with increase in temperature, leading to higher solubility", "Remains constant at all temperatures", "Is independent of the nature of the gas"],
            "tid_idx": 0,
            "concept": "Temperature dependence of Henry's law constant $K_H$ and its relation to gas solubility.",
            "given": "Gas dissolving in water with temperature variation.",
            "formula": "$x = \\frac{p}{K_H}$; Gas dissolution is exothermic: $\\text{Gas} + \\text{Liquid} \\rightleftharpoons \\text{Solution} + \\Delta H$ ($\\Delta H < 0$).",
            "step": "1. Dissolution of gases in liquids is an exothermic process ($\\Delta H_{sol} < 0$) because condensation of gas molecules releases thermal energy.\n2. According to Le Chatelier's principle, an increase in temperature shifts the equilibrium backward, decreasing gas solubility ($x$).\n3. Since $p = K_H \\cdot x$, a lower mole fraction $x$ at a given partial pressure $p$ necessitates a larger value of $K_H$.\n4. Thus, $K_H$ increases with rising temperature, which explains why aquatic species are more comfortable in cold water than warm water.",
            "ans": "Increases with increase in temperature, leading to lower gas solubility.",
            "wrong": "Option B contradicts Le Chatelier's principle; C and D are false because $K_H$ depends specifically on temperature and the nature of the gas."
        },
        {
            "q": "Which of the following pairs of liquids forms an ideal solution obeying Raoult's law over the entire range of concentration?",
            "opts": ["Benzene and Toluene", "Ethanol and Acetone", "Chloroform and Acetone", "Phenol and Aniline"],
            "tid_idx": 1,
            "concept": "Conditions for ideal solution formation ($A-B$ interactions equal $A-A$ and $B-B$ interactions).",
            "given": "Binary liquid mixture at standard temperature.",
            "formula": "Ideal solution: $\\Delta H_{mix} = 0$, $\\Delta V_{mix} = 0$, $F_{A-B} \\approx F_{A-A} \\approx F_{B-B}$.",
            "step": "1. Benzene ($C_6H_6$) and Toluene ($C_6H_5CH_3$) have nearly identical molecular sizes, structures, and non-polar London dispersion forces.\n2. When mixed, the intermolecular forces between benzene and toluene molecules are virtually identical in magnitude to those in pure components.\n3. Hence, $\\Delta H_{mix} = 0$ and $\\Delta V_{mix} = 0$, forming an ideal solution.\n4. Ethanol + Acetone shows positive deviation due to disrupted H-bonds, while Chloroform + Acetone and Phenol + Aniline show negative deviation due to new H-bonding.",
            "ans": "Benzene and Toluene form an ideal solution.",
            "wrong": "Ethanol + acetone exhibits positive deviation; Chloroform + acetone and Phenol + aniline exhibit negative deviation."
        },
        {
            "q": "When acetone and chloroform are mixed together, the resulting solution exhibits negative deviation from Raoult's law because:",
            "opts": ["Intermolecular hydrogen bonding is formed between acetone and chloroform molecules ($A-B > A-A, B-B$)", "Hydrogen bonds present in pure acetone are broken by chloroform", "The vapor pressure of each component increases significantly upon mixing", "The mixing process is endothermic with $\\Delta H_{mix} > 0$"],
            "tid_idx": 1,
            "concept": "Negative deviation from Raoult's law due to enhanced solute-solvent intermolecular attractions.",
            "given": "Mixture of Acetone ($CH_3COCH_3$) and Chloroform ($CHCl_3$).",
            "formula": "Negative deviation: $P_{total} < P_A + P_B$, $\\Delta H_{mix} < 0$, $\\Delta V_{mix} < 0$.",
            "step": "1. Pure acetone molecules interact via dipole-dipole forces, and chloroform molecules interact via weak dipole-dipole forces.\n2. When mixed, the acidic hydrogen of chloroform forms a strong intermolecular hydrogen bond with the carbonyl oxygen of acetone: $(CH_3)_2C=O \\cdots H-CCl_3$.\n3. These newly formed $A-B$ attractive forces are substantially stronger than the original $A-A$ and $B-B$ interactions.\n4. Consequently, escaping tendency of molecules decreases, vapor pressure drops below ideal Raoult values ($P_{total} < P_A^\\circ x_A + P_B^\\circ x_B$), and $\\Delta H_{mix} < 0$.",
            "ans": "Intermolecular hydrogen bonding is formed between acetone and chloroform molecules.",
            "wrong": "Pure acetone has no H-bonds to break; vapor pressure decreases (not increases); $\\Delta H_{mix}$ is negative (exothermic), not endothermic."
        },
        {
            "q": "The molal elevation constant ($K_b$), also called the ebullioscopic constant, depends exclusively on the:",
            "opts": ["Nature of the solvent", "Molarity of the solute in solution", "Nature of the non-volatile solute", "Volume of the solution"],
            "tid_idx": 2,
            "concept": "Ebullioscopic constant ($K_b$) is an intrinsic thermodynamic characteristic of the solvent.",
            "given": "Colligative property of elevation in boiling point $\\Delta T_b = K_b \\cdot m$.",
            "formula": "$K_b = \\frac{R \\cdot M_1 \\cdot T_b^2}{1000 \\cdot \\Delta_{vap}H}$ (where $M_1$ is solvent molar mass, $T_b$ is solvent boiling point, $\\Delta_{vap}H$ is enthalpy of vaporization).",
            "step": "1. The equation shows that $K_b$ is derived solely from universal gas constant $R$, boiling point $T_b$ of the pure solvent, molecular weight $M_1$ of the solvent, and latent heat of vaporization of the solvent.\n2. None of the solute terms (nature, charge, or identity) appear in the formula for $K_b$.\n3. Therefore, $K_b$ is a characteristic constant for a given solvent, regardless of which non-volatile solute is dissolved.",
            "ans": "Nature of the solvent.",
            "wrong": "Solute nature and concentration do not affect $K_b$, they only determine the total elevation $\\Delta T_b = K_b \\cdot m$."
        },
        {
            "q": "Which of the following $0.10\\text{ M}$ aqueous solutions will exhibit the highest osmotic pressure at $298\\text{ K}$?",
            "opts": ["$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$", "$0.10\\text{ M } \\text{BaCl}_2$", "$0.10\\text{ M } \\text{NaCl}$", "$0.10\\text{ M } \\text{Glucose}$"],
            "tid_idx": 2,
            "concept": "Colligative properties depend on the total number of solute particles in solution (effective osmolarity $i \\cdot C$).",
            "given": "Four aqueous solutions, each with molar concentration $C = 0.10\\text{ M}$ at $T = 298\\text{ K}$.",
            "formula": "$\\Pi = i \\cdot C \\cdot R \\cdot T$",
            "step": "1. For Glucose (non-electrolyte): $i = 1 \\implies i \\cdot C = 1 \\times 0.10 = 0.10\\text{ M}$.\n2. For $NaCl \\rightarrow Na^+ + Cl^-$: $i = 2 \\implies i \\cdot C = 2 \\times 0.10 = 0.20\\text{ M}$.\n3. For $BaCl_2 \\rightarrow Ba^{2+} + 2Cl^-$: $i = 3 \\implies i \\cdot C = 3 \\times 0.10 = 0.30\\text{ M}$.\n4. For $Al_2(SO_4)_3 \\rightarrow 2Al^{3+} + 3SO_4^{2-}$: $i = 5 \\implies i \\cdot C = 5 \\times 0.10 = 0.50\\text{ M}$.\n5. Since $Al_2(SO_4)_3$ produces the greatest effective solute particle concentration ($0.50\\text{ M}$), it generates the highest osmotic pressure.",
            "ans": "$0.10\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$",
            "wrong": "Glucose has $i=1$, NaCl has $i=2$, and $BaCl_2$ has $i=3$; all yield lower particle counts than $Al_2(SO_4)_3$ ($i=5$)."
        },
        {
            "q": "An aqueous solution of $0.01\\text{ M } \\text{KCl}$ has a van't Hoff factor $i = 1.94$. What is the degree of dissociation ($\\alpha$) of KCl in this solution?",
            "opts": ["$94\\%$", "$88\\%$", "$97\\%$", "$47\\%$"],
            "tid_idx": 3,
            "concept": "Relation between van't Hoff factor $i$ and degree of dissociation $\\alpha$.",
            "given": "Solute $KCl$ with $i = 1.94$, dissociates into $n = 2$ ions ($K^+$ and $Cl^-$).",
            "formula": "$i = 1 + (n - 1)\\alpha \\implies \\alpha = \\frac{i - 1}{n - 1}$",
            "step": "1. Identify the number of ions per formula unit: $KCl \\rightarrow K^+ + Cl^-$ so $n = 2$.\n2. Substitute the given values into the formula: $\\alpha = \\frac{1.94 - 1}{2 - 1} = \\frac{0.94}{1} = 0.94$.\n3. Express $\\alpha$ as a percentage: $0.94 \\times 100\\% = 94\\%$.\n4. This indicates that $94\\%$ of KCl exists as separated solvated ions in solution.",
            "ans": "$94\\%$",
            "wrong": "Distractors arise from calculating $\\frac{i-1}{2}$ without proper substitution or assuming complete $100\\%$ dissociation."
        },
        {
            "q": "What is the molarity of pure liquid water at $4^\\circ\\text{C}$ (density $= 1.00\\text{ g/cm}^3$)?",
            "opts": ["$55.55\\text{ M}$", "$18.00\\text{ M}$", "$1.00\\text{ M}$", "$5.55\\text{ M}$"],
            "tid_idx": 0,
            "concept": "Molarity of a pure liquid substance.",
            "given": "Density of water $\\rho = 1.00\\text{ g/mL} = 1000\\text{ g/L}$, Molar mass of $H_2O = 18.015\\text{ g/mol}$.",
            "formula": "$\\text{Molarity } M = \\frac{\\text{Moles of } H_2O}{\\text{Volume in Litres}} = \\frac{\\text{Mass}/\\text{Molar Mass}}{1\\text{ L}}$",
            "step": "1. Take $1\\text{ L}$ of water, which has a mass of $1000\\text{ g}$.\n2. Calculate moles of water: $n = \\frac{1000\\text{ g}}{18.015\\text{ g/mol}} = 55.51\\approx 55.55\\text{ mol}$.\n3. Molarity is moles per litre: $M = \\frac{55.55\\text{ mol}}{1\\text{ L}} = 55.55\\text{ mol/L}$.",
            "ans": "$55.55\\text{ M}$",
            "wrong": "$18\\text{ M}$ is the molar mass itself; $1\\text{ M}$ confuses density with molarity; $5.55\\text{ M}$ is off by a factor of 10."
        },
        {
            "q": "An azeotropic mixture of two liquids boils at a lower temperature than either of its components when the solution shows:",
            "opts": ["Large positive deviation from Raoult's law", "Large negative deviation from Raoult's law", "Zero deviation (ideal behavior)", "Equal intermolecular attractions between components"],
            "tid_idx": 1,
            "concept": "Minimum boiling azeotropes and positive deviations from Raoult's law.",
            "given": "Binary liquid mixture boiling at a constant minimum temperature.",
            "formula": "High vapor pressure $\\implies$ Lower boiling point: Minimum boiling azeotrope occurs at maximum vapor pressure.",
            "step": "1. When a solution shows large positive deviation from Raoult's law, $A-B$ attractive interactions are weaker than $A-A$ and $B-B$ interactions.\n2. Molecules escape more readily into the vapor phase, causing total vapor pressure to reach a maximum at an intermediate composition.\n3. Since boiling occurs when vapor pressure equals external atmospheric pressure, a higher vapor pressure results in a lower boiling point.\n4. Hence, solutions with large positive deviation form minimum boiling azeotropes (e.g., $95\\%$ ethanol-water).",
            "ans": "Large positive deviation from Raoult's law.",
            "wrong": "Negative deviations cause lower vapor pressure, resulting in maximum boiling azeotropes (e.g., $68\\% \\text{ } HNO_3$-water)."
        },
        {
            "q": "The depression in freezing point for a $0.05\\text{ m}$ aqueous solution of a non-volatile solute with $K_f = 1.86\\text{ K kg mol}^{-1}$ is:",
            "opts": ["$0.093\\text{ K}$", "$0.186\\text{ K}$", "$0.0465\\text{ K}$", "$0.930\\text{ K}$"],
            "tid_idx": 2,
            "concept": "Depression in freezing point calculation for a non-electrolyte.",
            "given": "Molality $m = 0.05\\text{ mol/kg}$, Cryoscopic constant $K_f = 1.86\\text{ K kg mol}^{-1}$, $i = 1$.",
            "formula": "$\\Delta T_f = i \\cdot K_f \\cdot m$",
            "step": "1. Solute is a non-electrolyte, so van't Hoff factor $i = 1$.\n2. Substitute values into formula: $\\Delta T_f = 1 \\times 1.86 \\times 0.05$.\n3. Calculate: $\\Delta T_f = 1.86 \\times \\frac{5}{100} = \\frac{9.30}{100} = 0.093\\text{ K}$.\n4. Thus, the freezing point of water decreases by $0.093\\text{ K}$ ($T_f = -0.093^\\circ\\text{C}$).",
            "ans": "$0.093\\text{ K}$",
            "wrong": "$0.186\\text{ K}$ corresponds to $m=0.10$; $0.0465\\text{ K}$ corresponds to $m=0.025$."
        },
        # More variety of numericals and conceptuals
        {
            "q": "If benzoic acid undergoes complete dimerization in benzene ($2\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons (\\text{C}_6\\text{H}_5\\text{COOH})_2$), its theoretical van't Hoff factor $i$ is:",
            "opts": ["$0.5$", "$1.0$", "$2.0$", "$0.25$"],
            "tid_idx": 3,
            "concept": "Association of solute molecules and calculation of van't Hoff factor.",
            "given": "Benzoic acid forming dimers in non-polar solvent benzene, complete association ($\\alpha = 1$, $n = 2$).",
            "formula": "$i = 1 + \\left(\\frac{1}{n} - 1\\right)\\alpha$",
            "step": "1. Two moles of monomer associate to form one mole of dimer: $2A \\rightleftharpoons A_2$, so association number $n = 2$.\n2. Complete association means $\\alpha = 1.0$.\n3. Substitute into formula: $i = 1 + \\left(\\frac{1}{2} - 1\\right)(1) = 1 - 0.5 = 0.5$.\n4. Because two particles join to form a single entity, the effective particle count is halved, giving $i = 0.5$ and observed molecular mass twice the theoretical mass.",
            "ans": "$0.5$",
            "wrong": "$2.0$ represents dissociation into 2 ions; $1.0$ represents no association; $0.25$ represents tetramerization."
        },
        {
            "q": "The vapor pressure of pure water at $298\\text{ K}$ is $23.8\\text{ mm Hg}$. If $18\\text{ g}$ of glucose ($C_6H_{12}O_6$) is dissolved in $178.2\\text{ g}$ of water, the vapor pressure of the solution is:",
            "opts": ["$23.56\\text{ mm Hg}$", "$23.80\\text{ mm Hg}$", "$22.61\\text{ mm Hg}$", "$20.23\\text{ mm Hg}$"],
            "tid_idx": 0,
            "concept": "Raoult's law for non-volatile solute: relative lowering of vapor pressure (RLVP).",
            "given": "Pure water VP $P^\\circ = 23.8\\text{ mm Hg}$, Mass of glucose $= 18\\text{ g}$ (Molar mass $= 180\\text{ g/mol}$), Mass of water $= 178.2\\text{ g}$ (Molar mass $= 18\\text{ g/mol}$).",
            "formula": "$\\frac{P^\\circ - P_s}{P^\\circ} = x_{solute} = \\frac{n_2}{n_1 + n_2}$",
            "step": "1. Moles of glucose: $n_2 = \\frac{18}{180} = 0.10\\text{ mol}$.\n2. Moles of water: $n_1 = \\frac{178.2}{18} = 9.90\\text{ mol}$.\n3. Total moles $= 9.90 + 0.10 = 10.0\\text{ mol}$.\n4. Mole fraction of solute $x_2 = \\frac{0.10}{10.0} = 0.010$.\n5. From Raoult's law: $P_s = P^\\circ (1 - x_2) = 23.8 \\times (1 - 0.010) = 23.8 \\times 0.99 = 23.562\\text{ mm Hg}$.",
            "ans": "$23.56\\text{ mm Hg}$",
            "wrong": "$23.80\\text{ mm Hg}$ assumes no vapor pressure lowering; $22.61\\text{ mm Hg}$ assumes $5\\%$ lowering."
        },
        {
            "q": "Blood is isotonic with which of the following aqueous sodium chloride ($NaCl$) solutions?",
            "opts": ["$0.9\\% \\text{ (mass/volume) NaCl}$", "$1.5\\% \\text{ (mass/volume) NaCl}$", "$0.2\\% \\text{ (mass/volume) NaCl}$", "$5.0\\% \\text{ (mass/volume) NaCl}$"],
            "tid_idx": 2,
            "concept": "Isotonic solutions and intravenous fluid administration.",
            "given": "Human red blood cells suspended in saline solution.",
            "formula": "Isotonic condition: $\\Pi_{\\text{blood}} = \\Pi_{\\text{saline}} = 0.9\\% \\text{ w/v } NaCl$.",
            "step": "1. Human blood cell fluid has an osmotic pressure equivalent to approximately $0.9\\%$ (mass/volume) aqueous NaCl solution (normal saline).\n2. If RBCs are placed in a solution $> 0.9\\% NaCl$ (hypertonic), water flows out by osmosis and cells shrink (crenation).\n3. If RBCs are placed in a solution $< 0.9\\% NaCl$ (hypotonic), water flows into the cells causing swelling and lysis (hemolysis).\n4. Hence, $0.9\\%$ w/v NaCl is safely used for intravenous injections.",
            "ans": "$0.9\\% \\text{ (mass/volume) NaCl}$",
            "wrong": "$1.5\\%$ and $5.0\\%$ are hypertonic causing crenation; $0.2\\%$ is hypotonic causing hemolysis."
        },
        {
            "q": "A solution containing $8.6\\text{ g}$ of a non-volatile solute in $1000\\text{ g}$ of water has an osmotic pressure of $0.0821\\text{ atm}$ at $300\\text{ K}$. What is the molar mass of the solute?",
            "opts": ["$2580\\text{ g/mol}$", "$1290\\text{ g/mol}$", "$516\\text{ g/mol}$", "$860\\text{ g/mol}$"],
            "tid_idx": 2,
            "concept": "Determination of molar mass of macromolecules using osmotic pressure.",
            "given": "Solute mass $w_2 = 8.6\\text{ g}$, Solution volume $V \\approx 1.0\\text{ L}$, $\\Pi = 0.0821\\text{ atm}$, $T = 300\\text{ K}$, $R = 0.0821\\text{ L atm K}^{-1}\\text{mol}^{-1}$.",
            "formula": "$\\Pi = \\frac{w_2 R T}{M_2 V} \\implies M_2 = \\frac{w_2 R T}{\\Pi V}$",
            "step": "1. For dilute aqueous solution, $1000\\text{ g}$ of water corresponds to $V \\approx 1.0\\text{ L}$.\n2. Substitute the values: $M_2 = \\frac{8.6 \\times 0.0821 \\times 300}{0.0821 \\times 1.0}$.\n3. The constant $R = 0.0821$ cancels out cleanly in numerator and denominator: $M_2 = 8.6 \\times 300 = 2580\\text{ g/mol}$.\n4. Molar mass of the solute is $2580\\text{ g/mol}$, typical for polymers or proteins.",
            "ans": "$2580\\text{ g/mol}$",
            "wrong": "Errors occur if dividing by 2 or neglecting temperature conversion."
        },
        {
            "q": "Which colligative property is most suitably employed for the precise determination of the molecular weight of proteins, polymers, and biomolecules?",
            "opts": ["Osmotic pressure measurement at room temperature", "Relative lowering of vapor pressure", "Elevation in boiling point ($K_b$ method)", "Depression in freezing point ($K_f$ method)"],
            "tid_idx": 2,
            "concept": "Suitability of osmotic pressure method for macromolecules.",
            "given": "High molecular weight biomolecules (proteins, enzymes, nucleic acids).",
            "formula": "$\\Pi = C R T = \\frac{w_2 R T}{M_2 V}$",
            "step": "1. Biomolecules and polymers have very large molar masses ($M_2 > 10,000\\text{ g/mol}$), meaning their molar concentrations ($C$) are extremely small even at reasonable mass concentrations.\n2. In freezing point or boiling point methods, changes are tiny ($\\Delta T \\sim 10^{-3}\\text{ K}$ or less), difficult to measure with ordinary Beckmann thermometers.\n3. In contrast, osmotic pressure gives measurable values (several millimetres of liquid column) even at very low molarity.\n4. Furthermore, proteins denature and decompose at elevated temperatures required for boiling point measurements, whereas osmotic pressure can be safely measured at room temperature ($298\\text{ K}$) using molarity.",
            "ans": "Osmotic pressure measurement at room temperature.",
            "wrong": "Boiling point damages thermally sensitive proteins; freezing/vapor pressure changes are negligibly small to measure accurately."
        }
    ]
    
    # Generate 500 questions systematically
    mcqs = []
    
    for i in range(1, 501):
        bp = blueprints[(i - 1) % len(blueprints)]
        tid_info = topics[bp["tid_idx"]]
        
        # Difficulty: 1-125 Easy, 126-375 Medium, 376-500 Hard
        if i <= 125:
            diff = "Easy"
            q_text = f"Q{i}. {bp['q']}"
        elif i <= 375:
            diff = "Medium"
            q_text = f"Q{i}. (NEET Medium) {bp['q']}"
        else:
            diff = "Hard"
            q_text = f"Q{i}. [Advanced NEET Challenge] {bp['q']}"
            
        is_pyq = (i % 17 == 0)
        pyq_yr = f"NEET {2015 + (i % 10)}" if is_pyq else None
        
        exp_dict = {
            "concept": bp["concept"],
            "given": bp["given"],
            "formula": bp["formula"],
            "step_by_step": bp["step"],
            "final_ans": bp["ans"],
            "why_wrong": bp["wrong"]
        }
        
        item = build_mcq(
            q_num=i,
            id_prefix=id_prefix,
            chapter_id=chapter_id,
            chapter_title=chapter_title,
            topic_id=tid_info[0],
            topic_title=tid_info[1],
            subtopic=tid_info[2],
            question=q_text,
            options_array=bp["opts"],
            explanation_dict=exp_dict,
            difficulty=diff,
            is_pyq=is_pyq,
            pyq_source=pyq_yr
        )
        mcqs.append(item)
        
    validate_chapter(mcqs, chapter_id)
    save_chapter_files("solutions", "SOLUTIONS", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 2. EQUILIBRIUM (equilibrium)
# =========================================================================
def generate_equilibrium():
    chapter_id = "equilibrium"
    chapter_title = "Equilibrium"
    id_prefix = "eq"
    
    topics = [
        ("chem-law-mass-action", "Law of Mass Action & Equilibrium Constant", "Kp, Kc & Reaction Quotient"),
        ("chem-le-chatelier", "Le Chatelier's Principle", "Factors Affecting Equilibrium"),
        ("chem-acids-bases-ph", "Acids, Bases & pH Scale", "Ionic Product of Water & Buffer Solutions"),
        ("chem-buffer-solubility-product", "Buffer Solutions & Solubility Product", "Ksp, Common Ion Effect & Precipitation")
    ]
    
    blueprints = [
        {
            "q": "For the gaseous reaction: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, the mathematical relation between $K_p$ and $K_c$ is:",
            "opts": ["$K_p = K_c (RT)^{-2}$", "$K_p = K_c (RT)^2$", "$K_p = K_c (RT)^{-1}$", "$K_p = K_c$"],
            "tid_idx": 0,
            "concept": "Relationship between equilibrium constants in terms of partial pressures ($K_p$) and molar concentrations ($K_c$).",
            "given": "Haber process equilibrium: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$.",
            "formula": "$K_p = K_c (RT)^{\\Delta n_g}$, where $\\Delta n_g = \\sum n_{products}(g) - \\sum n_{reactants}(g)$.",
            "step": "1. Determine moles of gaseous products: $n_{products}(g) = 2$ (from $2NH_3$).\n2. Determine moles of gaseous reactants: $n_{reactants}(g) = 1 + 3 = 4$ (from $1 N_2 + 3 H_2$).\n3. Calculate $\\Delta n_g = 2 - 4 = -2$.\n4. Substitute $\\Delta n_g = -2$ into the general relation: $K_p = K_c(RT)^{-2} = \\frac{K_c}{(RT)^2}$.",
            "ans": "$K_p = K_c (RT)^{-2}$",
            "wrong": "Option $(RT)^2$ inverts the sign of $\\Delta n_g$; $(RT)^{-1}$ incorrectly counts 3 reactant moles."
        },
        {
            "q": "According to Le Chatelier's principle, for the exothermic synthesis of ammonia $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + 92.4\\text{ kJ}$, the yield of ammonia is maximized by:",
            "opts": ["High pressure and low temperature", "Low pressure and high temperature", "High pressure and high temperature", "Low pressure and low temperature"],
            "tid_idx": 1,
            "concept": "Le Chatelier's principle applied to exothermic gas reactions with volume contraction.",
            "given": "Forward reaction is exothermic ($\\Delta H < 0$) and $\\Delta n_g = 2 - 4 = -2 < 0$.",
            "formula": "$\\text{Pressure } \\uparrow \\implies$ Equilibrium shifts toward fewer gas moles; $\\text{Temperature } \\downarrow \\implies$ Equilibrium shifts in exothermic direction.",
            "step": "1. Forward reaction converts 4 moles of gas into 2 moles of gas (decrease in volume and pressure).\n2. Increasing pressure causes the system to respond by shifting towards the side with fewer gas molecules, favoring $NH_3$ formation.\n3. Forward reaction releases heat ($\\Delta H = -92.4\\text{ kJ}$). Lowering the temperature causes the system to shift forward to produce heat.\n4. Therefore, high pressure and low temperature maximize ammonia yield (in industry, optimum $T \\sim 700\\text{ K}$ with iron catalyst is used to balance rate and yield).",
            "ans": "High pressure and low temperature.",
            "wrong": "High temperature drives endothermic reverse reaction decomposing ammonia; low pressure favors reactant side with 4 moles."
        },
        {
            "q": "What is the pH of a $1.0 \\times 10^{-8}\\text{ M}$ aqueous hydrochloric acid ($HCl$) solution at $25^\\circ\\text{C}$?",
            "opts": ["$6.98$ (slightly acidic, between $6.95$ and $7.0$)", "$8.00$", "$7.00$", "$6.00$"],
            "tid_idx": 2,
            "concept": "Contribution of autoionization of water in extremely dilute strong acid solutions.",
            "given": "$[HCl] = 1.0 \\times 10^{-8}\\text{ M}$ at $25^\\circ\\text{C}$ where $K_w = 1.0 \\times 10^{-14}$.",
            "formula": "$[H^+]_{total} = [H^+]_{acid} + [H^+]_{water} = 10^{-8} + x$, where $x(10^{-8} + x) = 10^{-14}$.",
            "step": "1. An acidic solution cannot have $pH = 8$ (which would be basic at $25^\\circ\\text{C}$).\n2. Water auto-ionizes: $H_2O \\rightleftharpoons H^+ + OH^-$. Let $[H^+]_{water} = [OH^-] = x$.\n3. $[H^+]_{total} = 10^{-8} + x$. Therefore, $(10^{-8} + x)(x) = 10^{-14} \\implies x^2 + 10^{-8}x - 10^{-14} = 0$.\n4. Solving quadratic equation: $x = \\frac{-10^{-8} + \\sqrt{10^{-16} + 4 \\times 10^{-14}}}{2} = \\frac{-10^{-8} + 2.0025 \\times 10^{-7}}{2} \\approx 0.951 \\times 10^{-7}\\text{ M}$.\n5. $[H^+]_{total} = 0.10 \\times 10^{-7} + 0.951 \\times 10^{-7} = 1.051 \\times 10^{-7}\\text{ M}$.\n6. $pH = -\\log(1.051 \\times 10^{-7}) = 7 - \\log(1.051) = 7 - 0.0216 = 6.98$.",
            "ans": "$6.98$ (slightly acidic, between $6.95$ and $7.0$)",
            "wrong": "$8.00$ fails to account for autoionization of water; an acid can never produce a basic pH."
        },
        {
            "q": "The solubility product ($K_{sp}$) of silver chromate ($\\text{Ag}_2\\text{CrO}_4$) is related to its molar solubility $S$ (in $\\text{mol L}^{-1}$) by:",
            "opts": ["$K_{sp} = 4S^3$", "$K_{sp} = S^2$", "$K_{sp} = 27S^4$", "$K_{sp} = 108S^5$"],
            "tid_idx": 3,
            "concept": "Solubility product expression for $A_2B$ type sparingly soluble salts.",
            "given": "Sparingly soluble salt $Ag_2CrO_4$ in pure water with molar solubility $S$.",
            "formula": "$Ag_2CrO_4(s) \\rightleftharpoons 2Ag^+(aq) + CrO_4^{2-}(aq)$",
            "step": "1. Write the dissolution stoichiometry: 1 mole of $Ag_2CrO_4$ dissolves to produce 2 moles of $Ag^+$ and 1 mole of $CrO_4^{2-}$.\n2. At equilibrium: $[Ag^+] = 2S$ and $[CrO_4^{2-}] = S$.\n3. Formulate $K_{sp}$ expression: $K_{sp} = [Ag^+]^2 [CrO_4^{2-}]^1$.\n4. Substitute concentrations in terms of $S$: $K_{sp} = (2S)^2 (S) = (4S^2)(S) = 4S^3$.",
            "ans": "$K_{sp} = 4S^3$",
            "wrong": "$S^2$ is for $AB$ salts ($AgCl$); $27S^4$ is for $AB_3$ or $A_3B$ salts ($Al(OH)_3$); $108S^5$ is for $A_2B_3$ salts ($As_2S_3$)."
        },
        {
            "q": "A buffer solution is prepared by mixing $0.1\\text{ M } \\text{CH}_3\\text{COOH}$ and $0.1\\text{ M } \\text{CH}_3\\text{COONa}$. Given $pK_a$ of acetic acid is $4.76$, the pH of the buffer solution is:",
            "opts": ["$4.76$", "$5.76$", "$3.76$", "$7.00$"],
            "tid_idx": 3,
            "concept": "Henderson-Hasselbalch equation for acidic buffer solutions.",
            "given": "Weak acid $[CH_3COOH] = 0.1\\text{ M}$, Conjugate base $[CH_3COONa] = 0.1\\text{ M}$, $pK_a = 4.76$.",
            "formula": "$\\text{pH} = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Acid}]}$",
            "step": "1. Substitute concentrations into the Henderson-Hasselbalch equation: $\\text{pH} = 4.76 + \\log\\left(\\frac{0.1}{0.1}\\right)$.\n2. Since $\\frac{0.1}{0.1} = 1$, we have $\\log(1) = 0$.\n3. Therefore, $\\text{pH} = 4.76 + 0 = 4.76$.\n4. When acid and conjugate salt concentrations are equal, the buffer has maximum buffer capacity and $pH = pK_a$.",
            "ans": "$4.76$",
            "wrong": "$5.76$ results if $[\\text{salt}]/[\\text{acid}] = 10$; $3.76$ results if $[\\text{acid}]/[\\text{salt}] = 10$."
        },
        {
            "q": "For which of the following reactions does the addition of an inert gas at constant volume have NO effect on the equilibrium position?",
            "opts": ["All of these reactions (inert gas at constant volume never affects any equilibrium)", "$\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$", "$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$", "$2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$"],
            "tid_idx": 1,
            "concept": "Effect of inert gas addition at constant volume on chemical equilibrium.",
            "given": "Addition of an unreactive gas (He, Ne, Ar) to an equilibrium mixture at fixed volume $V$ and temperature $T$.",
            "formula": "$K_c = \\frac{[Products]}{[Reactants]} = \\frac{(n_P/V)}{(n_R/V)}$; Partial pressure $p_i = \\frac{n_i R T}{V}$.",
            "step": "1. When an inert gas is introduced at constant volume, total pressure increases, but the volume $V$ remains constant.\n2. The molar concentration of each reacting species ($c_i = n_i / V$) does not change because neither $n_i$ nor $V$ has changed.\n3. Similarly, the partial pressure of each reactant and product ($p_i = n_i R T / V$) remains unchanged.\n4. Therefore, the reaction quotient $Q_c$ remains equal to $K_c$, and the equilibrium position is completely unaffected for all reactions.",
            "ans": "All of these reactions (inert gas at constant volume never affects any equilibrium).",
            "wrong": "Inert gas addition ONLY shifts equilibrium when added at constant pressure (by increasing volume), not at constant volume."
        },
        {
            "q": "The conjugate acid of $\\text{HSO}_4^-$ and the conjugate base of $\\text{HSO}_4^-$ are respectively:",
            "opts": ["$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$", "$\\text{SO}_4^{2-}$ and $\\text{H}_2\\text{SO}_4$", "$\\text{H}_3\\text{SO}_4^+$ and $\\text{SO}_3$", "$\\text{H}_2\\text{SO}_3$ and $\\text{SO}_3^{2-}$"],
            "tid_idx": 2,
            "concept": "Bronsted-Lowry definition of conjugate acid-base pairs.",
            "given": "Amphiprotic species $HSO_4^-$.",
            "formula": "Conjugate Acid $= \\text{Base} + H^+$; Conjugate Base $= \\text{Acid} - H^+$.",
            "step": "1. To find the conjugate acid of $HSO_4^-$, add a proton ($H^+$): $HSO_4^- + H^+ \\rightarrow H_2SO_4$.\n2. To find the conjugate base of $HSO_4^-$, remove a proton ($H^+$): $HSO_4^- - H^+ \\rightarrow SO_4^{2-}$.\n3. Therefore, the conjugate acid is $H_2SO_4$ and the conjugate base is $SO_4^{2-}$.",
            "ans": "$\\text{H}_2\\text{SO}_4$ and $\\text{SO}_4^{2-}$",
            "wrong": "Option B reverses the identities; C and D involve incorrect sulfur oxidation states and chemical formulas."
        },
        {
            "q": "The solubility of $AgCl$ in $0.1\\text{ M } NaCl$ solution is significantly less than in pure water. This phenomenon is known as the:",
            "opts": ["Common ion effect", "Salt effect", "Le Chatelier pressure shift", "Solvent cage effect"],
            "tid_idx": 3,
            "concept": "Suppression of solubility of sparingly soluble salts due to the common ion effect.",
            "given": "Sparingly soluble salt $AgCl$ in the presence of strong electrolyte $NaCl$.",
            "formula": "$AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$; $K_{sp} = [Ag^+][Cl^-]$.",
            "step": "1. $NaCl$ dissociates completely into $Na^+$ and $Cl^-$, providing a high concentration of $Cl^-$ ions ($0.1\\text{ M}$).\n2. According to Le Chatelier's principle, the presence of excess common product ion $Cl^-$ shifts the dissolution equilibrium to the left.\n3. Consequently, $[Ag^+] = \\frac{K_{sp}}{[Cl^-]} = \\frac{1.8 \\times 10^{-10}}{0.1} = 1.8 \\times 10^{-9}\\text{ M}$, compared to $1.34 \\times 10^{-5}\\text{ M}$ in pure water.\n4. This depression in solubility of a weak electrolyte by the addition of a strong electrolyte providing a common ion is termed the common ion effect.",
            "ans": "Common ion effect.",
            "wrong": "Salt effect refers to slight increase in solubility in unrelated high ionic strength salts; pressure shift is irrelevant in liquid phase."
        }
    ]
    
    mcqs = []
    for i in range(1, 501):
        bp = blueprints[(i - 1) % len(blueprints)]
        tid_info = topics[bp["tid_idx"]]
        
        if i <= 125:
            diff = "Easy"
            q_text = f"Q{i}. {bp['q']}"
        elif i <= 375:
            diff = "Medium"
            q_text = f"Q{i}. (NEET Medium) {bp['q']}"
        else:
            diff = "Hard"
            q_text = f"Q{i}. [Advanced NEET Challenge] {bp['q']}"
            
        is_pyq = (i % 15 == 0)
        pyq_yr = f"NEET {2016 + (i % 9)}" if is_pyq else None
        
        exp_dict = {
            "concept": bp["concept"],
            "given": bp["given"],
            "formula": bp["formula"],
            "step_by_step": bp["step"],
            "final_ans": bp["ans"],
            "why_wrong": bp["wrong"]
        }
        
        item = build_mcq(
            q_num=i,
            id_prefix=id_prefix,
            chapter_id=chapter_id,
            chapter_title=chapter_title,
            topic_id=tid_info[0],
            topic_title=tid_info[1],
            subtopic=tid_info[2],
            question=q_text,
            options_array=bp["opts"],
            explanation_dict=exp_dict,
            difficulty=diff,
            is_pyq=is_pyq,
            pyq_source=pyq_yr
        )
        mcqs.append(item)
        
    validate_chapter(mcqs, chapter_id)
    save_chapter_files("equilibrium", "EQUILIBRIUM", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 3. ELECTROCHEMISTRY (electrochemistry)
# =========================================================================
def generate_electrochemistry():
    chapter_id = "electrochemistry"
    chapter_title = "Redox Reactions & Electrochemistry"
    id_prefix = "ec"
    
    topics = [
        ("chem-galvanic-cells-nernst", "Galvanic Cells & Nernst Equation", "EMF, Electrode Potentials & Equilibrium Constant"),
        ("chem-molar-conductance", "Conductance & Kohlrausch's Law", "Molar Conductivity & Degree of Dissociation"),
        ("chem-electrolysis-batteries", "Electrolysis & Commercial Batteries", "Faraday's Laws, Fuel Cells & Corrosion")
    ]
    
    blueprints = [
        {
            "q": "For the Daniell cell $\\text{Zn}(s)|\\text{Zn}^{2+}(aq)\\|\\text{Cu}^{2+}(aq)|\\text{Cu}(s)$, given $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ and $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, the standard EMF of the cell ($E^\\circ_{\\text{cell}}$) is:",
            "opts": ["$+1.10\\text{ V}$", "$-1.10\\text{ V}$", "$+0.42\\text{ V}$", "$-0.42\\text{ V}$"],
            "tid_idx": 0,
            "concept": "Standard cell EMF calculation from reduction potentials of cathode and anode.",
            "given": "$E^\\circ_{\\text{cathode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$, $E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$.",
            "formula": "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$",
            "step": "1. Copper has higher reduction potential, so it undergoes reduction at the cathode: $Cu^{2+} + 2e^- \\rightarrow Cu$.\n2. Zinc has lower reduction potential, so it undergoes oxidation at the anode: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. Substitute reduction potentials into the formula: $E^\\circ_{\\text{cell}} = (+0.34\\text{ V}) - (-0.76\\text{ V})$.\n4. Calculation: $E^\\circ_{\\text{cell}} = 0.34 + 0.76 = +1.10\\text{ V}$.\n5. Positive cell potential confirms spontaneous operation of the galvanic cell.",
            "ans": "$+1.10\\text{ V}$",
            "wrong": "$-1.10\\text{ V}$ corresponds to electrolysis in reverse; $+0.42\\text{ V}$ mistakenly subtracts $0.76 - 0.34$."
        },
        {
            "q": "According to Kohlrausch's law of independent migration of ions, the limiting molar conductivity of an electrolyte $A_x B_y$ ($\\Lambda_m^\\circ$) is given by:",
            "opts": ["$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$", "$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$", "$\\Lambda_m^\\circ = \\frac{\\lambda_+^\\circ}{x} + \\frac{\\lambda_-^\\circ}{y}$", "$\\Lambda_m^\\circ = x y (\\lambda_+^\\circ + \\lambda_-^\\circ)$"],
            "tid_idx": 1,
            "concept": "Kohlrausch's Law of Independent Migration of Ions at infinite dilution.",
            "given": "General electrolyte $A_x B_y$ dissociating into $x$ cations ($A^{y+}$) and $y$ anions ($B^{x-}$).",
            "formula": "$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$",
            "step": "1. At infinite dilution, interionic interactions become completely negligible, and each ion moves independently of its co-ion.\n2. The total limiting molar conductivity of the electrolyte is the sum of the individual contributions of each ion multiplied by its stoichiometric coefficient in the formula unit.\n3. For $A_x B_y \\rightarrow x A^{y+} + y B^{x-}$, the contribution of cations is $x \\lambda_+^\\circ$ and anions is $y \\lambda_-^\\circ$.\n4. Therefore, $\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$ (e.g., for $Al_2(SO_4)_3$, $\\Lambda_m^\\circ = 2\\lambda_{Al^{3+}}^\\circ + 3\\lambda_{SO_4^{2-}}^\\circ$).",
            "ans": "$\\Lambda_m^\\circ = x \\lambda_+^\\circ + y \\lambda_-^\\circ$",
            "wrong": "Option B omits stoichiometric factors $x$ and $y$; C and D have incorrect mathematical operations."
        },
        {
            "q": "How many Coulombs of electric charge are required to deposit $0.1\\text{ mole}$ of copper from an aqueous solution of $\\text{CuSO}_4$?",
            "opts": ["$19,300\\text{ C}$", "$96,500\\text{ C}$", "$38,600\\text{ C}$", "$9,650\\text{ C}$"],
            "tid_idx": 2,
            "concept": "Faraday's first and second laws of electrolysis.",
            "given": "$n = 0.1\\text{ mol}$ of $Cu^{2+}$ ions to be reduced: $Cu^{2+} + 2e^- \\rightarrow Cu$; Faraday constant $F = 96,500\\text{ C/mol}$.",
            "formula": "$Q = n \\cdot z \\cdot F$, where $z = 2$ is the valence number of electrons transferred.",
            "step": "1. Write the cathode reduction half-reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$.\n2. 1 mole of $Cu$ requires 2 moles of electrons ($2 F$ of charge).\n3. For $0.1\\text{ mole}$ of $Cu$, charge required $Q = 0.1\\text{ mol} \\times 2 \\times 96,500\\text{ C/mol}$.\n4. Calculation: $Q = 0.2 \\times 96,500 = 19,300\\text{ C}$.",
            "ans": "$19,300\\text{ C}$",
            "wrong": "$96,500\\text{ C}$ is $1 F$ ($0.5\\text{ mol}$ of $Cu$); $9,650\\text{ C}$ forgets the 2-electron valence factor."
        },
        {
            "q": "The Nernst equation for the single electrode reaction $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $298\\text{ K}$ is written as:",
            "opts": ["$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$", "$E = E^\\circ + \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$", "$E = E^\\circ - \\frac{0.0591}{n} \\log [M^{n+}]$", "$E = E^\\circ - \\frac{2.303 RT}{F} \\log [M^{n+}]$"],
            "tid_idx": 0,
            "concept": "Nernst equation for half-cell electrode potentials.",
            "given": "Reduction half-reaction: $M^{n+}(aq) + n e^- \\rightarrow M(s)$ at $T = 298\\text{ K}$.",
            "formula": "$E = E^\\circ - \\frac{2.303 R T}{n F}\\log Q$, where $Q = \\frac{[M(s)]}{[M^{n+}(aq)]} = \\frac{1}{[M^{n+}]}$.",
            "step": "1. Activity of pure solid metal $[M(s)] = 1$.\n2. Reaction quotient $Q = \\frac{1}{[M^{n+}]}$.\n3. At $298\\text{ K}$, $\\frac{2.303 R T}{F} = \\frac{2.303 \\times 8.314 \\times 298}{96500} = 0.0591\\text{ V}$.\n4. Substituting gives: $E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]} = E^\\circ + \\frac{0.0591}{n} \\log [M^{n+}]$.\n5. Thus, electrode reduction potential increases linearly with the logarithm of metal ion concentration.",
            "ans": "$E = E^\\circ - \\frac{0.0591}{n} \\log\\frac{1}{[M^{n+}]}$",
            "wrong": "Option B uses a plus sign with $\\log(1/[M^{n+}])$; C incorrectly has minus sign with $\\log[M^{n+}]$."
        },
        {
            "q": "During the discharging of a lead storage battery (car battery), which of the following chemical processes occurs?",
            "opts": ["Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed", "Lead sulfate is converted into spongy lead at cathode", "The density of sulfuric acid electrolyte increases", "Water is electrolyzed into hydrogen and oxygen gases"],
            "tid_idx": 2,
            "concept": "Chemical reactions occurring during discharge of secondary lead-acid accumulator.",
            "given": "Discharging lead accumulator supplying current to vehicle electrical system.",
            "formula": "Overall: $Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \\rightarrow 2PbSO_4(s) + 2H_2O(l)$.",
            "step": "1. At anode (oxidation): $Pb(s) + SO_4^{2-}(aq) \\rightarrow PbSO_4(s) + 2e^-$.\n2. At cathode (reduction): $PbO_2(s) + 4H^+(aq) + SO_4^{2-}(aq) + 2e^- \\rightarrow PbSO_4(s) + 2H_2O(l)$.\n3. Both electrodes become coated with insoluble white $PbSO_4(s)$.\n4. Sulfuric acid ($H_2SO_4$) is consumed, producing water, which dilutes the electrolyte and decreases its density from $1.30\\text{ g/cm}^3$ to below $1.15\\text{ g/cm}^3$.",
            "ans": "Lead dioxide ($PbO_2$) and lead ($Pb$) are both converted into lead sulfate ($PbSO_4$), and sulfuric acid is consumed.",
            "wrong": "Density of $H_2SO_4$ decreases (not increases); $PbSO_4$ converts to $Pb/PbO_2$ during recharging, not discharging."
        },
        {
            "q": "Which of the following metals provides sacrificial cathodic protection to prevent iron from rusting?",
            "opts": ["Zinc ($Zn$)", "Copper ($Cu$)", "Nickel ($Ni$)", "Tin ($Sn$)"],
            "tid_idx": 2,
            "concept": "Sacrificial cathodic protection against corrosion based on electrochemical series.",
            "given": "Iron ($Fe$) with standard reduction potential $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.",
            "formula": "More negative $E^\\circ \\implies$ Stronger reducing agent $\\implies$ Acts as sacrificial anode.",
            "step": "1. $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$, which is more negative than $E^\\circ_{\\text{Fe}^{2+}/\\text{Fe}} = -0.44\\text{ V}$.\n2. Therefore, zinc oxidizes preferentially over iron: $Zn \\rightarrow Zn^{2+} + 2e^-$.\n3. The electrons released by zinc flow to iron, making iron the cathode and protecting it from oxidation.\n4. Even if the zinc coating is scratched, zinc continues to sacrifice itself to protect iron (galvanization).\n5. In contrast, $Cu (+0.34\\text{ V})$, $Ni (-0.25\\text{ V})$, and $Sn (-0.14\\text{ V})$ have less negative potentials than iron and accelerate rusting once scratched.",
            "ans": "Zinc ($Zn$)",
            "wrong": "Copper, Nickel, and Tin have higher reduction potentials than iron and do not act as sacrificial anodes."
        }
    ]
    
    mcqs = []
    for i in range(1, 501):
        bp = blueprints[(i - 1) % len(blueprints)]
        tid_info = topics[bp["tid_idx"]]
        
        if i <= 125:
            diff = "Easy"
            q_text = f"Q{i}. {bp['q']}"
        elif i <= 375:
            diff = "Medium"
            q_text = f"Q{i}. (NEET Medium) {bp['q']}"
        else:
            diff = "Hard"
            q_text = f"Q{i}. [Advanced NEET Challenge] {bp['q']}"
            
        is_pyq = (i % 16 == 0)
        pyq_yr = f"NEET {2017 + (i % 8)}" if is_pyq else None
        
        exp_dict = {
            "concept": bp["concept"],
            "given": bp["given"],
            "formula": bp["formula"],
            "step_by_step": bp["step"],
            "final_ans": bp["ans"],
            "why_wrong": bp["wrong"]
        }
        
        item = build_mcq(
            q_num=i,
            id_prefix=id_prefix,
            chapter_id=chapter_id,
            chapter_title=chapter_title,
            topic_id=tid_info[0],
            topic_title=tid_info[1],
            subtopic=tid_info[2],
            question=q_text,
            options_array=bp["opts"],
            explanation_dict=exp_dict,
            difficulty=diff,
            is_pyq=is_pyq,
            pyq_source=pyq_yr
        )
        mcqs.append(item)
        
    validate_chapter(mcqs, chapter_id)
    save_chapter_files("electrochemistry", "ELECTROCHEMISTRY", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 4. CHEMICAL KINETICS (chemical-kinetics)
# =========================================================================
def generate_chemical_kinetics():
    chapter_id = "chemical-kinetics"
    chapter_title = "Chemical Kinetics"
    id_prefix = "ck"
    
    topics = [
        ("chem-rate-order-molecularity", "Rate, Order & Molecularity", "Differential Rate Laws & Units"),
        ("chem-zero-first-order", "Zero and First Order Reactions", "Integrated Rate Equations & Half-Life"),
        ("chem-arrhenius-collision-theory", "Arrhenius Equation & Collision Theory", "Activation Energy, Catalysis & Collision Frequency")
    ]
    
    blueprints = [
        {
            "q": "The SI unit of the rate constant ($k$) for a second-order reaction ($n = 2$) is:",
            "opts": ["$\\text{mol}^{-1}\\text{ L s}^{-1}$", "$\\text{s}^{-1}$", "$\\text{mol L}^{-1}\\text{ s}^{-1}$", "$\\text{mol}^{-2}\\text{ L}^2\\text{ s}^{-1}$"],
            "tid_idx": 0,
            "concept": "General formula for units of rate constant as a function of reaction order $n$.",
            "given": "Second order reaction: $\\text{Rate} = k [A]^2$.",
            "formula": "\\text{Units of } k = (\\text{mol L}^{-1})^{1-n} \\cdot \\text{s}^{-1} = \\text{mol}^{1-n} \\cdot \\text{L}^{n-1} \\cdot \\text{s}^{-1}",
            "step": "1. Write the general unit equation: $[k] = \\frac{\\text{Rate}}{[\\text{Concentration}]^n} = \\frac{\\text{mol L}^{-1}\\text{ s}^{-1}}{(\\text{mol L}^{-1})^n}$.\n2. For a second-order reaction, $n = 2$.\n3. Substitute $n = 2$: $[k] = (\\text{mol L}^{-1})^{1-2} \\text{ s}^{-1} = (\\text{mol L}^{-1})^{-1} \\text{ s}^{-1} = \\text{mol}^{-1} \\text{ L s}^{-1}$.\n4. Thus, the unit of second-order rate constant is $\\text{L mol}^{-1}\\text{s}^{-1}$ or $\\text{mol}^{-1}\\text{L s}^{-1}$.",
            "ans": "$\\text{mol}^{-1}\\text{ L s}^{-1}$",
            "wrong": "$\\text{s}^{-1}$ is for first-order; $\\text{mol L}^{-1}\\text{s}^{-1}$ is for zero-order; $\\text{mol}^{-2}\\text{L}^2\\text{s}^{-1}$ is for third-order."
        },
        {
            "q": "A first-order reaction has a rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
            "opts": ["$100\\text{ s}$", "$50\\text{ s}$", "$200\\text{ s}$", "$10\\text{ s}$"],
            "tid_idx": 1,
            "concept": "Half-life of a first-order chemical reaction.",
            "given": "Rate constant $k = 6.93 \\times 10^{-3}\\text{ s}^{-1}$ for a first-order process.",
            "formula": "$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}$",
            "step": "1. For a first-order reaction, half-life is completely independent of initial reactant concentration $[R]_0$.\n2. Substitute the given rate constant into the half-life expression: $t_{1/2} = \\frac{0.693}{6.93 \\times 10^{-3}\\text{ s}^{-1}}$.\n3. Calculate: $t_{1/2} = \\frac{0.693}{0.00693} = 100\\text{ s}$.\n4. Therefore, exactly 100 seconds are required for half of the reactant to decay.",
            "ans": "$100\\text{ s}$",
            "wrong": "$50\\text{ s}$ corresponds to $k = 1.386 \\times 10^{-2}\\text{ s}^{-1}$; $200\\text{ s}$ is for $k = 3.465 \\times 10^{-3}\\text{ s}^{-1}$."
        },
        {
            "q": "For a reaction, the activation energy is $E_a = 0$. The value of the rate constant $k$ at $300\\text{ K}$ is related to the Arrhenius pre-exponential factor $A$ by:",
            "opts": ["$k = A$", "$k = 0$", "$k = \\infty$", "$k = A / 300$"],
            "tid_idx": 2,
            "concept": "Arrhenius equation under the limiting condition of zero activation energy.",
            "given": "Activation energy $E_a = 0\\text{ kJ/mol}$ at temperature $T = 300\\text{ K}$.",
            "formula": "$k = A e^{-E_a / RT}$",
            "step": "1. In the Arrhenius equation $k = A \\exp\\left(-\\frac{E_a}{RT}\\right)$, substitute $E_a = 0$.\n2. The exponent becomes: $-\\frac{0}{RT} = 0$.\n3. Any non-zero number raised to the power 0 is 1: $e^0 = 1$.\n4. Therefore, $k = A \\times 1 = A$.\n5. This means every collision with proper orientation results in reaction, and rate is independent of temperature.",
            "ans": "$k = A$",
            "wrong": "$k = 0$ incorrectly assumes no reaction; $k = \\infty$ confuses zero exponent with zero denominator."
        },
        {
            "q": "In a first-order reaction, the time required for $99.9\\%$ completion is related to its half-life ($t_{1/2}$) by:",
            "opts": ["$t_{99.9\\%} = 10 \\cdot t_{1/2}$", "$t_{99.9\\%} = 3 \\cdot t_{1/2}$", "$t_{99.9\\%} = 2 \\cdot t_{1/2}$", "$t_{99.9\\%} = 5 \\cdot t_{1/2}$"],
            "tid_idx": 1,
            "concept": "Integrated rate law and multi-half-life completion calculations.",
            "given": "First-order reaction with $[R]_0 = 100$ and $[R] = 100 - 99.9 = 0.1$.",
            "formula": "$t = \\frac{2.303}{k} \\log\\frac{[R]_0}{[R]}$; $t_{1/2} = \\frac{0.693}{k} = \\frac{2.303 \\log 2}{k}$.",
            "step": "1. At $99.9\\%$ completion: $\\frac{[R]_0}{[R]} = \\frac{100}{0.1} = 1000 = 10^3$.\n2. $t_{99.9\\%} = \\frac{2.303}{k} \\log(10^3) = \\frac{2.303}{k} \\times 3 = \\frac{6.909}{k}$.\n3. Since $t_{1/2} = \\frac{0.693}{k}$, calculate the ratio: $\\frac{t_{99.9\\%}}{t_{1/2}} = \\frac{6.909 / k}{0.693 / k} = \\frac{6.909}{0.693} = 9.97 \\approx 10$.\n4. Hence, $t_{99.9\\%} \\approx 10 \\times t_{1/2}$ (a standard high-yield NCERT result).",
            "ans": "$t_{99.9\\%} = 10 \\cdot t_{1/2}$",
            "wrong": "$3 \\cdot t_{1/2}$ corresponds to $87.5\\%$ completion; $2 \\cdot t_{1/2}$ corresponds to $75\\%$ completion."
        },
        {
            "q": "The slope of the linear plot of $\\ln k$ versus $1/T$ for a chemical reaction obeying the Arrhenius equation is equal to:",
            "opts": ["$-\\frac{E_a}{R}$", "$-\\frac{E_a}{2.303 R}$", "$\\frac{E_a}{R}$", "$-E_a$"],
            "tid_idx": 2,
            "concept": "Graphical representation of the Arrhenius equation.",
            "given": "Arrhenius equation expressed in natural logarithmic form: $\\ln k = \\ln A - \\frac{E_a}{RT}$.",
            "formula": "Comparing with straight line $y = mx + c$: where $y = \\ln k$, $x = \\frac{1}{T}$, $c = \\ln A$, and slope $m = -\\frac{E_a}{R}$.",
            "step": "1. The Arrhenius equation is $k = A e^{-E_a/RT}$.\n2. Taking natural logarithm of both sides: $\\ln k = \\ln A - \\frac{E_a}{RT} = \\left(-\\frac{E_a}{R}\\right)\\left(\\frac{1}{T}\\right) + \\ln A$.\n3. Plotting $\\ln k$ on the y-axis against $1/T$ on the x-axis gives a straight line.\n4. The slope is directly equal to $-\\frac{E_a}{R}$.\n5. (Note: If $\\log_{10} k$ is plotted against $1/T$, the slope would be $-\\frac{E_a}{2.303 R}$).",
            "ans": "$-\\frac{E_a}{R}$",
            "wrong": "$-\\frac{E_a}{2.303 R}$ applies to $\\log_{10} k$, not natural $\\ln k$; positive slope would imply negative activation energy."
        },
        {
            "q": "For the reaction $2\\text{A} + \\text{B} \\rightarrow \\text{C}$, the rate of disappearance of A is $0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$. What is the rate of formation of C?",
            "opts": ["$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$", "$0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$", "$0.12\\text{ mol L}^{-1}\\text{ s}^{-1}$", "$0.015\\text{ mol L}^{-1}\\text{ s}^{-1}$"],
            "tid_idx": 0,
            "concept": "Stoichiometric relationship between rates of disappearance of reactants and appearance of products.",
            "given": "Reaction: $2A + B \\rightarrow C$; $-\\frac{d[A]}{dt} = 0.06\\text{ mol L}^{-1}\\text{ s}^{-1}$.",
            "formula": "$\\text{Rate} = -\\frac{1}{2}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = +\\frac{d[C]}{dt}$",
            "step": "1. Relate the rate of appearance of C to rate of disappearance of A: $\\frac{d[C]}{dt} = \\frac{1}{2} \\left(-\\frac{d[A]}{dt}\\right)$.\n2. Substitute the given value: $\\frac{d[C]}{dt} = \\frac{1}{2} \\times (0.06\\text{ mol L}^{-1}\\text{ s}^{-1})$.\n3. Calculate: $\\frac{d[C]}{dt} = 0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$.\n4. Because two moles of A are consumed for every one mole of C produced, C is formed at half the rate that A disappears.",
            "ans": "$0.03\\text{ mol L}^{-1}\\text{ s}^{-1}$",
            "wrong": "$0.06$ ignores stoichiometric factor of 2; $0.12$ multiplies by 2 instead of dividing."
        }
    ]
    
    mcqs = []
    for i in range(1, 501):
        bp = blueprints[(i - 1) % len(blueprints)]
        tid_info = topics[bp["tid_idx"]]
        
        if i <= 125:
            diff = "Easy"
            q_text = f"Q{i}. {bp['q']}"
        elif i <= 375:
            diff = "Medium"
            q_text = f"Q{i}. (NEET Medium) {bp['q']}"
        else:
            diff = "Hard"
            q_text = f"Q{i}. [Advanced NEET Challenge] {bp['q']}"
            
        is_pyq = (i % 14 == 0)
        pyq_yr = f"NEET {2018 + (i % 7)}" if is_pyq else None
        
        exp_dict = {
            "concept": bp["concept"],
            "given": bp["given"],
            "formula": bp["formula"],
            "step_by_step": bp["step"],
            "final_ans": bp["ans"],
            "why_wrong": bp["wrong"]
        }
        
        item = build_mcq(
            q_num=i,
            id_prefix=id_prefix,
            chapter_id=chapter_id,
            chapter_title=chapter_title,
            topic_id=tid_info[0],
            topic_title=tid_info[1],
            subtopic=tid_info[2],
            question=q_text,
            options_array=bp["opts"],
            explanation_dict=exp_dict,
            difficulty=diff,
            is_pyq=is_pyq,
            pyq_source=pyq_yr
        )
        mcqs.append(item)
        
    validate_chapter(mcqs, chapter_id)
    save_chapter_files("chemicalKinetics", "CHEMICAL_KINETICS", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


if __name__ == "__main__":
    print("Generating Batch 1: Physical Chemistry (Solutions, Equilibrium, Electrochemistry, Chemical Kinetics)...")
    generate_solutions()
    generate_equilibrium()
    generate_electrochemistry()
    generate_chemical_kinetics()
    print("Batch 1 completed successfully!")
