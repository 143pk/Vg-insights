import { DetailedTopicContent } from '../../types/neet';

export const bioDnaSearchStructureDetails: DetailedTopicContent = {
  topicId: "bio-dna-search-structure",
  topicName: "Search for Genetic Material, DNA Double Helix & Packaging",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Molecular Basis of Inheritance",

  whatIsThisTopic: "The historical quest and experimental proof of DNA as the genetic material (Griffith's transformation, Avery-MacLeod-McCarty biochemical characterization, Hershey-Chase bacteriophage experiment), chemical structure of polynucleotide chains, Watson-Crick double helix model, Chargaff's base-pairing rules, and the multi-tier packaging of DNA helix into nucleosomes and chromatin in prokaryotes and eukaryotes.",

  basicIdea: [
    "Genetic material is the molecular substance that stores, replicates, transmits, and expresses biological information governing the structure, physiology, and development of all living organisms.",
    "Frederick Griffith (1928) discovered the 'Transforming Principle' using virulent (Smooth/S) and avirulent (Rough/R) strains of Streptococcus pneumoniae in mice, showing that heat-killed S-strain transferred genetic instructions to living R-strain.",
    "Oswald Avery, Colin MacLeod, and Maclyn McCarty (1944) biochemically proved that the transforming substance was DNA because only Deoxyribonuclease (DNase) destroyed transforming activity, whereas Proteases and RNase had no effect.",
    "Alfred Hershey and Martha Chase (1952) provided unequivocal proof that DNA is the genetic material using T2 bacteriophage labelled with radioactive phosphorus (32P in DNA) and radioactive sulfur (35S in protein coat) infecting Escherichia coli.",
    "DNA is chemically more stable and less reactive than RNA because it possesses 2'-deoxyribose (lacks the reactive 2'-OH group) and contains Thymine (5-methyluracil) instead of Uracil.",
    "James Watson and Francis Crick (1953) proposed the Double Helix model of DNA based on X-ray diffraction data of Rosalind Franklin and Maurice Wilkins. DNA consists of two antiparallel polynucleotide strands coiled in a right-handed helix (diameter 2.0 nm, pitch 3.4 nm, 10 bp/turn, 0.34 nm between base pairs).",
    "Erwin Chargaff (1950) established that in double-stranded DNA, the molar ratio of Adenine equals Thymine (A=T) and Guanine equals Cytosine (G=C), meaning Total Purines = Total Pyrimidines ([A]+[G] = [T]+[C]).",
    "In eukaryotes, 2.2 metres of negatively charged DNA in a diploid cell is condensed around positively charged basic histone octamers (H2A, H2B, H3, H4) to form ~10 nm nucleosomes ('beads-on-a-string'), further packaged into 30 nm solenoid chromatin fibers and higher-order chromosomes with Non-Histone Chromosomal (NHC) proteins."
  ],

  importantTerms: [
    {
      term: "Transformation",
      definition: "The permanent genetic alteration of a bacterial cell caused by the direct uptake, incorporation, and expression of exogenous foreign DNA from its surrounding environment.",
      neetNote: "First observed by Frederick Griffith in 1928 using Streptococcus pneumoniae."
    },
    {
      term: "Bacteriophage",
      definition: "A virus that specifically infects and replicates within bacterial cells (e.g., T2 phage infecting Escherichia coli).",
      neetNote: "Composed solely of an outer protein capsid and an internal DNA core."
    },
    {
      term: "Nucleoside",
      definition: "A nitrogenous base (purine or pyrimidine) covalently linked to the C1' position of a pentose sugar (ribose or deoxyribose) via an N-glycosidic bond, lacking a phosphate group.",
      neetNote: "Examples: Deoxyadenosine, Deoxyguanosine, Deoxycytidine, Deoxythymidine."
    },
    {
      term: "Nucleotide",
      definition: "The basic monomeric building block of nucleic acids, formed when a phosphate group is attached to the 5'-OH of a nucleoside through a phosphoester bond.",
      neetNote: "Nucleotide = Nucleoside + Phosphate group (Deoxyribonucleoside monophosphate)."
    },
    {
      term: "Phosphodiester Bond",
      definition: "The strong covalent bond linking the 3'-OH group of one pentose sugar to the 5'-phosphate group of the adjacent nucleotide in a polynucleotide chain.",
      neetNote: "Forms the continuous structural sugar-phosphate backbone of DNA and RNA."
    },
    {
      term: "Antiparallel Strands",
      definition: "The structural orientation of the two complementary strands in a DNA double helix, where one strand runs in the 5'->3' direction and the opposite strand runs in the 3'->5' direction.",
      neetNote: "Essential for correct complementary hydrogen bonding between opposing nitrogenous bases."
    },
    {
      term: "Purines",
      definition: "Heterocyclic aromatic nitrogenous bases containing a double-ring structure (six-membered pyrimidine ring fused to a five-membered imidazole ring): Adenine (A) and Guanine (G).",
      neetNote: "Form N-glycosidic bonds with the C1' of pentose sugar via their N9 nitrogen atom."
    },
    {
      term: "Pyrimidines",
      definition: "Single-ring six-membered heterocyclic nitrogenous bases: Cytosine (C), Thymine (T, present in DNA), and Uracil (U, present in RNA).",
      neetNote: "Form N-glycosidic bonds with C1' of pentose sugar via their N1 nitrogen atom."
    },
    {
      term: "Pitch of Helix",
      definition: "The longitudinal length along the helical axis required for one complete 360-degree helical turn of DNA, measuring 3.4 nm (34 Angstroms) in B-DNA.",
      neetNote: "Contains 10 base pairs per turn with a 0.34 nm distance between adjacent base pairs."
    },
    {
      term: "Chargaff's Rule",
      definition: "Generalization stating that in any double-stranded DNA molecule, the amount of Adenine equals Thymine (A=T) and Guanine equals Cytosine (G=C), and Purines equal Pyrimidines.",
      neetNote: "Applies STRICTLY to double-stranded DNA (dsDNA); invalid for single-stranded DNA (ssDNA) or RNA."
    },
    {
      term: "Histone Octamer",
      definition: "The positively charged protein core of a nucleosome composed of two copies each of four histone proteins: H2A, H2B, H3, and H4.",
      neetNote: "Rich in basic amino acids Lysine and Arginine carrying positive charges on their side chains."
    },
    {
      term: "Nucleosome",
      definition: "The fundamental repeating structural unit of eukaryotic chromatin, consisting of ~200 base pairs of DNA wrapped in 1.75 turns around a central histone octamer core.",
      neetNote: "Appears as 'beads-on-a-string' under an electron microscope (diameter ~10 nm)."
    },
    {
      term: "H1 Linker Histone",
      definition: "A histone protein that binds to the outside of the nucleosome core at the site where DNA enters and exits, locking the wrapped DNA in place.",
      neetNote: "H1 is NOT part of the histone octamer core; it facilitates packaging into 30 nm solenoid fibers."
    },
    {
      term: "Euchromatin",
      definition: "The loosely packed, lightly staining region of chromatin during interphase that is transcriptionally active and accessible to RNA polymerase.",
      neetNote: "Replicates early in the S phase of the cell cycle."
    },
    {
      term: "Heterochromatin",
      definition: "The densely packed, darkly staining region of chromatin that is transcriptionally inactive/silent and condensed throughout the cell cycle.",
      neetNote: "Replicates late in the S phase; rich in repetitive DNA sequences."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Quest for Genetic Material: Griffith, Avery-MacLeod-McCarty & Hershey-Chase",
      paragraphs: [
        "Inheritance requires a stable molecular carrier capable of storing vast biological information, replicating with high fidelity, undergoing occasional mutations to generate diversity, and expressing traits through cellular metabolism. Early 20th-century biologists widely assumed proteins were the genetic material due to their 20 varied amino acids compared to only 4 nucleotides in DNA.",
        "In 1928, Frederick Griffith performed landmark transformation experiments on Streptococcus pneumoniae (Diplococcus pneumoniae), the bacterium causing pneumonia in mammals. He worked with two distinct strains: the Smooth (S) strain, which produces a shiny mucous polysaccharide capsule, is virulent, pathogenic, and kills mice; and the Rough (R) strain, which lacks a capsule, forms rough colonies, is non-virulent/avirulent, and is cleared by the host immune system.",
        "Griffith conducted four sequential sets of injections into laboratory mice: (1) Live S-strain injected -> Mouse developed pneumonia and died. (2) Live R-strain injected -> Mouse remained healthy and survived. (3) Heat-killed S-strain injected -> Mouse remained healthy and survived. (4) Heat-killed S-strain mixed with Live R-strain injected -> Mice developed pneumonia and died. Upon autopsy of the dead mice from step 4, Griffith isolated living, virulent S-strain bacteria!",
        "Griffith concluded that some biochemical component from the heat-killed S-strain had been transferred into the living R-strain, transforming it into a virulent, capsule-producing S-strain. He termed this unknown component the 'Transforming Principle'. However, Griffith could not determine the biochemical nature of this transforming substance.",
        "In 1944, Oswald Avery, Colin MacLeod, and Maclyn McCarty purified the biochemical constituents (proteins, RNA, DNA) from large cultures of heat-killed S-cells to systematically test which macromolecule converted live R-cells into S-cells. They discovered that: (a) Adding Proteases (protein-digesting enzymes) did NOT prevent transformation; (b) Adding RNase (RNA-digesting enzyme) did NOT prevent transformation; (c) Adding DNase (Deoxyribonuclease) completely and permanently DESTROYED transforming activity. They concluded that DNA is the hereditary transforming substance, though many conservative biologists still doubted it until Hershey and Chase's work.",
        "In 1952, Alfred Hershey and Martha Chase provided the unequivocal, universally accepted proof that DNA is the genetic material using the T2 bacteriophage, a virus that infects Escherichia coli. A bacteriophage consists exclusively of an outer protein capsid shell and an inner core of double-stranded DNA. They grew one batch of bacteriophages on E. coli in a medium containing radioactive Phosphorus (32P), which was incorporated exclusively into viral DNA (since DNA contains phosphorus while proteins do not). They grew a second batch of phages in a medium containing radioactive Sulfur (35S), which was incorporated exclusively into viral protein capsids (since methionine and cysteine contain sulfur while DNA does not).",
        "The Hershey-Chase experiment proceeded in three distinct, precisely ordered steps: (1) Infection: Radioactive 32P-phages and 35S-phages were allowed to attach and inject their genetic material into separate cultures of E. coli. (2) Blending: The cultures were agitated in a high-speed Waring blender to mechanically shear and detach the empty viral protein coats ('phage ghosts') from the bacterial cell surface. (3) Centrifugation: The mixtures were spun at high speed to separate the heavy bacterial cells (which formed a pellet at the bottom of the tube) from the light viral coats suspended in the liquid supernatant.",
        "The experimental outcome was decisive: In the 35S experiment, radioactivity was detected almost exclusively in the supernatant (viral coats remained outside), with virtually no radioactivity inside the bacterial pellet. In the 32P experiment, radioactivity was detected inside the bacterial pellet, and newly synthesized progeny phages emerging from the lysed bacteria were radioactive. This proved conclusively that DNA—not protein—enters the host cell and carries the complete genetic program for viral reproduction."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="380" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="28" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Hershey &amp; Chase Experiment (1952) — Unequivocal Proof of DNA as Genetic Material</text>
  
  <!-- Left Panel: 35S Protein Coat -->
  <g transform="translate(40, 45)">
    <rect width="320" height="315" fill="#ffffff" rx="8" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="4 2"/>
    <text x="160" y="24" fill="#be123c" font-size="14" font-weight="bold" text-anchor="middle">Experiment A: ³⁵S-labelled Protein Coat</text>
    
    <!-- Step 1: Infection -->
    <circle cx="80" cy="70" r="18" fill="#ffe4e6" stroke="#f43f5e" stroke-width="2"/>
    <path d="M 80 88 L 80 105 M 72 96 L 65 110 M 88 96 L 95 110" stroke="#f43f5e" stroke-width="2"/>
    <rect x="50" y="105" width="60" height="30" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <text x="175" y="85" fill="#334155" font-size="11" font-weight="bold">1. Infection:</text>
    <text x="175" y="102" fill="#64748b" font-size="10">³⁵S in protein capsid</text>
    <text x="175" y="116" fill="#64748b" font-size="10">DNA enters bacterium</text>

    <!-- Step 2: Blending -->
    <path d="M 160 145 L 160 165" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-hchase)"/>
    <text x="160" y="180" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">2. Blending (Agitation):</text>
    <text x="160" y="195" fill="#64748b" font-size="10" text-anchor="middle">Detaches viral coats from cell surface</text>

    <!-- Step 3: Centrifugation -->
    <path d="M 160 205 L 160 225" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-hchase)"/>
    <rect x="70" y="235" width="180" height="50" rx="6" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="160" y="255" fill="#be123c" font-size="11" font-weight="bold" text-anchor="middle">Supernatant: High Radioactivity (³⁵S)</text>
    <text x="160" y="272" fill="#475569" font-size="10" text-anchor="middle">Pellet (Cells): NO Radioactivity detected</text>
    <text x="160" y="300" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">Conclusion: Protein does NOT enter bacteria</text>
  </g>

  <!-- Right Panel: 32P DNA -->
  <g transform="translate(400, 45)">
    <rect width="320" height="315" fill="#ffffff" rx="8" stroke="#059669" stroke-width="1.5"/>
    <text x="160" y="24" fill="#065f46" font-size="14" font-weight="bold" text-anchor="middle">Experiment B: ³²P-labelled DNA Core</text>
    
    <!-- Step 1: Infection -->
    <circle cx="80" cy="70" r="18" fill="#f0fdf4" stroke="#059669" stroke-width="2"/>
    <circle cx="80" cy="70" r="8" fill="#86efac"/>
    <path d="M 80 88 L 80 105 M 72 96 L 65 110 M 88 96 L 95 110" stroke="#059669" stroke-width="2"/>
    <rect x="50" y="105" width="60" height="30" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 65 120 Q 80 112 95 120" stroke="#059669" stroke-width="2" fill="none"/>
    <text x="175" y="85" fill="#334155" font-size="11" font-weight="bold">1. Infection:</text>
    <text x="175" y="102" fill="#64748b" font-size="10">³²P in core DNA</text>
    <text x="175" y="116" fill="#059669" font-size="10" font-weight="bold">³²P DNA enters bacterium</text>

    <!-- Step 2: Blending -->
    <path d="M 160 145 L 160 165" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-hchase)"/>
    <text x="160" y="180" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">2. Blending (Agitation):</text>
    <text x="160" y="195" fill="#64748b" font-size="10" text-anchor="middle">Viral coats detached, DNA remains inside</text>

    <!-- Step 3: Centrifugation -->
    <path d="M 160 205 L 160 225" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-hchase)"/>
    <rect x="70" y="235" width="180" height="50" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
    <text x="160" y="255" fill="#475569" font-size="10" text-anchor="middle">Supernatant: NO Radioactivity</text>
    <text x="160" y="272" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">Pellet (Cells): High Radioactivity (³²P)</text>
    <text x="160" y="300" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Conclusion: DNA enters &amp; is genetic material</text>
  </g>

  <defs>
    <marker id="arr-hchase" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/>
    </marker>
  </defs>
