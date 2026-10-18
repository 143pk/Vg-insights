# Biomolecules Part 4: Q376 to Q500 (Hard)
import json

def get_part4_raw():
    return [
    {
        "q_num": 376,
        "q": "Given below are two statements:\nStatement I: The acid-soluble pool roughly represents the cytoplasmic composition, while the acid-insoluble fraction represents the macromolecules of cytoplasm and organelles.\nStatement II: Lipids are strictly macromolecules with molecular weights exceeding 10,000 Daltons.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct according to NCERT. Statement II is incorrect because lipids have molecular weights not exceeding 800 Daltons; they are micromolecules that appear in the retentate due to vesicle formation.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 377,
        "q": "Given below are two statements:\nStatement I: Living tissue contains both organic compounds and inorganic elements.\nStatement II: In ash analysis of living tissue, carbon compounds escape as CO2 and water vapor, leaving inorganic elements in the ash.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements describing chemical tissue analysis and ash analysis.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 378,
        "q": "Given below are two statements:\nStatement I: Primary metabolites have identifiable functions and play known roles in normal physiological processes.\nStatement II: The roles of many secondary metabolites in host organisms are not yet understood, though many are useful to human welfare (e.g., rubber, drugs, spices).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements contrasting primary and secondary metabolites.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 379,
        "q": "Given below are two statements:\nStatement I: Abrin and ricin are secondary metabolites categorized as lectins.\nStatement II: Concanavalin A is a secondary metabolite categorized as a toxin.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are incorrect. Abrin and ricin are 'Toxins', while Concanavalin A is a 'Lectin' (NCERT Table 9.3).",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 380,
        "q": "Given below are two statements:\nStatement I: In proteins, only right-handed helices are observed.\nStatement II: The tertiary structure of a protein is absolutely necessary for the many biological activities of proteins.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim NCERT statements describing protein secondary and tertiary structures.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 381,
        "q": "Given below are two statements:\nStatement I: Collagen is the most abundant protein in the animal world.\nStatement II: RuBisCO is the most abundant protein in the whole of the biosphere.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements on biological abundance of proteins.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 382,
        "q": "Given below are two statements:\nStatement I: Adult human hemoglobin consists of 4 subunits: two alpha subunits and two beta subunits.\nStatement II: Hemoglobin exhibits a quaternary structure.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct statements from NCERT detailing hemoglobin's subunit composition and quaternary architecture.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 383,
        "q": "Given below are two statements:\nStatement I: Palmitic acid has 16 carbons excluding the carboxyl carbon.\nStatement II: Arachidonic acid has 20 carbons including the carboxyl carbon.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is incorrect but Statement II is correct",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is correct but Statement II is incorrect"
        },
        "ans": "A",
        "exp": "Statement I is incorrect because palmitic acid has 16 carbons INCLUDING the carboxyl carbon (15 in the R chain + 1 carboxyl carbon). Statement II is correct.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 384,
        "q": "Given below are two statements:\nStatement I: In a polysaccharide chain, the right end is the reducing end and the left end is the non-reducing end.\nStatement II: Cellulose forms helical secondary structures that trap iodine molecules to give a blue color.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because cellulose does not form helices and cannot hold iodine (starch forms helices and holds iodine).",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 385,
        "q": "Given below are two statements:\nStatement I: Inulin is a polymer of fructose.\nStatement II: The exoskeleton of arthropods has a complex polysaccharide called chitin, which is a homopolymer of N-acetylglucosamine.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements regarding inulin and chitin.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 386,
        "q": "Given below are two statements:\nStatement I: Adenosine, guanosine, cytidine, uridine, and thymidine are nucleosides.\nStatement II: Adenylic acid, thymidylic acid, guanylic acid, uridylic acid, and cytidylic acid are nucleotides.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements distinguishing nucleosides from nucleotides.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 387,
        "q": "Given below are two statements:\nStatement I: The pitch of the B-DNA double helix is 3.4 nm with roughly 10 base pairs per turn.\nStatement II: The distance between two adjacent base pairs in B-DNA is 0.34 nm.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT numerical facts regarding B-DNA helical geometry.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 388,
        "q": "Given below are two statements:\nStatement I: Adenine pairs with thymine via two hydrogen bonds, and guanine pairs with cytosine via three hydrogen bonds.\nStatement II: Each strand of DNA appears like a helical staircase, with each step representing a pair of bases.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim NCERT statements illustrating the Watson-Crick DNA double helix.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 389,
        "q": "Given below are two statements:\nStatement I: Enzymes work by increasing the activation energy of the chemical reaction.\nStatement II: The transition state of the substrate during an enzyme-catalyzed reaction is a high-energy, unstable state.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is incorrect but Statement II is correct",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is correct but Statement II is incorrect"
        },
        "ans": "A",
        "exp": "Statement I is incorrect because enzymes LOWER the activation energy barrier (they do not increase it). Statement II is correct.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 390,
        "q": "Given below are two statements:\nStatement I: Low temperature preserves the enzyme in a temporarily inactive state, whereas high temperature destroys enzymatic activity by denaturation.\nStatement II: Each enzyme shows its highest activity at a particular temperature and pH called the optimum temperature and optimum pH.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements explaining the temperature and pH dependence of enzyme catalysis.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 391,
        "q": "Given below are two statements:\nStatement I: When the inhibitor closely resembles the substrate in its molecular structure, it is called a competitive inhibitor.\nStatement II: Inhibition of succinic dehydrogenase by malonate is an example of competitive inhibition.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements regarding competitive inhibition.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 392,
        "q": "Given below are two statements:\nStatement I: In competitive inhibition, the maximum velocity (Vmax) of the reaction decreases significantly.\nStatement II: Competitive inhibitors increase the apparent Michaelis constant (Km) of the enzyme for its substrate.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is incorrect but Statement II is correct",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is correct but Statement II is incorrect"
        },
        "ans": "A",
        "exp": "Statement I is incorrect because Vmax remains UNCHANGED in competitive inhibition (it can be reached by adding sufficient substrate). Statement II is correct.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 393,
        "q": "Given below are two statements:\nStatement I: Hydrolases catalyze hydrolysis of ester, ether, peptide, glycosidic, C-C, or P-N bonds.\nStatement II: Lyases catalyze removal of groups from substrates by mechanisms other than hydrolysis, leaving double bonds.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim NCERT definitions of Class 3 (Hydrolases) and Class 4 (Lyases).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 394,
        "q": "Given below are two statements:\nStatement I: Ligases catalyze the linking together of two compounds, e.g., enzymes which catalyze joining of C-O, C-S, C-N, P-O bonds.\nStatement II: Isomerases catalyze inter-conversion of optical, geometric, or positional isomers.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim NCERT definitions of Class 6 (Ligases) and Class 5 (Isomerases).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 395,
        "q": "Given below are two statements:\nStatement I: Prosthetic groups are organic compounds that are tightly bound to the apoenzyme.\nStatement II: In peroxidase and catalase, haem is the prosthetic group and it is a part of the active site of the enzyme.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements regarding prosthetic groups.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 396,
        "q": "Given below are two statements:\nStatement I: Coenzymes are organic compounds whose association with the apoenzyme is only transient, usually occurring during catalysis.\nStatement II: The essential chemical components of many coenzymes are vitamins (e.g., NAD and NADP contain niacin).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements regarding coenzymes.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 397,
        "q": "Given below are two statements:\nStatement I: Zinc is a cofactor for the proteolytic enzyme carboxypeptidase.\nStatement II: Catalytic activity is completely retained even when the cofactor is removed from the holoenzyme.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because catalytic activity is LOST when the cofactor is removed from the enzyme.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 398,
        "q": "Given below are two statements:\nStatement I: The blood concentration of glucose in a normal healthy resting human is 4.2 mmol/L to 6.1 mmol/L.\nStatement II: The living state is an equilibrium steady state capable of performing continuous work.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because the living state is a NON-EQUILIBRIUM steady state (a system at equilibrium cannot perform work).",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 399,
        "q": "Given below are two statements:\nStatement I: Lipids are not strictly macromolecules because their molecular weight does not exceed 800 Da.\nStatement II: Nucleic acids are macromolecules because their molecular weight is in the range of ten thousand Daltons and above.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements explaining molecular weight classifications.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 400,
        "q": "Given below are two statements:\nStatement I: Water constitutes 70\u201390% of total cellular mass, while proteins constitute 10\u201315%.\nStatement II: Carbohydrates constitute 3% and lipids constitute 2% of total cellular mass.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim correct percentage values from NCERT Table 9.4.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 401,
        "q": "Given below are two statements:\nStatement I: Glycine has a hydrogen atom as its R group and is the simplest amino acid.\nStatement II: Alanine has a methyl group (-CH3) and serine has a hydroxymethyl group (-CH2OH) as their R groups.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT descriptions of amino acid structures.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 402,
        "q": "Given below are two statements:\nStatement I: Glutamic acid is an acidic amino acid, while lysine is a basic amino acid.\nStatement II: Valine is an aromatic amino acid.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because valine is a neutral aliphatic amino acid (tyrosine, phenylalanine, and tryptophan are aromatic).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 403,
        "q": "Given below are two statements:\nStatement I: Gingelly oil has a lower melting point than fats and remains as oil in winters.\nStatement II: Lecithin is a phospholipid present in cell membranes.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct verbatim NCERT statements regarding lipids.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 404,
        "q": "Given below are two statements:\nStatement I: Chitin is a complex homopolysaccharide of N-acetylglucosamine found in arthropod exoskeletons.\nStatement II: Plant cell walls contain cellulose, which is an unbranched polymer of glucose.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT statements on polysaccharides.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 405,
        "q": "Given below are two statements:\nStatement I: Ribozymes are catalytic RNA molecules that act as enzymes.\nStatement II: Carbonic anhydrase is an inorganic catalyst that does not contain any protein.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because carbonic anhydrase is a proteinaceous enzyme (metalloenzyme containing Zn2+).",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 406,
        "q": "Given below are two statements:\nStatement I: A peptide bond is formed by condensation of carboxyl group of one amino acid with amino group of another amino acid with loss of water.\nStatement II: A phosphodiester bond links the 3'-OH of one nucleotide sugar to the 5'-phosphate of the next nucleotide sugar.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT definitions of peptide and phosphodiester bonds.",
        "topic": "macromolecules",
        "sub": "Nature of Bonds",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 407,
        "q": "Given below are two statements:\nStatement I: The first amino acid in a protein chain is called the C-terminal amino acid.\nStatement II: The last amino acid in a protein chain is called the N-terminal amino acid.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are inverted and incorrect: the FIRST amino acid is the N-terminal, and the LAST is the C-terminal amino acid.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 408,
        "q": "Given below are two statements:\nStatement I: Morphine and codeine are secondary metabolites classified as alkaloids.\nStatement II: Vinblastine and curcumin are secondary metabolites classified as drugs.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct entries in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 409,
        "q": "Given below are two statements:\nStatement I: GLUT-4 is a protein that enables glucose transport into cells.\nStatement II: Antibody is a protein that fights against infectious agents.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct entries from NCERT Table 9.5.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 410,
        "q": "Given below are two statements:\nStatement I: A zwitterion carries both positive and negative charges on the same molecule with a net neutral charge.\nStatement II: At isoelectric point, an amino acid does not migrate in an electric field.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct physical descriptions of zwitterions and isoelectric point.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 411,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Lipids are found in the acid-insoluble macromolecular fraction, although their molecular weight does not exceed 800 Da.\nReason (R): Cell membranes fragment during tissue grinding to form water-insoluble vesicles that are retained on cheesecloth.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) gives the exact biophysical reason why lipids appear in the retentate despite not being polymeric macromolecules.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 412,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Starch gives an intense blue color with iodine, but cellulose does not.\nReason (R): Starch forms helical secondary structures that trap iodine molecules, whereas cellulose lacks complex helices.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) provides the structural explanation for the difference in iodine reaction between starch and cellulose.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 413,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Enzymes accelerate the rate of chemical reactions by several million-fold.\nReason (R): Enzymes lower the activation energy barrier required to convert substrates into the transition state.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) correctly explains the catalytic mechanism of enzyme action.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 414,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In competitive inhibition, the inhibition can be fully overcome by increasing the substrate concentration.\nReason (R): Competitive inhibitors bind to the same catalytic active site as the substrate in a reversible manner.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why high [S] outcompetes the inhibitor to achieve Vmax.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 415,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): A living organism can never afford to reach chemical equilibrium.\nReason (R): A system at equilibrium is incapable of performing work, and living state requires continuous metabolic work.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why life is maintained as a continuous non-equilibrium steady state.",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 416,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Glycine does not rotate the plane of plane-polarized light.\nReason (R): The alpha-carbon of glycine is bonded to two identical hydrogen atoms and lacks a chiral center.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the optical inactivity of glycine.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 417,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Proteins are always heteropolymers and never homopolymers.\nReason (R): Natural proteins are assembled from 20 different kinds of amino acids in genetically specified sequences.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) provides the exact definition and reason why proteins are heteropolymers.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 418,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Tertiary structure of a protein is essential for its enzymatic activity.\nReason (R): Folding of the polypeptide chain into tertiary structure creates specific active site crevices where substrates bind.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) correctly explains why tertiary structure is required for catalysis.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 419,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): When an enzyme is heated above 60\u00b0C, it typically loses its catalytic activity permanently.\nReason (R): High temperature disrupts hydrogen bonds and hydrophobic interactions, denaturing the tertiary protein structure.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the molecular basis of heat denaturation of enzymes.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 420,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): DNA is chemically more stable and less reactive than RNA as the hereditary material.\nReason (R): Deoxyribose sugar lacks the reactive 2'-OH group present in ribose, and thymine provides photochemical stability.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why DNA is chemically more stable than RNA.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 421,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In double-stranded B-DNA, the ratio of (A + G) to (T + C) is always equal to 1.0.\nReason (R): Adenine specifically hydrogen bonds with thymine and guanine specifically hydrogen bonds with cytosine.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains Chargaff's stoichiometric equivalence of purines and pyrimidines.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 422,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Sulfa drugs act as effective antibacterial agents against pathogenic bacteria.\nReason (R): Sulfa drugs closely mimic para-aminobenzoic acid (PABA) and competitively inhibit bacterial folic acid synthesis.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) provides the pharmacological mechanism of competitive inhibition by sulfa drugs.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 423,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Coenzymes are organic compounds that serve as essential cofactors in enzyme-catalyzed reactions.\nReason (R): Many coenzymes contain vitamins such as niacin in NAD/NADP and riboflavin in FAD.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the biochemical vitamin nature of coenzymes.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 424,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Adult human hemoglobin exhibits cooperative binding of oxygen.\nReason (R): Hemoglobin is a tetrameric protein exhibiting quaternary structure where oxygen binding to one subunit induces conformational changes in the others.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the allosteric cooperativity of hemoglobin.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 425,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Sucrose does not reduce Benedict's or Fehling's solution.\nReason (R): In sucrose, both anomeric carbons of glucose and fructose are involved in the alpha-1,beta-2 glycosidic linkage.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why sucrose is non-reducing (lack of free hemiacetal/hemiketal groups).",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 426,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Humans cannot derive energy from eating cotton fibers or paper containing pure cellulose.\nReason (R): Human digestive secretions lack cellulase enzymes that can hydrolyze beta-1,4-glycosidic bonds.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) gives the digestive physiological reason why cellulose is non-caloric fiber in humans.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 427,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): When an enzyme is subjected to a competitive inhibitor, the apparent Km increases while Vmax remains unaltered.\nReason (R): The inhibitor decreases the affinity of the enzyme for substrate, but saturation can still be achieved at very high substrate levels.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the kinetics of competitive inhibition.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 428,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Proline residues are rarely found in the middle of standard alpha-helices.\nReason (R): Proline is an imino acid with a cyclic side chain that creates steric clashes and lacks a backbone amide hydrogen for hydrogen bonding.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why proline acts as a helix breaker.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 429,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Heating double-stranded DNA produces a hyperchromic shift at 260 nm.\nReason (R): Unwinding of the double helix separates stacked nitrogenous bases, exposing them to absorb more UV radiation.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the hyperchromic effect.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 430,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Scurvy causes abnormal bleeding and poor wound healing.\nReason (R): Ascorbic acid is a required cofactor for prolyl hydroxylase in collagen synthesis, and its absence destabilizes the collagen triple helix.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) provides the molecular etiology of scurvy.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 431,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Enzymes isolated from thermophiles (like Taq polymerase) retain catalytic power above 80\u00b0C.\nReason (R): Thermophilic enzymes possess unique structural adaptations such as higher salt bridges and hydrophobic cores that resist thermal denaturation.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains thermal stability in thermophilic biocatalysts.",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 432,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The peptide bond between two amino acids is rigid and planar.\nReason (R): Resonance delocalization between the carbonyl double bond and nitrogen lone pair gives the C-N bond partial double bond character.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the planarity and restricted rotation of the peptide bond.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 433,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Plant oils remain liquid at room temperature and during winter months.\nReason (R): Plant oils are rich in unsaturated fatty acids whose cis-double bonds lower their melting points.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why plant oils remain liquid (low melting points due to cis-unsaturation).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 434,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Disulfide bonds are critical for maintaining the tertiary structure of extracellular proteins like insulin and antibodies.\nReason (R): Disulfide bonds are strong covalent linkages formed by oxidation of two cysteine sulfhydryl (-SH) groups.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the covalent stabilizing role of disulfide crosslinks.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 435,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Z-DNA is an atypical left-handed double helix.\nReason (R): Z-DNA features alternating purine-pyrimidine tracts (like alternating GC repeats) resulting in a zig-zag sugar-phosphate backbone.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the structural basis of Z-DNA conformation.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 436,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Carbonic anhydrase is one of the fastest enzymes known in biological systems.\nReason (R): It can hydrate approximately 600,000 molecules of CO2 into carbonic acid per second per active site.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) quantifies the extraordinary catalytic speed of carbonic anhydrase as stated in NCERT.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 437,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In non-competitive inhibition, the maximal velocity (Vmax) decreases while the Km value remains unchanged.\nReason (R): The non-competitive inhibitor binds to an allosteric site and inactivates catalytic activity without interfering with substrate binding.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) gives the mechanistic explanation for non-competitive inhibition kinetics.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 438,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In sickle cell hemoglobin (HbS), deoxygenated molecules aggregate into fibrous polymers that distort RBCs into sickle shapes.\nReason (R): The replacement of polar glutamic acid by hydrophobic valine at position 6 creates a 'sticky' hydrophobic patch on the beta-chain.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the biophysical mechanism of HbS polymerization.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 439,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Removal of a cofactor from a holoenzyme completely destroys its catalytic activity.\nReason (R): Cofactors participate directly in substrate binding or chemical catalysis at the active site.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why cofactors are indispensable for catalysis.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 440,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Agarose gel electrophoresis resolves larger DNA fragments than polyacrylamide gel electrophoresis.\nReason (R): Agarose gels have larger pore sizes suitable for separating double-stranded DNA fragments up to tens of kilobases.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the choice of agarose for resolving large DNA fragments.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 441,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The Biuret test yields a purple color with proteins but not with free individual amino acids.\nReason (R): The Biuret reaction requires a minimum of two peptide bonds to coordinate with Cu2+ ions in alkaline solution.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains why free amino acids test negative in the Biuret test.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 442,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Lysozyme in tears hydrolyzes bacterial cell walls without damaging human cells.\nReason (R): Lysozyme specifically cleaves beta-1,4-glycosidic bonds in peptidoglycan, which is absent in mammalian cell membranes.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains the selective antibacterial action of lysozyme.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 443,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Inulin is readily filtered by renal glomeruli and is neither reabsorbed nor secreted by renal tubules.\nReason (R): Inulin clearance is clinically used as the gold standard for measuring Glomerular Filtration Rate (GFR).\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is NOT the correct explanation of (A)",
            "B": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true facts, but (A) is the physiological reason why inulin clearance measures GFR in (R), rather than (R) explaining (A).",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 444,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The Lineweaver-Burk double reciprocal plot transforms the hyperbolic Michaelis-Menten curve into a straight line.\nReason (R): Taking the reciprocal of both reaction velocity (1/v) and substrate concentration (1/[S]) yields a linear equation of the form y = mx + c.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) explains how the double reciprocal transformation creates a linear plot.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 445,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Allopurinol is effective in the medical treatment of chronic gout.\nReason (R): Allopurinol competitively inhibits the enzyme xanthine oxidase, lowering the biosynthesis of uric acid.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) gives the precise enzymatic mechanism for allopurinol's therapeutic efficacy in gout.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 446,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Secondary Metabolite Class)\n(a) Alkaloids\n(b) Toxins\n(c) Lectins\n(d) Drugs\nColumn II (Examples in NCERT)\n(i) Concanavalin A\n(ii) Morphine, Codeine\n(iii) Vinblastine, Curcumin\n(iv) Abrin, Ricin",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Alkaloids: Morphine, Codeine; Toxins: Abrin, Ricin; Lectins: Concanavalin A; Drugs: Vinblastine, Curcumin (NCERT Table 9.3).",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 447,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Secondary Metabolite Class)\n(a) Pigments\n(b) Terpenoids\n(c) Essential oils\n(d) Polymeric substances\nColumn II (Examples in NCERT)\n(i) Lemon grass oil\n(ii) Rubber, Gums, Cellulose\n(iii) Carotenoids, Anthocyanins\n(iv) Monoterpenes, Diterpenes",
        "opts": {
            "A": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
            "B": "(a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)",
            "C": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
            "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
        },
        "ans": "A",
        "exp": "Pigments: Carotenoids, Anthocyanins; Terpenoids: Monoterpenes, Diterpenes; Essential oils: Lemon grass oil; Polymeric substances: Rubber, Gums, Cellulose.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 448,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Protein in NCERT Table 9.5)\n(a) Collagen\n(b) Trypsin\n(c) Insulin\n(d) GLUT-4\nColumn II (Biological Role)\n(i) Enables glucose transport into cells\n(ii) Intercellular ground substance\n(iii) Digestive enzyme\n(iv) Endocrine hormone",
        "opts": {
            "A": "(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
            "B": "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)",
            "C": "(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)",
            "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
        },
        "ans": "A",
        "exp": "Collagen: intercellular ground substance; Trypsin: enzyme; Insulin: hormone; GLUT-4: glucose transport.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 449,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Amino Acid)\n(a) Glycine\n(b) Alanine\n(c) Serine\n(d) Glutamic acid\nColumn II (R-Group / Nature)\n(i) Hydroxymethyl group (-CH2OH)\n(ii) Acidic amino acid with extra -COOH\n(iii) Hydrogen atom (-H)\n(iv) Methyl group (-CH3)",
        "opts": {
            "A": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
            "B": "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
            "C": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
            "D": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Glycine: R=-H; Alanine: R=-CH3; Serine: R=-CH2OH; Glutamic acid: acidic.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 450,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Amino Acid Classification)\n(a) Acidic amino acid\n(b) Basic amino acid\n(c) Neutral amino acid\n(d) Aromatic amino acid\nColumn II (Example)\n(i) Valine\n(ii) Tyrosine\n(iii) Aspartic acid\n(iv) Lysine",
        "opts": {
            "A": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
            "B": "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
            "C": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
            "D": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Acidic: Aspartic acid; Basic: Lysine; Neutral: Valine; Aromatic: Tyrosine.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 451,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Biomolecule / Compound)\n(a) Palmitic acid\n(b) Arachidonic acid\n(c) Glycerol\n(d) Lecithin\nColumn II (Chemical Characteristic)\n(i) Trihydroxy propane\n(ii) 16 carbons including carboxyl carbon\n(iii) Phospholipid in cell membranes\n(iv) 20 carbons including carboxyl carbon",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Palmitic acid: 16 carbons; Arachidonic acid: 20 carbons; Glycerol: trihydroxy propane; Lecithin: phospholipid.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 452,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Polysaccharide)\n(a) Starch\n(b) Cellulose\n(c) Inulin\n(d) Chitin\nColumn II (Monomer / Feature)\n(i) Polymer of fructose\n(ii) Forms helices holding I2 molecules (blue color)\n(iii) Homopolymer of N-acetylglucosamine\n(iv) Unbranched beta-1,4-glucose; cannot hold I2",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Starch: forms helices holding I2; Cellulose: unbranched beta-1,4-glucose; Inulin: polymer of fructose; Chitin: polymer of NAG.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 453,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Component of Nucleic Acid)\n(a) Adenine\n(b) Adenosine\n(c) Adenylic acid\n(d) Uracil\nColumn II (Classification)\n(i) Nucleotide\n(ii) Purine nitrogenous base\n(iii) Pyrimidine base found in RNA\n(iv) Nucleoside",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(i), (b)-(iv), (c)-(ii), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Adenine: purine base; Adenosine: nucleoside; Adenylic acid: nucleotide; Uracil: pyrimidine in RNA.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 454,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (B-DNA Parameter)\n(a) Helical pitch\n(b) Distance between base pairs\n(c) Number of base pairs per turn\n(d) Helical diameter\nColumn II (Value)\n(i) 0.34 nm\n(ii) ~ 10 base pairs\n(iii) 3.4 nm\n(iv) 2.0 nm",
        "opts": {
            "A": "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
            "B": "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
            "C": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
            "D": "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Pitch = 3.4 nm; distance between adjacent bp = 0.34 nm; bp per turn = 10; diameter = 2.0 nm.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 455,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Enzyme Class)\n(a) Class 1\n(b) Class 2\n(c) Class 3\n(d) Class 4\nColumn II (Name of Class)\n(i) Lyases\n(ii) Hydrolases\n(iii) Oxidoreductases\n(iv) Transferases",
        "opts": {
            "A": "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
            "B": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
            "C": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
            "D": "(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)"
        },
        "ans": "A",
        "exp": "Class 1: Oxidoreductases; Class 2: Transferases; Class 3: Hydrolases; Class 4: Lyases (NCERT).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 456,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Cofactor Component)\n(a) Haem\n(b) Niacin\n(c) Zinc\n(d) Riboflavin\nColumn II (Associated Enzyme / Molecule)\n(i) Coenzymes NAD and NADP\n(ii) Prosthetic group in peroxidase and catalase\n(iii) FAD prosthetic group\n(iv) Metal ion in carboxypeptidase and carbonic anhydrase",
        "opts": {
            "A": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "B": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
            "C": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "D": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Haem: prosthetic group in peroxidase/catalase; Niacin: NAD/NADP; Zinc: carboxypeptidase; Riboflavin: FAD.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 457,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Cellular Component % in NCERT Table 9.4)\n(a) Water\n(b) Proteins\n(c) Nucleic acids\n(d) Lipids\nColumn II (% of Total Cellular Mass)\n(i) 10 to 15%\n(ii) 70 to 90%\n(iii) 2%\n(iv) 5 to 7%",
        "opts": {
            "A": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "B": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
            "C": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "D": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Water: 70-90%; Proteins: 10-15%; Nucleic acids: 5-7%; Lipids: 2% (NCERT Table 9.4).",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 458,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Protein Structure Level)\n(a) Primary structure\n(b) Secondary structure\n(c) Tertiary structure\n(d) Quaternary structure\nColumn II (Description)\n(i) Right-handed alpha-helix and beta-pleated sheet\n(ii) Positional linear amino acid sequence\n(iii) Multimeric assembly of more than one subunit (e.g., hemoglobin)\n(iv) Folded hollow woolen ball essential for biological active sites",
        "opts": {
            "A": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "B": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
            "C": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "D": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Primary: linear sequence; Secondary: alpha-helix / beta-sheet; Tertiary: hollow woolen ball; Quaternary: multi-subunit assembly.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 459,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Chemical Bond in Polymers)\n(a) Peptide bond\n(b) Glycosidic bond\n(c) Phosphodiester bond\n(d) Ester bond\nColumn II (Biomolecule Where Found)\n(i) Polynucleotides (DNA and RNA)\n(ii) Polypeptides (Proteins)\n(iii) Triglycerides\n(iv) Polysaccharides",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(i), (b)-(iv), (c)-(ii), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Peptide bond in proteins; Glycosidic bond in polysaccharides; Phosphodiester bond in nucleic acids; Ester bond in triglycerides.",
        "topic": "macromolecules",
        "sub": "Nature of Bonds",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 460,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Biochemical Test)\n(a) Biuret test\n(b) Iodine test\n(c) Benedict's test\n(d) Ninhydrin test\nColumn II (Substance Detected)\n(i) Reducing sugars\n(ii) Starch\n(iii) Free alpha-amino acids\n(iv) Peptide bonds in proteins",
        "opts": {
            "A": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "B": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "C": "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)",
            "D": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Biuret: peptide bonds; Iodine: starch; Benedict's: reducing sugars; Ninhydrin: free alpha-amino acids.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 461,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Element in Human Body % in NCERT Table 9.1)\n(a) Oxygen\n(b) Carbon\n(c) Nitrogen\n(d) Calcium\nColumn II (% Body Weight)\n(i) 18.5%\n(ii) 65.0%\n(iii) 1.5%\n(iv) 3.3%",
        "opts": {
            "A": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "B": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
            "C": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "D": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Oxygen: 65.0%; Carbon: 18.5%; Nitrogen: 3.3%; Calcium: 1.5% (NCERT Table 9.1).",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 462,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Lineweaver-Burk Parameter)\n(a) Slope of the line\n(b) Y-intercept\n(c) X-intercept\n(d) Y-axis variable\nColumn II (Mathematical Expression)\n(i) 1 / Vmax\n(ii) -1 / Km\n(iii) Km / Vmax\n(iv) 1 / v",
        "opts": {
            "A": "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
            "B": "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
            "C": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
            "D": "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Slope = Km/Vmax; Y-intercept = 1/Vmax; X-intercept = -1/Km; Y-axis = 1/v.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 463,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Enzymatic Pathology / Drug)\n(a) Malonate\n(b) Sulfa drugs\n(c) Allopurinol\n(d) Streptokinase\nColumn II (Target / Application)\n(i) Competitive inhibitor of bacterial dihydropteroate synthase\n(ii) Competitive inhibitor of succinate dehydrogenase\n(iii) Clot buster dissolving fibrin thrombi\n(iv) Competitive inhibitor of xanthine oxidase in gout",
        "opts": {
            "A": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "B": "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)",
            "C": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "D": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Malonate inhibits succinate dehydrogenase; Sulfa drugs inhibit bacterial folic acid synthesis; Allopurinol inhibits xanthine oxidase; Streptokinase dissolves blood clots.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 464,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Enzyme Class Number)\n(a) Class 5\n(b) Class 6\n(c) Class 3\n(d) Class 2\nColumn II (Representative Enzyme)\n(i) DNA ligase\n(ii) Hexokinase\n(iii) Phosphohexose isomerase\n(iv) Trypsin",
        "opts": {
            "A": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
            "B": "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
            "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
            "D": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Class 5 (Isomerases): Phosphohexose isomerase; Class 6 (Ligases): DNA ligase; Class 3 (Hydrolases): Trypsin; Class 2 (Transferases): Hexokinase.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 465,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Specialized Polysaccharide)\n(a) Agarose\n(b) Peptidoglycan\n(c) Hyaluronic acid\n(d) Heparin\nColumn II (Composition / Function)\n(i) Natural anticoagulant preventing thrombus formation\n(ii) Synovial fluid ground substance of animal joints\n(iii) Extracted from Gelidium for DNA gel electrophoresis\n(iv) Alternating NAG and NAM in bacterial cell walls",
        "opts": {
            "A": "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
            "B": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
            "C": "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)",
            "D": "(a)-(i), (b)-(iv), (c)-(ii), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Agarose: Gelidium for electrophoresis; Peptidoglycan: NAG and NAM in bacteria; Hyaluronic acid: synovial fluid; Heparin: anticoagulant.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 466,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Fatty Acid)\n(a) Palmitic acid\n(b) Stearic acid\n(c) Oleic acid\n(d) Arachidonic acid\nColumn II (Carbon Number & Double Bonds)\n(i) 18 carbons, 1 double bond (18:1)\n(ii) 16 carbons, saturated (16:0)\n(iii) 20 carbons, 4 double bonds (20:4)\n(iv) 18 carbons, saturated (18:0)",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Palmitic acid: 16:0; Stearic acid: 18:0; Oleic acid: 18:1; Arachidonic acid: 20:4.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 467,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (DNA Form)\n(a) B-DNA\n(b) A-DNA\n(c) Z-DNA\nColumn II (Helical Geometry)\n(i) Left-handed helix, 12 bp per turn, zig-zag backbone\n(ii) Right-handed helix, 11 bp per turn, dehydrated form\n(iii) Right-handed helix, 10 bp per turn, Watson-Crick physiological form",
        "opts": {
            "A": "(a)-(iii), (b)-(ii), (c)-(i)",
            "B": "(a)-(ii), (b)-(iii), (c)-(i)",
            "C": "(a)-(iii), (b)-(i), (c)-(ii)",
            "D": "(a)-(i), (b)-(ii), (c)-(iii)"
        },
        "ans": "A",
        "exp": "B-DNA: right-handed, 10 bp/turn; A-DNA: right-handed, 11 bp/turn; Z-DNA: left-handed, 12 bp/turn.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 468,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Disaccharide)\n(a) Maltose\n(b) Lactose\n(c) Sucrose\n(d) Trehalose\nColumn II (Glycosidic Bond Type)\n(i) Alpha-1,beta-2 linkage (non-reducing)\n(ii) Beta-1,4-glycosidic bond\n(iii) Alpha-1,4-glycosidic bond\n(iv) Alpha-1,alpha-1 linkage (insect hemolymph)",
        "opts": {
            "A": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
            "B": "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
            "C": "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
            "D": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Maltose: alpha-1,4; Lactose: beta-1,4; Sucrose: alpha-1,beta-2; Trehalose: alpha-1,alpha-1.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 469,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Genetic / Metabolic Disorder)\n(a) Sickle cell anemia\n(b) Phenylketonuria (PKU)\n(c) SCID\n(d) Gout\nColumn II (Biochemical Defect / Feature)\n(i) Deficiency of adenosine deaminase (ADA)\n(ii) Valine replaces glutamic acid at position 6 of beta-globin\n(iii) Monosodium urate crystal accumulation\n(iv) Deficiency of phenylalanine hydroxylase",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
        },
        "ans": "A",
        "exp": "Sickle cell: Glu6Val; PKU: phenylalanine hydroxylase deficiency; SCID: ADA deficiency; Gout: urate crystals.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 470,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Structural Protein)\n(a) Collagen\n(b) Alpha-keratin\n(c) Silk fibroin\n(d) Elastin\nColumn II (Characteristic Structural Motifs)\n(i) Desmosine crosslinks from lysine side chains\n(ii) Antiparallel beta-pleated sheets rich in glycine and alanine\n(iii) Coiled-coil intermediate filaments rich in disulfide bridges\n(iv) Triple-helix rope rich in glycine and hydroxyproline",
        "opts": {
            "A": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
            "B": "(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)",
            "C": "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
            "D": "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)"
        },
        "ans": "A",
        "exp": "Collagen: triple helix; Keratin: coiled-coil with disulfides; Fibroin: beta-sheets; Elastin: desmosine crosslinks.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 471,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Inhibition Type)\n(a) Competitive inhibition\n(b) Non-competitive inhibition\n(c) Uncompetitive inhibition\nColumn II (Effect on Km and Vmax)\n(i) Both Km and Vmax decrease proportionally\n(ii) Km increases, Vmax remains unchanged\n(iii) Km remains unchanged, Vmax decreases",
        "opts": {
            "A": "(a)-(ii), (b)-(iii), (c)-(i)",
            "B": "(a)-(iii), (b)-(ii), (c)-(i)",
            "C": "(a)-(ii), (b)-(i), (c)-(iii)",
            "D": "(a)-(i), (b)-(iii), (c)-(ii)"
        },
        "ans": "A",
        "exp": "Competitive: Km increases, Vmax unchanged; Non-competitive: Km unchanged, Vmax decreases; Uncompetitive: both Km and Vmax decrease.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 472,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Nucleic Acid Feature)\n(a) Phosphodiester bond\n(b) N-glycosidic bond\n(c) Hydrogen bond\n(d) Base stacking\nColumn II (Locations Joined)\n(i) Between complementary purine and pyrimidine bases\n(ii) Hydrophobic pi-pi interactions between adjacent planar base pairs\n(iii) Between C1' of sugar and nitrogenous base\n(iv) Between 3'-OH of one sugar and 5'-phosphate of next sugar",
        "opts": {
            "A": "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
            "B": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
            "C": "(a)-(iv), (b)-(i), (c)-(iii), (d)-(ii)",
            "D": "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)"
        },
        "ans": "A",
        "exp": "Phosphodiester: 3'-OH to 5'-phosphate; N-glycosidic: C1' to base; Hydrogen bond: between complementary bases; Base stacking: pi-pi interactions.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 473,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Cellular Mass %)\n(a) Carbohydrates\n(b) Lipids\n(c) Ions\n(d) Water\nColumn II (Percentage in NCERT Table 9.4)\n(i) 1%\n(ii) 2%\n(iii) 3%\n(iv) 70-90%",
        "opts": {
            "A": "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
            "B": "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
            "C": "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)",
            "D": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Carbohydrates: 3%; Lipids: 2%; Ions: 1%; Water: 70-90% (NCERT Table 9.4).",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 474,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Amino Acid R-Group)\n(a) -CH3\n(b) -H\n(c) -CH2OH\n(d) -CH2-C6H4-OH\nColumn II (Amino Acid Name)\n(i) Serine\n(ii) Alanine\n(iii) Tyrosine\n(iv) Glycine",
        "opts": {
            "A": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
            "B": "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)",
            "C": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
            "D": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
        },
        "ans": "A",
        "exp": "-CH3 is Alanine; -H is Glycine; -CH2OH is Serine; -CH2-C6H4-OH is Tyrosine.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 475,
        "q": "Match Column I with Column II and select the correct option:\nColumn I (Enzyme Cofactor Type)\n(a) Prosthetic group\n(b) Coenzyme\n(c) Metal ion\n(d) Apoenzyme\nColumn II (Definition / Property)\n(i) Transiently bound organic compound often derived from vitamins\n(ii) Protein portion of enzyme requiring a cofactor\n(iii) Tightly and permanently bound organic compound\n(iv) Forms coordination bonds with substrate and enzyme active site",
        "opts": {
            "A": "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
            "B": "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
            "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
            "D": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)"
        },
        "ans": "A",
        "exp": "Prosthetic group: tightly bound organic; Coenzyme: transient vitamin-derived; Metal ion: coordination bonds; Apoenzyme: protein portion.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Matching-type MCQ"
    },
    {
        "q_num": 476,
        "q": "Read the following statements regarding the chemical analysis of living tissue:\n(i) Living tissue is ground in trichloroacetic acid to obtain a thick slurry.\n(ii) The filtrate represents the acid-soluble pool with molecular weights of 18 to 800 Da.\n(iii) The acid-insoluble fraction contains proteins, nucleic acids, polysaccharides, and lipids.\n(iv) Lipids are strictly macromolecules with molecular weights exceeding 10,000 Da.\n(v) Ash analysis reveals inorganic elements like calcium, magnesium, sulfate, and phosphate.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is incorrect because lipids have molecular weights < 800 Da and are not macromolecules.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 477,
        "q": "Consider the following statements regarding secondary metabolites:\n(i) Pigments include carotenoids and anthocyanins.\n(ii) Morphine and codeine are alkaloids.\n(iii) Abrin and ricin are toxins.\n(iv) Concanavalin A is an essential oil.\n(v) Vinblastine and curcumin are drugs.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (iv) only",
            "D": "(ii), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is incorrect because Concanavalin A is a lectin, not an essential oil (NCERT Table 9.3).",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 478,
        "q": "Read the following statements regarding amino acids:\n(i) They are substituted methanes with four substituents on the alpha-carbon.\n(ii) Glycine has a hydrogen atom as its R group and is achiral.\n(iii) Alanine has a methyl group (-CH3) and serine has a hydroxymethyl group (-CH2OH).\n(iv) Glutamic acid is basic and lysine is acidic.\n(v) Amino acids exist in a zwitterionic form with both positive and negative charges at specific pH.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iv), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is incorrect because glutamic acid is acidic and lysine is basic.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 479,
        "q": "Consider the following statements regarding lipids:\n(i) Palmitic acid has 16 carbons including the carboxyl carbon.\n(ii) Arachidonic acid has 20 carbons including the carboxyl carbon.\n(iii) Glycerol is trihydroxy propane.\n(iv) Gingelly oil has a lower melting point than fats and remains liquid in winter.\n(v) Lecithin is a carbohydrate found in cell walls.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because lecithin is a phospholipid found in cell membranes.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 480,
        "q": "Read the following statements regarding polysaccharides:\n(i) Inulin is a polymer of fructose.\n(ii) In glycogen, the right end is reducing and the left end is non-reducing.\n(iii) Starch forms helical secondary structures that trap iodine to give a blue color.\n(iv) Cellulose forms complex helices and turns deep blue with iodine.\n(v) Chitin is a homopolymer of N-acetylglucosamine found in arthropod exoskeletons.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because cellulose does not form helices and cannot hold iodine.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 481,
        "q": "Consider the following statements regarding proteins:\n(i) Proteins are heteropolymers of amino acids linked by peptide bonds.\n(ii) Collagen is the most abundant protein in animal world.\n(iii) RuBisCO is the most abundant protein in the entire biosphere.\n(iv) The first amino acid in a polypeptide chain is at the C-terminus.\n(v) Tertiary structure is absolutely necessary for the biological activities of proteins.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iv) only",
            "D": "(ii), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because the first amino acid is at the N-terminus, while the last is at the C-terminus.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 482,
        "q": "Read the following statements regarding the Watson-Crick B-DNA double helix:\n(i) Two polynucleotide strands run antiparallel to each other.\n(ii) The pitch of the helix is 3.4 nm with roughly 10 base pairs per turn.\n(iii) The distance between two adjacent base pairs is 0.34 nm.\n(iv) Adenine pairs with thymine by two hydrogen bonds.\n(v) Guanine pairs with cytosine by three hydrogen bonds.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), and (iii) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are completely accurate statements describing B-DNA directly from NCERT.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 483,
        "q": "Consider the following statements regarding enzyme kinetics:\n(i) Enzymes speed up reactions by lowering the activation energy barrier.\n(ii) Substrate binds to the active site to form an obligatory ES complex.\n(iii) Low temperature denatures enzymes permanently.\n(iv) High temperature destroys enzymatic activity by heat denaturation.\n(v) Reaction velocity reaches Vmax when all enzyme molecules are saturated with substrate.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iv), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iv), and (v) are correct. Statement (iii) is false because low temperature preserves enzymes in a temporarily inactive state without denaturing them.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 484,
        "q": "Which of the following statements regarding competitive inhibition are correct?\n(i) Inhibitor closely resembles the substrate in molecular structure.\n(ii) Inhibitor competes with substrate for the active site of the enzyme.\n(iii) Inhibition of succinic dehydrogenase by malonate is a classic example.\n(iv) Competitive inhibition can be reversed by increasing substrate concentration.\n(v) Competitive inhibitors decrease the Vmax to zero.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because Vmax remains unchanged in competitive inhibition.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 485,
        "q": "Consider the following statements regarding enzyme classification:\n(i) Divided into 6 classes, each with 4-13 subclasses.\n(ii) Class 1: Oxidoreductases catalyze redox reactions.\n(iii) Class 2: Transferases catalyze group transfer.\n(iv) Class 3: Hydrolases catalyze cleavage with addition of water.\n(v) Class 4: Ligases catalyze cleavage without water leaving double bonds.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because Class 4 enzymes are Lyases, while Ligases are Class 6.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 486,
        "q": "Read the following statements regarding cofactors:\n(i) Non-protein chemical constituents bound to enzymes to confer catalytic activity.\n(ii) Protein portion of enzyme is called apoenzyme.\n(iii) Prosthetic groups are organic compounds tightly bound to apoenzyme (e.g., haem in catalase).\n(iv) Coenzymes are transiently bound organic compounds derived from vitamins (e.g., niacin in NAD).\n(v) Removal of cofactor increases the catalytic rate by 50%.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because removal of cofactor causes complete loss of catalytic activity.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 487,
        "q": "Consider the following statements regarding chemical bonds in biomacromolecules:\n(i) Peptide bonds link amino acids in proteins via dehydration synthesis.\n(ii) Glycosidic bonds link monosaccharides in polysaccharides.\n(iii) Phosphodiester bonds link nucleotides in nucleic acids.\n(iv) Ester bonds link fatty acids to glycerol in triglycerides.\n(v) Peptide bonds are broken during protein denaturation by mild heat.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iii) only",
            "D": "(ii) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because denaturation breaks weak non-covalent bonds, leaving primary peptide bonds intact.",
        "topic": "macromolecules",
        "sub": "Nature of Bonds",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 488,
        "q": "Read the following statements regarding nucleotide and nucleoside structures:\n(i) Adenosine is a nucleoside containing adenine and ribose sugar.\n(ii) Adenylic acid is a nucleotide containing adenine, ribose, and phosphate.\n(iii) Cytosine is a pyrimidine found in both DNA and RNA.\n(iv) Thymine is a pyrimidine found only in RNA.\n(v) Uracil is a pyrimidine found in RNA instead of thymine.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iv) only",
            "D": "(ii), (iii), and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because thymine is found in DNA, not RNA.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 489,
        "q": "Which of the following statements regarding cellular composition (NCERT Table 9.4) are correct?\n(i) Water is the most abundant component (70\u201390%).\n(ii) Proteins are the second most abundant component (10\u201315%).\n(iii) Nucleic acids constitute 5\u20137% of total cellular mass.\n(iv) Carbohydrates constitute 3% and lipids constitute 2%.\n(v) Inorganic ions constitute 1%.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), and (iii) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are completely accurate according to NCERT Table 9.4.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 490,
        "q": "Consider the following statements regarding human hemoglobin:\n(i) Consists of two alpha subunits and two beta subunits.\n(ii) Exhibits quaternary structure.\n(iii) Contains iron in its heme prosthetic group.\n(iv) Shows cooperative binding of oxygen.\n(v) Transports oxygen as oxyhemoglobin.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), and (iii) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are completely accurate descriptions of hemoglobin structure and function.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 491,
        "q": "Read the following statements regarding enzyme cofactors:\n(i) Zinc is a cofactor for carboxypeptidase.\n(ii) Zinc is also an essential cofactor for carbonic anhydrase.\n(iii) Haem is the prosthetic group of catalase and peroxidase.\n(iv) NAD contains the vitamin niacin.\n(v) FAD contains the vitamin riboflavin.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), and (iii) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are accurate biochemical facts regarding cofactors and coenzymes.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 492,
        "q": "Consider the following statements regarding the living state:\n(i) The blood concentration of glucose in a healthy individual is 4.2 to 6.1 mmol/L.\n(ii) Living state is a non-equilibrium steady state to be able to perform work.\n(iii) Systems at equilibrium cannot perform work.\n(iv) Metabolism provides a continuous mechanism for production of energy.\n(v) Living organisms can function indefinitely at complete chemical equilibrium.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because equilibrium is equivalent to death (no work can be performed).",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 493,
        "q": "Which of the following statements about secondary metabolites in NCERT are correct?\n(i) Lemon grass oil is an essential oil.\n(ii) Concanavalin A is a lectin.\n(iii) Morphine and codeine are alkaloids.\n(iv) Vinblastine is an anticancer drug.\n(v) Abrin and ricin are toxins.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), and (iii) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct categories from NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 494,
        "q": "Consider the following statements regarding amino acid classification:\n(i) Glutamic acid and aspartic acid are acidic amino acids.\n(ii) Lysine and arginine are basic amino acids.\n(iii) Valine, alanine, and glycine are neutral amino acids.\n(iv) Tyrosine, phenylalanine, and tryptophan are aromatic amino acids.\n(v) Glycine is optically active due to an asymmetric alpha-carbon.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because glycine has two hydrogens on its alpha-carbon, making it achiral and optically inactive.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 495,
        "q": "Read the following statements regarding carbohydrates:\n(i) Inulin is a fructan polymer stored in Dahlia tubers.\n(ii) Starch consists of amylose (linear) and amylopectin (branched).\n(iii) Glycogen is branched animal storage polysaccharide.\n(iv) Sucrose is a reducing sugar because it gives positive Benedict's test.\n(v) Chitin forms the fungal cell wall and arthropod exoskeleton.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iv) only",
            "D": "(ii), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because sucrose is a non-reducing sugar.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 496,
        "q": "Consider the following statements regarding nucleic acid chemistry:\n(i) DNA contains 2'-deoxyribose, while RNA contains ribose.\n(ii) DNA has thymine, while RNA has uracil.\n(iii) Adenine pairs with thymine via two hydrogen bonds.\n(iv) Guanine pairs with cytosine via three hydrogen bonds.\n(v) In single-stranded RNA, Chargaff's rules are strictly obeyed.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because Chargaff's rules apply only to double-stranded nucleic acids.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 497,
        "q": "Read the following statements regarding enzyme properties:\n(i) Enzymes lower the activation energy of the reaction.\n(ii) Enzymes do not alter the overall equilibrium constant of a reversible reaction.\n(iii) Almost all enzymes are proteins, with the exception of ribozymes.\n(iv) Malonate inhibits succinate dehydrogenase competitively.\n(v) Enzymes are destroyed at 0\u00b0C.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because low temperature (0\u00b0C) preserves enzymes in a temporarily inactive state without destroying them.",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 498,
        "q": "Which of the following statements about protein structure are correct?\n(i) Primary structure is the linear sequence of amino acids.\n(ii) Secondary structure includes alpha-helices and beta-pleated sheets.\n(iii) Alpha-helices are right-handed in biological proteins.\n(iv) Tertiary structure is stabilized by hydrogen bonds, hydrophobic interactions, and disulfide bridges.\n(v) Denaturation destroys the primary structure of proteins by cleaving peptide bonds.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because denaturation breaks non-covalent interactions, leaving covalent peptide bonds of the primary structure intact.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 499,
        "q": "Consider the following statements regarding lipids and fatty acids:\n(i) Palmitic acid has 16 carbons including the carboxyl carbon.\n(ii) Arachidonic acid has 20 carbons including the carboxyl carbon.\n(iii) Triacylglycerols consist of three fatty acids esterified to glycerol.\n(iv) Lecithin is a phospholipid found in cell membranes.\n(v) Cholesterol is a nucleic acid derivative.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because cholesterol is a derived lipid (sterol), not a nucleic acid derivative.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 500,
        "q": "Read the following statements regarding the role of proteins listed in NCERT Table 9.5:\n(i) Collagen acts as intercellular ground substance.\n(ii) Trypsin is an enzyme.\n(iii) Insulin is a hormone regulating glucose metabolism.\n(iv) Antibody fights against infectious agents.\n(v) GLUT-4 enables glucose transport into cells.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), and (iii) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct functions from NCERT Table 9.5.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    }
]
