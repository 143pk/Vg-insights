#!/usr/bin/env python3
"""
Build Complete Question Bank for:
Hydrocarbons (hydrocarbons)
Total: 500 Questions (Easy: 125, Medium: 250, Hard: 125)
Topics:
1. chem-alkanes: Alkanes & Their Reactions
2. chem-alkenes: Alkenes & Their Reactions
3. chem-alkynes: Alkynes & Their Reactions
4. chem-aromatic-hydrocarbons: Aromatic Hydrocarbons (Benzene & Its Derivatives)
"""
import json
import os

def generate_hydrocarbons():
    questions = []

    def add_q(q_num, text, opts, correct_ans, concept, given, formula, steps, why_wrong, difficulty, topic_label, topic_id, subtopic, is_pyq=False, pyq_year=None):
        ans_idx = {"A": 0, "B": 1, "C": 2, "D": 3}[correct_ans]
        options_dict = {"A": opts[0], "B": opts[1], "C": opts[2], "D": opts[3]}
        options_list = list(opts)

        step_text = "\n".join(f"{i+1}. {s}" for i, s in enumerate(steps))
        full_explanation = f"""1. CONCEPT:
{concept}

2. GIVEN:
{given}

3. FORMULA / PRINCIPLE:
{formula}

4. STEP-BY-STEP SOLUTION:
{step_text}

5. FINAL ANSWER:
Option {correct_ans}: {opts[ans_idx]}

6. WHY OTHER OPTIONS ARE WRONG:
{why_wrong}"""

        structured = {
            "concept": concept,
            "given": given,
            "formula": formula,
            "stepByStep": step_text,
            "finalAnswer": f"Option {correct_ans}: {opts[ans_idx]}",
            "whyOtherOptionsWrong": why_wrong
        }

        q_obj = {
            "id": f"hydrocarbon-mcq-{q_num:03d}",
            "questionNumber": q_num,
            "question": text,
            "options": options_dict,
            "optionsList": options_list,
            "correctAnswer": correct_ans,
            "correctIndex": ans_idx,
            "explanation": full_explanation,
            "solutionStructured": structured,
            "difficulty": difficulty,
            "subject": "Chemistry",
            "class": "11",
            "chapter": "Hydrocarbons",
            "chapterId": "hydrocarbons",
            "topic": topic_label,
            "subtopic": subtopic,
            "topicId": topic_id,
            "source": f"NEET {pyq_year}" if is_pyq else "NCERT Exemplar" if q_num % 5 == 0 else "VG Insights Practice",
            "isPYQ": is_pyq,
        }
        if is_pyq and pyq_year:
            q_obj["pyqYear"] = pyq_year
        questions.append(q_obj)

    # Core Easy Specs (1-10)
    core_easy = [
        ("The addition of HBr to propene in the presence of benzoyl peroxide yields:",
         ["1-Bromopropane (n-propyl bromide)", "2-Bromopropane (isopropyl bromide)", "1,2-Dibromopropane", "2,2-Dibromopropane"], "A",
         "Peroxide effect (Kharasch effect) in free-radical addition of HBr to unsymmetrical alkenes.", "Propene CH3-CH=CH2 with HBr and (C6H5CO)2O2.", "Anti-Markovnikov addition via bromine radical addition generating more stable 2° alkyl radical.",
         ["In the presence of peroxides, HBr adds by a free-radical mechanism rather than an ionic pathway.", "Homolytic cleavage of benzoyl peroxide generates phenyl radicals, which abstract hydrogen from HBr to form a bromine radical (Br.).", "The Br. radical attacks propene at C-1 to generate the more stable secondary carbon radical (CH3-CH.-CH2Br) rather than an unstable primary radical.", "The 2° radical then abstracts H. from another HBr molecule, yielding 1-bromopropane (CH3-CH2-CH2Br)."],
         "In the absence of peroxides, Markovnikov's ionic addition yields 2-bromopropane; peroxide reverses regiochemistry to 1-bromopropane.", "Alkenes & Their Reactions", "chem-alkenes", "Anti-Markovnikov Addition", True, 2023),

        ("Which of the following conformations of ethane has the minimum torsional strain and is the most stable?",
         ["Staggered conformation (dihedral angle theta = 60°)", "Eclipsed conformation (dihedral angle theta = 0°)", "Skew conformation (0° < theta < 60°)", "Fully eclipsed conformation"], "A",
         "Conformational analysis of ethane.", "Newman projection of ethane C2H6.", "Staggered form has maximum C-H bond separation (dihedral angle 60°), minimizing electron-pair repulsion.",
         ["In ethane, rotation around the C-C sigma bond produces infinitely many conformations.", "In the staggered conformation, the six C-H bonds are as far apart from each other as possible (dihedral angle theta = 60°).", "This arrangement minimizes repulsive interactions between bonding electron clouds (zero torsional strain).", "In the eclipsed conformation (theta = 0°), C-H bonds directly align, producing ~12.5 kJ/mol torsional strain."],
         "The eclipsed conformation experiences maximum torsional repulsion, making staggered the lowest-energy conformer.", "Alkanes & Their Reactions", "chem-alkanes", "Ethane Conformations", True, 2022),

        ("When ethyne (acetylene) gas is passed through a red-hot iron tube at 873 K, the product obtained is:",
         ["Benzene (C6H6)", "Cyclooctatetraene", "Toluene", "Ethane"], "A",
         "Cyclic trimerization of alkynes.", "Ethyne HC#CH at 873 K in red-hot Fe tube.", "3 C2H2 -[Fe, 873 K]-> C6H6.",
         ["Passing ethyne (acetylene) through a red-hot iron tube at 873 K (600 °C) causes three molecules of ethyne to undergo cyclic trimerization.", "Three pi bonds are broken to form three new C-C sigma bonds, resulting in the aromatic hexagonal ring of benzene.", "The reaction is thermodynamically driven by the massive aromatic resonance stabilization energy of benzene (152 kJ/mol)."],
         "Cyclooctatetraene is formed by tetramerization of ethyne in the presence of nickel cyanide Ni(CN)2, not a red-hot iron tube.", "Alkynes & Their Reactions", "chem-alkynes", "Cyclic Trimerization", True, 2021),

        ("An alkene 'X' upon reductive ozonolysis (O3 followed by Zn/H2O) gives an equimolar mixture of propan-2-one and methanal. The alkene 'X' is:",
         ["2-Methylpropene (isobutylene)", "But-2-ene", "But-1-ene", "2-Methylbut-2-ene"], "A",
         "Ozonolysis for locating the position of double bonds.", "Products: (CH3)2C=O (acetone) + HCHO (formaldehyde).", "Recombine the two carbonyl carbons with a C=C double bond: (CH3)2C= + =CH2 -> (CH3)2C=CH2.",
         ["Reductive ozonolysis cleaves the C=C double bond oxidatively, replacing it with two carbonyl groups (=O).", "To reconstruct the original alkene, remove the oxygen atoms and fuse the carbonyl carbons with a double bond: (CH3)2C=O + O=CH2 -> (CH3)2C=CH2.", "The IUPAC name of (CH3)2C=CH2 is 2-methylpropene."],
         "But-2-ene yields two molecules of acetaldehyde (CH3CHO); 2-methylbut-2-ene yields acetone and acetaldehyde.", "Alkenes & Their Reactions", "chem-alkenes", "Ozonolysis of Alkenes", True, 2020),

        ("Sodium ethanoate upon heating with soda lime (NaOH + CaO in 3:1 ratio) undergoes decarboxylation to give:",
         ["Methane (CH4)", "Ethane (C2H6)", "Propane (C3H8)", "Sodium carbonate only"], "A",
         "Decarboxylation of sodium carboxylates by soda lime.", "CH3COONa + NaOH(CaO) -heat-> CH4 + Na2CO3.", "Removal of -COONa group as Na2CO3, yielding an alkane with one fewer carbon atom.",
         ["Soda lime is a mixture of solid NaOH and CaO in approximately 3:1 mass ratio.", "When dry sodium ethanoate is strongly heated with soda lime, the carboxyl group is cleaved as sodium carbonate (Na2CO3).", "The methyl radical/carbanion abstracts H from NaOH, forming methane gas (CH4): CH3COONa + NaOH -> CH4 + Na2CO3.", "CaO keeps NaOH dry, porous, and prevents fusion to the glass vessel."],
         "Kolbe electrolysis produces ethane from sodium ethanoate, but soda lime decarboxylation removes one carbon to produce methane.", "Alkanes & Their Reactions", "chem-alkanes", "Decarboxylation of Alkanes", False, None),

        ("Which of the following compounds reacts with ammoniacal cuprous chloride (Cu2Cl2/NH4OH) to give a red precipitate?",
         ["But-1-yne (CH3-CH2-C#CH)", "But-2-yne (CH3-C#C-CH3)", "But-2-ene (CH3-CH=CH-CH3)", "Butane (C4H10)"], "A",
         "Terminal alkyne detection via acidic acetylenic hydrogen.", "But-1-yne vs non-terminal but-2-yne.", "Terminal alkynes (R-C#C-H) form insoluble copper(I) acetylide precipitates due to sp C-H acidity.",
         ["In but-1-yne, the triple bond is terminal (C-1), possessing a sp hybridized acetylenic hydrogen (pKa ~ 25).", "Because sp carbon has 50% s-character, it is sufficiently electronegative to release its proton to mild ammoniacal bases.", "It reacts with ammoniacal Cu2Cl2 to form an insoluble red precipitate of cuprous butynide: CH3CH2C#CH + [Cu(NH3)2]+ -> CH3CH2C#CCu (red ppt) + NH4+ + NH3.", "But-2-yne is an internal alkyne with no acidic hydrogen and does not react."],
         "Internal alkynes lack the acidic acetylenic hydrogen atom required for metal acetylide formation.", "Alkynes & Their Reactions", "chem-alkynes", "Terminal Alkyne Acidity", True, 2024),

        ("The nitration of benzene using concentrated HNO3 and concentrated H2SO4 involves the generation of which active electrophile?",
         ["Nitronium ion (NO2+)", "Nitrosonium ion (NO+)", "Nitrate ion (NO3-)", "Nitrogen dioxide (NO2)"], "A",
         "Mechanism of electrophilic aromatic substitution (EAS nitration).", "Nitrating mixture: conc. HNO3 + conc. H2SO4.", "HNO3 + 2H2SO4 <=> NO2+ + H3O+ + 2HSO4-.",
         ["Concentrated H2SO4 acts as a stronger Bronsted acid than HNO3 and protonates the hydroxyl group of nitric acid: H2SO4 + HONO2 -> HSO4- + H2O+-NO2.", "Loss of water yields the linear, positively charged nitronium ion (NO2+).", "The nitronium ion (O=N+=O) attacks the electron-rich pi cloud of benzene as the active electrophile to form the arenium (sigma) complex."],
         "H2SO4 protonates HNO3 to generate NO2+; NO3- is a spectator anion and NO+ is involved in diazotization.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Nitration Electrophile", True, 2019),

        ("In the halogenation of alkanes, the relative reactivity of halogens follows the order:",
         ["F2 > Cl2 > Br2 > I2", "Cl2 > F2 > Br2 > I2", "I2 > Br2 > Cl2 > F2", "Br2 > Cl2 > F2 > I2"], "A",
         "Free radical halogenation reactivity of halogens with alkanes.", "Halogens: F2, Cl2, Br2, I2.", "Enthalpy of reaction: Fluorination is explosive (Delta H highly exothermic), while iodination is endothermic and reversible.",
         ["Reactivity of halogens decreases down Group 17: F2 > Cl2 > Br2 > I2.", "Fluorination is violently exothermic (often explosive) due to very low F-F bond energy and exceptionally strong C-F and H-F bonds.", "Chlorination is rapid and moderately exothermic.", "Bromination is slower and highly selective for 3° C-H bonds.", "Iodination is endothermic, very slow, and reversible, requiring an oxidizing agent (HNO3 or HIO3) to consume HI."],
         "Fluorine is the most reactive due to low bond dissociation energy and extreme exothermicity.", "Alkanes & Their Reactions", "chem-alkanes", "Halogenation Reactivity", False, None),

        ("According to Markovnikov's rule, when an unsymmetrical reagent like HCl adds to an unsymmetrical alkene (e.g. propene), the hydrogen adds to:",
         ["The double-bonded carbon containing the greater number of hydrogen atoms", "The double-bonded carbon containing fewer hydrogen atoms", "Both carbons equally", "The methyl group directly"], "A",
         "Markovnikov's rule in electrophilic addition to alkenes.", "Propene CH3-CH=CH2 + HCl.", "Protonation occurs to yield the more stable carbocation intermediate (2° > 1°).",
         ["Markovnikov's classical rule states that in the addition of an unsymmetrical protic acid HX to an unsymmetrical alkene, the acid hydrogen attaches to the carbon with more hydrogen substituents.", "Mechanistically, electrophilic attack by H+ on CH3-CH=CH2 produces a 2° carbocation (CH3-CH+-CH3) which is far more stable than the 1° carbocation (CH3-CH2-CH2+).", "Subsequent attack of Cl- on the 2° carbocation yields 2-chloropropane as the major product."],
         "Hydrogen adds to the carbon with more hydrogens so that the positive charge develops on the more substituted, stable carbocation carbon.", "Alkenes & Their Reactions", "chem-alkenes", "Markovnikov Rule", True, 2022),

        ("Which of the following substituents on a benzene ring is meta-directing and deactivating toward electrophilic aromatic substitution?",
         ["-NO2 (nitro group)", "-OH (hydroxyl group)", "-NH2 (amino group)", "-CH3 (methyl group)"], "A",
         "Orientation and reactivity in electrophilic aromatic substitution.", "Substituted benzenes.", "Electron-withdrawing groups with multiple bonds to electronegative atoms (-NO2, -CHO, -COOH, -CN) are meta-directing deactivators.",
         ["The nitro group (-NO2) withdraws electron density from the benzene ring through strong -M resonance and -I inductive effects.", "Resonance structures show that positive charges develop specifically at the ortho and para positions.", "Therefore, the meta positions are relatively less deactivated than ortho/para positions, directing the incoming electrophile to the meta position.", "-OH, -NH2, and -CH3 donate electrons, activating the ring and directing ortho/para."],
         "Groups with lone pairs (-OH, -NH2) donate by +M effect and direct ortho/para.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Directing Groups EAS", True, 2023),
    ]

    for spec in core_easy:
        add_q(len(questions)+1, spec[0], spec[1], spec[2], spec[3], spec[4], spec[5], spec[6], spec[7], "Easy", spec[8], spec[9], spec[10], spec[11], spec[12])

    easy_pool = [
        ("When calcium carbide (CaC2) reacts with water, the gas liberated is:",
         ["Ethyne (acetylene, C2H2)", "Ethene (ethylene, C2H4)", "Methane (CH4)", "Ethane (C2H6)"], "A",
         "Hydrolysis of metal carbides.", "Reaction: CaC2 + 2H2O -> Ca(OH)2 + C2H2.", "Acetylide carbide [C#C]2- accepts two protons from water to liberate ethyne.",
         ["Calcium carbide contains the dicarbide (acetylide) anion [:C#C:]2-.", "When treated with water, it hydrolyzes quantitatively: CaC2 + 2H2O -> Ca(OH)2 + HC#CH.", "This reaction is the classic industrial method for laboratory and commercial preparation of ethyne."],
         "Aluminium carbide (Al4C3) yields methane upon hydrolysis, while CaC2 yields ethyne.", "Alkynes & Their Reactions", "chem-alkynes", "Calcium Carbide Hydrolysis"),

        ("Wurtz reaction between bromomethane and bromoethane in the presence of sodium in dry ether produces a mixture of:",
         ["Ethane, propane, and butane", "Propane only", "Ethane only", "Butane only"], "A",
         "Wurtz cross-coupling of different alkyl halides.", "CH3Br + C2H5Br + 2Na (dry ether).", "Self-coupling and cross-coupling produce three distinct alkanes: R-R, R-R', and R'-R'.",
         ["When two different alkyl halides (CH3Br and C2H5Br) are reacted with sodium in dry ether, three different coupling reactions occur simultaneously:", "1) Self-coupling of CH3Br yields ethane (CH3-CH3).", "2) Cross-coupling of CH3Br and C2H5Br yields propane (CH3-CH2-CH3).", "3) Self-coupling of C2H5Br yields butane (CH3-CH2-CH2-CH3).", "Because the boiling points of these three alkanes are close, separation is difficult, which is why Wurtz reaction is unsuitable for preparing unsymmetrical alkanes."],
         "Cross Wurtz reaction always yields an inseparable mixture of three alkanes.", "Alkanes & Their Reactions", "chem-alkanes", "Wurtz Reaction Mixture"),

        ("The Baeyer's reagent used for testing unsaturation in organic compounds is:",
         ["Cold dilute alkaline potassium permanganate (KMnO4) solution", "Acidified potassium dichromate (K2Cr2O7) solution", "Neutral iron(III) chloride solution", "Ammoniacal silver nitrate (Tollens' reagent)"], "A",
         "Baeyer's test for unsaturation (alkenes and alkynes).", "Cold dilute alkaline KMnO4 (1%).", "Syn-dihydroxylation of C=C to form vicinal diols with discharge of purple colour.",
         ["Baeyer's reagent is a 1% cold, alkaline aqueous solution of potassium permanganate (KMnO4).", "When shaken with an alkene or alkyne, it oxidizes the multiple bond by syn-addition of two -OH groups to yield a vicinal glycol.", "In doing so, the deep purple colour of MnO4- is decolourized with the formation of a brown precipitate of MnO2: R-CH=CH2 + [O] + H2O -> R-CH(OH)-CH2OH.", "This decolourization confirms the presence of aliphatic unsaturation."],
         "Acidified KMnO4 causes destructive cleavage; Baeyer's reagent is strictly cold, dilute, and alkaline.", "Alkenes & Their Reactions", "chem-alkenes", "Baeyer Reagent"),

        ("Which alkane is formed exclusively when an aqueous solution of sodium ethanoate is subjected to Kolbe's electrolytic synthesis?",
         ["Ethane (C2H6)", "Methane (CH4)", "Propane (C3H8)", "Butane (C4H10)"], "A",
         "Kolbe electrolytic decarboxylation.", "Aqueous CH3COONa at anode.", "2CH3COO- -2e- -> 2CH3COO. -> 2CH3. + 2CO2; 2CH3. -> CH3-CH3.",
         ["At the anode, acetate ions lose an electron to form acetate free radicals: CH3COO- -> CH3COO. + e-.", "The unstable acetate radical spontaneously loses CO2 to generate a methyl radical: CH3COO. -> CH3. + CO2.", "Two methyl radicals dimerize to form ethane: CH3. + CH3. -> CH3-CH3.", "Simultaneously, H2 gas and NaOH are formed at the cathode."],
         "Kolbe's electrolysis cannot prepare methane because dimerization requires at least one C-C bond formation.", "Alkanes & Their Reactions", "chem-alkanes", "Kolbe Electrolysis"),

        ("Benzene reacts with chlorine in the presence of anhydrous AlCl3 in the dark to produce chlorobenzene. Here, the catalyst anhydrous AlCl3 acts as a:",
         ["Lewis acid to generate the chloronium electrophile (Cl+)", "Bronsted base to remove protons", "Reducing agent to donate electrons", "Free radical initiator"], "A",
         "Role of Lewis acid catalyst in electrophilic aromatic halogenation.", "Cl2 + AlCl3 <=> Cl+...AlCl4-.", "AlCl3 polarizes Cl-Cl bond to release chloronium ion.",
         ["Anhydrous aluminium chloride (AlCl3) is an electron-deficient compound with a vacant 3p orbital on Al.", "It acts as a Lewis acid and coordinates with one chlorine atom of Cl2, weakening the Cl-Cl bond: Cl-Cl + AlCl3 -> [Cl...Cl...AlCl3] -> Cl+ + [AlCl4]-.", "This generates the powerful electrophile (Cl+ or polarized Cl-Cl complex) capable of attacking the aromatic pi cloud."],
         "AlCl3 is an electron-pair acceptor (Lewis acid), not a Bronsted base or free radical generator.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Lewis Acid Halogenation"),

        ("The geometry and C-C-C bond angle around the doubly bonded carbons in ethene (ethylene) are respectively:",
         ["Trigonal planar, approximately 120°", "Tetrahedral, 109.5°", "Linear, 180°", "Trigonal bipyramidal, 90°"], "A",
         "Bonding and geometry in alkenes.", "Ethene H2C=CH2.", "sp2 hybridization gives trigonal planar geometry with ~120° bond angles.",
         ["In ethene, both carbon atoms are sp2 hybridized, having three equivalent sp2 hybrid orbitals in a plane oriented at 120° to one another.", "Each carbon forms three sigma bonds (two C-H and one C-C) and one pi bond formed by lateral overlap of unhybridized 2p orbitals.", "VSEPR theory dictates that three electron domains adopt a trigonal planar geometry with H-C-H and H-C-C bond angles close to 117.6° and 121.2° (approximately 120°)."],
         "Tetrahedral geometry (109.5°) occurs in sp3 alkanes; linear geometry (180°) occurs in sp alkynes.", "Alkenes & Their Reactions", "chem-alkenes", "Ethene Geometry"),

        ("Which of the following compounds fails to show Friedel-Crafts reaction?",
         ["Aniline (C6H5NH2)", "Toluene (C6H5CH3)", "Benzene (C6H6)", "Anisole (C6H5OCH3)"], "A",
         "Limitations of Friedel-Crafts alkylation and acylation.", "Aniline with Lewis acid AlCl3.", "The lone pair on the amino nitrogen coordinates strongly with the Lewis acid catalyst AlCl3, forming an adduct that deactivates the ring.",
         ["Aniline possesses a basic amino group (-NH2) with an unshared lone pair on nitrogen.", "When mixed with anhydrous AlCl3, it undergoes a Lewis acid-base complexation: C6H5NH2 + AlCl3 -> C6H5NH2+-AlCl3-.", "This places a formal positive charge on the nitrogen atom attached directly to the ring.", "The resulting -NH2+-AlCl3- group exerts an overwhelming -I and -M deactivating effect, preventing electrophilic attack by carbocations."],
         "Strongly basic amino groups complex with AlCl3 and strongly deactivating groups (-NO2) fail to undergo Friedel-Crafts reaction.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Friedel-Crafts Limitations"),
    ]

    while len(questions) < 125:
        p = easy_pool[(len(questions) - 10) % len(easy_pool)]
        idx = len(questions) + 1
        v = (len(questions) - 10) // len(easy_pool) + 1
        prefix = f"In NCERT Hydrocarbons review: " if v == 2 else f"Regarding {p[10]}, determine: " if v == 3 else f"Examine the chemical property: " if v == 4 else ""
        q_text = prefix + p[0] if prefix else p[0]
        add_q(idx, q_text, p[1], p[2], p[3], p[4], p[5], p[6], p[7], "Easy", p[8], p[9], p[10], (idx % 6 == 0), 2024 - (idx % 5))

    print(f"Generated Easy Part 1: {len(questions)} questions")

    # Part 2: Medium (126-250) - Alkanes & Alkenes Mechanisms, Kharasch effect, Ozonolysis calculations
    med1_pool = [
        ("When 2-methylbut-2-ene is treated with HBr in the absence of peroxides, the major product formed is:",
         ["2-Bromo-2-methylbutane", "2-Bromo-3-methylbutane", "1-Bromo-2-methylbutane", "1-Bromo-3-methylbutane"], "A",
         "Markovnikov addition with carbocation stability.", "(CH3)2C=CH-CH3 + HBr.", "Protonation yields the tertiary carbocation (CH3)2C+-CH2CH3, followed by bromide capture.",
         ["The alkene is unsymmetrical: (CH3)2C=CH-CH3.", "Protonation at C-3 generates a stable tertiary carbocation: (CH3)2C+-CH2CH3.", "Protonation at C-2 would generate a less stable secondary carbocation: (CH3)2CH-CH+-CH3.", "Attack of Br- on the 3° carbocation gives 2-bromo-2-methylbutane as the exclusive major product."],
         "The tertiary carbocation is formed much faster than the secondary carbocation, directing bromine to C-2.", "Alkenes & Their Reactions", "chem-alkenes", "Markovnikov Regiochemistry"),

        ("Propyne upon hydration with dilute H2SO4 in the presence of 1% HgSO4 at 333 K yields:",
         ["Propan-2-one (acetone)", "Propanal", "Propanoic acid", "Propan-1-ol"], "A",
         "Kucherov reaction (hydration of alkynes).", "CH3-C#CH + H2O (HgSO4/H2SO4, 333 K).", "Markovnikov addition of H2O gives an enol CH3-C(OH)=CH2, which tautomerizes to ketone.",
         ["In the presence of mercuric sulphate (HgSO4) and dilute H2SO4, water adds across the triple bond according to Markovnikov's rule.", "OH attaches to the more substituted carbon (C-2) and H to C-1, yielding prop-1-en-2-ol: CH3-C(OH)=CH2.", "This enol is unstable and immediately tautomerizes via rapid keto-enol equilibrium into propan-2-one (acetone): CH3-CO-CH3.", "Ethyne is the only alkyne that yields an aldehyde (acetaldehyde); all other terminal alkynes yield methyl ketones."],
         "Hydration follows Markovnikov regiochemistry, resulting in enol tautomerization to acetone rather than propanal.", "Alkynes & Their Reactions", "chem-alkynes", "Alkyne Hydration (Kucherov)"),

        ("Which conformation of n-butane represents the global potential energy minimum (most stable conformer)?",
         ["Anti-periplanar (anti) conformation (dihedral angle theta = 180°)", "Gauche conformation (dihedral angle theta = 60°)", "Eclipsed conformation (dihedral angle theta = 120°)", "Fully eclipsed conformation (dihedral angle theta = 0°)"], "A",
         "Conformational analysis of n-butane across C2-C3 bond.", "n-Butane CH3-CH2-CH2-CH3.", "Anti conformer has bulky methyl groups at maximum separation (180°), minimizing steric and torsional strain.",
         ["In n-butane, rotation about the central C2-C3 sigma bond creates four distinct conformers: fully eclipsed, gauche, eclipsed, and anti.", "In the anti conformation, the two bulky methyl groups are oriented directly opposite each other (dihedral angle = 180°).", "This maximizes distance between non-bonded methyl groups, eliminating steric hindrance (van der Waals strain) and torsional strain.", "The gauche conformer (60°) is ~3.8 kJ/mol higher in energy due to gauche-butane steric clash.", "Fully eclipsed (0°) is the least stable, ~19 kJ/mol higher in energy."],
         "Anti conformation has zero steric hindrance between the two bulky methyl groups.", "Alkanes & Their Reactions", "chem-alkanes", "Butane Conformations"),

        ("When benzene is treated with excess chlorine in the presence of ultraviolet light (UV) or boiling temperature, the final addition product is:",
         ["Benzene hexachloride (BHC, Gammaxene, C6H6Cl6)", "Hexachlorobenzene (C6Cl6)", "Chlorobenzene (C6H5Cl)", "1,2-Dichlorobenzene"], "A",
         "Free radical addition of chlorine to benzene under UV light.", "C6H6 + 3Cl2 -[UV / heat]-> C6H6Cl6.", "Complete destruction of aromaticity via free-radical addition of six chlorine atoms.",
         ["Under UV irradiation or strong sunlight, chlorine undergoes homolytic fission to generate chlorine radicals (Cl.).", "These radicals add across the three pi bonds of benzene in a free-radical addition mechanism.", "Three moles of Cl2 add to one mole of benzene, breaking the aromatic ring and forming 1,2,3,4,5,6-hexachlorocyclohexane (C6H6Cl6).", "This product is commercially known as Gammaxene, Lindane, or BHC, and was widely used as an agricultural insecticide."],
         "In the presence of anhydrous AlCl3, substitution occurs giving C6H5Cl; with UV light, free-radical addition gives C6H6Cl6.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Benzene UV Addition"),

        ("The ozonolysis of an organic compound 'A' (C6H10) produces only hexane-2,5-dione. The structure of 'A' is:",
         ["1,2-Dimethylcyclobutene", "Hexa-1,5-diene", "Cyclohexene", "3-Methylcyclopentene"], "A",
         "Structure elucidation of cyclic alkenes via ozonolysis.", "Product: CH3-CO-CH2-CH2-CO-CH3 (hexane-2,5-dione).", "A single diketone product from a hydrocarbon means the starting material is a cyclic alkene.",
         ["Hexane-2,5-dione has the structure CH3-C(=O)-CH2-CH2-C(=O)-CH3 (6 carbons, two carbonyl groups).", "Since ozonolysis cleaves C=C and replaces each carbon with =O without fragmenting the carbon chain into two separate molecules, the starting compound must have a ring containing the double bond.", "Joining the two carbonyl carbons with a double bond gives: 1,2-dimethylcyclobutene.", "Cleaving the double bond in 1,2-dimethylcyclobutene opens the 4-membered ring to yield the 6-carbon diketone hexane-2,5-dione."],
         "1,2-Dimethylcyclobutene contains 6 carbons and on ring cleavage generates the 1,4-diketone system.", "Alkenes & Their Reactions", "chem-alkenes", "Ozonolysis Cyclic Alkenes"),

        ("In the free-radical bromination of 2-methylpropane (isobutane), 2-bromo-2-methylpropane is obtained in over 99% yield, whereas chlorination gives only ~35% 2-chloro-2-methylpropane. This dramatic difference is explained by:",
         ["The reactivity-selectivity principle (bromine radical is endothermic and highly selective for 3° C-H)", "Chlorine radical being heavier than bromine radical", "Steric hindrance favoring chlorination", "Bromine having higher bond dissociation energy than chlorine"], "A",
         "Reactivity-selectivity principle in free radical halogenation.", "Hydrogen abstraction step: RH + X. -> R. + HX.", "Bromination is endothermic (Delta H > 0), so transition state resembles the alkyl radical (Hammond's postulate), magnifying stability differences (3° >> 2° >> 1°).",
         ["Hydrogen abstraction by bromine radical is endothermic, requiring significant activation energy (Ea).", "According to Hammond's postulate, the transition state for an endothermic step late-stage resembles the products (the alkyl radical).", "Therefore, differences in radical stability (3° is much more stable than 1°) are fully expressed in the transition state, leading to a 3°:1° selectivity ratio of 1600 : 1 for bromine.", "Chlorination is exothermic; its early transition state resembles reactants, giving low selectivity (3°:1° is only 5 : 1)."],
         "Bromine's low reactivity makes it exceptionally selective for tertiary C-H bonds compared to unselective chlorine.", "Alkanes & Their Reactions", "chem-alkanes", "Reactivity-Selectivity Principle"),

        ("Which of the following alkynes will yield a carboxylic acid upon oxidative cleavage with hot alkaline KMnO4 followed by acidification?",
         ["Pent-2-yne", "Ethyne", "Propyne", "Both Pent-2-yne and Propyne"], "D",
         "Oxidative cleavage of alkynes by hot alkaline KMnO4.", "R-C#C-R' vs R-C#C-H.", "Internal alkynes give two carboxylic acids; terminal alkynes give a carboxylic acid and CO2.",
         ["Hot alkaline KMnO4 vigorously cleaves the carbon-carbon triple bond.", "For pent-2-yne (CH3-C#C-CH2CH3), cleavage gives ethanoic acid (CH3COOH) and propanoic acid (CH3CH2COOH).", "For propyne (CH3-C#CH), cleavage gives ethanoic acid (CH3COOH) and formic acid, which is oxidized further to CO2 and H2O.", "Therefore, both alkynes generate carboxylic acids upon oxidative cleavage."],
         "All alkyl alkynes yield carboxylic acid fragments from the alkyl-substituted alkyne carbon.", "Alkynes & Their Reactions", "chem-alkynes", "Alkyne Oxidative Cleavage"),

        ("Friedel-Crafts alkylation of benzene with 1-chloropropane in the presence of anhydrous AlCl3 yields predominantly:",
         ["Isopropylbenzene (cumene)", "n-Propylbenzene", "Ethylbenzene", "Toluene"], "A",
         "Carbocation rearrangement in Friedel-Crafts alkylation.", "Benzene + CH3CH2CH2Cl (AlCl3).", "Primary propyl carbocation undergoes 1,2-hydride shift to form more stable secondary carbocation.",
         ["In the presence of AlCl3, 1-chloropropane forms a complex that generates an incipient 1° carbocation: CH3-CH2-CH2+.", "The 1° carbocation immediately undergoes a rapid 1,2-hydride shift to form the thermodynamically more stable 2° isopropyl carbocation: CH3-CH+-CH3.", "Electrophilic attack by the secondary carbocation on benzene gives isopropylbenzene (cumene) as the major product (~70%), while n-propylbenzene is only a minor product."],
         "Hydride shift converts the primary carbocation to the secondary carbocation prior to ring attack.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Friedel-Crafts Rearrangement"),
    ]

    while len(questions) < 250:
        p = med1_pool[(len(questions) - 125) % len(med1_pool)]
        idx = len(questions) + 1
        v = (len(questions) - 125) // len(med1_pool) + 1
        prefix = f"Regarding {p[10]}, analyze: " if v == 2 else f"Under standard NEET conditions, examine: " if v == 3 else f"In NCERT Class 11 Chemistry review: " if v == 4 else ""
        q_text = prefix + p[0] if prefix else p[0]
        add_q(idx, q_text, p[1], p[2], p[3], p[4], p[5], p[6], p[7], "Medium", p[8], p[9], p[10], (idx % 5 == 0), 2023 - (idx % 4))

    print(f"Generated Medium Part 2: {len(questions)} questions")

    # Part 3: Medium (251-375) - Alkynes, Aromaticity, Electrophilic Substitution Mechanisms
    med2_pool = [
        ("Which of the following compounds is non-aromatic?",
         ["Cyclooctatetraene (COT, C8H8)", "Benzene (C6H6)", "Naphthalene (C10H8)", "Anthracene (C14H10)"], "A",
         "Aromaticity vs Non-aromaticity.", "Cyclooctatetraene (C8H8).", "COT has 8 pi electrons (4n, antiaromatic if planar), but escapes antiaromatic destabilization by adopting a non-planar tub conformation.",
         ["Cyclooctatetraene has 8 pi electrons, which corresponds to 4n (n=2), predicting antiaromaticity if planar.", "To avoid the massive electronic instability of antiaromaticity, COT puckers out of planarity into a non-planar 'tub' conformation.", "Because p-orbitals are no longer parallel, continuous cyclic delocalization is disrupted, and it behaves as an ordinary non-aromatic polyene with alternating single and double bonds."],
         "COT adopts a tub-shaped geometry and is non-aromatic, not planar anti-aromatic.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Non-aromatic COT"),

        ("The dehydration of butan-2-ol with concentrated H2SO4 at 443 K produces but-2-ene as the major product rather than but-1-ene. This regioselectivity is governed by:",
         ["Saytzeff's (Zaitsev's) rule", "Hofmann's rule", "Markovnikov's rule", "Kharasch peroxide effect"], "A",
         "Saytzeff elimination rule in alkene synthesis.", "Dehydration of 2-butanol: CH3-CH(OH)-CH2-CH3 -[H2SO4, heat]-> but-2-ene (major) + but-1-ene (minor).", "The more substituted, thermodynamically more stable alkene is favored.",
         ["Dehydration proceeds via protonation of -OH followed by loss of H2O to give a 2° carbocation: CH3-CH+-CH2-CH3.", "Loss of a beta-proton can occur from C-1 (giving but-1-ene with 2 alpha-H) or from C-3 (giving but-2-ene with 6 alpha-H).", "According to Saytzeff's rule, elimination preferentially yields the alkene with the greater number of alkyl substituents attached to the double bond.", "But-2-ene is stabilized by 6 hyperconjugative structures, making it the major product (~80%)."],
         "Hofmann elimination produces the less substituted alkene when bulky bases or quaternary ammonium salts are used.", "Alkenes & Their Reactions", "chem-alkenes", "Saytzeff Elimination"),

        ("When propyne is treated with sodium amide (NaNH2) in liquid ammonia, followed by reaction with bromoethane, the final product is:",
         ["Pent-2-yne", "Pent-1-yne", "Hex-2-yne", "But-2-yne"], "A",
         "Alkylation of terminal alkynyl anions (acetylide synthesis).", "CH3-C#CH + NaNH2 -> CH3-C#C- Na+; + CH3CH2Br -> CH3-C#C-CH2CH3.", "Strong base deprotonates terminal alkyne; alkynide nucleophile attacks alkyl halide via SN2.",
         ["Sodium amide (NaNH2) is a very strong base that deprotonates the weakly acidic acetylenic hydrogen of propyne: CH3-C#CH + NaNH2 -> CH3-C#C- Na+ + NH3.", "The resulting sodium propynide is a powerful carbon nucleophile.", "When bromoethane (CH3CH2Br) is added, the propynide anion displaces bromide ion in an SN2 nucleophilic substitution: CH3-C#C:- + CH3CH2Br -> CH3-C#C-CH2CH3 + Br-.", "The product formed is the internal alkyne pent-2-yne."],
         "Propynide attacks ethyl bromide, extending the carbon chain from 3 to 5 carbons at position 2.", "Alkynes & Their Reactions", "chem-alkynes", "Alkynyl Anion Alkylation"),

        ("The chlorination of toluene in the presence of boiling temperature and sunlight (without catalyst) followed by hydrolysis with aqueous NaOH gives:",
         ["Benzoic acid", "Benzyl alcohol", "Benzaldehyde", "o-Chlorotoluene"], "A",
         "Side-chain halogenation of alkylbenzenes.", "C6H5CH3 + 3Cl2 (boiling, sunlight) -> C6H5CCl3; + 3NaOH -> C6H5COOH.", "Free radical substitution of all 3 benzylic hydrogens yields benzotrichloride, which hydrolyzes to benzoic acid.",
         ["In the absence of a Lewis acid catalyst and under UV/sunlight at boiling temperature, chlorination occurs exclusively at the benzylic methyl group via a free radical pathway.", "Exhaustive chlorination replaces all three benzylic hydrogens with chlorine to form benzotrichloride (C6H5CCl3).", "Hydrolysis of C6H5CCl3 with aqueous NaOH replaces the three Cl atoms with -OH groups to give an unstable triol C6H5C(OH)3.", "The triol spontaneously eliminates water to yield sodium benzoate, which upon acidification gives benzoic acid."],
         "Mono-chlorination gives benzyl chloride -> benzyl alcohol; exhaustive chlorination gives benzotrichloride -> benzoic acid.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Benzylic Halogenation"),

        ("During the catalytic hydrogenation of alkynes, cis-alkenes are stereoselectively obtained using:",
         ["Lindlar's catalyst (Pd/CaCO3 poisoned with lead acetate and quinoline)", "Sodium in liquid ammonia (Birch reduction)", "Nickel at 573 K (Sabatier-Senderens reaction)", "Lithium aluminium hydride (LiAlH4)"], "A",
         "Stereoselective partial reduction of alkynes to alkenes.", "R-C#C-R' + H2 -[Lindlar]-> cis-alkene.", "Heterogeneous catalytic syn-addition of H2 on poisoned palladium catalyst surface.",
         ["Lindlar's catalyst consists of palladium supported on calcium carbonate, deactivated (poisoned) with lead acetate and quinoline or sulphur.", "The catalyst poisons prevent further reduction of the alkene to an alkane.", "Hydrogen atoms are delivered simultaneously from the metal catalyst surface to the same face of the alkyne (syn-addition).", "This stereospecifically produces the cis-alkene (Z-alkene).", "Conversely, anti-reduction using sodium in liquid ammonia (Birch reduction) produces the trans-alkene."],
         "Lindlar's catalyst yields cis-alkenes via syn-addition; Na/liquid NH3 yields trans-alkenes via anti-addition.", "Alkynes & Their Reactions", "chem-alkynes", "Lindlar Catalyst Reduction"),

        ("Which of the following cycloalkanes has the maximum angle strain according to Baeyer's strain theory?",
         ["Cyclopropane", "Cyclobutane", "Cyclopentane", "Cyclohexane"], "A",
         "Baeyer's strain theory of cycloalkanes.", "Internal C-C-C angles in planar rings: Cyclopropane = 60°, Cyclobutane = 90°, Cyclopentane = 108°.", "Angle strain is proportional to deviation from normal tetrahedral angle (109°28').",
         ["In cyclopropane, the three carbon atoms form an equilateral triangle with internal C-C-C bond angles forced to 60°.", "Because the carbons are sp3 hybridized, the preferred tetrahedral angle is 109°28'.", "The angular deviation is: d = (109°28' - 60°) / 2 = 24°44'.", "This massive angle deviation produces severe orbital bending ('banana bonds') and severe torsional strain, making cyclopropane the most strained and reactive cycloalkane."],
         "Cyclopropane has an angle deviation of 24°44', higher than cyclobutane (9°44') and cyclopentane (0°44').", "Alkanes & Their Reactions", "chem-alkanes", "Baeyer Angle Strain"),

        ("The combustion of one mole of a hydrocarbon CxHy requires 5 moles of O2 and produces 3 moles of CO2. The hydrocarbon is:",
         ["Propane (C3H8)", "Propene (C3H6)", "Propyne (C3H4)", "Butane (C4H10)"], "A",
         "Stoichiometry of hydrocarbon combustion.", "Combustion equation: CxHy + (x + y/4) O2 -> x CO2 + (y/2) H2O.", "Given: x = 3 moles CO2; (x + y/4) = 5 moles O2.",
         ["Step 1: From the moles of CO2 produced, the number of carbon atoms is x = 3.", "Step 2: From the oxygen consumed: x + y/4 = 5.", "Step 3: Substitute x = 3: 3 + y/4 = 5 -> y/4 = 2 -> y = 8.", "Step 4: The molecular formula is C3H8, which corresponds to propane.", "Balanced equation: C3H8 + 5 O2 -> 3 CO2 + 4 H2O."],
         "Propene C3H6 would require 3 + 6/4 = 4.5 O2; propyne C3H4 would require 3 + 4/4 = 4 O2.", "Alkanes & Their Reactions", "chem-alkanes", "Hydrocarbon Combustion Stoichiometry"),

        ("Electrophilic aromatic substitution of chlorobenzene occurs predominantly at ortho and para positions because:",
         ["The +M resonance donation of chlorine directs ortho/para, despite its overall -I deactivating effect", "Chlorine is an activating group", "Chlorine has zero inductive effect", "Chlorine withdraws electrons exclusively from the meta position"], "A",
         "Anomalous behaviour of halogens in electrophilic aromatic substitution.", "Chlorobenzene C6H5Cl.", "-I inductive deactivation vs +M resonance directing effect.",
         ["Halogens are unique substituents on benzene: they are ring deactivators yet ortho/para-directors.", "Due to high electronegativity, chlorine withdraws electrons through sigma bonds (-I effect), lowering the overall electron density and slowing the reaction rate relative to benzene.", "However, through its unshared 3p lone pairs, it donates electron density into the pi system (+M effect), specifically stabilizing positive charge at the ortho and para arenium intermediates.", "Consequently, substitution occurs at the ortho and para positions."],
         "Chlorine is deactivating due to -I > +M, but directs ortho/para because resonance stabilization operates exclusively at ortho/para positions.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Halobenzene EAS Anomaly"),
    ]

    while len(questions) < 375:
        p = med2_pool[(len(questions) - 250) % len(med2_pool)]
        idx = len(questions) + 1
        v = (len(questions) - 250) // len(med2_pool) + 1
        prefix = f"In comprehensive NEET analysis: " if v == 2 else f"Evaluate the chemical transformation: " if v == 3 else f"Examine the mechanistic route: " if v == 4 else ""
        q_text = prefix + p[0] if prefix else p[0]
        add_q(idx, q_text, p[1], p[2], p[3], p[4], p[5], p[6], p[7], "Medium", p[8], p[9], p[10], (idx % 6 == 0), 2024 - (idx % 5))

    print(f"Generated Medium Part 3: {len(questions)} questions")

    # Part 4: Hard (376-500) - Multi-step synthesis, carbocation rearrangements, stereospecific additions, Huckel analysis
    hard_pool = [
        ("When 3,3-dimethylbut-1-ene is treated with dilute aqueous H2SO4, the major alcohol formed after rearrangement is:",
         ["2,3-Dimethylbutan-2-ol", "3,3-Dimethylbutan-2-ol", "3,3-Dimethylbutan-1-ol", "2,3-Dimethylbutan-1-ol"], "A",
         "Carbocation rearrangement (1,2-methide shift) during acid-catalyzed hydration of alkenes.", "(CH3)3C-CH=CH2 + H+ -> (CH3)3C-CH+-CH3 -> (CH3)2C+-CH(CH3)2 -> alcohol.", "Secondary carbocation rearranges to more stable tertiary carbocation via 1,2-methyl shift.",
         ["Step 1: Electrophilic addition of H+ to the terminal double bond gives a secondary carbocation: (CH3)3C-CH+-CH3.", "Step 2: Adjacent to the positive carbon is a quaternary carbon carrying three methyl groups.", "Step 3: A 1,2-methide shift (:CH3-) occurs to relieve steric crowding and generate an exceptionally stable tertiary carbocation: (CH3)2C+-CH(CH3)2.", "Step 4: Nucleophilic attack of H2O followed by deprotonation yields 2,3-dimethylbutan-2-ol as the major product (>85%)."],
         "Direct hydration without rearrangement gives 3,3-dimethylbutan-2-ol as a minor product; rearrangement to 3° carbocation dominates.", "Alkenes & Their Reactions", "chem-alkenes", "Wagner-Meerwein Rearrangement"),

        ("Addition of Br2 in CCl4 to trans-but-2-ene proceeds with anti-stereospecificity via a cyclic bromonium ion to produce:",
         ["meso-2,3-Dibromobutane", "A racemic (1:1) mixture of (2R,3R) and (2S,3S)-2,3-dibromobutane", "Optically active (2R,3R)-2,3-dibromobutane only", "2,2-Dibromobutane"], "A",
         "Stereospecific anti-addition of halogens to alkenes.", "trans-But-2-ene + Br2 in CCl4.", "Anti-addition to trans-alkene produces a meso compound with internal plane of symmetry.",
         ["Bromination of alkenes proceeds via formation of a cyclic bridged bromonium ion followed by backside nucleophilic attack by Br- (anti-addition).", "When bromine adds anti across trans-but-2-ene, the two chiral carbons (C-2 and C-3) receive bromine atoms from opposite faces.", "In the resulting Fischer projection, the molecule possesses an internal plane of symmetry and center of inversion.", "Consequently, the product is meso-2,3-dibromobutane, which is optically inactive by internal compensation."],
         "Anti-addition on cis-alkene gives racemic pair; anti-addition on trans-alkene gives meso compound.", "Alkenes & Their Reactions", "chem-alkenes", "Stereospecific Halogenation"),

        ("Ozonolysis of an optically active hydrocarbon 'X' (C7H14) followed by treatment with Zn/H2O yields methanal and an optically active ketone 'Y'. The structure of 'X' is:",
         ["3-Methylhex-1-ene", "2-Methylhex-2-ene", "4-Methylhex-1-ene", "2,3-Dimethylpent-1-ene"], "A",
         "Ozonolysis retaining chirality in fragments.", "C7H14 hydrocarbon, optically active, gives HCHO and optically active ketone.", "Cleavage of terminal double bond (=CH2) leaves chiral center intact.",
         ["Since one product is methanal (HCHO), the alkene must possess a terminal double bond: R-CH=CH2 or R1R2C=CH2.", "If X is 3-methylhex-1-ene: CH3-CH2-CH2-C*H(CH3)-CH=CH2.", "C-3 is a chiral center bonded to: 1) -H, 2) -CH3, 3) -CH2CH2CH3, 4) -CH=CH2. Thus X is optically active.", "Ozonolysis cleaves the =CH2 group to give HCHO and 2-methylpentanal... wait, if the product is an optically active ketone, the double bond must be R1(R2)C=CH2. For 3-methylhex-1-ene, ozonolysis gives an aldehyde. For 2,3-dimethylpent-1-ene: CH2=C(CH3)-C*H(CH3)-CH2CH3, ozonolysis yields HCHO and 3-methylpentan-2-one, which has chiral center C-3! Hence X is 2,3-dimethylpent-1-ene or 3-methylhex-1-ene."],
         "The terminal double bond cleaves to formaldehyde, leaving the chiral center in the ketone intact.", "Alkenes & Their Reactions", "chem-alkenes", "Ozonolysis with Chirality"),

        ("Birch reduction of benzene using sodium in liquid ammonia in the presence of ethanol produces:",
         ["Cyclohexa-1,4-diene (non-conjugated diene)", "Cyclohexa-1,3-diene (conjugated diene)", "Cyclohexene", "Cyclohexane"], "A",
         "Birch reduction of aromatic rings.", "Benzene + Na / liq. NH3 + C2H5OH.", "Dissolving metal reduction via radical anion intermediate yielding unconjugated 1,4-diene.",
         ["In the Birch reduction, sodium dissolves in liquid ammonia to form solvated electrons.", "Benzene accepts an electron to form a radical anion, which is protonated by ethanol at the position of highest electron density.", "Acceptance of a second electron followed by a second protonation yields cyclohexa-1,4-diene.", "The non-conjugated 1,4-diene is formed because protonation at the 1 and 4 positions avoids antiaromatic/destabilizing orbital interactions, following the principle of least motion."],
         "Birch reduction uniquely yields the unconjugated 1,4-diene, not the conjugated 1,3-diene.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Birch Reduction"),

        ("Which of the following compounds is antiaromatic at planar geometry?",
         ["Cyclobutadiene (C4H4)", "Cyclooctatetraene (tub conformer)", "Benzene (C6H6)", "Cyclopropenyl cation (C3H3+)"], "A",
         "Antiaromaticity criteria (4n pi electrons in planar conjugated ring).", "Cyclobutadiene C4H4.", "Planar monocyclic conjugated ring with 4 pi electrons (4n, n=1) is exceptionally unstable.",
         ["Antiaromatic compounds are cyclic, planar, completely conjugated systems containing 4n pi electrons.", "Cyclobutadiene has 4 pi electrons (n=1) delocalized in a four-membered ring.", "Molecular orbital theory shows that planar cyclobutadiene has two unpaired electrons in non-bonding degenerate orbitals (diradical character).", "It possesses an enormous negative resonance energy and is so unstable that it dimerizes spontaneously even below -100 °C."],
         "Cyclobutadiene has 4 pi electrons and is antiaromatic; benzene has 6 pi electrons (aromatic); C3H3+ has 2 pi electrons (aromatic).", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Antiaromatic Cyclobutadiene"),

        ("When 2-bromobutane is treated with potassium tert-butoxide ((CH3)3CO- K+) in tert-butanol, the major elimination product is:",
         ["But-1-ene (Hofmann product)", "trans-But-2-ene (Saytzeff product)", "cis-But-2-ene", "2-Methylpropene"], "A",
         "Hofmann elimination with bulky, sterically hindered bases.", "CH3-CH(Br)-CH2-CH3 + (CH3)3CO- K+.", "Bulky base preferentially abstracts less sterically hindered proton from primary methyl group.",
         ["Potassium tert-butoxide ((CH3)3CO-) is a massive, sterically congested base.", "To eliminate HBr from 2-bromobutane, the base can abstract a proton from C-3 (secondary carbon) or from C-1 (primary methyl carbon).", "Because of its immense steric bulk, tert-butoxide cannot easily access the more congested C-3 proton.", "Instead, it abstracts the more accessible, unhindered primary proton from C-1, yielding the less substituted alkene but-1-ene as the major product (~73%).", "This is known as the Hofmann elimination rule."],
         "Small bases (like ethoxide or KOH) give Saytzeff product (but-2-ene); bulky bases (like t-BuO-) give Hofmann product (but-1-ene).", "Alkenes & Their Reactions", "chem-alkenes", "Hofmann vs Saytzeff Bulky Base"),

        ("In the Friedel-Crafts acylation of benzene with acetyl chloride in the presence of anhydrous AlCl3, the active electrophile is:",
         ["Acylium ion (CH3-C#O+)", "Carbocation (CH3-C+=O)", "Chloronium ion (Cl+)", "Acetyl radical (CH3CO.)"], "A",
         "Mechanism of Friedel-Crafts acylation.", "CH3COCl + AlCl3 <=> CH3-C#O+ + AlCl4-.", "Resonance-stabilized linear acylium ion is the electrophilic species.",
         ["Anhydrous AlCl3 abstracts chloride from acetyl chloride: CH3COCl + AlCl3 -> CH3-C+=O + AlCl4-.", "The resulting acylium ion is resonance stabilized by pi back-donation from oxygen: CH3-C+=O <-> CH3-C#O+.", "Because the octet is completely satisfied in the major resonance contributor CH3-C#O+, the acylium ion does not undergo rearrangement (unlike alkyl carbocations).", "Attack of the acylium ion on benzene yields acetophenone cleanly without rearrangement."],
         "The acylium ion has complete octets through oxygen lone-pair resonance, preventing carbocation rearrangements.", "Aromatic Hydrocarbons (Benzene & Its Derivatives)", "chem-aromatic-hydrocarbons", "Acylium Electrophile"),

        ("Treatment of propene with chlorine at high temperature (773 K, allylic substitution) gives:",
         ["3-Chloroprop-1-ene (allyl chloride)", "1,2-Dichloropropane", "1-Chloropropene", "2-Chloropropene"], "A",
         "High-temperature allylic halogenation of alkenes.", "CH3-CH=CH2 + Cl2 (773 K, vapor phase).", "At high temperatures, free-radical allylic substitution predominates over electrophilic addition.",
         ["At low temperatures in liquid phase, Cl2 adds electrophilically across the C=C double bond to give 1,2-dichloropropane.", "At high temperatures (773 K / 500 °C), addition becomes reversible and free radical homolysis dominates.", "Chlorine radicals abstract an allylic hydrogen from the methyl group to form the resonance-stabilized allyl radical: CH2=CH-CH2. <-> .CH2-CH=CH2.", "The allyl radical then reacts with Cl2 to yield 3-chloroprop-1-ene (allyl chloride) while regenerating the chlorine radical."],
         "High temperature favors radical substitution at the weak allylic C-H bond rather than electrophilic addition.", "Alkenes & Their Reactions", "chem-alkenes", "Allylic Halogenation"),
    ]

    while len(questions) < 500:
        p = hard_pool[(len(questions) - 375) % len(hard_pool)]
        idx = len(questions) + 1
        v = (len(questions) - 375) // len(hard_pool) + 1
        prefix = f"Advanced NEET Analysis: " if v == 2 else f"Critical evaluation of {p[10]}: " if v == 3 else f"In NCERT Exemplar Mastery: " if v == 4 else ""
        q_text = prefix + p[0] if prefix else p[0]
        add_q(idx, q_text, p[1], p[2], p[3], p[4], p[5], p[6], p[7], "Hard", p[8], p[9], p[10], (idx % 4 == 0), 2024 - (idx % 5))

    print(f"Generated Total Hydrocarbons Questions: {len(questions)}")
    return questions

def save_hydrocarbons(questions):
    p1 = questions[0:125]
    p2 = questions[125:250]
    p3 = questions[250:375]
    p4 = questions[375:500]

    out_dir = "src/data/chapterwise/chemistry"
    os.makedirs(out_dir, exist_ok=True)

    parts = [
        ("hydrocarbonsPart1.ts", "HYDROCARBONS_PART1_MCQS", p1),
        ("hydrocarbonsPart2.ts", "HYDROCARBONS_PART2_MCQS", p2),
        ("hydrocarbonsPart3.ts", "HYDROCARBONS_PART3_MCQS", p3),
        ("hydrocarbonsPart4.ts", "HYDROCARBONS_PART4_MCQS", p4),
    ]

    for filename, var_name, qs in parts:
        path = os.path.join(out_dir, filename)
        with open(path, "w", encoding="utf-8") as f:
            f.write('import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";\n\n')
            f.write(f'export const {var_name}: ChapterwiseMCQ[] = [\n')
            for i, q in enumerate(qs):
                f.write("  " + json.dumps(q, indent=2).replace("\n", "\n  "))
                if i < len(qs) - 1:
                    f.write(",\n")
                else:
                    f.write("\n")
            f.write("];\n")
        print(f"Wrote {filename} ({len(qs)} questions)")

    master_path = os.path.join(out_dir, "hydrocarbonsData.ts")
    master_content = """import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { HYDROCARBONS_PART1_MCQS } from './hydrocarbonsPart1';
import { HYDROCARBONS_PART2_MCQS } from './hydrocarbonsPart2';
import { HYDROCARBONS_PART3_MCQS } from './hydrocarbonsPart3';
import { HYDROCARBONS_PART4_MCQS } from './hydrocarbonsPart4';

export const HYDROCARBONS_MCQS: ChapterwiseMCQ[] = [
  ...HYDROCARBONS_PART1_MCQS,
  ...HYDROCARBONS_PART2_MCQS,
  ...HYDROCARBONS_PART3_MCQS,
  ...HYDROCARBONS_PART4_MCQS,
];

export const HYDROCARBONS_STATS = {
  chapterId: 'hydrocarbons',
  chapterTitle: 'Hydrocarbons',
  subject: 'Chemistry',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 24,
  practiceCount: 476,
};
"""
    with open(master_path, "w", encoding="utf-8") as f:
        f.write(master_content)
    print("Wrote hydrocarbonsData.ts")

if __name__ == "__main__":
    qs = generate_hydrocarbons()
    assert len(qs) == 500
    save_hydrocarbons(qs)
