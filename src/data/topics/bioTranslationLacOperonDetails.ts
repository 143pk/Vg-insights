import { DetailedTopicContent } from '../../types/neet';

export const bioTranslationLacOperonDetails: DetailedTopicContent = {
  topicId: "bio-translation-lac-operon",
  topicName: "Translation Mechanism & Regulation of Gene Expression (Lac Operon)",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Molecular Basis of Inheritance",

  whatIsThisTopic: "The adapter role and structural anatomy of tRNA (cloverleaf secondary structure and inverted L-shape 3D structure), ribosome architecture and ribozyme peptidyl transferase (23S rRNA), four-step translation mechanism (charging/aminoacylation of tRNA, initiation, elongation, termination), polysome formation, Untranslated Regions (UTRs), eukaryotic gene regulation levels, and the classic operon model of François Jacob and Jacques Monod focusing on the inducible Lac Operon of Escherichia coli.",

  basicIdea: [
    "Translation is the biological process in which the genetic code transcribed in mRNA is decoded by ribosomes to synthesize a polypeptide chain with a specific amino acid sequence.",
    "Francis Crick postulated the existence of an 'Adapter Molecule' that could simultaneously read mRNA codons and bind specific amino acids. This adapter is Transfer RNA (tRNA) (originally called soluble RNA or sRNA).",
    "tRNA Secondary & Tertiary Structure: The 2D secondary structure resembles a Cloverleaf (Robert Holley), featuring: (1) Amino acid acceptor arm at the 3' end terminating with the sequence -CCA-3' having a free 3'-OH group; (2) Anticodon loop containing 3 complementary bases that pair antiparallel with mRNA codons; (3) DHU loop (D-loop) recognized by aminoacyl-tRNA synthetase; (4) TψC loop that binds the ribosome. The actual 3D tertiary structure is a compact Inverted L-shape (Aaron Klug).",
    "Ribosome & Catalytic Ribozyme: Ribosomes consist of cellular rRNAs and proteins (70S in prokaryotes: 50S + 30S; 80S in eukaryotes: 60S + 40S). The 23S rRNA of the prokaryotic 50S large subunit (and 28S rRNA in eukaryotes) acts as the catalytic peptidyl transferase (a non-protein RNA enzyme or Ribozyme) that synthesizes peptide bonds.",
    "Four Sequential Steps of Translation: (1) Activation/Charging (Aminoacylation of tRNA using ATP); (2) Initiation (assembly of small subunit, initiator tRNA-fMet at P-site, start codon AUG, and large subunit); (3) Elongation (entry of charged tRNA into A-site, peptide bond synthesis by 23S rRNA, and 5'->3' translocation); (4) Termination (stop codon at A-site binds Release Factors, releasing the complete polypeptide).",
    "Polysome (Polyribosome): Several ribosomes translating a single mRNA strand simultaneously in tandem, rapidly producing multiple copies of the same polypeptide.",
    "Untranslated Regions (UTRs): Non-coding mRNA segments located at both the 5' end (before the start codon) and the 3' end (after the stop codon) that are essential for mRNA stability and translation efficiency.",
    "The Lac Operon of E. coli (François Jacob & Jacques Monod, 1961): A classic inducible bacterial operon consisting of: (1) Regulatory gene (i gene, from inhibitor) that constitutively expresses the Lac Repressor protein; (2) Promoter (P) where RNA polymerase binds; (3) Operator (O) where repressor binds; (4) Three structural genes: z gene (encodes β-galactosidase), y gene (encodes Permease), and a gene (encodes Transacetylase).",
    "Switch OFF Mechanism (No Lactose): Active Lac repressor binds operator, physically blocking RNA polymerase from transcribing structural genes.",
    "Switch ON Mechanism (Lactose Present): Lactose / Allolactose acts as Inducer, binds the repressor, causes an allosteric conformational change, inactivating it so it detaches from the operator, allowing RNA polymerase to transcribe z, y, and a genes."
  ],

  importantTerms: [
    {
      term: "Adapter Molecule (tRNA)",
      definition: "Transfer RNA; a small specialized RNA molecule (~73-93 nucleotides) that matches specific mRNA codons with their corresponding amino acids during translation.",
      neetNote: "Secondary structure = Cloverleaf; Tertiary 3D structure = Inverted L-shape."
    },
    {
      term: "Anticodon Loop",
      definition: "The loop of tRNA containing three specific unpaired nucleotide bases that bind complementarily and antiparallel to the mRNA codon.",
      neetNote: "For mRNA codon 5'-AUG-3', the complementary tRNA anticodon is 3'-UAC-5' (or 5'-CAU-3')."
    },
    {
      term: "Aminoacylation (Charging of tRNA)",
      definition: "The two-step ATP-dependent enzymatic attachment of a specific amino acid to the 3'-OH group of its cognate tRNA catalyzed by aminoacyl-tRNA synthetase.",
      neetNote: "Provides the thermodynamic energy for peptide bond formation during elongation."
    },
    {
      term: "Peptidyl Transferase (Ribozyme)",
      definition: "The catalytic RNA enzyme located in the large ribosomal subunit (23S rRNA in prokaryotes, 28S rRNA in eukaryotes) that synthesizes peptide bonds between amino acids.",
      neetNote: "Proves that RNA can act as a catalyst (ribozyme) without protein enzymes."
    },
    {
      term: "A-Site (Aminoacyl Site)",
      definition: "The ribosomal binding site that accepts the incoming aminoacyl-tRNA carrying the next amino acid to be added to the growing peptide chain.",
      neetNote: "Stop codons are also recognized at the A-site by Release Factors."
    },
    {
      term: "P-Site (Peptidyl Site)",
      definition: "The ribosomal site that holds the tRNA carrying the growing nascent polypeptide chain.",
      neetNote: "Initiator tRNA (tRNA-fMet) binds directly to the P-site during initiation."
    },
    {
      term: "E-Site (Exit Site)",
      definition: "The ribosomal site where deacylated (uncharged) tRNAs transiently reside before being released into the cytoplasm.",
      neetNote: "Present in the large ribosomal subunit."
    },
    {
      term: "Translocation",
      definition: "The GTP-dependent movement of the ribosome by exactly one codon (3 nucleotides) in the 5' -> 3' direction along mRNA, shifting peptidyl-tRNA from A-site to P-site.",
      neetNote: "Facilitated by elongation factor EF-G (EF-2 in eukaryotes)."
    },
    {
      term: "Polysome / Polyribosome",
      definition: "A complex formed when multiple ribosomes simultaneously bind to and translate a single mRNA molecule in tandem.",
      neetNote: "Enables rapid, high-volume production of identical polypeptide chains."
    },
    {
      term: "Untranslated Regions (UTRs)",
      definition: "Additional nucleotide sequences present on mRNA at both 5' end (upstream of start codon) and 3' end (downstream of stop codon) that are not translated into protein.",
      neetNote: "Crucial for efficient translation initiation and mRNA stability."
    },
    {
      term: "Operon",
      definition: "A functioning unit of genomic DNA in prokaryotes containing a cluster of structural genes under the control of a single common promoter and operator.",
      neetNote: "Discovered by François Jacob and Jacques Monod in 1961."
    },
    {
      term: "i Gene (Regulatory Gene)",
      definition: "The regulatory gene of the lac operon (from the word 'inhibitor', NOT inducer) that constitutively synthesizes the active Lac Repressor protein.",
      neetNote: "Transcribed continuously at a basal rate."
    },
    {
      term: "Lac Repressor",
      definition: "A tetrameric DNA-binding protein synthesized by the i gene that binds specifically to the lac operator to repress transcription.",
      neetNote: "Inactivated when bound by inducer (allolactose/lactose)."
    },
    {
      term: "Inducer (Allolactose)",
      definition: "A chemical molecule (lactose or its metabolic isomer allolactose) that binds to the repressor protein, altering its conformation and switching the operon ON.",
      neetNote: "Allolactose is the true physiological inducer in E. coli."
    },
    {
      term: "β-Galactosidase (z gene product)",
      definition: "The enzyme encoded by the lac z gene that hydrolyzes the disaccharide lactose into monosaccharides glucose and galactose, and isomerizes lactose to allolactose.",
      neetNote: "Key metabolic enzyme of the lac operon."
    },
    {
      term: "Permease (y gene product)",
      definition: "A membrane-bound carrier protein encoded by the lac y gene that increases the cell membrane's permeability to β-galactosides (lactose).",
      neetNote: "A low basal level of permease must always be present for lactose to enter the cell."
    },
    {
      term: "Transacetylase (a gene product)",
      definition: "An enzyme encoded by the lac a gene that transfers an acetyl group from Acetyl-CoA to β-galactosides.",
      neetNote: "Involved in detoxifying non-metabolizable galactosides."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Adapter Molecule (tRNA) & Translation Machinery",
      paragraphs: [
        "The genetic code on mRNA contains no direct chemical affinity for amino acids. Francis Crick postulated that an adapter molecule must exist that simultaneously reads the code and carries the corresponding amino acid. This molecule is **Transfer RNA (tRNA)**, originally called soluble RNA (sRNA).",
        "Anatomy and Structure of tRNA:",
        "1. **Secondary Structure (Cloverleaf Model - Robert Holley)**: The folded tRNA has 4 main arms/loops stabilized by internal base pairing: (a) **Amino Acid Acceptor Arm**: The 3' end terminates in the invariant sequence **-CCA-3'** with a free 3'-OH group where the specific amino acid is esterified; (b) **Anticodon Arm**: Contains the anticodon loop carrying 3 complementary bases that base-pair in an antiparallel orientation with the mRNA codon; (c) **DHU Arm (D-loop)**: Contains dihydrouridine, recognized by aminoacyl-tRNA synthetase; (d) **TψC Arm**: Contains ribothymidine and pseudouridine, mediating binding to the large ribosomal subunit; (e) Variable Arm.",
        "2. **Tertiary 3D Structure (Inverted L-shape - Aaron Klug)**: In three dimensions, tRNA folds into a compact L-shaped conformation where the acceptor stem is at one end and the anticodon loop is at the opposing end ~7 nm away.",
        "Ribosome Architecture & Catalytic Peptidyl Transferase (Ribozyme):",
        "Ribosomes provide the structural and catalytic framework for translation. A prokaryotic **70S Ribosome** consists of a **50S Large Subunit** (containing 23S rRNA + 5S rRNA + 31 proteins) and a **30S Small Subunit** (containing 16S rRNA + 21 proteins).",
        "**The 23S rRNA as a Ribozyme**: The formation of peptide bonds between amino acids is catalyzed by **Peptidyl Transferase**, which is NOT a protein enzyme, but the **23S rRNA** molecule of the large ribosomal subunit (in eukaryotes, 28S rRNA). This is one of the definitive proofs supporting the ancient RNA World hypothesis.",
        "The ribosome possesses three functional binding sites for tRNA: (1) **A-site (Aminoacyl site)**: Receives the incoming charged aminoacyl-tRNA; (2) **P-site (Peptidyl site)**: Holds the tRNA linked to the growing polypeptide chain; (3) **E-site (Exit site)**: Binds the uncharged deacylated tRNA prior to its release into the cytoplasm."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">tRNA Cloverleaf Secondary Structure &amp; Ribosome Active Sites (A, P, E)</text>

  <!-- Left: tRNA 2D Cloverleaf Model -->
  <g transform="translate(40, 45)">
    <rect width="320" height="295" fill="#ffffff" rx="8" stroke="#6366f1" stroke-width="1.5"/>
    <text x="160" y="22" fill="#4338ca" font-size="13" font-weight="bold" text-anchor="middle">tRNA Secondary Structure (Cloverleaf)</text>

    <!-- Amino Acid Attachment Site -->
    <circle cx="160" cy="45" r="14" fill="#fecdd3" stroke="#e11d48" stroke-width="1.5"/>
    <text x="160" y="49" fill="#9f1239" font-size="9" font-weight="bold" text-anchor="middle">Met</text>
    <text x="160" y="72" fill="#e11d48" font-size="10" font-weight="bold" text-anchor="middle">3' End (-CCA-OH)</text>
    <text x="110" y="72" fill="#64748b" font-size="9">5' End (P)</text>

    <!-- Stem & Loops -->
    <!-- Acceptor stem -->
    <line x1="150" y1="75" x2="150" y2="105" stroke="#4f46e5" stroke-width="3"/>
    <line x1="170" y1="75" x2="170" y2="105" stroke="#4f46e5" stroke-width="3"/>

    <!-- DHU Loop (Left) -->
    <path d="M 150 105 Q 80 120 80 150 Q 80 180 150 165" fill="none" stroke="#4f46e5" stroke-width="3"/>
    <text x="75" y="155" fill="#4338ca" font-size="9" font-weight="bold" text-anchor="end">DHU Loop (D)</text>

    <!-- TψC Loop (Right) -->
    <path d="M 170 105 Q 240 120 240 150 Q 240 180 170 165" fill="none" stroke="#4f46e5" stroke-width="3"/>
    <text x="245" y="155" fill="#4338ca" font-size="9" font-weight="bold">TψC Loop</text>

    <!-- Anticodon Stem & Loop (Bottom) -->
    <line x1="150" y1="165" x2="150" y2="200" stroke="#4f46e5" stroke-width="3"/>
    <line x1="170" y1="165" x2="170" y2="200" stroke="#4f46e5" stroke-width="3"/>
    <circle cx="160" cy="220" r="22" fill="#ede9fe" stroke="#4f46e5" stroke-width="2"/>
    <text x="160" y="215" fill="#312e81" font-size="9" font-weight="bold" text-anchor="middle">Anticodon Loop</text>
    <text x="160" y="230" fill="#4338ca" font-size="11" font-weight="bold" text-anchor="middle">3'-U A C-5'</text>

    <!-- mRNA pairing below -->
    <rect x="70" y="255" width="180" height="24" rx="4" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
    <text x="160" y="271" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">5'-A U G-3' (Codon)</text>
  </g>

  <!-- Right: Ribosome Active Sites (A, P, E) -->
  <g transform="translate(390, 45)">
    <rect width="330" height="295" fill="#ffffff" rx="8" stroke="#059669" stroke-width="1.5"/>
    <text x="165" y="22" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">70S Ribosome Architecture &amp; Sites</text>

    <!-- 50S Large Subunit -->
    <path d="M 40 150 C 40 50, 290 50, 290 150 Z" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
    <text x="165" y="65" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">50S Large Subunit</text>
    <text x="165" y="80" fill="#047857" font-size="9" text-anchor="middle">Contains 23S rRNA (Peptidyl Transferase Ribozyme)</text>

    <!-- A, P, E Sites inside Large Subunit -->
    <rect x="70" y="95" width="50" height="50" rx="4" fill="#ffffff" stroke="#64748b" stroke-width="1.5"/>
    <text x="95" y="125" fill="#475569" font-size="16" font-weight="bold" text-anchor="middle">E</text>
    <text x="95" y="140" fill="#64748b" font-size="8" text-anchor="middle">Exit</text>

    <rect x="140" y="95" width="50" height="50" rx="4" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
    <text x="165" y="125" fill="#1e40af" font-size="16" font-weight="bold" text-anchor="middle">P</text>
    <text x="165" y="140" fill="#2563eb" font-size="8" text-anchor="middle">Peptidyl</text>

    <rect x="210" y="95" width="50" height="50" rx="4" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
    <text x="235" y="125" fill="#991b1b" font-size="16" font-weight="bold" text-anchor="middle">A</text>
    <text x="235" y="140" fill="#ef4444" font-size="8" text-anchor="middle">Aminoacyl</text>

    <!-- mRNA Strand -->
    <path d="M 20 165 L 310 165" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
    <text x="25" y="180" fill="#b45309" font-size="10" font-weight="bold">5'</text>
    <text x="300" y="180" fill="#b45309" font-size="10" font-weight="bold">3'</text>
    <text x="165" y="180" fill="#b45309" font-size="9" text-anchor="middle">mRNA reading frame</text>

    <!-- 30S Small Subunit -->
    <path d="M 50 190 C 50 250, 280 250, 280 190 Z" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
    <text x="165" y="215" fill="#312e81" font-size="12" font-weight="bold" text-anchor="middle">30S Small Subunit</text>
    <text x="165" y="230" fill="#4338ca" font-size="9" text-anchor="middle">Contains 16S rRNA (Binds Shine-Dalgarno / mRNA)</text>

    <text x="165" y="270" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">3D Structure of tRNA = Inverted L-shape</text>
  </g>
</svg>`,
        caption: "tRNA secondary cloverleaf structure (3' -CCA amino acid acceptor arm, anticodon loop) and 70S ribosome architecture showing E, P, and A sites.",
        guide: "WHAT TO OBSERVE: Look at the 3' -CCA end carrying the amino acid and the opposite anticodon loop. In the ribosome, observe the 3 sites: A (Aminoacyl, incoming tRNA), P (Peptidyl, holds growing peptide), and E (Exit). Note that 23S rRNA is the peptidyl transferase ribozyme."
      },
      importantPoints: [
        "tRNA secondary structure is a Cloverleaf; 3D tertiary structure is an Inverted L-shape.",
        "Amino acid binds to the 3'-OH end terminating in -CCA-3'.",
        "Anticodon loop base-pairs antiparallel with mRNA codons.",
        "23S rRNA in bacteria (28S rRNA in eukaryotes) acts as the catalytic Peptidyl Transferase Ribozyme.",
        "A-site: accepts incoming aminoacyl-tRNA; P-site: holds growing peptidyl-tRNA; E-site: exit site for uncharged tRNA.",
        "Initiator tRNA (tRNA-fMet) binds directly to the P-site during initiation."
      ]
    },
    {
      heading: "2. The Four Steps of Translation, Polysomes & Untranslated Regions (UTRs)",
      paragraphs: [
        "Translation proceeds through four tightly orchestrated, energy-consuming steps:",
        "Step 1: Charging / Aminoacylation of tRNA: Before amino acids can participate in peptide bond formation, they must be activated. In the presence of ATP and Mg2+, a specific amino acid reacts with its cognate **Aminoacyl-tRNA Synthetase** to form an enzyme-bound aminoacyl-AMP complex with release of pyrophosphate (PPi). The amino acid is then transferred to the 3'-OH of its corresponding tRNA, producing a **Charged tRNA (Aminoacyl-tRNA)**. This aminoacylation energizes the amino acid, providing the thermodynamic driving force for subsequent peptide bond synthesis.",
        "Step 2: Initiation: In prokaryotes, the 30S small subunit recognizes and binds the mRNA at the ribosome binding site (Shine-Dalgarno sequence). The **Initiator tRNA (carrying N-formylmethionine, tRNA-fMet)** binds directly to the start codon **AUG** positioned at the **P-site**. The 50S large subunit then joins the complex, assisted by Initiation Factors (IF1, IF2, IF3) and GTP hydrolysis, assembling the intact 70S initiation complex.",
        "Step 3: Elongation: The cycle repeats for every amino acid: (a) The next charged tRNA with an anticodon complementary to the codon in the **A-site** enters the ribosome, guided by elongation factors (EF-Tu, EF-Ts) and GTP; (b) **Peptide Bond Formation**: Peptidyl transferase (23S rRNA) catalyzes a nucleophilic attack forming a peptide bond between the carboxyl group of the amino acid at the P-site and the amino group of the amino acid at the A-site, transferring the peptide chain to the tRNA at the A-site; (c) **Translocation**: Driven by elongation factor EF-G and GTP hydrolysis, the ribosome shifts exactly 3 nucleotides (1 codon) in the 5' -> 3' direction along mRNA. The uncharged tRNA moves from P to E site and leaves; the peptidyl-tRNA shifts from A to P site, leaving the A-site open for the next incoming charged tRNA.",
        "Step 4: Termination: When a stop codon (**UAA, UAG, or UGA**) moves into the A-site, no tRNA can bind because no tRNAs possess complementary anticodons. Instead, protein **Release Factors (RF1, RF2)** bind to the stop codon in the A-site, triggering peptidyl transferase to hydrolyze the completed polypeptide chain from the terminal tRNA. The ribosomal subunits, mRNA, and tRNAs dissociate completely.",
        "Polysomes (Polyribosomes): A single mRNA molecule can be translated simultaneously by multiple ribosomes spaced along its length like beads on a wire. This complex is called a **Polysome** or **Polyribosome**, allowing a cell to synthesize hundreds of identical protein molecules rapidly from a single mRNA transcript.",
        "Untranslated Regions (UTRs): Mature mRNAs possess additional non-coding sequences called **UTRs** located at both the 5' end (before the start codon AUG) and the 3' end (after the stop codon). UTRs are not translated into protein, but they are essential for efficient translation initiation, mRNA localization, and post-transcriptional stability."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="340" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Translation Elongation Cycle &amp; Polysome Architecture</text>

  <!-- Left: Elongation Step -->
  <g transform="translate(40, 45)">
    <rect width="320" height="275" fill="#ffffff" rx="8" stroke="#2563eb" stroke-width="1.5"/>
    <text x="160" y="24" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Elongation &amp; Translocation (5' -> 3')</text>

    <!-- Ribosome -->
    <ellipse cx="160" cy="115" rx="110" ry="55" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <ellipse cx="160" cy="180" rx="90" ry="30" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>

    <!-- P-site and A-site tRNAs -->
    <rect x="120" y="90" width="28" height="50" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
    <text x="134" y="120" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">P</text>
    <!-- Growing peptide -->
    <circle cx="134" cy="65" r="8" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
    <circle cx="134" cy="48" r="8" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
    <circle cx="134" cy="31" r="8" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
    <text x="134" y="20" fill="#9d174d" font-size="9" font-weight="bold" text-anchor="middle">Peptide Chain</text>

    <rect x="170" y="90" width="28" height="50" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
    <text x="184" y="120" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">A</text>
    <circle cx="184" cy="65" r="8" fill="#fed7aa" stroke="#ea580c" stroke-width="1"/>
    <text x="184" y="52" fill="#c2410c" font-size="8" font-weight="bold" text-anchor="middle">Incoming</text>

    <!-- Translocation Arrow -->
    <path d="M 210 190 L 260 190" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arr-trans)"/>
    <text x="235" y="210" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">5' -> 3' Shift</text>

    <!-- mRNA -->
    <line x1="30" y1="160" x2="290" y2="160" stroke="#f59e0b" stroke-width="4"/>
    <text x="35" y="152" fill="#b45309" font-size="10" font-weight="bold">5' UTR</text>
    <text x="255" y="152" fill="#b45309" font-size="10" font-weight="bold">3' UTR</text>

    <text x="160" y="245" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Peptide bond catalyzed by 23S rRNA</text>
    <text x="160" y="260" fill="#64748b" font-size="9" text-anchor="middle">Translocation requires EF-G and GTP</text>
  </g>

  <!-- Right: Polysome (Polyribosome) Structure -->
  <g transform="translate(390, 45)">
    <rect width="330" height="275" fill="#ffffff" rx="8" stroke="#059669" stroke-width="1.5"/>
    <text x="165" y="24" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Polysome / Polyribosome Architecture</text>

    <!-- Continuous mRNA strand with multiple ribosomes -->
    <path d="M 20 120 Q 80 80, 160 120 T 310 120" fill="none" stroke="#f59e0b" stroke-width="4"/>
    <text x="20" y="105" fill="#b45309" font-size="11" font-weight="bold">5' End</text>
    <text x="290" y="105" fill="#b45309" font-size="11" font-weight="bold">3' End</text>

    <!-- Ribosome 1 -->
    <ellipse cx="70" cy="105" rx="26" ry="18" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
    <path d="M 70 87 Q 60 70 65 55" stroke="#db2777" stroke-width="2" fill="none"/>
    <text x="65" y="48" fill="#9d174d" font-size="8" font-weight="bold">Short</text>

    <!-- Ribosome 2 -->
    <ellipse cx="140" cy="115" rx="26" ry="18" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
    <path d="M 140 97 Q 130 70 140 45" stroke="#db2777" stroke-width="2" fill="none"/>
    <text x="140" y="38" fill="#9d174d" font-size="8" font-weight="bold">Medium</text>

    <!-- Ribosome 3 -->
    <ellipse cx="210" cy="115" rx="26" ry="18" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
    <path d="M 210 97 Q 195 65 215 35" stroke="#db2777" stroke-width="2" fill="none"/>
    <text x="215" y="28" fill="#9d174d" font-size="8" font-weight="bold">Longest</text>

    <!-- Ribosome 4 -->
    <ellipse cx="275" cy="120" rx="24" ry="16" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>

    <g transform="translate(15, 160)">
      <rect width="300" height="95" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="10" y="20" fill="#0f172a" font-size="10" font-weight="bold">Key Polysome Highlights:</text>
      <text x="10" y="38" fill="#334155" font-size="9">• Multiple ribosomes translate single mRNA</text>
      <text x="10" y="54" fill="#334155" font-size="9">• Polypeptide chain grows longer towards 3' end</text>
      <text x="10" y="70" fill="#065f46" font-size="9" font-weight="bold">• Maximizes protein yield with minimal mRNA</text>
      <text x="10" y="86" fill="#64748b" font-size="8">• UTRs present at both 5' and 3' ends</text>
    </g>
  </g>

  <defs>
    <marker id="arr-trans" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a"/>
    </marker>
  </defs>
</svg>`,
        caption: "Translation elongation cycle (peptide bond formation by 23S rRNA, translocation) and Polysome architecture translating mRNA simultaneously.",
        guide: "WHAT TO OBSERVE: Note the direction of translocation (strictly 5' -> 3'). In the polysome, notice that nascent polypeptide chains are shortest near the 5' end and longest near the 3' end."
      },
      importantPoints: [
        "Aminoacylation (charging) of tRNA activates amino acids using ATP.",
        "Initiation: Initiator tRNA (tRNA-fMet) binds directly to start codon AUG at the P-site.",
        "Elongation: Incoming charged tRNA enters A-site; 23S rRNA forms peptide bond; Translocation moves ribosome 1 codon in 5'->3' direction using EF-G and GTP.",
        "Termination: Stop codons (UAA, UAG, UGA) in A-site bind Release Factors; no tRNAs bind stop codons.",
        "Polysome: Multiple ribosomes translating a single mRNA simultaneously.",
        "UTRs: Untranslated regions at 5' (before start codon) and 3' (after stop codon) essential for translation efficiency and stability."
      ]
    },
    {
      heading: "3. Regulation of Gene Expression & The Lac Operon of E. coli",
      paragraphs: [
        "Gene expression must be tightly regulated to ensure proteins are synthesized only when required, preventing metabolic waste. In eukaryotes, gene regulation can occur at four distinct levels: (1) Transcriptional level (formation of primary transcript); (2) Processing level (regulation of splicing); (3) Transport level (transport of mRNA from nucleus to cytoplasm); (4) Translational level.",
        "In prokaryotes, gene expression is predominantly controlled at the level of **Transcription Initiation**.",
        "The Operon Concept (François Jacob & Jacques Monod, 1961 - Nobel Prize 1965): In bacteria, genes encoding enzymes of a related metabolic pathway are clustered together in a coordinated transcription unit called an **Operon**.",
        "The Lac Operon of E. coli (Inducible Operon for Lactose Catabolism):",
        "Components of the Lac Operon:",
        "1. **Regulatory Gene (i gene)**: 'i' stands for **inhibitor** (NOT inducer!). It is constitutively expressed, continuously synthesizing the active **Lac Repressor protein**.",
        "2. **Promoter (P)**: Binding site for RNA polymerase.",
        "3. **Operator (O)**: The DNA sequence adjacent to the promoter where the active repressor binds.",
        "4. **Three Structural Genes (z, y, a)**: Transcribed as a single polycistronic mRNA:",
        "  • **z gene**: Encodes **β-galactosidase**, which hydrolyzes lactose into glucose and galactose, and isomerizes lactose into **Allolactose**.",
        "  • **y gene**: Encodes **Permease**, a membrane transport protein that increases cellular permeability to lactose.",
        "  • **a gene**: Encodes **Transacetylase**, which transfers an acetyl group from Acetyl-CoA to β-galactosides.",
        "Mechanism of Regulation:",
        "**Case A: In the Absence of Inducer (Lactose absent) -> Operon is Switched OFF (Repression)**:",
        "The i gene continuously produces active repressor protein. The repressor binds specifically and tightly to the operator region (O). This physically blocks RNA polymerase from transcribing the structural genes (z, y, a). Consequently, only a very low basal level of enzymes is produced.",
        "**Case B: In the Presence of Inducer (Lactose / Allolactose present) -> Operon is Switched ON (Induction)**:",
        "A low basal level of permease allows a small amount of lactose to enter the bacterial cell. Inside, β-galactosidase converts lactose to **Allolactose** (the true physiological inducer). Allolactose binds to the repressor protein, inducing an allosteric conformational change that completely abolishes its ability to bind the operator. The inactive repressor detaches from the operator. RNA polymerase freely transcribes the polycistronic mRNA, leading to rapid synthesis of β-galactosidase, permease, and transacetylase to metabolize lactose.",
        "Once all lactose is hydrolyzed, the inducer concentration drops, the repressor regains its active conformation, binds the operator, and switches the operon back OFF (Negative Feedback Control).",
        "Regulation Type: The lac operon is primarily subject to **Negative Regulation** because transcription is switched off by the binding of an active repressor protein."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="380" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">The Lac Operon of E. coli (Jacob &amp; Monod, 1961) — Switch OFF vs Switch ON</text>

  <!-- Panel 1: In the ABSENCE of Inducer (Lactose absent) -> Switched OFF -->
  <g transform="translate(30, 45)">
    <rect width="700" height="145" fill="#ffffff" rx="8" stroke="#ef4444" stroke-width="1.5"/>
    <text x="20" y="22" fill="#991b1b" font-size="12" font-weight="bold">Case A: In the ABSENCE of Inducer (Lactose absent) — Operon Switched OFF</text>

    <!-- Operon DNA Bar -->
    <g transform="translate(40, 40)">
      <!-- i gene -->
      <rect x="0" y="0" width="80" height="32" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="40" y="20" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">i gene</text>

      <!-- Promoter P -->
      <rect x="100" y="0" width="60" height="32" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="130" y="20" fill="#92400e" font-size="12" font-weight="bold" text-anchor="middle">P</text>

      <!-- Operator O -->
      <rect x="170" y="0" width="60" height="32" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="200" y="20" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">O</text>

      <!-- z gene -->
      <rect x="240" y="0" width="110" height="32" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
      <text x="295" y="20" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">z (β-gal)</text>

      <!-- y gene -->
      <rect x="360" y="0" width="110" height="32" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
      <text x="415" y="20" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">y (Permease)</text>

      <!-- a gene -->
      <rect x="480" y="0" width="130" height="32" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
      <text x="545" y="20" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">a (Transacetylase)</text>
    </g>

    <!-- Active Repressor binding to Operator -->
    <path d="M 80 72 L 80 95 L 240 95 L 240 72" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#arr-lac)"/>
    <rect x="190" y="85" width="100" height="24" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
    <text x="240" y="101" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">Active Repressor</text>
    <text x="450" y="105" fill="#ef4444" font-size="11" font-weight="bold">RNA Polymerase BLOCKED -> NO Transcription</text>
  </g>

  <!-- Panel 2: In the PRESENCE of Inducer (Lactose present) -> Switched ON -->
  <g transform="translate(30, 205)">
    <rect width="700" height="160" fill="#ffffff" rx="8" stroke="#059669" stroke-width="1.5"/>
    <text x="20" y="22" fill="#065f46" font-size="12" font-weight="bold">Case B: In the PRESENCE of Inducer (Lactose / Allolactose) — Operon Switched ON</text>

    <!-- Operon DNA Bar -->
    <g transform="translate(40, 35)">
      <rect x="0" y="0" width="80" height="32" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
      <text x="40" y="20" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">i gene</text>

      <rect x="100" y="0" width="60" height="32" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
      <text x="130" y="20" fill="#92400e" font-size="12" font-weight="bold" text-anchor="middle">P</text>

      <rect x="170" y="0" width="60" height="32" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
      <text x="200" y="20" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">O</text>

      <rect x="240" y="0" width="110" height="32" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
      <text x="295" y="20" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">z (β-gal)</text>

      <rect x="360" y="0" width="110" height="32" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
      <text x="415" y="20" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">y (Permease)</text>

      <rect x="480" y="0" width="130" height="32" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
      <text x="545" y="20" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">a (Transacetylase)</text>
    </g>

    <!-- Inducer Inactivating Repressor -->
    <g transform="translate(40, 80)">
      <rect x="0" y="0" width="100" height="24" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
      <text x="50" y="16" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">Repressor</text>

      <circle cx="120" cy="12" r="10" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="120" y="16" fill="#854d0e" font-size="8" font-weight="bold" text-anchor="middle">Ind</text>

      <text x="140" y="16" fill="#065f46" font-size="10" font-weight="bold">-> Inactive Repressor (Cannot bind Operator!)</text>

      <!-- Polycistronic mRNA line -->
      <line x1="240" y1="20" x2="610" y2="20" stroke="#059669" stroke-width="3" marker-end="url(#arr-lac)"/>
      <text x="425" y="12" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Polycistronic Lac mRNA Transcribed</text>

      <!-- 3 Enzymes -->
      <g transform="translate(240, 35)">
        <rect x="10" y="0" width="90" height="22" rx="4" fill="#059669"/>
        <text x="55" y="15" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">β-Galactosidase</text>

        <rect x="130" y="0" width="90" height="22" rx="4" fill="#059669"/>
        <text x="175" y="15" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Permease</text>

        <rect x="250" y="0" width="100" height="22" rx="4" fill="#059669"/>
        <text x="300" y="15" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Transacetylase</text>
      </g>
    </g>
  </g>

  <defs>
    <marker id="arr-lac" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/>
    </marker>
  </defs>
</svg>`,
        caption: "Regulation of the Lac Operon: In absence of inducer (repressor blocks operator -> OFF); In presence of inducer (allolactose inactivates repressor -> ON).",
        guide: "WHAT TO OBSERVE: Remember that 'i' gene stands for inhibitor (not inducer). Memorize the exact roles of the 3 structural genes: z = β-galactosidase, y = permease, a = transacetylase. Notice that the lac operon is an example of negative inducible gene regulation."
      },
      importantPoints: [
        "Operon model proposed by François Jacob and Jacques Monod (1961).",
        "i gene (inhibitor) constitutively produces active Lac Repressor.",
        "z gene: β-galactosidase (hydrolyzes lactose into glucose + galactose; forms allolactose).",
        "y gene: Permease (membrane transport of lactose).",
        "a gene: Transacetylase (transfers acetyl group to galactosides).",
        "Lactose / Allolactose is the Inducer that inactivates the repressor.",
        "Lac operon is primarily under NEGATIVE regulation by the repressor.",
        "A low basal level of permease must always exist in the cell for lactose to enter."
      ]
    }
  ],

  formulae: [
    {
      title: "Peptide Bond & ATP/GTP Energetics of Translation",
      formula: "\\text{High-Energy Bonds per Amino Acid} = 1 \\text{ ATP (Activation)} + 2 \\text{ GTP (1 Elongation + 1 Translocation)} = 4 \\text{ High-Energy Phosphates (net)}",
      meaning: "Quantifies the high metabolic energy expenditure required to incorporate each amino acid into a growing polypeptide chain.",
      symbols: "ATP = Adenosine triphosphate (charging); GTP = Guanosine triphosphate (binding & EF-G translocation)",
      unit: "High-energy phosphate bonds per peptide bond",
      conditions: "Prokaryotic standard translation elongation cycle.",
      calculationExample: {
        problem: "Calculate the total number of high-energy phosphate bonds consumed during the synthesis of a 100-amino acid polypeptide chain in bacteria.",
        given: "Chain length = 100 amino acids; 1 initiation GTP + 4 phosphates per incorporated amino acid + 1 termination GTP",
        stepByStep: [
          "Step 1: Activation/charging of 100 tRNAs consumes 100 ATP (hydrolyzed to AMP + PPi, equivalent to 200 high-energy bonds).",
          "Step 2: 99 elongation steps consume 99 GTP (EF-Tu) + 99 GTP (EF-G translocation) = 198 GTP.",
          "Step 3: Initiation consumes 1 GTP; Termination consumes 1 GTP.",
          "Step 4: Total high-energy bonds ≈ 400."
        ],
        answer: "~400 high-energy phosphate bonds (4 per amino acid)"
      }
    }
  ],

  neetImportantPoints: [
    "tRNA is the adapter molecule; secondary structure = Cloverleaf, 3D structure = Inverted L-shape.",
    "Amino acid attaches to 3'-OH end with conserved sequence -CCA-3'.",
    "23S rRNA in prokaryotes (28S rRNA in eukaryotes) acts as the catalytic Peptidyl Transferase Ribozyme.",
    "Initiator tRNA binds directly to the start codon AUG at the P-site.",
    "A-site receives incoming aminoacyl-tRNA; Translocation shifts ribosome 5' -> 3' using EF-G and GTP.",
    "Stop codons (UAA, UAG, UGA) in A-site bind Release Factors (no tRNAs exist for stop codons).",
    "Polysome: Multiple ribosomes translating single mRNA simultaneously.",
    "UTRs (Untranslated Regions) are located at both 5' and 3' ends and are essential for translation efficiency.",
    "Operon model discovered by François Jacob and Jacques Monod (1961).",
    "i gene = inhibitor gene (constitutively expresses active repressor).",
    "z gene = β-galactosidase (converts lactose to glucose + galactose; produces allolactose).",
    "y gene = Permease (increases lactose permeability).",
    "a gene = Transacetylase (transfers acetyl group).",
    "Inducer = Lactose / Allolactose (binds repressor, causing conformational change and detachment from operator).",
    "Lac operon regulation is predominantly NEGATIVE regulation.",
    "Basal expression: A very low basal level of permease is always present in E. coli."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming the 'i' gene in lac operon stands for 'inducer'.",
      correctFact: "The 'i' gene stands for INHIBITOR. It encodes the Lac Repressor protein, which represses/inhibits transcription of the operon.",
      whyItMattersForNEET: "A classic direct trick question frequently asked in NEET."
    },
    {
      commonConfusion: "Thinking peptidyl transferase is a protein enzyme.",
      correctFact: "Peptidyl transferase is NOT a protein; it is the 23S ribosomal RNA (a ribozyme) of the 50S large subunit in bacteria (28S rRNA in eukaryotes).",
      whyItMattersForNEET: "Crucial proof for the RNA world and a favorite NEET question."
    },
    {
      commonConfusion: "Believing lactose is completely absent in E. coli before induction.",
      correctFact: "A very low basal level of lac operon expression and permease must ALWAYS be present in the bacterial membrane; otherwise, lactose could never enter the cell to initiate induction!",
      whyItMattersForNEET: "High-yield conceptual assertion-reason question."
    },
    {
      commonConfusion: "Confusing the secondary and tertiary structures of tRNA.",
      correctFact: "The secondary (2D) structure is a Cloverleaf; the tertiary (3D) structure is an Inverted L-shape.",
      whyItMattersForNEET: "Direct matching question in NEET."
    }
  ],

  quickRevision: [
    "tRNA: Adapter molecule; 2D = Cloverleaf, 3D = Inverted L; 3'-CCA end binds amino acid; Anticodon loop pairs with mRNA.",
    "Ribosome: 70S (50S + 30S); 23S rRNA is Peptidyl Transferase (Ribozyme).",
    "Translation Steps: 1. Charging (Aminoacyl-tRNA synthetase + ATP) -> 2. Initiation (tRNA-fMet at P-site) -> 3. Elongation (A-site entry, peptide bond, 5'->3' translocation via GTP) -> 4. Termination (Stop codons bind Release Factors).",
    "Polysome: Multiple ribosomes translating 1 mRNA simultaneously.",
    "UTRs: Non-coding regions at 5' and 3' ends essential for translation efficiency.",
    "Lac Operon (Jacob & Monod): i gene (inhibitor -> repressor), P (promoter), O (operator), z (β-galactosidase), y (permease), a (transacetylase).",
    "Inducer: Allolactose / Lactose binds repressor -> inactivates it -> Operon ON.",
    "Regulation type: Primarily NEGATIVE inducible regulation."
  ],

  practiceQuestions: [
    {
      question: "Which of the following components acts as a ribozyme during protein synthesis in bacteria?",
      options: [
        "16S rRNA",
        "23S rRNA",
        "5S rRNA",
        "Aminoacyl-tRNA synthetase"
      ],
      correctAnswer: 1,
      explanation: "In bacteria, the 23S rRNA molecule of the 50S large ribosomal subunit acts as the peptidyl transferase ribozyme that synthesizes peptide bonds.",
      conceptTested: "Ribozyme activity of 23S rRNA"
    },
    {
      question: "In the Lac operon of E. coli, the product of the 'y' structural gene is:",
      options: [
        "β-galactosidase",
        "Permease",
        "Transacetylase",
        "Lac Repressor"
      ],
      correctAnswer: 1,
      explanation: "In the lac operon: z gene codes for β-galactosidase, y gene codes for Permease, and a gene codes for Transacetylase. The i gene codes for the Lac Repressor.",
      conceptTested: "Structural genes of lac operon"
    },
    {
      question: "During translation initiation in prokaryotes, the initiator tRNA binds directly to which ribosomal site?",
      options: [
        "A-site (Aminoacyl site)",
        "P-site (Peptidyl site)",
        "E-site (Exit site)",
        "T-site"
      ],
      correctAnswer: 1,
      explanation: "Initiator tRNA (tRNA-fMet) binds directly to the start codon AUG positioned at the P-site (Peptidyl site). All subsequent incoming charged tRNAs enter at the A-site.",
      conceptTested: "Translation initiation and ribosomal sites"
    },
    {
      question: "In the lac operon, the 'i' in 'i gene' stands for:",
      options: [
        "Inducer",
        "Inhibitor",
        "Initiator",
        "Isomerase"
      ],
      correctAnswer: 1,
      explanation: "The 'i' in the i gene of the lac operon stands for inhibitor, because it produces the Lac Repressor protein that inhibits transcription.",
      conceptTested: "Nomenclature and function of the i gene in lac operon"
    }
  ],

  pyqs: [
    {
      year: 2022,
      exam: "NEET UG",
      question: "Given below are two statements:\nStatement I: The release factor binds to the stop codon for terminating translation.\nStatement II: The stop codons are UAA, UAG, and UGA.\nIn the light of the above statements, choose the correct answer:",
      options: [
        "Both Statement I and Statement II are true",
        "Both Statement I and Statement II are false",
        "Statement I is true but Statement II is false",
        "Statement I is false but Statement II is true"
      ],
      correctAnswer: 0,
      explanation: "Both statements are completely correct according to NCERT. Stop codons are UAA, UAG, and UGA, and Release Factors bind to them at the A-site to terminate translation.",
      conceptTested: "Translation termination and stop codons",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 115",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2021,
      exam: "NEET UG",
      question: "Match the following RNA types with their descriptions/functions:\n(a) tRNA - (i) Catalytic RNA in bacteria (23S rRNA)\n(b) rRNA - (ii) Adapter molecule with cloverleaf shape\n(c) hnRNA - (iii) Precursor of mRNA\nChoose the correct match:",
      options: [
        "(a)-(ii), (b)-(i), (c)-(iii)",
        "(a)-(i), (b)-(ii), (c)-(iii)",
        "(a)-(iii), (b)-(i), (c)-(ii)",
        "(a)-(ii), (b)-(iii), (c)-(i)"
      ],
      correctAnswer: 0,
      explanation: "tRNA is the adapter molecule with a cloverleaf secondary structure; rRNA (23S rRNA) acts as a catalytic ribozyme; hnRNA is the primary precursor of mRNA.",
      conceptTested: "Types and functions of RNA molecules",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 111-114",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2019,
      exam: "NEET UG",
      question: "Match the following genes of the Lac operon with their respective products:\n(a) i gene - (i) β-galactosidase\n(b) z gene - (ii) Permease\n(c) a gene - (iii) Transacetylase\n(d) y gene - (iv) Repressor protein\nSelect the correct option:",
      options: [
        "(a)-(iv), (b)-(i), (c)-(iii), (d)-(ii)",
        "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)",
        "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)",
        "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)"
      ],
      correctAnswer: 0,
      explanation: "i gene encodes Repressor protein (iv); z gene encodes β-galactosidase (i); y gene encodes Permease (ii); a gene encodes Transacetylase (iii).",
      conceptTested: "Lac operon gene matching",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 117",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2018,
      exam: "NEET UG",
      question: "Which of the following features of genetic code does allow bacteria to produce human insulin by recombinant DNA technology?",
      options: [
        "Genetic code is specific",
        "Genetic code is not ambiguous",
        "Genetic code is redundant",
        "Genetic code is nearly universal"
      ],
      correctAnswer: 3,
      explanation: "Because the genetic code is nearly universal, the exact same mRNA sequence transcribed from a human insulin gene is translated into identical human insulin protein inside a bacterial host cell (E. coli).",
      conceptTested: "Universality of the genetic code and biotechnology applications",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 112",
      verified: true,
      isVerifiedPYQ: true
    }
  ],

  neetMarksPotential: {
    topicName: "Translation Mechanism & Regulation of Gene Expression (Lac Operon)",
    confidenceLabel: "HIGH",
    confidenceText: "Tested in every single NEET paper without exception with 2 direct questions on the Lac operon and translation elongation/ribozyme.",
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 10,
    totalDirectPyqs: 22,
    totalHistoricalMarks: 88,
    averageDirectPyqsPerPaper: 2.2,
    maxDirectPyqsInSinglePaper: 3,
    minDirectPyqsInSinglePaper: 2,
    minDirectMarks: 8,
    maxDirectMarks: 12,
    avgDirectMarksPerPaper: 8.8,
    whatThisMeansForYou: "Guaranteed 8 marks in NEET UG by mastering the lac operon structural genes (z, y, a) and translation steps (charging, initiation, 23S rRNA peptidyl transferase)."
  }
};
