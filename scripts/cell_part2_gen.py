# Cell Part 2: Q126 to Q250 (Medium)
import json

def get_part2_raw():
    return [
    {
        "q_num": 126,
        "q": "Schleiden and Schwann together formulated the cell theory, but their theory initially did not explain:",
        "opts": {
            "A": "How new cells were formed from existing cells",
            "B": "That all living organisms are composed of cells",
            "C": "That the cell wall is unique to plant cells",
            "D": "That animal cells have an outer plasma membrane"
        },
        "ans": "A",
        "exp": "Schleiden and Schwann formulated the cell theory, but this theory did not explain as to how new cells were formed. Rudolf Virchow in 1855 first explained that cells divide and new cells are formed from pre-existing cells.",
        "topic": "prokaryote",
        "sub": "Cell Theory",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 127,
        "q": "Which observation led Theodor Schwann to conclude that the presence of a cell wall is a unique character of plant cells?",
        "opts": {
            "A": "Comparative histological studies of both plant and animal tissues",
            "B": "Observation of bacterial division under electron microscopy",
            "C": "Biochemical isolation of cellulose from cell walls",
            "D": "Genetic crosses between plants and animals"
        },
        "ans": "A",
        "exp": "Schwann studied both animal tissues (noting a thin outer membrane) and plant tissues, concluding on the basis of plant studies that the presence of cell wall is a unique character of plant cells.",
        "topic": "prokaryote",
        "sub": "Cell Theory",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 128,
        "q": "In prokaryotes, which layer of the cell envelope directly determines the shape of the cell and prevents it from bursting in a hypotonic medium?",
        "opts": {
            "A": "Peptidoglycan cell wall",
            "B": "Polysaccharide capsule",
            "C": "Phospholipid bilayer",
            "D": "Periplasmic gel"
        },
        "ans": "A",
        "exp": "The rigid peptidoglycan cell wall provides structural integrity, maintains shape, and prevents lysis when internal turgor pressure rises in hypotonic environments.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 129,
        "q": "Which of the following is chemically true regarding the capsule found in many pathogenic bacteria?",
        "opts": {
            "A": "It consists of a gummy polysaccharide or polypeptide layer outside the cell wall",
            "B": "It is composed strictly of a phospholipid bilayer with sterols",
            "C": "It is an extension of the inner mitochondrial membrane",
            "D": "It is made of crystalline cellulose microfibrils"
        },
        "ans": "A",
        "exp": "The bacterial capsule is a thick, highly organized glycocalyx made predominantly of polysaccharides (or polypeptides in Bacillus anthracis) that shields bacteria from phagocytosis and desiccation.",
        "topic": "prokaryote",
        "sub": "Cell Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 130,
        "q": "The bacterial flagellum is anchored to the cell envelope by its:",
        "opts": {
            "A": "Basal body embedded in the cell envelope and membrane",
            "B": "Hook projecting into the medium",
            "C": "Long filament made of flagellin",
            "D": "Capsular polysaccharides"
        },
        "ans": "A",
        "exp": "The basal body acts as the rotary motor and anchor embedded within the cell wall and cell membrane of the bacterium.",
        "topic": "prokaryote",
        "sub": "Motility",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 131,
        "q": "How does the flagellar movement of a prokaryotic bacterium differ fundamentally from that of a eukaryotic cell?",
        "opts": {
            "A": "Prokaryotic flagella rotate like a propeller driven by proton motive force, whereas eukaryotic flagella undulate in a wave-like manner driven by ATP and dynein",
            "B": "Prokaryotic flagella undulate with dynein arms, while eukaryotic flagella lack proteins",
            "C": "Prokaryotic flagella are 9+2 axonemes, while eukaryotic flagella are single solid rods",
            "D": "Prokaryotic flagella are enclosed by plasma membrane, while eukaryotic flagella are naked"
        },
        "ans": "A",
        "exp": "Prokaryotic flagella are non-membrane bound filaments of flagellin that rotate like propellers using proton-motive force, whereas eukaryotic flagella have 9+2 tubulin axonemes enclosed by membrane and bend via ATP-driven dynein.",
        "topic": "prokaryote",
        "sub": "Motility",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 132,
        "q": "Which statement correctly describes bacterial pili?",
        "opts": {
            "A": "Tubular proteinaceous appendages composed of pilin that facilitate conjugation between bacteria",
            "B": "Locomotory organelles that beat rhythmically to propel the cell",
            "C": "Enzymatic vesicles that carry out oxidative phosphorylation",
            "D": "Storage granules containing phosphate reserves"
        },
        "ans": "A",
        "exp": "Pili (specifically sex pili or F-pili) are hollow tubular structures made of the protein pilin that form mating bridges for DNA transfer during bacterial conjugation.",
        "topic": "prokaryote",
        "sub": "Surface Structures",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 133,
        "q": "Why are bacterial fimbriae clinically significant in infectious diseases?",
        "opts": {
            "A": "They enable pathogenic bacteria to adhere specifically to host epithelial surfaces",
            "B": "They synthesize and secrete exotoxins into the host bloodstream",
            "C": "They protect the bacterial DNA from being degraded by host nucleases",
            "D": "They generate ATP required for rapid bacterial multiplication"
        },
        "ans": "A",
        "exp": "Fimbriae possess adhesins that bind complementary receptors on host epithelial cells (e.g., Neisseria gonorrhoeae adhering to urogenital tract), initiating infection.",
        "topic": "prokaryote",
        "sub": "Surface Structures",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 134,
        "q": "In photosynthetic prokaryotes like cyanobacteria, where are the photosynthetic pigments located in the absence of chloroplasts?",
        "opts": {
            "A": "In specialized thylakoid-like membranous lamellae called chromatophores",
            "B": "In the central nucleoid region attached to DNA",
            "C": "Inside non-membrane bound inclusion bodies",
            "D": "Within the periplasmic space between cell wall and membrane"
        },
        "ans": "A",
        "exp": "Cyanobacteria lack membrane-bound chloroplasts; their photosynthetic pigments and electron transport chains are located in extensive internal membranous extensions termed chromatophores.",
        "topic": "prokaryote",
        "sub": "Chromatophores",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 135,
        "q": "Which type of inclusion body in cyanobacteria specifically stores reserve nitrogen in the form of arginine and aspartic acid polymers?",
        "opts": {
            "A": "Cyanophycean granules",
            "B": "Phosphate granules",
            "C": "Glycogen granules",
            "D": "Polyhydroxybutyrate granules"
        },
        "ans": "A",
        "exp": "Cyanophycean granules are non-membrane bound inclusion bodies that store nitrogen-rich polypeptides composed of aspartic acid and arginine.",
        "topic": "prokaryote",
        "sub": "Inclusion Bodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 136,
        "q": "Which characteristic distinguishes gas vacuoles of photosynthetic bacteria from true eukaryotic vacuoles?",
        "opts": {
            "A": "They are pseudovacuoles enclosed by a rigid sub-nanometer protein skin, devoid of lipid bilayer",
            "B": "They are bounded by a single lipid unit membrane called tonoplast",
            "C": "They store hydrolytic enzymes active at an alkaline pH",
            "D": "They are formed by fusion of Golgi-derived transport vesicles"
        },
        "ans": "A",
        "exp": "Gas vacuoles are proteinaceous cylindrical micro-compartments with a hydrophobic interior impermeable to water but permeable to gas, lacking a lipid bilayer.",
        "topic": "prokaryote",
        "sub": "Inclusion Bodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 137,
        "q": "In prokaryotes, polyribosomes (polysomes) are functional because:",
        "opts": {
            "A": "Transcription and translation are coupled simultaneously on the same mRNA strand",
            "B": "Introns are spliced out before translation begins",
            "C": "Prokaryotic mRNA requires a 5' cap and 3' poly-A tail",
            "D": "Ribosomes must wait for mRNA to be exported to the cytoplasm"
        },
        "ans": "A",
        "exp": "Because prokaryotes lack a nuclear membrane, translation begins while transcription is still ongoing (coupled transcription-translation), and multiple 70S ribosomes translate the nascent mRNA simultaneously.",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 138,
        "q": "Plasmids in bacteria are best defined as:",
        "opts": {
            "A": "Extrachromosomal, self-replicating, double-stranded circular DNA molecules",
            "B": "Linear fragments of viral RNA integrated into host chromosome",
            "C": "Membranous compartments containing degradative enzymes",
            "D": "Proteinaceous crystals conferring mechanical stiffness"
        },
        "ans": "A",
        "exp": "Plasmids are autonomous, extra-chromosomal, self-replicating double-stranded circular DNA molecules found in bacteria.",
        "topic": "prokaryote",
        "sub": "Plasmids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 139,
        "q": "Why are mycoplasmas naturally resistant to penicillin and other beta-lactam antibiotics?",
        "opts": {
            "A": "They completely lack a peptidoglycan cell wall, the target of beta-lactams",
            "B": "Their cell wall is heavily lignified and impermeable",
            "C": "They rapidly pump out beta-lactams using mitochondrial ATP",
            "D": "They possess a thick polysaccharide capsule preventing drug entry"
        },
        "ans": "A",
        "exp": "Penicillin inhibits bacterial peptidoglycan wall synthesis (transpeptidase). Because Mycoplasmas naturally lack a cell wall entirely, penicillin has no inhibitory target.",
        "topic": "prokaryote",
        "sub": "Mycoplasma",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 140,
        "q": "Mesosomes in bacteria are analogous in function to which eukaryotic organelle?",
        "opts": {
            "A": "Mitochondria",
            "B": "Lysosomes",
            "C": "Chloroplasts",
            "D": "Peroxisomes"
        },
        "ans": "A",
        "exp": "Mesosomes are bacterial plasma membrane invaginations rich in respiratory enzymes (cytochromes and dehydrogenases), functioning analogously to the cristae of eukaryotic mitochondria.",
        "topic": "prokaryote",
        "sub": "Mesosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 141,
        "q": "The lipid molecules in the plasma membrane primarily consist of phosphoglycerides, which are:",
        "opts": {
            "A": "Amphipathic molecules with a hydrophilic phosphate head and hydrophobic fatty acid tails",
            "B": "Purely hydrophobic triglycerides lacking any ionic charges",
            "C": "Hydrophilic carbohydrate polymers cross-linked with peptides",
            "D": "Water-soluble sterols linked to basic amino acid residues"
        },
        "ans": "A",
        "exp": "Phosphoglycerides are amphipathic, possessing a polar hydrophilic head and two nonpolar hydrophobic fatty acid hydrocarbon tails.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 142,
        "q": "How does the presence of cholesterol affect the eukaryotic plasma membrane?",
        "opts": {
            "A": "It modulates membrane fluidity by preventing excessive fluidity at high temperatures and crystallization at low temperatures",
            "B": "It acts as a primary energy source by being hydrolyzed to ATP",
            "C": "It binds mRNA molecules and initiates translation",
            "D": "It forms aqueous pores through which large proteins freely diffuse"
        },
        "ans": "A",
        "exp": "Cholesterol acts as a bidirectional fluidity buffer; at high temperatures it stabilizes the membrane and raises its melting point, while at low temperatures it prevents phospholipid tail packing and crystallization.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 143,
        "q": "Integral proteins that span the entire thickness of the plasma membrane from one surface to the other are called:",
        "opts": {
            "A": "Transmembrane proteins (tunnel proteins)",
            "B": "Peripheral proteins",
            "C": "Extrinsic proteins",
            "D": "Histone proteins"
        },
        "ans": "A",
        "exp": "Integral membrane proteins that extend all the way across the lipid bilayer are called transmembrane or tunnel proteins, often forming channels or carriers.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 144,
        "q": "The mobility of proteins within the lipid bilayer demonstrated by Frye and Edidin's cell fusion experiment confirmed the:",
        "opts": {
            "A": "Fluid mosaic model of Singer and Nicolson",
            "B": "Lamellar unit membrane model of Robertson",
            "C": "Sandwich model of Danielli and Davson",
            "D": "Micellar model of membrane structure"
        },
        "ans": "A",
        "exp": "The lateral intermixing of fluorescently labeled mouse and human surface proteins upon heterokaryon fusion directly confirmed the fluid mosaic nature of the membrane.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 145,
        "q": "Carbohydrate moieties of glycoproteins and glycolipids in the plasma membrane are always oriented towards:",
        "opts": {
            "A": "The extracellular outer surface of the cell",
            "B": "The cytosolic inner surface of the cell",
            "C": "The hydrophobic core of the lipid bilayer",
            "D": "The nuclear matrix"
        },
        "ans": "A",
        "exp": "Carbohydrate chains attached to membrane lipids and proteins face strictly the extracellular environment, forming the glycocalyx involved in cell-cell recognition and adhesion.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 146,
        "q": "Which of the following processes requires a carrier protein but does NOT require direct metabolic energy (ATP)?",
        "opts": {
            "A": "Facilitated diffusion",
            "B": "Active transport",
            "C": "Simple diffusion",
            "D": "Endocytosis"
        },
        "ans": "A",
        "exp": "Facilitated diffusion uses membrane carrier or channel proteins to transport polar solutes down their concentration gradient without consuming ATP.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 147,
        "q": "The sodium-potassium pump (Na+/K+ ATPase) in animal cells transports:",
        "opts": {
            "A": "3 Na+ ions outward and 2 K+ ions inward per ATP molecule hydrolyzed",
            "B": "2 Na+ ions outward and 3 K+ ions inward per ATP molecule hydrolyzed",
            "C": "3 Na+ ions inward and 2 K+ ions outward per ATP molecule hydrolyzed",
            "D": "Equal numbers of Na+ and K+ ions in the same direction"
        },
        "ans": "A",
        "exp": "The electrogenic Na+/K+ ATPase pumps 3 Na+ ions out of the cell and 2 K+ ions into the cell for every ATP molecule hydrolyzed.",
        "topic": "organelles",
        "sub": "Membrane Transport",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 148,
        "q": "Which property of the primary plant cell wall enables young growing plant cells to expand?",
        "opts": {
            "A": "Extensibility and elasticity that diminishes as the secondary wall is laid down",
            "B": "Complete absence of cellulose microfibrils",
            "C": "Heavy impregnation with impermeable suberin",
            "D": "Covalent bonding with high concentrations of lignin"
        },
        "ans": "A",
        "exp": "The primary wall is pliant and capable of extension (acid growth mediated by expansins), allowing cell expansion, but loses this ability when a rigid secondary wall is deposited.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 149,
        "q": "The secondary wall of a plant cell is deposited:",
        "opts": {
            "A": "Between the primary wall and the plasma membrane",
            "B": "Between the primary wall and the middle lamella",
            "C": "On the outer surface of the middle lamella",
            "D": "Inside the central vacuole"
        },
        "ans": "A",
        "exp": "As the plant cell matures and ceases expansion, the secondary cell wall is laid down inner to the primary wall, between the primary wall and the plasma membrane.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 150,
        "q": "Plasmodesmata are lined by plasma membrane and often traversed by a narrow tubular extension of the endoplasmic reticulum called the:",
        "opts": {
            "A": "Desmotubule",
            "B": "Tonoplast",
            "C": "Mesosome",
            "D": "Microfilament"
        },
        "ans": "A",
        "exp": "A desmotubule is a cylindrical tube of modified endoplasmic reticulum running through the center of a plasmodesma, connecting the ER networks of adjacent plant cells.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 151,
        "q": "During the ripening of fruits, softening occurs primarily due to:",
        "opts": {
            "A": "Solubilization and enzymatic breakdown of pectic substances in the middle lamella",
            "B": "Rapid synthesis of thick secondary walls of lignin",
            "C": "Deposition of suberin casparian strips",
            "D": "Complete hydrolysis of cellular DNA and RNA"
        },
        "ans": "A",
        "exp": "Fruit ripening involves enzymes like pectinase and polygalacturonase that hydrolyze calcium pectate of the middle lamella, releasing cells and softening tissue.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 152,
        "q": "Which component of the plant cell wall provides great compressive strength and makes walls rigid and hydrophobic?",
        "opts": {
            "A": "Lignin",
            "B": "Cellulose",
            "C": "Pectin",
            "D": "Hemicellulose"
        },
        "ans": "A",
        "exp": "Lignin is a complex phenolic polymer that impregnates secondary walls, providing rigid compressive strength, hydrophobicity, and resistance to pathogen degradation.",
        "topic": "organelles",
        "sub": "Cell Wall",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 153,
        "q": "Which of the following organelles is NOT physically connected to the nuclear envelope but is functional part of the endomembrane system?",
        "opts": {
            "A": "Golgi apparatus",
            "B": "Rough endoplasmic reticulum",
            "C": "Nuclear pore complex",
            "D": "Perinuclear cisterna"
        },
        "ans": "A",
        "exp": "The outer membrane of the nuclear envelope is continuous with the rough endoplasmic reticulum, while the Golgi apparatus receives transport vesicles from the ER without continuous direct membrane continuity.",
        "topic": "organelles",
        "sub": "Endomembrane System",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 154,
        "q": "Which of the following organelles is responsible for the synthesis of steroidal hormones in animal endocrine cells?",
        "opts": {
            "A": "Smooth endoplasmic reticulum (SER)",
            "B": "Rough endoplasmic reticulum (RER)",
            "C": "Golgi apparatus",
            "D": "Lysosomes"
        },
        "ans": "A",
        "exp": "SER is the major site of lipid synthesis, including cholesterol, phospholipids, and steroidal hormones such as testosterone, estrogen, and progesterone.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 155,
        "q": "Detoxification of lipid-soluble drugs and toxic xenobiotics in mammalian liver cells is performed by:",
        "opts": {
            "A": "Cytochrome P450 enzymes located on the membrane of smooth endoplasmic reticulum",
            "B": "Hydrolytic acid proteases within lysosomal vesicles",
            "C": "Peroxisomal catalase enzymes in the cytoplasm",
            "D": "70S ribosomes bound to rough endoplasmic reticulum"
        },
        "ans": "A",
        "exp": "The smooth endoplasmic reticulum of hepatocytes contains cytochrome P450 monooxygenases that hydroxylate drugs and xenobiotics, making them water-soluble for excretion.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 156,
        "q": "The sarcoplasmic reticulum of striated muscle fibers is a specialized smooth endoplasmic reticulum that stores and releases:",
        "opts": {
            "A": "Calcium ions (Ca2+)",
            "B": "Sodium ions (Na+)",
            "C": "Potassium ions (K+)",
            "D": "Magnesium ions (Mg2+)"
        },
        "ans": "A",
        "exp": "The sarcoplasmic reticulum is a modified SER that sequesters high concentrations of Ca2+ ions, releasing them upon depolarization to trigger muscle contraction.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 157,
        "q": "The ribosomes attached to the outer cytosolic surface of the rough endoplasmic reticulum are anchored by which transmembrane glycoproteins?",
        "opts": {
            "A": "Ribophorins I and II",
            "B": "Selectins and integrins",
            "C": "Porins and aquaporins",
            "D": "Spectrin and ankyrin"
        },
        "ans": "A",
        "exp": "Ribosomes (specifically their 60S large subunit) bind to the rough ER membrane via docking proteins called ribophorins (ribophorin I and II) and the Sec61 translocon complex.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 158,
        "q": "Proteins destined for secretion or lysosomal targeting undergo initial folding and disulfide bond formation inside the:",
        "opts": {
            "A": "Lumen of the rough endoplasmic reticulum",
            "B": "Nucleoplasm of the nucleus",
            "C": "Stroma of the chloroplast",
            "D": "Matrix of the mitochondrion"
        },
        "ans": "A",
        "exp": "Nascent secretory and membrane proteins are co-translationally translocated into the ER lumen, where chaperones (BiP) and protein disulfide isomerase (PDI) facilitate proper folding.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 159,
        "q": "The cis and trans faces of the Golgi apparatus are entirely different, yet they are:",
        "opts": {
            "A": "Interconnected biochemically and functionally",
            "B": "Identical in lipid and enzymatic composition",
            "C": "Surrounded by a double unit membrane",
            "D": "Permanently fused with the inner nuclear envelope"
        },
        "ans": "A",
        "exp": "Though morphologically and enzymatically distinct (cis is convex and immature; trans is concave and mature), the cisternae are functionally interconnected as cargo moves through them.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 160,
        "q": "The process of glycosylation of nascent proteins and lipids into glycoproteins and glycolipids takes place predominantly in:",
        "opts": {
            "A": "Endoplasmic reticulum and Golgi apparatus",
            "B": "Mitochondria and peroxisomes",
            "C": "Lysosomes and vacuoles",
            "D": "Nucleolus and ribosomes"
        },
        "ans": "A",
        "exp": "Glycosylation begins in the lumen of RER (N-linked core oligosaccharide) and is modified and completed in the Golgi cisternae (O-linked glycosylation).",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 161,
        "q": "A protein synthesized on RER travels to the Golgi apparatus via:",
        "opts": {
            "A": "COPII-coated transport vesicles that bud from ER and fuse with the cis face of Golgi",
            "B": "Direct diffusion through large cytoplasmic aqueous channels",
            "C": "Passage through nuclear pore complexes",
            "D": "Active transport across mitochondrial cristae"
        },
        "ans": "A",
        "exp": "Transport vesicles budding from the ER transition elements (coated with COPII) carry cargo to the cis-Golgi network, fusing with its membrane.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 162,
        "q": "Lysosomal hydrolytic enzymes are synthesized on:",
        "opts": {
            "A": "Ribosomes attached to the rough endoplasmic reticulum",
            "B": "Free ribosomes in the mitochondrial matrix",
            "C": "Ribosomes located in the nucleolus",
            "D": "70S ribosomes of the chloroplast stroma"
        },
        "ans": "A",
        "exp": "Lysosomal hydrolases are glycoproteins synthesized on RER ribosomes, transferred into the ER lumen, tagged with mannose-6-phosphate in the Golgi, and packaged into lysosomes.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 163,
        "q": "How does the interior of a lysosome maintain its characteristic acidic pH (around 4.5 to 5.0)?",
        "opts": {
            "A": "By an active proton pump (V-type H+ ATPase) that pumps H+ from cytoplasm into the lysosomal lumen",
            "B": "By spontaneous diffusion of hydrochloric acid from mitochondria",
            "C": "By the neutral buffer capacity of nucleic acids",
            "D": "By passive leakage of hydroxide ions into the cytoplasm"
        },
        "ans": "A",
        "exp": "Lysosomal membranes possess a vacuolar-type proton ATPase (V-ATPase) that actively hydrolyzes ATP to pump protons from the cytosol into the lumen against a pH gradient.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 164,
        "q": "Why do lysosomal enzymes not digest the lysosome's own limiting membrane under normal physiological conditions?",
        "opts": {
            "A": "The inner surface of the lysosomal membrane is heavily protected by highly glycosylated structural proteins (LAMPs and LIMPs)",
            "B": "Lysosomal enzymes remain inactive until they are secreted outside the cell",
            "C": "The lysosomal membrane lacks lipids completely",
            "D": "The lysosomal lumen has an alkaline pH of 9.0 that inhibits hydrolases"
        },
        "ans": "A",
        "exp": "The luminal surface of the lysosomal membrane is covered by a dense glycocalyx of heavily glycosylated proteins (LAMPs), protecting the membrane lipids from degradation by acid hydrolases.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 165,
        "q": "Autophagy is a vital cellular housekeeping process carried out by lysosomes in which:",
        "opts": {
            "A": "The cell uses its own lysosomes to degrade worn-out or damaged organelles",
            "B": "The cell engulfs extracellular solid food particles via pseudopodia",
            "C": "Extracellular liquid droplets are ingested into pinocytic vesicles",
            "D": "Mitochondria duplicate their circular DNA genome"
        },
        "ans": "A",
        "exp": "Autophagy (self-eating) involves the sequestration of damaged organelles (like old mitochondria) into autophagosomes, which fuse with lysosomes for enzymatic degradation and recycling.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 166,
        "q": "Which type of lysosome represents a newly pinched-off vesicle from the Golgi apparatus containing inactive acid hydrolases?",
        "opts": {
            "A": "Primary lysosome",
            "B": "Secondary lysosome (heterophagosome)",
            "C": "Residual body (telolysosome)",
            "D": "Autophagosome"
        },
        "ans": "A",
        "exp": "Primary lysosomes are freshly formed storage vesicles budding from the trans-Golgi network containing inactive enzymes; upon fusion with a phagosome, they form active secondary lysosomes.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 167,
        "q": "In plant cells, the sap in the central vacuole is typically hypertonic to the surrounding cytosol because:",
        "opts": {
            "A": "The tonoplast actively pumps ions and solutes into the vacuolar lumen against their concentration gradients",
            "B": "Water is actively pumped out of the vacuole by tonoplast ATPases",
            "C": "The vacuole contains no water, only dry crystals of calcium oxalate",
            "D": "The cytoplasm actively destroys all soluble mineral salts"
        },
        "ans": "A",
        "exp": "Tonoplast possesses proton pumps that create an electrochemical gradient, driving the secondary active transport of ions into the vacuole, making the vacuolar sap hypertonic.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 168,
        "q": "Anthocyanin pigments responsible for the red, purple, and blue colors of many flowers and fruits are located in the:",
        "opts": {
            "A": "Cell sap of the central vacuole",
            "B": "Thylakoid membranes of chloroplasts",
            "C": "Lipid droplets of chromoplasts",
            "D": "Matrix of mitochondria"
        },
        "ans": "A",
        "exp": "Anthocyanins are water-soluble flavonoid pigments dissolved in the cell sap of the central vacuole, unlike lipid-soluble carotenoids which reside in plastids.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 169,
        "q": "In freshwater protozoans like Amoeba, what happens if the contractile vacuole stops functioning?",
        "opts": {
            "A": "The cell absorbs excess water by osmosis and bursts (cytolysis)",
            "B": "The cell dehydrates and shrivels rapidly",
            "C": "The cell undergoes immediate meiosis",
            "D": "The cell wall becomes imperviously thick"
        },
        "ans": "A",
        "exp": "Freshwater Amoeba is hypertonic to its hypotonic environment; without the contractile vacuole pumping out incoming osmotic water, the cell will swell and burst.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 170,
        "q": "Which organelle is referred to as the 'polymorphic organelle' due to its existence in different functional forms (primary, secondary, residual, and autophagic)?",
        "opts": {
            "A": "Lysosome",
            "B": "Mitochondrion",
            "C": "Chloroplast",
            "D": "Golgi apparatus"
        },
        "ans": "A",
        "exp": "Lysosomes show polymorphism because they exist in four distinct morphological states: primary lysosomes, secondary lysosomes (phagolysosomes), residual bodies, and autophagic vacuoles.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 171,
        "q": "Why are mitochondria and chloroplasts designated as 'semi-autonomous' organelles?",
        "opts": {
            "A": "They possess their own circular DNA, 70S ribosomes, and can synthesize some of their own proteins, but depend on nuclear genes for others",
            "B": "They can live and reproduce indefinitely outside the host cell in simple culture broth",
            "C": "They do not require any ATP or cytoplasmic enzymes whatsoever",
            "D": "They lack membranes and divide strictly by mitotic spindle fibers"
        },
        "ans": "A",
        "exp": "They have their own genome and protein synthesis machinery, but depend on nuclear-encoded genes and cytoplasmically imported proteins for most functions, hence semi-autonomous.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 172,
        "q": "The inner mitochondrial membrane differs from the outer membrane in being:",
        "opts": {
            "A": "Rich in cardiolipin, devoid of porins, and highly impermeable to ions",
            "B": "Freely permeable to all solutes up to 5000 Daltons",
            "C": "Smooth, lacking infoldings or enzymatic complexes",
            "D": "Lacking all electron transport proteins"
        },
        "ans": "A",
        "exp": "The outer membrane contains porin channels making it permeable, whereas the inner membrane is rich in the phospholipid cardiolipin, contains cristae, and is strictly impermeable to ions without specific transporters.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 173,
        "q": "The lollipop-shaped particles found on the inner mitochondrial membrane (cristae) facing the matrix are:",
        "opts": {
            "A": "F0-F1 ATP synthase complexes (oxysomes)",
            "B": "70S ribosomes translating mRNA",
            "C": "Ribophorins holding tRNA molecules",
            "D": "Calcium oxalate crystals"
        },
        "ans": "A",
        "exp": "Oxysomes or elementary particles (F0-F1 complexes) are anchored in the inner membrane with the F1 headpiece protruding into the matrix, catalyzing ATP synthesis from ADP and Pi.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 174,
        "q": "Mitochondrial DNA is typically characterized as being:",
        "opts": {
            "A": "Double-stranded, circular, naked, and GC-rich",
            "B": "Single-stranded linear DNA enclosed in histones",
            "C": "Segmented linear RNA molecules",
            "D": "Triple-stranded circular DNA bound to polyamines"
        },
        "ans": "A",
        "exp": "Mitochondrial DNA (mtDNA) resembles prokaryotic DNA: it is a closed, circular, double-stranded molecule devoid of histone proteins.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 175,
        "q": "According to the endosymbiotic hypothesis, mitochondria evolved from:",
        "opts": {
            "A": "Aerobic alpha-proteobacterial endosymbionts engulfed by ancestral eukaryotic cells",
            "B": "Photosynthetic cyanobacterial ancestors engulfed by algae",
            "C": "Free-living anaerobic methanogenic archaebacteria",
            "D": "Invaginations of the ancestral nuclear membrane"
        },
        "ans": "A",
        "exp": "Endosymbiotic theory posits that mitochondria arose from engulfed aerobic alpha-proteobacteria, supported by their circular DNA, 70S ribosomes, and double membrane.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 176,
        "q": "Chloroplasts and mitochondria both contain which type of ribosomes in their internal compartments?",
        "opts": {
            "A": "70S ribosomes",
            "B": "80S ribosomes",
            "C": "60S ribosomes only",
            "D": "40S ribosomes only"
        },
        "ans": "A",
        "exp": "Both mitochondria and chloroplasts contain prokaryotic-like 70S ribosomes, which are sensitive to antibiotics like chloramphenicol that inhibit bacterial translation.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 177,
        "q": "The outer membrane of a chloroplast is:",
        "opts": {
            "A": "Relatively more permeable than the inner membrane due to porins",
            "B": "Impermeable to all water molecules and ions",
            "C": "Folded into stacks called grana",
            "D": "Directly continuous with the thylakoid lumen"
        },
        "ans": "A",
        "exp": "Similar to mitochondria, the outer chloroplast membrane possesses porin proteins that permit passive diffusion of small molecules, while the inner membrane is selectively permeable.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 178,
        "q": "In chloroplasts, the enclosed space bounded by the thylakoid membrane is termed the:",
        "opts": {
            "A": "Thylakoid lumen",
            "B": "Stroma",
            "C": "Periplastidial space",
            "D": "Perinuclear cisterna"
        },
        "ans": "A",
        "exp": "Thylakoids enclose an aqueous space called the lumen, where protons accumulate during photosynthetic electron transport to generate a proton gradient.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 179,
        "q": "Which enzyme, constituting the most abundant protein on Earth, is located dissolved in high concentrations in the chloroplast stroma?",
        "opts": {
            "A": "RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase)",
            "B": "DNA polymerase I",
            "C": "ATP synthase F1 subunit",
            "D": "Phosphofructokinase"
        },
        "ans": "A",
        "exp": "RuBisCO is dissolved in the chloroplast stroma, catalyzing the first major step of carbon fixation in the Calvin cycle.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 180,
        "q": "When green tomatoes turn red upon ripening, what cellular transformation occurs in the plastids?",
        "opts": {
            "A": "Chloroplasts transform into chromoplasts as chlorophyll degrades and carotenoids accumulate",
            "B": "Chromoplasts convert into leucoplasts that store starch",
            "C": "Leucoplasts transform into amyloplasts",
            "D": "Mitochondria fuse to form giant chromoplasts"
        },
        "ans": "A",
        "exp": "During fruit ripening (e.g., tomatoes, red peppers), green chloroplasts transform into chromoplasts by loss of chlorophyll and thylakoids and accumulation of red lycopene/carotenoids.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 181,
        "q": "Which type of plastids would you expect to be most abundant in the subterranean cotyledons of germinating castor seeds?",
        "opts": {
            "A": "Leucoplasts (elaioplasts and aleuroplasts)",
            "B": "Chloroplasts",
            "C": "Chromoplasts",
            "D": "Etioplasts"
        },
        "ans": "A",
        "exp": "Underground non-photosynthetic storage tissues like castor cotyledons store massive amounts of lipids and proteins, hence abound in leucoplasts (elaioplasts and aleuroplasts).",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 182,
        "q": "A plant kept in continuous darkness exhibits pale yellowish shoots with unexpanded leaves, a condition called etiolation. The plastids in these tissues are arrested as:",
        "opts": {
            "A": "Etioplasts containing paracrystalline prolamellar bodies",
            "B": "Active photosynthetic chloroplasts",
            "C": "Chromoplasts rich in lycopene",
            "D": "Amyloplasts full of starch granules"
        },
        "ans": "A",
        "exp": "In darkness, chloroplast development is arrested, forming etioplasts containing crystalline prolamellar bodies that convert to thylakoids upon light exposure.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 183,
        "q": "Microtubules, which form the spindle apparatus, cilia, and centrioles, are hollow cylindrical polymers assembled from dimers of:",
        "opts": {
            "A": "Alpha and beta tubulin",
            "B": "G-actin and F-actin",
            "C": "Keratin and desmin",
            "D": "Myosin heavy and light chains"
        },
        "ans": "A",
        "exp": "Microtubules are rigid, hollow cylinders (25 nm outer diameter) composed of repeating heterodimers of alpha-tubulin and beta-tubulin.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 184,
        "q": "Microfilaments that drive amoeboid movement, cytokinesis cleavage furrow, and cytoplasmic streaming are composed primarily of:",
        "opts": {
            "A": "Actin protein",
            "B": "Tubulin protein",
            "C": "Keratin filaments",
            "D": "Collagen fibers"
        },
        "ans": "A",
        "exp": "Microfilaments (7 nm diameter) are helical polymers of globular actin (G-actin) forming filamentous actin (F-actin), responsible for cell motility and contraction.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 185,
        "q": "Colchicine is an antimitotic alkaloid drug that arrests cell division at metaphase by:",
        "opts": {
            "A": "Inhibiting microtubule polymerization and preventing mitotic spindle assembly",
            "B": "Inactivating the acid hydrolases of lysosomes",
            "C": "Preventing DNA unwinding by topoisomerase",
            "D": "Destroying the lipid bilayer of the nuclear membrane"
        },
        "ans": "A",
        "exp": "Colchicine binds specifically to tubulin dimers, preventing their polymerization into spindle microtubules and causing metaphase arrest.",
        "topic": "organelles",
        "sub": "Cytoskeleton",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 186,
        "q": "In the axoneme of eukaryotic cilia and flagella, the nine peripheral doublets are interconnected by protein bridges called:",
        "opts": {
            "A": "Nexin linkers",
            "B": "Radial spokes",
            "C": "Dynein arms",
            "D": "Central sheath"
        },
        "ans": "A",
        "exp": "Adjacent peripheral microtubule doublets in the axoneme are interconnected along their length by elastic protein cross-bridges made of nexin.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 187,
        "q": "The motor protein responsible for generating the sliding force and bending movement of cilia and flagella is:",
        "opts": {
            "A": "Axonemal dynein",
            "B": "Myosin II",
            "C": "Kinesin-1",
            "D": "Actin"
        },
        "ans": "A",
        "exp": "Axonemal dynein arms extend from the A-tubule of each doublet toward the B-tubule of the adjacent doublet, hydrolyzing ATP to produce sliding and ciliary bending.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 188,
        "q": "In the 9+2 axonemal architecture of eukaryotic cilia, each peripheral doublet is connected to the central sheath surrounding the central microtubules by:",
        "opts": {
            "A": "Radial spokes",
            "B": "Nexin bridges",
            "C": "Dynein arms",
            "D": "Desmotubules"
        },
        "ans": "A",
        "exp": "Nine radial spokes extend inward from the A-tubule of each peripheral doublet toward the central sheath enclosing the central pair of microtubules.",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 189,
        "q": "The basal body of a cilium or flagellum has an ultrastructural arrangement identical to that of a:",
        "opts": {
            "A": "Centriole (9 + 0 arrangement of microtubule triplets)",
            "B": "Axoneme (9 + 2 arrangement of doublets)",
            "C": "Microfilament bundle (solid actin cables)",
            "D": "Kinetochore disc"
        },
        "ans": "A",
        "exp": "Basal bodies arise from centrioles and share an identical structure: 9 peripheral triplets of microtubules with no central microtubules (9+0 pattern).",
        "topic": "organelles",
        "sub": "Cilia and Flagella",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 190,
        "q": "In a centriole, each of the nine peripheral triplets consists of three microtubules designated as A, B, and C. The central non-tubular proteinaceous rod is called the:",
        "opts": {
            "A": "Hub",
            "B": "Spoke",
            "C": "Nexin ring",
            "D": "Kinetochore"
        },
        "ans": "A",
        "exp": "The central proteinaceous part of the centriole is called the central hub, which is connected to the peripheral triplets by protein spokes, giving a cartwheel appearance.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 191,
        "q": "Centrioles are duplicated during which phase of the eukaryotic cell cycle?",
        "opts": {
            "A": "S phase in the cytoplasm",
            "B": "G1 phase inside the nucleus",
            "C": "G2 phase inside the nucleolus",
            "D": "M phase at the equatorial plate"
        },
        "ans": "A",
        "exp": "Centriole duplication occurs during the S phase of the interphase in the cytoplasm, concurrent with nuclear DNA replication.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 192,
        "q": "Higher plant cells divide and form a mitotic spindle despite lacking which organelle found in animal cells?",
        "opts": {
            "A": "Centrosome / centrioles",
            "B": "Ribosomes",
            "C": "Mitochondria",
            "D": "Golgi apparatus"
        },
        "ans": "A",
        "exp": "Higher plant cells are anastral (lack centrioles/asters), yet organize functional bipolar mitotic spindles from microtubule organizing centers (MTOCs).",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 193,
        "q": "The nuclear lamina that mechanically supports the inner nuclear membrane and anchors chromatin consists of an organized meshwork of:",
        "opts": {
            "A": "Intermediate filaments called lamins",
            "B": "Microtubules made of alpha-tubulin",
            "C": "Actin microfilaments",
            "D": "Collagen fibers"
        },
        "ans": "A",
        "exp": "The inner nuclear membrane is lined by the nuclear lamina, a fibrous network composed of lamin intermediate filament proteins that maintains nuclear envelope integrity.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 194,
        "q": "Nuclear pore complexes in the eukaryotic nuclear envelope function to:",
        "opts": {
            "A": "Regulate bidirectional active and passive transport of proteins and RNAs between nucleus and cytoplasm",
            "B": "Synthesize ribosomal RNAs and export them into the extracellular space",
            "C": "Prevent any molecule from entering or exiting the nucleus",
            "D": "Digest misfolded nuclear proteins via acid hydrolases"
        },
        "ans": "A",
        "exp": "Nuclear pores are octagonal pore complexes that mediate selective bidirectional transport of macromolecules: importing nuclear proteins (histones, polymerases) and exporting mRNAs, tRNAs, and ribosome subunits.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 195,
        "q": "Which type of eukaryotic cells lose their nucleus during terminal differentiation to maximize functional space?",
        "opts": {
            "A": "Mature mammalian erythrocytes and sieve tube elements of vascular plants",
            "B": "Liver hepatocytes and kidney nephron cells",
            "C": "Striated skeletal muscle cells and fungal hyphae",
            "D": "Plant meristematic cells and cambial initials"
        },
        "ans": "A",
        "exp": "Mature mammalian red blood cells (erythrocytes) and angiosperm phloem sieve tube cells are enucleated at maturity to facilitate their transport functions.",
        "topic": "nucleus",
        "sub": "Cell Diversity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 196,
        "q": "The nucleolus is NOT enclosed by a membrane. Its contents are continuous with the:",
        "opts": {
            "A": "Rest of the nucleoplasm",
            "B": "Cytoplasm through gaps in the nuclear membrane",
            "C": "Lumen of the rough endoplasmic reticulum",
            "D": "Thylakoid space of the chloroplast"
        },
        "ans": "A",
        "exp": "The content of the nucleolus is continuous with the rest of the nucleoplasm as it is not a membrane-bound structure.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 197,
        "q": "Cells that are actively carrying out high rates of protein synthesis typically possess:",
        "opts": {
            "A": "Larger and more numerous nucleoli",
            "B": "Fewer and smaller nucleoli",
            "C": "No nucleoli whatsoever",
            "D": "Absence of nuclear pore complexes"
        },
        "ans": "A",
        "exp": "Larger and more numerous nucleoli are present in cells actively carrying out protein synthesis because they produce vast amounts of ribosomes.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 198,
        "q": "Chromatin contains DNA and which essential basic proteins?",
        "opts": {
            "A": "Histones",
            "B": "Albumins",
            "C": "Collagens",
            "D": "Tubulins"
        },
        "ans": "A",
        "exp": "Interphase chromatin contains DNA, basic proteins called histones, non-histone proteins, and RNA.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 199,
        "q": "What is the fundamental repeating structural unit of eukaryotic chromatin?",
        "opts": {
            "A": "Nucleosome",
            "B": "Centromere",
            "C": "Chromomere",
            "D": "Polysome"
        },
        "ans": "A",
        "exp": "The nucleosome is the fundamental repeating unit of chromatin, comprising about 200 base pairs of DNA wrapped around an octamer of basic histone proteins.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 200,
        "q": "In an interphase nucleus, euchromatin differs from heterochromatin in being:",
        "opts": {
            "A": "Loosely packed, lightly stained, and transcriptionally active",
            "B": "Densely packed, darkly stained, and transcriptionally silent",
            "C": "Completely devoid of DNA molecules",
            "D": "Located exclusively inside the nucleolus"
        },
        "ans": "A",
        "exp": "Euchromatin is transcriptionally active, loosely condensed chromatin that stains lightly with basic dyes, whereas heterochromatin is densely packed, darkly stained, and transcriptionally inactive.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 201,
        "q": "The kinetochore is a disc-shaped protein structure that functions as the:",
        "opts": {
            "A": "Attachment site for spindle microtubules to the chromosome centromere during cell division",
            "B": "Site for transcription of ribosomal RNA genes",
            "C": "Enzyme complex that replicates telomeric DNA ends",
            "D": "Anchor connecting chromosomes to the cell wall"
        },
        "ans": "A",
        "exp": "Kinetochores are multi-protein complexes assembled on the centromeric DNA where spindle fibers (kinetochore microtubules) attach during prometaphase/metaphase.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 202,
        "q": "In a sub-metacentric chromosome, the centromere is located:",
        "opts": {
            "A": "Slightly away from the middle, resulting in one shorter arm and one longer arm",
            "B": "Precisely in the center, resulting in two equal arms",
            "C": "Close to its end, forming one extremely short and one very long arm",
            "D": "At the terminal tip, forming only a single arm"
        },
        "ans": "A",
        "exp": "The sub-metacentric chromosome has centromere slightly away from the middle of the chromosome resulting into one shorter arm (p-arm) and one longer arm (q-arm).",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 203,
        "q": "In an acrocentric chromosome, the centromere is positioned:",
        "opts": {
            "A": "Close to one end, forming one extremely short and one very long arm",
            "B": "Right at the middle of the chromosome",
            "C": "At the terminal tip of the chromosome",
            "D": "Equally distributed along the entire length of chromatids"
        },
        "ans": "A",
        "exp": "In case of acrocentric chromosome the centromere is situated close to its end forming one extremely short and one very long arm.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 204,
        "q": "A non-staining secondary constriction present at a constant location on a few chromosomes gives the appearance of a small fragment called a:",
        "opts": {
            "A": "Satellite (trabant)",
            "B": "Centromere",
            "C": "Kinetochore",
            "D": "Chromocenter"
        },
        "ans": "A",
        "exp": "Sometimes a few chromosomes have non-staining secondary constrictions at a constant location. This gives the appearance of a small fragment called the satellite (SAT chromosomes).",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 205,
        "q": "The secondary constriction associated with satellite chromosomes usually marks the position of the:",
        "opts": {
            "A": "Nucleolar Organizer Region (NOR)",
            "B": "Primary spindle attachment point",
            "C": "Telomerase binding loop",
            "D": "Replication origin site"
        },
        "ans": "A",
        "exp": "The secondary constriction in human chromosomes (e.g., chromosomes 13, 14, 15, 21, 22) contains the nucleolar organizer regions (NOR) encoding 18S, 5.8S, and 28S rRNAs.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 206,
        "q": "Which of the following describes microbodies in eukaryotic cells?",
        "opts": {
            "A": "Membrane-bound minute vesicles containing various oxidative enzymes present in both plant and animal cells",
            "B": "Non-membrane bound ribonucleoprotein particles translating mRNA",
            "C": "Double-membrane bound organelles generating ATP via oxidative phosphorylation",
            "D": "Inclusion bodies storing cyanophycean granules in bacteria"
        },
        "ans": "A",
        "exp": "Many membrane bound minute vesicles called microbodies that contain various enzymes are present in both plant and animal cells (e.g., peroxisomes).",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 207,
        "q": "Peroxisomes contain which key enzyme that decomposes toxic hydrogen peroxide into water and oxygen?",
        "opts": {
            "A": "Catalase",
            "B": "Amylase",
            "C": "Lysozyme",
            "D": "Pepsin"
        },
        "ans": "A",
        "exp": "Peroxisomes contain catalase and peroxidase enzymes that break down toxic hydrogen peroxide (H2O2) produced during metabolic oxidations into H2O and O2.",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 208,
        "q": "In germinating fatty seeds of plants, which specialized microbody converts stored lipids into carbohydrates via the glyoxylate cycle?",
        "opts": {
            "A": "Glyoxysome",
            "B": "Peroxisome",
            "C": "Lysosome",
            "D": "Sphaerosome"
        },
        "ans": "A",
        "exp": "Glyoxysomes are specialized plant microbodies that carry out the glyoxylate cycle, converting stored fats into sugars during seedling germination.",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 209,
        "q": "In green leaves of C3 plants, peroxisomes collaborate with chloroplasts and mitochondria to carry out:",
        "opts": {
            "A": "Photorespiration (C2 cycle)",
            "B": "Photophosphorylation",
            "C": "Glycolytic breakdown of glucose",
            "D": "Lactic acid fermentation"
        },
        "ans": "A",
        "exp": "Peroxisomes, chloroplasts, and mitochondria cooperate in the photorespiratory glycolate pathway (C2 cycle) in C3 plants.",
        "topic": "organelles",
        "sub": "Microbodies",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 210,
        "q": "Approximately how many base pairs of DNA are packaged in a single human diploid cell?",
        "opts": {
            "A": "About 6.6 \u00d7 10^9 base pairs distributed across 46 chromosomes",
            "B": "About 4.6 \u00d7 10^6 base pairs in a single chromosome",
            "C": "About 1.2 \u00d7 10^5 base pairs across 23 chromosomes",
            "D": "About 3.3 \u00d7 10^7 base pairs in 2 chromosomes"
        },
        "ans": "A",
        "exp": "A single human cell has approximately two meters long thread of DNA distributed among its 46 (twenty-three pairs) chromosomes, amounting to ~6.6 \u00d7 10^9 base pairs.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 211,
        "q": "Which of the following structures is absent in both prokaryotes and mature mammalian red blood cells?",
        "opts": {
            "A": "Mitochondria and nucleus",
            "B": "Plasma membrane",
            "C": "Enzymes of glycolysis",
            "D": "Cytoplasmic fluid"
        },
        "ans": "A",
        "exp": "Prokaryotes lack membrane-bound organelles (mitochondria, nucleus), and mature mammalian RBCs discard their nucleus and mitochondria during maturation.",
        "topic": "organelles",
        "sub": "Cell Diversity",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 212,
        "q": "The diameter of Golgi cisternae as reported in NCERT is:",
        "opts": {
            "A": "0.5 \u00b5m to 1.0 \u00b5m",
            "B": "2.0 \u00b5m to 5.0 \u00b5m",
            "C": "0.02 \u00b5m to 0.05 \u00b5m",
            "D": "10 \u00b5m to 20 \u00b5m"
        },
        "ans": "A",
        "exp": "The Golgi apparatus consists of many flat, disc-shaped sacs or cisternae of 0.5 \u00b5m to 1.0 \u00b5m diameter.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 213,
        "q": "What is the typical thickness of the eukaryotic plasma membrane?",
        "opts": {
            "A": "About 7.5 nm (75 \u00c5)",
            "B": "About 75 \u00b5m",
            "C": "About 0.75 mm",
            "D": "About 0.007 nm"
        },
        "ans": "A",
        "exp": "The typical eukaryotic plasma membrane has a thickness of approximately 7.5 nm to 10 nm (75 to 100 \u00c5).",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 214,
        "q": "Which statement regarding the permeability of the two mitochondrial membranes is correct?",
        "opts": {
            "A": "The outer membrane is freely permeable to small molecules through porins, whereas the inner membrane is selectively permeable with cristae",
            "B": "The inner membrane is freely permeable to all proteins, while the outer membrane is completely impermeable",
            "C": "Both membranes are completely freely permeable to large polysaccharides",
            "D": "Neither membrane possesses any transport proteins or channels"
        },
        "ans": "A",
        "exp": "The outer membrane contains porins and is permeable to small molecules, while the inner membrane is selectively permeable, contains cristae, and maintains the proton gradient.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 215,
        "q": "In a chloroplast, the number of chloroplasts per cell in the green alga Chlamydomonas is:",
        "opts": {
            "A": "1 per cell",
            "B": "20 to 40 per cell",
            "C": "Over 1000 per cell",
            "D": "Variable between 500 and 800 per cell"
        },
        "ans": "A",
        "exp": "The number of chloroplasts per cell varies from 1 per cell of the green alga Chlamydomonas to 20\u201340 per cell in the mesophyll.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 216,
        "q": "In a chloroplast, the number of chloroplasts typically found in a leaf mesophyll cell is:",
        "opts": {
            "A": "20 to 40 per cell",
            "B": "1 to 2 per cell",
            "C": "100 to 200 per cell",
            "D": "500 to 1000 per cell"
        },
        "ans": "A",
        "exp": "According to NCERT, the number of chloroplasts varies from 1 per cell of Chlamydomonas to 20\u201340 per cell in the mesophyll of leaves.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 217,
        "q": "What is the typical diameter of a mitochondrion according to NCERT?",
        "opts": {
            "A": "0.2 to 1.0 \u00b5m (average 0.5 \u00b5m)",
            "B": "5.0 to 10.0 \u00b5m",
            "C": "0.02 to 0.05 \u00b5m",
            "D": "15 to 25 \u00b5m"
        },
        "ans": "A",
        "exp": "A mitochondrion typically has a diameter of 0.2\u20131.0 \u00b5m (average 0.5 \u00b5m) and length 1.0\u20134.1 \u00b5m.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 218,
        "q": "What is the typical length of a mitochondrion according to NCERT?",
        "opts": {
            "A": "1.0 to 4.1 \u00b5m",
            "B": "0.1 to 0.4 \u00b5m",
            "C": "10 to 40 \u00b5m",
            "D": "100 to 400 \u00b5m"
        },
        "ans": "A",
        "exp": "According to NCERT, mitochondria are sausage-shaped or cylindrical with a length of 1.0\u20134.1 \u00b5m.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 219,
        "q": "What are the typical dimensions (length and width) of chloroplasts according to NCERT?",
        "opts": {
            "A": "Length 5\u201310 \u00b5m and width 2\u20134 \u00b5m",
            "B": "Length 0.5\u20131.0 \u00b5m and width 0.2\u20130.4 \u00b5m",
            "C": "Length 20\u201340 \u00b5m and width 10\u201320 \u00b5m",
            "D": "Length 50\u2013100 \u00b5m and width 25\u201350 \u00b5m"
        },
        "ans": "A",
        "exp": "According to NCERT, chloroplasts are lens-shaped, oval, spherical, discoid, or ribbon-like organelles having a length of 5\u201310 \u00b5m and width of 2\u20134 \u00b5m.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 220,
        "q": "What is the diameter of the peripheral triplet microtubules in a centriole?",
        "opts": {
            "A": "About 25 nm (diameter of a typical microtubule)",
            "B": "About 250 \u00b5m",
            "C": "About 2.5 nm",
            "D": "About 7 nm"
        },
        "ans": "A",
        "exp": "Centrioles are built of microtubules made of tubulin, which have a characteristic outer diameter of approximately 25 nm.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 221,
        "q": "Which of the following eukaryotic organelles lacks any surrounding membrane?",
        "opts": {
            "A": "Ribosomes, nucleolus, and centrioles",
            "B": "Lysosomes, vacuoles, and peroxisomes",
            "C": "Mitochondria, chloroplasts, and nucleus",
            "D": "Endoplasmic reticulum and Golgi apparatus"
        },
        "ans": "A",
        "exp": "Ribosomes, nucleolus, and centrioles are non-membrane bound structures within eukaryotic cells.",
        "topic": "organelles",
        "sub": "Overview of Cell",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 222,
        "q": "Which statement correctly describes the nature of tonoplast in plant cells?",
        "opts": {
            "A": "A semi-permeable unit membrane that actively maintains higher solute concentration inside the vacuole than in the cytoplasm",
            "B": "A freely permeable cellulosic wall allowing bulk flow of all macromolecules",
            "C": "A double-membrane envelope identical to the nuclear envelope",
            "D": "A temporary proteinaceous crystal that dissolves during mitosis"
        },
        "ans": "A",
        "exp": "The tonoplast is a selectively permeable membrane endowed with transport pumps that maintain the vacuole's hypertonic internal state relative to the cytosol.",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 223,
        "q": "The nucleolus is organized around specific chromosomal sites designated as:",
        "opts": {
            "A": "Nucleolar Organizer Regions (NORs)",
            "B": "Kinetochores",
            "C": "Centromeres",
            "D": "Telomeres"
        },
        "ans": "A",
        "exp": "Nucleoli form around Nucleolar Organizer Regions (NORs) of satellite chromosomes where tandem clusters of ribosomal RNA genes are transcribed.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 224,
        "q": "Why is chromatin staining with basic dyes like acetocarmine or Feulgen effective?",
        "opts": {
            "A": "DNA contains negatively charged phosphate groups that avidly bind positively charged basic dyes",
            "B": "Histones have an overall negative charge that repels acidic dyes",
            "C": "The nuclear envelope is composed of basic lipoproteins",
            "D": "Chromatin consists entirely of basic polysaccharides"
        },
        "ans": "A",
        "exp": "DNA's phosphodiester backbone imparts a strong negative charge, allowing it to bind basic (positively charged) histological dyes like basic fuchsin and acetocarmine.",
        "topic": "nucleus",
        "sub": "Chromatin and Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 225,
        "q": "In a telocentric chromosome, the ratio of the length of the short arm (p) to the long arm (q) is:",
        "opts": {
            "A": "Zero (the short arm is absent)",
            "B": "1:1 (arms are equal)",
            "C": "1:2 (short arm is half long arm)",
            "D": "1:10 (short arm is tiny)"
        },
        "ans": "A",
        "exp": "In telocentric chromosomes, the centromere is strictly terminal, so there is only one arm and the short arm length is zero.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 226,
        "q": "The nucleoplasm contains which of the following structures?",
        "opts": {
            "A": "Nucleolus and chromatin",
            "B": "Centrosome and centrioles",
            "C": "Thylakoids and grana",
            "D": "Cristae and oxysomes"
        },
        "ans": "A",
        "exp": "The nuclear matrix or nucleoplasm contains the nucleolus and chromatin suspended within it.",
        "topic": "nucleus",
        "sub": "Nucleus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 227,
        "q": "Which organelle plays a crucial role in forming the acrosome of a mature mammalian sperm?",
        "opts": {
            "A": "Golgi apparatus",
            "B": "Endoplasmic reticulum",
            "C": "Mitochondrion",
            "D": "Lysosome"
        },
        "ans": "A",
        "exp": "The acrosome at the anterior tip of the spermatozoon is a modified giant lysosome-like organelle derived directly from the Golgi apparatus during spermiogenesis.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 228,
        "q": "The cisternae of the Golgi apparatus are often found arranged in a:",
        "opts": {
            "A": "Concentric, parallel stack resembling a pile of saucers",
            "B": "Randomly scattered spherical cluster throughout the cytosol",
            "C": "Continuous labyrinth identical to the RER lumen",
            "D": "Single large balloon-like sphere filling 90% of the cell"
        },
        "ans": "A",
        "exp": "Golgi cisternae are arranged in parallel curved stacks resembling a pile of saucers with distinct cis and trans polarity.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 229,
        "q": "Which of the following statements about plant cell vacuoles is FALSE?",
        "opts": {
            "A": "Amoeba contains a tonoplast-bounded central sap vacuole occupying 90% of its volume",
            "B": "The tonoplast actively pumps ions into the vacuole against a concentration gradient",
            "C": "In plant cells, the vacuole maintains turgidity and rigidity of the cell",
            "D": "Excretory byproducts and waste materials are deposited in the vacuolar sap"
        },
        "ans": "A",
        "exp": "Amoeba has contractile and food vacuoles, not a 90% volume central sap vacuole with a tonoplast (which is unique to mature plant cells).",
        "topic": "organelles",
        "sub": "Vacuoles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 230,
        "q": "A lysosome that has completed digestion and contains undigested residual waste material is known as a:",
        "opts": {
            "A": "Residual body (telolysosome)",
            "B": "Primary lysosome",
            "C": "Secondary lysosome",
            "D": "Autophagosome"
        },
        "ans": "A",
        "exp": "A residual body or telolysosome is an exhausted lysosome containing indigestible residues, which is eliminated by exocytosis or retained as lipofuscin age pigment.",
        "topic": "organelles",
        "sub": "Lysosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 231,
        "q": "The outer nuclear membrane usually remains continuous with the:",
        "opts": {
            "A": "Endoplasmic reticulum and also bears ribosomes on it",
            "B": "Golgi cisternae trans-face",
            "C": "Plasma membrane outer layer",
            "D": "Mitochondrial outer membrane"
        },
        "ans": "A",
        "exp": "The outer nuclear membrane remains continuous with the endoplasmic reticulum and bears ribosomes on its cytosolic surface.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 232,
        "q": "Which ion is essential for maintaining the structural association between the large and small subunits of ribosomes?",
        "opts": {
            "A": "Magnesium (Mg2+)",
            "B": "Calcium (Ca2+)",
            "C": "Iron (Fe2+)",
            "D": "Potassium (K+)"
        },
        "ans": "A",
        "exp": "A critical concentration of magnesium ions (Mg2+, ~0.001 M) is required for the association of ribosomal subunits; lower concentrations cause dissociation into 60S and 40S (or 50S and 30S).",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 233,
        "q": "Which of the following rRNA molecules is NOT synthesized in the nucleolus, but is transcribed in the nucleoplasm by RNA polymerase III?",
        "opts": {
            "A": "5S rRNA",
            "B": "28S rRNA",
            "C": "18S rRNA",
            "D": "5.8S rRNA"
        },
        "ans": "A",
        "exp": "In eukaryotes, 28S, 18S, and 5.8S rRNAs are transcribed as a single 45S precursor in the nucleolus by RNA polymerase I, whereas 5S rRNA is transcribed in the nucleoplasm by RNA polymerase III.",
        "topic": "nucleus",
        "sub": "Nucleolus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 234,
        "q": "The circular DNA molecule in the chloroplast stroma is called the:",
        "opts": {
            "A": "cpDNA or plastome",
            "B": "Genophore",
            "C": "Plasmid",
            "D": "Kinetoplast"
        },
        "ans": "A",
        "exp": "Chloroplast DNA is referred to as cpDNA or plastome; it encodes key photosynthetic proteins including the large subunit of RuBisCO.",
        "topic": "organelles",
        "sub": "Chloroplasts",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 235,
        "q": "Which organelle is responsible for post-translational modification of proteins such as phosphorylation, sulfation, and proteolysis?",
        "opts": {
            "A": "Golgi apparatus",
            "B": "Ribosome",
            "C": "Nucleolus",
            "D": "Centrosome"
        },
        "ans": "A",
        "exp": "The Golgi apparatus carries out extensive post-translational modifications of cargo proteins, including terminal glycosylation, sulfation, and specific proteolytic cleavage.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 236,
        "q": "In animal cells, lipid-like steroidal hormones are synthesized in the:",
        "opts": {
            "A": "Smooth endoplasmic reticulum (SER)",
            "B": "Rough endoplasmic reticulum (RER)",
            "C": "Nucleolus",
            "D": "Lysosomes"
        },
        "ans": "A",
        "exp": "According to NCERT, in animal cells, lipid-like steroidal hormones are synthesized in SER.",
        "topic": "organelles",
        "sub": "Endoplasmic Reticulum",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 237,
        "q": "Which organelle forms the cell plate during cytokinesis in plant cells?",
        "opts": {
            "A": "Golgi-derived phragmoplast vesicles",
            "B": "Centriolar aster microtubules",
            "C": "Mitochondrial fission fragments",
            "D": "Tonoplast membrane fragments"
        },
        "ans": "A",
        "exp": "During plant cytokinesis, Golgi apparatus secretes vesicles that align at the equatorial plane to form the phragmoplast and cell plate, which matures into the middle lamella.",
        "topic": "organelles",
        "sub": "Golgi Apparatus",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 238,
        "q": "Which structure forms the spindle poles during mitosis in animal cells?",
        "opts": {
            "A": "Centrosomes containing pairs of centrioles",
            "B": "Kinetochores on the chromosomes",
            "C": "Nucleoli inside the nucleus",
            "D": "Peroxisomes in the cytoplasm"
        },
        "ans": "A",
        "exp": "In animal cells, duplicated centrosomes migrate to opposite ends of the cell to form the spindle poles that organize the astral rays and spindle fibers.",
        "topic": "organelles",
        "sub": "Centrosome and Centrioles",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 239,
        "q": "The space between the inner and outer membranes of a mitochondrion is called the:",
        "opts": {
            "A": "Intermembrane space (perimitochondrial space)",
            "B": "Mitochondrial matrix",
            "C": "Thylakoid lumen",
            "D": "Peroxisomal lumen"
        },
        "ans": "A",
        "exp": "The intermembrane space lies between the outer and inner mitochondrial membranes; protons are pumped here by the electron transport chain.",
        "topic": "organelles",
        "sub": "Mitochondria",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 240,
        "q": "Which of the following contains non-pigmented plastids?",
        "opts": {
            "A": "Pith and cortex of roots",
            "B": "Petals of yellow flowers",
            "C": "Ripe chili fruits",
            "D": "Green mesophyll cells of leaves"
        },
        "ans": "A",
        "exp": "Leucoplasts are colorless plastids found in underground roots, tubers, seeds, and pith cells that are shielded from light.",
        "topic": "organelles",
        "sub": "Plastids",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 241,
        "q": "The fluid mosaic model replaced the unit membrane model because it explained:",
        "opts": {
            "A": "Dynamic lateral mobility of proteins and lipids, and selective transport of polar and nonpolar substances",
            "B": "The presence of a rigid carbohydrate lattice",
            "C": "The permanent covalent bonds between all membrane components",
            "D": "The absence of lipids in eukaryotic cells"
        },
        "ans": "A",
        "exp": "Singer and Nicolson's Fluid Mosaic Model accurately explained the thermodynamic stability of amphipathic lipids and proteins, lateral diffusion, and diverse transport phenomena.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 242,
        "q": "Which factor increases the fluidity of the plasma membrane?",
        "opts": {
            "A": "An increase in the proportion of unsaturated fatty acids with cis-double bonds",
            "B": "An increase in long saturated fatty acid chains",
            "C": "A decrease in temperature near freezing point",
            "D": "A high concentration of peptidoglycan in the bilayer"
        },
        "ans": "A",
        "exp": "Cis-double bonds in unsaturated fatty acid chains introduce kinks that prevent tight packing of lipids, thereby increasing membrane fluidity.",
        "topic": "organelles",
        "sub": "Cell Membrane",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 243,
        "q": "Which of the following is true regarding bacterial ribosomes?",
        "opts": {
            "A": "They are 70S particles that dissociate into 50S and 30S subunits",
            "B": "They are 80S particles consisting of 60S and 40S subunits",
            "C": "They are bounded by a single unit membrane",
            "D": "They are synthesized exclusively inside a membrane-bound nucleolus"
        },
        "ans": "A",
        "exp": "Bacterial ribosomes are 70S ribonucleoprotein complexes that dissociate into 50S (large) and 30S (small) subunits.",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 244,
        "q": "The eukaryotic 80S ribosome consists of two subunits with sedimentation coefficients of:",
        "opts": {
            "A": "60S and 40S",
            "B": "50S and 30S",
            "C": "50S and 40S",
            "D": "60S and 30S"
        },
        "ans": "A",
        "exp": "The eukaryotic cytoplasmic ribosome is an 80S complex composed of a 60S large subunit and a 40S small subunit.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 245,
        "q": "The sedimentation coefficient (S) is indirectly a measure of:",
        "opts": {
            "A": "Density and size of the particle",
            "B": "Electrical charge on the surface",
            "C": "Amount of ATP hydrolyzed per minute",
            "D": "Length of the fatty acid chains"
        },
        "ans": "A",
        "exp": "The sedimentation coefficient (Svedberg unit) is a measure of the rate of sedimentation in an ultracentrifuge, reflecting a particle's size, shape, and buoyant density.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 246,
        "q": "Ribosomal RNA (rRNA) in prokaryotic 70S ribosomes comprises which three species?",
        "opts": {
            "A": "23S, 16S, and 5S rRNAs",
            "B": "28S, 18S, and 5.8S rRNAs",
            "C": "28S, 16S, and 5S rRNAs",
            "D": "23S, 18S, and 5.8S rRNAs"
        },
        "ans": "A",
        "exp": "A prokaryotic 70S ribosome contains 23S rRNA and 5S rRNA in the 50S subunit, and 16S rRNA in the 30S subunit.",
        "topic": "prokaryote",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 247,
        "q": "Eukaryotic 80S ribosomes contain which four species of rRNA?",
        "opts": {
            "A": "28S, 18S, 5.8S, and 5S rRNAs",
            "B": "23S, 16S, 5S, and 5.8S rRNAs",
            "C": "28S, 16S, and 5S rRNAs",
            "D": "18S, 16S, and 5S rRNAs"
        },
        "ans": "A",
        "exp": "The eukaryotic 80S ribosome contains 28S, 5.8S, and 5S rRNAs in its 60S subunit, and 18S rRNA in its 40S subunit.",
        "topic": "organelles",
        "sub": "Ribosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 248,
        "q": "Which organelle is physically directly connected to the outer nuclear membrane?",
        "opts": {
            "A": "Endoplasmic reticulum",
            "B": "Mitochondrion",
            "C": "Lysosome",
            "D": "Centrosome"
        },
        "ans": "A",
        "exp": "The outer membrane of the nuclear envelope is morphologically continuous with the membrane of the endoplasmic reticulum.",
        "topic": "nucleus",
        "sub": "Nuclear Envelope",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 249,
        "q": "The primary constriction of a chromosome is also known as the:",
        "opts": {
            "A": "Centromere",
            "B": "Telomere",
            "C": "Chromomere",
            "D": "Secondary constriction"
        },
        "ans": "A",
        "exp": "Every chromosome has a primary constriction called the centromere, on the sides of which kinetochores are situated.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 250,
        "q": "A chromosome that appears L-shaped or J-shaped during anaphase due to unequal arm lengths is typically:",
        "opts": {
            "A": "Sub-metacentric",
            "B": "Metacentric (V-shaped)",
            "C": "Telocentric (I-shaped)",
            "D": "Acrocentric (J-shaped or rod-like)"
        },
        "ans": "A",
        "exp": "During anaphase, metacentric chromosomes appear V-shaped, sub-metacentric appear L-shaped, acrocentric appear J-shaped, and telocentric appear I-shaped/rod-like.",
        "topic": "nucleus",
        "sub": "Chromosomes",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
