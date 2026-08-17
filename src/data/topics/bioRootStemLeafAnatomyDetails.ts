import { DetailedTopicContent } from '../../types/neet';

export const bioRootStemLeafAnatomyDetails: DetailedTopicContent = {
  topicId: "bio-root-stem-leaf-anatomy",
  topicName: "Anatomy of Dicot & Monocot Root, Stem & Leaf",
  subject: "Biology",
  class: "Class 11",
  classification: "Structural Organisation in Animals & Plants",
  chapter: "Anatomy of Flowering Plants",

  whatIsThisTopic: "Internal anatomical organization of roots, stems, and leaves in dicotyledonous and monocotyledonous plants, highlighting structural variations in tissue layers (epiblema/epidermis, hypodermis, cortex, endodermis, pericycle, pith) and vascular bundle arrangements (radial vs conjoint, open vs closed, exarch vs endarch, polyarch vs diarch).",

  basicIdea: [
    "Dicot Root vs Monocot Root: Dicot root has 2-4 (diarch to tetrarch) exarch xylem patches and small/inconspicuous pith. Monocot root has polyarch (>6) exarch xylem patches, large well-developed pith, and NO secondary growth.",
    "Casparian Strips: Bands of water-impermeable suberin deposition on radial and tangential walls of endodermal cells in both dicot and monocot roots.",
    "Dicot Stem vs Monocot Stem: Dicot stem has collenchymatous hypodermis, ring arrangement of conjoint open vascular bundles, endarch xylem, pericycle semilunar sclerenchyma patches, starch sheath endodermis, and large pith. Monocot stem has sclerenchymatous hypodermis, scattered conjoint closed vascular bundles surrounded by bundle sheath, lysigenous water cavities, and ABSENCE of phloem parenchyma.",
    "Dorsiventral (Dicot) Leaf vs Isobilateral (Monocot) Leaf: Dicot leaf has reticulate venation, hypostomatic stomata (more on abaxial lower surface), and mesophyll differentiated into palisade and spongy parenchyma. Monocot leaf has parallel venation, amphistomatic stomata (equal on both surfaces), undifferentiated mesophyll, and bulliform/motor cells in upper epidermis for leaf rolling during water stress."
  ],

  importantTerms: [
    {
      term: "Epiblema / Rhizodermis",
      definition: "Outermost single-layered epidermal covering of roots lacking cuticle and bearing unicellular root hairs for water absorption.",
      neetNote: "Root hairs arise from the zone of maturation of epiblema."
    },
    {
      term: "Casparian Strip",
      definition: "Band of waxy, water-impermeable suberin deposition present on radial and tangential walls of root endodermal cells.",
      neetNote: "Forces apoplastic water movement into symplastic pathway across root endodermis; tested in NEET 2018."
    },
    {
      term: "Exarch Xylem",
      definition: "Primary xylem arrangement where first-formed protoxylem lies towards the periphery and metaxylem lies towards the center.",
      neetNote: "Characteristic feature of ALL ROOTS (dicot and monocot roots)."
    },
    {
      term: "Endarch Xylem",
      definition: "Primary xylem arrangement where protoxylem lies towards the center (pith) and metaxylem lies towards the periphery.",
      neetNote: "Characteristic feature of ALL STEMS (dicot and monocot stems)."
    },
    {
      term: "Starch Sheath",
      definition: "Innermost cortical layer (endodermis) of dicot stems containing abundant starch grains.",
      neetNote: "Functions as endodermis in dicot stem."
    },
    {
      term: "Lysigenous Water Cavity",
      definition: "Water-filled cavity formed by breakdown of inner protoxylem vessels within scattered vascular bundles of monocot stems.",
      neetNote: "Diagnostic anatomical feature of monocot stem (e.g., maize)."
    },
    {
      term: "Bulliform Cells (Motor Cells)",
      definition: "Large, empty, colorless modified adaxial epidermal cells along veins in monocot/grass leaves that absorb water to expand or lose water to curl leaves during drought.",
      neetNote: "Minimizes transpiration water loss during water stress; frequently tested in NEET."
    },
    {
      term: "Bundle Sheath Cells",
      definition: "Layer of compactly arranged thick-walled parenchymatous or sclerenchymatous cells surrounding vascular bundles in leaves and monocot stems.",
      neetNote: "Forms Kranz anatomy in C4 grass leaves."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Internal Structure of Dicot Root vs Monocot Root",
      paragraphs: [
        "A transverse section (T.S.) of a typical root reveals concentric arrangement of tissues from exterior to interior:",
        "1. Epiblema (Rhizodermis): Outermost layer without cuticle, bearing unicellular root hairs in the maturation zone.",
        "2. Cortex: Multi-layered parenchymatous tissue with prominent intercellular spaces for gas exchange.",
        "3. Endodermis: Single-layered barrel-shaped cells without intercellular spaces. Radial and tangential cell walls are impregnated with suberin forming CASPARIAN STRIPS. Endodermal passage cells opposite protoxylem allow entry of water into xylem.",
        "4. Pericycle: Thick-walled parenchymatous layer next to endodermis. In dicot roots, pericycle gives rise to lateral roots AND parts of the vascular cambium. In monocot roots, pericycle gives rise ONLY to lateral roots.",
        "5. Vascular Bundles: Arranged in RADIAL pattern (xylem and phloem alternate along different radii). Protoxylem is EXARCH (protoxylem points outwards towards periphery).",
        "• DICOT ROOT (e.g., Sunflower root): Xylem patches are 2 to 4 (Diarch to Tetrarch, rarely up to Hexarch). Pith is extremely small, inconspicuous, or absent. Undergoes secondary growth.",
        "• MONOCOT ROOT (e.g., Maize root): Xylem patches are POLYARCH (> 6, typically 8–20). Pith is LARGE, prominent, and well-developed. Does NOT undergo secondary growth."
      ],
      importantPoints: [
        "Casparian strips consist of suberin in root endodermis.",
        "Dicot root = Diarch to Tetrarch + Small/absent pith + Secondary growth present.",
        "Monocot root = Polyarch (> 6) + Large well-developed pith + NO secondary growth.",
        "Primary xylem in ALL roots is EXARCH."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="270" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Comparative T.S. of Dicot Root vs Monocot Root</text>
          
          <!-- Dicot Root -->
          <g transform="translate(40, 45)">
            <rect width="240" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#0284c7" font-size="13" font-weight="bold" text-anchor="middle">Dicot Root (Tetrarch)</text>
            <!-- Outer Epiblema & Root Hairs -->
            <circle cx="120" cy="110" r="75" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
            <line x1="45" y1="110" x2="25" y2="110" stroke="#16a34a" stroke-width="1.5"/> <!-- root hair -->
            <line x1="195" y1="110" x2="215" y2="110" stroke="#16a34a" stroke-width="1.5"/>
            <!-- Endodermis -->
            <circle cx="120" cy="110" r="40" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="3,2"/>
            <!-- 4 Xylem Arms (Tetrarch - Exarch) -->
            <path d="M 120 75 L 120 145 M 85 110 L 155 110" stroke="#0284c7" stroke-width="6"/>
            <!-- Small Pith center -->
            <circle cx="120" cy="110" r="4" fill="#64748b"/>
            
            <text x="120" y="175" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="middle">4 Xylem Arms (Exarch) • Small Pith</text>
          </g>

          <!-- Monocot Root -->
          <g transform="translate(320, 45)">
            <rect width="240" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">Monocot Root (Polyarch)</text>
            <!-- Outer Epiblema -->
            <circle cx="120" cy="110" r="75" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
            <!-- Endodermis -->
            <circle cx="120" cy="110" r="50" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="3,2"/>
            <!-- Polyarch Xylem (8 dots in circle) -->
            <circle cx="120" cy="72" r="5" fill="#0284c7"/>
            <circle cx="148" cy="82" r="5" fill="#0284c7"/>
            <circle cx="158" cy="110" r="5" fill="#0284c7"/>
            <circle cx="148" cy="138" r="5" fill="#0284c7"/>
            <circle cx="120" cy="148" r="5" fill="#0284c7"/>
            <circle cx="92" cy="138" r="5" fill="#0284c7"/>
            <circle cx="82" cy="110" r="5" fill="#0284c7"/>
            <circle cx="92" cy="82" r="5" fill="#0284c7"/>
            <!-- Large Pith center -->
            <circle cx="120" cy="110" r="22" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
            <text x="120" y="113" fill="#15803d" font-size="8" font-weight="bold" text-anchor="middle">Large Pith</text>
            
            <text x="120" y="175" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">Polyarch (>6 Xylem) • Large Pith</text>
          </g>
        </svg>`,
        caption: "Figure 2.1: Structural comparison between Dicot Root (tetrarch exarch, small pith) and Monocot Root (polyarch exarch, large pith).",
        guide: "Identify: 1. Endodermis with Casparian strips surrounds the stele in both roots. 2. Dicot root shows 2-4 xylem arms and tiny pith. 3. Monocot root shows polyarch (>6) xylem bundles encircling a large central parenchymatous pith."
      },
      tables: [
        {
          headers: ["Anatomical Feature", "Dicot Root (e.g., Sunflower)", "Monocot Root (e.g., Maize)"],
          rows: [
            ["Xylem Bundle Number", "Diarch to Tetrarch (2 to 4 patches, rarely up to 6)", "Polyarch (more than 6 patches, typically 8 to 20)"],
            ["Pith Development", "Small, inconspicuous, or completely absent", "Large, prominent, and well-developed parenchymatous central region"],
            ["Pericycle Function", "Gives rise to lateral roots AND vascular/cork cambium", "Gives rise ONLY to lateral roots (no cambium formation)"],
            ["Secondary Growth", "Present (undergoes secondary thickening in girth)", "Completely ABSENT"],
            ["Xylem Arrangement", "Exarch (protoxylem outside)", "Exarch (protoxylem outside)"]
          ]
        }
      ]
    },
    {
      heading: "2. Internal Structure of Dicot Stem vs Monocot Stem",
      paragraphs: [
        "A transverse section of a stem displays distinctive tissue differentiation that separates dicots from monocots:",
        "A. DICOT STEM (e.g., Sunflower stem):",
        "1. Epidermis: Outermost layer covered by cuticle, possessing stomata and multicellular trichomes.",
        "2. Hypodermis: 3–5 layers of COLLENCHYMATOUS cells below epidermis; provides mechanical strength to young stem.",
        "3. General Cortex: Parenchymatous cells with intercellular spaces.",
        "4. Endodermis: Innermost layer of cortex, rich in starch grains, termed the STARCH SHEATH.",
        "5. Pericycle: Heterogeneous layer on inner side of endodermis; composed of semilunar patches of SCLERENCHYMA above phloem and parenchyma above medullary rays.",
        "6. Vascular Bundles: Arranged in a RING (characteristic of dicots!). Bundles are CONJOINT, COLLATERAL, OPEN (intrafascicular cambium present between xylem and phloem). Xylem is ENDARCH (protoxylem towards center).",
        "7. Pith & Medullary Rays: Large central parenchymatous pith. Radially elongated parenchymatous cells between vascular bundles form Medullary Rays.",
        "B. MONOCOT STEM (e.g., Maize stem):",
        "1. Epidermis: Covered with cuticle; trichomes are ABSENT.",
        "2. Hypodermis: 2–3 layers of SCLERENCHYMATOUS cells; provides mechanical rigidity.",
        "3. Ground Tissue: Un-differentiated mass of parenchyma cells extending from hypodermis to center (NO cortex, endodermis, pericycle, or pith distinction!).",
        "4. Vascular Bundles: SCATTERED throughout ground tissue (peripheral bundles are smaller & more crowded; central bundles are larger & fewer). Bundles are CONJOINT, COLLATERAL, CLOSED (no cambium). Each bundle is encased in a Sclerenchymatous Bundle Sheath.",
        "5. Xylem & Phloem Features: Xylem vessels arranged in 'Y' or 'V' shape. Inner protoxylem disintegrates to form a LYSIGENOUS WATER CAVITY. Phloem parenchyma is completely ABSENT!"
      ],
      importantPoints: [
        "Dicot stem = Collenchymatous hypodermis + Ring of conjoint open bundles + Starch sheath + Large pith.",
        "Monocot stem = Sclerenchymatous hypodermis + Scattered conjoint closed bundles + Lysigenous water cavity + NO phloem parenchyma.",
        "Primary xylem in ALL stems is ENDARCH."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="270" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Comparative T.S. of Dicot Stem vs Monocot Stem</text>
          
          <!-- Dicot Stem -->
          <g transform="translate(40, 45)">
            <rect width="240" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#0284c7" font-size="13" font-weight="bold" text-anchor="middle">Dicot Stem (Ring Arrangement)</text>
            <!-- Outer stem boundary -->
            <circle cx="120" cy="110" r="75" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
            <!-- Ring of vascular bundles (6 pie shapes in a ring) -->
            <circle cx="120" cy="52" r="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
            <circle cx="170" cy="80" r="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
            <circle cx="170" cy="140" r="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
            <circle cx="120" cy="168" r="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
            <circle cx="70" cy="140" r="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
            <circle cx="70" cy="80" r="10" fill="#bae6fd" stroke="#0284c7" stroke-width="1"/>
            <!-- Large Pith center -->
            <circle cx="120" cy="110" r="30" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
            <text x="120" y="113" fill="#475569" font-size="9" text-anchor="middle" font-weight="bold">Large Pith</text>

            <text x="120" y="175" fill="#0284c7" font-size="10" font-weight="bold" text-anchor="middle">Collenchyma Hypod. • Ring Bundles</text>
          </g>

          <!-- Monocot Stem -->
          <g transform="translate(320, 45)">
            <rect width="240" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">Monocot Stem (Scattered Bundles)</text>
            <!-- Outer stem boundary -->
            <circle cx="120" cy="110" r="75" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <!-- Scattered bundles -->
            <circle cx="120" cy="55" r="5" fill="#15803d"/>
            <circle cx="150" cy="65" r="5" fill="#15803d"/>
            <circle cx="165" cy="95" r="5" fill="#15803d"/>
            <circle cx="160" cy="135" r="5" fill="#15803d"/>
            <circle cx="120" cy="155" r="5" fill="#15803d"/>
            <circle cx="80" cy="140" r="5" fill="#15803d"/>
            <circle cx="75" cy="100" r="5" fill="#15803d"/>
            <circle cx="90" cy="70" r="5" fill="#15803d"/>
            <!-- Larger inner scattered bundles -->
            <circle cx="110" cy="90" r="8" fill="#15803d"/>
            <circle cx="135" cy="115" r="8" fill="#15803d"/>
            <circle cx="105" cy="125" r="8" fill="#15803d"/>
            
            <text x="120" y="175" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">Sclerenchyma Hypod. • Scattered Bundles</text>
          </g>
        </svg>`,
        caption: "Figure 2.2: T.S. diagram comparing Dicot Stem (ring vascular arrangement, large pith) and Monocot Stem (scattered vascular bundles, undifferentiated ground tissue).",
        guide: "Observe: 1. Dicot stem has collenchymatous hypodermis and vascular bundles arranged in a neat ring with cambium (open). 2. Monocot stem has sclerenchymatous hypodermis and closed vascular bundles scattered throughout ground tissue."
      },
      tables: [
        {
          headers: ["Anatomical Feature", "Dicot Stem (e.g., Sunflower)", "Monocot Stem (e.g., Maize)"],
          rows: [
            ["Hypodermis Composition", "Collenchymatous (3-5 layers, flexible mechanical strength)", "Sclerenchymatous (2-3 layers, rigid protection)"],
            ["Ground Tissue Differentiation", "Differentiated into Cortex, Endodermis, Pericycle, and Pith", "Undifferentiated continuous parenchymatous mass"],
            ["Vascular Bundle Arrangement", "Arranged in a neat RING around the pith", "SCATTERED randomly throughout the ground tissue"],
            ["Vascular Bundle Type", "Conjoint, Collateral, OPEN (Intrafascicular cambium present)", "Conjoint, Collateral, CLOSED (Cambium absent)"],
            ["Bundle Sheath", "Absent (Pericycle has sclerenchymatous semilunar patches)", "Present (Each scattered bundle surrounded by sclerenchymatous sheath)"],
            ["Water Cavity & Phloem Parenchyma", "Water cavity absent; Phloem parenchyma PRESENT", "Lysigenous water cavity present; Phloem parenchyma ABSENT"]
          ]
        }
      ]
    },
    {
      heading: "3. Internal Structure of Dorsiventral (Dicot) Leaf vs Isobilateral (Monocot) Leaf",
      paragraphs: [
        "Leaf anatomy reflects adaptation to light interception and transpiration regulation:",
        "A. DORSIVENTRAL / DICOT LEAF (e.g., Sunflower / Mango leaf):",
        "1. Epidermis: Distinct Upper (Adaxial) and Lower (Abaxial) epidermis covered with cuticle. Abaxial lower epidermis bears significantly MORE stomata than adaxial upper epidermis (HYPOSTOMATIC leaf).",
        "2. Mesophyll: Photosynthetic parenchymatous ground tissue differentiated into two zones: (a) Palisade Parenchyma: Adaxial columnar cells closely packed in 1-2 layers without intercellular spaces. (b) Spongy Parenchyma: Abaxial oval/rounded loosely arranged cells with large air cavities.",
        "3. Vascular System: Vascular bundles in veins surrounded by parenchymatous Bundle Sheath cells. Reticulate venation causes variation in bundle size. Xylem lies towards adaxial (upper) side; Phloem lies towards abaxial (lower) side.",
        "B. ISOBILATERAL / MONOCOT LEAF (e.g., Grass / Maize leaf):",
        "1. Epidermis: Stomata distributed EQUALLY on both adaxial and abaxial epidermal surfaces (AMPHISTOMATIC leaf).",
        "2. Mesophyll: UNDIFFERENTIATED into palisade and spongy parenchyma; all mesophyll cells are uniform, rounded, and contain chloroplasts.",
        "3. Bulliform Cells (Motor Cells): In grasses, certain adaxial epidermal cells along veins modify into large, empty, colorless cells. When turgid (water rich), leaf blades expand open; during water stress, bulliform cells lose turgor and collapse, causing leaves to curl inward to reduce transpiration loss!",
        "4. Vascular System: Parallel venation leads to similar sized vascular bundles (except midrib vein), surrounded by bundle sheath."
      ],
      importantPoints: [
        "Dicot leaf = Dorsiventral + Hypostomatic + Mesophyll differentiated (Palisade + Spongy).",
        "Monocot leaf = Isobilateral + Amphistomatic + Mesophyll undifferentiated + Bulliform cells in upper epidermis.",
        "Bulliform cells curl grass leaves inward under water stress to minimize transpiration water loss.",
        "Xylem faces Upper/Adaxial side; Phloem faces Lower/Abaxial side in leaf vascular bundles."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl shadow-sm border border-slate-200 bg-white">
          <rect width="600" height="270" fill="#f8fafc" rx="12"/>
          <text x="300" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Anatomy of Dorsiventral (Dicot) vs Isobilateral (Monocot) Leaf</text>
          
          <!-- Dicot Leaf Section -->
          <g transform="translate(30, 45)">
            <rect width="250" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="125" y="20" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">Dorsiventral Leaf (Dicot)</text>
            <!-- Adaxial Epidermis -->
            <rect x="25" y="35" width="200" height="15" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
            <!-- Palisade Parenchyma (Vertical Columns) -->
            <rect x="30" y="52" width="12" height="40" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
            <rect x="44" y="52" width="12" height="40" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
            <rect x="58" y="52" width="12" height="40" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
            <rect x="72" y="52" width="12" height="40" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
            <rect x="86" y="52" width="12" height="40" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
            <!-- Spongy Mesophyll (Loose circles) -->
            <circle cx="40" cy="115" r="10" fill="#86efac"/>
            <circle cx="70" cy="125" r="12" fill="#86efac"/>
            <circle cx="100" cy="110" r="11" fill="#86efac"/>
            <!-- Vascular Bundle -->
            <circle cx="160" cy="95" r="22" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
            <text x="160" y="98" fill="#0284c7" font-size="8" font-weight="bold" text-anchor="middle">Vein</text>
            <!-- Abaxial Epidermis + Stomata -->
            <rect x="25" y="145" width="200" height="15" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
            <ellipse cx="60" cy="152" rx="6" ry="3" fill="#ffffff"/> <!-- Stoma -->
            <ellipse cx="120" cy="152" rx="6" ry="3" fill="#ffffff"/>
            
            <text x="125" y="180" fill="#0284c7" font-size="9" font-weight="bold" text-anchor="middle">Palisade + Spongy • Hypostomatic</text>
          </g>

          <!-- Monocot Leaf Section -->
          <g transform="translate(320, 45)">
            <rect width="250" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="8"/>
            <text x="125" y="20" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">Isobilateral Leaf (Monocot)</text>
            <!-- Adaxial Epidermis + Bulliform Cells -->
            <rect x="25" y="35" width="200" height="15" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
            <!-- Bulliform cells (large bubble shapes) -->
            <path d="M 80 35 Q 95 65 110 35 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
            <text x="95" y="48" fill="#0284c7" font-size="7" font-weight="bold" text-anchor="middle">Bulliform</text>
            <!-- Undifferentiated Mesophyll (All identical circles) -->
            <circle cx="40" cy="70" r="10" fill="#86efac"/>
            <circle cx="65" cy="70" r="10" fill="#86efac"/>
            <circle cx="130" cy="70" r="10" fill="#86efac"/>
            <circle cx="155" cy="70" r="10" fill="#86efac"/>
            <circle cx="40" cy="115" r="10" fill="#86efac"/>
            <circle cx="65" cy="115" r="10" fill="#86efac"/>
            <circle cx="130" cy="115" r="10" fill="#86efac"/>
            <circle cx="155" cy="115" r="10" fill="#86efac"/>
            <!-- Vascular Bundle -->
            <circle cx="95" cy="95" r="18" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
            <!-- Abaxial Epidermis -->
            <rect x="25" y="145" width="200" height="15" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
            <!-- Amphistomatic Stomata top and bottom -->
            <ellipse cx="40" cy="35" rx="5" ry="3" fill="#ffffff"/>
            <ellipse cx="40" cy="152" rx="5" ry="3" fill="#ffffff"/>
            
            <text x="125" y="180" fill="#15803d" font-size="9" font-weight="bold" text-anchor="middle">Undifferentiated • Bulliform Motor Cells</text>
          </g>
        </svg>`,
        caption: "Figure 2.3: Anatomical section comparing Dorsiventral Dicot Leaf (palisade/spongy differentiation) and Isobilateral Monocot Leaf (bulliform motor cells, uniform mesophyll).",
        guide: "Identify: 1. Dicot leaf has palisade columns under upper epidermis and spongy mesophyll with air spaces near lower epidermis. 2. Monocot leaf has large bulliform cells in upper epidermis for leaf rolling and uniform mesophyll."
      },
      tables: [
        {
          headers: ["Anatomical Feature", "Dorsiventral Leaf (Dicot)", "Isobilateral Leaf (Monocot)"],
          rows: [
            ["Stomatal Distribution", "Hypostomatic (Stomata significantly more numerous on abaxial/lower surface)", "Amphistomatic (Stomata distributed equally on both adaxial and abaxial surfaces)"],
            ["Mesophyll Differentiation", "Differentiated into upper Palisade Parenchyma (columnar) and lower Spongy Parenchyma (air cavities)", "UNDIFFERENTIATED; composed of uniform rounded chlorophyllous parenchyma cells"],
            ["Bulliform / Motor Cells", "Completely ABSENT", "PRESENT in adaxial epidermis along veins in grasses for leaf rolling"],
            ["Venation & Bundle Size", "Reticulate venation; vascular bundle sizes vary according to vein size", "Parallel venation; vascular bundle sizes are similar (except midrib)"],
            ["Bundle Sheath Extension", "Parenchymatous or collenchymatous extensions present", "Sclerenchymatous extensions present"]
          ]
        }
      ]
    }
  ],

  formulae: [],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto rounded-xl bg-white p-2">
      <rect width="600" height="200" fill="#f8fafc" rx="10"/>
      <text x="300" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">Diagnostic Decision Tree for Plant Organ Identification</text>
      <!-- Step 1 -->
      <rect x="20" y="50" width="160" height="40" fill="#0284c7" rx="6"/>
      <text x="100" y="74" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Check Protoxylem Position</text>
      <!-- Branch 1 -->
      <text x="100" y="108" fill="#0284c7" font-size="9" text-anchor="middle" font-weight="bold">Exarch = ROOT | Endarch = STEM</text>
      
      <!-- Step 2 -->
      <rect x="220" y="50" width="160" height="40" fill="#15803d" rx="6"/>
      <text x="300" y="74" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">If ROOT: Count Xylem</text>
      <text x="300" y="108" fill="#15803d" font-size="9" text-anchor="middle" font-weight="bold">2-4 = Dicot | >6 (Polyarch) = Monocot</text>

      <!-- Step 3 -->
      <rect x="420" y="50" width="160" height="40" fill="#b45309" rx="6"/>
      <text x="500" y="74" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">If STEM: Bundle Layout</text>
      <text x="500" y="108" fill="#b45309" font-size="9" text-anchor="middle" font-weight="bold">Ring = Dicot | Scattered = Monocot</text>
    </svg>`,
    caption: "NEET Exam Diagnostic Flowchart to instantly distinguish root vs stem and dicot vs monocot in microscopy questions."
  },

  neetImportantPoints: [
    "Endarch protoxylem occurs in STEMS; Exarch protoxylem occurs in ROOTS (AIPMT 2014).",
    "Casparian strips consist of suberin in root endodermis (NEET 2018).",
    "Monocot stem features: Scattered conjoint closed vascular bundles, sclerenchymatous bundle sheath, lysigenous water cavity, NO phloem parenchyma (NEET 2020).",
    "Dicot stem features: Collenchymatous hypodermis, ring arrangement of conjoint open vascular bundles, starch sheath endodermis, semilunar sclerenchymatous pericycle.",
    "Monocot root features: Polyarch (>6) xylem bundles and large well-developed pith with NO secondary growth.",
    "Bulliform cells in monocot/grass upper leaf epidermis cause leaf rolling under water stress to reduce transpiration.",
    "Root hairs arise from epiblema cells in the zone of maturation."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Exarch xylem (Roots) with Endarch xylem (Stems).",
      correctFact: "EXARCH = Protoxylem outside towards periphery (ROOTS). ENDARCH = Protoxylem inside towards center/pith (STEMS).",
      whyItMattersForNEET: "Crucial diagnostic feature tested in AIPMT 2014 to distinguish dicot root piece from dicot stem piece."
    },
    {
      commonConfusion: "Assuming monocot stems have a cortex and pith like dicot stems.",
      correctFact: "Monocot stems have UNDIFFERENTIATED ground tissue. Cortex, endodermis, pericycle, and pith are completely absent.",
      whyItMattersForNEET: "Options describing monocot stem frequently mention 'large pith' (FALSE; monocot stem has scattered bundles in ground tissue)."
    },
    {
      commonConfusion: "Confusing Hypostomatic leaf (Dicot) with Amphistomatic leaf (Monocot).",
      correctFact: "Dicot leaves have stomata mostly on lower/abaxial surface (hypostomatic). Monocot leaves have equal stomata on both surfaces (amphistomatic).",
      whyItMattersForNEET: "High-yield statement questions in NEET Biology."
    }
  ],

  quickRevision: [
    "ROOTS: Exarch xylem. Dicot root = 2-4 xylem arms + small pith. Monocot root = Polyarch (>6) + large pith.",
    "STEMS: Endarch xylem. Dicot stem = Ring arrangement + Collenchyma hypodermis + Open bundles. Monocot stem = Scattered closed bundles + Sclerenchyma hypodermis + Lysigenous water cavity.",
    "LEAVES: Dicot leaf = Dorsiventral + Hypostomatic + Palisade/Spongy mesophyll. Monocot leaf = Isobilateral + Amphistomatic + Bulliform cells.",
    "Casparian Strips = Suberin in root endodermis.",
    "Phloem Parenchyma = ABSENT in monocot stems."
  ],

  practiceQuestions: [
    {
      id: "prac-anatomy-01",
      questionText: "Which of the following anatomical features is characteristic of a monocotyledonous stem?",
      options: [
        "Vascular bundles arranged in a distinct ring around a central pith",
        "Scattered conjoint closed vascular bundles surrounded by a bundle sheath",
        "Collenchymatous hypodermis providing mechanical flexibility",
        "Presence of phloem parenchyma and open vascular cambium"
      ],
      correctAnswer: 1,
      explanation: "Monocot stems possess scattered conjoint closed vascular bundles surrounded by sclerenchymatous bundle sheaths in an undifferentiated ground tissue. Phloem parenchyma is absent.",
      difficulty: "Medium",
      topicId: "bio-root-stem-leaf-anatomy",
      conceptTested: "Monocot Stem Anatomy"
    },
    {
      id: "prac-anatomy-02",
      questionText: "Bulliform cells present in the upper epidermis of grass leaves function primarily to:",
      options: [
        "Store starch and proteins for winter survival",
        "Secrete digestive enzymes against herbivorous insects",
        "Minimize transpiration water loss by curling leaves inward during water stress",
        "Facilitate active uptake of mineral ions from rain water"
      ],
      correctAnswer: 2,
      explanation: "Bulliform (motor) cells are large, empty, colorless cells along veins in monocot leaves. Under water stress, they lose turgor and become flaccid, causing the leaf blades to roll inward to reduce exposed surface area and minimize transpiration.",
      difficulty: "Easy",
      topicId: "bio-root-stem-leaf-anatomy",
      conceptTested: "Bulliform Cell Function"
    }
  ],

  pyqs: [
    {
      id: "pyq-rootstem-01",
      exam: "NEET 2020",
      year: 2020,
      questionText: "The transverse section of a plant shows the following anatomical features: (a) Large number of scattered vascular bundles surrounded by bundle sheath. (b) Large, conspicuous parenchymatous ground tissue. (c) Vascular bundles conjoint and closed. (d) Phloem parenchyma absent. Identify the category of plant and its part:",
      options: [
        "Dicotyledonous stem",
        "Dicotyledonous root",
        "Monocotyledonous stem",
        "Monocotyledonous root"
      ],
      correctAnswer: 2,
      explanation: "All four features listed (scattered bundles with bundle sheath, undifferentiated parenchymatous ground tissue, conjoint closed bundles, absence of phloem parenchyma) are classic diagnostic anatomical hallmarks of a Monocotyledonous Stem.",
      topicId: "bio-root-stem-leaf-anatomy",
      difficulty: "Medium",
      conceptTested: "Monocot Stem Identification",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.3.2",
      verified: true
    },
    {
      id: "pyq-rootstem-02",
      exam: "NEET 2018",
      year: 2018,
      questionText: "Casparian strips occur in:",
      options: [
        "Epidermis",
        "Pericycle",
        "Endodermis",
        "Cortex"
      ],
      correctAnswer: 2,
      explanation: "Casparian strips are continuous bands of suberin deposition present on the radial and tangential cell walls of the Endodermis in plant roots, making it impermeable to water and solute movement via apoplast.",
      topicId: "bio-root-stem-leaf-anatomy",
      difficulty: "Easy",
      conceptTested: "Endodermis Casparian Strips",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.3.1",
      verified: true
    },
    {
      id: "pyq-rootstem-03",
      exam: "AIPMT 2015",
      year: 2015,
      questionText: "A major characteristic of the monocot root is the presence of:",
      options: [
        "Vasculature without cambium and polyarch xylem with large pith",
        "Cambium sandwiched between phloem and xylem",
        "Open vascular bundles arranged in a ring",
        "Scattered vascular bundles throughout ground tissue"
      ],
      correctAnswer: 0,
      explanation: "Monocot roots feature polyarch xylem bundles (more than 6 patches) encircling a large, well-developed parenchymatous pith, without vascular cambium (hence no secondary growth).",
      topicId: "bio-root-stem-leaf-anatomy",
      difficulty: "Medium",
      conceptTested: "Monocot Root Anatomy",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.3.1.2",
      verified: true
    },
    {
      id: "pyq-rootstem-04",
      exam: "AIPMT 2014",
      year: 2014,
      questionText: "You are given a fairly old piece of dicot stem and a dicot root. Which of the following anatomical structures will you use to distinguish between the two?",
      options: [
        "Secondary xylem",
        "Secondary phloem",
        "Protoxylem",
        "Cortical cells"
      ],
      correctAnswer: 2,
      explanation: "Primary xylem position is the key diagnostic feature: Stems have ENDARCH protoxylem (protoxylem towards center/pith), whereas Roots have EXARCH protoxylem (protoxylem towards periphery). Even in older pieces, primary xylem (protoxylem) persists at the center.",
      topicId: "bio-root-stem-leaf-anatomy",
      difficulty: "Hard",
      conceptTested: "Protoxylem Arrangement (Exarch vs Endarch)",
      ncertReference: "Class 11 NCERT Biology, Chapter 6, Section 6.1.2.1",
      verified: true
    }
  ]
};
