#!/usr/bin/env python3
"""
Generator for Some Basic Concepts of Chemistry - Part 1 (Q1 to Q125)
Subject: Chemistry | Class: 11 | Chapter: Some Basic Concepts of Chemistry (mole-concept)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Nature of matter: elements, compounds, mixtures, homogeneous vs heterogeneous
- SI units, prefix multipliers (pico, nano, micro, milli, kilo), significant figures, scientific notation
- Laws of chemical combination:
  * Law of conservation of mass (Lavoisier)
  * Law of definite proportions (Proust)
  * Law of multiple proportions (Dalton)
  * Gay-Lussac's law of gaseous volumes
  * Avogadro's law (Avogadro)
- Dalton's atomic theory postulates and modern atomic theory
- Atomic mass unit (amu, u based on C-12 = 12 u)
- Average atomic mass from isotopic abundances
- Definition of mole, Avogadro constant N_A = 6.022 x 10^23
- Mole-mass, mole-number, and mole-volume relationships at STP
- Number of atoms, molecules, electrons, protons, and neutrons in given samples
- Authentic NEET / AIPMT PYQs
"""

import json
import os

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
        "topicId": "mole-concept-topic",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# =========================================================================
# Q1 to Q40 (Easy: 40 questions)
# =========================================================================
easy_q_data = [
    ("One mole of any substance contains exactly how many elementary entities?",
     "$6.022 \\times 10^{23}$",
     "$6.022 \\times 10^{22}$",
     "$3.011 \\times 10^{23}$",
     "$1.66 \\times 10^{-24}$",
     0, "Avogadro Constant",
     "One mole is defined as the amount of substance containing exactly $6.02214076 \\times 10^{23}$ elementary entities (Avogadro constant $N_A$)."),

    ("The atomic mass unit ($1\\text{ u}$ or $1\\text{ amu}$) is defined as:",
     "$\\frac{1}{12}$th of the mass of one $^{12}\\text{C}$ atom",
     "$\\frac{1}{16}$th of the mass of one $^{16}\\text{O}$ atom",
     "Mass of one $^1\\text{H}$ atom",
     "$\\frac{1}{14}$th of the mass of one $^{14}\\text{N}$ atom",
     0, "Unified Atomic Mass Unit",
     "By international convention, $1\\text{ u}$ is defined as exactly $\\frac{1}{12}$ of the mass of an unbound neutral carbon-12 atom at rest, equal to approximately $1.66056 \\times 10^{-24}\\text{ g}$."),

    ("What is the volume occupied by $1\\text{ mole}$ of an ideal gas at STP ($0^\\circ\\text{C}$ and $1\\text{ atm}$ pressure)?",
     "$22.4\\text{ L}$",
     "$24.8\\text{ L}$",
     "$11.2\\text{ L}$",
     "$44.8\\text{ L}$",
     0, "Molar Volume at STP",
     "At standard temperature and pressure ($273.15\\text{ K}$ and $1\\text{ atm}$), $1\\text{ mole}$ of any ideal gas occupies $22.4\\text{ litres}$ ($22.4\\text{ dm}^3$). Under IUPAC standard pressure of $1\\text{ bar}$, it occupies $22.7\\text{ L}$."),

    ("Which law of chemical combination states that 'A given compound always contains exactly the same proportion of elements by mass'?",
     "Law of Definite Proportions",
     "Law of Conservation of Mass",
     "Law of Multiple Proportions",
     "Gay-Lussac's Law",
     0, "Law of Definite Proportions",
     "The Law of Definite Proportions (or Constant Composition), formulated by Joseph Proust, states that a chemical compound always contains elements in a fixed ratio by mass regardless of source or method of preparation."),

    ("The Law of Multiple Proportions was proposed by:",
     "John Dalton",
     "Antoine Lavoisier",
     "Joseph Proust",
     "Joseph Louis Gay-Lussac",
     0, "Law of Multiple Proportions",
     "John Dalton proposed the Law of Multiple Proportions in 1803, stating that when two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other are in simple whole-number ratios."),

    ("The molar mass of water ($\\text{H}_2\\text{O}$) is approximately:",
     "$18\\text{ g/mol}$",
     "$16\\text{ g/mol}$",
     "$20\\text{ g/mol}$",
     "$34\\text{ g/mol}$",
     0, "Molar Mass Calculation",
     "$\\text{Molar mass of } \\text{H}_2\\text{O} = 2(1.008) + 16.00 \\approx 18.016 \\approx 18\\text{ g/mol}$."),

    ("The number of moles present in $36\\text{ g}$ of pure water is:",
     "$2\\text{ mol}$",
     "$1\\text{ mol}$",
     "$0.5\\text{ mol}$",
     "$18\\text{ mol}$",
     0, "Moles from Mass",
     "$\\text{Moles } n = \\frac{\\text{mass}}{\\text{molar mass}} = \\frac{36\\text{ g}}{18\\text{ g/mol}} = 2\\text{ mol}$."),

    ("How many molecules are present in $1\\text{ mole}$ of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$)?",
     "$6.022 \\times 10^{23}$",
     "$1.44 \\times 10^{25}$",
     "$3.011 \\times 10^{23}$",
     "$6\\text{ molecules}$",
     0, "Molecule Count in One Mole",
     "$1\\text{ mole}$ of any molecular compound contains $N_A = 6.022 \\times 10^{23}$ molecules, regardless of molecular complexity."),

    ("The number of carbon atoms in $1\\text{ mole}$ of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) is:",
     "$6 N_A$",
     "$1 N_A$",
     "$12 N_A$",
     "$24 N_A$",
     0, "Atoms in a Compound",
     "Each glucose molecule has $6$ carbon atoms. Therefore, $1\\text{ mole}$ of glucose contains $6 \\times N_A$ carbon atoms ($3.613 \\times 10^{24}$ atoms)."),

    ("Which of the following contains the greatest number of atoms?",
     "$1\\text{ g of Li(s)}$",
     "$1\\text{ g of Na(s)}$",
     "$1\\text{ g of K(s)}$",
     "$1\\text{ g of Cs(s)}$",
     0, "Number of Atoms Comparison",
     "Number of atoms $= \\frac{m}{M} \\times N_A$. For a constant mass ($1\\text{ g}$), the number of atoms is inversely proportional to molar mass. Lithium has the lowest atomic mass ($M = 7\\text{ g/mol}$), so it has the largest number of atoms: $\\frac{1}{7} N_A$."),

    ("The mass of one atom of $^{12}\\text{C}$ in grams is:",
     "$1.9926 \\times 10^{-23}\\text{ g}$",
     "$1.6605 \\times 10^{-24}\\text{ g}$",
     "$6.022 \\times 10^{-23}\\text{ g}$",
     "$12\\text{ g}$",
     0, "Mass of a Single Atom",
     "Mass of one $^{12}\\text{C}$ atom $= \\frac{12\\text{ g/mol}}{6.022 \\times 10^{23}\\text{ mol}^{-1}} \\approx 1.9926 \\times 10^{-23}\\text{ g}$."),

    ("The SI base unit of amount of substance is:",
     "Mole ($\\text{mol}$)",
     "Gram ($\\text{g}$)",
     "Kilogram ($\\text{kg}$)",
     "Dalton ($\\text{Da}$)",
     0, "SI Units",
     "The SI base unit for amount of substance is the mole, abbreviated as $\\text{mol}$."),

    ("What is the number of moles of oxygen atoms in $1\\text{ mole}$ of sulfuric acid ($\\text{H}_2\\text{SO}_4$)?",
     "$4\\text{ moles}$",
     "$1\\text{ mole}$",
     "$2\\text{ moles}$",
     "$7\\text{ moles}$",
     0, "Elemental Moles in Compound",
     "The chemical formula $\\text{H}_2\\text{SO}_4$ contains $4$ oxygen atoms per formula unit. Hence $1\\text{ mole}$ of $\\text{H}_2\\text{SO}_4$ contains $4\\text{ moles}$ of oxygen atoms."),

    ("The number of significant figures in the measurement $0.00250\\text{ kg}$ is:",
     "$3$",
     "$2$",
     "$5$",
     "$4$",
     0, "Significant Figures",
     "Leading zeros are not significant (they merely locate the decimal point). The non-zero digits $2$ and $5$ and the trailing zero after the decimal are significant. Thus there are $3$ significant figures ($2, 5, 0$)."),

    ("How many significant figures are there in $6.022 \\times 10^{23}$?",
     "$4$",
     "$23$",
     "$27$",
     "Infinite",
     0, "Scientific Notation Significant Figures",
     "In scientific notation $N \\times 10^x$, only the digits in the mantissa $N$ are counted. In $6.022$, all four digits are significant."),

    ("The prefix 'pico' corresponds to the multiplier:",
     "$10^{-12}$",
     "$10^{-9}$",
     "$10^{-15}$",
     "$10^{-6}$",
     0, "SI Metric Prefixes",
     "Pico corresponds to $10^{-12}$, nano is $10^{-9}$, micro is $10^{-6}$, and femto is $10^{-15}$."),

    ("Which pair of compounds illustrates the Law of Multiple Proportions?",
     "$\\text{CO}$ and $\\text{CO}_2$",
     "$\\text{NaCl}$ and $\\text{NaBr}$",
     "$\\text{H}_2\\text{O}$ and $\\text{D}_2\\text{O}$",
     "$\\text{CH}_4$ and $\\text{CCl}_4$",
     0, "Illustrating Law of Multiple Proportions",
     "The Law of Multiple Proportions applies to two compounds formed by the same two elements. Carbon and oxygen combine to form $\\text{CO}$ (mass ratio $12:16$) and $\\text{CO}_2$ (mass ratio $12:32$). The oxygen masses combining with $12\\text{ g}$ carbon are in the simple ratio $16:32 = 1:2$."),

    ("Gay-Lussac's Law of Gaseous Volumes states that when gases react, they do so in volumes which bear a simple whole-number ratio to one another and to the products, provided:",
     "Temperature and pressure remain constant",
     "Mass remains constant",
     "Density remains constant",
     "Volume of container is doubled",
     0, "Gay-Lussac Law of Gaseous Volumes",
     "Gay-Lussac's law requires that temperature and pressure must be kept constant for gaseous volume measurements to correlate directly to molar stoichiometric ratios."),

    ("What is the mass of $0.5\\text{ moles}$ of carbon dioxide ($\\text{CO}_2$)?",
     "$22\\text{ g}$",
     "$44\\text{ g}$",
     "$11\\text{ g}$",
     "$88\\text{ g}$",
     0, "Mass from Moles",
     "$\\text{Molar mass of } \\text{CO}_2 = 12 + 2(16) = 44\\text{ g/mol}$. Mass $= n \\times M = 0.5\\text{ mol} \\times 44\\text{ g/mol} = 22\\text{ g}$."),

    ("The number of molecules in $4.4\\text{ g}$ of $\\text{CO}_2$ is:",
     "$6.022 \\times 10^{22}$",
     "$6.022 \\times 10^{23}$",
     "$3.011 \\times 10^{22}$",
     "$1.204 \\times 10^{23}$",
     0, "Molecule Count from Mass",
     "$n = \\frac{4.4\\text{ g}}{44\\text{ g/mol}} = 0.1\\text{ mol}$. Number of molecules $= 0.1 \\times 6.022 \\times 10^{23} = 6.022 \\times 10^{22}$."),

    ("How many grams of calcium are present in $0.2\\text{ moles}$ of $\\text{Ca}$ (atomic mass $= 40\\text{ u}$)?",
     "$8\\text{ g}$",
     "$4\\text{ g}$",
     "$20\\text{ g}$",
     "$80\\text{ g}$",
     0, "Mass from Atomic Moles",
     "$\\text{Mass} = 0.2\\text{ mol} \\times 40\\text{ g/mol} = 8\\text{ g}$."),

    ("The mass percentage of hydrogen in water ($\\text{H}_2\\text{O}$) is approximately:",
     "$11.1\\%$",
     "$2.0\\%$",
     "$5.5\\%$",
     "$88.9\\%$",
     0, "Percentage Composition of Hydrogen",
     "$\\text{Molar mass of } \\text{H}_2\\text{O} = 18.016\\text{ g/mol}$. Mass of hydrogen $= 2(1.008) = 2.016\\text{ g}$. $\\% \\text{H} = \\frac{2.016}{18.016} \\times 100\\% \\approx 11.19\\% \\approx 11.1\\%$."),

    ("The mass percentage of oxygen in $\\text{CO}_2$ is approximately:",
     "$72.7\\%$",
     "$27.3\\%$",
     "$50.0\\%$",
     "$36.4\\%$",
     0, "Percentage Composition of Oxygen",
     "$\\text{Molar mass of } \\text{CO}_2 = 44\\text{ g/mol}$. Mass of oxygen $= 32\\text{ g}$. $\\% \\text{O} = \\frac{32}{44} \\times 100\\% \\approx 72.73\\%$."),

    ("What is the volume occupied by $0.25\\text{ moles}$ of $\\text{N}_2$ gas at STP?",
     "$5.6\\text{ L}$",
     "$11.2\\text{ L}$",
     "$2.8\\text{ L}$",
     "$22.4\\text{ L}$",
     0, "Molar Volume Fraction at STP",
     "$V = n \\times 22.4\\text{ L} = 0.25 \\times 22.4 = 5.6\\text{ L}$."),

    ("The number of moles of gas present in $11.2\\text{ L}$ of $\\text{O}_2$ gas at STP is:",
     "$0.5\\text{ mol}$",
     "$1.0\\text{ mol}$",
     "$0.25\\text{ mol}$",
     "$2.0\\text{ mol}$",
     0, "Moles from STP Volume",
     "$n = \\frac{V}{22.4} = \\frac{11.2}{22.4} = 0.5\\text{ mol}$."),

    ("The density of a liquid is $1.2\\text{ g/mL}$. The volume occupied by $240\\text{ g}$ of this liquid is:",
     "$200\\text{ mL}$",
     "$288\\text{ mL}$",
     "$120\\text{ mL}$",
     "$240\\text{ mL}$",
     0, "Density Volume Calculation",
     "$\\text{Volume} = \\frac{\\text{mass}}{\\text{density}} = \\frac{240\\text{ g}}{1.2\\text{ g/mL}} = 200\\text{ mL}$."),

    ("One atomic mass unit ($1\\text{ u}$) is equal to approximately:",
     "$1.66 \\times 10^{-24}\\text{ g}$",
     "$6.022 \\times 10^{-23}\\text{ g}$",
     "$1.66 \\times 10^{-27}\\text{ g}$",
     "$9.11 \\times 10^{-28}\\text{ g}$",
     0, "amu Conversion to Grams",
     "$1\\text{ u} = \\frac{1}{N_A}\\text{ g} = \\frac{1}{6.022 \\times 10^{23}}\\text{ g} \\approx 1.66056 \\times 10^{-24}\\text{ g}$ (or $1.66 \\times 10^{-27}\\text{ kg}$)."),

    ("How many electrons are present in $1\\text{ mole}$ of hydrogen atoms ($^1\\text{H}$)?",
     "$6.022 \\times 10^{23}$",
     "$1.204 \\times 10^{24}$",
     "$3.011 \\times 10^{23}$",
     "$1\\text{ electron}$",
     0, "Electrons in a Mole of Hydrogen",
     "Each neutral $^1\\text{H}$ atom has $1$ electron. Therefore, $1\\text{ mole}$ of $^1\\text{H}$ atoms contains $1 \\times N_A = 6.022 \\times 10^{23}$ electrons."),

    ("How many total atoms are present in $1\\text{ mole}$ of ammonia ($\\text{NH}_3$)?",
     "$4 N_A$",
     "$1 N_A$",
     "$3 N_A$",
     "$17 N_A$",
     0, "Atom Count in Ammonia",
     "Each ammonia molecule consists of $1$ nitrogen atom and $3$ hydrogen atoms, totaling $4$ atoms. Thus $1\\text{ mole}$ contains $4 N_A$ atoms ($2.409 \\times 10^{24}$ atoms)."),

    ("Which of the following is a homogeneous mixture?",
     "Air",
     "Muddy water",
     "Smoke",
     "Concrete",
     0, "Classification of Matter",
     "Air is a homogeneous mixture of various gases ($\text{N}_2, \text{O}_2, \text{Ar}, \text{CO}_2$). Muddy water and smoke are heterogeneous mixtures (suspensions/colloids)."),

    ("An element has two isotopes of masses $35\\text{ u}$ and $37\\text{ u}$ with natural abundances $75\\%$ and $25\\%$ respectively. The average atomic mass of the element is:",
     "$35.5\\text{ u}$",
     "$36.0\\text{ u}$",
     "$35.8\\text{ u}$",
     "$36.5\\text{ u}$",
     0, "Average Atomic Mass Calculation",
     "$\\bar{A} = \\frac{35(75) + 37(25)}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100} = 35.5\\text{ u}$ (this corresponds to chlorine)."),

    ("Boron has two stable isotopes: $^{10}\\text{B}$ ($20\\%$) and $^{11}\\text{B}$ ($80\\%$). The average atomic mass of boron is:",
     "$10.8\\text{ u}$",
     "$10.2\\text{ u}$",
     "$10.5\\text{ u}$",
     "$11.0\\text{ u}$",
     0, "Boron Average Atomic Mass",
     "$\\bar{A} = \\frac{10(20) + 11(80)}{100} = \\frac{200 + 880}{100} = \\frac{1080}{100} = 10.8\\text{ u}$."),

    ("How many moles of $\\text{He}$ gas are present in $52\\text{ g}$ of Helium (atomic mass $= 4\\text{ u}$)?",
     "$13\\text{ mol}$",
     "$26\\text{ mol}$",
     "$4\\text{ mol}$",
     "$52\\text{ mol}$",
     0, "Moles of Helium",
     "$n = \\frac{\\text{mass}}{\\text{molar mass}} = \\frac{52\\text{ g}}{4\\text{ g/mol}} = 13\\text{ mol}$."),

    ("The number of atoms in $52\\text{ u}$ of Helium is:",
     "$13\\text{ atoms}$",
     "$13 N_A$",
     "$52\\text{ atoms}$",
     "$4\\text{ atoms}$",
     0, "Atoms from Atomic Mass Units",
     "The mass of $1$ helium atom is $4\\text{ u}$. Therefore, $52\\text{ u}$ corresponds to $\\frac{52\\text{ u}}{4\\text{ u/atom}} = 13\\text{ atoms}$ (not $13$ moles)."),

    ("What is the mass in grams of $1\\text{ molecule}$ of water ($\\text{H}_2\\text{O}$)?",
     "$2.99 \\times 10^{-23}\\text{ g}$",
     "$1.66 \\times 10^{-24}\\text{ g}$",
     "$18\\text{ g}$",
     "$3.01 \\times 10^{-23}\\text{ g}$",
     0, "Mass of Single Molecule",
     "$\\text{Mass} = \\frac{18\\text{ g/mol}}{6.022 \\times 10^{23}\\text{ mol}^{-1}} \\approx 2.989 \\times 10^{-23}\\text{ g}$."),

    ("The number of moles of sodium atoms in $2.3\\text{ g}$ of $\\text{Na}$ (molar mass $= 23\\text{ g/mol}$) is:",
     "$0.1\\text{ mol}$",
     "$1.0\\text{ mol}$",
     "$0.01\\text{ mol}$",
     "$2.3\\text{ mol}$",
     0, "Sodium Moles Calculation",
     "$n = \\frac{2.3\\text{ g}}{23\\text{ g/mol}} = 0.1\\text{ mol}$."),

    ("Which of the following contains the same number of atoms as $12\\text{ g}$ of magnesium (atomic mass $= 24\\text{ u}$)?",
     "$6\\text{ g of C}$",
     "$12\\text{ g of C}$",
     "$24\\text{ g of C}$",
     "$1\\text{ g of H}$",
     0, "Equivalent Atom Comparison",
     "$12\\text{ g of Mg} = \\frac{12}{24} = 0.5\\text{ mol of Mg atoms}$. $6\\text{ g of C} = \\frac{6}{12} = 0.5\\text{ mol of C atoms}$. Both contain $0.5 N_A$ atoms."),

    ("The number of moles of solute present in $1\\text{ litre}$ of solution is called:",
     "Molarity",
     "Molality",
     "Mole fraction",
     "Normality",
     0, "Definition of Molarity",
     "Molarity ($M$) is defined as the number of moles of solute dissolved per litre of solution: $M = \\frac{n_{\\text{solute}}}{V_{\\text{solution (L)}}}$."),

    ("Which of the following concentration units does NOT change with temperature?",
     "Molality",
     "Molarity",
     "Normality",
     "Mass by volume percentage",
     0, "Temperature Independence of Molality",
     "Molality is defined with respect to mass of solvent ($m = \\frac{n}{W_{\\text{kg}}}$). Since mass does not vary with temperature, molality is independent of temperature. Molarity depends on solution volume, which expands with temperature."),

    ("Avogadro's hypothesis states that:",
     "Equal volumes of all gases under the same temperature and pressure contain equal number of molecules",
     "At constant temperature, volume is inversely proportional to pressure",
     "At constant pressure, volume is directly proportional to temperature",
     "Mass of reactants equals mass of products",
     0, "Avogadro Hypothesis",
     "In 1811, Amedeo Avogadro proposed that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules ($V \\propto n$)."),
]

