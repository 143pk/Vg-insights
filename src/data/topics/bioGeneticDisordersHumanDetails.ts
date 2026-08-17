import { DetailedTopicContent } from '../../types/neet';

export const bioGeneticDisordersHumanDetails: DetailedTopicContent = {
  topicId: "bio-genetic-disorders-human",
  topicName: "Human Genetic Disorders (Mendelian & Chromosomal)",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Principles of Inheritance and Variation",

  whatIsThisTopic: "Comprehensive human genetics including Pedigree Analysis (symbols, patterns & problem solving), Mendelian single-gene disorders (Sickle-Cell Anaemia, Thalassemia, Phenylketonuria, Cystic Fibrosis, Haemophilia, Colour Blindness), Mutation types (Point vs Frameshift, Mutagens), and Chromosomal Aneuploidies (Down's Syndrome Trisomy 21, Klinefelter's Syndrome 47-XXY, Turner's Syndrome 45-XO).",

  basicIdea: [
    "Pedigree Analysis is the systematic study of the transmission of inherited traits across multiple generations of a human family, utilizing standard international symbols to trace disease genotypes and risk of transmission.",
    "Human genetic disorders are broadly classified into two categories: (1) Mendelian Disorders, caused by single-gene alterations that follow Mendelian transmission patterns, and (2) Chromosomal Disorders, caused by the absence, excess, or abnormal arrangement of one or more whole chromosomes.",
    "Sickle-Cell Anaemia is an autosomal recessive disorder caused by a single point mutation (transversion) in the 6th codon of the β-globin gene (GAG → GUG), substituting Glutamic Acid with Valine.",
    "Thalassemia is an autosomal recessive QUANTITATIVE disorder involving reduced rate of synthesis of globin chains (α-thalassemia on Chromosome 16, β-thalassemia on Chromosome 11), unlike Sickle-Cell Anemia which is a QUALITATIVE defect.",
    "Phenylketonuria (PKU) is an autosomal recessive inborn error of metabolism on Chromosome 12 caused by the deficiency of Phenylalanine Hydroxylase (PAH), leading to accumulation of toxic phenylpyruvic acid and mental retardation.",
    "Mutations are sudden heritable changes in the DNA sequence; Point mutations alter a single base pair, while Frameshift mutations insert or delete 1–2 nucleotides, shifting the entire downstream triplet reading frame.",
    "Chromosomal disorders arise due to meiotic non-disjunction during gametogenesis leading to Aneuploidy: Down's Syndrome (Trisomy 21, 2n+1 = 47), Klinefelter's Syndrome (Male 44+XXY = 47), and Turner's Syndrome (Female 44+XO = 45)."
  ],

  importantTerms: [
    {
      term: "Pedigree Analysis",
      definition: "The study of the inheritance of a particular trait across several generations of a family tree, using standard genealogical symbols to deduce genotypes and inheritance modes.",
      neetNote: "Essential method in human genetics because controlled experimental breeding crosses cannot be performed in humans."
    },
    {
      term: "Mendelian Disorder",
      definition: "A genetic disorder determined primarily by mutation or alteration in a single gene locus, inherited according to Mendelian principles (e.g., Sickle-cell anemia, Thalassemia, PKU, Haemophilia).",
      neetNote: "Can be Autosomal Dominant, Autosomal Recessive, X-linked Dominant, or X-linked Recessive."
    },
    {
      term: "Point Mutation",
      definition: "A gene mutation that occurs due to a change, substitution, or transversion of a single base pair in the DNA sequence (e.g., GAG to GUG in Sickle-cell anemia).",
      neetNote: "Changes a single codon and at most one amino acid in the resulting polypeptide."
    },
    {
      term: "Frameshift Mutation",
      definition: "A mutation caused by the insertion or deletion of one or two nucleotides in a protein-coding DNA sequence, completely altering the reading frame of all triplet codons downstream from that point.",
      neetNote: "Insertion or deletion of three nucleotides (or multiples of 3) adds or removes whole amino acids without shifting the downstream reading frame."
    },
    {
      term: "Aneuploidy",
      definition: "A condition in which a cell has an abnormal number of chromosomes due to the gain or loss of one or two individual chromosomes caused by meiotic non-disjunction (e.g., 2n + 1 Trisomy or 2n - 1 Monosomy).",
      neetNote: "Contrasts with Polyploidy, which is the gain of an entire additional set of chromosomes (3n, 4n)."
    },
    {
      term: "Meiotic Non-Disjunction",
      definition: "The failure of paired homologous chromosomes to separate during Anaphase I of meiosis, or the failure of sister chromatids to separate during Anaphase II, producing gametes with n+1 or n-1 chromosomes.",
      neetNote: "Primary cytological cause of Down, Klinefelter, and Turner syndromes."
    },
    {
      term: "Gynaecomastia",
      definition: "The development of prominent breast tissue in genetic males, a hallmark clinical feature of Klinefelter's syndrome (44 + XXY).",
      neetNote: "High-frequency diagnostic question in NEET Biology."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Pedigree Analysis — Standard Symbols & Pattern Identification Rules",
      paragraphs: [
        "In human genetics, controlled breeding experiments (like those conducted in pea plants or fruit flies) are impossible due to ethical constraints, long generation times, and small family sizes. Geneticists instead analyse the history of traits within existing families over multiple generations — a technique termed Pedigree Analysis.",
        "Standard NCERT Pedigree Symbols:",
        "1. Unshaded Square = Normal Male; Unshaded Circle = Normal Female; Unshaded Diamond = Sex unspecified.",
        "2. Solid / Fully Shaded Symbol = Affected individual expressing the trait.",
        "3. Horizontal line between Male and Female = Mating / Marriage.",
        "4. Double Horizontal line between Male and Female = Consanguineous mating (mating between close blood relatives).",
        "5. Vertical line extending from mating line = Offspring generation, arranged left-to-right in birth order.",
        "6. Symbol with a number inside (e.g., 5) = Five unaffected offspring.",
        "7. Symbol with a diagonal slash = Deceased individual.",
        "Systematic Rules to Identify Inheritance Modes in NEET Pedigree Problems:",
        "• Autosomal Dominant (e.g., Myotonic Dystrophy, Huntington's Chorea):",
        "(a) Trait appears in EVERY generation without skipping (vertical transmission).",
        "(b) Every affected child has at least one affected parent.",
        "(c) Unaffected parents produce ONLY unaffected children ($aa \\times aa \\to aa$).",
        "(d) Equal distribution among males and females.",
        "• Autosomal Recessive (e.g., Sickle-Cell Anemia, Thalassemia, PKU, Cystic Fibrosis):",
        "(a) Trait frequently SKIPS generations (horizontal transmission).",
        "(b) Unaffected heterozygous carrier parents ($Aa \\times Aa$) can produce affected children (25% risk).",
        "(c) If both parents are affected ($aa \\times aa$), 100% of children MUST be affected.",
        "(d) Both males and females are affected with equal probability.",
        "• X-Linked Recessive (e.g., Haemophilia, Red-Green Colour Blindness):",
        "(a) Shows classic criss-cross inheritance (carrier mother transmits to sons).",
        "(b) Affected males are much more frequent than affected females.",
        "(c) An affected female MUST have an affected father ($X^d Y$) and at least a carrier mother ($X^D X^d$).",
        "(d) NEVER shows father-to-son transmission (father transmits Y chromosome to sons)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="650" height="340" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="325" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Standard Pedigree Symbols &amp; Sample Inheritance Tree</text>
          
          <!-- Symbol Key Box -->
          <g transform="translate(30, 40)">
            <rect width="590" height="90" fill="#ffffff" rx="8" stroke="#cbd5e1"/>
            <text x="295" y="18" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">STANDARD NCERT PEDIGREE SYMBOLS</text>
            
            <!-- Male Normal -->
            <rect x="25" y="32" width="22" height="22" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="36" y="70" fill="#475569" font-size="10" text-anchor="middle">Male</text>
            
            <!-- Female Normal -->
            <circle cx="95" cy="43" r="11" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="95" y="70" fill="#475569" font-size="10" text-anchor="middle">Female</text>
            
            <!-- Sex Unspecified -->
            <polygon points="155,32 166,43 155,54 144,43" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="155" y="70" fill="#475569" font-size="9" text-anchor="middle">Unspecified</text>
            
            <!-- Affected Male -->
            <rect x="215" y="32" width="22" height="22" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
            <text x="226" y="70" fill="#991b1b" font-size="10" text-anchor="middle">Affected ♂</text>
            
            <!-- Affected Female -->
            <circle cx="285" cy="43" r="11" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
            <text x="285" y="70" fill="#991b1b" font-size="10" text-anchor="middle">Affected ♀</text>
            
            <!-- Mating line -->
            <rect x="345" y="35" width="16" height="16" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <line x1="361" y1="43" x2="385" y2="43" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="393" cy="43" r="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="370" y="70" fill="#475569" font-size="10" text-anchor="middle">Mating</text>
            
            <!-- Consanguineous Mating -->
            <rect x="430" y="35" width="16" height="16" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <line x1="446" y1="41" x2="470" y2="41" stroke="#0f172a" stroke-width="1.5"/>
            <line x1="446" y1="45" x2="470" y2="45" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="478" cy="43" r="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="455" y="70" fill="#475569" font-size="9" text-anchor="middle">Consanguineous</text>

            <!-- 5 Unaffected -->
            <polygon points="545,32 556,43 545,54 534,43" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="545" y="47" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">5</text>
            <text x="545" y="70" fill="#475569" font-size="9" text-anchor="middle">5 Unaffected</text>
          </g>

          <!-- Sample Pedigree Tree (Autosomal Recessive: Skips Gen) -->
          <g transform="translate(60, 145)">
            <rect width="530" height="175" fill="#f0fdf4" rx="8" stroke="#86efac"/>
            <text x="265" y="20" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">SAMPLE PEDIGREE: Autosomal Recessive (e.g. Sickle Cell / PKU)</text>
            
            <!-- Gen I -->
            <text x="20" y="55" fill="#64748b" font-size="12" font-weight="bold">I</text>
            <rect x="180" y="40" width="22" height="22" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="191" y="32" fill="#15803d" font-size="10" text-anchor="middle">Aa</text>
            <line x1="202" y1="51" x2="250" y2="51" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="261" cy="51" r="11" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="261" y="32" fill="#15803d" font-size="10" text-anchor="middle">Aa</text>

            <!-- Branch to Gen II -->
            <line x1="226" y1="51" x2="226" y2="80" stroke="#0f172a" stroke-width="1.5"/>
            <line x1="100" y1="80" x2="360" y2="80" stroke="#0f172a" stroke-width="1.5"/>

            <!-- Gen II -->
            <text x="20" y="115" fill="#64748b" font-size="12" font-weight="bold">II</text>
            
            <!-- Child 1: Normal Girl (AA/Aa) -->
            <line x1="100" y1="80" x2="100" y2="100" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="100" cy="111" r="11" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="100" y="135" fill="#475569" font-size="10" text-anchor="middle">II-1 (A_)</text>

            <!-- Child 2: Affected Boy (aa) -->
            <line x1="180" y1="80" x2="180" y2="100" stroke="#0f172a" stroke-width="1.5"/>
            <rect x="169" y="100" width="22" height="22" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
            <text x="180" y="135" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">II-2 (aa Affected)</text>

            <!-- Child 3: Normal Boy (A_) -->
            <line x1="270" y1="80" x2="270" y2="100" stroke="#0f172a" stroke-width="1.5"/>
            <rect x="259" y="100" width="22" height="22" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="270" y="135" fill="#475569" font-size="10" text-anchor="middle">II-3 (A_)</text>

            <!-- Child 4: Normal Girl (A_) -->
            <line x1="360" y1="80" x2="360" y2="100" stroke="#0f172a" stroke-width="1.5"/>
            <circle cx="360" cy="111" r="11" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="360" y="135" fill="#475569" font-size="10" text-anchor="middle">II-4 (A_)</text>

            <rect x="20" y="145" width="490" height="20" fill="#ffffff" rx="4"/>
            <text x="265" y="159" fill="#166534" font-size="10" font-weight="bold" text-anchor="middle">
              Observation: Unaffected Parents (I-1 &amp; I-2) produce Affected Son (II-2) → Recessive Trait!
            </text>
          </g>
        </svg>`,
        caption: "Standard NCERT pedigree symbols and step-by-step interpretation of an autosomal recessive inheritance pedigree.",
        guide: "WHAT TO OBSERVE: If two unaffected parents have an affected child, the disorder is strictly RECESSIVE, and both parents must be heterozygous carriers."
      },
      importantPoints: [
        "Unaffected parents with affected offspring = AUTOSOMAL RECESSIVE (parents are heterozygous carriers Aa).",
        "Affected parents having unaffected offspring = AUTOSOMAL DOMINANT (parents are heterozygous Aa).",
        "Affected female with normal father CANNOT be X-linked recessive (must be autosomal recessive)."
      ]
    },
    {
      heading: "2. Mendelian Disorders — Single-Gene Inborn Errors & Molecular Mechanisms",
      paragraphs: [
        "Mendelian disorders are transmitted to offspring following classical Mendelian ratios and are caused by point mutations or deletions in single specific genes.",
        "1. Sickle-Cell Anaemia (Autosomal Recessive, Chromosome 11):",
        "• Gene: $\\beta$-globin gene ($HBB$) located on human Chromosome 11.",
        "• Molecular Mutation: Point mutation (transversion substitution) at the 6th position of the $\\beta$-globin codon from $GAG$ (coding for hydrophilic Glutamic Acid) to $GUG$ (coding for hydrophobic Valine).",
        "• Pathophysiology: Under low oxygen tension ($pO_2$), mutant $Hb^S$ molecules polymerize into rigid, insoluble crystalline fiber bundles, distorting flexible biconcave disc RBCs into rigid, elongated, crescent / sickle-shaped cells.",
        "• Clinical Consequences: Sickled RBCs occlude microcapillaries (vaso-occlusive crisis), causing severe pain, tissue ischemia, infarction, and hemolytic anemia (premature RBC breakdown in spleen).",
        "• Evolutionary Significance (Heterozygote Advantage): Heterozygotes ($Hb^A Hb^S$) have the 'sickle-cell trait' and are clinically healthy while possessing natural resistance to lethal falciparum malaria (Plasmodium falciparum cannot complete its life cycle in sickling cells).",
        "2. Thalassemia (Autosomal Recessive, Quantitative Hemoglobinopathy):",
        "• Difference from Sickle-Cell: Thalassemia is a QUANTITATIVE defect (reduced rate of synthesis of globin chains), whereas Sickle-cell is a QUALITATIVE defect (synthesis of an incorrectly functioning $\\beta$-globin chain).",
        "• $\\alpha$-Thalassemia: Decreased synthesis of $\\alpha$-globin chains. Controlled by two closely linked genes $HBA1$ and $HBA2$ on Chromosome 16 (total 4 alleles). Severity is proportional to the number of deleted alleles (1 to 4). Deletion of all 4 alleles causes Hydrops Fetalis (fetal death).",
        "• $\\beta$-Thalassemia: Decreased synthesis of $\\beta$-globin chains. Controlled by a single gene $HBB$ on Chromosome 11 (2 alleles). Deletion of both alleles causes Cooley's Anemia ($\\beta$-thalassemia major), characterized by severe microcytic hypochromic anemia requiring regular lifelong blood transfusions.",
        "3. Phenylketonuria (PKU) (Autosomal Recessive Inborn Error of Metabolism, Chromosome 12):",
        "• Cause: Mutation in the gene coding for the liver enzyme Phenylalanine Hydroxylase (PAH).",
        "• Normal Pathway: Phenylalanine $\\xrightarrow{\\text{PAH}} $ Tyrosine.",
        "• In PKU: Phenylalanine accumulates and is converted by transamination into toxic Phenylpyruvic Acid and phenyl-lactate.",
        "• Clinical Manifestations (Pleiotropic): Severe mental retardation (brain toxicity), microcephaly, hypopigmentation of skin and light hair (due to lack of tyrosine, the precursor of melanin), and excretion of phenylpyruvic acid in urine due to poor kidney reabsorption.",
        "4. Cystic Fibrosis (Autosomal Recessive, Chromosome 7):",
        "• Cause: Mutation in CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) gene on Chromosome 7, causing defective chloride ion transport across epithelial surfaces.",
        "• Result: Extremely thick, viscous mucus clogs bronchial airways and pancreatic ducts, causing chronic respiratory infections and digestive malabsorption."
      ],
      tables: [
        {
          title: "Detailed Comparison of Major Mendelian Disorders in NEET UG",
          headers: ["Disorder", "Inheritance Pattern", "Gene & Chromosome", "Defective Protein / Enzyme", "Key Clinical Features"],
          rows: [
            ["Sickle-Cell Anaemia", "Autosomal Recessive", "HBB gene on Chromosome 11", "GAG → GUG (Glutamic acid → Valine at 6th codon of β-globin)", "Sickling of RBCs under low pO2, hemolytic anemia, capillary occlusion"],
            ["α-Thalassemia", "Autosomal Recessive", "HBA1 & HBA2 on Chromosome 16 (4 alleles)", "Reduced α-globin chain production", "Excess β-chains form unstable tetramers (HbH), microcytic anemia"],
            ["β-Thalassemia", "Autosomal Recessive", "HBB gene on Chromosome 11 (2 alleles)", "Reduced β-globin chain production", "Excess α-chains precipitate in erythroblasts, Cooley's anemia"],
            ["Phenylketonuria (PKU)", "Autosomal Recessive", "PAH gene on Chromosome 12", "Phenylalanine Hydroxylase deficiency", "Mental retardation, hypopigmentation, phenylpyruvic acid in urine"],
            ["Haemophilia (A/B)", "X-Linked Recessive", "X Chromosome (F8 / F9 genes)", "Clotting Factor VIII (Haemophilia A) or Factor IX (Haemophilia B)", "Impaired blood coagulation cascade, continuous bleeding from minor cuts"],
            ["Colour Blindness", "X-Linked Recessive", "X Chromosome", "Red/Green Cone Photopigment Opsin", "Failure to distinguish between red and green colours (8% males, 0.4% females)"]
          ]
        }
      ],
      importantPoints: [
        "Sickle-Cell Anemia: Transversion point mutation changing GAG to GUG (Glutamic acid → Valine at position 6 of β-globin chain).",
        "Sickle Cell is a QUALITATIVE defect; Thalassemia is a QUANTITATIVE defect.",
        "α-Thalassemia is on Chromosome 16 (4 alleles); β-Thalassemia is on Chromosome 11 (2 alleles).",
        "PKU is an inborn error of metabolism on Chromosome 12 (deficiency of Phenylalanine Hydroxylase)."
      ]
    },
    {
      heading: "3. Chromosomal Disorders — Meiotic Non-Disjunction, Aneuploidy & Syndromes",
      paragraphs: [
        "Chromosomal disorders result from the absence, excess, or abnormal structural arrangement of one or more whole chromosomes, typically caused by meiotic non-disjunction during gametogenesis.",
        "Cytological Mechanism of Aneuploidy: During Meiosis I, homologous chromosome pairs may fail to disjoin (separate) at Anaphase I, or sister chromatids may fail to separate during Anaphase II. This generates gametes with an extra chromosome ($n + 1$) or a missing chromosome ($n - 1$). Upon fertilisation with a normal haploid gamete ($n$), zygotes develop as Trisomy ($2n + 1$) or Monosomy ($2n - 1$).",
        "1. Down's Syndrome (Trisomy 21):",
        "• Discovery: First clinically described by John Langdon Down in 1866.",
        "• Cytogenetic Cause: Presence of an additional third copy of Autosome 21 (Trisomy of Chromosome 21). Total chromosomes = 47 ($45A + XX$ in females, $45A + XY$ in males).",
        "• Clinical Features:",
        "(a) Short stature with a small, round head.",
        "(b) Characteristic furrowed (fissured) tongue and constantly partially open mouth.",
        "(c) Broad palm with a distinctive single transverse palm crease (Simian crease).",
        "(d) Epicanthic eye folds and flat facial profile with depressed nasal bridge.",
        "(e) Slow physical, psychomotor, and mental development with congenital heart disease.",
        "2. Klinefelter's Syndrome (Sex Chromosome Trisomy in Males):",
        "• Cytogenetic Cause: Presence of an extra X chromosome in a genetic male due to non-disjunction ($44A + XXY$, total 47 chromosomes).",
        "• Clinical Features:",
        "(a) Overall masculine development (male habitus) with tall stature and disproportionately long legs.",
        "(b) Gynaecomastia (development of female-like breast tissue).",
        "(c) Small, atrophic testes with failure of spermatogenesis (azoospermia) resulting in complete sterility.",
        "(d) High-pitched voice and sparse body and facial hair.",
        "3. Turner's Syndrome (Sex Chromosome Monosomy in Females):",
        "• Cytogenetic Cause: Absence of one of the X chromosomes in a female ($44A + XO$, total 45 chromosomes).",
        "• Clinical Features:",
        "(a) Phenotypically female but completely sterile due to rudimentary, non-functional streak ovaries.",
        "(b) Failure of sexual maturation at puberty: lack of secondary sexual characters (underdeveloped breasts, primary amenorrhea).",
        "(c) Short stature (dwarfism) and webbed neck.",
        "(d) Broad, shield-shaped chest with widely spaced nipples and possible coarctation of aorta."
      ],
      tables: [
        {
          title: "Master Comparison of Major Chromosomal Disorders in Humans",
          headers: ["Feature", "Down's Syndrome", "Klinefelter's Syndrome", "Turner's Syndrome"],
          rows: [
            ["Chromosome Aberration", "Trisomy of Autosome 21 (2n + 1)", "Trisomy of Allosome (XXY in males, 2n + 1)", "Monosomy of Allosome (XO in females, 2n - 1)"],
            ["Total Chromosome Count", "47 chromosomes", "47 chromosomes", "45 chromosomes"],
            ["Karyotype Expression", "45A + XX (♀) or 45A + XY (♂)", "44A + XXY (♂)", "44A + XO (♀)"],
            ["Phenotypic Sex", "Male or Female", "Male (with feminine features)", "Female (sterile)"],
            ["Gonads & Fertility", "Fertile / variable", "Sterile (Azoospermia, small testes)", "Sterile (Rudimentary streak ovaries)"],
            ["Diagnostic Clinical Hallmarks", "Furrowed tongue, open mouth, Simian palm crease, flat face", "Gynaecomastia, tall stature, sparse hair", "Webbed neck, short stature, shield chest, lack of puberty"]
          ]
        }
      ],
      importantPoints: [
        "Down's Syndrome = Trisomy 21 (47, +21). Described by Langdon Down (1866).",
        "Klinefelter's Syndrome = 44A + XXY (47 chromosomes, sterile male with gynaecomastia).",
        "Turner's Syndrome = 44A + XO (45 chromosomes, sterile female with rudimentary ovaries and webbed neck).",
        "Aneuploidy is caused by meiotic non-disjunction of chromosomes."
      ]
    },
    {
      heading: "4. Step-by-Step Genetics Problem Solving & Pedigree Evaluation",
      paragraphs: [
        "Solving human pedigree and probability problems requires systematic allele tracking."
      ],
      examples: [
        {
          problem: "Both husband and wife have normal vision, but their fathers were both colour blind. What is the probability that their first child will be a colour-blind boy?",
          given: "Wife's father is colour blind (X^c Y) → Wife is an obligate carrier (X^C X^c). Husband has normal vision (X^C Y) (husband's father being colour blind passed Y to husband, so husband is normal).",
          stepByStep: [
            "Step 1: Determine parental genotypes: Wife = X^C X^c; Husband = X^C Y.",
            "Step 2: Gametes produced: Wife = 1/2 X^C, 1/2 X^c; Husband = 1/2 X^C, 1/2 Y.",
            "Step 3: Punnett square combinations:",
            "• X^C X^C (Normal girl, 25%)",
            "• X^C X^c (Carrier girl, 25%)",
            "• X^C Y (Normal boy, 25%)",
            "• X^c Y (Colour-blind boy, 25%)",
            "Step 4: Probability of having a colour-blind boy = 1/4 (25%)."
          ],
          answer: "The probability is 1/4 (or 25%)."
        },
        {
          problem: "A couple who are both heterozygous carriers for Sickle-cell anemia (HbA HbS) plan to have three children. What is the probability that all three children will have normal hemoglobin (unaffected)?",
          given: "Parents: HbA HbS × HbA HbS. For each child: P(Normal: HbA HbA or HbA HbS) = 3/4; P(Affected: HbS HbS) = 1/4.",
          stepByStep: [
            "Step 1: Determine the probability of an unaffected child in each single birth = 3/4.",
            "Step 2: Use the Product Rule for three independent successive births: P(All 3 unaffected) = (3/4) × (3/4) × (3/4) = 27/64.",
            "Step 3: 27/64 = 0.421875 (or ~42.2%)."
          ],
          answer: "Probability is 27/64 (approx. 42.2%)."
        }
      ]
    }
  ],

  formulae: [
    {
      title: "Aneuploidy Chromosome Calculations",
      formula: "\\text{Monosomy} = 2n - 1, \\quad \\text{Trisomy} = 2n + 1, \\quad \\text{Nullisomy} = 2n - 2",
      meaning: "Quantifies numerical chromosome changes in human aneuploid conditions.",
      symbols: "2n = 46 \\text{ (normal human diploid count)}",
      unit: "chromosomes",
      conditions: "Occurs via meiotic non-disjunction.",
      whenToUse: "Down & Klinefelter: 2n+1 = 47; Turner: 2n-1 = 45."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 650 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
      <rect width="650" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="325" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Chromosomal vs Mendelian Genetic Disorders</text>
      
      <!-- Box 1: Down Syndrome -->
      <g transform="translate(30, 45)">
        <rect width="180" height="250" fill="#eff6ff" rx="8" stroke="#93c5fd"/>
        <text x="90" y="24" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">DOWN SYNDROME</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#bfdbfe"/>
        
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Karyotype:</text>
        <text x="15" y="74" fill="#2563eb" font-size="10">Trisomy 21 (2n+1 = 47)</text>
        <text x="15" y="88" fill="#2563eb" font-size="10">45A + XX or 45A + XY</text>
        
        <text x="15" y="112" fill="#1e293b" font-size="11" font-weight="bold">Clinical Signs:</text>
        <text x="15" y="128" fill="#475569" font-size="10">• Furrowed tongue</text>
        <text x="15" y="142" fill="#475569" font-size="10">• Partially open mouth</text>
        <text x="15" y="156" fill="#475569" font-size="10">• Simian palm crease</text>
        <text x="15" y="170" fill="#475569" font-size="10">• Congenital heart defect</text>
        
        <text x="15" y="196" fill="#1e293b" font-size="11" font-weight="bold">Origin:</text>
        <text x="15" y="210" fill="#1e40af" font-size="10">Langdon Down (1866)</text>
      </g>

      <!-- Box 2: Klinefelter Syndrome -->
      <g transform="translate(235, 45)">
        <rect width="180" height="250" fill="#fdf4ff" rx="8" stroke="#f0abfc"/>
        <text x="90" y="24" fill="#86198f" font-size="12" font-weight="bold" text-anchor="middle">KLINEFELTER SYNDROME</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#f5d0fe"/>
        
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Karyotype:</text>
        <text x="15" y="74" fill="#a21caf" font-size="10">44A + XXY (2n+1 = 47)</text>
        <text x="15" y="88" fill="#a21caf" font-size="10">Male with extra X</text>
        
        <text x="15" y="112" fill="#1e293b" font-size="11" font-weight="bold">Clinical Signs:</text>
        <text x="15" y="128" fill="#86198f" font-size="10" font-weight="bold">• Gynaecomastia (breasts)</text>
        <text x="15" y="142" fill="#475569" font-size="10">• Tall stature, long legs</text>
        <text x="15" y="156" fill="#475569" font-size="10">• Sparse body hair</text>
        <text x="15" y="170" fill="#475569" font-size="10">• Small atrophic testes</text>
        
        <text x="15" y="196" fill="#1e293b" font-size="11" font-weight="bold">Fertility:</text>
        <text x="15" y="210" fill="#86198f" font-size="10" font-weight="bold">Sterile male (Azoospermia)</text>
      </g>

      <!-- Box 3: Turner Syndrome -->
      <g transform="translate(440, 45)">
        <rect width="180" height="250" fill="#fff1f2" rx="8" stroke="#fecdd3"/>
        <text x="90" y="24" fill="#9f1239" font-size="12" font-weight="bold" text-anchor="middle">TURNER SYNDROME</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#fda4af"/>
        
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Karyotype:</text>
        <text x="15" y="74" fill="#be123c" font-size="10">44A + XO (2n-1 = 45)</text>
        <text x="15" y="88" fill="#be123c" font-size="10">Female monosomy</text>
        
        <text x="15" y="112" fill="#1e293b" font-size="11" font-weight="bold">Clinical Signs:</text>
        <text x="15" y="128" fill="#475569" font-size="10">• Short stature</text>
        <text x="15" y="142" fill="#475569" font-size="10">• Webbed neck</text>
        <text x="15" y="156" fill="#475569" font-size="10">• Shield-shaped chest</text>
        <text x="15" y="170" fill="#475569" font-size="10">• Lack secondary sex traits</text>
        
        <text x="15" y="196" fill="#1e293b" font-size="11" font-weight="bold">Fertility:</text>
        <text x="15" y="210" fill="#9f1239" font-size="10" font-weight="bold">Sterile female (Streak ovaries)</text>
      </g>
    </svg>`,
    caption: "Master clinical comparison of Down's Syndrome (Trisomy 21), Klinefelter's Syndrome (47, XXY), and Turner's Syndrome (45, XO)."
  },

  neetImportantPoints: [
    "Sickle cell anemia is caused by a point mutation at the 6th codon of the β-globin gene (GAG to GUG), replacing Glutamic acid with Valine.",
    "Sickle cell anemia is a QUALITATIVE defect; Thalassemia is a QUANTITATIVE defect in globin chain synthesis.",
    "α-Thalassemia is controlled by 2 genes (HBA1 and HBA2, 4 alleles) on Chromosome 16; β-Thalassemia is on Chromosome 11.",
    "Phenylketonuria (PKU) is an autosomal recessive metabolic disorder on Chromosome 12 caused by Phenylalanine Hydroxylase deficiency.",
    "Down's Syndrome = Trisomy 21 (2n + 1 = 47), described by Langdon Down in 1866.",
    "Klinefelter's Syndrome = 44A + XXY (47 chromosomes, sterile male with gynaecomastia).",
    "Turner's Syndrome = 44A + XO (45 chromosomes, sterile female with rudimentary ovaries and webbed neck)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Sickle cell anemia and Thalassemia are both caused by the same type of genetic defect.",
      correctFact: "Sickle cell anemia is a QUALITATIVE defect (normal quantity of an abnormal mutant β-globin chain is produced). Thalassemia is a QUANTITATIVE defect (reduced quantity of normal globin chains is produced).",
      whyItMattersForNEET: "One of the most frequently asked distinction questions in NEET Biology."
    },
    {
      commonConfusion: "Turner's syndrome patients have 47 chromosomes like Down's and Klinefelter's syndrome.",
      correctFact: "Turner's syndrome is a MONOSOMY (2n - 1 = 45 chromosomes, 44A + XO). Down's and Klinefelter's are TRISOMIES (2n + 1 = 47 chromosomes).",
      whyItMattersForNEET: "Direct karyotype matching MCQ trap in NEET."
    },
    {
      commonConfusion: "An affected father can transmit an X-linked recessive disease to his son.",
      correctFact: "A father transmits his Y chromosome to his sons and his X chromosome to his daughters. Therefore, father-to-son transmission of X-linked traits NEVER occurs.",
      whyItMattersForNEET: "Crucial for eliminating incorrect options in pedigree analysis."
    }
  ],

  quickRevision: [
    "Pedigree: Solid = Affected | Square = Male | Circle = Female | Double line = Consanguineous.",
    "Sickle Cell Anemia: Chr 11, GAG → GUG at 6th codon of β-globin (Glu → Val), Qualitative defect.",
    "Thalassemia: Quantitative defect (α on Chr 16 with 4 alleles; β on Chr 11 with 2 alleles).",
    "PKU: Chr 12, Phenylalanine Hydroxylase deficiency, Phenylpyruvic acid toxicity, Mental retardation.",
    "Aneuploidy: Non-disjunction at Anaphase.",
    "Down Syndrome: Trisomy 21 (47, +21), Langdon Down (1866), Simian crease, furrowed tongue.",
    "Klinefelter Syndrome: 44A + XXY (47), Sterile male, Gynaecomastia, Tall stature.",
    "Turner Syndrome: 44A + XO (45), Monosomy, Sterile female, Streak ovaries, Webbed neck."
  ],

  practiceQuestions: [
    {
      question: "Which of the following statements is NOT correct regarding Sickle-cell anaemia?",
      options: [
        "It is controlled by a single pair of alleles, HbA and HbS",
        "It is caused by the substitution of Glutamic acid by Valine at the sixth position of the beta globin chain",
        "The mutant hemoglobin molecule undergoes polymerization under high oxygen tension causing distortion of RBCs",
        "Heterozygous individuals (HbA HbS) appear unaffected but act as carriers"
      ],
      correctAnswer: 2,
      explanation: "The mutant hemoglobin molecule (HbS) undergoes polymerization and crystalline distortion under LOW oxygen tension (hypoxia), NOT under high oxygen tension. Therefore, statement (3) is incorrect.",
      difficulty: "Medium",
      conceptTested: "Molecular mechanism of Sickle-cell anaemia"
    },
    {
      question: "A woman with normal vision whose father was colour blind marries a colour-blind man. What percentage of their female children will be colour blind?",
      options: [
        "0%",
        "25%",
        "50%",
        "100%"
      ],
      correctAnswer: 2,
      explanation: "The woman is a carrier (X^C X^c) because her father was colour blind (X^c Y). Her husband is colour blind (X^c Y). Cross: X^C X^c × X^c Y. Female children genotypes are: X^C X^c (Carrier girl, 50%) and X^c X^c (Colour-blind girl, 50%). Therefore, 50% of the female children will be colour blind.",
      difficulty: "Medium",
      conceptTested: "X-linked recessive inheritance cross analysis"
    },
    {
      question: "Match the genetic disorders in Column I with their corresponding chromosomal features in Column II:\nColumn I:\n(A) Down's syndrome\n(B) Turner's syndrome\n(C) Klinefelter's syndrome\n(D) Sickle-cell anemia\nColumn II:\n(1) 44A + XO\n(2) Trisomy of chromosome 21\n(3) Point mutation on chromosome 11\n(4) 44A + XXY",
      options: [
        "A-2, B-1, C-4, D-3",
        "A-2, B-4, C-1, D-3",
        "A-1, B-2, C-4, D-3",
        "A-4, B-1, C-2, D-3"
      ],
      correctAnswer: 0,
      explanation: "Down's syndrome = Trisomy 21 (A-2); Turner's syndrome = 44A + XO (B-1); Klinefelter's syndrome = 44A + XXY (C-4); Sickle-cell anemia = Point mutation on chromosome 11 (D-3).",
      difficulty: "Easy",
      conceptTested: "Karyotypes and molecular basis of human genetic disorders"
    }
  ],

  pyqs: [
    {
      exam: "NEET UG",
      year: 2023,
      question: "Broad palm with single palm crease is visible in a person suffering from:",
      options: [
        "Down's syndrome",
        "Turner's syndrome",
        "Klinefelter's syndrome",
        "Thalassemia"
      ],
      correctAnswer: 0,
      explanation: "Down's syndrome (Trisomy 21) is clinically characterized by a broad palm with a characteristic single transverse palm crease (simian crease), furrowed tongue, partially open mouth, and round face.",
      conceptTested: "Clinical features of Down's syndrome",
      verificationSource: "NEET UG 2023 Official Paper & NCERT Class 12 Biology Chapter 5"
    },
    {
      exam: "NEET UG",
      year: 2022,
      question: "If a female has 45 chromosomes with XO abnormality, she suffers from:",
      options: [
        "Down's syndrome",
        "Turner's syndrome",
        "Klinefelter's syndrome",
        "Edward's syndrome"
      ],
      correctAnswer: 1,
      explanation: "Turner's syndrome is caused by the monosomy of the X chromosome in females, resulting in a karyotype of 44A + XO (total 45 chromosomes). Patients are sterile females with rudimentary streak ovaries and webbed neck.",
      conceptTested: "Karyotype of Turner's syndrome",
      verificationSource: "NEET UG 2022 Official Paper & NCERT Class 12"
    },
    {
      exam: "NEET UG",
      year: 2020,
      question: "Select the correct match:\n(1) Sickle cell anemia - Autosomal recessive trait on chromosome 11\n(2) Thalassemia - X-linked recessive\n(3) Haemophilia - Y-linked\n(4) Phenylketonuria - Autosomal dominant trait",
      options: [
        "1",
        "2",
        "3",
        "4"
      ],
      correctAnswer: 0,
      explanation: "Sickle cell anemia is an autosomal recessive disorder caused by a mutation in the beta-globin gene on chromosome 11 (Correct match). Thalassemia and PKU are autosomal recessive, and Haemophilia is X-linked recessive.",
      conceptTested: "Classification and chromosomes of Mendelian disorders",
      verificationSource: "NEET UG 2020 Official Paper & NCERT Biology"
    },
    {
      exam: "NEET UG",
      year: 2019,
      question: "Which of the following genetic disorders is an inborn error of metabolism and also an example of pleiotropy?",
      options: [
        "Haemophilia",
        "Phenylketonuria",
        "Sickle cell anemia",
        "Thalassemia"
      ],
      correctAnswer: 1,
      explanation: "Phenylketonuria (PKU) is an inborn error of metabolism caused by mutation in the gene for phenylalanine hydroxylase enzyme on chromosome 12. It exemplifies pleiotropy because a single gene defect leads to mental retardation, hypopigmentation of skin, and hair colour reduction.",
      conceptTested: "PKU as an inborn error of metabolism and pleiotropy",
      verificationSource: "NEET UG 2019 Official Paper & NCERT Class 12 Biology"
    },
    {
      exam: "NEET UG",
      year: 2016,
      question: "If a colour-blind man marries a woman who is homozygous for normal colour vision, the probability of their son being colour blind is:",
      options: [
        "0",
        "0.5",
        "0.75",
        "1"
      ],
      correctAnswer: 0,
      explanation: "Colour-blind man (X^c Y) × Normal homozygous woman (X^C X^C). All sons inherit normal X^C from the mother and Y from the father (X^C Y). Thus, the probability of their son being colour blind is 0 (0%).",
      conceptTested: "X-linked recessive inheritance probability in sons",
      verificationSource: "NEET UG 2016 Official Paper & NCERT Class 12"
    }
  ]
};
