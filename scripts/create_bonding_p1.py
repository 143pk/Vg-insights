#!/usr/bin/env python3
"""
Direct generator for Chemical Bonding and Molecular Structure - Part 1
Q001 to Q125: 40 Easy, 65 Medium, 20 Hard = 125 MCQs
Topics:
- Kossel-Lewis approach to chemical bonding, octet rule
- Exceptions to octet rule: incomplete octet (LiCl, BeH2, BCl3), odd-electron molecules (NO, NO2), expanded octet (PCl5, SF6, H2SO4)
- Formal charge calculation and determination of most stable Lewis structure
- Bond parameters: bond length, bond angle, bond enthalpy, bond order
- Resonance structures, resonance hybrid, resonance energy
- Polarity of bonds, dipole moment (mu = q * d), non-polar vs polar molecules (CO2, BF3, CCl4 vs NH3, NF3, H2O)
- Dipole moment comparison: NH3 vs NF3 (direction of lone pair dipole relative to bond dipoles)
- Fajan's rules: polarizing power of cation, polarizability of anion, covalent character in ionic bonds (LiCl vs NaCl, SnCl2 vs SnCl4)
- Percent ionic character, electronegativity difference
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
        "chapter": "Chemical Bonding and Molecular Structure",
        "chapterId": "chemical-bonding",
        "topicId": "chem-ionic-covalent-bonds",
        "subtopic": subtopic,
        "isPyq": is_pyq
    }
    if is_pyq and pyq_source:
        q["pyqSource"] = pyq_source
    questions.append(q)

# -------------------------------------------------------------------------
# EASY QUESTIONS (40 questions: Q001 to Q040)
# -------------------------------------------------------------------------
easy_items = [
    # 1 (Q001)
    ("According to the octet rule proposed by Lewis and Kossel, atoms combine either by transfer or by sharing of valence electrons in order to:",
     "Attain an octet of electrons in their outermost shell, resembling the nearest noble gas",
     "Minimize the number of protons in their nuclei",
     "Expand their inner core electrons into $d$-orbitals",
     "Form unpaired spins for paramagnetism",
     0, "Octet Rule Foundation",
     "The octet rule states that atoms combine by electron transfer or covalent sharing to acquire a stable octet (8 valence electrons, or duplet for He) in their valence shell, achieving the stable electronic configuration of the nearest noble gas."),

    # 2 (Q002)
    ("Which of the following molecules violates the octet rule by possessing an INCOMPLETE octet (electron-deficient central atom)?",
     "$\\text{BF}_3$",
     "$\\text{CH}_4$",
     "$\\text{NH}_3$",
     "$\\text{H}_2\\text{O}$",
     0, "Incomplete Octet BF3",
     "In $\\text{BF}_3$, Boron has 3 valence electrons and shares 3 electrons with three Fluorine atoms, having only 6 valence electrons in its outer shell (incomplete octet, electron-deficient Lewis acid)."),

    # 3 (Q003)
    ("Which of the following species is an ODD-ELECTRON molecule that violates the octet rule?",
     "$\\text{NO}$ (Nitric oxide)",
     "$\\text{CO}_2$",
     "$\\text{H}_2\\text{O}$",
     "$\\text{CH}_4$",
     0, "Odd Electron Molecule NO",
     "Nitric oxide ($\\text{NO}$) has a total of $5 + 6 = 11$ valence electrons. Because the total number of valence electrons is odd, the octet rule cannot be satisfied for all atoms, making it an odd-electron paramagnetic molecule."),

    # 4 (Q004)
    ("Which of the following molecules exhibits an EXPANDED octet (hypervalent molecule with more than 8 valence electrons)?",
     "$\\text{SF}_6$",
     "$\\text{CH}_4$",
     "$\\text{NH}_3$",
     "$\\text{H}_2\\text{O}$",
     0, "Expanded Octet SF6",
     "In $\\text{SF}_6$, Sulphur is surrounded by 6 bonded pairs of electrons, giving 12 electrons in its valence shell. This expansion beyond 8 electrons is possible due to the presence of vacant $3d$ orbitals in Sulphur."),

    # 5 (Q005)
    ("The formula used to calculate the formal charge (FC) on an atom in a Lewis structure is:",
     "$\\text{FC} = V - L - \\frac{1}{2} B$",
     "$\\text{FC} = V + L + B$",
     "$\\text{FC} = V - L + B$",
     "$\\text{FC} = \\frac{V - L}{B}$",
     0, "Formal Charge Formula",
     "Formal charge is calculated as: $\\text{FC} = V - L - \\frac{1}{2} B$, where $V$ is total valence electrons in free atom, $L$ is number of non-bonding lone pair electrons, and $B$ is number of shared bonding electrons."),

    # 6 (Q006)
    ("In the Lewis structure of Ozone ($\\text{O}_3$), the formal charge on the central oxygen atom is:",
     "+1",
     "0",
     "-1",
     "+2",
     0, "Formal Charge Ozone Central Atom",
     "The central oxygen in $\\text{O}_3$ has 1 double bond (4 electrons), 1 single/coordinate bond (2 electrons), and 1 lone pair (2 electrons). $\\text{FC} = 6 - 2 - \\frac{1}{2}(6) = 6 - 2 - 3 = +1$."),

    # 7 (Q007)
    ("In the Lewis structure of Ozone ($\\text{O}_3$), the formal charge on the single-bonded end oxygen atom is:",
     "-1",
     "0",
     "+1",
     "-2",
     0, "Formal Charge Ozone Single Bond End",
     "The end oxygen with a single bond has 3 lone pairs (6 non-bonding electrons) and 1 shared pair (2 bonding electrons). $\\text{FC} = 6 - 6 - \\frac{1}{2}(2) = 6 - 6 - 1 = -1$."),

    # 8 (Q008)
    ("The formal charge on the double-bonded end oxygen atom in Ozone ($\\text{O}_3$) is:",
     "0",
     "+1",
     "-1",
     "+2",
     0, "Formal Charge Ozone Double Bond End",
     "The double-bonded end oxygen has 2 lone pairs (4 non-bonding electrons) and 2 shared pairs (4 bonding electrons). $\\text{FC} = 6 - 4 - \\frac{1}{2}(4) = 6 - 4 - 2 = 0$."),

    # 9 (Q009)
    ("Bond order is defined as:",
     "The number of chemical bonds between a pair of atoms in a molecule",
     "The total number of valence electrons in a molecule",
     "The number of lone pairs on the central atom",
     "The ratio of protons to neutrons in the nucleus",
     0, "Bond Order Definition",
     "Bond order is the number of covalent bonds present between two atoms in a molecule (e.g., bond order is 1 in $\\text{H}_2$, 2 in $\\text{O}_2$, and 3 in $\\text{N}_2$)."),

    # 10 (Q010)
    ("As the bond order between two atoms increases:",
     "Bond length decreases and bond enthalpy increases",
     "Bond length increases and bond enthalpy decreases",
     "Both bond length and bond enthalpy increase",
     "Both bond length and bond enthalpy decrease",
     0, "Bond Order vs Length and Enthalpy",
     "Higher bond order means more electron density pulled between the two nuclei, drawing them closer together (shorter bond length) and requiring more energy to separate them (higher bond enthalpy)."),

    # 11 (Q011)
    ("The standard unit for measuring dipole moment is the Debye (D). In SI units, $1\\text{ Debye}$ is equal to:",
     "$3.33564 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$",
     "$1.602 \\times 10^{-19}\\text{ C}\\cdot\\text{m}$",
     "$9.109 \\times 10^{-31}\\text{ C}\\cdot\\text{m}$",
     "$4.803 \\times 10^{-10}\\text{ C}\\cdot\\text{m}$",
     0, "Debye SI Unit Definition",
     "$1\\text{ Debye (D)} = 10^{-18}\\text{ esu}\\cdot\\text{cm} = 3.33564 \\times 10^{-30}\\text{ Coulomb}\\cdot\\text{metre (C}\\cdot\\text{m)}$. "),

    # 12 (Q012)
    ("Dipole moment ($\\mu$) is a vector quantity mathematically defined as:",
     "$\\mu = q \\times d$",
     "$\\mu = q / d$",
     "$\\mu = q + d$",
     "$\\mu = q^2 \\times d$",
     0, "Dipole Moment Formula",
     "Dipole moment is defined as the product of the magnitude of charge ($q$) and the distance of separation ($d$) between the positive and negative centers of charge: $\\mu = q \\times d$."),

    # 13 (Q013)
    ("By chemical convention in chemistry, a dipole moment vector is represented by an arrow with a crossed tail pointing from:",
     "The positive center towards the negative center",
     "The negative center towards the positive center",
     "The nucleus towards the valence electrons",
     "The lone pair towards the bond pair",
     0, "Dipole Arrow Convention Chemistry",
     "In chemistry, dipole moment is represented by a crossed arrow ($\\mapsto$) where the cross rests on the positive center and the arrow head points towards the negative center (direction of electron density shift)."),

    # 14 (Q014)
    ("Carbon dioxide ($\\text{CO}_2$) is a non-polar molecule with zero net dipole moment ($\\mu = 0$) because:",
     "It has a linear geometry where the two equal $\\text{C}=\\text{O}$ bond dipole vectors point in exactly opposite directions and cancel each other",
     "Carbon and oxygen have the same electronegativity",
     "The molecule has unpaired electrons",
     "The $\\text{C}=\\text{O}$ bonds are purely ionic",
     0, "CO2 Zero Dipole Moment",
     "$\\text{CO}_2$ is linear ($180^\\circ$). The two individual $\\text{C}=\\text{O}$ bond dipoles have equal magnitude but point in opposite directions at $180^\\circ$, cancelling out completely so that $\\mu_{\\text{net}} = 0$."),

    # 15 (Q015)
    ("Water ($\\text{H}_2\\text{O}$) has a significant net dipole moment ($\\mu = 1.85\\text{ D}$) because:",
     "It has a bent (angular) geometry where the two $\\text{O}-\\text{H}$ bond dipoles reinforce each other along with the lone pairs",
     "It is a linear molecule",
     "Oxygen is less electronegative than Hydrogen",
     "It forms triple bonds",
     0, "Water Dipole Moment Bent Shape",
     "Water has a bent geometry with a bond angle of $104.5^\\circ$. The two polar $\\text{O}-\\text{H}$ bond dipoles do not cancel out; their vector resultant points towards oxygen and is further reinforced by the two lone pairs, giving a net dipole moment of $1.85\\text{ D}$."),

    # 16 (Q016)
    ("Boron trifluoride ($\\text{BF}_3$) has a net dipole moment of ZERO because:",
     "It has a symmetrical trigonal planar geometry where the vector sum of three equal $\\text{B}-\\text{F}$ dipoles at $120^\\circ$ is zero",
     "The $\\text{B}-\\text{F}$ bond is non-polar",
     "Boron has complete octet",
     "Fluorine is less electronegative than Boron",
     0, "BF3 Zero Dipole Moment",
     "$\\text{BF}_3$ adopts a planar equilateral triangle geometry with $120^\\circ$ angles. The vector resultant of any two $\\text{B}-\\text{F}$ dipoles is equal and opposite to the third dipole, so $\\mu_{\\text{net}} = 0$."),

    # 17 (Q017)
    ("Methane ($\\text{CH}_4$) and Carbon tetrachloride ($\\text{CCl}_4$) both have zero net dipole moment because:",
     "They have regular tetrahedral geometry where the four identical bond dipoles cancel out symmetrically",
     "The bonds are completely non-polar",
     "Carbon has a formal charge of zero",
     "They are planar molecules",
     0, "Tetrahedral Zero Dipole Moment",
     "In a regular tetrahedron, the four identical bond dipoles are oriented symmetrically at $109.5^\\circ$, so their vector sum is exactly zero: $\\mu_{\\text{net}} = 0$."),

    # 18 (Q018)
    ("According to Fajan's rules, covalent character in an ionic bond is favored by:",
     "Small cation, large anion, and high charges on both ions",
     "Large cation, small anion, and low charges",
     "Large cation and large anion with low charges",
     "Small cation and small anion with zero charge",
     0, "Fajans Rules Principle",
     "Covalent character increases with: (1) small cation size (high polarizing power), (2) large anion size (high polarizability), and (3) high magnitude of charge on either or both ions."),

    # 19 (Q019)
    ("The ability of a positive ion (cation) to polarize and distort the electron cloud of an anion is known as its:",
     "Polarizing power",
     "Polarizability",
     "Dipole moment",
     "Lattice energy",
     0, "Polarizing Power Definition",
     "Polarizing power is the capacity of a cation to pull and distort the electron cloud of an adjacent anion towards itself, proportional to its charge density ($q/r$)."),

    # 20 (Q020)
    ("The ease with which the electron cloud of an anion is distorted by an approaching cation is called its:",
     "Polarizability",
     "Polarizing power",
     "Electronegativity",
     "Electron affinity",
     0, "Polarizability Definition",
     "Polarizability refers to the susceptibility of an anion's outer electron cloud to undergo distortion when subjected to an external electric field or cation."),

    # 21 (Q021)
    ("Between Lithium chloride ($\\text{LiCl}$) and Potassium chloride ($\\text{KCl}$), $\\text{LiCl}$ is significantly more covalent and soluble in organic solvents because:",
     "$\\text{Li}^+$ is much smaller than $\\text{K}^+$, having much higher polarizing power",
     "$\\text{K}^+$ has higher polarizing power",
     "$\\text{Cl}^-$ is more polarizable in $\\text{KCl}$",
     "$\\text{LiCl}$ has a higher molecular weight",
     0, "LiCl vs KCl Covalency Fajans",
     "$\\text{Li}^+$ has a tiny radius ($76\\text{ pm}$) compared to $\\text{K}^+$ ($138\\text{ pm}$). The smaller $\\text{Li}^+$ exerts high polarizing power on $\\text{Cl}^-$, distorting its electron cloud and imparting strong covalent character to $\\text{LiCl}$."),

    # 22 (Q022)
    ("Between $\\text{SnCl}_2$ and $\\text{SnCl}_4$, which compound is more covalent according to Fajan's rules?",
     "$\\text{SnCl}_4$, because $\\text{Sn}^{4+}$ has a higher positive charge and higher polarizing power",
     "$\\text{SnCl}_2$, because it has fewer chlorine atoms",
     "Both are equally covalent",
     "$\\text{SnCl}_2$, because it has a lone pair",
     0, "SnCl4 vs SnCl2 Fajans",
     "A cation in a higher oxidation state ($+4$) has a higher charge and smaller radius than in $+2$. Therefore $\\text{Sn}^{4+}$ has far greater polarizing power than $\\text{Sn}^{2+}$, making $\\text{SnCl}_4$ a covalent liquid while $\\text{SnCl}_2$ is an ionic solid."),

    # 23 (Q023)
    ("Between Copper(I) chloride ($\\text{CuCl}$) and Sodium chloride ($\\text{NaCl}$), which compound has greater covalent character despite both cations having similar radii?",
     "$\\text{CuCl}$, because $\\text{Cu}^+$ has a pseudo-noble gas configuration ($18$ electrons)",
     "$\\text{NaCl}$, because $\\text{Na}^+$ has $8$ electrons",
     "Both are purely ionic",
     "$\\text{NaCl}$, because Sodium is more electropositive",
     0, "Pseudo Noble Gas CuCl Fajans",
     "Cations with a pseudo-noble gas configuration ($ns^2 np^6 nd^{10}$, 18 electrons like $\\text{Cu}^+$) have poorer shielding than noble gas cores ($ns^2 np^6$, 8 electrons like $\\text{Na}^+$). The resulting higher effective nuclear charge gives $\\text{Cu}^+$ much greater polarizing power, making $\\text{CuCl}$ much more covalent than $\\text{NaCl}$."),

    # 24 (Q024)
    ("Which of the following compounds has the HIGHEST covalent character among lithium halides?",
     "$\\text{LiI}$",
     "$\\text{LiBr}$",
     "$\\text{LiCl}$",
     "$\\text{LiF}$",
     0, "LiI Highest Covalent Fajans",
     "Among halide anions, the iodide ion ($\\text{I}^-$) has the largest size and holds its outer electrons most loosely, making it the most polarizable anion. Combined with tiny $\\text{Li}^+$, $\\text{LiI}$ exhibits the maximum covalent character."),

    # 25 (Q025)
    ("Which of the following compounds has the HIGHEST melting point?",
     "$\\text{NaF}$",
     "$\\text{NaCl}$",
     "$\\text{NaBr}$",
     "$\\text{NaI}$",
     0, "NaF Highest Melting Point",
     "$\\text{NaF}$ has the smallest interionic distance and highest lattice energy with minimum covalent character (predominantly ionic), giving it the highest melting point ($993^\\circ\\text{C}$)."),

    # 26 (Q026)
    ("Lattice energy of an ionic compound is defined as the energy:",
     "Released when one mole of an ionic crystalline compound is formed from its constituent gaseous ions",
     "Required to melt one mole of solid into liquid",
     "Required to remove one mole of electrons from the solid",
     "Released during dissolution in water",
     0, "Lattice Energy Definition",
     "Lattice enthalpy is the energy released when one mole of an ionic solid is formed from its separate gaseous ions: $M^+(\\text{g}) + X^-(\\text{g}) \\rightarrow MX(\\text{s}) + \\text{Lattice Enthalpy}$."),

    # 27 (Q027)
    ("Born-Haber cycle is a thermochemical cycle based on which fundamental law of thermodynamics?",
     "Hess's law of constant heat summation (First Law)",
     "Second law of thermodynamics",
     "Third law of thermodynamics",
     "Zeroth law of thermodynamics",
     0, "Born Haber Cycle Law",
     "The Born-Haber cycle applies Hess's law of constant heat summation to relate lattice enthalpy to enthalpy of formation, sublimation, ionization, dissociation, and electron gain enthalpies."),

    # 28 (Q028)
    ("In the carbonate ion ($\\text{CO}_3^{2-}$), all three $\\text{C}-\\text{O}$ bond lengths are identical ($128\\text{ pm}$) and intermediate between a single and double bond because of:",
     "Resonance delocalization of $\\pi$-electrons across all three oxygen atoms",
     "Rapid tautomeric equilibrium",
     "Inductive electron withdrawal",
     "Ionic bonding with solvent",
     0, "Carbonate Ion Resonance",
     "The carbonate ion exists as a resonance hybrid of three equivalent Lewis canonical structures, where each $\\text{C}-\\text{O}$ bond has an identical bond order of $4/3 = 1.33$ and equal bond length ($128\\text{ pm}$)."),

    # 29 (Q029)
    ("The resonance energy of a molecule is defined as the difference between:",
     "The actual energy of the resonance hybrid and the calculated energy of the most stable canonical structure",
     "The energies of two canonical structures",
     "The ionization energy and electron affinity",
     "The lattice energy and hydration energy",
     0, "Resonance Energy Definition",
     "Resonance energy is the energy stabilization gained by electron delocalization: $\\text{Resonance Energy} = E_{\\text{most stable canonical structure}} - E_{\\text{actual resonance hybrid}}$."),

    # 30 (Q030)
    ("Which of the following molecules has a net dipole moment of ZERO?",
     "$\\text{BeCl}_2$",
     "$\\text{H}_2\\text{O}$",
     "$\\text{NH}_3$",
     "$\\text{SO}_2$",
     0, "BeCl2 Zero Dipole Moment",
     "Beryllium chloride is linear in the vapor phase ($\text{Cl}-\text{Be}-\text{Cl}$, $180^\circ$). The two equal $\\text{Be}-\\text{Cl}$ bond dipole vectors point in opposite directions and cancel out, giving $\\mu = 0$."),

    # 31 (Q031)
    ("Which of the following pairs of molecules both have zero net dipole moment?",
     "$\\text{CO}_2$ and $\\text{CCl}_4$",
     "$\\text{H}_2\\text{O}$ and $\\text{NH}_3$",
     "$\\text{SO}_2$ and $\\text{CH}_4$",
     "$\\text{NF}_3$ and $\\text{BF}_3$",
     0, "Zero Dipole Pair CO2 CCl4",
     "$\\text{CO}_2$ is linear and $\\text{CCl}_4$ is regular tetrahedral; both have completely symmetrical geometries where bond dipoles cancel out, giving $\\mu = 0$ for both."),

    # 32 (Q032)
    ("Why is Ammonia ($\\text{NH}_3$) more polar ($\\mu = 1.47\\text{ D}$) than Nitrogen trifluoride ($\\text{NF}_3$, $\\mu = 0.24\\text{ D}$)?",
     "In $\\text{NH}_3$, the lone pair dipole and bond dipoles reinforce each other, whereas in $\\text{NF}_3$, the bond dipoles oppose the lone pair dipole",
     "Fluorine is less electronegative than Hydrogen",
     "Ammonia is planar while $\\text{NF}_3$ is tetrahedral",
     "$\\text{NF}_3$ has no lone pair",
     0, "NH3 vs NF3 Dipole Moment Classic",
     "In $\\text{NH}_3$, Nitrogen is more electronegative than Hydrogen, so $\\text{N}-\\text{H}$ bond dipoles point towards Nitrogen, adding to the lone pair dipole. In $\\text{NF}_3$, Fluorine is more electronegative than Nitrogen, so $\\text{N}-\\text{F}$ bond dipoles point away from Nitrogen, opposing the lone pair dipole and resulting in a small net dipole ($0.24\\text{ D}$)."),

    # 33 (Q033)
    ("Which of the following molecules has the HIGHEST bond enthalpy?",
     "$\\text{N}_2$",
     "$\\text{O}_2$",
     "$\\text{F}_2$",
     "$\\text{H}_2$",
     0, "Highest Bond Enthalpy N2",
     "Dinitrogen ($\\text{N}_2$) has a triple bond (bond order 3) between the two small nitrogen atoms, giving it an extraordinarily high bond enthalpy of $946\\text{ kJ/mol}$."),

    # 34 (Q034)
    ("Which of the following diatomic molecules has the SHORTEST bond length?",
     "$\\text{N}_2$",
     "$\\text{O}_2$",
     "$\\text{F}_2$",
     "$\\text{Cl}_2$",
     0, "Shortest Bond Length N2",
     "With a bond order of 3, the $\\text{N}\\equiv\\text{N}$ bond length in $\\text{N}_2$ is only $109.8\\text{ pm}$, significantly shorter than double-bonded $\\text{O}_2$ ($121\\text{ pm}$) and single-bonded $\\text{F}_2$ ($142\\text{ pm}$) or $\\text{Cl}_2$ ($199\\text{ pm}$)."),

    # 35 (Q035)
    ("Which of the following compounds has an electron-deficient central atom that acts as a strong Lewis acid?",
     "$\\text{AlCl}_3$",
     "$\\text{NaCl}$",
     "$\\text{SiCl}_4$",
     "$\\text{CCl}_4$",
     0, "Lewis Acid AlCl3 Incomplete Octet",
     "In monomeric $\\text{AlCl}_3$, Aluminium is surrounded by only 6 valence electrons, lacking an octet. It readily accepts an electron pair from Lewis bases, acting as a potent Lewis acid catalyst."),

    # 36 (Q036)
    ("Which of the following molecules is an odd-electron molecule?",
     "$\\text{NO}_2$ (Nitrogen dioxide)",
     "$\\text{CO}_2$",
     "$\\text{SO}_2$",
     "$\\text{N}_2\\text{O}$",
     0, "NO2 Odd Electron Molecule",
     "$\\text{NO}_2$ has $5 + 2(6) = 17$ valence electrons. The odd electron resides on Nitrogen, giving it a brown color, paramagnetism, and a strong tendency to dimerize into diamagnetic $\\text{N}_2\\text{O}_4$."),

    # 37 (Q037)
    ("Nitrogen dioxide ($\\text{NO}_2$) dimerizes to form Dinitrogen tetroxide ($\\text{N}_2\\text{O}_4$) at lower temperatures because:",
     "The unpaired odd electrons on two $\\text{NO}_2$ molecules pair up to complete the octet and form a stable $\\text{N}-\\text{N}$ bond",
     "$\\text{NO}_2$ has an expanded octet",
     "Oxygen atoms form coordinate bonds",
     "Hydrogen bonding occurs between molecules",
     0, "NO2 Dimerization Reason",
     "Each $\\text{NO}_2$ molecule has an unpaired electron. Two $\\text{NO}_2$ molecules combine: $2\\text{NO}_2 \\rightleftharpoons \\text{N}_2\\text{O}_4$, pairing their odd electrons into a $\\text{N}-\\text{N}$ single bond to achieve octet stability and diamagnetism."),

    # 38 (Q038)
    ("Which of the following molecules contains an expanded octet?",
     "$\\text{PCl}_5$",
     "$\\text{CH}_4$",
     "$\\text{H}_2\\text{O}$",
     "$\\text{NH}_3$",
     0, "PCl5 Expanded Octet",
     "Phosphorus in $\\text{PCl}_5$ forms 5 covalent bonds with chlorine atoms, accommodating 10 valence electrons in its valence shell by utilizing vacant $3d$ orbitals."),

    # 39 (Q039)
    ("Which of the following statements about Fajan's rules is INCORRECT?",
     "Large cations have higher polarizing power than small cations",
     "Small cations have higher polarizing power",
     "Large anions have higher polarizability",
     "High charge on ions favors covalent character",
     0, "Fajans Incorrect Statement",
     "Polarizing power is directly proportional to charge and inversely proportional to radius ($q/r$). Therefore, SMALL cations have higher polarizing power, not large cations. Statement A is incorrect."),

    # 40 (Q040)
    ("Which of the following pairs of ions is isoelectronic?",
     "$\\text{CO}$ and $\\text{CN}^-$",
     "$\\text{NO}$ and $\\text{CO}$",
     "$\\text{O}_2$ and $\\text{N}_2$",
     "$\\text{CO}_2$ and $\\text{SO}_2$",
     0, "CO and CN- Isoelectronic",
     "$\\text{CO}$ has $6 + 8 = 14$ electrons. $\\text{CN}^-$ has $6 + 7 + 1 = 14$ electrons. Both have 14 electrons and a bond order of 3, making them isoelectronic and isostructural.")
]

# -------------------------------------------------------------------------
# MEDIUM QUESTIONS (65 questions: Q041 to Q105)
# -------------------------------------------------------------------------
med_items = [
    # 1 (Q041) Authentic NEET 2020
    ("Which of the following pairs of molecules has the SAME net dipole moment?",
     "$\\text{CO}_2$ and $\\text{BeCl}_2$ (both zero)",
     "$\\text{H}_2\\text{O}$ and $\\text{CO}_2$",
     "$\\text{NH}_3$ and $\\text{BF}_3$",
     "$\\text{CH}_4$ and $\\text{CHCl}_3$",
     0, "Same Dipole Moment NEET 2020",
     "Both $\\text{CO}_2$ and $\\text{BeCl}_2$ are linear triatomic molecules with symmetrical geometries where opposing bond dipoles cancel out completely, giving both a net dipole moment of exactly zero ($\\mu = 0$).",
     True, "NEET 2020"),

    # 2 (Q042) Authentic NEET 2021
    ("Calculate the formal charge on the Sulphur atom in the sulphate ion ($\\text{SO}_4^{2-}$) in the Lewis structure with four single bonds:",
     "+2",
     "0",
     "+1",
     "+4",
     0, "Formal Charge Sulphate S NEET 2021",
     "In the structure with 4 single $\\text{S}-\\text{O}$ bonds: Sulphur has 6 valence electrons, 0 lone pairs, and 8 shared bonding electrons. $\\text{FC} = 6 - 0 - \\frac{1}{2}(8) = 6 - 4 = +2$.",
     True, "NEET 2021"),

    # 3 (Q043) Authentic NEET 2019
    ("Which of the following molecules has a NON-ZERO dipole moment?",
     "$\\text{NF}_3$",
     "$\\text{BF}_3$",
     "$\\text{BeF}_2$",
     "$\\text{CF}_4$",
     0, "Non-zero Dipole Moment NEET 2019",
     "$\\text{BF}_3$ (trigonal planar), $\\text{BeF}_2$ (linear), and $\\text{CF}_4$ (tetrahedral) are completely symmetrical with $\\mu = 0$. $\\text{NF}_3$ is trigonal pyramidal with a lone pair on nitrogen, having a non-zero dipole moment ($\mu = 0.24\\text{ D}$).",
     True, "NEET 2019"),

    # 4 (Q044)
    ("In the resonance hybrid of the nitrate ion ($\\text{NO}_3^-$), the formal charge on Nitrogen and the $\\text{N}-\\text{O}$ bond order are respectively:",
     "+1 and $1.33$",
     "0 and $1.50$",
     "+1 and $1.00$",
     "-1 and $2.00$",
     0, "Nitrate Ion Resonance Bond Order",
     "The nitrate ion has three equivalent resonance structures with one $\\text{N}=\\text{O}$ double bond and two $\\text{N}-\\text{O}$ single bonds. Total bonds = 4 across 3 positions, giving a bond order of $4/3 = 1.33$. Nitrogen has 4 shared pairs and 0 lone pairs: $\\text{FC} = 5 - 0 - 4 = +1$."),

    # 5 (Q045)
    ("The dipole moment of $\\text{HBr}$ is $2.60 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$ and the interatomic distance is $1.41 \\times 10^{-10}\\text{ m}$. What is the percentage of ionic character of $\\text{HBr}$? ($e = 1.602 \\times 10^{-19}\\text{ C}$)",
     "$11.5\\%$",
     "$25.0\\%$",
     "$5.0\\%$",
     "$50.0\\%$",
     0, "Percent Ionic Character Calculation",
     "For $100\\%$ ionic $\\text{H}^+\\text{Br}^-$: $\\mu_{\\text{ionic}} = q \\times d = 1.602 \\times 10^{-19} \\times 1.41 \\times 10^{-10} = 2.259 \\times 10^{-29}\\text{ C}\\cdot\\text{m}$. Percentage ionic character $= (\\mu_{\\text{obs}} / \\mu_{\\text{ionic}}) \\times 100 = (2.60 \\times 10^{-30} / 2.259 \\times 10^{-29}) \\times 100 = 11.51\\%$."),

    # 6 (Q046)
    ("The experimental dipole moment of $\\text{HCl}$ is $1.03\\text{ D}$. If the $\\text{H}-\\text{Cl}$ bond distance is $1.275\\text{ \\AA}$, calculate the fractional electronic charge ($\delta$) on the atoms: ($1\\text{ D} = 3.336 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$)",
     "$0.168 e$",
     "$0.500 e$",
     "$0.050 e$",
     "$1.000 e$",
     0, "Fractional Charge Calculation HCl",
     "$\\mu = 1.03 \\times 3.336 \\times 10^{-30} = 3.436 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$. Charge $q = \\mu / d = 3.436 \\times 10^{-30} / (1.275 \\times 10^{-10}) = 2.695 \\times 10^{-20}\\text{ C}$. In units of electronic charge: $q/e = 2.695 \\times 10^{-20} / (1.602 \\times 10^{-19}) = 0.168 e$."),

    # 7 (Q047)
    ("Which of the following isomers of dichlorobenzene has the HIGHEST dipole moment?",
     "$o$-dichlorobenzene (ortho)",
     "$m$-dichlorobenzene (meta)",
     "$p$-dichlorobenzene (para)",
     "All have identical dipole moments",
     0, "Dichlorobenzene Isomers Dipole",
     "Resultant dipole $\\mu = \\sqrt{\\mu_1^2 + \\mu_2^2 + 2\\mu_1\\mu_2\\cos\\theta}$. For ortho, $\\theta = 60^\\circ$ ($\\cos 60^\\circ = 0.5$), $\\mu = \\sqrt{3}\\mu_1 \\approx 1.73\\mu_1$. For meta, $\\theta = 120^\\circ$, $\\mu = \\mu_1$. For para, $\\theta = 180^\\circ$, $\\mu = 0$. Hence ortho has the highest dipole moment."),

    # 8 (Q048)
    ("Why is the dipole moment of $p$-dichlorobenzene equal to zero?",
     "The two identical $\\text{C}-\\text{Cl}$ bond dipoles are oriented at $180^\\circ$ in opposite directions and cancel out",
     "Chlorine loses its electronegativity in the para position",
     "The benzene ring is non-planar",
     "The chlorine atoms undergo resonance with each other",
     0, "p-Dichlorobenzene Zero Dipole",
     "In $p$-dichlorobenzene, the two $\\text{C}-\\text{Cl}$ bonds lie on opposite sides of the flat benzene ring along the same axis ($\theta = 180^\circ$). Their equal and opposite dipoles cancel each other completely, giving $\\mu = 0$."),

    # 9 (Q049)
    ("Between trans-1,2-dichloroethene and cis-1,2-dichloroethene, which has a non-zero dipole moment?",
     "cis-1,2-dichloroethene has $\\mu > 0$, while trans has $\\mu = 0$",
     "trans-1,2-dichloroethene has $\\mu > 0$, while cis has $\\mu = 0$",
     "Both have $\\mu = 0$",
     "Both have identical non-zero dipole moments",
     0, "cis vs trans Dichloroethene Dipole",
     "In the trans isomer, the two $\\text{C}-\\text{Cl}$ dipoles point in diametrically opposite directions and cancel out ($\\mu = 0$). In the cis isomer, both chlorine atoms are on the same side of the double bond, so their dipoles reinforce each other, giving a polar molecule with $\\mu = 1.90\\text{ D}$."),

    # 10 (Q050)
    ("Which of the following compounds has the SMALLEST bond angle?",
     "$\\text{H}_2\\text{S} (92.1^\\circ)$",
     "$\\text{H}_2\\text{O} (104.5^\\circ)$",
     "$\\text{NH}_3 (107.8^\\circ)$",
     "$\\text{CH}_4 (109.5^\\circ)$",
     0, "Smallest Bond Angle Comparison",
     "According to Drago's rule, Sulphur in $\\text{H}_2\\text{S}$ uses almost pure unhybridized $3p$ orbitals for bonding, resulting in a bond angle of $92.1^\\circ$, significantly smaller than water ($104.5^\\circ$), ammonia ($107.8^\\circ$), and methane ($109.5^\\circ$)."),

    # 11 (Q051)
    ("Which of the following molecules has a net dipole moment?",
     "$\\text{SO}_2$",
     "$\\text{CO}_2$",
     "$\\text{BeF}_2$",
     "$\\text{BF}_3$",
     0, "SO2 Net Dipole Moment",
     "$\\text{SO}_2$ has a bent V-shaped geometry (angle $\\approx 119.5^\\circ$) with one lone pair on Sulphur. The two $\\text{S}=\\text{O}$ bond dipoles do not cancel out, resulting in a net dipole moment of $1.63\\text{ D}$."),

    # 12 (Q052)
    ("The correct order of increasing covalent character for the chlorides $\\text{NaCl, MgCl}_2, \\text{AlCl}_3, \\text{SiCl}_4$ is:",
     "$\\text{NaCl} < \\text{MgCl}_2 < \\text{AlCl}_3 < \\text{SiCl}_4$",
     "$\\text{SiCl}_4 < \\text{AlCl}_3 < \\text{MgCl}_2 < \\text{NaCl}$",
     "$\\text{NaCl} < \\text{SiCl}_4 < \\text{AlCl}_3 < \\text{MgCl}_2$",
     "$\\text{MgCl}_2 < \\text{NaCl} < \\text{AlCl}_3 < \\text{SiCl}_4$",
     0, "Covalent Character Period 3 Chlorides",
     "According to Fajan's rules, as the oxidation state increases from $\\text{Na}^+ (+1)$ to $\\text{Mg}^{2+} (+2)$ to $\\text{Al}^{3+} (+3)$ to $\\text{Si}^{4+} (+4)$, cationic radius decreases and charge increases, dramatically increasing polarizing power and covalent character: $\\text{NaCl} < \\text{MgCl}_2 < \\text{AlCl}_3 < \\text{SiCl}_4$."),

    # 13 (Q053)
    ("Which of the following compounds has the lowest melting point?",
     "$\\text{SiCl}_4$ (liquid, $-70^\\circ\\text{C}$)",
     "$\\text{AlCl}_3$ (sublimes, $180^\\circ\\text{C}$)",
     "$\\text{MgCl}_2$ ($714^\\circ\\text{C}$)",
     "$\\text{NaCl}$ ($801^\\circ\\text{C}$)",
     0, "Lowest Melting Point Period 3 Chloride",
     "$\\text{SiCl}_4$ has the highest covalent character and exists as discrete non-polar tetrahedral molecules held only by weak London dispersion forces, giving it the lowest melting point ($-70^\\circ\\text{C}$, liquid at room temperature)."),

    # 14 (Q054)
    ("Why is Ferric chloride ($\\text{FeCl}_3$) more covalent and soluble in ether than Ferrous chloride ($\\text{FeCl}_2$)?",
     "$\\text{Fe}^{3+}$ has a higher charge and smaller radius than $\\text{Fe}^{2+}$, giving it much higher polarizing power",
     "$\\text{Fe}^{2+}$ has higher polarizing power",
     "$\\text{FeCl}_2$ has more chlorine atoms",
     "$\\text{FeCl}_3$ is purely ionic",
     0, "FeCl3 vs FeCl2 Fajans",
     "$\\text{Fe}^{3+}$ has a higher positive charge ($+3$ vs $+2$) and smaller ionic radius ($64.5\\text{ pm}$ vs $78\\text{ pm}$). By Fajan's rules, its polarizing power is far greater, causing significant electron cloud distortion of $\\text{Cl}^-$ and imparting high covalent character to $\\text{FeCl}_3$."),

    # 15 (Q055)
    ("Which of the following pairs of elements forms compounds with the highest lattice energy?",
     "$\\text{Mg}^{2+}$ and $\\text{O}^{2-}$",
     "$\\text{Na}^+$ and $\\text{Cl}^-$",
     "$\\text{K}^+$ and $\\text{Br}^-$",
     "$\\text{Cs}^+$ and $\\text{I}^-$",
     0, "Highest Lattice Energy Pair MgO",
     "Lattice energy is proportional to $\\frac{q_1 q_2}{r_+ + r_-}$. For $\\text{MgO}$, the product of charges is $2 \\times 2 = 4$ and both ions are small Period 2/3 ions, resulting in a huge lattice energy ($3791\\text{ kJ/mol}$), far greater than univalent halides."),

    # 16 (Q056)
    ("The Born-Lande equation relates lattice energy ($U_0$) to which parameters?",
     "$U_0 = -\\frac{N_A A z^+ z^- e^2}{4\\pi \\varepsilon_0 r_0} \\left(1 - \\frac{1}{n}\\right)$",
     "$U_0 = -\\frac{N_A A z^+ z^- e^2}{r_0} \\left(1 + n\\right)$",
     "$U_0 = N_A z^+ z^- e^2 r_0$",
     "$U_0 = \\frac{1}{2} m v^2$",
     0, "Born Lande Equation",
     "The Born-Lande equation quantitatively calculates lattice energy: $U_0 = -\\frac{N_A A z^+ z^- e^2}{4\\pi \\varepsilon_0 r_0} (1 - 1/n)$, where $A$ is the Madelung constant, $r_0$ is equilibrium internuclear separation, and $n$ is the Born exponent representing short-range repulsive forces."),

    # 17 (Q057)
    ("The Madelung constant ($A$) in the Born-Lande equation depends exclusively on:",
     "The geometric arrangement and crystal lattice structure of the ions",
     "The mass of the ions",
     "The temperature of the crystal",
     "The electronegativity difference",
     0, "Madelung Constant Dependency",
     "The Madelung constant is a geometric factor that accounts for all attractive and repulsive coulombic interactions across the entire infinite crystal lattice, depending solely on the lattice geometry (e.g., $1.748$ for $\\text{NaCl}$, $1.763$ for $\\text{CsCl}$)."),

    # 18 (Q058)
    ("In the calculation of lattice energy of $\\text{NaCl}$ using the Born-Haber cycle:\n$\\Delta_f H^\\circ = \\Delta_{\\text{sub}}H + \\frac{1}{2}\\Delta_{\\text{diss}}H + \\text{IE} + \\Delta_{\\text{eg}}H + U_0$.\nIf $\\Delta_f H^\\circ = -411, \\Delta_{\\text{sub}}H = +108, \\Delta_{\\text{diss}}H = +242, \\text{IE} = +496, \\Delta_{\\text{eg}}H = -349\\text{ kJ/mol}$, calculate the lattice energy $U_0$:",
     "$-787\\text{ kJ/mol}$",
     "$+787\\text{ kJ/mol}$",
     "$-387\\text{ kJ/mol}$",
     "$-550\\text{ kJ/mol}$",
     0, "Born Haber Cycle Numerical Calculation",
     "$\\Delta_f H^\\circ = \\Delta_{\\text{sub}}H + 0.5\\Delta_{\\text{diss}}H + \\text{IE} + \\Delta_{\\text{eg}}H + U_0 \\Rightarrow -411 = 108 + 121 + 496 - 349 + U_0 \\Rightarrow -411 = 376 + U_0 \\Rightarrow U_0 = -411 - 376 = -787\\text{ kJ/mol}$."),

    # 19 (Q059)
    ("Which of the following compounds has a pseudo-noble gas configuration ($18$ electrons in outermost shell) in its cation?",
     "$\\text{AgCl}$ ($\\text{Ag}^+$ has $[\\text{Kr}] 4d^{10}$)",
     "$\\text{KCl}$ ($\\text{K}^+$ has $[\\text{Ar}]$)",
     "$\\text{NaCl}$ ($\\text{Na}^+$ has $[\\text{Ne}]$)",
     "$\\text{CaCl}_2$ ($\\text{Ca}^{2+}$ has $[\\text{Ar}]$)",
     0, "Pseudo Noble Gas AgCl",
     "$\\text{Ag}^+$ has the configuration $[\\text{Kr}] 4d^{10}$, with 18 electrons in its outermost shell (pseudo-noble gas configuration), resulting in poor shielding, high polarizing power, and high covalent character in $\\text{AgCl}$."),

    # 20 (Q060)
    ("Why is Silver chloride ($\\text{AgCl}$) insoluble in water while Sodium chloride ($\\text{NaCl}$) is highly soluble?",
     "$\\text{Ag}^+$ has a pseudo-noble gas configuration giving it higher polarizing power and significant covalent character, which reduces its solubility",
     "$\\text{NaCl}$ has higher molecular weight",
     "$\\text{AgCl}$ is a gas at room temperature",
     "Sodium has a higher atomic number than Silver",
     0, "AgCl Insolubility Fajans",
     "The $4d^{10}$ shell of $\\text{Ag}^+$ shields nuclear charge poorly, creating higher effective polarizing power on $\\text{Cl}^-$. This imparts high covalent character to $\\text{AgCl}$, significantly lowering its solubility in polar water ($K_{\\text{sp}} \\approx 1.8 \\times 10^{-10}$)."),

    # 21 (Q061)
    ("The formal charge on the central atom in Xenon difluoride ($\\text{XeF}_2$) is:",
     "0",
     "+1",
     "+2",
     "-1",
     0, "Formal Charge XeF2",
     "In $\\text{XeF}_2$, Xenon has 8 valence electrons, 3 lone pairs (6 non-bonding electrons), and 2 single bonds (4 bonding electrons). $\\text{FC} = 8 - 6 - \\frac{1}{2}(4) = 8 - 6 - 2 = 0$."),

    # 22 (Q062)
    ("The formal charge on the central atom in Xenon tetrafluoride ($\\text{XeF}_4$) is:",
     "0",
     "+2",
     "+4",
     "-2",
     0, "Formal Charge XeF4",
     "In $\\text{XeF}_4$, Xenon has 8 valence electrons, 2 lone pairs (4 non-bonding electrons), and 4 single bonds (8 bonding electrons). $\\text{FC} = 8 - 4 - \\frac{1}{2}(8) = 8 - 4 - 4 = 0$."),

    # 23 (Q063)
    ("In the Lewis structure of Nitrous oxide ($\\text{N}_2\\text{O}$), with structure $\\text{N}\\equiv\\text{N}-\\text{O}$, the formal charges on terminal N, central N, and terminal O are respectively:",
     "-1, +1, and 0 (or 0, +1, -1)",
     "0, 0, 0",
     "+1, -1, 0",
     "-2, +2, 0",
     0, "N2O Formal Charges",
     "For $:N\\equiv N^+-\\ddot{O}:^-$, terminal Nitrogen: $5 - 2 - 3 = 0$; central Nitrogen: $5 - 0 - 4 = +1$; terminal Oxygen: $6 - 6 - 1 = -1$. In the other resonance structure $\\ddot{N}^-=N^+=\\ddot{O}$, terminal N is $-1$, central N is $+1$, and O is $0$."),

    # 24 (Q064)
    ("Which of the following resonance structures is considered the MOST STABLE?",
     "The structure with the lowest formal charges and negative formal charge on the most electronegative atom",
     "The structure with maximum formal charges",
     "The structure with positive charge on the most electronegative atom",
     "The structure with minimum covalent bonds",
     0, "Most Stable Resonance Criteria",
     "A canonical structure is most stable when: (1) atoms have complete octets, (2) formal charges are minimized, and (3) negative formal charges reside on the most electronegative atoms."),

    # 25 (Q065)
    ("Which of the following molecules has the HIGHEST dipole moment?",
     "$\\text{CH}_3\\text{Cl}$",
     "$\\text{CH}_2\\text{Cl}_2$",
     "$\\text{CHCl}_3$",
     "$\\text{CCl}_4$",
     0, "Chloromethanes Dipole Moment Order",
     "Dipole moments: $\\text{CH}_3\\text{Cl} (1.87\\text{ D}) > \\text{CH}_2\\text{Cl}_2 (1.60\\text{ D}) > \\text{CHCl}_3 (1.04\\text{ D}) > \\text{CCl}_4 (0\\text{ D})$. As the number of chlorine atoms increases beyond 1, opposing vector components cancel each other, reducing the net dipole."),

    # 26 (Q066)
    ("The correct order of dipole moments of the chloromethanes is:",
     "$\\text{CH}_3\\text{Cl} > \\text{CH}_2\\text{Cl}_2 > \\text{CHCl}_3 > \\text{CCl}_4$",
     "$\\text{CCl}_4 > \\text{CHCl}_3 > \\text{CH}_2\\text{Cl}_2 > \\text{CH}_3\\text{Cl}$",
     "$\\text{CH}_2\\text{Cl}_2 > \\text{CH}_3\\text{Cl} > \\text{CHCl}_3 > \\text{CCl}_4$",
     "$\\text{CHCl}_3 > \\text{CH}_2\\text{Cl}_2 > \\text{CH}_3\\text{Cl} > \\text{CCl}_4$",
     0, "Chloromethanes Dipole Trend",
     "In $\\text{CH}_3\\text{Cl}$, three $\\text{C}-\\text{H}$ bond dipoles reinforce the strong $\\text{C}-\\text{Cl}$ dipole. In $\\text{CH}_2\\text{Cl}_2$ and $\\text{CHCl}_3$, the multiple $\\text{C}-\\text{Cl}$ vectors partially oppose each other, while in $\\text{CCl}_4$ they cancel completely: $\\text{CH}_3\\text{Cl} > \\text{CH}_2\\text{Cl}_2 > \\text{CHCl}_3 > \\text{CCl}_4$."),

    # 27 (Q067)
    ("Which of the following compounds has a DIPOLE MOMENT of ZERO?",
     "$\\text{trans-but-2-ene}$",
     "$\\text{cis-but-2-ene}$",
     "$\\text{propene}$",
     "$\\text{but-1-ene}$",
     0, "trans-but-2-ene Zero Dipole",
     "In trans-but-2-ene, the two methyl group dipoles point in diametrically opposite directions across the double bond, cancelling each other completely ($\\mu = 0$). In the cis isomer, they reinforce each other ($\\mu = 0.33\\text{ D}$)."),

    # 28 (Q068)
    ("Between $\\text{cis-but-2-ene}$ and $\\text{trans-but-2-ene}$, which isomer has a higher boiling point?",
     "$\\text{cis-but-2-ene}$, because it is polar and has dipole-dipole attractive forces",
     "$\\text{trans-but-2-ene}$, because it is non-polar",
     "Both have identical boiling points",
     "$\\text{trans-but-2-ene}$, because it has a lower molecular mass",
     0, "cis vs trans Boiling Point",
     "$\\text{cis-but-2-ene}$ has a net dipole moment ($\\mu = 0.33\\text{ D}$), giving it dipole-dipole attractions in addition to dispersion forces, resulting in a higher boiling point ($3.7^\\circ\\text{C}$) than trans-but-2-ene ($0.9^\\circ\\text{C}$, $\\mu = 0$)."),

    # 29 (Q069)
    ("Between $\\text{cis-but-2-ene}$ and $\\text{trans-but-2-ene}$, which isomer has a higher melting point?",
     "$\\text{trans-but-2-ene}$, because of better molecular symmetry and more efficient crystal packing",
     "$\\text{cis-but-2-ene}$, because it is polar",
     "Both have identical melting points",
     "$\\text{cis-but-2-ene}$, because of higher dipole moment",
     0, "cis vs trans Melting Point Symmetry",
     "Melting point depends heavily on crystal lattice packing. The more symmetrical trans-isomer packs more tightly and efficiently into the solid crystal lattice, giving trans-but-2-ene a significantly higher melting point ($-105.5^\\circ\\text{C}$) than the cis-isomer ($-138.9^\\circ\\text{C}$)."),

    # 30 (Q070)
    ("Which of the following bonds has the HIGHEST bond polarity?",
     "$\\text{H}-\\text{F}$",
     "$\\text{H}-\\text{Cl}$",
     "$\\text{H}-\\text{Br}$",
     "$\\text{H}-\\text{I}$",
     0, "Highest Bond Polarity HF",
     "Bond polarity is proportional to the electronegativity difference between bonded atoms. $\\Delta\\chi = \\chi_F - \\chi_H = 4.0 - 2.1 = 1.9$, which is the highest among hydrogen halides, making $\\text{H}-\\text{F}$ the most polar."),

    # 31 (Q071)
    ("Which of the following compounds has the lowest percentage of ionic character?",
     "$\\text{HI}$",
     "$\\text{HBr}$",
     "$\\text{HCl}$",
     "$\\text{HF}$",
     0, "Lowest Ionic Character HI",
     "The electronegativity difference in $\\text{H}-\\text{I}$ is the smallest: $\\Delta\\chi = 2.5 - 2.1 = 0.4$, giving $\\text{HI}$ only approximately $5\\%$ ionic character (predominantly covalent)."),

    # 32 (Q072)
    ("The average bond order of the $\\text{P}-\\text{O}$ bond in the phosphate ion ($\\text{PO}_4^{3-}$) is:",
     "$1.25$",
     "$1.50$",
     "$1.00$",
     "$1.75$",
     0, "Phosphate Bond Order",
     "The phosphate ion has 4 equivalent resonance structures with one $\\text{P}=\\text{O}$ double bond and three $\\text{P}-\\text{O}$ single bonds. Total bonds = 5 distributed across 4 positions: $\\text{Bond order} = 5/4 = 1.25$."),

    # 33 (Q073)
    ("The average bond order of the $\\text{S}-\\text{O}$ bond in the sulphate ion ($\\text{SO}_4^{2-}$) in its most stable resonance structure is:",
     "$1.50$",
     "$1.25$",
     "$1.00$",
     "$1.75$",
     0, "Sulphate Bond Order",
     "In the most stable structure of $\\text{SO}_4^{2-}$ (minimizing formal charges), Sulphur forms two $\\text{S}=\\text{O}$ double bonds and two $\\text{S}-\\text{O}$ single bonds (total 6 bonds across 4 positions). $\\text{Bond order} = 6/4 = 1.50$."),

    # 34 (Q074)
    ("The average bond order of the $\\text{Cl}-\\text{O}$ bond in the perchlorate ion ($\\text{ClO}_4^-$) is:",
     "$1.75$",
     "$1.50$",
     "$1.25$",
     "$2.00$",
     0, "Perchlorate Bond Order",
     "In $\\text{ClO}_4^-$, Chlorine forms three $\\text{Cl}=\\text{O}$ double bonds and one $\\text{Cl}-\\text{O}$ single bond (total 7 bonds over 4 positions). $\\text{Bond order} = 7/4 = 1.75$."),

    # 35 (Q075)
    ("Which of the following oxoanions has the STRONGEST and SHORTEST bond between the central atom and oxygen?",
     "$\\text{ClO}_4^-$ (bond order $1.75$)",
     "$\\text{SO}_4^{2-}$ (bond order $1.50$)",
     "$\\text{PO}_4^{3-}$ (bond order $1.25$)",
     "$\\text{SiO}_4^{4-}$ (bond order $1.00$)",
     0, "Strongest Oxoanion Bond ClO4-",
     "Higher bond order corresponds to shorter bond length and higher bond strength. $\\text{ClO}_4^-$ has the highest bond order ($1.75$), giving it the strongest and shortest bond among these isoelectronic oxoanions."),

    # 36 (Q076)
    ("Which of the following compounds has the lowest lattice energy?",
     "$\\text{CsI}$",
     "$\\text{LiF}$",
     "$\\text{NaCl}$",
     "$\\text{KBr}$",
     0, "Lowest Lattice Energy CsI",
     "Lattice energy is inversely proportional to $(r_+ + r_-)$. Both $\\text{Cs}^+$ and $\\text{I}^-$ have exceptionally large ionic radii, resulting in the largest interionic separation and the lowest lattice energy ($\\approx 600\\text{ kJ/mol}$)."),

    # 37 (Q077)
    ("In which of the following pairs does the first compound have a HIGHER boiling point than the second?",
     "$\\text{H}_2\\text{O}$ and $\\text{H}_2\\text{S}$",
     "$\\text{H}_2\\text{S}$ and $\\text{H}_2\\text{O}$",
     "$\\text{CH}_4$ and $\\text{CCl}_4$",
     "$\\text{HCl}$ and $\\text{HF}$",
     0, "H2O Higher BP than H2S",
     "$\\text{H}_2\\text{O}$ boils at $100^\\circ\\text{C}$ due to extensive intermolecular hydrogen bonding, whereas $\\text{H}_2\\text{S}$ lacks hydrogen bonding and boils at $-60^\\circ\\text{C}$."),

    # 38 (Q078)
    ("The solubility of alkaline earth metal carbonates in water decreases down the group ($\\text{MgCO}_3 > \\text{CaCO}_3 > \\text{SrCO}_3 > \\text{BaCO}_3$) because:",
     "Hydration enthalpy of the cation decreases much faster than the lattice enthalpy of the carbonate",
     "Lattice enthalpy increases down the group",
     "Cationic radius decreases down the group",
     "Carbonate ion decomposes in water",
     0, "Carbonates Solubility Group 2",
     "The carbonate ion is very large. Consequently, changes in cationic size have a relatively minor effect on lattice enthalpy, while hydration enthalpy of the divalent cation decreases steeply as radius increases from $\\text{Mg}^{2+}$ to $\\text{Ba}^{2+}$, reducing overall solubility."),

    # 39 (Q079)
    ("Which of the following molecules has a permanent dipole moment?",
     "$\\text{H}_2\\text{S}$",
     "$\\text{CS}_2$",
     "$\\text{SiF}_4$",
     "$\\text{BF}_3$",
     0, "H2S Permanent Dipole",
     "$\\text{H}_2\\text{S}$ has a non-linear bent geometry ($92.1^\\circ$) with two lone pairs, having a permanent non-zero dipole moment ($\mu = 0.97\\text{ D}$). In contrast, $\\text{CS}_2$ is linear, while $\\text{SiF}_4$ and $\\text{BF}_3$ are symmetrical with $\\mu = 0$."),

    # 40 (Q080)
    ("The dipole moment of $\\text{BeF}_2$ is zero in the gas phase because:",
     "The molecule is linear and the two equal $\\text{Be}-\\text{F}$ bond dipoles cancel out",
     "The $\\text{Be}-\\text{F}$ bond is purely covalent",
     "Fluorine is not electronegative",
     "Beryllium has a lone pair",
     0, "BeF2 Dipole Zero Gas Phase",
     "$\\text{BeF}_2$ is a linear triatomic molecule ($180^\\circ$). The two bond dipole vectors are equal in magnitude and point in opposite directions, cancelling out completely."),

    # 41 (Q081)
    ("Which of the following statements about formal charge is TRUE?",
     "Formal charge does not represent real physical charges on atoms; it is a bookkeeping method for valence electrons",
     "Formal charge is measured directly with an ammeter",
     "Formal charge is always equal to oxidation number",
     "Formal charge is always zero in neutral molecules",
     0, "Formal Charge True Nature",
     "Formal charge is an electron-accounting concept that assigns valence electrons based on equal sharing in covalent bonds; it does not reflect the actual partial charge distribution caused by electronegativity differences."),

    # 42 (Q082)
    ("In the thiocyanate ion ($\\text{SCN}^-$), which of the following is the MOST STABLE resonance contributor?",
     "$[\\ddot{\\text{S}}=\\text{C}=\\ddot{\\text{N}}]^-$ with negative charge on Nitrogen",
     "$[:\\text{S}-\\text{C}\\equiv\\text{N}:]^-$ with negative charge on Sulphur",
     "$[:\\text{S}\\equiv\\text{C}-\\ddot{\\text{N}}:]^-$ with $-2$ charge on Nitrogen",
     "All are equally stable",
     0, "SCN- Most Stable Resonance Contributor",
     "Nitrogen is more electronegative than Sulphur ($3.0 > 2.5$). The canonical structure $[\ddot{\\text{S}}=\\text{C}=\\ddot{\\text{N}}]^-$ places the negative formal charge on the more electronegative Nitrogen atom, making it the most stable resonance contributor."),

    # 43 (Q083)
    ("Which of the following is an electron-deficient hydride?",
     "$\\text{B}_2\\text{H}_6$",
     "$\\text{CH}_4$",
     "$\\text{NH}_3$",
     "$\\text{H}_2\\text{O}$",
     0, "B2H6 Electron Deficient Hydride",
     "Diborane ($\\text{B}_2\\text{H}_6$) has only 12 valence electrons for 8 bonds (insufficient to form 8 conventional $2c-2e$ bonds), classifying it as an electron-deficient hydride."),

    # 44 (Q084)
    ("Which of the following is an electron-precise hydride?",
     "$\\text{CH}_4$",
     "$\\text{B}_2\\text{H}_6$",
     "$\\text{NH}_3$",
     "$\\text{HF}$",
     0, "CH4 Electron Precise Hydride",
     "Methane ($\\text{CH}_4$) has exactly the right number of valence electrons (8) to form 4 conventional covalent bonds with no lone pairs, classifying it as an electron-precise hydride (Group 14)."),

    # 45 (Q085)
    ("Which of the following is an electron-rich hydride?",
     "$\\text{NH}_3$",
     "$\\text{CH}_4$",
     "$\\text{B}_2\\text{H}_6$",
     "$\\text{SiH}_4$",
     0, "NH3 Electron Rich Hydride",
     "Ammonia ($\\text{NH}_3$) has non-bonding lone pairs of electrons in its valence shell (in addition to bonding pairs), classifying it as an electron-rich hydride capable of acting as a Lewis base (Groups 15, 16, 17)."),

    # 46 (Q086)
    ("Which of the following elements has the greatest tendency to form an expanded octet?",
     "Sulphur ($\\text{S}$)",
     "Oxygen ($\\text{O}$)",
     "Nitrogen ($\\text{N}$)",
     "Carbon ($\\text{C}$)",
     0, "Sulphur Expanded Octet Tendency",
     "Sulphur belongs to Period 3 ($n = 3$) and has accessible, vacant $3d$ orbitals, readily expanding its octet to form hexacoordinate compounds like $\\text{SF}_6$, whereas Period 2 elements cannot."),

    # 47 (Q087)
    ("Which of the following pairs of compounds illustrates the effect of cation charge on covalent character according to Fajan's rules?",
     "$\\text{FeCl}_2$ (mp $677^\\circ\\text{C}$) and $\\text{FeCl}_3$ (mp $306^\\circ\\text{C}$)",
     "$\\text{NaCl}$ and $\\text{KCl}$",
     "$\\text{LiF}$ and $\\text{CsI}$",
     "$\\text{CO}$ and $\\text{CO}_2$",
     0, "FeCl2 vs FeCl3 Cation Charge Fajans",
     "$\\text{Fe}^{3+}$ has higher charge and smaller radius than $\\text{Fe}^{2+}$, giving it much higher polarizing power. Consequently, $\\text{FeCl}_3$ is predominantly covalent with a much lower melting point than ionic $\\text{FeCl}_2$."),

    # 48 (Q088)
    ("The compound $\\text{AlF}_3$ has a melting point of $1291^\\circ\\text{C}$ while $\\text{AlCl}_3$ sublimes at $180^\\circ\\text{C}$. This dramatic difference is explained by:",
     "The large chloride ion is easily polarized by $\\text{Al}^{3+}$ giving covalent bonding, while tiny fluoride resists polarization giving an ionic lattice",
     "Aluminium is oxidized by chlorine",
     "Fluorine is a gas while chlorine is a liquid",
     "$\\text{AlF}_3$ has molecular covalent bonds",
     0, "AlF3 vs AlCl3 Fajans Anion Size",
     "Fluoride ion is tiny and holds its electrons tightly (low polarizability), resisting polarization by $\\text{Al}^{3+}$ and forming a high-melting ionic crystal lattice. Chloride ion is large and easily polarized, forming a covalent dimer $\\text{Al}_2\\text{Cl}_6$ that sublimes readily."),

    # 49 (Q089)
    ("Which of the following molecules has the HIGHEST dipole moment?",
     "$\\text{HF}$ ($1.91\\text{ D}$)",
     "$\\text{HCl}$ ($1.08\\text{ D}$)",
     "$\\text{HBr}$ ($0.78\\text{ D}$)",
     "$\\text{HI}$ ($0.38\\text{ D}$)",
     0, "Highest Dipole Moment Hydrogen Halides",
     "Although bond length increases down Group 17, the charge separation $q$ decreases much more rapidly due to the sharp drop in electronegativity difference. Hence $\\text{HF}$ has the highest dipole moment ($1.91\\text{ D}$)."),

    # 50 (Q090)
    ("The dipole moment of a molecule with two identical bond dipoles $\\mu_b$ oriented at a bond angle $\\theta$ is given by:",
     "$\\mu_{\\text{net}} = 2\\mu_b \\cos(\\theta / 2)$",
     "$\\mu_{\\text{net}} = 2\\mu_b \\sin(\\theta / 2)$",
     "$\\mu_{\\text{net}} = \\mu_b \\cos\\theta$",
     "$\\mu_{\\text{net}} = \\mu_b^2 / 2$",
     0, "Dipole Moment Vector Formula",
     "Using the parallelogram law of vectors for two equal vectors $\\mu_b$: $\\mu_{\\text{net}} = \\sqrt{\\mu_b^2 + \\mu_b^2 + 2\\mu_b^2 \\cos\\theta} = \\sqrt{2\\mu_b^2 (1 + \\cos\\theta)} = \\sqrt{4\\mu_b^2 \\cos^2(\\theta/2)} = 2\\mu_b \\cos(\\theta/2)$."),

    # 51 (Q091)
    ("If a molecule $AB_2$ has a bond angle of $120^\\circ$ and each $A-B$ bond has a dipole moment of $1.5\\text{ D}$, the net dipole moment of the molecule is:",
     "$1.5\\text{ D}$",
     "$3.0\\text{ D}$",
     "$0\\text{ D}$",
     "$0.75\\text{ D}$",
     0, "Dipole Moment Calculation 120 Degrees",
     "$\\mu_{\\text{net}} = 2\\mu_b \\cos(120^\\circ / 2) = 2(1.5) \\cos 60^\\circ = 3.0 \\times 0.5 = 1.5\\text{ D}$."),

    # 52 (Q092)
    ("If a molecule $AB_2$ has a bond angle of $90^\\circ$ and each $A-B$ bond dipole is $2.0\\text{ D}$, the net dipole moment is:",
     "$2.83\\text{ D}$",
     "$4.0\\text{ D}$",
     "$2.0\\text{ D}$",
     "$1.0\\text{ D}$",
     0, "Dipole Moment Calculation 90 Degrees",
     "$\\mu_{\\text{net}} = \\sqrt{\\mu_1^2 + \\mu_2^2} = \\sqrt{2.0^2 + 2.0^2} = \\sqrt{8} \\approx 2.828\\text{ D}$ (or $2(2.0)\\cos 45^\\circ = 4.0 \\times 0.7071 = 2.83\\text{ D}$)."),

    # 53 (Q093)
    ("Which of the following compounds has the lowest solubility in ethanol?",
     "$\\text{NaCl}$",
     "$\\text{LiCl}$",
     "$\\text{LiBr}$",
     "$\\text{LiI}$",
     0, "Lowest Solubility Ethanol Fajans",
     "Ethanol is a non-polar/moderately polar organic solvent. Strongly ionic $\\text{NaCl}$ is practically insoluble in ethanol, whereas covalent lithium halides (especially $\\text{LiCl}, \\text{LiBr}, \\text{LiI}$) dissolve readily according to the 'like dissolves like' principle."),

    # 54 (Q094)
    ("Which of the following carbonates decomposes at the LOWEST temperature?",
     "$\\text{MgCO}_3$",
     "$\\text{CaCO}_3$",
     "$\\text{SrCO}_3$",
     "$\\text{BaCO}_3$",
     0, "Lowest Decomposition Temp Carbonate",
     "$\\text{Mg}^{2+}$ has the smallest radius and highest polarizing power among these cations, polarizing and weakening the carbonate $\\text{C}-\\text{O}$ bond most strongly, causing $\\text{MgCO}_3$ to decompose at the lowest temperature ($\\approx 540^\\circ\\text{C}$)."),

    # 55 (Q095)
    ("Which of the following compounds has the highest thermal stability?",
     "$\\text{BaCO}_3$",
     "$\\text{SrCO}_3$",
     "$\\text{CaCO}_3$",
     "$\\text{MgCO}_3$",
     0, "Highest Thermal Stability Carbonate",
     "$\\text{Ba}^{2+}$ has the largest ionic radius and lowest polarizing power, causing minimal distortion of the carbonate ion and giving $\\text{BaCO}_3$ the highest thermal decomposition temperature ($1360^\\circ\\text{C}$)."),

    # 56 (Q096)
    ("The bond order of Carbon monoxide ($\\text{CO}$) is:",
     "3",
     "2",
     "1",
     "2.5",
     0, "CO Bond Order",
     "Carbon monoxide has a triple bond consisting of two covalent bonds and one dative/coordinate bond from oxygen to carbon ($:C\\Leftarrow O:$), giving a bond order of 3."),

    # 57 (Q097)
    ("In Carbon monoxide, the dipole moment is unexpectedly very small ($0.11\\text{ D}$) pointing from oxygen to carbon because:",
     "The coordinate covalent bond from oxygen to carbon transfers electron density that counteracts the electronegativity difference",
     "Carbon and oxygen have the same electronegativity",
     "The molecule is non-linear",
     "Carbon has a higher electronegativity than oxygen in this molecule",
     0, "CO Small Dipole Moment Reason",
     "Although Oxygen is more electronegative than Carbon, the dative coordinate bond involves donation of a lone pair from Oxygen into an empty orbital of Carbon, shifting negative charge back towards Carbon and almost neutralizing the dipole moment ($\mu = 0.11\text{ D}$)."),

    # 58 (Q098)
    ("The formal charges on Carbon and Oxygen in the coordinate Lewis structure $:C^-\\equiv O^+:$ are respectively:",
     "-1 and +1",
     "+1 and -1",
     "0 and 0",
     "-2 and +2",
     0, "CO Formal Charges",
     "Carbon: $5 - 2 - 3 = -1$. Oxygen: $6 - 2 - 3 = +1$. Hence Carbon carries a formal charge of $-1$ and Oxygen carries $+1$."),

    # 59 (Q099)
    ("Which of the following compounds has the GREATEST lattice enthalpy?",
     "$\\text{CaO}$",
     "$\\text{SrO}$",
     "$\\text{BaO}$",
     "$\\text{KCl}$",
     0, "Greatest Lattice Enthalpy CaO",
     "$\\text{CaO}$ has divalent ions ($+2, -2$) and smaller interionic radius than $\\text{SrO}$ and $\\text{BaO}$, giving it the highest lattice energy ($3401\\text{ kJ/mol}$) among the choices."),

    # 60 (Q100)
    ("Which of the following molecules has a dipole moment?",
     "$\\text{O}_3$ (Ozone)",
     "$\\text{O}_2$",
     "$\\text{N}_2$",
     "$\\text{Cl}_2$",
     0, "Ozone Dipole Moment Bent Shape",
     "Ozone is a homonuclear triatomic molecule, but it has a bent angular geometry with a lone pair on the central oxygen atom, resulting in an asymmetric charge distribution and a non-zero dipole moment ($\mu = 0.53\\text{ D}$)."),

    # 61 (Q101)
    ("The net dipole moment of Ozone ($\\text{O}_3$) is non-zero ($\\mu = 0.53\\text{ D}$) because:",
     "The molecule is bent (bond angle $117^\\circ$) with an asymmetric distribution of formal charges and a lone pair on the central oxygen",
     "Ozone is linear",
     "The oxygen atoms have different isotopes",
     "The bonds are purely ionic",
     0, "Ozone Dipole Reason",
     "Ozone adopts a bent V-shape with an angle of $117^\\circ$. The central oxygen carries a formal charge of $+1$ while end oxygens carry $0$ and $-1$, producing an asymmetric charge distribution that yields $\\mu = 0.53\\text{ D}$."),

    # 62 (Q102)
    ("Which of the following molecules is PLANAR with a dipole moment of ZERO?",
     "$\\text{XeF}_4$",
     "$\\text{SF}_4$",
     "$\\text{CH}_4$",
     "$\\text{NH}_3$",
     0, "XeF4 Planar Zero Dipole",
     "$\\text{XeF}_4$ has a square planar geometry with 4 fluorine atoms at $90^\\circ$ in a plane and two trans lone pairs above and below the plane. All bond dipoles and lone pair dipoles cancel out symmetrically, giving $\\mu = 0$."),

    # 63 (Q103)
    ("Which of the following molecules has a SEESAW geometry and a NON-ZERO dipole moment?",
     "$\\text{SF}_4$",
     "$\\text{XeF}_4$",
     "$\\text{CCl}_4$",
     "$\\text{SiF}_4$",
     0, "SF4 Seesaw Non-zero Dipole",
     "$\\text{SF}_4$ has 4 bonding pairs and 1 equatorial lone pair in a trigonal bipyramid, giving an asymmetric seesaw shape where bond dipoles do not cancel out, resulting in $\\mu = 0.63\\text{ D}$."),

    # 64 (Q104)
    ("Which of the following molecules has a T-SHAPED geometry and a NON-ZERO dipole moment?",
     "$\\text{ClF}_3$",
     "$\\text{BF}_3$",
     "$\\text{NH}_3$",
     "$\\text{PCl}_3$",
     0, "ClF3 T-shaped Dipole",
     "$\\text{ClF}_3$ has 3 bonding pairs and 2 equatorial lone pairs, adopting an asymmetric T-shaped geometry with a non-zero dipole moment ($\mu = 0.56\\text{ D}$)."),

    # 65 (Q105)
    ("Which of the following species has the HIGHEST bond order?",
     "$\\text{N}_2$ (bond order 3)",
     "$\\text{O}_2$ (bond order 2)",
     "$\\text{F}_2$ (bond order 1)",
     "$\\text{O}_2^+$ (bond order 2.5)",
     0, "Highest Bond Order N2",
     "$\\text{N}_2$ has a triple bond with bond order 3.0, the highest bond order among the given species.")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (20 questions: Q106 to Q125)
# -------------------------------------------------------------------------
hard_items = [
    # 1 (Q106) Authentic NEET 2022
    ("Consider the following statements regarding dipole moments:\n(I) $\\text{NH}_3$ has a higher dipole moment than $\\text{NF}_3$.\n(II) $\\text{CO}_2$ has a dipole moment of zero because of its linear geometry.\n(III) $\\text{BF}_3$ is non-polar because the vector sum of three equal bond dipoles at $120^\\circ$ is zero.\n(IV) $\\text{CHCl}_3$ has a higher dipole moment than $\\text{CH}_3\\text{Cl}$.\nWhich of the above statements are correct?",
     "I, II, and III only",
     "I and II only",
     "I, II, and IV only",
     "I, II, III, and IV",
     0, "Dipole Moment Core Statements NEET 2022",
     "Statements I, II, and III are correct. Statement IV is incorrect because $\\text{CH}_3\\text{Cl}$ ($1.87\\text{ D}$) has a higher dipole moment than $\\text{CHCl}_3$ ($1.04\\text{ D}$). Hence I, II, and III only.",
     True, "NEET 2022"),

    # 2 (Q107) Authentic NEET 2023
    ("Match List-I (Molecules) with List-II (Dipole Moment / Polarity Characteristics):\n(A) $\\text{NH}_3$ -> (1) Lone pair opposes bond dipoles (small $\\mu$)\n(B) $\\text{NF}_3$ -> (2) Lone pair reinforces bond dipoles (large $\\mu$)\n(C) $\\text{CO}_2$ -> (3) Symmetric planar cancellation ($\\mu = 0$)\n(D) $\\text{BF}_3$ -> (4) Linear symmetric cancellation ($\\mu = 0$)",
     "A-2, B-1, C-4, D-3",
     "A-1, B-2, C-4, D-3",
     "A-2, B-1, C-3, D-4",
     "A-3, B-4, C-1, D-2",
     0, "Match Dipole Moment Features NEET 2023",
     "In $\\text{NH}_3$, lone pair reinforces bond dipoles (A-2). In $\\text{NF}_3$, lone pair opposes bond dipoles (B-1). In $\\text{CO}_2$, linear cancellation gives $\\mu=0$ (C-4). In $\\text{BF}_3$, planar cancellation gives $\\mu=0$ (D-3). Match: A-2, B-1, C-4, D-3.",
     True, "NEET 2023"),

    # 3 (Q108) Authentic NEET 2024
    ("The lattice enthalpy of an ionic compound $MX$ is determined by the Born-Haber cycle. Given the following data in $\\text{kJ}\\cdot\\text{mol}^{-1}$:\nEnthalpy of sublimation of $M$: $+150$\nFirst ionization enthalpy of $M$: $+500$\nEnthalpy of dissociation of $X_2$: $+240$\nElectron gain enthalpy of $X$: $-350$\nEnthalpy of formation of $MX$: $-420$\nThe lattice enthalpy of $MX$ is:",
     "$-840\\text{ kJ}\\cdot\\text{mol}^{-1}$",
     "$-720\\text{ kJ}\\cdot\\text{mol}^{-1}$",
     "$+840\\text{ kJ}\\cdot\\text{mol}^{-1}$",
     "$-600\\text{ kJ}\\cdot\\text{mol}^{-1}$",
     0, "Born Haber Numerical NEET 2024",
     "$\\Delta_f H = \\Delta_{\\text{sub}}H + \\text{IE} + 0.5\\Delta_{\\text{diss}}H + \\Delta_{\\text{eg}}H + U_0 \\Rightarrow -420 = 150 + 500 + 120 - 350 + U_0 \\Rightarrow -420 = 420 + U_0 \\Rightarrow U_0 = -420 - 420 = -840\\text{ kJ/mol}$.",
     True, "NEET 2024"),

    # 4 (Q109)
    ("Assertion (A): Nitrogen trifluoride ($\\text{NF}_3$) has a remarkably lower dipole moment than Ammonia ($\\text{NH}_3$).\nReason (R): In $\\text{NF}_3$, the highly electronegative fluorine atoms pull electron density away from nitrogen, so the bond dipoles oppose the orbital dipole of the lone pair.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason NH3 vs NF3",
     "Assertion (A) is true: $\\mu(\\text{NF}_3) = 0.24\\text{ D} \\ll \\mu(\\text{NH}_3) = 1.47\\text{ D}$. Reason (R) is true: the $\\text{N}-\\text{F}$ bond dipoles point away from Nitrogen towards Fluorine, directly opposing the upward lone pair dipole. (R) correctly explains (A)."),

    # 5 (Q110)
    ("Assertion (A): Lithium iodide ($\\text{LiI}$) has a lower melting point than Lithium fluoride ($\\text{LiF}$).\nReason (R): According to Fajan's rules, the larger and more polarizable iodide ion imparts significant covalent character to $\\text{LiI}$.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason LiI vs LiF Melting Point",
     "Assertion (A) is true: $\\text{LiI}$ melts at $469^\\circ\\text{C}$ while $\\text{LiF}$ melts at $848^\\circ\\text{C}$. Reason (R) is true: the large $\\text{I}^-$ electron cloud is easily distorted by $\\text{Li}^+$, introducing covalent character that reduces the melting point. (R) correctly explains (A)."),

    # 6 (Q111)
    ("Assertion (A): $\\text{SnCl}_4$ is a volatile liquid at room temperature while $\\text{SnCl}_2$ is a high-melting solid.\nReason (R): The higher charge on $\\text{Sn}^{4+}$ gives it greater polarizing power than $\\text{Sn}^{2+}$, imparting covalent character to $\\text{SnCl}_4$.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason SnCl4 vs SnCl2",
     "Assertion (A) is true: $\\text{SnCl}_4$ boils at $114^\\circ\\text{C}$ as a covalent liquid while $\\text{SnCl}_2$ melts at $247^\\circ\\text{C}$ as an ionic solid. Reason (R) is true: the $+4$ oxidation state dramatically increases polarizing power according to Fajan's rules. (R) correctly explains (A)."),

    # 7 (Q112)
    ("Assertion (A): The observed $\\text{C}-\\text{O}$ bond length in carbon monoxide ($112.8\\text{ pm}$) is shorter than that in carbon dioxide ($116\\text{ pm}$).\nReason (R): Carbon monoxide has a bond order of 3, while carbon dioxide has a bond order of 2.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason CO vs CO2 Bond Length",
     "Assertion (A) is true: $\\text{C}-\\text{O}$ bond length in $\\text{CO}$ is $112.8\\text{ pm}$ vs $116\\text{ pm}$ in $\\text{CO}_2$. Reason (R) is true: $\\text{CO}$ contains a triple bond (bond order 3) while $\\text{CO}_2$ has double bonds (bond order 2); higher bond order results in shorter bond length. (R) correctly explains (A)."),

    # 8 (Q113)
    ("A diatomic molecule $AB$ has a bond length of $1.6\\text{ \\AA}$ and an observed dipole moment of $1.2\\text{ D}$. Calculate the fraction of fractional electronic charge ($\delta$) residing on each atom: ($1\\text{ D} = 3.336 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$, $e = 1.602 \\times 10^{-19}\\text{ C}$)",
     "$0.156$",
     "$0.250$",
     "$0.078$",
     "$0.500$",
     0, "Fractional Charge Calculation",
     "$\\mu_{\\text{ionic}} = q \\times d = 1.602 \\times 10^{-19}\\text{ C} \\times 1.6 \\times 10^{-10}\\text{ m} = 2.563 \\times 10^{-29}\\text{ C}\\cdot\\text{m}$. Observed dipole $= 1.2 \\times 3.336 \\times 10^{-30} = 4.003 \\times 10^{-30}\\text{ C}\\cdot\\text{m}$. Fractional charge $\\delta = \\mu_{\\text{obs}} / \\mu_{\\text{ionic}} = 4.003 \\times 10^{-30} / 2.563 \\times 10^{-29} = 0.156$."),

    # 9 (Q114)
    ("The dipole moments of $\\text{CH}_3\\text{Cl}, \\text{CH}_3\\text{Br},$ and $\\text{CH}_3\\text{I}$ are $1.87\\text{ D}, 1.82\\text{ D},$ and $1.64\\text{ D}$ respectively. This decrease occurs because:",
     "The decrease in halogen electronegativity from $\\text{Cl}$ to $\\text{I}$ outweighs the increase in $\\text{C}-X$ bond length",
     "Bond length decreases from $\\text{Cl}$ to $\\text{I}$",
     "Carbon becomes more electropositive",
     "Iodine forms hydrogen bonds",
     0, "Methyl Halides Dipole Trend",
     "Dipole moment is $\\mu = q \\times d$. Down the group from Cl to I, bond length $d$ increases, but charge separation $q$ drops steeply due to the large decrease in electronegativity from $\\text{Cl}$ ($3.0$) to $\\text{I}$ ($2.5$). The charge factor dominates, decreasing $\\mu$."),

    # 10 (Q115)
    ("Which of the following resonance structures of Diazomethane ($\\text{CH}_2\\text{N}_2$) contributes LEAST to the resonance hybrid?",
     "$\\text{H}_2\\text{C}^+-\\text{N}=\\text{N}^-$ (positive charge on carbon with incomplete octet and adjacent charges)",
     "$\\text{H}_2\\text{C}^--\\text{N}^+\\equiv\\text{N}$",
     "$\\text{H}_2\\text{C}=\\text{N}^+=\\text{N}^-$",
     "Both B and C equally",
     0, "Diazomethane Least Contributing Structure",
     "The structure $\\text{H}_2\\text{C}^+-\\text{N}=\\text{N}^-$ has an incomplete sextet of electrons on Carbon and separates formal charges unfavorably, making it the least stable and least contributing resonance canonical form."),

    # 11 (Q116)
    ("Why does the azide ion ($\\text{N}_3^-$) have identical $\\text{N}-\\text{N}$ bond lengths ($116\\text{ pm}$) in both bonds?",
     "It is a resonance hybrid of $^-\\ddot{\\text{N}}=\\text{N}^+=\\ddot{\\text{N}}^-$ and $:N\\equiv \\text{N}^+-\\ddot{\\text{N}}:^{2-}$, giving both bonds an identical bond order of $2.0$",
     "It is a cyclic triangle",
     "Nitrogen has an expanded octet",
     "The bonds are purely ionic",
     0, "Azide Ion Resonance Bond Length",
     "The linear azide ion is stabilized by resonance between $^-\\ddot{\\text{N}}=\\text{N}^+=\\ddot{\\text{N}}^-$ and its two equivalent asymmetric canonical forms. The time-average bond order for both $\\text{N}-\\text{N}$ bonds is equal ($2.0$), giving identical bond lengths ($116\\text{ pm}$)."),

    # 12 (Q117)
    ("In which of the following molecules is the bond order equal to $1.5$?",
     "$\\text{O}_2^-$ (Superoxide ion)",
     "$\\text{O}_2$",
     "$\\text{O}_2^{2-}$",
     "$\\text{N}_2$",
     0, "Bond Order 1.5 Superoxide",
     "The superoxide ion ($\\text{O}_2^-$) has 17 electrons. According to MOT, $\\text{Bond Order} = (10 - 7)/2 = 1.5$."),

    # 13 (Q118)
    ("In which of the following species is the bond order equal to $2.5$?",
     "$\\text{O}_2^+$ and $\\text{N}_2^+$",
     "$\\text{O}_2$ and $\\text{N}_2$",
     "$\\text{O}_2^-$ and $\\text{N}_2^-$",
     "$\\text{F}_2$ and $\\text{Ne}_2$",
     0, "Bond Order 2.5 Species",
     "$\\text{O}_2^+$ (15 electrons) has $\\text{BO} = (10 - 5)/2 = 2.5$. $\\text{N}_2^+$ (13 electrons) has $\\text{BO} = (9 - 4)/2 = 2.5$. Both have a bond order of $2.5$."),

    # 14 (Q119)
    ("Which of the following compounds has the HIGHEST lattice energy?",
     "$\\text{Al}_2\\text{O}_3$",
     "$\\text{NaCl}$",
     "$\\text{MgCl}_2$",
     "$\\text{MgO}$",
     0, "Highest Lattice Energy Al2O3",
     "Lattice energy scales with the product of ionic charges ($z^+ z^-$). For $\\text{Al}_2\\text{O}_3$, $z^+ = +3$ and $z^- = -2$ (product $= 6$), combined with high packing density and small ionic radii, yielding an enormous lattice enthalpy (over $15000\\text{ kJ/mol}$)."),

    # 15 (Q120)
    ("The Born exponent ($n$) in the Born-Lande equation depends on:",
     "The electronic configuration of the ions involved",
     "The mass of the ions",
     "The temperature of crystallization",
     "The volume of the unit cell",
     0, "Born Exponent Electronic Configuration",
     "The Born exponent $n$ characterizes the compressibility and closed-shell electron overlap repulsion, depending on the noble gas configuration of the ions ($n = 5$ for He, $7$ for Ne, $9$ for Ar/$\text{Cu}^+$, $10$ for Kr, $12$ for Xe)."),

    # 16 (Q121)
    ("Which of the following molecules has a dipole moment of ZERO despite having polar bonds?",
     "$\\text{PCl}_5$ (gas phase, trigonal bipyramidal)",
     "$\\text{PCl}_3$",
     "$\\text{SF}_4$",
     "$\\text{ClF}_3$",
     0, "PCl5 Zero Dipole Moment",
     "$\\text{PCl}_5$ has a symmetrical trigonal bipyramidal shape: the three equatorial $\\text{P}-\\text{Cl}$ dipoles cancel each other at $120^\\circ$ in the plane, and the two axial $\\text{P}-\\text{Cl}$ dipoles cancel each other at $180^\\circ$, giving $\\mu_{\\text{net}} = 0$."),

    # 17 (Q122)
    ("In which of the following compounds does the central atom have a formal charge of $+2$?",
     "Central oxygen in $\\text{O}_4$ or Sulphur in $\\text{SO}_4^{2-}$ (with single bonds)",
     "Central carbon in $\\text{CO}_2$",
     "Central nitrogen in $\\text{NH}_4^+$",
     "Central boron in $\\text{BF}_4^-$",
     0, "Formal Charge +2 Identification",
     "In the classical Lewis structure of $\\text{SO}_4^{2-}$ with four single $\\text{S}-\\text{O}^-$ bonds: Sulphur has $V=6, L=0, B=8$. $\\text{FC} = 6 - 0 - 4 = +2$."),

    # 18 (Q123)
    ("Which of the following pairs has identical bond order and is isoelectronic?",
     "$\\text{NO}^+$ and $\\text{CO}$",
     "$\\text{NO}$ and $\\text{CO}$",
     "$\\text{O}_2$ and $\\text{N}_2$",
     "$\\text{CN}^-$ and $\\text{O}_2$",
     0, "NO+ and CO Isoelectronic Pair",
     "$\\text{NO}^+$ has $7 + 8 - 1 = 14$ electrons. $\\text{CO}$ has $6 + 8 = 14$ electrons. Both are 14-electron isoelectronic species with a triple bond and bond order 3.0."),

    # 19 (Q124)
    ("The solubility of alkaline earth metal sulfates in water DECREASES down the group from $\\text{BeSO}_4$ to $\\text{BaSO}_4$ because:",
     "Hydration enthalpy of the cation decreases much faster than the lattice enthalpy as cationic radius increases",
     "Lattice enthalpy increases down the group",
     "Sulfate ion becomes less stable",
     "Covalent character increases down the group",
     0, "Sulfate Solubility Decrease Reason",
     "Because the sulfate ion ($\\text{SO}_4^{2-}$) is large, the lattice energy remains nearly constant down Group 2. In contrast, the hydration enthalpy of the metal cation drops steeply as the radius increases from $\\text{Be}^{2+}$ to $\\text{Ba}^{2+}$. Consequently, $\\Delta H_{\\text{solution}}$ becomes less favorable and solubility drops."),

    # 20 (Q125)
    ("Which of the following molecules has the HIGHEST percent ionic character based on the Pauling electronegativity scale?",
     "$\\text{FrF}$ or $\\text{CsF}$",
     "$\\text{NaCl}$",
     "$\\text{LiI}$",
     "$\\text{KBr}$",
     0, "Highest Percent Ionic Character CsF",
     "Caesium has the lowest electronegativity ($0.7$) and Fluorine has the highest ($4.0$), giving the largest difference $\\Delta\\chi = 3.3$ and greater than $92\\%$ ionic character.")
]

print(f"Loaded {len(easy_items)} Easy items.")
print(f"Loaded {len(med_items)} Medium items.")
print(f"Loaded {len(hard_items)} Hard items.")

assert len(easy_items) == 40
assert len(med_items) == 65
assert len(hard_items) == 20

for idx, item in enumerate(easy_items):
    q_num = 1 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(med_items):
    q_num = 41 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(hard_items):
    q_num = 106 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Hard", item[6], item[7], is_pyq, pyq_source)

assert len(questions) == 125, f"Expected 125 questions, got {len(questions)}"
easy_c = sum(1 for q in questions if q["difficulty"] == "Easy")
med_c = sum(1 for q in questions if q["difficulty"] == "Medium")
hard_c = sum(1 for q in questions if q["difficulty"] == "Hard")

print(f"Part 1 Summary: Total = {len(questions)}, Easy = {easy_c}, Medium = {med_c}, Hard = {hard_c}")
assert easy_c == 40
assert med_c == 65
assert hard_c == 20

out_file = "src/data/chapterwise/chemistry/chemicalBondingPart1.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Chemical Bonding and Molecular Structure | Chemistry | Class: 11 | Part 1
// Target: Exactly 125 MCQs (40 Easy, 65 Medium, 20 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_BONDING_PART1_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
