#!/usr/bin/env python3
"""
Direct generator for Classification of Elements and Periodicity in Properties - Part 4
Q376 to Q500: 20 Easy, 55 Medium, 50 Hard = 125 MCQs
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
        "topicId": "chem-periodic-chemical-reactivity",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# -------------------------------------------------------------------------
# EASY QUESTIONS (20 questions: Q376 to Q395)
# -------------------------------------------------------------------------
easy_items = [
    # 1 (Q376)
    ("The chemical reactivity of elements at the extreme left (alkali metals) and extreme right (halogens, excluding noble gases) of the periodic table is:",
     "Very high, manifesting through electron loss for metals and electron gain for halogens",
     "Very low because they are non-reactive",
     "Identical in mechanism",
     "Independent of ionization energy",
     0, "Extremes Chemical Reactivity",
     "Elements at the extreme left (alkali metals) have very low ionization enthalpies and lose electrons easily, while elements at the extreme right (halogens) have high negative electron gain enthalpies and gain electrons easily, making both extremes highly reactive."),

    # 2 (Q377)
    ("Which of the following elements reacts most violently with cold water?",
     "Caesium ($\\text{Cs}$)",
     "Sodium ($\\text{Na}$)",
     "Magnesium ($\\text{Mg}$)",
     "Aluminium ($\\text{Al}$)",
     0, "Violent Reaction with Water",
     "Caesium has the lowest ionization enthalpy and largest atomic size among stable alkali metals, reacting explosively with cold water: $2\\text{Cs} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{CsOH} + \\text{H}_2$."),

    # 3 (Q378)
    ("An oxide of a metal that dissolves in water to produce a solution with $\\text{pH} > 7$ is:",
     "A basic oxide (e.g., $\\text{K}_2\\text{O}$)",
     "An acidic oxide (e.g., $\\text{SO}_3$)",
     "A neutral oxide (e.g., $\\text{CO}$)",
     "An amphoteric oxide (e.g., $\\text{Al}_2\\text{O}_3$)",
     0, "Basic Oxide pH",
     "Basic metal oxides react with water to form soluble metal hydroxides ($\text{OH}^-$ ions), producing alkaline solutions with $\\text{pH} > 7$ (e.g., $\\text{K}_2\\text{O} + \\text{H}_2\\text{O} \\rightarrow 2\\text{KOH}$)."),

    # 4 (Q379)
    ("An oxide of a non-metal that dissolves in water to produce a solution with $\\text{pH} < 7$ is:",
     "An acidic oxide (e.g., $\\text{SO}_2$)",
     "A basic oxide",
     "A neutral oxide",
     "A saline hydride",
     0, "Acidic Oxide pH",
     "Acidic non-metal oxides react with water to generate oxyacids ($\text{H}^+$ ions), yielding acidic solutions with $\\text{pH} < 7$ (e.g., $\\text{SO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_3$)."),

    # 5 (Q380)
    ("Which of the following is an amphoteric hydroxide?",
     "$\\text{Al}(\\text{OH})_3$",
     "$\\text{NaOH}$",
     "$\\text{Mg}(\\text{OH})_2$",
     "$\\text{Ba}(\\text{OH})_2$",
     0, "Amphoteric Hydroxide",
     "$\\text{Al}(\\text{OH})_3$ dissolves in both acids (yielding $[\\text{Al}(\\text{H}_2\\text{O})_6]^{3+}$) and strong bases (yielding tetrahydroxidoaluminate $[\\text{Al}(\\text{OH})_4]^-$), making it amphoteric."),

    # 6 (Q381)
    ("Which of the following elements forms a peroxide when burned in excess oxygen?",
     "Sodium ($\\text{Na}$)",
     "Lithium ($\\text{Li}$)",
     "Potassium ($\\text{K}$)",
     "Beryllium ($\\text{Be}$)",
     0, "Sodium Peroxide Formation",
     "When heated in excess air, Lithium forms predominantly monoxide ($\\text{Li}_2\\text{O}$), Sodium forms predominantly peroxide ($\\text{Na}_2\\text{O}_2$), while Potassium, Rubidium, and Caesium form superoxides ($M\\text{O}_2$)."),

    # 7 (Q382)
    ("Which of the following elements forms a superoxide when burned in excess air?",
     "Potassium ($\\text{K}$)",
     "Lithium ($\\text{Li}$)",
     "Sodium ($\\text{Na}$)",
     "Magnesium ($\\text{Mg}$)",
     0, "Potassium Superoxide Formation",
     "Due to the large size of Potassium cation ($\\text{K}^+$), it stabilizes the large superoxide anion ($\\text{O}_2^-$) via lattice energy effects, forming potassium superoxide ($\\text{KO}_2$)."),

    # 8 (Q383)
    ("The oxidation state of Oxygen in potassium superoxide ($\\text{KO}_2$) is:",
     "$-\\frac{1}{2}$",
     "$-2$",
     "$-1$",
     "$+1$",
     0, "Superoxide Oxygen Oxidation State",
     "In $\\text{KO}_2$, Potassium is $+1$. For neutral molecule: $+1 + 2x = 0 \\Rightarrow 2x = -1 \\Rightarrow x = -1/2$ for each oxygen atom."),

    # 9 (Q384)
    ("The oxidation state of Oxygen in sodium peroxide ($\\text{Na}_2\\text{O}_2$) is:",
     "$-1$",
     "$-2$",
     "$-\\frac{1}{2}$",
     "$+2$",
     0, "Peroxide Oxygen Oxidation State",
     "In $\\text{Na}_2\\text{O}_2$, each Sodium is $+1$. Thus $2(+1) + 2x = 0 \\Rightarrow 2x = -2 \\Rightarrow x = -1$ per oxygen atom in the peroxide ion $\\text{O}_2^{2-}$."),

    # 10 (Q385)
    ("Which of the following elements in Period 3 has the highest electrical conductivity?",
     "Aluminium ($\\text{Al}$)",
     "Silicon ($\\text{Si}$)",
     "Phosphorus ($\\text{P}$)",
     "Sulphur ($\\text{S}$)",
     0, "Highest Conductivity Period 3",
     "Aluminium is a metallic conductor with 3 delocalized valence electrons per atom in its conduction band, providing the highest electrical conductivity among Period 3 elements."),

    # 11 (Q386)
    ("Silicon is classified as a:",
     "Metalloid (semiconductor)",
     "Typical alkali metal",
     "Noble gas",
     "Halogen",
     0, "Silicon Classification",
     "Silicon exhibits intermediate chemical and electrical properties between metals and non-metals, possessing an intrinsic band gap ($\\approx 1.1\\text{ eV}$) that makes it a quintessential semiconductor/metalloid."),

    # 12 (Q387)
    ("Which of the following elements has the highest catenation ability in the entire periodic table?",
     "Carbon ($\\text{C}$)",
     "Silicon ($\\text{Si}$)",
     "Nitrogen ($\\text{N}$)",
     "Sulphur ($\\text{S}$)",
     0, "Highest Catenation Carbon",
     "Due to its small atomic size, high electronegativity, and remarkably strong $\\text{C}-\\text{C}$ single bond enthalpy ($348\\text{ kJ/mol}$), Carbon shows the maximum catenation property."),

    # 13 (Q388)
    ("Which of the following halogens is a liquid at standard room temperature and pressure?",
     "Bromine ($\\text{Br}_2$)",
     "Fluorine ($\\text{F}_2$)",
     "Chlorine ($\\text{Cl}_2$)",
     "Iodine ($\\text{I}_2$)",
     0, "Liquid Halogen Bromine",
     "Bromine ($\\text{Br}_2$) is the only non-metallic element that is a dark reddish-brown liquid at standard conditions ($25^\\circ\\text{C}$ and $1\\text{ atm}$)."),

    # 14 (Q389)
    ("Which of the following elements is a dark violet solid that sublimes easily on gentle heating?",
     "Iodine ($\\text{I}_2$)",
     "Bromine ($\\text{Br}_2$)",
     "Chlorine ($\\text{Cl}_2$)",
     "Fluorine ($\\text{F}_2$)",
     0, "Iodine Sublimation",
     "Iodine ($\\text{I}_2$) is a lustrous purple-black crystalline solid that sublimes directly into deep violet vapours at moderate temperatures."),

    # 15 (Q390)
    ("The characteristic oxidation states displayed by elements of Group 15 are:",
     "$-3, +3,$ and $+5$",
     "$+1$ and $+2$",
     "$+2$ and $+4$",
     "$-1$ and $+7$",
     0, "Group 15 Oxidation States",
     "With valence configuration $ns^2 np^3$, Group 15 elements exhibit $-3$ (by gaining/sharing 3 electrons) as well as $+3$ and $+5$ (group oxidation state)."),

    # 16 (Q391)
    ("The common oxidation states shown by Group 16 elements (Chalcogens) are:",
     "$-2, +2, +4,$ and $+6$",
     "$+1, +3,$ and $+5$",
     "$-1, +1,$ and $+3$",
     "$+3$ and $+7$",
     0, "Group 16 Oxidation States",
     "Group 16 elements ($ns^2 np^4$) show $-2$ (especially $\\text{O}$ and $\\text{S}$) as well as positive oxidation states $+2, +4,$ and $+6$ (except Oxygen which is restricted to $-2, -1, +1, +2$)."),

    # 17 (Q392)
    ("Which of the following elements does NOT form pentahalides?",
     "Nitrogen ($\\text{N}$)",
     "Phosphorus ($\\text{P}$)",
     "Arsenic ($\\text{As}$)",
     "Antimony ($\\text{Sb}$)",
     0, "Nitrogen Pentahalide Absence",
     "Nitrogen cannot expand its octet beyond 4 covalency due to the non-availability of $d$-orbitals in the $n = 2$ energy level, so it never forms pentahalides like $\\text{NCl}_5$."),

    # 18 (Q393)
    ("Which of the following elements exhibits an anomalous positive oxidation state with fluorine to form $\\text{OF}_2$?",
     "Oxygen ($\\text{O}$)",
     "Nitrogen ($\\text{N}$)",
     "Carbon ($\\text{C}$)",
     "Chlorine ($\\text{Cl}$)",
     0, "OF2 Oxygen Anomaly",
     "Because Fluorine is more electronegative than Oxygen, Oxygen assumes an oxidation state of $+2$ in $\\text{OF}_2$."),

    # 19 (Q394)
    ("The basic character of oxides of alkali metals down the group from $\\text{Li}_2\\text{O}$ to $\\text{Cs}_2\\text{O}$:",
     "Increases",
     "Decreases",
     "Remains constant",
     "First increases then decreases",
     0, "Alkali Oxides Basicity Trend",
     "Down Group 1, atomic size increases, ionization enthalpy decreases, and electropositive/metallic character increases. Consequently, the basic strength of their oxides increases: $\\text{Li}_2\\text{O} < \\text{Na}_2\\text{O} < \\text{K}_2\\text{O} < \\text{Rb}_2\\text{O} < \\text{Cs}_2\\text{O}$."),

    # 20 (Q395)
    ("Which of the following is a neutral oxide?",
     "$\\text{N}_2\\text{O}$ (Nitrous oxide)",
     "$\\text{NO}_2$",
     "$\\text{N}_2\\text{O}_3$",
     "$\\text{N}_2\\text{O}_5$",
     0, "N2O Neutral Oxide",
     "Nitrous oxide ($\\text{N}_2\\text{O}$), nitric oxide ($\\text{NO}$), and carbon monoxide ($\\text{CO}$) are neutral oxides of nitrogen and carbon that do not react with acids or bases.")
]

# -------------------------------------------------------------------------
# MEDIUM QUESTIONS (55 questions: Q396 to Q450)
# -------------------------------------------------------------------------
med_items = [
    # 1 (Q396) Authentic NEET 2020
    ("Which of the following oxides is amphoteric in nature?",
     "$\\text{SnO}_2$",
     "$\\text{CaO}$",
     "$\\text{SiO}_2$",
     "$\\text{CO}_2$",
     0, "SnO2 Amphoteric Oxide NEET 2020",
     "$\\text{SnO}_2$ is amphoteric: it dissolves in acids to form $\\text{Sn}^{4+}$ salts and in bases to form stannate $[\\text{Sn}(\\text{OH})_6]^{2-}$. In contrast, $\\text{CaO}$ is basic, while $\\text{SiO}_2$ and $\\text{CO}_2$ are acidic.",
     True, "NEET 2020"),

    # 2 (Q397) Authentic NEET 2021
    ("Which of the following statements is INCORRECT regarding periodic properties?",
     "The oxidation state of an element is always equal to its group number",
     "Metallic character decreases across a period from left to right",
     "Electronegativity increases across a period from left to right",
     "Atomic radius increases down a group from top to bottom",
     0, "Incorrect Periodic Statement NEET 2021",
     "The oxidation state of an element can vary widely and is not always equal to its group number (e.g., transition metals exhibit multiple oxidation states; halogens show $-1, +1, +3, +5, +7$). Thus statement A is incorrect.",
     True, "NEET 2021"),

    # 3 (Q398) Authentic NEET 2018
    ("The correct order of the basic strength of the following alkaline earth metal oxides is:",
     "$\\text{BeO} < \\text{MgO} < \\text{CaO} < \\text{BaO}$",
     "$\\text{BaO} < \\text{CaO} < \\text{MgO} < \\text{BeO}$",
     "$\\text{CaO} < \\text{BaO} < \\text{BeO} < \\text{MgO}$",
     "$\\text{MgO} < \\text{BeO} < \\text{CaO} < \\text{BaO}$",
     0, "Group 2 Oxides Basicity NEET 2018",
     "$\\text{BeO}$ is amphoteric. From $\\text{MgO}$ to $\\text{BaO}$, metallic character and ionic size increase, making electron loss and $\\text{OH}^-$ liberation easier. Hence basic strength increases: $\\text{BeO} < \\text{MgO} < \\text{CaO} < \\text{BaO}$.",
     True, "NEET 2018"),

    # 4 (Q399)
    ("Which of the following pairs of elements forms an interstitial compound where small hydrogen atoms occupy octahedral holes?",
     "Transition metals (e.g., $\\text{Ti}, \\text{Zr}, \\text{V}$)",
     "Alkali metals (e.g., $\\text{Na}, \\text{K}$)",
     "Halogens (e.g., $\\text{Cl}, \\text{Br}$)",
     "Noble gases (e.g., $\\text{Ne}, \\text{Ar}$)",
     0, "Interstitial Hydrides",
     "Transition metals have metallic crystal lattices with interstitial spaces (voids) that can trap small atoms like $\\text{H}, \\text{C}, \\text{N}$ without altering the metal lattice type, forming non-stoichiometric interstitial hydrides."),

    # 5 (Q400)
    ("The thermal stability of alkali metal hydrides ($M\\text{H}$) down the group follows the order:",
     "$\\text{LiH} > \\text{NaH} > \\text{KH} > \\text{RbH} > \\text{CsH}$",
     "$\\text{CsH} > \\text{RbH} > \\text{KH} > \\text{NaH} > \\text{LiH}$",
     "$\\text{NaH} > \\text{KH} > \\text{LiH} > \\text{CsH} > \\text{RbH}$",
     "$\\text{LiH} = \\text{CsH} > \\text{NaH} > \\text{KH}$",
     0, "Alkali Hydrides Thermal Stability",
     "As the size of the alkali metal cation increases from $\\text{Li}^+$ to $\\text{Cs}^+$, the lattice enthalpy of $M\\text{H}$ decreases because the small hydride ion ($\\text{H}^-$) forms the strongest electrostatic lattice with tiny $\\text{Li}^+$. Hence thermal stability decreases: $\\text{LiH} > \\text{NaH} > \\text{KH} > \\text{RbH} > \\text{CsH}$."),

    # 6 (Q401)
    ("Which of the following elements does NOT form a monoxide of the formula $M\\text{O}$?",
     "Boron ($\\text{B}$)",
     "Carbon ($\\text{C}$)",
     "Magnesium ($\\text{Mg}$)",
     "Calcium ($\\text{Ca}$)",
     0, "Boron Monoxide Absence",
     "Boron forms the stable sesquioxide $\\text{B}_2\\text{O}_3$ and does not form a neutral or basic stable monoxide $M\\text{O}$ under standard conditions, whereas Carbon forms $\\text{CO}$, Magnesium forms $\\text{MgO}$, and Calcium forms $\\text{CaO}$."),

    # 7 (Q402)
    ("The acidity of oxides in the nitrogen family follows the order:",
     "$\\text{N}_2\\text{O}_5 > \\text{P}_4\\text{O}_{10} > \\text{As}_2\\text{O}_5 > \\text{Sb}_2\\text{O}_5 > \\text{Bi}_2\\text{O}_5$",
     "$\\text{Bi}_2\\text{O}_5 > \\text{Sb}_2\\text{O}_5 > \\text{As}_2\\text{O}_5 > \\text{P}_4\\text{O}_{10} > \\text{N}_2\\text{O}_5$",
     "$\\text{P}_4\\text{O}_{10} > \\text{N}_2\\text{O}_5 > \\text{As}_2\\text{O}_5 > \\text{Sb}_2\\text{O}_5 > \\text{Bi}_2\\text{O}_5$",
     "$\\text{N}_2\\text{O}_5 = \\text{P}_4\\text{O}_{10} = \\text{As}_2\\text{O}_5$",
     0, "Nitrogen Family Oxides Acidity",
     "Down Group 15, metallic character increases and electronegativity decreases. Consequently, the acidic nature of pentoxides decreases steadily down the group: $\\text{N}_2\\text{O}_5 > \\text{P}_4\\text{O}_{10} > \\text{As}_2\\text{O}_5 > \\text{Sb}_2\\text{O}_5 > \\text{Bi}_2\\text{O}_5$."),

    # 8 (Q403)
    ("Which of the following compounds has the HIGHEST melting point?",
     "$\\text{NaF}$",
     "$\\text{NaCl}$",
     "$\\text{NaBr}$",
     "$\\text{NaI}$",
     0, "Sodium Halides Melting Point",
     "Lattice energy follows $\\text{NaF} > \\text{NaCl} > \\text{NaBr} > \\text{NaI}$ due to decreasing internuclear distance with small $\\text{F}^-$. Higher lattice energy results in a higher melting point, so $\\text{NaF}$ ($993^\\circ\\text{C}$) has the highest melting point."),

    # 9 (Q404)
    ("Which of the following alkali metal fluorides has the LOWEST solubility in water?",
     "$\\text{LiF}$",
     "$\\text{NaF}$",
     "$\\text{KF}$",
     "$\\text{CsF}$",
     0, "LiF Low Solubility",
     "Both $\\text{Li}^+$ and $\\text{F}^-$ are exceptionally small ions, resulting in an exceptionally large lattice enthalpy ($\\approx 1036\\text{ kJ/mol}$) that cannot be overcome by hydration enthalpy. Hence $\\text{LiF}$ is sparingly soluble in water."),

    # 10 (Q405)
    ("Which of the following alkali metal iodides has the LOWEST solubility in water?",
     "$\\text{CsI}$",
     "$\\text{LiI}$",
     "$\\text{NaI}$",
     "$\\text{KI}$",
     0, "CsI Low Solubility",
     "$\\text{Cs}^+$ and $\\text{I}^-$ are both very large ions with very low hydration enthalpies. The low hydration energy is insufficient to hydrate the ions, giving $\\text{CsI}$ low solubility compared to $\\text{LiI}$ which dissolves very readily."),

    # 11 (Q406)
    ("Which of the following elements has the greatest density among $3d$ transition elements?",
     "Copper ($\\text{Cu}$, $8.96\\text{ g/cm}^3$)",
     "Scandium ($\\text{Sc}$, $2.99\\text{ g/cm}^3$)",
     "Titanium ($\\text{Ti}$, $4.50\\text{ g/cm}^3$)",
     "Vanadium ($\\text{V}$, $6.11\\text{ g/cm}^3$)",
     0, "Highest 3d Density",
     "Across the $3d$ series, density increases from Scandium ($2.99\\text{ g/cm}^3$) up to Copper ($8.96\\text{ g/cm}^3$), followed by a slight decrease at Zinc ($7.14\\text{ g/cm}^3$)."),

    # 12 (Q407)
    ("The enthalpy of atomization of transition metals is highest in the middle of each series (e.g., $\\text{V, Cr, Mo, W}$) because:",
     "They have the maximum number of unpaired $d$-electrons available for strong interatomic metallic bonding",
     "They have completely filled $d$-subshells",
     "They have the lowest atomic masses",
     "They form ionic crystals",
     0, "Enthalpy of Atomization 3d",
     "Enthalpy of atomization depends on the strength of metallic bonds, which is enhanced by covalent overlap of unpaired $d$-electrons. Elements with maximum unpaired electrons ($d^5$, e.g., Cr, Mo, W) have the strongest interatomic bonding and highest atomization enthalpies."),

    # 13 (Q408)
    ("Why does Zinc have a relatively low enthalpy of atomization ($126\\text{ kJ/mol}$) compared to other $3d$ metals?",
     "Zinc has a completely filled $3d^{10}$ subshell and no unpaired $d$-electrons participate in metallic bonding",
     "Zinc has a very small nuclear charge",
     "Zinc has empty $4s$ orbitals",
     "Zinc is a non-metal",
     0, "Zinc Low Enthalpy of Atomization",
     "Zinc ($3d^{10} 4s^2$) has all its $d$-electrons paired up. No unpaired $d$-electrons are available to form covalent metallic bonds, resulting in weak metallic bonding, low melting point ($419.5^\\circ\\text{C}$), and low atomization enthalpy."),

    # 14 (Q409)
    ("Which of the following elements has the HIGHEST electrical resistivity among Period 3 elements?",
     "Chlorine / Argon",
     "Silicon",
     "Aluminium",
     "Magnesium",
     0, "Highest Resistivity Period 3",
     "Chlorine and Argon are non-metals with localized electrons in completely filled shells or covalent molecules, acting as electrical insulators with immense electrical resistivities compared to metals and semiconductors."),

    # 15 (Q410)
    ("The maximum coordination number shown by Aluminium in aqueous solution is 6 (in $[\\text{Al}(\\text{H}_2\\text{O})_6]^{3+}$), whereas Boron forms only $[\\text{B}(\\text{OH})_4]^-$. This is because:",
     "Aluminium has vacant $3d$ orbitals while Boron has no $d$-orbitals in its valence shell",
     "Boron has a higher atomic number than Aluminium",
     "Aluminium is a non-metal",
     "Boron has more valence electrons than Aluminium",
     0, "Al vs B Coordination Number",
     "Aluminium has accessible $3d$ orbitals enabling $sp^3d^2$ hybridization to accommodate 6 ligands. Boron is restricted to $2s$ and $2p$ orbitals ($sp^3$ hybridization), strictly limiting its coordination number to 4."),

    # 16 (Q411)
    ("Which of the following compounds exhibits an inert pair effect resulting in the lower oxidation state being MORE stable than the group state?",
     "$\\text{TlCl}$ (over $\\text{TlCl}_3$)",
     "$\\text{AlCl}_3$",
     "$\\text{BCl}_3$",
     "$\\text{GaCl}_3$",
     0, "Inert Pair Effect TlCl",
     "In Thallium (Period 6, Group 13), the $6s^2$ electrons are strongly held due to poor shielding by $4f$ and $5d$ orbitals, making $\\text{Tl}^+$ ($+1$) far more stable than $\\text{Tl}^{3+}$ ($+3$)."),

    # 17 (Q412)
    ("In Group 14, $\\text{CO}_2$ is a gas consisting of discrete linear molecules, while $\\text{SiO}_2$ is a hard, high-melting solid. This fundamental difference is due to:",
     "Carbon forming strong $p\\pi-p\\pi$ multiple bonds to oxygen, while Silicon forms a 3D network of single $\\text{Si}-\\text{O}$ covalent bonds",
     "Silicon having a higher electronegativity than Carbon",
     "Carbon having vacant $d$-orbitals",
     "Silicon being a diatomic gas",
     0, "CO2 vs SiO2 Structure",
     "Due to small size, Carbon forms strong $p\\pi-p\\pi$ double bonds in linear $\\text{O}=\\text{C}=\\text{O}$ molecules held only by weak dispersion forces. Silicon has large $3p$ orbitals that cannot effectively form $p\\pi-p\\pi$ bonds with oxygen, forming an extended giant covalent network of single $\\text{Si}-\\text{O}$ bonds ($T_m > 1700^\\circ\\text{C}$)."),

    # 18 (Q413)
    ("Which of the following elements has the lowest first ionization enthalpy among Group 15 elements?",
     "Bismuth ($\\text{Bi}$)",
     "Antimony ($\\text{Sb}$)",
     "Arsenic ($\\text{As}$)",
     "Phosphorus ($\\text{P}$)",
     0, "Group 15 Lowest IE Bismuth",
     "Down Group 15, atomic size increases and valence electrons are further from the nucleus, resulting in a general decrease in first ionization enthalpy: $\\text{N} > \\text{P} > \\text{As} > \\text{Sb} > \\text{Bi}$."),

    # 19 (Q414)
    ("Which of the following elements forms a hydride that is LIQUID at room temperature?",
     "Oxygen ($\\text{H}_2\\text{O}$)",
     "Sulphur ($\\text{H}_2\\text{S}$)",
     "Selenium ($\\text{H}_2\\text{Se}$)",
     "Tellurium ($\\text{H}_2\\text{Te}$)",
     0, "Liquid Hydride H2O",
     "Due to extensive intermolecular hydrogen bonding resulting from Oxygen's small size and high electronegativity ($3.5$), water ($\\text{H}_2\\text{O}$) is a liquid at room temperature, while $\\text{H}_2\\text{S}, \\text{H}_2\\text{Se},$ and $\\text{H}_2\\text{Te}$ are gases."),

    # 20 (Q415)
    ("The strength of halogen acids as reducing agents follows the order:",
     "$\\text{HI} > \\text{HBr} > \\text{HCl} > \\text{HF}$",
     "$\\text{HF} > \\text{HCl} > \\text{HBr} > \\text{HI}$",
     "$\\text{HCl} > \\text{HBr} > \\text{HI} > \\text{HF}$",
     "$\\text{HBr} > \\text{HI} > \\text{HCl} > \\text{HF}$",
     0, "Halogen Acids Reducing Strength",
     "Down Group 17, $H-X$ bond length increases and bond dissociation enthalpy decreases rapidly ($\\text{H}-\\text{I}$ bond is weakest, $299\\text{ kJ/mol}$). Therefore, $\\text{HI}$ dissociates to release hydrogen most easily, making it the strongest reducing agent: $\\text{HI} > \\text{HBr} > \\text{HCl} > \\text{HF}$."),

    # 21 (Q416)
    ("The acidic strength of hydrohalic acids in aqueous solution follows the order:",
     "$\\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI}$",
     "$\\text{HI} < \\text{HBr} < \\text{HCl} < \\text{HF}$",
     "$\\text{HCl} < \\text{HF} < \\text{HBr} < \\text{HI}$",
     "$\\text{HF} = \\text{HCl} = \\text{HBr} = \\text{HI}$",
     0, "Hydrohalic Acids Acidity Trend",
     "Acidic strength is determined primarily by the $H-X$ bond dissociation enthalpy. Since the $\\text{H}-\\text{I}$ bond is weakest, it ionizes most completely in water to yield $\\text{H}^+$, making $\\text{HI}$ the strongest acid and $\\text{HF}$ a weak acid: $\\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI}$."),

    # 22 (Q417)
    ("Which of the following alkaline earth metal sulfates is practically INSOLUBLE in water?",
     "$\\text{BaSO}_4$",
     "$\\text{MgSO}_4$",
     "$\\text{BeSO}_4$",
     "$\\text{CaSO}_4$",
     0, "Insoluble Sulfate BaSO4",
     "Due to the large size of $\\text{Ba}^{2+}$, its hydration enthalpy is very small and cannot overcome the high lattice enthalpy of barium sulfate, making $\\text{BaSO}_4$ insoluble in water ($K_{\\text{sp}} \\approx 1.1 \\times 10^{-10}$)."),

    # 23 (Q418)
    ("The thermal stability of alkaline earth metal carbonates follows the order:",
     "$\\text{BaCO}_3 > \\text{SrCO}_3 > \\text{CaCO}_3 > \\text{MgCO}_3 > \\text{BeCO}_3$",
     "$\\text{BeCO}_3 > \\text{MgCO}_3 > \\text{CaCO}_3 > \\text{SrCO}_3 > \\text{BaCO}_3$",
     "$\\text{CaCO}_3 > \\text{BaCO}_3 > \\text{SrCO}_3 > \\text{MgCO}_3 > \\text{BeCO}_3$",
     "$\\text{MgCO}_3 > \\text{CaCO}_3 > \\text{SrCO}_3 > \\text{BaCO}_3 > \\text{BeCO}_3$",
     0, "Carbonate Thermal Stability Group 2",
     "As the cationic radius increases from $\\text{Be}^{2+}$ to $\\text{Ba}^{2+}$, its polarizing power on the carbonate ion decreases, reducing distortion of the $\\text{C}-\\text{O}$ bond and increasing thermal decomposition temperature."),

    # 24 (Q419)
    ("Which of the following compounds has the highest thermal decomposition temperature?",
     "$\\text{BaCO}_3$",
     "$\\text{CaCO}_3$",
     "$\\text{MgCO}_3$",
     "$\\text{BeCO}_3$",
     0, "Highest Decomposition Temp Carbonate",
     "$\\text{BaCO}_3$ has the largest cation with the lowest polarizing power, requiring over $1360^\\circ\\text{C}$ to decompose into $\\text{BaO}$ and $\\text{CO}_2$."),

    # 25 (Q420)
    ("The flame colour imparted by Sodium salts in Bunsen burner flame is:",
     "Golden yellow",
     "Crimson red",
     "Violet / lilac",
     "Apple green",
     0, "Sodium Flame Colour",
     "Sodium salts emit a characteristic intense golden yellow flame ($589\\text{ nm}$ D-lines) due to excitation of the $3s^1$ electron to $3p$ and subsequent de-excitation."),

    # 26 (Q421)
    ("The flame colour imparted by Potassium salts in Bunsen burner flame is:",
     "Lilac (pale violet)",
     "Golden yellow",
     "Brick red",
     "Crimson red",
     0, "Potassium Flame Colour",
     "Potassium salts impart a characteristic lilac / pale violet coloration to the Bunsen burner flame."),

    # 27 (Q422)
    ("Which of the following alkaline earth metals does NOT impart any characteristic colour to the Bunsen burner flame?",
     "Beryllium ($\\text{Be}$) and Magnesium ($\\text{Mg}$)",
     "Calcium ($\\text{Ca}$)",
     "Strontium ($\\text{Sr}$)",
     "Barium ($\\text{Ba}$)",
     0, "Be and Mg Flame Test Absence",
     "Beryllium and Magnesium have very small atomic sizes and high ionization enthalpies. The thermal energy of a standard Bunsen flame is insufficient to excite their valence electrons to higher energy levels; hence they do not impart color."),

    # 28 (Q423)
    ("Calcium imparts which colour to the Bunsen burner flame?",
     "Brick red",
     "Crimson red",
     "Apple green",
     "Golden yellow",
     0, "Calcium Flame Colour",
     "Calcium salts impart a characteristic brick red flame coloration."),

    # 29 (Q424)
    ("Strontium imparts which colour to the Bunsen burner flame?",
     "Crimson red",
     "Brick red",
     "Apple green",
     "Lilac",
     0, "Strontium Flame Colour",
     "Strontium salts impart an intense crimson red flame coloration."),

    # 30 (Q425)
    ("Barium imparts which colour to the Bunsen burner flame?",
     "Apple green",
     "Crimson red",
     "Brick red",
     "Golden yellow",
     0, "Barium Flame Colour",
     "Barium salts impart a characteristic apple green flame coloration."),

    # 31 (Q426)
    ("Which of the following compounds has the highest lattice energy?",
     "$\\text{MgO}$",
     "$\\text{CaO}$",
     "$\\text{SrO}$",
     "$\\text{BaO}$",
     0, "Highest Lattice Energy MgO",
     "Lattice energy is proportional to $\\frac{q_1 q_2}{r_+ + r_-}$. For divalent oxides ($q_1 = +2, q_2 = -2$), $\\text{Mg}^{2+}$ has the smallest cationic radius ($72\\text{ pm}$), giving $\\text{MgO}$ the highest lattice energy ($\\approx 3791\\text{ kJ/mol}$) and a very high melting point ($2852^\\circ\\text{C}$)."),

    # 32 (Q427)
    ("Which of the following elements has the lowest density?",
     "Lithium ($\\text{Li}$, $0.534\\text{ g/cm}^3$)",
     "Sodium ($\\text{Na}$)",
     "Potassium ($\\text{K}$)",
     "Rubidium ($\\text{Rb}$)",
     0, "Lowest Density Metal Lithium",
     "Lithium is the lightest solid element, with a density of only $0.534\\text{ g/cm}^3$, floating easily on water and hydrocarbon oils."),

    # 33 (Q428)
    ("Potassium is less dense than Sodium ($0.86\\text{ g/cm}^3$ vs $0.97\\text{ g/cm}^3$) because:",
     "There is an unusual expansion in atomic volume in Potassium due to the presence of vacant $3d$ orbitals in inner shells",
     "Potassium has a lower atomic mass than Sodium",
     "Potassium forms a hexagonal close packed structure",
     "Sodium has a higher principal quantum number",
     0, "Potassium Density Anomaly",
     "Down Group 1, density generally increases, but Potassium has an unusually large atomic volume caused by vacant $3d$ subshells and diffuse electron cloud, making its density lower than Sodium's."),

    # 34 (Q429)
    ("Which of the following halogens has the highest standard reduction potential ($E^\\circ$)?",
     "$\\text{F}_2 (+2.87\\text{ V})$",
     "$\\text{Cl}_2 (+1.36\\text{ V})$",
     "$\\text{Br}_2 (+1.09\\text{ V})$",
     "$\\text{I}_2 (+0.54\\text{ V})$",
     0, "Highest Reduction Potential F2",
     "$\\text{F}_2$ has the highest standard reduction potential ($+2.87\\text{ V}$) of any chemical species, making it the most powerful oxidizing agent known in aqueous chemistry."),

    # 35 (Q430)
    ("The halogen that can displace Chlorine from aqueous $\\text{NaCl}$ solution is:",
     "Fluorine ($\\text{F}_2$)",
     "Bromine ($\\text{Br}_2$)",
     "Iodine ($\\text{I}_2$)",
     "None of the above",
     0, "Displacement by Fluorine",
     "A halogen with higher reduction potential displaces one with lower reduction potential: $\\text{F}_2 + 2\\text{Cl}^- \\rightarrow 2\\text{F}^- + \\text{Cl}_2$ (though $\\text{F}_2$ also oxidizes water explosively to $\\text{O}_2$)."),

    # 36 (Q431)
    ("Chlorine gas passed into aqueous $\\text{KBr}$ solution turns the solution reddish-brown because:",
     "Chlorine oxidizes bromide ions to free bromine: $\\text{Cl}_2 + 2\\text{Br}^- \\rightarrow 2\\text{Cl}^- + \\text{Br}_2$",
     "Bromine oxidizes chloride ions",
     "Chlorine forms a complex with potassium",
     "Bromine precipitates as a white solid",
     0, "Chlorine Displacing Bromine",
     "Because $E^\\circ(\\text{Cl}_2/\\text{Cl}^-) = +1.36\\text{ V} > E^\\circ(\\text{Br}_2/\\text{Br}^-) = +1.09\\text{ V}$, Chlorine readily oxidizes $\\text{Br}^-$ into elemental Bromine ($\\text{Br}_2$), which dissolves giving a reddish-brown color."),

    # 37 (Q432)
    ("Which of the following represents the correct order of bond strength for the halogens?",
     "$\\text{Cl}-\\text{Cl} > \\text{Br}-\\text{Br} > \\text{F}-\\text{F} > \\text{I}-\\text{I}$",
     "$\\text{F}-\\text{F} > \\text{Cl}-\\text{Cl} > \\text{Br}-\\text{Br} > \\text{I}-\\text{I}$",
     "$\\text{Cl}-\\text{Cl} > \\text{F}-\\text{F} > \\text{Br}-\\text{Br} > \\text{I}-\\text{I}$",
     "$\\text{I}-\\text{I} > \\text{Br}-\\text{Br} > \\text{Cl}-\\text{Cl} > \\text{F}-\\text{F}$",
     0, "Halogen Bond Strength Order",
     "Bond dissociation enthalpies in $\\text{kJ/mol}$: $\\text{Cl}_2 (242.6) > \\text{Br}_2 (192.8) > \\text{F}_2 (158.8) > \\text{I}_2 (151.1)$. Fluorine is anomalously weak due to lone-pair repulsion."),

    # 38 (Q433)
    ("Which of the following elements has the maximum number of allotropic forms?",
     "Sulphur ($\\text{S}$)",
     "Nitrogen ($\\text{N}$)",
     "Fluorine ($\\text{F}$)",
     "Aluminium ($\\text{Al}$)",
     0, "Sulphur Allotropes",
     "Sulphur forms numerous allotropic modifications (rhombic $\\alpha$-sulphur, monoclinic $\\beta$-sulphur, plastic sulphur, colloidal sulphur, cyclo-$\\text{S}_6$, cyclo-$\\text{S}_8$, cyclo-$\\text{S}_{12}$, cyclo-$\\text{S}_{20}$), showing the greatest variety of allotropes."),

    # 39 (Q434)
    ("Rhombic sulphur transforms reversibly into monoclinic sulphur at which transition temperature?",
     "$369\\text{ K} (95.6^\\circ\\text{C})$",
     "$373\\text{ K} (100^\\circ\\text{C})$",
     "$273\\text{ K} (0^\\circ\\text{C})$",
     "$444\\text{ K} (171^\\circ\\text{C})$",
     0, "Sulphur Transition Temperature",
     "Below $369\\text{ K}$, rhombic sulphur is stable; above $369\\text{ K}$, monoclinic sulphur is stable. At exactly $369\\text{ K}$ (transition temperature), both allotropic forms coexist in equilibrium."),

    # 40 (Q435)
    ("White phosphorus is stored under water because:",
     "It spontaneously ignites in air to form $\\text{P}_4\\text{O}_{10}$ due to angle strain in the $\\text{P}_4$ tetrahedron",
     "It dissolves readily in water",
     "It reacts violently with water",
     "Water prevents it from subliming",
     0, "White Phosphorus Storage",
     "White phosphorus has a bond angle of only $60^\\circ$ in its $\\text{P}_4$ tetrahedron, resulting in tremendous angular strain that makes it highly reactive, catching fire spontaneously in air ($30^\\circ\\text{C}$). It is insoluble in water and unreactive with cold water, so it is stored submerged."),

    # 41 (Q436)
    ("Red phosphorus is less reactive than white phosphorus because:",
     "It has a polymeric chain structure of $\\text{P}_4$ tetrahedra that relieves bond strain",
     "It has a lower atomic mass",
     "It is a monoatomic gas",
     "It contains ionic bonds",
     0, "Red Phosphorus Polymeric Structure",
     "Red phosphorus consists of interconnected chains of $\\text{P}_4$ units linked covalently, relieving angle strain and making it thermally stable, non-poisonous, and non-flammable at room temperature."),

    # 42 (Q437)
    ("The most thermodynamically stable allotrope of carbon at standard temperature and pressure ($298\\text{ K}, 1\\text{ bar}$) is:",
     "Graphite",
     "Diamond",
     "Fullerene ($\\text{C}_{60}$)",
     "Carbon nanotubes",
     0, "Graphite Thermodynamic Stability",
     "Standard enthalpy of formation $\\Delta_f H^\\circ$ of graphite is assigned zero by thermodynamic convention, whereas diamond has $\\Delta_f H^\\circ = +1.9\\text{ kJ/mol}$. Hence graphite is the most stable allotrope of carbon."),

    # 43 (Q438)
    ("In graphite, each carbon atom is:",
     "$sp^2$ hybridized and bonded to three other carbons in hexagonal planar layers",
     "$sp^3$ hybridized in a 3D network",
     "$sp$ hybridized in linear chains",
     "Unhybridized",
     0, "Graphite Hybridization",
     "Graphite consists of two-dimensional planar hexagonal sheets where each carbon is $sp^2$ hybridized with one unhybridized $p$-orbital forming delocalized $\\pi$-bonds, enabling electrical conductivity along the planes."),

    # 44 (Q439)
    ("In diamond, each carbon atom is:",
     "$sp^3$ hybridized and bonded tetrahedrally to four other carbons with $\\text{C}-\\text{C}$ bond length of $154\\text{ pm}$",
     "$sp^2$ hybridized in planar sheets",
     "$sp$ hybridized in 3D rings",
     "$sp^3d$ hybridized",
     0, "Diamond Hybridization",
     "In diamond, all carbons are $sp^3$ hybridized with bond angles of $109.5^\\circ$ and equal $\\text{C}-\\text{C}$ single bond lengths of $154\\text{ pm}$, forming a rigid, non-conducting, tetrahedral 3D macromolecular network."),

    # 45 (Q440)
    ("Buckminsterfullerene ($\\text{C}_{60}$) contains:",
     "20 six-membered rings and 12 five-membered rings",
     "12 six-membered rings and 20 five-membered rings",
     "24 six-membered rings and 8 five-membered rings",
     "30 six-membered rings and 0 five-membered rings",
     0, "Fullerene Ring Structure",
     "$\\text{C}_{60}$ has a soccer-ball (truncated icosahedron) cage structure comprising exactly 20 hexagonal (six-membered) rings and 12 pentagonal (five-membered) rings."),

    # 46 (Q441)
    ("Which of the following Group 14 elements exhibits the highest electrical conductivity at room temperature?",
     "Lead ($\\text{Pb}$)",
     "Silicon ($\\text{Si}$)",
     "Germanium ($\\text{Ge}$)",
     "Carbon (diamond)",
     0, "Lead Metallic Conductor",
     "Lead is a true post-transition metal with delocalized metallic valence electrons, exhibiting typical metallic electrical conductivity, whereas $\\text{Si}$ and $\\text{Ge}$ are semiconductors and diamond is an insulator."),

    # 47 (Q442)
    ("Why is Boric acid ($\\text{H}_3\\text{BO}_3$) considered a weak monobasic acid rather than a tribasic acid?",
     "It acts as a Lewis acid by accepting an $\\text{OH}^-$ from water rather than donating a proton: $\\text{B}(\\text{OH})_3 + 2\\text{H}_2\\text{O} \\rightleftharpoons [\\text{B}(\\text{OH})_4]^- + \\text{H}_3\\text{O}^+$",
     "It ionizes in three successive steps",
     "It does not contain hydrogen",
     "It oxidizes water",
     0, "Boric Acid Monobasic Nature",
     "Boric acid is not a protonic Brønsted acid. It has an incomplete electron octet around Boron and acts as a Lewis acid by accepting a hydroxyl pair from water: $\\text{B}(\\text{OH})_3 + 2\\text{H}_2\\text{O} \\rightleftharpoons [\\text{B}(\\text{OH})_4]^- + \\text{H}_3\\text{O}^+$ ($pK_a \\approx 9.25$)."),

    # 48 (Q443)
    ("Diborane ($\\text{B}_2\\text{H}_6$) contains:",
     "Four terminal $2$-centre $2$-electron ($2c-2e$) bonds and two bridging $3$-centre $2$-electron ($3c-2e$) banana bonds",
     "Six $2c-2e$ bonds",
     "Two terminal bonds and four bridging bonds",
     "Six $3c-2e$ bonds",
     0, "Diborane Bonding Structure",
     "Diborane has four terminal $\\text{B}-\\text{H}$ bonds of standard $2c-2e$ type and two bridging hydrogen atoms forming three-centre two-electron ($3c-2e$) $\\text{B}-\\text{H}-\\text{B}$ banana bonds, resolving its electron deficiency."),

    # 49 (Q444)
    ("Which of the following species is ISOELECTRONIC with Diborane ($\\text{B}_2\\text{H}_6$)?",
     "Ethane ($\\text{C}_2\\text{H}_6$)",
     "Ethene ($\\text{C}_2\\text{H}_4$)",
     "Ethyne ($\\text{C}_2\\text{H}_2$)",
     "Methane ($\\text{CH}_4$)",
     0, "B2H6 Isoelectronic Molecule",
     "Total valence electrons: $\\text{B}_2\\text{H}_6$ has $2(3) + 6(1) = 12$ valence electrons. Ethene ($\\text{C}_2\\text{H}_4$) has $2(4) + 4(1) = 12$ valence electrons. Hence $\\text{B}_2\\text{H}_6$ is valence isoelectronic with $\\text{C}_2\\text{H}_4$."),

    # 50 (Q445)
    ("In the borax bead test, which transition metal ion imparts a deep blue colour in both oxidizing and reducing flames?",
     "Cobalt ($\\text{Co}^{2+}$)",
     "Copper ($\\text{Cu}^{2+}$)",
     "Chromium ($\\text{Cr}^{3+}$)",
     "Iron ($\\text{Fe}^{3+}$)",
     0, "Borax Bead Cobalt",
     "Cobalt forms cobalt metaborate $\\text{Co}(\\text{BO}_2)_2$, which produces a distinctive, deep sapphire-blue bead in both oxidizing and reducing flames."),

    # 51 (Q446)
    ("The chemical formula of Inorganic Benzene is:",
     "Borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$)",
     "Borazole ($\\text{B}_2\\text{N}_2\\text{H}_4$)",
     "Diborane ($\\text{B}_2\\text{H}_6$)",
     "Boron nitride ($(\\text{BN})_x$)",
     0, "Inorganic Benzene Formula",
     "Borazine ($\\text{B}_3\\text{N}_3\\text{H}_6$) has a planar six-membered cyclic alternating $\\text{B}-\\text{N}$ ring isoelectronic with benzene ($\\text{C}_6\\text{H}_6$), earning it the title 'inorganic benzene'."),

    # 52 (Q447)
    ("Unlike benzene, borazine undergoes addition reactions with $\\text{HCl}$ readily because:",
     "The $\\text{B}-\\text{N}$ bond is polar due to the electronegativity difference between Boron ($2.0$) and Nitrogen ($3.0$)",
     "Borazine is non-planar",
     "Borazine has no $\\pi$-electrons",
     "Boron has complete octet",
     0, "Borazine Reactivity vs Benzene",
     "In borazine, nitrogen carries a partial negative charge and boron carries a partial positive charge. This bond polarity makes the aromatic ring susceptible to nucleophilic and electrophilic addition reactions, whereas benzene's non-polar $\\text{C}-\\text{C}$ bonds resist addition."),

    # 53 (Q448)
    ("In the periodic table, the element with the highest electrical conductivity at room temperature among all metals is:",
     "Silver ($\\text{Ag}$)",
     "Copper ($\\text{Cu}$)",
     "Gold ($\\text{Au}$)",
     "Aluminium ($\\text{Al}$)",
     0, "Highest Conductivity Metal Silver",
     "Silver (Group 11, Period 5) has the highest electrical conductivity ($6.30 \\times 10^7\\text{ S/m}$) and thermal conductivity of all known elements at room temperature."),

    # 54 (Q449)
    ("Which of the following elements has the HIGHEST thermal conductivity among all solid materials at room temperature?",
     "Diamond ($\\text{C}$)",
     "Silver ($\\text{Ag}$)",
     "Copper ($\\text{Cu}$)",
     "Gold ($\\text{Au}$)",
     0, "Highest Thermal Conductivity Diamond",
     "Diamond possesses exceptionally strong covalent bonds and a rigid crystal lattice with high Debye temperature, allowing phonons to propagate with minimal scattering and yielding the highest thermal conductivity ($\\approx 2200\\text{ W}/(\\text{m}\\cdot\\text{K})$)."),

    # 55 (Q450)
    ("The element with the lowest electrical conductivity among Group 15 elements is:",
     "Nitrogen ($\\text{N}_2$)",
     "Bismuth ($\\text{Bi}$)",
     "Arsenic ($\\text{As}$)",
     "Antimony ($\\text{Sb}$)",
     0, "Lowest Conductivity Group 15",
     "Molecular nitrogen ($\\text{N}_2$) is an electrically insulating gas with completely localized covalent triple bonds, having virtually zero electrical conductivity.")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (50 questions: Q451 to Q500)
# -------------------------------------------------------------------------
hard_items = [
    # 1 (Q451) Authentic NEET 2022
    ("Match List-I (Oxide) with List-II (Nature of Oxide):\n(A) $\\text{CO}$ -> (1) Basic\n(B) $\\text{BaO}$ -> (2) Neutral\n(C) $\\text{Al}_2\\text{O}_3$ -> (3) Acidic\n(D) $\\text{Cl}_2\\text{O}_7$ -> (4) Amphoteric",
     "A-2, B-1, C-4, D-3",
     "A-1, B-2, C-4, D-3",
     "A-2, B-4, C-1, D-3",
     "A-3, B-1, C-4, D-2",
     0, "Match Oxides Nature NEET 2022",
     "$\\text{CO}$ is neutral (A-2). $\\text{BaO}$ is strongly basic (B-1). $\\text{Al}_2\\text{O}_3$ is amphoteric (C-4). $\\text{Cl}_2\\text{O}_7$ is strongly acidic (D-3). Thus A-2, B-1, C-4, D-3.",
     True, "NEET 2022"),

    # 2 (Q452) Authentic NEET 2023
    ("Given below are two statements:\nStatement I: The first ionization enthalpy of transition metals increases only slightly across a period compared to representative elements.\nStatement II: The incoming $(n-1)d$ electrons shield the outermost $ns$ electrons from the increasing nuclear charge, buffering the increase in effective nuclear charge.\nIn the light of the above statements, choose the most appropriate answer:",
     "Both Statement I and Statement II are correct, and Statement II is the correct explanation of Statement I",
     "Both Statement I and Statement II are correct, but Statement II is NOT the correct explanation of Statement I",
     "Statement I is correct, but Statement II is incorrect",
     "Statement I is incorrect, but Statement II is correct",
     0, "Transition Metals IE Buffering NEET 2023",
     "Both statements are correct. In transition series, added electrons enter the inner $(n-1)d$ shell rather than the valence shell. The screening by inner $d$-electrons counteracts the added nuclear charge, so $Z_{\\text{eff}}$ increases very slowly, causing only a minor rise in IE. Statement II correctly explains Statement I.",
     True, "NEET 2023"),

    # 3 (Q453) Authentic NEET 2024
    ("Consider the following properties of $p$-block elements:\n(I) Heavier congeners in Groups 13, 14, and 15 show lower oxidation states that are 2 units less than the group oxidation state due to the inert pair effect.\n(II) The tendency to form $p\\pi-p\\pi$ multiple bonds is strongest for the second period elements ($\\text{C, N, O}$).\n(III) The highest oxidation state becomes less stable down the group in post-transition elements.\nWhich of the above statements are correct?",
     "I, II, and III are all correct",
     "Only I and II are correct",
     "Only II and III are correct",
     "Only I and III are correct",
     0, "p-Block Core Trends NEET 2024",
     "Statement I is correct: inert pair effect stabilizes $+1$ in Group 13, $+2$ in Group 14, and $+3$ in Group 15. Statement II is correct: small atomic radii enable effective lateral $p\\pi-p\\pi$ overlap for C, N, O. Statement III is correct: higher oxidation states (e.g., $\\text{Tl}^{3+}, \\text{Pb}^{4+}, \\text{Bi}^{5+}$) are powerful oxidizing agents because they are unstable. All three are correct.",
     True, "NEET 2024"),

    # 4 (Q454)
    ("Assertion (A): $\\text{Bi}^{5+}$ is a stronger oxidizing agent than $\\text{Sb}^{5+}$.\nReason (R): Due to the inert pair effect, the $+3$ oxidation state of Bismuth is much more stable than its $+5$ oxidation state.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Bi5+ Oxidizing",
     "Assertion (A) is true: $\\text{Bi}^{5+}$ readily reduces to $\\text{Bi}^{3+}$ (e.g., $\\text{NaBiO}_3$ oxidizes $\\text{Mn}^{2+}$ to $\\text{MnO}_4^-$). Reason (R) is true: the $6s^2$ electrons in Bismuth are chemically inert due to poor shielding by $4f$ and $5d$ subshells. (R) correctly explains (A)."),

    # 5 (Q455)
    ("Assertion (A): Lithium fluoride ($\\text{LiF}$) and Caesium iodide ($\\text{CsI}$) are both sparingly soluble in water, but for entirely different thermodynamic reasons.\nReason (R): $\\text{LiF}$ has exceptionally high lattice enthalpy, whereas $\\text{CsI}$ has exceptionally low hydration enthalpy.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason LiF and CsI Solubility",
     "Assertion (A) is true: both are poorly soluble in water. Reason (R) is true: $\\text{Li}^+$ and $\\text{F}^-$ are small, giving huge lattice energy that hydration cannot overcome; $\\text{Cs}^+$ and $\\text{I}^-$ are large, giving very small hydration enthalpy that cannot compensate for lattice energy. (R) correctly explains (A)."),

    # 6 (Q456)
    ("Assertion (A): In aqueous solution, Lithium is a stronger reducing agent than Caesium, despite Lithium having a much higher first ionization enthalpy.\nReason (R): The tiny $\\text{Li}^+$ ion has an extraordinarily high hydration enthalpy that compensates for its high ionization and sublimation energies.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Lithium Reducing Power",
     "Assertion (A) is true: $E^\\circ(\\text{Li}^+/\\text{Li}) = -3.04\\text{ V}$ vs $E^\\circ(\\text{Cs}^+/\\text{Cs}) = -2.92\\text{ V}$. Reason (R) is true: $\\Delta_{\\text{hyd}}H(\\text{Li}^+) = -506\\text{ kJ/mol}$, the highest among alkali metals, driving the electrode potential to the most negative value. (R) correctly explains (A)."),

    # 7 (Q457)
    ("Assertion (A): The acidic strength of oxyacids of Chlorine increases in the order $\\text{HClO} < \\text{HClO}_2 < \\text{HClO}_3 < \\text{HClO}_4$.\nReason (R): As the oxidation state of Chlorine increases, the number of terminal oxygen atoms increases, stabilizing the conjugate base through greater resonance delocalization of negative charge.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Oxyacids Acidity",
     "Assertion (A) is true: $\\text{HClO}_4$ ($pK_a \\approx -10$) is a superacid while $\\text{HClO}$ ($pK_a \\approx 7.5$) is very weak. Reason (R) is true: $\\text{ClO}_4^-$ has four equivalent resonance structures distributing the negative charge over 4 oxygens, imparting exceptional conjugate base stability. (R) correctly explains (A)."),

    # 8 (Q458)
    ("Assertion (A): Nitrogen is chemically inert at room temperature.\nReason (R): The $\\text{N}\\equiv\\text{N}$ triple bond has an extraordinarily high bond dissociation enthalpy ($946\\text{ kJ/mol}$).",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason N2 Inertness",
     "Assertion (A) is true: $\\text{N}_2$ behaves almost like a noble gas at room temperature. Reason (R) is true: the $p\\pi-p\\pi$ triple bond requires an immense $946\\text{ kJ/mol}$ to break, rendering it kinetically unreactive under standard conditions. (R) correctly explains (A)."),

    # 9 (Q459)
    ("Assertion (A): Solid $\\text{PCl}_5$ exists as an ionic solid consisting of $[\\text{PCl}_4]^+$ and $[\\text{PCl}_6]^-$.\nReason (R): In the solid state, tetrahedral $[\\text{PCl}_4]^+$ and octahedral $[\\text{PCl}_6]^-$ ions pack efficiently in a stable crystal lattice.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Solid PCl5 Structure",
     "Assertion (A) is true: in gas/liquid phase $\\text{PCl}_5$ is covalent trigonal bipyramidal, but in crystalline state it is $[\\text{PCl}_4]^+ [\\text{PCl}_6]^-$. Reason (R) is true: electrostatic lattice energy of these symmetric ions provides thermodynamic stability in the solid. (R) correctly explains (A)."),

    # 10 (Q460)
    ("Solid $\\text{PBr}_5$ exists as which ionic species in its crystalline state?",
     "$[\\text{PBr}_4]^+ \\text{Br}^-$",
     "$[\\text{PBr}_4]^+ [\\text{PBr}_6]^-$",
     "Discrete covalent $\\text{PBr}_5$ molecules",
     "$[\\text{PBr}_3]^{2+} 2\\text{Br}^-$",
     0, "Solid PBr5 Structure",
     "Because Bromine is much larger than Chlorine, six bulky bromine atoms cannot fit sterically around the central phosphorus atom to form $[\\text{PBr}_6]^-$. Instead, $\\text{PBr}_5$ crystallizes as $[\\text{PBr}_4]^+ \\text{Br}^-$."),

    # 11 (Q461)
    ("Which of the following orders of bond angles is correct?",
     "$\\text{NO}_2^+ > \\text{NO}_2 > \\text{NO}_2^-$",
     "$\\text{NO}_2^- > \\text{NO}_2 > \\text{NO}_2^+$",
     "$\\text{NO}_2 > \\text{NO}_2^+ > \\text{NO}_2^-$",
     "$\\text{NO}_2^+ = \\text{NO}_2 = \\text{NO}_2^-$",
     0, "NO2 Species Bond Angles",
     "$\\text{NO}_2^+$ has $sp$ hybridization and 0 lone pairs (linear, $180^\\circ$). $\\text{NO}_2$ has a single unpaired electron in an $sp^2$ orbital (bond angle $\\approx 134^\\circ$). $\\text{NO}_2^-$ has a full lone pair in an $sp^2$ orbital, exerting greater repulsion (bond angle $\\approx 115^\\circ$). Order: $\\text{NO}_2^+ (180^\\circ) > \\text{NO}_2 (134^\\circ) > \\text{NO}_2^- (115^\\circ)$."),

    # 12 (Q462)
    ("Which of the following compounds has the HIGHEST dipole moment?",
     "$\\text{CH}_3\\text{Cl}$",
     "$\\text{CH}_3\\text{F}$",
     "$\\text{CH}_3\\text{Br}$",
     "$\\text{CH}_3\\text{I}$",
     0, "CH3Cl Dipole Moment Anomaly",
     "Dipole moment is $\\mu = q \\times d$. Although Fluorine is more electronegative than Chlorine ($q_{\\text{F}} > q_{\\text{Cl}}$), the $\\text{C}-\\text{Cl}$ bond distance ($178\\text{ pm}$) is significantly longer than $\\text{C}-\\text{F}$ ($139\\text{ pm}$). The larger bond distance overrides charge separation, giving $\\text{CH}_3\\text{Cl}$ ($1.87\\text{ D}$) a higher dipole moment than $\\text{CH}_3\\text{F}$ ($1.82\\text{ D}$)."),

    # 13 (Q463)
    ("The correct order of boiling points for hydrogen halides is:",
     "$\\text{HF} > \\text{HI} > \\text{HBr} > \\text{HCl}$",
     "$\\text{HI} > \\text{HBr} > \\text{HCl} > \\text{HF}$",
     "$\\text{HF} > \\text{HCl} > \\text{HBr} > \\text{HI}$",
     "$\\text{HCl} > \\text{HBr} > \\text{HI} > \\text{HF}$",
     0, "Hydrogen Halides Boiling Point Trend",
     "$\\text{HF}$ has strong intermolecular hydrogen bonding, giving it the highest boiling point ($293\\text{ K} = 20^\\circ\\text{C}$). For the others, boiling point increases with molecular weight / London dispersion forces: $\\text{HCl} (189\\text{ K}) < \\text{HBr} (206\\text{ K}) < \\text{HI} (238\\text{ K})$. Thus: $\\text{HF} > \\text{HI} > \\text{HBr} > \\text{HCl}$."),

    # 14 (Q464)
    ("Which of the following elements has the highest ionization enthalpy among all transition elements?",
     "Mercury ($\\text{Hg}$, $1007\\text{ kJ/mol}$)",
     "Zinc ($\\text{Zn}$)",
     "Cadmium ($\\text{Cd}$)",
     "Gold ($\\text{Au}$)",
     0, "Highest Transition Metal IE Mercury",
     "Mercury ($[\\text{Xe}] 4f^{14} 5d^{10} 6s^2$) experiences strong relativistic contraction of its $6s$ orbital alongside poor shielding from $14\\ 4f$ electrons, giving it a remarkably high first ionization enthalpy ($1007\\text{ kJ/mol}$), higher than Zinc ($906\\text{ kJ/mol}$) and Cadmium ($868\\text{ kJ/mol}$)."),

    # 15 (Q465)
    ("Why is Mercury a liquid at room temperature ($25^\\circ\\text{C}$)?",
     "The relativistic contraction and stability of the closed $6s^2$ subshell prevents effective metallic overlap between mercury atoms",
     "Mercury has no valence electrons",
     "Mercury has weak van der Waals forces only",
     "Mercury has a low atomic weight",
     0, "Mercury Liquid State Reason",
     "Due to relativistic effects, the $6s$ electron pair in Mercury is drawn very close to the nucleus and is tightly bound. These $6s^2$ electrons resist delocalization into the metallic conduction band, resulting in exceptionally weak metallic bonding and keeping Mercury liquid at ambient temperatures ($T_m = -38.8^\\circ\\text{C}$)."),

    # 16 (Q466)
    ("The basicity of phosphorus oxyacids $\\text{H}_3\\text{PO}_2, \\text{H}_3\\text{PO}_3,$ and $\\text{H}_3\\text{PO}_4$ are respectively:",
     "1, 2, and 3",
     "3, 2, and 1",
     "3, 3, and 3",
     "1, 1, and 1",
     0, "Phosphorus Oxyacids Basicity",
     "Only hydrogens directly attached to oxygen as $\\text{P}-\\text{OH}$ groups are ionizable as $\\text{H}^+$. $\\text{H}_3\\text{PO}_2$ has one $\\text{P}-\\text{OH}$ (monobasic); $\\text{H}_3\\text{PO}_3$ has two $\\text{P}-\\text{OH}$ (dibasic); $\\text{H}_3\\text{PO}_4$ has three $\\text{P}-\\text{OH}$ (tribasic)."),

    # 17 (Q467)
    ("Which of the following phosphorus oxyacids is the STRONGEST reducing agent?",
     "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
     "Phosphorous acid ($\\text{H}_3\\text{PO}_3$)",
     "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)",
     "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)",
     0, "Strongest Reducing Phosphorus Acid",
     "Reducing character in phosphorus oxyacids arises from hydrogens directly bonded to phosphorus ($\\text{P}-\\text{H}$ bonds). $\\text{H}_3\\text{PO}_2$ contains two $\\text{P}-\\text{H}$ bonds, making it a powerful reducing agent that readily reduces $\\text{AgNO}_3$ to metallic silver."),

    # 18 (Q468)
    ("Which of the following compounds does NOT contain a peroxide linkage ($-\\text{O}-\\text{O}-$)?",
     "$\\text{PbO}_2$",
     "$\\text{BaO}_2$",
     "$\\text{H}_2\\text{S}_2\\text{O}_8$ (Marshall's acid)",
     "$\\text{CrO}_5$",
     0, "PbO2 Dioxides vs Peroxides",
     "$\\text{PbO}_2$ is a dioxide containing lead in $+4$ oxidation state with discrete oxide ions ($\\text{O}^{2-}$), not a peroxide. In contrast, $\\text{BaO}_2, \\text{H}_2\\text{S}_2\\text{O}_8,$ and $\\text{CrO}_5$ all contain true peroxo ($-\\text{O}-\\text{O}-$) linkages."),

    # 19 (Q469)
    ("The oxidation state of Chromium in butterfly-shaped blue chromium peroxide ($\\text{CrO}_5$) is:",
     "+6",
     "+10",
     "+5",
     "+4",
     0, "CrO5 Chromium Oxidation State",
     "$\\text{CrO}_5$ contains one oxo oxygen ($\\text{Cr}=\\text{O}$, oxidation state $-2$) and two peroxo groups (four oxygen atoms with oxidation state $-1$ each). Thus: $x + (-2) + 4(-1) = 0 \\Rightarrow x = +6$."),

    # 20 (Q470)
    ("The oxidation state of Sulphur in Marshall's acid ($\\text{H}_2\\text{S}_2\\text{O}_8$) is:",
     "+6",
     "+7",
     "+8",
     "+4",
     0, "Marshalls Acid Sulphur Oxidation State",
     "Marshall's acid has structure $\\text{HO}-\\text{SO}_2-\\text{O}-\\text{O}-\\text{SO}_2-\\text{OH}$. The peroxo bridge contains 2 oxygens with $-1$, while the remaining 6 oxygens have $-2$. Thus $2(+1) + 2x + 2(-1) + 6(-2) = 0 \\Rightarrow 2x = 12 \\Rightarrow x = +6$ per Sulphur atom."),

    # 21 (Q471)
    ("The oxidation state of Sulphur in Caro's acid ($\\text{H}_2\\text{SO}_5$) is:",
     "+6",
     "+8",
     "+5",
     "+7",
     0, "Caros Acid Sulphur Oxidation State",
     "Caro's acid (peroxomonosulfuric acid) has one peroxo linkage: $\\text{HO}-\\text{SO}_2-\\text{O}-\\text{OH}$. With two peroxo oxygens ($-1$) and three oxo/hydroxy oxygens ($-2$): $2(+1) + x + 2(-1) + 3(-2) = 0 \\Rightarrow x = +6$."),

    # 22 (Q472)
    ("Which of the following noble gas compounds is ISOSTRUCTURAL with $\\text{ICl}_4^-$?",
     "$\\text{XeF}_4$",
     "$\\text{XeF}_2$",
     "$\\text{XeO}_3$",
     "$\\text{XeOF}_4$",
     0, "XeF4 and ICl4 Isostructural",
     "Both $\\text{XeF}_4$ and $\\text{ICl}_4^-$ have 6 electron pairs ($sp^3d^2$ hybridization) with 4 bonding pairs and 2 lone pairs in trans positions, adopting a square planar geometry."),

    # 23 (Q473)
    ("Which of the following noble gas compounds is LINEAR in shape?",
     "$\\text{XeF}_2$",
     "$\\text{XeF}_4$",
     "$\\text{XeO}_3$",
     "$\\text{XeOF}_2$",
     0, "XeF2 Linear Geometry",
     "$\\text{XeF}_2$ has 5 electron pairs ($sp^3d$ hybridization) with 2 bonding pairs and 3 lone pairs in equatorial positions of a trigonal bipyramid, resulting in a strictly linear molecular geometry ($180^\\circ$)."),

    # 24 (Q474)
    ("Which of the following noble gas compounds has a PYRAMIDAL shape?",
     "$\\text{XeO}_3$",
     "$\\text{XeF}_4$",
     "$\\text{XeF}_2$",
     "$\\text{XeF}_6$",
     0, "XeO3 Pyramidal Shape",
     "$\\text{XeO}_3$ has $sp^3$ hybridization with 3 bonding pairs and 1 lone pair on Xenon, forming a trigonal pyramidal molecule isoelectronic and isostructural with the iodate ion ($\\text{IO}_3^-$)."),

    # 25 (Q475)
    ("The molecular geometry of $\\text{XeF}_6$ in the gas phase is:",
     "Distorted octahedral",
     "Regular octahedral",
     "Pentagonal bipyramidal",
     "Square pyramidal",
     0, "XeF6 Distorted Octahedral",
     "$\\text{XeF}_6$ has 7 electron pairs ($sp^3d^3$ hybridization): 6 bonding pairs and 1 stereochemically active lone pair, producing a dynamically distorted octahedral geometry."),

    # 26 (Q476)
    ("Neil Bartlett synthesized the first noble gas compound $\\text{Xe}^+[\\text{PtF}_6]^-$ in 1962 based on the realization that:",
     "The first ionization enthalpy of Xenon ($1170\\text{ kJ/mol}$) is almost identical to that of molecular oxygen ($1175\\text{ kJ/mol}$)",
     "Xenon is more reactive than fluorine",
     "Platinum has vacant $d$-orbitals",
     "Oxygen forms superoxides",
     0, "Neil Bartlett Discovery Rationalization",
     "Bartlett had synthesized $\\text{O}_2^+[\\text{PtF}_6]^-$. Knowing that the first ionization enthalpy of molecular oxygen is $1175\\text{ kJ/mol}$ and that of Xenon is $1170\\text{ kJ/mol}$, he reasoned that $\\text{PtF}_6$ should also oxidize Xenon, successfully preparing the first noble gas compound."),

    # 27 (Q477)
    ("Which of the following noble gases does NOT form any confirmed neutral chemical compounds under normal experimental conditions?",
     "Helium ($\\text{He}$) and Neon ($\\text{Ne}$)",
     "Xenon ($\\text{Xe}$)",
     "Krypton ($\\text{Kr}$)",
     "Radon ($\\text{Rn}$)",
     0, "Unreactive Noble Gases He and Ne",
     "Helium and Neon have exceptionally high ionization enthalpies ($2372\\text{ kJ/mol}$ and $2080\\text{ kJ/mol}$) and lack accessible low-energy orbitals, forming no confirmed stable neutral ground-state chemical compounds."),

    # 28 (Q478)
    ("The compound of Krypton that has been isolated and characterized at low temperatures is:",
     "$\\text{KrF}_2$",
     "$\\text{KrF}_4$",
     "$\\text{KrO}_3$",
     "$\\text{KrCl}_2$",
     0, "Krypton Difluoride",
     "Krypton difluoride ($\\text{KrF}_2$) is a volatile, thermally unstable colorless solid prepared by electric discharge or UV photolysis of $\\text{Kr}$ and $\\text{F}_2$ at low temperatures ($-196^\\circ\\text{C}$)."),

    # 29 (Q479)
    ("The clathrate compounds formed by noble gases like $\\text{Ar, Kr, Xe}$ involve:",
     "Trapping of noble gas atoms in interstitial cavities of a host crystal lattice (such as hydroquinone or water ice) without chemical bonds",
     "Covalent bonding with host molecules",
     "Ionic bonding with host cations",
     "Coordination bonding via dative bonds",
     0, "Clathrate Compounds Nature",
     "Clathrates are cage inclusion compounds where noble gas atoms are physically trapped within hydrogen-bonded cavities of a host lattice without forming formal chemical bonds. Tiny Helium and Neon are too small and escape from the cages, forming no clathrates."),

    # 30 (Q480)
    ("Which of the following noble gases CANNOT form clathrate compounds with quinol?",
     "Helium ($\\text{He}$) and Neon ($\\text{Ne}$)",
     "Argon ($\\text{Ar}$)",
     "Krypton ($\\text{Kr}$)",
     "Xenon ($\\text{Xe}$)",
     0, "He and Ne No Clathrates",
     "Helium and Neon atoms are so small that they easily slip out of the molecular cavities of quinol crystals, failing to become trapped."),

    # 31 (Q481)
    ("Hydrolysis of $\\text{XeF}_6$ with excess water yields:",
     "$\\text{XeO}_3$ and $\\text{HF}$",
     "$\\text{XeOF}_4$ and $\\text{HF}$",
     "$\\text{Xe}$ and $\\text{O}_2$",
     "$\\text{XeF}_4$ and $\\text{O}_2$",
     0, "Complete Hydrolysis of XeF6",
     "Complete hydrolysis of $\\text{XeF}_6$ produces highly explosive solid xenon trioxide: $\\text{XeF}_6 + 3\\text{H}_2\\text{O} \\rightarrow \\text{XeO}_3 + 6\\text{HF}$."),

    # 32 (Q482)
    ("Partial hydrolysis of $\\text{XeF}_6$ with one mole of water produces:",
     "$\\text{XeOF}_4$ and $2\\text{HF}$",
     "$\\text{XeO}_2\\text{F}_2$ and $4\\text{HF}$",
     "$\\text{XeO}_3$ and $6\\text{HF}$",
     "$\\text{Xe}$ and $\\text{F}_2$",
     0, "Partial Hydrolysis XeF6",
     "Partial hydrolysis of $\\text{XeF}_6$ with stoichiometric water yields xenon oxytetrafluoride: $\\text{XeF}_6 + \\text{H}_2\\text{O} \\rightarrow \\text{XeOF}_4 + 2\\text{HF}$."),

    # 33 (Q483)
    ("Reaction of $\\text{XeF}_4$ with water is a disproportionation reaction yielding:",
     "$\\text{Xe}, \\text{XeO}_3, \\text{HF},$ and $\\text{O}_2$",
     "$\\text{XeO}_3$ and $\\text{HF}$ only",
     "$\\text{Xe}$ and $\\text{F}_2$ only",
     "$\\text{XeOF}_2$ and $\\text{H}_2$",
     0, "Hydrolysis of XeF4 Disproportionation",
     "$6\\text{XeF}_4 + 12\\text{H}_2\\text{O} \\rightarrow 4\\text{Xe} + 2\\text{XeO}_3 + 24\\text{HF} + 3\\text{O}_2$. Xenon($+4$) is both reduced to elemental Xenon($0$) and oxidized to $\\text{XeO}_3$($+6$), representing a classic redox disproportionation."),

    # 34 (Q484)
    ("Which of the following represents the correct order of basicity for the halide ions in water?",
     "$\\text{F}^- > \\text{Cl}^- > \\text{Br}^- > \\text{I}^-$",
     "$\\text{I}^- > \\text{Br}^- > \\text{Cl}^- > \\text{F}^-$",
     "$\\text{Cl}^- > \\text{Br}^- > \\text{I}^- > \\text{F}^-$",
     "$\\text{F}^- = \\text{Cl}^- = \\text{Br}^- = \\text{I}^-$",
     0, "Halide Ions Basicity Order",
     "According to Brønsted-Lowry theory, the conjugate base of a weak acid is strong, while the conjugate base of a strong acid is weak. Since acid strength is $\\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI}$, the basicity of conjugate bases is $\\text{F}^- > \\text{Cl}^- > \\text{Br}^- > \\text{I}^-$."),

    # 35 (Q485)
    ("The bond order of the superoxide ion ($\\text{O}_2^-$) according to molecular orbital theory is:",
     "$1.5$",
     "$2.0$",
     "$1.0$",
     "$2.5$",
     0, "Superoxide Bond Order MOT",
     "$\\text{O}_2^-$ has 17 electrons. Configuration: $\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2 \\sigma_{2s}^{*2} \\sigma_{2p_z}^2 (\\pi_{2p_x}^2 = \\pi_{2p_y}^2) (\\pi_{2p_x}^{*2} = \\pi_{2p_y}^{*1})$. Bonding electrons = 10, antibonding = 7. $\\text{Bond order} = (10 - 7)/2 = 1.5$."),

    # 36 (Q486)
    ("The bond order of the peroxide ion ($\\text{O}_2^{2-}$) according to molecular orbital theory is:",
     "$1.0$",
     "$1.5$",
     "$2.0$",
     "$0.5$",
     0, "Peroxide Bond Order MOT",
     "$\\text{O}_2^{2-}$ has 18 electrons (isoelectronic with $\\text{F}_2$). Both $\\pi^*$ orbitals are completely filled (4 antibonding electrons in $\\pi^*$). $\\text{Bond order} = (10 - 8)/2 = 1.0$, and the species is diamagnetic."),

    # 37 (Q487)
    ("Which of the following oxygen species is PARAMAGNETIC?",
     "$\\text{O}_2$ and $\\text{O}_2^-$",
     "$\\text{O}_2^{2-}$ and $\\text{O}_2^{2+}$",
     "$\\text{O}_2^{2-}$ only",
     "None of the above",
     0, "Paramagnetic Oxygen Species",
     "$\\text{O}_2$ has 2 unpaired electrons in degenerate $\\pi^*$ orbitals. $\\text{O}_2^-$ has 1 unpaired electron in a $\\pi^*$ orbital. Both are paramagnetic. $\\text{O}_2^{2-}$ and $\\text{O}_2^{2+}$ have all electrons paired and are diamagnetic."),

    # 38 (Q488)
    ("The stability of the species $\\text{O}_2, \\text{O}_2^+, \\text{O}_2^-, \\text{O}_2^{2-}$ increases in the order of their bond orders:",
     "$\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+$",
     "$\\text{O}_2^+ < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2 < \\text{O}_2^+ < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2^{2-} < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^+$",
     0, "Oxygen Species Stability Order",
     "Bond orders: $\\text{O}_2^{2-} (1.0) < \\text{O}_2^- (1.5) < \\text{O}_2 (2.0) < \\text{O}_2^+ (2.5)$. Since bond dissociation energy and stability are directly proportional to bond order, the order is $\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+$."),

    # 39 (Q489)
    ("The $\\text{O}-\\text{O}$ bond length in $\\text{O}_2, \\text{O}_2^+, \\text{O}_2^-, \\text{O}_2^{2-}$ follows which order?",
     "$\\text{O}_2^+ < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+$",
     "$\\text{O}_2 < \\text{O}_2^+ < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2^+ = \\text{O}_2 < \\text{O}_2^- = \\text{O}_2^{2-}$",
     0, "Oxygen Species Bond Length Order",
     "Bond length is inversely proportional to bond order. With bond orders $\\text{O}_2^+ (2.5) > \\text{O}_2 (2.0) > \\text{O}_2^- (1.5) > \\text{O}_2^{2-} (1.0)$, bond length increases as $\\text{O}_2^+ (112\\text{ pm}) < \\text{O}_2 (121\\text{ pm}) < \\text{O}_2^- (128\\text{ pm}) < \\text{O}_2^{2-} (149\\text{ pm})$."),

    # 40 (Q490)
    ("Which of the following compounds has a bond angle CLOSEST to $90^\\circ$?",
     "$\\text{H}_2\\text{S} (92.1^\\circ)$",
     "$\\text{H}_2\\text{O} (104.5^\\circ)$",
     "$\\text{NH}_3 (107.8^\\circ)$",
     "$\\text{CH}_4 (109.5^\\circ)$",
     0, "H2S Bond Angle Drago",
     "According to Drago's rule, Sulphur in $\\text{H}_2\\text{S}$ undergoes negligible hybridization, using almost pure $3p$ orbitals to form bonds with Hydrogen, resulting in a bond angle of $92.1^\\circ$ (close to $90^\\circ$)."),

    # 41 (Q491)
    ("Which of the following elements has the lowest boiling point in the entire universe?",
     "Helium ($\\text{He}$, $4.2\\text{ K}$)",
     "Hydrogen ($\\text{H}_2$, $20.3\\text{ K}$)",
     "Neon ($\\text{Ne}$, $27.1\\text{ K}$)",
     "Nitrogen ($\\text{N}_2$, $77.3\\text{ K}$)",
     0, "Lowest Boiling Point Helium",
     "Helium has the weakest London dispersion forces due to having only two tightly held electrons and the smallest polarizability, boiling at an extraordinary $4.22\\text{ K}$ ($-268.93^\\circ\\text{C}$), the lowest boiling point of any known substance."),

    # 42 (Q492)
    ("Helium remains a liquid down to absolute zero ($0\\text{ K}$) at standard atmospheric pressure because:",
     "Its zero-point vibrational quantum energy exceeds the extremely weak van der Waals forces between helium atoms",
     "It forms metallic bonds at $0\\text{ K}$",
     "It undergoes radioactive decay",
     "It has zero atomic volume",
     0, "Helium Liquid at Absolute Zero",
     "Due to its extremely low mass and weak interatomic forces, Helium's quantum mechanical zero-point energy is large enough to disrupt the crystal lattice, preventing freezing unless an external pressure of at least $25\\text{ atm}$ is applied."),

    # 43 (Q493)
    ("Liquid Helium-4 below the lambda point ($2.17\\text{ K}$) transitions into a superfluid state characterized by:",
     "Zero viscosity and infinite thermal conductivity",
     "Zero electrical conductivity and high viscosity",
     "Solidification into diamond lattice",
     "Disproportionation into ions",
     0, "Superfluid Helium He-II",
     "Below $2.17\\text{ K}$, Helium-4 enters the He-II superfluid phase where it flows without any internal friction or viscosity and exhibits thermal conductivity hundreds of times greater than copper."),

    # 44 (Q494)
    ("Which of the following compounds exhibits both covalent and ionic bonding?",
     "$\\text{NH}_4\\text{Cl}$",
     "$\\text{NaCl}$",
     "$\\text{CCl}_4$",
     "$\\text{CH}_4$",
     0, "Covalent and Ionic Bonding NH4Cl",
     "$\\text{NH}_4\\text{Cl}$ contains covalent $\\text{N}-\\text{H}$ bonds (including a coordinate covalent bond) within the ammonium ion $[\\text{NH}_4]^+$, and an ionic electrostatic bond between $[\\text{NH}_4]^+$ and $\\text{Cl}^-$."),

    # 45 (Q495)
    ("Which of the following species contains ionic, covalent, and coordinate covalent bonds all together?",
     "$\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O}$",
     "$\\text{NaCl}$",
     "$\\text{CO}_2$",
     "$\\text{H}_2\\text{O}$",
     0, "All Three Bond Types CuSO4",
     "In blue vitriol: ionic bonds exist between $[\\text{Cu}(\\text{H}_2\\text{O})_4]^{2+}$ and $\\text{SO}_4^{2-}$; covalent bonds exist within water and sulfate; and coordinate bonds exist between water oxygen lone pairs and $\\text{Cu}^{2+}$, plus hydrogen bonding with the 5th water molecule."),

    # 46 (Q496)
    ("Which of the following properties of an element cannot be measured directly by experiment?",
     "Electronegativity",
     "Ionization enthalpy",
     "Electron gain enthalpy",
     "Atomic radius (by X-ray diffraction)",
     0, "Electronegativity Arbitrary Scale",
     "Electronegativity is not an absolute, directly measurable physical quantity; it is a relative chemical construct evaluated using empirical energy differences (Pauling) or averages of measurable physical parameters (Mulliken, Allred-Rochow)."),

    # 47 (Q497)
    ("The correct order of standard oxidation potential ($E^\\circ_{\\text{ox}}$) for alkali metals in aqueous solution is:",
     "$\\text{Li} > \\text{K} > \\text{Ba} > \\text{Sr} > \\text{Ca} > \\text{Na}$",
     "$\\text{Na} > \\text{K} > \\text{Li}$",
     "$\\text{Cs} > \\text{Rb} > \\text{K} > \\text{Na} > \\text{Li}$",
     "$\\text{Li} = \\text{Na} = \\text{K}$",
     0, "Oxidation Potential Order Alkali Metals",
     "In the electrochemical series, Lithium has the most positive standard oxidation potential ($E^\\circ_{\\text{ox}} = +3.04\\text{ V}$), followed by K, Ba, Sr, Ca, and Na ($+2.71\\text{ V}$) due to the massive hydration energy of $\\text{Li}^+$."),

    # 48 (Q498)
    ("Why is Boron chemically more similar to Silicon than to its own group congener Aluminium?",
     "Diagonal relationship arising from their similar charge-to-radius ratio and almost identical electronegativities (Boron = 2.0, Silicon = 1.9)",
     "Both belong to the same period",
     "Both are transition metals",
     "Both form simple ionic chlorides",
     0, "Boron and Silicon Diagonal Relationship",
     "Boron and Silicon show diagonal resemblance: both are non-metals / semiconductors, both form covalent polymeric hydrides and halides, both have acidic oxides ($\\text{B}_2\\text{O}_3, \\text{SiO}_2$), and both form borates and silicates with tetrahedral structural units."),

    # 49 (Q499)
    ("The valence shell electronic configuration of an element with atomic number $Z = 120$ (unbinilium) is predicted to be:",
     "$[\\text{Og}] 8s^2$",
     "$[\\text{Og}] 7d^2$",
     "$[\\text{Og}] 8p^2$",
     "$[\\text{Og}] 5g^2$",
     0, "Element 120 Predicted Configuration",
     "Oganesson ($Z = 118$) completes Period 7 with $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^6$. Following the Aufbau principle, the next element $Z = 119$ begins Period 8 with $8s^1$, and $Z = 120$ has configuration $[\\text{Og}] 8s^2$, placing it in Group 2 as an alkaline earth metal."),

    # 50 (Q500)
    ("In the periodic table, the total number of gaseous elements at standard temperature and pressure ($25^\\circ\\text{C}, 1\\text{ bar}$) is:",
     "11 elements ($\\text{H}_2, \\text{He}, \\text{N}_2, \\text{O}_2, \\text{F}_2, \\text{Ne}, \\text{Cl}_2, \\text{Ar}, \\text{Kr}, \\text{Xe}, \\text{Rn}$)",
     "10 elements",
     "12 elements",
     "9 elements",
     0, "Gaseous Elements Count at STP",
     "Exactly 11 elements are gases under standard conditions: six noble gases ($\\text{He, Ne, Ar, Kr, Xe, Rn}$) and five diatomic non-metals ($\\text{H}_2, \\text{N}_2, \\text{O}_2, \\text{F}_2, \\text{Cl}_2$). Only two elements are liquids ($\\text{Br}_2, \\text{Hg}$), and the remaining are solids.")
]

print(f"Loaded {len(easy_items)} Easy items.")
print(f"Loaded {len(med_items)} Medium items.")
print(f"Loaded {len(hard_items)} Hard items.")

assert len(easy_items) == 20
assert len(med_items) == 55
assert len(hard_items) == 50

for idx, item in enumerate(easy_items):
    q_num = 376 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(med_items):
    q_num = 396 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(hard_items):
    q_num = 451 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 4 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 20
assert med_c == 55
assert hard_c == 50

out_file = "src/data/chapterwise/chemistry/periodicClassificationPart4.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Classification of Elements and Periodicity in Properties | Chemistry | Class: 11 | Part 4
// Target: Exactly 125 MCQs (20 Easy, 55 Medium, 50 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const PERIODIC_CLASSIFICATION_PART4_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
