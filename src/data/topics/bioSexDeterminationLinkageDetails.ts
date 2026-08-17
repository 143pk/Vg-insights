import { DetailedTopicContent } from '../../types/neet';

export const bioSexDeterminationLinkageDetails: DetailedTopicContent = {
  topicId: "bio-sex-determination-linkage",
  topicName: "Sex Determination & Linkage/Recombination",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Principles of Inheritance and Variation",

  whatIsThisTopic: "Chromosomal Theory of Inheritance (Sutton & Boveri), T.H. Morgan's Drosophila experiments, Linkage and Recombination (Cross A vs Cross B), Genetic Mapping (Alfred Sturtevant, 1% = 1 cM), Sex Determination mechanisms (XX-XY, XX-XO, ZW-ZZ, Honeybee Haplodiploidy), and Sex-Linked Criss-Cross Inheritance (Haemophilia & Colour Blindness).",

  basicIdea: [
    "Walter Sutton and Theodor Boveri (1902) formulated the Chromosomal Theory of Inheritance, noting that the behavior of chromosomes during meiosis parallels the behavior of Mendelian factors.",
    "Thomas Hunt Morgan experimentally verified the Chromosomal Theory using the fruit fly Drosophila melanogaster, earning the title 'Father of Experimental Genetics'.",
    "Linkage is the physical association of two or more genes on the same chromosome (syntenic genes) that tend to be inherited together without independent assortment.",
    "Recombination is the generation of non-parental gene combinations produced by crossing over during Pachytene of Prophase I, mediated by the enzyme Recombinase.",
    "Recombination frequency is directly proportional to the physical distance between genes on a chromosome. Alfred Sturtevant used this principle to construct the first genetic chromosome maps (1% recombination = 1 centimorgan / map unit).",
    "Sex determination systems in animals include Male Heterogamety (XX-XY in humans/Drosophila, XX-XO in grasshoppers), Female Heterogamety (ZW-ZZ in birds, ZO-ZZ in moths), and Haplodiploidy in Honeybees (Females 2n=32 fertilized, Males n=16 unfertilized via parthenogenesis).",
    "Sex-linked (X-linked) recessive traits (Haemophilia, Colour Blindness) display criss-cross inheritance (father → carrier daughter → grandson) and are far more common in hemizygous males."
  ],

  importantTerms: [
    {
      term: "Chromosomal Theory of Inheritance",
      definition: "The unifying theory proposed by Sutton and Boveri (1902) stating that genes are located at specific loci on chromosomes, and the segregation and independent assortment of chromosomes during meiosis accounts for Mendelian inheritance patterns.",
      neetNote: "Verified experimentally by T.H. Morgan in Drosophila melanogaster."
    },
    {
      term: "Linkage",
      definition: "The physical association of two or more genes located on the same chromosome that tend to remain together during gametogenesis and fail to assort independently.",
      neetNote: "Linked genes violate Mendel's Law of Independent Assortment and do not produce a 9:3:3:1 ratio."
    },
    {
      term: "Recombination",
      definition: "The process by which non-parental allele combinations are generated in offspring through crossing over between non-sister chromatids of homologous chromosomes during meiosis.",
      neetNote: "Occurs during Pachytene stage of Prophase I, mediated by the Recombinase enzyme complex."
    },
    {
      term: "Genetic Map / Linkage Map",
      definition: "A linear diagram representing the relative chromosomal positions and distances between linked genes based on their recombination frequencies, devised by Alfred Sturtevant.",
      neetNote: "1% Recombination Frequency = 1 Centimorgan (cM) = 1 Map Unit (m.u.)."
    },
    {
      term: "Male Heterogamety",
      definition: "A sex-determination mechanism where the male produces two distinct types of gametes with respect to sex chromosomes (e.g., 50% X-bearing and 50% Y-bearing sperms in humans/Drosophila, or X-bearing and null-bearing in grasshoppers).",
      neetNote: "Seen in Humans (XY), Drosophila (XY), and Grasshoppers (XO)."
    },
    {
      term: "Female Heterogamety",
      definition: "A sex-determination mechanism where the female produces two distinct types of gametes (e.g., 50% Z-bearing and 50% W-bearing eggs in birds).",
      neetNote: "Seen in Birds (ZW females, ZZ males) and Butterflies (ZO females, ZZ males)."
    },
    {
      term: "Haplodiploidy",
      definition: "A sex determination system in honeybees, ants, and wasps where sex is determined by the number of chromosome sets: diploid females (2n = 32) develop from fertilized eggs, while haploid males/drones (n = 16) develop from unfertilized eggs via parthenogenesis.",
      neetNote: "Drones produce sperms by MITOSIS and have no father and cannot have sons."
    },
    {
      term: "Criss-Cross Inheritance (Skip-Generation)",
      definition: "The transmission of an X-linked recessive character from an affected father to his grandsons through his phenotypically normal carrier daughters.",
      neetNote: "Classic hallmark of X-linked recessive disorders like Haemophilia and Red-Green Colour Blindness."
    },
    {
      term: "Hemizygous",
      definition: "A genetic condition in diploid organisms having only one copy of a particular gene locus, such as X-linked genes in human XY males.",
      neetNote: "Explains why recessive X-linked disorders are expressed directly in males without a second allele to mask them."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Chromosomal Theory of Inheritance — Sutton, Boveri & Meiotic Parallelism",
      paragraphs: [
        "By 1900, advancements in light microscopy allowed scientists to directly observe the cellular stages of mitosis and meiosis. In 1902, Walter Sutton (USA) and Theodor Boveri (Germany) independently recognized that the behavior of chromosomes during meiosis parallels the behavior of Mendel's particulate 'factors' (genes).",
        "Sutton united the knowledge of chromosomal segregation during meiosis with Mendelian principles and termed it the Chromosomal Theory of Inheritance.",
        "Detailed Parallelism Between Chromosomes and Mendelian Factors:",
        "1. Occurrence: Chromosomes occur in homologous pairs in somatic cells; Mendelian factors (alleles) occur in pairs in somatic cells.",
        "2. Segregation: Homologous chromosomes separate from each other during Anaphase I of meiosis such that only one chromosome enters a gamete; Alleles of a gene pair segregate during gamete formation so that only one allele enters a gamete.",
        "3. Independent Assortment: Independent pairs of non-homologous chromosomes orient and segregate independently of each other at the metaphase plate during Meiosis I; One pair of Mendelian factors assorts independently of another pair located on different chromosomes."
      ],
      tables: [
        {
          title: "Comparison Between Chromosome Behaviour and Mendelian Gene Behaviour",
          headers: ["Feature", "Chromosomes (Sutton & Boveri)", "Genes / Factors (Mendel)"],
          rows: [
            ["Occurrence in Somatic Cells", "Occur in homologous pairs (2n)", "Occur in pairs (alleles, e.g., Tt)"],
            ["Behaviour at Gamete Formation", "Segregate during Anaphase I so only one chromosome per pair enters a gamete", "Segregate during gametogenesis so only one allele enters a gamete"],
            ["Independent Behaviour", "Independent pairs of non-homologous chromosomes segregate independently", "One pair of alleles assorts independently of another pair (if on different chromosomes)"],
            ["Physical Nature", "Visible microscopic structures made of DNA and histone proteins", "Specific nucleotide sequences located at fixed loci on chromosomes"]
          ]
        }
      ],
      importantPoints: [
        "Chromosomal Theory of Inheritance was proposed by Sutton and Boveri in 1902.",
        "Chromosomes segregate during Anaphase I of meiosis, directly driving Mendelian segregation of alleles.",
        "Thomas Hunt Morgan experimentally verified the theory in Drosophila melanogaster."
      ]
    },
    {
      heading: "2. Morgan's Drosophila Experiments — The Cinderella of Genetics",
      paragraphs: [
        "Thomas Hunt Morgan chose the fruit fly, Drosophila melanogaster, for his groundbreaking genetic research, earning him the Nobel Prize in Physiology or Medicine in 1933 and the title 'Father of Experimental Genetics'.",
        "Why Drosophila melanogaster is the Ideal Model Organism for Genetics:",
        "1. Simple Synthetic Medium: Can be easily cultured and bred in simple glass bottles on an inexpensive synthetic medium made of cornmeal, molasses, and yeast.",
        "2. Short Life Cycle: Completes its entire developmental cycle (egg → larva → pupa → adult) in about 2 weeks (10–14 days), allowing many generations to be studied rapidly.",
        "3. High Prolificacy: A single mating between a male and female produces hundreds of offspring flies.",
        "4. Clear Sexual Dimorphism: Males and females are easily distinguished: the female is noticeably larger with a pointed ovipositor; the male is smaller, has a darker rounded abdomen, and possesses distinctive sex combs on the first pair of legs.",
        "5. Observable Hereditary Variations: Displays numerous sharp morphological variations (e.g., red eyes vs white eyes, brown body vs yellow body, normal wings vs miniature wings) easily visible under a low-power laboratory stereomicroscope.",
        "6. Small Chromosome Number: Possesses only 4 pairs of chromosomes ($2n = 8$: 3 pairs of autosomes and 1 pair of sex chromosomes, $XX$ or $XY$)."
      ],
      importantPoints: [
        "Drosophila has 2n = 8 chromosomes (4 pairs).",
        "Life cycle is completed in ~2 weeks (14 days).",
        "Clear sexual dimorphism: Female is larger; Male is smaller with sex combs."
      ]
    },
    {
      heading: "3. Linkage, Recombination & Morgan's Dihybrid Crosses (Cross A vs Cross B)",
      paragraphs: [
        "When Morgan carried out several dihybrid crosses in Drosophila to study sex-linked genes on the X chromosome, he observed that the F2 phenotypic ratios deviated significantly from Mendel's expected 9:3:3:1 ratio.",
        "Morgan's Explanation: The two genes did not segregate independently because they were physically located on the same chromosome (X chromosome). He coined the term 'Linkage' to describe the physical association of genes on the same chromosome.",
        "Parental vs Recombinant Progeny:",
        "• Parental Types: Offspring that inherit the exact combinations of traits present in the P generation.",
        "• Recombinants: Offspring that display new, non-parental combinations of traits produced by crossing over (chiasma formation) during meiosis.",
        "Morgan's Two Iconic Dihybrid Crosses on the X Chromosome:",
        "1. Cross A (Body Colour & Eye Colour — Tight Linkage):",
        "• Cross: Yellow-bodied ($y$), white-eyed ($w$) female $\\times$ Wild-type brown-bodied ($y^+$), red-eyed ($w^+$) male.",
        "• F2 Result: Parental combinations = 98.7%, Recombinant combinations = ONLY 1.3%.",
        "• Conclusion: Genes for body colour ($y$) and eye colour ($w$) are located extremely close to each other on the X chromosome (Tightly Linked), so crossing over between them occurs very rarely.",
        "2. Cross B (Eye Colour & Wing Size — Loose Linkage):",
        "• Cross: White-eyed ($w$), miniature-winged ($m$) female $\\times$ Wild-type red-eyed ($w^+$), normal-winged ($m^+$) male.",
        "• F2 Result: Parental combinations = 62.8%, Recombinant combinations = 37.2%.",
        "• Conclusion: Genes for eye colour ($w$) and wing size ($m$) are located further apart on the X chromosome (Loosely Linked), allowing a higher frequency of crossing over and recombination.",
        "🔥 FUNDAMENTAL LINKAGE LAW: 'The frequency of recombination between two gene pairs is directly proportional to the physical distance separating them on the chromosome.'",
        "Distance $\\uparrow \\implies$ Recombination Frequency $\\uparrow \\implies$ Linkage Strength $\\downarrow$."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 330" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="650" height="330" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="325" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Morgan's Linkage Crosses on Drosophila X-Chromosome</text>
          
          <!-- Cross A (Tight Linkage) -->
          <g transform="translate(30, 45)">
            <rect width="280" height="260" fill="#f0fdf4" rx="8" stroke="#86efac"/>
            <text x="140" y="22" fill="#166534" font-size="13" font-weight="bold" text-anchor="middle">CROSS A: Tight Linkage (y &amp; w)</text>
            <text x="140" y="40" fill="#15803d" font-size="11" text-anchor="middle">Body colour (y) &amp; Eye colour (w)</text>
            
            <!-- Chromosome schematic Cross A -->
            <rect x="50" y="55" width="180" height="22" fill="#dcfce7" stroke="#22c55e" rx="4"/>
            <circle cx="80" cy="66" r="6" fill="#15803d"/>
            <text x="80" y="70" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">y</text>
            <circle cx="105" cy="66" r="6" fill="#15803d"/>
            <text x="105" y="70" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">w</text>
            <text x="170" y="70" fill="#166534" font-size="10" font-weight="bold">Distance: 1.3 cM</text>

            <!-- Results Cross A -->
            <rect x="20" y="95" width="240" height="75" fill="#ffffff" stroke="#86efac" rx="6"/>
            <text x="140" y="115" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">Parental Types = 98.7%</text>
            <text x="140" y="133" fill="#047857" font-size="11" text-anchor="middle">(Yellow-White &amp; Wild-type)</text>
            <text x="140" y="155" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">Recombinants = ONLY 1.3%</text>

            <rect x="20" y="185" width="240" height="60" fill="#f0fdf4" stroke="#bbf7d0" rx="4"/>
            <text x="140" y="208" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">Inference: Very High Linkage</text>
            <text x="140" y="228" fill="#15803d" font-size="10" text-anchor="middle">Genes are physically very close</text>
          </g>

          <!-- Cross B (Loose Linkage) -->
          <g transform="translate(340, 45)">
            <rect width="280" height="260" fill="#eff6ff" rx="8" stroke="#93c5fd"/>
            <text x="140" y="22" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">CROSS B: Loose Linkage (w &amp; m)</text>
            <text x="140" y="40" fill="#2563eb" font-size="11" text-anchor="middle">Eye colour (w) &amp; Wing size (m)</text>
            
            <!-- Chromosome schematic Cross B -->
            <rect x="50" y="55" width="180" height="22" fill="#dbeafe" stroke="#3b82f6" rx="4"/>
            <circle cx="75" cy="66" r="6" fill="#1d4ed8"/>
            <text x="75" y="70" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">w</text>
            <circle cx="195" cy="66" r="6" fill="#1d4ed8"/>
            <text x="195" y="70" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">m</text>
            <text x="135" y="70" fill="#1e40af" font-size="10" font-weight="bold">Distance: 37.2 cM</text>

            <!-- Results Cross B -->
            <rect x="20" y="95" width="240" height="75" fill="#ffffff" stroke="#93c5fd" rx="6"/>
            <text x="140" y="115" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Parental Types = 62.8%</text>
            <text x="140" y="133" fill="#2563eb" font-size="11" text-anchor="middle">(White-Miniature &amp; Wild-type)</text>
            <text x="140" y="155" fill="#ea580c" font-size="13" font-weight="bold" text-anchor="middle">Recombinants = 37.2%</text>

            <rect x="20" y="185" width="240" height="60" fill="#eff6ff" stroke="#bfdbfe" rx="4"/>
            <text x="140" y="208" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Inference: Moderate / Loose Linkage</text>
            <text x="140" y="228" fill="#2563eb" font-size="10" text-anchor="middle">Genes are far apart on chromosome</text>
          </g>
        </svg>`,
        caption: "Comparison between Morgan's Cross A (Tight Linkage: 1.3% recombination) and Cross B (Loose Linkage: 37.2% recombination) on the Drosophila X-chromosome.",
        guide: "WHAT TO OBSERVE: Tightly linked genes (y and w) yield 98.7% parental types and only 1.3% recombinants. Loosely linked genes (w and m) yield 62.8% parentals and 37.2% recombinants."
      },
      importantPoints: [
        "Cross A (Body color & Eye color): 98.7% Parental, 1.3% Recombinant (Tight Linkage).",
        "Cross B (Eye color & Wing size): 62.8% Parental, 37.2% Recombinant (Loose Linkage).",
        "Recombination frequency can never exceed 50% (50% recombination indicates independent assortment on separate chromosomes or distant syntenic loci)."
      ]
    },
    {
      heading: "4. Genetic Mapping — Alfred Sturtevant's Contribution",
      paragraphs: [
        "Alfred Sturtevant, an undergraduate student in Morgan's laboratory, realized in 1913 that the frequency of recombination between two gene pairs could be used as a quantitative measure of the physical distance separating them on a chromosome.",
        "Principle of Genetic Mapping: 'The percentage of recombination between two linked genes is directly proportional to the distance between them.'",
        "Map Unit Definition: $1\\%\\ \\text{Recombination Frequency} = 1\\ \\text{Centimorgan (cM)} = 1\\ \\text{Map Unit (m.u.)}$.",
        "Modern Significance of Genetic Maps: Linkage maps were extensively used in the Human Genome Project (HGP) to construct reference frameworks for complete genome sequencing.",
        "Solving Gene Order Problems (Three-Point Cross Logic):",
        "If distance between genes A and B = 10 cM, between B and C = 5 cM, and between A and C = 15 cM, the linear sequence on the chromosome is A — B — C (since $10 + 5 = 15$)."
      ],
      examples: [
        {
          problem: "The recombination frequency between gene A and gene B is 9%, between B and C is 17%, and between A and C is 26%. What is the correct linear order of the three genes on the chromosome?",
          given: "Distance A-B = 9 cM; Distance B-C = 17 cM; Distance A-C = 26 cM.",
          stepByStep: [
            "Step 1: Identify the two genes with the maximum distance separating them.",
            "Distance A-C is 26 cM (maximum). This means A and C are the two outermost genes on the chromosome map.",
            "Step 2: Position the third gene (B) between A and C.",
            "Distance A-B (9 cM) + Distance B-C (17 cM) = 9 + 17 = 26 cM = Distance A-C.",
            "Step 3: Deduce the linear arrangement: A — (9 cM) — B — (17 cM) — C."
          ],
          answer: "The gene order is A — B — C (or C — B — A)."
        }
      ]
    },
    {
      heading: "5. Sex Determination Systems in Animals — Heterogamety & Haplodiploidy",
      paragraphs: [
        "The cytological basis of sex determination was initiated by Henking (1891), who observed that in certain insects, 50% of sperms received a specific nuclear structure after spermatogenesis, which he named the 'X body'. McClung (1902) later established that the X body is a sex chromosome.",
        "Types of Chromosomal Sex Determination Mechanisms in Animals:",
        "1. Male Heterogamety (Male produces two different types of gametes):",
        "• XX-XY Type: Females are homogametic ($AA + XX$), producing 100% X-bearing eggs. Males are heterogametic ($AA + XY$), producing 50% X-bearing and 50% Y-bearing sperms. Examples: Humans, Drosophila.",
        "• XX-XO Type: Females are homogametic ($AA + XX$). Males have only one X chromosome ($AA + XO$) and produce 50% X-bearing sperms and 50% null (O) sperms. Examples: Grasshopper, bugs, Cockroach.",
        "2. Female Heterogamety (Female produces two different types of gametes):",
        "• ZW-ZZ Type: Females are heterogametic ($AA + ZW$), producing 50% Z-bearing and 50% W-bearing eggs. Males are homogametic ($AA + ZZ$), producing 100% Z-bearing sperms. Examples: Birds (Fowl), reptiles, some fishes.",
        "• ZO-ZZ Type: Females are heterogametic ($AA + ZO$), producing 50% Z-bearing and 50% null eggs. Males are homogametic ($AA + ZZ$). Examples: Certain butterflies and moths.",
        "3. Haplodiploidy in Honeybees (Apis mellifera):",
        "• Sex is determined by the ploidy level (number of chromosome sets) rather than specific sex chromosomes.",
        "• Queen (fertile female) and Worker bees (sterile females) are DIPLOID ($2n = 32$), developing from fertilized eggs (sperm + egg).",
        "• Drones (males) are HAPLOID ($n = 16$), developing from unfertilized eggs through PARTHENOGENESIS.",
        "• Unique Biological Features of Honeybee Genetics:",
        "(a) Drones produce sperms by MITOSIS (not meiosis) because they are already haploid ($n = 16$).",
        "(b) Drones have NO father and CANNOT have sons (since males do not fertilize drone eggs).",
        "(c) Drones have a grandfather (mother's father) and can have grandsons (daughters' unfertilized sons)."
      ],
      tables: [
        {
          title: "Master Summary of Sex Determination Systems in Organisms",
          headers: ["Mechanism Type", "Female Karyotype & Gametes", "Male Karyotype & Gametes", "Key Organism Examples"],
          rows: [
            ["Male Heterogamety (XX - XY)", "XX (Homogametic: all X eggs)", "XY (Heterogametic: 50% X, 50% Y sperms)", "Humans, Drosophila melanogaster"],
            ["Male Heterogamety (XX - XO)", "XX (Homogametic: all X eggs)", "XO (Heterogametic: 50% X, 50% null sperms)", "Grasshopper, Cockroach"],
            ["Female Heterogamety (ZW - ZZ)", "ZW (Heterogametic: 50% Z, 50% W eggs)", "ZZ (Homogametic: all Z sperms)", "Birds (Fowl), Reptiles, Fishes"],
            ["Female Heterogamety (ZO - ZZ)", "ZO (Heterogametic: 50% Z, 50% null eggs)", "ZZ (Homogametic: all Z sperms)", "Butterflies, Moths"],
            ["Haplodiploidy", "2n = 32 (Fertilized zygote, Queen/Worker)", "n = 16 (Parthenogenesis, Haploid Drone)", "Honeybees, Ants, Wasps"]
          ]
        }
      ],
      importantPoints: [
        "In humans and Drosophila: Male is heterogametic (XY).",
        "In birds: Female is heterogametic (ZW) and Male is homogametic (ZZ).",
        "In Grasshoppers: Male is heterogametic (XO) with one chromosome less than females.",
        "In Honeybees: Drones are haploid (n=16) developed by parthenogenesis; they produce sperm by mitosis."
      ]
    },
    {
      heading: "6. Sex-Linked Inheritance — Criss-Cross Inheritance & X-Linked Disorders",
      paragraphs: [
        "Sex-Linked Inheritance refers to the transmission of genes located on sex chromosomes (allosomes), particularly the X chromosome.",
        "Criss-Cross (Diandric) Inheritance: The pattern where an X-linked recessive trait is transmitted from an affected father to his phenotypically normal carrier daughter, who then transmits it to 50% of her sons (the father's grandsons).",
        "Why X-Linked Recessive Traits are Much More Frequent in Males than Females:",
        "1. Males are HEMIZYGOUS ($X^d Y$) — they have only one X chromosome. If a male receives a single mutant recessive allele on his X chromosome, he WILL express the disease because there is no homologous counterpart on the Y chromosome to mask it.",
        "2. Females are DIPLOID for the X chromosome ($XX$). A female requires TWO mutant copies ($X^d X^d$) to express the disorder. With one mutant copy ($X^D X^d$), she is a phenotypically normal CARRIER.",
        "3. A female can be affected only if her father is affected ($X^d Y$) AND her mother is at least a carrier ($X^D X^d$) or affected ($X^d X^d$).",
        "Major X-Linked Recessive Genetic Disorders:",
        "1. Haemophilia (Royal Disease / Bleeder's Disease): Defect in a single protein that is part of the cascade of proteins involved in blood clotting (Factor VIII in Haemophilia A, Factor IX in Haemophilia B). A simple cut leads to non-stop bleeding. Transmitted through the pedigree of Queen Victoria of England.",
        "2. Red-Green Colour Blindness: Defect in either red or green cone opsin photopigments located on the X chromosome, resulting in the failure to discriminate between red and green colours (~8% of human males vs ~0.4% of females)."
      ],
      examples: [
        {
          problem: "A carrier female for colour blindness (X^C X^c) marries a normal vision male (X^C Y). What is the probability of colour blindness in their sons and daughters?",
          given: "Mother = X^C X^c (Carrier). Father = X^C Y (Normal).",
          stepByStep: [
            "Step 1: Gametes of mother = 1/2 X^C, 1/2 X^c. Gametes of father = 1/2 X^C, 1/2 Y.",
            "Step 2: Progeny combinations:",
            "• X^C × X^C → X^C X^C (Normal daughter, 25%)",
            "• X^c × X^C → X^C X^c (Carrier daughter, 25%)",
            "• X^C × Y → X^C Y (Normal son, 25%)",
            "• X^c × Y → X^c Y (Colour-blind son, 25%)",
            "Step 3: Calculate probabilities among subgroups:",
            "• Among daughters: 0% colour-blind (50% normal, 50% carrier).",
            "• Among sons: 50% colour-blind (X^c Y) and 50% normal (X^C Y)."
          ],
          answer: "50% of the sons will be colour blind; 0% of the daughters will be colour blind (50% are carriers)."
        }
      ]
    }
  ],

  formulae: [
    {
      title: "Recombination Frequency & Map Distance",
      formula: "\\text{Recombination Frequency (\\%)} = \\frac{\\text{Total Recombinants}}{\\text{Total Progeny}} \\times 100",
      meaning: "Quantifies the genetic distance between two linked genes on a chromosome.",
      symbols: "1\\%\\ \\text{R.F.} = 1\\ \\text{Centimorgan (cM)} = 1\\ \\text{Map Unit (m.u.)}",
      unit: "centimorgan (cM) or map units (m.u.)",
      conditions: "Maximum measurable recombination frequency is 50%.",
      whenToUse: "Use to calculate map distance and deduce linear gene order on chromosomes."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 650 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
      <rect width="650" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="325" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Sex Determination &amp; Linkage Master Overview</text>
      
      <!-- Box 1: Drosophila Linkage -->
      <g transform="translate(30, 45)">
        <rect width="180" height="250" fill="#f0fdf4" rx="8" stroke="#86efac"/>
        <text x="90" y="24" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">DROSOPHILA LINKAGE</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#bbf7d0"/>
        
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Cross A (Tight):</text>
        <text x="15" y="74" fill="#15803d" font-size="10">Parental = 98.7%</text>
        <text x="15" y="88" fill="#15803d" font-size="10">Recombinant = 1.3%</text>
        
        <text x="15" y="112" fill="#1e293b" font-size="11" font-weight="bold">Cross B (Loose):</text>
        <text x="15" y="128" fill="#15803d" font-size="10">Parental = 62.8%</text>
        <text x="15" y="142" fill="#15803d" font-size="10">Recombinant = 37.2%</text>
        
        <text x="15" y="168" fill="#1e293b" font-size="11" font-weight="bold">Genetic Map:</text>
        <text x="15" y="184" fill="#166534" font-size="10">1% R.F. = 1 cM (Sturtevant)</text>
        <text x="15" y="198" fill="#166534" font-size="10">Distance ∝ Recombination</text>
      </g>

      <!-- Box 2: Sex Determination -->
      <g transform="translate(235, 45)">
        <rect width="180" height="250" fill="#eff6ff" rx="8" stroke="#93c5fd"/>
        <text x="90" y="24" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">SEX DETERMINATION</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#bfdbfe"/>
        
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Male Heterogamety:</text>
        <text x="15" y="74" fill="#2563eb" font-size="10">• Humans / Drosophila (XY)</text>
        <text x="15" y="88" fill="#2563eb" font-size="10">• Grasshopper (XO)</text>
        
        <text x="15" y="112" fill="#1e293b" font-size="11" font-weight="bold">Female Heterogamety:</text>
        <text x="15" y="128" fill="#2563eb" font-size="10">• Birds / Fowl (ZW)</text>
        <text x="15" y="142" fill="#2563eb" font-size="10">• Butterflies (ZO)</text>
        
        <text x="15" y="168" fill="#1e293b" font-size="11" font-weight="bold">Honeybee Haplodiploidy:</text>
        <text x="15" y="184" fill="#1e40af" font-size="10">♀ 2n=32 (Fertilized)</text>
        <text x="15" y="198" fill="#1e40af" font-size="10">♂ n=16 (Parthenogenesis)</text>
      </g>

      <!-- Box 3: X-Linked Inheritance -->
      <g transform="translate(440, 45)">
        <rect width="180" height="250" fill="#fdf4ff" rx="8" stroke="#f0abfc"/>
        <text x="90" y="24" fill="#86198f" font-size="12" font-weight="bold" text-anchor="middle">X-LINKED DISORDERS</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#f5d0fe"/>
        
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Criss-Cross Path:</text>
        <text x="15" y="74" fill="#a21caf" font-size="10">Affected Father →</text>
        <text x="15" y="88" fill="#a21caf" font-size="10">Carrier Daughter →</text>
        <text x="15" y="102" fill="#a21caf" font-size="10">Affected Grandson</text>
        
        <text x="15" y="128" fill="#1e293b" font-size="11" font-weight="bold">Hemizygous Males:</text>
        <text x="15" y="144" fill="#701a75" font-size="10">X^d Y (Single allele causes</text>
        <text x="15" y="158" fill="#701a75" font-size="10">disease, no masking Y)</text>
        
        <text x="15" y="184" fill="#1e293b" font-size="11" font-weight="bold">Classic Disorders:</text>
        <text x="15" y="198" fill="#475569" font-size="10">• Haemophilia (VIII/IX)</text>
        <text x="15" y="212" fill="#475569" font-size="10">• Colour blindness (Opsins)</text>
      </g>
    </svg>`,
    caption: "Master summary of Drosophila Linkage, Animal Sex Determination systems, and X-linked Criss-Cross Inheritance."
  },

  neetImportantPoints: [
    "Sutton and Boveri (1902) proposed the Chromosomal Theory of Inheritance; T.H. Morgan provided experimental verification in Drosophila melanogaster.",
    "Morgan's Cross A (Body colour & Eye colour): 98.7% Parental, 1.3% Recombinants (Tight Linkage).",
    "Morgan's Cross B (Eye colour & Wing size): 62.8% Parental, 37.2% Recombinants (Loose Linkage).",
    "Alfred Sturtevant created the first genetic maps: 1% recombination frequency = 1 centimorgan (cM).",
    "In birds, females are heterogametic (ZW) and males are homogametic (ZZ).",
    "In honeybees, drones are haploid (n = 16) and produce sperms by MITOSIS. Drones have no father and cannot have sons.",
    "Haemophilia and Colour Blindness are X-linked recessive disorders exhibiting criss-cross inheritance."
  ],

  commonConfusions: [
    {
      commonConfusion: "Female birds have XX chromosomes like female humans.",
      correctFact: "Female birds have heteromorphic ZW sex chromosomes (Female Heterogamety), while male birds have homogametic ZZ chromosomes.",
      whyItMattersForNEET: "High-frequency trap question in animal sex determination."
    },
    {
      commonConfusion: "Recombination frequency between linked genes can exceed 50%.",
      correctFact: "The maximum observable recombination frequency is 50%. When two genes exhibit 50% recombination, they either reside on separate non-homologous chromosomes or are so far apart on the same chromosome that crossing over occurs in every meiosis.",
      whyItMattersForNEET: "Crucial for genetics numerical problem solving in NEET."
    },
    {
      commonConfusion: "Male honeybees (drones) undergo meiosis to produce haploid sperms.",
      correctFact: "Male honeybees are already HAPLOID (n = 16) through parthenogenesis. Therefore, they produce sperms via MITOSIS without meiotic reduction.",
      whyItMattersForNEET: "One of the most frequently tested Assertion-Reason facts in NEET."
    }
  ],

  quickRevision: [
    "Sutton & Boveri: Chromosomal Theory (1902) | Morgan: Experimental verification in Drosophila.",
    "Drosophila: 2n = 8, 2-week life cycle, clear sexual dimorphism, easily cultured.",
    "Cross A (y & w): 98.7% Parental, 1.3% Recombinant | Cross B (w & m): 62.8% Parental, 37.2% Recombinant.",
    "Sturtevant: 1% Recombination = 1 cM (Map Unit).",
    "Sex Determination: Humans/Drosophila = XX(♀)-XY(♂) | Grasshopper = XX(♀)-XO(♂) | Birds = ZW(♀)-ZZ(♂) | Honeybee = 2n(♀)-n(♂).",
    "Honeybee Drones: Parthenogenesis (n=16), Mitotic sperm formation, No father, No sons.",
    "Criss-Cross Inheritance: Father → Carrier Daughter → Grandson (Haemophilia, Colour blindness)."
  ],

  practiceQuestions: [
    {
      question: "Which of the following statements is INCORRECT regarding sex determination in honeybees?",
      options: [
        "Females are diploid having 32 chromosomes",
        "Males are haploid having 16 chromosomes",
        "Males produce sperms by meiosis",
        "Males develop from unfertilized eggs by parthenogenesis"
      ],
      correctAnswer: 2,
      explanation: "Male honeybees (drones) are haploid (n = 16) and produce sperms by MITOSIS, not meiosis. Females (Queen and Workers) are diploid (2n = 32) and develop from fertilized eggs.",
      difficulty: "Medium",
      conceptTested: "Haplodiploidy mechanism in Honeybees"
    },
    {
      question: "The frequency of recombination between gene pairs on the same chromosome was first used as a measure of distance between genes to map their position on chromosomes by:",
      options: [
        "Thomas Hunt Morgan",
        "Alfred Sturtevant",
        "Sutton and Boveri",
        "Gregor Mendel"
      ],
      correctAnswer: 1,
      explanation: "Alfred Sturtevant (Morgan's student) used the frequency of recombination between gene pairs on the same chromosome as a measure of the distance between genes and mapped their position on the chromosome (1% recombination = 1 map unit / centimorgan).",
      difficulty: "Easy",
      conceptTested: "Discovery and principle of Genetic Mapping"
    },
    {
      question: "If a colour-blind man marries a woman who is homozygous for normal vision, what is the probability of their sons being colour-blind?",
      options: [
        "0%",
        "25%",
        "50%",
        "100%"
      ],
      correctAnswer: 0,
      explanation: "Colour-blind father is X^c Y; normal homozygous mother is X^C X^C. The father passes his Y chromosome to all sons and his X^c chromosome to all daughters. All sons inherit normal X^C from the mother (Genotype: X^C Y), so 0% of the sons are colour-blind.",
      difficulty: "Medium",
      conceptTested: "X-linked recessive cross and criss-cross inheritance"
    }
  ],

  pyqs: [
    {
      exam: "NEET UG",
      year: 2023,
      question: "In which of the following organisms is the female heterogametic?",
      options: [
        "Humans",
        "Grasshopper",
        "Fowl (Birds)",
        "Drosophila"
      ],
      correctAnswer: 2,
      explanation: "In birds (such as Fowl), the female is heterogametic (ZW sex chromosomes producing Z and W eggs), whereas the male is homogametic (ZZ). In Humans, Drosophila, and Grasshoppers, males are heterogametic (XY or XO).",
      conceptTested: "Female heterogamety in birds (ZW-ZZ system)",
      verificationSource: "NEET UG 2023 Official Paper & NCERT Class 12 Biology"
    },
    {
      exam: "NEET UG",
      year: 2022,
      question: "Which of the following pairs of genes showed the lowest percentage of recombination in Morgan's dihybrid crosses on Drosophila?",
      options: [
        "Yellow body and White eye",
        "White eye and Miniature wing",
        "Yellow body and Miniature wing",
        "Red eye and Normal wing"
      ],
      correctAnswer: 0,
      explanation: "In Morgan's Cross A, the genes for yellow body (y) and white eye (w) showed only 1.3% recombination (98.7% parental types), which is the lowest recombination frequency due to tight linkage. Cross B (w and m) showed 37.2% recombination.",
      conceptTested: "Morgan's Drosophila linkage experiments (Cross A vs Cross B)",
      verificationSource: "NEET UG 2022 Official Paper & NCERT Class 12 Biology Chapter 5"
    },
    {
      exam: "NEET UG",
      year: 2020,
      question: "Experimental verification of the chromosomal theory of inheritance was done by:",
      options: [
        "Mendel",
        "Sutton",
        "Boveri",
        "Morgan"
      ],
      correctAnswer: 3,
      explanation: "Sutton and Boveri proposed the Chromosomal Theory of Inheritance in 1902, but experimental verification was carried out by Thomas Hunt Morgan and his colleagues using Drosophila melanogaster.",
      conceptTested: "Experimental verification of Chromosomal Theory",
      verificationSource: "NEET UG 2020 Official Paper & NCERT Class 12"
    },
    {
      exam: "NEET UG",
      year: 2016,
      question: "A mechanism that can cause a gene to move from one linkage group to another is:",
      options: [
        "Inversion",
        "Duplication",
        "Translocation",
        "Crossing-over"
      ],
      correctAnswer: 2,
      explanation: "Translocation involves the exchange of chromosome segments between NON-HOMOLOGOUS chromosomes, thereby shifting a gene from one linkage group to another completely different linkage group.",
      conceptTested: "Chromosomal aberrations and linkage groups",
      verificationSource: "NEET UG 2016 Official Paper & NCERT Biology"
    }
  ]
};
