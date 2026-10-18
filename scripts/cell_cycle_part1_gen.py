# Cell Cycle Part 1: Q1 to Q125 (Easy)
import json

def get_part1_raw():
    return [
    {
        "q_num": 1,
        "q": "The sequence of events by which a cell duplicates its genome, synthesizes the other constituents of the cell and eventually divides into two daughter cells is termed:",
        "opts": {
            "A": "Cell cycle",
            "B": "Karyokinesis",
            "C": "Cytokinesis",
            "D": "Interkinesis"
        },
        "ans": "A",
        "exp": "The sequence of events by which a cell duplicates its genome, synthesizes other cellular constituents, and divides into two daughter cells is called the cell cycle.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 2,
        "q": "A typical human cell in cell culture divides approximately once every:",
        "opts": {
            "A": "24 hours",
            "B": "90 minutes",
            "C": "20 minutes",
            "D": "12 hours"
        },
        "ans": "A",
        "exp": "A typical eukaryotic somatic cell, such as a human cell in culture, divides approximately once every 24 hours.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 3,
        "q": "The cell cycle duration of a common yeast cell (Saccharomyces cerevisiae) is approximately:",
        "opts": {
            "A": "90 minutes",
            "B": "24 hours",
            "C": "20 minutes",
            "D": "12 hours"
        },
        "ans": "A",
        "exp": "Yeast can progress through the cell cycle in only about 90 minutes.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 4,
        "q": "The cell cycle is divided into two basic phases:",
        "opts": {
            "A": "Interphase and M Phase (Mitosis phase)",
            "B": "Karyokinesis and Cytokinesis",
            "C": "G1 phase and S phase",
            "D": "Prophase and Metaphase"
        },
        "ans": "A",
        "exp": "The cell cycle is divided into two basic phases: Interphase and M Phase (Mitosis phase).",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 5,
        "q": "In a 24-hour cell cycle of a human cell, cell division proper (M phase) lasts for only about:",
        "opts": {
            "A": "One hour (about 5% of the total duration)",
            "B": "12 hours",
            "C": "23 hours",
            "D": "6 hours"
        },
        "ans": "A",
        "exp": "Cell division proper (M phase) lasts for only about one hour; more than 95% of the duration of the cell cycle is spent in interphase.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 6,
        "q": "Interphase represents what percentage of the total duration of the eukaryotic cell cycle?",
        "opts": {
            "A": "More than 95%",
            "B": "About 50%",
            "C": "About 25%",
            "D": "Less than 10%"
        },
        "ans": "A",
        "exp": "Interphase lasts more than 95% of the total duration of the cell cycle.",
        "topic": "interphase",
        "sub": "Cell Cycle Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 7,
        "q": "Though historically called the 'resting phase', interphase is actually the time during which the cell:",
        "opts": {
            "A": "Is metabolically active and prepares for division by undergoing cell growth and DNA replication in an orderly manner",
            "B": "Undergoes complete cessation of all biochemical metabolism",
            "C": "Divides its nucleus into four haploid nuclei",
            "D": "Dissolves its plasma membrane and cell wall"
        },
        "ans": "A",
        "exp": "Interphase is the preparatory phase during which the cell prepares for division by undergoing both cell growth and DNA replication in an orderly manner.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 8,
        "q": "Interphase is subdivided into which three successive phases?",
        "opts": {
            "A": "G1 phase, S phase, and G2 phase",
            "B": "Prophase, Metaphase, and Anaphase",
            "C": "Karyokinesis, Cytokinesis, and Interkinesis",
            "D": "Leptotene, Zygotene, and Pachytene"
        },
        "ans": "A",
        "exp": "Interphase is divided into three phases: G1 phase (Gap 1), S phase (Synthesis), and G2 phase (Gap 2).",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 9,
        "q": "Which phase of interphase corresponds to the interval between mitosis and the initiation of DNA replication?",
        "opts": {
            "A": "G1 phase (Gap 1)",
            "B": "S phase",
            "C": "G2 phase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "G1 phase corresponds to the interval between mitosis and initiation of DNA replication.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 10,
        "q": "During the G1 phase of the cell cycle, the cell is:",
        "opts": {
            "A": "Metabolically active and continuously grows, but does not replicate its DNA",
            "B": "Replicating its nuclear DNA double helices",
            "C": "Dividing its cytoplasm into daughter cells",
            "D": "Completely inactive and dormant"
        },
        "ans": "A",
        "exp": "During G1 phase, the cell is metabolically active and continuously grows but does not replicate its DNA.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 11,
        "q": "DNA synthesis or replication takes place during which specific phase of interphase?",
        "opts": {
            "A": "S phase (Synthesis phase)",
            "B": "G1 phase",
            "C": "G2 phase",
            "D": "G0 phase"
        },
        "ans": "A",
        "exp": "S or synthesis phase marks the period during which DNA synthesis or replication takes place.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 12,
        "q": "If the initial amount of DNA in a diploid cell is denoted as 2C, what will be the amount of DNA per cell at the end of S phase?",
        "opts": {
            "A": "4C",
            "B": "2C",
            "C": "C",
            "D": "8C"
        },
        "ans": "A",
        "exp": "During S phase, the amount of DNA per cell doubles. If the initial amount is 2C, it increases to 4C.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 13,
        "q": "If a cell has diploid number of chromosomes (2n = 16) at G1 phase, what will be the number of chromosomes after the completion of S phase?",
        "opts": {
            "A": "16 (remains 2n)",
            "B": "32 (doubles to 4n)",
            "C": "8 (halves to n)",
            "D": "64"
        },
        "ans": "A",
        "exp": "Although the amount of DNA doubles (from 2C to 4C), there is no increase in chromosome number; if the cell has 2n chromosomes at G1, it still has 2n chromosomes at S phase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 14,
        "q": "In animal cells, during the S phase, while DNA replication takes place in the nucleus, which organelle duplicates in the cytoplasm?",
        "opts": {
            "A": "Centriole",
            "B": "Mitochondrion",
            "C": "Ribosome",
            "D": "Lysosome"
        },
        "ans": "A",
        "exp": "In animal cells, during the S phase, DNA replication begins in the nucleus, and the centriole duplicates in the cytoplasm.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 15,
        "q": "During which phase of interphase are proteins synthesized in preparation for mitosis while cell growth continues?",
        "opts": {
            "A": "G2 phase (Gap 2)",
            "B": "G1 phase",
            "C": "S phase",
            "D": "G0 phase"
        },
        "ans": "A",
        "exp": "During the G2 phase, proteins (like tubulin) are synthesized in preparation for mitosis while cell growth continues.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 16,
        "q": "Cells in adult animals that do not exhibit division (such as heart cells and nerve cells) exit G1 phase to enter an inactive stage called the:",
        "opts": {
            "A": "Quiescent stage (G0)",
            "B": "S phase",
            "C": "G2 phase",
            "D": "M phase"
        },
        "ans": "A",
        "exp": "Some cells in the adult animal do not appear to exhibit division (e.g., heart cells). These cells exit G1 phase to enter an inactive stage called quiescent stage (G0) of the cell cycle.",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 17,
        "q": "Cells in the quiescent stage (G0) of the cell cycle:",
        "opts": {
            "A": "Remain metabolically active but no longer proliferate unless called upon to do so depending on the requirement of the organism",
            "B": "Die immediately due to programmed necrosis",
            "C": "Continue replicating their DNA indefinitely",
            "D": "Divide continuously every 24 hours"
        },
        "ans": "A",
        "exp": "Cells in G0 stage remain metabolically active but no longer proliferate unless called upon to do so (e.g., replacement of injured or lost cells).",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 18,
        "q": "In animals, mitotic cell division is typically restricted to:",
        "opts": {
            "A": "Diploid somatic cells",
            "B": "Haploid gametes only",
            "C": "Haploid spores only",
            "D": "All bacterial cells"
        },
        "ans": "A",
        "exp": "In animals, mitotic cell division is seen only in the diploid somatic cells (with few exceptions in social insects like male honeybees).",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 19,
        "q": "In plants, mitotic cell division can occur in:",
        "opts": {
            "A": "Both haploid and diploid cells",
            "B": "Diploid cells only",
            "C": "Haploid gametes only",
            "D": "Dead tracheids only"
        },
        "ans": "A",
        "exp": "Unlike animals, plants can show mitotic divisions in both haploid (e.g., gametophyte) and diploid (sporophyte) cells.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 20,
        "q": "Mitosis is also commonly referred to as:",
        "opts": {
            "A": "Equational division",
            "B": "Reductional division",
            "C": "Endomitosis",
            "D": "Parthenogenesis"
        },
        "ans": "A",
        "exp": "Mitosis is called equational division because the chromosome number in parent and progeny cells remains the same.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 21,
        "q": "Karyokinesis of mitosis is conventionally divided into how many successive morphological stages?",
        "opts": {
            "A": "Four stages: Prophase, Metaphase, Anaphase, and Telophase",
            "B": "Two stages: G1 and G2",
            "C": "Three stages: G1, S, and G2",
            "D": "Five stages: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis"
        },
        "ans": "A",
        "exp": "Karyokinesis is divided into four stages: Prophase, Metaphase, Anaphase, and Telophase.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 22,
        "q": "The first stage of karyokinesis of mitosis, marked by the initiation of condensation of chromosomal material, is:",
        "opts": {
            "A": "Prophase",
            "B": "Metaphase",
            "C": "Anaphase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "Prophase, which is the first stage of karyokinesis of mitosis, follows the S and G2 phases and is marked by chromosome condensation.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 23,
        "q": "During prophase, the centrosome that had undergone duplication during interphase begins to:",
        "opts": {
            "A": "Move towards opposite poles of the cell",
            "B": "Fuse with the nuclear envelope",
            "C": "Dissolve completely into the cytosol",
            "D": "Enter the nucleolus"
        },
        "ans": "A",
        "exp": "The centrosome, which had undergone duplication during interphase, begins to move towards opposite poles of the cell.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 24,
        "q": "Microtubules radiating out from each centrosome during prophase are called:",
        "opts": {
            "A": "Asters",
            "B": "Axonemes",
            "C": "Kinetochores",
            "D": "Centromeres"
        },
        "ans": "A",
        "exp": "Each centrosome radiates out microtubules called asters.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 25,
        "q": "The mitotic apparatus is composed of:",
        "opts": {
            "A": "The two asters together with spindle fibers",
            "B": "Centromeres and kinetochores only",
            "C": "The nuclear envelope and nucleolus",
            "D": "The contractile cleavage ring"
        },
        "ans": "A",
        "exp": "The two asters together with spindle fibres form the mitotic apparatus.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 26,
        "q": "When viewed under the microscope at the end of prophase, cells do NOT show:",
        "opts": {
            "A": "Golgi complexes, endoplasmic reticulum, nucleolus, and nuclear envelope",
            "B": "Chromosomes",
            "C": "Centrosomes",
            "D": "Spindle fibers"
        },
        "ans": "A",
        "exp": "Cells at the end of prophase, when viewed under the microscope, do not show Golgi complexes, endoplasmic reticulum, nucleolus, and the nuclear envelope.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 27,
        "q": "The complete disintegration of the nuclear envelope marks the start of the second phase of mitosis, which is:",
        "opts": {
            "A": "Metaphase",
            "B": "Prophase",
            "C": "Anaphase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "The complete disintegration of the nuclear envelope marks the start of the second phase of mitosis, metaphase.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 28,
        "q": "Which stage of mitosis is considered the best and easiest stage to study the morphology, size, and shape of chromosomes?",
        "opts": {
            "A": "Metaphase",
            "B": "Prophase",
            "C": "Anaphase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "By metaphase, condensation of chromosomes is completed and they can be most easily observed under the microscope; hence, this is the stage at which morphology of chromosomes is most easily studied.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 29,
        "q": "At metaphase, each chromosome is observed to be made up of two sister chromatids held together by the:",
        "opts": {
            "A": "Centromere",
            "B": "Kinetochore",
            "C": "Aster",
            "D": "Phragmoplast"
        },
        "ans": "A",
        "exp": "At metaphase, chromosome is made up of two sister chromatids, which are held together by the centromere.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 30,
        "q": "Small disc-shaped protein structures present at the surface of the centromere to which spindle fibers attach are called:",
        "opts": {
            "A": "Kinetochores",
            "B": "Chromomeres",
            "C": "Centrosomes",
            "D": "Asters"
        },
        "ans": "A",
        "exp": "Small disc-shaped structures at the surface of the centromeres are called kinetochores.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 31,
        "q": "The plane of alignment of the chromosomes at the spindle equator during metaphase is referred to as the:",
        "opts": {
            "A": "Metaphase plate (equatorial plate)",
            "B": "Cleavage furrow",
            "C": "Phragmoplast",
            "D": "Synaptonemal complex"
        },
        "ans": "A",
        "exp": "The plane of alignment of the chromosomes at metaphase is referred to as the metaphase plate.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 32,
        "q": "At the onset of which stage of mitosis do the centromeres split simultaneously and sister chromatids separate?",
        "opts": {
            "A": "Anaphase",
            "B": "Prophase",
            "C": "Metaphase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "At the onset of anaphase, each chromosome arranged at the metaphase plate is split simultaneously and the two daughter chromatids (daughter chromosomes) begin their migration towards the two opposite poles.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 33,
        "q": "During anaphase, as each chromosome moves away from the equatorial plate towards the spindle poles, the centromere is oriented:",
        "opts": {
            "A": "Towards the pole (leading), with the arms of the chromosome trailing behind",
            "B": "Towards the equator, with arms leading",
            "C": "Parallel to the spindle fibers",
            "D": "Randomly tumbling in the cytosol"
        },
        "ans": "A",
        "exp": "As each chromosome moves away from the equatorial plate, the centromere of each chromosome remains directed towards the pole and hence at the leading edge, with the arms trailing behind.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 34,
        "q": "The stage of mitosis in which chromosomes reach their respective poles, decondense, and lose their individuality is:",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "Prophase"
        },
        "ans": "A",
        "exp": "At the beginning of telophase, the chromosomes that have reached their respective poles decondense and lose their individuality.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 35,
        "q": "During telophase, which of the following events takes place?",
        "opts": {
            "A": "Nuclear envelope develops around chromosome clusters, and nucleolus, Golgi complex, and ER reform",
            "B": "Centromeres split simultaneously",
            "C": "Homologous chromosomes pair up",
            "D": "Chromosomes align at the equator"
        },
        "ans": "A",
        "exp": "During telophase: nuclear envelope assembles around the chromosome clusters, nucleolus, Golgi complex, and ER reform.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 36,
        "q": "The division of the cytoplasm into two daughter cells following karyokinesis is termed:",
        "opts": {
            "A": "Cytokinesis",
            "B": "Karyokinesis",
            "C": "Interkinesis",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "Cell division is completed by the division of cytoplasm into two daughter cells, a process called cytokinesis.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 37,
        "q": "In an animal cell, cytokinesis is achieved by the appearance of a:",
        "opts": {
            "A": "Cleavage furrow in the plasma membrane that deepens centripetally",
            "B": "Cell plate growing centrifugally from the center",
            "C": "Lignified middle lamella",
            "D": "Synaptonemal complex"
        },
        "ans": "A",
        "exp": "In an animal cell, cytokinesis is achieved by the appearance of a furrow in the plasma membrane that deepens centripetally until it joins in the center.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 38,
        "q": "In plant cells, cytokinesis occurs by the formation of a:",
        "opts": {
            "A": "Cell plate that grows centrifugally from the center towards the lateral walls",
            "B": "Cleavage furrow deepening centripetally",
            "C": "Centriolar aster",
            "D": "Nuclear membrane invagination"
        },
        "ans": "A",
        "exp": "In plant cells, wall formation starts in the centre of the cell and grows outward (centrifugally) to meet the existing lateral walls, forming the cell plate.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 39,
        "q": "The cell plate formed during plant cytokinesis represents the precursor of which plant structure?",
        "opts": {
            "A": "Middle lamella",
            "B": "Secondary cell wall",
            "C": "Plasmodesmata",
            "D": "Tonoplast"
        },
        "ans": "A",
        "exp": "The formation of the new cell wall begins with the formation of a simple precursor, called the cell-plate that represents the middle lamella between the walls of two adjacent cells.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 40,
        "q": "When karyokinesis is not followed by cytokinesis, a multinucleate condition arises, leading to the formation of a:",
        "opts": {
            "A": "Syncytium (e.g., liquid endosperm in coconut)",
            "B": "Monocot seedling",
            "C": "Haploid gamete",
            "D": "Zygotic embryo"
        },
        "ans": "A",
        "exp": "In some organisms karyokinesis is not followed by cytokinesis as a result of which multinucleate condition arises leading to the formation of syncytium (e.g., liquid endosperm in coconut).",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 41,
        "q": "The specialized form of cell division that reduces the chromosome number by half resulting in the production of haploid daughter cells is called:",
        "opts": {
            "A": "Meiosis",
            "B": "Mitosis",
            "C": "Amitosis",
            "D": "Fission"
        },
        "ans": "A",
        "exp": "The production of offspring by sexual reproduction includes the fusion of two gametes, involving meiosis, which reduces the chromosome number by half.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 42,
        "q": "Meiosis involves how many sequential cycles of nuclear and cell division, and how many cycles of DNA replication?",
        "opts": {
            "A": "Two sequential cycles of nuclear division (Meiosis I and II), but only a single cycle of DNA replication",
            "B": "Two cycles of nuclear division and two cycles of DNA replication",
            "C": "One cycle of nuclear division and one cycle of DNA replication",
            "D": "Four cycles of nuclear division and two cycles of DNA replication"
        },
        "ans": "A",
        "exp": "Meiosis involves two sequential cycles of nuclear and cell division called meiosis I and meiosis II, but only a single cycle of DNA replication.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 43,
        "q": "At the end of meiosis II, how many haploid daughter cells are formed from a single diploid parent cell?",
        "opts": {
            "A": "Four haploid cells",
            "B": "Two diploid cells",
            "C": "Two haploid cells",
            "D": "Eight haploid cells"
        },
        "ans": "A",
        "exp": "Four haploid cells are formed at the end of meiosis II.",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 44,
        "q": "Prophase of the first meiotic division (Prophase I) is typically longer and more complex than mitotic prophase. It is subdivided into how many phases?",
        "opts": {
            "A": "Five phases: Leptotene, Zygotene, Pachytene, Diplotene, and Diakinesis",
            "B": "Four phases: G1, S, G2, and M",
            "C": "Three phases: Prophase, Metaphase, Anaphase",
            "D": "Two phases: Meiosis I and Meiosis II"
        },
        "ans": "A",
        "exp": "Prophase I has been subdivided into five phases based on chromosomal behaviour: Leptotene, Zygotene, Pachytene, Diplotene, and Diakinesis.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 45,
        "q": "During which stage of Prophase I do chromosomes gradually become visible under the light microscope as compaction continues?",
        "opts": {
            "A": "Leptotene",
            "B": "Zygotene",
            "C": "Pachytene",
            "D": "Diplotene"
        },
        "ans": "A",
        "exp": "During leptotene stage the chromosomes become gradually visible under the light microscope. The compaction of chromosomes continues throughout leptotene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 46,
        "q": "The process of pairing of homologous chromosomes during the zygotene stage is called:",
        "opts": {
            "A": "Synapsis",
            "B": "Crossing over",
            "C": "Cytokinesis",
            "D": "Interkinesis"
        },
        "ans": "A",
        "exp": "During zygotene, chromosomes start pairing together and this process of association is called synapsis.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 47,
        "q": "Electron micrographs indicate that chromosome synapsis during zygotene is accompanied by the formation of a complex structure called the:",
        "opts": {
            "A": "Synaptonemal complex",
            "B": "Kinetochore",
            "C": "Centrosome",
            "D": "Phragmoplast"
        },
        "ans": "A",
        "exp": "Electron micrographs of zygotene indicate that chromosome synapsis is accompanied by the formation of complex structure called synaptonemal complex.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 48,
        "q": "The complex formed by a pair of synapsed homologous chromosomes during zygotene is called a:",
        "opts": {
            "A": "Bivalent or a tetrad",
            "B": "Kinetochore",
            "C": "Centromere",
            "D": "Chromatid dyad"
        },
        "ans": "A",
        "exp": "The complex formed by a pair of synapsed homologous chromosomes is called a bivalent or a tetrad.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 49,
        "q": "During which stage of Prophase I do recombination nodules appear, at which crossing over occurs?",
        "opts": {
            "A": "Pachytene",
            "B": "Leptotene",
            "C": "Zygotene",
            "D": "Diplotene"
        },
        "ans": "A",
        "exp": "Pachytene is characterized by the appearance of recombination nodules, the sites at which crossing over occurs between non-sister chromatids of the homologous chromosomes.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 50,
        "q": "Crossing over is best defined as:",
        "opts": {
            "A": "The exchange of genetic material between non-sister chromatids of homologous chromosomes",
            "B": "The duplication of DNA in the S phase",
            "C": "The separation of sister chromatids at anaphase",
            "D": "The fusion of male and female gametes"
        },
        "ans": "A",
        "exp": "Crossing over is the exchange of genetic material between non-sister chromatids of homologous chromosomes.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 51,
        "q": "Crossing over is an enzyme-mediated process. The enzyme involved is called:",
        "opts": {
            "A": "Recombinase",
            "B": "DNA polymerase",
            "C": "RNA polymerase",
            "D": "Ligase only"
        },
        "ans": "A",
        "exp": "Crossing over is an enzyme-mediated process and the enzyme involved is called recombinase.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 52,
        "q": "What is the biological significance of crossing over during pachytene?",
        "opts": {
            "A": "It leads to recombination of genetic material on homologous chromosomes, creating genetic variation",
            "B": "It halves the number of chromosomes in the cell",
            "C": "It synthesizes new histones for chromatin",
            "D": "It causes cell death"
        },
        "ans": "A",
        "exp": "Crossing over leads to recombination of genetic material on the two chromosomes, generating new allelic combinations and genetic diversity in sexually reproducing organisms.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 53,
        "q": "The beginning of diplotene is recognized by:",
        "opts": {
            "A": "The dissolution of the synaptonemal complex and tendency of homologous chromosomes to separate",
            "B": "The appearance of recombination nodules",
            "C": "The pairing of homologous chromosomes",
            "D": "The complete division of the cytoplasm"
        },
        "ans": "A",
        "exp": "The beginning of diplotene is recognized by the dissolution of the synaptonemal complex and the tendency of the recombined homologous chromosomes to separate from each other.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 54,
        "q": "The X-shaped structures formed at the sites where recombined homologous chromosomes remain attached during diplotene are called:",
        "opts": {
            "A": "Chiasmata",
            "B": "Kinetochores",
            "C": "Centromeres",
            "D": "Recombination nodules"
        },
        "ans": "A",
        "exp": "The homologous chromosomes separate from each other except at the sites of crossovers. These X-shaped structures are called chiasmata.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 55,
        "q": "In oocytes of some vertebrates, diplotene can last for:",
        "opts": {
            "A": "Months or years",
            "B": "Only a few minutes",
            "C": "Exactly 24 hours",
            "D": "90 minutes"
        },
        "ans": "A",
        "exp": "In oocytes of some vertebrates, diplotene can last for months or years (e.g., human female oocytes arrested in dictyotene from embryonic life until ovulation).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 56,
        "q": "The final stage of meiotic Prophase I is:",
        "opts": {
            "A": "Diakinesis",
            "B": "Diplotene",
            "C": "Pachytene",
            "D": "Zygotene"
        },
        "ans": "A",
        "exp": "The final stage of meiotic prophase I is diakinesis.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 57,
        "q": "Diakinesis is marked by which major chromosomal event?",
        "opts": {
            "A": "Terminalization of chiasmata",
            "B": "Formation of synaptonemal complex",
            "C": "Crossing over at recombination nodules",
            "D": "Replication of DNA"
        },
        "ans": "A",
        "exp": "Diakinesis is marked by terminalisation of chiasmata.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 58,
        "q": "By the end of diakinesis, which cellular changes occur?",
        "opts": {
            "A": "The nucleolus disappears and the nuclear envelope breaks down",
            "B": "The chromosomes duplicate their DNA",
            "C": "The cell plate forms across the equator",
            "D": "The centromeres split into two"
        },
        "ans": "A",
        "exp": "By the end of diakinesis, the nucleolus disappears and the nuclear envelope also breaks down. Diakinesis represents transition to metaphase.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 59,
        "q": "During Metaphase I of meiosis, the bivalent chromosomes align on the:",
        "opts": {
            "A": "Equatorial plate",
            "B": "Poles of the spindle",
            "C": "Nuclear envelope",
            "D": "Inside the nucleolus"
        },
        "ans": "A",
        "exp": "The bivalent chromosomes align on the equatorial plate during Metaphase I.",
        "topic": "meiosis",
        "sub": "Metaphase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 60,
        "q": "During Anaphase I of meiosis, what happens to the chromosomes?",
        "opts": {
            "A": "The homologous chromosomes separate, while sister chromatids remain associated at their centromeres",
            "B": "Centromeres split and sister chromatids separate",
            "C": "DNA undergoes replication",
            "D": "Chromosomes decondense into invisible chromatin"
        },
        "ans": "A",
        "exp": "The homologous chromosomes separate, while sister chromatids remain associated at their centromeres during Anaphase I.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 61,
        "q": "During Telophase I of meiosis, the nuclear membrane and nucleolus reappear, and cytokinesis follows, forming a:",
        "opts": {
            "A": "Dyad of cells",
            "B": "Tetrad of cells",
            "C": "Single polyploid cell",
            "D": "Syncytium"
        },
        "ans": "A",
        "exp": "The nuclear membrane and nucleolus reappear, cytokinesis follows and that is called as dyad of cells.",
        "topic": "meiosis",
        "sub": "Telophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 62,
        "q": "The stage between the two meiotic divisions (Meiosis I and Meiosis II) is called:",
        "opts": {
            "A": "Interkinesis",
            "B": "Interphase",
            "C": "Cytokinesis",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "The stage between the two meiotic divisions is called interkinesis and is generally short lived.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 63,
        "q": "During interkinesis, does DNA replication occur?",
        "opts": {
            "A": "No, there is no replication of DNA during interkinesis",
            "B": "Yes, DNA replicates fully",
            "C": "Yes, DNA doubles twice",
            "D": "DNA is completely hydrolyzed"
        },
        "ans": "A",
        "exp": "There is no replication of DNA during interkinesis. Interkinesis is followed by prophase II.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 64,
        "q": "Meiosis II resembles which type of cell division?",
        "opts": {
            "A": "A normal mitosis (equational division)",
            "B": "Meiosis I",
            "C": "Binary fission of bacteria",
            "D": "Budding in yeast"
        },
        "ans": "A",
        "exp": "Meiosis II is initiated immediately after cytokinesis; it resembles a normal mitosis.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 65,
        "q": "In contrast to meiosis I, meiosis II begins with:",
        "opts": {
            "A": "Nuclear envelope breakdown and chromosome compaction in haploid cells",
            "B": "Pairing of homologous chromosomes",
            "C": "Formation of synaptonemal complex",
            "D": "Crossing over between homologs"
        },
        "ans": "A",
        "exp": "In contrast to meiosis I, meiosis II resembles a normal mitosis. The nuclear envelope breaks down by the end of prophase II.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 66,
        "q": "During Metaphase II, chromosomes align at the:",
        "opts": {
            "A": "Equator, and microtubules from opposite poles attach to kinetochores of sister chromatids",
            "B": "Poles of the cell",
            "C": "Cell wall",
            "D": "Nuclear pore complex"
        },
        "ans": "A",
        "exp": "At metaphase II, the chromosomes align at the equator and the microtubules from opposite poles of the spindle get attached to the kinetochores of sister chromatids.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 67,
        "q": "During Anaphase II of meiosis, which key event occurs?",
        "opts": {
            "A": "Simultaneous splitting of the centromere of each chromosome, allowing sister chromatids to move toward opposite poles",
            "B": "Separation of homologous pairs with centromeres intact",
            "C": "Synapsis of non-homologous chromosomes",
            "D": "Terminalization of chiasmata"
        },
        "ans": "A",
        "exp": "Anaphase II begins with the simultaneous splitting of the centromere of each chromosome, allowing them to move toward opposite poles of the cell.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 68,
        "q": "Meiosis ends with Telophase II, in which the two groups of chromosomes once again get enclosed by a nuclear envelope; cytokinesis follows, resulting in the formation of a:",
        "opts": {
            "A": "Tetrad of cells (four haploid daughter cells)",
            "B": "Dyad of cells (two diploid cells)",
            "C": "Single giant syncytium",
            "D": "Chain of eight spores"
        },
        "ans": "A",
        "exp": "Cytokinesis follows resulting in the formation of tetrad of cells i.e., four haploid daughter cells.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 69,
        "q": "How does meiosis conserve the specific chromosome number of sexually reproducing species across generations?",
        "opts": {
            "A": "By reducing chromosome number by half in gametes, which restores the diploid number upon fertilization",
            "B": "By doubling chromosome number every cycle",
            "C": "By preventing any mutation from occurring",
            "D": "By synthesizing identical clones"
        },
        "ans": "A",
        "exp": "Meiosis is the mechanism by which conservation of specific chromosome number of each species is achieved across generations in sexually reproducing organisms, even though the process results in reduction of chromosome number by half.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 70,
        "q": "Besides conserving chromosome number, what other vital role does meiosis play in evolution?",
        "opts": {
            "A": "It increases genetic variability in the population from one generation to the next",
            "B": "It prevents natural selection",
            "C": "It eliminates all dominant traits",
            "D": "It halts the cell cycle permanently"
        },
        "ans": "A",
        "exp": "Meiosis increases the genetic variability in the population of organisms from one generation to the next. Variations are very important for the process of evolution.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 71,
        "q": "Mitosis usually results in the production of diploid daughter cells with:",
        "opts": {
            "A": "Identical genetic complement",
            "B": "Half the genetic material",
            "C": "Completely scrambled recombinant genomes",
            "D": "Four haploid nuclei"
        },
        "ans": "A",
        "exp": "Mitosis usually results in the production of diploid daughter cells with identical genetic complement.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 72,
        "q": "In multicellular organisms, cell growth, tissue repair, and replacement of lost cells are achieved by:",
        "opts": {
            "A": "Mitosis",
            "B": "Meiosis",
            "C": "Amitosis",
            "D": "Parthenogenesis"
        },
        "ans": "A",
        "exp": "The growth of multicellular organisms is due to mitosis. Cell repair is also a very significant contribution of mitosis (e.g., cells of the upper layer of epidermis, cells of lining of gut, blood cells are constantly replaced).",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 73,
        "q": "Continuous growth of plants throughout their life occurs due to mitotic divisions in:",
        "opts": {
            "A": "Apical and lateral meristems",
            "B": "Permanent parenchyma only",
            "C": "Dead sclerenchyma fibers",
            "D": "Ripe fruit pericarps"
        },
        "ans": "A",
        "exp": "Mitotic divisions in the meristematic tissues \u2014 the apical and the lateral cambium, result in a continuous growth of plants throughout their life.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 74,
        "q": "A cell in G1 phase has 20 picograms of DNA and 8 chromosomes. What will be the DNA content and chromosome number in this cell at G2 phase?",
        "opts": {
            "A": "40 picograms of DNA and 8 chromosomes",
            "B": "20 picograms of DNA and 16 chromosomes",
            "C": "40 picograms of DNA and 16 chromosomes",
            "D": "10 picograms of DNA and 4 chromosomes"
        },
        "ans": "A",
        "exp": "During S phase, DNA content doubles (20 pg -> 40 pg), while chromosome number remains unchanged (8 chromosomes).",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 75,
        "q": "If an onion root tip cell has 16 chromosomes in G1 phase, how many chromosomes and how many chromatids will be present at metaphase of mitosis?",
        "opts": {
            "A": "16 chromosomes and 32 chromatids",
            "B": "32 chromosomes and 32 chromatids",
            "C": "16 chromosomes and 16 chromatids",
            "D": "8 chromosomes and 16 chromatids"
        },
        "ans": "A",
        "exp": "In metaphase, there are 16 chromosomes, each consisting of 2 sister chromatids held at the centromere, giving 16 \u00d7 2 = 32 chromatids.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 76,
        "q": "How many mitotic divisions are required to produce 128 cells from a single parent cell?",
        "opts": {
            "A": "7 divisions",
            "B": "128 divisions",
            "C": "64 divisions",
            "D": "8 divisions"
        },
        "ans": "A",
        "exp": "Each mitotic division doubles cell number: 2^n = 128. Since 2^7 = 128, exactly 7 successive mitotic divisions are required.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 77,
        "q": "How many meiotic divisions are required to produce 100 functional pollen grains in an angiosperm?",
        "opts": {
            "A": "25 meiotic divisions",
            "B": "100 meiotic divisions",
            "C": "50 meiotic divisions",
            "D": "12.5 divisions"
        },
        "ans": "A",
        "exp": "Each microspore mother cell produces 4 viable pollen grains via one meiotic division: 100 / 4 = 25 meiotic divisions.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 78,
        "q": "How many meiotic divisions are required to produce 100 viable seeds in a typical flowering plant?",
        "opts": {
            "A": "125 meiotic divisions (100 for 100 functional megaspores + 25 for 100 pollen grains)",
            "B": "100 meiotic divisions",
            "C": "50 meiotic divisions",
            "D": "200 meiotic divisions"
        },
        "ans": "A",
        "exp": "100 seeds require 100 male gametes (from 100/4 = 25 meioses) + 100 female gametes (from 100/1 = 100 meioses, since 3 of 4 megaspores degenerate). Total = 100 + 25 = 125 meiotic divisions.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 79,
        "q": "Which of the following is NOT a feature of meiotic Prophase I?",
        "opts": {
            "A": "Splitting of centromeres",
            "B": "Synapsis of homologous chromosomes",
            "C": "Crossing over at recombination nodules",
            "D": "Formation of chiasmata"
        },
        "ans": "A",
        "exp": "Centromeres do NOT split in Prophase I; centromeres split during Anaphase II of meiosis (or anaphase of mitosis).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 80,
        "q": "The correct sequence of stages during meiotic Prophase I is:",
        "opts": {
            "A": "Leptotene -> Zygotene -> Pachytene -> Diplotene -> Diakinesis",
            "B": "Zygotene -> Leptotene -> Pachytene -> Diplotene -> Diakinesis",
            "C": "Leptotene -> Pachytene -> Zygotene -> Diakinesis -> Diplotene",
            "D": "Diplotene -> Diakinesis -> Pachytene -> Zygotene -> Leptotene"
        },
        "ans": "A",
        "exp": "The chronological order is: Leptotene, Zygotene, Pachytene, Diplotene, and Diakinesis (mnemonic: Lazy Zebras Packed Delicious Dates).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 81,
        "q": "During which stage of cell cycle does synthesis of RNA and proteins required for cell division take place?",
        "opts": {
            "A": "G1 and G2 phases",
            "B": "M phase only",
            "C": "Quiescent G0 phase only",
            "D": "Anaphase only"
        },
        "ans": "A",
        "exp": "Cell growth and synthesis of RNAs and proteins occur during G1 and continue in G2 phase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 82,
        "q": "At which phase does the cell decide whether to divide, differentiate, or enter the quiescent G0 state?",
        "opts": {
            "A": "G1 checkpoint",
            "B": "M checkpoint",
            "C": "G2 checkpoint",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "The restriction point (G1 checkpoint) is where the cell commits to division (entering S phase) or exits to G0.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 83,
        "q": "Which of the following organisms does NOT show typical open mitosis where nuclear envelope breaks down?",
        "opts": {
            "A": "Yeast and certain fungi (undergoing closed mitosis)",
            "B": "Human fibroblasts",
            "C": "Onion root tip cells",
            "D": "Grasshopper spermatocytes"
        },
        "ans": "A",
        "exp": "Yeast and many lower fungi undergo closed mitosis, in which the nuclear envelope remains intact throughout chromosome division.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 84,
        "q": "Colchicine inhibits cell division by preventing:",
        "opts": {
            "A": "Spindle fiber assembly by binding to tubulin dimers",
            "B": "DNA replication in S phase",
            "C": "ATP synthesis in mitochondria",
            "D": "Phosphodiester bond formation"
        },
        "ans": "A",
        "exp": "Colchicine specifically binds to tubulin heterodimers, inhibiting microtubule polymerization and arresting mitosis at metaphase.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 85,
        "q": "The shape of chromosomes (V, L, J, I shapes) during anaphase is determined by the position of the:",
        "opts": {
            "A": "Centromere",
            "B": "Secondary constriction",
            "C": "Telomere",
            "D": "Kinetochore disc thickness"
        },
        "ans": "A",
        "exp": "During anaphase, the position of the centromere dictates chromosome morphology: metacentric is V-shaped, sub-metacentric is L-shaped, acrocentric is J-shaped, and telocentric is I-shaped.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 86,
        "q": "Which of the following events characterizes metaphase of mitosis?",
        "opts": {
            "A": "Chromosomes align at the equator with kinetochores attached to spindle microtubules from opposite poles",
            "B": "Centromeres split simultaneously",
            "C": "Synaptonemal complex dissolves",
            "D": "Chromosomes decondense into diffuse chromatin"
        },
        "ans": "A",
        "exp": "Metaphase is defined by alignment of chromosomes at the metaphase plate with spindle fibers docked to kinetochores from opposite poles.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 87,
        "q": "Which stage of mitosis is practically the reverse of prophase in terms of nuclear envelope and organelle assembly?",
        "opts": {
            "A": "Telophase",
            "B": "Anaphase",
            "C": "Metaphase",
            "D": "Cytokinesis"
        },
        "ans": "A",
        "exp": "Telophase reverses the events of prophase: chromosomes decondense, the nuclear envelope reforms, and organelles (nucleolus, Golgi, ER) reappear.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 88,
        "q": "In plant cells, cytokinesis involves phragmoplast, which is formed by:",
        "opts": {
            "A": "Golgi-derived vesicles and fragments of endoplasmic reticulum and microtubules aligning at the equator",
            "B": "Centriolar microfilaments",
            "C": "Mitochondrial outer membranes",
            "D": "Plasma membrane invagination"
        },
        "ans": "A",
        "exp": "The phragmoplast consists of microtubules and Golgi-derived vesicles that align at the equatorial plane to assemble the cell plate.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 89,
        "q": "Bivalents in meiotic Prophase I are clearly visible as tetrads during which stage?",
        "opts": {
            "A": "Pachytene",
            "B": "Leptotene",
            "C": "Zygotene",
            "D": "Diakinesis"
        },
        "ans": "A",
        "exp": "According to NCERT, bivalents formed in zygotene become clearly visible as tetrads in the next stage, pachytene.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 90,
        "q": "Recombination nodules are microscopic protein complexes that appear during pachytene on:",
        "opts": {
            "A": "The synaptonemal complex between non-sister chromatids of homologous chromosomes",
            "B": "The centromere of sister chromatids",
            "C": "The nuclear envelope pores",
            "D": "The spindle poles"
        },
        "ans": "A",
        "exp": "Recombination nodules are multicomponent protein assemblies positioned along the synaptonemal complex that catalyze reciprocal genetic crossing over.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 91,
        "q": "Chiasmata become visible for the first time during which stage of Prophase I?",
        "opts": {
            "A": "Diplotene",
            "B": "Pachytene",
            "C": "Zygotene",
            "D": "Leptotene"
        },
        "ans": "A",
        "exp": "Dissolution of the synaptonemal complex in diplotene leaves homologous chromosomes attached only at crossover sites, revealing X-shaped chiasmata.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 92,
        "q": "The process of moving chiasmata towards the ends of chromosomes during diakinesis is called:",
        "opts": {
            "A": "Terminalization",
            "B": "Synapsis",
            "C": "Crossing over",
            "D": "Disjunction"
        },
        "ans": "A",
        "exp": "During diakinesis, chiasmata shift progressively toward chromosome ends, a phenomenon known as terminalization.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 93,
        "q": "In human females, oocytes enter diplotene during fetal development and remain arrested until:",
        "opts": {
            "A": "Puberty (ovulation of each follicle)",
            "B": "Birth",
            "C": "Menopause",
            "D": "Fertilization in the fallopian tube"
        },
        "ans": "A",
        "exp": "Human primary oocytes enter diplotene in embryonic life and remain arrested in dictyotene until stimulated by LH surges after puberty.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 94,
        "q": "During Anaphase I of meiosis, the separation of homologous chromosomes is called:",
        "opts": {
            "A": "Disjunction",
            "B": "Nondisjunction",
            "C": "Terminalization",
            "D": "Synapsis"
        },
        "ans": "A",
        "exp": "Disjunction refers to the normal separation of homologous chromosomes toward opposite poles during Anaphase I.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 95,
        "q": "Failure of homologous chromosomes or sister chromatids to separate properly during meiosis is termed:",
        "opts": {
            "A": "Nondisjunction (leading to aneuploidy)",
            "B": "Disjunction",
            "C": "Terminalization",
            "D": "Synapsis"
        },
        "ans": "A",
        "exp": "Nondisjunction is the failure of chromosomes to separate, resulting in gametes with abnormal chromosome numbers (aneuploidy, e.g., Down syndrome).",
        "topic": "meiosis",
        "sub": "Meiosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 96,
        "q": "How does Anaphase I of meiosis differ fundamentally from anaphase of mitosis?",
        "opts": {
            "A": "In Anaphase I, homologous chromosomes separate while centromeres remain intact; in mitotic anaphase, centromeres split and sister chromatids separate",
            "B": "In Anaphase I, centromeres split into four pieces",
            "C": "In Anaphase I, DNA replicates twice",
            "D": "In Anaphase I, spindle fibers do not attach to chromosomes"
        },
        "ans": "A",
        "exp": "In Anaphase I, whole homologous chromosomes separate to opposite poles without centromere cleavage, halving chromosome number; in mitotic anaphase, centromeres split.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 97,
        "q": "How does Anaphase II of meiosis resemble anaphase of mitosis?",
        "opts": {
            "A": "In both, centromeres split simultaneously and sister chromatids move to opposite poles",
            "B": "In both, homologous pairs separate without splitting centromeres",
            "C": "In both, crossing over occurs",
            "D": "In both, synaptonemal complexes assemble"
        },
        "ans": "A",
        "exp": "Anaphase II is equational and identical in mechanism to mitotic anaphase: centromeres divide and sister chromatids separate.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 98,
        "q": "At the end of Meiosis I, the two resulting daughter cells are:",
        "opts": {
            "A": "Haploid in chromosome number (n), but each chromosome still consists of two chromatids (2C DNA)",
            "B": "Diploid in chromosome number (2n)",
            "C": "Haploid with single chromatids (1C DNA)",
            "D": "Polyploid with 4n chromosomes"
        },
        "ans": "A",
        "exp": "Meiosis I is reductional: each daughter cell has n chromosomes, but because sister chromatids have not separated, each chromosome has 2 chromatids (DNA content = 2C).",
        "topic": "meiosis",
        "sub": "Meiosis I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 99,
        "q": "At the end of Meiosis II, each of the four daughter cells has:",
        "opts": {
            "A": "Haploid chromosome number (n) and 1C DNA content",
            "B": "Diploid chromosome number (2n) and 2C DNA content",
            "C": "Haploid chromosome number (n) and 2C DNA content",
            "D": "Diploid chromosome number (2n) and 4C DNA content"
        },
        "ans": "A",
        "exp": "Meiosis II separates sister chromatids, producing 4 haploid cells each containing n chromosomes and 1C DNA content.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 100,
        "q": "Which of the following occurs during S phase of the cell cycle?",
        "opts": {
            "A": "DNA replication and synthesis of histones",
            "B": "Disintegration of the nuclear envelope",
            "C": "Splitting of centromeres",
            "D": "Pairing of homologous chromosomes"
        },
        "ans": "A",
        "exp": "DNA replication and concomitant histone protein synthesis occur during the S phase of interphase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 101,
        "q": "Centrioles are absent in which dividing cells?",
        "opts": {
            "A": "Higher plant cells",
            "B": "Animal somatic cells",
            "C": "Human spermatocytes",
            "D": "Flagellated green algal cells"
        },
        "ans": "A",
        "exp": "Higher plant cells lack centrosomes and centrioles, organizing their mitotic spindles from broad polar microtubule organizing centers (anastral mitosis).",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 102,
        "q": "Mitosis in animal cells is described as 'amphiastral' because:",
        "opts": {
            "A": "Two asters are formed from two pairs of centrioles at the spindle poles",
            "B": "No asters are formed at all",
            "C": "Chromosomes lack centromeres",
            "D": "Only one pole forms an aster"
        },
        "ans": "A",
        "exp": "Animal mitosis is amphiastral because an aster radiates from each of the two centrosomes at opposite poles.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 103,
        "q": "Mitosis in higher plant cells is described as 'anastral' because:",
        "opts": {
            "A": "No asters are formed due to the absence of centrioles",
            "B": "Two asters are formed",
            "C": "Spindle fibers are completely absent",
            "D": "Chromosomes do not condense"
        },
        "ans": "A",
        "exp": "Plant mitosis is anastral because plant cells lack centrioles and do not form astral rays.",
        "topic": "mitosis",
        "sub": "Mitosis Overview",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 104,
        "q": "Which of the following is true for the G0 phase of the cell cycle?",
        "opts": {
            "A": "Cells are metabolically active but do not divide unless stimulated",
            "B": "Cells are permanently dead",
            "C": "Cells have four times the normal DNA content",
            "D": "Cells continuously replicate their chromosomes"
        },
        "ans": "A",
        "exp": "In G0, cells remain viable and metabolically active, performing specialized functions without entering the division cycle.",
        "topic": "interphase",
        "sub": "G0 Phase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 105,
        "q": "The transition from G1 to S phase in the eukaryotic cell cycle is regulated primarily by:",
        "opts": {
            "A": "Cyclin D-Cdk4 and Cyclin E-Cdk2 complexes",
            "B": "Cyclin B-Cdk1 alone",
            "C": "Ribosomal RNA polymerase",
            "D": "Collagen fibers"
        },
        "ans": "A",
        "exp": "G1 progression and G1/S transition are driven by D-type cyclins partnering with Cdk4/6 and Cyclin E partnering with Cdk2.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 106,
        "q": "Which protein complex triggers the transition from metaphase to anaphase by destroying securin and mitotic cyclins?",
        "opts": {
            "A": "Anaphase-Promoting Complex / Cyclosome (APC/C)",
            "B": "Synaptonemal complex",
            "C": "Recombinase enzyme",
            "D": "Kinetochore outer plate"
        },
        "ans": "A",
        "exp": "The APC/C is an E3 ubiquitin ligase that degrades securin (activating separase to cleave cohesin) and Cyclin B, allowing anaphase onset.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 107,
        "q": "Cohesin is a multi-protein ring complex that functions in the cell cycle to:",
        "opts": {
            "A": "Hold sister chromatids together from S phase until anaphase",
            "B": "Condense chromatin into 30-nm fibers",
            "C": "Synthesize DNA primers",
            "D": "Digest the nuclear envelope"
        },
        "ans": "A",
        "exp": "Cohesin forms a topological ring that encircles replicated sister chromatids, maintaining cohesion until cleaved by separase at anaphase.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 108,
        "q": "The enzyme separase, which cleaves cohesin rings at anaphase, is kept inactive until anaphase by its inhibitory chaperone:",
        "opts": {
            "A": "Securin",
            "B": "Tubulin",
            "C": "Actin",
            "D": "Histone H1"
        },
        "ans": "A",
        "exp": "Securin binds and inhibits separase throughout metaphase; degradation of securin by APC/C unleashes separase to trigger chromosome separation.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 109,
        "q": "Which of the following structures dissolves during diplotene, allowing homologous chromosomes to partially separate?",
        "opts": {
            "A": "Synaptonemal complex",
            "B": "Kinetochore",
            "C": "Centromere",
            "D": "Spindle fiber"
        },
        "ans": "A",
        "exp": "The proteinaceous synaptonemal complex dissolves at the onset of diplotene, leaving homologs held only at chiasmata.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 110,
        "q": "In which phase of the cell cycle does a cell spend the maximum amount of time?",
        "opts": {
            "A": "Interphase (specifically G1 phase)",
            "B": "Telophase",
            "C": "Metaphase",
            "D": "Anaphase"
        },
        "ans": "A",
        "exp": "Interphase occupies over 95% of cell cycle time, with G1 typically being the longest and most variable subphase.",
        "topic": "interphase",
        "sub": "Interphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 111,
        "q": "Which phase of mitosis is the shortest in duration?",
        "opts": {
            "A": "Anaphase",
            "B": "Prophase",
            "C": "Metaphase",
            "D": "Telophase"
        },
        "ans": "A",
        "exp": "Anaphase is the shortest phase of mitosis, typically lasting only 2 to 5 minutes.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 112,
        "q": "During which meiotic stage does crossing over take place?",
        "opts": {
            "A": "Pachytene",
            "B": "Leptotene",
            "C": "Zygotene",
            "D": "Diplotene"
        },
        "ans": "A",
        "exp": "Crossing over takes place during pachytene of Prophase I.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 113,
        "q": "Synapsis occurs between which chromosomes during zygotene?",
        "opts": {
            "A": "Two homologous chromosomes",
            "B": "Two non-homologous chromosomes",
            "C": "Sister chromatids of the same chromosome",
            "D": "Mitochondrial circular DNAs"
        },
        "ans": "A",
        "exp": "Synapsis is the highly specific lateral pairing of two homologous chromosomes (one maternal, one paternal).",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 114,
        "q": "A bivalent in meiosis I consists of:",
        "opts": {
            "A": "Four chromatids and two centromeres",
            "B": "Two chromatids and one centromere",
            "C": "Eight chromatids and four centromeres",
            "D": "One chromatid and one centromere"
        },
        "ans": "A",
        "exp": "A bivalent consists of 2 synapsed homologous chromosomes; each chromosome has 2 sister chromatids, giving 4 chromatids (tetrad) and 2 centromeres.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 115,
        "q": "A tetrad in pachytene contains how many DNA double helices?",
        "opts": {
            "A": "Four DNA double helices",
            "B": "Two DNA double helices",
            "C": "Eight DNA double helices",
            "D": "One DNA double helix"
        },
        "ans": "A",
        "exp": "Each of the 4 chromatids in a bivalent contains one double-stranded DNA molecule, totaling 4 DNA double helices.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 116,
        "q": "In which phase of mitosis do chromosomes appear as thin, long, uncoiled threads of chromatin?",
        "opts": {
            "A": "Early prophase",
            "B": "Metaphase",
            "C": "Anaphase",
            "D": "Late telophase"
        },
        "ans": "A",
        "exp": "In early prophase, chromosomal material is in the process of untangling and condensation, appearing as long thin threads.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 117,
        "q": "What causes chromosomes to move toward opposite spindle poles during anaphase?",
        "opts": {
            "A": "Shortening of kinetochore microtubules by depolymerization at their plus and minus ends",
            "B": "Expansion of the cell wall",
            "C": "Inward flow of water by osmosis",
            "D": "Diffusion of histones into cytoplasm"
        },
        "ans": "A",
        "exp": "Kinetochore microtubules depolymerize, exerting pulling forces that drag daughter chromosomes poleward.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 118,
        "q": "How many chromosomes are present in a human sperm cell produced by meiosis?",
        "opts": {
            "A": "23 chromosomes",
            "B": "46 chromosomes",
            "C": "92 chromosomes",
            "D": "12 chromosomes"
        },
        "ans": "A",
        "exp": "Meiosis halves the human diploid chromosome count (2n = 46) to produce haploid gametes with n = 23 chromosomes.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 119,
        "q": "How many autosomes and sex chromosomes are present in a normal human secondary spermatocyte at Telophase I?",
        "opts": {
            "A": "22 autosomes and 1 sex chromosome (X or Y)",
            "B": "44 autosomes and 2 sex chromosomes",
            "C": "23 pairs of autosomes",
            "D": "46 autosomes"
        },
        "ans": "A",
        "exp": "A secondary spermatocyte is haploid (n = 23), containing 22 autosomes and one sex chromosome (either X or Y).",
        "topic": "meiosis",
        "sub": "Meiosis I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 120,
        "q": "Which type of cell division maintains genetic constancy and stability across somatic cell generations in an organism?",
        "opts": {
            "A": "Mitosis",
            "B": "Meiosis",
            "C": "Amitosis",
            "D": "Crossing over"
        },
        "ans": "A",
        "exp": "Mitosis produces genetically identical daughter cells, maintaining karyotypic and genetic stability across somatic cell divisions.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 121,
        "q": "The cleavage furrow in animal cells is formed by the contraction of a submembranous ring of:",
        "opts": {
            "A": "Actin microfilaments and myosin motor proteins",
            "B": "Tubulin microtubules",
            "C": "Collagen fibers",
            "D": "Cellulose fibrils"
        },
        "ans": "A",
        "exp": "Cytokinesis in animal cells is driven by an equatorial contractile ring of antiparallel actin filaments and non-muscle myosin II.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 122,
        "q": "If a cell has 2n = 12 chromosomes, how many bivalents will be observed during meiotic Prophase I?",
        "opts": {
            "A": "6 bivalents",
            "B": "12 bivalents",
            "C": "24 bivalents",
            "D": "3 bivalents"
        },
        "ans": "A",
        "exp": "The number of bivalents equals the haploid chromosome number: n = 12 / 2 = 6 bivalents.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 123,
        "q": "If a flowering plant has 2n = 24 chromosomes, how many tetrads are formed during pachytene?",
        "opts": {
            "A": "12 tetrads",
            "B": "24 tetrads",
            "C": "48 tetrads",
            "D": "6 tetrads"
        },
        "ans": "A",
        "exp": "The number of tetrads equals the number of bivalents, which is n = 24 / 2 = 12 tetrads.",
        "topic": "meiosis",
        "sub": "Prophase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 124,
        "q": "Which of the following cellular components is reconstituted during telophase?",
        "opts": {
            "A": "Nuclear envelope, nucleolus, Golgi complex, and ER",
            "B": "Centrosome duplicated into four",
            "C": "Synaptonemal complex",
            "D": "Recombination nodules"
        },
        "ans": "A",
        "exp": "Telophase is characterized by the reformation of the nuclear envelope, nucleolus, Golgi apparatus, and endoplasmic reticulum.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    },
    {
        "q_num": 125,
        "q": "The stage of cell division during which homologous chromosomes show independent assortment according to Mendel's law is:",
        "opts": {
            "A": "Anaphase I of meiosis",
            "B": "Anaphase II of meiosis",
            "C": "Anaphase of mitosis",
            "D": "Metaphase of mitosis"
        },
        "ans": "A",
        "exp": "Independent assortment occurs because maternal and paternal homologs orient randomly on the Metaphase I plate and segregate independently during Anaphase I.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Easy",
        "qtype": "Single Correct MCQ"
    }
]
