import { DetailedTopicContent } from '../../types/neet';

export const bioDnaReplicationEnzymesDetails: DetailedTopicContent = {
  topicId: "bio-dna-replication-enzymes",
  topicName: "DNA Replication & Semiconservative Mechanism",
  subject: "Biology",
  class: "Class 12",
  classification: "Genetics & Evolution",
  chapter: "Molecular Basis of Inheritance",

  whatIsThisTopic: "The semiconservative replication of DNA proposed by Watson and Crick, experimental validation by Matthew Meselson and Franklin Stahl (15N isotope in E. coli) and Herbert Taylor (tritiated thymidine in Vicia faba), replication fork dynamics, leading and lagging strand synthesis (Okazaki fragments), replication enzymes (DNA polymerases, helicase, topoisomerase, primase, ligase), and cell-cycle coordination.",

  basicIdea: [
    "Watson and Crick (1953) famously proposed: 'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.'",
    "Semiconservative Replication means that during DNA duplication, the two parental strands unwind, and each serves as a template for the synthesis of a new complementary daughter strand, so that each daughter DNA duplex contains one original parental strand and one newly synthesized strand.",
    "Matthew Meselson and Franklin Stahl (1958) proved semiconservative replication experimentally in Escherichia coli using 15N (heavy, non-radioactive isotope of nitrogen) and CsCl isopycnic density gradient centrifugation.",
    "Herbert Taylor and colleagues (1958) proved semiconservative replication of DNA in eukaryotic chromosomes using radioactive tritiated thymidine (3H-thymidine) and autoradiography on Vicia faba (faba bean) root tips.",
    "Replication begins at a specific nucleotide sequence called the Origin of Replication (ori). In prokaryotes (E. coli), there is a single ori; in eukaryotes, there are multiple origins of replication per chromosome.",
    "Replication proceeds within a Y-shaped structure termed the Replication Fork, formed by DNA Helicase unwinding the parental double helix, while Topoisomerase (DNA Gyrase) relieves upstream torsional strain.",
    "DNA-dependent DNA Polymerase III synthesizes new DNA strictly in the 5' -> 3' direction with astonishing speed (~2000 bp per second in E. coli) and extreme fidelity (proofreading via 3' -> 5' exonuclease activity).",
    "Deoxyribonucleoside triphosphates (dATP, dGTP, dCTP, dTTP) serve a dual role: they act as substrates for polymerization and provide thermodynamic energy through the hydrolysis of their terminal pyrophosphates.",
    "Because the two template strands are antiparallel, synthesis is continuous on the Leading Strand (template polarity 3' -> 5' towards the fork) and discontinuous on the Lagging Strand (template polarity 5' -> 3' away from the fork), producing short Okazaki fragments joined by DNA Ligase.",
    "In eukaryotes, DNA replication occurs strictly during the S phase of interphase. Failure of cytokinesis following DNA replication results in polyploidy."
  ],

  importantTerms: [
    {
      term: "Semiconservative Replication",
      definition: "The mode of DNA replication where each newly synthesized double helix contains one conserved parental strand and one newly synthesized complementary strand.",
      neetNote: "Proven by Meselson & Stahl in E. coli (1958) and Taylor in Vicia faba (1958)."
    },
    {
      term: "Origin of Replication (ori)",
      definition: "A specific conserved DNA sequence where DNA helicase binds and initiates the unwinding and replication of DNA.",
      neetNote: "A DNA segment lacking an ori site cannot replicate autonomously inside a host cell."
    },
    {
      term: "Replication Fork",
      definition: "The Y-shaped active region of unwound single-stranded DNA where simultaneous leading and lagging strand synthesis takes place.",
      neetNote: "Maintained open by single-strand binding proteins (SSBs)."
    },
    {
      term: "DNA Helicase",
      definition: "An ATP-dependent enzyme that breaks the hydrogen bonds between complementary base pairs, unwinding and unzipping the double helix.",
      neetNote: "Creates the replication bubble and replication forks."
    },
    {
      term: "DNA Topoisomerase / Gyrase",
      definition: "An enzyme that relieves positive supercoiling and torsional tension ahead of the advancing replication fork by transiently cutting, rotating, and resealing DNA phosphodiester backbones.",
      neetNote: "DNA Gyrase is a type II topoisomerase in bacteria."
    },
    {
      term: "RNA Primase",
      definition: "A specialized RNA polymerase that synthesizes a short RNA primer (~10-12 nucleotides) complementary to the single-stranded DNA template.",
      neetNote: "Provides the indispensable free 3'-OH group required by DNA polymerases to initiate chain elongation."
    },
    {
      term: "DNA-dependent DNA Polymerase III",
      definition: "The primary replicative enzyme in prokaryotes that polymerizes deoxynucleotides in the 5' -> 3' direction with high processivity and 3' -> 5' proofreading exonuclease activity.",
      neetNote: "Polymerizes ~2000 base pairs per second with error rate < 1 in 10^9."
    },
    {
      term: "DNA Polymerase I (Kornberg Enzyme)",
      definition: "A multifunctional enzyme in prokaryotes possessing 5' -> 3' exonuclease activity (to excise RNA primers), 5' -> 3' polymerase activity (to fill gaps with DNA), and 3' -> 5' proofreading activity.",
      neetNote: "Discovered by Arthur Kornberg (1956); essential for Okazaki fragment processing."
    },
    {
      term: "Okazaki Fragments",
      definition: "Short, discontinously synthesized DNA segments (~1000-2000 nucleotides in prokaryotes, ~100-200 nucleotides in eukaryotes) produced on the lagging strand template.",
      neetNote: "Discovered by Reiji and Tsuneko Okazaki (1968)."
    },
    {
      term: "DNA Ligase",
      definition: "An enzyme that catalyzes the formation of a covalent 3'-5' phosphodiester bond between adjacent Okazaki fragments, sealing nicks in the sugar-phosphate backbone.",
      neetNote: "Requires ATP in eukaryotes and NAD+ in prokaryotes as a cofactor."
    },
    {
      term: "Leading Strand",
      definition: "The newly synthesized DNA strand that is elongated continuously in the 5' -> 3' direction towards the advancing replication fork on the 3' -> 5' template strand.",
      neetNote: "Requires only a single RNA primer at the origin."
    },
    {
      term: "Lagging Strand",
      definition: "The newly synthesized DNA strand that is elongated discontinuously in the 5' -> 3' direction away from the replication fork on the 5' -> 3' template strand.",
      neetNote: "Requires multiple RNA primers, one for each Okazaki fragment."
    },
    {
      term: "Isopycnic Density Gradient Centrifugation",
      definition: "A technique that separates macromolecules (such as 15N-DNA vs 14N-DNA) based strictly on differences in their buoyant density in a concentrated Cesium Chloride (CsCl) solution.",
      neetNote: "Used by Meselson and Stahl to separate heavy, hybrid, and light DNA molecules."
    },
    {
      term: "Polyploidy",
      definition: "A chromosomal anomaly characterized by the presence of one or more extra complete sets of chromosomes, resulting when DNA replication in S phase is not followed by cell division (cytokinesis).",
      neetNote: "Commonly observed in plants; fatal in most higher animals."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Experimental Proof of Semiconservative Replication: Meselson & Stahl and Taylor",
      paragraphs: [
        "In 1958, Matthew Meselson and Franklin Stahl designed an elegant experiment that definitively proved Watson and Crick's semiconservative replication hypothesis in Escherichia coli. They utilized the heavy, stable (non-radioactive) isotope of nitrogen, 15N, to distinguish parental from newly synthesized DNA strands based on density.",
        "Experimental Protocol of Meselson & Stahl:",
        "1. Heavy Labeling: E. coli cells were grown for many generations in a defined culture medium containing 15NH4Cl (15N is the heavy nitrogen isotope) as the sole nitrogen source. Consequently, 15N was incorporated into the purine and pyrimidine bases of all bacterial DNA molecules. This produced 'Heavy DNA' (15N-15N), which was extracted and centrifuged in a Cesium Chloride (CsCl) density gradient, forming a distinct band near the bottom of the centrifuge tube due to its high density.",
        "2. Transfer to Light Medium (Generation 0, 0 min): The 15N-loaded cells were transferred into a fresh medium containing normal light nitrogen, 14NH4Cl. Samples were withdrawn at precise intervals corresponding to the generation time of E. coli (which divides every 20 minutes at 37°C).",
        "3. Generation 1 (after 20 minutes / one replication cycle): DNA extracted after 20 minutes showed ONLY ONE band at an INTERMEDIATE density position between heavy (15N-15N) and light (14N-14N) DNA. This intermediate band represented hybrid 15N-14N DNA duplexes (one heavy parental strand + one light newly synthesized strand). This single result definitively RULED OUT the Conservative Model of replication (which predicted two distinct bands: 50% heavy and 50% light).",
        "4. Generation 2 (after 40 minutes / two replication cycles): DNA extracted after 40 minutes separated into TWO distinct bands in equal proportions (1:1 ratio): exactly 50% Hybrid DNA (15N-14N) and 50% Light DNA (14N-14N). This result decisively RULED OUT the Dispersive Model (which predicted a single intermediate band shifting progressively lighter).",
        "5. Generation 3 (after 60 minutes / three replication cycles): The DNA yielded 25% Hybrid DNA (15N-14N) and 75% Light DNA (14N-14N) (ratio 1:3). For any generation n, the number of hybrid molecules remains strictly constant at 2, while the number of light molecules increases exponentially as 2^n - 2.",
        "Taylor's Experiment on Eukaryotes (1958): Herbert Taylor, Philip Woods, and Walter Hughes conducted parallel experiments on root-tip cells of Vicia faba (faba bean / broad bean). They grew seedling roots in the presence of radioactive tritiated thymidine (3H-thymidine) during one cell cycle, then transferred them to non-radioactive medium. Using autoradiography to detect radioactivity on metaphase chromosomes, they observed that in the first generation, both sister chromatids of every chromosome were equally radioactive; in the second generation, one sister chromatid was radioactive while the other was non-radioactive. This proved that DNA in eukaryotic chromosomes replicates semiconservatively."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="380" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Meselson &amp; Stahl Experiment (1958) — CsCl Density Gradient Centrifugation</text>

  <!-- Gen 0 (0 min) -->
  <g transform="translate(30, 45)">
    <rect width="155" height="315" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1"/>
    <text x="77" y="22" fill="#be123c" font-size="12" font-weight="bold" text-anchor="middle">Gen 0 (0 min)</text>
    <text x="77" y="38" fill="#64748b" font-size="10" text-anchor="middle">Grown in ¹⁵N medium</text>

    <!-- DNA Duplex -->
    <path d="M 62 60 L 62 130" stroke="#be123c" stroke-width="5"/>
    <path d="M 92 60 L 92 130" stroke="#be123c" stroke-width="5"/>
    <text x="77" y="145" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">¹⁵N-¹⁵N Heavy DNA</text>

    <!-- CsCl Tube -->
    <rect x="52" y="160" width="50" height="110" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <!-- Heavy band -->
    <rect x="53" y="245" width="48" height="10" fill="#be123c" rx="2"/>
    <text x="77" y="290" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">100% Heavy Band</text>
    <text x="77" y="305" fill="#475569" font-size="9" text-anchor="middle">(High Density)</text>
  </g>

  <!-- Gen 1 (20 min) -->
  <g transform="translate(210, 45)">
    <rect width="155" height="315" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1"/>
    <text x="77" y="22" fill="#d97706" font-size="12" font-weight="bold" text-anchor="middle">Gen 1 (20 min)</text>
    <text x="77" y="38" fill="#64748b" font-size="10" text-anchor="middle">1 cycle in ¹⁴N medium</text>

    <!-- 2 Hybrid Duplexes -->
    <path d="M 45 60 L 45 130" stroke="#be123c" stroke-width="4"/>
    <path d="M 65 60 L 65 130" stroke="#2563eb" stroke-width="4"/>
    <path d="M 90 60 L 90 130" stroke="#be123c" stroke-width="4"/>
    <path d="M 110 60 L 110 130" stroke="#2563eb" stroke-width="4"/>
    <text x="77" y="145" fill="#d97706" font-size="10" font-weight="bold" text-anchor="middle">¹⁵N-¹⁴N Hybrid DNA</text>

    <!-- CsCl Tube -->
    <rect x="52" y="160" width="50" height="110" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <!-- Intermediate band -->
    <rect x="53" y="210" width="48" height="10" fill="#d97706" rx="2"/>
    <text x="77" y="290" fill="#d97706" font-size="10" font-weight="bold" text-anchor="middle">100% Hybrid Band</text>
    <text x="77" y="305" fill="#475569" font-size="9" text-anchor="middle">(Intermediate Density)</text>
  </g>

  <!-- Gen 2 (40 min) -->
  <g transform="translate(390, 45)">
    <rect width="155" height="315" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1"/>
    <text x="77" y="22" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">Gen 2 (40 min)</text>
    <text x="77" y="38" fill="#64748b" font-size="10" text-anchor="middle">2 cycles in ¹⁴N medium</text>

    <!-- 4 Duplexes (2 hybrid, 2 light) -->
    <path d="M 35 60 L 35 130" stroke="#2563eb" stroke-width="3"/>
    <path d="M 50 60 L 50 130" stroke="#2563eb" stroke-width="3"/>
    <path d="M 65 60 L 65 130" stroke="#be123c" stroke-width="3"/>
    <path d="M 80 60 L 80 130" stroke="#2563eb" stroke-width="3"/>
    <path d="M 95 60 L 95 130" stroke="#be123c" stroke-width="3"/>
    <path d="M 110 60 L 110 130" stroke="#2563eb" stroke-width="3"/>
    <path d="M 125 60 L 125 130" stroke="#2563eb" stroke-width="3"/>
    <path d="M 140 60 L 140 130" stroke="#2563eb" stroke-width="3"/>
    <text x="77" y="145" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">50% Hybrid : 50% Light</text>

    <!-- CsCl Tube -->
    <rect x="52" y="160" width="50" height="110" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <!-- Light band -->
    <rect x="53" y="180" width="48" height="8" fill="#2563eb" rx="2"/>
    <!-- Intermediate band -->
    <rect x="53" y="210" width="48" height="8" fill="#d97706" rx="2"/>
    <text x="77" y="290" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">50% Light (¹⁴N-¹⁴N)</text>
    <text x="77" y="305" fill="#d97706" font-size="10" font-weight="bold" text-anchor="middle">50% Hybrid (¹⁵N-¹⁴N)</text>
  </g>

  <!-- Summary Box on Far Right -->
  <g transform="translate(565, 45)">
    <rect width="165" height="315" fill="#ffffff" rx="8" stroke="#4f46e5" stroke-width="1.5"/>
    <text x="82" y="24" fill="#312e81" font-size="12" font-weight="bold" text-anchor="middle">Key Rules &amp; Ratios</text>

    <g transform="translate(10, 40)">
      <text x="0" y="15" fill="#0f172a" font-size="10" font-weight="bold">After n generations:</text>
      <text x="0" y="32" fill="#334155" font-size="10">• Total DNA = 2ⁿ</text>
      <text x="0" y="50" fill="#d97706" font-size="10" font-weight="bold">• Hybrid DNA = ALWAYS 2</text>
      <text x="0" y="68" fill="#2563eb" font-size="10" font-weight="bold">• Light DNA = 2ⁿ - 2</text>

      <line x1="0" y1="85" x2="145" y2="85" stroke="#cbd5e1" stroke-width="1"/>

      <text x="0" y="105" fill="#0f172a" font-size="10" font-weight="bold">Gen 3 (60 min):</text>
      <text x="0" y="122" fill="#334155" font-size="9">• Hybrid : Light = 2 : 6</text>
      <text x="0" y="137" fill="#334155" font-size="9">• = 1 : 3 (25% : 75%)</text>

      <text x="0" y="160" fill="#0f172a" font-size="10" font-weight="bold">Gen 4 (80 min):</text>
      <text x="0" y="177" fill="#334155" font-size="9">• Hybrid : Light = 2 : 14</text>
      <text x="0" y="192" fill="#334155" font-size="9">• = 1 : 7 (12.5% : 87.5%)</text>

      <line x1="0" y1="205" x2="145" y2="205" stroke="#cbd5e1" stroke-width="1"/>
      <text x="0" y="222" fill="#047857" font-size="9" font-weight="bold">Taylor: Vicia faba</text>
      <text x="0" y="237" fill="#64748b" font-size="9">Used ³H-thymidine</text>
      <text x="0" y="252" fill="#64748b" font-size="9">Eukaryotic chromosomes</text>
    </g>
  </g>
</svg>`,
        caption: "Meselson & Stahl experiment showing density distribution of heavy (15N-15N), hybrid (15N-14N), and light (14N-14N) DNA in CsCl density gradients.",
        guide: "WHAT TO OBSERVE: Note the single hybrid band in Generation 1 (after 20 min) which rules out conservative replication. Observe that by Generation 2 (after 40 min), the ratio of hybrid to light DNA is exactly 1:1. Remember that hybrid DNA molecules always remain at 2 for any number of generations."
      },
      importantPoints: [
        "Meselson & Stahl (1958) used E. coli, 15NH4Cl (heavy nitrogen isotope), and CsCl density gradient centrifugation.",
        "15N is a HEAVY isotope, NOT a radioactive isotope (common NEET trap!).",
        "E. coli generation time = 20 minutes at 37°C.",
        "Gen 0 (0 min) = 100% Heavy (15N-15N); Gen 1 (20 min) = 100% Hybrid (15N-14N); Gen 2 (40 min) = 50% Hybrid (15N-14N) + 50% Light (14N-14N); Gen 3 (60 min) = 25% Hybrid + 75% Light.",
        "Taylor (1958) used radioactive tritiated thymidine (3H-thymidine) and autoradiography on Vicia faba root tips."
      ]
    },
    {
      heading: "2. The Replication Machinery: Enzymes, Energetics & Replication Fork Dynamics",
      paragraphs: [
        "DNA replication is an extraordinarily coordinated biochemical process executed by a complex multi-enzyme replisome. In E. coli, the circular genome contains 4.6 x 10^6 bp and is replicated completely in about 18-20 minutes, which calculates to an average polymerization rate of approximately 2000 base pairs per second!",
        "Energetics of Polymerization: The cellular building blocks for replication are Deoxyribonucleoside triphosphates (dATP, dGTP, dCTP, dTTP). These molecules serve a dual purpose: (1) They act as building block substrates for the polymerizing enzyme; (2) They provide thermodynamic energy—cleavage of the high-energy terminal pyrophosphate (PPi) bond releases energy (similar to ATP hydrolysis) that powers the endergonic polymerization reaction.",
        "Step-by-Step Mechanism at the Replication Fork:",
        "1. Initiation and Unwinding: Replication initiates at the Origin of Replication (ori). DNA Helicase unwinds the double helix by breaking hydrogen bonds, creating a replication bubble with two opposing replication forks. Single-Stranded Binding Proteins (SSBs) coat the exposed single strands to prevent spontaneous re-annealing and hairpin formation. DNA Topoisomerase (DNA Gyrase) operates ahead of the advancing fork, cutting and resealing DNA to relieve the intense torsional supercoiling generated by unwinding.",
        "2. RNA Primer Synthesis: DNA polymerases cannot initiate polynucleotide synthesis de novo because they strictly require a pre-existing 3'-OH group to attach the first incoming nucleotide. RNA Primase synthesizes a short RNA primer (~10 nucleotides long) complementary to the DNA template.",
        "3. Elongation by DNA Polymerase III: DNA-dependent DNA Polymerase III extends the primer by adding deoxynucleoside monophosphates strictly to the free 3'-OH end. Therefore, synthesis proceeds exclusively in the 5' -> 3' direction.",
        "4. Continuous vs Discontinuous Synthesis: Because the two parental DNA strands are antiparallel (one 3' -> 5' and the other 5' -> 3'):",
        "  • The **Leading Strand**: Synthesized on the 3' -> 5' template strand continuously in the direction towards the advancing replication fork. It requires only one RNA primer at the origin.",
        "  • The **Lagging Strand**: Synthesized on the 5' -> 5' template strand discontinuously away from the replication fork in short segments called **Okazaki Fragments** (~1000-2000 bp in bacteria). It requires a new RNA primer for every individual fragment.",
        "5. Primer Removal and Nick Sealing: DNA Polymerase I (Kornberg Enzyme) uses its unique 5' -> 3' exonuclease activity to degrade the RNA primers and its 5' -> 3' polymerase activity to fill the resulting gaps with DNA nucleotides. Finally, **DNA Ligase** forms phosphodiester bonds to join the adjacent Okazaki fragments, creating a continuous sugar-phosphate backbone.",
        "6. High Fidelity and Proofreading: Replicative DNA polymerases have intrinsic 3' -> 5' exonuclease proofreading capability, checking each newly inserted base and immediately removing mismatched nucleotides, reducing replication errors to fewer than 1 in 10^9 base pairs."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
  <rect width="760" height="380" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="380" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">DNA Replication Fork Architecture &amp; Enzyme Coordinates</text>

  <!-- Unwound parental DNA strands -->
  <!-- Top Parental Strand (3' to 5') -->
  <path d="M 60 70 L 320 70 L 480 140 L 700 140" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/>
  <text x="30" y="75" fill="#1e40af" font-size="13" font-weight="bold">3' End</text>
  <text x="710" y="145" fill="#1e40af" font-size="12" font-weight="bold">5' End</text>

  <!-- Bottom Parental Strand (5' to 3') -->
  <path d="M 60 310 L 320 310 L 480 240 L 700 240" fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
  <text x="30" y="315" fill="#0369a1" font-size="13" font-weight="bold">5' End</text>
  <text x="710" y="245" fill="#0369a1" font-size="12" font-weight="bold">3' End</text>

  <!-- Topoisomerase / Gyrase ahead of fork -->
  <circle cx="630" cy="190" r="26" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="630" y="186" fill="#92400e" font-size="9" font-weight="bold" text-anchor="middle">DNA Gyrase /</text>
  <text x="630" y="199" fill="#92400e" font-size="9" font-weight="bold" text-anchor="middle">Topoisomerase</text>
  <text x="630" y="230" fill="#b45309" font-size="8" text-anchor="middle">(Relieves supercoils)</text>

  <!-- Helicase at fork apex -->
  <polygon points="460,190 500,160 500,220" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
  <text x="480" y="194" fill="#9d174d" font-size="9" font-weight="bold" text-anchor="middle">Helicase</text>

  <!-- SSBs on unwound single strands -->
  <circle cx="370" cy="90" r="7" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
  <circle cx="395" cy="100" r="7" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
  <circle cx="370" cy="290" r="7" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
  <circle cx="395" cy="280" r="7" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
  <text x="415" y="85" fill="#475569" font-size="9" font-weight="bold">SSB Proteins</text>

  <!-- Leading Strand (Continuous 5' to 3' towards fork) -->
  <line x1="80" y1="95" x2="110" y2="95" stroke="#f43f5e" stroke-width="5" stroke-linecap="round"/>
  <text x="95" y="88" fill="#be123c" font-size="8" font-weight="bold" text-anchor="middle">RNA Primer</text>
  <line x1="110" y1="95" x2="430" y2="95" stroke="#059669" stroke-width="5" stroke-linecap="round"/>
  <!-- Arrow towards fork -->
  <polygon points="430,90 445,95 430,100" fill="#059669"/>
  <text x="70" y="112" fill="#065f46" font-size="11" font-weight="bold">5'</text>
  <text x="445" y="112" fill="#065f46" font-size="11" font-weight="bold">3'</text>
  <text x="240" y="115" fill="#065f46" font-size="12" font-weight="bold">Leading Strand (Continuous synthesis towards fork)</text>

  <!-- DNA Polymerase III on Leading Strand -->
  <ellipse cx="340" cy="95" rx="28" ry="18" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
  <text x="340" y="98" fill="#065f46" font-size="9" font-weight="bold" text-anchor="middle">DNA Pol III</text>

  <!-- Lagging Strand (Discontinuous Okazaki fragments away from fork) -->
  <!-- Fragment 1 -->
  <line x1="380" y1="285" x2="360" y2="285" stroke="#f43f5e" stroke-width="5" stroke-linecap="round"/>
  <line x1="360" y1="285" x2="260" y2="285" stroke="#059669" stroke-width="5" stroke-linecap="round"/>
  <polygon points="260,280 245,285 260,290" fill="#059669"/>
  <text x="385" y="278" fill="#065f46" font-size="10" font-weight="bold">5'</text>
  <text x="235" y="278" fill="#065f46" font-size="10" font-weight="bold">3'</text>

  <!-- Fragment 2 -->
  <line x1="220" y1="285" x2="200" y2="285" stroke="#f43f5e" stroke-width="5" stroke-linecap="round"/>
  <line x1="200" y1="285" x2="100" y2="285" stroke="#059669" stroke-width="5" stroke-linecap="round"/>
  <polygon points="100,280 85,285 100,290" fill="#059669"/>
  <text x="225" y="278" fill="#065f46" font-size="10" font-weight="bold">5'</text>
  <text x="75" y="278" fill="#065f46" font-size="10" font-weight="bold">3'</text>

  <text x="240" y="265" fill="#be123c" font-size="12" font-weight="bold">Lagging Strand (Okazaki Fragments synthesized away from fork)</text>

  <!-- DNA Ligase -->
  <ellipse cx="230" cy="285" rx="18" ry="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
  <text x="230" y="288" fill="#991b1b" font-size="8" font-weight="bold" text-anchor="middle">Ligase</text>

  <!-- Direction of fork movement annotation -->
  <g transform="translate(480, 20)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-fork)"/>
    <text x="70" y="4" fill="#0f172a" font-size="11" font-weight="bold">Fork Movement Direction</text>
  </g>

  <defs>
    <marker id="arr-fork" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a"/>
    </marker>
  </defs>
</svg>`,
        caption: "Molecular model of the replication fork highlighting leading strand (continuous), lagging strand (Okazaki fragments), Helicase, Gyrase, Primase, DNA Pol III, and DNA Ligase.",
        guide: "WHAT TO OBSERVE: Look at the template strand polarities: 3'->5' template yields continuous leading strand towards fork; 5'->3' template yields discontinuous lagging strand synthesized away from fork. Observe that ALL synthesis occurs strictly in the 5' -> 3' direction."
      },
      importantPoints: [
        "DNA-dependent DNA Polymerase synthesizes DNA STRICTLY in the 5' -> 3' direction.",
        "Leading strand: synthesized continuously on 3' -> 5' template towards fork (1 primer needed).",
        "Lagging strand: synthesized discontinuously on 5' -> 3' template away from fork as Okazaki fragments (multiple primers needed).",
        "dNTPs have dual role: act as substrates AND provide energy for polymerization via pyrophosphate cleavage.",
        "Helicase unwinds helix; Topoisomerase (Gyrase) relieves supercoiling tension; SSBs prevent re-annealing.",
        "RNA Primase provides the 3'-OH group required for DNA Polymerase III to initiate synthesis.",
        "DNA Polymerase I removes RNA primers (5'->3' exonuclease) and fills gaps with DNA.",
        "DNA Ligase seals phosphodiester nicks between Okazaki fragments.",
        "DNA replication occurs in S-phase of interphase. Failure of cell division after DNA replication results in Polyploidy."
      ]
    }
  ],

  formulae: [
    {
      title: "Meselson-Stahl DNA Distribution After n Generations",
      formula: "\\text{Total DNA} = 2^n, \\quad \\text{Hybrid DNA (}^{15}\\text{N-}^{14}\\text{N)} = 2, \\quad \\text{Light DNA (}^{14}\\text{N-}^{14}\\text{N)} = 2^n - 2",
      meaning: "Calculates the exact proportions of hybrid and light DNA molecules in E. coli after n replication cycles in 14N medium.",
      symbols: "n = number of generations = total time elapsed / 20 minutes",
      unit: "Number of DNA molecules or Percentage (%)",
      conditions: "Assumes 100% initial heavy (15N-15N) labeling and synchronous cell division in 14N medium.",
      calculationExample: {
        problem: "E. coli cells grown in 15N medium are transferred to 14N medium and allowed to grow for 80 minutes. Calculate the ratio of hybrid DNA to light DNA.",
        given: "Total time = 80 min; Generation time = 20 min",
        stepByStep: [
          "Step 1: Number of generations n = 80 min / 20 min = 4 generations.",
          "Step 2: Total DNA molecules = 2^4 = 16.",
          "Step 3: Hybrid DNA molecules = ALWAYS 2.",
          "Step 4: Light DNA molecules = 16 - 2 = 14.",
          "Step 5: Ratio of Hybrid : Light = 2 : 14 = 1 : 7."
        ],
        answer: "1 : 7 (or 12.5% Hybrid : 87.5% Light)"
      }
    },
    {
      title: "Polymerization Rate of DNA Polymerase",
      formula: "\\text{Rate of Polymerization} = \\frac{\\text{Total Genome Base Pairs}}{\\text{Total Time of Replication (seconds)}}",
      meaning: "Quantifies the catalytic speed of replicative DNA polymerase in adding nucleotides per second.",
      symbols: "Genome size (bp), Time (s)",
      unit: "bp/second",
      conditions: "E. coli genome = 4.6 x 10^6 bp replicated in ~20 minutes (1200 seconds) bidirectional.",
      calculationExample: {
        problem: "Calculate the approximate rate of polymerization of DNA polymerase in E. coli if its 4.6 x 10^6 bp genome replicates in 38 minutes (2280 seconds) from a single origin.",
        given: "Genome = 4.6 x 10^6 bp; Time = 2280 s (bidirectional: 2 forks replicate 2.3 x 10^6 bp each)",
        stepByStep: [
          "Step 1: Base pairs per fork = (4.6 x 10^6 bp) / 2 = 2.3 x 10^6 bp.",
          "Step 2: Rate per fork = (2.3 x 10^6 bp) / 1140 s ≈ 2000 bp/second."
        ],
        answer: "~2000 base pairs per second"
      }
    }
  ],

  neetImportantPoints: [
    "Meselson & Stahl (1958) used 15N, a heavy stable isotope (NOT radioactive!), and CsCl density gradient centrifugation.",
    "Taylor (1958) used radioactive tritiated thymidine (3H-thymidine) and autoradiography on Vicia faba root tips.",
    "Replication is Semiconservative: one parental strand + one newly synthesized daughter strand.",
    "DNA replication occurs in S-phase of the eukaryotic cell cycle.",
    "Failure of cytokinesis after S-phase replication causes Polyploidy.",
    "Replication rate in E. coli is ~2000 base pairs per second.",
    "DNA Polymerase synthesizes strictly in 5' -> 3' direction.",
    "Deoxyribonucleoside triphosphates (dATP, dGTP, dCTP, dTTP) provide both substrate and energy for polymerization.",
    "Leading strand is synthesized continuously towards the fork on the 3' -> 5' template.",
    "Lagging strand is synthesized discontinuously away from the fork on the 5' -> 3' template as Okazaki fragments.",
    "RNA Primase synthesizes the RNA primer that provides the free 3'-OH group.",
    "DNA Polymerase I removes RNA primers via 5'->3' exonuclease and fills gaps with DNA.",
    "DNA Ligase seals phosphodiester bonds between Okazaki fragments.",
    "Helicase unwinds the double helix; Topoisomerase (Gyrase) relieves supercoiling tension.",
    "Single-strand binding proteins (SSBs) prevent single strands from re-annealing."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming 15N used by Meselson and Stahl was a radioactive isotope.",
      correctFact: "15N is a HEAVY, STABLE isotope of nitrogen, NOT radioactive. It separates based on physical density in CsCl, whereas Taylor used radioactive 3H-thymidine.",
      whyItMattersForNEET: "A notorious NEET assertion-reason trap that repeatedly catches unprepared students."
    },
    {
      commonConfusion: "Thinking DNA Polymerase can synthesize DNA in both 5'->3' and 3'->5' directions.",
      correctFact: "DNA Polymerase can ONLY add nucleotides to a free 3'-OH group, polymerizing strictly in the 5' -> 3' direction. This is why the lagging strand must be synthesized discontinuously as Okazaki fragments.",
      whyItMattersForNEET: "Fundamental concept required to answer replication fork polarity questions."
    },
    {
      commonConfusion: "Believing DNA Ligase synthesizes Okazaki fragments.",
      correctFact: "DNA Polymerase III synthesizes Okazaki fragments. DNA Ligase only joins adjacent fragments by forming phosphodiester bonds to seal the nicks.",
      whyItMattersForNEET: "Direct enzyme-function matching questions in NEET."
    },
    {
      commonConfusion: "Assuming that after 3 generations, hybrid DNA disappears.",
      correctFact: "In Meselson & Stahl's experiment, the absolute number of hybrid DNA duplexes (15N-14N) ALWAYS remains equal to 2, though its percentage decreases (100% -> 50% -> 25% -> 12.5%).",
      whyItMattersForNEET: "Numerical calculation questions frequently test the absolute count vs percentage of hybrid molecules."
    }
  ],

  quickRevision: [
    "Semiconservative Replication: Watson & Crick proposed; Meselson & Stahl (15N in E. coli) & Taylor (3H-thymidine in Vicia faba) proved.",
    "Meselson & Stahl: Gen 0 = 100% Heavy (15N-15N); Gen 1 = 100% Hybrid (15N-14N); Gen 2 = 50% Hybrid + 50% Light; Gen 3 = 25% Hybrid + 75% Light.",
    "Polymerization direction: Strictly 5' -> 3'.",
    "Leading strand: Continuous towards fork on 3' -> 5' template.",
    "Lagging strand: Discontinuous away from fork on 5' -> 3' template (Okazaki fragments joined by DNA Ligase).",
    "Enzymes: Helicase (unwinds), Topoisomerase/Gyrase (relieves supercoiling), Primase (synthesizes RNA primer with 3'-OH), DNA Pol III (main polymerizer, 2000 bp/s), DNA Pol I (removes primers & fills gaps), Ligase (seals nicks).",
    "Dual function of dNTPs: Substrate + Energy source via pyrophosphate hydrolysis.",
    "Cell Cycle: Replication occurs in S-phase; failure of cell division causes Polyploidy."
  ],

  practiceQuestions: [
    {
      question: "If E. coli cells grown in a medium containing 15N are transferred to a 14N medium and allowed to replicate for 60 minutes, what will be the ratio of hybrid DNA to light DNA molecules?",
      options: [
        "1 : 1",
        "1 : 3",
        "1 : 7",
        "3 : 1"
      ],
      correctAnswer: 1,
      explanation: "Generation time of E. coli is 20 minutes. In 60 minutes, 3 generations occur (n = 3). Total DNA = 2^3 = 8. Hybrid DNA = 2; Light DNA = 8 - 2 = 6. The ratio of Hybrid : Light = 2 : 6 = 1 : 3 (25% Hybrid : 75% Light).",
      conceptTested: "Meselson-Stahl generation numerical calculation"
    },
    {
      question: "During DNA replication, Okazaki fragments are synthesized because:",
      options: [
        "DNA polymerase can only polymerize in the 5' -> 3' direction",
        "The replication fork moves in both directions simultaneously",
        "RNA primers can only bind to the 3' end of the parent DNA",
        "DNA helicase unwinds only one strand at a time"
      ],
      correctAnswer: 0,
      explanation: "DNA Polymerase III can only add nucleotides to a free 3'-OH group, meaning it polymerizes exclusively in the 5' -> 3' direction. On the 5' -> 3' lagging template strand, synthesis must proceed away from the advancing fork in short discontinuous Okazaki segments.",
      conceptTested: "Directionality of DNA polymerase and Okazaki fragment synthesis"
    },
    {
      question: "Which of the following enzymes removes RNA primers and replaces them with DNA during prokaryotic replication?",
      options: [
        "DNA Polymerase III",
        "DNA Polymerase I",
        "DNA Ligase",
        "DNA Helicase"
      ],
      correctAnswer: 1,
      explanation: "DNA Polymerase I (Kornberg enzyme) possesses 5' -> 3' exonuclease activity to degrade RNA primers and 5' -> 3' polymerase activity to fill the gap with complementary DNA nucleotides.",
      conceptTested: "Functions of prokaryotic DNA polymerases"
    },
    {
      question: "Herbert Taylor proved semiconservative replication of chromosomes in eukaryotes by using:",
      options: [
        "15N ammonium chloride on E. coli",
        "Radioactive 32P on T2 bacteriophage",
        "Radioactive tritiated thymidine on Vicia faba",
        "Radioactive 35S on Streptococcus pneumoniae"
      ],
      correctAnswer: 2,
      explanation: "Taylor, Woods, and Hughes (1958) used radioactive tritiated thymidine (3H-thymidine) and autoradiography on dividing root-tip cells of Vicia faba (broad bean).",
      conceptTested: "Taylor's experiment on eukaryotic semiconservative replication"
    }
  ],

  pyqs: [
    {
      year: 2022,
      exam: "NEET UG",
      question: "In E. coli, the DNA replication starts at a specific region called:",
      options: [
        "Promoter",
        "Origin of replication",
        "Terminator",
        "Operator"
      ],
      correctAnswer: 1,
      explanation: "DNA replication initiates at a specific, designated sequence called the Origin of Replication (ori).",
      conceptTested: "Origin of replication (ori)",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 106",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2020,
      exam: "NEET UG",
      question: "The experimental proof for semiconservative replication of DNA was first shown in a:",
      options: [
        "Plant",
        "Bacterium",
        "Fungus",
        "Virus"
      ],
      correctAnswer: 1,
      explanation: "Meselson and Stahl (1958) first proved semiconservative DNA replication in a bacterium (Escherichia coli).",
      conceptTested: "Model organism in Meselson-Stahl experiment",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 104",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2019,
      exam: "NEET UG",
      question: "During DNA replication, the term Okazaki fragments refers to:",
      options: [
        "The short RNA segments synthesized by primase",
        "The newly synthesized continuous strand",
        "The short DNA segments synthesized discontinuously on the lagging strand",
        "The non-coding intervening sequences in eukaryotic genes"
      ],
      correctAnswer: 2,
      explanation: "Okazaki fragments are short segments of DNA synthesized discontinuously on the lagging template strand away from the replication fork.",
      conceptTested: "Definition and polarity of Okazaki fragments",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 106",
      verified: true,
      isVerifiedPYQ: true
    },
    {
      year: 2018,
      exam: "NEET UG",
      question: "The dual functions of deoxyribonucleoside triphosphates in DNA replication are:",
      options: [
        "Acting as substrate and providing energy for polymerization",
        "Acting as enzyme and template",
        "Unwinding DNA and priming synthesis",
        "Proofreading and sealing nicks"
      ],
      correctAnswer: 0,
      explanation: "Deoxyribonucleoside triphosphates (dATP, dGTP, dCTP, dTTP) serve dual purposes: they act as substrates for DNA polymerase and provide energy via cleavage of high-energy terminal pyrophosphate bonds.",
      conceptTested: "Dual function and energetics of dNTPs",
      ncertReference: "NCERT Class 12 Biology, Chapter 6, Page 106",
      verified: true,
      isVerifiedPYQ: true
    }
  ],

  neetMarksPotential: {
    topicName: "DNA Replication & Semiconservative Mechanism",
    confidenceLabel: "HIGH",
    confidenceText: "Continuously tested in NEET UG with 1-2 direct questions every year focusing on Meselson-Stahl generation calculations, replication fork enzymes, and leading vs lagging strand dynamics.",
    totalAnalyzedPapers: 10,
    papersWithDirectPyqs: 9,
    totalDirectPyqs: 15,
    totalHistoricalMarks: 60,
    averageDirectPyqsPerPaper: 1.5,
    maxDirectPyqsInSinglePaper: 2,
    minDirectPyqsInSinglePaper: 1,
    minDirectMarks: 4,
    maxDirectMarks: 8,
    avgDirectMarksPerPaper: 6.0,
    whatThisMeansForYou: "Clear mastery of enzyme polarities, dNTP energetics, and Meselson-Stahl 15N/14N numerical problems guarantees 4-8 marks in NEET."
  }
};
