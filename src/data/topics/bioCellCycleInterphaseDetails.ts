import { DetailedTopicContent } from '../../types/neet';

export const bioCellCycleInterphaseDetails: DetailedTopicContent = {
  topicId: "bio-cell-cycle-interphase",
  topicName: "Cell Cycle, Interphase (G1, S, G2, G0) & Mitosis",
  subject: "Biology",
  class: "Class 11",
  classification: "Cell Structure & Function",
  chapter: "Cell Cycle and Cell Division",
  whatIsThisTopic: "An exhaustive, NCERT-aligned master guide on the eukaryotic cell cycle, interphase phases (G1, S, G2, G0), DNA replication & centriole duplication kinetics, chromosome vs. chromatid dynamics, mitosis stages (Prophase, Metaphase, Anaphase, Telophase), animal vs. plant cytokinesis, and the significance of equational division.",
  basicIdea: [
    "Cell division is a fundamental property of all living organisms. Growth and reproduction of all organisms depend on cell division, whereby a single cell gives rise to a multicellular body consisting of millions of genetically identical cells.",
    "The Cell Cycle is defined as the orderly sequence of events by which a cell duplicates its genome (DNA), synthesizes the other cell constituents, and eventually divides into two daughter cells.",
    "Although cell growth (in terms of cytoplasmic increase) is a continuous process, DNA synthesis (replication) occurs ONLY during one specific phase of the cell cycle (the S phase).",
    "Interphase represents the phase between two successive M phases. It occupies more than 95% of the total cell cycle duration. Rather than being a 'resting phase', interphase is the most metabolically active phase during which the cell prepares for division through cell growth and DNA replication.",
    "Mitosis (M Phase) is the equational division phase during which the duplicated chromosome components are distributed equally into two daughter nuclei (karyokinesis), followed by cytoplasmic division (cytokinesis)."
  ],
  importantTerms: [
    {
      term: "Cell Cycle",
      definition: "The ordered sequence of events by which a cell duplicates its genome, synthesizes other cell organelles and proteins, and divides into two daughter cells."
    },
    {
      term: "Interphase",
      definition: "The period between two consecutive cell divisions during which the cell is metabolically active, growing in size, and replicating its DNA in preparation for M phase (>95% of cycle duration)."
    },
    {
      term: "Quiescent Stage (G0)",
      definition: "An inactive metabolic stage where non-dividing cells (e.g., heart muscle cells, mature neurons) exit the G1 phase and remain metabolically active without proliferating unless stimulated."
    },
    {
      term: "S Phase (Synthesis Phase)",
      definition: "The specific interphase stage during which nuclear DNA is replicated (doubling content from 2C to 4C) and centrioles duplicate in the cytoplasm of animal cells, while chromosome number remains constant (2n)."
    },
    {
      term: "Karyokinesis",
      definition: "The division of the cell nucleus during M phase, comprising four sequential stages: Prophase, Metaphase, Anaphase, and Telophase."
    },
    {
      term: "Cytokinesis",
      definition: "The division of the cell cytoplasm following karyokinesis, resulting in two distinct daughter cells."
    },
    {
      term: "Kinetochore",
      definition: "Disc-shaped protein structures located on the centromere of each chromosome, serving as the attachment site for spindle fibers (microtubules)."
    },
    {
      term: "Metaphase Plate (Equatorial Plate)",
      definition: "The central plane of the cell at which all condensed chromosomes align during metaphase, perpendicular to the spindle apparatus."
    },
    {
      term: "Syncytium",
      definition: "A multinucleate cellular condition resulting when karyokinesis is not followed by cytokinesis (e.g., liquid endosperm in coconut)."
    },
    {
      term: "Phragmoplast & Cell Plate",
      definition: "A plant-specific structure formed by Golgi-derived vesicles along the equatorial plane during plant cytokinesis that develops centrifugally into the cell plate and middle lamella."
    }
  ],
  conceptExplanation: [
    {
      heading: "1. The Eukaryotic Cell Cycle Architecture & Interphase (G1, S, G2, G0)",
      paragraphs: [
        "A typical eukaryotic cell cycle is exemplified by human cells in culture, which divide approximately once every 24 hours. However, the duration of the cell cycle varies greatly among different organisms and cell types. For example, yeast cells (Saccharomyces cerevisiae) complete a cell cycle in just 90 minutes.",
        "The cell cycle is divided into two primary phases: (1) Interphase (the preparatory phase occupying >95% of the total time) and (2) M Phase (Mitosis, the actual division phase lasting less than 1 hour, i.e., <5% of the duration).",
        "Why do cells divide? Cells divide primarily to maintain the Karyoplasmic Index (Kernplasm Ratio = ratio of nuclear volume to cytoplasmic volume) and to preserve a high Surface Area to Volume Ratio. As a cell grows, its cytoplasm increases faster than its nuclear volume and surface area, necessitating division to restore metabolic efficiency.",
        "Interphase is erroneously referred to historically as the 'resting phase'. In reality, it is the most metabolically active phase. The cell undergoes continuous cytoplasmic growth, synthesizes RNA and proteins, and replicates its genomic DNA.",
        "Interphase is further subdivided into three distinct phases: Gap 1 (G1), Synthesis (S), and Gap 2 (G2). In addition, cells may enter a non-dividing Quiescent Stage (G0)."
      ],
      importantPoints: [
        "Human cells in culture divide every 24 hours (Interphase ~23 hours, M phase ~1 hour).",
        "Yeast cell cycle duration = 90 minutes.",
        "Interphase occupies >95% of total cell cycle duration.",
        "Cytoplasmic growth is a CONTINUOUS process, whereas DNA replication occurs ONLY during the S phase.",
        "Cells divide to maintain the Karyoplasmic Index (Nucleus : Cytoplasm ratio) and Surface Area : Volume ratio."
      ],
      tables: [
        {
          title: "Detailed Sub-phases of Interphase & Quiescent Stage (G0)",
          headers: ["Phase Name", "Key Events & Metabolic Activity", "DNA Content & Chromosome Count", "Organelle & Protein Kinetics"],
          rows: [
            [
              "G1 Phase (Gap 1 / Post-Mitotic Phase)",
              "Interval between mitosis and initiation of DNA replication. Cell is metabolically active and continuously grows. Active transcription of RNA and synthesis of proteins.",
              "Chromosome number = 2n (Diploid)\nDNA content = 2C\nNo DNA replication occurs in G1.",
              "Duplication of cell organelles (Mitochondria, Endoplasmic Reticulum, Golgi apparatus, Chloroplasts) begins. Accumulation of amino acids and ATP."
            ],
            [
              "S Phase (Synthesis Phase)",
              "CRITICAL PHASE: Genomic DNA replication occurs in the nucleus. Histone protein synthesis occurs to wrap newly replicated DNA into chromatin.",
              "Chromosome number remains SAME = 2n\nDNA content DOUBLES from 2C to 4C!\nEach chromosome now has 2 sister chromatids.",
              "In animal cells, centriole duplication occurs in the CYTOPLASM. Plant cells lack centrioles but form anastral spindles."
            ],
            [
              "G2 Phase (Gap 2 / Pre-Mitotic Phase)",
              "Final preparation for M phase. Synthesis of Tubulin proteins required for mitotic spindle assembly. RNA and metabolic enzymes synthesized.",
              "Chromosome number = 2n\nDNA content = 4C\nCell contains double the G1 DNA amount.",
              "Further organelle growth, ATP storage, and cell size check. Nuclear envelope intact, nucleolus clearly visible."
            ],
            [
              "G0 Phase (Quiescent Stage)",
              "Cells that do not divide further (e.g., adult heart muscle cells, mature neurons) exit G1 phase to enter an inactive G0 state.",
              "Chromosome number = 2n\nDNA content = 2C\nReversible or permanent arrest depending on tissue type.",
              "Cells remain METABOLICALLY ACTIVE and functionally specialized, but do not proliferate unless called upon by growth factors/injury."
            ]
          ]
        }
      ],
      visuals: [
        {
          type: "svg",
          svgContent: `<svg viewBox="0 0 800 500" className="w-full h-auto text-slate-800 dark:text-slate-100" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="500" rx="16" fill="currentColor" fill-opacity="0.03" />
            
            <g transform="translate(320, 250)">
              <path d="M 0 0 L 0 -180 A 180 180 0 0 1 171 55 Z" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="3" />
              <path d="M 0 0 L 171 55 A 180 180 0 0 1 -55 171 Z" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="3" />
              <path d="M 0 0 L -55 171 A 180 180 0 0 1 -171 55 Z" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="3" />
              <path d="M 0 0 L -171 55 A 180 180 0 0 1 0 -180 Z" fill="#ec4899" fill-opacity="0.3" stroke="#ec4899" stroke-width="4" />

              <circle cx="0" cy="0" r="100" fill="currentColor" className="fill-white dark:fill-slate-900" stroke="#cbd5e1" stroke-width="2" />

              <text x="0" y="-15" text-anchor="middle" font-weight="bold" font-size="16" fill="currentColor">CELL CYCLE</text>
              <text x="0" y="10" text-anchor="middle" font-size="12" fill="#64748b">Interphase (&gt;95%)</text>
              <text x="0" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#ec4899">M Phase (&lt;5%)</text>

              <text x="110" y="-70" font-weight="bold" font-size="16" fill="#2563eb">G1 Phase</text>
              <text x="110" y="-50" font-size="11" fill="#3b82f6">• Cell Growth</text>
              <text x="110" y="-35" font-size="11" fill="#3b82f6">• RNA/Protein Synth</text>
              <text x="110" y="-20" font-size="11" font-weight="bold" fill="#1d4ed8">2n, 2C</text>

              <text x="80" y="140" font-weight="bold" font-size="16" fill="#059669">S Phase</text>
              <text x="80" y="160" font-size="11" fill="#10b981">• DNA Replication (2C-&gt;4C)</text>
              <text x="80" y="175" font-size="11" fill="#10b981">• Centriole Duplication</text>
              <text x="80" y="190" font-size="11" font-weight="bold" fill="#047857">2n, 4C</text>

              <text x="-190" y="130" font-weight="bold" font-size="16" fill="#d97706">G2 Phase</text>
              <text x="-190" y="150" font-size="11" fill="#f59e0b">• Tubulin Synthesis</text>
              <text x="-190" y="165" font-size="11" fill="#f59e0b">• ATP Storage / Prep</text>
              <text x="-190" y="180" font-size="11" font-weight="bold" fill="#b45309">2n, 4C</text>

              <text x="-160" y="-100" font-weight="bold" font-size="15" fill="#be185d">M PHASE (Mitosis)</text>
              <text x="-160" y="-80" font-size="11" fill="#db2777">1. Karyokinesis (P, M, A, T)</text>
              <text x="-160" y="-65" font-size="11" fill="#db2777">2. Cytokinesis</text>

              <path d="M 80 -140 Q 150 -190 220 -180" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4" />
            </g>

            <g transform="translate(560, 40)">
              <rect x="0" y="0" width="210" height="110" rx="12" fill="#f1f5f9" className="dark:fill-slate-800" stroke="#64748b" stroke-width="2" />
              <text x="105" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#334155" className="dark:fill-slate-200">G0 Phase (Quiescent Stage)</text>
              <text x="15" y="50" font-size="11" fill="#475569" className="dark:fill-slate-300">• Exit from G1 phase</text>
              <text x="15" y="68" font-size="11" fill="#475569" className="dark:fill-slate-300">• Metabolically ACTIVE</text>
              <text x="15" y="86" font-size="11" fill="#475569" className="dark:fill-slate-300">• No proliferation (Heart, Neurons)</text>
            </g>
          </svg>`,
          caption: "Interactive schematic of the eukaryotic cell cycle showing the relative duration of Interphase (>95%, comprising G1, S, G2) and M Phase (<5%). Note the exit into G0 from G1, DNA replication in S phase (2C to 4C while 2n remains constant), and tubulin synthesis in G2.",
          guide: "WHAT TO OBSERVE: (1) DNA content doubles from 2C to 4C ONLY during S phase, but chromosome number (2n) does NOT change. (2) Centriole duplication occurs in the cytoplasm during S phase in animal cells. (3) G0 cells are metabolically ACTIVE, not dead or resting."
        }
      ]
    },
    {
      heading: "2. Chromosome Number vs. Chromatid Count vs. DNA Content (C-Value)",
      paragraphs: [
        "A major source of confusion in NEET problems is distinguishing between Chromosome Number (n or 2n), Chromatid Number, and DNA Content (C, 2C, 4C).",
        "Chromosome Number is determined strictly by the COUNT OF CENTROMERES. Whether a chromosome consists of 1 single chromatid or 2 sister chromatids attached at a centromere, it counts as EXACTLY ONE CHROMOSOME as long as there is 1 centromere.",
        "Chromatid Number refers to individual longitudinal DNA-protein strands attached at the centromere. An unreplicated G1 chromosome has 1 chromatid (1 DNA double helix). A replicated G2 chromosome has 2 sister chromatids (2 identical DNA double helices) held together at the centromere by cohesin proteins.",
        "DNA Content (C-value) represents the total mass of genomic DNA in picograms (pg) or relative units. A haploid cell in G1 has 1C DNA content; a diploid cell in G1 has 2C DNA content. Following S-phase replication, the DNA content doubles to 4C, but the chromosome count remains 2n because sister chromatids remain joined at the centromere."
      ],
      importantPoints: [
        "Chromosome count = Centromere count!",
        "G1 phase: 2n chromosomes, 2n chromatids, 2C DNA content.",
        "After S phase & in G2 phase: 2n chromosomes, 4n chromatids (sister chromatid pairs), 4C DNA content.",
        "Anaphase of Mitosis: Centromeres split! Sister chromatids separate to become daughter chromosomes. Temporary chromosome count = 4n, 4C DNA content in the single cell.",
        "After Cytokinesis: Each daughter cell receives 2n chromosomes, 2n chromatids, 2C DNA content."
      ],
      tables: [
        {
          title: "Master Summary Table: Chromosome, Chromatid, and DNA Kinetics in Mitosis (Example: Human Cell 2n = 46)",
          headers: ["Cell Cycle Stage", "Chromosome Count (Centromere Count)", "Sister Chromatids per Cell", "DNA Content (C-Value)", "Physical Chromosome Structure"],
          rows: [
            ["G1 Phase", "46 (2n)", "46 chromatids", "2C", "Monad (Unreplicated single-chromatid threads)"],
            ["S Phase (End)", "46 (2n)", "92 chromatids", "4C", "Dyad (Replicated 2-chromatid structure joined at centromere)"],
            ["G2 Phase", "46 (2n)", "92 chromatids", "4C", "Dyad (Fully replicated, prep for mitosis)"],
            ["Prophase", "46 (2n)", "92 chromatids", "4C", "Condensed dyad chromosomes visible"],
            ["Metaphase", "46 (2n)", "92 chromatids", "4C", "Maximum condensed dyads aligned at Metaphase Plate"],
            ["Anaphase", "92 (4n temporary!)", "92 chromatids (now daughter chromosomes)", "4C", "Centromeres split; 46 daughter chromosomes move to each pole"],
            ["Telophase (Per nucleus)", "46 (2n in each nucleus)", "46 chromatids per nucleus", "2C per nucleus", "Decondensing single-chromatid chromosomes"],
            ["Daughter Cells (Cytokinesis)", "46 (2n)", "46 chromatids", "2C", "Two genetically identical diploid cells in G1 phase"]
          ]
        }
      ],
      visuals: [
        {
          type: "svg",
          svgContent: `<svg viewBox="0 0 800 360" className="w-full h-auto text-slate-800 dark:text-slate-100" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="360" rx="16" fill="currentColor" fill-opacity="0.03" />

            <g transform="translate(150, 40)">
              <rect x="-100" y="0" width="200" height="280" rx="12" fill="#eff6ff" className="dark:fill-slate-800" stroke="#3b82f6" stroke-width="2" />
              <text x="0" y="30" text-anchor="middle" font-weight="bold" font-size="14" fill="#1d4ed8">UNREPLICATED CHROMOSOME</text>
              <text x="0" y="50" text-anchor="middle" font-size="12" fill="#3b82f6">(G1 Phase Cell)</text>

              <path d="M 0 80 C -15 110, -15 140, 0 160 C 15 140, 15 110, 0 80 Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2" />
              <circle cx="0" cy="160" r="12" fill="#1e40af" stroke="#ffffff" stroke-width="2" />
              <path d="M 0 160 C -15 180, -15 210, 0 240 C 15 210, 15 180, 0 160 Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2" />

              <text x="0" y="265" text-anchor="middle" font-weight="bold" font-size="12" fill="#1e3a8a">1 Centromere = 1 Chromosome (2C DNA)</text>
            </g>

            <g transform="translate(370, 160)">
              <path d="M 0 0 L 50 0" stroke="#10b981" stroke-width="4" stroke-linecap="round" />
              <text x="25" y="-15" text-anchor="middle" font-weight="bold" font-size="13" fill="#059669">S Phase</text>
              <text x="25" y="20" text-anchor="middle" font-size="10" fill="#10b981">DNA Replication</text>
              <text x="25" y="35" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2C -&gt; 4C</text>
            </g>

            <g transform="translate(620, 40)">
              <rect x="-120" y="0" width="240" height="280" rx="12" fill="#ecfdf5" className="dark:fill-slate-800" stroke="#10b981" stroke-width="2" />
              <text x="0" y="30" text-anchor="middle" font-weight="bold" font-size="14" fill="#047857">REPLICATED CHROMOSOME</text>
              <text x="0" y="50" text-anchor="middle" font-size="12" fill="#059669">(G2 / Prophase / Metaphase)</text>

              <path d="M -20 80 C -35 110, -35 140, 0 160 C -10 140, -10 110, -20 80 Z" fill="#34d399" stroke="#047857" stroke-width="2" />
              <path d="M 0 160 C -35 180, -35 210, -20 240 C -10 210, -10 180, 0 160 Z" fill="#34d399" stroke="#047857" stroke-width="2" />

              <path d="M 20 80 C 35 110, 35 140, 0 160 C 10 140, 10 110, 20 80 Z" fill="#34d399" stroke="#047857" stroke-width="2" />
              <path d="M 0 160 C 35 180, 35 210, 20 240 C 10 210, 10 180, 0 160 Z" fill="#34d399" stroke="#047857" stroke-width="2" />

              <circle cx="0" cy="160" r="12" fill="#047857" stroke="#ffffff" stroke-width="2" />
              <rect x="-18" y="152" width="6" height="16" rx="2" fill="#f59e0b" />
              <rect x="12" y="152" width="6" height="16" rx="2" fill="#f59e0b" />

              <text x="0" y="265" text-anchor="middle" font-weight="bold" font-size="12" fill="#064e3b">1 Centromere = 1 Chromosome (2 Sister Chromatids, 4C DNA)</text>
            </g>
          </svg>`,
          caption: "Anatomical comparison between an Unreplicated Chromosome (G1 phase, 1 centromere, 1 chromatid, 2C DNA) and a Replicated Chromosome (G2/Metaphase, 1 centromere, 2 identical sister chromatids held by cohesins, 2 kinetochores, 4C DNA). Note: Centromere count determines chromosome count!",
          guide: "WHAT TO OBSERVE: S-phase DNA replication converts 1 chromatid into 2 sister chromatids held at 1 centromere. The chromosome number remains 1 (or 2n diploid), while DNA content doubles from 2C to 4C."
        }
      ]
    },
    {
      heading: "3. Mitosis (Equational Division) — Comprehensive Stage-by-Stage Breakdown",
      paragraphs: [
        "Mitosis is the division of somatic cells resulting in two daughter cells containing the exact same number and quality of chromosomes as the parent cell. It is called Equational Division.",
        "Karyokinesis proceeds through four continuous stages: Prophase, Metaphase, Anaphase, and Telophase.",
        "PROPHASE: Follows S and G2 phases of interphase. Chromatin threads begin to condense into compact, distinct mitotic chromosomes. Each chromosome consists of two identical sister chromatids attached at the centromere. The duplicated centrosomes (duplicated during S phase in cytoplasm) begin moving toward opposite poles of the cell and radiate microtubules called asters. The asters along with spindle fibers form the Mitotic Apparatus (Anastral in plant cells, Amphiastral in animal cells). Crucially, by late prophase, the nuclear envelope, nucleolus, Endoplasmic Reticulum, and Golgi complex completely disappear.",
        "METAPHASE: The complete disintegration of the nuclear envelope marks the start of Metaphase. Chromosomes complete condensation and become shortest and thickest — making Metaphase the BEST STAGE TO STUDY CHROMOSOME MORPHOLOGY (number, size, structure). Small disc-shaped protein structures on the centromere called Kinetochores serve as attachment sites for spindle fibers. All chromosomes align at the equatorial plane of the cell, forming the Metaphase Plate (Equatorial Plate). Spindle fibers from opposite poles attach to kinetochores of sister chromatids.",
        "ANAPHASE: Characterized by the simultaneous splitting of centromeres of each chromosome. Sister chromatids separate and are now referred to as daughter chromosomes. They begin migrating toward opposite poles. The centromere leads toward the pole while the chromosomal arms trail behind. Anaphase is the BEST STAGE TO STUDY CHROMOSOME SHAPE (V-shaped metacentric, L-shaped submetacentric, J-shaped acrocentric, I-shaped telocentric). Centromere splitting causes a temporary doubling of chromosome number in the single cell (4n).",
        "TELOPHASE: The final stage of karyokinesis. Chromosomes reach their respective poles, lose their individuality, and decondense back into an uncoiled chromatin network. Nuclear envelope reforms around chromosome clusters at each pole, giving rise to two daughter nuclei. Nucleolus, Golgi complex, and ER reform. Karyokinesis is now complete."
      ],
      importantPoints: [
        "PROPHASE: Chromatin condenses; centrosomes move to opposite poles; nuclear membrane, nucleolus, ER, Golgi DISAPPEAR.",
        "METAPHASE: Nuclear membrane completely gone; maximum condensation -> BEST stage for chromosome MORPHOLOGY; chromosomes align at METAPHASE PLATE; spindle fibers attach to kinetochores.",
        "ANAPHASE: Centromeres SPLIT simultaneously; sister chromatids separate -> daughter chromosomes migrate to opposite poles; BEST stage for chromosome SHAPE (V, L, J, I).",
        "TELOPHASE: Chromosomes DECONDENSE back into chromatin; nuclear envelope, nucleolus, Golgi, ER REAPPEAR; two daughter nuclei formed.",
        "Mitotic apparatus = Spindle fibers + Asters (Animal = Amphiastral; Plant = Anastral due to absence of centrioles)."
      ],
      visuals: [
        {
          type: "svg",
          svgContent: `<svg viewBox="0 0 900 600" className="w-full h-auto text-slate-800 dark:text-slate-100" xmlns="http://www.w3.org/2000/svg">
            <rect width="900" height="600" rx="16" fill="currentColor" fill-opacity="0.03" />

            <g transform="translate(30, 30)">
              <rect width="260" height="240" rx="12" fill="#ffffff" className="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="2" />
              <text x="130" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#3b82f6">1. INTERPHASE (G2)</text>
              <circle cx="130" cy="130" r="75" fill="#f8fafc" className="dark:fill-slate-800" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4" />
              <path d="M 90 110 Q 130 90 170 120 T 110 160 T 150 140" fill="none" stroke="#94a3b8" stroke-width="2" />
              <circle cx="105" cy="115" r="12" fill="#1e3a8a" opacity="0.6" />
              <circle cx="70" cy="80" r="6" fill="#ef4444" />
              <circle cx="82" cy="80" r="6" fill="#ef4444" />
              <text x="130" y="225" text-anchor="middle" font-size="11" fill="#64748b">• Intact envelope &amp; nucleolus • Diffuse chromatin</text>
            </g>

            <g transform="translate(320, 30)">
              <rect width="260" height="240" rx="12" fill="#ffffff" className="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="2" />
              <text x="130" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#8b5cf6">2. PROPHASE</text>
              <circle cx="130" cy="130" r="75" fill="#f8fafc" className="dark:fill-slate-800" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="6,4" />
              <path d="M 100 110 L 120 130 M 120 110 L 100 130" stroke="#8b5cf6" stroke-width="5" stroke-linecap="round" />
              <path d="M 140 130 L 160 150 M 160 130 L 140 150" stroke="#ec4899" stroke-width="5" stroke-linecap="round" />
              <circle cx="65" cy="90" r="6" fill="#ef4444" />
              <circle cx="195" cy="170" r="6" fill="#ef4444" />
              <text x="130" y="225" text-anchor="middle" font-size="11" fill="#64748b">• Chromatin condenses • Envelope breaks down</text>
            </g>

            <g transform="translate(610, 30)">
              <rect width="260" height="240" rx="12" fill="#ffffff" className="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="2" />
              <text x="130" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#10b981">3. METAPHASE</text>
              <circle cx="130" cy="130" r="75" fill="#f8fafc" className="dark:fill-slate-800" stroke="#10b981" stroke-width="2" />
              <line x1="130" y1="60" x2="130" y2="200" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
              <circle cx="60" cy="130" r="6" fill="#ef4444" />
              <circle cx="200" cy="130" r="6" fill="#ef4444" />
              <line x1="60" y1="130" x2="130" y2="100" stroke="#f59e0b" stroke-width="1.5" />
              <line x1="60" y1="130" x2="130" y2="130" stroke="#f59e0b" stroke-width="1.5" />
              <line x1="60" y1="130" x2="130" y2="160" stroke="#f59e0b" stroke-width="1.5" />
              <line x1="200" y1="130" x2="130" y2="100" stroke="#f59e0b" stroke-width="1.5" />
              <line x1="200" y1="130" x2="130" y2="130" stroke="#f59e0b" stroke-width="1.5" />
              <line x1="200" y1="130" x2="130" y2="160" stroke="#f59e0b" stroke-width="1.5" />
              <path d="M 122 90 L 138 110 M 138 90 L 122 110" stroke="#8b5cf6" stroke-width="6" stroke-linecap="round" />
              <path d="M 122 120 L 138 140 M 138 120 L 122 140" stroke="#ec4899" stroke-width="6" stroke-linecap="round" />
              <path d="M 122 150 L 138 170 M 138 150 L 122 170" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
              <text x="130" y="225" text-anchor="middle" font-size="11" fill="#64748b">• Metaphase plate alignment • Morphology study</text>
            </g>

            <g transform="translate(30, 310)">
              <rect width="260" height="240" rx="12" fill="#ffffff" className="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="2" />
              <text x="130" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#f59e0b">4. ANAPHASE</text>
              <circle cx="130" cy="130" r="75" fill="#f8fafc" className="dark:fill-slate-800" stroke="#f59e0b" stroke-width="2" />
              <circle cx="60" cy="130" r="6" fill="#ef4444" />
              <circle cx="200" cy="130" r="6" fill="#ef4444" />
              <path d="M 90 100 L 80 110 L 90 120" fill="none" stroke="#8b5cf6" stroke-width="4" stroke-linecap="round" />
              <path d="M 90 140 L 80 150 L 90 160" fill="none" stroke="#ec4899" stroke-width="4" stroke-linecap="round" />
              <path d="M 170 100 L 180 110 L 170 120" fill="none" stroke="#8b5cf6" stroke-width="4" stroke-linecap="round" />
              <path d="M 170 140 L 180 150 L 170 160" fill="none" stroke="#ec4899" stroke-width="4" stroke-linecap="round" />
              <text x="130" y="225" text-anchor="middle" font-size="11" fill="#64748b">• Centromeres split • Chromatids move to poles</text>
            </g>

            <g transform="translate(320, 310)">
              <rect width="260" height="240" rx="12" fill="#ffffff" className="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="2" />
              <text x="130" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#06b6d4">5. TELOPHASE</text>
              <ellipse cx="130" cy="130" rx="85" ry="65" fill="#f8fafc" className="dark:fill-slate-800" stroke="#06b6d4" stroke-width="2" />
              <circle cx="85" cy="130" r="30" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3" />
              <circle cx="175" cy="130" r="30" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="3,3" />
              <path d="M 75 125 Q 85 115 95 135" stroke="#8b5cf6" stroke-width="2" fill="none" />
              <path d="M 165 125 Q 175 115 185 135" stroke="#8b5cf6" stroke-width="2" fill="none" />
              <text x="130" y="225" text-anchor="middle" font-size="11" fill="#64748b">• Nuclear envelopes reform • Decondensation</text>
            </g>

            <g transform="translate(610, 310)">
              <rect width="260" height="240" rx="12" fill="#ffffff" className="dark:fill-slate-900" stroke="#cbd5e1" stroke-width="2" />
              <text x="130" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#ec4899">6. CYTOKINESIS</text>
              <circle cx="80" cy="130" r="45" fill="#eff6ff" className="dark:fill-slate-800" stroke="#ec4899" stroke-width="2" />
              <circle cx="180" cy="130" r="45" fill="#eff6ff" className="dark:fill-slate-800" stroke="#ec4899" stroke-width="2" />
              <circle cx="80" cy="130" r="18" fill="#dbeafe" className="dark:fill-slate-700" stroke="#2563eb" stroke-width="1.5" />
              <circle cx="180" cy="130" r="18" fill="#dbeafe" className="dark:fill-slate-700" stroke="#2563eb" stroke-width="1.5" />
              <text x="130" y="225" text-anchor="middle" font-size="11" fill="#64748b">• Cytoplasm divides • Two 2n daughter cells</text>
            </g>
          </svg>`,
          caption: "Complete 6-stage diagram of Mitotic cell division. (1) Interphase G2 cell with duplicated centrosomes and intact envelope; (2) Prophase condensation and centrosome migration; (3) Metaphase alignment at the equatorial plate with kinetochore-spindle attachments; (4) Anaphase centromere splitting and poleward chromatid movement; (5) Telophase envelope reformation; (6) Cytokinesis generating two genetically identical daughter cells.",
          guide: "DIAGRAM IDENTIFICATION CLUES FOR NEET: (1) Metaphase = Chromosomes cleanly lined up along middle axis. (2) Anaphase = V-shaped or U-shaped chromatids pulled apart toward opposite poles. (3) Telophase = Dumbbell-shaped cell with two re-forming nuclear rings."
        }
      ]
    },
    {
      heading: "4. Cytokinesis Mechanics: Animal Cleavage Furrow vs. Plant Cell Plate",
      paragraphs: [
        "Cytokinesis is the division of cytoplasm into two distinct daughter cells following nuclear division (karyokinesis). The mechanism differs fundamentally between animal and plant cells due to structural constraints.",
        "ANIMAL CYTOKINESIS: Animal cells lack a rigid cell wall. Cytokinesis occurs via the formation of a Cleavage Furrow in the plasma membrane. An actin and myosin microfilament contractile ring forms underneath the plasma membrane along the equatorial plane. The furrow deepens CENTRIPETALLY (from the periphery/outside toward the center) until it meets in the middle and pinches the cell into two separate daughter cells.",
        "PLANT CYTOKINESIS: Plant cells are enclosed by an inextensible rigid cell wall. Consequently, they cannot form a contractile furrow. Instead, plant cytokinesis begins in the center of the cell and grows CENTRIFUGALLY (from inside toward the outside/periphery). Vesicles derived from the Golgi apparatus align along the equatorial plane, guided by microfilaments and microtubules (forming the Phragmoplast). These vesicles fuse to form the Cell Plate, which eventually matures into the Middle Lamella (rich in calcium and magnesium pectate) between the walls of adjacent plant cells.",
        "SYNCYTIUM FORMATION: In some organisms, karyokinesis is not followed by cytokinesis. As a result, a multinucleate condition arises known as a Syncytium or Coenocyte. A classic NCERT example is the liquid endosperm in coconut (coconut water), where free nuclear divisions occur without immediate cell wall formation."
      ],
      importantPoints: [
        "Animal Cytokinesis: Cleavage Furrow -> Centripetal direction (Outside to Inside) -> Contractile ring of actin-myosin microfilaments.",
        "Plant Cytokinesis: Cell Plate (Phragmoplast) -> Centrifugal direction (Inside to Outside) -> Golgi vesicles forming Middle Lamella (Ca/Mg pectate).",
        "Syncytium: Multinucleate state caused by repeated karyokinesis WITHOUT cytokinesis (e.g., coconut liquid endosperm)."
      ],
      tables: [
        {
          title: "Comparative Breakdown: Animal vs. Plant Cytokinesis",
          headers: ["Feature / Parameter", "Animal Cell Cytokinesis", "Plant Cell Cytokinesis"],
          rows: [
            ["Cell Wall Constraint", "Absent (Flexible plasma membrane)", "Present (Rigid inextensible cell wall)"],
            ["Primary Mechanism", "Cleavage Furrow formation", "Cell Plate (Phragmoplast) formation"],
            ["Direction of Division", "CENTRIPETAL (From periphery to center / Outside to Inside)", "CENTRIFUGAL (From center to periphery / Inside to Outside)"],
            ["Cytoskeletal Elements", "Actin and Myosin microfilaments (Contractile ring)", "Microtubules and Golgi-derived vesicles (Phragmoplast)"],
            ["End Product at Boundary", "Constricted plasma membrane bridge", "Cell plate developing into Middle Lamella (Ca/Mg pectate)"],
            ["Aster Involvement", "Amphiastral spindle (Asters present at poles)", "Anastral spindle (No asters/centrioles present)"]
          ]
        }
      ],
      visuals: [
        {
          type: "svg",
          svgContent: `<svg viewBox="0 0 800 360" className="w-full h-auto text-slate-800 dark:text-slate-100" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="360" rx="16" fill="currentColor" fill-opacity="0.03" />

            <g transform="translate(150, 40)">
              <rect x="-110" y="0" width="220" height="280" rx="12" fill="#eff6ff" className="dark:fill-slate-800" stroke="#3b82f6" stroke-width="2" />
              <text x="0" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#1d4ed8">ANIMAL CELL CYTOKINESIS</text>
              <text x="0" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Cleavage Furrow (Centripetal)</text>

              <path d="M -80 70 C -40 70, -20 120, -20 150 C -20 180, -40 230, -80 230 C -90 230, -90 70, -80 70 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
              <path d="M 80 70 C 40 70, 20 120, 20 150 C 20 180, 40 230, 80 230 C 90 230, 90 70, 80 70 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />

              <line x1="-50" y1="150" x2="-22" y2="150" stroke="#ef4444" stroke-width="3" />
              <line x1="50" y1="150" x2="22" y2="150" stroke="#ef4444" stroke-width="3" />

              <circle cx="-50" cy="150" r="16" fill="#3b82f6" opacity="0.5" />
              <circle cx="50" cy="150" r="16" fill="#3b82f6" opacity="0.5" />

              <text x="0" y="260" text-anchor="middle" font-size="11" fill="#1e3a8a">• Microfilament ring constricts outside-in</text>
            </g>

            <g transform="translate(620, 40)">
              <rect x="-110" y="0" width="220" height="280" rx="12" fill="#ecfdf5" className="dark:fill-slate-800" stroke="#10b981" stroke-width="2" />
              <text x="0" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#047857">PLANT CELL CYTOKINESIS</text>
              <text x="0" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="#059669">Cell Plate / Phragmoplast (Centrifugal)</text>

              <rect x="-80" y="70" width="160" height="160" rx="4" fill="#d1fae5" stroke="#059669" stroke-width="3" />

              <line x1="-40" y1="150" x2="40" y2="150" stroke="#f59e0b" stroke-width="5" stroke-dasharray="4,2" />

              <line x1="-15" y1="150" x2="-60" y2="150" stroke="#ef4444" stroke-width="3" />
              <line x1="15" y1="150" x2="60" y2="150" stroke="#ef4444" stroke-width="3" />

              <circle cx="0" cy="110" r="16" fill="#10b981" opacity="0.5" />
              <circle cx="0" cy="190" r="16" fill="#10b981" opacity="0.5" />

              <text x="0" y="260" text-anchor="middle" font-size="11" fill="#064e3b">• Phragmoplast vesicles grow inside-out</text>
            </g>
          </svg>`,
          caption: "Mechanical comparison of Animal vs Plant Cytokinesis. Animal cells undergo centripetal cleavage furrowing driven by actin-myosin microfilaments. Plant cells undergo centrifugal cell plate formation initiated by Golgi-derived phragmoplast vesicles that mature into the middle lamella.",
          guide: "WHAT TO OBSERVE: (1) Centripetal = Outside to Inside (Animal). (2) Centrifugal = Inside to Outside (Plant). (3) Cell plate becomes the Middle Lamella."
        }
      ]
    },
    {
      heading: "5. Biological Significance of Mitosis",
      paragraphs: [
        "Mitosis or equational division is restricted to diploid somatic cells in animals (with exceptions like male honeybees/drones which develop haplontically via mitosis). In plants, mitosis occurs in both haploid (gametophyte) and diploid (sporophyte) cells.",
        "1. MAINTENANCE OF GENETIC COMPLEMENT: Mitosis results in the production of diploid daughter cells with identical genetic complement (genome) to the parent cell, ensuring genetic stability across cell generations.",
        "2. GROWTH OF MULTICELLULAR ORGANISMS: Growth of a multicellular organism from a single-celled zygote occurs exclusively by mitotic divisions.",
        "3. TISSUE REPAIR AND CELL REPLACEMENT: Continuous cell replacement occurs in tissues subjected to wear and tear. Examples highlighted in NCERT include the upper layer of the epidermis, the lining of the gut, and blood cells (RBCs/WBCs).",
        "4. CONTINUOUS MERISTEMATIC PLANT GROWTH: Mitotic divisions in apical and lateral cambium/meristems result in continuous growth of plants throughout their life.",
        "5. RESTORATION OF NUCLEO-CYTOPLASMIC RATIO: As cells grow, their cytoplasm expands faster than nuclear volume. Mitosis restores the optimum Karyoplasmic Ratio."
      ],
      importantPoints: [
        "Ensures identical genetic transmission to daughter cells.",
        "Enables growth from single-celled zygote to adult organism.",
        "Enables cell repair & replacement: Epidermal cells, lining of gut, and blood cells.",
        "Drives continuous plant growth via apical and lateral meristems.",
        "Restores Karyoplasmic Index (Kernplasm ratio)."
      ]
    }
  ],
  formulae: [
    {
      formula: "Karyoplasmic\\ Index\\ (KI) = \\frac{V_n}{V_c - V_n}",
      explanation: "Kernplasm ratio where V_n is Nuclear Volume and V_c is total Cell Volume. When KI decreases due to cell growth, cell division is triggered."
    },
    {
      formula: "Number\\ of\\ Mitotic\\ Divisions = n - 1",
      explanation: "To produce 'n' daughter cells from 1 parent cell, (n - 1) mitotic divisions are required."
    },
    {
      formula: "Number\\ of\\ Generations\\ (g) \\implies 2^g = N",
      explanation: "Number of daughter cells (N) produced after 'g' successive generations of mitotic divisions."
    }
  ],
  visualLearning: {
    type: "svg",
    svgContent: `<svg viewBox="0 0 800 200" className="w-full h-auto text-slate-800 dark:text-slate-100" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="200" rx="12" fill="currentColor" fill-opacity="0.03" />
      <g transform="translate(50, 40)">
        <rect x="0" y="20" width="120" height="80" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
        <text x="60" y="50" text-anchor="middle" font-weight="bold" font-size="14" fill="#1d4ed8">G1 Phase</text>
        <text x="60" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">2n, 2C</text>

        <rect x="180" y="20" width="120" height="80" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
        <text x="240" y="50" text-anchor="middle" font-weight="bold" font-size="14" fill="#047857">S Phase</text>
        <text x="240" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669">2n, 4C</text>

        <rect x="360" y="20" width="120" height="80" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2" />
        <text x="420" y="50" text-anchor="middle" font-weight="bold" font-size="14" fill="#b45309">G2 Phase</text>
        <text x="420" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">2n, 4C</text>

        <rect x="540" y="20" width="140" height="80" rx="8" fill="#fdf2f8" stroke="#ec4899" stroke-width="2" />
        <text x="610" y="50" text-anchor="middle" font-weight="bold" font-size="14" fill="#be185d">Mitosis (M)</text>
        <text x="610" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#db2777">Daughter: 2n, 2C</text>

        <line x1="120" y1="60" x2="180" y2="60" stroke="#64748b" stroke-width="2" />
        <line x1="300" y1="60" x2="360" y2="60" stroke="#64748b" stroke-width="2" />
        <line x1="480" y1="60" x2="540" y2="60" stroke="#64748b" stroke-width="2" />
      </g>
    </svg>`,
    caption: "Flowchart summarizing chromosome number and DNA content dynamics through G1 (2n, 2C), S (2n, 4C), G2 (2n, 4C), and Mitosis yielding daughter cells (2n, 2C).",
    flowchartSteps: [
      { step: "G1 Phase", detail: "Diploid (2n) with 2C DNA content. RNA & protein synthesis." },
      { step: "S Phase", detail: "DNA replication doubles content to 4C. Chromosome number remains 2n. Centrioles duplicate in cytoplasm." },
      { step: "G2 Phase", detail: "Preparation for division. Tubulin protein synthesis. 2n chromosomes, 4C DNA." },
      { step: "Mitosis & Cytokinesis", detail: "Centromeres split in Anaphase. Cytokinesis yields two 2n, 2C identical daughter cells." }
    ]
  },
  neetImportantPoints: [
    "Interphase occupies >95% of total cell cycle duration; M phase lasts <5%.",
    "DNA replication occurs strictly during S phase in the nucleus; centriole duplication occurs in the cytoplasm during S phase in animal cells.",
    "During S phase, DNA content doubles from 2C to 4C, but chromosome number remains 2n.",
    "G0 phase cells are metabolically active but do not proliferate unless stimulated (e.g., heart cells, neurons).",
    "Metaphase is the best stage to study chromosome MORPHOLOGY (number and size); Anaphase is the best stage to study chromosome SHAPE (V, L, J, I).",
    "Colchicine is a spindle poison that binds tubulin, preventing spindle formation and arresting cells at Metaphase.",
    "Animal cytokinesis is CENTRIPETAL (Cleavage furrow, microfilaments); Plant cytokinesis is CENTRIFUGAL (Cell plate, Phragmoplast, Golgi vesicles).",
    "Liquid endosperm of coconut is a classic example of a syncytium (multinucleate condition due to karyokinesis without cytokinesis)."
  ],
  commonConfusions: [
    {
      misconception: "Interphase is a 'resting phase' where the cell is inactive.",
      correction: "Incorrect. Interphase is the MOST METABOLICALLY ACTIVE phase of the cell cycle where the cell grows, synthesizes RNA/proteins, and replicates DNA."
    },
    {
      misconception: "Chromosome number doubles during the S phase along with DNA content.",
      correction: "False. During S phase, DNA content doubles from 2C to 4C, but the chromosome number remains EXACTLY 2n because sister chromatids remain attached at the centromere."
    },
    {
      misconception: "Centromeres split during Metaphase.",
      correction: "False. Metaphase involves alignment at the equatorial plate. Centromeres split simultaneously during ANAPHASE."
    },
    {
      misconception: "G0 phase cells are dead or metabolically inactive.",
      correction: "False. G0 cells are fully METABOLICALLY ACTIVE and functionally specialized, but they have exited the cell cycle and do not divide."
    },
    {
      misconception: "Plant cells form asters during mitosis just like animal cells.",
      correction: "False. Plant cells lack centrioles and form Anastral spindles (no asters). Animal cells form Amphiastral spindles (asters present at both poles)."
    }
  ],
  quickRevision: [
    "Cell Cycle = Interphase (>95%) + M Phase (<5%).",
    "Human cell cycle = 24 hours; Yeast = 90 minutes.",
    "G1: Growth, RNA & protein synthesis (2n, 2C).",
    "S Phase: DNA replication (2C -> 4C), Centriole duplication in cytoplasm (2n remains constant).",
    "G2: Tubulin synthesis, ATP storage, preparation for M phase (2n, 4C).",
    "G0: Quiescent stage, metabolically active, non-dividing.",
    "Prophase: Condensation, centrosome movement, disappearance of envelope, nucleolus, ER, Golgi.",
    "Metaphase: Alignment at Metaphase plate, kinetochore attachments, best for MORPHOLOGY.",
    "Anaphase: Centromere split, sister chromatids migrate to poles, best for SHAPE (V, L, J, I).",
    "Telophase: Decondensation, nuclear envelope & nucleolus reform.",
    "Animal Cytokinesis: Centripetal Cleavage Furrow (Actin ring).",
    "Plant Cytokinesis: Centrifugal Cell Plate (Phragmoplast -> Middle Lamella).",
    "Syncytium: Multinucleate state (Coconut liquid endosperm)."
  ],
  practiceQuestions: [
    {
      id: "prac-bio-cc-1",
      question: "If a diploid cell has 2n = 24 chromosomes and 20 pg of DNA in G1 phase, what will be the chromosome number and DNA content of the cell at the end of S phase?",
      options: [
        "24 chromosomes and 20 pg DNA",
        "48 chromosomes and 40 pg DNA",
        "24 chromosomes and 40 pg DNA",
        "12 chromosomes and 40 pg DNA"
      ],
      correctOption: 2,
      explanation: "During S phase, DNA replication doubles the DNA content from 20 pg (2C) to 40 pg (4C). However, the chromosome number remains unchanged at 2n = 24 because sister chromatids remain attached at the centromere."
    },
    {
      id: "prac-bio-cc-2",
      question: "Which of the following cellular events occurs exclusively during the G2 phase of the eukaryotic cell cycle?",
      options: [
        "Duplication of centrioles in the cytoplasm",
        "Replication of genomic nuclear DNA",
        "Synthesis of tubulin proteins for spindle formation",
        "Formation of the contractile microfilament ring"
      ],
      correctOption: 2,
      explanation: "Tubulin proteins required for mitotic spindle assembly are synthesized specifically during the G2 phase. Centriole duplication and DNA replication occur in S phase, while the contractile ring forms during cytokinesis."
    },
    {
      id: "prac-bio-cc-3",
      question: "Which stage of mitosis is considered optimal for studying the morphology (size, number, structure) of individual chromosomes?",
      options: [
        "Prophase",
        "Metaphase",
        "Anaphase",
        "Telophase"
      ],
      correctOption: 1,
      explanation: "Metaphase is the optimal stage to study chromosome morphology because chromosomes reach their maximum condensation and are cleanly aligned at the equatorial plate."
    },
    {
      id: "prac-bio-cc-4",
      question: "Match the cytokinesis characteristics in Column I with the correct cell type in Column II:\nColumn I:\nA. Centripetal furrow formation\nB. Centrifugal cell plate formation\nC. Phragmoplast development\nD. Actin contractile ring\nColumn II:\n1. Plant cell\n2. Animal cell",
      options: [
        "A-2, B-1, C-1, D-2",
        "A-1, B-2, C-2, D-1",
        "A-2, B-1, C-2, D-1",
        "A-1, B-1, C-2, D-2"
      ],
      correctOption: 0,
      explanation: "Animal cell cytokinesis involves centripetal cleavage furrowing driven by an actin contractile ring (A-2, D-2). Plant cell cytokinesis involves centrifugal cell plate formation mediated by phragmoplast vesicles (B-1, C-1)."
    }
  ],
  pyqs: [
    {
      id: "pyq-neet-2023-cell-cycle-1",
      year: 2023,
      examName: "NEET UG",
      question: "Which of the following stages of meiosis involves division of centromere?",
      options: [
        "Metaphase I",
        "Metaphase II",
        "Anaphase II",
        "Telophase V"
      ],
      correctOption: 2,
      explanation: "Centromeres split simultaneously during Anaphase II of meiosis (and Anaphase of mitosis). In Anaphase I of meiosis, centromeres do NOT split; homologous chromosomes separate instead.",
      conceptTested: "Anaphase II Centromere Splitting",
      ncertReference: "NCERT Class 11 Biology, Chapter 10, Section 10.4.7, Page 169"
    },
    {
      id: "pyq-neet-2021-cell-cycle-2",
      year: 2021,
      examName: "NEET UG",
      question: "The fruit fly Has 8 chromosomes (2n) in each cell. During interphase of Mitosis if the number of chromosomes at G1 phase is 8, what would be the number of chromosomes after S phase?",
      options: [
        "8",
        "16",
        "4",
        "32"
      ],
      correctOption: 0,
      explanation: "During S phase, DNA replication doubles the DNA content, but the chromosome number remains unchanged (2n = 8). Centromeres do not divide during S phase.",
      conceptTested: "S phase chromosome count stability",
      ncertReference: "NCERT Class 11 Biology, Chapter 10, Section 10.1.1, Page 163"
    },
    {
      id: "pyq-neet-2020-cell-cycle-3",
      year: 2020,
      examName: "NEET UG",
      question: "Match the following columns and select the correct option:\nColumn I:\nA. G1 phase\nB. G2 phase\nC. Quiescent stage (G0)\nD. S phase\nColumn II:\n1. Protein synthesis\n2. Inactive phase\n3. Interval between mitosis and initiation of DNA replication\n4. DNA replication",
      options: [
        "A-3, B-1, C-2, D-4",
        "A-2, B-3, C-4, D-1",
        "A-3, B-4, C-1, D-2",
        "A-4, B-1, C-2, D-3"
      ],
      correctOption: 0,
      explanation: "G1 phase is the interval between mitosis and DNA replication (A-3). G2 phase involves protein synthesis (B-1). G0 is the inactive quiescent stage (C-2). S phase involves DNA replication (D-4).",
      conceptTested: "Cell Cycle Phase Matching",
      ncertReference: "NCERT Class 11 Biology, Chapter 10, Section 10.1.1, Page 163"
    },
    {
      id: "pyq-neet-2019-cell-cycle-4",
      year: 2019,
      examName: "NEET UG",
      question: "Cells in G0 phase:",
      options: [
        "exit the cell cycle",
        "enter the cell cycle",
        "suspend the cell cycle",
        "terminate the cell cycle"
      ],
      correctOption: 0,
      explanation: "Cells in G0 phase exit the cell cycle from the G1 phase and enter an inactive metabolic stage where they remain metabolically active but do not proliferate.",
      conceptTested: "G0 Phase characteristics",
      ncertReference: "NCERT Class 11 Biology, Chapter 10, Section 10.1.1, Page 164"
    },
    {
      id: "pyq-neet-2017-cell-cycle-5",
      year: 2017,
      examName: "NEET UG",
      question: "Which of the following options gives the correct sequence of events during mitosis?",
      options: [
        "Condensation -> nuclear membrane breakdown -> arrangement at equator -> centromere division -> segregation -> telophase",
        "Condensation -> crossing over -> nuclear membrane breakdown -> segregation -> telophase",
        "Condensation -> arrangement at equator -> centromere division -> segregation -> telophase",
        "Condensation -> nuclear membrane breakdown -> crossing over -> segregation -> telophase"
      ],
      correctOption: 0,
      explanation: "Mitotic sequence: Chromatin condensation -> nuclear envelope breakdown (Prophase) -> arrangement at equator (Metaphase) -> centromere division & segregation (Anaphase) -> Telophase.",
      conceptTested: "Mitosis Event Sequence",
      ncertReference: "NCERT Class 11 Biology, Chapter 10, Section 10.2, Pages 164-167"
    }
  ],
  neetMarksPotential: {
    totalMarksPotential: 16,
    weightagePercentage: 4.4,
    historicalFrequencyYears: "High Yield",
    expectedQuestionsCount: 4,
    preparationStrategy: "Focus on DNA replication timing in S phase, G0 quiescent features, Metaphase morphology vs Anaphase shape, and Animal vs Plant cytokinesis."
  }
};
