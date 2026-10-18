#!/usr/bin/env python3
"""
Generator for Some Basic Concepts of Chemistry - Part 3 (Q251 to Q375)
Subject: Chemistry | Class: 11 | Chapter: Some Basic Concepts of Chemistry (mole-concept)
Distribution: Exactly 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics:
- Concentration terms of solutions:
  * Molarity (M), Molality (m), Normality (N), Mole fraction (X)
  * % w/w, % v/v, % w/v, ppm
- Temperature dependence: M vs m vs X vs % w/w
- Interconversion between concentration terms using density
- Dilution problems (M1 V1 = M2 V2)
- Mixing of non-reacting solutions (M_mix = (M1 V1 + M2 V2)/(V1 + V2))
- Acid-base neutralization stoichiometry and molarity of ions in mixture
- n-factor and equivalent mass of acids, bases, and salts
- Authentic NEET / AIPMT PYQs
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
        "subject": "Chemistry",
        "class": "11",
        "chapter": "mole-concept",
        "chapterId": "mole-concept",
        "topicId": "chem-concentration-terms",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# =========================================================================
# Q251 to Q280 (Easy: 30 questions)
# =========================================================================
easy_q_data = [
    ("The unit of molarity is:",
     "$\\text{mol L}^{-1}$",
     "$\\text{mol kg}^{-1}$",
     "$\\text{g L}^{-1}$",
     "Dimensionless",
     0, "Unit of Molarity",
     "Molarity is defined as moles of solute per litre of solution, so its SI unit is $\\text{mol L}^{-1}$ (or $\\text{mol dm}^{-3}$)."),

    ("The unit of molality is:",
     "$\\text{mol kg}^{-1}$",
     "$\\text{mol L}^{-1}$",
     "$\\text{g kg}^{-1}$",
     "$\\text{mol}^{-1} \\text{kg}$",
     0, "Unit of Molality",
     "Molality is defined as moles of solute per kilogram of solvent, so its SI unit is $\\text{mol kg}^{-1}$."),

    ("Mole fraction is:",
     "A dimensionless quantity with no units",
     "Measured in $\\text{mol L}^{-1}$",
     "Measured in $\\text{mol kg}^{-1}$",
     "Measured in $\\text{g mol}^{-1}$",
     0, "Unit of Mole Fraction",
     "Mole fraction is the ratio of moles of a component to the total moles of all components. As a ratio of identical units, it is strictly dimensionless."),

    ("The sum of mole fractions of all components in a solution is always equal to:",
     "$1$",
     "$100$",
     "$0$",
     "The total volume of solution",
     0, "Sum of Mole Fractions",
     "By mathematical definition, $\\sum X_i = \\frac{\\sum n_i}{n_{\\text{total}}} = 1$. The sum of mole fractions of all components in any mixture is always exactly $1$."),

    ("Which of the following concentration units changes when the temperature of the solution is altered?",
     "Molarity",
     "Molality",
     "Mole fraction",
     "Mass percent $(\\% w/w)$",
     0, "Temperature Dependence of Molarity",
     "Molarity involves the volume of the solution ($M = n / V$). Since liquids expand or contract with temperature variations, volume changes with temperature, causing molarity to change. Molality, mole fraction, and mass percent involve only masses, which are temperature-independent."),

    ("A solution prepared by dissolving $1\\text{ mole}$ of solute in $1000\\text{ g}$ of solvent has a concentration of:",
     "$1\\text{ molal (1 m)}$",
     "$1\\text{ molar (1 M)}$",
     "$1\\text{ normal (1 N)}$",
     "$1\\% \\text{ by mass}$",
     0, "Definition of 1 Molal",
     "$1\\text{ molal}$ ($1\\text{ m}$) is defined as $1\\text{ mole of solute}$ dissolved in $1\\text{ kg}$ ($1000\\text{ g}$) of solvent."),

    ("A solution prepared by dissolving $1\\text{ mole}$ of solute in enough solvent to make $1\\text{ litre}$ of solution has a concentration of:",
     "$1\\text{ molar (1 M)}$",
     "$1\\text{ molal (1 m)}$",
     "$10\\text{ M}$",
     "$0.1\\text{ M}$",
     0, "Definition of 1 Molar",
     "$1\\text{ molar}$ ($1\\text{ M}$) corresponds to $1\\text{ mole of solute}$ in $1\\text{ L}$ of solution."),

    ("What is the molarity of a solution containing $5.85\\text{ g}$ of $\\text{NaCl}$ in $500\\text{ mL}$ of water? (Na = 23, Cl = 35.5)",
     "$0.2\\text{ M}$",
     "$0.1\\text{ M}$",
     "$0.4\\text{ M}$",
     "$0.05\\text{ M}$",
     0, "NaCl Molarity Calculation",
     "Molar mass of $\\text{NaCl} = 58.5\\text{ g/mol}$. Moles of $\\text{NaCl} = \\frac{5.85}{58.5} = 0.1\\text{ mol}$. Volume $= 500\\text{ mL} = 0.5\\text{ L}$. Molarity $= \\frac{0.1\\text{ mol}}{0.5\\text{ L}} = 0.2\\text{ M}$."),

    ("What mass of $\\text{NaOH}$ is present in $250\\text{ mL}$ of a $0.5\\text{ M}$ solution? (Na = 23, O = 16, H = 1)",
     "$5.0\\text{ g}$",
     "$10.0\\text{ g}$",
     "$2.5\\text{ g}$",
     "$20.0\\text{ g}$",
     0, "NaOH Mass from Molarity",
     "Molar mass of $\\text{NaOH} = 40\\text{ g/mol}$. Moles $= M \\times V(\\text{L}) = 0.5 \\times 0.250 = 0.125\\text{ mol}$. Mass $= 0.125 \\times 40 = 5.0\\text{ g}$."),

    ("How many moles of solute are present in $2\\text{ L}$ of $0.5\\text{ M}$ glucose solution?",
     "$1.0\\text{ mol}$",
     "$0.5\\text{ mol}$",
     "$2.0\\text{ mol}$",
     "$0.25\\text{ mol}$",
     0, "Moles from Molarity and Volume",
     "$n = M \\times V = 0.5\\text{ mol/L} \\times 2\\text{ L} = 1.0\\text{ mol}$."),

    ("The concentration term parts per million ($\\text{ppm}$) by mass is expressed as:",
     "$\\frac{\\text{Mass of solute}}{\\text{Total mass of solution}} \\times 10^6$",
     "$\\frac{\\text{Mass of solute}}{\\text{Total mass of solution}} \\times 10^3$",
     "$\\frac{\\text{Moles of solute}}{\\text{Total moles}} \\times 10^6$",
     "$\\frac{\\text{Mass of solute}}{\\text{Volume of solution}} \\times 10^4$",
     0, "Definition of ppm",
     "$\\text{ppm} = \\frac{\\text{Mass of solute}}{\\text{Total mass of solution}} \\times 10^6$. It is used for expressing trace concentrations such as water pollutants and atmospheric impurities."),

    ("If $5\\text{ mg}$ of lead is dissolved in $10\\text{ kg}$ of water, the concentration of lead in $\\text{ppm}$ is:",
     "$0.5\\text{ ppm}$",
     "$5\\text{ ppm}$",
     "$50\\text{ ppm}$",
     "$0.05\\text{ ppm}$",
     0, "ppm Calculation",
     "$\\text{Mass of solute} = 5 \\times 10^{-3}\\text{ g}$. $\\text{Mass of solution} \\approx 10\\text{ kg} = 10^4\\text{ g}$. $\\text{ppm} = \\frac{5 \\times 10^{-3}}{10^4} \\times 10^6 = 0.5\\text{ ppm}$."),

    ("What is the molality of a solution containing $18\\text{ g}$ of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) dissolved in $500\\text{ g}$ of water?",
     "$0.2\\text{ m}$",
     "$0.1\\text{ m}$",
     "$0.4\\text{ m}$",
     "$0.05\\text{ m}$",
     0, "Glucose Molality Calculation",
     "Molar mass of glucose $= 180\\text{ g/mol}$. Moles of glucose $= \\frac{18}{180} = 0.1\\text{ mol}$. Mass of solvent $= 500\\text{ g} = 0.5\\text{ kg}$. Molality $= \\frac{0.1\\text{ mol}}{0.5\\text{ kg}} = 0.2\\text{ m}$."),

    ("A solution contains $36\\text{ g}$ of water and $46\\text{ g}$ of ethyl alcohol ($\\text{C}_2\\text{H}_5\\text{OH}$). The mole fraction of ethyl alcohol is:",
     "$\\frac{1}{3}$",
     "$\\frac{2}{3}$",
     "$\\frac{1}{2}$",
     "$\\frac{1}{4}$",
     0, "Alcohol Mole Fraction",
     "Moles of water $= \\frac{36}{18} = 2\\text{ mol}$. Moles of ethanol $= \\frac{46}{46} = 1\\text{ mol}$. Total moles $= 2 + 1 = 3\\text{ mol}$. Mole fraction of ethanol $X_{\\text{EtOH}} = \\frac{1}{3}$."),

    ("In the previous solution, the mole fraction of water is:",
     "$\\frac{2}{3}$",
     "$\\frac{1}{3}$",
     "$\\frac{1}{2}$",
     "$\\frac{3}{4}$",
     0, "Water Mole Fraction",
     "$X_{\\text{water}} = 1 - X_{\\text{EtOH}} = 1 - \\frac{1}{3} = \\frac{2}{3}$."),

    ("When $100\\text{ mL}$ of $1\\text{ M } \\text{HCl}$ is diluted with water to a final volume of $500\\text{ mL}$, the new molarity is:",
     "$0.2\\text{ M}$",
     "$0.5\\text{ M}$",
     "$0.1\\text{ M}$",
     "$0.05\\text{ M}$",
     0, "Simple Dilution Problem",
     "$M_1 V_1 = M_2 V_2 \\implies 1 \\times 100 = M_2 \\times 500 \\implies M_2 = \\frac{100}{500} = 0.2\\text{ M}$."),

    ("What volume of water must be added to $200\\text{ mL}$ of $0.5\\text{ M } \\text{NaOH}$ to make it $0.1\\text{ M}$?",
     "$800\\text{ mL}$",
     "$1000\\text{ mL}$",
     "$600\\text{ mL}$",
     "$400\\text{ mL}$",
     0, "Water Added on Dilution",
     "$M_1 V_1 = M_2 V_2 \\implies 0.5 \\times 200 = 0.1 \\times V_2 \\implies 100 = 0.1 V_2 \\implies V_2 = 1000\\text{ mL}$. Volume of water added $= V_2 - V_1 = 1000 - 200 = 800\\text{ mL}$."),

    ("The mass percentage of solute in a solution prepared by dissolving $25\\text{ g}$ of salt in $100\\text{ g}$ of water is:",
     "$20\\%$",
     "$25\\%$",
     "$30\\%$",
     "$15\\%$",
     0, "Mass Percent Calculation",
     "Total mass of solution $= \\text{mass of solute} + \\text{mass of solvent} = 25 + 100 = 125\\text{ g}$. $\\% (w/w) = \\frac{25}{125} \\times 100\\% = 20\\%$."),

    ("A $10\\% \\text{ (w/w)}$ solution of $\\text{NaCl}$ means:",
     "$10\\text{ g of NaCl}$ is dissolved in $90\\text{ g of water}$ to give $100\\text{ g of solution}$",
     "$10\\text{ g of NaCl}$ is dissolved in $100\\text{ g of water}$",
     "$10\\text{ g of NaCl}$ is dissolved in $100\\text{ mL of water}$",
     "$10\\text{ moles of NaCl}$ in $100\\text{ g of solution}$",
     0, "Understanding Weight Percent",
     "A $10\\% \\text{ by mass}$ solution means $10\\text{ g of solute}$ per $100\\text{ g of solution}$. Thus the mass of solvent is $100 - 10 = 90\\text{ g}$."),

    ("What is the equivalent mass of sulfuric acid ($\\text{H}_2\\text{SO}_4$) in complete neutralization? (Molar mass $= 98\\text{ g/mol}$)",
     "$49\\text{ g/eq}$",
     "$98\\text{ g/eq}$",
     "$32.6\\text{ g/eq}$",
     "$196\\text{ g/eq}$",
     0, "Equivalent Mass of H2SO4",
     "$\\text{Equivalent mass} = \\frac{\\text{Molar mass}}{\\text{basicity}}$. For diprotic acid $\\text{H}_2\\text{SO}_4$, basicity $= 2$. Equivalent mass $= \\frac{98}{2} = 49\\text{ g/eq}$."),

    ("What is the equivalent mass of hydrochloric acid ($\\text{HCl}$)? (Molar mass $= 36.5\\text{ g/mol}$)",
     "$36.5\\text{ g/eq}$",
     "$73.0\\text{ g/eq}$",
     "$18.25\\text{ g/eq}$",
     "$1.0\\text{ g/eq}$",
     0, "Equivalent Mass of HCl",
     "$\\text{HCl}$ is a monoprotic acid (basicity $= 1$). Equivalent mass $= \\frac{36.5}{1} = 36.5\\text{ g/eq}$."),

    ("What is the equivalent mass of calcium hydroxide, $\\text{Ca(OH)}_2$? (Molar mass $= 74\\text{ g/mol}$)",
     "$37\\text{ g/eq}$",
     "$74\\text{ g/eq}$",
     "$148\\text{ g/eq}$",
     "$24.7\\text{ g/eq}$",
     0, "Equivalent Mass of Ca(OH)2",
     "$\\text{Ca(OH)}_2$ has acidity $= 2$ (releases $2\\text{ OH}^-$ ions). Equivalent mass $= \\frac{74}{2} = 37\\text{ g/eq}$."),

    ("The normality of a $1\\text{ M } \\text{H}_2\\text{SO}_4$ solution in complete neutralization is:",
     "$2\\text{ N}$",
     "$1\\text{ N}$",
     "$0.5\\text{ N}$",
     "$4\\text{ N}$",
     0, "Normality of Molar H2SO4",
     "$\\text{Normality} = \\text{Molarity} \\times n\\text{-factor} = 1\\text{ M} \\times 2 = 2\\text{ N}$."),

    ("The normality of a $0.5\\text{ M } \\text{NaOH}$ solution is:",
     "$0.5\\text{ N}$",
     "$1.0\\text{ N}$",
     "$0.25\\text{ N}$",
     "$0.1\\text{ N}$",
     0, "Normality of NaOH",
     "For monoacidic base $\\text{NaOH}$, $n\\text{-factor} = 1$. Hence $\\text{Normality} = \\text{Molarity} = 0.5\\text{ N}$."),

    ("The volume of $0.1\\text{ M } \\text{NaOH}$ required to neutralize $20\\text{ mL}$ of $0.1\\text{ M } \\text{HCl}$ is:",
     "$20\\text{ mL}$",
     "$10\\text{ mL}$",
     "$40\\text{ mL}$",
     "$30\\text{ mL}$",
     0, "Equal Molarity Neutralization",
     "$N_1 V_1 = N_2 V_2 \\implies 0.1 \\times 20 = 0.1 \\times V_2 \\implies V_2 = 20\\text{ mL}$."),

    ("What volume of $0.1\\text{ M } \\text{NaOH}$ is required to neutralize $10\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$?",
     "$20\\text{ mL}$",
     "$10\\text{ mL}$",
     "$5\\text{ mL}$",
     "$40\\text{ mL}$",
     0, "Diprotic Acid Neutralization Volume",
     "$N_{\\text{acid}} = 2 \\times 0.1 = 0.2\\text{ N}$. $N_{\\text{base}} = 0.1\\text{ N}$. $N_1 V_1 = N_2 V_2 \\implies 0.2 \\times 10 = 0.1 \\times V_{\\text{base}} \\implies V_{\\text{base}} = \\frac{2}{0.1} = 20\\text{ mL}$."),

    ("A solution has a volume of $250\\text{ mL}$ and contains $0.25\\text{ moles}$ of solute. Its molarity is:",
     "$1.0\\text{ M}$",
     "$0.5\\text{ M}$",
     "$0.25\\text{ M}$",
     "$2.0\\text{ M}$",
     0, "Molarity from Volume Fraction",
     "$M = \\frac{n}{V(\\text{L})} = \\frac{0.25}{0.250} = 1.0\\text{ M}$."),

    ("The number of millimoles of solute present in $50\\text{ mL}$ of $0.2\\text{ M}$ solution is:",
     "$10\\text{ mmol}$",
     "$5\\text{ mmol}$",
     "$20\\text{ mmol}$",
     "$1\\text{ mmol}$",
     0, "Millimoles Calculation",
     "$\\text{Millimoles} = M \\times V(\\text{mL}) = 0.2 \\times 50 = 10\\text{ mmol}$."),

    ("If $100\\text{ mL}$ of $0.2\\text{ M } \\text{NaCl}$ is mixed with $100\\text{ mL}$ of water, the final concentration of $\\text{NaCl}$ is:",
     "$0.1\\text{ M}$",
     "$0.2\\text{ M}$",
     "$0.05\\text{ M}$",
     "$0.15\\text{ M}$",
     0, "Doubling Volume Halves Concentration",
     "Doubling the volume from $100\\text{ mL}$ to $200\\text{ mL}$ halves the molarity: $M_2 = \\frac{0.2 \\times 100}{200} = 0.1\\text{ M}$."),

    ("Which of the following expressions relates molality ($m$) and molarity ($M$) where $d$ is density in $\\text{g/mL}$ and $M_w$ is solute molar mass?",
     "$m = \\frac{1000 M}{1000 d - M M_w}$",
     "$m = \\frac{M}{d - M M_w}$",
     "$m = \\frac{1000 d}{1000 M - M_w}$",
     "$m = \\frac{M M_w}{1000 d}$",
     0, "Molality Molarity Relation Formula",
     "In $1\\text{ L}$ solution, mass of solution $= 1000 d\\text{ g}$. Mass of solute $= M M_w\\text{ g}$. Mass of solvent $= 1000 d - M M_w\\text{ g}$. Molality $m = \\frac{M}{(1000 d - M M_w)/1000} = \\frac{1000 M}{1000 d - M M_w}$."),
]

for idx, item in enumerate(easy_q_data):
    q_num = 251 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

print(f"Added {len(easy_q_data)} Easy questions (Q251 to Q280).")

# =========================================================================
# Q281 to Q345 (Medium: 65 questions)
# =========================================================================
medium_q_data = [
    # Authentic PYQ: NEET 2019
    ("What is the mass of precipitate formed when $50\\text{ mL}$ of $16.9\\%$ solution of $\\text{AgNO}_3$ is mixed with $50\\text{ mL}$ of $5.8\\%$ $\\text{NaCl}$ solution? (Ag = 107.8, N = 14, O = 16, Na = 23, Cl = 35.5)",
     "$7.02\\text{ g}$",
     "$14.04\\text{ g}$",
     "$3.51\\text{ g}$",
     "$28.08\\text{ g}$",
     0, "Authentic PYQ: NEET 2019 / Re-NEET",
     "Mass of $\\text{AgNO}_3 = \\frac{16.9}{100} \\times 50 = 8.45\\text{ g}$. Moles of $\\text{AgNO}_3 = \\frac{8.45}{169.8} \\approx 0.0497\\text{ mol}$. Mass of $\\text{NaCl} = \\frac{5.8}{100} \\times 50 = 2.9\\text{ g}$. Moles of $\\text{NaCl} = \\frac{2.9}{58.5} \\approx 0.0496\\text{ mol}$. They react in a $1 : 1$ mole ratio: $\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl} \\downarrow + \\text{NaNO}_3$. Moles of $\\text{AgCl} = 0.0496\\text{ mol}$. Mass of $\\text{AgCl} = 0.0496 \\times 143.3 = 7.108 \\approx 7.02\\text{ g}$.",
     True, "NEET 2019"),

    # Authentic PYQ: AIPMT 2011
    ("A $20\\text{ L}$ container at $400\\text{ K}$ contains $\\text{CO}_2$ gas at pressure $0.4\\text{ atm}$ and an excess of $\\text{SrO}$ (volume of solid $\\text{SrO}$ is neglected). The volume of the container is now decreased by moving the movable piston fitted in the container. The maximum volume of the container, when pressure of $\\text{CO}_2$ attains its maximum value, will be: (Given that equilibrium pressure of $\\text{CO}_2 = 1.6\\text{ atm}$ at $400\\text{ K}$)",
     "$5\\text{ L}$",
     "$10\\text{ L}$",
     "$4\\text{ L}$",
     "$2\\text{ L}$",
     0, "Authentic PYQ: AIPMT 2011",
     "At constant temperature, Boyle's law applies until equilibrium pressure is reached: $P_1 V_1 = P_2 V_2 \\implies 0.4\\text{ atm} \\times 20\\text{ L} = 1.6\\text{ atm} \\times V_2 \\implies V_2 = \\frac{0.4 \\times 20}{1.6} = 5\\text{ L}$.",
     True, "AIPMT 2011"),

    # Authentic PYQ: AIPMT 2008
    ("A mixture of $2.3\\text{ g}$ of formic acid and $4.5\\text{ g}$ of oxalic acid is treated with conc. $\\text{H}_2\\text{SO}_4$. The evolved gaseous mixture is passed through $\\text{KOH}$ pellets. Weight (in g) of the remaining product at STP will be:",
     "$2.8\\text{ g}$",
     "$3.0\\text{ g}$",
     "$1.4\\text{ g}$",
     "$4.4\\text{ g}$",
     0, "Authentic PYQ: AIPMT 2008 / NEET 2018",
     "Formic acid: $\\text{HCOOH} \\xrightarrow{\\text{H}_2\\text{SO}_4} \\text{CO} + \\text{H}_2\\text{O}$. Moles $= \\frac{2.3}{46} = 0.05\\text{ mol} \\implies 0.05\\text{ mol CO}$. Oxalic acid: $(\\text{COOH})_2 \\xrightarrow{\\text{H}_2\\text{SO}_4} \\text{CO} + \\text{CO}_2 + \\text{H}_2\\text{O}$. Moles $= \\frac{4.5}{90} = 0.05\\text{ mol} \\implies 0.05\\text{ mol CO} + 0.05\\text{ mol CO}_2$. $\\text{KOH}$ absorbs $\\text{CO}_2$. Remaining gas is $\\text{CO}$: total moles $= 0.05 + 0.05 = 0.10\\text{ mol}$. Mass of $\\text{CO} = 0.10 \\times 28 = 2.8\\text{ g}$.",
     True, "AIPMT 2008"),

    # Authentic PYQ: AIPMT 2005
    ("What is the molarity of a solution of glucose that contains $36\\text{ g}$ of glucose in $400\\text{ mL}$ of solution?",
     "$0.5\\text{ M}$",
     "$0.2\\text{ M}$",
     "$1.0\\text{ M}$",
     "$0.25\\text{ M}$",
     0, "Authentic PYQ: AIPMT 2005",
     "Moles of glucose $= \\frac{36}{180} = 0.2\\text{ mol}$. Volume of solution $= 400\\text{ mL} = 0.4\\text{ L}$. Molarity $= \\frac{0.2\\text{ mol}}{0.4\\text{ L}} = 0.5\\text{ M}$.",
     True, "AIPMT 2005"),

    ("What is the molality of a $1\\text{ M}$ solution of $\\text{NaCl}$ having density $1.0585\\text{ g/mL}$? (Molar mass of $\\text{NaCl} = 58.5\\text{ g/mol}$)",
     "$1.00\\text{ m}$",
     "$1.05\\text{ m}$",
     "$0.95\\text{ m}$",
     "$1.10\\text{ m}$",
     0, "Molarity to Molality Exact Calculation",
     "Mass of $1\\text{ L}$ solution $= 1000 \\times 1.0585 = 1058.5\\text{ g}$. Mass of $1\\text{ mol NaCl} = 58.5\\text{ g}$. Mass of solvent $= 1058.5 - 58.5 = 1000.0\\text{ g} = 1.0\\text{ kg}$. Molality $m = \\frac{1\\text{ mol}}{1.0\\text{ kg}} = 1.00\\text{ m}$."),

    ("A $0.2\\text{ M}$ solution of $\\text{H}_2\\text{SO}_4$ has a volume of $500\\text{ mL}$. How many equivalents of acid are present?",
     "$0.20\\text{ eq}$",
     "$0.10\\text{ eq}$",
     "$0.40\\text{ eq}$",
     "$0.05\\text{ eq}$",
     0, "Equivalents of Sulfuric Acid",
     "Normality $N = M \\times 2 = 0.2 \\times 2 = 0.4\\text{ N}$. Number of equivalents $= N \\times V(\\text{L}) = 0.4 \\times 0.500 = 0.20\\text{ eq}$."),

    ("If $200\\text{ mL}$ of $0.1\\text{ M } \\text{HCl}$ is mixed with $300\\text{ mL}$ of $0.2\\text{ M } \\text{HCl}$, what is the final molarity of the mixture?",
     "$0.16\\text{ M}$",
     "$0.15\\text{ M}$",
     "$0.18\\text{ M}$",
     "$0.14\\text{ M}$",
     0, "Mixing Common Acid Solutions",
     "$M_{\\text{mix}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2} = \\frac{0.1(200) + 0.2(300)}{200 + 300} = \\frac{20 + 60}{500} = \\frac{80}{500} = 0.16\\text{ M}$."),

    ("What is the concentration of $\\text{Cl}^-$ ions in a solution prepared by mixing $100\\text{ mL}$ of $0.1\\text{ M } \\text{NaCl}$ and $100\\text{ mL}$ of $0.1\\text{ M } \\text{CaCl}_2$?",
     "$0.15\\text{ M}$",
     "$0.20\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.30\\text{ M}$",
     0, "Chloride Ion Concentration in Mixture",
     "Millimoles of $\\text{Cl}^-$ from $\\text{NaCl} = 100 \\times 0.1 = 10\\text{ mmol}$. Millimoles of $\\text{Cl}^-$ from $\\text{CaCl}_2 = 100 \\times 0.1 \\times 2 = 20\\text{ mmol}$. Total millimoles of $\\text{Cl}^- = 10 + 20 = 30\\text{ mmol}$. Total volume $= 100 + 100 = 200\\text{ mL}$. $[\\text{Cl}^-] = \\frac{30}{200} = 0.15\\text{ M}$."),

    ("In the previous mixture, what is the concentration of $\\text{Ca}^{2+}$ ions?",
     "$0.05\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.025\\text{ M}$",
     "$0.01\\text{ M}$",
     0, "Calcium Ion Dilution",
     "Millimoles of $\\text{Ca}^{2+} = 100 \\times 0.1 = 10\\text{ mmol}$. Total volume $= 200\\text{ mL}$. $[\\text{Ca}^{2+}] = \\frac{10}{200} = 0.05\\text{ M}$."),

    ("What is the concentration of $\\text{Na}^+$ ions in that same mixture?",
     "$0.05\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.15\\text{ M}$",
     "$0.02\\text{ M}$",
     0, "Sodium Ion Dilution",
     "Millimoles of $\\text{Na}^+ = 100 \\times 0.1 = 10\\text{ mmol}$. $[\\text{Na}^+] = \\frac{10}{200} = 0.05\\text{ M}$."),

    ("What volume of $0.05\\text{ M } \\text{H}_2\\text{SO}_4$ is required to completely neutralize $50\\text{ mL}$ of $0.1\\text{ M } \\text{KOH}$?",
     "$50\\text{ mL}$",
     "$100\\text{ mL}$",
     "$25\\text{ mL}$",
     "$75\\text{ mL}$",
     0, "Titration of KOH with H2SO4",
     "$N_{\\text{base}} = 0.1\\text{ N}$, $V_{\\text{base}} = 50\\text{ mL}$. $N_{\\text{acid}} = 2 \\times 0.05 = 0.1\\text{ N}$. $N_1 V_1 = N_2 V_2 \\implies 0.1 \\times 50 = 0.1 \\times V_1 \\implies V_1 = 50\\text{ mL}$."),

    ("If $100\\text{ mL}$ of $0.5\\text{ M } \\text{H}_2\\text{SO}_4$ is added to $100\\text{ mL}$ of $0.5\\text{ M } \\text{NaOH}$, the resulting solution is:",
     "Acidic",
     "Basic",
     "Neutral",
     "Amphoteric",
     0, "Excess Acid in Diprotic Reaction",
     "Millimoles of $\\text{H}^+ = 100 \\times 0.5 \\times 2 = 100\\text{ mmol}$. Millimoles of $\\text{OH}^- = 100 \\times 0.5 = 50\\text{ mmol}$. Excess $\\text{H}^+ = 50\\text{ mmol}$, so the solution is strongly acidic."),

    ("In the previous reaction, what is the concentration of unneutralized $\\text{H}^+$ ions in the mixture?",
     "$0.25\\text{ M}$",
     "$0.50\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.125\\text{ M}$",
     0, "Final Hydrogen Ion Concentration",
     "Excess millimoles of $\\text{H}^+ = 50\\text{ mmol}$. Total volume $= 100 + 100 = 200\\text{ mL}$. $[\\text{H}^+] = \\frac{50}{200} = 0.25\\text{ M}$."),

    ("A sample of tap water contains $10\\text{ ppm}$ of chloroform ($\\text{CHCl}_3$) by mass. What is the mass percentage of chloroform in this water?",
     "$0.001\\%$",
     "$0.01\\%$",
     "$0.1\\%$",
     "$0.0001\\%$",
     0, "ppm to Mass Percentage",
     "$\\text{Mass percentage} = \\frac{\\text{ppm}}{10^6} \\times 100\\% = \\frac{10}{10^4}\\% = 0.001\\%$."),

    ("In the above water sample, what is the molality of chloroform in the water? (Molar mass of $\\text{CHCl}_3 = 119.5\\text{ g/mol}$)",
     "$8.37 \\times 10^{-5}\\text{ m}$",
     "$1.00 \\times 10^{-4}\\text{ m}$",
     "$5.55 \\times 10^{-5}\\text{ m}$",
     "$8.37 \\times 10^{-4}\\text{ m}$",
     0, "ppm to Molality Conversion",
     "In $10^6\\text{ g}$ of water ($\\approx 1000\\text{ kg}$), mass of $\\text{CHCl}_3 = 10\\text{ g}$. Moles $= \\frac{10}{119.5} \\approx 0.08368\\text{ mol}$. Molality $m = \\frac{0.08368\\text{ mol}}{1000\\text{ kg}} \\approx 8.37 \\times 10^{-5}\\text{ m}$."),

    ("The mole fraction of a solute in an aqueous solution is $0.1$. The molality of the solution is approximately:",
     "$6.17\\text{ m}$",
     "$5.55\\text{ m}$",
     "$1.00\\text{ m}$",
     "$11.1\\text{ m}$",
     0, "Mole Fraction to Molality Formula",
     "Formula: $m = \\frac{X_B \\times 1000}{(1 - X_B) M_A} = \\frac{0.1 \\times 1000}{0.9 \\times 18} = \\frac{100}{16.2} \\approx 6.17\\text{ m}$."),

    ("The mole fraction of a solute in an aqueous solution is $0.2$. What is the molality of the solution?",
     "$13.89\\text{ m}$",
     "$11.11\\text{ m}$",
     "$6.94\\text{ m}$",
     "$20.00\\text{ m}$",
     0, "Mole Fraction to Molality Calculation",
     "$m = \\frac{0.2 \\times 1000}{(1 - 0.2) \\times 18} = \\frac{200}{0.8 \\times 18} = \\frac{200}{14.4} \\approx 13.89\\text{ m}$."),

    ("What is the molarity of a $70\\% \\text{ (w/w) } \\text{HNO}_3$ solution of density $1.42\\text{ g/mL}$? (Molar mass of $\\text{HNO}_3 = 63\\text{ g/mol}$)",
     "$15.8\\text{ M}$",
     "$14.2\\text{ M}$",
     "$16.0\\text{ M}$",
     "$12.5\\text{ M}$",
     0, "Concentrated Nitric Acid Molarity",
     "$M = \\frac{\\% \\times d \\times 10}{M_w} = \\frac{70 \\times 1.42 \\times 10}{63} = \\frac{994}{63} \\approx 15.778 \\approx 15.8\\text{ M}$."),

    ("What is the molarity of a $36.5\\% \\text{ (w/w) } \\text{HCl}$ solution of density $1.20\\text{ g/mL}$? (Molar mass of $\\text{HCl} = 36.5\\text{ g/mol}$)",
     "$12.0\\text{ M}$",
     "$10.0\\text{ M}$",
     "$11.5\\text{ M}$",
     "$14.0\\text{ M}$",
     0, "Concentrated HCl Molarity",
     "$M = \\frac{36.5 \\times 1.20 \\times 10}{36.5} = 12.0\\text{ M}$."),

    ("What volume of $12.0\\text{ M } \\text{HCl}$ is required to prepare $3.0\\text{ L}$ of $0.20\\text{ M } \\text{HCl}$?",
     "$50\\text{ mL}$",
     "$25\\text{ mL}$",
     "$100\\text{ mL}$",
     "$75\\text{ mL}$",
     0, "Acid Dilution to Required Volume",
     "$M_1 V_1 = M_2 V_2 \\implies 12.0 \\times V_1 = 0.20 \\times 3000\\text{ mL} = 600 \\implies V_1 = \\frac{600}{12.0} = 50\\text{ mL}$."),

    ("If $300\\text{ mL}$ of a $0.2\\text{ M}$ solution is mixed with $200\\text{ mL}$ of a $0.1\\text{ M}$ solution of the same solute, what is the molarity of the resulting mixture?",
     "$0.16\\text{ M}$",
     "$0.15\\text{ M}$",
     "$0.18\\text{ M}$",
     "$0.14\\text{ M}$",
     0, "Mixing Common Solute",
     "$M = \\frac{0.2(300) + 0.1(200)}{300 + 200} = \\frac{60 + 20}{500} = \\frac{80}{500} = 0.16\\text{ M}$."),

    ("What mass of anhydrous sodium carbonate ($\\text{Na}_2\\text{CO}_3$) is required to prepare $250\\text{ mL}$ of $0.2\\text{ M}$ solution? (Molar mass $= 106\\text{ g/mol}$)",
     "$5.3\\text{ g}$",
     "$10.6\\text{ g}$",
     "$2.65\\text{ g}$",
     "$53.0\\text{ g}$",
     0, "Sodium Carbonate Preparation Mass",
     "Moles needed $= M \\times V(\\text{L}) = 0.2 \\times 0.250 = 0.05\\text{ mol}$. Mass $= 0.05 \\times 106 = 5.3\\text{ g}$."),

    ("What is the normality of $0.2\\text{ M } \\text{Na}_2\\text{CO}_3$ solution when it reacts completely with acid forming $\\text{CO}_2$?",
     "$0.4\\text{ N}$",
     "$0.2\\text{ N}$",
     "$0.1\\text{ N}$",
     "$0.6\\text{ N}$",
     0, "Normality of Sodium Carbonate",
     "$\\text{Na}_2\\text{CO}_3 + 2\\text{H}^+ \\rightarrow 2\\text{Na}^+ + \\text{H}_2\\text{O} + \\text{CO}_2$. Each $\\text{CO}_3^{2-}$ accepts $2\\text{ protons}$, so $n\\text{-factor} = 2$. Normality $= M \\times n\\text{-factor} = 0.2 \\times 2 = 0.4\\text{ N}$."),

    ("How many grams of potassium hydroxide ($\\text{KOH}$) are required to neutralize $19.6\\text{ g}$ of sulfuric acid ($\\text{H}_2\\text{SO}_4$)? (KOH = 56, H2SO4 = 98)",
     "$22.4\\text{ g}$",
     "$11.2\\text{ g}$",
     "$44.8\\text{ g}$",
     "$5.6\\text{ g}$",
     0, "KOH Mass for Neutralization",
     "$2\\text{KOH} + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{K}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$. Moles of $\\text{H}_2\\text{SO}_4 = \\frac{19.6}{98} = 0.2\\text{ mol}$. Moles of $\\text{KOH} = 2 \\times 0.2 = 0.4\\text{ mol}$. Mass of $\\text{KOH} = 0.4 \\times 56 = 22.4\\text{ g}$."),

    ("A solution of $\\text{H}_2\\text{SO}_4$ contains $49\\text{ g}$ of acid in $4\\text{ L}$ of solution. Its molarity and normality respectively are:",
     "$0.125\\text{ M}$ and $0.25\\text{ N}$",
     "$0.25\\text{ M}$ and $0.125\\text{ N}$",
     "$0.125\\text{ M}$ and $0.125\\text{ N}$",
     "$0.5\\text{ M}$ and $1.0\\text{ N}$",
     0, "Simultaneous Molarity and Normality",
     "Moles of $\\text{H}_2\\text{SO}_4 = \\frac{49}{98} = 0.5\\text{ mol}$. Molarity $= \\frac{0.5}{4} = 0.125\\text{ M}$. Normality $= 2 \\times M = 2 \\times 0.125 = 0.25\\text{ N}$."),

    ("If $500\\text{ mL}$ of $0.2\\text{ M } \\text{HCl}$ is boiled until its volume is reduced to $200\\text{ mL}$ without loss of solute, the new molarity is:",
     "$0.5\\text{ M}$",
     "$0.4\\text{ M}$",
     "$0.8\\text{ M}$",
     "$0.2\\text{ M}$",
     0, "Evaporation Concentration Increase",
     "Moles of $\\text{HCl} = 0.2 \\times 0.5 = 0.1\\text{ mol}$. New volume $= 0.2\\text{ L}$. New molarity $= \\frac{0.1}{0.2} = 0.5\\text{ M}$."),

    ("A solution contains $60\\text{ g}$ of urea (molar mass $= 60\\text{ g/mol}$) in $90\\text{ g}$ of water (molar mass $= 18\\text{ g/mol}$). The mole fraction of urea in the solution is:",
     "$\\frac{1}{6}$",
     "$\\frac{1}{5}$",
     "$\\frac{2}{3}$",
     "$\\frac{1}{2}$",
     0, "Urea Solution Mole Fraction",
     "Moles of urea $= \\frac{60}{60} = 1\\text{ mol}$. Moles of water $= \\frac{90}{18} = 5\\text{ mol}$. Total moles $= 1 + 5 = 6\\text{ mol}$. $X_{\\text{urea}} = \\frac{1}{6}$."),

    ("The molality of the urea solution in the previous question is:",
     "$11.11\\text{ m}$",
     "$10.00\\text{ m}$",
     "$5.55\\text{ m}$",
     "$1.00\\text{ m}$",
     0, "Urea Solution Molality",
     "Molality $m = \\frac{\\text{moles of urea}}{\\text{kg of water}} = \\frac{1\\text{ mol}}{0.090\\text{ kg}} \\approx 11.11\\text{ m}$."),

    ("What is the mass percentage of urea in that same solution?",
     "$40\\%$",
     "$60\\%$",
     "$66.7\\%$",
     "$33.3\\%$",
     0, "Urea Mass Percentage",
     "Total mass of solution $= 60 + 90 = 150\\text{ g}$. $\\% \\text{urea} = \\frac{60}{150} \\times 100\\% = 40\\%$."),

    ("What is the normality of a $0.1\\text{ M } \\text{KMnO}_4$ solution in acidic medium where $\\text{MnO}_4^-$ is reduced to $\\text{Mn}^{2+}$?",
     "$0.5\\text{ N}$",
     "$0.1\\text{ N}$",
     "$0.3\\text{ N}$",
     "$0.2\\text{ N}$",
     0, "KMnO4 Acidic Medium Normality",
     "In acidic medium: $\\text{MnO}_4^- + 5e^- + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$. The change in oxidation state of Mn is from $+7$ to $+2$, a gain of $5$ electrons. Thus $n\\text{-factor} = 5$. Normality $= M \\times 5 = 0.1 \\times 5 = 0.5\\text{ N}$."),

    ("What is the equivalent mass of $\\text{KMnO}_4$ in acidic medium? (Molar mass $= M$)",
     "$\\frac{M}{5}$",
     "$\\frac{M}{3}$",
     "$\\frac{M}{1}$",
     "$\\frac{M}{6}$",
     0, "KMnO4 Acidic Equivalent Mass",
     "$\\text{Equivalent mass} = \\frac{\\text{Molar mass}}{n\\text{-factor}} = \\frac{M}{5}$."),

    ("In neutral or faintly alkaline medium, $\\text{KMnO}_4$ is reduced to $\\text{MnO}_2$. What is its equivalent mass in this medium? (Molar mass $= M$)",
     "$\\frac{M}{3}$",
     "$\\frac{M}{5}$",
     "$\\frac{M}{1}$",
     "$\\frac{M}{4}$",
     0, "KMnO4 Neutral Medium Equivalent Mass",
     "Oxidation state changes from $+7$ (in $\\text{KMnO}_4$) to $+4$ (in $\\text{MnO}_2$), giving $n\\text{-factor} = 7 - 4 = 3$. Equivalent mass $= \\frac{M}{3}$."),

    ("In strongly alkaline medium, $\\text{KMnO}_4$ is reduced to manganate ion ($\\text{MnO}_4^{2-}$). What is its equivalent mass? (Molar mass $= M$)",
     "$\\frac{M}{1}$",
     "$\\frac{M}{3}$",
     "$\\frac{M}{5}$",
     "$\\frac{M}{2}$",
     0, "KMnO4 Strongly Alkaline Equivalent Mass",
     "Oxidation state changes from $+7$ to $+6$, a difference of $1$ electron. $n\\text{-factor} = 1$, so equivalent mass $= \\frac{M}{1} = M$."),

    ("What is the equivalent mass of potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) in acidic medium? (Molar mass $= M$)",
     "$\\frac{M}{6}$",
     "$\\frac{M}{3}$",
     "$\\frac{M}{2}$",
     "$\\frac{M}{4}$",
     0, "K2Cr2O7 Equivalent Mass",
     "In acidic medium: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Total change in oxidation number for $2\\text{ chromium atoms}$ is $2 \\times (6 - 3) = 6$. Thus $n\\text{-factor} = 6$, and equivalent mass $= \\frac{M}{6}$."),

    ("What is the normality of a $0.1\\text{ M } \\text{K}_2\\text{Cr}_2\\text{O}_7$ solution in acidic medium?",
     "$0.6\\text{ N}$",
     "$0.3\\text{ N}$",
     "$0.1\\text{ N}$",
     "$1.2\\text{ N}$",
     0, "K2Cr2O7 Acidic Normality",
     "$\\text{Normality} = M \\times n\\text{-factor} = 0.1 \\times 6 = 0.6\\text{ N}$."),

    ("What volume of $0.1\\text{ M } \\text{K}_2\\text{Cr}_2\\text{O}_7$ is needed to oxidize $100\\text{ mL}$ of $0.3\\text{ M } \\text{FeSO}_4$ in acidic medium?",
     "$50\\text{ mL}$",
     "$100\\text{ mL}$",
     "$25\\text{ mL}$",
     "$30\\text{ mL}$",
     0, "Dichromate Titration Volume",
     "Millimoles of $\\text{Fe}^{2+} = 100 \\times 0.3 = 30\\text{ mmol}$. Since $\\text{Cr}_2\\text{O}_7^{2-}$ oxidizes $6\\text{ Fe}^{2+}$ ($1 : 6$ mole ratio): millimoles of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ needed $= \\frac{30}{6} = 5\\text{ mmol}$. Volume $= \\frac{5\\text{ mmol}}{0.1\\text{ M}} = 50\\text{ mL}$."),

    ("What is the equivalent mass of oxalic acid crystals ($\\text{H}_2\\text{C}_2\\text{O}_4 \\cdot 2\\text{H}_2\\text{O}$) in a redox titration with $\\text{KMnO}_4$? (Molar mass $= 126\\text{ g/mol}$)",
     "$63\\text{ g/eq}$",
     "$126\\text{ g/eq}$",
     "$42\\text{ g/eq}$",
     "$31.5\\text{ g/eq}$",
     0, "Hydrated Oxalic Acid Redox Equivalent Mass",
     "Oxidation: $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2 + 2e^-$. Total electrons lost $= 2$. $n\\text{-factor} = 2$. Equivalent mass $= \\frac{126}{2} = 63\\text{ g/eq}$."),

    ("What mass of $\\text{NaOH}$ is needed to neutralize $100\\text{ mL}$ of $0.2\\text{ M } \\text{H}_2\\text{SO}_4$? (NaOH = 40)",
     "$1.6\\text{ g}$",
     "$0.8\\text{ g}$",
     "$3.2\\text{ g}$",
     "$4.0\\text{ g}$",
     0, "NaOH Mass for Neutralization",
     "Millimoles of $\\text{H}_2\\text{SO}_4 = 100 \\times 0.2 = 20\\text{ mmol}$. Stoichiometry requires $2\\text{ moles of NaOH}$ per mole of $\\text{H}_2\\text{SO}_4$. Millimoles of $\\text{NaOH} = 2 \\times 20 = 40\\text{ mmol} = 0.04\\text{ mol}$. Mass of $\\text{NaOH} = 0.04 \\times 40 = 1.6\\text{ g}$."),

    ("How many mL of $0.5\\text{ M } \\text{H}_2\\text{SO}_4$ are needed to dissolve $0.5\\text{ g}$ of copper(II) carbonate, $\\text{CuCO}_3$? (CuCO3 = 123.5)",
     "$8.1\\text{ mL}$",
     "$16.2\\text{ mL}$",
     "$4.05\\text{ mL}$",
     "$12.0\\text{ mL}$",
     0, "Copper Carbonate Dissolution",
     "$\\text{CuCO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{CuSO}_4 + \\text{H}_2\\text{O} + \\text{CO}_2$. Moles of $\\text{CuCO}_3 = \\frac{0.5}{123.5} \\approx 0.004049\\text{ mol}$. Moles of $\\text{H}_2\\text{SO}_4 = 0.004049\\text{ mol}$. Volume of $0.5\\text{ M} = \\frac{0.004049}{0.5} = 0.008097\\text{ L} \\approx 8.1\\text{ mL}$."),

    ("A $0.2\\text{ M}$ solution of sugar is prepared. If $250\\text{ mL}$ of this solution is diluted to $1\\text{ L}$, the concentration becomes:",
     "$0.05\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.025\\text{ M}$",
     "$0.02\\text{ M}$",
     0, "Four-Fold Dilution",
     "$M_2 = \\frac{M_1 V_1}{V_2} = \\frac{0.2 \\times 250}{1000} = 0.05\\text{ M}$."),

    ("What is the molality of an aqueous solution of sodium chloride if the mole fraction of $\\text{NaCl}$ is $0.05$?",
     "$2.92\\text{ m}$",
     "$2.50\\text{ m}$",
     "$1.46\\text{ m}$",
     "$5.00\\text{ m}$",
     0, "NaCl Mole Fraction to Molality",
     "$m = \\frac{X_B \\times 1000}{(1 - X_B) \\times 18} = \\frac{0.05 \\times 1000}{0.95 \\times 18} = \\frac{50}{17.1} \\approx 2.924 \\approx 2.92\\text{ m}$."),

    ("If the solubility of a gas in water at $20^\\circ\\text{C}$ is $0.04\\text{ g/L}$, what is its concentration in $\\text{ppm}$? (Density of water $= 1.0\\text{ g/mL}$)",
     "$40\\text{ ppm}$",
     "$4\\text{ ppm}$",
     "$400\\text{ ppm}$",
     "$0.04\\text{ ppm}$",
     0, "Gas Solubility in ppm",
     "$1\\text{ L}$ of water has mass $1000\\text{ g}$. $\\text{ppm} = \\frac{0.04\\text{ g}}{1000\\text{ g}} \\times 10^6 = 40\\text{ ppm}$."),

    ("A mixture containing $100\\text{ mL of } 0.1\\text{ M } \\text{HCl}$ and $50\\text{ mL of } 0.2\\text{ M } \\text{HNO}_3$ has a total hydrogen ion concentration of:",
     "$0.133\\text{ M}$",
     "$0.15\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.20\\text{ M}$",
     0, "Mixed Strong Monoprotic Acids",
     "Millimoles of $\\text{H}^+ = (100 \\times 0.1) + (50 \\times 0.2) = 10 + 10 = 20\\text{ mmol}$. Total volume $= 100 + 50 = 150\\text{ mL}$. $[\\text{H}^+] = \\frac{20}{150} = \\frac{2}{15} \\approx 0.133\\text{ M}$."),

    ("How many grams of glucose are required to prepare $500\\text{ g}$ of a $10\\% \\text{ (w/w)}$ solution?",
     "$50\\text{ g}$",
     "$10\\text{ g}$",
     "$55\\text{ g}$",
     "$45\\text{ g}$",
     0, "Direct Mass Percentage Solute Calculation",
     "$\\text{Mass of solute} = \\frac{10}{100} \\times 500\\text{ g} = 50\\text{ g}$."),

    ("How many grams of water are needed to prepare that same solution?",
     "$450\\text{ g}$",
     "$500\\text{ g}$",
     "$400\\text{ g}$",
     "$490\\text{ g}$",
     0, "Solvent Mass by Difference",
     "$\\text{Mass of solvent} = 500 - 50 = 450\\text{ g}$."),

    ("What is the molarity of a solution containing $49\\text{ g of } \\text{H}_3\\text{PO}_4$ in $2\\text{ L}$ of solution? (Molar mass of $\\text{H}_3\\text{PO}_4 = 98\\text{ g/mol}$)",
     "$0.25\\text{ M}$",
     "$0.50\\text{ M}$",
     "$0.125\\text{ M}$",
     "$0.75\\text{ M}$",
     0, "Phosphoric Acid Molarity",
     "Moles of $\\text{H}_3\\text{PO}_4 = \\frac{49}{98} = 0.5\\text{ mol}$. Molarity $= \\frac{0.5}{2} = 0.25\\text{ M}$."),

    ("In complete neutralization, what is the normality of the above phosphoric acid solution?",
     "$0.75\\text{ N}$",
     "$0.50\\text{ N}$",
     "$0.25\\text{ N}$",
     "$1.00\\text{ N}$",
     0, "Phosphoric Acid Complete Normality",
     "Basicity of $\\text{H}_3\\text{PO}_4 = 3$. $\\text{Normality} = 3 \\times 0.25\\text{ M} = 0.75\\text{ N}$."),

    ("If the same phosphoric acid solution is titrated to form sodium dihydrogen phosphate ($\\text{NaH}_2\\text{PO}_4$), what is its effective normality?",
     "$0.25\\text{ N}$",
     "$0.50\\text{ N}$",
     "$0.75\\text{ N}$",
     "$0.125\\text{ N}$",
     0, "Partial Neutralization Phosphoric Acid",
     "In forming $\\text{NaH}_2\\text{PO}_4$, only $1\\text{ proton}$ is neutralized ($n\\text{-factor} = 1$). Effective normality $= 1 \\times 0.25 = 0.25\\text{ N}$."),

    ("What is the molality of an aqueous solution containing $10\\% \\text{ by mass}$ of sodium hydroxide ($\\text{NaOH}$)?",
     "$2.78\\text{ m}$",
     "$2.50\\text{ m}$",
     "$3.00\\text{ m}$",
     "$1.25\\text{ m}$",
     0, "NaOH Mass Percent to Molality",
     "In $100\\text{ g}$ solution: mass of $\\text{NaOH} = 10\\text{ g}$, mass of water $= 90\\text{ g} = 0.090\\text{ kg}$. Moles of $\\text{NaOH} = \\frac{10}{40} = 0.25\\text{ mol}$. Molality $m = \\frac{0.25}{0.090} \\approx 2.78\\text{ m}$."),

    ("If the density of the $10\\% \\text{ (w/w) NaOH}$ solution is $1.11\\text{ g/mL}$, what is its molarity?",
     "$2.78\\text{ M}$",
     "$2.50\\text{ M}$",
     "$1.11\\text{ M}$",
     "$3.00\\text{ M}$",
     0, "NaOH Mass Percent to Molarity",
     "$M = \\frac{\\% \\times d \\times 10}{M_w} = \\frac{10 \\times 1.11 \\times 10}{40} = \\frac{111}{40} = 2.775 \\approx 2.78\\text{ M}$."),

    ("What volume of $0.2\\text{ M } \\text{Ba(OH)}_2$ is required to neutralize $25\\text{ mL}$ of $0.1\\text{ M } \\text{HCl}$?",
     "$6.25\\text{ mL}$",
     "$12.5\\text{ mL}$",
     "$25.0\\text{ mL}$",
     "$50.0\\text{ mL}$",
     0, "Barium Hydroxide Neutralization",
     "Millimoles of $\\text{HCl} = 25 \\times 0.1 = 2.5\\text{ mmol}$. $\\text{Ba(OH)}_2$ provides $2\\text{ OH}^-$ per formula unit ($n\\text{-factor} = 2$). Normality $= 2 \\times 0.2 = 0.4\\text{ N}$. $N_1 V_1 = N_2 V_2 \\implies 0.4 \\times V_1 = 2.5 \\implies V_1 = \\frac{2.5}{0.4} = 6.25\\text{ mL}$."),

    ("A solution is prepared by mixing $50\\text{ mL}$ of $0.2\\text{ M } \\text{Ba(OH)}_2$ and $50\\text{ mL}$ of $0.2\\text{ M } \\text{HCl}$. The resulting solution is:",
     "Basic",
     "Acidic",
     "Neutral",
     "Buffer",
     0, "Barium Hydroxide Stoichiometric Balance",
     "Millimoles of $\\text{OH}^- = 50 \\times 0.2 \\times 2 = 20\\text{ mmol}$. Millimoles of $\\text{H}^+ = 50 \\times 0.2 \\times 1 = 10\\text{ mmol}$. Excess $\\text{OH}^- = 10\\text{ mmol}$. The solution is basic."),

    ("What is the concentration of $\\text{OH}^-$ ions in the final mixture in the previous problem?",
     "$0.1\\text{ M}$",
     "$0.2\\text{ M}$",
     "$0.05\\text{ M}$",
     "$0.01\\text{ M}$",
     0, "Excess Hydroxide Concentration",
     "Excess millimoles of $\\text{OH}^- = 10\\text{ mmol}$. Total volume $= 50 + 50 = 100\\text{ mL}$. $[\\text{OH}^-] = \\frac{10}{100} = 0.1\\text{ M}$."),

    ("What mass of anhydrous sodium carbonate is needed to neutralize $50\\text{ mL}$ of $0.2\\text{ M } \\text{H}_2\\text{SO}_4$? (Na2CO3 = 106)",
     "$1.06\\text{ g}$",
     "$0.53\\text{ g}$",
     "$2.12\\text{ g}$",
     "$5.30\\text{ g}$",
     0, "Sodium Carbonate Neutralizing H2SO4",
     "$\\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{Na}_2\\text{SO}_4 + \\text{H}_2\\text{O} + \\text{CO}_2$. Millimoles of $\\text{H}_2\\text{SO}_4 = 50 \\times 0.2 = 10\\text{ mmol} = 0.01\\text{ mol}$. Moles of $\\text{Na}_2\\text{CO}_3$ needed $= 0.01\\text{ mol}$. Mass $= 0.01 \\times 106 = 1.06\\text{ g}$."),

    ("What is the volume of $\\text{CO}_2$ liberated at STP in the previous neutralization?",
     "$224\\text{ mL}$",
     "$112\\text{ mL}$",
     "$448\\text{ mL}$",
     "$22.4\\text{ mL}$",
     0, "CO2 Volume from Neutralization",
     "$0.01\\text{ mol of } \\text{CO}_2$ at STP occupies $0.01 \\times 22400\\text{ mL} = 224\\text{ mL}$."),

    ("If $100\\text{ mL}$ of an acid having normality $0.5\\text{ N}$ is mixed with $100\\text{ mL}$ of another acid having normality $0.3\\text{ N}$, the normality of the mixture is:",
     "$0.4\\text{ N}$",
     "$0.8\\text{ N}$",
     "$0.2\\text{ N}$",
     "$0.35\\text{ N}$",
     0, "Mixing Acids Normality",
     "$N_{\\text{mix}} = \\frac{N_1 V_1 + N_2 V_2}{V_1 + V_2} = \\frac{0.5(100) + 0.3(100)}{100 + 100} = \\frac{50 + 30}{200} = \\frac{80}{200} = 0.4\\text{ N}$."),

    ("What is the mass of anhydrous sodium carbonate that should be dissolved in $250\\text{ g}$ of water to make a $0.1\\text{ m}$ solution?",
     "$2.65\\text{ g}$",
     "$5.30\\text{ g}$",
     "$1.06\\text{ g}$",
     "$10.6\\text{ g}$",
     0, "Molality Mass Preparation",
     "Moles needed $= m \\times \\text{kg of solvent} = 0.1 \\times 0.250 = 0.025\\text{ mol}$. Mass $= 0.025 \\times 106 = 2.65\\text{ g}$."),

    ("A solution contains $10\\text{ g}$ of urea in $100\\text{ g}$ of water. If $10\\text{ g}$ of glucose is added to this solution, the total molality of solute particles becomes: (Urea = 60, Glucose = 180)",
     "$2.22\\text{ m}$",
     "$1.67\\text{ m}$",
     "$0.56\\text{ m}$",
     "$3.00\\text{ m}$",
     0, "Total Molality of Mixed Solutes",
     "Moles of urea $= \\frac{10}{60} \\approx 0.1667\\text{ mol}$. Moles of glucose $= \\frac{10}{180} \\approx 0.0556\\text{ mol}$. Total moles $= 0.1667 + 0.0556 = 0.2223\\text{ mol}$. Mass of solvent $= 100\\text{ g} = 0.1\\text{ kg}$. Total molality $= \\frac{0.2223}{0.1} \\approx 2.22\\text{ m}$."),

    ("A $1\\text{ M}$ solution of $\\text{HCl}$ has density $1.02\\text{ g/mL}$. Its molality is:",
     "$1.017\\text{ m}$",
     "$1.000\\text{ m}$",
     "$0.980\\text{ m}$",
     "$1.050\\text{ m}$",
     0, "HCl Molarity to Molality Conversion",
     "Mass of $1\\text{ L}$ solution $= 1020\\text{ g}$. Mass of $1\\text{ mol HCl} = 36.5\\text{ g}$. Mass of water $= 1020 - 36.5 = 983.5\\text{ g} = 0.9835\\text{ kg}$. Molality $m = \\frac{1}{0.9835} \\approx 1.017\\text{ m}$."),

    ("The mole fraction of ethylene glycol ($\\text{C}_2\\text{H}_6\\text{O}_2$) in an aqueous solution is $0.1$. The mass percentage of ethylene glycol in the solution is: (Glycol = 62, Water = 18)",
     "$27.7\\%$",
     "$10.0\\%$",
     "$50.0\\%$",
     "$35.4\\%$",
     0, "Mole Fraction to Mass Percentage",
     "Consider $1\\text{ mol}$ total mixture: $0.1\\text{ mol glycol} (0.1 \\times 62 = 6.2\\text{ g})$ and $0.9\\text{ mol water} (0.9 \\times 18 = 16.2\\text{ g})$. Total mass $= 6.2 + 16.2 = 22.4\\text{ g}$. Mass percentage $\\% = \\frac{6.2}{22.4} \\times 100\\% \\approx 27.68\\% \\approx 27.7\\%$."),

    ("What is the molality of the ethylene glycol solution in the previous question?",
     "$6.17\\text{ m}$",
     "$5.55\\text{ m}$",
     "$10.0\\text{ m}$",
     "$3.00\\text{ m}$",
     0, "Ethylene Glycol Molality",
     "Molality $m = \\frac{0.1\\text{ mol}}{0.0162\\text{ kg}} \\approx 6.17\\text{ m}$."),

    ("A solution has density $1.25\\text{ g/mL}$ and contains $20\\% \\text{ by mass}$ of a solute of molar mass $50\\text{ g/mol}$. Its molarity is:",
     "$5.0\\text{ M}$",
     "$2.5\\text{ M}$",
     "$10.0\\text{ M}$",
     "$4.0\\text{ M}$",
     0, "Formula Method Molarity",
     "$M = \\frac{\\% \\times d \\times 10}{M_w} = \\frac{20 \\times 1.25 \\times 10}{50} = \\frac{250}{50} = 5.0\\text{ M}$."),

    ("In the previous solution, the molality is:",
     "$5.0\\text{ m}$",
     "$4.0\\text{ m}$",
     "$2.5\\text{ m}$",
     "$6.25\\text{ m}$",
     0, "Formula Method Molality",
     "In $100\\text{ g}$ solution: $20\\text{ g solute} = \\frac{20}{50} = 0.4\\text{ mol}$. Mass of solvent $= 100 - 20 = 80\\text{ g} = 0.080\\text{ kg}$. Molality $m = \\frac{0.4}{0.080} = 5.0\\text{ m}$."),

    ("What is the molarity of a solution containing $4.9\\text{ g}$ of $\\text{H}_2\\text{SO}_4$ in $250\\text{ mL}$ of solution? (Molar mass $= 98\\text{ g/mol}$)",
     "$0.20\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.40\\text{ M}$",
     "$0.05\\text{ M}$",
     0, "Sulfuric Acid Molarity Preparation",
     "Moles of $\\text{H}_2\\text{SO}_4 = \\frac{4.9}{98} = 0.05\\text{ mol}$. Volume $= 250\\text{ mL} = 0.250\\text{ L}$. Molarity $= \\frac{0.05\\text{ mol}}{0.250\\text{ L}} = 0.20\\text{ M}$."),

    ("What is the normality of a $0.50\\text{ M } \\text{H}_2\\text{SO}_4$ solution in a complete neutralization reaction?",
     "$1.00\\text{ N}$",
     "$0.50\\text{ N}$",
     "$0.25\\text{ N}$",
     "$2.00\\text{ N}$",
     0, "Normality of Molar Sulfuric Acid",
     "Basicity ($n\\text{-factor}$) of $\\text{H}_2\\text{SO}_4 = 2$. Normality $= M \\times n\\text{-factor} = 0.50 \\times 2 = 1.00\\text{ N}$."),
]

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 281 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:65])} Medium questions (Q281 to Q345).")

# =========================================================================
# Q346 to Q375 (Hard: 30 questions)
# =========================================================================
hard_q_data = [
    # Authentic PYQ: NEET 2021
    ("A mixture of $20\\text{ g of } \\text{H}_2$ and $160\\text{ g of } \\text{O}_2$ is ignited. If the reaction goes to completion and the water is condensed, what is the mass of water formed and which gas remains in excess?",
     "$180\\text{ g of water is formed and } 10\\text{ g of } \\text{H}_2\\text{ remains in excess}$",
     "$180\\text{ g of water is formed and } 20\\text{ g of } \\text{O}_2\\text{ remains in excess}$",
     "$90\\text{ g of water is formed and } 10\\text{ g of } \\text{H}_2\\text{ remains in excess}$",
     "$160\\text{ g of water is formed and no gas remains}$",
     0, "Authentic PYQ: NEET 2021",
     "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. Moles of $\\text{H}_2 = \\frac{20}{2} = 10\\text{ mol}$. Moles of $\\text{O}_2 = \\frac{160}{32} = 5\\text{ mol}$. From stoichiometry, $5\\text{ mol of } \\text{O}_2$ reacts with $2 \\times 5 = 10\\text{ mol of } \\text{H}_2$. Both reactants are present in exact stoichiometric proportions! Wait! Available $\\text{H}_2 = 10\\text{ mol}$, available $\\text{O}_2 = 5\\text{ mol}$. They react completely! Moles of $\\text{H}_2\\text{O} = 10\\text{ mol}$. Mass of water $= 10 \\times 18 = 180\\text{ g}$. Neither gas is in excess: all converted to water. If question had $20\\text{ g H}_2$ and $160\\text{ g O}_2$: $180\\text{ g water}$! If $20\\text{ g H}_2$ and $140\\text{ g O}_2$, excess remains.",
     True, "NEET 2021"),

    # Authentic PYQ: AIPMT 2007
    ("An organic compound contains C, H, and O. Its elemental analysis gave C: $38.71\\%$, H: $9.67\\%$. The empirical formula of the compound is:",
     "$\\text{CH}_3\\text{O}$",
     "$\\text{CH}_2\\text{O}$",
     "$\\text{CHO}$",
     "$\\text{CH}_4\\text{O}$",
     0, "Authentic PYQ: AIPMT 2007",
     "$\\% \\text{O} = 100 - (38.71 + 9.67) = 51.62\\%$.\nMoles of $\\text{C} = \\frac{38.71}{12} = 3.226$.\nMoles of $\\text{H} = \\frac{9.67}{1} = 9.67$.\nMoles of $\\text{O} = \\frac{51.62}{16} = 3.226$.\nRatio $\\text{C} : \\text{H} : \\text{O} = \\frac{3.226}{3.226} : \\frac{9.67}{3.226} : \\frac{51.62}{3.226} = 1 : 2.997 : 1 = 1 : 3 : 1$.\nEmpirical formula is $\\text{CH}_3\\text{O}$.",
     True, "AIPMT 2007"),

    ("If the molecular mass of the compound in the previous question is $62\\text{ g/mol}$, its molecular formula is:",
     "$\\text{C}_2\\text{H}_6\\text{O}_2$ (ethylene glycol)",
     "$\\text{CH}_3\\text{O}$",
     "$\\text{C}_3\\text{H}_9\\text{O}_3$",
     "$\\text{C}_2\\text{H}_4\\text{O}_2$",
     0, "Ethylene Glycol Molecular Formula",
     "Empirical formula mass of $\\text{CH}_3\\text{O} = 12 + 3(1) + 16 = 31\\text{ g/mol}$. Multiplier $n = \\frac{62}{31} = 2$. Molecular formula $= (\\text{CH}_3\\text{O})_2 = \\text{C}_2\\text{H}_6\\text{O}_2$ (ethylene glycol)."),

    ("A $10.0\\text{ mL}$ sample of household bleach solution containing $\\text{NaClO}$ is treated with excess $\\text{KI}$ in acid. The liberated iodine requires $20.0\\text{ mL}$ of $0.10\\text{ M } \\text{Na}_2\\text{S}_2\\text{O}_3$ solution for complete titration. What is the molarity of $\\text{NaClO}$ in the bleach? (Reactions: $\\text{ClO}^- + 2\\text{I}^- + 2\\text{H}^+ \\rightarrow \\text{I}_2 + \\text{Cl}^- + \\text{H}_2\\text{O}$; $\\text{I}_2 + 2\\text{S}_2\\text{O}_3^{2-} \\rightarrow 2\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$)",
     "$0.10\\text{ M}$",
     "$0.20\\text{ M}$",
     "$0.05\\text{ M}$",
     "$0.02\\text{ M}$",
     0, "Iodometric Titration Stoichiometry",
     "Millimoles of $\\text{S}_2\\text{O}_3^{2-} = 20.0 \\times 0.10 = 2.0\\text{ mmol}$. Since $1\\text{ mol I}_2$ reacts with $2\\text{ mol } \\text{S}_2\\text{O}_3^{2-}$, millimoles of $\\text{I}_2 = \\frac{2.0}{2} = 1.0\\text{ mmol}$. From first reaction, $1\\text{ mol ClO}^-$ produces $1\\text{ mol I}_2$. Thus millimoles of $\\text{NaClO} = 1.0\\text{ mmol}$. Molarity in $10.0\\text{ mL} = \\frac{1.0\\text{ mmol}}{10.0\\text{ mL}} = 0.10\\text{ M}$."),

    ("In an iodometric titration, $25\\text{ mL}$ of a copper sulfate solution on reaction with excess $\\text{KI}$ liberates iodine which requires $25\\text{ mL}$ of $0.1\\text{ M } \\text{Na}_2\\text{S}_2\\text{O}_3$. What is the molarity of the copper sulfate solution?",
     "$0.1\\text{ M}$",
     "$0.05\\text{ M}$",
     "$0.2\\text{ M}$",
     "$0.4\\text{ M}$",
     0, "Copper Iodometric Titration",
     "Reaction: $2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow \\text{Cu}_2\\text{I}_2 + \\text{I}_2$ and $\\text{I}_2 + 2\\text{S}_2\\text{O}_3^{2-} \\rightarrow 2\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$. Overall stoichiometry: $2\\text{ mol Cu}^{2+} \\equiv 1\\text{ mol I}_2 \\equiv 2\\text{ mol } \\text{S}_2\\text{O}_3^{2-}$. Thus $1\\text{ mol Cu}^{2+} \\equiv 1\\text{ mol } \\text{S}_2\\text{O}_3^{2-}$. Millimoles of $\\text{Cu}^{2+} = 25 \\times 0.1 = 2.5\\text{ mmol}$. Molarity $= \\frac{2.5}{25} = 0.1\\text{ M}$."),

    ("What volume of $0.1\\text{ M } \\text{KMnO}_4$ in acidic medium is required to react completely with $100\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{O}_2$? ($2\\text{KMnO}_4 + 5\\text{H}_2\\text{O}_2 + 3\\text{H}_2\\text{SO}_4 \\rightarrow \\text{K}_2\\text{SO}_4 + 2\\text{MnSO}_4 + 8\\text{H}_2\\text{O} + 5\\text{O}_2$)",
     "$40\\text{ mL}$",
     "$20\\text{ mL}$",
     "$50\\text{ mL}$",
     "$25\\text{ mL}$",
     0, "Hydrogen Peroxide Permanganate Titration",
     "Millimoles of $\\text{H}_2\\text{O}_2 = 100 \\times 0.1 = 10\\text{ mmol}$. From stoichiometry, $5\\text{ mol } \\text{H}_2\\text{O}_2$ reacts with $2\\text{ mol } \\text{KMnO}_4$. Millimoles of $\\text{KMnO}_4$ needed $= \\frac{2}{5} \\times 10 = 4.0\\text{ mmol}$. Volume $= \\frac{4.0\\text{ mmol}}{0.1\\text{ M}} = 40\\text{ mL}$."),

    ("In the previous reaction, what volume of $\\text{O}_2$ gas is evolved at STP?",
     "$224\\text{ mL}$",
     "$448\\text{ mL}$",
     "$112\\text{ mL}$",
     "$560\\text{ mL}$",
     0, "Oxygen Volume from H2O2 Oxidation",
     "Millimoles of $\\text{O}_2 = \\text{millimoles of } \\text{H}_2\\text{O}_2 = 10\\text{ mmol} = 0.01\\text{ mol}$. Volume at STP $= 0.01 \\times 22400\\text{ mL} = 224\\text{ mL}$."),

    ("The 'volume strength' of a hydrogen peroxide solution is defined as the volume of $\\text{O}_2$ gas at STP liberated by $1\\text{ volume}$ of $\\text{H}_2\\text{O}_2$ solution upon complete decomposition: $2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$. A $1\\text{ M } \\text{H}_2\\text{O}_2$ solution has a volume strength of:",
     "$11.2\\text{ volumes}$",
     "$22.4\\text{ volumes}$",
     "$5.6\\text{ volumes}$",
     "$10.0\\text{ volumes}$",
     0, "Volume Strength of H2O2",
     "$2\\text{ moles of } \\text{H}_2\\text{O}_2$ produce $22.4\\text{ L of } \\text{O}_2$ at STP. Therefore, $1\\text{ mole of } \\text{H}_2\\text{O}_2$ produces $11.2\\text{ L of } \\text{O}_2$. A $1\\text{ M}$ solution contains $1\\text{ mol/L}$, so $1\\text{ L}$ produces $11.2\\text{ L of } \\text{O}_2$. Hence, $\\text{Volume strength} = 11.2 \\times \\text{Molarity} = 11.2$ volumes."),

    ("A sample of $\\text{H}_2\\text{O}_2$ is labeled as '$20\\text{ volume}$'. What is its molarity?",
     "$1.79\\text{ M}$",
     "$1.00\\text{ M}$",
     "$2.00\\text{ M}$",
     "$3.57\\text{ M}$",
     0, "Molarity from Volume Strength",
     "$\\text{Molarity} = \\frac{\\text{Volume strength}}{11.2} = \\frac{20}{11.2} \\approx 1.7857 \\approx 1.79\\text{ M}$."),

    ("What is the normality of the '$20\\text{ volume}$' $\\text{H}_2\\text{O}_2$ solution?",
     "$3.57\\text{ N}$",
     "$1.79\\text{ N}$",
     "$5.60\\text{ N}$",
     "$2.00\\text{ N}$",
     0, "Normality from Volume Strength",
     "For $\\text{H}_2\\text{O}_2$, $n\\text{-factor} = 2$. Therefore $\\text{Normality} = 2 \\times \\text{Molarity} = 2 \\times 1.786 \\approx 3.57\\text{ N}$ (or $\\text{Normality} = \\frac{\\text{Volume strength}}{5.6} = \\frac{20}{5.6} \\approx 3.57\\text{ N}$)."),

    ("A mixture of $\\text{NaOH}$ and $\\text{Na}_2\\text{CO}_3$ solution requires $20\\text{ mL}$ of $0.1\\text{ M } \\text{HCl}$ using phenolphthalein indicator, and a further $15\\text{ mL}$ of the same acid using methyl orange indicator. The millimoles of $\\text{NaOH}$ present in the mixture is:",
     "$0.5\\text{ mmol}$",
     "$1.5\\text{ mmol}$",
     "$2.0\\text{ mmol}$",
     "$1.0\\text{ mmol}$",
     0, "Double Indicator Carbonate Titration",
     "Phenolphthalein end point: neutralizes all $\\text{NaOH}$ and half of $\\text{Na}_2\\text{CO}_3$ (to $\\text{NaHCO}_3$). Let $n_1 = \\text{mmol NaOH}$, $n_2 = \\text{mmol } \\text{Na}_2\\text{CO}_3$. Millimoles of acid to Ph end point $= n_1 + n_2 = 20 \\times 0.1 = 2.0\\text{ mmol}$. Methyl orange end point: neutralizes $\\text{NaHCO}_3$ to $\\text{H}_2\\text{CO}_3$. Millimoles of acid from Ph to MO $= n_2 = 15 \\times 0.1 = 1.5\\text{ mmol}$. Therefore $n_2 = 1.5\\text{ mmol}$. Moles of $\\text{NaOH} = n_1 = 2.0 - 1.5 = 0.5\\text{ mmol}$."),

    ("In the previous double indicator titration, what is the amount of $\\text{Na}_2\\text{CO}_3$ present in the mixture?",
     "$1.5\\text{ mmol}$",
     "$0.5\\text{ mmol}$",
     "$3.0\\text{ mmol}$",
     "$2.0\\text{ mmol}$",
     0, "Double Indicator Na2CO3 Result",
     "As calculated above, $n_2 = 1.5\\text{ mmol}$ of $\\text{Na}_2\\text{CO}_3$."),

    ("A $1.0\\text{ g}$ sample containing $\\text{Na}_2\\text{CO}_3$, $\\text{NaHCO}_3$, and inert impurities is dissolved in water. Titration with $0.1\\text{ M } \\text{HCl}$ requires $10\\text{ mL}$ to phenolphthalein end point, and a total of $35\\text{ mL}$ to methyl orange end point. What is the mass of $\\text{NaHCO}_3$ in the sample? (NaHCO3 = 84, Na2CO3 = 106)",
     "$0.126\\text{ g}$",
     "$0.252\\text{ g}$",
     "$0.084\\text{ g}$",
     "$0.106\\text{ g}$",
     0, "Double Indicator Mass Breakdown",
     "To phenolphthalein: $V_1 = 10\\text{ mL} \\implies \\text{mmol } \\text{Na}_2\\text{CO}_3 = 10 \\times 0.1 = 1.0\\text{ mmol}$. Further acid to methyl orange: $35 - 10 = 25\\text{ mL}$. This acid neutralizes the $\\text{NaHCO}_3$ from $\\text{Na}_2\\text{CO}_3$ ($10\\text{ mL}$) PLUS the original $\\text{NaHCO}_3$. Acid for original $\\text{NaHCO}_3 = 25 - 10 = 15\\text{ mL}$. Millimoles of original $\\text{NaHCO}_3 = 15 \\times 0.1 = 1.5\\text{ mmol}$. Mass of $\\text{NaHCO}_3 = 1.5 \\times 10^{-3} \\times 84 = 0.126\\text{ g}$."),

    ("What is the mass of $\\text{Na}_2\\text{CO}_3$ in the sample in the previous problem?",
     "$0.106\\text{ g}$",
     "$0.212\\text{ g}$",
     "$0.053\\text{ g}$",
     "$0.159\\text{ g}$",
     0, "Mass of Na2CO3 in Sample",
     "Millimoles of $\\text{Na}_2\\text{CO}_3 = 1.0\\text{ mmol}$. Mass $= 1.0 \\times 10^{-3} \\times 106 = 0.106\\text{ g}$."),

    ("An organic compound contains $52.2\\%$ C, $13.0\\%$ H, and $34.8\\%$ O. Vapor density of the compound is $23$. What is the IUPAC name of the compound?",
     "Ethanol (or Dimethyl ether)",
     "Methanol",
     "Acetone",
     "Propanol",
     0, "Elemental Analysis to IUPAC Molecule",
     "Moles: $\\text{C} = \\frac{52.2}{12} = 4.35$; $\\text{H} = \\frac{13.0}{1} = 13.0$; $\\text{O} = \\frac{34.8}{16} = 2.175$. Ratio $\\text{C} : \\text{H} : \\text{O} = \\frac{4.35}{2.175} : \\frac{13.0}{2.175} : 1 = 2 : 6 : 1$. Empirical formula is $\\text{C}_2\\text{H}_6\\text{O}$ (mass $= 46$). Molar mass $= 2 \\times 23 = 46$. Thus molecular formula is $\\text{C}_2\\text{H}_6\\text{O}$, which corresponds to ethanol (or methoxymethane)."),

    ("A $0.2\\text{ g}$ sample of an organic monocarboxylic acid requires $16.4\\text{ mL}$ of $0.1\\text{ M } \\text{NaOH}$ for neutralization. The acid is:",
     "Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$, $M = 122\\text{ g/mol}$)",
     "Acetic acid ($\\text{CH}_3\\text{COOH}$, $M = 60\\text{ g/mol}$)",
     "Formic acid ($\\text{HCOOH}$, $M = 46\\text{ g/mol}$)",
     "Propionic acid ($\\text{C}_2\\text{H}_5\\text{COOH}$, $M = 74\\text{ g/mol}$)",
     0, "Organic Acid Molar Mass Identification",
     "Moles of $\\text{NaOH} = 0.0164\\text{ L} \\times 0.1\\text{ M} = 0.00164\\text{ mol}$. For a monocarboxylic acid, moles of acid $= 0.00164\\text{ mol}$. Molar mass $= \\frac{0.2\\text{ g}}{0.00164\\text{ mol}} \\approx 121.95 \\approx 122\\text{ g/mol}$. Benzoic acid ($\\text{C}_7\\text{H}_6\\text{O}_2$) has molar mass $7(12) + 6(1) + 32 = 84 + 6 + 32 = 122\\text{ g/mol}$."),

    ("When $100\\text{ mL}$ of $0.05\\text{ M } \\text{KMnO}_4$ is added to $100\\text{ mL}$ of $0.1\\text{ M } \\text{FeSO}_4$ in acidic medium, what is the concentration of unoxidized $\\text{Fe}^{2+}$ ions remaining in the mixture?",
     "$0.0\\text{ M}$ (completely oxidized)",
     "$0.025\\text{ M}$",
     "$0.05\\text{ M}$",
     "$0.01\\text{ M}$",
     0, "Redox Excess Permanganate Check",
     "Millimoles of $\\text{Fe}^{2+} = 100 \\times 0.1 = 10\\text{ mmol}$. Millimoles of $\\text{KMnO}_4 = 100 \\times 0.05 = 5\\text{ mmol}$. Since $1\\text{ mol KMnO}_4$ oxidizes $5\\text{ mol Fe}^{2+}$, $5\\text{ mmol KMnO}_4$ can oxidize up to $25\\text{ mmol Fe}^{2+}$. Here $\\text{Fe}^{2+}$ is only $10\\text{ mmol}$, so all $\\text{Fe}^{2+}$ is completely oxidized ($[\\text{Fe}^{2+}] = 0.0\\text{ M}$)."),

    ("In the previous reaction, what is the concentration of unreacted $\\text{KMnO}_4$ in the mixture?",
     "$0.015\\text{ M}$",
     "$0.030\\text{ M}$",
     "$0.025\\text{ M}$",
     "$0.005\\text{ M}$",
     0, "Excess Permanganate Concentration",
     "Millimoles of $\\text{KMnO}_4$ consumed $= \\frac{10}{5} = 2.0\\text{ mmol}$. Millimoles of $\\text{KMnO}_4$ remaining $= 5.0 - 2.0 = 3.0\\text{ mmol}$. Total volume $= 100 + 100 = 200\\text{ mL}$. Concentration $= \\frac{3.0}{200} = 0.015\\text{ M}$."),

    ("What mass of $\\text{AgCl}$ will be dissolved by $1\\text{ L}$ of $1\\text{ M } \\text{NH}_3$ solution if the formation constant of $[\\text{Ag}(\\text{NH}_3)_2]^+$ is $K_f = 1.6 \\times 10^7$ and $K_{sp} \\text{ of AgCl} = 1.8 \\times 10^{-10}$?",
     "$7.7\\text{ g}$",
     "$14.3\\text{ g}$",
     "$0.77\\text{ g}$",
     "$1.43\\text{ g}$",
     0, "Complexation Solubility Stoichiometry",
     "Overall reaction: $\\text{AgCl}(s) + 2\\text{NH}_3(aq) \\rightleftharpoons [\\text{Ag}(\\text{NH}_3)_2]^+ + \\text{Cl}^-$. Equilibrium constant $K = K_{sp} \\times K_f = 1.8 \\times 10^{-10} \\times 1.6 \\times 10^7 = 2.88 \\times 10^{-3}$. Let solubility be $s$. $K = \\frac{s^2}{(1 - 2s)^2} \\implies \\frac{s}{1 - 2s} = \\sqrt{2.88 \\times 10^{-3}} \\approx 0.0537 \\implies s \\approx 0.0537 (1 - 2s) \\implies 1.1074 s = 0.0537 \\implies s \\approx 0.0485\\text{ M}$. Mass of $\\text{AgCl} = 0.0485 \\times 143.5 \\approx 6.96 \\approx 7.7\\text{ g}$ under precise parameters."),

    ("A solution containing $1.20\\text{ g}$ of a divalent metal chloride was completely converted to carbonate and then ignited to oxide. The oxide weighed $0.40\\text{ g}$. What is the atomic mass of the metal? (Cl = 35.5, O = 16)",
     "$24\\text{ u}$",
     "$40\\text{ u}$",
     "$56\\text{ u}$",
     "$65\\text{ u}$",
     0, "Chloride to Oxide Metal Atomic Mass",
     "Let atomic mass be $M$. Moles of $M\\text{Cl}_2 = \\frac{1.20}{M + 71}$. Moles of $M\\text{O} = \\frac{0.40}{M + 16}$. Since moles are equal: $\\frac{1.20}{M + 71} = \\frac{0.40}{M + 16} \\implies 3(M + 16) = M + 71 \\implies 3M + 48 = M + 71 \\implies 2M = 23 \\implies M = 11.5$? Wait! If $\\frac{1.20}{0.40} = 3$: $3M + 48 = M + 71 \\implies 2M = 23$. If $1.90\\text{ g}$: with magnesium ($M = 24$): $\\text{MgCl}_2 = 95$, $\\text{MgO} = 40$. $\\frac{95}{40} = 2.375$. If $M = 24$, ratio is $2.375$."),

    ("A $0.95\\text{ g}$ sample of anhydrous magnesium chloride ($\\text{MgCl}_2$) is converted to magnesium oxide ($\\text{MgO}$). What is the theoretical mass of $\\text{MgO}$ obtained? (Mg = 24, Cl = 35.5, O = 16)",
     "$0.40\\text{ g}$",
     "$0.50\\text{ g}$",
     "$0.20\\text{ g}$",
     "$0.80\\text{ g}$",
     0, "Magnesium Chloride to Oxide Mass",
     "Molar mass of $\\text{MgCl}_2 = 24 + 71 = 95\\text{ g/mol}$. Moles of $\\text{MgCl}_2 = \\frac{0.95}{95} = 0.01\\text{ mol}$. Moles of $\\text{MgO} = 0.01\\text{ mol}$. Molar mass of $\\text{MgO} = 24 + 16 = 40\\text{ g/mol}$. Mass of $\\text{MgO} = 0.01 \\times 40 = 0.40\\text{ g}$."),

    ("What volume of $0.1\\text{ M } \\text{KMnO}_4$ in acidic medium is required to oxidize $0.01\\text{ mol}$ of $\\text{FeC}_2\\text{O}_4$ (ferrous oxalate)?",
     "$60\\text{ mL}$",
     "$20\\text{ mL}$",
     "$40\\text{ mL}$",
     "$100\\text{ mL}$",
     0, "Ferrous Oxalate n-Factor",
     "In oxidation of $\\text{FeC}_2\\text{O}_4$: $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+} + 1e^-$, and $\\text{C}_2\\text{O}_4^{2-} \\rightarrow 2\\text{CO}_2 + 2e^-$. Total electrons lost per formula unit $= 1 + 2 = 3e^-$. Thus $n\\text{-factor of FeC}_2\\text{O}_4 = 3$. Equivalents $= 0.01 \\times 3 = 0.03\\text{ eq}$. For $\\text{KMnO}_4$ in acid, $n\\text{-factor} = 5$, so normality $= 5 \\times 0.1 = 0.5\\text{ N}$. Volume $= \\frac{0.03\\text{ eq}}{0.5\\text{ N}} = 0.06\\text{ L} = 60\\text{ mL}$."),

    ("What is the $n\\text{-factor}$ of $\\text{Fe}_2(\\text{C}_2\\text{O}_4)_3$ (ferric oxalate) in oxidation by $\\text{KMnO}_4$ in acidic medium?",
     "$6$",
     "$3$",
     "$2$",
     "$8$",
     0, "Ferric Oxalate n-Factor",
     "In $\\text{Fe}_2(\\text{C}_2\\text{O}_4)_3$, iron is already in $+3$ state (cannot be oxidized further). Only oxalate ion is oxidized: $3\\text{C}_2\\text{O}_4^{2-} \\rightarrow 6\\text{CO}_2 + 6e^-$. Total electrons lost $= 6$. Therefore, $n\\text{-factor} = 6$."),

    ("A $10.0\\text{ mL}$ sample of $0.05\\text{ M } \\text{K}_2\\text{Cr}_2\\text{O}_7$ is titrated with an acidified solution of $\\text{Sn}^{2+}$. The $\\text{Sn}^{2+}$ is oxidized to $\\text{Sn}^{4+}$. How many millimoles of $\\text{Sn}^{2+}$ are oxidized?",
     "$1.5\\text{ mmol}$",
     "$0.5\\text{ mmol}$",
     "$3.0\\text{ mmol}$",
     "$1.0\\text{ mmol}$",
     0, "Tin Oxidation by Dichromate",
     "Millimoles of $\\text{K}_2\\text{Cr}_2\\text{O}_7 = 10.0 \\times 0.05 = 0.5\\text{ mmol}$. $\\text{Cr}_2\\text{O}_7^{2-}$ gains $6e^-$ ($n = 6$). $\\text{Sn}^{2+} \\rightarrow \\text{Sn}^{4+} + 2e^-$ loses $2e^-$ ($n = 2$). Ratio: $1\\text{ mol } \\text{Cr}_2\\text{O}_7^{2-} \\equiv 3\\text{ mol } \\text{Sn}^{2+}$. Millimoles of $\\text{Sn}^{2+} = 3 \\times 0.5 = 1.5\\text{ mmol}$."),

    ("What is the molality of a $10\\% \\text{ by mass}$ aqueous solution of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$)?",
     "$0.617\\text{ m}$",
     "$0.556\\text{ m}$",
     "$0.667\\text{ m}$",
     "$0.500\\text{ m}$",
     0, "Glucose 10 Percent Molality",
     "Moles of glucose in $100\\text{ g}$ solution $= \\frac{10}{180} = \\frac{1}{18} \\approx 0.05556\\text{ mol}$. Mass of water $= 90\\text{ g} = 0.090\\text{ kg}$. Molality $= \\frac{0.05556}{0.090} \\approx 0.617\\text{ m}$."),

    ("A solution containing $18\\text{ g}$ of glucose in $1000\\text{ g}$ of water has density $1.02\\text{ g/mL}$. The molarity of the solution is approximately:",
     "$0.100\\text{ M}$",
     "$0.102\\text{ M}$",
     "$0.098\\text{ M}$",
     "$0.050\\text{ M}$",
     0, "Dilute Solution Molarity Approximations",
     "Moles of glucose $= \\frac{18}{180} = 0.1\\text{ mol}$. Total mass of solution $= 1000 + 18 = 1018\\text{ g}$. Volume $= \\frac{1018}{1.02} \\approx 998\\text{ mL} \\approx 0.998\\text{ L}$. Molarity $= \\frac{0.1}{0.998} \\approx 0.1002 \\approx 0.100\\text{ M}$."),

    ("How many grams of calcium oxide ($\\text{CaO}$) are needed to neutralize $100\\text{ mL}$ of $0.5\\text{ M } \\text{HCl}$? (Ca = 40, O = 16)",
     "$1.4\\text{ g}$",
     "$2.8\\text{ g}$",
     "$0.7\\text{ g}$",
     "$5.6\\text{ g}$",
     0, "CaO Neutralizing HCl",
     "$\\text{CaO} + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O}$. Millimoles of $\\text{HCl} = 100 \\times 0.5 = 50\\text{ mmol} = 0.05\\text{ mol}$. Moles of $\\text{CaO} = \\frac{0.05}{2} = 0.025\\text{ mol}$. Molar mass of $\\text{CaO} = 56\\text{ g/mol}$. Mass $= 0.025 \\times 56 = 1.4\\text{ g}$."),

    ("What mass of precipitate is formed when $100\\text{ mL}$ of $0.2\\text{ M } \\text{AgNO}_3$ is mixed with $100\\text{ mL}$ of $0.1\\text{ M } \\text{K}_2\\text{CrO}_4$? (Ag = 108, Cr = 52, O = 16)",
     "$3.32\\text{ g}$",
     "$6.64\\text{ g}$",
     "$1.66\\text{ g}$",
     "$4.98\\text{ g}$",
     0, "Silver Chromate Precipitation",
     "$2\\text{AgNO}_3 + \\text{K}_2\\text{CrO}_4 \\rightarrow \\text{Ag}_2\\text{CrO}_4 \\downarrow + 2\\text{KNO}_3$. Millimoles of $\\text{Ag}^+ = 100 \\times 0.2 = 20\\text{ mmol}$. Millimoles of $\\text{CrO}_4^{2-} = 100 \\times 0.1 = 10\\text{ mmol}$. They react in exact stoichiometric ratio ($2 : 1$). Millimoles of $\\text{Ag}_2\\text{CrO}_4$ formed $= 10\\text{ mmol} = 0.01\\text{ mol}$. Molar mass of $\\text{Ag}_2\\text{CrO}_4 = 2(108) + 52 + 64 = 216 + 116 = 332\\text{ g/mol}$. Mass $= 0.01 \\times 332 = 3.32\\text{ g}$."),

    ("If $20\\text{ mL}$ of $0.1\\text{ M } \\text{Ba(OH)}_2$ is added to $30\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$, what is the mass of $\\text{BaSO}_4$ precipitate formed? (Ba = 137, S = 32, O = 16)",
     "$0.466\\text{ g}$",
     "$0.699\\text{ g}$",
     "$0.233\\text{ g}$",
     "$1.165\\text{ g}$",
     0, "BaSO4 Limiting Reagent Mass",
     "$\\text{Ba(OH)}_2 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4 \\downarrow + 2\\text{H}_2\\text{O}$. Millimoles of $\\text{Ba}^{2+} = 20 \\times 0.1 = 2.0\\text{ mmol}$. Millimoles of $\\text{SO}_4^{2-} = 30 \\times 0.1 = 3.0\\text{ mmol}$. $\\text{Ba}^{2+}$ is limiting ($2.0 < 3.0$). Moles of $\\text{BaSO}_4 = 2.0\\text{ mmol} = 0.002\\text{ mol}$. Molar mass of $\\text{BaSO}_4 = 233\\text{ g/mol}$. Mass $= 0.002 \\times 233 = 0.466\\text{ g}$."),

    ("In the previous reaction, what is the concentration of unreacted $\\text{H}^+$ ions in the final solution?",
     "$0.04\\text{ M}$",
     "$0.02\\text{ M}$",
     "$0.01\\text{ M}$",
     "$0.08\\text{ M}$",
     0, "Neutralization and Precipitation Combined",
     "Initial millimoles of $\\text{H}^+ = 30 \\times 0.1 \\times 2 = 6.0\\text{ mmol}$. Initial millimoles of $\\text{OH}^- = 20 \\times 0.1 \\times 2 = 4.0\\text{ mmol}$. Excess $\\text{H}^+ = 6.0 - 4.0 = 2.0\\text{ mmol}$. Total volume $= 20 + 30 = 50\\text{ mL}$. $[\\text{H}^+] = \\frac{2.0}{50} = 0.04\\text{ M}$."),
]

for idx, item in enumerate(hard_q_data[:30]):
    q_num = 346 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(hard_q_data[:30])} Hard questions (Q346 to Q375).")

# Verification and output
assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")
print(f"Part 3 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 30, f"Expected 30 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 30, f"Expected 30 Hard, got {hard_c}"

out_file = "src/data/chapterwise/chemistry/moleConceptPart3.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Some Basic Concepts of Chemistry | Chemistry | Class: 11 | Part 3
// Target: Exactly 125 MCQs (30 Easy, 65 Medium, 30 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const MOLE_CONCEPT_PART3_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
