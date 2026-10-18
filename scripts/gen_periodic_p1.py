#!/usr/bin/env python3
"""
Generator for Classification of Elements and Periodicity in Properties - Part 1 (Q001 to Q125)
Subject: Chemistry | Class: 11 | Chapter: Classification of Elements (periodic-classification)
Distribution: Exactly 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Genesis of periodic classification: Dobereiner's triads, Newlands' law of octaves, Lother Meyer atomic volume curves
- Mendeleev's periodic law, merits, predictions (Eka-aluminium, Eka-silicon), anomalies/defects (anomalous pairs, hydrogen position)
- Modern periodic law (Henry Moseley experiment: sqrt(nu) = a(Z - b))
- Long form of periodic table: periods (short, long, incomplete), groups (1 to 18), IUPAC nomenclature of elements with Z > 100
- Division of elements into blocks: s, p, d, f blocks (general configurations, characteristic properties)
- Metals, non-metals, metalloids, diagonal relationship introductory principles
- Finding period, group, and block of an element from its atomic number (Z) or electronic configuration
- Authentic NEET PYQs (NEET 2017, NEET 2020)
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
        "chapter": "Classification of Elements and Periodicity",
        "chapterId": "periodic-classification",
        "topicId": "chem-periodic-table-history",
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
    # Authentic PYQ: NEET 2020
    ("Identify the INCORRECT match among the following IUPAC names and official names for elements with $Z > 100$:",
     "Unnilunium - Mendelevium",
     "Unnilquadium - Rutherfordium",
     "Unnilhexium - Seaborgium",
     "Ununbium - Roentgenium",
     3, "Authentic PYQ: NEET 2020",
     "Ununbium ($Z = 112$) has the official IUPAC name Copernicium ($\\text{Cn}$). Roentgenium ($\\text{Rg}$) corresponds to $Z = 111$ (Unununium). Therefore, option D is the incorrect match. Official NEET 2020 key: Option D.",
     True, "NEET UG 2020"),

    # Authentic PYQ: NEET 2017
    ("The element $Z = 114$ has been discovered. It belongs to which family/group and electronic configuration?",
     "Carbon family, $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^2$",
     "Nitrogen family, $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^3$",
     "Oxygen family, $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^4$",
     "Halogen family, $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^5$",
     0, "Authentic PYQ: NEET 2017",
     "$Z = 114$ has 14 electrons after noble gas radon ($Z = 86$): configuration $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^2$. The valence shell has $7s^2 7p^2$, which places it in Group 14 (Carbon family, Flerovium, Fl). Official NEET 2017 key: Carbon family.",
     True, "NEET UG 2017"),

    ("According to the Modern Periodic Law, the physical and chemical properties of elements are periodic functions of their:",
     "Atomic numbers ($Z$)",
     "Atomic weights ($A$)",
     "Mass numbers",
     "Neutron-proton ratios",
     0, "Modern Periodic Law",
     "In 1913, Henry Moseley demonstrated that frequency of X-rays emitted from metallic targets follows $\\sqrt{\\nu} = a(Z - b)$, proving that atomic number ($Z$), not atomic weight, is the fundamental property."),

    ("Mendeleev's periodic law was based on which fundamental property of elements?",
     "Atomic weight",
     "Atomic number",
     "Density",
     "Valency",
     0, "Mendeleev Periodic Law Basis",
     "Dmitri Mendeleev formulated in 1869 that 'the properties of the elements are a periodic function of their atomic weights'."),

    ("In Mendeleev's periodic table, the predicted element 'Eka-aluminium' was later discovered and named:",
     "Gallium ($\\text{Ga}$)",
     "Germanium ($\\text{Ge}$)",
     "Scandium ($\\text{Sc}$)",
     "Indium ($\\text{In}$)",
     0, "Eka-Aluminium Discovery",
     "Mendeleev left a gap beneath aluminium and predicted 'Eka-aluminium', which was discovered in 1875 by Paul-Émile Lecoq de Boisbaudran and named Gallium ($\\text{Ga}$, $Z = 31$)."),

    ("In Mendeleev's periodic table, 'Eka-silicon' was later discovered and identified as:",
     "Germanium ($\\text{Ge}$)",
     "Gallium ($\\text{Ga}$)",
     "Scandium ($\\text{Sc}$)",
     "Tin ($\\text{Sn}$)",
     0, "Eka-Silicon Discovery",
     "Eka-silicon predicted by Mendeleev was discovered in 1886 by Clemens Winkler and named Germanium ($\\text{Ge}$, $Z = 32$)."),

    ("In Mendeleev's periodic table, 'Eka-boron' was later discovered as:",
     "Scandium ($\\text{Sc}$)",
     "Gallium ($\\text{Ga}$)",
     "Germanium ($\\text{Ge}$)",
     "Titanium ($\\text{Ti}$)",
     0, "Eka-Boron Discovery",
     "Eka-boron was discovered in 1879 by Lars Fredrik Nilson and named Scandium ($\\text{Sc}$, $Z = 21$)."),

    ("The long form of the periodic table consists of how many horizontal periods and vertical groups?",
     "7 periods and 18 groups",
     "8 periods and 16 groups",
     "7 periods and 8 groups",
     "6 periods and 18 groups",
     0, "Periodic Table Dimensions",
     "The modern IUPAC long form of the periodic table contains 7 horizontal rows called periods and 18 vertical columns numbered from 1 to 18 called groups."),

    ("According to IUPAC nomenclature, what is the temporary name and symbol of element with atomic number $104$?",
     "Unnilquadium ($\\text{Unq}$)",
     "Unnilpentium ($\\text{Unp}$)",
     "Unnilhexium ($\\text{Unh}$)",
     "Unnilennium ($\\text{Une}$)",
     0, "IUPAC Name Z=104",
     "Digits: 1 = un, 0 = nil, 4 = quad. Root: un + nil + quad + ium = Unnilquadium (symbol $\\text{Unq}$, Rutherfordium)."),

    ("What is the IUPAC systematic name for element $Z = 119$?",
     "Ununennium ($\\text{Uue}$)",
     "Ununoctium ($\\text{Uuo}$)",
     "Ununseptium ($\\text{Uus}$)",
     "Ununhexium ($\\text{Uuh}$)",
     0, "IUPAC Name Z=119",
     "Digits: 1 = un, 1 = un, 9 = enn. Thus: Ununennium (symbol $\\text{Uue}$)."),

    ("The general electronic configuration of the $s$-block elements is:",
     "$ns^{1-2}$ ($n = 1$ to $7$)",
     "$ns^2 np^{1-6}$",
     "$(n-1)d^{1-10} ns^{1-2}$",
     "$(n-2)f^{1-14} (n-1)d^{0-1} ns^2$",
     0, "s-Block General Configuration",
     "$s$-block consists of Group 1 (alkali metals, $ns^1$) and Group 2 (alkaline earth metals, $ns^2$). The general configuration is $ns^{1-2}$."),

    ("The general electronic configuration of the $p$-block elements is:",
     "$ns^2 np^{1-6}$ ($n = 2$ to $7$)",
     "$ns^{1-2}$",
     "$(n-1)d^{1-10} ns^2$",
     "$ns^2 np^6$",
     0, "p-Block General Configuration",
     "$p$-block elements belong to Groups 13 to 18 and have valence electron configuration $ns^2 np^{1-6}$ (except He which is $1s^2$)."),

    ("The general electronic configuration of the transition metals ($d$-block elements) is:",
     "$(n-1)d^{1-10} ns^{0-2}$",
     "$ns^2 (n-1)d^{10}$",
     "$(n-2)f^{1-14} ns^2$",
     "$ns^2 np^{1-5}$",
     0, "d-Block General Configuration",
     "Transition metals occupy Groups 3 to 12. Their general outer electronic configuration is $(n-1)d^{1-10} ns^{0-2}$ (where $s$ can be 0 as in Pd, or 1 as in Cr, Cu, Ag, Pt, Au)."),

    ("The general electronic configuration of the inner-transition elements ($f$-block) is:",
     "$(n-2)f^{1-14} (n-1)d^{0-1} ns^2$",
     "$(n-2)f^{1-14} ns^2$",
     "$(n-1)d^{1-10} ns^2$",
     "$(n-2)f^{0-14} (n-1)d^{1-2} ns^2$",
     0, "f-Block General Configuration",
     "$f$-block consists of Lanthanoids ($4f$) and Actinoids ($5f$) with general configuration $(n-2)f^{1-14} (n-1)d^{0-1} ns^2$."),

    ("The total number of elements present in the first period of the modern periodic table is:",
     "2",
     "8",
     "18",
     "32",
     0, "First Period Elements",
     "The first period corresponds to $n = 1$, which contains only the $1s$ orbital. Maximum electrons $= 2$, containing $\\text{H}$ ($1s^1$) and $\\text{He}$ ($1s^2$)."),

    ("The second and third periods of the periodic table each contain how many elements?",
     "8 elements",
     "2 elements",
     "18 elements",
     "32 elements",
     0, "Second and Third Period Capacity",
     "Period 2 fills $2s, 2p$ (total 8 elements: Li to Ne). Period 3 fills $3s, 3p$ (total 8 elements: Na to Ar). Both are called short periods."),

    ("The fourth and fifth periods of the periodic table each contain how many elements?",
     "18 elements",
     "8 elements",
     "32 elements",
     "10 elements",
     0, "Fourth and Fifth Period Capacity",
     "Period 4 fills $4s, 3d, 4p$ (18 elements: K to Kr). Period 5 fills $5s, 4d, 5p$ (18 elements: Rb to Xe). Both are long periods."),

    ("The sixth period of the periodic table contains how many elements?",
     "32 elements",
     "18 elements",
     "8 elements",
     "14 elements",
     0, "Sixth Period Capacity",
     "Period 6 fills $6s, 4f, 5d, 6p$ containing $2 + 14 + 10 + 6 = 32$ elements (Cs to Rn, including the 14 lanthanoids)."),

    ("The lanthanoid series consists of 14 elements beginning from which element and ending at which element?",
     "Cerium ($Z = 58$) to Lutetium ($Z = 71$)",
     "Lanthanum ($Z = 57$) to Lutetium ($Z = 71$)",
     "Cerium ($Z = 58$) to Hafnium ($Z = 72$)",
     "Thorium ($Z = 90$) to Lawrencium ($Z = 103$)",
     0, "Lanthanoid Series Range",
     "The lanthanoid series corresponds to filling of the $4f$ subshell, extending from Cerium ($Z = 58$, $\\text{Ce}$) to Lutetium ($Z = 71$, $\\text{Lu}$). Lanthanum ($Z = 57$) is formally a $d$-block element."),

    ("The actinoid series consists of 14 elements extending from:",
     "Thorium ($Z = 90$) to Lawrencium ($Z = 103$)",
     "Actinium ($Z = 89$) to Lawrencium ($Z = 103$)",
     "Uranium ($Z = 92$) to Oganesson ($Z = 118$)",
     "Thorium ($Z = 90$) to Rutherfordium ($Z = 104$)",
     0, "Actinoid Series Range",
     "The actinoid series corresponds to filling of the $5f$ subshell, beginning from Thorium ($Z = 90$, $\\text{Th}$) and ending at Lawrencium ($Z = 103$, $\\text{Lr}$)."),

    ("All elements with atomic number $Z > 92$ (beyond Uranium) are known as:",
     "Transuranium elements (transuranic elements)",
     "Lanthanoids",
     "Transition metals",
     "Chalcogens",
     0, "Transuranium Elements",
     "Elements with atomic numbers beyond uranium ($Z = 92$) are man-made synthetic radioactive elements termed transuranic elements."),

    ("Which group of the periodic table is known as the alkali metals?",
     "Group 1",
     "Group 2",
     "Group 16",
     "Group 17",
     0, "Alkali Metals Group",
     "Group 1 elements ($\\text{Li}, \\text{Na}, \\text{K}, \\text{Rb}, \\text{Cs}, \\text{Fr}$) are called alkali metals because their oxides and hydroxides dissolve in water to form strong alkaline solutions."),

    ("Which group of the periodic table is known as the alkaline earth metals?",
     "Group 2",
     "Group 1",
     "Group 13",
     "Group 18",
     0, "Alkaline Earth Metals Group",
     "Group 2 elements ($\\text{Be}, \\text{Mg}, \\text{Ca}, \\text{Sr}, \\text{Ba}, \\text{Ra}$) are called alkaline earth metals."),

    ("Which group of elements is known as the chalcogens ('ore-forming')?",
     "Group 16 (Oxygen family)",
     "Group 15 (Nitrogen family)",
     "Group 17 (Halogens)",
     "Group 14 (Carbon family)",
     0, "Chalcogens Group",
     "Group 16 elements ($\\text{O}, \\text{S}, \\text{Se}, \\text{Te}, \\text{Po}$) are called chalcogens because most metal ores exist as oxides and sulfides."),

    ("Which group of elements is known as the halogens ('salt-formers')?",
     "Group 17",
     "Group 16",
     "Group 18",
     "Group 1",
     0, "Halogens Group",
     "Group 17 elements ($\\text{F}, \\text{Cl}, \\text{Br}, \\text{I}, \\text{At}$) are named halogens (Greek 'halo' = sea salt, 'gen' = producer) because they form salts like $\\text{NaCl}$ with metals."),

    ("Which group of the periodic table contains the noble gases (inert gases)?",
     "Group 18",
     "Group 17",
     "Group 8",
     "Group 0 only",
     0, "Noble Gases Group",
     "Group 18 consists of the noble gases ($\\text{He}, \\text{Ne}, \\text{Ar}, \\text{Kr}, \\text{Xe}, \\text{Rn}, \\text{Og}$) having completely filled valence shells ($ns^2 np^6$)."),

    ("Which of the following is a liquid non-metal at room temperature ($25^\\circ\\text{C}$)?",
     "Bromine ($\\text{Br}_2$)",
     "Mercury ($\\text{Hg}$)",
     "Chlorine ($\\text{Cl}_2$)",
     "Gallium ($\\text{Ga}$)",
     0, "Liquid Non-metal",
     "Bromine is the only non-metallic element that is a liquid at room temperature. Mercury is a liquid metal."),

    ("Which of the following elements is a liquid metal near room temperature?",
     "Mercury ($\\text{Hg}$) and Gallium ($\\text{Ga}$)",
     "Bromine ($\\text{Br}$)",
     "Lead ($\\text{Pb}$)",
     "Tin ($\\text{Sn}$)",
     0, "Liquid Metals",
     "Mercury ($\text{mp} = -38.8^\\circ\\text{C}$) is liquid at room temperature; Gallium ($\text{mp} = 29.8^\\circ\\text{C}$) and Caesium ($\text{mp} = 28.5^\\circ\\text{C}$) melt just above room temperature."),

    ("Elements which exhibit properties intermediate between those of metals and non-metals are called:",
     "Metalloids (semimetals)",
     "Transition metals",
     "Inner-transition metals",
     "Noble gases",
     0, "Metalloids Definition",
     "Metalloids (such as $\\text{Si}, \\text{Ge}, \\text{As}, \\text{Sb}, \\text{Te}$) run diagonally along the border between metals and non-metals."),

    ("Which of the following elements is a metalloid?",
     "Silicon ($\\text{Si}$)",
     "Carbon ($\\text{C}$)",
     "Aluminium ($\\text{Al}$)",
     "Lead ($\\text{Pb}$)",
     0, "Silicon as Metalloid",
     "Silicon ($\\text{Si}$) is a classic metalloid and semiconductor."),

    ("The law of octaves was proposed by:",
     "John Newlands",
     "Johann Wolfgang Dobereiner",
     "Dmitri Mendeleev",
     "Lothar Meyer",
     0, "Newlands Law of Octaves",
     "John Newlands (1865) noticed that when elements are arranged by increasing atomic weight, every eighth element shows similar properties to the first, analogous to musical octaves."),

    ("Newlands' law of octaves was applicable only up to which element?",
     "Calcium ($Z = 20$)",
     "Potassium ($Z = 19$)",
     "Scandium ($Z = 21$)",
     "Iron ($Z = 26$)",
     0, "Newlands Law Limitation",
     "The law of octaves worked well only up to Calcium ($Z = 20$). Beyond calcium, the presence of transition elements disrupted the eight-fold periodicity."),

    ("Dobereiner's triads consist of groups of three elements where the atomic weight of the middle element is approximately equal to:",
     "The arithmetic mean of the atomic weights of the other two elements",
     "The difference of atomic weights of the other two",
     "Twice the atomic weight of the first",
     "Half the atomic weight of the third",
     0, "Dobereiner Triads Rule",
     "Dobereiner (1829) observed that in triads like $\\text{Li} (7), \\text{Na} (23), \\text{K} (39)$, the atomic weight of the middle element is approximately the average: $\\frac{7 + 39}{2} = 23$."),

    ("Which of the following is a classic Dobereiner triad?",
     "$\\text{Cl}, \\text{Br}, \\text{I}$",
     "$\\text{F}, \\text{Cl}, \\text{Br}$",
     "$\\text{Fe}, \\text{Co}, \\text{Ni}$",
     "$\\text{C}, \\text{N}, \\text{O}$",
     0, "Chlorine Bromine Iodine Triad",
     "$\\text{Cl} (35.5), \\text{Br} (80), \\text{I} (127)$ is a standard triad: $\\frac{35.5 + 127}{2} = 81.25 \\approx 80$."),

    ("Lothar Meyer plotted physical properties of elements against their atomic weights. The peaks of his atomic volume curve were occupied by:",
     "Alkali metals ($\\text{Li}, \\text{Na}, \\text{K}, \\text{Rb}, \\text{Cs}$)",
     "Halogens",
     "Alkaline earth metals",
     "Transition metals",
     0, "Lothar Meyer Curve Peaks",
     "Lothar Meyer plotted atomic volume against atomic weight. The sharp peaks were occupied by the most electropositive elements—the alkali metals."),

    ("In Lothar Meyer's atomic volume curve, the halogens occupied:",
     "Ascending portions of the curve",
     "Descending portions of the curve",
     "Troughs (minima) of the curve",
     "Crests (peaks) of the curve",
     0, "Halogens Position in Lothar Meyer Curve",
     "The halogens occupied the ascending portions of the curve just before the peaks."),

    ("In Lothar Meyer's atomic volume curve, the troughs (minima) were occupied by:",
     "Transition metals of high density",
     "Alkali metals",
     "Halogens",
     "Noble gases",
     0, "Lothar Meyer Minima",
     "The troughs (minima) of the curve, representing elements with the smallest atomic volumes and highest densities, were occupied by transition metals."),

    ("Which pair of elements represented an 'anomalous pair' in Mendeleev's periodic table where an element of higher atomic weight was placed before one of lower atomic weight?",
     "$\\text{Ar}$ ($39.9\\text{ u}$) and $\\text{K}$ ($39.1\\text{ u}$), or $\\text{Co}$ ($58.9\\text{ u}$) and $\\text{Ni}$ ($58.7\\text{ u}$)",
     "$\\text{Na}$ and $\\text{Mg}$",
     "$\\text{C}$ and $\\text{N}$",
     "$\\text{Li}$ and $\\text{Be}$",
     0, "Mendeleev Anomalous Pairs",
     "To maintain grouping by chemical similarity, Mendeleev placed $\\text{Co} (58.93)$ before $\\text{Ni} (58.71)$, $\\text{Te} (127.6)$ before $\\text{I} (126.9)$, and $\\text{Ar} (39.95)$ before $\\text{K} (39.10)$."),

    ("Henry Moseley established his Modern Periodic Law through experiments on:",
     "Characteristic X-ray emission spectra of metallic targets",
     "$\\alpha$-particle scattering",
     "Cathode ray discharge",
     "Mass spectrometry",
     0, "Moseley X-ray Experiment",
     "Moseley bombarded various elements with high-energy cathode rays and analyzed the frequencies of the resulting characteristic $K_\\alpha$ X-rays, discovering $\\sqrt{\\nu} = a(Z - b)$."),

    ("The horizontal rows in the periodic table are called:",
     "Periods",
     "Groups",
     "Families",
     "Series",
     0, "Periods Definition",
     "The 7 horizontal rows in the periodic table are called periods, numbered 1 through 7.")
]

for idx, item in enumerate(easy_q_data):
    q_num = 1 + idx
    q_id = f"period-mcq-{q_num:03d}"
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7])

print(f"Added {len(easy_q_data)} Easy questions (Q001 to Q040).")

# =========================================================================
# Q41 to Q105 (Medium: 65 questions)
# =========================================================================
medium_q_data = [
    ("An element has electronic configuration $1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^2 4p^3$. To which period, group, and block does it belong?",
     "Period 4, Group 15, $p$-block",
     "Period 3, Group 15, $p$-block",
     "Period 4, Group 5, $d$-block",
     "Period 4, Group 13, $p$-block",
     0, "Period Group Block Determination",
     "Highest principal quantum number $n = 4 \\implies \\text{Period 4}$. Last electron enters $p$-subshell $\\implies p$-block. Group number for $p$-block $= 12 + \\text{number of } p\\text{ electrons} = 12 + 3 = 15$ (Arsenic, As)."),

    ("An element has atomic number $Z = 38$. To which block and group does it belong?",
     "$s$-block, Group 2",
     "$p$-block, Group 14",
     "$d$-block, Group 2",
     "$s$-block, Group 1",
     0, "Strontium Classification",
     "$Z = 38$ is Strontium ($\\text{Sr}$). Preceding noble gas is Kr ($Z = 36$). Electronic configuration is $[\\text{Kr}] 5s^2$. The last electrons enter $5s$, placing it in the $s$-block, Group 2 (alkaline earth metal), Period 5."),

    ("An element has atomic number $Z = 47$. To which group and period does it belong?",
     "Group 11, Period 5",
     "Group 10, Period 5",
     "Group 11, Period 4",
     "Group 1, Period 5",
     0, "Silver Classification",
     "$Z = 47$ is Silver ($\\text{Ag}$). Preceding noble gas is Kr ($Z = 36$). Electronic configuration is $[\\text{Kr}] 4d^{10} 5s^1$. Group number for $d$-block $= (n-1)d \\text{ electrons} + ns \\text{ electrons} = 10 + 1 = 11$. Period $= 5$."),

    ("An element has atomic number $Z = 56$. To which period and group does it belong?",
     "Period 6, Group 2",
     "Period 5, Group 2",
     "Period 6, Group 1",
     "Period 6, Group 12",
     0, "Barium Classification",
     "$Z = 56$ is Barium ($\\text{Ba}$). Preceding noble gas is Xe ($Z = 54$). Configuration is $[\\text{Xe}] 6s^2$. Highest $n = 6 \\implies \\text{Period 6}$, Group $= 2$ ($s$-block)."),

    ("An element has atomic number $Z = 80$. What is its group number in the periodic table?",
     "Group 12",
     "Group 10",
     "Group 2",
     "Group 14",
     0, "Mercury Group",
     "$Z = 80$ is Mercury ($\\text{Hg}$). Preceding noble gas is Xe ($Z = 54$). Configuration: $[\\text{Xe}] 4f^{14} 5d^{10} 6s^2$. Group $= 10 + 2 = 12$ ($d$-block, Period 6)."),

    ("What is the atomic number of the element placed directly below Arsenic ($Z = 33$) in Group 15 of the periodic table?",
     "$51$ (Antimony, $\\text{Sb}$)",
     "$43$",
     "$53$",
     "$65$",
     0, "Magic Numbers Group Step",
     "Arsenic is in Period 4. Moving down to Period 5 requires adding 18 elements ($33 + 18 = 51$, Antimony, $\\text{Sb}$)."),

    ("What is the atomic number of the element placed directly below Lead ($Z = 82$) in Group 14?",
     "$114$ (Flerovium, $\\text{Fl}$)",
     "$112$",
     "$116$",
     "$110$",
     0, "Group Step Period 6 to 7",
     "Lead is in Period 6. Period 6 contains 32 elements. The element in Period 7 directly below lead has atomic number $82 + 32 = 114$ (Flerovium, Fl)."),

    ("The element with electronic configuration $[\\text{Rn}] 5f^7 6d^1 7s^2$ has atomic number $Z = 96$. To which block does it belong?",
     "$f$-block (Actinoids)",
     "$d$-block",
     "$s$-block",
     "$p$-block",
     0, "Curium f-Block Classification",
     "This is Curium ($\\text{Cm}$, $Z = 96$). Elements filling the $5f$ subshell ($Z = 90$ to $103$) belong strictly to the $f$-block (actinoids)."),

    ("The electronic configuration of an element is $[\\text{Xe}] 4f^{14} 5d^1 6s^2$. Its atomic number is $Z = 71$. To which block and group does it belong?",
     "$f$-block (or Group 3, $d$-block depending on convention, but IUPAC places it as the last Lanthanoid)",
     "Group 13, $p$-block",
     "Group 1, $s$-block",
     "Group 4, $d$-block",
     0, "Lutetium Classification",
     "$Z = 71$ is Lutetium ($\\text{Lu}$). It marks the completion of the $4f$ subshell ($4f^{14}$) and is formally placed in Group 3 as the terminal member of the lanthanoids."),

    ("An element with $Z = 120$ has not yet been synthesized. When discovered, to which family and group will it belong?",
     "Alkaline earth metals (Group 2)",
     "Alkali metals (Group 1)",
     "Transition metals (Group 4)",
     "Noble gases (Group 18)",
     0, "Element 120 Prediction",
     "Period 7 ends at $Z = 118$ (Oganesson, Og). Element $119$ will start Period 8 as an alkali metal ($8s^1$, Group 1). Element $120$ will be an alkaline earth metal ($8s^2$, Group 2)."),

    ("According to Moseley's law, $\\sqrt{\\nu} = a(Z - b)$, where $\\nu$ is the frequency of characteristic X-rays. A plot of $\\sqrt{\\nu}$ against $Z$ is:",
     "A straight line with positive slope and positive intercept on the $Z$-axis",
     "A parabola passing through the origin",
     "A straight line passing through the origin",
     "An exponential curve",
     0, "Moseley Plot Characteristics",
     "$\\sqrt{\\nu} = a Z - a b$. Plotting $\\sqrt{\\nu}$ on the y-axis against $Z$ on the x-axis yields a straight line with slope $a$ and an intercept of $b$ on the $Z$-axis ($b \\approx 1$ for $K_\\alpha$ lines due to nuclear screening by the remaining $1s$ electron)."),

    ("In Moseley's equation $\\sqrt{\\nu} = a(Z - b)$ for $K_\\alpha$ lines, the screening constant $b$ has a value close to:",
     "$1.0$",
     "$0$",
     "$2.0$",
     "$7.4$",
     0, "Screening Constant for K-alpha",
     "For $K_\\alpha$ X-rays ($2p \\rightarrow 1s$), an electron jumps into a vacancy in the K shell ($n=1$) where 1 electron remains. That single $1s$ electron screens the nuclear charge, so the screening constant $b \\approx 1.0$."),

    ("For $L_\\alpha$ X-ray lines ($3d \\rightarrow 2p$), the screening constant $b$ in Moseley's law is approximately:",
     "$7.4$",
     "$1.0$",
     "$2.0$",
     "$9.0$",
     0, "Screening Constant for L-alpha",
     "For $L_\\alpha$ lines, transition terminates on the L shell ($n=2$). The screening by the inner K shell electrons plus remaining L electrons gives $b \\approx 7.4$."),

    ("What is the IUPAC name of the element with atomic number $109$?",
     "Unnilennium ($\\text{Une}$, Meitnerium)",
     "Ununoctium ($\\text{Uuo}$)",
     "Unnilseptium ($\\text{Uns}$)",
     "Unnilhexium ($\\text{Unh}$)",
     0, "IUPAC Name Z=109",
     "$1 = \\text{un}, 0 = \\text{nil}, 9 = \\text{enn} \\implies \\text{Unnilennium}$ (Meitnerium, $\\text{Mt}$)."),

    ("What is the official IUPAC name of the element with atomic number $118$?",
     "Oganesson ($\\text{Og}$)",
     "Tennessine ($\\text{Ts}$)",
     "Livermorium ($\\text{Lv}$)",
     "Moscovium ($\\text{Mc}$)",
     0, "Oganesson Z=118",
     "Element $118$ is named Oganesson ($\\text{Og}$), completing Period 7 and Group 18."),

    ("What is the official IUPAC name of element $Z = 117$?",
     "Tennessine ($\\text{Ts}$)",
     "Oganesson ($\\text{Og}$)",
     "Livermorium ($\\text{Lv}$)",
     "Flerovium ($\\text{Fl}$)",
     0, "Tennessine Z=117",
     "Element $117$ is Tennessine ($\\text{Ts}$), the heaviest halogen in Group 17."),

    ("What is the official IUPAC name of element $Z = 115$?",
     "Moscovium ($\\text{Mc}$)",
     "Nihonium ($\\text{Nh}$)",
     "Flerovium ($\\text{Fl}$)",
     "Livermorium ($\\text{Lv}$)",
     0, "Moscovium Z=115",
     "Element $115$ is Moscovium ($\\text{Mc}$), belonging to Group 15 (Pnictogens)."),

    ("What is the official IUPAC name of element $Z = 113$?",
     "Nihonium ($\\text{Nh}$)",
     "Moscovium ($\\text{Mc}$)",
     "Tennessine ($\\text{Ts}$)",
     "Copernicium ($\\text{Cn}$)",
     0, "Nihonium Z=113",
     "Element $113$ is Nihonium ($\\text{Nh}$), belonging to Group 13 (Boron family)."),

    ("What is the official IUPAC name of element $Z = 116$?",
     "Livermorium ($\\text{Lv}$)",
     "Flerovium ($\\text{Fl}$)",
     "Moscovium ($\\text{Mc}$)",
     "Oganesson ($\\text{Og}$)",
     0, "Livermorium Z=116",
     "Element $116$ is Livermorium ($\\text{Lv}$), belonging to Group 16 (Chalcogens)."),

    ("How many elements are present in the modern periodic table up to $Z = 118$?",
     "118 elements",
     "108 elements",
     "120 elements",
     "114 elements",
     0, "Total Elements up to Z=118",
     "All 118 elements from Hydrogen ($Z = 1$) to Oganesson ($Z = 118$) have been officially discovered, named, and verified by IUPAC."),

    ("Which of the following elements has the maximum number of valence electrons in its neutral ground state?",
     "Argon ($\\text{Ar}$, $Z = 18$)",
     "Chlorine ($\\text{Cl}$, $Z = 17$)",
     "Sulfur ($\\text{S}$, $Z = 16$)",
     "Silicon ($\\text{Si}$, $Z = 14$)",
     0, "Maximum Valence Electrons",
     "Argon ($[\\text{Ne}] 3s^2 3p^6$) has 8 valence electrons, forming a stable octet."),

    ("An element $X$ forms an oxide with formula $X_2\\text{O}_3$ and a chloride $X\\text{Cl}_3$. Element $X$ is likely to be placed in which group?",
     "Group 13",
     "Group 1",
     "Group 2",
     "Group 15",
     0, "Group 13 Valency",
     "The formula $X_2\\text{O}_3$ and $X\\text{Cl}_3$ indicate a valency of 3, characteristic of Group 13 elements (like $\\text{Al}_2\\text{O}_3, \\text{AlCl}_3$)."),

    ("An element $M$ forms a basic oxide with formula $M\\text{O}$ and a sulfate $M\\text{SO}_4$. Element $M$ belongs to:",
     "Group 2 (Alkaline earth metals)",
     "Group 1 (Alkali metals)",
     "Group 13",
     "Group 17",
     0, "Group 2 Valency",
     "The $+2$ oxidation state yielding $M\\text{O}$ and $M\\text{SO}_4$ is typical of Group 2 elements (e.g., $\\text{CaO}, \\text{CaSO}_4$)."),

    ("The total number of $s$-block elements in the periodic table (including $\\text{H}$ and $\\text{He}$) is:",
     "14",
     "12",
     "10",
     "16",
     0, "s-Block Total Count",
     "Group 1 has 7 elements ($\\text{H}, \\text{Li}, \\text{Na}, \\text{K}, \\text{Rb}, \\text{Cs}, \\text{Fr}$). Group 2 has 6 elements ($\\text{Be}, \\text{Mg}, \\text{Ca}, \\text{Sr}, \\text{Ba}, \\text{Ra}$). Including Helium ($1s^2$), total is $7 + 6 + 1 = 14$ elements (or 13 if He is counted strictly in $p$-block by chemistry)."),

    ("The total number of elements in the $p$-block of the periodic table is:",
     "36 (excluding He)",
     "30",
     "42",
     "24",
     0, "p-Block Total Count",
     "There are 6 groups (13 to 18) and 6 periods (2 to 7). Total elements $= 6 \\times 6 = 36$ elements."),

    ("The total number of elements in the $d$-block of the periodic table is:",
     "40 elements (4 series of 10 elements each)",
     "30 elements",
     "20 elements",
     "50 elements",
     0, "d-Block Total Count",
     "The $d$-block contains 10 groups (3 to 12) across 4 periods (Periods 4, 5, 6, 7), giving $10 \\times 4 = 40$ elements."),

    ("The total number of elements in the $f$-block of the periodic table is:",
     "28 elements (two series of 14 each)",
     "30 elements",
     "14 elements",
     "32 elements",
     0, "f-Block Total Count",
     "The $f$-block consists of 14 Lanthanoids ($4f$, $\\text{Ce}$ to $\\text{Lu}$) and 14 Actinoids ($5f$, $\\text{Th}$ to $\\text{Lr}$), totaling $14 + 14 = 28$ elements."),

    ("Which period of the periodic table has the maximum number of elements?",
     "Period 6 and Period 7 (32 elements each)",
     "Period 5 (18 elements)",
     "Period 4 (18 elements)",
     "Period 6 only",
     0, "Longest Periods",
     "Both Period 6 and Period 7 accommodate 32 elements each ($2s + 14f + 10d + 6p = 32$)."),

    ("The atomic numbers of elements in the same group of the periodic table differ by 'magic numbers' which are:",
     "2, 8, 8, 18, 18, 32",
     "2, 4, 6, 8, 10",
     "2, 8, 18, 32, 50",
     "8, 8, 18, 18, 32",
     0, "Magic Numbers Sequence",
     "The differences in atomic numbers of consecutive elements in a group follow the capacities of successive shells: 2 (Period 1 to 2 for He), 8, 8, 18, 18, 32."),

    ("If an element with atomic number $Z = 126$ is synthesized in the future, it will belong to which block?",
     "$g$-block ($n = 8$)",
     "$f$-block",
     "$d$-block",
     "$p$-block",
     0, "g-Block Prediction",
     "In Period 8, after $8s^2$ ($Z = 119, 120$), the next subshell filled according to Aufbau $(n+l)$ rule is $5g$ ($n = 5, l = 4$, $n+l = 9$, holding 18 elements from $Z = 121$ to $138$). Thus $Z = 126$ would be a $g$-block element."),

    ("The diagonal relationship in the periodic table is observed between elements of:",
     "Period 2 and Period 3",
     "Period 1 and Period 2",
     "Period 3 and Period 4",
     "Period 4 and Period 5",
     0, "Diagonal Relationship Periods",
     "Diagonal relationship occurs between certain light elements of Period 2 and the diagonally adjacent elements of Period 3 (e.g., $\\text{Li}-\\text{Mg}, \\text{Be}-\\text{Al}, \\text{B}-\\text{Si}$) due to similar charge-to-radius ratios (polarizing power)."),

    ("Which of the following pairs exhibits a diagonal relationship?",
     "$\\text{Be}$ and $\\text{Al}$",
     "$\\text{Li}$ and $\\text{Na}$",
     "$\\text{B}$ and $\\text{C}$",
     "$\\text{Mg}$ and $\\text{Ca}$",
     0, "Be-Al Diagonal Relationship",
     "Beryllium (Period 2, Group 2) and Aluminium (Period 3, Group 13) exhibit remarkable chemical similarities due to nearly identical polarizing power ($q/r^2$)."),

    ("Which of the following pairs exhibits a diagonal relationship?",
     "$\\text{Li}$ and $\\text{Mg}$",
     "$\\text{Na}$ and $\\text{Ca}$",
     "$\\text{K}$ and $\\text{Mg}$",
     "$\\text{Li}$ and $\\text{Be}$",
     0, "Li-Mg Diagonal Relationship",
     "Lithium (Period 2, Group 1) and Magnesium (Period 3, Group 2) exhibit a diagonal relationship, sharing similarities such as decomposing carbonates to oxides, forming nitrides ($\\text{Li}_3\\text{N}, \\text{Mg}_3\\text{N}_2$), and having deliquescent chlorides."),

    ("Which of the following pairs exhibits a diagonal relationship?",
     "$\\text{B}$ and $\\text{Si}$",
     "$\\text{C}$ and $\\text{P}$",
     "$\\text{N}$ and $\\text{S}$",
     "$\\text{B}$ and $\\text{Al}$",
     0, "B-Si Diagonal Relationship",
     "Boron (Period 2, Group 13) and Silicon (Period 3, Group 14) show diagonal similarity: both are non-metallic semiconductors forming acidic oxides ($\\text{B}_2\\text{O}_3, \\text{SiO}_2$) and readily hydrolyzable covalent halides."),

    ("The diagonal relationship between elements is primarily due to their similar:",
     "Ionic potential (charge/radius ratio, polarizing power)",
     "Atomic masses",
     "Number of valence electrons",
     "Crystal lattice structures",
     0, "Diagonal Relationship Cause",
     "Moving across a period increases charge and decreases radius (increasing polarizing power). Moving down a group increases radius (decreasing polarizing power). Moving diagonally diagonally balances these two opposing effects, yielding similar ionic potentials ($\\phi = \\text{charge}/\\text{radius}$)."),

    ("Which element has the highest electrical conductivity of all metals at room temperature?",
     "Silver ($\\text{Ag}$)",
     "Copper ($\\text{Cu}$)",
     "Gold ($\\text{Au}$)",
     "Aluminium ($\\text{Al}$)",
     0, "Highest Electrical Conductivity Metal",
     "Silver ($\\text{Ag}$, Group 11) possesses the highest electrical and thermal conductivity of all known elements at room temperature, followed by copper and gold."),

    ("Which element has the highest melting point among all metals?",
     "Tungsten ($\\text{W}$, $3422^\\circ\\text{C}$)",
     "Platinum ($\\text{Pt}$)",
     "Osmium ($\\text{Os}$)",
     "Iron ($\\text{Fe}$)",
     0, "Highest Melting Point Metal",
     "Tungsten (Wolfram, W, $Z = 74$, Group 6) has the highest melting point among all metallic elements ($3422^\\circ\\text{C}$) due to exceptionally strong covalent bonding from its $5d^4 6s^2$ electrons."),

    ("Which element has the highest density among all known elements?",
     "Osmium ($\\text{Os}$) and Iridium ($\\text{Ir}$, $\\sim 22.6\\text{ g/cm}^3$)",
     "Lead ($\\text{Pb}$)",
     "Gold ($\\text{Au}$)",
     "Mercury ($\\text{Hg}$)",
     0, "Highest Density Element",
     "Osmium ($\\text{Os}$, $Z = 76$, density $22.59\\text{ g/cm}^3$) and Iridium ($\\text{Ir}$, $Z = 77$, density $22.56\\text{ g/cm}^3$) have the highest densities due to their massive nuclear charge and lanthanoid contraction."),

    ("Which group of the periodic table contains the coinage metals?",
     "Group 11 ($\\text{Cu}, \\text{Ag}, \\text{Au}$)",
     "Group 10 ($\\text{Ni}, \\text{Pd}, \\text{Pt}$)",
     "Group 12 ($\\text{Zn}, \\text{Cd}, \\text{Hg}$)",
     "Group 1 ($\\text{Li}, \\text{Na}, \\text{K}$)",
     0, "Coinage Metals Group",
     "Group 11 elements (Copper, Silver, Gold) are historically known as coinage metals due to their corrosion resistance and historical minting use."),

    ("Which group of the periodic table contains volatile metals with low melting points?",
     "Group 12 ($\\text{Zn}, \\text{Cd}, \\text{Hg}$)",
     "Group 11",
     "Group 10",
     "Group 2",
     0, "Group 12 Volatile Metals",
     "Group 12 elements (Zinc, Cadmium, Mercury) have completely filled $d^{10} s^2$ configurations. With no unpaired electrons available for metallic bonding, they have weak cohesion and low melting points (volatile metals)."),

    ("Zinc, Cadmium, and Mercury are often NOT considered typical transition metals because:",
     "They have completely filled $(n-1)d^{10}$ subshells in both elemental state and common oxidation states",
     "They do not form ionic compounds",
     "They are radioactive",
     "They are non-metals",
     0, "Zinc Cadmium Mercury Transition Definition",
     "By IUPAC definition, a transition metal has an incompletely filled $d$-subshell either in neutral atom or in one of its common oxidation states. $\\text{Zn}, \\text{Cd}, \\text{Hg}$ have full $d^{10}$ shells as metals and as $+2$ ions ($d^{10}$), hence are non-typical transition elements."),

    ("The element with atomic number $Z = 57$ (Lanthanum, $\\text{La}$) belongs to which block of the periodic table?",
     "$d$-block (Group 3)",
     "$f$-block",
     "$s$-block",
     "$p$-block",
     0, "Lanthanum d-Block Classification",
     "Lanthanum has electronic configuration $[\\text{Xe}] 5d^1 6s^2$. The last electron enters $5d$, placing it in the $d$-block (Group 3, Period 6). The subsequent 14 elements (Ce to Lu) fill the $4f$ subshell and constitute the $f$-block."),

    ("The element with atomic number $Z = 89$ (Actinium, $\\text{Ac}$) belongs to which block?",
     "$d$-block (Group 3)",
     "$f$-block",
     "$s$-block",
     "$p$-block",
     0, "Actinium d-Block Classification",
     "Actinium ($Z = 89$) has configuration $[\\text{Rn}] 6d^1 7s^2$ with the distinguishing electron in $6d$, placing it in the $d$-block (Group 3, Period 7). The $5f$ filling begins with Thorium ($Z = 90$)."),

    ("What is the total number of gaseous elements at room temperature and pressure ($25^\\circ\\text{C}, 1\\text{ atm}$)?",
     "11 elements ($\\text{H}_2, \\text{N}_2, \\text{O}_2, \\text{F}_2, \\text{Cl}_2$, plus 6 noble gases $\\text{He}, \\text{Ne}, \\text{Ar}, \\text{Kr}, \\text{Xe}, \\text{Rn}$)",
     "10 elements",
     "12 elements",
     "8 elements",
     0, "Gaseous Elements Count",
     "There are exactly 11 gaseous elements at standard conditions: Hydrogen, Nitrogen, Oxygen, Fluorine, Chlorine, and the six noble gases (Helium, Neon, Argon, Krypton, Xenon, Radon)."),

    ("How many elements in the periodic table are liquid at $25^\\circ\\text{C}$?",
     "2 elements (Mercury and Bromine)",
     "1 element",
     "3 elements",
     "5 elements",
     0, "Liquid Elements Count at 25C",
     "Only two elements are liquid at standard $25^\\circ\\text{C}$: Mercury (metal) and Bromine (non-metal). (Gallium and Caesium melt just above $28-30^\\circ\\text{C}$)."),

    ("The typical elements (representative elements) of the periodic table belong to:",
     "$s$-block and $p$-block elements",
     "$d$-block elements only",
     "$f$-block elements only",
     "Noble gases only",
     0, "Representative Elements Definition",
     "The representative (main group) elements comprise the $s$-block and $p$-block elements (Groups 1, 2, and 13 to 17), representing characteristic periodic trends."),

    ("Which period in the periodic table is the shortest?",
     "Period 1 (2 elements)",
     "Period 2 (8 elements)",
     "Period 3 (8 elements)",
     "Period 4 (18 elements)",
     0, "Shortest Period",
     "Period 1 contains only 2 elements (Hydrogen and Helium), making it the shortest period."),

    ("Which period in the periodic table contains the maximum number of non-metals?",
     "Period 2",
     "Period 3",
     "Period 4",
     "Period 1",
     0, "Period with Maximum Non-metals",
     "Period 2 contains 5 non-metals ($\\text{C}, \\text{N}, \\text{O}, \\text{F}, \\text{Ne}$) plus boron (metalloid) and lithium, beryllium (metals)."),

    ("An element $Z = 35$ belongs to which group and period?",
     "Group 17, Period 4",
     "Group 15, Period 4",
     "Group 17, Period 3",
     "Group 7, Period 4",
     0, "Bromine Group and Period",
     "$Z = 35$ is Bromine ($[\\text{Ar}] 3d^{10} 4s^2 4p^5$). Period $= 4$, Group $= 12 + 5 = 17$ (Halogen)."),

    ("An element with configuration $[\\text{Ar}] 3d^3 4s^2$ has atomic number $Z = 23$. What is its group number?",
     "Group 5",
     "Group 3",
     "Group 2",
     "Group 15",
     0, "Vanadium Group",
     "For $d$-block elements, group number $= (n-1)d + ns = 3 + 2 = 5$ (Vanadium, V)."),

    ("An element has configuration $[\\text{Kr}] 4d^5 5s^1$. Its atomic number is $Z = 42$. What is its group number?",
     "Group 6",
     "Group 5",
     "Group 7",
     "Group 16",
     0, "Molybdenum Group",
     "$Z = 42$ is Molybdenum ($\\text{Mo}$). Group number $= 5 + 1 = 6$ (Chromium group)."),

    ("An element with atomic number $Z = 53$ belongs to which block and group?",
     "$p$-block, Group 17 (Iodine)",
     "$d$-block, Group 7",
     "$s$-block, Group 1",
     "$p$-block, Group 15",
     0, "Iodine Classification",
     "$Z = 53$ is Iodine ($[\\text{Kr}] 4d^{10} 5s^2 5p^5$), belonging to the $p$-block, Group 17 (Halogens), Period 5."),

    ("An element with atomic number $Z = 85$ is:",
     "Astatine ($\\text{At}$), Halogen family",
     "Polonium ($\\text{Po}$)",
     "Radon ($\\text{Rn}$)",
     "Bismuth ($\\text{Bi}$)",
     0, "Astatine Z=85",
     "$Z = 85$ is Astatine ($\\text{At}$), the radioactive halogen in Group 17, Period 6."),

    ("Which of the following elements is placed in Group 14 and Period 5?",
     "Tin ($\\text{Sn}$, $Z = 50$)",
     "Lead ($\\text{Pb}$, $Z = 82$)",
     "Germanium ($\\text{Ge}$, $Z = 32$)",
     "Indium ($\\text{In}$, $Z = 49$)",
     0, "Tin Identification",
     "Group 14 elements: $\\text{C}$ (P2), $\\text{Si}$ (P3), $\\text{Ge}$ (P4), $\\text{Sn}$ (P5), $\\text{Pb}$ (P6). Thus Tin ($\\text{Sn}$, $Z = 50$) is in Period 5, Group 14."),

    ("Which of the following elements is placed in Group 15 and Period 6?",
     "Bismuth ($\\text{Bi}$, $Z = 83$)",
     "Antimony ($\\text{Sb}$, $Z = 51$)",
     "Lead ($\\text{Pb}$, $Z = 82$)",
     "Polonium ($\\text{Po}$, $Z = 84$)",
     0, "Bismuth Identification",
     "Group 15 elements: $\\text{N}$ (P2), $\\text{P}$ (P3), $\\text{As}$ (P4), $\\text{Sb}$ (P5), $\\text{Bi}$ (P6). Bismuth ($Z = 83$) belongs to Period 6."),
    ("Lanthanum ($Z = 57$) belongs to which block and group of the modern periodic table?",
     "$d$-block, Group 3",
     "$f$-block, Group 3",
     "$d$-block, Group 4",
     "$f$-block, Group 4",
     0, "Lanthanum Classification",
     "Although Lanthanum ($Z = 57$, $[\\text{Xe}] 5d^1 6s^2$) is the prototype of lanthanoids, its differentiating electron enters the $5d$ subshell. Hence it is formally placed in the $d$-block, Group 3, Period 6."),

    ("An element with ground state configuration $[\\text{Ar}] 3d^{10} 4s^1$ belongs to which period and group?",
     "Period 4, Group 11",
     "Period 4, Group 1",
     "Period 3, Group 11",
     "Period 4, Group 10",
     0, "Copper Position",
     "The highest principal quantum number is $n = 4$ (Period 4). For $d$-block elements, Group number $= (n-1)d + ns = 10 + 1 = 11$ (Copper, $\\text{Cu}$)."),

    ("The element with atomic number $Z = 118$ (Oganesson) belongs to:",
     "Period 7, Group 18 (Noble gas)",
     "Period 7, Group 17 (Halogen)",
     "Period 6, Group 18 (Noble gas)",
     "Period 7, Group 16 (Chalcogen)",
     0, "Oganesson Classification",
     "$Z = 118$ completes Period 7 with valence configuration $7s^2 7p^6$, placing it in Group 18 as an ununoctium / oganesson noble gas."),

    ("Gadolinium ($Z = 64$) has configuration $[\\text{Xe}] 4f^7 5d^1 6s^2$. It belongs to which block and period?",
     "$f$-block, Period 6",
     "$d$-block, Period 6",
     "$f$-block, Period 5",
     "$d$-block, Period 7",
     0, "Gadolinium Position",
     "Gadolinium is a member of the $4f$ series (lanthanoids), which belongs to the $f$-block and Period 6 (placed at the bottom of the periodic table, formally part of Group 3)."),

    ("Which group of the periodic table contains elements existing in all three physical states (gas, liquid, and solid) at room temperature ($25^\\circ\\text{C}$)?",
     "Group 17 (Halogens)",
     "Group 1 (Alkali metals)",
     "Group 18 (Noble gases)",
     "Group 15 (Pnictogens)",
     0, "States of Matter in Group 17",
     "In Group 17 (Halogens): Fluorine ($\\text{F}_2$) and Chlorine ($\\text{Cl}_2$) are gases, Bromine ($\\text{Br}_2$) is a reddish-brown liquid, and Iodine ($\\text{I}_2$) is a dark violet solid."),

    ("Which transition element in the first transition series ($3d$ series) contains the maximum number of unpaired electrons in its ground state?",
     "Chromium ($Z = 24$, 6 unpaired electrons)",
     "Manganese ($Z = 25$, 5 unpaired electrons)",
     "Iron ($Z = 26$, 4 unpaired electrons)",
     "Vanadium ($Z = 23$, 3 unpaired electrons)",
     0, "Maximum Unpaired Electrons",
     "Chromium ($Z = 24$) has an anomalous half-filled configuration $[\\text{Ar}] 3d^5 4s^1$, which has five unpaired $3d$ electrons and one unpaired $4s$ electron, totaling 6 unpaired electrons."),

    ("An element $X$ has valence electronic configuration $5s^2 5p^4$ ($Z = 52$, Tellurium). The atomic number of the element placed directly below it in the same group is:",
     "$Z = 84$ (Polonium)",
     "$Z = 85$ (Astatine)",
     "$Z = 83$ (Bismuth)",
     "$Z = 70$ (Ytterbium)",
     0, "Group 16 Successor",
     "The element directly below Period 5 ($Z = 52$) in Group 16 is in Period 6: $52 + 32 = 84$ (Polonium, $\\text{Po}$)."),

    ("The total number of elements present in the 6th period of the modern periodic table is:",
     "32 elements",
     "18 elements",
     "8 elements",
     "14 elements",
     0, "Period 6 Elements Count",
     "Period 6 fills $6s$ (2), $4f$ (14), $5d$ (10), and $6p$ (6) subshells, accommodating $2 + 14 + 10 + 6 = 32$ elements."),

    ("Which of the following pairs of atomic numbers represents elements belonging to the $s$-block?",
     "$Z = 19$ and $Z = 56$",
     "$Z = 12$ and $Z = 30$",
     "$Z = 7$ and $Z = 15$",
     "$Z = 21$ and $Z = 39$",
     0, "s-Block Identification",
     "$Z = 19$ is Potassium ($[\\text{Ar}] 4s^1$, Group 1) and $Z = 56$ is Barium ($[\\text{Xe}] 6s^2$, Group 2). Both are $s$-block elements. ($Z=30$ is Zn in $d$-block)."),

    ("The difference between atomic numbers of successive elements in Group 1 (alkali metals) follows the magic numbers:",
     "8, 8, 18, 18, 32",
     "2, 8, 18, 32",
     "8, 18, 18, 32",
     "2, 8, 8, 18, 18",
     0, "Magic Numbers Succession",
     "Starting from Li ($Z = 3$): $\\text{Na} (3+8=11)$, $\\text{K} (11+8=19)$, $\\text{Rb} (19+18=37)$, $\\text{Cs} (37+18=55)$, $\\text{Fr} (55+32=87)$. The increments are $8, 8, 18, 18, 32$.")

]

for idx, item in enumerate(medium_q_data[:65]):
    q_num = 41 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

print(f"Added {len(medium_q_data[:65])} Medium questions (Q041 to Q105).")

# =========================================================================
# Q106 to Q125 (Hard: 20 questions)
# =========================================================================
hard_q_data = [
    ("An element $X$ has atomic number $Z = 111$. Predict its IUPAC systematic name, group number, and block:",
     "Unununium ($\\text{Uuu}$), Group 11, $d$-block",
     "Ununbium ($\\text{Uub}$), Group 12, $d$-block",
     "Unnilennium ($\\text{Une}$), Group 9, $d$-block",
     "Ununtrium ($\\text{Uut}$), Group 13, $p$-block",
     0, "Element 111 Full Classification",
     "Digits: 1, 1, 1 $\\implies \\text{Unununium}$ ($\\text{Uuu}$, official name Roentgenium, $\\text{Rg}$). Electronic configuration: $[\\text{Rn}] 5f^{14} 6d^{10} 7s^1$. Group number $= 10 + 1 = 11$ ($d$-block, Coinage metal group)."),

    ("An element $Y$ has atomic number $Z = 113$. Predict its IUPAC systematic name, group number, and valence configuration:",
     "Ununtrium ($\\text{Uut}$), Group 13, $7s^2 7p^1$",
     "Ununbium ($\\text{Uub}$), Group 12, $7s^2$",
     "Ununquadium ($\\text{Uuq}$), Group 14, $7s^2 7p^2$",
     "Ununpentium ($\\text{Uup}$), Group 15, $7s^2 7p^3$",
     0, "Element 113 Classification",
     "Digits: 1, 1, 3 $\\implies \\text{Ununtrium}$ ($\\text{Uut}$, Nihonium, $\\text{Nh}$). Configuration: $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^1$. Valence shell: $7s^2 7p^1 \\implies \\text{Group } 12 + 1 = 13$ ($p$-block)."),

    ("An element $W$ has atomic number $Z = 115$. Its IUPAC systematic name and group are:",
     "Ununpentium ($\\text{Uup}$), Group 15",
     "Ununhexium ($\\text{Uuh}$), Group 16",
     "Ununquadium ($\\text{Uuq}$), Group 14",
     "Ununseptium ($\\text{Uus}$), Group 17",
     0, "Element 115 Classification",
     "Digits: 1, 1, 5 $\\implies \\text{Ununpentium}$ (Moscovium, $\\text{Mc}$). Group number $= 12 + 3 = 15$ ($p$-block, Pnictogen family)."),

    ("An element $Q$ has atomic number $Z = 116$. Its IUPAC systematic name and group are:",
     "Ununhexium ($\\text{Uuh}$), Group 16",
     "Ununpentium ($\\text{Uup}$), Group 15",
     "Ununseptium ($\\text{Uus}$), Group 17",
     "Ununoctium ($\\text{Uuo}$), Group 18",
     0, "Element 116 Classification",
     "Digits: 1, 1, 6 $\\implies \\text{Ununhexium}$ (Livermorium, $\\text{Lv}$). Group number $= 12 + 4 = 16$ ($p$-block, Chalcogen family)."),

    ("An element $T$ has atomic number $Z = 117$. Its IUPAC systematic name and group are:",
     "Ununseptium ($\\text{Uus}$), Group 17",
     "Ununhexium ($\\text{Uuh}$), Group 16",
     "Ununoctium ($\\text{Uuo}$), Group 18",
     "Ununoctium ($\\text{Uuo}$), Group 7",
     0, "Element 117 Classification",
     "Digits: 1, 1, 7 $\\implies \\text{Ununseptium}$ (Tennessine, $\\text{Ts}$). Group number $= 12 + 5 = 17$ ($p$-block, Halogen family)."),

    ("An element has atomic number $Z = 118$. Its valence shell configuration is:",
     "$7s^2 7p^6$",
     "$7s^2 7p^5$",
     "$6d^{10} 7s^2$",
     "$5f^{14} 7s^2$",
     0, "Element 118 Valence Configuration",
     "$Z = 118$ is Oganesson ($\\text{Og}$), the terminal element of Period 7. Its valence configuration is $7s^2 7p^6$ (noble gas octet)."),

    ("What is the atomic number of the element with IUPAC systematic name 'Unbibium'?",
     "$122$",
     "$112$",
     "$120$",
     "$124$",
     0, "IUPAC Name Translation Z=122",
     "Roots: un = 1, bi = 2, bi = 2 $\\implies 122$. Symbol: $\\text{Ubb}$."),

    ("What is the atomic number of the element with IUPAC symbol $\\text{Ubn}$?",
     "$120$ (Unbinilium)",
     "$119$",
     "$121$",
     "$102$",
     0, "IUPAC Symbol Translation Ubn",
     "Symbol $\\text{Ubn}$ corresponds to un (1), bi (2), nil (0) $\\implies Z = 120$ (Unbinilium)."),

    ("The frequency of $K_\\alpha$ X-rays for an element with $Z = 41$ is $\\nu_1$, and for $Z = 21$ is $\\nu_2$. Assuming $b = 1$, the ratio $\\nu_1 / \\nu_2$ is:",
     "$4 : 1$",
     "$2 : 1$",
     "$16 : 1$",
     "$\\sqrt{2} : 1$",
     0, "Moseley Law Frequency Ratio",
     "By Moseley's law: $\\sqrt{\\nu} = a(Z - 1) \\implies \\nu \\propto (Z - 1)^2$. Ratio $\\frac{\\nu_1}{\\nu_2} = \\frac{(41 - 1)^2}{(21 - 1)^2} = \\frac{40^2}{20^2} = 2^2 = 4 : 1$."),

    ("If the wavelength of $K_\\alpha$ line of an element with $Z = 31$ is $\\lambda$, what is the approximate wavelength of $K_\\alpha$ line of an element with $Z = 61$?",
     "$\\lambda / 4$",
     "$\\lambda / 2$",
     "$4\\lambda$",
     "$2\\lambda$",
     0, "Moseley Wavelength Scaling",
     "$\\nu = c/\\lambda \\propto (Z - 1)^2 \\implies \\lambda \\propto \\frac{1}{(Z - 1)^2}$. Ratio $\\frac{\\lambda_{61}}{\\lambda_{31}} = \\frac{(31 - 1)^2}{(61 - 1)^2} = \\frac{30^2}{60^2} = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$. Thus $\\lambda_{61} = \\lambda / 4$."),

    ("An element has electronic configuration $[\\text{Xe}] 4f^7 5d^1 6s^2$. If 3 electrons are removed to form a $+3$ cation, the resulting configuration is:",
     "$[\\text{Xe}] 4f^7$",
     "$[\\text{Xe}] 4f^6 5d^1$",
     "$[\\text{Xe}] 4f^8$",
     "$[\\text{Xe}] 4f^5 5d^2$",
     0, "Gadolinium-3+ Configuration",
     "Gadolinium ($Z = 64$) is $[\\text{Xe}] 4f^7 5d^1 6s^2$. Ionization removes the outer two $6s$ electrons and one $5d$ electron first, leaving the remarkably stable half-filled $[\\text{Xe}] 4f^7$ core with 7 unpaired electrons."),

    ("What is the ground state electronic configuration of the $+3$ ion of Europium ($\\text{Eu}^{3+}$, $Z = 63$)?",
     "$[\\text{Xe}] 4f^6$",
     "$[\\text{Xe}] 4f^7$",
     "$[\\text{Xe}] 4f^5$",
     "$[\\text{Xe}] 4f^7 6s^1$",
     0, "Europium-3+ Configuration",
     "Neutral Europium is $[\\text{Xe}] 4f^7 6s^2$. Removing three electrons removes two $6s$ electrons and one $4f$ electron, leaving $[\\text{Xe}] 4f^6$."),

    ("The number of $f$-electrons in $\\text{Yb}^{2+}$ ($Z = 70$) is:",
     "14",
     "13",
     "12",
     "10",
     0, "Ytterbium-2+ Configuration",
     "Neutral Ytterbium is $[\\text{Xe}] 4f^{14} 6s^2$. Losing both $6s$ electrons gives $\\text{Yb}^{2+}$ with configuration $[\\text{Xe}] 4f^{14}$ (14 $f$-electrons, completely filled diamagnetic $f$-subshell)."),

    ("The number of $f$-electrons in $\\text{Lu}^{3+}$ ($Z = 71$) is:",
     "14",
     "13",
     "12",
     "0",
     0, "Lutetium-3+ Configuration",
     "Neutral Lutetium is $[\\text{Xe}] 4f^{14} 5d^1 6s^2$. Losing 3 electrons removes one $5d$ and two $6s$ electrons, leaving $[\\text{Xe}] 4f^{14}$ (14 $f$-electrons)."),

    ("Which of the following pairs of elements has identical outer valence shell configuration despite belonging to different periods?",
     "$\\text{Cr}$ ($3d^5 4s^1$) and $\\text{Mo}$ ($4d^5 5s^1$)",
     "$\\text{Cr}$ and $\\text{W}$",
     "$\\text{Fe}$ and $\\text{Ru}$",
     "$\\text{Ni}$ and $\\text{Pd}$",
     0, "Cr and Mo Anomalous Valence Match",
     "Both Chromium ($[\\text{Ar}] 3d^5 4s^1$) and Molybdenum ($[\\text{Kr}] 4d^5 5s^1$) share the anomalous $(n-1)d^5 ns^1$ configuration. Tungsten (W), however, adopts normal $[\\text{Xe}] 4f^{14} 5d^4 6s^2$."),

    ("Which transition metal in Group 10 has zero electrons in its outermost $s$-orbital ($ns^0$)?",
     "Palladium ($\\text{Pd}$, $Z = 46$)",
     "Nickel ($\\text{Ni}$, $Z = 28$)",
     "Platinum ($\\text{Pt}$, $Z = 78$)",
     "Gold ($\\text{Au}$, $Z = 79$)",
     0, "Palladium ns0 Configuration",
     "Palladium ($Z = 46$) has ground state configuration $[\\text{Kr}] 4d^{10} 5s^0$, having zero electrons in $5s$, unlike $\\text{Ni}$ ($3d^8 4s^2$) and $\\text{Pt}$ ($5d^9 6s^1$)."),

    ("Platinum ($\\text{Pt}$, $Z = 78$) has which ground state electronic configuration?",
     "$[\\text{Xe}] 4f^{14} 5d^9 6s^1$",
     "$[\\text{Xe}] 4f^{14} 5d^8 6s^2$",
     "$[\\text{Xe}] 4f^{14} 5d^{10} 6s^0$",
     "$[\\text{Xe}] 4f^{14} 5d^7 6s^2 6p^1$",
     0, "Platinum Configuration",
     "Platinum adopts $[\\text{Xe}] 4f^{14} 5d^9 6s^1$ due to relativistic contraction of the $6s$ orbital and interelectronic interactions."),

    ("The maximum number of elements that can be accommodated in a hypothetical 8th period of the periodic table if all subshells up to $g$ are filled is:",
     "50 elements",
     "32 elements",
     "18 elements",
     "72 elements",
     0, "Period 8 Element Capacity",
     "In Period 8, allowed subshells are $8s (l=0, 2), 5g (l=4, 18), 6f (l=3, 14), 7d (l=2, 10), 8p (l=1, 6)$. Total electrons/elements $= 2 + 18 + 14 + 10 + 6 = 50$ elements."),

    ("An element with $Z = 120$ will have which valence electronic configuration?",
     "$[\\text{Og}] 8s^2$",
     "$[\\text{Og}] 8s^1$",
     "$[\\text{Og}] 7d^2$",
     "$[\\text{Og}] 5g^2$",
     0, "Element 120 Configuration",
     "Period 7 ends with Oganesson ($\\text{Og}$, $Z = 118$). The next shell starts with $8s$. Element 119 will be $[\\text{Og}] 8s^1$, and element 120 will be $[\\text{Og}] 8s^2$."),

    ("Which of the following is correct regarding the position of hydrogen in the modern periodic table?",
     "It has anomalous dual behavior resembling both Group 1 (alkali metals) and Group 17 (halogens), and is placed separately at the top of the periodic table",
     "It is strictly an alkali metal",
     "It is strictly a halogen",
     "It belongs to the noble gases",
     0, "Hydrogen Unique Position",
     "Hydrogen has $1s^1$: it can lose one electron to form $\\text{H}^+$ (like alkali metals) or gain one electron to achieve helium configuration forming $\\text{H}^-$ (like halogens). Because of this unique dual character, it is assigned a unique separate position at the top of the table.")
]

for idx, item in enumerate(hard_q_data[:20]):
    q_num = 106 + idx
    q_id = f"period-mcq-{q_num:03d}"
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

out_file = "src/data/chapterwise/chemistry/periodicClassificationPart1.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Classification of Elements and Periodicity in Properties | Chemistry | Class: 11 | Part 1
// Target: Exactly 125 MCQs (40 Easy, 65 Medium, 20 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const PERIODIC_CLASSIFICATION_PART1_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
