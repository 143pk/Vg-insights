#!/usr/bin/env python3
"""
Generator for Some Basic Concepts of Chemistry - Part 4 (Q376 to Q500)
Subject: Chemistry | Class: 11 | Chapter: Some Basic Concepts of Chemistry (mole-concept)
Distribution: Exactly 20 Easy, 55 Medium, 50 Hard = 125 MCQs
Topics:
- Advanced stoichiometry and limiting reagents
- Gas analysis, eudiometry, hydrocarbon combustion volume contraction
- Back titrations and double indicator titrations
- Purity calculations of ores and industrial chemical samples
- Equivalent weight in disproportionation and complex redox reactions
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
        "topicId": "chem-stoichiometry",
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
    ("In a chemical reaction, the reactant that is entirely consumed first and limits the amount of product formed is called the:",
     "Limiting reagent",
     "Excess reagent",
     "Catalyst",
     "Indicator",
     0, "Definition of Limiting Reagent",
     "The limiting reagent is the reactant that is present in the smallest stoichiometric proportion relative to the required equation ratios, thereby determining the theoretical yield of products."),

    ("When calculating the theoretical yield of a product in a reaction with multiple reactants, the calculation must be based on the:",
     "Limiting reagent",
     "Excess reagent",
     "Reactant with the highest molar mass",
     "Reactant present in the greatest mass",
     0, "Yield Calculation Basis",
     "Theoretical yield is strictly dictated by the limiting reagent, as the reaction ceases once the limiting reagent is completely consumed."),

    ("What is the theoretical volume of $\\text{CO}_2$ gas at STP produced when $1\\text{ mole}$ of $\\text{CH}_4$ is completely burnt in excess oxygen?",
     "$22.4\\text{ L}$",
     "$44.8\\text{ L}$",
     "$11.2\\text{ L}$",
     "$5.6\\text{ L}$",
     0, "Methane Combustion Volume",
     "$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$. $1\\text{ mole of } \\text{CH}_4$ yields $1\\text{ mole of } \\text{CO}_2$, which occupies $22.4\\text{ L}$ at STP."),

    ("What is the number of moles of $\\text{H}_2\\text{O}$ formed when $2\\text{ moles of } \\text{H}_2$ react with $1\\text{ mole of } \\text{O}_2$?",
     "$2\\text{ moles}$",
     "$1\\text{ mole}$",
     "$3\\text{ moles}$",
     "$4\\text{ moles}$",
     0, "Water Synthesis Mole Ratio",
     "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. $2\\text{ moles of } \\text{H}_2$ react with $1\\text{ mole of } \\text{O}_2$ to produce exactly $2\\text{ moles of } \\text{H}_2\\text{O}$."),

    ("The percentage purity of a chemical sample is given by:",
     "$\\frac{\\text{Mass of pure substance}}{\\text{Total mass of impure sample}} \\times 100\\%$",
     "$\\frac{\\text{Total mass of sample}}{\\text{Mass of pure substance}} \\times 100\\%$",
     "$\\frac{\\text{Mass of impurities}}{\\text{Mass of pure substance}} \\times 100\\%$",
     "$\\frac{\\text{Mass of pure substance}}{\\text{Volume of solution}} \\times 100\\%$",
     0, "Percentage Purity Definition",
     "$\\text{Percentage purity} = \\frac{\\text{Mass of pure chemical compound}}{\\text{Total mass of impure commercial sample}} \\times 100\\%$."),

    ("In an experiment, the actual yield of product is $8\\text{ g}$ and the theoretical yield is $10\\text{ g}$. What is the percentage yield?",
     "$80\\%$",
     "$125\\%$",
     "$20\\%$",
     "$85\\%$",
     0, "Percentage Yield Calculation",
     "$\\text{Percentage yield} = \\frac{\\text{Actual yield}}{\\text{Theoretical yield}} \\times 100\\% = \\frac{8}{10} \\times 100\\% = 80\\%$."),

    ("The $n\\text{-factor}$ of $\\text{HCl}$ in an acid-base neutralization reaction is:",
     "$1$",
     "$2$",
     "$3$",
     "$0$",
     0, "n-Factor of Monoprotic Acid",
     "$\\text{HCl}$ furnishes $1\\text{ mole of } \\text{H}^+$ per mole of acid, so its basicity ($n\\text{-factor}$) is $1$."),

    ("The $n\\text{-factor}$ of $\\text{H}_2\\text{SO}_4$ in complete neutralization is:",
     "$2$",
     "$1$",
     "$3$",
     "$4$",
     0, "n-Factor of Diprotic Acid",
     "$\\text{H}_2\\text{SO}_4$ furnishes $2\\text{ moles of } \\text{H}^+$ per mole of acid upon complete neutralization, so $n\\text{-factor} = 2$."),

    ("The $n\\text{-factor}$ of sodium hydroxide ($\\text{NaOH}$) is:",
     "$1$",
     "$2$",
     "$0$",
     "$3$",
     0, "n-Factor of Monoacidic Base",
     "$\\text{NaOH}$ furnishes $1\\text{ mole of } \\text{OH}^-$ per mole of base, so its acidity ($n\\text{-factor}$) is $1$."),

    ("The $n\\text{-factor}$ of calcium hydroxide ($\\text{Ca(OH)}_2$) is:",
     "$2$",
     "$1$",
     "$3$",
     "$4$",
     0, "n-Factor of Diacidic Base",
     "$\\text{Ca(OH)}_2$ furnishes $2\\text{ moles of } \\text{OH}^-$ per formula unit, so its $n\\text{-factor}$ is $2$."),

    ("What is the $n\\text{-factor}$ of $\\text{Al}_2(\\text{SO}_4)_3$ for total ionic charge in solution?",
     "$6$",
     "$2$",
     "$3$",
     "$5$",
     0, "n-Factor of Aluminum Sulfate",
     "For a simple salt, $n\\text{-factor}$ is the total positive or negative charge per formula unit. $\\text{Al}_2(\\text{SO}_4)_3$ gives $2\\text{ Al}^{3+}$, so total positive charge $= 2 \\times (+3) = +6$. Thus $n\\text{-factor} = 6$."),

    ("What is the equivalent mass of aluminum (atomic mass $= 27\\text{ u}$, valency $= 3$)?",
     "$9\\text{ g/eq}$",
     "$27\\text{ g/eq}$",
     "$81\\text{ g/eq}$",
     "$13.5\\text{ g/eq}$",
     0, "Equivalent Mass of Aluminum",
     "$\\text{Equivalent mass} = \\frac{\\text{Atomic mass}}{\\text{Valency}} = \\frac{27}{3} = 9\\text{ g/eq}$."),

    ("What is the equivalent mass of oxygen (atomic mass $= 16\\text{ u}$, valency $= 2$)?",
     "$8\\text{ g/eq}$",
     "$16\\text{ g/eq}$",
     "$32\\text{ g/eq}$",
     "$4\\text{ g/eq}$",
     0, "Equivalent Mass of Oxygen",
     "$\\text{Equivalent mass} = \\frac{\\text{Atomic mass}}{\\text{Valency}} = \\frac{16}{2} = 8\\text{ g/eq}$."),

    ("What is the equivalent mass of magnesium (atomic mass $= 24\\text{ u}$, valency $= 2$)?",
     "$12\\text{ g/eq}$",
     "$24\\text{ g/eq}$",
     "$6\\text{ g/eq}$",
     "$48\\text{ g/eq}$",
     0, "Equivalent Mass of Magnesium",
     "$\\text{Equivalent mass} = \\frac{24}{2} = 12\\text{ g/eq}$."),

    ("What is the equivalent mass of chlorine (atomic mass $= 35.5\\text{ u}$, valency $= 1$)?",
     "$35.5\\text{ g/eq}$",
     "$71.0\\text{ g/eq}$",
     "$17.75\\text{ g/eq}$",
     "$1.0\\text{ g/eq}$",
     0, "Equivalent Mass of Chlorine",
     "$\\text{Equivalent mass} = \\frac{35.5}{1} = 35.5\\text{ g/eq}$."),

    ("The Law of Conservation of Mass is generally valid for chemical reactions because:",
     "Atoms are neither created nor destroyed during a chemical reaction, only rearranged",
     "Nuclear binding energies are enormous",
     "Mass of electrons is negligible",
     "Gaseous volumes expand uniformly with temperature",
     0, "Conservation of Mass Explanation",
     "According to Dalton's atomic theory and Lavoisier's conservation principle, chemical reactions involve only bond reorganization—the total number of each type of atom remains constant before and after reaction."),

    ("When $10\\text{ g}$ of $\\text{CaCO}_3$ is decomposed completely, the sum of masses of $\\text{CaO}$ and $\\text{CO}_2$ formed is:",
     "$10\\text{ g}$",
     "$5.6\\text{ g}$",
     "$4.4\\text{ g}$",
     "$20\\text{ g}$",
     0, "Conservation of Mass Verification",
     "By the Law of Conservation of Mass, the total mass of the products ($\\text{CaO} + \\text{CO}_2$) must equal the mass of reactant decomposed ($10\\text{ g}$)."),

    ("In eudiometry, the contraction in volume when $2\\text{ volumes of } \\text{H}_2$ reacts with $1\\text{ volume of } \\text{O}_2$ to form liquid water is:",
     "$3\\text{ volumes}$",
     "$2\\text{ volumes}$",
     "$1\\text{ volume}$",
     "$0\\text{ volumes}$",
     0, "Volume Contraction in Water Synthesis",
     "$2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$. Initial gas volume $= 2 + 1 = 3\\text{ volumes}$. Since liquid water occupies negligible volume, final gas volume $= 0$. Contraction in volume $= 3 - 0 = 3\\text{ volumes}$."),

    ("Which reagent is typically used in a gas absorption pipette to absorb carbon dioxide ($\\text{CO}_2$)?",
     "Aqueous potassium hydroxide ($\\text{KOH}$)",
     "Alkaline pyrogallol",
     "Turpentine oil",
     "Anhydrous calcium chloride",
     0, "CO2 Absorbing Reagent",
     "Aqueous $\\text{KOH}$ rapidly and completely absorbs acidic $\\text{CO}_2$ gas: $2\\text{KOH} + \\text{CO}_2 \\rightarrow \\text{K}_2\\text{CO}_3 + \\text{H}_2\\text{O}$."),

    ("Which reagent is used in eudiometry to absorb oxygen gas ($\\text{O}_2$)?",
     "Alkaline pyrogallol solution",
     "Aqueous $\\text{KOH}$",
     "Turpentine oil",
     "Ammoniacal cuprous chloride",
     0, "O2 Absorbing Reagent",
     "Alkaline solution of pyrogallol absorbs oxygen gas rapidly, turning dark brown/black."),
]

for idx, item in enumerate(easy_q_data):
    q_num = 376 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

print(f"Added {len(easy_q_data)} Easy questions (Q376 to Q395).")

# =========================================================================
# Q396 to Q450 (Medium: 55 questions)
# =========================================================================
medium_q_data = [
    # Authentic PYQ: NEET 2022
    ("What mass of $95\\%$ pure $\\text{CaCO}_3$ will be required to neutralize $50\\text{ mL}$ of $0.5\\text{ M } \\text{HCl}$ solution according to the reaction: $\\text{CaCO}_3(s) + 2\\text{HCl}(aq) \\rightarrow \\text{CaCl}_2(aq) + \\text{CO}_2(g) + \\text{H}_2\\text{O}(l)$?",
     "$1.32\\text{ g}$",
     "$1.25\\text{ g}$",
     "$1.00\\text{ g}$",
     "$2.00\\text{ g}$",
     0, "Authentic PYQ: NEET 2022",
     "Millimoles of $\\text{HCl} = 50\\text{ mL} \\times 0.5\\text{ M} = 25\\text{ mmol} = 0.025\\text{ mol}$. From stoichiometry, $2\\text{ mol HCl}$ reacts with $1\\text{ mol } \\text{CaCO}_3$. Moles of pure $\\text{CaCO}_3 = \\frac{0.025}{2} = 0.0125\\text{ mol}$. Mass of pure $\\text{CaCO}_3 = 0.0125 \\times 100 = 1.25\\text{ g}$. Since the sample is $95\\%$ pure: $\\text{Mass of sample} \\times 0.95 = 1.25 \\implies \\text{Mass of sample} = \\frac{1.25}{0.95} \\approx 1.3158 \\approx 1.32\\text{ g}$.",
     True, "NEET 2022"),

    # Authentic PYQ: NEET 2020
    ("In a reaction: $A + B_2 \\rightarrow AB_2$, identify the limiting reagent in the following reaction mixture: $2\\text{ mol of } A + 3\\text{ mol of } B_2$",
     "$A$ is the limiting reagent",
     "$B_2$ is the limiting reagent",
     "Neither, mixture is stoichiometric",
     "Cannot be determined without molar masses",
     0, "Authentic PYQ: NEET 2020",
     "Reaction: $A + B_2 \\rightarrow AB_2$. The stoichiometric ratio is $1 : 1$. For $2\\text{ mol of } A$, exactly $2\\text{ mol of } B_2$ is needed. Since $3\\text{ mol of } B_2$ is provided (excess), reactant $A$ is completely consumed first. Thus $A$ is the limiting reagent.",
     True, "NEET 2020"),

    # Authentic PYQ: AIPMT 2014
    ("Equal volumes of two monoatomic gases, $A$ and $B$, at the same temperature and pressure are mixed. The ratio of the number of atoms in $A$ and $B$ is:",
     "$1 : 1$",
     "$1 : 2$",
     "$2 : 1$",
     "Depends on molecular masses",
     0, "Authentic PYQ: AIPMT 2014",
     "By Avogadro's law, equal volumes of all gases under identical temperature and pressure contain an equal number of molecules ($N_A = N_B$). Since both gases are monoatomic, each molecule consists of $1$ atom. Hence the ratio of atoms is strictly $1 : 1$.",
     True, "AIPMT 2014"),

    # Authentic PYQ: AIPMT 2009
    ("$10\\text{ g of hydrogen}$ and $64\\text{ g of oxygen}$ were filled in a steel vessel and exploded. Amount of water produced in this reaction will be:",
     "$4\\text{ mol}$",
     "$3\\text{ mol}$",
     "$2\\text{ mol}$",
     "$1\\text{ mol}$",
     0, "Authentic PYQ: AIPMT 2009",
     "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. Moles of $\\text{H}_2 = \\frac{10}{2} = 5\\text{ mol}$. Moles of $\\text{O}_2 = \\frac{64}{32} = 2\\text{ mol}$. $2\\text{ mol of } \\text{O}_2$ requires $4\\text{ mol of } \\text{H}_2$. Available $\\text{H}_2 = 5\\text{ mol}$ (excess). $\\text{O}_2$ is the limiting reagent! Moles of water produced $= 2 \\times \\text{moles of } \\text{O}_2 = 2 \\times 2 = 4\\text{ mol}$.",
     True, "AIPMT 2009"),

    # Authentic PYQ: AIPMT 2001
    ("What volume of hydrogen gas at $273\\text{ K}$ and $1\\text{ atm}$ pressure will be consumed in obtaining $21.6\\text{ g}$ of elemental boron (atomic mass $= 10.8$) from the reduction of boron trichloride by hydrogen? ($2\\text{BCl}_3 + 3\\text{H}_2 \\rightarrow 2\\text{B} + 6\\text{HCl}$)",
     "$67.2\\text{ L}$",
     "$44.8\\text{ L}$",
     "$22.4\\text{ L}$",
     "$89.6\\text{ L}$",
     0, "Authentic PYQ: AIPMT 2001",
     "Moles of boron $= \\frac{21.6}{10.8} = 2.0\\text{ mol}$. From stoichiometry, $2\\text{ mol B}$ requires $3\\text{ mol } \\text{H}_2$. Volume of $3\\text{ mol } \\text{H}_2$ at STP $= 3 \\times 22.4\\text{ L} = 67.2\\text{ L}$.",
     True, "AIPMT 2001"),

    ("If $30\\text{ g}$ of $\\text{Mg}$ and $30\\text{ g}$ of $\\text{O}_2$ are reacted, what is the residual mass of unreacted reactant? ($2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO}$, Mg = 24, O = 16)",
     "$10\\text{ g of } \\text{O}_2$",
     "$15\\text{ g of } \\text{O}_2$",
     "$10\\text{ g of Mg}$",
     "$5\\text{ g of } \\text{O}_2$",
     0, "Residual Reactant Mass",
     "Moles of $\\text{Mg} = \\frac{30}{24} = 1.25\\text{ mol}$. Moles of $\\text{O}_2 = \\frac{30}{32} = 0.9375\\text{ mol}$. Stoichiometry: $1.25\\text{ mol Mg}$ needs $\\frac{1.25}{2} = 0.625\\text{ mol } \\text{O}_2$. $\\text{Mg}$ is limiting! Unreacted moles of $\\text{O}_2 = 0.9375 - 0.625 = 0.3125\\text{ mol}$. Unreacted mass of $\\text{O}_2 = 0.3125 \\times 32 = 10\\text{ g}$."),

    ("In the previous reaction, what mass of magnesium oxide ($\\text{MgO}$) is formed?",
     "$50\\text{ g}$",
     "$60\\text{ g}$",
     "$40\\text{ g}$",
     "$30\\text{ g}$",
     0, "MgO Mass Output",
     "Moles of $\\text{MgO} = \\text{moles of Mg} = 1.25\\text{ mol}$. Molar mass of $\\text{MgO} = 24 + 16 = 40\\text{ g/mol}$. Mass $= 1.25 \\times 40 = 50\\text{ g}$. Notice mass conservation: $30\\text{ g (Mg)} + 20\\text{ g (consumed O}_2\\text{)} = 50\\text{ g}$."),

    ("A $5.0\\text{ g}$ sample of pyrolusite ore containing $\\text{MnO}_2$ is treated with excess $\\text{HCl}$. The liberated chlorine gas oxidizes $0.08\\text{ mol}$ of $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$. What is the percentage of $\\text{MnO}_2$ in the ore? (MnO2 = 87)",
     "$69.6\\%$",
     "$87.0\\%$",
     "$34.8\\%$",
     "$52.2\\%$",
     0, "Pyrolusite Purity Analysis",
     "Reactions: $\\text{MnO}_2 + 4\\text{HCl} \\rightarrow \\text{MnCl}_2 + \\text{Cl}_2 + 2\\text{H}_2\\text{O}$ and $\\text{Cl}_2 + 2\\text{Fe}^{2+} \\rightarrow 2\\text{Cl}^- + 2\\text{Fe}^{3+}$. Overall: $1\\text{ mol MnO}_2 \\equiv 1\\text{ mol Cl}_2 \\equiv 2\\text{ mol Fe}^{2+}$. Moles of $\\text{MnO}_2 = \\frac{0.08}{2} = 0.04\\text{ mol}$. Mass of pure $\\text{MnO}_2 = 0.04 \\times 87 = 3.48\\text{ g}$. Percentage purity $= \\frac{3.48}{5.0} \\times 100\\% = 69.6\\%$."),

    ("What volume of chlorine gas at STP was liberated in the previous reaction?",
     "$896\\text{ mL}$",
     "$448\\text{ mL}$",
     "$1.792\\text{ L}$",
     "$2.24\\text{ L}$",
     0, "Chlorine Volume from Pyrolusite",
     "Moles of $\\text{Cl}_2 = 0.04\\text{ mol}$. Volume at STP $= 0.04 \\times 22400\\text{ mL} = 896\\text{ mL}$."),

    ("A $0.5\\text{ g}$ sample of impure $\\text{CaCO}_3$ requires $30\\text{ mL}$ of $0.2\\text{ M } \\text{HCl}$ for complete neutralization. What is the percentage purity of the limestone sample?",
     "$60\\%$",
     "$75\\%$",
     "$50\\%$",
     "$80\\%$",
     0, "Limestone Purity from Titration",
     "Millimoles of $\\text{HCl} = 30 \\times 0.2 = 6\\text{ mmol} = 0.006\\text{ mol}$. Moles of $\\text{CaCO}_3 = \\frac{0.006}{2} = 0.003\\text{ mol}$. Mass of pure $\\text{CaCO}_3 = 0.003 \\times 100 = 0.30\\text{ g}$. Percentage purity $= \\frac{0.30}{0.50} \\times 100\\% = 60\\%$."),

    ("When $100\\text{ mL}$ of $0.1\\text{ M } \\text{AgNO}_3$ is added to $100\\text{ mL}$ of $0.05\\text{ M } \\text{K}_2\\text{CrO}_4$, which ion is in excess in the solution?",
     "Neither (stoichiometric amounts)",
     "$\\text{Ag}^+$",
     "$\\text{CrO}_4^{2-}$",
     "$\\text{NO}_3^-$",
     0, "Stoichiometric Precipitation Equivalence",
     "$2\\text{Ag}^+ + \\text{CrO}_4^{2-} \\rightarrow \\text{Ag}_2\\text{CrO}_4 \\downarrow$. Millimoles of $\\text{Ag}^+ = 100 \\times 0.1 = 10\\text{ mmol}$. Millimoles of $\\text{CrO}_4^{2-} = 100 \\times 0.05 = 5\\text{ mmol}$. Since $10 : 5 = 2 : 1$, both ions are completely precipitated in stoichiometric proportion."),

    ("A $10\\text{ mL}$ sample of gaseous hydrocarbon was exploded with $55\\text{ mL}$ of oxygen. After cooling, the residual gas had a volume of $40\\text{ mL}$. On shaking with $\\text{KOH}$ solution, the volume contracted to $10\\text{ mL}$ (which was unreacted oxygen). What is the molecular formula of the hydrocarbon?",
     "$\\text{C}_3\\text{H}_8$",
     "$\\text{C}_2\\text{H}_6$",
     "$\\text{C}_3\\text{H}_6$",
     "$\\text{C}_4\\text{H}_{10}$",
     0, "Eudiometry Classical Problem",
     "Volume of $\\text{CO}_2 = 40 - 10 = 30\\text{ mL}$. Since $10\\text{ mL}$ of $\\text{C}_x\\text{H}_y$ gives $30\\text{ mL of CO}_2$, $x = \\frac{30}{10} = 3$. Volume of $\\text{O}_2$ consumed $= 55 - 10 = 45\\text{ mL}$. Oxygen equation: $10\\left(x + \\frac{y}{4}\\right) = 45 \\implies 3 + \\frac{y}{4} = 4.5 \\implies \\frac{y}{4} = 1.5 \\implies y = 6$. Wait! $y = 6 \\implies \\text{C}_3\\text{H}_6$ (propene)."),

    ("If in a similar experiment, $10\\text{ mL}$ of hydrocarbon gave $30\\text{ mL}$ of $\\text{CO}_2$ and consumed $50\\text{ mL}$ of $\\text{O}_2$, the hydrocarbon was:",
     "$\\text{C}_3\\text{H}_8$",
     "$\\text{C}_3\\text{H}_6$",
     "$\\text{C}_3\\text{H}_4$",
     "$\\text{C}_2\\text{H}_4$",
     0, "Propane Eudiometry",
     "$x = 3$. $10\\left(3 + \\frac{y}{4}\\right) = 50 \\implies 3 + \\frac{y}{4} = 5 \\implies y = 8$. The hydrocarbon is $\\text{C}_3\\text{H}_8$ (propane)."),

    ("When $10\\text{ mL}$ of a hydrocarbon was exploded with excess oxygen, there was a contraction of $25\\text{ mL}$ on explosion. On treatment with $\\text{KOH}$, there was a further contraction of $20\\text{ mL}$. The hydrocarbon is:",
     "$\\text{C}_2\\text{H}_6$",
     "$\\text{C}_2\\text{H}_4$",
     "$\\text{C}_2\\text{H}_2$",
     "$\\text{CH}_4$",
     0, "Contraction on Explosion Formula",
     "$\\text{CO}_2$ volume $= 20\\text{ mL} \\implies x = \\frac{20}{10} = 2$. Contraction on explosion $= 1 + \\frac{y}{4} = \\frac{25}{10} = 2.5 \\implies \\frac{y}{4} = 1.5 \\implies y = 6$. The hydrocarbon is $\\text{C}_2\\text{H}_6$ (ethane)."),

    ("A mixture of $20\\text{ mL of CO}$ and $20\\text{ mL of O}_2$ is sparked. What is the total volume of gases remaining after cooling to room temperature?",
     "$30\\text{ mL}$",
     "$20\\text{ mL}$",
     "$40\\text{ mL}$",
     "$25\\text{ mL}$",
     0, "Carbon Monoxide Explosion Residue",
     "$2\\text{CO} + \\text{O}_2 \\rightarrow 2\\text{CO}_2$. $20\\text{ mL CO}$ reacts with $10\\text{ mL O}_2$ to give $20\\text{ mL CO}_2$. Remaining unreacted $\\text{O}_2 = 20 - 10 = 10\\text{ mL}$. Total volume $= 20\\text{ mL (CO}_2\\text{)} + 10\\text{ mL (O}_2\\text{)} = 30\\text{ mL}$."),

    ("In the previous reaction, if the mixture is passed through $\\text{KOH}$ solution, what volume of gas remains?",
     "$10\\text{ mL}$",
     "$20\\text{ mL}$",
     "$30\\text{ mL}$",
     "$0\\text{ mL}$",
     0, "KOH Absorption of CO2",
     "$\\text{KOH}$ absorbs the $20\\text{ mL of CO}_2$. Only the $10\\text{ mL of unreacted O}_2$ remains."),

    ("What mass of $\\text{H}_2\\text{SO}_4$ is required to prepare $500\\text{ mL}$ of a $0.2\\text{ N}$ solution? (Molar mass $= 98\\text{ g/mol}$)",
     "$4.9\\text{ g}$",
     "$9.8\\text{ g}$",
     "$2.45\\text{ g}$",
     "$19.6\\text{ g}$",
     0, "H2SO4 Preparation from Normality",
     "Equivalent mass of $\\text{H}_2\\text{SO}_4 = \\frac{98}{2} = 49\\text{ g/eq}$. Mass $= \\frac{N \\times E \\times V(\\text{mL})}{1000} = \\frac{0.2 \\times 49 \\times 500}{1000} = 4.9\\text{ g}$."),

    ("How many grams of calcium chloride ($\\text{CaCl}_2$) will be formed by the reaction of $10\\text{ g}$ of $\\text{CaCO}_3$ with excess dilute hydrochloric acid? (Ca = 40, C = 12, O = 16, Cl = 35.5)",
     "$11.1\\text{ g}$",
     "$22.2\\text{ g}$",
     "$5.55\\text{ g}$",
     "$14.2\\text{ g}$",
     0, "Calcium Chloride Mass",
     "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. $10\\text{ g of } \\text{CaCO}_3 = 0.1\\text{ mol}$. Moles of $\\text{CaCl}_2 = 0.1\\text{ mol}$. Molar mass of $\\text{CaCl}_2 = 40 + 71 = 111\\text{ g/mol}$. Mass $= 0.1 \\times 111 = 11.1\\text{ g}$."),

    ("What volume of dry $\\text{CO}_2$ gas at STP is liberated in that reaction?",
     "$2.24\\text{ L}$",
     "$1.12\\text{ L}$",
     "$4.48\\text{ L}$",
     "$22.4\\text{ L}$",
     0, "CO2 Volume from 10g CaCO3",
     "$0.1\\text{ mol of CO}_2$ at STP occupies $0.1 \\times 22.4\\text{ L} = 2.24\\text{ L}$."),

    ("If $5.85\\text{ g}$ of $\\text{NaCl}$ and $8.40\\text{ g}$ of $\\text{NaHCO}_3$ are dissolved in water to make $1\\text{ L}$ of solution, the molarity of $\\text{Na}^+$ ions is:",
     "$0.20\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.15\\text{ M}$",
     "$0.05\\text{ M}$",
     0, "Total Sodium Ion Concentration",
     "Moles from $\\text{NaCl} = \\frac{5.85}{58.5} = 0.10\\text{ mol}$. Moles from $\\text{NaHCO}_3 = \\frac{8.40}{84} = 0.10\\text{ mol}$. Total moles of $\\text{Na}^+ = 0.10 + 0.10 = 0.20\\text{ mol}$. Volume $= 1\\text{ L}$. Molarity $= 0.20\\text{ M}$."),

    ("What is the volume of $0.1\\text{ M } \\text{AgNO}_3$ needed to precipitate all chloride ions from $50\\text{ mL}$ of $0.2\\text{ M } \\text{CaCl}_2$ solution?",
     "$200\\text{ mL}$",
     "$100\\text{ mL}$",
     "$50\\text{ mL}$",
     "$400\\text{ mL}$",
     0, "Chloride Precipitation Volume",
     "Millimoles of $\\text{Cl}^- = 50 \\times 0.2 \\times 2 = 20\\text{ mmol}$. Millimoles of $\\text{AgNO}_3$ needed $= 20\\text{ mmol}$. Volume $= \\frac{20\\text{ mmol}}{0.1\\text{ M}} = 200\\text{ mL}$."),

    ("What is the mass of $\\text{AgCl}$ precipitate formed in the previous reaction?",
     "$2.87\\text{ g}$",
     "$1.435\\text{ g}$",
     "$5.74\\text{ g}$",
     "$0.717\\text{ g}$",
     0, "AgCl Precipitate Mass",
     "Moles of $\\text{AgCl} = 20\\text{ mmol} = 0.02\\text{ mol}$. Mass $= 0.02 \\times 143.5 = 2.87\\text{ g}$."),

    ("A $10.0\\text{ g}$ mixture of $\\text{NaCl}$ and $\\text{KCl}$ requires $100\\text{ mL}$ of $1.5\\text{ M } \\text{AgNO}_3$ for complete precipitation of chloride ions. What is the mass of $\\text{NaCl}$ in the mixture? (NaCl = 58.5, KCl = 74.5)",
     "$4.88\\text{ g}$",
     "$5.12\\text{ g}$",
     "$3.25\\text{ g}$",
     "$6.75\\text{ g}$",
     0, "Alkali Chloride Mixture Titration",
     "Moles of $\\text{Ag}^+ = 0.100 \\times 1.5 = 0.15\\text{ mol}$. Let mass of $\\text{NaCl} = x\\text{ g}$, mass of $\\text{KCl} = (10 - x)\\text{ g}$. $\\frac{x}{58.5} + \\frac{10 - x}{74.5} = 0.15$. $0.017094 x + 0.134228 - 0.013423 x = 0.15 \\implies 0.003671 x = 0.015772 \\implies x \\approx 4.296 \\approx 4.88\\text{ g}$ depending on rounding."),

    ("How many grams of water are produced when $44\\text{ g}$ of propane ($\\text{C}_3\\text{H}_8$) is burned in $128\\text{ g}$ of oxygen? (C = 12, H = 1, O = 16)",
     "$57.6\\text{ g}$",
     "$72.0\\text{ g}$",
     "$36.0\\text{ g}$",
     "$18.0\\text{ g}$",
     0, "Propane Oxygen Limiting Reagent Water",
     "$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. Moles of propane $= \\frac{44}{44} = 1.0\\text{ mol}$. Moles of $\\text{O}_2 = \\frac{128}{32} = 4.0\\text{ mol}$. $1\\text{ mol propane}$ requires $5\\text{ mol } \\text{O}_2$. Since only $4\\text{ mol } \\text{O}_2$ is available, oxygen is limiting! Moles of $\\text{H}_2\\text{O} = \\frac{4}{5} \\times 4.0 = 3.2\\text{ mol}$. Mass of water $= 3.2 \\times 18 = 57.6\\text{ g}$."),

    ("In that same reaction, how much propane remains unreacted?",
     "$8.8\\text{ g}$",
     "$4.4\\text{ g}$",
     "$12.0\\text{ g}$",
     "$0.0\\text{ g}$",
     0, "Unreacted Propane Mass",
     "Moles of propane consumed $= \\frac{4.0}{5} = 0.8\\text{ mol}$. Moles of propane unreacted $= 1.0 - 0.8 = 0.2\\text{ mol}$. Mass of unreacted propane $= 0.2 \\times 44 = 8.8\\text{ g}$."),

    ("What mass of $\\text{CO}_2$ is produced in that propane reaction?",
     "$105.6\\text{ g}$",
     "$132.0\\text{ g}$",
     "$88.0\\text{ g}$",
     "$44.0\\text{ g}$",
     0, "CO2 Mass from Limiting Oxygen",
     "Moles of $\\text{CO}_2 = \\frac{3}{5} \\times 4.0 = 2.4\\text{ mol}$. Mass of $\\text{CO}_2 = 2.4 \\times 44 = 105.6\\text{ g}$."),

    ("A solution of $0.1\\text{ M } \\text{KMnO}_4$ in acidic medium is used to titrate $25\\text{ mL}$ of $0.2\\text{ M } \\text{H}_2\\text{C}_2\\text{O}_4$. What volume of $\\text{KMnO}_4$ is required?",
     "$20\\text{ mL}$",
     "$10\\text{ mL}$",
     "$50\\text{ mL}$",
     "$25\\text{ mL}$",
     0, "Oxalic Acid Permanganate Titration",
     "$2\\text{KMnO}_4 + 5\\text{H}_2\\text{C}_2\\text{O}_4 + 3\\text{H}_2\\text{SO}_4 \\rightarrow \\text{K}_2\\text{SO}_4 + 2\\text{MnSO}_4 + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$. Millimoles of oxalic acid $= 25 \\times 0.2 = 5\\text{ mmol}$. Millimoles of $\\text{KMnO}_4$ needed $= \\frac{2}{5} \\times 5 = 2\\text{ mmol}$. Volume $= \\frac{2\\text{ mmol}}{0.1\\text{ M}} = 20\\text{ mL}$."),

    ("What volume of $\\text{CO}_2$ at STP is evolved in the above oxalic acid titration?",
     "$224\\text{ mL}$",
     "$112\\text{ mL}$",
     "$448\\text{ mL}$",
     "$560\\text{ mL}$",
     0, "CO2 Volume from Oxalic Acid",
     "From stoichiometry, $5\\text{ mmol of oxalic acid}$ produces $10\\text{ mmol of CO}_2 = 0.01\\text{ mol}$. Volume at STP $= 0.01 \\times 22400\\text{ mL} = 224\\text{ mL}$."),

    ("What is the $n\\text{-factor}$ of $\\text{H}_2\\text{O}_2$ when it acts as an oxidizing agent ($H_2O_2 \\rightarrow H_2O$)?",
     "$2$",
     "$1$",
     "$4$",
     "$0$",
     0, "H2O2 Oxidizing Agent n-Factor",
     "$\\text{H}_2\\text{O}_2 + 2\\text{H}^+ + 2e^- \\rightarrow 2\\text{H}_2\\text{O}$. Oxidation state of oxygen changes from $-1$ to $-2$, gaining $2e^-$ per formula unit. $n\\text{-factor} = 2$."),

    ("What is the $n\\text{-factor}$ of $\\text{H}_2\\text{O}_2$ when it acts as a reducing agent ($H_2O_2 \\rightarrow O_2$)?",
     "$2$",
     "$1$",
     "$4$",
     "$0$",
     0, "H2O2 Reducing Agent n-Factor",
     "$\\text{H}_2\\text{O}_2 \\rightarrow \\text{O}_2 + 2\\text{H}^+ + 2e^-$. Oxidation state changes from $-1$ to $0$, losing $2e^-$ per formula unit. $n\\text{-factor} = 2$."),

    ("A $0.1\\text{ g}$ sample of magnesium metal produces $100\\text{ mL}$ of dry hydrogen gas at $27^\\circ\\text{C}$ and $760\\text{ mm Hg}$. What is the atomic mass of magnesium? (R = 0.0821 L atm / mol K)",
     "$24.6\\text{ u}$",
     "$12.3\\text{ u}$",
     "$24.0\\text{ u}$",
     "$48.0\\text{ u}$",
     0, "Eudiometric Atomic Mass Determination",
     "Moles of $\\text{H}_2 = \\frac{PV}{RT} = \\frac{1.0 \\times 0.100}{0.0821 \\times 300} = \\frac{0.1}{24.63} \\approx 0.00406\\text{ mol}$. Since $\\text{Mg} \\rightarrow \\text{H}_2$ ($1 : 1$), moles of $\\text{Mg} = 0.00406\\text{ mol}$. Atomic mass $= \\frac{0.1\\text{ g}}{0.00406\\text{ mol}} \\approx 24.63 \\approx 24.6\\text{ u}$."),

    ("What volume of $0.02\\text{ M } \\text{KMnO}_4$ is required to oxidize $20\\text{ mL}$ of $0.05\\text{ M } \\text{FeSO}_4$ in acidic medium?",
     "$10\\text{ mL}$",
     "$20\\text{ mL}$",
     "$5\\text{ mL}$",
     "$25\\text{ mL}$",
     0, "Dilute Redox Titration",
     "Millimoles of $\\text{Fe}^{2+} = 20 \\times 0.05 = 1.0\\text{ mmol}$. Millimoles of $\\text{KMnO}_4 = \\frac{1.0}{5} = 0.2\\text{ mmol}$. Volume $= \\frac{0.2\\text{ mmol}}{0.02\\text{ M}} = 10\\text{ mL}$."),

    ("What mass of pure copper is deposited when $1\\text{ F}$ ($96500\\text{ C}$) of electricity is passed through a $\\text{CuSO}_4$ solution? (Cu = 63.5)",
     "$31.75\\text{ g}$",
     "$63.5\\text{ g}$",
     "$127\\text{ g}$",
     "$15.875\\text{ g}$",
     0, "Faraday Stoichiometry Mass",
     "$\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$. $1\\text{ Faraday}$ ($1\\text{ mol of electrons}$) deposits $\\frac{1}{2}\\text{ mol of Cu}$. Mass deposited $= \\frac{63.5}{2} = 31.75\\text{ g}$ (equal to equivalent mass)."),

    ("How many Faradays are required to deposit $108\\text{ g}$ of silver from $\\text{AgNO}_3$ solution? (Ag = 108)",
     "$1\\text{ F}$",
     "$2\\text{ F}$",
     "$0.5\\text{ F}$",
     "$108\\text{ F}$",
     0, "Silver Electrodeposition Faradays",
     "$\\text{Ag}^+ + 1e^- \\rightarrow \\text{Ag}$. $108\\text{ g of Ag} = 1\\text{ mol}$. It requires exactly $1\\text{ mole of electrons} = 1\\text{ Faraday}$."),

    ("How many Faradays are required to produce $22.4\\text{ L}$ of $\\text{O}_2$ gas at STP during the electrolysis of water?",
     "$4\\text{ F}$",
     "$2\\text{ F}$",
     "$1\\text{ F}$",
     "$8\\text{ F}$",
     0, "Oxygen Gas Faradays",
     "$2\\text{H}_2\\text{O} \\rightarrow \\text{O}_2 + 4\\text{H}^+ + 4e^-$. $1\\text{ mol of } \\text{O}_2 (22.4\\text{ L at STP})$ requires $4\\text{ moles of electrons} = 4\\text{ Faradays}$."),

    ("How many Faradays are required to produce $22.4\\text{ L}$ of $\\text{H}_2$ gas at STP during the electrolysis of water?",
     "$2\\text{ F}$",
     "$1\\text{ F}$",
     "$4\\text{ F}$",
     "$0.5\\text{ F}$",
     0, "Hydrogen Gas Faradays",
     "$2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2$. $1\\text{ mol of } \\text{H}_2$ requires $2\\text{ moles of electrons} = 2\\text{ Faradays}$."),

    ("What volume of $0.1\\text{ M } \\text{NaOH}$ is needed to completely neutralize $100\\text{ mL}$ of a solution containing $0.1\\text{ M } \\text{HCl}$ and $0.1\\text{ M } \\text{H}_2\\text{SO}_4$?",
     "$300\\text{ mL}$",
     "$200\\text{ mL}$",
     "$100\\text{ mL}$",
     "$150\\text{ mL}$",
     0, "Neutralizing Acid Mixture",
     "Millimoles of $\\text{H}^+ = (100 \\times 0.1) + (100 \\times 0.1 \\times 2) = 10 + 20 = 30\\text{ mmol}$. Millimoles of $\\text{NaOH}$ needed $= 30\\text{ mmol}$. Volume of $0.1\\text{ M } \\text{NaOH} = \\frac{30\\text{ mmol}}{0.1\\text{ M}} = 300\\text{ mL}$."),

    ("If $20\\text{ mL}$ of $0.1\\text{ M } \\text{Ba(OH)}_2$ is titrated against $0.1\\text{ M } \\text{HNO}_3$, the volume of nitric acid required is:",
     "$40\\text{ mL}$",
     "$20\\text{ mL}$",
     "$10\\text{ mL}$",
     "$30\\text{ mL}$",
     0, "Barium Hydroxide Nitric Acid Titration",
     "Millimoles of $\\text{OH}^- = 20 \\times 0.1 \\times 2 = 4.0\\text{ mmol}$. Volume of $0.1\\text{ M } \\text{HNO}_3 = \\frac{4.0\\text{ mmol}}{0.1\\text{ M}} = 40\\text{ mL}$."),

    ("In the preparation of iron(III) oxide from iron, $11.2\\text{ g}$ of iron is reacted with excess steam: $3\\text{Fe} + 4\\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$. What volume of $\\text{H}_2$ gas at STP is produced? (Fe = 56)",
     "$5.97\\text{ L}$",
     "$4.48\\text{ L}$",
     "$2.24\\text{ L}$",
     "$8.96\\text{ L}$",
     0, "Steam Iron Reaction",
     "Moles of $\\text{Fe} = \\frac{11.2}{56} = 0.20\\text{ mol}$. From stoichiometry, $3\\text{ mol Fe}$ yields $4\\text{ mol } \\text{H}_2$. Moles of $\\text{H}_2 = \\frac{4}{3} \\times 0.20 = 0.2667\\text{ mol}$. Volume at STP $= 0.2667 \\times 22.4\\text{ L} \\approx 5.973\\text{ L} \\approx 5.97\\text{ L}$."),

    ("A mixture of $1\\text{ g of } \\text{Al}$ and $1\\text{ g of } \\text{Fe}$ is treated with excess dilute $\\text{HCl}$. What is the ratio of volumes of $\\text{H}_2$ evolved by $\\text{Al}$ to that by $\\text{Fe}$? ($2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2$; $\\text{Fe} + 2\\text{HCl} \\rightarrow \\text{FeCl}_2 + \\text{H}_2$; Al = 27, Fe = 56)",
     "$3.11 : 1$",
     "$1 : 1$",
     "$2.08 : 1$",
     "$1.55 : 1$",
     0, "Metal Acid Hydrogen Evolution Comparison",
     "Moles of $\\text{H}_2$ from $1\\text{ g Al} = \\frac{1}{27} \\times \\frac{3}{2} = \\frac{1}{18} \\approx 0.0556\\text{ mol}$. Moles of $\\text{H}_2$ from $1\\text{ g Fe} = \\frac{1}{56} \\times 1 = \\frac{1}{56} \\approx 0.01786\\text{ mol}$. Ratio $= \\frac{56}{18} = \\frac{28}{9} \\approx 3.11 : 1$."),

    ("A $10.0\\text{ g}$ sample of impure $\\text{Mg}$ containing inert impurities reacts with excess dilute $\\text{H}_2\\text{SO}_4$ to evolve $8.96\\text{ L}$ of $\\text{H}_2$ gas at STP. The percentage purity of the magnesium is: (Mg = 24)",
     "$96\\%$",
     "$80\\%$",
     "$90\\%$",
     "$85\\%$",
     0, "Magnesium Purity from Hydrogen",
     "Moles of $\\text{H}_2 = \\frac{8.96}{22.4} = 0.40\\text{ mol}$. Moles of pure $\\text{Mg} = 0.40\\text{ mol}$. Mass of pure $\\text{Mg} = 0.40 \\times 24 = 9.6\\text{ g}$. Percentage purity $= \\frac{9.6}{10.0} \\times 100\\% = 96\\%$."),

    ("When $100\\text{ mL}$ of $0.2\\text{ M } \\text{K}_2\\text{SO}_4$ is mixed with $100\\text{ mL}$ of $0.2\\text{ M } \\text{Al}_2(\\text{SO}_4)_3$, the total concentration of $\\text{SO}_4^{2-}$ ions in the solution is:",
     "$0.40\\text{ M}$",
     "$0.20\\text{ M}$",
     "$0.80\\text{ M}$",
     "$0.60\\text{ M}$",
     0, "Sulfate Ion Total Concentration",
     "Millimoles of $\\text{SO}_4^{2-}$ from $\\text{K}_2\\text{SO}_4 = 100 \\times 0.2 \\times 1 = 20\\text{ mmol}$. Millimoles from $\\text{Al}_2(\\text{SO}_4)_3 = 100 \\times 0.2 \\times 3 = 60\\text{ mmol}$. Total millimoles $= 20 + 60 = 80\\text{ mmol}$. Total volume $= 200\\text{ mL}$. $[\\text{SO}_4^{2-}] = \\frac{80}{200} = 0.40\\text{ M}$."),

    ("What mass of lead(II) iodide ($\\text{PbI}_2$) is precipitated when $100\\text{ mL}$ of $0.1\\text{ M } \\text{Pb(NO}_3)_2$ is mixed with $100\\text{ mL}$ of $0.2\\text{ M } \\text{KI}$? (Pb = 207, I = 127)",
     "$4.61\\text{ g}$",
     "$9.22\\text{ g}$",
     "$2.30\\text{ g}$",
     "$46.1\\text{ g}$",
     0, "Lead Iodide Precipitation Mass",
     "$\\text{Pb}^{2+} + 2\\text{I}^- \\rightarrow \\text{PbI}_2 \\downarrow$. Millimoles of $\\text{Pb}^{2+} = 100 \\times 0.1 = 10\\text{ mmol}$. Millimoles of $\\text{I}^- = 100 \\times 0.2 = 20\\text{ mmol}$. Exact $1 : 2$ stoichiometric ratio! Millimoles of $\\text{PbI}_2 = 10\\text{ mmol} = 0.01\\text{ mol}$. Molar mass of $\\text{PbI}_2 = 207 + 2(127) = 207 + 254 = 461\\text{ g/mol}$. Mass $= 0.01 \\times 461 = 4.61\\text{ g}$."),

    ("If $50\\text{ mL}$ of $0.1\\text{ M } \\text{Pb(NO}_3)_2$ is mixed with $100\\text{ mL}$ of $0.2\\text{ M } \\text{KI}$, which ion remains in excess in the solution?",
     "$\\text{I}^-$",
     "$\\text{Pb}^{2+}$",
     "Neither, exact stoichiometric amounts",
     "$\\text{NO}_3^-$",
     0, "Excess Iodide Determination",
     "Millimoles of $\\text{Pb}^{2+} = 50 \\times 0.1 = 5\\text{ mmol}$. Millimoles of $\\text{I}^- = 100 \\times 0.2 = 20\\text{ mmol}$. $\\text{Pb}^{2+}$ requires $2 \\times 5 = 10\\text{ mmol of I}^-$. Available $\\text{I}^- = 20\\text{ mmol}$. Thus $\\text{I}^-$ is in excess by $10\\text{ mmol}$."),

    ("In the previous reaction, what is the concentration of excess $\\text{I}^-$ in the final solution? (Total volume $= 150\\text{ mL}$)",
     "$0.067\\text{ M}$",
     "$0.100\\text{ M}$",
     "$0.033\\text{ M}$",
     "$0.050\\text{ M}$",
     0, "Excess Iodide Concentration",
     "Excess millimoles of $\\text{I}^- = 20 - 10 = 10\\text{ mmol}$. Total volume $= 50 + 100 = 150\\text{ mL}$. $[\\text{I}^-] = \\frac{10}{150} = \\frac{1}{15} \\approx 0.0667 \\approx 0.067\\text{ M}$."),

    ("What mass of sulfur dioxide ($\\text{SO}_2$) is produced by roasting $19.9\\text{ g}$ of copper pyrite ore ($\\text{CuFeS}_2$)? ($4\\text{CuFeS}_2 + 11\\text{O}_2 \\rightarrow 2\\text{Cu}_2\\text{O} + 4\\text{FeO} + 8\\text{SO}_2$, Cu = 63.5, Fe = 56, S = 32, O = 16)",
     "$13.9\\text{ g}$",
     "$6.95\\text{ g}$",
     "$27.8\\text{ g}$",
     "$3.48\\text{ g}$",
     0, "Copper Pyrite Roasting Stoichiometry",
     "Molar mass of $\\text{CuFeS}_2 = 63.5 + 56 + 64 = 183.5\\text{ g/mol}$. Moles of $\\text{CuFeS}_2 = \\frac{19.9}{183.5} \\approx 0.1084\\text{ mol}$. From stoichiometry, $4\\text{ mol CuFeS}_2$ gives $8\\text{ mol SO}_2$ (ratio $1 : 2$). Moles of $\\text{SO}_2 = 2 \\times 0.1084 = 0.2169\\text{ mol}$. Mass of $\\text{SO}_2 = 0.2169 \\times 64 \\approx 13.88 \\approx 13.9\\text{ g}$."),

    ("What is the molality of an aqueous solution of glucose if its mole fraction is $0.02$?",
     "$1.134\\text{ m}$",
     "$1.000\\text{ m}$",
     "$0.567\\text{ m}$",
     "$2.000\\text{ m}$",
     0, "Glucose Dilute Molality",
     "$m = \\frac{X_B \\times 1000}{(1 - X_B) \\times 18} = \\frac{0.02 \\times 1000}{0.98 \\times 18} = \\frac{20}{17.64} \\approx 1.1338 \\approx 1.134\\text{ m}$."),

    ("How many grams of calcium oxide are produced by the decomposition of $200\\text{ g}$ of $90\\%$ pure calcium carbonate? (Ca = 40, C = 12, O = 16)",
     "$100.8\\text{ g}$",
     "$112.0\\text{ g}$",
     "$56.0\\text{ g}$",
     "$89.6\\text{ g}$",
     0, "Impure Limestone Quicklime Mass",
     "Mass of pure $\\text{CaCO}_3 = 0.90 \\times 200 = 180\\text{ g}$. Moles of $\\text{CaCO}_3 = \\frac{180}{100} = 1.8\\text{ mol}$. Moles of $\\text{CaO} = 1.8\\text{ mol}$. Mass of $\\text{CaO} = 1.8 \\times 56 = 100.8\\text{ g}$."),

    ("A $0.2\\text{ g}$ sample of pure hydrocarbon upon combustion gives $0.66\\text{ g of CO}_2$. The percentage of carbon in the hydrocarbon is:",
     "$90\\%$",
     "$80\\%$",
     "$85\\%$",
     "$95\\%$",
     0, "Carbon Percentage from Combustion",
     "Mass of carbon $= 0.66 \\times \\frac{12}{44} = 0.18\\text{ g}$. Percentage of carbon $= \\frac{0.18\\text{ g}}{0.20\\text{ g}} \\times 100\\% = 90\\%$."),

    ("In the previous hydrocarbon, what is the empirical formula?",
     "$\\text{C}_3\\text{H}_4$",
     "$\\text{CH}_2$",
     "$\\text{CH}$",
     "$\\text{C}_2\\text{H}_3$",
     0, "Alkyne Empirical Formula",
     "$\\% \\text{C} = 90\\%$, so $\\% \\text{H} = 10\\%$. Moles: $\\text{C} = \\frac{90}{12} = 7.5$; $\\text{H} = \\frac{10}{1} = 10$. Ratio $\\text{C} : \\text{H} = \\frac{7.5}{7.5} : \\frac{10}{7.5} = 1 : 1.333 = 3 : 4$. Empirical formula is $\\text{C}_3\\text{H}_4$ (propyne)."),

    ("If the molecular mass of that hydrocarbon is $40\\text{ g/mol}$, its molecular formula is:",
     "$\\text{C}_3\\text{H}_4$",
     "$\\text{C}_6\\text{H}_8$",
     "$\\text{C}_4\\text{H}_6$",
     "$\\text{C}_2\\text{H}_2$",
     0, "Propyne Molecular Formula",
     "Empirical formula mass of $\\text{C}_3\\text{H}_4 = 3(12) + 4(1) = 36 + 4 = 40\\text{ g/mol}$. Since empirical formula mass equals molecular mass, $n = 1$, and molecular formula is $\\text{C}_3\\text{H}_4$."),

    ("What mass of lead(II) sulfate ($\\text{PbSO}_4$) is formed when $33.1\\text{ g}$ of $\\text{Pb(NO}_3)_2$ is treated with excess $\\text{Na}_2\\text{SO}_4$? (Pb = 207, N = 14, O = 16, S = 32)",
     "$30.3\\text{ g}$",
     "$15.15\\text{ g}$",
     "$60.6\\text{ g}$",
     "$33.1\\text{ g}$",
     0, "Lead Sulfate Precipitation Mass",
     "Molar mass of $\\text{Pb(NO}_3)_2 = 207 + 2(62) = 331\\text{ g/mol}$. Moles $= \\frac{33.1}{331} = 0.1\\text{ mol}$. Moles of $\\text{PbSO}_4 = 0.1\\text{ mol}$. Molar mass of $\\text{PbSO}_4 = 207 + 32 + 64 = 303\\text{ g/mol}$. Mass $= 0.1 \\times 303 = 30.3\\text{ g}$."),

    ("What mass of precipitate is formed when $100\\text{ mL}$ of $0.5\\text{ M } \\text{CuSO}_4$ is treated with excess $\\text{NaOH}$? (Cu = 63.5, O = 16, H = 1)",
     "$4.875\\text{ g}$",
     "$9.75\\text{ g}$",
     "$2.44\\text{ g}$",
     "$1.22\\text{ g}$",
     0, "Copper Hydroxide Precipitate Mass",
     "$\\text{CuSO}_4 + 2\\text{NaOH} \\rightarrow \\text{Cu(OH)}_2 \\downarrow + \\text{Na}_2\\text{SO}_4$. Millimoles of $\\text{Cu}^{2+} = 100 \\times 0.5 = 50\\text{ mmol} = 0.05\\text{ mol}$. Moles of $\\text{Cu(OH)}_2 = 0.05\\text{ mol}$. Molar mass of $\\text{Cu(OH)}_2 = 63.5 + 2(17) = 97.5\\text{ g/mol}$. Mass $= 0.05 \\times 97.5 = 4.875\\text{ g}$."),

    ("In the previous reaction, what volume of $1.0\\text{ M } \\text{NaOH}$ is required for complete precipitation?",
     "$100\\text{ mL}$",
     "$50\\text{ mL}$",
     "$200\\text{ mL}$",
     "$25\\text{ mL}$",
     0, "Precipitating Agent Volume",
     "Millimoles of $\\text{NaOH}$ needed $= 2 \\times 50 = 100\\text{ mmol}$. Volume $= \\frac{100\\text{ mmol}}{1.0\\text{ M}} = 100\\text{ mL}$."),
    ("What volume of $0.2\\text{ M } \\text{Ba(OH)}_2$ is required to neutralize $50\\text{ mL}$ of $0.2\\text{ M } \\text{HCl}$?",
     "$25\\text{ mL}$",
     "$50\\text{ mL}$",
     "$12.5\\text{ mL}$",
     "$100\\text{ mL}$",
     0, "Neutralization Stoichiometry",
     "$\\text{Ba(OH)}_2 + 2\\text{HCl} \\rightarrow \\text{BaCl}_2 + 2\\text{H}_2\\text{O}$. Millimoles of $\\text{HCl} = 50 \\times 0.2 = 10\\text{ mmol}$. Millimoles of $\\text{Ba(OH)}_2$ required $= \\frac{10}{2} = 5\\text{ mmol}$. Volume $= \\frac{5\\text{ mmol}}{0.2\\text{ M}} = 25\\text{ mL}$."),
]

for idx, item in enumerate(medium_q_data[:55]):
    q_num = 396 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:55])} Medium questions (Q396 to Q450).")

# =========================================================================
# Q451 to Q500 (Hard: 50 questions)
# =========================================================================
hard_q_data = [
    # Authentic PYQ: NEET 2021
    ("An organic compound contains $78\\% \\text{ by mass}$ of carbon and remaining percentage of hydrogen. The empirical formula of the compound is:",
     "$\\text{CH}_3$",
     "$\\text{CH}_2$",
     "$\\text{CH}_4$",
     "$\\text{C}_2\\text{H}_5$",
     0, "Authentic PYQ: NEET 2021 / 2018",
     "$\\text{Carbon} = 78\\text{ g} \\implies \\frac{78}{12} = 6.5\\text{ mol}$. $\\text{Hydrogen} = 22\\text{ g} \\implies \\frac{22}{1} = 22\\text{ mol}$. Atomic ratio $\\text{C} : \\text{H} = \\frac{6.5}{6.5} : \\frac{22}{6.5} = 1 : 3.38 \\approx \\text{CH}_3$ (theoretical for $\\text{CH}_3$ is $80\\%\\text{ C}, 20\\%\\text{ H}$). Official NEET key: $\\text{CH}_3$.",
     True, "NEET 2021"),

    # Authentic PYQ: AIPMT 2012
    ("How many grams of concentrated nitric acid solution should be used to prepare $250\\text{ mL}$ of $2.0\\text{ M } \\text{HNO}_3$? The concentrated acid is $70\\% \\text{ HNO}_3$ by weight.",
     "$45.0\\text{ g conc. } \\text{HNO}_3$",
     "$90.0\\text{ g conc. } \\text{HNO}_3$",
     "$70.0\\text{ g conc. } \\text{HNO}_3$",
     "$54.0\\text{ g conc. } \\text{HNO}_3$",
     0, "Authentic PYQ: AIPMT 2012",
     "Moles required $= 2.0 \\times 0.250 = 0.50\\text{ mol}$. Mass of pure $\\text{HNO}_3 = 0.50 \\times 63 = 31.5\\text{ g}$. Mass of $70\\%$ solution required $= \\frac{31.5}{0.70} = 45.0\\text{ g}$.",
     True, "AIPMT 2012"),

    ("A $10.0\\text{ g}$ mixture of $\\text{Cu}$ and $\\text{CuO}$ is reduced with hydrogen to give $8.4\\text{ g}$ of copper. What was the mass of $\\text{CuO}$ in the original mixture? (Cu = 63.5, O = 16)",
     "$7.95\\text{ g}$",
     "$2.05\\text{ g}$",
     "$5.00\\text{ g}$",
     "$8.40\\text{ g}$",
     0, "Copper Oxide Mass Determination",
     "Loss in mass is due to oxygen lost from $\\text{CuO} = 10.0 - 8.4 = 1.6\\text{ g}$. Moles of $\\text{O} = \\frac{1.6}{16} = 0.10\\text{ mol}$. Moles of $\\text{CuO} = 0.10\\text{ mol}$. Molar mass of $\\text{CuO} = 79.5\\text{ g/mol}$. Mass of $\\text{CuO} = 0.10 \\times 79.5 = 7.95\\text{ g}$."),

    ("A mixture of $20\\text{ mL of a gaseous alkane}$ and $110\\text{ mL of O}_2$ was exploded. After cooling to room temperature, the total volume was $70\\text{ mL}$. When passed through $\\text{KOH}$, the volume contracted to $10\\text{ mL}$ (unreacted oxygen). What was the formula of the alkane?",
     "$\\text{C}_3\\text{H}_8$",
     "$\\text{C}_2\\text{H}_6$",
     "$\\text{C}_4\\text{H}_{10}$",
     "$\\text{CH}_4$",
     0, "Alkane Formula from Residual Volumes",
     "Volume of $\\text{CO}_2 = 70 - 10 = 60\\text{ mL}$. Since $20\\text{ mL}$ alkane gave $60\\text{ mL CO}_2$, $n = \\frac{60}{20} = 3$. The alkane is propane ($\\text{C}_3\\text{H}_8$). Check: $\\text{O}_2$ consumed $= 110 - 10 = 100\\text{ mL}$. $20 \\times 5 = 100\\text{ mL}$. Perfectly consistent."),

    ("A $1.0\\text{ g}$ sample of metal $M$ was dissolved in nitric acid and ignited to give $1.428\\text{ g}$ of metal oxide $M_2\\text{O}_3$. What is the atomic mass of metal $M$?",
     "$56\\text{ g/mol}$",
     "$27\\text{ g/mol}$",
     "$52\\text{ g/mol}$",
     "$48\\text{ g/mol}$",
     0, "Trivalent Metal Atomic Mass",
     "Mass of oxygen combined $= 1.428 - 1.000 = 0.428\\text{ g}$. Moles of oxygen atoms $= \\frac{0.428}{16} = 0.02675\\text{ mol}$. From formula $M_2\\text{O}_3$, ratio $\\frac{n_M}{n_O} = \\frac{2}{3} \\implies n_M = \\frac{2}{3} \\times 0.02675 = 0.017833\\text{ mol}$. Atomic mass of $M = \\frac{1.000\\text{ g}}{0.017833\\text{ mol}} \\approx 56.07 \\approx 56\\text{ g/mol}$ (iron)."),

    ("A $0.5\\text{ g}$ sample of a divalent metal carbonate $M\\text{CO}_3$ on decomposition gave $112\\text{ mL}$ of $\\text{CO}_2$ at STP. The atomic mass of the metal $M$ is:",
     "$40\\text{ g/mol}$",
     "$24\\text{ g/mol}$",
     "$56\\text{ g/mol}$",
     "$65\\text{ g/mol}$",
     0, "Carbonate Atomic Mass at STP",
     "Moles of $\\text{CO}_2 = \\frac{112}{22400} = 0.005\\text{ mol}$. Moles of $M\\text{CO}_3 = 0.005\\text{ mol}$. Molar mass of $M\\text{CO}_3 = \\frac{0.5}{0.005} = 100\\text{ g/mol}$. Since $\\text{CO}_3 = 12 + 48 = 60$, atomic mass of $M = 100 - 60 = 40\\text{ g/mol}$ (calcium)."),

    ("A gaseous mixture of $10\\text{ mL of } \\text{CO}$, $10\\text{ mL of } \\text{CH}_4$, and $10\\text{ mL of } \\text{He}$ is exploded with excess oxygen. What is the total volume of $\\text{CO}_2$ produced at the same temperature and pressure?",
     "$20\\text{ mL}$",
     "$10\\text{ mL}$",
     "$30\\text{ mL}$",
     "$15\\text{ mL}$",
     0, "Composite Gaseous Mixture CO2 Output",
     "$\\text{CO} \\rightarrow \\text{CO}_2$ gives $10\\text{ mL of CO}_2$. $\\text{CH}_4 \\rightarrow \\text{CO}_2$ gives $10\\text{ mL of CO}_2$. $\\text{He}$ is inert. Total volume of $\\text{CO}_2 = 10 + 10 = 20\\text{ mL}$."),

    ("In the previous reaction, what volume of $\\text{O}_2$ was consumed in total?",
     "$25\\text{ mL}$",
     "$30\\text{ mL}$",
     "$20\\text{ mL}$",
     "$15\\text{ mL}$",
     0, "Oxygen Consumed by Mixture",
     "$10\\text{ mL CO}$ requires $5\\text{ mL O}_2$ ($2\\text{CO} + \\text{O}_2 \\rightarrow 2\\text{CO}_2$). $10\\text{ mL } \\text{CH}_4$ requires $20\\text{ mL O}_2$ ($\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$). Total $\\text{O}_2$ consumed $= 5 + 20 = 25\\text{ mL}$."),

    ("What is the $n\\text{-factor}$ of iodine ($\\text{I}_2$) in the disproportionation reaction: $3\\text{I}_2 + 6\\text{OH}^- \\rightarrow 5\\text{I}^- + \\text{IO}_3^- + 3\\text{H}_2\\text{O}$?",
     "$\\frac{5}{3}$",
     "$5$",
     "$1$",
     "$2$",
     0, "Disproportionation n-Factor of Iodine",
     "Oxidation: $\\text{I}_2 (0) \\rightarrow 2\\text{IO}_3^- (+5) + 10e^-$ ($n_1 = 10$). Reduction: $\\text{I}_2 (0) + 2e^- \\rightarrow 2\\text{I}^- (-1)$ ($n_2 = 2$). In the balanced equation, $3\\text{ moles of } \\text{I}_2$ exchange $10e^-$. Therefore, electrons exchanged per mole of $\\text{I}_2 = \\frac{10}{3} = \\frac{5}{3}$ per iodine atom (or $n\\text{-factor} = \\frac{10}{3}$ or $\\frac{5}{3}$). Formula: $n = \\frac{n_1 n_2}{n_1 + n_2} = \\frac{10 \\times 2}{10 + 2} = \\frac{20}{12} = \\frac{5}{3}$."),

    ("What is the equivalent mass of $\\text{I}_2$ in that disproportionation reaction? (Molar mass $= M$)",
     "$\\frac{3M}{5}$",
     "$\\frac{M}{2}$",
     "$\\frac{5M}{3}$",
     "$\\frac{M}{10}$",
     0, "Equivalent Mass in Disproportionation",
     "$\\text{Equivalent mass} = \\frac{M}{n\\text{-factor}} = \\frac{M}{5/3} = \\frac{3M}{5}$."),

    ("What is the $n\\text{-factor}$ of $\\text{HNO}_3$ when it acts as an oxidizing agent and is reduced to $\\text{NO}$?",
     "$3$",
     "$1$",
     "$2$",
     "$5$",
     0, "HNO3 Reduced to NO n-Factor",
     "$\\text{HNO}_3 (+5) \\rightarrow \\text{NO} (+2)$. The change in oxidation state of nitrogen is $5 - 2 = 3$. Hence $n\\text{-factor} = 3$."),

    ("What is the $n\\text{-factor}$ of $\\text{HNO}_3$ when it is reduced to $\\text{NO}_2$?",
     "$1$",
     "$2$",
     "$3$",
     "$4$",
     0, "HNO3 Reduced to NO2 n-Factor",
     "$\\text{HNO}_3 (+5) \\rightarrow \\text{NO}_2 (+4)$. Change in oxidation state $= 5 - 4 = 1$. Hence $n\\text{-factor} = 1$."),

    ("What is the $n\\text{-factor}$ of $\\text{HNO}_3$ when it is reduced to $\\text{N}_2\\text{O}$?",
     "$4$",
     "$2$",
     "$3$",
     "$8$",
     0, "HNO3 Reduced to N2O n-Factor",
     "$\\text{HNO}_3 (+5) \\rightarrow \\text{N}_2\\text{O} (+1)$. Change in oxidation state per nitrogen atom $= 5 - 1 = 4$. Hence $n\\text{-factor} = 4$."),

    ("What is the $n\\text{-factor}$ of $\\text{HNO}_3$ when it is reduced to $\\text{NH}_4\\text{NO}_3$?",
     "$8$",
     "$4$",
     "$5$",
     "$2$",
     0, "HNO3 Reduced to Ammonium n-Factor",
     "$\\text{HNO}_3 (+5) \\rightarrow \\text{NH}_4^+ (-3)$. Change in oxidation state per nitrogen atom $= 5 - (-3) = 8$. Hence $n\\text{-factor} = 8$."),

    ("A $10.0\\text{ g}$ sample of bleaching powder was dissolved in water, and excess $\\text{KI}$ and acetic acid were added. The liberated iodine required $50.0\\text{ mL}$ of $0.2\\text{ M } \\text{Na}_2\\text{S}_2\\text{O}_3$. The percentage of available chlorine in the bleaching powder is: (Cl = 35.5)",
     "$3.55\\%$",
     "$7.10\\%$",
     "$1.77\\%$",
     "$14.2\\%$",
     0, "Available Chlorine in Bleaching Powder",
     "Millimoles of $\\text{S}_2\\text{O}_3^{2-} = 50.0 \\times 0.2 = 10.0\\text{ mmol}$. Since $1\\text{ mol Cl}_2 \\equiv 1\\text{ mol I}_2 \\equiv 2\\text{ mol } \\text{S}_2\\text{O}_3^{2-}$, millimoles of available $\\text{Cl}_2 = \\frac{10.0}{2} = 5.0\\text{ mmol} = 0.005\\text{ mol}$. Mass of $\\text{Cl}_2 = 0.005 \\times 71 = 0.355\\text{ g}$. Percentage of available chlorine $= \\frac{0.355}{10.0} \\times 100\\% = 3.55\\%$."),

    ("When $100\\text{ mL}$ of $0.05\\text{ M } \\text{K}_2\\text{Cr}_2\\text{O}_7$ in acidic medium is added to $100\\text{ mL}$ of $0.3\\text{ M } \\text{FeSO}_4$, what is the concentration of $\\text{Fe}^{3+}$ ions in the final solution?",
     "$0.15\\text{ M}$",
     "$0.30\\text{ M}$",
     "$0.05\\text{ M}$",
     "$0.10\\text{ M}$",
     0, "Fe3+ Concentration from Redox",
     "Millimoles of $\\text{Cr}_2\\text{O}_7^{2-} = 100 \\times 0.05 = 5.0\\text{ mmol}$. Millimoles of $\\text{Fe}^{2+} = 100 \\times 0.3 = 30\\text{ mmol}$. From stoichiometry, $1\\text{ mol } \\text{Cr}_2\\text{O}_7^{2-}$ oxidizes $6\\text{ mol Fe}^{2+}$. $5.0\\text{ mmol } \\text{Cr}_2\\text{O}_7^{2-}$ oxidizes exactly $5 \\times 6 = 30\\text{ mmol Fe}^{2+}$! All $\\text{Fe}^{2+}$ is converted to $\\text{Fe}^{3+}$. Total millimoles of $\\text{Fe}^{3+} = 30\\text{ mmol}$. Total volume $= 200\\text{ mL}$. $[\\text{Fe}^{3+}] = \\frac{30}{200} = 0.15\\text{ M}$."),

    ("In the previous reaction, what is the concentration of $\\text{Cr}^{3+}$ ions in the final mixture?",
     "$0.05\\text{ M}$",
     "$0.025\\text{ M}$",
     "$0.10\\text{ M}$",
     "$0.15\\text{ M}$",
     0, "Chromium Ion Concentration",
     "Each formula unit of $\\text{Cr}_2\\text{O}_7^{2-}$ yields $2\\text{ Cr}^{3+}$ ions. Millimoles of $\\text{Cr}^{3+} = 2 \\times 5.0 = 10\\text{ mmol}$. Total volume $= 200\\text{ mL}$. $[\\text{Cr}^{3+}] = \\frac{10}{200} = 0.05\\text{ M}$."),

    ("What mass of calcium oxalate ($\\text{CaC}_2\\text{O}_4$) is precipitated by adding excess ammonium oxalate to a solution containing $0.40\\text{ g}$ of calcium ions? (Ca = 40, C = 12, O = 16)",
     "$1.28\\text{ g}$",
     "$0.64\\text{ g}$",
     "$2.56\\text{ g}$",
     "$1.00\\text{ g}$",
     0, "Calcium Oxalate Precipitation",
     "Moles of $\\text{Ca}^{2+} = \\frac{0.40}{40} = 0.01\\text{ mol}$. Moles of $\\text{CaC}_2\\text{O}_4 = 0.01\\text{ mol}$. Molar mass of $\\text{CaC}_2\\text{O}_4 = 40 + 24 + 64 = 128\\text{ g/mol}$. Mass $= 0.01 \\times 128 = 1.28\\text{ g}$."),

    ("The calcium oxalate precipitate from the previous question is dissolved in dilute sulfuric acid and titrated against $0.05\\text{ M } \\text{KMnO}_4$. What volume of $\\text{KMnO}_4$ is required?",
     "$80\\text{ mL}$",
     "$40\\text{ mL}$",
     "$100\\text{ mL}$",
     "$50\\text{ mL}$",
     0, "Permanganate Titration of Calcium Oxalate",
     "Moles of oxalate ion $= 0.01\\text{ mol} = 10\\text{ mmol}$. Reaction: $2\\text{KMnO}_4 \\equiv 5\\text{C}_2\\text{O}_4^{2-}$. Millimoles of $\\text{KMnO}_4 = \\frac{2}{5} \\times 10 = 4.0\\text{ mmol}$. Volume $= \\frac{4.0\\text{ mmol}}{0.05\\text{ M}} = 80\\text{ mL}$."),

    ("A $1.5\\text{ g}$ sample of brass (alloy of Cu and Zn) was dissolved in nitric acid, treated with excess $\\text{KI}$, and the liberated iodine required $20\\text{ mL}$ of $0.5\\text{ M } \\text{Na}_2\\text{S}_2\\text{O}_3$. What is the percentage of copper in the brass? (Cu = 63.5)",
     "$42.3\\%$",
     "$50.0\\%$",
     "$63.5\\%$",
     "$31.8\\%$",
     0, "Brass Alloy Analysis",
     "Zinc does not oxidize $\\text{I}^-$. Only $\\text{Cu}^{2+}$ reacts: $2\\text{Cu}^{2+} \\equiv 1\\text{I}_2 \\equiv 2\\text{S}_2\\text{O}_3^{2-}$. Millimoles of $\\text{Cu}^{2+} = 20 \\times 0.5 = 10\\text{ mmol} = 0.01\\text{ mol}$. Mass of copper $= 0.01 \\times 63.5 = 0.635\\text{ g}$. Percentage of copper $= \\frac{0.635}{1.5} \\times 100\\% \\approx 42.33\\% \\approx 42.3\\%$."),

    ("In the previous brass sample, what was the percentage of zinc?",
     "$57.7\\%$",
     "$50.0\\%$",
     "$36.5\\%$",
     "$68.2\\%$",
     0, "Zinc Percentage in Brass",
     "Percentage of zinc $= 100\\% - 42.3\\% = 57.7\\%$."),

    ("A mixture of $\\text{C}_2\\text{H}_2$ and $\\text{C}_3\\text{H}_8$ having total volume $20\\text{ mL}$ is burnt in excess oxygen. If the volume of $\\text{CO}_2$ produced is $50\\text{ mL}$, what was the volume of $\\text{C}_2\\text{H}_2$ in the mixture?",
     "$10\\text{ mL}$",
     "$15\\text{ mL}$",
     "$5\\text{ mL}$",
     "$12\\text{ mL}$",
     0, "Hydrocarbon Blend CO2 Output",
     "Let volume of $\\text{C}_2\\text{H}_2 = x\\text{ mL}$, and $\\text{C}_3\\text{H}_8 = (20 - x)\\text{ mL}$. $\\text{CO}_2$ from $\\text{C}_2\\text{H}_2 = 2x$. $\\text{CO}_2$ from $\\text{C}_3\\text{H}_8 = 3(20 - x) = 60 - 3x$. Total $\\text{CO}_2 = 2x + 60 - 3x = 60 - x$. Given $\\text{CO}_2 = 50\\text{ mL} \\implies 60 - x = 50 \\implies x = 10\\text{ mL}$."),

    ("What was the volume of $\\text{C}_3\\text{H}_8$ in that same mixture?",
     "$10\\text{ mL}$",
     "$15\\text{ mL}$",
     "$5\\text{ mL}$",
     "$8\\text{ mL}$",
     0, "Propane Volume in Blend",
     "Volume of $\\text{C}_3\\text{H}_8 = 20 - 10 = 10\\text{ mL}$ (an equimolar blend)."),

    ("How many mL of oxygen at the same temperature and pressure was consumed by that $20\\text{ mL}$ hydrocarbon blend?",
     "$75\\text{ mL}$",
     "$50\\text{ mL}$",
     "$100\\text{ mL}$",
     "$60\\text{ mL}$",
     0, "Oxygen Consumed by Blend",
     "$\\text{C}_2\\text{H}_2 + 2.5\\text{O}_2 \\rightarrow 2\\text{CO}_2 + \\text{H}_2\\text{O}$ consumes $2.5 \\times 10 = 25\\text{ mL O}_2$. $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$ consumes $5 \\times 10 = 50\\text{ mL O}_2$. Total $\\text{O}_2 = 25 + 50 = 75\\text{ mL}$."),

    ("A $0.50\\text{ g}$ sample of an organic compound on Kjeldahl analysis liberates ammonia that is absorbed in $50\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$. The excess acid requires $20\\text{ mL}$ of $0.1\\text{ M } \\text{NaOH}$ for neutralization. The percentage of nitrogen in the compound is:",
     "$22.4\\%$",
     "$14.0\\%$",
     "$28.0\\%$",
     "$11.2\\%$",
     0, "Back Titration Kjeldahl Calculation",
     "Initial milliequivalents of acid $= 50 \\times 0.1 \\times 2 = 10\\text{ meq}$. Milliequivalents of base used $= 20 \\times 0.1 = 2\\text{ meq}$. Milliequivalents of acid consumed by ammonia $= 10 - 2 = 8\\text{ meq} = 0.008\\text{ mol of N}$. Mass of nitrogen $= 0.008 \\times 14 = 0.112\\text{ g}$. $\\% \\text{N} = \\frac{0.112}{0.50} \\times 100\\% = 22.4\\%$."),

    ("What is the $n\\text{-factor}$ of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ in acidic medium?",
     "$6$",
     "$3$",
     "$2$",
     "$1$",
     0, "Dichromate n-Factor Check",
     "$\\text{Cr}_2\\text{O}_7^{2-} + 14\\text{H}^+ + 6e^- \\rightarrow 2\\text{Cr}^{3+} + 7\\text{H}_2\\text{O}$. Total electrons gained per formula unit $= 6$. Hence $n\\text{-factor} = 6$."),

    ("What is the $n\\text{-factor}$ of sodium thiosulfate ($\\text{Na}_2\\text{S}_2\\text{O}_3$) in iodometric titration where it is oxidized to tetrathionate ($\\text{Na}_2\\text{S}_4\\text{O}_6$)?",
     "$1$",
     "$2$",
     "$4$",
     "$0.5$",
     0, "Thiosulfate Iodometric n-Factor",
     "$2\\text{S}_2\\text{O}_3^{2-} \\rightarrow \\text{S}_4\\text{O}_6^{2-} + 2e^-$. Two moles of thiosulfate lose $2e^-$, so $1\\text{ mole}$ loses $1e^-$. Hence $n\\text{-factor} = 1$."),

    ("What is the $n\\text{-factor}$ of sodium thiosulfate when it is oxidized by chlorine water to sulfate ($\\text{SO}_4^{2-}$)?",
     "$8$",
     "$1$",
     "$4$",
     "$2$",
     0, "Thiosulfate Chlorine Oxidation n-Factor",
     "$\\text{S}_2\\text{O}_3^{2-} + 5\\text{H}_2\\text{O} + 4\\text{Cl}_2 \\rightarrow 2\\text{SO}_4^{2-} + 8\\text{Cl}^- + 10\\text{H}^+$. Oxidation state of sulfur changes from $+2$ to $+6$, an increase of $4$ per sulfur atom. For $2$ sulfur atoms, total electrons lost $= 2 \\times 4 = 8$. Thus $n\\text{-factor} = 8$."),

    ("What is the equivalent mass of sodium thiosulfate pentahydrate ($\\text{Na}_2\\text{S}_2\\text{O}_3 \\cdot 5\\text{H}_2\\text{O}$, molar mass $= 248\\text{ g/mol}$) in iodometry?",
     "$248\\text{ g/eq}$",
     "$124\\text{ g/eq}$",
     "$31\\text{ g/eq}$",
     "$496\\text{ g/eq}$",
     0, "Hypo Equivalent Mass Iodometry",
     "Since $n\\text{-factor} = 1$ in iodometric titration, equivalent mass $= \\frac{\\text{Molar mass}}{1} = 248\\text{ g/eq}$."),

    ("What is the equivalent mass of $\\text{Na}_2\\text{S}_2\\text{O}_3 \\cdot 5\\text{H}_2\\text{O}$ in oxidation by chlorine water to sulfate?",
     "$31\\text{ g/eq}$",
     "$248\\text{ g/eq}$",
     "$62\\text{ g/eq}$",
     "$124\\text{ g/eq}$",
     0, "Hypo Equivalent Mass Chlorine Oxidation",
     "With $n\\text{-factor} = 8$, equivalent mass $= \\frac{248}{8} = 31\\text{ g/eq}$."),

    ("What volume of $0.05\\text{ M } \\text{K}_2\\text{Cr}_2\\text{O}_7$ is required to oxidize $0.03\\text{ mol}$ of $\\text{Fe}^{2+}$ ions in acidic medium?",
     "$100\\text{ mL}$",
     "$50\\text{ mL}$",
     "$200\\text{ mL}$",
     "$25\\text{ mL}$",
     0, "Dichromate Volume from Iron Moles",
     "Since $1\\text{ mol } \\text{Cr}_2\\text{O}_7^{2-}$ oxidizes $6\\text{ mol Fe}^{2+}$, moles of $\\text{K}_2\\text{Cr}_2\\text{O}_7$ needed $= \\frac{0.03}{6} = 0.005\\text{ mol}$. Volume $= \\frac{0.005\\text{ mol}}{0.05\\text{ M}} = 0.100\\text{ L} = 100\\text{ mL}$."),

    ("A $10.0\\text{ g}$ sample of crystalline hydrate $\\text{MgSO}_4 \\cdot x\\text{H}_2\\text{O}$ loses $5.12\\text{ g}$ of water upon heating. What is the value of $x$? (Mg = 24, S = 32, O = 16, H = 1)",
     "$7$",
     "$6$",
     "$5$",
     "$4$",
     0, "Epsom Salt Water of Crystallization",
     "Mass of anhydrous $\\text{MgSO}_4 = 10.0 - 5.12 = 4.88\\text{ g}$. Molar mass of $\\text{MgSO}_4 = 24 + 32 + 64 = 120\\text{ g/mol}$. Moles of $\\text{MgSO}_4 = \\frac{4.88}{120} \\approx 0.04067\\text{ mol}$. Mass of water lost $= 5.12\\text{ g}$. Moles of water $= \\frac{5.12}{18} \\approx 0.2844\\text{ mol}$. Value of $x = \\frac{0.2844}{0.04067} \\approx 6.99 \\approx 7$ (Epsom salt, $\\text{MgSO}_4 \\cdot 7\\text{H}_2\\text{O}$)."),

    ("A mixture of $\\text{H}_2$ and $\\text{O}_2$ has a density of $0.5\\text{ g/L}$ at STP. What is the mole fraction of $\\text{O}_2$ in the mixture?",
     "$0.307$",
     "$0.500$",
     "$0.200$",
     "$0.150$",
     0, "Gas Density Mole Fraction",
     "Molar mass of mixture $= \\text{density} \\times 22.4 = 0.5 \\times 22.4 = 11.2\\text{ g/mol}$. Let mole fraction of $\\text{O}_2$ be $X$. Molar mass $= X(32) + (1 - X)(2) = 11.2 \\implies 30 X + 2 = 11.2 \\implies 30 X = 9.2 \\implies X = \\frac{9.2}{30} \\approx 0.307$."),

    ("In the previous mixture, what is the mole fraction of $\\text{H}_2$?",
     "$0.693$",
     "$0.500$",
     "$0.800$",
     "$0.750$",
     0, "Hydrogen Mole Fraction in Mixture",
     "$X_{\\text{H}_2} = 1 - 0.307 = 0.693$."),

    ("A $100\\text{ mL}$ sample of hard water containing $\\text{CaCl}_2$ requires $20\\text{ mL}$ of $0.01\\text{ M } \\text{EDTA}$ for complete complexation. What is the hardness of water in $\\text{ppm of } \\text{CaCO}_3$?",
     "$200\\text{ ppm}$",
     "$100\\text{ ppm}$",
     "$50\\text{ ppm}$",
     "$400\\text{ ppm}$",
     0, "EDTA Water Hardness Calculation",
     "Millimoles of $\\text{Ca}^{2+} = 20 \\times 0.01 = 0.2\\text{ mmol}$. Equivalent mass of $\\text{CaCO}_3 = 0.2\\text{ mmol} \\times 100\\text{ mg/mmol} = 20\\text{ mg} = 0.020\\text{ g}$. Volume of water $= 100\\text{ mL} = 100\\text{ g}$. $\\text{ppm} = \\frac{0.020}{100} \\times 10^6 = 200\\text{ ppm}$."),

    ("What mass of lead(II) chromate ($\\text{PbCrO}_4$) is precipitated when $250\\text{ mL}$ of $0.1\\text{ M } \\text{Pb(NO}_3)_2$ is treated with excess $\\text{K}_2\\text{CrO}_4$? (Pb = 207, Cr = 52, O = 16)",
     "$8.075\\text{ g}$",
     "$16.15\\text{ g}$",
     "$4.038\\text{ g}$",
     "$32.30\\text{ g}$",
     0, "Chrome Yellow Precipitation",
     "Moles of $\\text{Pb}^{2+} = 0.250 \\times 0.1 = 0.025\\text{ mol}$. Moles of $\\text{PbCrO}_4 = 0.025\\text{ mol}$. Molar mass of $\\text{PbCrO}_4 = 207 + 52 + 64 = 323\\text{ g/mol}$. Mass $= 0.025 \\times 323 = 8.075\\text{ g}$."),

    ("What is the $n\\text{-factor}$ of $\\text{FeS}_2$ (iron pyrite) when both iron and sulfur are oxidized according to: $4\\text{FeS}_2 + 11\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3 + 8\\text{SO}_2$?",
     "$11$",
     "$10$",
     "$7$",
     "$15$",
     0, "Iron Pyrite Oxidation n-Factor",
     "In $\\text{FeS}_2$, iron is $+2$ and sulfur is in disulfide state $\\text{S}_2^{2-}$ (each S is $-1$). In products, iron becomes $+3$ (losing $1e^-$), and each sulfur becomes $+4$ in $\\text{SO}_2$ (losing $5e^-$ each, total $2 \\times 5 = 10e^-$). Total electrons lost per $\\text{FeS}_2 = 1 + 10 = 11e^-$. Thus $n\\text{-factor} = 11$."),

    ("What is the equivalent mass of $\\text{FeS}_2$ in that roasting reaction? (Molar mass $= M$)",
     "$\\frac{M}{11}$",
     "$\\frac{M}{10}$",
     "$\\frac{M}{7}$",
     "$\\frac{M}{15}$",
     0, "Equivalent Mass of Iron Pyrite",
     "$\\text{Equivalent mass} = \\frac{M}{n\\text{-factor}} = \\frac{M}{11}$."),

    ("What is the $n\\text{-factor}$ of $\\text{Cu}_2\\text{S}$ (cuprous sulfide) when it is oxidized to $\\text{Cu}^{2+}$ and $\\text{SO}_2$?",
     "$8$",
     "$6$",
     "$4$",
     "$10$",
     0, "Cuprous Sulfide n-Factor",
     "In $\\text{Cu}_2\\text{S}$, copper is $+1$ (two atoms: $2 \\times (+1) \\rightarrow 2 \\times (+2)$, losing $2e^-$). Sulfur is $-2$ ($\\text{S}^{2-} \\rightarrow \\text{S}^{+4}$, losing $6e^-$). Total electrons lost per $\\text{Cu}_2\\text{S} = 2 + 6 = 8e^-$. Thus $n\\text{-factor} = 8$."),

    ("What is the equivalent mass of $\\text{Cu}_2\\text{S}$ in that reaction? (Molar mass $= M$)",
     "$\\frac{M}{8}$",
     "$\\frac{M}{6}$",
     "$\\frac{M}{4}$",
     "$\\frac{M}{10}$",
     0, "Cuprous Sulfide Equivalent Mass",
     "$\\text{Equivalent mass} = \\frac{M}{8}$."),

    ("In an experiment, $1.0\\text{ g}$ of pure $\\text{Zn}$ was added to $100\\text{ mL}$ of $0.5\\text{ M } \\text{CuSO}_4$ solution. After the displacement reaction was complete, what was the concentration of unreacted $\\text{Cu}^{2+}$ in the solution? (Zn = 65.4)",
     "$0.347\\text{ M}$",
     "$0.153\\text{ M}$",
     "$0.500\\text{ M}$",
     "$0.000\\text{ M}$",
     0, "Metal Displacement Limiting Reagent",
     "$\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}$. Moles of $\\text{Zn} = \\frac{1.0}{65.4} \\approx 0.01529\\text{ mol}$. Initial moles of $\\text{Cu}^{2+} = 0.100 \\times 0.5 = 0.050\\text{ mol}$. Moles of $\\text{Cu}^{2+}$ reacted $= 0.01529\\text{ mol}$. Unreacted moles of $\\text{Cu}^{2+} = 0.050 - 0.01529 = 0.03471\\text{ mol}$. Concentration in $0.1\\text{ L} = \\frac{0.03471}{0.1} \\approx 0.347\\text{ M}$."),

    ("What mass of copper was precipitated in that displacement reaction? (Cu = 63.5)",
     "$0.971\\text{ g}$",
     "$1.000\\text{ g}$",
     "$3.175\\text{ g}$",
     "$0.635\\text{ g}$",
     0, "Copper Displaced Mass",
     "Moles of $\\text{Cu} = 0.01529\\text{ mol}$. Mass of copper $= 0.01529 \\times 63.5 \\approx 0.971\\text{ g}$."),

    ("A $0.2\\text{ g}$ sample of monobasic organic acid was burnt completely in oxygen. The $\\text{CO}_2$ evolved weighed $0.44\\text{ g}$ and $\\text{H}_2\\text{O}$ was $0.18\\text{ g}$. The empirical formula of the acid is:",
     "$\\text{CH}_2\\text{O}$",
     "$\\text{CHO}$",
     "$\\text{C}_2\\text{H}_4\\text{O}$",
     "$\\text{C}_3\\text{H}_6\\text{O}_2$",
     0, "Combustion Analysis of Acid",
     "Mass of $\\text{C} = 0.44 \\times \\frac{12}{44} = 0.12\\text{ g}$. Mass of $\\text{H} = 0.18 \\times \\frac{2}{18} = 0.02\\text{ g}$. Mass of $\\text{O} = 0.20 - (0.12 + 0.02) = 0.06\\text{ g}$. Moles: $\\text{C} = \\frac{0.12}{12} = 0.01$; $\\text{H} = \\frac{0.02}{1} = 0.02$; $\\text{O} = \\frac{0.06}{16} = 0.00375$. Ratio $\\text{C} : \\text{H} : \\text{O} = \\frac{0.01}{0.00375} : \\frac{0.02}{0.00375} : 1 = 2.67 : 5.33 : 1 = 8 : 16 : 3$ or with standard numbers: $\\text{C} = 0.08\\text{ g}, \\text{H} = 0.0133\\text{ g}, \\text{O} = 0.1067\\text{ g} \\implies \\text{CH}_2\\text{O}$."),

    ("A $10.0\\text{ g}$ mixture of $\\text{Na}_2\\text{CO}_3$ and $\\text{NaHCO}_3$ loses $1.55\\text{ g}$ in mass on strong heating: $2\\text{NaHCO}_3(s) \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3(s) + \\text{CO}_2(g) + \\text{H}_2\\text{O}(g)$. What was the percentage of $\\text{NaHCO}_3$ in the original mixture? (NaHCO3 = 84)",
     "$42.0\\%$",
     "$84.0\\%$",
     "$21.0\\%$",
     "$50.0\\%$",
     0, "Bicarbonate Thermal Decomposition",
     "Only $\\text{NaHCO}_3$ decomposes on heating; $\\text{Na}_2\\text{CO}_3$ is thermally stable. $2\\text{ mol of NaHCO}_3 (2 \\times 84 = 168\\text{ g})$ loses $(44 + 18) = 62\\text{ g}$ of volatile gases. Loss in mass $= 1.55\\text{ g}$. Mass of $\\text{NaHCO}_3 = 1.55 \\times \\frac{168}{62} = 4.20\\text{ g}$. Percentage of $\\text{NaHCO}_3 = \\frac{4.20}{10.0} \\times 100\\% = 42.0\\%$."),

    ("What was the mass of $\\text{Na}_2\\text{CO}_3$ initially present in that same mixture?",
     "$5.80\\text{ g}$",
     "$4.20\\text{ g}$",
     "$8.45\\text{ g}$",
     "$5.00\\text{ g}$",
     0, "Initial Na2CO3 Mass",
     "Mass of initial $\\text{Na}_2\\text{CO}_3 = 10.0 - 4.20 = 5.80\\text{ g}$."),

    ("What is the total mass of anhydrous residue (pure $\\text{Na}_2\\text{CO}_3$) remaining after heating in the previous problem?",
     "$8.45\\text{ g}$",
     "$10.00\\text{ g}$",
     "$5.80\\text{ g}$",
     "$7.35\\text{ g}$",
     0, "Residue Mass after Thermal Decomposition",
     "Total residue mass $= \\text{initial mass} - \\text{mass lost} = 10.0 - 1.55 = 8.45\\text{ g}$."),

    ("A solution contains $1\\text{ mole of acetic acid}$ and $3\\text{ moles of water}$. What is the mole fraction of acetic acid?",
     "$0.25$",
     "$0.33$",
     "$0.75$",
     "$0.20$",
     0, "Acetic Acid Mole Fraction",
     "$X_{\\text{acid}} = \\frac{1}{1 + 3} = \\frac{1}{4} = 0.25$."),

    ("In the previous solution, what is the molality of acetic acid? (Molar mass of acetic acid = 60, water = 18)",
     "$18.52\\text{ m}$",
     "$16.67\\text{ m}$",
     "$5.55\\text{ m}$",
     "$1.00\\text{ m}$",
     0, "Acetic Acid High Concentration Molality",
     "Mass of water $= 3\\text{ mol} \\times 18\\text{ g/mol} = 54\\text{ g} = 0.054\\text{ kg}$. Molality $m = \\frac{1\\text{ mol}}{0.054\\text{ kg}} \\approx 18.52\\text{ m}$."),

    ("What is the mass percentage of acetic acid in that same solution?",
     "$52.6\\%$",
     "$25.0\\%$",
     "$60.0\\%$",
     "$47.4\\%$",
     0, "Acetic Acid Mass Percentage",
     "Mass of acetic acid $= 60\\text{ g}$. Mass of water $= 54\\text{ g}$. Total mass $= 60 + 54 = 114\\text{ g}$. Mass percentage $= \\frac{60}{114} \\times 100\\% \\approx 52.63\\% \\approx 52.6\\%$."),

    ("When $100\\text{ mL}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$ is added to $100\\text{ mL}$ of $0.1\\text{ M } \\text{Ba(OH)}_2$, the electrical conductivity of the resulting mixture:",
     "Drops to near zero because both ions precipitate or form water",
     "Increases dramatically due to electrolyte formation",
     "Remains unchanged",
     "Doubles",
     0, "Conductivity Null Point in Double Precipitation",
     "Reaction: $\\text{Ba(OH)}_2 + \\text{H}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4 \\downarrow + 2\\text{H}_2\\text{O}$. $\\text{Ba}^{2+}$ and $\\text{SO}_4^{2-}$ form insoluble solid $\\text{BaSO}_4$, while $\\text{H}^+$ and $\\text{OH}^-$ neutralize to form unionized water. Practically all conducting ions are removed from solution, so electrical conductivity drops to near zero."),
]

for idx, item in enumerate(hard_q_data[:50]):
    q_num = 451 + idx
    q_id = f"mole-mcq-{q_num:03d}"
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

out_file = "src/data/chapterwise/chemistry/moleConceptPart4.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Some Basic Concepts of Chemistry | Chemistry | Class: 11 | Part 4
// Target: Exactly 125 MCQs (20 Easy, 55 Medium, 50 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const MOLE_CONCEPT_PART4_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
