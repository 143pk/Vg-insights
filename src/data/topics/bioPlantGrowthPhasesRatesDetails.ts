import { DetailedTopicContent } from '../../types/neet';

export const bioPlantGrowthPhasesRatesDetails: DetailedTopicContent = {
  topicId: "bio-plant-growth-phases-rates",
  topicName: "Plant Growth, Growth Rates, Differentiation, Development & Plasticity",
  subject: "Biology",
  class: "Class 11",
  classification: "Plant Physiology",
  chapter: "Plant Growth and Development",

  whatIsThisTopic: "Growth is an irreversible permanent increase in size, dry mass, or cell number accompanied by metabolic processes. Plant growth is open and indeterminate due to meristems. Growth follows arithmetic (L_t = L_0 + rt) or geometric (W_1 = W_0 e^{rt}) patterns, producing a characteristic Sigmoid Growth Curve. Cells undergo Differentiation, Dedifferentiation, and Redifferentiation to achieve specialized structures. Development includes growth and differentiation, demonstrating Plasticity (Heterophylly in Cotton, Coriander, Larkspur, and Buttercup).",

  basicIdea: [
    "Growth is an irreversible, permanent increase in size, surface area, volume, or dry mass of an organism or its parts, accompanied by energetic metabolic processes (both anabolic and catabolic).",
    "Indeterminate & Open Growth: Unlike animals which show determinate growth, plants possess the unique capacity for unlimited continuous growth throughout life due to the presence of MERISTEMS at specific regions (RAM and SAM for primary elongation; Vascular and Cork Cambium for secondary girth expansion).",
    "Phases of Growth: 1) Meristematic Phase (rapid cell division, thin cellulosic walls, rich protoplasm, large nucleus); 2) Elongation Phase (increased vacuolation, cell enlargement, new cell wall deposition); 3) Maturation Phase (maximal wall thickening, protoplasmic modifications, structural differentiation).",
    "Arithmetic Growth: Only ONE daughter cell continues to divide after mitosis while the other differentiates (e.g., root elongating at a constant rate). Represented mathematically as L_t = L_0 + rt (linear graph).",
    "Geometric Growth: BOTH daughter cells retain the capacity to divide, leading to exponential cell population doubling (1 -> 2 -> 4 -> 8 -> 16). Represented mathematically as W_1 = W_0 e^{rt} (Sigmoid S-curve in natural conditions with Lag, Log, and Stationary phases).",
    "Absolute Growth Rate (AGR) vs. Relative Growth Rate (RGR): AGR is total growth per unit time. RGR is growth per unit time relative to initial size (Efficiency Index). Two leaves can have identical AGR (5 cm²) but vastly different RGR (Leaf A = 100%, Leaf B = 10%).",
    "Differentiation, Dedifferentiation, Redifferentiation: Differentiation = meristems mature into specialized cells (loss of division capacity, e.g., tracheary elements); Dedifferentiation = mature living cells regain division capacity (e.g., parenchymal cells forming interfascicular cambium/cork cambium); Redifferentiation = dedifferentiated cells again lose division capacity to form mature secondary tissues (e.g., secondary xylem/phloem, cork).",
    "Development & Plasticity: Development = Growth + Differentiation. Plasticity is the ability of plants to alter their structure/developmental pathway in response to environment or life phases. Heterophylly is seen as developmental plasticity in Cotton, Coriander, Larkspur and as environmental plasticity in Buttercup (Ranunculus)."
  ],

  importantTerms: [
    {
      term: "Indeterminate Growth",
      definition: "Unlimited continuous growth throughout the lifespan of a plant made possible by the persistent activity of meristems at root and shoot tips.",
      neetNote: "NEET Key Point: Plant growth is 'open' because new cells are perpetually added to the plant body by meristems."
    },
    {
      term: "Arithmetic Growth",
      definition: "A growth pattern in which only one daughter cell retains the capacity to divide after mitosis while the other undergoes differentiation.",
      neetNote: "Formula: L_t = L_0 + rt. Produces a straight linear graph with constant growth rate 'r'."
    },
    {
      term: "Geometric Growth",
      definition: "An exponential growth pattern in which both daughter cells resulting from mitotic division retain the capacity to divide.",
      neetNote: "Formula: W_1 = W_0 e^{rt}. 'r' represents the Relative Growth Rate or Efficiency Index."
    },
    {
      term: "Sigmoid Growth Curve",
      definition: "An S-shaped growth curve characteristic of living organisms growing in natural environments, consisting of Lag, Log (Exponential), and Stationary phases.",
      neetNote: "Stationary phase occurs due to limited space, nutrient depletion, and metabolic waste accumulation."
    },
    {
      term: "Dedifferentiation",
      definition: "The phenomenon where mature, living differentiated cells that have lost the capacity to divide REGAIN the power of cell division under specific conditions.",
      neetNote: "NCERT Examples: Interfascicular cambium and Cork cambium (Phellogen) formed from differentiated parenchymal cells."
    },
    {
      term: "Plasticity & Heterophylly",
      definition: "Plasticity is the capacity of plants to form different structural forms in response to environment or phases of life. Heterophylly is the occurrence of different leaf shapes on the same plant.",
      neetNote: "Developmental Heterophylly: Cotton, Coriander, Larkspur. Environmental Heterophylly: Buttercup (Ranunculus)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Fundamentals of Plant Growth & Open Indeterminate Growth",
      paragraphs: [
        "Growth is one of the most fundamental and conspicuous characteristics of living organisms. Biochemically, growth is defined as an irreversible permanent increase in size, volume, surface area, or dry mass of a cell, organ, or entire organism, accompanied by metabolic processes requiring chemical energy (ATP).",
        "• Why Plant Growth is Unique (Indeterminate & Open Growth):",
        "  - Animal growth is determinate; animals stop growing after reaching adult maturity, and all body parts grow in a fixed proportion.",
        "  - Plant growth is INDETERMINATE and OPEN because plants retain perpetual meristematic regions (Root Apical Meristem - RAM, and Shoot Apical Meristem - SAM) that continuously produce new cells throughout the plant's life.",
        "• Primary vs. Secondary Growth:",
        "  - Primary Growth: Apical meristems (RAM & SAM) and intercalary meristems cause elongation of plant organs along their primary longitudinal axis.",
        "  - Secondary Growth: Lateral meristems (Vascular Cambium and Cork Cambium / Phellogen) appear later in gymnosperms and dicotyledonous plants to increase the girth/girth expansion of stems and roots.",
        "• Parameters for Measuring Growth:",
        "  - Cell Number: A single maize root apical meristem can give rise to over 17,500 new cells per hour!",
        "  - Cell Size: A single watermelon cell can increase in volume by up to 3,500,000 times!",
        "  - Dry Mass / Fresh Mass, Length (pollen tube growth), Surface Area (dorsiventral leaf expansion), and Volume."
      ],
      importantPoints: [
        "Plant growth is 'open' because new cells are continuously added by persistent apical meristems.",
        "Maize RAM produces > 17,500 cells/hour (measured by cell number).",
        "Watermelon cell size increases up to 3.5 lakh (350,000) to 35 lakh (3,500,000) times in volume."
      ]
    },
    {
      heading: "2. Three Phases of Plant Growth",
      paragraphs: [
        "Root and shoot growth occurs in three distinct, sequential zones or phases along the longitudinal axis:",
        "1. MERISTEMATIC PHASE (Zone of Cell Division):",
        "   - Location: Apex of root tip and shoot tip.",
        "   - Cell Characteristics: Cells are constantly dividing, spherical/isodiametric, rich in dense protoplasm, possess large conspicuous nuclei, thin cellulosic primary cell walls, and abundant plasmodesmatal connections.",
        "2. ELONGATION PHASE (Zone of Cell Enlargement):",
        "   - Location: Lies immediately proximal (just behind) the meristematic zone.",
        "   - Cell Characteristics: Marked by increased vacuolation (small vacuoles fuse into a large central vacuole), rapid cell enlargement/elongation, and new cell wall material deposition.",
        "3. MATURATION PHASE (Zone of Cell Differentiation):",
        "   - Location: Lies proximal to the elongation zone.",
        "   - Cell Characteristics: Cells attain their maximum size in terms of wall thickening and protoplasmic modifications; cells differentiate into specialized mature tissues (e.g., epidermal cells forming root hairs, xylem tracheids developing lignified walls)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="320" fill="#0f172a" rx="12"/>
          <text x="290" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THREE PHASES OF PLANT GROWTH (ROOT TIP ZONATION)</text>

          <!-- Zone 3: Maturation Zone -->
          <g transform="translate(40, 50)">
            <rect x="0" y="0" width="500" height="70" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="8"/>
            <text x="15" y="25" fill="#34d399" font-size="11" font-weight="bold">3. MATURATION PHASE (Zone of Differentiation)</text>
            <text x="15" y="45" fill="#cbd5e1" font-size="9">• Maximal cell wall thickening &amp; protoplasmic modifications</text>
            <text x="15" y="60" fill="#cbd5e1" font-size="9">• Differentiated tissues (e.g., Root Hairs, Tracheary elements)</text>
            <!-- Root hairs representation -->
            <path d="M 450 -10 L 450 0 M 470 -10 L 470 0" stroke="#34d399" stroke-width="2"/>
          </g>

          <!-- Arrow -->
          <path d="M 290 120 L 290 135" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-blue)"/>

          <!-- Zone 2: Elongation Zone -->
          <g transform="translate(40, 140)">
            <rect x="0" y="0" width="500" height="65" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="8"/>
            <text x="15" y="22" fill="#fbbf24" font-size="11" font-weight="bold">2. ELONGATION PHASE (Zone of Cell Enlargement)</text>
            <text x="15" y="42" fill="#cbd5e1" font-size="9">• Increased vacuolation &amp; rapid cell enlargement</text>
            <text x="15" y="56" fill="#cbd5e1" font-size="9">• New cellulosic cell wall deposition</text>
          </g>

          <!-- Arrow -->
          <path d="M 290 205 L 290 220" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-blue)"/>

          <!-- Zone 1: Meristematic Zone -->
          <g transform="translate(40, 225)">
            <rect x="0" y="0" width="500" height="65" fill="#1e293b" stroke="#ef4444" stroke-width="2" rx="8"/>
            <text x="15" y="22" fill="#f87171" font-size="11" font-weight="bold">1. MERISTEMATIC PHASE (Zone of Active Division)</text>
            <text x="15" y="42" fill="#cbd5e1" font-size="9">• Apex of root/shoot; cells constantly dividing</text>
            <text x="15" y="56" fill="#cbd5e1" font-size="9">• Rich protoplasm, prominent nucleus, thin primary cell walls</text>
          </g>

          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Zonation of Root Tip illustrating Meristematic, Elongation, and Maturation Phases.",
        guide: "WHAT TO OBSERVE: Meristematic zone is at the extreme tip. Elongation zone is proximal to meristematic zone and causes length increase. Maturation zone is furthest from apex and forms specialized root hairs."
      },
      importantPoints: [
        "Increased vacuolation is the hallmark of the ELONGATION phase.",
        "Thin cellulosic walls with rich protoplasm and plasmodesmata characterize the MERISTEMATIC phase.",
        "Maximal cell wall thickening occurs in the MATURATION phase."
      ]
    },
    {
      heading: "3. Growth Rates: Arithmetic vs. Geometric Growth & Sigmoid Curve",
      paragraphs: [
        "Growth Rate is defined as the increased growth per unit time. Growth rates can be arithmetic or geometric depending on the fate of daughter cells after mitotic division.",
        "--- A. ARITHMETIC GROWTH ---",
        "• Mechanism: Following mitotic cell division, only ONE daughter cell continues to divide while the other differentiates and matures (e.g., root elongating at a constant rate).",
        "• Mathematical Formula:",
        "  L_t = L_0 + rt",
        "  Where: L_t = length at time 't', L_0 = length at time 'zero', r = growth rate / elongation per unit time, t = time.",
        "• Graph Shape: A linear straight line graph with constant slope 'r' when plotting length against time.",
        "--- B. GEOMETRIC GROWTH ---",
        "• Mechanism: BOTH daughter cells resulting from mitotic division retain the capacity to divide, leading to exponential cell population doubling (1 -> 2 -> 4 -> 8 -> 16 -> 32...).",
        "• Mathematical Formula:",
        "  W_1 = W_0 e^{rt}",
        "  Where: W_1 = final size (weight, height, number), W_0 = initial size at time zero, r = relative growth rate (also called Efficiency Index), t = time of growth, e = base of natural logarithms (~2.718).",
        "--- C. SIGMOID GROWTH CURVE (S-CURVE) ---",
        "• Unrestricted exponential geometric growth cannot continue indefinitely in nature due to limited nutrient availability, space constraints, and accumulation of metabolic wastes.",
        "• Typical Sigmoid Curve Phases:",
        "  1. Lag Phase: Initial slow growth period where cells adapt and synthesize metabolic machinery.",
        "  2. Log / Exponential Phase: Period of rapid, maximum growth where cell division occurs at a constant exponential rate.",
        "  3. Stationary Phase: Growth slows down and reaches plateau/steady state as nutrient supply becomes limiting."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="300" fill="#0f172a" rx="12"/>
          <text x="290" y="22" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ARITHMETIC VS GEOMETRIC (SIGMOID) GROWTH CURVES</text>

          <!-- Axes Left: Arithmetic -->
          <g transform="translate(50, 40)">
            <line x1="30" y1="200" x2="220" y2="200" stroke="#94a3b8" stroke-width="2"/>
            <line x1="30" y1="200" x2="30" y2="40" stroke="#94a3b8" stroke-width="2"/>
            <text x="125" y="230" fill="#94a3b8" font-size="10" text-anchor="middle">Time (t)</text>
            <text x="15" y="120" fill="#94a3b8" font-size="10" text-anchor="middle" transform="rotate(-90 15,120)">Height / Length (L)</text>

            <line x1="30" y1="180" x2="200" y2="60" stroke="#38bdf8" stroke-width="3"/>
            <text x="115" y="30" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Arithmetic: L_t = L_0 + rt</text>
          </g>

          <!-- Axes Right: Geometric Sigmoid -->
          <g transform="translate(310, 40)">
            <line x1="30" y1="200" x2="230" y2="200" stroke="#94a3b8" stroke-width="2"/>
            <line x1="30" y1="200" x2="30" y2="40" stroke="#94a3b8" stroke-width="2"/>
            <text x="130" y="230" fill="#94a3b8" font-size="10" text-anchor="middle">Time (t)</text>
            <text x="15" y="120" fill="#94a3b8" font-size="10" text-anchor="middle" transform="rotate(-90 15,120)">Size / Weight (W)</text>

            <!-- Sigmoid curve -->
            <path d="M 30 190 Q 70 185 100 150 T 170 60 L 220 60" fill="none" stroke="#10b981" stroke-width="3"/>
            <text x="60" y="175" fill="#f59e0b" font-size="9" font-weight="bold">Lag</text>
            <text x="115" y="110" fill="#34d399" font-size="9" font-weight="bold">Log (Exp)</text>
            <text x="185" y="50" fill="#ef4444" font-size="9" font-weight="bold">Stationary</text>
            <text x="130" y="30" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Sigmoid: W_1 = W_0 e^{rt}</text>
          </g>
        </svg>`,
        caption: "Comparison of Arithmetic Linear Growth vs Geometric Sigmoid S-Curve Growth.",
        guide: "WHAT TO OBSERVE: Arithmetic growth yields a linear straight line with equation L_t = L_0 + rt. Geometric growth in limited natural systems yields an S-shaped Sigmoid curve with Lag, Log, and Stationary phases (W_1 = W_0 e^{rt})."
      },
      importantPoints: [
        "Arithmetic growth equation: L_t = L_0 + rt (Linear graph).",
        "Geometric growth equation: W_1 = W_0 e^{rt} (Exponential / Sigmoid curve).",
        "In W_1 = W_0 e^{rt}, 'r' is the Relative Growth Rate, also called the Efficiency Index."
      ]
    },
    {
      heading: "4. Absolute Growth Rate (AGR) vs. Relative Growth Rate (RGR)",
      paragraphs: [
        "Growth rates can be evaluated and compared using two distinct parameters:",
        "1. ABSOLUTE GROWTH RATE (AGR):",
        "   - Definition: The total measurement of growth per unit time.",
        "   - Formula: AGR = ΔSize / Δt.",
        "2. RELATIVE GROWTH RATE (RGR):",
        "   - Definition: Growth per unit time expressed relative to the initial size/parameter.",
        "   - Formula: RGR = (ΔSize) / (Initial Size × Δt).",
        "--- STEP-BY-STEP NCERT SOLVED NUMERICAL EXAMPLE ---",
        "Consider two leaves, Leaf A and Leaf B, expanding over a time interval Δt:",
        "• LEAF A:",
        "  - Initial surface area = 5 cm²",
        "  - Final surface area = 10 cm²",
        "  - Absolute Growth = 10 - 5 = 5 cm²",
        "  - Relative Growth Rate = (5 cm²) / (5 cm²) = 1.0 = 100%",
        "• LEAF B:",
        "  - Initial surface area = 50 cm²",
        "  - Final surface area = 55 cm²",
        "  - Absolute Growth = 55 - 50 = 5 cm²",
        "  - Relative Growth Rate = (5 cm²) / (50 cm²) = 0.1 = 10%",
        "Conclusion for NEET: Both leaves show EXACTLY EQUAL Absolute Growth (5 cm²), but Leaf A shows a MUCH HIGHER Relative Growth Rate (100% vs 10%) because its initial size was much smaller!"
      ],
      importantPoints: [
        "Leaf A (5 -> 10 cm²) and Leaf B (50 -> 55 cm²) have EQUAL absolute growth (5 cm²).",
        "Leaf A has 100% relative growth rate; Leaf B has 10% relative growth rate.",
        "Relative growth rate measures the efficiency of generating new tissue per unit initial tissue."
      ]
    },
    {
      heading: "5. Essential Conditions Necessary for Growth",
      paragraphs: [
        "Plant growth requires specific external and internal environmental conditions:",
        "1. Water: Essential for cell enlargement; turgidity of cells drives expansion. Water also provides the medium for enzymatic biochemical reactions.",
        "2. Oxygen: Essential for aerobic respiration to break down substrates and generate ATP necessary for anabolic growth processes.",
        "3. Nutrients (Macro & Micronutrients): Required for synthesis of protoplasm, structural polymers, and cofactors for enzymes.",
        "4. Temperature: Every plant has an optimum temperature range (usually 20°C - 35°C). Temperatures outside this range inhibit growth by denaturing enzymes or slowing kinetics.",
        "5. Light & Gravity: Provide directional signals (environmental cues) for tropisms (phototropism, gravitropism) and photomorphogenesis."
      ],
      importantPoints: [
        "Cell turgidity driven by water uptake is the direct physical force for cell enlargement.",
        "Oxygen supplies ATP via respiration for anabolic growth."
      ]
    },
    {
      heading: "6. Differentiation, Dedifferentiation & Redifferentiation",
      paragraphs: [
        "The developmental journey of plant cells involves three major cell state transitions:",
        "--- A. DIFFERENTIATION ---",
        "• Definition: The structural and functional specialization of meristematic cells (derived from RAM, SAM, or cambium) into mature functional cells.",
        "• Cellular Changes: Cells lose the capacity to divide, undergo major cell wall thickenings and protoplasmic modifications.",
        "• NCERT Example: Formation of TRACHEARY ELEMENTS (xylem vessels/tracheids). To form tracheary elements, cells lose their protoplasm completely (become dead) and develop very strong, elastic, lignified secondary cell wall thickenings to withstand extreme negative pressure tension during water transport.",
        "--- B. DEDIFFERENTIATION ---",
        "• Definition: The phenomenon where mature, living differentiated cells that have lost the capacity to divide REGAIN the capacity to divide under specific conditions.",
        "• NCERT Examples: Fully differentiated living parenchyma cells dedifferentiate to form Interfascicular Cambium (in vascular bundle regions) and Cork Cambium / Phellogen (in cortex).",
        "--- C. REDIFFERENTIATION ---",
        "• Definition: Dedifferentiated meristematic cells (like interfascicular cambium or cork cambium) divide and once again lose the capacity to divide, maturing into specialized secondary structures.",
        "• NCERT Examples: Secondary Xylem, Secondary Phloem, Cork (Phellem), and Secondary Cortex (Phelloderm)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="200" fill="#0f172a" rx="12"/>
          <text x="290" y="24" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">CELLULAR TRANSITIONS: DIFFERENTIATION → DEDIFFERENTIATION → REDIFFERENTIATION</text>

          <!-- Step 1: Meristem -->
          <g transform="translate(30, 60)">
            <rect x="0" y="0" width="110" height="80" fill="#0284c7" rx="8"/>
            <text x="55" y="35" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Meristematic</text>
            <text x="55" y="50" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Cells</text>
            <text x="55" y="68" fill="#bae6fd" font-size="8" text-anchor="middle">(RAM / SAM)</text>
          </g>

          <path d="M 145 100 L 175 100" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="160" y="90" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">Differentiation</text>

          <!-- Step 2: Primary Mature -->
          <g transform="translate(180, 60)">
            <rect x="0" y="0" width="110" height="80" fill="#059669" rx="8"/>
            <text x="55" y="35" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Primary Mature</text>
            <text x="55" y="50" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Cells</text>
            <text x="55" y="68" fill="#a7f3d0" font-size="8" text-anchor="middle">(Parenchyma)</text>
          </g>

          <path d="M 295 100 L 325 100" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-yellow)"/>
          <text x="310" y="90" fill="#f59e0b" font-size="8" font-weight="bold" text-anchor="middle">Dedifferentiation</text>

          <!-- Step 3: Secondary Meristem -->
          <g transform="translate(330, 60)">
            <rect x="0" y="0" width="110" height="80" fill="#d97706" rx="8"/>
            <text x="55" y="35" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Secondary</text>
            <text x="55" y="50" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Meristems</text>
            <text x="55" y="68" fill="#fef08a" font-size="8" text-anchor="middle">(Cork Cambium)</text>
          </g>

          <path d="M 445 100 L 475 100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
          <text x="460" y="90" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">Redifferentiation</text>

          <!-- Step 4: Secondary Mature -->
          <g transform="translate(480, 60)">
            <rect x="0" y="0" width="80" height="80" fill="#059669" rx="8"/>
            <text x="40" y="35" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Secondary</text>
            <text x="40" y="50" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Tissue</text>
            <text x="40" y="68" fill="#a7f3d0" font-size="8" text-anchor="middle">(Cork/Xylem II)</text>
          </g>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
            </marker>
            <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Sequence of Cellular Differentiation, Dedifferentiation, and Redifferentiation.",
        guide: "WHAT TO OBSERVE: Primary parenchyma (differentiated) undergoes dedifferentiation to form interfascicular/cork cambium (secondary meristem). Secondary meristems undergo redifferentiation to form secondary xylem/phloem and cork."
      },
      importantPoints: [
        "Formation of Tracheary elements (losing protoplasm + lignification) = Differentiation.",
        "Formation of Interfascicular Cambium and Cork Cambium from parenchyma = Dedifferentiation.",
        "Formation of Secondary Xylem/Phloem and Cork (Phellem) from cambium = Redifferentiation."
      ]
    },
    {
      heading: "7. Development & Plasticity (Heterophylly NCERT Examples)",
      paragraphs: [
        "Development is a broad comprehensive term that encompasses all structural and functional changes an organism undergoes during its lifecycle from seed germination to senescence.",
        "• Development Equation: Development = Growth + Differentiation.",
        "• PLASTICITY: The inherent ability of plants to follow different developmental pathways in response to environmental cues or phases of life to form different kinds of structures.",
        "• HETEROPHYLLY (Occurrence of different leaf shapes on the same plant):",
        "  1. Developmental Plasticity (Intrinsic Phase-Dependent): Leaf shapes in juvenile phase differ from leaf shapes in mature phase on the same plant.",
        "     - NCERT Examples: Cotton, Coriander, and Larkspur (Delphinium).",
        "  2. Environmental Plasticity (Extrinsic Environment-Dependent): Leaf shapes produced in air (terrestrial habitat) differ markedly from leaf shapes produced in water (submerged aquatic habitat).",
        "     - NCERT Example: Buttercup (Ranunculus aquaticus)."
      ],
      importantPoints: [
        "Developmental Heterophylly NCERT examples = Cotton, Coriander, Larkspur.",
        "Environmental Heterophylly NCERT example = Buttercup (Ranunculus).",
        "Development includes all processes from seed germination to senescence."
      ]
    }
  ],

  formulae: [
    {
      title: "Arithmetic Growth Rate Formula",
      formula: "L_t = L_0 + rt",
      meaning: "Linear growth where length increases at a constant rate 'r' per unit time.",
      symbols: "L_t = Length at time t, L_0 = Initial length at time 0, r = growth rate, t = time",
      conditions: "Occurs when only 1 daughter cell divides after mitosis while the other differentiates.",
      whenToUse: "Calculating root elongation or linear growth rate."
    },
    {
      title: "Geometric Growth Rate Formula",
      formula: "W_1 = W_0 e^{rt}",
      meaning: "Exponential growth where both daughter cells divide continuously.",
      symbols: "W_1 = Final size, W_0 = Initial size, r = Relative growth rate (Efficiency Index), t = time, e = 2.718",
      conditions: "Early embryo development or unicellular growth in culture before resources become limiting.",
      whenToUse: "Calculating exponential growth or relative growth rate."
    },
    {
      title: "Relative Growth Rate (RGR) Formula",
      formula: "\\text{RGR} = \\frac{\\text{Final Size} - \\text{Initial Size}}{\\text{Initial Size} \\times \\text{Time interval}} \\times 100\\%",
      meaning: "Measures efficiency of generating new plant mass relative to initial plant mass.",
      symbols: "RGR = Relative Growth Rate",
      conditions: "Comparing growth efficiency of organs with different initial sizes.",
      whenToUse: "NCERT leaf expansion numerical comparison questions."
    }
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ["Growth Parameter", "Arithmetic Growth", "Geometric Growth"],
      rows: [
        ["Cell Division Pattern", "1 daughter cell divides, 1 differentiates", "Both daughter cells divide"],
        ["Growth Rate", "Constant growth rate", "Exponentially increasing rate"],
        ["Mathematical Equation", "L_t = L_0 + rt", "W_1 = W_0 e^{rt}"],
        ["Graph Plot Shape", "Linear straight line", "Sigmoid S-curve (in natural environment)"],
        ["NCERT Example", "Elongating root apex at constant rate", "Early embryonic development; unicellular culture"]
      ]
    },
    caption: "Comparative Summary of Arithmetic vs. Geometric Growth."
  },

  neetImportantPoints: [
    "Plant growth is open because new cells are continuously added by persistent apical meristems.",
    "Meristematic cells have thin primary cellulosic walls, prominent nuclei, and rich protoplasm.",
    "Elongation phase is characterized by increased vacuolation and cell enlargement.",
    "Arithmetic growth equation: L_t = L_0 + rt (Linear graph).",
    "Geometric growth equation: W_1 = W_0 e^{rt} (Sigmoid S-curve in natural conditions).",
    "In W_1 = W_0 e^{rt}, 'r' is the Relative Growth Rate or Efficiency Index.",
    "Leaf A (5 -> 10 cm²) and Leaf B (50 -> 55 cm²) have equal absolute growth (5 cm²), but Leaf A has 100% relative growth rate vs Leaf B (10%).",
    "Formation of Tracheary elements = Differentiation (loss of protoplasm + lignification).",
    "Formation of Interfascicular Cambium & Cork Cambium from parenchyma = Dedifferentiation.",
    "Formation of Secondary Xylem/Phloem and Cork (Phellem) = Redifferentiation.",
    "Developmental Heterophylly NCERT examples = Cotton, Coriander, Larkspur.",
    "Environmental Heterophylly NCERT example = Buttercup (Ranunculus)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Absolute Growth Rate with Relative Growth Rate.",
      correctFact: "Absolute growth rate is total growth per unit time (ΔSize). Relative growth rate is growth relative to initial size (ΔSize / Initial Size). Two organs can have identical absolute growth but vastly different relative growth rates.",
      whyItMattersForNEET: "Direct NCERT numerical comparison question tested in NEET UG."
    },
    {
      commonConfusion: "Mixing up Dedifferentiation and Redifferentiation examples.",
      correctFact: "Formation of meristems (interfascicular cambium, cork cambium) from mature parenchyma is DEDIFFERENTIATION. Formation of mature secondary tissues (cork, secondary xylem) from cambium is REDIFFERENTIATION.",
      whyItMattersForNEET: "Frequently tested assertion-reason trap in NEET UG."
    },
    {
      commonConfusion: "Confusing Developmental Heterophylly with Environmental Heterophylly.",
      correctFact: "Developmental Heterophylly occurs due to phases of life (Cotton, Coriander, Larkspur). Environmental Heterophylly occurs due to air vs water environment (Buttercup / Ranunculus).",
      whyItMattersForNEET: "High-yield NCERT example matching trap in NEET UG."
    }
  ],

  quickRevision: [
    "Indeterminate growth = Persistent meristems (RAM/SAM for primary; Cambium for secondary).",
    "Phases: Meristematic (thin wall, rich protoplasm) -> Elongation (vacuolation) -> Maturation (wall thickening).",
    "Arithmetic: L_t = L_0 + rt (1 divides, 1 differentiates; Linear).",
    "Geometric: W_1 = W_0 e^{rt} (Both divide; Sigmoid S-curve: Lag -> Log -> Stationary).",
    "r = Relative Growth Rate / Efficiency Index.",
    "Absolute Growth = Net increase; Relative Growth = (Net increase / Initial size).",
    "Differentiation = Tracheary elements (lignified walls, dead protoplasm).",
    "Dedifferentiation = Parenchyma -> Interfascicular & Cork Cambium.",
    "Redifferentiation = Cambium -> Secondary xylem/phloem & Cork.",
    "Plasticity: Heterophylly in Cotton, Coriander, Larkspur (developmental) and Buttercup (environmental)."
  ],

  practiceQuestions: [
    {
      id: "prac-growth-1",
      questionText: "Which of the following cellular characteristics is specifically associated with the ELONGATION phase of plant growth?",
      options: [
        "Thin cellulosic walls with rich protoplasm and plasmodesmata",
        "Increased vacuolation, cell enlargement, and new cell wall deposition",
        "Maximal cell wall thickening and structural differentiation",
        "Loss of protoplasm and lignification of secondary cell walls"
      ],
      correctOption: 1,
      explanation: "The Elongation phase is characterized by increased vacuolation, cell enlargement, and new cellulosic cell wall deposition. Thin cellulosic walls with rich protoplasm belong to the meristematic phase, while maximal thickening belongs to maturation.",
      difficulty: "Easy",
      conceptTested: "Phases of plant growth"
    },
    {
      id: "prac-growth-2",
      questionText: "If a leaf with an initial surface area of 5 cm² grows to 10 cm² in time t, and another leaf with an initial surface area of 50 cm² grows to 55 cm² in time t, what can be concluded about their growth rates?",
      options: [
        "Leaf A has higher absolute growth and higher relative growth rate than Leaf B.",
        "Both leaves have equal absolute growth, but Leaf A has a higher relative growth rate.",
        "Both leaves have equal relative growth rates, but Leaf B has a higher absolute growth.",
        "Leaf B has higher absolute growth and lower relative growth rate than Leaf A."
      ],
      correctOption: 1,
      explanation: "Absolute growth for both leaves = 10 - 5 = 5 cm² and 55 - 50 = 5 cm² (EQUAL). Relative growth rate for Leaf A = 5/5 = 100%, whereas for Leaf B = 5/50 = 10%. Thus, Leaf A has a much higher relative growth rate.",
      difficulty: "Medium",
      conceptTested: "Absolute vs Relative Growth Rate"
    }
  ],

  pyqs: [
    {
      id: "pyq-growth-1",
      year: 2022,
      exam: "NEET UG",
      questionText: "The process of dedifferentiation in plants is best exemplified by:",
      options: [
        "Formation of tracheary elements from apical meristems",
        "Formation of interfascicular cambium and cork cambium from parenchyma cells",
        "Formation of secondary xylem and secondary phloem from vascular cambium",
        "Formation of root hair cells from epidermal cells"
      ],
      correctOption: 1,
      explanation: "Dedifferentiation is the phenomenon where mature, living differentiated cells (such as parenchyma) regain the capacity to divide to form meristems like interfascicular cambium and cork cambium.",
      difficulty: "Easy",
      topicTested: "Dedifferentiation in plants",
      verified: true
    },
    {
      id: "pyq-growth-2",
      year: 2020,
      exam: "NEET UG",
      questionText: "Heterophylly expressing plasticity is observed in which of the following plants due to environmental difference?",
      options: [
        "Cotton",
        "Coriander",
        "Larkspur",
        "Buttercup"
      ],
      correctOption: 3,
      explanation: "Buttercup (Ranunculus) shows environmental heterophylly where terrestrial leaves differ in shape from submerged aquatic leaves. Cotton, Coriander, and Larkspur show developmental heterophylly.",
      difficulty: "Medium",
      topicTested: "Environmental Plasticity and Heterophylly",
      verified: true
    },
    {
      id: "pyq-growth-3",
      year: 2019,
      exam: "NEET UG",
      questionText: "In exponential growth equation W_1 = W_0 e^{rt}, 'r' represents:",
      options: [
        "Efficiency index and relative growth rate",
        "Absolute growth rate only",
        "Lag phase duration",
        "Turgor pressure index"
      ],
      correctOption: 0,
      explanation: "In the geometric exponential growth equation W_1 = W_0 e^{rt}, 'r' is the relative growth rate and is also termed the efficiency index of the plant.",
      difficulty: "Easy",
      topicTested: "Geometric growth parameters",
      verified: true
    }
  ]
};
