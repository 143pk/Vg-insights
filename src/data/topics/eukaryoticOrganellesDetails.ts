import { DetailedTopicContent } from '../../types/neet';

export const eukaryoticOrganellesDetails: DetailedTopicContent = {
  topicId: "eukaryotic-organelles",
  topicName: "Eukaryotic Organelles — Endomembrane System, Mitochondria, Plastids, Ribosomes & Cytoskeleton",
  subject: "Biology",
  class: "Class 11",
  classification: "Cell Structure & Function",
  chapter: "Cell: The Unit of Life",

  whatIsThisTopic: "Complete NCERT study guide for eukaryotic cell organelles: Endomembrane System (ER, Golgi, Lysosomes, Vacuoles), Mitochondria (powerhouse & semiautonomous nature), Plastids (Chloroplast, Chromoplast, Leucoplasts), Ribosomes (70S vs 80S), and Cytoskeleton (microtubules, microfilaments, intermediate filaments).",

  basicIdea: [
    "The Endomembrane System comprises organelles whose functions are coordinated: Endoplasmic Reticulum (ER), Golgi Apparatus, Lysosomes, and Vacuoles. Peroxisomes, Mitochondria, and Chloroplasts are NOT part of the endomembrane system because their functions are not coordinated with these.",
    "Endoplasmic Reticulum is divided into Rough ER (bearing 80S ribosomes for protein synthesis) and Smooth ER (lacking ribosomes, site for lipid and steroid hormone synthesis, detoxification, and Ca2+ storage).",
    "Golgi Apparatus (Camillo Golgi, 1898) consists of stacked cisternae with convex Cis (forming) face and concave Trans (maturing) face; performs glycosylation of proteins and lipids into glycoproteins and glycolipids.",
    "Lysosomes are membrane-bound vesicles formed by Golgi packaging containing acid hydrolases (active at pH ~5) for intracellular digestion, autophagy, and autolysis ('suicidal bags').",
    "Vacuoles are bound by a single membrane called Tonoplast that actively concentrates ions inside against concentration gradients.",
    "Mitochondria and Chloroplasts are double-membrane, semiautonomous organelles containing their own circular dsDNA and 70S ribosomes, dividing by binary fission."
  ],

  importantTerms: [
    {
      term: "Endomembrane System",
      definition: "Group of eukaryotic membranous organelles (ER, Golgi apparatus, Lysosomes, Vacuoles) whose functions are coordinated.",
      neetNote: "Mitochondria, Chloroplasts, and Peroxisomes are explicitly EXCLUDED."
    },
    {
      term: "Cis Face vs Trans Face",
      definition: "In Golgi apparatus, Cis (forming) face is convex and receives vesicles from ER; Trans (maturing) face is concave and releases processed secretory vesicles.",
      neetNote: "Cis face faces nucleus; Trans face faces plasma membrane."
    },
    {
      term: "Tonoplast",
      definition: "Single membrane bounding the plant vacuole that facilitates active transport of ions against concentration gradients into the vacuole.",
      neetNote: "Ion concentration is significantly higher inside vacuole than in cytoplasm."
    },
    {
      term: "Cristae",
      definition: "Finger-like infoldings of the inner mitochondrial membrane that increase surface area for oxidative phosphorylation (ATP synthase complexes / oxysomes).",
      neetNote: "Do not confuse Cristae (mitochondria) with Cisternae (ER & Golgi) or Thylakoids (chloroplast)!"
    },
    {
      term: "Semiautonomous Organelles",
      definition: "Organelles (Mitochondria and Chloroplasts) that possess their own circular dsDNA, 70S ribosomes, and protein synthesis machinery, dividing by binary fission.",
      neetNote: "Can synthesize some of their own structural proteins independently."
    },
    {
      term: "Amyloplast, Elaioplast, Aleuroplast",
      definition: "Types of colorless Leucoplasts: Amyloplasts store starch (carbohydrates), Elaioplasts store oils and fats, and Aleuroplasts store proteins.",
      neetNote: "High-yield match-the-following topic in NEET UG!"
    },
    {
      term: "Granum & Stroma Lamellae",
      definition: "Grana are coin-like stacks of membrane-bound Thylakoids in chloroplasts; Stroma lamellae are flat membranous tubules connecting thylakoids of different grana.",
      neetNote: "Grana contain Photosystems I & II; Stroma lamellae contain Photosystem I only."
    },
    {
      term: "Polysome (Polyribosome)",
      definition: "A cluster of multiple ribosomes attached to a single mRNA strand translating it into proteins simultaneously.",
      neetNote: "Found in both prokaryotic cytoplasm and eukaryotic cytosol during active translation."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Endomembrane System Overview",
      paragraphs: [
        "While each of the membranous organelles is distinct in terms of its structure and function, many of these are considered together as an **Endomembrane System** because their functions are **coordinated**.",
        "**Components of Endomembrane System:**",
        "1. **Endoplasmic Reticulum (ER)**",
        "2. **Golgi Apparatus**",
        "3. **Lysosomes**",
        "4. **Vacuoles**",
        "**Why Organelles are Excluded:** Organelles like **Mitochondria**, **Chloroplasts**, and **Peroxisomes** are **NOT** considered part of the endomembrane system because their functions are *not coordinated* with the ER-Golgi-Lysosome pathway."
      ],
      importantPoints: [
        "Endomembrane system = ER + Golgi + Lysosomes + Vacuoles.",
        "Excludes Mitochondria, Chloroplasts, and Peroxisomes."
      ]
    },
    {
      heading: "2. Endoplasmic Reticulum (RER & SER)",
      paragraphs: [
        "**Structure:** Network of tiny tubular structures scattered in the cytoplasm called Endoplasmic Reticulum (ER). Divides the intracellular space into two distinct compartments: **Luminal** (inside ER) and **Extra-luminal** (cytoplasm) compartments.",
        "**Two Types of ER:**",
        "• **Rough Endoplasmic Reticulum (RER):** Bears **80S ribosomes** attached to its outer surface. Composed mainly of flattened disc-like sacs called **Cisternae**. Continuous with the outer nuclear membrane. *Functions:* Active in **protein synthesis**, modification, and secretion.",
        "• **Smooth Endoplasmic Reticulum (SER):** Lacks ribosomes. Composed mainly of **Tubules** and **Vesicles**. *Functions:* Major site for **lipid synthesis**, synthesis of **steroidal hormones** (estrogen, testosterone, progesterone, cortisol) in animal cells, **detoxification** of drugs/toxins in liver cells, and **$\\text{Ca}^{2+}$ storage** in sarcoplasmic reticulum of muscle cells."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="220" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="180" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Endoplasmic Reticulum Architecture (RER & SER)</text><path d="M 60 40 C 140 30, 180 80, 240 50 C 300 20, 360 80, 420 50" stroke="#0284c7" stroke-width="8" fill="none"/><circle cx="100" cy="38" r="3" fill="#dc2626"/><circle cx="120" cy="37" r="3" fill="#dc2626"/><circle cx="140" cy="40" r="3" fill="#dc2626"/><circle cx="200" cy="60" r="3" fill="#dc2626"/><text x="180" y="25" font-size="9" font-weight="bold" fill="#0369a1">RER Cisternae with Ribosomes</text><path d="M 60 110 C 120 130, 180 90, 240 120 C 300 150, 360 100, 420 130" stroke="#059669" stroke-width="8" fill="none"/><text x="180" y="150" font-size="9" font-weight="bold" fill="#047857">SER Tubular Network (No Ribosomes)</text></g></svg>`,
          caption: "Structure of Endoplasmic Reticulum showing RER Cisternae studded with 80S Ribosomes and Smooth ER Tubular Network.",
          guide: "WHAT TO OBSERVE: RER consists of flattened cisternae continuous with nuclear membrane bearing 80S ribosomes; SER consists of smooth tubular networks lacking ribosomes."
        }
      ],
      importantPoints: [
        "RER = Protein synthesis & secretion.",
        "SER = Lipid & steroid hormone synthesis, drug detoxification, Ca2+ storage."
      ]
    },
    {
      heading: "3. Golgi Apparatus",
      paragraphs: [
        "**Discovery & Appearance:** First observed by **Camillo Golgi (1898)** as densely stained reticular structures near the nucleus.",
        "**Structure:** Consists of many flat, disc-shaped sacs or **Cisternae** of 0.5 µm to 1.0 µm diameter. These are stacked parallel to each other concentrically near the nucleus.",
        "**Polarity of Golgi Cisternae:**",
        "• **Cis Face / Forming Face:** Convex in shape, faces the nucleus. Receives transport vesicles containing proteins/lipids from the ER.",
        "• **Trans Face / Maturing Face:** Concave in shape, faces the plasma membrane. Releases processed secretory vesicles.",
        "• The cis and trans faces of the organelle are entirely different, but interconnected.",
        "**Functions:**",
        "1. **Packaging & Modification:** Important site for the formation of **Glycoproteins** (protein + carbohydrate) and **Glycolipids** (lipid + carbohydrate) through **Glycosylation / Glycosidation**.",
        "2. **Secretion:** Proteins synthesized by RER enter cis face, are modified in cisternae, and bud off trans face as secretory vesicles.",
        "3. **Lysosome Formation:** Packaging of acid hydrolase enzymes forms lysosomes.",
        "4. **Plant Cell Wall Synthesis:** Synthesizes non-cellulosic cell wall polysaccharides like pectins and hemicellulose."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="240" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="200" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Golgi Apparatus Structure & Polarity</text><path d="M 160 50 Q 270 30 380 50" stroke="#818cf8" stroke-width="10" fill="none"/><path d="M 150 80 Q 270 60 390 80" stroke="#818cf8" stroke-width="10" fill="none"/><path d="M 140 110 Q 270 90 400 110" stroke="#818cf8" stroke-width="10" fill="none"/><path d="M 130 140 Q 270 120 410 140" stroke="#818cf8" stroke-width="10" fill="none"/><circle cx="120" cy="50" r="10" fill="#a5b4fc"/><text x="60" y="52" font-size="8" font-weight="bold" fill="#4338ca">Cis / Forming Face (Convex)</text><circle cx="430" cy="145" r="12" fill="#f43f5e"/><text x="450" y="148" font-size="8" font-weight="bold" fill="#9f1239">Trans / Maturing Face (Concave)</text></g></svg>`,
          caption: "Parallel Stacked Cisternae of Golgi Apparatus with Cis (Forming) and Trans (Maturing) Faces.",
          guide: "WHAT TO OBSERVE: Parallel stacked cisternae with convex Cis face receiving ER vesicles and concave Trans face releasing secretory vesicles."
        }
      ],
      importantPoints: [
        "Discovered by Camillo Golgi (1898).",
        "Cis face (convex) faces nucleus; Trans face (concave) faces plasma membrane.",
        "Site of Glycoprotein and Glycolipid formation."
      ]
    },
    {
      heading: "4. Lysosomes",
      paragraphs: [
        "**Structure & Origin:** Membrane-bound vesicular structures formed by the process of **packaging in the Golgi apparatus**.",
        "**Hydrolytic Enzymes:** Isolated lysosomal vesicles are rich in almost all types of **hydrolytic enzymes (Acid Hydrolases)**:",
        "• **Lipases**, **Proteases**, **Carbohydrases**, and **Nucleases**.",
        "• Optimally active at **acidic pH (~5)** maintained by membrane proton pumps ($\\text{H}^+$-ATPase).",
        "• These enzymes are capable of digesting carbohydrates, proteins, lipids, and nucleic acids.",
        "**Functions:**",
        "1. **Intracellular Digestion:** Digestion of phagocytosed foreign material or food particles.",
        "2. **Autophagy:** Digestion of old, worn-out, damaged cell organelles.",
        "3. **Autolysis ('Suicidal Bags'):** Complete self-destruction of damaged cells during tissue remodeling or necrosis."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="180" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="140" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="11" fill="#0f172a">Lysosome Structure & Acid Hydrolase Enzymes</text><circle cx="270" cy="80" r="45" fill="#fca5a5" stroke="#dc2626" stroke-width="3"/><text x="270" y="70" text-anchor="middle" font-size="9" font-weight="bold" fill="#7f1d1d">Acidic pH ~ 5.0</text><text x="270" y="85" text-anchor="middle" font-size="8" fill="#991b1b">H+ ATPase Proton Pump</text><text x="270" y="100" text-anchor="middle" font-size="8" font-weight="bold" fill="#7f1d1d">Lipases, Proteases, Carbohydrases</text></g></svg>`,
          caption: "Structure of single membrane-bound Lysosome containing Acid Hydrolase Enzymes.",
          guide: "WHAT TO OBSERVE: Single lipid bilayer membrane enclosing an acidic interior (pH ~5) rich in hydrolytic enzymes (lipases, proteases, carbohydrates)."
        }
      ],
      importantPoints: [
        "Formed by packaging in Golgi apparatus.",
        "Contains acid hydrolases active at pH ~ 5.",
        "Known as 'suicidal bags' of the cell."
      ]
    },
    {
      heading: "5. Vacuoles",
      paragraphs: [
        "**Structure:** Membrane-bound space found in the cytoplasm. Bound by a single membrane called **Tonoplast**.",
        "**Tonoplast Function:** In plant cells, the tonoplast facilitates the transport of a number of ions and other materials **against concentration gradients** into the vacuole. Hence, the concentration of ions is significantly higher inside the vacuole than in the cytoplasm.",
        "**Plant Vacuoles:** Can occupy up to **90% of the volume** of a plant cell. Contains water, cell sap, excretory products, and water-soluble pigments such as **Anthocyanins** (impart red, purple, or blue colors). Maintains cell turgidity and rigidity.",
        "**Specialized Vacuoles in Protists:**",
        "• **Contractile Vacuole:** Important for **osmoregulation and excretion** in *Amoeba*.",
        "• **Food Vacuoles:** Formed by engulfing food particles in protists like *Paramecium*."
      ],
      importantPoints: [
        "Bound by single membrane Tonoplast.",
        "Tonoplast pumps ions against concentration gradient into vacuole.",
        "Anthocyanins are water-soluble vacuolar pigments.",
        "Contractile vacuole in Amoeba = Osmoregulation."
      ]
    },
    {
      heading: "6. Mitochondria — Powerhouse & Semiautonomous Nature",
      paragraphs: [
        "**Structure:** Double membrane-bound organelle. Diameter: 0.2–1.0 µm (average 0.5 µm); Length: 1.0–4.1 µm.",
        "• **Outer Membrane:** Smooth, continuous, contains porin proteins, permeable to small molecules.",
        "• **Inner Membrane:** Infolded into numerous finger-like folds called **Cristae** (singular: Crista) towards the matrix. Cristae increase the surface area for electron transport chain ($F_0-F_1$ ATP synthase complexes / oxysomes).",
        "• **Intermembrane Space:** Space between outer and inner membranes.",
        "• **Matrix:** Dense homogeneous fluid filling inner chamber. Contains enzymes for Krebs cycle (TCA cycle), a **single circular double-stranded DNA molecule**, a few RNA molecules, **70S ribosomes**, and components required for protein synthesis.",
        "**Functions:** Sites of **aerobic respiration**. Produce cellular energy in the form of **ATP**; hence called the **Powerhouse of the cell**.",
        "**Semiautonomous Nature:** Mitochondria possess their own circular dsDNA and 70S ribosomes, allowing them to synthesize some of their own structural proteins. Mitochondria divide by **binary fission**."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="240" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="200" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Mitochondrion Ultra-Structure</text><ellipse cx="270" cy="115" rx="200" ry="70" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/><ellipse cx="270" cy="115" rx="185" ry="58" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/><path d="M 120 115 C 150 80, 150 150, 180 115 C 210 80, 210 150, 240 115 C 270 80, 270 150, 300 115 C 330 80, 330 150, 360 115 C 390 80, 390 150, 420 115" stroke="#ea580c" stroke-width="3" fill="none"/><text x="270" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">Inner Matrix (Krebs Cycle Enzymes)</text><text x="360" y="145" font-size="8" font-weight="bold" fill="#ea580c">Cristae Folds</text><circle cx="200" cy="115" r="8" fill="#fbcfe8" stroke="#db2777"/><text x="200" y="102" font-size="7" font-weight="bold" fill="#be185d">dsDNA</text><circle cx="320" cy="120" r="3" fill="#2563eb"/><circle cx="330" cy="125" r="3" fill="#2563eb"/><text x="330" y="138" font-size="7" font-weight="bold" fill="#1d4ed8">70S Ribosomes</text></g></svg>`,
          caption: "Ultra-structure of Mitochondrion showing Outer Membrane, Inner Membrane with Cristae, Matrix, Circular dsDNA, and 70S Ribosomes.",
          guide: "WHAT TO OBSERVE: Double membrane architecture; smooth outer membrane and infolded inner membrane forming Cristae; matrix containing circular dsDNA, 70S ribosomes, and Krebs cycle machinery."
        }
      ],
      importantPoints: [
        "Inner membrane infoldings = Cristae (increase surface area).",
        "Matrix contains single circular dsDNA and 70S ribosomes.",
        "Semiautonomous organelle dividing by binary fission."
      ]
    },
    {
      heading: "7. Plastids — Chloroplast, Chromoplast & Leucoplast Types",
      paragraphs: [
        "**Plastids Classification (Schimper):** Found in all plant cells and euglenoids. Easily observed under microscope due to large size. Classified into 3 main types based on pigments:",
        "1. **Chloroplasts:** Contain **chlorophyll** and carotenoid pigments responsible for trapping light energy for photosynthesis.",
        "2. **Chromoplasts:** Contain fat-soluble carotenoid pigments like **carotene** and **xanthophylls**. Give yellow, orange, or red color to plant parts (flowers, ripe fruits).",
        "3. **Leucoplasts:** Colorless plastids of varied shapes and sizes that store nutrients:",
        "   • **Amyloplasts:** Store carbohydrates (starch), e.g., Potato tuber.",
        "   • **Elaioplasts:** Store oils and fats, e.g., Castor and Mustard seeds.",
        "   • **Aleuroplasts (Proteinoplasts):** Store proteins, e.g., Maize grain.",
        "**Chloroplast Structure:** Double membrane-bound (inner membrane relatively less permeable). Space limited by inner membrane is called **Stroma**.",
        "• **Thylakoids:** Number of organized flattened membranous sacs in stroma. Arranged in stacks like piles of coins called **Grana** (singular: Granum). Thylakoid membrane encloses a space called **Lumen**.",
        "• **Stroma Lamellae:** Flat membranous tubules connecting thylakoids of different grana.",
        "• **Stroma Components:** Contains enzymes required for carbohydrate and protein synthesis (Calvin cycle), **single circular double-stranded DNA**, and **70S ribosomes** (smaller than eukaryotic cytoplasmic 80S ribosomes)."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="250" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="210" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Chloroplast Ultra-Structure</text><ellipse cx="270" cy="120" rx="210" ry="75" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/><ellipse cx="270" cy="120" rx="195" ry="63" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/><g transform="translate(140,85)"><rect width="30" height="10" fill="#15803d" rx="2"/><rect width="30" height="10" y="12" fill="#15803d" rx="2"/><rect width="30" height="10" y="24" fill="#15803d" rx="2"/><rect width="30" height="10" y="36" fill="#15803d" rx="2"/><text x="15" y="58" text-anchor="middle" font-size="8" font-weight="bold" fill="#14532d">Granum Stack</text></g><g transform="translate(360,85)"><rect width="30" height="10" fill="#15803d" rx="2"/><rect width="30" height="10" y="12" fill="#15803d" rx="2"/><rect width="30" height="10" y="24" fill="#15803d" rx="2"/><rect width="30" height="10" y="36" fill="#15803d" rx="2"/><text x="15" y="58" text-anchor="middle" font-size="8" font-weight="bold" fill="#14532d">Granum Stack</text></g><line x1="170" y1="103" x2="360" y2="103" stroke="#15803d" stroke-width="3"/><text x="265" y="98" text-anchor="middle" font-size="8" font-weight="bold" fill="#166534">Stroma Lamella</text><text x="270" y="160" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">Stroma (Dark Rxn Enzymes, dsDNA, 70S Ribosomes)</text></g></svg>`,
          caption: "Chloroplast showing Outer Membrane, Inner Membrane, Stroma, Thylakoid Grana Stacks, and Stroma Lamellae.",
          guide: "WHAT TO OBSERVE: Double membrane enclosure; stroma fluid matrix containing coin-stacked Thylakoids forming Grana, interconnected by Stroma Lamellae."
        }
      ],
      importantPoints: [
        "Amyloplast = Starch storage; Elaioplast = Oil/Fat storage; Aleuroplast = Protein storage.",
        "Chloroplast stroma contains circular dsDNA and 70S ribosomes.",
        "Grana = stacks of coin-like Thylakoids."
      ]
    },
    {
      heading: "8. Ribosomes — 70S vs 80S Comparison",
      paragraphs: [
        "**Discovery:** George Palade (1953) observed them under electron microscope as dense granular particles.",
        "**Composition:** Composed of **Ribosomal RNA (rRNA)** and **Proteins** (**Ribonucleoprotein particles**). Not bound by any membrane!",
        "**Svedberg's Unit ($S$):** Sedimentation coefficient; indirectly measures density and size.",
        "• **70S Ribosomes:** Present in prokaryotes, mitochondria, and chloroplasts. Subunits: **50S (large)** and **30S (small)** ($50S + 30S = 70S$).",
        "• **80S Ribosomes:** Present in eukaryotic cytoplasm and RER. Subunits: **60S (large)** and **40S (small)** ($60S + 40S = 80S$).",
        "• Function: Primary site of protein translation."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="180" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="140" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">70S vs 80S Ribosome Subunit Assembly</text><g transform="translate(80,40)"><ellipse cx="60" cy="40" rx="35" ry="20" fill="#93c5fd" stroke="#1d4ed8"/><text x="60" y="43" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">50S Subunit</text><ellipse cx="60" cy="70" rx="30" ry="14" fill="#bfdbfe" stroke="#2563eb"/><text x="60" y="73" text-anchor="middle" font-size="8" font-weight="bold" fill="#1d4ed8">30S Subunit</text><text x="60" y="98" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">= 70S Prokaryotic</text></g><g transform="translate(320,40)"><ellipse cx="60" cy="40" rx="40" ry="24" fill="#fca5a5" stroke="#dc2626"/><text x="60" y="43" text-anchor="middle" font-size="9" font-weight="bold" fill="#7f1d1d">60S Subunit</text><ellipse cx="60" cy="74" rx="34" ry="16" fill="#fecaca" stroke="#ef4444"/><text x="60" y="77" text-anchor="middle" font-size="8" font-weight="bold" fill="#991b1b">40S Subunit</text><text x="60" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#7f1d1d">= 80S Eukaryotic</text></g></g></svg>`,
          caption: "Subunit Composition of 70S (50S + 30S) and 80S (60S + 40S) Ribosomes.",
          guide: "WHAT TO OBSERVE: 70S ribosome consists of 50S large and 30S small subunits; 80S ribosome consists of 60S large and 40S small subunits."
        }
      ],
      importantPoints: [
        "Ribosomes discovered by George Palade (1953).",
        "Non-membrane bound ribonucleoprotein particles.",
        "70S = 50S + 30S; 80S = 60S + 40S."
      ]
    },
    {
      heading: "9. Cytoskeleton — Microtubules, Microfilaments & Intermediate Filaments",
      paragraphs: [
        "**Definition:** Elaborate network of filamentous proteinaceous structures present in the cytoplasm.",
        "**Components:**",
        "1. **Microtubules:** Hollow, unbranched cylinders (25 nm diameter) composed of **tubulin protein** dimers. Functions: Cilia, flagella, centrioles, spindle apparatus, intracellular transport.",
        "2. **Microfilaments:** Solid, helical rods (7 nm diameter) composed of **G-actin** polymers ($F$-actin). Functions: Amoeboid movement, cyclosis (cytoplasmic streaming), muscle contraction, cleavage furrow.",
        "3. **Intermediate Filaments:** Fibrous protein strands (10 nm diameter) e.g., Keratin. Functions: Structural mechanical support, maintaining cell shape and nuclear position.",
        "**Primary Cytoskeletal Functions:** Mechanical support, motility, maintenance of cell shape, and chromosome movement during cell division."
      ],
      importantPoints: [
        "Microtubules = Tubulin protein (cilia, flagella, spindle apparatus).",
        "Microfilaments = Actin protein (cyclosis, cleavage furrow).",
        "Cytoskeleton provides motility, mechanical support, and cell shape."
      ]
    }
  ],

  formulae: [],

  neetImportantPoints: [
    "🔥 Endomembrane system includes ER, Golgi, Lysosomes, Vacuoles; EXCLUDES Mitochondria, Chloroplasts, Peroxisomes.",
    "🔥 RER = Protein synthesis; SER = Lipid and steroidal hormone synthesis, detoxification.",
    "🔥 Golgi Cis face (convex) receives ER vesicles; Trans face (concave) releases secretory vesicles.",
    "🔥 Lysosomes contain acid hydrolases active at acidic pH ~ 5.",
    "🔥 Amyloplasts store starch, Elaioplasts store oils/fats, Aleuroplasts store proteins.",
    "🔥 Mitochondria and Chloroplasts contain circular dsDNA and 70S ribosomes (semiautonomous)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Including Mitochondria or Chloroplasts in the Endomembrane System.",
      correctFact: "Mitochondria and Chloroplasts are NOT part of the endomembrane system because their functions are not coordinated with ER/Golgi.",
      whyItMattersForNEET: "A very frequent trap question in NEET UG."
    },
    {
      commonConfusion: "Confusing Cristae (mitochondria) with Cisternae (Golgi/ER) and Thylakoids (chloroplast).",
      correctFact: "Cristae = inner mitochondrial infoldings; Cisternae = stacked Golgi/ER sacs; Thylakoids = chloroplast coin-like sacs.",
      whyItMattersForNEET: "Terminological traps appear repeatedly in matching questions."
    },
    {
      commonConfusion: "Math error in ribosome subunit addition (thinking 50S + 30S = 80S).",
      correctFact: "50S + 30S = 70S (prokaryotic); 60S + 40S = 80S (eukaryotic). Svedberg unit is non-additive because it measures sedimentation rate.",
      whyItMattersForNEET: "Direct numerical options test this conceptual fact."
    }
  ],

  quickRevision: [
    "Endomembrane = ER + Golgi + Lysosome + Vacuole.",
    "RER = 80S ribosomes (proteins); SER = no ribosomes (lipids/steroids/detox).",
    "Golgi = Camillo Golgi (1898); Cis face (convex) $\\rightarrow$ Trans face (concave); Glycoproteins & Glycolipids.",
    "Lysosomes = acid hydrolases (pH ~ 5) formed by Golgi.",
    "Tonoplast = vacuole membrane (concentrates ions against gradient).",
    "Mitochondria & Chloroplasts = double membrane, 70S ribosomes, circular dsDNA, binary fission.",
    "Leucoplasts = Amyloplast (starch), Elaioplast (oils), Aleuroplast (protein).",
    "Ribosomes = Palade (1953); 70S (50S+30S), 80S (60S+40S)."
  ],

  practiceQuestions: [
    {
      questionText: "Which of the following cell organelles is NOT considered part of the endomembrane system?",
      options: [
        "Endoplasmic Reticulum",
        "Golgi Apparatus",
        "Peroxisome",
        "Vacuole"
      ],
      correctAnswer: 2,
      explanation: "Peroxisomes, Mitochondria, and Chloroplasts are not part of the endomembrane system because their functions are not coordinated with the ER-Golgi pathway.",
      difficulty: "Easy",
      conceptTested: "Endomembrane System Boundaries"
    },
    {
      questionText: "Match the type of Leucoplast with its storage product: (A) Amyloplast (B) Elaioplast (C) Aleuroplast",
      options: [
        "A-Starch, B-Protein, C-Fat",
        "A-Starch, B-Oils/Fats, C-Protein",
        "A-Protein, B-Starch, C-Fats",
        "A-Fats, B-Protein, C-Starch"
      ],
      correctAnswer: 1,
      explanation: "Amyloplasts store carbohydrates (starch), Elaioplasts store oils and fats, and Aleuroplasts store proteins.",
      difficulty: "Easy",
      conceptTested: "Leucoplast Types"
    },
    {
      questionText: "Which face of the Golgi apparatus receives transport vesicles coming from the Endoplasmic Reticulum?",
      options: [
        "Trans face (concave)",
        "Maturing face",
        "Cis face (convex)",
        "Secretory face"
      ],
      correctAnswer: 2,
      explanation: "Vesicles from the ER fuse with the Cis face (forming face/convex) of the Golgi apparatus and move towards the Trans face (maturing face/concave).",
      difficulty: "Medium",
      conceptTested: "Golgi Apparatus Polarity"
    }
  ],

  pyqs: [
    {
      exam: "NEET",
      year: 2023,
      questionText: "Which of the following functions is carried out by cytoskeleton in a cell?",
      options: [
        "Protein synthesis",
        "Motility",
        "Transportation",
        "Nuclear division"
      ],
      correctAnswer: 1,
      explanation: "NCERT states that the cytoskeleton in a cell is involved in many functions such as mechanical support, motility, maintenance of the shape of the cell.",
      verifiedExam: "NEET 2023",
      topicTested: "Cytoskeleton Functions",
      difficulty: "Easy"
    },
    {
      exam: "NEET",
      year: 2019,
      questionText: "Which of the following statements is NOT correct regarding Lysosomes?",
      options: [
        "Lysosomes have numerous hydrolytic enzymes",
        "Hydrolytic enzymes of lysosomes are active under acidic pH",
        "Lysosomes are membrane-bound structures formed by the process of packaging in the Golgi apparatus",
        "Lysosomes are formed by endocytosis"
      ],
      correctAnswer: 3,
      explanation: "Lysosomes are formed by packaging in the Golgi apparatus, NOT by endocytosis.",
      verifiedExam: "NEET 2019",
      topicTested: "Lysosome Origin & Features",
      difficulty: "Medium"
    },
    {
      exam: "NEET",
      year: 2018,
      questionText: "Which of the following cell organelles is responsible for extracting energy from carbohydrates to form ATP?",
      options: [
        "Ribosome",
        "Chloroplast",
        "Mitochondrion",
        "Lysosome"
      ],
      correctAnswer: 2,
      explanation: "Mitochondria produce cellular energy in the form of ATP through aerobic respiration and oxidative breakdown of carbohydrates.",
      verifiedExam: "NEET 2018",
      topicTested: "Mitochondria ATP Generation",
      difficulty: "Easy"
    }
  ]
};
