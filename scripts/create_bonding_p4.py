#!/usr/bin/env python3
"""
Direct generator for Chemical Bonding and Molecular Structure - Part 4
Q376 to Q500: 20 Easy, 55 Medium, 50 Hard = 125 MCQs
Topics:
- Molecular Orbital Theory (MOT): LCAO principles, bonding and antibonding orbitals
- MO energy level configurations for <=14 electrons (s-p mixing) and >14 electrons
- Calculation of bond order, stability, magnetic behavior
- O2 paramagnetism, B2 paramagnetism, C2 double pi bond
- Oxygen and Nitrogen species comparative stability and bond length
- Hydrogen bonding: intermolecular vs intramolecular (chelation)
- o-nitrophenol vs p-nitrophenol (steam volatility, boiling points)
- Anomalous properties of water, open cage structure of ice, maximum density at 4C
- Symmetrical H-bond in KHF2 ([F-H-F]-)
- Comprehensive multi-concept NEET synthesis
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
        "topicId": "chem-mot-theory",
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
    ("According to Molecular Orbital Theory (MOT), the bond order of a molecule is calculated using the formula:",
     "$\\text{Bond Order} = \\frac{1}{2}(N_b - N_a)$",
     "$\\text{Bond Order} = \\frac{1}{2}(N_a - N_b)$",
     "$\\text{Bond Order} = N_b + N_a$",
     "$\\text{Bond Order} = N_b - N_a$",
     0, "Bond Order Formula MOT",
     "Bond order is half the difference between the number of electrons in bonding molecular orbitals ($N_b$) and antibonding molecular orbitals ($N_a$): $\\text{BO} = \\frac{1}{2}(N_b - N_a)$."),

    # 2 (Q377)
    ("A molecule or ion is predicted to be STABLE under Molecular Orbital Theory if:",
     "$N_b > N_a$ (positive bond order)",
     "$N_b < N_a$",
     "$N_b = N_a$ (zero bond order)",
     "$N_b = 0$",
     0, "Stability Criteria MOT",
     "A molecule is stable only if the number of bonding electrons exceeds the number of antibonding electrons ($N_b > N_a$), resulting in a positive bond order. If $N_b \\le N_a$, the net bonding energy is zero or negative and the molecule cannot exist stably."),

    # 3 (Q378)
    ("A substance is attracted into a magnetic field and exhibits PARAMAGNETISM when it possesses:",
     "One or more unpaired electrons in its molecular orbitals",
     "Only paired electrons in all orbitals",
     "Zero bond order",
     "An expanded octet",
     0, "Paramagnetism Definition MOT",
     "Paramagnetism arises from the magnetic dipole moments of unpaired electrons. If all electrons are paired up, their magnetic moments cancel and the substance is weakly repelled by a magnetic field (diamagnetic)."),

    # 4 (Q379)
    ("According to Molecular Orbital Theory, the oxygen molecule ($\\text{O}_2$) is PARAMAGNETIC because it has:",
     "Two unpaired electrons in degenerate $\\pi^*_{2p_x}$ and $\\pi^*_{2p_y}$ antibonding molecular orbitals",
     "Two unpaired electrons in $\\sigma_{2p_z}$ orbital",
     "One unpaired electron in $\\sigma^*_{2s}$ orbital",
     "Zero bonding electrons",
     0, "O2 Paramagnetism Postulate",
     "$\\text{O}_2$ has 16 electrons. The last two electrons enter the degenerate antibonding orbitals $(\\pi^*_{2p_x})^1 (\\pi^*_{2p_y})^1$ with parallel spins according to Hund's rule, conferring paramagnetism (which Lewis theory could not explain)."),

    # 5 (Q380)
    ("The bond order of the Nitrogen molecule ($\\text{N}_2$) according to MOT is:",
     "3.0",
     "2.0",
     "1.0",
     "2.5",
     0, "N2 Bond Order MOT",
     "$\\text{N}_2$ has 14 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2 \\sigma_{2s}^{*2} (\\pi_{2p_x}^2 = \\pi_{2p_y}^2) \\sigma_{2p_z}^2$. $N_b = 10, N_a = 4$. $\\text{Bond Order} = (10 - 4)/2 = 3.0$."),

    # 6 (Q381)
    ("The bond order of the Oxygen molecule ($\\text{O}_2$) according to MOT is:",
     "2.0",
     "1.0",
     "3.0",
     "1.5",
     0, "O2 Bond Order MOT",
     "$\\text{O}_2$ has 16 electrons. $N_b = 10, N_a = 6$. $\\text{Bond Order} = (10 - 6)/2 = 2.0$, representing a double bond."),

    # 7 (Q382)
    ("The bond order of the Helium molecule ($\\text{He}_2$) is:",
     "0 (cannot exist stably)",
     "1",
     "2",
     "0.5",
     0, "He2 Bond Order Zero",
     "$\\text{He}_2$ has 4 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*2}$. $N_b = 2, N_a = 2$. $\\text{Bond Order} = (2 - 2)/2 = 0$. Since bond order is zero, $\\text{He}_2$ does not exist under standard conditions."),

    # 8 (Q383)
    ("Hydrogen bonding is an attractive force that occurs primarily when Hydrogen is covalently bonded to:",
     "Small, highly electronegative atoms: Fluorine, Oxygen, or Nitrogen (F, O, N)",
     "Any metal atom",
     "Carbon and Silicon",
     "Halogens with large radii (like Iodine)",
     0, "Hydrogen Bonding Condition",
     "Hydrogen bonding requires: (1) a hydrogen atom bonded to a very small, strongly electronegative atom with high charge density ($\text{F, O, N}$), and (2) a lone pair of electrons on an adjacent electronegative atom."),

    # 9 (Q384)
    ("Hydrogen bond formed between two DIFFERENT molecules of the same or different compounds is called:",
     "Intermolecular hydrogen bond",
     "Intramolecular hydrogen bond",
     "Metallic bond",
     "Covalent coordinate bond",
     0, "Intermolecular H-bond Definition",
     "Intermolecular hydrogen bonding occurs between separate molecules (e.g., between $\\text{H}_2\\text{O}$ molecules, or between $\\text{HF}$ molecules), leading to molecular association and elevated boiling points."),

    # 10 (Q385)
    ("Hydrogen bond formed within the SAME molecule between two functional groups is called:",
     "Intramolecular hydrogen bond (chelation)",
     "Intermolecular hydrogen bond",
     "Ionic bond",
     "Peptide bond",
     0, "Intramolecular H-bond Definition",
     "Intramolecular hydrogen bonding occurs within a single molecule when the hydrogen donor and acceptor groups are spatially adjacent, forming a cyclic ring structure (e.g., in $o$-nitrophenol and salicylic acid)."),

    # 11 (Q386)
    ("Which of the following compounds exhibits INTRAMOLECULAR hydrogen bonding?",
     "$o$-nitrophenol (ortho-nitrophenol)",
     "$p$-nitrophenol (para-nitrophenol)",
     "Water ($\\text{H}_2\\text{O}$)",
     "Ammonia ($\\text{NH}_3$)",
     0, "Intramolecular H-bond o-Nitrophenol",
     "In $o$-nitrophenol, the $-\\text{OH}$ and $-\\text{NO}_2$ groups are on adjacent ring carbons ($1,2$-positions). The phenolic hydrogen forms an internal 6-membered hydrogen-bonded chelate ring with the nitro oxygen atom."),

    # 12 (Q387)
    ("Which of the following compounds exhibits INTERMOLECULAR hydrogen bonding?",
     "$p$-nitrophenol (para-nitrophenol)",
     "$o$-nitrophenol",
     "Salicylaldehyde",
     "$o$-hydroxybenzoic acid",
     0, "Intermolecular H-bond p-Nitrophenol",
     "In $p$-nitrophenol, the $-\\text{OH}$ and $-\\text{NO}_2$ groups are on opposite ends of the benzene ring ($1,4$-positions) and cannot reach each other internally. They form intermolecular hydrogen bonds with neighboring molecules, causing association."),

    # 13 (Q388)
    ("Between $o$-nitrophenol and $p$-nitrophenol, which isomer has a lower boiling point and is STEAM VOLATILE?",
     "$o$-nitrophenol, because intramolecular H-bonding prevents intermolecular association",
     "$p$-nitrophenol, because it is non-polar",
     "Both have identical boiling points",
     "$p$-nitrophenol, because of lower molecular weight",
     0, "Steam Volatility o-Nitrophenol",
     "In $o$-nitrophenol, internal hydrogen bonding prevents intermolecular association, so molecules are held together only by weak van der Waals forces. This makes it volatile in steam and gives it a lower boiling point ($216^\\circ\\text{C}$) than $p$-nitrophenol ($279^\\circ\\text{C}$)."),

    # 14 (Q389)
    ("Why does ice float on liquid water?",
     "Ice has an open, cage-like hexagonal crystal lattice with tetrahedral hydrogen bonds, making its density lower than that of liquid water",
     "Ice contains trapped air bubbles exclusively",
     "Liquid water is a non-polar solvent",
     "Ice has a higher molecular weight than water",
     0, "Ice Floats Open Cage Structure",
     "In ice, each water molecule is tetrahedrally hydrogen-bonded to 4 neighboring molecules, creating a hollow, open cage-like lattice with empty channels. Upon melting, the open cage collapses into denser liquid water, so ice has lower density ($0.917\\text{ g/cm}^3$) and floats."),

    # 15 (Q390)
    ("Water attains its MAXIMUM density at which temperature?",
     "$4^\\circ\\text{C}$ ($277\\text{ K}$)",
     "$0^\\circ\\text{C}$ ($273\\text{ K}$)",
     "$100^\\circ\\text{C}$ ($373\\text{ K}$)",
     "$-4^\\circ\\text{C}$ ($269\\text{ K}$)",
     0, "Water Maximum Density at 4C",
     "As ice melts from $0^\\circ\\text{C}$ to $4^\\circ\\text{C}$, the collapse of the open cage-like lattice outweighs thermal expansion, increasing density to its maximum value of $1.000\\text{ g/cm}^3$ at exactly $3.98^\\circ\\text{C} \\approx 4^\\circ\\text{C}$."),

    # 16 (Q391)
    ("Which of the following compounds has the STRONGEST hydrogen bond?",
     "$\\text{H}-\\text{F}\\cdots\\text{H}-\\text{F}$",
     "$\\text{H}-\\text{O}\\cdots\\text{H}-\\text{O}$",
     "$\\text{H}-\\text{N}\\cdots\\text{H}-\\text{N}$",
     "$\\text{H}-\\text{Cl}\\cdots\\text{H}-\\text{Cl}$",
     0, "Strongest Hydrogen Bond HF",
     "Hydrogen bond strength increases with the electronegativity and compactness of the atom bonded to hydrogen. Because Fluorine is the most electronegative element ($4.0$), $\\text{H}-\\text{F}\\cdots\\text{F}$ is the strongest hydrogen bond ($\\approx 40-50\\text{ kJ/mol}$)."),

    # 17 (Q392)
    ("The compound $\\text{KHF}_2$ exists as a stable crystalline salt containing the bifluoride ion because:",
     "The $[\\text{F}-\\text{H}-\\text{F}]^-$ ion contains an exceptionally strong, symmetrical hydrogen bond",
     "Potassium forms covalent bonds with fluorine",
     "Hydrogen has an expanded octet",
     "Fluorine is a gas",
     0, "KHF2 Symmetrical H-bond",
     "In the bifluoride ion $[\\text{F}\\cdots\\text{H}\\cdots\\text{F}]^-$, the proton sits at the midpoint between two fluoride ions in an unusually strong, symmetrical 3-center hydrogen bond (energy $\\approx 163\\text{ kJ/mol}$). Therefore, $\\text{KHF}_2$ exists, while $\\text{KHCl}_2$ and $\\text{KHBr}_2$ do not."),

    # 18 (Q393)
    ("Which of the following compounds CANNOT form hydrogen bonds with itself?",
     "Diethyl ether ($\\text{CH}_3\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_3$)",
     "Ethanol ($\\text{CH}_3\\text{CH}_2\\text{OH}$)",
     "Water ($\\text{H}_2\\text{O}$)",
     "Ammonia ($\\text{NH}_3$)",
     0, "Ether No Self H-bonding",
     "In diethyl ether, oxygen is bonded only to carbon atoms; there is no hydrogen directly attached to an electronegative atom ($-\\text{OH}$). Hence ethers cannot form hydrogen bonds among themselves, giving them much lower boiling points than isomeric alcohols."),

    # 19 (Q394)
    ("Ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$, bp $78.3^\\circ\\text{C}$) has a much higher boiling point than dimethyl ether ($\\text{CH}_3-\\text{O}-\\text{CH}_3$, bp $-24^\\circ\\text{C}$) despite having the same molecular formula because:",
     "Ethanol molecules are associated through intermolecular hydrogen bonding",
     "Ethanol has higher molecular weight",
     "Dimethyl ether forms ring structures",
     "Ethanol is a non-polar hydrocarbon",
     0, "Ethanol vs Ether Boiling Point",
     "Ethanol possesses an active $-\\text{OH}$ group capable of extensive intermolecular hydrogen bonding, requiring substantial energy to break and elevate its boiling point to $78.3^\\circ\\text{C}$. Dimethyl ether lacks $-\\text{OH}$ and is held only by weak dipole-dipole forces."),

    # 20 (Q395)
    ("Acetic acid ($\\text{CH}_3\\text{COOH}$) exists predominantly as a dimer in non-polar solvents like benzene with a doubled molecular weight ($120\\text{ g/mol}$) because of:",
     "Intermolecular hydrogen bonding forming an 8-membered cyclic dimer",
     "Covalent bond formation between methyl groups",
     "Ionic polymerization",
     "Resonance with benzene",
     0, "Acetic Acid Dimerization",
     "In non-polar solvents, two acetic acid molecules form two intermolecular hydrogen bonds between the carbonyl oxygen of one molecule and the hydroxyl hydrogen of the other, forming a cyclic 8-membered dimer of formula $(\\text{CH}_3\\text{COOH})_2$.")
]

# -------------------------------------------------------------------------
# MEDIUM QUESTIONS (55 questions: Q396 to Q450)
# -------------------------------------------------------------------------
med_items = [
    # 1 (Q396) Authentic NEET 2020
    ("According to Molecular Orbital Theory, which of the following diatomic molecules has a bond order of 2.0 and contains ONLY $\\pi$-bonds in its valence shell?",
     "$\\text{C}_2$",
     "$\\text{O}_2$",
     "$\\text{N}_2$",
     "$\\text{B}_2$",
     0, "C2 Double Pi Bond NEET 2020",
     "$\\text{C}_2$ has 12 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2 \\sigma_{2s}^{*2} (\\pi_{2p_x}^2 = \\pi_{2p_y}^2)$. The 4 valence electrons occupy the two degenerate $\\pi_{2p}$ orbitals with zero electrons in $\\sigma_{2p_z}$. Thus its double bond consists entirely of two $\\pi$-bonds.",
     True, "NEET 2020"),

    # 2 (Q397) Authentic NEET 2021
    ("Which of the following diatomic species is DIAMAGNETIC according to Molecular Orbital Theory?",
     "$\\text{C}_2$",
     "$\\text{B}_2$",
     "$\\text{O}_2$",
     "$\\text{NO}$",
     0, "C2 Diamagnetic NEET 2021",
     "$\\text{C}_2$ has 12 electrons with configuration ending in $(\\pi_{2p_x}^2 = \\pi_{2p_y}^2)$, so all electrons are paired, making it diamagnetic. In contrast, $\\text{B}_2$ has 2 unpaired electrons, $\\text{O}_2$ has 2 unpaired electrons, and $\\text{NO}$ (15 electrons) has 1 unpaired electron.",
     True, "NEET 2021"),

    # 3 (Q398) Authentic NEET 2019
    ("The correct increasing order of bond length for the following oxygen species: $\\text{O}_2, \\text{O}_2^+, \\text{O}_2^-, \\text{O}_2^{2-}$ is:",
     "$\\text{O}_2^+ < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+$",
     "$\\text{O}_2 < \\text{O}_2^+ < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2^- < \\text{O}_2^{2-} < \\text{O}_2^+ < \\text{O}_2$",
     0, "Oxygen Species Bond Length Order NEET 2019",
     "Bond order is inversely proportional to bond length. Bond orders: $\\text{O}_2^+ (2.5) > \\text{O}_2 (2.0) > \\text{O}_2^- (1.5) > \\text{O}_2^{2-} (1.0)$. Therefore bond lengths increase in reverse: $\\text{O}_2^+ (112\\text{ pm}) < \\text{O}_2 (121\\text{ pm}) < \\text{O}_2^- (128\\text{ pm}) < \\text{O}_2^{2-} (149\\text{ pm})$.",
     True, "NEET 2019"),

    # 4 (Q399)
    ("The correct increasing order of stability for the oxygen species $\\text{O}_2, \\text{O}_2^+, \\text{O}_2^-, \\text{O}_2^{2-}$ is:",
     "$\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+$",
     "$\\text{O}_2^+ < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2 < \\text{O}_2^+ < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2^{2-} < \\text{O}_2 < \\text{O}_2^- < \\text{O}_2^+$",
     0, "Oxygen Species Stability Order",
     "Stability and bond dissociation enthalpy are directly proportional to bond order. Bond orders: $\\text{O}_2^{2-} (1.0) < \\text{O}_2^- (1.5) < \\text{O}_2 (2.0) < \\text{O}_2^+ (2.5)$. Hence stability increases: $\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2 < \\text{O}_2^+$."),

    # 5 (Q400)
    ("The bond orders of $\\text{N}_2, \\text{N}_2^+,$ and $\\text{N}_2^-$ are respectively:",
     "$3.0, 2.5,$ and $2.5$",
     "$3.0, 2.0,$ and $2.0$",
     "$2.5, 3.0,$ and $2.5$",
     "$3.0, 2.5,$ and $2.0$",
     0, "Nitrogen Species Bond Orders",
     "$\\text{N}_2$ (14 electrons) has $\\text{BO} = (10 - 4)/2 = 3.0$. $\\text{N}_2^+$ (13 electrons) has $\\text{BO} = (9 - 4)/2 = 2.5$. $\\text{N}_2^-$ (15 electrons) has $\\text{BO} = (10 - 5)/2 = 2.5$."),

    # 6 (Q401)
    ("Both $\\text{N}_2^+$ and $\\text{N}_2^-$ have the same bond order of $2.5$. Which species is MORE STABLE?",
     "$\\text{N}_2^+$ is more stable, because $\\text{N}_2^-$ has an electron in a destabilizing antibonding orbital ($\\pi^*_{2p}$)",
     "$\\text{N}_2^-$ is more stable",
     "Both have exactly identical thermodynamic stability",
     "Neither is stable",
     0, "N2+ vs N2- Stability Comparison",
     "In $\\text{N}_2^+$, the 13th electron was removed from a bonding orbital ($N_a = 4$). In $\\text{N}_2^-$, the 15th electron enters the antibonding $\\pi^*_{2p}$ orbital ($N_a = 5$). Because antibonding electrons have greater destabilizing effect than bonding electrons stabilize, $\\text{N}_2^+$ is more stable than $\\text{N}_2^-$."),

    # 7 (Q402)
    ("Why is the $\\sigma_{2p_z}$ molecular orbital higher in energy than $\\pi_{2p_x}$ and $\\pi_{2p_y}$ in diatomic molecules with $\\le 14$ electrons (like $\\text{B}_2, \\text{C}_2, \\text{N}_2$)?",
     "Significant $s-p$ mixing occurs between $2s$ and $2p_z$ orbitals because their energy difference is small",
     "Nuclear charge is too large",
     "Electrons enter $d$-orbitals",
     "Repulsion from inner core electrons",
     0, "s-p Mixing Mechanism",
     "For elements $Z \\le 7$, the energy difference between $2s$ and $2p$ is small. Strong $s-p_z$ mixing raises the energy of $\\sigma_{2p_z}$ above the degenerate $(\\pi_{2p_x}, \\pi_{2p_y})$ level. For $Z \\ge 8$ ($\text{O, F}$), the $2s-2p$ gap is large, $s-p$ mixing is negligible, and $\\sigma_{2p_z}$ remains lower."),

    # 8 (Q403)
    ("In the Boron molecule ($\\text{B}_2$, 10 electrons), the electronic configuration according to MOT is:",
     "$\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2 \\sigma_{2s}^{*2} (\\pi_{2p_x}^1 = \\pi_{2p_y}^1)$",
     "$\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2 \\sigma_{2s}^{*2} \\sigma_{2p_z}^2$",
     "$\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2 \\sigma_{2s}^{*2} \\pi_{2p_x}^2$",
     "$\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^1 \\sigma_{2s}^{*1} \\sigma_{2p_z}^2$",
     0, "B2 Configuration MOT",
     "With $s-p$ mixing, $\\pi_{2p}$ lies below $\\sigma_{2p_z}$. The 9th and 10th electrons enter degenerate $\\pi_{2p_x}$ and $\\pi_{2p_y}$ orbitals with parallel spins: $(\\pi_{2p_x}^1 = \\pi_{2p_y}^1)$, giving bond order 1.0 and paramagnetism."),

    # 9 (Q404)
    ("Which of the following diatomic species does NOT exist based on Molecular Orbital Theory?",
     "$\\text{Be}_2$",
     "$\\text{B}_2$",
     "$\\text{C}_2$",
     "$\\text{Li}_2$",
     0, "Be2 Non-existence MOT",
     "$\\text{Be}_2$ has 8 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2 \\sigma_{2s}^{*2}$. $N_b = 4, N_a = 4$. $\\text{Bond Order} = (4 - 4)/2 = 0$. With zero bond order, $\\text{Be}_2$ cannot exist as a stable chemical molecule."),

    # 10 (Q405)
    ("What is the bond order and magnetic property of the Dilithium molecule ($\\text{Li}_2$, 6 electrons)?",
     "Bond order = 1.0, diamagnetic",
     "Bond order = 0, unstable",
     "Bond order = 2.0, paramagnetic",
     "Bond order = 0.5, paramagnetic",
     0, "Li2 Bond Order and Magnetism",
     "$\\text{Li}_2$ has 6 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*2} \\sigma_{2s}^2$. $N_b = 4, N_a = 2$. $\\text{Bond Order} = (4 - 2)/2 = 1.0$. All electrons are paired, making $\\text{Li}_2$ a diamagnetic gas molecule."),

    # 11 (Q406)
    ("Which of the following species has a fractional bond order of $0.5$?",
     "$\\text{H}_2^+$ and $\\text{H}_2^-$",
     "$\\text{H}_2$",
     "$\\text{He}_2$",
     "$\\text{He}_2^+$",
     0, "Fractional Bond Order 0.5",
     "$\\text{H}_2^+$ has 1 electron: $\\sigma_{1s}^1$, $\\text{BO} = (1 - 0)/2 = 0.5$. $\\text{H}_2^-$ has 3 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*1}$, $\\text{BO} = (2 - 1)/2 = 0.5$. Both have a bond order of $0.5$."),

    # 12 (Q407)
    ("The bond order of the $\\text{He}_2^+$ ion (3 electrons) is:",
     "0.5 (paramagnetic)",
     "1.0 (diamagnetic)",
     "0 (unstable)",
     "1.5 (paramagnetic)",
     0, "He2+ Bond Order",
     "$\\text{He}_2^+$ has 3 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*1}$. $N_b = 2, N_a = 1$. $\\text{Bond Order} = (2 - 1)/2 = 0.5$. It has 1 unpaired electron and is paramagnetic."),

    # 13 (Q408)
    ("The bond order of the Nitric oxide molecule ($\\text{NO}$, 15 electrons) is:",
     "2.5 (paramagnetic)",
     "3.0 (diamagnetic)",
     "2.0 (paramagnetic)",
     "1.5 (diamagnetic)",
     0, "NO Bond Order MOT",
     "$\\text{NO}$ has 15 electrons: $N_b = 10, N_a = 5$. $\\text{Bond Order} = (10 - 5)/2 = 2.5$. It has 1 unpaired electron in $\\pi^*_{2p}$ orbital and is paramagnetic."),

    # 14 (Q409)
    ("When Nitric oxide ($\\text{NO}$) loses an electron to form the Nitrosonium ion ($\\text{NO}^+$), what happens to its bond order and magnetic behavior?",
     "Bond order increases from 2.5 to 3.0, and it becomes diamagnetic",
     "Bond order decreases from 2.5 to 2.0",
     "Bond order remains 2.5",
     "It becomes more paramagnetic",
     0, "NO to NO+ Ionization MOT",
     "$\\text{NO}$ has 15 electrons ($\text{BO}=2.5$, paramagnetic). Removing the unpaired antibonding electron gives $\\text{NO}^+$ (14 electrons, isoelectronic with $\\text{N}_2$): $N_b = 10, N_a = 4 \\Rightarrow \\text{BO} = 3.0$. All electrons are paired, so it becomes diamagnetic with a shorter and stronger bond."),

    # 15 (Q410)
    ("The bond order of the Cyanide ion ($\\text{CN}^-$, 14 electrons) is:",
     "3.0 (diamagnetic)",
     "2.5 (paramagnetic)",
     "2.0 (diamagnetic)",
     "3.5 (paramagnetic)",
     0, "CN- Bond Order MOT",
     "$\\text{CN}^-$ has 14 electrons (isoelectronic with $\\text{N}_2$): $N_b = 10, N_a = 4$. $\\text{Bond Order} = (10 - 4)/2 = 3.0$, and it is diamagnetic."),

    # 16 (Q411)
    ("The bond order of the Cyanogen radical ($\\text{CN}$, 13 electrons) is:",
     "2.5 (paramagnetic)",
     "3.0 (diamagnetic)",
     "2.0 (paramagnetic)",
     "1.5 (diamagnetic)",
     0, "CN Radical Bond Order MOT",
     "$\\text{CN}$ has 13 electrons: $N_b = 9, N_a = 4$. $\\text{Bond Order} = (9 - 4)/2 = 2.5$, with 1 unpaired electron in $\\sigma_{2p_z}$, making it paramagnetic."),

    # 17 (Q412)
    ("The highest occupied molecular orbital (HOMO) in the Nitrogen molecule ($\\text{N}_2$) is:",
     "$\\sigma_{2p_z}$",
     "$\\pi_{2p_x}$ and $\\pi_{2p_y}$",
     "$\\pi^*_{2p_x}$",
     "$\\sigma^*_{2s}$",
     0, "N2 HOMO Orbital",
     "Due to $s-p$ mixing, the energy order in $\\text{N}_2$ is $\\dots (\\pi_{2p_x}^2 = \\pi_{2p_y}^2) < \\sigma_{2p_z}^2$. The highest occupied molecular orbital is $\\sigma_{2p_z}$."),

    # 18 (Q413)
    ("The highest occupied molecular orbital (HOMO) in the Carbon molecule ($\\text{C}_2$) is:",
     "$\\pi_{2p_x}$ and $\\pi_{2p_y}$",
     "$\\sigma_{2p_z}$",
     "$\\sigma^*_{2s}$",
     "$\\pi^*_{2p_x}$",
     0, "C2 HOMO Orbital",
     "In $\\text{C}_2$ (12 electrons), the valence configuration is $\\sigma_{2s}^2 \\sigma_{2s}^{*2} (\\pi_{2p_x}^2 = \\pi_{2p_y}^2)$. The HOMO is the pair of degenerate $\\pi_{2p_x}$ and $\\pi_{2p_y}$ orbitals."),

    # 19 (Q414)
    ("The lowest unoccupied molecular orbital (LUMO) in the Nitrogen molecule ($\\text{N}_2$) is:",
     "$\\pi^*_{2p_x}$ and $\\pi^*_{2p_y}$",
     "$\\sigma^*_{2p_z}$",
     "$\\sigma_{2p_z}$",
     "$\\pi_{2p_x}$",
     0, "N2 LUMO Orbital",
     "In $\\text{N}_2$, all orbitals up to $\\sigma_{2p_z}$ are filled. The next vacant orbitals are the degenerate pair of antibonding $\\pi^*_{2p_x}$ and $\\pi^*_{2p_y}$ orbitals."),

    # 20 (Q415)
    ("The highest occupied molecular orbital (HOMO) in the Oxygen molecule ($\\text{O}_2$) is:",
     "$\\pi^*_{2p_x}$ and $\\pi^*_{2p_y}$",
     "$\\sigma_{2p_z}$",
     "$\\sigma^*_{2p_z}$",
     "$\\pi_{2p_x}$",
     0, "O2 HOMO Orbital",
     "In $\\text{O}_2$ (16 electrons), the 15th and 16th electrons occupy the degenerate antibonding orbitals $\\pi^*_{2p_x}$ and $\\pi^*_{2p_y}$, which represent the HOMO."),

    # 21 (Q416)
    ("Which of the following molecules has a bond order of 1.0 and is PARAMAGNETIC?",
     "$\\text{B}_2$",
     "$\\text{C}_2$",
     "$\\text{N}_2$",
     "$\\text{O}_2$",
     0, "B2 BO 1 Paramagnetic",
     "$\\text{B}_2$ has 10 electrons: $N_b = 6, N_a = 4 \\Rightarrow \\text{BO} = (6 - 4)/2 = 1.0$. The two valence electrons reside in degenerate $(\\pi_{2p_x})^1 (\\pi_{2p_y})^1$ with unpaired spins, making it paramagnetic."),

    # 22 (Q417)
    ("Which of the following pairs of diatomic species is ISOELECTRONIC and has the same bond order of 3.0?",
     "$\\text{CO}$ and $\\text{NO}^+$",
     "$\\text{O}_2$ and $\\text{N}_2$",
     "$\\text{NO}$ and $\\text{CO}$",
     "$\\text{CN}^-$ and $\\text{O}_2^+$",
     0, "CO and NO+ Isoelectronic 3.0",
     "Both $\\text{CO}$ ($6+8=14$) and $\\text{NO}^+$ ($7+8-1=14$) have 14 electrons, zero unpaired electrons, and a triple bond with bond order 3.0."),

    # 23 (Q418)
    ("What is the magnetic behavior of the Peroxide ion ($\\text{O}_2^{2-}$)?",
     "Diamagnetic (all electrons paired)",
     "Paramagnetic with 1 unpaired electron",
     "Paramagnetic with 2 unpaired electrons",
     "Ferromagnetic",
     0, "Peroxide Ion Diamagnetism",
     "$\\text{O}_2^{2-}$ has 18 electrons. Both antibonding $\\pi^*$ orbitals are completely filled: $(\\pi^*_{2p_x})^2 (\\pi^*_{2p_y})^2$. All electrons are paired, making it diamagnetic with a bond order of 1.0."),

    # 24 (Q419)
    ("What is the magnetic behavior of the Superoxide ion ($\\text{O}_2^-$)?",
     "Paramagnetic with 1 unpaired electron",
     "Diamagnetic",
     "Paramagnetic with 2 unpaired electrons",
     "Non-magnetic",
     0, "Superoxide Ion Paramagnetism",
     "$\\text{O}_2^-$ has 17 electrons. Configuration: $(\\pi^*_{2p_x})^2 (\\pi^*_{2p_y})^1$. It possesses exactly one unpaired electron, making it paramagnetic with a bond order of 1.5."),

    # 25 (Q420)
    ("Which of the following orders represents the correct increasing magnetic moment ($\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$)?",
     "$\\text{O}_2^{2-} (0\\text{ BM}) < \\text{O}_2^- (1.73\\text{ BM}) < \\text{O}_2 (2.83\\text{ BM})$",
     "$\\text{O}_2 < \\text{O}_2^- < \\text{O}_2^{2-}$",
     "$\\text{O}_2^- < \\text{O}_2 < \\text{O}_2^{2-}$",
     "$\\text{O}_2 = \\text{O}_2^- = \\text{O}_2^{2-}$",
     0, "Magnetic Moment Trend Oxygen Species",
     "Number of unpaired electrons ($n$): $\\text{O}_2^{2-}$ has $n = 0$ ($\\mu = 0$); $\\text{O}_2^-$ has $n = 1$ ($\\mu = \\sqrt{1(3)} = 1.73\\text{ BM}$); $\\text{O}_2$ has $n = 2$ ($\\mu = \\sqrt{2(4)} = 2.83\\text{ BM}$). Order: $\\text{O}_2^{2-} < \\text{O}_2^- < \\text{O}_2$."),

    # 26 (Q421)
    ("Which of the following compounds has the HIGHEST boiling point?",
     "$\\text{H}_2\\text{O}$ ($100^\\circ\\text{C}$)",
     "$\\text{HF}$ ($20^\\circ\\text{C}$)",
     "$\\text{NH}_3$ ($-33^\\circ\\text{C}$)",
     "$\\text{CH}_4$ ($-161^\\circ\\text{C}$)",
     0, "Highest Boiling Point H2O",
     "Although $\\text{H}-\\text{F}$ forms individual stronger hydrogen bonds than $\\text{H}-\\text{O}$, each water molecule can form four hydrogen bonds in a 3D network, whereas $\\text{HF}$ forms on average only two. The greater total extent of hydrogen bonding gives water the highest boiling point ($100^\\circ\\text{C}$)."),

    # 27 (Q422)
    ("Why does $\\text{HF}$ form fewer hydrogen bonds per molecule than $\\text{H}_2\\text{O}$?",
     "$\\text{HF}$ has only one hydrogen atom and three lone pairs (donor-deficient), whereas $\\text{H}_2\\text{O}$ has two hydrogens and two lone pairs (balanced stoichiometry)",
     "$\\text{HF}$ is a gas",
     "Fluorine has a larger atomic radius than oxygen",
     "$\\text{HF}$ does not form hydrogen bonds",
     0, "HF Stoichiometry H-bonding",
     "In $\\text{HF}$, there are 3 lone pairs but only 1 hydrogen atom (donor limited), restricting it to an average of 2 hydrogen bonds per molecule in linear zigzag chains. Water has 2 hydrogens and 2 lone pairs, forming an ideal 4-coordinated tetrahedral hydrogen-bonded network."),

    # 28 (Q423)
    ("The maximum number of hydrogen bonds that a single water molecule can participate in in ice is:",
     "4",
     "2",
     "3",
     "6",
     0, "Water Max H-bonds Count 4",
     "Each water molecule has two hydrogen atoms (donating two H-bonds) and two lone pairs on oxygen (accepting two H-bonds), forming a maximum of 4 hydrogen bonds in a tetrahedral arrangement."),

    # 29 (Q424)
    ("In liquid $\\text{HF}$, the molecules associate into polymeric zigzag chains of the formula $(\\text{HF})_n$ with an $\\text{F}-\\text{H}\\cdots\\text{F}$ bond angle of approximately:",
     "$120^\\circ$ (or $\\approx 115^\\circ-120^\\circ$)",
     "$180^\\circ$",
     "$90^\\circ$",
     "$60^\\circ$",
     0, "HF Polymeric Chain Angle",
     "Because of the tetrahedral orientation of lone pairs on the fluorine atom, the hydrogen-bonded $(\\text{HF})_n$ chains are not linear; they form a planar zigzag chain with an angle of approximately $120^\\circ$ at the fluorine atom."),

    # 30 (Q425)
    ("Salicylic acid ($o$-hydroxybenzoic acid) is more acidic ($pK_a = 2.97$) than benzoic acid ($pK_a = 4.20$) because:",
     "Intramolecular hydrogen bonding stabilizes the salicylate conjugate base anion",
     "Salicylic acid has higher molecular weight",
     "The hydroxyl group withdraws electrons through resonance",
     "Benzoic acid decomposes",
     0, "Salicylic Acid Acidity H-bonding",
     "In the salicylate anion ($o-\\text{HO}-\\text{C}_6\\text{H}_4-\\text{COO}^-$), the phenolic $-\\text{OH}$ group forms a strong intramolecular hydrogen bond with the carboxylate oxygen, stabilizing the conjugate base and shifting the acid equilibrium forward."),

    # 31 (Q426)
    ("Which of the following compounds exhibits INTRAMOLECULAR hydrogen bonding?",
     "Salicylaldehyde ($o$-hydroxybenzaldehyde)",
     "$p$-hydroxybenzaldehyde",
     "Acetaldehyde",
     "Benzaldehyde",
     0, "Salicylaldehyde Intramolecular H-bond",
     "In salicylaldehyde, the phenolic $-\\text{OH}$ and formyl $-\\text{CHO}$ groups are on adjacent ring carbons, forming a stable 6-membered intramolecular hydrogen-bonded chelate ring."),

    # 32 (Q427)
    ("Chloral hydrate ($\\text{CCl}_3\\text{CH}(\\text{OH})_2$) is an exceptionally stable gem-diol that resists dehydration because of:",
     "Intramolecular hydrogen bonding between the hydroxyl hydrogens and the electronegative chlorine atoms",
     "Ionic bonding with solvent",
     "Steric hindrance only",
     "Hyperconjugation",
     0, "Chloral Hydrate Stability H-bond",
     "Gem-diols are usually unstable and lose water to form aldehydes. However, chloral hydrate is stabilized by two strong 5-membered intramolecular hydrogen bonds ($\text{O}-\text{H}\cdots\text{Cl}$) formed between the $-\\text{OH}$ hydrogens and the bulky chlorine atoms."),

    # 33 (Q428)
    ("Which of the following polymers owes its remarkable tensile strength to intermolecular hydrogen bonding between $-\\text{CO}-$ and $-\\text{NH}-$ groups?",
     "Nylon-6,6",
     "Polyethylene",
     "Teflon",
     "Polystyrene",
     0, "Nylon-66 Hydrogen Bonding",
     "In Nylon-6,6, linear polyamide chains are held together by an extensive network of intermolecular hydrogen bonds between the carbonyl groups ($>\\text{C}=\\text{O}$) and amine groups ($-\\text{NH}-$), imparting high tensile strength, crystallinity, and high melting point."),

    # 34 (Q429)
    ("The double helix structure of DNA is held together primarily by:",
     "Hydrogen bonds between complementary purine and pyrimidine base pairs (2 between A and T; 3 between G and C)",
     "Covalent bonds between bases",
     "Ionic bonds between sugars",
     "Disulfide linkages",
     0, "DNA Double Helix Hydrogen Bonds",
     "The two strands of the DNA double helix are paired by specific hydrogen bonds: Adenine pairs with Thymine via 2 hydrogen bonds ($\\text{A}=\\text{T}$), and Guanine pairs with Cytosine via 3 hydrogen bonds ($\\text{G}\\equiv\\text{C}$)."),

    # 35 (Q430)
    ("Between Guanine-Cytosine ($\\text{G}\\equiv\\text{C}$) and Adenine-Thymine ($\\text{A}=\\text{T}$) base pairs, DNA with higher $\\text{G-C}$ content has a higher melting temperature ($T_m$) because:",
     "$\\text{G-C}$ base pairs are held by three hydrogen bonds, while $\\text{A-T}$ pairs are held by only two",
     "Guanine is heavier than Adenine",
     "$\\text{G-C}$ pairs form covalent bonds",
     "Cytosine has a higher dipole moment",
     0, "GC vs AT Hydrogen Bonds DNA",
     "Three hydrogen bonds link Guanine and Cytosine, compared to two between Adenine and Thymine. Greater thermal energy is required to denature (melt) DNA strands with higher $\\text{G-C}$ content."),

    # 36 (Q431)
    ("The $\\alpha$-helix secondary structure of proteins is stabilized by:",
     "Intramolecular hydrogen bonding between the $-\\text{NH}-$ of one peptide unit and the $-\\text{C}=\\text{O}$ of the fourth amino acid residue",
     "Disulfide bonds only",
     "Hydrophobic interactions only",
     "Ester linkages",
     0, "Alpha Helix Hydrogen Bonding",
     "The $\\alpha$-helix is stabilized by regular hydrogen bonds formed between the $-\\text{NH}-$ group of an amino acid residue and the carbonyl oxygen ($-\\text{C}=\\text{O}$) of the residue located 4 positions earlier along the same polypeptide chain."),

    # 37 (Q432)
    ("Which of the following noble gases can be liquefied at the highest temperature due to greatest polarizability and dispersion forces?",
     "Xenon ($\\text{Xe}$, bp $165\\text{ K}$)",
     "Krypton ($\\text{Kr}$, bp $120\\text{ K}$)",
     "Argon ($\\text{Ar}$, bp $87\\text{ K}$)",
     "Helium ($\\text{He}$, bp $4.2\\text{ K}$)",
     0, "Noble Gases Boiling Point Trend",
     "Down Group 18, atomic size and number of electrons increase. The electron cloud becomes more polarizable, increasing the strength of London dispersion forces and raising the boiling point: $\\text{He} (4.2\\text{ K}) < \\text{Ne} (27\\text{ K}) < \\text{Ar} (87\\text{ K}) < \\text{Kr} (120\\text{ K}) < \\text{Xe} (165\\text{ K})$."),

    # 38 (Q433)
    ("The correct order of strength of intermolecular forces is:",
     "$\\text{Ion-dipole} > \\text{Hydrogen bonding} > \\text{Dipole-dipole} > \\text{London dispersion forces}$",
     "$\\text{London dispersion} > \\text{Dipole-dipole} > \\text{Hydrogen bonding} > \\text{Ion-dipole}$",
     "$\\text{Dipole-dipole} > \\text{Hydrogen bonding} > \\text{Ion-dipole} > \\text{London dispersion}$",
     "$\\text{Hydrogen bonding} > \\text{Ion-dipole} > \\text{Dipole-dipole} > \\text{London dispersion}$",
     0, "Intermolecular Forces Hierarchy",
     "Ion-dipole ($40-600\\text{ kJ/mol}$) > Hydrogen bonding ($10-40\\text{ kJ/mol}$) > Dipole-dipole ($5-25\\text{ kJ/mol}$) > London dispersion ($0.05-4\\text{ kJ/mol}$)."),

    # 39 (Q434)
    ("London dispersion forces between two non-polar molecules depend on the inverse power of distance ($r$) as:",
     "$1 / r^6$",
     "$1 / r^3$",
     "$1 / r^2$",
     "$1 / r$",
     0, "London Dispersion Distance Dependency",
     "London dispersion interaction energy between two induced dipoles is proportional to $-C / r^6$, falling off extremely rapidly with increasing separation distance."),

    # 40 (Q435)
    ("Dipole-dipole interaction energy between stationary polar molecules (in solids) is proportional to:",
     "$1 / r^3$",
     "$1 / r^6$",
     "$1 / r^2$",
     "$1 / r$",
     0, "Stationary Dipole Dipole Dependency",
     "Between fixed (stationary) dipoles in a crystal, the electrostatic interaction energy is proportional to $1 / r^3$. For rotating dipoles in liquids/gases, thermal averaging reduces it to $1 / r^6$."),

    # 41 (Q436)
    ("Dipole-induced dipole interaction (Debye forces) energy is proportional to:",
     "$1 / r^6$",
     "$1 / r^2$",
     "$1 / r^3$",
     "$1 / r$",
     0, "Debye Forces Distance Dependency",
     "The attraction between a permanent dipole and an induced dipole in an adjacent polarizable molecule depends on $1 / r^6$."),

    # 42 (Q437)
    ("Which of the following pairs of substances experiences ION-DIPOLE interactions?",
     "$\\text{Na}^+$ ions dissolved in water ($\\text{H}_2\\text{O}$)",
     "$\\text{HCl}$ and $\\text{HCl}$",
     "$\\text{Ar}$ and $\\text{Kr}$",
     "$\\text{CH}_4$ and $\\text{CCl}_4$",
     0, "Ion-Dipole Interaction Example",
     "When sodium chloride dissolves in water, the positive $\\text{Na}^+$ cation is surrounded by the negative oxygen dipoles of polar water molecules ($[\\text{Na}(\\text{H}_2\\text{O})_6]^+$), representing an ion-dipole interaction."),

    # 43 (Q438)
    ("Which of the following pairs of substances experiences DIPOLE-INDUCED DIPOLE interactions?",
     "$\\text{HCl}$ and $\\text{Ar}$ (polar molecule with noble gas)",
     "$\\text{H}_2\\text{O}$ and $\\text{H}_2\\text{O}$",
     "$\\text{NaCl}$ in water",
     "$\\text{He}$ and $\\text{Ne}$",
     0, "Dipole-Induced Dipole Example",
     "$\\text{HCl}$ has a permanent dipole moment, while Argon is non-polar. The electric field of the permanent dipole of $\\text{HCl}$ polarizes the electron cloud of Argon, inducing a temporary dipole (Debye interaction)."),

    # 44 (Q439)
    ("Which of the following halogen molecules has the strongest London dispersion forces and the highest boiling point?",
     "Iodine ($\\text{I}_2$)",
     "Bromine ($\\text{Br}_2$)",
     "Chlorine ($\\text{Cl}_2$)",
     "Fluorine ($\\text{F}_2$)",
     0, "Highest Dispersion Forces Iodine",
     "Iodine has the largest molecular size and greatest number of electrons ($106$ electrons in $\\text{I}_2$), making its electron cloud most easily polarizable and generating the strongest London dispersion forces, so it is a solid at room temperature."),

    # 45 (Q440)
    ("Which of the following noble gases has the lowest polarizability?",
     "Helium ($\\text{He}$)",
     "Neon ($\\text{Ne}$)",
     "Argon ($\\text{Ar}$)",
     "Xenon ($\\text{Xe}$)",
     0, "Lowest Polarizability Helium",
     "Helium has only two tightly held $1s$ electrons close to the nucleus, having the lowest polarizability of any chemical species and the weakest intermolecular attractions."),

    # 46 (Q441)
    ("Why is Glycerol ($\\text{CH}_2\\text{OH}-\\text{CHOH}-\\text{CH}_2\\text{OH}$) an extremely viscous liquid with a very high boiling point ($290^\\circ\\text{C}$)?",
     "Each molecule has three $-\\text{OH}$ groups forming an extensive three-dimensional network of intermolecular hydrogen bonds",
     "Glycerol is an ionic salt",
     "Glycerol has metallic bonds",
     "Glycerol is non-polar",
     0, "Glycerol Viscosity H-bonds",
     "Glycerol contains three hydroxyl groups per molecule. The resulting dense, interlinked web of intermolecular hydrogen bonds restricts molecular movement, imparting high viscosity and a high boiling point ($290^\\circ\\text{C}$)."),

    # 47 (Q442)
    ("Which of the following compounds has the lowest boiling point?",
     "$\\text{CH}_4$ ($-161.5^\\circ\\text{C}$)",
     "$\\text{SiH}_4$ ($-111.8^\\circ\\text{C}$)",
     "$\\text{GeH}_4$ ($-88.5^\\circ\\text{C}$)",
     "$\\text{SnH}_4$ ($-51.8^\\circ\\text{C}$)",
     0, "Group 14 Hydrides Boiling Point Trend",
     "All Group 14 hydrides are non-polar tetrahedral molecules held only by London dispersion forces. Methane has the smallest molecular mass and fewest electrons, having the weakest dispersion forces and lowest boiling point ($-161.5^\\circ\\text{C}$)."),

    # 48 (Q443)
    ("The anomalous boiling points of hydrides in Groups 15, 16, and 17 ($\\text{NH}_3, \\text{H}_2\\text{O}, \\text{HF}$) that are significantly higher than the subsequent hydrides in their groups are caused by:",
     "Intermolecular hydrogen bonding",
     "Triple covalent bonds",
     "Ionic lattice energy",
     "Zero dipole moments",
     0, "Hydrides Boiling Point Anomaly",
     "In Groups 15, 16, and 17, the first hydrides ($\\text{NH}_3, \\text{H}_2\\text{O}, \\text{HF}$) have elements with high electronegativity and small radii, forming strong intermolecular hydrogen bonds that cause abnormal spikes in boiling point."),

    # 49 (Q444)
    ("Which of the following compounds does NOT show any hydrogen bonding?",
     "$\\text{CH}_4$",
     "$\\text{HF}$",
     "$\\text{H}_2\\text{O}$",
     "$\\text{NH}_3$",
     0, "CH4 No Hydrogen Bonding",
     "Carbon has moderate electronegativity ($2.5$) and lacks non-bonding lone pairs in methane, so $\\text{CH}_4$ cannot form hydrogen bonds."),

    # 50 (Q445)
    ("In which of the following solvents does Acetic acid exist as a monomer?",
     "Water ($\\text{H}_2\\text{O}$)",
     "Benzene ($\\text{C}_6\\text{H}_6$)",
     "Carbon tetrachloride ($\\text{CCl}_4$)",
     "Hexane",
     0, "Acetic Acid Monomer in Water",
     "In water, polar water molecules form strong hydrogen bonds with the acetic acid molecules, breaking the acetic acid dimers into individual hydrated monomers ($+\\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+$)."),

    # 51 (Q446)
    ("In which of the following solvents does Acetic acid exist predominantly as a DIMER?",
     "Benzene",
     "Water",
     "Liquid ammonia",
     "Methanol",
     0, "Acetic Acid Dimer in Benzene",
     "In non-polar solvents like benzene, there are no competing solvent hydrogen bonds, so acetic acid molecules pair up into cyclic hydrogen-bonded dimers with a doubled molar mass ($120\\text{ g/mol}$)."),

    # 52 (Q447)
    ("The strength of a hydrogen bond is typically in the range of:",
     "$10\\text{ to } 40\\text{ kJ/mol}$",
     "$400\\text{ to } 500\\text{ kJ/mol}$",
     "$1\\text{ to } 2\\text{ kJ/mol}$",
     "$1000\\text{ to } 2000\\text{ kJ/mol}$",
     0, "Hydrogen Bond Energy Range",
     "A typical hydrogen bond has an energy of $10-40\\text{ kJ/mol}$ (about one-tenth the strength of a covalent bond $\\approx 400\\text{ kJ/mol}$, but roughly ten times stronger than London dispersion forces $\\approx 1-5\\text{ kJ/mol}$)."),

    # 53 (Q448)
    ("Which of the following atoms does NOT form effective hydrogen bonds under ordinary conditions despite having an electronegativity equal to Nitrogen ($3.0$)?",
     "Chlorine ($\\text{Cl}$)",
     "Fluorine ($\\text{F}$)",
     "Oxygen ($\\text{O}$)",
     "Nitrogen ($\\text{N}$)",
     0, "Chlorine Poor H-bonding Large Size",
     "Although Chlorine has the same electronegativity as Nitrogen ($3.0$), its atomic radius ($99\\text{ pm}$) is much larger than Nitrogen's ($70\\text{ pm}$). Its electron density is diffuse, so its electrostatic attraction on hydrogen is too weak to form strong hydrogen bonds under normal conditions."),

    # 54 (Q449)
    ("The number of nodal planes in a $\\pi^*$ (antibonding pi) molecular orbital formed by two $p_z$ orbitals is:",
     "2",
     "1",
     "0",
     "3",
     0, "Antibonding Pi Nodal Planes",
     "A $\\pi^*$ orbital has two nodal planes: (1) the internuclear $xy$-plane (inherent to $p_z$ orbitals), and (2) a vertical nodal plane midway between the two nuclei perpendicular to the internuclear axis due to destructive interference."),

    # 55 (Q450)
    ("The number of nodal planes in a $\\sigma^*$ (antibonding sigma) molecular orbital formed by two $1s$ orbitals is:",
     "1",
     "0",
     "2",
     "3",
     0, "Antibonding Sigma Nodal Planes",
     "Destructive interference of two $1s$ orbitals produces a nodal plane perpendicular to the internuclear axis midway between the two nuclei, where electron density is zero.")
]

# -------------------------------------------------------------------------
# HARD QUESTIONS (50 questions: Q451 to Q500)
# -------------------------------------------------------------------------
hard_items = [
    # 1 (Q451) Authentic NEET 2022
    ("Match List-I (Molecules/Ions) with List-II (Bond Order):\n(A) $\\text{N}_2$ -> (1) 3.0\n(B) $\\text{O}_2$ -> (2) 2.0\n(C) $\\text{O}_2^+$ -> (3) 2.5\n(D) $\\text{O}_2^{2-}$ -> (4) 1.0",
     "A-1, B-2, C-3, D-4",
     "A-2, B-1, C-4, D-3",
     "A-1, B-3, C-2, D-4",
     "A-4, B-2, C-1, D-3",
     0, "Match Bond Orders NEET 2022",
     "$\\text{N}_2$ has $\\text{BO}=3.0$ (A-1). $\\text{O}_2$ has $\\text{BO}=2.0$ (B-2). $\\text{O}_2^+$ has $\\text{BO}=2.5$ (C-3). $\\text{O}_2^{2-}$ has $\\text{BO}=1.0$ (D-4). Match: A-1, B-2, C-3, D-4.",
     True, "NEET 2022"),

    # 2 (Q452) Authentic NEET 2023
    ("Consider the following statements regarding Molecular Orbital Theory:\n(I) In $\\text{N}_2$, removal of an electron to form $\\text{N}_2^+$ decreases the bond order from 3.0 to 2.5.\n(II) In $\\text{O}_2$, removal of an electron to form $\\text{O}_2^+$ increases the bond order from 2.0 to 2.5.\n(III) Both $\\text{B}_2$ and $\\text{O}_2$ are paramagnetic.\n(IV) $\\text{C}_2$ has a double bond consisting of two $\\pi$-bonds.\nWhich of the above statements are correct?",
     "I, II, III, and IV are all correct",
     "Only I, II, and IV are correct",
     "Only II and III are correct",
     "Only I and III are correct",
     0, "MOT Core Truths NEET 2023",
     "Statement I is correct: $\\text{N}_2^+$ removes from bonding $\\sigma_{2p_z}$, reducing BO to 2.5. Statement II is correct: $\\text{O}_2^+$ removes from antibonding $\\pi^*_{2p}$, increasing BO to 2.5. Statement III is correct: both have 2 unpaired electrons. Statement IV is correct: $\\text{C}_2$ has two $\\pi$-bonds. All four statements are correct.",
     True, "NEET 2023"),

    # 3 (Q453) Authentic NEET 2024
    ("Given below are two statements:\nStatement I: The boiling point of $o$-nitrophenol is lower than that of $p$-nitrophenol.\nStatement II: $o$-nitrophenol forms intramolecular hydrogen bonding, which minimizes intermolecular association, whereas $p$-nitrophenol forms extensive intermolecular hydrogen bonding.\nIn the light of the above statements, choose the correct answer:",
     "Both Statement I and Statement II are true, and Statement II is the correct explanation of Statement I",
     "Both Statement I and Statement II are true, but Statement II is NOT the correct explanation of Statement I",
     "Statement I is true, but Statement II is false",
     "Statement I is false, but Statement II is true",
     0, "Nitrophenols H-bonding NEET 2024",
     "Both statements are true. Intramolecular hydrogen bonding in $o$-nitrophenol isolates the molecule and prevents association, giving it a lower boiling point ($216^\\circ\\text{C}$) and making it steam volatile. In $p$-nitrophenol, intermolecular H-bonding forms large molecular aggregates with a higher boiling point ($279^\\circ\\text{C}$). Statement II correctly explains Statement I.",
     True, "NEET 2024"),

    # 4 (Q454)
    ("Assertion (A): The bond order of $\\text{CO}^+$ is 3.5, which is higher than that of neutral $\\text{CO}$ (3.0).\nReason (R): In $\\text{CO}$, the highest occupied molecular orbital has antibonding character with substantial $2s$ contribution, so removing an electron strengthens the bond.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason CO+ Bond Order Anomaly",
     "Assertion (A) is true: experimentally, $\\text{BO}(\\text{CO}^+) = 3.5$ with bond length $111.5\\text{ pm} < 112.8\\text{ pm}$ in $\\text{CO}$. Reason (R) is true: the HOMO in $\\text{CO}$ ($5\\sigma$) has slight antibonding character due to polarization and $s-p$ mixing; ionising an electron from this orbital increases net bond order to $\\approx 3.5$. (R) correctly explains (A)."),

    # 5 (Q455)
    ("Assertion (A): $\\text{O}_2$ is paramagnetic while $\\text{O}_2^{2-}$ is diamagnetic.\nReason (R): In $\\text{O}_2$, the two degenerate $\\pi^*_{2p}$ orbitals contain one unpaired electron each, whereas in $\\text{O}_2^{2-}$ both are completely filled with two paired electrons each.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason O2 vs O2 2- Magnetism",
     "Assertion (A) is true: $\\text{O}_2$ is paramagnetic ($\mu = 2.83\\text{ BM}$) and $\\text{O}_2^{2-}$ is diamagnetic. Reason (R) is true: configuration of $\\text{O}_2$ ends in $(\\pi^*_{2p_x})^1 (\\pi^*_{2p_y})^1$ (two unpaired electrons), while $\\text{O}_2^{2-}$ ends in $(\\pi^*_{2p_x})^2 (\\pi^*_{2p_y})^2$ (zero unpaired electrons). (R) correctly explains (A)."),

    # 6 (Q456)
    ("Assertion (A): Water ($\\text{H}_2\\text{O}$) has a higher boiling point than Hydrogen fluoride ($\\text{HF}$), despite $\\text{H}-\\text{F}$ forming stronger hydrogen bonds.\nReason (R): Each water molecule can form an average of four hydrogen bonds, whereas each $\\text{HF}$ molecule forms an average of only two hydrogen bonds.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason H2O vs HF Boiling Point",
     "Assertion (A) is true: $\\text{H}_2\\text{O}$ boils at $100^\\circ\\text{C}$ vs $\\text{HF}$ at $20^\\circ\\text{C}$. Reason (R) is true: $\\text{H}_2\\text{O}$ has stoichiometric balance (2 H donors and 2 lone pair acceptors), forming 4 H-bonds per molecule. $\\text{HF}$ is donor-deficient (only 1 H donor), forming only 2 H-bonds per molecule. (R) correctly explains (A)."),

    # 7 (Q457)
    ("Assertion (A): Ice has an open cage-like crystal structure with lower density than liquid water at $0^\\circ\\text{C}$.\nReason (R): In ice, each water molecule is tetrahedrally hydrogen-bonded to four other water molecules, creating empty cage-like channels.",
     "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
     "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
     "(A) is true, but (R) is false",
     "(A) is false, but (R) is true",
     0, "Assertion Reason Ice Density Cage",
     "Assertion (A) is true: density of ice is $0.917\\text{ g/cm}^3 < 1.000\\text{ g/cm}^3$ of water. Reason (R) is true: the rigid tetrahedral hydrogen bonding forces the molecules apart into an open hexagonal lattice with hollow cavities. (R) correctly explains (A)."),

    # 8 (Q458)
    ("Which of the following diatomic molecules has the SHORTEST bond length?",
     "$\\text{N}_2$ ($109.8\\text{ pm}$)",
     "$\\text{O}_2$ ($121\\text{ pm}$)",
     "$\\text{F}_2$ ($142\\text{ pm}$)",
     "$\\text{C}_2$ ($124\\text{ pm}$)",
     0, "Shortest Bond Length N2 MOT",
     "$\\text{N}_2$ has the highest bond order (3.0) and small atomic radii, giving it the shortest bond length ($109.8\\text{ pm}$) among all neutral homonuclear diatomic molecules."),

    # 9 (Q459)
    ("Which of the following species has the LONGEST bond length?",
     "$\\text{O}_2^{2-}$ ($149\\text{ pm}$)",
     "$\\text{O}_2^-$ ($128\\text{ pm}$)",
     "$\\text{O}_2$ ($121\\text{ pm}$)",
     "$\\text{O}_2^+$ ($112\\text{ pm}$)",
     0, "Longest Bond Length Peroxide",
     "Bond length is inversely proportional to bond order. $\\text{O}_2^{2-}$ has the lowest bond order (1.0), giving it the longest bond length ($149\\text{ pm}$)."),

    # 10 (Q460)
    ("The magnetic moment of the Superoxide ion ($\\text{O}_2^-$) is:",
     "$1.73\\text{ BM}$",
     "$2.83\\text{ BM}$",
     "$0\\text{ BM}$",
     "$3.87\\text{ BM}$",
     0, "Superoxide Magnetic Moment BM",
     "$\\text{O}_2^-$ has 1 unpaired electron ($n = 1$). Magnetic moment $\\mu = \\sqrt{n(n+2)} = \\sqrt{1(3)} = \\sqrt{3} \\approx 1.732\\text{ BM}$."),

    # 11 (Q461)
    ("The magnetic moment of the Oxygen molecule ($\\text{O}_2$) in its ground triplet state is:",
     "$2.83\\text{ BM}$",
     "$1.73\\text{ BM}$",
     "$0\\text{ BM}$",
     "$4.90\\text{ BM}$",
     0, "Oxygen Magnetic Moment BM",
     "$\\text{O}_2$ has 2 unpaired electrons ($n = 2$). Magnetic moment $\\mu = \\sqrt{2(4)} = \\sqrt{8} \\approx 2.828\\text{ BM}$."),

    # 12 (Q462)
    ("The bond order of the Acetylide ion ($\\text{C}_2^{2-}$, 14 electrons) is:",
     "3.0",
     "2.5",
     "2.0",
     "1.5",
     0, "C2 2- Bond Order MOT",
     "$\\text{C}_2^{2-}$ has 14 electrons (isoelectronic with $\\text{N}_2$): $N_b = 10, N_a = 4$. $\\text{Bond Order} = (10 - 4)/2 = 3.0$, and it is diamagnetic."),

    # 13 (Q463)
    ("Which of the following diatomic species has a bond order of ZERO and cannot be isolated?",
     "$\\text{Ne}_2$",
     "$\\text{F}_2$",
     "$\\text{O}_2$",
     "$\\text{N}_2$",
     0, "Ne2 Zero Bond Order",
     "$\\text{Ne}_2$ has 20 electrons: all bonding and antibonding orbitals up to $\\sigma^*_{2p_z}$ are completely filled. $N_b = 10, N_a = 10$. $\\text{Bond Order} = (10 - 10)/2 = 0$."),

    # 14 (Q464)
    ("Which of the following species has the HIGHEST bond dissociation energy?",
     "$\\text{N}_2$ ($946\\text{ kJ/mol}$)",
     "$\\text{O}_2$ ($498\\text{ kJ/mol}$)",
     "$\\text{F}_2$ ($158.8\\text{ kJ/mol}$)",
     "$\\text{C}_2$ ($600\\text{ kJ/mol}$)",
     0, "Highest Dissociation Energy N2",
     "With a bond order of 3.0 and strong orbital overlap, $\\text{N}_2$ has an exceptionally high bond dissociation enthalpy of $946\\text{ kJ/mol}$."),

    # 15 (Q465)
    ("In which of the following processes does the bond order INCREASE?",
     "$\\text{O}_2 \\rightarrow \\text{O}_2^+ + e^-$",
     "$\\text{N}_2 \\rightarrow \\text{N}_2^+ + e^-$",
     "$\\text{O}_2 + e^- \\rightarrow \\text{O}_2^-$",
     "$\\text{N}_2 + e^- \\rightarrow \\text{N}_2^-$",
     0, "Process with Increasing Bond Order",
     "Ionization of $\\text{O}_2$: an electron is removed from the antibonding $\\pi^*_{2p}$ orbital, increasing the bond order from $2.0$ to $2.5$. In all other options, bond order decreases."),

    # 16 (Q466)
    ("In which of the following processes does the bond order DECREASE?",
     "$\\text{N}_2 \\rightarrow \\text{N}_2^+ + e^-$",
     "$\\text{O}_2 \\rightarrow \\text{O}_2^+ + e^-$",
     "$\\text{NO} \\rightarrow \\text{NO}^+ + e^-$",
     "$\\text{C}_2 + 2e^- \\rightarrow \\text{C}_2^{2-}$",
     0, "Process with Decreasing Bond Order",
     "In $\\text{N}_2 \\rightarrow \\text{N}_2^+$, an electron is removed from the bonding $\\sigma_{2p_z}$ orbital, decreasing the bond order from $3.0$ down to $2.5$."),

    # 17 (Q467)
    ("Which of the following species has a bond order of 2.5 and is PARAMAGNETIC?",
     "$\\text{O}_2^+$ and $\\text{NO}$",
     "$\\text{O}_2$ and $\\text{B}_2$",
     "$\\text{N}_2$ and $\\text{CO}$",
     "$\\text{O}_2^{2-}$ and $\\text{F}_2$",
     0, "Bond Order 2.5 Paramagnetic Pair",
     "Both $\\text{O}_2^+$ (15 electrons) and $\\text{NO}$ (15 electrons) have a bond order of $2.5$ and possess 1 unpaired electron in an antibonding orbital, making both paramagnetic."),

    # 18 (Q468)
    ("Which of the following species has a bond order of 1.5 and is PARAMAGNETIC?",
     "$\\text{O}_2^-$ and $\\text{N}_2^{2-}$ (with 16 electrons) or $\\text{F}_2^+$",
     "$\\text{O}_2$",
     "$\\text{N}_2$",
     "$\\text{C}_2$",
     0, "Bond Order 1.5 Paramagnetic Species",
     "$\\text{O}_2^-$ (17 electrons) has bond order $1.5$ with 1 unpaired electron in $\\pi^*_{2p}$, and is paramagnetic."),

    # 19 (Q469)
    ("The bond order of the hypothetical molecule $\\text{OF}$ (17 electrons) is:",
     "1.5",
     "2.0",
     "1.0",
     "2.5",
     0, "OF Radical Bond Order",
     "$\\text{OF}$ has $8 + 9 = 17$ electrons (isoelectronic with superoxide $\\text{O}_2^-$): $N_b = 10, N_a = 7$. $\\text{Bond Order} = (10 - 7)/2 = 1.5$."),

    # 20 (Q470)
    ("The bond order of the hypochlorite ion ($\\text{OCl}^-$, 26 electrons, valence 14 electrons) is:",
     "1.0",
     "1.5",
     "2.0",
     "0.5",
     0, "OCl- Bond Order",
     "$\\text{OCl}^-$ has 14 valence electrons (isoelectronic with $\\text{F}_2$): $N_b = 8, N_a = 6$. $\\text{Bond Order} = (8 - 6)/2 = 1.0$."),

    # 21 (Q471)
    ("Which of the following molecules has a bond order of 3.0 and is DIAMAGNETIC?",
     "$\\text{CO}$",
     "$\\text{NO}$",
     "$\\text{O}_2$",
     "$\\text{B}_2$",
     0, "CO Bond Order 3.0 Diamagnetic",
     "$\\text{CO}$ has 14 electrons: all electrons are paired up, giving a triple bond with bond order 3.0 and diamagnetism."),

    # 22 (Q472)
    ("The number of antibonding electrons ($N_a$) in the $\\text{O}_2$ molecule is:",
     "6",
     "4",
     "2",
     "8",
     0, "O2 Antibonding Electrons Count",
     "In $\\text{O}_2$ (16 electrons): $\\sigma^*_{1s}$ has 2, $\\sigma^*_{2s}$ has 2, and $\\pi^*_{2p}$ has 2. Total antibonding electrons $N_a = 2 + 2 + 2 = 6$."),

    # 23 (Q473)
    ("The number of bonding electrons ($N_b$) in the $\\text{O}_2$ molecule is:",
     "10",
     "8",
     "6",
     "12",
     0, "O2 Bonding Electrons Count",
     "In $\\text{O}_2$: $\\sigma_{1s}$ has 2, $\\sigma_{2s}$ has 2, $\\sigma_{2p_z}$ has 2, and $\\pi_{2p_x}, \\pi_{2p_y}$ have 4. Total bonding electrons $N_b = 2 + 2 + 2 + 4 = 10$."),

    # 24 (Q474)
    ("The number of antibonding electrons in the $\\text{N}_2$ molecule is:",
     "4",
     "2",
     "6",
     "0",
     0, "N2 Antibonding Electrons Count",
     "In $\\text{N}_2$ (14 electrons): $\\sigma^*_{1s}$ has 2, $\\sigma^*_{2s}$ has 2. Total antibonding electrons $N_a = 2 + 2 = 4$."),

    # 25 (Q475)
    ("The number of bonding electrons in the $\\text{N}_2$ molecule is:",
     "10",
     "8",
     "6",
     "14",
     0, "N2 Bonding Electrons Count",
     "In $\\text{N}_2$: $\\sigma_{1s}$ has 2, $\\sigma_{2s}$ has 2, $\\pi_{2p}$ has 4, and $\\sigma_{2p_z}$ has 2. Total bonding electrons $N_b = 2 + 2 + 4 + 2 = 10$."),

    # 26 (Q476)
    ("When ice melts into liquid water at $0^\\circ\\text{C}$, the density increases because:",
     "Some hydrogen bonds break and the open hexagonal cage collapses, allowing water molecules to pack more closely together",
     "Water molecules expand",
     "Hydrogen atoms are ionized",
     "Evaporation begins immediately",
     0, "Ice Melting Density Increase",
     "In ice, rigid tetrahedral hydrogen bonding holds molecules apart in an open cage. Upon melting, about $15\\%$ of the hydrogen bonds rupture, causing the cage to collapse into a denser liquid structure where molecules pack closer."),

    # 27 (Q477)
    ("Between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$, water contracts on heating (negative thermal expansion coefficient) because:",
     "The progressive collapse of open hydrogen-bonded cages exceeds normal thermal expansion",
     "Hydrogen bonds become stronger with heating",
     "Water molecules decompose",
     "Dissolved air is released",
     0, "Water Anomalous Expansion 0 to 4C",
     "Between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$, heating breaks more cage-like hydrogen bonds, packing molecules more densely. This structural compaction dominates over normal thermal kinetic expansion until $4^\\circ\\text{C}$."),

    # 28 (Q478)
    ("Aquatic life survives in frozen lakes during harsh winters because:",
     "Water at the bottom of the lake remains at $4^\\circ\\text{C}$ (maximum density), while less dense ice forms an insulating layer on the surface",
     "Ice sinks to the bottom",
     "Fish generate heat by swimming",
     "Salts prevent water from freezing entirely",
     0, "Aquatic Life Survival Lake Ice",
     "Because water is densest at $4^\\circ\\text{C}$, $4^\\circ\\text{C}$ water sinks to the lake bottom. Freezing occurs at the surface ($0^\\circ\\text{C}$), and the floating ice layer insulates the water below, keeping the bottom liquid at $4^\\circ\\text{C}$ throughout winter."),

    # 29 (Q479)
    ("The boiling point of water ($100^\\circ\\text{C}$) is much higher than that of hydrogen sulfide ($\\text{H}_2\\text{S}$, $-60^\\circ\\text{C}$) despite $\\text{H}_2\\text{S}$ having a higher molecular mass ($34\\text{ g/mol}$ vs $18\\text{ g/mol}$) because:",
     "Water forms strong intermolecular hydrogen bonds while $\\text{H}_2\\text{S}$ does not",
     "Water is an ionic compound",
     "$\\text{H}_2\\text{S}$ has a linear shape",
     "Sulphur has higher electronegativity than oxygen",
     0, "Water vs H2S Boiling Point",
     "Oxygen is highly electronegative ($3.5$) and small, forming strong intermolecular hydrogen bonds in water. Sulphur has lower electronegativity ($2.5$) and a large diffuse electron cloud, failing to form hydrogen bonds, so $\\text{H}_2\\text{S}$ is held only by weak dispersion forces and boils at $-60^\\circ\\text{C}$."),

    # 30 (Q480)
    ("Why is Ammonia ($\\text{NH}_3$) easily liquefied compared to Phosphine ($\\text{PH}_3$)?",
     "Ammonia molecules are associated by intermolecular hydrogen bonding",
     "Phosphine has a higher boiling point",
     "Phosphine has no lone pair",
     "Ammonia is non-polar",
     0, "NH3 vs PH3 Liquefaction",
     "Ammonia has strong intermolecular hydrogen bonding, holding molecules together with significant attractive forces and enabling easy liquefaction ($T_c = 132.4^\\circ\\text{C}$), whereas $\\text{PH}_3$ lacks hydrogen bonding and is difficult to liquefy."),

    # 31 (Q481)
    ("Which of the following compounds has the HIGHEST heat of vaporization?",
     "Water ($\\text{H}_2\\text{O}$, $40.7\\text{ kJ/mol}$)",
     "Ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$, $38.6\\text{ kJ/mol}$)",
     "Diethyl ether ($\\text{C}_4\\text{H}_{10}\\text{O}$, $26.5\\text{ kJ/mol}$)",
     "Methane ($\\text{CH}_4$, $8.2\\text{ kJ/mol}$)",
     0, "Highest Heat of Vaporization Water",
     "Water has an extensive 3D network of hydrogen bonds requiring the highest energy to vaporize ($40.7\\text{ kJ/mol}$), higher than ethanol, ether, and non-polar hydrocarbons."),

    # 32 (Q482)
    ("Which of the following pairs of compounds can form INTERMOLECULAR hydrogen bonds with EACH OTHER?",
     "Water and Acetone ($\\text{H}_2\\text{O}$ and $\\text{CH}_3\\text{COCH}_3$)",
     "Benzene and Hexane",
     "Carbon tetrachloride and Methane",
     "Helium and Neon",
     0, "Water and Acetone H-bonding",
     "Water has $-\\text{OH}$ groups (hydrogen bond donor) and acetone has a carbonyl oxygen ($>\\text{C}=\\text{O}$) with lone pairs (hydrogen bond acceptor). They form strong intermolecular hydrogen bonds, making acetone completely miscible in water."),

    # 33 (Q483)
    ("Why is Ethyl alcohol completely miscible with water in all proportions?",
     "Ethanol forms strong intermolecular hydrogen bonds with water molecules",
     "Ethanol has low molecular weight",
     "Ethanol is an ionic salt",
     "Water oxidizes ethanol",
     0, "Ethanol Miscibility in Water",
     "The hydroxyl ($-\\text{OH}$) group of ethanol readily forms intermolecular hydrogen bonds with polar water molecules, overcoming hydrophobic alkyl chain interactions and resulting in infinite miscibility."),

    # 34 (Q484)
    ("Why is Diethyl ether only slightly soluble in water ($6.9\\text{ g/100 mL}$)?",
     "Ether has two bulky ethyl groups that sterically hinder the ether oxygen from accepting hydrogen bonds from water",
     "Ether forms ionic bonds with water",
     "Ether has a higher boiling point than water",
     "Ether is completely non-polar",
     0, "Ether Low Solubility Water",
     "Although the ether oxygen can accept hydrogen bonds, the two bulky hydrophobic ethyl groups shield the oxygen and make the overall molecule predominantly hydrophobic, limiting its solubility in water."),

    # 35 (Q485)
    ("Which of the following molecules has a bond order of 1.0 and is DIAMAGNETIC?",
     "$\\text{F}_2$",
     "$\\text{B}_2$",
     "$\\text{O}_2$",
     "$\\text{NO}$",
     0, "F2 Bond Order 1.0 Diamagnetic",
     "$\\text{F}_2$ (18 electrons) has $N_b = 10, N_a = 8 \\Rightarrow \\text{BO} = (10 - 8)/2 = 1.0$. All electrons are paired, making $\\text{F}_2$ diamagnetic."),

    # 36 (Q486)
    ("The bond order of the $\\text{H}_2^-$ ion (3 electrons) is:",
     "0.5 (paramagnetic)",
     "1.0 (diamagnetic)",
     "0 (unstable)",
     "1.5 (paramagnetic)",
     0, "H2- Bond Order",
     "$\\text{H}_2^-$ has 3 electrons: $\\sigma_{1s}^2 \\sigma_{1s}^{*1}$. $N_b = 2, N_a = 1 \\Rightarrow \\text{BO} = (2 - 1)/2 = 0.5$. It has 1 unpaired electron and is paramagnetic."),

    # 37 (Q487)
    ("Comparing the stabilities of $\\text{H}_2^+$ and $\\text{H}_2^-$, both of which have a bond order of $0.5$:",
     "$\\text{H}_2^+$ is more stable than $\\text{H}_2^-$, because $\\text{H}_2^-$ has an electron in the antibonding $\\sigma^*_{1s}$ orbital",
     "$\\text{H}_2^-$ is more stable",
     "Both have identical stability",
     "Neither can be observed in mass spectrometry",
     0, "H2+ vs H2- Stability",
     "$\\text{H}_2^+$ has configuration $\\sigma_{1s}^1$ (no antibonding electrons). $\\text{H}_2^-$ has configuration $\\sigma_{1s}^2 \\sigma_{1s}^{*1}$ with one destabilizing antibonding electron. Hence $\\text{H}_2^+$ is more stable than $\\text{H}_2^-$."),

    # 38 (Q488)
    ("The total number of antibonding electrons in the superoxide ion ($\\text{O}_2^-$) is:",
     "7",
     "6",
     "8",
     "5",
     0, "Superoxide Antibonding Electrons Count",
     "In $\\text{O}_2^-$ (17 electrons): $\\sigma^*_{1s}$ (2), $\\sigma^*_{2s}$ (2), and $\\pi^*_{2p}$ (3). Total antibonding electrons $N_a = 2 + 2 + 3 = 7$."),

    # 39 (Q489)
    ("The total number of antibonding electrons in the peroxide ion ($\\text{O}_2^{2-}$) is:",
     "8",
     "6",
     "7",
     "10",
     0, "Peroxide Antibonding Electrons Count",
     "In $\\text{O}_2^{2-}$ (18 electrons): $\\sigma^*_{1s}$ (2), $\\sigma^*_{2s}$ (2), and $\\pi^*_{2p}$ (4). Total antibonding electrons $N_a = 2 + 2 + 4 = 8$."),

    # 40 (Q490)
    ("The total number of antibonding electrons in the $\\text{O}_2^+$ ion is:",
     "5",
     "6",
     "4",
     "7",
     0, "O2+ Antibonding Electrons Count",
     "In $\\text{O}_2^+$ (15 electrons): $\\sigma^*_{1s}$ (2), $\\sigma^*_{2s}$ (2), and $\\pi^*_{2p}$ (1). Total antibonding electrons $N_a = 2 + 2 + 1 = 5$."),

    # 41 (Q491)
    ("The total number of antibonding electrons in the $\\text{O}_2^{2+}$ ion is:",
     "4",
     "6",
     "5",
     "2",
     0, "O2 2+ Antibonding Electrons Count",
     "In $\\text{O}_2^{2+}$ (14 electrons, isoelectronic with $\\text{N}_2$): $\\sigma^*_{1s}$ (2) and $\\sigma^*_{2s}$ (2). The $\\pi^*_{2p}$ subshell is completely empty. Total antibonding electrons $N_a = 4$."),

    # 42 (Q492)
    ("The bond order of the $\\text{O}_2^{2+}$ ion (14 electrons) is:",
     "3.0 (diamagnetic)",
     "2.5 (paramagnetic)",
     "2.0 (diamagnetic)",
     "3.5 (paramagnetic)",
     0, "O2 2+ Bond Order 3.0",
     "$\\text{O}_2^{2+}$ has 14 electrons: $N_b = 10, N_a = 4 \\Rightarrow \\text{BO} = (10 - 4)/2 = 3.0$. It is diamagnetic with the shortest bond length ($104\\text{ pm}$) among oxygen species."),

    # 43 (Q493)
    ("Which of the following oxygen species has the SHORTEST bond length?",
     "$\\text{O}_2^{2+}$ ($104\\text{ pm}$)",
     "$\\text{O}_2^+$ ($112\\text{ pm}$)",
     "$\\text{O}_2$ ($121\\text{ pm}$)",
     "$\\text{O}_2^-$ ($128\\text{ pm}$)",
     0, "Shortest Oxygen Bond Length O2 2+",
     "$\\text{O}_2^{2+}$ has a triple bond (bond order 3.0), giving it the shortest $\\text{O}-\\text{O}$ bond length ($104\\text{ pm}$)."),

    # 44 (Q494)
    ("Which of the following compounds has the LOWEST boiling point?",
     "$\\text{H}_2\\text{S}$ ($-60.3^\\circ\\text{C}$)",
     "$\\text{H}_2\\text{O}$ ($100^\\circ\\text{C}$)",
     "$\\text{H}_2\\text{Se}$ ($-41.2^\\circ\\text{C}$)",
     "$\\text{H}_2\\text{Te}$ ($-2.2^\\circ\\text{C}$)",
     0, "Group 16 Lowest Boiling Point H2S",
     "In Group 16, water has high boiling point due to hydrogen bonding. For the others, boiling point increases with molecular mass: $\\text{H}_2\\text{S} < \\text{H}_2\\text{Se} < \\text{H}_2\\text{Te}$. Hence $\\text{H}_2\\text{S}$ has the lowest boiling point in the group."),

    # 45 (Q495)
    ("Which of the following compounds has the LOWEST boiling point?",
     "$\\text{PH}_3$ ($-87.7^\\circ\\text{C}$)",
     "$\\text{NH}_3$ ($-33.3^\\circ\\text{C}$)",
     "$\\text{AsH}_3$ ($-62.5^\\circ\\text{C}$)",
     "$\\text{SbH}_3$ ($-17^\\circ\\text{C}$)",
     0, "Group 15 Lowest Boiling Point PH3",
     "In Group 15, $\\text{NH}_3$ has a high boiling point due to hydrogen bonding. For the remaining hydrides, boiling point increases with molecular mass: $\\text{PH}_3 < \\text{AsH}_3 < \\text{SbH}_3 < \\text{BiH}_3$. Hence $\\text{PH}_3$ has the lowest boiling point."),

    # 46 (Q496)
    ("Which of the following compounds has the LOWEST boiling point?",
     "$\\text{HCl}$ ($-85^\\circ\\text{C}$)",
     "$\\text{HF}$ ($20^\\circ\\text{C}$)",
     "$\\text{HBr}$ ($-66^\\circ\\text{C}$)",
     "$\\text{HI}$ ($-35^\\circ\\text{C}$)",
     0, "Group 17 Lowest Boiling Point HCl",
     "In Group 17, $\\text{HF}$ has an anomalous high boiling point due to hydrogen bonding. For the rest, boiling point increases with dispersion forces: $\\text{HCl} < \\text{HBr} < \\text{HI}$. Hence $\\text{HCl}$ has the lowest boiling point."),

    # 47 (Q497)
    ("What type of intermolecular force is primarily responsible for holding dry ice (solid $\\text{CO}_2$) together in its crystal lattice?",
     "London dispersion forces",
     "Hydrogen bonding",
     "Dipole-dipole attractions",
     "Ionic bonds",
     0, "Dry Ice London Dispersion Forces",
     "$\\text{CO}_2$ is a linear non-polar molecule with zero dipole moment ($\\mu = 0$). In solid dry ice, molecules are held in the crystal lattice purely by London dispersion forces, subliming directly into gas at $-78.5^\\circ\\text{C}$."),

    # 48 (Q498)
    ("What type of intermolecular force holds iodine molecules ($\\text{I}_2$) together in solid iodine crystals?",
     "London dispersion forces",
     "Dipole-dipole forces",
     "Hydrogen bonds",
     "Metallic bonds",
     0, "Solid Iodine Dispersion Forces",
     "$\\text{I}_2$ is a non-polar homonuclear diatomic molecule. Strong London dispersion forces (arising from its 106 electrons and large polarizable electron cloud) hold the molecules in a dark purple crystalline lattice."),

    # 49 (Q499)
    ("In liquid water at room temperature ($25^\\circ\\text{C}$), approximately what percentage of hydrogen bonds present in ice are intact?",
     "$\\approx 80\\%\\text{ to } 85\\%$",
     "$10\\%$",
     "$0\\%$",
     "$50\\%$",
     0, "Intact H-bonds in Liquid Water",
     "Upon melting, only about $15\\%$ of the hydrogen bonds in ice break. In liquid water at $25^\\circ\\text{C}$, approximately $80-85\\%$ of hydrogen bonds remain intact in dynamically flickering clusters."),

    # 50 (Q500)
    ("Which of the following physical states of water has the HIGHEST entropy?",
     "Steam at $100^\\circ\\text{C}$",
     "Liquid water at $100^\\circ\\text{C}$",
     "Liquid water at $0^\\circ\\text{C}$",
     "Ice at $0^\\circ\\text{C}$",
     0, "Highest Entropy State Steam",
     "In steam, all hydrogen bonds are broken and water molecules move completely randomly as a gas with maximum degrees of translational and rotational freedom, having the highest entropy ($\Delta S_{\\text{vap}} \\approx +109\\text{ J}/(\\text{mol}\\cdot\\text{K})$).")
]

print(f"Loaded {len(easy_items)} Easy items.")
print(f"Loaded {len(med_items)} Medium items.")
print(f"Loaded {len(hard_items)} Hard items.")

assert len(easy_items) == 20
assert len(med_items) == 55
assert len(hard_items) == 50

for idx, item in enumerate(easy_items):
    q_num = 376 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Easy", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(med_items):
    q_num = 396 + idx
    q_id = f"bond-mcq-{q_num:03d}"
    is_pyq = item[8] if len(item) > 8 else False
    pyq_source = item[9] if len(item) > 9 else None
    add(q_id, q_num, item[0], item[1], item[2], item[3], item[4], item[5], "Medium", item[6], item[7], is_pyq, pyq_source)

for idx, item in enumerate(hard_items):
    q_num = 451 + idx
    q_id = f"bond-mcq-{q_num:03d}"
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

out_file = "src/data/chapterwise/chemistry/chemicalBondingPart4.ts"
header = """// Auto-generated verified NEET UG Question Bank
// Chapter: Chemical Bonding and Molecular Structure | Chemistry | Class: 11 | Part 4
// Target: Exactly 125 MCQs (20 Easy, 55 Medium, 50 Hard) with comprehensive step-by-step solutions

import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";

export const CHEMICAL_BONDING_PART4_MCQS: ChapterwiseMCQ[] = """

with open(out_file, "w") as f:
    f.write(header + json.dumps(questions, indent=2) + ";\n")

print(f"Successfully wrote {out_file} with {len(questions)} MCQs!")
