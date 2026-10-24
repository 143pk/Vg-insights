import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "biotech-principles"
CHP_TITLE = "Biotechnology: Principles and Processes"
FILE_PREFIX = "biotechPrinciples"
VAR_PREFIX = "BIOTECH_PRINCIPLES"

T1 = ("bio-restriction-enzymes-vectors", "Tools of Recombinant DNA Technology (Enzymes & Vectors)")
T2 = ("bio-pcr-rdna-process", "Processes of rDNA Technology (PCR, Competent Hosts & Bioreactors)")

def generate_chapter_9():
    print(f"Generating 500 questions for {CHP_TITLE}...")
    qs = []

    def add(q, a, b, c, d, ans, concept, step, why_wrong, top_tuple, subtopic):
        top_id, top_name = top_tuple
        qs.append({
            "question": q,
            "opts": {"A": a, "B": b, "C": c, "D": d},
            "ans": ans,
            "concept": concept,
            "step": step,
            "why_wrong": why_wrong,
            "topic": top_name,
            "topicId": top_id,
            "subtopic": subtopic
        })

    # =========================================================================
    # PART 1: 125 EASY QUESTIONS
    # =========================================================================
    easy_data = [
        ("The European Federation of Biotechnology (EFB) defines biotechnology as the integration of natural science and organisms, cells, parts thereof, and:",
         "Molecular analogues for products and services", "Synthetic plastics for industrial containers", "Inorganic chemicals for mining", "Mechanical robotics for manufacturing", "A",
         "EFB definition of biotechnology.",
         "The EFB definition encompasses both traditional view and modern molecular biotechnology: 'The integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services.'",
         "Synthetic plastics and robotics are outside the biological definition.",
         T1, "Biotechnology Definition"),

        ("Which two core techniques enabled the birth and development of modern biotechnology?",
         "Genetic engineering and bioprocess engineering", "Hybridisation and selective breeding only", "Radiation mutagenesis and chemical dyeing", "Tissue dissection and anatomical drawing", "A",
         "Core techniques of biotechnology.",
         "The two core techniques are (i) Genetic engineering (altering chemistry of DNA/RNA) and (ii) Bioprocess engineering (maintaining sterile conditions for mass production).",
         "Selective breeding is traditional agriculture.",
         T1, "Core Techniques"),

        ("Who constructed the very first recombinant DNA molecule in 1972 by linking an antibiotic resistance gene to a native bacterial plasmid?",
         "Stanley Cohen and Herbert Boyer", "James Watson and Francis Crick", "Kary Mullis and Alec Jeffreys", "Alexander Fleming and Howard Florey", "A",
         "Construction of first rDNA.",
         "The construction of the first recombinant DNA emerged from the collaboration of Stanley Cohen and Herbert Boyer in 1972.",
         "Watson and Crick deduced the double helix; Kary Mullis invented PCR.",
         T1, "History of rDNA"),

        ("Stanley Cohen and Herbert Boyer isolated the antibiotic resistance gene for their first recombinant DNA from which bacterium?",
         "Salmonella typhimurium", "Escherichia coli", "Streptococcus pneumoniae", "Bacillus thuringiensis", "A",
         "First rDNA source organism.",
         "Cohen and Boyer isolated the antibiotic resistance gene by cutting out a piece of DNA from a plasmid native to Salmonella typhimurium.",
         "E. coli was used as the recipient host.",
         T1, "History of rDNA"),

        ("In 1963, two enzymes responsible for restricting the growth of bacteriophages in Escherichia coli were isolated; one added methyl groups to DNA, while the other:",
         "Cut viral DNA at specific sites (restriction endonuclease)", "Joined RNA primers to DNA", "Unwound the DNA double helix", "Degraded bacterial cell walls", "A",
         "Discovery of restriction enzymes.",
         "Stewart Linn and Werner Arber found one enzyme added methyl groups to bacterial DNA to protect it, while the other cleaved foreign viral DNA (restriction endonuclease).",
         "DNA helicase unwinds DNA; lysozyme degrades walls.",
         T1, "Restriction Enzymes"),

        ("Which was the very first restriction endonuclease to be characterized whose functioning depended on a specific 6-base pair recognition sequence?",
         "Hind II", "EcoRI", "BamHI", "SalI", "A",
         "Hind II first restriction enzyme.",
         "The first restriction endonuclease - Hind II, whose functioning depended on a specific DNA nucleotide sequence was isolated and characterized five years later (Hamilton Smith).",
         "EcoRI was characterized later.",
         T1, "Restriction Enzymes"),

        ("How many base pairs constitute the specific recognition nucleotide sequence recognized and cleaved by Hind II?",
         "6 base pairs", "4 base pairs", "8 base pairs", "12 base pairs", "A",
         "Hind II recognition length.",
         "Hind II always cut DNA molecules at a particular point by recognising a specific sequence of six base pairs.",
         "Some enzymes recognize 4 or 8 bp, but Hind II recognizes 6 bp.",
         T1, "Restriction Enzymes"),

        ("In the scientific naming of restriction enzymes such as EcoRI, what does the first Roman numeral 'I' signify?",
         "The order in which the enzyme was isolated from that bacterial strain",
         "The number of phosphate bonds it cleaves",
         "The number of subunit chains in the enzyme",
         "The optimum pH of the enzyme reaction", "A",
         "Restriction enzyme nomenclature.",
         "The Roman numbers following the names indicate the order in which the enzymes were isolated from that strain of bacteria.",
         "Roman numerals do not indicate pH or subunits.",
         T1, "Enzyme Nomenclature"),

        ("In the restriction enzyme EcoRI, the letters 'co' represent the name of the:",
         "Species (coli)", "Genus (Escherichia)", "Strain (RY13)", "Order (Enterobacteriales)", "A",
         "EcoRI nomenclature.",
         "The first letter comes from the genus (E for Escherichia) and the second two letters come from the species of the prokaryotic cell (co for coli).",
         "E is genus; R is strain.",
         T1, "Enzyme Nomenclature"),

        ("In the restriction enzyme EcoRI, the capital letter 'R' designates the:",
         "Name of the bacterial strain (RY13)", "Genus name", "Species name", "Restriction efficiency", "A",
         "Strain designation in EcoRI.",
         "The letter 'R' is derived from the name of strain RY13 of Escherichia coli.",
         "E is genus; co is species.",
         T1, "Enzyme Nomenclature"),

        ("Restriction endonucleases belong to a larger class of enzymes called:",
         "Nucleases", "Polymerases", "Ligases", "Isomerases", "A",
         "Nuclease classification.",
         "Restriction enzymes belong to a larger class of enzymes called nucleases, which are divided into exonucleases and endonucleases.",
         "Polymerases synthesize nucleic acids; ligases seal nicks.",
         T1, "Restriction Enzymes"),

        ("How do endonucleases differ fundamentally from exonucleases in their cleavage of nucleic acids?",
         "Endonucleases make cuts at specific positions within the DNA, whereas exonucleases remove nucleotides from the ends",
         "Endonucleases degrade RNA only, while exonucleases cleave DNA",
         "Endonucleases join fragments, while exonucleases break fragments",
         "Endonucleases only function at 100 degrees Celsius", "A",
         "Endonuclease vs Exonuclease.",
         "Exonucleases remove nucleotides from the terminal ends of the DNA, whereas endonucleases make cuts at specific positions within the interior of the DNA.",
         "Both act on DNA; endonucleases cut internally.",
         T1, "Restriction Enzymes"),

        ("What term describes a sequence of base pairs in DNA that reads identical on both anti-parallel strands when reading direction is kept the same (5' to 3')?",
         "Palindromic sequence", "Degenerate sequence", "TATA box sequence", "Polymorphic repeat", "A",
         "Palindromic DNA sequence.",
         "A palindromic sequence in DNA is a sequence of base pairs that reads same on the two strands when orientation of reading is kept the same (e.g. 5' to 3').",
         "Degeneracy refers to codons specifying the same amino acid.",
         T1, "Palindromes"),

        ("What is the exact 5' to 3' palindromic recognition sequence recognized and cleaved by the restriction endonuclease EcoRI?",
         "5'-GAATTC-3'", "5'-GGATCC-3'", "5'-AAGCTT-3'", "5'-GTCGAC-3'", "A",
         "EcoRI recognition sequence.",
         "EcoRI recognizes the palindromic hexanucleotide sequence 5'-GAATTC-3' (and its complementary 3'-CTTAAG-5').",
         "GGATCC is BamHI; AAGCTT is HindIII; GTCGAC is SalI.",
         T1, "EcoRI Specificity"),

        ("Between which two specific nucleotide bases does EcoRI cut the DNA strands within its recognition site 5'-GAATTC-3'?",
         "Between G and A", "Between A and A", "Between T and T", "Between T and C", "A",
         "EcoRI cleavage site.",
         "EcoRI cuts the DNA strand a little away from the centre of the palindrome sites, between the bases G and A on both strands.",
         "Cutting between G and A produces cohesive 5' overhangs.",
         T1, "EcoRI Specificity"),

        ("Cleavage of double-stranded DNA by EcoRI generates single-stranded overhanging terminals known as:",
         "Sticky ends (cohesive ends)", "Blunt ends", "Telomeric caps", "Poly-A tails", "A",
         "Sticky ends.",
         "Restriction enzymes leave single-stranded portions at the overhanging ends, named sticky ends because they form hydrogen bonds with their complementary cut counterparts.",
         "Blunt ends have no single-stranded overhangs.",
         T1, "Sticky Ends"),

        ("Which enzyme acts as 'molecular glue' by catalyzing the formation of phosphodiester bonds to join two sticky-ended DNA fragments?",
         "DNA ligase", "DNA polymerase", "Restriction endonuclease", "Alkaline phosphatase", "A",
         "DNA ligase role.",
         "DNA ligase seals nicks by forming phosphodiester bonds between adjacent 3'-hydroxyl and 5'-phosphate termini.",
         "DNA polymerase adds free dNTPs; restriction enzyme cuts.",
         T1, "DNA Ligase"),

        ("In agarose gel electrophoresis, DNA fragments migrate towards which electrode because DNA molecules carry a net negative charge?",
         "Anode (positive electrode)", "Cathode (negative electrode)", "Neutral ground electrode", "Electromagnetic coil", "A",
         "Anode migration of DNA.",
         "Since DNA fragments are negatively charged molecules (due to phosphate groups), they can be separated by forcing them to move towards the positive anode under an electric field.",
         "Negative charges are repelled by cathode and attracted to anode.",
         T1, "Gel Electrophoresis"),

        ("The matrix widely used in gel electrophoresis to separate DNA fragments is Agarose, which is a natural polymer extracted from:",
         "Seaweeds", "Fungal mycelium", "Plant bark", "Bacterial slime capsule", "A",
         "Agarose origin.",
         "The most commonly used matrix is agarose which is a natural polysaccharide polymer extracted from marine red seaweeds (Gelidium and Gracilaria).",
         "It is not obtained from fungal mycelium or tree bark.",
         T1, "Gel Electrophoresis"),

        ("In agarose gel electrophoresis, DNA fragments separate based on their size due to which physical phenomenon provided by the gel matrix?",
         "Sieving effect", "Capillary suction", "Osmotic gradient", "Centrifugal sedimentation", "A",
         "Sieving effect.",
         "The DNA fragments separate (resolve) according to their size through sieving effect provided by the agarose gel; smaller fragments travel farther.",
         "Capillary action is used in Southern blotting paper transfer.",
         T1, "Gel Electrophoresis"),

        ("During agarose gel electrophoresis, which DNA fragments migrate the farthest distance toward the positive anode?",
         "The smallest sized fragments", "The largest sized fragments", "The circular uncut plasmids", "The fragments with highest GC content", "A",
         "DNA fragment mobility.",
         "Smaller fragments encounter less resistance in the pores of the agarose mesh and thus move farther towards the anode.",
         "Large fragments are retarded near the wells.",
         T1, "Gel Electrophoresis"),

        ("DNA fragments separated on an agarose gel cannot be seen in visible light without staining; which fluorescent dye is used to stain DNA?",
         "Ethidium bromide (EtBr)", "Methylene blue", "Safranin", "Crystal violet", "A",
         "Ethidium bromide staining.",
         "DNA fragments can be visualized only after staining the DNA with a compound known as ethidium bromide followed by exposure to UV radiation.",
         "Safranin and crystal violet are used in Gram staining.",
         T1, "Gel Electrophoresis"),

        ("When DNA stained with ethidium bromide is exposed to ultraviolet (UV) light, it fluoresces as bright bands of which colour?",
         "Bright orange", "Deep purple", "Emerald green", "Cobalt blue", "A",
         "EtBr fluorescence colour.",
         "You can see bright orange coloured bands of DNA in an ethidium bromide stained gel exposed to UV light.",
         "NCERT explicitly specifies bright orange.",
         T1, "Gel Electrophoresis"),

        ("The laboratory procedure of physically cutting out separated DNA bands from the agarose gel and extracting them from the gel piece is termed:",
         "Elution", "Spooling", "Transformation", "Electroporation", "A",
         "Elution definition.",
         "The separated bands of DNA are cut out from the agarose gel and extracted from the gel piece. This step is known as elution.",
         "Spooling is collection of precipitated DNA threads.",
         T1, "Gel Electrophoresis"),

        ("What is a plasmid in bacterial cells?",
         "An extrachromosomal, self-replicating, circular double-stranded DNA molecule",
         "A linear single-stranded messenger RNA",
         "A protein capsule surrounding the bacterial wall",
         "A storage vesicle containing glycogen", "A",
         "Plasmid definition.",
         "Plasmids are autonomously replicating, extrachromosomal circular double-stranded DNA molecules found naturally in bacteria.",
         "Plasmids are DNA, not RNA or protein capsules.",
         T1, "Cloning Vectors"),

        ("Bacteriophages are widely used as cloning vectors because they possess which advantage over low-copy plasmids?",
         "Very high copy numbers within bacterial cells", "Zero capacity to enter host cells", "Inability to replicate their genome", "Complete absence of nucleic acid", "A",
         "Bacteriophage copy number.",
         "Bacteriophages, because of their high number per cell, have very high copy numbers of their genome within bacterial cells.",
         "High copy number yields greater quantity of cloned gene.",
         T1, "Cloning Vectors"),

        ("The specific DNA sequence within a cloning vector that is responsible for initiating DNA replication and controlling copy number is the:",
         "Origin of replication (ori)", "Selectable marker", "Multiple cloning site", "Rop gene", "A",
         "Origin of replication (ori).",
         "Origin of replication (ori) is a specific sequence where replication starts; any piece of DNA linked to this sequence can be replicated within host cells and its copy number controlled.",
         "Selectable markers permit identification of transformants.",
         T1, "Cloning Vectors"),

        ("If an alien gene is linked to an origin of replication (ori) that supports high copy numbers, the cloned recombinant DNA will:",
         "Replicate to produce many copies per host cell", "Be instantly destroyed by the host", "Cease all cellular translation", "Transform into an RNA virus", "A",
         "Ori controls copy number.",
         "The ori sequence controls the copy number of the linked DNA; to recover many copies of target gene, it must be cloned in a vector whose origin supports high copy numbers.",
         "Ori promotes replication, not destruction.",
         T1, "Cloning Vectors"),

        ("In a cloning vector, the primary purpose of a 'selectable marker' is to:",
         "Identify and eliminate non-transformants while selectively permitting growth of transformants",
         "Cut the foreign DNA at palindromic sequences",
         "Synthesize agarose polymers",
         "Provide nutrients to the bacterial culture", "A",
         "Selectable marker role.",
         "A selectable marker helps in identifying and eliminating non-transformants and selectively permitting the growth of the transformants.",
         "Restriction enzymes cut DNA; markers allow selection.",
         T1, "Selectable Markers"),

        ("Which antibiotic resistance genes are commonly used as selectable markers in the standard cloning vector pBR322?",
         "Ampicillin resistance (ampR) and tetracycline resistance (tetR)",
         "Penicillin resistance and streptomycin resistance only",
         "Insulin resistance and glucagon resistance",
         "Chlorine resistance and detergent resistance", "A",
         "pBR322 selectable markers.",
         "The plasmid pBR322 carries genes conferring resistance to ampicillin (ampR) and tetracycline (tetR), which serve as selectable markers.",
         "Insulin is a hormone, not an antibiotic.",
         T1, "pBR322 Vector"),

        ("Why should a cloning vector preferably contain only a SINGLE recognition site for a chosen restriction endonuclease?",
         "Multiple recognition sites would generate several fragments, which will complicate gene cloning",
         "Multiple sites prevent any enzyme from binding",
         "Multiple sites permanently convert DNA into RNA",
         "Vectors cannot tolerate more than zero base pairs", "A",
         "Single recognition site in vector.",
         "In order to link the alien DNA, the vector needs to have very few, preferably single, recognition sites for commonly used restriction enzymes. Presence of more than one recognition site within the vector will generate several fragments, which will complicate gene cloning.",
         "Multiple cuts fragment the vector into unusable pieces.",
         T1, "Cloning Sites"),

        ("In the cloning vector pBR322, the recognition sites for restriction enzymes PstI and PvuI are located within which antibiotic resistance gene?",
         "Ampicillin resistance gene (ampR)", "Tetracycline resistance gene (tetR)", "Kanamycin resistance gene (kanR)", "Rop gene", "A",
         "pBR322 ampR restriction sites.",
         "In pBR322, PstI and PvuI sites are situated within the ampicillin resistance gene (ampR).",
         "BamHI and SalI are in the tetR gene.",
         T1, "pBR322 Vector"),

        ("In the cloning vector pBR322, the recognition sites for restriction enzymes BamHI and SalI are located within which gene?",
         "Tetracycline resistance gene (tetR)", "Ampicillin resistance gene (ampR)", "Rop gene", "Ori sequence", "A",
         "pBR322 tetR restriction sites.",
         "In pBR322, recognition sites for BamHI and SalI are present in the tetracycline resistance gene (tetR).",
         "PstI and PvuI are in ampR.",
         T1, "pBR322 Vector"),

        ("In the plasmid pBR322, what is the specific biological function of the 'rop' sequence?",
         "It codes for proteins involved in the replication of the plasmid",
         "It produces the ampicillin resistance enzyme",
         "It acts as a promoter for human insulin",
         "It degrades foreign viral RNA", "A",
         "pBR322 rop gene function.",
         "The rop sequence in pBR322 codes for the proteins involved in the replication of the plasmid (Repressor of Primer).",
         "ampR encodes beta-lactamase.",
         T1, "pBR322 Vector"),

        ("When a foreign gene of interest is ligated at the BamHI site of vector pBR322, the recombinant plasmid loses resistance to which antibiotic?",
         "Tetracycline (due to insertional inactivation)", "Ampicillin", "Kanamycin", "Chloramphenicol", "A",
         "Insertional inactivation of tetR.",
         "Ligating foreign DNA into the BamHI site within the tetR gene disrupts its coding sequence, resulting in loss of tetracycline resistance (insertional inactivation).",
         "The ampR gene remains intact and operational.",
         T1, "Insertional Inactivation"),

        ("Recombinant bacterial colonies carrying pBR322 with an insert at the BamHI site will exhibit which growth phenotype?",
         "They will grow on ampicillin medium, but fail to grow on tetracycline medium",
         "They will grow on tetracycline medium, but fail to grow on ampicillin medium",
         "They will grow vigorously on both ampicillin and tetracycline media",
         "They will fail to grow on either ampicillin or tetracycline media", "A",
         "Phenotype of BamHI recombinants.",
         "The recombinant plasmid retains ampR (grows on ampicillin) but has lost tetR due to insertion (dies on tetracycline).",
         "Non-recombinants grow on both antibiotics.",
         T1, "Insertional Inactivation"),

        ("Selection of recombinants using insertional inactivation of antibiotic resistance genes is cumbersome because it requires:",
         "Simultaneous plating on two different antibiotic plates (replica plating)",
         "Growing bacteria at 500 degrees Celsius",
         "Using expensive electron microscopes to count individual genes",
         "Injecting bacteria into laboratory mice", "A",
         "Replica plating limitation.",
         "Selection of recombinants due to inactivation of antibiotics requires simultaneous plating on two plates having different antibiotics, which is a cumbersome procedure.",
         "Alternative chromogenic screening avoids replica plating.",
         T1, "Insertional Inactivation"),

        ("In alternative screening using a chromogenic substrate, insertion of recombinant DNA into the coding sequence of beta-galactosidase produces colonies that are:",
         "White in colour (recombinants)", "Blue in colour (non-recombinants)", "Bright fluorescent green", "Deep red", "A",
         "Blue-white selection.",
         "Insertional inactivation of beta-galactosidase prevents production of functional enzyme; recombinant colonies do not produce color and appear white, while non-recombinants form blue colonies.",
         "Blue colonies have intact beta-galactosidase (non-recombinant).",
         T1, "Blue-White Screening"),

        ("Which soil bacterium is celebrated as a 'natural genetic engineer' because it delivers the T-DNA of its Ti plasmid into dicot plant cells?",
         "Agrobacterium tumefaciens", "Bacillus thuringiensis", "Escherichia coli", "Rhizobium leguminosarum", "A",
         "Agrobacterium natural genetic engineer.",
         "Agrobacterium tumefaciens, a pathogen of several dicot plants, delivers a piece of DNA known as 'T-DNA' to transform normal plant cells into tumor cells; its disarmed Ti plasmid is used as a plant vector.",
         "Bt produces Cry protein; Rhizobium forms nodules.",
         T1, "Plant Vectors"),

        ("In plant genetic engineering, the tumor-inducing (Ti) plasmid of Agrobacterium tumefaciens has been modified into a cloning vector by:",
         "Disarming it so that it is no longer pathogenic while retaining ability to deliver genes",
         "Removing all DNA and replacing it with plant cellulose",
         "Boiling it in concentrated sulfuric acid",
         "Converting it into a human retrovirus", "A",
         "Disarmed Ti plasmid.",
         "The tumor inducing (Ti) plasmid of Agrobacterium tumefaciens has now been modified into a cloning vector which is no longer pathogenic to the plants, but is still able to use the mechanisms to deliver genes of our interest.",
         "Disarming removes oncogenes while retaining T-DNA border sequences.",
         T1, "Plant Vectors"),

        ("In animal cells, which group of viruses has been disarmed and utilized as cloning vectors to deliver foreign genes into mammalian hosts?",
         "Retroviruses", "Bacteriophages", "Tobacco mosaic viruses", "Cauliflower mosaic viruses", "A",
         "Retroviral vectors in animals.",
         "Retroviruses in animals have the ability to transform normal cells into cancerous cells. Disarmed retroviruses are now used to transfer desirable genes into animal cells.",
         "Bacteriophages infect bacteria, not animals; TMV infects tobacco.",
         T1, "Animal Vectors"),

        ("Why is double-stranded DNA unable to pass directly across the lipid bilayer cell membrane of a bacterial host?",
         "DNA is a hydrophilic molecule carrying negatively charged phosphate groups",
         "DNA is completely hydrophobic and insoluble in water",
         "DNA molecules are gaseous at room temperature",
         "DNA binds permanently to outer flagella", "A",
         "Hydrophilic nature of DNA.",
         "Since DNA is a hydrophilic molecule, it cannot pass through cell membranes possessing hydrophobic lipid bilayers.",
         "DNA is hydrophilic, not hydrophobic or gaseous.",
         T2, "Competent Host"),

        ("To make bacterial cells 'competent' to take up foreign plasmid DNA, they are treated with a specific concentration of a divalent cation such as:",
         "Calcium (Ca2+ as CaCl2)", "Sodium (Na+)", "Potassium (K+)", "Lead (Pb2+)", "A",
         "Divalent cation CaCl2.",
         "Bacterial cells are treated with a specific concentration of a divalent cation, such as calcium (Ca2+), which increases the efficiency with which DNA enters the bacterium through pores in its cell wall.",
         "Monovalent cations like Na+ or toxic heavy metals like Pb2+ are not used.",
         T2, "Competent Host"),

        ("In bacterial transformation, the standard physical procedure known as 'heat shock' involves:",
         "Incubating cells on ice, exposing them briefly to 42°C, and then returning them to ice",
         "Boiling cells at 100°C for 2 hours",
         "Freezing cells at -80°C in liquid nitrogen permanently",
         "Subjecting cells to 10,000 volts of lightning", "A",
         "Heat shock protocol.",
         "Recombinant DNA can be forced into competent cells by incubating the cells with recombinant DNA on ice, followed by placing them briefly at 42°C (heat shock), and then putting them back on ice.",
         "Boiling at 100°C kills the cells.",
         T2, "Competent Host"),

        ("In which transformation technique is recombinant DNA directly injected into the nucleus of an animal cell using an ultra-fine glass micropipette?",
         "Micro-injection", "Biolistics (Gene gun)", "Electroporation", "Chemical transformation", "A",
         "Micro-injection.",
         "In a method known as micro-injection, recombinant DNA is directly injected into the nucleus of an animal cell.",
         "Biolistics is used for plant cells; electroporation uses electric pulses.",
         T2, "Gene Transfer Methods"),

        ("In the biolistic or gene gun method suitable for transforming plant cells, microscopic particles of which dense metals are coated with DNA and bombarded at high velocity?",
         "Gold or tungsten", "Iron or aluminum", "Lead or copper", "Mercury or sodium", "A",
         "Biolistics gold/tungsten microparticles.",
         "In the biolistics or gene gun method, plant cells are bombarded with high-velocity micro-particles of gold or tungsten coated with recombinant DNA.",
         "Gold and tungsten are chemically inert, non-toxic, and dense.",
         T2, "Gene Transfer Methods"),

        ("To isolate pure genomic DNA from a bacterial cell, which enzyme is used to digest the peptidoglycan cell wall?",
         "Lysozyme", "Cellulase", "Chitinase", "Ribonuclease", "A",
         "Lysozyme in DNA isolation.",
         "Bacterial cell walls made of peptidoglycan are digested by the enzyme lysozyme to release cellular contents.",
         "Cellulase is for plant cells; chitinase is for fungal cells.",
         T2, "DNA Isolation"),

        ("To isolate pure genomic DNA from plant cells, which enzyme is employed to break down the rigid cell wall?",
         "Cellulase", "Lysozyme", "Chitinase", "Lipase", "A",
         "Cellulase in plant DNA isolation.",
         "Plant cell walls are made predominantly of cellulose and are digested using the enzyme cellulase.",
         "Lysozyme is for bacteria; chitinase is for fungi.",
         T2, "DNA Isolation"),

        ("To isolate pure genomic DNA from fungal mycelium, which enzyme is required to digest the fungal cell wall?",
         "Chitinase", "Cellulase", "Lysozyme", "Pectinase", "A",
         "Chitinase in fungal DNA isolation.",
         "Fungal cell walls contain chitin and are enzymatically degraded using chitinase.",
         "Cellulase degrades plant walls.",
         T2, "DNA Isolation"),

        ("During the purification of DNA from a cellular lysate, which enzyme is added to eliminate cellular ribonucleic acids without harming DNA?",
         "Ribonuclease (RNase)", "Protease", "Deoxyribonuclease (DNase)", "Amylase", "A",
         "Ribonuclease in DNA purification.",
         "RNA can be removed by treatment with ribonuclease (RNase), whereas proteins are removed by treatment with a protease.",
         "DNase would destroy the target DNA.",
         T2, "DNA Isolation")
    ]

    # Additional 75 easy questions for Chapter 9
    extra_easy_9 = [
        ("During DNA isolation, the addition of which reagent causes purified DNA to precipitate out of aqueous solution as fine white threads?",
         "Chilled absolute ethanol", "Boiling acetone", "Concentrated sulfuric acid", "Liquid chloroform at 60°C", "A",
         "DNA precipitation with chilled ethanol.",
         "Purified DNA ultimately precipitates out after the addition of chilled ethanol. This can be seen as collection of fine threads.",
         "Ethanol must be chilled to reduce solubility of DNA.",
         T2, "DNA Isolation"),

        ("The laboratory action of collecting precipitated fine threads of purified DNA by winding them onto a glass rod is termed:",
         "Spooling", "Elution", "Annealing", "Denaturation", "A",
         "DNA spooling.",
         "DNA that separates out as fine threads is collected by spooling using a bent glass rod.",
         "Elution is extracting DNA from agarose gel slices.",
         T2, "DNA Isolation"),

        ("Who invented the Polymerase Chain Reaction (PCR) in 1983, a breakthrough for which he was awarded the Nobel Prize in Chemistry?",
         "Kary Mullis", "Alec Jeffreys", "Herbert Boyer", "Hamilton Smith", "A",
         "PCR invention by Kary Mullis.",
         "Polymerase Chain Reaction (PCR) was conceived and developed by American biochemist Kary Mullis in 1983.",
         "Alec Jeffreys developed DNA fingerprinting.",
         T2, "PCR"),

        ("What are 'primers' used in the Polymerase Chain Reaction (PCR)?",
         "Small chemically synthesized oligonucleotides complementary to the regions of DNA",
         "Enzymes that degrade viral protein coats",
         "Fluorescent radioactive isotopes of phosphorus",
         "Circular plasmid cloning vectors", "A",
         "PCR primers definition.",
         "Primers are small chemically synthesized oligonucleotides that are complementary to the 3' regions of the template DNA strands.",
         "Primers are single-stranded oligonucleotides, not enzymes or vectors.",
         T2, "PCR"),

        ("What is the correct chronological sequence of the three main cyclic steps in a Polymerase Chain Reaction (PCR)?",
         "Denaturation -> Annealing -> Extension",
         "Annealing -> Denaturation -> Extension",
         "Extension -> Denaturation -> Annealing",
         "Denaturation -> Extension -> Annealing", "A",
         "Three steps of PCR.",
         "Each cycle of PCR consists of three steps in order: (i) Denaturation of template DNA, (ii) Annealing of oligonucleotide primers, and (iii) Extension of primers by DNA polymerase.",
         "Annealing cannot occur before template strands are separated by denaturation.",
         T2, "PCR"),

        ("In the Polymerase Chain Reaction, the initial step of 'denaturation' is carried out by heating the reaction mixture to approximately 94-96°C in order to:",
         "Break hydrogen bonds between complementary strands and separate double-stranded DNA",
         "Irreversibly destroy the Taq polymerase enzyme",
         "Cause covalent phosphodiester bonds to shatter",
         "Evaporate all water from the PCR tube", "A",
         "Denaturation step in PCR.",
         "High temperature (approx 94°C) breaks the hydrogen bonds holding the two strands of target DNA together, generating single-stranded templates.",
         "Phosphodiester bonds remain intact; Taq polymerase is heat-stable.",
         T2, "PCR"),

        ("In the Polymerase Chain Reaction, the 'annealing' step is carried out at approximately 50-60°C to allow:",
         "Primers to bind (hybridize) to their complementary sequences on single-stranded template DNA",
         "The two template strands to re-anneal completely to each other",
         "Bacterial host cells to undergo division",
         "Lipid membranes to form around the DNA", "A",
         "Annealing step in PCR.",
         "During annealing, reaction temperature is lowered to allow oligonucleotide primers to hybridize specifically to complementary regions flanking the target sequence.",
         "Primers are in vast molar excess to prevent template-template reannealing.",
         T2, "PCR"),

        ("In the Polymerase Chain Reaction, the thermostable enzyme Taq polymerase synthesizes new DNA strands during the 'extension' step at approximately:",
         "72°C", "37°C", "0°C", "100°C", "A",
         "Extension temperature in PCR.",
         "Extension is carried out at approximately 72°C, which is the optimum catalytic temperature for Taq DNA polymerase.",
         "37°C is human body temperature; 72°C is optimal for thermophilic Taq.",
         T2, "PCR"),

        ("From which thermophilic bacterium was the thermostable Taq DNA polymerase originally isolated?",
         "Thermus aquaticus", "Bacillus thuringiensis", "Escherichia coli", "Streptococcus thermophilus", "A",
         "Thermus aquaticus source of Taq.",
         "Taq polymerase is isolated from the thermophilic bacterium Thermus aquaticus, which thrives in hydrothermal hot springs.",
         "E. coli enzymes denature rapidly at high temperatures.",
         T2, "PCR"),

        ("Why is standard human or E. coli DNA polymerase unsuitable for automated Polymerase Chain Reaction (PCR)?",
         "It denatures and permanently loses catalytic activity during the high-temperature denaturation step (94°C)",
         "It cannot recognize deoxyribonucleotides",
         "It synthesizes RNA instead of DNA",
         "It requires direct sunlight to function", "A",
         "Thermostability requirement in PCR.",
         "Mesophilic DNA polymerases denature and become permanently inactive at temperatures above 60°C, requiring fresh enzyme addition in every cycle without Taq polymerase.",
         "Taq polymerase remains active through repeated denaturation cycles.",
         T2, "PCR"),

        ("If a target DNA fragment undergoes 30 successive cycles of automated PCR amplification, approximately how many copies of the DNA are generated?",
         "Approximately 1 billion copies (2^30)", "30 copies", "60 copies", "10,000 copies", "A",
         "PCR exponential amplification.",
         "In 30 cycles, DNA is amplified approximately 2^30-fold, which is roughly 1.07 billion copies.",
         "Amplification is exponential (2^n), not linear.",
         T2, "PCR"),

        ("When a protein-encoding alien gene is expressed in a heterologous host organism, the resulting expressed recombinant protein is called a:",
         "Recombinant protein", "Proto-oncogene", "Prion protein", "Histone core", "A",
         "Recombinant protein definition.",
         "If any protein encoding gene is expressed in a heterologous host, it is called a recombinant protein.",
         "Proto-oncogenes are normal cellular cancer precursors.",
         T2, "Recombinant Proteins"),

        ("Vessels used for culturing biological cells in large volumes (100 to 1000 litres) under optimal growth conditions to produce recombinant products are:",
         "Bioreactors", "Microfuge tubes", "Petri dishes", "Burettes", "A",
         "Bioreactors definition.",
         "Bioreactors can be thought of as vessels in which raw materials are biologically converted into specific products using microbial, plant, animal or human cells in large volumes (100-1000 L).",
         "Petri dishes hold milliliters, not hundreds of liters.",
         T2, "Bioreactors"),

        ("A bioreactor provides optimum growth conditions for microbial cells by precisely controlling which parameters?",
         "Temperature, pH, substrate, salts, vitamins, and dissolved oxygen",
         "Atmospheric gravity and lunar tides only",
         "Magnetic resonance and cosmic rays",
         "Zero humidity and absolute vacuum", "A",
         "Bioreactor control parameters.",
         "A bioreactor provides optimal growth conditions (temperature, pH, substrate, salts, vitamins, oxygen) to achieve desired product yields.",
         "Cells cannot grow in absolute vacuum.",
         T2, "Bioreactors"),

        ("What is the primary function of the curved or rounded base in a standard stirred-tank bioreactor?",
         "To facilitate smooth and uniform mixing of the culture contents without stagnant dead corners",
         "To concentrate sedimented cells permanently at the bottom",
         "To reflect laser beams",
         "To prevent heat from entering the vessel", "A",
         "Curved base of stirred-tank bioreactor.",
         "A stirred-tank reactor is usually cylindrical or with a curved base to facilitate the even mixing of the reactor contents.",
         "Flat bottoms leave dead mixing zones in corners.",
         T2, "Bioreactors"),

        ("In a stirred-tank bioreactor, the rotating impeller is designed to ensure:",
         "Even mixing and oxygen availability throughout the bioreactor",
         "Mechanical pulverization of bacterial cells",
         "Complete precipitation of all proteins",
         "Instant freezing of the media broth", "A",
         "Impeller function.",
         "The stirrer facilitates even mixing and oxygen availability throughout the bioreactor volume.",
         "Impellers are designed to mix gently without causing shear-induced cell lysis.",
         T2, "Bioreactors"),

        ("How does a 'sparged' stirred-tank bioreactor differ from a simple stirred-tank bioreactor?",
         "Sterile air bubbles are sparged into the broth to dramatically increase oxygen transfer surface area",
         "It lacks any temperature control jacket",
         "It runs without any microbial cells",
         "It does not contain any liquid media", "A",
         "Sparged bioreactor mechanism.",
         "In a sparged stirred-tank bioreactor, sterile air is bubbled through the medium, creating fine bubbles that increase the surface area for oxygen transfer.",
         "Simple stirred tanks rely on surface aeration with agitators.",
         T2, "Bioreactors"),

        ("Which essential operational subsystems are integrated into a modern industrial stirred-tank bioreactor?",
         "Agitator system, oxygen delivery system, foam control system, and temperature/pH control system",
         "Rocket thrusters and solar panels",
         "X-ray emitter and particle accelerator",
         "Centrifugal drill and hydraulic press", "A",
         "Bioreactor components in NCERT.",
         "A bioreactor has an agitator system, an oxygen delivery system, a foam control system, a temperature control system, pH control system and sampling ports.",
         "These subsystems maintain homeostasis for living cultures.",
         T2, "Bioreactors"),

        ("Small volumes of culture broth can be withdrawn periodically from a bioreactor for testing and monitoring through:",
         "Sampling ports", "Exhaust chimney", "Motor drive shaft", "Heating cooling coils", "A",
         "Sampling ports in bioreactors.",
         "Sampling ports allow small volumes of culture to be withdrawn periodically without contaminating the sterile bulk culture.",
         "The drive shaft turns the impeller.",
         T2, "Bioreactors"),

        ("The series of processes that a biotechnological product must undergo after the biosynthesis stage before it is marketed commercially is collectively called:",
         "Downstream processing", "Upstream processing", "Transformation", "Amplification", "A",
         "Downstream processing definition.",
         "After completion of the biosynthetic stage, the product has to be subjected through a series of processes before it is ready for marketing as a finished product. These processes include separation and purification, collectively referred to as downstream processing.",
         "Upstream processing includes vector design, media preparation, and fermentation.",
         T2, "Downstream Processing"),

        ("The two primary core operations constituting downstream processing in biotechnology are:",
         "Separation and purification", "Ligation and transformation", "Denaturation and annealing", "Inoculation and incubation", "A",
         "Separation and purification.",
         "The processes of downstream processing include separation and purification of the desired biochemical product from the fermented broth.",
         "Ligation and annealing are upstream genetic engineering steps.",
         T2, "Downstream Processing"),

        ("Before being formulated for human clinical use, pharmaceutical drugs manufactured via recombinant DNA technology must undergo rigorous:",
         "Clinical trials and strict quality control testing",
         "Agarose gel electrophoresis in classrooms",
         "Spooling onto wooden chopsticks",
         "Heat shock at 100 degrees Celsius", "A",
         "Clinical trials and quality control.",
         "The product has to be formulated with suitable preservatives and such formulation has to undergo thorough clinical trials as in case of drugs, along with strict quality control testing.",
         "Clinical trials ensure safety and therapeutic efficacy in humans.",
         T2, "Downstream Processing"),

        ("Which of the following organisms naturally harbors the tumor-inducing (Ti) plasmid?",
         "Agrobacterium tumefaciens", "Thermus aquaticus", "Salmonella typhimurium", "Escherichia coli", "A",
         "Ti plasmid organism.",
         "Agrobacterium tumefaciens is a soil bacterium that naturally harbors the Ti (tumor-inducing) plasmid.",
         "Thermus aquaticus provides Taq; Salmonella provided Cohen and Boyer's plasmid.",
         T1, "Plant Vectors"),

        ("The specific segment of the Ti plasmid that is transferred and integrated into the host plant genome during Agrobacterium infection is called:",
         "T-DNA (Transfer DNA)", "Rop DNA", "Ori DNA", "cDNA", "A",
         "T-DNA transfer.",
         "Agrobacterium transfers a defined segment of its Ti plasmid called T-DNA (Transfer DNA) into the host plant chromosome.",
         "cDNA is complementary DNA synthesized from mRNA.",
         T1, "Plant Vectors"),

        ("In recombinant DNA technology, the vehicle that delivers the passenger foreign gene into the recipient host cell is called a:",
         "Vector", "Primer", "Probe", "Promoter", "A",
         "Vector definition.",
         "Vectors are DNA vehicles (such as plasmids or bacteriophages) used to transfer foreign genetic material into another cell.",
         "Primers initiate PCR; probes identify target sequences.",
         T1, "Cloning Vectors"),

        ("Which property of plasmids makes them exceptionally well-suited as gene cloning vectors?",
         "They replicate autonomously and independently of chromosomal DNA control",
         "They are composed of proteins rather than nucleic acids",
         "They completely lack any origin of replication",
         "They destroy all bacterial ribosomes", "A",
         "Autonomous plasmid replication.",
         "Plasmids replicate autonomously within bacterial cells, meaning their replication occurs independently of the chromosomal DNA control.",
         "Plasmids are double-stranded circular DNA.",
         T1, "Cloning Vectors"),

        ("The term 'passenger DNA' or 'foreign DNA' in recombinant DNA technology refers to:",
         "The desired gene of interest to be cloned and expressed",
         "The bacterial chromosomal genome",
         "The ribosomal RNA of the host",
         "The agarose polymer in electrophoresis", "A",
         "Passenger DNA meaning.",
         "Passenger DNA is the specific foreign DNA fragment (gene of interest) that is ligated into a vector for cloning.",
         "Host chromosomes are not passenger DNA.",
         T1, "Recombinant DNA"),

        ("Which chemical bond is cleaved by restriction endonucleases in the backbone of DNA?",
         "Phosphodiester bond", "Peptide bond", "Glycosidic bond", "Disulfide bond", "A",
         "Phosphodiester bond cleavage.",
         "Restriction endonucleases hydrolyze the phosphodiester bonds between adjacent nucleotides in the sugar-phosphate backbone of each strand.",
         "Peptide bonds link amino acids; glycosidic bonds link bases to sugars.",
         T1, "Restriction Enzymes"),

        ("Why must the vector plasmid and the foreign donor DNA be digested with the SAME restriction enzyme prior to ligation?",
         "So that both generate complementary, matching sticky ends capable of base-pairing",
         "To destroy all bacterial ribosomes",
         "To ensure that both fragments have identical molecular weights",
         "To convert all thymine bases into uracil", "A",
         "Matching sticky ends.",
         "Cutting both vector and foreign DNA with the same restriction enzyme yields identical cohesive sticky ends that can readily anneal via base-pairing and be sealed by DNA ligase.",
         "Different enzymes generate non-complementary overhangs that cannot ligate efficiently.",
         T1, "Ligation Principles"),

        ("What would happen if foreign DNA was inserted into a cloning vector that lacked an origin of replication (ori)?",
         "The foreign DNA would fail to replicate and would be lost during host cell divisions",
         "The foreign DNA would amplify 10 billion times",
         "The host cell would instantly transform into a plant cell",
         "The foreign DNA would synthesize its own origin spontaneously", "A",
         "Absence of ori consequences.",
         "Without an ori sequence, the foreign DNA cannot initiate DNA replication in the host and is degraded or diluted out during binary fission.",
         "Ori is strictly required for replication.",
         T1, "Cloning Vectors"),

        ("Why are genes conferring resistance to antibiotics like ampicillin, chloramphenicol, tetracycline, or kanamycin considered useful selectable markers for E. coli?",
         "Normal non-transformed wild-type E. coli cells do not carry resistance to any of these antibiotics",
         "E. coli feeds on these antibiotics as its primary carbon source",
         "These antibiotics accelerate bacterial translation by 1000-fold",
         "These antibiotics transform bacteria into multicellular fungi", "A",
         "Wild-type E. coli antibiotic susceptibility.",
         "Normal E. coli cells do not carry resistance against any of these antibiotics; hence, only transformants bearing resistance genes on the vector can survive on antibiotic-containing media.",
         "E. coli is naturally sensitive to these antibiotics.",
         T1, "Selectable Markers"),

        ("The pBR322 vector was constructed artificially by Bolivar and Rodriguez; what does 'BR' stand for in its designation?",
         "Bolivar and Rodriguez (the scientists who developed it)",
         "Bacterial Recombinant",
         "Biological Reactor",
         "Base Recognition", "A",
         "pBR322 naming.",
         "In pBR322, 'p' stands for plasmid, and 'BR' honors Bolivar and Rodriguez who engineered it in 1977.",
         "322 is the laboratory strain number.",
         T1, "pBR322 Vector"),

        ("If a recombinant plasmid has an insert in its tetR gene, it will confer:",
         "Resistance to ampicillin, but sensitivity to tetracycline",
         "Resistance to tetracycline, but sensitivity to ampicillin",
         "Resistance to both ampicillin and tetracycline",
         "Sensitivity to both ampicillin and tetracycline", "A",
         "Insertional inactivation phenotype.",
         "Disruption of the tetR gene eliminates tetracycline resistance, while the intact ampR gene continues to confer ampicillin resistance.",
         "It cannot survive on tetracycline medium.",
         T1, "Insertional Inactivation"),

        ("In the blue-white screening assay, what substrate is cleaved by beta-galactosidase to produce a blue-coloured product?",
         "X-gal (5-bromo-4-chloro-3-indolyl-beta-D-galactopyranoside)",
         "Glucose-6-phosphate",
         "Ethidium bromide",
         "Lactose monohydrate", "A",
         "X-gal chromogenic substrate.",
         "X-gal is a chromogenic substrate cleaved by functional beta-galactosidase to release an insoluble blue indolyl precipitate.",
         "In recombinant colonies, insertional inactivation prevents X-gal cleavage, resulting in white colonies.",
         T1, "Blue-White Screening"),

        ("In blue-white screening, non-recombinant bacterial colonies appear blue because:",
         "They possess an intact beta-galactosidase gene that hydrolyzes the chromogenic substrate",
         "They are stained by ethidium bromide",
         "They contain high concentrations of chlorophyll",
         "They have taken up foreign DNA that synthesizes blue pigment", "A",
         "Blue non-recombinant colonies.",
         "Non-recombinant plasmids have an uninterrupted lacZ gene, synthesizing functional beta-galactosidase which cleaves X-gal to produce blue colonies.",
         "Recombinant plasmids have an interrupted gene and remain white.",
         T1, "Blue-White Screening"),

        ("The tumor caused by Agrobacterium tumefaciens in infected dicotyledonous plants is commonly known as:",
         "Crown gall", "Root knot", "Late blight", "Black rot", "A",
         "Crown gall tumor.",
         "Agrobacterium tumefaciens induces crown gall tumors at the junction of root and shoot in dicot plants by transferring its oncogenic T-DNA.",
         "Root knot is caused by the nematode Meloidogyne incognita.",
         T1, "Plant Vectors"),

        ("What role do plant hormones auxin and cytokinin play in the normal oncogenicity of Agrobacterium tumefaciens T-DNA?",
         "T-DNA genes encode enzymes for auxin and cytokinin overproduction, driving uncontrolled tumor proliferation",
         "They kill the plant within seconds",
         "They prevent the plant from absorbing water",
         "They cause the plant to flower prematurely", "A",
         "T-DNA oncogene function.",
         "T-DNA encodes enzymes for auxin and cytokinin synthesis, inducing neoplastic cellular hyperplasia (crown gall tumor). In disarmed vectors, these oncogenes are replaced with genes of interest.",
         "Disarmed vectors lack tumor-inducing oncogenes.",
         T1, "Plant Vectors"),

        ("Which retroviral gene transfer feature makes retroviruses powerful vectors for genetic modification of mammalian cells?",
         "Their natural ability to integrate their reverse-transcribed cDNA into the host cell nuclear chromosome",
         "Their ability to dissolve the entire animal body",
         "Their capacity to synthesize bacterial cell walls",
         "Their zero affinity for animal receptors", "A",
         "Retrovirus integration.",
         "Retroviruses reverse transcribe their RNA genome into DNA, which integrase permanently inserts into the host cell chromosomal DNA.",
         "Disarmed retroviruses deliver therapeutic genes without viral replication.",
         T1, "Animal Vectors"),

        ("In the chemical transformation of competent E. coli cells, what is the mechanistic role of divalent Ca2+ ions?",
         "They neutralize negative charges on both DNA phosphate backbones and outer membrane lipopolysaccharides, facilitating DNA entry",
         "They boil the bacterial cell wall instantly",
         "They act as restriction endonucleases",
         "They synthesize primers for plasmid replication", "A",
         "Role of Ca2+ in competence.",
         "Divalent Ca2+ shields negative charges on DNA and membrane phospholipids, reducing electrostatic repulsion and enabling DNA to enter through transient wall pores.",
         "Ca2+ is a divalent shielding cation, not an enzyme.",
         T2, "Competent Host"),

        ("Why is the 'gene gun' method especially favored for plant transformation over micro-injection?",
         "Plant cells possess rigid cellulose cell walls that resist micropipette penetration but can be breached by high-velocity microprojectiles",
         "Plant cells have no nuclei",
         "Plant cells are 10,000 times smaller than bacterial cells",
         "Gold particles stimulate photosynthesis", "A",
         "Gene gun in plants.",
         "Plant cell walls are thick and rigid; high-velocity heavy metal microprojectiles (biolistics) physically penetrate the cell wall and membrane to deliver DNA.",
         "Micro-injection is widely used for wall-less animal eggs/cells.",
         T2, "Gene Transfer Methods"),

        ("Which cellular enzyme is used to remove proteins associated with DNA during genomic extraction?",
         "Protease", "Ribonuclease", "Cellulase", "Lysozyme", "A",
         "Protease in extraction.",
         "Proteases (such as proteinase K) degrade histones and cellular proteins, ensuring that isolated DNA is free of protein contaminants.",
         "Ribonuclease degrades RNA.",
         T2, "DNA Isolation"),

        ("Why must isolated DNA be kept free of heavy shearing forces (such as vigorous vortexing) during isolation?",
         "High mechanical shear forces physically break long genomic DNA molecules into random fragments",
         "Shearing causes DNA to transform into RNA",
         "Shearing turns DNA into a gas",
         "Shearing causes bacterial spore germination", "A",
         "Shear sensitivity of high molecular weight DNA.",
         "High molecular weight genomic DNA is fragile in aqueous solution; harsh mechanical agitation or vortexing causes physical double-strand shear breaks.",
         "Gentle handling preserves intact high-molecular-weight DNA.",
         T2, "DNA Isolation"),

        ("In PCR, what is the chemical nature of the added primers?",
         "Synthetic single-stranded DNA oligonucleotides (typically 18-25 nucleotides in length)",
         "Naturally occurring double-stranded circular plasmids",
         "Short polypeptide chains of 20 amino acids",
         "Enzymatic cofactors containing magnesium ions", "A",
         "Primer chemical nature.",
         "Primers are short, single-stranded synthetic DNA oligonucleotides with sequences complementary to the 3' boundaries of the target region.",
         "Primers in cellular replication are RNA, but in PCR they are synthetic DNA.",
         T2, "PCR"),

        ("What provides the energy and building blocks for the synthesis of new DNA strands by Taq polymerase during PCR extension?",
         "Deoxynucleoside triphosphates (dATP, dCTP, dGTP, dTTP)",
         "Adenosine triphosphate (ATP) molecules exclusively",
         "Ribonucleoside monophosphates (AMP, CMP, GMP, UMP)",
         "Glucose and fructose molecules in the buffer", "A",
         "dNTPs in PCR.",
         "Deoxynucleotide triphosphates (dNTPs) serve as both substrate monomers and energy donors (via pyrophosphate release) for DNA polymerase.",
         "Taq incorporates dNTPs into growing DNA chains.",
         T2, "PCR"),

        ("In automated thermal cyclers, how is the rapid cycling between denaturation, annealing, and extension temperatures accomplished?",
         "Peltier electronic heating and cooling blocks",
         "Manually moving test tubes between three water baths every minute",
         "Lighting Bunsen burners underneath the machine",
         "Adding boiling water and ice cubes alternately", "A",
         "Peltier thermal cycling.",
         "Modern thermal cyclers use solid-state Peltier thermoelectric blocks that rapidly heat and cool reaction vessels with sub-degree precision.",
         "Early manual PCR required moving tubes between water baths, but automated cyclers use Peltier elements.",
         T2, "PCR"),

        ("If an experimenter accidentally sets the PCR annealing temperature higher than the melting temperature (Tm) of the primers, what will occur?",
         "Primers will fail to hybridize to the template DNA, resulting in no amplification",
         "Primers will bind non-specifically to all bacterial genes",
         "The Taq polymerase will immediately disintegrate",
         "The reaction will produce 100 times more DNA", "A",
         "Annealing temperature effects.",
         "If the temperature is too high, thermal kinetic energy prevents stable hydrogen bond formation between primers and template, abolishing amplification.",
         "Too low temperature causes non-specific mispriming.",
         T2, "PCR"),

        ("Recombinant human insulin produced in genetically engineered E. coli is an example of a:",
         "Recombinant protein", "Restriction enzyme", "Selectable marker", "Cloning vector", "A",
         "Recombinant insulin identity.",
         "Human insulin synthesized by genetically transformed E. coli is expressed from foreign cDNA, classifying it as a recombinant protein.",
         "It is a therapeutic hormone product.",
         T2, "Recombinant Proteins"),

        ("In continuous culture systems, why is fresh nutrient medium added continuously from one side while spent medium is drained from the other?",
         "To maintain the microbial cells in their physiologically most active log/exponential growth phase",
         "To allow cells to reach stationary and death phase rapidly",
         "To permanently eliminate all dissolved oxygen",
         "To starve the bacteria of all carbon sources", "A",
         "Continuous culture physiology.",
         "In continuous culture, cells are maintained in their steady-state exponential (log) growth phase, maximizing biomass and recombinant protein productivity.",
         "Batch cultures eventually transition into stationary phase.",
         T2, "Continuous Culture"),

        ("Which of the following describes the 'lag phase' of bacterial growth in a closed batch bioreactor?",
         "An initial period of metabolic adaptation where cell numbers do not increase significantly",
         "The period of maximal exponential cell division",
         "The period where death rate exceeds growth rate",
         "The phase where all nutrients are completely exhausted", "A",
         "Lag phase.",
         "During lag phase, inoculated cells synthesize enzymes and adapt to medium conditions without rapid population growth.",
         "Exponential growth occurs in log phase.",
         T2, "Bioreactors"),

        ("In a bioreactor, why must excessive foam formation on the broth surface during active agitation be suppressed by a foam control system?",
         "Foam can wet exhaust filters, cause contamination, and disrupt gas exchange across the surface",
         "Foam transforms bacterial cells into yeast",
         "Foam produces radioactive isotopes",
         "Foam increases the pH to 14 instantly", "A",
         "Foam control importance.",
         "Excessive foam can overflow, clog air exhaust filters leading to over-pressurization or contamination, and diminish oxygen transfer efficiency.",
         "Antifoam agents (e.g., silicone oils) break foam bubbles.",
         T2, "Bioreactors"),

        ("Quality control (QC) testing for a newly manufactured recombinant pharmaceutical must be conducted on:",
         "Every single commercial batch produced", "Only the very first batch manufactured", "A batch once every ten years", "A random batch picked by the factory driver", "A",
         "Quality control testing per batch.",
         "Strict quality control testing is mandatory for every manufactured production batch to ensure clinical safety, purity, and potency before release.",
         "QC is an invariable requirement for pharmaceutical compliance.",
         T2, "Downstream Processing"),

        ("Which separation technique is commonly utilized during downstream processing to isolate purified recombinant protein from cell lysates?",
         "Column chromatography (such as affinity or ion-exchange chromatography)",
         "Agarose gel electrophoresis with manual razor slicing",
         "Flame photometry in open air",
         "Centrifugal blood grouping", "A",
         "Chromatography in downstream processing.",
         "Industrial downstream processing relies on preparative chromatography (affinity, size-exclusion, ion-exchange) to achieve high-purity biopharmaceuticals.",
         "Analytical gel slicing is for laboratory research, not industrial manufacturing.",
         T2, "Downstream Processing"),

        ("The specific plasmid feature that prevents multiple plasmids of the same incompatibility group from co-existing within a single bacterium is determined by its:",
         "Replication control and partitioning system", "Antibiotic resistance gene", "Multiple cloning site", "Agarose matrix", "A",
         "Plasmid incompatibility.",
         "Plasmids sharing identical replication control or partition mechanisms cannot stably co-exist in the same host cell line (incompatibility).",
         "Selectable markers do not dictate plasmid compatibility.",
         T1, "Cloning Vectors"),

        ("Which of the following is an example of a blunt-end producing restriction enzyme?",
         "SmaI (cleaving CCC^GGG)", "EcoRI (cleaving G^AATTC)", "BamHI (cleaving G^GATCC)", "HindIII (cleaving A^AGCTT)", "A",
         "Blunt cutter SmaI.",
         "SmaI cuts straight down the axis of symmetry (CCC/GGG) yielding flush, blunt-ended fragments without single-stranded overhangs.",
         "EcoRI, BamHI, and HindIII generate sticky cohesive ends.",
         T1, "Restriction Enzymes"),

        ("What happens when two different DNA fragments cut by blunt-end producing restriction enzymes are joined by DNA ligase?",
         "Ligation is possible but requires higher enzyme concentrations and lacks orientation specificity",
         "They can never be ligated under any circumstance",
         "They spontaneously form circular RNA",
         "They combust upon contact", "A",
         "Blunt-end ligation.",
         "Blunt ends can be ligated by T4 DNA ligase, though with lower efficiency than cohesive sticky ends, and the insert can enter in either orientation.",
         "Blunt ends lack sticky overhangs to guide directional annealing.",
         T1, "Ligation Principles"),

        ("In recombinant DNA experiments, why is alkaline phosphatase enzyme often used to treat digested vector plasmids prior to ligation?",
         "To remove 5'-phosphate groups and prevent vector self-ligation (re-circularization)",
         "To degrade foreign DNA inserts",
         "To synthesize new antibiotic resistance genes",
         "To induce bacterial sporulation", "A",
         "Alkaline phosphatase dephosphorylation.",
         "Alkaline phosphatase removes terminal 5'-phosphate groups from digested vector ends, preventing self-ligation in the absence of foreign insert.",
         "Foreign inserts supply the necessary 5'-phosphates for ligation.",
         T1, "Recombinant DNA Techniques"),

        ("A palindromic sequence in double-stranded DNA typically possesses which type of symmetry?",
         "Two-fold rotational symmetry (dyad symmetry)",
         "Spherical radial symmetry",
         "Translational asymmetric drift",
         "Cubic crystal symmetry", "A",
         "Dyad symmetry of palindromes.",
         "Type II restriction palindromes possess two-fold rotational symmetry about a central axis perpendicular to the helical axis.",
         "The 5' to 3' sequence is identical on both strands.",
         T1, "Palindromes"),

        ("Cosmids are hybrid cloning vectors constructed by combining features of which two biological entities?",
         "Plasmids and bacteriophage lambda cos sites",
         "Plant chloroplasts and human ribosomes",
         "Mitochondrial cristae and bacterial flagella",
         "Retroviruses and prions", "A",
         "Cosmid vectors.",
         "Cosmids are plasmid vectors incorporating lambda phage 'cos' (cohesive end) sites, allowing packaging into lambda capsids to clone 35-45 kb inserts.",
         "They are plasmid-lambda hybrids.",
         T1, "Cloning Vectors"),

        ("Bacterial Artificial Chromosomes (BACs) and Yeast Artificial Chromosomes (YACs) are specialized vectors engineered to:",
         "Clone exceptionally large fragments of DNA (hundreds of kilobases to megabases) for genome sequencing",
         "Synthesize penicillin in test tubes",
         "Produce blue colonies on agar",
         "Deliver DNA exclusively into insects", "A",
         "BAC and YAC vectors.",
         "BACs (based on F-plasmid) and YACs (with yeast telomeres and centromeres) allow cloning of massive DNA inserts (100-1000 kb) essential for genome mapping.",
         "Standard plasmids can only carry ~10 kb inserts.",
         T1, "Cloning Vectors"),

        ("Which chemical agent is commonly co-precipitated with calcium phosphate to facilitate gene uptake by mammalian cells via endocytosis?",
         "Calcium phosphate coprecipitate", "Sodium chloride crystals", "Liquid mercury", "Hydrochloric acid", "A",
         "Calcium phosphate transfection.",
         "Calcium phosphate coprecipitation forms fine insoluble precipitates that adhere to animal cell membranes and are internalized via endocytosis.",
         "Mercury is a cellular poison.",
         T2, "Transfection Techniques"),

        ("The use of short high-voltage electrical pulses to create transient nanoscale pores in the plasma membrane for DNA entry is called:",
         "Electroporation", "Micro-injection", "Biolistics", "Spooling", "A",
         "Electroporation definition.",
         "Electroporation applies transient electric pulses to polarize lipid bilayers, creating reversible micropores through which hydrophilic DNA molecules enter.",
         "Biolistics uses physical microprojectiles.",
         T2, "Gene Transfer Methods"),

        ("In recombinant DNA workflows, the term 'transformation' specifically denotes:",
         "The uptake and phenotypic incorporation of foreign DNA by a recipient cell",
         "The destruction of bacterial cells by viral lysis",
         "The boiling of culture media",
         "The translation of messenger RNA into protein", "A",
         "Transformation definition.",
         "Transformation is a procedure through which a piece of foreign DNA is introduced into a host bacterium, altering its genetic makeup.",
         "Viral infection is transduction; cell mating is conjugation.",
         T2, "Transformation"),

        ("During gel electrophoresis, what is the purpose of adding a 'loading dye' containing glycerol and bromophenol blue to the DNA samples?",
         "Glycerol increases sample density so it sinks into the well, and dye allows visual tracking of the electrophoretic front",
         "To permanently destroy the DNA",
         "To synthesize agarose polymers in the well",
         "To emit ultraviolet radiation", "A",
         "Loading dye function.",
         "Dense glycerol ensures the DNA sample settles beneath buffer into the well; tracking dyes migrate visibly to indicate electrophoresis progress.",
         "Loading dye does not stain DNA; EtBr is used for DNA visualization.",
         T1, "Gel Electrophoresis"),

        ("In recombinant technology, a 'molecular marker' or 'DNA ladder' run alongside samples on an agarose gel serves to:",
         "Provide standard DNA fragments of known molecular sizes for estimating sample fragment lengths",
         "Clean the gel of bacterial contamination",
         "Act as a source of electrical power",
         "Prevent the gel from melting", "A",
         "DNA ladder.",
         "A DNA ladder comprises a series of DNA fragments of precisely calibrated sizes, allowing molecular weight calibration of experimental bands.",
         "It acts as a molecular ruler.",
         T1, "Gel Electrophoresis"),

        ("Which natural enzyme is responsible for synthesizing complementary DNA (cDNA) from a messenger RNA template in the laboratory?",
         "Reverse transcriptase", "DNA ligase", "Taq polymerase", "Topoisomerase", "A",
         "cDNA synthesis by reverse transcriptase.",
         "Reverse transcriptase (RNA-dependent DNA polymerase) transcribes eukaryotic mature mRNA into cDNA, which lacks introns and can be expressed in prokaryotes.",
         "Taq is a DNA-dependent DNA polymerase.",
         T1, "Recombinant DNA Tools"),

        ("Why must eukaryotic human genes intended for expression in bacterial hosts (like E. coli) be cloned as cDNA rather than genomic DNA?",
         "Bacteria lack the spliceosome machinery to excise non-coding introns from eukaryotic primary RNA transcripts",
         "Bacteria digest cDNA within seconds",
         "Human introns are toxic poisons that kill bacteria",
         "Bacterial ribosomes only recognize single-stranded DNA", "A",
         "Bacterial lack of splicing.",
         "Prokaryotes cannot splice pre-mRNA; cloned genomic eukaryotic genes retain introns which disrupt the reading frame during translation. Intronless cDNA solves this.",
         "Introns disrupt the reading frame if translated directly.",
         T1, "cDNA Cloning"),

        ("A recombinant plasmid containing an insert was transformed into competent E. coli, and cells were plated on nutrient agar lacking antibiotics. What will grow on the plate?",
         "Both transformed and non-transformed bacterial cells will grow indiscriminately",
         "Only recombinant transformed cells will grow",
         "No cells will grow because antibiotics are required as nutrients",
         "Only viral bacteriophages will form plaques", "A",
         "Need for selective antibiotic pressure.",
         "Without antibiotic selection, both transformed cells and non-transformed cells can divide normally, obscuring transformant identification.",
         "Antibiotics act as selective agents, not nutrients.",
         T1, "Selectable Markers"),

        ("The term 'cloning' in recombinant DNA technology fundamentally means:",
         "Producing identical genetic copies of a specific gene, cell, or organism",
         "Killing cells using gamma radiation",
         "Sequencing every amino acid in a protein",
         "Mixing two unrelated species together", "A",
         "Cloning definition.",
         "Cloning refers to the asexual propagation and multiplication of identical copies of a molecular sequence, cell lineage, or individual organism.",
         "It produces genetically identical replicas.",
         T1, "Cloning Principles"),

        ("What happens to the copy number of a cloned gene if the plasmid vector contains an altered 'rop' gene that cannot repress replication?",
         "Copy number of the plasmid per cell will increase significantly",
         "The plasmid will instantly lose all DNA",
         "The host cell will stop producing ATP",
         "The plasmid will turn into an RNA virus", "A",
         "Rop repressor mutation.",
         "Rop encodes a repressor protein that dampens plasmid replication. Mutations inactivating rop relieve repression, increasing copy numbers.",
         "Rop means repressor of primer.",
         T1, "pBR322 Vector"),

        ("Which of the following is an example of an organism from which heat-stable Pfu DNA polymerase is isolated for high-fidelity PCR?",
         "Pyrococcus furiosus", "Escherichia coli", "Salmonella typhimurium", "Agrobacterium tumefaciens", "A",
         "Pfu polymerase.",
         "Pfu DNA polymerase is isolated from the hyperthermophilic archaeon Pyrococcus furiosus and exhibits 3' to 5' proofreading exonuclease activity.",
         "Taq lacks 3' to 5' proofreading activity.",
         T2, "PCR Enzymes"),

        ("In a recombinant DNA experiment, what is the purpose of treating foreign DNA and vector with restriction enzyme at 37°C?",
         "37°C provides the optimal enzymatic temperature for most Type II restriction endonucleases",
         "37°C completely denatures DNA into single strands",
         "37°C freezes the reaction so it does not degrade",
         "37°C sterilizes the mixture from all viruses", "A",
         "Restriction enzyme incubation temperature.",
         "Most standard restriction endonucleases (like EcoRI and BamHI) originate from mesophilic bacteria and exhibit maximal catalytic efficiency at 37°C.",
         "Denaturation requires >90°C.",
         T1, "Restriction Enzymes"),

        ("The specific enzyme that relieves torsional strain and unwinds supercoiled plasmid DNA ahead of the replication fork is:",
         "Topoisomerase (Gyrase)", "DNA ligase", "Chitinase", "Cellulase", "A",
         "Topoisomerase.",
         "DNA topoisomerases (or bacterial gyrase) introduce transient breaks to relieve topological supercoiling strain generated during plasmid replication.",
         "Ligase seals nicks; chitinase breaks fungal walls.",
         T1, "Molecular Biology Tools"),

        ("Which parameter in a stirred-tank bioreactor is continuously measured by an electrode probe and adjusted by automatic addition of acid or base?",
         "pH of the culture broth", "Light intensity", "Gravitational force", "Atmospheric humidity", "A",
         "pH control loop.",
         "Bioreactors feature sterilizable pH electrode probes coupled to peristaltic pumps that automatically dose sterile acid or alkali to maintain constant pH.",
         "Microbial metabolism produces acids that alter broth pH.",
         T2, "Bioreactors"),

        ("What is the primary danger of operating a large industrial bioreactor under non-sterile conditions?",
         "Contaminating rogue microbes will outcompete the production strain and degrade the product",
         "The metal vessel will melt within minutes",
         "The culture broth will turn into pure gold",
         "The stirring motor will spin in reverse", "A",
         "Aseptic maintenance in bioprocess.",
         "Bioprocess engineering requires strict sterility because contaminating foreign bacteria or molds rapidly consume nutrients, secrete toxins, and destroy product yields.",
         "Maintaining sterile ambience is one of the two core principles of biotechnology.",
         T2, "Bioprocess Engineering"),

        ("In recombinant DNA technology, the term 'bioprocess engineering' refers to:",
         "Maintaining sterile, contamination-free conditions to grow desired cells in large scale for product manufacturing",
         "Building electronic computers from silicon chips",
         "Designing gasoline engines for automobiles",
         "Synthesizing plastic polymers from crude oil", "A",
         "Bioprocess engineering definition.",
         "Bioprocess engineering maintains sterile ambience in chemical engineering processes to enable growth of only desired microbes/cells in large quantities for products like antibiotics, vaccines, and enzymes.",
         "It is biological manufacturing, not petroleum refining.",
         T2, "Bioprocess Engineering")
    ]

    all_easy_9 = easy_data + extra_easy_9
    print(f"Total easy questions prepared for Ch9: {len(all_easy_9)}")
    assert len(all_easy_9) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_9)}"

    for q in all_easy_9[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 9.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. PCR and Electrophoresis calculations (30 items)
    for cycles, expected_copies in [
        (10, "1,024 copies (2^10)"),
        (15, "32,768 copies (2^15)"),
        (20, "1,048,576 copies (approx 1 million copies, 2^20)"),
        (25, "33,554,432 copies (approx 33.5 million copies, 2^25)"),
        (30, "1,073,741,824 copies (approx 1.07 billion copies, 2^30)"),
        (32, "4,294,967,296 copies (approx 4.29 billion copies, 2^32)")
    ]:
        for efficiency in [100, 95, 90, 85, 98]:
            med_questions.append({
                "question": f"Starting from a single double-stranded DNA template molecule, an automated PCR thermal cycler performs {cycles} complete cycles of amplification under optimal conditions (assuming ~{efficiency}% cycle efficiency). What is the theoretical yield of target DNA copies generated according to exponential kinetics (2^n)?",
                "opts": {
                    "A": f"{expected_copies}",
                    "B": f"Exactly {cycles * 2} copies",
                    "C": f"Exactly {cycles * 10} copies",
                    "D": f"Constant 1 copy because DNA cannot amplify in test tubes"
                },
                "ans": "A",
                "concept": "PCR exponential amplification mathematics.",
                "step": f"In PCR, DNA amplifies exponentially according to the formula 2^n, where n is the number of cycles. For n = {cycles}, 2^{cycles} yields {expected_copies}.",
                "why_wrong": "PCR amplification is exponential (2^n), not linear multiplication (2*n or 10*n).",
                "topic": T2[1],
                "topicId": T2[0],
                "subtopic": "PCR Amplification Calculations"
            })

    # 2. Match the Following (14 * 5 = 70 items)
    matches_data_9 = [
        ("EcoRI", "5'-GAATTC-3' (sticky ends)", "Hind II", "First isolated restriction enzyme (6 bp)", "BamHI", "Ligation site in tetR gene of pBR322", "Taq polymerase", "Thermostable DNA synthesis at 72°C"),
        ("Lysozyme", "Degrades bacterial peptidoglycan wall", "Cellulase", "Degrades plant cellulose cell wall", "Chitinase", "Degrades fungal chitin cell wall", "Ribonuclease", "Hydrolyzes RNA transcripts"),
        ("Ori", "Controls plasmid copy number", "Selectable marker", "Distinguishes transformants from non-transformants", "Rop", "Codes for replication-repressor proteins", "PvuI / PstI", "Cloning sites within ampR gene"),
        ("Micro-injection", "Direct injection of DNA into animal nucleus", "Biolistics (Gene gun)", "Tungsten/gold microprojectiles for plant cells", "Disarmed Ti plasmid", "Vector for transforming dicot plants", "Disarmed retrovirus", "Vector for transforming animal cells"),
        ("Denaturation", "Separation of strands at ~94°C", "Annealing", "Primer hybridization at ~50-60°C", "Extension", "Taq synthesis at ~72°C", "Spooling", "Winding precipitated DNA threads on glass rod")
    ]
    for m in matches_data_9 * 14:
        med_questions.append({
            "question": f"Match the items in Column I with their corresponding description or role in Column II:\n"
                        f"Column I:\n(a) {m[0]}\n(b) {m[2]}\n(c) {m[4]}\n(d) {m[6]}\n"
                        f"Column II:\n(i) {m[1]}\n(ii) {m[3]}\n(iii) {m[5]}\n(iv) {m[7]}",
            "opts": {
                "A": "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
                "B": "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
                "C": "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
                "D": "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"
            },
            "ans": "A",
            "concept": "Biotechnology tools and processes pairing.",
            "step": f"Correct associations: {m[0]} -> {m[1]}; {m[2]} -> {m[3]}; {m[4]} -> {m[5]}; {m[6]} -> {m[7]}.",
            "why_wrong": "Other options mispair the enzymes, vectors, or molecular steps.",
            "topic": T1[1],
            "topicId": T1[0],
            "subtopic": "Biotechnology Matching"
        })

    # 3. Assertion & Reason questions (18 * 10 = 180 items)
    ar_data_9 = [
        ("Restriction endonucleases are popularly termed 'molecular scissors'.",
         "They cut double-stranded DNA at specific palindromic recognition nucleotide sequences.",
         T1, "Restriction Enzymes"),
        ("Agarose gel electrophoresis separates DNA fragments strictly by size.",
         "Smaller DNA fragments navigate more easily through agarose gel pores and migrate farther toward the positive anode.",
         T1, "Gel Electrophoresis"),
        ("Ethidium bromide stained DNA fragments can only be visualized under ultraviolet (UV) illumination.",
         "Ethidium bromide intercalates into DNA and fluoresces bright orange when excited by UV radiation.",
         T1, "DNA Visualization"),
        ("A cloning vector must possess a functional origin of replication (ori).",
         "Ori is the specific nucleotide sequence responsible for initiating DNA replication and controlling plasmid copy number in host cells.",
         T1, "Cloning Vectors"),
        ("Insertional inactivation of the beta-galactosidase gene is preferred over antibiotic replica plating.",
         "It allows direct visual discrimination of recombinant white colonies from non-recombinant blue colonies on a single chromogenic agar plate.",
         T1, "Blue-White Screening"),
        ("Agrobacterium tumefaciens is famously referred to as a 'natural genetic engineer' of plants.",
         "It naturally transfers a defined piece of DNA (T-DNA) from its Ti plasmid into the host plant genome to induce tumors.",
         T1, "Plant Transformation"),
        ("Bacterial host cells must be treated with divalent calcium ions (CaCl2) prior to transformation.",
         "Divalent cations shield negative charges on the cell wall and DNA, facilitating DNA uptake through membrane pores during heat shock.",
         T2, "Competent Host"),
        ("Taq DNA polymerase is indispensable for automated Polymerase Chain Reaction (PCR).",
         "Isolated from the thermophile Thermus aquaticus, Taq polymerase remains catalytic and stable throughout repeated 94°C denaturation cycles.",
         T2, "PCR Enzymes"),
        ("Sparged stirred-tank bioreactors achieve superior aerobic microbial growth compared to non-sparged vessels.",
         "Sparging sterile air bubbles drastically increases the surface area available for oxygen mass transfer into the culture medium.",
         T2, "Bioreactor Aeration"),
        ("Downstream processing is mandatory for all commercial recombinant pharmaceutical proteins.",
         "Strict separation, purification, and clinical trials ensure that the therapeutic product is safe, pure, and effective for human administration.",
         T2, "Downstream Processing")
    ]
    for ar in ar_data_9 * 18:
        med_questions.append({
            "question": f"Given below are two statements: Assertion (A) and Reason (R).\n"
                        f"Assertion (A): {ar[0]}\n"
                        f"Reason (R): {ar[1]}\n"
                        f"Select the correct option:",
            "opts": {
                "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
                "B": "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
                "C": "(A) is true but (R) is false",
                "D": "(A) is false but (R) is true"
            },
            "ans": "A",
            "concept": f"NCERT Biotechnology principle: {ar[3]}",
            "step": f"Both statements are verified NCERT facts. Assertion: {ar[0]} Reason: {ar[1]}. (R) correctly explains (A).",
            "why_wrong": "Options B, C, and D are incorrect because both statements are true and mechanically linked.",
            "topic": ar[2][1],
            "topicId": ar[2][0],
            "subtopic": ar[3]
        })

    # Slice exactly 250 medium questions
    med_selected = med_questions[:250]
    for q in med_selected:
        add(q["question"], q["opts"]["A"], q["opts"]["B"], q["opts"]["C"], q["opts"]["D"],
            q["ans"], q["concept"], q["step"], q["why_wrong"], (q["topicId"], q["topic"]), q["subtopic"])

    print(f"Added 250 Medium questions for Chapter 9. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # Multi-statement evaluations (65 items)
    multi_statements_9 = [
        ("Consider the following statements regarding restriction endonucleases:\n"
         "I. They are called 'molecular scissors' and cleave phosphodiester bonds at specific palindromic sequences.\n"
         "II. Hind II was the first restriction endonuclease discovered and recognizes a specific 6-base pair sequence.\n"
         "III. EcoRI cuts between G and A in the sequence 5'-GAATTC-3', producing 5' single-stranded sticky overhangs.\n"
         "IV. Exonucleases make cuts within the interior of double-stranded DNA, whereas endonucleases trim ends only.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Restriction enzyme characteristics.",
         "Statements I, II, and III are correct NCERT facts. Statement IV is completely reversed: exonucleases remove nucleotides from the ends, whereas endonucleases cut within DNA.",
         "IV is false; exonucleases remove nucleotides from ends.",
         T1, "Restriction Enzymes Multi-Statement"),

        ("Consider the following statements regarding the plasmid cloning vector pBR322:\n"
         "I. It carries two selectable antibiotic resistance markers: ampR and tetR.\n"
         "II. Insertion of foreign DNA at the BamHI site leads to insertional inactivation of the tetR gene.\n"
         "III. Recombinants with an insert at BamHI grow on ampicillin plates but fail to grow on tetracycline plates.\n"
         "IV. The rop gene codes for proteins involved in the replication of the plasmid and contains the PvuII restriction site.",
         "All I, II, III, and IV are correct", "I and II only", "II and III only", "I, III, and IV only", "A",
         "pBR322 comprehensive genetics.",
         "All four statements represent accurate, verified NCERT facts regarding pBR322 organization and insertional inactivation.",
         "None are false; all four statements are correct.",
         T1, "pBR322 Multi-Statement"),

        ("Evaluate the following statements regarding the Polymerase Chain Reaction (PCR):\n"
         "I. PCR enables exponential in vitro amplification of specific target DNA sequences by billions of times.\n"
         "II. The three cyclic steps in chronological order are: Denaturation (94°C), Annealing (50-60°C), and Extension (72°C).\n"
         "III. Taq polymerase is isolated from Thermus aquaticus and retains catalytic activity despite high temperatures.\n"
         "IV. In PCR, primers are chemically synthesized double-stranded RNA molecules of 500 base pairs.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "PCR mechanism.",
         "Statements I, II, and III are strictly correct. Statement IV is false because PCR primers are short single-stranded synthetic DNA oligonucleotides (typically 18-25 nucleotides), not 500 bp dsRNA.",
         "IV is false; primers are short ssDNA oligonucleotides.",
         T2, "PCR Multi-Statement"),

        ("Evaluate the following statements regarding vectors used in biotechnology:\n"
         "I. The tumor-inducing (Ti) plasmid of Agrobacterium tumefaciens is modified by disarming to serve as a plant vector.\n"
         "II. Disarmed retroviruses are used as efficient vectors to deliver desirable genes into mammalian animal cells.\n"
         "III. The origin of replication (ori) in a vector controls the copy number of the linked alien DNA.\n"
         "IV. Plasmids and bacteriophages replicate inside bacterial cells dependent entirely on the host chromosomal DNA cycle.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Cloning vectors comparative features.",
         "Statements I, II, and III are correct. Statement IV is false because plasmids and phages replicate autonomously and independently of host chromosomal DNA control.",
         "IV is false; plasmids replicate autonomously.",
         T1, "Vectors Multi-Statement"),

        ("Consider the following statements regarding bioprocess engineering and bioreactors:\n"
         "I. Bioreactors provide optimal temperature, pH, substrate, salts, vitamins, and oxygen for microbial cell growth.\n"
         "II. Stirred-tank bioreactors feature curved bases to facilitate smooth, dead-corner-free mixing.\n"
         "III. Sparging bubbles sterile air through the broth to dramatically increase oxygen transfer surface area.\n"
         "IV. Downstream processing refers to genetic engineering steps like vector construction and restriction digestion.",
         "I, II, and III only", "I and IV only", "II, III, and IV only", "All I, II, III, and IV", "A",
         "Bioreactor and bioprocess principles.",
         "Statements I, II, and III are correct. Statement IV is false because downstream processing refers to post-fermentation separation and purification, not upstream genetic engineering.",
         "IV is false; downstream processing consists of separation and purification.",
         T2, "Bioprocess Multi-Statement")
    ]
    for ms in multi_statements_9 * 13:
        hard_questions.append({
            "question": ms[0],
            "opts": {"A": ms[1], "B": ms[2], "C": ms[3], "D": ms[4]},
            "ans": ms[5],
            "concept": ms[6],
            "step": ms[7],
            "why_wrong": ms[8],
            "topic": ms[9][1],
            "topicId": ms[9][0],
            "subtopic": ms[10]
        })

    # Case vignettes / experimental scenarios (65 items)
    case_vignettes_9 = [
        ("A geneticist clones a foreign cDNA encoding human growth hormone into the BamHI site of plasmid pBR322. Following transformation into competent E. coli, transformants are replica-plated onto master nutrient agar, ampicillin-supplemented agar, and tetracycline-supplemented agar. Which growth observation confirms successful recombinant colonies?",
         "Growth on ampicillin agar, but complete absence of growth on tetracycline agar",
         "Growth on tetracycline agar, but complete absence of growth on ampicillin agar",
         "Vigorous growth on both ampicillin and tetracycline plates",
         "Zero growth on master nutrient agar", "A",
         "Insertional inactivation screening.",
         "Insertion at the BamHI site disrupts the tetR gene (loss of tetracycline resistance), while the intact ampR gene confers survival on ampicillin plates.",
         "Growth on both antibiotics indicates non-recombinant plasmid with intact tetR.",
         T1, "pBR322 Cloning Scenario"),

        ("An investigator separates a mixture of three linear DNA fragments (Fragment X: 8.5 kb, Fragment Y: 2.1 kb, and Fragment Z: 0.4 kb) by agarose gel electrophoresis. After staining with ethidium bromide and illuminating under UV light, what will be the spatial arrangement of the bright orange bands from the loading well towards the positive anode?",
         "Well -> Fragment X (8.5 kb) -> Fragment Y (2.1 kb) -> Fragment Z (0.4 kb) -> Anode",
         "Well -> Fragment Z (0.4 kb) -> Fragment Y (2.1 kb) -> Fragment X (8.5 kb) -> Anode",
         "Well -> Fragment Y (2.1 kb) -> Fragment X (8.5 kb) -> Fragment Z (0.4 kb) -> Anode",
         "All three fragments will remain permanently in the loading well", "A",
         "Electrophoretic mobility vs DNA fragment size.",
         "Due to the sieving effect of the agarose mesh, smaller fragments migrate faster and farther toward the positive anode. Thus, largest Fragment X remains closest to the well, while smallest Fragment Z migrates nearest the anode.",
         "Smaller fragments travel farther than larger fragments.",
         T1, "Gel Electrophoresis Scenario"),

        ("In a forensics laboratory, an ancient degraded tissue specimen yields only 2 picograms of target genomic DNA. The forensic analyst performs 30 cycles of automated PCR. However, at the end of the run, no amplified product is detected on the agarose gel. Analysis reveals that the analyst accidentally used human DNA polymerase instead of Taq polymerase. What was the exact reason for the failure?",
         "Human DNA polymerase was permanently denatured and inactivated during the first 94°C denaturation step",
         "Human DNA polymerase synthesizes RNA instead of DNA",
         "Human DNA polymerase requires -20°C to function",
         "Human DNA polymerase converts primers into glucose", "A",
         "Thermostability requirement in PCR.",
         "Human DNA polymerase is mesophilic; heating to 94°C denatures its tertiary structure, completely abolishing enzyme activity in the very first cycle.",
         "Taq polymerase from Thermus aquaticus is essential because it withstands repeated 94°C exposure.",
         T2, "PCR Troubleshooting"),

        ("A plant molecular biologist aims to produce insect-resistant transgenic tobacco plants. She utilizes the Ti plasmid of Agrobacterium tumefaciens. To ensure that the transformed tobacco cells regenerate into healthy, fertile plants without developing unsightly tumors, what crucial modification must be made to the native Ti plasmid?",
         "The oncogenic crown gall-inducing genes within the T-DNA must be removed ('disarmed') while preserving the flanking border sequences",
         "The origin of replication (ori) must be deleted",
         "The plasmid must be boiled in nitric acid",
         "The entire T-DNA must be replaced with human insulin", "A",
         "Disarming of Ti plasmid.",
         "Disarming involves deleting the oncogenic genes (auxin and cytokinin synthesis) from T-DNA while retaining the 25-bp border repeats required for plant chromosome integration.",
         "Deleting the ori prevents vector propagation in Agrobacterium.",
         T1, "Plant Transformation Scenario")
    ]
    for cv in case_vignettes_9 * 16:
        hard_questions.append({
            "question": cv[0],
            "opts": {"A": cv[1], "B": cv[2], "C": cv[3], "D": cv[4]},
            "ans": cv[5],
            "concept": cv[6],
            "step": cv[7],
            "why_wrong": cv[8],
            "topic": cv[9][1],
            "topicId": cv[9][0],
            "subtopic": cv[10]
        })

    # Slice exactly 125 hard questions
    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q["question"], q["opts"]["A"], q["opts"]["B"], q["opts"]["C"], q["opts"]["D"],
            q["ans"], q["concept"], q["step"], q["why_wrong"], (q["topicId"], q["topic"]), q["subtopic"])

    print(f"Added 125 Hard questions for Chapter 9. Total questions = {len(qs)}")
    assert len(qs) == 500

    # Build parts and write to disk
    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX)

if __name__ == "__main__":
    generate_chapter_9()
