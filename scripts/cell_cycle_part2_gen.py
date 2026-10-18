# Cell Cycle Part 2: Q126 to Q250 (Medium)
import json

def get_part2_raw():
    return [
    {
        "q_num": 126,
        "q": "The eukaryotic cell cycle is driven by oscillations in the activity of which heterodimeric protein complexes?",
        "opts": {
            "A": "Cyclin-Dependent Kinases (CDKs) partnered with regulatory Cyclin proteins",
            "B": "DNA polymerases bound to RNA primers",
            "C": "Cohesins bound to condensins",
            "D": "Actin-myosin filaments"
        },
        "ans": "A",
        "exp": "The core cell cycle engine consists of Cyclin-Dependent Kinases (CDKs), whose catalytic activity requires binding to regulatory cyclin partners whose levels oscillate during the cycle.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 127,
        "q": "Which cyclin-CDK complex is primarily responsible for driving mammalian cells through the G1/S restriction point?",
        "opts": {
            "A": "Cyclin D-Cdk4/6 and Cyclin E-Cdk2",
            "B": "Cyclin B-Cdk1",
            "C": "Cyclin A-Cdk1",
            "D": "Cyclin H-Cdk7"
        },
        "ans": "A",
        "exp": "Cyclin D with Cdk4/6 initiates phosphorylation of the retinoblastoma protein (pRb), followed by Cyclin E-Cdk2, committing the cell to enter S phase.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 128,
        "q": "How does the tumor suppressor protein pRb (Retinoblastoma protein) prevent premature entry into S phase?",
        "opts": {
            "A": "By binding and sequestering the E2F transcription factor, blocking transcription of S-phase genes",
            "B": "By destroying the nuclear membrane prematurely",
            "C": "By preventing tubulin polymerization",
            "D": "By hydrolyzing ATP in mitochondria"
        },
        "ans": "A",
        "exp": "Unphosphorylated pRb binds E2F transcription factors; hyperphosphorylation of pRb by G1 cyclin-CDKs releases E2F to activate transcription of genes required for DNA replication.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 129,
        "q": "When ionizing radiation induces DNA double-strand breaks in G1 phase, which 'guardian of the genome' transcription factor is stabilized to halt the cell cycle?",
        "opts": {
            "A": "p53 (which transactivates the Cdk inhibitor p21)",
            "B": "E2F",
            "C": "Cyclin B",
            "D": "Separase"
        },
        "ans": "A",
        "exp": "DNA damage activates ATM/ATR kinases that phosphorylate and stabilize p53, which induces transcription of p21 (CIP1), a CDK inhibitor that arrests the cell at the G1/S checkpoint.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 130,
        "q": "The Maturation Promoting Factor (MPF), which drives cells from G2 into mitosis (M phase), consists of:",
        "opts": {
            "A": "Cyclin B complexed with Cdk1 (Cdc2)",
            "B": "Cyclin D complexed with Cdk4",
            "C": "Cyclin E complexed with Cdk2",
            "D": "p53 complexed with p21"
        },
        "ans": "A",
        "exp": "MPF (mitosis-promoting factor) is composed of Cyclin B and Cdk1 (Cdc2 kinase); its activation triggers nuclear envelope breakdown, chromosome condensation, and spindle assembly.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 131,
        "q": "The activation of MPF (Cyclin B-Cdk1) at the G2/M transition is executed by which dual-specificity phosphatase that removes inhibitory phosphates from Cdk1?",
        "opts": {
            "A": "Cdc25 phosphatase",
            "B": "Wee1 kinase",
            "C": "DNA polymerase alpha",
            "D": "Securin"
        },
        "ans": "A",
        "exp": "Wee1 kinase adds inhibitory phosphates (Thr14, Tyr15) to Cdk1; at the G2/M transition, Cdc25 phosphatase removes these inhibitory phosphates, rapidly activating MPF.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 132,
        "q": "The Spindle Assembly Checkpoint (SAC) operates at metaphase to monitor:",
        "opts": {
            "A": "Bipolar attachment of kinetochores to spindle microtubules and tension across sister chromatids",
            "B": "Completion of cytokinesis furrowing",
            "C": "Total cellular ATP content",
            "D": "Synthesis of ribosomal RNAs in the nucleolus"
        },
        "ans": "A",
        "exp": "The SAC ensures that all chromosome kinetochores are properly attached to opposite spindle poles before permitting anaphase onset, preventing aneuploidy.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 133,
        "q": "Which checkpoint protein complex monitors unattached kinetochores and emits a diffusible 'wait-anaphase' signal that inhibits the APC/C?",
        "opts": {
            "A": "Mitotic Checkpoint Complex (MCC) containing Mad2, BubR1, Bub3, and Cdc20",
            "B": "MPF complex",
            "C": "Cyclin D-Cdk4",
            "D": "Synaptonemal complex"
        },
        "ans": "A",
        "exp": "Unattached kinetochores catalyze the assembly of the MCC (Mad2, BubR1, Bub3, Cdc20), which sequesters Cdc20, preventing APC/C activation until all kinetochores are attached.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 134,
        "q": "The Anaphase-Promoting Complex / Cyclosome (APC/C) acts biochemically as an:",
        "opts": {
            "A": "E3 ubiquitin ligase that targets securin and Cyclin B for degradation by the 26S proteasome",
            "B": "ATP-dependent DNA helicase",
            "C": "RNA-directed RNA polymerase",
            "D": "Protein phosphatase that removes phosphate from histones"
        },
        "ans": "A",
        "exp": "The APC/C is a multi-subunit E3 ubiquitin ligase that polyubiquitinates securin and Cyclin B, targeting them for destruction by the 26S proteasome to initiate anaphase and mitotic exit.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 135,
        "q": "What triggers the abrupt cleavage of cohesin rings and separation of sister chromatids at the start of anaphase?",
        "opts": {
            "A": "Degradation of securin frees the protease separase, which cleaves the Scc1/Rad21 subunit of cohesin",
            "B": "Direct phosphorylation of DNA by Cdk1",
            "C": "Depolymerization of all actin microfilaments",
            "D": "Immediate assembly of the cell wall"
        },
        "ans": "A",
        "exp": "Securin destruction releases active separase, an endopeptidase that cleaves the kleisin subunit (Scc1) of cohesin, allowing sister chromatids to separate.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 136,
        "q": "Condensation of interphase chromatin into compact metaphase chromosomes is driven by which multi-protein ring complex?",
        "opts": {
            "A": "Condensin (Condensin I and II)",
            "B": "Cohesin",
            "C": "Securin",
            "D": "Kinetochore Ndc80 complex"
        },
        "ans": "A",
        "exp": "Condensins are five-subunit structural maintenance of chromosomes (SMC) complexes that use ATP hydrolysis to introduce positive supercoils and loop extrusion, condensing chromosomes.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 137,
        "q": "Nuclear envelope breakdown during late prophase in animal cells is triggered primarily by:",
        "opts": {
            "A": "Phosphorylation of nuclear lamins (lamin A, B, C) by active Cdk1-Cyclin B (MPF)",
            "B": "Cleavage of the lipid bilayer by lysosomal lipases",
            "C": "Mechanical tearing by centrioles",
            "D": "Direct binding of actin microfilaments"
        },
        "ans": "A",
        "exp": "Cdk1-mediated phosphorylation of serine residues on nuclear lamins causes depolymerization of the nuclear lamina meshwork, leading to nuclear envelope fenestration and breakdown.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 138,
        "q": "The kinetochore outer plate binds spindle microtubules via which conserved multi-protein rod-like complex?",
        "opts": {
            "A": "Ndc80 complex",
            "B": "Cohesin ring",
            "C": "Histone octamer",
            "D": "Desmotubule"
        },
        "ans": "A",
        "exp": "The Ndc80 complex is a 57-nm elongated heterotetramer in the outer kinetochore that directly binds the lattice and plus ends of spindle microtubules.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 139,
        "q": "Congression refers to the mitotic process by which:",
        "opts": {
            "A": "Chromosomes oscillate and move towards the equatorial metaphase plate",
            "B": "Centrosomes duplicate in S phase",
            "C": "Nuclear envelope reforms in telophase",
            "D": "Sister chromatids fuse together"
        },
        "ans": "A",
        "exp": "Chromosome congression is the directed movement of unaligned chromosomes during prometaphase to align stably on the equatorial spindle plane (metaphase plate).",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 140,
        "q": "During anaphase, 'Anaphase A' movement is defined as:",
        "opts": {
            "A": "The poleward movement of daughter chromosomes accompanied by the shortening of kinetochore microtubules",
            "B": "The elongation of the spindle poles away from each other",
            "C": "The ingression of the cleavage furrow",
            "D": "The decondensation of chromosomes into chromatin"
        },
        "ans": "A",
        "exp": "Anaphase A involves the movement of chromosomes toward the spindle poles driven by shortening (depolymerization) of kinetochore microtubules.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 141,
        "q": "During anaphase, 'Anaphase B' movement is defined as:",
        "opts": {
            "A": "The separation and pushing apart of the two spindle poles by sliding of overlapping interpolar microtubules",
            "B": "The splitting of the centromere by separase",
            "C": "The disassembly of the nuclear lamina",
            "D": "The attachment of asters to the cell membrane"
        },
        "ans": "A",
        "exp": "Anaphase B involves the elongation of the mitotic spindle and increased distance between the two spindle poles, driven by kinesin-5 motors sliding antiparallel interpolar microtubules.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 142,
        "q": "Which bipolar plus-end-directed kinesin motor protein crosslinks overlapping antiparallel interpolar microtubules and pushes the spindle poles apart during Anaphase B?",
        "opts": {
            "A": "Kinesin-5 (Eg5)",
            "B": "Axonemal dynein",
            "C": "Myosin II",
            "D": "Cofilin"
        },
        "ans": "A",
        "exp": "Kinesin-5 (Eg5) is a homotetrameric motor that crosslinks antiparallel interpolar microtubules and walks toward their plus ends, pushing the two poles apart.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 143,
        "q": "At the end of mitosis, the reassembly of the nuclear envelope around decondensing chromosomes in telophase requires:",
        "opts": {
            "A": "Dephosphorylation of nuclear lamins by protein phosphatases (PP1 and PP2A)",
            "B": "Addition of ubiquitin to histones",
            "C": "Further activation of Cdk1-Cyclin B",
            "D": "Depolymerization of all nuclear pores"
        },
        "ans": "A",
        "exp": "Inactivation of Cdk1 allows cellular phosphatases (PP1/PP2A) to remove phosphates from lamins and nuclear envelope proteins, promoting their reassembly around daughter chromosome masses.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 144,
        "q": "In animal cytokinesis, what specifies the position and orientation of the cleavage furrow plane?",
        "opts": {
            "A": "The position of the mitotic spindle midzone (central spindle) during anaphase",
            "B": "The original location of the nucleolus",
            "C": "The position of the Golgi apparatus",
            "D": "The direction of gravity"
        },
        "ans": "A",
        "exp": "Signals from the anaphase central spindle (specifically centralspindlin complex activating RhoA) position the contractile ring precisely halfway between the segregated chromosome sets.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 145,
        "q": "Which small GTPase acts as the master molecular switch that triggers the assembly and contraction of the actin-myosin contractile ring during animal cytokinesis?",
        "opts": {
            "A": "RhoA",
            "B": "Ras",
            "C": "Ran-GTP",
            "D": "Rab"
        },
        "ans": "A",
        "exp": "Active RhoA-GTP at the equatorial cortex recruits formins to polymerize linear actin filaments and activates Rho-kinase to phosphorylate myosin light chain, triggering contraction.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 146,
        "q": "The final physical separation of the two daughter animal cells at the end of cytokinesis is termed:",
        "opts": {
            "A": "Abscission (mediated by ESCRT-III complexes)",
            "B": "Karyokinesis",
            "C": "Congression",
            "D": "Terminalization"
        },
        "ans": "A",
        "exp": "Abscission is the final scission of the intercellular bridge, mediated by the ESCRT-III membrane-fission machinery.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 147,
        "q": "During plant cytokinesis, the Golgi-derived vesicles that fuse to form the cell plate carry which cell wall precursors?",
        "opts": {
            "A": "Pectic polysaccharides and hemicellulose",
            "B": "Peptidoglycan and teichoic acid",
            "C": "Glycogen and chitin",
            "D": "Pure cholesterol micelles"
        },
        "ans": "A",
        "exp": "Golgi secretory vesicles transport pectic substances (calcium pectate precursors) and matrix hemicelluloses to the phragmoplast, coalescing into the early cell plate and middle lamella.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 148,
        "q": "Why cannot plant cells divide by cleavage furrowing like animal cells?",
        "opts": {
            "A": "Because plant cells are encased by a rigid, inextensible cellulosic cell wall",
            "B": "Because plant cells lack actin microfilaments",
            "C": "Because plant cells have no nucleus",
            "D": "Because plant cells lack plasma membranes"
        },
        "ans": "A",
        "exp": "The presence of a rigid external cell wall prevents plant cells from pinching inward by furrowing; instead, they construct a new cross-wall from the inside out.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 149,
        "q": "Endomitosis (or endoreduplication) is a variation of the cell cycle where:",
        "opts": {
            "A": "Chromosomes replicate repeatedly without nuclear division or cytokinesis, generating polyploid cells",
            "B": "Cells divide into four daughter cells without DNA replication",
            "C": "Centrioles replicate 50 times in G1 phase",
            "D": "Mitochondria undergo meiosis"
        },
        "ans": "A",
        "exp": "Endoreduplication involves repeated rounds of S-phase genome duplication without subsequent mitosis or cytokinesis, resulting in polyploidy (e.g., salivary polytene chromosomes, megakaryocytes).",
        "topic": "interphase",
        "sub": "Cell Cycle Variations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 150,
        "q": "Free-nuclear division, leading to a coenocytic multinucleate tissue, is observed during the development of:",
        "opts": {
            "A": "Liquid endosperm of coconut (Cocos nucifera)",
            "B": "Mature human erythrocyte",
            "C": "Onion epidermal cells",
            "D": "Amoeba during binary fission"
        },
        "ans": "A",
        "exp": "In coconut liquid endosperm, repeated karyokinesis occurs without cytokinesis, producing a multinucleated free-nuclear syncytium containing thousands of nuclei.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 151,
        "q": "The synaptonemal complex (SC) is a tripartite proteinaceous ladder-like structure that:",
        "opts": {
            "A": "Physically bridges and aligns homologous chromosomes along their entire length during zygotene and pachytene",
            "B": "Connects sister chromatids to spindle microtubules at metaphase",
            "C": "Forms the cleavage furrow in dividing animal cells",
            "D": "Packages DNA into nucleosomes"
        },
        "ans": "A",
        "exp": "The synaptonemal complex consists of two lateral elements (anchoring homologous chromatin loops) and a central element connected by transverse filaments, mediating homolog alignment.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 152,
        "q": "Which topoisomerase-like transesterase enzyme initiates meiotic recombination by deliberately generating programmed DNA double-strand breaks (DSBs) during leptotene?",
        "opts": {
            "A": "Spo11 enzyme",
            "B": "DNA polymerase I",
            "C": "DNA ligase IV",
            "D": "Cas9 endonuclease"
        },
        "ans": "A",
        "exp": "Spo11 introduces programmed DNA double-strand breaks at recombination hotspots in early meiotic prophase, initiating homology search and crossing over.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 153,
        "q": "Which meiosis-specific recombinase enzyme works alongside Rad51 to catalyze strand invasion between non-sister chromatids of homologous chromosomes during pachytene?",
        "opts": {
            "A": "Dmc1 (Disrupted Meiotic cDNA 1)",
            "B": "DNA polymerase delta",
            "C": "Taq polymerase",
            "D": "Topoisomerase II"
        },
        "ans": "A",
        "exp": "Dmc1 is a meiosis-specific recombinase (a homolog of RecA and Rad51) that mediates strand exchange specifically between non-sister chromatids of homologous chromosomes.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 154,
        "q": "Why do sister chromatids remain attached at their centromeres during Anaphase I of meiosis, unlike in mitotic anaphase?",
        "opts": {
            "A": "Centromeric cohesin (Rec8) is protected from separase cleavage by the protein Shugoshin (Sgo1) and PP2A",
            "B": "Centromeres are completely absent in Meiosis I",
            "C": "DNA replication did not occur in S phase",
            "D": "Spindle fibers attach to only one pole"
        },
        "ans": "A",
        "exp": "Shugoshin recruits protein phosphatase 2A (PP2A) to centromeres, keeping Rec8 dephosphorylated and resistant to separase; arm cohesin is cleaved, releasing chiasmata while centromeres hold.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 155,
        "q": "What happens to Shugoshin during the transition to Anaphase II of meiosis?",
        "opts": {
            "A": "Shugoshin is degraded/inactivated, allowing separase to cleave centromeric cohesin and separate sister chromatids",
            "B": "Shugoshin duplicates into four copies",
            "C": "Shugoshin binds to the nuclear envelope",
            "D": "Shugoshin converts chromosomes into polytene fibers"
        },
        "ans": "A",
        "exp": "In Meiosis II, Shugoshin is removed from the centromeres; separase cleaves the remaining centromeric cohesin, allowing sister chromatids to separate to opposite poles.",
        "topic": "meiosis",
        "sub": "Anaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 156,
        "q": "The meiotic cohesin complex contains a meiosis-specific kleisin subunit that replaces the mitotic Scc1/Rad21 subunit; this protein is:",
        "opts": {
            "A": "Rec8",
            "B": "Spo11",
            "C": "Dmc1",
            "D": "Mad2"
        },
        "ans": "A",
        "exp": "Rec8 replaces Scc1 as the kleisin subunit in meiotic cohesin complexes, conferring differential regulation between chromosome arms and centromeres.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 157,
        "q": "In Metaphase I of meiosis, the orientation of maternal and paternal chromosomes of each bivalent toward either spindle pole is completely random; this constitutes the physical basis of:",
        "opts": {
            "A": "Mendel's Law of Independent Assortment",
            "B": "Mendel's Law of Dominance",
            "C": "The Central Dogma of Molecular Biology",
            "D": "Chargaff's Base-Pairing Rules"
        },
        "ans": "A",
        "exp": "Random alignment of bivalents at the Metaphase I plate means each chromosome pair segregates independently of others, providing the physical mechanism of Mendel's second law.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 158,
        "q": "How many genetically distinct combinations of maternal and paternal chromosomes can be produced by independent assortment alone in human gametes (n = 23)?",
        "opts": {
            "A": "2^23 (approximately 8.4 million combinations)",
            "B": "2 \u00d7 23 = 46 combinations",
            "C": "23^2 = 529 combinations",
            "D": "4^23 combinations"
        },
        "ans": "A",
        "exp": "With 23 chromosome pairs, independent assortment generates 2^n = 2^23 \u2248 8,388,608 unique chromosomal combinations in gametes, even without crossing over.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 159,
        "q": "A prolonged diplotene arrest in the oocytes of certain vertebrates (such as amphibians) where chromosomes form paired lateral loops actively transcribing RNA is called the:",
        "opts": {
            "A": "Lampbrush chromosome stage",
            "B": "Polytene chromosome stage",
            "C": "Dictyosome stage",
            "D": "Centriolar cartwheel stage"
        },
        "ans": "A",
        "exp": "During prolonged diplotene in amphibian oocytes, bivalents decondense into giant lampbrush chromosomes with prominent loops transcribing yolk and maternal mRNA for early embryogenesis.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 160,
        "q": "The resting period in human female oogenesis between embryonic diplotene and puberty (which may last 12 to 50 years) is specifically termed:",
        "opts": {
            "A": "Dictyotene (or dictyate stage)",
            "B": "Interkinesis",
            "C": "Diakinesis",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "In human females, primary oocytes enter a specialized diplotene resting stage called dictyotene during fetal gestation and remain arrested until selected for ovulation decades later.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 161,
        "q": "A human somatic cell in G1 phase contains 46 chromosomes and 2C DNA content. What will be the chromosome number and DNA content in this cell during Metaphase of mitosis?",
        "opts": {
            "A": "46 chromosomes and 4C DNA content",
            "B": "92 chromosomes and 4C DNA content",
            "C": "46 chromosomes and 2C DNA content",
            "D": "23 chromosomes and C DNA content"
        },
        "ans": "A",
        "exp": "During S phase, DNA replicates from 2C to 4C, but sister chromatids remain joined at one centromere, so chromosome count remains 46 (each having two sister chromatids).",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 162,
        "q": "In the same human cell, what will be the chromosome number and DNA content during Anaphase of mitosis?",
        "opts": {
            "A": "92 chromosomes and 4C DNA content",
            "B": "46 chromosomes and 4C DNA content",
            "C": "46 chromosomes and 2C DNA content",
            "D": "92 chromosomes and 2C DNA content"
        },
        "ans": "A",
        "exp": "At anaphase onset, the 46 centromeres split simultaneously, converting 92 chromatids into 92 individual daughter chromosomes; DNA content remains 4C until cytokinesis.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 163,
        "q": "In a primary spermatocyte entering Meiosis I (at G2 / Prophase I), what is the chromosome number and DNA content relative to normal diploid somatic G1 cell (2n, 2C)?",
        "opts": {
            "A": "2n chromosomes and 4C DNA content",
            "B": "n chromosomes and 2C DNA content",
            "C": "4n chromosomes and 4C DNA content",
            "D": "2n chromosomes and 2C DNA content"
        },
        "ans": "A",
        "exp": "Primary spermatocytes duplicate DNA during pre-meiotic S phase (2C -> 4C), but chromosome number remains diploid (2n).",
        "topic": "meiosis",
        "sub": "Meiosis I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 164,
        "q": "In a secondary spermatocyte at Metaphase II, what is the chromosome number and DNA content?",
        "opts": {
            "A": "n chromosomes and 2C DNA content",
            "B": "2n chromosomes and 4C DNA content",
            "C": "n chromosomes and 1C DNA content",
            "D": "2n chromosomes and 2C DNA content"
        },
        "ans": "A",
        "exp": "Following Meiosis I, the cell is haploid (n = 23 chromosomes in humans), but each chromosome still consists of two sister chromatids, giving a DNA content of 2C.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 165,
        "q": "In a mature spermatozoon (sperm cell) at the end of Meiosis II, what is the chromosome number and DNA content?",
        "opts": {
            "A": "n chromosomes and 1C DNA content",
            "B": "n chromosomes and 2C DNA content",
            "C": "2n chromosomes and 1C DNA content",
            "D": "2n chromosomes and 2C DNA content"
        },
        "ans": "A",
        "exp": "Meiosis II splits sister chromatids, yielding mature haploid gametes with n chromosomes and 1C DNA content.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 166,
        "q": "If a pollen mother cell has 36 chromosomes (2n = 36), how many chromosomes will be present in each of the four microspores formed at the end of meiosis?",
        "opts": {
            "A": "18 chromosomes",
            "B": "36 chromosomes",
            "C": "9 chromosomes",
            "D": "72 chromosomes"
        },
        "ans": "A",
        "exp": "Microspores are haploid products of meiosis: n = 36 / 2 = 18 chromosomes.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 167,
        "q": "If the root tip cell of an angiosperm has 48 chromosomes, how many chromosomes will be present in its endosperm cell?",
        "opts": {
            "A": "72 chromosomes (3n)",
            "B": "48 chromosomes (2n)",
            "C": "24 chromosomes (n)",
            "D": "96 chromosomes (4n)"
        },
        "ans": "A",
        "exp": "Root tip is diploid (2n = 48, so n = 24). Angiosperm endosperm is triploid (3n = 3 \u00d7 24 = 72 chromosomes).",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 168,
        "q": "A plant species has a haploid chromosome number of n = 10. How many total chromatids are present in a pollen mother cell at Metaphase I of meiosis?",
        "opts": {
            "A": "40 chromatids",
            "B": "20 chromatids",
            "C": "10 chromatids",
            "D": "80 chromatids"
        },
        "ans": "A",
        "exp": "At Metaphase I, the cell is diploid (2n = 20 chromosomes). Since each chromosome has 2 sister chromatids, total chromatids = 20 \u00d7 2 = 40 chromatids.",
        "topic": "meiosis",
        "sub": "Metaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 169,
        "q": "In an organism with 2n = 8 chromosomes, how many chromosomes move to EACH pole during Anaphase I of meiosis?",
        "opts": {
            "A": "4 chromosomes",
            "B": "8 chromosomes",
            "C": "2 chromosomes",
            "D": "16 chromosomes"
        },
        "ans": "A",
        "exp": "In Anaphase I, homologous pairs disjoin; half of the chromosomes (n = 4) move to each spindle pole.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 170,
        "q": "In the same organism with 2n = 8 chromosomes, how many chromosomes move to EACH pole during Anaphase II of meiosis?",
        "opts": {
            "A": "4 chromosomes",
            "B": "8 chromosomes",
            "C": "2 chromosomes",
            "D": "1 chromosome"
        },
        "ans": "A",
        "exp": "In Metaphase II, each haploid cell has n = 4 chromosomes. During Anaphase II, centromeres split and 4 daughter chromosomes move to each pole.",
        "topic": "meiosis",
        "sub": "Anaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 171,
        "q": "Which of the following chemical agents acts as a spindle poison that prevents cell division by depolymerizing microtubules, frequently used to induce polyploidy in agriculture?",
        "opts": {
            "A": "Colchicine",
            "B": "Taxol",
            "C": "Actinomycin D",
            "D": "Cycloheximide"
        },
        "ans": "A",
        "exp": "Colchicine binds tubulin dimers, preventing spindle microtubule polymerisation and arresting dividing cells at metaphase, resulting in chromosome doubling (polyploidy).",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 172,
        "q": "Taxol (paclitaxel), a major chemotherapeutic drug used in breast and ovarian cancer, halts mitosis by:",
        "opts": {
            "A": "Over-stabilizing microtubules and preventing their depolymerization, freezing the mitotic spindle",
            "B": "Inhibiting DNA polymerase alpha",
            "C": "Cleaving histone octamers",
            "D": "Preventing ATP synthesis in mitochondria"
        },
        "ans": "A",
        "exp": "Unlike colchicine which prevents assembly, Taxol binds beta-tubulin and prevents microtubule depolymerization, locking the spindle and triggering apoptosis.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 173,
        "q": "Vinblastine and vincristine (vinca alkaloids) arrest cancer cells in mitosis by:",
        "opts": {
            "A": "Binding tubulin and inhibiting mitotic spindle assembly",
            "B": "Alkylating DNA bases directly",
            "C": "Inhibiting topoisomerase II",
            "D": "Cleaving ribosomal RNA"
        },
        "ans": "A",
        "exp": "Vinca alkaloids bind tubulin at a distinct site from colchicine, preventing microtubule assembly and causing metaphase arrest.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 174,
        "q": "Acentric chromosomal fragments (chromosomes lacking a centromere) fail to move toward the spindle poles during anaphase because:",
        "opts": {
            "A": "They lack kinetochores, the docking sites for spindle microtubules",
            "B": "They lack histone proteins",
            "C": "They cannot replicate their DNA",
            "D": "They are too heavy to move"
        },
        "ans": "A",
        "exp": "Kinetochores assemble strictly on centromeric DNA; without a centromere, acentric fragments cannot attach to spindle fibers and are lost during division (micronuclei).",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 175,
        "q": "Dicentric chromosomes (chromosomes having two centromeres) during anaphase typically form anaphase bridges because:",
        "opts": {
            "A": "The two centromeres are pulled toward opposite spindle poles, stretching and breaking the chromosome arm",
            "B": "They replicate four times in S phase",
            "C": "They cannot bind cohesin",
            "D": "They dissolve into nucleoplasm"
        },
        "ans": "A",
        "exp": "When the two centromeres of a dicentric chromosome attach to opposite poles, poleward forces pull them in opposite directions, creating a chromatin bridge that ruptures.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 176,
        "q": "Amitosis, or direct cell division without spindle formation or chromosome condensation, is characteristically seen in:",
        "opts": {
            "A": "Macronucleus of Paramecium and certain degenerating/senescent tissues",
            "B": "Mammalian zygote",
            "C": "Onion root tip meristems",
            "D": "Human spermatocytes"
        },
        "ans": "A",
        "exp": "Amitosis involves simple dumb-bell shaped constriction of the nucleus without chromosome condensation or spindle assembly (e.g., ciliate macronucleus, mammalian cartilage).",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 177,
        "q": "Which plant tissue is considered ideal for studying and demonstrating the sequential stages of mitosis under a laboratory microscope?",
        "opts": {
            "A": "Onion root tip meristem",
            "B": "Mature xylem vessels",
            "C": "Pollen grains",
            "D": "Ripe tomato fruit pericarp"
        },
        "ans": "A",
        "exp": "Onion root tip squash preparations (Allium cepa) abound in rapidly dividing meristematic cells with large, distinct chromosomes, ideal for observing mitosis.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 178,
        "q": "Which animal tissue is considered ideal for studying the stages of meiotic division in the laboratory?",
        "opts": {
            "A": "Grasshopper or locust testis",
            "B": "Human red blood cells",
            "C": "Mammalian striated muscle",
            "D": "Frog skin epidermis"
        },
        "ans": "A",
        "exp": "Insect testes (grasshopper/locust) contain abundant spermatocytes undergoing synchronous meiotic divisions, making them standard specimens for observing meiosis.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 179,
        "q": "Which plant specimen is routinely used to prepare squash mounts for demonstrating all stages of meiotic Prophase I?",
        "opts": {
            "A": "Young anthers of flower buds (e.g., Tradescantia or onion flower buds)",
            "B": "Leaf mesophyll cells",
            "C": "Stem parenchyma",
            "D": "Cotyledon epidermis"
        },
        "ans": "A",
        "exp": "Young flower bud anthers contain microspore mother cells actively undergoing meiosis to form pollen tetrads.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 180,
        "q": "The nucleolus and nuclear envelope, which disappear in late prophase, start to reappear during:",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "S phase"
        },
        "ans": "A",
        "exp": "Telophase is marked by the reappearance of the nuclear envelope around chromosome clusters and the reformation of nucleoli at nucleolar organizer regions.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 181,
        "q": "What is the primary difference between a kinetochore and a centromere?",
        "opts": {
            "A": "The centromere is the specialized DNA region (primary constriction), while the kinetochore is the protein complex assembled on it",
            "B": "The centromere is made of RNA and the kinetochore is made of lipid",
            "C": "The centromere is located on spindle poles and kinetochore on cell wall",
            "D": "They are identical synonyms with no distinction"
        },
        "ans": "A",
        "exp": "The centromere is the genomic DNA locus (primary constriction), whereas the kinetochore is the multi-protein disc that assembles on the centromeric DNA to dock microtubules.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 182,
        "q": "The term 'karyokinesis' was coined by Schleicher in 1878 to describe:",
        "opts": {
            "A": "The division of the cell nucleus",
            "B": "The division of the cytoplasm",
            "C": "The synthesis of DNA",
            "D": "The replication of centrioles"
        },
        "ans": "A",
        "exp": "Karyokinesis refers specifically to nuclear division, whereas cytokinesis refers to cytoplasmic division.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 183,
        "q": "The term 'mitosis' was coined in 1882 by which cytologist?",
        "opts": {
            "A": "Walther Flemming",
            "B": "Rudolf Virchow",
            "C": "Robert Brown",
            "D": "Theodor Boveri"
        },
        "ans": "A",
        "exp": "Walther Flemming coined the term 'mitosis' (from Greek mitos = thread) to describe thread-like chromosomal movements during nuclear division.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 184,
        "q": "The term 'meiosis' was coined in 1905 by:",
        "opts": {
            "A": "Farmer and Moore",
            "B": "Walther Flemming",
            "C": "Schleiden and Schwann",
            "D": "Watson and Crick"
        },
        "ans": "A",
        "exp": "J.B. Farmer and J.E.S. Moore coined the term 'meiosis' (from Greek meioo = to lessen or reduce) for reductional division.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 185,
        "q": "Which type of meiotic division is called 'reductional division' and which is called 'equational division'?",
        "opts": {
            "A": "Meiosis I is reductional; Meiosis II is equational",
            "B": "Meiosis I is equational; Meiosis II is reductional",
            "C": "Both Meiosis I and II are reductional",
            "D": "Both Meiosis I and II are equational"
        },
        "ans": "A",
        "exp": "Meiosis I reduces chromosome number from diploid (2n) to haploid (n) (reductional division); Meiosis II separates sister chromatids, maintaining haploid count (equational division).",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 186,
        "q": "In which phase of the cell cycle are the two centrioles of an animal cell replicated?",
        "opts": {
            "A": "S phase in the cytoplasm",
            "B": "G1 phase in the nucleus",
            "C": "G2 phase inside the nucleolus",
            "D": "Metaphase plate"
        },
        "ans": "A",
        "exp": "Centriole duplication begins at the G1/S transition and proceeds through S phase in the cytoplasm, concurrent with nuclear DNA replication.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 187,
        "q": "What would happen if a cell undergoes multiple rounds of S phase without entering M phase?",
        "opts": {
            "A": "The cell becomes polyploid with giant multi-stranded chromosomes (endoreduplication)",
            "B": "The cell immediately divides into 100 tiny cells",
            "C": "The chromosome number halves every hour",
            "D": "The cell loses all its DNA"
        },
        "ans": "A",
        "exp": "Repeated S phases uncoupled from M phase result in polyploidy or polyteny, where chromatids remain aligned side-by-side.",
        "topic": "interphase",
        "sub": "Cell Cycle Variations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 188,
        "q": "During which stage of meiotic Prophase I do chromosomes exhibit a 'bouquet stage' where telomeres cluster at one pole of the nuclear envelope?",
        "opts": {
            "A": "Leptotene / early Zygotene",
            "B": "Pachytene",
            "C": "Diplotene",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "In leptotene/early zygotene, chromosome telomeres anchor to the inner nuclear envelope and cluster near the centrosome, forming a characteristic 'bouquet' arrangement that facilitates homology search.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 189,
        "q": "The synaptonemal complex begins to form at zygotene and is completely disassembled by the end of:",
        "opts": {
            "A": "Diplotene",
            "B": "Pachytene",
            "C": "Diakinesis",
            "D": "Leptotene"
        },
        "ans": "A",
        "exp": "The synaptonemal complex disassembles at diplotene, leaving homologous chromosomes held together only at chiasmata.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 190,
        "q": "In human males, meiotic division during spermatogenesis begins at:",
        "opts": {
            "A": "Puberty and continues throughout adult life",
            "B": "Fetal life and ceases at birth",
            "C": "Birth and ceases at puberty",
            "D": "Fertilization only"
        },
        "ans": "A",
        "exp": "In human males, spermatogonia begin meiotic division at puberty and continue to generate sperm continuously throughout adult life.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 191,
        "q": "In human females, how many functional ovum (ova) are produced from a single primary oocyte completing meiosis?",
        "opts": {
            "A": "One ovum (and three polar bodies)",
            "B": "Four functional ova",
            "C": "Two functional ova",
            "D": "Eight ova"
        },
        "ans": "A",
        "exp": "Oogenesis involves highly asymmetric cytokinesis, producing one large nutrient-rich ovum and 2 or 3 tiny non-functional polar bodies.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 192,
        "q": "Why is cytokinesis asymmetric during human female oogenesis?",
        "opts": {
            "A": "To retain almost all cytoplasm, organelles, and nutrient yolk within a single large ovum for supporting early embryonic cleavage",
            "B": "Because female cells lack tubulin",
            "C": "To eliminate half the chromosomes into the urine",
            "D": "Because polar bodies lack DNA"
        },
        "ans": "A",
        "exp": "Unequal cytokinesis ensures that the fertilized zygote inherits sufficient maternal cytoplasm, glycogen, mitochondria, and mRNAs to sustain pre-implantation development.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 193,
        "q": "The second meiotic division in human oocytes is completed only upon:",
        "opts": {
            "A": "Fertilization by a sperm cell in the ampulla of the fallopian tube",
            "B": "Ovulation from the Graafian follicle",
            "C": "Implantation in the endometrium",
            "D": "Onset of menstruation"
        },
        "ans": "A",
        "exp": "The secondary oocyte is arrested at Metaphase II; entry of a sperm activates the APC/C, triggering completion of Meiosis II and second polar body extrusion.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 194,
        "q": "The factor responsible for arresting unfertilized vertebrate secondary oocytes at Metaphase II is called:",
        "opts": {
            "A": "Cytostatic Factor (CSF, involving Mos/MEK/MAPK pathway)",
            "B": "Maturation Promoting Factor (MPF)",
            "C": "Inulin",
            "D": "Cdc25 phosphatase"
        },
        "ans": "A",
        "exp": "Cytostatic Factor (CSF) stabilizes MPF by inhibiting the APC/C, maintaining Metaphase II arrest until calcium influx upon fertilization degrades CSF.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 195,
        "q": "Which type of spindle fibers extend from spindle pole to spindle pole without attaching to chromosome kinetochores?",
        "opts": {
            "A": "Interpolar (polar) microtubules",
            "B": "Kinetochore microtubules",
            "C": "Astral microtubules",
            "D": "Chromokinesins"
        },
        "ans": "A",
        "exp": "Interpolar (non-kinetochore) microtubules overlap at the spindle equator and slide past each other to push spindle poles apart in Anaphase B.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 196,
        "q": "The chromosomal region where sister chromatids are most tightly held together until anaphase is the:",
        "opts": {
            "A": "Centromere",
            "B": "Telomere",
            "C": "Secondary constriction",
            "D": "Chromonema"
        },
        "ans": "A",
        "exp": "Cohesin is concentrated at the centromeric heterochromatin, holding sister chromatids together until separase cleaves it at anaphase.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 197,
        "q": "The number of bivalents in a cell undergoing meiosis is always equal to:",
        "opts": {
            "A": "The haploid chromosome number (n)",
            "B": "The diploid chromosome number (2n)",
            "C": "The tetraploid chromosome number (4n)",
            "D": "Twice the diploid number"
        },
        "ans": "A",
        "exp": "Because each bivalent is a pair of synapsed homologous chromosomes, the number of bivalents equals the haploid number n (e.g., in humans, 23 bivalents).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 198,
        "q": "How many chromosomes and chromatids are present in a human primary oocyte at Metaphase I of meiosis?",
        "opts": {
            "A": "46 chromosomes and 92 chromatids (23 bivalents)",
            "B": "23 chromosomes and 46 chromatids",
            "C": "46 chromosomes and 46 chromatids",
            "D": "92 chromosomes and 92 chromatids"
        },
        "ans": "A",
        "exp": "At Metaphase I, the cell is diploid (2n = 46 chromosomes); each chromosome has two sister chromatids, yielding 46 \u00d7 2 = 92 chromatids arranged in 23 bivalents.",
        "topic": "meiosis",
        "sub": "Metaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 199,
        "q": "How many chromosomes and chromatids are present in each secondary oocyte at Metaphase II?",
        "opts": {
            "A": "23 chromosomes and 46 chromatids",
            "B": "46 chromosomes and 92 chromatids",
            "C": "23 chromosomes and 23 chromatids",
            "D": "46 chromosomes and 46 chromatids"
        },
        "ans": "A",
        "exp": "Following Meiosis I, the secondary oocyte is haploid with 23 chromosomes, each having two sister chromatids, totaling 46 chromatids.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 200,
        "q": "How many chromosomes and chromatids are present in each daughter cell immediately after Telophase II of meiosis?",
        "opts": {
            "A": "23 chromosomes and 23 chromatids",
            "B": "23 chromosomes and 46 chromatids",
            "C": "46 chromosomes and 46 chromatids",
            "D": "46 chromosomes and 23 chromatids"
        },
        "ans": "A",
        "exp": "After Meiosis II, sister chromatids have separated, so each gamete has 23 chromosomes, each consisting of a single chromatid (1C DNA content).",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 201,
        "q": "The Mitotic Index of a tissue is defined as:",
        "opts": {
            "A": "The ratio of the number of cells undergoing mitosis to the total number of cells observed",
            "B": "The time required for S phase completion",
            "C": "The number of chromosomes divided by nuclear volume",
            "D": "The percentage of cells in G0 phase"
        },
        "ans": "A",
        "exp": "Mitotic Index (MI) = (Number of cells in mitosis / Total number of cells) \u00d7 100, reflecting the proliferation rate of a tissue or tumor.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 202,
        "q": "A high mitotic index in a clinical biopsy specimen of human breast tissue is an indicator of:",
        "opts": {
            "A": "Rapidly proliferating malignant tumor (cancer)",
            "B": "Quiescent normal adult tissue in G0",
            "C": "Complete cessation of cell division",
            "D": "Apoptotic cell death"
        },
        "ans": "A",
        "exp": "A high mitotic index reflects uncontrolled, rapid cell proliferation characteristic of aggressive malignancies.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 203,
        "q": "Which of the following occurs during the G2 phase of the cell cycle?",
        "opts": {
            "A": "Duplication of mitochondria and chloroplasts and synthesis of spindle tubulin proteins",
            "B": "Replication of nuclear DNA",
            "C": "Synapsis of homologous chromosomes",
            "D": "Splitting of centromeres"
        },
        "ans": "A",
        "exp": "During G2, cell growth continues, organelle duplication (mitochondria, plastids) occurs, and tubulin and ATP are accumulated for spindle assembly.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 204,
        "q": "In which organism was the molecular machinery of the cell cycle (Cdc genes and CDKs) first discovered by Leland Hartwell and Paul Nurse?",
        "opts": {
            "A": "Yeast (Saccharomyces cerevisiae and Schizosaccharomyces pombe)",
            "B": "Human fibroblasts",
            "C": "Escherichia coli",
            "D": "Drosophila melanogaster"
        },
        "ans": "A",
        "exp": "Hartwell (budding yeast) and Nurse (fission yeast) used temperature-sensitive cell division cycle (cdc) mutants to identify the universal CDK regulatory machinery.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 205,
        "q": "Which type of cell division is responsible for regeneration of accidental tissue loss (such as a regenerating lizard tail)?",
        "opts": {
            "A": "Mitosis",
            "B": "Meiosis",
            "C": "Amitosis",
            "D": "Parthenogenesis"
        },
        "ans": "A",
        "exp": "Tissue regeneration and wound healing rely on repeated mitotic divisions of dedifferentiated blastema cells.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 206,
        "q": "During which phase of meiosis do chiasmata terminalize completely?",
        "opts": {
            "A": "Diakinesis",
            "B": "Diplotene",
            "C": "Pachytene",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "Terminalization of chiasmata reaches completion during diakinesis, the final stage of Prophase I.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 207,
        "q": "The site of crossing over on homologous chromosomes is marked by an X-shaped structure called a:",
        "opts": {
            "A": "Chiasma (plural: chiasmata)",
            "B": "Kinetochore",
            "C": "Centromere",
            "D": "Centrosome"
        },
        "ans": "A",
        "exp": "Chiasmata are the physical X-shaped crossing-over points that hold homologous chromosomes together during diplotene and diakinesis.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 208,
        "q": "The stage of mitosis where chromosomes lose their individual identity and uncoil into chromatin network is:",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "Prophase"
        },
        "ans": "A",
        "exp": "In telophase, chromosomes decondense and revert to diffuse interphase chromatin, losing their distinct individuality.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 209,
        "q": "The formation of the cleavage furrow in dividing animal cells begins at:",
        "opts": {
            "A": "Anaphase / Telophase at the cell periphery",
            "B": "Prophase inside the nucleus",
            "C": "G1 phase in the cytoplasm",
            "D": "S phase"
        },
        "ans": "A",
        "exp": "Cleavage furrowing initiates during late anaphase/early telophase at the equatorial cell cortex, deepening toward the center.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 210,
        "q": "Which of the following events distinguishes Meiosis I from Mitosis?",
        "opts": {
            "A": "Pairing of homologous chromosomes and reduction of chromosome number",
            "B": "Spindle formation",
            "C": "Disappearance of nucleolus",
            "D": "Cytokinesis"
        },
        "ans": "A",
        "exp": "Homolog pairing (synapsis), crossing over, and chromosome number reduction are unique to Meiosis I.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 211,
        "q": "Which of the following events distinguishes Mitosis from Meiosis I?",
        "opts": {
            "A": "Sister chromatids separate at anaphase in mitosis, whereas homologous chromosomes separate in Anaphase I",
            "B": "DNA replicates in mitosis but not in meiosis",
            "C": "Chromosomes align at equator in mitosis only",
            "D": "Mitosis produces 4 cells"
        },
        "ans": "A",
        "exp": "Mitotic anaphase separates sister chromatids (equational), whereas Anaphase I separates homologous chromosome pairs (reductional).",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 212,
        "q": "In which phase of the cell cycle are histones synthesized in coordination with DNA replication?",
        "opts": {
            "A": "S phase",
            "B": "G1 phase",
            "C": "G2 phase",
            "D": "M phase"
        },
        "ans": "A",
        "exp": "Histone gene transcription and translation peak during S phase to package newly replicated DNA strands into nucleosomes.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 213,
        "q": "What is the DNA content of a human cell at G1, G2, and after Telophase of mitosis, respectively?",
        "opts": {
            "A": "2C, 4C, and 2C",
            "B": "2C, 2C, and 2C",
            "C": "4C, 4C, and 2C",
            "D": "C, 2C, and C"
        },
        "ans": "A",
        "exp": "DNA content is 2C in G1, doubles to 4C in S/G2, and returns to 2C in each daughter cell following mitotic telophase and cytokinesis.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 214,
        "q": "What is the chromosome number of a human cell at G1, G2, and after Telophase of mitosis, respectively?",
        "opts": {
            "A": "46, 46, and 46",
            "B": "46, 92, and 46",
            "C": "23, 46, and 23",
            "D": "46, 46, and 23"
        },
        "ans": "A",
        "exp": "Chromosome number remains 46 throughout G1, G2, and in both daughter cells (equational division).",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 215,
        "q": "During which stage of meiotic Prophase I do chromosomes appear like a 'string of beads' due to the presence of chromomeres?",
        "opts": {
            "A": "Leptotene",
            "B": "Pachytene",
            "C": "Diplotene",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "During leptotene, condensed chromatin granules called chromomeres are visible along the thin chromosome threads, giving a beaded appearance.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 216,
        "q": "What enzyme complex degrades the securin protein to permit anaphase onset?",
        "opts": {
            "A": "26S proteasome directed by the APC/C",
            "B": "Lysosome acid hydrolases",
            "C": "DNA polymerase I",
            "D": "Ribosome"
        },
        "ans": "A",
        "exp": "The APC/C polyubiquitinates securin, which is then rapidly degraded by the 26S proteasome, unleashing separase activity.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 217,
        "q": "If the DNA content of an onion root tip cell in G1 phase is 2C, what is the DNA content of its daughter cell after cytokinesis?",
        "opts": {
            "A": "2C",
            "B": "4C",
            "C": "C",
            "D": "8C"
        },
        "ans": "A",
        "exp": "Mitosis produces daughter cells with DNA content identical to the parent cell in G1 (2C).",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 218,
        "q": "How many times does DNA replicate during the entire meiotic cycle (Meiosis I + Meiosis II)?",
        "opts": {
            "A": "Only once (during pre-meiotic interphase S phase)",
            "B": "Twice (once before Meiosis I and once before Meiosis II)",
            "C": "Four times",
            "D": "Zero times"
        },
        "ans": "A",
        "exp": "A cardinal feature of meiosis is that DNA replicates only once (prior to Meiosis I), followed by two nuclear divisions, reducing chromosome number by half.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 219,
        "q": "Interkinesis is followed immediately by:",
        "opts": {
            "A": "Prophase II",
            "B": "Prophase I",
            "C": "Anaphase I",
            "D": "S phase"
        },
        "ans": "A",
        "exp": "Interkinesis is a brief interval between meiosis I and II, followed directly by Prophase II without an intervening S phase.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 220,
        "q": "In plants, meiosis occurs during the formation of:",
        "opts": {
            "A": "Spores (microspores and megaspores)",
            "B": "Gametes directly from sporophyte cells",
            "C": "Zygotes",
            "D": "Root meristematic cells"
        },
        "ans": "A",
        "exp": "In plants showing sporic meiosis (alternation of generations), meiosis occurs in sporangia to form haploid spores, which develop into gametophytes.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 221,
        "q": "In animals, meiosis occurs during the formation of:",
        "opts": {
            "A": "Gametes (sperms and ova)",
            "B": "Spores",
            "C": "Somatic epithelial cells",
            "D": "Bone marrow cells"
        },
        "ans": "A",
        "exp": "In animals exhibiting gametic meiosis, meiosis occurs in gonads (testes and ovaries) to produce haploid gametes.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 222,
        "q": "A diploid cell has 2n = 4 chromosomes. How many distinct chromatids are visible at metaphase of mitosis?",
        "opts": {
            "A": "8 chromatids",
            "B": "4 chromatids",
            "C": "16 chromatids",
            "D": "2 chromatids"
        },
        "ans": "A",
        "exp": "At metaphase, each of the 4 chromosomes consists of 2 sister chromatids: 4 \u00d7 2 = 8 chromatids.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 223,
        "q": "The nucleolus begins to re-form during telophase around specific chromosomal regions called:",
        "opts": {
            "A": "Nucleolar Organizer Regions (NORs)",
            "B": "Centromeres",
            "C": "Kinetochores",
            "D": "Telomeres"
        },
        "ans": "A",
        "exp": "During telophase, nucleoli reassemble at Nucleolar Organizer Regions (NORs) of specific chromosomes where rRNA genes reside.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 224,
        "q": "Which of the following cellular structures is responsible for maintaining the shape of a dividing animal cell?",
        "opts": {
            "A": "Cytoskeleton (cortex of actin and microtubules)",
            "B": "Cell wall",
            "C": "Tonoplast",
            "D": "Glycocalyx"
        },
        "ans": "A",
        "exp": "The cortical actomyosin network and mitotic spindle microtubules maintain cellular shape and coordinate cell division in animal cells.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 225,
        "q": "In an animal cell, when does chromosome decondensation occur?",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "Early prophase"
        },
        "ans": "A",
        "exp": "Chromosomes decondense into diffuse, uncoiled chromatin fibers during telophase.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 226,
        "q": "The mitotic spindle is composed of which protein polymer?",
        "opts": {
            "A": "Tubulin",
            "B": "Actin",
            "C": "Collagen",
            "D": "Keratin"
        },
        "ans": "A",
        "exp": "Spindle fibers are composed of microtubules assembled from alpha- and beta-tubulin heterodimers.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 227,
        "q": "During which phase does cytokinesis overlap with karyokinesis?",
        "opts": {
            "A": "Late anaphase and telophase",
            "B": "Early prophase",
            "C": "Metaphase",
            "D": "S phase"
        },
        "ans": "A",
        "exp": "Cytokinesis initiates during late anaphase and proceeds throughout telophase to complete cell division.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 228,
        "q": "What is the biological outcome of mitosis in unicellular organisms like Amoeba?",
        "opts": {
            "A": "Asexual reproduction (increase in population)",
            "B": "Formation of haploid gametes",
            "C": "Tissue repair only",
            "D": "Endoreduplication"
        },
        "ans": "A",
        "exp": "In unicellular organisms, cell division by mitosis is synonymous with reproduction (binary fission).",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 229,
        "q": "The stage of meiosis where sister chromatid centromeres divide is:",
        "opts": {
            "A": "Anaphase II",
            "B": "Anaphase I",
            "C": "Metaphase I",
            "D": "Prophase I"
        },
        "ans": "A",
        "exp": "Sister chromatid centromeres divide during Anaphase II (resembling mitotic anaphase).",
        "topic": "meiosis",
        "sub": "Anaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 230,
        "q": "The stage of meiosis where homologous chromosomes separate is:",
        "opts": {
            "A": "Anaphase I",
            "B": "Anaphase II",
            "C": "Metaphase II",
            "D": "Telophase II"
        },
        "ans": "A",
        "exp": "Homologous chromosome pairs separate during Anaphase I.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 231,
        "q": "How many daughter cells are produced by 5 successive mitotic divisions from a single parent cell?",
        "opts": {
            "A": "32 cells",
            "B": "10 cells",
            "C": "64 cells",
            "D": "16 cells"
        },
        "ans": "A",
        "exp": "2^5 = 32 cells are formed after 5 successive mitotic divisions.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 232,
        "q": "How many chromosomes are present in a human cell at G0 phase?",
        "opts": {
            "A": "46 chromosomes",
            "B": "23 chromosomes",
            "C": "92 chromosomes",
            "D": "12 chromosomes"
        },
        "ans": "A",
        "exp": "G0 cells are diploid somatic cells arrested from G1, containing 46 chromosomes (2n).",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 233,
        "q": "Which of the following is true regarding human liver cells?",
        "opts": {
            "A": "They are normally in G0 phase but can re-enter the cell cycle upon partial hepatectomy",
            "B": "They divide continuously every 24 hours",
            "C": "They lack nuclei",
            "D": "They undergo meiosis constantly"
        },
        "ans": "A",
        "exp": "Adult hepatocytes are quiescent in G0 but retain proliferative capacity to regenerate liver mass upon surgical resection or injury.",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 234,
        "q": "Which of the following is true regarding human neurons?",
        "opts": {
            "A": "They are terminally differentiated and remain permanently in G0 phase",
            "B": "They undergo meiosis to produce neurotransmitters",
            "C": "They divide mitotically every week",
            "D": "They replicate DNA without division"
        },
        "ans": "A",
        "exp": "Mature human neurons are terminally differentiated, arrested permanently in G0, and generally incapable of mitotic regeneration.",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 235,
        "q": "What happens to the nuclear membrane in closed mitosis (observed in yeast)?",
        "opts": {
            "A": "It remains intact throughout mitosis, and spindle forms inside the nucleus",
            "B": "It breaks down completely at prophase",
            "C": "It turns into a cell wall",
            "D": "It is digested by lysosomes"
        },
        "ans": "A",
        "exp": "In closed mitosis (e.g., Saccharomyces cerevisiae), the nuclear envelope never breaks down; the spindle forms entirely within the nucleus.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 236,
        "q": "A cell with 2n = 16 chromosomes undergoes meiosis. How many chromosomes and how many chromatids will be present in each cell at Metaphase II?",
        "opts": {
            "A": "8 chromosomes and 16 chromatids",
            "B": "16 chromosomes and 32 chromatids",
            "C": "8 chromosomes and 8 chromatids",
            "D": "4 chromosomes and 8 chromatids"
        },
        "ans": "A",
        "exp": "At Metaphase II, each cell is haploid (n = 8 chromosomes); each chromosome has 2 chromatids, giving 8 \u00d7 2 = 16 chromatids.",
        "topic": "meiosis",
        "sub": "Metaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 237,
        "q": "If a cell has 2C DNA in G1, how much DNA is present in a cell at Anaphase I of meiosis?",
        "opts": {
            "A": "4C",
            "B": "2C",
            "C": "C",
            "D": "8C"
        },
        "ans": "A",
        "exp": "Pre-meiotic S phase doubles DNA from 2C to 4C; this 4C amount remains undivided through Meiosis I until cytokinesis I.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 238,
        "q": "If a cell has 2C DNA in G1, how much DNA is present in a cell at Anaphase II of meiosis?",
        "opts": {
            "A": "2C",
            "B": "4C",
            "C": "C",
            "D": "8C"
        },
        "ans": "A",
        "exp": "Cytokinesis I reduces DNA per cell to 2C; at Anaphase II, chromatids separate within that cell, so the total DNA in the cell is still 2C (halved to 1C after cytokinesis II).",
        "topic": "meiosis",
        "sub": "Anaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 239,
        "q": "Recombination nodules are composed of:",
        "opts": {
            "A": "Multienzyme complexes including recombinase that mediate crossing over",
            "B": "Cellulose and lignin",
            "C": "Pure lipid droplets",
            "D": "Histone H1 octamers"
        },
        "ans": "A",
        "exp": "Recombination nodules are dense protein assemblies containing recombinase and repair enzymes that execute crossing over on synaptonemal complexes.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 240,
        "q": "Which stage of meiotic prophase I is characterized by terminalization of chiasmata?",
        "opts": {
            "A": "Diakinesis",
            "B": "Diplotene",
            "C": "Pachytene",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "Terminalization of chiasmata is the hallmark of diakinesis.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 241,
        "q": "The X-shaped configurations seen in diplotene are called:",
        "opts": {
            "A": "Chiasmata",
            "B": "Centrosomes",
            "C": "Asters",
            "D": "Phragmoplasts"
        },
        "ans": "A",
        "exp": "Chiasmata are the X-shaped physical contact points between non-sister chromatids.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 242,
        "q": "The complex of two synapsed homologous chromosomes is called a:",
        "opts": {
            "A": "Bivalent (or tetrad)",
            "B": "Monad",
            "C": "Triad",
            "D": "Polytene"
        },
        "ans": "A",
        "exp": "A pair of synapsed homologous chromosomes is called a bivalent or tetrad.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 243,
        "q": "In which phase of the cell cycle does cell growth (increase in mass and organelle number) predominantly take place?",
        "opts": {
            "A": "Interphase (G1, S, and G2 phases)",
            "B": "M phase",
            "C": "Cytokinesis",
            "D": "Anaphase"
        },
        "ans": "A",
        "exp": "Cellular growth, macromolecular synthesis, and organelle biogenesis occur continuously throughout interphase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 244,
        "q": "The centromere is required for:",
        "opts": {
            "A": "Proper alignment and segregation of chromosomes during cell division",
            "B": "Translation of messenger RNA",
            "C": "Oxidative phosphorylation",
            "D": "Storage of starch"
        },
        "ans": "A",
        "exp": "The centromere holds sister chromatids and docks kinetochores, indispensable for spindle attachment and chromosome movement.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 245,
        "q": "The nuclear envelope reforms during:",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "Prophase"
        },
        "ans": "A",
        "exp": "Nuclear envelope reformation around decondensing chromosomes is a definitive event of telophase.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 246,
        "q": "Which of the following statements about meiosis is FALSE?",
        "opts": {
            "A": "Meiosis involves two cycles of DNA replication",
            "B": "Meiosis produces four haploid cells",
            "C": "Meiosis involves crossing over",
            "D": "Meiosis reduces chromosome number by half"
        },
        "ans": "A",
        "exp": "Meiosis involves only ONE cycle of DNA replication (during pre-meiotic interphase), not two.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 247,
        "q": "Which of the following statements about mitosis is FALSE?",
        "opts": {
            "A": "Mitosis halves the chromosome number in daughter cells",
            "B": "Mitosis produces genetically identical daughter cells",
            "C": "Mitosis occurs in somatic cells",
            "D": "Mitosis is involved in tissue repair"
        },
        "ans": "A",
        "exp": "Mitosis maintains identical chromosome number (equational division); it does NOT halve chromosome number.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 248,
        "q": "Synapsis begins in which stage of Prophase I?",
        "opts": {
            "A": "Zygotene",
            "B": "Leptotene",
            "C": "Pachytene",
            "D": "Diplotene"
        },
        "ans": "A",
        "exp": "Synapsis (pairing of homologous chromosomes) initiates in zygotene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 249,
        "q": "Crossing over is completed by the end of which stage of Prophase I?",
        "opts": {
            "A": "Pachytene",
            "B": "Zygotene",
            "C": "Diplotene",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "Crossing over is completed by the end of pachytene, leaving the chromosomes linked at crossover sites.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 250,
        "q": "Dissolution of the synaptonemal complex occurs during which stage of Prophase I?",
        "opts": {
            "A": "Diplotene",
            "B": "Pachytene",
            "C": "Zygotene",
            "D": "Leptotene"
        },
        "ans": "A",
        "exp": "The synaptonemal complex dissolves at the beginning of diplotene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
