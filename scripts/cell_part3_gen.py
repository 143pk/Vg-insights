# Cell Part 3: Q251 to Q375 (Medium)
import json

def get_part3_raw():
    return [
    {
        "q_num": 251,
        "q": "In prokaryotic 70S ribosomes, which molecule acts as the peptidyl transferase ribozyme that forms peptide bonds?",
        "opts": {
            "A": "23S rRNA",
            "B": "16S rRNA",
            "C": "5S rRNA",
            "D": "Ribosomal protein L2"
        },
        "ans": "A",
        "exp": "The 23S rRNA of the 50S large ribosomal subunit possesses peptidyl transferase catalytic activity (a ribozyme) that catalyzes peptide bond formation.",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 252,
        "q": "In eukaryotic 80S ribosomes, the peptidyl transferase catalytic center is located in which RNA molecule?",
        "opts": {
            "A": "28S rRNA",
            "B": "18S rRNA",
            "C": "5.8S rRNA",
            "D": "5S rRNA"
        },
        "ans": "A",
        "exp": "In eukaryotic ribosomes, the 28S rRNA of the 60S subunit acts as the peptidyl transferase ribozyme forming peptide bonds.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 253,
        "q": "Which rRNA component of the small prokaryotic ribosomal subunit (30S) binds to the Shine-Dalgarno sequence on mRNA to initiate translation?",
        "opts": {
            "A": "16S rRNA",
            "B": "23S rRNA",
            "C": "5S rRNA",
            "D": "28S rRNA"
        },
        "ans": "A",
        "exp": "The 3' end of the 16S rRNA binds the complementary Shine-Dalgarno sequence located upstream of the AUG start codon on prokaryotic mRNA.",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 254,
        "q": "Retrograde transport of resident ER proteins from the Golgi apparatus back to the ER is mediated by vesicles coated with:",
        "opts": {
            "A": "COPI protein coat",
            "B": "COPII protein coat",
            "C": "Clathrin protein coat",
            "D": "Caveolin coat"
        },
        "ans": "A",
        "exp": "COPI-coated vesicles mediate retrograde transport (Golgi to ER), retrieving escaped ER resident proteins bearing the KDEL signal sequence.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 255,
        "q": "Anterograde transport of newly synthesized proteins from the endoplasmic reticulum to the cis-Golgi is mediated by:",
        "opts": {
            "A": "COPII-coated vesicles",
            "B": "COPI-coated vesicles",
            "C": "Clathrin-coated vesicles",
            "D": "Peroxisomal vesicles"
        },
        "ans": "A",
        "exp": "COPII-coated transport vesicles mediate forward (anterograde) vesicular transport from the rough ER exit sites to the cis-Golgi network.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 256,
        "q": "Soluble resident proteins destined to remain in the lumen of the endoplasmic reticulum contain a specific C-terminal retention signal:",
        "opts": {
            "A": "KDEL (Lys-Asp-Glu-Leu)",
            "B": "Mannose-6-phosphate",
            "C": "Nuclear localization sequence (NLS)",
            "D": "Signal peptide of 20 leucines"
        },
        "ans": "A",
        "exp": "Soluble ER resident proteins contain a tetrapeptide retrieval tag, KDEL (Lys-Asp-Glu-Leu), at their carboxyl terminus recognized by KDEL receptors in the Golgi.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 257,
        "q": "Proteins destined for lysosomes receive which specific chemical tag in the cis-Golgi to direct their packaging into lysosomes?",
        "opts": {
            "A": "Mannose-6-phosphate (M6P)",
            "B": "Glucose-6-phosphate",
            "C": "N-acetylglucosamine only",
            "D": "Fructose-1,6-bisphosphate"
        },
        "ans": "A",
        "exp": "Lysosomal acid hydrolases receive a mannose-6-phosphate (M6P) tag in the cis-Golgi, which binds M6P receptors in the trans-Golgi for sorting into lysosomes.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 258,
        "q": "In the human metabolic disorder I-cell disease (inclusion-cell disease), lysosomal enzymes are mistakenly secreted outside the cell because:",
        "opts": {
            "A": "Cells lack the phosphotransferase enzyme that adds the mannose-6-phosphate sorting tag to lysosomal proteins",
            "B": "The nuclear pore complexes are completely blocked",
            "C": "The rough endoplasmic reticulum cannot synthesize any proteins",
            "D": "Mitochondria fail to generate ATP for membrane fusion"
        },
        "ans": "A",
        "exp": "In I-cell disease, a defect in GlcNAc phosphotransferase prevents addition of the mannose-6-phosphate marker, causing lysosomal enzymes to be secreted extracellularly.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 259,
        "q": "Inhalation of silica particles or asbestos fibers causes chronic lung pathology because these non-digestible particles:",
        "opts": {
            "A": "Rupture lysosomal membranes in alveolar macrophages, releasing acid hydrolases into the cytosol and inducing autolysis and fibrosis",
            "B": "Block the nuclear pores preventing mRNA export",
            "C": "Inhibit 70S ribosomes in mitochondria",
            "D": "Degrade the middle lamella of lung tissues"
        },
        "ans": "A",
        "exp": "Silica crystals and asbestos fibers are phagocytosed by macrophages but cannot be digested; they destabilize and pierce lysosomal membranes, spilling digestive hydrolases and triggering chronic inflammation and fibrosis.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 260,
        "q": "Tay-Sachs disease is a fatal neurodegenerative lysosomal storage disorder caused by the deficiency of which enzyme, leading to ganglioside accumulation?",
        "opts": {
            "A": "Hexosaminidase A",
            "B": "Acid phosphatase",
            "C": "Catalase",
            "D": "DNA polymerase alpha"
        },
        "ans": "A",
        "exp": "Tay-Sachs disease is caused by an inherited deficiency of beta-hexosaminidase A, causing toxic accumulation of GM2 gangliosides in neuronal lysosomes.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 261,
        "q": "The process by which an unfertilized ovum or cell engulfs large droplets of extracellular fluid by invagination of the plasma membrane is termed:",
        "opts": {
            "A": "Pinocytosis (cell drinking)",
            "B": "Phagocytosis (cell eating)",
            "C": "Exocytosis",
            "D": "Plasmolysis"
        },
        "ans": "A",
        "exp": "Pinocytosis ('cell drinking') is the endocytic uptake of extracellular fluid and dissolved solutes via small invaginating vesicles.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 262,
        "q": "Receptor-mediated endocytosis of low-density lipoproteins (LDL) into mammalian cells occurs via plasma membrane pits coated with:",
        "opts": {
            "A": "Clathrin and adaptin complexes",
            "B": "Tubulin and actin",
            "C": "Ribophorin I and II",
            "D": "Connexon channels"
        },
        "ans": "A",
        "exp": "Receptor-mediated endocytosis uses clathrin-coated pits that form triskelion lattices around invaginating vesicles to ingest specific ligands like LDL.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 263,
        "q": "Which of the following is an example of an ATP-driven primary active transport pump?",
        "opts": {
            "A": "Na+/K+ ATPase",
            "B": "Glucose-Na+ symporter (SGLT1)",
            "C": "GLUT4 facilitated glucose uniporter",
            "D": "Aquaporin water channel"
        },
        "ans": "A",
        "exp": "The Na+/K+ ATPase directly hydrolyzes ATP to pump 3 Na+ out and 2 K+ into the cell against their electrochemical gradients.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 264,
        "q": "Secondary active transport (such as the sodium-glucose symporter in the intestinal brush border) is powered by:",
        "opts": {
            "A": "The electrochemical gradient of sodium established by the primary Na+/K+ ATPase pump",
            "B": "Direct hydrolysis of ATP at the transporter's active site",
            "C": "Hydrolysis of GTP by tubulin dimers",
            "D": "Spontaneous diffusion of water down osmotic gradients"
        },
        "ans": "A",
        "exp": "Secondary active transport (symport or antiport) couples the downhill flow of Na+ (driven by the Na+/K+ ATPase gradient) to drive the uphill transport of glucose or amino acids.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 265,
        "q": "Aquaporins, which facilitate rapid water transport across cell membranes, are composed of:",
        "opts": {
            "A": "Eight different types of aquaporin proteins forming water-selective channel tetramers",
            "B": "Pure phospholipid vesicles without proteins",
            "C": "Cellulose microfibrils",
            "D": "Tubulin heterodimer rings"
        },
        "ans": "A",
        "exp": "Aquaporins are integral membrane proteins forming tetrameric channels specifically permeable to water molecules (water channels are made of 8 different types of aquaporins).",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 266,
        "q": "Why are mitochondrial genes inherited strictly through maternal lineage in humans and most mammals?",
        "opts": {
            "A": "The sperm contributes only its haploid nucleus, while the zygote receives its cytoplasm and all mitochondria exclusively from the ovum",
            "B": "Paternal mitochondrial DNA is actively multiplied in the zygote",
            "C": "Mitochondrial genes are located on the Y chromosome",
            "D": "Maternal mitochondria lack DNA and acquire it spontaneously"
        },
        "ans": "A",
        "exp": "The mammalian egg provides virtually all cytoplasm and mitochondria to the fertilized zygote, whereas sperm mitochondria located in the neck/tail are degraded, ensuring maternal inheritance.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 267,
        "q": "The distinct phospholipid that is uniquely abundant in the inner mitochondrial membrane (accounting for ~20% of its lipids) and makes it virtually impermeable to ions is:",
        "opts": {
            "A": "Cardiolipin (diphosphatidylglycerol)",
            "B": "Phosphatidylcholine",
            "C": "Sphingomyelin",
            "D": "Phosphatidylserine"
        },
        "ans": "A",
        "exp": "Cardiolipin (diphosphatidylglycerol) is a unique four-tailed phospholipid found almost exclusively in the inner mitochondrial membrane and bacterial membranes, sealing it against passive proton leak.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 268,
        "q": "During aerobic respiration in mitochondria, protons (H+) are pumped from the matrix into which compartment to generate a proton-motive force?",
        "opts": {
            "A": "Intermembrane space",
            "B": "Thylakoid lumen",
            "C": "Outer mitochondrial surface",
            "D": "Cytosolic vacuoles"
        },
        "ans": "A",
        "exp": "Complexes I, III, and IV of the electron transport chain pump protons from the mitochondrial matrix into the intermembrane space, generating the electrochemical proton gradient.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 269,
        "q": "In the mitochondrial ATP synthase (Complex V), which subunit forms the membrane-embedded proton channel inhibited by oligomycin?",
        "opts": {
            "A": "F0 subunit",
            "B": "F1 subunit",
            "C": "Alpha subunit",
            "D": "Beta catalytic subunit"
        },
        "ans": "A",
        "exp": "The F0 subunit is a hydrophobic, membrane-embedded basepiece that acts as a transmembrane proton channel; it is specifically bound and blocked by oligomycin (hence 'o' in F0).",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 270,
        "q": "The catalytic headpiece of mitochondrial ATP synthase that protrudes into the matrix and synthesizes ATP from ADP and Pi is the:",
        "opts": {
            "A": "F1 subunit",
            "B": "F0 subunit",
            "C": "Cytochrome c",
            "D": "Porin channel"
        },
        "ans": "A",
        "exp": "The F1 headpiece protrudes into the matrix and contains the catalytic beta-subunits that synthesize ATP via rotational catalysis driven by proton passage through F0.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 271,
        "q": "Which respiratory chain enzyme is located bound to the inner mitochondrial membrane and also functions in the Krebs cycle?",
        "opts": {
            "A": "Succinate dehydrogenase (Complex II)",
            "B": "Citrate synthase",
            "C": "Malate dehydrogenase",
            "D": "Pyruvate dehydrogenase"
        },
        "ans": "A",
        "exp": "Succinate dehydrogenase is the only Krebs cycle enzyme embedded in the inner mitochondrial membrane, where it simultaneously functions as Complex II of the respiratory chain.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 272,
        "q": "In chloroplasts, Photosystem II (PSII) and the light-harvesting complex II (LHC II) are predominantly localized in the:",
        "opts": {
            "A": "Appressed (stacked) membranes of the grana thylakoids",
            "B": "Non-appressed stroma lamellae",
            "C": "Outer chloroplast membrane",
            "D": "Inner chloroplast membrane"
        },
        "ans": "A",
        "exp": "PSII and its light-harvesting antenna complexes are concentrated in the stacked, appressed thylakoid membranes of grana, whereas PSI and ATP synthase localize to non-appressed stroma thylakoids.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 273,
        "q": "Photosystem I (PSI) and the chloroplast ATP synthase enzyme complex are predominantly localized in:",
        "opts": {
            "A": "Non-appressed stroma lamellae and outer regions of grana thylakoids",
            "B": "Appressed grana membranes exclusively",
            "C": "Chloroplast intermembrane space",
            "D": "Stroma lipid droplets (plastoglobules)"
        },
        "ans": "A",
        "exp": "PSI and ATP synthase protrude into the stroma and are physically segregated into non-appressed stroma lamellae and margins of grana stacks to avoid steric clash.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 274,
        "q": "During photosynthetic light reactions, photolysis of water occurs on which side of the thylakoid membrane?",
        "opts": {
            "A": "Inner luminal surface of the thylakoid membrane",
            "B": "Outer stromal surface of the thylakoid membrane",
            "C": "Between the outer and inner chloroplast envelope",
            "D": "Inside the chloroplast stroma"
        },
        "ans": "A",
        "exp": "The oxygen-evolving complex (water-splitting complex) associated with PSII is located on the inner luminal side of the thylakoid membrane, releasing protons into the lumen.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 275,
        "q": "The proton accumulation that drives ATP synthesis in chloroplasts occurs inside the:",
        "opts": {
            "A": "Thylakoid lumen (generating a low pH inside)",
            "B": "Chloroplast stroma (generating a low pH in stroma)",
            "C": "Intermembrane space between envelope membranes",
            "D": "Cytoplasm outside the chloroplast"
        },
        "ans": "A",
        "exp": "Protons are pumped from the stroma into the thylakoid lumen by electron transport (and released by water splitting), creating an acidic lumen and a proton gradient across thylakoid membrane.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 276,
        "q": "Chloroplast DNA (cpDNA) typically encodes which of the following vital photosynthetic molecules?",
        "opts": {
            "A": "The large catalytic subunit of RuBisCO and several photosystem proteins",
            "B": "All enzymes of the Krebs cycle",
            "C": "Histone octamer core proteins",
            "D": "The cell wall synthesizing enzyme cellulose synthase"
        },
        "ans": "A",
        "exp": "cpDNA encodes the large subunit of RuBisCO (rbcL), core proteins of photosystems I and II, ATP synthase subunits, and chloroplastic rRNAs and tRNAs.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 277,
        "q": "The small subunit of RuBisCO in plant cells is encoded by:",
        "opts": {
            "A": "Nuclear DNA, synthesized on cytosolic 80S ribosomes, and imported into chloroplasts",
            "B": "Chloroplast DNA, synthesized on chloroplastic 70S ribosomes",
            "C": "Mitochondrial DNA, imported via plasmodesmata",
            "D": "Plasmid DNA, replicated during S-phase"
        },
        "ans": "A",
        "exp": "The small subunit of RuBisCO (rbcS) is encoded by nuclear genes, translated as a precursor in the cytoplasm on 80S ribosomes, and post-translationally imported into the chloroplast stroma.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 278,
        "q": "Which transition correctly illustrates the interconvertibility of plastids in plant tissues?",
        "opts": {
            "A": "Proplastid -> Chloroplast -> Chromoplast (during fruit ripening)",
            "B": "Chloroplast -> Centrosome -> Mitochondrion",
            "C": "Chromoplast -> Leucoplast -> Tonoplast",
            "D": "Ribosome -> Amyloplast -> Nucleolus"
        },
        "ans": "A",
        "exp": "Plastids differentiate from proplastids; young green fruits contain chloroplasts which transform into colored chromoplasts during ripening (e.g., green to red chili/tomato).",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 279,
        "q": "Which of the following cytoskeleton elements has the smallest diameter?",
        "opts": {
            "A": "Microfilaments (about 7 nm)",
            "B": "Intermediate filaments (about 10 nm)",
            "C": "Microtubules (about 25 nm)",
            "D": "Axoneme doublets (about 50 nm)"
        },
        "ans": "A",
        "exp": "Microfilaments (actin filaments) are the thinnest cytoskeletal elements with a diameter of ~7 nm; intermediate filaments are 8\u201312 nm; microtubules are ~25 nm.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 280,
        "q": "Which cytoskeleton element possesses intermediate tensile strength and does NOT exhibit dynamic polarity or treadmilling?",
        "opts": {
            "A": "Intermediate filaments (e.g., keratin, vimentin, neurofilaments)",
            "B": "Microtubules",
            "C": "Microfilaments",
            "D": "Axonemal doublets"
        },
        "ans": "A",
        "exp": "Intermediate filaments are tough, unpolarized, apolar cords composed of fibrous proteins that provide high mechanical tensile strength without ATP/GTP-driven dynamic instability.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 281,
        "q": "During mitosis, which type of spindle microtubules attach directly to chromosome kinetochores and pull chromatids toward the poles?",
        "opts": {
            "A": "Kinetochore microtubules",
            "B": "Polar (interpolar) microtubules",
            "C": "Astral microtubules",
            "D": "Axonemal microtubules"
        },
        "ans": "A",
        "exp": "Kinetochore microtubules connect the spindle poles to the kinetochores on sister chromatids, exerting tension and shortening to pull chromatids poleward during anaphase A.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 282,
        "q": "Polar (interpolar) microtubules function during anaphase B to:",
        "opts": {
            "A": "Push the two spindle poles further apart by sliding over each other driven by kinesin motor proteins",
            "B": "Shorten and depolymerize to pull chromosomes",
            "C": "Anchor the spindle poles to the cell cortex",
            "D": "Synthesize new ribosomal RNA in the equator"
        },
        "ans": "A",
        "exp": "Interpolar microtubules from opposite poles overlap at the spindle equator; plus-end directed kinesin motors slide them apart, elongating the spindle and separating the poles (anaphase B).",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 283,
        "q": "Astral microtubules extend from the centrosome outward toward the cell cortex to:",
        "opts": {
            "A": "Position and orient the mitotic spindle within the dividing cell",
            "B": "Attach directly to the centromeric DNA of chromosomes",
            "C": "Form the cleavage furrow contractile ring",
            "D": "Transfer vesicles to the trans-Golgi face"
        },
        "ans": "A",
        "exp": "Astral microtubules radiate outward from the centrosomes to the cell cortex, anchoring the spindle and determining its orientation and plane of cell division.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 284,
        "q": "The contractile ring that pinches an animal cell into two daughter cells during cytokinesis is composed of:",
        "opts": {
            "A": "Actin microfilaments and non-muscle myosin II motor proteins",
            "B": "Tubulin microtubules and dynein",
            "C": "Keratin intermediate filaments and desmin",
            "D": "Collagen fibers and elastin"
        },
        "ans": "A",
        "exp": "Cytokinesis in animal cells is driven by a contractile ring assembled just beneath the plasma membrane, composed of anti-parallel actin filaments sliding via myosin II motors.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 285,
        "q": "In a eukaryotic cilium or flagellum, what causes the genetic condition known as Primary Ciliary Dyskinesia (Kartagener's Syndrome)?",
        "opts": {
            "A": "Inherited mutations causing absence or defect of axonemal dynein arms, leading to immotile cilia, chronic respiratory infections, and situs inversus",
            "B": "Overproduction of bacterial flagellin",
            "C": "Complete loss of all mitochondrial cristae",
            "D": "Destruction of the nuclear envelope by lysosomes"
        },
        "ans": "A",
        "exp": "Kartagener's syndrome is an autosomal recessive disorder caused by defective axonemal dynein arms; immotile cilia in airways cause infections, and immotile embryonic nodal cilia cause situs inversus.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 286,
        "q": "In the 9+0 architecture of a centriole, how many total microtubules are present in the peripheral wall?",
        "opts": {
            "A": "27 microtubules (9 triplets \u00d7 3 microtubules each)",
            "B": "18 microtubules (9 doublets \u00d7 2)",
            "C": "20 microtubules (9 doublets + 2 central)",
            "D": "9 microtubules (9 singlets)"
        },
        "ans": "A",
        "exp": "Each centriole consists of 9 evenly spaced peripheral triplets; each triplet consists of 3 microtubules (A, B, and C tubules), giving 9 \u00d7 3 = 27 microtubules.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 287,
        "q": "In the triplet of a centriole, which microtubule is a complete circle consisting of 13 protofilaments?",
        "opts": {
            "A": "A-tubule (while B and C tubules are incomplete C-shaped sharing protofilaments)",
            "B": "C-tubule only",
            "C": "B-tubule only",
            "D": "All three tubules are complete separate circles"
        },
        "ans": "A",
        "exp": "In each triplet, only the innermost A-tubule is a complete cylinder of 13 tubulin protofilaments; the B and C tubules share protofilaments with the preceding tubule.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 288,
        "q": "The amorphous material surrounding the two centrioles that nucleates the growth of spindle microtubules is called the:",
        "opts": {
            "A": "Pericentriolar material (PCM)",
            "B": "Central hub",
            "C": "Cartwheel matrix",
            "D": "Kinetochore disc"
        },
        "ans": "A",
        "exp": "The pericentriolar material (PCM) is an amorphous proteinaceous matrix surrounding the centrioles containing gamma-tubulin ring complexes (gamma-TuRCs) that nucleate microtubules.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 289,
        "q": "Nuclear pore complexes are composed of multiple copies of about 30 different proteins collectively called:",
        "opts": {
            "A": "Nucleoporins (Nups)",
            "B": "Histones",
            "C": "Ribophorins",
            "D": "Tubulins"
        },
        "ans": "A",
        "exp": "Nuclear pore complexes (NPCs) are large macromolecular assemblies built from about 30 distinct proteins termed nucleoporins (Nups).",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 290,
        "q": "The transport of large proteins into the nucleus through nuclear pore complexes requires a specific peptide sequence called the:",
        "opts": {
            "A": "Nuclear Localization Signal (NLS) recognized by importin receptors",
            "B": "KDEL retention tag",
            "C": "Mannose-6-phosphate marker",
            "D": "Stop-transfer membrane anchor"
        },
        "ans": "A",
        "exp": "Nuclear proteins (like DNA polymerases and histones) carry a Nuclear Localization Signal (NLS) rich in basic amino acids (Lys, Arg) that is recognized and bound by importin karyopherins.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 291,
        "q": "The basic histone octamer around which eukaryotic DNA winds to form a nucleosome consists of two copies each of:",
        "opts": {
            "A": "H2A, H2B, H3, and H4",
            "B": "H1, H2A, H2B, and H3",
            "C": "H1, H2, H3, and H4",
            "D": "H2A, H2B, H4, and H5"
        },
        "ans": "A",
        "exp": "The core histone octamer consists of two copies of each of the core histones: (H2A, H2B, H3, H4)2. Histone H1 sits outside as the linker histone.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 292,
        "q": "How many base pairs of DNA are wrapped around the core histone octamer in a typical nucleosome core particle?",
        "opts": {
            "A": "146 base pairs (approximately 1.65 left-handed superhelical turns)",
            "B": "2000 base pairs",
            "C": "20 base pairs",
            "D": "1000 base pairs"
        },
        "ans": "A",
        "exp": "The core particle consists of 146 base pairs of DNA wound in ~1.65 left-handed turns around the histone octamer; including linker DNA, a repeating nucleosome unit is ~200 bp.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 293,
        "q": "Histone proteins are rich in which basic, positively charged amino acid residues that enable tight binding to DNA?",
        "opts": {
            "A": "Lysine and Arginine",
            "B": "Aspartate and Glutamate",
            "C": "Leucine and Isoleucine",
            "D": "Cysteine and Methionine"
        },
        "ans": "A",
        "exp": "Histones are rich in the basic amino acids lysine and arginine, whose positively charged side chains form electrostatic bonds with negatively charged phosphate groups of DNA.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 294,
        "q": "Which histone protein binds to the entry/exit site of DNA on the nucleosome core particle, sealing the nucleosome into a chromatosome?",
        "opts": {
            "A": "Histone H1",
            "B": "Histone H2A",
            "C": "Histone H3",
            "D": "Histone H4"
        },
        "ans": "A",
        "exp": "Histone H1 (linker histone) binds to the entry and exit points of DNA on the nucleosome core, stabilizing the structure and facilitating packaging into the 30-nm chromatin fiber.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 295,
        "q": "In an electron micrograph, interphase chromatin appears as a 'beads-on-a-string' structure. What do the 'beads' represent?",
        "opts": {
            "A": "Nucleosomes",
            "B": "Ribosomes",
            "C": "Centrosomes",
            "D": "Nuclear pores"
        },
        "ans": "A",
        "exp": "The 'beads' on the string represent nucleosomes, with the connecting string being linker DNA.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 296,
        "q": "Constitutive heterochromatin is chromatin that:",
        "opts": {
            "A": "Remains permanently condensed and transcriptionally inactive in all cell types throughout development (e.g., centromeric and telomeric DNA)",
            "B": "Is actively transcribed into mRNA at all times",
            "C": "Transforms into euchromatin upon DNA replication",
            "D": "Is composed strictly of ribosomal RNA"
        },
        "ans": "A",
        "exp": "Constitutive heterochromatin remains permanently condensed and transcriptionally silent in all cells of an organism, containing repetitive non-coding sequences at centromeres and telomeres.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 297,
        "q": "Facultative heterochromatin is exemplified by:",
        "opts": {
            "A": "The inactivated Barr body (inactive X-chromosome) in mammalian female somatic cells",
            "B": "The active beta-globin gene in reticulocytes",
            "C": "The nucleolus during active rRNA transcription",
            "D": "The mitochondrial circular DNA genome"
        },
        "ans": "A",
        "exp": "Facultative heterochromatin can switch between condensed (inactive) and decondensed (active) states, best exemplified by X-chromosome inactivation (Barr body) in mammalian females.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 298,
        "q": "The protective tandem repeat sequence found at the telomeres of human chromosomes to prevent end-to-end fusion and loss of genetic data is:",
        "opts": {
            "A": "5'-TTAGGG-3'",
            "B": "5'-AATAAA-3'",
            "C": "5'-TATAAA-3'",
            "D": "5'-CCCGGG-3'"
        },
        "ans": "A",
        "exp": "Human telomeres consist of thousands of hexanucleotide tandem repeats with the consensus sequence 5'-TTAGGG-3', protected by the shelterin protein complex.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 299,
        "q": "Giant polytene chromosomes (salivary gland chromosomes) found in the larvae of Dipteran insects like Drosophila arise by:",
        "opts": {
            "A": "Repeated rounds of DNA replication without cell division or chromatid separation (endomitosis/endoreduplication)",
            "B": "Multiple chromosomal breakages caused by radiation",
            "C": "Fusion of thousands of distinct haploid sperm cells",
            "D": "Accumulation of excess calcium pectate"
        },
        "ans": "A",
        "exp": "Polytene chromosomes form by repeated cycles of endoreduplication (DNA replication without nuclear or cell division), producing thousands of aligned parallel chromatids with visible bands.",
        "topic": "nucleus",
        "sub": "Giant Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 300,
        "q": "The swollen, puffed regions of polytene chromosomes known as Balbiani rings are active sites of:",
        "opts": {
            "A": "Intense RNA transcription and protein synthesis",
            "B": "DNA degradation and apoptosis",
            "C": "Lipid droplet storage",
            "D": "Centromeric spindle attachment"
        },
        "ans": "A",
        "exp": "Balbiani rings (chromosome puffs) are uncoiled, decondensed loops of polytene chromosomes where intense RNA synthesis (transcription of salivary secretion genes) occurs.",
        "topic": "nucleus",
        "sub": "Giant Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 301,
        "q": "Lampbrush chromosomes, observed in the growing oocytes of amphibians, are characterized by:",
        "opts": {
            "A": "Lateral paired loops extending from chromomeres, actively synthesizing messenger RNA and proteins for embryonic development",
            "B": "Complete absence of histones and nuclear envelope",
            "C": "Direct involvement in binary fission of mitochondria",
            "D": "Presence in bacterial nucleoids"
        },
        "ans": "A",
        "exp": "Lampbrush chromosomes are giant bivalent chromosomes found in diplotene oocytes, featuring paired lateral loops actively transcribing RNA needed for early embryogenesis.",
        "topic": "nucleus",
        "sub": "Giant Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 302,
        "q": "Human chromosomes possess satellites on which specific pair numbers?",
        "opts": {
            "A": "Acrocentric chromosomes 13, 14, 15, 21, and 22",
            "B": "Metacentric chromosomes 1, 2, and 3 only",
            "C": "Sex chromosomes X and Y only",
            "D": "All 23 pairs of chromosomes equally"
        },
        "ans": "A",
        "exp": "In the human karyotype, the five pairs of acrocentric chromosomes (13, 14, 15, 21, and 22) possess secondary constrictions and stalked satellites containing NORs.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 303,
        "q": "The short arm of a sub-metacentric or acrocentric chromosome is conventionally designated by the letter:",
        "opts": {
            "A": "'p' (from French 'petit')",
            "B": "'q'",
            "C": "'s'",
            "D": "'c'"
        },
        "ans": "A",
        "exp": "The short arm is designated 'p' (petit, French for small) and the long arm is designated 'q' (the next letter in the alphabet).",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 304,
        "q": "Which of the following describes the trilaminar ultrastructure of the kinetochore as seen under transmission electron microscopy?",
        "opts": {
            "A": "An inner dense plate, a middle lucent zone, and an outer dense plate that binds microtubules",
            "B": "A single lipid monolayer with embedded chlorophylls",
            "C": "A hollow cylinder made of 9 peripheral triplets",
            "D": "A continuous carbohydrate meshwork of calcium pectate"
        },
        "ans": "A",
        "exp": "The kinetochore displays a trilaminar plate structure under TEM: inner plate attached to centromeric heterochromatin, middle electron-lucent zone, and outer proteinaceous plate docking microtubules.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 305,
        "q": "The nuclear envelope breaks down during which phase of open mitosis in animal cells?",
        "opts": {
            "A": "Prometaphase (following prophase phosphorylation of nuclear lamins)",
            "B": "Telophase",
            "C": "Anaphase B",
            "D": "G1 phase"
        },
        "ans": "A",
        "exp": "Phosphorylation of nuclear lamins by Cyclin B-Cdk1 at the end of prophase causes nuclear lamina disassembly and nuclear envelope breakdown during prometaphase.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 306,
        "q": "During telophase of mitosis, the nuclear envelope reassembles around daughter chromosomes derived primarily from vesicles of the:",
        "opts": {
            "A": "Endoplasmic reticulum",
            "B": "Mitochondrial outer membrane",
            "C": "Tonoplast",
            "D": "Peroxisomes"
        },
        "ans": "A",
        "exp": "During telophase, ER-derived membrane vesicles bind decondensing chromosome surfaces and fuse to regenerate the double-membrane nuclear envelope.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 307,
        "q": "Which organelle is responsible for the beta-oxidation of very-long-chain fatty acids (VLCFA) in animal cells before they are transferred to mitochondria?",
        "opts": {
            "A": "Peroxisomes",
            "B": "Lysosomes",
            "C": "Golgi apparatus",
            "D": "Ribosomes"
        },
        "ans": "A",
        "exp": "Peroxisomes possess enzymes for initial beta-oxidation of very-long-chain fatty acids (>22 carbons), converting them into medium-chain fatty acids for mitochondrial completion.",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 308,
        "q": "Zellweger syndrome is a severe lethal inherited cerebro-hepato-renal disorder caused by:",
        "opts": {
            "A": "Defective peroxisome biogenesis (mutations in PEX genes leading to empty peroxisomal ghosts)",
            "B": "Absence of ribosomes in the cytoplasm",
            "C": "Loss of the nuclear envelope in hepatocytes",
            "D": "Excessive multiplication of chloroplasts"
        },
        "ans": "A",
        "exp": "Zellweger syndrome is a peroxisome biogenesis disorder caused by PEX gene mutations that prevent import of peroxisomal matrix enzymes, accumulating toxic VLCFAs.",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 309,
        "q": "Which of the following cellular structures lacks enzymatic proteins completely?",
        "opts": {
            "A": "Middle lamella",
            "B": "Inner mitochondrial membrane",
            "C": "Lysosomal matrix",
            "D": "Chloroplast stroma"
        },
        "ans": "A",
        "exp": "The middle lamella is an extracellular cementing layer of calcium and magnesium pectate; unlike membranes and organellar matrices, it does not contain catalytic enzymes.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 310,
        "q": "In which plant tissue would you expect to find the highest abundance of glyoxysomes?",
        "opts": {
            "A": "Endosperm or cotyledons of germinating oil-storing seeds (e.g., castor, sunflower)",
            "B": "Green photosynthetic mesophyll of mature leaves",
            "C": "Apical meristem of onion root tips",
            "D": "Petals of rose flowers"
        },
        "ans": "A",
        "exp": "Glyoxysomes are specialized microbodies found in fat-storing tissues of germinating seeds that convert fatty acids to succinate and glucose via the glyoxylate cycle.",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 311,
        "q": "New phospholipid molecules for membrane biogenesis are synthesized by enzymes localized on the cytosolic leaflet of the:",
        "opts": {
            "A": "Smooth endoplasmic reticulum membrane",
            "B": "Mitochondrial cristae",
            "C": "Inner nuclear membrane",
            "D": "Tonoplast"
        },
        "ans": "A",
        "exp": "Phospholipid synthesis occurs on the cytosolic surface of the smooth ER; flippases and scramblases then equilibrate lipids across both leaflets of the bilayer.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 312,
        "q": "The enzyme scramblase functions in the endoplasmic reticulum membrane to:",
        "opts": {
            "A": "Non-specifically flip phospholipids between both bilayer leaflets to ensure symmetric membrane expansion",
            "B": "Hydrolyze ATP to export proteins into the cytoplasm",
            "C": "Phosphorylate mannose residues on lysosomal enzymes",
            "D": "Cross-link cellulose microfibrils in the cell wall"
        },
        "ans": "A",
        "exp": "Scramblase is an ATP-independent translocator in the ER that rapidly equilibrates phospholipids across both leaflets, allowing symmetrical membrane growth.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 313,
        "q": "In the plasma membrane, flippases are ATP-dependent enzymes that specifically transport:",
        "opts": {
            "A": "Phosphatidylserine and phosphatidylethanolamine from the outer leaflet to the inner cytosolic leaflet",
            "B": "Cholesterol into the extracellular fluid",
            "C": "Glycoproteins into the nuclear pore",
            "D": "Glucose out of the cell against its gradient"
        },
        "ans": "A",
        "exp": "P-type ATPase flippases actively maintain membrane asymmetry by pumping phosphatidylserine and phosphatidylethanolamine to the inner (cytoplasmic) leaflet.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 314,
        "q": "When a mammalian cell undergoes apoptosis (programmed cell death), which phospholipid 'flips' to the outer leaflet, serving as an 'eat-me' signal for phagocytes?",
        "opts": {
            "A": "Phosphatidylserine",
            "B": "Phosphatidylcholine",
            "C": "Cardiolipin",
            "D": "Sphingomyelin"
        },
        "ans": "A",
        "exp": "Externalization of negatively charged phosphatidylserine to the outer surface of apoptotic cells is recognized by phagocyte scavenger receptors, triggering phagocytosis.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 315,
        "q": "Which type of eukaryotic cell exhibits multiple nuclei per cell due to cell fusion (syncytium)?",
        "opts": {
            "A": "Skeletal muscle fibers",
            "B": "Mature erythrocytes",
            "C": "Cardiac muscle cells",
            "D": "Unicellular Chlamydomonas"
        },
        "ans": "A",
        "exp": "Skeletal muscle fibers are syncytial cells formed by the embryonic fusion of thousands of individual myoblasts, containing hundreds of peripherally located nuclei.",
        "topic": "nucleus",
        "sub": "Cell Diversity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 316,
        "q": "A coenocytic condition, in which a multinucleated protoplast is produced by repeated nuclear divisions without cytokinesis, is seen in:",
        "opts": {
            "A": "Free-nuclear endosperm of coconut and the fungus Rhizopus",
            "B": "Human red blood cells",
            "C": "Sieve tube elements of phloem",
            "D": "Mesophyll cells of leaves"
        },
        "ans": "A",
        "exp": "Free-nuclear endosperm of coconut (liquid coconut water) and certain fungal hyphae (coenocytic hyphae) arise by repeated karyokinesis without cytokinesis.",
        "topic": "nucleus",
        "sub": "Cell Diversity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 317,
        "q": "Which plant organelle is functionally and structurally comparable to the animal lysosome in degrading cellular waste and macromolecules?",
        "opts": {
            "A": "Central sap vacuole",
            "B": "Amyloplast",
            "C": "Peroxisome",
            "D": "Stroma lamella"
        },
        "ans": "A",
        "exp": "The central vacuole of plant cells contains acid hydrolases and acidic sap (pH 5.0), performing lytic and waste-degrading functions equivalent to animal lysosomes.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 318,
        "q": "The transit peptide present on nuclear-encoded precursor proteins destined for chloroplast stroma is cleaved off by:",
        "opts": {
            "A": "Stromal processing peptidase (SPP) inside the stroma",
            "B": "Lysosomal proteases in the cytosol",
            "C": "Signal peptidase in the ER lumen",
            "D": "Mitochondrial caspase"
        },
        "ans": "A",
        "exp": "After translocation through TOC and TIC translocons, the N-terminal transit peptide of chloroplast proteins is cleaved by stromal processing peptidase (SPP).",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 319,
        "q": "Mitochondrial presequence-directed import of cytoplasmic proteins into the matrix occurs via which two multi-protein translocase complexes?",
        "opts": {
            "A": "TOM complex in the outer membrane and TIM complex in the inner membrane",
            "B": "Sec61 translocon and ribophorin complex",
            "C": "TOC and TIC complexes",
            "D": "Clathrin and adaptin complexes"
        },
        "ans": "A",
        "exp": "Protein import into mitochondria requires TOM (Translocase of Outer Membrane) and TIM (Translocase of Inner Membrane) multiprotein complexes.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 320,
        "q": "What is the structural consequence if the kinetochore fails to attach to spindle microtubules during metaphase?",
        "opts": {
            "A": "The Spindle Assembly Checkpoint (SAC) remains active, preventing anaphase onset and chromosome segregation",
            "B": "The chromosome is immediately degraded by cytoplasmic nucleases",
            "C": "The nuclear envelope immediately reforms around that chromosome",
            "D": "The centrioles replicate a second time in metaphase"
        },
        "ans": "A",
        "exp": "Unattached kinetochores generate the checkpoint signal (MAD2/BUB proteins) that inhibits the Anaphase-Promoting Complex/Cyclosome (APC/C), halting the cell at metaphase.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 321,
        "q": "Which electron microscope technique was critical for Singer and Nicolson to observe the intramembrane protein particles protruding from split lipid bilayers?",
        "opts": {
            "A": "Freeze-fracture electron microscopy",
            "B": "Phase-contrast light microscopy",
            "C": "Fluorescence recovery after photobleaching",
            "D": "Gram staining technique"
        },
        "ans": "A",
        "exp": "Freeze-fracture electron microscopy splits the frozen lipid bilayer along its hydrophobic plane, revealing integral intramembrane protein particles protruding from P- and E-faces.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 322,
        "q": "Phase-contrast microscopy is uniquely advantageous in cell biology because it enables:",
        "opts": {
            "A": "Observation of living unstained cells and organellar dynamics without fixing or killing them",
            "B": "Resolution of individual 2 nm DNA strands in color",
            "C": "Direct visualization of radioactive isotopes",
            "D": "Measuring the molecular weight of proteins"
        },
        "ans": "A",
        "exp": "Phase-contrast microscopy converts phase shifts in light passing through transparent living cellular structures into brightness differences, allowing visualization of living cells without staining.",
        "topic": "organelles",
        "sub": "Overview of Cell",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 323,
        "q": "Transmission electron microscopy (TEM) provides much higher resolving power than light microscopy primarily because:",
        "opts": {
            "A": "The wavelength of high-energy electron beams is roughly 100,000 times shorter than visible light photons",
            "B": "Electrons travel at the speed of sound",
            "C": "Glass lenses in light microscopes cannot focus photons",
            "D": "Biological specimens do not absorb electrons"
        },
        "ans": "A",
        "exp": "According to Abbe's equation, resolution limit is proportional to wavelength (d = 0.61 lambda / NA); the ultra-short de Broglie wavelength of accelerated electrons yields sub-nanometer resolution.",
        "topic": "organelles",
        "sub": "Overview of Cell",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 324,
        "q": "Which cellular organelle is responsible for synthesizing the precursor ribosomal RNAs (28S, 18S, 5.8S)?",
        "opts": {
            "A": "Nucleolus",
            "B": "Endoplasmic reticulum",
            "C": "Golgi apparatus",
            "D": "Centrosome"
        },
        "ans": "A",
        "exp": "The nucleolus is the site of transcription of 45S pre-rRNA by RNA polymerase I and its processing into 28S, 18S, and 5.8S rRNAs.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 325,
        "q": "In eukaryotic cells, the 5S rRNA subunit of the 60S ribosome is transcribed by:",
        "opts": {
            "A": "RNA polymerase III in the nucleoplasm",
            "B": "RNA polymerase I in the nucleolus",
            "C": "RNA polymerase II in the cytoplasm",
            "D": "Mitochondrial RNA polymerase"
        },
        "ans": "A",
        "exp": "Unlike other rRNAs transcribed in the nucleolus by Pol I, 5S rRNA is transcribed by RNA polymerase III outside the nucleolus in the nucleoplasm.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 326,
        "q": "The nucleolus disappears during which mitotic stage and reappears during which stage?",
        "opts": {
            "A": "Disappears during prophase and reappears during telophase",
            "B": "Disappears during metaphase and reappears during anaphase",
            "C": "Disappears during anaphase and reappears during cytokinesis",
            "D": "Remains intact throughout all mitotic stages"
        },
        "ans": "A",
        "exp": "The nucleolus disassembles during late prophase as transcription stops and chromosomes condense, and reforms during telophase at the nucleolar organizer regions.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 327,
        "q": "Which organelle is enriched in osteoclasts to facilitate bone resorption by secreting acid and acid hydrolases?",
        "opts": {
            "A": "Lysosomes",
            "B": "Chloroplasts",
            "C": "Amyloplasts",
            "D": "Peroxisomes"
        },
        "ans": "A",
        "exp": "Osteoclasts utilize specialized lysosomal exocytosis and vacuolar H+-ATPases to secrete protons and cathepsin K onto the bone surface, degrading mineral and collagen matrix.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 328,
        "q": "In plant cells, which organelle maintains cell turgor pressure that provides mechanical support to non-woody aerial structures?",
        "opts": {
            "A": "Central vacuole",
            "B": "Centriole",
            "C": "Mitochondria",
            "D": "Golgi body"
        },
        "ans": "A",
        "exp": "The high osmotic pressure of solutes in the central sap vacuole draws water in, generating hydrostatic turgor pressure against the cell wall that keeps herbaceous plant stems upright.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 329,
        "q": "The space inside the inner mitochondrial membrane containing dissolved Krebs cycle enzymes, ribosomes, and DNA is the:",
        "opts": {
            "A": "Mitochondrial matrix",
            "B": "Perimitochondrial space",
            "C": "Crista lumen",
            "D": "Cytosol"
        },
        "ans": "A",
        "exp": "The aqueous interior compartment bounded by the inner mitochondrial membrane is the mitochondrial matrix.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 330,
        "q": "What type of DNA topology is characteristic of both chloroplast and mitochondrial genomes?",
        "opts": {
            "A": "Covalently closed, circular double-stranded DNA",
            "B": "Linear single-stranded DNA with telomeres",
            "C": "Segmented double-stranded linear RNA",
            "D": "Branched triple-helical DNA"
        },
        "ans": "A",
        "exp": "Both plastids and mitochondria harbor circular, closed, double-stranded DNA molecules lacking histone coats, reflecting their prokaryotic evolutionary ancestry.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 331,
        "q": "Which of the following cellular components is found in cyanobacteria, green algae, and vascular land plants?",
        "opts": {
            "A": "Thylakoid membranes with Chlorophyll a",
            "B": "80S cytoplasmic ribosomes",
            "C": "Membrane-bound chloroplasts with double envelopes",
            "D": "Nuclear envelope with pore complexes"
        },
        "ans": "A",
        "exp": "Chlorophyll a and thylakoid membranes are present in cyanobacteria, green algae, and land plants, carrying out oxygenic photosynthesis.",
        "topic": "prokaryote",
        "sub": "Chromatophores",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 332,
        "q": "In a plant cell wall, what is the role of expansin proteins?",
        "opts": {
            "A": "They loosen non-covalent bonds between cellulose microfibrils and hemicellulose under acidic pH, facilitating cell wall expansion",
            "B": "They catalyze ATP hydrolysis to synthesize cellulose polymers",
            "C": "They polymerize lignin in secondary walls",
            "D": "They hydrolyze pectins to cause cell death"
        },
        "ans": "A",
        "exp": "Expansins are plant cell wall proteins that break hydrogen bonds between cellulose microfibrils and matrix glucans at low pH ('acid growth'), permitting wall creep and cell enlargement.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 333,
        "q": "Which of the following substances can freely diffuse through the lipid bilayer by simple passive diffusion?",
        "opts": {
            "A": "Small non-polar hydrophobic molecules like O2, CO2, and steroid hormones",
            "B": "Large polar polymers like serum albumin",
            "C": "Hydrated inorganic ions like Na+ and Cl-",
            "D": "Disaccharides like sucrose"
        },
        "ans": "A",
        "exp": "Small nonpolar uncharged molecules (O2, CO2, N2) and lipid-soluble steroids dissolve readily in the hydrophobic core of the bilayer and diffuse freely down concentration gradients.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 334,
        "q": "The Golgi apparatus in plant cells is often represented by multiple, dispersed individual stacks called:",
        "opts": {
            "A": "Dictyosomes",
            "B": "Polysomes",
            "C": "Centrosomes",
            "D": "Mesosomes"
        },
        "ans": "A",
        "exp": "In plant cells and lower invertebrates, the Golgi apparatus consists of hundreds of separate, unfused sub-units or stacks scattered throughout the cytoplasm, termed dictyosomes.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 335,
        "q": "Which organelle serves as the primary site for the assembly of core oligosaccharides onto the lipid carrier dolichol phosphate?",
        "opts": {
            "A": "Rough endoplasmic reticulum",
            "B": "Golgi trans-face",
            "C": "Mitochondrial outer membrane",
            "D": "Peroxisomal membrane"
        },
        "ans": "A",
        "exp": "The 14-sugar core oligosaccharide for N-linked glycosylation is assembled on the polyisoprenoid lipid carrier dolichol phosphate on the ER membrane before transfer to nascent polypeptide asparagine residues.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 336,
        "q": "A drug that specifically destroys the function of the Golgi apparatus will most directly inhibit:",
        "opts": {
            "A": "Packaging, glycosylation, and secretion of proteins and lysosomes",
            "B": "Synthesis of mRNA on the DNA template",
            "C": "Hydrolysis of glucose in glycolysis",
            "D": "Replication of chromosomes in S-phase"
        },
        "ans": "A",
        "exp": "The Golgi apparatus is the packaging and sorting center for secretory proteins, membrane proteins, and lysosomal enzymes; disrupting it blocks secretion and processing.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 337,
        "q": "The outer face of the bacterial cell wall in Gram-negative bacteria is distinguished by the presence of:",
        "opts": {
            "A": "Lipopolysaccharide (LPS) outer membrane with endotoxin lipid A",
            "B": "A thick single layer of teichoic acids",
            "C": "Cellulose and lignin microfibrils",
            "D": "A monolayer of cholesterol molecules"
        },
        "ans": "A",
        "exp": "Gram-negative bacteria possess an asymmetrical outer membrane containing lipopolysaccharides (LPS) in its outer leaflet, conferring endotoxin activity and shielding the thin peptidoglycan layer.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 338,
        "q": "Gram-positive bacterial cell walls contain which unique anionic polymers embedded in their thick peptidoglycan layer?",
        "opts": {
            "A": "Teichoic acids and lipoteichoic acids",
            "B": "Lipopolysaccharides (LPS)",
            "C": "Galactans and mannans",
            "D": "Chitin and beta-glucans"
        },
        "ans": "A",
        "exp": "Gram-positive cell walls feature a thick multilayered peptidoglycan meshwork laced with teichoic and lipoteichoic acid polymers that bind magnesium and provide antigenic specificity.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 339,
        "q": "Mesosomes do NOT perform which of the following activities?",
        "opts": {
            "A": "Meiotic spindle formation",
            "B": "Respiration",
            "C": "DNA replication assistance",
            "D": "Cell wall material secretion"
        },
        "ans": "A",
        "exp": "Prokaryotes lack spindle apparatus and do not undergo meiosis; mesosomes assist in binary fission, DNA distribution, respiration, and secretion.",
        "topic": "prokaryote",
        "sub": "Mesosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 340,
        "q": "Which structure prevents plant cells from swelling to the point of lysis when immersed in pure distilled water?",
        "opts": {
            "A": "The rigid cellulosic cell wall exerting wall pressure (turgor resistance)",
            "B": "The contractile vacuole pumping water out",
            "C": "The opening of nuclear pores",
            "D": "The degradation of the plasma membrane"
        },
        "ans": "A",
        "exp": "In hypotonic water, plant cells take up water by osmosis until internal hydrostatic turgor pressure matches the rigid elastic counter-pressure of the cell wall (wall pressure), preventing bursting.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 341,
        "q": "The nucleolus is absent or poorly developed in which of the following cell types?",
        "opts": {
            "A": "Sperm cells and mature red blood cells (cells with low or no protein synthesis)",
            "B": "Actively dividing onion root tip cells",
            "C": "Hepatic parenchymal cells",
            "D": "Silk gland cells of silkworm"
        },
        "ans": "A",
        "exp": "Cells that are metabolically quiescent or do not synthesize proteins (like spermatozoa and mature RBCs) have either no nucleolus or extremely tiny, inactive nucleoli.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 342,
        "q": "The diameter of a nuclear pore complex in eukaryotic cells is approximately:",
        "opts": {
            "A": "80 to 100 nm",
            "B": "0.5 to 1.0 \u00b5m",
            "C": "2 to 3 nm",
            "D": "10 to 20 \u00b5m"
        },
        "ans": "A",
        "exp": "Nuclear pore complexes have an overall octagonal diameter of approximately 100 nm, with an aqueous central transport channel of ~40\u201350 nm.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 343,
        "q": "Which cytoskeletal filament is responsible for the formation of the nuclear lamina directly underlying the inner nuclear membrane?",
        "opts": {
            "A": "Intermediate filaments (lamin A, B, and C)",
            "B": "Microtubules of alpha/beta tubulin",
            "C": "Microfilaments of actin",
            "D": "Collagen fibers"
        },
        "ans": "A",
        "exp": "The nuclear lamina is an orthogonal meshwork of type V intermediate filaments composed of lamins A, B, and C that stabilizes the nuclear envelope.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 344,
        "q": "The primary constriction of a chromosome is characterized by:",
        "opts": {
            "A": "Heterochromatic, repetitive alpha-satellite DNA that organizes the kinetochore",
            "B": "A high rate of ribosomal RNA transcription",
            "C": "Absence of any centromeric proteins",
            "D": "Presence of terminal telomeric cap loops"
        },
        "ans": "A",
        "exp": "Centromeres (primary constrictions) contain tandemly repeated alpha-satellite DNA packaged into CENP-A containing specialized nucleosomes that direct kinetochore assembly.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 345,
        "q": "Chromosomes are classified into four morphological types based on the:",
        "opts": {
            "A": "Position of the centromere (primary constriction)",
            "B": "Number of nucleoli attached to them",
            "C": "Amount of satellite DNA present",
            "D": "Number of telomeres present"
        },
        "ans": "A",
        "exp": "Based on the position of the centromere, chromosomes are classified into four types: metacentric, sub-metacentric, acrocentric, and telocentric.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 346,
        "q": "In which type of chromosome is one arm so extremely short that it appears as a tiny knob, while the other arm is very long?",
        "opts": {
            "A": "Acrocentric",
            "B": "Metacentric",
            "C": "Sub-metacentric",
            "D": "Telocentric"
        },
        "ans": "A",
        "exp": "In acrocentric chromosomes, the centromere is situated very close to one end, producing one extremely short arm (p-arm) and one very long arm (q-arm).",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 347,
        "q": "Which organelle is considered the 'clearing house' or 'suicide bag' of the animal cell?",
        "opts": {
            "A": "Lysosome",
            "B": "Mitochondrion",
            "C": "Centrosome",
            "D": "Endoplasmic reticulum"
        },
        "ans": "A",
        "exp": "Lysosomes contain powerful acid hydrolases; if released in large quantities during cell injury or programmed death, they digest the cell from within, earning the moniker 'suicide bags'.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 348,
        "q": "The fluid content of the plant vacuole is technically referred to as:",
        "opts": {
            "A": "Cell sap",
            "B": "Cytoplasm",
            "C": "Nucleoplasm",
            "D": "Protoplast"
        },
        "ans": "A",
        "exp": "The solution filling the central vacuole is termed cell sap, containing water, minerals, sugars, organic acids, pigments, and excretory waste products.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 349,
        "q": "Which of the following functions is NOT performed by the smooth endoplasmic reticulum?",
        "opts": {
            "A": "Synthesis of ribosomal RNA and translation of polypeptide chains",
            "B": "Synthesis of neutral lipids and phospholipids",
            "C": "Synthesis of steroid hormones in gonads and adrenal cortex",
            "D": "Sequestration and release of calcium in muscle cells"
        },
        "ans": "A",
        "exp": "Ribosomal RNA synthesis and protein translation are functions of the nucleolus and ribosomes (RER), not the smooth ER.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 350,
        "q": "The major site for the synthesis of ribosomal RNA (rRNA) inside the eukaryotic cell is the:",
        "opts": {
            "A": "Nucleolus",
            "B": "Golgi apparatus",
            "C": "Endoplasmic reticulum",
            "D": "Centrosome"
        },
        "ans": "A",
        "exp": "The nucleolus is the active site for the transcription and processing of rRNA precursors and assembly of pre-ribosomal subunits.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 351,
        "q": "Which of the following statements about mitochondria is INCORRECT?",
        "opts": {
            "A": "The inner membrane is completely smooth and permeable to all proteins",
            "B": "Mitochondria possess their own 70S ribosomes",
            "C": "Mitochondria contain circular double-stranded DNA",
            "D": "Mitochondria produce ATP by aerobic cellular respiration"
        },
        "ans": "A",
        "exp": "The inner membrane is NOT smooth or freely permeable; it is extensively folded into cristae and is strictly selectively permeable, maintaining the proton gradient.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 352,
        "q": "In a chloroplast, the dark reaction (enzymatic fixation of CO2 into carbohydrates) occurs in the:",
        "opts": {
            "A": "Stroma",
            "B": "Thylakoid lumen",
            "C": "Grana membranes",
            "D": "Intermembrane space"
        },
        "ans": "A",
        "exp": "The dark reaction of photosynthesis (Calvin cycle) occurs in the stroma where RuBisCO and other soluble carbon-fixation enzymes reside.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 353,
        "q": "Which of the following leucoplasts is responsible for storing reserves of aleurone protein in cereals?",
        "opts": {
            "A": "Aleuroplast (proteinoplast)",
            "B": "Amyloplast",
            "C": "Elaioplast",
            "D": "Chromoplast"
        },
        "ans": "A",
        "exp": "Aleuroplasts (proteinoplasts) are leucoplasts specialized for storing protein granules, prominently found in the aleurone layer of seeds like maize.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 354,
        "q": "Fat-soluble pigments that impart bright yellow, orange, and red coloration to flowers and fruits are:",
        "opts": {
            "A": "Carotenoids (carotenes and xanthophylls) located in chromoplasts",
            "B": "Anthocyanins located in the cell wall",
            "C": "Chlorophylls located in the nucleoplasm",
            "D": "Phycobilins dissolved in the mitochondrial matrix"
        },
        "ans": "A",
        "exp": "Carotenoids (such as carotene and xanthophyll) are lipid-soluble pigments stored in chromoplasts, giving fruits like tomatoes and carrots their vivid color.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 355,
        "q": "Which organelle is directly responsible for organizing the basal bodies that anchor eukaryotic cilia and flagella?",
        "opts": {
            "A": "Centrioles",
            "B": "Kinetochores",
            "C": "Centromeres",
            "D": "Dictyosomes"
        },
        "ans": "A",
        "exp": "Basal bodies develop from centrioles; during ciliogenesis, centrioles migrate to the apical plasma membrane and template axoneme growth.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 356,
        "q": "Centrioles replicate during which stage of the cell cycle?",
        "opts": {
            "A": "S phase",
            "B": "G1 phase",
            "C": "G2 phase",
            "D": "M phase"
        },
        "ans": "A",
        "exp": "In animal cells, centrioles duplicate in the cytoplasm during S phase of interphase, synchronized with nuclear DNA replication.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 357,
        "q": "The peripheral microtubule doublets in eukaryotic cilia and flagella are held in place and linked to each other by:",
        "opts": {
            "A": "Nexin protein links",
            "B": "Myosin filaments",
            "C": "Actin cables",
            "D": "Histone octamers"
        },
        "ans": "A",
        "exp": "Nexin bridges interconnect adjacent outer microtubule doublets, limiting sliding distance and causing the axoneme to bend.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 358,
        "q": "Which of the following cellular components is made of the protein flagellin?",
        "opts": {
            "A": "Bacterial flagellum filament",
            "B": "Eukaryotic flagellar axoneme",
            "C": "Centriolar triplet microtubules",
            "D": "Mitotic spindle fibers"
        },
        "ans": "A",
        "exp": "The bacterial flagellar filament is assembled from flagellin protein subunits, whereas eukaryotic flagella and spindle fibers are composed of tubulin.",
        "topic": "prokaryote",
        "sub": "Motility",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 359,
        "q": "The central tubules in the eukaryotic 9+2 axoneme are enclosed by a:",
        "opts": {
            "A": "Central sheath connected to peripheral doublets by radial spokes",
            "B": "Double lipid unit membrane",
            "C": "Lignified cell wall",
            "D": "Chitinous ring"
        },
        "ans": "A",
        "exp": "The central pair of singlet microtubules is enclosed by a proteinaceous central sheath, which is connected to each of the 9 outer doublets by radial spokes.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 360,
        "q": "Which organelle is responsible for lipid peroxidation protection and photorespiratory glycolate oxidation in green leaf cells?",
        "opts": {
            "A": "Peroxisome",
            "B": "Lysosome",
            "C": "Vacuole",
            "D": "Centrosome"
        },
        "ans": "A",
        "exp": "Leaf peroxisomes contain glycolate oxidase and catalase, functioning in the photorespiratory pathway and detoxifying H2O2.",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 361,
        "q": "A mature plant cell differs from a mature animal cell in possessing:",
        "opts": {
            "A": "A large central vacuole, cellulosic cell wall, and plastids",
            "B": "Centrioles and lysosomes",
            "C": "80S ribosomes and mitochondria",
            "D": "A nuclear envelope and chromatin"
        },
        "ans": "A",
        "exp": "Plant cells are uniquely characterized by the presence of a rigid cell wall, a large central sap vacuole, and plastids, while lacking centrioles.",
        "topic": "organelles",
        "sub": "Overview of Cell",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 362,
        "q": "The core protein component of the eukaryotic cytoskeleton that forms 25-nm hollow cylinders is:",
        "opts": {
            "A": "Tubulin",
            "B": "Actin",
            "C": "Keratin",
            "D": "Myosin"
        },
        "ans": "A",
        "exp": "Tubulin (alpha and beta heterodimers) polymerizes to form hollow cylindrical microtubules with an outer diameter of ~25 nm.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 363,
        "q": "During muscle contraction, thin filaments that slide past thick myosin filaments are polymers of:",
        "opts": {
            "A": "Actin microfilaments",
            "B": "Tubulin microtubules",
            "C": "Lamin intermediate filaments",
            "D": "Collagen fibers"
        },
        "ans": "A",
        "exp": "The thin filaments of muscle sarcomeres are composed of actin microfilaments associated with tropomyosin and troponin.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 364,
        "q": "Which of the following cellular structures is bounded by a single unit membrane?",
        "opts": {
            "A": "Lysosome, peroxisome, and vacuole",
            "B": "Mitochondrion, chloroplast, and nucleus",
            "C": "Ribosome, centrosome, and nucleolus",
            "D": "Cell wall, middle lamella, and glycocalyx"
        },
        "ans": "A",
        "exp": "Lysosomes, peroxisomes, and vacuoles are single-membrane bound organelles; mitochondria, chloroplasts, and nuclei are double-membrane bound; ribosomes and centrosomes lack membranes.",
        "topic": "organelles",
        "sub": "Overview of Cell",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 365,
        "q": "Which organelle is bounded by a double unit membrane?",
        "opts": {
            "A": "Mitochondrion, chloroplast, and nucleus",
            "B": "Lysosome, vacuole, and peroxisome",
            "C": "Ribosome and nucleolus",
            "D": "Endoplasmic reticulum and Golgi apparatus"
        },
        "ans": "A",
        "exp": "Mitochondria, chloroplasts, and the nucleus are bounded by double membranes (envelopes).",
        "topic": "organelles",
        "sub": "Overview of Cell",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 366,
        "q": "The non-membranous organelle found in all living cells (prokaryotic and eukaryotic) is the:",
        "opts": {
            "A": "Ribosome",
            "B": "Centriole",
            "C": "Mitochondrion",
            "D": "Lysosome"
        },
        "ans": "A",
        "exp": "Ribosomes are ubiquitous ribonucleoprotein particles present in every cellular organism, both prokaryotes and eukaryotes.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 367,
        "q": "Which cell type in the human body lacks a nucleus at maturity?",
        "opts": {
            "A": "Erythrocyte (red blood cell)",
            "B": "Lymphocyte",
            "C": "Neuron",
            "D": "Osteocyte"
        },
        "ans": "A",
        "exp": "Mature human erythrocytes extrude their nucleus during erythropoiesis to maximize intracellular space for hemoglobin.",
        "topic": "nucleus",
        "sub": "Cell Diversity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 368,
        "q": "Which vascular plant cell type lacks a nucleus at functional maturity but remains alive through connection to a nucleated companion cell?",
        "opts": {
            "A": "Phloem sieve tube element",
            "B": "Xylem vessel element",
            "C": "Xylem tracheid",
            "D": "Sclerenchyma fiber"
        },
        "ans": "A",
        "exp": "Mature sieve tube elements lack a nucleus, vacuole, and ribosomes, but remain metabolically viable through plasmodesmatal connections with nucleated companion cells.",
        "topic": "nucleus",
        "sub": "Cell Diversity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 369,
        "q": "The outer surface of the rough endoplasmic reticulum appears granular under electron microscopy because of:",
        "opts": {
            "A": "Ribosomes attached to its cytosolic surface",
            "B": "Lipid droplets adhering to the lumen",
            "C": "Peroxisomal crystals embedded in the bilayer",
            "D": "DNA loops projecting from the nucleus"
        },
        "ans": "A",
        "exp": "Rough ER owes its rough, granular appearance to the numerous 80S ribosomes bound to ribophorins on its outer cytoplasmic leaflet.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 370,
        "q": "The transport of secretory proteins from the rough ER lumen through the Golgi apparatus and into secretory vesicles is called:",
        "opts": {
            "A": "The secretory pathway (exocytosis)",
            "B": "Endocytosis",
            "C": "Pinocytosis",
            "D": "Phagocytosis"
        },
        "ans": "A",
        "exp": "The secretory pathway directs newly synthesized proteins from RER -> transport vesicles -> Golgi apparatus -> secretory vesicles -> plasma membrane exocytosis.",
        "topic": "organelles",
        "sub": "Endomembrane System",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 371,
        "q": "The pH of the lysosomal interior is maintained at approximately:",
        "opts": {
            "A": "5.0",
            "B": "7.4",
            "C": "8.5",
            "D": "1.0"
        },
        "ans": "A",
        "exp": "The lysosomal interior is acidic, with a pH of ~4.5 to 5.0, optimal for acid hydrolases.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 372,
        "q": "The discovery of the fluid mosaic model superseded earlier models because it recognized that:",
        "opts": {
            "A": "Membrane lipids and proteins are in a dynamic, mobile, quasi-fluid state rather than static rigid sheets",
            "B": "Proteins form continuous solid layers on both surfaces of the lipid core",
            "C": "The cell membrane contains no lipids whatsoever",
            "D": "Lipids are covalently bonded to each other forming a rigid crystal"
        },
        "ans": "A",
        "exp": "Earlier sandwich models assumed a rigid protein-lipid-protein laminate, whereas Singer and Nicolson proved the dynamic, quasi-fluid lateral mobility of lipids and proteins.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 373,
        "q": "Which of the following carbohydrates is found covalently linked to the outer surface of plasma membrane proteins?",
        "opts": {
            "A": "Oligosaccharide chains forming glycoproteins",
            "B": "Cellulose polymers",
            "C": "Glycogen granules",
            "D": "Chitin plates"
        },
        "ans": "A",
        "exp": "Branching oligosaccharide chains are attached to extracellular domains of membrane proteins and lipids, constituting the glycocalyx.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 374,
        "q": "Which of the following is an active transport mechanism that does NOT hydrolyze ATP directly, but uses a proton or ion gradient?",
        "opts": {
            "A": "Secondary active transport (co-transport)",
            "B": "Primary active transport",
            "C": "Simple diffusion",
            "D": "Facilitated diffusion through aquaporins"
        },
        "ans": "A",
        "exp": "Secondary active transport utilizes the electrochemical potential energy stored in an ion gradient (established by a primary ATP-driven pump) to move solutes against their gradient.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 375,
        "q": "The internal membrane system of chloroplasts composed of thylakoids and stroma lamellae is functionally responsible for:",
        "opts": {
            "A": "Trapping light energy and synthesizing ATP and NADPH (light reactions)",
            "B": "Fixing CO2 into glucose via the Calvin cycle",
            "C": "Breaking down glucose into pyruvate via glycolysis",
            "D": "Storing lipid droplets as aleuroplasts"
        },
        "ans": "A",
        "exp": "Thylakoid membranes harbor chlorophylls, carotenoids, electron transport complexes, and ATP synthase, carrying out the light reactions of photosynthesis.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
