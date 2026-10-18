# Biomolecules Part 3: Q251 to Q375 (Medium)
import json

def get_part3_raw():
    return [
    {
        "q_num": 251,
        "q": "Agarose, widely utilized as a supporting matrix in gel electrophoresis to separate DNA fragments, is extracted from:",
        "opts": {
            "A": "Red algae (Gelidium and Gracilaria)",
            "B": "Brown algae (Fucus and Laminaria)",
            "C": "Green algae (Chlamydomonas)",
            "D": "Arthropod exoskeletons"
        },
        "ans": "A",
        "exp": "Agarose is a natural linear galactan polymer extracted from agar produced by red seaweeds Gelidium and Gracilaria.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 252,
        "q": "Agarose is chemically a repeating polymer of agarobiose, which consists of:",
        "opts": {
            "A": "D-galactose and 3,6-anhydro-L-galactopyranose",
            "B": "Two alpha-D-glucose units",
            "C": "N-acetylglucosamine and N-acetylmuramic acid",
            "D": "Fructose and ribose"
        },
        "ans": "A",
        "exp": "Agarose is a neutral polysaccharide consisting of repeating disaccharide units of agarobiose (D-galactose and 3,6-anhydro-L-galactopyranose).",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 253,
        "q": "Bacterial cell wall peptidoglycan (murein) is composed of alternating polysaccharide chains of:",
        "opts": {
            "A": "N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) linked by beta-1,4 bonds",
            "B": "Cellulose and hemicellulose",
            "C": "Inulin and glycogen",
            "D": "Amylose and amylopectin"
        },
        "ans": "A",
        "exp": "Peptidoglycan consists of linear glycan strands of alternating beta-1,4-linked NAG and NAM cross-linked by short amino acid oligopeptides.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 254,
        "q": "Lysozyme present in human tears, saliva, and hen egg white provides antibacterial defense by hydrolyzing:",
        "opts": {
            "A": "The beta-1,4-glycosidic bonds between NAM and NAG in bacterial peptidoglycan",
            "B": "Peptide bonds in viral capsids",
            "C": "Ester bonds in bacterial lipids",
            "D": "Phosphodiester bonds in fungal DNA"
        },
        "ans": "A",
        "exp": "Lysozyme acts as a natural antimicrobial enzyme by cleaving the beta-1,4-glycosidic linkage between NAM and NAG of bacterial cell walls, causing osmotic lysis.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 255,
        "q": "Chondroitin sulfate is a major structural glycosaminoglycan abundant in which animal tissue?",
        "opts": {
            "A": "Cartilage, bone, and cornea",
            "B": "Adipose tissue only",
            "C": "Blood plasma only",
            "D": "Nerve axons only"
        },
        "ans": "A",
        "exp": "Chondroitin sulfate is an extracellular matrix sulfated glycosaminoglycan that provides compressive resistance to cartilage and tendons.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 256,
        "q": "Dextrans, used clinically as plasma volume expanders during hypovolemic shock, are branched polysaccharides of glucose synthesized by:",
        "opts": {
            "A": "Bacteria (such as Leuconostoc mesenteroides)",
            "B": "Human hepatocytes",
            "C": "Yeast mitochondria",
            "D": "Plant chloroplasts"
        },
        "ans": "A",
        "exp": "Dextrans are complex branched glucans produced by lactic acid bacteria that increase oncotic pressure as blood plasma substitutes.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 257,
        "q": "Pectin, found in the middle lamella and primary cell walls of terrestrial plants, is predominantly composed of:",
        "opts": {
            "A": "Polygalacturonic acid (alpha-D-galacturonic acid polymers)",
            "B": "Poly-fructose chains",
            "C": "Pure cellulose microfibrils",
            "D": "Unbranched beta-1,4-glucose"
        },
        "ans": "A",
        "exp": "Pectins are acidic heteropolysaccharides rich in alpha-D-galacturonic acid, forming gel matrices crosslinked by calcium and magnesium ions.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 258,
        "q": "Which disaccharide is known as 'invert sugar' because its optical rotation changes from dextrorotatory (+52.5\u00b0) to levorotatory (-39.7\u00b0) upon hydrolysis?",
        "opts": {
            "A": "Sucrose (hydrolyzed into D-glucose and D-fructose)",
            "B": "Maltose",
            "C": "Lactose",
            "D": "Trehalose"
        },
        "ans": "A",
        "exp": "Sucrose is dextrorotatory, but its equimolar hydrolysate (invert sugar) is levorotatory because the levorotation of D-fructose (-92.4\u00b0) exceeds the dextrorotation of D-glucose (+52.5\u00b0).",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 259,
        "q": "Trehalose is a non-reducing disaccharide found in the hemolymph of insects composed of:",
        "opts": {
            "A": "Two alpha-D-glucose units joined by an alpha-1,alpha-1 glycosidic bond",
            "B": "Glucose and fructose joined by beta-1,4 bond",
            "C": "Two galactose units",
            "D": "Fructose and ribose"
        },
        "ans": "A",
        "exp": "Trehalose contains two alpha-D-glucose units linked via an alpha-1,alpha-1 glycosidic bond between both anomeric carbons, making it non-reducing.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 260,
        "q": "Isoprene, the basic 5-carbon precursor from which terpenes, squalene, and carotenoids are assembled, has the chemical formula:",
        "opts": {
            "A": "C5H8 (2-methyl-1,3-butadiene)",
            "B": "C6H12O6",
            "C": "C5H10O5",
            "D": "C4H6"
        },
        "ans": "A",
        "exp": "Isoprene is 2-methyl-1,3-butadiene (C5H8); terpenes and terpenoid secondary metabolites are formed by condensation of isoprene units.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 261,
        "q": "Which of the following is a diterpene (containing 20 carbon atoms or 4 isoprene units)?",
        "opts": {
            "A": "Phytol (the lipophilic hydrocarbon tail of chlorophyll)",
            "B": "Menthol",
            "C": "Limonene",
            "D": "Rubber"
        },
        "ans": "A",
        "exp": "Phytol is a 20-carbon diterpene alcohol that esterifies the propionic acid side chain of porphyrin ring in chlorophyll.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 262,
        "q": "The steroid nucleus (cyclopentanoperhydrophenanthrene) consists of how many fused rings?",
        "opts": {
            "A": "Four rings (three 6-membered cyclohexane rings A, B, C and one 5-membered cyclopentane ring D)",
            "B": "Three 6-membered rings",
            "C": "Two benzene rings",
            "D": "Five 5-membered rings"
        },
        "ans": "A",
        "exp": "The steroid nucleus consists of 4 fused carbocyclic rings: three 6-membered phenanthrene rings (A, B, C) and one 5-membered cyclopentane ring (D).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 263,
        "q": "Bile acids (such as cholic acid and deoxycholic acid) function in human digestion to:",
        "opts": {
            "A": "Emulsify dietary fats in the small intestine, increasing surface area for pancreatic lipase",
            "B": "Hydrolyze starch into maltose",
            "C": "Lower the pH of gastric juice to 1.5",
            "D": "Synthesize glycogen from amino acids"
        },
        "ans": "A",
        "exp": "Bile acids are amphipathic cholesterol derivatives that act as detergents, emulsifying dietary lipids into mixed micelles for lipase digestion.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 264,
        "q": "Aspirin (acetylsalicylic acid) exerts its anti-inflammatory and analgesic effects by irreversibly inhibiting:",
        "opts": {
            "A": "Cyclooxygenase (COX-1 and COX-2) enzymes, blocking the synthesis of prostaglandins",
            "B": "Phospholipase A2 directly",
            "C": "ATP synthase",
            "D": "DNA polymerase alpha"
        },
        "ans": "A",
        "exp": "Aspirin covalently acetylates an active site serine residue of cyclooxygenase, blocking arachidonic acid conversion into proinflammatory prostaglandins.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 265,
        "q": "Inositol 1,4,5-trisphosphate (IP3) and Diacylglycerol (DAG), which function as intracellular second messengers, are produced by the enzymatic cleavage of:",
        "opts": {
            "A": "Phosphatidylinositol 4,5-bisphosphate (PIP2) by phospholipase C",
            "B": "Lecithin by pancreatic lipase",
            "C": "Cholesterol by desmolase",
            "D": "Sphingomyelin by ceramidase"
        },
        "ans": "A",
        "exp": "Phospholipase C hydrolyzes membrane PIP2 into two second messengers: soluble IP3 (which releases Ca2+ from ER) and membrane-bound DAG (which activates protein kinase C).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 266,
        "q": "In Sickle Cell Anemia, what is the single amino acid substitution in the beta-globin chain that causes HbS to polymerize under low oxygen?",
        "opts": {
            "A": "Glutamic acid at position 6 is replaced by Valine (GAG -> GTG)",
            "B": "Valine at position 6 is replaced by Glutamic acid",
            "C": "Lysine is replaced by Glycine at position 1",
            "D": "Histidine is replaced by Alanine at position 146"
        },
        "ans": "A",
        "exp": "Sickle cell anemia is caused by a point mutation replacing hydrophilic glutamic acid with hydrophobic valine at position 6 of the beta-globin chain, forming insoluble aggregates.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 267,
        "q": "Prion diseases, such as Creutzfeldt-Jakob Disease in humans and Mad Cow Disease in cattle, are caused by:",
        "opts": {
            "A": "Misfolded infectious proteins (PrPSc) with high beta-sheet content that induce normal cellular prion proteins (PrPC) to misfold and aggregate",
            "B": "Viral RNA genomes lacking coats",
            "C": "Bacterial endotoxins",
            "D": "Severe vitamin C deficiency"
        },
        "ans": "A",
        "exp": "Prions are proteinaceous infectious particles devoid of nucleic acids; the pathogenic PrPSc conformation induces normal alpha-helix rich PrPC into insoluble amyloid beta-sheets.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 268,
        "q": "Molecular chaperones like Hsp70 and chaperonins (GroEL/GroES complex) function in the cell to:",
        "opts": {
            "A": "Prevent inappropriate hydrophobic aggregation of nascent polypeptides and facilitate correct 3D folding",
            "B": "Digest proteins into free amino acids via acid hydrolases",
            "C": "Transfer amino acids to tRNA molecules",
            "D": "Phosphorylate glucose into glucose-6-phosphate"
        },
        "ans": "A",
        "exp": "Chaperones bind exposed hydrophobic patches of unfolding or nascent polypeptides, preventing aggregation and assisting proper ATP-dependent folding.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 269,
        "q": "The exceptional mechanical resilience of human hair and sheep wool is due to which fibrous protein stabilized by abundant disulfide crosslinks?",
        "opts": {
            "A": "Alpha-keratin",
            "B": "Beta-keratin",
            "C": "Fibroin",
            "D": "Collagen"
        },
        "ans": "A",
        "exp": "Alpha-keratin forms coiled-coil intermediate filaments rich in cysteine residues whose disulfide (-S-S-) bridges provide high mechanical durability and elasticity.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 270,
        "q": "Elastin, found in elastic ligaments and large arterial walls, can stretch and recoil because of unique covalent crosslinks formed from four lysine residues called:",
        "opts": {
            "A": "Desmosine and isodesmosine crosslinks",
            "B": "Glycosidic linkages",
            "C": "Phosphodiester bonds",
            "D": "Peptide bridges"
        },
        "ans": "A",
        "exp": "Elastin fibers contain unique desmosine crosslinks derived from four lysine side chains, allowing rubber-like expansion and elastic recoil.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 271,
        "q": "Which plasma protein is responsible for maintaining blood oncotic (colloid osmotic) pressure and transporting fatty acids and bilirubin?",
        "opts": {
            "A": "Serum albumin",
            "B": "Immunoglobulin G",
            "C": "Fibrinogen",
            "D": "Transferrin"
        },
        "ans": "A",
        "exp": "Serum albumin is the most abundant plasma protein (~60%), generating ~80% of plasma colloid osmotic pressure and carrying hydrophobic ligands.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 272,
        "q": "An antibody (immunoglobulin) molecule consists of four polypeptide chains:",
        "opts": {
            "A": "Two identical heavy (H) chains and two identical light (L) chains joined by disulfide bonds (H2L2)",
            "B": "Four identical heavy chains",
            "C": "One heavy and three light chains",
            "D": "Two alpha and two beta chains without disulfide bonds"
        },
        "ans": "A",
        "exp": "Antibodies are Y-shaped glycoproteins consisting of two heavy chains and two light chains (H2L2) connected by interchain disulfide bonds.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 273,
        "q": "When a solution of double-stranded DNA is heated, its absorbance of ultraviolet light at 260 nm increases dramatically (~40%). This effect is called:",
        "opts": {
            "A": "Hyperchromicity (hyperchromic shift)",
            "B": "Hypochromicity",
            "C": "Fluorescence quenching",
            "D": "Birefringence"
        },
        "ans": "A",
        "exp": "In double-stranded DNA, aromatic base stacking suppresses UV absorption (hypochromism); unwinding into single strands disrupts base stacking, increasing UV absorbance (hyperchromic effect).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 274,
        "q": "The cloverleaf secondary structure of transfer RNA (tRNA) was proposed by Robert Holley based on base-pairing, and it possesses an invariant 3'-terminal sequence of:",
        "opts": {
            "A": "5'-CCA-3' (where the specific amino acid is attached)",
            "B": "5'-AUG-3'",
            "C": "5'-UAA-3'",
            "D": "5'-AAA-3'"
        },
        "ans": "A",
        "exp": "All tRNAs terminate at their 3'-acceptor stem with the trinucleotide sequence 5'-CCA-3', to whose terminal adenosine 3'-OH group the amino acid is esterified.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 275,
        "q": "The actual 3-dimensional tertiary structure of a tRNA molecule under X-ray crystallography is:",
        "opts": {
            "A": "An inverted L-shaped molecule",
            "B": "A flat 4-leaf clover",
            "C": "A straight linear rod",
            "D": "A perfect sphere"
        },
        "ans": "A",
        "exp": "While tRNA forms a 2D cloverleaf via intramolecular base pairing, tertiary interactions fold it into a compact, inverted L-shaped 3D conformation.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 276,
        "q": "tRNA contains several unusual modified post-transcriptionally altered bases, including:",
        "opts": {
            "A": "Pseudouridine, dihydrouridine, and inosine",
            "B": "Thymidine exclusively",
            "C": "Histone octamers",
            "D": "Glucosamine"
        },
        "ans": "A",
        "exp": "tRNA contains numerous post-transcriptionally modified nucleosides, notably pseudouridine (psi in TpsiC loop), dihydrouridine (D in D-loop), and inosine.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 277,
        "q": "The wobble hypothesis, which explains why multiple degenerate codons can be recognized by a single tRNA anticodon, was proposed by:",
        "opts": {
            "A": "Francis Crick (1966)",
            "B": "James Watson",
            "C": "Har Gobind Khorana",
            "D": "Marshall Nirenberg"
        },
        "ans": "A",
        "exp": "Francis Crick proposed the Wobble Hypothesis, stating that base pairing between the 3rd base of codon and 1st base of anticodon is flexible (non-Watson-Crick).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 278,
        "q": "In the major groove of B-DNA, sequence-specific transcription factors recognize and bind specific DNA sequences by:",
        "opts": {
            "A": "Interacting with exposed functional groups (hydrogen bond donors, acceptors, and methyl groups) without unwinding the double helix",
            "B": "Cleaving phosphodiester bonds",
            "C": "Melting the entire chromosome",
            "D": "Hydrolyzing histones with pepsin"
        },
        "ans": "A",
        "exp": "The wide major groove exposes unique patterns of chemical groups for each base pair, allowing regulatory proteins (e.g., zinc-finger or helix-turn-helix motifs) to recognize DNA sequences directly.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 279,
        "q": "Compare the helical parameters of B-DNA, A-DNA, and Z-DNA. Which form has the greatest number of base pairs per helical turn?",
        "opts": {
            "A": "Z-DNA (12 base pairs per turn)",
            "B": "B-DNA (10 base pairs per turn)",
            "C": "A-DNA (11 base pairs per turn)",
            "D": "C-DNA (9.3 base pairs per turn)"
        },
        "ans": "A",
        "exp": "Z-DNA is a left-handed helix with 12 bp per turn, B-DNA has 10.5 (or 10) bp per turn, and A-DNA has 11 bp per turn.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 280,
        "q": "Which DNA conformation has the narrowest helical diameter?",
        "opts": {
            "A": "Z-DNA (~1.8 nm)",
            "B": "B-DNA (~2.0 nm)",
            "C": "A-DNA (~2.6 nm)",
            "D": "Triple-helical DNA (~3.0 nm)"
        },
        "ans": "A",
        "exp": "Z-DNA is the most elongated and thinnest conformation, with a diameter of ~1.8 nm (compared to 2.0 nm for B-DNA and 2.6 nm for A-DNA).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 281,
        "q": "In a Lineweaver-Burk double reciprocal plot (1/v vs 1/[S]), the slope of the line equals:",
        "opts": {
            "A": "Km / Vmax",
            "B": "Vmax / Km",
            "C": "1 / Vmax",
            "D": "-1 / Km"
        },
        "ans": "A",
        "exp": "The Lineweaver-Burk equation is: 1/v = (Km / Vmax) \u00d7 (1/[S]) + (1 / Vmax). Thus, the slope of the linear plot is Km / Vmax.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 282,
        "q": "In a Lineweaver-Burk plot, the y-intercept (where 1/[S] = 0) represents:",
        "opts": {
            "A": "1 / Vmax",
            "B": "-1 / Km",
            "C": "Km / Vmax",
            "D": "Vmax"
        },
        "ans": "A",
        "exp": "The y-intercept represents 1 / Vmax, because when 1/[S] = 0, 1/v = 1 / Vmax.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 283,
        "q": "In a Lineweaver-Burk plot, the x-intercept (where 1/v = 0) represents:",
        "opts": {
            "A": "-1 / Km",
            "B": "1 / Vmax",
            "C": "Km / Vmax",
            "D": "-Km"
        },
        "ans": "A",
        "exp": "Setting 1/v = 0 gives 0 = (Km/Vmax)(1/[S]) + (1/Vmax), solving for 1/[S] = -1 / Km.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 284,
        "q": "On a Lineweaver-Burk plot, how does the presence of a competitive inhibitor alter the line compared to uninhibited enzyme?",
        "opts": {
            "A": "The slope increases and the x-intercept shifts closer to the origin (more positive), while the y-intercept remains unchanged",
            "B": "The y-intercept shifts upward while the x-intercept remains unchanged",
            "C": "Both intercepts shift equally outward",
            "D": "The line becomes a horizontal line"
        },
        "ans": "A",
        "exp": "Because competitive inhibitors increase apparent Km without changing Vmax, the y-intercept (1/Vmax) is identical, but -1/Km moves closer to zero (slope increases).",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 285,
        "q": "On a Lineweaver-Burk plot, how does the presence of a pure non-competitive inhibitor alter the line?",
        "opts": {
            "A": "The y-intercept shifts upward (reflecting lower Vmax) while the x-intercept (-1/Km) remains unchanged",
            "B": "The y-intercept remains constant while x-intercept shifts",
            "C": "Both the x-intercept and y-intercept shift to the left",
            "D": "The slope decreases to zero"
        },
        "ans": "A",
        "exp": "In pure non-competitive inhibition, Vmax decreases (increasing 1/Vmax, shifting y-intercept up), while Km is unchanged (x-intercept remains fixed at -1/Km).",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 286,
        "q": "Which catalytic amino acid triad is conserved in the active site of serine proteases (chymotrypsin, trypsin, elastase)?",
        "opts": {
            "A": "Serine, Histidine, and Aspartate (Ser-His-Asp)",
            "B": "Lysine, Arginine, and Histidine",
            "C": "Glutamate, Aspartate, and Glycine",
            "D": "Cysteine, Methionine, and Proline"
        },
        "ans": "A",
        "exp": "Serine proteases share a catalytic triad where Asp polarizes His, which in turn acts as a general base to activate Ser for nucleophilic attack on the peptide carbonyl carbon.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 287,
        "q": "Nerve gas sarin and organophosphate insecticides (like malathion) cause lethal paralysis by irreversibly inhibiting:",
        "opts": {
            "A": "Acetylcholinesterase, covalently phosphorylating its active-site serine residue",
            "B": "DNA polymerase",
            "C": "Lactate dehydrogenase",
            "D": "Alpha-amylase"
        },
        "ans": "A",
        "exp": "Organophosphates irreversibly modify the active-site serine of acetylcholinesterase, causing toxic accumulation of acetylcholine and continuous muscle depolarization.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 288,
        "q": "Cyanide is a rapidly lethal poison because it binds tightly to the ferric iron (Fe3+) in:",
        "opts": {
            "A": "Cytochrome c oxidase (Complex IV), halting mitochondrial ATP synthesis",
            "B": "Hemoglobin, preventing oxygen binding to ferrous iron",
            "C": "Ribosomes, preventing tRNA binding",
            "D": "Cellulose, causing wall breakdown"
        },
        "ans": "A",
        "exp": "Cyanide binds tightly to the heme a3 iron in cytochrome c oxidase, blocking electron transfer to O2, completely halting oxidative phosphorylation.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 289,
        "q": "In an enzymatic reaction, the specificity constant or catalytic efficiency is defined by the ratio:",
        "opts": {
            "A": "kcat / Km",
            "B": "Km / kcat",
            "C": "Vmax / Km",
            "D": "Km / Vmax"
        },
        "ans": "A",
        "exp": "The ratio kcat / Km represents the catalytic efficiency, with an upper limit set by the rate of diffusion (~10^8 to 10^9 M^-1 s^-1, kinetic perfection).",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 290,
        "q": "Which enzyme is termed 'catalytically perfect' because its rate of catalysis is limited only by the rate at which substrate diffuses into its active site?",
        "opts": {
            "A": "Superoxide dismutase (and carbonic anhydrase)",
            "B": "Hexokinase",
            "C": "DNA ligase",
            "D": "Pepsin"
        },
        "ans": "A",
        "exp": "Superoxide dismutase and triose phosphate isomerase have kcat/Km near the diffusion limit (~10^9 M^-1 s^-1), making them catalytically perfect enzymes.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 291,
        "q": "Streptokinase, produced by beta-hemolytic Streptococcus, is clinically administered as a 'clot buster' because it:",
        "opts": {
            "A": "Activates plasminogen to plasmin, which dissolves intravascular fibrin thrombi",
            "B": "Directly hydrolyzes cholesterol plaques",
            "C": "Inhibits platelet production in bone marrow",
            "D": "Precipitates blood proteins"
        },
        "ans": "A",
        "exp": "Streptokinase forms a complex with plasminogen, converting it to active plasmin that lyses fibrin blood clots in acute myocardial infarction.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 292,
        "q": "The thermal stability of Taq DNA polymerase, isolated from the bacterium Thermus aquaticus, enables its routine use in:",
        "opts": {
            "A": "Polymerase Chain Reaction (PCR) during high-temperature DNA denaturation at 94\u00b0C",
            "B": "Gel electrophoresis at low voltage",
            "C": "Bacterial transformation at 4\u00b0C",
            "D": "Protein crystallization"
        },
        "ans": "A",
        "exp": "Taq polymerase withstands repeated 94\u00b0\u201395\u00b0C heating steps in PCR thermocycling without becoming denatured, enabling automated DNA amplification.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 293,
        "q": "Which restriction endonuclease was the first restriction enzyme isolated and characterized by Hamilton Smith in 1970?",
        "opts": {
            "A": "Hind II",
            "B": "EcoRI",
            "C": "BamHI",
            "D": "SalI"
        },
        "ans": "A",
        "exp": "Hind II was the first restriction endonuclease discovered and characterized, recognizing a specific six-base pair symmetric sequence.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 294,
        "q": "Creatine kinase (CK-MB isozyme) and cardiac troponin I levels in blood serum are clinically monitored for the early diagnosis of:",
        "opts": {
            "A": "Myocardial infarction (heart attack)",
            "B": "Liver cirrhosis",
            "C": "Renal failure",
            "D": "Diabetes mellitus"
        },
        "ans": "A",
        "exp": "Following myocardial necrosis, CK-MB and cardiac troponins leak from damaged cardiac myocytes into serum, serving as definitive biomarkers of myocardial infarction.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 295,
        "q": "Alkaline phosphatase (ALP) serum levels are significantly elevated in patients suffering from:",
        "opts": {
            "A": "Obstructive jaundice and bone disorders (osteoblastic metastases)",
            "B": "Iron-deficiency anemia",
            "C": "Severe asthma",
            "D": "Gastric ulcer"
        },
        "ans": "A",
        "exp": "Serum ALP rises markedly in biliary obstruction (cholestasis) and conditions with increased osteoblastic bone remodeling (rickets, osteomalacia, Paget's disease).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 296,
        "q": "In Gout, painful inflammatory arthritis in joints is caused by the deposition of crystals of:",
        "opts": {
            "A": "Monosodium urate (derived from catabolism of purine nucleotides)",
            "B": "Calcium oxalate",
            "C": "Cholesterol monohydrate",
            "D": "Glycogen granules"
        },
        "ans": "A",
        "exp": "Gout is characterized by hyperuricemia and precipitation of needle-shaped monosodium urate crystals in synovial fluid, triggering acute joint inflammation.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 297,
        "q": "The enzyme xanthine oxidase catabolizes hypoxanthine and xanthine into uric acid. Which drug competitively inhibits xanthine oxidase to treat gout?",
        "opts": {
            "A": "Allopurinol",
            "B": "Aspirin",
            "C": "Penicillin",
            "D": "Vinblastine"
        },
        "ans": "A",
        "exp": "Allopurinol (a structural analogue of hypoxanthine) is a suicide/competitive inhibitor of xanthine oxidase that prevents uric acid formation in gout.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 298,
        "q": "Lesch-Nyhan syndrome is a severe X-linked recessive neurological disorder caused by the inherited deficiency of which purine salvage enzyme?",
        "opts": {
            "A": "HGPRT (Hypoxanthine-guanine phosphoribosyltransferase)",
            "B": "Adenosine deaminase",
            "C": "Xanthine oxidase",
            "D": "Ribonucleotide reductase"
        },
        "ans": "A",
        "exp": "HGPRT deficiency causes failure of purine salvage, resulting in massive accumulation of uric acid, intellectual disability, and compulsive self-mutilation.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 299,
        "q": "Severe Combined Immunodeficiency (SCID) was the first human genetic disease treated by gene therapy (in 1990) due to a deficiency in which enzyme?",
        "opts": {
            "A": "Adenosine deaminase (ADA)",
            "B": "Glucose-6-phosphate dehydrogenase (G6PD)",
            "C": "Hexokinase",
            "D": "Phenylalanine hydroxylase"
        },
        "ans": "A",
        "exp": "ADA deficiency causes toxic accumulation of dATP, which inhibits ribonucleotide reductase and destroys B and T lymphocytes, resulting in lethal SCID.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 300,
        "q": "Phenylketonuria (PKU) is an inborn error of metabolism caused by the deficiency of which hepatic enzyme?",
        "opts": {
            "A": "Phenylalanine hydroxylase",
            "B": "Tyrosinase",
            "C": "Homogentisate oxidase",
            "D": "Histidase"
        },
        "ans": "A",
        "exp": "Deficiency of phenylalanine hydroxylase prevents conversion of phenylalanine to tyrosine, accumulating toxic phenylpyruvate and causing mental retardation.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 301,
        "q": "What is the average molecular weight of a single amino acid residue inside a folded protein chain?",
        "opts": {
            "A": "Approximately 110 Daltons (after accounting for loss of water during peptide bond formation)",
            "B": "180 Daltons",
            "C": "500 Daltons",
            "D": "18 Daltons"
        },
        "ans": "A",
        "exp": "Although the average molecular weight of a free amino acid is ~128 Da, the loss of water (18 Da) upon peptide bond formation leaves an average residue mass of ~110 Da.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 302,
        "q": "A protein has a molecular weight of 55,000 Daltons. Approximately how many amino acid residues does it contain?",
        "opts": {
            "A": "~ 500 amino acid residues",
            "B": "~ 100 amino acid residues",
            "C": "~ 5,500 residues",
            "D": "~ 50 residues"
        },
        "ans": "A",
        "exp": "55,000 Da / 110 Da per residue = 500 amino acid residues.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 303,
        "q": "The standard free energy of hydrolysis (delta G\u00b0') of the terminal phosphoanhydride bond of ATP is approximately:",
        "opts": {
            "A": "-7.3 kcal/mol (-30.5 kJ/mol)",
            "B": "+7.3 kcal/mol",
            "C": "-1.5 kcal/mol",
            "D": "-70 kcal/mol"
        },
        "ans": "A",
        "exp": "ATP hydrolysis (ATP + H2O -> ADP + Pi) has a standard free energy change delta G\u00b0' of -7.3 kcal/mol (-30.5 kJ/mol) under physiological standard conditions.",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 304,
        "q": "Which of the following compounds has a higher phosphate transfer potential than ATP, allowing it to phosphorylate ADP to ATP directly in glycolysis?",
        "opts": {
            "A": "Phosphoenolpyruvate (PEP) and 1,3-bisphosphoglycerate (1,3-BPG)",
            "B": "Glucose-6-phosphate",
            "C": "Glycerol-3-phosphate",
            "D": "Fructose-6-phosphate"
        },
        "ans": "A",
        "exp": "Substrate-level phosphorylation of ADP occurs because PEP (delta G\u00b0' = -14.8 kcal/mol) and 1,3-BPG (-11.8 kcal/mol) possess higher group transfer potential than ATP.",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 305,
        "q": "The energy stored in creatine phosphate in skeletal muscle is transferred to ADP to replenish ATP by which enzyme during sudden strenuous exercise?",
        "opts": {
            "A": "Creatine kinase (phosphocreatine kinase)",
            "B": "Myosin ATPase",
            "C": "Lactate dehydrogenase",
            "D": "Glycogen phosphorylase"
        },
        "ans": "A",
        "exp": "Creatine kinase transfers high-energy phosphate from phosphocreatine to ADP, rapidly regenerating ATP during the first few seconds of muscle contraction.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 306,
        "q": "Which class of enzymes requires ATP to catalyze the formation of C-C, C-S, C-O, or C-N bonds?",
        "opts": {
            "A": "Ligases (synthetases)",
            "B": "Lyases",
            "C": "Hydrolases",
            "D": "Transferases"
        },
        "ans": "A",
        "exp": "Ligases (synthetases) catalyze condensation of two molecules coupled with cleavage of ATP or other nucleoside triphosphates.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 307,
        "q": "Synthases differ fundamentally from Synthetases in that:",
        "opts": {
            "A": "Synthases catalyze synthetic reactions without utilizing ATP, whereas Synthetases require ATP hydrolysis",
            "B": "Synthases are lipids, synthetases are proteins",
            "C": "Synthases destroy DNA, synthetases build DNA",
            "D": "Synthases only work at 100\u00b0C"
        },
        "ans": "A",
        "exp": "In IUBMB nomenclature, 'synthases' (often lyases or transferases) do not consume high-energy nucleoside triphosphates, whereas 'synthetases' (ligases) require ATP/GTP.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 308,
        "q": "Phosphatases differ from Kinases in that:",
        "opts": {
            "A": "Phosphatases remove phosphate groups by hydrolytic cleavage using water, whereas Kinases transfer phosphate from ATP to a substrate",
            "B": "Phosphatases add lipids to proteins",
            "C": "Kinases hydrolyze peptide bonds",
            "D": "Phosphatases synthesize DNA"
        },
        "ans": "A",
        "exp": "Kinases are transferases transferring phosphate from ATP to substrate; phosphatases are hydrolases removing phosphate groups using water.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 309,
        "q": "Glycogen phosphorylase, which breaks down glycogen into glucose-1-phosphate in liver and muscle, uses which chemical mechanism?",
        "opts": {
            "A": "Phosphorolysis (addition of inorganic phosphate Pi across glycosidic bond)",
            "B": "Hydrolysis using water",
            "C": "Oxidation using molecular oxygen",
            "D": "Reduction using NADPH"
        },
        "ans": "A",
        "exp": "Phosphorolysis cleaves alpha-1,4-glucosidic bonds with inorganic phosphate, yielding glucose-1-phosphate without expending ATP.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 310,
        "q": "Which hormone stimulates glycogen phosphorylase in skeletal muscle during 'fight or flight' emergency responses?",
        "opts": {
            "A": "Adrenaline (epinephrine) via cAMP second messenger cascade",
            "B": "Insulin",
            "C": "Growth hormone",
            "D": "Thyroxine"
        },
        "ans": "A",
        "exp": "Adrenaline activates adenylyl cyclase, raising cAMP and activating protein kinase A, which phosphorylates and activates glycogen phosphorylase for rapid glycogenolysis.",
        "topic": "enzymes",
        "sub": "Enzyme Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 311,
        "q": "Which of the following describes the bond energy hierarchy of interactions in biomacromolecules (from strongest to weakest)?",
        "opts": {
            "A": "Covalent bond > Ionic salt bridge > Hydrogen bond > Van der Waals interaction",
            "B": "Van der Waals > Hydrogen bond > Ionic > Covalent",
            "C": "Hydrogen bond > Covalent > Ionic > Van der Waals",
            "D": "Ionic > Covalent > Van der Waals > Hydrogen bond"
        },
        "ans": "A",
        "exp": "Covalent bonds (50\u2013100 kcal/mol) are strongest, followed by ionic interactions (1\u201320 kcal/mol), hydrogen bonds (1\u20135 kcal/mol), and weak van der Waals forces (<1 kcal/mol).",
        "topic": "macromolecules",
        "sub": "Nature of Bonds",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 312,
        "q": "In proteins, hydrogen bonds can form between electronegative atoms such as:",
        "opts": {
            "A": "Oxygen and Nitrogen atoms",
            "B": "Carbon and Carbon atoms",
            "C": "Sodium and Potassium ions",
            "D": "Sulfur and Hydrogen only"
        },
        "ans": "A",
        "exp": "Hydrogen bonds form when hydrogen covalently bonded to an electronegative donor (O or N) interacts with an electronegative acceptor (O or N).",
        "topic": "macromolecules",
        "sub": "Nature of Bonds",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 313,
        "q": "Hydrophobic interactions in protein folding are thermodynamically driven by:",
        "opts": {
            "A": "A favorable increase in the entropy of surrounding water molecules as non-polar surfaces coalesce",
            "B": "Direct formation of covalent bonds between non-polar side chains",
            "C": "Repulsion between opposite charges",
            "D": "Continuous hydrolysis of ATP"
        },
        "ans": "A",
        "exp": "Water molecules form ordered cages around exposed hydrophobic residues; burying hydrophobic groups releases water molecules into bulk solvent, increasing entropy (+delta S).",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 314,
        "q": "The ester linkage in a triglyceride connects which two functional groups?",
        "opts": {
            "A": "A carboxyl group of a fatty acid and a hydroxyl group of glycerol",
            "B": "An amino group and a carboxyl group",
            "C": "Two alcohol hydroxyl groups",
            "D": "A phosphate group and an amino acid"
        },
        "ans": "A",
        "exp": "Ester bonds form by condensation of a fatty acid carboxyl group (-COOH) with a glycerol hydroxyl group (-OH), releasing H2O.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 315,
        "q": "In a phosphodiester bond linking two nucleotides, the phosphate group bridges:",
        "opts": {
            "A": "The 3'-OH of one pentose sugar and the 5'-OH of the next pentose sugar",
            "B": "The 1'-carbon and 2'-carbon of the same sugar",
            "C": "Two nitrogenous bases directly",
            "D": "The alpha-carbon of an amino acid"
        },
        "ans": "A",
        "exp": "A phosphodiester bond consists of phosphoric acid esterified to the 3'-hydroxyl of one pentose and the 5'-hydroxyl of the adjacent pentose.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 316,
        "q": "What is the primary difference between a nucleoside monophosphate, diphosphate, and triphosphate?",
        "opts": {
            "A": "The number of phosphate groups attached to the 5'-carbon of the sugar (one, two, or three)",
            "B": "The number of pentose sugars present",
            "C": "The type of nitrogenous base present",
            "D": "The presence of a lipid bilayer"
        },
        "ans": "A",
        "exp": "AMP has one phosphate (phosphoester), ADP has two (one phosphoester, one phosphoanhydride), and ATP has three (one phosphoester, two phosphoanhydrides).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 317,
        "q": "Cyclic AMP (cAMP) is synthesized from ATP by which membrane-bound enzyme?",
        "opts": {
            "A": "Adenylyl cyclase",
            "B": "Phosphodiesterase",
            "C": "Protein kinase A",
            "D": "Guanylyl cyclase"
        },
        "ans": "A",
        "exp": "Adenylyl cyclase removes pyrophosphate from ATP and cyclizes the remaining phosphate between the 5' and 3' carbons of ribose, producing 3',5'-cyclic AMP.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 318,
        "q": "Which enzyme terminates cAMP signaling by hydrolyzing cyclic AMP into linear 5'-AMP?",
        "opts": {
            "A": "cAMP phosphodiesterase",
            "B": "Adenylyl cyclase",
            "C": "Hexokinase",
            "D": "Trypsin"
        },
        "ans": "A",
        "exp": "Phosphodiesterase hydrolyzes the 3',5'-phosphodiester bond of cAMP, converting it to inactive 5'-AMP.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 319,
        "q": "Caffeine in coffee and theophylline in tea act as stimulants primarily by inhibiting which enzyme, thereby prolonging cAMP signaling?",
        "opts": {
            "A": "Phosphodiesterase",
            "B": "Adenylyl cyclase",
            "C": "ATP synthase",
            "D": "DNA polymerase"
        },
        "ans": "A",
        "exp": "Caffeine and theophylline are competitive inhibitors of cyclic nucleotide phosphodiesterase, preventing cAMP breakdown and prolonging adrenergic arousal.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 320,
        "q": "Which of the following compounds is an inhibitor of electron transport in Complex I of mitochondria?",
        "opts": {
            "A": "Rotenone",
            "B": "Cyanide",
            "C": "Carbon monoxide",
            "D": "Oligomycin"
        },
        "ans": "A",
        "exp": "Rotenone (and amobarbital) inhibits electron transfer from iron-sulfur centers of Complex I to ubiquinone.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 321,
        "q": "According to NCERT Table 9.4, what percentage of total cellular mass is constituted by carbohydrates?",
        "opts": {
            "A": "3%",
            "B": "10-15%",
            "C": "70-90%",
            "D": "1%"
        },
        "ans": "A",
        "exp": "According to NCERT Table 9.4, carbohydrates constitute 3% of total cellular mass.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 322,
        "q": "According to NCERT Table 9.4, what percentage of total cellular mass is constituted by lipids?",
        "opts": {
            "A": "2%",
            "B": "10-15%",
            "C": "5-7%",
            "D": "20%"
        },
        "ans": "A",
        "exp": "According to NCERT Table 9.4, lipids constitute 2% of total cellular mass.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 323,
        "q": "According to NCERT Table 9.4, what percentage of total cellular mass is constituted by inorganic ions?",
        "opts": {
            "A": "1%",
            "B": "10%",
            "C": "5%",
            "D": "15%"
        },
        "ans": "A",
        "exp": "According to NCERT Table 9.4, inorganic ions constitute 1% of total cellular mass.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 324,
        "q": "Which protein listed in NCERT Table 9.5 functions as an endocrine peptide hormone that regulates blood glucose levels?",
        "opts": {
            "A": "Insulin",
            "B": "Collagen",
            "C": "Trypsin",
            "D": "Antibody"
        },
        "ans": "A",
        "exp": "Insulin is a 51-amino acid peptide hormone listed in NCERT Table 9.5.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 325,
        "q": "Which protein listed in NCERT Table 9.5 functions as an enzyme in protein digestion?",
        "opts": {
            "A": "Trypsin",
            "B": "Collagen",
            "C": "Insulin",
            "D": "GLUT-4"
        },
        "ans": "A",
        "exp": "Trypsin is a proteolytic digestive enzyme listed in NCERT Table 9.5.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 326,
        "q": "Which protein listed in NCERT Table 9.5 fights infectious pathogens in the immune system?",
        "opts": {
            "A": "Antibody",
            "B": "Collagen",
            "C": "Insulin",
            "D": "GLUT-4"
        },
        "ans": "A",
        "exp": "Antibodies (immunoglobulins) fight infectious agents, as stated in NCERT Table 9.5.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 327,
        "q": "Which protein listed in NCERT Table 9.5 functions as sensory receptors for smell, taste, and hormones?",
        "opts": {
            "A": "Receptor",
            "B": "GLUT-4",
            "C": "Collagen",
            "D": "Trypsin"
        },
        "ans": "A",
        "exp": "Receptors mediate sensory reception (smell, taste, hormones), as listed in NCERT Table 9.5.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 328,
        "q": "According to NCERT comparison of elements in non-living earth crust vs living human tissue, which element has negligible abundance in the human body?",
        "opts": {
            "A": "Silicon (Si)",
            "B": "Carbon (C)",
            "C": "Nitrogen (N)",
            "D": "Hydrogen (H)"
        },
        "ans": "A",
        "exp": "Silicon constitutes 27.7% of Earth's crust but is negligible in living human tissue.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 329,
        "q": "Which element constitutes only 0.03% of the earth's crust but 18.5% of human living tissue?",
        "opts": {
            "A": "Carbon",
            "B": "Silicon",
            "C": "Oxygen",
            "D": "Calcium"
        },
        "ans": "A",
        "exp": "Carbon is only 0.03% in the Earth's crust but 18.5% in human body weight.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 330,
        "q": "Which element constitutes only trace amounts in the earth's crust but 3.3% of human tissue?",
        "opts": {
            "A": "Nitrogen",
            "B": "Silicon",
            "C": "Calcium",
            "D": "Magnesium"
        },
        "ans": "A",
        "exp": "Nitrogen is present in trace amounts in the crust but forms 3.3% of the human body mass.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 331,
        "q": "The sulfur content of human living tissue by per cent body weight according to NCERT is:",
        "opts": {
            "A": "0.3%",
            "B": "3.3%",
            "C": "0.03%",
            "D": "1.5%"
        },
        "ans": "A",
        "exp": "According to NCERT Table 9.1, Sulfur constitutes 0.3% of human living body weight.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 332,
        "q": "The calcium content of human living tissue by per cent body weight according to NCERT is:",
        "opts": {
            "A": "1.5%",
            "B": "0.3%",
            "C": "18.5%",
            "D": "0.1%"
        },
        "ans": "A",
        "exp": "Calcium constitutes 1.5% of human body weight according to NCERT Table 9.1.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 333,
        "q": "Which of the following is true regarding all standard amino acids?",
        "opts": {
            "A": "They possess an alpha-amino group and an alpha-carboxylic acid group attached to the same carbon",
            "B": "They all contain aromatic rings",
            "C": "They all contain sulfur atoms",
            "D": "They are all insoluble in water"
        },
        "ans": "A",
        "exp": "By definition, alpha-amino acids have both the amino group and carboxyl group bonded to the alpha-carbon.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 334,
        "q": "The amino acid that has a methyl group (-CH3) as its R-group is:",
        "opts": {
            "A": "Alanine",
            "B": "Glycine",
            "C": "Serine",
            "D": "Valine"
        },
        "ans": "A",
        "exp": "Alanine has a single methyl group (-CH3) as its side chain.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 335,
        "q": "The amino acid that has a hydrogen (-H) as its R-group is:",
        "opts": {
            "A": "Glycine",
            "B": "Alanine",
            "C": "Serine",
            "D": "Proline"
        },
        "ans": "A",
        "exp": "Glycine's R group is a hydrogen atom (-H).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 336,
        "q": "The amino acid that has a hydroxy-methyl (-CH2OH) group as its R-group is:",
        "opts": {
            "A": "Serine",
            "B": "Glycine",
            "C": "Alanine",
            "D": "Tyrosine"
        },
        "ans": "A",
        "exp": "Serine has a hydroxymethyl group (-CH2OH) as its side chain.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 337,
        "q": "Which of the following is a neutral amino acid?",
        "opts": {
            "A": "Valine",
            "B": "Glutamic acid",
            "C": "Lysine",
            "D": "Aspartic acid"
        },
        "ans": "A",
        "exp": "Valine is an aliphatic neutral amino acid.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 338,
        "q": "Which of the following is an acidic amino acid?",
        "opts": {
            "A": "Aspartic acid",
            "B": "Lysine",
            "C": "Arginine",
            "D": "Valine"
        },
        "ans": "A",
        "exp": "Aspartic acid and glutamic acid are acidic amino acids.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 339,
        "q": "Which of the following is a basic amino acid?",
        "opts": {
            "A": "Arginine",
            "B": "Glutamic acid",
            "C": "Valine",
            "D": "Glycine"
        },
        "ans": "A",
        "exp": "Arginine and lysine are basic amino acids.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 340,
        "q": "Which of the following is an aromatic amino acid?",
        "opts": {
            "A": "Phenylalanine",
            "B": "Alanine",
            "C": "Glycine",
            "D": "Serine"
        },
        "ans": "A",
        "exp": "Phenylalanine, tyrosine, and tryptophan are aromatic amino acids.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 341,
        "q": "How many carbons does palmitic acid have, including the carboxyl carbon?",
        "opts": {
            "A": "16 carbons",
            "B": "18 carbons",
            "C": "20 carbons",
            "D": "14 carbons"
        },
        "ans": "A",
        "exp": "Palmitic acid has 16 carbons including the carboxyl carbon.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 342,
        "q": "How many carbons does arachidonic acid have, including the carboxyl carbon?",
        "opts": {
            "A": "20 carbons",
            "B": "16 carbons",
            "C": "18 carbons",
            "D": "24 carbons"
        },
        "ans": "A",
        "exp": "Arachidonic acid has 20 carbons including the carboxyl carbon.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 343,
        "q": "Glycerol is chemically:",
        "opts": {
            "A": "Trihydroxy propane",
            "B": "Dihydroxy propane",
            "C": "Trihydroxy butane",
            "D": "Glyceric acid"
        },
        "ans": "A",
        "exp": "Glycerol is trihydroxy propane (propane-1,2,3-triol).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 344,
        "q": "Lecithin is a phospholipid especially abundant in:",
        "opts": {
            "A": "Cell membranes",
            "B": "Starch granules",
            "C": "Inulin crystals",
            "D": "Cell wall fibers"
        },
        "ans": "A",
        "exp": "Lecithin is a major phospholipid component of biological cell membranes.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 345,
        "q": "Inulin is a homopolysaccharide of:",
        "opts": {
            "A": "Fructose",
            "B": "Glucose",
            "C": "Galactose",
            "D": "Ribose"
        },
        "ans": "A",
        "exp": "Inulin is a polymer of fructose.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 346,
        "q": "Glycogen has which end designated as the reducing end?",
        "opts": {
            "A": "Right end",
            "B": "Left end",
            "C": "Both ends",
            "D": "Neither end"
        },
        "ans": "A",
        "exp": "In glycogen and starch, the right end is reducing and the left end is non-reducing.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 347,
        "q": "Which polysaccharide forms the exoskeleton of arthropods?",
        "opts": {
            "A": "Chitin",
            "B": "Cellulose",
            "C": "Starch",
            "D": "Inulin"
        },
        "ans": "A",
        "exp": "Chitin forms the tough exoskeleton of arthropods and walls of fungi.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 348,
        "q": "The pitch of B-DNA is:",
        "opts": {
            "A": "3.4 nm",
            "B": "0.34 nm",
            "C": "2.0 nm",
            "D": "34 nm"
        },
        "ans": "A",
        "exp": "The pitch of the B-DNA double helix is 3.4 nm (34 \u00c5).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 349,
        "q": "The distance between two adjacent base pairs in B-DNA is:",
        "opts": {
            "A": "0.34 nm",
            "B": "3.4 nm",
            "C": "2.0 nm",
            "D": "0.034 nm"
        },
        "ans": "A",
        "exp": "Distance between adjacent base pairs in B-DNA is 0.34 nm (3.4 \u00c5).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 350,
        "q": "Enzymes that catalyze removal of groups leaving double bonds belong to class:",
        "opts": {
            "A": "Lyases (Class 4)",
            "B": "Hydrolases (Class 3)",
            "C": "Transferases (Class 2)",
            "D": "Ligases (Class 6)"
        },
        "ans": "A",
        "exp": "Class 4 enzymes are Lyases, catalyzing cleavage without hydrolysis and leaving double bonds.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 351,
        "q": "Enzymes that join two molecules coupled with ATP cleavage belong to class:",
        "opts": {
            "A": "Ligases (Class 6)",
            "B": "Lyases (Class 4)",
            "C": "Isomerases (Class 5)",
            "D": "Hydrolases (Class 3)"
        },
        "ans": "A",
        "exp": "Class 6 enzymes are Ligases, joining two compounds coupled with ATP hydrolysis.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 352,
        "q": "In peroxidase and catalase, the prosthetic group is:",
        "opts": {
            "A": "Haem",
            "B": "NAD+",
            "C": "Zinc",
            "D": "FAD"
        },
        "ans": "A",
        "exp": "Haem is the tightly bound prosthetic group of peroxidase and catalase.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 353,
        "q": "NAD and NADP coenzymes contain which vitamin?",
        "opts": {
            "A": "Niacin",
            "B": "Riboflavin",
            "C": "Thiamine",
            "D": "Biotin"
        },
        "ans": "A",
        "exp": "Coenzymes NAD and NADP contain the vitamin niacin.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 354,
        "q": "Zinc is a cofactor for which proteolytic enzyme?",
        "opts": {
            "A": "Carboxypeptidase",
            "B": "Pepsin",
            "C": "Trypsin",
            "D": "Amylase"
        },
        "ans": "A",
        "exp": "Zinc is a required cofactor for carboxypeptidase and carbonic anhydrase.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 355,
        "q": "Succinic dehydrogenase is competitively inhibited by:",
        "opts": {
            "A": "Malonate",
            "B": "Oxaloacetate",
            "C": "Fumarate",
            "D": "Citrate"
        },
        "ans": "A",
        "exp": "Malonate competitively inhibits succinic dehydrogenase by closely mimicking succinate.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 356,
        "q": "The active site of an enzyme speeds up reactions by:",
        "opts": {
            "A": "Lowering activation energy",
            "B": "Increasing activation energy",
            "C": "Decreasing substrate concentration",
            "D": "Boiling the reactants"
        },
        "ans": "A",
        "exp": "Enzymes accelerate biochemical reactions by lowering the activation energy barrier.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 357,
        "q": "Which secondary metabolite listed in NCERT is an alkaloid used as an analgesic?",
        "opts": {
            "A": "Morphine",
            "B": "Abrin",
            "C": "Curcumin",
            "D": "Rubber"
        },
        "ans": "A",
        "exp": "Morphine is an alkaloid used as a potent analgesic.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 358,
        "q": "Which secondary metabolite listed in NCERT is a lectin?",
        "opts": {
            "A": "Concanavalin A",
            "B": "Abrin",
            "C": "Vinblastine",
            "D": "Codeine"
        },
        "ans": "A",
        "exp": "Concanavalin A is classified as a lectin in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 359,
        "q": "Which secondary metabolite listed in NCERT is an essential oil?",
        "opts": {
            "A": "Lemon grass oil",
            "B": "Mustard oil",
            "C": "Castor oil",
            "D": "Coconut oil"
        },
        "ans": "A",
        "exp": "Lemon grass oil is categorized under essential oils in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 360,
        "q": "Which secondary metabolite listed in NCERT is a drug used in cancer therapy?",
        "opts": {
            "A": "Vinblastine",
            "B": "Abrin",
            "C": "Morphine",
            "D": "Lemon grass oil"
        },
        "ans": "A",
        "exp": "Vinblastine is an anticancer drug listed in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 361,
        "q": "Which secondary metabolite listed in NCERT is an extremely potent plant toxin?",
        "opts": {
            "A": "Abrin and Ricin",
            "B": "Curcumin",
            "C": "Vinblastine",
            "D": "Concanavalin A"
        },
        "ans": "A",
        "exp": "Abrin and ricin are listed under 'Toxins' in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 362,
        "q": "The most abundant protein in animal world is:",
        "opts": {
            "A": "Collagen",
            "B": "RuBisCO",
            "C": "Keratin",
            "D": "Hemoglobin"
        },
        "ans": "A",
        "exp": "Collagen is the most abundant protein in the animal kingdom.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 363,
        "q": "The most abundant protein in the whole biosphere is:",
        "opts": {
            "A": "RuBisCO",
            "B": "Collagen",
            "C": "Cellulose",
            "D": "Myosin"
        },
        "ans": "A",
        "exp": "RuBisCO is the most abundant protein in the entire biosphere.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 364,
        "q": "Which protein enables insulin-mediated glucose transport into cells?",
        "opts": {
            "A": "GLUT-4",
            "B": "Trypsin",
            "C": "Insulin",
            "D": "Antibody"
        },
        "ans": "A",
        "exp": "GLUT-4 enables glucose transport into cells across the membrane.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 365,
        "q": "Adenosine is a:",
        "opts": {
            "A": "Nucleoside",
            "B": "Nucleotide",
            "C": "Nitrogenous base",
            "D": "Amino acid"
        },
        "ans": "A",
        "exp": "Adenosine is a nucleoside (adenine + ribose).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 366,
        "q": "Adenylic acid is a:",
        "opts": {
            "A": "Nucleotide",
            "B": "Nucleoside",
            "C": "Nitrogenous base",
            "D": "Polypeptide"
        },
        "ans": "A",
        "exp": "Adenylic acid (AMP) is a nucleotide (adenine + ribose + phosphate).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 367,
        "q": "Guanosine is a:",
        "opts": {
            "A": "Nucleoside",
            "B": "Nucleotide",
            "C": "Purine base",
            "D": "Pyrimidine base"
        },
        "ans": "A",
        "exp": "Guanosine is a nucleoside (guanine + ribose).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 368,
        "q": "Thymidylic acid is a:",
        "opts": {
            "A": "Nucleotide",
            "B": "Nucleoside",
            "C": "Pyrimidine base",
            "D": "Purine base"
        },
        "ans": "A",
        "exp": "Thymidylic acid is a nucleotide (thymine + deoxyribose + phosphate).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 369,
        "q": "The bond formed between two amino acids with elimination of water is a:",
        "opts": {
            "A": "Peptide bond",
            "B": "Glycosidic bond",
            "C": "Phosphodiester bond",
            "D": "Ester bond"
        },
        "ans": "A",
        "exp": "A peptide bond (-CO-NH-) links amino acids via condensation.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 370,
        "q": "The bond formed between two monosaccharides with elimination of water is a:",
        "opts": {
            "A": "Glycosidic bond",
            "B": "Peptide bond",
            "C": "Phosphodiester bond",
            "D": "Hydrogen bond"
        },
        "ans": "A",
        "exp": "A glycosidic bond links individual monosaccharide units in polysaccharides.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 371,
        "q": "The bond linking the 3'-carbon of one sugar to the 5'-carbon of adjacent sugar in DNA is a:",
        "opts": {
            "A": "Phosphodiester bond",
            "B": "Peptide bond",
            "C": "Glycosidic bond",
            "D": "Ester bond"
        },
        "ans": "A",
        "exp": "A 3'-5' phosphodiester bond links adjacent nucleotides in DNA and RNA.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 372,
        "q": "In B-DNA, Adenine pairs with Thymine with how many hydrogen bonds?",
        "opts": {
            "A": "Two hydrogen bonds",
            "B": "Three hydrogen bonds",
            "C": "One hydrogen bond",
            "D": "Four hydrogen bonds"
        },
        "ans": "A",
        "exp": "Adenine pairs with thymine via two hydrogen bonds (A=T).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 373,
        "q": "In B-DNA, Guanine pairs with Cytosine with how many hydrogen bonds?",
        "opts": {
            "A": "Three hydrogen bonds",
            "B": "Two hydrogen bonds",
            "C": "One hydrogen bond",
            "D": "Four hydrogen bonds"
        },
        "ans": "A",
        "exp": "Guanine pairs with cytosine via three hydrogen bonds (G\u2261C).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 374,
        "q": "Which level of protein structure provides positional information about amino acids from N to C terminus?",
        "opts": {
            "A": "Primary structure",
            "B": "Secondary structure",
            "C": "Tertiary structure",
            "D": "Quaternary structure"
        },
        "ans": "A",
        "exp": "The primary structure provides linear sequence and positional information.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 375,
        "q": "Adult human hemoglobin consists of how many subunits?",
        "opts": {
            "A": "4 subunits (2 alpha and 2 beta)",
            "B": "2 subunits",
            "C": "1 subunit",
            "D": "6 subunits"
        },
        "ans": "A",
        "exp": "Adult hemoglobin has quaternary structure composed of 4 subunits: 2 alpha and 2 beta.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
