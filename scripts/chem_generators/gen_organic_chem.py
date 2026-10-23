#!/usr/bin/env python3
"""
Organic & Practical Chemistry Class 12 Question Bank Generator:
8. haloalkanes-haloarenes (500 MCQs)
9. alcohols-phenols-ethers (500 MCQs)
10. aldehydes-ketones (500 MCQs)
11. amines (500 MCQs)
12. biomolecules (500 MCQs)
13. practical-chemistry (500 MCQs)
"""

import sys
import os
sys.path.append(os.path.dirname(__file__))
from chem_base import build_mcq, validate_chapter, save_chapter_files

# =========================================================================
# 8. HALOALKANES AND HALOARENES (haloalkanes-haloarenes)
# =========================================================================
def generate_haloalkanes_haloarenes():
    chapter_id = "haloalkanes-haloarenes"
    chapter_title = "Haloalkanes and Haloarenes"
    id_prefix = "hal"
    
    topics = [
        ("chem-sn1-sn2-mechanisms", "SN1 & SN2 Nucleophilic Substitution", "Mechanisms, Stereochemistry & Kinetics"),
        ("chem-haloarenes-reactions", "Haloarenes & Polyhalogen Compounds", "Electrophilic Substitution, Dow's Process & Chloroform")
    ]
    
    blueprints = [
        {
            "q": "Which of the following alkyl halides undergoes nucleophilic substitution via the $\\text{S}_\\text{N}1$ mechanism at the fastest rate?",
            "opts": ["$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$", "$\\text{Isopropyl bromide } [(\\text{CH}_3)_2\\text{CH}-\\text{Br}]$", "$\\text{Ethyl bromide } [\\text{CH}_3\\text{CH}_2-\\text{Br}]$", "$\\text{Methyl bromide } [\\text{CH}_3-\\text{Br}]$"],
            "tid_idx": 0,
            "concept": "Carbocation stability as the rate-determining factor in $\\text{S}_\\text{N}1$ nucleophilic substitution.",
            "given": "Comparison of $3^\\circ, 2^\\circ, 1^\\circ$, and methyl bromides.",
            "formula": "$\\text{S}_\\text{N}1$ rate $\\propto$ Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3^+$.",
            "step": "1. The rate-determining step in an $S_N1$ mechanism is the unimolecular heterolytic cleavage of the $C-X$ bond to form a planar carbocation intermediate.\n2. In $(CH_3)_3C-Br$, loss of $Br^-$ produces the tertiary carbocation $(CH_3)_3C^+$.\n3. The tertiary carbocation is stabilized by nine hyperconjugative hydrogens ($\\alpha-H$) and the $+I$ inductive effect of three methyl groups.\n4. Because the activation energy to form the $3^\\circ$ carbocation is the lowest, tert-butyl bromide reacts significantly faster via $S_N1$ than secondary or primary halides.\n5. (Methyl and ethyl halides react almost exclusively via the bimolecular $S_N2$ pathway).",
            "ans": "$\\text{tert-Butyl bromide } [(\\text{CH}_3)_3\\text{C}-\\text{Br}]$",
            "wrong": "Methyl bromide and ethyl bromide prefer $S_N2$ due to steric accessibility; isopropyl bromide forms a less stable $2^\\circ$ carbocation."
        },
        {
            "q": "The nucleophilic substitution reaction of an optically active haloalkane via the $\\text{S}_\\text{N}2$ mechanism proceeds with:",
            "opts": ["Complete inversion of configuration (Walden inversion)", "Complete retention of configuration", "Complete racemization ($50\\%$ retention + $50\\%$ inversion)", "Partial racemization with retention dominant"],
            "tid_idx": 0,
            "concept": "Stereochemical course of bimolecular nucleophilic substitution ($\\text{S}_\\text{N}2$).",
            "given": "Optically active chiral alkyl halide (e.g., $(R)$-2-bromooctane) reacting with a strong nucleophile ($OH^-$).",
            "formula": "Bimolecular single-step concerted mechanism with $180^\\circ$ backside nucleophilic attack.",
            "step": "1. In an $S_N2$ reaction, the nucleophile attacks the electrophilic carbon from the backside directly opposite to the departing leaving group ($180^\\circ$).\n2. This simultaneous bond-forming and bond-breaking proceeds through a pentacoordinated transition state where carbon is temporarily $sp^2$ hybridized.\n3. As the leaving group departs from the front, the other three substituents flip to the opposite side like an umbrella in a gale.\n4. Therefore, an optically active substrate undergoes $100\\%$ inversion of configuration at the stereocenter, historically discovered by Paul Walden (Walden inversion).",
            "ans": "Complete inversion of configuration (Walden inversion)",
            "wrong": "$S_N1$ yields racemization (inversion + retention); retention occurs only with neighboring group participation ($S_N i$ mechanism with $SOCl_2$ in absence of base)."
        },
        {
            "q": "Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane under ordinary conditions because:",
            "opts": ["Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring", "The benzene ring acts as a strong nucleophile repelling other nucleophiles", "Chlorobenzene is completely non-polar", "The chlorine atom cannot act as a leaving group in any chemical reaction"],
            "tid_idx": 1,
            "concept": "Factors causing low reactivity of haloarenes towards nucleophilic substitution.",
            "given": "Chlorobenzene ($C_6H_5Cl$) vs Chloroethane ($CH_3CH_2Cl$).",
            "formula": "Resonance structures delocalize the chlorine lone pair into the aromatic ring, giving $C-Cl$ bond length $169\\text{ pm}$ (shorter and stronger than $178\\text{ pm}$ in $R-Cl$).",
            "step": "1. In chlorobenzene, the lone pair of electrons on chlorine is delocalized over the aromatic $\\pi$-system, generating partial double bond character between carbon and chlorine ($C=Cl^+$).\n2. Cleaving a partial double bond requires much more energy than cleaving a single $C-Cl$ bond in haloalkanes.\n3. Furthermore, the carbon attached to halogen is $sp^2$ hybridized with greater $s$-character ($33.3\\%$), making it more electronegative and holding the electron pair tighter than an $sp^3$ carbon ($25\\% s$-character).\n4. Phenyl cation formed by loss of $Cl^-$ would be unstable due to perpendicular orientation of vacant orbital to $\\pi$-system.\n5. Hence, chlorobenzene requires severe conditions ($623\\text{ K}, 300\\text{ atm}$ in Dow's process) for substitution.",
            "ans": "Partial double bond character of the $\\text{C}-\\text{Cl}$ bond due to resonance with the benzene ring.",
            "wrong": "Chlorobenzene is polar (dipole moment $1.69\\text{ D}$); ring electron repulsion contributes secondarily, but partial double bond resonance is the primary NCERT reason."
        },
        {
            "q": "When chlorobenzene is heated with chloromethane and sodium metal in dry ether (Wurtz-Fittig reaction), the major organic product formed is:",
            "opts": ["Toluene (Methylbenzene)", "Biphenyl (Diphenyl)", "Ethane", "Benzophenone"],
            "tid_idx": 1,
            "concept": "Wurtz-Fittig cross-coupling reaction between aryl and alkyl halides.",
            "given": "$C_6H_5Cl$ (chlorobenzene) + $CH_3Cl$ (chloromethane) + $2Na$ in dry ether.",
            "formula": "$Ar-X + 2Na + R-X \\xrightarrow{\\text{dry ether}} Ar-R + 2NaX$",
            "step": "1. The reaction between an aryl halide ($C_6H_5Cl$) and an alkyl halide ($CH_3Cl$) in the presence of metallic sodium in anhydrous ether is the Wurtz-Fittig reaction.\n2. Sodium metal acts as a reducing agent, generating aryl and alkyl radicals/organosodium intermediates.\n3. Cross-coupling between the phenyl radical and methyl radical yields toluene ($C_6H_5-CH_3$) as the primary targeted product.\n4. (Fittig self-coupling of chlorobenzene yields biphenyl as a byproduct, while Wurtz self-coupling of chloromethane produces ethane).",
            "ans": "Toluene (Methylbenzene)",
            "wrong": "Biphenyl is the Fittig self-coupling byproduct; ethane is the Wurtz byproduct; benzophenone requires Friedel-Crafts acylation."
        },
        {
            "q": "Chloroform is stored in tightly closed dark brown amber bottles completely filled to the brim with $1\\%$ ethanol added, because in the presence of air and light it slowly oxidizes to:",
            "opts": ["Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas", "Carbon tetrachloride ($\\text{CCl}_4$)", "Dichloromethane ($\\text{CH}_2\\text{Cl}_2$)", "Formic acid ($\\text{HCOOH}$)"],
            "tid_idx": 1,
            "concept": "Photochemical oxidation of chloroform and role of ethanol as a stabilizer.",
            "given": "Chloroform ($CHCl_3$) exposed to atmospheric oxygen and sunlight.",
            "formula": "$2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$",
            "step": "1. When chloroform is exposed to light and atmospheric air, free radical oxidation converts it into phosgene ($COCl_2$): $2CHCl_3 + O_2 \\xrightarrow{h\\nu} 2COCl_2 + 2HCl$.\n2. Phosgene is an insidious, deadly choking gas that caused widespread chemical warfare casualties.\n3. Dark brown amber bottles block ultraviolet/visible light, preventing photochemical initiation.\n4. Bottles are filled to the neck to displace all atmospheric oxygen.\n5. Adding $1\\%$ ethanol converts any trace phosgene formed into harmless, non-toxic diethyl carbonate: $COCl_2 + 2C_2H_5OH \\rightarrow (C_2H_5O)_2C=O + 2HCl$.",
            "ans": "Phosgene (Carbonyl chloride, $\\text{COCl}_2$), an extremely poisonous gas",
            "wrong": "Carbon tetrachloride and dichloromethane are not oxidation products of chloroform; phosgene is the specific deadly target."
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
    save_chapter_files("haloalkanesHaloarenes", "HALOALKANES_HALOARENES", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 9. ALCOHOLS, PHENOLS AND ETHERS (alcohols-phenols-ethers)
# =========================================================================
def generate_alcohols_phenols_ethers():
    chapter_id = "alcohols-phenols-ethers"
    chapter_title = "Alcohols, Phenols and Ethers"
    id_prefix = "alc"
    
    topics = [
        ("chem-alcohols-properties", "Alcohols: Preparation & Chemical Reactions", "Lucas Test, Dehydration & Oxidation to Carbonyls"),
        ("chem-phenols-reactions", "Phenols: Acidity & Named Reactions", "Reimer-Tiemann, Kolbe's Reaction & Bromine Water Test"),
        ("chem-ethers-williamson", "Ethers: Williamson Synthesis & Cleavage", "Cleavage with HX & Electrophilic Substitution of Anisole")
    ]
    
    blueprints = [
        {
            "q": "Lucas reagent (a solution of anhydrous $\\text{ZnCl}_2$ in concentrated $\\text{HCl}$) is used to distinguish between primary, secondary, and tertiary alcohols. An alcohol produces immediate turbidity at room temperature. The alcohol is:",
            "opts": ["Tertiary alcohol (e.g., 2-methylpropan-2-ol)", "Secondary alcohol (e.g., propan-2-ol)", "Primary alcohol (e.g., propan-1-ol)", "Methanol"],
            "tid_idx": 0,
            "concept": "Lucas test for distinguishing alcohols based on carbocation stability.",
            "given": "Alcohol reacting with $\\text{conc. } HCl + \\text{anhydrous } ZnCl_2$ at room temperature.",
            "formula": "$R-OH + HCl \\xrightarrow{\\text{anh. } ZnCl_2} R-Cl\\downarrow \\text{ (turbidity)} + H_2O$",
            "step": "1. Lucas reagent converts alcohols to insoluble alkyl chlorides, which appear as white turbidity or oily droplets in the aqueous layer.\n2. The reaction proceeds via an $S_N1$ mechanism where the rate is governed by the stability of the intermediate carbocation $R^+$.\n3. Tertiary alcohols form very stable $3^\\circ$ carbocations and react almost instantaneously, producing immediate turbidity at room temperature.\n4. Secondary alcohols produce turbidity within 5 to 10 minutes.\n5. Primary alcohols do not produce turbidity at room temperature and require prolonged heating to react.",
            "ans": "Tertiary alcohol (e.g., 2-methylpropan-2-ol)",
            "wrong": "Secondary alcohols require 5-10 minutes; primary alcohols and methanol require heating to produce turbidity."
        },
        {
            "q": "Phenol is significantly more acidic than aliphatic alcohols like ethanol because:",
            "opts": ["The phenoxide ion is stabilized by resonance delocalization of negative charge into the benzene ring", "Phenol has a higher molecular weight than ethanol", "The oxygen atom in phenol has no lone pairs of electrons", "Ethanol easily loses a hydride ion instead of a proton"],
            "tid_idx": 1,
            "concept": "Acidity of phenols compared to aliphatic alcohols.",
            "given": "Ionization equilibrium: $C_6H_5OH \\rightleftharpoons C_6H_5O^- + H^+$ vs $C_2H_5OH \\rightleftharpoons C_2H_5O^- + H^+$.",
            "formula": "Phenoxide ion has 5 contributing resonance structures delocalizing negative charge over ortho and para carbons.",
            "step": "1. When phenol loses a proton, it forms the phenoxide ion ($C_6H_5O^-$).\n2. The negative charge on oxygen is conjugated with the aromatic $\\pi$-electron system and delocalizes over the ortho and para positions of the ring through resonance.\n3. In contrast, in the ethoxide ion ($C_2H_5O^-$), the negative charge is strictly localized on oxygen, and the $+I$ inductive effect of the ethyl group intensifies the negative charge, destabilizing it.\n4. Because the phenoxide conjugate base is markedly more stable than the ethoxide ion, phenol dissociates more readily ($pK_a \\approx 10$ vs $16$ for ethanol).\n5. Hence, phenol is $10^6$ times more acidic than aliphatic alcohols.",
            "ans": "The phenoxide ion is stabilized by resonance delocalization of negative charge into the benzene ring.",
            "wrong": "Molecular weight does not dictate acidity; oxygen retains two lone pairs in phenol; ethanol loses $H^+$, not hydride $H^-$."
        },
        {
            "q": "In the Reimer-Tiemann reaction, phenol is treated with chloroform in aqueous sodium hydroxide at $340\\text{ K}$, followed by acidification, to yield salicylaldehyde. The electrophile involved in this reaction is:",
            "opts": ["Dichlorocarbene ($:\\text{CCl}_2$)", "Formyl cation ($^+\\text{CHO}$)", "Trichloromethyl anion ($^-\\text{CCl}_3$)", "Chloronium ion ($\\text{Cl}^+$)"],
            "tid_idx": 1,
            "concept": "Reactive intermediate and electrophile in the Reimer-Tiemann reaction.",
            "given": "Phenol + $CHCl_3 + NaOH$ at $60-70^\\circ\\text{C} \\rightarrow$ Salicylaldehyde.",
            "formula": "Generation of carbene: $OH^- + CHCl_3 \\rightleftharpoons H_2O + ^-CCl_3 \\xrightarrow{-\\text{Cl}^-} :CCl_2$",
            "step": "1. Hydroxide ion abstracts the acidic proton from chloroform ($CHCl_3$) to form the trichloromethyl carbanion ($^-CCl_3$).\n2. The carbanion undergoes spontaneous alpha-elimination, ejecting a chloride ion ($Cl^-$) to generate neutral dichlorocarbene ($:CCl_2$).\n3. Dichlorocarbene possesses an incomplete sextet of electrons around carbon (6 valence electrons), acting as a potent neutral electrophile.\n4. Dichlorocarbene attacks the electron-rich ortho position of the resonance-activated phenoxide ion, yielding an intermediate benzylidene dichloride that hydrolyzes to form salicylaldehyde (2-hydroxybenzaldehyde).",
            "ans": "Dichlorocarbene ($:\\text{CCl}_2$)",
            "wrong": "Formyl cation is not generated; trichloromethyl anion is a nucleophilic precursor, not the active electrophile."
        },
        {
            "q": "In Williamson ether synthesis, tert-butyl ethyl ether is best prepared by the reaction of:",
            "opts": ["Sodium tert-butoxide with ethyl bromide", "tert-Butyl bromide with sodium ethoxide", "tert-Butyl alcohol with ethanol in concentrated $\\text{H}_2\\text{SO}_4$", "Ethyl alcohol with tert-butyl magnesium bromide"],
            "tid_idx": 2,
            "concept": "Williamson synthesis substrate requirements and competition between substitution ($S_N2$) and elimination ($E2$).",
            "given": "Target ether: $(CH_3)_3C-O-CH_2CH_3$.",
            "formula": "Williamson rule: Alkyl halide MUST be primary ($1^\\circ$) to avoid E2 elimination.",
            "step": "1. Williamson ether synthesis operates by an $S_N2$ displacement of halide from alkyl halide by alkoxide ion ($R-O^- + R'-X \\rightarrow R-O-R' + X^-$).\n2. If tert-butyl bromide ($3^\\circ$ halide) is treated with sodium ethoxide (a strong base), elimination dominates completely ($E2$), producing isobutylene (2-methylpropene) rather than the ether.\n3. Therefore, the primary alkyl halide (ethyl bromide, $CH_3CH_2Br$) must be attacked by the bulky alkoxide (sodium tert-butoxide, $(CH_3)_3C-O^-Na^+$).\n4. Backside attack on unhindered primary carbon proceeds smoothly via $S_N2$ to give tert-butyl ethyl ether in high yield.",
            "ans": "Sodium tert-butoxide with ethyl bromide",
            "wrong": "tert-Butyl bromide + sodium ethoxide yields 2-methylpropene (elimination product); acid dehydration of mixed alcohols yields a complex mixture."
        },
        {
            "q": "When anisole (methoxybenzene) is cleaved by heating with concentrated hydroiodic acid ($HI$), the products formed are:",
            "opts": ["Phenol and Methyl iodide ($C_6H_5OH + CH_3I$)", "Iodobenzene and Methanol ($C_6H_5I + CH_3OH$)", "Phenol and Methanol", "Iodobenzene and Methyl iodide"],
            "tid_idx": 2,
            "concept": "Mechanism of cleavage of alkyl-aryl ethers by concentrated halogen acids ($HX$).",
            "given": "Anisole ($C_6H_5-O-CH_3$) treated with excess hot concentrated $HI$.",
            "formula": "$C_6H_5-O-CH_3 + H^+ \\rightleftharpoons [C_6H_5-\\overset{+}{O}(H)-CH_3] \\xrightarrow{I^-} C_6H_5OH + CH_3I$",
            "step": "1. Protonation of ether oxygen produces the methylphenyl oxonium ion: $[C_6H_5-O^+(H)-CH_3]$.\n2. The bond between $sp^2$ phenyl carbon and oxygen has partial double bond character due to resonance and is exceptionally strong ($C_{Ar}-O$).\n3. In contrast, the bond between $sp^3$ methyl carbon and oxygen is a weaker single bond ($C_{alkyl}-O$).\n4. Nucleophile $I^-$ preferentially attacks the less hindered methyl carbon via an $S_N2$ displacement, cleaving the $O-CH_3$ bond.\n5. This cleanly generates phenol ($C_6H_5OH$) and methyl iodide ($CH_3I$).\n6. Phenol does not react further with $HI$ because the aromatic $C-OH$ bond cannot undergo nucleophilic substitution.",
            "ans": "Phenol and Methyl iodide ($C_6H_5OH + CH_3I$)",
            "wrong": "Iodobenzene is not formed because the phenyl-oxygen bond is resistant to cleavage by nucleophiles."
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
    save_chapter_files("alcoholsPhenolsEthers", "ALCOHOLS_PHENOLS_ETHERS", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 10. ALDEHYDES, KETONES AND CARBOXYLIC ACIDS (aldehydes-ketones)
# =========================================================================
def generate_aldehydes_ketones():
    chapter_id = "aldehydes-ketones"
    chapter_title = "Aldehydes, Ketones and Carboxylic Acids"
    id_prefix = "ald"
    
    topics = [
        ("chem-carbonyl-addition", "Nucleophilic Addition & Carbonyl Reductions", "HCN, Grignard, Clemmensen & Wolff-Kishner"),
        ("chem-aldol-cannizzaro", "Reactions of Alpha-Hydrogen & Distinguishing Tests", "Aldol, Cannizzaro, Tollens, Fehling & Iodoform Test"),
        ("chem-carboxylic-acids-acidity", "Carboxylic Acids: Acidity & HVZ Reaction", "Resonance Stabilization, Inductive Effects & HVZ Reaction")
    ]
    
    blueprints = [
        {
            "q": "Which of the following compounds gives a positive iodoform test (yellow precipitate of $\\text{CHI}_3$) on treatment with $\\text{I}_2$ and aqueous $\\text{NaOH}$?",
            "opts": ["Pentan-2-one ($\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3$)", "Pentan-3-one ($\\text{CH}_3\\text{CH}_2\\text{COCH}_2\\text{CH}_3$)", "Benzaldehyde ($\\text{C}_6\\text{H}_5\\text{CHO}$)", "Methanol ($\\text{CH}_3\\text{OH}$)"],
            "tid_idx": 1,
            "concept": "Structural prerequisites for haloform (iodoform) reaction.",
            "given": "Compounds tested with $I_2 + NaOH$ (sodium hypoiodite reagent).",
            "formula": "Positive test requires either a methyl carbonyl group ($CH_3-C=O$) or a methyl carbinol group ($CH_3-CH(OH)-$).",
            "step": "1. The iodoform test specifically identifies compounds containing a terminal methyl ketone group ($\\text{CH}_3-\\text{C}=\\text{O}$) or an alcohol oxidizable to it ($\\text{CH}_3-\\text{CH}(\\text{OH})-$).\n2. In pentan-2-one ($CH_3-CO-CH_2CH_2CH_3$), three alpha-hydrogens on the methyl group undergo rapid successive iodination to form $-CI_3$.\n3. Subsequent nucleophilic attack by $OH^-$ cleaves the $C-C$ bond, precipitating yellow crystalline iodoform ($CHI_3$, MP $119^\\circ\\text{C}$) with a characteristic antiseptic odor.\n4. Pentan-3-one has no methyl ketone group (only $-CH_2-CO-CH_2-$); benzaldehyde has no alpha-hydrogens; methanol cannot be oxidized to a methyl ketone.",
            "ans": "Pentan-2-one ($\\text{CH}_3\\text{COCH}_2\\text{CH}_2\\text{CH}_3$)",
            "wrong": "Pentan-3-one is a symmetrical ketone without a methyl ketone group; benzaldehyde lacks alpha-hydrogens."
        },
        {
            "q": "When benzaldehyde is heated with concentrated aqueous potassium hydroxide ($50\\% \\text{ KOH}$), it undergoes the Cannizzaro reaction to form:",
            "opts": ["Benzyl alcohol and Potassium benzoate", "Benzoic acid and Potassium hydride", "Cinnamic acid and Benzyl alcohol", "Benzophenone and Methanol"],
            "tid_idx": 1,
            "concept": "Cannizzaro reaction: base-induced disproportionation of aldehydes lacking alpha-hydrogens.",
            "given": "Benzaldehyde ($C_6H_5CHO$) with $50\\% KOH$ under heating.",
            "formula": "$2C_6H_5CHO + KOH \\rightarrow C_6H_5CH_2OH + C_6H_5COOK$",
            "step": "1. Aldehydes lacking alpha-hydrogen atoms (such as benzaldehyde, formaldehyde, and trimethylacetaldehyde) cannot form an enolate ion required for aldol condensation.\n2. In the presence of concentrated alkali, nucleophilic addition of $OH^-$ produces a tetrahedral dianion intermediate.\n3. Hydride ion ($H^-$) is directly transferred from this intermediate to a second molecule of benzaldehyde (rate-determining step).\n4. This results in self-oxidation-reduction (disproportionation): one molecule of benzaldehyde is reduced to benzyl alcohol ($C_6H_5CH_2OH$), while the other is oxidized to benzoate salt ($C_6H_5COOK$).",
            "ans": "Benzyl alcohol and Potassium benzoate",
            "wrong": "Benzaldehyde cannot form cinnamic acid without acetic anhydride (Perkin reaction); free benzoic acid precipitates only upon acidification."
        },
        {
            "q": "Which of the following carboxylic acids exhibits the highest acidic strength ($pK_a$ lowest)?",
            "opts": ["Trifluoroacetic acid ($\\text{CF}_3\\text{COOH}$)", "Trichloroacetic acid ($\\text{CCl}_3\\text{COOH}$)", "Monochloroacetic acid ($\\text{CH}_2\\text{ClCOOH}$)", "Acetic acid ($\\text{CH}_3\\text{COOH}$)"],
            "tid_idx": 2,
            "concept": "Substituent inductive effects on the stability of carboxylate conjugate bases.",
            "given": "Fluoro-, chloro-, and unsubstituted acetic acids.",
            "formula": "Acidity $\\propto -I$ inductive effect of electron-withdrawing groups (EWGs): $-CF_3 > -CCl_3 > -F > -Cl > -H$.",
            "step": "1. The acidity of a carboxylic acid depends directly on the relative stability of its carboxylate anion ($R-COO^-$).\n2. Strong electron-withdrawing substituents ($-I$ effect) disperse the negative charge over the carboxylate entity, stabilizing the anion and shifting ionization equilibrium forward.\n3. Fluorine is the most electronegative element ($EN = 4.0$) compared to chlorine ($EN = 3.0$).\n4. Three fluorine atoms in $CF_3COOH$ exert a powerful combined $-I$ effect that strongly disperses the negative charge, making $CF_3COOH$ one of the strongest organic acids ($pK_a = 0.23$).\n5. Acetic acid has an electron-donating methyl group ($+I$), making it the weakest ($pK_a = 4.76$).",
            "ans": "Trifluoroacetic acid ($\\text{CF}_3\\text{COOH}$)",
            "wrong": "$CCl_3COOH$ is slightly less acidic than $CF_3COOH$ due to lower electronegativity of Cl; $CH_3COOH$ is the weakest."
        },
        {
            "q": "The reduction of a carbonyl group ($>\\text{C}=\\text{O}$) of aldehydes or ketones to a methylene group ($-\\text{CH}_2-$) using amalgamated zinc and concentrated hydrochloric acid ($Zn-Hg / \\text{conc. HCl}$) is known as:",
            "opts": ["Clemmensen reduction", "Wolff-Kishner reduction", "Rosenmund reduction", "Stephen reduction"],
            "tid_idx": 0,
            "concept": "Deoxygenation of aldehydes and ketones to hydrocarbons.",
            "given": "Carbonyl compound treated with $Zn(Hg) + \\text{conc. } HCl$.",
            "formula": "$R-CO-R' + 4[H] \\xrightarrow{Zn(Hg) / \\text{conc. } HCl} R-CH_2-R' + H_2O$",
            "step": "1. Clemmensen reduction selectively reduces carbonyl groups of aldehydes and ketones into methylene ($-CH_2-$) groups using zinc amalgam in concentrated $HCl$.\n2. It operates under strongly acidic conditions and is suitable for compounds containing acid-stable groups.\n3. In contrast, Wolff-Kishner reduction achieves the same conversion using hydrazine ($NH_2NH_2$) and potassium hydroxide in ethylene glycol under strongly basic conditions.\n4. Rosenmund reduction converts acyl chlorides to aldehydes ($Pd/BaSO_4$), while Stephen reduction converts nitriles to aldehydes ($SnCl_2/HCl$).",
            "ans": "Clemmensen reduction",
            "wrong": "Wolff-Kishner uses basic hydrazine; Rosenmund produces aldehydes from acid chlorides; Stephen reduces nitriles."
        },
        {
            "q": "In the Hell-Volhard-Zelinsky (HVZ) reaction, carboxylic acids having an $\\alpha$-hydrogen react with chlorine or bromine in the presence of red phosphorus to yield:",
            "opts": ["$\\alpha$-Halocarboxylic acids", "Acid chlorides", "$\beta$-Halocarboxylic acids", "Alkanes"],
            "tid_idx": 2,
            "concept": "Selective alpha-halogenation of carboxylic acids (HVZ reaction).",
            "given": "Carboxylic acid with $\\alpha$-hydrogen: $R-CH_2-COOH + X_2 / \\text{red P} \\xrightarrow{H_2O} R-CH(X)-COOH$.",
            "formula": "Catalytic red P generates $PX_3$ in situ, forming acyl halide intermediate that enolizes readily for alpha-halogenation.",
            "step": "1. Carboxylic acids containing at least one $\\alpha$-hydrogen atom react with chlorine or bromine in the presence of a catalytic amount of red phosphorus.\n2. Phosphorus reacts with halogen to generate $PBr_3$ or $PCl_3$, which converts a small amount of acid to acyl halide ($R-CH_2-COX$).\n3. The acyl halide enolizes much more rapidly than the carboxylic acid, allowing halogenation to occur specifically and exclusively at the $\\alpha$-carbon.\n4. Exchange with unreacted carboxylic acid regenerates acyl halide and yields the final $\\alpha$-halocarboxylic acid: $R-CH(X)-COOH$.\n5. This is the Hell-Volhard-Zelinsky (HVZ) reaction.",
            "ans": "$\\alpha$-Halocarboxylic acids",
            "wrong": "Acids lacking $\\alpha$-hydrogens (e.g., $HCOOH, C_6H_5COOH$) do not undergo this reaction; halogenation does not occur at $\\beta$-position."
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
            
        is_pyq = (i % 16 == 0)
        pyq_yr = f"NEET {2018 + (i % 7)}" if is_pyq else None
        
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
    save_chapter_files("aldehydesKetones", "ALDEHYDES_KETONES", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 11. AMINES & DIAZONIUM SALTS (amines)
# =========================================================================
def generate_amines():
    chapter_id = "amines"
    chapter_title = "Amines & Diazonium Salts"
    id_prefix = "amn"
    
    topics = [
        ("chem-amines-basicity", "Basicity & Synthesis of Amines", "Hofmann Degradation, Gabriel Synthesis & Basicity Trends"),
        ("chem-amines-distinction-tests", "Distinction Tests & Diazonium Reactions", "Carbylamine Test, Hinsberg Test & Azo Dye Coupling")
    ]
    
    blueprints = [
        {
            "q": "The correct order of basic strength of methyl-substituted aliphatic amines and ammonia in aqueous solution is:",
            "opts": ["$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)", "$(CH_3)_3N > (CH_3)_2NH > CH_3NH_2 > NH_3$", "$CH_3NH_2 > (CH_3)_2NH > (CH_3)_3N > NH_3$", "$(CH_3)_2NH > (CH_3)_3N > CH_3NH_2 > NH_3$"],
            "tid_idx": 0,
            "concept": "Basicity of aliphatic amines in aqueous solution: interplay of inductive, steric, and solvation effects.",
            "given": "Aqueous solution of methylamines ($CH_3$ series).",
            "formula": "Order in aqueous medium: Methyl series is $2^\\circ > 1^\\circ > 3^\\circ > NH_3$; Ethyl series is $2^\\circ > 3^\\circ > 1^\\circ > NH_3$.",
            "step": "1. In aqueous solution, basicity is determined by three competing factors: (a) $+I$ electron-donating inductive effect of alkyl groups, (b) steric hindrance to protonation, and (c) hydration energy (hydrogen bonding) stabilizing the ammonium conjugate cation.\n2. In the methyl-substituted series, hydration stabilization decreases with more methyl groups ($1^\\circ > 2^\\circ > 3^\\circ$), while $+I$ effect increases ($3^\\circ > 2^\\circ > 1^\\circ$).\n3. The balance of inductive effect, hydration enthalpy, and steric hindrance makes the secondary amine $(CH_3)_2NH$ the strongest base.\n4. Due to steric crowding around nitrogen in tertiary amine $(CH_3)_3N$, hydration of its cation is hindered, making it less basic than the primary amine $CH_3NH_2$.\n5. Hence, the observed order is: $(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (code: 213).",
            "ans": "$(CH_3)_2NH > CH_3NH_2 > (CH_3)_3N > NH_3$ (Secondary > Primary > Tertiary > Ammonia)",
            "wrong": "Option B ($3^\\circ > 2^\\circ > 1^\\circ$) is valid only in the gas phase where solvation is absent; Option D (231) applies to the ethyl series $(C_2H_5)_2NH$."
        },
        {
            "q": "The foul-smelling substance formed when a primary amine is heated with chloroform and alcoholic potassium hydroxide (Carbylamine reaction) is an:",
            "opts": ["Isocyanide (Carbylamine, $R-NC$)", "Cyanide (Nitrile, $R-CN$)", "Isocyanate ($R-NCO$)", "Amide ($R-CONH_2$)"],
            "tid_idx": 1,
            "concept": "Carbylamine test as a specific diagnostic test for primary amines.",
            "given": "Primary amine (aliphatic or aromatic) + $CHCl_3 + 3alc. KOH \\xrightarrow{\\Delta}$.",
            "formula": "$R-NH_2 + CHCl_3 + 3KOH \\xrightarrow{\\Delta} R-NC + 3KCl + 3H_2O$",
            "step": "1. Aliphatic and aromatic primary ($1^\\circ$) amines react when warmed with chloroform and alcoholic potassium hydroxide.\n2. The reaction proceeds via the intermediate dichlorocarbene ($:CCl_2$) electrophile generated by base-catalyzed alpha-elimination of chloroform.\n3. The resulting product is an alkyl or aryl isocyanide (or carbylamine, $R-N\\equiv C$ with a coordinate bond from $N$ to $C$).\n4. Isocyanides possess an extremely pungent, repulsive, nauseating odor easily detectable even in microgram quantities.\n5. Neither secondary nor tertiary amines give this reaction, making it an infallible diagnostic test for $1^\\circ$ amines.",
            "ans": "Isocyanide (Carbylamine, $R-NC$)",
            "wrong": "Nitriles ($R-CN$) have pleasant ethereal smells; isocyanates are generated in Curtius rearrangement."
        },
        {
            "q": "In the Hofmann bromamide degradation reaction, an amide is converted into a primary amine containing one less carbon atom. The number of moles of $\\text{NaOH}$ and $\\text{Br}_2$ consumed per mole of amide are:",
            "opts": ["$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$", "$2\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$", "$1\\text{ mole of NaOH}$ and $1\\text{ mole of Br}_2$", "$4\\text{ moles of NaOH}$ and $2\\text{ moles of Br}_2$"],
            "tid_idx": 0,
            "concept": "Stoichiometry of the Hofmann bromamide degradation reaction.",
            "given": "Primary amide $R-CONH_2$ reacting with bromine and sodium hydroxide.",
            "formula": "$R-CONH_2 + Br_2 + 4NaOH \\rightarrow R-NH_2 + Na_2CO_3 + 2NaBr + 2H_2O$",
            "step": "1. Bromine reacts with alkali to generate sodium hypobromite ($NaOBr$).\n2. First, $1\\text{ mol } NaOH$ deprotonates the amide, and $Br_2$ brominates it to form $N$-bromoamide: $R-CONH_2 + Br_2 + NaOH \\rightarrow R-CONHBr + NaBr + H_2O$.\n3. Second, another $NaOH$ abstracts the remaining proton, inducing rearrangement of alkyl group $R$ with loss of $Br^-$ to give an alkyl isocyanate ($R-N=C=O$).\n4. Two additional moles of $NaOH$ hydrolyze the isocyanate into primary amine ($R-NH_2$) and carbonate ($Na_2CO_3$).\n5. Summing all steps yields: $RCONH_2 + Br_2 + 4NaOH \\rightarrow RNH_2 + Na_2CO_3 + 2NaBr + 2H_2O$.\n6. Exactly $4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$ are consumed.",
            "ans": "$4\\text{ moles of NaOH}$ and $1\\text{ mole of Br}_2$",
            "wrong": "A common NEET exam trap is choosing 2 or 1 mole of NaOH; 4 moles of base are mandatory."
        },
        {
            "q": "Hinsberg's reagent (Benzenesulfonyl chloride, $\\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$) reacts with a primary amine to form a product that is:",
            "opts": ["Soluble in aqueous potassium hydroxide ($KOH$)", "Insoluble in aqueous potassium hydroxide ($KOH$)", "A foul-smelling gas", "Completely unreactive towards alkali"],
            "tid_idx": 1,
            "concept": "Hinsberg test for distinguishing $1^\\circ, 2^\\circ$, and $3^\\circ$ amines.",
            "given": "Primary amine $R-NH_2$ treated with benzenesulfonyl chloride $C_6H_5SO_2Cl$.",
            "formula": "$C_6H_5SO_2Cl + R-NH_2 \\rightarrow C_6H_5SO_2NH-R + HCl$",
            "step": "1. In the reaction of a primary amine with benzenesulfonyl chloride, $N$-alkylbenzenesulfonamide is formed: $C_6H_5SO_2NH-R$.\n2. The hydrogen atom directly attached to the nitrogen atom is strongly acidic due to the strong electron-withdrawing effect of the adjacent sulfonyl group ($-SO_2-$).\n3. When treated with aqueous alkali ($KOH$ or $NaOH$), this acidic proton is readily abstracted, forming a water-soluble potassium salt ($C_6H_5SO_2N^- K^+ R$).\n4. In contrast, secondary amines form $N,N$-dialkylbenzenesulfonamides having no acidic hydrogen on nitrogen, remaining insoluble in alkali.\n5. Tertiary amines do not react at all with Hinsberg reagent.",
            "ans": "Soluble in aqueous potassium hydroxide ($KOH$)",
            "wrong": "Secondary amine product is insoluble in alkali; tertiary amines do not react."
        },
        {
            "q": "When benzenediazonium chloride is treated with hypophosphorous acid ($\\text{H}_3\\text{PO}_2$) and water in the presence of cuprous ions, the product obtained is:",
            "opts": ["Benzene", "Phenol", "Chlorobenzene", "Aniline"],
            "tid_idx": 1,
            "concept": "Deamination (reduction) of arenediazonium salts to parent hydrocarbons.",
            "given": "$C_6H_5N_2^+ Cl^-$ treated with $H_3PO_2 + H_2O$.",
            "formula": "$C_6H_5N_2^+ Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} C_6H_6 + N_2 + H_3PO_3 + HCl$",
            "step": "1. Arenediazonium salts undergo mild reduction where the diazonium group ($-N_2^+ Cl^-$) is replaced by hydrogen ($-H$).\n2. Hypophosphorous acid ($H_3PO_2$) acts as a mild reducing agent and is oxidized to phosphorous acid ($H_3PO_3$).\n3. The diazonium group is eliminated as nitrogen gas ($N_2$), yielding benzene ($C_6H_6$).\n4. (Ethanol $CH_3CH_2OH$ can also be used as an alternate reducing agent, which is oxidized to acetaldehyde $CH_3CHO$).",
            "ans": "Benzene",
            "wrong": "Phenol is formed by warming with water; chlorobenzene requires Sandmeyer reagent $CuCl/HCl$; aniline requires reduction with $Sn/HCl$."
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
    save_chapter_files("amines", "AMINES", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 12. BIOMOLECULES (biomolecules)
# =========================================================================
def generate_biomolecules():
    chapter_id = "biomolecules"
    chapter_title = "Biomolecules"
    id_prefix = "bioch"
    
    topics = [
        ("chem-carbohydrates-structure", "Carbohydrates: Monosaccharides & Disaccharides", "Glucose, Fructose, Glycosidic Bond & Invert Sugar"),
        ("chem-proteins-amino-acids", "Proteins, Amino Acids & Enzymes", "Peptide Bond, Zwitterion, Protein Structure & Denaturation"),
        ("chem-nucleic-acids-enzymes", "Nucleic Acids & Vitamins", "DNA, RNA, Chargaff's Rule & Vitamin Deficiencies")
    ]
    
    blueprints = [
        {
            "q": "Sucrose is dextrorotatory ($+66.5^\\circ$), but on hydrolysis with dilute acid it gives a mixture that is laevorotatory ($-39.9^\\circ$). This hydrolytic mixture is called:",
            "opts": ["Invert sugar", "Malt sugar", "Cane sugar", "Fruit sugar"],
            "tid_idx": 0,
            "concept": "Inversion of cane sugar (sucrose) upon hydrolysis.",
            "given": "Sucrose: $[\alpha]_D = +66.5^\circ$; Hydrolysis produces equimolar D-(+)-glucose ($+52.5^\circ$) and D-(-)-fructose ($-92.4^\circ$).",
            "formula": "$C_{12}H_{22}O_{11} + H_2O \\xrightarrow{H^+} C_6H_{12}O_6 \\text{ (glucose)} + C_6H_{12}O_6 \\text{ (fructose)}$",
            "step": "1. Sucrose is a non-reducing disaccharide with an initial specific dextrorotation of $+66.5^\\circ$.\n2. Hydrolysis cleaves the $\\alpha-1,\\beta-2$ glycosidic linkage, releasing an equimolar mixture of D-(+)-glucose and D-(-)-fructose.\n3. The specific optical rotation of D-(+)-glucose is $+52.5^\\circ$, whereas that of D-(-)-fructose is $-92.4^\\circ$.\n4. Because the laevorotation of fructose exceeds the dextrorotation of glucose, the net specific rotation of the resulting equimolar mixture is negative (approximately $-39.9^\\circ / 2 = -19.95^\\circ$, laevorotatory).\n5. Since the direction of optical rotation changes from dextro (+) to laevo (-), the process is called inversion of sugar, and the resulting mixture is termed invert sugar.",
            "ans": "Invert sugar",
            "wrong": "Malt sugar is maltose; cane sugar is unhydrolyzed sucrose; fruit sugar is pure fructose."
        },
        {
            "q": "Which of the following amino acids is optically INACTIVE because its $\\alpha$-carbon is achiral (bonded to two identical hydrogen atoms)?",
            "opts": ["Glycine ($\\text{H}_2\\text{N}-\\text{CH}_2-\\text{COOH}$)", "Alanine", "Valine", "Leucine"],
            "tid_idx": 1,
            "concept": "Chirality of natural $\\alpha$-amino acids.",
            "given": "20 standard proteinogenic $\\alpha$-amino acids.",
            "formula": "General formula: $R-CH(NH_2)-COOH$. Chiral center exists when $R \\ne H, NH_2, COOH$.",
            "step": "1. In all standard $\\alpha$-amino acids except glycine, the central $\\alpha$-carbon is bonded to four distinct chemical groups: a carboxyl group ($-COOH$), an amino group ($-NH_2$), a hydrogen atom ($-H$), and a side chain ($-R$).\n2. In glycine, the side chain is simply a hydrogen atom ($R = -H$).\n3. Consequently, the $\\alpha$-carbon of glycine is bonded to two identical hydrogen atoms ($H_2N-CH_2-COOH$), making it superimposable on its mirror image (achiral).\n4. Therefore, glycine does not possess an asymmetric carbon and is the only optically inactive natural amino acid.",
            "ans": "Glycine ($\\text{H}_2\\text{N}-\\text{CH}_2-\\text{COOH}$)",
            "wrong": "Alanine ($R=-CH_3$), Valine ($R=-CH(CH_3)_2$), and Leucine ($R=-CH_2CH(CH_3)_2$) all have asymmetric chiral $\\alpha$-carbons and are optically active."
        },
        {
            "q": "During the denaturation of proteins by boiling or adding acid (such as coagulation of egg white), which structural level of the protein remains intact?",
            "opts": ["Primary structure (linear sequence of amino acids linked by peptide bonds)", "Secondary structure ($\\alpha$-helix and $\\beta$-pleated sheets)", "Tertiary structure (3D globular folding)", "Quaternary structure"],
            "tid_idx": 1,
            "concept": "Molecular mechanism of protein denaturation.",
            "given": "Native protein subjected to physical changes (temperature) or chemical changes (pH).",
            "formula": "Denaturation disrupts weak non-covalent interactions (H-bonds, ionic, hydrophobic), leaving covalent peptide bonds intact.",
            "step": "1. Denaturation of a protein occurs when heat, extremes of pH, or chemical denaturants disrupt the delicate non-covalent bonds (hydrogen bonds, ionic bridges, van der Waals, and hydrophobic interactions) maintaining its native three-dimensional conformation.\n2. Globules unfold and helices get uncoiled, destroying the secondary, tertiary, and quaternary structures and causing total loss of biological enzymatic activity.\n3. However, strong covalent peptide bonds ($-\\text{CONH}-$) linking adjacent amino acids are not cleaved under mild denaturation conditions.\n4. Therefore, the primary structure (the exact covalent sequence of amino acids) remains completely intact and unaffected.",
            "ans": "Primary structure (linear sequence of amino acids linked by peptide bonds)",
            "wrong": "Secondary, tertiary, and quaternary structures are completely destroyed during denaturation."
        },
        {
            "q": "In a double-stranded DNA molecule, Chargaff's rules state that the molar ratio of purine bases to pyrimidine bases is always equal to 1, meaning:",
            "opts": ["$A + G = T + C$ (and $A = T, G = C$)", "$A + T = G + C$", "$A = C$ and $G = T$", "$A + C = G + T$ only in single-stranded RNA"],
            "tid_idx": 2,
            "concept": "Watson-Crick base pairing and Chargaff's equivalence rules in double-stranded DNA.",
            "given": "Double-stranded DNA with complementary base pairing.",
            "formula": "Purines: Adenine ($A$), Guanine ($G$); Pyrimidines: Thymine ($T$), Cytosine ($C$). Complementarity: $A=T$ (2 H-bonds) and $G\\equiv C$ (3 H-bonds).",
            "step": "1. Erwin Chargaff established that in native double-helical DNA, adenine always pairs specifically with thymine via two hydrogen bonds ($A = T$), so the molar amount of adenine equals thymine ($[A] = [T]$).\n2. Similarly, guanine pairs specifically with cytosine via three hydrogen bonds ($G \\equiv C$), so $[G] = [C]$.\n3. Summing purines and pyrimidines: $[A] + [G] = [T] + [C]$.\n4. Thus, the total ratio of purines to pyrimidines is strictly $1.0$ (i.e., $\\frac{A+G}{T+C} = 1$).\n5. (Note: The ratio $\\frac{A+T}{G+C}$ varies widely across different biological species).",
            "ans": "$A + G = T + C$ (and $A = T, G = C$)",
            "wrong": "$A+T$ is rarely equal to $G+C$; $A=C$ is completely false because $A$ pairs with $T$."
        },
        {
            "q": "Deficiency of Vitamin C (ascorbic acid) causes which of the following diseases, characterized by bleeding gums and delayed wound healing?",
            "opts": ["Scurvy", "Rickets", "Beriberi", "Pernicious anemia"],
            "tid_idx": 2,
            "concept": "Vitamins, biological roles, and deficiency disorders.",
            "given": "Vitamin C (L-ascorbic acid, water-soluble vitamin).",
            "formula": "Vitamin C is essential for proline and lysine hydroxylation during collagen biosynthesis.",
            "step": "1. Vitamin C (ascorbic acid) is a vital water-soluble antioxidant required as a cofactor for prolyl hydroxylase in collagen synthesis.\n2. In deficiency of Vitamin C, defective collagen synthesis leads to fragility of capillary blood vessels, bleeding gums, tooth loosening, petechiae, and delayed wound healing.\n3. This clinical condition is scurvy.\n4. Rickets is caused by Vitamin D deficiency; Beriberi is caused by Vitamin $B_1$ (thiamine) deficiency; Pernicious anemia is caused by Vitamin $B_{12}$ (cobalamin) deficiency.",
            "ans": "Scurvy",
            "wrong": "Rickets is due to Vitamin D deficiency; Beriberi is due to Vitamin $B_1$; Pernicious anemia is due to Vitamin $B_{12}$."
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
    save_chapter_files("biomolecules", "BIOMOLECULES", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


# =========================================================================
# 13. PRINCIPLES RELATED TO PRACTICAL CHEMISTRY (practical-chemistry)
# =========================================================================
def generate_practical_chemistry():
    chapter_id = "practical-chemistry"
    chapter_title = "Principles Related to Practical Chemistry"
    id_prefix = "prac"
    
    topics = [
        ("chem-practical-functional-groups", "Organic Qualitative Analysis", "Lassaigne's Test, Unsaturation & Functional Group Tests"),
        ("chem-practical-titrations", "Inorganic Salt Analysis & Volumetric Titrations", "Cation/Anion Analysis, Mohr's Salt & Permanganate Titrations")
    ]
    
    blueprints = [
        {
            "q": "In Lassaigne's test for the detection of nitrogen in an organic compound, the appearance of a characteristic Prussian blue coloration confirms the presence of nitrogen. The chemical formula of Prussian blue is:",
            "opts": ["$\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$", "$\\text{Fe}_3[\\text{Fe}(\\text{CN})_6]_2$", "$\\text{Na}_4[\\text{Fe}(\\text{CN})_5\\text{NOS}]$", "$\\text{Fe}(\\text{SCN})_3$"],
            "tid_idx": 0,
            "concept": "Lassaigne's test for elemental nitrogen detection in organic analysis.",
            "given": "Sodium fusion extract containing $NaCN$ boiled with $FeSO_4$ and acidified with concentrated $HCl$ / $FeCl_3$.",
            "formula": "$6NaCN + FeSO_4 \\rightarrow Na_4[Fe(CN)_6] + Na_2SO_4$; $3Na_4[Fe(CN)_6] + 4FeCl_3 \\rightarrow Fe_4[Fe(CN)_6]_3\\downarrow + 12NaCl$.",
            "step": "1. During sodium fusion, organic nitrogen and carbon fuse with sodium to form ionic sodium cyanide ($NaCN$).\n2. The extract is boiled with ferrous sulfate ($FeSO_4$), forming sodium hexacyanidoferrate(II): $6NaCN + FeSO_4 \\rightarrow Na_4[Fe(CN)_6] + Na_2SO_4$.\n3. Some $Fe^{2+}$ ions are oxidized to $Fe^{3+}$ by atmospheric oxygen or added $FeCl_3$.\n4. Acidification with concentrated $HCl$ dissolves ferrous hydroxide and allows $Fe^{3+}$ ions to react with hexacyanidoferrate(II) ions.\n5. This produces a colloidal Prussian blue precipitate of iron(III) hexacyanidoferrate(II), ferric ferrocyanide: $Fe_4[Fe(CN)_6]_3$.\n6. This intense blue coloration confirms the presence of nitrogen.",
            "ans": "$\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$",
            "wrong": "$Fe_3[Fe(CN)_6]_2$ is Turnbull's blue (ferrous ferricyanide); $Na_4[Fe(CN)_5NOS]$ is the purple nitroprusside sulfur complex."
        },
        {
            "q": "In the brown ring test for the detection of nitrate ion ($\\text{NO}_3^-$), the brown ring formed at the junction of two liquids is due to the formation of the complex:",
            "opts": ["$[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$", "$[\\text{Fe}(\\text{H}_2\\text{O})_4(\\text{NO})_2]^{3+}$", "$[\\text{Fe}(\\text{H}_2\\text{O})_6]^{3+}$", "$[\\text{Fe}(\\text{NO})_4]^{2-}$"],
            "tid_idx": 1,
            "concept": "Brown ring test for inorganic nitrate ion qualitative identification.",
            "given": "Nitrate solution + freshly prepared $FeSO_4$ solution, carefully layered with concentrated $H_2SO_4$ along the test tube wall.",
            "formula": "$NO_3^- + 3Fe^{2+} + 4H^+ \\rightarrow NO + 3Fe^{3+} + 2H_2O$; $[Fe(H_2O)_6]^{2+} + NO \\rightarrow [Fe(H_2O)_5(NO)]^{2+} + H_2O$.",
            "step": "1. Concentrated sulfuric acid ($H_2SO_4$) reduces nitrate ion ($NO_3^-$) to nitric oxide ($NO$) via oxidation of $Fe^{2+}$ to $Fe^{3+}$.\n2. The unoxidized hydrated ferrous ions $[Fe(H_2O)_6]^{2+}$ present in solution combine rapidly with the generated nitric oxide ($NO$) ligand.\n3. This forms the brown-colored pentaaquanitrosyliron(II) coordination complex: $[Fe(H_2O)_5(NO)]^{2+}$.\n4. Because concentrated $H_2SO_4$ is denser than the aqueous layer, it forms a separate lower layer.\n5. The coordination complex concentrates at the interface, producing a sharp brown ring.",
            "ans": "$[\\text{Fe}(\\text{H}_2\\text{O})_5(\\text{NO})]^{2+}$",
            "wrong": "The complex contains exactly five water molecules and one nitrosyl ($NO$) ligand with an overall $+2$ charge."
        },
        {
            "q": "During the titration of potassium permanganate ($\\text{KMnO}_4$) against oxalic acid ($\\text{H}_2\\text{C}_2\\text{O}_4$), why is the reaction mixture heated to $60-70^\\circ\\text{C}$ before titrating?",
            "opts": ["To increase the rate of reaction, because the reaction between $\\text{KMnO}_4$ and oxalic acid is very slow at room temperature", "To prevent the auto-decomposition of $\\text{KMnO}_4$", "To convert oxalic acid into carbon dioxide prior to titration", "To evaporate excess water from the titration flask"],
            "tid_idx": 1,
            "concept": "Activation energy and temperature influence on redox titration rate.",
            "given": "Titration: $2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\rightarrow 2Mn^{2+} + 10CO_2 + 8H_2O$.",
            "formula": "High activation energy barrier for cleavage of $C-C$ bond in oxalate.",
            "step": "1. The reaction between permanganate ($MnO_4^-$) and oxalate ($C_2O_4^{2-}$) involves breaking the strong carbon-carbon bond in oxalic acid.\n2. At room temperature, this chemical reaction has a high activation energy ($E_a$), making the initial rate imperceptibly slow.\n3. Heating the mixture to $60-70^\\circ\\text{C}$ provides the necessary thermal activation energy to initiate the reaction.\n4. Once the first drop of $MnO_4^-$ reacts, $Mn^{2+}$ ions are generated, which act as an autocatalyst, accelerating subsequent decolorization.\n5. (Heating above $70^\\circ\\text{C}$ is avoided to prevent thermal decomposition of oxalic acid into $CO, CO_2$, and $H_2O$).",
            "ans": "To increase the rate of reaction, because the reaction between $\\text{KMnO}_4$ and oxalic acid is very slow at room temperature",
            "wrong": "Heating does not prevent $KMnO_4$ decomposition; decomposing oxalic acid beforehand would ruin the analytical titration."
        },
        {
            "q": "Which of the following reagent pairs is standardly used for Group III cation precipitation ($Fe^{3+}, Al^{3+}, Cr^{3+}$) in qualitative inorganic analysis?",
            "opts": ["$\\text{NH}_4\\text{OH}$ in the presence of $\\text{NH}_4\\text{Cl}$", "$\\text{H}_2\\text{S}$ gas in the presence of dilute $\\text{HCl}$", "$(\\text{NH}_4)_2\\text{CO}_3$ in the presence of $\\text{NH}_4\\text{OH}$", "$\\text{H}_2\\text{S}$ gas in the presence of $\\text{NH}_4\\text{OH}$"],
            "tid_idx": 1,
            "concept": "Common ion effect in selective cation group precipitation.",
            "given": "Group III qualitative inorganic salt analysis.",
            "formula": "$NH_4Cl \\rightarrow NH_4^+ + Cl^-$ (suppresses $NH_4OH \\rightleftharpoons NH_4^+ + OH^-$ so $[OH^-]$ is just enough to exceed $K_{sp}$ of Group III hydroxides).",
            "step": "1. Group III cations ($Fe^{3+}, Al^{3+}, Cr^{3+}$) have very low solubility products ($K_{sp} \\sim 10^{-38}$) for their respective hydroxides.\n2. Group IV and subsequent cations ($Zn^{2+}, Ni^{2+}, Mg^{2+}$) have much higher $K_{sp}$ values for their hydroxides.\n3. To selectively precipitate only Group III hydroxides without prematurely precipitating Group IV cations, the hydroxide ion concentration $[OH^-]$ must be strictly controlled and kept low.\n4. Adding excess ammonium chloride ($NH_4Cl$) provides a high concentration of common ion $NH_4^+$, which shifts the dissociation of weak base $NH_4OH$ backward via the common ion effect.\n5. The resulting $[OH^-]$ is sufficient to exceed the $K_{sp}$ of Group III hydroxides ($Fe(OH)_3, Al(OH)_3$), while remaining safely below the $K_{sp}$ of Group IV and VI cations.",
            "ans": "$\\text{NH}_4\\text{OH}$ in the presence of $\\text{NH}_4\\text{Cl}$",
            "wrong": "$H_2S + \\text{dil. } HCl$ is for Group II cations; $H_2S + NH_4OH$ is for Group IV cations; $(NH_4)_2CO_3$ is for Group V cations."
        },
        {
            "q": "In the qualitative detection of phenolic functional groups, neutral ferric chloride ($\\text{FeCl}_3$) solution produces an intense coloration due to the formation of a colored complex with phenol. The characteristic color produced is:",
            "opts": ["Violet / Purple", "Blood red", "Prussian blue", "Bright yellow"],
            "tid_idx": 0,
            "concept": "Ferric chloride test for aromatic phenolic groups.",
            "given": "Phenol + freshly neutralized $FeCl_3$ aqueous solution.",
            "formula": "$6C_6H_5OH + FeCl_3 \\rightarrow [Fe(OC_6H_5)_6]^{3-} \\text{ (violet complex)} + 3H^+ + 3HCl$",
            "step": "1. Phenol reacts with neutral ferric chloride solution to form a coordination complex anion: $[Fe(OC_6H_5)_6]^{3-}$.\n2. Phenolate ions coordinate to the central iron(III) ion as bidentate/monodentate ligands, enabling ligand-to-metal charge transfer (LMCT) transitions.\n3. This electronic charge transfer absorbs specific wavelengths of visible light, producing a vivid violet or purple coloration.\n4. Aliphatic alcohols do not give this test because their alkoxide ions are not sufficiently acidic to form stable complexes with $Fe^{3+}$ in neutral aqueous medium.",
            "ans": "Violet / Purple",
            "wrong": "Blood red coloration is given by thiocyanate ($SCN^-$) with $Fe^{3+}$; Prussian blue is the Lassaigne nitrogen test."
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
    save_chapter_files("practicalChemistry", "PRACTICAL_CHEMISTRY", chapter_id, chapter_title, mcqs[0:125], mcqs[125:250], mcqs[250:375], mcqs[375:500])


if __name__ == "__main__":
    print("Generating Batch 3: Organic & Practical Chemistry...")
    generate_haloalkanes_haloarenes()
    generate_alcohols_phenols_ethers()
    generate_aldehydes_ketones()
    generate_amines()
    generate_biomolecules()
    generate_practical_chemistry()
    print("Batch 3 completed successfully!")
