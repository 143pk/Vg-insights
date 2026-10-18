# Biomolecules Part 2: Q126 to Q250 (Medium)
import json

def get_part2_raw():
    return [
    {
        "q_num": 126,
        "q": "Why is glycine the only standard amino acid that lacks optical activity (is achiral)?",
        "opts": {
            "A": "Its alpha-carbon is attached to two identical hydrogen atoms",
            "B": "It lacks a carboxylic acid group",
            "C": "It contains an aromatic benzene ring",
            "D": "It forms an internal disulfide bridge"
        },
        "ans": "A",
        "exp": "Glycine's alpha-carbon has two hydrogen atoms (-H), meaning it does not have four different substituent groups and is therefore symmetric (achiral).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 127,
        "q": "The pH at which a specific amino acid exists as a dipolar zwitterion with a net electrical charge of zero is called its:",
        "opts": {
            "A": "Isoelectric point (pI)",
            "B": "Acid dissociation constant (pKa)",
            "C": "Neutrality index (pH 7.0)",
            "D": "Equilibrium point"
        },
        "ans": "A",
        "exp": "The isoelectric point (pI) is the specific pH at which an amino acid carries no net electrical charge and will not migrate in an electric field.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 128,
        "q": "In an aqueous solution at a pH below its isoelectric point (highly acidic medium), an amino acid behaves as a:",
        "opts": {
            "A": "Cation with a net positive charge (migrates toward cathode)",
            "B": "Anion with a net negative charge (migrates toward anode)",
            "C": "Neutral zwitterion with zero charge",
            "D": "Precipitated non-polar gas"
        },
        "ans": "A",
        "exp": "In acidic solution (excess H+), the carboxylate group accepts a proton (-COOH), leaving the amino group protonated (-NH3+), yielding a positively charged cation.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 129,
        "q": "In an aqueous solution at a pH above its isoelectric point (highly alkaline medium), an amino acid behaves as an:",
        "opts": {
            "A": "Anion with a net negative charge (migrates toward anode)",
            "B": "Cation with a net positive charge (migrates toward cathode)",
            "C": "Electrically neutral crystal",
            "D": "Insoluble wax"
        },
        "ans": "A",
        "exp": "In alkaline medium (high OH-), the amino group loses a proton (-NH2), leaving the ionized carboxyl group (-COO-), giving a negatively charged anion.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 130,
        "q": "Which of the following is an essential amino acid that must be supplied in human dietary food?",
        "opts": {
            "A": "Tryptophan",
            "B": "Alanine",
            "C": "Glycine",
            "D": "Glutamic acid"
        },
        "ans": "A",
        "exp": "Essential amino acids cannot be synthesized by the human body and must be obtained from food (e.g., tryptophan, valine, leucine, isoleucine, lysine, methionine, threonine, phenylalanine).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 131,
        "q": "Which of the following amino acids contains a secondary amino group where the side chain is looped back onto the amino nitrogen (an imino acid)?",
        "opts": {
            "A": "Proline",
            "B": "Valine",
            "C": "Tyrosine",
            "D": "Cysteine"
        },
        "ans": "A",
        "exp": "Proline is technically an alpha-imino acid because its aliphatic side chain forms a five-membered pyrrolidine ring incorporating the alpha-amino nitrogen.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 132,
        "q": "Why does the presence of proline residues tend to disrupt or break an alpha-helical conformation in a protein?",
        "opts": {
            "A": "Its rigid cyclic ring cannot form the standard backbone hydrogen bond and causes a steric kink",
            "B": "It contains a bulky positively charged guanidinium group",
            "C": "It immediately forms a covalent bond with glycine",
            "D": "It hydrolyzes the adjacent peptide bond"
        },
        "ans": "A",
        "exp": "Proline's cyclic structure locks its phi dihedral angle and lacks a backbone amide hydrogen for hydrogen bonding, acting as a natural 'helix breaker'.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 133,
        "q": "Which amino acid possesses a phenolic hydroxyl group in its side chain that can undergo phosphorylation and iodination?",
        "opts": {
            "A": "Tyrosine",
            "B": "Phenylalanine",
            "C": "Alanine",
            "D": "Leucine"
        },
        "ans": "A",
        "exp": "Tyrosine contains a phenolic para-hydroxyl group (-C6H4-OH) that serves as an attachment site for phosphate groups and is iodinated to synthesize thyroid hormones.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 134,
        "q": "Which pair of amino acids provides the basic positively charged residues found in high abundance in chromatin histones?",
        "opts": {
            "A": "Lysine and Arginine",
            "B": "Aspartate and Glutamate",
            "C": "Leucine and Valine",
            "D": "Serine and Threonine"
        },
        "ans": "A",
        "exp": "Histones are strongly basic proteins rich in lysine and arginine, which carry positive charges at physiological pH and bind tightly to DNA's phosphate backbone.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 135,
        "q": "Which non-protein amino acid acts as a major inhibitory neurotransmitter in the mammalian central nervous system?",
        "opts": {
            "A": "GABA (gamma-aminobutyric acid)",
            "B": "Ornithine",
            "C": "Citrulline",
            "D": "Homocysteine"
        },
        "ans": "A",
        "exp": "GABA (gamma-aminobutyric acid) is synthesized by decarboxylation of glutamate and functions as the primary inhibitory neurotransmitter in the CNS.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 136,
        "q": "Which non-protein amino acids function as key intermediates in the mammalian urea cycle in the liver?",
        "opts": {
            "A": "Ornithine and Citrulline",
            "B": "GABA and Taurine",
            "C": "Thyroxine and Melatonin",
            "D": "Beta-alanine and D-alanine"
        },
        "ans": "A",
        "exp": "Ornithine and citrulline are non-standard alpha-amino acids that serve as essential intermediates in the ornithine-urea cycle.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 137,
        "q": "All 20 standard amino acids incorporated into proteins by ribosomes are:",
        "opts": {
            "A": "L-stereoisomers",
            "B": "D-stereoisomers",
            "C": "Equimolar racemic mixtures of D and L",
            "D": "Achiral symmetrical molecules"
        },
        "ans": "A",
        "exp": "Naturally occurring proteins in all living organisms are composed almost exclusively of L-alpha-amino acids (L-stereoisomers).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 138,
        "q": "D-amino acids (such as D-alanine and D-glutamate) are naturally found in:",
        "opts": {
            "A": "Peptidoglycan cell walls of bacteria",
            "B": "Human serum albumin",
            "C": "Chloroplast RuBisCO",
            "D": "Mammalian nuclear histones"
        },
        "ans": "A",
        "exp": "D-amino acids are not found in ribosomal proteins but occur in bacterial peptidoglycan crosslinks, rendering bacterial cell walls resistant to standard proteases.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 139,
        "q": "Which amino acid is the direct biosynthetic precursor of the hormone adrenaline (epinephrine) and the skin pigment melanin?",
        "opts": {
            "A": "Tyrosine",
            "B": "Tryptophan",
            "C": "Histidine",
            "D": "Glutamate"
        },
        "ans": "A",
        "exp": "Tyrosine is converted via DOPA into dopamine, noradrenaline, adrenaline, and the dark pigment melanin.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 140,
        "q": "Which amino acid serves as the biological precursor for the neurotransmitter serotonin and the sleep hormone melatonin, as well as plant auxin (IAA)?",
        "opts": {
            "A": "Tryptophan",
            "B": "Tyrosine",
            "C": "Phenylalanine",
            "D": "Lysine"
        },
        "ans": "A",
        "exp": "Tryptophan contains an indole ring and serves as the precursor for serotonin, melatonin, niacin, and indole-3-acetic acid (auxin).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 141,
        "q": "The alpha-helix structure of a protein is stabilized primarily by:",
        "opts": {
            "A": "Intrachain hydrogen bonds between the carbonyl oxygen of residue n and the amide hydrogen of residue n+4",
            "B": "Covalent peptide bonds linking side chains",
            "C": "Hydrophobic forces between adjacent proline rings",
            "D": "Disulfide bridges between every turn"
        },
        "ans": "A",
        "exp": "The alpha-helix is stabilized by intrachain hydrogen bonds between the C=O of residue n and the N-H of residue n+4 along the helical axis.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 142,
        "q": "How many amino acid residues are present per helical turn in a standard alpha-helix, and what is its pitch?",
        "opts": {
            "A": "3.6 amino acid residues per turn and pitch of 0.54 nm (5.4 \u00c5)",
            "B": "10 residues per turn and pitch of 3.4 nm",
            "C": "2.0 residues per turn and pitch of 0.2 nm",
            "D": "4.0 residues per turn and pitch of 1.0 nm"
        },
        "ans": "A",
        "exp": "A standard Pauling-Corey alpha-helix has 3.6 amino acid residues per turn with a pitch of 0.54 nm (rise per residue = 0.15 nm).",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 143,
        "q": "In a beta-pleated sheet conformation, hydrogen bonds are formed:",
        "opts": {
            "A": "Interchain between carbonyl and amide groups of adjacent polypeptide strands",
            "B": "Exclusively within the same turn of a single strand",
            "C": "Between aromatic side chains only",
            "D": "Between adjacent lipid molecules"
        },
        "ans": "A",
        "exp": "Beta-pleated sheets are stabilized by interchain (or inter-segment) hydrogen bonds between adjacent parallel or anti-parallel peptide strands.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 144,
        "q": "During the spontaneous folding of a globular protein in an aqueous cytosol, where do hydrophobic amino acid side chains (like leucine, isoleucine, and valine) tend to orient?",
        "opts": {
            "A": "Buried in the interior hydrophobic core of the protein away from water",
            "B": "Exposed entirely on the outer surface interacting with water",
            "C": "Arranged in a line facing the plasma membrane",
            "D": "Covalently linked to the phosphate backbone"
        },
        "ans": "A",
        "exp": "The hydrophobic effect drives non-polar aliphatic and aromatic side chains into the interior of the protein, minimizing disruptive contact with surrounding water molecules.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 145,
        "q": "Which type of chemical bond is a covalent link that stabilizes the tertiary structure of proteins?",
        "opts": {
            "A": "Disulfide bond (-S-S-)",
            "B": "Hydrogen bond",
            "C": "Van der Waals interaction",
            "D": "Ionic salt bridge"
        },
        "ans": "A",
        "exp": "Disulfide bonds formed between two cysteine residues are strong covalent bonds stabilizing protein tertiary and quaternary structures.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 146,
        "q": "When an egg is boiled, the soluble egg white albumin turns into an opaque, insoluble solid white mass. This phenomenon is known as:",
        "opts": {
            "A": "Protein denaturation and irreversible coagulation",
            "B": "Proteolytic digestion into free amino acids",
            "C": "Enzymatic synthesis of glycogen",
            "D": "Conversion of protein into lipid vesicles"
        },
        "ans": "A",
        "exp": "Heat disrupts non-covalent secondary and tertiary bonds, causing the unfolded polypeptide chains to tangle and aggregate into an insoluble coagulum (denaturation).",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 147,
        "q": "During denaturation of a protein by heat, extremes of pH, or urea, which level of protein structure remains INTACT?",
        "opts": {
            "A": "Primary structure (peptide bonds)",
            "B": "Secondary structure",
            "C": "Tertiary structure",
            "D": "Quaternary structure"
        },
        "ans": "A",
        "exp": "Denaturation disrupts weak secondary, tertiary, and quaternary interactions, but does NOT break the covalent peptide bonds of the primary structure.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 148,
        "q": "Why does human hemoglobin show a sigmoidal oxygen-dissociation curve rather than a hyperbolic one?",
        "opts": {
            "A": "Due to positive cooperativity among its four subunits in quaternary structure",
            "B": "Because it contains four identical nucleic acids",
            "C": "Because hemoglobin is an unbranched polysaccharide",
            "D": "Because each subunit binds oxygen with zero affinity"
        },
        "ans": "A",
        "exp": "Hemoglobin's quaternary tetrameric structure enables allosteric cooperativity: binding of oxygen to one heme subunit shifts the others from T (tense) to R (relaxed) state, yielding a sigmoid curve.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 149,
        "q": "Myoglobin, which stores oxygen in skeletal muscle fibers, differs from hemoglobin in possessing:",
        "opts": {
            "A": "A single polypeptide chain with a tertiary structure and hyperbolic oxygen binding curve",
            "B": "Four polypeptide subunits and cooperative binding",
            "C": "No heme group whatsoever",
            "D": "Purely beta-sheet architecture without alpha-helices"
        },
        "ans": "A",
        "exp": "Myoglobin is a monomeric protein (one subunit) with tertiary structure; lacking quaternary cooperativity, its oxygen saturation curve is hyperbolic.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 150,
        "q": "Silk fibroin, produced by the silkworm, owes its exceptional tensile strength and flexibility to its predominant content of:",
        "opts": {
            "A": "Antiparallel beta-pleated sheets rich in glycine and alanine",
            "B": "Right-handed alpha-helices rich in proline",
            "C": "Triple-helical collagen ropes",
            "D": "Disulfide-crosslinked keratin"
        },
        "ans": "A",
        "exp": "Silk fibroin is dominated by close-packed antiparallel beta-pleated sheets of small amino acids (glycine, alanine, serine), providing high tensile strength.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 151,
        "q": "Collagen protein exhibits a unique super-secondary structure consisting of a:",
        "opts": {
            "A": "Triple helix composed of three left-handed polypeptide chains wrapped around each other in a right-handed rope",
            "B": "Single right-handed alpha-helix",
            "C": "Large flat antiparallel beta-barrel",
            "D": "Double helix identical to B-DNA"
        },
        "ans": "A",
        "exp": "Collagen consists of three left-handed polyproline-type helical chains wound around each other to form a rigid right-handed triple helix, with glycine every third residue (Gly-X-Y).",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 152,
        "q": "Vitamin C (ascorbic acid) deficiency leads to scurvy and fragile connective tissues because vitamin C is an essential cofactor for:",
        "opts": {
            "A": "Prolyl hydroxylase and lysyl hydroxylase, which hydroxylate proline and lysine in collagen",
            "B": "Peptide bond synthesis on ribosomes",
            "C": "Cleavage of glycogen in the liver",
            "D": "DNA replication by DNA polymerase"
        },
        "ans": "A",
        "exp": "Prolyl and lysyl hydroxylases require ascorbic acid (Fe2+ reduction) to form hydroxyproline and hydroxylysine, which stabilize collagen's triple helix through hydrogen bonds.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 153,
        "q": "Which of the following is a polyunsaturated fatty acid (PUFA) containing 18 carbon atoms and two double bonds?",
        "opts": {
            "A": "Linoleic acid (18:2)",
            "B": "Oleic acid (18:1)",
            "C": "Linolenic acid (18:3)",
            "D": "Palmitic acid (16:0)"
        },
        "ans": "A",
        "exp": "Linoleic acid is an 18-carbon omega-6 polyunsaturated fatty acid with two double bonds (18:2; delta-9,12).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 154,
        "q": "Which of the following fatty acids contains 18 carbons and three double bonds?",
        "opts": {
            "A": "Linolenic acid (18:3)",
            "B": "Linoleic acid (18:2)",
            "C": "Oleic acid (18:1)",
            "D": "Stearic acid (18:0)"
        },
        "ans": "A",
        "exp": "Alpha-linolenic acid is an 18-carbon omega-3 PUFA with three double bonds (18:3; delta-9,12,15).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 155,
        "q": "Arachidonic acid (20 carbons) contains how many carbon-carbon double bonds?",
        "opts": {
            "A": "Four double bonds (20:4)",
            "B": "Two double bonds (20:2)",
            "C": "Three double bonds (20:3)",
            "D": "Zero double bonds (saturated)"
        },
        "ans": "A",
        "exp": "Arachidonic acid is an essential polyunsaturated fatty acid with 20 carbons and 4 double bonds (20:4; delta-5,8,11,14).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 156,
        "q": "Arachidonic acid serves as the biological precursor for the synthesis of which local signaling molecules (eicosanoids)?",
        "opts": {
            "A": "Prostaglandins, thromboxanes, and leukotrienes",
            "B": "Insulin and glucagon",
            "C": "Thyroxine and adrenaline",
            "D": "Glycogen and starch"
        },
        "ans": "A",
        "exp": "Arachidonic acid is released from membrane phospholipids and converted by cyclooxygenase (COX) and lipoxygenase into prostaglandins, thromboxanes, and leukotrienes.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 157,
        "q": "Why do unsaturated fatty acids have lower melting points than saturated fatty acids of the same chain length?",
        "opts": {
            "A": "Cis-double bonds produce rigid kinks in the hydrocarbon chain that prevent tight crystalline packing",
            "B": "They have fewer carbon atoms in their backbone",
            "C": "They are soluble in pure liquid water",
            "D": "They form covalent bonds with sodium ions"
        },
        "ans": "A",
        "exp": "Cis-double bonds introduce bends/kinks in fatty acyl chains, hindering van der Waals packing and lowering the melting point (e.g., liquid plant oils).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 158,
        "q": "Lecithin is a compound phospholipid composed of glycerol, two fatty acids, a phosphate group, and which nitrogenous base?",
        "opts": {
            "A": "Choline",
            "B": "Ethanolamine",
            "C": "Serine",
            "D": "Inositol"
        },
        "ans": "A",
        "exp": "Lecithin (phosphatidylcholine) contains glycerol esterified to two fatty acids, with the third carbon linked via phosphate to the quaternary amine choline.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 159,
        "q": "Cephalin is a membrane phospholipid that contains which nitrogenous base instead of choline?",
        "opts": {
            "A": "Ethanolamine",
            "B": "Inositol",
            "C": "Guanine",
            "D": "Adenine"
        },
        "ans": "A",
        "exp": "Cephalin (phosphatidylethanolamine) contains ethanolamine attached to its phosphate group.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 160,
        "q": "Which lipid forms the protective insulating myelin sheath around nerve axons?",
        "opts": {
            "A": "Sphingomyelin",
            "B": "Triacylglycerol",
            "C": "Inulin",
            "D": "Starch"
        },
        "ans": "A",
        "exp": "Sphingomyelin is a sphingophospholipid containing sphingosine (an amino alcohol) that constitutes a major lipid of the nerve myelin sheath.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 161,
        "q": "Cholesterol is a derived lipid that belongs to which chemical class?",
        "opts": {
            "A": "Sterols (steroids)",
            "B": "Triglycerides",
            "C": "Phospholipids",
            "D": "Glycolipids"
        },
        "ans": "A",
        "exp": "Cholesterol is a 27-carbon sterol possessing a characteristic tetracyclic cyclopentanoperhydrophenanthrene (steroid) nucleus.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 162,
        "q": "Waxes are esters of long-chain fatty acids with:",
        "opts": {
            "A": "Long-chain monohydric alcohols (other than glycerol)",
            "B": "Trihydroxy glycerol",
            "C": "Phosphoric acid and choline",
            "D": "Amino acids"
        },
        "ans": "A",
        "exp": "Waxes (e.g., beeswax, cutin, suberin) are chemical esters of high molecular weight fatty acids with long-chain monohydric alcohols.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 163,
        "q": "The iodine number (iodine value) of a fat or oil is an analytical measure of its:",
        "opts": {
            "A": "Degree of unsaturation (number of double bonds)",
            "B": "Total molecular weight",
            "C": "Free fatty acid content",
            "D": "Amount of glycerol present"
        },
        "ans": "A",
        "exp": "Iodine reacts with double bonds across unsaturated fatty acid chains; hence the grams of iodine absorbed per 100 g of fat measures its degree of unsaturation.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 164,
        "q": "Rancidity of edible fats and oils upon prolonged storage is caused by:",
        "opts": {
            "A": "Auto-oxidation of unsaturated fatty acids forming foul-smelling peroxides, aldehydes, and ketones",
            "B": "Polymerization into rigid cellulose",
            "C": "Hydrolysis of peptide bonds by ambient heat",
            "D": "Precipitation of calcium phosphate crystals"
        },
        "ans": "A",
        "exp": "Lipid peroxidation (oxidative rancidity) attacks double bonds in unsaturated fatty acids, generating malondialdehyde and volatile short-chain fatty acids with rancid odor.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 165,
        "q": "Which of the following is a keto-hexose monosaccharide?",
        "opts": {
            "A": "Fructose",
            "B": "Glucose",
            "C": "Galactose",
            "D": "Mannose"
        },
        "ans": "A",
        "exp": "Fructose is a 6-carbon ketose sugar containing a ketone group at C2, whereas glucose, galactose, and mannose are aldohexoses.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 166,
        "q": "Why is sucrose considered a non-reducing disaccharide, unlike maltose and lactose?",
        "opts": {
            "A": "Both of its anomeric carbons (C1 of glucose and C2 of fructose) are tied up in the glycosidic linkage",
            "B": "It is insoluble in water",
            "C": "It contains only lipid components",
            "D": "It lacks any hydroxyl groups"
        },
        "ans": "A",
        "exp": "Sucrose has an alpha-1,beta-2 glycosidic bond that involves the hemiacetal carbon of glucose and the hemiketal carbon of fructose, leaving no free anomeric carbonyl group.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 167,
        "q": "Maltose is a reducing disaccharide consisting of:",
        "opts": {
            "A": "Two alpha-D-glucose units joined by an alpha-1,4-glycosidic bond",
            "B": "Glucose and fructose joined by an alpha-1,2 bond",
            "C": "Galactose and glucose joined by a beta-1,4 bond",
            "D": "Two fructose units joined by a beta-2,1 bond"
        },
        "ans": "A",
        "exp": "Maltose (malt sugar) is formed by two alpha-D-glucose molecules linked by an alpha-1,4-glycosidic bond, leaving one free hemiacetal reducing group.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 168,
        "q": "Lactose (milk sugar) is a disaccharide composed of:",
        "opts": {
            "A": "Beta-D-galactose and beta-D-glucose joined by a beta-1,4-glycosidic bond",
            "B": "Two alpha-D-glucose units",
            "C": "Alpha-D-glucose and beta-D-fructose",
            "D": "Two galactose units"
        },
        "ans": "A",
        "exp": "Lactose consists of beta-D-galactopyranose and D-glucopyranose joined by a beta-1,4-glycosidic bond.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 169,
        "q": "Starch is composed of two distinct polysaccharide fractions:",
        "opts": {
            "A": "Amylose (unbranched, water-soluble, alpha-1,4) and Amylopectin (branched, water-insoluble, alpha-1,4 and alpha-1,6)",
            "B": "Cellulose and Inulin",
            "C": "Glycogen and Chitin",
            "D": "Pectin and Lignin"
        },
        "ans": "A",
        "exp": "Starch contains 15\u201320% amylose (linear helices linked by alpha-1,4) and 80\u201385% amylopectin (branched chains with alpha-1,6 branch points every 24\u201330 glucose units).",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 170,
        "q": "Glycogen differs structurally from starch amylopectin in being:",
        "opts": {
            "A": "Much more highly branched, with alpha-1,6 branch points occurring every 8 to 12 glucose residues",
            "B": "Completely unbranched and linear",
            "C": "Composed of fructose monomers",
            "D": "Linked exclusively by beta-1,4 bonds"
        },
        "ans": "A",
        "exp": "Glycogen (animal starch) has the same basic structure as amylopectin but is much more frequently branched (every 8\u201312 residues), allowing rapid glucose mobilization.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 171,
        "q": "Cellulose cannot be digested by human digestive enzymes because humans lack:",
        "opts": {
            "A": "Cellulase enzyme capable of hydrolyzing beta-1,4-glycosidic bonds",
            "B": "Salivary amylase",
            "C": "Pancreatic lipase",
            "D": "Pepsin and trypsin"
        },
        "ans": "A",
        "exp": "Human amylases specifically hydrolyze alpha-1,4-glycosidic bonds; humans lack beta-glycosidases (cellulase) needed to break beta-1,4-glycosidic bonds in cellulose.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 172,
        "q": "Ruminant mammals (like cows and sheep) can digest cellulose because:",
        "opts": {
            "A": "Symbiotic anaerobic microorganisms in their rumen produce cellulase enzymes",
            "B": "Their stomach secretes concentrated hydrochloric acid that melts cellulose",
            "C": "They grind cellulose into amino acids in the mouth",
            "D": "Their liver produces high levels of bile salts"
        },
        "ans": "A",
        "exp": "Ruminants host symbiotic anaerobic bacteria and ciliates in their rumen that ferment cellulose by secreting microbial cellulase.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 173,
        "q": "Chitin, which forms the tough exoskeleton of insects and crustaceans, is chemically a homopolymer of:",
        "opts": {
            "A": "N-acetylglucosamine (NAG) linked by beta-1,4-glycosidic bonds",
            "B": "D-glucuronic acid",
            "C": "Alpha-D-glucose",
            "D": "Fructose-1,6-bisphosphate"
        },
        "ans": "A",
        "exp": "Chitin is an unbranched linear homopolymer of N-acetyl-D-glucosamine (NAG) residues joined by beta-1,4-glycosidic bonds.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 174,
        "q": "Hyaluronic acid, an extracellular matrix ground substance in animal tissues and synovial fluid, is an example of a:",
        "opts": {
            "A": "Glycosaminoglycan (heteropolysaccharide / mucopolysaccharide)",
            "B": "Storage homopolysaccharide",
            "C": "Simple triglyceride",
            "D": "Polypeptide hormone"
        },
        "ans": "A",
        "exp": "Hyaluronic acid is a linear mucopolysaccharide (heteropolysaccharide) made of repeating disaccharide units of D-glucuronic acid and N-acetylglucosamine.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 175,
        "q": "Heparin, a natural anticoagulant produced by mast cells that prevents intravascular blood clotting, is a:",
        "opts": {
            "A": "Sulfated glycosaminoglycan (heteropolysaccharide)",
            "B": "Globular enzyme",
            "C": "Neutral sterol",
            "D": "Monosaccharide sugar"
        },
        "ans": "A",
        "exp": "Heparin is a highly sulfated glycosaminoglycan that binds antithrombin III, accelerating its inhibition of thrombin and factor Xa.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 176,
        "q": "According to Chargaff's rules of DNA base pairing for double-stranded DNA:",
        "opts": {
            "A": "The molar ratio of purines to pyrimidines is always equal to 1:1 ([A + G] = [T + C])",
            "B": "Adenine is always equal to Guanine ([A] = [G])",
            "C": "Cytosine is always equal to Thymine ([C] = [T])",
            "D": "The ratio of [A + T] / [G + C] is always 1.0 in all organisms"
        },
        "ans": "A",
        "exp": "Erwin Chargaff demonstrated that in double-stranded DNA: [A] = [T], [G] = [C], and total purines equal total pyrimidines ([A + G] = [T + C]).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 177,
        "q": "If a double-stranded DNA molecule has 20% Cytosine, what will be the percentage of Adenine in this DNA?",
        "opts": {
            "A": "30%",
            "B": "20%",
            "C": "40%",
            "D": "10%"
        },
        "ans": "A",
        "exp": "By Chargaff's rule: Cytosine = 20%, so Guanine = 20%. Together G + C = 40%. The remaining 60% is A + T. Since A = T, Adenine = 60% / 2 = 30%.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 178,
        "q": "If a double-stranded DNA sample has 36% Thymine, what is the percentage of Guanine in the sample?",
        "opts": {
            "A": "14%",
            "B": "36%",
            "C": "28%",
            "D": "18%"
        },
        "ans": "A",
        "exp": "Thymine = 36%, so Adenine = 36%. Total A + T = 72%. The remaining G + C = 100 - 72 = 28%. Since G = C, Guanine = 28% / 2 = 14%.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 179,
        "q": "Why does Chargaff's rule NOT apply to viral RNA or single-stranded DNA (ssDNA)?",
        "opts": {
            "A": "Base pairing between complementary strands does not occur throughout the molecule in single-stranded nucleic acids",
            "B": "RNA does not contain purine bases",
            "C": "Single-stranded DNA has no phosphodiester bonds",
            "D": "Viral nucleic acids lack pentose sugars"
        },
        "ans": "A",
        "exp": "Chargaff's rules strictly apply to double-stranded nucleic acids where base pairing dictates stoichiometric equality between complementary strands.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 180,
        "q": "Why is DNA chemically more stable and less reactive than RNA as genetic material?",
        "opts": {
            "A": "Deoxyribose lacks the reactive 2'-OH group, and DNA contains thymine instead of uracil",
            "B": "DNA has no hydrogen bonds between strands",
            "C": "RNA contains double the amount of purines",
            "D": "DNA lacks phosphodiester bonds"
        },
        "ans": "A",
        "exp": "The 2'-OH group in ribose makes RNA prone to alkaline hydrolysis, whereas deoxyribose has 2'-H. Furthermore, thymine (5-methyluracil) provides extra photochemical stability.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 181,
        "q": "The two polynucleotide strands of a DNA double helix run in opposite directions; this architectural orientation is termed:",
        "opts": {
            "A": "Antiparallel (one runs 5'->3', the other runs 3'->5')",
            "B": "Parallel (both run 5'->3')",
            "C": "Perpendicular",
            "D": "Radial"
        },
        "ans": "A",
        "exp": "The two strands of DNA double helix run antiparallel: one strand is oriented 5' to 3' and the complementary strand runs 3' to 5'.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 182,
        "q": "The diameter of the B-DNA double helix is constant at approximately:",
        "opts": {
            "A": "2.0 nm (20 \u00c5)",
            "B": "3.4 nm (34 \u00c5)",
            "C": "0.34 nm (3.4 \u00c5)",
            "D": "20 nm (200 \u00c5)"
        },
        "ans": "A",
        "exp": "A purine (double ring) always pairs with a pyrimidine (single ring), maintaining a uniform diameter of ~2.0 nm (20 \u00c5) across the double helix.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 183,
        "q": "In a DNA molecule, the plane of one base pair stacks over the other in a double helix. This base stacking confers stability primarily through:",
        "opts": {
            "A": "Hydrophobic interactions and van der Waals forces between aromatic rings",
            "B": "Covalent peptide bonds linking bases",
            "C": "Direct ionic bonds with calcium ions",
            "D": "High energy ATP hydrolysis"
        },
        "ans": "A",
        "exp": "In addition to hydrogen bonding between complementary pairs, the pi-pi hydrophobic stacking interactions between planar aromatic base pairs stabilize the double helix.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 184,
        "q": "The thermal denaturation of double-stranded DNA (melting) involves the disruption of:",
        "opts": {
            "A": "Hydrogen bonds between complementary base pairs without breaking covalent phosphodiester bonds",
            "B": "Phosphodiester bonds of the sugar-phosphate backbone",
            "C": "N-glycosidic bonds releasing free bases",
            "D": "Ester bonds in glycerol"
        },
        "ans": "A",
        "exp": "Heating disrupts the relatively weak non-covalent hydrogen bonds between strands, separating the double helix into single strands (denaturation/melting) without breaking covalent backbones.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 185,
        "q": "The melting temperature (Tm) of a DNA sample is higher if the DNA has a higher proportion of:",
        "opts": {
            "A": "G-C base pairs (which have three hydrogen bonds)",
            "B": "A-T base pairs (which have two hydrogen bonds)",
            "C": "Uracil bases",
            "D": "Single-stranded regions"
        },
        "ans": "A",
        "exp": "G-C base pairs share three hydrogen bonds and stronger base stacking compared to A-T pairs (two hydrogen bonds), requiring higher thermal energy to separate.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 186,
        "q": "In an enzyme-catalyzed reaction, what does a low value of Km (Michaelis constant) signify?",
        "opts": {
            "A": "High affinity of the enzyme for its substrate (half-maximal velocity is achieved at low substrate concentration)",
            "B": "Low affinity of the enzyme for its substrate",
            "C": "Very low maximum velocity (Vmax)",
            "D": "Complete absence of an active site"
        },
        "ans": "A",
        "exp": "Km is inversely related to enzyme-substrate affinity; a low Km means the enzyme requires very little substrate to achieve half-maximal velocity, indicating high affinity.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 187,
        "q": "What happens to the Vmax and Km of an enzyme reaction in the presence of a non-competitive inhibitor?",
        "opts": {
            "A": "Vmax decreases while Km remains unchanged",
            "B": "Vmax remains unchanged while Km increases",
            "C": "Both Vmax and Km increase",
            "D": "Km decreases while Vmax is unchanged"
        },
        "ans": "A",
        "exp": "A non-competitive inhibitor binds an allosteric site (independent of substrate binding), rendering active sites non-functional: Vmax decreases, but substrate affinity (Km) of remaining active sites is unchanged.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 188,
        "q": "In uncompetitive inhibition, the inhibitor binds:",
        "opts": {
            "A": "Only to the pre-formed Enzyme-Substrate (ES) complex, decreasing both Vmax and Km",
            "B": "Exclusively to the free apoenzyme active site",
            "C": "To the product molecules in solution",
            "D": "To the coenzyme vitamin moiety"
        },
        "ans": "A",
        "exp": "An uncompetitive inhibitor binds selectively to the ES complex (not free enzyme), decreasing both Vmax and the apparent Km proportionally.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 189,
        "q": "Feedback inhibition (end-product inhibition) in metabolic pathways occurs when:",
        "opts": {
            "A": "The accumulated end-product allosterically inhibits the first committed enzyme of the biosynthetic pathway",
            "B": "Substrate molecules destroy the enzyme active site",
            "C": "The enzyme is hydrolyzed by lysosomes at high pH",
            "D": "ATP is completely depleted"
        },
        "ans": "A",
        "exp": "Feedback inhibition occurs when the final product of a pathway (e.g., isoleucine) binds allosterically to the first committed regulatory enzyme (e.g., threonine deaminase), shutting down further synthesis.",
        "topic": "enzymes",
        "sub": "Enzyme Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 190,
        "q": "The classic 'Induced Fit Theory' of enzyme-substrate binding, which proposed that the active site is flexible and undergoes conformational change upon substrate binding, was proposed by:",
        "opts": {
            "A": "Daniel Koshland (1958)",
            "B": "Emil Fischer (1894)",
            "C": "Michaelis and Menten (1913)",
            "D": "Lineweaver and Burk (1934)"
        },
        "ans": "A",
        "exp": "Daniel Koshland proposed the Induced Fit Theory, modifying Emil Fischer's rigid 'Lock and Key' model to explain active site flexibility.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 191,
        "q": "Which enzyme exhibits the highest catalytic turnover number (converting ~36 million substrate molecules per minute)?",
        "opts": {
            "A": "Carbonic anhydrase",
            "B": "DNA polymerase I",
            "C": "Lysozyme",
            "D": "Pepsin"
        },
        "ans": "A",
        "exp": "Carbonic anhydrase is one of the fastest known enzymes, hydrating approximately 600,000 molecules of CO2 per second (~36 million per minute).",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 192,
        "q": "Carbonic anhydrase requires which essential metal ion cofactor for its catalytic activity?",
        "opts": {
            "A": "Zinc (Zn2+)",
            "B": "Magnesium (Mg2+)",
            "C": "Copper (Cu2+)",
            "D": "Iron (Fe2+)"
        },
        "ans": "A",
        "exp": "Carbonic anhydrase is a metalloenzyme containing a catalytic zinc ion (Zn2+) coordinated by three histidine residues in its active site.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 193,
        "q": "The inactive precursor form of a proteolytic digestive enzyme (such as pepsinogen or trypsinogen) is termed a:",
        "opts": {
            "A": "Zymogen (proenzyme)",
            "B": "Apoenzyme",
            "C": "Holoenzyme",
            "D": "Coenzyme"
        },
        "ans": "A",
        "exp": "Zymogens or proenzymes are inactive enzyme precursors synthesized with extra peptide segments that prevent premature autodigestion until cleaved.",
        "topic": "enzymes",
        "sub": "Enzyme Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 194,
        "q": "Trypsinogen is converted into active trypsin in the small intestine by the enzyme:",
        "opts": {
            "A": "Enterokinase (enteropeptidase)",
            "B": "Pepsin",
            "C": "Hydrochloric acid",
            "D": "Amylase"
        },
        "ans": "A",
        "exp": "Enterokinase (enteropeptidase) secreted by the intestinal brush border cleaves a hexapeptide from trypsinogen to produce active trypsin.",
        "topic": "enzymes",
        "sub": "Enzyme Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 195,
        "q": "Isoenzymes (isozymes) are best defined as:",
        "opts": {
            "A": "Physically distinct forms of an enzyme that catalyze the same chemical reaction but differ in amino acid sequence and kinetic properties",
            "B": "Enzymes that catalyze two completely different reactions simultaneously",
            "C": "Denatured enzyme fragments",
            "D": "Inactive protein precursors"
        },
        "ans": "A",
        "exp": "Isozymes are multiple forms of an enzyme (e.g., LDH1 to LDH5 of lactate dehydrogenase) that catalyze the same biochemical reaction but vary in structure, tissue distribution, and Km.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 196,
        "q": "The continuous series of interconnected chemical reactions occurring inside a living cell is called metabolism. These reactions are divided into:",
        "opts": {
            "A": "Anabolism (biosynthetic, energy-consuming) and Catabolism (degradative, energy-releasing)",
            "B": "Symbiosis and parasitism",
            "C": "Transcription and translation",
            "D": "Mitosis and meiosis"
        },
        "ans": "A",
        "exp": "Metabolism comprises anabolism (endergonic constructive pathways, e.g., photosynthesis) and catabolism (exergonic breakdown pathways, e.g., glycolysis).",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 197,
        "q": "Glycolysis, the universal metabolic pathway that converts glucose into lactic acid or pyruvate through 10 enzyme-catalyzed steps, is an example of:",
        "opts": {
            "A": "Catabolic pathway",
            "B": "Anabolic pathway",
            "C": "Amphibolic pathway lacking enzymes",
            "D": "Non-metabolic precipitation"
        },
        "ans": "A",
        "exp": "Glycolysis breaks down a 6-carbon hexose into two 3-carbon pyruvates, liberating ATP and NADH; it is a quintessential catabolic pathway.",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 198,
        "q": "The chemical bond that stores high energy in Adenosine Triphosphate (ATP) and releases approximately 7.3 kcal/mol upon hydrolysis is the:",
        "opts": {
            "A": "Phosphoanhydride bond",
            "B": "Phosphodiester bond",
            "C": "Peptide bond",
            "D": "Glycosidic bond"
        },
        "ans": "A",
        "exp": "The terminal two phosphate linkages in ATP are high-energy phosphoanhydride bonds between phosphoric acid groups.",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 199,
        "q": "Why can a living cell NOT exist at thermodynamic chemical equilibrium?",
        "opts": {
            "A": "A system at equilibrium cannot perform work; living organisms must maintain a non-equilibrium steady state to continuously work and stay alive",
            "B": "Equilibrium causes all proteins to convert into starch",
            "C": "Equilibrium requires a temperature of 1000\u00b0C",
            "D": "Cells at equilibrium multiply uncontrollably"
        },
        "ans": "A",
        "exp": "As living organisms work continuously, they cannot afford to reach equilibrium. A system at equilibrium cannot perform work; hence life is a continuous non-equilibrium steady state.",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 200,
        "q": "Which secondary metabolite listed in NCERT is an anticancer drug extracted from the Madagascar periwinkle (Catharanthus roseus)?",
        "opts": {
            "A": "Vinblastine",
            "B": "Curcumin",
            "C": "Abrin",
            "D": "Morphine"
        },
        "ans": "A",
        "exp": "Vinblastine is a vinca alkaloid drug extracted from Catharanthus roseus that binds tubulin and is used in cancer chemotherapy.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 201,
        "q": "Curcumin is a pharmacologically active secondary metabolite derived from:",
        "opts": {
            "A": "Curcuma longa (turmeric)",
            "B": "Papaver somniferum (poppy)",
            "C": "Abrus precatorius",
            "D": "Hevea brasiliensis (rubber)"
        },
        "ans": "A",
        "exp": "Curcumin is the yellow polyphenol derived from Curcuma longa (turmeric), listed under 'Drugs' in NCERT.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 202,
        "q": "Which secondary metabolite is an extremely toxic plant protein that inhibits protein synthesis by catalytic inactivation of 60S ribosomal subunits?",
        "opts": {
            "A": "Ricin",
            "B": "Codeine",
            "C": "Carotenoid",
            "D": "Concanavalin A"
        },
        "ans": "A",
        "exp": "Ricin (from castor beans) is an A-B toxin whose A-chain depurinates 28S rRNA in 60S ribosomal subunits, completely arresting protein translation.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 203,
        "q": "The monomeric building block of inulin is:",
        "opts": {
            "A": "Fructose",
            "B": "Glucose",
            "C": "Ribose",
            "D": "Galactose"
        },
        "ans": "A",
        "exp": "Inulin is a fructan, a linear homopolysaccharide consisting of repeating beta-2,1-linked D-fructose units.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 204,
        "q": "Which of the following carbohydrates is a branched polymer of glucose stored in plant chloroplasts and amyloplasts?",
        "opts": {
            "A": "Amylopectin",
            "B": "Amylose",
            "C": "Cellulose",
            "D": "Inulin"
        },
        "ans": "A",
        "exp": "Amylopectin is the branched component of plant starch featuring alpha-1,4 and alpha-1,6-glucosidic bonds.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 205,
        "q": "The enzyme that hydrolyzes internal alpha-1,4-glycosidic bonds in starch is:",
        "opts": {
            "A": "Alpha-amylase",
            "B": "Lipase",
            "C": "Pepsin",
            "D": "Maltase"
        },
        "ans": "A",
        "exp": "Alpha-amylase is an endoglycosidase that hydrolyzes internal alpha-1,4-glucan bonds in starch and glycogen, producing maltose, maltotriose, and limit dextrins.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 206,
        "q": "Which analytical reagent is specifically used to detect the presence of reducing sugars via a color change from blue to brick red?",
        "opts": {
            "A": "Benedict's reagent (or Fehling's solution)",
            "B": "Biuret reagent",
            "C": "Iodine solution",
            "D": "Sudan III dye"
        },
        "ans": "A",
        "exp": "Benedict's reagent (alkaline copper sulfate) is reduced by reducing sugars (with free hemiacetal groups) upon heating, precipitating red cuprous oxide (Cu2O).",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 207,
        "q": "The Biuret test is a biochemical assay used specifically to detect:",
        "opts": {
            "A": "Peptide bonds in proteins (giving a violet/purple color with alkaline copper sulfate)",
            "B": "Reducing monosaccharides",
            "C": "Unsaturated fatty acids",
            "D": "Starch granules"
        },
        "ans": "A",
        "exp": "The Biuret test reacts with compounds containing two or more peptide bonds (-CO-NH-), forming a purple coordination complex with Cu2+ ions in alkaline solution.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 208,
        "q": "The Ninhydrin test produces a deep blue/purple (Ruhemann's purple) color when reacted with:",
        "opts": {
            "A": "Free alpha-amino acids",
            "B": "Triglycerides",
            "C": "Polysaccharides",
            "D": "Phospholipids"
        },
        "ans": "A",
        "exp": "Ninhydrin oxidatively decarboxylates free alpha-amino acids to produce Ruhemann's purple (proline gives a yellow color because of its secondary amine).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 209,
        "q": "Which test is used to detect lipids and fats based on the formation of red stained droplets?",
        "opts": {
            "A": "Sudan III / Sudan IV staining",
            "B": "Iodine test",
            "C": "Biuret test",
            "D": "Fehling's test"
        },
        "ans": "A",
        "exp": "Sudan III and IV are fat-soluble lysochrome dyes that selectively dissolve in lipid droplets, staining them vivid red.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 210,
        "q": "Which test gives a bright yellow color with nitric acid when applied to proteins containing aromatic amino acids?",
        "opts": {
            "A": "Xanthoproteic test",
            "B": "Biuret test",
            "C": "Millon's test",
            "D": "Benedict's test"
        },
        "ans": "A",
        "exp": "The Xanthoproteic test involves nitration of aromatic rings (tyrosine, tryptophan, phenylalanine) with concentrated nitric acid, yielding yellow nitro-derivatives.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 211,
        "q": "Which amino acid contains an indole ring in its structure?",
        "opts": {
            "A": "Tryptophan",
            "B": "Tyrosine",
            "C": "Phenylalanine",
            "D": "Histidine"
        },
        "ans": "A",
        "exp": "Tryptophan possesses an aromatic indole ring (a benzene ring fused to a nitrogen-containing pyrrole ring).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 212,
        "q": "Which amino acid contains an imidazole ring in its side chain?",
        "opts": {
            "A": "Histidine",
            "B": "Arginine",
            "C": "Lysine",
            "D": "Proline"
        },
        "ans": "A",
        "exp": "Histidine possesses an aromatic imidazole ring with a pKa of ~6.0, functioning effectively as a proton donor/acceptor at physiological pH.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 213,
        "q": "Which amino acid possesses a guanidinium group in its side chain, giving it a strongly basic pKa (~12.5)?",
        "opts": {
            "A": "Arginine",
            "B": "Lysine",
            "C": "Histidine",
            "D": "Asparagine"
        },
        "ans": "A",
        "exp": "Arginine has a positively charged guanidinium group in its side chain, making it the most basic standard amino acid.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 214,
        "q": "Which of the following is an amide derivative of aspartic acid?",
        "opts": {
            "A": "Asparagine",
            "B": "Glutamine",
            "C": "Alanine",
            "D": "Glycine"
        },
        "ans": "A",
        "exp": "Asparagine is the carboxamide derivative of aspartic acid, containing an uncharged polar amide group (-CONH2).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 215,
        "q": "Which of the following is an amide derivative of glutamic acid?",
        "opts": {
            "A": "Glutamine",
            "B": "Asparagine",
            "C": "GABA",
            "D": "Valine"
        },
        "ans": "A",
        "exp": "Glutamine is the amide derivative of glutamic acid, playing a critical role in transporting nitrogen and ammonia in the blood.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 216,
        "q": "In a DNA polynucleotide strand, the chemical group present at the free 5'-end is a:",
        "opts": {
            "A": "Phosphate group",
            "B": "Hydroxyl group (-OH)",
            "C": "Carboxyl group",
            "D": "Amino group"
        },
        "ans": "A",
        "exp": "The 5'-end of a polynucleotide chain terminates in a free phosphate group attached to the 5'-carbon of the pentose sugar.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 217,
        "q": "In a DNA polynucleotide strand, the chemical group present at the free 3'-end is a:",
        "opts": {
            "A": "Hydroxyl group (-OH)",
            "B": "Phosphate group",
            "C": "Methyl group",
            "D": "Carbonyl group"
        },
        "ans": "A",
        "exp": "The 3'-end of a polynucleotide chain bears a free hydroxyl group (-OH) attached to the 3'-carbon of the pentose sugar.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 218,
        "q": "The nitrogenous base is attached to which carbon atom of the pentose sugar in a nucleotide?",
        "opts": {
            "A": "Carbon-1' (C1')",
            "B": "Carbon-2' (C2')",
            "C": "Carbon-3' (C3')",
            "D": "Carbon-5' (C5')"
        },
        "ans": "A",
        "exp": "The heterocyclic nitrogenous base is attached to the C1' carbon of the ribose or deoxyribose sugar via a beta-N-glycosidic bond.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 219,
        "q": "The phosphate group in a nucleotide is attached via a phosphoester bond to which carbon of the pentose sugar?",
        "opts": {
            "A": "Carbon-5' (C5')",
            "B": "Carbon-1' (C1')",
            "C": "Carbon-2' (C2')",
            "D": "Carbon-4' (C4')"
        },
        "ans": "A",
        "exp": "The phosphate group is esterified to the hydroxyl group on carbon-5' (C5') of the pentose sugar.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 220,
        "q": "What is the nitrogenous base at position 1 of a pyrimidine linked to?",
        "opts": {
            "A": "C1' of pentose sugar (N1-C1' glycosidic bond)",
            "B": "C5' of pentose sugar",
            "C": "Phosphate group directly",
            "D": "Another nitrogenous base"
        },
        "ans": "A",
        "exp": "In pyrimidines (C, T, U), the N1 nitrogen atom forms the beta-N-glycosidic bond with C1' of the sugar.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 221,
        "q": "In purine nucleosides (adenosine, guanosine), which nitrogen atom forms the beta-N-glycosidic bond with C1' of the pentose sugar?",
        "opts": {
            "A": "Nitrogen-9 (N9)",
            "B": "Nitrogen-1 (N1)",
            "C": "Nitrogen-3 (N3)",
            "D": "Nitrogen-7 (N7)"
        },
        "ans": "A",
        "exp": "In purine nucleotides (A and G), the N9 nitrogen of the purine ring links to the C1' carbon of the sugar.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 222,
        "q": "What is the total number of hydrogen bonds in a B-DNA segment of 100 base pairs that has 40% Guanine-Cytosine content?",
        "opts": {
            "A": "240 hydrogen bonds",
            "B": "300 hydrogen bonds",
            "C": "200 hydrogen bonds",
            "D": "280 hydrogen bonds"
        },
        "ans": "A",
        "exp": "100 bp = 40 GC pairs and 60 AT pairs. Each GC pair has 3 H-bonds (40 \u00d7 3 = 120), and each AT pair has 2 H-bonds (60 \u00d7 2 = 120). Total = 120 + 120 = 240 hydrogen bonds.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 223,
        "q": "What is the length of a double-stranded B-DNA molecule containing 10,000 base pairs?",
        "opts": {
            "A": "3.4 \u00b5m (3,400 nm)",
            "B": "34 \u00b5m",
            "C": "0.34 \u00b5m",
            "D": "340 nm"
        },
        "ans": "A",
        "exp": "Distance between adjacent base pairs = 0.34 nm. Length = 10,000 \u00d7 0.34 nm = 3,400 nm = 3.4 \u00b5m.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 224,
        "q": "How many full helical turns are present in a B-DNA segment of 2,000 base pairs?",
        "opts": {
            "A": "200 turns",
            "B": "2,000 turns",
            "C": "20 turns",
            "D": "100 turns"
        },
        "ans": "A",
        "exp": "B-DNA has roughly 10 base pairs per helical turn (pitch = 3.4 nm); thus 2,000 bp / 10 bp per turn = 200 turns.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 225,
        "q": "Which form of DNA is a left-handed double helix with a zig-zag sugar-phosphate backbone?",
        "opts": {
            "A": "Z-DNA",
            "B": "B-DNA",
            "C": "A-DNA",
            "D": "C-DNA"
        },
        "ans": "A",
        "exp": "Z-DNA is a left-handed double helix with 12 bp per turn and a distinctive zig-zag sugar-phosphate backbone.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 226,
        "q": "A-DNA differs from B-DNA in being:",
        "opts": {
            "A": "A more compact, wider right-handed double helix with 11 base pairs per turn, occurring under dehydrating conditions",
            "B": "A left-handed double helix",
            "C": "A triple-stranded helical complex",
            "D": "A circular single-stranded molecule"
        },
        "ans": "A",
        "exp": "A-DNA is a wider, shorter right-handed helix (11 bp per turn, pitch 2.8 nm) observed in dehydrated DNA fibers and double-stranded RNA.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 227,
        "q": "Which enzyme is classified under Class 1 (Oxidoreductases) in the IUBMB classification?",
        "opts": {
            "A": "Lactate dehydrogenase",
            "B": "Hexokinase",
            "C": "Trypsin",
            "D": "DNA ligase"
        },
        "ans": "A",
        "exp": "Lactate dehydrogenase catalyzes the oxidation-reduction of lactate to pyruvate coupled with NAD+/NADH (EC 1.1.1.27, Oxidoreductase).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 228,
        "q": "Hexokinase, which transfers a phosphate group from ATP to glucose forming glucose-6-phosphate, belongs to Class 2:",
        "opts": {
            "A": "Transferases",
            "B": "Hydrolases",
            "C": "Lyases",
            "D": "Ligases"
        },
        "ans": "A",
        "exp": "Kinases transfer phosphate groups and are classified under Class 2 (Transferases, specifically phosphotransferases).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 229,
        "q": "Pepsin, trypsin, and chymotrypsin, which cleave peptide bonds with the addition of water, belong to Class 3:",
        "opts": {
            "A": "Hydrolases",
            "B": "Lyases",
            "C": "Transferases",
            "D": "Isomerases"
        },
        "ans": "A",
        "exp": "Proteases hydrolyze peptide bonds using water, placing them in Class 3 (Hydrolases).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 230,
        "q": "Aldolase, which splits fructose-1,6-bisphosphate into DHAP and glyceraldehyde-3-phosphate without water, belongs to Class 4:",
        "opts": {
            "A": "Lyases",
            "B": "Hydrolases",
            "C": "Ligases",
            "D": "Transferases"
        },
        "ans": "A",
        "exp": "Aldolase cleaves carbon-carbon bonds without addition of water, generating double bonds or carbonyl groups, typical of Class 4 (Lyases).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 231,
        "q": "Phosphohexose isomerase, which converts glucose-6-phosphate into fructose-6-phosphate, belongs to Class 5:",
        "opts": {
            "A": "Isomerases",
            "B": "Lyases",
            "C": "Ligases",
            "D": "Transferases"
        },
        "ans": "A",
        "exp": "Isomerases (Class 5) catalyze structural or geometric isomerizations.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 232,
        "q": "DNA ligase, which seals nicks in the phosphodiester backbone of DNA using ATP energy, belongs to Class 6:",
        "opts": {
            "A": "Ligases",
            "B": "Lyases",
            "C": "Hydrolases",
            "D": "Transferases"
        },
        "ans": "A",
        "exp": "Class 6 enzymes are Ligases (synthetases), catalyzing joining reactions coupled to ATP hydrolysis.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 233,
        "q": "Which of the following vitamins acts as the precursor for Flavin Adenine Dinucleotide (FAD)?",
        "opts": {
            "A": "Riboflavin (Vitamin B2)",
            "B": "Niacin (Vitamin B3)",
            "C": "Thiamine (Vitamin B1)",
            "D": "Pyridoxine (Vitamin B6)"
        },
        "ans": "A",
        "exp": "Riboflavin (Vitamin B2) is the precursor for FAD and FMN, prosthetic groups in oxidation-reduction enzymes.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 234,
        "q": "Thiamine pyrophosphate (TPP) is a coenzyme derived from which vitamin?",
        "opts": {
            "A": "Thiamine (Vitamin B1)",
            "B": "Folic acid",
            "C": "Vitamin C",
            "D": "Vitamin D"
        },
        "ans": "A",
        "exp": "TPP is derived from Vitamin B1 (thiamine) and serves as a coenzyme for pyruvate dehydrogenase.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 235,
        "q": "Coenzyme A (CoA-SH), which carries acyl groups in the Krebs cycle and fatty acid metabolism, contains which vitamin?",
        "opts": {
            "A": "Pantothenic acid (Vitamin B5)",
            "B": "Biotin (Vitamin B7)",
            "C": "Niacin (Vitamin B3)",
            "D": "Ascorbic acid"
        },
        "ans": "A",
        "exp": "Coenzyme A contains pantothenic acid (Vitamin B5) linked to ADP and cysteamine.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 236,
        "q": "Which metal ion is required by DNA polymerase and hexokinase to coordinate phosphate groups of nucleotide substrates?",
        "opts": {
            "A": "Magnesium (Mg2+)",
            "B": "Copper (Cu2+)",
            "C": "Iron (Fe3+)",
            "D": "Sodium (Na+)"
        },
        "ans": "A",
        "exp": "Mg2+ ions are ubiquitous cofactors for all enzymes that transfer or polymerize nucleotides (hexokinase, DNA/RNA polymerases).",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 237,
        "q": "Which trace metal ion is present in cytochrome oxidase (Complex IV) of the mitochondrial respiratory chain?",
        "opts": {
            "A": "Copper and Iron",
            "B": "Zinc and Magnesium",
            "C": "Molybdenum and Cobalt",
            "D": "Calcium and Nickel"
        },
        "ans": "A",
        "exp": "Cytochrome c oxidase contains two heme groups (a and a3) and two copper centers (CuA and CuB).",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 238,
        "q": "Which mineral element is an essential cofactor for the nitrogen-fixing enzyme nitrogenase in rhizobia?",
        "opts": {
            "A": "Molybdenum and Iron (Mo-Fe protein)",
            "B": "Zinc and Copper",
            "C": "Magnesium and Manganese",
            "D": "Cobalt and Iodine"
        },
        "ans": "A",
        "exp": "Nitrogenase is a molybdenum-iron protein complex (Mo-Fe protein) essential for biological nitrogen fixation.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 239,
        "q": "Heavy metals like lead (Pb2+), mercury (Hg2+), and silver (Ag+) inhibit enzymes irreversibly by:",
        "opts": {
            "A": "Binding tightly to sulfhydryl (-SH) groups of cysteine residues and disrupting tertiary conformation",
            "B": "Competing with substrate at the active site reversibly",
            "C": "Increasing the Km of the reaction without affecting Vmax",
            "D": "Replacing the pentose sugar in RNA"
        },
        "ans": "A",
        "exp": "Heavy metals react covalently with sulfhydryl (-SH) groups of cysteines, precipitating proteins and destroying tertiary structures irreversibly.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 240,
        "q": "A competitive inhibitor can be outcompeted and its inhibitory effect fully reversed by:",
        "opts": {
            "A": "Increasing the substrate concentration [S] to sufficiently high levels",
            "B": "Lowering the temperature to 0\u00b0C",
            "C": "Adding non-competitive inhibitors",
            "D": "Dialyzing out the apoenzyme"
        },
        "ans": "A",
        "exp": "Because competitive inhibitors compete for the same active site, increasing substrate concentration increases the probability of substrate binding, overcoming inhibition and restoring Vmax.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 241,
        "q": "An enzyme has a Km of 2 mM for substrate X and a Km of 20 mM for substrate Y. This implies that the enzyme has:",
        "opts": {
            "A": "Higher affinity for substrate X than for substrate Y",
            "B": "Higher affinity for substrate Y than for substrate X",
            "C": "Equal affinity for both substrates",
            "D": "Zero affinity for substrate X"
        },
        "ans": "A",
        "exp": "A lower Km represents higher affinity because a lower substrate concentration is needed to achieve half-maximal velocity.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 242,
        "q": "The turnover number (kcat) of an enzyme represents:",
        "opts": {
            "A": "The maximum number of substrate molecules converted to product per active site per unit time",
            "B": "The substrate concentration at half Vmax",
            "C": "The activation energy in kcal/mol",
            "D": "The number of amino acids in the apoenzyme"
        },
        "ans": "A",
        "exp": "Turnover number (kcat = Vmax / [E]total) indicates the catalytic speed, i.e., number of substrate molecules converted per active site per second.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 243,
        "q": "Which of the following is an example of an allosteric enzyme regulated by positive cooperativity?",
        "opts": {
            "A": "Phosphofructokinase-1 (PFK-1)",
            "B": "Salivary amylase",
            "C": "Ribonuclease A",
            "D": "Lysozyme"
        },
        "ans": "A",
        "exp": "PFK-1 is the key allosteric rate-limiting enzyme of glycolysis, regulated allosterically by ATP, AMP, and fructose-2,6-bisphosphate.",
        "topic": "enzymes",
        "sub": "Enzyme Regulation",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 244,
        "q": "Which of the following biomolecules contains both ester and amide bonds?",
        "opts": {
            "A": "Phosphatidylserine / Sphingolipids",
            "B": "Glycogen",
            "C": "Inulin",
            "D": "Cellulose"
        },
        "ans": "A",
        "exp": "Sphingolipids like sphingomyelin contain an amide bond between fatty acid and sphingosine, and ester/phosphoester bonds with headgroups.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 245,
        "q": "The glycosidic bond between two monosaccharides involves which functional groups?",
        "opts": {
            "A": "A hemiacetal (or hemiketal) hydroxyl group and an alcohol hydroxyl group with loss of H2O",
            "B": "Two carboxylic acid groups",
            "C": "An amino group and a carboxyl group",
            "D": "Two phosphate groups"
        },
        "ans": "A",
        "exp": "A glycosidic bond forms between the hemiacetal/hemiketal -OH of an anomeric carbon and an -OH group of another sugar with elimination of water.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 246,
        "q": "The peptide bond (-CO-NH-) possesses partial double bond character due to:",
        "opts": {
            "A": "Resonance delocalization of the lone pair of electrons on the nitrogen atom with the carbonyl double bond",
            "B": "Direct triple bonding between carbon and nitrogen",
            "C": "Rapid tautomerization into an ester",
            "D": "Covalent bonding with adjacent lipids"
        },
        "ans": "A",
        "exp": "Resonance between the carbonyl oxygen and nitrogen gives the C-N peptide bond ~40% double bond character, making it planar and rigid.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 247,
        "q": "Because of the partial double-bond character of the peptide bond, rotation is restricted around:",
        "opts": {
            "A": "The C-N peptide bond itself",
            "B": "The alpha-carbon - nitrogen bond (phi)",
            "C": "The alpha-carbon - carbonyl carbon bond (psi)",
            "D": "The side chain R-group bonds"
        },
        "ans": "A",
        "exp": "The C-N peptide bond cannot rotate freely; rotation is permitted only around the N-C_alpha (phi) and C_alpha-C (psi) bonds, as mapped on a Ramachandran plot.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 248,
        "q": "The Ramachandran plot is a graphical representation of:",
        "opts": {
            "A": "Sterically allowed values of the backbone dihedral angles phi and psi in a polypeptide chain",
            "B": "The rate of enzyme catalysis versus substrate concentration",
            "C": "The melting curve of double-stranded DNA",
            "D": "The percentage of amino acids in total cellular ash"
        },
        "ans": "A",
        "exp": "G.N. Ramachandran developed the plot to display sterically allowed conformations of the backbone torsion angles phi and psi for secondary structures.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 249,
        "q": "Which amino acid has the widest range of allowed conformations on a Ramachandran plot because it has no bulky side chain?",
        "opts": {
            "A": "Glycine",
            "B": "Proline",
            "C": "Tryptophan",
            "D": "Valine"
        },
        "ans": "A",
        "exp": "Because glycine's side chain is a single hydrogen atom, it encounters minimal steric hindrance and can adopt many phi/psi angle combinations.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 250,
        "q": "Which amino acid has the most severely restricted conformational range on a Ramachandran plot?",
        "opts": {
            "A": "Proline",
            "B": "Glycine",
            "C": "Alanine",
            "D": "Serine"
        },
        "ans": "A",
        "exp": "Proline's cyclic pyrrolidine ring fixes its phi angle at ~ -65\u00b0, severely restricting its conformational freedom.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
