# Cell Cycle Part 4: Q376 to Q500 (Hard)
import json

def get_part4_raw():
    return [
    {
        "q_num": 376,
        "q": "Given below are two statements:\nStatement I: During G1 phase, the cell is metabolically active and continuously grows, but does not replicate its DNA.\nStatement II: During S phase, the amount of DNA per cell doubles from 2C to 4C, and the chromosome number also increases from 2n to 4n.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct according to NCERT. Statement II is incorrect because in S phase, although DNA content doubles from 2C to 4C, there is no increase in the number of chromosomes; it remains 2n.",
        "topic": "interphase",
        "sub": "Interphase & Phases",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 377,
        "q": "Given below are two statements:\nStatement I: In animal cells, during the S phase, DNA replication begins in the nucleus, and the centriole duplicates in the cytoplasm.\nStatement II: Plant cells possess centrioles that duplicate during G2 phase to organize spindle poles.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct (NCERT). Statement II is incorrect because higher plant cells lack centrioles altogether and undergo anastral mitosis.",
        "topic": "interphase",
        "sub": "Centrosome & S Phase",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 378,
        "q": "Given below are two statements:\nStatement I: Cells in the G0 (quiescent) stage remain metabolically active but no longer proliferate unless called on to do so depending on the requirement of the organism.\nStatement II: Heart cells in adult animals and neurons are classic examples of cells that exit G1 phase to enter an inactive state called quiescent stage (G0).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim correct statements from NCERT regarding the G0 quiescent stage.",
        "topic": "interphase",
        "sub": "G0 Quiescent Stage",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 379,
        "q": "Given below are two statements:\nStatement I: Cells at the end of prophase, when viewed under the microscope, do not show Golgi complexes, endoplasmic reticulum, nucleolus, and the nuclear envelope.\nStatement II: Chromosomes cluster at opposite spindle poles and their identity is lost as discrete elements during anaphase.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because chromosomes decondense and lose their individuality at opposite spindle poles during telophase, not anaphase.",
        "topic": "mitosis",
        "sub": "Mitosis Stages",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 380,
        "q": "Given below are two statements:\nStatement I: Morphology of chromosomes is most easily studied at metaphase because chromosomes are shortest and most condensed.\nStatement II: The shape of chromosomes (metacentric, submetacentric, acrocentric, telocentric) based on the position of the centromere is best studied at anaphase.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct. Chromosome morphology and counting are best studied at metaphase, whereas chromosome shape (V, L, J, I shapes due to centromere leading) is best observed at anaphase.",
        "topic": "mitosis",
        "sub": "Metaphase & Anaphase",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 381,
        "q": "Given below are two statements:\nStatement I: In plant cells, wall formation starts in the centre of the cell and grows outward to meet the existing lateral walls.\nStatement II: The formation of the new cell wall in plant cells begins with the formation of a simple precursor, called the cell plate that represents the middle lamella between the walls of two adjacent cells.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT descriptions of centrifugal plant cytokinesis and cell plate formation.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 382,
        "q": "Given below are two statements:\nStatement I: In some organisms, karyokinesis is not followed by cytokinesis as a result of which multinucleate condition arises leading to the formation of syncytium.\nStatement II: Liquid endosperm in coconut is an example of syncytium resulting from free nuclear divisions without cytokinesis.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT statements illustrating syncytium formation in liquid endosperm of coconut.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 383,
        "q": "Given below are two statements:\nStatement I: The complex formed by a pair of synapsed homologous chromosomes is called a bivalent or a tetrad.\nStatement II: Synapsis of homologous chromosomes is accompanied by the formation of a complex structure called the synaptonemal complex during zygotene.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT facts regarding zygotene, synapsis, and the synaptonemal complex.",
        "topic": "meiosis",
        "sub": "Meiosis I: Zygotene",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 384,
        "q": "Given below are two statements:\nStatement I: Crossing over is an enzyme-mediated process and the enzyme involved is called recombinase.\nStatement II: Crossing over leads to recombination of genetic material on non-homologous chromosomes.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because crossing over occurs between non-sister chromatids of homologous chromosomes, not non-homologous chromosomes.",
        "topic": "meiosis",
        "sub": "Meiosis I: Pachytene",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 385,
        "q": "Given below are two statements:\nStatement I: The beginning of diplotene is recognized by the dissolution of the synaptonemal complex and the tendency of the recombined homologous chromosomes of the bivalents to separate from each other except at the sites of crossovers.\nStatement II: The X-shaped structures formed at the crossover sites are called chiasmata.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are verbatim correct statements from NCERT describing the diplotene stage.",
        "topic": "meiosis",
        "sub": "Meiosis I: Diplotene",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 386,
        "q": "Given below are two statements:\nStatement I: In oocytes of some vertebrates, diplotene can last for months or years.\nStatement II: The final stage of meiotic prophase I is diakinesis, which is marked by terminalisation of chiasmata.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT statements regarding the prolonged diplotene in vertebrate oocytes (dictyotene) and terminalisation in diakinesis.",
        "topic": "meiosis",
        "sub": "Meiosis I: Diakinesis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 387,
        "q": "Given below are two statements:\nStatement I: During Anaphase I of meiosis, the homologous chromosomes separate, while sister chromatids remain associated at their centromeres.\nStatement II: During Anaphase II of meiosis, the centromere of each chromosome splits, allowing sister chromatids to move toward opposite poles.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct. Anaphase I separates homologous chromosomes (reductional), whereas Anaphase II splits centromeres and separates sister chromatids (equational).",
        "topic": "meiosis",
        "sub": "Meiosis I & II Anaphase",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 388,
        "q": "Given below are two statements:\nStatement I: The stage between the two meiotic divisions is called interkinesis and is generally short lived.\nStatement II: Interkinesis is characterized by replication of DNA to prepare chromosomes for Meiosis II.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because there is no replication of DNA during interkinesis.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 389,
        "q": "Given below are two statements:\nStatement I: Mitosis is usually restricted to diploid cells only in all multicellular organisms without exception.\nStatement II: In some social insects like male honeybees (drones), haploid cells divide by mitosis.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is incorrect but Statement II is correct",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is correct but Statement II is incorrect"
        },
        "ans": "A",
        "exp": "Statement I is incorrect because haploid cells can divide by mitosis (e.g., lower plants like gametophytes, male honeybees). Statement II is correct as male honeybees develop parthenogenetically and divide by mitosis.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 390,
        "q": "Given below are two statements:\nStatement I: A major contribution of mitosis is cell repair, such as restoring the cells of the upper layer of epidermis, cells of the lining of the gut, and blood cells.\nStatement II: Meiosis results in four haploid daughter cells, each having identical genetic complement to the parent cell.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct according to NCERT. Statement II is incorrect because meiosis generates genetic diversity through crossing over and independent assortment, so daughter cells are genetically distinct.",
        "topic": "meiosis",
        "sub": "Significance of Mitosis & Meiosis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 391,
        "q": "Given below are two statements:\nStatement I: Kinetochores are disc-shaped structures present on the sides of the centromere where spindle fibers attach during cell division.\nStatement II: At metaphase, chromosomes are attached to spindle fibers from both poles through kinetochores of both sister chromatids.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both Statement I and Statement II are correct NCERT descriptions of kinetochore structure and metaphase alignment.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 392,
        "q": "Given below are two statements:\nStatement I: Colchicine prevents the assembly of microtubules, thereby arresting dividing cells at metaphase.\nStatement II: Colchicine treatment results in polyploidy because chromosomes duplicate but cannot segregate into daughter cells.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct. Colchicine inhibits microtubule polymerisation, arresting cells at metaphase and inducing polyploidy.",
        "topic": "mitosis",
        "sub": "Mitotic Inhibitors",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 393,
        "q": "Given below are two statements:\nStatement I: During G2 phase, proteins are synthesised in preparation for mitosis while cell growth continues.\nStatement II: Histone proteins are synthesized exclusively during the G2 phase of the cell cycle.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because histone protein synthesis occurs primarily during the S phase, closely coupled with DNA replication.",
        "topic": "interphase",
        "sub": "G2 Phase & Histones",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 394,
        "q": "Given below are two statements:\nStatement I: Meiosis ensures the production of haploid phase in the life cycle of sexually reproducing organisms whereas fertilisation restores the diploid phase.\nStatement II: Meiosis increases the genetic variability in the population of organisms from one generation to the next.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct verbatim NCERT statements explaining the evolutionary and reproductive significance of meiosis.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 395,
        "q": "Given below are two statements:\nStatement I: In animal cells, cytokinesis occurs through the formation of a furrow in the plasma membrane, which gradually deepens and joins in the centre dividing the cell cytoplasm into two.\nStatement II: The cleavage furrow in animal cells is formed centripetally, moving from periphery toward the centre.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct. Animal cell cytokinesis involves a centripetal furrow driven by an actomyosin contractile ring.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 396,
        "q": "Given below are two statements:\nStatement I: During zygotene, chromosomes become gradually visible under the light microscope as compaction continues.\nStatement II: During leptotene, chromosomes begin pairing together and this process of association is called synapsis.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are incorrect because their stages are inverted: chromosomes become gradually visible under the light microscope throughout leptotene, whereas pairing/synapsis occurs in zygotene.",
        "topic": "meiosis",
        "sub": "Meiosis I Stages",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 397,
        "q": "Given below are two statements:\nStatement I: Bivalents are more clearly visible as tetrads in pachytene than in zygotene.\nStatement II: Recombination nodules, the sites at which crossing over occurs, appear during pachytene.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct according to NCERT: tetrads become distinct and recombination nodules appear during pachytene.",
        "topic": "meiosis",
        "sub": "Meiosis I: Pachytene",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 398,
        "q": "Given below are two statements:\nStatement I: Telophase I of meiosis is followed by interphase, during which extensive DNA replication takes place to produce 4C DNA for Meiosis II.\nStatement II: Meiosis II is initiated immediately after cytokinesis, usually before the chromosomes have fully elongated.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is incorrect but Statement II is correct",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is correct but Statement II is incorrect"
        },
        "ans": "A",
        "exp": "Statement I is incorrect because the interval between meiosis I and II is interkinesis, where NO DNA replication occurs. Statement II is correct as Meiosis II resembles normal mitosis and initiates before chromosomes fully uncoil.",
        "topic": "meiosis",
        "sub": "Interkinesis & Meiosis II",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 399,
        "q": "Given below are two statements:\nStatement I: The plane of alignment of the chromosomes at metaphase is referred to as the metaphase plate.\nStatement II: At anaphase, the centromere of each chromosome leads the poleward movement, with the chromosome arms trailing behind.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct verbatim NCERT statements describing the metaphase plate and the centromere-directed poleward migration in anaphase.",
        "topic": "mitosis",
        "sub": "Metaphase & Anaphase",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 400,
        "q": "Given below are two statements:\nStatement I: Yeast cell cycle duration is approximately 90 minutes.\nStatement II: In a typical 24-hour human cell cycle, the M phase lasts for about 1 hour, representing less than 5% of the total duration.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT numerical data regarding yeast (90 min) and human cell cycle (~24 hr, M phase ~1 hr, >95% in interphase).",
        "topic": "interphase",
        "sub": "Cell Cycle Duration",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 401,
        "q": "Given below are two statements:\nStatement I: Recombination between homologous chromosomes is completed by the end of pachytene, leaving the chromosomes linked at the sites of crossing over.\nStatement II: Dissolution of the synaptonemal complex takes place during diakinesis.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because dissolution of the synaptonemal complex occurs in diplotene, not diakinesis.",
        "topic": "meiosis",
        "sub": "Prophase I Sub-stages",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 402,
        "q": "Given below are two statements:\nStatement I: Mitosis is also called equational division because the number of chromosomes in the parent and progeny cells remains the same.\nStatement II: Meiosis is called reduction division because chromosome number is reduced to half in Meiosis I.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT definitions of equational division (mitosis) and reduction division (meiosis I).",
        "topic": "meiosis",
        "sub": "Mitosis vs Meiosis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 403,
        "q": "Given below are two statements:\nStatement I: Anaphase Promoting Complex (APC) is necessary for proper sister chromatid separation at anaphase.\nStatement II: If APC is defective in a human cell, chromosomes will fail to segregate and the cell will arrest at metaphase.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct. APC/C degrades securin, releasing active separase to cleave cohesin rings, allowing sister chromatids to separate. Defective APC blocks this transition.",
        "topic": "mitosis",
        "sub": "Cell Cycle Regulation",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 404,
        "q": "Given below are two statements:\nStatement I: Cyclins are proteins whose concentration oscillates cyclically throughout the cell cycle to regulate cyclin-dependent kinases (CDKs).\nStatement II: Cyclin-CDK complexes act by directly degrading DNA during cell division.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct. Statement II is incorrect because Cyclin-CDK complexes phosphorylate target regulatory proteins; they never degrade DNA.",
        "topic": "interphase",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 405,
        "q": "Given below are two statements:\nStatement I: At the G1/S checkpoint, the cell checks for adequate cell size, nutrient availability, and DNA integrity before committing to replication.\nStatement II: Once a cell passes the G1 checkpoint (restriction point), it is irreversibly committed to dividing.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct descriptions of the primary G1/S restriction point governing entry into S phase.",
        "topic": "interphase",
        "sub": "Checkpoints",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 406,
        "q": "Given below are two statements:\nStatement I: Lampbrush chromosomes found in amphibian oocytes are arrested at the diplotene stage of meiosis I.\nStatement II: Polytene chromosomes in salivary gland cells of Drosophila are formed due to repeated rounds of DNA replication without cell division (endomitosis).\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct classical cytogenetics facts regarding giant chromosomes and cell cycle variations.",
        "topic": "meiosis",
        "sub": "Special Chromosomes",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 407,
        "q": "Given below are two statements:\nStatement I: During Meiosis I, maternal and paternal chromosomes segregate independently at Anaphase I.\nStatement II: The number of possible maternal and paternal chromosome combinations in gametes produced by an organism with 2n = 46 is 2^23.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct. Independent assortment of homologous chromosome pairs yields 2^n combinations, which is 2^23 (over 8.3 million) for humans (n = 23).",
        "topic": "meiosis",
        "sub": "Independent Assortment",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 408,
        "q": "Given below are two statements:\nStatement I: Cytokinesis in higher plants occurs centrifugally through the formation of phragmoplast and cell plate.\nStatement II: The middle lamella is composed primarily of calcium and magnesium pectates.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT facts regarding plant cytokinesis, the cell plate, and the chemical composition of middle lamella.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 409,
        "q": "Given below are two statements:\nStatement I: If a pollen mother cell has 24 chromosomes, the number of chromosomes in each of the 4 microspores produced will be 12.\nStatement II: To produce 100 grains of wheat, 100 meiotic divisions are required in pollen mother cells and 100 in megaspore mother cells.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Statement I is correct but Statement II is incorrect",
            "B": "Both Statement I and Statement II are correct",
            "C": "Both Statement I and Statement II are incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Statement I is correct (24 / 2 = 12). Statement II is incorrect because 1 PMC meiotic division produces 4 functional microspores (so 100 pollen require 25 meiotic divisions), whereas 1 MMC meiotic division produces 1 functional megaspore (requiring 100 meiotic divisions), giving a total of 125 divisions.",
        "topic": "meiosis",
        "sub": "Meiotic Division Numerical",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 410,
        "q": "Given below are two statements:\nStatement I: Aster consists of microtubules radiating from a centrosome.\nStatement II: An apparatus consisting of two asters together with spindle fibers is called the mitotic apparatus.\nIn the light of the above statements, choose the most appropriate answer:",
        "opts": {
            "A": "Both Statement I and Statement II are correct",
            "B": "Both Statement I and Statement II are incorrect",
            "C": "Statement I is correct but Statement II is incorrect",
            "D": "Statement I is incorrect but Statement II is correct"
        },
        "ans": "A",
        "exp": "Both statements are correct verbatim NCERT descriptions of the aster and mitotic apparatus.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Hard",
        "qtype": "Statement-based MCQ"
    },
    {
        "q_num": 411,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Interphase is referred to as the resting phase, but it is the most metabolically active phase of the cell cycle.\nReason (R): During interphase, the cell prepares for division by undergoing cell growth and DNA replication in an orderly manner.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains why interphase was historically called 'resting' (no visible division) despite intense metabolic growth and replication.",
        "topic": "interphase",
        "sub": "Interphase Overview",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 412,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): During S phase, the DNA content of a diploid cell increases to 4C, but chromosome number remains 2n.\nReason (R): Replication yields two identical sister chromatids that remain attached at the single centromere.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains why chromosome number remains 2n despite DNA duplication.",
        "topic": "interphase",
        "sub": "S Phase Replication",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 413,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Mitosis is described as equational division.\nReason (R): The chromosome number in daughter cells is identical to that of the parent cell.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) is the exact defining reason why mitosis is termed equational division.",
        "topic": "mitosis",
        "sub": "Mitosis Significance",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 414,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Metaphase is the best stage to study chromosome morphology and structure under a light microscope.\nReason (R): Chromosomes reach their maximum condensation and align uniformly at the equatorial plate during metaphase.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) provides the correct explanation for why chromosomes are most distinct at metaphase.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 415,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Synapsis occurs during the zygotene stage of Prophase I.\nReason (R): Homologous chromosomes pair lengthwise facilitated by the assembly of the synaptonemal complex.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains how synapsis occurs via the synaptonemal complex.",
        "topic": "meiosis",
        "sub": "Zygotene",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 416,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Crossing over results in genetic recombination among offspring.\nReason (R): Crossing over exchanges genetic segments between non-sister chromatids of homologous chromosomes.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the physical mechanism that creates new allele combinations.",
        "topic": "meiosis",
        "sub": "Pachytene",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 417,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Meiosis I is termed reductional division, whereas Meiosis II is termed equational division.\nReason (R): Separation of homologous chromosomes occurs in Anaphase I, while splitting of centromeres occurs in Anaphase II.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains why chromosome number halves in Meiosis I and stays constant in Meiosis II.",
        "topic": "meiosis",
        "sub": "Meiosis Stages",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 418,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Chiasmata become clearly visible during diplotene.\nReason (R): Synaptonemal complexes dissolve, causing homologous chromosomes to separate except at the crossover sites.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) is the correct explanation for the appearance of X-shaped chiasmata.",
        "topic": "meiosis",
        "sub": "Diplotene",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 419,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In plant cells, cytokinesis occurs centrifugally rather than centripetally.\nReason (R): Plant cells are enclosed by a rigid, inextensible cell wall that prevents membrane furrowing.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains why plant cells form a cell plate centrifugally instead of furrowing.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 420,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Liquid endosperm of coconut is a syncytium.\nReason (R): Multiple karyokineses occur in the absence of subsequent cytokinesis during its development.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true and (R) correctly explains the cytological origin of a syncytium.",
        "topic": "mitosis",
        "sub": "Syncytium",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 421,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Treatment with colchicine prevents anaphase separation and induces polyploidy.\nReason (R): Colchicine inhibits tubulin polymerization, preventing the formation of spindle apparatus.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the biochemical mechanism of colchicine action.",
        "topic": "mitosis",
        "sub": "Mitotic Inhibitors",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 422,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): No DNA replication occurs during interkinesis.\nReason (R): Chromosomes entering Meiosis II already consist of two sister chromatids formed during the pre-meiotic S phase.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the biological reason why DNA replication is omitted during interkinesis.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 423,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The quiescent stage (G0) is a state of metabolic inactivity and cell death.\nReason (R): Cells in G0 phase can never re-enter the cell cycle even upon injury or specific stimulation.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are false",
            "B": "(A) is true but (R) is false",
            "C": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are false. G0 cells are metabolically active and can proliferate upon physiological demand (e.g., liver regeneration).",
        "topic": "interphase",
        "sub": "G0 Stage",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 424,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Variations in sexually reproducing populations are primarily generated during Meiosis.\nReason (R): Crossing over in Pachytene and independent assortment in Anaphase I create novel combinations of maternal and paternal alleles.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) accurately details the two meiotic sources of genetic diversity.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 425,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In animal mitosis, astral rays radiate from centrosomes, forming an amphiastral spindle.\nReason (R): Higher plant cells lack centrosomes and centrioles, forming an anastral spindle.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "B": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both statements are true facts of comparative biology, but (R) explains plant mitosis, not the presence of asters in animals.",
        "topic": "mitosis",
        "sub": "Asters & Spindle",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 426,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Gametes must always be produced through meiotic division in all organisms without exception.\nReason (R): Fusion of diploid gametes would otherwise double the chromosome number in each generation.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are false",
            "B": "(A) is true but (R) is false",
            "C": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Assertion is false because haploid parent plants (gametophytes in bryophytes, algae) produce gametes by mitosis. Reason is also flawed as an unconditional rule.",
        "topic": "meiosis",
        "sub": "Gametogenesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 427,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): During telophase, nuclear envelope reassembles around each chromosome cluster.\nReason (R): Golgi complex and endoplasmic reticulum reform at the end of telophase.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "B": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT facts of telophase events, but organelle reformation is a concurrent event, not the mechanistic explanation of nuclear envelope reformation.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 428,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In meiosis, chromosome number is halved while maintaining two daughter cells at completion of meiosis I.\nReason (R): Sister chromatids do not separate during Anaphase I.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why whole chromosomes (homologues) move to poles instead of chromatids, reducing chromosome number by half.",
        "topic": "meiosis",
        "sub": "Meiosis I Anaphase",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 429,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): The Spindle Assembly Checkpoint (SAC) arrests cell division at metaphase if even a single kinetochore is unattached to spindle microtubules.\nReason (R): Unattached kinetochores emit a signal that inhibits the Anaphase-Promoting Complex (APC/C).\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) accurately explains the molecular mechanism of SAC signaling (Mad2/BubR1 inhibiting APC/C).",
        "topic": "mitosis",
        "sub": "Spindle Checkpoint",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 430,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Meiosis results in four haploid daughter cells from a single diploid progenitor cell.\nReason (R): Meiosis involves two sequential cycles of nuclear and cell division, but only a single cycle of DNA replication.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains why two rounds of division following one replication yield four haploid cells.",
        "topic": "meiosis",
        "sub": "Meiosis Features",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 431,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Recombination nodules are complexes of enzymes including recombinase that mediate crossing over.\nReason (R): Recombination nodules appear along the synaptonemal complex during pachytene.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true NCERT facts regarding recombination nodules in pachytene.",
        "topic": "meiosis",
        "sub": "Pachytene",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 432,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Mitotic divisions in the meristematic tissues result in continuous growth of plants throughout their life.\nReason (R): Apical and lateral cambium meristems undergo repeated equational divisions.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains how meristematic mitotic divisions sustain indeterminate plant growth.",
        "topic": "mitosis",
        "sub": "Mitosis Significance",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 433,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Diakinesis is marked by terminalisation of chiasmata.\nReason (R): During diakinesis, the chromosomes fully condense and the meiotic spindle is assembled to prepare the homologous chromosomes for separation.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "B": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both statements are correct NCERT descriptions of diakinesis, but chromosome condensation and spindle assembly accompany terminalisation rather than mechanistically causing it.",
        "topic": "meiosis",
        "sub": "Diakinesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 434,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Cytochalasin B treatment inhibits animal cytokinesis without affecting karyokinesis.\nReason (R): Cytochalasin B prevents actin microfilament polymerization, disrupting the contractile ring.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the accurate pharmacological explanation of cytochalasin B action.",
        "topic": "mitosis",
        "sub": "Cytokinesis Inhibitors",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 435,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): During anaphase, chromosomes appear in distinct V, L, J, and I shapes.\nReason (R): The centromere leads poleward with arms trailing behind due to tensile pulling force of kinetochore microtubules.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the hydrodynamic/drag effect producing V (metacentric), L (submetacentric), J (acrocentric), and I (telocentric) shapes.",
        "topic": "mitosis",
        "sub": "Anaphase Chromosome Shapes",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 436,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): A cell with 2n = 16 and DNA content of 20 pg at G1 will have 2n = 16 and 40 pg DNA at G2.\nReason (R): During S phase, DNA replicates but the centromeres do not divide.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) is the exact biological explanation for doubling of DNA content without increasing chromosome count.",
        "topic": "interphase",
        "sub": "Cell Cycle Calculations",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 437,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): At metaphase I, bivalents arrange themselves on the equatorial plate in a double plane.\nReason (R): Each homologous chromosome of the bivalent is connected to spindle fibers from only one pole.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains the bipolar orientation of bivalents forming a double equatorial plate.",
        "topic": "meiosis",
        "sub": "Metaphase I",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 438,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Anaphase is the shortest phase of mitosis.\nReason (R): Rapid depolymerization of kinetochore microtubules swiftly pulls chromatids to opposite poles.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and rapid kinetochore microtubule disassembly accounts for anaphase being the shortest mitotic phase.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 439,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Male honey bees (drones) produce sperms by meiosis.\nReason (R): Spermatogenesis in all animals is obligatorily a meiotic process.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are false",
            "B": "(A) is true but (R) is false",
            "C": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both statements are false. Drones are haploid (n = 16) and produce sperms by mitosis, refuting both assertion and reason.",
        "topic": "meiosis",
        "sub": "Significance of Mitosis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 440,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In human females, primary oocytes remain arrested at diplotene stage for decades until puberty.\nReason (R): Chiasmata maintain the association between homologous chromosomes during this extended dictyotene arrest.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and chiasmata keep bivalents paired during the prolonged dictyotene arrest in human oogenesis.",
        "topic": "meiosis",
        "sub": "Diplotene Oogenesis",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 441,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Centromeres split during Anaphase I of meiosis.\nReason (R): Sister chromatids move to opposite poles during Anaphase I.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are false",
            "B": "(A) is true but (R) is false",
            "C": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are false. In Anaphase I, centromeres do NOT split and sister chromatids remain united; homologous chromosomes segregate.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 442,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Cytokinesis does not always accompany karyokinesis.\nReason (R): When karyokinesis occurs repeatedly without cytokinesis, a multinucleated coenocyte or syncytium is formed.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly explains the morphological consequence of uncoupled karyokinesis.",
        "topic": "mitosis",
        "sub": "Syncytium",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 443,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): In plant cells, the phragmoplast is formed by fragments of endoplasmic reticulum and Golgi vesicles.\nReason (R): Golgi-derived pectin vesicles fuse along the equatorial plane to form the precursor cell plate.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) correctly describes how phragmoplast components construct the middle lamella and cell plate.",
        "topic": "mitosis",
        "sub": "Phragmoplast",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 444,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): Karyokinesis in Meiosis II resembles an equational division like mitosis.\nReason (R): Sister chromatids separate and move to opposite poles due to splitting of centromeres in Anaphase II.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) provides the exact reason why Meiosis II is equational like mitosis.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 445,
        "q": "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R):\nAssertion (A): P53 is known as the guardian of the genome.\nReason (R): P53 halts the cell cycle at G1/S upon sensing DNA damage and triggers DNA repair or apoptosis.\nIn the light of the above statements, choose the correct answer:",
        "opts": {
            "A": "Both (A) and (R) are true and (R) is the correct explanation of (A)",
            "B": "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
            "C": "(A) is true but (R) is false",
            "D": "(A) is false but (R) is true"
        },
        "ans": "A",
        "exp": "Both (A) and (R) are true, and (R) explains why p53 is called the guardian of the genome.",
        "topic": "interphase",
        "sub": "Cell Cycle Control",
        "diff": "Hard",
        "qtype": "Assertion-Reason MCQ"
    },
    {
        "q_num": 446,
        "q": "Match Column I with Column II regarding meiotic prophase I stages:\nColumn I:\n(p) Zygotene\n(q) Pachytene\n(r) Diplotene\n(s) Diakinesis\nColumn II:\n(i) Terminalisation of chiasmata\n(ii) Synapsis and synaptonemal complex\n(iii) Crossing over and recombinase activity\n(iv) Dissolution of synaptonemal complex and chiasmata appearance\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(iv), s-(i)",
            "B": "p-(iii), q-(ii), r-(i), s-(iv)",
            "C": "p-(ii), q-(iv), r-(iii), s-(i)",
            "D": "p-(iv), q-(iii), r-(ii), s-(i)"
        },
        "ans": "A",
        "exp": "Zygotene: synapsis (ii); Pachytene: crossing over (iii); Diplotene: chiasmata appearance (iv); Diakinesis: terminalisation (i).",
        "topic": "meiosis",
        "sub": "Prophase I Sub-stages",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 447,
        "q": "Match the phases of cell cycle in Column I with their key features in Column II:\nColumn I:\n(p) G1 phase\n(q) S phase\n(r) G2 phase\n(s) G0 phase\nColumn II:\n(i) DNA replication and centriole duplication\n(ii) Quiescent metabolic stage\n(iii) Growth and protein synthesis for mitosis\n(iv) Cell growth and continuous metabolic activity without DNA replication\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(i), r-(iii), s-(ii)",
            "B": "p-(i), q-(iv), r-(ii), s-(iii)",
            "C": "p-(iv), q-(iii), r-(i), s-(ii)",
            "D": "p-(ii), q-(i), r-(iii), s-(iv)"
        },
        "ans": "A",
        "exp": "G1: growth without DNA replication (iv); S: DNA and centriole replication (i); G2: protein synthesis for mitosis (iii); G0: quiescent stage (ii).",
        "topic": "interphase",
        "sub": "Phases of Cell Cycle",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 448,
        "q": "Match the mitotic stages in Column I with their diagnostic events in Column II:\nColumn I:\n(p) Prophase\n(q) Metaphase\n(r) Anaphase\n(s) Telophase\nColumn II:\n(i) Splitting of centromeres and sister chromatid separation\n(ii) Alignment of chromosomes at equatorial plate\n(iii) Chromatin condensation and breakdown of nuclear envelope\n(iv) Decondensation of chromosomes and nuclear envelope reformation\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(i), s-(iv)",
            "B": "p-(ii), q-(iii), r-(iv), s-(i)",
            "C": "p-(iii), q-(i), r-(ii), s-(iv)",
            "D": "p-(iv), q-(ii), r-(i), s-(iii)"
        },
        "ans": "A",
        "exp": "Prophase: condensation (iii); Metaphase: alignment (ii); Anaphase: splitting of centromeres (i); Telophase: decondensation (iv).",
        "topic": "mitosis",
        "sub": "Mitotic Stages",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 449,
        "q": "Match Column I with Column II regarding chromosome shapes and centromere locations during anaphase:\nColumn I:\n(p) Metacentric\n(q) Sub-metacentric\n(r) Acrocentric\n(s) Telocentric\nColumn II:\n(i) J-shaped\n(ii) V-shaped\n(iii) I-shaped\n(iv) L-shaped\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iv), r-(i), s-(iii)",
            "B": "p-(iv), q-(ii), r-(i), s-(iii)",
            "C": "p-(ii), q-(i), r-(iv), s-(iii)",
            "D": "p-(iii), q-(iv), r-(i), s-(ii)"
        },
        "ans": "A",
        "exp": "Metacentric is V-shaped (ii); Sub-metacentric is L-shaped (iv); Acrocentric is J-shaped (i); Telocentric is I-shaped (rod-like) (iii).",
        "topic": "mitosis",
        "sub": "Chromosome Shapes",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 450,
        "q": "Match the events in Column I with the correct meiotic stage in Column II:\nColumn I:\n(p) Synaptonemal complex formation\n(q) Action of recombinase\n(r) Terminalisation of chiasmata\n(s) Disjunction of homologous chromosomes\nColumn II:\n(i) Diakinesis\n(ii) Anaphase I\n(iii) Zygotene\n(iv) Pachytene\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(i), s-(ii)",
            "B": "p-(iv), q-(iii), r-(i), s-(ii)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(ii), q-(iv), r-(i), s-(iii)"
        },
        "ans": "A",
        "exp": "Synaptonemal complex: Zygotene (iii); Recombinase: Pachytene (iv); Terminalisation: Diakinesis (i); Disjunction of homologues: Anaphase I (ii).",
        "topic": "meiosis",
        "sub": "Meiosis Events",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 451,
        "q": "Match the cell types in Column I with their typical cell cycle behaviors in Column II:\nColumn I:\n(p) Neurons and heart cells\n(q) Epidermal and gut epithelial cells\n(r) Drones of honeybees\n(s) Meristematic shoot apical cells\nColumn II:\n(i) Divide continuously by mitosis for cell replacement\n(ii) Divide by mitosis despite being haploid\n(iii) Permanently exit cell cycle into G0 stage\n(iv) Divide indefinitely maintaining plant growth\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(i), r-(ii), s-(iv)",
            "B": "p-(i), q-(iii), r-(iv), s-(ii)",
            "C": "p-(iii), q-(iv), r-(ii), s-(i)",
            "D": "p-(ii), q-(i), r-(iii), s-(iv)"
        },
        "ans": "A",
        "exp": "Neurons/heart cells: G0 (iii); Epithelial cells: cell repair replacement (i); Drones: haploid mitosis (ii); Meristematic: indeterminate growth (iv).",
        "topic": "interphase",
        "sub": "Cell Types & Cell Cycle",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 452,
        "q": "Match the chemical inhibitors in Column I with their mechanism of cell cycle arrest in Column II:\nColumn I:\n(p) Colchicine\n(q) Cytochalasin B\n(r) Taxol\n(s) Hydroxyurea\nColumn II:\n(i) Prevents microtubule depolymerization, stabilizing mitotic spindle\n(ii) Inhibits ribonucleotide reductase, arresting in S phase\n(iii) Inhibits tubulin polymerization, arresting at metaphase\n(iv) Disrupts actin microfilaments, inhibiting cytokinesis\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(i), s-(ii)",
            "B": "p-(iv), q-(iii), r-(ii), s-(i)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(i), q-(iv), r-(iii), s-(ii)"
        },
        "ans": "A",
        "exp": "Colchicine: binds tubulin / inhibits polymerization (iii); Cytochalasin B: blocks actin / cytokinesis (iv); Taxol: stabilizes microtubules (i); Hydroxyurea: inhibits DNA synthesis in S phase (ii).",
        "topic": "mitosis",
        "sub": "Cell Cycle Inhibitors",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 453,
        "q": "Match Column I with Column II regarding chromosome number (n) and DNA content (C) of a human cell (2n = 46, 2C at G1):\nColumn I:\n(p) G1 phase cell\n(q) G2 phase cell\n(r) Secondary spermatocyte after Meiosis I\n(s) Spermatid after Meiosis II\nColumn II:\n(i) 23 chromosomes, 1C DNA\n(ii) 46 chromosomes, 4C DNA\n(iii) 23 chromosomes, 2C DNA\n(iv) 46 chromosomes, 2C DNA\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(ii), r-(iii), s-(i)",
            "B": "p-(ii), q-(iv), r-(i), s-(iii)",
            "C": "p-(iv), q-(i), r-(iii), s-(ii)",
            "D": "p-(iii), q-(ii), r-(iv), s-(i)"
        },
        "ans": "A",
        "exp": "G1: 46 chr, 2C (iv); G2: 46 chr, 4C (ii); Secondary spermatocyte: 23 chr, 2C (iii); Spermatid: 23 chr, 1C (i).",
        "topic": "meiosis",
        "sub": "Chromosome Number & DNA Content",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 454,
        "q": "Match the cell cycle checkpoints in Column I with their regulatory checks in Column II:\nColumn I:\n(p) G1/S checkpoint\n(q) G2/M checkpoint\n(r) M / Spindle Assembly Checkpoint (SAC)\n(s) APC/C activation\nColumn II:\n(i) Verifies kinetochore attachment of all chromosomes\n(ii) Degradation of securin and activation of separase\n(iii) Checks cell size, growth factors, and DNA damage before replication\n(iv) Checks completion of DNA replication and repair of DNA errors\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(i), s-(ii)",
            "B": "p-(iv), q-(iii), r-(ii), s-(i)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(i), q-(iv), r-(iii), s-(ii)"
        },
        "ans": "A",
        "exp": "G1/S: cell size, nutrients, DNA integrity (iii); G2/M: replication completion (iv); SAC: kinetochore attachment (i); APC/C: degrades securin (ii).",
        "topic": "interphase",
        "sub": "Checkpoints",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 455,
        "q": "Match Column I with Column II regarding meiotic divisions:\nColumn I:\n(p) Anaphase I\n(q) Anaphase II\n(r) Metaphase I\n(s) Metaphase II\nColumn II:\n(i) Alignment of univalents on single equatorial plate\n(ii) Centromeres divide and sister chromatids separate\n(iii) Homologous chromosomes separate with unseparated centromeres\n(iv) Alignment of bivalents on double equatorial plate\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(iv), s-(i)",
            "B": "p-(ii), q-(iii), r-(i), s-(iv)",
            "C": "p-(iii), q-(iv), r-(ii), s-(i)",
            "D": "p-(iv), q-(ii), r-(iii), s-(i)"
        },
        "ans": "A",
        "exp": "Anaphase I: homologous separation (iii); Anaphase II: centromere splitting (ii); Metaphase I: bivalents on double plate (iv); Metaphase II: single plate alignment (i).",
        "topic": "meiosis",
        "sub": "Meiosis Stages",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 456,
        "q": "Match the cytokinesis terms in Column I with their features in Column II:\nColumn I:\n(p) Centripetal cytokinesis\n(q) Centrifugal cytokinesis\n(r) Phragmoplast\n(s) Syncytium\nColumn II:\n(i) Plant cells, starts from centre and moves towards periphery\n(ii) Multinucleated cell formed by lack of cytokinesis\n(iii) Animal cells, furrowing progresses from periphery to centre\n(iv) Precursor of cell plate formed by ER and Golgi vesicles\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(i), r-(iv), s-(ii)",
            "B": "p-(i), q-(iii), r-(ii), s-(iv)",
            "C": "p-(iii), q-(iv), r-(i), s-(ii)",
            "D": "p-(iv), q-(i), r-(iii), s-(ii)"
        },
        "ans": "A",
        "exp": "Centripetal: animal furrowing (iii); Centrifugal: plant cell plate (i); Phragmoplast: ER and Golgi vesicles (iv); Syncytium: multinucleate condition (ii).",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 457,
        "q": "Match the stages of prophase I in Column I with their duration and specific feature in Column II:\nColumn I:\n(p) Leptotene\n(q) Zygotene\n(r) Pachytene\n(s) Diplotene\nColumn II:\n(i) Recombination nodules and crossing over\n(ii) Compaction of chromosomes throughout the stage\n(iii) Formation of bivalents via synaptonemal complex\n(iv) Longest lasting stage in vertebrate oocytes with chiasmata\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(i), s-(iv)",
            "B": "p-(iii), q-(ii), r-(iv), s-(i)",
            "C": "p-(ii), q-(i), r-(iii), s-(iv)",
            "D": "p-(iv), q-(iii), r-(ii), s-(i)"
        },
        "ans": "A",
        "exp": "Leptotene: compaction (ii); Zygotene: synaptonemal complex (iii); Pachytene: recombinase & crossing over (i); Diplotene: prolonged in oocytes (iv).",
        "topic": "meiosis",
        "sub": "Prophase I Stages",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 458,
        "q": "Match Column I with Column II regarding the number of meiotic divisions required:\nColumn I:\n(p) 100 pollen grains\n(q) 100 functional megaspores\n(r) 100 seeds in angiosperms\n(s) 100 zygotes in humans\nColumn II:\n(i) 100 meiotic divisions\n(ii) 125 meiotic divisions\n(iii) 25 meiotic divisions\n(iv) 100 meiotic divisions in female + 25 in male = 125 divisions\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(i), r-(iv), s-(ii)",
            "B": "p-(i), q-(iii), r-(ii), s-(iv)",
            "C": "p-(iii), q-(iv), r-(i), s-(ii)",
            "D": "p-(iv), q-(i), r-(iii), s-(ii)"
        },
        "ans": "A",
        "exp": "100 pollen require 25 meiotic divisions (1 PMC -> 4 pollen); 100 megaspores require 100 divisions (1 MMC -> 1 megaspore); 100 seeds require 25 + 100 = 125 divisions.",
        "topic": "meiosis",
        "sub": "Meiotic Calculations",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 459,
        "q": "Match the structures in Column I with their cellular locations and functions in Column II:\nColumn I:\n(p) Kinetochore\n(q) Centrosome\n(r) Centromere\n(s) Chiasma\nColumn II:\n(i) Constriction holding sister chromatids together\n(ii) Disc-shaped protein structure for spindle microtubule attachment\n(iii) X-shaped site of physical exchange between homologous chromosomes\n(iv) Organelle containing two centrioles that organizes the mitotic spindle\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iv), r-(i), s-(iii)",
            "B": "p-(iv), q-(ii), r-(i), s-(iii)",
            "C": "p-(ii), q-(i), r-(iv), s-(iii)",
            "D": "p-(i), q-(iv), r-(ii), s-(iii)"
        },
        "ans": "A",
        "exp": "Kinetochore: disc-shaped protein structure (ii); Centrosome: contains centrioles (iv); Centromere: primary constriction (i); Chiasma: X-shaped crossover site (iii).",
        "topic": "mitosis",
        "sub": "Cell Division Structures",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 460,
        "q": "Match the cell cycle times in Column I with the corresponding organism/system in Column II:\nColumn I:\n(p) Yeast cell cycle duration\n(q) Human cultured cell cycle duration\n(r) M phase duration in human cells\n(s) Interphase duration in human cells\nColumn II:\n(i) About 1 hour (less than 5%)\n(ii) More than 95% (about 23 hours)\n(iii) Approximately 90 minutes\n(iv) Approximately 24 hours\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(i), s-(ii)",
            "B": "p-(iv), q-(iii), r-(i), s-(ii)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(i), q-(iv), r-(iii), s-(ii)"
        },
        "ans": "A",
        "exp": "Yeast: ~90 min (iii); Human cell: ~24 hr (iv); M phase: ~1 hr (i); Interphase: >95% (~23 hr) (ii).",
        "topic": "interphase",
        "sub": "Cell Cycle Timings",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 461,
        "q": "Match the terms related to chromosome configurations in Column I with their definitions in Column II:\nColumn I:\n(p) Monad\n(q) Dyad of cells\n(r) Tetrad of cells\n(s) Bivalent\nColumn II:\n(i) Pair of synapsed homologous chromosomes\n(ii) Single chromatid after centromere splitting\n(iii) Four haploid cells resulting from Meiosis II\n(iv) Two cells formed after Telophase I\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iv), r-(iii), s-(i)",
            "B": "p-(i), q-(iv), r-(iii), s-(ii)",
            "C": "p-(ii), q-(iii), r-(iv), s-(i)",
            "D": "p-(iv), q-(ii), r-(i), s-(iii)"
        },
        "ans": "A",
        "exp": "Monad: single chromatid (ii); Dyad of cells: 2 cells after Telophase I (iv); Tetrad of cells: 4 cells after Meiosis II (iii); Bivalent: paired homologues (i).",
        "topic": "meiosis",
        "sub": "Meiotic Configurations",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 462,
        "q": "Match the following types of spindle fibers in Column I with their features in Column II:\nColumn I:\n(p) Kinetochore fibers\n(q) Polar (interpolar) fibers\n(r) Astral rays\nColumn II:\n(i) Radiate outwards from centrosome towards cell cortex\n(ii) Extend from spindle poles and overlap at equator without attaching to chromosomes\n(iii) Extend from spindle poles and attach directly to kinetochores of chromosomes\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(ii), r-(i)",
            "B": "p-(ii), q-(iii), r-(i)",
            "C": "p-(i), q-(ii), r-(iii)",
            "D": "p-(iii), q-(i), r-(ii)"
        },
        "ans": "A",
        "exp": "Kinetochore fibers attach to chromosomes (iii); Polar fibers overlap without attaching (ii); Astral rays radiate outwards (i).",
        "topic": "mitosis",
        "sub": "Spindle Fibers",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 463,
        "q": "Match Column I with Column II regarding meiotic telophases:\nColumn I:\n(p) Telophase I\n(q) Telophase II\n(r) Interkinesis\n(s) Cytokinesis I\nColumn II:\n(i) Forms a dyad of cells\n(ii) Period between meiosis I and II without DNA replication\n(iii) Reappearance of nuclear envelope around four haploid nuclei\n(iv) Nuclear membrane and nucleolus reappear around two haploid sets\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(iii), r-(ii), s-(i)",
            "B": "p-(iii), q-(iv), r-(i), s-(ii)",
            "C": "p-(iv), q-(i), r-(ii), s-(iii)",
            "D": "p-(ii), q-(iv), r-(iii), s-(i)"
        },
        "ans": "A",
        "exp": "Telophase I: nuclear membrane reappears around 2 nuclei (iv); Telophase II: 4 haploid nuclei (iii); Interkinesis: no DNA replication (ii); Cytokinesis I: dyad of cells (i).",
        "topic": "meiosis",
        "sub": "Meiotic Telophase",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 464,
        "q": "Match the enzymes and proteins in Column I with their roles in cell division in Column II:\nColumn I:\n(p) Recombinase\n(q) Cohesin\n(r) Separase\n(s) Tubulin\nColumn II:\n(i) Cleaves cohesin to allow sister chromatid separation at anaphase\n(ii) Catalyzes crossing over and genetic recombination in pachytene\n(iii) Forms microtubule polymers of the spindle apparatus\n(iv) Protein complex that glues sister chromatids together along their length\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iv), r-(i), s-(iii)",
            "B": "p-(iv), q-(ii), r-(i), s-(iii)",
            "C": "p-(ii), q-(i), r-(iv), s-(iii)",
            "D": "p-(iii), q-(iv), r-(i), s-(ii)"
        },
        "ans": "A",
        "exp": "Recombinase: crossing over (ii); Cohesin: glues chromatids (iv); Separase: cleaves cohesin (i); Tubulin: forms spindle microtubules (iii).",
        "topic": "meiosis",
        "sub": "Proteins of Cell Division",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 465,
        "q": "Match the chromosome stages in Column I with their morphological description in Column II:\nColumn I:\n(p) Leptotene\n(q) Zygotene\n(r) Pachytene\n(s) Diakinesis\nColumn II:\n(i) Bivalents appear as four-stranded tetrads\n(ii) Terminalisation of chiasmata and disappearance of nucleolus\n(iii) Thin thread-like bead on string appearance (bouquet stage)\n(iv) Pairing of homologues with zipper-like synaptonemal complex\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(i), s-(ii)",
            "B": "p-(iv), q-(iii), r-(ii), s-(i)",
            "C": "p-(iii), q-(i), r-(iv), s-(ii)",
            "D": "p-(i), q-(iv), r-(iii), s-(ii)"
        },
        "ans": "A",
        "exp": "Leptotene: thin thread bouquet stage (iii); Zygotene: synaptonemal complex pairing (iv); Pachytene: four-stranded tetrads (i); Diakinesis: terminalisation (ii).",
        "topic": "meiosis",
        "sub": "Prophase I Morphology",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 466,
        "q": "Match the following numerical values for a diploid cell with 2n = 8 and 2C = 16 pg DNA at G1:\nColumn I:\n(p) Chromosome count at metaphase of mitosis\n(q) Chromosome count at anaphase of mitosis\n(r) DNA content at G2 phase\n(s) Chromosome count in each cell after Meiosis I\nColumn II:\n(i) 16 chromosomes\n(ii) 32 pg DNA\n(iii) 8 chromosomes\n(iv) 4 chromosomes\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(i), r-(ii), s-(iv)",
            "B": "p-(i), q-(iii), r-(ii), s-(iv)",
            "C": "p-(iii), q-(ii), r-(i), s-(iv)",
            "D": "p-(iv), q-(i), r-(ii), s-(iii)"
        },
        "ans": "A",
        "exp": "Metaphase: 8 chromosomes (iii); Anaphase: sister chromatids separate = 16 chromosomes (i); G2 DNA: 2 x 16 = 32 pg (ii); Meiosis I product: 8 / 2 = 4 chromosomes (iv).",
        "topic": "interphase",
        "sub": "Cell Cycle Calculations",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 467,
        "q": "Match Column I with Column II regarding cytokinesis mechanisms:\nColumn I:\n(p) Animal cytokinesis\n(q) Plant cytokinesis\n(r) Syncytium example\n(s) Middle lamella\nColumn II:\n(i) Calcium pectate cement\n(ii) Centripetal cleavage furrow driven by actomyosin ring\n(iii) Liquid endosperm in Cocos nucifera\n(iv) Centrifugal cell plate formation via Golgi-derived phragmoplast\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iv), r-(iii), s-(i)",
            "B": "p-(iv), q-(ii), r-(iii), s-(i)",
            "C": "p-(ii), q-(iii), r-(iv), s-(i)",
            "D": "p-(i), q-(iv), r-(iii), s-(ii)"
        },
        "ans": "A",
        "exp": "Animal: centripetal furrow (ii); Plant: centrifugal cell plate (iv); Syncytium: coconut liquid endosperm (iii); Middle lamella: calcium pectate (i).",
        "topic": "mitosis",
        "sub": "Cytokinesis Mechanisms",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 468,
        "q": "Match Column I with Column II regarding meiotic stages and genetic significance:\nColumn I:\n(p) Zygotene synapsis\n(q) Pachytene crossing over\n(r) Anaphase I disjunction\n(s) Anaphase II disjunction\nColumn II:\n(i) Recombination of maternal and paternal alleles\n(ii) Alignment and physical stabilization of homologues\n(iii) Separation of non-identical sister chromatids\n(iv) Independent assortment of maternal and paternal homologues\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(i), r-(iv), s-(iii)",
            "B": "p-(i), q-(ii), r-(iv), s-(iii)",
            "C": "p-(ii), q-(iv), r-(i), s-(iii)",
            "D": "p-(iii), q-(i), r-(iv), s-(ii)"
        },
        "ans": "A",
        "exp": "Zygotene synapsis: physical pairing (ii); Pachytene crossing over: recombination (i); Anaphase I: independent assortment of homologues (iv); Anaphase II: separation of sister chromatids (iii).",
        "topic": "meiosis",
        "sub": "Significance of Meiotic Stages",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 469,
        "q": "Match the terms in Column I with their definitions in Column II:\nColumn I:\n(p) Endomitosis\n(q) Amitosis\n(r) Karyokinesis\n(s) Cytokinesis\nColumn II:\n(i) Direct cell division without spindle formation (in bacteria, old cells)\n(ii) Division of the cell nucleus\n(iii) Division of the cytoplasm\n(iv) Chromosome replication without nuclear or cytoplasmic division resulting in polyploidy\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(i), r-(ii), s-(iii)",
            "B": "p-(i), q-(iv), r-(ii), s-(iii)",
            "C": "p-(iv), q-(ii), r-(i), s-(iii)",
            "D": "p-(ii), q-(i), r-(iv), s-(iii)"
        },
        "ans": "A",
        "exp": "Endomitosis: replication without division (iv); Amitosis: direct division (i); Karyokinesis: nuclear division (ii); Cytokinesis: cytoplasmic division (iii).",
        "topic": "mitosis",
        "sub": "Cell Division Types",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 470,
        "q": "Match the phases in Column I with the condition of chromosomes in Column II:\nColumn I:\n(p) G1 phase\n(q) Metaphase\n(r) Anaphase\n(s) Telophase\nColumn II:\n(i) Two daughter chromatids moving to opposite poles\n(ii) Decondensed chromatin network enclosed by nuclear envelope\n(iii) Condensed chromosomes with two sister chromatids aligned on equatorial plate\n(iv) Diffuse uncoiled chromatin with 1 chromatid per chromosome\nSelect the correct option:",
        "opts": {
            "A": "p-(iv), q-(iii), r-(i), s-(ii)",
            "B": "p-(iii), q-(iv), r-(i), s-(ii)",
            "C": "p-(iv), q-(i), r-(iii), s-(ii)",
            "D": "p-(i), q-(iii), r-(iv), s-(ii)"
        },
        "ans": "A",
        "exp": "G1: diffuse chromatin (iv); Metaphase: condensed 2 chromatids aligned (iii); Anaphase: separating chromatids (i); Telophase: decondensing chromatin (ii).",
        "topic": "mitosis",
        "sub": "Chromosome States",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 471,
        "q": "Match Column I with Column II regarding mitotic structures:\nColumn I:\n(p) Aster\n(q) Centrosome\n(r) Kinetochore\n(s) Mitotic apparatus\nColumn II:\n(i) Two asters together with spindle fibers\n(ii) Microtubules radiating from centrosome\n(iii) Pericentriolar matrix enclosing a pair of centrioles\n(iv) Protein disc at primary constriction\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(iv), s-(i)",
            "B": "p-(iii), q-(ii), r-(iv), s-(i)",
            "C": "p-(ii), q-(iv), r-(iii), s-(i)",
            "D": "p-(i), q-(iii), r-(iv), s-(ii)"
        },
        "ans": "A",
        "exp": "Aster: radiating microtubules (ii); Centrosome: pericentriolar matrix and centrioles (iii); Kinetochore: protein disc (iv); Mitotic apparatus: asters + spindle fibers (i).",
        "topic": "mitosis",
        "sub": "Mitotic Apparatus",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 472,
        "q": "Match Column I with Column II regarding meiotic anomalies and ploidy changes:\nColumn I:\n(p) Non-disjunction\n(q) Aneuploidy\n(r) Polyploidy\n(s) Recombination\nColumn II:\n(i) Presence of an extra or missing chromosome (e.g., 2n + 1 or 2n - 1)\n(ii) Failure of homologous chromosomes or sister chromatids to separate\n(iii) Presence of more than two complete sets of chromosomes (e.g., 3n, 4n)\n(iv) Exchange of genetic segments leading to novel allelic combinations\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(i), r-(iii), s-(iv)",
            "B": "p-(i), q-(ii), r-(iii), s-(iv)",
            "C": "p-(ii), q-(iii), r-(i), s-(iv)",
            "D": "p-(iv), q-(ii), r-(iii), s-(i)"
        },
        "ans": "A",
        "exp": "Non-disjunction: failure of separation (ii); Aneuploidy: loss/gain of individual chromosome (i); Polyploidy: extra chromosome sets (iii); Recombination: genetic exchange (iv).",
        "topic": "meiosis",
        "sub": "Meiotic Anomalies",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 473,
        "q": "Match the organism in Column I with the approximate cell cycle length in Column II:\nColumn I:\n(p) Cultured human cell\n(q) Yeast (Saccharomyces cerevisiae)\n(r) E. coli bacterium\nColumn II:\n(i) ~20 minutes\n(ii) ~24 hours\n(iii) ~90 minutes\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(i)",
            "B": "p-(i), q-(ii), r-(iii)",
            "C": "p-(iii), q-(ii), r-(i)",
            "D": "p-(ii), q-(i), r-(iii)"
        },
        "ans": "A",
        "exp": "Human cells divide ~24 hours (ii); Yeast divides ~90 minutes (iii); E. coli divides ~20 minutes (i).",
        "topic": "interphase",
        "sub": "Cell Cycle Duration",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 474,
        "q": "Match the cytogenetic terms in Column I with their descriptions in Column II:\nColumn I:\n(p) Chiasma\n(q) Kinetochore\n(r) Centromere\n(s) Synaptonemal complex\nColumn II:\n(i) Protein complex holding paired homologues in synapsis\n(ii) Primary constriction on a chromosome\n(iii) X-shaped cytological manifestation of crossing over\n(iv) Proteinaceous multilayered disc mediating spindle attachment\nSelect the correct option:",
        "opts": {
            "A": "p-(iii), q-(iv), r-(ii), s-(i)",
            "B": "p-(iv), q-(iii), r-(ii), s-(i)",
            "C": "p-(iii), q-(ii), r-(iv), s-(i)",
            "D": "p-(i), q-(iv), r-(ii), s-(iii)"
        },
        "ans": "A",
        "exp": "Chiasma: X-shaped crossover site (iii); Kinetochore: multilayered disc (iv); Centromere: primary constriction (ii); Synaptonemal complex: zipper holding homologues (i).",
        "topic": "meiosis",
        "sub": "Cytogenetic Terms",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 475,
        "q": "Match Column I with Column II regarding chromosome configurations:\nColumn I:\n(p) Bivalent\n(q) Tetrad\n(r) Dyad of chromosomes\n(s) Monad\nColumn II:\n(i) Two sister chromatids joined at a single centromere\n(ii) A pair of synapsed homologous chromosomes\n(iii) Four chromatids of a bivalent visible at pachytene\n(iv) Single separated chromatid acting as an individual chromosome\nSelect the correct option:",
        "opts": {
            "A": "p-(ii), q-(iii), r-(i), s-(iv)",
            "B": "p-(iii), q-(ii), r-(i), s-(iv)",
            "C": "p-(ii), q-(i), r-(iii), s-(iv)",
            "D": "p-(iv), q-(iii), r-(i), s-(ii)"
        },
        "ans": "A",
        "exp": "Bivalent: pair of synapsed homologues (ii); Tetrad: four chromatids in a bivalent (iii); Dyad: two chromatids joined at centromere (i); Monad: single chromatid (iv).",
        "topic": "meiosis",
        "sub": "Chromosome Configurations",
        "diff": "Hard",
        "qtype": "Match the Following"
    },
    {
        "q_num": 476,
        "q": "Consider the following statements regarding the G1 phase of the cell cycle:\n(i) It corresponds to the interval between mitosis and initiation of DNA replication.\n(ii) The cell is metabolically active and continuously grows.\n(iii) DNA replication occurs actively during this phase.\n(iv) Cell synthesizes proteins and RNAs needed for growth.\n(v) Centriole duplicates during G1 phase in the cytoplasm.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), and (iv) only",
            "B": "(i), (ii), (iii), and (iv)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), and (iv) are correct. Statement (iii) is false because DNA replication occurs in S phase. Statement (v) is false because centriole duplication occurs in S phase.",
        "topic": "interphase",
        "sub": "G1 Phase",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 477,
        "q": "Read the following statements regarding the S phase of interphase:\n(i) DNA replication occurs in the nucleus.\n(ii) Amount of DNA per cell doubles from 2C to 4C.\n(iii) Number of chromosomes increases from 2n to 4n.\n(iv) In animal cells, centriole duplicates in the cytoplasm.\n(v) Histone proteins are synthesized in this phase.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iv), and (v) only",
            "B": "(i), (ii), (iii), and (iv)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iv), and (v) are correct. Statement (iii) is false because chromosome number remains unchanged at 2n.",
        "topic": "interphase",
        "sub": "S Phase",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 478,
        "q": "Consider the following statements regarding prophase of mitosis:\n(i) Chromatin material undergoes condensation to form compact mitotic chromosomes.\n(ii) Centrosomes that duplicated during S phase begin to move towards opposite poles.\n(iii) Nuclear envelope, nucleolus, Golgi complex, and ER disappear by the end of prophase.\n(iv) Kinetochore microtubules pull sister chromatids to opposite poles.\n(v) Asters along with spindle fibers form the mitotic apparatus.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because chromatid separation occurs in anaphase, not prophase.",
        "topic": "mitosis",
        "sub": "Prophase",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 479,
        "q": "Read the following statements regarding metaphase of mitosis:\n(i) Complete disintegration of the nuclear envelope marks the start of metaphase.\n(ii) Chromosomes spread through the cytoplasm and are shortest and thickest.\n(iii) Chromosomes align at the equatorial plane called the metaphase plate.\n(iv) Spindle fibers attach to kinetochores of chromosomes.\n(v) Centromeres split and sister chromatids separate.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because centromere splitting occurs in anaphase.",
        "topic": "mitosis",
        "sub": "Metaphase",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 480,
        "q": "Which of the following statements about anaphase of mitosis are correct?\n(i) Centromere of each chromosome splits simultaneously.\n(ii) Sister chromatids separate and become daughter chromosomes of the future daughter nuclei.\n(iii) Centromere leads the poleward movement with arms trailing behind.\n(iv) Chromosomes decondense and lose their individuality.\n(v) Spindle fibers shorten due to depolymerization of tubulin at kinetochores.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iv) only",
            "D": "(ii) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because decondensation occurs in telophase.",
        "topic": "mitosis",
        "sub": "Anaphase",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 481,
        "q": "Consider the following statements regarding telophase of mitosis:\n(i) Chromosomes cluster at opposite spindle poles and decondense into chromatin.\n(ii) Nuclear envelope develops around each chromosome cluster.\n(iii) Nucleolus, Golgi complex, and ER reform.\n(iv) Individual chromosomes can be easily identified under a light microscope.\n(v) It is essentially the reverse of prophase.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (iv) only",
            "D": "(iii) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is false because chromosome identity is lost due to decondensation.",
        "topic": "mitosis",
        "sub": "Telophase",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 482,
        "q": "Read the following statements regarding cytokinesis in plants and animals:\n(i) Animal cytokinesis occurs by furrowing of the plasma membrane.\n(ii) Plant cytokinesis occurs by cell plate formation growing centrifugally.\n(iii) Plant cell plate represents the future middle lamella.\n(iv) Animal cleavage furrow grows centripetally driven by an actomyosin contractile ring.\n(v) Both plant and animal cytokinesis proceed centripetally from periphery to center.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because plant cytokinesis is centrifugal, not centripetal.",
        "topic": "mitosis",
        "sub": "Cytokinesis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 483,
        "q": "Consider the following statements regarding meiotic prophase I:\n(i) Leptotene is marked by progressive chromosome compaction.\n(ii) Zygotene is characterized by synapsis and synaptonemal complex assembly.\n(iii) Pachytene is marked by crossing over between non-sister chromatids of homologous chromosomes.\n(iv) Diplotene is recognized by dissolution of synaptonemal complex and appearance of chiasmata.\n(v) Diakinesis is marked by terminalisation of chiasmata and spindle assembly.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (v) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct NCERT descriptions of the five substages of Prophase I.",
        "topic": "meiosis",
        "sub": "Prophase I Substages",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 484,
        "q": "Which of the following statements about crossing over are correct?\n(i) It occurs during pachytene stage of meiosis I.\n(ii) It is an enzyme-mediated process involving recombinase.\n(iii) It occurs between sister chromatids of the same chromosome.\n(iv) It leads to recombination of genetic material.\n(v) Recombination is completed by the end of pachytene.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iv), and (v) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (iv) only",
            "D": "(ii) and (v) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iv), and (v) are correct. Statement (iii) is false because crossing over occurs between non-sister chromatids of homologous chromosomes.",
        "topic": "meiosis",
        "sub": "Crossing Over",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 485,
        "q": "Read the following statements regarding Anaphase I of meiosis:\n(i) Homologous chromosomes separate and move towards opposite poles.\n(ii) Sister chromatids remain associated at their centromeres.\n(iii) Centromeres of chromosomes divide longitudinally.\n(iv) Chromosome number in daughter cells is reduced to half.\n(v) It results in independent assortment of paternal and maternal chromosomes.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iv), and (v) only",
            "B": "(i), (ii), (iii), and (iv)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iv), and (v) are correct. Statement (iii) is false because centromere division does NOT occur in Anaphase I.",
        "topic": "meiosis",
        "sub": "Anaphase I",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 486,
        "q": "Consider the following statements regarding Meiosis II:\n(i) It is initiated immediately after cytokinesis before chromosomes fully elongate.\n(ii) It resembles normal mitosis.\n(iii) In Metaphase II, chromosomes align at the equator on a single plane.\n(iv) In Anaphase II, centromeres split and sister chromatids separate.\n(v) It produces four diploid daughter cells.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because Meiosis II produces four haploid cells.",
        "topic": "meiosis",
        "sub": "Meiosis II",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 487,
        "q": "Which of the following statements about the G0 (quiescent) stage are correct?\n(i) Cells in G0 do not proliferate unless stimulated by appropriate signals.\n(ii) Cells in G0 remain metabolically active.\n(iii) Cells exit G1 phase to enter the G0 state.\n(iv) Neurons and striated muscle cells in adult humans reside in G0.\n(v) G0 cells have completely lost their genetic material.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because G0 cells retain intact genetic material and metabolic function.",
        "topic": "interphase",
        "sub": "G0 Stage",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 488,
        "q": "Consider the following statements regarding the significance of meiosis:\n(i) It conserves the specific chromosome number of each sexually reproducing species across generations.\n(ii) It increases genetic variability in populations.\n(iii) Variations generated by meiosis are important for evolution.\n(iv) It produces gametes with half the chromosome number of parent cells.\n(v) It always produces four genetically identical daughter cells.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT points. Statement (v) is false because meiotic daughter cells are genetically non-identical.",
        "topic": "meiosis",
        "sub": "Significance of Meiosis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 489,
        "q": "Read the following statements regarding the significance of mitosis:\n(i) It produces diploid daughter cells with identical genetic complement.\n(ii) It accounts for growth of multicellular organisms.\n(iii) It is essential for cell repair (e.g., epidermis, gut lining, blood cells).\n(iv) Meristematic mitotic divisions sustain continuous plant growth.\n(v) It introduces new combinations of alleles through crossing over.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct NCERT points on mitosis. Statement (v) is false because crossing over is unique to meiosis.",
        "topic": "mitosis",
        "sub": "Significance of Mitosis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 490,
        "q": "Consider the following statements regarding chromosome numbers and DNA content during human cell division:\n(i) A human cell in G1 phase has 46 chromosomes and 2C DNA.\n(ii) In G2 phase, it has 46 chromosomes and 4C DNA.\n(iii) At metaphase of mitosis, it has 46 chromosomes and 4C DNA.\n(iv) At anaphase of mitosis, it temporarily has 92 chromosomes and 4C DNA.\n(v) Each gamete produced after meiosis has 23 chromosomes and 1C DNA.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (v) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements are correct cytogenetic facts regarding chromosome numbers and DNA amounts in human cells.",
        "topic": "interphase",
        "sub": "Cell Division Numericals",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 491,
        "q": "Which of the following statements about synaptonemal complex (SC) are correct?\n(i) It is a tripartite proteinaceous structure assembled during zygotene.\n(ii) It mediates synapsis between homologous chromosomes.\n(iii) It facilitates crossing over and formation of recombination nodules.\n(iv) It dissolves during diplotene, leaving chiasmata intact.\n(v) It is found during mitotic prophase as well.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because SC is strictly meiotic and never forms during mitosis.",
        "topic": "meiosis",
        "sub": "Synaptonemal Complex",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 492,
        "q": "Consider the following statements regarding colchicine and mitotic arrest:\n(i) Colchicine is an alkaloid obtained from Colchicum autumnale.\n(ii) It prevents spindle microtubule assembly by binding to tubulin dimers.\n(iii) It arrests dividing cells at metaphase.\n(iv) Chromosomes duplicate in its presence without dividing, resulting in polyploidy.\n(v) It enhances cytokinesis by accelerating contractile ring formation.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because colchicine arrests cells prior to anaphase and cytokinesis.",
        "topic": "mitosis",
        "sub": "Mitotic Inhibitors",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 493,
        "q": "Read the following statements regarding interkinesis:\n(i) It is the stage between Meiosis I and Meiosis II.\n(ii) It is generally short-lived.\n(iii) DNA replication takes place during this stage.\n(iv) RNA and protein synthesis can occur during interkinesis.\n(v) Centrioles duplicate during interkinesis in animal cells.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iv), and (v) only",
            "B": "(i), (ii), (iii), and (iv)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iv), and (v) are correct. Statement (iii) is false because DNA does NOT replicate during interkinesis.",
        "topic": "meiosis",
        "sub": "Interkinesis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 494,
        "q": "Consider the following statements regarding cell cycle regulation and checkpoints:\n(i) Cyclin B complexed with CDK1 forms the Maturation Promoting Factor (MPF).\n(ii) MPF triggers entry into M phase by phosphorylating lamin and condensin proteins.\n(iii) The spindle checkpoint monitors tension and attachment at kinetochores.\n(iv) Degradation of securin by APC/C releases active separase.\n(v) Active separase cleaves cohesin complexes holding sister chromatids together.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (v) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are correct advanced facts of cell cycle regulation and mitotic progression.",
        "topic": "mitosis",
        "sub": "Cell Cycle Checkpoints",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 495,
        "q": "Which of the following statements about cytokinesis in plants are correct?\n(i) It starts from the center and progresses centrifugally toward the periphery.\n(ii) It involves the formation of a phragmoplast by ER and Golgi vesicles.\n(iii) Golgi vesicles deposit pectin to construct the cell plate.\n(iv) The cell plate matures into the middle lamella between adjacent cells.\n(v) Plant cytokinesis occurs by furrowing of the cell membrane.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because membrane furrowing is characteristic of animal cells, not plants.",
        "topic": "mitosis",
        "sub": "Plant Cytokinesis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 496,
        "q": "Read the following statements regarding the behavior of chromosomes in meiosis:\n(i) In Metaphase I, bivalents arrange on two parallel equatorial plates.\n(ii) In Metaphase II, univalents arrange on a single equatorial plate.\n(iii) In Anaphase I, homologous chromosomes separate with centromeres intact.\n(iv) In Anaphase II, centromeres split and sister chromatids separate.\n(v) In Telophase I, four haploid nuclei are formed simultaneously.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (iii), and (v) only",
            "D": "(ii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because Telophase I forms two nuclei (dyad), not four.",
        "topic": "meiosis",
        "sub": "Meiosis Stages Comparison",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 497,
        "q": "Consider the following statements regarding meiotic calculations in plants:\n(i) 100 pollen grains are formed from 25 meiotic divisions of microspore mother cells.\n(ii) 100 functional megaspores require 100 meiotic divisions of megaspore mother cells.\n(iii) To form 100 viable seeds, a total of 125 meiotic divisions are required.\n(iv) Each meiotic division of a PMC yields four functional pollen grains.\n(v) In flowering plants, all four megaspores formed from meiosis usually survive and function.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because typically three out of four megaspores degenerate, leaving only one functional megaspore (monosporic development).",
        "topic": "meiosis",
        "sub": "Meiotic Division Numericals",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 498,
        "q": "Which of the following statements about diplotene and diakinesis are correct?\n(i) Diplotene begins with dissolution of the synaptonemal complex.\n(ii) X-shaped chiasmata appear in diplotene.\n(iii) Diplotene can remain arrested for years in oocytes of vertebrates (dictyotene).\n(iv) Diakinesis is marked by terminalisation of chiasmata.\n(v) Nucleolus and nuclear envelope reappear during diakinesis.\nChoose the correct option:",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(i), (ii), and (v) only",
            "D": "(iii) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct. Statement (v) is false because nucleolus and nuclear envelope disappear during diakinesis.",
        "topic": "meiosis",
        "sub": "Diplotene & Diakinesis",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 499,
        "q": "Consider the following statements regarding syncytium formation:\n(i) It results when karyokinesis is not followed by cytokinesis.\n(ii) Liquid endosperm in coconut is a well-known example of syncytium.\n(iii) Skeletal muscle fibers in animals are syncytial in nature.\n(iv) Tapetum cells in anthers can become multinucleate due to endomitosis or free nuclear division.\n(v) Syncytium condition always leads to immediate cell lysis.\nWhich of the statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), and (iv) only",
            "B": "(i), (ii), (iii), (iv), and (v)",
            "C": "(ii), (iii), and (v) only",
            "D": "(i) and (iv) only"
        },
        "ans": "A",
        "exp": "Statements (i), (ii), (iii), and (iv) are correct biological examples of multinucleate cells. Statement (v) is false because syncytia are stable functional tissue states.",
        "topic": "mitosis",
        "sub": "Syncytium",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    },
    {
        "q_num": 500,
        "q": "Read the following statements regarding the overview of cell cycle and division:\n(i) Cell division is a progressive process and clear-cut lines cannot be drawn between various stages.\n(ii) Interphase lasts for more than 95% of the total cell cycle duration.\n(iii) Mitosis maintains genetic constancy, whereas meiosis introduces genetic variation.\n(iv) Centrosome duplication occurs in the cytoplasm during S phase.\n(v) Crossing over during pachytene involves exchange between non-sister chromatids of homologous chromosomes.\nWhich of the above statements are correct?",
        "opts": {
            "A": "(i), (ii), (iii), (iv), and (v)",
            "B": "(i), (ii), (iii), and (iv) only",
            "C": "(ii), (iii), and (iv) only",
            "D": "(i), (iv), and (v) only"
        },
        "ans": "A",
        "exp": "All five statements (i) through (v) are verbatim correct statements from NCERT summarizing the principles of cell cycle and cell division.",
        "topic": "interphase",
        "sub": "Cell Cycle Summary",
        "diff": "Hard",
        "qtype": "Multi-statement MCQ"
    }
]
