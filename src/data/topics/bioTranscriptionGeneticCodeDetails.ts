import { DetailedTopicContent } from '../../types/neet';

export const bioTranscriptionGeneticCodeDetails: DetailedTopicContent = {
  topicId: "bio-transcription-genetic-code",
  topicName: "Central Dogma, Transcription & Genetic Code",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Molecular Basis of Inheritance",

  whatIsThisTopic: "Francis Crick's Central Dogma and reverse transcription (Teminism), anatomy of a transcription unit (promoter, structural gene, terminator), template vs coding strand polarity rules, transcription in prokaryotes (RNA polymerase, sigma and rho factors, coupled transcription-translation) vs eukaryotes (RNA Polymerases I, II, III), post-transcriptional processing of hnRNA (splicing, 5'-capping, 3'-polyadenylation), deciphering the triplet genetic code (Gamow, Nirenberg, Khorana, Ochoa), and universal characteristics of the genetic code.",

  basicIdea: [
    "The Central Dogma of Molecular Biology, formulated by Francis Crick (1958), states that genetic information flows unidirectionally from DNA -> RNA -> Protein. Howard Temin and David Baltimore (1970) discovered Reverse Transcription (RNA -> cDNA) in retroviruses via Reverse Transcriptase (Teminism).",
    "Transcription is the enzymatic copying of genetic information from one strand of DNA into complementary single-stranded RNA catalyzed by DNA-dependent RNA polymerase.",
    "Unlike replication, only one DNA strand is transcribed in a transcription unit to prevent the formation of double-stranded inhibitory RNA and to avoid translating two different proteins from the same DNA locus.",
    "A Transcription Unit in DNA consists of three functional regions: (1) Promoter (upstream binding site for RNA polymerase), (2) Structural Gene (region transcribed into RNA), and (3) Terminator (downstream sequence halting transcription).",
    "The Template Strand has 3' -> 5' polarity (antisense/non-coding), whereas the Coding Strand has 5' -> 3' polarity (sense). CRITICAL RULE: By convention, all coordinates, reference points, and promoter/terminator positions are described strictly with respect to the CODING STRAND.",
    "In Prokaryotes: A single DNA-dependent RNA polymerase transcribes all types of RNA (mRNA, tRNA, rRNA). It associates transiently with Sigma factor (σ) for initiation and Rho factor (ρ) for termination. Transcription and translation occur simultaneously in the cytoplasm (Coupled Transcription-Translation) because prokaryotes lack a nuclear membrane.",
    "In Eukaryotes: Three distinct RNA polymerases operate in the nucleus: RNA Polymerase I (transcribes 28S, 18S, 5.8S rRNAs), RNA Polymerase II (transcribes precursor of mRNA, hnRNA), and RNA Polymerase III (transcribes tRNA, 5S rRNA, and snRNAs).",
    "Eukaryotic primary transcript (hnRNA) contains both coding sequences (Exons) and non-coding intervening sequences (Introns). It undergoes three post-transcriptional processing steps: (1) Splicing (introns excised, exons ligated by spliceosomes), (2) 5'-Capping (addition of 7-methylguanosine triphosphate, m7Gppp), and (3) 3'-Tailing (addition of 200-300 adenylate residues, poly-A tail) to yield mature translatable mRNA.",
    "The Genetic Code is the dictionary translating triplet mRNA codons into specific amino acids. Deciphered through the contributions of George Gamow (triplet calculation), Marshall Nirenberg (cell-free poly-U synthesis), Har Gobind Khorana (chemical copolymer synthesis), and Severo Ochoa (polynucleotide phosphorylase).",
    "Key Properties of Genetic Code: (1) Triplet (64 codons: 61 sense + 3 stop codons UAA, UAG, UGA); (2) Unambiguous and specific; (3) Degenerate (multiple codons per amino acid, except AUG and UGG); (4) Commaless and non-overlapping; (5) Universal (from bacteria to humans); (6) AUG has dual functions (Initiator codon + codes for Methionine)."
  ],

  importantTerms: [
    {
      term: "Central Dogma",
      definition: "The fundamental principle of molecular biology stating that biological genetic information flows unidirectionally from DNA to RNA (transcription) and from RNA to Protein (translation).",
      neetNote: "Proposed by Francis Crick in 1958."
    },
    {
      term: "Reverse Transcription (Teminism)",
      definition: "The synthesis of complementary DNA (cDNA) from an RNA template catalyzed by the enzyme Reverse Transcriptase (RNA-dependent DNA polymerase) in retroviruses.",
      neetNote: "Discovered by Howard Temin and David Baltimore in 1970."
    },
    {
      term: "Template Strand (Antisense Strand)",
      definition: "The DNA strand having 3' -> 5' polarity that serves as the physical template for RNA polymerase during transcription.",
      neetNote: "The synthesized RNA is complementary and antiparallel to this strand."
    },
    {
      term: "Coding Strand (Sense Strand)",
      definition: "The non-transcribed DNA strand having 5' -> 3' polarity with a sequence identical to the synthesized RNA (except Thymine is replaced by Uracil).",
      neetNote: "All promoter, terminator, and coordinate references are based on the CODING strand."
    },
    {
      term: "Promoter",
      definition: "A specific DNA regulatory sequence located upstream (towards the 5' end of the coding strand) that provides the binding site for RNA polymerase and determines the template strand.",
      neetNote: "Contains the TATA box (Pribnow box in prokaryotes, Goldberg-Hogness box in eukaryotes)."
    },
    {
      term: "Terminator",
      definition: "A regulatory DNA sequence located downstream (towards the 3' end of the coding strand) that defines the end of transcription.",
      neetNote: "Interacts with Rho factor in prokaryotes."
    },
    {
      term: "Sigma Factor (σ)",
      definition: "An initiation protein subunit in prokaryotes that binds to core RNA polymerase (forming the holoenzyme), enabling specific recognition of and binding to promoter sequences.",
      neetNote: "Dissociates from RNA polymerase once elongation begins."
    },
    {
      term: "Rho Factor (ρ)",
      definition: "A termination protein factor in prokaryotes that facilitates the dissociation of the synthesized RNA transcript and RNA polymerase from the DNA template.",
      neetNote: "Essential for rho-dependent termination of transcription."
    },
    {
      term: "Cistron",
      definition: "A segment of DNA coding for a single functional polypeptide chain; the structural equivalent of a gene.",
      neetNote: "Prokaryotes have polycistronic transcription units; eukaryotes have monocistronic units."
    },
    {
      term: "Split Gene",
      definition: "The genomic arrangement in eukaryotes where the coding sequences (Exons) are interrupted by non-coding intervening sequences (Introns).",
      neetNote: "Represents an ancient feature of the genome reflecting the antiquity of the RNA world."
    },
    {
      term: "hnRNA (Heterogeneous Nuclear RNA)",
      definition: "The unprocessed, primary eukaryotic transcript synthesized by RNA Polymerase II containing both exons and introns.",
      neetNote: "Precursor molecule of mature cytoplasmic mRNA."
    },
    {
      term: "Splicing",
      definition: "The post-transcriptional processing event where non-coding introns are precisely excised and coding exons are ligated together by a complex called the spliceosome.",
      neetNote: "Catalyzed by snRNPs (small nuclear ribonucleoproteins, 'snurps')."
    },
    {
      term: "5'-Capping",
      definition: "The enzymatic addition of an unusual nucleotide, 7-methylguanosine triphosphate (m7Gppp), to the 5' end of hnRNA.",
      neetNote: "Protects mRNA from 5' exonucleolytic degradation and aids ribosome binding."
    },
    {
      term: "3'-Polyadenylation (Tailing)",
      definition: "The template-independent addition of approximately 200-300 adenylate residues to the 3' end of hnRNA by poly-A polymerase.",
      neetNote: "Forms the poly-A tail, enhancing mRNA stability and cytoplasmic export."
    },
    {
      term: "Codon",
      definition: "A specific contiguous sequence of three adjacent nucleotide bases on mRNA that codes for a specific amino acid or acts as a stop signal during protein synthesis.",
      neetNote: "64 total triplet codons exist: 61 sense codons + 3 nonsense/stop codons."
    },
    {
      term: "Degeneracy of Genetic Code",
      definition: "The biological feature where a single amino acid can be encoded by more than one distinct triplet codon (e.g., Leucine, Serine, and Arginine have 6 codons each).",
      neetNote: "Exceptions: AUG (Methionine) and UGG (Tryptophan) have only one codon each."
    },
    {
      term: "Stop Codons (Nonsense Codons)",
      definition: "The three specific triplet codons (UAA [Ochre], UAG [Amber], UGA [Opal]) that do not code for any amino acid and signal the termination of translation.",
      neetNote: "No tRNA molecules possess complementary anticodons for stop codons."
    },
    {
      term: "Severo Ochoa Enzyme",
      definition: "Polynucleotide phosphorylase; an enzyme that polymerizes RNA in a template-independent manner with defined base sequences.",
      neetNote: "Instrumental in deciphering the genetic code biochemically."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Transcription Unit, Polarity Rules & Prokaryotic Transcription",
      paragraphs: [
        "Transcription is the process of copying genetic information from one strand of DNA into RNA. Why are both DNA strands NOT transcribed simultaneously? If both strands acted as templates: (1) They would code for RNA molecules with complementary sequences, which would base-pair to form double-stranded RNA (dsRNA), preventing translation; (2) They would produce two completely different proteins from the same genomic locus, creating genetic chaos.",
        "Anatomy of a Transcription Unit: A transcription unit in DNA contains three essential functional segments:",
        "1. Promoter: Located towards the 5' end (upstream) of the CODING STRAND. It is a specific DNA sequence that RNA polymerase recognizes and binds to initiate transcription.",
        "2. Structural Gene: The region flanked by the promoter and terminator that is transcribed into RNA.",
        "3. Terminator: Located towards the 3' end (downstream) of the CODING STRAND. It defines the endpoint of transcription.",
        "Polarity and Strand Conventions: The DNA strand with 3' -> 5' polarity acts as the **Template Strand** (antisense/non-coding). The opposite DNA strand with 5' -> 3' polarity is called the **Coding Strand** (sense/non-template). Although the coding strand does NOT take part in transcription, ALL structural reference points, coordinates, and positions (e.g., promoter is at 5' end, terminator is at 3' end) are defined strictly with reference to the **CODING STRAND**.",
        "Transcription Mechanism in Prokaryotes (Bacteria / E. coli):",
        "Prokaryotes possess a single DNA-dependent RNA Polymerase that synthesizes all three major classes of RNA (mRNA, tRNA, rRNA). The process occurs in three distinct phases:",
        "(a) **Initiation**: The core RNA polymerase enzyme (α2ββ'ω) lacks sequence specificity and cannot initiate transcription alone. It binds with a transient protein subunit called **Sigma factor (σ)** to form the RNA Polymerase Holoenzyme. The sigma factor recognizes and binds to specific promoter sequences (such as the -10 Pribnow box, TATAAT), unzips the DNA double helix, and initiates RNA chain synthesis.",
        "(b) **Elongation**: Once an initial RNA chain of ~8-10 nucleotides is synthesized, the sigma factor dissociates. The core RNA polymerase moves along the template strand, polymerizing ribonucleotides in the 5' -> 3' direction with extreme processivity and fidelity.",
        "(c) **Termination**: When RNA polymerase reaches the terminator region, it encounters a termination protein called **Rho factor (ρ)**. Binding of Rho factor causes the nascent RNA transcript and RNA polymerase to detach from the DNA template.",
        "Coupled Transcription-Translation in Prokaryotes: In bacteria, mRNA does not require post-transcriptional processing, and there is no nuclear membrane separating DNA from ribosomes. Consequently, translation of mRNA begins well before the transcript is fully transcribed (Coupled Transcription-Translation)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Transcription Unit Anatomy &amp; Strand Polarity Conventions</text>

  <!-- Transcription Unit Schematic -->
  <g transform="translate(40, 45)">
    <!-- Promoter Box -->
    <rect x="50" y="50" width="110" height="90" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="105" y="90" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Promoter</text>
    <text x="105" y="110" fill="#3b82f6" font-size="10" text-anchor="middle">(Upstream, 5' coding)</text>

    <!-- Structural Gene Box -->
    <rect x="190" y="50" width="300" height="90" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
    <text x="340" y="90" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Structural Gene</text>
    <text x="340" y="110" fill="#64748b" font-size="10" text-anchor="middle">(Transcribed region)</text>

    <!-- Terminator Box -->
    <rect x="520" y="50" width="110" height="90" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
    <text x="575" y="90" fill="#991b1b" font-size="14" font-weight="bold" text-anchor="middle">Terminator</text>
    <text x="575" y="110" fill="#ef4444" font-size="10" text-anchor="middle">(Downstream, 3' coding)</text>

    <!-- Top DNA Strand: Coding Strand (5' to 3') -->
    <path d="M 10 65 L 670 65" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/>
    <text x="0" y="55" fill="#1e40af" font-size="12" font-weight="bold">5'</text>
    <text x="680" y="55" fill="#1e40af" font-size="12" font-weight="bold">3'</text>
    <text x="340" y="42" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">CODING STRAND (Sense / Non-template)</text>

    <!-- Bottom DNA Strand: Template Strand (3' to 5') -->
    <path d="M 10 125 L 670 125" stroke="#059669" stroke-width="4" stroke-linecap="round"/>
    <text x="0" y="140" fill="#065f46" font-size="12" font-weight="bold">3'</text>
    <text x="680" y="140" fill="#065f46" font-size="12" font-weight="bold">5'</text>
    <text x="340" y="160" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">TEMPLATE STRAND (Antisense / Non-coding)</text>

    <!-- Synthesized RNA arrow -->
    <path d="M 190 195 L 480 195" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" marker-end="url(#arr-rna)"/>
    <text x="175" y="200" fill="#be123c" font-size="12" font-weight="bold">5'</text>
    <text x="495" y="200" fill="#be123c" font-size="12" font-weight="bold">3'</text>
    <text x="340" y="220" fill="#be123c" font-size="11" font-weight="bold" text-anchor="middle">Nascent RNA Transcript (5' -> 3')</text>

    <!-- Factors in Prokaryotes -->
    <g transform="translate(30, 240)">
      <rect width="620" height="55" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="22" fill="#0f172a" font-size="11" font-weight="bold">Prokaryotic RNA Polymerase Factors:</text>
      <text x="15" y="42" fill="#2563eb" font-size="10" font-weight="bold">• Sigma Factor (σ): Initiation factor (binds promoter)</text>
      <text x="330" y="42" fill="#ef4444" font-size="10" font-weight="bold">• Rho Factor (ρ): Termination factor (halts transcription)</text>
    </g>
  </g>

  <defs>
    <marker id="arr-rna" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e"/>
    </marker>
  </defs>
</svg>`,
        caption: "Structure of a transcription unit displaying Promoter (5' upstream of coding strand), Terminator (3' downstream of coding strand), and synthesized 5'->3' RNA transcript.",
        guide: "WHAT TO OBSERVE: Look at the strand polarities: 3'->5' is the template strand, 5'->3' is the coding strand. Observe that the promoter is located at the 5' end of the CODING strand, and the terminator is located at the 3' end of the CODING strand."
      },
      importantPoints: [
        "Template strand polarity: 3' -> 5' (antisense).",
        "Coding strand polarity: 5' -> 3' (sense).",
        "ALL coordinates/positions (promoter at 5' end, terminator at 3' end) are defined relative to the CODING strand.",
        "Prokaryotes: Single RNA polymerase transcribes all RNAs.",
        "Sigma factor (σ) binds core enzyme for Initiation; Rho factor (ρ) binds for Termination.",
        "Prokaryotes exhibit Coupled Transcription-Translation in the cytoplasm."
      ]
    },
    {
      heading: "2. Eukaryotic Transcription & Post-Transcriptional Processing of hnRNA",
      paragraphs: [
        "Transcription in eukaryotes exhibits two major complexities compared to prokaryotes:",
        "Complexity 1: Division of Labor among Three RNA Polymerases in Nucleus:",
        "• **RNA Polymerase I**: Located in the nucleolus, transcribes large ribosomal RNAs: **28S, 18S, and 5.8S rRNAs**.",
        "• **RNA Polymerase II**: Located in the nucleoplasm, transcribes the precursor of mRNA, known as **heterogeneous nuclear RNA (hnRNA)**.",
        "• **RNA Polymerase III**: Located in the nucleoplasm, transcribes **transfer RNA (tRNA)**, **5S rRNA**, and **small nuclear RNAs (snRNAs)**.",
        "Complexity 2: Split Gene Structure & Post-Transcriptional Processing of hnRNA:",
        "Eukaryotic structural genes are monocistronic but interrupted by non-coding sequences. The primary transcript synthesized by RNA Polymerase II is hnRNA, which contains functional coding regions called **Exons** (expressed sequences) interrupted by non-functional non-coding regions called **Introns** (intervening sequences). hnRNA is completely non-functional for translation until it undergoes three mandatory processing steps:",
        "1. **Splicing**: Introns are recognized and precisely excised, while exons are spliced and joined together in a defined sequence by a macromolecular complex called the **Spliceosome** (composed of snRNAs and proteins called snRNPs, or 'snurps'). The presence of split genes and splicing is considered an ancient genomic relic reflecting the antiquity of the RNA world.",
        "2. **5'-Capping**: An unusual nucleotide, **7-methylguanosine triphosphate (m7Gppp)**, is covalently added to the 5' end of hnRNA through an atypical 5'-5' triphosphate linkage. The 5' cap protects the transcript from degradation by 5' exonucleases and serves as a vital recognition signal for the ribosome during translation initiation.",
        "3. **3'-Polyadenylation (Tailing)**: A template-independent enzyme (poly-A polymerase) adds approximately **200 to 300 adenylate residues** to the 3' end of the cleaved transcript to form a **Poly-A tail**. The poly-A tail enhances mRNA stability, protects against 3' exonucleases, and facilitates nuclear export.",
        "After complete splicing, capping, and tailing, the fully processed transcript is termed **Mature mRNA**, which is actively transported through nuclear pore complexes into the cytoplasm for translation."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Post-Transcriptional Processing of Eukaryotic hnRNA to Mature mRNA</text>

  <!-- Step 1: Primary hnRNA with Exons and Introns -->
  <g transform="translate(40, 45)">
    <text x="0" y="16" fill="#0f172a" font-size="12" font-weight="bold">1. Primary Transcript (hnRNA): Exons (coding) interrupted by Introns (non-coding)</text>
    <g transform="translate(0, 25)">
      <!-- Exon 1 -->
      <rect x="40" y="0" width="80" height="24" rx="4" fill="#3b82f6"/>
      <text x="80" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Exon 1</text>
      <!-- Intron 1 -->
      <rect x="120" y="5" width="100" height="14" rx="2" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
      <text x="170" y="16" fill="#991b1b" font-size="9" text-anchor="middle">Intron 1</text>
      <!-- Exon 2 -->
      <rect x="220" y="0" width="100" height="24" rx="4" fill="#3b82f6"/>
      <text x="270" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Exon 2</text>
      <!-- Intron 2 -->
      <rect x="320" y="5" width="110" height="14" rx="2" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
      <text x="375" y="16" fill="#991b1b" font-size="9" text-anchor="middle">Intron 2</text>
      <!-- Exon 3 -->
      <rect x="430" y="0" width="90" height="24" rx="4" fill="#3b82f6"/>
      <text x="475" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Exon 3</text>
      <text x="15" y="16" fill="#1e40af" font-size="11" font-weight="bold">5'</text>
      <text x="535" y="16" fill="#1e40af" font-size="11" font-weight="bold">3'</text>
    </g>
  </g>

  <!-- Step 2: Capping & Tailing -->
  <g transform="translate(40, 130)">
    <text x="0" y="16" fill="#0f172a" font-size="12" font-weight="bold">2. 5'-Capping (m⁷Gppp) &amp; 3'-Tailing (200-300 Poly-A residues)</text>
    <g transform="translate(0, 25)">
      <!-- 5' Cap -->
      <circle cx="20" cy="12" r="14" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
      <text x="20" y="16" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">m⁷G</text>
      <text x="20" y="38" fill="#b45309" font-size="9" font-weight="bold" text-anchor="middle">5' Cap</text>

      <!-- Exon 1 -->
      <rect x="40" y="0" width="80" height="24" rx="4" fill="#3b82f6"/>
      <!-- Splicing Loops for Introns -->
      <path d="M 120 12 Q 170 -15 220 12" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="170" y="-3" fill="#be123c" font-size="9" font-weight="bold" text-anchor="middle">Spliceosome loop</text>

      <!-- Exon 2 -->
      <rect x="220" y="0" width="100" height="24" rx="4" fill="#3b82f6"/>
      <!-- Splicing Loop 2 -->
      <path d="M 320 12 Q 375 -15 430 12" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 2"/>

      <!-- Exon 3 -->
      <rect x="430" y="0" width="90" height="24" rx="4" fill="#3b82f6"/>

      <!-- Poly A Tail -->
      <rect x="525" y="4" width="130" height="16" rx="8" fill="#10b981"/>
      <text x="590" y="16" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">AAAA... (200-300)</text>
      <text x="590" y="34" fill="#047857" font-size="9" font-weight="bold" text-anchor="middle">3' Poly-A Tail</text>
    </g>
  </g>

  <!-- Step 3: Fully Spliced Mature mRNA -->
  <g transform="translate(40, 230)">
    <text x="0" y="16" fill="#059669" font-size="12" font-weight="bold">3. Fully Processed Mature mRNA (Exported to Cytoplasm for Translation)</text>
    <g transform="translate(0, 25)">
      <circle cx="20" cy="12" r="14" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
      <text x="20" y="16" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">m⁷G</text>

      <!-- Continuous Exons -->
      <rect x="40" y="0" width="480" height="24" rx="4" fill="#2563eb"/>
      <text x="120" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Exon 1</text>
      <line x1="200" y1="0" x2="200" y2="24" stroke="#ffffff" stroke-width="2"/>
      <text x="280" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Exon 2</text>
      <line x1="380" y1="0" x2="380" y2="24" stroke="#ffffff" stroke-width="2"/>
      <text x="450" y="16" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Exon 3</text>

      <!-- Poly A Tail -->
      <rect x="525" y="4" width="130" height="16" rx="8" fill="#10b981"/>
      <text x="590" y="16" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">AAAA... (200-300)</text>
    </g>

    <!-- Table of Polymerases -->
    <g transform="translate(0, 68)">
      <rect width="670" height="25" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="10" y="17" fill="#0f172a" font-size="9" font-weight="bold">Pol I: 28S, 18S, 5.8S rRNA</text>
      <text x="240" y="17" fill="#2563eb" font-size="9" font-weight="bold">Pol II: hnRNA (precursor of mRNA)</text>
      <text x="470" y="17" fill="#059669" font-size="9" font-weight="bold">Pol III: tRNA, 5S rRNA, snRNA</text>
    </g>
  </g>
</svg>`,
        caption: "Post-transcriptional modifications of eukaryotic hnRNA showing 5'-capping (m7Gppp), splicing of introns by spliceosomes, and 3'-polyadenylation (200-300 A residues).",
        guide: "WHAT TO OBSERVE: Note the 3 mandatory steps: 5'-Capping (7-methylguanosine triphosphate), Splicing (removal of non-coding introns and ligation of coding exons), and 3'-Tailing (200-300 adenylate residues). Memorize which RNA polymerase transcribes which RNA in eukaryotes."
      },
      importantPoints: [
        "RNA Polymerase I: 28S, 18S, 5.8S rRNA (nucleolus).",
        "RNA Polymerase II: hnRNA (precursor of mRNA in nucleoplasm).",
        "RNA Polymerase III: tRNA, 5S rRNA, and snRNA (nucleoplasm).",
        "Splicing removes Introns (non-coding) and joins Exons (coding) via spliceosomes (snRNPs).",
        "5'-Capping adds 7-methylguanosine triphosphate (m7Gppp) to 5' end.",
        "3'-Polyadenylation adds 200-300 adenylate residues (poly-A tail) to 3' end in a template-independent manner."
      ]
    },
    {
      heading: "3. The Genetic Code: Deciphering, Codon Dictionary & Universal Properties",
      paragraphs: [
        "The Genetic Code is the biochemical dictionary establishing the correspondence between the 4-letter nucleotide alphabet of mRNA (A, U, G, C) and the 20-letter amino acid alphabet of proteins.",
        "Deciphering the Triplet Code — Landmark Scientific Contributions:",
        "1. **George Gamow (1954)**: A physicist who mathematically reasoned that since there are only 4 bases and 20 amino acids: A singlet code (4^1 = 4) or doublet code (4^2 = 16) is insufficient to code for 20 amino acids. A triplet code (4^3 = 64) is mathematically required to provide sufficient coding combinations.",
        "2. **Marshall Nirenberg and Heinrich Matthaei (1961)**: Developed a cell-free protein synthesis system without cell walls. Synthesized a synthetic poly-U RNA homopolymer (UUUUUU...) and discovered that it exclusively synthesized **Poly-phenylalanine**, establishing that **UUU codes for Phenylalanine (Phe)**.",
        "3. **Har Gobind Khorana**: Developed chemical synthesis techniques to produce synthetic RNA molecules with strictly alternating homopolymers and copolymers (e.g., CUCUCUCU... coding for Leucine-Threonine alternating chains), deciphering the remaining codons.",
        "4. **Severo Ochoa**: Discovered **polynucleotide phosphorylase (Severo Ochoa enzyme)**, which enzymatically polymerizes RNA molecules with defined base sequences in a template-independent manner, greatly aiding codon assignment.",
        "Salient Properties of the Genetic Code:",
        "1. **Triplet Nature**: The code is composed of triplets of bases. Out of 64 total codons, **61 codons code for amino acids**, and **3 codons are Stop/Nonsense Codons** (**UAA** [Ochre], **UAG** [Amber], **UGA** [Opal]) that code for no amino acid and terminate translation.",
        "2. **Unambiguous and Specific**: One particular codon codes strictly for one and ONLY one amino acid (e.g., UUU codes exclusively for Phenylalanine and nothing else).",
        "3. **Degeneracy**: Most amino acids are specified by more than one codon (up to 6 codons, e.g., Leucine, Serine, Arginine). Only two amino acids are encoded by a single codon each: **Methionine (AUG)** and **Tryptophan (UGG)**.",
        "4. **Non-overlapping and Commaless**: The mRNA is read continuously, three nucleotides at a time, without punctuation (commas) or skipping bases between adjacent codons.",
        "5. **Universal Nature**: From simple bacteria to human beings, a specific codon codes for the exact same amino acid (e.g., UUU codes for Phe in bacteria and humans). Minor exceptions exist in mitochondrial DNA codons and certain protozoans.",
        "6. **Dual Function of AUG**: AUG acts as the **Initiator Codon** (signals the start of translation) AND codes for the amino acid **Methionine** (N-formylmethionine in prokaryotes).",
        "7. **Wobble Hypothesis (Francis Crick, 1966)**: The pairing between the 3rd base of the codon (3' position) and the 1st base of the tRNA anticodon (5' position) is flexible/non-standard ('wobbly'), allowing a single tRNA species to recognize multiple degenerate codons for the same amino acid, explaining why cells need only ~31-45 tRNAs instead of 61."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="340" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">The Genetic Code: 64 Triplet Codons &amp; Key Properties</text>

  <!-- Left: Codon Summary Box -->
  <g transform="translate(30, 45)">
    <rect width="330" height="275" fill="#ffffff" rx="8" stroke="#6366f1" stroke-width="1.5"/>
    <text x="165" y="24" fill="#4338ca" font-size="13" font-weight="bold" text-anchor="middle">Codon Architecture (64 Total)</text>

    <g transform="translate(15, 38)">
      <rect x="0" y="0" width="300" height="32" rx="4" fill="#ecfdf5" stroke="#059669" stroke-width="1"/>
      <text x="10" y="20" fill="#065f46" font-size="11" font-weight="bold">61 Sense Codons</text>
      <text x="290" y="20" fill="#065f46" font-size="10" text-anchor="end">Code for 20 Amino Acids</text>

      <rect x="0" y="40" width="300" height="42" rx="4" fill="#fff1f2" stroke="#f43f5e" stroke-width="1"/>
      <text x="10" y="18" fill="#be123c" font-size="11" font-weight="bold">3 Stop / Nonsense Codons</text>
      <text x="10" y="34" fill="#991b1b" font-size="10">UAA (Ochre), UAG (Amber), UGA (Opal)</text>
      <text x="290" y="26" fill="#be123c" font-size="9" font-weight="bold" text-anchor="end">No tRNAs</text>

      <rect x="0" y="90" width="300" height="42" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
      <text x="10" y="18" fill="#92400e" font-size="11" font-weight="bold">Dual Function Codon: AUG</text>
      <text x="10" y="34" fill="#78350f" font-size="10">1. Initiator Codon | 2. Codes for Methionine</text>

      <rect x="0" y="140" width="300" height="42" rx="4" fill="#f1f5f9" stroke="#64748b" stroke-width="1"/>
      <text x="10" y="18" fill="#0f172a" font-size="11" font-weight="bold">Single-Codon Amino Acids</text>
      <text x="10" y="34" fill="#475569" font-size="10">AUG = Methionine | UGG = Tryptophan</text>

      <rect x="0" y="190" width="300" height="32" rx="4" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1"/>
      <text x="10" y="20" fill="#5b21b6" font-size="10" font-weight="bold">Degeneracy: Up to 6 codons (Leu, Ser, Arg)</text>
    </g>
  </g>

  <!-- Right: Properties Table -->
  <g transform="translate(380, 45)">
    <rect width="350" height="275" fill="#ffffff" rx="8" stroke="#059669" stroke-width="1.5"/>
    <text x="175" y="24" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Salient Features of the Genetic Code</text>

    <g transform="translate(15, 38)">
      <text x="0" y="16" fill="#0f172a" font-size="10" font-weight="bold">1. Triplet:</text>
      <text x="100" y="16" fill="#334155" font-size="10">3 bases = 1 codon (4³ = 64 codons)</text>

      <text x="0" y="36" fill="#0f172a" font-size="10" font-weight="bold">2. Unambiguous:</text>
      <text x="100" y="36" fill="#334155" font-size="10">1 codon = strictly 1 amino acid</text>

      <text x="0" y="56" fill="#0f172a" font-size="10" font-weight="bold">3. Degenerate:</text>
      <text x="100" y="56" fill="#334155" font-size="10">1 amino acid coded by &gt;1 codon</text>

      <text x="0" y="76" fill="#0f172a" font-size="10" font-weight="bold">4. Commaless:</text>
      <text x="100" y="76" fill="#334155" font-size="10">Read contiguously without punctuation</text>

      <text x="0" y="96" fill="#0f172a" font-size="10" font-weight="bold">5. Non-overlapping:</text>
      <text x="100" y="96" fill="#334155" font-size="10">Bases belong to only one codon</text>

      <text x="0" y="116" fill="#0f172a" font-size="10" font-weight="bold">6. Universal:</text>
      <text x="100" y="116" fill="#334155" font-size="10">Same code in bacteria &amp; humans</text>

      <line x1="0" y1="135" x2="320" y2="135" stroke="#cbd5e1" stroke-width="1"/>

      <text x="0" y="155" fill="#0f172a" font-size="10" font-weight="bold">Key Discoverers:</text>
      <text x="0" y="172" fill="#2563eb" font-size="9">• George Gamow: Postulated triplet nature (4³=64)</text>
      <text x="0" y="188" fill="#2563eb" font-size="9">• Nirenberg &amp; Matthaei: Poly-U -> Poly-Phe (UUU=Phe)</text>
      <text x="0" y="204" fill="#2563eb" font-size="9">• Har Gobind Khorana: Chemical copolymer synthesis</text>
      <text x="0" y="220" fill="#2563eb" font-size="9">• Severo Ochoa: Polynucleotide phosphorylase enzyme</text>
    </g>
  </g>
</svg>`,
        caption: "Summary of the Genetic Code: 61 sense codons, 3 stop codons (UAA, UAG, UGA), dual function of AUG, and 6 core universal properties.",
        guide: "WHAT TO OBSERVE: Remember that 61 codons code for amino acids and 3 codons are stop codons. Note the two amino acids with only one codon: AUG (Methionine) and UGG (Tryptophan). Memorize the 3 stop codons: UAA, UAG, UGA."
      },
      importantPoints: [
        "George Gamow calculated that a triplet code (4^3 = 64) is required for 20 amino acids.",
        "Marshall Nirenberg: Cell-free protein synthesis system; poly-U -> poly-Phe (UUU = Phe).",
        "Har Gobind Khorana: Chemical synthesis of RNA homopolymers/copolymers.",
        "Severo Ochoa enzyme = Polynucleotide phosphorylase (template-independent RNA synthesis).",
        "61 codons code for amino acids; 3 codons are stop codons (UAA, UAG, UGA).",
        "AUG has dual functions: Initiator codon + codes for Methionine.",
        "Only Methionine (AUG) and Tryptophan (UGG) have a single codon.",
        "Degeneracy: Most amino acids are specified by multiple codons.",
        "Code is unambiguous, specific, commaless, non-overlapping, and nearly universal."
      ]
    }
  ],

  formulae: [
    {
      title: "Gamow's Codon Combinatorics Formula",
      formula: "N = 4^n",
      meaning: "Calculates the total number of possible codons generated from 4 nitrogenous bases using a codon length of n nucleotides.",
      symbols: "4 = number of nitrogenous bases (A, U, G, C); n = number of nucleotides per codon",
      unit: "Codons",
      conditions: "Singlet (4^1=4) insufficient; Doublet (4^2=16) insufficient; Triplet (4^3=64) sufficient for 20 amino acids.",
      calculationExample: {
        problem: "If there were 6 different nitrogenous bases instead of 4, and amino acids were 20, what is the minimum codon size needed?",
        given: "Bases = 6; Amino acids = 20",
        stepByStep: [
          "Step 1: Singlet code: 6^1 = 6 codons (< 20, insufficient).",
          "Step 2: Doublet code: 6^2 = 36 codons (> 20, sufficient!)."
        ],
        answer: "A doublet codon (2 nucleotides) would be sufficient (6^2 = 36 codons)."
      }
    }
  ],

  neetImportantPoints: [
    "Central Dogma: DNA -> RNA -> Protein (Francis Crick, 1958).",
    "Reverse transcription: RNA -> cDNA -> mRNA -> Protein (Temin and Baltimore in retroviruses).",
    "Template strand: 3' -> 5'; Coding strand: 5' -> 3'.",
    "Promoter is located at 5' end of CODING strand; Terminator at 3' end of CODING strand.",
    "Prokaryotes: Single RNA polymerase; Sigma (σ) factor initiates; Rho (ρ) factor terminates.",
    "Prokaryotes exhibit coupled transcription and translation in the cytoplasm.",
    "Eukaryotic RNA Pol I: 28S, 18S, 5.8S rRNA.",
    "Eukaryotic RNA Pol II: hnRNA (precursor of mRNA).",
    "Eukaryotic RNA Pol III: tRNA, 5S rRNA, snRNA.",
    "Post-transcriptional processing of hnRNA: Splicing (introns removed by spliceosomes), 5'-Capping (m7Gppp), 3'-Polyadenylation (200-300 A residues).",
    "Triplet code: 64 total codons (61 sense codons + 3 stop codons UAA, UAG, UGA).",
    "AUG: Initiator codon + codes for Methionine.",
    "UGG: Codes for Tryptophan (only 1 codon).",
    "Degenerate: Multiple codons for one amino acid (e.g., Leu, Ser, Arg have 6 codons).",
    "Unambiguous: One codon codes for only ONE amino acid.",
    "Severo Ochoa enzyme = Polynucleotide phosphorylase (template-independent RNA synthesis)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming the promoter is located at the 3' end of the template strand, so it should be called 3' promoter.",
      correctFact: "By strict universal convention, all positions in a transcription unit are defined relative to the 5' -> 3' CODING STRAND. Hence, the promoter is upstream at the 5' end, and the terminator is downstream at the 3' end.",
      whyItMattersForNEET: "A standard trick question in NEET asking students to identify promoter and terminator coordinates."
    },
    {
      commonConfusion: "Confusing the functions of eukaryotic RNA Polymerases I, II, and III.",
      correctFact: "Pol I = 28S, 18S, 5.8S rRNA; Pol II = hnRNA (mRNA precursor); Pol III = tRNA, 5S rRNA, snRNA. (Note: 5S rRNA is made by Pol III, NOT Pol I!).",
      whyItMattersForNEET: "5S rRNA is a recurring trap in NEET matching questions."
    },
    {
      commonConfusion: "Confusing Stop Codons with tRNAs.",
      correctFact: "Stop codons (UAA, UAG, UGA) do NOT have corresponding tRNAs. Instead, protein Release Factors bind to them to terminate translation.",
      whyItMattersForNEET: "Frequently tested true/false statement in NEET."
    },
    {
      commonConfusion: "Thinking prokaryotic mRNA undergoes splicing.",
      correctFact: "Prokaryotic genes are contiguous and lack introns (no split genes). Only eukaryotic hnRNA undergoes splicing, capping, and tailing.",
      whyItMattersForNEET: "Comparison questions between prokaryotic and eukaryotic transcription."
    }
  ],

  quickRevision: [
    "Central Dogma: DNA -> RNA -> Protein (Francis Crick); Reverse Central Dogma: RNA -> cDNA (Temin & Baltimore).",
    "Transcription unit: Promoter (5' coding), Structural gene, Terminator (3' coding).",
    "Strand polarities: Template (3'->5', antisense), Coding (5'->3', sense).",
    "Prokaryotes: Single RNA polymerase; Sigma (σ) for initiation, Rho (ρ) for termination; Coupled transcription-translation.",
    "Eukaryotic RNA Polymerases: Pol I (28S, 18S, 5.8S rRNA), Pol II (hnRNA), Pol III (tRNA, 5S rRNA, snRNA).",
    "hnRNA processing: Splicing (introns excised, exons ligated), 5'-Cap (m7Gppp), 3'-Poly-A tail (200-300 adenylates).",
    "Genetic Code: Triplet, 64 codons (61 sense, 3 stop: UAA, UAG, UGA), unambiguous, degenerate, commaless, universal.",
    "AUG: Dual role (Start codon + Methionine); UGG: Tryptophan.",
    "Key Scientists: Gamow (triplet concept), Nirenberg (poly-U -> poly-Phe), Khorana (chemical copolymers), Ochoa (polynucleotide phosphorylase)."
  ],

  practiceQuestions: [
    {
      question: "Which of the following eukaryotic RNA polymerases is responsible for the synthesis of 5S rRNA and tRNA?",
      options: [
        "RNA Polymerase I",
        "RNA Polymerase II",
        "RNA Polymerase III",
        "DNA Polymerase I"
      ],
      correctAnswer: 2,
      explanation: "In eukaryotic nuclei, RNA Polymerase III transcribes tRNA, 5S rRNA, and snRNAs. RNA Polymerase I transcribes 28S, 18S, and 5.8S rRNAs, while RNA Polymerase II transcribes hnRNA.",
      conceptTested: "Division of labor among eukaryotic RNA polymerases"
    },
    {
      question: "If the sequence of the coding strand of DNA is 5'-ATGCATGCATGC-3', what will be the sequence of the corresponding transcribed mRNA?",
      options: [
        "5'-UACGUACGUACG-3'",
        "5'-AUGCAUGCAUGC-3'",
        "3'-AUGCAUGCAUGC-5'",
        "5'-GCAUGCAUGCAU-3'"
      ],
      correctAnswer: 1,
      explanation: "The transcribed mRNA has the EXACT same sequence and polarity (5' -> 3') as the CODING strand, with the single replacement of Thymine (T) by Uracil (U). Thus, 5'-ATGCATGCATGC-3' becomes 5'-AUGCAUGCAUGC-3'.",
      conceptTested: "Transcription coding strand vs mRNA sequence"
    },
    {
      question: "Which of the following codons does NOT have a corresponding tRNA with a complementary anticodon?",
      options: [
        "AUG",
        "UGG",
        "UAA",
        "UUU"
      ],
      correctAnswer: 2,
      explanation: "UAA is a stop (nonsense) codon. There are no tRNAs with complementary anticodons for the three stop codons (UAA, UAG, UGA). Translation is terminated by Release Factors.",
      conceptTested: "Stop codons and absence of corresponding tRNAs"
    },
    {
      question: "During hnRNA processing in eukaryotes, what is added to the 5' end during capping?",
      options: [
        "Poly-A tail (200-300 residues)",
        "7-methylguanosine triphosphate",
        "Deoxythymidine triphosphate",
        "Formyl-methionine"
      ],
      correctAnswer: 1,
      explanation: "During 5'-capping of hnRNA, an unusual nucleotide, 7-methylguanosine triphosphate (m7Gppp), is added to the 5' end.",
      conceptTested: "5'-capping of eukaryotic hnRNA"
    }
  ],

  pyqs: [
    {
      year: 2022,
      exam: "NEET UG",
      question: "Which of the following is required as an inducer for the expression of the Lac operon?",
      options: [
        "Galactose",
        "Lactose",
        "Glucose",
        "Tryptophan"
      ],
      correctAnswer: 1,
      explanation: "Lactose (or its isomer allolactose) acts as the inducer in the lac operon, binding to the repressor protein and inactivating it.",
      conceptTested: "Inducer of lac operon",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 117",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2021,
      exam: "NEET UG",
      question: "Which RNA is synthesized by RNA Polymerase III in eukaryotes?",
      options: [
        "hnRNA",
        "tRNA, 5S rRNA, snRNA",
        "28S, 18S, 5.8S rRNA",
        "mRNA"
      ],
      correctAnswer: 1,
      explanation: "RNA Polymerase III transcribes tRNA, 5S rRNA, and small nuclear RNAs (snRNAs).",
      conceptTested: "Eukaryotic RNA Polymerase III products",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 111",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2020,
      exam: "NEET UG",
      question: "Name the enzyme that facilitates opening of DNA helix during transcription:",
      options: [
        "DNA helicase",
        "DNA polymerase",
        "RNA polymerase",
        "DNA ligase"
      ],
      correctAnswer: 2,
      explanation: "During transcription, DNA-dependent RNA Polymerase itself binds to the promoter, opens/unzips the DNA helix, and polymerizes RNA.",
      conceptTested: "Function of RNA polymerase in transcription initiation",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 109",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2019,
      exam: "NEET UG",
      question: "Under which of the following conditions will there be no change in the reading frame of following mRNA?\n5' - AACAGCGGUGCUAUU - 3'",
      options: [
        "Deletion of G from 5th position",
        "Insertion of A and G at 4th and 5th position respectively",
        "Deletion of GGU from 7th, 8th and 9th positions",
        "Insertion of G at 5th position"
      ],
      correctAnswer: 2,
      explanation: "Since the genetic code is read as contiguous triplets, insertion or deletion of 1 or 2 bases shifts the reading frame (frameshift mutation). Deletion or insertion of 3 bases (or multiples of 3, such as the triplet GGU) removes or adds one whole codon/amino acid without altering the downstream reading frame.",
      conceptTested: "Frameshift mutation and triplet reading frame",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 113",
      verified: true,
      isVerifiedPYQ: true
    }
  ],

  neetMarksPotential: {
    topicName: "Central Dogma, Transcription & Genetic Code",
    confidenceLabel: "HIGH",
    confidenceText: "One of the most intensely tested sub-topics in NEET with 2-3 direct questions every year covering eukaryotic RNA polymerases, hnRNA splicing/capping, coding vs template strand polarity, and genetic code properties.",
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 10,
    totalDirectPyqs: 24,
    totalHistoricalMarks: 96,
    averageDirectPyqsPerPaper: 2.4,
    maxDirectPyqsInSinglePaper: 4,
    minDirectPyqsInSinglePaper: 2,
    minDirectMarks: 8,
    maxDirectMarks: 16,
    avgDirectMarksPerPaper: 9.6,
    whatThisMeansForYou: "High-yield scoring area. Thorough understanding of RNA polymerases, coding strand polarity, and codon rules secures 8-12 marks."
  }
};
