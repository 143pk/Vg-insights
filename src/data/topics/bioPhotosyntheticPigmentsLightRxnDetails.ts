import { DetailedTopicContent } from '../../types/neet';

export const bioPhotosyntheticPigmentsLightRxnDetails: DetailedTopicContent = {
  topicId: "bio-photosynthetic-pigments-light-rxn",
  topicName: "Photosynthetic Pigments & Light Reactions",
  subject: "Biology",
  class: "Class 11",
  classification: "Plant Physiology",
  chapter: "Photosynthesis in Higher Plants",

  whatIsThisTopic: "Photosynthesis is an physico-chemical process by which green plants use light energy to synthesize organic compounds from CO₂ and H₂O. Light reactions (photochemical phase) involve light absorption, water splitting, oxygen release, and formation of high-energy chemical intermediates (ATP and NADPH).",

  basicIdea: [
    "Photosynthesis is an anabolic, endergonic, and oxidation-reduction process in which H₂O is oxidized to O₂ and CO₂ is reduced to carbohydrates (glucose).",
    "Early classical experiments established key facts: Joseph Priestley showed essentiality of air/O₂ (bell jar & mint plant); Jan Ingenhousz proved sunlight is necessary; Julius von Sachs showed glucose synthesis stored as starch; T.W. Engelmann plotted the first Action Spectrum using Cladophora and aerobic bacteria; Cornelius van Niel proved that O₂ evolved comes from H₂O, not CO₂.",
    "Chloroplasts exhibit a clear division of labor: Membrane system (Thylakoids & Stroma lamellae) traps light energy and synthesizes ATP + NADPH (Light Reaction); fluid Stroma contains enzymes for CO₂ reduction to sugar (Dark Reaction/Biosynthetic Phase).",
    "Four pigments are involved in light harvesting: Chlorophyll a (bright/blue-green, chief reaction center pigment), Chlorophyll b (yellow-green), Xanthophylls (yellow), and Carotenoids (yellow to yellow-orange). Accessory pigments absorb varied wavelengths and transfer energy to Chl a via resonance, while protecting Chl a from photo-oxidation (solarization).",
    "Light Harvesting Complexes (LHC) consist of hundreds of pigment molecules bound to proteins. PS I (P700 reaction center) and PS II (P680 reaction center) drive photochemical electron transport.",
    "Non-cyclic photophosphorylation (Z-scheme) uses both PS II and PS I in thylakoid membranes, resulting in water splitting, O₂ release, ATP generation, and NADPH reduction.",
    "Cyclic photophosphorylation occurs in stroma lamellae (which lack PS II and NADP reductase) when only light of wavelength >680 nm is available, producing ATP ONLY without NADPH or O₂ evolution.",
    "Chemiosmotic Hypothesis (Peter Mitchell) explains ATP synthesis driven by a proton gradient created across the thylakoid membrane (high H⁺ in lumen, low H⁺ in stroma) utilized by CF₀-CF₁ ATP Synthase."
  ],

  importantTerms: [
    {
      term: "Chlorophyll a (P680 / P700)",
      symbol: "Chl a",
      definition: "The primary photosynthetic pigment present in all oxygenic photosynthetic organisms. Forms the reaction center of Photosystems I (absorbs at 700 nm) and II (absorbs at 680 nm).",
      neetNote: "NEET Frequently asks: Chlorophyll a is the only pigment that forms the reaction center; all other pigments are accessory pigments in antennae complexes."
    },
    {
      term: "Accessory Pigments",
      definition: "Chlorophyll b, Xanthophylls, and Carotenoids. They absorb light at different wavelengths and pass energy to Chl a by resonance transfer, while preventing photo-oxidation of Chl a.",
      neetNote: "Dual function of accessory pigments: 1) Broaden spectrum of light absorption; 2) Protect Chlorophyll a from photo-oxidation."
    },
    {
      term: "Photolysis of Water",
      definition: "The light-dependent catalytic splitting of H₂O into 2H⁺, 2e⁻, and ½O₂, associated with PS II on the lumen side of the thylakoid membrane.",
      neetNote: "Water splitting complex is physically located on the inner side (lumen side) of the thylakoid membrane and requires Mn²⁺, Cl⁻, and Ca²⁺ ions."
    },
    {
      term: "Z-Scheme",
      definition: "The non-cyclic flow of electrons from H₂O through PS II, electron transfer chain (Pheophytin → PQ → Cytochrome b₆f → PC), PS I, and Ferredoxin to NADP⁺.",
      neetNote: "Called 'Z-scheme' due to its characteristic redox potential staircase shape when redox carriers are placed on a redox scale."
    },
    {
      term: "Chemiosmosis",
      definition: "The mechanism of ATP synthesis where proton accumulation inside the thylakoid lumen creates a proton motive force (ΔpH + ΔΨ) that drives H⁺ flow through CF₀-CF₁ ATP Synthase into the stroma.",
      neetNote: "Requires 4 components: 1) Thylakoid membrane, 2) Proton pump, 3) Proton gradient (high in lumen), 4) ATP Synthase enzyme (CF₀ channel, CF₁ headpiece)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Historical Experiments & Discovery of Photosynthesis",
      paragraphs: [
        "Photosynthesis research evolved through a series of landmark experiments over two centuries:",
        "• Joseph Priestley (1770): Discovered Oxygen (1774). Using a bell jar, candle, mouse, and a mint plant (Mentha), he proved that plants restore air that breathing animals and burning candles remove.",
        "• Jan Ingenhousz (1779): Used an aquatic plant (Hydrilla) to show that sunlight is essential for Priestly's effect. In bright sunlight, small bubbles formed around green parts, which were identified as Oxygen. In the dark, no bubbles were formed.",
        "• Julius von Sachs (1854): Provided evidence that green parts of plants produce glucose, which is usually stored as starch. He showed that chlorophyll is located in special bodies (chloroplasts) inside plant cells.",
        "• T.W. Engelmann (1883): Used a prism to split light into spectral components and illuminated a green alga, Cladophora, suspended in a medium containing aerobic bacteria. The bacteria accumulated mainly in the blue and red light regions of the split spectrum. This yielded the FIRST ACTION SPECTRUM of photosynthesis, closely resembling the absorption spectra of chlorophyll a and b.",
        "• Cornelius van Niel (1931): Demonstrated using purple and green sulfur bacteria that photosynthesis is a light-dependent reaction where hydrogen from a suitable hydrogen donor reduces CO₂. In green plants, H₂O is the hydrogen donor and is oxidized to O₂. In sulfur bacteria, H₂S is the donor, releasing Sulfur instead of O₂. This conclusively proved that O₂ evolved by green plants comes from H₂O, not from CO₂ (later confirmed by Ruben & Kamen using isotopic ¹⁸O)."
      ],
      importantPoints: [
        "FIRST Action Spectrum: T.W. Engelmann using Cladophora + aerobic bacteria (Blue & Red light peaks).",
        "O₂ source in photosynthesis: H₂O, NOT CO₂ (Proved by van Niel, confirmed by Ruben & Kamen using ¹⁸O isotope).",
        "Priestley = Mentha plant & Bell Jar; Ingenhousz = Hydrilla & Sunlight necessity; Sachs = Starch & Chloroplasts."
      ]
    },
    {
      heading: "2. Chloroplast Structure & Division of Labor",
      paragraphs: [
        "Photosynthesis occurs inside chloroplasts, predominantly located in the mesophyll cells of leaves. Chloroplasts align themselves along the walls of mesophyll cells to receive optimum light.",
        "Chloroplast consists of a clear structural division of labor:",
        "1. Membrane System (Grana & Stroma Lamellae): Composed of flattened sacs called thylakoids. Thylakoids stacked like coins form Grana. Non-stacked connecting membranes are Stroma Lamellae. The membrane system is responsible for trapping light energy and synthesizing ATP and NADPH + H⁺ (Light Reaction / Photochemical phase).",
        "2. Stroma (Matrix): Enzymatic dark matrix containing RuBisCO, enzymes for CO₂ fixation, 70S ribosomes, circular double-stranded DNA, and starch granules. Stroma is the site of Dark Reactions (Biosynthetic Phase)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 550 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="550" height="260" fill="#0f172a" rx="12"/>
          
          <!-- Outer Chloroplast Boundary -->
          <ellipse cx="275" cy="130" rx="240" ry="105" fill="#1e293b" stroke="#10b981" stroke-width="3"/>
          <ellipse cx="275" cy="130" rx="232" ry="97" fill="none" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,2"/>
          
          <!-- Stroma Area -->
          <text x="275" y="45" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">STROMA (Site of Calvin Cycle / Dark Reaction - Enzymatic Phase)</text>

          <!-- Granum 1 -->
          <g transform="translate(100, 100)">
            <rect x="0" y="0" width="70" height="14" fill="#10b981" rx="4"/>
            <rect x="0" y="18" width="70" height="14" fill="#10b981" rx="4"/>
            <rect x="0" y="36" width="70" height="14" fill="#10b981" rx="4"/>
            <rect x="0" y="54" width="70" height="14" fill="#10b981" rx="4"/>
            <text x="35" y="-8" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Granum (Thylakoids)</text>
          </g>

          <!-- Granum 2 -->
          <g transform="translate(380, 100)">
            <rect x="0" y="0" width="70" height="14" fill="#10b981" rx="4"/>
            <rect x="0" y="18" width="70" height="14" fill="#10b981" rx="4"/>
            <rect x="0" y="36" width="70" height="14" fill="#10b981" rx="4"/>
            <rect x="0" y="54" width="70" height="14" fill="#10b981" rx="4"/>
            <text x="35" y="-8" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Granum (Thylakoids)</text>
          </g>

          <!-- Stroma Lamella connecting granum -->
          <path d="M 170 126 L 380 126" stroke="#059669" stroke-width="5" fill="none"/>
          <text x="275" y="118" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Stroma Lamella (Only PS I, No PS II, No NADP Reductase)</text>

          <!-- Labels -->
          <path d="M 60 70 L 100 110" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrow)"/>
          <text x="50" y="60" fill="#fbbf24" font-size="11" font-weight="bold">Outer &amp; Inner Membranes</text>

          <text x="275" y="210" fill="#e2e8f0" font-size="11" text-anchor="middle">Light Reaction in Thylakoids → Produces ATP + NADPH + O₂</text>
          <text x="275" y="228" fill="#e2e8f0" font-size="11" text-anchor="middle">Dark Reaction in Stroma → Consumes ATP + NADPH to fix CO₂ into Glucose</text>
        </svg>`,
        caption: "Chloroplast Ultrastructure and Site Division of Photosynthetic Reactions.",
        guide: "WHAT TO OBSERVE: Notice that Grana (stacked thylakoids) contain both PS I & PS II for Non-Cyclic Photophosphorylation, whereas Stroma Lamellae connecting grana lack PS II and NADP Reductase, performing only Cyclic Photophosphorylation."
      },
      importantPoints: [
        "Thylakoid Membrane: Light Reaction site (ATP, NADPH, O₂ synthesis).",
        "Stroma: Dark Reaction / Calvin Cycle site (Enzymatic reduction of CO₂).",
        "Chloroplast Ribosomes: 70S (similar to prokaryotes)."
      ]
    },
    {
      heading: "3. Photosynthetic Pigments & Spectra Analysis",
      paragraphs: [
        "Chromatographic separation (Paper Chromatography) of leaf pigments reveals four distinct pigments:",
        "1. Chlorophyll a: Bright or blue-green band. Universal primary pigment. Forms reaction centers (P680 and P700).",
        "2. Chlorophyll b: Yellow-green band. Accessory pigment.",
        "3. Xanthophylls: Yellow band. Accessory oxygen-containing carotenoids.",
        "4. Carotenoids: Yellow to yellow-orange band. Pure hydrocarbon carotenoids (e.g., β-carotene). Protects Chlorophyll a against photo-oxidation.",
        "Absorption Spectrum vs Action Spectrum:",
        "• Absorption Spectrum: Graphic representation of the degree of light absorption by individual pigments across different wavelengths (measured using a spectrophotometer). Chlorophyll a shows maximum absorption peaks in Blue (430 nm) and Red (660 nm) regions.",
        "• Action Spectrum: Graphic representation of the relative rate of photosynthesis at different wavelengths of light. Action spectrum matches the absorption spectrum of Chlorophyll a, confirming that Chlorophyll a is the chief photosynthetic pigment."
      ],
      importantPoints: [
        "Paper Chromatography pigments: Chl a (Blue-green), Chl b (Yellow-green), Xanthophyll (Yellow), Carotenoid (Yellow-orange).",
        "Absorption Peaks of Chl a: Blue wavelength (highest energy) and Red wavelength (highest photosynthetic efficiency).",
        "Why light is green-reflected: Chlorophyll absorbs blue and red wavelengths and reflects green light, making plants appear green."
      ]
    },
    {
      heading: "4. Light Reaction, Photosystems & Non-Cyclic Photophosphorylation (Z-Scheme)",
      paragraphs: [
        "Light reactions consist of light absorption, water splitting, oxygen release, and formation of ATP and NADPH.",
        "Photosystems: Pigments are organized into two discrete Light Harvesting Complexes (LHC) called Photosystem I (PS I) and Photosystem II (PS II), named in the order of their discovery, NOT execution.",
        "Each photosystem has an Antenna Complex (hundreds of accessory pigments bound to proteins) and a single Reaction Center (Chlorophyll a). In PS I, reaction center Chl a absorbs maximally at 700 nm (P700). In PS II, reaction center Chl a absorbs maximally at 680 nm (P680).",
        "Non-Cyclic Photophosphorylation (Z-Scheme) Step-by-Step Flow:",
        "1. Light absorption by PS II: P680 absorbs 680 nm red light, exciting electrons that jump to an acceptor orbit.",
        "2. Primary Electron Acceptor: Electrons are picked up by Pheophytin (primary e⁻ acceptor of PS II) and transferred down an Electron Transport System (ETS) consisting of Plastoquinone (PQ), Cytochrome b₆f complex, and Plastocyanin (PC).",
        "3. Downhill Transport: As electrons pass through ETS, energy released pumps H⁺ into the thylakoid lumen.",
        "4. Transfer to PS I: De-energized electrons are delivered to P700 of PS I.",
        "5. Excitation of PS I: PS I simultaneously absorbs 700 nm light, exciting its electrons which pass to a primary acceptor (Iron-Sulfur protein / Ferredoxin).",
        "6. NADPH Formation: Electrons move downhill to NADP⁺ Reductase enzyme on the stroma side, reducing NADP⁺ + 2H⁺ + 2e⁻ → NADPH + H⁺.",
        "7. Water Splitting (Photolysis): To replenish electrons lost by PS II, water is split on the lumen side: 2H₂O → 4H⁺ + 4e⁻ + O₂. Oxygen is released as a metabolic byproduct."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="300" fill="#0f172a" rx="12"/>
          
          <text x="290" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Z-SCHEME OF ELECTRON TRANSPORT (Non-Cyclic)</text>

          <!-- Water Splitting -->
          <g transform="translate(30, 200)">
            <rect x="0" y="0" width="85" height="45" fill="#0284c7" rx="6"/>
            <text x="42" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">H₂O Splitting</text>
            <text x="42" y="34" fill="#e0f2fe" font-size="9" text-anchor="middle">2H₂O→4H⁺+4e⁻+O₂</text>
          </g>

          <!-- PS II (P680) -->
          <g transform="translate(130, 200)">
            <rect x="0" y="0" width="80" height="50" fill="#10b981" rx="8"/>
            <text x="40" y="22" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">PS II</text>
            <text x="40" y="38" fill="#d1fae5" font-size="10" text-anchor="middle">(P680)</text>
          </g>

          <!-- Light Ray to PS II -->
          <path d="M 130 80 L 160 190" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrow)"/>
          <text x="135" y="70" fill="#fbbf24" font-size="10" font-weight="bold">Light 680nm</text>

          <!-- Upward e- transfer -->
          <path d="M 170 190 L 170 100" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>
          <rect x="130" y="75" width="80" height="25" fill="#1e293b" stroke="#38bdf8" rx="4"/>
          <text x="170" y="92" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">e⁻ Acceptor</text>

          <!-- Downhill ETS -->
          <path d="M 210 90 L 330 190" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)"/>
          <rect x="235" y="125" width="85" height="35" fill="#334155" stroke="#10b981" rx="4"/>
          <text x="277" y="140" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Electron Transport</text>
          <text x="277" y="152" fill="#64748b" font-size="8" text-anchor="middle">PQ → Cyt b₆f → PC</text>

          <!-- PS I (P700) -->
          <g transform="translate(340, 190)">
            <rect x="0" y="0" width="80" height="50" fill="#059669" rx="8"/>
            <text x="40" y="22" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">PS I</text>
            <text x="40" y="38" fill="#d1fae5" font-size="10" text-anchor="middle">(P700)</text>
          </g>

          <!-- Light Ray to PS I -->
          <path d="M 340 70 L 370 180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrow)"/>
          <text x="345" y="60" fill="#fbbf24" font-size="10" font-weight="bold">Light 700nm</text>

          <!-- Upward e- transfer PS I -->
          <path d="M 380 180 L 380 90" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>
          <rect x="340" y="65" width="80" height="25" fill="#1e293b" stroke="#38bdf8" rx="4"/>
          <text x="380" y="82" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">e⁻ Acceptor</text>

          <!-- Downhill to NADP+ -->
          <path d="M 420 80 L 490 120" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow)"/>
          <g transform="translate(470, 120)">
            <rect x="0" y="0" width="95" height="40" fill="#be123c" rx="6"/>
            <text x="47" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">NADP⁺ Reductase</text>
            <text x="47" y="32" fill="#fecdd3" font-size="9" text-anchor="middle">NADP⁺ → NADPH+H⁺</text>
          </g>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Non-Cyclic Electron Flow (Z-Scheme) involving PS II and PS I.",
        guide: "WHAT TO OBSERVE: Electrons flow unidirectionally from H₂O → PS II → ETS → PS I → NADP⁺. Both ATP and NADPH + H⁺ are synthesized, and O₂ is released on the thylakoid lumen side."
      },
      importantPoints: [
        "Non-cyclic photophosphorylation involves BOTH PS II and PS I.",
        "Primary electron acceptor of PS II: Pheophytin.",
        "Products of Non-Cyclic Pathway: ATP + NADPH + H⁺ + O₂.",
        "Location of Water Splitting Complex: Inner side (lumen side) of thylakoid membrane."
      ]
    },
    {
      heading: "5. Cyclic Photophosphorylation",
      paragraphs: [
        "When only light of wavelengths beyond 680 nm is available, or when NADPH accumulates, plants switch to Cyclic Photophosphorylation.",
        "Characteristics of Cyclic Photophosphorylation:",
        "1. Location: Stroma Lamellae membranes. Stroma lamellae membranes lack PS II as well as NADP Reductase enzyme.",
        "2. Single Photosystem: Involves ONLY PS I (P700).",
        "3. Cyclic Flow: Excited electrons from P700 pass to a primary acceptor, then through ferredoxin back to the cytochrome b₆f complex / plastoquinone, returning to P700.",
        "4. Product: Produces ONLY ATP. NO NADPH + H⁺ is formed, and NO O₂ is evolved (since water is not split)."
      ],
      importantPoints: [
        "Stroma Lamellae lack PS II and NADP Reductase enzyme.",
        "Cyclic Photophosphorylation yields ONLY ATP (No NADPH, No O₂ evolution).",
        "It operates when light wavelength > 680 nm is provided."
      ]
    },
    {
      heading: "6. Chemiosmotic Hypothesis of ATP Synthesis",
      paragraphs: [
        "Proposed by Peter Mitchell (1961), chemiosmosis explains how ATP is synthesized during photophosphorylation in chloroplasts (and oxidative phosphorylation in mitochondria).",
        "ATP synthesis requires a Proton Gradient across the thylakoid membrane, an intact Thylakoid Membrane, a Proton Pump, and ATP Synthase (CF₀-CF₁ complex).",
        "Mechanism of Proton Gradient Creation (High H⁺ in Lumen, Low H⁺ in Stroma):",
        "1. Water Splitting: Splitting of H₂O molecules occurs on the inner side (lumen) of the thylakoid membrane, releasing H⁺ directly into the lumen.",
        "2. Proton Pumping by Hydrogen Carrier: Primary electron acceptor of PS II transfers its electron to an H carrier (Plastoquinone). As PQ passes e⁻ to Cytochrome b₆f, it transports H⁺ from stroma across the membrane into the lumen.",
        "3. NADP⁺ Reduction on Stroma Side: NADP Reductase enzyme is located on the stroma side of the membrane. Reduction of NADP⁺ to NADPH + H⁺ removes H⁺ from the stroma.",
        "Result: Proton concentration increases inside the thylakoid lumen (pH drops to ~5) compared to the stroma (pH ~8), establishing a steep pH gradient and electrical potential difference across the membrane.",
        "ATP Synthesis via CF₀-CF₁ ATP Synthase:",
        "• CF₀: Embedded in the thylakoid membrane; forms a transmembrane channel for facilitated diffusion of protons down the gradient.",
        "• CF₁: Headpiece protruding into the stroma; contains catalytic site for ATP synthesis.",
        "• As H⁺ ions flow through CF₀ channel down the gradient into the stroma, conformational changes in CF₁ headpiece drive binding of ADP + Pi → ATP."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="560" height="300" fill="#0f172a" rx="12"/>
          <text x="280" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CHEMIOSMOTIC HYPOTHESIS IN THYLAKOID</text>

          <!-- Thylakoid Membrane -->
          <rect x="40" y="120" width="480" height="40" fill="#334155" stroke="#475569" rx="4"/>
          <text x="280" y="145" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">THYLAKOID MEMBRANE</text>

          <!-- Regions -->
          <text x="280" y="60" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">STROMA (Low H⁺ Concentration / pH ~ 8)</text>
          <text x="280" y="220" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">THYLAKOID LUMEN (High H⁺ Concentration / pH ~ 5)</text>

          <!-- H+ Accumulation Arrow -->
          <path d="M 120 75 L 120 200" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-red)"/>
          <text x="125" y="100" fill="#f87171" font-size="9">1. Water Splitting H⁺</text>

          <path d="M 260 75 L 260 200" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-red)"/>
          <text x="265" y="100" fill="#f87171" font-size="9">2. PQ H⁺ Pump</text>

          <!-- ATP Synthase CF0-CF1 -->
          <g transform="translate(420, 110)">
            <rect x="0" y="10" width="30" height="40" fill="#0284c7" rx="3"/>
            <text x="15" y="32" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">CF₀</text>
            <circle cx="15" cy="-10" r="20" fill="#0369a1"/>
            <text x="15" y="-6" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">CF₁</text>
          </g>

          <!-- H+ Flow through CF0-CF1 -->
          <path d="M 435 200 L 435 50" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)"/>
          <text x="450" y="80" fill="#34d399" font-size="10" font-weight="bold">ADP + Pi → ATP</text>

          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e"/>
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Chemiosmotic mechanism across the Thylakoid Membrane.",
        guide: "WHAT TO OBSERVE: Protons accumulate in the lumen via water splitting and PQ pumping. Driven by the gradient, H⁺ flows back to the stroma through CF₀-CF₁ ATP Synthase, generating ATP."
      },
      importantPoints: [
        "Chemiosmosis creates HIGH proton concentration in LUMEN (low pH) and LOW in STROMA.",
        "CF₀ component: Transmembrane channel for facilitated proton diffusion.",
        "CF₁ component: Protrudes into stroma; synthesizes ATP when H⁺ diffuses through CF₀."
      ]
    }
  ],

  formulae: [
    {
      title: "Photolysis of Water Equation",
      formula: "2H₂O \\xrightarrow{\\text{Light, PS II, Mn}^{2+}, \\text{Cl}^-} 4H^+ + 4e^- + O_2\\uparrow",
      meaning: "Photolytic cleavage of two water molecules yields 4 protons, 4 electrons, and 1 molecule of molecular oxygen.",
      symbols: "H₂O = Water, e⁻ = Electrons, H⁺ = Protons, O₂ = Oxygen gas",
      conditions: "Occurs on lumen side of thylakoid membrane at PS II requiring Mn²⁺, Cl⁻, and Ca²⁺ ions.",
      whenToUse: "When calculating stoichiometry of water splitting and O₂ evolution per electron in light reactions."
    },
    {
      title: "Non-Cyclic Photophosphorylation Summary",
      formula: "2NADP^+ + 2ADP + 2P_i + 2H_2O \\xrightarrow{\\text{Light, PS I + PS II}} 2NADPH + 2H^+ + 2ATP + O_2\\uparrow",
      meaning: "Overall stoichiometry of non-cyclic photophosphorylation per pair of water molecules.",
      symbols: "NADP⁺ = Nicotinamide Adenine Dinucleotide Phosphate, ATP = Adenosine Triphosphate",
      conditions: "Requires both photosystems (P680 + P700) and functional thylakoid membrane.",
      whenToUse: "To evaluate energy yield (ATP + NADPH) generated during photochemical phase."
    }
  ],

  visualLearning: {
    type: 'flowchart',
    flowchartSteps: [
      { step: "1. Light Absorption", detail: "LHC absorbs photons; excites P680 in PS II", arrowText: "Excited e⁻" },
      { step: "2. Water Splitting", detail: "2H₂O → 4H⁺ + 4e⁻ + O₂ in thylakoid lumen", arrowText: "Replenishes PS II" },
      { step: "3. Electron Transport (Z-Scheme)", detail: "e⁻ passes through Pheophytin → PQ → Cyt b₆f → PC", arrowText: "H⁺ pumped into lumen" },
      { step: "4. PS I & Reduction", detail: "e⁻ transferred to P700 → Ferredoxin → NADP⁺ Reductase", arrowText: "NADPH + H⁺ in stroma" },
      { step: "5. Chemiosmotic ATP Synthesis", detail: "H⁺ flows through CF₀-CF₁ from Lumen to Stroma", arrowText: "ATP synthesized" }
    ],
    caption: "Flowchart of Photochemical Phase (Light Reaction) Events."
  },

  neetImportantPoints: [
    "Photosystem II is physically located on the APPPRESSED (inner stacked) region of grana thylakoid membranes, while PS I and ATP Synthase are in NON-APPRESSED regions and stroma lamellae.",
    "Water splitting complex (OEC - Oxygen Evolving Complex) is associated with PS II on the LUMEN side of the thylakoid membrane and requires Mn²⁺, Cl⁻, and Ca²⁺.",
    "Stroma Lamellae lack PS II and NADP Reductase, hence perform ONLY Cyclic Photophosphorylation yielding ONLY ATP.",
    "Primary electron acceptor for PS II is Pheophytin; primary electron acceptor for PS I is an Iron-Sulfur (Fe-S) protein / Ferredoxin.",
    "First action spectrum was plotted by T.W. Engelmann using Cladophora and aerobic bacteria, matching absorption spectrum of Chl a and Chl b."
  ],

  commonConfusions: [
    {
      commonConfusion: "Thinking that Oxygen evolved during photosynthesis originates from Carbon Dioxide (CO₂).",
      correctFact: "Oxygen evolved comes entirely from WATER (H₂O), as proven by C. van Niel and verified using radioactive isotope ¹⁸O by Ruben and Kamen.",
      whyItMattersForNEET: "Frequently tested in direct true/false and statement matching questions in NEET UG."
    },
    {
      commonConfusion: "Assuming protons accumulate in the Stroma during light reaction.",
      correctFact: "Protons accumulate inside the THYLAKOID LUMEN, creating a high proton concentration (low pH ~5) inside the lumen relative to stroma (pH ~8).",
      whyItMattersForNEET: "Chemiosmosis questions regularly test the exact location of high vs low proton concentration."
    },
    {
      commonConfusion: "Believing Cyclic Photophosphorylation produces both ATP and NADPH.",
      correctFact: "Cyclic photophosphorylation produces ONLY ATP. It does NOT produce NADPH + H⁺ or O₂.",
      whyItMattersForNEET: "Crucial difference between cyclic and non-cyclic photophosphorylation tested in NEET."
    }
  ],

  quickRevision: [
    "Light Reaction occurs in Thylakoids; Dark Reaction occurs in Stroma.",
    "Chief pigment = Chl a (Blue-green); Accessory pigments = Chl b, Xanthophylls, Carotenoids.",
    "PS II (P680) + PS I (P700) = Non-Cyclic (Z-Scheme) → Produces ATP + NADPH + O₂.",
    "Stroma lamellae lack PS II & NADP reductase → Cyclic flow (PS I only) → Yields ONLY ATP.",
    "Chemiosmosis: H⁺ accumulates in Thylakoid Lumen; flows via CF₀-CF₁ into Stroma to generate ATP."
  ],

  practiceQuestions: [
    {
      id: "prac-photo-1",
      questionText: "Which of the following components is ABSENT in the stroma lamellae of chloroplasts?",
      options: [
        "Photosystem I and ATP Synthase",
        "Photosystem II and NADP Reductase",
        "Chlorophyll a and Carotenoids",
        "Ferredoxin and Cytochrome b₆f"
      ],
      correctOption: 1,
      explanation: "Stroma lamellae membranes lack Photosystem II as well as NADP Reductase enzyme. Therefore, they carry out only Cyclic Photophosphorylation.",
      difficulty: "Medium",
      conceptTested: "Structure and enzymes of Stroma Lamellae"
    },
    {
      id: "prac-photo-2",
      questionText: "The oxygen evolving complex (water splitting complex) is physically associated with:",
      options: [
        "PS I on the stroma side of thylakoid membrane",
        "PS II on the lumen side of thylakoid membrane",
        "PS II on the stroma side of thylakoid membrane",
        "PS I on the inner membrane of chloroplast"
      ],
      correctOption: 1,
      explanation: "The water splitting complex is associated with PS II and is located on the inner side (lumen side) of the thylakoid membrane.",
      difficulty: "Easy",
      conceptTested: "Location of water splitting complex"
    }
  ],

  pyqs: [
    {
      id: "pyq-photo-1",
      year: 2021,
      exam: "NEET UG",
      questionText: "Which of the following statements is INCORRECT regarding cyclic photophosphorylation?",
      options: [
        "It produces both ATP and NADPH + H⁺",
        "It involves only Photosystem I",
        "It occurs in stroma lamellae",
        "It does not involve photolysis of water"
      ],
      correctOption: 0,
      explanation: "Cyclic photophosphorylation produces ONLY ATP. NADPH + H⁺ and O₂ are NOT produced because PS II and NADP reductase are absent.",
      difficulty: "Easy",
      topicTested: "Cyclic Photophosphorylation",
      verified: true
    },
    {
      id: "pyq-photo-2",
      year: 2020,
      exam: "NEET UG",
      questionText: "In light reaction, plastoquinone facilitates the transfer of electrons from:",
      options: [
        "PS II to Cytochrome b₆f complex",
        "Cyt b₆f complex to PS I",
        "PS I to NADP⁺",
        "PS I to ATP synthase"
      ],
      correctOption: 0,
      explanation: "Plastoquinone (PQ) receives electrons from the primary electron acceptor (Pheophytin) of PS II and transfers them down to Cytochrome b₆f complex.",
      difficulty: "Medium",
      topicTested: "Electron Transport System / Z-Scheme",
      verified: true
    },
    {
      id: "pyq-photo-3",
      year: 2019,
      exam: "NEET UG",
      questionText: "Which of the following is NOT a product of light reaction of photosynthesis?",
      options: [
        "ATP",
        "NADH",
        "NADPH",
        "Oxygen"
      ],
      correctOption: 1,
      explanation: "NADH is a product of cellular respiration (glycolysis, TCA cycle), whereas light reactions of photosynthesis yield ATP, NADPH, and O₂.",
      difficulty: "Easy",
      topicTested: "Products of Light Reaction",
      verified: true
    }
  ]
};
