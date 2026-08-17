import { DetailedTopicContent } from '../../types/neet';

export const bioRestrictionEnzymesVectorsDetails: DetailedTopicContent = {
  topicId: "bio-restriction-enzymes-vectors",
  topicName: "Recombinant DNA Tools - Restriction Enzymes & Vectors",
  subject: "Biology",
  class: "Class 12",
  classification: "Biotechnology",
  chapter: "Biotechnology: Principles and Processes",

  whatIsThisTopic: "A comprehensive, authoritative NCERT guide to the core principles and foundational molecular tools of Genetic Engineering. This module covers the formal definition of biotechnology (traditional vs modern, and the unified European Federation of Biotechnology / EFB definition); the two core principles of modern biotechnology (genetic engineering and maintenance of sterile ambience); the molecular machinery of recombinant DNA (rDNA) technology with deep focus on restriction enzymes (exonucleases vs endonucleases, discovery of Hind II, nomenclature rules, palindromic recognition sequences, and EcoRI cleavage generating cohesive sticky ends); DNA ligase and phosphodiester bond synthesis; cloning vectors (plasmids, bacteriophages, cosmids, BAC, YAC) and the crucial features required for cloning (origin of replication / ori, selectable markers ampR and tetR, multiple cloning sites / MCS, and copy number control); the mechanism of insertional inactivation and chromogenic blue-white selection using the lacZ beta-galactosidase gene; disarmed plant and animal vectors (Agrobacterium tumefaciens Ti plasmid and retroviruses); and methods for making host cells competent (divalent cation Ca2+ treatment + heat shock, microinjection, gene gun / biolistics, and electroporation).",

  basicIdea: [
    "Definition & Scope of Biotechnology: Biotechnology deals with techniques of using live organisms or enzymes from organisms to produce products and processes useful to humans. Traditional biotechnology refers to centuries-old natural microbial processes (curd, bread, wine, beer making). Modern biotechnology, in contrast, involves purposeful in vitro manipulation of genetic material (DNA/RNA) using recombinant DNA technology. The European Federation of Biotechnology (EFB) formulated a unified definition: 'The integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services.'",
    "Two Core Principles of Biotechnology: (1) Genetic Engineering: Techniques to alter the chemistry of genetic material (DNA and RNA), to introduce these into host organisms, and thereby change the phenotype of the host organism. (2) Maintenance of Sterile (Microbial Contamination-Free) Ambience: Chemical engineering processes designed to maintain strictly aseptic conditions to enable the growth of only the desired microbe or eukaryotic cell in large quantities for the manufacture of biotechnological products like antibiotics, vaccines, enzymes, and hormones.",
    "Restriction Endonucleases ('Molecular Scissors'): Bacterial defence enzymes discovered in 1963 that restrict the growth of bacteriophages by cutting viral DNA. Exonucleases remove nucleotides from the exposed free ends (5' or 3') of DNA, whereas Endonucleases make cuts at specific positions within the interior of the DNA molecule. In 1970, Hind II was isolated from Haemophilus influenzae as the first characterized restriction endonuclease, recognizing a specific 6-base pair palindromic sequence.",
    "Palindromic Recognition Sequences & EcoRI Cleavage: A DNA palindrome is a sequence of base pairs that reads identical on both complementary strands when read in the same 5' to 3' (or 3' to 5') direction. EcoRI (from Escherichia coli RY 13) recognizes the 6 bp palindrome 5'-GAATTC-3' / 3'-CTTAAG-5' and cuts both strands between G and A slightly away from the center, generating single-stranded overhanging cohesive projections called 'Sticky Ends'.",
    "DNA Ligase ('Molecular Glue'): Enzyme that catalyzes the formation of covalent phosphodiester bonds between adjacent 3'-OH and 5'-PO4 termini of DNA fragments whose complementary sticky ends have base-paired via hydrogen bonding, sealing the recombinant DNA (rDNA) molecule.",
    "Cloning Vectors & Essential Features: Vectors are vehicle DNA molecules used to carry a foreign DNA fragment into a host cell for cloning and replication. Essential features include: (1) Origin of Replication (ori): Specific sequence where replication initiates, controlling the copy number of linked DNA; (2) Selectable Marker: Genes conferring resistance to antibiotics (ampR, tetR, kanR, chloramphenicol) enabling selection of transformants and elimination of non-transformants; (3) Cloning Sites (MCS): Unique restriction enzyme recognition sites for insert integration; (4) Small size to facilitate host uptake.",
    "Plasmid pBR322 & Insertional Inactivation: Artificially engineered E. coli plasmid containing ori, rop (codes for proteins involved in plasmid replication), ampR (with PstI, PvuI sites), and tetR (with BamHI, SalI sites). Ligation of foreign DNA at the BamHI site disrupts the tetR gene, resulting in loss of tetracycline resistance while retaining ampicillin resistance (Insertional Inactivation).",
    "Chromogenic Selection (Blue-White Screening): An advanced single-plate alternative to replica plating. Foreign DNA is inserted into the coding sequence of the enzyme beta-galactosidase (lacZ gene). Non-recombinants produce active beta-galactosidase that hydrolyzes chromogenic substrate (X-gal) to form blue colonies, whereas recombinants with inactivated lacZ fail to produce pigment and form white colonies.",
    "Vectors for Plants & Animals: Nature's genetic engineer Agrobacterium tumefaciens contains a Tumor-inducing (Ti) plasmid that naturally transfers its T-DNA into dicot plant cells to form crown gall tumors; disarmed Ti plasmid is now used to deliver desirable genes into crops. In animals, modified disarmed Retroviruses deliver therapeutic genes into mammalian cells.",
    "Competent Host Formation & Transformation: Because hydrophilic DNA cannot pass through hydrophobic lipid cell membranes, bacterial cells are treated with divalent cations (Ca2+) to increase membrane pore permeability, followed by heat shock (incubation on ice -> 42°C heat shock -> return to ice). Physical gene transfer methods include Microinjection (direct injection into nucleus of animal oocytes/eggs) and Biolistics / Gene Gun (high-velocity bombardment of plant cells with gold/tungsten microprojectiles coated with DNA)."
  ],

  importantTerms: [
    {
      term: "Biotechnology (EFB Definition)",
      definition: "The integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services.",
      neetNote: "Memorize the exact EFB definition verbatim as it is frequently tested in NEET match-the-column questions."
    },
    {
      term: "Genetic Engineering",
      definition: "Techniques to alter the chemistry of genetic material (DNA/RNA) in vitro, introduce it into a host organism, and modify the host phenotype.",
      neetNote: "First recombinant DNA was constructed in 1972 by Stanley Cohen and Herbert Boyer by linking an antibiotic resistance gene to a Salmonella typhimurium plasmid."
    },
    {
      term: "Restriction Endonuclease",
      definition: "A class of bacterial endonucleases that recognize specific palindromic nucleotide sequences within double-stranded DNA and cleave phosphodiester bonds at specific restriction sites.",
      neetNote: "Hind II was the first discovered restriction endonuclease. More than 900 restriction enzymes have been isolated from over 230 strains of bacteria."
    },
    {
      term: "Palindromic DNA Sequence",
      definition: "A symmetrical sequence of base pairs in double-stranded DNA that reads identically on both complementary strands when reading in the same 5' -> 3' direction.",
      neetNote: "Classic NCERT example: 5'-GAATTC-3' (top strand) and 3'-CTTAAG-5' (bottom strand) recognized by EcoRI."
    },
    {
      term: "Sticky Ends (Cohesive Ends)",
      definition: "Short, single-stranded overhanging extensions produced at the termini of DNA fragments when a restriction endonuclease cuts both complementary strands at staggered positions away from the symmetry axis.",
      neetNote: "Sticky ends facilitate hydrogen bonding with complementary single-stranded overhanging sequences of vector DNA cut with the SAME enzyme."
    },
    {
      term: "DNA Ligase",
      definition: "The enzyme that covalently joins two DNA fragments by catalyzing phosphodiester bond formation between adjacent 3'-hydroxyl (-OH) and 5'-phosphate (-PO4) groups.",
      neetNote: "Restriction enzyme = Molecular Scissors (cuts); DNA Ligase = Molecular Glue / Suture (joins)."
    },
    {
      term: "Plasmid",
      definition: "An extrachromosomal, double-stranded, circular, self-replicating DNA molecule naturally occurring in bacteria, used extensively as a cloning vector.",
      neetNote: "Plasmids replicate independently of chromosomal DNA control and carry non-essential survival genes (e.g., antibiotic resistance)."
    },
    {
      term: "Origin of Replication (ori)",
      definition: "A specific DNA sequence on a plasmid or vector where DNA replication begins and which controls the copy number of the linked foreign DNA fragment.",
      neetNote: "If foreign DNA is not linked to an 'ori' sequence, it will fail to replicate and will be lost during host cell divisions."
    },
    {
      term: "Selectable Marker",
      definition: "A gene present on a vector that allows the selective growth of host cells that have taken up the vector (transformants) while eliminating non-transformants.",
      neetNote: "Common bacterial selectable markers include genes encoding resistance to antibiotics: ampicillin (ampR), tetracycline (tetR), kanamycin (kanR), and chloramphenicol."
    },
    {
      term: "Insertional Inactivation",
      definition: "The functional inactivation or disruption of a selectable marker gene (e.g., tetR or lacZ) caused by the insertion of foreign recombinant DNA within its coding sequence.",
      neetNote: "Enables unambiguous differentiation of recombinant transformants from non-recombinant transformants."
    },
    {
      term: "Competent Host Cell",
      definition: "A bacterial or eukaryotic cell whose cell wall and plasma membrane have been rendered permeable to allow the uptake of foreign hydrophilic DNA molecules from its environment.",
      neetNote: "Achieved in E. coli using divalent Ca2+ cation treatment followed by 42°C heat shock."
    },
    {
      term: "Biolistics / Gene Gun",
      definition: "A physical direct gene transfer technique where microscopic particles of gold or tungsten coated with foreign DNA are bombarded into target plant cells at high velocity.",
      neetNote: "Specifically adapted for plant cells with rigid cellulose cell walls; microinjection is used for animal cells."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Foundations & Scope of Biotechnology: Traditional vs Modern Principles",
      paragraphs: [
        "What is Biotechnology? In broad terms, biotechnology encompasses all techniques that deploy living organisms, individual cells, or biological catalysts (enzymes) to generate goods and services beneficial to human society. In this traditional sense, centuries-old household and artisanal practices—such as making curd, cheese, bread, wine, beer, and vinegar using lactic acid bacteria and yeasts—represent forms of 'Traditional Biotechnology' based entirely on naturally occurring microbial capabilities.",
        "The Paradigm Shift to Modern Biotechnology: While traditional biotechnology relied on the natural, unmanipulated capabilities of microbes, Modern Biotechnology is characterized by purposeful, directed genetic manipulation in vitro. It utilizes Recombinant DNA (rDNA) technology, Polymerase Chain Reaction (PCR), and gene transfer methods to alter the hereditary makeup of organisms, engineer transgenic crops, manufacture recombinant therapeutic human proteins (e.g., recombinant insulin/Humulin, growth hormone, interferons), and correct genetic defects via gene therapy.",
        "The Unified EFB Definition: To encompass both traditional microbial applications and modern recombinant capabilities, the European Federation of Biotechnology (EFB) established an all-inclusive definition: 'The integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services.'",
        "The Two Foundational Principles of Modern Biotechnology (NCERT Core Mandate):",
        "1. Genetic Engineering: Techniques developed to alter the chemistry of genetic material (DNA and RNA) in vitro, introduce this altered DNA into a recipient host organism, and successfully modify the phenotypic characteristics of that host.",
        "2. Maintenance of Sterile Ambience (Bioprocess Engineering): Chemical engineering processes that maintain strictly aseptic, contamination-free conditions throughout manufacturing. This ensures that only the desired engineered microbe or eukaryotic cell grows in large-scale culture vessels (bioreactors) to yield uncontaminated vaccines, antibiotics, enzymes, and recombinant therapeutics.",
        "Historical Landmark: The First Recombinant DNA Molecule: In 1972, Stanley Cohen and Herbert Boyer accomplished the first construction of an artificial recombinant DNA molecule. They isolated an antibiotic-resistance gene from a native plasmid of Salmonella typhimurium by cutting DNA with restriction enzymes, and ligated this DNA fragment to a plasmid vector. When introduced into Escherichia coli, the recombinant plasmid replicated autonomously using the host's DNA polymerase, demonstrating the feasibility of gene cloning."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f8fafc"/>
              <stop offset="100%" stop-color="#f1f5f9"/>
            </linearGradient>
            <linearGradient id="boxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
            <linearGradient id="boxGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#16a34a"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <rect width="760" height="380" fill="url(#bgGrad1)" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Foundational Architecture of Modern Biotechnology (NCERT Core Framework)</text>
          
          <!-- Pillar 1: Genetic Engineering -->
          <g transform="translate(30, 55)">
            <rect width="330" height="295" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" rx="10"/>
            <rect x="12" y="12" width="306" height="34" fill="url(#boxGrad1)" rx="6"/>
            <text x="165" y="34" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">PILLAR 1: GENETIC ENGINEERING</text>
            
            <g transform="translate(16, 58)">
              <circle cx="12" cy="14" r="10" fill="#e0f2fe" stroke="#0284c7"/>
              <text x="12" y="18" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">1</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">In Vitro DNA Manipulation</text>
              <text x="30" y="26" fill="#475569" font-size="9">Isolation of gene of interest &amp; plasmid vector</text>
            </g>

            <g transform="translate(16, 100)">
              <circle cx="12" cy="14" r="10" fill="#e0f2fe" stroke="#0284c7"/>
              <text x="12" y="18" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">2</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">Restriction Cleavage &amp; Ligation</text>
              <text x="30" y="26" fill="#475569" font-size="9">Molecular scissors + DNA ligase create rDNA</text>
            </g>

            <g transform="translate(16, 142)">
              <circle cx="12" cy="14" r="10" fill="#e0f2fe" stroke="#0284c7"/>
              <text x="12" y="18" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">3</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">Gene Transfer into Host</text>
              <text x="30" y="26" fill="#475569" font-size="9">Transformation of competent cells (E. coli)</text>
            </g>

            <g transform="translate(16, 184)">
              <circle cx="12" cy="14" r="10" fill="#e0f2fe" stroke="#0284c7"/>
              <text x="12" y="18" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">4</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">Altered Host Phenotype</text>
              <text x="30" y="26" fill="#475569" font-size="9">Replication, transcription &amp; translation of gene</text>
            </g>

            <rect x="16" y="225" width="298" height="55" fill="#f0f9ff" stroke="#bae6fd" rx="6"/>
            <text x="165" y="244" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">First rDNA Created by Cohen &amp; Boyer (1972)</text>
            <text x="165" y="262" fill="#475569" font-size="8.5" text-anchor="middle">Antibiotic resistance gene + S. typhimurium plasmid</text>
          </g>

          <!-- Pillar 2: Maintenance of Sterile Ambience -->
          <g transform="translate(400, 55)">
            <rect width="330" height="295" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="10"/>
            <rect x="12" y="12" width="306" height="34" fill="url(#boxGrad2)" rx="6"/>
            <text x="165" y="34" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">PILLAR 2: STERILE BIOPROCESSING</text>
            
            <g transform="translate(16, 58)">
              <circle cx="12" cy="14" r="10" fill="#dcfce7" stroke="#16a34a"/>
              <text x="12" y="18" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">1</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">Aseptic Environmental Control</text>
              <text x="30" y="26" fill="#475569" font-size="9">Total exclusion of contaminating unwanted microbes</text>
            </g>

            <g transform="translate(16, 100)">
              <circle cx="12" cy="14" r="10" fill="#dcfce7" stroke="#16a34a"/>
              <text x="12" y="18" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">2</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">Pure Monoculture Growth</text>
              <text x="30" y="26" fill="#475569" font-size="9">Facilitates exclusive proliferation of engineered host</text>
            </g>

            <g transform="translate(16, 142)">
              <circle cx="12" cy="14" r="10" fill="#dcfce7" stroke="#16a34a"/>
              <text x="12" y="18" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">3</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">Large-Scale Bioreactor Scaling</text>
              <text x="30" y="26" fill="#475569" font-size="9">100 - 1000 Litre industrial bioreactor vessels</text>
            </g>

            <g transform="translate(16, 184)">
              <circle cx="12" cy="14" r="10" fill="#dcfce7" stroke="#16a34a"/>
              <text x="12" y="18" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">4</text>
              <text x="30" y="14" fill="#0f172a" font-size="10" font-weight="bold">High Yield Target Products</text>
              <text x="30" y="26" fill="#475569" font-size="9">Purified vaccines, enzymes, hormones, antibodies</text>
            </g>

            <rect x="16" y="225" width="298" height="55" fill="#f0fdf4" stroke="#bbf7d0" rx="6"/>
            <text x="165" y="244" fill="#15803d" font-size="9.5" font-weight="bold" text-anchor="middle">EFB Unified Definition</text>
            <text x="165" y="262" fill="#475569" font-size="8.5" text-anchor="middle">Natural Science + Organisms/Cells + Molecular Analogues</text>
          </g>
        </svg>`,
        caption: "The two fundamental pillars of modern biotechnology: Genetic Engineering (molecular manipulation) and Maintenance of Sterile Ambience (bioprocess scaling).",
        guide: "Observe the clear division between genetic modification of the organism (Pillar 1) and contamination-free industrial mass culture (Pillar 2)."
      },
      importantPoints: [
        "Traditional biotechnology utilizes natural microbial capabilities; modern biotechnology alters genetic makeup via rDNA technology.",
        "EFB definition combines both traditional view and modern molecular biotechnology.",
        "The two core principles are (1) Genetic Engineering and (2) Maintenance of sterile conditions.",
        "First artificial recombinant DNA was constructed in 1972 by Stanley Cohen and Herbert Boyer using an antibiotic resistance gene and S. typhimurium plasmid."
      ]
    },
    {
      heading: "2. Molecular Scissors: Restriction Endonucleases, Nomenclature & Cleavage Dynamics",
      paragraphs: [
        "Discovery & Biological Function in Nature: In 1963, two bacterial enzymes responsible for restricting the growth of bacteriophage in Escherichia coli were discovered: one added methyl groups to bacterial DNA (methylase, protecting self DNA from cleavage), while the other cut foreign phage DNA (restriction endonuclease). Restriction endonucleases function naturally as a bacterial 'immune defense system' that destroys invading viral genomes.",
        "First Characterized Restriction Endonuclease - Hind II: In 1970, Hamilton Smith and colleagues isolated Hind II from Haemophilus influenzae strain Rd. Hind II was demonstrated to always cleave double-stranded DNA molecules at a specific point by recognizing a specific sequence of 6 base pairs (bp). Today, more than 900 restriction enzymes have been isolated from over 230 bacterial strains, each recognizing unique DNA sequences.",
        "Distinction Between Exonucleases and Endonucleases:",
        "1. Exonucleases: Nucleolytic enzymes that remove nucleotides one by one from the terminal ends (either 5' or 3' ends) of a nucleic acid chain.",
        "2. Endonucleases: Enzymes that make internal cuts at specific positions within the DNA duplex.",
        "3. Restriction Endonucleases: Specialized endonucleases that recognize specific recognition sequences (typically 4 to 8 bp palindromes) and cleave both phosphodiester backbones at defined positions.",
        "System of Nomenclature for Restriction Enzymes (NCERT Rules):",
        "The standard binomial nomenclature for restriction enzymes follows a precise 4-part convention derived from the host bacterium:",
        "1. First Letter (Capitalized): Represents the Genus of the donor prokaryote (e.g., 'E' from Escherichia).",
        "2. Second & Third Letters (Lowercase): Represent the Species of the bacterium (e.g., 'co' from coli).",
        "3. Fourth Letter: Represents the specific Strain of the organism (e.g., 'R' from strain RY 13).",
        "4. Roman Numeral: Denotes the chronological order in which the enzyme was isolated from that particular strain of bacterium (e.g., 'I' indicates the first enzyme isolated from E. coli RY 13 -> EcoRI).",
        "Palindromic Recognition Sequences: In language, a palindrome reads identical forwards and backwards (e.g., 'MADAM', 'MALAYALAM'). In molecular biology, a DNA palindrome is a sequence of base pairs that reads identical on both complementary antiparallel strands when read in the same direction (5' -> 3' or 3' -> 5').",
        "EcoRI Cleavage Pattern & Sticky Ends:",
        "EcoRI specifically recognizes the 6 bp palindromic sequence: 5'-G A A T T C-3' / 3'-C T T A A G-5'. Instead of cutting straight down the center, EcoRI cuts both strands between the G and A residues, slightly away from the center of the palindrome. This staggered cleavage produces single-stranded overhanging tails with free unpaired bases: 5'-AATT-3'. These overhanging projections are termed 'Sticky Ends' (or cohesive ends) because they readily form hydrogen bonds with complementary overhanging sequences produced on any other DNA molecule cut with the SAME restriction enzyme. This sticky end compatibility is subsequently permanently locked by DNA ligase."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <linearGradient id="dnaGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
            <linearGradient id="dnaGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
          </defs>
          <rect width="760" height="400" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">EcoRI Palindromic Cleavage &amp; Sticky End Generation (NCERT Exact Mechanism)</text>
          
          <!-- Uncut Palindrome -->
          <g transform="translate(80, 50)">
            <rect width="600" height="95" fill="#ffffff" stroke="#94a3b8" stroke-width="1" rx="8"/>
            <text x="300" y="22" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">EcoRI Recognition Sequence (6 base pairs Palindrome)</text>
            
            <!-- 5' to 3' top strand -->
            <text x="30" y="52" fill="#0369a1" font-size="13" font-weight="bold">5' —</text>
            <text x="90" y="52" fill="#475569" font-size="13" font-family="monospace">N N N</text>
            <text x="170" y="52" fill="#dc2626" font-size="15" font-weight="bold" font-family="monospace">G</text>
            <text x="210" y="52" fill="#16a34a" font-size="15" font-weight="bold" font-family="monospace">A  A  T  T</text>
            <text x="340" y="52" fill="#dc2626" font-size="15" font-weight="bold" font-family="monospace">C</text>
            <text x="380" y="52" fill="#475569" font-size="13" font-family="monospace">N N N</text>
            <text x="460" y="52" fill="#0369a1" font-size="13" font-weight="bold">— 3'</text>

            <!-- Cut arrows -->
            <path d="M 195 32 L 195 44" stroke="#dc2626" stroke-width="2.5"/>
            <polygon points="191,42 195,48 199,42" fill="#dc2626"/>
            <text x="195" y="24" fill="#dc2626" font-size="9.5" font-weight="bold" text-anchor="middle">EcoRI Cut</text>

            <!-- 3' to 5' bottom strand -->
            <text x="30" y="80" fill="#0369a1" font-size="13" font-weight="bold">3' —</text>
            <text x="90" y="80" fill="#475569" font-size="13" font-family="monospace">N N N</text>
            <text x="170" y="80" fill="#dc2626" font-size="15" font-weight="bold" font-family="monospace">C</text>
            <text x="210" y="80" fill="#16a34a" font-size="15" font-weight="bold" font-family="monospace">T  T  A  A</text>
            <text x="340" y="80" fill="#dc2626" font-size="15" font-weight="bold" font-family="monospace">G</text>
            <text x="380" y="80" fill="#475569" font-size="13" font-family="monospace">N N N</text>
            <text x="460" y="80" fill="#0369a1" font-size="13" font-weight="bold">— 5'</text>

            <path d="M 335 98 L 335 86" stroke="#dc2626" stroke-width="2.5"/>
            <polygon points="331,88 335,82 339,88" fill="#dc2626"/>
            <text x="335" y="112" fill="#dc2626" font-size="9.5" font-weight="bold" text-anchor="middle">EcoRI Cut</text>
          </g>

          <!-- Middle Staggered Cleavage Illustration -->
          <g transform="translate(80, 175)">
            <rect width="600" height="95" fill="#f0f9ff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
            <text x="300" y="20" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle">Staggered Cleavage Creates Single-Stranded Overhanging Sticky Ends</text>

            <!-- Left Fragment -->
            <text x="40" y="52" fill="#0f172a" font-size="13" font-family="monospace">5'-...-G</text>
            <text x="40" y="78" fill="#0f172a" font-size="13" font-family="monospace">3'-...-C T T A A</text>
            <rect x="135" y="64" width="85" height="20" fill="#fef08a" opacity="0.6" rx="3"/>
            <text x="177" y="78" fill="#854d0e" font-size="9" font-weight="bold" text-anchor="middle">Sticky End</text>

            <!-- Right Fragment -->
            <text x="410" y="52" fill="#0f172a" font-size="13" font-family="monospace">A A T T-C-...-3'</text>
            <text x="495" y="78" fill="#0f172a" font-size="13" font-family="monospace">G-...-5'</text>
            <rect x="405" y="38" width="85" height="20" fill="#fef08a" opacity="0.6" rx="3"/>
            <text x="447" y="52" fill="#854d0e" font-size="9" font-weight="bold" text-anchor="middle">Sticky End</text>
          </g>

          <!-- Bottom Ligation Step -->
          <g transform="translate(80, 290)">
            <rect width="600" height="90" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5" rx="8"/>
            <text x="300" y="20" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">DNA Ligase Seals Phosphodiester Bonds (Recombinant DNA Formation)</text>
            
            <text x="120" y="55" fill="#0f172a" font-size="12" font-family="monospace">5'-...-G</text>
            <rect x="185" y="42" width="220" height="20" fill="#bbf7d0" rx="4"/>
            <text x="295" y="56" fill="#14532d" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">A  A  T  T  C-...-3' (Insert)</text>
            
            <text x="120" y="78" fill="#0f172a" font-size="12" font-family="monospace">3'-...-C  T  T  A  A</text>
            <text x="300" y="78" fill="#14532d" font-size="12" font-weight="bold" font-family="monospace">G-...-5' (Vector)</text>

            <path d="M 440 60 L 510 60" stroke="#16a34a" stroke-width="2"/>
            <polygon points="508,56 516,60 508,64" fill="#16a34a"/>
            <text x="545" y="56" fill="#15803d" font-size="10" font-weight="bold">rDNA</text>
            <text x="545" y="70" fill="#475569" font-size="8.5">Molecule</text>
          </g>
        </svg>`,
        caption: "Exact molecular cleavage of palindromic sequence 5'-GAATTC-3' by EcoRI between G and A, resulting in complementary 5'-AATT-3' sticky ends that are covalently sealed by DNA ligase.",
        guide: "Observe the staggered cut positions: top strand cut between G and A, bottom strand cut between G and A, leaving 4 single-stranded overhanging nucleotides."
      },
      tables: [
        {
          title: "Comprehensive Comparison: Exonucleases vs Endonucleases vs Restriction Endonucleases",
          headers: ["Feature / Parameter", "Exonucleases", "General Endonucleases", "Restriction Endonucleases (Type II)"],
          rows: [
            ["Site of Cleavage", "Terminal 5' or 3' free ends of DNA", "Any internal non-specific site within DNA", "Strictly specific internal palindromic recognition sequences"],
            ["Sequence Specificity", "None; cuts sequential terminal nucleotides", "Non-specific random phosphodiester hydrolysis", "Absolute specificity for 4 to 8 bp palindromes"],
            ["Natural Function", "DNA degradation, repair & proofreading", "Cellular DNA turnover, recombination", "Bacterial defense against invading bacteriophages"],
            ["Product Formed", "Single mononucleotides / small fragments", "Random-sized heterogeneous fragments", "Precise fragments with defined sticky or blunt ends"],
            ["Role in rDNA Technology", "Degradation (undesirable during cloning)", "Non-specific (not useful for cloning)", "Fundamental 'Molecular Scissors' of Genetic Engineering"]
          ]
        }
      ],
      importantPoints: [
        "First discovered restriction enzyme was Hind II (recognizes specific 6 bp sequence).",
        "EcoRI is derived from Escherichia coli RY 13 (E = Genus, co = species, R = strain RY13, I = first enzyme).",
        "EcoRI recognition site: 5'-GAATTC-3' / 3'-CTTAAG-5'; cuts between G and A on both strands.",
        "Staggered cuts produce sticky (cohesive) ends; DNA ligase seals the phosphodiester bonds."
      ]
    },
    {
      heading: "3. Cloning Vectors & Deep Dive into pBR322 Architecture",
      paragraphs: [
        "What is a Cloning Vector? A vector is a self-replicating DNA molecule (such as a bacterial plasmid or bacteriophage genome) used as a vehicle to artificially carry foreign genetic material into another cell, where it can be replicated and/or expressed. Plasmids and bacteriophages have the ability to replicate within bacterial cells independently of the control of chromosomal DNA.",
        "Key Features Required to Facilitate Cloning into a Vector (NCERT Mandates):",
        "1. Origin of Replication (ori): This is a specific sequence of base pairs from where DNA replication starts. Any piece of foreign DNA linked to the ori sequence can be made to replicate within the host cell. Furthermore, the ori sequence is responsible for controlling the 'Copy Number' of the linked foreign DNA. Choosing an ori that supports high copy numbers (e.g., 15–100 copies per cell) enables massive amplification of the target gene.",
        "2. Selectable Marker: A gene that helps identify and select transformants while eliminating non-transformants. Transformation is the procedure by which a piece of foreign DNA is introduced into a host bacterium. Normal wild-type E. coli cells are sensitive to standard antibiotics (they do not carry resistance against ampicillin, chloramphenicol, tetracycline, or kanamycin). Vectors carry genes encoding resistance to these antibiotics (e.g., ampR, tetR), ensuring that only transformed bacteria survive on antibiotic-containing nutrient media.",
        "3. Cloning Sites (Recognition Sites / Multiple Cloning Site - MCS): In order to link the foreign DNA, the vector requires recognition sites for the commonly used restriction enzymes. To avoid fragmentation of the vector, the vector should possess preferably a SINGLE (unique) recognition site for a particular restriction endonuclease. The presence of more than one recognition site within the vector will generate several fragments, which will complicate gene cloning.",
        "4. Vectors for Cloning Genes in Plants and Animals:",
        "• Plants: Agrobacterium tumefaciens (a soil bacterium pathogen of several dicotyledonous plants) naturally delivers a piece of DNA called 'T-DNA' from its Tumor-inducing (Ti) plasmid into normal plant cells, transforming them into crown gall tumors and directing them to produce opines. The Ti plasmid has now been modified (disarmed) into an effective cloning vector that is no longer pathogenic to plants but transfers desired agricultural genes.",
        "• Animals: Retroviruses in animals have the ability to transform normal cells into cancerous cells. Disarmed retroviruses (whose oncogenic viral genes are deleted) are used as safe vectors to deliver therapeutic human genes into cultured mammalian cells.",
        "Complete Architecture of the Standard Plasmid Vector pBR322:",
        "Engineered by Bolivar and Rodriguez (hence 'p' = plasmid, 'BR' = Bolivar & Rodriguez, '322' = strain number distinguishing it from other plasmids in the same laboratory):",
        "1. Size: 4,361 base pairs of circular, double-stranded DNA.",
        "2. Selectable Markers: Two antibiotic resistance genes:",
        "• ampR (Ampicillin resistance gene): Contains unique restriction sites for PstI and PvuI.",
        "• tetR (Tetracycline resistance gene): Contains unique restriction sites for BamHI and SalI.",
        "3. Other Unique Restriction Sites: EcoRI, ClaI, HindIII (located near the promoter/origin region, outside ampR/tetR).",
        "4. Origin of Replication (ori): Controls replication initiation and copy number.",
        "5. rop Gene (Repressor of Primer): Codes for the proteins involved in the replication of the plasmid; contains a unique restriction site for PvuII."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <radialGradient id="pbrGrad" cx="50%" cy="50%" r="50%">
              <stop offset="60%" fill="#ffffff"/>
              <stop offset="100%" fill="#f1f5f9"/>
            </radialGradient>
          </defs>
          <rect width="760" height="520" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Standard Cloning Vector pBR322 (Complete NCERT Diagram)</text>
          
          <!-- Plasmid Circle -->
          <g transform="translate(380, 270)">
            <!-- Outer Backbone Ring -->
            <circle cx="0" cy="0" r="160" fill="#ffffff" stroke="#94a3b8" stroke-width="18"/>
            
            <!-- ampR Region (Top-Left) Arc (Blue) -->
            <path d="M -152 -50 A 160 160 0 0 1 -50 -152" fill="none" stroke="#0284c7" stroke-width="18"/>
            
            <!-- tetR Region (Top-Right) Arc (Green) -->
            <path d="M 50 -152 A 160 160 0 0 1 152 -50" fill="none" stroke="#16a34a" stroke-width="18"/>
            
            <!-- rop Region (Bottom-Right) Arc (Orange) -->
            <path d="M 120 106 A 160 160 0 0 1 40 155" fill="none" stroke="#ea580c" stroke-width="18"/>

            <!-- ori Region (Bottom-Left) Arc (Purple) -->
            <path d="M -50 152 A 160 160 0 0 1 -130 94" fill="none" stroke="#7c3aed" stroke-width="18"/>

            <!-- Inner Circle fill -->
            <circle cx="0" cy="0" r="148" fill="#ffffff"/>
            
            <!-- Plasmid Center Title -->
            <text x="0" y="-15" fill="#0f172a" font-size="18" font-weight="bold" text-anchor="middle">pBR322</text>
            <text x="0" y="10" fill="#64748b" font-size="11" text-anchor="middle">(4,361 bp)</text>
            <text x="0" y="30" fill="#475569" font-size="9.5" text-anchor="middle">E. coli Cloning Vector</text>

            <!-- ampR Label inside -->
            <text x="-105" y="-95" fill="#0369a1" font-size="13" font-weight="bold">amp<tspan baseline-shift="super" font-size="9">R</tspan></text>
            
            <!-- tetR Label inside -->
            <text x="80" y="-95" fill="#15803d" font-size="13" font-weight="bold">tet<tspan baseline-shift="super" font-size="9">R</tspan></text>
            
            <!-- ori Label inside -->
            <text x="-90" y="115" fill="#6d28d9" font-size="13" font-weight="bold">ori</text>
            
            <!-- rop Label inside -->
            <text x="75" y="115" fill="#c2410c" font-size="13" font-weight="bold">rop</text>

            <!-- RESTRICTION SITES (Leader Lines & Text) -->
            <!-- Top Sites: EcoRI, ClaI, HindIII -->
            <line x1="-15" y1="-160" x2="-25" y2="-210" stroke="#0f172a" stroke-width="1.5"/>
            <text x="-30" y="-218" fill="#dc2626" font-size="11.5" font-weight="bold" text-anchor="end">ClaI</text>

            <line x1="0" y1="-160" x2="0" y2="-215" stroke="#0f172a" stroke-width="1.5"/>
            <text x="0" y="-222" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">HindIII</text>

            <line x1="15" y1="-160" x2="25" y2="-210" stroke="#0f172a" stroke-width="1.5"/>
            <text x="30" y="-218" fill="#dc2626" font-size="11.5" font-weight="bold" text-anchor="start">EcoRI</text>

            <!-- tetR Sites: BamHI, SalI -->
            <line x1="130" y1="-95" x2="190" y2="-130" stroke="#0f172a" stroke-width="1.5"/>
            <text x="195" y="-132" fill="#15803d" font-size="12" font-weight="bold">BamHI</text>

            <line x1="155" y1="-45" x2="215" y2="-65" stroke="#0f172a" stroke-width="1.5"/>
            <text x="220" y="-67" fill="#15803d" font-size="12" font-weight="bold">SalI</text>

            <!-- ampR Sites: PstI, PvuI -->
            <line x1="-130" y1="-95" x2="-190" y2="-130" stroke="#0f172a" stroke-width="1.5"/>
            <text x="-195" y="-132" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="end">PvuI</text>

            <line x1="-155" y1="-45" x2="-215" y2="-65" stroke="#0f172a" stroke-width="1.5"/>
            <text x="-220" y="-67" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="end">PstI</text>

            <!-- rop Site: PvuII -->
            <line x1="90" y1="135" x2="150" y2="185" stroke="#0f172a" stroke-width="1.5"/>
            <text x="155" y="195" fill="#c2410c" font-size="12" font-weight="bold">PvuII</text>

            <!-- Note about rop -->
            <text x="155" y="212" fill="#64748b" font-size="9">(codes for proteins of replication)</text>

            <!-- Note about ori -->
            <line x1="-90" y1="135" x2="-150" y2="185" stroke="#0f172a" stroke-width="1.5"/>
            <text x="-155" y="195" fill="#6d28d9" font-size="12" font-weight="bold" text-anchor="end">Origin of Replication</text>
            <text x="-155" y="212" fill="#64748b" font-size="9" text-anchor="end">(Controls Copy Number)</text>
          </g>
        </svg>`,
        caption: "Standard E. coli cloning vector pBR322 showing all restriction sites (EcoRI, ClaI, HindIII, BamHI, SalI, PvuII, PvuI, PstI), selectable markers (ampR, tetR), origin of replication (ori), and rop gene.",
        guide: "Memorize the positions of all restriction sites: ampR contains PstI and PvuI; tetR contains BamHI and SalI; rop contains PvuII; EcoRI, ClaI, and HindIII are located outside the marker genes."
      },
      tables: [
        {
          title: "Comprehensive Breakdown of pBR322 Structural Components & Restriction Sites",
          headers: ["Region / Gene", "Unique Restriction Sites", "Biological Function / Significance in Cloning"],
          rows: [
            ["ampR Gene", "PstI, PvuI", "Confers resistance to Ampicillin; insertion here causes loss of ampicillin resistance."],
            ["tetR Gene", "BamHI, SalI", "Confers resistance to Tetracycline; insertion here causes loss of tetracycline resistance."],
            ["ori (Origin of Replication)", "None (replication origin)", "Initiates autonomous replication; dictates plasmid copy number per host cell."],
            ["rop Gene", "PvuII", "Codes for repressor of primer protein involved in regulating plasmid DNA copy number."],
            ["Independent Promoter Region", "EcoRI, ClaI, HindIII", "Cloning sites outside the selectable marker genes; does not disrupt ampR or tetR."]
          ]
        }
      ],
      importantPoints: [
        "pBR322 contains TWO selectable markers: ampR (PstI, PvuI) and tetR (BamHI, SalI).",
        "PvuII restriction site is located inside the 'rop' gene (NOT in ampR or tetR).",
        "EcoRI, ClaI, and HindIII restriction sites are located outside the antibiotic resistance genes.",
        "Ti plasmid of Agrobacterium tumefaciens is used as cloning vector for plants; disarmed Retroviruses are used for animal cells."
      ]
    },
    {
      heading: "4. Insertional Inactivation & Blue-White Chromogenic Selection",
      paragraphs: [
        "The Principle of Insertional Inactivation: When foreign recombinant DNA is ligated into a restriction site located inside the coding sequence of a selectable marker gene, the continuity of that gene is interrupted. As a direct consequence, the marker gene can no longer be transcribed and translated into a functional protein. This phenomenon is termed 'Insertional Inactivation'.",
        "Selection of Recombinants in pBR322 via Replica Plating:",
        "Suppose foreign DNA is ligated at the BamHI site of plasmid pBR322 (which lies within the tetR gene):",
        "1. The tetR gene is insertionally inactivated, while the ampR gene remains fully functional.",
        "2. The ligation mixture is introduced into competent E. coli cells sensitive to both ampicillin and tetracycline.",
        "3. Three possible bacterial populations result:",
        "• Non-transformants: Cells that failed to take up any plasmid -> DIE on ampicillin and DIE on tetracycline.",
        "• Non-recombinant Transformants: Cells that took up intact recircularized pBR322 without foreign DNA -> GROW on ampicillin AND GROW on tetracycline.",
        "• Recombinant Transformants: Cells that took up pBR322 containing foreign DNA in the tetR gene -> GROW on ampicillin BUT DIE on tetracycline.",
        "4. Replica Plating Procedure: Transformants are first plated on ampicillin-containing master plates (all transformants grow). Colonies are then stamped onto replica plates containing tetracycline. Recombinant colonies that grow on ampicillin but FAIL to grow on tetracycline are identified by comparing the plates and picked from the master plate for cultivation.",
        "Drawback of Antibiotic Selection: Selection of recombinants through insertional inactivation of antibiotic resistance genes requires simultaneous dual plating on two different antibiotic plates (replica plating), which is tedious, cumbersome, and time-consuming.",
        "Chromogenic Selection - The Blue-White Screening Alternative:",
        "To overcome the limitations of replica plating, modern vectors (such as pUC plasmids) incorporate an alternative selectable marker based on the production of color in the presence of a chromogenic substrate:",
        "1. Recombinant DNA is inserted within the coding sequence of the enzyme beta-galactosidase (lacZ gene).",
        "2. Non-recombinants: Without an insert, the intact lacZ gene produces active beta-galactosidase enzyme. In the presence of a synthetic chromogenic substrate (such as X-gal / 5-bromo-4-chloro-3-indolyl-beta-D-galactopyranoside), the enzyme hydrolyzes X-gal to produce an insoluble BLUE colored compound, forming BLUE COLONIES.",
        "3. Recombinants: Insertion of foreign DNA causes insertional inactivation of the beta-galactosidase gene. The bacteria produce non-functional enzyme, fail to hydrolyze X-gal, and form WHITE (uncolored) COLONIES.",
        "4. Advantage: Recombinant colonies (WHITE) can be distinguished from non-recombinants (BLUE) directly on a SINGLE agar plate without replica plating!"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <rect width="760" height="380" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Insertional Inactivation: Blue-White Selection Mechanism (lacZ / X-gal System)</text>
          
          <!-- Pathway 1: Non-Recombinant (Intact lacZ) -->
          <g transform="translate(30, 55)">
            <rect width="335" height="300" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="10"/>
            <rect x="12" y="12" width="311" height="30" fill="#2563eb" rx="6"/>
            <text x="167" y="32" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">NON-RECOMBINANT PLASMID</text>
            
            <!-- Intact plasmid graphic -->
            <g transform="translate(167, 95)">
              <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#94a3b8" stroke-width="8"/>
              <path d="M 15 -35 A 38 38 0 0 1 35 15" fill="none" stroke="#2563eb" stroke-width="8"/>
              <text x="0" y="4" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">Intact</text>
              <text x="0" y="16" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">lacZ</text>
            </g>

            <path d="M 167 145 L 167 175" stroke="#2563eb" stroke-width="2"/>
            <polygon points="163,172 167,180 171,172" fill="#2563eb"/>

            <text x="167" y="196" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">Active β-galactosidase Synthesized</text>
            <text x="167" y="214" fill="#475569" font-size="9" text-anchor="middle">Hydrolyzes Chromogenic Substrate (X-gal)</text>

            <rect x="25" y="235" width="285" height="50" fill="#1d4ed8" rx="8"/>
            <circle cx="55" cy="260" r="14" fill="#60a5fa" stroke="#ffffff" stroke-width="2"/>
            <text x="175" y="258" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">BLUE COLONIES</text>
            <text x="175" y="274" fill="#bfdbfe" font-size="9.5" text-anchor="middle">Identified as Non-Recombinants</text>
          </g>

          <!-- Pathway 2: Recombinant (Disrupted lacZ) -->
          <g transform="translate(395, 55)">
            <rect width="335" height="300" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="10"/>
            <rect x="12" y="12" width="311" height="30" fill="#dc2626" rx="6"/>
            <text x="167" y="32" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">RECOMBINANT PLASMID (With Insert)</text>
            
            <!-- Inserted plasmid graphic -->
            <g transform="translate(167, 95)">
              <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#94a3b8" stroke-width="8"/>
              <path d="M 15 -35 A 38 38 0 0 1 35 15" fill="none" stroke="#dc2626" stroke-width="8"/>
              <!-- Foreign Insert block -->
              <rect x="18" y="-22" width="22" height="22" fill="#16a34a" rx="4"/>
              <text x="0" y="4" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">Disrupted</text>
              <text x="0" y="16" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">lacZ gene</text>
            </g>

            <path d="M 167 145 L 167 175" stroke="#dc2626" stroke-width="2"/>
            <polygon points="163,172 167,180 171,172" fill="#dc2626"/>

            <text x="167" y="196" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">Insertional Inactivation of β-galactosidase</text>
            <text x="167" y="214" fill="#475569" font-size="9" text-anchor="middle">No hydrolysis of X-gal substrate</text>

            <rect x="25" y="235" width="285" height="50" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" rx="8"/>
            <circle cx="55" cy="260" r="14" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
            <text x="175" y="258" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">WHITE COLONIES</text>
            <text x="175" y="274" fill="#16a34a" font-size="9.5" font-weight="bold" text-anchor="middle">Desired Recombinants Picked</text>
          </g>
        </svg>`,
        caption: "Chromogenic selection based on insertional inactivation of beta-galactosidase gene (lacZ). Intact lacZ hydrolyzes X-gal to form blue colonies (non-recombinants); inserted foreign DNA disrupts lacZ, producing white colonies (recombinants).",
        guide: "Remember: WHITE = Recombinant (Gene inserted, enzyme inactivated); BLUE = Non-Recombinant (No insert, enzyme active)."
      },
      importantPoints: [
        "Insertion of foreign DNA into tetR of pBR322 makes host resistant to ampicillin but SENSITIVE to tetracycline.",
        "Chromogenic substrate selection utilizes insertional inactivation of beta-galactosidase (lacZ).",
        "Non-recombinant colonies are BLUE; recombinant colonies with insert are WHITE.",
        "Chromogenic selection requires only a single plate, eliminating the need for replica plating."
      ]
    },
    {
      heading: "5. Making Host Cells Competent & Methods of Gene Transfer",
      paragraphs: [
        "Why Must Host Cells be Made Competent? DNA is a hydrophilic macromolecule carrying negatively charged phosphate groups in its backbone. Because cell membranes are composed of a hydrophobic phospholipid bilayer, DNA cannot naturally pass through cell membranes. To force bacterial cells to take up plasmid vectors, they must first be rendered 'Competent' (physiologically receptive to foreign DNA uptake).",
        "1. Chemical Competence & Heat Shock (Bacterial Transformation):",
        "• Divalent Cation Treatment: Bacterial cells (e.g., E. coli) are treated with a specific concentration of a divalent cation, such as Calcium (Ca2+ as CaCl2). The positive divalent calcium ions shield the negative charges of both DNA phosphates and the membrane lipopolysaccharides, increasing the permeability of pores in the bacterial cell wall.",
        "• Heat Shock Method: The recombinant DNA and competent cells are first incubated on ice (0°C). They are then briefly subjected to a heat shock at 42°C for 90 seconds, and immediately transferred back onto ice. This rapid temperature flux forces the plasmid DNA to enter the bacterium through the transient cell wall pores.",
        "2. Microinjection (Animal Cells):",
        "In this physical gene transfer method, recombinant DNA is directly injected into the nucleus of an animal cell (such as an unfertilized egg, zygote, or mammalian oocyte) using an ultra-fine glass micropipette under a high-magnification micromanipulator microscope.",
        "3. Biolistics / Gene Gun (Plant Cells):",
        "Because plant cells possess thick, rigid cellulosic cell walls that resist chemical transformation, biolistics (biological ballistics) is employed. Microscopic heavy metal particles of Gold (Au) or Tungsten (W), ranging from 1 to 2 micrometers in diameter, are coated with recombinant DNA. These microprojectiles are accelerated to supersonic velocities using pressurized helium gas in a gene gun, penetrating through the rigid cell wall and nuclear membrane to deliver DNA into the plant genome.",
        "4. Disarmed Pathogen Vectors:",
        "Another method uses 'disarmed pathogens' (such as Agrobacterium tumefaciens Ti plasmid in plants or disarmed Retroviruses / Adenoviruses in animal cells). When allowed to infect the host cells naturally, these disarmed vectors transfer the recombinant DNA into the host genome without causing disease."
      ],
      tables: [
        {
          title: "Comprehensive Comparison of Gene Transfer Methods (NEET High-Yield Summary)",
          headers: ["Method", "Target Host Organism", "Mechanism / Principle", "Key Reagents / Apparatus"],
          rows: [
            ["Divalent Cation + Heat Shock", "Bacterial cells (E. coli)", "Ca2+ shields negative charges; transient thermal flux (ice -> 42°C -> ice) forces DNA entry through pores", "CaCl2, 42°C water bath, ice"],
            ["Microinjection", "Animal cells / oocytes / zygotes", "Direct physical delivery of DNA into the nucleus using a glass micropipette", "Micromanipulator, glass micropipette"],
            ["Biolistics / Gene Gun", "Plant cells (thick cell walls)", "High-velocity bombardment with DNA-coated microscopic gold or tungsten particles", "Gene gun, Gold (Au) / Tungsten (W) particles"],
            ["Disarmed Vectors", "Plants (Ti plasmid) & Animals (Retrovirus)", "Natural infection mechanism delivering non-pathogenic recombinant DNA", "Agrobacterium Ti plasmid, modified Retrovirus"]
          ]
        }
      ],
      importantPoints: [
        "DNA cannot pass through cell membranes because it is HYDROPHILIC and negatively charged.",
        "Bacterial competence requires divalent cation (Ca2+) treatment followed by 42°C heat shock.",
        "Microinjection injects DNA directly into the NUCLEUS of animal cells.",
        "Biolistics / Gene Gun uses gold or tungsten microparticles for PLANT cells.",
        "Disarmed pathogen vectors include Agrobacterium Ti plasmid (plants) and Retroviruses (animals)."
      ]
    }
  ],

  formulae: [
    {
      title: "Recombinant DNA Tools & Restriction Cleavage Master Equation Sheet",
      formula: "1. Restriction Enzyme Cleavage: dsDNA xrightarrow{EcoRI} 5'-G + AATTC-3' (Sticky Ends)\n2. Phosphodiester Ligation: 3'-OH + 5'-PO_4 xrightarrow{DNA Ligase + ATP/NAD^+} Phosphodiester Bond (rDNA)\n3. pBR322 Insertion at BamHI/SalI: amp^R (Functional) + tet^R (Inactivated) -> Grow on Amp, Die on Tet\n4. Blue-White Screening: lacZ (Intact) + X-gal -> Blue Colonies | lacZ (Disrupted by Insert) + X-gal -> White Colonies (Recombinants)\n5. Bacterial Competence: Host + Ca^{2+} -> Ice (0^\\circ C) -> Heat Shock (42^\\circ C) -> Ice (0^\\circ C)",
      meaning: "Consolidated molecular equations and selection rules for restriction cleavage, vector ligation, insertional inactivation, and host transformation.",
      symbols: "EcoRI: Escherichia coli RY 13 enzyme I; ampR: Ampicillin resistance; tetR: Tetracycline resistance; lacZ: beta-galactosidase gene; X-gal: 5-bromo-4-chloro-3-indolyl-beta-D-galactopyranoside",
      unit: "Molecular Genetics & Vector Engineering"
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
      <rect width="760" height="420" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Integrated Summary of Recombinant DNA Tools &amp; Gene Transfer</text>
      
      <!-- Box 1: Molecular Tools -->
      <g transform="translate(25, 55)">
        <rect width="225" height="340" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
        <rect x="8" y="8" width="209" height="28" fill="#0284c7" rx="5"/>
        <text x="112" y="26" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. MOLECULAR TOOLS</text>
        
        <g transform="translate(10, 48)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• Restriction Enzymes</text>
          <text x="10" y="26" fill="#475569" font-size="9">Molecular scissors</text>
          <text x="10" y="38" fill="#475569" font-size="9">Hind II (1st discovered)</text>
          <text x="10" y="50" fill="#475569" font-size="9">EcoRI (5'-GAATTC-3')</text>
        </g>

        <g transform="translate(10, 115)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• DNA Ligase</text>
          <text x="10" y="26" fill="#475569" font-size="9">Molecular glue / suture</text>
          <text x="10" y="38" fill="#475569" font-size="9">Joins 3'-OH and 5'-PO4</text>
        </g>

        <g transform="translate(10, 170)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• DNA Polymerase</text>
          <text x="10" y="26" fill="#475569" font-size="9">Synthesizes DNA strand</text>
        </g>

        <g transform="translate(10, 220)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• Alkaline Phosphatase</text>
          <text x="10" y="26" fill="#475569" font-size="9">Prevents vector self-ligation</text>
        </g>

        <g transform="translate(10, 270)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• Lysozyme/Cellulase/Chitinase</text>
          <text x="10" y="26" fill="#475569" font-size="9">Cell wall lysis enzymes</text>
        </g>
      </g>

      <!-- Box 2: Cloning Vectors -->
      <g transform="translate(265, 55)">
        <rect width="230" height="340" fill="#ffffff" stroke="#4ade80" stroke-width="1.5" rx="8"/>
        <rect x="8" y="8" width="214" height="28" fill="#16a34a" rx="5"/>
        <text x="115" y="26" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. CLONING VECTORS</text>
        
        <g transform="translate(10, 48)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Origin of Replication (ori)</text>
          <text x="10" y="26" fill="#475569" font-size="9">Controls copy number</text>
        </g>

        <g transform="translate(10, 95)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Selectable Markers</text>
          <text x="10" y="26" fill="#475569" font-size="9">ampR, tetR, kanR</text>
          <text x="10" y="38" fill="#475569" font-size="9">Selects transformants</text>
        </g>

        <g transform="translate(10, 150)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Plasmid pBR322</text>
          <text x="10" y="26" fill="#475569" font-size="9">ampR: PstI, PvuI</text>
          <text x="10" y="38" fill="#475569" font-size="9">tetR: BamHI, SalI</text>
          <text x="10" y="50" fill="#475569" font-size="9">rop: PvuII (proteins of repl.)</text>
        </g>

        <g transform="translate(10, 220)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Plant &amp; Animal Vectors</text>
          <text x="10" y="26" fill="#475569" font-size="9">Plants: Agrobacterium Ti plasmid</text>
          <text x="10" y="38" fill="#475569" font-size="9">Animals: Disarmed Retroviruses</text>
        </g>

        <g transform="translate(10, 275)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Blue-White Selection</text>
          <text x="10" y="26" fill="#475569" font-size="9">lacZ insertional inactivation</text>
          <text x="10" y="38" fill="#475569" font-size="9">White = Recombinant</text>
        </g>
      </g>

      <!-- Box 3: Competent Host & Gene Transfer -->
      <g transform="translate(510, 55)">
        <rect width="225" height="340" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" rx="8"/>
        <rect x="8" y="8" width="209" height="28" fill="#d97706" rx="5"/>
        <text x="112" y="26" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. HOST &amp; GENE TRANSFER</text>
        
        <g transform="translate(10, 48)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Bacterial Transformation</text>
          <text x="10" y="26" fill="#475569" font-size="9">Ca2+ divalent cation</text>
          <text x="10" y="38" fill="#475569" font-size="9">Heat shock (42°C)</text>
          <text x="10" y="50" fill="#475569" font-size="9">Increases pore permeability</text>
        </g>

        <g transform="translate(10, 115)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Microinjection</text>
          <text x="10" y="26" fill="#475569" font-size="9">Direct injection into nucleus</text>
          <text x="10" y="38" fill="#475569" font-size="9">For animal cells / zygotes</text>
        </g>

        <g transform="translate(10, 170)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Biolistics / Gene Gun</text>
          <text x="10" y="26" fill="#475569" font-size="9">High-velocity microprojectiles</text>
          <text x="10" y="38" fill="#475569" font-size="9">Gold (Au) / Tungsten (W)</text>
          <text x="10" y="50" fill="#475569" font-size="9">For plant cells (cellulose wall)</text>
        </g>

        <g transform="translate(10, 240)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Electroporation</text>
          <text x="10" y="26" fill="#475569" font-size="9">High-voltage electrical pulses</text>
          <text x="10" y="38" fill="#475569" font-size="9">Creates temporary pores</text>
        </g>

        <g transform="translate(10, 290)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Disarmed Pathogens</text>
          <text x="10" y="26" fill="#475569" font-size="9">Natural transfer of T-DNA</text>
        </g>
      </g>
    </svg>`,
    caption: "Master summary chart of recombinant DNA technology tools: Molecular Enzymes, Cloning Vectors, and Gene Transfer Methods."
  },

  neetImportantPoints: [
    "1. EFB definition of biotechnology integrates natural science and organisms, cells, parts thereof, and molecular analogues.",
    "2. Stanley Cohen and Herbert Boyer constructed the first recombinant DNA in 1972 using Salmonella typhimurium plasmid.",
    "3. Restriction endonucleases make internal cuts at specific palindromic recognition sequences.",
    "4. Hind II was the FIRST discovered restriction endonuclease (isolated from Haemophilus influenzae Rd).",
    "5. EcoRI recognition sequence is 5'-GAATTC-3' / 3'-CTTAAG-5'; cuts between G and A on both strands to produce sticky ends (5'-AATT-3').",
    "6. Exonucleases remove nucleotides from the ends; Endonucleases make cuts internally within the DNA.",
    "7. DNA Ligase forms covalent phosphodiester bonds between adjacent 3'-OH and 5'-PO4 ends.",
    "8. Plasmids are extrachromosomal, circular, double-stranded, self-replicating bacterial DNA molecules.",
    "9. Origin of replication (ori) is the site where replication starts and it controls the copy number of linked DNA.",
    "10. In pBR322: ampR has PstI and PvuI sites; tetR has BamHI and SalI sites; rop has PvuII site.",
    "11. Insertion of foreign DNA at the BamHI site of pBR322 causes loss of tetracycline resistance (Insertional Inactivation).",
    "12. In chromogenic selection (lacZ / X-gal): Non-recombinant colonies are BLUE, whereas recombinant colonies are WHITE.",
    "13. Agrobacterium tumefaciens Ti plasmid is a natural cloning vector for plants (T-DNA); disarmed Retroviruses are vectors for animals.",
    "14. Bacterial competence is induced by divalent cation (Ca2+) followed by heat shock at 42°C.",
    "15. Microinjection delivers DNA into animal cell nuclei; Biolistics / Gene Gun uses gold or tungsten microprojectiles for plant cells."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing the first discovered restriction enzyme with EcoRI.",
      correctFact: "Hind II was the FIRST discovered restriction endonuclease. EcoRI was discovered later from E. coli RY 13.",
      whyItMattersForNEET: "Frequently tested direct historical question in NEET."
    },
    {
      commonConfusion: "Thinking restriction endonucleases cut single-stranded DNA randomly.",
      correctFact: "Type II restriction endonucleases recognize specific double-stranded palindromic sequences and cleave both strands at specific phosphodiester bonds.",
      whyItMattersForNEET: "Tested in assertion-reason and statement analysis questions."
    },
    {
      commonConfusion: "Assuming recombinant colonies turn blue in blue-white chromogenic screening.",
      correctFact: "Recombinants form WHITE colonies because foreign DNA insertion disrupts the lacZ gene (insertional inactivation of beta-galactosidase). Non-recombinants form BLUE colonies.",
      whyItMattersForNEET: "High-yield trap question in NEET regarding colony color."
    },
    {
      commonConfusion: "Misplacing PvuII in pBR322 as an antibiotic resistance gene.",
      correctFact: "PvuII is located in the 'rop' gene (which codes for proteins involved in plasmid replication). PvuI is located in the ampR gene.",
      whyItMattersForNEET: "Trap in NEET diagram-based questions on pBR322."
    },
    {
      commonConfusion: "Thinking biolistics / gene gun is used for animal cells.",
      correctFact: "Biolistics / Gene Gun is specifically used for plant cells (to penetrate thick cellulose walls). Microinjection is used for animal cells.",
      whyItMattersForNEET: "Method-to-organism matching questions."
    },
    {
      commonConfusion: "Believing that DNA ligase creates hydrogen bonds between nitrogenous bases.",
      correctFact: "Hydrogen bonds form spontaneously between complementary sticky ends; DNA ligase catalyzes the covalent PHOSPHODIESTER bond between 3'-OH and 5'-PO4.",
      whyItMattersForNEET: "Tested in enzyme mechanism questions."
    }
  ],

  quickRevision: [
    "• Biotechnology = Traditional (microbial fermentation) + Modern (rDNA technology, genetic engineering).",
    "• EFB Definition = Integration of natural science + organisms/cells/molecular analogues for products & services.",
    "• Two Principles: 1. Genetic Engineering (DNA alteration), 2. Sterile ambience (aseptic bioprocess engineering).",
    "• First rDNA: Cohen & Boyer (1972) - S. typhimurium plasmid + antibiotic resistance gene in E. coli.",
    "• Restriction Enzymes: Hind II (1st discovered); Exonucleases (remove terminal nucleotides); Endonucleases (internal cuts).",
    "• EcoRI: 5'-GAATTC-3' / 3'-CTTAAG-5', cuts between G and A to produce sticky ends (5'-AATT-3').",
    "• DNA Ligase: Joins 3'-OH and 5'-PO4 by phosphodiester bonds (molecular glue).",
    "• Vector Features: ori (controls copy number), Selectable markers (ampR, tetR), unique cloning sites (MCS).",
    "• pBR322: ampR (PstI, PvuI), tetR (BamHI, SalI), rop (PvuII), EcoRI/ClaI/HindIII outside markers.",
    "• Insertional Inactivation at BamHI: Recombinant is Ampicillin-resistant and Tetracycline-sensitive.",
    "• Blue-White Screening: Recombinants = WHITE colonies; Non-recombinants = BLUE colonies (lacZ/X-gal).",
    "• Plant Vector: Agrobacterium tumefaciens Ti plasmid; Animal Vector: Disarmed Retrovirus.",
    "• Gene Transfer: Bacteria = Ca2+ + Heat shock (42°C); Animal = Microinjection; Plant = Biolistics (Gene Gun with Au/W)."
  ],

  practiceQuestions: [
    {
      id: "pq-re-vectors-1",
      question: "Which of the following statements correctly describes the origin of replication (ori) in a cloning vector?",
      options: [
        "It is the site where translation of the antibiotic resistance gene begins.",
        "It is a specific DNA sequence that initiates replication and controls the copy number of linked foreign DNA.",
        "It is the site where restriction endonucleases make staggered cuts.",
        "It is an enzyme that prevents self-ligation of circular plasmids."
      ],
      correctAnswer: 1,
      explanation: "According to NCERT, the origin of replication ('ori') is a specific sequence from where replication starts. Any piece of DNA linked to this sequence can be replicated within the host cells. This sequence is also responsible for controlling the copy number of the linked DNA.",
      difficulty: "Medium"
    },
    {
      id: "pq-re-vectors-2",
      question: "If a foreign gene is inserted at the BamHI recognition site of plasmid pBR322, the recombinant plasmid will:",
      options: [
        "Confer resistance to both ampicillin and tetracycline.",
        "Lose resistance to ampicillin but retain resistance to tetracycline.",
        "Lose resistance to tetracycline but retain resistance to ampicillin.",
        "Lose resistance to both ampicillin and tetracycline."
      ],
      correctAnswer: 2,
      explanation: "In plasmid pBR322, the BamHI restriction site is located within the tetracycline resistance gene (tetR). Insertion of foreign DNA at the BamHI site causes insertional inactivation of the tetR gene, leading to the loss of tetracycline resistance while leaving the ampicillin resistance gene (ampR) intact.",
      difficulty: "Medium"
    },
    {
      id: "pq-re-vectors-3",
      question: "In blue-white selection for recombinant bacteria, recombinant colonies appear white on X-gal medium because:",
      options: [
        "Active beta-galactosidase is produced and cleaves X-gal into a white precipitate.",
        "Insertional inactivation of the lacZ gene prevents synthesis of functional beta-galactosidase.",
        "The host bacterium produces an antibiotic that inhibits dye formation.",
        "X-gal cannot enter bacterial cells lacking the ampicillin resistance gene."
      ],
      correctAnswer: 1,
      explanation: "When foreign DNA is inserted into the coding sequence of the beta-galactosidase gene (lacZ), the gene undergoes insertional inactivation. The recombinant cells cannot produce active beta-galactosidase and therefore do not hydrolyze the chromogenic substrate X-gal, resulting in white colonies.",
      difficulty: "Medium"
    },
    {
      id: "pq-re-vectors-4",
      question: "Which of the following methods is specifically used to introduce foreign DNA into target plant cells?",
      options: [
        "Microinjection into the nucleus using a glass micropipette",
        "Biolistics / Gene Gun using microprojectiles of gold or tungsten",
        "Direct treatment with lysozyme and chilled ethanol",
        "Introduction of non-disarmed pathogenic strains of Salmonella"
      ],
      correctAnswer: 1,
      explanation: "Plant cells have rigid cellulose walls, making biolistics (gene gun) suitable. In this method, microprojectiles of gold or tungsten coated with DNA are bombarded into cells at high velocity. Microinjection is used for animal cells.",
      difficulty: "Easy"
    }
  ],

  pyqs: [
    {
      id: "pyq-re-vectors-1",
      exam: "NEET UG",
      examName: "NEET UG 2020",
      examYear: "2020",
      verifiedExam: "NEET UG 2020",
      year: 2020,
      question: "Identify the wrong statement with regard to restriction enzymes.",
      options: [
        "Each restriction enzyme functions by inspecting the length of a DNA sequence.",
        "They cut the strand of DNA at specific sites in their palindromic sequences.",
        "They are useful in genetic engineering.",
        "Sticky ends can be joined by using DNA ligases."
      ],
      correctAnswer: 0,
      explanation: "Restriction enzymes function by inspecting the length of a DNA sequence to find their specific recognition sequence, and once found, they bind to the DNA and cut the two strands of the double helix at specific points in their sugar-phosphate backbones (NCERT lines).",
      conceptTested: "Restriction Enzyme Cleavage Mechanism",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-re-vectors-2",
      exam: "NEET UG",
      examName: "NEET UG 2019",
      examYear: "2019",
      verifiedExam: "NEET UG 2019",
      year: 2019,
      question: "The DNA fragments separated on an agarose gel can be visualised after staining with:",
      options: [
        "Acetocarmine",
        "Aniline blue",
        "Ethidium bromide",
        "Bromophenol blue"
      ],
      correctAnswer: 2,
      explanation: "DNA fragments separated by gel electrophoresis cannot be seen in visible light without staining. They are stained with ethidium bromide (EtBr) followed by exposure to UV radiation, appearing as bright orange colored bands (NCERT).",
      conceptTested: "Staining and Visualization of DNA in Gel Electrophoresis",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-re-vectors-3",
      exam: "NEET UG",
      examName: "NEET UG 2021",
      examYear: "2021",
      verifiedExam: "NEET UG 2021",
      year: 2021,
      question: "A specific recognition sequence identified by endonucleases to make cuts at specific positions within the DNA is:",
      options: [
        "Degenerate primer sequence",
        "Okazaki sequences",
        "Palindromic nucleotide sequences",
        "Poly(A) tail sequences"
      ],
      correctAnswer: 2,
      explanation: "Restriction endonucleases always make cuts at specific positions within the DNA by recognizing specific palindromic nucleotide sequences in the double-stranded DNA molecule.",
      conceptTested: "Palindromic Recognition Sequences of Restriction Enzymes",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-re-vectors-4",
      exam: "NEET UG",
      examName: "NEET UG 2022",
      examYear: "2022",
      verifiedExam: "NEET UG 2022",
      year: 2022,
      question: "Which of the following is not a cloning vector?",
      options: [
        "BAC",
        "YAC",
        "pBR322",
        "Probe"
      ],
      correctAnswer: 3,
      explanation: "BAC (Bacterial Artificial Chromosome), YAC (Yeast Artificial Chromosome), and pBR322 are cloning vectors used to carry foreign DNA. A Probe is a small, single-stranded radioactive or fluorescently labelled DNA/RNA fragment used to detect complementary target sequences in hybridization techniques.",
      conceptTested: "Cloning Vectors vs Molecular Probes",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-re-vectors-5",
      exam: "NEET UG",
      examName: "NEET UG 2023",
      examYear: "2023",
      verifiedExam: "NEET UG 2023",
      year: 2023,
      question: "In pBR322, the gene rop codes for the:",
      options: [
        "Antibiotic resistance proteins",
        "Proteins involved in the replication of the plasmid",
        "Restriction enzymes",
        "DNA ligase"
      ],
      correctAnswer: 1,
      explanation: "In plasmid pBR322, the 'rop' (repressor of primer) gene codes for the proteins involved in the replication of the plasmid (NCERT exact text). It contains the PvuII restriction site.",
      conceptTested: "pBR322 Vector Architecture and rop Gene Function",
      isVerifiedPYQ: true
    }
  ]
};
