import { DetailedTopicContent } from '../../types/neet';

export const bioSecondaryGrowthDetails: DetailedTopicContent = {
  topicId: "bio-secondary-growth",
  topicName: "Secondary Growth in Dicot Stems & Roots",
  subject: "Biology",
  class: "Class 11",
  classification: "Structural Organisation in Animals & Plants",
  chapter: "Anatomy of Flowering Plants",

  whatIsThisTopic: "Increase in girth (thickness/diameter) of organs in dicots and gymnosperms brought about by two secondary lateral meristems: Vascular Cambium (producing secondary xylem/wood and secondary phloem) and Cork Cambium / Phellogen (producing periderm: cork/phellem and secondary cortex/phelloderm). Includes spring wood vs autumn wood, annual rings, heartwood vs sapwood, bark, lenticels, and root secondary growth.",

  basicIdea: [
    "Vascular Cambium Ring Formation: In dicot stems, intrafascicular cambium (between xylem and phloem) joins with interfascicular cambium (derived from dedifferentiation of medullary ray parenchyma) to form a continuous vascular cambium ring.",
    "Activity of Vascular Cambium: Cuts off secondary xylem towards the inside and secondary phloem towards the outside. Cambium is much more active internally; thus secondary xylem (wood) accumulates rapidly, pushing outer tissues outwards.",
    "Spring Wood vs Autumn Wood: Spring wood (early wood) is formed during active spring season with wide vessels and low density. Autumn wood (late wood) is formed in winter with narrow vessels and high density. One spring ring + one autumn ring = One Annual Ring (used in Dendrochronology to estimate tree age).",
    "Heartwood vs Sapwood: Heartwood (Duramen) is central, dark brown, dead, non-conducting secondary xylem deposited with organic resins/tannins/gums and plugged by tyloses; provides strength and microbial resistance. Sapwood (Alburnum) is peripheral, light-colored living secondary xylem that actively conducts water and minerals.",
    "Periderm & Bark: Cork Cambium (Phellogen) produces Cork (Phellem - suberized, dead) outwards and Secondary Cortex (Phelloderm - parenchymatous) inwards. Phellogen + Phellem + Phelloderm = Periderm. Bark includes all tissues outside vascular cambium (secondary phloem + periderm).",
    "Lenticels: Lens-shaped pores in periderm containing loosely arranged parenchymatous complementary cells for gas exchange.",
    "Secondary Growth in Dicot Roots: Vascular cambium is completely secondary in origin (arises from parenchyma below phloem and pericycle above protoxylem), initially forming a wavy ring that later becomes circular. Cork cambium arises from pericycle."
  ],

  importantTerms: [
    {
      term: "Secondary Growth",
      definition: "Increase in thickness, girth, or diameter of plant organs in dicots and gymnosperms caused by lateral meristems (vascular and cork cambium).",
      neetNote: "Completely absent in monocot roots and monocot stems due to absence of cambium."
    },
    {
      term: "Intrafascicular Cambium",
      definition: "Primary lateral cambium present between primary xylem and primary phloem within a vascular bundle of a dicot stem.",
      neetNote: "Originates as primary meristem."
    },
    {
      term: "Interfascicular Cambium",
      definition: "Secondary lateral cambium formed by dedifferentiation of parenchymatous cells of medullary rays between adjacent vascular bundles.",
      neetNote: "Joins with intrafascicular cambium to complete the continuous vascular cambium ring."
    },
    {
      term: "Dendrochronology",
      definition: "Scientific method of estimating the age of a tree by counting the number of annual growth rings (spring wood + autumn wood) in temperate climate trees.",
      neetNote: "Annual rings are not distinct in tropical climate trees due to uniform climatic conditions year-round."
    },
    {
      term: "Heartwood (Duramen)",
      definition: "Central, non-functional, dark brown, highly durable secondary xylem of old trees impregnated with tannins, resins, gums, and plugged by tyloses.",
      neetNote: "Does NOT conduct water; provides mechanical support and decay resistance. Tested in NEET 2017, 2021."
    },
    {
      term: "Sapwood (Alburnum)",
      definition: "Peripheral, functional, light-colored secondary xylem of old trees involved in active conduction of water and minerals.",
      neetNote: "Prone to insect and fungal attack compared to heartwood."
    },
    {
      term: "Tyloses",
      definition: "Balloon-like parenchymatous ingrowths of xylem parenchyma cells into the lumen of adjacent xylem vessels through pits.",
      neetNote: "Plugs non-functional vessels in heartwood; tested in NEET 2017."
    },
    {
      term: "Phellogen (Cork Cambium)",
      definition: "Secondary lateral meristem that arises in outer cortical region of stems or pericycle of roots to replace damaged epidermal tissue.",
      neetNote: "Cuts off phellem outwards and phelloderm inwards."
    },
    {
      term: "Periderm",
      definition: "Protective secondary tissue complex consisting of Phellogen (cork cambium) + Phellem (cork) + Phelloderm (secondary cortex).",
      neetNote: "Direct matching question in NEET 2016."
    },
    {
      term: "Lenticel",
      definition: "Lens-shaped pore in bark formed when phellogen cuts off loosely arranged parenchymatous complementary cells instead of cork cells, permitting gas exchange.",
      neetNote: "Present in woody trees for respiration."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Formation & Activity of Vascular Cambium Ring in Dicot Stems",
      paragraphs: [
        "In a young dicot stem, the vascular bundles are arranged in a ring. The cambium strip present between primary xylem and primary phloem within each bundle is called INTRAFASCICULAR CAMBIUM (primary in origin).",
        "During secondary growth initiation, parenchymatous cells of medullary rays located between adjacent vascular bundles undergo DEDIFFERENTIATION to become meristematic, forming INTERFASCICULAR CAMBIUM (secondary in origin). The intrafascicular and interfascicular cambiums connect to form a continuous, circular VASCULAR CAMBIUM RING.",
        "ACTIVITY OF CAMBIAL RING: The cambial ring becomes active and begins cutting off new cells both inwardly towards the center and outwardly towards the periphery:",
        "1. Cells cut off towards the inside mature into SECONDARY XYLEM (wood).",
        "2. Cells cut off towards the outside mature into SECONDARY PHLOEM.",
        "3. Cambium is significantly MORE ACTIVE on the inner side than on the outer side. Consequently, secondary xylem accumulates at a much faster rate, pushing the cambium and outer tissues outwards. Primary xylem remains intact at or near the center of the stem.",
        "4. Primary and early secondary phloem get progressively crushed due to the continuous pressure exerted by secondary xylem accumulation. Xylem rays pass radially through secondary xylem and secondary phloem as Secondary Medullary Rays."
      ],
      importantPoints: [
        "Intrafascicular cambium = Primary meristem. Interfascicular cambium = Secondary meristem (dedifferentiated medullary rays).",
        "Vascular cambium cuts off Secondary Xylem inwards and Secondary Phloem outwards.",
        "Cambium is more active internally; secondary xylem accumulates faster than secondary phloem.",
        "Primary phloem gets crushed; primary xylem remains intact in the center."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="270" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Vascular Cambium Ring Formation and Secondary Growth</text>
          
          <!-- Stage 1: Cambium Ring Formation -->
          <g transform="translate(30, 45)">
            <rect width="250" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="125" y="20" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">1. Cambium Ring Formation</text>
            
            <circle cx="125" cy="105" r="65" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
            <!-- Intrafascicular strips + Interfascicular ring -->
            <circle cx="125" cy="105" r="45" fill="none" stroke="#b45309" stroke-width="3" stroke-dasharray="6,3"/>
            <text x="125" y="108" fill="#b45309" font-size="9" text-anchor="middle" font-weight="bold">Intra + Inter Fascicular Ring</text>
            
            <text x="125" y="180" fill="#0284c7" font-size="9" text-anchor="middle">Medullary Rays Dedifferentiate</text>
          </g>

          <!-- Stage 2: Secondary Xylem Accumulation -->
          <g transform="translate(320, 45)">
            <rect width="250" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="125" y="20" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">2. Massive Secondary Xylem</text>
            
            <circle cx="125" cy="105" r="75" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <!-- Massive inner Secondary Xylem wood -->
            <circle cx="125" cy="105" r="55" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
            <!-- Active Cambium Ring -->
            <circle cx="125" cy="105" r="58" fill="none" stroke="#b45309" stroke-width="2"/>
            <!-- Thin outer secondary phloem -->
            <circle cx="125" cy="105" r="68" fill="none" stroke="#16a34a" stroke-width="3" stroke-dasharray="2,2"/>
            <!-- Primary Xylem center -->
            <circle cx="125" cy="105" r="8" fill="#0284c7"/>
            <text x="125" y="108" fill="#ffffff" font-size="7" text-anchor="middle" font-weight="bold">Pri.Xylem</text>
            
            <text x="125" y="180" fill="#15803d" font-size="9" text-anchor="middle" font-weight="bold">2° Xylem (Wood) Inwards • 2° Phloem Outwards</text>
          </g>
        </svg>`,
        caption: "Figure 3.1: Vascular Cambium Ring formation (intrafascicular + interfascicular cambium) and inward accumulation of secondary xylem.",
        guide: "Observe: 1. Dedifferentiation of medullary ray cells creates interfascicular cambium to complete the cambial ring. 2. Cambial ring activity deposits massive secondary xylem internally, creating wood."
      }
    },
    {
      heading: "2. Spring Wood vs Autumn Wood & Heartwood vs Sapwood",
      paragraphs: [
        "A. SPRING WOOD (EARLY WOOD) vs AUTUMN WOOD (LATE WOOD):",
        "Climatic variations influence vascular cambium activity in temperate zone trees:",
        "• Spring Wood (Early Wood): In spring, cambium is extremely active and produces a large number of xylary elements with wider vessels (wide lumen). Spring wood is light in color and has lower density.",
        "• Autumn Wood (Late Wood): In winter/autumn, cambium is less active and produces fewer xylary elements with narrow vessels. Autumn wood is dark in color and has higher density.",
        "• Annual Ring (Growth Ring): The two concentric bands of spring wood and autumn wood formed in a single year constitute an Annual Ring. Counting annual rings in a trunk cross-section provides the exact age of a tree (DENDROCHRONOLOGY). Note: Annual rings are NOT distinct in trees growing in tropical regions (e.g., coastal regions) where climate remains uniform year-round!",
        "B. HEARTWOOD (DURAMEN) vs SAPWOOD (ALBURNUM):",
        "In old trees, secondary xylem differentiates into two functional zones:",
        "• Heartwood (Duramen): Central non-functional secondary xylem. Dark brown in color due to deposition of organic substances like tannins, resins, gums, essential oils, and aromatic compounds. Xylem vessels are plugged by balloon-like parenchymatous ingrowths called TYLOSES. Heartwood is dead, extremely hard, durable, and resistant to microbial and insect attack. It DOES NOT conduct water or minerals; its sole function is mechanical support.",
        "• Sapwood (Alburnum): Peripheral functional secondary xylem. Light in color, contains living parenchyma cells, and actively conducts water and mineral salts from root to leaf."
      ],
      importantPoints: [
        "Spring wood = Light color, low density, wider vessel lumen, active cambium.",
        "Autumn wood = Dark color, high density, narrow vessel lumen, less active cambium.",
        "1 Annual Ring = 1 Spring Ring + 1 Autumn Ring. Used in Dendrochronology.",
        "Heartwood = Central, dark brown, dead, plugged by tyloses, non-conducting, durable.",
        "Sapwood = Peripheral, light color, living parenchyma, actively conducts water.",
        "Heartwood DOES NOT conduct water (tested in NEET 2017, 2021)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="270" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Anatomy of Trunk Section: Heartwood, Sapwood & Annual Rings</text>
          
          <g transform="translate(170, 45)">
            <rect width="260" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <!-- Outer Bark & Periderm -->
            <circle cx="130" cy="100" r="80" fill="#78350f" stroke="#451a03" stroke-width="3"/>
            <!-- Sapwood (Alburnum) light ring -->
            <circle cx="130" cy="100" r="70" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
            <!-- Heartwood (Duramen) dark central wood -->
            <circle cx="130" cy="100" r="45" fill="#92400e" stroke="#451a03" stroke-width="2"/>
            <!-- Concentric Annual Rings -->
            <circle cx="130" cy="100" r="32" fill="none" stroke="#78350f" stroke-width="1.5"/>
            <circle cx="130" cy="100" r="20" fill="none" stroke="#78350f" stroke-width="1.5"/>
            <!-- Pith center -->
            <circle cx="130" cy="100" r="6" fill="#0284c7"/>
            
            <!-- Labels -->
            <text x="130" y="90" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Heartwood (Dark, Non-conducting)</text>
            <text x="130" y="112" fill="#ffffff" font-size="8" text-anchor="middle">Tyloses + Resins</text>
            <text x="130" y="185" fill="#d97706" font-size="10" font-weight="bold" text-anchor="middle">Sapwood (Peripheral, Water Conducting)</text>
          </g>
        </svg>`,
        caption: "Figure 3.2: Cross-section of old dicot tree trunk showing dark central Heartwood (non-functional, durable), light peripheral Sapwood (water conducting), and concentric Annual Rings.",
        guide: "Identify: 1. Dark central Heartwood with tyloses (dead, non-conducting). 2. Light peripheral Sapwood (active water transport). 3. Concentric annual growth rings (spring + autumn wood)."
      },
      tables: [
        {
          headers: ["Feature", "Heartwood (Duramen)", "Sapwood (Alburnum)"],
          rows: [
            ["Location in Trunk", "Central region of old tree trunks", "Peripheral region surrounding heartwood"],
            ["Color & Density", "Dark brown in color; highly dense and hard", "Light in color; lower density"],
            ["Organic Depositions", "Tannins, resins, gums, oils, aromatic substances", "Absent"],
            ["Xylem Vessel Status", "Plugged by balloon-like Parenchymatous TYLOSES", "Open and non-occluded"],
            ["Water Conduction", "DOES NOT conduct water or minerals (Non-functional)", "ACTIVELY conducts water and minerals from root to leaves"],
            ["Durability & Resistance", "Highly durable; resistant to termites, microbes, decay", "Less durable; susceptible to insect and fungal decay"]
          ]
        }
      ]
    },
    {
      heading: "3. Cork Cambium (Phellogen), Periderm, Bark & Root Secondary Growth",
      paragraphs: [
        "A. CORK CAMBIUM (PHELLOGEN) & PERIDERM:",
        "As the stem increases in girth due to secondary xylem accumulation, the outer epidermal and cortical layers get ruptured. To replace them, a new lateral meristem called CORK CAMBIUM (PHELLOGEN) develops in the outer cortex region.",
        "• Phellogen cuts off cells on both sides: (a) Outer cells differentiate into CORK (PHELLEM). Cork cells are dead at maturity, compactly arranged, with suberin-deposited cell walls (impermeable to water and gases). (b) Inner cells differentiate into SECONDARY CORTEX (PHELLODERM), which consists of living parenchymatous cells.",
        "• PERIDERM = Phellogen (Cork Cambium) + Phellem (Cork) + Phelloderm (Secondary Cortex).",
        "B. BARK & LENTICELS:",
        "• Bark: Non-technical term referring to ALL tissues exterior to the vascular cambium (includes Secondary Phloem, Pericycle, Cortex, and Periderm). Early or Soft bark is formed early in the season; Late or Hard bark is formed late in the season.",
        "• Lenticels: At specific regions, phellogen cuts off closely arranged parenchymatous cells called COMPLEMENTARY CELLS instead of suberized cork cells. These rupture the epidermis to form lens-shaped openings called LENTICELS, which enable gaseous exchange between internal stem tissues and the atmosphere.",
        "C. SECONDARY GROWTH IN DICOT ROOTS:",
        "In dicot roots, vascular cambium is COMPLETELY SECONDARY in origin! It originates from: (a) Parenchymatous tissue located just below the phloem bundles, and (b) Pericycle tissue located above the protoxylem points. It initially forms a continuous WAVY cambial ring, which later becomes completely CIRCULAR as secondary xylem accumulates inwardly. Cork cambium (Phellogen) in roots arises from the PERICYCLE."
      ],
      importantPoints: [
        "Periderm = Phellogen (Cork Cambium) + Phellem (Cork) + Phelloderm (Secondary Cortex).",
        "Bark = All tissues outside vascular cambium (Secondary Phloem + Periderm).",
        "Lenticels = Lens-shaped openings with complementary cells for gas exchange.",
        "Dicot Root Cambium = Completely secondary in origin; starts WAVY, becomes CIRCULAR.",
        "Root Cork Cambium originates from PERICYCLE (not cortex)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="260" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Anatomy of Periderm, Lenticel and Secondary Dicot Root</text>
          
          <!-- Periderm & Lenticel -->
          <g transform="translate(30, 45)">
            <rect width="250" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="125" y="20" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">Lenticel & Periderm Structure</text>
            <!-- Ruptured Epidermis -->
            <path d="M 25 45 L 80 45 Q 125 25 170 45 L 225 45" fill="none" stroke="#b45309" stroke-width="3"/>
            <!-- Complementary parenchymatous cells in lens cavity -->
            <circle cx="110" cy="45" r="4" fill="#fde68a"/>
            <circle cx="125" cy="40" r="4" fill="#fde68a"/>
            <circle cx="140" cy="45" r="4" fill="#fde68a"/>
            <circle cx="125" cy="52" r="4" fill="#fde68a"/>
            <text x="125" y="68" fill="#b45309" font-size="8" font-weight="bold" text-anchor="middle">Complementary Cells</text>
            
            <!-- Phellem (Cork) -->
            <rect x="25" y="80" width="200" height="20" fill="#78350f" rx="3"/>
            <text x="125" y="94" fill="#ffffff" font-size="9" text-anchor="middle" font-weight="bold">Phellem (Cork - Suberized)</text>

            <!-- Phellogen (Cork Cambium) -->
            <rect x="25" y="105" width="200" height="10" fill="#0284c7"/>
            <text x="125" y="113" fill="#ffffff" font-size="8" text-anchor="middle" font-weight="bold">Phellogen (Cork Cambium)</text>

            <!-- Phelloderm (Secondary Cortex) -->
            <rect x="25" y="120" width="200" height="20" fill="#dcfce7" rx="3"/>
            <text x="125" y="134" fill="#15803d" font-size="9" text-anchor="middle" font-weight="bold">Phelloderm (2° Cortex)</text>

            <text x="125" y="170" fill="#0284c7" font-size="9" font-weight="bold" text-anchor="middle">Periderm = Phellogen + Phellem + Phelloderm</text>
          </g>

          <!-- Dicot Root Secondary Growth (Wavy to Circular) -->
          <g transform="translate(320, 45)">
            <rect width="250" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="125" y="20" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">Dicot Root Wavy Cambium Ring</text>
            
            <circle cx="125" cy="100" r="65" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
            <!-- Wavy Cambium Ring around 4 xylem arms -->
            <path d="M 125 55 Q 145 75 165 100 Q 145 125 125 145 Q 105 125 85 100 Q 105 75 125 55 Z" fill="none" stroke="#b45309" stroke-width="2.5"/>
            <!-- 4 Xylem arms inside -->
            <path d="M 125 70 L 125 130 M 95 100 L 155 100" stroke="#0284c7" stroke-width="4"/>

            <text x="125" y="165" fill="#15803d" font-size="9" font-weight="bold" text-anchor="middle">Wavy Ring → Circular Ring</text>
            <text x="125" y="178" fill="#64748b" font-size="8" text-anchor="middle">Completely Secondary in Origin</text>
          </g>
        </svg>`,
        caption: "Figure 3.3: Periderm layers (Phellem, Phellogen, Phelloderm) with Lenticel, and secondary wavy vascular cambium ring in Dicot Root.",
        guide: "Identify: 1. Periderm consists of Phellem (cork), Phellogen (cork cambium), and Phelloderm (secondary cortex). 2. Lenticels feature non-suberized complementary cells. 3. Dicot root cambium ring is initially wavy and turns circular."
      }
    }
  ],

  formulae: [],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl bg-white p-2">
      <rect width="600" height="200" fill="#f8fafc" rx="10"/>
      <text x="300" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Master Summary: Secondary Meristems & Products</text>
      <!-- Meristem 1 -->
      <rect x="30" y="50" width="240" height="40" fill="#0284c7" rx="6"/>
      <text x="150" y="74" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">VASCULAR CAMBIUM RING</text>
      <text x="150" y="110" fill="#0284c7" font-size="10" text-anchor="middle" font-weight="bold">Inwards: 2° Xylem (Wood) | Outwards: 2° Phloem</text>

      <!-- Meristem 2 -->
      <rect x="330" y="50" width="240" height="40" fill="#15803d" rx="6"/>
      <text x="450" y="74" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">CORK CAMBIUM (PHELLOGEN)</text>
      <text x="450" y="110" fill="#15803d" font-size="10" text-anchor="middle" font-weight="bold">Outwards: Phellem (Cork) | Inwards: Phelloderm</text>

      <!-- Combined Periderm/Bark -->
      <rect x="180" y="135" width="240" height="35" fill="#b45309" rx="6"/>
      <text x="300" y="157" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">PERIDERM + 2° PHLOEM = BARK</text>
    </svg>`,
    caption: "Master summary showing Vascular Cambium and Cork Cambium activities resulting in secondary plant body, periderm, and bark."
  },

  neetImportantPoints: [
    "Heartwood DOES NOT conduct water or minerals; its vessels are plugged by TYLOSES (NEET 2017, 2021).",
    "Sapwood is the peripheral, light-colored secondary xylem that actively conducts water.",
    "Interfascicular cambium is a secondary meristem formed by dedifferentiation of medullary ray parenchyma.",
    "Periderm = Phellogen (Cork Cambium) + Phellem (Cork) + Phelloderm (Secondary Cortex) (NEET 2016).",
    "Bark includes all tissues exterior to vascular cambium (secondary phloem + periderm).",
    "Tree age is estimated by counting Annual Rings (1 Spring Wood ring + 1 Autumn Wood ring) (NEET 2013).",
    "In dicot roots, vascular cambium is COMPLETELY SECONDARY in origin and initially forms a WAVY ring."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing Heartwood conducts water and minerals.",
      correctFact: "Heartwood is non-functional for water transport because its vessels are blocked by tyloses and organic depositions. Water transport is handled EXCLUSIVELY by Sapwood.",
      whyItMattersForNEET: "Consistently tested in NEET 2017 and NEET 2021 as an incorrect statement trap."
    },
    {
      commonConfusion: "Confusing Intrafascicular cambium with Interfascicular cambium origin.",
      correctFact: "Intrafascicular cambium is PRIMARY in origin (present inside vascular bundles). Interfascicular cambium is SECONDARY in origin (derived from medullary ray dedifferentiation).",
      whyItMattersForNEET: "Frequently tested in NEET questions regarding primary vs secondary meristems."
    },
    {
      commonConfusion: "Assuming annual rings are distinct in tropical/coastal trees.",
      correctFact: "Annual rings are distinct ONLY in temperate climate trees where spring and winter seasons differ sharply. Tropical trees experience uniform climate year-round.",
      whyItMattersForNEET: "High-yield concept tested regarding climatic variation in cambial activity."
    }
  ],

  quickRevision: [
    "Secondary Growth = Vascular Cambium + Cork Cambium.",
    "Vascular Cambium Ring = Intrafascicular + Interfascicular cambium.",
    "Spring Wood = Active cambium, wide lumen, light color, low density.",
    "Autumn Wood = Less active cambium, narrow lumen, dark color, high density.",
    "1 Annual Ring = 1 Spring ring + 1 Autumn ring (Dendrochronology).",
    "Heartwood = Dark, central, dead, plugged by tyloses, NO water conduction, durable.",
    "Sapwood = Light, peripheral, living parenchyma, active water conduction.",
    "Periderm = Phellogen + Phellem + Phelloderm.",
    "Bark = Everything outside vascular cambium (2° phloem + periderm).",
    "Dicot Root Cambium = Completely secondary origin, wavy → circular."
  ],

  practiceQuestions: [
    {
      id: "prac-sec-01",
      questionText: "Which of the following statements regarding heartwood is INCORRECT?",
      options: [
        "It comprises the central region of secondary xylem in old tree trunks.",
        "It actively conducts water and mineral nutrients from roots to leaves.",
        "It contains organic depositions of resins, gums, and tannins.",
        "Its xylem vessels are frequently plugged by tyloses."
      ],
      correctAnswer: 1,
      explanation: "Heartwood is non-functional in water conduction because its vessels are occluded by tyloses and resinous depositions. Water conduction is carried out solely by peripheral sapwood.",
      difficulty: "Easy",
      topicId: "bio-secondary-growth",
      conceptTested: "Heartwood Physiology"
    },
    {
      id: "prac-sec-02",
      questionText: "In a mature dicot stem undergoing secondary growth, interfascicular cambium is formed by the dedifferentiation of cells belonging to:",
      options: [
        "Endodermis",
        "Pericycle",
        "Medullary rays",
        "Hypodermis"
      ],
      correctAnswer: 2,
      explanation: "Interfascicular cambium develops when parenchymatous cells of medullary rays situated between adjacent vascular bundles undergo dedifferentiation to regain meristematic capability.",
      difficulty: "Medium",
      topicId: "bio-secondary-growth",
      conceptTested: "Interfascicular Cambium Origin"
    }
  ],

  pyqs: [
    {
      id: "pyq-sec-01",
      exam: "NEET 2021",
      year: 2021,
      questionText: "Which of the following statements is INCORRECT regarding secondary growth / heartwood?",
      options: [
        "Heartwood does not conduct water but gives mechanical support.",
        "Sapwood is involved in conduction of water and minerals from root to leaf.",
        "Sapwood is dark in color and highly durable.",
        "Heartwood is dark in color due to deposition of organic compounds."
      ],
      correctAnswer: 2,
      explanation: "Statement C is incorrect because Sapwood is LIGHT in color and LESS durable. Heartwood is the region that is dark in color and highly durable due to organic depositions.",
      topicId: "bio-secondary-growth",
      difficulty: "Medium",
      conceptTested: "Heartwood vs Sapwood Characteristics",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.4.1.2",
      verified: true
    },
    {
      id: "pyq-sec-02",
      exam: "NEET 2019",
      year: 2019,
      questionText: "The vascular cambium normally gives rise to:",
      options: [
        "Primary phloem",
        "Secondary xylem",
        "Periderm",
        "Phelloderm"
      ],
      correctAnswer: 1,
      explanation: "The vascular cambium ring cuts off secondary xylem towards its inner side and secondary phloem towards its outer side.",
      topicId: "bio-secondary-growth",
      difficulty: "Easy",
      conceptTested: "Vascular Cambium Activity",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.4.1.1",
      verified: true
    },
    {
      id: "pyq-sec-03",
      exam: "NEET 2017",
      year: 2017,
      questionText: "The balloon-shaped structures called tyloses:",
      options: [
        "Are extensions of xylem parenchyma cells into the vessel lumen",
        "Are links between phloem and xylem parenchyma",
        "Are fungal hyphae in xylem vessels",
        "Are specialized secretory cells in cortex"
      ],
      correctAnswer: 0,
      explanation: "Tyloses are balloon-like outgrowths/protrusions of adjacent living xylem parenchyma cells into the lumen of non-functional xylem vessels through pits, effectively plugging them in heartwood.",
      topicId: "bio-secondary-growth",
      difficulty: "Medium",
      conceptTested: "Tyloses Structure & Origin",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.4.1.2",
      verified: true
    },
    {
      id: "pyq-sec-04",
      exam: "NEET 2016",
      year: 2016,
      questionText: "The cork cambium, cork and secondary cortex are collectively called:",
      options: [
        "Phelloderm",
        "Phellogen",
        "Periderm",
        "Phellem"
      ],
      correctAnswer: 2,
      explanation: "Phellogen (Cork Cambium) + Phellem (Cork) + Phelloderm (Secondary Cortex) are collectively designated as the Periderm.",
      topicId: "bio-secondary-growth",
      difficulty: "Easy",
      conceptTested: "Periderm Definition",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.4.2",
      verified: true
    },
    {
      id: "pyq-sec-05",
      exam: "AIPMT 2013",
      year: 2013,
      questionText: "Age of a tree can be estimated by:",
      options: [
        "Number of annual rings",
        "Diameter of heartwood",
        "Height of the tree",
        "Biomass of the tree"
      ],
      correctAnswer: 0,
      explanation: "Counting the number of annual growth rings (each consisting of one spring wood band and one autumn wood band) in a cross-section of a tree trunk gives the age of the tree (Dendrochronology).",
      topicId: "bio-secondary-growth",
      difficulty: "Easy",
      conceptTested: "Dendrochronology & Annual Rings",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.4.1.2",
      verified: true
    }
  ]
};
