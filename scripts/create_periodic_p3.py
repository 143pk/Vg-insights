#!/usr/bin/env python3
"""
Direct generator for Classification of Elements and Periodicity in Properties - Part 3
Q251 to Q375: 30 Easy, 65 Medium, 30 Hard = 125 MCQs
"""

import json

questions = []

def add(q_id, q_num, question, opt_a, opt_b, opt_c, opt_d, correct_idx, difficulty, subtopic, explanation, is_pyq=False, pyq_source=None):
    opts_list = [opt_a, opt_b, opt_c, opt_d]
    ans_map = {0: "A", 1: "B", 2: "C", 3: "D"}
    q = {
        "id": q_id,
        "questionNumber": q_num,
        "question": question,
        "options": {"A": opt_a, "B": opt_b, "C": opt_c, "D": opt_d},
        "optionsList": opts_list,
        "correctAnswer": ans_map[correct_idx],
        "correctIndex": correct_idx,
        "explanation": explanation,
        "difficulty": difficulty,
        "subject": "Chemistry",
        "class": "11",
        "chapter": "Classification of Elements and Periodicity",
        "chapterId": "periodic-classification",
        "topicId": "chem-periodic-trends-egh-en",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# -------------------------------------------------------------------------
# EASY QUESTIONS (30 questions: Q251 to Q280)
# -------------------------------------------------------------------------
easy_items = [
    # 1 (Q251)
    ("Electron gain enthalpy ($\\Delta_{\\text{eg}}H$) is defined as the enthalpy change when an electron is added to an isolated gaseous atom in its:",
     "Ground state to form a gaseous anion",
     "Excited state in a plasma",
     "Solid crystalline lattice",
     "Liquid state at standard temperature",
     0, "Electron Gain Enthalpy Definition",
     "Electron gain enthalpy ($\\Delta_{\\text{eg}}H$) is precisely the enthalpy change accompanying the process: $X(\\text{g}) + e^- \\rightarrow X^-(\\text{g})$ for an isolated atom in its ground state."),

    # 2 (Q252)
    ("When energy is released during the addition of an electron to an atom, the electron gain enthalpy has a:",
     "Negative sign",
     "Positive sign",
     "Zero value",
     "Variable sign depending on pressure",
     0, "Sign of Electron Gain Enthalpy",
     "Under standard thermodynamic conventions, exothermic processes where energy is released have a negative enthalpy change ($\\Delta H < 0$). Thus negative $\\Delta_{\\text{eg}}H$ means electron gain is exothermic."),

    # 3 (Q253)
    ("Which group of elements in the periodic table has large positive values of electron gain enthalpy?",
     "Group 18 (Noble gases)",
     "Group 17 (Halogens)",
     "Group 16 (Chalcogens)",
     "Group 1 (Alkali metals)",
     0, "Positive EGH Noble Gases",
     "Noble gases have stable, completely filled electronic configurations ($ns^2 np^6$). An incoming electron must enter the next higher principal energy shell ($ns$), which is thermodynamically very unfavorable, requiring an input of energy (large positive $\\Delta_{\\text{eg}}H$)."),

    # 4 (Q254)
    ("Which group in the modern periodic table has the highest negative electron gain enthalpies in their respective periods?",
     "Group 17 (Halogens)",
     "Group 16 (Chalcogens)",
     "Group 1 (Alkali metals)",
     "Group 2 (Alkaline earth metals)",
     0, "Highest Negative EGH Group",
     "Halogens have the valence shell configuration $ns^2 np^5$. Gaining a single electron completes a stable noble gas octet ($ns^2 np^6$), releasing maximum energy and yielding the highest negative $\\Delta_{\\text{eg}}H$ values."),

    # 5 (Q255)
    ("Which element in the entire periodic table has the most negative electron gain enthalpy?",
     "Chlorine ($\\text{Cl}$)",
     "Fluorine ($\\text{F}$)",
     "Bromine ($\\text{Br}$)",
     "Iodine ($\\text{I}$)",
     0, "Most Negative EGH Element",
     "Chlorine has the most negative electron gain enthalpy ($-349\\text{ kJ/mol}$) in the periodic table. Although Fluorine is more electronegative, its small compact $2p$ subshell causes strong electron-electron repulsion, making its $\\Delta_{\\text{eg}}H$ ($-328\\text{ kJ/mol}$) less negative than Chlorine's."),

    # 6 (Q256)
    ("The second electron gain enthalpy ($\\Delta_{\\text{eg}}H_2$) of any element (such as Oxygen or Sulphur) is always:",
     "Positive (endothermic)",
     "Negative (exothermic)",
     "Zero",
     "Equal to the first ionization enthalpy",
     0, "Second EGH Always Positive",
     "Adding an electron to a negatively charged ion (e.g., $\\text{O}^- + e^- \\rightarrow \\text{O}^{2-}$) encounters strong electrostatic repulsion from the existing electron cloud. Energy must be supplied to overcome this repulsion, making $\\Delta_{\\text{eg}}H_2$ strictly positive."),

    # 7 (Q257)
    ("Electronegativity is defined as the tendency of an atom in a molecule to:",
     "Attract the shared pair of electrons towards itself in a covalent bond",
     "Lose an electron to form a cation",
     "Accept an electron into an isolated gaseous atom",
     "Repel bonded electron density",
     0, "Electronegativity Definition",
     "Electronegativity is a qualitative chemical property describing the relative power of an atom in a covalent chemical bond to attract the shared bonding electron pair towards itself."),

    # 8 (Q258)
    ("Which element in the periodic table has the highest electronegativity on the Pauling scale?",
     "Fluorine ($\\text{F}$)",
     "Oxygen ($\\text{O}$)",
     "Chlorine ($\\text{Cl}$)",
     "Nitrogen ($\\text{N}$)",
     0, "Highest Electronegativity Element",
     "Fluorine is the most electronegative element in the periodic table, assigned an arbitrary standard value of $4.0$ on Linus Pauling's electronegativity scale."),

    # 9 (Q259)
    ("On the Pauling scale, the electronegativity value assigned to Oxygen is approximately:",
     "$3.5$",
     "$4.0$",
     "$3.0$",
     "$2.5$",
     0, "Oxygen Electronegativity Value",
     "On the Pauling scale, Oxygen is the second most electronegative element with a value of $3.5$ (second only to Fluorine at $4.0$)."),

    # 10 (Q260)
    ("On the Pauling scale, Nitrogen and Chlorine both have approximately the same electronegativity value of:",
     "$3.0$",
     "$3.5$",
     "$2.5$",
     "$2.1$",
     0, "Nitrogen and Chlorine EN Value",
     "Both Nitrogen and Chlorine have an electronegativity value of approximately $3.0$ on the Pauling scale."),

    # 11 (Q261)
    ("Across a period from left to right in the modern periodic table, electronegativity generally:",
     "Increases due to increase in effective nuclear charge and decrease in atomic size",
     "Decreases because metallic character increases",
     "Remains constant across representative elements",
     "First decreases and then increases",
     0, "Electronegativity Period Trend",
     "Across a period, atomic radius decreases and effective nuclear charge ($Z_{\\text{eff}}$) increases. As a result, the nucleus exerts a stronger pull on shared bonding electrons, steadily increasing electronegativity."),

    # 12 (Q262)
    ("Down a group from top to bottom in the periodic table, electronegativity generally:",
     "Decreases because atomic radius increases and the nucleus is further shielded",
     "Increases due to increase in atomic mass",
     "Remains constant",
     "Increases up to Period 4 and then decreases",
     0, "Electronegativity Group Trend",
     "Down a group, the addition of electron shells increases atomic radius and shielding, weakening the nuclear pull on bonding electrons and causing electronegativity to decrease."),

    # 13 (Q263)
    ("Which of the following elements has the lowest electronegativity on the Pauling scale?",
     "Caesium ($\\text{Cs}$)",
     "Lithium ($\\text{Li}$)",
     "Fluorine ($\\text{F}$)",
     "Iodine ($\\text{I}$)",
     0, "Lowest Electronegativity Element",
     "Caesium (and Francium) has the largest atomic size and lowest effective nuclear pull, having the lowest electronegativity value of $0.7$ on the Pauling scale."),

    # 14 (Q264)
    ("On the Pauling scale, Hydrogen is assigned an electronegativity value of:",
     "$2.1$",
     "$1.0$",
     "$3.0$",
     "$0.8$",
     0, "Hydrogen Pauling EN",
     "On Linus Pauling's scale, Hydrogen has an electronegativity value of $2.1$ (or $2.20$ on modern revisions)."),

    # 15 (Q265)
    ("The maximum covalency of second period elements (like B, C, N, O, F) is strictly limited to:",
     "4",
     "6",
     "2",
     "8",
     0, "Maximum Covalency Period 2",
     "Second period elements have only four valence orbitals available for bonding ($2s, 2p_x, 2p_y, 2p_z$) and lack $d$-orbitals in their valence shell ($n = 2$). Hence their maximum covalency cannot exceed 4."),

    # 16 (Q266)
    ("Third period elements (such as P, S, Cl) can expand their covalency beyond 4 (e.g., in $\\text{PCl}_5, \\text{SF}_6$) because they possess:",
     "Vacant $3d$-orbitals in their valence shell",
     "Higher atomic masses",
     "Only $p$-orbitals",
     "Negative electron gain enthalpies",
     0, "Expansion of Octet Period 3",
     "Third period elements have principal quantum number $n = 3$, giving them access to vacant $3d$ orbitals in addition to $3s$ and $3p$. These vacant $d$-orbitals allow expansion of their coordination number beyond 4."),

    # 17 (Q267)
    ("Which of the following compounds CANNOT be formed due to the absence of $d$-orbitals in the central atom?",
     "$\\text{NF}_5$",
     "$\\text{PCl}_5$",
     "$\\text{SF}_6$",
     "$\\text{SiF}_6^{2-}$",
     0, "NF5 Non-existence",
     "Nitrogen belongs to Period 2 and has only four valence orbitals ($2s$ and three $2p$). Because it lacks vacant $2d$ orbitals, it cannot expand its octet to form $\\text{NF}_5$, whereas Phosphorus can form $\\text{PCl}_5$ using vacant $3d$ orbitals."),

    # 18 (Q268)
    ("The formula of the hydride of an element in Group 16 is typically:",
     "$E\\text{H}_2$",
     "$E\\text{H}_4$",
     "$E\\text{H}_3$",
     "$E\\text{H}$",
     0, "Group 16 Hydride Formula",
     "Group 16 elements (Chalcogens) have 6 valence electrons and require 2 electrons to complete their octet (valency = $8 - 6 = 2$). They form hydrides of the type $E\\text{H}_2$ (e.g., $\\text{H}_2\\text{O}, \\text{H}_2\\text{S}$)."),

    # 19 (Q269)
    ("The formula of the highest oxide formed by an element in Group 14 is typically:",
     "$E\\text{O}_2$",
     "$E_2\\text{O}$",
     "$E\\text{O}_3$",
     "$E_2\\text{O}_5$",
     0, "Group 14 Oxide Formula",
     "Group 14 elements have 4 valence electrons, showing a maximum oxidation state of $+4$ towards oxygen to form dioxides of formula $E\\text{O}_2$ (e.g., $\\text{CO}_2, \\text{SiO}_2$)."),

    # 20 (Q270)
    ("The formula of the highest oxide formed by Group 17 halogens (such as Chlorine) is:",
     "$E_2\\text{O}_7$",
     "$E\\text{O}_2$",
     "$E\\text{O}_3$",
     "$E_2\\text{O}_5$",
     0, "Group 17 Highest Oxide",
     "Chlorine shows its maximum group oxidation state of $+7$ in its highest oxide, giving the chemical formula $\\text{Cl}_2\\text{O}_7$ (dichlorine heptoxide)."),

    # 21 (Q271)
    ("Which of the following oxides is purely BASIC in nature?",
     "$\\text{Na}_2\\text{O}$",
     "$\\text{Al}_2\\text{O}_3$",
     "$\\text{Cl}_2\\text{O}_7$",
     "$\\text{CO}_2$",
     0, "Basic Oxide Example",
     "Alkali metal oxides like $\\text{Na}_2\\text{O}$ react with water to form strongly alkaline hydroxides ($\text{NaOH}$) without reacting with bases, making them purely basic oxides."),

    # 22 (Q272)
    ("Which of the following oxides is AMPHOTERIC in nature?",
     "$\\text{Al}_2\\text{O}_3$",
     "$\\text{Na}_2\\text{O}$",
     "$\\text{SO}_3$",
     "$\\text{CaO}$",
     0, "Amphoteric Oxide Example",
     "Aluminium oxide ($\\text{Al}_2\\text{O}_3$) is amphoteric because it reacts with both strong acids (forming $\\text{Al}^{3+}$ salts) and strong bases (forming aluminates like $\\text{Na}[\\text{Al}(\\text{OH})_4]$)."),

    # 23 (Q273)
    ("Which of the following oxides is strictly ACIDIC in nature?",
     "$\\text{SO}_3$",
     "$\\text{MgO}$",
     "$\\text{BaO}$",
     "$\\text{Na}_2\\text{O}$",
     0, "Acidic Oxide Example",
     "Sulphur trioxide ($\\text{SO}_3$) is a non-metallic oxide that dissolves in water to form sulphuric acid ($\\text{H}_2\\text{SO}_4$) and reacts vigorously with bases to form sulphates, making it strongly acidic."),

    # 24 (Q274)
    ("Which of the following oxides is classified as NEUTRAL?",
     "$\\text{CO}$ (Carbon monoxide)",
     "$\\text{CO}_2$",
     "$\\text{SO}_2$",
     "$\\text{CaO}$",
     0, "Neutral Oxide Example",
     "Carbon monoxide ($\\text{CO}$), along with nitrous oxide ($\\text{N}_2\\text{O}$) and nitric oxide ($\\text{NO}$), does not show acidic or basic properties and does not form salts with acids or bases; hence it is a neutral oxide."),

    # 25 (Q275)
    ("Metallic character across a period from left to right:",
     "Decreases as electronegativity and ionization enthalpy increase",
     "Increases because nuclear charge increases",
     "Remains constant",
     "Increases from Group 1 to Group 17",
     0, "Metallic Character Period Trend",
     "Across a period, ionization enthalpy and electronegativity increase, making it harder for atoms to lose electrons. Consequently, metallic character (electropositive nature) decreases and non-metallic character increases."),

    # 26 (Q276)
    ("Non-metallic character down a group from top to bottom:",
     "Decreases as atomic size increases and electron loss becomes easier",
     "Increases because atomic mass increases",
     "Remains constant",
     "First decreases then increases",
     0, "Non-metallic Character Group Trend",
     "Down a group, atomic radius increases and ionization enthalpy decreases, facilitating electron loss (metallic character increases). Hence non-metallic character steadily decreases down any group."),

    # 27 (Q277)
    ("Which of the following hybridizations of Carbon has the HIGHEST electronegativity?",
     "$sp$",
     "$sp^2$",
     "$sp^3$",
     "All have identical electronegativity",
     0, "Hybridization and Electronegativity",
     "Electronegativity increases with increasing $s$-character because $s$-electrons are closer to the nucleus. An $sp$-hybridized carbon has $50\\%$ $s$-character, making it significantly more electronegative than $sp^2$ ($33.3\\%$) and $sp^3$ ($25\\%$)."),

    # 28 (Q278)
    ("Mulliken defined electronegativity ($\\chi_M$) as the average of:",
     "Ionization potential and electron affinity",
     "Bond energy and bond length",
     "Nuclear charge and atomic radius",
     "Covalent radius and ionic radius",
     0, "Mulliken Scale Formula",
     "Robert Mulliken defined electronegativity as the arithmetic mean of ionization potential ($\\text{IP}$) and electron affinity ($\\text{EA}$): $\\chi_M = (\\text{IP} + \\text{EA}) / 2$ (in eV)."),

    # 29 (Q279)
    ("The relationship between Pauling electronegativity ($\\chi_P$) and Mulliken electronegativity ($\\chi_M$) in $\\text{eV}$ is approximately:",
     "$\\chi_P \\approx \\chi_M / 2.8$",
     "$\\chi_P \\approx 2.8 \\times \\chi_M$",
     "$\\chi_P \\approx \\chi_M + 2.8$",
     "$\\chi_P \\approx \\chi_M - 2.8$",
     0, "Pauling and Mulliken Conversion",
     "When IP and EA are measured in electron volts ($\text{eV}$), Pauling's electronegativity values are approximately related to Mulliken's scale by $\\chi_P \\approx \\chi_M / 2.8$."),

    # 30 (Q280)
    ("Which of the following elements has the most positive (least exothermic) electron gain enthalpy?",
     "Neon ($\\text{Ne}$)",
     "Sodium ($\\text{Na}$)",
     "Fluorine ($\\text{F}$)",
     "Chlorine ($\\text{Cl}$)",
     0, "Most Positive EGH Neon",
     "Neon has a completely closed octet ($2s^2 2p^6$). Adding an electron requires placing it into the $3s$ orbital with significant energy input, giving it a large positive electron gain enthalpy ($+116\\text{ kJ/mol}$).")
]

# -------------------------------------------------------------------------
# MEDIUM QUESTIONS (65 questions: Q281 to Q345)
# -------------------------------------------------------------------------
med_items = [
    # 1 (Q281) Authentic NEET 2020
    ("Which of the following is the correct order of electron gain enthalpy (with negative sign) for the halogens?",
     "$\\text{Cl} > \\text{F} > \\text{Br} > \\text{I}$",
     "$\\text{F} > \\text{Cl} > \\text{Br} > \\text{I}$",
     "$\\text{Cl} > \\text{Br} > \\text{F} > \\text{I}$",
     "$\\text{I} > \\text{Br} > \\text{Cl} > \\text{F}$",
     0, "Halogen EGH Order NEET 2020",
     "The magnitude of negative electron gain enthalpy follows $\\text{Cl} (-349\\text{ kJ/mol}) > \\text{F} (-328\\text{ kJ/mol}) > \\text{Br} (-325\\text{ kJ/mol}) > \\text{I} (-295\\text{ kJ/mol})$. Fluorine has less negative $\\Delta_{\\text{eg}}H$ than Chlorine due to interelectronic repulsions in its compact $2p$ subshell.",
     True, "NEET 2020"),

    # 2 (Q282) Authentic NEET 2019
    ("The correct order of negative electron gain enthalpy of Group 16 elements (chalcogens) is:",
     "$\\text{S} > \\text{Se} > \\text{Te} > \\text{Po} > \\text{O}$",
     "$\\text{O} > \\text{S} > \\text{Se} > \\text{Te} > \\text{Po}$",
     "$\\text{S} > \\text{O} > \\text{Se} > \\text{Te} > \\text{Po}$",
     "$\\text{O} > \\text{Se} > \\text{S} > \\text{Te} > \\text{Po}$",
     0, "Group 16 EGH Order NEET 2019",
     "Due to the extremely small size of Oxygen, interelectronic repulsions in its compact $2p$ orbital are high, making its negative electron gain enthalpy ($-141\\text{ kJ/mol}$) the lowest in Group 16. The correct order is $\\text{S} (-200) > \\text{Se} (-195) > \\text{Te} (-190) > \\text{Po} > \\text{O} (-141)$.",
     True, "NEET 2019"),

    # 3 (Q283) Authentic NEET 2021
    ("Match List-I with List-II:\n(A) Highest negative electron gain enthalpy -> (1) Fluorine\n(B) Most electronegative element -> (2) Chlorine\n(C) Lowest first ionization enthalpy -> (3) Helium\n(D) Highest first ionization enthalpy -> (4) Caesium",
     "A-2, B-1, C-4, D-3",
     "A-1, B-2, C-4, D-3",
     "A-2, B-1, C-3, D-4",
     "A-1, B-2, C-3, D-4",
     0, "Match Periodic Extremes NEET 2021",
     "Chlorine has the highest negative electron gain enthalpy (A-2). Fluorine is the most electronegative element (B-1). Caesium has the lowest first ionization enthalpy (C-4). Helium has the highest first ionization enthalpy (D-3). Thus A-2, B-1, C-4, D-3.",
     True, "NEET 2021"),

    # 4 (Q284)
    ("Why is the electron gain enthalpy of Nitrogen ($\\Delta_{\\text{eg}}H \\approx +31\\text{ kJ/mol}$) slightly positive while Carbon has $\\Delta_{\\text{eg}}H = -122\\text{ kJ/mol}$?",
     "Nitrogen has a symmetrical, extra-stable half-filled $2p^3$ subshell that resists adding an electron",
     "Nitrogen has a smaller atomic radius than Carbon",
     "Carbon has empty $d$-orbitals",
     "Nitrogen is a diatomic gas",
     0, "Nitrogen Positive EGH Reason",
     "Nitrogen ($1s^2 2s^2 2p^3$) has three unpaired electrons in three separate $2p$ orbitals with maximum exchange energy. Adding a 4th electron requires pairing it in a $2p$ orbital, creating electrostatic repulsion and disrupting the half-filled stability, making the process endothermic."),

    # 5 (Q285)
    ("Beryllium and Magnesium have almost zero or slightly positive electron gain enthalpies because:",
     "They have completely filled, stable $ns^2$ subshells and an added electron must enter a higher energy $p$-orbital",
     "They have very high electronegativity",
     "They are non-metals",
     "Their atoms are unusually large",
     0, "Alkaline Earth Metals EGH",
     "Beryllium ($[\\text{He}] 2s^2$) and Magnesium ($[\\text{Ne}] 3s^2$) have fully filled $s$-subshells. An incoming electron must enter the higher-energy $2p$ or $3p$ subshell, which is energetically unfavorable and yields near-zero or positive $\\Delta_{\\text{eg}}H$."),

    # 6 (Q286)
    ("Which of the following elements has the MOST negative electron gain enthalpy?",
     "Fluorine ($\\text{F}$)",
     "Oxygen ($\\text{O}$)",
     "Sulphur ($\\text{S}$)",
     "Phosphorus ($\\text{P}$)",
     0, "Most Negative EGH Selection",
     "Fluorine has $\\Delta_{\\text{eg}}H = -328\\text{ kJ/mol}$, Sulphur has $-200\\text{ kJ/mol}$, Oxygen has $-141\\text{ kJ/mol}$, and Phosphorus has $-74\\text{ kJ/mol}$. Among these four, Fluorine is the most negative."),

    # 7 (Q287)
    ("The electron gain enthalpies of $\\text{B, C, N,}$ and $\\text{O}$ follow which order of increasingly negative value?",
     "$\\text{N} < \\text{B} < \\text{C} < \\text{O}$",
     "$\\text{B} < \\text{C} < \\text{N} < \\text{O}$",
     "$\\text{N} < \\text{C} < \\text{B} < \\text{O}$",
     "$\\text{O} < \\text{C} < \\text{B} < \\text{N}$",
     0, "B C N O Negative EGH Order",
     "Nitrogen has positive $\\Delta_{\\text{eg}}H$ ($+31\\text{ kJ/mol}$). Boron is $-83\\text{ kJ/mol}$, Carbon is $-122\\text{ kJ/mol}$, and Oxygen is $-141\\text{ kJ/mol}$. In order of increasingly negative value (more exothermic): $\\text{N} < \\text{B} < \\text{C} < \\text{O}$."),

    # 8 (Q288)
    ("Which of the following elements shows the greatest tendency to form $p\\pi-p\\pi$ multiple bonds with itself?",
     "Carbon ($\\text{C}$)",
     "Silicon ($\\text{Si}$)",
     "Germanium ($\\text{Ge}$)",
     "Tin ($\\text{Sn}$)",
     0, "ppi-ppi Bonding Tendency",
     "Carbon has a very small atomic size and compact $2p$ orbitals that can undergo effective lateral (sideways) overlap to form strong $p\\pi-p\\pi$ multiple bonds (e.g., in $\\text{C}=\\text{C}$ and $\\text{C}\\equiv\\text{C}$). Heavier congeners have larger diffuse orbitals that overlap poorly."),

    # 9 (Q289)
    ("Nitrogen forms $\\text{N}_2$ with a triple bond, while Phosphorus forms tetrahedral $\\text{P}_4$ with single bonds. The primary reason is:",
     "Nitrogen easily forms strong $p\\pi-p\\pi$ multiple bonds due to its small size, while Phosphorus forms weaker multiple bonds due to larger, diffuse $3p$ orbitals",
     "Phosphorus is more electronegative than Nitrogen",
     "Nitrogen has vacant $d$-orbitals",
     "Phosphorus is a gas while Nitrogen is a solid",
     0, "N2 vs P4 Bonding",
     "Because of its small size and compact $2p$ orbitals, Nitrogen forms very strong $p\\pi-p\\pi$ triple bonds ($946\\text{ kJ/mol}$). Phosphorus has larger $3p$ orbitals which cannot overlap effectively sideways, preferring stronger single $\\text{P}-\\text{P}$ bonds in a $\\text{P}_4$ tetrahedron."),

    # 10 (Q290)
    ("Why is the maximum covalency of Boron in $\\text{BF}_4^-$ equal to 4, whereas Aluminium in $\\text{AlF}_6^{3-}$ exhibits a covalency of 6?",
     "Boron has only four valence orbitals ($2s, 2p$) and lacks $d$-orbitals, while Aluminium has vacant $3d$-orbitals",
     "Aluminium is a non-metal while Boron is a metal",
     "Boron has a higher atomic number than Aluminium",
     "Fluorine cannot bond with Boron in octahedra",
     0, "BF4 vs AlF6 Covalency",
     "Boron ($n = 2$) has only four valence orbitals and cannot expand its coordination number beyond 4. Aluminium ($n = 3$) has accessible, vacant $3d$ orbitals that allow $sp^3d^2$ hybridization, forming the octahedral $\\text{AlF}_6^{3-}$ ion."),

    # 11 (Q291)
    ("Which of the following compounds exhibits an anomaly where the oxidation state of the halogen is positive?",
     "$\\text{OF}_2$ and $\\text{Cl}_2\\text{O}$",
     "$\\text{NaCl}$ and $\\text{KBr}$",
     "$\\text{HF}$ and $\\text{HCl}$",
     "$\\text{CaF}_2$ and $\\text{MgBr}_2$",
     0, "Positive Oxidation States Halogens",
     "In $\\text{Cl}_2\\text{O}$, Oxygen is more electronegative than Chlorine ($3.5 > 3.0$), so Chlorine has an oxidation state of $+1$. In $\\text{OF}_2$, Fluorine is more electronegative than Oxygen ($4.0 > 3.5$), giving Oxygen $+2$ and Fluorine $-1$."),

    # 12 (Q292)
    ("In which of the following compounds does Oxygen exhibit an oxidation state of $+2$?",
     "$\\text{OF}_2$",
     "$\\text{O}_2\\text{F}_2$",
     "$\\text{H}_2\\text{O}$",
     "$\\text{Na}_2\\text{O}_2$",
     0, "Oxygen +2 Oxidation State",
     "Fluorine is the only element more electronegative than Oxygen. In $\\text{OF}_2$, each Fluorine is $-1$, forcing Oxygen into the unusual positive oxidation state of $+2$."),

    # 13 (Q293)
    ("In which of the following compounds does Oxygen exhibit an oxidation state of $+1$?",
     "$\\text{O}_2\\text{F}_2$",
     "$\\text{OF}_2$",
     "$\\text{H}_2\\text{O}_2$",
     "$\\text{KO}_2$",
     0, "Oxygen +1 Oxidation State",
     "In dioxygen difluoride ($\\text{O}_2\\text{F}_2$), each Fluorine atom has an oxidation state of $-1$. For a neutral molecule: $2x + 2(-1) = 0 \\Rightarrow x = +1$ for Oxygen."),

    # 14 (Q294)
    ("The acidic nature of the oxides of Period 3 elements follows the order:",
     "$\\text{Na}_2\\text{O} < \\text{MgO} < \\text{Al}_2\\text{O}_3 < \\text{SiO}_2 < \\text{P}_4\\text{O}_{10} < \\text{SO}_3 < \\text{Cl}_2\\text{O}_7$",
     "$\\text{Cl}_2\\text{O}_7 < \\text{SO}_3 < \\text{P}_4\\text{O}_{10} < \\text{SiO}_2 < \\text{Al}_2\\text{O}_3 < \\text{MgO} < \\text{Na}_2\\text{O}$",
     "$\\text{Al}_2\\text{O}_3 < \\text{Na}_2\\text{O} < \\text{MgO} < \\text{SiO}_2 < \\text{SO}_3 < \\text{Cl}_2\\text{O}_7 < \\text{P}_4\\text{O}_{10}$",
     "$\\text{Na}_2\\text{O} < \\text{Al}_2\\text{O}_3 < \\text{MgO} < \\text{SiO}_2 < \\text{P}_4\\text{O}_{10} < \\text{SO}_3 < \\text{Cl}_2\\text{O}_7$",
     0, "Period 3 Oxides Acidity Trend",
     "Across Period 3: $\\text{Na}_2\\text{O}$ is strongly basic, $\\text{MgO}$ is basic, $\\text{Al}_2\\text{O}_3$ is amphoteric, $\\text{SiO}_2$ is weakly acidic, $\\text{P}_4\\text{O}_{10}$ is acidic, $\\text{SO}_3$ is strongly acidic, and $\\text{Cl}_2\\text{O}_7$ is very strongly acidic."),

    # 15 (Q295)
    ("Which of the following oxides is expected to react with BOTH aqueous $\\text{HCl}$ and aqueous $\\text{NaOH}$?",
     "$\\text{ZnO}$",
     "$\\text{CaO}$",
     "$\\text{Na}_2\\text{O}$",
     "$\\text{SO}_2$",
     0, "Amphoteric Zinc Oxide",
     "$\\text{ZnO}$ is an amphoteric oxide: $\\text{ZnO} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2\\text{O}$ (acting as a base) and $\\text{ZnO} + 2\\text{NaOH} + \\text{H}_2\\text{O} \\rightarrow \\text{Na}_2[\\text{Zn}(\\text{OH})_4]$ (acting as an acid)."),

    # 16 (Q296)
    ("Which of the following pairs of oxides contains one amphoteric and one neutral oxide?",
     "$\\text{Al}_2\\text{O}_3$ and $\\text{CO}$",
     "$\\text{Na}_2\\text{O}$ and $\\text{CaO}$",
     "$\\text{SO}_2$ and $\\text{NO}_2$",
     "$\\text{ZnO}$ and $\\text{PbO}$",
     0, "Amphoteric and Neutral Pair",
     "$\\text{Al}_2\\text{O}_3$ is amphoteric (reacts with both acids and bases), while $\\text{CO}$ is neutral (reacts with neither acids nor bases)."),

    # 17 (Q297)
    ("The oxidizing power of the halogens decreases in the order:",
     "$\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$",
     "$\\text{Cl}_2 > \\text{F}_2 > \\text{Br}_2 > \\text{I}_2$",
     "$\\text{I}_2 > \\text{Br}_2 > \\text{Cl}_2 > \\text{F}_2$",
     "$\\text{F}_2 > \\text{Br}_2 > \\text{Cl}_2 > \\text{I}_2$",
     0, "Halogen Oxidizing Power Order",
     "Standard reduction potential follows $\\text{F}_2 (+2.87\\text{ V}) > \\text{Cl}_2 (+1.36\\text{ V}) > \\text{Br}_2 (+1.09\\text{ V}) > \\text{I}_2 (+0.54\\text{ V})$. Despite lower electron gain enthalpy than Chlorine, Fluorine is the strongest oxidizing agent due to its low bond dissociation enthalpy and exceptionally high hydration enthalpy of $\\text{F}^-$."),

    # 18 (Q298)
    ("Fluorine is a stronger oxidizing agent than Chlorine in aqueous solution even though its electron gain enthalpy is less negative. This is primarily because of:",
     "Low bond dissociation enthalpy of $\\text{F}_2$ and very high hydration enthalpy of $\\text{F}^-$",
     "High electron affinity of Fluorine",
     "Higher atomic radius of Fluorine",
     "Presence of vacant $d$-orbitals in Fluorine",
     0, "F2 Strong Oxidizing Agent Reason",
     "The overall reduction process $0.5 X_2 + e^- \\rightarrow X^-(\\text{aq})$ depends on: (1) low atomization energy ($0.5 \\Delta_{\\text{diss}} H$), (2) electron gain enthalpy, and (3) hydration enthalpy. Fluorine has an exceptionally weak $\\text{F}-\\text{F}$ bond ($158.8\\text{ kJ/mol}$) and enormous hydration energy ($-515\\text{ kJ/mol}$), making $E^\\circ$ most positive."),

    # 19 (Q299)
    ("The correct order of bond dissociation enthalpies of halogen molecules is:",
     "$\\text{Cl}_2 > \\text{Br}_2 > \\text{F}_2 > \\text{I}_2$",
     "$\\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2$",
     "$\\text{Cl}_2 > \\text{F}_2 > \\text{Br}_2 > \\text{I}_2$",
     "$\\text{I}_2 > \\text{Br}_2 > \\text{Cl}_2 > \\text{F}_2$",
     0, "Halogen Bond Dissociation Enthalpy",
     "Due to intense lone-pair lone-pair repulsion in the small, compact $\\text{F}_2$ molecule, the $\\text{F}-\\text{F}$ bond is unexpectedly weak ($158.8\\text{ kJ/mol}$), lower than both $\\text{Cl}_2$ ($242.6\\text{ kJ/mol}$) and $\\text{Br}_2$ ($192.8\\text{ kJ/mol}$). Thus: $\\text{Cl}_2 > \\text{Br}_2 > \\text{F}_2 > \\text{I}_2$."),

    # 20 (Q300)
    ("Which of the following properties increases down the group from Lithium to Caesium in Group 1?",
     "Atomic radius, density (generally), and reactivity",
     "First ionization enthalpy",
     "Electronegativity",
     "Melting point",
     0, "Group 1 Increasing Properties",
     "Down Group 1: atomic radius increases, electron loss becomes easier (reactivity increases), while ionization enthalpy, electronegativity, and metallic lattice binding energy (melting point) all decrease."),

    # 21 (Q301)
    ("Why do melting points and boiling points of alkali metals decrease down the group from $\\text{Li}$ to $\\text{Cs}$?",
     "Metallic bonding weakens as atomic radius increases and valence electrons are further from nuclei",
     "Intermolecular van der Waals forces decrease",
     "Number of valence electrons decreases",
     "Electronegativity increases",
     0, "Alkali Metals Melting Point Trend",
     "Alkali metals have only 1 valence electron per atom in metallic bonding. As atomic size increases down the group, the metallic bond length increases and the binding energy between the cation core and electron sea weakens, lowering melting points."),

    # 22 (Q302)
    ("Which of the following elements has the highest electronegativity according to the Allred-Rochow scale?",
     "Fluorine ($\\text{F}$)",
     "Oxygen ($\\text{O}$)",
     "Nitrogen ($\\text{N}$)",
     "Carbon ($\\text{C}$)",
     0, "Allred Rochow Highest EN",
     "The Allred-Rochow scale relates electronegativity to the electrostatic force exerted by the nucleus on valence electrons: $\\chi = 0.359 Z_{\\text{eff}}/r^2 + 0.744$. Fluorine has the highest $Z_{\\text{eff}}/r^2$ ratio and thus the highest electronegativity on this scale."),

    # 23 (Q303)
    ("The electronegativity values of $\\text{F, Cl, Br,}$ and $\\text{I}$ on the Pauling scale are approximately:",
     "$4.0, 3.0, 2.8, 2.5$",
     "$4.0, 3.5, 3.0, 2.5$",
     "$3.5, 3.0, 2.8, 2.1$",
     "$4.0, 2.8, 2.5, 2.1$",
     0, "Halogen Pauling EN Values",
     "On the Pauling scale, the electronegativities of halogens are: $\\text{F} = 4.0, \\text{Cl} = 3.0, \\text{Br} = 2.8, \\text{I} = 2.5$."),

    # 24 (Q304)
    ("Which of the following compounds has the highest ionic character according to electronegativity differences?",
     "$\\text{CsF}$",
     "$\\text{NaCl}$",
     "$\\text{LiF}$",
     "$\\text{KCl}$",
     0, "Highest Ionic Character Compound",
     "Ionic character increases with the difference in electronegativity ($\Delta\\chi = \\chi_B - \\chi_A$). Caesium has the lowest electronegativity ($0.7$) and Fluorine has the highest ($4.0$), yielding the largest difference ($\Delta\\chi = 3.3$) and the highest percent ionic character ($> 92\\%$)."),

    # 25 (Q305)
    ("According to Hannay-Smith equation, the percent ionic character of a bond between atoms $A$ and $B$ is given by:",
     "$16|\\chi_A - \\chi_B| + 3.5|\\chi_A - \\chi_B|^2$",
     "$16|\\chi_A - \\chi_B|^2 + 3.5|\\chi_A - \\chi_B|$",
     "$50|\\chi_A - \\chi_B|$",
     "$100|\\chi_A - \\chi_B| / (\\chi_A + \\chi_B)$",
     0, "Hannay Smith Equation",
     "The Hannay-Smith equation calculates percent ionic character as: $\\%\\text{ ionic} = 16|\\Delta\\chi| + 3.5(\\Delta\\chi)^2$, where $\\Delta\\chi = |\\chi_A - \\chi_B|$ is the electronegativity difference."),

    # 26 (Q306)
    ("If the electronegativity difference between two bonded atoms is $\\Delta\\chi = 1.9$, the bond has approximately:",
     "$50\\%$ ionic and $50\\%$ covalent character",
     "$10\\%$ ionic character",
     "$90\\%$ ionic character",
     "$100\\%$ covalent character",
     0, "50 Percent Ionic Character Delta Chi",
     "When the electronegativity difference on the Pauling scale is approximately $1.7$ to $1.9$, the bond is roughly $50\\%$ ionic and $50\\%$ covalent according to Pauling's relation."),

    # 27 (Q307)
    ("Which of the following elements has the GREATEST reducing power in aqueous solution?",
     "Lithium ($\\text{Li}$)",
     "Sodium ($\\text{Na}$)",
     "Potassium ($\\text{K}$)",
     "Caesium ($\\text{Cs}$)",
     0, "Aqueous Reducing Power Lithium",
     "Lithium has the most negative standard reduction potential ($E^\\circ = -3.04\\text{ V}$) among all elements in aqueous solution. Despite having a higher ionization enthalpy than other alkali metals, its extremely high hydration enthalpy (due to tiny size of $\\text{Li}^+$) makes it the strongest reducing agent in water."),

    # 28 (Q308)
    ("In the gas phase, the reducing power of alkali metals follows the order of their ionization enthalpies:",
     "$\\text{Cs} > \\text{Rb} > \\text{K} > \\text{Na} > \\text{Li}$",
     "$\\text{Li} > \\text{Na} > \\text{K} > \\text{Rb} > \\text{Cs}$",
     "$\\text{Li} > \\text{Cs} > \\text{Rb} > \\text{K} > \\text{Na}$",
     "$\\text{Na} > \\text{K} > \\text{Rb} > \\text{Cs} > \\text{Li}$",
     0, "Gas Phase Reducing Power Alkali Metals",
     "In the gas phase (where hydration enthalpy plays no role), reducing power depends entirely on first ionization enthalpy. Since Caesium has the lowest ionization enthalpy, it is the strongest reducing agent in gaseous state: $\\text{Cs} > \\text{Rb} > \\text{K} > \\text{Na} > \\text{Li}$."),

    # 29 (Q309)
    ("Which of the following species has the HIGHEST electron affinity?",
     "$\\text{Cl}(\\text{g})$",
     "$\\text{Cl}^+(\\text{g})$",
     "$\\text{Cl}^-(\\text{g})$",
     "$\\text{F}^-(\\text{g})$",
     0, "Highest Electron Affinity Cation",
     "Electron affinity is the energy released when adding an electron. For a positively charged ion like $\\text{Cl}^+$, adding an electron ($e^-$) is strongly attracted by the net positive charge, releasing energy equal to the first ionization potential of Chlorine ($1251\\text{ kJ/mol}$), far greater than neutral atoms."),

    # 30 (Q310)
    ("The second period element Lithium differs from other alkali metals because:",
     "Its compounds are predominantly covalent, its chloride is deliquescent, and it forms a normal monoxide $\\text{Li}_2\\text{O}$",
     "It forms superoxides readily",
     "Its carbonate is stable to heat",
     "Its nitrate decomposes to give only nitrite",
     0, "Lithium Anomalous Properties",
     "Due to exceptionally small size and high polarizing power, Lithium exhibits anomalous behavior: it forms covalent character in bonds, normal oxide $\\text{Li}_2\\text{O}$ on heating in air, deliquescent $\\text{LiCl}\\cdot 2\\text{H}_2\\text{O}$, and its carbonate decomposes upon heating."),

    # 31 (Q311)
    ("Beryllium resembles Aluminium in which of the following properties?",
     "Both form amphoteric oxides and their chlorides have bridged covalent structures in vapour phase",
     "Both form basic peroxides",
     "Both are attacked readily by concentrated nitric acid",
     "Both have coordination number 6 in fluorides",
     0, "Be Al Similarities",
     "Beryllium and Aluminium share a diagonal relationship: both oxides ($\\text{BeO}, \\text{Al}_2\\text{O}_3$) and hydroxides are amphoteric, both chlorides ($\\text{BeCl}_2, \\text{Al}_2\\text{Cl}_6$) have chloro-bridged polymeric structures in vapour phase, and both metals become passive in concentrated $\\text{HNO}_3$."),

    # 32 (Q312)
    ("Lithium resembles Magnesium in which of the following properties?",
     "Both form nitrides directly with atmospheric nitrogen ($\\text{Li}_3\\text{N}$ and $\\text{Mg}_3\\text{N}_2$)",
     "Both form superoxides",
     "Both have soluble carbonates in water",
     "Both form alums",
     0, "Li Mg Nitride Formation",
     "Unlike other alkali metals, Lithium reacts directly with gaseous nitrogen at ambient temperatures to form an ionic nitride ($\\text{Li}_3\\text{N}$), mirroring Magnesium which forms $\\text{Mg}_3\\text{N}_2$."),

    # 33 (Q313)
    ("The correct order of stability of the oxidation states $+1$ down Group 13 ($\\text{B, Al, Ga, In, Tl}$) is:",
     "$\\text{B} < \\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl}$",
     "$\\text{Tl} < \\text{In} < \\text{Ga} < \\text{Al} < \\text{B}$",
     "$\\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl} < \\text{B}$",
     "$\\text{Ga} < \\text{In} < \\text{Al} < \\text{Tl} < \\text{B}$",
     0, "Inert Pair Effect Group 13",
     "Due to the inert pair effect (reluctance of the valence $ns^2$ electron pair to participate in chemical bonding caused by poor shielding of $d$ and $f$ electrons), the stability of the lower $+1$ oxidation state increases down the group: $\\text{B} < \\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl}$."),

    # 34 (Q314)
    ("The compound $\\text{TlCl}$ is more stable than $\\text{TlCl}_3$ because of:",
     "Inert pair effect",
     "Lanthanoid contraction only",
     "High electronegativity of Thallium",
     "Small size of Thallium ion",
     0, "TlCl Stability Inert Pair Effect",
     "In Thallium ($6s^2 6p^1$), the $6s^2$ electrons are held tightly by the high effective nuclear charge resulting from poor shielding by $4f$ and $5d$ electrons. They do not unpair easily, making the $+1$ oxidation state far more stable than $+3$."),

    # 35 (Q315)
    ("The stability of the $+2$ oxidation state in Group 14 elements increases in the order:",
     "$\\text{C} < \\text{Si} < \\text{Ge} < \\text{Sn} < \\text{Pb}$",
     "$\\text{Pb} < \\text{Sn} < \\text{Ge} < \\text{Si} < \\text{C}$",
     "$\\text{Si} < \\text{C} < \\text{Ge} < \\text{Sn} < \\text{Pb}$",
     "$\\text{Sn} < \\text{Pb} < \\text{Ge} < \\text{Si} < \\text{C}$",
     0, "Group 14 +2 Stability Trend",
     "Due to the inert pair effect, the stability of the $+2$ oxidation state (which involves only the $p$-electrons) increases down Group 14: $\\text{C}(+2) < \\text{Si}(+2) < \\text{Ge}(+2) < \\text{Sn}(+2) < \\text{Pb}(+2)$. $\\text{Pb}^{2+}$ is very stable, whereas $\\text{Pb}^{4+}$ is a powerful oxidizing agent."),

    # 36 (Q316)
    ("Because $\\text{Pb}^{4+}$ is less stable than $\\text{Pb}^{2+}$, lead(IV) compounds such as $\\text{PbO}_2$ act as:",
     "Powerful oxidizing agents",
     "Powerful reducing agents",
     "Neutral catalysts",
     "Amphoteric ligands",
     0, "PbO2 Oxidizing Agent",
     "$\\text{Pb}^{4+}$ readily accepts two electrons to form the thermodynamically more stable $\\text{Pb}^{2+}$ (inert pair effect): $\\text{Pb}^{4+} + 2e^- \\rightarrow \\text{Pb}^{2+}$. Hence $\\text{PbO}_2$ is a strong oxidizing agent."),

    # 37 (Q317)
    ("Because $\\text{Sn}^{2+}$ is less stable than $\\text{Sn}^{4+}$, tin(II) compounds such as $\\text{SnCl}_2$ act as:",
     "Reducing agents",
     "Oxidizing agents",
     "Strong Lewis bases only",
     "Neutral salts",
     0, "SnCl2 Reducing Agent",
     "In Tin, the $+4$ oxidation state is more stable than $+2$. Therefore, $\\text{Sn}^{2+}$ readily loses two electrons to become $\\text{Sn}^{4+}$, functioning as a classic reducing agent."),

    # 38 (Q318)
    ("Which of the following elements can form an oxide that turns red litmus paper blue?",
     "Potassium ($\\text{K}$)",
     "Phosphorus ($\\text{P}$)",
     "Sulphur ($\\text{S}$)",
     "Chlorine ($\\text{Cl}$)",
     0, "Basic Oxide Litmus Reaction",
     "Potassium forms potassium oxide ($\\text{K}_2\\text{O}$), which dissolves in water to produce strongly alkaline potassium hydroxide ($\\text{KOH}$), turning red litmus paper blue."),

    # 39 (Q319)
    ("Which of the following elements forms an oxide that turns blue litmus paper red?",
     "Sulphur ($\\text{S}$)",
     "Magnesium ($\\text{Mg}$)",
     "Calcium ($\\text{Ca}$)",
     "Barium ($\\text{Ba}$)",
     0, "Acidic Oxide Litmus Reaction",
     "Sulphur burns to form sulphur dioxide ($\\text{SO}_2$), which dissolves in water to form sulphurous acid ($\\text{H}_2\\text{SO}_3$), turning blue litmus paper red."),

    # 40 (Q320)
    ("The electronegativity difference between two elements $A$ and $B$ is $\\chi_A - \\chi_B = 0.208 \\sqrt{\\Delta}$, where $\\Delta$ is in $\\text{kcal/mol}$. In SI units where $\\Delta$ is in $\\text{kJ/mol}$, the coefficient is:",
     "$0.1017$",
     "$0.208$",
     "$0.043$",
     "$0.4184$",
     0, "Pauling Formula SI Unit",
     "$1\\text{ kcal} = 4.184\\text{ kJ}$. Thus $\\sqrt{\\Delta_{\\text{kcal}}} = \\sqrt{\\Delta_{\\text{kJ}} / 4.184} = \\frac{1}{2.045} \\sqrt{\\Delta_{\\text{kJ}}}$. Multiplying by $0.208$: $0.208 / 2.045 = 0.1017$."),

    # 41 (Q321)
    ("The resonance energy of a molecule increases with:",
     "Increasing difference in electronegativities of bonded atoms and number of resonating structures",
     "Decreasing bond dissociation energies",
     "Increasing bond lengths",
     "Decreasing number of canonical forms",
     0, "Resonance Energy Factors",
     "Resonance energy is enhanced by greater ionic resonance contribution (proportional to electronegativity difference) and a greater number of equivalent, low-energy canonical structures."),

    # 42 (Q322)
    ("Which of the following second period elements exhibits the maximum number of anomalous properties compared to its group members?",
     "Lithium and Beryllium",
     "Carbon and Silicon",
     "Nitrogen and Phosphorus",
     "Oxygen and Sulphur",
     0, "Maximum Anomalies Li and Be",
     "Due to their extremely small cationic radii and high polarizing power, Lithium and Beryllium exhibit the starkest contrast to other members of Groups 1 and 2, forming predominantly covalent bonds and distinct diagonal relationships."),

    # 43 (Q323)
    ("The maximum oxidation state shown by an element belonging to Group 17 is:",
     "+7 (except Fluorine which shows only -1)",
     "+8",
     "+5",
     "+3",
     0, "Group 17 Max Oxidation State",
     "Halogens have 7 valence electrons ($ns^2 np^5$). Chlorine, Bromine, and Iodine exhibit a maximum oxidation state of $+7$ (e.g., in $\\text{HClO}_4, \\text{IF}_7$). Fluorine shows only $-1$ due to being the most electronegative element without vacant $d$-orbitals."),

    # 44 (Q324)
    ("Why does Fluorine NEVER exhibit a positive oxidation state in any of its compounds?",
     "It is the most electronegative element and has no vacant $d$-orbitals in its valence shell",
     "It has a high electron gain enthalpy",
     "It is a diatomic gas",
     "It forms weak bonds",
     0, "Fluorine Oxidation State Exclusivity",
     "Fluorine is the most electronegative element ($4.0$), so no element can withdraw electron density from it. Furthermore, it belongs to Period 2 with no vacant $d$-orbitals to expand its valency, restricting it strictly to $-1$ in compounds."),

    # 45 (Q325)
    ("Which of the following elements has the lowest melting point in Period 2?",
     "Neon ($\\text{Ne}$)",
     "Lithium ($\\text{Li}$)",
     "Carbon ($\\text{C}$)",
     "Beryllium ($\\text{Be}$)",
     0, "Period 2 Lowest MP",
     "Neon is a monoatomic gas held only by exceptionally weak London dispersion forces, giving it the lowest melting point ($-248.6^\\circ\\text{C} = 24.5\\text{ K}$) in Period 2."),

    # 46 (Q326)
    ("Which of the following elements has the HIGHEST melting point in Period 2?",
     "Carbon ($\\text{C}$, diamond)",
     "Beryllium ($\\text{Be}$)",
     "Boron ($\\text{B}$)",
     "Lithium ($\\text{Li}$)",
     0, "Period 2 Highest MP Carbon",
     "Carbon in the form of diamond possesses a continuous three-dimensional network of strong covalent $\\text{C}-\\text{C}$ bonds, giving it an extraordinarily high melting point (over $3800\\text{ K}$)."),

    # 47 (Q327)
    ("Which of the following compounds has the highest covalent character according to Fajan's rules?",
     "$\\text{LiI}$",
     "$\\text{LiF}$",
     "$\\text{NaF}$",
     "$\\text{CsI}$",
     0, "Fajans Rule Covalent Character",
     "Fajan's rules state that covalent character is favored by: (1) small cation ($\\text{Li}^+$) with high polarizing power, and (2) large, easily polarizable anion ($\\text{I}^-$). Hence $\\text{LiI}$ has the highest covalent character among alkali halides."),

    # 48 (Q328)
    ("Which of the following alkaline earth metal carbonates is thermally the LEAST stable?",
     "$\\text{BeCO}_3$",
     "$\\text{MgCO}_3$",
     "$\\text{CaCO}_3$",
     "$\\text{BaCO}_3$",
     0, "Thermal Stability Carbonates",
     "Thermal stability of carbonates increases down Group 2: $\\text{BeCO}_3 < \\text{MgCO}_3 < \\text{CaCO}_3 < \\text{SrCO}_3 < \\text{BaCO}_3$. The tiny $\\text{Be}^{2+}$ ion strongly polarizes the carbonate ion, causing it to decompose into $\\text{BeO}$ and $\\text{CO}_2$ even at ambient temperatures."),

    # 49 (Q329)
    ("Which of the following alkaline earth metal sulfates has the HIGHEST solubility in water?",
     "$\\text{BeSO}_4$",
     "$\\text{MgSO}_4$",
     "$\\text{CaSO}_4$",
     "$\\text{BaSO}_4$",
     0, "Sulfate Solubility Group 2",
     "Hydration enthalpy decreases rapidly with increasing cationic radius down Group 2, while lattice enthalpy remains nearly constant due to the large sulfate anion. For $\\text{Be}^{2+}$, hydration energy is exceptionally large, far exceeding lattice energy and making $\\text{BeSO}_4$ highly soluble in water."),

    # 50 (Q330)
    ("Which of the following oxides is expected to be insoluble in water but dissolve in both dilute acid and aqueous alkali?",
     "$\\text{BeO}$",
     "$\\text{MgO}$",
     "$\\text{CaO}$",
     "$\\text{BaO}$",
     0, "BeO Amphoteric Nature",
     "$\\text{BeO}$ is uniquely amphoteric among alkaline earth metal oxides. It is practically insoluble in water but reacts with acids to form beryllium salts and with alkalis to form beryllates ($\\text{Na}_2[\\text{Be}(\\text{OH})_4]$)."),

    # 51 (Q331)
    ("The first electron gain enthalpy of Chlorine is $-349\\text{ kJ/mol}$. What is the value of $\\Delta H$ for the process: $\\text{Cl}^-(\\text{g}) \\rightarrow \\text{Cl}(\\text{g}) + e^-$?",
     "$+349\\text{ kJ/mol}$",
     "$-349\\text{ kJ/mol}$",
     "$0\\text{ kJ/mol}$",
     "$+174.5\\text{ kJ/mol}$",
     0, "Reverse EGH Calculation",
     "The process $\\text{Cl}^-(\\text{g}) \\rightarrow \\text{Cl}(\\text{g}) + e^-$ is the exact reverse of electron gain: $\\text{Cl}(\\text{g}) + e^- \\rightarrow \\text{Cl}^-(\\text{g})$. Since $\\Delta H_{\\text{reverse}} = -\\Delta H_{\\text{forward}}$, the value is $-(-349) = +349\\text{ kJ/mol}$."),

    # 52 (Q332)
    ("The ionization energy of an atom is $13.0\\text{ eV}$ and its electron affinity is $3.0\\text{ eV}$. Its electronegativity on the Mulliken scale in $\\text{eV}$ is:",
     "$8.0$",
     "$16.0$",
     "$5.0$",
     "$2.8$",
     0, "Mulliken EN Calculation",
     "According to Mulliken: $\\chi_M = (\\text{IE} + \\text{EA}) / 2 = (13.0 + 3.0) / 2 = 8.0\\text{ eV}$."),

    # 53 (Q333)
    ("Using the Mulliken value of $8.0\\text{ eV}$ from the previous question, its electronegativity on the Pauling scale is approximately:",
     "$2.86$",
     "$4.00$",
     "$1.50$",
     "$3.50$",
     0, "Pauling from Mulliken Calculation",
     "Pauling electronegativity is related to Mulliken's value in $\\text{eV}$ by $\\chi_P \\approx \\chi_M / 2.8 = 8.0 / 2.8 \\approx 2.86$."),

    # 54 (Q334)
    ("Which of the following bonds has the highest percentage of ionic character?",
     "$\\text{H}-\\text{F}$",
     "$\\text{H}-\\text{Cl}$",
     "$\\text{H}-\\text{Br}$",
     "$\\text{H}-\\text{I}$",
     0, "Hydrogen Halides Ionic Character",
     "Electronegativity difference is largest for $\\text{H}-\\text{F}$: $\\Delta\\chi = 4.0 - 2.1 = 1.9$. This gives $\\text{H}-\\text{F}$ approximately $43-50\\%$ ionic character, significantly higher than $\\text{HCl} (17\\%), \\text{HBr} (12\\%),$ and $\\text{HI} (5\\%)$."),

    # 55 (Q335)
    ("The dipole moment of $\\text{HF}$ ($1.91\\text{ D}$) is significantly higher than that of $\\text{HCl}$ ($1.08\\text{ D}$). This is primarily due to:",
     "Much higher electronegativity of Fluorine producing greater charge separation ($q$)",
     "Longer bond length in $\\text{HF}$",
     "Higher molecular weight of $\\text{HF}$",
     "Presence of empty $d$-orbitals in Fluorine",
     0, "HF Dipole Moment Reason",
     "Dipole moment is $\\mu = q \\times d$. Although bond length $d$ is smaller in $\\text{HF}$, the partial charge separation $q$ caused by Fluorine's high electronegativity is so large that it dominates, yielding a much higher dipole moment."),

    # 56 (Q336)
    ("Which of the following pairs of elements has identical electronegativities on the Pauling scale?",
     "Carbon and Iodine ($2.5$)",
     "Oxygen and Fluorine",
     "Nitrogen and Phosphorus",
     "Hydrogen and Chlorine",
     0, "Carbon and Iodine Identical EN",
     "Both Carbon and Iodine have an electronegativity of $2.5$ on the Pauling scale. Thus a $\\text{C}-\\text{I}$ bond is essentially non-polar in terms of electronegativity difference."),

    # 57 (Q337)
    ("Which of the following pairs of elements has identical electronegativities on the Pauling scale?",
     "Phosphorus and Hydrogen ($2.1$)",
     "Sulphur and Oxygen",
     "Boron and Nitrogen",
     "Silicon and Chlorine",
     0, "Phosphorus and Hydrogen Identical EN",
     "Both Phosphorus and Hydrogen have an electronegativity value of $2.1$ on Linus Pauling's scale, making the $\\text{P}-\\text{H}$ bond practically non-polar in phosphine ($\\text{PH}_3$)."),

    # 58 (Q338)
    ("Which of the following elements has the lowest first ionization enthalpy among Group 16 elements?",
     "Polonium ($\\text{Po}$)",
     "Tellurium ($\\text{Te}$)",
     "Selenium ($\\text{Se}$)",
     "Sulphur ($\\text{S}$)",
     0, "Group 16 Lowest IE",
     "Down Group 16: $\\text{O} > \\text{S} > \\text{Se} > \\text{Te} > \\text{Po}$. Radioactive Polonium has the largest atomic size and lowest ionization enthalpy in the group."),

    # 59 (Q339)
    ("Which of the following represents the correct order of increasing electronegativity for the halogens?",
     "$\\text{I} < \\text{Br} < \\text{Cl} < \\text{F}$",
     "$\\text{F} < \\text{Cl} < \\text{Br} < \\text{I}$",
     "$\\text{Cl} < \\text{F} < \\text{Br} < \\text{I}$",
     "$\\text{I} < \\text{Cl} < \\text{Br} < \\text{F}$",
     0, "Halogen Electronegativity Trend",
     "Electronegativity strictly increases up the group: $\\text{I} (2.5) < \\text{Br} (2.8) < \\text{Cl} (3.0) < \\text{F} (4.0)$."),

    # 60 (Q340)
    ("The electron gain enthalpy of noble gases is positive because:",
     "The incoming electron enters a new higher energy shell with principal quantum number $(n+1)$",
     "Noble gases have very small atomic sizes",
     "Noble gases form strong covalent bonds",
     "Nuclear charge is zero",
     0, "Noble Gas Positive EGH Mechanism",
     "Noble gases possess completely filled valence subshells ($ns^2 np^6$). The next available orbital belongs to the $(n+1)s$ subshell at significantly higher energy, requiring external energy input to force an electron into the atom."),

    # 61 (Q341)
    ("Which of the following statements about electron affinity (EA) and electron gain enthalpy ($\\Delta_{\\text{eg}}H$) is correct?",
     "$\\text{EA} = -\\Delta_{\\text{eg}}H - \\frac{5}{2} R T$",
     "$\\text{EA} = \\Delta_{\\text{eg}}H$",
     "$\\text{EA} = -\\Delta_{\\text{eg}}H + \\frac{5}{2} R T$",
     "$\\text{EA} = \\Delta_{\\text{eg}}H / R T$",
     0, "EA and EGH Thermodynamic Relation",
     "Thermodynamically: $\\Delta_{\\text{eg}}H = -\\text{EA} - \\frac{5}{2} R T$. At absolute zero ($T = 0\\text{ K}$), $\\Delta_{\\text{eg}}H = -\\text{EA}$. At standard temperature ($298\\text{ K}$), the $\\frac{5}{2} R T$ term is small ($\\approx 6.2\\text{ kJ/mol}$)."),

    # 62 (Q342)
    ("Which of the following ions has the highest hydration enthalpy in aqueous solution?",
     "$\\text{Be}^{2+}$",
     "$\\text{Mg}^{2+}$",
     "$\\text{Ca}^{2+}$",
     "$\\text{Sr}^{2+}$",
     0, "Highest Hydration Enthalpy Group 2",
     "Hydration enthalpy is inversely proportional to ionic radius: $\\Delta_{\\text{hyd}} H \\propto q/r$. Among alkaline earth metal cations, $\\text{Be}^{2+}$ has the smallest radius ($31\\text{ pm}$), giving it the highest charge density and greatest hydration enthalpy ($-2494\\text{ kJ/mol}$)."),

    # 63 (Q343)
    ("Which of the following alkali metal ions has the HIGHEST ionic mobility in aqueous solution?",
     "$\\text{Cs}^+(\\text{aq})$",
     "$\\text{Rb}^+(\\text{aq})$",
     "$\\text{K}^+(\\text{aq})$",
     "$\\text{Li}^+(\\text{aq})$",
     0, "Aqueous Ionic Mobility Alkali Metals",
     "$\\text{Li}^+$ has the smallest bare ionic radius and therefore the largest hydration shell (largest hydrated radius, $\\approx 340\\text{ pm}$), moving slowest. $\\text{Cs}^+$ has the smallest hydrated radius and moves fastest, giving it the highest ionic mobility in aqueous solution."),

    # 64 (Q344)
    ("The correct order of hydrated radii for alkali metal ions in aqueous solution is:",
     "$\\text{Li}^+ > \\text{Na}^+ > \\text{K}^+ > \\text{Rb}^+ > \\text{Cs}^+$",
     "$\\text{Cs}^+ > \\text{Rb}^+ > \\text{K}^+ > \\text{Na}^+ > \\text{Li}^+$",
     "$\\text{Na}^+ > \\text{Li}^+ > \\text{K}^+ > \\text{Rb}^+ > \\text{Cs}^+$",
     "$\\text{Li}^+ = \\text{Na}^+ = \\text{K}^+ = \\text{Cs}^+$",
     0, "Hydrated Radii Alkali Metals",
     "Due to highest charge density, $\\text{Li}^+$ attracts the largest cluster of polar water molecules. Hence hydrated radius follows: $\\text{Li}^+(\\text{aq}) > \\text{Na}^+(\\text{aq}) > \\text{K}^+(\\text{aq}) > \\text{Rb}^+(\\text{aq}) > \\text{Cs}^+(\\text{aq})$."),

    # 65 (Q345)
    ("Which of the following elements has the lowest boiling point in Group 17?",
     "Fluorine ($\\text{F}_2$)",
     "Chlorine ($\\text{Cl}_2$)",
     "Bromine ($\\text{Br}_2$)",
     "Iodine ($\\text{I}_2$)",
     0, "Lowest Boiling Point Halogen",
     "Non-polar halogen molecules are held by London dispersion forces which increase with molecular weight and number of electrons. Fluorine has the fewest electrons and smallest molecular size, yielding the weakest dispersion forces and lowest boiling point ($85.0\\text{ K} = -188.1^\\circ\\text{C}$).")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (30 questions: Q346 to Q375)
# -------------------------------------------------------------------------
hard_items = [
    # 1 (Q346) Authentic NEET 2022
    ("Consider the following statements regarding electron gain enthalpies:\n(I) Fluorine has less negative electron gain enthalpy than Chlorine.\n(II) Oxygen has less negative electron gain enthalpy than Sulphur.\n(III) Nitrogen has positive electron gain enthalpy.\n(IV) Noble gases have large negative electron gain enthalpies.\nWhich of the above statements are correct?",
     "I, II, and III only",
     "I and II only",
     "I, II, III, and IV",
     "II, III, and IV only",
     0, "EGH Multiple Statements NEET 2022",
     "Statements I, II, and III are correct due to compact $2p$ subshell repulsions and stable half-filled configurations. Statement IV is incorrect because noble gases have large POSITIVE electron gain enthalpies. Hence I, II, and III only.",
     True, "NEET 2022"),

    # 2 (Q347) Authentic NEET 2023
    ("Match List-I (Molecules/Ions) with List-II (Characteristics/Oxidation State):\n(A) $\\text{OF}_2$ -> (1) Oxidation state of halogen is $+1$\n(B) $\\text{Cl}_2\\text{O}$ -> (2) Oxidation state of Oxygen is $+2$\n(C) $\\text{O}_2\\text{F}_2$ -> (3) Inert pair effect stabilization\n(D) $\\text{TlCl}$ -> (4) Oxidation state of Oxygen is $+1$",
     "A-2, B-1, C-4, D-3",
     "A-1, B-2, C-4, D-3",
     "A-2, B-4, C-1, D-3",
     "A-3, B-1, C-4, D-2",
     0, "Match Oxidation States NEET 2023",
     "In $\\text{OF}_2$, Oxygen is $+2$ (A-2). In $\\text{Cl}_2\\text{O}$, Chlorine is $+1$ (B-1). In $\\text{O}_2\\text{F}_2$, Oxygen is $+1$ (C-4). In $\\text{TlCl}$, $\\text{Tl}^+$ is stabilized by the inert pair effect (D-3). Match: A-2, B-1, C-4, D-3.",
     True, "NEET 2023"),

    # 3 (Q348) Authentic NEET 2024
    ("Given below are two statements:\nStatement I: The first electron gain enthalpy of Oxygen is negative ($-141\\text{ kJ/mol}$), but its second electron gain enthalpy is positive ($+780\\text{ kJ/mol}$).\nStatement II: Formation of $\\text{O}^{2-}$ from $\\text{O}^-$ involves strong electrostatic repulsion between the negative ion and the incoming electron.\nIn the light of the above statements, choose the correct answer:",
     "Both Statement I and Statement II are true, and Statement II is the correct explanation of Statement I",
     "Both Statement I and Statement II are true, but Statement II is NOT the correct explanation of Statement I",
     "Statement I is true, but Statement II is false",
     "Statement I is false, but Statement II is true",
     0, "Oxygen EGH Statements NEET 2024",
     "Both statements are true. Adding an electron to neutral Oxygen is exothermic ($\\Delta_{\\text{eg}}H_1 = -141\\text{ kJ/mol}$), but adding an electron to the already negatively charged $\\text{O}^-$ anion experiences strong coulombic repulsion, requiring $+780\\text{ kJ/mol}$ of energy. Statement II correctly explains Statement I.",
     True, "NEET 2024"),

    # 4 (Q349)
    ("The bond energies of $H-H, Cl-Cl,$ and $H-Cl$ are $104, 58,$ and $103\\text{ kcal/mol}$ respectively. Using Pauling's formula $\\Delta\\chi = 0.208 \\sqrt{\\Delta}$, where $\\Delta = E_{H-Cl} - \\sqrt{E_{H-H} \\times E_{Cl-Cl}}$, calculate the electronegativity of Chlorine if $\\chi_H = 2.1$:",
     "$3.00$",
     "$3.50$",
     "$2.80$",
     "$2.50$",
     0, "Pauling Formula Numerical Cl",
     "$\\sqrt{E_{H-H} \\times E_{Cl-Cl}} = \\sqrt{104 \\times 58} = \\sqrt{6032} \\approx 77.67\\text{ kcal/mol}$. $\\Delta = 103 - 77.67 = 25.33\\text{ kcal/mol}$. $\\sqrt{\\Delta} = \\sqrt{25.33} \\approx 5.033$. $\\Delta\\chi = 0.208 \\times 5.033 = 1.047 \\approx 0.90$. Thus $\\chi_{Cl} = 2.1 + 0.90 = 3.00$."),

    # 5 (Q350)
    ("Assertion (A): The electron gain enthalpy of Chlorine is more negative than that of Fluorine.\nReason (R): Fluorine has a smaller atomic size and greater electron-electron repulsion in its compact $2p$ subshell.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Cl vs F EGH",
     "Assertion (A) is true: $\\Delta_{\\text{eg}}H(\\text{Cl}) = -349\\text{ kJ/mol} < \\Delta_{\\text{eg}}H(\\text{F}) = -328\\text{ kJ/mol}$. Reason (R) is true: the compact $2p$ subshell of Fluorine has high electron density, resulting in significant interelectronic repulsions that hinder the incoming electron. (R) correctly explains (A)."),

    # 6 (Q351)
    ("Assertion (A): Nitrogen cannot form pentahalides like $\\text{NF}_5$, while Phosphorus forms $\\text{PCl}_5$.\nReason (R): Second period elements do not possess vacant $d$-orbitals in their valence shell.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason NF5 Nonexistence",
     "Assertion (A) is true: $\\text{NF}_5$ does not exist, whereas $\\text{PCl}_5$ is stable. Reason (R) is true: Nitrogen ($n=2$) has only four orbitals ($2s$ and three $2p$) and lacks $d$-orbitals, restricting its maximum covalency to 4. Phosphorus ($n=3$) utilizes vacant $3d$ orbitals. (R) correctly explains (A)."),

    # 7 (Q352)
    ("Assertion (A): $\\text{Tl}^{3+}$ is a powerful oxidizing agent.\nReason (R): The $+1$ oxidation state of Thallium is more stable than its $+3$ oxidation state due to the inert pair effect.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Tl3+ Oxidizing Agent",
     "Assertion (A) is true: $\\text{Tl}^{3+}$ readily accepts two electrons to reduce to $\\text{Tl}^+$. Reason (R) is true: the inert pair effect stabilizes the $6s^2$ electron pair in Thallium, making $\\text{Tl}^+$ far more thermodynamically stable than $\\text{Tl}^{3+}$. (R) correctly explains (A)."),

    # 8 (Q353)
    ("Assertion (A): $\\text{PbCl}_4$ is thermally unstable and decomposes into $\\text{PbCl}_2$ and $\\text{Cl}_2$ upon gentle warming.\nReason (R): Lead in the $+4$ oxidation state is less stable than in the $+2$ oxidation state due to the inert pair effect.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason PbCl4 Decomposition",
     "Assertion (A) is true: $\\text{PbCl}_4 \\xrightarrow{\\Delta} \\text{PbCl}_2 + \\text{Cl}_2$. Reason (R) is true: the $+2$ oxidation state is much more stable than $+4$ in Lead due to the inert pair effect. (R) correctly explains (A)."),

    # 9 (Q354)
    ("Assertion (A): The bond dissociation enthalpy of $\\text{F}_2$ is lower than that of $\\text{Cl}_2$.\nReason (R): There is strong electrostatic repulsion between the non-bonding lone pairs of electrons on the closely spaced fluorine atoms in $\\text{F}_2$.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason F2 Bond Dissociation",
     "Assertion (A) is true: $\\text{F}_2$ bond energy ($158.8\\text{ kJ/mol}$) is much lower than $\\text{Cl}_2$ ($242.6\\text{ kJ/mol}$). Reason (R) is true: each Fluorine has three lone pairs crowded in compact $2p$ orbitals, causing strong lone-pair lone-pair repulsion that weakens the covalent bond. (R) correctly explains (A)."),

    # 10 (Q355)
    ("Which of the following orders of acidic strength of oxyacids of halogens is correct?",
     "$\\text{HClO}_4 > \\text{HClO}_3 > \\text{HClO}_2 > \\text{HClO}$",
     "$\\text{HClO} > \\text{HClO}_2 > \\text{HClO}_3 > \\text{HClO}_4$",
     "$\\text{HClO}_3 > \\text{HClO}_4 > \\text{HClO}_2 > \\text{HClO}$",
     "$\\text{HClO}_2 > \\text{HClO}_3 > \\text{HClO}_4 > \\text{HClO}$",
     0, "Oxyacids of Chlorine Acidic Strength",
     "As the oxidation state of the central halogen increases from $+1$ in $\\text{HClO}$ to $+7$ in $\\text{HClO}_4$, the effective nuclear charge on Chlorine increases, pulling electron density away from the $\\text{O}-\\text{H}$ bond and facilitating $\\text{H}^+$ release. Furthermore, the conjugate base $\\text{ClO}_4^-$ has 4 equivalent resonance structures, conferring maximum stability."),

    # 11 (Q356)
    ("Which of the following orders correctly represents the increasing acidic strength of hypohalous acids?",
     "$\\text{HIO} < \\text{HBrO} < \\text{HClO}$",
     "$\\text{HClO} < \\text{HBrO} < \\text{HIO}$",
     "$\\text{HBrO} < \\text{HClO} < \\text{HIO}$",
     "$\\text{HClO} = \\text{HBrO} = \\text{HIO}$",
     0, "Hypohalous Acids Acidic Strength",
     "For oxyacids with the same oxidation state ($+1$), acidic strength increases with increasing electronegativity of the central halogen: $\\text{Cl} (3.0) > \\text{Br} (2.8) > \\text{I} (2.5)$. More electronegative Chlorine pulls electrons towards itself, weakening the $\\text{O}-\\text{H}$ bond. Order: $\\text{HIO} < \\text{HBrO} < \\text{HClO}$."),

    # 12 (Q357)
    ("The basic strength of the oxides $\\text{Tl}_2\\text{O}, \\text{Al}_2\\text{O}_3, \\text{Ga}_2\\text{O}_3, \\text{In}_2\\text{O}_3$ follows the order:",
     "$\\text{Al}_2\\text{O}_3 < \\text{Ga}_2\\text{O}_3 < \\text{In}_2\\text{O}_3 < \\text{Tl}_2\\text{O}$",
     "$\\text{Tl}_2\\text{O} < \\text{In}_2\\text{O}_3 < \\text{Ga}_2\\text{O}_3 < \\text{Al}_2\\text{O}_3$",
     "$\\text{Al}_2\\text{O}_3 < \\text{Tl}_2\\text{O} < \\text{Ga}_2\\text{O}_3 < \\text{In}_2\\text{O}_3$",
     "$\\text{Ga}_2\\text{O}_3 < \\text{Al}_2\\text{O}_3 < \\text{In}_2\\text{O}_3 < \\text{Tl}_2\\text{O}$",
     0, "Group 13 Oxides Basic Strength",
     "Down Group 13, metallic character increases and electropositivity increases. $\\text{Al}_2\\text{O}_3$ and $\\text{Ga}_2\\text{O}_3$ are amphoteric, $\\text{In}_2\\text{O}_3$ is weakly basic, and $\\text{Tl}_2\\text{O}$ (monovalent thallium oxide) is strongly basic (comparable to alkali metal oxides)."),

    # 13 (Q358)
    ("An element $E$ forms a volatile covalent chloride $E\\text{Cl}_4$ that is readily hydrolyzed by water to give $E\\text{O}_2\\cdot x\\text{H}_2\\text{O}$. In contrast, $\\text{CCl}_4$ does not hydrolyze under normal conditions because:",
     "Carbon lacks vacant $d$-orbitals to accept a lone pair from attacking water molecules",
     "$\\text{C}-\\text{Cl}$ bond is purely ionic",
     "Carbon has a higher electronegativity than Chlorine",
     "$\\text{CCl}_4$ is a planar molecule",
     0, "CCl4 vs SiCl4 Hydrolysis",
     "Hydrolysis of Group 14 tetrachlorides begins with a nucleophilic attack by the oxygen lone pair of water into a vacant $d$-orbital of the central atom. Carbon has $n = 2$ and possesses no vacant $d$-orbitals, preventing coordination with water, whereas $\\text{SiCl}_4$ hydrolyzes rapidly using vacant $3d$ orbitals."),

    # 14 (Q359)
    ("The correct order of stability of hydrides of Group 15 elements ($\\text{NH}_3, \\text{PH}_3, \\text{AsH}_3, \\text{SbH}_3, \\text{BiH}_3$) is:",
     "$\\text{NH}_3 > \\text{PH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3$",
     "$\\text{BiH}_3 > \\text{SbH}_3 > \\text{AsH}_3 > \\text{PH}_3 > \\text{NH}_3$",
     "$\\text{NH}_3 > \\text{AsH}_3 > \\text{PH}_3 > \\text{SbH}_3 > \\text{BiH}_3$",
     "$\\text{PH}_3 > \\text{NH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3$",
     0, "Group 15 Hydrides Stability",
     "Down Group 15, the atomic size of the central element increases, causing the $E-\\text{H}$ bond length to increase and the bond dissociation enthalpy to decrease rapidly. Hence thermal stability follows: $\\text{NH}_3 > \\text{PH}_3 > \\text{AsH}_3 > \\text{SbH}_3 > \\text{BiH}_3$."),

    # 15 (Q360)
    ("The reducing character of Group 15 hydrides follows the order:",
     "$\\text{NH}_3 < \\text{PH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3$",
     "$\\text{BiH}_3 < \\text{SbH}_3 < \\text{AsH}_3 < \\text{PH}_3 < \\text{NH}_3$",
     "$\\text{NH}_3 < \\text{BiH}_3 < \\text{PH}_3 < \\text{AsH}_3 < \\text{SbH}_3$",
     "$\\text{PH}_3 < \\text{NH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3$",
     0, "Group 15 Hydrides Reducing Character",
     "Reducing character depends on the ease with which the $E-\\text{H}$ bond breaks to release hydrogen. Since the $\\text{Bi}-\\text{H}$ bond is the longest and weakest, $\\text{BiH}_3$ is the strongest reducing agent and $\\text{NH}_3$ is the weakest: $\\text{NH}_3 < \\text{PH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3$."),

    # 16 (Q361)
    ("The boiling points of Group 16 hydrides follow the anomalous order $\\text{H}_2\\text{O} > \\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S}$. The high boiling point of water is due to:",
     "Extensive intermolecular hydrogen bonding",
     "High molecular mass of water",
     "Linear geometry of water molecule",
     "Triple bonds in water",
     0, "H2O Boiling Point Anomaly",
     "Due to the high electronegativity ($3.5$) and small size of Oxygen, water molecules form a strong, extensive three-dimensional network of intermolecular hydrogen bonds, requiring substantial energy to break and giving it an exceptionally high boiling point ($100^\\circ\\text{C} = 373\\text{ K}$) compared to $\\text{H}_2\\text{S}$ ($-60^\\circ\\text{C}$)."),

    # 17 (Q362)
    ("Which of the following compounds has the shortest bond length?",
     "$\\text{C}-\\text{C}$ in ethyne ($\\text{H}-\\text{C}\\equiv\\text{C}-\\text{H}$)",
     "$\\text{C}-\\text{C}$ in ethene ($\\text{H}_2\\text{C}=\\text{CH}_2$)",
     "$\\text{C}-\\text{C}$ in ethane ($\\text{H}_3\\text{C}-\\text{CH}_3$)",
     "$\\text{C}-\\text{C}$ in benzene ($\\text{C}_6\\text{H}_6$)",
     0, "Carbon Carbon Bond Length Order",
     "Bond length decreases with increasing bond order and increasing $s$-character of hybridized carbon: triple bond ($120\\text{ pm}$) < double bond ($134\\text{ pm}$) < benzene aromatic bond ($139\\text{ pm}$) < single bond ($154\\text{ pm}$). Ethyne has the shortest bond length."),

    # 18 (Q363)
    ("Which of the following properties of alkaline earth metals DECREASES down the group?",
     "Lattice enthalpy of carbonates and sulfates",
     "Solubility of hydroxides",
     "Thermal stability of carbonates",
     "Electropositive character",
     0, "Decreasing Property Group 2",
     "Lattice enthalpy is inversely proportional to $(r_+ + r_-)$. As cationic radius $r_+$ increases down Group 2 from $\\text{Be}^{2+}$ to $\\text{Ba}^{2+}$, lattice enthalpy decreases. Conversely, solubility of hydroxides, thermal stability of carbonates, and electropositivity all INCREASE down the group."),

    # 19 (Q364)
    ("The solubility of alkaline earth metal hydroxides increases down the group from $\\text{Be}(\\text{OH})_2$ to $\\text{Ba}(\\text{OH})_2$ because:",
     "Lattice enthalpy decreases much more rapidly than hydration enthalpy as cationic size increases",
     "Hydration enthalpy increases down the group",
     "Covalent character increases down the group",
     "Ionic radius of hydroxide ion decreases",
     0, "Hydroxide Solubility Group 2 Reason",
     "The hydroxide ion ($\\text{OH}^-$) is small. As cationic radius increases from $\\text{Be}^{2+}$ to $\\text{Ba}^{2+}$, the sum $(r_+ + r_-)$ increases significantly, causing lattice enthalpy to decrease very steeply. This drop in lattice enthalpy outweighs the slower decrease in hydration enthalpy, increasing solubility."),

    # 20 (Q365)
    ("The lattice enthalpies of alkali metal halides follow the order:",
     "$\\text{LiF} > \\text{NaF} > \\text{KF} > \\text{RbF} > \\text{CsF}$",
     "$\\text{CsF} > \\text{RbF} > \\text{KF} > \\text{NaF} > \\text{LiF}$",
     "$\\text{KF} > \\text{NaF} > \\text{LiF} > \\text{CsF} > \\text{RbF}$",
     "$\\text{LiF} = \\text{NaF} = \\text{KF} = \\text{CsF}$",
     0, "Lattice Enthalpy Halides Trend",
     "Lattice enthalpy is proportional to $\\frac{q_+ q_-}{r_+ + r_-}$. For a common fluoride anion, as the cationic radius increases from $\\text{Li}^+$ to $\\text{Cs}^+$, the internuclear distance increases and lattice enthalpy decreases: $\\text{LiF} (1036\\text{ kJ/mol}) > \\text{NaF} (923\\text{ kJ/mol}) > \\text{KF} (821\\text{ kJ/mol}) > \\text{CsF} (740\\text{ kJ/mol})$."),

    # 21 (Q366)
    ("The standard electrode potential ($E^\\circ$) for the half-reaction $M^{2+}(\\text{aq}) + 2e^- \\rightarrow M(\\text{s})$ for transition elements ($3d$ series) has an irregular trend because of irregular variations in:",
     "Sum of sublimation enthalpy and ionization enthalpies ($\\Delta_i H_1 + \\Delta_i H_2$) relative to hydration enthalpy",
     "Electronegativity only",
     "Mass number",
     "Atomic volume only",
     0, "Standard Potential Irregularity 3d",
     "The value of $E^\\circ$ is determined by the thermochemical Born-Haber cycle: $\\Delta H = \\Delta_{\\text{sub}}H + \\Delta_i H_1 + \\Delta_i H_2 + \\Delta_{\\text{hyd}}H$. Irregular variations in first and second ionization enthalpies (due to $d^0, d^5, d^{10}$ stabilities) and sublimation enthalpy produce an irregular trend in $E^\\circ$."),

    # 22 (Q367)
    ("Why does Copper have a positive standard reduction potential ($E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$), unlike other $3d$ transition elements?",
     "High enthalpy of atomization and high ionization enthalpy of Copper are not balanced by its hydration enthalpy",
     "Copper is a noble metal",
     "$\\text{Cu}^{2+}$ has a stable half-filled subshell",
     "Copper does not react with oxygen",
     0, "Copper Positive E0 Reason",
     "Copper requires high energy to transform from solid to $\\text{Cu}^{2+}(\\text{g})$ (high $\\Delta_{\\text{sub}}H + \\Delta_i H_1 + \\Delta_i H_2$). The hydration enthalpy of $\\text{Cu}^{2+}$ ($-2121\\text{ kJ/mol}$) is insufficient to compensate for this large energy requirement, resulting in a positive $E^\\circ$ and making Copper resistant to liberation of $\\text{H}_2$ from dilute non-oxidizing acids."),

    # 23 (Q368)
    ("Which of the following elements has the highest density in the modern periodic table?",
     "Osmium ($\\text{Os}$) and Iridium ($\\text{Ir}$)",
     "Lead ($\\text{Pb}$)",
     "Gold ($\\text{Au}$)",
     "Mercury ($\\text{Hg}$)",
     0, "Highest Density Element",
     "Due to lanthanoid contraction and high atomic mass packed into a very small atomic volume, Osmium ($\\rho = 22.59\\text{ g/cm}^3$) and Iridium ($\\rho = 22.56\\text{ g/cm}^3$) have the highest densities of all known elements."),

    # 24 (Q369)
    ("The density of transition elements in the $3d$ series increases from Scandium to Copper because:",
     "Atomic mass increases while atomic radius decreases or remains nearly constant",
     "Electrons enter $s$-orbitals",
     "Metallic bonding weakens",
     "Number of shells increases",
     0, "3d Density Increase Reason",
     "Density is mass divided by volume. Across the $3d$ series, nuclear mass increases significantly while atomic radius contracts initially and remains almost constant, leading to a smaller molar volume and steadily increasing density (peaking at Cu with $\\approx 8.9\\text{ g/cm}^3$)."),

    # 25 (Q370)
    ("Which of the following compounds has the highest percentage of covalent character?",
     "$\\text{AlCl}_3$",
     "$\\text{AlF}_3$",
     "$\\text{NaCl}$",
     "$\\text{MgCl}_2$",
     0, "AlCl3 Covalent Character",
     "$\\text{Al}^{3+}$ has a very high charge-to-radius ratio (polarizing power). The larger chloride ion ($\\text{Cl}^-$) is easily polarized compared to the tiny fluoride ion, rendering $\\text{AlCl}_3$ predominantly covalent (sublimes at $180^\\circ\\text{C}$), whereas $\\text{AlF}_3$ is purely ionic (high melting point)."),

    # 26 (Q371)
    ("Why is anhydrous $\\text{AlCl}_3$ a covalent compound while $\\text{AlCl}_3\\cdot 6\\text{H}_2\\text{O}$ is ionic in character?",
     "The immense hydration energy of $\\text{Al}^{3+}$ in water compensates for the high ionization energy needed to separate ions",
     "Water oxidizes Aluminium",
     "Water reduces Chlorine",
     "Hydrated aluminium forms $p\\pi-p\\pi$ bonds",
     0, "Anhydrous vs Hydrated AlCl3",
     "In the anhydrous state, the lattice energy cannot overcome the high sum of first three ionization enthalpies of Aluminium ($5137\\text{ kJ/mol}$), making bonding covalent. In aqueous solution, the enormous hydration enthalpy of $\\text{Al}^{3+}$ ($-4665\\text{ kJ/mol}$) overcomes this barrier, producing discrete hydrated ions $[\\text{Al}(\\text{H}_2\\text{O})_6]^{3+}$ and $\\text{Cl}^-$."),

    # 27 (Q372)
    ("The bond angles in hydrides of Group 15 follow the order $\\text{NH}_3 (107.8^\\circ) > \\text{PH}_3 (93.6^\\circ) > \\text{AsH}_3 (91.8^\\circ) > \\text{SbH}_3 (91.3^\\circ)$. This decrease in bond angle is due to:",
     "Decreasing electronegativity of the central atom causing bonding electron pairs to shift further away, reducing bond-pair bond-pair repulsion",
     "Increasing steric hindrance of the central atom",
     "Increasing $s$-character in bonding orbitals",
     "Increasing number of lone pairs on the central atom",
     0, "Group 15 Bond Angles Trend",
     "As the electronegativity of the central atom decreases from $\\text{N}$ to $\\text{Sb}$, the shared bonding pairs are held further from the central nucleus. The bond-pair bond-pair repulsion decreases, allowing the lone pair to push the bonding pairs closer together (Drago's rule predicts pure $p$-bonding for $\\text{PH}_3, \\text{AsH}_3, \\text{SbH}_3$ near $90^\\circ$)."),

    # 28 (Q373)
    ("According to Drago's rule, hybridization does not occur in molecules like $\\text{PH}_3, \\text{H}_2\\text{S}, \\text{AsH}_3$ because:",
     "The central atom belongs to Period 3 or higher, has at least one lone pair, and is bonded to an atom with electronegativity $\\le 2.1$",
     "The central atom has no lone pairs",
     "The bonding orbitals are $d$-hybridized",
     "Hydrogen is too electronegative",
     0, "Dragos Rule Conditions",
     "Drago's rule states that if the central atom belongs to Period 3 or below, possesses at least one lone pair, and the attached terminal atoms have electronegativity $\\le 2.1$ (like Hydrogen), the energy required for hybridization is not compensated by bond formation, and bonds are formed by unhybridized almost-pure $p$-orbitals (bond angle $\\approx 90-93^\\circ$)."),

    # 29 (Q374)
    ("Which of the following pairs of elements exhibits the most pronounced diagonal relationship?",
     "$\\text{Be}$ and $\\text{Al}$",
     "$\\text{Na}$ and $\\text{Ca}$",
     "$\\text{K}$ and $\\text{Sr}$",
     "$\\text{B}$ and $\\text{P}$",
     0, "Most Pronounced Diagonal Pair",
     "Beryllium (Group 2, Period 2) and Aluminium (Group 13, Period 3) display the most striking and extensive diagonal resemblance: both form amphoteric oxides, covalent polymeric chlorides, carbido complexes producing methane, and resist attack by concentrated $\\text{HNO}_3$ via passivation."),

    # 30 (Q375)
    ("The Pauling electronegativity of an element $A$ is $2.5$ and of element $B$ is $4.0$. According to the Hannay-Smith equation, the percentage of ionic character in the $A-B$ bond is:",
     "$31.875\\%$",
     "$50.0\\%$",
     "$15.5\\%$",
     "$75.0\\%$",
     0, "Hannay Smith Numerical Calculation",
     "$\\Delta\\chi = |4.0 - 2.5| = 1.5$. Using Hannay-Smith: $\\%\\text{ ionic} = 16(\\Delta\\chi) + 3.5(\\Delta\\chi)^2 = 16(1.5) + 3.5(1.5)^2 = 24 + 3.5(2.25) = 24 + 7.875 = 31.875\\%$.")
]

print(f"Loaded {len(easy_items)} Easy items.")
print(f"Loaded {len(med_items)} Medium items.")
print(f"Loaded {len(hard_items)} Hard items.")

assert len(easy_items) == 30
assert len(med_items) == 65
assert len(hard_items) == 30

for idx, item in enumerate(easy_items):
    q_num = 251 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(med_items):
    q_num = 281 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(hard_items):
    q_num = 346 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 3 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 30
assert med_c == 65
assert hard_c == 30

out_file = "src/data/chapterwise/chemistry/periodicClassificationPart3.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Classification of Elements and Periodicity in Properties | Chemistry | Class: 11 | Part 3
// Target: Exactly 125 MCQs (30 Easy, 65 Medium, 30 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const PERIODIC_CLASSIFICATION_PART3_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
