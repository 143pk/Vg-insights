# Cell Cycle Part 3: Q251 to Q375 (Medium)
import json

def get_part3_raw():
    return [
    {
        "q_num": 251,
        "q": "A single bacterium with a generation time of 20 minutes is inoculated into a culture medium. How many bacteria will be present after 2 hours?",
        "opts": {
            "A": "64 bacteria",
            "B": "32 bacteria",
            "C": "128 bacteria",
            "D": "16 bacteria"
        },
        "ans": "A",
        "exp": "2 hours = 120 minutes. Number of generations = 120 / 20 = 6 generations. Final count = 2^6 = 64 bacteria.",
        "topic": "interphase",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 252,
        "q": "How many mitotic generations are required to produce 1,024 cells from a single parent cell?",
        "opts": {
            "A": "10 generations",
            "B": "9 generations",
            "C": "11 generations",
            "D": "8 generations"
        },
        "ans": "A",
        "exp": "2^n = 1024. Since 2^10 = 1024, exactly 10 generations (or rounds of division) are required.",
        "topic": "mitosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 253,
        "q": "How many total cell divisions (mitotic cleavage events) take place to produce 128 cells from a single fertilized egg?",
        "opts": {
            "A": "127 cell divisions",
            "B": "128 cell divisions",
            "C": "7 cell divisions",
            "D": "64 cell divisions"
        },
        "ans": "A",
        "exp": "To form N cells from a single cell, the total number of divisions is N - 1. For 128 cells, total divisions = 128 - 1 = 127.",
        "topic": "mitosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 254,
        "q": "How many meiotic divisions are required to produce 400 functional seeds in an angiospermic plant (e.g., pea)?",
        "opts": {
            "A": "500 meiotic divisions",
            "B": "400 meiotic divisions",
            "C": "100 meiotic divisions",
            "D": "200 meiotic divisions"
        },
        "ans": "A",
        "exp": "400 seeds require 400 pollen grains (400 / 4 = 100 meioses) and 400 functional megaspores (400 / 1 = 400 meioses). Total = 100 + 400 = 500 meiotic divisions.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 255,
        "q": "How many pollen mother cells (PMCs) must undergo meiosis to produce 240 viable pollen grains?",
        "opts": {
            "A": "60 PMCs",
            "B": "240 PMCs",
            "C": "120 PMCs",
            "D": "30 PMCs"
        },
        "ans": "A",
        "exp": "Each PMC produces 4 viable pollen grains: 240 / 4 = 60 pollen mother cells.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 256,
        "q": "How many megaspore mother cells (MMCs) must undergo meiosis to produce 80 functional female gametes (embryo sacs)?",
        "opts": {
            "A": "80 MMCs",
            "B": "20 MMCs",
            "C": "40 MMCs",
            "D": "160 MMCs"
        },
        "ans": "A",
        "exp": "In angiosperms, each MMC yields 4 megaspores, but 3 degenerate, leaving only 1 functional megaspore per meiosis: 80 / 1 = 80 MMCs.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 257,
        "q": "If the haploid chromosome number of a flowering plant is n = 14, how many bivalents are present in a microsporocyte at diakinesis?",
        "opts": {
            "A": "14 bivalents",
            "B": "28 bivalents",
            "C": "7 bivalents",
            "D": "56 bivalents"
        },
        "ans": "A",
        "exp": "The number of bivalents is equal to the haploid chromosome number (n = 14).",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 258,
        "q": "If a diploid cell has 2n = 20 chromosomes, how many chromatids are present in this cell during Metaphase I of meiosis?",
        "opts": {
            "A": "40 chromatids",
            "B": "20 chromatids",
            "C": "10 chromatids",
            "D": "80 chromatids"
        },
        "ans": "A",
        "exp": "At Metaphase I, there are 20 chromosomes, each having 2 sister chromatids: 20 \u00d7 2 = 40 chromatids.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 259,
        "q": "In an animal with 2n = 18 chromosomes, how many centromeres are present in a primary oocyte during Metaphase I?",
        "opts": {
            "A": "18 centromeres",
            "B": "36 centromeres",
            "C": "9 centromeres",
            "D": "72 centromeres"
        },
        "ans": "A",
        "exp": "There are 18 chromosomes in the diploid cell; since centromeres have not divided yet, there are exactly 18 centromeres.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 260,
        "q": "In the same animal with 2n = 18 chromosomes, how many centromeres are present during Anaphase II in each dividing secondary oocyte?",
        "opts": {
            "A": "18 centromeres",
            "B": "9 centromeres",
            "C": "36 centromeres",
            "D": "27 centromeres"
        },
        "ans": "A",
        "exp": "In Metaphase II, there are 9 chromosomes (9 centromeres). At Anaphase II, each centromere splits into two, giving 9 \u00d7 2 = 18 centromeres in that cell.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 261,
        "q": "A cell has a DNA content of 8 pg at G1. What will be its DNA content at G2 phase, Anaphase of mitosis, and in each daughter cell, respectively?",
        "opts": {
            "A": "16 pg, 16 pg, and 8 pg",
            "B": "16 pg, 8 pg, and 4 pg",
            "C": "8 pg, 16 pg, and 8 pg",
            "D": "16 pg, 32 pg, and 16 pg"
        },
        "ans": "A",
        "exp": "DNA content doubles in S phase (8 -> 16 pg), remains 16 pg through G2 and Anaphase, and is halved back to 8 pg per daughter cell upon cytokinesis.",
        "topic": "interphase",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 262,
        "q": "If a cell has 12 chromosomes (2n = 12) at G1, what is the chromosome number at Anaphase of mitosis?",
        "opts": {
            "A": "24 chromosomes",
            "B": "12 chromosomes",
            "C": "6 chromosomes",
            "D": "48 chromosomes"
        },
        "ans": "A",
        "exp": "At anaphase onset, sister chromatids separate and are counted as individual chromosomes, doubling the count inside the cell from 12 to 24 until cytokinesis.",
        "topic": "mitosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 263,
        "q": "If a cell with 2n = 16 chromosomes undergoes meiosis, how many chromosomes are present in a cell at Anaphase I?",
        "opts": {
            "A": "16 chromosomes",
            "B": "8 chromosomes",
            "C": "32 chromosomes",
            "D": "4 chromosomes"
        },
        "ans": "A",
        "exp": "In Anaphase I, homologous pairs separate without centromere splitting; the total chromosome count in the undivided cell remains 2n = 16 (8 moving to each pole).",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 264,
        "q": "If the DNA content of a somatic cell in G1 is 2C, what is the DNA content in each daughter nucleus at Telophase I?",
        "opts": {
            "A": "2C",
            "B": "4C",
            "C": "1C",
            "D": "0.5C"
        },
        "ans": "A",
        "exp": "Pre-meiotic S phase yields 4C DNA. Meiosis I divides the 4C DNA between two daughter nuclei, giving 2C DNA to each nucleus at Telophase I.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 265,
        "q": "What is the DNA content in each daughter nucleus at Telophase II of meiosis, if the G1 cell has 2C DNA?",
        "opts": {
            "A": "1C",
            "B": "2C",
            "C": "4C",
            "D": "0.5C"
        },
        "ans": "A",
        "exp": "Meiosis II halves the 2C DNA of each secondary gametocyte, yielding 1C DNA content in each haploid daughter nucleus.",
        "topic": "meiosis",
        "sub": "Cell Cycle Calculations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 266,
        "q": "The Chromosomal Passenger Complex (CPC), which corrects erroneous kinetochore-microtubule attachments and regulates cytokinesis, contains which master kinase?",
        "opts": {
            "A": "Aurora B kinase",
            "B": "Cdk1",
            "C": "Wee1 kinase",
            "D": "Separase"
        },
        "ans": "A",
        "exp": "The CPC consists of Aurora B kinase, INCENP, Survivin, and Borealin; it destabilizes improper kinetochore attachments lacking tension.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 267,
        "q": "When both sister kinetochores of a chromosome attach to microtubules from the SAME spindle pole, this erroneous attachment is called:",
        "opts": {
            "A": "Syntelic attachment",
            "B": "Amphitelic attachment",
            "C": "Merotelic attachment",
            "D": "Monotelic attachment"
        },
        "ans": "A",
        "exp": "Syntelic attachment occurs when both sister kinetochores attach to the same spindle pole; Aurora B detects lack of tension and severs these attachments.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 268,
        "q": "The correct, stable attachment where sister kinetochores are attached to microtubules from OPPOSITE spindle poles under high tension is called:",
        "opts": {
            "A": "Amphitelic attachment (bi-orientation)",
            "B": "Syntelic attachment",
            "C": "Merotelic attachment",
            "D": "Monotelic attachment"
        },
        "ans": "A",
        "exp": "Amphitelic attachment (bi-orientation) places sister kinetochores under mechanical tension, turning off the Spindle Assembly Checkpoint.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 269,
        "q": "Merotelic attachment occurs when:",
        "opts": {
            "A": "A single kinetochore attaches to microtubules from both spindle poles simultaneously",
            "B": "Both kinetochores attach to the same pole",
            "C": "Only one kinetochore is attached",
            "D": "No kinetochore attaches to microtubules"
        },
        "ans": "A",
        "exp": "Merotelic attachment is an error where one kinetochore is pulled toward both opposite poles simultaneously, often causing lagging chromosomes at anaphase.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 270,
        "q": "Centrosome separation in early prophase is driven by which motor protein that pushes overlapping anti-parallel microtubules apart?",
        "opts": {
            "A": "Kinesin-5 (Eg5)",
            "B": "Kinesin-14",
            "C": "Dynein",
            "D": "Myosin II"
        },
        "ans": "A",
        "exp": "Kinesin-5 is a plus-end directed homotetramer that crosslinks and pushes apart antiparallel microtubules extending from duplicated centrosomes.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 271,
        "q": "Cytoplasmic dynein anchored at the cell cortex contributes to spindle positioning and pole separation by:",
        "opts": {
            "A": "Pulling on astral microtubules toward the cell cortex",
            "B": "Pushing interpolar microtubules toward the equator",
            "C": "Cleaving DNA at centromeres",
            "D": "Synthesizing tubulin subunits"
        },
        "ans": "A",
        "exp": "Cortical dynein pulls on astral microtubules, exerting pulling forces that position the spindle poles properly within the cell.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 272,
        "q": "The polar ejection force (or chromokinesin force) that pushes chromosome arms toward the spindle equator during prometaphase is exerted by:",
        "opts": {
            "A": "Chromokinesins (such as Kid and Kif4A) walking toward microtubule plus ends",
            "B": "Centrosomal dynein",
            "C": "Cohesin rings",
            "D": "Nuclear pores"
        },
        "ans": "A",
        "exp": "Plus-end directed chromokinesins on chromosome arms push arms away from spindle poles toward the equator (polar ejection force).",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 273,
        "q": "During Anaphase A, the primary molecular mechanism responsible for chromosome pulling is:",
        "opts": {
            "A": "Microtubule depolymerization at the kinetochore (plus end) and spindle pole (minus end)",
            "B": "Polymerization of actin cables",
            "C": "Hydrolysis of peptidoglycan",
            "D": "Osmotic swelling of asters"
        },
        "ans": "A",
        "exp": "The loss of tubulin subunits (depolymerization) at the plus ends trapped by the Ndc80 complex drives poleward chromosome movement.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 274,
        "q": "During cytokinesis in budding yeast (Saccharomyces cerevisiae), cell division occurs by:",
        "opts": {
            "A": "Budding, where an actomyosin contractile ring forms at the mother-bud neck to guide septum deposition",
            "B": "Centripetal cleavage furrow of the cell wall",
            "C": "Centrifugal cell plate identical to plants",
            "D": "Binary fission like bacteria"
        },
        "ans": "A",
        "exp": "Budding yeast forms a bud neck constricted by a septin-actomyosin ring that deposits a chitinous primary septum.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 275,
        "q": "The restriction point (R-point) in the mammalian cell cycle is defined as the point beyond which:",
        "opts": {
            "A": "The cell is committed to complete the cell cycle and no longer requires extracellular mitogenic growth factors",
            "B": "The cell is irreversibly committed to enter G0",
            "C": "The cell must undergo meiosis",
            "D": "The cell destroys all its proteins"
        },
        "ans": "A",
        "exp": "Past the restriction point in late G1, the cell no longer requires extracellular growth factors to complete S phase and mitosis.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 276,
        "q": "Recombination frequency between linked genes was first utilized to construct the first genetic chromosome map in 1913 by:",
        "opts": {
            "A": "Alfred Sturtevant",
            "B": "Thomas Hunt Morgan",
            "C": "Gregor Mendel",
            "D": "Walter Sutton"
        },
        "ans": "A",
        "exp": "Alfred Sturtevant (Morgan's student) recognized that recombination frequency correlates with physical distance, establishing the first linkage map.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 277,
        "q": "One map unit (or one centimorgan, cM) represents:",
        "opts": {
            "A": "1% recombination frequency between two gene loci",
            "B": "10% recombination frequency",
            "C": "0.1% recombination frequency",
            "D": "100 base pairs of DNA"
        },
        "ans": "A",
        "exp": "By definition, 1 map unit = 1 centimorgan (cM) = 1% crossing over or recombination frequency.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 278,
        "q": "What is the theoretical maximum recombination frequency that can be observed between two widely separated genes on the same chromosome?",
        "opts": {
            "A": "50%",
            "B": "100%",
            "C": "25%",
            "D": "75%"
        },
        "ans": "A",
        "exp": "Even with multiple crossovers, non-sister chromatid exchange involves on average half the chromatids, yielding a maximum detectable recombination frequency of 50%.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 279,
        "q": "Bread wheat (Triticum aestivum) is an allohexaploid plant species containing 2n = 6x = 42 chromosomes. What is its basic monoploid genome number (x)?",
        "opts": {
            "A": "x = 7",
            "B": "x = 14",
            "C": "x = 21",
            "D": "x = 6"
        },
        "ans": "A",
        "exp": "In allohexaploid wheat, 6x = 42, so the basic monoploid chromosome number x = 7.",
        "topic": "meiosis",
        "sub": "Cell Cycle Variations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 280,
        "q": "In bread wheat (2n = 6x = 42), what is the haploid gametic chromosome number (n)?",
        "opts": {
            "A": "n = 21",
            "B": "n = 7",
            "C": "n = 14",
            "D": "n = 42"
        },
        "ans": "A",
        "exp": "The gametic chromosome number n is half the somatic chromosome number: n = 42 / 2 = 21.",
        "topic": "meiosis",
        "sub": "Cell Cycle Variations",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 281,
        "q": "Down syndrome (Trisomy 21) in humans is most commonly caused by which cytogenetic error during maternal meiosis?",
        "opts": {
            "A": "Nondisjunction of chromosome 21 during Meiosis I",
            "B": "Complete duplication of all autosomes",
            "C": "Deletion of the short arm of chromosome 5",
            "D": "Reciprocal translocation between chromosomes 9 and 22"
        },
        "ans": "A",
        "exp": "About 95% of Down syndrome cases arise from maternal meiotic nondisjunction of homologous chromosomes 21 during Anaphase I.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 282,
        "q": "Turner syndrome in females (karyotype 45, X0) is characterized by:",
        "opts": {
            "A": "Monosomy of the X chromosome due to nondisjunction",
            "B": "Trisomy of sex chromosomes (XXY)",
            "C": "Tetraploidy",
            "D": "Absence of all autosomes"
        },
        "ans": "A",
        "exp": "Turner syndrome results from sex chromosome nondisjunction producing an egg or sperm lacking a sex chromosome, resulting in 45, X0 monosomy.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 283,
        "q": "Klinefelter syndrome in males (karyotype 47, XXY) is an example of:",
        "opts": {
            "A": "Sex chromosomal aneuploidy (trisomy) caused by meiotic nondisjunction",
            "B": "Haploid male condition",
            "C": "Polyploidy",
            "D": "Complete deletion of Y chromosome"
        },
        "ans": "A",
        "exp": "Klinefelter syndrome (47, XXY) arises from fertilization involving an aneuploid gamete caused by non-disjunction of X chromosomes.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 284,
        "q": "During which stage of meiosis do homologous chromosomes undergo pairing (synapsis) mediated by transverse filaments of SYCP1?",
        "opts": {
            "A": "Zygotene",
            "B": "Leptotene",
            "C": "Pachytene",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "Zygotene synapsis is mediated by the assembly of the synaptonemal complex transverse filaments (SYCP1).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 285,
        "q": "A triploid plant (3n) is typically sterile and produces seedless fruits (e.g., commercial bananas) primarily because:",
        "opts": {
            "A": "Three sets of homologous chromosomes cannot pair properly during Meiosis I, causing irregular segregation and aneuploid gametes",
            "B": "It cannot undergo mitosis",
            "C": "It lacks mitochondria",
            "D": "Its flowers do not produce petals"
        },
        "ans": "A",
        "exp": "Triploids have an odd chromosome set number; trivalent formation in Meiosis I results in unbalanced chromosome segregation, causing high gametic sterility and seedlessness.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 286,
        "q": "Which checkpoint ensures that all cellular DNA has been fully replicated and repaired before mitosis is permitted to initiate?",
        "opts": {
            "A": "G2/M DNA damage and replication checkpoint",
            "B": "G1/S restriction point",
            "C": "Spindle assembly checkpoint",
            "D": "Cytokinesis abscission checkpoint"
        },
        "ans": "A",
        "exp": "The G2/M checkpoint prevents entry into mitosis if DNA replication is incomplete or if damaged DNA has not been repaired.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 287,
        "q": "Which kinase phosphorylates and inhibits Cdk1 to keep MPF inactive until G2 is completed?",
        "opts": {
            "A": "Wee1 kinase",
            "B": "Cdc25 phosphatase",
            "C": "Aurora A kinase",
            "D": "Polo-like kinase 1"
        },
        "ans": "A",
        "exp": "Wee1 kinase phosphorylates Tyr15 of Cdk1, maintaining MPF in an inactive state throughout G2 phase.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 288,
        "q": "In eukaryotic DNA replication licensing during G1 phase, the pre-replicative complex (pre-RC) assembled at origins of replication consists of:",
        "opts": {
            "A": "ORC (Origin Recognition Complex), Cdc6, Cdt1, and the MCM2-7 helicase",
            "B": "DNA polymerase alpha and primase",
            "C": "Topoisomerase II and ligase",
            "D": "Histone H1 and condensin"
        },
        "ans": "A",
        "exp": "During G1, ORC recruits Cdc6 and Cdt1 to load the replicative helicase (MCM2-7 complex) at replication origins, 'licensing' them for S phase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 289,
        "q": "Why can each origin of replication fire only ONCE per cell cycle during S phase?",
        "opts": {
            "A": "High S-phase and mitotic CDK activities prevent the re-assembly of new pre-RC complexes until cells exit mitosis",
            "B": "DNA is destroyed after replication",
            "C": "All nucleotides are permanently depleted",
            "D": "MCM helicases are degraded by lysosomes"
        },
        "ans": "A",
        "exp": "High CDK activity in S and M phases inhibits licensing factors (degrading Cdt1 via geminin/ubiquitin), preventing rereplication of DNA.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 290,
        "q": "The nucleolus is disassembled during late prophase because:",
        "opts": {
            "A": "Transcription of ribosomal RNA genes is shut down and nucleolar processing factors disperse into the cytoplasm",
            "B": "The nucleolus is digested by lysosomes",
            "C": "All ribosomal proteins are converted to DNA",
            "D": "The nucleolus moves to the centrosome"
        },
        "ans": "A",
        "exp": "Phosphorylation of RNA polymerase I machinery by Cdk1 halts rRNA synthesis, causing the nucleolus to disperse during late prophase.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 291,
        "q": "Which structure serves as the microtubule organizing center (MTOC) in animal cells?",
        "opts": {
            "A": "Centrosome containing a pair of centrioles",
            "B": "Kinetochore disc",
            "C": "Nuclear pore complex",
            "D": "Desmosome"
        },
        "ans": "A",
        "exp": "In animal cells, the centrosome (comprising two centrioles and pericentriolar material) serves as the primary MTOC.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 292,
        "q": "How do higher plant cells nucleate mitotic spindle microtubules in the absence of centrosomes?",
        "opts": {
            "A": "From dispersed gamma-tubulin ring complexes (gamma-TuRCs) located around the nuclear envelope and cell cortex",
            "B": "From the cell wall directly",
            "C": "From within the vacuolar sap",
            "D": "From chloroplast thylakoids"
        },
        "ans": "A",
        "exp": "Acentrosomal plant cells nucleate microtubules from gamma-tubulin complexes distributed around the nuclear envelope, organizing them into a bipolar spindle.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 293,
        "q": "The preprophase band (PPB) is a transient plant-specific band of microtubules and actin filaments that appears in G2/prophase to:",
        "opts": {
            "A": "Predict and mark the future plane of cell division and site of the new cell plate",
            "B": "Replicate chloroplast DNA",
            "C": "Digest the primary cell wall",
            "D": "Anchor the plant to soil"
        },
        "ans": "A",
        "exp": "The PPB forms a cortical ring during G2/prophase that marks the exact equatorial division site where the phragmoplast will fuse during cytokinesis.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 294,
        "q": "During cytokinesis, the midbody in animal cells is an electron-dense proteinaceous bridge containing:",
        "opts": {
            "A": "Tightly bundled antiparallel microtubule remnants of the central spindle",
            "B": "Cellulose microfibrils",
            "C": "Histone proteins",
            "D": "Mitochondrial cristae"
        },
        "ans": "A",
        "exp": "The midbody is a dense transient structure formed at the intercellular bridge from packed central spindle microtubules, organizing final abscission.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 295,
        "q": "Which of the following describes the behavior of mitochondria and chloroplasts during cytokinesis?",
        "opts": {
            "A": "They are distributed roughly equally between the two daughter cells by random cytoplasmic partitioning",
            "B": "They all fuse into one giant organelle that divides in anaphase",
            "C": "They are broken down into free nucleotides and resynthesized",
            "D": "They remain exclusively in one daughter cell"
        },
        "ans": "A",
        "exp": "Organelles like mitochondria and plastids replicate during interphase and are partitioned between daughter cells during cytokinesis.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 296,
        "q": "The human protein p21 functions in cell cycle control as a:",
        "opts": {
            "A": "Broad-spectrum CDK inhibitor (CKI) that arrests cells at the G1/S boundary",
            "B": "DNA polymerase cofactor",
            "C": "Centromere structural protein",
            "D": "Tubulin polymerizing enzyme"
        },
        "ans": "A",
        "exp": "p21 (CIP1/WAF1) is a CDK inhibitor induced by p53 that inhibits Cyclin E-Cdk2 and Cyclin A-Cdk2, halting cell cycle progression.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 297,
        "q": "Loss-of-function mutations in both alleles of the TP53 gene (encoding p53) lead to:",
        "opts": {
            "A": "Uncontrolled cell division and failure to arrest at checkpoints following DNA damage (predisposition to cancer)",
            "B": "Instant cell death",
            "C": "Failure of DNA replication in S phase",
            "D": "Absence of ribosomes"
        },
        "ans": "A",
        "exp": "Inactivation of p53 eliminates the G1/S DNA damage checkpoint, allowing damaged cells to proliferate unchecked, contributing to over 50% of human cancers.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 298,
        "q": "The retinoblastoma gene (RB1) is classified as a:",
        "opts": {
            "A": "Tumor suppressor gene",
            "B": "Proto-oncogene",
            "C": "Prion gene",
            "D": "Ribozyme gene"
        },
        "ans": "A",
        "exp": "RB1 is a classic tumor suppressor gene; loss of both copies leads to unregulated E2F activity and hereditary retinoblastoma.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 299,
        "q": "What happens during the G1 phase if a cell does not receive mitogenic signals (growth factors)?",
        "opts": {
            "A": "The cell exits the cell cycle and enters the quiescent G0 state",
            "B": "The cell immediately divides without DNA",
            "C": "The cell enters anaphase directly",
            "D": "The cell doubles its chromosomes"
        },
        "ans": "A",
        "exp": "In the absence of mitogenic stimulation, cells fail to pass the G1 restriction point and withdraw into the G0 resting state.",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 300,
        "q": "Which phase of the cell cycle is marked by active protein synthesis, metabolic activity, and cell enlargement, but NO DNA replication?",
        "opts": {
            "A": "G1 phase",
            "B": "S phase",
            "C": "Metaphase",
            "D": "Anaphase"
        },
        "ans": "A",
        "exp": "During G1, the cell grows continuously and synthesizes RNA and proteins without replicating DNA.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 301,
        "q": "If a cell is treated with an inhibitor of ribonucleotide reductase (such as hydroxyurea), in which phase will the cell cycle be arrested?",
        "opts": {
            "A": "S phase (due to depletion of deoxyribonucleotides required for DNA replication)",
            "B": "Metaphase",
            "C": "Telophase",
            "D": "G0 phase"
        },
        "ans": "A",
        "exp": "Hydroxyurea inhibits ribonucleotide reductase, depleting dNTP pools and halting replication forks, arresting cells in early S phase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 302,
        "q": "If a cell is treated with actinomycin D (an inhibitor of transcription), which phase of the cell cycle will be predominantly blocked?",
        "opts": {
            "A": "G1 and G2 phases (where active transcription of mRNAs for cell cycle proteins is needed)",
            "B": "Anaphase of mitosis",
            "C": "Anaphase II of meiosis",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "G1 and G2 require extensive gene transcription to synthesize enzymes and structural proteins for S phase and mitosis.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 303,
        "q": "The amount of DNA per cell in a diploid organism is 2C in G1. In which of the following stages will the DNA content be 4C?",
        "opts": {
            "A": "G2 phase, Prophase, and Metaphase of mitosis",
            "B": "G1 phase and Telophase daughter cells",
            "C": "Gametes at the end of meiosis",
            "D": "G0 phase"
        },
        "ans": "A",
        "exp": "Following S-phase replication, DNA content remains 4C throughout G2, Prophase, and Metaphase of mitosis.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 304,
        "q": "A diploid cell has 2n = 16 chromosomes and 2C DNA. What is the chromosome number and DNA content per cell during Anaphase of mitosis?",
        "opts": {
            "A": "32 chromosomes and 4C DNA",
            "B": "16 chromosomes and 4C DNA",
            "C": "16 chromosomes and 2C DNA",
            "D": "32 chromosomes and 2C DNA"
        },
        "ans": "A",
        "exp": "In mitotic anaphase, centromeres split so the 16 replicated chromosomes become 32 individual daughter chromosomes; DNA content is still 4C within the single cell.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 305,
        "q": "What is the chromosome number and DNA content in each daughter cell immediately after mitotic cytokinesis (for a 2n = 16, 2C cell)?",
        "opts": {
            "A": "16 chromosomes and 2C DNA",
            "B": "32 chromosomes and 4C DNA",
            "C": "8 chromosomes and 1C DNA",
            "D": "16 chromosomes and 4C DNA"
        },
        "ans": "A",
        "exp": "Cytokinesis partitions the cell into two equal daughter cells, each containing 16 chromosomes and 2C DNA content.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 306,
        "q": "Which of the following cells divides continually in the human body throughout adult life to replace lost cells?",
        "opts": {
            "A": "Basal cells of skin epidermis and intestinal crypt cells",
            "B": "Mature cardiac myocytes",
            "C": "Central nervous system neurons",
            "D": "Mature red blood cells"
        },
        "ans": "A",
        "exp": "Epithelial lining of the digestive tract and epidermal basal stem cells divide continually to replenish shed surface cells.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 307,
        "q": "Which cells in the human body never divide once differentiated?",
        "opts": {
            "A": "Neurons and cardiac muscle cells",
            "B": "Hepatocytes",
            "C": "Skin epithelial cells",
            "D": "Bone marrow hematopoietic stem cells"
        },
        "ans": "A",
        "exp": "Mature neurons and cardiac myocytes are terminally differentiated, permanently residing in G0.",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 308,
        "q": "How many chromosomes are present in a normal human gamete (sperm or egg)?",
        "opts": {
            "A": "23 chromosomes (n)",
            "B": "46 chromosomes (2n)",
            "C": "92 chromosomes (4n)",
            "D": "2 chromosomes"
        },
        "ans": "A",
        "exp": "Human gametes are haploid, containing 23 chromosomes (22 autosomes + 1 sex chromosome).",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 309,
        "q": "In which phase of meiotic Prophase I does compaction of chromosomes continue as they become visible under the light microscope?",
        "opts": {
            "A": "Leptotene",
            "B": "Zygotene",
            "C": "Pachytene",
            "D": "Diplotene"
        },
        "ans": "A",
        "exp": "Leptotene is marked by ongoing chromosome compaction, rendering chromosomes visible as slender threads under the light microscope.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 310,
        "q": "The synaptonemal complex is visible under:",
        "opts": {
            "A": "Electron microscope only",
            "B": "Simple hand lens",
            "C": "Compound light microscope at 100x",
            "D": "Phase-contrast microscope at 40x"
        },
        "ans": "A",
        "exp": "The synaptonemal complex is a sub-microscopic macromolecular structure (~100\u2013200 nm wide) visible only by transmission electron microscopy.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 311,
        "q": "A bivalent is composed of how many homologous chromosomes?",
        "opts": {
            "A": "Two homologous chromosomes",
            "B": "Four homologous chromosomes",
            "C": "One chromosome",
            "D": "Eight chromosomes"
        },
        "ans": "A",
        "exp": "A bivalent consists of two synapsed homologous chromosomes (one maternal, one paternal).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 312,
        "q": "A bivalent is composed of how many chromatids?",
        "opts": {
            "A": "Four chromatids (tetrad)",
            "B": "Two chromatids",
            "C": "Eight chromatids",
            "D": "One chromatid"
        },
        "ans": "A",
        "exp": "Each of the two paired chromosomes consists of two sister chromatids, yielding four chromatids (a tetrad).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 313,
        "q": "Recombination nodules are the sites where:",
        "opts": {
            "A": "Crossing over occurs between non-sister chromatids of homologous chromosomes",
            "B": "Centromeres duplicate",
            "C": "Nuclear envelope is assembled",
            "D": "Cell wall is synthesized"
        },
        "ans": "A",
        "exp": "Recombination nodules appear along the synaptonemal complex during pachytene, marking the exact sites of crossing over.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 314,
        "q": "Which enzyme catalyzes crossing over during pachytene?",
        "opts": {
            "A": "Recombinase",
            "B": "DNA polymerase I",
            "C": "Helicase",
            "D": "Amylase"
        },
        "ans": "A",
        "exp": "Crossing over is an enzyme-mediated process catalyzed by a complex of enzymes collectively called recombinase.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 315,
        "q": "In diplotene, homologous chromosomes remain attached only at the sites of:",
        "opts": {
            "A": "Chiasmata",
            "B": "Centrosomes",
            "C": "Spindle poles",
            "D": "Kinetochores"
        },
        "ans": "A",
        "exp": "Upon dissolution of the synaptonemal complex, homologs remain physically linked only at cross-over sites called chiasmata.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 316,
        "q": "Terminalization of chiasmata is completed during which stage?",
        "opts": {
            "A": "Diakinesis",
            "B": "Diplotene",
            "C": "Pachytene",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "Diakinesis is defined by the progressive displacement of chiasmata toward chromosome ends (terminalization).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 317,
        "q": "Transition to metaphase I of meiosis is represented by the stage:",
        "opts": {
            "A": "Diakinesis",
            "B": "Diplotene",
            "C": "Pachytene",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "Diakinesis represents transition to metaphase; by the end of diakinesis the nucleolus disappears and nuclear envelope breaks down.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 318,
        "q": "In Metaphase I of meiosis, spindle fibers attach to:",
        "opts": {
            "A": "The kinetochores of homologous chromosomes",
            "B": "The kinetochores of sister chromatids to pull them apart",
            "C": "The cell wall directly",
            "D": "The nucleolus"
        },
        "ans": "A",
        "exp": "In Metaphase I, spindle microtubules from one pole attach to the kinetochore of one homolog, while fibers from the other pole attach to the homologous chromosome.",
        "topic": "meiosis",
        "sub": "Metaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 319,
        "q": "During Anaphase I of meiosis, the chromosome number is:",
        "opts": {
            "A": "Halved from diploid (2n) to haploid (n) as whole homologous chromosomes move to opposite poles",
            "B": "Doubled from 2n to 4n",
            "C": "Maintained identical to G1",
            "D": "Reduced to zero"
        },
        "ans": "A",
        "exp": "Anaphase I separates homologous chromosome pairs to opposite poles, achieving the reduction of chromosome number from 2n to n.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 320,
        "q": "Sister chromatids remain associated at their centromeres throughout:",
        "opts": {
            "A": "Meiosis I (Prophase I, Metaphase I, and Anaphase I)",
            "B": "Meiosis II",
            "C": "Mitosis",
            "D": "Binary fission"
        },
        "ans": "A",
        "exp": "A defining feature of Meiosis I is that sister chromatids remain joined at their centromeres and segregate together to the same pole.",
        "topic": "meiosis",
        "sub": "Meiosis I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 321,
        "q": "The two cells produced after Telophase I of meiosis are called a:",
        "opts": {
            "A": "Dyad of cells",
            "B": "Tetrad of cells",
            "C": "Syncytium",
            "D": "Monad"
        },
        "ans": "A",
        "exp": "Following Telophase I and cytokinesis, the two resulting haploid cells are referred to as a dyad of cells.",
        "topic": "meiosis",
        "sub": "Telophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 322,
        "q": "Interkinesis is the interval between:",
        "opts": {
            "A": "Meiosis I and Meiosis II",
            "B": "G1 and S phase",
            "C": "Prophase and Metaphase",
            "D": "Mitosis and G1"
        },
        "ans": "A",
        "exp": "Interkinesis is the brief stage between the completion of Meiosis I and the onset of Meiosis II.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 323,
        "q": "Does replication of DNA take place during interkinesis?",
        "opts": {
            "A": "No, there is no replication of DNA during interkinesis",
            "B": "Yes, DNA replicates fully",
            "C": "Yes, DNA doubles twice",
            "D": "DNA is destroyed"
        },
        "ans": "A",
        "exp": "DNA replication does not occur during interkinesis, ensuring that Meiosis II remains an equational division on haploid chromosomes.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 324,
        "q": "Anaphase II of meiosis begins with:",
        "opts": {
            "A": "Simultaneous splitting of the centromere of each chromosome",
            "B": "Separation of homologous pairs",
            "C": "Formation of chiasmata",
            "D": "Replication of DNA"
        },
        "ans": "A",
        "exp": "Anaphase II begins with the simultaneous splitting of the centromere of each chromosome, allowing sister chromatids to separate.",
        "topic": "meiosis",
        "sub": "Anaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 325,
        "q": "The end of Meiosis II produces a:",
        "opts": {
            "A": "Tetrad of cells (four haploid daughter cells)",
            "B": "Dyad of cells",
            "C": "Single diploid cell",
            "D": "Eight spores"
        },
        "ans": "A",
        "exp": "Telophase II and subsequent cytokinesis produce a tetrad of four genetically diverse haploid daughter cells.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 326,
        "q": "Crossing over during pachytene introduces:",
        "opts": {
            "A": "Genetic variation in sexually reproducing species",
            "B": "Genetic identity between parent and offspring",
            "C": "Polyploidy in all gametes",
            "D": "Permanent chromosome deletion"
        },
        "ans": "A",
        "exp": "Crossing over exchanges maternal and paternal alleles, producing novel recombinant chromosomes that drive genetic variation.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 327,
        "q": "In which phase of mitosis does the nuclear membrane start disappearing?",
        "opts": {
            "A": "Late prophase",
            "B": "Early metaphase",
            "C": "Anaphase",
            "D": "Early telophase"
        },
        "ans": "A",
        "exp": "Disintegration of the nuclear envelope commences in late prophase (prometaphase).",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 328,
        "q": "In which phase of mitosis are chromosomes located at the equatorial plate of the spindle?",
        "opts": {
            "A": "Metaphase",
            "B": "Anaphase",
            "C": "Prophase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "Chromosomes align along the equatorial metaphase plate during metaphase.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 329,
        "q": "Centromere splitting and movement of daughter chromosomes to opposite poles occurs in:",
        "opts": {
            "A": "Anaphase of mitosis and Anaphase II of meiosis",
            "B": "Anaphase I of meiosis only",
            "C": "Metaphase of mitosis",
            "D": "Telophase I of meiosis"
        },
        "ans": "A",
        "exp": "Centromere splitting is the characteristic event of mitotic anaphase and meiotic Anaphase II.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 330,
        "q": "Reappearance of nucleolus, Golgi complex, and ER occurs in:",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "Prophase"
        },
        "ans": "A",
        "exp": "Reformation of organelles and nuclear envelope is the hallmark of telophase.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 331,
        "q": "In plant cells, cell wall formation during cytokinesis starts:",
        "opts": {
            "A": "At the center and grows outward towards the lateral walls (centrifugally)",
            "B": "At the periphery and grows inward (centripetally)",
            "C": "At both ends simultaneously",
            "D": "Randomly throughout the cytoplasm"
        },
        "ans": "A",
        "exp": "In plant cells, the cell plate initiates in the center and grows outward (centrifugally) to merge with existing lateral walls.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 332,
        "q": "In animal cells, cytokinesis begins:",
        "opts": {
            "A": "At the periphery as a furrow that deepens towards the center (centripetally)",
            "B": "At the center growing outward",
            "C": "Inside the nucleus",
            "D": "At the centrosome"
        },
        "ans": "A",
        "exp": "Animal cytokinesis starts as a furrow in the plasma membrane that deepens centripetally to pinch the cell in two.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 333,
        "q": "A multinucleate condition resulting from karyokinesis without cytokinesis is called:",
        "opts": {
            "A": "Syncytium",
            "B": "Coenobium",
            "C": "Tetrad",
            "D": "Bivalent"
        },
        "ans": "A",
        "exp": "Failure of cytokinesis after nuclear division results in a multinucleate syncytium (e.g., coconut liquid endosperm).",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 334,
        "q": "The stage of meiotic prophase I where chromosomes appear as thin, long single threads is:",
        "opts": {
            "A": "Leptotene",
            "B": "Zygotene",
            "C": "Pachytene",
            "D": "Diplotene"
        },
        "ans": "A",
        "exp": "In leptotene (from Greek leptos = thin), chromosomes appear as slender, thread-like structures.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 335,
        "q": "The stage of meiotic prophase I where pairing of homologous chromosomes occurs is:",
        "opts": {
            "A": "Zygotene",
            "B": "Leptotene",
            "C": "Pachytene",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "Synapsis (pairing of homologous chromosomes) takes place during zygotene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 336,
        "q": "The stage of meiotic prophase I where crossing over occurs is:",
        "opts": {
            "A": "Pachytene",
            "B": "Zygotene",
            "C": "Diplotene",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "Crossing over between non-sister chromatids takes place during pachytene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 337,
        "q": "The stage of meiotic prophase I where chiasmata become clearly visible is:",
        "opts": {
            "A": "Diplotene",
            "B": "Pachytene",
            "C": "Zygotene",
            "D": "Leptotene"
        },
        "ans": "A",
        "exp": "Chiasmata become visible in diplotene as the synaptonemal complex dissolves and homologs separate partially.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 338,
        "q": "The stage of meiotic prophase I marked by terminalization of chiasmata is:",
        "opts": {
            "A": "Diakinesis",
            "B": "Diplotene",
            "C": "Pachytene",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "Terminalization of chiasmata occurs during diakinesis.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 339,
        "q": "Which of the following stages is intermediate between Meiosis I and Meiosis II?",
        "opts": {
            "A": "Interkinesis",
            "B": "Interphase",
            "C": "Diakinesis",
            "D": "Cytokinesis"
        },
        "ans": "A",
        "exp": "Interkinesis is the resting period between Meiosis I and Meiosis II.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 340,
        "q": "Meiosis II is equational because:",
        "opts": {
            "A": "The chromosome number in daughter cells remains the same as in the cells entering Meiosis II (haploid to haploid)",
            "B": "It doubles the chromosome number",
            "C": "It reduces chromosome number from diploid to haploid",
            "D": "It occurs only in somatic cells"
        },
        "ans": "A",
        "exp": "Meiosis II separates sister chromatids, maintaining the haploid chromosome number n in all four progeny cells (equational).",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 341,
        "q": "The two asters together with the spindle fibers are collectively termed the:",
        "opts": {
            "A": "Mitotic apparatus",
            "B": "Kinetochore complex",
            "C": "Synaptonemal complex",
            "D": "Phragmoplast"
        },
        "ans": "A",
        "exp": "According to NCERT, the two asters together with spindle fibres form the mitotic apparatus.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 342,
        "q": "Which organelle initiates the formation of the spindle apparatus in animal cells?",
        "opts": {
            "A": "Centrosome",
            "B": "Golgi apparatus",
            "C": "Lysosome",
            "D": "Ribosome"
        },
        "ans": "A",
        "exp": "The centrosome organizes microtubules into the bipolar spindle apparatus in animal cells.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 343,
        "q": "Which of the following occurs during the G0 phase of the cell cycle?",
        "opts": {
            "A": "The cell remains metabolically active but suspended from division",
            "B": "DNA replication continues indefinitely",
            "C": "The cell divides every 20 minutes",
            "D": "The nucleus disintegrates"
        },
        "ans": "A",
        "exp": "In G0, cells remain metabolically active but enter a reversible or permanent quiescent non-dividing state.",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 344,
        "q": "The stage of the cell cycle during which chromosomes duplicate their DNA without increasing chromosome number is:",
        "opts": {
            "A": "S phase",
            "B": "G1 phase",
            "C": "G2 phase",
            "D": "M phase"
        },
        "ans": "A",
        "exp": "S phase duplicates DNA content (2C to 4C) without altering the chromosome number (2n remains 2n).",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 345,
        "q": "How many chromosomes are present in an onion root tip cell at Metaphase of mitosis?",
        "opts": {
            "A": "16 chromosomes",
            "B": "8 chromosomes",
            "C": "32 chromosomes",
            "D": "4 chromosomes"
        },
        "ans": "A",
        "exp": "Allium cepa (onion) has 2n = 16 chromosomes in all somatic diploid cells, including metaphase of mitosis.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 346,
        "q": "How many chromatids are present in an onion root tip cell at Metaphase of mitosis?",
        "opts": {
            "A": "32 chromatids",
            "B": "16 chromatids",
            "C": "64 chromatids",
            "D": "8 chromatids"
        },
        "ans": "A",
        "exp": "16 chromosomes \u00d7 2 sister chromatids each = 32 chromatids.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 347,
        "q": "How many chromosomes are present in an onion root tip cell at Anaphase of mitosis?",
        "opts": {
            "A": "32 chromosomes",
            "B": "16 chromosomes",
            "C": "8 chromosomes",
            "D": "64 chromosomes"
        },
        "ans": "A",
        "exp": "At anaphase, splitting of 16 centromeres yields 32 individual daughter chromosomes moving toward the poles.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 348,
        "q": "The duration of the cell cycle in yeast is approximately:",
        "opts": {
            "A": "90 minutes",
            "B": "24 hours",
            "C": "20 minutes",
            "D": "12 hours"
        },
        "ans": "A",
        "exp": "A yeast cell progresses through a complete division cycle in roughly 90 minutes.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 349,
        "q": "The duration of the cell cycle in typical human somatic cells in culture is:",
        "opts": {
            "A": "24 hours",
            "B": "90 minutes",
            "C": "20 minutes",
            "D": "10 hours"
        },
        "ans": "A",
        "exp": "Human somatic cells in culture have an average cell cycle duration of 24 hours.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 350,
        "q": "What percentage of the cell cycle is spent in M phase in human cells?",
        "opts": {
            "A": "About 5%",
            "B": "About 50%",
            "C": "About 25%",
            "D": "Over 95%"
        },
        "ans": "A",
        "exp": "M phase lasts only about 1 hour out of 24 hours (~4\u20135% of the total cycle).",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 351,
        "q": "What percentage of the cell cycle is spent in Interphase in human cells?",
        "opts": {
            "A": "Over 95%",
            "B": "About 50%",
            "C": "About 5%",
            "D": "Less than 10%"
        },
        "ans": "A",
        "exp": "Interphase occupies >95% (~23 hours) of the 24-hour human cell cycle.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 352,
        "q": "In which phase of interphase does the cell synthesize tubulin protein required for spindle fibers?",
        "opts": {
            "A": "G2 phase",
            "B": "G1 phase",
            "C": "S phase",
            "D": "G0 phase"
        },
        "ans": "A",
        "exp": "Tubulin and other proteins required for spindle assembly are synthesized in G2 phase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 353,
        "q": "In which phase of the cell cycle does centriole duplication begin in animal cells?",
        "opts": {
            "A": "S phase",
            "B": "G1 phase",
            "C": "G2 phase",
            "D": "M phase"
        },
        "ans": "A",
        "exp": "Centriole duplication in the cytoplasm occurs during S phase, synchronized with nuclear DNA replication.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 354,
        "q": "The plane of alignment of chromosomes at metaphase is called the:",
        "opts": {
            "A": "Metaphase plate",
            "B": "Cleavage furrow",
            "C": "Phragmoplast",
            "D": "Synaptonemal complex"
        },
        "ans": "A",
        "exp": "The equatorial plane along which chromosomes align during metaphase is the metaphase plate.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 355,
        "q": "Which structures serve as attachment points for spindle fibers on chromosome centromeres?",
        "opts": {
            "A": "Kinetochores",
            "B": "Centrosomes",
            "C": "Asters",
            "D": "Chromomeres"
        },
        "ans": "A",
        "exp": "Kinetochores are disc-shaped protein structures on centromeres that anchor spindle microtubules.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 356,
        "q": "Centromeres split and chromatids move to opposite poles during:",
        "opts": {
            "A": "Anaphase",
            "B": "Prophase",
            "C": "Metaphase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "Centromeres split simultaneously at anaphase onset, allowing chromatids to separate.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 357,
        "q": "Chromosomes uncoil and nuclear envelope reforms around chromosome clusters during:",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "Prophase"
        },
        "ans": "A",
        "exp": "Chromosome decondensation and nuclear envelope reformation occur during telophase.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 358,
        "q": "In plant cells, the precursor of the new cell wall is the:",
        "opts": {
            "A": "Cell plate (middle lamella)",
            "B": "Cleavage furrow",
            "C": "Contractile ring",
            "D": "Tonoplast"
        },
        "ans": "A",
        "exp": "The cell plate forms from center to periphery, developing into the middle lamella.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 359,
        "q": "The multinucleate condition in coconut milk is due to:",
        "opts": {
            "A": "Free nuclear division (karyokinesis without cytokinesis)",
            "B": "Endomitosis",
            "C": "Meiosis",
            "D": "Amitosis"
        },
        "ans": "A",
        "exp": "Free nuclear division without cytokinesis creates the syncytial liquid endosperm in coconut.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 360,
        "q": "Synapsis is the pairing of:",
        "opts": {
            "A": "Homologous chromosomes",
            "B": "Non-homologous chromosomes",
            "C": "Sister chromatids",
            "D": "Centrioles"
        },
        "ans": "A",
        "exp": "Synapsis is the pairing of homologous maternal and paternal chromosomes during zygotene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 361,
        "q": "The protein complex that mediates synapsis between homologous chromosomes is the:",
        "opts": {
            "A": "Synaptonemal complex",
            "B": "Kinetochore complex",
            "C": "Mitotic apparatus",
            "D": "Phragmoplast"
        },
        "ans": "A",
        "exp": "The synaptonemal complex is the ladder-like protein structure that holds synapsed homologs together.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 362,
        "q": "Crossing over takes place between:",
        "opts": {
            "A": "Non-sister chromatids of homologous chromosomes",
            "B": "Sister chromatids of the same chromosome",
            "C": "Non-homologous chromosomes",
            "D": "Centrioles and chromosomes"
        },
        "ans": "A",
        "exp": "Crossing over is the reciprocal exchange of DNA segments between non-sister chromatids of homologous chromosomes.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 363,
        "q": "Crossing over is mediated by the enzyme:",
        "opts": {
            "A": "Recombinase",
            "B": "DNA ligase",
            "C": "RNA polymerase",
            "D": "Amylase"
        },
        "ans": "A",
        "exp": "Recombinase is the enzyme complex that catalyzes crossing over during pachytene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 364,
        "q": "X-shaped structures formed during diplotene are called:",
        "opts": {
            "A": "Chiasmata",
            "B": "Kinetochores",
            "C": "Centrosomes",
            "D": "Phragmoplasts"
        },
        "ans": "A",
        "exp": "Chiasmata are the visible X-shaped crossover junctions holding homologs together in diplotene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 365,
        "q": "Terminalization of chiasmata occurs in:",
        "opts": {
            "A": "Diakinesis",
            "B": "Diplotene",
            "C": "Pachytene",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "Diakinesis is marked by the terminalization of chiasmata.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 366,
        "q": "Homologous chromosomes separate during:",
        "opts": {
            "A": "Anaphase I of meiosis",
            "B": "Anaphase II of meiosis",
            "C": "Anaphase of mitosis",
            "D": "Metaphase I"
        },
        "ans": "A",
        "exp": "Homologous chromosome pairs separate during Anaphase I of meiosis.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 367,
        "q": "Sister chromatids separate during:",
        "opts": {
            "A": "Anaphase II of meiosis and anaphase of mitosis",
            "B": "Anaphase I of meiosis",
            "C": "Prophase I of meiosis",
            "D": "Metaphase I of meiosis"
        },
        "ans": "A",
        "exp": "Sister chromatids separate when centromeres divide in Anaphase II and mitotic anaphase.",
        "topic": "meiosis",
        "sub": "Anaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 368,
        "q": "How many haploid cells are formed at the end of meiosis II?",
        "opts": {
            "A": "Four haploid cells",
            "B": "Two diploid cells",
            "C": "Two haploid cells",
            "D": "Eight haploid cells"
        },
        "ans": "A",
        "exp": "Meiosis concludes with the formation of four genetically diverse haploid daughter cells.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 369,
        "q": "The brief stage between Meiosis I and Meiosis II is called:",
        "opts": {
            "A": "Interkinesis",
            "B": "Interphase",
            "C": "Cytokinesis",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "Interkinesis is the short resting phase separating Meiosis I and II.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 370,
        "q": "DNA replication does NOT occur in which stage?",
        "opts": {
            "A": "Interkinesis",
            "B": "S phase of interphase",
            "C": "Pre-meiotic interphase",
            "D": "Synthesis phase"
        },
        "ans": "A",
        "exp": "Interkinesis lacks DNA replication, so cells enter Meiosis II with un-duplicated chromatids.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 371,
        "q": "Which type of cell division produces genetic variation necessary for evolution?",
        "opts": {
            "A": "Meiosis",
            "B": "Mitosis",
            "C": "Amitosis",
            "D": "Binary fission"
        },
        "ans": "A",
        "exp": "Meiosis generates genetic variation via crossing over and independent assortment.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 372,
        "q": "Which type of cell division is responsible for tissue growth and repair in multicellular organisms?",
        "opts": {
            "A": "Mitosis",
            "B": "Meiosis",
            "C": "Amitosis",
            "D": "Parthenogenesis"
        },
        "ans": "A",
        "exp": "Mitosis produces genetically identical cells that drive bodily growth, regeneration, and repair.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 373,
        "q": "What is the chromosome number in human primary spermatocyte during Metaphase I?",
        "opts": {
            "A": "46 chromosomes (23 bivalents)",
            "B": "23 chromosomes",
            "C": "92 chromosomes",
            "D": "12 chromosomes"
        },
        "ans": "A",
        "exp": "A primary spermatocyte is diploid (2n = 46), with chromosomes arranged in 23 bivalents.",
        "topic": "meiosis",
        "sub": "Metaphase I",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 374,
        "q": "What is the chromosome number in human secondary spermatocyte at Metaphase II?",
        "opts": {
            "A": "23 chromosomes",
            "B": "46 chromosomes",
            "C": "92 chromosomes",
            "D": "12 chromosomes"
        },
        "ans": "A",
        "exp": "A secondary spermatocyte is haploid (n = 23), each chromosome having two sister chromatids.",
        "topic": "meiosis",
        "sub": "Metaphase II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 375,
        "q": "What is the chromosome number in each human spermatid formed after Telophase II?",
        "opts": {
            "A": "23 chromosomes",
            "B": "46 chromosomes",
            "C": "92 chromosomes",
            "D": "12 chromosomes"
        },
        "ans": "A",
        "exp": "Spermatids are haploid gametes containing 23 individual chromosomes (1C DNA content).",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Medium",
        "qtype": "Single Correct MCQ"
    }
]