</svg>`,
        caption: "Hershey & Chase Experiment (1952) showing the fate of 35S (protein) in supernatant vs 32P (DNA) in bacterial pellet.",
        guide: "WHAT TO OBSERVE: Note the 3 sequential stages (Infection -> Blending -> Centrifugation). Observe that 35S is found in the supernatant because protein coats remain outside, whereas 32P is found in the bacterial pellet because DNA enters the cell."
      },
      importantPoints: [
        "Griffith: S. pneumoniae (S-strain virulent/capsulated vs R-strain avirulent/non-capsulated); heat-killed S + live R killed mice -> discovered Transformation.",
        "Avery, MacLeod, McCarty (1944): Only DNase inhibited transformation; Protease and RNase had no effect -> biochemical proof that DNA is the transforming principle.",
        "Hershey & Chase (1952): Used T2 bacteriophage and E. coli with 32P (DNA) and 35S (protein) -> unequivocal proof that DNA is genetic material.",
        "Correct order of steps in Hershey-Chase: 1. Infection -> 2. Blending -> 3. Centrifugation."
      ]
    },
    {
      heading: "2. Chemical Structure of Polynucleotide Chain & Watson-Crick DNA Double Helix",
      paragraphs: [
        "A polynucleotide chain is a polymeric macromolecule constructed from repeating monomeric units called nucleotides. Each nucleotide is composed of three distinct chemical parts: (1) A nitrogenous base (heterocyclic aromatic ring containing nitrogen); (2) A five-carbon pentose sugar (β-D-ribose in RNA or β-D-2-deoxyribose in DNA); and (3) A phosphate group (derived from phosphoric acid, H3PO4).",
        "Nitrogenous bases are categorized into two classes: Purines are larger, double-ringed structures consisting of Adenine (A) and Guanine (G). Pyrimidines are smaller, single-ringed structures consisting of Cytosine (C), Thymine (T, found exclusively in DNA; chemically 5-methyluracil), and Uracil (U, found in RNA in place of thymine).",
        "Chemical Linkages in Polynucleotides: (a) N-Glycosidic Linkage: The C1' carbon of the pentose sugar links covalently to the N9 of a purine or N1 of a pyrimidine, producing a Nucleoside. (b) Phosphoester Linkage: A phosphate group is esterified to the 5'-OH of the pentose sugar, producing a Nucleotide. (c) 3'-5' Phosphodiester Linkage: The 3'-OH group of one nucleotide's sugar forms a phosphodiester bridge with the 5'-phosphate group of the succeeding nucleotide, forming the continuous backbone of the polymer.",
        "Because of this specific bonding pattern, a polynucleotide strand has polarity: One end possesses a free phosphate moiety at the 5'-position of the terminal sugar (the 5' end), and the other end possesses a free hydroxyl (-OH) group at the 3'-position of the terminal sugar (the 3' end).",
        "In 1953, James Watson and Francis Crick elucidated the secondary structure of double-stranded B-DNA based on X-ray diffraction photographs produced by Rosalind Franklin and Maurice Wilkins. The salient features of the Watson-Crick Double Helix model are:",
        "1. Antiparallel Polarity: DNA consists of two helical polynucleotide chains wound around a common central axis. The two chains run in opposite directions—if one chain runs 5'->3', the complementary partner chain runs 3'->5'.",
        "2. Sugar-Phosphate Backbone & Base Pairing: The hydrophilic sugar-phosphate backbones form the outer structural rails of the helix, while the hydrophobic nitrogenous bases project inward into the interior of the helix perpendicular to the central axis.",
        "3. Complementary Hydrogen Bonding: Adenine always pairs strictly with Thymine through TWO hydrogen bonds (A=T), and Guanine always pairs strictly with Cytosine through THREE hydrogen bonds (G≡C). This ensures that a purine is always paired opposite a pyrimidine, maintaining a strictly uniform diameter of 2.0 nm (20 Å) throughout the entire length of the DNA molecule.",
        "4. Helical Dimensions: B-DNA is a right-handed helix. The pitch of the helix (length of one complete 360° turn) is 3.4 nm (34 Å). There are approximately 10 base pairs per helical turn, meaning the axial distance between two adjacent base pairs is 0.34 nm (3.4 Å).",
        "5. Base Stacking & Stability: In addition to hydrogen bonding, the planar, aromatic base pairs stack directly on top of one another like steps on a spiral staircase. This hydrophobic base stacking provides tremendous thermodynamic and conformational stability to the double helix.",
        "Erwin Chargaff formulated quantitative base-composition rules (Chargaff's Rules) for double-stranded DNA: (1) [A] = [T] and [G] = [C]; (2) Total Purines = Total Pyrimidines ([A] + [G] = [T] + [C], or (A+G)/(T+C) = 1.0); (3) The base ratio (A+T)/(G+C) is constant for a particular biological species, but varies widely between different species (e.g., E. coli DNA is GC-rich with ratio ~0.93, while human DNA is AT-rich with ratio ~1.52)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="740" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="370" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Watson &amp; Crick B-DNA Double Helix Model (1953) — Structural Dimensions</text>

  <!-- Sugar-Phosphate Backbone Left (5' to 3') -->
  <path d="M 160 50 Q 110 130 160 210 T 160 330" fill="none" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/>
  <text x="135" y="55" fill="#1e40af" font-size="12" font-weight="bold">5' End</text>
  <text x="135" y="340" fill="#1e40af" font-size="12" font-weight="bold">3' End</text>

  <!-- Sugar-Phosphate Backbone Right (3' to 5') -->
  <path d="M 320 50 Q 370 130 320 210 T 320 330" fill="none" stroke="#0284c7" stroke-width="7" stroke-linecap="round"/>
  <text x="345" y="55" fill="#0369a1" font-size="12" font-weight="bold">3' End</text>
  <text x="345" y="340" fill="#0369a1" font-size="12" font-weight="bold">5' End</text>

  <!-- Base Pairs with Hydrogen Bonds -->
  <!-- Pair 1: A = T -->
  <line x1="162" y1="75" x2="230" y2="75" stroke="#ef4444" stroke-width="5"/>
  <text x="210" y="70" fill="#b91c1c" font-size="11" font-weight="bold">A</text>
  <line x1="230" y1="73" x2="250" y2="73" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="230" y1="77" x2="250" y2="77" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="250" y1="75" x2="318" y2="75" stroke="#f59e0b" stroke-width="5"/>
  <text x="265" y="70" fill="#d97706" font-size="11" font-weight="bold">T</text>

  <!-- Pair 2: G = C -->
  <line x1="140" y1="110" x2="225" y2="110" stroke="#10b981" stroke-width="5"/>
  <text x="205" y="105" fill="#047857" font-size="11" font-weight="bold">G</text>
  <line x1="225" y1="107" x2="255" y2="107" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="225" y1="110" x2="255" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="225" y1="113" x2="255" y2="113" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="255" y1="110" x2="340" y2="110" stroke="#6366f1" stroke-width="5"/>
  <text x="270" y="105" fill="#4338ca" font-size="11" font-weight="bold">C</text>

  <!-- Pair 3: T = A -->
  <line x1="125" y1="145" x2="230" y2="145" stroke="#f59e0b" stroke-width="5"/>
  <text x="210" y="140" fill="#d97706" font-size="11" font-weight="bold">T</text>
  <line x1="230" y1="143" x2="250" y2="143" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="230" y1="147" x2="250" y2="147" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="250" y1="145" x2="355" y2="145" stroke="#ef4444" stroke-width="5"/>
  <text x="265" y="140" fill="#b91c1c" font-size="11" font-weight="bold">A</text>

  <!-- Pair 4: C = G -->
  <line x1="140" y1="180" x2="225" y2="180" stroke="#6366f1" stroke-width="5"/>
  <text x="205" y="175" fill="#4338ca" font-size="11" font-weight="bold">C</text>
  <line x1="225" y1="177" x2="255" y2="177" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="225" y1="180" x2="255" y2="180" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="225" y1="183" x2="255" y2="183" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="255" y1="180" x2="340" y2="180" stroke="#10b981" stroke-width="5"/>
  <text x="270" y="175" fill="#047857" font-size="11" font-weight="bold">G</text>

  <!-- Pair 5: A = T -->
  <line x1="160" y1="215" x2="230" y2="215" stroke="#ef4444" stroke-width="5"/>
  <text x="210" y="210" fill="#b91c1c" font-size="11" font-weight="bold">A</text>
  <line x1="230" y1="213" x2="250" y2="213" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="230" y1="217" x2="250" y2="217" stroke="#64748b" stroke-width="2" stroke-dasharray="3 2"/>
  <line x1="250" y1="215" x2="320" y2="215" stroke="#f59e0b" stroke-width="5"/>
  <text x="265" y="210" fill="#d97706" font-size="11" font-weight="bold">T</text>

  <!-- Pair 6: G = C -->
  <line x1="180" y1="250" x2="225" y2="250" stroke="#10b981" stroke-width="5"/>
  <text x="205" y="245" fill="#047857" font-size="11" font-weight="bold">G</text>
  <line x1="225" y1="247" x2="255" y2="247" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="225" y1="250" x2="255" y2="250" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="225" y1="253" x2="255" y2="253" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
  <line x1="255" y1="250" x2="300" y2="250" stroke="#6366f1" stroke-width="5"/>
  <text x="270" y="245" fill="#4338ca" font-size="11" font-weight="bold">C</text>

  <!-- Dimension Annotations -->
  <!-- Diameter -->
  <line x1="160" y1="315" x2="320" y2="315" stroke="#0f172a" stroke-width="1.5" marker-start="url(#arr-dim)" marker-end="url(#arr-dim)"/>
  <text x="240" y="335" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Diameter = 2.0 nm (20 Å)</text>

  <!-- Pitch bracket -->
  <path d="M 390 60 L 405 60 L 405 155 L 415 155 L 405 155 L 405 250 L 390 250" fill="none" stroke="#0f172a" stroke-width="1.5"/>
  <text x="425" y="145" fill="#0f172a" font-size="11" font-weight="bold">1 Complete Turn (Pitch)</text>
  <text x="425" y="162" fill="#2563eb" font-size="12" font-weight="bold">= 3.4 nm (34 Å)</text>
  <text x="425" y="178" fill="#64748b" font-size="10">10 base pairs per turn</text>

  <!-- Distance between base pairs -->
  <path d="M 85 75 L 70 75 L 70 92 L 60 92 L 70 92 L 70 110 L 85 110" fill="none" stroke="#0f172a" stroke-width="1.5"/>
  <text x="50" y="96" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="end">Distance = 0.34 nm (3.4 Å)</text>

  <!-- Right Legend Box -->
  <g transform="translate(480, 200)">
    <rect width="235" height="135" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1"/>
    <text x="12" y="20" fill="#0f172a" font-size="11" font-weight="bold">Chargaff's Rules (dsDNA):</text>
    <text x="12" y="38" fill="#334155" font-size="10">• [A] = [T] and [G] = [C]</text>
    <text x="12" y="54" fill="#334155" font-size="10">• Purines = Pyrimidines (A+G = T+C)</text>
    <text x="12" y="70" fill="#334155" font-size="10">• (A+G)/(T+C) = 1.0</text>
    <text x="12" y="88" fill="#059669" font-size="10" font-weight="bold">• A=T (2 H-bonds) | G≡C (3 H-bonds)</text>
    <text x="12" y="106" fill="#be123c" font-size="10" font-weight="bold">• (A+T)/(G+C) is species-specific</text>
    <text x="12" y="122" fill="#64748b" font-size="9">Invalid for single-stranded DNA / RNA</text>
  </g>

  <defs>
    <marker id="arr-dim" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 5 L 10 0 L 10 10 z" fill="#0f172a"/>
    </marker>
  </defs>
</svg>`,
        caption: "Watson & Crick Double Helix model displaying antiparallel strands, complementary hydrogen base pairs, diameter (2.0 nm), pitch (3.4 nm), and 0.34 nm distance between adjacent base pairs.",
        guide: "WHAT TO OBSERVE: Look at the opposite polarities of the two strands (5'->3' on left vs 3'->5' on right). Notice 2 hydrogen bonds between A and T, and 3 hydrogen bonds between G and C. Note the standard dimensions: 2.0 nm diameter, 3.4 nm pitch per 10 base pairs, and 0.34 nm spacing."
      },
      importantPoints: [
        "Nitrogenous base attached to C1' of sugar by N-glycosidic bond; phosphate attached to C5'-OH by phosphoester bond.",
        "Adjacent nucleotides joined by 3'-5' phosphodiester bonds, giving polarity (free 5'-phosphate and free 3'-OH).",
        "A=T joined by 2 hydrogen bonds; G≡C joined by 3 hydrogen bonds.",
        "Diameter of double helix = 2.0 nm (constant because a purine always pairs with a pyrimidine).",
        "Pitch of helix = 3.4 nm (10 base pairs per turn); distance between adjacent base pairs = 0.34 nm.",
        "Chargaff's Rule: In dsDNA, [A] = [T], [G] = [C], Purines = Pyrimidines; (A+G)/(T+C) = 1."
      ]
    },
    {
      heading: "3. Packaging of DNA: Prokaryotic Nucleoid & Eukaryotic Nucleosome Organization",
      paragraphs: [
        "The physical dimensions of cellular DNA present a monumental packaging challenge. In a typical diploid human somatic cell, the total number of base pairs is 6.6 x 10^9 bp. Given that the distance between adjacent base pairs is 0.34 x 10^-9 m (0.34 nm), the total linear length of DNA in a single human diploid nucleus is: Length = (6.6 x 10^9 bp) x (0.34 x 10^-9 m/bp) = 2.244 metres (~2.2 m). This enormous 2.2-metre thread must be packaged inside a microscopic nucleus measuring only about 10^-6 m (10 μm) in diameter—a compaction ratio exceeding 10,000-fold!",
        "Packaging in Prokaryotes (e.g., E. coli): Prokaryotes lack a membrane-bound nucleus, yet their DNA (length ~1.36 mm; 4.6 x 10^6 bp) is not scattered haphazardly throughout the cytoplasm. Instead, the negatively charged circular double-stranded DNA is organized into large, condensed loops held together by positively charged, non-histone polyamine proteins in a distinct cellular region known as the **Nucleoid**.",
        "Packaging in Eukaryotes — The Nucleosome Model: In eukaryotic cells, DNA packaging is carried out by specialized basic proteins called **Histones**. Histones acquire a net positive charge due to an abundance of basic amino acid residues with positively charged side chains—specifically **Lysine** and **Arginine**. Histones are organized into an octameric protein core called the **Histone Octamer** (Nu-body core), consisting of two molecules each of four core histone proteins: H2A, H2B, H3, and H4.",
        "A **Nucleosome** consists of a histone octamer wrapped by approximately 1.75 turns (wrapping ~200 base pairs) of negatively charged DNA (due to phosphate groups in its backbone). Under an electron microscope, chromatin appears as a repeating 'beads-on-a-string' structure, where the nucleosomes are the 'beads' (diameter ~10 nm) and the intervening DNA between nucleosomes is the 'string' (Linker DNA, ~54 bp).",
        "The **H1 Histone (Linker Histone)** sits on the outside of the nucleosome bead at the entry and exit points of DNA, securing the coiled DNA in place. H1 is NOT part of the core octamer.",
        "Higher-Order Chromatin Organization: The 10 nm 'beads-on-a-string' nucleosome filament coils helically (6 nucleosomes per turn) to form a 30 nm **Solenoid Fiber**. The solenoid fibers further loop around a non-histone protein scaffold to form 300 nm loops, which condense during cell division into 700 nm chromatids and finally into the 1400 nm metaphase chromosome. Packaging of chromatin at higher levels requires additional sets of proteins referred to as **Non-Histone Chromosomal (NHC) Proteins**.",
        "Euchromatin vs Heterochromatin in Interphase Nucleus: (1) **Euchromatin**: Loosely coiled, light-staining region of chromatin that is transcriptionally active and accessible to RNA polymerase. Replicates early in S-phase. (2) **Heterochromatin**: Densely packed, dark-staining region of chromatin that is transcriptionally inactive/silent. Replicates late in S-phase."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="740" height="340" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="370" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Nucleosome Structure &amp; Chromatin Packaging Hierarchy in Eukaryotes</text>

  <!-- Left: Single Nucleosome Detailed -->
  <g transform="translate(30, 45)">
    <rect width="330" height="275" fill="#ffffff" rx="8" stroke="#6366f1" stroke-width="1.5"/>
    <text x="165" y="24" fill="#4338ca" font-size="13" font-weight="bold" text-anchor="middle">Nucleosome Core Particle (~10 nm)</text>

    <!-- Histone Octamer Core -->
    <ellipse cx="165" cy="120" rx="65" ry="50" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5"/>
    <text x="165" y="112" fill="#312e81" font-size="12" font-weight="bold" text-anchor="middle">Histone Octamer Core</text>
    <text x="165" y="130" fill="#4338ca" font-size="10" text-anchor="middle">2 × (H2A, H2B, H3, H4)</text>
    <text x="165" y="145" fill="#6366f1" font-size="9" text-anchor="middle">Rich in Lysine &amp; Arginine (+ve charge)</text>

    <!-- DNA Wrapping ~1.75 turns (200 bp) -->
    <path d="M 50 145 C 70 60, 260 60, 280 145 C 290 200, 40 200, 50 145" fill="none" stroke="#ef4444" stroke-width="5"/>
    <text x="165" y="62" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">DNA (~200 bp, -ve charge)</text>

    <!-- H1 Linker Histone -->
    <rect x="40" y="135" width="28" height="50" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
    <text x="54" y="165" fill="#854d0e" font-size="10" font-weight="bold" text-anchor="middle">H1</text>
    <text x="80" y="200" fill="#854d0e" font-size="10" font-weight="bold">H1 Linker Histone</text>

    <!-- Linker DNA -->
    <path d="M 50 185 L 20 230 M 280 145 L 310 230" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
    <text x="165" y="245" fill="#475569" font-size="10" text-anchor="middle">Linker DNA (~54 bp) connecting nucleosomes</text>
    <text x="165" y="262" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">"Beads-on-a-string" Structure</text>
  </g>

  <!-- Right: Packaging Hierarchy & Euchromatin vs Heterochromatin -->
  <g transform="translate(380, 45)">
    <rect width="330" height="275" fill="#ffffff" rx="8" stroke="#059669" stroke-width="1.5"/>
    <text x="165" y="24" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Compaction Hierarchy &amp; Chromatin Types</text>

    <g transform="translate(15, 38)">
      <rect x="0" y="0" width="300" height="24" rx="4" fill="#f1f5f9"/>
      <text x="10" y="16" fill="#0f172a" font-size="10" font-weight="bold">2 nm DNA Double Helix</text>
      <text x="290" y="16" fill="#64748b" font-size="10" text-anchor="end">2.2 m total length</text>

      <rect x="0" y="28" width="300" height="24" rx="4" fill="#ede9fe"/>
      <text x="10" y="44" fill="#5b21b6" font-size="10" font-weight="bold">10 nm Beads-on-a-string</text>
      <text x="290" y="44" fill="#5b21b6" font-size="10" text-anchor="end">Nucleosome filament</text>

      <rect x="0" y="56" width="300" height="24" rx="4" fill="#e0e7ff"/>
      <text x="10" y="72" fill="#3730a3" font-size="10" font-weight="bold">30 nm Solenoid Fiber</text>
      <text x="290" y="72" fill="#3730a3" font-size="10" text-anchor="end">6 nucleosomes/turn</text>

      <rect x="0" y="84" width="300" height="24" rx="4" fill="#dbeafe"/>
      <text x="10" y="100" fill="#1e40af" font-size="10" font-weight="bold">300 nm Chromatin Loops</text>
      <text x="290" y="100" fill="#1e40af" font-size="10" text-anchor="end">Anchored by NHC</text>

      <rect x="0" y="112" width="300" height="24" rx="4" fill="#ccfbf1"/>
      <text x="10" y="128" fill="#115e59" font-size="10" font-weight="bold">1400 nm Metaphase Chromosome</text>
      <text x="290" y="128" fill="#115e59" font-size="10" text-anchor="end">Maximum condensation</text>
    </g>

    <!-- Comparison Table Box -->
    <g transform="translate(15, 185)">
      <rect width="300" height="80" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="75" y="18" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Euchromatin</text>
      <text x="225" y="18" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">Heterochromatin</text>
      <line x1="150" y1="5" x2="150" y2="75" stroke="#cbd5e1" stroke-width="1"/>
      <text x="10" y="36" fill="#334155" font-size="9">• Loosely packed</text>
      <text x="160" y="36" fill="#334155" font-size="9">• Densely packed</text>
      <text x="10" y="52" fill="#334155" font-size="9">• Stains LIGHT</text>
      <text x="160" y="52" fill="#334155" font-size="9">• Stains DARK</text>
      <text x="10" y="68" fill="#047857" font-size="9" font-weight="bold">• Active transcription</text>
      <text x="160" y="68" fill="#be123c" font-size="9" font-weight="bold">• Inactive / Silent</text>
    </g>
  </g>
</svg>`,
        caption: "Structure of the eukaryotic nucleosome core showing histone octamer, H1 linker histone, 200 bp wrapped DNA, and the chromatin packaging hierarchy.",
        guide: "WHAT TO OBSERVE: Identify the histone octamer core (2 copies each of H2A, H2B, H3, H4) carrying positive charge, wrapped by ~200 bp of negatively charged DNA. Note that H1 linker histone binds to the exterior. Compare Euchromatin (light, active) and Heterochromatin (dark, inactive)."
      },
      importantPoints: [
        "Length of DNA in human diploid cell = 6.6 x 10^9 bp x 0.34 x 10^-9 m = 2.24 m (~2.2 m).",
        "Length of DNA in E. coli = 4.6 x 10^6 bp x 0.34 x 10^-9 m = 1.36 mm.",
        "Histones are rich in basic amino acids Lysine and Arginine (+ve charge).",
        "Histone octamer consists of 2 each of H2A, H2B, H3, H4 (total 8 histone proteins in core).",
        "H1 is the Linker Histone and is NOT part of the core octamer.",
        "A typical nucleosome contains ~200 base pairs of DNA helix.",
        "Euchromatin: loosely packed, light staining, transcriptionally ACTIVE.",
        "Heterochromatin: densely packed, dark staining, transcriptionally INACTIVE."
      ]
    }
  ],

  formulae: [
    {
      title: "DNA Length in Cell Calculation",
      formula: "\\text{Length of DNA (m)} = \\text{Total Number of Base Pairs} \\times 0.34 \\times 10^{-9} \\text{ m/bp}",
      meaning: "Calculates the physical linear length of double-stranded DNA in a cell.",
      symbols: "bp = base pairs; 0.34 nm = distance between adjacent base pairs",
      unit: "metres (m)",
      conditions: "Applies to standard B-DNA double helix.",
      calculationExample: {
        problem: "Calculate the total length of DNA in a human diploid cell having 6.6 x 10^9 base pairs.",
        given: "Total bp = 6.6 x 10^9; Distance between adjacent bp = 0.34 nm = 0.34 x 10^-9 m",
        stepByStep: [
          "Step 1: Length = (6.6 x 10^9) x (0.34 x 10^-9 m)",
          "Step 2: Length = 6.6 x 0.34 m = 2.244 m"
        ],
        answer: "2.244 metres (~2.2 m)"
      }
    },
    {
      title: "Chargaff's Equivalence Rule",
      formula: "[\\text{A}] = [\\text{T}], \\quad [\\text{G}] = [\\text{C}], \\quad \\frac{[\\text{A}]+[\\text{G}]}{[\\text{T}]+[\\text{C}]} = 1.0",
      meaning: "In any double-stranded DNA, the molar percentage of purines equals pyrimidines.",
      symbols: "A = Adenine, T = Thymine, G = Guanine, C = Cytosine",
      unit: "Percentage (%) or molar ratio",
      conditions: "STRICTLY valid for double-stranded DNA (dsDNA); invalid for single-stranded DNA (ssDNA) or RNA.",
      calculationExample: {
        problem: "A double-stranded DNA sample has 20% Cytosine. Calculate the percentage of Adenine in this DNA sample.",
        given: "Cytosine (C) = 20%",
        stepByStep: [
          "Step 1: According to Chargaff's rule, % Guanine (G) = % Cytosine (C) = 20%.",
          "Step 2: Total (G + C) = 20% + 20% = 40%.",
          "Step 3: Total (A + T) = 100% - 40% = 60%.",
          "Step 4: Since % A = % T, % Adenine = 60% / 2 = 30%."
        ],
        answer: "30% Adenine"
      }
    },
    {
      title: "Number of Nucleosomes in Genome",
      formula: "\\text{Number of Nucleosomes} = \\frac{\\text{Total Number of Base Pairs in Genome}}{200 \\text{ bp per nucleosome}}",
      meaning: "Estimates the total number of nucleosome core particles packaging the eukaryotic genome.",
      symbols: "Total bp = base pairs in genome (e.g., 6.6 x 10^9 for human diploid cell)",
      unit: "Nucleosomes",
      conditions: "Standard eukaryotic nucleosomal packaging (~200 bp/nucleosome).",
      calculationExample: {
        problem: "Calculate the approximate number of nucleosomes present in a human diploid cell containing 6.6 x 10^9 base pairs.",
        given: "Total bp = 6.6 x 10^9; 1 nucleosome = 200 bp",
        stepByStep: [
          "Step 1: Number of nucleosomes = (6.6 x 10^9) / 200",
          "Step 2: Number = 3.3 x 10^7 nucleosomes (33 million nucleosomes)"
        ],
        answer: "3.3 x 10^7 (33 million) nucleosomes"
      }
    }
  ],

  neetImportantPoints: [
    "Griffith used Streptococcus pneumoniae (Pneumococcus); S-strain is virulent (mucous polysaccharide coat), R-strain is non-virulent.",
    "Heat-killed S + Live R killed mice -> live S bacteria recovered -> discovered Transformation.",
    "Avery, MacLeod & McCarty (1944) discovered DNase inhibits transformation; Protease & RNase do not.",
    "Hershey & Chase (1952) used 32P (labelled DNA) and 35S (labelled protein) with T2 phage and E. coli.",
    "Supernatant in Hershey-Chase had 35S (viral protein ghosts); Pellet had 32P (bacterial cells with viral DNA).",
    "DNA is chemically more stable than RNA because it lacks 2'-OH group on ribose and contains Thymine instead of Uracil.",
    "RNA is labile, catalytic (ribozyme), and easily degradable due to the reactive 2'-OH group on ribose.",
    "Watson & Crick model (1953) was based on X-ray diffraction data of Rosalind Franklin & Maurice Wilkins.",
    "B-DNA is a right-handed helix with diameter 2.0 nm (20 Å), pitch 3.4 nm (34 Å), and 10 bp per turn.",
    "Distance between adjacent base pairs in B-DNA is 0.34 nm (3.4 Å).",
    "A pairs with T via 2 hydrogen bonds; G pairs with C via 3 hydrogen bonds.",
    "Chargaff's rules apply ONLY to double-stranded DNA; they do NOT apply to ssDNA (e.g., φX174 phage) or RNA.",
    "Human diploid cell DNA length = 2.24 metres (6.6 x 10^9 bp).",
    "E. coli DNA length = 1.36 mm (4.6 x 10^6 bp).",
    "Histone octamer consists of two copies each of H2A, H2B, H3, and H4.",
    "H1 histone is the Linker Histone and is NOT part of the core octamer.",
    "Histones are rich in basic amino acids Lysine and Arginine carrying net positive charge.",
    "A single nucleosome wraps approximately 200 base pairs of DNA.",
    "Euchromatin: loosely coiled, light staining, transcriptionally ACTIVE.",
    "Heterochromatin: densely packed, dark staining, transcriptionally INACTIVE (silent)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming Chargaff's rule (A=T and G=C) applies to all forms of nucleic acids.",
      correctFact: "Chargaff's rule applies strictly to DOUBLE-STRANDED DNA (dsDNA). It does NOT apply to single-stranded DNA (such as in φX174 phage) or to RNA.",
      whyItMattersForNEET: "NEET often gives base percentages where A≠T or G≠C and asks to identify the nucleic acid (the answer is single-stranded DNA or RNA)."
    },
    {
      commonConfusion: "Confusing 35S and 32P labels in the Hershey-Chase experiment.",
      correctFact: "35S labels PROTEIN (cysteine/methionine amino acids have sulfur; DNA has no sulfur). 32P labels DNA (phosphate group in nucleotide backbone has phosphorus; protein has no phosphorus).",
      whyItMattersForNEET: "Direct assertion-reason and matching questions test the specific radioactive isotopes."
    },
    {
      commonConfusion: "Believing H1 histone is inside the histone octamer core.",
      correctFact: "H1 is a linker histone that sits outside the nucleosome core at the entry/exit site of DNA. The core octamer consists only of 2 molecules each of H2A, H2B, H3, and H4.",
      whyItMattersForNEET: "A recurring NCERT diagram-based trap question."
    },
    {
      commonConfusion: "Assuming Euchromatin is dark-staining and inactive while Heterochromatin is active.",
      correctFact: "Euchromatin is LOOSELY packed, stains LIGHT, and is transcriptionally ACTIVE. Heterochromatin is DENSELY packed, stains DARK, and is transcriptionally INACTIVE.",
      whyItMattersForNEET: "Very frequent true/false and statement-matching question in NEET."
    },
    {
      commonConfusion: "Thinking Griffith proved that DNA was the genetic material.",
      correctFact: "Griffith discovered the phenomenon of transformation and postulated the 'transforming principle' but did NOT prove its biochemical nature. Avery, MacLeod, and McCarty discovered it was DNA, and Hershey and Chase provided unequivocal proof.",
      whyItMattersForNEET: "Scientist-experiment matching questions frequently test the exact contribution of each researcher."
    }
  ],

  quickRevision: [
    "Griffith (1928): S. pneumoniae (S virulent vs R avirulent) -> Discovered Transformation.",
    "Avery, MacLeod, McCarty (1944): DNase inhibits transformation -> DNA is transforming principle.",
    "Hershey & Chase (1952): T2 phage + E. coli (32P in DNA, 35S in protein) -> Unequivocal proof DNA is genetic material.",
    "DNA vs RNA: DNA has 2'-deoxyribose (stable) + Thymine (5-methyluracil); RNA has 2'-OH (reactive, catalytic) + Uracil.",
    "Watson-Crick Model (1953): Antiparallel strands (5'->3' and 3'->5'), right-handed B-DNA, diameter 2.0 nm, pitch 3.4 nm, 10 bp/turn, 0.34 nm between bp.",
    "Base Pairing: A=T (2 H-bonds), G≡C (3 H-bonds).",
    "Chargaff's Rule: In dsDNA, [A]=[T], [G]=[C], [A+G]=[T+C], (A+G)/(T+C)=1.0.",
    "DNA Length: Human diploid = 2.2 m (6.6 x 10^9 bp); E. coli = 1.36 mm (4.6 x 10^6 bp).",
    "Nucleosome: Histone Octamer (2x H2A, H2B, H3, H4 rich in Lysine & Arginine) + 200 bp DNA + H1 linker histone.",
    "Euchromatin: Light, loose, transcriptionally active. Heterochromatin: Dark, dense, transcriptionally inactive."
  ],

  practiceQuestions: [
    {
      question: "If a double-stranded DNA has 20% Cytosine, what will be the percentage of Adenine in it?",
      options: [
        "20%",
        "40%",
        "30%",
        "60%"
      ],
      correctAnswer: 2,
      explanation: "According to Chargaff's rule for double-stranded DNA: % G = % C = 20%. Therefore, (G + C) = 20% + 20% = 40%. The remaining (A + T) = 100% - 40% = 60%. Since % A = % T, % Adenine = 60% / 2 = 30%.",
      conceptTested: "Chargaff's rule calculation"
    },
    {
      question: "In the Hershey-Chase experiment, what was the location of 35S radioactivity after centrifugation of the blended culture?",
      options: [
        "Inside the bacterial pellet",
        "In the liquid supernatant containing empty viral coats",
        "Incorporated into progeny phage DNA",
        "Equally distributed between pellet and supernatant"
      ],
      correctAnswer: 1,
      explanation: "35S labels viral coat proteins. After agitation in a blender, the viral coats are detached from the bacterial cell surface. Centrifugation separates the heavy bacterial cells (pellet) from the light viral coats (supernatant). Thus, 35S radioactivity is found exclusively in the supernatant.",
      conceptTested: "Hershey-Chase experimental outcome"
    },
    {
      question: "Which of the following statements about eukaryotic chromatin is INCORRECT?",
      options: [
        "Histones are rich in the basic amino acids Lysine and Arginine",
        "A typical nucleosome contains 200 bp of DNA helix",
        "Heterochromatin is loosely packed and transcriptionally active",
        "H1 histone binds to the exterior of the nucleosome core"
      ],
      correctAnswer: 2,
      explanation: "Heterochromatin is DENSELY packed, stains DARK, and is transcriptionally INACTIVE (silent). Euchromatin is loosely packed and transcriptionally active.",
      conceptTested: "Chromatin structure and euchromatin vs heterochromatin"
    },
    {
      question: "How many base pairs are present in one complete 360° turn of the Watson-Crick B-DNA double helix?",
      options: [
        "10 base pairs",
        "12 base pairs",
        "20 base pairs",
        "3.4 base pairs"
      ],
      correctAnswer: 0,
      explanation: "The pitch of the B-DNA double helix is 3.4 nm (34 Å), and the distance between adjacent base pairs is 0.34 nm (3.4 Å). Therefore, there are exactly 3.4 / 0.34 = 10 base pairs per helical turn.",
      conceptTested: "Watson-Crick B-DNA dimensions"
    },
    {
      question: "Which of the following enzymes was used by Avery, MacLeod, and McCarty to definitively prove that DNA is the transforming principle?",
      options: [
        "Protease",
        "RNase",
        "Deoxyribonuclease (DNase)",
        "Lipase"
      ],
      correctAnswer: 2,
      explanation: "Avery, MacLeod, and McCarty found that Protease and RNase did not affect transformation, but Deoxyribonuclease (DNase) completely inhibited transformation, proving that DNA is the transforming principle.",
      conceptTested: "Biochemical characterization of transforming principle"
    }
  ],

  pyqs: [
    {
      year: 2021,
      exam: "NEET UG",
      question: "Complete the flow chart on central dogma:\n(a) DNA -> (b) -> mRNA -> (c) -> Protein\n(a) and (b) and (c) are respectively:",
      options: [
        "(a)-Transduction, (b)-Translation, (c)-Replication",
        "(a)-Replication, (b)-Transcription, (c)-Translation",
        "(a)-Translation, (b)-Replication, (c)-Transcription",
        "(a)-Replication, (b)-Translation, (c)-Transcription"
      ],
      correctAnswer: 1,
      explanation: "According to Francis Crick's Central Dogma: DNA replicates via Replication (a), transcribes into mRNA via Transcription (b), and translates into Protein via Translation (c).",
      conceptTested: "Central Dogma of Molecular Biology",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 98",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2020,
      exam: "NEET UG",
      question: "If the distance between two consecutive base pairs is 0.34 nm and the total number of base pairs of a DNA double helix in a typical mammalian cell is 6.6 x 10^9 bp, then the length of the DNA is approximately:",
      options: [
        "2.5 meters",
        "2.2 meters",
        "2.7 meters",
        "2.0 meters"
      ],
      correctAnswer: 1,
      explanation: "Length of DNA = Total base pairs x Distance between adjacent bp = (6.6 x 10^9 bp) x (0.34 x 10^-9 m/bp) = 2.244 metres (~2.2 meters).",
      conceptTested: "DNA length calculation in mammalian cell",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 99",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2017,
      exam: "NEET UG",
      question: "The association of histone H1 with a nucleosome indicates that:",
      options: [
        "DNA replication is occurring",
        "The DNA is condensed into a chromatin fibre",
        "The DNA double helix is exposed",
        "Transcription is occurring"
      ],
      correctAnswer: 1,
      explanation: "Histone H1 acts as a linker histone that binds to the entry and exit points of DNA on the nucleosome core, locking the DNA in place and facilitating further condensation of the 10 nm 'beads-on-a-string' filament into the 30 nm chromatin fiber.",
      conceptTested: "Role of H1 linker histone in chromatin condensation",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 99",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2016,
      exam: "NEET UG Phase-II",
      question: "Which of the following RNAs should be most abundant in animal cell?",
      options: [
        "rRNA",
        "tRNA",
        "mRNA",
        "miRNA"
      ],
      correctAnswer: 0,
      explanation: "Ribosomal RNA (rRNA) is the most abundant cellular RNA, making up approximately 80% of total cellular RNA. tRNA accounts for ~15%, and mRNA constitutes about 5%.",
      conceptTested: "Types and relative abundance of cellular RNAs",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 104",
      verified: true,
      isVerifiedPYQ: true
    }
  ],

  neetMarksPotential: {
    topicName: "Search for Genetic Material, DNA Double Helix & Packaging",
    confidenceLabel: "HIGH",
    confidenceText: "One of the absolute highest-yield chapters in NEET Biology with 6-8 direct questions annually across the whole chapter and 1-2 direct questions from DNA structure and packaging alone.",
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
    whatThisMeansForYou: "Mastering Chargaff's rule calculations, Hershey-Chase steps, and nucleosome packaging parameters guarantees 4 to 8 marks in NEET UG."
  }
};
