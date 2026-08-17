import { DetailedTopicContent } from '../../types/neet';

export const bioNucleusChromosomesDetails: DetailedTopicContent = {
  topicId: "bio-nucleus-chromosomes",
  topicName: "Cilia, Flagella, Centrosome, Nucleus, Chromosomes, Nucleosome & Master Chapter Comparisons",
  subject: "Biology",
  class: "Class 11",
  classification: "Cell Structure & Function",
  chapter: "Cell: The Unit of Life",

  whatIsThisTopic: "Exhaustive NCERT study guide for Cilia, Flagella (9+2 axoneme), Centrosome/Centrioles (9+0 cartwheel structure), Nucleus, Nucleolus, Chromosomes, Nucleosome organisation, Microbodies, and Final Master Revision Comparisons (Organelle table, Prokaryote vs Eukaryote, Plant vs Animal cell, 70S vs 80S ribosomes, RER vs SER).",

  basicIdea: [
    "Cilia and Flagella are hair-like membrane-bound extensions with an inner core called Axoneme exhibiting a 9+2 microtubule doublet arrangement.",
    "Centrosome contains two perpendicular Centrioles surrounded by pericentriolar material, featuring a 9+0 microtubule triplet cartwheel structure with central proteinaceous hub and 9 radial spokes.",
    "Nucleus (Robert Brown, 1831) is enclosed by a double-membrane nuclear envelope with perinuclear space (10-50 nm) and nuclear pores; contains nucleoplasm, spherical non-membrane bound nucleolus (site of active rRNA synthesis), and chromatin network.",
    "Chromosomes are classified based on centromere position into Metacentric (equal arms, V-shape), Sub-metacentric (L-shape), Acrocentric (J-shape), and Telocentric (I-shape). Some have a non-staining secondary constriction forming a Satellite.",
    "Nucleosome is the fundamental unit of eukaryotic chromatin packaging comprising a positively charged basic Histone Octamer (rich in Lysine and Arginine) wrapped by ~200 bp of negatively charged DNA and sealed by H1 linker histone ('beads-on-a-string')."
  ],

  importantTerms: [
    {
      term: "Axoneme (9+2 Pattern)",
      definition: "Central core of eukaryotic cilia and flagella containing 9 peripheral microtubule doublets and 2 central single microtubules enclosed by a central sheath.",
      neetNote: "Cilia and flagella arise from Basal Bodies which have a 9+0 centriole-like triplet pattern!"
    },
    {
      term: "Cartwheel Structure (9+0 Pattern)",
      definition: "Centriolar organisation composed of 9 evenly spaced peripheral microtubule triplets connected by 9 radial spokes to a central proteinaceous hub (no central microtubule).",
      neetNote: "Forms basal body of cilia/flagella and spindle apparatus during cell division."
    },
    {
      term: "Perinuclear Space",
      definition: "The 10 to 50 nanometer space between the outer and inner membranes of the nuclear envelope forming a barrier between nucleic and cytoplasmic materials.",
      neetNote: "Outer nuclear membrane remains continuous with the Rough Endoplasmic Reticulum."
    },
    {
      term: "Nucleolus",
      definition: "Spherical, non-membrane bound structure found in the nucleoplasm that is the active site for ribosomal RNA (rRNA) synthesis.",
      neetNote: "Cells actively engaged in protein synthesis have larger and more numerous nucleoli."
    },
    {
      term: "Satellite (SAT Chromosome)",
      definition: "A small chromosomal fragment beyond a non-staining secondary constriction present at constant locations in specific chromosomes.",
      neetNote: "Used as genetic markers and in DNA fingerprinting (VNTRs)."
    },
    {
      term: "Kinetochore",
      definition: "Disc-shaped protein structures present on the sides of the primary constriction (centromere) to which spindle fibres attach during cell division.",
      neetNote: "Essential for chromosome segregation in mitosis and meiosis."
    },
    {
      term: "Histone Octamer",
      definition: "Protein core consisting of 2 molecules each of H2A, H2B, H3, and H4 histones rich in basic amino acids Lysine and Arginine around which DNA wraps.",
      neetNote: "Positively charged histones bind tightly to negatively charged phosphate backbone of DNA."
    },
    {
      term: "Euchromatin vs Heterochromatin",
      definition: "Euchromatin is lightly stained, loosely packed, and transcriptionally active; Heterochromatin is darkly stained, densely packed, and transcriptionally inactive.",
      neetNote: "High-yield conceptual comparison in NEET Biology."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Cilia and Flagella — Axoneme Architecture (9+2 Pattern)",
      paragraphs: [
        "**Overview:** Cilia (singular: Cilium) and Flagella (singular: Flagellum) are hair-like outgrowths of the cell membrane. Cilia are small structures operating like oars, causing movement of cell or surrounding fluid. Flagella are longer and responsible for cell movement.",
        "**Axoneme Structure ($9+2$ Pattern):**",
        "• Core called **Axoneme** covered by plasma membrane.",
        "• Contains **9 peripheral doublets** of tubulin microtubules arranged radially.",
        "• Contains **2 central single microtubules** located centrally.",
        "• Central tubules connected by a bridge and enclosed by a **Central Sheath**.",
        "• Central sheath connected to one of the tubules of each peripheral doublet by **9 Radial Spokes**.",
        "• Peripheral doublets interconnected by **Nexin linkers**.",
        "• Motor protein **Dynein arms** attached to peripheral doublets exhibit ATPase activity driving movement.",
        "**Basal Body Origin:** Both cilium and flagellum emerge from centriole-like structures called **Basal Bodies** (which possess a $9+0$ triplet pattern)."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="250" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="210" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Cilia/Flagella Axoneme Cross-Section (9+2 Microtubule Arrangement)</text><circle cx="270" cy="120" r="85" fill="#f0fdf4" stroke="#16a34a" stroke-width="3"/><circle cx="270" cy="120" r="30" fill="#dbeafe" stroke="#2563eb" stroke-dasharray="3,3"/><circle cx="260" cy="120" r="7" fill="#1d4ed8"/><circle cx="280" cy="120" r="7" fill="#1d4ed8"/><text x="270" y="105" text-anchor="middle" font-size="7" font-weight="bold" fill="#1e40af">Central Sheath & 2 Central Single Microtubules</text><g transform="translate(270,120)"><circle cx="0" cy="-75" r="7" fill="#16a34a"/><circle cx="10" cy="-75" r="7" fill="#16a34a"/><line x1="0" y1="-75" x2="0" y2="-30" stroke="#ea580c" stroke-width="2"/><circle cx="53" cy="-53" r="7" fill="#16a34a"/><circle cx="63" cy="-53" r="7" fill="#16a34a"/><line x1="53" y1="-53" x2="21" y2="-21" stroke="#ea580c" stroke-width="2"/><circle cx="75" cy="0" r="7" fill="#16a34a"/><circle cx="85" cy="0" r="7" fill="#16a34a"/><line x1="75" y1="0" x2="30" y2="0" stroke="#ea580c" stroke-width="2"/><circle cx="53" cy="53" r="7" fill="#16a34a"/><circle cx="63" cy="53" r="7" fill="#16a34a"/><line x1="53" y1="53" x2="21" y2="21" stroke="#ea580c" stroke-width="2"/><circle cx="0" cy="75" r="7" fill="#16a34a"/><circle cx="10" cy="75" r="7" fill="#16a34a"/><line x1="0" y1="75" x2="0" y2="30" stroke="#ea580c" stroke-width="2"/><circle cx="-53" cy="53" r="7" fill="#16a34a"/><circle cx="-63" cy="53" r="7" fill="#16a34a"/><line x1="-53" y1="53" x2="-21" y2="21" stroke="#ea580c" stroke-width="2"/><circle cx="-75" cy="0" r="7" fill="#16a34a"/><circle cx="-85" cy="0" r="7" fill="#16a34a"/><line x1="-75" y1="0" x2="-30" y2="0" stroke="#ea580c" stroke-width="2"/><circle cx="-53" cy="-53" r="7" fill="#16a34a"/><circle cx="-63" cy="-53" r="7" fill="#16a34a"/><line x1="-53" y1="-53" x2="-21" y2="-21" stroke="#ea580c" stroke-width="2"/></g><text x="430" y="60" font-size="8" font-weight="bold" fill="#15803d">9 Peripheral Doublets</text><text x="430" y="125" font-size="8" font-weight="bold" fill="#c2410c">Radial Spokes (Orange)</text></g></svg>`,
          caption: "Cross-section of Axoneme showing 9 Peripheral Doublets, 2 Central Microtubules, Central Sheath, and 9 Radial Spokes.",
          guide: "WHAT TO OBSERVE: Outer plasma membrane encloses 9 peripheral doublets connected to central sheath by 9 radial spokes; 2 central single microtubules sit inside central sheath."
        }
      ],
      importantPoints: [
        "Axoneme = 9 peripheral doublets + 2 central singles (9+2 pattern).",
        "9 radial spokes connect peripheral doublets to central sheath.",
        "Basal body = 9+0 triplet pattern."
      ]
    },
    {
      heading: "2. Centrosome and Centrioles — Cartwheel Structure (9+0 Pattern)",
      paragraphs: [
        "**Centrosome:** Organelle usually containing **two cylindrical structures called Centrioles**. They lie perpendicular to each other in an amorphous pericentriolar matrix.",
        "**Cartwheel Organisation ($9+0$ Pattern):**",
        "• Each centriole consists of **9 evenly spaced peripheral triplets** of tubulin protein.",
        "• Adjacent triplets linked by proteinaceous linkers.",
        "• Central part of centriole is proteinaceous and called the **Hub**.",
        "• Hub connected to peripheral triplets by **9 Radial Spokes** made of protein.",
        "**Functions:**",
        "1. Form the **basal bodies** of cilia and flagella.",
        "2. Give rise to **spindle fibres** that form spindle apparatus during cell division in animal cells (absent in higher plant cells)."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="230" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="190" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Centriole Cartwheel Structure (9+0 Microtubule Triplet Pattern)</text><circle cx="270" cy="110" r="70" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><circle cx="270" cy="110" r="14" fill="#f59e0b"/><text x="270" y="113" text-anchor="middle" font-size="7" font-weight="bold" fill="#ffffff">Hub</text><g transform="translate(270,110)"><line x1="0" y1="0" x2="0" y2="-60" stroke="#b45309" stroke-width="2"/><circle cx="-6" cy="-60" r="4" fill="#ea580c"/><circle cx="0" cy="-60" r="4" fill="#ea580c"/><circle cx="6" cy="-60" r="4" fill="#ea580c"/><line x1="0" y1="0" x2="42" y2="-42" stroke="#b45309" stroke-width="2"/><circle cx="38" cy="-42" r="4" fill="#ea580c"/><circle cx="42" cy="-42" r="4" fill="#ea580c"/><circle cx="46" cy="-42" r="4" fill="#ea580c"/><line x1="0" y1="0" x2="60" y2="0" stroke="#b45309" stroke-width="2"/><circle cx="60" cy="-6" r="4" fill="#ea580c"/><circle cx="60" cy="0" r="4" fill="#ea580c"/><circle cx="60" cy="6" r="4" fill="#ea580c"/><line x1="0" y1="0" x2="42" y2="42" stroke="#b45309" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="60" stroke="#b45309" stroke-width="2"/><line x1="0" y1="0" x2="-42" y2="42" stroke="#b45309" stroke-width="2"/><line x1="0" y1="0" x2="-60" y2="0" stroke="#b45309" stroke-width="2"/><line x1="0" y1="0" x2="-42" y2="-42" stroke="#b45309" stroke-width="2"/></g><text x="400" y="60" font-size="8" font-weight="bold" fill="#c2410c">9 Peripheral Triplets (No Central Tubule)</text><text x="400" y="110" font-size="8" font-weight="bold" fill="#b45309">9 Radial Spokes</text></g></svg>`,
          caption: "Centriole Cartwheel Structure showing Central Hub, 9 Radial Spokes, and 9 Peripheral Triplets.",
          guide: "WHAT TO OBSERVE: Central proteinaceous Hub linked by 9 radial spokes to 9 peripheral microtubule triplets; absence of central microtubules gives 9+0 pattern."
        }
      ],
      importantPoints: [
        "Centrioles possess 9+0 triplet microtubule pattern.",
        "Central hub connected to 9 peripheral triplets by 9 radial spokes (Cartwheel structure).",
        "Forms basal bodies and spindle apparatus."
      ]
    },
    {
      heading: "3. Nucleus, Nuclear Envelope, Pores & Nucleolus",
      paragraphs: [
        "**Discovery:** First described by **Robert Brown (1831)**. Material of nucleus stained by basic dyes was given the name **Chromatin by Flemming**.",
        "**Interphase Nucleus Components:**",
        "1. **Nuclear Envelope:** Double membrane with **Perinuclear Space (10 to 50 nm)** forming a barrier between nuclear materials and cytoplasm. Outer membrane continuous with RER.",
        "2. **Nuclear Pores:** Minute pores formed by fusion of two nuclear membranes. Act as passages for **movement of RNA and protein molecules in both directions** between nucleus and cytoplasm.",
        "3. **Nucleoplasm / Nuclear Matrix:** Contains nucleolus and chromatin.",
        "4. **Nucleolus:** Spherical, non-membrane bound structure in nucleoplasm continuous with rest of nucleoplasm. Active site for **ribosomal RNA (rRNA) synthesis**. Larger and more numerous nucleoli are present in cells actively carrying out protein synthesis.",
        "**Anucleate Living Exceptions:** Mature mammalian erythrocytes (RBCs) and sieve tube cells of vascular plants lack nucleus at maturity."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="240" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="200" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Nucleus Ultra-Structure</text><circle cx="270" cy="115" r="80" fill="#fbcfe8" stroke="#db2777" stroke-width="4" stroke-dasharray="15,5"/><circle cx="270" cy="115" r="72" fill="#fdf2f8" stroke="#be185d" stroke-width="2"/><circle cx="240" cy="100" r="28" fill="#db2777"/><text x="240" y="103" text-anchor="middle" font-size="8" font-weight="bold" fill="#ffffff">Nucleolus (rRNA Synthesis)</text><path d="M 220 140 C 250 160, 280 130, 310 150 C 330 120, 290 90, 320 80" stroke="#be185d" stroke-width="2" fill="none"/><text x="320" y="130" font-size="8" font-weight="bold" fill="#831843">Chromatin Network</text><text x="400" y="60" font-size="8" font-weight="bold" fill="#be185d">Nuclear Pores (Octagonal)</text><text x="400" y="170" font-size="8" font-weight="bold" fill="#9d174d">Perinuclear Space (10-50 nm)</text></g></svg>`,
          caption: "Structure of Interphase Nucleus showing Nuclear Envelope, Nuclear Pores, Nucleolus, and Chromatin Network.",
          guide: "WHAT TO OBSERVE: Double nuclear envelope with nuclear pores; non-membrane bound Nucleolus for active rRNA synthesis; diffuse Chromatin network."
        }
      ],
      importantPoints: [
        "Discovered by Robert Brown (1831); Chromatin named by Flemming.",
        "Perinuclear space = 10 to 50 nm.",
        "Nucleolus = non-membrane bound site for rRNA synthesis."
      ]
    },
    {
      heading: "4. Chromosome Morphology & Nucleosome Packaging",
      paragraphs: [
        "**Chromosome Morphology:** Interphase chromatin condenses into distinct **Chromosomes** during division.",
        "• Primary constriction called **Centromere**. Disc-shaped structures on sides called **Kinetochores** (spindle fiber attachment sites).",
        "• **Satellite Chromosomes (SAT):** Some chromosomes have non-staining secondary constrictions at constant locations giving small fragment appearance.",
        "**Types of Chromosomes Based on Centromere Position:**",
        "1. **Metacentric:** Centromere in middle $\\rightarrow$ two equal arms ($V$-shape in anaphase).",
        "2. **Sub-metacentric:** Centromere slightly away from middle $\\rightarrow$ one shorter arm ($p$-arm) and one longer arm ($q$-arm) ($L$-shape).",
        "3. **Acrocentric:** Centromere close to end $\\rightarrow$ one extremely short arm and one very long arm ($J$-shape).",
        "4. **Telocentric:** Centromere at terminal tip $\\rightarrow$ single arm ($I$-shape).",
        "**Nucleosome Eukaryotic Chromatin Packaging:**",
        "• Eukaryotic DNA wraps around basic proteins called **Histones**.",
        "• **Histone Octamer:** Core of 8 histone molecules ($2 \\times \\text{H2A, H2B, H3, H4}$) rich in basic amino acids **Lysine and Arginine** (positively charged).",
        "• Negatively charged DNA (~200 base pairs) wraps around histone octamer forming a **Nucleosome**.",
        "• **H1 Histone:** Linker histone sealing DNA entry and exit.",
        "• Appears as **'beads-on-a-string'** structure under electron microscope."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="600" height="240" fill="#f8fafc" rx="12"/><g transform="translate(30,20)"><rect width="540" height="200" fill="#ffffff" stroke="#cbd5e1" rx="8"/><text x="270" y="22" text-anchor="middle" font-weight="bold" font-size="12" fill="#0f172a">Chromosome Types & Nucleosome Structural Unit</text><g transform="translate(40,50)"><ellipse cx="25" cy="50" rx="10" ry="30" fill="#a7f3d0" stroke="#059669"/><ellipse cx="25" cy="110" rx="10" ry="30" fill="#a7f3d0" stroke="#059669"/><circle cx="25" cy="80" r="6" fill="#dc2626"/><text x="25" y="155" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">Metacentric (V)</text></g><g transform="translate(130,50)"><ellipse cx="25" cy="60" rx="10" ry="20" fill="#a7f3d0" stroke="#059669"/><ellipse cx="25" cy="115" rx="10" ry="35" fill="#a7f3d0" stroke="#059669"/><circle cx="25" cy="80" r="6" fill="#dc2626"/><text x="25" y="155" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">Sub-metacentric (L)</text></g><g transform="translate(220,50)"><circle cx="25" cy="50" r="6" fill="#a7f3d0" stroke="#059669"/><ellipse cx="25" cy="110" rx="10" ry="40" fill="#a7f3d0" stroke="#059669"/><circle cx="25" cy="60" r="6" fill="#dc2626"/><text x="25" y="155" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">Acrocentric (J)</text></g><g transform="translate(320,60)"><rect width="180" height="110" fill="#fef3c7" stroke="#d97706" rx="8"/><circle cx="410" cy="115" r="30" fill="#f59e0b"/><text x="410" y="112" text-anchor="middle" font-size="7" font-weight="bold" fill="#ffffff">Histone Octamer</text><text x="410" y="122" text-anchor="middle" font-size="6" fill="#ffffff">(Lysine / Arginine)</text><path d="M 360 115 C 380 75, 440 75, 460 115 C 440 155, 380 155, 360 115" stroke="#dc2626" stroke-width="4" fill="none"/><text x="410" y="160" text-anchor="middle" font-size="7" font-weight="bold" fill="#991b1b">~200 bp DNA Wrap</text></g></g></svg>`,
          caption: "Chromosome Classification (Metacentric, Sub-metacentric, Acrocentric) and Nucleosome Structural Unit.",
          guide: "WHAT TO OBSERVE: Chromosome shapes based on centromere position; Nucleosome consisting of positively charged Histone Octamer wrapped by ~200 bp DNA."
        }
      ],
      importantPoints: [
        "Metacentric = V-shape; Sub-metacentric = L-shape; Acrocentric = J-shape; Telocentric = I-shape.",
        "Histones rich in basic Lysine and Arginine amino acids.",
        "Nucleosome core = 2x (H2A, H2B, H3, H4) + ~200 bp DNA."
      ]
    },
    {
      heading: "5. Master Chapter Revision Comparisons & Comparison Tables",
      paragraphs: [
        "Below are the master comparison tables summarizing the core concepts of the entire chapter for high-speed NEET revision."
      ],
      tables: [
        {
          title: "Master Table 1: Cell Organelles Exhaustive Comparison",
          headers: ["Organelle", "Membrane Status", "Key Structural Feature", "Primary Function", "Special NCERT Fact"],
          rows: [
            ["Endoplasmic Reticulum", "Single membrane", "Cisternae (RER) & Tubules (SER)", "Protein (RER) & Lipid/Steroid (SER) synthesis", "SER stores Ca2+ & detoxifies drugs"],
            ["Golgi Apparatus", "Single membrane", "Stacked cisternae with Cis/Trans faces", "Glycosylation of proteins/lipids", "Discovered by Camillo Golgi (1898)"],
            ["Lysosomes", "Single membrane", "Rich in Acid Hydrolases (pH ~5)", "Intracellular digestion & autolysis", "Formed by packaging in Golgi apparatus"],
            ["Vacuoles", "Single membrane (Tonoplast)", "Occupies up to 90% volume in plant cells", "Osmoregulation, turgidity, waste storage", "Tonoplast pumps ions against concentration gradient"],
            ["Mitochondria", "Double membrane", "Inner membrane Cristae & Matrix", "Aerobic respiration & ATP generation", "Contains circular dsDNA & 70S ribosomes"],
            ["Chloroplasts", "Double membrane", "Thylakoid Grana stacks & Stroma", "Photosynthesis & light trapping", "Contains circular dsDNA & 70S ribosomes"],
            ["Ribosomes", "Non-membrane bound", "Ribonucleoprotein particles (rRNA+Protein)", "Protein translation", "70S (prokaryotic) vs 80S (eukaryotic)"],
            ["Centrosome / Centrioles", "Non-membrane bound", "9+0 triplet cartwheel structure", "Spindle apparatus & basal body formation", "Absent in higher plant cells"],
            ["Nucleus", "Double membrane", "Perinuclear space & nuclear pores", "Master control of genetic information", "Nucleolus is non-membrane site for rRNA"]
          ]
        },
        {
          title: "Master Table 2: Prokaryotic Cell vs Eukaryotic Cell",
          headers: ["Feature", "Prokaryotic Cell", "Eukaryotic Cell"],
          rows: [
            ["Nuclear Envelope", "Absent (Naked Nucleoid)", "Present (Double membrane with pores)"],
            ["Membrane-Bound Organelles", "Absent completely", "Present (ER, Golgi, Mitochondria, Lysosomes, Plastids)"],
            ["Ribosomes", "70S (50S + 30S subunits)", "80S in cytoplasm/RER; 70S in mitochondria/chloroplasts"],
            ["Cell Envelope / Wall", "Peptidoglycan (Murein)", "Cellulose/Pectins (Plants), Chitin (Fungi), Absent (Animals)"],
            ["DNA Organisation", "Single circular dsDNA without histones", "Linear dsDNA wrapped around Histone octamers"],
            ["Flagella Structure", "Filament, Hook, Basal body (Flagellin)", "9+2 microtubule axoneme (Tubulin + Dynein)"],
            ["Cell Division", "Binary fission / Amitosis", "Mitosis and Meiosis with spindle apparatus"]
          ]
        },
        {
          title: "Master Table 3: Plant Cell vs Animal Cell",
          headers: ["Feature", "Plant Cell", "Animal Cell"],
          rows: [
            ["Cell Wall", "Present (Cellulose, Hemicellulose, Pectin)", "Absent"],
            ["Plastids", "Present (Chloroplasts, Chromoplasts, Leucoplasts)", "Absent"],
            ["Vacuoles", "Large central vacuole occupying up to 90% volume", "Small, temporary, or absent"],
            ["Centrosome / Centrioles", "Absent in higher plants", "Present (essential for spindle formation)"],
            ["Cytokinesis", "Cell plate method (from middle lamella)", "Cell furrow / Cleavage method"],
            ["Storage Carbohydrate", "Starch", "Glycogen"]
          ]
        },
        {
          title: "Master Table 4: 70S vs 80S Ribosomes",
          headers: ["Property", "70S Ribosome", "80S Ribosome"],
          rows: [
            ["Occurrence", "Prokaryotes, Mitochondria, Chloroplasts", "Eukaryotic Cytoplasm, Rough ER"],
            ["Sedimentation Value", "70 Svedberg units", "80 Svedberg units"],
            ["Large Subunit", "50S (contains 23S and 5S rRNA)", "60S (contains 28S, 5.8S, and 5S rRNA)"],
            ["Small Subunit", "30S (contains 16S rRNA)", "40S (contains 18S rRNA)"]
          ]
        },
        {
          title: "Master Table 5: Rough ER (RER) vs Smooth ER (SER)",
          headers: ["Property", "Rough Endoplasmic Reticulum (RER)", "Smooth Endoplasmic Reticulum (SER)"],
          rows: [
            ["Ribosomes", "Present on outer surface (80S)", "Absent"],
            ["Main Component", "Mainly flattened Cisternae", "Mainly Tubules and Vesicles"],
            ["Primary Functions", "Protein synthesis, folding, and secretion", "Lipid, steroid hormone synthesis, detoxification, Ca2+ storage"],
            ["Continuity", "Continuous with outer nuclear membrane", "Extends from RER towards plasma membrane"]
          ]
        }
      ],
      importantPoints: [
        "Axoneme = 9+2 doublet; Centriole = 9+0 triplet cartwheel.",
        "Histones rich in Lysine and Arginine.",
        "Nucleolus = active site for rRNA synthesis."
      ]
    }
  ],

  formulae: [],

  neetImportantPoints: [
    "🔥 Cilia/Flagella axoneme is 9+2 doublet pattern; Centriole/Basal body is 9+0 triplet pattern.",
    "🔥 Nucleolus is non-membrane bound site for active rRNA synthesis.",
    "🔥 Perinuclear space is 10 to 50 nm wide.",
    "🔥 Histone octamer consists of 2x (H2A, H2B, H3, H4) rich in Lysine and Arginine.",
    "🔥 Metacentric = V, Sub-metacentric = L, Acrocentric = J, Telocentric = I shape.",
    "🔥 Satellite chromosomes have a non-staining secondary constriction."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Axoneme pattern (9+2) with Centriole pattern (9+0).",
      correctFact: "Axoneme of cilia/flagella = 9 peripheral doublets + 2 central singles (9+2). Centriole/Basal body = 9 peripheral triplets + 0 central (9+0).",
      whyItMattersForNEET: "Extremely common numerical trap in NEET questions."
    },
    {
      commonConfusion: "Assuming Histones are negatively charged basic proteins.",
      correctFact: "Histones are POSITIVELY charged basic proteins (rich in Lysine & Arginine); DNA is NEGATIVELY charged acidic molecule (phosphate backbone).",
      whyItMattersForNEET: "Charge electrostatic interactions are tested frequently."
    }
  ],

  quickRevision: [
    "Axoneme = 9+2 doublets; Centriole cartwheel = 9+0 triplets.",
    "Robert Brown (1831) = Nucleus; Flemming = Chromatin.",
    "Nucleolus = rRNA synthesis site (non-membrane bound).",
    "Centromere shapes: Metacentric (V), Sub-metacentric (L), Acrocentric (J), Telocentric (I).",
    "Nucleosome = Histone octamer (Lysine/Arginine rich) + ~200 bp DNA + H1 linker.",
    "Euchromatin = light, loose, active; Heterochromatin = dark, dense, inactive."
  ],

  practiceQuestions: [
    {
      questionText: "Which of the following microtubule arrangements is present in the axoneme of eukaryotic cilia and flagella?",
      options: [
        "9 + 0 triplet pattern",
        "9 + 2 doublet pattern",
        "8 + 2 doublet pattern",
        "9 + 1 single pattern"
      ],
      correctAnswer: 1,
      explanation: "The core of eukaryotic cilia and flagella (axoneme) has 9 peripheral doublets and 2 central single microtubules, giving a 9+2 pattern.",
      difficulty: "Easy",
      conceptTested: "Axoneme Microtubule Pattern"
    },
    {
      questionText: "Which amino acid residues are abundantly present in basic histone proteins?",
      options: [
        "Valine and Leucine",
        "Lysine and Arginine",
        "Tryptophan and Tyrosine",
        "Glutamic acid and Aspartic acid"
      ],
      correctAnswer: 1,
      explanation: "Histones are rich in basic amino acid residues Lysine and Arginine, which carry positive charges on their side chains.",
      difficulty: "Easy",
      conceptTested: "Histone Chemical Composition"
    },
    {
      questionText: "What shape does an acrocentric chromosome assume during anaphase movement towards poles?",
      options: [
        "V-shape",
        "L-shape",
        "J-shape",
        "I-shape"
      ],
      correctAnswer: 2,
      explanation: "Acrocentric chromosomes (centromere near tip) form a J-shape during anaphase. Metacentric is V-shape, Sub-metacentric is L-shape, Telocentric is I-shape.",
      difficulty: "Medium",
      conceptTested: "Chromosome Anaphase Shapes"
    }
  ],

  pyqs: [
    {
      exam: "NEET",
      year: 2021,
      questionText: "Which of the following statements is CORRECT regarding cell structures?",
      options: [
        "Fusion of two cells is called Karyogamy",
        "Organelles with double membrane are lysosomes",
        "Ribosomes are non-membrane bound organelles found in both prokaryotes and eukaryotes",
        "Centrioles are present in plant cells"
      ],
      correctAnswer: 2,
      explanation: "Ribosomes are non-membrane bound ribonucleoprotein organelles present in both prokaryotic (70S) and eukaryotic (80S) cells.",
      verifiedExam: "NEET 2021",
      topicTested: "General Cell Structure",
      difficulty: "Easy"
    },
    {
      exam: "NEET",
      year: 2017,
      questionText: "Water soluble pigments found in plant cell vacuoles are:",
      options: [
        "Chlorophylls",
        "Carotenoids",
        "Anthocyanins",
        "Xanthophylls"
      ],
      correctAnswer: 2,
      explanation: "Anthocyanins are water-soluble pigments present in the plant cell vacuole. Chlorophylls, carotenoids, and xanthophylls are lipid-soluble plastid pigments.",
      verifiedExam: "NEET 2017",
      topicTested: "Vacuolar Pigments",
      difficulty: "Easy"
    },
    {
      exam: "NEET",
      year: 2016,
      questionText: "A complex of ribosomes attached to a single strand of RNA is known as:",
      options: [
        "Polysome",
        "Polymer",
        "Polypeptide",
        "Okazaki fragment"
      ],
      correctAnswer: 0,
      explanation: "Several ribosomes may attach to a single mRNA and form a chain known as polyribosome or polysome.",
      verifiedExam: "NEET 2016",
      topicTested: "Polysome Structure",
      difficulty: "Easy"
    }
  ]
};
