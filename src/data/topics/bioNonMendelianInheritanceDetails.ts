import { DetailedTopicContent } from '../../types/neet';

export const bioNonMendelianInheritanceDetails: DetailedTopicContent = {
  topicId: "bio-non-mendelian-inheritance",
  topicName: "Incomplete Dominance, Co-dominance & Multiple Alleles",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Principles of Inheritance and Variation",

  whatIsThisTopic: "Post-Mendelian extensions and non-allelic interactions including Incomplete Dominance (Snapdragon/Antirrhinum 1:2:1 ratio), Co-dominance (ABO blood group, MN blood group), Multiple Allelism, Pleiotropy (Phenylketonuria, Pea starch grain size), and Polygenic Inheritance (Human skin colour, height).",

  basicIdea: [
    "While Mendel's crosses showed clear complete dominance (3:1 F2 phenotypic ratio), subsequent research uncovered deviations where alleles interact in non-classical ways.",
    "Incomplete Dominance (Carl Correns): The heterozygote exhibits a novel intermediate phenotype between the two homozygous parental phenotypes because neither allele is completely dominant (e.g., Red × White → Pink in Snapdragon).",
    "In Incomplete Dominance, the F2 phenotypic ratio and F2 genotypic ratio are EXACTLY IDENTICAL (1:2:1).",
    "Co-dominance: Both alleles of a gene pair in a heterozygote are expressed fully, independently, and simultaneously without blending (e.g., AB blood group where both I^A and I^B antigens are displayed on RBCs).",
    "Multiple Allelism: A condition where more than two alternative allelic forms of a gene exist at the same locus in a population (e.g., I^A, I^B, i alleles for ABO blood groups). Multiple alleles can ONLY be observed in population studies.",
    "Pleiotropy: A single gene exerts influence over multiple, seemingly unrelated phenotypic traits by affecting a shared biochemical or developmental pathway (e.g., Phenylketonuria, Starch grain size in pea).",
    "Polygenic Inheritance (Quantitative Genetics): A single phenotypic character is controlled by three or more genes whose dominant alleles exert an additive, cumulative quantitative effect, resulting in continuous variation (e.g., Human skin colour, height)."
  ],

  importantTerms: [
    {
      term: "Incomplete Dominance (Partial Dominance)",
      definition: "A pattern of inheritance where the F1 hybrid phenotype does not resemble either parent and is an intermediate blend between the two homozygous phenotypes, yielding a 1:2:1 F2 ratio for both phenotype and genotype.",
      neetNote: "Classic NCERT examples: Snapdragon (Antirrhinum majus / Dog flower) and Mirabilis jalapa (4 O'clock plant)."
    },
    {
      term: "Co-dominance",
      definition: "An allelic relationship in which both alleles in a heterozygous individual are fully and independently expressed in the phenotype without blending or intermediate masking.",
      neetNote: "Classic NCERT example: ABO blood group system (I^A I^B genotype) and MN blood group in humans."
    },
    {
      term: "Multiple Alleles",
      definition: "The existence of three or more alternative forms of a single gene within a population, all occupying the same genetic locus on homologous chromosomes.",
      neetNote: "Any single diploid individual can carry at most TWO alleles at a given time."
    },
    {
      term: "Gene I (Isoagglutinogen)",
      definition: "The polymorphic gene located on human Chromosome 9 that controls the ABO blood group system by producing glycosyltransferase enzymes adding specific sugar polymers to RBC membrane lipids.",
      neetNote: "Possesses three alleles: I^A, I^B, and i."
    },
    {
      term: "Pleiotropy",
      definition: "The phenomenon where a single gene mutation or gene product influences multiple distinct, unrelated phenotypic characteristics simultaneously.",
      neetNote: "Classic examples: Phenylketonuria (PAH enzyme defect) and Starch grain size/seed shape gene (B/b) in Pisum sativum."
    },
    {
      term: "Polygenic Inheritance (Quantitative Inheritance)",
      definition: "The inheritance of a phenotypic character controlled by three or more independent genes, where each dominant allele makes an additive (cumulative) contribution to the total trait value.",
      neetNote: "Shows continuous bell-shaped Gaussian distribution; examples: human skin colour (A, B, C genes) and height."
    },
    {
      term: "Haploinsufficiency / Dosage Effect",
      definition: "A situation where a single functional copy of a gene in a heterozygote does not produce enough enzyme/protein product to achieve the full wild-type homozygous dominant phenotype.",
      neetNote: "Molecular basis of incomplete dominance in pink Snapdragon (Rr)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Incomplete Dominance — Mechanism, Cross & Molecular Basis",
      paragraphs: [
        "Incomplete Dominance was first discovered by Carl Correns in 1903 in Mirabilis jalapa (Four O'Clock plant) and later characterized extensively in Antirrhinum majus (Snapdragon or Dog flower).",
        "Step-by-Step Breeding Cross in Snapdragon:",
        "1. Parental Generation (P): Pure-breeding True Red flower ($RR$) is cross-pollinated with Pure-breeding True White flower ($rr$).",
        "2. F1 Generation: Gametes $R$ and $r$ fuse to produce $Rr$. Instead of being Red (as predicted by Mendel's Law of Dominance), 100% of F1 plants produce PINK flowers.",
        "3. F1 Selfing ($Rr \\times Rr$): Gametes produced by each parent are $1/2\\ R$ and $1/2\\ r$.",
        "4. F2 Generation: Punnett square yields 1 $RR$ (Red) + 2 $Rr$ (Pink) + 1 $rr$ (White).",
        "Ratios in F2 Generation:",
        "• F2 Phenotypic Ratio: 1 Red : 2 Pink : 1 White (1:2:1).",
        "• F2 Genotypic Ratio: 1 $RR$ : 2 $Rr$ : 1 $rr$ (1:2:1).",
        "🔥 CRITICAL NEET CONCEPT: In Incomplete Dominance, the F2 Phenotypic ratio and Genotypic ratio are IDENTICAL (1:2:1). This contrasts with classical Mendelian monohybrid cross where phenotypic ratio is 3:1 and genotypic ratio is 1:2:1.",
        "Molecular Basis of Incomplete Dominance: The wild-type allele $R$ encodes a functional enzyme that synthesizes red anthocyanin pigment. Homozygous $RR$ produces a double dose (100%) of pigment (deep red). Homozygous recessive $rr$ produces no functional enzyme (white). In heterozygote $Rr$, the single functional $R$ allele produces only a half dose (~50%) of anthocyanin pigment, which appears physically as pink (dosage effect / haploinsufficiency)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 350" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="650" height="350" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="325" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Incomplete Dominance in Snapdragon (Antirrhinum majus)</text>
          
          <!-- P Cross -->
          <rect x="40" y="45" width="260" height="60" fill="#fee2e2" rx="8" stroke="#fca5a5"/>
          <text x="170" y="68" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">P: Red (RR) × White (rr)</text>
          <text x="170" y="88" fill="#b91c1c" font-size="12" text-anchor="middle">Gametes: [R] and [r]  →  F1: Rr (Pink)</text>
          
          <!-- F1 Selfing -->
          <rect x="340" y="45" width="270" height="60" fill="#fdf4ff" rx="8" stroke="#f0abfc"/>
          <text x="475" y="68" fill="#86198f" font-size="13" font-weight="bold" text-anchor="middle">F1 Selfing: Pink (Rr) × Pink (Rr)</text>
          <text x="475" y="88" fill="#a21caf" font-size="12" text-anchor="middle">Gametes: 1/2 R, 1/2 r from each</text>

          <!-- 2x2 Punnett Square -->
          <g transform="translate(140, 120)">
            <rect x="80" y="0" width="100" height="28" fill="#fee2e2" stroke="#fca5a5" rx="4"/>
            <text x="130" y="19" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">♀ R (1/2)</text>
            <rect x="190" y="0" width="100" height="28" fill="#f1f5f9" stroke="#cbd5e1" rx="4"/>
            <text x="240" y="19" fill="#475569" font-size="13" font-weight="bold" text-anchor="middle">♀ r (1/2)</text>

            <rect x="0" y="35" width="70" height="70" fill="#fee2e2" stroke="#fca5a5" rx="4"/>
            <text x="35" y="75" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">♂ R</text>
            <rect x="0" y="115" width="70" height="70" fill="#f1f5f9" stroke="#cbd5e1" rx="4"/>
            <text x="35" y="155" fill="#475569" font-size="13" font-weight="bold" text-anchor="middle">♂ r</text>

            <!-- Box 1: RR Red -->
            <rect x="80" y="35" width="100" height="70" fill="#fecaca" stroke="#f87171" rx="6"/>
            <text x="130" y="65" fill="#991b1b" font-size="16" font-weight="bold" text-anchor="middle">RR</text>
            <text x="130" y="85" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">RED</text>
            <text x="130" y="98" fill="#dc2626" font-size="10" text-anchor="middle">(25% / 1/4)</text>

            <!-- Box 2: Rr Pink -->
            <rect x="190" y="35" width="100" height="70" fill="#fce7f3" stroke="#f472b6" rx="6"/>
            <text x="240" y="65" fill="#9d174d" font-size="16" font-weight="bold" text-anchor="middle">Rr</text>
            <text x="240" y="85" fill="#be185d" font-size="12" font-weight="bold" text-anchor="middle">PINK</text>
            <text x="240" y="98" fill="#db2777" font-size="10" text-anchor="middle">(25% / 1/4)</text>

            <!-- Box 3: Rr Pink -->
            <rect x="80" y="115" width="100" height="70" fill="#fce7f3" stroke="#f472b6" rx="6"/>
            <text x="130" y="145" fill="#9d174d" font-size="16" font-weight="bold" text-anchor="middle">Rr</text>
            <text x="130" y="165" fill="#be185d" font-size="12" font-weight="bold" text-anchor="middle">PINK</text>
            <text x="130" y="178" fill="#db2777" font-size="10" text-anchor="middle">(25% / 1/4)</text>

            <!-- Box 4: rr White -->
            <rect x="190" y="115" width="100" height="70" fill="#f8fafc" stroke="#cbd5e1" rx="6"/>
            <text x="240" y="145" fill="#334155" font-size="16" font-weight="bold" text-anchor="middle">rr</text>
            <text x="240" y="165" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">WHITE</text>
            <text x="240" y="178" fill="#64748b" font-size="10" text-anchor="middle">(25% / 1/4)</text>
          </g>

          <!-- Summary Ratios -->
          <rect x="50" y="318" width="550" height="24" fill="#f1f5f9" rx="4"/>
          <text x="325" y="335" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">
            F2 Phenotypic Ratio = 1 Red : 2 Pink : 1 White  =  F2 Genotypic Ratio (1:2:1)
          </text>
        </svg>`,
        caption: "Incomplete Dominance in Snapdragon (Antirrhinum majus) displaying identical 1:2:1 phenotypic and genotypic ratios.",
        guide: "WHAT TO OBSERVE: Alleles R and r do NOT blend or fuse together; they separate cleanly in F2 gametogenesis, allowing pure Red (RR) and pure White (rr) to reappear in F2."
      },
      importantPoints: [
        "Incomplete Dominance does NOT mean blending of genes; it is an intermediate phenotypic expression due to dosage effect.",
        "Both F2 phenotypic and genotypic ratios = 1:2:1.",
        "Examples: Snapdragon (Antirrhinum majus) and 4 O'Clock plant (Mirabilis jalapa)."
      ]
    },
    {
      heading: "2. Co-dominance & Multiple Allelism — The Human ABO Blood Group System",
      paragraphs: [
        "Co-dominance is a phenomenon where both alleles of a gene pair express themselves completely and simultaneously in a heterozygote. Neither allele masks the other, nor do they create an intermediate blend.",
        "ABO Blood Groups in Humans: Governed by the polymorphic gene $I$ (Isoagglutinogen) located on human Chromosome 9.",
        "Multiple Alleles Concept: Gene $I$ has three common alleles in the human population: $I^A$, $I^B$, and $i$ (also written as $I^O$).",
        "• Allele $I^A$: Produces N-acetylgalactosaminyl transferase, adding N-acetylgalactosamine sugar to the H-antigen precursor on the RBC membrane (forms A-antigen).",
        "• Allele $I^B$: Produces galactosyl transferase, adding D-galactose sugar to the H-antigen precursor on the RBC membrane (forms B-antigen).",
        "• Allele $i$: Produces an inactive enzyme; does not add any terminal sugar to the H-antigen (forms neither A nor B antigen).",
        "Dominance Relationships Among Alleles:",
        "1. $I^A$ is completely dominant over $i$ ($I^A i \\to$ Blood Group A).",
        "2. $I^B$ is completely dominant over $i$ ($I^B i \\to$ Blood Group B).",
        "3. $I^A$ and $I^B$ are CO-DOMINANT with each other ($I^A I^B \\to$ Both A and B antigens are simultaneously displayed on the RBC membrane, resulting in Blood Group AB).",
        "Formula for Number of Possible Genotypes: For a gene with $n$ alleles, the number of diploid genotypes is $\\frac{n(n+1)}{2}$.",
        "For $n = 3$ alleles ($I^A, I^B, i$): Total Genotypes = $\\frac{3(3+1)}{2} = \\frac{12}{2} = 6$ genotypes, giving rise to 4 distinct phenotypes (A, B, AB, O)."
      ],
      tables: [
        {
          title: "Genetic Basis of Human ABO Blood Groups (Genotypes, Antigens & Antibodies)",
          headers: ["Blood Group (Phenotype)", "Genotypes (Total 6)", "Antigen on RBC Surface", "Antibodies in Blood Plasma", "Can Donate RBCs To", "Can Receive RBCs From"],
          rows: [
            ["Group A", "I^A I^A (Homozygous) or I^A i (Heterozygous)", "A antigen", "Anti-B antibodies", "A, AB", "A, O"],
            ["Group B", "I^B I^B (Homozygous) or I^B i (Heterozygous)", "B antigen", "Anti-A antibodies", "B, AB", "B, O"],
            ["Group AB", "I^A I^B (Co-dominant)", "Both A and B antigens", "NEITHER Anti-A nor Anti-B", "AB only", "Universal Recipient (A, B, AB, O)"],
            ["Group O", "i i (Homozygous recessive)", "Neither A nor B antigen (H-antigen only)", "BOTH Anti-A and Anti-B", "Universal Donor (A, B, AB, O)", "O only"]
          ]
        }
      ],
      importantPoints: [
        "ABO blood grouping illustrates BOTH Co-dominance (between I^A and I^B) and Multiple Alleles (3 alleles in population).",
        "Number of genotypes in ABO system = 6; Number of phenotypes = 4.",
        "Universal Donor = Blood Group O (Rh-negative); Universal Recipient = Blood Group AB (Rh-positive)."
      ]
    },
    {
      heading: "3. Pleiotropy — Single Gene Controlling Multiple Phenotypic Traits",
      paragraphs: [
        "Pleiotropy (from Greek pleion 'more' and tropos 'turn') is the genetic phenomenon where a single gene affects or controls multiple, apparently unrelated morphological, physiological, or biochemical phenotypic traits.",
        "Mechanism of Pleiotropy: In most cases, the underlying mechanism is the effect of the gene product (e.g., a specific metabolic enzyme) on a central metabolic pathway, which subsequently cascades into multiple physiological systems.",
        "NCERT Classic Example 1: Phenylketonuria (PKU) in Humans:",
        "• Caused by an autosomal recessive mutation in the gene located on Chromosome 12 that codes for the liver enzyme Phenylalanine Hydroxylase (PAH).",
        "• Under normal conditions, PAH converts the amino acid Phenylalanine into Tyrosine.",
        "• In PKU patients, lack of PAH causes accumulation of Phenylalanine, which gets converted into Phenylpyruvic acid and other neurotoxic keto-derivatives.",
        "• Multiple Phenotypic Manifestations (Pleiotropic effects): (1) Severe mental retardation due to toxic brain accumulation, (2) Reduction in hair pigmentation, (3) Hypopigmentation of skin (light skin colour), and (4) Excretion of phenylpyruvic acid in urine due to poor renal tubular reabsorption.",
        "NCERT Classic Example 2: Starch Grain Size & Seed Shape in Garden Pea (Pisum sativum):",
        "• Controlled by a single gene locus with two alleles: $B$ (normal starch branching enzyme) and $b$ (defective enzyme).",
        "• Homozygous $BB$: Synthesizes large starch grains effectively $\\to$ seeds absorb water smoothly and mature as ROUND seeds.",
        "• Homozygous $bb$: Has lesser efficiency in starch synthesis $\\to$ produces small starch grains $\\to$ seeds lose water upon drying and become WRINKLED seeds.",
        "• Heterozygote $Bb$: Produces INTERMEDIATE-SIZED starch grains.",
        "🔥 CRITICAL NCERT INSIGHT ON DOMINANCE:",
        "• For the phenotype of 'Starch Grain Size', alleles $B$ and $b$ show INCOMPLETE DOMINANCE ($BB$ Large, $Bb$ Intermediate, $bb$ Small).",
        "• For the phenotype of 'Seed Shape', allele $B$ shows COMPLETE DOMINANCE over $b$ ($BB$ Round, $Bb$ Round, $bb$ Wrinkled).",
        "• Conclusion: Dominance is not an absolute, autonomous property of a gene; it depends upon the specific phenotypic character chosen for observation!"
      ],
      importantPoints: [
        "PKU is an autosomal recessive pleiotropic metabolic disorder (defective Phenylalanine Hydroxylase).",
        "In Garden Pea, gene B/b shows Incomplete Dominance for starch grain size, but Complete Dominance for seed shape.",
        "Sickle cell anemia is also pleiotropic: alters RBC shape, causes severe anemia, confers malaria resistance, and damages spleen/kidneys."
      ]
    },
    {
      heading: "4. Polygenic Inheritance — Quantitative Cumulative Traits",
      paragraphs: [
        "Polygenic Inheritance (Quantitative or Continuous Inheritance) occurs when a single phenotypic character is controlled by three or more pairs of independent non-allelic genes, and the phenotype reflects the cumulative, additive contribution of all dominant alleles.",
        "Key Differences Between Monogenic (Qualitative) and Polygenic (Quantitative) Inheritance:",
        "1. Monogenic: Discontinuous variation (e.g., Tall vs Dwarf with no intermediates). Controlled by 1 gene pair. Discrete phenotypic classes.",
        "2. Polygenic: Continuous variation (e.g., human height gradient from 4.5 ft to 6.5 ft). Controlled by multiple genes ($A, B, C$). Bell-shaped normal Gaussian distribution in population.",
        "Classic Example: Human Skin Colour (studied by C.B. Davenport in 1913):",
        "• Controlled by 3 distinct gene pairs: $A/a, B/b, C/c$.",
        "• Each dominant allele ($A, B, C$) contributes an equal additive quantity of the dark brown pigment Melanin.",
        "• Genotype with maximum dominant alleles ($AABBCC$, 6 dominant alleles) $\\to$ Very Dark (Negro / Black).",
        "• Genotype with no dominant alleles ($aabbcc$, 0 dominant alleles) $\\to$ Very Light (Caucasian / White).",
        "• Heterozygous F1 hybrid ($AaBbCc$, 3 dominant alleles) $\\to$ Intermediate skin colour (Mulatto).",
        "Number of Phenotypic Classes in Polygenic Inheritance:",
        "For $n$ pairs of polygenes, the number of distinct phenotypic classes in F2 generation is given by $2n + 1$.",
        "For 3 gene pairs ($n = 3$): Total Phenotypes = $2(3) + 1 = 7$ phenotypic classes.",
        "The 7 classes correspond to the number of dominant alleles present (6, 5, 4, 3, 2, 1, 0), following a binomial distribution ratio: 1 : 6 : 15 : 20 : 15 : 6 : 1 (Total = 64 zygotic combinations)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="650" height="300" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="325" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Polygenic Inheritance: Continuous Bell Curve (Human Skin Colour)</text>
          
          <!-- Bell curve histogram bars -->
          <g transform="translate(60, 45)">
            <!-- Bar 1: 0 dom (1/64) -->
            <rect x="30" y="195" width="45" height="15" fill="#f8fafc" stroke="#94a3b8"/>
            <text x="52" y="190" fill="#475569" font-size="10" text-anchor="middle">1/64</text>
            <text x="52" y="225" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">0 dom</text>
            <text x="52" y="238" fill="#64748b" font-size="9" text-anchor="middle">(aabbcc)</text>

            <!-- Bar 2: 1 dom (6/64) -->
            <rect x="90" y="150" width="45" height="60" fill="#fed7aa" stroke="#fb923c"/>
            <text x="112" y="145" fill="#c2410c" font-size="10" text-anchor="middle">6/64</text>
            <text x="112" y="225" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">1 dom</text>

            <!-- Bar 3: 2 dom (15/64) -->
            <rect x="150" y="85" width="45" height="125" fill="#fdba74" stroke="#f97316"/>
            <text x="172" y="80" fill="#c2410c" font-size="10" text-anchor="middle">15/64</text>
            <text x="172" y="225" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">2 dom</text>

            <!-- Bar 4: 3 dom (20/64) PEAK -->
            <rect x="210" y="45" width="45" height="165" fill="#fb923c" stroke="#ea580c"/>
            <text x="232" y="38" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">20/64</text>
            <text x="232" y="225" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">3 dom</text>
            <text x="232" y="238" fill="#9a3412" font-size="9" font-weight="bold" text-anchor="middle">(Mulatto)</text>

            <!-- Bar 5: 4 dom (15/64) -->
            <rect x="270" y="85" width="45" height="125" fill="#ea580c" stroke="#c2410c"/>
            <text x="292" y="80" fill="#7c2d12" font-size="10" text-anchor="middle">15/64</text>
            <text x="292" y="225" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">4 dom</text>

            <!-- Bar 6: 5 dom (6/64) -->
            <rect x="330" y="150" width="45" height="60" fill="#c2410c" stroke="#9a3412"/>
            <text x="352" y="145" fill="#7c2d12" font-size="10" text-anchor="middle">6/64</text>
            <text x="352" y="225" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">5 dom</text>

            <!-- Bar 7: 6 dom (1/64) -->
            <rect x="390" y="195" width="45" height="15" fill="#7c2d12" stroke="#431407"/>
            <text x="412" y="190" fill="#431407" font-size="10" text-anchor="middle">1/64</text>
            <text x="412" y="225" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">6 dom</text>
            <text x="412" y="238" fill="#431407" font-size="9" text-anchor="middle">(AABBCC)</text>

            <!-- Gaussian curve line -->
            <path d="M 52 200 Q 140 100, 232 45 Q 325 100, 412 200" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,4"/>
          </g>

          <rect x="50" y="268" width="550" height="22" fill="#eff6ff" rx="4"/>
          <text x="325" y="283" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">
            Ratio = 1 : 6 : 15 : 20 : 15 : 6 : 1 (Total = 64 combinations, 7 phenotypic classes)
          </text>
        </svg>`,
        caption: "Bell-shaped normal distribution curve for polygenic inheritance of human skin colour controlled by 3 gene pairs.",
        guide: "NEET IDENTIFICATION POINTS: Peak of curve represents intermediate mulatto (3 dominant alleles = 20/64), while extremes represent 0 dominant (1/64) and 6 dominant (1/64)."
      },
      importantPoints: [
        "Polygenic inheritance is influenced significantly by environmental factors (e.g., UV radiation on skin colour, nutrition on human height).",
        "Number of F2 phenotypes for n polygene pairs = 2n + 1.",
        "Number of F2 genotypes for n polygene pairs = 3^n (for 3 genes, 3^3 = 27 genotypes)."
      ]
    },
    {
      heading: "5. Solved Genetics Problems on Blood Groups & Quantitative Inheritance",
      paragraphs: [
        "Genetics problem solving requires systematic determination of parental gametes and construction of probability grids."
      ],
      examples: [
        {
          problem: "A man with blood group A marries a woman with blood group B. They have a child with blood group O. What are the genotypes of the parents and what other blood groups are possible in their future children?",
          given: "Father phenotype = Group A. Mother phenotype = Group B. Child phenotype = Group O (Genotype = ii).",
          stepByStep: [
            "Step 1: The child with blood group O must have genotype 'ii'. To produce 'ii', the child must inherit one 'i' allele from the father and one 'i' allele from the mother.",
            "Step 2: Therefore, Father with group A must be heterozygous (I^A i), and Mother with group B must be heterozygous (I^B i).",
            "Step 3: Gametes produced by Father = 1/2 I^A, 1/2 i. Gametes produced by Mother = 1/2 I^B, 1/2 i.",
            "Step 4: Punnett square combinations:",
            "• I^A × I^B → I^A I^B (Blood Group AB, 25%)",
            "• I^A × i → I^A i (Blood Group A, 25%)",
            "• i × I^B → I^B i (Blood Group B, 25%)",
            "• i × i → i i (Blood Group O, 25%)"
          ],
          answer: "Father's genotype is I^A i; Mother's genotype is I^B i. All four blood groups (A, B, AB, and O) are possible with equal 25% (1/4) probability each."
        },
        {
          problem: "If a plant with genotype AaBb (height controlled polygenically by 2 gene pairs where each dominant allele adds 2 cm above a baseline height of 10 cm) is selfed, what is the phenotypic ratio of heights in the progeny?",
          given: "Baseline height (aabb) = 10 cm. Each dominant allele (A or B) adds +2 cm. Cross: AaBb × AaBb.",
          stepByStep: [
            "Step 1: Determine height for each dominant allele count:",
            "• 4 dominant (AABB): 10 + (4 × 2) = 18 cm",
            "• 3 dominant (AABb, AaBB): 10 + (3 × 2) = 16 cm",
            "• 2 dominant (AaBb, AAbb, aaBB): 10 + (2 × 2) = 14 cm",
            "• 1 dominant (Aabb, aaBb): 10 + (1 × 2) = 12 cm",
            "• 0 dominant (aabb): 10 + 0 = 10 cm",
            "Step 2: For 2 gene pairs, phenotypic distribution ratio for dominant allele counts (4 : 3 : 2 : 1 : 0) is 1 : 4 : 6 : 4 : 1.",
            "Proportions: 1/16 (18 cm) : 4/16 (16 cm) : 6/16 (14 cm) : 4/16 (12 cm) : 1/16 (10 cm)."
          ],
          answer: "Phenotypic ratio is 1 (18 cm) : 4 (16 cm) : 6 (14 cm) : 4 (12 cm) : 1 (10 cm)."
        }
      ]
    }
  ],

  formulae: [
    {
      title: "Number of Genotypes for Multiple Alleles",
      formula: "N_{\\text{genotypes}} = \\frac{n(n+1)}{2}",
      meaning: "Calculates the total number of diploid genotypes for a gene possessing n multiple alleles in a population.",
      symbols: "n = \\text{number of multiple alleles at a locus}",
      unit: "dimensionless",
      conditions: "Diploid organism with autosomal locus.",
      whenToUse: "For ABO system (n=3 alleles) → (3×4)/2 = 6 genotypes."
    },
    {
      title: "Number of Phenotypic Classes in Polygenic Inheritance",
      formula: "N_{\\text{phenotypes}} = 2n + 1",
      meaning: "Calculates the number of discrete quantitative phenotypic classes in F2 generation for n polygene pairs.",
      symbols: "n = \\text{number of polygene pairs controlling the trait}",
      unit: "dimensionless",
      conditions: "Equal additive contribution per dominant allele.",
      whenToUse: "For human skin colour (n=3 pairs) → 2(3) + 1 = 7 phenotypic classes."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 650 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
      <rect width="650" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="325" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Non-Mendelian Inheritance Models Comparison</text>
      
      <!-- Incomplete Dominance -->
      <g transform="translate(30, 45)">
        <rect width="180" height="250" fill="#fff1f2" rx="8" stroke="#fecdd3"/>
        <text x="90" y="24" fill="#9f1239" font-size="12" font-weight="bold" text-anchor="middle">INCOMPLETE DOMINANCE</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#fda4af"/>
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Mechanism:</text>
        <text x="15" y="74" fill="#475569" font-size="10">Intermediate blend</text>
        <text x="15" y="88" fill="#475569" font-size="10">(Dosage effect/partial)</text>
        
        <text x="15" y="112" fill="#1e293b" font-size="11" font-weight="bold">F2 Ratios:</text>
        <text x="15" y="128" fill="#9f1239" font-size="11" font-weight="bold">Phenotype: 1 : 2 : 1</text>
        <text x="15" y="144" fill="#9f1239" font-size="11" font-weight="bold">Genotype: 1 : 2 : 1</text>
        
        <text x="15" y="170" fill="#1e293b" font-size="11" font-weight="bold">Classic Examples:</text>
        <text x="15" y="186" fill="#475569" font-size="10">• Snapdragon flower</text>
        <text x="15" y="200" fill="#475569" font-size="10">• Mirabilis jalapa</text>
        <text x="15" y="214" fill="#475569" font-size="10">• Pea starch grain size</text>
      </g>

      <!-- Co-Dominance & Multiple Alleles -->
      <g transform="translate(235, 45)">
        <rect width="180" height="250" fill="#eff6ff" rx="8" stroke="#bfdbfe"/>
        <text x="90" y="24" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">CO-DOMINANCE &amp; MULTIPLE</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#93c5fd"/>
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Mechanism:</text>
        <text x="15" y="74" fill="#475569" font-size="10">Both alleles express</text>
        <text x="15" y="88" fill="#475569" font-size="10">fully &amp; simultaneously</text>
        
        <text x="15" y="112" fill="#1e293b" font-size="11" font-weight="bold">ABO Alleles (3):</text>
        <text x="15" y="128" fill="#1e40af" font-size="11" font-weight="bold">I^A = I^B &gt; i</text>
        <text x="15" y="144" fill="#1e40af" font-size="11">6 Genotypes, 4 Phenotypes</text>
        
        <text x="15" y="170" fill="#1e293b" font-size="11" font-weight="bold">Classic Examples:</text>
        <text x="15" y="186" fill="#475569" font-size="10">• Human ABO blood (AB)</text>
        <text x="15" y="200" fill="#475569" font-size="10">• MN blood group</text>
        <text x="15" y="214" fill="#475569" font-size="10">• Roan coat in cattle</text>
      </g>

      <!-- Pleiotropy vs Polygenic -->
      <g transform="translate(440, 45)">
        <rect width="180" height="250" fill="#f5f3ff" rx="8" stroke="#ddd6fe"/>
        <text x="90" y="24" fill="#5b21b6" font-size="12" font-weight="bold" text-anchor="middle">PLEIOTROPY vs POLYGENIC</text>
        <line x1="15" y1="35" x2="165" y2="35" stroke="#c4b5fd"/>
        <text x="15" y="58" fill="#1e293b" font-size="11" font-weight="bold">Pleiotropy:</text>
        <text x="15" y="74" fill="#5b21b6" font-size="10">1 Gene → Multiple Traits</text>
        <text x="15" y="88" fill="#475569" font-size="10">• PKU (PAH defect)</text>
        <text x="15" y="102" fill="#475569" font-size="10">• Sickle cell anemia</text>
        
        <text x="15" y="126" fill="#1e293b" font-size="11" font-weight="bold">Polygenic:</text>
        <text x="15" y="142" fill="#5b21b6" font-size="10">Multiple Genes → 1 Trait</text>
        <text x="15" y="156" fill="#475569" font-size="10">Additive quantitative effect</text>
        <text x="15" y="170" fill="#475569" font-size="10">• Human skin colour (A,B,C)</text>
        <text x="15" y="184" fill="#475569" font-size="10">• Human height</text>
        <text x="15" y="198" fill="#475569" font-size="10">• 7 phenotypes (1:6:15:20...)</text>
      </g>
    </svg>`,
    caption: "Master comparison of Incomplete Dominance, Co-dominance, Multiple Alleles, Pleiotropy, and Polygenic Inheritance."
  },

  neetImportantPoints: [
    "Snapdragon (Antirrhinum majus) flower colour: F2 phenotypic ratio = 1:2:1 (Red : Pink : White), identical to genotypic ratio (1 RR : 2 Rr : 1 rr).",
    "ABO blood group is controlled by Gene I with 3 alleles (I^A, I^B, i) resulting in 6 genotypes and 4 phenotypes.",
    "Alleles I^A and I^B are co-dominant to each other and completely dominant over allele i.",
    "Multiple alleles can be identified only in population studies, never in a single individual.",
    "Phenylketonuria (PKU) is a classic example of Pleiotropy in humans (mental retardation + reduced hair and skin pigmentation).",
    "In Garden Pea, gene B/b shows Incomplete Dominance for starch grain size, but Complete Dominance for seed shape.",
    "Polygenic inheritance produces continuous variation with a bell-shaped normal Gaussian distribution curve (e.g., human skin colour: 1:6:15:20:15:6:1 for 3 gene pairs)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Incomplete dominance proves that alleles physically blend together into a hybrid allele.",
      correctFact: "Alleles NEVER blend at the molecular or genetic level. The pink flower of Snapdragon (Rr) is an intermediate phenotype due to reduced enzyme output, but the alleles R and r segregate purely in F2, recreating pure red (RR) and pure white (rr).",
      whyItMattersForNEET: "Frequently tested in Assertion-Reason questions on the Law of Segregation."
    },
    {
      commonConfusion: "A single person can possess three alleles for the ABO blood group.",
      correctFact: "A normal diploid human possesses at most TWO alleles (one maternal, one paternal) for any autosomal gene locus. Multiple alleles (3 or more) exist only across the POPULATION as a whole.",
      whyItMattersForNEET: "Direct conceptual question in NEET."
    },
    {
      commonConfusion: "Pleiotropy and Polygenic inheritance are the same concept.",
      correctFact: "They are exact opposites: Pleiotropy is ONE gene controlling MULTIPLE phenotypic traits (1 Gene → N Traits); Polygenic inheritance is MULTIPLE genes controlling ONE quantitative trait (N Genes → 1 Trait).",
      whyItMattersForNEET: "High-frequency terminology matching MCQ in NEET Biology."
    }
  ],

  quickRevision: [
    "Incomplete Dominance: F2 Phenotype = 1:2:1 | Genotype = 1:2:1 (Snapdragon / Antirrhinum).",
    "Co-dominance: Both alleles express simultaneously (AB blood group: I^A I^B).",
    "ABO System: Gene I on Chr 9, 3 alleles (I^A, I^B, i), 6 genotypes, 4 phenotypes.",
    "Genotypes formula for multiple alleles = n(n+1)/2.",
    "Pleiotropy: 1 gene → multiple effects (PKU, Sickle Cell, Pea Starch B/b).",
    "Pea Starch Gene B/b: Incomplete dominance for grain size, Complete dominance for seed shape.",
    "Polygenic: Multiple genes → 1 trait (Human skin colour A, B, C → 7 phenotypes: 1:6:15:20:15:6:1)."
  ],

  practiceQuestions: [
    {
      question: "In Antirrhinum (Snapdragon), a red flower was crossed with a white flower. In F1 generation, all pink flowers were obtained. When pink flowers were selfed, the F2 generation resulted in:",
      options: [
        "3 Red : 1 White",
        "2 Pink : 1 White",
        "1 Red : 2 Pink : 1 White",
        "All Pink"
      ],
      correctAnswer: 2,
      explanation: "Antirrhinum majus displays incomplete dominance. Crossing Red (RR) with White (rr) produces Pink (Rr) in F1. Selfing F1 (Rr × Rr) gives F2 with 1 Red (RR) : 2 Pink (Rr) : 1 White (rr), yielding a 1:2:1 ratio for both phenotype and genotype.",
      difficulty: "Easy",
      conceptTested: "Incomplete dominance in Snapdragon"
    },
    {
      question: "A person with blood group AB marries a person with blood group O. What are the possible blood groups of their biological children?",
      options: [
        "Only AB and O",
        "Only A and B",
        "A, B, AB, and O",
        "Only A, B, and AB"
      ],
      correctAnswer: 1,
      explanation: "Parent 1 has blood group AB (Genotype: I^A I^B) and produces gametes I^A and I^B. Parent 2 has blood group O (Genotype: ii) and produces only gamete 'i'. Progeny genotypes: I^A i (Blood group A, 50%) and I^B i (Blood group B, 50%). Children can only have blood groups A or B.",
      difficulty: "Medium",
      conceptTested: "Inheritance of ABO blood groups"
    },
    {
      question: "In human skin colour inheritance controlled by three polygenic gene pairs (A, B, C), how many total phenotypic categories are observed in the F2 generation?",
      options: [
        "4",
        "6",
        "7",
        "8"
      ],
      correctAnswer: 2,
      explanation: "For polygenic inheritance controlled by 'n' pairs of polygenes, the number of distinct phenotypic classes in F2 is 2n + 1. For 3 gene pairs (n = 3), total phenotypic classes = 2(3) + 1 = 7 classes (representing 6, 5, 4, 3, 2, 1, 0 dominant alleles).",
      difficulty: "Medium",
      conceptTested: "Formula for polygenic phenotypic classes"
    }
  ],

  pyqs: [
    {
      exam: "NEET UG",
      year: 2021,
      question: "Which of the following characteristics represent 'Inheritance of blood groups' in humans?\n(a) Dominance\n(b) Co-dominance\n(c) Multiple allele\n(d) Incomplete dominance\n(e) Polygenic inheritance",
      options: [
        "(b), (d) and (e)",
        "(a), (b) and (c)",
        "(b), (c) and (e)",
        "(a), (c) and (e)"
      ],
      correctAnswer: 1,
      explanation: "ABO blood grouping in humans shows: (a) Dominance (I^A and I^B are dominant over i), (b) Co-dominance (I^A and I^B are co-dominant in AB group), and (c) Multiple allelism (3 alleles I^A, I^B, i exist in the human population).",
      conceptTested: "Genetics of human ABO blood group system",
      verificationSource: "NEET UG 2021 Official Paper & NCERT Class 12 Biology"
    },
    {
      exam: "NEET UG",
      year: 2020,
      question: "In Antirrhinum (Snapdragon), a red flower was crossed with a white flower and in F1 generation pink flowers were obtained. When pink flowers were selfed, the F2 generation showed white, red and pink flowers. Choose the incorrect statement from the following:",
      options: [
        "This experiment does not follow the Principle of Dominance",
        "Pink colour in F1 is due to incomplete dominance",
        "Ratio of F2 is 1/4 (Red) : 2/4 (Pink) : 1/4 (White)",
        "Law of Segregation does not apply in this experiment"
      ],
      correctAnswer: 3,
      explanation: "The Law of Segregation (Purity of Gametes) DOES apply in incomplete dominance because the alleles R and r segregate purely during gamete formation, allowing pure Red (RR) and pure White (rr) to reappear in F2 in 1:2:1 ratio. Therefore, statement (4) is incorrect.",
      conceptTested: "Universality of Law of Segregation in Incomplete Dominance",
      verificationSource: "NEET UG 2020 Official Paper & NCERT Class 12"
    },
    {
      exam: "NEET UG",
      year: 2019,
      question: "In a marriage between a male with blood group A and a female with blood group B, the children could have which of the following blood groups?",
      options: [
        "A, B, AB, and O",
        "Only A and B",
        "Only AB",
        "Only A, B, and AB"
      ],
      correctAnswer: 0,
      explanation: "If the father is heterozygous (I^A i) and mother is heterozygous (I^B i), they can produce children with all four blood groups: A (I^A i), B (I^B i), AB (I^A I^B), and O (ii), each with a probability of 25%.",
      conceptTested: "ABO blood group crosses and possible progeny",
      verificationSource: "NEET UG 2019 Official Paper & NCERT Biology"
    },
    {
      exam: "NEET UG",
      year: 2018,
      question: "Starch synthesis in pea seeds is controlled by one gene. It has two alleles B and b. In heterozygotes (Bb), intermediate-sized starch grains are produced. This shows:",
      options: [
        "Co-dominance",
        "Incomplete dominance",
        "Complete dominance",
        "Polygenic inheritance"
      ],
      correctAnswer: 1,
      explanation: "In pea seeds, heterozygote Bb produces intermediate-sized starch grains between large (BB) and small (bb). This intermediate phenotype represents incomplete dominance for the character of starch grain size.",
      conceptTested: "Pleiotropy and Incomplete Dominance in Pea Starch Synthesis",
      verificationSource: "NEET UG 2018 Official Paper & NCERT Class 12 Biology Chapter 5"
    }
  ]
};
