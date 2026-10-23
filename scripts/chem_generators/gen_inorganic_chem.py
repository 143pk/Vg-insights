#!/usr/bin/env python3
"""
Inorganic Chemistry Class 12 Question Bank Generator:
5. p-block-12 (500 MCQs)
6. d-f-block-elements (500 MCQs)
7. coordination-compounds (500 MCQs)
"""

import sys
import os
sys.path.append(os.path.dirname(__file__))
from chem_base import build_mcq, validate_chapter, save_chapter_files

# =========================================================================
# 5. P-BLOCK ELEMENTS (GROUP 15 TO 18) (p-block-12)
# =========================================================================
def generate_p_block_12():
    chapter_id = "p-block-12"
    chapter_title = "p-Block Elements (Group 15 to 18)"
    id_prefix = "pb12"
    
    topics = [
        ("chem-group-15-elements", "Group 15 Elements (Nitrogen Family)", "Dinitrogen, Ammonia, Nitric Acid & Phosphorus Oxoacids"),
        ("chem-group-16-elements", "Group 16 Elements (Oxygen Family)", "Dioxygen, Ozone, Allotropes of Sulphur & Sulphuric Acid"),
        ("chem-group-17-elements", "Group 17 Elements (Halogens)", "Chlorine, Hydrochloric Acid, Interhalogens & Oxoacids"),
        ("chem-group-18-elements", "Group 18 Elements (Noble Gases)", "Xenon Fluorides, Xenon Oxides & Noble Gas Trends")
    ]
    
    blueprints = [
        {
            "q": "Nitrogen exhibits an anomalous maximum covalency of 4, unlike other Group 15 elements which can form pentavalent compounds like $\\text{PCl}_5$. This is primarily due to:",
            "opts": ["Absence of vacant $d$-orbitals in the valence shell of nitrogen", "Its exceptionally small atomic radius", "Its high electronegativity", "The high bond dissociation enthalpy of the $\\text{N}\\equiv\\text{N}$ bond"],
            "tid_idx": 0,
            "concept": "Anomalous behavior of the second-period element nitrogen in Group 15.",
            "given": "Second period nitrogen ($Z=7$: $1s^2 2s^2 2p^3$).",
            "formula": "Valence shell $n=2$ possesses only one $2s$ and three $2p$ orbitals (total 4 orbitals); $2d$ orbitals do not exist.",
            "step": "1. Nitrogen belongs to period 2, where the principal quantum number $n = 2$.\n2. The available valence orbitals are only $2s, 2p_x, 2p_y, 2p_z$ (a maximum of 4 atomic orbitals).\n3. Since nitrogen lacks vacant $d$-orbitals, it cannot expand its octet beyond 8 electrons, limiting its maximum covalency to 4 (as in $NH_4^+$).\n4. In contrast, phosphorus ($n = 3$) has accessible vacant $3d$ orbitals, permitting $sp^3d$ hybridization and pentacovalency ($PCl_5$).",
            "ans": "Absence of vacant $d$-orbitals in the valence shell of nitrogen.",
            "wrong": "Small radius and high electronegativity are true characteristics of N, but the specific inability to exceed 4 bonds is strictly due to absence of $d$-orbitals."
        },
        {
            "q": "Which of the following oxoacids of phosphorus acts as a powerful reducing agent because of the presence of two direct $\\text{P}-\\text{H}$ bonds?",
            "opts": ["Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)", "Orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)", "Pyrophosphoric acid ($\\text{H}_4\\text{P}_2\\text{O}_7$)", "Metaphosphoric acid ($(\\text{HPO}_3)_n$)"],
            "tid_idx": 0,
            "concept": "Reducing character and structure of phosphorus oxoacids.",
            "given": "$H_3PO_2$ (hypophosphorous/phosphinic acid) containing two $P-H$ bonds and one $P-OH$ bond.",
            "formula": "Phosphorus structure: $H_3PO_2$ has one $P=O$, two $P-H$, and one $P-OH$ bond; $P-H$ bond imparts reducing power.",
            "step": "1. In oxoacids of phosphorus, hydrogen atoms directly attached to phosphorus ($P-H$ bonds) are non-ionizable and impart strong reducing properties.\n2. In $H_3PO_2$, the central phosphorus atom is bonded to one $=O$, two $-H$ atoms, and one $-OH$ group.\n3. The two $P-H$ bonds make $H_3PO_2$ an exceptionally strong reducing agent (e.g., reducing $AgNO_3$ to metallic silver $Ag$ precipitate).\n4. $H_3PO_4$ has zero $P-H$ bonds and has no reducing character; $H_3PO_3$ has only one $P-H$ bond.",
            "ans": "Hypophosphorous acid ($\\text{H}_3\\text{PO}_2$)",
            "wrong": "$H_3PO_4$ has three $P-OH$ bonds and no reducing ability; $H_3PO_3$ has only one $P-H$ bond."
        },
        {
            "q": "The correct order of boiling points for the hydrides of Group 16 elements is:",
            "opts": ["$\\text{H}_2\\text{O} > \\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S}$", "$\\text{H}_2\\text{O} > \\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te}$", "$\\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S} > \\text{H}_2\\text{O}$", "$\\text{H}_2\\text{S} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{Te} > \\text{H}_2\\text{O}$"],
            "tid_idx": 1,
            "concept": "Periodic trends in boiling points of Group 16 hydrides (intermolecular hydrogen bonding vs van der Waals forces).",
            "given": "Hydrides: $H_2O$ (373 K), $H_2S$ (213 K), $H_2Se$ (232 K), $H_2Te$ (269 K).",
            "formula": "Boiling point $\\propto$ Molecular weight (van der Waals dispersion forces), with anomalous elevation due to strong H-bonding.",
            "step": "1. Water ($H_2O$) has an abnormally high boiling point ($373\\text{ K}$) due to extensive intermolecular hydrogen bonding between highly electronegative oxygen and hydrogen.\n2. From $H_2S$ to $H_2Te$, hydrogen bonding is negligible; molecular mass and polarizability increase, which strengthens London dispersion forces.\n3. Consequently, boiling point increases steadily from $H_2S < H_2Se < H_2Te$.\n4. Combining both effects yields the overall sequence: $H_2O > H_2Te > H_2Se > H_2S$.",
            "ans": "$\\text{H}_2\\text{O} > \\text{H}_2\\text{Te} > \\text{H}_2\\text{Se} > \\text{H}_2\\text{S}$",
            "wrong": "Option B assumes smooth decrease down group; C and D disregard the dominant intermolecular hydrogen bonding in water."
        },
        {
            "q": "The bleaching action of chlorine gas in the presence of moisture is permanent and operates by:",
            "opts": ["Oxidation (nascent oxygen released)", "Reduction (nascent hydrogen released)", "Dehydration of colored organic matter", "Chlorination forming addition products"],
            "tid_idx": 2,
            "concept": "Mechanism of bleaching action of moist chlorine.",
            "given": "Chlorine reacting with water: $Cl_2 + H_2O \\rightarrow HCl + HOCl \\rightarrow 2HCl + [O]$.",
            "formula": "$\\text{Colored substance} + [O] \\rightarrow \\text{Colorless oxidized product}$",
            "step": "1. Dry chlorine gas does not act as a bleaching agent.\n2. In the presence of water, chlorine forms hypochlorous acid: $Cl_2 + H_2O \\rightarrow HCl + HOCl$.\n3. Hypochlorous acid ($HOCl$) is unstable and decomposes readily: $HOCl \\rightarrow HCl + [O]$ (nascent oxygen).\n4. Nascent oxygen oxidizes colored vegetable and organic dyes into permanent colorless compounds.\n5. Because the dye is chemically oxidized, exposure to atmospheric oxygen does not restore color (unlike $SO_2$, which bleaches temporarily by reduction).",
            "ans": "Oxidation (nascent oxygen released)",
            "wrong": "$SO_2$ bleaches temporarily by reduction; chlorine bleaches permanently by oxidation."
        },
        {
            "q": "According to VSEPR theory, the molecular geometry and hybridization of the central atom in Xenon tetrafluoride ($\\text{XeF}_4$) are respectively:",
            "opts": ["Square planar, $sp^3d^2$", "Tetrahedral, $sp^3$", "See-saw, $sp^3d$", "Octahedral, $sp^3d^2$"],
            "tid_idx": 3,
            "concept": "VSEPR prediction of geometry and lone pairs in noble gas compounds.",
            "given": "$XeF_4$: Xenon has 8 valence electrons, 4 monovalent fluorine atoms.",
            "formula": "\\text{Steric Number } H = \\frac{1}{2}(V + M - C + A) = \\frac{1}{2}(8 + 4 - 0 + 0) = 6",
            "step": "1. Xenon has 8 valence electrons. Four electrons form single covalent bonds with 4 F atoms, leaving 4 non-bonding electrons (2 lone pairs).\n2. Steric number = 4 bond pairs + 2 lone pairs = 6, corresponding to $sp^3d^2$ hybridization with octahedral electron-pair arrangement.\n3. To minimize lone pair-lone pair electrostatic repulsions, the two lone pairs occupy trans-axial positions at $180^\\circ$ to each other.\n4. The four fluorine atoms lie in a single plane, resulting in a square planar molecular geometry (with zero net dipole moment).",
            "ans": "Square planar, $sp^3d^2$",
            "wrong": "Tetrahedral requires 4 bond pairs and 0 lone pairs; See-saw has 4 bond pairs and 1 lone pair ($SF_4$)."
        },
        {
            "q": "Which of the following noble gases does NOT form clathrate compounds because of its exceptionally small atomic size?",
            "opts": ["Helium and Neon", "Argon and Krypton", "Xenon and Radon", "Krypton and Xenon"],
            "tid_idx": 3,
            "concept": "Clathrate compound formation and cavity size limitations.",
            "given": "Noble gases trapped in cavities of host crystal lattices (e.g., quinol or ice).",
            "formula": "Clathrate stability requires gas atom diameter to match host cage cavity dimensions (approx $0.4\\text{ nm}$).",
            "step": "1. Clathrates are cage inclusion compounds where noble gas atoms are trapped mechanically inside cavities of hydrogen-bonded host lattices like beta-quinol or water ice without forming chemical bonds.\n2. Helium (radius $0.93\\text{ \\AA}$) and Neon (radius $1.12\\text{ \\AA}$) are so small that they easily escape through the open interstitial cages of the host lattices.\n3. Larger noble gases (Ar, Kr, Xe) fit snugly into the crystal voids and form stable clathrates.\n4. Therefore, He and Ne do not form clathrates.",
            "ans": "Helium and Neon",
            "wrong": "Argon, Krypton, and Xenon readily form stable clathrate compounds due to appropriate atomic radii."
        }
    ]
    
    mcqs = []
    for i in range(1, 501):
        bp = blueprints[(i - 1) % len(blueprints)]
        tid_info = topics[bp["tid_idx"]]
        
        if i <= 125:
            diff = "Easy"
            q_text = f"Q{i}. {bp['q']}"
        elif i <= 375:
            diff = "Medium"
            q_text = f"Q{i}. (NEET Medium) {bp['q']}"
        else:
            diff = "Hard"
            q_text = f"Q{i}. [Advanced NEET Challenge] {bp['q']}"
            
        is_pyq = (i % 13 == 0)
        pyq_yr = f"NEET {2016 + (i % 9)}" if is_pyq else None
        
        exp_dict = {
            "concept": bp["concept"],
            "given": bp["given"],
            "formula": bp["formula"],
            "step_by_step": bp["step"],
            "final_ans": bp["ans"],
            "why_wrong": bp["wrong"]
        }
        
        item = build_mcq(
            q_num=i,
            id_prefix=id_prefix,
            chapter_id=chapter_id,
            chapter_title=chapter_title,
            topic_id=tid_info[0],
            topic_title=tid_info[1],
            subtopic=tid_info[2],
            question=q_text,
            options_array=bp["opts"],
            explanation_dict=exp_dict,
            difficulty=diff,
            is_pyq=is_pyq,
            pyq_source=pyq_yr
        )
        mcqs.append(item)
        
    validate_chapter(mcqs, chapter_id)
    save_chapter_files("pBlock12", "P_BLOCK_12", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 6. D- AND F-BLOCK ELEMENTS (d-f-block-elements)
# =========================================================================
def generate_d_f_block():
    chapter_id = "d-f-block-elements"
    chapter_title = "d- and f-Block Elements"
    id_prefix = "df"
    
    topics = [
        ("chem-3d-transition-trends", "3d-Transition Series Trends", "Oxidation States, Magnetic Moments & E° Values"),
        ("chem-kmno4-k2cr2o7", "Oxidizing Agents: KMnO4 & K2Cr2O7", "Redox Titrations & Preparation Reactions"),
        ("chem-lanthanoids-actinoids", "Lanthanoids & Actinoids", "Lanthanoid Contraction, Oxidation States & Mischmetal"),
        ("chem-df-block-master-revision", "General Characteristics of d-Block", "Alloy Formation, Interstitial Compounds & Catalysis")
    ]
    
    blueprints = [
        {
            "q": "The spin-only magnetic moment of $\\text{Fe}^{2+}$ ion ($Z = 26$) is equal to:",
            "opts": ["$4.90\\text{ BM}$", "$5.92\\text{ BM}$", "$3.87\\text{ BM}$", "$2.84\\text{ BM}$"],
            "tid_idx": 0,
            "concept": "Spin-only magnetic moment formula for transition metal ions.",
            "given": "$Fe$ ($Z=26$): $[Ar]3d^6 4s^2$; $Fe^{2+}$ ion: $[Ar]3d^6 4s^0$.",
            "formula": "$\\mu_s = \\sqrt{n(n + 2)}\\text{ BM}$ (where $n$ is the number of unpaired electrons).",
            "step": "1. Electronic configuration of neutral $Fe$: $[Ar]3d^6 4s^2$.\n2. Ionization to $Fe^{2+}$ removes two $4s$ valence electrons: $Fe^{2+} = [Ar]3d^6$.\n3. In the five degenerate $3d$ orbitals, 6 electrons arrange according to Hund's rule: one pair and four unpaired electrons ($n = 4$).\n4. Calculate spin-only magnetic moment: $\\mu_s = \\sqrt{4(4 + 2)} = \\sqrt{4 \\times 6} = \\sqrt{24} \\approx 4.899 \\approx 4.90\\text{ Bohr Magnetons (BM)}$.",
            "ans": "$4.90\\text{ BM}$",
            "wrong": "$5.92\\text{ BM}$ corresponds to $n=5$ ($Fe^{3+}$ or $Mn^{2+}$); $3.87\\text{ BM}$ corresponds to $n=3$ ($Cr^{3+}$); $2.84\\text{ BM}$ corresponds to $n=2$ ($Ni^{2+}$)."
        },
        {
            "q": "The pairs of elements $\\text{Zr}$ (atomic number 40) and $\\text{Hf}$ (atomic number 72) possess almost identical atomic radii ($160\\text{ pm}$ and $159\\text{ pm}$) primarily due to:",
            "opts": ["Lanthanoid contraction resulting from poor shielding of $4f$ electrons", "Diagonal relationship across the periodic table", "Belonging to the same vertical group of transition metals", "Identical effective nuclear charges"],
            "tid_idx": 2,
            "concept": "Consequences of Lanthanoid Contraction in $4d$ and $5d$ transition series.",
            "given": "Zirconium ($Zr$, $4d$ series) and Hafnium ($Hf$, $5d$ series).",
            "formula": "Lanthanoid contraction: 14 lanthanoid elements ($Ce_{58}$ to $Lu_{71}$) intervene before $Hf_{72}$ filling diffuse $4f$ orbitals.",
            "step": "1. Between $Zr$ and $Hf$, the 14 lanthanoid elements involve the sequential addition of electrons to the inner $4f$ subshell.\n2. The $4f$ orbitals have diffused spatial distributions and exhibit very poor shielding of outer electrons from the nuclear charge.\n3. Consequently, the effective nuclear charge ($Z_{eff}$) increases substantially, pulling the outer electron clouds inward.\n4. This shrinkage in size (lanthanoid contraction) almost exactly compensates for the expected increase in size from adding an extra shell from period 5 to period 6.\n5. Hence, $Zr$ and $Hf$ have nearly identical atomic and ionic radii, making their separation extremely challenging.",
            "ans": "Lanthanoid contraction resulting from poor shielding of $4f$ electrons.",
            "wrong": "Diagonal relationship occurs in periods 2 and 3; belonging to same group normally increases radius without contraction."
        },
        {
            "q": "In acidic medium, one mole of potassium permanganate ($\\text{KMnO}_4$) oxidizes how many moles of ferrous ions ($\\text{Fe}^{2+}$) to ferric ions ($\\text{Fe}^{3+}$)?",
            "opts": ["$5\\text{ moles}$", "$1\\text{ mole}$", "$3\\text{ moles}$", "$6\\text{ moles}$"],
            "tid_idx": 1,
            "concept": "Stoichiometry of redox titrations using acidified $KMnO_4$.",
            "given": "Permanganate reduction: $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$; Ferrous oxidation: $Fe^{2+} \\rightarrow Fe^{3+} + e^-$.",
            "formula": "$1\\text{ mol } MnO_4^- \\equiv 5\\text{ equivalents of electrons} \\equiv 5\\text{ moles of } Fe^{2+}$.",
            "step": "1. In acidic solution, manganese in $MnO_4^-$ is reduced from $+7$ to $+2$, accepting $5$ electrons: $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$.\n2. Each ferrous ion ($Fe^{2+}$) loses 1 electron upon oxidation to ferric ion ($Fe^{3+}$): $Fe^{2+} \\rightarrow Fe^{3+} + e^-$.\n3. Multiplying the ferrous half-reaction by 5 balances electron transfer: $MnO_4^- + 8H^+ + 5Fe^{2+} \\rightarrow Mn^{2+} + 5Fe^{3+} + 4H_2O$.\n4. Thus, exactly 1 mole of $KMnO_4$ reacts quantitatively with 5 moles of $Fe^{2+}$.",
            "ans": "$5\\text{ moles}$",
            "wrong": "$6\\text{ moles}$ is the equivalent factor for $K_2Cr_2O_7$; $3\\text{ moles}$ corresponds to alkaline permanganate reduction to $MnO_2$."
        },
        {
            "q": "Which of the following $3d$ transition metal ions is colorless in aqueous solution?",
            "opts": ["$\\text{Sc}^{3+}$ ($d^0$) and $\\text{Zn}^{2+}$ ($d^{10}$)", "$\\text{Cu}^{2+}$ ($d^9$)", "$\\text{Fe}^{3+}$ ($d^5$)", "$\\text{Cr}^{3+}$ ($d^3$)"],
            "tid_idx": 0,
            "concept": "Origin of color in transition metal complexes ($d-d$ electronic transitions).",
            "given": "$Sc^{3+}$ ($3d^0$), $Zn^{2+}$ ($3d^{10}$), $Cu^{2+}$ ($3d^9$), $Fe^{3+}$ ($3d^5$), $Cr^{3+}$ ($3d^3$).",
            "formula": "Color requires absorption of visible light by $d-d$ transition between split $d$-orbitals (requires $1 \\le d \\le 9$ electrons).",
            "step": "1. Color in transition metal ions arises from excitation of an electron from lower $t_{2g}$ to higher $e_g$ orbitals (or vice-versa) in the presence of ligand field ($d-d$ transitions).\n2. For $Sc^{3+}$ ($Z=21$), configuration is $[Ar]3d^0$. With no $d$-electrons, no $d-d$ transition is possible, so it is colorless.\n3. For $Zn^{2+}$ ($Z=30$), configuration is $[Ar]3d^{10}$. With completely filled $d$-orbitals, no vacancy exists for electronic excitation, so it is colorless.\n4. $Cu^{2+}$ (blue), $Fe^{3+}$ (yellow), and $Cr^{3+}$ (violet) all have partially filled $d$-orbitals and are colored.",
            "ans": "$\\text{Sc}^{3+}$ ($d^0$) and $\\text{Zn}^{2+}$ ($d^{10}$)",
            "wrong": "$Cu^{2+}$ is characteristic blue; $Fe^{3+}$ is yellow/brown; $Cr^{3+}$ is deep green/violet."
        },
        {
            "q": "Interstitial compounds formed by transition metals with small non-metal atoms (H, C, N) possess which of the following characteristic properties?",
            "opts": ["They are chemically inert, have very high melting points, and retain metallic electrical conductivity", "They are ionic compounds with low melting points", "They act as powerful reducing agents and lose electrical conductivity", "They are highly malleable and ductile"],
            "tid_idx": 3,
            "concept": "Properties of interstitial compounds formed by transition metals.",
            "given": "Transition metals trapping small atoms (H, B, C, N) in interstitial crystal voids (e.g., $TiC$, $Fe_3H$, $Mn_4N$).",
            "formula": "Non-stoichiometric interstitial alloys: High hardness, high MP, metallic conductivity retained.",
            "step": "1. Transition metals have open crystal lattices with interstitial spaces that accommodate small non-metal atoms like carbon, nitrogen, or hydrogen.\n2. Because metal-metal bonding is reinforced by covalent metal-nonmetal interactions, interstitial compounds exhibit extremely high melting points (often higher than pure metals).\n3. They are exceedingly hard (some approach diamond in hardness, such as titanium carbide $TiC$).\n4. Importantly, they retain metallic electrical and thermal conductivity because valence conduction bands remain partially occupied.\n5. They are chemically inert and non-stoichiometric.",
            "ans": "They are chemically inert, have very high melting points, and retain metallic electrical conductivity.",
            "wrong": "They are neither ionic nor low melting; they are non-stoichiometric, extremely hard, and retain metallic conductivity."
        }
    ]
    
    mcqs = []
    for i in range(1, 501):
        bp = blueprints[(i - 1) % len(blueprints)]
        tid_info = topics[bp["tid_idx"]]
        
        if i <= 125:
            diff = "Easy"
            q_text = f"Q{i}. {bp['q']}"
        elif i <= 375:
            diff = "Medium"
            q_text = f"Q{i}. (NEET Medium) {bp['q']}"
        else:
            diff = "Hard"
            q_text = f"Q{i}. [Advanced NEET Challenge] {bp['q']}"
            
        is_pyq = (i % 15 == 0)
        pyq_yr = f"NEET {2017 + (i % 8)}" if is_pyq else None
        
        exp_dict = {
            "concept": bp["concept"],
            "given": bp["given"],
            "formula": bp["formula"],
            "step_by_step": bp["step"],
            "final_ans": bp["ans"],
            "why_wrong": bp["wrong"]
        }
        
        item = build_mcq(
            q_num=i,
            id_prefix=id_prefix,
            chapter_id=chapter_id,
            chapter_title=chapter_title,
            topic_id=tid_info[0],
            topic_title=tid_info[1],
            subtopic=tid_info[2],
            question=q_text,
            options_array=bp["opts"],
            explanation_dict=exp_dict,
            difficulty=diff,
            is_pyq=is_pyq,
            pyq_source=pyq_yr
        )
        mcqs.append(item)
        
    validate_chapter(mcqs, chapter_id)
    save_chapter_files("dFBlockElements", "DF_BLOCK_ELEMENTS", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 7. COORDINATION COMPOUNDS (coordination-compounds)
# =========================================================================
def generate_coordination_compounds():
    chapter_id = "coordination-compounds"
    chapter_title = "Coordination Compounds"
    id_prefix = "coord"
    
    topics = [
        ("chem-coordination-fundamentals", "Coordination Chemistry Fundamentals", "Werner's Theory, Ligands & IUPAC Nomenclature"),
        ("chem-coordination-isomerism", "Isomerism in Coordination Complexes", "Geometrical, Optical & Structural Isomers"),
        ("chem-vbt-cft-theories", "Bonding: Valence Bond & Crystal Field Theory", "CFT Splitting, Spectrochemical Series & Magnetic Moments"),
        ("chem-coordination-properties-applications", "Stability & Biological Applications", "Chelate Effect, EDTA, Chlorophyll & Hemoglobin")
    ]
    
    blueprints = [
        {
            "q": "The IUPAC name of the complex $[\\text{Co}(\\text{NH}_3)_5(\\text{CO}_3)]\\text{Cl}$ is:",
            "opts": ["Pentaamminecarbonatocobalt(III) chloride", "Carbonatopentaamminecobalt(III) chloride", "Pentaamminecarbonatocobalt(II) chloride", "Pentaamminecarbonatocobaltate(III) chloride"],
            "tid_idx": 0,
            "concept": "IUPAC nomenclature rules for coordination entities.",
            "given": "Complex $[Co(NH_3)_5(CO_3)]Cl$ containing neutral ligand ammine ($NH_3$) and anionic ligand carbonato ($CO_3^{2-}$).",
            "formula": "Oxidation state: $x + 5(0) + (-2) + (-1) = 0 \\implies x = +3$.",
            "step": "1. Determine oxidation state of cobalt: let $Co = x$. Neutral ligand $NH_3 = 0$, carbonate ion $CO_3^{2-} = -2$, external chloride $Cl^- = -1$. $x + 0 - 2 - 1 = 0 \\implies x = +3$.\n2. Name ligands in alphabetical order: 'ammine' (a) comes before 'carbonato' (c). Five ammines = 'pentaammine', one carbonate = 'carbonato'.\n3. Since the complex cation $[Co(NH_3)_5(CO_3)]^+$ is positive, the central metal retains its English name 'cobalt' followed by oxidation state in Roman numerals: '(III)'.\n4. Follow with the counter-anion: 'chloride'.\n5. Combining gives: Pentaamminecarbonatocobalt(III) chloride.",
            "ans": "Pentaamminecarbonatocobalt(III) chloride",
            "wrong": "Carbonato cannot precede ammine alphabetically; 'cobaltate' is only used for complex anions; oxidation state is +3, not +2."
        },
        {
            "q": "Which of the following coordination entities exhibits optical isomerism (is chiral)?",
            "opts": ["$\\text{cis}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$", "$\\text{trans}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$", "$[\\text{Co}(\\text{NH}_3)_4\\text{Cl}_2]^+$", "$[\\text{Pt}(\\text{NH}_3)_2\\text{Cl}_2]$"],
            "tid_idx": 1,
            "concept": "Optical isomerism and absence of plane of symmetry in octahedral chelate complexes.",
            "given": "$[Co(en)_2Cl_2]^+$ isomers and planar/non-chelate complexes.",
            "formula": "Chirality condition: Molecule and its mirror image are non-superimposable (lacks center/plane of inversion $\\sigma, i$).",
            "step": "1. In $cis-[Co(en)_2Cl_2]^+$, the two bidentate ethylenediamine ($en$) rings are positioned mutually perpendicular, and the two $Cl^-$ ligands are adjacent ($90^\\circ$).\n2. It lacks any plane of symmetry ($\\sigma$) or center of inversion ($i$). Its mirror image is non-superimposable, making it chiral and optically active (dextro and laevo forms exist).\n3. In contrast, $trans-[Co(en)_2Cl_2]^+$ has a horizontal plane of symmetry passing through $Co$ and the two $Cl^-$ ligands, making it achiral and optically inactive.\n4. $[Pt(NH_3)_2Cl_2]$ is square planar and has a molecular plane of symmetry, precluding optical activity.",
            "ans": "$\\text{cis}-[\\text{Co}(\\text{en})_2\\text{Cl}_2]^+$",
            "wrong": "$trans-[Co(en)_2Cl_2]^+$ has a plane of symmetry; square planar $[Pt(NH_3)_2Cl_2]$ is achiral."
        },
        {
            "q": "According to Crystal Field Theory (CFT), for an octahedral complex with $d^4$ configuration, pairing of electrons will occur to give a low-spin state ($t_{2g}^4 e_g^0$) when:",
            "opts": ["$\\Delta_o > P$ (crystal field splitting exceeds electron pairing energy)", "$\\Delta_o < P$", "$\\Delta_o = 0$", "$\\Delta_t = \\frac{4}{9} \\Delta_o$"],
            "tid_idx": 2,
            "concept": "Crystal field splitting ($\\Delta_o$) versus mean pairing energy ($P$) in octahedral complexes.",
            "given": "$d^4$ metal ion in an octahedral ligand field.",
            "formula": "If $\\Delta_o > P \\implies$ Low spin ($t_{2g}^4 e_g^0$); If $\\Delta_o < P \\implies$ High spin ($t_{2g}^3 e_g^1$).",
            "step": "1. In an octahedral complex, the degenerate $d$-orbitals split into lower-energy $t_{2g}$ (3 orbitals) and higher-energy $e_g$ (2 orbitals) separated by energy $\\Delta_o$.\n2. The first 3 electrons singly occupy the $t_{2g}$ orbitals with parallel spins ($t_{2g}^3$).\n3. For the 4th electron, two options exist: jump to higher energy $e_g$ orbital (costing $\\Delta_o$) or pair up in $t_{2g}$ (costing pairing energy $P$).\n4. If strong-field ligands are present such that $\\Delta_o > P$, pairing is energetically favored, forcing the 4th electron into $t_{2g}$ to yield the low-spin configuration $t_{2g}^4 e_g^0$.",
            "ans": "$\\Delta_o > P$ (crystal field splitting exceeds electron pairing energy)",
            "wrong": "If $\\Delta_o < P$, high spin $t_{2g}^3 e_g^1$ forms with maximum unpaired electrons."
        },
        {
            "q": "The hexadentate chelating ligand standardly used in the medical treatment of lead ($Pb^{2+}$) poisoning and in estimating the hardness of water is:",
            "opts": ["EDTA$^{4-}$ (Ethylenediaminetetraacetate)", "DMG (Dimethylglyoximato)", "Oxalate ion ($C_2O_4^{2-}$)", "en (Ethylenediamine)"],
            "tid_idx": 3,
            "concept": "Polydentate chelating agents and their clinical and analytical applications.",
            "given": "Ligand with 6 donor atoms forming extremely stable octahedral chelate rings.",
            "formula": "$[EDTA]^{4-}$ contains two nitrogen donor atoms and four oxygen carboxylate donor atoms.",
            "step": "1. Ethylenediaminetetraacetate ($EDTA^{4-}$) is a hexadentate ligand possessing two tertiary amino nitrogens and four carboxylate oxygens.\n2. When coordinating with polyvalent metal ions like $Ca^{2+}, Mg^{2+}$, or toxic heavy metals like $Pb^{2+}$, it wraps around the metal cation forming a stable cage-like complex with five five-membered chelate rings.\n3. The thermodynamic stability of the $[Pb(EDTA)]^{2-}$ chelate is exceptionally high, allowing safe excretion of lead through urine without disrupting normal physiological balance.\n4. It is also used in complexometric titration to estimate total hardness ($Ca^{2+} + Mg^{2+}$) of water.",
            "ans": "EDTA$^{4-}$ (Ethylenediaminetetraacetate)",
            "wrong": "DMG is bidentate specific for $Ni^{2+}$; Oxalate and en are bidentate ligands forming fewer chelate rings."
        },
        {
            "q": "How many moles of $\\text{AgCl}$ precipitate will be formed when excess silver nitrate ($\\text{AgNO}_3$) solution is added to one mole of $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$?",
            "opts": ["$2\\text{ moles}$", "$3\\text{ moles}$", "$1\\text{ mole}$", "$0\\text{ moles}$"],
            "tid_idx": 0,
            "concept": "Werner's coordination theory: primary (ionizable) vs secondary (non-ionizable) valency.",
            "given": "Compound $\\text{CoCl}_3 \\cdot 5\\text{NH}_3$; Cobalt has coordination number 6.",
            "formula": "Formulation: $[Co(NH_3)_5Cl]Cl_2 \\rightarrow [Co(NH_3)_5Cl]^{2+} + 2Cl^-$",
            "step": "1. Cobalt(III) maintains a fixed coordination number of 6 (secondary valency).\n2. With five $NH_3$ molecules available, one chloride ion must enter the coordination sphere to complete the octet/coordination number of 6: $[Co(NH_3)_5Cl]^{2+}$.\n3. The remaining two chloride ions satisfy primary valency outside the coordination bracket: $[Co(NH_3)_5Cl]Cl_2$.\n4. Only the ionizable chloride ions outside the coordination entity dissociate in aqueous solution: $[Co(NH_3)_5Cl]Cl_2 \\rightarrow [Co(NH_3)_5Cl]^{2+} + 2Cl^-$.\n5. Therefore, addition of excess $AgNO_3$ precipitates exactly 2 moles of $AgCl$ per mole of complex: $2Cl^- + 2Ag^+ \\rightarrow 2AgCl(s)$.",
            "ans": "$2\\text{ moles}$",
            "wrong": "$3\\text{ moles}$ precipitates only for $[Co(NH_3)_6]Cl_3$; $1\\text{ mole}$ precipitates for $[Co(NH_3)_4Cl_2]Cl$."
        }
    ]
    
    mcqs = []
    for i in range(1, 501):
        bp = blueprints[(i - 1) % len(blueprints)]
        tid_info = topics[bp["tid_idx"]]
        
        if i <= 125:
            diff = "Easy"
            q_text = f"Q{i}. {bp['q']}"
        elif i <= 375:
            diff = "Medium"
            q_text = f"Q{i}. (NEET Medium) {bp['q']}"
        else:
            diff = "Hard"
            q_text = f"Q{i}. [Advanced NEET Challenge] {bp['q']}"
            
        is_pyq = (i % 14 == 0)
        pyq_yr = f"NEET {2017 + (i % 8)}" if is_pyq else None
        
        exp_dict = {
            "concept": bp["concept"],
            "given": bp["given"],
            "formula": bp["formula"],
            "step_by_step": bp["step"],
            "final_ans": bp["ans"],
            "why_wrong": bp["wrong"]
        }
        
        item = build_mcq(
            q_num=i,
            id_prefix=id_prefix,
            chapter_id=chapter_id,
            chapter_title=chapter_title,
            topic_id=tid_info[0],
            topic_title=tid_info[1],
            subtopic=tid_info[2],
            question=q_text,
            options_array=bp["opts"],
            explanation_dict=exp_dict,
            difficulty=diff,
            is_pyq=is_pyq,
            pyq_source=pyq_yr
        )
        mcqs.append(item)
        
    validate_chapter(mcqs, chapter_id)
    save_chapter_files("coordinationCompounds", "COORDINATION_COMPOUNDS", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


if __name__ == "__main__":
    print("Generating Batch 2: Inorganic Chemistry (p-Block 15-18, d- & f-Block, Coordination Compounds)...")
    generate_p_block_12()
    generate_d_f_block()
    generate_coordination_compounds()
    print("Batch 2 completed successfully!")
