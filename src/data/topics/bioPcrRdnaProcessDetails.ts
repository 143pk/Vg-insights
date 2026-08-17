import { DetailedTopicContent } from '../../types/neet';

export const bioPcrRdnaProcessDetails: DetailedTopicContent = {
  topicId: "bio-pcr-rdna-process",
  topicName: "Polymerase Chain Reaction (PCR) & rDNA Steps",
  subject: "Biology",
  class: "Class 12",
  classification: "Biotechnology",
  chapter: "Biotechnology: Principles and Processes",

  whatIsThisTopic: "An authoritative, exhaustive NCERT teaching guide to the end-to-end multi-step workflow of Recombinant DNA Technology (Genetic Engineering) and large-scale bioprocess manufacturing. This module details: (1) Isolation of pure genetic material (cellular lysis with lysozyme, cellulase, chitinase; enzymatic degradation of RNA by ribonuclease and proteins by protease; chilled ethanol precipitation and spooling); (2) Agarose gel electrophoresis (negative charge of DNA, agarose sieving matrix, cathode to anode migration, Ethidium Bromide staining and UV illumination producing bright orange bands, and elution); (3) Polymerase Chain Reaction / PCR (in vitro gene amplification by Kary Mullis, components: DNA template, oligonucleotide primers, dNTPs, Mg2+, and thermostable Taq polymerase from Thermus aquaticus; the 3-step thermal cycle: 94°C Denaturation, 55°C Annealing, 72°C Extension; and exponential 2^n amplification calculations); (4) Ligation and transformation of rDNA into competent hosts; (5) Large-scale microbial culturing in continuous Bioreactors (Simple Stirred-Tank vs Sparged Stirred-Tank vessels, logarithmic growth maintenance, oxygen transfer, temperature/pH/foam control); and (6) Downstream Processing (product separation, purification, formulation with preservatives, and clinical quality control testing).",

  basicIdea: [
    "Recombinant DNA Technology Master Workflow: Genetic engineering involves a precise sequential pipeline of 8 coordinated steps: (1) Isolation of genomic DNA from donor cells; (2) Cleavage of DNA by restriction endonucleases at specific palindromic sequences; (3) Separation and isolation of the desired gene fragment using Agarose Gel Electrophoresis; (4) Amplification of the gene of interest using Polymerase Chain Reaction (PCR); (5) Ligation of the DNA fragment into a suitable cloning vector using DNA Ligase to form rDNA; (6) Transfer (transformation) of the recombinant DNA into a recipient competent host cell (e.g., E. coli); (7) Culturing the transformed host cells in large-scale Bioreactors under optimum physiological conditions; and (8) Downstream Processing involving separation, purification, and clinical quality testing of the target recombinant product.",
    "Isolation of Pure DNA (Enzymatic Lysis & Spooling): To release DNA enclosed within cellular membranes, the cell wall is digested with specific enzymes: Lysozyme for bacterial cells, Cellulase for plant cells, and Chitinase for fungal cells. Macromolecular contaminants are removed by digesting RNA with Ribonuclease (RNase) and cellular proteins with Protease. Pure DNA is precipitated out by adding ice-cold (chilled) ethanol, appearing as fine insoluble white threads that are collected by a technique called 'Spooling'.",
    "Agarose Gel Electrophoresis (Separation & Elution): Because the phosphate backbone imparts a net negative charge to DNA, DNA fragments migrate towards the positive electrode (anode) when subjected to an electric field through an agarose matrix. Agarose (a natural polysaccharide polymer extracted from seaweeds) provides a sieving effect: smaller DNA fragments encounter less friction and travel faster/farther, whereas larger fragments remain closer to the loading wells (cathode). DNA bands are visualised by staining with Ethidium Bromide (EtBr) and exposing to Ultraviolet (UV) light, emitting bright orange fluorescence. The desired band is excised from the gel and extracted via 'Elution'.",
    "Polymerase Chain Reaction (PCR) Dynamics: Invented in 1983 by Kary Mullis, PCR is an in vitro technique for exponential enzymatic amplification of a specific DNA segment. Each PCR cycle comprises 3 distinct temperature phases: (1) Denaturation at 94°C–96°C (breaks hydrogen bonds to separate double strands into single templates); (2) Annealing at 50°C–60°C (~55°C) (synthetic oligonucleotide primers bind to complementary sequences at the 3' ends of both strands); (3) Extension at 72°C (thermostable Taq DNA Polymerase isolated from the thermophilic bacterium Thermus aquaticus synthesizes new complementary strands by adding dNTPs from 5' to 3'). After 30 thermal cycles, the target gene is amplified > 1 billion-fold (2^30 copies).",
    "Bioreactors for Large-Scale Culturing (100–1000 Litres): Laboratory shake flasks cannot yield large quantities of recombinant proteins. Bioreactors are large stainless-steel vessels (100 to 1000 L capacity) providing optimum physiological growth conditions (temperature, pH, nutrients, dissolved oxygen, salts, and vitamins). In a continuous culture system, fresh nutrient medium is continuously added from one side while spent medium with accumulated products is drained from the other, maintaining cells in their exponentially growing log phase.",
    "Simple Stirred vs Sparged Stirred-Tank Bioreactors: A Simple Stirred-Tank Bioreactor has a curved base for optimal broth mixing, a motor-driven impeller/agitator, an oxygen delivery sparger, a foam breaker, temperature/pH control systems, and sampling ports. A Sparged Stirred-Tank Bioreactor pumps sterile air bubbles into the culture medium through perforated sparger pipes, dramatically increasing the surface area for dissolved oxygen transfer.",
    "Downstream Processing (Product Recovery & Quality Control): The series of post-fermentation operations required to prepare the biosynthetic product for commercial marketing. It includes: (1) Separation of cells/biomass from culture broth via centrifugation or filtration; (2) Purification of the recombinant protein using chromatography; (3) Formulation with suitable chemical preservatives; and (4) Stringent clinical testing and quality control trials (mandatory for therapeutic drugs). Downstream processing and quality control protocols vary from product to product."
  ],

  importantTerms: [
    {
      term: "Spooling",
      definition: "The physical collection of pure, precipitated DNA threads using a glass rod or loop after addition of chilled ethanol to cell lysate.",
      neetNote: "Direct NCERT visual term: DNA is precipitated by chilled ethanol and removed by spooling."
    },
    {
      term: "Agarose",
      definition: "A natural linear polysaccharide polymer extracted from seaweeds (Gelidium, Gracilaria) used to form the sieving gel matrix in electrophoresis.",
      neetNote: "Agarose provides a sieving effect: fragment separation is purely based on size/length, not charge density."
    },
    {
      term: "Ethidium Bromide (EtBr)",
      definition: "An intercalating fluorescent dye used to stain double-stranded DNA; fluoresces bright orange when exposed to ultraviolet (UV) radiation.",
      neetNote: "DNA bands cannot be observed in visible light; EtBr + UV radiation is mandatory."
    },
    {
      term: "Elution",
      definition: "The physical extraction and recovery of separated DNA fragments by cutting out the specific agarose gel slice and dissolving/filtering out pure DNA.",
      neetNote: "Crucial NCERT term tested in match-the-column questions."
    },
    {
      term: "Polymerase Chain Reaction (PCR)",
      definition: "An in vitro molecular technique used to exponentially amplify a specific DNA sequence into billions of copies using primers, dNTPs, and Taq polymerase.",
      neetNote: "Invented by Kary Mullis (Nobel Prize 1993). Formula for copy number: N = N0 * 2^n."
    },
    {
      term: "Taq DNA Polymerase",
      definition: "A thermostable DNA-dependent DNA polymerase enzyme isolated from the thermophilic archaebacterium/eubacterium Thermus aquaticus that remains active at high temperatures (up to 95°C).",
      neetNote: "Eliminates the need to add fresh enzyme after each denaturation cycle because it is heat-stable."
    },
    {
      term: "Oligonucleotide Primers",
      definition: "Small, chemically synthesized single-stranded DNA sequences (typically 15–25 nucleotides) complementary to the 3' flanking regions of the target DNA.",
      neetNote: "Two sets of primers (forward and reverse) are required for PCR amplification."
    },
    {
      term: "Bioreactor",
      definition: "A large-capacity vessel (100–1000 L) providing optimum biological and physical conditions for large-scale culturing of microorganisms or eukaryotic cells to synthesize recombinant products.",
      neetNote: "Maintains optimal temperature, pH, substrate, dissolved oxygen, and salts."
    },
    {
      term: "Continuous Culture System",
      definition: "A fermentation method where fresh nutrient broth is continuously fed into the bioreactor while spent culture medium is simultaneously removed from the outlet.",
      neetNote: "Maintains cultured cells in their physiologically active exponential / log growth phase for maximum product yield."
    },
    {
      term: "Sparger",
      definition: "A porous or perforated pipe located at the bottom of a bioreactor vessel through which sterile air or oxygen is bubbled to enhance gas distribution.",
      neetNote: "Increases the surface area for oxygen transfer across the liquid broth."
    },
    {
      term: "Downstream Processing",
      definition: "The collective sequence of separation, purification, preservation, and quality control testing stages that occur after biosynthesis to produce a marketable commercial product.",
      neetNote: "NCERT key point: Downstream processing and quality control testing vary from product to product."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The 8-Step Master Workflow of Recombinant DNA Technology",
      paragraphs: [
        "Recombinant DNA Technology (Genetic Engineering) is not an arbitrary set of reactions; it follows a rigorously ordered, logical biochemical pathway. To produce a genetically modified organism or recombinant therapeutic protein, scientists execute eight distinct sequential phases:",
        "Phase 1: Isolation of Genetic Material (DNA): The pure target genomic DNA containing the gene of interest must be extracted from donor tissues and freed from cellular membranes, walls, and all interfering macromolecules (RNA, proteins, lipids, polysaccharides).",
        "Phase 2: Cutting of DNA at Specific Recognition Sequences: Purified DNA is incubated with a specific Restriction Endonuclease under optimal buffer conditions to generate defined DNA fragments with cohesive (sticky) ends.",
        "Phase 3: Separation & Isolation of DNA Fragments (Agarose Gel Electrophoresis): The digestion mixture is loaded onto an agarose gel. An electric current separates fragments by size. The specific band containing the gene of interest is identified under UV light and excised from the gel (Elution).",
        "Phase 4: In Vitro Amplification via Polymerase Chain Reaction (PCR): If the quantity of isolated DNA is very small, billions of identical copies of the desired gene segment are generated through repeated thermal cycles of PCR.",
        "Phase 5: Ligation of DNA Fragment into a Cloning Vector: The amplified gene fragment and a compatible plasmid vector (cut with the same restriction enzyme) are mixed and covalently sealed by DNA Ligase to yield recombinant DNA (rDNA).",
        "Phase 6: Insertion of rDNA into a Recipient Host Organism (Transformation): The recombinant vector is introduced into competent bacterial cells (e.g., E. coli) via chemical treatment (Ca2+) and heat shock (42°C) or via physical gene gun / microinjection.",
        "Phase 7: Large-Scale Culturing of Transformed Cells in Bioreactors: Transformed host cells are transferred from laboratory flasks into massive 100–1000 L industrial Bioreactors, where continuous nutrient feeds maintain cells in active log phase to produce high yields of target protein.",
        "Phase 8: Downstream Processing & Clinical Formulation: The expressed recombinant protein is harvested, separated from cellular debris, chromatographically purified, stabilized with preservatives, and subjected to stringent quality control before marketing."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
            <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#16a34a"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
            <linearGradient id="flowGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#ea580c"/>
              <stop offset="100%" stop-color="#c2410c"/>
            </linearGradient>
          </defs>
          <rect width="760" height="480" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Master Pipeline of Recombinant DNA (rDNA) Technology (NCERT Full Sequence)</text>
          
          <!-- Step 1 to 4 (Left Column) -->
          <g transform="translate(40, 55)">
            <!-- Step 1 -->
            <rect width="320" height="75" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
            <circle cx="25" cy="37" r="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
            <text x="25" y="42" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">1</text>
            <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Isolation of Genetic Material (DNA)</text>
            <text x="50" y="44" fill="#475569" font-size="9.5">Cell lysis (Lysozyme/Cellulase/Chitinase)</text>
            <text x="50" y="58" fill="#0284c7" font-size="9" font-weight="bold">RNase + Protease + Chilled Ethanol (Spooling)</text>

            <!-- Arrow 1 -> 2 -->
            <path d="M 160 75 L 160 95" stroke="#0284c7" stroke-width="2"/>
            <polygon points="156,93 160,101 164,93" fill="#0284c7"/>

            <!-- Step 2 -->
            <g transform="translate(0, 100)">
              <rect width="320" height="75" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
              <circle cx="25" cy="37" r="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
              <text x="25" y="42" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">2</text>
              <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Cutting DNA with Restriction Enzymes</text>
              <text x="50" y="44" fill="#475569" font-size="9.5">Molecular scissors (e.g. EcoRI / Hind II)</text>
              <text x="50" y="58" fill="#0284c7" font-size="9" font-weight="bold">Cleaves specific palindromic sequences</text>
            </g>

            <!-- Arrow 2 -> 3 -->
            <path d="M 160 175 L 160 195" stroke="#0284c7" stroke-width="2"/>
            <polygon points="156,193 160,201 164,193" fill="#0284c7"/>

            <!-- Step 3 -->
            <g transform="translate(0, 200)">
              <rect width="320" height="75" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
              <circle cx="25" cy="37" r="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
              <text x="25" y="42" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">3</text>
              <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Agarose Gel Electrophoresis</text>
              <text x="50" y="44" fill="#475569" font-size="9.5">DNA (-) moves to Anode (+) by size</text>
              <text x="50" y="58" fill="#0284c7" font-size="9" font-weight="bold">EtBr + UV (Orange bands) -> Elution</text>
            </g>

            <!-- Arrow 3 -> 4 -->
            <path d="M 160 275 L 160 295" stroke="#0284c7" stroke-width="2"/>
            <polygon points="156,293 160,301 164,293" fill="#0284c7"/>

            <!-- Step 4 -->
            <g transform="translate(0, 300)">
              <rect width="320" height="75" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
              <circle cx="25" cy="37" r="14" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
              <text x="25" y="42" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">4</text>
              <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Amplification via PCR (In Vitro)</text>
              <text x="50" y="44" fill="#475569" font-size="9.5">Denaturation (94°C) -> Annealing (55°C)</text>
              <text x="50" y="58" fill="#0284c7" font-size="9" font-weight="bold">Extension (72°C Taq Pol) -> 1 Billion Copies</text>
            </g>
          </g>

          <!-- Cross-linking Bridge Arrow (Step 4 -> Step 5) -->
          <path d="M 360 380 L 400 380 L 400 95 L 400 95" stroke="#16a34a" stroke-width="2.5" fill="none"/>
          <polygon points="396,98 400,90 404,98" fill="#16a34a"/>

          <!-- Step 5 to 8 (Right Column) -->
          <g transform="translate(400, 55)">
            <!-- Step 5 -->
            <rect width="320" height="75" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="8"/>
            <circle cx="25" cy="37" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <text x="25" y="42" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">5</text>
            <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Ligation into Vector (rDNA Formation)</text>
            <text x="50" y="44" fill="#475569" font-size="9.5">Vector + Insert joined via DNA Ligase</text>
            <text x="50" y="58" fill="#16a34a" font-size="9" font-weight="bold">Creates covalent phosphodiester bonds</text>

            <!-- Arrow 5 -> 6 -->
            <path d="M 160 75 L 160 95" stroke="#16a34a" stroke-width="2"/>
            <polygon points="156,93 160,101 164,93" fill="#16a34a"/>

            <!-- Step 6 -->
            <g transform="translate(0, 100)">
              <rect width="320" height="75" fill="#ffffff" stroke="#86efac" stroke-width="1.5" rx="8"/>
              <circle cx="25" cy="37" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
              <text x="25" y="42" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">6</text>
              <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Transformation into Competent Host</text>
              <text x="50" y="44" fill="#475569" font-size="9.5">Ca2+ treatment + 42°C heat shock</text>
              <text x="50" y="58" fill="#16a34a" font-size="9" font-weight="bold">Gene Gun / Microinjection / Disarmed vector</text>
            </g>

            <!-- Arrow 6 -> 7 -->
            <path d="M 160 175 L 160 195" stroke="#16a34a" stroke-width="2"/>
            <polygon points="156,193 160,201 164,193" fill="#16a34a"/>

            <!-- Step 7 -->
            <g transform="translate(0, 200)">
              <rect width="320" height="75" fill="#ffffff" stroke="#fdba74" stroke-width="1.5" rx="8"/>
              <circle cx="25" cy="37" r="14" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
              <text x="25" y="42" fill="#c2410c" font-size="12" font-weight="bold" text-anchor="middle">7</text>
              <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Bioreactor Mass Culturing (100–1000 L)</text>
              <text x="50" y="44" fill="#475569" font-size="9.5">Simple stirred-tank or Sparged vessel</text>
              <text x="50" y="58" fill="#ea580c" font-size="9" font-weight="bold">Continuous culture keeps cells in log phase</text>
            </g>

            <!-- Arrow 7 -> 8 -->
            <path d="M 160 275 L 160 295" stroke="#ea580c" stroke-width="2"/>
            <polygon points="156,293 160,301 164,293" fill="#ea580c"/>

            <!-- Step 8 -->
            <g transform="translate(0, 300)">
              <rect width="320" height="75" fill="#ffffff" stroke="#fdba74" stroke-width="1.5" rx="8"/>
              <circle cx="25" cy="37" r="14" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
              <text x="25" y="42" fill="#c2410c" font-size="12" font-weight="bold" text-anchor="middle">8</text>
              <text x="50" y="28" fill="#0f172a" font-size="11" font-weight="bold">Downstream Processing &amp; Quality Control</text>
              <text x="50" y="44" fill="#475569" font-size="9.5">Separation + Chromatographic Purification</text>
              <text x="50" y="58" fill="#ea580c" font-size="9" font-weight="bold">Preservatives + Stringent Clinical Trials</text>
            </g>
          </g>
        </svg>`,
        caption: "Complete 8-step pipeline of Recombinant DNA Technology: from genomic DNA isolation and enzymatic restriction to PCR amplification, vector ligation, bioreactor fermentation, and downstream processing.",
        guide: "Follow the numbered pathway (1 -> 8) to trace how genes are isolated, amplified, cloned, expressed, and harvested commercially."
      },
      importantPoints: [
        "Cell wall digestion requires: Lysozyme (bacteria), Cellulase (plants), and Chitinase (fungi).",
        "RNA is eliminated with Ribonuclease (RNase); proteins are eliminated with Protease.",
        "Pure DNA is precipitated by adding CHILLED ETHANOL and collected via SPOOLING.",
        "DNA fragments are separated by Agarose Gel Electrophoresis and visualized using EtBr + UV."
      ]
    },
    {
      heading: "2. Agarose Gel Electrophoresis: Principle, Sieving Matrix, Visualization & Elution",
      paragraphs: [
        "Fundamental Principle of Electrophoresis: Electrophoresis is a biophysical analytical technique used to separate charged macromolecules (DNA, RNA, proteins) under the influence of an electric field. Because DNA and RNA molecules contain repeating negatively charged phosphate groups ($PO_4^{3-}$), they possess a net negative charge at physiological pH. When placed in an electric field, DNA fragments migrate through the gel matrix towards the positively charged electrode (Anode).",
        "The Agarose Gel Matrix & The Sieving Effect:",
        "The most commonly used matrix is Agarose, a natural linear polysaccharide polymer extracted from seaweeds (such as red algae Gelidium and Gracilaria). When dissolved in boiling electrophoresis buffer and allowed to cool, agarose polymerizes into a porous three-dimensional meshwork. This gel acts as a 'Molecular Sieve':",
        "• Smaller DNA fragments experience less frictional resistance and navigate through the agarose pores rapidly, migrating farther towards the anode.",
        "• Larger DNA fragments encounter high friction and move very slowly, remaining close to the loading wells near the negative electrode (Cathode).",
        "• Hence, DNA fragments separate strictly according to their molecular size (length in base pairs).",
        "Staining, UV Visualization & Orange Fluorescence:",
        "DNA fragments separated in an agarose gel cannot be seen in ordinary visible light without specialized staining. The gel is incubated in a solution of Ethidium Bromide (EtBr), an intercalating dye that wedges between adjacent stacked base pairs of double-stranded DNA. When the stained gel is exposed to Ultraviolet (UV) radiation (wavelength ~300 nm), the intercalated EtBr absorbs UV light and emits bright orange fluorescent bands. (Caution: Exposure to UV light and EtBr must be protected as both are mutagenic/carcinogenic).",
        "Elution of Desired DNA Fragments:",
        "Once the specific DNA band containing the gene of interest is identified (by comparing with a known molecular weight DNA ladder), that specific gel slice is cut out with a scalpel. The DNA is extracted and purified from the agarose slice. This step is formally defined as 'Elution'. The eluted pure DNA fragment is subsequently used in PCR amplification or vector ligation."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <linearGradient id="gelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0f172a"/>
              <stop offset="100%" stop-color="#1e293b"/>
            </linearGradient>
          </defs>
          <rect width="760" height="380" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Agarose Gel Electrophoresis Setup &amp; Band Resolution (NCERT Diagram)</text>
          
          <!-- Gel Tank Base -->
          <g transform="translate(100, 50)">
            <rect width="560" height="300" fill="url(#gelGrad)" rx="10" stroke="#475569" stroke-width="2"/>
            
            <!-- Electrodes Top & Bottom -->
            <!-- Cathode (-) Top -->
            <rect x="20" y="15" width="520" height="24" fill="#334155" rx="4"/>
            <text x="280" y="32" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">CATHODE (– Negative Electrode) / Loading Wells</text>
            
            <!-- Anode (+) Bottom -->
            <rect x="20" y="260" width="520" height="25" fill="#334155" rx="4"/>
            <text x="280" y="277" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">ANODE (+ Positive Electrode) / Direction of Migration ↓</text>

            <!-- Loading Wells (4 lanes) -->
            <rect x="60" y="48" width="80" height="12" fill="#0f172a" stroke="#94a3b8" rx="2"/>
            <rect x="180" y="48" width="80" height="12" fill="#0f172a" stroke="#94a3b8" rx="2"/>
            <rect x="300" y="48" width="80" height="12" fill="#0f172a" stroke="#94a3b8" rx="2"/>
            <rect x="420" y="48" width="80" height="12" fill="#0f172a" stroke="#94a3b8" rx="2"/>

            <text x="100" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">Lane 1 (Marker)</text>
            <text x="220" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">Lane 2 (Uncut)</text>
            <text x="340" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">Lane 3 (Digested)</text>
            <text x="460" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">Lane 4 (Digested)</text>

            <!-- Fluorescent Orange DNA Bands (EtBr + UV) -->
            <!-- Lane 1 Ladder -->
            <rect x="70" y="75" width="60" height="6" fill="#f97316" rx="2"/>
            <text x="50" y="80" fill="#cbd5e1" font-size="8">10 kb</text>
            <rect x="70" y="110" width="60" height="6" fill="#f97316" rx="2"/>
            <text x="50" y="115" fill="#cbd5e1" font-size="8">5 kb</text>
            <rect x="70" y="150" width="60" height="6" fill="#f97316" rx="2"/>
            <text x="50" y="155" fill="#cbd5e1" font-size="8">2 kb</text>
            <rect x="70" y="200" width="60" height="6" fill="#f97316" rx="2"/>
            <text x="50" y="205" fill="#cbd5e1" font-size="8">1 kb</text>
            <rect x="70" y="240" width="60" height="6" fill="#f97316" rx="2"/>
            <text x="50" y="245" fill="#cbd5e1" font-size="8">0.5 kb</text>

            <!-- Lane 2 (Uncut single high MW band) -->
            <rect x="190" y="72" width="60" height="8" fill="#fb923c" rx="2"/>

            <!-- Lane 3 (Digested fragments) -->
            <rect x="310" y="115" width="60" height="6" fill="#f97316" rx="2"/>
            <rect x="310" y="165" width="60" height="6" fill="#fb923c" rx="2"/>
            
            <!-- Lane 4 (Excised target band for Elution) -->
            <rect x="430" y="125" width="60" height="6" fill="#f97316" rx="2"/>
            <!-- Target band box -->
            <rect x="420" y="185" width="80" height="18" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3" rx="3"/>
            <rect x="430" y="190" width="60" height="8" fill="#f97316" rx="2"/>
            <rect x="430" y="235" width="60" height="6" fill="#fb923c" rx="2"/>

            <!-- Leader line for Elution -->
            <line x1="505" y1="194" x2="540" y2="194" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="545" y="198" fill="#38bdf8" font-size="10" font-weight="bold">Target Band for Elution</text>
          </g>
        </svg>`,
        caption: "Agarose gel electrophoresis apparatus showing migration of negatively charged DNA from Cathode (-) to Anode (+). Staining with Ethidium Bromide under UV light reveals bright orange fluorescence bands resolved by molecular size.",
        guide: "Observe that smallest fragments travel closest to the positive anode, while largest fragments remain near the cathode wells. The desired fragment is cut out by Elution."
      },
      importantPoints: [
        "DNA is NEGATIVELY charged and migrates towards the positive ANODE.",
        "Agarose acts as a molecular sieve; smaller fragments move faster and farther.",
        "Staining with Ethidium Bromide (EtBr) + UV exposure gives BRIGHT ORANGE bands.",
        "DNA bands cannot be observed in normal visible light without EtBr and UV radiation.",
        "Elution is the process of cutting out and extracting the separated DNA band from the agarose gel."
      ]
    },
    {
      heading: "3. Polymerase Chain Reaction (PCR): 3 Thermal Steps, Taq Polymerase & Amplification Math",
      paragraphs: [
        "Invention & Significance: Invented in 1983 by Kary Mullis, Polymerase Chain Reaction (PCR) revolutionized molecular biology by enabling automated in vitro synthesis and exponential amplification of millions to billions of copies of a specific target DNA sequence starting from a minute quantity (e.g., a single hair follicle, a drop of dried blood, or a tiny fossil bone fragment).",
        "The Four Essential Ingredients of a PCR Mixture:",
        "1. Template DNA: The sample containing the target gene segment to be amplified.",
        "2. Primers (Two Sets): Small chemically synthesized oligonucleotides (15–25 bases long) that are complementary to the 3' flanking ends of both DNA strands.",
        "3. Deoxynucleoside Triphosphates (dNTPs): A mixture of dATP, dCTP, dGTP, and dTTP providing both the raw building blocks and the biochemical energy (pyrophosphate cleavage) for DNA synthesis.",
        "4. Thermostable DNA Polymerase (Taq Polymerase) & Buffer with Mg2+: A specialized heat-tolerant enzyme isolated from the thermophilic bacterium Thermus aquaticus (which thrives in boiling hydrothermal vents and hot springs at temperatures exceeding 80°C–90°C). Taq polymerase operates optimally at 72°C and withstands repeated denaturation cycles without denaturing, eliminating the need to add fresh enzyme in every cycle.",
        "The Three Sequential Steps of Each PCR Thermal Cycle:",
        "Step 1: Denaturation (High Temperature: 94°C–96°C): The reaction mixture is heated to ~94°C for 30–60 seconds. This high thermal energy disrupts all inter-strand hydrogen bonds between complementary base pairs, unwinding and separating the double-stranded template DNA into two single-stranded DNA templates.",
        "Step 2: Annealing of Primers (Moderate Temperature: 50°C–60°C, Typically 55°C): The temperature is lowered to approximately 55°C. At this temperature, the two sets of oligonucleotide primers hybridize (anneal) to their specific complementary sequences at the 3' ends of both single-stranded DNA templates via hydrogen bonding.",
        "Step 3: Extension of Primers (Optimum Temperature: 72°C): The temperature is raised to 72°C, which is the optimal catalytic temperature for Taq DNA Polymerase. Using the free 3'-OH groups of the annealed primers, Taq polymerase synthesizes new complementary DNA strands by sequentially adding dNTPs in the 5' -> 3' direction along the template strands.",
        "Exponential Amplification Mathematics:",
        "In each PCR cycle, the number of target DNA molecules doubles. If the process is repeated $n$ times, the final number of DNA molecules ($N$) produced from an initial template count ($N_0$) is given by: $N = N_0 \\times 2^n$. After 30 completed cycles, a single starting DNA molecule produces: $2^{30} = 1,073,741,824$ copies (over 1 billion copies!)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <linearGradient id="pcrGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="pcrGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </linearGradient>
            <linearGradient id="pcrGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#16a34a"/>
              <stop offset="100%" stop-color="#15803d"/>
            </linearGradient>
          </defs>
          <rect width="760" height="480" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Polymerase Chain Reaction (PCR) - 3 Steps &amp; Thermal Profile (NCERT Figure)</text>
          
          <!-- dsDNA Template Start -->
          <g transform="translate(180, 50)">
            <rect width="400" height="50" fill="#ffffff" stroke="#94a3b8" rx="6"/>
            <text x="200" y="18" fill="#334155" font-size="10.5" font-weight="bold" text-anchor="middle">Target Double-Stranded DNA (dsDNA)</text>
            <text x="30" y="38" fill="#0369a1" font-size="12" font-weight="bold">5' —————————————————————— 3'</text>
            <text x="30" y="48" fill="#0369a1" font-size="12" font-weight="bold">3' —————————————————————— 5'</text>
          </g>

          <!-- Step 1: Denaturation -->
          <g transform="translate(60, 120)">
            <rect width="640" height="90" fill="#fef2f2" stroke="#f87171" stroke-width="1.5" rx="8"/>
            <rect x="12" y="10" width="160" height="24" fill="url(#pcrGrad1)" rx="4"/>
            <text x="92" y="26" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">STEP 1: DENATURATION (94°C)</text>
            <text x="180" y="26" fill="#991b1b" font-size="10">High temperature breaks H-bonds -> 2 single strands separate</text>

            <text x="30" y="55" fill="#0369a1" font-size="12" font-weight="bold">5' ————————————————————————————————————— 3'</text>
            <text x="30" y="80" fill="#0369a1" font-size="12" font-weight="bold">3' ————————————————————————————————————— 5'</text>
          </g>

          <!-- Step 2: Annealing -->
          <g transform="translate(60, 225)">
            <rect width="640" height="105" fill="#f0f9ff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
            <rect x="12" y="10" width="160" height="24" fill="url(#pcrGrad2)" rx="4"/>
            <text x="92" y="26" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">STEP 2: ANNEALING (50–60°C)</text>
            <text x="180" y="26" fill="#075985" font-size="10">Oligonucleotide primers bind to complementary sequences at 3' ends</text>

            <!-- Top strand with primer at 3' end -->
            <text x="30" y="58" fill="#0369a1" font-size="12" font-weight="bold">5' ————————————————————————————————————— 3'</text>
            <rect x="420" y="62" width="90" height="14" fill="#f59e0b" rx="2"/>
            <text x="465" y="73" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Primer 5'->3'</text>
            <polygon points="418,69 423,65 423,73" fill="#f59e0b"/>

            <!-- Bottom strand with primer at 3' end -->
            <rect x="30" y="78" width="90" height="14" fill="#f59e0b" rx="2"/>
            <text x="75" y="89" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Primer 5'->3'</text>
            <polygon points="122,85 117,81 117,89" fill="#f59e0b"/>
            <text x="30" y="100" fill="#0369a1" font-size="12" font-weight="bold">3' ————————————————————————————————————— 5'</text>
          </g>

          <!-- Step 3: Extension -->
          <g transform="translate(60, 345)">
            <rect width="640" height="120" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5" rx="8"/>
            <rect x="12" y="10" width="160" height="24" fill="url(#pcrGrad3)" rx="4"/>
            <text x="92" y="26" fill="#ffffff" font-size="10.5" font-weight="bold" text-anchor="middle">STEP 3: EXTENSION (72°C)</text>
            <text x="180" y="26" fill="#14532d" font-size="10">Taq Polymerase + dNTPs extend primers from 5' to 3'</text>

            <g transform="translate(30, 42)">
              <text x="0" y="16" fill="#0369a1" font-size="11" font-weight="bold">5' ————————————————————————————————————— 3'</text>
              <text x="100" y="32" fill="#15803d" font-size="11" font-weight="bold">&lt;— — — — — [New Strand Synthesized by Taq Pol] 5'</text>
              
              <text x="0" y="55" fill="#15803d" font-size="11" font-weight="bold">5' [New Strand Synthesized by Taq Pol] — — — — —&gt;</text>
              <text x="0" y="70" fill="#0369a1" font-size="11" font-weight="bold">3' ————————————————————————————————————— 5'</text>
            </g>

            <rect x="420" y="70" width="200" height="38" fill="#dcfce7" stroke="#16a34a" stroke-width="1" rx="6"/>
            <text x="520" y="86" fill="#14532d" font-size="10" font-weight="bold" text-anchor="middle">After 30 Thermal Cycles:</text>
            <text x="520" y="100" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">~1 Billion Copies (10<tspan baseline-shift="super" font-size="8">9</tspan>)</text>
          </g>
        </svg>`,
        caption: "The three thermal steps of Polymerase Chain Reaction (PCR): Denaturation at 94°C, Annealing of oligonucleotide primers at 55°C, and Extension by thermostable Taq DNA Polymerase at 72°C, achieving 1 billion-fold amplification in 30 cycles.",
        guide: "Memorize the exact temperatures and sequences: Denaturation (94°C) -> Annealing (55°C) -> Extension (72°C)."
      },
      tables: [
        {
          title: "Comprehensive Comparison: PCR (In Vitro) vs Cellular DNA Replication (In Vivo)",
          headers: ["Feature / Parameter", "PCR Amplification (In Vitro)", "Cellular DNA Replication (In Vivo)"],
          rows: [
            ["Location", "In automated thermal cycler machine in vitro", "Inside nucleus (eukaryotes) or cytoplasm (prokaryotes)"],
            ["Strand Separation", "Thermal denaturation at high temperature (94°C)", "Enzymatic unwinding by DNA Helicase + Topoisomerase"],
            ["Primers Used", "Chemically synthesized short DNA oligonucleotides", "Short RNA primers synthesized by RNA Primase"],
            ["Polymerase Enzyme", "Thermostable Taq DNA Polymerase (Thermus aquaticus)", "DNA Polymerase III / DNA Polymerase delta and epsilon"],
            ["Replication Mechanism", "Discontinuous thermal cycling (2^n doubling)", "Continuous coordinated leading & lagging strand replication"],
            ["Speed & Scalability", "1 billion copies generated in ~2 hours (30 cycles)", "Regulated cell cycle progression during S phase"]
          ]
        }
      ],
      importantPoints: [
        "PCR was invented by Kary Mullis in 1983.",
        "3 steps in order: (1) Denaturation (94°C), (2) Annealing (55°C), (3) Extension (72°C).",
        "Taq Polymerase is isolated from Thermus aquaticus (thermostable bacterium).",
        "Taq polymerase is a DNA-dependent DNA polymerase active at 72°C.",
        "After 30 cycles of PCR, a target DNA fragment is amplified approximately 1 billion times (10^9 copies)."
      ]
    },
    {
      heading: "4. Industrial Bioreactors: Stirred-Tank Architecture, Continuous Culture & Downstream Processing",
      paragraphs: [
        "Why are Bioreactors Essential? Small-scale laboratory shake flasks cannot provide more than a few grams of product. When commercial quantities of recombinant therapeutic proteins (such as recombinant insulin, hepatitis B vaccine, or industrial enzymes) are required, host cells must be cultured in massive vessels called 'Bioreactors' with capacities ranging from 100 to 1000 Litres.",
        "The Concept of Continuous Culture System:",
        "In a batch culture, cells progress from lag phase to log phase, then enter stationary and death phases as nutrients deplete and toxic metabolites accumulate. In contrast, in a 'Continuous Culture System', fresh nutrient medium is continuously pumped into the bioreactor from one port while spent medium containing the synthesized product is simultaneously drained from another port. This continuous replenishment keeps the cultured microbes perpetually in their physiologically most active logarithmic (exponential) growth phase, achieving maximum biomass and recombinant product yield.",
        "Design & Components of Stirred-Tank Bioreactors (NCERT Core Figure):",
        "A stirred-tank bioreactor is typically a cylindrical stainless-steel vessel with a curved base. The curved base facilitates uniform mixing of the reactor contents without dead zones. Key operational modules include:",
        "1. Agitator / Impeller System: Motor-driven flat blades or curved impellers ensure even mixing and homogeneous distribution of nutrients, cells, and dissolved gases throughout the vessel.",
        "2. Oxygen Delivery / Sparger System: A sterile air inlet pipe with a perforated sparger introduces micro-bubbles of oxygen into the liquid broth.",
        "3. Foam Control / Foam Breaker: Rapid microbial metabolism generates proteinaceous foam on the liquid surface, which can clog exhaust filters. A rotating mechanical foam breaker destroys surface foam.",
        "4. Temperature & pH Control Systems: A cooling water jacket circulates cold water to dissipate metabolic heat, while automated acid/base pumps maintain strict physiological pH.",
        "5. Steam Inlets for In Situ Sterilization: Enables thorough autoclaving of the vessel prior to inoculation.",
        "6. Sampling Ports: Small valves that allow periodic aseptic removal of small culture samples for quality testing and cell density measurement without interrupting fermentation.",
        "Simple Stirred-Tank vs Sparged Stirred-Tank Bioreactors:",
        "• Simple Stirred-Tank Bioreactor: Relies primarily on the mechanical agitator blades to stir the broth and facilitate surface oxygen dissolution.",
        "• Sparged Stirred-Tank Bioreactor: Incorporates a high-pressure perforated sparger ring at the base that bubbles sterile air into the broth. The thousands of rising micro-bubbles dramatically increase the surface area for oxygen transfer, preventing oxygen starvation in high-density cultures.",
        "Downstream Processing (DSP):",
        "Downstream processing refers to all post-fermentation operations required to convert crude bioreactor broth into a highly purified, stable, marketable commercial pharmaceutical product. The main stages are:",
        "1. Solid-Liquid Separation: Removing bacterial cells or mycelia from the broth using continuous centrifugation or microfiltration.",
        "2. Purification of Target Product: Isolating the target recombinant protein from host proteins using multi-stage column chromatography (ion-exchange, affinity, gel filtration).",
        "3. Formulation & Preservation: Mixing the purified protein with pharmaceutical-grade excipients and chemical preservatives to ensure long-term stability and shelf life.",
        "4. Quality Control & Clinical Trials: Stringent quality assurance tests, purity assays, and human clinical trials (for medicines/vaccines) to verify safety, efficacy, and absence of pyrogens.",
        "Key NCERT Mandate: Downstream processing and quality control testing vary from product to product depending on chemical nature, purity requirements, and clinical application."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
          <defs>
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e2e8f0"/>
              <stop offset="50%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#cbd5e1"/>
            </linearGradient>
          </defs>
          <rect width="760" height="480" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Comparative Architecture: Simple Stirred-Tank vs Sparged Stirred-Tank Bioreactor</text>
          
          <!-- (a) Simple Stirred-Tank Bioreactor -->
          <g transform="translate(35, 55)">
            <rect width="330" height="400" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" rx="10"/>
            <text x="165" y="26" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">(a) Simple Stirred-Tank Bioreactor</text>

            <!-- Motor on Top -->
            <rect x="135" y="42" width="60" height="30" fill="#475569" rx="4"/>
            <text x="165" y="61" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">Motor</text>

            <!-- Central Shaft -->
            <rect x="161" y="72" width="8" height="250" fill="#64748b"/>

            <!-- Tank Outer Body (Curved Bottom) -->
            <path d="M 55 90 L 55 310 Q 55 350 165 350 Q 275 350 275 310 L 275 90 Z" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
            
            <!-- Culture Broth level -->
            <path d="M 57 140 L 57 310 Q 57 348 165 348 Q 273 348 273 310 L 273 140 Z" fill="#e0f2fe" opacity="0.6"/>

            <!-- Flat Impeller Blades -->
            <rect x="100" y="240" width="130" height="12" fill="#0284c7" rx="2"/>
            <rect x="100" y="280" width="130" height="12" fill="#0284c7" rx="2"/>

            <!-- Foam Breaker -->
            <rect x="115" y="145" width="100" height="10" fill="#dc2626" rx="2"/>
            <text x="220" y="153" fill="#dc2626" font-size="8.5" font-weight="bold">Foam Breaker</text>

            <!-- pH Control & Steam Ports -->
            <line x1="75" y1="90" x2="75" y2="120" stroke="#16a34a" stroke-width="3"/>
            <text x="80" y="115" fill="#16a34a" font-size="8" font-weight="bold">pH / Acid-Base Port</text>

            <!-- Sterile Air Inlet -->
            <path d="M 30 300 L 95 300" stroke="#0284c7" stroke-width="2.5"/>
            <text x="25" y="295" fill="#0369a1" font-size="8" font-weight="bold">Sterile Air</text>

            <!-- Sampling Port -->
            <path d="M 275 320 L 305 320" stroke="#ea580c" stroke-width="2.5"/>
            <text x="308" y="323" fill="#ea580c" font-size="8" font-weight="bold">Sampling Port</text>
            
            <!-- Curved Base Label -->
            <text x="165" y="375" fill="#475569" font-size="9" text-anchor="middle">Curved base facilitates even mixing</text>
          </g>

          <!-- (b) Sparged Stirred-Tank Bioreactor -->
          <g transform="translate(395, 55)">
            <rect width="330" height="400" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" rx="10"/>
            <text x="165" y="26" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">(b) Sparged Stirred-Tank Bioreactor</text>

            <!-- Tank Outer Body -->
            <path d="M 55 90 L 55 310 Q 55 350 165 350 Q 275 350 275 310 L 275 90 Z" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
            
            <!-- Culture Broth level with rising bubbles -->
            <path d="M 57 140 L 57 310 Q 57 348 165 348 Q 273 348 273 310 L 273 140 Z" fill="#dcfce7" opacity="0.6"/>

            <!-- Perforated Sparger Ring at bottom -->
            <rect x="85" y="315" width="160" height="12" fill="#16a34a" rx="4"/>
            <circle cx="105" cy="321" r="2" fill="#ffffff"/>
            <circle cx="125" cy="321" r="2" fill="#ffffff"/>
            <circle cx="145" cy="321" r="2" fill="#ffffff"/>
            <circle cx="165" cy="321" r="2" fill="#ffffff"/>
            <circle cx="185" cy="321" r="2" fill="#ffffff"/>
            <circle cx="205" cy="321" r="2" fill="#ffffff"/>
            <circle cx="225" cy="321" r="2" fill="#ffffff"/>

            <!-- Air Inlet pipe to sparger -->
            <path d="M 30 321 L 85 321" stroke="#16a34a" stroke-width="3"/>
            <text x="25" y="315" fill="#15803d" font-size="8" font-weight="bold">Sparger Air Inlet</text>

            <!-- Rising Micro-Bubbles -->
            <circle cx="105" cy="280" r="5" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="125" cy="250" r="6" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="145" cy="210" r="7" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="185" cy="260" r="5" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="205" cy="230" r="6" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="225" cy="190" r="7" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="165" cy="160" r="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>

            <text x="165" y="130" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">Bubbles Increase Surface Area</text>
            <text x="165" y="145" fill="#475569" font-size="8.5" text-anchor="middle">for Oxygen Transfer</text>

            <text x="165" y="375" fill="#475569" font-size="9" text-anchor="middle">Sparger ring dramatically enhances dissolved O2</text>
          </g>
        </svg>`,
        caption: "Exact NCERT comparison of bioreactors: (a) Simple Stirred-Tank Bioreactor with flat impeller blades, foam breaker, and curved base; and (b) Sparged Stirred-Tank Bioreactor with perforated sparger ring pumping micro-bubbles for enhanced oxygen transfer.",
        guide: "Identify all labelled components: agitator shaft, foam breaker, pH/acid-base ports, sterile air inlet, sparger ring, sampling port, and curved vessel base."
      },
      tables: [
        {
          title: "Comprehensive Comparison: Upstream Processing vs Downstream Processing",
          headers: ["Feature / Stage", "Upstream Processing (Fermentation Phase)", "Downstream Processing (DSP / Harvest Phase)"],
          rows: [
            ["Definition & Scope", "All biological processes up to and including biosynthesis of product in bioreactors", "All physical & chemical processes after fermentation to purify and market product"],
            ["Key Objectives", "Maximizing microbial biomass & target gene expression", "Separation of cell mass, high-resolution purification, formulation & safety testing"],
            ["Key Equipment", "Shake flasks, fermenters, stirred-tank / sparged bioreactors", "Centrifuges, ultrafiltration units, chromatography columns, lyophilizers"],
            ["Control Parameters", "Temperature, pH, dissolved oxygen, nutrient feed rates, agitation", "Purity percentage, stability, preservative compatibility, clinical trial endpoints"],
            ["Product Status", "Crude intracellular or extracellular broth mixture", "Pure, formulated, sterile, clinically tested commercial product"]
          ]
        }
      ],
      importantPoints: [
        "Bioreactors operate on 100 to 1000 Litre capacities to achieve high product yields.",
        "Continuous culture system keeps cells permanently in their active LOG (exponential) phase.",
        "Simple stirred-tank has a curved base to facilitate even mixing; Sparged bioreactor uses bubbles for maximum O2 transfer.",
        "Downstream processing involves separation and purification followed by quality testing.",
        "Downstream processing and quality control testing VARY from product to product."
      ]
    }
  ],

  formulae: [
    {
      title: "PCR Amplification & Bioprocess Calculation Formulas",
      formula: "1. PCR Copy Number: N = N_0 \\times 2^n \\quad (where\\ n = number\\ of\\ cycles)\n2. For 1 Starting Template Molecule (N_0 = 1): N = 2^{30} \\approx 1.07 \\times 10^9 \\text{ copies (1 Billion)}\n3. Agarose Electrophoresis Migration: \\text{Migration Velocity (v)} \\propto \\frac{\\text{Net Negative Charge (Q)}}{\\text{Molecular Size / Frictional Coefficient (f)}}\n4. Bioreactor Dilution Rate (Continuous Culture): D = \\frac{F}{V} \\quad (F = \\text{Flow Rate}, V = \\text{Reactor Volume})",
      meaning: "Quantitative formulas for calculating PCR amplification yield, electrophoretic DNA mobility, and bioreactor dilution kinetics.",
      symbols: "N: Final DNA copy count; N0: Initial DNA copy count; n: Number of thermal cycles; D: Dilution rate; F: Medium feed rate (L/h); V: Vessel volume (L)",
      unit: "Molecular Genetics & Bioengineering"
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
      <rect width="760" height="400" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="380" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Integrated Summary: PCR, Electrophoresis &amp; Bioprocess Engineering</text>
      
      <!-- Box 1: PCR Thermal Steps -->
      <g transform="translate(25, 55)">
        <rect width="225" height="320" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
        <rect x="8" y="8" width="209" height="28" fill="#0284c7" rx="5"/>
        <text x="112" y="26" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. PCR THERMAL CYCLE</text>
        
        <g transform="translate(10, 48)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• 1. Denaturation</text>
          <text x="10" y="26" fill="#475569" font-size="9">94°C: melts H-bonds</text>
          <text x="10" y="38" fill="#475569" font-size="9">Yields ssDNA templates</text>
        </g>

        <g transform="translate(10, 105)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• 2. Annealing</text>
          <text x="10" y="26" fill="#475569" font-size="9">55°C: primers bind to 3'</text>
          <text x="10" y="38" fill="#475569" font-size="9">Two oligonucleotide sets</text>
        </g>

        <g transform="translate(10, 160)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• 3. Extension</text>
          <text x="10" y="26" fill="#475569" font-size="9">72°C: Taq Polymerase</text>
          <text x="10" y="38" fill="#475569" font-size="9">Thermus aquaticus</text>
          <text x="10" y="50" fill="#475569" font-size="9">Synthesizes 5'->3'</text>
        </g>

        <g transform="translate(10, 230)">
          <text x="0" y="12" fill="#0369a1" font-size="10.5" font-weight="bold">• 30 Cycles Output</text>
          <text x="10" y="26" fill="#16a34a" font-size="9.5" font-weight="bold">1 Billion (10^9) Copies</text>
        </g>
      </g>

      <!-- Box 2: Gel Electrophoresis -->
      <g transform="translate(265, 55)">
        <rect width="230" height="320" fill="#ffffff" stroke="#4ade80" stroke-width="1.5" rx="8"/>
        <rect x="8" y="8" width="214" height="28" fill="#16a34a" rx="5"/>
        <text x="115" y="26" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. GEL ELECTROPHORESIS</text>
        
        <g transform="translate(10, 48)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Charge &amp; Direction</text>
          <text x="10" y="26" fill="#475569" font-size="9">DNA is negatively charged</text>
          <text x="10" y="38" fill="#475569" font-size="9">Cathode (-) to Anode (+)</text>
        </g>

        <g transform="translate(10, 105)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Agarose Sieve</text>
          <text x="10" y="26" fill="#475569" font-size="9">Seaweed polysaccharide</text>
          <text x="10" y="38" fill="#475569" font-size="9">Small fragments travel far</text>
        </g>

        <g transform="translate(10, 160)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Staining &amp; UV</text>
          <text x="10" y="26" fill="#475569" font-size="9">Ethidium Bromide (EtBr)</text>
          <text x="10" y="38" fill="#ea580c" font-size="9" font-weight="bold">Bright Orange Bands under UV</text>
        </g>

        <g transform="translate(10, 220)">
          <text x="0" y="12" fill="#15803d" font-size="10.5" font-weight="bold">• Elution</text>
          <text x="10" y="26" fill="#475569" font-size="9">Excising target band</text>
          <text x="10" y="38" fill="#475569" font-size="9">Purifying DNA from gel</text>
        </g>
      </g>

      <!-- Box 3: Bioreactors & DSP -->
      <g transform="translate(510, 55)">
        <rect width="225" height="320" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" rx="8"/>
        <rect x="8" y="8" width="209" height="28" fill="#d97706" rx="5"/>
        <text x="112" y="26" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. BIOREACTORS &amp; DSP</text>
        
        <g transform="translate(10, 48)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Industrial Scaling</text>
          <text x="10" y="26" fill="#475569" font-size="9">100 - 1000 Litres</text>
          <text x="10" y="38" fill="#475569" font-size="9">Maintains active log phase</text>
        </g>

        <g transform="translate(10, 105)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Vessel Types</text>
          <text x="10" y="26" fill="#475569" font-size="9">Simple Stirred (curved base)</text>
          <text x="10" y="38" fill="#475569" font-size="9">Sparged (air bubble ring)</text>
        </g>

        <g transform="translate(10, 160)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Downstream Processing</text>
          <text x="10" y="26" fill="#475569" font-size="9">1. Biomass separation</text>
          <text x="10" y="38" fill="#475569" font-size="9">2. Product purification</text>
          <text x="10" y="50" fill="#475569" font-size="9">3. Preservative formulation</text>
        </g>

        <g transform="translate(10, 235)">
          <text x="0" y="12" fill="#b45309" font-size="10.5" font-weight="bold">• Quality Assurance</text>
          <text x="10" y="26" fill="#475569" font-size="9">DSP varies with product</text>
        </g>
      </g>
    </svg>`,
    caption: "Master summary chart of PCR amplification, Agarose Gel Electrophoresis resolution, Bioreactor mass culturing, and Downstream Processing."
  },

  neetImportantPoints: [
    "1. Bacterial cell lysis uses Lysozyme; plant cell lysis uses Cellulase; fungal cell lysis uses Chitinase.",
    "2. Pure DNA is precipitated by adding CHILLED ETHANOL and recovered via SPOOLING.",
    "3. DNA is negatively charged and migrates towards the positive ANODE during electrophoresis.",
    "4. Agarose gel sieves DNA strictly by size (smaller fragments travel farther).",
    "5. Ethidium Bromide (EtBr) staining under UV radiation reveals bright ORANGE fluorescent DNA bands.",
    "6. Elution is the process of cutting out the separated DNA band from agarose gel and extracting pure DNA.",
    "7. PCR was invented by Kary Mullis in 1983; its 3 steps in order are: Denaturation (94°C) -> Annealing (55°C) -> Extension (72°C).",
    "8. Taq DNA Polymerase is isolated from Thermus aquaticus and functions optimally at 72°C.",
    "9. After 30 cycles of PCR, a target DNA fragment is amplified approximately 1 billion times (10^9 copies).",
    "10. Bioreactor vessels handle large volumes (100 to 1000 Litres) to produce commercial quantities of recombinant products.",
    "11. Continuous culture maintains cells in their physiologically most active logarithmic (exponential) growth phase.",
    "12. Simple stirred-tank has a curved base for mixing; Sparged stirred-tank uses air bubbles to increase oxygen transfer surface area.",
    "13. Downstream processing comprises separation and purification followed by quality testing.",
    "14. Downstream processing and quality control testing vary from product to product."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing the order of PCR steps.",
      correctFact: "The correct sequence is: 1. Denaturation (94°C) -> 2. Annealing (55°C) -> 3. Extension (72°C).",
      whyItMattersForNEET: "Frequently tested chronological sequence question in NEET."
    },
    {
      commonConfusion: "Thinking DNA bands can be seen in visible light immediately after electrophoresis.",
      correctFact: "DNA fragments are completely invisible in visible light; they MUST be stained with Ethidium Bromide (EtBr) and illuminated with UV radiation.",
      whyItMattersForNEET: "Tested in experimental assertion-reason questions."
    },
    {
      commonConfusion: "Believing larger DNA fragments move faster in agarose gel.",
      correctFact: "Smaller fragments encounter less sieving resistance and move FASTER and FARTHER towards the positive anode.",
      whyItMattersForNEET: "Band migration interpretation in NEET diagrams."
    },
    {
      commonConfusion: "Assuming Taq polymerase is isolated from a plant or fungus.",
      correctFact: "Taq polymerase is isolated from the thermophilic bacterium Thermus aquaticus.",
      whyItMattersForNEET: "Direct organism-matching questions."
    },
    {
      commonConfusion: "Confusing Upstream with Downstream Processing.",
      correctFact: "Upstream processing is the biosynthesis/fermentation phase in the bioreactor; Downstream processing is the post-fermentation separation, purification, and clinical formulation phase.",
      whyItMattersForNEET: "Definition matching in NEET bioprocess engineering questions."
    }
  ],

  quickRevision: [
    "• Cell Lysis: Lysozyme (bacteria), Cellulase (plants), Chitinase (fungi); RNAse removes RNA, Protease removes protein.",
    "• Spooling: Precipitation of pure DNA threads using chilled ethanol.",
    "• Electrophoresis: DNA (-) migrates to Anode (+) through agarose matrix; smaller fragments move faster.",
    "• Visualization: Ethidium Bromide (EtBr) + UV light = Bright Orange bands.",
    "• Elution: Cutting and extracting desired DNA band from agarose gel.",
    "• PCR (Kary Mullis): 3 Steps = Denaturation (94°C) -> Annealing (55°C) -> Extension (72°C, Taq Pol).",
    "• Taq Polymerase: Thermostable DNA-dependent DNA polymerase from Thermus aquaticus.",
    "• PCR Math: N = 2^30 ≈ 1 Billion (10^9) copies after 30 cycles.",
    "• Bioreactors: 100–1000 L volume; Continuous culture maintains cells in active LOG phase.",
    "• Simple Stirred: Curved base for mixing; Sparged Stirred: Micro-bubbles increase O2 transfer.",
    "• Downstream Processing (DSP): Separation, purification, preservatives, and clinical trials (varies per product)."
  ],

  practiceQuestions: [
    {
      id: "pq-pcr-rdna-1",
      question: "Which of the following is the correct chronological sequence of steps in a single cycle of Polymerase Chain Reaction (PCR)?",
      options: [
        "Annealing -> Denaturation -> Extension",
        "Denaturation -> Extension -> Annealing",
        "Denaturation -> Annealing -> Extension",
        "Extension -> Denaturation -> Annealing"
      ],
      correctAnswer: 2,
      explanation: "Each thermal cycle of PCR consists of three sequential steps: (1) Denaturation of double-stranded DNA template at 94°C–96°C, (2) Annealing of oligonucleotide primers at 50°C–60°C (~55°C), and (3) Extension of primers by Taq DNA Polymerase at 72°C.",
      difficulty: "Easy"
    },
    {
      id: "pq-pcr-rdna-2",
      question: "What is the primary function of a continuous culture system in a commercial bioreactor?",
      options: [
        "To allow cells to reach the stationary and decline phases rapidly.",
        "To maintain the cultured microorganisms in their physiologically active logarithmic (exponential) growth phase.",
        "To degrade the recombinant product as soon as it is synthesized.",
        "To minimize the amount of dissolved oxygen available in the vessel."
      ],
      correctAnswer: 1,
      explanation: "In a continuous culture system, fresh nutrient medium is added continuously from one side while used medium with product is removed from the other side. This maintains the cells in their exponentially growing log phase, resulting in maximum biomass and high product yield (NCERT).",
      difficulty: "Medium"
    },
    {
      id: "pq-pcr-rdna-3",
      question: "In agarose gel electrophoresis, DNA fragments separate according to their size because:",
      options: [
        "Positively charged DNA fragments are repelled by the anode.",
        "The agarose matrix provides a sieving effect where smaller fragments move farther than larger ones.",
        "Ethidium bromide alters the charge density of larger fragments selectively.",
        "Only single-stranded DNA can enter the agarose gel pores."
      ],
      correctAnswer: 1,
      explanation: "Agarose gel acts as a molecular sieve. All DNA molecules have the same charge-to-mass ratio (negative phosphate backbone), so their migration speed through the agarose matrix is determined purely by size: smaller fragments encounter less friction and travel farther towards the positive anode.",
      difficulty: "Medium"
    },
    {
      id: "pq-pcr-rdna-4",
      question: "During downstream processing of a recombinant therapeutic drug, which of the following is NOT a routine component?",
      options: [
        "Separation of microbial biomass from liquid broth",
        "High-resolution chromatographic purification",
        "Addition of primers and Taq polymerase for in vitro amplification",
        "Clinical quality control trials and formulation with preservatives"
      ],
      correctAnswer: 2,
      explanation: "PCR amplification using primers and Taq polymerase is an early upstream tool of genetic engineering (Phase 4), not a downstream processing step. Downstream processing encompasses post-biosynthesis recovery: separation, purification, preservative formulation, and clinical safety testing.",
      difficulty: "Medium"
    }
  ],

  pyqs: [
    {
      id: "pyq-pcr-rdna-1",
      exam: "NEET UG",
      examName: "NEET UG 2021",
      examYear: "2021",
      verifiedExam: "NEET UG 2021",
      year: 2021,
      question: "During the process of gene amplification using PCR, if very high temperature is not maintained in the beginning, then which of the following steps of PCR will be affected first?",
      options: [
        "Annealing",
        "Extension",
        "Denaturation",
        "Ligation"
      ],
      correctAnswer: 2,
      explanation: "Denaturation is the initial step of PCR requiring high temperature (94°C–96°C) to break hydrogen bonds between complementary strands and separate template dsDNA into single strands. If high temperature is not maintained at the start, denaturation fails first.",
      conceptTested: "Thermal Steps of PCR (Denaturation)",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-pcr-rdna-2",
      exam: "NEET UG",
      examName: "NEET UG 2020",
      examYear: "2020",
      verifiedExam: "NEET UG 2020",
      year: 2020,
      question: "The enzyme Taq polymerase was isolated from:",
      options: [
        "Thermus aquaticus",
        "Thiobacillus ferroxidans",
        "Bacillus thuringiensis",
        "Thermococcus litoralis"
      ],
      correctAnswer: 0,
      explanation: "Taq polymerase is a thermostable DNA polymerase isolated from the thermophilic bacterium Thermus aquaticus. It remains catalytically active even at the high temperatures used during PCR denaturation.",
      conceptTested: "Source of Thermostable Taq DNA Polymerase",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-pcr-rdna-3",
      exam: "NEET UG",
      examName: "NEET UG 2018",
      examYear: "2018",
      verifiedExam: "NEET UG 2018",
      year: 2018,
      question: "The correct order of steps in Polymerase Chain Reaction (PCR) is:",
      options: [
        "Extension, Denaturation, Annealing",
        "Annealing, Extension, Denaturation",
        "Denaturation, Extension, Annealing",
        "Denaturation, Annealing, Extension"
      ],
      correctAnswer: 3,
      explanation: "The three thermal phases of each PCR cycle in chronological order are: (1) Denaturation at 94°C, (2) Annealing at 50°C–60°C, and (3) Extension at 72°C by Taq polymerase (NCERT).",
      conceptTested: "Steps of PCR in Chronological Sequence",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-pcr-rdna-4",
      exam: "NEET UG",
      examName: "NEET UG 2019",
      examYear: "2019",
      verifiedExam: "NEET UG 2019",
      year: 2019,
      question: "Following statements describe the characteristics of the enzyme Restriction Endonuclease. Identify the incorrect statement.",
      options: [
        "The enzyme cuts DNA molecule at identified position within the DNA",
        "The enzyme binds DNA at specific recognition sequence and cuts each of the two strands of the double helix at specific points in their sugar-phosphate backbones",
        "The enzyme recognizes a specific palindromic nucleotide sequence in the DNA",
        "The enzyme cuts the DNA molecule at terminal ends"
      ],
      correctAnswer: 3,
      explanation: "Exonucleases remove nucleotides from the terminal ends of DNA, whereas Restriction Endonucleases make cuts at specific internal palindromic sequences within the double-stranded DNA molecule. Hence, statement D is incorrect.",
      conceptTested: "Restriction Endonuclease vs Exonuclease",
      isVerifiedPYQ: true
    },
    {
      id: "pyq-pcr-rdna-5",
      exam: "NEET UG",
      examName: "NEET UG 2022",
      examYear: "2022",
      verifiedExam: "NEET UG 2022",
      year: 2022,
      question: "Which of the following is not a component of downstream processing?",
      options: [
        "Separation",
        "Purification",
        "Preservation",
        "Expression"
      ],
      correctAnswer: 3,
      explanation: "Expression of the gene of interest occurs during the upstream biosynthesis/culturing phase inside the host cells in a bioreactor. Downstream processing begins after expression is complete and includes separation, purification, and preservation.",
      conceptTested: "Components of Downstream Processing vs Gene Expression",
      isVerifiedPYQ: true
    }
  ]
};
