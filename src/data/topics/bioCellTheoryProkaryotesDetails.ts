import { DetailedTopicContent } from '../../types/neet';

export const bioCellTheoryProkaryotesDetails: DetailedTopicContent = {
  topicId: "bio-cell-theory-prokaryotes",
  topicName: "Cell Theory, Prokaryotic Cell Structure & Cell Envelope",
  subject: "Biology",
  class: "Class 11",
  classification: "Cell Structure & Function",
  chapter: "Cell: The Unit of Life",

  whatIsThisTopic: "Exhaustive NCERT study guide covering cell definition, cell theory historical contributors (Schleiden, Schwann, Virchow), modern cell theory, exceptions, prokaryotic cell organisation, bacterial cell envelope (glycocalyx, cell wall, plasma membrane), mesosomes, ribosomes, nucleoid, plasmids, inclusion bodies, plant vs animal cell introduction, plasma membrane fluid mosaic model, and cell wall structure.",

  basicIdea: [
    "Cell is the fundamental structural and functional unit of all living organisms; anything less than a complete structure of a cell does not ensure independent living.",
    "Cell Theory was originally formulated by Matthias Schleiden (1838) and Theodore Schwann (1839), and modified by Rudolf Virchow (1855) with the landmark concept 'Omnis cellula-e-cellula' (all cells arise from pre-existing cells).",
    "Prokaryotic cells (bacteria, blue-green algae, mycoplasma, PPLO) lack a membrane-bound nucleus and membrane-bound organelles; their genetic material is naked nucleoid DNA.",
    "Bacterial Cell Envelope consists of a tightly bound 3-layered structure: Glycocalyx (Slime layer or Capsule), Cell Wall (peptidoglycan), and Plasma Membrane (selectively permeable phospholipid bilayer).",
    "Fluid Mosaic Model proposed by Singer and Nicolson (1972) describes the plasma membrane as a quasi-fluid phospholipid bilayer with floating integral and peripheral proteins."
  ],

  importantTerms: [
    {
      term: "Omnis cellula-e-cellula",
      definition: "Latin phrase proposed by Rudolf Virchow in 1855 meaning 'all cells arise from pre-existing cells' through cell division.",
      neetNote: "Direct NCERT line frequently asked in NEET UG."
    },
    {
      term: "Glycocalyx (Capsule vs Slime Layer)",
      definition: "Outermost layer of the bacterial cell envelope. If loose and gelatinous, it is called a Slime Layer; if thick, tough, and rigid, it is called a Capsule.",
      neetNote: "Capsule protects pathogenic bacteria from host immune phagocytosis."
    },
    {
      term: "Mesosome",
      definition: "Specialized tubular, vesicular, or lamellar infolding of the bacterial plasma membrane into the cell that functions in cell wall synthesis, DNA replication, respiration, and secretion.",
      neetNote: "Prokaryotic functional equivalent of eukaryotic mitochondria!"
    },
    {
      term: "Plasmid",
      definition: "Small, autonomous, extrachromosomal circular double-stranded DNA present in bacteria conferring unique phenotypic traits like antibiotic resistance.",
      neetNote: "Used extensively as vectors in Recombinant DNA Technology."
    },
    {
      term: "Inclusion Bodies",
      definition: "Non-membrane bound reserve material storage structures lying free in prokaryotic cytoplasm (e.g., Phosphate granules, Cyanophycean granules, Glycogen granules).",
      neetNote: "Gas vacuoles are present in blue-green and purple/green photosynthetic bacteria."
    },
    {
      term: "Fluid Mosaic Model",
      definition: "Membrane model proposed by Singer and Nicolson (1972) stating that proteins are embedded in a quasi-fluid phospholipid bilayer capable of lateral movement.",
      neetNote: "Fluidity allows cell growth, junction formation, secretion, endocytosis, and cell division."
    },
    {
      term: "Middle Lamella",
      definition: "Intercellular layer composed mainly of Calcium and Magnesium pectate that cements adjacent plant cell walls together.",
      neetNote: "Softening of ripe fruits occurs due to solubilization of pectin in middle lamella."
    },
    {
      term: "Plasmodesmata",
      definition: "Cytoplasmic channels traversing middle lamella and cell walls, connecting cytoplasm of neighboring plant cells for symplastic transport.",
      neetNote: "Essential for intercellular communication in plants."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Cell Introduction, History & Cell Theory",
      paragraphs: [
        "**What is a Cell?** Unicellular organisms are capable of independent existence and performing the essential functions of life. Anything less than a complete structure of a cell does not ensure independent living. Hence, the cell is the **fundamental structural and functional unit of all living organisms**.",
        "**Historical Discoveries:**",
        "• **Anton von Leeuwenhoek:** First saw and described a live cell (animalcules in pond water/bacteria).",
        "• **Robert Brown:** Later discovered the **Nucleus** in orchid root cells (1831).",
        "• **Matthias Schleiden (1838):** German Botanist examined a large number of plants and observed that all plants are composed of different kinds of cells which form the tissues of the plant.",
        "• **Theodore Schwann (1839):** British Zoologist studied different types of animal cells and reported that cells had a thin outer layer which is today known as the **Plasma Membrane**. Schwann also concluded, based on plant studies, that the **presence of a cell wall is a unique character of plant cells**.",
        "**Formulation & Modification of Cell Theory:**",
        "Schleiden and Schwann together formulated the **Cell Theory**. However, this theory did not explain *how new cells were formed*.",
        "• **Rudolf Virchow (1855):** First explained that cells divide and new cells are formed from pre-existing cells (**'Omnis cellula-e-cellula'**). He modified the hypothesis of Schleiden and Schwann to give the cell theory a final shape.",
        "**Modern Cell Theory Postulates:**",
        "1. All living organisms are composed of cells and products of cells.",
        "2. All cells arise from pre-existing cells through cell division.",
        "**Exceptions & Limitations to Cell Theory:**",
        "• **Viruses, Viroids & Prions:** Acellular non-cellular entities that lack protoplasm and metabolic machinery outside host cells.",
        "• **Syncytial / Coenocytic Organisms:** Multinucleate condition without septa (e.g., *Rhizopus*, skeletal muscle fibres, liquid endosperm of coconut).",
        "• **Anucleate Living Cells:** Mature mammalian Erythrocytes (RBCs) and Sieve tube elements of vascular plants lack a nucleus at maturity, yet remain functionally living for a limited period."
      ],
      importantPoints: [
        "First live cell observed by Anton von Leeuwenhoek.",
        "Nucleus discovered by Robert Brown (1831).",
        "Cell Wall as unique plant feature concluded by Theodore Schwann (1839).",
        "'Omnis cellula-e-cellula' proposed by Rudolf Virchow (1855).",
        "Viruses and mature RBCs/sieve tubes are classic exceptions to strict cell theory criteria."
      ]
    },
    {
      heading: "2. Prokaryotic Cell Organisation & Cell Envelope",
      paragraphs: [
        "**Prokaryotic Cell Overview:** Represented by **Bacteria**, **Blue-green algae (Cyanobacteria)**, **Mycoplasma**, and **PPLO (Pleuro Pneumonia Like Organisms)**. They are generally smaller and multiply much more rapidly than eukaryotic cells. Size range: Typical bacteria 1–2 µm, Mycoplasma 0.3 µm, PPLO ~0.1 µm, Viruses 0.02–0.2 µm.",
        "**Bacterial Shapes:** 4 basic shapes: **Bacillus** (rod-like), **Coccus** (spherical), **Vibrio** (comma-shaped), and **Spirillum** (spiral).",
        "**Cell Envelope & Its Layers:** Most prokaryotic cells, particularly bacterial cells, have a complex, chemically tightly bound **3-layered Cell Envelope**:",
        "1. **Glycocalyx (Outermost):** Differs in composition and thickness among different bacteria. It can be a loose, gelatinous sheath called a **Slime Layer**, or a thick, tough, rigid coating called a **Capsule**.",
        "2. **Cell Wall (Middle):** Determines the shape of the cell and provides strong structural support to prevent the bacterium from bursting or collapsing. Made of **Peptidoglycan (Murein)** composed of $N$-acetylglucosamine (NAG) and $N$-acetylmuramic acid (NAM) cross-linked by peptide chains.",
        "3. **Plasma Membrane (Innermost):** Selectively permeable membrane interacting with the outside world. Structurally similar to that of eukaryotes.",
        "**Gram Staining (Christian Gram):** Bacteria are classified into two groups based on cell envelope differences and response to Gram stain:",
        "• **Gram-Positive ($G^+$):** Take up crystal violet stain and retain blue/purple color (thick peptidoglycan layer, teichoic acid present).",
        "• **Gram-Negative ($G^-$):** Do not retain stain, lose color after alcohol wash and counterstain pink/red with Safranin (thin peptidoglycan layer, outer lipopolysaccharide LPS layer).",
        "**Prokaryotic Appendages & Internal Structures:**",
        "• **Flagella:** Motile bacteria possess thin filamentous extensions from cell wall consisting of 3 parts: **Filament** (longest), **Hook**, and **Basal Body**. Made of flagellin protein.",
        "• **Pili & Fimbriae:** Non-motile surface structures. **Pili** are elongated tubular structures made of pilin protein involved in bacterial conjugation (mating). **Fimbriae** are small, bristle-like fibres sprouting out of the cell that help attach bacteria to rocks in streams and to host tissues.",
        "• **Mesosomes (NCERT Treatment):** Special membranous structure formed by infoldings of plasma membrane into the cell in the form of vesicles, tubules, and lamellae. *Functions:* Help in cell wall formation, DNA replication and distribution to daughter cells, respiration, secretion processes, and increasing surface area of plasma membrane and enzymatic content.",
        "• **Chromatophores:** Infoldings of plasma membrane containing pigments in photosynthetic prokaryotes like cyanobacteria.",
        "• **Nucleoid:** Unenclosed genetic material consisting of a single, circular, double-stranded DNA molecule without histone proteins (naked DNA).",
        "• **Plasmids:** Small, circular, extrachromosomal dsDNA outside the genomic DNA conferring specific phenotypic characters like **antibiotic resistance**.",
        "• **Ribosomes:** 70S ribosomes (~15 nm by 20 nm size) composed of **50S** and **30S** subunits. Site of protein synthesis. Multiple ribosomes attached to a single mRNA form a **Polysome / Polyribosome**.",
        "• **Inclusion Bodies:** Non-membrane bound storage structures in cytoplasm: **Phosphate granules**, **Cyanophycean granules**, **Glycogen granules**. **Gas Vacuoles** are found in blue-green and purple/green photosynthetic bacteria to provide buoyancy."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="300" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="260" fill="#ffffff" stroke="#cbd5e1" rx="10"/><text x="270" y="25" text-anchor="middle" font-weight="bold" font-size="13" fill="#0f172a">Prokaryotic Bacterial Cell Ultra-Structure</text><rect x="100" y="60" width="340" height="170" fill="#fef3c7" stroke="#d97706" stroke-width="3" rx="40"/><rect x="108" y="68" width="324" height="154" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="34"/><rect x="116" y="76" width="308" height="138" fill="#ecfdf5" stroke="#059669" stroke-width="2" rx="28"/><path d="M 230 76 Q 250 110 270 76" stroke="#059669" stroke-width="3" fill="#a7f3d0"/><text x="250" y="102" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">Mesosome</text><path d="M 200 130 C 180 110, 220 160, 260 120 C 300 150, 320 110, 280 160" stroke="#dc2626" stroke-width="3" fill="none"/><text x="250" y="145" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">Nucleoid (Naked dsDNA)</text><circle cx="340" cy="165" r="14" fill="#fbcfe8" stroke="#db2777" stroke-width="2" stroke-dasharray="2,2"/><text x="340" y="168" text-anchor="middle" font-size="8" font-weight="bold" fill="#be185d">Plasmid</text><circle cx="160" cy="120" r="3" fill="#2563eb"/><circle cx="170" cy="140" r="3" fill="#2563eb"/><circle cx="180" cy="125" r="3" fill="#2563eb"/><circle cx="360" cy="110" r="3" fill="#2563eb"/><text x="170" y="105" font-size="8" font-weight="bold" fill="#1d4ed8">70S Ribosomes</text><circle cx="380" cy="135" r="6" fill="#ca8a04"/><circle cx="395" cy="150" r="5" fill="#ca8a04"/><text x="385" y="123" font-size="8" font-weight="bold" fill="#854d0e">Inclusion Bodies</text><path d="M 440 145 C 500 145, 520 180, 560 170" stroke="#ea580c" stroke-width="4" fill="none"/><text x="510" y="158" font-size="9" font-weight="bold" fill="#c2410c">Flagellum</text><line x1="100" y1="90" x2="60" y2="80" stroke="#d97706" stroke-width="2"/><text x="10" y="80" font-size="8" font-weight="bold" fill="#b45309">1. Glycocalyx</text><line x1="108" y1="120" x2="60" y2="120" stroke="#ea580c" stroke-width="2"/><text x="10" y="123" font-size="8" font-weight="bold" fill="#c2410c">2. Cell Wall</text><line x1="116" y1="160" x2="60" y2="160" stroke="#059669" stroke-width="2"/><text x="10" y="163" font-size="8" font-weight="bold" fill="#047857">3. Plasma Membrane</text><line x1="120" y1="190" x2="80" y2="220" stroke="#854d0e" stroke-width="1.5"/><text x="40" y="235" font-size="8" font-weight="bold" fill="#854d0e">Pili / Fimbriae</text></g></svg>`,
          caption: "Ultra-structure of a Generalized Prokaryotic Bacterial Cell.",
          guide: "WHAT TO OBSERVE: 3-layered cell envelope (Glycocalyx, Cell wall, Plasma membrane), Mesosome membrane infolding, naked circular Nucleoid DNA, extrachromosomal Plasmid, scattered 70S Ribosomes, non-membrane bound Inclusion Bodies, and Flagellum."
        }
      ],
      importantPoints: [
        "Cell Envelope = Glycocalyx + Cell Wall + Plasma Membrane.",
        "Mesosome is involved in respiration, DNA replication, and cell wall synthesis.",
        "Prokaryotic ribosomes are 70S (50S + 30S subunits).",
        "Inclusion bodies are non-membrane bound storage granules (e.g., Gas vacuoles in photosynthetic bacteria)."
      ]
    },
    {
      heading: "3. Eukaryotic Cell Overview — Plant Cell vs Animal Cell Structure",
      paragraphs: [
        "**Eukaryotic Cell Overview:** Eukaryotes include all Protists, Plants, Animals, and Fungi. Characterized by extensive **compartmentalization of cytoplasm** through the presence of membrane-bound organelles, an organized nucleus with a nuclear envelope, and a complex locomotory/cytoskeletal system.",
        "**Plant Cell vs Animal Cell Key Differences:**",
        "• **Plant Cells** possess a rigid cellulosic **Cell Wall**, large central **Vacuole** (occupying up to 90% volume), and **Plastids** (Chloroplasts, Chromoplasts, Leucoplasts). Centrosomes/centrioles are generally absent.",
        "• **Animal Cells** possess **Centrosomes with Centrioles** (essential for spindle formation in cell division), multiple small vacuoles, and **Lysosomes**. They lack cell walls and plastids."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="280" fill="#f8fafc" rx="12"/><g transform="translate(15,15)"><rect width="270" height="250" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="135" y="20" text-anchor="middle" font-weight="bold" font-size="11" fill="#15803d">Plant Cell Ultra-Structure</text><rect x="35" y="35" width="200" height="190" fill="#ecfdf5" stroke="#16a34a" stroke-width="4" rx="12"/><rect x="42" y="42" width="186" height="176" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" rx="8"/><rect x="110" y="100" width="105" height="100" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="20"/><text x="162" y="155" text-anchor="middle" font-size="9" font-weight="bold" fill="#0369a1">Large Central Vacuole</text><circle cx="80" cy="85" r="22" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/><text x="80" y="88" text-anchor="middle" font-size="8" font-weight="bold" fill="#9d174d">Nucleus</text><ellipse cx="70" cy="155" rx="16" ry="10" fill="#a7f3d0" stroke="#059669" stroke-width="2"/><text x="70" y="158" text-anchor="middle" font-size="7" font-weight="bold" fill="#047857">Chloroplast</text><ellipse cx="70" cy="190" rx="14" ry="8" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="70" y="193" text-anchor="middle" font-size="7" font-weight="bold" fill="#c2410c">Mitochondrion</text></g><g transform="translate(315,15)"><rect width="270" height="250" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="135" y="20" text-anchor="middle" font-weight="bold" font-size="11" fill="#b91c1c">Animal Cell Ultra-Structure</text><ellipse cx="135" cy="130" rx="100" ry="85" fill="#fff1f2" stroke="#e11d48" stroke-width="3"/><circle cx="135" cy="120" r="28" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/><text x="135" y="123" text-anchor="middle" font-size="8" font-weight="bold" fill="#9d174d">Nucleus</text><polygon points="80,70 88,85 72,85" fill="#fde047" stroke="#ca8a04"/><polygon points="90,75 98,90 82,90" fill="#fde047" stroke="#ca8a04"/><text x="85" y="62" font-size="7" font-weight="bold" fill="#854d0e">Centrosome / Centrioles</text><ellipse cx="190" cy="160" rx="14" ry="8" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="190" y="163" text-anchor="middle" font-size="7" font-weight="bold" fill="#c2410c">Mitochondrion</text><circle cx="80" cy="165" r="8" fill="#fca5a5" stroke="#dc2626"/><text x="80" y="168" text-anchor="middle" font-size="6" font-weight="bold" fill="#7f1d1d">Lysosome</text></g></svg>`,
          caption: "Anatomical comparison of Plant Cell vs Animal Cell.",
          guide: "WHAT TO OBSERVE: Plant cell features outer rigid Cell Wall, large central Vacuole (tonoplast), and Chloroplasts. Animal cell lacks cell wall and plastids, featuring flexible Plasma Membrane, Lysosomes, and Centrosome with Centrioles."
        }
      ],
      importantPoints: [
        "Plant cell = Cell wall + Plastids + Large central vacuole.",
        "Animal cell = Centrosome with centrioles + Lysosomes; lacks cell wall.",
        "Compartmentalization via membrane-bound organelles is a defining feature of eukaryotes."
      ]
    },
    {
      heading: "4. Plasma Membrane — Chemical Composition & Fluid Mosaic Model",
      paragraphs: [
        "**Chemical Composition:** Studies on human red blood cells (erythrocytes) revealed that the cell membrane is composed mainly of **Lipids** and **Proteins**, along with carbohydrates.",
        "• In human RBCs, the membrane consists of approximately **52% Protein**, **40% Lipid**, and 8% Carbohydrate.",
        "• **Lipid Bilayer:** Lipids are arranged in a bilayer with **polar hydrophilic heads facing outwards** (towards aqueous environment) and **non-polar hydrophobic saturated hydrocarbon tails facing inwards** (protected from aqueous environment).",
        "• Major membrane lipids are **Phospholipids (Phosphoglycerides)**. **Cholesterol** is also present to regulate membrane fluidity.",
        "• **Membrane Proteins:** Divided into **Peripheral (Extrinsic) proteins** lying on the surface and **Integral (Intrinsic) proteins** partially or totally buried in the membrane bilayer.",
        "**Fluid Mosaic Model (Singer & Nicolson, 1972):**",
        "Proposed that the membrane is a **quasi-fluid structure** in which lipids and integral proteins are arranged in a mosaic pattern. The fluid nature of the lipid bilayer allows **lateral movement of proteins** within the overall bilayer.",
        "• **Membrane Fluidity Significance:** The fluid nature of the membrane is important for functions like **cell growth**, **formation of intercellular junctions**, **secretion**, **endocytosis**, and **cell division**.",
        "**Transport Across Membrane:**",
        "1. **Passive Transport:** Movement of neutral solutes along concentration gradient (from high to low concentration) without expenditure of energy (ATP). Includes **Simple Diffusion** and **Osmosis** (diffusion of water across selectively permeable membrane).",
        "2. **Facilitated Diffusion:** Polar molecules cannot pass through non-polar lipid bilayer; they require specific membrane **carrier/channel proteins** to move along concentration gradient without ATP.",
        "3. **Active Transport:** Movement of ions or molecules **against concentration gradient** (from low to high concentration) using ATP energy. Example: $\\text{Na}^+/\\text{K}^+$ ATPase pump (pumps $3\\text{ Na}^+$ out and $2\\text{ K}^+$ into the cell per ATP hydrolyzed).",
        "4. **Bulk Transport:** **Endocytosis** (Phagocytosis cell eating, Pinocytosis cell drinking) and **Exocytosis** (secretion/export)."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="260" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="220" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Fluid Mosaic Model of Plasma Membrane (Singer & Nicolson, 1972)</text><text x="270" y="42" text-anchor="middle" font-size="9" fill="#0284c7" font-weight="bold">Extracellular Fluid (Aqueous)</text><g transform="translate(40,55)"><circle cx="10" cy="10" r="8" fill="#38bdf8"/><line x1="10" y1="18" x2="7" y2="45" stroke="#f59e0b" stroke-width="2"/><line x1="10" y1="18" x2="13" y2="45" stroke="#f59e0b" stroke-width="2"/><circle cx="30" cy="10" r="8" fill="#38bdf8"/><line x1="30" y1="18" x2="27" y2="45" stroke="#f59e0b" stroke-width="2"/><line x1="30" y1="18" x2="33" y2="45" stroke="#f59e0b" stroke-width="2"/><rect x="50" y="5" width="35" height="90" fill="#818cf8" rx="10"/><text x="67" y="52" text-anchor="middle" font-size="7" font-weight="bold" fill="#ffffff">Integral Protein</text><circle cx="105" cy="10" r="8" fill="#38bdf8"/><line x1="105" y1="18" x2="102" y2="45" stroke="#f59e0b" stroke-width="2"/><line x1="105" y1="18" x2="108" y2="45" stroke="#f59e0b" stroke-width="2"/><circle cx="125" cy="10" r="8" fill="#38bdf8"/><line x1="125" y1="18" x2="122" y2="45" stroke="#f59e0b" stroke-width="2"/><line x1="125" y1="18" x2="128" y2="45" stroke="#f59e0b" stroke-width="2"/><circle cx="10" cy="90" r="8" fill="#38bdf8"/><line x1="10" y1="82" x2="7" y2="55" stroke="#f59e0b" stroke-width="2"/><line x1="10" y1="82" x2="13" y2="55" stroke="#f59e0b" stroke-width="2"/><circle cx="30" cy="90" r="8" fill="#38bdf8"/><line x1="30" y1="82" x2="27" y2="55" stroke="#f59e0b" stroke-width="2"/><line x1="30" y1="82" x2="33" y2="55" stroke="#f59e0b" stroke-width="2"/><circle cx="105" cy="90" r="8" fill="#38bdf8"/><line x1="105" y1="82" x2="102" y2="55" stroke="#f59e0b" stroke-width="2"/><line x1="105" y1="82" x2="108" y2="55" stroke="#f59e0b" stroke-width="2"/><circle cx="125" cy="90" r="8" fill="#38bdf8"/><line x1="125" y1="82" x2="122" y2="55" stroke="#f59e0b" stroke-width="2"/><line x1="125" y1="82" x2="128" y2="55" stroke="#f59e0b" stroke-width="2"/><circle cx="160" cy="15" r="12" fill="#f43f5e"/><text x="160" y="18" text-anchor="middle" font-size="6" font-weight="bold" fill="#ffffff">Peripheral</text></g><text x="270" y="195" text-anchor="middle" font-size="9" fill="#0284c7" font-weight="bold">Cytoplasm (Intracellular Fluid)</text></g></svg>`,
          caption: "Fluid Mosaic Model showing Hydrophilic Polar Heads, Hydrophobic Fatty Acid Tails, and Integral/Peripheral Proteins.",
          guide: "WHAT TO OBSERVE: Hydrophilic polar heads face outer and inner aqueous environments; hydrophobic tails face inwards. Integral proteins span the bilayer, while peripheral proteins rest on the surface."
        }
      ],
      importantPoints: [
        "RBC membrane = 52% protein, 40% lipid.",
        "Phospholipid heads are hydrophilic (outwards); tails are hydrophobic (inwards).",
        "Fluid Mosaic Model proposed by Singer & Nicolson (1972).",
        "Na+/K+ pump is active transport (3 Na+ out, 2 K+ in against gradient using ATP)."
      ]
    },
    {
      heading: "5. Cell Wall Structure, Layers & Plasmodesmata",
      paragraphs: [
        "**What is a Cell Wall?** Non-living rigid structure surrounding the plasma membrane in plant, fungal, and algal cells.",
        "**Composition Across Taxa:**",
        "• **Algae:** Cellulose, Galactans, Mannans, and minerals like Calcium carbonate ($\\text{CaCO}_3$).",
        "• **Plants:** Cellulose, Hemicellulose, Pectins, and Proteins.",
        "• **Fungi:** Chitin ($N$-acetylglucosamine polymer).",
        "**Cell Wall Structural Layers:**",
        "1. **Middle Lamella:** Outermost layer formed first during cell division (cell plate). Made of **Calcium and Magnesium pectate**. Holds/cements neighboring plant cells together.",
        "2. **Primary Cell Wall:** Formed on the inside of middle lamella in young growing cells. Thin, elastic, and capable of growth. Gradually diminishes as cell matures.",
        "3. **Secondary Cell Wall:** Formed on the inner (cytoplasmic) side of the primary wall as the cell matures and stops growing. Rigid, contains lignin, suberin, and cutin.",
        "**Plasmodesmata:** Microscopic cytoplasmic channels that traverse the middle lamella and cell walls, connecting the cytoplasm of adjacent plant cells for intercellular transport and signaling."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="200" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="160" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="11" fill="#0f172a">Cell Wall Structural Layers & Plasmodesmatal Junction</text><rect x="60" y="50" width="420" height="20" fill="#fef08a" stroke="#ca8a04"/><text x="270" y="64" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">Middle Lamella (Ca / Mg Pectate)</text><rect x="60" y="70" width="420" height="20" fill="#bbf7d0" stroke="#16a34a"/><text x="270" y="84" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Primary Cell Wall</text><rect x="60" y="90" width="420" height="20" fill="#86efac" stroke="#15803d"/><text x="270" y="104" text-anchor="middle" font-size="9" font-weight="bold" fill="#166534">Secondary Cell Wall</text><rect x="60" y="110" width="420" height="12" fill="#bfdbfe" stroke="#2563eb"/><text x="270" y="120" text-anchor="middle" font-size="8" font-weight="bold" fill="#1e40af">Plasma Membrane</text><rect x="250" y="45" width="40" height="85" fill="#fbcfe8" stroke="#db2777" stroke-dasharray="2,2"/><text x="270" y="145" text-anchor="middle" font-size="8" font-weight="bold" fill="#be185d">Plasmodesmatal Channel</text></g></svg>`,
          caption: "Stratified architecture of Middle Lamella, Primary Wall, Secondary Wall, Plasma Membrane, and Plasmodesmata.",
          guide: "WHAT TO OBSERVE: Middle lamella sits outermost cementing cells; primary wall forms next; secondary wall forms inner to primary wall; plasmodesmata penetrate all layers."
        }
      ],
      importantPoints: [
        "Middle lamella is made of Calcium and Magnesium pectate.",
        "Algal cell wall contains cellulose, galactans, mannans, and CaCO3.",
        "Plasmodesmata connect cytoplasm of adjacent plant cells."
      ]
    }
  ],

  formulae: [],

  neetImportantPoints: [
    "🔥 Rudolf Virchow (1855) modified cell theory with 'Omnis cellula-e-cellula'.",
    "🔥 Bacterial cell envelope consists of Glycocalyx (Slime/Capsule), Cell Wall, and Plasma Membrane.",
    "🔥 Mesosome is a plasma membrane infolding involved in cell wall formation, DNA replication, and respiration.",
    "🔥 Fluid Mosaic Model (Singer & Nicolson, 1972): RBC membrane is 52% protein, 40% lipid.",
    "🔥 Middle lamella is composed of Calcium and Magnesium pectate."
  ],

  commonConfusions: [
    {
      commonConfusion: "Thinking Schleiden and Schwann proposed 'Omnis cellula-e-cellula'.",
      correctFact: "Schleiden and Schwann formulated original Cell Theory; Rudolf Virchow added 'Omnis cellula-e-cellula' in 1855.",
      whyItMattersForNEET: "Direct historical scientist matching questions appear frequently in NEET."
    },
    {
      commonConfusion: "Confusing Slime layer with Capsule in bacterial glycocalyx.",
      correctFact: "Slime layer is loose and gelatinous; Capsule is thick, tough, and rigid.",
      whyItMattersForNEET: "NCERT distinguishes these two forms of glycocalyx strictly."
    },
    {
      commonConfusion: "Assuming mesosome is an independent membrane-bound organelle.",
      correctFact: "Mesosome is NOT a separate organelle; it is an extension/infolding of the plasma membrane.",
      whyItMattersForNEET: "Prokaryotes lack all membrane-bound organelles!"
    }
  ],

  quickRevision: [
    "Cell discovered live by Leeuwenhoek; Nucleus by Robert Brown (1831).",
    "Cell Theory: Schleiden (1838) + Schwann (1839) + Virchow (1855).",
    "Prokaryote envelope = Glycocalyx + Cell Wall + Plasma membrane.",
    "Mesosome = Plasma membrane infolding for respiration & DNA replication.",
    "70S ribosomes = 50S + 30S subunits.",
    "Fluid mosaic model: Singer & Nicolson (1972); RBC = 52% protein, 40% lipid.",
    "Middle lamella = Calcium & Magnesium pectate."
  ],

  practiceQuestions: [
    {
      questionText: "Which of the following scientists first explained that cells divide and new cells are formed from pre-existing cells ('Omnis cellula-e-cellula')?",
      options: [
        "Matthias Schleiden",
        "Theodore Schwann",
        "Rudolf Virchow",
        "Anton von Leeuwenhoek"
      ],
      correctAnswer: 2,
      explanation: "Rudolf Virchow in 1855 first proposed 'Omnis cellula-e-cellula' to explain that all new cells arise from pre-existing cells by cell division.",
      difficulty: "Easy",
      conceptTested: "History of Cell Theory"
    },
    {
      questionText: "What percentage of protein and lipid is present in the membrane of human erythrocytes (RBCs) according to NCERT?",
      options: [
        "50% protein and 50% lipid",
        "52% protein and 40% lipid",
        "40% protein and 52% lipid",
        "60% protein and 30% lipid"
      ],
      correctAnswer: 1,
      explanation: "NCERT explicitly states that the membrane of human erythrocyte (RBC) has approximately 52 per cent protein and 40 per cent lipids.",
      difficulty: "Easy",
      conceptTested: "Chemical Composition of Plasma Membrane"
    },
    {
      questionText: "Which of the following structures is NOT part of the bacterial cell envelope?",
      options: [
        "Glycocalyx",
        "Cell Wall",
        "Plasma Membrane",
        "Mesosome"
      ],
      correctAnswer: 3,
      explanation: "The cell envelope is a 3-layered structure consisting of Glycocalyx, Cell Wall, and Plasma Membrane. Mesosome is an infolding of the plasma membrane, not a layer of the envelope.",
      difficulty: "Medium",
      conceptTested: "Bacterial Cell Envelope"
    }
  ],

  pyqs: [
    {
      exam: "NEET",
      year: 2019,
      questionText: "The concept of 'Omnis cellula-e-cellula' regarding cell division was first proposed by:",
      options: [
        "Theodore Schwann",
        "Rudolf Virchow",
        "Louis Pasteur",
        "Matthias Schleiden"
      ],
      correctAnswer: 1,
      explanation: "Rudolf Virchow (1855) modified the cell theory and stated 'Omnis cellula-e-cellula' meaning all cells arise from pre-existing cells.",
      verifiedExam: "NEET 2019",
      topicTested: "Cell Theory",
      difficulty: "Easy"
    },
    {
      exam: "NEET",
      year: 2022,
      questionText: "Which of the following statements is INCORRECT regarding the structure of a cell membrane?",
      options: [
        "Lipid bilayer is composed of phospholipids with polar heads facing outwards and hydrophobic tails facing inwards",
        "Proteins can be peripheral or integral",
        "Fluid nature of membrane is important for functions like cell growth and secretion",
        "Lipids are arranged in a monolayer"
      ],
      correctAnswer: 3,
      explanation: "Lipids in plasma membrane are arranged as a bilayer, NOT a monolayer. Polar heads face outwards and non-polar hydrophobic tails face inwards.",
      verifiedExam: "NEET 2022",
      topicTested: "Plasma Membrane Structure",
      difficulty: "Medium"
    },
    {
      exam: "NEET",
      year: 2020,
      questionText: "Which of the following is NOT an inclusion body found in prokaryotes?",
      options: [
        "Glycogen granule",
        "Polysome",
        "Phosphate granule",
        "Cyanophycean granule"
      ],
      correctAnswer: 1,
      explanation: "Polysomes are clusters of ribosomes translating mRNA into proteins, not storage inclusion bodies. Phosphate, cyanophycean, and glycogen granules are prokaryotic inclusion bodies.",
      verifiedExam: "NEET 2020",
      topicTested: "Prokaryotic Inclusion Bodies",
      difficulty: "Medium"
    }
  ]
};
