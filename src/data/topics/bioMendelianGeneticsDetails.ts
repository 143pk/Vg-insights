import { DetailedTopicContent } from '../../types/neet';

export const bioMendelianGeneticsDetails: DetailedTopicContent = {
  topicId: "bio-mendelian-genetics",
  topicName: "Mendel's Laws of Inheritance & Monohybrid/Dihybrid Crosses",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Principles of Inheritance and Variation",

  whatIsThisTopic: "Gregor Mendel's classical genetics on Garden Pea (Pisum sativum), including the 7 contrasting traits, Monohybrid cross (3:1 phenotypic, 1:2:1 genotypic), Law of Dominance, Law of Segregation, Test Cross, Dihybrid cross (9:3:3:1), Law of Independent Assortment, and probability calculations.",

  basicIdea: [
    "Heredity is the process by which traits and characters are reliably transmitted from parents to offspring, while Variation represents the degree of difference exhibited by progeny from their parents and among themselves.",
    "Gregor Johann Mendel (1822–1884) conducted hybridization experiments on the Garden Pea (Pisum sativum) for 7 years (1856–1863) and formulated the fundamental statistical and biological principles of inheritance.",
    "Mendel selected 7 pairs of contrasting, mutually exclusive true-breeding characters in Pisum sativum, each existing in a clear Dominant and Recessive form.",
    "Law of Dominance states that in a heterozygote (hybrid), one allele of a pair masks the expression of the other (recessive) allele in the F1 generation.",
    "Law of Segregation (Purity of Gametes) dictates that alleles of a gene pair separate during gametogenesis (Anaphase I of meiosis), ensuring that every gamete receives only ONE allele. This law has NO exceptions in sexually reproducing diploid organisms.",
    "A Test Cross involves crossing an individual of dominant phenotype (genotype unknown: TT or Tt) with a homozygous recessive parent (tt) to unambiguously identify the unknown genotype (1:1 ratio reveals a heterozygote).",
    "Law of Independent Assortment states that when two pairs of traits are combined in a dihybrid, the segregation of one allele pair is completely independent of the segregation of the other pair during gamete formation (applies strictly to genes on non-homologous chromosomes)."
  ],

  importantTerms: [
    {
      term: "Heredity",
      definition: "The biological transmission of genetically determined characters and traits from parents to their progeny across successive generations.",
      neetNote: "Forms the conservative basis of genetics, ensuring species-specific identity."
    },
    {
      term: "Variation",
      definition: "The structural, physiological, and morphological differences exhibited by offspring of the same parents, caused by meiotic crossing over, independent assortment, and mutations.",
      neetNote: "Raw material for natural selection and organic evolution."
    },
    {
      term: "Factor / Gene",
      definition: "The discrete physical unit of inheritance (termed 'factor' by Mendel and renamed 'gene' by Wilhelm Johannsen in 1909) occupying a specific locus on a chromosome that encodes a specific polypeptide or trait.",
      neetNote: "Mendel emphasized that factors are stable, particulate, and do not blend."
    },
    {
      term: "Allele (Allelomorph)",
      definition: "Alternative, slightly different molecular forms of the same gene that reside at the exact same locus on homologous chromosomes (e.g., T and t for stem height).",
      neetNote: "In a diploid organism, an individual carries at most two alleles of a gene."
    },
    {
      term: "Homozygous (Pure-breeding)",
      definition: "A diploid condition where an organism possesses two identical alleles for a given gene locus (e.g., TT for homozygous tall or tt for homozygous dwarf).",
      neetNote: "Always produces only one type of gamete and breeds true upon selfing."
    },
    {
      term: "Heterozygous (Hybrid)",
      definition: "A diploid condition where an organism possesses two different alleles for a given gene locus (e.g., Tt for tall pea plant).",
      neetNote: "Produces two different types of gametes in equal 50%:50% frequency."
    },
    {
      term: "Genotype",
      definition: "The underlying genetic and allelic constitution of an organism for a particular character (e.g., TT, Tt, or tt).",
      neetNote: "Cannot always be deduced by simple visual observation of the organism."
    },
    {
      term: "Phenotype",
      definition: "The observable, physical, morphological, or biochemical expression of a particular genotype in a given environment (e.g., Tall vs Dwarf).",
      neetNote: "Organisms with identical phenotypes (e.g., TT and Tt) can have different genotypes."
    },
    {
      term: "True-breeding Line",
      definition: "A plant strain that has undergone continuous self-pollination for several generations, displaying stable trait inheritance and expression across all successive generations.",
      neetNote: "Mendel selected 14 true-breeding pea plant varieties (7 pairs of contrasting traits)."
    },
    {
      term: "Punnett Square",
      definition: "A graphical grid representation devised by British geneticist Reginald C. Punnett to calculate and visualize all possible combinations of maternal and paternal gametes and resulting zygotic genotypes.",
      neetNote: "Maternal gametes are typically arranged along the top and paternal along the left column."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Introduction to Heredity, Variation & Mendel's Selection of Garden Pea",
      paragraphs: [
        "Genetics is the branch of biology that deals with the principles of inheritance (heredity) and the variation of characters from parents to offspring. Offspring resemble their parents because they inherit nuclear genetic material (DNA organised into chromosomes) containing instructions for developmental and metabolic processes.",
        "However, sexually reproducing offspring are never exact carbon copies (clones) of their parents because meiosis introduces variation through: (1) Crossing over during Pachytene of Prophase I, (2) Random independent assortment of maternal and paternal chromosomes during Anaphase I, and (3) Random fusion of gametes during fertilisation.",
        "Gregor Johann Mendel (1822–1884), an Austrian monk working in the Augustinian monastery at Brünn (now Brno, Czech Republic), conducted quantitative hybridization experiments on the Garden Pea (Pisum sativum) between 1856 and 1863. He published his seminal paper 'Experiments on Plant Hybridization' in 1865 in the Proceedings of the Natural History Society of Brünn.",
        "Why Mendel Succeeded where predecessors failed: (1) Applied statistical and mathematical logic to biological problems, (2) Studied large sample sizes giving statistical credibility, (3) Studied one or two clearly contrasting characters at a time rather than the whole plant, (4) Confirmed inferences across multiple filial generations (P, F1, F2, F3), and (5) Maintained strict experimental control through emasculation (removal of anthers before dehiscence) and bagging (covering stigma to prevent contamination by foreign pollen).",
        "Why Garden Pea (Pisum sativum) was the ideal model organism: (1) Annual herb with a short life cycle (3–4 months), allowing multiple generations per year, (2) Bisexual flowers with natural self-pollination (cleistogamy) ensuring true-breeding parental lines, (3) Easy to artificially cross-pollinate by hand, (4) Produced a large number of viable seeds per cross, and (5) Displayed easily observable, mutually exclusive, sharply contrasting traits without intermediate blending."
      ],
      importantPoints: [
        "Mendel performed experiments for 7 years (1856–1863).",
        "Mendel worked on 14 true-breeding pea plant varieties representing 7 pairs of contrasting characters.",
        "Mendel's work remained unrecognised until 1900, when it was independently rediscovered by Hugo de Vries (Holland), Carl Correns (Germany), and Erich von Tschermak (Austria)."
      ]
    },
    {
      heading: "2. Mendel's Seven Pairs of Contrasting Characters in Pisum sativum",
      paragraphs: [
        "Mendel selected seven distinct morphological characters in the garden pea. Each character had two sharply contrasting, mutually exclusive traits: a Dominant trait (expressed in F1 hybrid) and a Recessive trait (masked in F1 hybrid, reappearing in F2).",
        "Understanding the dominant vs recessive forms is a guaranteed, high-frequency area in NEET UG. Notice especially the distinction between Pod colour and Seed colour, which is the most frequent source of confusion among candidates."
      ],
      tables: [
        {
          title: "Mendel's 7 Pairs of Contrasting Characters in Garden Pea (Pisum sativum)",
          headers: ["Character", "Dominant Trait", "Recessive Trait", "Chromosome (Enrichment)"],
          rows: [
            ["1. Stem Height", "Tall (T)", "Dwarf (t)", "Chromosome 4"],
            ["2. Flower Position", "Axial (along stem axis)", "Terminal (at tip of stem)", "Chromosome 4"],
            ["3. Flower Colour", "Violet / Purple", "White", "Chromosome 1"],
            ["4. Pod Shape", "Inflated / Full", "Constricted", "Chromosome 4"],
            ["5. Pod Colour", "Green (dominant!)", "Yellow (recessive!)", "Chromosome 5"],
            ["6. Seed Shape", "Round (smooth)", "Wrinkled", "Chromosome 7"],
            ["7. Seed (Cotyledon) Colour", "Yellow (dominant!)", "Green (recessive!)", "Chromosome 1"]
          ]
        }
      ],
      importantPoints: [
        "🔥 NEET TRAP ALERT: Pod Colour Dominant = GREEN; Seed (Cotyledon) Colour Dominant = YELLOW.",
        "Inflated pod is Dominant over Constricted pod; Axial flower position is Dominant over Terminal.",
        "The 7 characters studied by Mendel are distributed across only 4 chromosomes (Chromosomes 1, 4, 5, and 7)."
      ]
    },
    {
      heading: "3. Monohybrid Cross, Law of Dominance & Law of Segregation",
      paragraphs: [
        "A Monohybrid Cross is a cross between two true-breeding parental plants that differ in only ONE pair of contrasting characters (e.g., Stem Height: Tall vs Dwarf).",
        "Step-by-Step Monohybrid Protocol:",
        "1. Parental Generation (P): True-breeding Tall ($TT$) is cross-pollinated with true-breeding Dwarf ($tt$).",
        "2. Gamete Formation: Homozygous $TT$ produces only $T$ gametes; homozygous $tt$ produces only $t$ gametes.",
        "3. First Filial Generation (F1): Fusion of gametes yields $Tt$. 100% of F1 plants are phenotypically TALL. The dwarf trait disappears completely in F1 (no intermediate or blended height).",
        "4. F1 Self-Pollination (Selfing): $Tt \\times Tt$. Each heterozygous parent produces two types of gametes in equal 1:1 proportion: $50\\%\\ T$ and $50\\%\\ t$.",
        "5. Second Filial Generation (F2): Punnett square gives 4 zygotic combinations: 1 $TT$ (Homozygous tall) + 2 $Tt$ (Heterozygous tall) + 1 $tt$ (Homozygous dwarf).",
        "Phenotypic Ratio of F2: 3 Tall : 1 Dwarf (3:1 ratio).",
        "Genotypic Ratio of F2: 1 $TT$ : 2 $Tt$ : 1 $tt$ (1:2:1 ratio).",
        "Binomial Expression of Monohybrid Cross: The generation of gametes and zygotes can be mathematically represented by the binomial expansion $(ax + by)^2$. With gamete frequencies $1/2\\ T$ and $1/2\\ t$, the expansion $(1/2\\ T + 1/2\\ t)^2 = 1/4\\ TT + 1/2\\ Tt + 1/4\\ tt$.",
        "Law of Dominance: (i) Characters are controlled by discrete units called factors. (ii) Factors occur in pairs. (iii) In a dissimilar pair of factors, one member of the pair dominates (dominant allele) and the other remains unexpressed (recessive allele). This law explains the expression of only one parental trait in F1 and the 3:1 ratio in F2.",
        "Law of Segregation (Purity of Gametes): Though parents contain two alleles, during gamete formation the factors/alleles of a pair segregate (separate) from each other such that a gamete receives only ONE of the two factors. Homozygous parents produce all identical gametes; heterozygous parents produce two types of gametes in equal 50% frequency. Because alleles do not blend and gametes remain purely single-allele carriers, this is known as the Law of Purity of Gametes.",
        "Meiotic Basis of Segregation: Homologous chromosomes carrying the allele pair separate during Anaphase I of Meiosis I. This law has NO EXCEPTIONS in diploid organisms."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="650" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="325" y="28" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Mendel's Monohybrid Cross &amp; Punnett Square</text>
          
          <!-- P Generation -->
          <rect x="40" y="45" width="260" height="60" fill="#e0f2fe" rx="8" stroke="#38bdf8"/>
          <text x="170" y="68" fill="#0369a1" font-size="13" font-weight="bold" text-anchor="middle">Parental (P): Tall (TT) × Dwarf (tt)</text>
          <text x="170" y="88" fill="#0284c7" font-size="12" text-anchor="middle">Gametes: [T] and [t]  →  F1: Tt (100% Tall)</text>
          
          <!-- F1 Selfing -->
          <rect x="340" y="45" width="270" height="60" fill="#fef3c7" rx="8" stroke="#f59e0b"/>
          <text x="475" y="68" fill="#92400e" font-size="13" font-weight="bold" text-anchor="middle">F1 Selfing: Tt × Tt</text>
          <text x="475" y="88" fill="#b45309" font-size="12" text-anchor="middle">Gametes from each parent: 1/2 T, 1/2 t</text>

          <!-- 2x2 Punnett Square -->
          <g transform="translate(140, 125)">
            <!-- Top Labels (Female gametes) -->
            <rect x="80" y="0" width="100" height="30" fill="#dbeafe" stroke="#93c5fd" rx="4"/>
            <text x="130" y="20" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">♀ T (1/2)</text>
            <rect x="190" y="0" width="100" height="30" fill="#dbeafe" stroke="#93c5fd" rx="4"/>
            <text x="240" y="20" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">♀ t (1/2)</text>

            <!-- Left Labels (Male gametes) -->
            <rect x="0" y="40" width="70" height="75" fill="#fee2e2" stroke="#fca5a5" rx="4"/>
            <text x="35" y="82" fill="#991b1b" font-size="14" font-weight="bold" text-anchor="middle">♂ T (1/2)</text>
            <rect x="0" y="125" width="70" height="75" fill="#fee2e2" stroke="#fca5a5" rx="4"/>
            <text x="35" y="167" fill="#991b1b" font-size="14" font-weight="bold" text-anchor="middle">♂ t (1/2)</text>

            <!-- Box 1: TT -->
            <rect x="80" y="40" width="100" height="75" fill="#dcfce7" stroke="#86efac" rx="6"/>
            <text x="130" y="70" fill="#166534" font-size="16" font-weight="bold" text-anchor="middle">TT</text>
            <text x="130" y="92" fill="#15803d" font-size="12" text-anchor="middle">Homozygous Tall</text>
            <text x="130" y="107" fill="#16a34a" font-size="11" text-anchor="middle">(1/4 or 25%)</text>

            <!-- Box 2: Tt -->
            <rect x="190" y="40" width="100" height="75" fill="#dcfce7" stroke="#86efac" rx="6"/>
            <text x="240" y="70" fill="#166534" font-size="16" font-weight="bold" text-anchor="middle">Tt</text>
            <text x="240" y="92" fill="#15803d" font-size="12" text-anchor="middle">Heterozygous Tall</text>
            <text x="240" y="107" fill="#16a34a" font-size="11" text-anchor="middle">(1/4 or 25%)</text>

            <!-- Box 3: Tt -->
            <rect x="80" y="125" width="100" height="75" fill="#dcfce7" stroke="#86efac" rx="6"/>
            <text x="130" y="155" fill="#166534" font-size="16" font-weight="bold" text-anchor="middle">Tt</text>
            <text x="130" y="177" fill="#15803d" font-size="12" text-anchor="middle">Heterozygous Tall</text>
            <text x="130" y="192" fill="#16a34a" font-size="11" text-anchor="middle">(1/4 or 25%)</text>

            <!-- Box 4: tt -->
            <rect x="190" y="125" width="100" height="75" fill="#fef2f2" stroke="#fecaca" rx="6"/>
            <text x="240" y="155" fill="#991b1b" font-size="16" font-weight="bold" text-anchor="middle">tt</text>
            <text x="240" y="177" fill="#b91c1c" font-size="12" text-anchor="middle">Homozygous Dwarf</text>
            <text x="240" y="192" fill="#dc2626" font-size="11" text-anchor="middle">(1/4 or 25%)</text>
          </g>

          <!-- Summary Ratios -->
          <rect x="50" y="330" width="550" height="24" fill="#f1f5f9" rx="4"/>
          <text x="325" y="347" fill="#334155" font-size="12" font-weight="bold" text-anchor="middle">
            F2 Phenotypic Ratio = 3 Tall : 1 Dwarf  |  F2 Genotypic Ratio = 1 TT : 2 Tt : 1 tt (1:2:1)
          </text>
        </svg>`,
        caption: "Fully labelled Punnett square of Mendel's Monohybrid Cross (TT × tt) through F1 and F2 generations.",
        guide: "WHAT TO OBSERVE: Note that phenotypic ratio is 3:1 because TT and Tt are physically indistinguishable, but genotypic ratio is 1:2:1 because half of the F2 offspring are heterozygous carriers."
      },
      importantPoints: [
        "Phenotypic ratio of Monohybrid F2 = 3:1.",
        "Genotypic ratio of Monohybrid F2 = 1:2:1 (25% TT, 50% Tt, 25% tt).",
        "Law of Segregation is universal and has NO exceptions in diploid sexually reproducing organisms."
      ]
    },
    {
      heading: "4. Test Cross vs Back Cross — Principles & Calculations",
      paragraphs: [
        "A dominant phenotype plant in F2 could be either homozygous dominant ($TT$) or heterozygous ($Tt$). Because physical appearance does not reveal the underlying genotype, Mendel designed the Test Cross.",
        "Definition of Test Cross: A cross between an individual showing the dominant phenotype (unknown genotype) and a homozygous recessive parent ($tt$).",
        "Case 1: If the unknown dominant plant is Homozygous ($TT$):",
        "Cross: $TT \\times tt \\to$ All progeny are $Tt$ (100% Tall). If all offspring exhibit the dominant phenotype, the unknown parent is pure/homozygous dominant ($TT$).",
        "Case 2: If the unknown dominant plant is Heterozygous ($Tt$):",
        "Cross: $Tt \\times tt \\to 50\\%\\ Tt$ (Tall) and $50\\%\\ tt$ (Dwarf). If offspring segregate in a 1 Tall : 1 Dwarf (1:1) ratio, the unknown parent is heterozygous ($Tt$).",
        "Back Cross Concept: A cross of an F1 progeny ($Tt$) with EITHER of its two parents—either the dominant parent ($TT$) or the recessive parent ($tt$).",
        "Critical Distinction: (1) Crossing $Tt \\times tt$ is both a back cross and a test cross. (2) Crossing $Tt \\times TT$ is an outcross (a back cross to dominant parent), which produces 100% tall plants and CANNOT determine heterozygosity.",
        "🔥 NEET GOLDEN RULE: 'All test crosses are back crosses, but all back crosses are NOT test crosses.'"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="650" height="300" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="325" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Mendel's Test Cross: Determining Unknown Genotype</text>
          
          <!-- Test Cross Case A -->
          <g transform="translate(30, 45)">
            <rect width="275" height="235" fill="#eff6ff" rx="8" stroke="#bfdbfe"/>
            <text x="137" y="24" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">CASE A: Unknown is TT (Homozygous)</text>
            <text x="137" y="44" fill="#3b82f6" font-size="12" text-anchor="middle">Cross: TT (Tall) × tt (Homozygous Recessive)</text>
            
            <!-- Punnett grid Case A -->
            <rect x="50" y="60" width="80" height="35" fill="#dbeafe" stroke="#93c5fd" rx="4"/>
            <text x="90" y="82" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">t</text>
            <rect x="145" y="60" width="80" height="35" fill="#dbeafe" stroke="#93c5fd" rx="4"/>
            <text x="185" y="82" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">t</text>
            
            <rect x="50" y="105" width="80" height="45" fill="#dcfce7" stroke="#86efac" rx="4"/>
            <text x="90" y="128" fill="#166534" font-size="14" font-weight="bold" text-anchor="middle">Tt (Tall)</text>
            <rect x="145" y="105" width="80" height="45" fill="#dcfce7" stroke="#86efac" rx="4"/>
            <text x="185" y="128" fill="#166534" font-size="14" font-weight="bold" text-anchor="middle">Tt (Tall)</text>
            
            <rect x="20" y="170" width="235" height="50" fill="#ffffff" stroke="#93c5fd" rx="6"/>
            <text x="137" y="190" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">RESULT: 100% Dominant (Tall)</text>
            <text x="137" y="208" fill="#0369a1" font-size="11" text-anchor="middle">Conclusion: Unknown parent is TT</text>
          </g>

          <!-- Test Cross Case B -->
          <g transform="translate(345, 45)">
            <rect width="275" height="235" fill="#fef2f2" rx="8" stroke="#fecaca"/>
            <text x="137" y="24" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">CASE B: Unknown is Tt (Heterozygous)</text>
            <text x="137" y="44" fill="#ef4444" font-size="12" text-anchor="middle">Cross: Tt (Tall) × tt (Homozygous Recessive)</text>
            
            <!-- Punnett grid Case B -->
            <rect x="50" y="60" width="80" height="35" fill="#fee2e2" stroke="#fca5a5" rx="4"/>
            <text x="90" y="82" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">t</text>
            <rect x="145" y="60" width="80" height="35" fill="#fee2e2" stroke="#fca5a5" rx="4"/>
            <text x="185" y="82" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">t</text>
            
            <rect x="50" y="105" width="80" height="45" fill="#dcfce7" stroke="#86efac" rx="4"/>
            <text x="90" y="128" fill="#166534" font-size="14" font-weight="bold" text-anchor="middle">Tt (Tall)</text>
            <rect x="145" y="105" width="80" height="45" fill="#fee2e2" stroke="#fca5a5" rx="4"/>
            <text x="185" y="128" fill="#991b1b" font-size="14" font-weight="bold" text-anchor="middle">tt (Dwarf)</text>
            
            <rect x="20" y="170" width="235" height="50" fill="#ffffff" stroke="#fca5a5" rx="6"/>
            <text x="137" y="190" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">RESULT: 1 Tall : 1 Dwarf (50%:50%)</text>
            <text x="137" y="208" fill="#991b1b" font-size="11" text-anchor="middle">Conclusion: Unknown parent is Tt</text>
          </g>
        </svg>`,
        caption: "Comparison of Test Cross outcomes for Homozygous Dominant (TT) vs Heterozygous (Tt) unknown plants.",
        guide: "NEET IDENTIFICATION POINTS: In monohybrid test cross, a 1:1 ratio confirms heterozygosity (Tt). If all offspring are tall (100%), the plant is homozygous dominant (TT)."
      },
      importantPoints: [
        "Monohybrid test cross phenotypic and genotypic ratio is ALWAYS 1:1 (50% Tall : 50% Dwarf).",
        "Dihybrid test cross ratio is ALWAYS 1:1:1:1.",
        "Trihybrid test cross ratio is ALWAYS 1:1:1:1:1:1:1:1 ($2^3 = 8$ classes)."
      ]
    },
    {
      heading: "5. Dihybrid Cross & Law of Independent Assortment",
      paragraphs: [
        "A Dihybrid Cross is a breeding experiment between two parental organisms that differ simultaneously in TWO pairs of contrasting characters.",
        "Mendel's Classic Dihybrid Cross: Seed Shape (Round 'R' vs Wrinkled 'r') and Seed Colour (Yellow 'Y' vs Green 'y').",
        "1. Parental Generation (P): Pure-breeding Round Yellow ($RRYY$) $\\times$ Pure-breeding Wrinkled Green ($rryy$).",
        "2. Gametes: $RRYY$ produces only $RY$; $rryy$ produces only $ry$.",
        "3. F1 Generation: Fusion produces $RrYy$ (100% Round Yellow).",
        "4. F1 Gametogenesis: The heterozygous dihybrid $RrYy$ produces FOUR distinct types of gametes in equal frequency (25% each) due to independent assortment: $RY$ (1/4), $Ry$ (1/4), $rY$ (1/4), and $ry$ (1/4).",
        "5. F2 Generation (F1 selfing: $RrYy \\times RrYy$): A $4 \\times 4$ Punnett square produces 16 zygotic combinations.",
        "Phenotypic Breakdown of F2 Generation (9:3:3:1):",
        "• 9/16 Round Yellow (Parental combination): At least one $R$ and one $Y$ ($R\\_Y\\_$). Genotypes: 1 $RRYY$ + 2 $RRYy$ + 2 $RrYY$ + 4 $RrYy$.",
        "• 3/16 Round Green (Recombinant combination): At least one $R$ and homozygous $yy$ ($R\\_yy$). Genotypes: 1 $RRyy$ + 2 $Rryy$.",
        "• 3/16 Wrinkled Yellow (Recombinant combination): Homozygous $rr$ and at least one $Y$ ($rrY\\_$). Genotypes: 1 $rrYY$ + 2 $rrYy$.",
        "• 1/16 Wrinkled Green (Parental combination): Double homozygous recessive ($rryy$). Genotype: 1 $rryy$.",
        "Summary of F2 Ratios: Phenotypic Ratio = 9 : 3 : 3 : 1. Genotypic Ratio = 1:2:2:4:1:2:1:2:1 (9 distinct genotypes).",
        "Mathematical Derivation of Dihybrid Ratio: Product of two independent monohybrid crosses: $(3\\ \\text{Round} : 1\\ \\text{Wrinkled}) \\times (3\\ \\text{Yellow} : 1\\ \\text{Green}) = 9\\ \\text{Round Yellow} : 3\\ \\text{Round Green} : 3\\ \\text{Wrinkled Yellow} : 1\\ \\text{Wrinkled Green}$.",
        "Law of Independent Assortment: 'When two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair of characters at the time of gamete formation.'",
        "Prerequisite for Independent Assortment: Applies ONLY to genes located on DIFFERENT (non-homologous) chromosomes or genes located far apart on the same chromosome. If two genes are located close together on the same chromosome, they show LINKAGE (deviation from 9:3:3:1)."
      ],
      importantPoints: [
        "F2 Dihybrid Phenotypic Classes: 4 (9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green).",
        "Parental Phenotypes in F2 = 9/16 + 1/16 = 10/16 (62.5%).",
        "Recombinant (New) Phenotypes in F2 = 3/16 + 3/16 = 6/16 (37.5%).",
        "F2 Dihybrid Genotypes count = 9 distinct genotypes; completely homozygous individuals ($RRYY, RRyy, rrYY, rryy$) = 4/16 (25%)."
      ]
    },
    {
      heading: "6. Probability & Mathematical Formulas in NEET Genetics",
      paragraphs: [
        "NEET UG genetics questions frequently require rapid mathematical calculation of gamete types, phenotypes, genotypes, and specific progeny probabilities.",
        "Core Probability Rules:",
        "1. Product Rule (Multiplication Rule): The probability of two independent events occurring together is the product of their individual probabilities: $P(A \\text{ and } B) = P(A) \\times P(B)$.",
        "Example: In a cross $AaBb \\times AaBb$, the probability of obtaining an offspring with genotype $AAbb$ is $P(AA) \\times P(bb) = (1/4) \\times (1/4) = 1/16$.",
        "2. Sum Rule (Addition Rule): The probability of an outcome that can occur via two or more mutually exclusive ways is the sum of their individual probabilities: $P(A \\text{ or } B) = P(A) + P(B)$."
      ],
      tables: [
        {
          title: "Universal Genetics Formulas for 'n' Heterozygous Gene Pairs (Polyhybrid Cross)",
          headers: ["Parameter", "Formula (n = number of heterozygous gene pairs)", "Monohybrid (n=1)", "Dihybrid (n=2)", "Trihybrid (n=3)"],
          rows: [
            ["Types of Gametes formed by F1", "2^n", "2^1 = 2 (T, t)", "2^2 = 4 (RY, Ry, rY, ry)", "2^3 = 8"],
            ["Number of F2 Phenotypic classes", "2^n", "2^1 = 2 (Tall, Dwarf)", "2^2 = 4 (9:3:3:1)", "2^3 = 8"],
            ["Number of F2 Genotypic classes", "3^n", "3^1 = 3 (1:2:1)", "3^2 = 9", "3^3 = 27"],
            ["Number of Zygotic combinations in F2", "4^n", "4^1 = 4", "4^2 = 16", "4^3 = 64"],
            ["Dihybrid Test Cross Ratio Classes", "2^n", "1:1 (2 classes)", "1:1:1:1 (4 classes)", "1:1:1:1:1:1:1:1 (8 classes)"]
          ]
        }
      ],
      examples: [
        {
          problem: "Find the number of different types of gametes produced by an individual with genotype AaBbCcDdEE.",
          given: "Genotype = AaBbCcDdEE. Heterozygous loci: Aa (1), Bb (2), Cc (3), Dd (4). Homozygous locus: EE.",
          stepByStep: [
            "Step 1: Identify the number of heterozygous gene pairs (n).",
            "Here, Aa, Bb, Cc, Dd are heterozygous (n = 4). EE is homozygous and does not contribute to variability (produces only 'E').",
            "Step 2: Apply the formula for types of gametes = 2^n.",
            "Number of gametes = 2^4 = 16 different gamete types."
          ],
          answer: "16 different types of gametes."
        },
        {
          problem: "In a cross between AaBbCc × AaBbCc, what is the probability of producing an offspring with genotype AABbcc?",
          given: "Cross: AaBbCc × AaBbCc. Target genotype: AABbcc.",
          stepByStep: [
            "Step 1: Break down into individual monohybrid crosses using the Product Rule.",
            "Cross 1: Aa × Aa → P(AA) = 1/4",
            "Cross 2: Bb × Bb → P(Bb) = 2/4 = 1/2",
            "Cross 3: Cc × Cc → P(cc) = 1/4",
            "Step 2: Multiply individual probabilities: P(AABbcc) = P(AA) × P(Bb) × P(cc) = (1/4) × (1/2) × (1/4) = 1/32."
          ],
          answer: "Probability = 1/32 (or 3.125%)."
        }
      ],
      importantPoints: [
        "Always calculate 'n' as only the number of HETEROZYGOUS loci; homozygous loci (e.g., AA, bb, CC) do not increase gametic diversity.",
        "Number of F2 genotypes = 3^n; Number of F2 phenotypes = 2^n."
      ]
    }
  ],

  formulae: [
    {
      title: "Number of Types of Gametes",
      formula: "N_{\\text{gametes}} = 2^n",
      meaning: "Calculates the total distinct gamete genotypes produced by a parent with n heterozygous gene pairs.",
      symbols: "n = \\text{number of heterozygous allele pairs}",
      unit: "dimensionless",
      conditions: "Genes must assort independently (not linked).",
      whenToUse: "Use to find gamete types for any multi-gene genotype (e.g., AaBbCc → 2^3 = 8)."
    },
    {
      title: "Number of F2 Phenotypic & Genotypic Classes",
      formula: "\\text{Phenotypes} = 2^n, \\quad \\text{Genotypes} = 3^n, \\quad \\text{Zygotic Combinations} = 4^n",
      meaning: "Predicts the phenotypic and genotypic diversity in the F2 generation of a polyhybrid cross.",
      symbols: "n = \\text{number of hybrid gene pairs}",
      unit: "dimensionless",
      conditions: "Complete dominance with independent assortment.",
      whenToUse: "Use in NEET MCQs asking for number of phenotypes or genotypes in dihybrid (n=2) or trihybrid (n=3) crosses."
    },
    {
      title: "Test Cross Ratio Formula",
      formula: "\\text{Test Cross Ratio} = (1:1)^n",
      meaning: "Expands the 1:1 monohybrid test cross ratio to polyhybrid test crosses.",
      symbols: "n = \\text{number of heterozygous pairs in test subject}",
      unit: "dimensionless",
      conditions: "Crossing heterozygous individual with homozygous recessive parent.",
      whenToUse: "Monohybrid: 1:1; Dihybrid: 1:1:1:1; Trihybrid: 1:1:1:1:1:1:1:1."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 650 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
      <rect width="650" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="325" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Mendelian Cross Summary Map</text>
      
      <!-- Monohybrid Box -->
      <g transform="translate(30, 45)">
        <rect width="180" height="250" fill="#f0fdf4" rx="8" stroke="#86efac"/>
        <text x="90" y="25" fill="#166534" font-size="13" font-weight="bold" text-anchor="middle">MONOHYBRID</text>
        <text x="90" y="42" fill="#15803d" font-size="11" text-anchor="middle">(1 gene pair, e.g. Tt)</text>
        
        <line x1="15" y1="52" x2="165" y2="52" stroke="#bbf7d0"/>
        
        <text x="15" y="75" fill="#1e293b" font-size="11" font-weight="bold">F1 Phenotype:</text>
        <text x="15" y="92" fill="#15803d" font-size="11">100% Dominant (Tall)</text>
        
        <text x="15" y="118" fill="#1e293b" font-size="11" font-weight="bold">F2 Phenotypic Ratio:</text>
        <text x="15" y="135" fill="#15803d" font-size="12" font-weight="bold">3 : 1 (Tall : Dwarf)</text>
        
        <text x="15" y="160" fill="#1e293b" font-size="11" font-weight="bold">F2 Genotypic Ratio:</text>
        <text x="15" y="177" fill="#15803d" font-size="12" font-weight="bold">1 : 2 : 1 (TT:Tt:tt)</text>
        
        <text x="15" y="202" fill="#1e293b" font-size="11" font-weight="bold">Test Cross Ratio:</text>
        <text x="15" y="219" fill="#059669" font-size="12" font-weight="bold">1 : 1 (Tt : tt)</text>
        
        <text x="90" y="240" fill="#047857" font-size="10" text-anchor="middle">Laws: Dominance &amp; Segregation</text>
      </g>

      <!-- Dihybrid Box -->
      <g transform="translate(235, 45)">
        <rect width="180" height="250" fill="#eff6ff" rx="8" stroke="#93c5fd"/>
        <text x="90" y="25" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">DIHYBRID</text>
        <text x="90" y="42" fill="#2563eb" font-size="11" text-anchor="middle">(2 gene pairs, RrYy)</text>
        
        <line x1="15" y1="52" x2="165" y2="52" stroke="#bfdbfe"/>
        
        <text x="15" y="75" fill="#1e293b" font-size="11" font-weight="bold">F1 Phenotype:</text>
        <text x="15" y="92" fill="#2563eb" font-size="11">100% Round Yellow</text>
        
        <text x="15" y="118" fill="#1e293b" font-size="11" font-weight="bold">F2 Phenotypic Ratio:</text>
        <text x="15" y="135" fill="#1d4ed8" font-size="12" font-weight="bold">9 : 3 : 3 : 1</text>
        
        <text x="15" y="160" fill="#1e293b" font-size="11" font-weight="bold">F2 Genotypes:</text>
        <text x="15" y="177" fill="#1d4ed8" font-size="11">9 distinct classes (1:2:2:4...)</text>
        
        <text x="15" y="202" fill="#1e293b" font-size="11" font-weight="bold">Test Cross Ratio:</text>
        <text x="15" y="219" fill="#2563eb" font-size="12" font-weight="bold">1 : 1 : 1 : 1</text>
        
        <text x="90" y="240" fill="#1d4ed8" font-size="10" text-anchor="middle">Law: Independent Assortment</text>
      </g>

      <!-- Polyhybrid Formulae Box -->
      <g transform="translate(440, 45)">
        <rect width="180" height="250" fill="#fdf4ff" rx="8" stroke="#f0abfc"/>
        <text x="90" y="25" fill="#86198f" font-size="13" font-weight="bold" text-anchor="middle">POLYHYBRID (n)</text>
        <text x="90" y="42" fill="#a21caf" font-size="11" text-anchor="middle">(General Rules)</text>
        
        <line x1="15" y1="52" x2="165" y2="52" stroke="#f5d0fe"/>
        
        <text x="15" y="75" fill="#1e293b" font-size="11" font-weight="bold">Gamete Types:</text>
        <text x="15" y="92" fill="#a21caf" font-size="12" font-weight="bold">2^n</text>
        
        <text x="15" y="118" fill="#1e293b" font-size="11" font-weight="bold">F2 Phenotypes:</text>
        <text x="15" y="135" fill="#a21caf" font-size="12" font-weight="bold">2^n</text>
        
        <text x="15" y="160" fill="#1e293b" font-size="11" font-weight="bold">F2 Genotypes:</text>
        <text x="15" y="177" fill="#a21caf" font-size="12" font-weight="bold">3^n</text>
        
        <text x="15" y="202" fill="#1e293b" font-size="11" font-weight="bold">Zygotic Boxes:</text>
        <text x="15" y="219" fill="#a21caf" font-size="12" font-weight="bold">4^n</text>
        
        <text x="90" y="240" fill="#701a75" font-size="10" text-anchor="middle">n = heterozygous gene pairs</text>
      </g>
    </svg>`,
    caption: "Comparative summary map of Monohybrid, Dihybrid, and Polyhybrid Mendelian crosses and universal genetics formulas."
  },

  neetImportantPoints: [
    "Mendel's experimental period was 1856 to 1863 (7 years).",
    "Mendel selected 14 true-breeding pea plant varieties representing 7 pairs of contrasting traits.",
    "Green pod is dominant over yellow pod, but Yellow seed is dominant over green seed.",
    "Law of Segregation (Purity of Gametes) has NO exceptions in sexually reproducing diploid organisms.",
    "Law of Independent Assortment holds true ONLY for genes located on different chromosomes (syntenic linked genes violate this law).",
    "Monohybrid test cross ratio = 1:1; Dihybrid test cross ratio = 1:1:1:1.",
    "Genotypic ratio of monohybrid F2 = 1:2:1; Phenotypic ratio = 3:1."
  ],

  commonConfusions: [
    {
      commonConfusion: "Dominant alleles are more frequent or 'stronger' in nature than recessive alleles.",
      correctFact: "Dominance refers ONLY to the expression of an allele over another in a heterozygote (e.g., T masks t). It does NOT imply higher population frequency, evolutionary superiority, or greater fitness.",
      whyItMattersForNEET: "Frequent conceptual Assertion-Reason trap in NEET."
    },
    {
      commonConfusion: "Yellow pod colour is dominant because yellow seed colour is dominant.",
      correctFact: "For Pod Colour: GREEN is Dominant, Yellow is Recessive. For Seed Colour: YELLOW is Dominant, Green is Recessive.",
      whyItMattersForNEET: "One of the most frequently tested direct traps in NEET Biology."
    },
    {
      commonConfusion: "A back cross is identical to a test cross.",
      correctFact: "A test cross specifically crosses with the homozygous RECESSIVE parent ($Tt \\times tt$). A back cross is any cross with either parent ($Tt \\times tt$ or $Tt \\times TT$). Every test cross is a back cross, but every back cross is not a test cross.",
      whyItMattersForNEET: "Frequently tested in statement-based evaluation questions."
    }
  ],

  quickRevision: [
    "Mendel: 1856–1863 (7 years) on Pisum sativum; 14 true-breeding lines (7 contrasting pairs).",
    "7 Traits: Height (T/t), Flower Pos (Axial/Terminal), Flower Col (Violet/White), Pod Shape (Inflated/Constricted), Pod Col (Green/Yellow), Seed Shape (Round/Wrinkled), Seed Col (Yellow/Green).",
    "Monohybrid F2: Phenotype = 3:1 | Genotype = 1:2:1 (1 TT : 2 Tt : 1 tt).",
    "Dihybrid F2: Phenotype = 9:3:3:1 | Genotypes = 9 distinct classes (1:2:2:4:1:2:1:2:1).",
    "Test Cross: Unknown dominant × homozygous recessive (tt). Monohybrid = 1:1, Dihybrid = 1:1:1:1.",
    "Universal Formulas: Gamete types = 2^n, Phenotypes = 2^n, Genotypes = 3^n, Zygotes = 4^n.",
    "Segregation = Separation of homologous chromosomes during Anaphase I (Universal, No exceptions)."
  ],

  practiceQuestions: [
    {
      question: "How many different types of genetically distinct gametes can be produced by a plant with the genotype AABbCcDdEE?",
      options: [
        "4",
        "8",
        "16",
        "32"
      ],
      correctAnswer: 1,
      explanation: "The formula for number of types of gametes is 2^n, where n is the number of HETEROZYGOUS gene pairs. In the genotype AABbCcDdEE: AA is homozygous, Bb is heterozygous (1), Cc is heterozygous (2), Dd is heterozygous (3), EE is homozygous. Thus, n = 3. Number of gametes = 2^3 = 8.",
      difficulty: "Medium",
      conceptTested: "Calculation of gamete diversity using 2^n formula"
    },
    {
      question: "In a plant, red fruit (R) is dominant over yellow fruit (r) and tallness (T) is dominant over shortness (t). If a plant with genotype RrTt is crossed with a plant with genotype rrtt, what will be the percentage of tall plants with red fruit in the progeny?",
      options: [
        "100%",
        "50%",
        "25%",
        "75%"
      ],
      correctAnswer: 2,
      explanation: "This is a dihybrid test cross (RrTt × rrtt). The offspring segregate in the ratio 1 RrTt (Red Tall) : 1 Rrtt (Red Short) : 1 rrTt (Yellow Tall) : 1 rrtt (Yellow Short), which equals 25% for each phenotype. Therefore, the percentage of tall plants with red fruit (RrTt) is 25%.",
      difficulty: "Easy",
      conceptTested: "Dihybrid test cross ratio analysis"
    },
    {
      question: "A cross between pure breeding pea plants with round yellow seeds and wrinkled green seeds produces F1 progeny. When F1 is selfed, what fraction of the total F2 progeny will be homozygous for both seed shape and seed colour?",
      options: [
        "1/16",
        "2/16",
        "4/16",
        "9/16"
      ],
      correctAnswer: 2,
      explanation: "In the F2 generation of a dihybrid cross (RrYy × RrYy), completely homozygous individuals for both traits include: RRYY (1/16), RRyy (1/16), rrYY (1/16), and rryy (1/16). Total homozygous fraction = 1/16 + 1/16 + 1/16 + 1/16 = 4/16 (or 1/4 = 25%).",
      difficulty: "Medium",
      conceptTested: "Dihybrid F2 genotype frequency analysis"
    }
  ],

  pyqs: [
    {
      exam: "NEET UG",
      year: 2023,
      question: "The phenomenon of pleiotropism refers to:",
      options: [
        "Presence of several alleles in a single gene controlling a single trait",
        "A single gene affecting multiple phenotypic expressions",
        "More than two genes affecting a single trait",
        "Presence of two alleles, each of which is independently expressed in a heterozygote"
      ],
      correctAnswer: 1,
      explanation: "Pleiotropy is the phenomenon where a single gene product influences multiple phenotypic traits simultaneously (e.g., Phenylketonuria in humans or starch grain size/seed shape in Pisum sativum).",
      conceptTested: "Definition and concept of Pleiotropy",
      verificationSource: "NEET UG 2023 Official Paper & NCERT Class 12 Biology Chapter 5"
    },
    {
      exam: "NEET UG",
      year: 2022,
      question: "Which of the following characters was NOT chosen by Mendel in his experiments on garden pea?",
      options: [
        "Pod shape (Inflated or Constricted)",
        "Trichomes (Glandular or Non-glandular)",
        "Seed colour (Yellow or Green)",
        "Flower position (Axial or Terminal)"
      ],
      correctAnswer: 1,
      explanation: "Mendel chose 7 characters: Stem height, Flower colour, Flower position, Pod shape, Pod colour, Seed shape, and Seed colour. Trichomes (glandular or non-glandular) was NOT chosen by Mendel.",
      conceptTested: "Mendel's 7 contrasting characters in garden pea",
      verificationSource: "NEET UG 2022 Official Paper & NCERT Class 12 Biology"
    },
    {
      exam: "NEET UG",
      year: 2020,
      question: "How many true breeding pea plant varieties did Mendel select as pairs, which were similar except for one character with contrasting traits?",
      options: [
        "4",
        "2",
        "14",
        "8"
      ],
      correctAnswer: 2,
      explanation: "According to NCERT Class 12 Chapter 5: 'Mendel selected 14 true-breeding pea plant varieties, as pairs which were similar except for one character with contrasting traits.'",
      conceptTested: "Mendel's experimental plant lines",
      verificationSource: "NEET UG 2020 Official Paper & NCERT Biology"
    },
    {
      exam: "NEET UG",
      year: 2019,
      question: "What is the genetic disorder in which an individual has an overall masculine development, gynaecomastia, and is sterile?",
      options: [
        "Down's syndrome",
        "Turner's syndrome",
        "Klinefelter's syndrome",
        "Edward's syndrome"
      ],
      correctAnswer: 2,
      explanation: "Klinefelter's syndrome is caused by the presence of an additional X-chromosome in males (44 + XXY = 47). Individuals have overall masculine development, gynaecomastia (breast development), and are sterile.",
      conceptTested: "Chromosomal disorders - Klinefelter syndrome",
      verificationSource: "NEET UG 2019 Official Paper & NCERT Class 12 Biology"
    },
    {
      exam: "NEET UG",
      year: 2017,
      question: "Among the following characters, which one was found to be recessive in the garden pea experiments of Mendel?",
      options: [
        "Axial flower position",
        "Green seed colour",
        "Yellow pod colour",
        "Round seed shape"
      ],
      correctAnswer: 1,
      explanation: "Green seed colour is recessive (Yellow seed colour is dominant). Note that for pod colour, Yellow is recessive and Green is dominant.",
      conceptTested: "Dominant vs Recessive traits in garden pea",
      verificationSource: "NEET UG 2017 Official Paper & NCERT Class 12"
    },
    {
      exam: "AIPMT",
      year: 2015,
      question: "A test cross is carried out to:",
      options: [
        "Determine the genotype of a plant at F2",
        "Predict whether two traits are linked",
        "Assess the number of alleles of a gene",
        "Determine whether two species or varieties will breed successfully"
      ],
      correctAnswer: 0,
      explanation: "A test cross involves crossing an individual showing a dominant phenotype with a homozygous recessive parent to determine whether the dominant individual is homozygous (TT) or heterozygous (Tt).",
      conceptTested: "Purpose and definition of Test Cross",
      verificationSource: "AIPMT 2015 Official Paper & NCERT Class 12 Biology"
    }
  ]
};
