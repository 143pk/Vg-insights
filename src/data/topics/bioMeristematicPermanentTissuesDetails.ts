import { DetailedTopicContent } from '../../types/neet';

export const bioMeristematicPermanentTissuesDetails: DetailedTopicContent = {
  topicId: "bio-meristematic-permanent-tissues",
  topicName: "Plant Tissues & Tissue Systems",
  subject: "Biology",
  class: "Class 11",
  classification: "Structural Organisation in Animals & Plants",
  chapter: "Anatomy of Flowering Plants",

  whatIsThisTopic: "Plant tissues are groups of cells having a common origin and performing a specific function. They are broadly classified into Meristematic Tissues (actively dividing, responsible for primary and secondary growth) and Permanent Tissues (mature cells that have lost the capacity to divide, specialized as Simple or Complex permanent tissues), organized into Epidermal, Ground, and Vascular tissue systems.",

  basicIdea: [
    "Meristematic Tissues: Actively dividing cells categorized by position into Apical (root & shoot apex, length growth), Intercalary (internodes/leaf bases, grass regeneration), and Lateral meristems (vascular & cork cambium, girth growth).",
    "Primary vs Secondary Meristems: Primary meristems (Apical & Intercalary) appear early in life and form primary plant body. Secondary meristems (Lateral) appear later from permanent tissues and cause secondary growth.",
    "Simple Permanent Tissues: Parenchyma (living, thin cellulose walls, storage/photosynthesis/secretion), Collenchyma (living, pectin corner thickenings, mechanical support to young stems), Sclerenchyma (dead, lignified thick walls, fibres & sclereids for strength).",
    "Complex Permanent Tissues: Xylem (water/mineral transport: tracheids, vessels, xylem fibres, xylem parenchyma) and Phloem (food translocation: sieve tube elements, companion cells, phloem parenchyma, phloem fibres).",
    "Gymnosperm Features: Gymnosperms lack xylem vessels (have tracheids only) and lack sieve tubes and companion cells in phloem (have sieve cells and albuminous cells).",
    "Tissue Systems: Epidermal System (cuticle, stomata, guard cells, trichomes, root hairs), Ground System (cortex, endodermis, pericycle, pith, mesophyll), Vascular System (xylem & phloem organized radially or conjointly)."
  ],

  importantTerms: [
    {
      term: "Meristematic Tissue",
      definition: "A group of immature cells capable of continuous active cell division and self-perpetuation.",
      neetNote: "Found at root and shoot apices, intercalary nodes, and lateral vascular regions."
    },
    {
      term: "Apical Meristem",
      definition: "Primary meristem located at the tips of roots and shoots producing primary tissues and increasing plant length.",
      neetNote: "Gives rise to protoderm, procambium, and ground meristem."
    },
    {
      term: "Intercalary Meristem",
      definition: "Primary meristem situated between mature permanent tissues, responsible for elongation of internodes and regeneration of grazed grasses.",
      neetNote: "Directly tested in NEET 2019 regarding grass regeneration following herbivory."
    },
    {
      term: "Lateral Meristem",
      definition: "Secondary meristem occurring in mature regions of roots and shoots (fascicular cambium, interfascicular cambium, cork cambium) responsible for increasing girth.",
      neetNote: "Causes secondary growth in dicots and gymnosperms; absent in monocots."
    },
    {
      term: "Parenchyma",
      definition: "Simple permanent living tissue with thin cellulosic cell walls and intercellular spaces, performing storage, photosynthesis (chlorenchyma), and secretion.",
      neetNote: "Forms the major component of plant organs (cortex, pith, mesophyll)."
    },
    {
      term: "Collenchyma",
      definition: "Simple permanent living tissue with localized cell corner thickenings composed of cellulose, hemicellulose, and pectin, providing flexible mechanical support.",
      neetNote: "Found in hypodermis of dicot stems and petioles; ABSENT in monocots."
    },
    {
      term: "Sclerenchyma",
      definition: "Simple permanent dead tissue with highly thickened, lignified cell walls and narrow lumen, providing rigid mechanical support. Occurs as Fibres or Sclereids.",
      neetNote: "Sclereids give gritty texture to guava/pear/sapota pulp and hardness to nut shells."
    },
    {
      term: "Xylem Vessels",
      definition: "Long cylindrical syncytial tubes formed of vessel members with lignified walls and perforated end plates, characteristic of angiosperms.",
      neetNote: "ABSENT in gymnosperms and pteridophytes (except Gnetales)."
    },
    {
      term: "Companion Cells",
      definition: "Specialized parenchymatous cells connected to sieve tube elements via pit fields, maintaining pressure gradient in sieve tubes.",
      neetNote: "ABSENT in gymnosperms; replaced functionally by albuminous cells."
    },
    {
      term: "Stomatal Apparatus",
      definition: "Functional microscopic unit consisting of the stomatal aperture, two guard cells, and surrounding specialized subsidiary cells.",
      neetNote: "Guard cells are kidney/bean-shaped in dicots and dumbbell-shaped in grasses (monocots)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Meristematic Tissues — Classification & Primary vs Secondary Meristems",
      paragraphs: [
        "Growth in plants is largely restricted to specialized regions of active cell division called meristems (Greek 'meristos' = divided). Meristematic cells are characterized by thin cellulosic cell walls, dense cytoplasm, prominent nuclei, small/absent vacuoles, and high metabolic activity without intercellular spaces.",
        "Meristems are classified according to two main criteria: (A) Position in plant body: Apical, Intercalary, and Lateral meristems. (B) Origin & Order of Development: Primary meristems and Secondary meristems.",
        "Apical Meristems occur at the tips of roots (Root Apical Meristem - RAM, protected by root cap) and shoots (Shoot Apical Meristem - SAM). During stem elongation, cells left behind from SAM form axillary buds in leaf axils, capable of forming branches or flowers.",
        "Intercalary Meristems occur between mature tissues at internodes and leaf bases in monocots (grasses). Both apical and intercalary meristems are PRIMARY meristems because they appear early in plant life and contribute to the primary plant body.",
        "Lateral Meristems occur in mature regions of stems and roots on the sides. Examples include Fascicular Vascular Cambium, Interfascicular Cambium, and Cork Cambium (Phellogen). These are SECONDARY meristems that arise later from permanent tissues via dedifferentiation and are responsible for secondary growth (increasing thickness)."
      ],
      importantPoints: [
        "Root Apical Meristem is sub-terminal because it is covered by the root cap.",
        "Regeneration of damaged grass blades after grazing by herbivores is due to Intercalary Meristems.",
        "Apical and Intercalary meristems = Primary meristems (increase length).",
        "Lateral meristems = Secondary meristems (increase girth/thickness)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="320" fill="#f8fafc" rx="12"/>
          <text x="300" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Classification & Positions of Plant Meristems</text>
          
          <!-- Apical Meristem Diagram -->
          <g transform="translate(40, 50)">
            <rect width="150" height="230" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="75" y="24" fill="#0369a1" font-size="13" font-weight="bold" text-anchor="middle">Shoot Apex (SAM)</text>
            <!-- Dome & Leaf primordia -->
            <path d="M 50 160 L 50 100 Q 50 60 75 50 Q 100 60 100 100 L 100 160 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <path d="M 35 120 Q 20 80 50 70 Q 50 90 50 120 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
            <path d="M 115 120 Q 130 80 100 70 Q 100 90 100 120 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
            <circle cx="75" cy="55" r="12" fill="#0284c7" opacity="0.8"/>
            <text x="75" y="59" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Apical</text>
            
            <line x1="75" y1="55" x2="135" y2="55" stroke="#0284c7" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="138" y="58" fill="#0369a1" font-size="10" text-anchor="start" font-weight="bold">Apical Meristem</text>
            <text x="75" y="200" fill="#475569" font-size="10" text-anchor="middle">Primary Growth (Length)</text>
          </g>

          <!-- Intercalary Meristem Diagram -->
          <g transform="translate(225, 50)">
            <rect width="150" height="230" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="75" y="24" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">Grass Stem (Monocot)</text>
            <!-- Internode stem -->
            <rect x="50" y="50" width="50" height="130" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
            <!-- Node bands -->
            <rect x="45" y="80" width="60" height="14" fill="#22c55e" rx="3"/>
            <rect x="45" y="140" width="60" height="14" fill="#22c55e" rx="3"/>
            <text x="75" y="91" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Intercalary</text>
            <text x="75" y="151" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Intercalary</text>
            <text x="75" y="200" fill="#475569" font-size="10" text-anchor="middle">Internode Elongation</text>
          </g>

          <!-- Lateral Meristem Diagram -->
          <g transform="translate(410, 50)">
            <rect width="150" height="230" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="75" y="24" fill="#b45309" font-size="13" font-weight="bold" text-anchor="middle">Dicot Stem (Lateral)</text>
            <!-- Cross section cylinder -->
            <ellipse cx="75" cy="115" rx="45" ry="55" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
            <ellipse cx="75" cy="115" rx="30" ry="38" fill="none" stroke="#b45309" stroke-width="3" stroke-dasharray="4,2"/>
            <text x="75" y="119" fill="#b45309" font-size="9" font-weight="bold" text-anchor="middle">Cambium Ring</text>
            <text x="75" y="200" fill="#475569" font-size="10" text-anchor="middle">Secondary Growth (Girth)</text>
          </g>
        </svg>`,
        caption: "Figure 1.1: Anatomical locations and functions of Apical, Intercalary, and Lateral Meristems.",
        guide: "Identify: 1. Apical meristem at shoot dome (primary growth in height). 2. Intercalary meristem at internode bases (monocot stem elongation and herbivory recovery). 3. Lateral meristem ring (vascular cambium causing secondary growth in width)."
      },
      tables: [
        {
          headers: ["Feature", "Primary Meristems (Apical & Intercalary)", "Secondary Meristems (Lateral Meristems)"],
          rows: [
            ["Origin", "Evolve directly from embryonic meristems early in life", "Arise from mature permanent tissues via dedifferentiation"],
            ["Location", "Apices of roots/shoots and inter-nodal leaf bases", "Lateral sides of roots and stems in dicots & gymnosperms"],
            ["Function", "Increase length of plant body (Primary growth)", "Increase girth/diameter/thickness (Secondary growth)"],
            ["Examples", "Root apical meristem, Shoot apical meristem, Intercalary meristem", "Fascicular vascular cambium, Interfascicular cambium, Cork cambium (Phellogen)"]
          ]
        }
      ]
    },
    {
      heading: "2. Simple Permanent Tissues — Parenchyma, Collenchyma & Sclerenchyma",
      paragraphs: [
        "Permanent tissues are composed of mature cells that have lost the power of cell division and are specialized for specific functions. When permanent tissues consist of only ONE type of cell performing a common function, they are called Simple Permanent Tissues.",
        "1. PARENCHYMA: Forms the major component of plant organs. Cells are living, isodiametric (spherical, oval, round, polygonal), with thin cellulosic cell walls and small intercellular spaces. Functions include storage of food, photosynthesis (Chlorenchyma containing chloroplasts in mesophyll), secretion, and buoyancy in aquatic plants (Aerenchyma with air cavities).",
        "2. COLLENCHYMA: Occurs in layers below the epidermis (hypodermis) in young dicot stems and petioles. Cells are living with thick cell corners due to heavy deposition of Cellulose, Hemicellulose, and PECTIN. Cells are oval, spherical, or polygonal and often contain chloroplasts. Intercellular spaces are ABSENT. Provides flexible mechanical strength to young growing parts (allows bending without breaking). IMPORTANT: Collenchyma is completely ABSENT in monocots!",
        "3. SCLERENCHYMA: Consists of long, narrow cells with extremely thick, highly LIGNIFIED cell walls having pits. Cells are DEAD at maturity without protoplasm. Provides rigid mechanical support to mature plant parts. Sclerenchyma is divided into two structural forms: (a) Sclerenchyma Fibres: Needle-like, pointed, elongated cells occurring in bundles (e.g., hemp, jute). (b) Sclereids: Spherical, oval, or cylindrical highly thickened dead cells with very narrow lumen. Found in pulp of fruits like guava, pear, sapota; seed coat of legumes; nut shells; and tea leaves."
      ],
      importantPoints: [
        "Parenchyma = Living, thin cellulose wall, intercellular spaces present.",
        "Collenchyma = Living, PECTIN corner thickenings, NO intercellular spaces, mechanical support to young dicot stems.",
        "Collenchyma is ABSENT in monocots.",
        "Sclerenchyma = DEAD at maturity, thick LIGNIFIED walls, narrow lumen, mechanical support to mature plant body.",
        "Sclereids provide gritty texture to guava/pear/sapota fruit pulp."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="260" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Comparative Structure of Simple Permanent Tissues</text>
          
          <!-- Parenchyma -->
          <g transform="translate(30, 45)">
            <rect width="160" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="80" y="22" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">Parenchyma</text>
            <!-- Isodiametric thin cells -->
            <circle cx="55" cy="70" r="24" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="100" cy="70" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="78" cy="110" r="25" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="45" cy="130" r="20" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="110" cy="125" r="21" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <!-- Nuclei -->
            <circle cx="55" cy="70" r="4" fill="#15803d"/>
            <circle cx="100" cy="70" r="4" fill="#15803d"/>
            <circle cx="78" cy="110" r="4" fill="#15803d"/>
            <!-- Labels -->
            <text x="80" y="165" fill="#16a34a" font-size="10" font-weight="bold" text-anchor="middle">Thin Cellulose Wall</text>
            <text x="80" y="180" fill="#64748b" font-size="9" text-anchor="middle">Living • Intercellular Spaces</text>
          </g>

          <!-- Collenchyma -->
          <g transform="translate(220, 45)">
            <rect width="160" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="80" y="22" fill="#0369a1" font-size="13" font-weight="bold" text-anchor="middle">Collenchyma</text>
            <!-- Hexagonal cells with corner thickenings -->
            <polygon points="50,55 80,45 110,55 110,85 80,95 50,85" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <polygon points="110,55 140,45 155,65 140,85 110,85" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <polygon points="50,85 80,95 80,125 50,135 30,110" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <polygon points="80,95 110,85 140,85 140,115 110,125 80,125" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <!-- Pectin corner deposits (dark blue dots at vertices) -->
            <circle cx="80" cy="45" r="5" fill="#0369a1"/>
            <circle cx="110" cy="55" r="5" fill="#0369a1"/>
            <circle cx="80" cy="95" r="6" fill="#0369a1"/>
            <circle cx="110" cy="85" r="6" fill="#0369a1"/>
            <circle cx="50" cy="85" r="5" fill="#0369a1"/>
            <!-- Labels -->
            <text x="80" y="165" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="middle">Pectin Corner Thickenings</text>
            <text x="80" y="180" fill="#64748b" font-size="9" text-anchor="middle">Living • Young Dicot Support</text>
          </g>

          <!-- Sclerenchyma -->
          <g transform="translate(410, 45)">
            <rect width="160" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="80" y="22" fill="#b45309" font-size="13" font-weight="bold" text-anchor="middle">Sclerenchyma</text>
            <!-- Extremely thick lignified wall with narrow lumen -->
            <rect x="35" y="45" width="40" height="100" rx="6" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
            <rect x="48" y="55" width="14" height="80" rx="3" fill="#b45309"/> <!-- narrow lumen -->
            
            <!-- Sclereid circle -->
            <circle cx="115" cy="95" r="25" fill="#fef3c7" stroke="#b45309" stroke-width="4"/>
            <circle cx="115" cy="95" r="6" fill="#b45309"/> <!-- narrow lumen -->
            
            <!-- Labels -->
            <text x="80" y="165" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">Lignified Wall & Narrow Lumen</text>
            <text x="80" y="180" fill="#64748b" font-size="9" text-anchor="middle">Dead • Fibres & Sclereids</text>
          </g>
        </svg>`,
        caption: "Figure 1.2: Microscopic anatomical characteristics of Parenchyma, Collenchyma, and Sclerenchyma.",
        guide: "Observe: 1. Parenchyma has thin cell walls and intercellular spaces. 2. Collenchyma displays prominent dark pectin corner deposits without intercellular spaces. 3. Sclerenchyma features heavily lignified dead walls with tiny central lumens."
      },
      tables: [
        {
          headers: ["Feature", "Parenchyma", "Collenchyma", "Sclerenchyma"],
          rows: [
            ["Cell Viability", "Living at maturity", "Living at maturity", "Dead at maturity (no protoplasm)"],
            ["Cell Wall Composition", "Thin primary wall of Cellulose", "Unevenly thickened cellulose, hemicellulose & PECTIN at cell corners", "Extremely thick primary & secondary wall heavily LIGNIFIED"],
            ["Intercellular Spaces", "Present", "Absent", "Absent"],
            ["Distribution", "Cortex, pith, mesophyll, xylem/phloem parenchyma", "Hypodermis of young dicot stems, petioles (ABSENT in monocots)", "Hypodermis of monocot stems, seed coats, fruit walls, xylem/phloem fibres"],
            ["Primary Function", "Photosynthesis, food storage, secretion, buoyancy", "Flexible mechanical support to young growing stems/petioles", "Rigid mechanical support and protection to mature organs"]
          ]
        }
      ]
    },
    {
      heading: "3. Complex Permanent Tissues — Xylem & Phloem Elements",
      paragraphs: [
        "Complex permanent tissues are composed of MORE THAN ONE type of cell working together as a functional unit. In vascular plants, complex tissues include XYLEM (water and mineral conducting tissue) and PHLOEM (food/sucrose translocating tissue).",
        "A. XYLEM: Conducts water, mineral salts, and provides mechanical strength from roots to leaves. Consists of 4 components:",
        "1. Tracheids: Elongated, tube-like dead cells with thick lignified walls and tapering pointed ends. End walls are unperforated (water passes through pits). Chief water conducting elements in Gymnosperms and Pteridophytes.",
        "2. Vessels: Long cylindrical tube-like syncytial structures made of vessel members aligned end-to-end with perforated end plates. Vessels have large central lumen and lignified walls. Presence of vessels is a characteristic feature of ANGIOSPERMS! (Gymnosperms LACK vessels).",
        "3. Xylem Fibres: Highly thickened lignified dead sclerenchymatous cells with obliterated lumen; provide mechanical support.",
        "4. Xylem Parenchyma: LIVING, thin-walled cellulosic cells that store food (starch, fat) and tannins. Ray parenchyma cells conduct water radially in stems.",
        "Primary Xylem is divided into Protoxylem (first formed, narrow lumen) and Metaxylem (later formed, wider lumen). Arrangement: (a) ENDARCH: Protoxylem lies towards center (pith) and Metaxylem towards periphery — characteristic of STEMS. (b) EXARCH: Protoxylem lies towards periphery and Metaxylem towards center — characteristic of ROOTS.",
        "B. PHLOEM: Translocates organic food solutes (photosynthates) from leaves to other plant parts. Consists of 4 components:",
        "1. Sieve Tube Elements: Long tube-like living cells arranged longitudinally with perforated end walls called Sieve Plates. A mature sieve element possesses peripheral cytoplasm and a large central vacuole BUT LACKS A NUCLEUS! Its functions are controlled by the nucleus of the adjacent Companion Cell.",
        "2. Companion Cells: Specialized living parenchymatous cells closely associated with sieve tube elements via pit fields. They help maintain the pressure gradient in sieve tubes. IMPORTANT: Gymnosperms LACK sieve tubes and companion cells; instead, gymnosperms have Sieve Cells and Albuminous Cells!",
        "3. Phloem Parenchyma: Living elongated cells with dense cytoplasm and nucleus; store food, resins, latex, mucilage. ABSENT in most monocotyledons!",
        "4. Phloem Fibres (Bast Fibres): Dead sclerenchymatous cells with lignified walls; provide mechanical strength. Commercial bast fibres like Jute, Flax, and Hemp are phloem fibres obtained from secondary phloem."
      ],
      importantPoints: [
        "Gymnosperms LACK xylem vessels (have tracheids only) and LACK sieve tubes/companion cells (have sieve cells and albuminous cells).",
        "Xylem Parenchyma is the ONLY living component in xylem.",
        "Phloem Fibres are the ONLY dead component in phloem.",
        "Mature Sieve Tube Element lacks a nucleus; its function is controlled by the companion cell nucleus.",
        "Endarch Xylem = Protoxylem inside (STEMS). Exarch Xylem = Protoxylem outside (ROOTS)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="270" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Anatomy of Xylem Vessels and Sieve Tube - Companion Cell Complex</text>
          
          <!-- Xylem Vessel -->
          <g transform="translate(40, 45)">
            <rect width="240" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#0284c7" font-size="13" font-weight="bold" text-anchor="middle">Xylem Vessel Elements</text>
            <!-- Vessel cylinder -->
            <rect x="70" y="45" width="60" height="120" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
            <!-- Perforation plates -->
            <line x1="70" y1="85" x2="130" y2="85" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3"/>
            <line x1="70" y1="125" x2="130" y2="125" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,3"/>
            <!-- Pits on lignified wall -->
            <circle cx="75" cy="65" r="3" fill="#0284c7"/>
            <circle cx="75" cy="105" r="3" fill="#0284c7"/>
            <circle cx="125" cy="65" r="3" fill="#0284c7"/>
            <circle cx="125" cy="105" r="3" fill="#0284c7"/>
            
            <text x="120" y="180" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">Perforated Syncytial Tube (Dead)</text>
          </g>

          <!-- Phloem Sieve Tube + Companion Cell -->
          <g transform="translate(320, 45)">
            <rect width="240" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">Phloem Sieve Tube & Companion Cell</text>
            
            <!-- Sieve Tube element -->
            <rect x="45" y="45" width="60" height="120" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
            <!-- Sieve plates (perforated) -->
            <line x1="45" y1="50" x2="105" y2="50" stroke="#15803d" stroke-width="3"/>
            <circle cx="60" cy="50" r="1.5" fill="#ffffff"/>
            <circle cx="75" cy="50" r="1.5" fill="#ffffff"/>
            <circle cx="90" cy="50" r="1.5" fill="#ffffff"/>
            
            <line x1="45" y1="160" x2="105" y2="160" stroke="#15803d" stroke-width="3"/>
            <circle cx="60" cy="160" r="1.5" fill="#ffffff"/>
            <circle cx="75" cy="160" r="1.5" fill="#ffffff"/>
            <circle cx="90" cy="160" r="1.5" fill="#ffffff"/>
            <!-- Peripheral cytoplasm -->
            <rect x="48" y="55" width="6" height="100" fill="#86efac"/>
            <rect x="91" y="55" width="6" height="100" fill="#86efac"/>
            <!-- NO Nucleus label -->
            <text x="75" y="105" fill="#15803d" font-size="9" text-anchor="middle">No Nucleus!</text>

            <!-- Companion Cell -->
            <rect x="108" y="55" width="35" height="100" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>
            <ellipse cx="125" cy="105" rx="8" ry="12" fill="#15803d"/> <!-- Prominent Nucleus -->
            <text x="125" y="145" fill="#15803d" font-size="8" text-anchor="middle" font-weight="bold">Nucleus</text>

            <!-- Plasmodesmata connections -->
            <line x1="105" y1="80" x2="108" y2="80" stroke="#15803d" stroke-width="2"/>
            <line x1="105" y1="120" x2="108" y2="120" stroke="#15803d" stroke-width="2"/>
            
            <text x="120" y="180" fill="#16a34a" font-size="10" font-weight="bold" text-anchor="middle">Living Sieve Element + Companion Cell</text>
          </g>
        </svg>`,
        caption: "Figure 1.3: Structural comparison between Xylem Vessel Members and Sieve Tube Element with associated Companion Cell.",
        guide: "Identify: 1. Xylem vessels have lignified walls and perforated end plates (dead). 2. Sieve tube element has perforated sieve plates, peripheral cytoplasm, but NO nucleus. 3. Companion cell has a prominent nucleus regulating the sieve tube pressure gradient."
      },
      tables: [
        {
          headers: ["Feature", "Xylem", "Phloem"],
          rows: [
            ["Primary Function", "Conduction of water and mineral salts from roots to leaves", "Translocation of organic food (sucrose) from leaves to sink organs"],
            ["Direction of Transport", "Unidirectional (upward from root to leaf)", "Bidirectional (source to sink and vice versa)"],
            ["Elements Present", "Tracheids, Vessels, Xylem Fibres, Xylem Parenchyma", "Sieve Tube elements, Companion cells, Phloem Parenchyma, Phloem Fibres"],
            ["Living vs Dead Cells", "3 components dead (Tracheids, Vessels, Fibres); ONLY Parenchyma is living", "3 components living (Sieve tubes, Companion cells, Parenchyma); ONLY Fibres are dead"],
            ["Gymnosperm Absence", "Gymnosperms LACK vessels (have tracheids only)", "Gymnosperms LACK sieve tubes & companion cells (have sieve cells & albuminous cells)"]
          ]
        }
      ]
    },
    {
      heading: "4. Tissue Systems & Stomatal Apparatus",
      paragraphs: [
        "Based on structure and location, all plant tissues are grouped into three primary TISSUE SYSTEMS:",
        "1. EPIDERMAL TISSUE SYSTEM: Outermost layer covering the plant body. Derived from protoderm. Consists of Epidermis, Cuticle, Stomata, and Epidermal Appendages (Root Hairs and Trichomes).",
        "• Cuticle: Waxy layer of cutin covering epidermis to restrict water loss by transpiration (ABSENT in roots!).",
        "• Stomatal Apparatus: Includes (a) Stomatal Aperture (pore), (b) Two Guard Cells, and (c) Surrounding Subsidiary Cells. Guard cells contain chloroplasts and possess thick inner walls and thin outer walls. Dicot guard cells are Bean/Kidney shaped; Monocot/Grass guard cells are Dumb-bell shaped!",
        "• Root Hairs: Unicellular elongation of epiblema cells; absorb water and minerals from soil.",
        "• Trichomes: Multicellular hairs on stem; branched or unbranched, soft or stiff, secretory; prevent water loss due to transpiration.",
        "2. GROUND OR FUNDAMENTAL TISSUE SYSTEM: All tissues EXCEPT epidermal and vascular bundles. Consists of Cortex, Hypodermis, Endodermis (Casparian strips), Pericycle, Pith, and Medullary Rays. In leaves, ground tissue forms green photosynthetic Mesophyll.",
        "3. VASCULAR TISSUE SYSTEM: Composed of Xylem and Phloem arranged into Vascular Bundles. Classification:",
        "• Radial Vascular Bundles: Xylem and phloem occur in separate alternate radii (characteristic of ROOTS).",
        "• Conjoint Vascular Bundles: Xylem and phloem lie on the same radius. (a) Conjoint Collateral Open: Intrafascicular cambium present between xylem and phloem (capable of secondary growth, e.g., Dicot Stem). (b) Conjoint Collateral Closed: Cambium absent (no secondary growth, e.g., Monocot Stem & Leaves)."
      ],
      importantPoints: [
        "Guard cells: Bean/Kidney shaped in Dicots; Dumbbell shaped in Grasses/Monocots.",
        "Guard cells are the ONLY epidermal cells containing chloroplasts!",
        "Stomatal Apparatus = Stomatal Pore + Guard Cells + Subsidiary Cells.",
        "Radial Vascular Bundles = ROOTS. Conjoint Open = DICOT STEM. Conjoint Closed = MONOCOT STEM & LEAVES."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="260" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Stomatal Anatomy & Vascular Bundle Classification</text>
          
          <!-- Dicot Guard Cell (Kidney) -->
          <g transform="translate(30, 45)">
            <rect width="160" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="80" y="20" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">Dicot Stoma (Kidney)</text>
            <!-- Kidney guard cells -->
            <path d="M 60 60 Q 40 95 60 130 Q 75 95 60 60 Z" fill="#86efac" stroke="#15803d" stroke-width="2"/>
            <path d="M 100 60 Q 120 95 100 130 Q 85 95 100 60 Z" fill="#86efac" stroke="#15803d" stroke-width="2"/>
            <!-- Thick inner walls -->
            <path d="M 60 60 Q 75 95 60 130" stroke="#052e16" stroke-width="3" fill="none"/>
            <path d="M 100 60 Q 85 95 100 130" stroke="#052e16" stroke-width="3" fill="none"/>
            <!-- Pore -->
            <ellipse cx="80" cy="95" rx="6" ry="25" fill="#f8fafc"/>
            <text x="80" y="165" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">Kidney/Bean Shaped</text>
            <text x="80" y="180" fill="#64748b" font-size="9" text-anchor="middle">Thick Inner Wall</text>
          </g>

          <!-- Monocot Guard Cell (Dumbbell) -->
          <g transform="translate(220, 45)">
            <rect width="160" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="80" y="20" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">Monocot Stoma (Grass)</text>
            <!-- Dumbbell guard cells -->
            <path d="M 55 60 C 40 60 40 80 60 95 C 40 110 40 130 55 130 C 70 130 65 110 65 95 C 65 80 70 60 55 60 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <path d="M 105 60 C 120 60 120 80 100 95 C 120 110 120 130 105 130 C 90 130 95 110 95 95 C 95 80 90 60 105 60 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <!-- Pore -->
            <line x1="80" y1="70" x2="80" y2="120" stroke="#0284c7" stroke-width="4"/>
            <text x="80" y="165" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="middle">Dumb-bell Shaped</text>
            <text x="80" y="180" fill="#64748b" font-size="9" text-anchor="middle">Bulbed Ends (Grasses)</text>
          </g>

          <!-- Vascular Bundle Types -->
          <g transform="translate(410, 45)">
            <rect width="160" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="80" y="20" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">Vascular Bundles</text>
            
            <!-- Conjoint Open (Top) -->
            <rect x="40" y="38" width="80" height="60" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="4"/>
            <rect x="40" y="38" width="80" height="22" fill="#dcfce7"/> <!-- Phloem -->
            <text x="80" y="52" fill="#15803d" font-size="8" font-weight="bold" text-anchor="middle">Phloem</text>
            <line x1="40" y1="60" x2="120" y2="60" stroke="#b45309" stroke-width="3"/> <!-- Cambium -->
            <text x="80" y="75" fill="#0284c7" font-size="8" font-weight="bold" text-anchor="middle">Xylem</text>
            <text x="80" y="108" fill="#b45309" font-size="9" text-anchor="middle" font-weight="bold">Conjoint Open (Dicot)</text>

            <!-- Radial (Bottom) -->
            <circle cx="80" cy="142" r="22" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
            <circle cx="80" cy="128" r="4" fill="#0284c7"/> <!-- Xylem -->
            <circle cx="80" cy="156" r="4" fill="#0284c7"/>
            <circle cx="66" cy="142" r="4" fill="#22c55e"/> <!-- Phloem -->
            <circle cx="94" cy="142" r="4" fill="#22c55e"/>
            <text x="80" y="180" fill="#475569" font-size="9" text-anchor="middle" font-weight="bold">Radial (Roots)</text>
          </g>
        </svg>`,
        caption: "Figure 1.4: Stomatal Guard Cell forms (Kidney vs Dumbbell) and Vascular Bundle arrangements (Conjoint Open vs Radial).",
        guide: "Observe: 1. Dicot stoma has kidney-shaped guard cells with thick inner walls facing the pore. 2. Monocot grass stoma has dumbbell-shaped guard cells. 3. Conjoint open vascular bundle has cambium strip between phloem and xylem."
      }
    }
  ],

  formulae: [],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl bg-white p-2">
      <rect width="600" height="200" fill="#f8fafc" rx="10"/>
      <text x="300" y="28" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Master Flowchart of Plant Tissues</text>
      <!-- Root Node -->
      <rect x="230" y="45" width="140" height="30" fill="#0284c7" rx="6"/>
      <text x="300" y="65" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">PLANT TISSUES</text>
      <!-- Lines -->
      <path d="M 230 60 L 140 100" stroke="#64748b" stroke-width="2"/>
      <path d="M 370 60 L 460 100" stroke="#64748b" stroke-width="2"/>
      <!-- Branch 1 -->
      <rect x="70" y="100" width="140" height="30" fill="#38bdf8" rx="6"/>
      <text x="140" y="120" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Meristematic Tissues</text>
      <!-- Branch 2 -->
      <rect x="390" y="100" width="140" height="30" fill="#22c55e" rx="6"/>
      <text x="460" y="120" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Permanent Tissues</text>
      <!-- Sub-branches -->
      <text x="140" y="155" fill="#0369a1" font-size="9" text-anchor="middle" font-weight="bold">Apical • Intercalary • Lateral</text>
      <text x="460" y="155" fill="#15803d" font-size="9" text-anchor="middle" font-weight="bold">Simple (Par/Coll/Scler) | Complex (Xylem/Phloem)</text>
    </svg>`,
    caption: "Master hierarchy of Plant Tissues in Anatomy of Flowering Plants."
  },

  neetImportantPoints: [
    "Intercalary meristem regenerates damaged grass blades following grazing by herbivores (NEET 2019).",
    "Collenchyma has localized pectin thickenings at cell corners and is ABSENT in monocots.",
    "Sclereids provide gritty texture to guava/pear/sapota fruit pulp and hardness to nut shells.",
    "Gymnosperms LACK xylem vessels (have tracheids only) and LACK sieve tubes/companion cells.",
    "Companion cells maintain the pressure gradient in sieve tube elements.",
    "Endarch xylem (protoxylem inside) occurs in STEMS; Exarch xylem (protoxylem outside) occurs in ROOTS.",
    "Stomata in grasses have DUMBBELL-SHAPED guard cells (NEET 2018, 2020)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Primary Meristems with Secondary Meristems based on position alone.",
      correctFact: "Primary meristems include BOTH Apical and Intercalary meristems. Lateral meristems (vascular & cork cambium) are Secondary meristems.",
      whyItMattersForNEET: "NEET tests whether intercalary meristem is primary or secondary. Intercalary is a PRIMARY meristem because it originates early in life."
    },
    {
      commonConfusion: "Thinking Collenchyma is present in monocots or that it is dead.",
      correctFact: "Collenchyma is LIVING with pectin corner thickenings and is strictly ABSENT in monocots.",
      whyItMattersForNEET: "Options in statement questions frequently claim collenchyma is present in monocot hypodermis (FALSE; monocots have sclerenchymatous hypodermis)."
    },
    {
      commonConfusion: "Confusing Gymnosperm phloem with Angiosperm phloem.",
      correctFact: "Gymnosperms have sieve cells and albuminous cells; they LACK sieve tubes and companion cells.",
      whyItMattersForNEET: "Direct question tested in NEET 2019 and NEET 2021."
    }
  ],

  quickRevision: [
    "Apical + Intercalary Meristems = Primary Growth (Length). Intercalary regenerates grazed grass.",
    "Lateral Meristems = Secondary Growth (Girth/Width). Includes vascular cambium & cork cambium.",
    "Collenchyma = Living, Pectin corner thickenings, mechanical support in young dicot stems, ABSENT in monocots.",
    "Sclerenchyma = Dead, lignified, fibres & sclereids.",
    "Xylem Vessels = Angiosperm characteristic (ABSENT in Gymnosperms). Xylem Parenchyma = Only living xylem element.",
    "Phloem Sieve Tubes = Living but LACK nucleus at maturity; regulated by Companion Cell nucleus.",
    "Grass Stomata = Dumbbell-shaped guard cells. Dicot Stomata = Bean/Kidney shaped guard cells.",
    "Endarch = Protoxylem inside (Stem). Exarch = Protoxylem outside (Root)."
  ],

  practiceQuestions: [
    {
      id: "prac-01",
      questionText: "Regeneration of damaged grass blades following grazing by herbivores is primarily enabled by the activity of which meristem?",
      options: [
        "Apical meristem",
        "Intercalary meristem",
        "Lateral meristem",
        "Cork cambium"
      ],
      correctAnswer: 1,
      explanation: "Intercalary meristem is a primary meristem located between mature tissues at nodes and leaf bases in grasses. It allows rapid elongation and regeneration of grass shoots damaged by grazing herbivores.",
      difficulty: "Easy",
      topicId: "bio-meristematic-permanent-tissues",
      conceptTested: "Intercalary Meristem Function"
    },
    {
      id: "prac-02",
      questionText: "Which of the following statements is INCORRECT regarding collenchyma tissue?",
      options: [
        "It consists of living cells with localized pectin deposits at cell corners.",
        "It provides flexible mechanical support to young dicot stems and petioles.",
        "It forms a prominent hypodermal layer in monocot stems.",
        "Cells may contain chloroplasts and assimilate food."
      ],
      correctAnswer: 2,
      explanation: "Collenchyma is strictly ABSENT in monocotyledonous plants. Monocot stems have a sclerenchymatous hypodermis.",
      difficulty: "Medium",
      topicId: "bio-meristematic-permanent-tissues",
      conceptTested: "Collenchyma Distribution"
    },
    {
      id: "prac-03",
      questionText: "Gymnosperms differ from angiosperms in vascular anatomy because gymnosperm phloem lacks:",
      options: [
        "Sieve cells and albuminous cells",
        "Both sieve tube elements and companion cells",
        "Phloem parenchyma",
        "Phloem fibres"
      ],
      correctAnswer: 1,
      explanation: "Gymnosperms lack sieve tube elements and companion cells; instead, they possess sieve cells and albuminous cells for food translocation.",
      difficulty: "Medium",
      topicId: "bio-meristematic-permanent-tissues",
      conceptTested: "Gymnosperm Phloem Anatomy"
    }
  ],

  pyqs: [
    {
      id: "pyq-01",
      exam: "NEET 2020",
      year: 2020,
      questionText: "Stomata in grass leaf are:",
      options: [
        "Dumb-bell shaped",
        "Kidney shaped",
        "Rectangular",
        "Barrel shaped"
      ],
      correctAnswer: 0,
      explanation: "In grasses (monocots), guard cells of stomata are dumb-bell shaped with thin bulbed ends and thickened middle region. Dicot guard cells are kidney or bean shaped.",
      topicId: "bio-meristematic-permanent-tissues",
      difficulty: "Easy",
      conceptTested: "Stomatal Guard Cell Anatomy",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.2.1",
      verified: true
    },
    {
      id: "pyq-02",
      exam: "NEET 2019",
      year: 2019,
      questionText: "Regeneration of damaged growing grass following grazing is largely due to:",
      options: [
        "Lateral meristem",
        "Apical meristem",
        "Intercalary meristem",
        "Secondary meristem"
      ],
      correctAnswer: 2,
      explanation: "Intercalary meristem occurs between mature tissues at the base of leaves and internodes in grasses. When grazers remove the top tip, intercalary meristems divide rapidly to regenerate lost grass parts.",
      topicId: "bio-meristematic-permanent-tissues",
      difficulty: "Easy",
      conceptTested: "Intercalary Meristem",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.1.1",
      verified: true
    },
    {
      id: "pyq-03",
      exam: "NEET 2019",
      year: 2019,
      questionText: "Phloem in gymnosperms lacks:",
      options: [
        "Both sieve tubes and companion cells",
        "Albuminous cells and sieve cells",
        "Sieve tubes only",
        "Companion cells only"
      ],
      correctAnswer: 0,
      explanation: "Gymnosperms do not possess sieve tube elements and companion cells. They contain sieve cells and specialized albuminous cells instead.",
      topicId: "bio-meristematic-permanent-tissues",
      difficulty: "Medium",
      conceptTested: "Complex Permanent Tissues",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.1.2.2",
      verified: true
    },
    {
      id: "pyq-04",
      exam: "NEET 2016",
      year: 2016,
      questionText: "Specialized epidermal cells surrounding the guard cells are called:",
      options: [
        "Bulliform cells",
        "Lenticels",
        "Complementary cells",
        "Subsidiary cells"
      ],
      correctAnswer: 3,
      explanation: "Specialized epidermal cells in the vicinity of guard cells that differ in shape and size are termed subsidiary cells (accessory cells). Stomatal aperture + guard cells + subsidiary cells = Stomatal Apparatus.",
      topicId: "bio-meristematic-permanent-tissues",
      difficulty: "Easy",
      conceptTested: "Epidermal Tissue System",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.2.1",
      verified: true
    }
  ]
};
