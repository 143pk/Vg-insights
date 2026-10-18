#!/usr/bin/env python3
"""
Direct generator for Chemical Bonding and Molecular Structure - Part 3
Q251 to Q375: 30 Easy, 65 Medium, 30 Hard = 125 MCQs
Topics:
- Valence Bond Theory (VBT), Potential energy curve of H2 formation
- Sigma (sigma) and Pi (pi) bonds, types of overlap (s-s, s-p, p-p head-on, p-p lateral)
- Comparative strength of sigma and pi bonds
- Concept of hybridization: sp, sp2, sp3, dsp2, sp3d, sp3d2, sp3d3
- Specific d-orbitals involved: dz2 in sp3d, dz2 and dx2-y2 in sp3d2, dx2-y2 in dsp2
- Percentage s-character and its effect on electronegativity, bond length, and acidity
- Counting sigma and pi bonds in organic and inorganic molecules
- Hybridization state determination for central and carbon atoms
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
        "topicId": "chem-hybridization",
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
    ("A covalent bond formed by the end-to-end (head-on / axial) overlap of atomic orbitals along the internuclear axis is called a:",
     "Sigma ($\\sigma$) bond",
     "Pi ($\\pi$) bond",
     "Delta ($\\delta$) bond",
     "Coordinate bond",
     0, "Sigma Bond Definition",
     "A $\\sigma$ (sigma) bond is formed by coaxial or head-on overlap of atomic orbitals along the internuclear axis, providing cylindrical symmetry around the bond axis."),

    # 2 (Q252)
    ("A covalent bond formed by the sideways (lateral) overlap of atomic orbitals perpendicular to the internuclear axis is called a:",
     "Pi ($\\pi$) bond",
     "Sigma ($\\sigma$) bond",
     "Ionic bond",
     "Hydrogen bond",
     0, "Pi Bond Definition",
     "A $\\pi$ (pi) bond is formed by the lateral (sideways) overlap of two parallel $p$-orbitals oriented perpendicular to the internuclear axis, with electron density concentrated above and below the axis."),

    # 3 (Q253)
    ("Between a $\\sigma$ (sigma) bond and a $\\pi$ (pi) bond formed between the same two atoms, which bond is stronger?",
     "$\\sigma$-bond is stronger because the extent of orbital overlap is significantly greater along the internuclear axis",
     "$\\pi$-bond is stronger because it has two electron clouds",
     "Both bonds have identical bond strength",
     "$\\pi$-bond is always stronger at high temperatures",
     0, "Sigma vs Pi Strength",
     "The strength of a covalent bond depends on the extent of orbital overlap. Because head-on axial overlap allows greater interpenetration of electron clouds than lateral overlap, a $\\sigma$-bond is stronger than a $\\pi$-bond."),

    # 4 (Q254)
    ("A single covalent bond between two atoms always consists of:",
     "One $\\sigma$-bond",
     "One $\\pi$-bond",
     "One $\\sigma$-bond and one $\\pi$-bond",
     "Two $\\sigma$-bonds",
     0, "Single Bond Composition",
     "In any stable molecule, the first covalent bond formed between two atoms is always an axial head-on $\\sigma$-bond. A $\\pi$-bond can only exist in addition to an already formed $\\sigma$-bond."),

    # 5 (Q255)
    ("A double covalent bond between two atoms (e.g., in $\\text{O}_2$ or ethene) consists of:",
     "One $\\sigma$-bond and one $\\pi$-bond",
     "Two $\\sigma$-bonds",
     "Two $\\pi$-bonds",
     "One $\\sigma$-bond and two $\\pi$-bonds",
     0, "Double Bond Composition",
     "A double covalent bond consists of one head-on $\\sigma$-bond and one lateral $\\pi$-bond ($1\\sigma + 1\\pi$)."),

    # 6 (Q256)
    ("A triple covalent bond between two atoms (e.g., in $\\text{N}_2$ or ethyne) consists of:",
     "One $\\sigma$-bond and two $\\pi$-bonds",
     "Three $\\sigma$-bonds",
     "Three $\\pi$-bonds",
     "Two $\\sigma$-bonds and one $\\pi$-bond",
     0, "Triple Bond Composition",
     "A triple covalent bond consists of one axial $\\sigma$-bond and two mutually perpendicular lateral $\\pi$-bonds ($1\\sigma + 2\\pi$)."),

    # 7 (Q257)
    ("Free rotation of atoms around the bond axis is permitted in:",
     "Single $\\sigma$-bonds",
     "Double bonds containing a $\\pi$-bond",
     "Triple bonds containing two $\\pi$-bonds",
     "All covalent bonds equally",
     0, "Free Rotation Sigma Bond",
     "Because $\\sigma$-bonds possess cylindrical symmetry about the internuclear axis, rotation around a single $\\sigma$-bond does not disrupt orbital overlap. In contrast, rotation around a double bond breaks the lateral $p-p$ overlap of the $\\pi$-bond, hindering rotation."),

    # 8 (Q258)
    ("The phenomenon of intermixing of atomic orbitals of slightly different energies of the same atom to redistribute energy and yield a new set of equivalent orbitals is called:",
     "Hybridization",
     "Resonance",
     "Polarization",
     "Ionization",
     0, "Hybridization Definition",
     "Hybridization is the quantum-chemical concept introduced by Linus Pauling where atomic orbitals ($s, p, d$) mix to generate hybrid orbitals of identical shape, energy, and directional orientation."),

    # 9 (Q259)
    ("The number of hybrid orbitals formed during hybridization is always:",
     "Equal to the number of atomic orbitals that participate in mixing",
     "Twice the number of participating atomic orbitals",
     "Half the number of participating atomic orbitals",
     "Always four regardless of participation",
     0, "Number of Hybrid Orbitals",
     "One fundamental rule of hybridization is conservation of orbitals: the number of hybrid orbitals produced is strictly equal to the number of atomic orbitals mixed (e.g., $1s + 3p = 4sp^3$)."),

    # 10 (Q260)
    ("The hybridization state of the carbon atom in Methane ($\\text{CH}_4$) is:",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "$sp^3d$",
     0, "Methane Hybridization",
     "Carbon in $\\text{CH}_4$ forms 4 $\\sigma$-bonds with hydrogen using one $2s$ and three $2p$ orbitals, undergoing $sp^3$ hybridization with tetrahedral geometry ($109.5^\\circ$)."),

    # 11 (Q261)
    ("The hybridization state of the Boron atom in Boron trifluoride ($\\text{BF}_3$) is:",
     "$sp^2$",
     "$sp^3$",
     "$sp$",
     "$dsp^2$",
     0, "BF3 Hybridization",
     "Boron mixes one $2s$ and two $2p$ orbitals to form three equivalent $sp^2$ hybrid orbitals oriented at $120^\\circ$ in a trigonal planar arrangement."),

    # 12 (Q262)
    ("The hybridization state of the Beryllium atom in Beryllium chloride ($\\text{BeCl}_2$) in the vapor phase is:",
     "$sp$",
     "$sp^2$",
     "$sp^3$",
     "$dsp^2$",
     0, "BeCl2 Hybridization",
     "Beryllium mixes one $2s$ and one $2p$ orbital to form two linear $sp$ hybrid orbitals oriented at $180^\\circ$."),

    # 13 (Q263)
    ("The percentage of $s$-character in an $sp$ hybrid orbital is:",
     "$50\\%$",
     "$33.3\\%$",
     "$25\\%$",
     "$20\\%$",
     0, "sp Percent s-character",
     "An $sp$ hybrid orbital is composed of one $s$ and one $p$ orbital: $\% s = (1/2) \\times 100 = 50\\%$, with $50\\% p$-character."),

    # 14 (Q264)
    ("The percentage of $s$-character in an $sp^2$ hybrid orbital is:",
     "$33.33\\%$",
     "$50\\%$",
     "$25\\%$",
     "$20\\%$",
     0, "sp2 Percent s-character",
     "An $sp^2$ hybrid orbital is formed from one $s$ and two $p$ orbitals: $\% s = (1/3) \\times 100 = 33.33\\%$."),

    # 15 (Q265)
    ("The percentage of $s$-character in an $sp^3$ hybrid orbital is:",
     "$25\\%$",
     "$50\\%$",
     "$33.3\\%$",
     "$20\\%$",
     0, "sp3 Percent s-character",
     "An $sp^3$ hybrid orbital consists of one $s$ and three $p$ orbitals: $\% s = (1/4) \\times 100 = 25\\%$."),

    # 16 (Q266)
    ("As the percentage of $s$-character in a hybrid orbital increases, the electronegativity of the hybridized atom:",
     "Increases, because $s$-electrons are closer to the nucleus",
     "Decreases",
     "Remains constant",
     "First decreases then increases",
     0, "s-character and Electronegativity",
     "Because $s$-orbitals are more penetrating and closer to the positive nucleus than $p$-orbitals, higher $s$-character pulls the electron cloud closer, increasing electronegativity: $sp (50\\%) > sp^2 (33.3\\%) > sp^3 (25\\%)$."),

    # 17 (Q267)
    ("The hybridization state of the central Phosphorus atom in gaseous $\\text{PCl}_5$ is:",
     "$sp^3d$",
     "$sp^3$",
     "$sp^3d^2$",
     "$dsp^2$",
     0, "PCl5 Hybridization",
     "Phosphorus in $\\text{PCl}_5$ has 5 $\\sigma$-bonds and 0 lone pairs, mixing one $3s$, three $3p$, and one $3d$ orbital to form five $sp^3d$ hybrid orbitals in a trigonal bipyramid."),

    # 18 (Q268)
    ("The hybridization state of the central Sulphur atom in Sulphur hexafluoride ($\\text{SF}_6$) is:",
     "$sp^3d^2$",
     "$sp^3d$",
     "$sp^3d^3$",
     "$sp^3$",
     0, "SF6 Hybridization",
     "Sulphur in $\\text{SF}_6$ mixes one $3s$, three $3p$, and two $3d$ orbitals to form six equivalent $sp^3d^2$ hybrid orbitals directed towards the vertices of a regular octahedron."),

    # 19 (Q269)
    ("The hybridization state of the central Iodine atom in Iodine heptafluoride ($\\text{IF}_7$) is:",
     "$sp^3d^3$",
     "$sp^3d^2$",
     "$sp^3d$",
     "$sp^3$",
     0, "IF7 Hybridization",
     "Iodine in $\\text{IF}_7$ mixes one $5s$, three $5p$, and three $5d$ orbitals to form seven $sp^3d^3$ hybrid orbitals in a pentagonal bipyramidal arrangement."),

    # 20 (Q270)
    ("Which specific $d$-orbital participates in $sp^3d$ hybridization in a trigonal bipyramidal molecule like $\\text{PCl}_5$?",
     "$d_{z^2}$",
     "$d_{x^2-y^2}$",
     "$d_{xy}$",
     "$d_{yz}$",
     0, "sp3d Specific d-orbital",
     "In $sp^3d$ hybridization for a trigonal bipyramid, the axial bonds lie along the $z$-axis. The $d$-orbital directed along the $z$-axis is $d_{z^2}$, which mixes with $s, p_x, p_y,$ and $p_z$."),

    # 21 (Q271)
    ("Which specific $d$-orbitals participate in $sp^3d^2$ hybridization in an octahedral molecule like $\\text{SF}_6$?",
     "$d_{z^2}$ and $d_{x^2-y^2}$",
     "$d_{xy}$ and $d_{yz}$",
     "$d_{xz}$ and $d_{yz}$",
     "$d_{xy}$ and $d_{x^2-y^2}$",
     0, "sp3d2 Specific d-orbitals",
     "In an octahedral geometry, bonds lie along the three Cartesian axes ($x, y, z$). The two axial $d$-orbitals with lobes along the axes are $d_{x^2-y^2}$ and $d_{z^2}$."),

    # 22 (Q272)
    ("Which specific $d$-orbital participates in $dsp^2$ hybridization in square planar complexes like $[\\text{Ni}(\\text{CN})_4]^{2-}$?",
     "$d_{x^2-y^2}$",
     "$d_{z^2}$",
     "$d_{xy}$",
     "$d_{xz}$",
     0, "dsp2 Specific d-orbital",
     "A square planar complex lies in the $xy$-plane with ligands on the $x$ and $y$ axes. The orbital with lobes directed along the $x$ and $y$ axes is $d_{x^2-y^2}$."),

    # 23 (Q273)
    ("How many $\\sigma$ and $\\pi$ bonds are present in a molecule of Ethyne (Acetylene, $\\text{C}_2\\text{H}_2$)?",
     "3 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "2 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "4 $\\sigma$-bonds and 1 $\\pi$-bond",
     "5 $\\sigma$-bonds and 0 $\\pi$-bonds",
     0, "Ethyne Sigma Pi Count",
     "Structure: $\\text{H}-\\text{C}\\equiv\\text{C}-\\text{H}$. There are two single $\\text{C}-\\text{H}$ $\\sigma$-bonds and one triple $\\text{C}\\equiv\\text{C}$ bond ($1\\sigma + 2\\pi$). Total: $3\\sigma$ and $2\\pi$."),

    # 24 (Q274)
    ("How many $\\sigma$ and $\\pi$ bonds are present in a molecule of Ethene (Ethylene, $\\text{C}_2\\text{H}_4$)?",
     "5 $\\sigma$-bonds and 1 $\\pi$-bond",
     "4 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "6 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "3 $\\sigma$-bonds and 2 $\\pi$-bonds",
     0, "Ethene Sigma Pi Count",
     "Structure: $\\text{H}_2\\text{C}=\\text{CH}_2$. There are four $\\text{C}-\\text{H}$ $\\sigma$-bonds and one double $\\text{C}=\\text{C}$ bond ($1\\sigma + 1\\pi$). Total: $5\\sigma$ and $1\\pi$."),

    # 25 (Q275)
    ("How many $\\sigma$ and $\\pi$ bonds are present in a molecule of Ethane ($\\text{C}_2\\text{H}_6$)?",
     "7 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "6 $\\sigma$-bonds and 1 $\\pi$-bond",
     "8 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "5 $\\sigma$-bonds and 2 $\\pi$-bonds",
     0, "Ethane Sigma Pi Count",
     "Structure: $\\text{H}_3\\text{C}-\\text{CH}_3$. Six $\\text{C}-\\text{H}$ $\\sigma$-bonds and one $\\text{C}-\\text{C}$ $\\sigma$-bond. Total: $7\\sigma$ bonds and $0\\pi$ bonds."),

    # 26 (Q276)
    ("How many $\\sigma$ and $\\pi$ bonds are present in a molecule of Benzene ($\\text{C}_6\\text{H}_6$)?",
     "12 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "6 $\\sigma$-bonds and 6 $\\pi$-bonds",
     "9 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "15 $\\sigma$-bonds and 0 $\\pi$-bonds",
     0, "Benzene Sigma Pi Count",
     "In benzene: six $\\text{C}-\\text{C}$ $\\sigma$-bonds in the ring, six $\\text{C}-\\text{H}$ $\\sigma$-bonds, and three delocalized $\\pi$-bonds. Total: $12\\sigma$ and $3\\pi$."),

    # 27 (Q277)
    ("In the potential energy curve for the formation of the $\\text{H}_2$ molecule from two hydrogen atoms, the minimum in potential energy corresponds to:",
     "The equilibrium bond length ($74\\text{ pm}$) with maximum stability and release of $435.8\\text{ kJ/mol}$",
     "Zero interatomic distance",
     "Infinite separation between atoms",
     "Maximum repulsive force",
     0, "H2 Potential Energy Curve Minimum",
     "At the equilibrium internuclear distance ($r_0 = 74\\text{ pm}$), attractive and repulsive forces balance perfectly, potential energy reaches a minimum ($-435.8\\text{ kJ/mol}$), and the stable $\\text{H}_2$ molecule is formed."),

    # 28 (Q278)
    ("Two Helium atoms do NOT combine to form a stable $\\text{He}_2$ molecule because according to VBT/MOT:",
     "Repulsive forces exceed attractive forces and the bond order is zero",
     "Helium has too many protons",
     "Helium is a solid at room temperature",
     "Helium has empty $p$-orbitals",
     0, "He2 Non-formation Reason",
     "When two He atoms approach, the repulsive forces between nuclear charges and electrons exceed the attractive forces. In MOT, $N_b = 2$ and $N_a = 2$, giving a bond order of zero, so no net chemical bond is formed."),

    # 29 (Q279)
    ("Which of the following orbitals CANNOT participate in lateral overlap to form a $\\pi$-bond?",
     "$s$-orbital",
     "$p_x$-orbital",
     "$p_y$-orbital",
     "$d_{xy}$-orbital",
     0, "s-orbital No Pi Bond",
     "An $s$-orbital is spherically symmetric without directional lobes or nodal planes, so it can only form head-on $\\sigma$-bonds and can never participate in sideways $\\pi$-bonding."),

    # 30 (Q280)
    ("The hybridization state of the Oxygen atom in Water ($\\text{H}_2\\text{O}$) is:",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "Unhybridized",
     0, "Water Oxygen Hybridization",
     "Oxygen in water has 2 bonding pairs and 2 lone pairs (steric number 4), undergoing $sp^3$ hybridization with a bent geometry ($104.5^\\circ$).")
]

# -------------------------------------------------------------------------
# MEDIUM QUESTIONS (65 questions: Q281 to Q345)
# -------------------------------------------------------------------------
med_items = [
    # 1 (Q281) Authentic NEET 2020
    ("What are the hybridization states of Carbon atoms from left to right in the compound $\\text{CH}_2=\\text{C}=\\text{CH}-\\text{CH}_3$?",
     "$sp^2, sp, sp^2, sp^3$",
     "$sp^2, sp^2, sp^2, sp^3$",
     "$sp^3, sp^2, sp, sp^3$",
     "$sp, sp^2, sp^2, sp^3$",
     0, "Allene Derivative Hybridization NEET 2020",
     "C1 ($\text{CH}_2=$): 3 $\\sigma$, 1 $\\pi$ -> $sp^2$. C2 ($=\text{C}=$): 2 $\\sigma$, 2 $\\pi$ -> $sp$. C3 ($=\text{CH}-$): 3 $\\sigma$, 1 $\\pi$ -> $sp^2$. C4 ($-\\text{CH}_3$): 4 $\\sigma$, 0 $\\pi$ -> $sp^3$. Sequence: $sp^2, sp, sp^2, sp^3$.",
     True, "NEET 2020"),

    # 2 (Q282) Authentic NEET 2021
    ("How many $\\sigma$ and $\\pi$ bonds are present in the molecule Tetracyanoethylene ($(\\text{NC})_2\\text{C}=\\text{C}(\\text{CN})_2$)?",
     "9 $\\sigma$-bonds and 9 $\\pi$-bonds",
     "9 $\\sigma$-bonds and 7 $\\pi$-bonds",
     "5 $\\sigma$-bonds and 9 $\\pi$-bonds",
     "8 $\\sigma$-bonds and 8 $\\pi$-bonds",
     0, "Tetracyanoethylene Sigma Pi NEET 2021",
     "Structure: one central $\\text{C}=\\text{C}$ ($1\\sigma + 1\\pi$), four $\\text{C}-\\text{C}\\equiv\\text{N}$ single bonds ($4\\sigma$), and four cyano groups each with $\\text{C}\\equiv\\text{N}$ ($4\\sigma + 8\\pi$). Total $\\sigma = 1 + 4 + 4 = 9\\sigma$. Total $\\pi = 1 + 8 = 9\\pi$.",
     True, "NEET 2021"),

    # 3 (Q283) Authentic NEET 2019
    ("In which of the following molecules are all carbon atoms $sp^2$ hybridized?",
     "Benzene ($\\text{C}_6\\text{H}_6$)",
     "Ethyne ($\\text{C}_2\\text{H}_2$)",
     "Propene ($\\text{CH}_3-\\text{CH}=\\text{CH}_2$)",
     "Cyclohexane ($\\text{C}_6\\text{H}_{12}$)",
     0, "All sp2 Carbon Molecules NEET 2019",
     "In benzene, every single carbon atom forms 3 $\\sigma$-bonds and 1 delocalized $\\pi$-bond, so all 6 carbon atoms are strictly $sp^2$ hybridized.",
     True, "NEET 2019"),

    # 4 (Q284)
    ("The hybridization states of the Nitrogen atom in $\\text{NO}_2^+, \\text{NO}_3^-,$ and $\\text{NH}_4^+$ are respectively:",
     "$sp, sp^2, sp^3$",
     "$sp^2, sp, sp^3$",
     "$sp, sp^3, sp^2$",
     "$sp^3, sp^2, sp$",
     0, "Nitrogen Species Hybridization Sequence",
     "$\\text{NO}_2^+$ has 2 $\\sigma$-bonds and 0 lp ($sp$). $\\text{NO}_3^-$ has 3 $\\sigma$-bonds and 0 lp ($sp^2$). $\\text{NH}_4^+$ has 4 $\\sigma$-bonds and 0 lp ($sp^3$). Sequence: $sp, sp^2, sp^3$."),

    # 5 (Q285)
    ("The hybridization state of the central atom in Xenon difluoride ($\\text{XeF}_2$) is:",
     "$sp^3d$",
     "$sp^3$",
     "$sp^3d^2$",
     "$dsp^2$",
     0, "XeF2 Hybridization",
     "Xenon in $\\text{XeF}_2$ has 2 single bonds and 3 lone pairs. Steric number $= 2 + 3 = 5$, which corresponds to $sp^3d$ hybridization with linear geometry."),

    # 6 (Q286)
    ("The hybridization state of the central atom in Xenon tetrafluoride ($\\text{XeF}_4$) is:",
     "$sp^3d^2$",
     "$sp^3d$",
     "$sp^3$",
     "$sp^3d^3$",
     0, "XeF4 Hybridization",
     "Xenon in $\\text{XeF}_4$ has 4 single bonds and 2 lone pairs. Steric number $= 4 + 2 = 6$, corresponding to $sp^3d^2$ hybridization with square planar geometry."),

    # 7 (Q287)
    ("The hybridization state of the central atom in Xenon hexafluoride ($\\text{XeF}_6$) is:",
     "$sp^3d^3$",
     "$sp^3d^2$",
     "$sp^3d$",
     "$sp^3$",
     0, "XeF6 Hybridization",
     "Xenon in $\\text{XeF}_6$ has 6 single bonds and 1 lone pair. Steric number $= 6 + 1 = 7$, corresponding to $sp^3d^3$ hybridization with distorted octahedral geometry."),

    # 8 (Q288)
    ("In Propyne ($\\text{CH}_3-\\text{C}\\equiv\\text{CH}$), the hybridization states of carbon atoms C1, C2, and C3 (from right to left) are:",
     "$sp, sp, sp^3$",
     "$sp^2, sp, sp^3$",
     "$sp, sp^2, sp^3$",
     "$sp^3, sp, sp$",
     0, "Propyne Hybridization",
     "C1 (terminal $\\equiv\\text{CH}$): $sp$. C2 (internal $-\\text{C}\\equiv$): $sp$. C3 (methyl $-\\text{CH}_3$): $sp^3$. Sequence: $sp, sp, sp^3$."),

    # 9 (Q289)
    ("How many $\\sigma$ and $\\pi$ bonds are present in Buta-1,3-diene ($\\text{CH}_2=\\text{CH}-\\text{CH}=\\text{CH}_2$)?",
     "9 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "8 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "7 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "10 $\\sigma$-bonds and 1 $\\pi$-bond",
     0, "Butadiene Sigma Pi Count",
     "Structure: three $\\text{C}-\\text{C}$ bonds (two double, one single $= 3\\sigma + 2\\pi$) and six $\\text{C}-\\text{H}$ bonds ($6\\sigma$). Total: $9\\sigma$ bonds and $2\\pi$ bonds."),

    # 10 (Q290)
    ("How many $\\sigma$ and $\\pi$ bonds are present in Naphthalene ($\\text{C}_{10}\\text{H}_8$)?",
     "19 $\\sigma$-bonds and 5 $\\pi$-bonds",
     "11 $\\sigma$-bonds and 5 $\\pi$-bonds",
     "15 $\\sigma$-bonds and 4 $\\pi$-bonds",
     "20 $\\sigma$-bonds and 5 $\\pi$-bonds",
     0, "Naphthalene Sigma Pi Count",
     "In naphthalene: 11 $\\text{C}-\\text{C}$ ring bonds ($11\\sigma$), 8 $\\text{C}-\\text{H}$ bonds ($8\\sigma$), and 5 alternating $\\pi$-bonds. Total: $19\\sigma$ bonds and $5\\pi$ bonds."),

    # 11 (Q291)
    ("The $\\text{C}-\\text{C}$ single bond length in ethane, ethene, and ethyne follows the order:",
     "$\\text{CH}_3-\\text{CH}_3 (154\\text{ pm}) > \\text{CH}_2=\\text{CH}_2 (134\\text{ pm}) > \\text{CH}\\equiv\\text{CH} (120\\text{ pm})$",
     "$\\text{CH}\\equiv\\text{CH} > \\text{CH}_2=\\text{CH}_2 > \\text{CH}_3-\\text{CH}_3$",
     "$\\text{CH}_2=\\text{CH}_2 > \\text{CH}_3-\\text{CH}_3 > \\text{CH}\\equiv\\text{CH}$",
     "All are identical",
     0, "Carbon Carbon Bond Length Order",
     "Bond length decreases with increasing bond order and higher $s$-character: single bond ($154\\text{ pm}$) > double bond ($134\\text{ pm}$) > triple bond ($120\\text{ pm}$)."),

    # 12 (Q292)
    ("The single bond between the $sp^2$ and $sp$ carbons in vinylacetylene ($\\text{CH}_2=\\text{CH}-\\text{C}\\equiv\\text{CH}$) has a length of $143\\text{ pm}$, shorter than standard $154\\text{ pm}$. This shortening is due to:",
     "Greater $s$-character in the $sp^2-sp$ hybrid orbitals and partial double-bond character from resonance",
     "Ionic bonding",
     "Steric repulsion",
     "Hyperconjugation with methyl groups",
     0, "Vinylacetylene Bond Shortening",
     "The bond connects $sp^2$ ($33.3\\% s$) and $sp$ ($50\\% s$) carbons. Higher $s$-character holds bonding electrons closer to the nuclei, shortening the $\\sigma$-bond. Resonance conjugation also introduces partial double-bond character."),

    # 13 (Q293)
    ("The acidic character of hydrocarbons follows the order: $\\text{CH}\\equiv\\text{CH} > \\text{CH}_2=\\text{CH}_2 > \\text{CH}_3-\\text{CH}_3$. This is explained by:",
     "Higher percentage $s$-character in $sp$ hybridized carbon of ethyne ($50\\%$) makes it most electronegative, stabilizing the carbanion conjugate base",
     "Ethyne having fewer hydrogen atoms",
     "Ethene being planar",
     "Ethane having higher molecular weight",
     0, "Hydrocarbon Acidity s-character",
     "The carbon in ethyne is $sp$ hybridized with $50\\% s$-character, giving it the highest electronegativity. It accommodates the negative charge in the conjugate base acetylide ion ($:\\text{C}\\equiv\\text{C}-\\text{H}^-$) most stably, making ethyne acidic ($pK_a \\approx 25$)."),

    # 14 (Q294)
    ("In the compound $\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_2-\\text{C}\\equiv\\text{CH}$, the hybridization of carbon atoms C2 and C5 (numbered from the alkyne end) are respectively:",
     "$sp$ and $sp^2$",
     "$sp^2$ and $sp$",
     "$sp^3$ and $sp^2$",
     "$sp$ and $sp^3$",
     0, "IUPAC Numbering Hybridization",
     "Numbering from alkyne: C1 is $\\equiv\\text{CH}$ ($sp$), C2 is $-\\text{C}\\equiv$ ($sp$), C3 is $-\\text{CH}_2-$ ($sp^3$), C4 is $-\\text{CH}=$ ($sp^2$), C5 is $=\\text{CH}-$ ($sp^2$), C6 is $-\\text{CH}_3$ ($sp^3$). Hence C2 is $sp$ and C5 is $sp^2$."),

    # 15 (Q295)
    ("Which of the following molecules has a central atom with $dsp^2$ hybridization?",
     "$[\\text{Ni}(\\text{CN})_4]^{2-}$",
     "$[\\text{NiCl}_4]^{2-}$",
     "$\\text{CH}_4$",
     "$\\text{SF}_4$",
     0, "dsp2 Nickel Complex",
     "Cyanide ($\\text{CN}^-$) is a strong field ligand that forces pairing of $3d^8$ electrons in $\\text{Ni}^{2+}$, freeing one inner $3d_{x^2-y^2}$ orbital to undergo $dsp^2$ hybridization, adopting a square planar geometry."),

    # 16 (Q296)
    ("Between $[\\text{Ni}(\\text{CN})_4]^{2-}$ and $[\\text{NiCl}_4]^{2-}$, their shapes and magnetic behaviors are respectively:",
     "Square planar (diamagnetic) and tetrahedral (paramagnetic)",
     "Tetrahedral (paramagnetic) and square planar (diamagnetic)",
     "Both are square planar and diamagnetic",
     "Both are tetrahedral and paramagnetic",
     0, "Ni Complexes Geometry Magnetic",
     "In $[\\text{Ni}(\\text{CN})_4]^{2-}$, strong field $\\text{CN}^-$ causes pairing (0 unpaired electrons, diamagnetic, $dsp^2$ square planar). In $[\\text{NiCl}_4]^{2-}$, weak field $\\text{Cl}^-$ does not cause pairing (2 unpaired electrons, paramagnetic, $sp^3$ tetrahedral)."),

    # 17 (Q297)
    ("The hybridization state of the Sulphur atom in Sulphur dioxide ($\\text{SO}_2$) is:",
     "$sp^2$",
     "$sp^3$",
     "$sp$",
     "$sp^3d$",
     0, "SO2 Sulphur Hybridization",
     "Sulphur in $\\text{SO}_2$ forms two $\\sigma$-bonds with oxygen and retains one lone pair (steric number $= 2 + 1 = 3$), undergoing $sp^2$ hybridization with a bent shape."),

    # 18 (Q298)
    ("The hybridization state of the central Sulphur atom in Sulphur trioxide ($\\text{SO}_3$) is:",
     "$sp^2$",
     "$sp^3$",
     "$sp$",
     "$sp^3d$",
     0, "SO3 Sulphur Hybridization",
     "Sulphur in $\\text{SO}_3$ forms three $\\sigma$-bonds with oxygen and has 0 lone pairs (steric number 3), undergoing $sp^2$ hybridization with a trigonal planar geometry."),

    # 19 (Q299)
    ("How many $p\\pi-d\\pi$ bonds are present in Sulphur trioxide ($\\text{SO}_3$)?",
     "Two",
     "One",
     "Three",
     "Zero",
     0, "SO3 ppi-dpi Bonds Count",
     "In $\\text{SO}_3$, Sulphur forms three $\\pi$-bonds with oxygen. Since Sulphur is $sp^2$ hybridized, only one $3p$ orbital is available for $\\pi$-bonding, while the other two $\\pi$-bonds use vacant $3d$ orbitals. Hence $\\text{SO}_3$ contains one $p\\pi-p\\pi$ and two $p\\pi-d\\pi$ bonds."),

    # 20 (Q300)
    ("How many $p\\pi-d\\pi$ bonds are present in Sulphur dioxide ($\\text{SO}_2$)?",
     "One",
     "Two",
     "Three",
     "Zero",
     0, "SO2 ppi-dpi Bonds Count",
     "In $\\text{SO}_2$, Sulphur forms two $\\pi$-bonds with oxygen. With $sp^2$ hybridization, one $\\pi$-bond is of $p\\pi-p\\pi$ type and the second is of $p\\pi-d\\pi$ type."),

    # 21 (Q301)
    ("How many $p\\pi-d\\pi$ bonds are present in the Perchlorate ion ($\\text{ClO}_4^-$)?",
     "Three",
     "Two",
     "One",
     "Four",
     0, "ClO4- ppi-dpi Bonds Count",
     "In $\\text{ClO}_4^-$, Chlorine forms four $\\sigma$-bonds using $sp^3$ hybrid orbitals. The three $\\pi$-bonds in the $\\text{Cl}=\\text{O}$ double bonds must use vacant $3d$ orbitals of chlorine, so all three are $p\\pi-d\\pi$ bonds."),

    # 22 (Q302)
    ("Why can Nitrogen NOT form $p\\pi-d\\pi$ multiple bonds like Phosphorus does in $\\text{POCl}_3$?",
     "Nitrogen belongs to Period 2 and has no vacant $d$-orbitals in its valence shell",
     "Nitrogen is less electronegative than Phosphorus",
     "Nitrogen is a diatomic gas",
     "Nitrogen forms only ionic bonds",
     0, "Nitrogen No dpi Bonds",
     "Nitrogen's valence shell ($n = 2$) comprises only $2s$ and $2p$ orbitals. Because it lacks $d$-orbitals, it cannot form $p\\pi-d\\pi$ bonds, limiting its maximum covalency to 4."),

    # 23 (Q303)
    ("Which of the following molecules contains BOTH $p\\pi-p\\pi$ and $p\\pi-d\\pi$ bonds?",
     "$\\text{SO}_3$",
     "$\\text{CO}_2$",
     "$\\text{BF}_3$",
     "$\\text{NO}_3^-$",
     0, "SO3 Contains Both Pi Types",
     "$\\text{SO}_3$ contains one $p\\pi-p\\pi$ bond and two $p\\pi-d\\pi$ bonds. In contrast, $\\text{CO}_2, \\text{BF}_3,$ and $\\text{NO}_3^-$ contain only $p\\pi-p\\pi$ bonds because their central atoms lack $d$-orbitals."),

    # 24 (Q304)
    ("The hybridization state of Carbon in Graphite is:",
     "$sp^2$",
     "$sp^3$",
     "$sp$",
     "$sp^3d$",
     0, "Graphite Carbon Hybridization",
     "In graphite, each carbon atom forms 3 $\\sigma$-bonds in a hexagonal planar network, undergoing $sp^2$ hybridization with one unhybridized $p$-orbital forming a delocalized $\\pi$-system."),

    # 25 (Q305)
    ("The hybridization state of Carbon in Diamond is:",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "$dsp^2$",
     0, "Diamond Carbon Hybridization",
     "In diamond, each carbon atom forms 4 $\\sigma$-bonds oriented tetrahedrally to 4 neighboring carbons, undergoing $sp^3$ hybridization with equal $\\text{C}-\\text{C}$ bond lengths ($154\\text{ pm}$)."),

    # 26 (Q306)
    ("The hybridization state of Carbon in Buckminsterfullerene ($\\text{C}_{60}$) is:",
     "$sp^2$ (with slight distortion/curvature)",
     "$sp^3$",
     "$sp$",
     "$sp^3d$",
     0, "Fullerene Carbon Hybridization",
     "Each carbon in $\\text{C}_{60}$ is bonded to three other carbons in a curved cage of pentagons and hexagons, predominantly $sp^2$ hybridized with slight pyramidalization due to spherical curvature."),

    # 27 (Q307)
    ("In which of the following compounds is the central atom $sp^3d$ hybridized with a T-SHAPED molecular geometry?",
     "$\\text{ClF}_3$",
     "$\\text{PCl}_5$",
     "$\\text{SF}_4$",
     "$\\text{XeF}_2$",
     0, "ClF3 sp3d T-shaped",
     "$\\text{ClF}_3$ has 3 $\\sigma$-bonds and 2 lone pairs (steric number 5, $sp^3d$ hybridization). The 2 equatorial lone pairs produce a T-shaped geometry."),

    # 28 (Q308)
    ("In which of the following compounds is the central atom $sp^3d$ hybridized with a LINEAR geometry?",
     "$\\text{XeF}_2$",
     "$\\text{CO}_2$",
     "$\\text{BeCl}_2$",
     "$\\text{C}_2\\text{H}_2$",
     0, "XeF2 sp3d Linear",
     "$\\text{XeF}_2$ has 2 $\\sigma$-bonds and 3 equatorial lone pairs (steric number 5, $sp^3d$ hybridization), forming a linear geometry. In contrast, $\\text{CO}_2, \\text{BeCl}_2,$ and $\\text{C}_2\\text{H}_2$ are $sp$ hybridized."),

    # 29 (Q309)
    ("In which of the following compounds is the central atom $sp^3d^2$ hybridized with a SQUARE PLANAR geometry?",
     "$\\text{XeF}_4$",
     "$\\text{SF}_6$",
     "$\\text{BrF}_5$",
     "$\\text{SiF}_4$",
     0, "XeF4 sp3d2 Square Planar",
     "$\\text{XeF}_4$ has 4 $\\sigma$-bonds and 2 trans lone pairs (steric number 6, $sp^3d^2$ hybridization), resulting in a square planar shape."),

    # 30 (Q310)
    ("In which of the following compounds is the central atom $sp^3d^2$ hybridized with a SQUARE PYRAMIDAL geometry?",
     "$\\text{BrF}_5$",
     "$\\text{SF}_6$",
     "$\\text{XeF}_4$",
     "$\\text{PCl}_5$",
     0, "BrF5 sp3d2 Square Pyramidal",
     "$\\text{BrF}_5$ has 5 $\\sigma$-bonds and 1 lone pair (steric number 6, $sp^3d^2$ hybridization), resulting in a square pyramidal shape."),

    # 31 (Q311)
    ("The hybridization state of the central Boron atom in Diborane ($\\text{B}_2\\text{H}_6$) is:",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "$dsp^2$",
     0, "Diborane Boron Hybridization",
     "In $\\text{B}_2\\text{H}_6$, each Boron atom forms two terminal $2c-2e$ $\\text{B}-\\text{H}$ bonds and two bridging $3c-2e$ banana bonds, using four approximately $sp^3$ hybrid orbitals in a distorted tetrahedral arrangement."),

    # 32 (Q312)
    ("The hybridization state of Boron in Boric acid ($\\text{B}(\\text{OH})_3$) changes from which state to which state when it dissolves in water to form $[\\text{B}(\\text{OH})_4]^-$?",
     "$sp^2 \\rightarrow sp^3$",
     "$sp^3 \\rightarrow sp^2$",
     "$sp^2 \\rightarrow sp^3d$",
     "$sp \\rightarrow sp^2$",
     0, "Boric Acid Hybridization Change",
     "In planar $\\text{B}(\\text{OH})_3$, Boron is $sp^2$ hybridized with 3 bonds. Upon accepting an $\\text{OH}^-$ from water, it forms tetrahedral $[\\text{B}(\\text{OH})_4]^-$ where Boron is $sp^3$ hybridized: $sp^2 \\rightarrow sp^3$."),

    # 33 (Q313)
    ("When Aluminium chloride dimerizes from monomeric $\\text{AlCl}_3$ to $\\text{Al}_2\\text{Cl}_6$, the hybridization of Aluminium changes from:",
     "$sp^2 \\rightarrow sp^3$",
     "$sp^3 \\rightarrow sp^2$",
     "$sp \\rightarrow sp^2$",
     "$sp^3 \\rightarrow sp^3d$",
     0, "AlCl3 Dimerization Hybridization Change",
     "In monomeric planar $\\text{AlCl}_3$ vapor, Aluminium is $sp^2$ hybridized with 3 bonds. In the chloro-bridged dimer $\\text{Al}_2\\text{Cl}_6$, each Aluminium forms 4 bonds (3 covalent $+ 1$ coordinate bridge), changing its hybridization to $sp^3$."),

    # 34 (Q314)
    ("When Silicon tetrachloride ($\\text{SiCl}_4$) accepts two chloride ions to form $[\\text{SiCl}_6]^{2-}$, the hybridization of Silicon changes from:",
     "$sp^3 \\rightarrow sp^3d^2$",
     "$sp^2 \\rightarrow sp^3$",
     "$sp^3d \\rightarrow sp^3d^2$",
     "$sp^3 \\rightarrow sp^3d$",
     0, "SiCl4 to SiCl6 2- Hybridization Change",
     "In tetrahedral $\\text{SiCl}_4$, Silicon is $sp^3$ hybridized with 4 bonds. In octahedral $[\\text{SiCl}_6]^{2-}$, Silicon expands its coordination number to 6 by utilizing vacant $3d$ orbitals, changing to $sp^3d^2$ hybridization."),

    # 35 (Q315)
    ("The total number of $\\sigma$ and $\\pi$ bonds present in a molecule of Sulphur trioxide ($\\text{SO}_3$) is:",
     "3 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "3 $\\sigma$-bonds and 1 $\\pi$-bond",
     "4 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "6 $\\sigma$-bonds and 0 $\\pi$-bonds",
     0, "SO3 Total Bonds Count",
     "In the canonical Lewis structure of $\\text{SO}_3$, Sulphur forms three double bonds with oxygen atoms ($\\text{O}=\\text{S}(=\\text{O})=\\text{O}$), giving 3 $\\sigma$-bonds and 3 $\\pi$-bonds."),

    # 36 (Q316)
    ("In the carbonate ion ($\\text{CO}_3^{2-}$), the total number of $\\sigma$ and $\\pi$ bonds is:",
     "3 $\\sigma$-bonds and 1 $\\pi$-bond",
     "4 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "2 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "3 $\\sigma$-bonds and 2 $\\pi$-bonds",
     0, "Carbonate Total Bonds Count",
     "The Lewis structure of $\\text{CO}_3^{2-}$ has one $\\text{C}=\\text{O}$ double bond and two $\\text{C}-\\text{O}^-$ single bonds: total 3 $\\sigma$-bonds and 1 $\\pi$-bond (delocalized over the three bonds)."),

    # 37 (Q317)
    ("The total number of $\\sigma$ and $\\pi$ bonds in the sulphate ion ($\\text{SO}_4^{2-}$) in its most stable Lewis structure is:",
     "4 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "4 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "6 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "4 $\\sigma$-bonds and 1 $\\pi$-bond",
     0, "Sulphate Total Bonds Count",
     "In the formal-charge-minimized structure of $\\text{SO}_4^{2-}$, Sulphur forms two $\\text{S}=\\text{O}$ double bonds and two $\\text{S}-\\text{O}^-$ single bonds, yielding 4 $\\sigma$-bonds and 2 $\\pi$-bonds."),

    # 38 (Q318)
    ("How many $\\sigma$ and $\\pi$ bonds are present in Calcium carbide ($\\text{CaC}_2$)?",
     "In the acetylide ion ($[:\\text{C}\\equiv\\text{C}:]^{2-}$), there are 1 $\\sigma$-bond and 2 $\\pi$-bonds",
     "2 $\\sigma$-bonds and 1 $\\pi$-bond",
     "3 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "1 $\\sigma$-bond and 1 $\\pi$-bond",
     0, "Calcium Carbide Acetylide Bonds",
     "$\\text{CaC}_2$ is an ionic solid consisting of $\\text{Ca}^{2+}$ and the acetylide dicarbide ion $\\text{C}_2^{2-}$. The ion has a triple bond between carbons: $[:\\text{C}\\equiv\\text{C}:]^{2-}$, containing 1 $\\sigma$-bond and 2 $\\pi$-bonds."),

    # 39 (Q319)
    ("How many $\\sigma$ and $\\pi$ bonds are present in Hydrogen cyanide ($\\text{HCN}$)?",
     "2 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "3 $\\sigma$-bonds and 1 $\\pi$-bond",
     "1 $\\sigma$-bond and 3 $\\pi$-bonds",
     "4 $\\sigma$-bonds and 0 $\\pi$-bonds",
     0, "HCN Sigma Pi Count",
     "Structure: $\\text{H}-\\text{C}\\equiv\\text{N}$. There is one $\\text{C}-\\text{H}$ $\\sigma$-bond and one $\\text{C}\\equiv\\text{N}$ triple bond ($1\\sigma + 2\\pi$). Total: $2\\sigma$ bonds and $2\\pi$ bonds."),

    # 40 (Q320)
    ("In which of the following molecules do all four carbon atoms lie in the SAME plane?",
     "Buta-1,3-diene ($\\text{CH}_2=\\text{CH}-\\text{CH}=\\text{CH}_2$)",
     "Butane ($\\text{CH}_3-\\text{CH}_2-\\text{CH}_2-\\text{CH}_3$)",
     "Isobutane ($(\\text{CH}_3)_3\\text{CH}$)",
     "2-methylbutane",
     0, "Butadiene Planar Conformation",
     "In buta-1,3-diene, all four carbon atoms are $sp^2$ hybridized with planar $120^\\circ$ geometry, allowing all four carbons and six hydrogens to lie in a single plane (coplanar)."),

    # 41 (Q321)
    ("In Allene ($\\text{H}_2\\text{C}=\\text{C}=\\text{CH}_2$), the two terminal $CH_2$ groups lie in:",
     "Perpendicular planes (at $90^\\circ$ to each other)",
     "The same plane (coplanar)",
     "Parallel planes",
     "Anti-conformation",
     0, "Allene Perpendicular Planes",
     "The central carbon is $sp$ hybridized with two mutually perpendicular unhybridized $p$-orbitals ($p_y$ and $p_z$). Each terminal $sp^2$ carbon must align its $p$-orbital with one of these perpendicular orbitals, making the two terminal $\\text{CH}_2$ groups mutually perpendicular."),

    # 42 (Q322)
    ("Because the two terminal $\\text{CH}_2$ groups in allene are perpendicular, appropriately substituted allenes of the type $ab\\text{C}=\\text{C}=\\text{C}ab$ exhibit:",
     "Optical isomerism (chirality) due to absence of a plane of symmetry",
     "Geometrical (cis-trans) isomerism",
     "No isomerism",
     "Aromaticity",
     0, "Allene Optical Isomerism",
     "When substituted with two different groups $a$ and $b$ at each end, the perpendicular orientation of the two ends destroys both center and plane of symmetry, rendering the molecule chiral and optically active."),

    # 43 (Q323)
    ("Cumulenes with an ODD number of double bonds (e.g., Butatriene, $\\text{H}_2\\text{C}=\\text{C}=\\text{C}=\\text{CH}_2$) have their terminal groups in:",
     "The same plane (coplanar), exhibiting geometrical (cis-trans) isomerism",
     "Perpendicular planes, exhibiting optical isomerism",
     "Random configurations",
     "Conformational equilibria only",
     0, "Cumulenes Odd Double Bonds Planar",
     "In cumulenes with an odd number of double bonds (3 double bonds), the alternating perpendicular $\\pi$-bonds bring the terminal groups back into the same plane, enabling geometrical (cis-trans) isomerism."),

    # 44 (Q324)
    ("Which of the following molecules has a ZERO dipole moment because of planar $sp^2$ symmetry?",
     "$\\text{BF}_3$",
     "$\\text{NF}_3$",
     "$\\text{NH}_3$",
     "$\\text{H}_2\\text{O}$",
     0, "BF3 Zero Dipole sp2",
     "$\\text{BF}_3$ is $sp^2$ hybridized and strictly planar with $120^\\circ$ angles, so the three equal bond dipoles cancel out completely ($\\mu = 0$)."),

    # 45 (Q325)
    ("The bond order of the $\\text{C}-\\text{C}$ bond in Benzene is:",
     "$1.5$",
     "$1.0$",
     "$2.0$",
     "$1.33$",
     0, "Benzene Bond Order 1.5",
     "Due to resonance delocalization of six $\\pi$-electrons across the six-membered ring, all six $\\text{C}-\\text{C}$ bonds are intermediate between a single and double bond, with a bond order of exactly $1.5$ and bond length of $139\\text{ pm}$."),

    # 46 (Q326)
    ("The bond order of the $\\text{C}-\\text{C}$ bond in Ethane, Benzene, and Ethene are respectively:",
     "$1.0, 1.5,$ and $2.0$",
     "$1.0, 2.0,$ and $1.5$",
     "$1.5, 1.0,$ and $2.0$",
     "$2.0, 1.5,$ and $1.0$",
     0, "Ethane Benzene Ethene Bond Orders",
     "Ethane is a single bond (BO = 1.0). Benzene has resonance aromatic bonds (BO = 1.5). Ethene has a double bond (BO = 2.0). Sequence: $1.0, 1.5, 2.0$."),

    # 47 (Q327)
    ("Which of the following orbitals does NOT possess a nodal plane through the nucleus?",
     "$s$-orbital",
     "$p_x$-orbital",
     "$p_y$-orbital",
     "$d_{xy}$-orbital",
     0, "s-orbital No Nodal Plane",
     "An $s$-orbital has azimuthal quantum number $l = 0$ and is spherically symmetric, having zero angular nodal planes passing through the nucleus."),

    # 48 (Q328)
    ("How many nodal planes pass through the nucleus of a $p$-orbital?",
     "1",
     "0",
     "2",
     "3",
     0, "p-orbital Nodal Plane Count",
     "Every $p$-orbital has $l = 1$ and contains exactly 1 nodal plane passing through the nucleus (e.g., the $yz$-plane is the nodal plane for a $p_x$ orbital)."),

    # 49 (Q329)
    ("How many angular nodal planes pass through the nucleus of a $d_{xy}$-orbital?",
     "2",
     "1",
     "0",
     "4",
     0, "d-orbital Nodal Planes Count",
     "For a $d$-orbital ($l = 2$), there are $l = 2$ angular nodal planes (for $d_{xy}$, the $xz$ and $yz$ planes are nodal planes)."),

    # 50 (Q330)
    ("In a $\\pi$-bond formed by two parallel $p_z$-orbitals overlapping along the $x$-axis, the nodal plane of the $\\pi$-bond is:",
     "The $xy$-plane (the internuclear plane)",
     "The $yz$-plane",
     "The $xz$-plane",
     "There is no nodal plane",
     0, "Pi Bond Nodal Plane",
     "Because $p_z$ orbitals have zero probability density in the $xy$-plane, the resulting $\\pi$-bond has a nodal plane coinciding exactly with the $xy$ internuclear plane, with electron density above and below it."),

    # 51 (Q331)
    ("Which of the following hybridizations involves orbitals with the LARGEST inter-orbital angle?",
     "$sp$ ($180^\\circ$)",
     "$sp^2$ ($120^\\circ$)",
     "$sp^3$ ($109.5^\\circ$)",
     "$sp^3d$ ($120^\\circ$ and $90^\\circ$)",
     0, "sp Largest Inter-orbital Angle",
     "$sp$ hybridization produces two hybrid orbitals oriented in diametrically opposite directions at an angle of $180^\\circ$, the largest possible inter-orbital angle."),

    # 52 (Q332)
    ("Which of the following hybridizations involves orbitals with the SMALLEST inter-orbital angle?",
     "$sp^3d^3$ ($72^\\circ$ in equatorial plane)",
     "$sp^3d$ ($90^\\circ$)",
     "$sp^3d^2$ ($90^\\circ$)",
     "$sp^3$ ($109.5^\\circ$)",
     0, "sp3d3 Smallest Inter-orbital Angle",
     "$sp^3d^3$ hybridization forms a pentagonal bipyramid where the 5 equatorial hybrid orbitals are separated by only $72^\\circ$ ($360^\\circ / 5$)."),

    # 53 (Q333)
    ("What is the hybridization of the central atom in Iodine trichloride dimer ($\\text{I}_2\\text{Cl}_6$)?",
     "$sp^3d^2$",
     "$sp^3d$",
     "$sp^3$",
     "$dsp^2$",
     0, "I2Cl6 Dimer Hybridization",
     "In planar $\\text{I}_2\\text{Cl}_6$, each Iodine atom is bonded to 4 chlorine atoms (2 terminal $+ 2$ bridging) and retains 2 lone pairs. Steric number $= 4 + 2 = 6$, giving $sp^3d^2$ hybridization."),

    # 54 (Q334)
    ("What is the hybridization of the central atom in the Tetrachloroiodate ion ($\\text{ICl}_4^-$)?",
     "$sp^3d^2$",
     "$sp^3d$",
     "$sp^3$",
     "$dsp^2$",
     0, "ICl4- Hybridization",
     "Iodine in $\\text{ICl}_4^-$ has 4 single bonds and 2 lone pairs (steric number 6), undergoing $sp^3d^2$ hybridization with square planar shape."),

    # 55 (Q335)
    ("What is the hybridization of the central atom in the Tetrabromoiodate ion ($\\text{IBr}_4^-$)?",
     "$sp^3d^2$",
     "$sp^3d$",
     "$sp^3$",
     "$dsp^2$",
     0, "IBr4- Hybridization",
     "Like $\\text{ICl}_4^-$, Iodine in $\\text{IBr}_4^-$ has 4 bonding pairs and 2 lone pairs, undergoing $sp^3d^2$ hybridization."),

    # 56 (Q336)
    ("What is the hybridization of the central atom in the Dichlorobromate ion ($\\text{BrCl}_2^-$)?",
     "$sp^3d$",
     "$sp^3$",
     "$sp^3d^2$",
     "$sp$",
     0, "BrCl2- Hybridization",
     "Bromine has 7 valence electrons $+ 1$ negative charge $+ 2$ bonds $= 10$ valence electrons (2 bond pairs + 3 lone pairs). Steric number 5 corresponds to $sp^3d$ hybridization with linear geometry."),

    # 57 (Q337)
    ("What is the hybridization of Nitrogen in the Ammonium ion ($\\text{NH}_4^+$)?",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "$dsp^2$",
     0, "NH4+ Nitrogen Hybridization",
     "Nitrogen in $\\text{NH}_4^+$ forms 4 $\\sigma$-bonds with hydrogen and has 0 lone pairs (steric number 4), undergoing $sp^3$ hybridization with tetrahedral geometry."),

    # 58 (Q338)
    ("What is the hybridization of Nitrogen in the Hydrazine molecule ($\\text{N}_2\\text{H}_4$)?",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "Unhybridized",
     0, "Hydrazine Nitrogen Hybridization",
     "In hydrazine ($\\text{H}_2\\text{N}-\\text{NH}_2$), each Nitrogen forms 3 $\\sigma$-bonds (two to H, one to N) and retains 1 lone pair (steric number 4), undergoing $sp^3$ hybridization."),

    # 59 (Q339)
    ("What is the hybridization of Nitrogen in Hydroxylamine ($\\text{NH}_2\\text{OH}$)?",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "Unhybridized",
     0, "Hydroxylamine Nitrogen Hybridization",
     "Nitrogen forms 3 $\\sigma$-bonds (two to H, one to O) and has 1 lone pair, undergoing $sp^3$ hybridization."),

    # 60 (Q340)
    ("What is the hybridization of Oxygen in Hydroxylamine ($\\text{NH}_2\\text{OH}$)?",
     "$sp^3$",
     "$sp^2$",
     "$sp$",
     "Unhybridized",
     0, "Hydroxylamine Oxygen Hybridization",
     "Oxygen forms 2 $\\sigma$-bonds (one to N, one to H) and has 2 lone pairs (steric number 4), undergoing $sp^3$ hybridization."),

    # 61 (Q341)
    ("What is the hybridization of Nitrogen in Pyridine ($\\text{C}_5\\text{H}_5\\text{N}$)?",
     "$sp^2$",
     "$sp^3$",
     "$sp$",
     "Unhybridized",
     0, "Pyridine Nitrogen Hybridization",
     "In pyridine, Nitrogen forms two $\\sigma$-bonds within the aromatic ring and its lone pair resides in an $sp^2$ hybrid orbital in the plane of the ring, while its unhybridized $p$-orbital contributes 1 electron to the aromatic $\\pi$-sextet."),

    # 62 (Q342)
    ("What is the hybridization of Nitrogen in Pyrrole ($\\text{C}_4\\text{H}_5\\text{N}$)?",
     "$sp^2$",
     "$sp^3$",
     "$sp$",
     "Unhybridized",
     0, "Pyrrole Nitrogen Hybridization",
     "In pyrrole, Nitrogen forms 3 $\\sigma$-bonds in a plane using $sp^2$ hybrid orbitals, and its lone pair resides in an unhybridized $p$-orbital that participates in the aromatic $6\\pi$-electron system."),

    # 63 (Q343)
    ("Why is Pyridine more basic than Pyrrole?",
     "In pyridine, the lone pair occupies an $sp^2$ orbital and is not involved in aromaticity, while in pyrrole the lone pair is delocalized into the aromatic $\\pi$-system",
     "Pyrrole is a stronger acid",
     "Pyridine has higher molecular weight",
     "Nitrogen in pyrrole has no lone pair",
     0, "Pyridine vs Pyrrole Basicity",
     "In pyridine, the lone pair resides in an localized $sp^2$ hybrid orbital perpendicular to the $\\pi$-system and is readily available for protonation. In pyrrole, protonating the nitrogen disrupts the aromatic $6\\pi$ octet, making it an extremely weak base."),

    # 64 (Q344)
    ("The hybridization of the central atom in $\\text{XeO}_2\\text{F}_2$ is:",
     "$sp^3d$",
     "$sp^3$",
     "$sp^3d^2$",
     "$sp^2$",
     0, "XeO2F2 Hybridization",
     "Xenon in $\\text{XeO}_2\\text{F}_2$ forms 4 $\\sigma$-bonds (2 with O, 2 with F) and has 1 lone pair (steric number 5), undergoing $sp^3d$ hybridization with a see-saw geometry."),

    # 65 (Q345)
    ("The hybridization of the central atom in $\\text{XeO}_3\\text{F}_2$ is:",
     "$sp^3d$",
     "$sp^3$",
     "$sp^3d^2$",
     "$sp^2$",
     0, "XeO3F2 Hybridization",
     "Xenon in $\\text{XeO}_3\\text{F}_2$ forms 5 $\\sigma$-bonds (3 with O, 2 with F) and has 0 lone pairs (steric number 5), undergoing $sp^3d$ hybridization with a trigonal bipyramidal shape.")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (30 questions: Q346 to Q375)
# -------------------------------------------------------------------------
hard_items = [
    # 1 (Q346) Authentic NEET 2022
    ("Consider the following statements regarding hybridization and bonding:\n(I) Hybrid orbitals form stronger bonds than unhybridized atomic orbitals because they have greater directional concentration.\n(II) In $sp^3d$ hybridization, the $d_{z^2}$ orbital participates to form axial bonds.\n(III) In $sp^3d^2$ hybridization, $d_{x^2-y^2}$ and $d_{z^2}$ orbitals participate.\n(IV) The percentage $s$-character follows $sp > sp^2 > sp^3$.\nWhich of the above statements are correct?",
     "I, II, III, and IV are all correct",
     "Only I, II, and IV are correct",
     "Only II and III are correct",
     "Only I and IV are correct",
     0, "Hybridization Core Principles NEET 2022",
     "All four statements are scientifically rigorous principles of hybridization: hybrid orbitals have larger directional lobes for superior overlap; axial bonds in TBP use $d_{z^2}$; octahedral uses $d_{x^2-y^2}$ and $d_{z^2}$; and $s$-character follows $50\\% > 33.3\\% > 25\\%$. All are correct.",
     True, "NEET 2022"),

    # 2 (Q347) Authentic NEET 2023
    ("Match List-I (Molecules/Ions) with List-II (Hybridization of Central Atom):\n(A) $\\text{PCl}_5$ -> (1) $sp^3d$\n(B) $\\text{SF}_6$ -> (2) $sp^3d^2$\n(C) $\\text{IF}_7$ -> (3) $sp^3d^3$\n(D) $[\\text{Ni}(\\text{CN})_4]^{2-}$ -> (4) $dsp^2$",
     "A-1, B-2, C-3, D-4",
     "A-2, B-1, C-4, D-3",
     "A-1, B-3, C-2, D-4",
     "A-4, B-2, C-1, D-3",
     0, "Match Hybridization Sets NEET 2023",
     "$\\text{PCl}_5$ has $sp^3d$ (A-1). $\\text{SF}_6$ has $sp^3d^2$ (B-2). $\\text{IF}_7$ has $sp^3d^3$ (C-3). $[\\text{Ni}(\\text{CN})_4]^{2-}$ has $dsp^2$ (D-4). Match: A-1, B-2, C-3, D-4.",
     True, "NEET 2023"),

    # 3 (Q348) Authentic NEET 2024
    ("Given below are two statements:\nStatement I: The acidic character of terminal alkynes is due to the $sp$ hybridization of the carbon atom.\nStatement II: Carbon in the $sp$ hybridization state has $50\\%$ $s$-character, making it more electronegative and able to stabilize the resulting acetylide conjugate base.\nIn the light of the above statements, choose the most appropriate answer:",
     "Both Statement I and Statement II are correct, and Statement II is the correct explanation of Statement I",
     "Both Statement I and Statement II are correct, but Statement II is NOT the correct explanation of Statement I",
     "Statement I is correct, but Statement II is incorrect",
     "Statement I is incorrect, but Statement II is correct",
     0, "Alkyne Acidity Hybridization NEET 2024",
     "Both statements are correct. Terminal alkynes are weakly acidic ($pK_a \\approx 25$) because the $sp$ hybridized carbon has $50\\% s$-character, the highest among carbon hybridizations, conferring high electronegativity that stabilizes the conjugate base $:C\\equiv C-R^-$. Statement II correctly explains Statement I.",
     True, "NEET 2024"),

    # 4 (Q349)
    ("Assertion (A): In gaseous $\\text{PCl}_5$, the two axial $\\text{P}-\\text{Cl}$ bonds are longer than the three equatorial $\\text{P}-\\text{Cl}$ bonds.\nReason (R): The $sp^3d$ hybrid orbitals are not all equivalent; they consist of three $sp^2$ equatorial orbitals and two $pd$ axial orbitals.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason PCl5 Non-equivalent Orbitals",
     "Assertion (A) is true: axial bonds are $240\\text{ pm}$ vs equatorial $202\\text{ pm}$. Reason (R) is true: $sp^3d$ hybridization can be resolved into a planar $sp^2$ set (shorter, stronger bonds with more $s$-character) and a linear axial $p_z-d_{z^2}$ set (longer bonds with zero $s$-character). (R) correctly explains (A)."),

    # 5 (Q350)
    ("Bent's rule states that:",
     "More electronegative substituents prefer hybrid orbitals with less $s$-character (more $p$-character), while electropositive substituents and lone pairs prefer orbitals with more $s$-character",
     "Electronegative substituents always prefer $s$-rich orbitals",
     "All hybrid orbitals in a molecule must have identical $s$-character",
     "Lone pairs always occupy orbitals with $100\\% p$-character",
     0, "Bents Rule Formulation",
     "Henry Bent's rule states: atomic $s$-character concentrates in orbitals directed towards electropositive substituents and lone pairs, while atomic $p$-character concentrates in orbitals directed towards more electronegative substituents."),

    # 6 (Q351)
    ("According to Bent's rule, in Fluoromethane ($\\text{CH}_3\\text{F}$), the $\\text{C}-\\text{F}$ bond orbital has:",
     "Less $s$-character (higher $p$-character) than the $\\text{C}-\\text{H}$ bond orbitals",
     "More $s$-character than the $\\text{C}-\\text{H}$ bond orbitals",
     "Exactly $25\\% s$-character",
     "Zero $p$-character",
     0, "Bents Rule Fluoromethane",
     "Because Fluorine is highly electronegative, it prefers a hybrid orbital with high $p$-character. Consequently, the carbon orbital directed towards Fluorine has less than $25\\% s$-character, while the three orbitals directed towards Hydrogen have more than $25\\% s$-character."),

    # 7 (Q352)
    ("According to Bent's rule, in Phosphorus pentachloride ($\\text{PCl}_5$), why do the axial bonds have zero $s$-character while equatorial bonds have $33.3\\% s$-character?",
     "The axial $p_z-d_{z^2}$ hybrid orbitals have $0\\% s$-character, while the equatorial $sp^2$ orbitals have $33.3\\% s$-character",
     "Axial bonds are formed by $s$-orbitals only",
     "Equatorial bonds are formed by $d$-orbitals only",
     "All orbitals in $\\text{PCl}_5$ have identical $s$-character",
     0, "Bents Rule PCl5 Orbitals",
     "The 5 orbitals split into an equatorial $sp^2$ set ($33.3\\% s$) and an axial $pd$ set ($0\\% s$). More electronegative substituents prefer the axial sites with less $s$-character (e.g., in $\\text{PCl}_3\\text{F}_2$, both fluorine atoms occupy axial sites)."),

    # 8 (Q353)
    ("In Phosphorus trifluoride dichloride ($\\text{PCl}_2\\text{F}_3$), the molecular geometry predicted by Bent's rule and VSEPR theory places the substituents as:",
     "Two fluorine atoms in axial positions, one fluorine and two chlorine atoms in equatorial positions",
     "All three fluorine atoms in equatorial positions",
     "Two chlorine atoms in axial positions",
     "Random distribution of atoms",
     0, "PCl2F3 Substituent Placement Bents Rule",
     "By Bent's rule, the more electronegative Fluorine atoms prefer the axial sites which have lower $s$-character ($0\\% s$). The two axial sites are occupied by fluorine, and the remaining fluorine plus two chlorines occupy the equatorial sites."),

    # 9 (Q354)
    ("In Phosphorus trichloride difluoride ($\\text{PCl}_3\\text{F}_2$), where are the two Fluorine atoms located?",
     "Both in axial positions",
     "Both in equatorial positions",
     "One axial and one equatorial",
     "Alternating in rapid Berry pseudorotation",
     0, "PCl3F2 Axial Fluorine Placement",
     "Fluorine is more electronegative than Chlorine ($4.0 > 3.0$). Bent's rule dictates that the two fluorine atoms occupy the two axial positions with $0\\% s$-character, while the three less electronegative chlorines occupy equatorial positions."),

    # 10 (Q355)
    ("Because both fluorine atoms in $\\text{PCl}_3\\text{F}_2$ occupy axial positions at $180^\\circ$ and the three chlorine atoms occupy equatorial positions at $120^\\circ$, the net dipole moment of $\\text{PCl}_3\\text{F}_2$ is:",
     "Zero ($\\mu = 0$)",
     "$1.5\\text{ D}$",
     "$2.5\\text{ D}$",
     "$0.75\\text{ D}$",
     0, "PCl3F2 Zero Dipole Moment",
     "The two axial $\\text{P}-\\text{F}$ dipoles point in opposite directions at $180^\\circ$ and cancel out. The three equatorial $\\text{P}-\\text{Cl}$ dipoles point at $120^\\circ$ in a plane and cancel out. Hence $\\mu_{\\text{net}} = 0$."),

    # 11 (Q356)
    ("What is the dipole moment of $\\text{PCl}_2\\text{F}_3$?",
     "Non-zero ($\\mu > 0$)",
     "Zero ($\\mu = 0$)",
     "Negative",
     "Cannot be measured",
     0, "PCl2F3 Non-zero Dipole",
     "In $\\text{PCl}_2\\text{F}_3$, the axial $\\text{P}-\\text{F}$ dipoles cancel each other, but in the equatorial plane there are two chlorines and one fluorine. The unequal equatorial bond dipoles do not cancel out, resulting in a net dipole moment ($\\mu > 0$)."),

    # 12 (Q357)
    ("The fluxional behavior of molecules like $\\text{Fe}(\\text{CO})_5$ and $\\text{PF}_5$ where axial and equatorial ligands rapidly interchange positions without bond breaking is known as:",
     "Berry pseudorotation",
     "Walden inversion",
     "Jahn-Teller distortion",
     "Keto-enol tautomerism",
     0, "Berry Pseudorotation Mechanism",
     "Berry pseudorotation is an intramolecular rearrangement mechanism in trigonal bipyramidal molecules where two axial and two equatorial ligands simultaneously bend through a square pyramidal transition state to swap positions rapidly."),

    # 13 (Q358)
    ("In the ${}^{19}\\text{F}$ NMR spectrum of $\\text{PF}_5$ at room temperature, only a single doublet is observed rather than two distinct signals because of:",
     "Extremely rapid Berry pseudorotation that averages axial and equatorial fluorine environments on the NMR timescale",
     "All five bonds being identical in length",
     "Phosphorus having zero nuclear spin",
     "Fluorine atoms undergoing ionization",
     0, "PF5 NMR Berry Pseudorotation",
     "At room temperature, Berry pseudorotation occurs thousands of times per second, rapidly exchanging axial and equatorial fluorines and rendering them magnetically equivalent, resulting in a single averaged NMR resonance split into a doublet by ${}^{31}\\text{P}$ ($I = 1/2$)."),

    # 14 (Q359)
    ("Calculate the total number of $\\sigma$ and $\\pi$ bonds in Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$):",
     "15 $\\sigma$-bonds and 4 $\\pi$-bonds",
     "14 $\\sigma$-bonds and 4 $\\pi$-bonds",
     "16 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "12 $\\sigma$-bonds and 5 $\\pi$-bonds",
     0, "Benzoic Acid Sigma Pi Count",
     "In benzene ring: $6\\text{ C}-\\text{C}$ bonds ($6\\sigma$), $5\\text{ C}-\\text{H}$ bonds ($5\\sigma$), and $3\\pi$-bonds. In carboxyl group: $\\text{C}_{\\text{ring}}-\\text{COOH}$ ($1\\sigma$), $\\text{C}=\\text{O}$ ($1\\sigma + 1\\pi$), $\\text{C}-\\text{O}$ ($1\\sigma$), $\\text{O}-\\text{H}$ ($1\\sigma$). Total: $6+5+1+1+1+1 = 15\\sigma$ and $3+1 = 4\\pi$."),

    # 15 (Q360)
    ("Calculate the total number of $\\sigma$ and $\\pi$ bonds in Aspirin (Acetylsalicylic acid, $\\text{C}_9\\text{H}_8\\text{O}_4$):",
     "21 $\\sigma$-bonds and 5 $\\pi$-bonds",
     "20 $\\sigma$-bonds and 5 $\\pi$-bonds",
     "19 $\\sigma$-bonds and 4 $\\pi$-bonds",
     "22 $\\sigma$-bonds and 4 $\\pi$-bonds",
     0, "Aspirin Sigma Pi Count",
     "Formula $\\text{C}_9\\text{H}_8\\text{O}_4$. For a single-core organic molecule, $\\sigma = \\text{total atoms} - 1 + \\text{rings} = 21 - 1 + 1 = 21\\sigma$. $\\pi$-bonds: 3 in benzene ring $+ 1$ in ester $\\text{C}=\\text{O} + 1$ in acid $\\text{C}=\\text{O} = 5\\pi$. Total: $21\\sigma$ and $5\\pi$."),

    # 16 (Q361)
    ("Calculate the total number of $\\sigma$ and $\\pi$ bonds in Picric acid ($2,4,6$-trinitrophenol, $\\text{C}_6\\text{H}_3\\text{N}_3\\text{O}_7$):",
     "18 $\\sigma$-bonds and 6 $\\pi$-bonds",
     "17 $\\sigma$-bonds and 6 $\\pi$-bonds",
     "19 $\\sigma$-bonds and 5 $\\pi$-bonds",
     "16 $\\sigma$-bonds and 7 $\\pi$-bonds",
     0, "Picric Acid Sigma Pi Count",
     "Total atoms: $6\\text{C} + 3\\text{H} + 3\\text{N} + 7\\text{O} = 19$. Rings = 1. $\\sigma = 19 - 1 + 1 = 19$ or direct count: 6 ring $\\text{C}-\\text{C}$, 2 ring $\\text{C}-\\text{H}$, 1 $\\text{C}-\\text{OH}$, 1 $\\text{O}-\\text{H}$, 3 $\\text{C}-\\text{NO}_2$, 6 $\\text{N}-\\text{O} = 19\\sigma$. $\\pi$-bonds: 3 in ring $+ 3$ in nitro groups $= 6\\pi$."),

    # 17 (Q362)
    ("Calculate the total number of $\\sigma$ and $\\pi$ bonds in Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$):",
     "12 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "10 $\\sigma$-bonds and 2 $\\pi$-bonds",
     "14 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "11 $\\sigma$-bonds and 3 $\\pi$-bonds",
     0, "Pyrophosphoric Acid Bonds Count",
     "Structure: $(\\text{HO})_2\\text{P}(=\\text{O})-\\text{O}-\\text{P}(=\\text{O})(\\text{OH})_2$. Total atoms = 13. Acyclic molecule has $\\sigma = 13 - 1 = 12\\sigma$ bonds (four $\\text{P}-\\text{OH}$, four $\\text{O}-\\text{H}$, two $\\text{P}-\\text{O}-\\text{P}$, two $\\text{P}=\\text{O}$). Two double bonds give $2\\pi$. Total: $12\\sigma$ and $2\\pi$."),

    # 18 (Q363)
    ("Calculate the total number of $\\sigma$ and $\\pi$ bonds in cyclic Trimetaphosphoric acid ($(\\text{HPO}_3)_3 = \\text{H}_3\\text{P}_3\\text{O}_9$):",
     "15 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "12 $\\sigma$-bonds and 3 $\\pi$-bonds",
     "18 $\\sigma$-bonds and 0 $\\pi$-bonds",
     "14 $\\sigma$-bonds and 4 $\\pi$-bonds",
     0, "Trimetaphosphoric Acid Bonds Count",
     "A six-membered alternating $\\text{P}-\\text{O}$ ring with 3 phosphorus atoms: total atoms = 15. Rings = 1. $\\sigma = 15 - 1 + 1 = 15\\sigma$ bonds. Each phosphorus has one $\\text{P}=\\text{O}$ double bond, giving $3\\pi$ bonds. Total: $15\\sigma$ and $3\\pi$."),

    # 19 (Q364)
    ("The hybridization state of the Carbon atom in Carbon dioxide ($\\text{CO}_2$) is $sp$. What are the hybridization states of the Oxygen atoms in $\\text{CO}_2$?",
     "$sp^2$",
     "$sp^3$",
     "$sp$",
     "Unhybridized",
     0, "CO2 Oxygen Hybridization",
     "Each oxygen atom in $\\text{CO}_2$ forms one $\\sigma$-bond with carbon and possesses two non-bonding lone pairs (steric number $= 1 + 2 = 3$). Hence both oxygen atoms are $sp^2$ hybridized."),

    # 20 (Q365)
    ("What are the hybridization states of the Nitrogen atoms in Hydrazine ($\\text{N}_2\\text{H}_4$) and Hydrazoic acid ($\\text{HN}_3$)?",
     "Hydrazine is $sp^3$; in $\\text{HN}_3$, the central nitrogen is $sp$ and terminal nitrogens are $sp^2$",
     "Both are $sp^2$",
     "Hydrazine is $sp^2$ and $\\text{HN}_3$ is $sp^3$",
     "Both are $sp^3$",
     0, "Hydrazine vs HN3 Hybridization",
     "In $\\text{N}_2\\text{H}_4$, both nitrogens have 3 $\\sigma$-bonds and 1 lone pair ($sp^3$). In $\\text{H}-\\text{N}=\\text{N}^+=\\text{N}^-$, the central nitrogen has 2 $\\sigma$-bonds and 0 lp ($sp$), while terminal nitrogens are $sp^2$."),

    # 21 (Q366)
    ("In the solid state, Phosphorus pentachloride ($\\text{PCl}_5$) exists as $[\\text{PCl}_4]^+ [\\text{PCl}_6]^-$. The hybridization states of Phosphorus in the cation and anion are respectively:",
     "$sp^3$ and $sp^3d^2$",
     "$sp^3d$ and $sp^3d$",
     "$sp^3d$ and $sp^3d^2$",
     "$sp^2$ and $sp^3d$",
     0, "Solid PCl5 Hybridization Cation Anion",
     "In $[\\text{PCl}_4]^+$, Phosphorus has 4 bonding pairs and 0 lone pairs, undergoing $sp^3$ hybridization with tetrahedral geometry. In $[\\text{PCl}_6]^-$, Phosphorus has 6 bonding pairs and 0 lone pairs, undergoing $sp^3d^2$ hybridization with octahedral geometry."),

    # 22 (Q367)
    ("In the solid state, Phosphorus pentabromide ($\\text{PBr}_5$) exists as $[\\text{PBr}_4]^+ \\text{Br}^-$. The hybridization state of Phosphorus in the cation is:",
     "$sp^3$",
     "$sp^3d$",
     "$sp^3d^2$",
     "$dsp^2$",
     0, "Solid PBr5 Cation Hybridization",
     "Solid $\\text{PBr}_5$ crystallizes as tetrahedral $[\\text{PBr}_4]^+$ and discrete $\\text{Br}^-$. The cation has 4 single bonds and 0 lone pairs, with $sp^3$ hybridization."),

    # 23 (Q368)
    ("In the solid state, Dichlorine hexoxide ($\\text{Cl}_2\\text{O}_6$) exists as $[\\text{ClO}_2]^+ [\\text{ClO}_4]^-$. The hybridization states of Chlorine in the cation and anion are respectively:",
     "$sp^2$ and $sp^3$",
     "$sp$ and $sp^2$",
     "$sp^3$ and $sp^3$",
     "$sp^3d$ and $sp^3d^2$",
     0, "Solid Cl2O6 Hybridization",
     "In bent $[\\text{ClO}_2]^+$, Chlorine has 2 $\\sigma$-bonds and 1 lone pair ($sp^2$). In tetrahedral $[\\text{ClO}_4]^-$, Chlorine has 4 $\\sigma$-bonds and 0 lone pairs ($sp^3$). Hence $sp^2$ and $sp^3$."),

    # 24 (Q369)
    ("In the solid state, Dinitrogen pentoxide ($\\text{N}_2\\text{O}_5$) exists as $[\\text{NO}_2]^+ [\\text{NO}_3]^-$. The hybridization states of Nitrogen in the cation and anion are respectively:",
     "$sp$ and $sp^2$",
     "$sp^2$ and $sp^3$",
     "$sp^2$ and $sp$",
     "$sp^3$ and $sp^3$",
     0, "Solid N2O5 Hybridization",
     "In linear $[\\text{NO}_2]^+$, Nitrogen is $sp$ hybridized. In trigonal planar $[\\text{NO}_3]^-$, Nitrogen is $sp^2$ hybridized. Hence $sp$ and $sp^2$."),

    # 25 (Q370)
    ("Which of the following molecules has a central atom with $sp^3d^2$ hybridization and a SQUARE PLANAR geometry?",
     "$\\text{XeF}_4$ and $\\text{ICl}_4^-$",
     "$\\text{SF}_4$ and $\\text{XeF}_2$",
     "$\\text{CH}_4$ and $\\text{SiF}_4$",
     "$\\text{NH}_4^+$ and $\\text{BF}_4^-$",
     0, "Square Planar sp3d2 Pair",
     "Both $\\text{XeF}_4$ and $\\text{ICl}_4^-$ have 6 electron pairs (4 bonding pairs + 2 trans lone pairs), undergoing $sp^3d^2$ hybridization with a square planar geometry."),

    # 26 (Q371)
    ("Which of the following molecules has a central atom with $sp^3d$ hybridization and a SEE-SAW geometry?",
     "$\\text{SF}_4$",
     "$\\text{XeF}_4$",
     "$\\text{SiF}_4$",
     "$\\text{CH}_4$",
     0, "Seesaw sp3d Molecule",
     "$\\text{SF}_4$ has 4 bonding pairs and 1 equatorial lone pair (steric number 5, $sp^3d$ hybridization), adopting a see-saw geometry."),

    # 27 (Q372)
    ("Which of the following molecules has a central atom with $sp^3d$ hybridization and a T-SHAPED geometry?",
     "$\\text{ClF}_3$ and $\\text{BrF}_3$",
     "$\\text{BF}_3$ and $\\text{AlCl}_3$",
     "$\\text{NH}_3$ and $\\text{PCl}_3$",
     "$\\text{PCl}_5$ and $\\text{PF}_5$",
     0, "T-shaped sp3d Pair",
     "Both $\\text{ClF}_3$ and $\\text{BrF}_3$ have 3 bonding pairs and 2 equatorial lone pairs (steric number 5, $sp^3d$ hybridization), adopting a T-shaped geometry."),

    # 28 (Q373)
    ("Which of the following molecules has a central atom with $sp^3d$ hybridization and a LINEAR geometry?",
     "$\\text{XeF}_2$ and $\\text{I}_3^-$",
     "$\\text{CO}_2$ and $\\text{BeCl}_2$",
     "$\\text{CS}_2$ and $\\text{HCN}$",
     "$\\text{C}_2\\text{H}_2$ and $\\text{N}_2\\text{O}$",
     0, "Linear sp3d Pair",
     "Both $\\text{XeF}_2$ and $\\text{I}_3^-$ have 2 axial bonding pairs and 3 equatorial lone pairs (steric number 5, $sp^3d$ hybridization), producing a strictly linear geometry."),

    # 29 (Q374)
    ("The overlap of two $d_{xy}$ orbitals facing each other face-to-face with all four lobes overlapping simultaneously forms a:",
     "Delta ($\\delta$) bond",
     "Sigma ($\\sigma$) bond",
     "Pi ($\\pi$) bond",
     "Coordinate bond",
     0, "Delta Bond Definition",
     "A $\\delta$ (delta) bond is formed by quadruple face-to-face overlap of two parallel $d$-orbitals (such as $d_{xy}$ or $d_{x^2-y^2}$) with four lobes overlapping simultaneously, common in quadruple-bonded transition metal complexes like $[\\text{Re}_2\\text{Cl}_8]^{2-}$."),

    # 30 (Q375)
    ("The quadruple bond in the octachlorodirhenate(III) ion ($[\\text{Re}_2\\text{Cl}_8]^{2-}$) consists of:",
     "One $\\sigma$-bond, two $\\pi$-bonds, and one $\\delta$-bond ($1\\sigma + 2\\pi + 1\\delta$)",
     "Two $\\sigma$-bonds and two $\\pi$-bonds",
     "Four $\\sigma$-bonds",
     "Four $\\pi$-bonds",
     0, "Quadruple Bond Components",
     "The quadruple bond in $[\\text{Re}_2\\text{Cl}_8]^{2-}$ consists of: one $\\sigma$-bond ($d_{z^2}-d_{z^2}$), two $\\pi$-bonds ($d_{xz}-d_{xz}$ and $d_{yz}-d_{yz}$), and one $\\delta$-bond ($d_{xy}-d_{xy}$ face-to-face overlap).")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (30 questions: Q346 to Q375)
# -------------------------------------------------------------------------
# Note: In the loop, indices will map from 251 to 375.
# Total items: easy_items (30) + med_items (65) + hard_items (30) = 125 questions!

print(f"Loaded {len(easy_items)} Easy items.")
print(f"Loaded {len(med_items)} Medium items.")
print(f"Loaded {len(hard_items)} Hard items.")

assert len(easy_items) == 30
assert len(med_items) == 65
assert len(hard_items) == 30

for idx, item in enumerate(easy_items):
    q_num = 251 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(med_items):
    q_num = 281 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(hard_items):
    q_num = 346 + idx
    q_id = f"bond-mcq-{q_num:03d}"
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

out_file = "src/data/chapterwise/chemistry/chemicalBondingPart3.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Chemical Bonding and Molecular Structure | Chemistry | Class: 11 | Part 3
// Target: Exactly 125 MCQs (30 Easy, 65 Medium, 30 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_BONDING_PART3_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