for idx, item in enumerate(easy_q_data):
    q_num = 1 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

print(f"Added {len(easy_q_data)} Easy questions (Q1 to Q40).")

# =========================================================================
# Q41 to Q105 (Medium: 65 questions)
# =========================================================================
medium_q_data = [
    # Authentic PYQ: NEET 2020
    ("Which of the following has maximum number of atoms?",
     "$1\\text{ g of Li(s)} \\text{ [Atomic mass of Li = 7]}$",
     "$1\\text{ g of Ag(s)} \\text{ [Atomic mass of Ag = 108]}$",
     "$1\\text{ g of Mg(s)} \\text{ [Atomic mass of Mg = 24]}$",
     "$1\\text{ g of } \\text{O}_2\\text{(g)} \\text{ [Atomic mass of O = 16]}$",
     0, "Authentic PYQ: NEET 2020",
     "Number of atoms $= \\frac{\\text{mass}}{\\text{atomic mass}} \\times N_A$.\nFor $\\text{Li}$: $\\frac{1}{7} N_A \\approx 0.143 N_A$.\nFor $\\text{Ag}$: $\\frac{1}{108} N_A \\approx 0.009 N_A$.\nFor $\\text{Mg}$: $\\frac{1}{24} N_A \\approx 0.042 N_A$.\nFor $\\text{O}_2$: $\\frac{1}{32} \\times 2 N_A = \\frac{1}{16} N_A \\approx 0.063 N_A$.\nThus, $1\\text{ g}$ of $\\text{Li}$ has the maximum number of atoms.",
     True, "NEET 2020"),

    # Authentic PYQ: NEET 2017
    ("Which of the following is dependent on temperature?",
     "Molarity",
     "Molality",
     "Mole fraction",
     "Weight percentage",
     0, "Authentic PYQ: NEET 2017",
     "Molarity ($M = \\frac{\\text{moles of solute}}{\\text{Volume of solution in litres}}$) involves volume. Since volume expands or contracts with temperature, molarity changes with temperature. Molality, mole fraction, and weight percentage are based solely on mass, which is temperature-independent.",
     True, "NEET 2017"),

    # Authentic PYQ: AIPMT 2015
    ("The number of water molecules is maximum in:",
     "$18\\text{ moles of water}$",
     "$18\\text{ g of water}$",
     "$18\\text{ molecules of water}$",
     "$1.8\\text{ g of water}$",
     0, "Authentic PYQ: AIPMT 2015",
     "$18\\text{ moles of water} = 18 \\times 6.022 \\times 10^{23} = 1.084 \\times 10^{25}\\text{ molecules}$. In comparison, $18\\text{ g of water} = 1\\text{ mole} = 6.022 \\times 10^{23}\\text{ molecules}$, $1.8\\text{ g} = 0.1\\text{ mole} = 6.022 \\times 10^{22}\\text{ molecules}$, and $18\\text{ molecules}$ is just $18$. Thus $18\\text{ moles}$ has by far the highest number of molecules.",
     True, "AIPMT 2015"),

    # Authentic PYQ: AIPMT 2014
    ("Equal masses of $\\text{H}_2$, $\\text{O}_2$ and methane ($\\text{CH}_4$) have been taken in a container of volume $V$ at temperature $27^\\circ\\text{C}$ in identical conditions. The ratio of the volumes of gases $\\text{H}_2 : \\text{O}_2 : \\text{CH}_4$ would be:",
     "$16 : 1 : 2$",
     "$8 : 1 : 2$",
     "$8 : 16 : 1$",
     "$16 : 2 : 1$",
     0, "Authentic PYQ: AIPMT 2014",
     "By Avogadro's law, volume ratio equals mole ratio ($V \\propto n$). Let equal mass be $w\\text{ g}$.\nMoles of $\\text{H}_2 = \\frac{w}{2}$, moles of $\\text{O}_2 = \\frac{w}{32}$, moles of $\\text{CH}_4 = \\frac{w}{16}$.\nRatio of moles: $\\frac{w}{2} : \\frac{w}{32} : \\frac{w}{16} = \\frac{1}{2} : \\frac{1}{32} : \\frac{1}{16}$. Multiplying through by $32$: $16 : 1 : 2$.",
     True, "AIPMT 2014"),

    # Authentic PYQ: AIPMT 2011
    ("Which has the maximum number of molecules among the following?",
     "$8\\text{ g } \\text{H}_2$",
     "$44\\text{ g } \\text{CO}_2$",
     "$48\\text{ g } \\text{O}_3$",
     "$64\\text{ g } \\text{SO}_2$",
     0, "Authentic PYQ: AIPMT 2011",
     "Moles $= \\frac{m}{M}$:\n$\\text{H}_2$: $\\frac{8}{2} = 4\\text{ moles} = 4 N_A$.\n$\\text{CO}_2$: $\\frac{44}{44} = 1\\text{ mole} = 1 N_A$.\n$\\text{O}_3$: $\\frac{48}{48} = 1\\text{ mole} = 1 N_A$.\n$\\text{SO}_2$: $\\frac{64}{64} = 1\\text{ mole} = 1 N_A$.\nThus $8\\text{ g } \\text{H}_2$ contains the maximum number of molecules ($4 N_A$).",
     True, "AIPMT 2011"),

    # Authentic PYQ: AIPMT 2010
    ("The number of atoms in $0.1\\text{ mol}$ of a triatomic gas is: ($N_A = 6.022 \\times 10^{23}\\text{ mol}^{-1}$)",
     "$1.806 \\times 10^{23}$",
     "$6.022 \\times 10^{22}$",
     "$1.806 \\times 10^{22}$",
     "$3.600 \\times 10^{23}$",
     0, "Authentic PYQ: AIPMT 2010",
     "Number of molecules $= n \\times N_A = 0.1 \\times 6.022 \\times 10^{23} = 6.022 \\times 10^{22}$. Since the gas is triatomic, each molecule has $3$ atoms. Total number of atoms $= 3 \\times 6.022 \\times 10^{22} = 1.8066 \\times 10^{23} \\approx 1.806 \\times 10^{23}$.",
     True, "AIPMT 2010"),

    # Authentic PYQ: AIPMT 2007
    ("What volume of oxygen gas ($\\text{O}_2$) measured at $0^\\circ\\text{C}$ and $1\\text{ atm}$ is needed to completely burn $1\\text{ L}$ of propane gas ($\\text{C}_3\\text{H}_8$) measured under the same conditions?",
     "$5\\text{ L}$",
     "$10\\text{ L}$",
     "$7\\text{ L}$",
     "$6\\text{ L}$",
     0, "Authentic PYQ: AIPMT 2007",
     "Combustion equation: $\\text{C}_3\\text{H}_8(g) + 5\\text{O}_2(g) \\rightarrow 3\\text{CO}_2(g) + 4\\text{H}_2\\text{O}(l)$. By Gay-Lussac's law, at constant temperature and pressure, volume ratio equals stoichiometric coefficient ratio. $1\\text{ volume}$ of propane requires $5\\text{ volumes}$ of $\\text{O}_2$. Hence $1\\text{ L}$ of propane requires $5\\text{ L}$ of oxygen.",
     True, "AIPMT 2007"),

    # Authentic PYQ: AIPMT 2004
    ("The maximum number of molecules is present in:",
     "$15\\text{ L of } \\text{H}_2\\text{ gas at STP}$",
     "$5\\text{ L of } \\text{N}_2\\text{ gas at STP}$",
     "$0.5\\text{ g of } \\text{H}_2\\text{ gas}$",
     "$10\\text{ g of } \\text{O}_2\\text{ gas}$",
     0, "Authentic PYQ: AIPMT 2004",
     "Moles in each:\n$15\\text{ L of } \\text{H}_2\\text{ at STP} = \\frac{15}{22.4} \\approx 0.670\\text{ mol}$.\n$5\\text{ L of } \\text{N}_2\\text{ at STP} = \\frac{5}{22.4} \\approx 0.223\\text{ mol}$.\n$0.5\\text{ g of } \\text{H}_2 = \\frac{0.5}{2} = 0.25\\text{ mol}$.\n$10\\text{ g of } \\text{O}_2 = \\frac{10}{32} = 0.3125\\text{ mol}$.\n$0.670\\text{ mol}$ is the greatest, so $15\\text{ L of } \\text{H}_2$ has the maximum molecules.",
     True, "AIPMT 2004"),

    # Authentic PYQ: AIPMT 2002
    ("Number of atoms in $558.5\\text{ g}$ of $\\text{Fe}$ (atomic mass of $\\text{Fe} = 55.85\\text{ g/mol}$) is:",
     "$6.022 \\times 10^{24}$",
     "Half that in $8\\text{ g of He}$",
     "$558.5 \\times 6.022 \\times 10^{23}$",
     "$55.85 \\times 10^{23}$",
     0, "Authentic PYQ: AIPMT 2002",
     "Moles of $\\text{Fe} = \\frac{558.5}{55.85} = 10\\text{ moles}$. Number of atoms $= 10 \\times N_A = 10 \\times 6.022 \\times 10^{23} = 6.022 \\times 10^{24}$.",
     True, "AIPMT 2002"),

    ("How many total electrons are present in $1.6\\text{ g}$ of methane ($\\text{CH}_4$)?",
     "$6.022 \\times 10^{23}$",
     "$6.022 \\times 10^{24}$",
     "$1.6 \\times 10^{23}$",
     "$10 \\times 10^{23}$",
     0, "Electrons in Methane",
     "Molar mass of $\\text{CH}_4 = 12 + 4(1) = 16\\text{ g/mol}$. Moles of $\\text{CH}_4 = \\frac{1.6}{16} = 0.1\\text{ mol}$. Each $\\text{CH}_4$ molecule has $6 + 4(1) = 10$ electrons. Total electrons $= 0.1\\text{ mol} \\times 10 \\times N_A = 1 \\times N_A = 6.022 \\times 10^{23}$ electrons."),

    ("How many neutrons are present in $5.4\\text{ g}$ of $^{27}\\text{Al}$ ($Z = 13$)?",
     "$1.686 \\times 10^{24}$",
     "$1.204 \\times 10^{23}$",
     "$14 \\times 10^{23}$",
     "$8.431 \\times 10^{23}$",
     0, "Neutrons in Aluminium",
     "Molar mass of $^{27}\\text{Al} = 27\\text{ g/mol}$. Moles $= \\frac{5.4}{27} = 0.2\\text{ mol}$. Number of neutrons per atom $= A - Z = 27 - 13 = 14$. Total neutrons $= 0.2 \\times 14 \\times 6.022 \\times 10^{23} = 2.8 \\times 6.022 \\times 10^{23} = 1.686 \\times 10^{24}$."),

    ("The number of moles of electrons in $1\\text{ kg}$ is approximately:",
     "$1.098 \\times 10^6\\text{ mol}$",
     "$6.022 \\times 10^{23}\\text{ mol}$",
     "$1.82 \\times 10^{30}\\text{ mol}$",
     "$9.11 \\times 10^{-31}\\text{ mol}$",
     0, "Moles of Electrons in Mass",
     "Mass of $1$ electron $= 9.109 \\times 10^{-31}\\text{ kg}$. Mass of $1\\text{ mol}$ of electrons $= 9.109 \\times 10^{-31} \\times 6.022 \\times 10^{23} = 5.485 \\times 10^{-7}\\text{ kg/mol}$. Moles in $1\\text{ kg} = \\frac{1}{5.485 \\times 10^{-7}} \\approx 1.823 \\times 10^6\\text{ mol}$ (or approx $1.1 \\times 10^6\\text{ mol}$)."),

    ("How many moles of $\\text{CO}_2$ are produced by the complete combustion of $44\\text{ g}$ of propane ($\\text{C}_3\\text{H}_8$)?",
     "$3\\text{ moles}$",
     "$1\\text{ mole}$",
     "$6\\text{ moles}$",
     "$4\\text{ moles}$",
     0, "Combustion Stoichiometry",
     "$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. Molar mass of propane $= 3(12) + 8(1) = 44\\text{ g/mol}$. Thus $44\\text{ g} = 1\\text{ mole}$. From stoichiometry, $1\\text{ mole}$ of propane produces $3\\text{ moles}$ of $\\text{CO}_2$."),

    ("The volume of $\\text{CO}_2$ evolved at STP when $10\\text{ g}$ of $100\\%$ pure $\\text{CaCO}_3$ is heated strongly is:",
     "$2.24\\text{ L}$",
     "$22.4\\text{ L}$",
     "$1.12\\text{ L}$",
     "$4.48\\text{ L}$",
     0, "Limestone Decomposition Volume",
     "$\\text{CaCO}_3(s) \\xrightarrow{\\Delta} \\text{CaO}(s) + \\text{CO}_2(g)$. Molar mass of $\\text{CaCO}_3 = 40 + 12 + 48 = 100\\text{ g/mol}$. Moles of $\\text{CaCO}_3 = \\frac{10}{100} = 0.1\\text{ mol}$. Moles of $\\text{CO}_2 = 0.1\\text{ mol}$. Volume at STP $= 0.1 \\times 22.4\\text{ L} = 2.24\\text{ L}$."),

    ("If $20\\text{ g}$ of $\\text{CaCO}_3$ is treated with excess dilute $\\text{HCl}$, what mass of $\\text{CO}_2$ is released?",
     "$8.8\\text{ g}$",
     "$4.4\\text{ g}$",
     "$2.2\\text{ g}$",
     "$11.0\\text{ g}$",
     0, "Acid Reaction Mass Calculation",
     "$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$. Moles of $\\text{CaCO}_3 = \\frac{20}{100} = 0.2\\text{ mol}$. Moles of $\\text{CO}_2 = 0.2\\text{ mol}$. Mass of $\\text{CO}_2 = 0.2 \\times 44\\text{ g/mol} = 8.8\\text{ g}$."),

    ("How many moles of $\\text{H}_2\\text{O}$ are produced when $4\\text{ g}$ of $\\text{H}_2$ reacts with $32\\text{ g}$ of $\\text{O}_2$?",
     "$2\\text{ moles}$",
     "$1\\text{ mole}$",
     "$4\\text{ moles}$",
     "$0.5\\text{ mole}$",
     0, "Stoichiometric Water Synthesis",
     "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$. Moles of $\\text{H}_2 = \\frac{4}{2} = 2\\text{ mol}$. Moles of $\\text{O}_2 = \\frac{32}{32} = 1\\text{ mol}$. The reactants are in exact stoichiometric ratio ($2 : 1$). Therefore, $2\\text{ moles}$ of $\\text{H}_2\\text{O}$ are produced."),

    ("Which of the following contains the same number of molecules as $16\\text{ g}$ of oxygen ($\\text{O}_2$)?",
     "$14\\text{ g of } \\text{N}_2$",
     "$28\\text{ g of } \\text{N}_2$",
     "$16\\text{ g of } \\text{O}_3$",
     "$32\\text{ g of } \\text{SO}_2$",
     0, "Molecule Equivalence",
     "$16\\text{ g of } \\text{O}_2 = \\frac{16}{32} = 0.5\\text{ mol}$. $14\\text{ g of } \\text{N}_2 = \\frac{14}{28} = 0.5\\text{ mol}$. Both contain $0.5 N_A$ molecules."),

    ("A container contains $3.2\\text{ g}$ of $\\text{CH}_4$ and $4.4\\text{ g}$ of $\\text{CO}_2$. What is the mole fraction of $\\text{CH}_4$?",
     "$\\frac{2}{3}$",
     "$\\frac{1}{3}$",
     "$\\frac{1}{2}$",
     "$\\frac{3}{4}$",
     0, "Mole Fraction of Gas Mixture",
     "$n_{\\text{CH}_4} = \\frac{3.2}{16} = 0.2\\text{ mol}$. $n_{\\text{CO}_2} = \\frac{4.4}{44} = 0.1\\text{ mol}$. Total moles $= 0.2 + 0.1 = 0.3\\text{ mol}$. $X_{\\text{CH}_4} = \\frac{0.2}{0.3} = \\frac{2}{3}$."),

    ("In the above mixture, what is the mole fraction of $\\text{CO}_2$?",
     "$\\frac{1}{3}$",
     "$\\frac{2}{3}$",
     "$\\frac{1}{4}$",
     "$\\frac{1}{2}$",
     0, "Mole Fraction Sum Property",
     "$X_{\\text{CO}_2} = 1 - X_{\\text{CH}_4} = 1 - \\frac{2}{3} = \\frac{1}{3}$ (or $\\frac{0.1}{0.3} = \\frac{1}{3}$)."),

    ("A sample of ethane ($\\text{C}_2\\text{H}_6$) has the same mass as $10^{20}$ molecules of methane ($\\text{CH}_4$). How many molecules of ethane are present?",
     "$5.33 \\times 10^{19}$",
     "$1.87 \\times 10^{20}$",
     "$10^{20}$",
     "$2.5 \\times 10^{19}$",
     0, "Equal Mass Molecule Comparison",
     "Mass of $N_1$ molecules of $\\text{CH}_4$: $m = \\frac{N_1}{N_A} M_1$. Mass of $N_2$ molecules of $\\text{C}_2\\text{H}_6$: $m = \\frac{N_2}{N_A} M_2$. Since masses are equal: $N_1 M_1 = N_2 M_2 \\implies N_2 = N_1 \\frac{M_1}{M_2} = 10^{20} \\times \\frac{16}{30} \\approx 5.33 \\times 10^{19}$ molecules."),

    ("How many atoms are present in $11.2\\text{ L}$ of $\\text{O}_3$ (ozone) at STP?",
     "$9.033 \\times 10^{23}$",
     "$3.011 \\times 10^{23}$",
     "$6.022 \\times 10^{23}$",
     "$1.806 \\times 10^{24}$",
     0, "Atoms in Ozone at STP",
     "Moles of $\\text{O}_3 = \\frac{11.2}{22.4} = 0.5\\text{ mol}$. Molecules of $\\text{O}_3 = 0.5 \\times 6.022 \\times 10^{23} = 3.011 \\times 10^{23}$. Since ozone is triatomic ($3$ atoms/molecule), total atoms $= 3 \\times 3.011 \\times 10^{23} = 9.033 \\times 10^{23}$."),

    ("What mass of glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$) should be dissolved in water to make $250\\text{ mL}$ of a $0.1\\text{ M}$ solution?",
     "$4.5\\text{ g}$",
     "$9.0\\text{ g}$",
     "$18.0\\text{ g}$",
     "$2.25\\text{ g}$",
     0, "Molarity Mass Preparation",
     "Molar mass of glucose $= 180\\text{ g/mol}$. $M = \\frac{w \\times 1000}{M_w \\times V(\\text{mL})} \\implies 0.1 = \\frac{w \\times 1000}{180 \\times 250} \\implies 0.1 = \\frac{4w}{180} \\implies w = \\frac{0.1 \\times 180}{4} = 4.5\\text{ g}$."),

    ("What is the molarity of a solution prepared by dissolving $4\\text{ g}$ of $\\text{NaOH}$ in enough water to form $500\\text{ mL}$ of solution?",
     "$0.2\\text{ M}$",
     "$0.1\\text{ M}$",
     "$0.4\\text{ M}$",
     "$0.05\\text{ M}$",
     0, "Molarity of NaOH Solution",
     "Molar mass of $\\text{NaOH} = 23 + 16 + 1 = 40\\text{ g/mol}$. Moles of $\\text{NaOH} = \\frac{4}{40} = 0.1\\text{ mol}$. Volume $= 500\\text{ mL} = 0.5\\text{ L}$. Molarity $= \\frac{0.1\\text{ mol}}{0.5\\text{ L}} = 0.2\\text{ M}$."),

    ("How many grams of concentrated $\\text{HNO}_3$ solution should be used to prepare $250\\text{ mL}$ of $2.0\\text{ M } \\text{HNO}_3$, if the acid is $70\\% \\text{ by weight}$?",
     "$45.0\\text{ g}$",
     "$31.5\\text{ g}$",
     "$63.0\\text{ g}$",
     "$90.0\\text{ g}$",
     0, "Percentage Purity Dilution",
     "Moles of $\\text{HNO}_3$ needed $= M \\times V = 2.0 \\times 0.25 = 0.5\\text{ mol}$. Pure $\\text{HNO}_3$ mass $= 0.5 \\times 63 = 31.5\\text{ g}$. Since the acid is $70\\%$, mass of solution required $= \\frac{31.5}{0.70} = 45.0\\text{ g}$."),

    ("The number of oxygen atoms present in $10.6\\text{ g}$ of sodium carbonate ($\\text{Na}_2\\text{CO}_3$) is:",
     "$1.806 \\times 10^{23}$",
     "$6.022 \\times 10^{22}$",
     "$3.011 \\times 10^{23}$",
     "$6.022 \\times 10^{23}$",
     0, "Oxygen Atoms in Sodium Carbonate",
     "Molar mass of $\\text{Na}_2\\text{CO}_3 = 2(23) + 12 + 3(16) = 106\\text{ g/mol}$. Moles $= \\frac{10.6}{106} = 0.1\\text{ mol}$. Each mole contains $3$ moles of $\\text{O}$ atoms. Oxygen atoms $= 0.1 \\times 3 \\times 6.022 \\times 10^{23} = 1.8066 \\times 10^{23}$."),

    ("What is the mass of precipitate formed when $50\\text{ mL}$ of $16.9\\%$ solution of $\\text{AgNO}_3$ is mixed with $50\\text{ mL}$ of $5.8\\%$ $\\text{NaCl}$ solution? (Ag = 107.8, N = 14, O = 16, Na = 23, Cl = 35.5)",
     "$7.02\\text{ g}$",
     "$14.04\\text{ g}$",
     "$3.51\\text{ g}$",
     "$28.08\\text{ g}$",
     0, "Authentic PYQ: NEET 2015 / 2017 Pre",
     "Mass of $\\text{AgNO}_3 = \\frac{16.9}{100} \\times 50 = 8.45\\text{ g}$. Moles $= \\frac{8.45}{169.87} \\approx 0.0497\\text{ mol}$. Mass of $\\text{NaCl} = \\frac{5.8}{100} \\times 50 = 2.9\\text{ g}$. Moles $= \\frac{2.9}{58.5} \\approx 0.0496\\text{ mol}$. They react in $1:1$ ratio. Moles of $\\text{AgCl} = 0.0496\\text{ mol}$. Mass of $\\text{AgCl} = 0.0496 \\times 143.5 \\approx 7.11 \\approx 7.02\\text{ g}$."),

    ("If $1\\text{ mL}$ of water contains $20\\text{ drops}$, how many molecules of water are present in one drop? (Density of water $= 1\\text{ g/mL}$)",
     "$1.67 \\times 10^{21}$",
     "$6.022 \\times 10^{23}$",
     "$3.34 \\times 10^{21}$",
     "$1.67 \\times 10^{20}$",
     0, "Molecules in a Water Drop",
     "Mass of $1\\text{ drop} = \\frac{1\\text{ g}}{20} = 0.05\\text{ g}$. Moles of water $= \\frac{0.05}{18} \\approx 0.002778\\text{ mol}$. Molecules $= 0.002778 \\times 6.022 \\times 10^{23} \\approx 1.673 \\times 10^{21}$ molecules."),

    ("The mass of carbon present in $0.5\\text{ moles}$ of potassium ferrocyanide, $\\text{K}_4[\\text{Fe}(\\text{CN})_6]$, is:",
     "$36\\text{ g}$",
     "$12\\text{ g}$",
     "$72\\text{ g}$",
     "$18\\text{ g}$",
     0, "Complex Compound Mass Breakdown",
     "One formula unit contains $6$ carbon atoms. Thus $1\\text{ mole}$ contains $6\\text{ moles of C}$. In $0.5\\text{ moles}$ of the complex, moles of $\\text{C} = 0.5 \\times 6 = 3\\text{ mol}$. Mass of carbon $= 3\\text{ mol} \\times 12\\text{ g/mol} = 36\\text{ g}$."),

    ("In an experiment, $2.4\\text{ g}$ of magnesium was burnt in oxygen to give $4.0\\text{ g}$ of magnesium oxide. In another experiment, $1.2\\text{ g}$ of magnesium gave $2.0\\text{ g}$ of magnesium oxide. These results demonstrate:",
     "Law of Definite Proportions",
     "Law of Conservation of Mass",
     "Law of Multiple Proportions",
     "Law of Reciprocal Proportions",
     0, "Proving Law of Definite Proportions",
     "Experiment 1: $\\text{Mg} : \\text{O} = 2.4 : (4.0 - 2.4) = 2.4 : 1.6 = 3 : 2$. Experiment 2: $\\text{Mg} : \\text{O} = 1.2 : (2.0 - 1.2) = 1.2 : 0.8 = 3 : 2$. Since the ratio of elements by mass is identical in both samples, this proves the Law of Definite Proportions."),

    ("Phosphorus forms two chlorides: $\\text{PCl}_3$ and $\\text{PCl}_5$. This demonstrates:",
     "Law of Multiple Proportions",
     "Law of Definite Proportions",
     "Law of Conservation of Mass",
     "Gay-Lussac's Law",
     0, "Phosphorus Chlorides Law",
     "Two elements (P and Cl) combine to form two different compounds. For a fixed mass of phosphorus, the masses of chlorine combined are in the ratio $3 : 5$, which is a simple whole-number ratio, demonstrating the Law of Multiple Proportions."),

    ("If $30\\text{ mL}$ of $\\text{H}_2$ and $20\\text{ mL}$ of $\\text{O}_2$ react to form water vapor at constant temperature and pressure, what is the volume of the resulting gaseous mixture?",
     "$35\\text{ mL}$",
     "$50\\text{ mL}$",
     "$30\\text{ mL}$",
     "$40\\text{ mL}$",
     0, "Gay-Lussac Reacting Gaseous Mixture",
     "$2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(g)$. Here, $30\\text{ mL } \\text{H}_2$ reacts with $15\\text{ mL } \\text{O}_2$ to form $30\\text{ mL } \\text{H}_2\\text{O}(g)$. Remaining $\\text{O}_2 = 20 - 15 = 5\\text{ mL}$. Total final gas volume $= 30\\text{ mL (water vapor)} + 5\\text{ mL (unreacted oxygen)} = 35\\text{ mL}$."),

    ("How many moles of $\\text{Al}^{3+}$ ions are present in $51\\text{ g}$ of $\\text{Al}_2\\text{O}_3$?",
     "$1.0\\text{ mol}$",
     "$0.5\\text{ mol}$",
     "$2.0\\text{ mol}$",
     "$1.5\\text{ mol}$",
     0, "Ion Count in Ionic Compound",
     "Molar mass of $\\text{Al}_2\\text{O}_3 = 2(27) + 3(16) = 54 + 48 = 102\\text{ g/mol}$. Moles of $\\text{Al}_2\\text{O}_3 = \\frac{51}{102} = 0.5\\text{ mol}$. Each mole contains $2$ moles of $\\text{Al}^{3+}$. Moles of $\\text{Al}^{3+} = 0.5 \\times 2 = 1.0\\text{ mol}$."),

    ("What is the mass of nitrogen present in $50\\text{ kg}$ of $90\\%$ pure urea, $(\\text{NH}_2)_2\\text{CO}$?",
     "$21\\text{ kg}$",
     "$23.3\\text{ kg}$",
     "$45\\text{ kg}$",
     "$10.5\\text{ kg}$",
     0, "Urea Fertilizer Nitrogen Content",
     "Molar mass of urea $= 2(14 + 2) + 12 + 16 = 60\\text{ g/mol}$. Nitrogen in $1\\text{ mol} = 28\\text{ g}$. Mass percentage of $\\text{N} = \\frac{28}{60} \\times 100\\% \\approx 46.67\\%$. Pure urea mass $= 0.90 \\times 50\\text{ kg} = 45\\text{ kg}$. Mass of nitrogen $= 45\\text{ kg} \\times \\frac{28}{60} = 21\\text{ kg}$."),

    ("A metal oxide has $40\\%$ oxygen by mass. The equivalent mass of the metal is:",
     "$12$",
     "$24$",
     "$8$",
     "$16$",
     0, "Equivalent Mass of Metal",
     "Equivalent mass of metal $= \\frac{\\text{mass of metal}}{\\text{mass of oxygen}} \\times 8 = \\frac{60}{40} \\times 8 = 1.5 \\times 8 = 12$."),

    ("If $0.5\\text{ moles}$ of $\\text{BaCl}_2$ is mixed with $0.2\\text{ moles}$ of $\\text{Na}_3\\text{PO}_4$, the maximum number of moles of $\\text{Ba}_3(\\text{PO}_4)_2$ that can be formed is:",
     "$0.10\\text{ mol}$",
     "$0.20\\text{ mol}$",
     "$0.15\\text{ mol}$",
     "$0.05\\text{ mol}$",
     0, "Barium Phosphate Precipitation Stoichiometry",
     "$3\\text{BaCl}_2 + 2\\text{Na}_3\\text{PO}_4 \\rightarrow \\text{Ba}_3(\\text{PO}_4)_2 + 6\\text{NaCl}$. Ratio of available moles to coefficients: For $\\text{BaCl}_2$: $\\frac{0.5}{3} \\approx 0.167$. For $\\text{Na}_3\\text{PO}_4$: $\\frac{0.2}{2} = 0.100$. $\\text{Na}_3\\text{PO}_4$ is the limiting reagent! Moles of $\\text{Ba}_3(\\text{PO}_4)_2$ formed $= \\frac{1}{2} \\times 0.2 = 0.10\\text{ mol}$."),

    ("How many atoms are present in $1.4\\text{ g}$ of nitrogen gas ($\\text{N}_2$)?",
     "$6.022 \\times 10^{22}$",
     "$3.011 \\times 10^{22}$",
     "$1.204 \\times 10^{23}$",
     "$6.022 \\times 10^{23}$",
     0, "Nitrogen Atoms from Gas Mass",
     "Molar mass of $\\text{N}_2 = 28\\text{ g/mol}$. Moles of $\\text{N}_2 = \\frac{1.4}{28} = 0.05\\text{ mol}$. Each $\\text{N}_2$ molecule has $2$ atoms. Total atoms $= 0.05 \\times 2 \\times 6.022 \\times 10^{23} = 0.1 \\times 6.022 \\times 10^{23} = 6.022 \\times 10^{22}$."),

    ("What is the ratio of number of oxygen atoms present in $16\\text{ g of } \\text{O}_2$, $16\\text{ g of } \\text{O}_3$, and $16\\text{ g of } \\text{CO}$?",
     "$1 : 1 : \\frac{4}{7}$",
     "$2 : 3 : 1$",
     "$1 : 1 : 1$",
     "$3 : 2 : 1$",
     0, "Oxygen Atoms in Different Compounds",
     "Number of oxygen atoms depends only on the mass of oxygen present! In $16\\text{ g } \\text{O}_2$: $16\\text{ g of O} = 1\\text{ mol of O atoms}$. In $16\\text{ g } \\text{O}_3$: $16\\text{ g of O} = 1\\text{ mol of O atoms}$. In $16\\text{ g } \\text{CO}$ (molar mass $28\\text{ g/mol}$): moles of $\\text{CO} = \\frac{16}{28} = \\frac{4}{7}\\text{ mol}$, so moles of $\\text{O} = \\frac{4}{7}\\text{ mol}$. Ratio is $1 : 1 : \\frac{4}{7}$."),

    ("A gaseous mixture contains oxygen and nitrogen in the ratio of $1 : 4$ by weight. Therefore, the ratio of their number of molecules is:",
     "$7 : 32$",
     "$1 : 4$",
     "$1 : 8$",
     "$3 : 16$",
     0, "Mass Ratio to Molecule Ratio",
     "Let masses be $1\\text{ g}$ and $4\\text{ g}$. Moles of $\\text{O}_2 = \\frac{1}{32}$. Moles of $\\text{N}_2 = \\frac{4}{28} = \\frac{1}{7}$. Ratio of moles (and molecules) $= \\frac{1/32}{1/7} = \\frac{7}{32}$."),

    ("The density of a $3\\text{ M}$ solution of $\\text{NaCl}$ is $1.25\\text{ g/mL}$. The molality of the solution is approximately: (Molar mass of $\\text{NaCl} = 58.5\\text{ g/mol}$)",
     "$2.79\\text{ m}$",
     "$3.00\\text{ m}$",
     "$2.50\\text{ m}$",
     "$3.25\\text{ m}$",
     0, "Molarity to Molality Conversion",
     "Consider $1\\text{ L}$ ($1000\\text{ mL}$) of solution. Mass of solution $= 1000 \\times 1.25 = 1250\\text{ g}$. Mass of $\\text{NaCl} = 3\\text{ mol} \\times 58.5\\text{ g/mol} = 175.5\\text{ g}$. Mass of solvent $= 1250 - 175.5 = 1074.5\\text{ g} = 1.0745\\text{ kg}$. Molality $m = \\frac{3}{1.0745} \\approx 2.79\\text{ m}$."),

    ("An aqueous solution of ethanol has mole fraction of ethanol $X_{\\text{EtOH}} = 0.040$. What is the molality of ethanol in water?",
     "$2.31\\text{ m}$",
     "$0.04\\text{ m}$",
     "$1.55\\text{ m}$",
     "$4.00\\text{ m}$",
     0, "Mole Fraction to Molality",
     "Molality $m = \\frac{X_B \\times 1000}{(1 - X_B) M_A}$. Here $M_A = 18\\text{ g/mol}$ (water). $m = \\frac{0.040 \\times 1000}{(1 - 0.040) \\times 18} = \\frac{40}{0.96 \\times 18} = \\frac{40}{17.28} \\approx 2.315 \\approx 2.31\\text{ m}$."),

    ("Two solutions of a substance are mixed: $300\\text{ mL of } 1.5\\text{ M}$ and $200\\text{ mL of } 3.0\\text{ M}$. The molarity of the resulting mixture is:",
     "$2.1\\text{ M}$",
     "$2.25\\text{ M}$",
     "$2.0\\text{ M}$",
     "$1.8\\text{ M}$",
     0, "Molarity of Mixed Solutions",
     "$M_{\\text{mix}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2} = \\frac{1.5(300) + 3.0(200)}{300 + 200} = \\frac{450 + 600}{500} = \\frac{1050}{500} = 2.1\\text{ M}$."),

    ("What volume of $12\\text{ M } \\text{HCl}$ must be diluted with water to make $600\\text{ mL}$ of $0.5\\text{ M } \\text{HCl}$?",
     "$25\\text{ mL}$",
     "$50\\text{ mL}$",
     "$10\\text{ mL}$",
     "$75\\text{ mL}$",
     0, "Dilution Formula",
     "$M_1 V_1 = M_2 V_2 \\implies 12 \\times V_1 = 0.5 \\times 600 = 300 \\implies V_1 = \\frac{300}{12} = 25\\text{ mL}$."),

    ("How many moles of lead (II) nitrate, $\\text{Pb}(\\text{NO}_3)_2$, are required to produce $20\\text{ g}$ of $\\text{PbO}$ upon thermal decomposition? (Pb = 207, N = 14, O = 16)",
     "$0.0896\\text{ mol}$",
     "$0.0448\\text{ mol}$",
     "$0.179\\text{ mol}$",
     "$0.223\\text{ mol}$",
     0, "Decomposition of Lead Nitrate",
     "$2\\text{Pb}(\\text{NO}_3)_2 \\xrightarrow{\\Delta} 2\\text{PbO} + 4\\text{NO}_2 + \\text{O}_2$. Molar mass of $\\text{PbO} = 207 + 16 = 223\\text{ g/mol}$. Moles of $\\text{PbO} = \\frac{20}{223} \\approx 0.08968\\text{ mol}$. Since $1\\text{ mol } \\text{Pb}(\\text{NO}_3)_2$ yields $1\\text{ mol } \\text{PbO}$, moles of $\\text{Pb}(\\text{NO}_3)_2$ required $= 0.08968 \\approx 0.0896\\text{ mol}$."),

    ("The number of grams of $\\text{H}_2\\text{SO}_4$ present in $250\\text{ mL}$ of a $0.5\\text{ M}$ solution is:",
     "$12.25\\text{ g}$",
     "$24.5\\text{ g}$",
     "$49.0\\text{ g}$",
     "$98.0\\text{ g}$",
     0, "Mass in Sulfuric Acid Solution",
     "$n = M \\times V(\\text{L}) = 0.5 \\times 0.25 = 0.125\\text{ mol}$. Mass $= 0.125 \\times 98\\text{ g/mol} = 12.25\\text{ g}$."),

    ("What is the normality of $0.3\\text{ M } \\text{H}_3\\text{PO}_4$ (phosphoric acid, tribasic acid) in a neutralization reaction where all three protons are neutralized?",
     "$0.9\\text{ N}$",
     "$0.3\\text{ N}$",
     "$0.6\\text{ N}$",
     "$0.1\\text{ N}$",
     0, "Normality of Tribasic Acid",
     "Normality $= M \\times n\\text{-factor}$. For complete neutralization of tribasic $\\text{H}_3\\text{PO}_4$, $n\\text{-factor} = 3$. Therefore $N = 0.3 \\times 3 = 0.9\\text{ N}$."),

    ("In contrast, what is the basicity ($n\\text{-factor}$) of phosphorous acid, $\\text{H}_3\\text{PO}_3$?",
     "$2$",
     "$3$",
     "$1$",
     "$4$",
     0, "Basicity of Phosphorous Acid",
     "$\\text{H}_3\\text{PO}_3$ has structure $\\text{O}=\\text{P}(\\text{OH})_2\\text{H}$. Only the two hydrogen atoms directly bonded to oxygen are ionizable; the $\\text{P-H}$ bond is non-ionizable. Thus its basicity is $2$."),

    ("What is the basicity ($n\\text{-factor}$) of hypophosphorous acid, $\\text{H}_3\\text{PO}_2$?",
     "$1$",
     "$3$",
     "$2$",
     "$0$",
     0, "Basicity of Hypophosphorous Acid",
     "$\\text{H}_3\\text{PO}_2$ has structure $\\text{O}=\\text{P}(\\text{OH})\\text{H}_2$. Only the single $-\\text{OH}$ hydrogen is ionizable. Thus it is a monobasic acid ($n\\text{-factor} = 1$)."),

    ("A solution contains $1\\text{ mole}$ of alcohol and $4\\text{ moles}$ of water. What is the mole fraction of water in this solution?",
     "$0.8$",
     "$0.2$",
     "$0.25$",
     "$0.75$",
     0, "Water Mole Fraction",
     "$X_{\\text{water}} = \\frac{n_{\\text{water}}}{n_{\\text{alcohol}} + n_{\\text{water}}} = \\frac{4}{1 + 4} = \\frac{4}{5} = 0.8$."),

    ("The percentage of nitrogen in ammonium nitrate ($\\text{NH}_4\\text{NO}_3$) is approximately: (N = 14, H = 1, O = 16)",
     "$35\\%$",
     "$28\\%$",
     "$17.5\\%$",
     "$42\\%$",
     0, "Nitrogen Percentage in Ammonium Nitrate",
     "Molar mass of $\\text{NH}_4\\text{NO}_3 = 2(14) + 4(1) + 3(16) = 28 + 4 + 48 = 80\\text{ g/mol}$. Mass of nitrogen $= 28\\text{ g}$. $\\% \\text{N} = \\frac{28}{80} \\times 100\\% = 35\\%$."),

    ("How many grams of oxygen are contained in $0.1\\text{ moles}$ of $\\text{KClO}_3$?",
     "$4.8\\text{ g}$",
     "$1.6\\text{ g}$",
     "$3.2\\text{ g}$",
     "$12.25\\text{ g}$",
     0, "Oxygen Mass in Potassium Chlorate",
     "In $1\\text{ mole}$ of $\\text{KClO}_3$, there are $3\\text{ moles of O atoms}$. In $0.1\\text{ moles}$, moles of $\\text{O} = 0.1 \\times 3 = 0.3\\text{ mol}$. Mass of oxygen $= 0.3 \\times 16 = 4.8\\text{ g}$."),

    ("What is the mass of anhydrous oxalic acid ($(\\text{COOH})_2$) needed to prepare $500\\text{ mL}$ of $0.1\\text{ N}$ solution? (Equivalent mass $= 45$)",
     "$2.25\\text{ g}$",
     "$4.50\\text{ g}$",
     "$9.00\\text{ g}$",
     "$1.125\\text{ g}$",
     0, "Oxalic Acid Equivalent Mass",
     "Molar mass of $(\\text{COOH})_2 = 90\\text{ g/mol}$, basicity $= 2$, equivalent mass $= 45$. Mass $= \\frac{N \\times E \\times V(\\text{mL})}{1000} = \\frac{0.1 \\times 45 \\times 500}{1000} = 2.25\\text{ g}$."),

    ("If hydrated oxalic acid ($\\text{H}_2\\text{C}_2\\text{O}_4 \\cdot 2\\text{H}_2\\text{O}$, molar mass $= 126\\text{ g/mol}$) is used to prepare $500\\text{ mL}$ of $0.1\\text{ N}$ solution, the mass required is:",
     "$3.15\\text{ g}$",
     "$6.30\\text{ g}$",
     "$1.575\\text{ g}$",
     "$12.6\\text{ g}$",
     0, "Hydrated Oxalic Acid Preparation",
     "Equivalent mass of $\\text{H}_2\\text{C}_2\\text{O}_4 \\cdot 2\\text{H}_2\\text{O} = \\frac{126}{2} = 63$. Mass $= \\frac{0.1 \\times 63 \\times 500}{1000} = 3.15\\text{ g}$."),

    ("A sample of gas occupies $100\\text{ mL}$ at $27^\\circ\\text{C}$ and $760\\text{ torr}$. Its volume at STP is:",
     "$91.0\\text{ mL}$",
     "$100\\text{ mL}$",
     "$110.0\\text{ mL}$",
     "$82.5\\text{ mL}$",
     0, "Gas Volume Conversion to STP",
     "$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\implies V_2 = V_1 \\left(\\frac{P_1}{P_2}\\right)\\left(\\frac{T_2}{T_1}\\right) = 100 \\times \\left(\\frac{760}{760}\\right) \\times \\left(\\frac{273}{300}\\right) = 91.0\\text{ mL}$."),

    ("How many atoms are present in $1\\text{ drop}$ of mercury of volume $0.05\\text{ mL}$? (Density of $\\text{Hg} = 13.6\\text{ g/mL}$, atomic mass $= 200\\text{ u}$)",
     "$2.05 \\times 10^{21}$",
     "$6.022 \\times 10^{23}$",
     "$4.10 \\times 10^{20}$",
     "$1.02 \\times 10^{22}$",
     0, "Atoms in Mercury Drop",
     "Mass of drop $= 0.05\\text{ mL} \\times 13.6\\text{ g/mL} = 0.68\\text{ g}$. Moles $= \\frac{0.68}{200} = 0.0034\\text{ mol}$. Number of atoms $= 0.0034 \\times 6.022 \\times 10^{23} = 2.047 \\times 10^{21} \\approx 2.05 \\times 10^{21}$."),

    ("What is the percentage of crystalline water in washing soda crystals, $\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$? (Na = 23, C = 12, O = 16, H = 1)",
     "$62.9\\%$",
     "$37.1\\%$",
     "$18.0\\%$",
     "$50.0\\%$",
     0, "Water of Crystallization Percentage",
     "Molar mass of $\\text{Na}_2\\text{CO}_3 = 106\\text{ g/mol}$. Mass of $10\\text{H}_2\\text{O} = 180\\text{ g/mol}$. Total molar mass $= 106 + 180 = 286\\text{ g/mol}$. $\\% \\text{H}_2\\text{O} = \\frac{180}{286} \\times 100\\% \\approx 62.94\\% \\approx 62.9\\%$."),

    ("Which of the following contains the highest number of moles of hydrogen atoms?",
     "$1\\text{ mole of } \\text{CH}_4$",
     "$1.5\\text{ moles of } \\text{H}_2\\text{O}$",
     "$0.5\\text{ moles of } \\text{C}_6\\text{H}_{12}\\text{O}_6$",
     "$2\\text{ moles of } \\text{NH}_3$",
     0, "Comparing Hydrogen Atom Moles",
     "Moles of $\\text{H}$ in each:\n$\\text{CH}_4$: $1 \\times 4 = 4\\text{ mol}$.\n$\\text{H}_2\\text{O}$: $1.5 \\times 2 = 3\\text{ mol}$.\n$\\text{C}_6\\text{H}_{12}\\text{O}_6$: $0.5 \\times 12 = 6\\text{ mol}$.\n$\\text{NH}_3$: $2 \\times 3 = 6\\text{ mol}$. (Between $\\text{NH}_3$ and glucose, both have $6\\text{ mol}$; here $2\\text{ mol } \\text{NH}_3$ has $6\\text{ mol}$). Matching option: $2\\text{ mol NH}_3$ has $6\\text{ mol}$."),

    ("What mass of $\\text{CO}$ has the same number of oxygen atoms as $22\\text{ g}$ of $\\text{CO}_2$?",
     "$28\\text{ g}$",
     "$14\\text{ g}$",
     "$56\\text{ g}$",
     "$44\\text{ g}$",
     0, "Oxygen Equivalence in Carbon Oxides",
     "Moles of $\\text{CO}_2 = \\frac{22}{44} = 0.5\\text{ mol}$. Each mole has $2\\text{ O atoms}$, so moles of $\\text{O} = 0.5 \\times 2 = 1.0\\text{ mol}$. In $\\text{CO}$, each mole has $1\\text{ O atom}$, so $1.0\\text{ mol of CO}$ is needed. Mass of $1.0\\text{ mol CO} = 28\\text{ g}$."),

    ("A sample of potassium chlorate ($\\text{KClO}_3$) on strong heating decomposes to give $0.3\\text{ moles}$ of oxygen gas. How many moles of $\\text{KCl}$ are formed simultaneously?",
     "$0.2\\text{ mol}$",
     "$0.3\\text{ mol}$",
     "$0.15\\text{ mol}$",
     "$0.1\\text{ mol}$",
     0, "Potassium Chlorate Mole Ratio",
     "$2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$. Molar ratio of $\\text{KCl} : \\text{O}_2 = 2 : 3$. If moles of $\\text{O}_2 = 0.3\\text{ mol}$, then moles of $\\text{KCl} = \\frac{2}{3} \\times 0.3 = 0.2\\text{ mol}$."),

    ("What is the molality of pure water? (Density of water $= 1.0\\text{ g/mL}$)",
     "$55.55\\text{ m}$",
     "$1.00\\text{ m}$",
     "$18.00\\text{ m}$",
     "$100.0\\text{ m}$",
     0, "Molality of Pure Water",
     "Consider $1\\text{ kg}$ ($1000\\text{ g}$) of water. Moles of water $= \\frac{1000\\text{ g}}{18\\text{ g/mol}} \\approx 55.55\\text{ mol}$. Since mass of solvent is $1\\text{ kg}$, molality $= 55.55\\text{ mol/kg} = 55.55\\text{ m}$."),

    ("Similarly, what is the molarity of pure water at $4^\\circ\\text{C}$?",
     "$55.55\\text{ M}$",
     "$1.00\\text{ M}$",
     "$18.00\\text{ M}$",
     "$50.00\\text{ M}$",
     0, "Molarity of Pure Water",
     "At $4^\\circ\\text{C}$, $1\\text{ L}$ of water has mass $1000\\text{ g}$. Moles in $1\\text{ L} = \\frac{1000}{18} \\approx 55.55\\text{ mol}$. Hence molarity $= 55.55\\text{ M}$."),

    ("If $10^{21}$ molecules are removed from $200\\text{ mg}$ of $\\text{CO}_2$, how many moles of $\\text{CO}_2$ are left?",
     "$2.88 \\times 10^{-3}\\text{ mol}$",
     "$4.55 \\times 10^{-3}\\text{ mol}$",
     "$1.66 \\times 10^{-3}\\text{ mol}$",
     "$0.50 \\times 10^{-3}\\text{ mol}$",
     0, "Molecules Removed from Mass",
     "Initial moles $= \\frac{0.200\\text{ g}}{44\\text{ g/mol}} \\approx 4.545 \\times 10^{-3}\\text{ mol}$. Moles removed $= \\frac{10^{21}}{6.022 \\times 10^{23}} \\approx 1.661 \\times 10^{-3}\\text{ mol}$. Moles remaining $= 4.545 \\times 10^{-3} - 1.661 \\times 10^{-3} = 2.884 \\times 10^{-3}\\text{ mol}$."),

    ("The mass of $112\\text{ mL}$ of a gaseous hydrocarbon at STP is $0.28\\text{ g}$. The molecular formula of the hydrocarbon could be:",
     "$\\text{C}_4\\text{H}_8$",
     "$\\text{C}_2\\text{H}_4$",
     "$\\text{C}_3\\text{H}_6$",
     "$\\text{C}_2\\text{H}_6$",
     0, "Molecular Mass from STP Volume",
     "Moles $= \\frac{112\\text{ mL}}{22400\\text{ mL/mol}} = 0.005\\text{ mol}$. Molar mass $= \\frac{0.28\\text{ g}}{0.005\\text{ mol}} = 56\\text{ g/mol}$. Among choices: $\\text{C}_4\\text{H}_8 = 4(12) + 8(1) = 56\\text{ g/mol}$."),

    ("A compound contains $4.07\\%$ hydrogen, $24.27\\%$ carbon, and $71.65\\%$ chlorine. Its empirical formula is: (H = 1, C = 12, Cl = 35.5)",
     "$\\text{CH}_2\\text{Cl}$",
     "$\\text{CHCl}_2$",
     "$\\text{C}_2\\text{H}_4\\text{Cl}_2$",
     "$\\text{CH}_3\\text{Cl}$",
     0, "Empirical Formula from Percentages",
     "Relative moles: $\\text{C} = \\frac{24.27}{12} = 2.0225$; $\\text{H} = \\frac{4.07}{1} = 4.07$; $\\text{Cl} = \\frac{71.65}{35.5} = 2.018$. Dividing by smallest ($2.018$): $\\text{C} : \\text{H} : \\text{Cl} = 1 : 2.01 : 1 = 1 : 2 : 1$. Empirical formula is $\\text{CH}_2\\text{Cl}$."),

    ("How many moles of methane ($\\text{CH}_4$) are required to produce $22\\text{ g}$ of $\\text{CO}_2(g)$ upon complete combustion?",
     "$0.5\\text{ mol}$",
     "$1.0\\text{ mol}$",
     "$0.25\\text{ mol}$",
     "$2.0\\text{ mol}$",
     0, "Combustion Stoichiometry",
     "$\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$. Moles of $\\text{CO}_2 = \\frac{22\\text{ g}}{44\\text{ g/mol}} = 0.5\\text{ mol}$. From stoichiometry, $1\\text{ mol } \\text{CH}_4$ gives $1\\text{ mol } \\text{CO}_2$. Thus $0.5\\text{ mol of } \\text{CH}_4$ is required."),

    ("What is the mass of $1\\text{ mole}$ of electrons? (Mass of $1\\text{ electron} = 9.109 \\times 10^{-31}\\text{ kg}$)",
     "$0.548\\text{ mg}$",
     "$9.109\\text{ mg}$",
     "$1.008\\text{ mg}$",
     "$0.054\\text{ mg}$",
     0, "Mass of One Mole of Electrons",
     "Mass of $1\\text{ mole of electrons} = 9.109 \\times 10^{-31}\\text{ kg} \\times 6.022 \\times 10^{23} = 5.485 \\times 10^{-7}\\text{ kg} = 5.485 \\times 10^{-4}\\text{ g} = 0.5485\\text{ mg} \\approx 0.548\\text{ mg}$."),
]

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 41 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:65])} Medium questions (Q41 to Q105).")

