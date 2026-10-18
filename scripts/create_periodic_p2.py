#!/usr/bin/env python3
"""
Direct generator for Classification of Elements and Periodicity in Properties - Part 2
Q126 to Q250: 35 Easy, 65 Medium, 25 Hard = 125 MCQs
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
        "topicId": "chem-periodic-trends-radii-ie",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# -------------------------------------------------------------------------
# EASY QUESTIONS (35 questions: Q126 to Q160)
# -------------------------------------------------------------------------
easy_items = [
    # 1 (Q126)
    ("Across a period in the periodic table from left to right, the atomic radius generally:",
     "Decreases due to increase in effective nuclear charge ($Z_{\\text{eff}}$)",
     "Increases due to addition of new electron shells",
     "Remains constant because electrons enter the same shell",
     "First increases and then decreases drastically",
     0, "Atomic Radius Period Trend",
     "Across a period, electrons enter the same valence shell while nuclear charge $Z$ increases by 1 at each step. This increases effective nuclear charge ($Z_{\\text{eff}}$), pulling valence electrons closer to the nucleus and decreasing atomic radius."),

    # 2 (Q127)
    ("Down a group in the periodic table from top to bottom, the atomic radius generally:",
     "Increases because a new principal energy shell is added at each successive element",
     "Decreases because nuclear charge increases significantly",
     "Remains unchanged because shielding offsets nuclear charge completely",
     "Decreases initially and then remains constant",
     0, "Atomic Radius Group Trend",
     "Down a group, each successive element possesses an additional principal electron shell ($n$ increases). The effect of increasing shell number outweighs the increase in nuclear charge, resulting in an overall increase in atomic radius."),

    # 3 (Q128)
    ("The radius of a positive ion (cation) is always:",
     "Smaller than that of its parent neutral atom",
     "Larger than that of its parent neutral atom",
     "Equal to that of its parent neutral atom",
     "Independent of the charge on the nucleus",
     0, "Cationic Radius",
     "When an atom loses electron(s) to form a cation, the number of protons exceeds the number of electrons. The effective nuclear charge per electron increases, pulling the remaining electron cloud closer to the nucleus, making $r_{\\text{cation}} < r_{\\text{atom}}$."),

    # 4 (Q129)
    ("The radius of a negative ion (anion) is always:",
     "Larger than that of its parent neutral atom",
     "Smaller than that of its parent neutral atom",
     "Equal to that of its parent neutral atom",
     "Unpredictable without measuring dipole moment",
     0, "Anionic Radius",
     "Formation of an anion adds electron(s) without increasing nuclear charge. The increased electron-electron repulsion and decreased effective nuclear charge per electron cause the electron cloud to expand, so $r_{\\text{anion}} > r_{\\text{atom}}$."),

    # 5 (Q130)
    ("Which of the following types of atomic radii has the largest magnitude for a given non-metallic element like Chlorine?",
     "Van der Waals radius",
     "Covalent radius",
     "Metallic radius",
     "Ionic radius of $\\text{Cl}^+$",
     0, "Types of Radii Comparison",
     "For non-metals, van der Waals forces are weak non-bonded interactions, so van der Waals radius is always larger than the covalent radius where orbitals overlap ($r_{\\text{vdw}} > r_{\\text{metallic}} > r_{\\text{covalent}}$)."),

    # 6 (Q131)
    ("Noble gases are reported to have comparatively very large atomic radii in their respective periods because their radii are measured as:",
     "Van der Waals radii",
     "Covalent radii",
     "Metallic radii",
     "Crystal radii",
     0, "Noble Gas Radii",
     "Noble gases do not form stable covalent chemical bonds under standard conditions. Therefore, their atomic radii are expressed as van der Waals radii, which are inherently significantly larger than the covalent radii of adjacent halogens."),

    # 7 (Q132)
    ("Species that contain the same number of electrons are known as:",
     "Isoelectronic species",
     "Isotopes",
     "Isobars",
     "Isotones",
     0, "Isoelectronic Definition",
     "Atoms, ions, or molecules having an identical total number of electrons are defined as isoelectronic species (e.g., $\\text{N}^{3-}, \\text{O}^{2-}, \\text{F}^-, \\text{Na}^+, \\text{Mg}^{2+}, \\text{Al}^{3+}$ all have 10 electrons)."),

    # 8 (Q133)
    ("Among isoelectronic species, the ionic radius:",
     "Decreases with an increase in nuclear charge ($Z$)",
     "Increases with an increase in nuclear charge ($Z$)",
     "Remains constant because electron count is identical",
     "Depends exclusively on the mass number of the nucleus",
     0, "Isoelectronic Radius Trend",
     "For isoelectronic ions, the number of electrons is constant. As atomic number (nuclear charge $Z$) increases, the greater positive nuclear attraction pulls the electron cloud tighter, decreasing the ionic radius."),

    # 9 (Q134)
    ("First ionization enthalpy is defined as the energy required to remove an electron from:",
     "An isolated gaseous atom in its ground state",
     "One mole of a solid crystalline element",
     "A liquid element at its normal boiling point",
     "A molecule in an excited vibrational state",
     0, "Ionization Enthalpy Definition",
     "First ionization enthalpy ($\\Delta_i H_1$) is precisely the minimum energy required to remove the most loosely bound valence electron from an isolated neutral gaseous atom ($X(\\text{g}) \\rightarrow X^+(\\text{g}) + e^-$) in its ground state."),

    # 10 (Q135)
    ("The standard SI unit of molar ionization enthalpy is:",
     "$\\text{kJ}\\cdot\\text{mol}^{-1}$",
     "$\\text{kcal}\\cdot\\text{g}^{-1}$",
     "$\\text{J}\\cdot\\text{s}$",
     "$\\text{N}\\cdot\\text{m}^{-2}$",
     0, "Units of IE",
     "Molar ionization enthalpy is expressed in kilojoules per mole ($\\text{kJ}\\cdot\\text{mol}^{-1}$) in the SI system, or electron volts per atom ($\\text{eV}/\\text{atom}$) in atomic physics ($1\\text{ eV/atom} \\approx 96.485\\text{ kJ/mol}$)."),

    # 11 (Q136)
    ("For any given neutral multielectron atom $X$, the correct order of successive ionization enthalpies is always:",
     "$\\Delta_i H_1 < \\Delta_i H_2 < \\Delta_i H_3$",
     "$\\Delta_i H_1 > \\Delta_i H_2 > \\Delta_i H_3$",
     "$\\Delta_i H_1 = \\Delta_i H_2 = \\Delta_i H_3$",
     "$\\Delta_i H_2 < \\Delta_i H_1 < \\Delta_i H_3$",
     0, "Successive IE Order",
     "Removing an electron from a positively charged ion requires overcoming a greater electrostatic attraction because the proton-to-electron ratio increases after each removal. Hence, successive ionization enthalpies always strictly increase: $\\Delta_i H_1 < \\Delta_i H_2 < \\Delta_i H_3$."),

    # 12 (Q137)
    ("Which group in the modern periodic table has the lowest first ionization enthalpy values?",
     "Group 1 (Alkali metals)",
     "Group 2 (Alkaline earth metals)",
     "Group 17 (Halogens)",
     "Group 18 (Noble gases)",
     0, "Lowest IE Group",
     "Alkali metals have the largest atomic radii in their respective periods and possess a single valence electron ($ns^1$) that can be lost very easily to achieve a stable noble gas configuration, resulting in the lowest $\\Delta_i H_1$."),

    # 13 (Q138)
    ("Which element in the entire periodic table possesses the highest first ionization enthalpy?",
     "Helium ($\\text{He}$)",
     "Fluorine ($\\text{F}$)",
     "Neon ($\\text{Ne}$)",
     "Hydrogen ($\\text{H}$)",
     0, "Highest IE Element",
     "Helium ($1s^2$) has the smallest atomic size, no inner shielding electrons, and a completely filled, exceptionally stable $1s$ duplet shell, giving it the highest first ionization enthalpy ($\\approx 2372\\text{ kJ/mol}$)."),

    # 14 (Q139)
    ("Effective nuclear charge ($Z_{\\text{eff}}$) experienced by an outer electron is mathematically expressed as:",
     "$Z_{\\text{eff}} = Z - \\sigma$",
     "$Z_{\\text{eff}} = Z + \\sigma$",
     "$Z_{\\text{eff}} = Z \\times \\sigma$",
     "$Z_{\\text{eff}} = Z / \\sigma$",
     0, "Zeff Formula",
     "Effective nuclear charge is the net positive charge experienced by an electron in a multielectron atom: $Z_{\\text{eff}} = Z - \\sigma$, where $Z$ is the actual nuclear charge and $\\sigma$ is the screening/shielding constant."),

    # 15 (Q140)
    ("Among orbitals with the same principal quantum number $n$, the correct order of penetration power towards the nucleus is:",
     "$s > p > d > f$",
     "$f > d > p > s$",
     "$p > s > d > f$",
     "$s > d > p > f$",
     0, "Penetration Power Order",
     "Because $s$-orbitals are spherically symmetric with non-zero probability density at the nucleus, they penetrate closest to the nucleus, followed by $p$, $d$, and $f$: $s > p > d > f$."),

    # 16 (Q141)
    ("Due to high penetration power and spherical symmetry, electrons in $s$-orbitals shield the outer electrons:",
     "More effectively than $p$, $d$, and $f$ electrons",
     "Less effectively than $f$ electrons",
     "Equally to $f$ electrons",
     "Not at all",
     0, "Shielding Efficiency",
     "The shielding efficiency of inner orbitals follows the sequence $s > p > d > f$. $s$-orbitals provide the strongest screening, whereas diffuse $d$ and $f$ orbitals provide poor shielding."),

    # 17 (Q142)
    ("Which of the following elements has the largest atomic radius in Period 2?",
     "Lithium ($\\text{Li}$)",
     "Carbon ($\\text{C}$)",
     "Oxygen ($\\text{O}$)",
     "Fluorine ($\\text{F}$)",
     0, "Period 2 Largest Radius",
     "Across Period 2 (excluding noble gas van der Waals radius), atomic radius decreases from left to right: $\\text{Li} > \\text{Be} > \\text{B} > \\text{C} > \\text{N} > \\text{O} > \\text{F}$. Hence, Lithium is the largest."),

    # 18 (Q143)
    ("Which of the following alkali metals has the smallest atomic radius?",
     "Lithium ($\\text{Li}$)",
     "Sodium ($\\text{Na}$)",
     "Potassium ($\\text{K}$)",
     "Caesium ($\\text{Cs}$)",
     0, "Smallest Alkali Metal",
     "Down Group 1, atomic radius increases: $\\text{Li} < \\text{Na} < \\text{K} < \\text{Rb} < \\text{Cs}$. Lithium has only 2 principal shells ($n=2$) and therefore has the smallest radius."),

    # 19 (Q144)
    ("Which halogen has the largest covalent atomic radius?",
     "Iodine ($\\text{I}$)",
     "Bromine ($\\text{Br}$)",
     "Chlorine ($\\text{Cl}$)",
     "Fluorine ($\\text{F}$)",
     0, "Largest Halogen Radius",
     "Down Group 17, number of shells increases from $\\text{F} (n=2)$ to $\\text{I} (n=5)$, so covalent radius increases: $\\text{F} < \\text{Cl} < \\text{Br} < \\text{I}$."),

    # 20 (Q145)
    ("Which of the following ions has the smallest ionic radius?",
     "$\\text{Al}^{3+}$",
     "$\\text{Mg}^{2+}$",
     "$\\text{Na}^+$",
     "$\\text{F}^-$",
     0, "Smallest Isoelectronic Ion",
     "All four ions have 10 electrons ($1s^2 2s^2 2p^6$). $\\text{Al}^{3+}$ has the highest nuclear charge ($Z = 13$), providing the strongest inward electrostatic attraction and giving it the smallest ionic radius."),

    # 21 (Q146)
    ("Which of the following ions has the largest ionic radius?",
     "$\\text{N}^{3-}$",
     "$\\text{O}^{2-}$",
     "$\\text{F}^-$",
     "$\\text{Na}^+$",
     0, "Largest Isoelectronic Ion",
     "In the 10-electron isoelectronic series, $\\text{N}^{3-}$ has the lowest nuclear charge ($Z = 7$), resulting in the smallest effective nuclear charge and largest electron-electron repulsion, producing the largest radius."),

    # 22 (Q147)
    ("Why is the first ionization enthalpy of Nitrogen higher than that of Oxygen?",
     "Nitrogen has an extra stable half-filled $2p^3$ subshell",
     "Nitrogen has a higher atomic number than Oxygen",
     "Oxygen has a smaller atomic radius than Nitrogen",
     "Nitrogen has greater shielding than Oxygen",
     0, "N vs O Ionization Enthalpy",
     "Nitrogen ($1s^2 2s^2 2p^3$) has a symmetric, extra-stable half-filled $2p$ subshell. In Oxygen ($1s^2 2s^2 2p^4$), two electrons pair in one $2p$ orbital, causing interelectronic repulsion that makes removing an electron easier."),

    # 23 (Q148)
    ("Why is the first ionization enthalpy of Beryllium higher than that of Boron?",
     "Beryllium has a completely filled, penetrating $2s^2$ subshell",
     "Beryllium has more protons than Boron",
     "Boron has a half-filled $2p$ subshell",
     "Beryllium has a larger atomic radius than Boron",
     0, "Be vs B Ionization Enthalpy",
     "Beryllium ($1s^2 2s^2$) requires removing an electron from a fully-filled $2s$ orbital with high penetration power, whereas Boron ($1s^2 2s^2 2p^1$) loses an electron from a higher-energy, shielded $2p$ orbital."),

    # 24 (Q149)
    ("The first ionization enthalpy of Magnesium is greater than that of Aluminium because:",
     "Magnesium has a completely filled $3s^2$ subshell, whereas Aluminium has an unpaired $3p^1$ electron",
     "Magnesium has a larger atomic radius than Aluminium",
     "Aluminium has a lower nuclear charge than Magnesium",
     "Magnesium has empty $d$-orbitals",
     0, "Mg vs Al IE",
     "Magnesium ($[\\text{Ne}] 3s^2$) has a stable fully-filled $3s$ subshell. Aluminium ($[\\text{Ne}] 3s^2 3p^1$) requires ionization of a single $3p$ electron which is shielded by $3s^2$ electrons and resides in a higher energy subshell."),

    # 25 (Q150)
    ("Which of the following processes requires the maximum energy?",
     "$\\text{Na}^+(\\text{g}) \\rightarrow \\text{Na}^{2+}(\\text{g}) + e^-$",
     "$\\text{Na}(\\text{g}) \\rightarrow \\text{Na}^+(\\text{g}) + e^-$",
     "$\\text{Mg}(\\text{g}) \\rightarrow \\text{Mg}^+(\\text{g}) + e^-$",
     "$\\text{Mg}^+(\\text{g}) \\rightarrow \\text{Mg}^{2+}(\\text{g}) + e^-$",
     0, "Second IE of Alkali Metal",
     "$\\text{Na}^+$ has an extremely stable octet noble gas configuration ($[\\text{Ne}] = 2s^2 2p^6$). Removing an electron from this noble gas core requires breaking the closed shell, demanding an enormous second ionization enthalpy ($\\approx 4562\\text{ kJ/mol}$)."),

    # 26 (Q151)
    ("The first ionization enthalpies of alkaline earth metals (Group 2) are consistently higher than those of alkali metals (Group 1) because Group 2 elements have:",
     "Higher nuclear charge, smaller atomic radius, and a completely filled $ns^2$ valence subshell",
     "Lower nuclear charge and larger atomic radius",
     "Unpaired electrons in their valence shell",
     "Greater shielding effect from inner $d$-orbitals",
     0, "Group 2 vs Group 1 IE",
     "In any given period, the Group 2 element has one additional proton, smaller atomic size, and a stable fully-filled $ns^2$ configuration, all of which increase first ionization enthalpy relative to Group 1."),

    # 27 (Q152)
    ("Which of the following elements has the lowest first ionization enthalpy among Period 3 elements?",
     "Sodium ($\\text{Na}$)",
     "Magnesium ($\\text{Mg}$)",
     "Aluminium ($\\text{Al}$)",
     "Silicon ($\\text{Si}$)",
     0, "Lowest IE Period 3",
     "In Period 3, Sodium ($[\\text{Ne}] 3s^1$) has the largest atomic size and lowest effective nuclear charge, allowing loss of its single valence electron with the least energy ($\\Delta_i H_1 = 496\\text{ kJ/mol}$)."),

    # 28 (Q153)
    ("In a given shell, the shielding effect of electrons decreases in the order:",
     "$s > p > d > f$",
     "$f > d > p > s$",
     "$d > f > p > s$",
     "$p > s > d > f$",
     0, "Shielding Order",
     "The order of screening or shielding effect by electrons in various subshells of the same shell is $s > p > d > f$. Diffuse $d$ and $f$ orbitals have spatial shapes that are very poor at screening outer electrons."),

    # 29 (Q154)
    ("The atomic radius of Gallium ($\\text{Ga}$, $135\\text{ pm}$) is slightly smaller than that of Aluminium ($\\text{Al}$, $143\\text{ pm}$). This is attributed to:",
     "Poor shielding effect of the ten intervening $3d$ electrons in Gallium",
     "High electronegativity of Gallium",
     "Addition of an extra $p$-electron in Gallium",
     "Lanthanoid contraction in Period 4",
     0, "Gallium Anomaly",
     "Gallium ($Z = 31$) has configuration $[\\text{Ar}] 3d^{10} 4s^2 4p^1$. The ten $3d$ electrons provide poor shielding, causing the 31 protons to exert a stronger pull on outer electrons, causing transition metal contraction so $r_{\\text{Ga}} \\le r_{\\text{Al}}$."),

    # 30 (Q155)
    ("The phenomenon where the atomic radii of $4d$ and $5d$ transition elements (such as $\\text{Zr}$ and $\\text{Hf}$) are almost identical is called:",
     "Lanthanoid contraction",
     "Actinoid contraction",
     "Inert pair effect",
     "Transition metal expansion",
     0, "Lanthanoid Contraction Definition",
     "The filling of $4f$ subshell (14 electrons with extremely poor shielding) prior to $5d$ series causes a steady decrease in atomic/ionic size known as lanthanoid contraction, making $5d$ radii virtually identical to $4d$ radii."),

    # 31 (Q156)
    ("Which of the following pairs of elements have almost identical atomic radii due to lanthanoid contraction?",
     "$\\text{Zr}$ and $\\text{Hf}$",
     "$\\text{Fe}$ and $\\text{Co}$",
     "$\\text{Sc}$ and $\\text{Y}$",
     "$\\text{Na}$ and $\\text{K}$",
     0, "Zr and Hf Pair",
     "Zirconium ($\\text{Zr}$, $4d$ series, $r = 160\\text{ pm}$) and Hafnium ($\\text{Hf}$, $5d$ series, $r = 159\\text{ pm}$) have virtually identical radii due to the intervening 14 lanthanoid elements with poor $4f$ shielding."),

    # 32 (Q157)
    ("Which of the following represents an isoelectronic pair?",
     "$\\text{K}^+$ and $\\text{Cl}^-$",
     "$\\text{Na}^+$ and $\\text{Cl}^-$",
     "$\\text{Mg}^{2+}$ and $\\text{Ar}$",
     "$\\text{Ca}^{2+}$ and $\\text{Ne}$",
     0, "Isoelectronic Pair Identification",
     "$\\text{K}^+$ ($19 - 1 = 18$ electrons) and $\\text{Cl}^-$ ($17 + 1 = 18$ electrons) both have 18 electrons, matching the Argon electronic configuration."),

    # 33 (Q158)
    ("Between Phosphorus ($Z=15$) and Sulphur ($Z=16$), the first ionization enthalpy of Phosphorus is higher because:",
     "Phosphorus has a stable half-filled $3p^3$ subshell",
     "Sulphur has a half-filled $3s^2$ subshell",
     "Phosphorus has a smaller atomic radius than Sulphur",
     "Sulphur has less nuclear charge than Phosphorus",
     0, "P vs S IE",
     "Phosphorus ($[\\text{Ne}] 3s^2 3p^3$) has a symmetrical, extra-stable half-filled $3p$ subshell, whereas Sulphur ($[\\text{Ne}] 3s^2 3p^4$) experiences electron-electron repulsion in the doubly occupied $3p_x$ orbital, making its ionization easier."),

    # 34 (Q159)
    ("Ionization enthalpy decreases down a group primarily because:",
     "Atomic radius increases and outer electrons are farther from the nucleus",
     "Nuclear charge decreases down the group",
     "Number of valence electrons decreases",
     "Effective nuclear charge increases tremendously",
     0, "Group Trend of IE",
     "Down a group, the increase in number of electron shells increases the distance between the nucleus and valence electrons while inner shells effectively screen the nucleus, significantly reducing the energy needed to remove an electron."),

    # 35 (Q160)
    ("The unit $\\text{eV}/\\text{atom}$ can be converted into $\\text{kJ}/\\text{mol}$ by multiplying by approximately:",
     "$96.485$",
     "$1.602$",
     "$6.022$",
     "$4.184$",
     0, "eV to kJ/mol Conversion",
     "$1\\text{ eV} = 1.6022 \\times 10^{-19}\\text{ J}$. For 1 mole: $1.6022 \\times 10^{-19} \\times 6.022 \\times 10^{23} = 96485\\text{ J/mol} = 96.485\\text{ kJ/mol}$.")
]

# -------------------------------------------------------------------------
# MEDIUM QUESTIONS (65 questions: Q161 to Q225)
# -------------------------------------------------------------------------
med_items = [
    # 1 (Q161) Authentic NEET 2020
    ("Identify the correct order of increasing ionic radii of the following isoelectronic ions: $\\text{Al}^{3+}, \\text{Mg}^{2+}, \\text{Na}^+, \\text{F}^-, \\text{O}^{2-}, \\text{N}^{3-}$",
     "$\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$",
     "$\\text{N}^{3-} < \\text{O}^{2-} < \\text{F}^- < \\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3-}$",
     "$\\text{Na}^+ < \\text{Mg}^{2+} < \\text{Al}^{3+} < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$",
     "$\\text{Al}^{3+} < \\text{Na}^+ < \\text{Mg}^{2+} < \\text{O}^{2-} < \\text{F}^- < \\text{N}^{3-}$",
     0, "Isoelectronic Radii NEET 2020",
     "All species have 10 electrons. Nuclear charge increases as $\\text{N}(7) < \\text{O}(8) < \\text{F}(9) < \\text{Na}(11) < \\text{Mg}(12) < \\text{Al}(13)$. Since ionic radius is inversely proportional to nuclear charge, the order is $\\text{Al}^{3+} < \\text{Mg}^{2+} < \\text{Na}^+ < \\text{F}^- < \\text{O}^{2-} < \\text{N}^{3-}$.",
     True, "NEET 2020"),

    # 2 (Q162) Authentic NEET 2021
    ("Which of the following is the correct order of first ionization enthalpy for the elements of the second period (Period 2)?",
     "$\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$",
     "$\\text{Li} < \\text{Be} < \\text{B} < \\text{C} < \\text{N} < \\text{O} < \\text{F} < \\text{Ne}$",
     "$\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{N} < \\text{O} < \\text{F} < \\text{Ne}$",
     "$\\text{Ne} < \\text{F} < \\text{N} < \\text{O} < \\text{C} < \\text{Be} < \\text{B} < \\text{Li}$",
     0, "Period 2 IE Order NEET 2021",
     "General trend increases across Period 2, with two anomalies: $\\text{Be} > \\text{B}$ (due to penetrating stable $2s^2$) and $\\text{N} > \\text{O}$ (due to stable half-filled $2p^3$). Thus: $\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{O} < \\text{N} < \\text{F} < \\text{Ne}$.",
     True, "NEET 2021"),

    # 3 (Q163) Authentic NEET 2019
    ("The correct order of atomic radii in Group 13 elements is:",
     "$\\text{B} < \\text{Ga} < \\text{Al} < \\text{In} < \\text{Tl}$",
     "$\\text{B} < \\text{Al} < \\text{Ga} < \\text{In} < \\text{Tl}$",
     "$\\text{B} < \\text{Al} < \\text{In} < \\text{Ga} < \\text{Tl}$",
     "$\\text{Tl} < \\text{In} < \\text{Ga} < \\text{Al} < \\text{B}$",
     0, "Group 13 Radii NEET 2019",
     "Due to the poor shielding effect of the $10\\ 3d$ electrons in Gallium, its effective nuclear charge increases, causing its radius ($135\\text{ pm}$) to be slightly smaller than Aluminium ($143\\text{ pm}$). Thus the order is $\\text{B} < \\text{Ga} < \\text{Al} < \\text{In} < \\text{Tl}$.",
     True, "NEET 2019"),

    # 4 (Q164)
    ("The correct order of increasing first ionization enthalpy for Period 3 elements is:",
     "$\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si} < \\text{S} < \\text{P} < \\text{Cl} < \\text{Ar}$",
     "$\\text{Na} < \\text{Mg} < \\text{Al} < \\text{Si} < \\text{P} < \\text{S} < \\text{Cl} < \\text{Ar}$",
     "$\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si} < \\text{P} < \\text{S} < \\text{Cl} < \\text{Ar}$",
     "$\\text{Ar} < \\text{Cl} < \\text{P} < \\text{S} < \\text{Si} < \\text{Mg} < \\text{Al} < \\text{Na}$",
     0, "Period 3 IE Trend",
     "Across Period 3, IE increases with anomalies: $\\text{Mg} > \\text{Al}$ (due to stable $3s^2$ vs $3p^1$) and $\\text{P} > \\text{S}$ (due to stable half-filled $3p^3$). Hence: $\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si} < \\text{S} < \\text{P} < \\text{Cl} < \\text{Ar}$."),

    # 5 (Q165)
    ("Which of the following has the highest second ionization enthalpy ($\\Delta_i H_2$)?",
     "Copper ($\\text{Cu}$)",
     "Zinc ($\\text{Zn}$)",
     "Iron ($\\text{Fe}$)",
     "Cobalt ($\\text{Co}$)",
     0, "Second IE Cu vs Zn",
     "Copper has configuration $[\\text{Ar}] 3d^{10} 4s^1$. Its first ionization yields $\\text{Cu}^+ ([\\text{Ar}] 3d^{10})$. Removing the second electron requires breaking the fully-filled, exceptionally stable $3d^{10}$ subshell, giving it a very high $\\Delta_i H_2$ compared to $\\text{Zn}$ whose $\\text{Zn}^+$ has $4s^1$."),

    # 6 (Q166)
    ("Which of the following elements has the largest value of second ionization enthalpy ($\\Delta_i H_2$)?",
     "Lithium ($\\text{Li}$)",
     "Beryllium ($\\text{Be}$)",
     "Boron ($\\text{B}$)",
     "Carbon ($\\text{C}$)",
     0, "Second IE of Period 2",
     "$\\text{Li}^+$ has the helium configuration $1s^2$. Removing a second electron from Lithium requires breaking this stable noble gas duplet with principal quantum number $n=1$, requiring an immense $\\approx 7298\\text{ kJ/mol}$."),

    # 7 (Q167)
    ("Comparing the second ionization enthalpies of Nitrogen and Oxygen, we find that:",
     "$\\Delta_i H_2(\\text{O}) > \\Delta_i H_2(\\text{N})$",
     "$\\Delta_i H_2(\\text{N}) > \\Delta_i H_2(\\text{O})$",
     "$\\Delta_i H_2(\\text{N}) = \\Delta_i H_2(\\text{O})$",
     "$\\Delta_i H_2(\\text{N})$ is zero",
     0, "Second IE N vs O",
     "For second ionization: $\\text{O}^+ (1s^2 2s^2 2p^3)$ has an extra stable half-filled $2p^3$ configuration, while $\\text{N}^+ (1s^2 2s^2 2p^2)$ does not. Therefore, $\\Delta_i H_2(\\text{O}) > \\Delta_i H_2(\\text{N})$."),

    # 8 (Q168)
    ("The correct order of ionic radii for the ions $\\text{Ca}^{2+}, \\text{K}^+, \\text{S}^{2-}, \\text{Cl}^-$ is:",
     "$\\text{S}^{2-} > \\text{Cl}^- > \\text{K}^+ > \\text{Ca}^{2+}$",
     "$\\text{Ca}^{2+} > \\text{K}^+ > \\text{Cl}^- > \\text{S}^{2-}$",
     "$\\text{Cl}^- > \\text{S}^{2-} > \\text{Ca}^{2+} > \\text{K}^+$",
     "$\\text{K}^+ > \\text{Ca}^{2+} > \\text{S}^{2-} > \\text{Cl}^-$",
     0, "18-Electron Isoelectronic Series",
     "All four ions have 18 electrons (Argon configuration). Nuclear charges: $\\text{S}(16), \\text{Cl}(17), \\text{K}(19), \\text{Ca}(20)$. Lower nuclear charge results in larger ionic radius: $\\text{S}^{2-} > \\text{Cl}^- > \\text{K}^+ > \\text{Ca}^{2+}$."),

    # 9 (Q169)
    ("Which of the following species has the smallest radius?",
     "$\\text{Ti}^{4+}$",
     "$\\text{Sc}^{3+}$",
     "$\\text{Ca}^{2+}$",
     "$\\text{K}^+$",
     0, "Smallest 18-Electron Ion",
     "All four ions are isoelectronic with 18 electrons. $\\text{Ti}^{4+}$ has the highest atomic number ($Z = 22$), exerting the greatest nuclear attraction per electron and therefore having the smallest radius."),

    # 10 (Q170)
    ("The ionization energy of hydrogen atom in ground state is $13.6\\text{ eV}$. What is the ionization energy of $\\text{Li}^{2+}$ ion in its ground state?",
     "$122.4\\text{ eV}$",
     "$40.8\\text{ eV}$",
     "$13.6\\text{ eV}$",
     "$27.2\\text{ eV}$",
     0, "Ionization Energy of Li2+",
     "For hydrogen-like single electron species: $\\text{IE} = 13.6 \\times Z^2\\text{ eV}$. For $\\text{Li}^{2+}$, $Z = 3$, so $\\text{IE} = 13.6 \\times 3^2 = 13.6 \\times 9 = 122.4\\text{ eV}$."),

    # 11 (Q171)
    ("Which of the following electronic configurations is associated with the highest first ionization enthalpy?",
     "$1s^2 2s^2 2p^6 3s^2 3p^3$",
     "$1s^2 2s^2 2p^6 3s^2 3p^2$",
     "$1s^2 2s^2 2p^6 3s^2 3p^4$",
     "$1s^2 2s^2 2p^6 3s^2 3p^1$",
     0, "Half-filled 3p3 Highest IE",
     "The configuration $3s^2 3p^3$ (Phosphorus) has an extra stable half-filled $p$-subshell with maximum exchange energy, resulting in higher first ionization enthalpy than $3p^1, 3p^2$, and $3p^4$."),

    # 12 (Q172)
    ("The electronic configurations of four elements are given below: (I) $[\\text{Ne}] 3s^1$, (II) $[\\text{Ne}] 3s^2 3p^1$, (III) $[\\text{Ne}] 3s^2 3p^3$, (IV) $[\\text{Ne}] 3s^2 3p^4$. The correct order of their first ionization enthalpies is:",
     "I < II < IV < III",
     "I < II < III < IV",
     "II < I < III < IV",
     "I < IV < II < III",
     0, "IE Comparison of 4 Elements",
     "I is $\\text{Na}$, II is $\\text{Al}$, III is $\\text{P}$, IV is $\\text{S}$. The first ionization enthalpy increases as $\\text{Na} < \\text{Al} < \\text{S} < \\text{P}$, which corresponds to I < II < IV < III."),

    # 13 (Q173)
    ("An element has first four ionization enthalpies as $738, 1451, 7733,$ and $10540\\text{ kJ}\\cdot\\text{mol}^{-1}$. The element most likely belongs to which group?",
     "Group 2 (Alkaline earth metals)",
     "Group 1 (Alkali metals)",
     "Group 13 (Boron family)",
     "Group 14 (Carbon family)",
     0, "Group Identification from IE Jump",
     "There is a moderate increase from $\\Delta_i H_1 (738)$ to $\\Delta_i H_2 (1451)$, but a massive 5.3-fold jump to $\\Delta_i H_3 (7733)$. This indicates that after losing 2 valence electrons, the third electron is removed from a stable noble gas core. Hence the element has 2 valence electrons (Group 2, Magnesium)."),

    # 14 (Q174)
    ("An element has successive ionization enthalpies: $520, 7298, 11815\\text{ kJ}\\cdot\\text{mol}^{-1}$. The number of valence electrons present in this atom is:",
     "1",
     "2",
     "3",
     "4",
     0, "Single Valence Electron Jump",
     "The huge jump between $\\Delta_i H_1 (520)$ and $\\Delta_i H_2 (7298)$ reveals that the atom has only 1 valence electron, which is lost easily, followed by an extremely high energy needed to remove an inner core electron (Lithium, Group 1)."),

    # 15 (Q175)
    ("An element has ionization enthalpies $\\Delta_i H_1 = 800, \\Delta_i H_2 = 2427, \\Delta_i H_3 = 3658, \\Delta_i H_4 = 25020\\text{ kJ}\\cdot\\text{mol}^{-1}$. The most stable oxidation state of this element is:",
     "+3",
     "+1",
     "+2",
     "+4",
     0, "Stable Oxidation State from IE Jump",
     "The massive jump occurs between the 3rd and 4th ionization enthalpies (from $3658$ to $25020\\text{ kJ/mol}$), showing that 3 electrons can be removed under chemical conditions, whereas removing the 4th electron requires prohibitive energy. Hence $+3$ is the stable oxidation state."),

    # 16 (Q176)
    ("Which of the following transition elements has the highest first ionization enthalpy?",
     "Zinc ($\\text{Zn}$)",
     "Iron ($\\text{Fe}$)",
     "Chromium ($\\text{Cr}$)",
     "Scandium ($\\text{Sc}$)",
     0, "Highest 3d First IE",
     "Zinc has configuration $[\\text{Ar}] 3d^{10} 4s^2$ with completely filled $3d$ and $4s$ subshells and high effective nuclear charge ($Z = 30$), giving it the highest first ionization enthalpy ($\\approx 906\\text{ kJ/mol}$) among the $3d$ transition elements."),

    # 17 (Q177)
    ("The first ionization enthalpy of Caesium is $374\\text{ kJ/mol}$, while that of Lithium is $520\\text{ kJ/mol}$. This difference is primarily due to:",
     "Larger atomic size and greater shielding of the valence $6s$ electron in Caesium",
     "Higher nuclear charge in Caesium pulling the electron closer",
     "Caesium having fewer electron shells than Lithium",
     "Presence of unpaired $d$-electrons in Caesium",
     0, "Li vs Cs IE Factor",
     "In Caesium, the valence electron resides in the $6s$ orbital, far from the nucleus, and is shielded by 5 inner shells of electrons ($[\\text{Xe}]$ core). The resulting effective nuclear attraction is very small, making it much easier to ionize than Lithium ($2s^1$)."),

    # 18 (Q178)
    ("Which of the following elements has the lowest second ionization enthalpy?",
     "Barium ($\\text{Ba}$)",
     "Sodium ($\\text{Na}$)",
     "Potassium ($\\text{K}$)",
     "Rubidium ($\\text{Rb}$)",
     0, "Lowest Second IE",
     "Alkali metals ($\text{Na, K, Rb}$) lose their second electron from a noble gas core, requiring immense energy ($\Delta_i H_2 > 3000\text{ kJ/mol}$). In contrast, Barium is an alkaline earth metal whose $\text{Ba}^+$ still has a $6s^1$ valence electron, resulting in a low second ionization enthalpy ($\Delta_i H_2 \approx 965\text{ kJ/mol}$)."),

    # 19 (Q179)
    ("Among the following, the pair of species having the same number of electrons and almost the same radius is:",
     "$\\text{O}^{2-}$ and $\\text{F}^-$",
     "$\\text{Na}^+$ and $\\text{K}^+$",
     "$\\text{Cl}^-$ and $\\text{Br}^-$",
     "$\\text{Fe}^{2+}$ and $\\text{Fe}^{3+}$",
     0, "Isoelectronic Anion Pair",
     "$\\text{O}^{2-}$ and $\\text{F}^-$ are isoelectronic (both 10 electrons) and belong to adjacent elements in Period 2, differing in nuclear charge by only 1 unit ($Z=8$ vs $Z=9$), making their radii very close compared to ions with different shell numbers."),

    # 20 (Q180)
    ("The radii of $\\text{F}$ and $\\text{F}^-$ are respectively:",
     "$72\\text{ pm}$ and $133\\text{ pm}$",
     "$133\\text{ pm}$ and $72\\text{ pm}$",
     "$72\\text{ pm}$ and $72\\text{ pm}$",
     "$133\\text{ pm}$ and $133\\text{ pm}$",
     0, "F and F- Radii Values",
     "An anion is significantly larger than its parent neutral atom due to increased interelectronic repulsion and expansion of the valence shell. For fluorine: $r_{\\text{F}} = 72\\text{ pm}$ and $r_{\\text{F}^-} = 133\\text{ pm}$."),

    # 21 (Q181)
    ("The radii of $\\text{Na}$ and $\\text{Na}^+$ are respectively:",
     "$186\\text{ pm}$ and $102\\text{ pm}$",
     "$102\\text{ pm}$ and $186\\text{ pm}$",
     "$186\\text{ pm}$ and $186\\text{ pm}$",
     "$95\\text{ pm}$ and $186\\text{ pm}$",
     0, "Na and Na+ Radii Values",
     "A cation is much smaller than its parent neutral atom because the outer electron shell is completely removed and $Z_{\\text{eff}}$ increases: $r_{\\text{Na}} = 186\\text{ pm}$ and $r_{\\text{Na}^+} = 102\\text{ pm}$."),

    # 22 (Q182)
    ("Which of the following statements about effective nuclear charge ($Z_{\\text{eff}}$) is FALSE?",
     "$Z_{\\text{eff}}$ decreases from left to right across a period",
     "$Z_{\\text{eff}}$ for $2s$ electron is greater than that for $2p$ electron in the same shell",
     "$Z_{\\text{eff}}$ is always less than the actual nuclear charge $Z$ in multielectron atoms",
     "$Z_{\\text{eff}}$ experienced by valence electrons increases across a period",
     0, "Zeff Incorrect Statement",
     "Across a period from left to right, $Z_{\\text{eff}}$ increases because each added electron does not completely shield the added nuclear charge. Therefore, the statement '$Z_{\\text{eff}}$ decreases across a period' is false."),

    # 23 (Q183)
    ("According to Slater's rules, the screening constant ($\\sigma$) for a $1s$ electron in Helium ($1s^2$) is:",
     "$0.30$",
     "$0.35$",
     "$0.85$",
     "$1.00$",
     0, "Slaters Rule 1s",
     "For a $1s$ electron shielding another $1s$ electron in the $1s$ shell (He or $\\text{H}^-$), Slater assigned a screening constant of $\\sigma = 0.30$."),

    # 24 (Q184)
    ("For an electron in an $ns$ or $np$ valence orbital, an electron in the $(n-1)$ shell contributes to the screening constant ($\\sigma$) by:",
     "$0.85$",
     "$0.35$",
     "$1.00$",
     "$0.50$",
     0, "Slaters Rule (n-1) shell",
     "According to Slater's rules, each electron in the next inner shell $(n-1)$ contributes $0.85$ to the screening constant for an outer $ns$ or $np$ electron."),

    # 25 (Q185)
    ("For an electron in an $ns$ or $np$ orbital, each electron in the same $(n)$ group contributes to $\\sigma$ by:",
     "$0.35$",
     "$0.85$",
     "$1.00$",
     "$0.15$",
     0, "Slaters Rule same shell",
     "According to Slater's rules, each other electron residing in the same $(ns, np)$ group contributes $0.35$ to the screening constant $\\sigma$."),

    # 26 (Q186)
    ("Which of the following has the smallest value of first ionization enthalpy?",
     "Rubidium ($\\text{Rb}$)",
     "Potassium ($\\text{K}$)",
     "Sodium ($\\text{Na}$)",
     "Lithium ($\\text{Li}$)",
     0, "Lowest Alkali Metal IE",
     "Down Group 1: $\\text{Li} > \\text{Na} > \\text{K} > \\text{Rb} > \\text{Cs}$. Among the given options, Rubidium has the largest atomic size and therefore the lowest first ionization enthalpy."),

    # 27 (Q187)
    ("Which of the following elements has the highest first ionization enthalpy?",
     "Argon ($\\text{Ar}$)",
     "Chlorine ($\\text{Cl}$)",
     "Sulphur ($\\text{S}$)",
     "Phosphorus ($\\text{P}$)",
     0, "Highest Period 3 IE",
     "Argon ($[\\text{Ne}] 3s^2 3p^6$) is a noble gas with a completely closed octet shell, resulting in the highest ionization enthalpy in Period 3 ($\\approx 1520\\text{ kJ/mol}$)."),

    # 28 (Q188)
    ("The ionic radii of $\\text{Li}^+, \\text{Be}^{2+}, \\text{B}^{3+}$ follow the order:",
     "$\\text{Li}^+ > \\text{Be}^{2+} > \\text{B}^{3+}$",
     "$\\text{B}^{3+} > \\text{Be}^{2+} > \\text{Li}^+$",
     "$\\text{Be}^{2+} > \\text{Li}^+ > \\text{B}^{3+}$",
     "$\\text{Li}^+ = \\text{Be}^{2+} = \\text{B}^{3+}$",
     0, "2-Electron Isoelectronic Ions",
     "All three ions are 2-electron isoelectronic species ($1s^2$). As nuclear charge increases from $\\text{Li}(3)$ to $\\text{Be}(4)$ to $\\text{B}(5)$, ionic radius decreases: $\\text{Li}^+ > \\text{Be}^{2+} > \\text{B}^{3+}$."),

    # 29 (Q189)
    ("Why is the ionic radius of $\\text{H}^-$ ($208\\text{ pm}$) significantly larger than that of $\\text{F}^-$ ($133\\text{ pm}$) despite having fewer electrons?",
     "$\\text{H}^-$ has only 1 proton holding 2 electrons, resulting in very low nuclear charge and huge interelectronic repulsion",
     "$\\text{H}^-$ has higher principal quantum number than $\\text{F}^-$",
     "$\\text{F}^-$ has poor shielding by $d$-orbitals",
     "$\\text{H}^-$ has a vacant $p$-subshell",
     0, "Hydride Ion Radius",
     "In $\\text{H}^-$, a single proton ($Z = 1$) holds two electrons. The proton-to-electron ratio is $0.5$, causing tremendous mutual repulsion between the two $1s$ electrons and expanding the electron cloud to an unusually large radius ($208\\text{ pm}$)."),

    # 30 (Q190)
    ("Which of the following species has the highest ratio of ionic charge to radius (polarizing power)?",
     "$\\text{Be}^{2+}$",
     "$\\text{Mg}^{2+}$",
     "$\\text{Ca}^{2+}$",
     "$\\text{Sr}^{2+}$",
     0, "Highest Polarizing Power",
     "Polarizing power is proportional to $\\text{charge}/\\text{radius}$. Among alkaline earth metal cations ($\text{all } +2$), $\\text{Be}^{2+}$ has the smallest radius ($31\\text{ pm}$), giving it the highest charge density and polarizing power."),

    # 31 (Q191)
    ("The first ionization enthalpies of Boron and Aluminium are $801\\text{ kJ/mol}$ and $577\\text{ kJ/mol}$ respectively. Why does the value decrease?",
     "Increase in atomic size and screening effect of inner electrons in Aluminium",
     "Aluminium having higher electronegativity",
     "Boron having more inner electron shells",
     "Aluminium having fully filled $d$-subshell",
     0, "B vs Al IE",
     "Aluminium has a much larger atomic radius ($n = 3$ vs $n = 2$) and inner neon core screening the nucleus, which drastically reduces the attraction on the valence $3p^1$ electron."),

    # 32 (Q192)
    ("The first ionization enthalpy of Thallium ($\\text{Tl}$, $Z=81$) is unexpectedly higher than that of Indium ($\\text{In}$, $Z=49$). This anomaly is due to:",
     "Lanthanoid contraction and poor shielding by $14\\ 4f$ electrons in Thallium",
     "Thallium having fewer protons than Indium",
     "Presence of half-filled $p$-orbitals in Thallium",
     "Thallium being a non-metal",
     0, "Thallium IE Anomaly",
     "In Thallium, the $14$ inner $4f$ electrons provide exceptionally poor shielding for the nuclear charge ($Z = 81$), resulting in an increased effective nuclear charge that holds the $6s$ and $6p$ electrons tightly, increasing $\\Delta_i H_1$ above Indium."),

    # 33 (Q193)
    ("Which of the following orders is INCORRECT regarding first ionization enthalpy?",
     "$\\text{O} > \\text{N}$",
     "$\\text{Be} > \\text{B}$",
     "$\\text{Mg} > \\text{Al}$",
     "$\\text{P} > \\text{S}$",
     0, "Incorrect IE Order",
     "Nitrogen has a stable half-filled $2p^3$ subshell, so $\\Delta_i H_1(\\text{N}) > \\Delta_i H_1(\\text{O})$ ($1402\\text{ kJ/mol}$ vs $1314\\text{ kJ/mol}$). Therefore, '$\\text{O} > \\text{N}$' is incorrect."),

    # 34 (Q194)
    ("Which of the following is the correct order of decreasing size for the ions: $\\text{I}^-, \\text{I}, \\text{I}^+$?",
     "$\\text{I}^- > \\text{I} > \\text{I}^+$",
     "$\\text{I}^+ > \\text{I} > \\text{I}^-$",
     "$\\text{I} > \\text{I}^- > \\text{I}^+$",
     "$\\text{I}^- > \\text{I}^+ > \\text{I}$",
     0, "Iodine Species Radii Order",
     "An anion has expanded electron cloud ($r_{\\text{anion}} > r_{\\text{neutral}}$), while a cation has contracted electron cloud ($r_{\\text{cation}} < r_{\\text{neutral}}$). Hence: $\\text{I}^- > \\text{I} > \\text{I}^+$."),

    # 35 (Q195)
    ("The ionic radius of $\\text{Fe}^{2+}$ compared to $\\text{Fe}^{3+}$ is:",
     "Larger, because lower oxidation state means lower $Z_{\\text{eff}}$ per electron",
     "Smaller, because $\\text{Fe}^{2+}$ has fewer electrons",
     "Equal, because both have 26 protons",
     "Indistinguishable in crystals",
     0, "Fe2+ vs Fe3+ Radii",
     "$\\text{Fe}^{2+}$ has 24 electrons, while $\\text{Fe}^{3+}$ has 23 electrons with the same 26 protons. Higher positive oxidation state leads to greater effective nuclear charge, pulling electrons closer. Hence $r(\\text{Fe}^{2+}) > r(\\text{Fe}^{3+})$."),

    # 36 (Q196)
    ("Which of the following has the highest third ionization enthalpy ($\\Delta_i H_3$)?",
     "Magnesium ($\\text{Mg}$)",
     "Aluminium ($\\text{Al}$)",
     "Silicon ($\\text{Si}$)",
     "Phosphorus ($\\text{P}$)",
     0, "Highest Third IE",
     "Magnesium has 2 valence electrons ($[\\text{Ne}] 3s^2$). The first two ionizations remove $3s^2$ electrons to form $\\text{Mg}^{2+} ([\\text{Ne}])$. Removing the 3rd electron breaks the noble gas neon core, requiring an enormous $\\Delta_i H_3 (7733\\text{ kJ/mol}$)."),

    # 37 (Q197)
    ("Which of the following elements has the lowest first ionization enthalpy among all transition elements of the $3d$ series?",
     "Scandium ($\\text{Sc}$)",
     "Titanium ($\\text{Ti}$)",
     "Zinc ($\\text{Zn}$)",
     "Copper ($\\text{Cu}$)",
     0, "Lowest 3d First IE",
     "Scandium ($Z = 21$) has the lowest nuclear charge and largest atomic size among $3d$ transition elements, giving it the lowest first ionization enthalpy ($\\approx 631\\text{ kJ/mol}$)."),

    # 38 (Q198)
    ("The atomic radii of transition metals from Chromium to Copper across the $3d$ series remain almost constant because:",
     "The increase in nuclear charge is balanced by the screening effect of the added $(n-1)d$ electrons",
     "Electrons enter the outermost $4s$ orbital",
     "The number of protons does not change",
     "Electrons enter $4p$ orbitals",
     0, "Transition Metal Radii Constancy",
     "As we move from Cr to Cu, protons are added to the nucleus while electrons enter the inner $(n-1)d$ subshell. The screening by inner $d$-electrons counteracts the increased nuclear attraction, keeping atomic radii almost constant."),

    # 39 (Q199)
    ("At the end of the $3d$ transition series, Zinc shows a slight increase in atomic radius compared to Copper because:",
     "Completely filled $3d^{10}$ subshell causes increased electron-electron repulsion that expands the electron cloud",
     "Zinc has fewer protons than Copper",
     "Zinc has empty $4s$ orbitals",
     "Zinc forms covalent bonds only",
     0, "Zinc Radius Increase",
     "In Zinc ($3d^{10} 4s^2$), all five $3d$ orbitals are fully paired. The interelectronic repulsion among paired $d$-electrons exceeds the nuclear pull, causing a slight expansion in radius."),

    # 40 (Q200)
    ("Which of the following ions has the largest ionic radius?",
     "$\\text{Se}^{2-}$",
     "$\\text{Br}^-$",
     "$\\text{Rb}^+$",
     "$\\text{Sr}^{2+}$",
     0, "36-Electron Isoelectronic Series",
     "All four ions are 36-electron isoelectronic species (Krypton core). $\\text{Se}^{2-}$ has the lowest nuclear charge ($Z = 34$), making its effective nuclear charge lowest and its ionic radius largest."),

    # 41 (Q201)
    ("Which of the following ions has the smallest ionic radius in the 36-electron isoelectronic series?",
     "$\\text{Y}^{3+}$",
     "$\\text{Sr}^{2+}$",
     "$\\text{Rb}^+$",
     "$\\text{Br}^-$",
     0, "Smallest 36-Electron Ion",
     "In the 36-electron series, $\\text{Y}^{3+}$ has the highest nuclear charge ($Z = 39$), drawing the electron cloud inward most strongly and yielding the smallest ionic radius."),

    # 42 (Q202)
    ("Why is the first ionization enthalpy of Lead ($\\text{Pb}$, $Z=82$) slightly higher than that of Tin ($\\text{Sn}$, $Z=50$)?",
     "Poor shielding by $14\\ 4f$ electrons (lanthanoid contraction) in Lead",
     "Tin having more electron shells than Lead",
     "Lead having fewer protons than Tin",
     "Lead having half-filled $p$-orbitals",
     0, "Pb vs Sn IE",
     "Lead contains 14 intervening $4f$ electrons which shield nuclear charge very poorly. This increases the effective nuclear charge on valence $6s^2 6p^2$ electrons, causing $\\Delta_i H_1(\\text{Pb}) > \\Delta_i H_1(\\text{Sn})$."),

    # 43 (Q203)
    ("The correct order of effective nuclear charge ($Z_{\\text{eff}}$) experienced by valence electrons in Period 2 is:",
     "$\\text{Li} < \\text{Be} < \\text{B} < \\text{C} < \\text{N} < \\text{O} < \\text{F}$",
     "$\\text{F} < \\text{O} < \\text{N} < \\text{C} < \\text{B} < \\text{Be} < \\text{Li}$",
     "$\\text{Li} < \\text{B} < \\text{Be} < \\text{C} < \\text{N} < \\text{O} < \\text{F}$",
     "$\\text{Be} < \\text{Li} < \\text{B} < \\text{C} < \\text{N} < \\text{O} < \\text{F}$",
     0, "Period 2 Zeff Trend",
     "Across Period 2 from left to right, nuclear charge increases by 1 at each step while shielding by electrons in the same shell increases by only $0.35$. Thus $Z_{\\text{eff}}$ increases monotonically from Li to F."),

    # 44 (Q204)
    ("Which of the following pairs of elements illustrates diagonal relationship?",
     "$\\text{Li}$ and $\\text{Mg}$",
     "$\\text{Li}$ and $\\text{Na}$",
     "$\\text{Be}$ and $\\text{Mg}$",
     "$\\text{B}$ and $\\text{C}$",
     0, "Diagonal Relationship Li-Mg",
     "Lithium (Period 2, Group 1) and Magnesium (Period 3, Group 2) exhibit remarkably similar properties due to their diagonal relationship, caused by similar ionic radii and similar polarizing powers."),

    # 45 (Q205)
    ("Beryllium shows diagonal relationship with which element?",
     "Aluminium ($\\text{Al}$)",
     "Boron ($\\text{B}$)",
     "Silicon ($\\text{Si}$)",
     "Magnesium ($\\text{Mg}$)",
     0, "Diagonal Relationship Be-Al",
     "Beryllium (Period 2, Group 2) diagonally resembles Aluminium (Period 3, Group 13). Both form amphoteric oxides and covalent chlorides with bridged polymeric structures."),

    # 46 (Q206)
    ("The primary reason for the diagonal relationship between certain second and third period elements is their similar:",
     "Charge-to-radius ratio (polarizing power) and electronegativity",
     "Number of valence electrons",
     "Atomic masses",
     "Number of neutrons",
     0, "Cause of Diagonal Relationship",
     "Moving across a period increases charge and decreases radius (increasing polarizing power), while moving down a group decreases polarizing power. These opposing effects cancel diagonally, leading to nearly identical polarizing powers and chemical similarities."),

    # 47 (Q207)
    ("The second ionization enthalpy of Chromium is higher than that of Manganese because:",
     "$\\text{Cr}^+$ has a stable half-filled $3d^5$ configuration, while $\\text{Mn}^+$ has $3d^5 4s^1$",
     "Manganese has higher atomic number",
     "Chromium has empty $4s$ orbitals",
     "Manganese has half-filled $4s$ orbitals",
     0, "Cr vs Mn Second IE",
     "$\\text{Cr}^+$ has $[\\text{Ar}] 3d^5$ with extra-stable half-filled $d$-orbitals. Removing a second electron requires disrupting this half-filled stability. In contrast, $\\text{Mn}^+$ has $[\\text{Ar}] 3d^5 4s^1$, where removing the second electron simply removes the $4s^1$ electron."),

    # 48 (Q208)
    ("Which of the following statements is correct regarding the ionization enthalpy of Noble Gases?",
     "They have exceptionally high first ionization enthalpies in their respective periods due to closed, stable octet configurations",
     "They have zero ionization enthalpy because they are inert",
     "Their ionization enthalpy increases down the group",
     "They have negative ionization enthalpy",
     0, "Noble Gases IE Feature",
     "Noble gases possess completely filled valence shells ($ns^2 np^6$, or $1s^2$ for He), conferring exceptional thermodynamic stability and requiring very high energy to remove an electron."),

    # 49 (Q209)
    ("The value of first ionization enthalpy of Boron is $801\\text{ kJ/mol}$, while that of Beryllium is $899\\text{ kJ/mol}$. This confirms that:",
     "$2s$ electrons are more penetrating and closer to the nucleus than $2p$ electrons",
     "$2p$ electrons have greater penetration power than $2s$ electrons",
     "Beryllium has a larger atomic radius than Boron",
     "Boron has a stable octet",
     0, "Penetration Proof Be vs B",
     "Beryllium ionizes from $2s^2$, while Boron ionizes from $2p^1$. Since $s$-orbitals penetrate closer to the nucleus, $2s$ electrons experience higher effective nuclear attraction and are harder to remove."),

    # 50 (Q210)
    ("Which of the following configurations has the lowest first ionization enthalpy?",
     "$[\\text{Ar}] 4s^1$",
     "$[\\text{Ne}] 3s^1$",
     "$[\\text{He}] 2s^1$",
     "$[\\text{Kr}] 5s^1$",
     0, "Lowest IE Among Alkali Metals",
     "All configurations are alkali metals: $\\text{Li} (2s^1), \\text{Na} (3s^1), \\text{K} (4s^1), \\text{Rb} (5s^1)$. As principal quantum number $n$ increases, atomic radius increases and IE decreases. Hence $[\\text{Kr}] 5s^1$ (Rubidium) has the lowest value."),

    # 51 (Q211)
    ("The first ionization enthalpies of four consecutive elements are $1086, 1402, 1314,$ and $1681\\text{ kJ}\\cdot\\text{mol}^{-1}$. These elements are respectively:",
     "$\\text{C}, \\text{N}, \\text{O}, \\text{F}$",
     "$\\text{B}, \\text{C}, \\text{N}, \\text{O}$",
     "$\\text{N}, \\text{O}, \\text{F}, \\text{Ne}$",
     "$\\text{Si}, \\text{P}, \\text{S}, \\text{Cl}$",
     0, "C N O F IE Identification",
     "The values clearly show the characteristic dip at Oxygen: $\\text{C} (1086) < \\text{N} (1402) > \\text{O} (1314) < \\text{F} (1681)$. Hence the elements are Carbon, Nitrogen, Oxygen, and Fluorine."),

    # 52 (Q212)
    ("Which of the following ions has the largest radius among halide ions?",
     "$\\text{I}^-$",
     "$\\text{Br}^-$",
     "$\\text{Cl}^-$",
     "$\\text{F}^-$",
     0, "Largest Halide Ion",
     "Down Group 17, ionic radius increases due to the addition of principal shells: $\\text{F}^- (133\\text{ pm}) < \\text{Cl}^- (181\\text{ pm}) < \\text{Br}^- (196\\text{ pm}) < \\text{I}^- (220\\text{ pm})$."),

    # 53 (Q213)
    ("Which of the following ions has the smallest radius among alkali metal cations?",
     "$\\text{Li}^+$",
     "$\\text{Na}^+$",
     "$\\text{K}^+$",
     "$\\text{Cs}^+$",
     0, "Smallest Alkali Cation",
     "Down Group 1, cationic radius increases: $\\text{Li}^+ (76\\text{ pm}) < \\text{Na}^+ (102\\text{ pm}) < \\text{K}^+ (138\\text{ pm}) < \\text{Rb}^+ (152\\text{ pm}) < \\text{Cs}^+ (167\\text{ pm})$."),

    # 54 (Q214)
    ("The ionic radii of $\\text{N}^{3-}, \\text{O}^{2-}$ and $\\text{F}^-$ are $171, 140,$ and $136\\text{ pm}$ respectively. The difference in radii reflects the effect of:",
     "Increasing nuclear charge for a constant number of electrons",
     "Increasing number of electron shells",
     "Decreasing mass number",
     "Increasing principal quantum number",
     0, "Isoelectronic Anion Radii Factor",
     "All three have 10 electrons. With increasing nuclear charge ($Z = 7, 8, 9$), the attractive force per electron increases, steadily pulling the electron cloud inward and decreasing the radius."),

    # 55 (Q215)
    ("Which of the following processes represents the second ionization enthalpy of Magnesium?",
     "$\\text{Mg}^+(\\text{g}) \\rightarrow \\text{Mg}^{2+}(\\text{g}) + e^-$",
     "$\\text{Mg}(\\text{g}) \\rightarrow \\text{Mg}^{2+}(\\text{g}) + 2e^-$",
     "$\\text{Mg}(\\text{s}) \\rightarrow \\text{Mg}^+(\\text{g}) + e^-$",
     "$\\text{Mg}^{2+}(\\text{g}) \\rightarrow \\text{Mg}^{3+}(\\text{g}) + e^-$",
     0, "Second IE Equation",
     "The second ionization enthalpy is specifically the energy required to remove an electron from a unipositive gaseous ion in its ground state: $\\text{Mg}^+(\\text{g}) \\rightarrow \\text{Mg}^{2+}(\\text{g}) + e^-$."),

    # 56 (Q216)
    ("Why is the second ionization enthalpy of an element always greater than its first ionization enthalpy?",
     "Removing an electron from a positively charged ion involves greater electrostatic attraction than from a neutral atom",
     "The neutral atom has more protons than the cation",
     "The cation has a larger size than the neutral atom",
     "Electrons in the cation have higher energy",
     0, "Successive IE Physical Basis",
     "In a cation, the number of protons exceeds the number of electrons. The remaining electrons experience a higher effective nuclear charge ($Z/e$ ratio increases) and are held more tightly, requiring more energy to remove."),

    # 57 (Q217)
    ("The correct order of first ionization enthalpy for Group 14 elements ($\\text{C}, \\text{Si}, \\text{Ge}, \\text{Sn}, \\text{Pb}$) is:",
     "$\\text{C} > \\text{Si} > \\text{Ge} > \\text{Pb} > \\text{Sn}$",
     "$\\text{C} > \\text{Si} > \\text{Ge} > \\text{Sn} > \\text{Pb}$",
     "$\\text{Pb} > \\text{Sn} > \\text{Ge} > \\text{Si} > \\text{C}$",
     "$\\text{C} > \\text{Pb} > \\text{Si} > \\text{Ge} > \\text{Sn}$",
     0, "Group 14 IE Order",
     "From Carbon to Tin, IE decreases normally: $\\text{C} > \\text{Si} > \\text{Ge} > \\text{Sn}$. However, Lead has $14\\ 4f$ electrons (lanthanoid contraction) that shield poorly, causing its $\\Delta_i H_1$ to be slightly higher than Tin: $\\text{C} > \\text{Si} > \\text{Ge} > \\text{Pb} > \\text{Sn}$."),

    # 58 (Q218)
    ("The first ionization enthalpies of Alkaline Earth Metals (Group 2) follow the trend:",
     "$\\text{Be} > \\text{Mg} > \\text{Ca} > \\text{Sr} > \\text{Ba}$",
     "$\\text{Ba} > \\text{Sr} > \\text{Ca} > \\text{Mg} > \\text{Be}$",
     "$\\text{Be} > \\text{Ca} > \\text{Mg} > \\text{Sr} > \\text{Ba}$",
     "$\\text{Mg} > \\text{Be} > \\text{Ca} > \\text{Sr} > \\text{Ba}$",
     0, "Group 2 IE Trend",
     "Down Group 2, atomic radius steadily increases and effective nuclear charge on valence electrons decreases smoothly, resulting in a continuous decrease in $\\Delta_i H_1$: $\\text{Be} > \\text{Mg} > \\text{Ca} > \\text{Sr} > \\text{Ba}$."),

    # 59 (Q219)
    ("Which of the following elements has the lowest first ionization enthalpy?",
     "Francium / Caesium",
     "Fluorine",
     "Helium",
     "Chlorine",
     0, "Lowest IE Periodic Table",
     "Caesium (and radioactive Francium) has the largest atomic size and lowest effective nuclear charge on its valence $6s$ electron, giving it the lowest first ionization enthalpy in the periodic table ($\\approx 374\\text{ kJ/mol}$)."),

    # 60 (Q220)
    ("An atom with atomic number $Z = 12$ forms an ion $X^{2+}$. An atom with $Z = 8$ forms an ion $Y^{2-}$. Comparing their ionic radii:",
     "$r(Y^{2-}) > r(X^{2+})$",
     "$r(X^{2+}) > r(Y^{2-})$",
     "$r(X^{2+}) = r(Y^{2-})$",
     "Cannot be predicted",
     0, "Mg2+ vs O2- Radii",
     "$X^{2+}$ is $\\text{Mg}^{2+}$ ($Z = 12$) and $Y^{2-}$ is $\\text{O}^{2-}$ ($Z = 8$). Both are 10-electron isoelectronic species. With lower nuclear charge, $\\text{O}^{2-}$ has a larger radius: $r(\\text{O}^{2-}) = 140\\text{ pm} > r(\\text{Mg}^{2+}) = 72\\text{ pm}$."),

    # 61 (Q221)
    ("Why is the radius of neutral Helium ($31\\text{ pm}$) smaller than that of neutral Hydrogen ($53\\text{ pm}$)?",
     "Helium has 2 protons in the nucleus pulling the $1s$ electrons closer than the single proton in Hydrogen",
     "Helium has electrons in the $2s$ orbital",
     "Hydrogen has more inner shielding than Helium",
     "Helium has empty $p$-orbitals",
     0, "He vs H Atomic Radius",
     "Both Hydrogen and Helium have electrons in the $n = 1$ shell. Helium has $Z = 2$ while Hydrogen has $Z = 1$. The doubled nuclear charge in Helium pulls the $1s$ electron cloud significantly closer to the nucleus."),

    # 62 (Q222)
    ("The atomic radius of neon ($160\\text{ pm}$) is reported to be larger than that of fluorine ($72\\text{ pm}$). The fundamental reason is:",
     "Neon's radius is measured as van der Waals radius, whereas Fluorine's is covalent radius",
     "Neon has fewer protons than Fluorine",
     "Neon has electrons in the $n = 3$ shell",
     "Fluorine has empty $d$-orbitals",
     0, "Neon vs Fluorine Radius Comparison",
     "Fluorine forms $\\text{F}_2$ molecules, so its radius is measured as a bonded covalent radius ($72\\text{ pm}$). Neon does not form bonds, so its radius is measured as a non-bonded van der Waals radius ($160\\text{ pm}$), which is fundamentally larger."),

    # 63 (Q223)
    ("Which of the following sets of elements represents strictly isoelectronic species?",
     "$\\text{N}^{3-}, \\text{F}^-, \\text{Na}^+$",
     "$\\text{K}^+, \\text{Ca}^{2+}, \\text{Sc}^{2+}$",
     "$\\text{O}^{2-}, \\text{S}^{2-}, \\text{Se}^{2-}$",
     "$\\text{Li}^+, \\text{Na}^+, \\text{K}^+$",
     0, "Strict Isoelectronic Set",
     "$\\text{N}^{3-} (7+3=10)$, $\\text{F}^- (9+1=10)$, and $\\text{Na}^+ (11-1=10)$ all have exactly 10 electrons, making them strictly isoelectronic."),

    # 64 (Q224)
    ("If the ionization enthalpy of gaseous atom $A$ is $E_1$ and the electron gain enthalpy of $A^+$ is $E_2$, then:",
     "$E_1 = -E_2$",
     "$E_1 = E_2$",
     "$E_1 > E_2$",
     "$E_1 < E_2$",
     0, "IE and Reverse Relation",
     "Ionization of $A$: $A(\\text{g}) \\rightarrow A^+(\\text{g}) + e^-\\ (\\Delta H = E_1)$. Electron gain of $A^+$: $A^+(\\text{g}) + e^- \\rightarrow A(\\text{g})\\ (\\Delta H = E_2)$. By Hess's law of reverse reactions, $E_1 = -E_2$."),

    # 65 (Q225)
    ("Which of the following configurations represents an element with the highest second ionization enthalpy?",
     "$1s^2 2s^2 2p^6 3s^1$",
     "$1s^2 2s^2 2p^6 3s^2$",
     "$1s^2 2s^2 2p^6 3s^2 3p^1$",
     "$1s^2 2s^2 2p^6 3s^2 3p^2$",
     0, "Highest Second IE Configuration",
     "The configuration $3s^1$ (Sodium) loses its first electron to achieve the noble gas configuration $[\\text{Ne}]$. Removing a second electron requires disrupting this noble gas core, leading to an extremely high second ionization enthalpy ($\\approx 4562\\text{ kJ/mol}$).")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (25 questions: Q226 to Q250)
# -------------------------------------------------------------------------
hard_items = [
    # 1 (Q226) Authentic NEET 2022
    ("Given the following ionization enthalpies in $\\text{kJ}\\cdot\\text{mol}^{-1}$ for an element $M$:\n$\\Delta_i H_1 = 496, \\Delta_i H_2 = 4562, \\Delta_i H_3 = 6910, \\Delta_i H_4 = 9543$.\nWhat is the formula of the stable oxide and chloride formed by this element?",
     "$M_2\\text{O}$ and $M\\text{Cl}$",
     "$M\\text{O}$ and $M\\text{Cl}_2$",
     "$M_2\\text{O}_3$ and $M\\text{Cl}_3$",
     "$M\\text{O}_2$ and $M\\text{Cl}_4$",
     0, "IE Jump Oxide Formula NEET 2022",
     "The dramatic 9.2-fold jump from $\\Delta_i H_1 (496)$ to $\\Delta_i H_2 (4562)$ confirms that element $M$ has exactly one valence electron (an alkali metal like $\\text{Na}$). Hence it forms a monovalent cation $M^+$, yielding oxide $M_2\\text{O}$ and chloride $M\\text{Cl}$.",
     True, "NEET 2022"),

    # 2 (Q227) Authentic NEET 2023
    ("Consider the following statements regarding the periodic trends of transition elements:\n(I) Atomic radii decrease rapidly from $\\text{Sc}$ to $\\text{Cr}$, remain almost constant from $\\text{Cr}$ to $\\text{Cu}$, and slightly increase at $\\text{Zn}$.\n(II) The ionization enthalpies of $5d$ elements are generally higher than those of $3d$ and $4d$ elements due to lanthanoid contraction.\n(III) Lanthanoid contraction is caused by the poor shielding effect of $4f$ electrons.\nWhich of the above statements are correct?",
     "I, II, and III are all correct",
     "Only I and III are correct",
     "Only II and III are correct",
     "Only I and II are correct",
     0, "Transition Metals Periodic Trends NEET 2023",
     "Statement I is correct because increased nuclear charge is balanced by $d$-screening, with electron repulsion at $d^{10}$. Statement II is correct because poor $4f$ shielding in $5d$ series causes higher $Z_{\\text{eff}}$ and higher IE. Statement III accurately defines the cause of lanthanoid contraction. All three statements are correct.",
     True, "NEET 2023"),

    # 3 (Q228) Authentic NEET 2024
    ("The correct increasing order of ionic radii for the following series of isoelectronic ions: $\\text{P}^{3-}, \\text{S}^{2-}, \\text{Cl}^-, \\text{K}^+, \\text{Ca}^{2+}, \\text{Sc}^{3+}$ is:",
     "$\\text{Sc}^{3+} < \\text{Ca}^{2+} < \\text{K}^+ < \\text{Cl}^- < \\text{S}^{2-} < \\text{P}^{3-}$",
     "$\\text{P}^{3-} < \\text{S}^{2-} < \\text{Cl}^- < \\text{K}^+ < \\text{Ca}^{2+} < \\text{Sc}^{3-}$",
     "$\\text{K}^+ < \\text{Ca}^{2+} < \\text{Sc}^{3+} < \\text{Cl}^- < \\text{S}^{2-} < \\text{P}^{3-}$",
     "$\\text{Sc}^{3+} < \\text{K}^+ < \\text{Ca}^{2+} < \\text{P}^{3-} < \\text{S}^{2-} < \\text{Cl}^-$",
     0, "Isoelectronic 18-Electron NEET 2024",
     "All species contain 18 electrons. Atomic numbers are: $\\text{Sc}(21), \\text{Ca}(20), \\text{K}(19), \\text{Cl}(17), \\text{S}(16), \\text{P}(15)$. Since radius decreases with increasing nuclear charge ($Z$), the order is $\\text{Sc}^{3+} < \\text{Ca}^{2+} < \\text{K}^+ < \\text{Cl}^- < \\text{S}^{2-} < \\text{P}^{3-}$.",
     True, "NEET 2024"),

    # 4 (Q229)
    ("The first ($\\Delta_i H_1$) and second ($\\Delta_i H_2$) ionization enthalpies of four elements $W, X, Y, Z$ are given below in $\\text{kJ}\\cdot\\text{mol}^{-1}$:\n$W$: $2372, 5251$\n$X$: $520, 7298$\n$Y$: $900, 1757$\n$Z$: $1681, 3374$\nWhich element represents the most reactive metal and which represents a noble gas?",
     "$X$ is the most reactive metal, $W$ is the noble gas",
     "$W$ is the most reactive metal, $X$ is the noble gas",
     "$Y$ is the most reactive metal, $Z$ is the noble gas",
     "$Z$ is the most reactive metal, $W$ is the noble gas",
     0, "Element Identification from IE Pairs",
     "Element $X$ has low $\\Delta_i H_1 (520)$ and a huge jump to $\\Delta_i H_2 (7298)$, indicating an alkali metal (Lithium, highly reactive metal). Element $W$ has an enormous $\\Delta_i H_1 (2372)$, which is characteristic of Helium, a noble gas."),

    # 5 (Q230)
    ("The first five ionization enthalpies of an element are: $801, 2427, 3658, 25020,$ and $32820\\text{ kJ}\\cdot\\text{mol}^{-1}$. The element forms a chloride with the formula:",
     "$E\\text{Cl}_3$",
     "$E\\text{Cl}$",
     "$E\\text{Cl}_2$",
     "$E\\text{Cl}_4$",
     0, "Chloride Formula from 5 IEs",
     "The ionization enthalpies show a huge gap between $\\Delta_i H_3 (3658)$ and $\\Delta_i H_4 (25020)$, indicating 3 valence electrons. The element belongs to Group 13 (Boron) and forms the chloride $E\\text{Cl}_3$."),

    # 6 (Q231)
    ("Calculate the effective nuclear charge ($Z_{\\text{eff}}$) experienced by a $4s$ valence electron in Potassium ($Z = 19$) using Slater's rules:",
     "$2.20$",
     "$1.80$",
     "$3.00$",
     "$1.00$",
     0, "Slater Rule Calculation Potassium",
     "Configuration: $(1s)^2 (2s, 2p)^8 (3s, 3p)^8 (4s)^1$. The $4s$ electron has: 0 electrons in same shell ($0 \\times 0.35 = 0$); 8 electrons in $(n-1)$ shell ($8 \\times 0.85 = 6.8$); 10 electrons in $(n-2)$ and lower ($10 \\times 1.00 = 10.0$). Screening constant $\\sigma = 6.8 + 10.0 = 16.8$. Thus $Z_{\\text{eff}} = Z - \\sigma = 19 - 16.8 = 2.20$."),

    # 7 (Q232)
    ("Calculate the effective nuclear charge ($Z_{\\text{eff}}$) for a $2p$ electron in a Carbon atom ($Z = 6$) using Slater's rules:",
     "$3.25$",
     "$2.75$",
     "$4.00$",
     "$1.85$",
     0, "Slater Rule Calculation Carbon",
     "Configuration: $(1s)^2 (2s, 2p)^4$. For a $2p$ electron: 3 other electrons in same shell ($3 \\times 0.35 = 1.05$); 2 electrons in $(n-1)$ shell ($2 \\times 0.85 = 1.70$). Screening constant $\\sigma = 1.05 + 1.70 = 2.75$. Hence $Z_{\\text{eff}} = 6 - 2.75 = 3.25$."),

    # 8 (Q233)
    ("Why is the radius of $\\text{Zr}^{4+}$ ($72\\text{ pm}$) almost identical to that of $\\text{Hf}^{4+}$ ($71\\text{ pm}$), even though Hafnium has 32 more protons than Zirconium?",
     "The filling of $14\\ 4f$ orbitals in the intervening lanthanoids provides poor shielding, causing a contraction that precisely cancels the expected shell expansion",
     "Hafnium has fewer electron shells than Zirconium",
     "Hafnium has higher shielding by $5d$ electrons",
     "Zirconium has empty $4f$ orbitals",
     0, "Lanthanoid Contraction Radii Cancellation",
     "Between $\\text{Zr} (Z=40)$ and $\\text{Hf} (Z=72)$ lie the 14 lanthanoid elements ($Z=57-71$). The $4f$ electrons have poor shielding power, so the increase of 32 nuclear charges pulls the electron shells inward, almost exactly neutralizing the increase in size from $n=4$ to $n=5$."),

    # 9 (Q234)
    ("An element $X$ has successive ionization enthalpies: $577, 1816, 2744, 11577, 14842\\text{ kJ}\\cdot\\text{mol}^{-1}$. Which of the following statements about $X$ is FALSE?",
     "Element $X$ forms a stable divalent cation $X^{2+}$ as its most stable state",
     "Element $X$ belongs to Group 13 of the periodic table",
     "Element $X$ forms an oxide of the type $X_2\\text{O}_3$",
     "The massive jump occurs between the 3rd and 4th ionization enthalpies",
     0, "Group 13 Properties Analysis",
     "The jump from $\\Delta_i H_3 (2744)$ to $\\Delta_i H_4 (11577)$ is over 4-fold, proving $X$ has 3 valence electrons (Aluminium, Group 13). Its most stable state is trivalent $X^{3+}$, not divalent $X^{2+}$. Therefore statement A is false."),

    # 10 (Q235)
    ("Assertion (A): The first ionization enthalpy of Nitrogen is higher than that of Oxygen.\nReason (R): Nitrogen has a half-filled $2p$ subshell which possesses extra exchange energy and stability.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason N vs O IE",
     "Assertion is true: $\\Delta_i H_1(\\text{N}) = 1402\\text{ kJ/mol} > \\Delta_i H_1(\\text{O}) = 1314\\text{ kJ/mol}$. Reason is true: Nitrogen ($2s^2 2p^3$) has three parallel spins with high exchange energy ($K = 3$), providing extra stability that resists electron removal. (R) correctly explains (A)."),

    # 11 (Q236)
    ("Assertion (A): The atomic radius of Gallium is slightly smaller than that of Aluminium.\nReason (R): The ten $3d$ electrons in Gallium exert a strong shielding effect on the outer $4s$ and $4p$ electrons.",
     "(A) is true, but (R) is false",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Ga vs Al",
     "Assertion (A) is true: $r_{\\text{Ga}} (135\\text{ pm}) < r_{\\text{Al}} (143\\text{ pm})$. Reason (R) is false: $d$-electrons have diffuse shapes that provide very poor shielding (not strong shielding), allowing the 31 protons to exert an enhanced attractive force."),

    # 12 (Q237)
    ("Assertion (A): Successive ionization enthalpies of an atom always follow $\\Delta_i H_1 < \\Delta_i H_2 < \\Delta_i H_3$.\nReason (R): With each successive removal of an electron, the effective nuclear charge per remaining electron decreases.",
     "(A) is true, but (R) is false",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Successive IE",
     "Assertion (A) is true: successive ionization enthalpies always increase. Reason (R) is false: the effective nuclear charge per electron increases (not decreases) because the number of protons remains constant while electron count decreases."),

    # 13 (Q238)
    ("Assertion (A): The second ionization enthalpy of Oxygen is higher than that of Nitrogen.\nReason (R): In $\\text{O}^+$, the electronic configuration is $2s^2 2p^3$, which is half-filled and exceptionally stable.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Second IE O vs N",
     "Assertion (A) is true: $\\Delta_i H_2(\\text{O}) = 3388\\text{ kJ/mol} > \\Delta_i H_2(\\text{N}) = 2856\\text{ kJ/mol}$. Reason (R) is true: losing the first electron gives $\\text{O}^+ (2s^2 2p^3)$, a half-filled configuration with high exchange energy, making removal of the second electron exceptionally difficult. (R) correctly explains (A)."),

    # 14 (Q239)
    ("Match List-I (Ionization Enthalpies in $\\text{kJ/mol}$) with List-II (Element type):\n(A) $\\Delta_i H_1 = 2372, \\Delta_i H_2 = 5251$ -> (1) Alkaline earth metal\n(B) $\\Delta_i H_1 = 520, \\Delta_i H_2 = 7298$ -> (2) Noble gas\n(C) $\\Delta_i H_1 = 899, \\Delta_i H_2 = 1757$ -> (3) Alkali metal\n(D) $\\Delta_i H_1 = 1681, \\Delta_i H_2 = 3374$ -> (4) Halogen",
     "A-2, B-3, C-1, D-4",
     "A-3, B-2, C-1, D-4",
     "A-2, B-1, C-3, D-4",
     "A-4, B-3, C-1, D-2",
     0, "Match IE with Element Types",
     "A has highest IE1 ($2372$) -> Noble gas (He, 2). B has moderate IE1 ($520$) and massive jump to IE2 ($7298$) -> Alkali metal (3). C has IE1 ($899$) and accessible IE2 ($1757$) with jump at IE3 -> Alkaline earth metal (1). D has high IE1 ($1681$) -> Halogen (F, 4). Match: A-2, B-3, C-1, D-4."),

    # 15 (Q240)
    ("The first ionization enthalpies of three elements $A, B, C$ are $496, 738,$ and $577\\text{ kJ}\\cdot\\text{mol}^{-1}$. If these elements belong to Period 3, their atomic numbers are:",
     "$A = 11, B = 12, C = 13$",
     "$A = 11, B = 13, C = 12$",
     "$A = 12, B = 11, C = 13$",
     "$A = 13, B = 12, C = 11$",
     0, "Identify Na Mg Al from IE Values",
     "In Period 3: Sodium ($Z=11$) has $\\Delta_i H_1 = 496\\text{ kJ/mol}$; Magnesium ($Z=12$) has $\\Delta_i H_1 = 738\\text{ kJ/mol}$ (filled $3s^2$); Aluminium ($Z=13$) has $\\Delta_i H_1 = 577\\text{ kJ/mol}$ (unpaired $3p^1$). Thus $A = 11, B = 12, C = 13$."),

    # 16 (Q241)
    ("Why is the second ionization enthalpy of Alkali Metals much higher than that of Alkaline Earth Metals in the same period?",
     "Alkali metals lose their second electron from a stable noble gas core $(n-1)p^6$, whereas alkaline earth metals lose their second electron from an $ns^1$ valence orbital",
     "Alkali metals have more protons than alkaline earth metals",
     "Alkaline earth metals have higher atomic size",
     "Alkali metals have lower nuclear charge",
     0, "Alkali vs Alkaline Earth Second IE Difference",
     "For alkali metals ($M^+$), the outer electron shell is empty and the remaining electron is removed from a stable noble gas closed shell ($(n-1)s^2 (n-1)p^6$), requiring enormous energy. For alkaline earth metals ($M^+$), the second electron is still in the valence $ns$ orbital."),

    # 17 (Q242)
    ("Which of the following pairs has the highest difference in first ionization enthalpy?",
     "$\\text{He}$ and $\\text{Li}$",
     "$\\text{Li}$ and $\\text{Be}$",
     "$\\text{Be}$ and $\\text{B}$",
     "$\\text{N}$ and $\\text{O}$",
     0, "Largest IE Gap Pair",
     "Helium has the highest IE1 in the periodic table ($2372\\text{ kJ/mol}$), while Lithium has a very low IE1 ($520\\text{ kJ/mol}$). The difference is $2372 - 520 = 1852\\text{ kJ/mol}$, the largest step between consecutive elements in the periodic table."),

    # 18 (Q243)
    ("Consider the elements $\\text{Be}, \\text{B}, \\text{C}, \\text{N}, \\text{O}$. Which element has the highest second ionization enthalpy ($\\Delta_i H_2$)?",
     "Boron ($\\text{B}$)",
     "Beryllium ($\\text{Be}$)",
     "Carbon ($\\text{C}$)",
     "Oxygen ($\\text{O}$)",
     0, "Highest Second IE in Be-B-C-N-O",
     "Electronic configurations after losing 1 electron: $\\text{Be}^+ (2s^1), \\text{B}^+ (2s^2), \\text{C}^+ (2s^2 2p^1), \\text{N}^+ (2s^2 2p^2), \\text{O}^+ (2s^2 2p^3)$. $\\text{B}^+$ has a fully filled $2s^2$ subshell which is exceptionally stable, resulting in a very high second ionization enthalpy ($\\approx 2427\\text{ kJ/mol}$), higher than $\\text{Be}^+ (1757\\text{ kJ/mol}$)."),

    # 19 (Q244)
    ("The ionization energy of an atom is $14.5\\text{ eV}$. If radiation of wavelength $\\lambda = 60\\text{ nm}$ falls on it, the kinetic energy of the ejected photoelectron is: ($h c = 1240\\text{ eV}\\cdot\\text{nm}$)",
     "$6.17\\text{ eV}$",
     "$20.67\\text{ eV}$",
     "$14.5\\text{ eV}$",
     "$8.33\\text{ eV}$",
     0, "Photoelectric Effect IE Calculation",
     "Photon energy $E = h c / \\lambda = 1240 / 60 = 20.67\\text{ eV}$. Kinetic energy $K = E - \\text{IE} = 20.67 - 14.5 = 6.17\\text{ eV}$."),

    # 20 (Q245)
    ("Which of the following graphs correctly represents the variation of first ionization enthalpy ($\\Delta_i H_1$) with atomic number ($Z$) for the elements of Period 2?",
     "Zigzag curve with local maxima at $\\text{Be}$ and $\\text{N}$, and local minima at $\\text{B}$ and $\\text{O}$",
     "Strict monotonically increasing straight line from $\\text{Li}$ to $\\text{Ne}$",
     "Strict monotonically decreasing curve from $\\text{Li}$ to $\\text{Ne}$",
     "Parabolic curve with a single maximum at $\\text{Carbon}$",
     0, "Period 2 IE Graph",
     "The curve shows a general upward trend but has two distinct peaks (local maxima) at $\\text{Be}$ ($2s^2$) and $\\text{N}$ ($2p^3$), followed by dips at $\\text{B}$ ($2p^1$) and $\\text{O}$ ($2p^4$)."),

    # 21 (Q246)
    ("An element $A$ has atomic number 20, $B$ has atomic number 38, and $C$ has atomic number 56. The correct order of their first ionization enthalpies is:",
     "$\\Delta_i H_1(A) > \\Delta_i H_1(B) > \\Delta_i H_1(C)$",
     "$\\Delta_i H_1(C) > \\Delta_i H_1(B) > \\Delta_i H_1(A)$",
     "$\\Delta_i H_1(B) > \\Delta_i H_1(A) > \\Delta_i H_1(C)$",
     "$\\Delta_i H_1(A) = \\Delta_i H_1(B) = \\Delta_i H_1(C)$",
     0, "Ca Sr Ba IE Comparison",
     "$A$ is Calcium ($Z=20$), $B$ is Strontium ($Z=38$), and $C$ is Barium ($Z=56$), which belong to Group 2. Down the group, atomic size increases and IE decreases monotonically: $\\text{Ca} > \\text{Sr} > \\text{Ba}$."),

    # 22 (Q247)
    ("Among transition metal triads, which 3d-4d-5d group exhibits an increase in first ionization enthalpy from $3d$ to $5d$?",
     "Group 10 ($\\text{Ni} < \\text{Pd} < \\text{Pt}$) and Group 11 ($\\text{Cu} < \\text{Ag} < \\text{Au}$)",
     "Group 3 ($\\text{Sc} > \\text{Y} > \\text{La}$)",
     "Group 1 ($\\text{Li} > \\text{Na} > \\text{K}$)",
     "Group 2 ($\\text{Be} > \\text{Mg} > \\text{Ca}$)",
     0, "5d IE Higher than 3d and 4d",
     "In Groups 10 and 11, the $5d$ element (Platinum, Gold) experiences immense relativistic contraction and poor shielding from the 14 intervening $4f$ electrons, making its first ionization enthalpy substantially higher than its $3d$ and $4d$ congeners (e.g., $\\text{Au} = 890\\text{ kJ/mol}$ vs $\\text{Ag} = 731\\text{ kJ/mol}$)."),

    # 23 (Q248)
    ("The ionic radii of trivalent lanthanoids decrease steadily from $\\text{La}^{3+}$ ($103\\text{ pm}$) to $\\text{Lu}^{3+}$ ($86\\text{ pm}$). This contraction causes:",
     "Decrease in basic character of their hydroxides from $\\text{La}(\\text{OH})_3$ to $\\text{Lu}(\\text{OH})_3$",
     "Increase in basic character of their hydroxides from $\\text{La}(\\text{OH})_3$ to $\\text{Lu}(\\text{OH})_3$",
     "No change in chemical behavior",
     "Increase in ionic nature of the $M-\\text{OH}$ bond",
     0, "Lanthanoid Contraction Hydroxide Basicity",
     "As ionic radius decreases from $\\text{La}^{3+}$ to $\\text{Lu}^{3+}$, the covalent character of the $M-\\text{OH}$ bond increases according to Fajan's rules. Consequently, the basic strength decreases from $\\text{La}(\\text{OH})_3$ (most basic) to $\\text{Lu}(\\text{OH})_3$ (least basic)."),

    # 24 (Q249)
    ("For an element with atomic number $Z = 114$ (Flerovium), which subshell electrons are lost first during ionization?",
     "$7p$ electrons",
     "$7s$ electrons",
     "$6d$ electrons",
     "$5f$ electrons",
     0, "Flerovium Ionization",
     "Flerovium has configuration $[\\text{Rn}] 5f^{14} 6d^{10} 7s^2 7p^2$. The $7p$ electrons have the highest principal and azimuthal quantum numbers, the lowest penetration power, and reside in the outermost subshell, so they are lost first during ionization."),

    # 25 (Q250)
    ("In which of the following pairs does the second element have a smaller atomic radius than the first element?",
     "$\\text{Al}$ and $\\text{Ga}$",
     "$\\text{Na}$ and $\\text{K}$",
     "$\\text{F}$ and $\\text{Cl}$",
     "$\\text{N}$ and $\\text{P}$",
     0, "Al vs Ga Reverse Trend",
     "Due to transition metal contraction (poor screening by the $10\\ 3d$ electrons in Gallium), the atomic radius of Gallium ($135\\text{ pm}$) is smaller than that of Aluminium ($143\\text{ pm}$), reversing the standard group expansion trend.")
]

print(f"Loaded {len(easy_items)} Easy items.")
print(f"Loaded {len(med_items)} Medium items.")
print(f"Loaded {len(hard_items)} Hard items.")

assert len(easy_items) == 35
assert len(med_items) == 65
assert len(hard_items) == 25

for idx, item in enumerate(easy_items):
    q_num = 126 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(med_items):
    q_num = 161 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(hard_items):
    q_num = 226 + idx
    q_id = f"period-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 2 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 35
assert med_c == 65
assert hard_c == 25

out_file = "src/data/chapterwise/chemistry/periodicClassificationPart2.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Classification of Elements and Periodicity in Properties | Chemistry | Class: 11 | Part 2
// Target: Exactly 125 MCQs (35 Easy, 65 Medium, 25 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const PERIODIC_CLASSIFICATION_PART2_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
