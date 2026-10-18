# Cell Part 1: Q1 to Q125 (Easy)
import json

def get_part1_raw():
    return [
    {
        "q_num": 1,
        "q": "Who first saw and described a live cell under a microscope?",
        "opts": {
            "A": "Anton von Leeuwenhoek",
            "B": "Robert Brown",
            "C": "Robert Hooke",
            "D": "Rudolf Virchow"
        },
        "ans": "A",
        "exp": "Anton von Leeuwenhoek first saw and described a live cell. Robert Brown later discovered the nucleus, while Robert Hooke observed dead cork cells.",
        "topic": "prokaryote",
        "sub": "Discovery & Cell Theory",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 2,
        "q": "The nucleus within a living cell was first discovered and reported by:",
        "opts": {
            "A": "Robert Brown",
            "B": "Camillo Golgi",
            "C": "Robert Hooke",
            "D": "Theodor Schwann"
        },
        "ans": "A",
        "exp": "Robert Brown in 1831 discovered the nucleus in orchid root cells.",
        "topic": "nucleus",
        "sub": "Discovery of Nucleus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 3,
        "q": "Matthias Schleiden, who contributed to the formulation of cell theory in 1838, was a:",
        "opts": {
            "A": "German botanist",
            "B": "British zoologist",
            "C": "French cytologist",
            "D": "Dutch microscopist"
        },
        "ans": "A",
        "exp": "Matthias Schleiden was a German botanist who examined a large number of plants and observed that all plants are composed of different kinds of cells.",
        "topic": "prokaryote",
        "sub": "Cell Theory",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 4,
        "q": "Theodor Schwann, who studied both animal and plant tissues in 1839, was a:",
        "opts": {
            "A": "British zoologist",
            "B": "German botanist",
            "C": "Austrian geneticist",
            "D": "Swedish taxonomist"
        },
        "ans": "A",
        "exp": "Theodor Schwann was a British zoologist who reported that animal cells had a thin outer layer (now known as plasma membrane) and that cell wall is a unique feature of plant cells.",
        "topic": "prokaryote",
        "sub": "Cell Theory",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 5,
        "q": "Who gave the final shape to the Cell Theory by explaining that cells divide and new cells are formed from pre-existing cells ('Omnis cellula-e cellula')?",
        "opts": {
            "A": "Rudolf Virchow",
            "B": "Louis Pasteur",
            "C": "Robert Brown",
            "D": "Theodor Schwann"
        },
        "ans": "A",
        "exp": "Rudolf Virchow (1855) first explained that cells divided and new cells are formed from pre-existing cells (Omnis cellula-e cellula), modifying Schleiden and Schwann's hypothesis.",
        "topic": "prokaryote",
        "sub": "Cell Theory",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 6,
        "q": "Which of the following statements is an exception to the classical Cell Theory?",
        "opts": {
            "A": "Viruses lack a cellular organization",
            "B": "Bacteria lack membrane-bound organelles",
            "C": "Plant cells possess cell walls",
            "D": "Fungi possess chitinous walls"
        },
        "ans": "A",
        "exp": "Viruses are non-cellular, nucleoprotein entities that lack cellular organization and metabolic machinery, making them classic exceptions to cell theory.",
        "topic": "prokaryote",
        "sub": "Cell Theory",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 7,
        "q": "Which organism is known to be the smallest living cell, capable of surviving without oxygen?",
        "opts": {
            "A": "Mycoplasma",
            "B": "Bacillus",
            "C": "Nostoc",
            "D": "Chlamydomonas"
        },
        "ans": "A",
        "exp": "Mycoplasmas are the smallest known living cells (about 0.3 \u00b5m in length), lack a cell wall, and can survive without oxygen.",
        "topic": "prokaryote",
        "sub": "Cell Size and Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 8,
        "q": "What is the typical length of a Mycoplasma cell according to NCERT?",
        "opts": {
            "A": "0.3 \u00b5m",
            "B": "3.0 \u00b5m",
            "C": "10 to 20 \u00b5m",
            "D": "0.02 \u00b5m"
        },
        "ans": "A",
        "exp": "Mycoplasmas are only about 0.3 \u00b5m in length, whereas typical bacteria are 3 to 5 \u00b5m.",
        "topic": "prokaryote",
        "sub": "Cell Size and Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 9,
        "q": "What is the typical diameter of human red blood cells (RBCs)?",
        "opts": {
            "A": "About 7.0 \u00b5m",
            "B": "About 2.0 \u00b5m",
            "C": "About 15.0 \u00b5m",
            "D": "About 0.1 \u00b5m"
        },
        "ans": "A",
        "exp": "Human red blood cells are round and biconcave with a diameter of about 7.0 \u00b5m.",
        "topic": "organelles",
        "sub": "Cell Size and Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 10,
        "q": "Which of the following represents the largest isolated single cell?",
        "opts": {
            "A": "Egg of an ostrich",
            "B": "Human ovum",
            "C": "Amoeba proteus",
            "D": "Acetabularia"
        },
        "ans": "A",
        "exp": "The egg of an ostrich represents the largest isolated single cell in the biological world.",
        "topic": "organelles",
        "sub": "Cell Size and Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 11,
        "q": "Which human cells are among the longest cells in the human body?",
        "opts": {
            "A": "Nerve cells (neurons)",
            "B": "Red blood cells",
            "C": "Tracheids",
            "D": "Epithelial columnar cells"
        },
        "ans": "A",
        "exp": "Nerve cells are branched and among the longest cells in the human body, conducting electrical impulses across distances.",
        "topic": "organelles",
        "sub": "Cell Size and Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 12,
        "q": "The main arena of various cellular activities that keeps the cell in a 'living state' is the:",
        "opts": {
            "A": "Cytoplasm",
            "B": "Nucleolus",
            "C": "Vacuole",
            "D": "Centrosome"
        },
        "ans": "A",
        "exp": "The cytoplasm is the main arena of cellular activities in both plant and animal cells. Various chemical reactions occur in it to keep the cell in the living state.",
        "topic": "organelles",
        "sub": "Overview of Cell",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 13,
        "q": "Which of the following structures is found in both prokaryotic and eukaryotic cells?",
        "opts": {
            "A": "Ribosome",
            "B": "Endoplasmic reticulum",
            "C": "Mitochondrion",
            "D": "Nuclear envelope"
        },
        "ans": "A",
        "exp": "Ribosomes are non-membrane bound organelles found in all cells, both eukaryotic as well as prokaryotic.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 14,
        "q": "Besides the cytoplasm, ribosomes in eukaryotic cells are also located inside:",
        "opts": {
            "A": "Chloroplasts and mitochondria",
            "B": "Golgi apparatus and lysosomes",
            "C": "Vacuoles and nucleolus",
            "D": "Peroxisomes and glyoxysomes"
        },
        "ans": "A",
        "exp": "Within eukaryotic cells, ribosomes are found not only in the cytoplasm but also within chloroplasts (in plants) and mitochondria, as well as on rough ER.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 15,
        "q": "Non-membrane bound organelles found exclusively in animal cells that help in cell division are:",
        "opts": {
            "A": "Centrioles",
            "B": "Ribosomes",
            "C": "Peroxisomes",
            "D": "Nucleoli"
        },
        "ans": "A",
        "exp": "Animal cells contain another non-membrane bound organelle called centrosome/centriole which helps in cell division (spindle apparatus formation).",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 16,
        "q": "What is the shape of human red blood cells?",
        "opts": {
            "A": "Round and biconcave",
            "B": "Amoeboid",
            "C": "Elongated and spindle-shaped",
            "D": "Long and branched"
        },
        "ans": "A",
        "exp": "Human RBCs are round and biconcave, providing maximal surface area for oxygen and carbon dioxide exchange and smooth flow through narrow capillaries.",
        "topic": "organelles",
        "sub": "Cell Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 17,
        "q": "What is the characteristic shape of tracheids in plants?",
        "opts": {
            "A": "Elongated",
            "B": "Round and oval",
            "C": "Biconcave",
            "D": "Branched"
        },
        "ans": "A",
        "exp": "Tracheids are elongated cells with tapering ends and thick lignified secondary walls, adapted for water conduction and mechanical support.",
        "topic": "organelles",
        "sub": "Cell Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 18,
        "q": "Which cells show amoeboid movement and constantly change their shape?",
        "opts": {
            "A": "White blood cells (WBCs)",
            "B": "Red blood cells (RBCs)",
            "C": "Mesophyll cells",
            "D": "Columnar epithelial cells"
        },
        "ans": "A",
        "exp": "White blood cells (leukocytes) exhibit amoeboid shape changes and movement to squeeze through capillary walls (diapedesis) and engulf pathogens.",
        "topic": "organelles",
        "sub": "Cell Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 19,
        "q": "Mesophyll cells in plant leaves are typically:",
        "opts": {
            "A": "Round and oval",
            "B": "Long and narrow",
            "C": "Branched and filamentous",
            "D": "Flat and squamous"
        },
        "ans": "A",
        "exp": "According to NCERT, mesophyll cells in plant leaves are typically round and oval, packed with chloroplasts for photosynthesis.",
        "topic": "organelles",
        "sub": "Cell Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 20,
        "q": "Columnar epithelial cells are described as being:",
        "opts": {
            "A": "Long and narrow",
            "B": "Round and biconcave",
            "C": "Amoeboid",
            "D": "Cuboidal and branched"
        },
        "ans": "A",
        "exp": "Columnar epithelial cells are tall, long, and narrow, often bearing microvilli or cilia at their apical surfaces.",
        "topic": "organelles",
        "sub": "Cell Diversity",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 21,
        "q": "Which of the following are prokaryotic organisms?",
        "opts": {
            "A": "Bacteria, blue-green algae, mycoplasma, and PPLO",
            "B": "Yeast, amoeba, and paramecium",
            "C": "Algae, bryophytes, and pteridophytes",
            "D": "Diatoms, dinoflagellates, and euglenoids"
        },
        "ans": "A",
        "exp": "Prokaryotes are represented by bacteria, blue-green algae (cyanobacteria), mycoplasma, and PPLO (Pleuro Pneumonia Like Organisms).",
        "topic": "prokaryote",
        "sub": "Prokaryotic Cells",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 22,
        "q": "What does PPLO stand for in cell biology?",
        "opts": {
            "A": "Pleuro Pneumonia Like Organisms",
            "B": "Poly Phosphate Living Organisms",
            "C": "Primary Photosynthetic Leaf Organisms",
            "D": "Pseudopodial Protozoan Living Organisms"
        },
        "ans": "A",
        "exp": "PPLO stands for Pleuro Pneumonia Like Organisms, which are tiny mycoplasma-like prokaryotic organisms.",
        "topic": "prokaryote",
        "sub": "Prokaryotic Cells",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 23,
        "q": "What is the typical size range of PPLO?",
        "opts": {
            "A": "About 0.1 \u00b5m",
            "B": "About 10 to 20 \u00b5m",
            "C": "About 1 to 2 mm",
            "D": "About 5.0 \u00b5m"
        },
        "ans": "A",
        "exp": "PPLO have a size of about 0.1 \u00b5m, while typical bacteria range from 1 to 2 \u00b5m (or 3 to 5 \u00b5m).",
        "topic": "prokaryote",
        "sub": "Prokaryotic Cells",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 24,
        "q": "A fundamental characteristic that distinguishes prokaryotes from eukaryotes is the absence of:",
        "opts": {
            "A": "A membrane-bound nucleus and organelles",
            "B": "A plasma membrane",
            "C": "Genetic material (DNA)",
            "D": "Ribosomes"
        },
        "ans": "A",
        "exp": "Prokaryotes lack a well-defined membrane-bound nucleus and membrane-bound organelles. Their genetic material lies naked in the cytoplasm.",
        "topic": "prokaryote",
        "sub": "Prokaryotic Cells",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 25,
        "q": "The genetic material of a prokaryote is not enveloped by a nuclear membrane and is referred to as a:",
        "opts": {
            "A": "Genophore or nucleoid",
            "B": "Nucleosome",
            "C": "Chromonema",
            "D": "Karyotheca"
        },
        "ans": "A",
        "exp": "The naked, double-stranded circular DNA of prokaryotes is called a nucleoid, genophore, or prochromosome.",
        "topic": "prokaryote",
        "sub": "Prokaryotic Cells",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 26,
        "q": "Small circular DNA molecules found outside the genomic DNA in many bacteria are called:",
        "opts": {
            "A": "Plasmids",
            "B": "Mesosomes",
            "C": "Centrosomes",
            "D": "Polysomes"
        },
        "ans": "A",
        "exp": "In addition to the genomic DNA, many bacteria have small circular self-replicating double-stranded DNA molecules outside called plasmids.",
        "topic": "prokaryote",
        "sub": "Plasmids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 27,
        "q": "Which unique phenotype is commonly conferred upon bacteria by plasmid DNA?",
        "opts": {
            "A": "Resistance to antibiotics",
            "B": "Ability to undergo meiosis",
            "C": "Formation of 80S ribosomes",
            "D": "Synthesis of cellulosic cell wall"
        },
        "ans": "A",
        "exp": "One of the unique phenotypic characters conferred by plasmid DNA is resistance to specific antibiotics.",
        "topic": "prokaryote",
        "sub": "Plasmids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 28,
        "q": "Plasmid DNA is extensively utilized in biotechnology as a:",
        "opts": {
            "A": "Cloning vector to transfer foreign DNA",
            "B": "Nutrient source for bacteria",
            "C": "Staining agent for microscopy",
            "D": "Substitute for bacterial ribosomes"
        },
        "ans": "A",
        "exp": "Plasmid DNA is used as a cloning vector to monitor bacterial transformation with foreign DNA in genetic engineering.",
        "topic": "prokaryote",
        "sub": "Plasmids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 29,
        "q": "The specialized membranous infoldings of the plasma membrane characteristic of prokaryotes are called:",
        "opts": {
            "A": "Mesosomes",
            "B": "Thylakoids",
            "C": "Cristae",
            "D": "Dictyosomes"
        },
        "ans": "A",
        "exp": "Mesosomes are specialized differentiated infoldings of the plasma membrane that are characteristic of prokaryotes.",
        "topic": "prokaryote",
        "sub": "Mesosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 30,
        "q": "Mesosomes in bacteria can form in the shape of:",
        "opts": {
            "A": "Vesicles, tubules, and lamellae",
            "B": "Cilia, flagella, and pili",
            "C": "Capsules, slime layers, and sheaths",
            "D": "Grana, stroma, and cristae"
        },
        "ans": "A",
        "exp": "Mesosome extensions in bacteria can be in the form of vesicles, tubules, and lamellae.",
        "topic": "prokaryote",
        "sub": "Mesosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 31,
        "q": "Which of the following functions is performed by bacterial mesosomes?",
        "opts": {
            "A": "Cell wall formation, DNA replication, and respiration",
            "B": "Spindle fiber formation and cytokinesis",
            "C": "Active transport of proteins into chloroplasts",
            "D": "Steroid hormone synthesis"
        },
        "ans": "A",
        "exp": "Mesosomes help in cell wall formation, DNA replication and distribution to daughter cells, respiration, secretion processes, and increasing enzymatic surface area.",
        "topic": "prokaryote",
        "sub": "Mesosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 32,
        "q": "In cyanobacteria, other membranous extensions containing photosynthetic pigments extending into the cytoplasm are termed:",
        "opts": {
            "A": "Chromatophores",
            "B": "Heterocysts",
            "C": "Chloroplasts",
            "D": "Chromoplasts"
        },
        "ans": "A",
        "exp": "In cyanobacteria (blue-green algae), there are membranous extensions into the cytoplasm called chromatophores which contain photosynthetic pigments.",
        "topic": "prokaryote",
        "sub": "Chromatophores",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 33,
        "q": "A specialized structure of bacteria consisting of a tightly bound, thick 3-layered cell envelope comprises (from outermost to innermost):",
        "opts": {
            "A": "Glycocalyx, cell wall, and plasma membrane",
            "B": "Cell wall, glycocalyx, and plasma membrane",
            "C": "Plasma membrane, cell wall, and glycocalyx",
            "D": "Glycocalyx, plasma membrane, and cell wall"
        },
        "ans": "A",
        "exp": "Most prokaryotic cells have a chemically complex cell envelope consisting of a tightly bound three-layered structure: outermost glycocalyx, followed by cell wall, and then plasma membrane.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 34,
        "q": "A loose sheath of glycocalyx in bacteria is called a:",
        "opts": {
            "A": "Slime layer",
            "B": "Capsule",
            "C": "Pellicle",
            "D": "Cuticle"
        },
        "ans": "A",
        "exp": "Glycocalyx differs in composition and thickness among different bacteria; it could be a loose sheath called the slime layer, or thick and tough called a capsule.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 35,
        "q": "When the glycocalyx of a bacterium is thick and tough, it is referred to as a:",
        "opts": {
            "A": "Capsule",
            "B": "Slime layer",
            "C": "Basal plate",
            "D": "Mesosome"
        },
        "ans": "A",
        "exp": "A thick, tough, and protective glycocalyx is termed a capsule, which protects pathogenic bacteria against host phagocytosis.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 36,
        "q": "Gram-positive and Gram-negative bacteria are differentiated based on differences in their:",
        "opts": {
            "A": "Cell envelope and response to Gram stain",
            "B": "Nuclear membrane composition",
            "C": "Mitochondrial cristae arrangement",
            "D": "Presence of 80S vs 70S ribosomes"
        },
        "ans": "A",
        "exp": "Bacteria are classified into Gram-positive and Gram-negative based on the differences in their cell envelopes and their response to the Gram staining procedure developed by Christian Gram.",
        "topic": "prokaryote",
        "sub": "Gram Staining",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 37,
        "q": "The bacterial cell wall provides structural support and prevents the bacterium from:",
        "opts": {
            "A": "Bursting or collapsing",
            "B": "Undergoing binary fission",
            "C": "Absorbing water and salts",
            "D": "Translating mRNA on ribosomes"
        },
        "ans": "A",
        "exp": "The cell wall determines the shape of the cell and provides strong structural support to prevent the bacterium from bursting or collapsing in hypotonic environments.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 38,
        "q": "The plasma membrane of prokaryotes is structurally similar to that of eukaryotes because it is:",
        "opts": {
            "A": "Selectively permeable and composed of a lipid-protein bilayer",
            "B": "Composed entirely of peptidoglycan",
            "C": "Freely permeable to all macromolecules",
            "D": "Lacking all membrane proteins"
        },
        "ans": "A",
        "exp": "The plasma membrane is selectively permeable in both prokaryotes and eukaryotes, composed primarily of a lipid bilayer with embedded proteins.",
        "topic": "prokaryote",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 39,
        "q": "Bacterial flagella are composed of three parts:",
        "opts": {
            "A": "Filament, hook, and basal body",
            "B": "Head, neck, and tail",
            "C": "Shaft, spoke, and central sheath",
            "D": "Axoneme, doublet, and arm"
        },
        "ans": "A",
        "exp": "Bacterial flagellum consists of three parts: filament, hook, and basal body. The filament is the longest portion and extends from the cell surface to the outside.",
        "topic": "prokaryote",
        "sub": "Motility",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 40,
        "q": "Which part of the bacterial flagellum extends from the cell surface to the exterior and is the longest portion?",
        "opts": {
            "A": "Filament",
            "B": "Hook",
            "C": "Basal body",
            "D": "Pilus"
        },
        "ans": "A",
        "exp": "The filament is the longest portion of the bacterial flagellum and extends from the cell surface to the exterior.",
        "topic": "prokaryote",
        "sub": "Motility",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 41,
        "q": "The protein subunit that polymerizes to form the bacterial flagellar filament is:",
        "opts": {
            "A": "Flagellin",
            "B": "Tubulin",
            "C": "Actin",
            "D": "Pilin"
        },
        "ans": "A",
        "exp": "Bacterial flagella are made of the globular protein flagellin, unlike eukaryotic flagella which are made of tubulin in a 9+2 arrangement.",
        "topic": "prokaryote",
        "sub": "Motility",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 42,
        "q": "Elongated tubular structures made of a special protein that do NOT play a role in bacterial motility are:",
        "opts": {
            "A": "Pili",
            "B": "Flagella",
            "C": "Cilia",
            "D": "Axonemes"
        },
        "ans": "A",
        "exp": "Pili are elongated tubular structures made of a special protein (pilin) that do not play a role in motility but facilitate conjugation.",
        "topic": "prokaryote",
        "sub": "Surface Structures",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 43,
        "q": "Small bristle-like fibers sprouting out of the bacterial cell that help attach bacteria to rocks in streams or host tissues are:",
        "opts": {
            "A": "Fimbriae",
            "B": "Pili",
            "C": "Flagella",
            "D": "Cilia"
        },
        "ans": "A",
        "exp": "Fimbriae are small bristle-like fibers sprouting out of the bacterial cell that are known to help attach bacteria to rocks in streams and to host tissues.",
        "topic": "prokaryote",
        "sub": "Surface Structures",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 44,
        "q": "What is the sedimentation coefficient of ribosomes found in the cytoplasm of prokaryotes?",
        "opts": {
            "A": "70S",
            "B": "80S",
            "C": "60S",
            "D": "40S"
        },
        "ans": "A",
        "exp": "Prokaryotic ribosomes are 70S particles, consisting of two subunits: 50S (large) and 30S (small).",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 45,
        "q": "The two subunits that assemble to form a 70S prokaryotic ribosome are:",
        "opts": {
            "A": "50S and 30S",
            "B": "60S and 40S",
            "C": "50S and 40S",
            "D": "60S and 30S"
        },
        "ans": "A",
        "exp": "A 70S ribosome consists of a large 50S subunit and a small 30S subunit.",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 46,
        "q": "What does the letter 'S' stand for in 70S and 80S ribosomes?",
        "opts": {
            "A": "Svedberg unit (sedimentation coefficient)",
            "B": "Schleiden constant",
            "C": "Schwann coefficient",
            "D": "Solubility index"
        },
        "ans": "A",
        "exp": "'S' stands for Svedberg unit, which is a measure of sedimentation coefficient indirectly related to density and size.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 47,
        "q": "Several ribosomes attaching to a single strand of mRNA form a chain-like structure known as a:",
        "opts": {
            "A": "Polyribosome or polysome",
            "B": "Centrosome",
            "C": "Dictyosome",
            "D": "Mesosome"
        },
        "ans": "A",
        "exp": "Several ribosomes may attach to a single mRNA and form a chain called polyribosomes or polysomes, translating mRNA into proteins simultaneously.",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 48,
        "q": "What is the primary function of ribosomes in all cells?",
        "opts": {
            "A": "Protein synthesis",
            "B": "Lipid synthesis",
            "C": "Carbohydrate digestion",
            "D": "ATP production"
        },
        "ans": "A",
        "exp": "Ribosomes are the universal cellular machinery responsible for translating genetic information into polypeptide chains (protein synthesis).",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 49,
        "q": "Reserve materials in prokaryotic cells are stored in the cytoplasm in the form of:",
        "opts": {
            "A": "Inclusion bodies",
            "B": "Lysosomes",
            "C": "Vacuoles",
            "D": "Peroxisomes"
        },
        "ans": "A",
        "exp": "Reserve material in prokaryotic cells are stored in the cytoplasm in the form of inclusion bodies, which lie free in the cytoplasm without a membrane.",
        "topic": "prokaryote",
        "sub": "Inclusion Bodies",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 50,
        "q": "Which of the following is true regarding prokaryotic inclusion bodies?",
        "opts": {
            "A": "They are not bound by any membrane and lie free in the cytoplasm",
            "B": "They are bounded by a double unit membrane",
            "C": "They contain hydrolytic enzymes active at acidic pH",
            "D": "They are involved in cellular division"
        },
        "ans": "A",
        "exp": "Inclusion bodies in prokaryotes are not bound by any membrane system and lie free in the cytoplasm (e.g., phosphate granules, cyanophycean granules, glycogen granules).",
        "topic": "prokaryote",
        "sub": "Inclusion Bodies",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 51,
        "q": "Which of the following is NOT an inclusion body found in prokaryotic cells?",
        "opts": {
            "A": "Lysosome",
            "B": "Phosphate granule",
            "C": "Cyanophycean granule",
            "D": "Glycogen granule"
        },
        "ans": "A",
        "exp": "Lysosomes are membrane-bound organelles found in eukaryotic cells, whereas phosphate, cyanophycean, and glycogen granules are non-membrane bound prokaryotic inclusion bodies.",
        "topic": "prokaryote",
        "sub": "Inclusion Bodies",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 52,
        "q": "Gas vacuoles that provide buoyancy are characteristically found in:",
        "opts": {
            "A": "Blue-green, purple and green photosynthetic bacteria",
            "B": "All fungi and protozoans",
            "C": "Higher angiosperms and gymnosperms",
            "D": "Mammalian erythrocytes"
        },
        "ans": "A",
        "exp": "Gas vacuoles are found in blue-green and purple and green photosynthetic bacteria, providing buoyancy in aquatic habitats.",
        "topic": "prokaryote",
        "sub": "Inclusion Bodies",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 53,
        "q": "What type of genetic material is typically present in prokaryotic cells?",
        "opts": {
            "A": "Single, circular double-stranded DNA naked without histones",
            "B": "Linear double-stranded DNA bound to histone octamers",
            "C": "Single-stranded circular RNA only",
            "D": "Segmented linear single-stranded DNA"
        },
        "ans": "A",
        "exp": "Prokaryotes typically possess a single, circular double-stranded DNA molecule that lacks histone proteins (naked DNA).",
        "topic": "prokaryote",
        "sub": "Prokaryotic Genome",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 54,
        "q": "Which component is absent from plant cell walls?",
        "opts": {
            "A": "Chitin",
            "B": "Cellulose",
            "C": "Hemicellulose",
            "D": "Pectin"
        },
        "ans": "A",
        "exp": "Chitin forms the cell walls of fungi and exoskeleton of arthropods; plant cell walls are made of cellulose, hemicellulose, pectins, and proteins.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 55,
        "q": "Algal cell walls are characteristically made of:",
        "opts": {
            "A": "Cellulose, galactans, mannans, and calcium carbonate",
            "B": "Cellulose, hemicellulose, and chitin",
            "C": "Peptidoglycan and teichoic acid",
            "D": "Sterols and glycogen"
        },
        "ans": "A",
        "exp": "According to NCERT, algae have a cell wall made of cellulose, galactans, mannans, and minerals like calcium carbonate.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 56,
        "q": "The middle lamella that cements neighboring plant cells together is mainly composed of:",
        "opts": {
            "A": "Calcium pectate",
            "B": "Cellulose microfibrils",
            "C": "Lignin and suberin",
            "D": "Phospholipids"
        },
        "ans": "A",
        "exp": "The middle lamella is a layer mainly composed of calcium pectate which holds or glues the different neighbouring plant cells together.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 57,
        "q": "Cytoplasmic connections traversing cell walls and middle lamella that connect adjacent plant cells are called:",
        "opts": {
            "A": "Plasmodesmata",
            "B": "Desmosomes",
            "C": "Tight junctions",
            "D": "Gap junctions"
        },
        "ans": "A",
        "exp": "Plasmodesmata are cytoplasmic bridges that traverse the cell wall and middle lamella, connecting the cytoplasm of neighbouring plant cells.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 58,
        "q": "The primary plant cell wall is capable of growth and diminishes as the cell matures, while the:",
        "opts": {
            "A": "Secondary wall is formed on the inner (towards membrane) side of the cell",
            "B": "Secondary wall is formed outside the middle lamella",
            "C": "Secondary wall disappears entirely",
            "D": "Primary wall thickens with glycogen"
        },
        "ans": "A",
        "exp": "The primary wall is capable of growth, which diminishes as the cell matures and the secondary wall is formed on the inner (towards membrane) side of the cell.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 59,
        "q": "In which year did Singer and Nicolson propose the widely accepted Fluid Mosaic Model of the cell membrane?",
        "opts": {
            "A": "1972",
            "B": "1953",
            "C": "1898",
            "D": "1931"
        },
        "ans": "A",
        "exp": "In 1972, Singer and Nicolson proposed the Fluid Mosaic Model of cell membrane structure.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 60,
        "q": "According to the Fluid Mosaic Model, the cell membrane is composed primarily of:",
        "opts": {
            "A": "Lipids and proteins",
            "B": "Carbohydrates and nucleic acids",
            "C": "Cellulose and lignin",
            "D": "Peptidoglycan and chitin"
        },
        "ans": "A",
        "exp": "The cell membrane is composed primarily of lipids and proteins, with minor amounts of carbohydrates.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 61,
        "q": "The major lipids of the plasma membrane are phospholipids that are arranged in a:",
        "opts": {
            "A": "Bilayer with hydrophilic heads directed outward and hydrophobic tails directed inward",
            "B": "Bilayer with hydrophobic tails directed outward and hydrophilic heads inward",
            "C": "Monolayer with heads facing the cytoplasm only",
            "D": "Random globular aggregate without orientation"
        },
        "ans": "A",
        "exp": "Phospholipids are arranged within the membrane with the polar hydrophilic heads towards the outer sides and the hydrophobic tails towards the inner part, protecting nonpolar hydrocarbon tails from aqueous environments.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 62,
        "q": "The hydrophobic tail of phospholipid molecules in the plasma membrane consists of:",
        "opts": {
            "A": "Saturated hydrocarbons of fatty acids",
            "B": "Glycerol and phosphate only",
            "C": "Positively charged amino acids",
            "D": "Polysaccharide chains"
        },
        "ans": "A",
        "exp": "The hydrophobic tail consists of saturated and unsaturated hydrocarbon chains of fatty acids, shielded from water.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 63,
        "q": "In human red blood cell membranes, the approximate percentage of protein and lipid is:",
        "opts": {
            "A": "52% protein and 40% lipid",
            "B": "40% protein and 52% lipid",
            "C": "70% protein and 30% lipid",
            "D": "20% protein and 80% lipid"
        },
        "ans": "A",
        "exp": "In human beings, the membrane of the erythrocyte has approximately 52 per cent protein and 40 per cent lipids.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 64,
        "q": "Membrane proteins are classified into integral and peripheral based on their:",
        "opts": {
            "A": "Ease of extraction from the membrane",
            "B": "Molecular weight",
            "C": "Enzymatic catalytic rate",
            "D": "Binding affinity to RNA"
        },
        "ans": "A",
        "exp": "Depending on the ease of extraction, membrane proteins can be classified as integral (buried partially or totally in bilayer) and peripheral (lying on membrane surface).",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 65,
        "q": "The quasi-fluid nature of membrane lipid enables:",
        "opts": {
            "A": "Lateral movement of proteins within the overall bilayer",
            "B": "Random diffusion of DNA across the membrane",
            "C": "Spontaneous conversion into cell wall",
            "D": "Total impermeability to water molecules"
        },
        "ans": "A",
        "exp": "The quasi-fluid nature of lipid enables lateral movement of proteins within the overall bilayer, a property referred to as membrane fluidity.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 66,
        "q": "Movement of water molecules across a selectively permeable membrane by diffusion is specifically termed:",
        "opts": {
            "A": "Osmosis",
            "B": "Pinocytosis",
            "C": "Phagocytosis",
            "D": "Active transport"
        },
        "ans": "A",
        "exp": "Movement of water across a selectively permeable membrane along its concentration gradient is called osmosis.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 67,
        "q": "Transport of molecules across a membrane against their concentration gradient requiring ATP is termed:",
        "opts": {
            "A": "Active transport",
            "B": "Facilitated diffusion",
            "C": "Simple diffusion",
            "D": "Passive osmosis"
        },
        "ans": "A",
        "exp": "Active transport is an energy-dependent process in which ATP is utilized to pump molecules against their concentration gradient (e.g., Na+/K+ ATPase).",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 68,
        "q": "Polar molecules cannot pass through the nonpolar lipid bilayer easily and require:",
        "opts": {
            "A": "Carrier or channel proteins to facilitate transport",
            "B": "Direct ATP hydrolysis in the bilayer matrix",
            "C": "Conversion into glucose polymers",
            "D": "Digestion by lysosomal enzymes"
        },
        "ans": "A",
        "exp": "Polar molecules cannot pass through the nonpolar lipid bilayer and therefore require carrier proteins of the membrane to facilitate their transport.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 69,
        "q": "Which group of organelles is collectively included in the endomembrane system?",
        "opts": {
            "A": "Endoplasmic reticulum, Golgi complex, Lysosomes, and Vacuoles",
            "B": "Mitochondria, Chloroplasts, and Peroxisomes",
            "C": "Nucleus, Centrosome, and Ribosomes",
            "D": "Ribosomes, Cytoskeleton, and Flagella"
        },
        "ans": "A",
        "exp": "The endomembrane system includes endoplasmic reticulum (ER), Golgi complex, lysosomes, and vacuoles because their functions are coordinated.",
        "topic": "organelles",
        "sub": "Endomembrane System",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 70,
        "q": "Why are mitochondria and chloroplasts NOT considered part of the endomembrane system?",
        "opts": {
            "A": "Their functions are not coordinated with ER, Golgi, lysosomes, and vacuoles",
            "B": "They lack a double membrane envelope",
            "C": "They do not contain any proteins or lipids",
            "D": "They are synthesized de novo in the nucleolus"
        },
        "ans": "A",
        "exp": "Mitochondria, chloroplasts, and peroxisomes are not considered part of the endomembrane system because their functions are not coordinated with the components of the endomembrane system.",
        "topic": "organelles",
        "sub": "Endomembrane System",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 71,
        "q": "The network of tiny tubular structures scattered in the cytoplasm of eukaryotic cells is called the:",
        "opts": {
            "A": "Endoplasmic reticulum (ER)",
            "B": "Golgi apparatus",
            "C": "Cytoskeleton",
            "D": "Axoneme"
        },
        "ans": "A",
        "exp": "The endoplasmic reticulum (ER) is an extensive network or reticulum of tiny tubular structures scattered in the cytoplasm.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 72,
        "q": "The endoplasmic reticulum divides the intracellular space into two distinct compartments:",
        "opts": {
            "A": "Luminal (inside ER) and extra-luminal (cytoplasm) compartments",
            "B": "Intra-nuclear and extra-nuclear compartments",
            "C": "Thylakoid and stroma compartments",
            "D": "Matrix and intermembrane compartments"
        },
        "ans": "A",
        "exp": "The ER divides the intracellular space into two distinct compartments, i.e., luminal (inside ER) and extra-luminal (cytoplasm) compartments.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 73,
        "q": "Endoplasmic reticulum bearing ribosomes on its outer surface is termed:",
        "opts": {
            "A": "Rough Endoplasmic Reticulum (RER)",
            "B": "Smooth Endoplasmic Reticulum (SER)",
            "C": "Sarcoplasmic Reticulum",
            "D": "Dictyosome"
        },
        "ans": "A",
        "exp": "The endoplasmic reticulum bearing ribosomes on their surface is called rough endoplasmic reticulum (RER).",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 74,
        "q": "Rough Endoplasmic Reticulum (RER) is extensively developed and observed in cells actively involved in:",
        "opts": {
            "A": "Protein synthesis and secretion",
            "B": "Lipid and steroid synthesis",
            "C": "Glycogen breakdown only",
            "D": "Detoxification of heavy metals"
        },
        "ans": "A",
        "exp": "RER is frequently observed in the cells actively involved in protein synthesis and secretion.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 75,
        "q": "Smooth Endoplasmic Reticulum (SER) is the major site for the synthesis of:",
        "opts": {
            "A": "Lipids and steroid hormones",
            "B": "Proteins and nucleic acids",
            "C": "Cellulose and pectins",
            "D": "Ribosomal RNA"
        },
        "ans": "A",
        "exp": "The smooth endoplasmic reticulum is the major site for synthesis of lipid. In animal cells, lipid-like steroidal hormones are synthesized in SER.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 76,
        "q": "Who first observed and described the Golgi apparatus as densely stained reticular structures near the nucleus in 1898?",
        "opts": {
            "A": "Camillo Golgi",
            "B": "Robert Brown",
            "C": "George Palade",
            "D": "Keith Porter"
        },
        "ans": "A",
        "exp": "Camillo Golgi (1898) first observed densely stained reticular structures near the nucleus, which were later named Golgi bodies after him.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 77,
        "q": "The flat, disc-shaped sacs that make up the Golgi apparatus are called:",
        "opts": {
            "A": "Cisternae",
            "B": "Cristae",
            "C": "Thylakoids",
            "D": "Tubules"
        },
        "ans": "A",
        "exp": "The Golgi apparatus consists of many flat, disc-shaped sacs or cisternae of 0.5 \u00b5m to 1.0 \u00b5m diameter.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 78,
        "q": "In the Golgi apparatus, the convex forming face is called the:",
        "opts": {
            "A": "Cis face",
            "B": "Trans face",
            "C": "Maturing face",
            "D": "Concave face"
        },
        "ans": "A",
        "exp": "The Golgi cisternae are concentrically arranged near the nucleus with distinct convex cis or the forming face and concave trans or the maturing face.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 79,
        "q": "Materials to be packaged as vesicles from the ER fuse with which face of the Golgi apparatus?",
        "opts": {
            "A": "Cis (forming) face",
            "B": "Trans (maturing) face",
            "C": "Lateral membrane",
            "D": "Basal lamina"
        },
        "ans": "A",
        "exp": "Materials to be packaged in the form of vesicles from the ER fuse with the cis face of the Golgi apparatus and move towards the maturing trans face.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 80,
        "q": "The Golgi apparatus is the important site for the formation of:",
        "opts": {
            "A": "Glycoproteins and glycolipids",
            "B": "ATP and NADPH",
            "C": "rRNA and tRNA",
            "D": "DNA and histones"
        },
        "ans": "A",
        "exp": "Golgi apparatus is the important site of formation of glycoproteins and glycolipids (glycosylation of proteins and lipids).",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 81,
        "q": "Membrane-bound vesicular structures formed by the process of packaging in the Golgi apparatus containing hydrolytic enzymes are:",
        "opts": {
            "A": "Lysosomes",
            "B": "Peroxisomes",
            "C": "Ribosomes",
            "D": "Vacuoles"
        },
        "ans": "A",
        "exp": "Lysosomes are membrane-bound vesicular structures formed by the process of packaging in the Golgi apparatus, rich in hydrolytic enzymes.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 82,
        "q": "The hydrolytic enzymes present in lysosomes are optimally active at:",
        "opts": {
            "A": "Acidic pH (around 5)",
            "B": "Basic pH (around 8.5)",
            "C": "Neutral pH (7.0)",
            "D": "Highly alkaline pH (11.0)"
        },
        "ans": "A",
        "exp": "The isolated lysosomal vesicles have been found to be very rich in almost all types of hydrolytic enzymes optimally active at acidic pH.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 83,
        "q": "Which enzymes are characteristically present inside lysosomes?",
        "opts": {
            "A": "Lipases, proteases, and carbohydrases",
            "B": "DNA polymerase and RNA polymerase",
            "C": "RuBisCO and PEP carboxylase",
            "D": "Cytochrome oxidase and ATP synthase"
        },
        "ans": "A",
        "exp": "Lysosomes contain acid hydrolases including lipases, proteases, and carbohydrases capable of digesting lipids, proteins, carbohydrates, and nucleic acids.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 84,
        "q": "The single membrane bounding the plant vacuole is known as the:",
        "opts": {
            "A": "Tonoplast",
            "B": "Periderm",
            "C": "Pellicle",
            "D": "Sarcolemma"
        },
        "ans": "A",
        "exp": "In plant cells, the vacuole is bound by a single membrane called tonoplast.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 85,
        "q": "In plant cells, the vacuole can occupy up to what percentage of the volume of the cell?",
        "opts": {
            "A": "Up to 90%",
            "B": "Up to 25%",
            "C": "Up to 50%",
            "D": "Up to 10%"
        },
        "ans": "A",
        "exp": "In plant cells, the vacuoles can occupy up to 90 per cent of the volume of the cell.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 86,
        "q": "In plants, the tonoplast facilitates the transport of ions against concentration gradients into the vacuole; hence ion concentration in vacuole is:",
        "opts": {
            "A": "Significantly higher than in the cytoplasm",
            "B": "Significantly lower than in the cytoplasm",
            "C": "Identical to extracellular fluid",
            "D": "Always zero"
        },
        "ans": "A",
        "exp": "In plants, the tonoplast facilitates transport of ions and other materials against concentration gradients into the vacuole; hence their concentration is significantly higher in the vacuole than in the cytoplasm.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 87,
        "q": "In Amoeba, which specialized vacuole is important for osmoregulation and excretion?",
        "opts": {
            "A": "Contractile vacuole",
            "B": "Gas vacuole",
            "C": "Food vacuole",
            "D": "Sap vacuole"
        },
        "ans": "A",
        "exp": "In Amoeba, the contractile vacuole is important for osmoregulation and excretion.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 88,
        "q": "In many protists like Paramecium, food vacuoles are formed by:",
        "opts": {
            "A": "Engulfing food particles",
            "B": "Budding from the nuclear envelope",
            "C": "Binary fission of mitochondria",
            "D": "Precipitation of calcium carbonate"
        },
        "ans": "A",
        "exp": "In many cells, as in protists, food vacuoles are formed by engulfing food particles.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 89,
        "q": "Mitochondria are often referred to as the 'powerhouses of the cell' because they are the sites of:",
        "opts": {
            "A": "Aerobic respiration and ATP production",
            "B": "Protein translation on 80S ribosomes",
            "C": "Packaging of glycoproteins",
            "D": "Storage of starch grains"
        },
        "ans": "A",
        "exp": "Mitochondria are the sites of aerobic cellular respiration; they produce cellular energy in the form of ATP, hence called 'power houses' of the cell.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 90,
        "q": "Unless specifically stained, mitochondria are not easily visible under the microscope. Which vital stain is typically used to observe them?",
        "opts": {
            "A": "Janus Green B",
            "B": "Acetocarmine",
            "C": "Safranin",
            "D": "Crystal Violet"
        },
        "ans": "A",
        "exp": "Janus Green B is a vital stain specifically used to stain and visualize mitochondria under the light microscope.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 91,
        "q": "The number of mitochondria per cell is variable depending on the:",
        "opts": {
            "A": "Physiological activity of the cells",
            "B": "Number of chromosomes in the nucleus",
            "C": "Thickness of the middle lamella",
            "D": "Amount of chitin present"
        },
        "ans": "A",
        "exp": "The number of mitochondria per cell is variable depending on the physiological activity of the cells (e.g., flight muscles of birds have thousands).",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 92,
        "q": "The inner membrane of a mitochondrion forms a number of infoldings towards the matrix called:",
        "opts": {
            "A": "Cristae",
            "B": "Cisternae",
            "C": "Thylakoids",
            "D": "Lamellae"
        },
        "ans": "A",
        "exp": "The inner membrane forms a number of infoldings called cristae towards the matrix, which increase the surface area for the electron transport chain.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 93,
        "q": "The matrix of mitochondria possesses:",
        "opts": {
            "A": "Single circular DNA molecule, RNA molecules, 70S ribosomes, and components for protein synthesis",
            "B": "Linear DNA with histones and 80S ribosomes",
            "C": "Only water and glucose molecules",
            "D": "No genetic material or ribosomes whatsoever"
        },
        "ans": "A",
        "exp": "The mitochondrial matrix also possesses a single circular DNA molecule, a few RNA molecules, 70S ribosomes, and components required for protein synthesis.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 94,
        "q": "Mitochondria divide by which process?",
        "opts": {
            "A": "Fission",
            "B": "Mitosis",
            "C": "Budding",
            "D": "Fragmentation"
        },
        "ans": "A",
        "exp": "According to NCERT, mitochondria divide by fission.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 95,
        "q": "Plastids are found in all plant cells and in:",
        "opts": {
            "A": "Euglenoids",
            "B": "Cyanobacteria",
            "C": "Fungi",
            "D": "Protozoans"
        },
        "ans": "A",
        "exp": "Plastids are found in all plant cells and in euglenoids. They are easily observed under the microscope as they are large.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 96,
        "q": "Based on the type of pigments, plastids are classified into:",
        "opts": {
            "A": "Chloroplasts, chromoplasts, and leucoplasts",
            "B": "Protoplasts, amyloplasts, and cytoplasts",
            "C": "Cristae, cisternae, and thylakoids",
            "D": "Vacuoles, lysosomes, and peroxisomes"
        },
        "ans": "A",
        "exp": "Based on the type of pigments, plastids can be classified into chloroplasts, chromoplasts, and leucoplasts.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 97,
        "q": "Which fat-soluble carotenoid pigments are present in chromoplasts to give yellow, orange, or red color to plant parts?",
        "opts": {
            "A": "Carotene and xanthophylls",
            "B": "Chlorophyll a and b",
            "C": "Phycocyanin and phycoerythrin",
            "D": "Anthocyanins"
        },
        "ans": "A",
        "exp": "In chromoplasts, fat-soluble carotenoid pigments like carotene, xanthophylls, and others are present, giving plant parts a yellow, orange, or red color.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 98,
        "q": "Leucoplasts that store carbohydrates in the form of starch, such as in potato tubers, are called:",
        "opts": {
            "A": "Amyloplasts",
            "B": "Elaioplasts",
            "C": "Aleuroplasts",
            "D": "Chromoplasts"
        },
        "ans": "A",
        "exp": "Amyloplasts are leucoplasts that store carbohydrates (starch), e.g., in potato tubers.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 99,
        "q": "Leucoplasts specialized for storing oils and fats are termed:",
        "opts": {
            "A": "Elaioplasts",
            "B": "Amyloplasts",
            "C": "Aleuroplasts",
            "D": "Etioplasts"
        },
        "ans": "A",
        "exp": "Elaioplasts store oils and fats, whereas aleuroplasts store proteins.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 100,
        "q": "Leucoplasts that specialize in storing proteins are called:",
        "opts": {
            "A": "Aleuroplasts",
            "B": "Elaioplasts",
            "C": "Amyloplasts",
            "D": "Chromoplasts"
        },
        "ans": "A",
        "exp": "Aleuroplasts store proteins (e.g., in the aleurone layer of maize grains).",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 101,
        "q": "Majority of chloroplasts of green plants are found in which cells of leaves?",
        "opts": {
            "A": "Mesophyll cells",
            "B": "Epidermal cells",
            "C": "Xylem vessels",
            "D": "Phloem sieve tubes"
        },
        "ans": "A",
        "exp": "Majority of the chloroplasts of the green plants are found in the mesophyll cells of the leaves.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 102,
        "q": "The flattened membranous sacs arranged in stacks like piles of coins inside the chloroplast stroma are called:",
        "opts": {
            "A": "Thylakoids (forming grana)",
            "B": "Cristae",
            "C": "Cisternae",
            "D": "Inclusion bodies"
        },
        "ans": "A",
        "exp": "A number of organized flattened membranous sacs called thylakoids are present in the stroma; thylakoids are arranged in stacks like piles of coins called grana.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 103,
        "q": "Flat membranous tubules connecting the thylakoids of different grana are called:",
        "opts": {
            "A": "Stroma lamellae",
            "B": "Cristae",
            "C": "Plasmodesmata",
            "D": "Mesosomes"
        },
        "ans": "A",
        "exp": "There are flat membranous tubules called the stroma lamellae connecting the thylakoids of different grana.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 104,
        "q": "Where are the chlorophyll pigments located within the chloroplast?",
        "opts": {
            "A": "In the thylakoids",
            "B": "In the stroma",
            "C": "In the outer membrane",
            "D": "In the intermembrane space"
        },
        "ans": "A",
        "exp": "Chlorophyll pigments are present in the thylakoid membranes where light reaction and photophosphorylation take place.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 105,
        "q": "The stroma of the chloroplast contains enzymes required for the synthesis of:",
        "opts": {
            "A": "Carbohydrates and proteins",
            "B": "Lipids and sterols only",
            "C": "Glycogen and chitin",
            "D": "Urea and uric acid"
        },
        "ans": "A",
        "exp": "The stroma of chloroplast contains enzymes required for the synthesis of carbohydrates and proteins (dark reactions/Calvin cycle), as well as circular DNA and 70S ribosomes.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 106,
        "q": "What type of ribosomes are found in the chloroplast stroma?",
        "opts": {
            "A": "70S ribosomes",
            "B": "80S ribosomes",
            "C": "60S ribosomes",
            "D": "50S ribosomes only"
        },
        "ans": "A",
        "exp": "The ribosomes of the chloroplasts are smaller (70S) than the cytoplasmic ribosomes (80S).",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 107,
        "q": "Who discovered eukaryotic ribosomes under the electron microscope as dense particles in 1953?",
        "opts": {
            "A": "George Palade",
            "B": "Camillo Golgi",
            "C": "Robert Brown",
            "D": "Theodor Boveri"
        },
        "ans": "A",
        "exp": "George Palade (1953) first observed ribosomes as dense particles under the electron microscope; they were hence called Palade particles.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 108,
        "q": "Eukaryotic cytoplasmic ribosomes have a sedimentation coefficient of:",
        "opts": {
            "A": "80S",
            "B": "70S",
            "C": "60S",
            "D": "100S"
        },
        "ans": "A",
        "exp": "Eukaryotic cytoplasmic ribosomes are 80S, composed of a 60S large subunit and a 40S small subunit.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 109,
        "q": "The two subunits of the 80S eukaryotic ribosome are:",
        "opts": {
            "A": "60S and 40S",
            "B": "50S and 30S",
            "C": "50S and 40S",
            "D": "70S and 10S"
        },
        "ans": "A",
        "exp": "The two subunits of an 80S eukaryotic ribosome are 60S (large subunit) and 40S (small subunit).",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 110,
        "q": "Ribosomes are chemically composed of:",
        "opts": {
            "A": "Ribonucleic acid (rRNA) and proteins",
            "B": "Deoxyribonucleic acid (DNA) and lipids",
            "C": "Phospholipids and carbohydrates",
            "D": "Chitin and cellulose"
        },
        "ans": "A",
        "exp": "Ribosomes are ribonucleoprotein particles composed of RNA (rRNA) and proteins and are not surrounded by any membrane.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 111,
        "q": "An elaborate network of filamentous proteinaceous structures consisting of microtubules, microfilaments, and intermediate filaments is called:",
        "opts": {
            "A": "Cytoskeleton",
            "B": "Endomembrane system",
            "C": "Extracellular matrix",
            "D": "Genophore"
        },
        "ans": "A",
        "exp": "An elaborate network of filamentous proteinaceous structures consisting of microtubules, microfilaments, and intermediate filaments present in cytoplasm is collectively referred to as the cytoskeleton.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 112,
        "q": "Which of the following is a primary function of the cytoskeleton in eukaryotic cells?",
        "opts": {
            "A": "Mechanical support, motility, and maintenance of cell shape",
            "B": "Synthesis of ATP through oxidative phosphorylation",
            "C": "Transcription of messenger RNA",
            "D": "Packaging of secretory proteins"
        },
        "ans": "A",
        "exp": "The cytoskeleton in a cell is involved in many functions such as mechanical support, motility, maintenance of the shape of the cell.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 113,
        "q": "Cilia and flagella are hair-like outgrowths of which cellular structure?",
        "opts": {
            "A": "Cell membrane",
            "B": "Cell wall",
            "C": "Nuclear envelope",
            "D": "Endoplasmic reticulum"
        },
        "ans": "A",
        "exp": "Cilia and flagella are hair-like outgrowths of the cell membrane.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 114,
        "q": "The core of a eukaryotic cilium or flagellum is called the:",
        "opts": {
            "A": "Axoneme",
            "B": "Centriole",
            "C": "Kinetochore",
            "D": "Centromere"
        },
        "ans": "A",
        "exp": "The core of eukaryotic cilia and flagella is called the axoneme, which possesses a number of microtubules running parallel to the long axis.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 115,
        "q": "The axoneme of eukaryotic cilia and flagella usually has an arrangement of microtubules designated as:",
        "opts": {
            "A": "9 + 2 array",
            "B": "9 + 0 array",
            "C": "8 + 2 array",
            "D": "9 + 3 array"
        },
        "ans": "A",
        "exp": "The axoneme usually has nine doublets of radially arranged peripheral microtubules, and a pair of centrally located microtubules (9 + 2 array).",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 116,
        "q": "Both the cilium and flagellum emerge from a centriole-like structure called the:",
        "opts": {
            "A": "Basal body",
            "B": "Centromere",
            "C": "Kinetochore",
            "D": "Micelle"
        },
        "ans": "A",
        "exp": "Both the cilium and flagellum emerge from centriole-like structures called the basal bodies.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 117,
        "q": "Centrosome is an organelle usually containing two cylindrical structures called:",
        "opts": {
            "A": "Centrioles",
            "B": "Chromatids",
            "C": "Centromeres",
            "D": "Thylakoids"
        },
        "ans": "A",
        "exp": "Centrosome is an organelle usually containing two cylindrical structures called centrioles, surrounded by amorphous pericentriolar materials.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 118,
        "q": "The two centrioles in a centrosome lie:",
        "opts": {
            "A": "Perpendicular to each other",
            "B": "Parallel to each other",
            "C": "At 180 degrees opposite poles",
            "D": "Intertwined like a double helix"
        },
        "ans": "A",
        "exp": "The two centrioles in a centrosome lie perpendicular to each other, in which each has an organization like the cartwheel.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 119,
        "q": "The organization of peripheral triplet microtubules in a centriole follows the pattern:",
        "opts": {
            "A": "9 + 0 array",
            "B": "9 + 2 array",
            "C": "7 + 2 array",
            "D": "9 + 1 array"
        },
        "ans": "A",
        "exp": "A centriole is made up of nine evenly spaced peripheral triplets of tubulin protein, with no central microtubules (9 + 0 array).",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 120,
        "q": "Who coined the term 'chromatin' to describe the nuclear material stained by basic dyes?",
        "opts": {
            "A": "Flemming",
            "B": "Robert Brown",
            "C": "Waldeyer",
            "D": "Crick"
        },
        "ans": "A",
        "exp": "The material of the nucleus stained by basic dyes was given the name chromatin by Flemming.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 121,
        "q": "The space between the two parallel membranes of the nuclear envelope (10 to 50 nm) is called the:",
        "opts": {
            "A": "Perinuclear space",
            "B": "Intermembrane lumen",
            "C": "Peroxisomal space",
            "D": "Nucleolar cavity"
        },
        "ans": "A",
        "exp": "The nuclear envelope consists of two parallel membranes with a space between (10 to 50 nm) called the perinuclear space.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 122,
        "q": "The spherical non-membrane bound body found inside the nucleoplasm that is the active site for rRNA synthesis is the:",
        "opts": {
            "A": "Nucleolus",
            "B": "Centrosome",
            "C": "Kinetochore",
            "D": "Mesosome"
        },
        "ans": "A",
        "exp": "The nucleolus is a non-membrane bound spherical structure in the nucleoplasm that is the site of active ribosomal RNA (rRNA) synthesis.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 123,
        "q": "Every chromosome essentially has a primary constriction, on the sides of which disc-shaped structures are present called:",
        "opts": {
            "A": "Centromere and kinetochores",
            "B": "Telomere and satellites",
            "C": "Chromomeres and chromonemata",
            "D": "Spindle poles and centrosomes"
        },
        "ans": "A",
        "exp": "Every chromosome has a primary constriction called the centromere, on the sides of which disc-shaped structures called kinetochores are present.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 124,
        "q": "A chromosome in which the centromere is situated right in the middle forming two equal arms is classified as:",
        "opts": {
            "A": "Metacentric",
            "B": "Sub-metacentric",
            "C": "Acrocentric",
            "D": "Telocentric"
        },
        "ans": "A",
        "exp": "The metacentric chromosome has a middle centromere forming two equal arms of the chromosome.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 125,
        "q": "A chromosome having a terminal centromere located at the very end is classified as:",
        "opts": {
            "A": "Telocentric",
            "B": "Acrocentric",
            "C": "Sub-metacentric",
            "D": "Metacentric"
        },
        "ans": "A",
        "exp": "The telocentric chromosome has a terminal centromere located at the extreme tip of the chromosome.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    }
]
