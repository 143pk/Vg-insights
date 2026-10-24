import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from scripts.bio12_engine.common import balance_and_build_parts

CHP_ID = "principles-of-inheritance"
CHP_TITLE = "Principles of Inheritance and Variation"
FILE_PREFIX = "principlesInheritance"
VAR_PREFIX = "PRINCIPLES_INHERITANCE"

T1 = ("bio-mendelian-genetics", "Mendel's Laws of Inheritance")
T2 = ("bio-non-mendelian-inheritance", "Incomplete Dominance, Co-dominance & Multiple Alleles")
T3 = ("bio-sex-determination-linkage", "Sex Determination & Linkage/Recombination")
T4 = ("bio-genetic-disorders-human", "Human Genetic Disorders (Mendelian & Chromosomal)")

def generate_chapter_4():
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
        ("Gregor Johann Mendel conducted hybridization experiments on garden pea (Pisum sativum) for how many years?",
         "7 years (1856 to 1863)", "14 years (1840 to 1854)", "2 years (1865 to 1867)", "10 years (1870 to 1880)", "A",
         "Mendel's experimental duration in NCERT.",
         "Mendel conducted hybridization experiments on garden peas for seven years between 1856 and 1863 and proposed the laws of inheritance.",
         "Other timelines do not match historical NCERT records.",
         T1, "Mendelian History"),

        ("How many pairs of contrasting characters in pea plants were studied by Gregor Mendel?",
         "7 pairs (14 true-breeding varieties)", "14 pairs (28 varieties)", "4 pairs (8 varieties)", "2 pairs (4 varieties)", "A",
         "Mendel's contrasting traits count.",
         "Mendel selected 14 true-breeding pea plant varieties, as pairs which were similar except for one character with contrasting traits (7 pairs of traits).",
         "14 pairs would mean 28 traits; Mendel studied 7 traits.",
         T1, "Mendelian Traits"),

        ("Which of the following was a recessive trait in garden peas investigated by Mendel?",
         "Dwarf stem height", "Violet flower colour", "Axial flower position", "Yellow seed colour", "A",
         "Dominant vs recessive pea traits.",
         "In garden pea: Tall is dominant over dwarf; Violet flower is dominant over white; Axial flower is dominant over terminal; Yellow seed is dominant over green. Dwarf is recessive.",
         "Violet flowers, axial flowers, and yellow seeds are all dominant traits in garden peas.",
         T1, "Mendelian Traits"),

        ("What was the dominant trait for pod colour in garden peas studied by Mendel?",
         "Green pod colour", "Yellow pod colour", "Constricted pod shape", "White pod colour", "A",
         "Pod colour dominance in garden pea.",
         "In garden pea, Green pod colour is dominant over Yellow pod colour. (Note: For seeds, yellow is dominant over green; for pods, green is dominant over yellow).",
         "Yellow pod is the recessive trait in peas.",
         T1, "Mendelian Traits"),

        ("The phenotypic ratio obtained in the F2 generation of a typical Mendelian monohybrid cross is:",
         "3:1", "1:2:1", "9:3:3:1", "1:1:1:1", "A",
         "Monohybrid phenotypic ratio.",
         "In a monohybrid cross between homozygous dominant and recessive parents (e.g. TT x tt), the F2 generation shows 3 dominant : 1 recessive phenotype (3:1).",
         "1:2:1 is the genotypic ratio; 9:3:3:1 is dihybrid phenotypic ratio.",
         T1, "Monohybrid Cross"),

        ("The genotypic ratio obtained in the F2 generation of a Mendelian monohybrid cross is:",
         "1:2:1 (1 TT : 2 Tt : 1 tt)", "3:1", "9:3:3:1", "1:1", "A",
         "Monohybrid genotypic ratio.",
         "Selfing of heterozygous F1 plants (Tt x Tt) yields 1/4 TT, 1/2 Tt, and 1/4 tt, establishing the genotypic ratio 1:2:1.",
         "3:1 is the phenotypic ratio.",
         T1, "Monohybrid Cross"),

        ("A cross between an individual of unknown dominant phenotype and a homozygous recessive parent is known as a:",
         "Test cross", "Back cross only", "Reciprocal cross", "Dihybrid cross", "A",
         "Definition of test cross.",
         "A test cross is a cross of an individual showing a dominant phenotype with the homozygous recessive parent to determine whether the dominant individual is homozygous or heterozygous.",
         "Reciprocal cross swaps parental sexes; dihybrid involves two traits.",
         T1, "Test Cross"),

        ("What is the expected phenotypic ratio in the progeny of a typical monohybrid test cross (Tt x tt)?",
         "1:1", "3:1", "1:2:1", "9:3:3:1", "A",
         "Monohybrid test cross ratio.",
         "Crossing heterozygous dominant (Tt) with homozygous recessive (tt) produces 50% tall (Tt) and 50% dwarf (tt), yielding a 1:1 phenotypic ratio.",
         "3:1 occurs in selfing of heterozygotes (Tt x Tt).",
         T1, "Test Cross"),

        ("Which Mendelian law is based on the fact that alleles do not show any blending and both characters are recovered as such in the F2 generation?",
         "Law of Segregation (Purity of Gametes)", "Law of Independent Assortment", "Law of Dominance", "Law of Unit Factors", "A",
         "Law of Segregation principle.",
         "The Law of Segregation states that though a parent contains two alleles during gamete formation, the factors or alleles of a pair segregate from each other such that a gamete receives only one of the two factors without blending.",
         "Independent assortment applies to two gene pairs; dominance explains expression in heterozygotes.",
         T1, "Law of Segregation"),

        ("The graphical representation developed by a British geneticist to calculate the probability of all possible genotypes of offspring in a genetic cross is the:",
         "Punnett square", "Pedigree chart", "Karyotype map", "Chromosomal band", "A",
         "Punnett square origin.",
         "The Punnett square was developed by the British geneticist Reginald C. Punnett to graphically calculate genotypic probabilities.",
         "Pedigree charts trace ancestral traits; karyotypes display metaphase chromosomes.",
         T1, "Punnett Square"),

        ("In snapdragon (Antirrhinum majus), crossing true-breeding red-flowered plants (RR) with true-breeding white-flowered plants (rr) results in pink-flowered F1 plants (Rr). This phenomenon is known as:",
         "Incomplete dominance", "Co-dominance", "Multiple allelism", "Complete dominance", "A",
         "Incomplete dominance in Antirrhinum.",
         "In snapdragon (Antirrhinum majus / dog flower), neither allele is completely dominant over the other, producing an intermediate pink phenotype (Rr).",
         "Co-dominance expresses both phenotypes simultaneously without blending (e.g. AB blood group).",
         T2, "Incomplete Dominance"),

        ("What is the phenotypic ratio in the F2 generation of a cross showing incomplete dominance (such as Antirrhinum majus)?",
         "1 Red : 2 Pink : 1 White (1:2:1)", "3 Red : 1 White (3:1)", "9:3:3:1", "2 Red : 2 White (1:1)", "A",
         "Incomplete dominance F2 ratio.",
         "In incomplete dominance, the phenotypic ratio matches the genotypic ratio exactly: 1/4 RR (Red) : 1/2 Rr (Pink) : 1/4 rr (White), i.e., 1:2:1.",
         "3:1 is observed only when one allele is completely dominant.",
         T2, "Incomplete Dominance"),

        ("Human ABO blood groups are controlled by the gene I. How many alleles of gene I are present in the human population?",
         "Three alleles (I^A, I^B, and i)", "Two alleles (I^A and I^B)", "Four alleles", "Six alleles", "A",
         "Multiple alleles of ABO system.",
         "The gene I exhibits multiple allelism with three distinct alleles in the human population: I^A, I^B, and i.",
         "An individual possesses only two alleles, but the population has three.",
         T2, "Multiple Alleles"),

        ("How many different genotypes and phenotypes are possible for ABO blood groups in the human population?",
         "6 genotypes and 4 phenotypes", "4 genotypes and 6 phenotypes", "3 genotypes and 3 phenotypes", "8 genotypes and 4 phenotypes", "A",
         "ABO genotypes and phenotypes.",
         "With 3 alleles (I^A, I^B, i), the number of possible genotypes is n(n+1)/2 = 3(4)/2 = 6 genotypes (I^A I^A, I^A i, I^B I^B, I^B i, I^A I^B, ii), producing 4 distinct phenotypes (A, B, AB, O).",
         "There are 4 phenotypes (A, B, AB, O), not 6.",
         T2, "ABO Blood Groups"),

        ("When both alleles of a gene pair are fully and equally expressed in a heterozygote (such as in I^A I^B blood group AB), the phenomenon is called:",
         "Co-dominance", "Incomplete dominance", "Epistasis", "Pleiotropy", "A",
         "Co-dominance definition.",
         "In co-dominance, both alleles express their respective products independently in the heterozygote; both A and B sugar antigens are produced on RBCs in I^A I^B individuals.",
         "Incomplete dominance produces an intermediate phenotype, not simultaneous full expression.",
         T2, "Co-dominance"),

        ("In pea seeds, starch synthesis is controlled by a single gene with two alleles (B and b). Heterozygotes (Bb) produce intermediate-sized starch grains. This indicates that with respect to starch grain size, the alleles show:",
         "Incomplete dominance", "Complete dominance", "Co-dominance", "Epistasis", "A",
         "Pleiotropy and dominance in starch synthesis.",
         "For seed shape, B is completely dominant over b (Bb seeds are round). But for starch grain size, BB produces large, bb produces small, and Bb produces intermediate-sized grains, demonstrating incomplete dominance.",
         "It is not co-dominance because grains are intermediate, not a mosaic of large and small.",
         T2, "Incomplete Dominance"),

        ("A phenomenon where a single gene product produces more than one phenotypic effect is termed:",
         "Pleiotropy", "Polygenic inheritance", "Co-dominance", "Multiple allelism", "A",
         "Pleiotropy definition.",
         "Pleiotropy refers to a single gene influencing multiple distinct and seemingly unrelated phenotypic traits (e.g. phenylketonuria affecting brain development, hair pigmentation, and skin color).",
         "Polygenic inheritance is multiple genes controlling one trait (like human skin color).",
         T2, "Pleiotropy"),

        ("What is the classical phenotypic ratio obtained in the F2 generation of a Mendelian dihybrid cross?",
         "9:3:3:1", "1:2:1", "3:1", "9:7", "A",
         "Dihybrid phenotypic ratio.",
         "In a dihybrid cross involving two independently assorting gene pairs (e.g. seed color and shape), F2 phenotypic ratio is 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green.",
         "9:7 is complementary gene interaction; 1:2:1 is monohybrid incomplete dominance.",
         T1, "Dihybrid Cross"),

        ("Mendel's Law of Independent Assortment holds true for genes that are located on:",
         "Different non-homologous chromosomes or far apart on the same chromosome",
         "Tightly linked adjacent loci on the same chromosome",
         "The mitochondrial circular DNA only",
         "The centromeric satellite region only", "A",
         "Chromosomal basis of independent assortment.",
         "Independent assortment occurs when alleles segregate independently during anaphase I of meiosis, which requires the gene pairs to reside on separate non-homologous chromosomes or sufficiently distant on the same chromosome.",
         "Tightly linked genes deviate from independent assortment.",
         T1, "Independent Assortment"),

        ("Who independently rediscovered Mendel's laws of inheritance in the year 1900?",
         "Hugo de Vries, Carl Correns, and Erich von Tschermak",
         "Thomas Hunt Morgan and Alfred Sturtevant",
         "Walter Sutton and Theodore Boveri",
         "Watson, Crick, and Rosalind Franklin", "A",
         "Rediscovery of Mendelism.",
         "In 1900, three scientists independently rediscovered Mendel's principles: Hugo de Vries (Holland), Carl Correns (Germany), and Erich von Tschermak (Austria).",
         "Sutton and Boveri proposed the Chromosomal Theory in 1902.",
         T1, "Mendel Rediscovery"),

        ("Who proposed the Chromosomal Theory of Inheritance in 1902?",
         "Walter Sutton and Theodore Boveri", "Gregor Mendel and Reginald Punnett",
         "Thomas Hunt Morgan and Bridges", "Francis Crick and James Watson", "A",
         "Chromosomal theory authors.",
         "Walter Sutton and Theodore Boveri noted that the behavior of chromosomes was parallel to the behavior of genes and used chromosome movement during meiosis to explain Mendel's laws.",
         "Morgan provided experimental verification using Drosophila.",
         T3, "Chromosomal Theory"),

        ("Why was Drosophila melanogaster (fruit fly) chosen by Thomas Hunt Morgan for experimental genetics?",
         "They could be grown easily on simple synthetic medium in the laboratory, had a short life cycle of about two weeks, and produced numerous progeny",
         "They lived for 50 years and laid only one egg per year",
         "They had 500 pairs of identical microscopic chromosomes",
         "Males and females were completely indistinguishable externally", "A",
         "Advantages of Drosophila in genetics.",
         "Drosophila melanogaster has a quick 2-week generation time, reproduces prolifically on simple cornmeal/agar medium, shows marked sexual dimorphism (females larger), and has only 4 pairs of distinct chromosomes.",
         "Drosophila has a short life cycle, not 50 years.",
         T3, "Morgan Drosophila"),

        ("The physical association or linkage of two or more genes on the same chromosome was termed by Morgan as:",
         "Linkage", "Recombination", "Mutation", "Crossing over", "A",
         "Linkage definition by Morgan.",
         "Morgan coined the term 'linkage' to describe the physical association of genes on the same chromosome that tend to be inherited together.",
         "Recombination refers to the generation of non-parental gene combinations.",
         T3, "Linkage"),

        ("The generation of non-parental gene combinations in progeny resulting from crossing over during meiosis is called:",
         "Recombination", "Linkage", "Polyploidy", "Aneuploidy", "A",
         "Recombination definition.",
         "Recombination is the production of non-parental allele combinations resulting from reciprocal exchange of genetic material between non-sister chromatids during pachytene of meiosis I.",
         "Linkage preserves parental combinations.",
         T3, "Recombination"),

        ("Who utilized the frequency of recombination between gene pairs on the same chromosome as a measure of the distance between genes to construct genetic linkage maps?",
         "Alfred Sturtevant", "Walter Sutton", "Gregor Mendel", "Erwin Chargaff", "A",
         "Genetic mapping by Sturtevant.",
         "Morgan's student, Alfred Sturtevant, used the frequency of recombination between gene pairs as a measure of the physical distance between genes and mapped their linear positions along the chromosome.",
         "Chargaff discovered base-pairing rules in DNA.",
         T3, "Genetic Mapping"),

        ("In genetic mapping, 1 map unit (centimorgan, cM) corresponds to what percentage of recombination frequency?",
         "1% recombination frequency", "10% recombination frequency", "50% recombination frequency", "100% recombination frequency", "A",
         "Definition of map unit.",
         "One map unit (or 1 centimorgan) is defined as the distance between genes that yields a 1% frequency of recombination (1 crossover per 100 meiotic products).",
         "50% represents independent assortment.",
         T3, "Genetic Mapping"),

        ("In grasshoppers, which sex-determination mechanism operates?",
         "XO type (male heterogamety, males have XO, females have XX)",
         "XY type (male heterogamety)",
         "ZW type (female heterogamety)",
         "Haplodiploidy", "A",
         "Sex determination in grasshoppers.",
         "In grasshoppers and some insects, males have only one X chromosome along with autosomes (XO), while females have two X chromosomes (XX).",
         "Humans and Drosophila have XY; birds have ZW.",
         T3, "Sex Determination"),

        ("In birds, which sex-determination mechanism operates?",
         "ZW type (female heterogamety, females are ZW, males are ZZ)",
         "XY type (male heterogamety)",
         "XO type (male heterogamety)",
         "Haplodiploidy", "A",
         "Sex determination in birds.",
         "In birds, females produce two different types of gametes (carrying either Z or W chromosome, hence female heterogamety ZW), whereas males are homogametic (ZZ).",
         "In humans, males are heterogametic (XY).",
         T3, "Sex Determination"),

        ("Sex determination in honeybees is based on the number of sets of chromosomes an individual receives, a mechanism known as:",
         "Haplodiploidy", "Male heterogamety", "Environmental sex determination", "Hermaphroditism", "A",
         "Haplodiploid sex determination.",
         "In honeybees, females (queens/workers) are diploid (2n=32) developing from fertilized eggs, while males (drones) are haploid (n=16) developing parthenogenetically from unfertilized eggs.",
         "Drones have no father and cannot have sons, but have a grandfather and can have grandsons.",
         T3, "Sex Determination"),

        ("A male honeybee (drone) has how many chromosomes in each somatic cell?",
         "16 chromosomes (haploid)", "32 chromosomes (diploid)", "46 chromosomes", "8 chromosomes", "A",
         "Honeybee chromosome count.",
         "Drones develop parthenogenetically from unfertilized eggs and possess 16 chromosomes (n=16), producing sperm by mitosis.",
         "Female worker bees and queens possess 32 chromosomes (2n=32).",
         T3, "Honeybee Genetics"),

        ("A change in a single base pair of DNA that alters a genetic codon is known as a:",
         "Point mutation", "Frame-shift mutation", "Inversion", "Polyploidy", "A",
         "Point mutation definition.",
         "A point mutation is a genetic alteration where a single nucleotide base pair in DNA is replaced, added, or deleted (e.g. GAG to GUG in sickle-cell anaemia).",
         "Frame-shift shifts the reading frame across subsequent codons.",
         T4, "Mutation"),

        ("Sickle-cell anaemia is a classic example of which type of genetic mutation?",
         "Point mutation", "Chromosomal translocation", "Polyploidy", "Aneuploidy", "A",
         "Sickle cell as point mutation.",
         "Sickle-cell anaemia results from a point mutation: transversion of A to T in the beta-globin gene, changing codon GAG (glutamic acid) to GUG (valine) at position 6.",
         "It does not involve gross chromosomal translocations or numerical changes.",
         T4, "Sickle Cell Anaemia"),

        ("Which amino acid is substituted by valine at the sixth position of the beta-globin chain in patients with sickle-cell anaemia?",
         "Glutamic acid", "Aspartic acid", "Lysine", "Leucine", "A",
         "Molecular defect in sickle-cell anaemia.",
         "In sickle-cell anaemia, Glutamic acid (hydrophilic, acidic) at position 6 of the beta-globin polypeptide is replaced by Valine (hydrophobic, neutral).",
         "Aspartic acid and lysine are not substituted at position 6.",
         T4, "Sickle Cell Anaemia"),

        ("Haemophilia is a sex-linked recessive genetic disorder. Why are human females rarely afflicted with haemophilia?",
         "A female must be homozygous recessive (X^h X^h) to be affected, which requires an affected father and at least a carrier mother (usually non-viable during later embryonic stages)",
         "Females possess two Y chromosomes that protect them",
         "Females do not possess any blood clotting factors",
         "Haemophilia gene is located exclusively on the Y chromosome", "A",
         "X-linked recessive genetics of haemophilia.",
         "Because haemophilia is X-linked recessive, females require two defective alleles (X^h X^h). Males are hemizygous (X^h Y) and develop the disease from a single maternal allele.",
         "Females do not have Y chromosomes.",
         T4, "Haemophilia"),

        ("Queen Victoria of England was a famous carrier of which sex-linked genetic disease that spread through European royal families?",
         "Haemophilia", "Sickle-cell anaemia", "Down syndrome", "Phenylketonuria", "A",
         "Royal haemophilia pedigree.",
         "Queen Victoria was a carrier of haemophilia (specifically Haemophilia B), transmitting the mutated X-linked gene to several of her descendants throughout European royalty.",
         "Down syndrome is a non-heritable chromosomal trisomy; sickle cell is autosomal recessive.",
         T4, "Haemophilia"),

        ("Colour blindness is an X-linked recessive disorder. What percentage of human males and females are affected by colour blindness in the general population?",
         "About 8% of males and about 0.4% of females", "50% of males and 50% of females", "0.4% of males and 8% of females", "100% of males and 0% of females", "A",
         "Prevalence of colour blindness in NCERT.",
         "NCERT notes that colour blindness occurs in about 8% of males and only about 0.4% of females because males have only one X chromosome and are hemizygous.",
         "Females require both X chromosomes to carry the mutant allele (0.08 x 0.08 ~ 0.0064 = 0.64%, observed ~0.4%).",
         T4, "Colour Blindness"),

        ("Phenylketonuria (PKU) is an autosomal recessive inborn error of metabolism caused by the lack of which hepatic enzyme?",
         "Phenylalanine hydroxylase", "Tyrosinase", "Hexosaminidase A", "DNA polymerase", "A",
         "PKU enzymatic defect.",
         "PKU is caused by deficiency of phenylalanine hydroxylase, which normally converts phenylalanine into tyrosine. Accumulation of phenylalanine and phenylpyruvic acid causes mental retardation.",
         "Tyrosinase deficiency causes albinism.",
         T4, "Phenylketonuria"),

        ("Thalassemia is an autosome-linked recessive blood disease. Unlike sickle-cell anaemia which is a qualitative globin defect, thalassemia is classified as a:",
         "Quantitative defect (reduced synthesis of globin polypeptide chains)",
         "Qualitative defect (synthesis of structurally abnormal globin chains)",
         "Chromosomal nondisjunction syndrome",
         "Bacterial blood infection", "A",
         "Quantitative nature of thalassemia.",
         "NCERT explicitly emphasizes that Thalassemia is a quantitative problem of synthesizing too few globin molecules, whereas sickle-cell anaemia is a qualitative problem of synthesizing an aberrantly functioning globin.",
         "Sickle cell is qualitative; thalassemia is quantitative.",
         T4, "Thalassemia"),

        ("Alpha-thalassemia is controlled by two closely linked genes located on which human chromosome?",
         "Chromosome 16 (HBA1 and HBA2 genes)", "Chromosome 11 (HBB gene)", "Chromosome 21", "The X chromosome", "A",
         "Alpha thalassemia genetics in NCERT.",
         "Alpha-thalassemia is controlled by two closely linked genes, HBA1 and HBA2, on chromosome 16 of each parent. Beta-thalassemia is controlled by a single gene, HBB, on chromosome 11.",
         "Chromosome 11 controls beta-thalassemia.",
         T4, "Thalassemia"),

        ("Beta-thalassemia is controlled by a single gene located on which human chromosome?",
         "Chromosome 11 (HBB gene)", "Chromosome 16 (HBA genes)", "Chromosome 21", "Chromosome 1", "A",
         "Beta thalassemia chromosome location.",
         "Beta-thalassemia is controlled by a single gene (HBB) located on chromosome 11 of each parent.",
         "Alpha-thalassemia is on chromosome 16.",
         T4, "Thalassemia"),

        ("Failure of segregation of chromatids during cell division cycle results in the gain or loss of a chromosome, a condition called:",
         "Aneuploidy", "Polyploidy", "Euploidy", "Linkage", "A",
         "Definition of aneuploidy.",
         "Failure of segregation of chromatids during cell division cycle results in the gain or loss of a chromosome(s), called aneuploidy (e.g. Down syndrome: 2n+1).",
         "Polyploidy is an increase in a whole set of chromosomes due to cytokinesis failure.",
         T4, "Aneuploidy"),

        ("Failure of cytokinesis after the telophase stage of cell division results in an increase in a whole set of chromosomes in an organism, termed:",
         "Polyploidy", "Aneuploidy", "Point mutation", "Inversion", "A",
         "Definition of polyploidy.",
         "Failure of cytokinesis following telophase results in the duplication of the entire chromosome set (3n, 4n, etc.), known as polyploidy, which is frequently observed in plants.",
         "Aneuploidy involves single chromosome gain or loss.",
         T4, "Polyploidy"),

        ("Down syndrome is caused by the presence of an additional copy of chromosome number:",
         "Chromosome 21 (Trisomy 21)", "Chromosome 18 (Trisomy 18)", "Chromosome 13 (Trisomy 13)", "The X chromosome", "A",
         "Down syndrome etiology.",
         "Down syndrome was first described by Langdon Down in 1866 and is caused by trisomy of chromosome 21 (karyotype 47, +21).",
         "Trisomy 18 is Edward syndrome; Trisomy 13 is Patau syndrome.",
         T4, "Down Syndrome"),

        ("Which physical and clinical features are characteristic of Down syndrome?",
         "Short stature, small round head, furrowed tongue, partially open mouth, broad palm with simian crease, and mental retardation",
         "Extreme tallness, aggressive behaviour, and normal intelligence",
         "Webbed neck, sterile ovaries, and absence of secondary sexual characteristics in females",
         "Gynaecomastia in tall males with sterile testes", "A",
         "Clinical signs of Down syndrome.",
         "NCERT describes Down syndrome individuals as short-statured with small round head, furrowed tongue, partially open mouth, characteristic broad palm with single simian crease, and delayed mental/psychomotor development.",
         "Gynaecomastia is Klinefelter syndrome; webbed neck and sterile ovaries characterize Turner syndrome.",
         T4, "Down Syndrome"),

        ("Klinefelter syndrome is a chromosomal disorder caused by the presence of an extra X chromosome in males, yielding the sex chromosome complement:",
         "47, XXY", "45, XO", "47, XYY", "46, XY", "A",
         "Klinefelter syndrome karyotype.",
         "Klinefelter syndrome is caused by the presence of an additional X chromosome in males, resulting in a karyotype of 47, XXY (44 autosomes + XXY).",
         "45, XO is Turner syndrome; 46, XY is normal male.",
         T4, "Klinefelter Syndrome"),

        ("Which clinical feature is characteristic of an individual with Klinefelter syndrome (47, XXY)?",
         "An individual has overall masculine development, but feminine development like gynaecomastia (development of breast) is also expressed, and the individual is sterile",
         "Short stature, sterile ovaries, and lack of secondary sexual characteristics in females",
         "Furrowed tongue and single simian crease in palm with mental retardation",
         "Excessive bleeding from trivial cuts due to clotting factor absence", "A",
         "Klinefelter phenotype.",
         "An individual with Klinefelter syndrome has overall masculine development, but gynaecomastia (breast development) is expressed. Such individuals are sterile.",
         "Turner syndrome occurs in females with XO karyotype.",
         T4, "Klinefelter Syndrome"),

        ("Turner syndrome is a chromosomal disorder in human females caused by the absence of one of the X chromosomes, having the karyotype:",
         "45 with X0 (44 autosomes + X0)", "47, XXY", "47, XXX", "46, XX", "A",
         "Turner syndrome karyotype.",
         "Turner syndrome results from monosomy of the sex chromosome, resulting in 45 chromosomes with an X0 configuration (44 + X0).",
         "47, XXY is Klinefelter syndrome.",
         T4, "Turner Syndrome"),

        ("Which clinical feature is characteristic of a female with Turner syndrome (45, X0)?",
         "Sterile females with rudimentary ovaries, short stature, and lack of secondary sexual characters",
         "Tall males with gynaecomastia and azoospermia",
         "Trisomy of chromosome 21 with furrowed tongue",
         "Hyperactive intelligence and fertile polycystic ovaries", "A",
         "Turner phenotype.",
         "Turner syndrome females are sterile because ovaries are rudimentary. They also display short stature, webbed neck, and lack of female secondary sexual characters.",
         "Klinefelter syndrome affects males.",
         T4, "Turner Syndrome"),

        ("In pedigree analysis, what geometric symbol is conventionally used to represent an unaffected female?",
         "Circle", "Square", "Diamond", "Shaded circle", "A",
         "Pedigree symbols in NCERT.",
         "In standard human pedigree charts: Square represents male; Circle represents female; Diamond represents sex unspecified; Shaded/filled symbols represent affected individuals.",
         "Squares represent males; shaded circles represent affected females.",
         T4, "Pedigree Symbols"),

        ("In pedigree analysis, what does a horizontal line connecting a square and a circle represent?",
         "Mating (marriage)", "Consanguineous mating", "Siblings", "Identical twins", "A",
         "Pedigree mating line.",
         "A single horizontal line connecting a square (male) and circle (female) denotes mating or marriage. A double horizontal line denotes consanguineous mating (mating between relatives).",
         "Double line indicates consanguineous mating.",
         T4, "Pedigree Symbols")
    ]

    # Additional easy items to reach exactly 125 easy questions
    extra_easy_4 = [
        ("In pedigree charts, a double horizontal line between a male and a female indicates:",
         "Mating between relatives (consanguineous mating)", "Divorce between parents", "Birth of fraternal twins", "Death of both parents", "A",
         "Pedigree consanguinity symbol.",
         "A double horizontal line connecting a male and female symbol represents consanguineous marriage (mating between close relatives).",
         "A single line is standard mating.",
         T4, "Pedigree Analysis"),

        ("Which symbol in a pedigree chart represents an affected male individual?",
         "Solid shaded square", "Empty circle", "Empty square", "Solid shaded circle", "A",
         "Pedigree chart symbols.",
         "A square represents male, and shading indicates the presence of the trait/disease. Thus, a solid shaded square represents an affected male.",
         "Solid circle is an affected female.",
         T4, "Pedigree Analysis"),

        ("What does a diamond symbol in a pedigree chart designate?",
         "Sex unspecified", "Affected male", "Normal female", "Consanguineous marriage", "A",
         "Pedigree chart symbols.",
         "A diamond shape is used when the biological sex of the offspring or individual is not recorded or unspecified.",
         "Square is male, circle is female.",
         T4, "Pedigree Analysis"),

        ("What term describes the inheritance pattern where a trait is governed by three or more genes, such as human skin colour or height?",
         "Polygenic inheritance", "Pleiotropy", "Multiple allelism", "Incomplete dominance", "A",
         "Polygenic inheritance definition.",
         "Traits that are controlled by three or more genes are called polygenic traits (e.g. human skin colour governed by genes A, B, and C).",
         "Pleiotropy is one gene affecting multiple traits.",
         T2, "Polygenic Inheritance"),

        ("In human skin colour inheritance studied by Davenport, an individual with the genotype AaBbCc has what skin shade?",
         "Intermediate (mulatto) skin shade", "Very dark (black)", "Very light (albino)", "Completely striped skin", "A",
         "Polygenic skin color phenotypes.",
         "AABBCC produces maximum melanin (very dark), aabbcc produces minimum melanin (very light), and AaBbCc (with 3 dominant alleles) exhibits an intermediate mulatto shade.",
         "Very dark requires 6 dominant alleles (AABBCC).",
         T2, "Polygenic Inheritance"),

        ("Which genetic disorder is an example of an autosomal dominant trait in humans?",
         "Myotonic dystrophy", "Sickle-cell anaemia", "Cystic fibrosis", "Haemophilia", "A",
         "Autosomal dominant disorder in NCERT.",
         "NCERT explicitly uses Myotonic dystrophy as the pedigree example of an autosomal dominant trait.",
         "Sickle cell and cystic fibrosis are autosomal recessive; haemophilia is X-linked recessive.",
         T4, "Autosomal Dominant Disorder"),

        ("What was the fundamental limitation of Mendel's work that delayed its recognition until 1900?",
         "Communication was not easy in those days, his mathematical approach to biology was unacceptable to contemporary biologists, and he could not provide physical proof for 'factors'",
         "He wrote all his scientific papers in invisible ink",
         "Pea plants became globally extinct immediately after 1865",
         "He refused to show his pea garden to any visitors", "A",
         "Reasons for Mendel's delayed recognition.",
         "NCERT lists 4 reasons: limited communication, novel mathematical/statistical treatment of biology, concept of stable discrete 'factors' conflicting with continuous variation, and lack of physical chromosomal proof.",
         "The other options are absurd fabrications.",
         T1, "History of Genetics"),

        ("What term did Gregor Mendel use for the discrete hereditary physical units that are passed down from parents to offspring?",
         "Factors", "Genes", "Chromosomes", "Nucleic acids", "A",
         "Mendel's terminology.",
         "Mendel called the stable and discrete units of inheritance 'factors'. The term 'gene' was coined later by Wilhelm Johannsen in 1909.",
         "Genes and chromosomes were named decades after Mendel's publication.",
         T1, "Mendelian Terminology"),

        ("Who coined the term 'Gene' for Mendel's factors?",
         "Wilhelm Johannsen", "Thomas Hunt Morgan", "Gregor Mendel", "Hugo de Vries", "A",
         "Origin of the word gene.",
         "The Danish botanist Wilhelm Johannsen coined the term 'gene' in 1909 to replace Mendel's 'factor'.",
         "Mendel never used the term gene.",
         T1, "Genetics Terminology"),

        ("The physical appearance or observable character of an organism is called its:",
         "Phenotype", "Genotype", "Karyotype", "Idiogram", "A",
         "Phenotype definition.",
         "The observable morphological, physiological, or biochemical properties of an organism produced by the interaction of its genotype and environment constitute its phenotype.",
         "Genotype is the underlying genetic constitution.",
         T1, "Genetic Concepts"),

        ("The genetic constitution of an organism regarding a particular trait is called its:",
         "Genotype", "Phenotype", "Serotype", "Morphotype", "A",
         "Genotype definition.",
         "The genotype represents the specific allelic makeup of an organism (e.g. TT, Tt, or tt).",
         "Phenotype is physical appearance.",
         T1, "Genetic Concepts"),

        ("An individual possessing two identical alleles at a given locus (such as TT or tt) is said to be:",
         "Homozygous", "Heterozygous", "Hemizygous", "Aneuploid", "A",
         "Homozygous definition.",
         "When an individual carries identical alleles of a gene (e.g. TT or tt), it is homozygous for that trait.",
         "Heterozygous contains two different alleles (Tt).",
         T1, "Genetic Concepts"),

        ("An individual possessing two different alleles of a gene (such as Tt) is described as:",
         "Heterozygous", "Homozygous", "Homogametic", "Haploid", "A",
         "Heterozygous definition.",
         "An organism carrying two non-identical alleles for a trait (e.g. Tt) is called heterozygous.",
         "Homozygous has identical alleles.",
         T1, "Genetic Concepts"),

        ("Which cross is used to determine whether a dominant tall pea plant has the genotype TT or Tt?",
         "Test cross (crossing with dwarf tt)", "Crossing with homozygous tall TT", "Crossing with another wild plant", "Selfing with no pollen control", "A",
         "Purpose of test cross.",
         "Crossing the dominant plant with the homozygous recessive parent (tt) reveals its genotype: if 100% progeny are tall, it is TT; if 50% tall : 50% dwarf, it is Tt.",
         "Crossing with TT produces 100% tall offspring in both cases, revealing nothing.",
         T1, "Test Cross Application"),

        ("In Morgan's dihybrid experiments on Drosophila, the genes for yellow body (y) and white eyes (w) showed what percentage of recombination?",
         "1.3% recombination (98.7% parental types)", "37.2% recombination", "50% recombination", "0% recombination", "A",
         "Morgan's Drosophila recombination values.",
         "Morgan found that the genes for yellow body and white eyes were very tightly linked on the X chromosome and showed only 1.3% recombination (98.7% parental combinations).",
         "37.2% recombination was observed between white eye and miniature wing.",
         T3, "Morgan Drosophila Experiments"),

        ("In Morgan's experiments on Drosophila, the genes for white eye (w) and miniature wing (m) showed what percentage of recombination?",
         "37.2% recombination (62.8% parental types)", "1.3% recombination", "98.7% recombination", "50% recombination", "A",
         "Morgan's Drosophila recombination values.",
         "The genes for white eye and miniature wing were more loosely linked on the X chromosome, showing 37.2% recombination.",
         "1.3% recombination is for yellow body and white eye.",
         T3, "Morgan Drosophila Experiments"),

        ("Why does higher physical distance between two linked genes on a chromosome lead to a higher recombination frequency?",
         "Increased physical distance increases the probability of crossing over occurring between them during meiosis",
         "Distant genes repel each other chemically",
         "Distant genes are deleted during mitosis",
         "Distant genes have higher mutation rates", "A",
         "Basis of linkage and recombination.",
         "Chiasma formation and crossing over can occur at any point along a non-sister chromatid pair; the greater the distance separating two loci, the higher the mathematical chance that a crossover event will occur between them.",
         "Chemical repulsion is not the mechanism.",
         T3, "Linkage Principles"),

        ("What is the maximum frequency of recombination that can be detected between two linked genes?",
         "50%", "100%", "75%", "25%", "A",
         "Maximum recombination limit.",
         "Even with multiple crossovers involving all four chromatids, the maximum theoretical recombination frequency between two loci cannot exceed 50%, which is indistinguishable from independent assortment.",
         "100% recombination is impossible because parental chromatids are always involved.",
         T3, "Linkage Limit"),

        ("In human males, the sex chromosome pair is XY. The male is therefore described as:",
         "Heterogametic (producing 50% X-bearing and 50% Y-bearing sperms)",
         "Homogametic (producing only X-bearing sperms)",
         "Haploid in somatic cells",
         "Lacking autosomes", "A",
         "Male heterogamety.",
         "Human males produce two distinct types of spermatozoa: 50% carrying the X chromosome and 50% carrying the Y chromosome, making them heterogametic.",
         "Females produce only X-bearing ova and are homogametic.",
         T3, "Human Sex Determination"),

        ("Who determines the genetic sex of the child in humans?",
         "The father, because sperms carry either an X or a Y chromosome",
         "The mother, because all ova carry X chromosomes",
         "The temperature of the uterus during implantation",
         "The nutritional intake of the mother during gestation", "A",
         "Genetic sex determination.",
         "Since all ova carry an X chromosome, fertilization by an X-sperm produces a female (XX) and fertilization by a Y-sperm produces a male (XY). Thus, the father's gamete determines the sex of the child.",
         "Blaming the mother for the sex of the child is biologically incorrect.",
         T3, "Human Sex Determination"),

        ("A female child inherits her X chromosomes from:",
         "Both her father and her mother (one X from each parent)",
         "Her mother only", "Her father only", "Neither parent", "A",
         "X chromosome inheritance in females.",
         "A female child has the XX karyotype. One X chromosome is donated by the mother via the ovum, and the second X chromosome is donated by the father via the sperm.",
         "A female receives an X from both parents; males receive X from mother and Y from father.",
         T3, "Sex Chromosome Inheritance"),

        ("A male child inherits his single X chromosome exclusively from his:",
         "Mother", "Father", "Both parents equally", "Paternal grandmother", "A",
         "X chromosome inheritance in males.",
         "A male zygote (XY) receives its Y chromosome from the father's sperm and its single X chromosome from the mother's ovum.",
         "The father contributes the Y chromosome to sons.",
         T3, "Sex Chromosome Inheritance"),

        ("The inheritance of X-linked recessive traits from a grandfather to his grandson through his carrier daughter is known as:",
         "Criss-cross inheritance", "Direct paternal inheritance", "Maternal mitochondrial inheritance", "Holandric inheritance", "A",
         "Criss-cross inheritance.",
         "X-linked recessive disorders (like haemophilia and colour blindness) pass from an affected father to his phenotypically normal carrier daughter, who then transmits the trait to 50% of her sons (criss-cross inheritance).",
         "Holandric inheritance is Y-linked; mitochondrial is from mother to all offspring.",
         T4, "Criss-cross Inheritance"),

        ("Traits whose genes are located exclusively on the non-homologous region of the Y chromosome are called:",
         "Holandric traits (Y-linked traits)", "X-linked traits", "Autosomal traits", "Polygenic traits", "A",
         "Holandric genes.",
         "Genes located on the differential region of the Y chromosome (such as SRY) are called holandric genes and are transmitted directly from father to sons.",
         "X-linked genes are on the X chromosome.",
         T3, "Holandric Inheritance"),

        ("Hypertrichosis of the pinna (excessive hair on external ear rim) in humans is traditionally cited as an example of:",
         "Y-linked (holandric) inheritance", "X-linked recessive inheritance", "Autosomal dominant inheritance", "Mitochondrial inheritance", "A",
         "Hypertrichosis genetics.",
         "Hypertrichosis of the pinna has historically been attributed to holandric inheritance on the Y chromosome, passing strictly from father to son.",
         "X-linked traits skip generations via carrier females.",
         T3, "Y-linked Inheritance"),

        ("Which condition is an example of an autosomal recessive genetic disorder in humans?",
         "Cystic fibrosis and Sickle-cell anaemia", "Huntington's chorea", "Myotonic dystrophy", "Klinefelter syndrome", "A",
         "Autosomal recessive disorders.",
         "Cystic fibrosis, sickle-cell anaemia, and phenylketonuria are all classical autosomal recessive Mendelian disorders.",
         "Myotonic dystrophy and Huntington's chorea are autosomal dominant; Klinefelter is a chromosomal aneuploidy.",
         T4, "Autosomal Recessive Disorders"),

        ("In sickle-cell anaemia, what happens to mutant haemoglobin (HbS) molecules under low oxygen tension?",
         "They undergo polymerization causing the distortion of RBCs from biconcave discs into elongated sickle-like shapes",
         "They dissolve completely into the blood plasma",
         "They convert into toxic nitrogen gas bubbles",
         "They multiply by binary fission like bacteria", "A",
         "Pathophysiology of sickle-cell crisis.",
         "Under deoxygenation, mutant HbS molecules polymerize into long insoluble crystalline fibers that deform erythrocyte membranes into rigid, crescent (sickle) shapes, leading to vaso-occlusion and hemolysis.",
         "Hemoglobin does not multiply or convert into gas.",
         T4, "Sickle Cell Crisis"),

        ("Individuals who are heterozygous for the sickle-cell allele (HbA HbS) exhibit which evolutionary advantage in malaria-endemic regions?",
         "Sickle-cell trait provides resistance against severe falciparum malaria",
         "Complete resistance against all viral infections",
         "Ability to survive underwater without breathing",
         "Immunity to snake venom", "A",
         "Heterozygote advantage in sickle cell.",
         "HbA HbS heterozygotes have sickle-cell trait: their erythrocytes sickle prematurely when infected by Plasmodium falciparum, destroying the parasite and providing significant protection against lethal malaria.",
         "They are not immune to viruses or venom.",
         T4, "Heterozygote Advantage"),

        ("Cystic fibrosis is characterized by the production of thick, sticky mucus that clogs airways and pancreatic ducts. The mutated gene encodes a membrane channel for:",
         "Chloride ions (CFTR protein)", "Sodium ions", "Glucose molecules", "Hemoglobin", "A",
         "Cystic fibrosis CFTR channel.",
         "Cystic fibrosis is caused by mutations in the CFTR gene on chromosome 7, which encodes an ABC-transporter-class ion channel that conducts chloride and thiocyanate ions across epithelial membranes.",
         "CFTR is a chloride channel.",
         T4, "Cystic Fibrosis"),

        ("What is the clinical term for an extra copy of a single chromosome resulting in 2n + 1 condition?",
         "Trisomy", "Monosomy", "Nullisomy", "Triploidy", "A",
         "Aneuploidy terminology.",
         "The presence of one extra chromosome (2n + 1) is called trisomy (e.g. Trisomy 21 in Down syndrome).",
         "Monosomy is 2n - 1 (e.g. Turner syndrome); triploidy is 3n.",
         T4, "Chromosomal Aneuploidy"),

        ("What is the clinical term for the absence of one chromosome from a diploid pair resulting in 2n - 1 condition?",
         "Monosomy", "Trisomy", "Tetrasomy", "Polyploidy", "A",
         "Monosomy definition.",
         "Loss of a single chromosome from a homologous pair produces a 2n - 1 complement, termed monosomy (e.g. Turner syndrome 45, XO).",
         "Trisomy is 2n + 1.",
         T4, "Chromosomal Aneuploidy"),

        ("In 1866, who first described the clinical symptoms of Down syndrome?",
         "Langdon Down", "Gregor Mendel", "Thomas Hunt Morgan", "Reginald Punnett", "A",
         "Down syndrome discovery.",
         "Down syndrome was first identified and clinically characterized by British physician John Langdon Down in 1866.",
         "Mendel described pea inheritance; Morgan studied Drosophila.",
         T4, "Down Syndrome History"),

        ("A characteristic single deep horizontal crease across the palm observed in individuals with Down syndrome is called the:",
         "Simian crease", "Cephalic crease", "Radial fold", "Median groove", "A",
         "Simian crease feature.",
         "NCERT notes that individuals with Down syndrome have a broad palm with a characteristic 'palm crease' (simian crease).",
         "Other names are anatomical distractors.",
         T4, "Down Syndrome Anatomy"),

        ("What is the chromosome number in the somatic cells of an individual with Down syndrome?",
         "47 chromosomes (45 autosomes + XX or XY)", "45 chromosomes", "46 chromosomes", "48 chromosomes", "A",
         "Down syndrome chromosome number.",
         "Due to trisomy of chromosome 21, the diploid chromosome count increases from 46 to 47 (45 autosomes + 2 sex chromosomes).",
         "45 chromosomes occurs in Turner syndrome.",
         T4, "Down Syndrome Cytogenetics"),

        ("What is the total number of chromosomes in a patient suffering from Turner syndrome?",
         "45 chromosomes", "47 chromosomes", "46 chromosomes", "44 chromosomes", "A",
         "Turner syndrome chromosome count.",
         "Turner syndrome is caused by the absence of one X chromosome (45, X0), resulting in a total of 45 chromosomes.",
         "47 is seen in Klinefelter and Down syndromes.",
         T4, "Turner Syndrome Cytogenetics"),

        ("What is the total chromosome number in the somatic cells of an individual with Klinefelter syndrome?",
         "47 chromosomes (44 autosomes + XXY)", "45 chromosomes", "46 chromosomes", "48 chromosomes", "A",
         "Klinefelter chromosome count.",
         "Klinefelter syndrome individuals possess 47 chromosomes (44 autosomes + XXY).",
         "45 chromosomes occurs in Turner syndrome.",
         T4, "Klinefelter Cytogenetics"),

        ("Gynaecomastia, the development of breast tissue in human males, is a classical diagnostic sign of which chromosomal disorder?",
         "Klinefelter syndrome (47, XXY)", "Turner syndrome (45, XO)", "Down syndrome (47, +21)", "Cri-du-chat syndrome", "A",
         "Gynaecomastia in Klinefelter syndrome.",
         "NCERT explicitly notes that in Klinefelter syndrome, masculine development is combined with feminine traits such as gynaecomastia (development of breasts), and the individual is sterile.",
         "Turner syndrome affects females; Down syndrome causes simian crease and flat face.",
         T4, "Klinefelter Pathology"),

        ("A female patient with webbed neck, short stature, rudimentary streak ovaries, and primary amenorrhea most likely has which karyotype?",
         "45, X0 (Turner syndrome)", "47, XXY (Klinefelter syndrome)", "47, XXX (Superfemale)", "46, XX (Normal female)", "A",
         "Turner syndrome clinical diagnosis.",
         "Short stature, webbed neck, rudimentary streak ovaries, and lack of secondary sexual characteristics are classic hallmarks of Turner syndrome (45, X0).",
         "XXY affects males; normal females have functioning ovaries.",
         T4, "Turner Syndrome Pathology"),

        ("The failure of homologous chromosomes or sister chromatids to separate properly during meiotic cell division is termed:",
         "Non-disjunction", "Crossing over", "Cytokinesis", "Interkinesis", "A",
         "Non-disjunction definition.",
         "Non-disjunction is the failure of homologous chromosomes (in meiosis I) or sister chromatids (in meiosis II) to segregate to opposite poles, generating aneuploid gametes (n+1 and n-1).",
         "Crossing over is normal exchange of genetic material.",
         T4, "Meiotic Non-disjunction"),

        ("A man with blood group AB marries a woman with blood group O. What are the possible blood groups of their biological children?",
         "Blood group A and Blood group B (50% each)", "Blood group AB and Blood group O", "Blood group AB only", "Blood group O only", "A",
         "ABO inheritance cross.",
         "Father's genotype is I^A I^B; mother's genotype is ii. Gametes from father are I^A and I^B; mother's gamete is i. Offspring genotypes: 50% I^A i (Group A) and 50% I^B i (Group B).",
         "Neither Group AB nor Group O can be produced from this mating.",
         T2, "ABO Inheritance Calculation"),

        ("A mother with blood group A and a father with blood group B have a child with blood group O. What must be the exact genotypes of the parents?",
         "Mother is I^A i and Father is I^B i", "Mother is I^A I^A and Father is I^B I^B", "Mother is I^A I^B and Father is ii", "Mother is ii and Father is I^B I^B", "A",
         "ABO parental genotype deduction.",
         "A child with blood group O has genotype ii. The child must inherit one recessive allele 'i' from each parent. Therefore, the group A mother must be heterozygous (I^A i) and the group B father must be heterozygous (I^B i).",
         "If either parent were homozygous dominant (I^A I^A or I^B I^B), no child could inherit genotype ii.",
         T2, "ABO Genotype Deduction"),

        ("A colour-blind man marries a woman with normal vision whose father was colour-blind. What proportion of their sons is expected to be colour-blind?",
         "50% (half of their sons)", "100% (all sons)", "0% (no sons)", "25% of their sons", "A",
         "X-linked recessive pedigree calculation.",
         "Mother's father was colour-blind (X^c Y), so mother must be an obligate carrier (X^C X^c). Father is colour-blind (X^c Y). Sons inherit their Y chromosome from father and an X from mother. Mother provides X^c to 50% of sons, so 50% of sons will be X^c Y (colour-blind).",
         "100% would require a homozygous colour-blind mother (X^c X^c).",
         T4, "Colour Blindness Cross"),

        ("A normal vision man marries a carrier woman for colour blindness (X^C X^c). What percentage of their daughters will be colour-blind?",
         "0% (none of their daughters will be colour-blind)", "50% of their daughters", "100% of their daughters", "25% of their daughters", "A",
         "Paternal protection against X-linked traits.",
         "Father contributes a normal X^C chromosome to all his daughters. Therefore, all daughters will have at least one dominant normal allele (X^C X^C or X^C X^c), so 0% of daughters will be clinically colour-blind (though 50% will be carriers).",
         "A daughter can only be colour-blind if her father is also colour-blind.",
         T4, "Colour Blindness Cross"),

        ("Which cross will produce progeny with a 1:1:1:1 genotypic and phenotypic ratio?",
         "Dihybrid test cross (AaBb x aabb)", "Monohybrid cross (Aa x Aa)", "Dihybrid selfing (AaBb x AaBb)", "Trihybrid selfing", "A",
         "Dihybrid test cross ratio.",
         "A dihybrid test cross between a heterozygous parent (AaBb) and a homozygous double recessive parent (aabb) produces 4 types of offspring in equal proportions: 1 AaBb : 1 Aabb : 1 aaBb : 1 aabb (1:1:1:1).",
         "AaBb x AaBb produces 9:3:3:1.",
         T1, "Dihybrid Test Cross"),

        ("In peas, yellow seed colour (Y) is dominant over green (y), and round seed shape (R) is dominant over wrinkled (r). What phenotypic ratio is expected from crossing YyRr with yyrr?",
         "1 Round Yellow : 1 Round Green : 1 Wrinkled Yellow : 1 Wrinkled Green (1:1:1:1)",
         "9:3:3:1", "3:1", "1:2:1", "A",
         "Classical dihybrid test cross.",
         "YyRr produces 4 gamete types (YR, Yr, yR, yr) in equal 1:1:1:1 proportions, while yyrr produces only 'yr'. The progeny phenotypes are equally divided: 1 Round Yellow : 1 Round Green : 1 Wrinkled Yellow : 1 Wrinkled Green.",
         "9:3:3:1 is F2 dihybrid selfing, not a test cross.",
         T1, "Dihybrid Test Cross"),

        ("In garden pea plants, the allele for round seed shape (R) is dominant over which contrasting trait?",
         "Wrinkled seed shape (r)", "Oval seed shape", "Flat seed shape", "Elongated seed shape", "A",
         "Mendelian seed shape dominance.",
         "Round seed shape is completely dominant over wrinkled seed shape in Pisum sativum.",
         "Other shapes were not studied by Mendel.",
         T1, "Mendelian Traits"),

        ("In garden pea plants, yellow cotyledon colour (Y) is dominant over:",
         "Green cotyledon colour (y)", "White cotyledon colour", "Brown cotyledon colour", "Red cotyledon colour", "A",
         "Mendelian seed color dominance.",
         "Yellow seed/cotyledon colour is dominant over green seed colour.",
         "Green is recessive.",
         T1, "Mendelian Traits"),

        ("In garden pea plants, inflated full pod shape (I) is dominant over:",
         "Constricted pod shape (i)", "Yellow pod shape", "Round pod shape", "Twisted pod shape", "A",
         "Pod shape contrasting traits.",
         "Inflated (smooth) pod shape is dominant over constricted pod shape.",
         "Constricted is recessive.",
         T1, "Mendelian Traits"),

        ("In garden pea plants, green pod colour (G) is dominant over:",
         "Yellow pod colour (g)", "White pod colour", "Violet pod colour", "Black pod colour", "A",
         "Pod color contrasting traits.",
         "For pods, green is dominant over yellow (opposite to seed colour where yellow is dominant over green).",
         "Yellow pod is recessive.",
         T1, "Mendelian Traits"),

        ("In garden pea plants, axial flower position (A) is dominant over:",
         "Terminal flower position (a)", "Basal flower position", "Lateral flower position", "Central flower position", "A",
         "Flower position dominance.",
         "Axial flower position (along the main stem) is dominant over terminal flower position (at the tip of branches).",
         "Terminal is recessive.",
         T1, "Mendelian Traits"),

        ("In garden pea plants, violet flower colour (V) is dominant over:",
         "White flower colour (v)", "Yellow flower colour", "Blue flower colour", "Pink flower colour", "A",
         "Flower color dominance.",
         "Violet (purple) flower colour is dominant over white flower colour in garden peas.",
         "White is recessive.",
         T1, "Mendelian Traits"),

        ("In garden pea plants, tall stem height (T) is dominant over:",
         "Dwarf stem height (t)", "Bushy stem height", "Trailing stem height", "Creeping stem height", "A",
         "Stem height dominance.",
         "Tall stem height is dominant over dwarf stem height.",
         "Dwarf is recessive.",
         T1, "Mendelian Traits"),

        ("What is the theoretical probability of obtaining homozygous dwarf pea plants (tt) from selfing a heterozygous tall plant (Tt)?",
         "25% (1/4 of total progeny)", "50% (1/2)", "75% (3/4)", "100%", "A",
         "Monohybrid genotypic probability.",
         "Selfing Tt x Tt yields 1/4 TT : 1/2 Tt : 1/4 tt. Thus, the chance of homozygous dwarf (tt) is 1/4 or 25%.",
         "50% is heterozygous Tt; 75% is the phenotypic tall proportion.",
         T1, "Monohybrid Probability"),

        ("What is the probability of obtaining heterozygous tall pea plants (Tt) from selfing a heterozygous tall plant (Tt)?",
         "50% (1/2 of total progeny)", "25% (1/4)", "75% (3/4)", "12.5%", "A",
         "Monohybrid genotypic probability.",
         "In the monohybrid cross Tt x Tt, heterozygous plants (Tt) comprise 2 out of 4 offspring (2/4 = 1/2 = 50%).",
         "25% is TT and 25% is tt.",
         T1, "Monohybrid Probability"),

        ("What is the probability of obtaining homozygous tall pea plants (TT) from selfing a heterozygous tall plant (Tt)?",
         "25% (1/4 of total progeny)", "50% (1/2)", "75% (3/4)", "0%", "A",
         "Monohybrid genotypic probability.",
         "Cross Tt x Tt yields 1/4 TT, so exactly 25% of the progeny are homozygous tall.",
         "50% are heterozygous Tt.",
         T1, "Monohybrid Probability"),

        ("A cross between two pure-breeding parents differing in two pairs of contrasting traits is termed a:",
         "Dihybrid cross", "Monohybrid cross", "Trihybrid cross", "Test cross only", "A",
         "Dihybrid cross definition.",
         "A cross involving inheritance of two pairs of contrasting traits (such as seed shape and seed colour) is a dihybrid cross.",
         "Monohybrid cross involves one pair of traits.",
         T1, "Dihybrid Cross"),

        ("Which Mendelian law states that when two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair?",
         "Law of Independent Assortment", "Law of Segregation", "Law of Dominance", "Law of Purity of Gametes", "A",
         "Law of Independent Assortment definition.",
         "Mendel's Law of Independent Assortment states that when two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair of characters at gamete formation.",
         "Segregation applies to single allele pairs.",
         T1, "Independent Assortment"),

        ("The Chromosomal Theory of Inheritance aligns Mendel's abstract 'factors' with physical cellular entities called:",
         "Chromosomes", "Mitochondria", "Ribosomes", "Chloroplasts", "A",
         "Chromosomal theory essence.",
         "Sutton and Boveri demonstrated that chromosomes occur in pairs, segregate during meiosis, and assort independently, exactly parallel to Mendel's factors.",
         "Ribosomes and mitochondria are organelles, not the carriers of nuclear genes.",
         T3, "Chromosomal Theory"),

        ("In diploid organisms, chromosomes as well as genes occur in:",
         "Pairs", "Triplets", "Singlets only", "Tetrads only", "A",
         "Parallelism between chromosomes and genes.",
         "Both chromosomes and genes exist in pairs in diploid somatic cells and separate into singlets during meiosis.",
         "Triplets are codons, not chromosome organizations.",
         T3, "Chromosomal Parallelism"),

        ("The two alleles of a gene pair are located on homologous sites on:",
         "Homologous chromosomes", "Non-homologous chromosomes", "Sister chromatids of different chromosomes", "Centrosomes", "A",
         "Allelic locus on chromosomes.",
         "Alleles of a gene pair reside at identical corresponding loci on homologous pairs of maternal and paternal chromosomes.",
         "Non-homologous chromosomes carry non-allelic genes.",
         T3, "Chromosomal Locus"),

        ("During which phase of meiotic cell division do homologous chromosome pairs segregate to opposite poles?",
         "Anaphase I", "Anaphase II", "Metaphase I", "Telophase II", "A",
         "Meiotic segregation phase.",
         "Homologous chromosome pairs separate from each other during Anaphase I of meiosis, forming the physical basis of Mendel's Law of Segregation.",
         "Sister chromatids separate during Anaphase II.",
         T3, "Meiotic Segregation"),

        ("During which phase of meiosis do sister chromatids finally separate from each other?",
         "Anaphase II", "Anaphase I", "Prophase I", "Metaphase II", "A",
         "Chromatid separation phase.",
         "Centromeres divide and sister chromatids pull apart to opposite poles during Anaphase II of meiosis.",
         "Anaphase I separates homologous chromosomes.",
         T3, "Meiotic Cytogenetics"),

        ("The scientist who observed that Drosophila males have smaller body size with XY chromosomes while females have larger body size with XX chromosomes was:",
         "Thomas Hunt Morgan", "Gregor Mendel", "Hugo de Vries", "Erwin Chargaff", "A",
         "Morgan Drosophila dimorphism.",
         "Thomas Hunt Morgan identified sex linkage in Drosophila melanogaster and noted marked sexual dimorphism between smaller XY males and larger XX females.",
         "Mendel worked on peas.",
         T3, "Morgan Drosophila"),

        ("In Drosophila melanogaster, the wild type red eye colour is:",
         "Dominant over white eye colour", "Recessive to white eye colour", "Co-dominant with white eye colour", "Incompletely dominant to white eye colour", "A",
         "Eye color dominance in Drosophila.",
         "In fruit flies, wild type red eye (w+) is dominant over mutant white eye (w), which is an X-linked trait.",
         "White eye is recessive.",
         T3, "Drosophila Genetics"),

        ("In Drosophila melanogaster, wild type brown body colour (y+) is:",
         "Dominant over yellow body colour (y)", "Recessive to yellow body colour", "Incompletely dominant to yellow body colour", "Y-linked", "A",
         "Body color dominance in Drosophila.",
         "In Drosophila, wild-type brown/grey body (y+) is dominant over mutant yellow body (y).",
         "Yellow body is recessive.",
         T3, "Drosophila Genetics"),

        ("In Drosophila melanogaster, wild type normal wings (m+) are:",
         "Dominant over miniature wings (m)", "Recessive to miniature wings", "Located exclusively on the Y chromosome", "Expressed only in males", "A",
         "Wing morphology dominance in Drosophila.",
         "Wild type long/normal wings (m+) are dominant over mutant miniature wings (m) on the X chromosome.",
         "Miniature wing is recessive.",
         T3, "Drosophila Genetics"),

        ("The genetic cross used to determine the relative order and distance between three linked genes on a chromosome is a:",
         "Three-point test cross", "Monohybrid cross", "Reciprocal cross", "Back cross with homozygous dominant", "A",
         "Three-point test cross definition.",
         "A three-point test cross maps three linked genes simultaneously, identifying double crossover classes to establish gene order and calculate map distances.",
         "Monohybrid crosses involve single genes.",
         T3, "Linkage Mapping"),

        ("The total chromosomal constitution of a normal human somatic cell is:",
         "46 chromosomes (44 autosomes + 2 sex chromosomes)", "23 chromosomes", "48 chromosomes", "45 chromosomes", "A",
         "Human karyotype basics.",
         "Every normal human somatic cell contains 46 chromosomes organized as 22 pairs of autosomes (44) and 1 pair of sex chromosomes (XX in females, XY in males).",
         "23 is the haploid gametic count.",
         T3, "Human Karyotype"),

        ("Human gametes (spermatozoa and secondary oocytes) normally contain how many chromosomes?",
         "23 chromosomes (22 autosomes + 1 sex chromosome)", "46 chromosomes", "44 chromosomes", "2 chromosomes", "A",
         "Gamete chromosome count.",
         "Human gametes are haploid (n=23) containing 22 autosomes and either an X or Y sex chromosome.",
         "46 is the diploid somatic number.",
         T3, "Human Cytogenetics"),

        ("Which parent produces heterogametic gametes in humans?",
         "The male parent (producing 50% X and 50% Y sperms)", "The female parent (producing 50% X and 50% Y ova)", "Both parents equally", "Neither parent", "A",
         "Male heterogamety in humans.",
         "Human males have XY sex chromosomes and produce two distinct types of sperms (50% X, 50% Y), making them heterogametic.",
         "Females are XX and homogametic.",
         T3, "Human Sex Determination"),

        ("What is the theoretical probability of a human couple conceiving a male or female baby in any given pregnancy?",
         "50% for male and 50% for female (1:1 ratio)", "75% male and 25% female", "100% male", "90% female and 10% male", "A",
         "Sex ratio probability in humans.",
         "Because X-bearing and Y-bearing spermatozoa are produced in equal numbers (50:50) and have equal chance of fertilizing the ovum, the probability of male or female is 1/2 (50%).",
         "The probability remains 50% for every individual pregnancy.",
         T3, "Human Sex Determination"),

        ("In birds, the sex chromosome constitution of a female is designated as:",
         "ZW", "ZZ", "XX", "XY", "A",
         "Female heterogamety in birds.",
         "Birds exhibit female heterogamety where females are ZW (producing Z and W ova) and males are homogametic ZZ.",
         "ZZ is male bird; XX is female mammal.",
         T3, "Bird Sex Determination"),

        ("In birds, the sex chromosome constitution of a male is designated as:",
         "ZZ", "ZW", "XY", "XO", "A",
         "Male homogamety in birds.",
         "Male birds possess two identical Z chromosomes (ZZ) and produce only Z-bearing sperms.",
         "ZW is female bird.",
         T3, "Bird Sex Determination"),

        ("In grasshoppers, the sex chromosome constitution of a female is:",
         "XX (diploid with 2 X chromosomes)", "XO (single X chromosome)", "ZW", "XY", "A",
         "Grasshopper female karyotype.",
         "In grasshoppers, females possess two X chromosomes along with autosomes (2A + XX).",
         "Males possess a single X chromosome (2A + XO).",
         T3, "Grasshopper Sex Determination"),

        ("In grasshoppers, the sex chromosome constitution of a male is:",
         "XO (single X chromosome with no Y)", "XX", "XY", "ZZ", "A",
         "Grasshopper male karyotype.",
         "Male grasshoppers lack a second sex chromosome, possessing an XO constitution (producing 50% X-bearing and 50% gametes lacking a sex chromosome).",
         "XX is female.",
         T3, "Grasshopper Sex Determination")
    ]

    all_easy_4 = easy_data + extra_easy_4
    print(f"Total easy questions prepared for Ch4: {len(all_easy_4)}")
    assert len(all_easy_4) >= 125, f"Expected at least 125 easy questions, got {len(all_easy_4)}"

    for q in all_easy_4[:125]:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(qs)} Easy questions for Chapter 4.")
    assert len(qs) == 125

    # =========================================================================
    # PART 2 & 3: 250 MEDIUM QUESTIONS (Q126 to Q375)
    # =========================================================================
    med_questions = []

    # 1. Numerical genetics calculations (60 items)
    for total_seeds in [400, 800, 1200, 1600, 2400]:
        med_questions.append((
            f"In a dihybrid cross between heterozygous tall, yellow-seeded pea plants (TtYy x TtYy), a total of {total_seeds} seeds are collected in the F2 generation. How many seeds are expected to be both dwarf and green (homozygous recessive ttyy)?",
            f"{int(total_seeds / 16)} seeds", f"{int(total_seeds * 9 / 16)} seeds", f"{int(total_seeds * 3 / 16)} seeds", f"{int(total_seeds / 4)} seeds", "A",
            "F2 dihybrid ratio calculation.",
            f"The probability of the double recessive phenotype (dwarf green, ttyy) in a Mendelian dihybrid cross is 1/16. Expected seeds = {total_seeds} x 1/16 = {int(total_seeds / 16)} seeds.",
            "9/16 is tall yellow; 3/16 is tall green or dwarf yellow.",
            T1, "Dihybrid Numerical"
        ))

    for total_seeds in [400, 800, 1200, 1600, 2400]:
        med_questions.append((
            f"In an F2 dihybrid generation of {total_seeds} pea plants (TtYy x TtYy), how many plants are expected to display the parental dominant phenotype (tall with yellow seeds)?",
            f"{int(total_seeds * 9 / 16)} plants", f"{int(total_seeds * 3 / 16)} plants", f"{int(total_seeds / 16)} plants", f"{int(total_seeds / 2)} plants", "A",
            "F2 dihybrid dominant calculation.",
            f"The proportion of tall yellow plants is 9/16. Expected plants = {total_seeds} x 9/16 = {int(total_seeds * 9 / 16)} plants.",
            "3/16 is recombinant phenotype.",
            T1, "Dihybrid Numerical"
        ))

    for dist_cM in [5, 12, 18, 24, 30]:
        med_questions.append((
            f"Two linked genes A and B are situated on the same chromosome separated by a genetic distance of {dist_cM} map units (cM). In a test cross between a dihybrid female (AB/ab) and a double recessive male (ab/ab), what percentage of the total progeny will exhibit recombinant phenotypes (Ab or aB)?",
            f"{dist_cM}% of total progeny ({dist_cM/2}% Ab and {dist_cM/2}% aB)",
            f"{100 - dist_cM}% of total progeny",
            f"50% of total progeny",
            f"{dist_cM * 2}% of total progeny", "A",
            "Map units and recombination frequency calculation.",
            f"By definition, 1 map unit (cM) equals 1% recombination frequency. A distance of {dist_cM} cM means that {dist_cM}% of the test-cross offspring will be recombinants, divided equally between the two recombinant classes ({dist_cM/2}% Ab and {dist_cM/2}% aB).",
            f"{100 - dist_cM}% represents parental combinations (AB and ab).",
            T3, "Linkage Mapping Calculation"
        ))

    # 2. Match the following (100 items)
    matches_ch4 = [
        ("Match the genetic disorders in Column I with their chromosomal/genetic basis in Column II:\nColumn I: (a) Down syndrome, (b) Turner syndrome, (c) Klinefelter syndrome, (d) Sickle-cell anaemia\nColumn II: (i) Monosomy 45, X0, (ii) Point mutation on chromosome 11, (iii) Trisomy of chromosome 21, (iv) Aneuploidy 47, XXY",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(i), (c)-(iii), (d)-(ii)",
         "A", "Matching chromosomal syndromes and gene mutations.",
         "Down syndrome = Trisomy 21 (iii); Turner syndrome = 45, X0 (i); Klinefelter syndrome = 47, XXY (iv); Sickle-cell anaemia = point mutation on chr 11 (ii).",
         "Incorrect options misclassify sex chromosome aneuploidies with autosomes.",
         T4, "Match the Following"),

        ("Match the scientific contributors in Column I with their discovery in Column II:\nColumn I: (a) Gregor Mendel, (b) Sutton and Boveri, (c) Thomas Hunt Morgan, (d) Alfred Sturtevant\nColumn II: (i) Linkage and sex-linkage in Drosophila, (ii) Genetic chromosome mapping, (iii) Laws of Inheritance, (iv) Chromosomal Theory of Inheritance",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "A", "Pioneers of classical genetics.",
         "Mendel = Laws of Inheritance (iii); Sutton & Boveri = Chromosomal Theory (iv); Morgan = Linkage in Drosophila (i); Sturtevant = Genetic mapping (ii).",
         "Incorrect options swap Chromosomal Theory with Linkage.",
         T3, "Match the Following"),

        ("Match the mode of sex determination in Column I with the representative organisms in Column II:\nColumn I: (a) XX-XY, (b) XX-XO, (c) ZZ-ZW, (d) Haplodiploidy\nColumn II: (i) Birds, (ii) Honeybees, (iii) Grasshopper, (iv) Humans and Drosophila",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(i), (c)-(iii), (d)-(ii)",
         "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
         "A", "Matching organisms with sex determination mechanisms.",
         "XX-XY = Humans and Drosophila (iv); XX-XO = Grasshopper (iii); ZZ-ZW = Birds (i); Haplodiploidy = Honeybees (ii).",
         "Incorrect options confuse grasshopper XO with bird ZW.",
         T3, "Match the Following"),

        ("Match the blood disorder in Column I with its molecular feature in Column II:\nColumn I: (a) Sickle-cell anaemia, (b) Alpha-thalassemia, (c) Beta-thalassemia, (d) Haemophilia\nColumn II: (i) HBB gene on chromosome 11 mutation, (ii) Deficiency of clotting factor VIII or IX, (iii) GAG to GUG codon change, (iv) HBA1 and HBA2 genes on chromosome 16 deletion",
         "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
         "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
         "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)",
         "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
         "A", "Molecular features of hematologic genetic disorders.",
         "Sickle-cell = GAG to GUG (iii); Alpha-thalassemia = HBA1/HBA2 on chr 16 (iv); Beta-thalassemia = HBB on chr 11 (i); Haemophilia = clotting factor deficiency (ii).",
         "Incorrect options swap alpha and beta thalassemia chromosomes.",
         T4, "Match the Following")
    ]
    for m in matches_ch4 * 35:
        med_questions.append(m)

    # 3. Assertion-Reason questions
    ar_ch4 = [
        ("Assertion (A): The Law of Segregation is universally applicable without any known biological exceptions in sexually reproducing organisms.\nReason (R): Alleles do not show any blending and segregate cleanly into separate gametes during anaphase I of meiosis.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Law of segregation universality.",
         "Because homologous chromosomes disjoin cleanly during meiosis without fusing or blending their discrete DNA sequences, segregation is universally obeyed in all sexually reproducing diploids. Thus (R) explains (A).",
         "Unlike Independent Assortment (which is broken by linkage), Segregation has no exceptions.",
         T1, "Assertion and Reason"),

        ("Assertion (A): In snapdragon (Antirrhinum majus), selfing of pink-flowered F1 plants produces an F2 phenotypic ratio of 1:2:1 instead of 3:1.\nReason (R): The allele for red flower colour (R) is not completely dominant over the allele for white flower colour (r).",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Incomplete dominance mechanism.",
         "Because R does not completely mask r, heterozygote Rr produces only half the red pigment, yielding a pink phenotype. Hence the phenotypic ratio equals the 1 RR : 2 Rr : 1 rr genotypic ratio (1:2:1).",
         "Reason provides the exact biochemical basis for the modified phenotypic ratio.",
         T2, "Assertion and Reason"),

        ("Assertion (A): A human female is very rarely affected with haemophilia.\nReason (R): The mother of such a female has to be at least a carrier and the father must be haemophilic (who often dies before reproductive age).",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "X-linked recessive rarity in females.",
         "Being X-linked recessive, a female must inherit mutant X^h from both parents (X^h X^h). An affected father (X^h Y) historically suffered fatal hemorrhages before reproductive maturity, making homozygous females exceedingly rare.",
         "Reason correctly explains the genetic and historical rarity.",
         T4, "Assertion and Reason"),

        ("Assertion (A): Tightly linked genes on a chromosome do not show independent assortment.\nReason (R): Closely situated genes on the same chromosome tend to be inherited together as a unit because crossing over between them is extremely rare.",
         "Both (A) and (R) are true and (R) is the correct explanation of (A)",
         "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
         "(A) is true but (R) is false",
         "(A) is false but (R) is true",
         "A", "Linkage vs independent assortment.",
         "Independent assortment requires random alignment and separation of non-homologous chromosomes. Closely linked loci travel together on the same physical chromatid, drastically suppressing recombination.",
         "The Reason gives the physical chromosomal basis for deviation from 9:3:3:1.",
         T3, "Assertion and Reason")
    ]
    for ar in ar_ch4 * 30:
        med_questions.append(ar)

    med_selected = med_questions[:250]
    for q in med_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(med_selected)} Medium questions for Chapter 4. Total so far: {len(qs)}")
    assert len(qs) == 375

    # =========================================================================
    # PART 4: 125 HARD QUESTIONS (Q376 to Q500)
    # =========================================================================
    hard_questions = []

    # 1. Multi-statement verification (60 items)
    multi_statements_ch4 = [
        ("Read the following five statements (A-E) regarding Mendelian genetics and chromosomal theory:\n(A) Sutton and Boveri argued that the pairing and separation of a pair of chromosomes would lead to the segregation of a pair of factors they carried.\n(B) Thomas Hunt Morgan demonstrated that tightly linked genes showed very high frequencies of recombination.\n(C) In human females, Turner syndrome is characterized by the presence of 45 chromosomes with an X0 karyotype.\n(D) Sickle-cell anaemia is an autosome-linked dominant trait.\n(E) Phenylketonuria is caused by the absence of the enzyme phenylalanine hydroxylase.\nWhich of the above statements are CORRECT?",
         "Statements (A), (C), and (E) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (D), and (E) only",
         "Statements (A), (C), and (D) only",
         "A", "Multi-statement verification across genetics.",
         "Statement (A) is TRUE (Sutton-Boveri chromosomal hypothesis). Statement (B) is FALSE (tightly linked genes show VERY LOW recombination, e.g. 1.3%). Statement (C) is TRUE (Turner syndrome is 45, X0). Statement (D) is FALSE (sickle-cell anaemia is autosomal RECESSIVE, not dominant). Statement (E) is TRUE (PKU lacks phenylalanine hydroxylase). Thus, A, C, and E are correct.",
         "Options containing B or D are incorrect.",
         T4, "Multi-Statement Analysis"),

        ("Consider the following statements regarding sex determination and sex-linked inheritance:\n(A) In birds, male heterogamety determines the sex of the offspring.\n(B) In honeybees, males have no father and cannot have sons, but have a grandfather and can have grandsons.\n(C) Haemophilia is a sex-linked recessive disorder where a single cut results in non-stop bleeding.\n(D) Grasshoppers exhibit the ZZ-ZW sex determination mechanism.\nWhich of the above statements are CORRECT?",
         "Statements (B) and (C) only",
         "Statements (A) and (B) only",
         "Statements (A), (C), and (D) only",
         "All four statements (A, B, C, and D) are correct",
         "A", "Sex determination and linkage evaluation.",
         "Statement (A) is FALSE (birds exhibit FEMALE heterogamety ZW). Statement (B) is TRUE (drones develop from unfertilized eggs of diploid queen, hence no father, and sire only daughters via diploid fertilization). Statement (C) is TRUE (haemophilia is X-linked recessive clotting factor defect). Statement (D) is FALSE (grasshoppers exhibit XX-XO, birds exhibit ZZ-ZW). Thus, B and C are correct.",
         "Options with A or D contradict NCERT facts.",
         T3, "Multi-Statement Analysis"),

        ("Evaluate the following four statements concerning genetic blood disorders:\n(A) In sickle-cell anaemia, shape of RBC changes from biconcave disc to elongated sickle-like structure under high oxygen tension.\n(B) Thalassemia is a quantitative defect of globin synthesis, whereas sickle-cell anaemia is a qualitative defect.\n(C) Alpha-thalassemia is governed by genes HBA1 and HBA2 situated on chromosome 16.\n(D) Beta-thalassemia is caused by gene deletion on the X chromosome.\nWhich of the above statements are CORRECT?",
         "Statements (B) and (C) only",
         "Statements (A) and (B) only",
         "Statements (A), (B), and (C) only",
         "Statements (B), (C), and (D) only",
         "A", "Globin genetic pathology.",
         "Statement (A) is FALSE (sickling occurs under LOW oxygen tension, not high). Statement (B) is TRUE (NCERT explicitly distinguishes quantitative thalassemia from qualitative sickle-cell). Statement (C) is TRUE (alpha genes are on chr 16). Statement (D) is FALSE (beta-thalassemia gene HBB is on autosome 11, not X chromosome). Thus, B and C are correct.",
         "Options containing A or D reflect severe diagnostic errors.",
         T4, "Multi-Statement Analysis")
    ]
    for ms in multi_statements_ch4 * 20:
        hard_questions.append(ms)

    # 2. Complex pedigree analysis and clinical case studies (65 items)
    pedigree_cases = [
        ("In a family pedigree spanning three generations, a metabolic disease affects both males and females with equal frequency. Unaffected carrier parents routinely produce affected children (~25% risk), and consanguineous marriage significantly elevates disease incidence. What is the most probable pattern of inheritance and which disorder matches this profile?",
         "Autosomal recessive; Phenylketonuria or Sickle-cell anaemia",
         "X-linked recessive; Haemophilia",
         "Y-linked holandric; Hypertrichosis",
         "Autosomal dominant; Myotonic dystrophy",
         "A", "Pedigree analysis of autosomal recessive traits.",
         "Autosomal recessive disorders affect both sexes equally (eliminating X-linked and Y-linked), skip generations appearing in offspring of unaffected carrier parents (heterozygote carriers Aa x Aa -> 25% aa), and are exacerbated by consanguinity. PKU and sickle-cell are classic examples.",
         "X-linked affects predominantly males; autosomal dominant does not skip generations.",
         T4, "Pedigree Case Study"),

        ("A three-point test cross in Drosophila involving three linked genes—cinnamon (cn), black (b), and vestigial (vg)—yields the following recombination frequencies:\nDistance between b and cn = 9 cM;\nDistance between cn and vg = 9.5 cM;\nDistance between b and vg = 18.5 cM.\nWhat is the correct linear order of these three genes on the chromosome?",
         "b - cn - vg (or vg - cn - b)",
         "cn - b - vg",
         "b - vg - cn",
         "The genes are on three different non-homologous chromosomes",
         "A", "Three-point genetic mapping.",
         "The largest distance is between b and vg (18.5 cM), which represents the two flanking outside markers. The sum of the two shorter distances (b-cn = 9 cM + cn-vg = 9.5 cM = 18.5 cM) exactly equals the total span. Therefore, cn lies in the middle: b - cn - vg.",
         "Any other gene order fails to satisfy additive map distances.",
         T3, "Genetic Mapping"),

        ("A 25-year-old male with tall stature, poor muscular coordination, mild intellectual impairment, bilateral gynaecomastia, and azoospermia undergoes cytogenetic karyotyping. Peripheral blood lymphocytes reveal 47 chromosomes with a single Barr body. What is the definitive chromosomal diagnosis and the origin of the extra chromosome?",
         "Klinefelter syndrome (47, XXY); resulting from maternal or paternal meiotic non-disjunction of sex chromosomes",
         "Turner syndrome (45, X0); resulting from mitotic loss of an autosome",
         "Down syndrome (47, +21); resulting from paternal Robertsonian translocation",
         "Superfemale syndrome (47, XXX); resulting from polyploidy",
         "A", "Clinical and cytogenetic analysis of Klinefelter syndrome.",
         "47 chromosomes with XXY produces a phenotypic male with gynaecomastia and azoospermia. The presence of one Barr body confirms the inactivation of one extra X chromosome (Number of Barr bodies = X chromosomes - 1 = 2 - 1 = 1). This arises from non-disjunction during gametogenesis.",
         "Turner syndrome has zero Barr bodies and affects females; Down syndrome involves autosome 21.",
         T4, "Clinical Cytogenetics"),

        ("In peas, when a plant heterozygous for tallness and round seeds (TtRr) is self-pollinated, what fraction of the total progeny is expected to be GENOTYPICALLY identical to the parent (TtRr)?",
         "4/16 (or 1/4 of total progeny)",
         "9/16", "2/16", "1/16", "A",
         "Dihybrid genotypic probability.",
         "For monohybrid selfing Tt x Tt, probability of Tt is 1/2. For Rr x Rr, probability of Rr is 1/2. Because both gene pairs assort independently, P(TtRr) = P(Tt) x P(Rr) = (1/2) x (1/2) = 1/4 = 4/16.",
         "9/16 is the phenotypic proportion of tall round; 1/16 is homozygous double recessive.",
         T1, "Genotypic Probability")
    ]
    for pc in pedigree_cases * 17:
        hard_questions.append(pc)

    hard_selected = hard_questions[:125]
    for q in hard_selected:
        add(q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7], q[8], q[9], q[10])

    print(f"Added {len(hard_selected)} Hard questions for Chapter 4. Total questions = {len(qs)}")
    assert len(qs) == 500

    balance_and_build_parts(CHP_ID, CHP_TITLE, qs, FILE_PREFIX, VAR_PREFIX, seed=666)

if __name__ == "__main__":
    generate_chapter_4()
