import { DetailedTopicContent } from '../../types/neet';

export const bioSpermatogenesisOogenesisDetails: DetailedTopicContent = {
  topicId: "bio-spermatogenesis-oogenesis",
  topicName: "Spermatogenesis & Oogenesis",
  subject: "Biology",
  class: "Class 12",
  classification: "Reproduction",
  chapter: "Human Reproduction",

  whatIsThisTopic: "Detailed mechanistic, cellular, and hormonal study of male gametogenesis (Spermatogenesis, Spermiogenesis, Spermiation) and female gametogenesis (Oogenesis, Follicular Development, Polar Bodies, Meiotic Arrest Stages).",

  basicIdea: [
    "Spermatogenesis: Process of formation of haploid spermatozoa from diploid spermatogonia in seminiferous tubules of male testes. Initiated ONLY at PUBERTY due to significant rise in GnRH.",
    "Spermatogenesis Sequence: Spermatogonium ($2n, 46$) $\\xrightarrow{\\text{Mitosis}}$ Primary Spermatocyte ($2n, 46$) $\\xrightarrow{\\text{Meiosis I}}$ 2 Secondary Spermatocytes ($n, 23$) $\\xrightarrow{\\text{Meiosis II}}$ 4 Spermatids ($n, 23$) $\\xrightarrow{\\text{Spermiogenesis}}$ 4 Spermatozoa ($n, 23$).",
    "Spermiogenesis vs Spermiation: Spermiogenesis is the morphological transformation of non-motile spherical spermatids into motile spermatozoa. Spermiation is the detachment and release of mature sperm heads embedded in Sertoli cells into the seminiferous tubule lumen.",
    "Structure of Sperm: Microscopic motile cell with Head (Acrosome + condensed haploid nucleus), Neck (proximal & distal centrioles), Middle Piece (100-150 spiral mitochondria / Nebenkern providing ATP), and Tail (axial filament $9+2$ microtubules).",
    "Hormonal Regulation of Spermatogenesis: Hypothalamus (GnRH) → Anterior Pituitary → LH (acts on Leydig cells to release Testosterone) + FSH (acts on Sertoli cells to secrete ABP & spermiogenesis factors). Negative feedback via Testosterone & Inhibin.",
    "Oogenesis: Process of formation of a mature haploid female gamete (Ovum). Initiated during EMBRYONIC / FETAL DEVELOPMENT (~2 million oogonia per fetal ovary). No oogonia formed or added after birth!",
    "Meiotic Arrest Stages in Oogenesis: Primary oocytes enter Prophase I of Meiosis I and arrest in DIPLOTENE STAGE until puberty. Secondary oocytes enter Meiosis II and arrest in METAPHASE II prior to fertilisation.",
    "Follicular Development: Primary Follicle (oocyte + single granulosa layer) → Secondary Follicle → Tertiary Follicle (fluid-filled Antrum, Theca Interna & Externa) → Graafian Follicle (Zona Pellucida + Corona Radiata) → Ovulation → Corpus Luteum → Corpus Albicans.",
    "Polar Bodies: Formed due to unequal cytokinesis during Meiosis I and II in oogenesis. Retains almost the entire cytoplasm and cellular organelle store inside the single functional secondary oocyte/ovum to nourish early zygote."
  ],

  importantTerms: [
    {
      term: "Spermatogonium (plural: Spermatogonia)",
      definition: "Diploid ($2n = 46$) stem cells present on the inner wall of seminiferous tubules that multiply by mitotic divisions. Type A spermatogonia maintain stem cell population; Type B spermatogonia differentiate into primary spermatocytes.",
      "neetNote": "Ploidy is 2n (46 chromosomes)."
    },
    {
      term: "Primary Spermatocyte",
      definition: "Diploid ($2n = 46$) germ cell formed from spermatogonium that undergoes Meiosis I (reductional division) to form two haploid secondary spermatocytes.",
      "neetNote": "First cell in spermatogenesis that undergoes meiotic reduction."
    },
    {
      term: "Secondary Spermatocyte",
      definition: "Haploid ($n = 23$) cell formed after completion of Meiosis I. Contains 23 double-chromatid chromosomes. Undergoes Meiosis II to form two haploid spermatids.",
      "neetNote": "Ploidy is n (23 chromosomes). Formed as result of Meiosis I."
    },
    {
      term: "Spermiogenesis",
      definition: "The differentiation process by which non-motile, spherical, haploid Spermatids are structurally transformed into functional, motile, tadpole-shaped Spermatozoa.",
      "neetNote": "Includes acrosome formation from Golgi, nuclear condensation, mitochondrial spiral creation, and tail growth."
    },
    {
      term: "Spermiation",
      definition: "The physical release of mature spermatozoa from the Sertoli cells into the lumen of the seminiferous tubule.",
      "neetNote": "Do not confuse spermiogenesis (cell transformation) with spermiation (cell detachment/release)."
    },
    {
      term: "Oogonium (plural: Oogonia)",
      definition: "Diploid ($2n = 46$) female germ cells formed in the fetal ovary during embryonic development. All oogonia are formed before birth; none are formed or added after birth.",
      "neetNote": "Crucial contrast with male spermatogonia which form continuously from puberty onwards."
    },
    {
      term: "Primary Oocyte",
      definition: "Diploid ($2n = 46$) female germ cell derived from oogonium that enters Prophase I of meiosis in the fetus and remains suspended/arrested in the DIPLOTENE stage until puberty.",
      "neetNote": "Arrested in Prophase I (Diplotene) for 12 to 50 years!"
    },
    {
      term: "Secondary Oocyte",
      definition: "Large haploid ($n = 23$) cell produced when primary oocyte completes Meiosis I prior to ovulation. Retains nutrient-rich cytoplasm. Arrests in METAPHASE II until fertilisation.",
      "neetNote": "Released from Graafian follicle during ovulation. Contains 23 double-chromatid chromosomes."
    },
    {
      term: "Antrum",
      definition: "A fluid-filled cavity characteristic of the Tertiary Ovarian Follicle filled with follicular fluid (liquor folliculi) rich in estrogens and proteins.",
      "neetNote": "Presence of Antrum is the hallmark diagnostic feature of Tertiary Follicles."
    },
    {
      term: "Polar Bodies",
      definition: "Small haploid cells containing equal chromosomal material but negligible cytoplasm produced during unequal cytokinesis of Meiosis I (1st polar body) and Meiosis II (2nd polar body) in oogenesis.",
      "neetNote": "Ensures that the ovum receives maximum cytoplasm and nutrient store required for cleavage after fertilisation."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Spermatogenesis: Stages, Ploidy Transitions & Cellular Transformation",
      paragraphs: [
        "Spermatogenesis is the biological process of sperm production occurring inside the seminiferous tubules of the testes. It is initiated at Puberty under the influence of increased Gonadotropin-Releasing Hormone (GnRH) from the hypothalamus.",
        "Detailed Step-by-Step Sequence:\n1. Multiplication Phase (Mitosis): Spermatogonia ($2n = 46$) present on the basement membrane undergo mitotic divisions to increase their number. Some spermatogonia act as stem cells (Type A), while others (Type B) grow and differentiate into Primary Spermatocytes ($2n = 46$).\n2. Growth Phase: Primary spermatocytes accumulate nutrients and duplicate DNA ($4n$ DNA content, 46 chromosomes).\n3. Maturation Phase (Meiosis):\n - First Meiotic Division (Reductional): Primary spermatocyte ($2n$) undergoes Meiosis I to form two equal haploid Secondary Spermatocytes ($n = 23$).\n - Second Meiotic Division (Equational): Each secondary spermatocyte undergoes Meiosis II to form four equal haploid Spermatids ($n = 23$).",
        "Ploidy Summary:\n- Spermatogonium: $2n = 46$ chromosomes (46 chromatids)\n- Primary Spermatocyte: $2n = 46$ chromosomes (92 chromatids)\n- Secondary Spermatocyte: $n = 23$ chromosomes (46 chromatids)\n- Spermatid: $n = 23$ chromosomes (23 chromatids)\n- Spermatozoon: $n = 23$ chromosomes (23 chromatids)"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 450" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 6: Spermatogenesis Flowchart & Ploidy Transitions</text>
          
          <!-- Spermatogonium -->
          <circle cx="350" cy="70" r="22" fill="#ef4444" fill-opacity="0.6" stroke="#f87171" stroke-width="2.5"/>
          <text x="350" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2n=46</text>
          <text x="480" y="75" fill="#fca5a5" font-size="13" font-weight="bold">Spermatogonium (2n)</text>
          <text x="120" y="75" fill="#94a3b8" font-size="11">At Puberty (Mitosis)</text>
          
          <line x1="350" y1="92" x2="350" y2="125" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
          
          <!-- Primary Spermatocyte -->
          <circle cx="350" cy="150" r="26" fill="#ea580c" fill-opacity="0.6" stroke="#fb923c" stroke-width="2.5"/>
          <text x="350" y="155" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2n=46</text>
          <text x="480" y="155" fill="#fed7aa" font-size="13" font-weight="bold">Primary Spermatocyte (2n)</text>
          <text x="120" y="155" fill="#94a3b8" font-size="11">Growth Phase</text>
          
          <!-- Meiosis I Arrow -->
          <line x1="350" y1="176" x2="250" y2="215" stroke="#38bdf8" stroke-width="2"/>
          <line x1="350" y1="176" x2="450" y2="215" stroke="#38bdf8" stroke-width="2"/>
          <text x="120" y="210" fill="#facc15" font-size="12" font-weight="bold">1st Meiotic Division (Reductional)</text>
          
          <!-- Secondary Spermatocytes -->
          <circle cx="250" cy="235" r="18" fill="#eab308" fill-opacity="0.6" stroke="#facc15" stroke-width="2"/>
          <text x="250" y="240" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">n=23</text>
          
          <circle cx="450" cy="235" r="18" fill="#eab308" fill-opacity="0.6" stroke="#facc15" stroke-width="2"/>
          <text x="450" y="240" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">n=23</text>
          <text x="510" y="240" fill="#fef08a" font-size="13" font-weight="bold">Secondary Spermatocytes (n)</text>
          
          <!-- Meiosis II Arrows -->
          <line x1="250" y1="253" x2="190" y2="295" stroke="#38bdf8" stroke-width="1.5"/>
          <line x1="250" y1="253" x2="300" y2="295" stroke="#38bdf8" stroke-width="1.5"/>
          <line x1="450" y1="253" x2="400" y2="295" stroke="#38bdf8" stroke-width="1.5"/>
          <line x1="450" y1="253" x2="510" y2="295" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="100" y="285" fill="#a855f7" font-size="12" font-weight="bold">2nd Meiotic Division (Equational)</text>
          
          <!-- Spermatids -->
          <circle cx="190" cy="315" r="14" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="2"/>
          <text x="190" y="318" fill="#ffffff" font-size="9" text-anchor="middle">n=23</text>
          
          <circle cx="300" cy="315" r="14" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="2"/>
          <text x="300" y="318" fill="#ffffff" font-size="9" text-anchor="middle">n=23</text>
          
          <circle cx="400" cy="315" r="14" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="2"/>
          <text x="400" y="318" fill="#ffffff" font-size="9" text-anchor="middle">n=23</text>
          
          <circle cx="510" cy="315" r="14" fill="#a855f7" fill-opacity="0.6" stroke="#c084fc" stroke-width="2"/>
          <text x="510" y="318" fill="#ffffff" font-size="9" text-anchor="middle">n=23</text>
          <text x="550" y="320" fill="#e9d5ff" font-size="13" font-weight="bold">Spermatids (n)</text>
          
          <!-- Spermiogenesis Transformation Arrows -->
          <line x1="190" y1="329" x2="190" y2="370" stroke="#f43f5e" stroke-width="2"/>
          <line x1="300" y1="329" x2="300" y2="370" stroke="#f43f5e" stroke-width="2"/>
          <line x1="400" y1="329" x2="400" y2="370" stroke="#f43f5e" stroke-width="2"/>
          <line x1="510" y1="329" x2="510" y2="370" stroke="#f43f5e" stroke-width="2"/>
          <text x="80" y="355" fill="#f43f5e" font-size="12" font-weight="bold">Spermiogenesis</text>
          
          <!-- Spermatozoa (Tadpole shaped) -->
          <g fill="#f43f5e" stroke="#fb7185">
            <ellipse cx="190" cy="380" rx="6" ry="10"/>
            <path d="M 190 390 L 190 415" stroke="#fb7185" stroke-width="1.5"/>
            
            <ellipse cx="300" cy="380" rx="6" ry="10"/>
            <path d="M 300 390 L 300 415" stroke="#fb7185" stroke-width="1.5"/>
            
            <ellipse cx="400" cy="380" rx="6" ry="10"/>
            <path d="M 400 390 L 400 415" stroke="#fb7185" stroke-width="1.5"/>
            
            <ellipse cx="510" cy="380" rx="6" ry="10"/>
            <path d="M 510 390 L 510 415" stroke="#fb7185" stroke-width="1.5"/>
          </g>
          <text x="550" y="395" fill="#fda4af" font-size="13" font-weight="bold">Spermatozoa (n)</text>
        </svg>`,
        caption: "Sequential cellular flowchart of Spermatogenesis illustrating ploidy reduction during Meiosis I and transformation during Spermiogenesis.",
        guide: "Observe that 1 Primary Spermatocyte ($2n$) yields 2 Secondary Spermatocytes ($n$) and 4 functional haploid Spermatozoa ($n$)."
      },
      importantPoints: [
        "WHAT TO OBSERVE: Ploidy reduction occurs between Primary Spermatocyte ($2n$) and Secondary Spermatocyte ($n$). Spermiogenesis involves NO cell division, only differentiation.",
        "NEET IDENTIFICATION POINTS: 1 Spermatogonium $\\rightarrow$ 1 Primary Spermatocyte $\\rightarrow$ 2 Secondary Spermatocytes $\\rightarrow$ 4 Spermatids $\\rightarrow$ 4 Spermatozoa.",
        "COMMON DIAGRAM TRAP: Confusing Spermiogenesis (Spermatid $\\rightarrow$ Sperm) with Spermiation (Sperm release from Sertoli cell)."
      ]
    },
    {
      heading: "2. Spermiogenesis vs Spermiation & Detailed Sperm Morphology",
      paragraphs: [
        "Spermiogenesis Mechanisms: Spermatids are non-motile, spherical cells. During spermiogenesis:\n1. Acrosome Formation: Golgi apparatus vesicles coalesce at the anterior nuclear pole to form the Acrosome cap containing sperm lysins (hyaluronidase, acrosin).\n2. Nuclear Condensation: Chromatin condenses tightly, losing water and non-histone proteins to reduce head size.\n3. Centrioles & Axoneme: Proximal centriole positions near the basal nuclear recess; distal centriole forms the central axial filament ($9+2$ microtubule arrangement).\n4. Mitochondrial Sheath: Mitochondria migrate to surround the axial filament in the middle piece forming a tight spiral arrangement called Nebenkern.\n5. Cytoplasmic Reduction: Excess cytoplasm is cast off as residual bodies, which are phagocytosed by Sertoli cells.",
        "Spermiation: Once spermiogenesis is complete, the sperm heads remain embedded in Sertoli cells. Spermiation is the enzymatic detachment and release of mature spermatozoa from Sertoli cells into the seminiferous tubule lumen.",
        "Morphology of Mature Spermatozoon:\n- Head: Oval anterior region containing an elongated haploid condensed nucleus ($n = 23$) covered anteriorly by a cap-like structure called Acrosome.\n- Neck: Short region containing a Proximal Centriole (initiates cleavage in zygote) and Distal Centriole (gives rise to axial filament).\n- Middle Piece: Contains 100 to 150 spiral mitochondria surrounding the axial filament. Provides ATP energy for tail whip movements and sperm motility.\n- Tail: Long slender posterior region extending as a principal piece (with fibrous sheath) and end piece (naked axoneme)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 7: Structural Anatomy of a Mature Human Spermatozoon</text>
          
          <!-- Outer Plasma Membrane Line -->
          <path d="M 120 180 C 120 120, 220 120, 250 160 L 260 170 L 400 170 C 410 170, 410 190, 400 190 L 260 190 L 250 200 C 220 240, 120 240, 120 180 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          
          <!-- Plasma Membrane Label -->
          <text x="80" y="90" fill="#7dd3fc" font-size="12" font-weight="bold">Plasma Membrane</text>
          <line x1="130" y1="95" x2="160" y2="130" stroke="#38bdf8" stroke-width="1"/>
          
          <!-- HEAD REGION -->
          <!-- Acrosome -->
          <path d="M 120 180 C 120 130, 170 130, 180 180 C 170 230, 120 230, 120 180 Z" fill="#f43f5e" fill-opacity="0.8" stroke="#fb7185" stroke-width="2"/>
          <text x="140" y="70" fill="#fda4af" font-size="12" font-weight="bold">Acrosome (Golgi derived)</text>
          <line x1="150" y1="78" x2="150" y2="140" stroke="#fb7185" stroke-width="1"/>
          
          <!-- Nucleus -->
          <path d="M 170 150 C 220 150, 240 160, 240 180 C 240 200, 220 210, 170 210 Z" fill="#3b82f6" fill-opacity="0.8" stroke="#60a5fa" stroke-width="2"/>
          <text x="210" y="70" fill="#93c5fd" font-size="12" font-weight="bold">Condensed Nucleus (n=23)</text>
          <line x1="210" y1="78" x2="205" y2="160" stroke="#60a5fa" stroke-width="1"/>
          
          <rect x="120" y="260" width="120" height="25" fill="#0284c7" fill-opacity="0.3" rx="4"/>
          <text x="180" y="277" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">HEAD</text>
          
          <!-- NECK REGION -->
          <rect x="245" y="168" width="15" height="24" fill="#a855f7" fill-opacity="0.8" stroke="#c084fc" stroke-width="1.5"/>
          <circle cx="250" cy="175" r="3" fill="#ffffff"/> <!-- Proximal Centriole -->
          <circle cx="252" cy="185" r="3" fill="#facc15"/> <!-- Distal Centriole -->
          <text x="250" y="310" fill="#e9d5ff" font-size="11" font-weight="bold">Proximal & Distal Centrioles</text>
          <line x1="250" y1="300" x2="250" y2="192" stroke="#c084fc" stroke-width="1"/>
          
          <rect x="245" y="260" width="20" height="25" fill="#7e22ce" fill-opacity="0.3" rx="4"/>
          <text x="255" y="277" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">NECK</text>
          
          <!-- MIDDLE PIECE -->
          <!-- Spiral Mitochondria -->
          <g fill="#eab308" stroke="#facc15" stroke-width="1.5">
            <ellipse cx="270" cy="180" rx="4" ry="8"/>
            <ellipse cx="285" cy="180" rx="4" ry="8"/>
            <ellipse cx="300" cy="180" rx="4" ry="8"/>
            <ellipse cx="315" cy="180" rx="4" ry="8"/>
            <ellipse cx="330" cy="180" rx="4" ry="8"/>
            <ellipse cx="345" cy="180" rx="4" ry="8"/>
            <ellipse cx="360" cy="180" rx="4" ry="8"/>
            <ellipse cx="375" cy="180" rx="4" ry="8"/>
            <ellipse cx="390" cy="180" rx="4" ry="8"/>
          </g>
          <!-- Axial filament core -->
          <line x1="255" y1="180" x2="400" y2="180" stroke="#ffffff" stroke-width="2"/>
          
          <text x="330" y="70" fill="#fef08a" font-size="12" font-weight="bold">Spiral Mitochondria (Nebenkern - ATP)</text>
          <line x1="330" y1="78" x2="330" y2="170" stroke="#facc15" stroke-width="1"/>
          
          <rect x="270" y="260" width="130" height="25" fill="#ca8a04" fill-opacity="0.3" rx="4"/>
          <text x="335" y="277" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">MIDDLE PIECE</text>
          
          <!-- TAIL REGION -->
          <path d="M 400 180 C 480 180, 520 160, 580 180 C 620 200, 650 170, 680 180" fill="none" stroke="#22c55e" stroke-width="3"/>
          <text x="520" y="120" fill="#86efac" font-size="12" font-weight="bold">Tail (Axial Filament 9+2)</text>
          <line x1="520" y1="130" x2="520" y2="175" stroke="#22c55e" stroke-width="1"/>
          
          <rect x="410" y="260" width="260" height="25" fill="#15803d" fill-opacity="0.3" rx="4"/>
          <text x="540" y="277" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">TAIL (Principal Piece & End Piece)</text>
        </svg>`,
        caption: "Fully Labelled Structural Anatomy of Human Spermatozoon showing Head, Acrosome, Neck, Middle Piece, and Tail.",
        guide: "Observe that the Middle Piece is packed with spiral mitochondria providing energy for tail motility."
      },
      importantPoints: [
        "WHAT TO OBSERVE: Acrosome covers the anterior half of the haploid nucleus. Middle piece contains spiral mitochondria.",
        "NEET IDENTIFICATION POINTS: Head = Acrosome (hyaluronidase/lysins) + Nucleus; Middle Piece = Mitochondria (ATP for motility); Neck = Proximal centriole.",
        "COMMON DIAGRAM TRAP: Proximal centriole is located in the neck and enters the ovum to initiate zygotic cleavage; mitochondria do NOT enter the ovum cytoplasm during fertilisation!"
      ]
    },
    {
      heading: "3. Hormonal Regulation of Spermatogenesis",
      paragraphs: [
        "Spermatogenesis is strictly regulated by the Hypothalamic-Pituitary-Gonadal (HPG) Endocrine Axis:",
        "1. Hypothalamus: At puberty, secretes increased levels of Gonadotropin-Releasing Hormone (GnRH). GnRH is a peptide hormone that travels via the hypophyseal portal system to the Anterior Pituitary Gland.",
        "2. Anterior Pituitary: GnRH stimulates the synthesis and secretion of two Gonadotropins:\n - Luteinizing Hormone (LH / ICSH): LH acts directly on the Interstitial Leydig Cells to stimulate the synthesis and secretion of Androgens (primarily Testosterone).\n - Follicle Stimulating Hormone (FSH): FSH acts directly on the Sertoli Cells to stimulate secretion of Androgen Binding Protein (ABP), which concentrates testosterone inside seminiferous tubules, and secretes essential paracrine factors required for Spermiogenesis.",
        "3. Negative Feedback Control:\n - High blood levels of Testosterone exert negative feedback on both Hypothalamus (inhibiting GnRH) and Anterior Pituitary (inhibiting LH).\n - Sertoli cells secrete Inhibin, a protein hormone that selectively inhibits FSH release from the Anterior Pituitary when sperm count is high."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 650 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="325" y="25" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">DIAGRAM 8: Hormonal Regulation Axis of Male Spermatogenesis</text>
          
          <!-- Hypothalamus -->
          <rect x="220" y="50" width="210" height="35" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="6"/>
          <text x="325" y="72" fill="#7dd3fc" font-size="13" font-weight="bold" text-anchor="middle">Hypothalamus</text>
          
          <line x1="325" y1="85" x2="325" y2="120" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="335" y="105" fill="#38bdf8" font-size="11" font-weight="bold">GnRH (Puberty)</text>
          
          <!-- Anterior Pituitary -->
          <rect x="220" y="125" width="210" height="35" fill="#1e293b" stroke="#0284c7" stroke-width="2" rx="6"/>
          <text x="325" y="147" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Anterior Pituitary Gland</text>
          
          <!-- Branching LH and FSH -->
          <line x1="270" y1="160" x2="160" y2="205" stroke="#eab308" stroke-width="2.5"/>
          <text x="180" y="180" fill="#fef08a" font-size="12" font-weight="bold">LH (ICSH)</text>
          
          <line x1="380" y1="160" x2="490" y2="205" stroke="#a855f7" stroke-width="2.5"/>
          <text x="440" y="180" fill="#e9d5ff" font-size="12" font-weight="bold">FSH</text>
          
          <!-- Target Cells -->
          <!-- Leydig Cells -->
          <rect x="70" y="210" width="180" height="40" fill="#854d0e" fill-opacity="0.4" stroke="#eab308" stroke-width="2" rx="6"/>
          <text x="160" y="235" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Leydig Cells (Interstitial)</text>
          
          <!-- Sertoli Cells -->
          <rect x="400" y="210" width="180" height="40" fill="#581c87" fill-opacity="0.4" stroke="#a855f7" stroke-width="2" rx="6"/>
          <text x="490" y="235" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">Sertoli Cells (Nurse)</text>
          
          <!-- Actions -->
          <line x1="160" y1="250" x2="160" y2="295" stroke="#eab308" stroke-width="2"/>
          <text x="170" y="278" fill="#fef08a" font-size="11">Testosterone</text>
          
          <line x1="490" y1="250" x2="490" y2="295" stroke="#a855f7" stroke-width="2"/>
          <text x="500" y="278" fill="#e9d5ff" font-size="11">ABP & Factors</text>
          
          <!-- Central Outcome: Spermatogenesis -->
          <rect x="180" y="300" width="290" height="45" fill="#065f46" stroke="#22c55e" stroke-width="2.5" rx="8"/>
          <text x="325" y="327" fill="#86efac" font-size="14" font-weight="bold" text-anchor="middle">SPERMATOGENESIS & Spermiogenesis</text>
          
          <!-- Negative Feedback Lines -->
          <!-- Testosterone Feedback -->
          <path d="M 70 230 C 20 230, 20 70, 210 70" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="30" y="150" fill="#f87171" font-size="10" font-weight="bold" transform="rotate(-90 30 150)" text-anchor="middle">Testosterone (-ve Feedback)</text>
          
          <!-- Inhibin Feedback -->
          <path d="M 580 230 C 630 230, 630 145, 440 145" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="620" y="180" fill="#f87171" font-size="10" font-weight="bold" transform="rotate(90 620 180)" text-anchor="middle">Inhibin (-ve Feedback on FSH)</text>
        </svg>`,
        caption: "Hypothalamic-Pituitary-Gonadal Endocrine Axis regulating male spermatogenesis and hormone feedback loops.",
        guide: "Remember: LH stimulates Leydig cells to produce Testosterone; FSH stimulates Sertoli cells to produce ABP and Inhibin."
      },
      importantPoints: [
        "LH acts on Leydig cells; FSH acts on Sertoli cells.",
        "Inhibin secreted by Sertoli cells specifically suppresses FSH from anterior pituitary.",
        "Testosterone provides negative feedback to BOTH hypothalamus and anterior pituitary."
      ]
    },
    {
      heading: "4. Oogenesis: Prenatal Initiation, Meiotic Arrest Stages & Polar Body Formation",
      paragraphs: [
        "Oogenesis is the process of formation of a mature haploid female gamete (Ovum). Unlike spermatogenesis, oogenesis is initiated during fetal development before birth.",
        "Complete Timeline & Stages:\n1. Fetal Development (Pre-natal): Oogonia ($2n = 46$) divide mitotically in the fetal ovary. About 2 million oogonia are formed in each ovary. Primary oocytes ($2n = 46$) begin Meiosis I and get arrested at the DIPLOTENE stage of Prophase I. NO oogonia are formed or added after birth!",
        "2. Childhood to Puberty: Millions of primary oocytes degenerate inside primary follicles (a process called Follicular Atresia). At puberty, only 60,000 to 80,000 primary follicles remain in each ovary.",
        "3. Adult Reproductive Life (Post-Puberty):\n - Each month, one primary oocyte within a growing tertiary follicle completes Meiosis I prior to ovulation. This division is UNEQUAL, resulting in a large haploid Secondary Oocyte ($n = 23$) retaining almost the entire cytoplasm, and a tiny First Polar Body ($n = 23$).\n - The secondary oocyte enters Meiosis II and arrests at METAPHASE II!\n - Ovulation occurs: The Graafian follicle ruptures, releasing the secondary oocyte into the pelvic cavity / fallopian tube.",
        "4. Completion of Meiosis II (Upon Fertilisation): Meiosis II is completed ONLY if a sperm penetrates the secondary oocyte in the fallopian tube. Sperm entry triggers completion of Meiosis II (equational), forming a large haploid Ovum (Ootid, $n = 23$) and a tiny Second Polar Body ($n = 23$).",
        "Functional Significance of Polar Bodies: Polar body formation via unequal cytokinesis ensures that one single ovum receives maximum cellular cytoplasm, stored food nutrients, and organelles necessary to nourish the early dividing zygote before implantation."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 9: Oogenesis Flowchart & Meiotic Arrest Timeline</text>
          
          <!-- Oogonium -->
          <circle cx="350" cy="65" r="20" fill="#ec4899" fill-opacity="0.6" stroke="#f472b6" stroke-width="2.5"/>
          <text x="350" y="70" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">2n=46</text>
          <text x="480" y="70" fill="#fbcfe8" font-size="13" font-weight="bold">Oogonium (2n)</text>
          <text x="100" y="70" fill="#f43f5e" font-size="12" font-weight="bold">Fetal Life (Mitosis)</text>
          
          <line x1="350" y1="85" x2="350" y2="115" stroke="#38bdf8" stroke-width="2"/>
          
          <!-- Primary Oocyte -->
          <circle cx="350" cy="140" r="25" fill="#f43f5e" fill-opacity="0.6" stroke="#fb7185" stroke-width="2.5"/>
          <text x="350" y="145" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2n=46</text>
          <text x="480" y="140" fill="#fda4af" font-size="13" font-weight="bold">Primary Oocyte (2n)</text>
          <text x="100" y="140" fill="#facc15" font-size="11" font-weight="bold">Arrested in DIPLOTENE (Prophase I)</text>
          
          <!-- Birth, Childhood, Puberty Divider Line -->
          <line x1="50" y1="180" x2="650" y2="180" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,4"/>
          <text x="350" y="175" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">--- BIRTH / CHILDHOOD / PUBERTY (60,000-80,000 remain) ---</text>
          
          <!-- Meiosis I Completion Arrow -->
          <line x1="350" y1="190" x2="350" y2="230" stroke="#38bdf8" stroke-width="2"/>
          <text x="100" y="215" fill="#86efac" font-size="11" font-weight="bold">Meiosis I completes prior to Ovulation</text>
          
          <!-- Unequal Division: Secondary Oocyte + 1st Polar Body -->
          <circle cx="300" cy="265" r="28" fill="#eab308" fill-opacity="0.6" stroke="#facc15" stroke-width="2.5"/>
          <text x="300" y="270" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">n=23</text>
          <text x="100" y="270" fill="#fef08a" font-size="13" font-weight="bold">Secondary Oocyte (n)</text>
          
          <circle cx="480" cy="265" r="10" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
          <text x="480" y="268" fill="#ffffff" font-size="8" text-anchor="middle">n</text>
          <text x="510" y="270" fill="#cbd5e1" font-size="12" font-weight="bold">First Polar Body (n)</text>
          
          <!-- Ovulation & Arrest in Metaphase II -->
          <rect x="180" y="310" width="240" height="25" fill="#ca8a04" fill-opacity="0.3" stroke="#facc15" rx="4"/>
          <text x="300" y="327" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Arrested in METAPHASE II (Ovulated)</text>
          
          <!-- Fertilisation Trigger Arrow -->
          <line x1="300" y1="335" x2="300" y2="385" stroke="#f43f5e" stroke-width="2.5"/>
          <text x="100" y="360" fill="#f43f5e" font-size="12" font-weight="bold">Fertilisation (Sperm Entry Trigger)</text>
          
          <!-- Ovum + 2nd Polar Body -->
          <circle cx="300" cy="415" r="28" fill="#22c55e" fill-opacity="0.6" stroke="#4ade80" stroke-width="2.5"/>
          <text x="300" y="420" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">n=23</text>
          <text x="100" y="420" fill="#86efac" font-size="13" font-weight="bold">Ootid / Ovum (n)</text>
          
          <circle cx="480" cy="415" r="10" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
          <text x="480" y="418" fill="#ffffff" font-size="8" text-anchor="middle">n</text>
          <text x="510" y="420" fill="#cbd5e1" font-size="12" font-weight="bold">Second Polar Body (n)</text>
        </svg>`,
        caption: "Comprehensive Oogenesis timeline depicting prenatal initiation, Diplotene arrest, Metaphase II arrest, and fertilisation-induced completion.",
        guide: "Note the two critical meiotic arrest points: Diplotene stage of Prophase I (in primary oocytes) and Metaphase II (in secondary oocytes)."
      },
      importantPoints: [
        "WHAT TO OBSERVE: Primary oocytes arrest in DIPLOTENE of Prophase I. Secondary oocytes arrest in METAPHASE II. Meiosis II completes ONLY if fertilisation occurs.",
        "NEET IDENTIFICATION POINTS: 1 Oogonium ($2n$) yields 1 functional Ovum ($n$) and polar bodies (contrast with 1 Spermatogonium yielding 4 spermatozoa).",
        "COMMON DIAGRAM TRAP: Students forget that the ovulated cell released from the Graafian follicle is NOT a mature ovum, but a Secondary Oocyte arrested in Metaphase II!"
      ]
    },
    {
      heading: "5. Follicular Development in Ovary: Primordial to Graafian Follicle & Corpus Luteum",
      paragraphs: [
        "Folliculogenesis is the structural development of ovarian follicles surrounding the oocyte during ovarian cycles:",
        "1. Primary Follicle: A primary oocyte surrounded by a single layer of flattened/cuboidal Granulosa cells. (~60,000 to 80,000 present at puberty in each ovary).",
        "2. Secondary Follicle: Formed when primary follicle gets surrounded by more layers of granulosa cells and a new connective tissue sheath called Theca.",
        "3. Tertiary Follicle: Characterized by the appearance of a fluid-filled cavity called Antrum. The theca layer organizes into an inner vascular endocrine layer called Theca Interna (secretes Estrogen) and an outer fibrous layer called Theca Externa. The primary oocyte inside completes Meiosis I to form the Secondary Oocyte.",
        "4. Mature Graafian Follicle: The tertiary follicle grows into a large Graafian follicle. The secondary oocyte forms a thick, non-cellular glycoprotein coat called Zona Pellucida. Surrounding granulosa cells adhere as the Corona Radiata.",
        "5. Ovulation & Corpus Luteum: Under LH surge, Graafian follicle ruptures to release the Secondary Oocyte. The collapsed follicle transforms into a yellow endocrine structure called Corpus Luteum, which secretes large amounts of Progesterone. If fertilisation does not occur, it degenerates into a white scar called Corpus Albicans."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 10: Sectional Diagram of Ovary Showing Follicular Stages & Ovulation</text>
          
          <!-- Ovary Stroma Boundary -->
          <ellipse cx="350" cy="220" rx="280" ry="150" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
          <text x="350" y="225" fill="#475569" font-size="14" font-weight="bold" text-anchor="middle">Ovarian Stroma (Medulla & Cortex)</text>
          
          <!-- Primary Follicle -->
          <circle cx="120" cy="150" r="16" fill="#ec4899" fill-opacity="0.5" stroke="#f472b6" stroke-width="2"/>
          <circle cx="120" cy="150" r="6" fill="#ffffff"/>
          <text x="120" y="115" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">Primary Follicle</text>
          
          <!-- Secondary Follicle -->
          <circle cx="200" cy="120" r="22" fill="#f43f5e" fill-opacity="0.5" stroke="#fb7185" stroke-width="2"/>
          <circle cx="200" cy="120" r="8" fill="#ffffff"/>
          <text x="200" y="80" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">Secondary Follicle</text>
          
          <!-- Tertiary Follicle with Antrum -->
          <circle cx="320" cy="120" r="32" fill="#a855f7" fill-opacity="0.4" stroke="#c084fc" stroke-width="2"/>
          <ellipse cx="330" cy="115" rx="14" ry="10" fill="#0284c7" opacity="0.6"/> <!-- Antrum -->
          <circle cx="305" cy="130" r="8" fill="#ffffff"/> <!-- Secondary oocyte -->
          <text x="320" y="70" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">Tertiary Follicle (Antrum)</text>
          
          <!-- Mature Graafian Follicle -->
          <circle cx="480" cy="140" r="45" fill="#ca8a04" fill-opacity="0.4" stroke="#facc15" stroke-width="2.5"/>
          <ellipse cx="495" cy="135" rx="22" ry="16" fill="#0284c7" opacity="0.7"/> <!-- Large Antrum -->
          <circle cx="460" cy="155" r="10" fill="#ffffff"/> <!-- Oocyte -->
          <circle cx="460" cy="155" r="14" fill="none" stroke="#f43f5e" stroke-width="2"/> <!-- Zona Pellucida -->
          <text x="480" y="80" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Graafian Follicle</text>
          
          <!-- Ovulation Rupture -->
          <path d="M 580 200 C 550 200, 520 220, 520 250" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4,2"/>
          <!-- Ovulated Secondary Oocyte -->
          <circle cx="610" cy="220" r="12" fill="#ffffff" stroke="#f43f5e" stroke-width="2"/>
          <text x="610" y="250" fill="#86efac" font-size="11" font-weight="bold" text-anchor="middle">Ovulated Secondary Oocyte</text>
          
          <!-- Corpus Luteum -->
          <circle cx="450" cy="300" r="35" fill="#eab308" fill-opacity="0.7" stroke="#facc15" stroke-width="3"/>
          <text x="450" y="305" fill="#000000" font-size="11" font-weight="bold" text-anchor="middle">Corpus Luteum</text>
          <text x="450" y="355" fill="#fef08a" font-size="11" text-anchor="middle">(Progesterone Secretion)</text>
          
          <!-- Corpus Albicans -->
          <circle cx="250" cy="310" r="20" fill="#64748b" fill-opacity="0.6" stroke="#94a3b8" stroke-width="2"/>
          <text x="250" y="315" fill="#ffffff" font-size="10" text-anchor="middle">Corpus Albicans</text>
          <text x="250" y="345" fill="#cbd5e1" font-size="11" text-anchor="middle">(Degenerated Scar)</text>
        </svg>`,
        caption: "Sectional view of human ovary illustrating follicular growth from primary follicle to Graafian follicle, ovulation, and corpus luteum formation.",
        guide: "Diagnostic Feature: Antrum cavity appears in Tertiary Follicle and expands enormously in the Graafian Follicle."
      },
      importantPoints: [
        "WHAT TO OBSERVE: Antrum cavity is filled with follicular fluid; Theca Interna secretes Estrogen; Corpus Luteum secretes Progesterone.",
        "NEET IDENTIFICATION POINTS: Primary Follicle → Secondary Follicle → Tertiary Follicle (Antrum) → Graafian Follicle (Zona Pellucida + Corona Radiata) → Ovulation → Corpus Luteum.",
        "COMMON DIAGRAM TRAP: Corpus Luteum is formed from the REMNANT of Graafian follicle AFTER the secondary oocyte is expelled during ovulation!"
      ]
    },
    {
      heading: "6. Comparative Analysis: Spermatogenesis vs Oogenesis",
      paragraphs: [
        "Gametogenesis in males and females exhibits striking biological differences regarding site, timing, continuity, meiotic efficiency, and output numbers."
      ],
      tables: [
        {
          title: "Rigorous Comparison Between Spermatogenesis and Oogenesis",
          headers: ["Feature / Parameter", "Spermatogenesis (Male)", "Oogenesis (Female)"],
          rows: [
            ["Primary Location", "Seminiferous tubules of Testes", "Ovarian stroma/cortex of Ovaries"],
            ["Initiation Time", "Initiated at PUBERTY due to increased GnRH", "Initiated during EMBRYONIC / FETAL LIFE before birth"],
            ["Continuity", "Continuous throughout adult life until old age", "Discontinuous; ceases at Menopause (~50 years)"],
            ["Meiotic Arrest Points", "NO meiotic arrest; proceeds continuously", "Two arrests: Diplotene (Prophase I) and Metaphase II"],
            ["Yield Per Germ Cell", "1 Primary Spermatocyte yields 4 equal Sperms", "1 Primary Oocyte yields 1 functional Ovum + 2-3 Polar bodies"],
            ["Cytokinesis Nature", "Equal cytokinesis yielding equal daughter cells", "Markedly unequal cytokinesis yielding large oocyte & tiny polar body"],
            ["Motility & Size", "Produces tiny, motile, flagellated gametes", "Produces large, non-motile, nutrient-filled gamete"]
          ]
        }
      ],
      importantPoints: [
        "Spermatogenesis produces 4 functional gametes per primary spermatocyte; Oogenesis produces only 1 functional ovum per primary oocyte.",
        "Male gametes are motile; female gametes are non-motile and nutrient-packed."
      ]
    }
  ],

  formulae: [
    {
      title: "Spermatozoa Yield Calculation Formula",
      formula: "\\text{Number of Spermatozoa} = 4 \\times (\\text{Number of Primary Spermatocytes}) = 2 \\times (\\text{Number of Secondary Spermatocytes})",
      meaning: "Quantitative relation for calculating sperm yield based on meiotic precursor cell counts.",
      whenToUse: "Essential for NEET numerical problem solving."
    },
    {
      title: "Functional Ova Yield Calculation Formula",
      formula: "\\text{Number of Functional Ova} = 1 \\times (\\text{Number of Primary Oocytes}) = 1 \\times (\\text{Number of Secondary Oocytes})",
      meaning: "Each primary oocyte yields exactly ONE functional ovum regardless of polar body count.",
      whenToUse: "Use in NEET quantitative gamete calculation questions."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-4">
      <text x="300" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SUMMARY: Male vs Female Gametogenesis Yield</text>
      
      <rect x="30" y="50" width="250" height="130" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="8"/>
      <text x="155" y="75" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">SPERMATOGENESIS</text>
      <text x="45" y="100" fill="#cbd5e1" font-size="11">• 1 Primary Spermatocyte (2n)</text>
      <text x="45" y="120" fill="#cbd5e1" font-size="11">• 2 Secondary Spermatocytes (n)</text>
      <text x="45" y="140" fill="#cbd5e1" font-size="11">• 4 Spermatids (n)</text>
      <text x="45" y="160" fill="#86efac" font-size="12" font-weight="bold">• Yield = 4 Motile Spermatozoa</text>

      <rect x="320" y="50" width="250" height="130" fill="#1e293b" stroke="#ec4899" stroke-width="2" rx="8"/>
      <text x="445" y="75" fill="#f472b6" font-size="13" font-weight="bold" text-anchor="middle">OOGENESIS</text>
      <text x="335" y="100" fill="#cbd5e1" font-size="11">• 1 Primary Oocyte (2n)</text>
      <text x="335" y="120" fill="#cbd5e1" font-size="11">• 1 Secondary Oocyte + 1st Polar Body</text>
      <text x="335" y="140" fill="#cbd5e1" font-size="11">• 1 Ovum + 2nd Polar Body</text>
      <text x="335" y="160" fill="#fbcfe8" font-size="12" font-weight="bold">• Yield = 1 Non-motile Ovum</text>
    </svg>`,
    caption: "Visual summary map comparing cell divisions and gamete yields in males versus females."
  },

  neetImportantPoints: [
    "🔥 Spermatogenesis begins at puberty; Oogenesis begins during embryonic/fetal life.",
    "🔥 Primary oocytes arrest in Diplotene of Prophase I until puberty. Secondary oocytes arrest in Metaphase II until fertilisation.",
    "🔥 100 Primary Spermatocytes yield 400 Spermatozoa; 100 Primary Oocytes yield 100 Ova.",
    "🔥 Antrum (fluid cavity) appears in Tertiary Follicles; Zona Pellucida appears in Graafian Follicles.",
    "🔥 Acrosome is derived from Golgi apparatus and contains hyaluronidase/acrosin.",
    "🔥 Proximal centriole in sperm neck enters ovum to initiate zygotic cleavage."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing the number of sperms vs ova produced from a given number of primary spermatocytes/oocytes.",
      correctFact: "100 primary spermatocytes produce 400 sperms (4x). 100 primary oocytes produce 100 ova (1x).",
      whyItMattersForNEET: "Frequent numerical calculation question in NEET UG."
    },
    {
      commonConfusion: "Believing ovulation releases a mature ovum.",
      correctFact: "Ovulation releases a Secondary Oocyte arrested in Metaphase II of Meiosis II, NOT a mature ovum.",
      whyItMattersForNEET: "High-frequency conceptual trap in NEET."
    }
  ],

  quickRevision: [
    "Spermatogenesis: Spermatogonia (2n) → 1° Spermatocyte (2n) → 2° Spermatocyte (n) → Spermatid (n) → Spermatozoa (n). Yield = 4 sperms.",
    "Spermiogenesis: Spermatid → Sperm transformation. Spermiation: Sperm release from Sertoli cell.",
    "Sperm Structure: Head (Acrosome + Nucleus), Neck (Centrioles), Middle piece (Spiral mitochondria), Tail.",
    "Oogenesis: Oogonia (2n) → 1° Oocyte (2n, Diplotene arrest) → 2° Oocyte (n, Metaphase II arrest) + 1st Polar Body → Ovum (n) + 2nd Polar Body. Yield = 1 ovum.",
    "Follicles: Primary → Secondary → Tertiary (Antrum) → Graafian (Zona Pellucida) → Ovulation → Corpus Luteum."
  ],

  practiceQuestions: [
    {
      id: "pq-sperm-oog-1",
      question: "How many functional spermatozoa and functional ova will be produced from 50 primary spermatocytes and 50 primary oocytes respectively?",
      options: [
        "200 spermatozoa and 50 ova",
        "100 spermatozoa and 50 ova",
        "200 spermatozoa and 200 ova",
        "50 spermatozoa and 50 ova"
      ],
      correctAnswerIndex: 0,
      explanation: "Each primary spermatocyte undergoes meiosis to yield 4 spermatozoa ($50 \\times 4 = 200$). Each primary oocyte yields 1 functional ovum ($50 \\times 1 = 50$).",
      difficulty: "Medium",
      topicTested: "Gamete yield calculations"
    },
    {
      id: "pq-sperm-oog-2",
      question: "At which stage of meiotic division is the primary oocyte arrested in human females from fetal life until puberty?",
      options: [
        "Leptotene stage of Prophase I",
        "Diplotene stage of Prophase I",
        "Metaphase II",
        "Anaphase I"
      ],
      correctAnswerIndex: 1,
      explanation: "Primary oocytes formed during fetal development enter Prophase I of Meiosis I and remain suspended/arrested at the Diplotene stage until puberty.",
      difficulty: "Easy",
      topicTested: "Meiotic arrest in oogenesis"
    }
  ],

  pyqs: [
    {
      id: "pyq-sperm-1",
      year: 2018,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2018",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2018 Official Paper",
      question: "Match the items given in Column I with those in Column II and select the correct option:\nColumn I: (A) Head of sperm, (B) Middle piece, (C) Acrosome, (D) Tail\nColumn II: (i) Energy source for motility, (ii) Sperm lysins, (iii) Genetic material, (iv) Sperm motility",
      options: [
        "A-(iii), B-(i), C-(ii), D-(iv)",
        "A-(iv), B-(i), C-(ii), D-(iii)",
        "A-(ii), B-(i), C-(iii), D-(iv)",
        "A-(iii), B-(iv), C-(ii), D-(i)"
      ],
      correctAnswerIndex: 0,
      explanation: "Head contains genetic material (n); Middle piece contains spiral mitochondria providing energy; Acrosome contains sperm lysins; Tail enables motility.",
      conceptTested: "Sperm structural functions",
      ncertReference: "Class 12 NCERT Chapter 3, Section 3.3, Page 48"
    },
    {
      id: "pyq-oog-1",
      year: 2020,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2020",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Paper",
      question: "Which of the following statements about oogenesis is INCORRECT?",
      options: [
        "It is initiated during embryonic development.",
        "At puberty, only 60,000 to 80,000 primary follicles remain in each ovary.",
        "Primary oocyte completes Meiosis I resulting in two equal haploid cells.",
        "Secondary oocyte retains bulk of nutrient-rich cytoplasm of primary oocyte."
      ],
      correctAnswerIndex: 2,
      explanation: "Meiosis I in oogenesis is UNEQUAL, resulting in one large haploid secondary oocyte and one tiny first polar body, NOT two equal cells.",
      conceptTested: "Unequal cytokinesis in oogenesis",
      ncertReference: "Class 12 NCERT Chapter 3, Section 3.3, Page 49"
    }
  ]
};
