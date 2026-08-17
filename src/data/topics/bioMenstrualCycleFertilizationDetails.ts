import { DetailedTopicContent } from '../../types/neet';

export const bioMenstrualCycleFertilizationDetails: DetailedTopicContent = {
  topicId: "bio-menstrual-cycle-fertilization",
  topicName: "Menstrual Cycle & Fertilisation",
  subject: "Biology",
  class: "Class 12",
  classification: "Reproduction",
  chapter: "Human Reproduction",

  whatIsThisTopic: "Complete clinical and physiological analysis of the female Menstrual Cycle (Phases, Hormonal fluctuations, Endometrial changes), Sperm Capacitation, Acrosomal and Cortical Reactions, Fertilisation, Sex Determination, Cleavage, Blastocyst Formation, and Implantation.",

  basicIdea: [
    "Menstrual Cycle Definition: The periodic reproductive cycle of changes occurring in primates (monkeys, apes, and human females) averaging 28-29 days.",
    "Four Main Phases of Menstrual Cycle:\n1. Menstrual Phase (Days 1-5): Breakdown and shedding of endometrial lining and uterine blood vessels due to progesterone withdrawal.\n2. Follicular / Proliferative Phase (Days 6-13): FSH stimulates follicular growth; follicles secrete Estrogen, which repairs and proliferates the endometrial lining.\n3. Ovulatory Phase (Day 14): LH Surge triggers rupture of Graafian follicle and release of secondary oocyte.\n4. Luteal / Secretory Phase (Days 15-28): Corpus Luteum secretes Progesterone; endometrium becomes thick, glandular, and vascular in preparation for blastocyst implantation.",
    "Site of Fertilisation: Ampullary region (Ampulla) of the Fallopian tube / Oviduct.",
    "Sperm Capacitation: Maturation of sperm inside the female reproductive tract involving removal of glycoprotein coat and cholesterol from acrosomal membrane to increase motility and membrane permeability.",
    "Acrosomal Reaction & Polyspermy Block: Acrosomal enzymes (hyaluronidase, acrosin) dissolve corona radiata and zona pellucida. Sperm entry triggers Cortical Reaction, releasing cortical granules that alter the zona pellucida structure, making it impermeable to other sperms (ensuring monospermy).",
    "Sex Determination: Father is heterogametic ($XY$) and produces 50% X-bearing and 50% Y-bearing sperms. Mother is homogametic ($XX$). Sex of fetus is determined strictly by the type of fertilizing sperm at the moment of fertilisation.",
    "Cleavage & Blastocyst: Mitotic cleavage divisions convert single-celled Zygote into 2, 4, 8, 16-celled solid ball of cells called Morula. Further division forms Blastocyst consisting of an outer Trophoblast layer and an Inner Cell Mass (embryo precursor).",
    "Implantation: Embedding of the Blastocyst into the endometrial lining of the uterus, completed approximately 7 days after fertilisation."
  ],

  importantTerms: [
    {
      term: "Menarche",
      definition: "The first occurrence of menstruation in human females, marking the onset of puberty and reproductive capability (typically between ages 11 and 15).",
      "neetNote": "Marks the start of female reproductive life."
    },
    {
      term: "Menopause",
      definition: "The permanent cessation of menstrual cycles and ovarian function in human females, occurring around 48 to 50 years of age.",
      "neetNote": "Marks the end of female reproductive life due to exhaustion of ovarian follicles."
    },
    {
      term: "LH Surge",
      definition: "A sharp, rapid peak in Luteinizing Hormone (LH) level secreted by the anterior pituitary around the middle of the cycle (~Day 14), which induces rupture of the mature Graafian follicle and release of secondary oocyte (Ovulation).",
      "neetNote": "Direct cause of ovulation!"
    },
    {
      term: "Capacitation",
      definition: "The physiological maturation process that spermatozoa undergo inside the female reproductive tract (uterus and fallopian tubes) over 5-6 hours, gaining hyperactive motility and ability to undergo acrosomal reaction.",
      "neetNote": "Occurs strictly in the female reproductive tract, NOT in male epididymis."
    },
    {
      term: "Cortical Reaction",
      definition: "Exocytosis of cortical granules from the secondary oocyte cytoplasm into the perivitelline space upon sperm entry, creating a chemical block to polyspermy by hardening the Zona Pellucida.",
      "neetNote": "Guarantees Monospermy (single sperm fertilisation)."
    },
    {
      term: "Ampulla",
      definition: "The wider, middle segment of the fallopian tube where fertilization of secondary oocyte by sperm takes place.",
      "neetNote": "Current NCERT specifies Ampullary region as the exact site of fertilisation."
    },
    {
      term: "Morula",
      definition: "A solid spherical ball of 8 to 16 blastomeres produced by early mitotic cleavage divisions of the zygote, resembling a mulberry.",
      "neetNote": "8-16 cell stage, still surrounded by Zona Pellucida."
    },
    {
      term: "Trophoblast",
      definition: "The outer single-layered cell ring of the Blastocyst that attaches to the uterine endometrium during implantation and later forms fetal placental membranes.",
      "neetNote": "Does NOT form embryonic body; gives rise to placenta."
    },
    {
      term: "Inner Cell Mass (Embryoblast)",
      definition: "The inner cluster of pluripotent cells attached to trophoblast inside the blastocyst cavity, which differentiates to form all tissues and organs of the embryo.",
      "neetNote": "Source of embryonic stem cells!"
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Menstrual Cycle: Phased Hormonal & Endometrial Synchrony",
      paragraphs: [
        "The menstrual cycle consists of four interconnected phases controlled by endocrine signals between the Hypothalamus, Anterior Pituitary, and Ovaries:",
        "1. Menstrual Phase (Days 1 to 5):\n - Trigger: Decline in Progesterone and Estrogen levels resulting from degeneration of Corpus Luteum.\n - Events: Spasm of spiral arteries leads to ischemia and sloughing off of the stratum functionalis of the uterine endometrium. Blood, tissue fluid, and unfertilized oocyte are discharged through the vagina (35-50 ml total loss).\n - Hormonal state: Estrogen and Progesterone at lowest levels.",
        "2. Follicular / Proliferative Phase (Days 6 to 13):\n - Trigger: Rising FSH from anterior pituitary acts on ovarian primary follicles.\n - Events: Primary follicles grow through secondary and tertiary stages into mature Graafian follicles. Developing granulosa cells secrete increasing amounts of Estrogen.\n - Endometrial Response: Estrogen stimulates rapid mitotic proliferation of endometrial stroma, epithelial cells, and spiral blood vessels. Endometrial thickness increases from 1 mm to 3-5 mm.",
        "3. Ovulatory Phase (Day 14):\n - Trigger: High Estrogen levels exert positive feedback, causing a massive spike in LH secretion called LH Surge, along with an FSH peak.\n - Events: LH surge causes Graafian follicle to rupture and release the Secondary Oocyte into the pelvic cavity (Ovulation).",
        "4. Luteal / Secretory Phase (Days 15 to 28):\n - Trigger: LH transforms the ruptured Graafian follicle into the yellow Corpus Luteum.\n - Events: Corpus Luteum secretes large quantities of Progesterone (and some Estrogen). Progesterone makes the endometrium highly vascular, tortuous, and glandular, secreting uterine milk (glycogen-rich fluid) essential for nourishing an implanted blastocyst.\n - Outcome A (If fertilisation occurs): Human Chorionic Gonadotropin (hCG) from trophoblast maintains Corpus Luteum, keeping Progesterone high and preventing menstruation.\n - Outcome B (If no fertilisation): Corpus Luteum degenerates into Corpus Albicans around Day 26. Progesterone drops precipitously, initiating the next Menstrual Phase."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 11: Master 28-Day Menstrual Cycle Synchronization Chart</text>
          
          <!-- Day Scale Top -->
          <line x1="100" y1="50" x2="650" y2="50" stroke="#475569" stroke-width="2"/>
          <text x="100" y="42" fill="#94a3b8" font-size="10" text-anchor="middle">Day 1</text>
          <text x="210" y="42" fill="#94a3b8" font-size="10" text-anchor="middle">Day 5</text>
          <text x="375" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Day 14 (Ovulation)</text>
          <text x="650" y="42" fill="#94a3b8" font-size="10" text-anchor="middle">Day 28</text>
          
          <!-- SECTION 1: Pituitary Hormones (FSH / LH) -->
          <text x="20" y="90" fill="#a855f7" font-size="11" font-weight="bold">Pituitary</text>
          <text x="20" y="105" fill="#a855f7" font-size="11" font-weight="bold">Hormones</text>
          <rect x="90" y="65" width="570" height="70" fill="#1e1b4b" fill-opacity="0.4" stroke="#4338ca" stroke-width="1" rx="4"/>
          
          <!-- LH Curve (Purple Spike at Day 14) -->
          <path d="M 100 120 L 210 115 C 330 110, 360 70, 375 72 C 390 70, 420 115, 650 120" fill="none" stroke="#c084fc" stroke-width="2.5"/>
          <text x="375" y="65" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">LH Surge</text>
          
          <!-- FSH Curve (Blue lower curve with peak) -->
          <path d="M 100 110 L 210 105 C 330 100, 360 85, 375 88 C 390 90, 420 115, 650 118" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="420" y="95" fill="#38bdf8" font-size="10" font-weight="bold">FSH</text>
          
          <!-- SECTION 2: Ovarian Events -->
          <text x="20" y="180" fill="#f43f5e" font-size="11" font-weight="bold">Ovarian</text>
          <text x="20" y="195" fill="#f43f5e" font-size="11" font-weight="bold">Events</text>
          <rect x="90" y="150" width="570" height="70" fill="#881337" fill-opacity="0.2" stroke="#9f1239" stroke-width="1" rx="4"/>
          
          <circle cx="140" cy="185" r="10" fill="#ec4899"/>
          <circle cx="230" cy="185" r="18" fill="#f43f5e"/>
          <circle cx="375" cy="185" r="24" fill="#ca8a04" stroke="#facc15" stroke-width="2"/> <!-- Graafian -->
          <circle cx="480" cy="185" r="22" fill="#eab308"/> <!-- Corpus Luteum -->
          <circle cx="610" cy="185" r="14" fill="#64748b"/> <!-- Corpus Albicans -->
          
          <!-- SECTION 3: Ovarian Hormones (Estrogen / Progesterone) -->
          <text x="20" y="270" fill="#eab308" font-size="11" font-weight="bold">Ovarian</text>
          <text x="20" y="285" fill="#eab308" font-size="11" font-weight="bold">Hormones</text>
          <rect x="90" y="235" width="570" height="80" fill="#713f12" fill-opacity="0.2" stroke="#854d0e" stroke-width="1" rx="4"/>
          
          <!-- Estrogen (Pink Curve: peak at D12-13, smaller peak at D21) -->
          <path d="M 100 290 Q 250 290 340 245 Q 375 285 480 260 Q 580 295 650 300" fill="none" stroke="#f472b6" stroke-width="2.5"/>
          <text x="320" y="240" fill="#f472b6" font-size="11" font-weight="bold">Estrogen Peak</text>
          
          <!-- Progesterone (Yellow Curve: massive peak at D21 luteal phase) -->
          <path d="M 100 305 L 375 305 Q 480 240 580 290 L 650 305" fill="none" stroke="#facc15" stroke-width="3"/>
          <text x="480" y="235" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Progesterone Peak</text>
          
          <!-- SECTION 4: Uterine Endometrium Changes -->
          <text x="20" y="375" fill="#22c55e" font-size="11" font-weight="bold">Uterine</text>
          <text x="20" y="390" fill="#22c55e" font-size="11" font-weight="bold">Endometrium</text>
          <rect x="90" y="330" width="570" height="100" fill="#064e3b" fill-opacity="0.2" stroke="#065f46" stroke-width="1" rx="4"/>
          
          <!-- Endometrial Thickness Wave -->
          <path d="M 100 420 L 120 420 L 150 420 L 210 400 L 375 370 L 580 350 L 630 410 L 650 420" fill="#9f1239" fill-opacity="0.5" stroke="#f43f5e" stroke-width="2"/>
          <text x="140" y="400" fill="#fda4af" font-size="10" font-weight="bold">Menstruation</text>
          <text x="280" y="380" fill="#86efac" font-size="11" font-weight="bold">Proliferative Phase</text>
          <text x="480" y="365" fill="#fef08a" font-size="11" font-weight="bold">Secretory Phase</text>
          
          <!-- Phase Dividers & Labels -->
          <line x1="210" y1="50" x2="210" y2="430" stroke="#f43f5e" stroke-width="1" stroke-dasharray="2,2"/>
          <line x1="375" y1="50" x2="375" y2="430" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="150" y="455" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">1. Menstrual</text>
          <text x="290" y="455" fill="#86efac" font-size="11" font-weight="bold" text-anchor="middle">2. Follicular / Proliferative</text>
          <text x="375" y="470" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">3. Ovulation</text>
          <text x="510" y="455" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">4. Luteal / Secretory</text>
        </svg>`,
        caption: "Master Synchronization Chart of the 28-Day Menstrual Cycle illustrating Pituitary Hormones, Ovarian Events, Ovarian Hormones, and Endometrial Thickness changes.",
        guide: "Critical Points: LH Surge occurs at Day 14 (induces Ovulation). Progesterone peaks during the Luteal Phase (Days 15-28) secreted by Corpus Luteum."
      },
      importantPoints: [
        "WHAT TO OBSERVE: LH peak causes Ovulation at Day 14. Progesterone peak occurs in Secretory phase (Day 21-23). Estrogen has TWO peaks (Day 12 and Day 21).",
        "NEET IDENTIFICATION POINTS: Menstrual phase (Days 1-5, low progesterone); Follicular/Proliferative phase (Days 6-13, high estrogen); Ovulation (Day 14, LH surge); Luteal/Secretory phase (Days 15-28, high progesterone).",
        "COMMON DIAGRAM TRAP: Estrogen peaks BEFORE ovulation (Day 12-13), triggering the LH surge via positive feedback!"
      ]
    },
    {
      heading: "2. Insemination, Sperm Transport & Acrosomal / Cortical Reactions during Fertilisation",
      paragraphs: [
        "Fertilisation is the biochemical fusion of a haploid male gamete (Spermatozoon) with a haploid female gamete (Secondary Oocyte) to form a diploid Zygote.",
        "Step-by-Step Events of Fertilisation:\n1. Insemination & Transport: During coitus, 200 to 300 million sperms are ejaculated into the vagina. Sperms travel through cervix and uterus into the Ampulla of the fallopian tube. Prostaglandins in semen and uterine contractions assist sperm transit.",
        "2. Capacitation: Sperms undergo 5-6 hours of capacitation in the female genital tract. Glycoproteins and sterols are removed from the acrosomal membrane, increasing intracellular $Ca^{2+}$ influx and hyperactivating flagellar motility.",
        "3. Acrosomal Reaction: Upon contacting the Corona Radiata and Zona Pellucida:\n - Sperm binds to ZP3 receptor proteins on the Zona Pellucida.\n - Acrosome releases Sperm Lysins: Hyaluronidase (dissolves hyaluronic acid intercellular cement of corona radiata) and Acrosin / Zona Lysin (digests zona pellucida pathway).",
        "4. Cortical Reaction & Prevention of Polyspermy:\n - The sperm plasma membrane fuses with the secondary oocyte plasma membrane.\n - Fast Block to Polyspermy: Rapid depolarization of oocyte plasma membrane ($Na^+$ influx).\n - Slow Block to Polyspermy (Cortical Reaction): Influx of $Ca^{2+}$ triggers exocytosis of cortical granules beneath the oocyte membrane. Cortical enzymes harden the Zona Pellucida and destroy ZP3 receptors, permanently blocking entry of additional sperms.",
        "5. Completion of Meiosis II: Entry of sperm nucleus and proximal centriole triggers the secondary oocyte to complete Meiosis II, extruding the Second Polar Body and forming the haploid Ovum nucleus (Female pronucleus). Fusion of male and female pronuclei restores diploidy ($2n = 46$)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 12: Ovum Surrounded by Spermatozoa & Acrosomal Penetration</text>
          
          <!-- Central Secondary Oocyte -->
          <circle cx="350" cy="180" r="90" fill="#831843" fill-opacity="0.4" stroke="#f43f5e" stroke-width="2.5"/>
          <circle cx="350" cy="180" r="75" fill="#be123c" fill-opacity="0.4"/>
          <text x="350" y="180" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Secondary Oocyte Cytoplasm</text>
          <text x="350" y="198" fill="#fda4af" font-size="11" text-anchor="middle">(Metaphase II Arrested)</text>
          
          <!-- Zona Pellucida Layer -->
          <circle cx="350" cy="180" r="105" fill="none" stroke="#facc15" stroke-width="4"/>
          <text x="350" y="65" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Zona Pellucida (Glycoprotein Coat)</text>
          
          <!-- Corona Radiata Cells Outer Ring -->
          <g fill="#ec4899" stroke="#f472b6" stroke-width="1.5">
            <circle cx="210" cy="180" r="10"/><circle cx="220" cy="130" r="10"/><circle cx="240" cy="90" r="10"/>
            <circle cx="280" cy="65" r="10"/><circle cx="350" cy="50" r="10"/><circle cx="420" cy="65" r="10"/>
            <circle cx="460" cy="90" r="10"/><circle cx="480" cy="130" r="10"/><circle cx="490" cy="180" r="10"/>
            <circle cx="480" cy="230" r="10"/><circle cx="460" cy="270" r="10"/><circle cx="420" cy="295" r="10"/>
            <circle cx="350" cy="310" r="10"/><circle cx="280" cy="295" r="10"/><circle cx="240" cy="270" r="10"/>
            <circle cx="220" cy="230" r="10"/>
          </g>
          <text x="540" y="90" fill="#fbcfe8" font-size="12" font-weight="bold">Corona Radiata</text>
          
          <!-- Penetrating Sperm (Successful) -->
          <g stroke="#38bdf8" stroke-width="2">
            <path d="M 220 180 C 230 180, 250 180, 260 180" fill="none"/>
            <ellipse cx="260" cy="180" rx="8" ry="5" fill="#0284c7"/>
            <line x1="268" y1="180" x2="276" y2="180" stroke="#f43f5e" stroke-width="3"/> <!-- Touch Zona -->
          </g>
          <text x="120" y="180" fill="#38bdf8" font-size="11" font-weight="bold">Penetrating Sperm</text>
          
          <!-- Blocked Sperms Outside -->
          <g fill="#f43f5e" stroke="#fb7185">
            <ellipse cx="490" cy="120" rx="6" ry="4"/>
            <line x1="496" y1="120" x2="520" y2="110" stroke="#fb7185" stroke-width="1.5"/>
            
            <ellipse cx="440" cy="280" rx="6" ry="4"/>
            <line x1="446" y1="280" x2="470" y2="295" stroke="#fb7185" stroke-width="1.5"/>
          </g>
          <text x="520" y="290" fill="#fda4af" font-size="11">Blocked Sperms (Cortical Block)</text>
        </svg>`,
        caption: "Secondary Oocyte surrounded by Corona Radiata and Zona Pellucida during Acrosomal penetration and Cortical Reaction.",
        guide: "Observe that only ONE sperm penetrates the Zona Pellucida; cortical reaction immediately blocks entry of additional sperms."
      },
      importantPoints: [
        "WHAT TO OBSERVE: Sperm binds to ZP3 receptor on Zona Pellucida; Cortical Reaction blocks additional sperms (Monospermy).",
        "NEET IDENTIFICATION POINTS: Ampulla = site of fertilisation; Capacitation = female tract maturation; Acrosomal enzymes = Hyaluronidase & Acrosin.",
        "COMMON DIAGRAM TRAP: Polyspermy block is mediated by Cortical Granule Exocytosis altering the Zona Pellucida, NOT the Corona Radiata!"
      ]
    },
    {
      heading: "3. Human Sex Determination Mechanics",
      paragraphs: [
        "Sex determination in human beings is governed by the $XX-XY$ chromosomal mechanism:",
        "- Female Genetics: Homogametic genotype ($44 + XX$). All ova produced possess identical chromosomal complement ($22 + X$).",
        "- Male Genetics: Heterogametic genotype ($44 + XY$). Sperms produced are of two distinct genetic types: 50% carry ($22 + X$) and 50% carry ($22 + Y$).",
        "- Fertilisation Outcome:\n1. If an $X$-bearing sperm fertilises the ovum ($22+X + 22+X = 44+XX$), the zygote develops into a Female child.\n2. If a $Y$-bearing sperm fertilises the ovum ($22+Y + 22+X = 44+XY$), the zygote develops into a Male child.",
        "- Conclusion: Since males produce both $X$ and $Y$ bearing sperms in equal 1:1 proportion, the sex of the child is strictly determined by the Father at the moment of fertilisation. Blaming women for giving birth to female children is scientifically false and absurd."
      ],
      importantPoints: [
        "Male is heterogametic ($XY$); Female is homogametic ($XX$).",
        "Father determines the sex of the child with a 50% statistical probability for either sex in every pregnancy."
      ]
    },
    {
      heading: "4. Cleavage Divisions, Morula, Blastocyst Architecture & Implantation",
      paragraphs: [
        "Cleavage: As the diploid zygote moves through the isthmus of the fallopian tube toward the uterus, it undergoes a series of rapid mitotic divisions called Cleavage. The daughter cells formed are called Blastomeres.",
        "Cleavage Sequence:\n1. 2-cell stage (24 hours after fertilisation)\n2. 4-cell stage (40 hours)\n3. 8-cell to 16-cell stage: Solid spherical ball of blastomeres called Morula (resembles a mulberry). The Morula is still enclosed within the Zona Pellucida, keeping overall embryo size constant.",
        "Blastocyst Formation: As the Morula enters the uterine cavity, fluid enters between blastomeres, forming a fluid-filled cavity called Blastocoel. The embryo is now termed a Blastocyst.\n- Blastocyst Structural Organization:\n 1. Trophoblast: Outer single peripheral layer of flattened cells. Responsible for attachment to endometrium and formation of chorion/placenta.\n 2. Inner Cell Mass (ICM): Group of pluripotent cells attached to the inner wall of trophoblast at the embryonic pole. Gives rise to the embryo proper.",
        "Implantation: By Day 6-7 post-fertilisation, the blastocyst 'hatches' out of the Zona Pellucida. Trophoblast cells secrete proteolytic enzymes that digest endometrial tissue. Endometrial cells divide rapidly and cover the blastocyst, embedding it completely within the uterine lining. Implantation is completed by Day 10-12."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto bg-slate-900 rounded-xl p-4 shadow-lg">
          <text x="350" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DIAGRAM 13: Developmental Stages: Zygote to Morula to Blastocyst & Implantation</text>
          
          <!-- Zygote -->
          <circle cx="80" cy="100" r="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="80" cy="100" r="12" fill="#0284c7"/>
          <text x="80" y="150" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">1. Zygote (2n)</text>
          
          <line x1="120" y1="100" x2="160" y2="100" stroke="#38bdf8" stroke-width="2"/>
          
          <!-- 2-Cell Stage -->
          <circle cx="200" cy="100" r="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="190" cy="100" r="10" fill="#38bdf8"/>
          <circle cx="210" cy="100" r="10" fill="#38bdf8"/>
          <text x="200" y="150" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">2. 2-Cell Stage</text>
          
          <line x1="240" y1="100" x2="280" y2="100" stroke="#38bdf8" stroke-width="2"/>
          
          <!-- 8-16 Cell Morula -->
          <circle cx="330" cy="100" r="32" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <g fill="#f59e0b">
            <circle cx="320" cy="90" r="7"/><circle cx="340" cy="90" r="7"/>
            <circle cx="315" cy="105" r="7"/><circle cx="330" cy="105" r="7"/><circle cx="345" cy="105" r="7"/>
            <circle cx="325" cy="118" r="7"/><circle cx="340" cy="118" r="7"/>
          </g>
          <text x="330" y="150" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">3. Morula (8-16 Cells)</text>
          
          <line x1="375" y1="100" x2="420" y2="100" stroke="#38bdf8" stroke-width="2"/>
          
          <!-- Blastocyst Architecture -->
          <circle cx="530" cy="120" r="55" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2"/>
          
          <!-- Trophoblast Outer Ring -->
          <circle cx="530" cy="120" r="55" fill="none" stroke="#22c55e" stroke-width="4" stroke-dasharray="8,3"/>
          <text x="615" y="70" fill="#4ade80" font-size="12" font-weight="bold">Trophoblast</text>
          <line x1="600" y1="75" x2="570" y2="90" stroke="#22c55e" stroke-width="1"/>
          
          <!-- Inner Cell Mass -->
          <circle cx="505" cy="95" r="22" fill="#eab308" stroke="#facc15" stroke-width="2"/>
          <text x="430" y="50" fill="#fef08a" font-size="12" font-weight="bold">Inner Cell Mass (ICM)</text>
          <line x1="450" y1="60" x2="495" y2="85" stroke="#facc15" stroke-width="1"/>
          
          <!-- Blastocoel Cavity -->
          <text x="530" y="140" fill="#7dd3fc" font-size="11" text-anchor="middle">Blastocoel Cavity</text>
          
          <text x="530" y="195" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">4. Blastocyst Stage</text>
          
          <!-- Implantation Diagram Bottom -->
          <rect x="100" y="240" width="500" height="110" fill="#881337" fill-opacity="0.3" stroke="#be123c" stroke-width="2" rx="8"/>
          <text x="350" y="265" fill="#fda4af" font-size="14" font-weight="bold" text-anchor="middle">Endometrium Wall (Uterus)</text>
          
          <!-- Embedded Blastocyst -->
          <circle cx="350" cy="300" r="30" fill="#0284c7" fill-opacity="0.5" stroke="#22c55e" stroke-width="3"/>
          <circle cx="340" cy="285" r="10" fill="#facc15"/>
          <path d="M 310 280 C 330 250, 370 250, 390 280" fill="none" stroke="#be123c" stroke-width="4"/>
          <text x="350" y="340" fill="#86efac" font-size="12" font-weight="bold" text-anchor="middle">IMPLANTATION (Day 7-10 Post-Fertilisation)</text>
        </svg>`,
        caption: "Sequential development from Zygote to Morula, Blastocyst architecture (Trophoblast + ICM), and Implantation into uterine endometrium.",
        guide: "Observe that Trophoblast attaches to endometrium; Inner Cell Mass develops into the actual embryo."
      },
      importantPoints: [
        "WHAT TO OBSERVE: Morula is a solid 8-16 cell ball; Blastocyst contains Trophoblast (outer wall) and Inner Cell Mass (embryo precursor).",
        "NEET IDENTIFICATION POINTS: Cleavage occurs in fallopian tube as embryo moves toward uterus; Implantation occurs at Blastocyst stage.",
        "COMMON DIAGRAM TRAP: Morula size is NOT significantly larger than the zygote because the Zona Pellucida remains intact during early cleavage!"
      ]
    }
  ],

  formulae: [
    {
      title: "Blastomere Cell Count Formula",
      formula: "N = 2^n",
      meaning: "Calculates total number of blastomeres ($N$) formed after $n$ synchronous cleavage divisions.",
      whenToUse: "Use to calculate cell numbers (e.g., 3 divisions = $2^3 = 8$ blastomeres)."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto bg-slate-900 rounded-xl p-4">
      <text x="300" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SUMMARY: Fertilisation & Implantation Sequence</text>
      <rect x="20" y="50" width="120" height="120" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="6"/>
      <text x="80" y="80" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">Coitus &</text>
      <text x="80" y="95" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">Capacitation</text>
      <text x="80" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Ampulla</text>

      <line x1="140" y1="110" x2="160" y2="110" stroke="#38bdf8" stroke-width="2"/>

      <rect x="160" y="50" width="120" height="120" fill="#1e293b" stroke="#f43f5e" stroke-width="2" rx="6"/>
      <text x="220" y="80" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">Acrosomal &</text>
      <text x="220" y="95" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">Cortical Reaction</text>
      <text x="220" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Zygote (2n)</text>

      <line x1="280" y1="110" x2="300" y2="110" stroke="#38bdf8" stroke-width="2"/>

      <rect x="300" y="50" width="120" height="120" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="6"/>
      <text x="360" y="80" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Cleavage &</text>
      <text x="360" y="95" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Morula Stage</text>
      <text x="360" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">8-16 Cells</text>

      <line x1="420" y1="110" x2="440" y2="110" stroke="#38bdf8" stroke-width="2"/>

      <rect x="440" y="50" width="130" height="120" fill="#1e293b" stroke="#22c55e" stroke-width="2" rx="6"/>
      <text x="505" y="80" fill="#86efac" font-size="11" font-weight="bold" text-anchor="middle">Blastocyst &</text>
      <text x="505" y="95" fill="#86efac" font-size="11" font-weight="bold" text-anchor="middle">Implantation</text>
      <text x="505" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">Endometrium</text>
    </svg>`,
    caption: "High-level summary pathway of human fertilisation, cleavage, and blastocyst implantation."
  },

  neetImportantPoints: [
    "🔥 Site of fertilisation is Ampulla of the Fallopian Tube.",
    "🔥 LH Surge at Day 14 triggers Ovulation.",
    "🔥 Progesterone is secreted in high amounts by Corpus Luteum during Secretory/Luteal phase.",
    "🔥 Cortical reaction prevents Polyspermy by modifying Zona Pellucida.",
    "🔥 Implantation occurs at the Blastocyst stage (Trophoblast attaches to Endometrium).",
    "🔥 Father's sperm ($X$ or $Y$) strictly determines the sex of the fetus."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing fertilization occurs in the uterus.",
      correctFact: "Fertilisation occurs in the Ampullary region of the Fallopian tube.",
      whyItMattersForNEET: "Direct location question frequently tested in NEET."
    },
    {
      commonConfusion: "Assuming Trophoblast forms the embryo body.",
      correctFact: "Trophoblast attaches to endometrium and forms placenta; Inner Cell Mass forms the actual embryo body.",
      whyItMattersForNEET: "High-yield developmental distinction in NEET."
    }
  ],

  quickRevision: [
    "Menstrual Cycle: Menstrual phase (D1-5), Follicular phase (D6-13, Estrogen high), Ovulation (D14, LH Surge), Luteal phase (D15-28, Progesterone high).",
    "Capacitation occurs in female tract. Acrosomal reaction digests Zona Pellucida.",
    "Cortical Reaction alters Zona Pellucida structure to block Polyspermy.",
    "Cleavage: Zygote → 2 → 4 → 8-16 cell Morula → Blastocyst (Trophoblast + Inner Cell Mass).",
    "Implantation: Blastocyst embeds in endometrium ~Day 7-10 post-fertilisation."
  ],

  practiceQuestions: [
    {
      id: "pq-menstru-1",
      question: "Which hormone surge is directly responsible for triggering ovulation on approximately Day 14 of the human menstrual cycle?",
      options: [
        "FSH Surge",
        "LH Surge",
        "Progesterone Surge",
        "Oxytocin Surge"
      ],
      correctAnswerIndex: 1,
      explanation: "A rapid peak in Luteinizing Hormone (LH surge) around Day 14 induces the rupture of the mature Graafian follicle and release of secondary oocyte.",
      difficulty: "Easy",
      topicTested: "Hormonal regulation of ovulation"
    },
    {
      id: "pq-menstru-2",
      question: "In human females, implantation of the embryo in the uterine endometrium takes place at which developmental stage?",
      options: [
        "Zygote stage",
        "Morula stage",
        "Blastocyst stage",
        "Gastrula stage"
      ],
      correctAnswerIndex: 2,
      explanation: "Implantation occurs at the Blastocyst stage, where the outer Trophoblast layer attaches to the endometrial lining.",
      difficulty: "Medium",
      topicTested: "Implantation stage"
    }
  ],

  pyqs: [
    {
      id: "pyq-menstru-1",
      year: 2019,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2019",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper",
      question: "Extrusion of second polar body from egg nucleus occurs:",
      options: [
        "Simultaneously with first cleavage",
        "After entry of sperm but before fertilization",
        "After fertilization",
        "Before entry of sperm into ovum"
      ],
      correctAnswerIndex: 1,
      explanation: "Sperm entry into secondary oocyte cytoplasm breaks Metaphase II arrest, triggering completion of Meiosis II and extrusion of the second polar body prior to pronuclear fusion.",
      conceptTested: "Timing of Meiosis II completion",
      ncertReference: "Class 12 NCERT Chapter 3, Section 3.5, Page 51"
    },
    {
      id: "pyq-menstru-2",
      year: 2021,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2021",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Paper",
      question: "Which of the following hormones is secreted in large amounts by the Corpus Luteum to maintain the uterine endometrium?",
      options: [
        "Estrogen",
        "Progesterone",
        "FSH",
        "LH"
      ],
      correctAnswerIndex: 1,
      explanation: "The Corpus Luteum secretes large amounts of Progesterone during the luteal phase, which maintains the thick, vascular endometrium necessary for implantation.",
      conceptTested: "Corpus Luteum hormone secretion",
      ncertReference: "Class 12 NCERT Chapter 3, Section 3.4, Page 50"
    }
  ]
};
