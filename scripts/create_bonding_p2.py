#!/usr/bin/env python3
"""
Direct generator for Chemical Bonding and Molecular Structure - Part 2
Q126 to Q250: 35 Easy, 65 Medium, 25 Hard = 125 MCQs
Topics:
- VSEPR theory foundations and postulates
- Repulsion hierarchy: lp-lp > lp-bp > bp-bp
- Steric numbers and electron-pair geometries vs molecular shapes
- AB2 to AB7 molecules with and without lone pairs
- Bent shapes: SO2, O3, NO2-, H2O, H2S, Cl2O, OF2
- Trigonal pyramidal shapes: NH3, PCl3, AsH3, H3O+, ClO3-
- Trigonal bipyramidal and derivatives: PCl5, SF4 (see-saw), ClF3 (T-shaped), XeF2 & I3- (linear)
- Octahedral and derivatives: SF6, BrF5 & IF5 (square pyramidal), XeF4 & ICl4- (square planar)
- Pentagonal bipyramidal: IF7; Distorted octahedral: XeF6
- Bond angle trends and variations: CH4 vs NH3 vs H2O; NH3 vs NF3; H2O vs OF2 vs Cl2O
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
        "topicId": "chem-vsepr-theory",
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
    ("According to the Valence Shell Electron Pair Repulsion (VSEPR) theory, the correct decreasing order of repulsive interactions between electron pairs is:",
     "$\\text{lone pair - lone pair} > \\text{lone pair - bond pair} > \\text{bond pair - bond pair}$",
     "$\\text{bond pair - bond pair} > \\text{lone pair - bond pair} > \\text{lone pair - lone pair}$",
     "$\\text{lone pair - bond pair} > \\text{lone pair - lone pair} > \\text{bond pair - bond pair}$",
     "$\\text{lone pair - lone pair} = \\text{lone pair - bond pair} = \\text{bond pair - bond pair}$",
     0, "VSEPR Repulsion Order",
     "A lone pair is localized on a single nucleus and occupies more spatial volume than a shared bonding pair which is drawn between two positive nuclei. Hence electron-pair repulsions decrease in the order: $\\text{lp}-\\text{lp} > \\text{lp}-\\text{bp} > \\text{bp}-\\text{bp}$."),

    # 2 (Q127)
    ("What is the molecular geometry of a molecule with two bonding pairs and zero lone pairs around the central atom ($AB_2$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent / Angular",
     "Trigonal planar",
     "Tetrahedral",
     0, "AB2 Linear Geometry",
     "An $AB_2$ system with no lone pairs (e.g., $\\text{BeCl}_2, \\text{CO}_2$) arranges the two bond pairs at the maximum possible separation of $180^\\circ$, giving a linear molecular geometry."),

    # 3 (Q128)
    ("What is the molecular shape of an $AB_3$ molecule with three bonding pairs and zero lone pairs around the central atom?",
     "Trigonal planar (bond angle $120^\\circ$)",
     "Trigonal pyramidal",
     "T-shaped",
     "Tetrahedral",
     0, "AB3 Trigonal Planar Shape",
     "In an $AB_3$ system with no lone pairs (e.g., $\\text{BF}_3$), the three electron pairs minimize electrostatic repulsions by pointing to the vertices of an equilateral triangle at $120^\\circ$ in a single plane."),

    # 4 (Q129)
    ("What is the molecular shape of an $AB_4$ molecule with four bonding pairs and zero lone pairs around the central atom?",
     "Tetrahedral (bond angle $109.5^\\circ$)",
     "Square planar",
     "Trigonal pyramidal",
     "See-saw",
     0, "AB4 Tetrahedral Shape",
     "In an $AB_4$ molecule with zero lone pairs (e.g., $\\text{CH}_4, \\text{CCl}_4$), the four bonding pairs orient towards the four corners of a regular tetrahedron with equal bond angles of $109.5^\\circ$ ($109^\\circ 28'$)."),

    # 5 (Q130)
    ("What is the molecular shape of an $AB_5$ molecule with five bonding pairs and zero lone pairs around the central atom?",
     "Trigonal bipyramidal (bond angles $120^\\circ$ and $90^\\circ$)",
     "Square pyramidal",
     "Pentagonal planar",
     "Octahedral",
     0, "AB5 Trigonal Bipyramidal",
     "An $AB_5$ system (e.g., $\\text{PCl}_5$) adopts a trigonal bipyramidal geometry with 3 equatorial bonds in a plane at $120^\\circ$ and 2 axial bonds perpendicular to the equatorial plane at $90^\\circ$."),

    # 6 (Q131)
    ("What is the molecular shape of an $AB_6$ molecule with six bonding pairs and zero lone pairs around the central atom?",
     "Octahedral (bond angles $90^\\circ$)",
     "Trigonal bipyramidal",
     "Pentagonal bipyramidal",
     "Square planar",
     0, "AB6 Octahedral Shape",
     "In an $AB_6$ molecule (e.g., $\\text{SF}_6$), the six electron pairs orient towards the six vertices of a regular octahedron, with all adjacent bond angles equal to $90^\\circ$."),

    # 7 (Q132)
    ("What is the molecular shape of an $AB_7$ molecule with seven bonding pairs and zero lone pairs around the central atom?",
     "Pentagonal bipyramidal (bond angles $72^\\circ$ and $90^\\circ$)",
     "Octahedral",
     "Capped octahedral",
     "Square antiprismatic",
     0, "AB7 Pentagonal Bipyramidal",
     "In an $AB_7$ molecule (e.g., $\\text{IF}_7$), five equatorial bonds form a regular pentagon with angles of $360^\\circ/5 = 72^\\circ$, and two axial bonds lie along the vertical axis at $90^\\circ$."),

    # 8 (Q133)
    ("What is the molecular shape of an $AB_2E$ molecule with two bonding pairs and one lone pair (e.g., $\\text{SO}_2$)?",
     "Bent / V-shaped (bond angle $< 120^\\circ$)",
     "Linear",
     "Trigonal planar",
     "T-shaped",
     0, "AB2E Bent Shape",
     "The three electron pairs (2 bp + 1 lp) form a trigonal planar electron-pair geometry. The presence of the lone pair distorts the shape into a bent / V-shape with a bond angle slightly less than $120^\\circ$ ($\\approx 119.5^\\circ$ in $\\text{SO}_2$)."),

    # 9 (Q134)
    ("What is the molecular shape of an $AB_3E$ molecule with three bonding pairs and one lone pair (e.g., $\\text{NH}_3$)?",
     "Trigonal pyramidal (bond angle $< 109.5^\\circ$)",
     "Trigonal planar",
     "Tetrahedral",
     "T-shaped",
     0, "AB3E Trigonal Pyramidal",
     "The four electron pairs form a tetrahedral electron geometry. The single lone pair exerts extra repulsion on the three bond pairs, pushing them closer together into a trigonal pyramid with a bond angle of $107.8^\\circ$ in $\\text{NH}_3$."),

    # 10 (Q135)
    ("What is the molecular shape of an $AB_2E_2$ molecule with two bonding pairs and two lone pairs (e.g., $\\text{H}_2\\text{O}$)?",
     "Bent / Angular (bond angle $< 109.5^\\circ$)",
     "Linear",
     "Tetrahedral",
     "Trigonal planar",
     0, "AB2E2 Bent Shape Water",
     "The four electron pairs (2 bp + 2 lp) form a tetrahedral arrangement. Two strong $\\text{lp}-\\text{lp}$ and $\\text{lp}-\\text{bp}$ repulsions compress the $\\text{H}-\\text{O}-\\text{H}$ bond angle down to $104.5^\\circ$, giving a bent angular shape."),

    # 11 (Q136)
    ("What is the molecular shape of an $AB_4E$ molecule with four bonding pairs and one lone pair (e.g., $\\text{SF}_4$)?",
     "See-saw",
     "Square planar",
     "Tetrahedral",
     "Trigonal bipyramidal",
     0, "AB4E Seesaw SF4",
     "In a 5-coordinate system (4 bp + 1 lp), the lone pair occupies an equatorial position of the trigonal bipyramid to minimize $90^\\circ$ repulsions, resulting in a distorted seesaw molecular shape."),

    # 12 (Q137)
    ("In a trigonal bipyramidal electron geometry ($AB_5$ family), lone pairs preferentially occupy which positions?",
     "Equatorial positions, because they experience only two $90^\\circ$ repulsions instead of three",
     "Axial positions, because they have more space",
     "Any position with equal probability",
     "Axial positions to maximize dipole moment",
     0, "Lone Pair Equatorial Preference TBP",
     "In a trigonal bipyramid, an equatorial position has only two adjacent positions at $90^\\circ$ (the two axial ones), whereas an axial position has three adjacent positions at $90^\\circ$. Lone pairs always occupy equatorial positions to minimize destabilizing $90^\\circ$ repulsions."),

    # 13 (Q138)
    ("What is the molecular shape of an $AB_3E_2$ molecule with three bonding pairs and two lone pairs (e.g., $\\text{ClF}_3$)?",
     "T-shaped",
     "Trigonal planar",
     "Trigonal pyramidal",
     "Bent",
     0, "AB3E2 T-shaped ClF3",
     "With 5 electron pairs, both lone pairs occupy equatorial sites of the trigonal bipyramid. The three bonding pairs form an asymmetric T-shape with bond angles of approximately $87.5^\\circ$."),

    # 14 (Q139)
    ("What is the molecular shape of an $AB_2E_3$ molecule with two bonding pairs and three lone pairs (e.g., $\\text{XeF}_2$ or $\\text{I}_3^-$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent",
     "T-shaped",
     "Trigonal planar",
     0, "AB2E3 Linear XeF2",
     "All three lone pairs occupy the three equatorial positions of the trigonal bipyramid at $120^\\circ$ to each other. The two bonding pairs occupy the two axial positions at $180^\\circ$, producing a strictly linear molecule."),

    # 15 (Q140)
    ("What is the molecular shape of an $AB_5E$ molecule with five bonding pairs and one lone pair (e.g., $\\text{BrF}_5$)?",
     "Square pyramidal",
     "Octahedral",
     "Trigonal bipyramidal",
     "Pentagonal planar",
     0, "AB5E Square Pyramidal BrF5",
     "With 6 electron pairs (5 bp + 1 lp) arranged octahedrally, the five bonding pairs and one lone pair produce a square pyramidal molecular geometry with bond angles slightly less than $90^\\circ$."),

    # 16 (Q141)
    ("What is the molecular shape of an $AB_4E_2$ molecule with four bonding pairs and two lone pairs (e.g., $\\text{XeF}_4$)?",
     "Square planar",
     "Tetrahedral",
     "See-saw",
     "Octahedral",
     0, "AB4E2 Square Planar XeF4",
     "With 6 electron pairs arranged octahedrally, the two lone pairs occupy trans positions ($180^\\circ$ opposite each other) to minimize repulsion, leaving four coplanar bonding pairs in a square planar geometry."),

    # 17 (Q142)
    ("The bond angle in Methane ($\\text{CH}_4$) is exactly:",
     "$109.5^\\circ$ ($109^\\circ 28'$)",
     "$120^\\circ$",
     "$90^\\circ$",
     "$107.8^\\circ$",
     0, "CH4 Bond Angle",
     "Methane has 4 identical $\\text{C}-\\text{H}$ bond pairs and zero lone pairs in a perfectly symmetric tetrahedron, giving an exact bond angle of $109.5^\\circ$."),

    # 18 (Q143)
    ("The bond angle in Ammonia ($\\text{NH}_3$) is approximately:",
     "$107.8^\\circ$ (or $107^\\circ$)",
     "$109.5^\\circ$",
     "$104.5^\\circ$",
     "$120^\\circ$",
     0, "NH3 Bond Angle",
     "In Ammonia, the presence of one lone pair repels the three $\\text{N}-\\text{H}$ bond pairs more strongly than bond-bond repulsion, compressing the bond angle from $109.5^\\circ$ down to $107.8^\\circ$."),

    # 19 (Q144)
    ("The bond angle in Water ($\\text{H}_2\\text{O}$) is approximately:",
     "$104.5^\\circ$",
     "$109.5^\\circ$",
     "$107.8^\\circ$",
     "$120^\\circ$",
     0, "H2O Bond Angle",
     "In water, two lone pairs exert strong $\\text{lp}-\\text{lp}$ and $\\text{lp}-\\text{bp}$ repulsions, compressing the $\\text{H}-\\text{O}-\\text{H}$ bond angle down to $104.5^\\circ$."),

    # 20 (Q145)
    ("The correct decreasing order of bond angles in $\\text{CH}_4, \\text{NH}_3,$ and $\\text{H}_2\\text{O}$ is:",
     "$\\text{CH}_4 (109.5^\\circ) > \\text{NH}_3 (107.8^\\circ) > \\text{H}_2\\text{O} (104.5^\\circ)$",
     "$\\text{H}_2\\text{O} > \\text{NH}_3 > \\text{CH}_4$",
     "$\\text{NH}_3 > \\text{CH}_4 > \\text{H}_2\\text{O}$",
     "$\\text{CH}_4 = \\text{NH}_3 = \\text{H}_2\\text{O}$",
     0, "CH4 NH3 H2O Angle Trend",
     "All three have 4 electron pairs. As the number of lone pairs increases from 0 (in $\\text{CH}_4$) to 1 (in $\\text{NH}_3$) to 2 (in $\\text{H}_2\\text{O}$), lone pair repulsions increase and compress the bond angles: $109.5^\\circ > 107.8^\\circ > 104.5^\\circ$."),

    # 21 (Q146)
    ("In Phosphorus pentachloride ($\\text{PCl}_5$), the axial $\\text{P}-\\text{Cl}$ bonds are:",
     "Longer and weaker than the equatorial $\\text{P}-\\text{Cl}$ bonds",
     "Shorter and stronger than the equatorial bonds",
     "Equal in length and strength to equatorial bonds",
     "Purely ionic while equatorial bonds are covalent",
     0, "PCl5 Axial vs Equatorial Bonds",
     "Each axial bond experiences repulsion from three equatorial bond pairs at $90^\\circ$, whereas each equatorial bond experiences repulsion from only two axial pairs at $90^\\circ$. The greater repulsion on axial bonds pushes them further out, making them longer ($240\\text{ pm}$) and weaker than equatorial bonds ($202\\text{ pm}$)."),

    # 22 (Q147)
    ("Because the two axial $\\text{P}-\\text{Cl}$ bonds in $\\text{PCl}_5$ are longer and weaker than the equatorial bonds, $\\text{PCl}_5$ upon heating readily decomposes into:",
     "$\\text{PCl}_3$ and $\\text{Cl}_2$",
     "$\\text{PCl}_4$ and $\\text{Cl}$",
     "$\\text{P}$ and $5\\text{Cl}$",
     "$\\text{P}_2\\text{Cl}_{10}$",
     0, "PCl5 Thermal Decomposition",
     "The two weaker axial bonds break preferentially upon heating: $\\text{PCl}_5 \\xrightarrow{\\Delta} \\text{PCl}_3 + \\text{Cl}_2$, making $\\text{PCl}_5$ a reactive chlorinating agent."),

    # 23 (Q148)
    ("What is the total number of bond pairs and lone pairs around the central Iodine atom in the Triiodide ion ($\\text{I}_3^-$)?",
     "2 bond pairs and 3 lone pairs",
     "3 bond pairs and 2 lone pairs",
     "2 bond pairs and 2 lone pairs",
     "4 bond pairs and 1 lone pair",
     0, "I3- Electron Pairs",
     "Central Iodine has 7 valence electrons $+ 1$ negative charge $+ 2$ single bonds from terminal iodines $= 10$ valence electrons, forming 2 bond pairs and 3 lone pairs (linear geometry)."),

    # 24 (Q149)
    ("What is the molecular shape of the Triiodide ion ($\\text{I}_3^-$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent",
     "Trigonal planar",
     "T-shaped",
     0, "I3- Linear Shape",
     "The central Iodine in $\\text{I}_3^-$ has 2 bond pairs and 3 lone pairs ($AB_2E_3$). The three lone pairs occupy the equatorial plane at $120^\\circ$, and the two bonded iodines occupy axial positions at $180^\\circ$, giving a linear ion."),

    # 25 (Q150)
    ("What is the molecular geometry of the Hydronium ion ($\\text{H}_3\\text{O}^+$)?",
     "Trigonal pyramidal",
     "Trigonal planar",
     "Tetrahedral",
     "T-shaped",
     0, "H3O+ Trigonal Pyramidal Shape",
     "Oxygen in $\\text{H}_3\\text{O}^+$ has $6 - 1 = 5$ valence electrons plus 3 bonds with hydrogen $= 8$ electrons (3 bond pairs + 1 lone pair). Like $\\text{NH}_3$, it adopts a trigonal pyramidal shape."),

    # 26 (Q151)
    ("What is the molecular geometry of the Ammonium ion ($\\text{NH}_4^+$)?",
     "Regular tetrahedral (bond angle $109.5^\\circ$)",
     "Trigonal pyramidal",
     "Square planar",
     "Trigonal planar",
     0, "NH4+ Tetrahedral Geometry",
     "In $\\text{NH}_4^+$, Nitrogen has 4 bonding pairs and 0 lone pairs ($AB_4$). It has a perfectly regular tetrahedral geometry with equal bond angles of $109.5^\\circ$."),

    # 27 (Q152)
    ("What is the molecular geometry of the Borohydride ion ($\\text{BH}_4^-$)?",
     "Regular tetrahedral",
     "Square planar",
     "Trigonal planar",
     "Bent",
     0, "BH4- Tetrahedral Shape",
     "Boron has $3 + 1 = 4$ valence electrons, forming 4 single bonds with hydrogen and 0 lone pairs. It adopts a regular tetrahedral geometry isoelectronic with methane."),

    # 28 (Q153)
    ("What is the molecular shape of Sulphur tetrafluoride ($\\text{SF}_4$)?",
     "See-saw",
     "Tetrahedral",
     "Square planar",
     "Trigonal pyramidal",
     0, "SF4 Seesaw Shape",
     "Sulphur has 6 valence electrons: 4 form bonds with Fluorine and 2 form 1 lone pair ($AB_4E$). The lone pair resides in an equatorial site, producing a seesaw geometry."),

    # 29 (Q154)
    ("What is the molecular shape of Chlorine trifluoride ($\\text{ClF}_3$)?",
     "T-shaped",
     "Trigonal planar",
     "Trigonal pyramidal",
     "See-saw",
     0, "ClF3 T-shaped Geometry",
     "Chlorine has 7 valence electrons: 3 are bonded to fluorine and 4 form 2 lone pairs ($AB_3E_2$). Both lone pairs occupy equatorial sites of a trigonal bipyramid, giving a T-shaped geometry."),

    # 30 (Q155)
    ("What is the molecular shape of Bromine pentafluoride ($\\text{BrF}_5$)?",
     "Square pyramidal",
     "Trigonal bipyramidal",
     "Octahedral",
     "Pentagonal planar",
     0, "BrF5 Square Pyramidal Shape",
     "Bromine has 7 valence electrons: 5 form bonds with fluorine and 2 form 1 lone pair ($AB_5E$). In an octahedral electron geometry, 5 bonds and 1 lone pair form a square pyramidal shape."),

    # 31 (Q156)
    ("What is the molecular shape of Iodine heptafluoride ($\\text{IF}_7$)?",
     "Pentagonal bipyramidal",
     "Octahedral",
     "Square antiprismatic",
     "Trigonal bipyramidal",
     0, "IF7 Pentagonal Bipyramidal Shape",
     "Iodine in $\\text{IF}_7$ has 7 bonding pairs and 0 lone pairs ($AB_7$). It forms a pentagonal bipyramidal molecule with 5 equatorial bonds at $72^\\circ$ and 2 axial bonds at $90^\\circ$."),

    # 32 (Q157)
    ("What is the molecular shape of Xenon trioxide ($\\text{XeO}_3$)?",
     "Trigonal pyramidal",
     "Trigonal planar",
     "T-shaped",
     "Tetrahedral",
     0, "XeO3 Trigonal Pyramidal Shape",
     "Xenon in $\\text{XeO}_3$ forms 3 double bonds with oxygen (3 $\\sigma$-bonds) and has 1 lone pair. The 3 bond pairs and 1 lone pair adopt a trigonal pyramidal shape isoelectronic with $\\text{ClO}_3^-$."),

    # 33 (Q158)
    ("What is the molecular shape of Xenon oxytetrafluoride ($\\text{XeOF}_4$)?",
     "Square pyramidal",
     "Octahedral",
     "Trigonal bipyramidal",
     "See-saw",
     0, "XeOF4 Square Pyramidal Shape",
     "Xenon in $\\text{XeOF}_4$ has 4 single bonds with fluorine, 1 double bond with oxygen, and 1 lone pair. Total 5 $\\sigma$-bonds and 1 lone pair (steric number 6) form a square pyramidal molecule."),

    # 34 (Q159)
    ("What is the molecular shape of Xenon dioxydifluoride ($\\text{XeO}_2\\text{F}_2$)?",
     "See-saw",
     "Square planar",
     "Tetrahedral",
     "T-shaped",
     0, "XeO2F2 Seesaw Shape",
     "Xenon in $\\text{XeO}_2\\text{F}_2$ has 4 $\\sigma$-bonds (2 with O, 2 with F) and 1 lone pair (steric number 5). The lone pair and the two oxygen atoms occupy equatorial sites, giving a seesaw molecular shape."),

    # 35 (Q160)
    ("In VSEPR theory, a multiple bond (double or triple bond) is treated as:",
     "A single super pair of electrons occupying a single coordination site",
     "Two or three separate coordination sites",
     "A lone pair",
     "Non-existent in repulsion calculations",
     0, "VSEPR Multiple Bond Superpair",
     "In VSEPR theory, all electron pairs in a multiple bond are treated collectively as a single 'super pair' of electrons that occupies one direction in space, though it exerts slightly more repulsion than a single bond pair.")
]

# -------------------------------------------------------------------------
# MEDIUM QUESTIONS (65 questions: Q161 to Q225)
# -------------------------------------------------------------------------
med_items = [
    # 1 (Q161) Authentic NEET 2020
    ("Which of the following molecules has a T-shaped geometry?",
     "$\\text{ClF}_3$",
     "$\\text{BF}_3$",
     "$\\text{NH}_3$",
     "$\\text{PCl}_3$",
     0, "T-shaped Molecule NEET 2020",
     "$\\text{ClF}_3$ has 5 electron pairs (3 bond pairs + 2 lone pairs). In a trigonal bipyramid, both lone pairs occupy equatorial positions, leaving three bonding pairs in a T-shape. $\\text{BF}_3$ is trigonal planar; $\\text{NH}_3$ and $\\text{PCl}_3$ are trigonal pyramidal.",
     True, "NEET 2020"),

    # 2 (Q162) Authentic NEET 2021
    ("Match List-I (Molecules) with List-II (Shapes):\n(A) $\\text{PCl}_5$ -> (1) Trigonal bipyramidal\n(B) $\\text{SF}_6$ -> (2) Octahedral\n(C) $\\text{BrF}_5$ -> (3) Square pyramidal\n(D) $\\text{BF}_3$ -> (4) Trigonal planar",
     "A-1, B-2, C-3, D-4",
     "A-2, B-1, C-4, D-3",
     "A-1, B-3, C-2, D-4",
     "A-4, B-2, C-3, D-1",
     0, "Match Shapes NEET 2021",
     "$\\text{PCl}_5$ has 5 bp (A-1). $\\text{SF}_6$ has 6 bp (B-2). $\\text{BrF}_5$ has 5 bp + 1 lp (C-3). $\\text{BF}_3$ has 3 bp (D-4). Match: A-1, B-2, C-3, D-4.",
     True, "NEET 2021"),

    # 3 (Q163) Authentic NEET 2019
    ("Which of the following is the correct order of bond angles in $\\text{H}_2\\text{O}, \\text{H}_2\\text{S}, \\text{H}_2\\text{Se},$ and $\\text{H}_2\\text{Te}$?",
     "$\\text{H}_2\\text{O} (104.5^\\circ) > \\text{H}_2\\text{S} (92.1^\\circ) > \\text{H}_2\\text{Se} (91^\\circ) > \\text{H}_2\\text{Te} (90^\\circ)$",
     "$\\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S} > \\text{H}_2\\text{O}$",
     "$\\text{H}_2\\text{O} = \\text{H}_2\\text{S} = \\text{H}_2\\text{Se} = \\text{H}_2\\text{Te}$",
     "$\\text{H}_2\\text{S} > \\text{H}_2\\text{O} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}$",
     0, "Group 16 Hydride Bond Angles NEET 2019",
     "As electronegativity of the central atom decreases down Group 16 ($\\text{O} > \\text{S} > \\text{Se} > \\text{Te}$), bonding electron pairs shift further from the nucleus. Bond-pair bond-pair repulsion drops sharply, allowing lone pairs to push bonds closer together: $104.5^\\circ > 92.1^\\circ > 91^\\circ > 90^\\circ$.",
     True, "NEET 2019"),

    # 4 (Q164)
    ("Why is the bond angle in Nitrogen trifluoride ($\\text{NF}_3$, $102.4^\\circ$) significantly SMALLER than that in Ammonia ($\\text{NH}_3$, $107.8^\\circ$)?",
     "High electronegativity of Fluorine pulls shared bonding electrons away from Nitrogen, reducing bond-pair bond-pair repulsion and allowing the lone pair to compress the angle",
     "Hydrogen is more electronegative than Fluorine",
     "$\\text{NF}_3$ has two lone pairs",
     "$\\text{NH}_3$ is planar",
     0, "NF3 vs NH3 Bond Angle Reason",
     "Fluorine is much more electronegative than Nitrogen ($4.0 > 3.0$), drawing the bonding electron pairs closer to itself and away from the central Nitrogen atom. The reduced electron density around Nitrogen decreases $\\text{bp}-\\text{bp}$ repulsion, enabling the lone pair to compress the $\\text{F}-\\text{N}-\\text{F}$ angle down to $102.4^\\circ$."),

    # 5 (Q165)
    ("The bond angle in Dichlorine monoxide ($\\text{Cl}_2\\text{O}$, $111^\\circ$) is LARGER than in Water ($\\text{H}_2\\text{O}$, $104.5^\\circ$) because:",
     "The two bulky chlorine atoms with three non-bonding lone pairs each experience strong steric and lone-pair repulsions that force the bond angle open",
     "Oxygen is more electronegative than Chlorine",
     "$\\text{Cl}_2\\text{O}$ is a linear molecule",
     "Chlorine has a smaller atomic size than hydrogen",
     0, "Cl2O vs H2O Bond Angle Anomaly",
     "In $\\text{Cl}_2\\text{O}$, each chlorine atom has a large van der Waals radius and carries three non-bonding lone pairs. The steric hindrance and interelectronic repulsions between the bulky chlorines override the central oxygen's lone pair repulsion, opening the angle to $111^\\circ$ (larger than tetrahedral $109.5^\\circ$)."),

    # 6 (Q166)
    ("The bond angle in Oxygen difluoride ($\\text{OF}_2$, $103.2^\\circ$) is SMALLER than in Water ($\\text{H}_2\\text{O}$, $104.5^\\circ$) because:",
     "Fluorine is more electronegative than oxygen, drawing the bonding electrons away from oxygen and reducing $\\text{bp}-\\text{bp}$ repulsion",
     "Fluorine is less electronegative than Hydrogen",
     "Oxygen has three lone pairs in $\\text{OF}_2$",
     "$\\text{OF}_2$ is a linear molecule",
     0, "OF2 vs H2O Bond Angle",
     "In $\\text{OF}_2$, Fluorine withdraws bonding electrons away from Oxygen. The bonding pairs are farther apart, reducing $\\text{bp}-\\text{bp}$ repulsion compared to $\\text{H}_2\\text{O}$ (where Oxygen pulls electrons closer to itself), resulting in a smaller bond angle ($103.2^\\circ$ vs $104.5^\\circ$)."),

    # 7 (Q167)
    ("The correct increasing order of bond angles in $\\text{OF}_2, \\text{H}_2\\text{O},$ and $\\text{Cl}_2\\text{O}$ is:",
     "$\\text{OF}_2 (103.2^\\circ) < \\text{H}_2\\text{O} (104.5^\\circ) < \\text{Cl}_2\\text{O} (111^\\circ)$",
     "$\\text{Cl}_2\\text{O} < \\text{H}_2\\text{O} < \\text{OF}_2$",
     "$\\text{H}_2\\text{O} < \\text{OF}_2 < \\text{Cl}_2\\text{O}$",
     "$\\text{OF}_2 = \\text{H}_2\\text{O} = \\text{Cl}_2\\text{O}$",
     0, "OF2 H2O Cl2O Angle Order",
     "Electronegativity shifts bonding pairs away in $\\text{OF}_2$ ($103.2^\\circ$). In $\\text{H}_2\\text{O}$, bonding pairs are closer to oxygen ($104.5^\\circ$). In $\\text{Cl}_2\\text{O}$, steric crowding of bulky chlorine atoms forces the angle open ($111^\\circ$). Order: $\\text{OF}_2 < \\text{H}_2\\text{O} < \\text{Cl}_2\\text{O}$."),

    # 8 (Q168)
    ("Which of the following molecules has a shape that is ISOSTRUCTURAL with the Chlorate ion ($\\text{ClO}_3^-$)?",
     "$\\text{XeO}_3$",
     "$\\text{BF}_3$",
     "$\\text{SO}_3$",
     "$\\text{CO}_3^{2-}$",
     0, "XeO3 and ClO3- Isostructural",
     "Both $\\text{ClO}_3^-$ and $\\text{XeO}_3$ have 26 valence electrons, 3 bond pairs, and 1 lone pair on the central atom ($AB_3E$). Both adopt an identical trigonal pyramidal shape."),

    # 9 (Q169)
    ("Which of the following pairs of species is ISOSTRUCTURAL and has the same geometry?",
     "$\\text{ICl}_4^-$ and $\\text{XeF}_4$",
     "$\\text{NH}_3$ and $\\text{BF}_3$",
     "$\\text{PCl}_5$ and $\\text{IF}_5$",
     "$\\text{CO}_2$ and $\\text{SO}_2$",
     0, "ICl4- and XeF4 Isostructural Pair",
     "Both $\\text{ICl}_4^-$ and $\\text{XeF}_4$ have 6 electron pairs (4 bonding pairs + 2 trans lone pairs) in an octahedral arrangement, adopting an identical square planar molecular shape."),

    # 10 (Q170)
    ("Which of the following pairs of molecules has the SAME shape?",
     "$\\text{XeF}_2$ and $\\text{CO}_2$ (both linear)",
     "$\\text{BF}_3$ and $\\text{NF}_3$",
     "$\\text{BeCl}_2$ and $\\text{H}_2\\text{O}$",
     "$\\text{CH}_4$ and $\\text{SF}_4$",
     0, "XeF2 and CO2 Same Shape Linear",
     "$\\text{CO}_2$ has 2 bonding pairs and 0 lone pairs (linear). $\\text{XeF}_2$ has 2 bonding pairs and 3 equatorial lone pairs (linear). Both are linear molecules with a bond angle of $180^\\circ$."),

    # 11 (Q171)
    ("The species $\\text{NO}_2^+, \\text{NO}_2,$ and $\\text{NO}_2^-$ have bond angles of approximately $180^\\circ, 134^\\circ,$ and $115^\\circ$ respectively. This trend is explained by:",
     "Decreasing repulsion: 0 non-bonding electrons in $\\text{NO}_2^+$, 1 single electron in $\\text{NO}_2$, and a full lone pair in $\\text{NO}_2^-$",
     "Increasing mass of the ions",
     "Decreasing oxidation state of oxygen",
     "Nitrogen expanding its octet",
     0, "NO2 Series Bond Angles Trend",
     "$\\text{NO}_2^+$ has no non-bonding electrons on nitrogen (linear, $180^\\circ$). $\\text{NO}_2$ has a single unpaired electron in an $sp^2$ orbital, repelling bonding pairs moderately ($134^\\circ$). $\\text{NO}_2^-$ has a full lone pair exerting much stronger repulsion, compressing the angle down to $115^\\circ$."),

    # 12 (Q172)
    ("The molecular shapes of $\\text{SF}_4, \\text{CF}_4,$ and $\\text{XeF}_4$ are respectively:",
     "See-saw, tetrahedral, and square planar",
     "Tetrahedral, square planar, and see-saw",
     "Square planar, see-saw, and tetrahedral",
     "See-saw, square planar, and tetrahedral",
     0, "SF4 CF4 XeF4 Shapes Comparison",
     "$\\text{SF}_4$ has 4 bp + 1 lp (see-saw). $\\text{CF}_4$ has 4 bp + 0 lp (regular tetrahedral). $\\text{XeF}_4$ has 4 bp + 2 lp (square planar)."),

    # 13 (Q173)
    ("The number of lone pairs on the central atom in $\\text{XeF}_2, \\text{XeF}_4,$ and $\\text{XeF}_6$ are respectively:",
     "3, 2, and 1",
     "2, 3, and 1",
     "1, 2, and 3",
     "3, 1, and 2",
     0, "Xenon Fluorides Lone Pairs Count",
     "In $\\text{XeF}_2$: $(8 - 2)/2 = 3$ lone pairs. In $\\text{XeF}_4$: $(8 - 4)/2 = 2$ lone pairs. In $\\text{XeF}_6$: $(8 - 6)/2 = 1$ lone pair. The sequence is 3, 2, 1."),

    # 14 (Q174)
    ("What is the molecular geometry of the Carbonate ion ($\\text{CO}_3^{2-}$)?",
     "Trigonal planar (bond angle $120^\\circ$)",
     "Trigonal pyramidal",
     "Tetrahedral",
     "T-shaped",
     0, "CO3 2- Trigonal Planar Shape",
     "Carbon in $\\text{CO}_3^{2-}$ forms 3 $\\sigma$-bonds with oxygen atoms and has 0 lone pairs ($AB_3$). It adopts a perfectly planar equilateral triangle geometry with $120^\\circ$ bond angles."),

    # 15 (Q175)
    ("What is the molecular geometry of the Nitrate ion ($\\text{NO}_3^-$)?",
     "Trigonal planar (bond angle $120^\\circ$)",
     "Trigonal pyramidal",
     "Bent",
     "T-shaped",
     0, "NO3- Trigonal Planar Shape",
     "Nitrogen in $\\text{NO}_3^-$ forms 3 $\\sigma$-bonds with oxygen and has 0 lone pairs. It is isoelectronic with carbonate and adopts an identical trigonal planar geometry ($120^\\circ$)."),

    # 16 (Q176)
    ("What is the molecular geometry of the Nitrite ion ($\\text{NO}_2^-$)?",
     "Bent / Angular (bond angle $\\approx 115^\\circ$)",
     "Linear",
     "Trigonal planar",
     "Trigonal pyramidal",
     0, "NO2- Bent Shape",
     "Nitrogen in $\\text{NO}_2^-$ has 2 $\\sigma$-bonds and 1 lone pair ($AB_2E$). The lone pair repels the two bond pairs, producing a bent V-shape with an angle of $\\approx 115^\\circ$."),

    # 17 (Q177)
    ("What is the molecular geometry of the Nitronium ion ($\\text{NO}_2^+$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent",
     "Trigonal planar",
     "T-shaped",
     0, "NO2+ Linear Geometry",
     "In $\\text{NO}_2^+$, Nitrogen has 2 $\\sigma$-bonds with oxygen and 0 lone pairs ($AB_2$). It is isoelectronic with $\\text{CO}_2$ and is strictly linear with a bond angle of $180^\\circ$."),

    # 18 (Q178)
    ("In Phosphorus pentachloride ($\\text{PCl}_5$), how many distinct bond angles are present in the molecule?",
     "Three: $90^\\circ, 120^\\circ,$ and $180^\\circ$",
     "Only one: $109.5^\\circ$",
     "Two: $90^\\circ$ and $180^\\circ$",
     "Two: $120^\\circ$ and $180^\\circ$",
     0, "PCl5 Bond Angles Count",
     "In a trigonal bipyramid: (1) equatorial-equatorial angle is $120^\\circ$, (2) axial-equatorial angle is $90^\\circ$, and (3) axial-axial angle is $180^\\circ$. There are 3 distinct bond angles."),

    # 19 (Q179)
    ("In Sulphur hexafluoride ($\\text{SF}_6$), how many distinct $\\text{F}-\\text{S}-\\text{F}$ bond angles are present?",
     "Two: $90^\\circ$ (adjacent) and $180^\\circ$ (opposite)",
     "Three: $90^\\circ, 120^\\circ,$ and $180^\\circ$",
     "Only one: $90^\\circ$",
     "Four: $60^\\circ, 90^\\circ, 120^\\circ,$ and $180^\\circ$",
     0, "SF6 Bond Angles Count",
     "In a regular octahedron, all 12 adjacent bond angles are $90^\\circ$, and the 3 trans pairs are at $180^\\circ$. Thus there are exactly 2 distinct bond angles ($90^\\circ$ and $180^\\circ$)."),

    # 20 (Q180)
    ("How many $90^\\circ$ bond angles are present in a molecule of Sulphur hexafluoride ($\\text{SF}_6$)?",
     "12",
     "6",
     "8",
     "4",
     0, "SF6 90 Degree Angles Count",
     "In an octahedron, there are 4 angles in the equatorial plane, 4 between top axial and equatorial, and 4 between bottom axial and equatorial: $4 + 4 + 4 = 12$ bond angles of $90^\\circ$."),

    # 21 (Q181)
    ("How many $90^\\circ$ bond angles are present in a molecule of Phosphorus pentachloride ($\\text{PCl}_5$)?",
     "6",
     "3",
     "9",
     "12",
     0, "PCl5 90 Degree Angles Count",
     "Each of the two axial $\\text{P}-\\text{Cl}$ bonds makes a $90^\\circ$ angle with each of the three equatorial bonds: $2 \\times 3 = 6$ bond angles of $90^\\circ$."),

    # 22 (Q182)
    ("How many $120^\\circ$ bond angles are present in a molecule of Phosphorus pentachloride ($\\text{PCl}_5$)?",
     "3",
     "2",
     "6",
     "1",
     0, "PCl5 120 Degree Angles Count",
     "The three equatorial bonds lie in a plane forming an equilateral triangle with $3$ bond angles of $120^\\circ$."),

    # 23 (Q183)
    ("How many $72^\\circ$ bond angles are present in Iodine heptafluoride ($\\text{IF}_7$)?",
     "5",
     "7",
     "10",
     "2",
     0, "IF7 72 Degree Angles Count",
     "The five equatorial $\\text{I}-\\text{F}$ bonds form a regular pentagon in a plane, containing 5 adjacent bond angles of $360^\\circ / 5 = 72^\\circ$."),

    # 24 (Q184)
    ("How many $90^\\circ$ bond angles are present in Iodine heptafluoride ($\\text{IF}_7$)?",
     "10",
     "5",
     "7",
     "14",
     0, "IF7 90 Degree Angles Count",
     "Each of the 2 axial $\\text{I}-\\text{F}$ bonds forms a $90^\\circ$ angle with all 5 equatorial bonds: $2 \\times 5 = 10$ bond angles of $90^\\circ$."),

    # 25 (Q185)
    ("Which of the following molecules has a SQUARE PLANAR shape?",
     "$\\text{XeF}_4$",
     "$\\text{SF}_4$",
     "$\\text{SiF}_4$",
     "$\\text{BF}_4^-$",
     0, "Square Planar Molecule XeF4",
     "$\\text{XeF}_4$ has 4 bonding pairs and 2 trans lone pairs ($AB_4E_2$), adopting a square planar shape. In contrast, $\\text{SiF}_4$ and $\\text{BF}_4^-$ are tetrahedral, and $\\text{SF}_4$ is see-saw."),

    # 26 (Q186)
    ("Which of the following ions is PLANAR?",
     "$\\text{CO}_3^{2-}$ and $\\text{NO}_3^-$",
     "$\\text{SO}_3^{2-}$",
     "$\\text{ClO}_3^-$",
     "$\\text{PO}_4^{3-}$",
     0, "Planar Ions Carbonate and Nitrate",
     "Both $\\text{CO}_3^{2-}$ and $\\text{NO}_3^-$ have $sp^2$ hybridized central atoms with 3 $\\sigma$-bonds and 0 lone pairs, making them strictly trigonal planar. $\\text{SO}_3^{2-}$ and $\\text{ClO}_3^-$ are pyramidal, while $\\text{PO}_4^{3-}$ is tetrahedral."),

    # 27 (Q187)
    ("Which of the following molecules has an atom with a STERIC NUMBER of 5?",
     "$\\text{PCl}_5, \\text{SF}_4, \\text{ClF}_3,$ and $\\text{XeF}_2$",
     "$\\text{CH}_4$",
     "$\\text{SF}_6$",
     "$\\text{IF}_7$",
     0, "Steric Number 5 Molecules Set",
     "Steric number $= \\text{bonding pairs} + \\text{lone pairs}$. $\\text{PCl}_5 (5+0=5)$, $\\text{SF}_4 (4+1=5)$, $\\text{ClF}_3 (3+2=5)$, $\\text{XeF}_2 (2+3=5)$. All four belong to the steric number 5 family."),

    # 28 (Q188)
    ("Which of the following molecules has an atom with a STERIC NUMBER of 6?",
     "$\\text{SF}_6, \\text{BrF}_5,$ and $\\text{XeF}_4$",
     "$\\text{PCl}_5$",
     "$\\text{CH}_4$",
     "$\\text{BF}_3$",
     0, "Steric Number 6 Molecules Set",
     "$\\text{SF}_6 (6+0=6)$, $\\text{BrF}_5 (5+1=6)$, $\\text{XeF}_4 (4+2=6)$. All three have 6 total electron pairs around the central atom."),

    # 29 (Q189)
    ("The molecular geometry of Chlorine dioxide ($\\text{ClO}_2$) is:",
     "Bent / Angular (bond angle $\\approx 117.6^\\circ$)",
     "Linear",
     "Trigonal planar",
     "Tetrahedral",
     0, "ClO2 Bent Geometry Odd Electron",
     "$\\text{ClO}_2$ has 19 valence electrons. Chlorine forms two double bonds with oxygen and has one lone pair plus one odd unpaired electron. The electron repulsions produce a bent angular geometry with an angle of $117.6^\\circ$."),

    # 30 (Q190)
    ("Which of the following molecules has bond angles of strictly $90^\\circ$ and $180^\\circ$ only?",
     "$\\text{SF}_6$",
     "$\\text{PCl}_5$",
     "$\\text{IF}_7$",
     "$\\text{CH}_4$",
     0, "SF6 90 and 180 Angles Only",
     "$\\text{SF}_6$ is a regular octahedron where all 12 adjacent angles are exactly $90^\\circ$ and all 3 opposite pairs are exactly $180^\\circ$."),

    # 31 (Q191)
    ("In which of the following molecules is the bond angle closest to the theoretical tetrahedral angle ($109.5^\\circ$)?",
     "$\\text{CCl}_4 (109.5^\\circ)$",
     "$\\text{NH}_3 (107.8^\\circ)$",
     "$\\text{H}_2\\text{O} (104.5^\\circ)$",
     "$\\text{H}_2\\text{S} (92.1^\\circ)$",
     0, "CCl4 Exact Tetrahedral Angle",
     "$\\text{CCl}_4$ has 4 identical chlorine atoms and zero lone pairs, so its bond angles are exactly $109.5^\\circ$, with zero lone-pair distortion."),

    # 32 (Q192)
    ("The bond angles in hydrides of Group 15 ($\\text{NH}_3, \\text{PH}_3, \\text{AsH}_3, \\text{SbH}_3$) decrease down the group as $107.8^\\circ, 93.6^\\circ, 91.8^\\circ, 91.3^\\circ$. This is explained by:",
     "Decreasing electronegativity of the central atom and absence of hybridization (Drago's rule)",
     "Increasing electronegativity of the central atom",
     "Increasing number of lone pairs",
     "Decreasing atomic mass",
     0, "Group 15 Hydride Bond Angles Drago",
     "Down Group 15, the electronegativity of the central atom decreases, shifting bonding electrons farther away and reducing $\\text{bp}-\\text{bp}$ repulsion. In $\\text{PH}_3, \\text{AsH}_3,$ and $\\text{SbH}_3$, hybridization does not occur (Drago's rule), so bonds use nearly pure $p$-orbitals at $\\approx 90-93^\\circ$."),

    # 33 (Q193)
    ("What is the molecular geometry of the Sulphite ion ($\\text{SO}_3^{2-}$)?",
     "Trigonal pyramidal",
     "Trigonal planar",
     "Tetrahedral",
     "T-shaped",
     0, "SO3 2- Trigonal Pyramidal Shape",
     "Sulphur in $\\text{SO}_3^{2-}$ has 3 $\\sigma$-bonds with oxygen and 1 lone pair ($AB_3E$). It adopts a trigonal pyramidal shape isoelectronic with $\\text{NH}_3$."),

    # 34 (Q194)
    ("What is the molecular geometry of the Thionyl chloride molecule ($\\text{SOCl}_2$)?",
     "Trigonal pyramidal",
     "Trigonal planar",
     "Tetrahedral",
     "T-shaped",
     0, "SOCl2 Trigonal Pyramidal",
     "In $\\text{SOCl}_2$, Sulphur forms 1 double bond to oxygen and 2 single bonds to chlorine, retaining 1 lone pair ($AB_3E$). It has a trigonal pyramidal shape."),

    # 35 (Q195)
    ("What is the molecular geometry of the Sulphuryl chloride molecule ($\\text{SO}_2\\text{Cl}_2$)?",
     "Distorted tetrahedral",
     "Square planar",
     "Trigonal bipyramidal",
     "See-saw",
     0, "SO2Cl2 Distorted Tetrahedral",
     "In $\\text{SO}_2\\text{Cl}_2$, Sulphur forms 2 double bonds to oxygen and 2 single bonds to chlorine with 0 lone pairs ($AB_4$). It adopts a distorted tetrahedral geometry."),

    # 36 (Q196)
    ("What is the molecular geometry of Phosphorus oxychloride ($\\text{POCl}_3$)?",
     "Distorted tetrahedral",
     "Trigonal planar",
     "Trigonal bipyramidal",
     "Square planar",
     0, "POCl3 Distorted Tetrahedral",
     "Phosphorus in $\\text{POCl}_3$ forms 1 double bond to oxygen and 3 single bonds to chlorine with 0 lone pairs ($AB_4$). The 4 $\\sigma$-bonds form a distorted tetrahedral geometry."),

    # 37 (Q197)
    ("Which of the following molecules has a PYRAMIDAL shape?",
     "$\\text{PCl}_3$",
     "$\\text{BCl}_3$",
     "$\\text{AlCl}_3$",
     "$\\text{GaCl}_3$",
     0, "PCl3 Pyramidal Shape",
     "Phosphorus in $\\text{PCl}_3$ has 3 bond pairs and 1 lone pair ($AB_3E$), forming a trigonal pyramidal molecule. In contrast, $\\text{BCl}_3, \\text{AlCl}_3,$ and $\\text{GaCl}_3$ monomers are trigonal planar."),

    # 38 (Q198)
    ("Which of the following molecules has an EXPANDED octet and a T-SHAPED geometry?",
     "$\\text{BrF}_3$",
     "$\\text{BF}_3$",
     "$\\text{NH}_3$",
     "$\\text{PCl}_3$",
     0, "BrF3 T-shaped Geometry",
     "Bromine in $\\text{BrF}_3$ has 10 valence electrons (3 bonding pairs + 2 lone pairs). In a trigonal bipyramid, both lone pairs occupy equatorial sites, producing a T-shaped geometry."),

    # 39 (Q199)
    ("The equatorial $\\text{F}-\\text{S}-\\text{F}$ bond angle in Sulphur tetrafluoride ($\\text{SF}_4$) is compressed from $120^\\circ$ to approximately:",
     "$101.6^\\circ$ (or $\\approx 102^\\circ$)",
     "$120^\\circ$",
     "$90^\\circ$",
     "$180^\\circ$",
     0, "SF4 Equatorial Angle Compression",
     "The single equatorial lone pair exerts strong repulsion on the two adjacent equatorial fluorine atoms, compressing the equatorial $\\text{F}-\\text{S}-\\text{F}$ angle from the ideal $120^\\circ$ down to approximately $101.6^\\circ$."),

    # 40 (Q200)
    ("The axial $\\text{F}-\\text{S}-\\text{F}$ bond angle in Sulphur tetrafluoride ($\\text{SF}_4$) is bent back from $180^\\circ$ to approximately:",
     "$173^\\circ$",
     "$180^\\circ$",
     "$120^\\circ$",
     "$90^\\circ$",
     0, "SF4 Axial Angle Compression",
     "The equatorial lone pair pushes against the two axial bonds, bending them slightly away from each other and reducing the axial $\\text{F}-\\text{S}-\\text{F}$ angle from linear $180^\\circ$ to $173^\\circ$."),

    # 41 (Q201)
    ("In Chlorine trifluoride ($\\text{ClF}_3$), the axial $\\text{F}-\\text{Cl}-\\text{F}$ bond angle is bent from $180^\\circ$ to approximately:",
     "$175^\\circ$",
     "$180^\\circ$",
     "$120^\\circ$",
     "$90^\\circ$",
     0, "ClF3 Axial Angle Compression",
     "The two equatorial lone pairs exert continuous repulsion on the axial fluorine atoms, bending the linear axis slightly into an angle of $175^\\circ$."),

    # 42 (Q202)
    ("Which of the following molecules has a bond angle of $180^\\circ$?",
     "$\\text{HCN}$ (Hydrogen cyanide)",
     "$\\text{H}_2\\text{O}$",
     "$\\text{H}_2\\text{S}$",
     "$\\text{SO}_2$",
     0, "HCN Linear 180 Degrees",
     "$\\text{HCN}$ has a triple bond between carbon and nitrogen and a single bond to hydrogen: $\\text{H}-\\text{C}\\equiv\\text{N}$. Carbon has 2 $\\sigma$-bonds and 0 lone pairs ($sp$ hybridization), forming a strictly linear molecule ($180^\\circ$)."),

    # 43 (Q203)
    ("The bond angle in the Azide ion ($\\text{N}_3^-$) is:",
     "$180^\\circ$",
     "$120^\\circ$",
     "$109.5^\\circ$",
     "$90^\\circ$",
     0, "Azide Ion 180 Degrees",
     "The central Nitrogen in $\\text{N}_3^-$ forms two double bonds (or one triple and one single bond) with 0 lone pairs ($sp$ hybridization), adopting a linear geometry with a bond angle of $180^\\circ$."),

    # 44 (Q204)
    ("The shape of the Xenon hexafluoride molecule ($\\text{XeF}_6$) in the gas phase is:",
     "Distorted octahedral",
     "Regular octahedral",
     "Pentagonal bipyramidal",
     "Square planar",
     0, "XeF6 Gas Phase Shape",
     "$\\text{XeF}_6$ has 6 bonding pairs and 1 lone pair ($AB_6E$). The presence of the stereochemically active lone pair distorts the regular octahedron into a distorted octahedral geometry."),

    # 45 (Q205)
    ("Which of the following molecules has the HIGHEST number of lone pairs on the central atom?",
     "$\\text{XeF}_2$ (3 lone pairs)",
     "$\\text{XeF}_4$ (2 lone pairs)",
     "$\\text{XeF}_6$ (1 lone pair)",
     "$\\text{XeO}_3$ (1 lone pair)",
     0, "XeF2 Highest Lone Pairs",
     "In $\\text{XeF}_2$, Xenon has 3 lone pairs in its equatorial plane, the highest count among these xenon compounds."),

    # 46 (Q206)
    ("Which of the following molecules has ZERO lone pairs on the central atom?",
     "$\\text{SiCl}_4$",
     "$\\text{PCl}_3$",
     "$\\text{SCl}_2$",
     "$\\text{Cl}_2\\text{O}$",
     0, "SiCl4 Zero Lone Pairs",
     "Silicon has 4 valence electrons, all of which form single bonds with chlorine in $\\text{SiCl}_4$, leaving 0 lone pairs on the central atom."),

    # 47 (Q207)
    ("Which of the following molecules has ONE lone pair on the central atom?",
     "$\\text{SF}_4$",
     "$\\text{SF}_6$",
     "$\\text{SiF}_4$",
     "$\\text{BF}_3$",
     0, "SF4 One Lone Pair",
     "Sulphur in $\\text{SF}_4$ has 6 valence electrons: 4 form bonds with fluorine, leaving 1 non-bonding lone pair ($AB_4E$)."),

    # 48 (Q208)
    ("Which of the following molecules has TWO lone pairs on the central atom?",
     "$\\text{ClF}_3$",
     "$\\text{BF}_3$",
     "$\\text{PF}_5$",
     "$\\text{SF}_6$",
     0, "ClF3 Two Lone Pairs",
     "Chlorine has 7 valence electrons: 3 are shared with fluorine, leaving 4 electrons as 2 non-bonding lone pairs ($AB_3E_2$)."),

    # 49 (Q209)
    ("Which of the following molecules has THREE lone pairs on the central atom?",
     "$\\text{XeF}_2$",
     "$\\text{XeF}_4$",
     "$\\text{XeF}_6$",
     "$\\text{XeO}_3$",
     0, "XeF2 Three Lone Pairs",
     "Xenon in $\\text{XeF}_2$ has 8 valence electrons: 2 are shared with fluorine, leaving 6 electrons as 3 equatorial lone pairs ($AB_2E_3$)."),

    # 50 (Q210)
    ("What is the shape of the Dichlorosulfide molecule ($\\text{SCl}_2$)?",
     "Bent / Angular",
     "Linear",
     "Trigonal planar",
     "Tetrahedral",
     0, "SCl2 Bent Shape",
     "Sulphur in $\\text{SCl}_2$ has 2 bonding pairs and 2 lone pairs ($AB_2E_2$), adopting a bent V-shape with a bond angle of $103^\\circ$."),

    # 51 (Q211)
    ("What is the shape of the Phosphonium ion ($\\text{PH}_4^+$)?",
     "Regular tetrahedral (bond angle $109.5^\\circ$)",
     "Trigonal pyramidal",
     "Square planar",
     "T-shaped",
     0, "PH4+ Regular Tetrahedral",
     "Phosphorus in $\\text{PH}_4^+$ has 4 bonding pairs and 0 lone pairs ($AB_4$), adopting a regular tetrahedral geometry isostructural with $\\text{NH}_4^+$ and $\\text{CH}_4$."),

    # 52 (Q212)
    ("What is the shape of the Tetrafluoroborate ion ($\\text{BF}_4^-$)?",
     "Regular tetrahedral",
     "Square planar",
     "Trigonal planar",
     "See-saw",
     0, "BF4- Regular Tetrahedral",
     "Boron in $\\text{BF}_4^-$ has 4 bonding pairs and 0 lone pairs ($AB_4$), adopting a symmetrical regular tetrahedral geometry with equal bond angles of $109.5^\\circ$."),

    # 53 (Q213)
    ("What is the shape of the Tetrachloroaluminate ion ($\\text{AlCl}_4^-$)?",
     "Regular tetrahedral",
     "Square planar",
     "Trigonal bipyramidal",
     "See-saw",
     0, "AlCl4- Regular Tetrahedral",
     "Aluminium in $\\text{AlCl}_4^-$ forms 4 bonds with chlorine and has 0 lone pairs ($AB_4$), adopting a regular tetrahedral shape."),

    # 54 (Q214)
    ("What is the shape of the Hexafluorophosphate ion ($\\text{PF}_6^-$)?",
     "Regular octahedral",
     "Trigonal bipyramidal",
     "Square pyramidal",
     "Pentagonal planar",
     0, "PF6- Regular Octahedral",
     "Phosphorus in $\\text{PF}_6^-$ has 6 bonding pairs and 0 lone pairs ($AB_6$), forming a regular octahedral ion with all adjacent angles equal to $90^\\circ$."),

    # 55 (Q215)
    ("What is the shape of the Hexafluorosilicate ion ($\\text{SiF}_6^{2-}$)?",
     "Regular octahedral",
     "Trigonal bipyramidal",
     "Square planar",
     "Pentagonal bipyramidal",
     0, "SiF6 2- Regular Octahedral",
     "Silicon in $\\text{SiF}_6^{2-}$ forms 6 covalent bonds with fluorine and has 0 lone pairs ($AB_6$), adopting an octahedral geometry."),

    # 56 (Q216)
    ("What is the shape of the Hexafluoroaluminate ion ($\\text{AlF}_6^{3-}$)?",
     "Regular octahedral",
     "Trigonal bipyramidal",
     "Square planar",
     "See-saw",
     0, "AlF6 3- Regular Octahedral",
     "Aluminium in $\\text{AlF}_6^{3-}$ has 6 bonding pairs and 0 lone pairs ($AB_6$), forming a regular octahedral geometry."),

    # 57 (Q217)
    ("What is the shape of the Dichlorodifluoromethane molecule (Freon-12, $\\text{CCl}_2\\text{F}_2$)?",
     "Distorted tetrahedral",
     "Square planar",
     "Trigonal planar",
     "See-saw",
     0, "CCl2F2 Distorted Tetrahedral",
     "Carbon in $\\text{CCl}_2\\text{F}_2$ forms 4 bonds with two different halogens and has 0 lone pairs ($AB_4$). The different sizes and electronegativities of Cl and F distort the tetrahedron slightly."),

    # 58 (Q218)
    ("What is the shape of the Tetrabromomethane molecule ($\\text{CBr}_4$)?",
     "Regular tetrahedral (bond angle $109.5^\\circ$)",
     "Square planar",
     "Trigonal pyramidal",
     "Bent",
     0, "CBr4 Regular Tetrahedral",
     "Carbon in $\\text{CBr}_4$ has 4 identical $\\text{C}-\\text{Br}$ bonds and 0 lone pairs, forming a regular tetrahedral molecule."),

    # 59 (Q219)
    ("Which of the following molecules has a BENT shape with a bond angle greater than $109.5^\\circ$?",
     "$\\text{SO}_2$ ($119.5^\\circ$)",
     "$\\text{H}_2\\text{O}$ ($104.5^\\circ$)",
     "$\\text{H}_2\\text{S}$ ($92.1^\\circ$)",
     "$\\text{OF}_2$ ($103.2^\\circ$)",
     0, "SO2 Angle Greater than 109.5",
     "$\\text{SO}_2$ has steric number 3 (2 bp + 1 lp) based on a trigonal planar arrangement ($120^\\circ$). Lone-pair repulsion compresses the angle only slightly to $119.5^\\circ$, which is much greater than $109.5^\\circ$."),

    # 60 (Q220)
    ("Which of the following molecules has a BENT shape with a bond angle less than $109.5^\\circ$?",
     "$\\text{H}_2\\text{O}$ ($104.5^\\circ$)",
     "$\\text{SO}_2$ ($119.5^\\circ$)",
     "$\\text{O}_3$ ($117^\\circ$)",
     "$\\text{NO}_2^-$ ($115^\\circ$)",
     0, "H2O Angle Less than 109.5",
     "Water has steric number 4 (2 bp + 2 lp) derived from a tetrahedral geometry ($109.5^\\circ$). Two lone pairs compress the angle to $104.5^\\circ$. The other three molecules are based on steric number 3 ($120^\\circ$) and have angles above $115^\\circ$."),

    # 61 (Q221)
    ("What is the shape of the Phosphite ion ($\\text{PO}_3^{3-}$)?",
     "Trigonal pyramidal",
     "Trigonal planar",
     "Tetrahedral",
     "T-shaped",
     0, "PO3 3- Trigonal Pyramidal",
     "Phosphorus in $\\text{PO}_3^{3-}$ has 3 $\\sigma$-bonds with oxygen and 1 lone pair ($AB_3E$). It adopts a trigonal pyramidal shape isoelectronic with sulphite $\\text{SO}_3^{2-}$."),

    # 62 (Q222)
    ("What is the shape of the Carbonyl sulfide molecule ($\\text{OCS}$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent",
     "Trigonal planar",
     "Tetrahedral",
     0, "OCS Linear Geometry",
     "In $\\text{OCS}$, Carbon forms a double bond to oxygen and a double bond to sulphur with 0 lone pairs ($AB_2$). It is isoelectronic with $\\text{CO}_2$ and adopts a linear geometry."),

    # 63 (Q223)
    ("What is the shape of the Carbon disulfide molecule ($\\text{CS}_2$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent",
     "Trigonal planar",
     "Tetrahedral",
     0, "CS2 Linear Geometry",
     "$\\text{CS}_2$ has structure $\\text{S}=\\text{C}=\\text{S}$ with 2 $\\sigma$-bonds and 0 lone pairs on carbon, forming a linear non-polar molecule with $\\mu = 0$."),

    # 64 (Q224)
    ("What is the shape of the Cyanate ion ($\\text{OCN}^-$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent",
     "Trigonal planar",
     "T-shaped",
     0, "OCN- Linear Geometry",
     "In $\\text{OCN}^-$, Carbon forms a double bond to oxygen and a double bond to nitrogen (or triple bond to N and single to O) with 0 lone pairs ($sp$ hybridization), adopting a linear geometry."),

    # 65 (Q225)
    ("What is the shape of the Thiocyanate ion ($\\text{SCN}^-$)?",
     "Linear (bond angle $180^\\circ$)",
     "Bent",
     "Trigonal planar",
     "T-shaped",
     0, "SCN- Linear Geometry",
     "The thiocyanate ion has structure $[\\text{S}=\\text{C}=\\text{N}]^-$ with two $\\sigma$-bonds and zero lone pairs on carbon, adopting a linear geometry with a bond angle of $180^\\circ$.")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (25 questions: Q226 to Q250)
# -------------------------------------------------------------------------
hard_items = [
    # 1 (Q226) Authentic NEET 2022
    ("Match List-I (Molecules/Ions) with List-II (Number of Lone Pairs on Central Atom):\n(A) $\\text{XeF}_2$ -> (1) 3 lone pairs\n(B) $\\text{XeF}_4$ -> (2) 2 lone pairs\n(C) $\\text{XeF}_6$ -> (3) 1 lone pair\n(D) $\\text{XeO}_3$ -> (4) 1 lone pair",
     "A-1, B-2, C-3, D-4",
     "A-2, B-1, C-4, D-3",
     "A-1, B-3, C-2, D-4",
     "A-3, B-2, C-1, D-4",
     0, "Match Lone Pairs Xenon NEET 2022",
     "$\\text{XeF}_2$ has 3 lone pairs (A-1). $\\text{XeF}_4$ has 2 lone pairs (B-2). $\\text{XeF}_6$ has 1 lone pair (C-3). $\\text{XeO}_3$ has 1 lone pair (D-4). Match: A-1, B-2, C-3, D-4.",
     True, "NEET 2022"),

    # 2 (Q227) Authentic NEET 2023
    ("Consider the following statements regarding the shapes and bond angles of covalent species:\n(I) $\\text{I}_3^-$ has a linear shape with three equatorial lone pairs.\n(II) $\\text{SF}_4$ has a see-saw shape with one equatorial lone pair.\n(III) $\\text{ClF}_3$ has a T-shaped geometry with two equatorial lone pairs.\n(IV) $\\text{XeF}_4$ has a square planar shape with two trans lone pairs.\nWhich of the above statements are correct?",
     "I, II, III, and IV are all correct",
     "Only I, II, and IV are correct",
     "Only II and III are correct",
     "Only I and IV are correct",
     0, "VSEPR Geometries All Statements NEET 2023",
     "All four statements accurately describe the placement of lone pairs and resulting molecular geometries according to VSEPR theory. Statements I, II, III, and IV are all correct.",
     True, "NEET 2023"),

    # 3 (Q228) Authentic NEET 2024
    ("Given below are two statements:\nStatement I: In $\\text{PCl}_5$, the axial $\\text{P}-\\text{Cl}$ bonds are longer and weaker than the equatorial $\\text{P}-\\text{Cl}$ bonds.\nStatement II: Axial bonds experience repulsive forces from three equatorial bond pairs at $90^\\circ$, whereas equatorial bonds experience repulsion from only two axial bond pairs at $90^\\circ$.\nIn the light of the above statements, choose the correct answer:",
     "Both Statement I and Statement II are true, and Statement II is the correct explanation of Statement I",
     "Both Statement I and Statement II are true, but Statement II is NOT the correct explanation of Statement I",
     "Statement I is true, but Statement II is false",
     "Statement I is false, but Statement II is true",
     0, "PCl5 Axial Bonds VSEPR NEET 2024",
     "Both statements are true. Axial bonds suffer three $90^\\circ$ repulsions, which is greater than the two $90^\\circ$ repulsions experienced by equatorial bonds. This differential repulsion causes axial bonds to lengthen ($240\\text{ pm}$) and weaken compared to equatorial bonds ($202\\text{ pm}$). Statement II correctly explains Statement I.",
     True, "NEET 2024"),

    # 4 (Q229)
    ("Assertion (A): The bond angle of $\\text{NF}_3$ ($102.4^\\circ$) is smaller than that of $\\text{NH}_3$ ($107.8^\\circ$).\nReason (R): Fluorine is more electronegative than Nitrogen, pulling bonding electrons away from Nitrogen and reducing bond-pair bond-pair repulsion.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason NF3 vs NH3 Angle",
     "Assertion (A) is true: bond angle in $\\text{NF}_3$ is $102.4^\\circ < 107.8^\\circ$ in $\\text{NH}_3$. Reason (R) is true: Fluorine pulls bonding electron pairs towards itself, decreasing electron density at Nitrogen and weakening $\\text{bp}-\\text{bp}$ repulsion. (R) correctly explains (A)."),

    # 5 (Q230)
    ("Assertion (A): $\\text{XeF}_2$ is a linear molecule.\nReason (R): The three lone pairs on the central Xenon atom occupy the equatorial positions of a trigonal bipyramid at $120^\\circ$ to each other to minimize electrostatic repulsion.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason XeF2 Linear",
     "Assertion (A) is true: $\\text{XeF}_2$ is strictly linear ($180^\\circ$). Reason (R) is true: placing the three lone pairs in the equatorial plane minimizes unfavorable $90^\\circ$ repulsions, forcing the two fluorine atoms into axial positions at $180^\\circ$. (R) correctly explains (A)."),

    # 6 (Q231)
    ("Assertion (A): $\\text{SF}_4$ has a see-saw molecular shape rather than a square planar shape.\nReason (R): In a trigonal bipyramid, placing the lone pair in an equatorial position minimizes $90^\\circ$ lone pair - bond pair repulsions.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason SF4 Seesaw",
     "Assertion (A) is true: $\\text{SF}_4$ is see-saw. Reason (R) is true: an equatorial lone pair experiences only two $90^\\circ$ repulsions, whereas an axial lone pair would experience three $90^\\circ$ repulsions. Equatorial placement minimizes energy. (R) correctly explains (A)."),

    # 7 (Q232)
    ("Assertion (A): The bond angle of $\\text{Cl}_2\\text{O}$ ($111^\\circ$) is larger than the tetrahedral angle ($109.5^\\circ$).\nReason (R): The steric hindrance and lone pair repulsions between the two bulky chlorine atoms overcome the lone pair repulsions on the central oxygen atom.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Cl2O Bond Angle Anomaly",
     "Assertion (A) is true: $\\text{Cl}_2\\text{O}$ has an angle of $111^\\circ > 109.5^\\circ$. Reason (R) is true: each bulky Chlorine has three lone pairs, causing strong inter-halogen repulsions that force the bond angle open beyond the tetrahedral value. (R) correctly explains (A)."),

    # 8 (Q233)
    ("Which of the following molecules has the MAXIMUM number of $90^\\circ$ bond angles?",
     "$\\text{SF}_6$ (12 angles)",
     "$\\text{PCl}_5$ (6 angles)",
     "$\\text{IF}_7$ (10 angles)",
     "$\\text{XeF}_4$ (4 angles)",
     0, "Maximum 90 Degree Angles SF6",
     "$\\text{SF}_6$ has 12 bond angles of $90^\\circ$, higher than $\\text{IF}_7$ (10), $\\text{PCl}_5$ (6), and $\\text{XeF}_4$ (4)."),

    # 9 (Q234)
    ("The species that has a square planar shape with a non-zero formal charge on the central atom is:",
     "$\\text{ICl}_4^-$",
     "$\\text{XeF}_4$",
     "$\\text{SF}_4$",
     "$\\text{SiF}_4$",
     0, "Square Planar Ion ICl4-",
     "$\\text{ICl}_4^-$ has 4 bonding pairs and 2 lone pairs on Iodine with a formal charge of $-1$, adopting a square planar shape."),

    # 10 (Q235)
    ("Which of the following sets of molecules ALL have a BENT / V-SHAPED geometry?",
     "$\\text{SO}_2, \\text{O}_3, \\text{NO}_2^-, \\text{H}_2\\text{O}, \\text{SCl}_2$",
     "$\\text{CO}_2, \\text{BeCl}_2, \\text{CS}_2, \\text{HCN}$",
     "$\\text{BF}_3, \\text{SO}_3, \\text{NO}_3^-, \\text{CO}_3^{2-}$",
     "$\\text{CH}_4, \\text{CCl}_4, \\text{SiF}_4, \\text{NH}_4^+$",
     0, "All Bent Molecules Set",
     "All five species have either steric number 3 ($\\text{SO}_2, \\text{O}_3, \\text{NO}_2^-$ with 1 lp) or steric number 4 ($\\text{H}_2\\text{O}, \\text{SCl}_2$ with 2 lp), giving all of them a bent V-shape."),

    # 11 (Q236)
    ("Which of the following sets of molecules ALL have a TRIGONAL PYRAMIDAL shape?",
     "$\\text{NH}_3, \\text{PCl}_3, \\text{AsH}_3, \\text{H}_3\\text{O}^+, \\text{XeO}_3$",
     "$\\text{BF}_3, \\text{BCl}_3, \\text{AlCl}_3, \\text{SO}_3$",
     "$\\text{CH}_4, \\text{SiH}_4, \\text{GeH}_4, \\text{SnH}_4$",
     "$\\text{SF}_4, \\text{SeF}_4, \\text{TeF}_4$",
     0, "All Trigonal Pyramidal Molecules Set",
     "All five species have 3 bonding pairs and 1 lone pair on the central atom ($AB_3E$), adopting a trigonal pyramidal shape."),

    # 12 (Q237)
    ("Which of the following molecules has a bond angle of $109.5^\\circ$ AND is non-polar ($\\mu = 0$)?",
     "$\\text{CCl}_4$",
     "$\\text{CHCl}_3$",
     "$\\text{CH}_2\\text{Cl}_2$",
     "$\\text{CH}_3\\text{Cl}$",
     0, "Non-polar Tetrahedral CCl4",
     "Only $\\text{CCl}_4$ has four identical peripheral atoms, maintaining perfect tetrahedral symmetry ($109.5^\\circ$) and complete vector cancellation ($\\mu = 0$)."),

    # 13 (Q238)
    ("In which of the following pairs do BOTH species have a LINEAR geometry?",
     "$\\text{CO}_2$ and $\\text{I}_3^-$",
     "$\\text{CO}_2$ and $\\text{SO}_2$",
     "$\\text{H}_2\\text{O}$ and $\\text{BeCl}_2$",
     "$\\text{XeF}_2$ and $\\text{SF}_2$",
     0, "Both Linear Pair CO2 I3-",
     "$\\text{CO}_2$ has 2 bp + 0 lp (linear, $180^\\circ$). $\\text{I}_3^-$ has 2 bp + 3 equatorial lp (linear, $180^\\circ$). Both are strictly linear."),

    # 14 (Q239)
    ("In which of the following pairs do BOTH species have a SQUARE PLANAR geometry?",
     "$\\text{XeF}_4$ and $\\text{BrF}_4^-$",
     "$\\text{XeF}_4$ and $\\text{BF}_4^-$",
     "$\\text{SF}_4$ and $\\text{XeF}_4$",
     "$\\text{CH}_4$ and $\\text{XeF}_4$",
     0, "Both Square Planar XeF4 BrF4-",
     "Both $\\text{XeF}_4$ and $\\text{BrF}_4^-$ have 4 bonding pairs and 2 lone pairs in trans positions, adopting a square planar shape."),

    # 15 (Q240)
    ("Which of the following species has the SMALLEST bond angle among the nitrogen species: $\\text{NO}_2^+, \\text{NO}_2, \\text{NO}_2^-$?",
     "$\\text{NO}_2^-$ ($115^\\circ$)",
     "$\\text{NO}_2$ ($134^\\circ$)",
     "$\\text{NO}_2^+$ ($180^\\circ$)",
     "All have identical bond angles",
     0, "Smallest Angle in NO2 Series",
     "$\\text{NO}_2^-$ has a full lone pair of electrons on nitrogen, which exerts maximum repulsion on the two bonding pairs, compressing the bond angle down to $115^\\circ$, smaller than $\\text{NO}_2$ ($134^\\circ$) and $\\text{NO}_2^+$ ($180^\\circ$)."),

    # 16 (Q241)
    ("The molecular shape of $\\text{XeOF}_2$ is:",
     "T-shaped",
     "Trigonal planar",
     "Trigonal pyramidal",
     "See-saw",
     0, "XeOF2 T-shaped",
     "Xenon in $\\text{XeOF}_2$ has 8 valence electrons: 2 are shared with fluorine, 2 form a double bond with oxygen, and 4 form 2 lone pairs. Steric number is $3\\ \\sigma + 2\\text{ lp} = 5$. With 2 lone pairs in equatorial sites, the molecule is T-shaped."),

    # 17 (Q242)
    ("The molecular shape of the Iodate ion ($\\text{IO}_3^-$) is:",
     "Trigonal pyramidal",
     "Trigonal planar",
     "Tetrahedral",
     "T-shaped",
     0, "IO3- Trigonal Pyramidal",
     "Iodine in $\\text{IO}_3^-$ has $7 + 1 = 8$ valence electrons: forms 3 $\\sigma$-bonds with oxygen and retains 1 lone pair ($AB_3E$). It adopts a trigonal pyramidal shape."),

    # 18 (Q243)
    ("The molecular shape of the Chlorite ion ($\\text{ClO}_2^-$) is:",
     "Bent / Angular",
     "Linear",
     "Trigonal planar",
     "T-shaped",
     0, "ClO2- Bent Shape",
     "Chlorine in $\\text{ClO}_2^-$ has $7 + 1 = 8$ valence electrons: 2 $\\sigma$-bonds with oxygen and 2 lone pairs ($AB_2E_2$). It adopts a bent angular shape with a bond angle of $\\approx 111^\\circ$."),

    # 19 (Q244)
    ("Which of the following molecules has an atom with a STERIC NUMBER of 7?",
     "$\\text{IF}_7$ and $\\text{XeF}_6$",
     "$\\text{SF}_6$",
     "$\\text{PCl}_5$",
     "$\\text{CH}_4$",
     0, "Steric Number 7 Molecules",
     "$\\text{IF}_7$ has 7 bonding pairs + 0 lone pairs $= 7$. $\\text{XeF}_6$ has 6 bonding pairs + 1 lone pair $= 7$. Both have a steric number of 7."),

    # 20 (Q245)
    ("The number of $90^\\circ$ bond angles in a molecule of Xenon tetrafluoride ($\\text{XeF}_4$) is:",
     "4",
     "2",
     "6",
     "8",
     0, "XeF4 90 Degree Angles Count",
     "In square planar $\\text{XeF}_4$, the 4 fluorine atoms lie at the corners of a square around central xenon, forming 4 adjacent bond angles of $90^\\circ$ in the plane."),

    # 21 (Q246)
    ("The number of $180^\\circ$ bond angles in a molecule of Xenon tetrafluoride ($\\text{XeF}_4$) is:",
     "2",
     "1",
     "4",
     "3",
     0, "XeF4 180 Degree Angles Count",
     "In $\\text{XeF}_4$, the two opposite trans pairs of fluorine atoms ($\text{F}-\text{Xe}-\text{F}$) each form a $180^\\circ$ bond angle: exactly 2 bond angles of $180^\\circ$."),

    # 22 (Q247)
    ("In a see-saw molecule like $\\text{SF}_4$, how many fluorine atoms lie in the equatorial plane and how many lie along the axial axis?",
     "2 in the equatorial plane, 2 along the axial axis",
     "3 in the equatorial plane, 1 along the axial axis",
     "1 in the equatorial plane, 3 along the axial axis",
     "4 in the equatorial plane, 0 along the axial axis",
     0, "SF4 Atom Distribution",
     "The trigonal bipyramid has 3 equatorial and 2 axial sites. In $\\text{SF}_4$, the lone pair occupies 1 equatorial site, leaving 2 fluorine atoms in equatorial sites and 2 fluorine atoms in axial sites."),

    # 23 (Q248)
    ("In a T-shaped molecule like $\\text{ClF}_3$, how many fluorine atoms lie in the equatorial plane and how many lie along the axial axis?",
     "1 in the equatorial plane, 2 along the axial axis",
     "2 in the equatorial plane, 1 along the axial axis",
     "3 in the equatorial plane, 0 along the axial axis",
     "0 in the equatorial plane, 3 along the axial axis",
     0, "ClF3 Atom Distribution",
     "In $\\text{ClF}_3$, the 2 lone pairs occupy 2 of the 3 equatorial sites. The remaining equatorial site holds 1 fluorine atom, and the 2 axial sites hold the other 2 fluorine atoms, forming a T-shape."),

    # 24 (Q249)
    ("The molecular shape of the Bromate ion ($\\text{BrO}_3^-$) is:",
     "Trigonal pyramidal",
     "Trigonal planar",
     "Tetrahedral",
     "T-shaped",
     0, "BrO3- Trigonal Pyramidal",
     "Bromine in $\\text{BrO}_3^-$ has 3 $\\sigma$-bonds and 1 lone pair ($AB_3E$). It adopts a trigonal pyramidal shape isostructural with $\\text{ClO}_3^-$ and $\\text{IO}_3^-$."),

    # 25 (Q250)
    ("Which of the following compounds has a bond angle CLOSEST to $120^\\circ$?",
     "$\\text{BF}_3 (120^\\circ)$",
     "$\\text{CH}_4 (109.5^\\circ)$",
     "$\\text{NH}_3 (107.8^\\circ)$",
     "$\\text{H}_2\\text{O} (104.5^\\circ)$",
     0, "BF3 120 Degrees Angle",
     "$\\text{BF}_3$ is a symmetrical trigonal planar molecule with zero lone pairs, having bond angles of exactly $120^\\circ$.")
]

print(f"Loaded {len(easy_items)} Easy items.")
print(f"Loaded {len(med_items)} Medium items.")
print(f"Loaded {len(hard_items)} Hard items.")

assert len(easy_items) == 35
assert len(med_items) == 65
assert len(hard_items) == 25

for idx, item in enumerate(easy_items):
    q_num = 126 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(med_items):
    q_num = 161 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(hard_items):
    q_num = 226 + idx
    q_id = f"bond-mcq-{q_num:03d}"
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

out_file = "src/data/chapterwise/chemistry/chemicalBondingPart2.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Chemical Bonding and Molecular Structure | Chemistry | Class: 11 | Part 2
// Target: Exactly 125 MCQs (35 Easy, 65 Medium, 25 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_BONDING_PART2_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