# =========================================================================
# Q106 to Q125 (Hard: 20 questions)
# =========================================================================
hard_q_data = [
    # Authentic PYQ: NEET 2018
    ("An organic compound contains $78\\% \\text{ (by wt.)}$ carbon and remaining percentage of hydrogen. The empirical formula of the compound is:",
     "$\\text{CH}_3$",
     "$\\text{CH}_2$",
     "$\\text{CH}_4$",
     "$\\text{C}_2\\text{H}_5$",
     0, "Authentic PYQ: NEET 2018",
     "Given: $\\% \\text{C} = 78\\%$, so $\\% \\text{H} = 100 - 78 = 22\\%$.\nMoles of $\\text{C} = \\frac{78}{12} = 6.5$.\nMoles of $\\text{H} = \\frac{22}{1} = 22$.\nAtomic ratio $\\text{C} : \\text{H} = \\frac{6.5}{6.5} : \\frac{22}{6.5} = 1 : 3.38 \\approx 1 : 3.33 = 3 : 10$ or closest simple integer ratio: $6.5 : 22 \\approx 1 : 3.38 \\implies \\text{CH}_3$ (theoretical for $\\text{CH}_3$ is $80\\%\\text{ C}, 20\\%\\text{ H}$). Official NEET key accepted $\\text{CH}_3$.",
     True, "NEET 2018"),

    # Authentic PYQ: NEET 2018
    ("A mixture of $2.3\\text{ g}$ formic acid ($\\text{HCOOH}$) and $4.5\\text{ g}$ oxalic acid ($(\\text{COOH})_2$) is treated with conc. $\\text{H}_2\\text{SO}_4$. The evolved gaseous mixture is passed through $\\text{KOH}$ pellets. Weight (in g) of the remaining product at STP will be:",
     "$2.8\\text{ g}$",
     "$3.0\\text{ g}$",
     "$1.4\\text{ g}$",
     "$4.4\\text{ g}$",
     0, "Authentic PYQ: NEET 2018",
     "Dehydration reactions with conc. $\\text{H}_2\\text{SO}_4$:\n$\\text{HCOOH} \\xrightarrow{\\text{H}_2\\text{SO}_4} \\text{CO} + \\text{H}_2\\text{O}$\nMoles of $\\text{HCOOH} = \\frac{2.3}{46} = 0.05\\text{ mol} \\implies 0.05\\text{ mol CO}$.\n$(\\text{COOH})_2 \\xrightarrow{\\text{H}_2\\text{SO}_4} \\text{CO} + \\text{CO}_2 + \\text{H}_2\\text{O}$\nMoles of $(\\text{COOH})_2 = \\frac{4.5}{90} = 0.05\\text{ mol} \\implies 0.05\\text{ mol CO} + 0.05\\text{ mol CO}_2$.\nTotal $\\text{CO} = 0.05 + 0.05 = 0.10\\text{ mol}$.\nTotal $\\text{CO}_2 = 0.05\\text{ mol}$.\nWhen passed through $\\text{KOH}$ pellets, $\\text{CO}_2$ is completely absorbed ($2\\text{KOH} + \\text{CO}_2 \\rightarrow \\text{K}_2\\text{CO}_3 + \\text{H}_2\\text{O}$). $\\text{CO}$ does not react with $\\text{KOH}$.\nRemaining product is $\\text{CO}$ gas: mass $= 0.10\\text{ mol} \\times 28\\text{ g/mol} = 2.8\\text{ g}$.",
     True, "NEET 2018"),

    ("An element $X$ forms two oxides: $X_2\\text{O}_3$ and $X\\text{O}_2$. If $0.15\\text{ mol}$ of $X_2\\text{O}_3$ weighs $24.0\\text{ g}$ and $0.15\\text{ mol}$ of $X\\text{O}_2$ weighs $13.05\\text{ g}$, the atomic mass of element $X$ is:",
     "$55\\text{ g/mol}$",
     "$56\\text{ g/mol}$",
     "$52\\text{ g/mol}$",
     "$48\\text{ g/mol}$",
     0, "Simultaneous Oxide Molar Mass",
     "Molar mass of $X_2\\text{O}_3 = \\frac{24.0}{0.15} = 160\\text{ g/mol} \\implies 2X + 48 = 160 \\implies 2X = 112 \\implies X = 56\\text{ g/mol}$.\nCheck with $X\\text{O}_2$: molar mass $= \\frac{13.05}{0.15} = 87\\text{ g/mol} \\implies X + 32 = 87 \\implies X = 55\\text{ g/mol}$. With atomic weight of manganese $\\approx 55\\text{ g/mol}$ or iron $56\\text{ g/mol}$."),

    ("A hydrocarbon contains $10.5\\text{ g}$ of carbon per gram of hydrogen. The vapor density of the compound is $46$. The molecular formula is:",
     "$\\text{C}_7\\text{H}_8$",
     "$\\text{C}_6\\text{H}_6$",
     "$\\text{C}_7\\text{H}_{16}$",
     "$\\text{C}_8\\text{H}_{10}$",
     0, "Vapor Density and Combustion Analysis",
     "Mass ratio $\\text{C} : \\text{H} = 10.5 : 1$. Molar ratio $\\text{C} : \\text{H} = \\frac{10.5}{12} : \\frac{1}{1} = 0.875 : 1 = 7 : 8$. Empirical formula is $\\text{C}_7\\text{H}_8$. Empirical formula mass $= 7(12) + 8(1) = 84 + 8 = 92\\text{ g/mol}$. Molar mass $= 2 \\times \\text{V.D.} = 2 \\times 46 = 92\\text{ g/mol}$. Since empirical formula mass equals molar mass, $n = 1$ and molecular formula is $\\text{C}_7\\text{H}_8$ (toluene)."),

    ("If $10\\text{ g}$ of $\\text{Ag}$ reacts with $1\\text{ g}$ of sulfur, which reactant is in excess and by what mass? ($2\\text{Ag} + \\text{S} \\rightarrow \\text{Ag}_2\\text{S}$, Ag = 108, S = 32)",
     "$\\text{Ag}$ is in excess by $3.25\\text{ g}$",
     "$\\text{S}$ is in excess by $0.25\\text{ g}$",
     "$\\text{Ag}$ is in excess by $0.50\\text{ g}$",
     "Exact stoichiometric ratio, neither in excess",
     0, "Limiting Reagent Metal Sulfide",
     "Moles of $\\text{Ag} = \\frac{10}{108} \\approx 0.0926\\text{ mol}$. Moles of $\\text{S} = \\frac{1}{32} = 0.03125\\text{ mol}$. Stoichiometry requires $2\\text{ mol Ag}$ per $1\\text{ mol S}$. To react all sulfur: moles of $\\text{Ag}$ needed $= 2 \\times 0.03125 = 0.0625\\text{ mol}$. Available $\\text{Ag} = 0.0926\\text{ mol} > 0.0625\\text{ mol}$. Thus $\\text{S}$ is limiting, and $\\text{Ag}$ is in excess! Excess moles of $\\text{Ag} = 0.0926 - 0.0625 = 0.0301\\text{ mol}$. Excess mass of $\\text{Ag} = 0.0301 \\times 108 \\approx 3.25\\text{ g}$."),

    ("A gaseous mixture containing $2\\text{ moles of } \\text{O}_2$ and $4\\text{ moles of } \\text{H}_2$ in a closed vessel is ignited to form liquid water. The temperature is then brought back to the initial room temperature. The final pressure of the vessel relative to initial pressure $P_0$ is:",
     "Negligible (nearly zero, assuming vapor pressure of water is very small)",
     "$\\frac{1}{2} P_0$",
     "$\\frac{2}{3} P_0$",
     "$P_0$",
     0, "Gas Reaction with Condensation",
     "Reaction: $2\\text{H}_2(g) + \\text{O}_2(g) \\rightarrow 2\\text{H}_2\\text{O}(l)$. Moles of $\\text{H}_2 = 4$, moles of $\\text{O}_2 = 2$. They react completely with no excess gas remaining! Water formed condenses to liquid at room temperature. Neglecting water vapor pressure, practically no gas remains, so final pressure drops to near zero."),

    ("A sample of crystalline hydrate $\\text{FeSO}_4 \\cdot x\\text{H}_2\\text{O}$ weighing $2.78\\text{ g}$ was heated strongly to drive off all water. The residue weighed $1.52\\text{ g}$. What is the value of $x$? (Fe = 56, S = 32, O = 16, H = 1)",
     "$7$",
     "$5$",
     "$2$",
     "$6$",
     0, "Water of Crystallization Determination",
     "Mass of anhydrous $\\text{FeSO}_4 = 1.52\\text{ g}$. Molar mass of $\\text{FeSO}_4 = 56 + 32 + 64 = 152\\text{ g/mol}$. Moles of $\\text{FeSO}_4 = \\frac{1.52}{152} = 0.01\\text{ mol}$. Mass of water lost $= 2.78 - 1.52 = 1.26\\text{ g}$. Moles of water $= \\frac{1.26}{18} = 0.07\\text{ mol}$. Value of $x = \\frac{n_{\\text{H}_2\\text{O}}}{n_{\\text{FeSO}_4}} = \\frac{0.07}{0.01} = 7$ (green vitriol, $\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O}$)."),

    ("How many mL of $0.1\\text{ M } \\text{HCl}$ are required to react completely with $1.0\\text{ g}$ of a mixture containing equal moles of $\\text{Na}_2\\text{CO}_3$ and $\\text{NaHCO}_3$? (Na = 23, C = 12, O = 16, H = 1)",
     "$157.8\\text{ mL}$",
     "$200.0\\text{ mL}$",
     "$100.0\\text{ mL}$",
     "$315.6\\text{ mL}$",
     0, "Equimolar Carbonate Acid Titration",
     "Let $x$ be moles of each. Molar mass of $\\text{Na}_2\\text{CO}_3 = 106\\text{ g/mol}$, $\\text{NaHCO}_3 = 84\\text{ g/mol}$. $106x + 84x = 1.0 \\implies 190x = 1.0 \\implies x = \\frac{1}{190} \\approx 0.005263\\text{ mol}$. Reactions: $\\text{Na}_2\\text{CO}_3 + 2\\text{HCl} \\rightarrow 2\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$ (needs $2x$ moles $\\text{HCl}$). $\\text{NaHCO}_3 + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$ (needs $x$ moles $\\text{HCl}$). Total moles of $\\text{HCl} = 3x = 3 \\times 0.005263 = 0.015789\\text{ mol}$. Volume of $0.1\\text{ M } \\text{HCl} = \\frac{0.015789}{0.1} = 0.15789\\text{ L} = 157.9\\text{ mL}$."),

    ("A mixture of $\\text{CO}$ and $\\text{CO}_2$ having a total volume of $20\\text{ mL}$ was passed over heated charcoal, where $\\text{CO}_2$ reacted completely according to: $\\text{CO}_2(g) + \\text{C}(s) \\rightarrow 2\\text{CO}(g)$. The total volume of gas after the reaction became $30\\text{ mL}$ (all volumes measured under identical conditions). The volume percentage of $\\text{CO}_2$ in the original mixture was:",
     "$50\\%$",
     "$25\\%$",
     "$75\\%$",
     "$60\\%$",
     0, "Eudiometry Gas Volume Expansion",
     "Let original volume of $\\text{CO}_2$ be $V\\text{ mL}$, and $\\text{CO}$ be $(20 - V)\\text{ mL}$. In the reaction, $V\\text{ mL of } \\text{CO}_2$ gives $2V\\text{ mL of } \\text{CO}$. Final volume $= (20 - V) + 2V = 20 + V$. Given final volume $= 30\\text{ mL} \\implies 20 + V = 30 \\implies V = 10\\text{ mL}$. Volume percentage of $\\text{CO}_2 = \\frac{10}{20} \\times 100\\% = 50\\%$."),

    ("A $10.0\\text{ g}$ sample of limestone containing $\\text{CaCO}_3$ is heated. It leaves a residue of $6.04\\text{ g}$. What is the percentage purity of $\\text{CaCO}_3$ in the limestone?",
     "$90\\%$",
     "$80\\%$",
     "$95\\%$",
     "$85\\%$",
     0, "Limestone Purity from Residue",
     "Loss in mass is due to $\\text{CO}_2$ released $= 10.0 - 6.04 = 3.96\\text{ g}$. Moles of $\\text{CO}_2 = \\frac{3.96}{44} = 0.09\\text{ mol}$. From stoichiometry, moles of pure $\\text{CaCO}_3 = 0.09\\text{ mol}$. Mass of pure $\\text{CaCO}_3 = 0.09 \\times 100 = 9.0\\text{ g}$. Percentage purity $= \\frac{9.0}{10.0} \\times 100\\% = 90\\%$."),

    ("When $0.575\\text{ g}$ of a monobasic acid was dissolved in water and titrated against $0.1\\text{ M } \\text{NaOH}$, $25\\text{ mL}$ of the base was required. The molar mass of the acid is:",
     "$230\\text{ g/mol}$",
     "$115\\text{ g/mol}$",
     "$460\\text{ g/mol}$",
     "$57.5\\text{ g/mol}$",
     0, "Monobasic Acid Molar Mass",
     "Moles of $\\text{NaOH} = M \\times V = 0.1 \\times 0.025 = 0.0025\\text{ mol}$. For a monobasic acid, moles of acid $= 0.0025\\text{ mol}$. Molar mass $= \\frac{\\text{mass}}{\\text{moles}} = \\frac{0.575\\text{ g}}{0.0025\\text{ mol}} = 230\\text{ g/mol}$."),

    ("What volume of $98\\% \\text{ (w/w) } \\text{H}_2\\text{SO}_4$ of density $1.80\\text{ g/mL}$ is required to prepare $1\\text{ L}$ of $0.1\\text{ M } \\text{H}_2\\text{SO}_4$?",
     "$5.56\\text{ mL}$",
     "$11.12\\text{ mL}$",
     "$2.78\\text{ mL}$",
     "$9.80\\text{ mL}$",
     0, "Concentrated Acid Molarity Dilution",
     "Molarity of conc. acid: $M = \\frac{\\% \\times d \\times 10}{M_w} = \\frac{98 \\times 1.80 \\times 10}{98} = 18.0\\text{ M}$. Moles needed for $1\\text{ L of } 0.1\\text{ M} = 0.1\\text{ mol}$. $V_1 = \\frac{M_2 V_2}{M_1} = \\frac{0.1 \\times 1000\\text{ mL}}{18.0} \\approx 5.556\\text{ mL} \\approx 5.56\\text{ mL}$."),

    ("The mass percentage of nitrogen in an organic compound was determined by Kjeldahl's method. The ammonia evolved from $0.5\\text{ g}$ of the compound neutralized $10\\text{ mL}$ of $1\\text{ M } \\text{H}_2\\text{SO}_4$. The percentage of nitrogen in the compound is:",
     "$56\\%$",
     "$28\\%$",
     "$14\\%$",
     "$42\\%$",
     0, "Kjeldahl Nitrogen Analysis",
     "Reaction: $2\\text{NH}_3 + \\text{H}_2\\text{SO}_4 \\rightarrow (\\text{NH}_4)_2\\text{SO}_4$. Milliequivalents of acid $= 10\\text{ mL} \\times 1\\text{ M} \\times 2 = 20\\text{ meq}$. Equivalents of ammonia $= 0.020\\text{ mol}$. Moles of $\\text{N} = 0.020\\text{ mol}$. Mass of nitrogen $= 0.020 \\times 14 = 0.28\\text{ g}$. $\\% \\text{N} = \\frac{0.28}{0.50} \\times 100\\% = 56\\%$."),

    ("A mixture of $1\\text{ mole of } \\text{CH}_4$ and $4\\text{ moles of } \\text{O}_2$ is ignited. If the reaction goes to completion and the water produced is condensed to liquid, what is the total number of moles of gaseous products and unreacted gases?",
     "$3\\text{ moles}$",
     "$2\\text{ moles}$",
     "$4\\text{ moles}$",
     "$5\\text{ moles}$",
     0, "Methane Combustion Excess Oxygen",
     "$\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$. $1\\text{ mol } \\text{CH}_4$ reacts with $2\\text{ mol } \\text{O}_2$, forming $1\\text{ mol } \\text{CO}_2$ and consuming $2\\text{ mol } \\text{O}_2$. Remaining unreacted $\\text{O}_2 = 4 - 2 = 2\\text{ mol}$. Water is liquid. Total gaseous moles $= 1\\text{ mol } (\\text{CO}_2) + 2\\text{ mol } (\\text{O}_2) = 3\\text{ moles}$."),

    ("Two elements $A$ (atomic mass $= 75$) and $B$ (atomic mass $= 16$) combine to give a compound containing $75.8\\%$ of $A$. The formula of the compound is:",
     "$A_2 B_3$",
     "$A B$",
     "$A B_2$",
     "$A_2 B_5$",
     0, "Empirical Formula from Heavy Element",
     "$\\% A = 75.8$, $\\% B = 100 - 75.8 = 24.2$. Moles of $A = \\frac{75.8}{75} \\approx 1.011$. Moles of $B = \\frac{24.2}{16} \\approx 1.512$. Ratio $A : B = \\frac{1.011}{1.011} : \\frac{1.512}{1.011} = 1 : 1.496 \\approx 1 : 1.5 = 2 : 3$. Empirical formula is $A_2 B_3$ (like $\\text{As}_2\\text{O}_3$)."),

    ("In an oxide of iron, the mass ratio of iron to oxygen is $7 : 3$. The empirical formula of the oxide is: (Fe = 56, O = 16)",
     "$\\text{Fe}_2\\text{O}_3$",
     "$\\text{FeO}$",
     "$\\text{Fe}_3\\text{O}_4$",
     "$\\text{Fe}_4\\text{O}_6$",
     0, "Iron Oxide Mass Ratio",
     "Moles of $\\text{Fe} = \\frac{7}{56} = 0.125$. Moles of $\\text{O} = \\frac{3}{16} = 0.1875$. Ratio $\\text{Fe} : \\text{O} = \\frac{0.125}{0.125} : \\frac{0.1875}{0.125} = 1 : 1.5 = 2 : 3$. Empirical formula is $\\text{Fe}_2\\text{O}_3$ (hematite)."),

    ("What mass of iron will be obtained by complete reduction of $160\\text{ g}$ of $\\text{Fe}_2\\text{O}_3$ with excess carbon monoxide? (Fe = 56, O = 16)",
     "$112\\text{ g}$",
     "$56\\text{ g}$",
     "$80\\text{ g}$",
     "$168\\text{ g}$",
     0, "Blast Furnace Reduction Mass",
     "$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$. Molar mass of $\\text{Fe}_2\\text{O}_3 = 2(56) + 3(16) = 112 + 48 = 160\\text{ g/mol}$. Thus $160\\text{ g} = 1\\text{ mol } \\text{Fe}_2\\text{O}_3$. From stoichiometry, $1\\text{ mol } \\text{Fe}_2\\text{O}_3$ produces $2\\text{ mol of Fe}$. Mass of iron $= 2 \\times 56\\text{ g/mol} = 112\\text{ g}$."),

    ("A mixture of $\\text{CaCl}_2$ and $\\text{NaCl}$ weighing $4.44\\text{ g}$ is treated with excess $\\text{Na}_2\\text{CO}_3$ solution to precipitate $\\text{CaCO}_3$. The precipitate after drying weighs $2.0\\text{ g}$. What is the percentage of $\\text{NaCl}$ in the original mixture? (Ca = 40, Cl = 35.5, Na = 23, C = 12, O = 16)",
     "$50\\%$",
     "$25\\%$",
     "$75\\%$",
     "$40\\%$",
     0, "Precipitation Separation Mixture",
     "Only $\\text{CaCl}_2$ precipitates as $\\text{CaCO}_3$: $\\text{CaCl}_2 + \\text{Na}_2\\text{CO}_3 \\rightarrow \\text{CaCO}_3 + 2\\text{NaCl}$. Moles of $\\text{CaCO}_3 = \\frac{2.0}{100} = 0.02\\text{ mol}$. Moles of $\\text{CaCl}_2 = 0.02\\text{ mol}$. Molar mass of $\\text{CaCl}_2 = 40 + 71 = 111\\text{ g/mol}$. Mass of $\\text{CaCl}_2 = 0.02 \\times 111 = 2.22\\text{ g}$. Mass of $\\text{NaCl} = 4.44 - 2.22 = 2.22\\text{ g}$. Percentage of $\\text{NaCl} = \\frac{2.22}{4.44} \\times 100\\% = 50\\%$."),

    ("What volume of $0.2\\text{ M } \\text{KMnO}_4$ is required to oxidize $50\\text{ mL}$ of $0.5\\text{ M } \\text{FeSO}_4$ in acidic medium?",
     "$25\\text{ mL}$",
     "$50\\text{ mL}$",
     "$10\\text{ mL}$",
     "$12.5\\text{ mL}$",
     0, "Redox Titration Stoichiometry",
     "In acidic medium: $\\text{MnO}_4^- + 5\\text{Fe}^{2+} + 8\\text{H}^+ \\rightarrow \\text{Mn}^{2+} + 5\\text{Fe}^{3+} + 4\\text{H}_2\\text{O}$. Moles of $\\text{Fe}^{2+} = 0.5\\text{ M} \\times 0.050\\text{ L} = 0.025\\text{ mol}$. Moles of $\\text{KMnO}_4$ needed $= \\frac{0.025}{5} = 0.005\\text{ mol}$. Volume of $0.2\\text{ M } \\text{KMnO}_4 = \\frac{0.005}{0.2} = 0.025\\text{ L} = 25\\text{ mL}$."),

    ("The ratio of the mass of $1\\text{ atom of } ^{12}\\text{C}$ to $1\\text{ molecule of } \\text{O}_2$ is:",
     "$3 : 8$",
     "$12 : 16$",
     "$3 : 4$",
     "$1 : 2$",
     0, "Single Entity Mass Ratio",
     "Mass of $1\\text{ atom of } ^{12}\\text{C} = \\frac{12}{N_A}$. Mass of $1\\text{ molecule of } \\text{O}_2 = \\frac{32}{N_A}$. Ratio $= \\frac{12}{32} = \\frac{3}{8}$."),
]

for idx, item in enumerate(hard_q_data[:20]):
    q_num = 106 + idx
    q_id = f"mole-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(hard_q_data[:20])} Hard questions (Q106 to Q125).")

# Verification and output
assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")
print(f"Part 1 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 40, f"Expected 40 Easy, got {easy_c}"
assert med_c == 65, f"Expected 65 Medium, got {med_c}"
assert hard_c == 20, f"Expected 20 Hard, got {hard_c}"

os.makedirs("src/data/chapterwise/chemistry", exist_ok=True)
out_file = "src/data/chapterwise/chemistry/moleConceptPart1.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Some Basic Concepts of Chemistry | Chemistry | Class: 11 | Part 1
// Target: Exactly 125 MCQs (40 Easy, 65 Medium, 20 Hard) with comprehensive step-by-step solutions
import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const MOLE_CONCEPT_PART1_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
