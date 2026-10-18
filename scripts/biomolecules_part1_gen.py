# Biomolecules Part 1: Q1 to Q125 (Easy)
import json

def get_part1_raw():
    return [
    {
        "q_num": 1,
        "q": "To perform chemical analysis of living tissue, the tissue is ground in which acid using a mortar and pestle?",
        "opts": {
            "A": "Trichloroacetic acid (Cl3CCOOH)",
            "B": "Hydrochloric acid (HCl)",
            "C": "Sulfuric acid (H2SO4)",
            "D": "Acetic acid (CH3COOH)"
        },
        "ans": "A",
        "exp": "To analyze chemical composition, living tissue (vegetable or liver) is ground in trichloroacetic acid (Cl3CCOOH) to obtain a thick slurry.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 2,
        "q": "When a slurry of living tissue in trichloroacetic acid is strained through cheesecloth, how many distinct fractions are obtained?",
        "opts": {
            "A": "Two fractions: filtrate (acid-soluble) and retentate (acid-insoluble)",
            "B": "Three fractions: organic, inorganic, and mineral",
            "C": "Only one homogeneous solution",
            "D": "Four fractions: proteins, lipids, sugars, and nucleic acids"
        },
        "ans": "A",
        "exp": "Straining the slurry yields two fractions: the filtrate (acid-soluble pool) and the retentate (acid-insoluble fraction).",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 3,
        "q": "The acid-soluble pool obtained during chemical analysis of living tissue roughly represents the composition of:",
        "opts": {
            "A": "Cytoplasm",
            "B": "Cell wall only",
            "C": "Nuclear envelope only",
            "D": "Extracellular matrix"
        },
        "ans": "A",
        "exp": "The acid-soluble pool roughly represents the cytoplasmic composition containing small micromolecules.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 4,
        "q": "What is the molecular weight range of biomolecules present in the acid-soluble pool (filtrate)?",
        "opts": {
            "A": "18 to 800 Daltons",
            "B": "10,000 to 100,000 Daltons",
            "C": "Above 1,000,000 Daltons",
            "D": "Less than 10 Daltons"
        },
        "ans": "A",
        "exp": "The acid-soluble pool contains biomolecules with molecular weights ranging from 18 to around 800 Daltons (Da), known as biomicromolecules.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 5,
        "q": "Which of the following classes of compounds is found in the acid-insoluble fraction (retentate)?",
        "opts": {
            "A": "Proteins, nucleic acids, polysaccharides, and lipids",
            "B": "Monosaccharides, amino acids, and water",
            "C": "Inorganic salts like NaCl and KCl only",
            "D": "Dissolved respiratory gases"
        },
        "ans": "A",
        "exp": "The acid-insoluble fraction contains four major types of organic compounds: proteins, nucleic acids, polysaccharides, and lipids.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 6,
        "q": "Lipids have a molecular weight of less than 800 Da, yet they appear in the acid-insoluble fraction because:",
        "opts": {
            "A": "They form membrane fragments and vesicles that do not dissolve in water and are retained on cheesecloth",
            "B": "They are polymers of repeating amino acids",
            "C": "They possess covalent bonds with nucleic acids",
            "D": "They are converted into heavy glycogen during grinding"
        },
        "ans": "A",
        "exp": "Lipids are small molecules (MW < 800 Da), but cell membranes fragment during grinding to form water-insoluble vesicles that remain in the retentate.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 7,
        "q": "Which of the following organic compounds present in the acid-insoluble fraction is NOT a true macromolecule / polymer?",
        "opts": {
            "A": "Lipid",
            "B": "Protein",
            "C": "Polysaccharide",
            "D": "Nucleic acid"
        },
        "ans": "A",
        "exp": "Lipids are strictly micromolecules (MW < 800 Da) and not polymeric, unlike true macromolecules like proteins, polysaccharides, and nucleic acids.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 8,
        "q": "To determine the inorganic elemental composition of living tissue, which analytical technique is employed?",
        "opts": {
            "A": "Ash analysis (burning dry tissue completely)",
            "B": "Gel electrophoresis of proteins",
            "C": "Paper chromatography of amino acids",
            "D": "Ultracentrifugation of slurry"
        },
        "ans": "A",
        "exp": "Ash analysis involves drying and fully combusting tissue; carbon compounds oxidize to gases (CO2, water vapor), leaving the ash containing inorganic minerals.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 9,
        "q": "When dried living tissue is fully burnt, what happens to all the carbon compounds?",
        "opts": {
            "A": "They are oxidized to gaseous forms (CO2 and water vapor) and escape",
            "B": "They turn into insoluble graphite sheets",
            "C": "They precipitate as calcium carbonate crystals",
            "D": "They polymerize into starch"
        },
        "ans": "A",
        "exp": "All the carbon compounds are oxidized to gaseous forms (CO2 and water vapor) and are removed, leaving behind the inorganic ash.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 10,
        "q": "What does the ash remaining after combustion of living tissue contain?",
        "opts": {
            "A": "Inorganic elements like calcium, magnesium, potassium, and sodium",
            "B": "Proteins and polypeptides",
            "C": "Intact DNA and RNA double helices",
            "D": "Free fatty acids and glycerol"
        },
        "ans": "A",
        "exp": "The ash contains inorganic elements (like calcium, magnesium, sodium, potassium) and inorganic compounds like sulfate and phosphate.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 11,
        "q": "Which inorganic ions are seen in the acid-soluble fraction during chemical tissue analysis?",
        "opts": {
            "A": "Phosphate and sulfate",
            "B": "Cellulose fibers",
            "C": "Histone proteins",
            "D": "Triglycerides"
        },
        "ans": "A",
        "exp": "Inorganic compounds like sulphate and phosphate are seen in the acid-soluble fraction.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 12,
        "q": "Which chemical element is the most abundant by per cent of total cellular mass in human living cells?",
        "opts": {
            "A": "Oxygen (65.0%)",
            "B": "Carbon (18.5%)",
            "C": "Hydrogen (0.5%)",
            "D": "Nitrogen (3.3%)"
        },
        "ans": "A",
        "exp": "According to NCERT comparison of elements, Oxygen constitutes the highest percentage of body weight in humans (65.0%), followed by Carbon (18.5%).",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 13,
        "q": "Which component constitutes the largest percentage (70\u201390%) of total cellular mass in a living organism?",
        "opts": {
            "A": "Water",
            "B": "Proteins",
            "C": "Nucleic acids",
            "D": "Lipids"
        },
        "ans": "A",
        "exp": "Water is the most abundant chemical in living organisms, constituting 70\u201390% of total cellular mass.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 14,
        "q": "After water, which biomolecule constitutes the next largest percentage (10\u201315%) of total cellular mass?",
        "opts": {
            "A": "Proteins",
            "B": "Carbohydrates",
            "C": "Lipids",
            "D": "Nucleic acids"
        },
        "ans": "A",
        "exp": "Proteins constitute 10\u201315% of total cellular mass, making them the second most abundant chemical component after water.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 15,
        "q": "What percentage of total cellular mass is typically constituted by nucleic acids?",
        "opts": {
            "A": "5 to 7%",
            "B": "10 to 15%",
            "C": "1 to 2%",
            "D": "70 to 90%"
        },
        "ans": "A",
        "exp": "Nucleic acids constitute 5\u20137% of the total cellular mass according to NCERT Table 9.4.",
        "topic": "macromolecules",
        "sub": "Chemical Analysis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 16,
        "q": "Metabolites that have identifiable functions and play known roles in normal physiological processes in plants and animals are called:",
        "opts": {
            "A": "Primary metabolites",
            "B": "Secondary metabolites",
            "C": "Synthetic xenobiotics",
            "D": "Inorganic minerals"
        },
        "ans": "A",
        "exp": "Primary metabolites (sugars, amino acids, fatty acids, nucleotides) have identifiable functions and play known roles in normal physiological processes.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 17,
        "q": "Alkaloids, flavonoids, rubber, essential oils, and antibiotics produced by plant, fungal, and microbial cells are categorized as:",
        "opts": {
            "A": "Secondary metabolites",
            "B": "Primary metabolites",
            "C": "Inorganic cofactors",
            "D": "Prosthetic groups"
        },
        "ans": "A",
        "exp": "Secondary metabolites are thousands of compounds like alkaloids, terpenoids, essential oils, and pigments that are not directly involved in primary growth or development.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 18,
        "q": "Which of the following pairs represents secondary metabolites classified as 'pigments' in NCERT?",
        "opts": {
            "A": "Carotenoids and anthocyanins",
            "B": "Morphine and codeine",
            "C": "Abrin and ricin",
            "D": "Vinblastine and curcumin"
        },
        "ans": "A",
        "exp": "Carotenoids and anthocyanins are listed under 'Pigments' in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 19,
        "q": "Morphine and codeine are categorized as which type of secondary metabolites?",
        "opts": {
            "A": "Alkaloids",
            "B": "Lectins",
            "C": "Toxins",
            "D": "Terpenoids"
        },
        "ans": "A",
        "exp": "Morphine and codeine are alkaloids derived from the opium poppy (Papaver somniferum).",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 20,
        "q": "Monoterpenes and diterpenes are examples of which class of secondary metabolites?",
        "opts": {
            "A": "Terpenoids",
            "B": "Alkaloids",
            "C": "Essential oils",
            "D": "Lectins"
        },
        "ans": "A",
        "exp": "Monoterpenes and diterpenes belong to the terpenoids class of secondary metabolites.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 21,
        "q": "Which of the following is an example of an 'essential oil' secondary metabolite listed in NCERT?",
        "opts": {
            "A": "Lemon grass oil",
            "B": "Gingelly oil",
            "C": "Castor oil",
            "D": "Mustard oil"
        },
        "ans": "A",
        "exp": "Lemon grass oil is categorized as an 'Essential oil' under secondary metabolites in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 22,
        "q": "Abrin and ricin are examples of which group of secondary metabolites?",
        "opts": {
            "A": "Toxins",
            "B": "Lectins",
            "C": "Alkaloids",
            "D": "Drugs"
        },
        "ans": "A",
        "exp": "Abrin (from Abrus precatorius) and ricin (from Ricinus communis) are potent ribosome-inactivating plant toxins.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 23,
        "q": "Concanavalin A is classified in NCERT as a:",
        "opts": {
            "A": "Lectin (carbohydrate-binding protein)",
            "B": "Toxin",
            "C": "Alkaloid",
            "D": "Terpenoid"
        },
        "ans": "A",
        "exp": "Concanavalin A is a lectin (a plant protein that binds specifically to carbohydrates).",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 24,
        "q": "Vinblastine and curcumin are secondary metabolites used medically as:",
        "opts": {
            "A": "Drugs",
            "B": "Pigments",
            "C": "Toxins",
            "D": "Polymeric substances"
        },
        "ans": "A",
        "exp": "Vinblastine (an anticancer drug from Catharanthus roseus) and curcumin (from turmeric) are categorized under 'Drugs'.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 25,
        "q": "Rubber, gums, and cellulose are categorized under which type of secondary metabolites?",
        "opts": {
            "A": "Polymeric substances",
            "B": "Essential oils",
            "C": "Lectins",
            "D": "Alkaloids"
        },
        "ans": "A",
        "exp": "Rubber, gums, and cellulose are classified as 'Polymeric substances' in NCERT Table 9.3.",
        "topic": "macromolecules",
        "sub": "Primary and Secondary Metabolites",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 26,
        "q": "Amino acids are organic compounds containing an amino group and an acidic carboxyl group attached to the same carbon, termed the:",
        "opts": {
            "A": "Alpha-carbon",
            "B": "Beta-carbon",
            "C": "Gamma-carbon",
            "D": "Omega-carbon"
        },
        "ans": "A",
        "exp": "Because both the amino (-NH2) and carboxyl (-COOH) groups are attached to the same alpha-carbon, they are called alpha-amino acids.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 27,
        "q": "Because alpha-amino acids have four substituent groups attached to a central tetrahedral carbon, they are structurally considered as substituted:",
        "opts": {
            "A": "Methanes",
            "B": "Ethanes",
            "C": "Benzenes",
            "D": "Formaldehydes"
        },
        "ans": "A",
        "exp": "Amino acids are substituted methanes, where the four valencies of carbon are satisfied by hydrogen, carboxyl, amino, and a variable R-group.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 28,
        "q": "In the amino acid glycine, the variable R-group is:",
        "opts": {
            "A": "A hydrogen atom (-H)",
            "B": "A methyl group (-CH3)",
            "C": "A hydroxy-methyl group (-CH2OH)",
            "D": "An ethyl group (-C2H5)"
        },
        "ans": "A",
        "exp": "In glycine, the R group is a simple hydrogen atom, making glycine the simplest amino acid and the only achiral one.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 29,
        "q": "In the amino acid alanine, the variable R-group is:",
        "opts": {
            "A": "A methyl group (-CH3)",
            "B": "A hydrogen atom (-H)",
            "C": "A hydroxymethyl group (-CH2OH)",
            "D": "A phenyl group (-C6H5)"
        },
        "ans": "A",
        "exp": "In alanine, the R group is a methyl group (-CH3).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 30,
        "q": "In the amino acid serine, the variable R-group is:",
        "opts": {
            "A": "A hydroxymethyl group (-CH2OH)",
            "B": "A hydrogen atom (-H)",
            "C": "A methyl group (-CH3)",
            "D": "An amino group (-NH2)"
        },
        "ans": "A",
        "exp": "In serine, the R group is a hydroxymethyl group (-CH2OH).",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 31,
        "q": "Which of the following is an acidic amino acid containing an extra carboxyl group?",
        "opts": {
            "A": "Glutamic acid",
            "B": "Lysine",
            "C": "Valine",
            "D": "Alanine"
        },
        "ans": "A",
        "exp": "Glutamic acid and aspartic acid are acidic amino acids containing an additional -COOH group in their side chains.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 32,
        "q": "Which of the following is a basic amino acid containing an extra amino group in its side chain?",
        "opts": {
            "A": "Lysine",
            "B": "Glutamic acid",
            "C": "Valine",
            "D": "Glycine"
        },
        "ans": "A",
        "exp": "Lysine and arginine are basic amino acids possessing extra basic nitrogen-containing groups.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 33,
        "q": "Which of the following is a neutral amino acid having equal numbers of amino and carboxyl groups?",
        "opts": {
            "A": "Valine",
            "B": "Lysine",
            "C": "Aspartic acid",
            "D": "Arginine"
        },
        "ans": "A",
        "exp": "Valine, alanine, and glycine are neutral amino acids because they possess one amino and one carboxyl group.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 34,
        "q": "Which of the following amino acids contains an aromatic side ring?",
        "opts": {
            "A": "Tyrosine, phenylalanine, and tryptophan",
            "B": "Valine, leucine, and isoleucine",
            "C": "Glycine, alanine, and serine",
            "D": "Lysine, arginine, and histidine"
        },
        "ans": "A",
        "exp": "Tyrosine, phenylalanine, and tryptophan possess aromatic benzene/indole rings in their side chains.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 35,
        "q": "At a specific pH, an amino acid possesses both a positive charge on its amino group (-NH3+) and a negative charge on its carboxyl group (-COO-), forming a dipolar ion known as a:",
        "opts": {
            "A": "Zwitterion",
            "B": "Cation",
            "C": "Anion",
            "D": "Micelle"
        },
        "ans": "A",
        "exp": "A zwitterion is an electrically neutral dipolar ion bearing both positive and negative formal charges simultaneously.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 36,
        "q": "Proteins are heteropolymers composed of linear chains of amino acids linked together by:",
        "opts": {
            "A": "Peptide bonds",
            "B": "Glycosidic bonds",
            "C": "Phosphodiester bonds",
            "D": "Ester bonds"
        },
        "ans": "A",
        "exp": "Amino acids are linked together by peptide bonds (-CO-NH-) to form polypeptide chains of proteins.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 37,
        "q": "A peptide bond is formed when the carboxyl group (-COOH) of one amino acid reacts with the amino group (-NH2) of the next amino acid with the elimination of:",
        "opts": {
            "A": "A water molecule (H2O)",
            "B": "A carbon dioxide molecule (CO2)",
            "C": "An ammonia molecule (NH3)",
            "D": "A hydrogen molecule (H2)"
        },
        "ans": "A",
        "exp": "Peptide bond formation is a condensation/dehydration reaction that eliminates one molecule of water.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 38,
        "q": "Why are proteins strictly referred to as heteropolymers rather than homopolymers?",
        "opts": {
            "A": "They are made of 20 different kinds of amino acids in variable sequences",
            "B": "They always contain both DNA and RNA molecules",
            "C": "They can fold into four different spatial structures",
            "D": "They are soluble only in organic solvents"
        },
        "ans": "A",
        "exp": "A homopolymer has only one type of monomer repeating. Because proteins are composed of up to 20 different amino acids, a protein is always a heteropolymer.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 39,
        "q": "Which protein is the most abundant protein in the entire animal world?",
        "opts": {
            "A": "Collagen",
            "B": "RuBisCO",
            "C": "Keratin",
            "D": "Hemoglobin"
        },
        "ans": "A",
        "exp": "Collagen is the most abundant protein in animal world, forming extracellular connective tissue matrix.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 40,
        "q": "Which protein is the most abundant protein in the entire biosphere?",
        "opts": {
            "A": "RuBisCO (Ribulose bisphosphate carboxylase-oxygenase)",
            "B": "Collagen",
            "C": "Myosin",
            "D": "Cellulose"
        },
        "ans": "A",
        "exp": "RuBisCO is the most abundant protein in the whole of the biosphere, catalyzing photosynthetic carbon fixation in plants and algae.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 41,
        "q": "Which protein acts as an intercellular ground substance in animal tissues?",
        "opts": {
            "A": "Collagen",
            "B": "Trypsin",
            "C": "Insulin",
            "D": "GLUT-4"
        },
        "ans": "A",
        "exp": "According to NCERT Table 9.5, Collagen functions as intercellular ground substance.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 42,
        "q": "Which protein enables glucose transport into cells across the plasma membrane?",
        "opts": {
            "A": "GLUT-4",
            "B": "Insulin",
            "C": "Antibody",
            "D": "Trypsin"
        },
        "ans": "A",
        "exp": "GLUT-4 is an insulin-regulated glucose transporter enabling glucose transport into muscle and adipose cells.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 43,
        "q": "In a polypeptide chain, the first amino acid at the left end possessing a free amino group is termed the:",
        "opts": {
            "A": "N-terminal amino acid",
            "B": "C-terminal amino acid",
            "C": "Omega amino acid",
            "D": "Carboxyl terminal"
        },
        "ans": "A",
        "exp": "The first amino acid of a polypeptide is called the N-terminal amino acid, possessing an unbonded alpha-amino group.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 44,
        "q": "In a polypeptide chain, the last amino acid at the right end with a free carboxyl group is termed the:",
        "opts": {
            "A": "C-terminal amino acid",
            "B": "N-terminal amino acid",
            "C": "Alpha terminal",
            "D": "Zwitterionic terminal"
        },
        "ans": "A",
        "exp": "The last amino acid is called the C-terminal amino acid, possessing an unbonded alpha-carboxyl group.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 45,
        "q": "The positional information and linear sequence of amino acids in a protein constitutes its:",
        "opts": {
            "A": "Primary structure",
            "B": "Secondary structure",
            "C": "Tertiary structure",
            "D": "Quaternary structure"
        },
        "ans": "A",
        "exp": "The primary structure of a protein is the linear sequence of amino acids from N-terminus to C-terminus determined by genetic code.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 46,
        "q": "In proteins, which type of helix is observed?",
        "opts": {
            "A": "Only right-handed helices",
            "B": "Only left-handed helices",
            "C": "Equal mix of left and right-handed helices",
            "D": "Zig-zag planar sheets without spiral turns"
        },
        "ans": "A",
        "exp": "In proteins, only right-handed alpha-helices are observed.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 47,
        "q": "The long polypeptide chain folded upon itself like a hollow woolen ball represents the:",
        "opts": {
            "A": "Tertiary structure",
            "B": "Primary structure",
            "C": "Secondary structure",
            "D": "Quaternary structure"
        },
        "ans": "A",
        "exp": "In tertiary structure, the long protein chain is folded upon itself like a hollow woolen ball, creating a 3D architecture essential for biological activity.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 48,
        "q": "Which level of protein structure is absolutely necessary for the biological activities of proteins, such as enzymatic catalysis?",
        "opts": {
            "A": "Tertiary structure",
            "B": "Primary structure only",
            "C": "Secondary structure only",
            "D": "Unfolded random coil"
        },
        "ans": "A",
        "exp": "Tertiary structure creates the specific 3D crevices and active sites necessary for the biological functions of enzymes and receptors.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 49,
        "q": "When a protein consists of more than one polypeptide subunit arranged with respect to each other, it exhibits:",
        "opts": {
            "A": "Quaternary structure",
            "B": "Tertiary structure",
            "C": "Secondary structure",
            "D": "Primary structure"
        },
        "ans": "A",
        "exp": "Some proteins are an assembly of more than one polypeptide or subunit; the manner in which these subunits are spatially arranged is called quaternary structure.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 50,
        "q": "Adult human hemoglobin (Hb) consists of how many polypeptide subunits?",
        "opts": {
            "A": "4 subunits (2 alpha and 2 beta chains)",
            "B": "2 subunits (1 alpha and 1 beta chain)",
            "C": "1 single subunit",
            "D": "6 subunits (3 alpha and 3 beta chains)"
        },
        "ans": "A",
        "exp": "Adult human hemoglobin is a tetramer consisting of 4 subunits: two alpha subunits and two beta subunits.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 51,
        "q": "Palmitic acid has how many carbon atoms, including the carboxyl carbon?",
        "opts": {
            "A": "16 carbon atoms",
            "B": "20 carbon atoms",
            "C": "18 carbon atoms",
            "D": "14 carbon atoms"
        },
        "ans": "A",
        "exp": "Palmitic acid has 16 carbon atoms including the carboxyl carbon (formula: CH3-(CH2)14-COOH).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 52,
        "q": "Arachidonic acid has how many carbon atoms, including the carboxyl carbon?",
        "opts": {
            "A": "20 carbon atoms",
            "B": "16 carbon atoms",
            "C": "18 carbon atoms",
            "D": "24 carbon atoms"
        },
        "ans": "A",
        "exp": "Arachidonic acid has 20 carbon atoms including the carboxyl carbon.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 53,
        "q": "Glycerol is chemically known as:",
        "opts": {
            "A": "Trihydroxy propane",
            "B": "Dihydroxy acetone",
            "C": "Trihydroxy butane",
            "D": "Glyceraldehyde"
        },
        "ans": "A",
        "exp": "Glycerol is a simple polyol chemically designated as trihydroxy propane (CH2OH-CHOH-CH2OH).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 54,
        "q": "Fatty acids that do not contain any carbon-carbon double bonds are termed:",
        "opts": {
            "A": "Saturated fatty acids",
            "B": "Unsaturated fatty acids",
            "C": "Polyunsaturated fatty acids",
            "D": "Essential fatty acids"
        },
        "ans": "A",
        "exp": "Fatty acids could be saturated (without double bonds) or unsaturated (with one or more C=C double bonds).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 55,
        "q": "Fatty acids are esterified with glycerol to form:",
        "opts": {
            "A": "Monoglycerides, diglycerides, and triglycerides",
            "B": "Polypeptides and proteins",
            "C": "Polysaccharides",
            "D": "Nucleotides"
        },
        "ans": "A",
        "exp": "Fatty acids esterified with glycerol form monoglycerides (1 fatty acid), diglycerides (2 fatty acids), and triglycerides (3 fatty acids).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 56,
        "q": "Oils have lower melting points than fats (e.g., gingelly oil) and therefore:",
        "opts": {
            "A": "Remain as liquids in winters",
            "B": "Solidify into hard crystals at room temperature",
            "C": "Evaporate spontaneously into gas",
            "D": "Convert into amino acids"
        },
        "ans": "A",
        "exp": "Oils have lower melting points (e.g., gingelly oil) and hence remain as oil in winters.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 57,
        "q": "Lecithin is an example of a:",
        "opts": {
            "A": "Phospholipid",
            "B": "Simple triglyceride",
            "C": "Steroid hormone",
            "D": "Waxy ester"
        },
        "ans": "A",
        "exp": "Lecithin (phosphatidylcholine) is a phospholipid found extensively in cell membranes, possessing a phosphate group and choline.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 58,
        "q": "Neural tissues have cell membranes with especially complex structures containing abundant:",
        "opts": {
            "A": "Lipids (phospholipids and sphingolipids)",
            "B": "Free nucleic acids",
            "C": "Starch granules",
            "D": "Insoluble cellulose"
        },
        "ans": "A",
        "exp": "Neural tissues have cell membranes with very complex lipids (e.g., sphingomyelins, cerebrosides, gangliosides).",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 59,
        "q": "In a polysaccharide chain, such as glycogen, the right end is called the:",
        "opts": {
            "A": "Reducing end",
            "B": "Non-reducing end",
            "C": "N-terminal end",
            "D": "C-terminal end"
        },
        "ans": "A",
        "exp": "In a polysaccharide chain, the right end is called the reducing end and the left end is called the non-reducing end.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 60,
        "q": "In a polysaccharide chain, the left end is called the:",
        "opts": {
            "A": "Non-reducing end",
            "B": "Reducing end",
            "C": "Carboxyl end",
            "D": "Phosphate end"
        },
        "ans": "A",
        "exp": "The left end of a polysaccharide chain is called the non-reducing end.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 61,
        "q": "Inulin is a storage homopolysaccharide composed of repeating units of:",
        "opts": {
            "A": "Fructose",
            "B": "Glucose",
            "C": "Galactose",
            "D": "Ribose"
        },
        "ans": "A",
        "exp": "Inulin is a polymer of fructose found in plants such as Dahlia tubers.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 62,
        "q": "Starch gives a characteristic blue color with iodine (I2) because:",
        "opts": {
            "A": "Starch forms helical secondary structures that trap iodine molecules in its helical interior",
            "B": "Starch chemically hydrolyzes iodine into iodide ions",
            "C": "Starch contains basic lysine residues that bind iodine",
            "D": "Iodine oxidizes glucose to gluconic acid"
        },
        "ans": "A",
        "exp": "Starch forms helical secondary structures; in fact, starch can hold I2 molecules in the helical portion. The starch-I2 is blue in color.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 63,
        "q": "Why does cellulose NOT show a blue color when treated with iodine solution?",
        "opts": {
            "A": "Cellulose does not contain complex helices and hence cannot hold I2 molecules",
            "B": "Cellulose is an animal protein",
            "C": "Cellulose decomposes iodine rapidly",
            "D": "Cellulose contains only lipid droplets"
        },
        "ans": "A",
        "exp": "Cellulose does not contain complex helices and hence cannot hold I2 molecules, so it gives no blue color with iodine.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 64,
        "q": "Plant cell walls are made of which structural polysaccharide?",
        "opts": {
            "A": "Cellulose",
            "B": "Glycogen",
            "C": "Inulin",
            "D": "Chitin"
        },
        "ans": "A",
        "exp": "Plant cell walls are made of cellulose, an unbranched polymer of beta-D-glucose linked by beta-1,4-glycosidic bonds.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 65,
        "q": "The complex polysaccharide forming the exoskeleton of arthropods and fungal cell walls is:",
        "opts": {
            "A": "Chitin",
            "B": "Cellulose",
            "C": "Pectin",
            "D": "Glycogen"
        },
        "ans": "A",
        "exp": "The exoskeletons of arthropods have a complex polysaccharide called chitin, which is a homopolymer of N-acetylglucosamine.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 66,
        "q": "Cotton fibers are chemically composed almost entirely of:",
        "opts": {
            "A": "Cellulose",
            "B": "Starch",
            "C": "Glycogen",
            "D": "Keratin"
        },
        "ans": "A",
        "exp": "Cotton fiber is almost 90% pure cellulose.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 67,
        "q": "In a polysaccharide, individual monosaccharide units are linked together by which chemical bond?",
        "opts": {
            "A": "Glycosidic bond",
            "B": "Peptide bond",
            "C": "Phosphodiester bond",
            "D": "Ester bond"
        },
        "ans": "A",
        "exp": "In a polysaccharide, the individual monosaccharides are linked by glycosidic bonds formed between two carbon atoms by dehydration.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 68,
        "q": "A nucleotide consists of three chemically distinct components:",
        "opts": {
            "A": "A heterocyclic nitrogenous base, a pentose sugar, and a phosphate group",
            "B": "An amino acid, a fatty acid, and glycerol",
            "C": "A glucose, a fructose, and a galactose",
            "D": "A purine, a pyrimidine, and an alcohol"
        },
        "ans": "A",
        "exp": "A nucleotide has three chemically distinct components: a heterocyclic nitrogenous base, a monosaccharide (pentose sugar), and phosphoric acid/phosphate.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 69,
        "q": "A nitrogenous base attached to a pentose sugar without a phosphate group is called a:",
        "opts": {
            "A": "Nucleoside",
            "B": "Nucleotide",
            "C": "Amino acid",
            "D": "Polynucleotide"
        },
        "ans": "A",
        "exp": "When a nitrogenous base is linked to a pentose sugar via an N-glycosidic bond, it is called a nucleoside.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 70,
        "q": "Which of the following is a nucleoside?",
        "opts": {
            "A": "Adenosine",
            "B": "Adenylic acid",
            "C": "Adenine",
            "D": "Adenosine triphosphate"
        },
        "ans": "A",
        "exp": "Adenosine, guanosine, cytidine, uridine, and thymidine are nucleosides. Adenine is a nitrogenous base, while adenylic acid is a nucleotide.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 71,
        "q": "Which of the following is a nucleotide?",
        "opts": {
            "A": "Adenylic acid",
            "B": "Adenosine",
            "C": "Adenine",
            "D": "Guanosine"
        },
        "ans": "A",
        "exp": "Adenylic acid (adenosine monophosphate, AMP), thymidylic acid, guanylic acid, uridylic acid, and cytidylic acid are nucleotides.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 72,
        "q": "Adenine and guanine are substituted purines that possess:",
        "opts": {
            "A": "A double-ring structure (9-membered ring)",
            "B": "A single-ring structure (6-membered ring)",
            "C": "A long open-chain hydrocarbon",
            "D": "A three-ring steroid nucleus"
        },
        "ans": "A",
        "exp": "Adenine and guanine are purines, which have a double-ring heterocyclic structure containing 9 atoms (5 carbons, 4 nitrogens).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 73,
        "q": "Uracil, cytosine, and thymine are pyrimidines that possess:",
        "opts": {
            "A": "A single 6-membered heterocyclic ring",
            "B": "A double 9-membered ring",
            "C": "A branched fatty acid chain",
            "D": "A phosphate ester bridge"
        },
        "ans": "A",
        "exp": "Cytosine, uracil, and thymine are pyrimidines, which have a single 6-membered heterocyclic ring.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 74,
        "q": "Which pyrimidine base is present in RNA but absent in DNA?",
        "opts": {
            "A": "Uracil",
            "B": "Thymine",
            "C": "Cytosine",
            "D": "Guanine"
        },
        "ans": "A",
        "exp": "Uracil is present in RNA instead of thymine (5-methyluracil).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 75,
        "q": "Which pyrimidine base is present in DNA but absent in RNA?",
        "opts": {
            "A": "Thymine (5-methyluracil)",
            "B": "Uracil",
            "C": "Cytosine",
            "D": "Adenine"
        },
        "ans": "A",
        "exp": "Thymine (5-methyluracil) is found in DNA, whereas RNA contains uracil.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 76,
        "q": "In a polynucleotide chain (DNA or RNA), adjacent nucleotides are joined together by:",
        "opts": {
            "A": "3'-5' phosphodiester bonds",
            "B": "Peptide bonds",
            "C": "Glycosidic bonds",
            "D": "Disulfide bonds"
        },
        "ans": "A",
        "exp": "In a nucleic acid, a phosphate moiety links the 3'-carbon of one sugar of one nucleotide to the 5'-carbon of the sugar of the succeeding nucleotide (3'-5' phosphodiester bond).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 77,
        "q": "According to the Watson-Crick B-DNA model, the DNA double helix has a pitch of:",
        "opts": {
            "A": "3.4 nm (34 \u00c5)",
            "B": "0.34 nm (3.4 \u00c5)",
            "C": "2.0 nm (20 \u00c5)",
            "D": "34 nm (340 \u00c5)"
        },
        "ans": "A",
        "exp": "The pitch of B-DNA is 3.4 nm (34 \u00c5), and there are roughly 10 base pairs per turn, with 0.34 nm between adjacent base pairs.",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 78,
        "q": "In B-DNA, the distance between two adjacent base pairs along the helical axis is approximately:",
        "opts": {
            "A": "0.34 nm (3.4 \u00c5)",
            "B": "3.4 nm (34 \u00c5)",
            "C": "2.0 nm (20 \u00c5)",
            "D": "0.034 nm"
        },
        "ans": "A",
        "exp": "The distance between adjacent base pairs in B-DNA is 0.34 nm (3.4 \u00c5).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 79,
        "q": "In a DNA double helix, Adenine pairs with Thymine via:",
        "opts": {
            "A": "Two hydrogen bonds",
            "B": "Three hydrogen bonds",
            "C": "One covalent bond",
            "D": "One phosphodiester bond"
        },
        "ans": "A",
        "exp": "Adenine forms two hydrogen bonds with thymine (A=T), and guanine forms three hydrogen bonds with cytosine (G\u2261C).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 80,
        "q": "In a DNA double helix, Guanine pairs with Cytosine via:",
        "opts": {
            "A": "Three hydrogen bonds",
            "B": "Two hydrogen bonds",
            "C": "Four ionic bonds",
            "D": "One peptide bond"
        },
        "ans": "A",
        "exp": "Guanine pairs with cytosine through three hydrogen bonds (G\u2261C).",
        "topic": "nucleic_acids",
        "sub": "Structure of DNA",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 81,
        "q": "Almost all enzymes are chemically composed of:",
        "opts": {
            "A": "Proteins",
            "B": "Lipids",
            "C": "Carbohydrates",
            "D": "Sterols"
        },
        "ans": "A",
        "exp": "Almost all enzymes are proteins. There are some nucleic acids that behave like enzymes, termed ribozymes.",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 82,
        "q": "Ribozymes are catalytic molecules composed of:",
        "opts": {
            "A": "RNA",
            "B": "Proteins",
            "C": "Lipids",
            "D": "Polysaccharides"
        },
        "ans": "A",
        "exp": "Ribozymes are catalytically active RNA molecules, such as 23S rRNA in bacteria.",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 83,
        "q": "The specific pocket or crevice on an enzyme surface into which the substrate fits is called the:",
        "opts": {
            "A": "Active site",
            "B": "Allosteric site",
            "C": "Apoenzyme core",
            "D": "Prosthetic cleft"
        },
        "ans": "A",
        "exp": "An active site of an enzyme is a crevice or pocket into which the substrate fits.",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 84,
        "q": "Enzymes differ from inorganic catalysts in being:",
        "opts": {
            "A": "Easily damaged and denatured at high temperatures (above 40\u00b0C)",
            "B": "Completely stable at 500\u00b0C",
            "C": "Incapable of lowering activation energy",
            "D": "Composed of heavy metals"
        },
        "ans": "A",
        "exp": "Inorganic catalysts work efficiently at high temperatures and pressures, while enzymes get damaged at high temperatures (usually above 40\u00b0C), except those from thermophiles.",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 85,
        "q": "Enzymes isolated from organisms that live under high temperatures (such as thermophilic bacteria in hot vents) are:",
        "opts": {
            "A": "Thermally stable and retain catalytic power up to 80\u00b0\u201390\u00b0C",
            "B": "Instantly destroyed at 37\u00b0C",
            "C": "Composed of pure lipids",
            "D": "Lacking any active sites"
        },
        "ans": "A",
        "exp": "Thermal stability is a quality of enzymes isolated from thermophilic organisms (e.g., Taq polymerase from Thermus aquaticus).",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 86,
        "q": "How do enzymes dramatically accelerate the rate of chemical reactions?",
        "opts": {
            "A": "By lowering the activation energy barrier",
            "B": "By increasing the temperature of the system",
            "C": "By shifting the equilibrium of the reaction",
            "D": "By being consumed as reactants"
        },
        "ans": "A",
        "exp": "Enzymes speed up chemical reactions by lowering the activation energy required to reach the transition state.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 87,
        "q": "During enzyme catalysis, the transient state formed when substrate binds to the active site is the:",
        "opts": {
            "A": "Enzyme-Substrate (ES) complex",
            "B": "Enzyme-Inhibitor (EI) complex",
            "C": "Apoenzyme-Cofactor precipitate",
            "D": "Denatured enzyme state"
        },
        "ans": "A",
        "exp": "Substrate binds to the active site of the enzyme, forming an obligatory transient enzyme-substrate (ES) complex.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 88,
        "q": "The state of the substrate with the highest energy level during an enzymatic reaction is the:",
        "opts": {
            "A": "Transition state",
            "B": "Ground state",
            "C": "Product state",
            "D": "Stable equilibrium state"
        },
        "ans": "A",
        "exp": "The transition state is the highest energy, unstable intermediate state through which substrate transforms into product.",
        "topic": "enzymes",
        "sub": "Enzyme Action",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 89,
        "q": "The effect of temperature on enzyme activity typically produces a graph that is:",
        "opts": {
            "A": "Bell-shaped (increasing to an optimum temperature and declining due to denaturation)",
            "B": "A continuous linear upward slope",
            "C": "A straight horizontal line",
            "D": "A hyperbolic curve reaching infinity"
        },
        "ans": "A",
        "exp": "Enzymes function within a narrow temperature range; activity rises to an optimum and declines at high temperature due to denaturation, producing a bell-shaped curve.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 90,
        "q": "At very low temperatures, enzymes are:",
        "opts": {
            "A": "Temporarily inactive (preserved in an inactive state)",
            "B": "Permanently denatured",
            "C": "Converted into ribozymes",
            "D": "Broken down into free amino acids"
        },
        "ans": "A",
        "exp": "Low temperature preserves the enzyme in a temporarily inactive state, whereas high temperature destroys enzymatic activity by denaturation.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 91,
        "q": "At very high temperatures, enzymes lose their catalytic activity primarily due to:",
        "opts": {
            "A": "Denaturation of protein tertiary structure by heat",
            "B": "Evaporation of substrate molecules",
            "C": "Loss of all peptide bonds",
            "D": "Hydrolysis into nucleotides"
        },
        "ans": "A",
        "exp": "High temperature destroys enzymatic activity because proteins are denatured by heat, disrupting tertiary and secondary structures.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 92,
        "q": "As substrate concentration [S] increases, the velocity of an enzymatic reaction increases until it reaches a maximum velocity (Vmax). Why does velocity not increase further?",
        "opts": {
            "A": "All enzyme active site molecules are saturated with substrate",
            "B": "The substrate is completely converted to heat",
            "C": "The enzyme molecules are destroyed by substrate",
            "D": "The pH drops to zero"
        },
        "ans": "A",
        "exp": "The reaction velocity reaches Vmax because the enzyme molecules are fewer than substrate molecules, and all active sites become saturated.",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 93,
        "q": "The substrate concentration at which an enzyme-catalyzed reaction attains half of its maximum velocity (Vmax/2) is the:",
        "opts": {
            "A": "Michaelis constant (Km)",
            "B": "Turnover number",
            "C": "Activation constant",
            "D": "Dissociation constant"
        },
        "ans": "A",
        "exp": "The Michaelis-Menten constant (Km) is the substrate concentration at which reaction velocity is half maximal (Vmax/2).",
        "topic": "enzymes",
        "sub": "Enzyme Kinetics",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 94,
        "q": "When an inhibitor closely resembles the substrate in its molecular structure and competes for the enzyme's active site, the inhibition is termed:",
        "opts": {
            "A": "Competitive inhibition",
            "B": "Non-competitive inhibition",
            "C": "Allosteric feedback",
            "D": "Irreversible poisoning"
        },
        "ans": "A",
        "exp": "When the inhibitor closely resembles the substrate in its molecular structure and inhibits the activity of the enzyme, it is known as competitive inhibitor.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 95,
        "q": "Inhibition of the enzyme succinate dehydrogenase by malonate, which resembles succinate, is a classic example of:",
        "opts": {
            "A": "Competitive inhibition",
            "B": "Non-competitive inhibition",
            "C": "Allosteric inhibition",
            "D": "Feedback inhibition"
        },
        "ans": "A",
        "exp": "Inhibition of succinic dehydrogenase by malonate (which closely resembles the substrate succinate in structure) is competitive inhibition.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 96,
        "q": "Competitive inhibitors are often used control of bacterial pathogens, as seen with:",
        "opts": {
            "A": "Sulfa drugs competing with para-aminobenzoic acid (PABA) to inhibit folic acid synthesis",
            "B": "Penicillin degrading bacterial ribosomes",
            "C": "Aspirin hydrolyzing cell membranes",
            "D": "Lysozyme destroying plant chloroplasts"
        },
        "ans": "A",
        "exp": "Competitive inhibitors like sulfa drugs resemble PABA and competitively inhibit bacterial dihydropteroate synthase, blocking folic acid synthesis.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 97,
        "q": "How does a competitive inhibitor affect Vmax and Km of an enzymatic reaction?",
        "opts": {
            "A": "Km increases while Vmax remains unchanged",
            "B": "Km decreases while Vmax increases",
            "C": "Vmax decreases while Km remains unchanged",
            "D": "Both Vmax and Km decrease"
        },
        "ans": "A",
        "exp": "In competitive inhibition, the inhibitor competes with substrate for the active site; adding excess substrate outcompetes the inhibitor, so Vmax is unchanged, but apparent Km increases.",
        "topic": "enzymes",
        "sub": "Enzyme Inhibition",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 98,
        "q": "According to the IUBMB system, enzymes are classified into how many major classes?",
        "opts": {
            "A": "6 classes",
            "B": "4 classes",
            "C": "10 classes",
            "D": "8 classes"
        },
        "ans": "A",
        "exp": "Enzymes are divided into 6 classes, each with 4-13 subclasses, and named accordingly by a four-digit number.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 99,
        "q": "Enzymes that catalyze oxidoreduction between two substrates (e.g., S reduced + S' oxidized -> S oxidized + S' reduced) belong to Class 1:",
        "opts": {
            "A": "Oxidoreductases / Dehydrogenases",
            "B": "Transferases",
            "C": "Hydrolases",
            "D": "Lyases"
        },
        "ans": "A",
        "exp": "Class 1 enzymes are Oxidoreductases or Dehydrogenases, catalyzing oxidation-reduction reactions.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 100,
        "q": "Enzymes catalyzing a transfer of a group (other than hydrogen) between a pair of substrates belong to Class 2:",
        "opts": {
            "A": "Transferases",
            "B": "Hydrolases",
            "C": "Lyases",
            "D": "Ligases"
        },
        "ans": "A",
        "exp": "Class 2 enzymes are Transferases, which catalyze the transfer of chemical groups (e.g., kinase transferring phosphate).",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 101,
        "q": "Enzymes catalyzing the cleavage of bonds (ester, ether, peptide, glycosidic) by addition of water belong to Class 3:",
        "opts": {
            "A": "Hydrolases",
            "B": "Lyases",
            "C": "Isomerases",
            "D": "Ligases"
        },
        "ans": "A",
        "exp": "Class 3 enzymes are Hydrolases, which catalyze hydrolysis of ester, ether, peptide, glycosidic, C-C, or P-N bonds.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 102,
        "q": "Enzymes that catalyze removal of groups from substrates by mechanisms other than hydrolysis, leaving double bonds, belong to Class 4:",
        "opts": {
            "A": "Lyases",
            "B": "Hydrolases",
            "C": "Ligases",
            "D": "Transferases"
        },
        "ans": "A",
        "exp": "Class 4 enzymes are Lyases, which catalyze cleavage of bonds without hydrolysis, leaving double bonds.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 103,
        "q": "Enzymes catalyzing interconversion of optical, geometric, or positional isomers belong to Class 5:",
        "opts": {
            "A": "Isomerases",
            "B": "Ligases",
            "C": "Lyases",
            "D": "Hydrolases"
        },
        "ans": "A",
        "exp": "Class 5 enzymes are Isomerases, catalyzing optical, geometric, or structural isomer interconversions.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 104,
        "q": "Enzymes catalyzing the linking together of two compounds (e.g., C-O, C-S, C-N, P-O bonds) using ATP belong to Class 6:",
        "opts": {
            "A": "Ligases",
            "B": "Lyases",
            "C": "Isomerases",
            "D": "Hydrolases"
        },
        "ans": "A",
        "exp": "Class 6 enzymes are Ligases, catalyzing the joining of two molecules coupled with hydrolysis of a pyrophosphate bond in ATP.",
        "topic": "enzymes",
        "sub": "Enzyme Classification",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 105,
        "q": "The non-protein chemical constituents bound to enzymes to make them catalytically active are called:",
        "opts": {
            "A": "Cofactors",
            "B": "Apoenzymes",
            "C": "Active centers",
            "D": "Allosteric residues"
        },
        "ans": "A",
        "exp": "Enzymes composed of one or several polypeptide chains may require non-protein constituents called cofactors to be catalytically active.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 106,
        "q": "The protein portion of a conjugated enzyme lacking its cofactor is called the:",
        "opts": {
            "A": "Apoenzyme",
            "B": "Holoenzyme",
            "C": "Coenzyme",
            "D": "Prosthetic group"
        },
        "ans": "A",
        "exp": "The protein portion of the enzyme is called the apoenzyme.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 107,
        "q": "A complete, catalytically active enzyme system consisting of an apoenzyme bound to its cofactor is called a:",
        "opts": {
            "A": "Holoenzyme",
            "B": "Apoenzyme",
            "C": "Proenzyme",
            "D": "Zymogen"
        },
        "ans": "A",
        "exp": "Holoenzyme = Apoenzyme (protein part) + Cofactor (non-protein part).",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 108,
        "q": "Organic cofactors that are tightly and permanently bound to the apoenzyme are designated as:",
        "opts": {
            "A": "Prosthetic groups",
            "B": "Coenzymes",
            "C": "Metal ions",
            "D": "Cosubstrates"
        },
        "ans": "A",
        "exp": "Prosthetic groups are organic compounds distinguished from other cofactors in that they are tightly bound to the apoenzyme.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 109,
        "q": "In the enzymes peroxidase and catalase, which catalyze the breakdown of hydrogen peroxide, the prosthetic group is:",
        "opts": {
            "A": "Haem",
            "B": "NAD+",
            "C": "Biotin",
            "D": "Zinc"
        },
        "ans": "A",
        "exp": "In peroxidase and catalase, haem is the prosthetic group and it is a part of the active site of the enzyme.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 110,
        "q": "Organic cofactors whose association with the apoenzyme is only transient, usually occurring during the course of catalysis, are called:",
        "opts": {
            "A": "Coenzymes",
            "B": "Prosthetic groups",
            "C": "Metal ions",
            "D": "Apoenzymes"
        },
        "ans": "A",
        "exp": "Coenzymes are organic compounds whose association with the apoenzyme is only transient, usually occurring during catalysis.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 111,
        "q": "The essential chemical components of many coenzymes are:",
        "opts": {
            "A": "Vitamins",
            "B": "Carbohydrates",
            "C": "Lipids",
            "D": "Amino acids"
        },
        "ans": "A",
        "exp": "The essential chemical components of many coenzymes are vitamins (e.g., coenzyme NAD and NADP contain niacin).",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 112,
        "q": "The coenzymes Nicotinamide Adenine Dinucleotide (NAD) and NADP contain which B-complex vitamin?",
        "opts": {
            "A": "Niacin (Vitamin B3)",
            "B": "Thiamine (Vitamin B1)",
            "C": "Riboflavin (Vitamin B2)",
            "D": "Biotin"
        },
        "ans": "A",
        "exp": "Coenzymes NAD and NADP contain the vitamin niacin.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 113,
        "q": "Which metal ion acts as an essential cofactor for the proteolytic enzyme carboxypeptidase?",
        "opts": {
            "A": "Zinc (Zn2+)",
            "B": "Iron (Fe2+)",
            "C": "Magnesium (Mg2+)",
            "D": "Copper (Cu2+)"
        },
        "ans": "A",
        "exp": "Zinc is a cofactor for the proteolytic enzyme carboxypeptidase.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 114,
        "q": "What happens to catalytic activity when the cofactor is removed from a holoenzyme?",
        "opts": {
            "A": "The catalytic activity is completely lost",
            "B": "The catalytic activity increases two-fold",
            "C": "The enzyme converts into a ribozyme",
            "D": "The enzyme synthesizes glycogen"
        },
        "ans": "A",
        "exp": "Catalytic activity is lost when the cofactor is removed from the enzyme, proving that cofactors play a crucial role in catalysis.",
        "topic": "enzymes",
        "sub": "Enzyme Cofactors",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 115,
        "q": "In which form is glucose stored in animal liver and muscle cells?",
        "opts": {
            "A": "Glycogen",
            "B": "Starch",
            "C": "Inulin",
            "D": "Cellulose"
        },
        "ans": "A",
        "exp": "Glycogen is the major storage homopolysaccharide of glucose in animal liver and skeletal muscle.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 116,
        "q": "Which bond links the nitrogenous base to the pentose sugar in a nucleoside?",
        "opts": {
            "A": "N-glycosidic bond",
            "B": "Phosphodiester bond",
            "C": "Peptide bond",
            "D": "Ester bond"
        },
        "ans": "A",
        "exp": "An N-glycosidic bond links the nitrogenous base to the C1' carbon of the pentose sugar.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 117,
        "q": "What is the sugar present in RNA?",
        "opts": {
            "A": "Ribose",
            "B": "2'-Deoxyribose",
            "C": "Glucose",
            "D": "Fructose"
        },
        "ans": "A",
        "exp": "RNA contains the pentose sugar D-ribose, whereas DNA contains 2'-deoxy-D-ribose.",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 118,
        "q": "How does 2'-deoxyribose in DNA differ chemically from ribose in RNA?",
        "opts": {
            "A": "It lacks an oxygen atom at the C2' position (has -H instead of -OH)",
            "B": "It lacks an oxygen atom at C5'",
            "C": "It has a 6-carbon ring",
            "D": "It possesses an amino group"
        },
        "ans": "A",
        "exp": "2'-deoxyribose lacks the hydroxyl (-OH) group at carbon 2', having only a hydrogen atom (-H).",
        "topic": "nucleic_acids",
        "sub": "Nucleic Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 119,
        "q": "A triglyceride molecule consists of:",
        "opts": {
            "A": "One glycerol molecule esterified with three fatty acid molecules",
            "B": "Three glycerol molecules linked to one fatty acid",
            "C": "One glucose molecule linked to three amino acids",
            "D": "One phosphate group attached to three cholines"
        },
        "ans": "A",
        "exp": "A triglyceride consists of one molecule of glycerol esterified with three fatty acid chains.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 120,
        "q": "Which of the following lipids is an essential component of animal cell membranes and the precursor of steroid hormones?",
        "opts": {
            "A": "Cholesterol",
            "B": "Palmitic acid",
            "C": "Glycerol",
            "D": "Lecithin"
        },
        "ans": "A",
        "exp": "Cholesterol is an animal sterol found in membranes that serves as the biosynthetic precursor for bile salts, vitamin D, and steroid hormones.",
        "topic": "proteins_lipids",
        "sub": "Lipids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 121,
        "q": "Which amino acid possesses a sulfur atom in its side chain?",
        "opts": {
            "A": "Cysteine and Methionine",
            "B": "Alanine and Glycine",
            "C": "Lysine and Arginine",
            "D": "Serine and Threonine"
        },
        "ans": "A",
        "exp": "Cysteine and methionine are the two sulfur-containing standard amino acids.",
        "topic": "proteins_lipids",
        "sub": "Amino Acids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 122,
        "q": "Disulfide bonds (-S-S-) in proteins are formed between the side chains of which amino acid?",
        "opts": {
            "A": "Cysteine",
            "B": "Methionine",
            "C": "Serine",
            "D": "Valine"
        },
        "ans": "A",
        "exp": "Disulfide bonds are covalent crosslinks formed by the oxidation of the sulfhydryl (-SH) groups of two cysteine residues.",
        "topic": "proteins_lipids",
        "sub": "Proteins",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 123,
        "q": "What type of chemical reaction is involved when two glucose molecules join to form maltose?",
        "opts": {
            "A": "Dehydration synthesis (condensation)",
            "B": "Hydrolysis",
            "C": "Oxidative phosphorylation",
            "D": "Decarboxylation"
        },
        "ans": "A",
        "exp": "The formation of a glycosidic bond between two monosaccharides is a dehydration (condensation) reaction releasing H2O.",
        "topic": "proteins_lipids",
        "sub": "Polysaccharides",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 124,
        "q": "The concept that 'all enzymes are proteins' has which well-known exception?",
        "opts": {
            "A": "Ribozymes (catalytic RNA molecules)",
            "B": "Zymogens",
            "C": "Coenzymes",
            "D": "Apoenzymes"
        },
        "ans": "A",
        "exp": "Ribozymes are catalytic RNA molecules (such as peptidyl transferase and RNase P), serving as notable exceptions to the rule that all enzymes are proteins.",
        "topic": "enzymes",
        "sub": "Enzyme Nature",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 125,
        "q": "In a living cell, the steady state is a:",
        "opts": {
            "A": "Non-equilibrium state that allows work to be done continuously",
            "B": "State of chemical equilibrium with no energy transfer",
            "C": "Completely static crystalline state",
            "D": "Dead state without metabolic reactions"
        },
        "ans": "A",
        "exp": "As living organisms work continuously, they cannot afford to reach equilibrium. Hence the living state is a non-equilibrium steady state to be able to perform work.",
        "topic": "macromolecules",
        "sub": "Metabolic Basis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    }
]
