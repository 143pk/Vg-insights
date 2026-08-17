import { DetailedTopicContent } from '../../types/neet';

export const bioHgpDnaFingerprintingDetails: DetailedTopicContent = {
  topicId: "bio-hgp-dna-fingerprinting",
  topicName: "Human Genome Project (HGP) & DNA Fingerprinting",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Molecular Basis of Inheritance",

  whatIsThisTopic: "Human Genome Project (HGP) history, goals, mega-project scale, methodology (ESTs vs Blind Sequence Annotation), BAC/YAC cloning vectors, Sanger automated sequencing, salient features of the human genome, single nucleotide polymorphisms (SNPs), DNA polymorphism, satellite DNA (micro- and mini-satellites/VNTRs), and the 6-step technique of DNA Fingerprinting (Alec Jeffreys, Southern blotting, autoradiography) for forensic forensics and paternity verification.",

  basicIdea: [
    "The Human Genome Project (HGP) was an international, ambitious 13-year megaproject launched in 1990 and completed in 2003 (with Chromosome 1 completed in May 2006). Coordinated by the US Department of Energy and NIH, joined by Wellcome Trust (UK), Japan, France, Germany, and China.",
    "HGP as a Megaproject: The human genome has ~3 x 10^9 base pairs. At an initial cost of US $3 per bp, the project required ~US $9 billion. If stored in books of 1000 pages with 1000 letters per page, 3,300 such books would be needed. This massive data generation necessitated high-speed computational tools, birthing the field of Bioinformatics.",
    "Two Major Methodologies of HGP: (1) Expressed Sequence Tags (ESTs) - sequencing only genes transcribed into RNA; (2) Blind Sequence Annotation - sequencing the entire genome (coding and non-coding) and subsequently assigning functional roles to different regions.",
    "Methodology & Vectors: Genomic DNA was sheared into fragments, cloned into host organisms (bacteria and yeast) using specialized vectors: Bacterial Artificial Chromosomes (BAC) and Yeast Artificial Chromosomes (YAC), and sequenced using Automated DNA Sequencers based on Frederick Sanger's Dideoxy Method.",
    "Salient Features of the Human Genome (NCERT High-Yield Data): (1) Contains 3,164.7 million base pairs; (2) Average gene has 3,000 bases; Largest gene is Dystrophin on X chromosome (2.4 million bp); (3) Total estimated genes = ~30,000; (4) 99.9% nucleotide bases are identical in all humans (only 0.1% difference creates unique individuality); (5) Functions of >50% discovered genes are unknown; (6) Less than 2% of the genome codes for proteins; (7) Chromosome 1 has the most genes (2,968), and the Y chromosome has the fewest (231); (8) ~1.4 million locations of SNPs (Single Nucleotide Polymorphisms, 'snips').",
    "DNA Fingerprinting (Alec Jeffreys, 1984; Lalji Singh in India): A forensic identification technique based on identifying DNA polymorphism in non-coding repetitive satellite DNA.",
    "Satellite DNA & VNTRs: Density gradient centrifugation separates bulk genomic DNA (major peak) from Satellite DNA (minor peaks: micro- and mini-satellites). Mini-satellites are Variable Number Tandem Repeats (VNTRs) of 0.1 to 20 kb whose repeat number is highly polymorphic and inherited from parents.",
    "6 Steps of DNA Fingerprinting: (1) DNA isolation; (2) Digestion by Restriction Endonucleases; (3) Separation by Agarose Gel Electrophoresis; (4) Southern Blotting (transfer to nitrocellulose/nylon membrane); (5) Hybridization using radiolabeled VNTR probes; (6) Autoradiography on X-ray film to visualize unique band profiles.",
    "Applications: Forensic criminal investigations, resolving disputed parentage/paternity cases, establishing phylogenetic relationships and population genetics."
  ],

  importantTerms: [
    {
      term: "Human Genome Project (HGP)",
      definition: "An international 13-year scientific mega-project (1990–2003) dedicated to determining the complete nucleotide sequence of the 3 billion base pairs of the human genome and mapping all human genes.",
      neetNote: "Chromosome 1, the largest human chromosome, was completely sequenced last, in May 2006."
    },
    {
      term: "Bioinformatics",
      definition: "An interdisciplinary field combining molecular biology with high-speed computational sciences and algorithms for the storage, retrieval, analysis, and modeling of massive genomic data.",
      neetNote: "Direct outgrowth of the Human Genome Project."
    },
    {
      term: "Expressed Sequence Tags (ESTs)",
      definition: "A genomic sequencing approach that focuses exclusively on identifying and sequencing all the genes that are actively expressed as RNA in cells.",
      neetNote: "One of the two primary methodologies used in HGP."
    },
    {
      term: "Sequence Annotation",
      definition: "A blind sequencing approach where the entire genomic DNA (both coding and non-coding sequences) is sequenced, and functional annotations are assigned later using bioinformatics.",
      neetNote: "The method ultimately adopted to complete the Human Genome Project."
    },
    {
      term: "BAC and YAC",
      definition: "Bacterial Artificial Chromosomes (BAC) and Yeast Artificial Chromosomes (YAC); high-capacity cloning vectors used to amplify large fragments of human DNA in bacterial and yeast hosts.",
      neetNote: "BAC uses bacteria as host; YAC uses yeast as eukaryotic host."
    },
    {
      term: "Dystrophin Gene",
      definition: "The largest known human gene located on the human X chromosome, spanning approximately 2.4 million base pairs (2.4 Mb).",
      neetNote: "Mutations in dystrophin cause Duchenne Muscular Dystrophy."
    },
    {
      term: "SNPs (Single Nucleotide Polymorphisms)",
      definition: "Locations in the human genome where individuals differ by a single base pair, pronounced 'snips'.",
      neetNote: "Found at approximately 1.4 million locations in human DNA."
    },
    {
      term: "DNA Polymorphism",
      definition: "Inheritable genetic variation occurring at a frequency of greater than 0.01 (1%) in a human population, arising due to non-fatal mutations in non-coding DNA.",
      neetNote: "Forms the fundamental scientific basis of both genetic mapping and DNA fingerprinting."
    },
    {
      term: "Satellite DNA",
      definition: "Highly repetitive non-coding DNA sequences that separate as distinct minor peaks during CsCl density gradient centrifugation due to differences in base composition (A-T or G-C richness).",
      neetNote: "Does not code for proteins but exhibits high degree of polymorphism."
    },
    {
      term: "VNTR (Variable Number Tandem Repeats)",
      definition: "A class of mini-satellite DNA consisting of short tandemly repeated sequences (10-60 bp) spanning 0.1 to 20 kb whose copy number varies significantly between individuals.",
      neetNote: "Used as radiolabeled probes in Alec Jeffreys' Southern blot DNA fingerprinting."
    },
    {
      term: "Southern Blotting",
      definition: "A molecular biology technique developed by Edward M. Southern in which electrophoretically separated DNA fragments in an agarose gel are transferred and immobilized onto a synthetic nitrocellulose or nylon membrane.",
      neetNote: "Essential step in DNA fingerprinting prior to probe hybridization."
    },
    {
      term: "Autoradiography",
      definition: "The technique of capturing an image of radioactive emissions on an X-ray film, revealing the specific position and size of radiolabeled VNTR hybrid bands as dark parallel bars.",
      neetNote: "Final detection step of DNA fingerprinting."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Human Genome Project (HGP): Scale, Goals, Methodologies & Sequencing",
      paragraphs: [
        "The Human Genome Project (HGP) was an international mega-research endeavor initiated in 1990 with the goal of mapping and sequencing all ~3 billion base pairs of the human genome. Completed in 2003 (with the sequencing of the largest chromosome, Chromosome 1, completed in May 2006).",
        "Why HGP was Called a Megaproject:",
        "1. **Enormous Scale**: The human haploid genome comprises 3 x 10^9 base pairs. If the cost of sequencing was US $3 per base pair, the total estimated cost was US $9 billion.",
        "2. **Massive Data Storage Requirement**: If the sequence were typed into books of 1000 pages each, with 1000 letters per page, a single human genome would fill 3,300 voluminous books!",
        "3. **Birth of Bioinformatics**: Storing, organizing, analyzing, and distributing such astronomical amounts of biological sequence data necessitated the development of high-speed computational algorithms and databases, establishing the discipline of **Bioinformatics**.",
        "Methodologies of the HGP — Two Competing Paradigms:",
        "1. **Expressed Sequence Tags (ESTs)**: An approach focused purely on identifying and sequencing all the genes that are expressed as RNA (transcripts).",
        "2. **Blind Sequence Annotation**: An unbiased, comprehensive approach of sequencing the entire genome (including both coding exons and non-coding repetitive DNA), followed by computationally annotating different regions with functions. This was the ultimate approach adopted.",
        "The Sequencing Workflow:",
        "• Total genomic DNA from human cells was isolated and randomly sheared into relatively smaller fragments.",
        "• Fragments were inserted into specialized high-capacity cloning vectors: **Bacterial Artificial Chromosomes (BAC)** and **Yeast Artificial Chromosomes (YAC)**, and introduced into bacterial (E. coli) and yeast host cells for amplification.",
        "• The amplified fragments were sequenced using automated DNA sequencers based on the principle developed by **Frederick Sanger** (Dideoxy Chain Termination Method).",
        "• Specialized supercomputer algorithms aligned the overlapping sequenced fragments to assemble the complete, contiguous chromosomal sequences."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="340" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Human Genome Project (HGP) Sequencing Workflow &amp; Vectors</text>

  <!-- Step Flow Boxes -->
  <g transform="translate(30, 45)">
    <!-- Box 1: Genomic DNA -->
    <rect x="0" y="0" width="150" height="90" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
    <text x="75" y="24" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">1. Genomic DNA</text>
    <text x="75" y="44" fill="#1e40af" font-size="9" text-anchor="middle">Isolated from human cells</text>
    <text x="75" y="60" fill="#3b82f6" font-size="9" text-anchor="middle">Randomly fragmented</text>
    <text x="75" y="76" fill="#64748b" font-size="8" text-anchor="middle">by restriction enzymes</text>

    <!-- Arrow 1 -->
    <path d="M 155 45 L 180 45" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-hgp)"/>

    <!-- Box 2: Cloning Vectors (BAC / YAC) -->
    <rect x="185" y="0" width="170" height="90" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="270" y="24" fill="#92400e" font-size="11" font-weight="bold" text-anchor="middle">2. Cloning in Hosts</text>
    <text x="270" y="44" fill="#92400e" font-size="10" font-weight="bold" text-anchor="middle">• BAC (Bacteria)</text>
    <text x="270" y="60" fill="#92400e" font-size="10" font-weight="bold" text-anchor="middle">• YAC (Yeast)</text>
    <text x="270" y="76" fill="#78350f" font-size="8" text-anchor="middle">Amplification in host cells</text>

    <!-- Arrow 2 -->
    <path d="M 360 45 L 385 45" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-hgp)"/>

    <!-- Box 3: Automated Sanger Sequencing -->
    <rect x="390" y="0" width="160" height="90" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
    <text x="470" y="24" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">3. Automated Sanger</text>
    <text x="470" y="44" fill="#065f46" font-size="9" text-anchor="middle">Dideoxy method</text>
    <text x="470" y="60" fill="#059669" font-size="9" text-anchor="middle">Capillary electrophoresis</text>
    <text x="470" y="76" fill="#047857" font-size="8" font-weight="bold" text-anchor="middle">Frederick Sanger</text>

    <!-- Arrow 3 -->
    <path d="M 555 45 L 580 45" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-hgp)"/>

    <!-- Box 4: Assembly & Bioinformatics -->
    <rect x="585" y="0" width="120" height="90" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="645" y="24" fill="#5b21b6" font-size="11" font-weight="bold" text-anchor="middle">4. Alignment</text>
    <text x="645" y="44" fill="#5b21b6" font-size="9" text-anchor="middle">Overlapping regions</text>
    <text x="645" y="60" fill="#7c3aed" font-size="9" text-anchor="middle">assembled by</text>
    <text x="645" y="76" fill="#4c1d95" font-size="8" font-weight="bold" text-anchor="middle">Bioinformatics</text>
  </g>

  <!-- Summary Table: ESTs vs Blind Sequence Annotation -->
  <g transform="translate(30, 160)">
    <rect width="700" height="155" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1"/>
    <text x="20" y="24" fill="#0f172a" font-size="12" font-weight="bold">Comparison of HGP Methodologies:</text>

    <g transform="translate(20, 38)">
      <rect x="0" y="0" width="320" height="100" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
      <text x="160" y="22" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Expressed Sequence Tags (ESTs)</text>
      <text x="10" y="42" fill="#1e40af" font-size="9">• Sequences ONLY genes expressed as RNA (mRNA)</text>
      <text x="10" y="58" fill="#1e40af" font-size="9">• Ignores non-coding introns &amp; repetitive regions</text>
      <text x="10" y="74" fill="#1e40af" font-size="9">• Faster but provides incomplete genomic architecture</text>

      <rect x="340" y="0" width="320" height="100" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
      <text x="500" y="22" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">Sequence Annotation (Blind Approach)</text>
      <text x="350" y="42" fill="#991b1b" font-size="9">• Sequences the ENTIRE genome (coding + non-coding)</text>
      <text x="350" y="58" fill="#991b1b" font-size="9">• Assigns functional roles to sequences later</text>
      <text x="350" y="74" fill="#991b1b" font-size="9">• Complete approach adopted for final HGP genome</text>
    </g>
  </g>

  <defs>
    <marker id="arr-hgp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/>
    </marker>
  </defs>
</svg>`,
        caption: "Human Genome Project workflow: DNA fragmentation, BAC/YAC cloning in host cells, automated Sanger sequencing, and overlapping fragment alignment via bioinformatics.",
        guide: "WHAT TO OBSERVE: Memorize the two vectors: BAC (Bacterial Artificial Chromosome) and YAC (Yeast Artificial Chromosome). Differentiate ESTs (expressed RNA genes only) from Sequence Annotation (whole genome sequencing)."
      },
      importantPoints: [
        "HGP launched in 1990, completed in 2003 (Chromosome 1 finished in May 2006).",
        "Estimated cost: $9 billion ($3 per base pair for 3 x 10^9 bp).",
        "Bioinformatics emerged directly to store and analyze massive HGP genomic data.",
        "ESTs (Expressed Sequence Tags): Sequencing only RNA-expressed genes.",
        "Sequence Annotation: Sequencing the entire genome (coding and non-coding).",
        "Cloning vectors used: BAC (Bacterial Artificial Chromosomes) and YAC (Yeast Artificial Chromosomes).",
        "Sequencing method: Automated Sanger Dideoxy Method (Frederick Sanger)."
      ]
    },
    {
      heading: "2. Salient Features of the Human Genome & SNPs (NCERT Facts)",
      paragraphs: [
        "Analysis of the sequenced human genome revealed profound insights into human biology (NCERT Salient Features):",
        "1. **Genome Size**: The human genome consists of **3164.7 million base pairs** (3.1647 x 10^9 bp).",
        "2. **Gene Number and Size**: The total number of genes is estimated at **~30,000** (much lower than earlier scientific estimates of 80,000–140,000 genes). The average gene consists of **3,000 base pairs**, but gene sizes vary greatly. The largest known human gene is **Dystrophin**, located on the X chromosome, which spans an astonishing **2.4 million base pairs (2.4 Mb)**.",
        "3. **Identical Sequences**: **99.9% of nucleotide bases are exactly identical in all human beings**. The morphological and biochemical uniqueness of each human is governed by only a **0.1% difference** in DNA sequence.",
        "4. **Unknown Functions**: The biological functions of **over 50%** of discovered genes remain completely unknown.",
        "5. **Protein-Coding Genome**: **Less than 2% of the human genome codes for proteins**! Over 98% of the genome consists of non-protein-coding sequences, including introns, regulatory elements, and extensive repetitive DNA.",
        "6. **Repetitive Sequences**: Repetitive sequences make up a very large portion of the human genome. These repeated units have no direct coding function, but they provide insights into chromosome structure, dynamics, and evolutionary history.",
        "7. **Gene Distribution on Chromosomes**: Chromosome 1 has the maximum number of genes (**2,968 genes**), whereas the Y chromosome has the fewest genes (**231 genes**).",
        "8. **SNPs (Single Nucleotide Polymorphisms)**: Scientists have identified approximately **1.4 million locations** in the human genome where single-base DNA differences occur among individuals. These are termed **SNPs** (pronounced 'snips'). SNPs are immensely valuable for tracing human evolutionary history, locating disease-associated genes, and forensic identification."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Salient Features of the Human Genome (NCERT High-Yield Facts)</text>

  <g transform="translate(30, 45)">
    <!-- 8 Grid Cards of Facts -->
    <!-- Card 1 -->
    <rect x="0" y="0" width="165" height="115" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
    <text x="82" y="24" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Total Genome Size</text>
    <text x="82" y="52" fill="#2563eb" font-size="16" font-weight="bold" text-anchor="middle">3164.7 Mb</text>
    <text x="82" y="74" fill="#64748b" font-size="9" text-anchor="middle">3.1647 x 10⁹ bp</text>
    <text x="82" y="94" fill="#64748b" font-size="8" text-anchor="middle">Haploid content</text>

    <!-- Card 2 -->
    <rect x="180" y="0" width="165" height="115" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.5"/>
    <text x="262" y="24" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">Total Genes</text>
    <text x="262" y="52" fill="#059669" font-size="16" font-weight="bold" text-anchor="middle">~30,000</text>
    <text x="262" y="74" fill="#64748b" font-size="9" text-anchor="middle">Avg gene = 3,000 bp</text>
    <text x="262" y="94" fill="#065f46" font-size="8" font-weight="bold" text-anchor="middle">Dystrophin = 2.4 Mb</text>

    <!-- Card 3 -->
    <rect x="360" y="0" width="165" height="115" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
    <text x="442" y="24" fill="#92400e" font-size="12" font-weight="bold" text-anchor="middle">Coding Genome</text>
    <text x="442" y="52" fill="#d97706" font-size="16" font-weight="bold" text-anchor="middle">&lt; 2%</text>
    <text x="442" y="74" fill="#64748b" font-size="9" text-anchor="middle">Codes for proteins</text>
    <text x="442" y="94" fill="#92400e" font-size="8" text-anchor="middle">&gt;98% non-coding</text>

    <!-- Card 4 -->
    <rect x="540" y="0" width="160" height="115" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="620" y="24" fill="#5b21b6" font-size="12" font-weight="bold" text-anchor="middle">Human Identity</text>
    <text x="620" y="52" fill="#7c3aed" font-size="16" font-weight="bold" text-anchor="middle">99.9%</text>
    <text x="620" y="74" fill="#64748b" font-size="9" text-anchor="middle">Bases exactly identical</text>
    <text x="620" y="94" fill="#5b21b6" font-size="8" font-weight="bold" text-anchor="middle">0.1% = Unique traits</text>

    <!-- Card 5 -->
    <rect x="0" y="130" width="165" height="115" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1.5"/>
    <text x="82" y="154" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">Most Genes</text>
    <text x="82" y="182" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">Chr 1 = 2968</text>
    <text x="82" y="204" fill="#64748b" font-size="9" text-anchor="middle">Maximum genes</text>
    <text x="82" y="224" fill="#991b1b" font-size="8" text-anchor="middle">Sequenced May 2006</text>

    <!-- Card 6 -->
    <rect x="180" y="130" width="165" height="115" rx="8" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
    <text x="262" y="154" fill="#334155" font-size="12" font-weight="bold" text-anchor="middle">Fewest Genes</text>
    <text x="262" y="182" fill="#475569" font-size="16" font-weight="bold" text-anchor="middle">Chr Y = 231</text>
    <text x="262" y="204" fill="#64748b" font-size="9" text-anchor="middle">Minimum genes</text>
    <text x="262" y="224" fill="#334155" font-size="8" text-anchor="middle">Y chromosome</text>

    <!-- Card 7 -->
    <rect x="360" y="130" width="165" height="115" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
    <text x="442" y="154" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">Total SNPs</text>
    <text x="442" y="182" fill="#0284c7" font-size="16" font-weight="bold" text-anchor="middle">1.4 Million</text>
    <text x="442" y="204" fill="#64748b" font-size="9" text-anchor="middle">Single nucleotide</text>
    <text x="442" y="224" fill="#0369a1" font-size="8" font-weight="bold" text-anchor="middle">Polymorphisms ('snips')</text>

    <!-- Card 8 -->
    <rect x="540" y="130" width="160" height="115" rx="8" fill="#ffffff" stroke="#ea580c" stroke-width="1.5"/>
    <text x="620" y="154" fill="#9a3412" font-size="12" font-weight="bold" text-anchor="middle">Unknown Genes</text>
    <text x="620" y="182" fill="#ea580c" font-size="16" font-weight="bold" text-anchor="middle">&gt; 50%</text>
    <text x="620" y="204" fill="#64748b" font-size="9" text-anchor="middle">Functions undiscovered</text>
    <text x="620" y="224" fill="#9a3412" font-size="8" text-anchor="middle">Ongoing research</text>
  </g>
</svg>`,
        caption: "Summary of high-yield NCERT facts of the Human Genome Project: 3164.7 Mb size, ~30,000 genes, Chr 1 (2968 genes), Chr Y (231 genes), and 1.4 million SNPs.",
        guide: "WHAT TO OBSERVE: Memorize exact NCERT numbers: 3164.7 million bp, ~30,000 total genes, Dystrophin = 2.4 million bp, Chr 1 = 2968 genes, Chr Y = 231 genes, <2% protein coding, 1.4 million SNPs."
      },
      importantPoints: [
        "Human genome size: 3164.7 million base pairs.",
        "Total genes: ~30,000 (average gene length = 3,000 bp).",
        "Largest human gene: Dystrophin (2.4 million base pairs on X chromosome).",
        "99.9% of DNA sequence is identical across all humans; 0.1% is unique.",
        "Less than 2% of the genome codes for proteins.",
        "Chromosome 1 has the most genes (2,968); Y chromosome has the fewest (231).",
        "1.4 million SNP locations ('snips') mapped in human DNA.",
        "Functions of >50% of discovered genes remain unknown."
      ]
    },
    {
      heading: "3. DNA Fingerprinting: Satellite DNA, VNTRs & The 6-Step Southern Blotting Technique",
      paragraphs: [
        "Developed by British geneticist **Sir Alec Jeffreys (1984)** (pioneered in India by **Dr. Lalji Singh** and **Dr. V. K. Kashyap**). DNA Fingerprinting (DNA Profiling) is a rapid molecular technique used to compare the DNA profiles of different individuals.",
        "The Principle — DNA Polymorphism & Satellite DNA:",
        "• Human DNA contains coding DNA and non-coding repetitive DNA. During **Density Gradient Centrifugation (CsCl)**, non-repetitive genomic DNA forms a **Major Peak (Bulk DNA)**, while repetitive non-coding DNA forms distinct **Minor Peaks**, called **Satellite DNA**.",
        "• Satellite DNA is classified into **Micro-satellites** and **Mini-satellites** depending on base composition (A-T or G-C rich), segment length, and number of repetitive units.",
        "• **VNTRs (Variable Number Tandem Repeats)**: Mini-satellite DNA consisting of tandem repeats of 10 to 60 base pairs, spanning **0.1 to 20 kb**. The copy number of repeats at any chromosomal locus varies dramatically from person to person (high degree of **DNA Polymorphism**), showing strict Mendelian inheritance from biological parents.",
        "• Because DNA from any tissue (blood, hair follicle, semen, bone, saliva, skin) of an individual has the exact same VNTR pattern, DNA fingerprinting serves as an irrefutable forensic identification tool.",
        "The 6 Sequential Steps of DNA Fingerprinting (Southern Blotting Method):",
        "1. **DNA Extraction / Isolation**: Genomic DNA is extracted from biological samples (blood stain, semen, hair root bulb, etc.).",
        "2. **Digestion by Restriction Endonucleases**: DNA is cleaved into specific fragments by restriction enzymes.",
        "3. **Agarose Gel Electrophoresis**: The DNA fragments are separated based on size/length under an electric field (smaller fragments migrate faster towards the positive anode).",
        "4. **Southern Blotting (Transfer)**: The separated double-stranded DNA fragments in the gel are alkali-denatured into single strands and blotted/transferred onto a synthetic membrane (**Nitrocellulose or Nylon membrane**).",
        "5. **Hybridization with Radiolabeled VNTR Probe**: The membrane is incubated with radioactive single-stranded VNTR probes (32P-labeled). Probes hybridize with complementary VNTR sequences on the membrane.",
        "6. **Detection by Autoradiography**: The membrane is placed against an X-ray film. Radioactive emissions expose the film, producing a distinctive pattern of dark parallel bands called a **DNA Fingerprint / Autoradiogram**.",
        "Applications of DNA Fingerprinting:",
        "(a) Forensic Science: Identifying perpetrators of rape, murder, and violent crimes by matching crime scene DNA with suspects;",
        "(b) Paternity Disputes: Settling disputed biological parentage (a child's VNTR bands are a 50:50 combination of maternal and paternal bands);",
        "(c) Evolutionary Biology & Population Genetics: Tracing human migration patterns and evolutionary lineages."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">DNA Fingerprinting: 6-Step Southern Blotting &amp; Forensic Match</text>

  <!-- Left: 6 Sequential Steps Flow -->
  <g transform="translate(30, 45)">
    <rect width="360" height="295" fill="#ffffff" rx="8" stroke="#2563eb" stroke-width="1.5"/>
    <text x="180" y="22" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">6 Steps of Southern Blot DNA Profiling</text>

    <g transform="translate(15, 34)">
      <!-- Step 1 -->
      <rect x="0" y="0" width="330" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="10" y="16" fill="#1e40af" font-size="10" font-weight="bold">1. DNA Isolation:</text>
      <text x="10" y="30" fill="#3b82f6" font-size="9">Extract DNA from blood, hair follicle, semen, tissue</text>

      <!-- Step 2 -->
      <rect x="0" y="42" width="330" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="10" y="16" fill="#1e40af" font-size="10" font-weight="bold">2. Restriction Digestion:</text>
      <text x="10" y="30" fill="#3b82f6" font-size="9">Cleave DNA using Restriction Endonucleases</text>

      <!-- Step 3 -->
      <rect x="0" y="84" width="330" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="10" y="16" fill="#1e40af" font-size="10" font-weight="bold">3. Agarose Gel Electrophoresis:</text>
      <text x="10" y="30" fill="#3b82f6" font-size="9">Separate fragments by molecular size</text>

      <!-- Step 4 -->
      <rect x="0" y="126" width="330" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="10" y="16" fill="#1e40af" font-size="10" font-weight="bold">4. Southern Blotting:</text>
      <text x="10" y="30" fill="#3b82f6" font-size="9">Transfer denatured DNA to Nylon / Nitrocellulose</text>

      <!-- Step 5 -->
      <rect x="0" y="168" width="330" height="36" rx="4" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="10" y="16" fill="#1e40af" font-size="10" font-weight="bold">5. Hybridization:</text>
      <text x="10" y="30" fill="#3b82f6" font-size="9">Hybridize with radioactive ³²P-labeled VNTR probe</text>

      <!-- Step 6 -->
      <rect x="0" y="210" width="330" height="36" rx="4" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
      <text x="10" y="16" fill="#065f46" font-size="10" font-weight="bold">6. Autoradiography:</text>
      <text x="10" y="30" fill="#059669" font-size="9">Expose X-ray film -> visualize unique band pattern</text>
    </g>
  </g>

  <!-- Right: Forensic Autoradiogram Match -->
  <g transform="translate(410, 45)">
    <rect width="320" height="295" fill="#ffffff" rx="8" stroke="#059669" stroke-width="1.5"/>
    <text x="160" y="22" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">Forensic Case: Crime Scene vs Suspects</text>

    <!-- Gel Lanes -->
    <g transform="translate(20, 40)">
      <!-- Lane C: Crime Scene -->
      <rect x="20" y="0" width="60" height="200" fill="#f1f5f9" stroke="#64748b" stroke-width="1"/>
      <text x="50" y="-8" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">Crime (C)</text>
      <!-- Bands for C -->
      <line x1="25" y1="30" x2="75" y2="30" stroke="#0f172a" stroke-width="4"/>
      <line x1="25" y1="70" x2="75" y2="70" stroke="#0f172a" stroke-width="4"/>
      <line x1="25" y1="120" x2="75" y2="120" stroke="#0f172a" stroke-width="4"/>
      <line x1="25" y1="160" x2="75" y2="160" stroke="#0f172a" stroke-width="4"/>

      <!-- Lane S1: Suspect 1 -->
      <rect x="110" y="0" width="60" height="200" fill="#f1f5f9" stroke="#64748b" stroke-width="1"/>
      <text x="140" y="-8" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Suspect 1</text>
      <!-- Bands for S1 -->
      <line x1="115" y1="40" x2="165" y2="40" stroke="#0f172a" stroke-width="4"/>
      <line x1="115" y1="70" x2="165" y2="70" stroke="#0f172a" stroke-width="4"/>
      <line x1="115" y1="100" x2="165" y2="100" stroke="#0f172a" stroke-width="4"/>
      <line x1="115" y1="180" x2="165" y2="180" stroke="#0f172a" stroke-width="4"/>

      <!-- Lane S2: Suspect 2 (MATCH!) -->
      <rect x="200" y="0" width="60" height="200" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
      <text x="230" y="-8" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Suspect 2</text>
      <!-- Bands for S2 (Identical to C) -->
      <line x1="205" y1="30" x2="255" y2="30" stroke="#047857" stroke-width="4"/>
      <line x1="205" y1="70" x2="255" y2="70" stroke="#047857" stroke-width="4"/>
      <line x1="205" y1="120" x2="255" y2="120" stroke="#047857" stroke-width="4"/>
      <line x1="205" y1="160" x2="255" y2="160" stroke="#047857" stroke-width="4"/>
    </g>

    <!-- Match Result Banner -->
    <rect x="20" y="255" width="280" height="28" rx="4" fill="#059669"/>
    <text x="160" y="273" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">MATCH: Suspect 2 is the Culprit (100% Band Match)</text>
  </g>
</svg>`,
        caption: "6 steps of DNA fingerprinting (Southern blotting and autoradiography) and forensic band matching between crime scene evidence and suspects.",
        guide: "WHAT TO OBSERVE: Look at the 6 sequential steps: Isolation -> Digestion -> Electrophoresis -> Southern Blotting -> Hybridization with VNTR probe -> Autoradiography. On the right, observe how Suspect 2 matches all crime scene bands exactly."
      },
      importantPoints: [
        "DNA Fingerprinting pioneered by Sir Alec Jeffreys (1984); Dr. Lalji Singh in India.",
        "Based on DNA Polymorphism in non-coding repetitive Satellite DNA.",
        "Satellite DNA forms minor peaks during CsCl density gradient centrifugation.",
        "VNTRs (Variable Number Tandem Repeats): Mini-satellites of 0.1 to 20 kb used as probes.",
        "6 Steps: Isolation -> Restriction digestion -> Gel electrophoresis -> Southern blotting -> Hybridization with radiolabeled VNTR probe -> Autoradiography.",
        "Monozygotic (identical) twins have 100% identical DNA fingerprints.",
        "Used in forensic criminal investigations and disputed paternity settlements."
      ]
    }
  ],

  formulae: [
    {
      title: "Allele Inheritance in DNA Fingerprinting Paternity Test",
      formula: "\\text{Child Bands} = \\text{Maternal VNTR Bands} (50\\%) + \\text{Paternal VNTR Bands} (50\\%)",
      meaning: "Every single VNTR band in a child's autoradiogram must be present in either the biological mother or the biological father.",
      symbols: "VNTR = Variable Number Tandem Repeat alleles inherited codominantly in Mendelian fashion.",
      unit: "Band matching percentage",
      conditions: "Monozygotic twins share 100% identical bands; Dizygotic twins share ~50% bands.",
      calculationExample: {
        problem: "In a paternity dispute, a child has 6 distinct VNTR bands. 3 bands match the mother. Where must the remaining 3 bands come from to prove biological paternity?",
        given: "Total bands in child = 6; Bands matching mother = 3",
        stepByStep: [
          "Step 1: In Mendelian inheritance, 50% of the child's genome is inherited from the mother and 50% from the father.",
          "Step 2: Since 3 bands match the biological mother, the remaining 3 bands MUST be present in the biological father's DNA fingerprint."
        ],
        answer: "The remaining 3 bands must match the putative father 100% to confirm biological paternity."
      }
    }
  ],

  neetImportantPoints: [
    "HGP: 1990 to 2003; Chromosome 1 sequenced in May 2006.",
    "HGP cost: $9 billion ($3 per base pair for 3 x 10^9 bp).",
    "ESTs = Expressed Sequence Tags (RNA-coding genes only).",
    "Sequence Annotation = Blind sequencing of whole genome (coding + non-coding).",
    "Cloning vectors: BAC (bacteria) and YAC (yeast).",
    "Frederick Sanger: Automated Dideoxy method for DNA sequencing.",
    "Human genome size: 3164.7 million base pairs (3.1647 x 10^9 bp).",
    "Total genes: ~30,000; Average gene length: 3,000 base pairs.",
    "Largest human gene: Dystrophin (2.4 million base pairs on X chromosome).",
    "99.9% nucleotide bases identical in all humans (0.1% creates individuality).",
    "Less than 2% of the genome codes for proteins.",
    "Chromosome 1 has maximum genes (2,968); Y chromosome has minimum genes (231).",
    "1.4 million SNP locations in human DNA.",
    "DNA Fingerprinting: Sir Alec Jeffreys (1984); Dr. Lalji Singh in India.",
    "Basis of DNA fingerprinting: DNA polymorphism in repetitive satellite DNA (VNTRs, 0.1 to 20 kb).",
    "Southern blotting: Transfer of DNA from agarose gel to nitrocellulose/nylon membrane.",
    "Detection: Autoradiography using radiolabeled VNTR probe."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing ESTs with Sequence Annotation.",
      correctFact: "ESTs (Expressed Sequence Tags) sequence ONLY the genes expressed as RNA. Sequence Annotation sequences the ENTIRE genome (both coding and non-coding) blindly before assigning functions.",
      whyItMattersForNEET: "Frequently tested differentiation question in NEET."
    },
    {
      commonConfusion: "Thinking satellite DNA codes for functional proteins.",
      correctFact: "Satellite DNA is completely NON-CODING. It consists of highly repetitive tandem sequences that do not code for proteins but exhibit high polymorphism.",
      whyItMattersForNEET: "Crucial for understanding why mutations accumulate freely in satellite DNA without phenotypic lethality."
    },
    {
      commonConfusion: "Believing identical twins have different DNA fingerprints.",
      correctFact: "Monozygotic (identical) twins develop from a single fertilized zygote and have 100% IDENTICAL DNA fingerprints. (Fingerprints/dermatoglyphics on skin differ, but DNA profiles are identical!).",
      whyItMattersForNEET: "Classic assertion-reason trap in forensic genetics."
    },
    {
      commonConfusion: "Confusing the largest chromosome with the last sequenced chromosome.",
      correctFact: "Chromosome 1 is BOTH the largest human chromosome (2,968 genes) AND the last chromosome to be completely sequenced (completed in May 2006).",
      whyItMattersForNEET: "Direct historical question from NCERT."
    }
  ],

  quickRevision: [
    "HGP: 1990-2003, Megaproject, $9B, gave birth to Bioinformatics; Chromosome 1 finished May 2006.",
    "Methodologies: ESTs (RNA-expressed genes only) vs Sequence Annotation (whole genome).",
    "Vectors: BAC (Bacterial Artificial Chromosome) and YAC (Yeast Artificial Chromosome).",
    "Sequencing: Automated Sanger Dideoxy Method.",
    "Genome facts: 3164.7 Mb, ~30,000 genes, Dystrophin = 2.4 Mb (largest), Chr 1 = 2968 genes (most), Chr Y = 231 genes (fewest), <2% codes for proteins, 1.4M SNPs.",
    "DNA Fingerprinting (Alec Jeffreys, Lalji Singh): Based on DNA polymorphism in non-coding satellite DNA (VNTRs, 0.1-20 kb).",
    "6 Steps: Isolation -> Restriction digestion -> Gel electrophoresis -> Southern blot to nylon/nitrocellulose -> Hybridization with 32P-VNTR probe -> Autoradiography.",
    "Identical twins have 100% identical DNA fingerprints."
  ],

  practiceQuestions: [
    {
      question: "Which of the following human chromosomes was the last to be completely sequenced in May 2006?",
      options: [
        "Chromosome X",
        "Chromosome 21",
        "Chromosome 1",
        "Chromosome Y"
      ],
      correctAnswer: 2,
      explanation: "Chromosome 1, which has the maximum number of genes (2,968), was the last of the 24 human chromosomes to be completely sequenced, in May 2006.",
      conceptTested: "HGP timeline and Chromosome 1"
    },
    {
      question: "In the Human Genome Project, the approach of sequencing only the genes expressed as RNA is known as:",
      options: [
        "Sequence Annotation",
        "Expressed Sequence Tags (ESTs)",
        "Comparative Genomics",
        "Polymerase Chain Reaction"
      ],
      correctAnswer: 1,
      explanation: "Expressed Sequence Tags (ESTs) is the approach that focuses exclusively on identifying and sequencing all the genes that are expressed as RNA.",
      conceptTested: "ESTs vs Sequence Annotation in HGP"
    },
    {
      question: "Which of the following mini-satellites is used as a hybridization probe in DNA fingerprinting?",
      options: [
        "SNPs",
        "VNTR",
        "EST",
        "BAC"
      ],
      correctAnswer: 1,
      explanation: "Variable Number of Tandem Repeats (VNTR), belonging to the class of mini-satellite DNA (0.1 to 20 kb), is used as a radiolabeled probe in Southern blot DNA fingerprinting.",
      conceptTested: "VNTR probe in DNA fingerprinting"
    },
    {
      question: "What percentage of the human genome actively codes for proteins according to HGP findings?",
      options: [
        "Less than 2%",
        "Approximately 50%",
        "99.9%",
        "Over 80%"
      ],
      correctAnswer: 0,
      explanation: "According to the salient features of the Human Genome Project, less than 2% of the human genome codes for proteins. More than 98% consists of non-coding sequences.",
      conceptTested: "Salient features of human genome"
    }
  ],

  pyqs: [
    {
      year: 2022,
      exam: "NEET UG",
      question: "DNA polymorphism forms the basis of:",
      options: [
        "Translation",
        "Genetic mapping and DNA fingerprinting",
        "DNA replication only",
        "Transcription only"
      ],
      correctAnswer: 1,
      explanation: "According to NCERT, DNA polymorphism (inheritable genetic variation occurring at a frequency > 0.01) forms the fundamental basis of both genetic mapping of the human genome and DNA fingerprinting.",
      conceptTested: "Biological basis of DNA fingerprinting and mapping",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 121",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2021,
      exam: "NEET UG",
      question: "Which of the following statements is INCORRECT regarding the Human Genome Project?",
      options: [
        "Less than 2% of the genome codes for proteins",
        "Chromosome 1 has the fewest genes (231)",
        "Total number of genes is estimated at 30,000",
        "Functions of over 50% of discovered genes are unknown"
      ],
      correctAnswer: 1,
      explanation: "Chromosome 1 has the MOST genes (2,968 genes), while the Y chromosome has the FEWEST genes (231 genes). Therefore, statement 2 is incorrect.",
      conceptTested: "Salient features of the human genome",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 120",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2020,
      exam: "NEET UG",
      question: "In human genome sequencing, BAC and YAC are used as:",
      options: [
        "Restriction enzymes",
        "Cloning vectors",
        "Selectable markers",
        "Promoter sequences"
      ],
      correctAnswer: 1,
      explanation: "Bacterial Artificial Chromosomes (BAC) and Yeast Artificial Chromosomes (YAC) were the high-capacity cloning vectors used to amplify large fragments of human DNA in bacteria and yeast hosts during HGP.",
      conceptTested: "Cloning vectors in HGP",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 119",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2019,
      exam: "NEET UG",
      question: "Which of the following is NOT required for any of the techniques of DNA fingerprinting available at present?",
      options: [
        "Restriction enzymes",
        "DNA-DNA hybridization",
        "Polymerase chain reaction",
        "Zinc finger analysis"
      ],
      correctAnswer: 3,
      explanation: "DNA fingerprinting utilizes restriction enzymes, gel electrophoresis, Southern blotting, PCR amplification, and DNA-DNA hybridization with VNTR probes. Zinc finger analysis is not a part of DNA fingerprinting.",
      conceptTested: "Techniques and components of DNA fingerprinting",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 122",
      verified: true,
      isVerifiedPYQ: true
    }
  ],

  neetMarksPotential: {
    topicName: "Human Genome Project (HGP) & DNA Fingerprinting",
    confidenceLabel: "HIGH",
    confidenceText: "Continuously tested in NEET UG with 1-2 direct factual questions every year on HGP numbers, BAC/YAC vectors, VNTR probes, and Southern blotting steps.",
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 10,
    totalDirectPyqs: 18,
    totalHistoricalMarks: 72,
    averageDirectPyqsPerPaper: 1.8,
    maxDirectPyqsInSinglePaper: 3,
    minDirectPyqsInSinglePaper: 1,
    minDirectMarks: 4,
    maxDirectMarks: 12,
    avgDirectMarksPerPaper: 7.2,
    whatThisMeansForYou: "High-yield factual score booster. Remembering the NCERT HGP numbers and 6 Southern blotting steps secures 4-8 marks."
  }
};
