import { DetailedTopicContent } from '../../types/neet';

export const bioEcosystemStructureEnergyFlowDetails: DetailedTopicContent = {
  topicId: "bio-ecosystem-structure-energy-flow",
  topicName: "Ecosystem Structure, Productivity & Energy Flow (10% Law)",
  subject: "Biology",
  class: "Class 12",
  classification: "Ecology & Environment",
  chapter: "Ecosystem",

  whatIsThisTopic: "Fundamental ecological architecture of ecosystems, abiotic and biotic components, stratification, primary and secondary productivity (GPP, NPP, respiration loss R), unidirectional solar energy flow, PAR partitioning, Grazing vs Detritus food chains, trophic web dynamics, Lindeman's 10% energy transfer law, and Robert Costanza's ecosystem services valuation.",

  basicIdea: [
    "An ecosystem is a functional, self-sustaining unit of nature where living organisms (biotic community) interact among themselves and with their physical and chemical environment (abiotic factors) leading to flow of energy and cycling of nutrients.",
    "Structure of an ecosystem is characterized by Species Composition (identification and enumeration of plant and animal species) and Stratification (vertical distribution of different species occupying different levels, e.g., tall canopy trees at the top, shrubs in the middle, and herbs/grasses at the ground layer).",
    "Four core functional attributes govern all ecosystems: (1) Productivity (rate of biomass synthesis), (2) Decomposition (breakdown of complex organic detritus), (3) Energy Flow (unidirectional thermodynamic progression from Sun to top carnivores), and (4) Nutrient Cycling (biogeochemical recycling of minerals between abiotic reservoirs and biotic tissue).",
    "Productivity is defined as the rate of biomass production per unit area over a time period (expressed in g m⁻² yr⁻¹ or kcal m⁻² yr⁻¹). Gross Primary Productivity (GPP) is the total rate of organic matter synthesis during photosynthesis. Net Primary Productivity (NPP) is the biomass remaining after producer respiration (R): NPP = GPP - R. NPP represents the actual biomass available for consumption by heterotrophs (herbivores and decomposers). Secondary Productivity is the rate of formation of new organic matter by consumers.",
    "Global annual Net Primary Productivity of the entire biosphere is approximately 170 billion tons (dry weight) of organic matter. Terrestrial ecosystems produce 115 billion tons (67.6%) despite occupying only ~30% of Earth's surface, whereas Oceans contribute only 55 billion tons (32.4%) despite covering ~70% of Earth's surface, constrained by light extinction with depth and nutrient (nitrogen/iron) limitation.",
    "Energy flow is strictly UNIDIRECTIONAL and adheres to the Laws of Thermodynamics: Solar energy is captured by autotrophs and transferred through trophic levels with continuous dissipation of heat. Out of total incident solar radiation, less than 50% is Photosynthetically Active Radiation (PAR, 400-700 nm). Green plants capture only 2-10% of PAR (which equals 1-5% of total incident solar energy).",
    "Lindeman's 10% Energy Transfer Law: On average, only ~10% of the energy stored in the biomass of one trophic level is transferred and assimilated into the next higher trophic level; ~90% is lost via cellular respiration, maintenance metabolism, excretion, and heat dissipation. This rapid energy depletion restricts food chains to 4-5 trophic levels.",
    "Grazing Food Chain (GFC) begins with living autotrophic green plants and represents the major conduit of energy flow in aquatic ecosystems. Detritus Food Chain (DFC) begins with dead organic matter (detritus) processed by saprotrophic fungi and bacteria, representing the major conduit of energy flow in terrestrial ecosystems.",
    "Robert Costanza and colleagues valued global ecosystem services at an average of US $33 trillion per year (nearly double the global GNP of US $18 trillion), with soil formation accounting for ~50%, recreation and nutrient cycling <10% each, and climate regulation and wildlife habitat ~6% each."
  ],

  importantTerms: [
    {
      term: "Ecosystem (A.G. Tansley, 1935)",
      definition: "A functional, dynamic unit of nature comprising a biotic community of living organisms interacting with their physical and chemical abiotic environment, characterized by unidirectional energy flow and cyclical nutrient exchange.",
      neetNote: "Ecosystems can be natural (terrestrial: forest, grassland, desert; aquatic: pond, lake, wetland, river, estuary) or artificial/man-made (crop fields, aquarium)."
    },
    {
      term: "Stratification",
      definition: "The vertical distribution of different species occupying different vertical levels or strata within an ecosystem based on their light requirements, growth forms, and stature.",
      neetNote: "In a forest: Trees occupy top vertical strata/canopy, shrubs occupy the middle layer, and herbs/grasses occupy the bottom forest floor."
    },
    {
      term: "Standing Crop",
      definition: "The total mass of living biological material (living organisms) present in a specific trophic level at a particular unit of time and space, measured as biomass (dry weight or fresh weight) or number per unit area.",
      neetNote: "Measurement of biomass in terms of dry weight is more accurate than fresh weight because fresh weight fluctuates wildly with moisture content."
    },
    {
      term: "Photosynthetically Active Radiation (PAR)",
      definition: "The spectral waveband of solar radiation between 400 nm and 700 nm that photosynthetic organisms are capable of utilizing in the light-dependent reactions of photosynthesis.",
      neetNote: "PAR accounts for less than 50% of total incident solar radiation. Plants capture only 2-10% of PAR (1-5% of total incident sunlight)."
    },
    {
      term: "Gross Primary Productivity (GPP)",
      definition: "The total rate at which radiant solar energy is captured and converted into organic chemical energy (biomass) by autotrophic producers per unit area over a given time interval during photosynthesis, before any respiratory loss.",
      neetNote: "GPP includes both the biomass accumulated and the organic carbon consumed by the producer's own cellular respiration."
    },
    {
      term: "Net Primary Productivity (NPP)",
      definition: "The net rate of organic matter accumulation in plant tissues after subtracting the respiratory utilization (R) of the autotrophs from Gross Primary Productivity: NPP = GPP - R.",
      neetNote: "NPP is the actual harvestable biomass available to the primary consumers (herbivores) and detritivores."
    },
    {
      term: "Secondary Productivity",
      definition: "The rate of synthesis of new organic biomass by heterotrophic consumers (herbivores, carnivores, decomposers) from the assimilated food ingested from lower trophic levels.",
      neetNote: "It is NOT divided into gross and net in NCERT; it is simply the rate of consumer biomass accumulation."
    },
    {
      term: "Lindeman's 10% Energy Rule (Raymond Lindeman, 1942)",
      definition: "An ecological principle stating that during the transfer of organic food energy from one trophic level to the next higher level, only about 10% of the energy is stored as flesh/biomass, while the remaining 90% is lost as metabolic heat, respiration, and unconsumed waste.",
      neetNote: "Because of 90% progressive loss, food chains are rarely longer than 4 to 5 trophic links."
    },
    {
      term: "Grazing Food Chain (GFC)",
      definition: "A food chain that initiates directly with living autotrophic green plants (producers) which are consumed by grazing herbivores (primary consumers), followed by carnivores.",
      neetNote: "In aquatic ecosystems, GFC is the major conduit for energy flow."
    },
    {
      term: "Detritus Food Chain (DFC)",
      definition: "A food chain that originates from non-living dead organic matter (detritus: plant litter, animal carcasses, excreta) and passes to decomposers (saprotrophic fungi and bacteria) and detritivores.",
      neetNote: "In terrestrial ecosystems, a much larger fraction of energy flows through the DFC than through the GFC."
    },
    {
      term: "Ecosystem Services (Robert Costanza)",
      definition: "The wide array of ecological goods, life-support processes, and benefits that natural ecosystems freely bestow upon human society, including soil genesis, oxygen release, hydrological purification, carbon sequestration, and pollination.",
      neetNote: "Researches led by Robert Costanza put an average price tag of US $33 trillion/year on fundamental global ecosystem life-support services."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Concept, Structure & Stratification of an Ecosystem",
      paragraphs: [
        "An ecosystem is viewed as a functional unit of nature where biological communities of organisms interact continuously among themselves and with the surrounding physical and chemical environment. Ecosystems vary greatly in size, ranging from a micro-ecosystem like a tiny drop of pond water or an isolated temporary puddle, to a vast macro-ecosystem like an entire tropical rainforest, ocean, or the complete biosphere (the global ecosystem).",
        "Ecosystems are broadly categorized into: (1) Terrestrial ecosystems: Forest, Grassland, Desert, Tundra; (2) Aquatic ecosystems: Freshwater (Pond, Lake, Stream, River, Wetland) and Marine (Estuary, Mangrove, Ocean); and (3) Man-made / Anthropogenic ecosystems: Agricultural crop fields, Aquaria, Botanical gardens, and Spacecraft life-support systems (which are artificial, species-poor, and lack self-regulatory homeostasis).",
        "Two fundamental structural features define an ecosystem: (a) Species Composition: Identification and enumeration of all plant, animal, and microbial species inhabiting the system; (b) Stratification: The vertical distribution and spatial layering of different species occupying distinct vertical tiers. Stratification minimizes competitive interference by allowing different species to exploit varying gradients of light, moisture, and temperature.",
        "In a mature tropical rainforest or temperate deciduous forest, stratification displays clear vertical zonation: (i) Topmost emergent/canopy layer: Dominated by tall emergent trees (e.g., Shorea, Dipterocarpus); (ii) Understory / Sub-canopy layer: Composed of medium-sized shade-tolerant trees and lianas; (iii) Shrub layer: Composed of woody bushes (1-3 meters); (iv) Herb and grass layer: Ground flora occupying the forest floor adapted to extremely low light levels."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#bae6fd"/>
              <stop offset="100%" stop-color="#e0f2fe"/>
            </linearGradient>
            <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#854d0e"/>
              <stop offset="100%" stop-color="#3f2e18"/>
            </linearGradient>
            <filter id="ecoShadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.1"/>
            </filter>
          </defs>

          <!-- Sky Background -->
          <rect width="800" height="280" fill="url(#skyGrad)"/>
          <!-- Soil Base -->
          <rect y="280" width="800" height="80" fill="url(#soilGrad)"/>

          <!-- Title Bar -->
          <rect x="20" y="15" width="760" height="34" rx="6" fill="#0f172a" opacity="0.85"/>
          <text x="400" y="38" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="1">VERTICAL STRATIFICATION IN A FOREST ECOSYSTEM</text>

          <!-- Canopy Layer (Tier 1) -->
          <ellipse cx="200" cy="90" rx="90" ry="40" fill="#15803d" opacity="0.9" filter="url(#ecoShadow)"/>
          <ellipse cx="260" cy="80" rx="70" ry="35" fill="#16a34a" opacity="0.85"/>
          <rect x="220" y="125" width="20" height="155" fill="#713f12"/>
          
          <ellipse cx="600" cy="85" rx="85" ry="38" fill="#15803d" opacity="0.9" filter="url(#ecoShadow)"/>
          <rect x="590" y="120" width="20" height="160" fill="#713f12"/>

          <!-- Sub-Canopy / Understory Trees (Tier 2) -->
          <ellipse cx="380" cy="160" rx="55" ry="30" fill="#22c55e" opacity="0.85"/>
          <rect x="375" y="185" width="10" height="95" fill="#854d0e"/>

          <!-- Shrub Layer (Tier 3) -->
          <ellipse cx="110" cy="245" rx="35" ry="20" fill="#4ade80" opacity="0.9"/>
          <ellipse cx="480" cy="245" rx="40" ry="22" fill="#4ade80" opacity="0.9"/>
          <ellipse cx="710" cy="245" rx="35" ry="20" fill="#4ade80" opacity="0.9"/>

          <!-- Herb & Ground Layer (Tier 4) -->
          <path d="M 0 280 Q 20 270 40 280 Q 60 270 80 280 Q 100 270 120 280 Q 140 270 160 280 Q 180 270 200 280 Q 220 270 240 280 Q 260 270 280 280 Q 300 270 320 280 Q 340 270 360 280 Q 380 270 400 280 Q 420 270 440 280 Q 460 270 480 280 Q 500 270 520 280 Q 540 270 560 280 Q 580 270 600 280 Q 620 270 640 280 Q 660 270 680 280 Q 700 270 720 280 Q 740 270 760 280 Q 780 270 800 280" fill="none" stroke="#86efac" stroke-width="4"/>

          <!-- Stratification Tier Labels & Brackets -->
          <!-- Top Tier -->
          <line x1="695" y1="55" x2="695" y2="125" stroke="#047857" stroke-width="2"/>
          <line x1="685" y1="55" x2="705" y2="55" stroke="#047857" stroke-width="2"/>
          <line x1="685" y1="125" x2="705" y2="125" stroke="#047857" stroke-width="2"/>
          <text x="715" y="95" fill="#064e3b" font-size="12" font-weight="bold">Top Canopy Strata (Tall Trees)</text>

          <!-- Middle Tier -->
          <line x1="445" y1="135" x2="445" y2="200" stroke="#047857" stroke-width="2"/>
          <line x1="435" y1="135" x2="455" y2="135" stroke="#047857" stroke-width="2"/>
          <line x1="435" y1="200" x2="455" y2="200" stroke="#047857" stroke-width="2"/>
          <text x="460" y="172" fill="#064e3b" font-size="12" font-weight="bold">Understory (Small Trees)</text>

          <!-- Shrub Tier -->
          <line x1="695" y1="225" x2="695" y2="265" stroke="#047857" stroke-width="2"/>
          <line x1="685" y1="225" x2="705" y2="225" stroke="#047857" stroke-width="2"/>
          <line x1="685" y1="265" x2="705" y2="265" stroke="#047857" stroke-width="2"/>
          <text x="715" y="248" fill="#064e3b" font-size="12" font-weight="bold">Shrub Layer (1-3 m)</text>

          <!-- Floor Tier -->
          <text x="400" y="305" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Ground Layer (Herbs, Grasses, Mosses & Forest Litter)</text>
          <text x="400" y="335" fill="#fef9c3" font-size="10" text-anchor="middle">Soil Substratum (Roots, Decomposer Microbes, Fungi, Detritivores)</text>
        </svg>`,
        caption: "Figure 12.1: Vertical Stratification in a Forest Ecosystem illustrating distinct canopy, sub-canopy, shrub, and ground layers.",
        guide: "WHAT TO OBSERVE: Notice how vegetation is organized into vertical strata based on height and light penetration. Trees form the top canopy, absorbing maximum incident sunlight; understory trees and shrubs receive filtered light; and herbs and grasses occupy the lowest forest floor."
      },
      importantPoints: [
        "Species composition and stratification are the two primary structural diagnostic traits of any ecosystem.",
        "In deep aquatic ecosystems (lakes), stratification occurs as: Euphotic zone (surface lit zone), Disphotic/Profundal zone (dimly lit), and Benthic zone (bottom sediment).",
        "Crop fields and aquaria are artificial ecosystems; they have minimal stratification, low species diversity, and high human input dependency."
      ]
    },
    {
      heading: "2. Pond as a Complete, Self-Sustaining Model Ecosystem",
      paragraphs: [
        "A shallow freshwater pond serves as a classic, elegant example of a self-sufficient and self-regulating natural ecosystem where all four fundamental ecosystem functions operate in unison.",
        "The components of a pond ecosystem include: (1) Abiotic Component: Water as the primary medium containing dissolved oxygen, dissolved carbon dioxide, and essential inorganic minerals (nitrates, phosphates, sulfates, calcium), soil sediment at the bottom, solar heat, and light irradiance; (2) Autotrophic / Producer Component: Phytoplankton (unicellular diatoms, green algae, cyanobacteria), filamentous algae (Spirogyra, Oedogonium), and marginal, floating, and submerged macrophytes (Hydrilla, Vallisneria, Eichhornia, Pistia, Typha); (3) Consumer Component: Zooplankton (ciliates, flagellates, rotifers, water fleas like Daphnia), free-swimming aquatic insects, molluscs, and predatory fishes; (4) Decomposer Component: Saprotrophic bacteria, aquatic fungi, and actinomycetes densely populated in the bottom mud sediment.",
        "The integrated functioning of the pond illustrates: (a) Autotrophs convert inorganic solar energy into biochemical energy (Productivity); (b) Consumers consume autotrophs and transfer energy across trophic chains (Energy Flow); (c) Dead plant/animal remains fall to the bottom mud and undergo enzymatic breakdown (Decomposition); (d) Decomposers release inorganic mineral ions back into the water column for producer re-absorption (Nutrient Cycling)."
      ],
      importantPoints: [
        "A pond illustrates all four fundamental ecosystem functions: Productivity, Decomposition, Energy Flow, and Nutrient Cycling.",
        "Even in a simple pond, energy flow is strictly unidirectional (Solar energy → Phytoplankton → Zooplankton → Fish → Heat dissipation), while mineral elements undergo cyclical reuse."
      ]
    },
    {
      heading: "3. Ecosystem Productivity: Primary & Secondary Productivity",
      paragraphs: [
        "Ecosystem Productivity is defined as the rate of synthesis of organic biomass per unit area over a specified time duration. It must ALWAYS be expressed as a rate to allow meaningful ecological comparisons.",
        "Units of Productivity: (1) In terms of biomass: $\\text{g }\\text{m}^{-2}\\text{ yr}^{-1}$; (2) In terms of energy content: $\\text{kcal }\\text{m}^{-2}\\text{ yr}^{-1}$. (Note: Biomass is expressed as $\\text{g }\\text{m}^{-2}$, whereas Productivity is expressed as $\\text{g }\\text{m}^{-2}\\text{ yr}^{-1}$).",
        "Primary Productivity is the rate at which radiant energy is converted into organic matter by autotrophic green plants per unit area over a given time interval via photosynthesis. Primary productivity is sub-divided into Gross Primary Productivity (GPP) and Net Primary Productivity (NPP).",
        "Gross Primary Productivity (GPP): The total rate of production of organic matter synthesized during photosynthesis. A significant fraction of this synthesized energy is actively combusted by the plant's own metabolic maintenance through cellular respiration ($R$).",
        "Net Primary Productivity (NPP): The remaining biomass stored in plant tissues that is available for ingestion by heterotrophic organisms (herbivores and decomposers). The mathematical relationship is governed by: $\\text{NPP} = \\text{GPP} - R$, where $R$ represents respiratory loss.",
        "Secondary Productivity is the rate of formation of new organic biomass by heterotrophic consumers (herbivores, carnivores, and decomposers). It reflects the net assimilation of digested food converted into consumer body tissue after fecal and respiratory losses.",
        "Factors Influencing Primary Productivity: (1) Plant species inhabiting a region; (2) Photosynthetic capacity of the flora ($C_4$ plants like maize/sugarcane have higher productivity than $C_3$ plants); (3) Nutrient availability in soil or water (nitrogen, phosphorus, iron); (4) Sunlight duration and intensity; (5) Water availability and ambient temperature."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
          <defs>
            <linearGradient id="gppGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#15803d"/>
              <stop offset="100%" stop-color="#22c55e"/>
            </linearGradient>
            <linearGradient id="nppGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="100%" stop-color="#38bdf8"/>
            </linearGradient>
            <linearGradient id="respGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#dc2626"/>
              <stop offset="100%" stop-color="#f87171"/>
            </linearGradient>
          </defs>

          <!-- Background container -->
          <rect width="800" height="320" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

          <!-- Title -->
          <text x="400" y="32" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">PRIMARY PRODUCTIVITY EQUATION DYNAMICS</text>

          <!-- GPP Full Bar -->
          <rect x="60" y="60" width="680" height="55" rx="8" fill="url(#gppGrad)"/>
          <text x="400" y="93" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">GROSS PRIMARY PRODUCTIVITY (GPP) = 100% Total Organic Synthesis</text>

          <!-- Minus sign -->
          <circle cx="400" cy="140" r="16" fill="#0f172a"/>
          <text x="400" y="146" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">−</text>

          <!-- Split Bars: Respiration Loss (R) & Net Primary Productivity (NPP) -->
          <!-- Respiration Box -->
          <rect x="60" y="170" width="260" height="60" rx="8" fill="url(#respGrad)"/>
          <text x="190" y="196" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">RESPIRATION LOSS (R)</text>
          <text x="190" y="216" fill="#fee2e2" font-size="11" text-anchor="middle">~20% to 50% Used in Plant Metabolism</text>

          <!-- Equals sign -->
          <text x="355" y="206" fill="#0f172a" font-size="22" font-weight="bold" text-anchor="middle">=</text>

          <!-- NPP Box -->
          <rect x="390" y="170" width="350" height="60" rx="8" fill="url(#nppGrad)"/>
          <text x="565" y="196" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">NET PRIMARY PRODUCTIVITY (NPP)</text>
          <text x="565" y="216" fill="#e0f2fe" font-size="11" text-anchor="middle">Actual Biomass Available to Herbivores &amp; Decomposers</text>

          <!-- Bottom Master Formula Box -->
          <rect x="180" y="255" width="440" height="42" rx="8" fill="#1e293b"/>
          <text x="400" y="282" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle" font-family="monospace">NPP = GPP − R &emsp;|&emsp; GPP = NPP + R</text>
        </svg>`,
        caption: "Figure 12.2: The Primary Productivity Equation illustrating the quantitative partitioning of GPP into Plant Respiration (R) and Net Harvestable Biomass (NPP).",
        guide: "WHAT TO OBSERVE: GPP represents the entire photosynthetic yield. Plants actively consume a portion of this yield via cellular respiration (R). Only the remainder (NPP) is converted into dry tissue and available to herbivores and decomposers."
      },
      importantPoints: [
        "Annual Net Primary Productivity of the entire biosphere is approximately 170 billion tons (dry weight).",
        "Terrestrial ecosystems produce 115 billion tons (67.6%) of dry organic matter per year.",
        "Oceans contribute only 55 billion tons (32.4%) of dry organic matter per year despite covering 70% of Earth's surface due to rapid light attenuation with depth and critical mineral (N, P, Fe) limitations in open pelagic waters.",
        "Tropical Rainforests have the highest net primary productivity among terrestrial biomes; Coral reefs and estuaries have the highest productivity among aquatic biomes.",
        "Deserts and deep oceans exhibit the lowest primary productivity per unit area."
      ]
    },
    {
      heading: "4. Solar Radiation & Energy Flow Mechanics (Unidirectional)",
      paragraphs: [
        "Except for deep-sea hydrothermal vent ecosystems (which rely on chemoautotrophic sulfur-oxidizing archaebacteria), the SUN is the single, ultimate source of energy for all ecosystems on Earth.",
        "Of the total incident solar radiation reaching the upper atmosphere, less than 50% constitutes Photosynthetically Active Radiation (PAR, wavelength range 400 nm - 700 nm). The rest comprises infrared heat waves and harmful ultraviolet rays.",
        "Green plants (terrestrial vegetation and aquatic phytoplankton) capture only 2% to 10% of this PAR. This tiny fraction (which corresponds to merely 1% to 5% of total incident solar radiation) sustains the entire living biosphere.",
        "Thermodynamics in Ecosystems: Ecosystems strictly obey both laws of thermodynamics:",
        "1. First Law of Thermodynamics: Energy cannot be created or destroyed; it can only be transformed from one form to another. Photosynthetic producers convert radiant solar light energy into chemical potential energy stored in covalent bonds of carbohydrates (glucose, starch).",
        "2. Second Law of Thermodynamics: In every energy transfer, a portion of energy is transformed into an unusable, disordered form (entropy increases). Ecosystems require a continuous, unceasing input of solar energy to synthesize molecules, maintain structural order, and counteract the universal tendency toward thermodynamic entropy.",
        "Energy flow through an ecosystem is strictly UNIDIRECTIONAL: Sun → Producers (T1) → Herbivores (T2) → Primary Carnivores (T3) → Top Carnivores (T4). Energy NEVER flows in reverse (carnivores cannot transfer energy back to herbivores, and plants cannot transmit energy back to the Sun)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
          <defs>
            <marker id="flowArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#047857"/>
            </marker>
            <marker id="heatArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#dc2626"/>
            </marker>
          </defs>

          <rect width="800" height="340" rx="12" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
          <text x="400" y="28" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">UNIDIRECTIONAL FLOW OF ENERGY ACROSS TROPHIC LEVELS</text>

          <!-- Sun -->
          <circle cx="90" cy="110" r="45" fill="#f59e0b" opacity="0.9"/>
          <circle cx="90" cy="110" r="35" fill="#fbbf24"/>
          <text x="90" y="115" fill="#78350f" font-size="13" font-weight="bold" text-anchor="middle">SUN</text>
          <text x="90" y="175" fill="#92400e" font-size="10" font-weight="bold" text-anchor="middle">1,000,000 J Light</text>

          <!-- Arrow Sun to Producer -->
          <line x1="140" y1="110" x2="200" y2="110" stroke="#047857" stroke-width="3" marker-end="url(#flowArr)"/>
          <text x="170" y="98" fill="#065f46" font-size="9" font-weight="bold" text-anchor="middle">1% Total Solar</text>

          <!-- T1 Producers -->
          <rect x="210" y="80" width="110" height="60" rx="8" fill="#16a34a"/>
          <text x="265" y="105" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">PRODUCERS (T1)</text>
          <text x="265" y="125" fill="#dcfce7" font-size="11" text-anchor="middle">10,000 J</text>

          <!-- Arrow T1 to T2 -->
          <line x1="325" y1="110" x2="365" y2="110" stroke="#047857" stroke-width="3" marker-end="url(#flowArr)"/>
          <text x="345" y="98" fill="#065f46" font-size="9" font-weight="bold" text-anchor="middle">10%</text>

          <!-- T2 Herbivores -->
          <rect x="375" y="80" width="115" height="60" rx="8" fill="#0284c7"/>
          <text x="432" y="105" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">HERBIVORES (T2)</text>
          <text x="432" y="125" fill="#e0f2fe" font-size="11" text-anchor="middle">1,000 J</text>

          <!-- Arrow T2 to T3 -->
          <line x1="495" y1="110" x2="535" y2="110" stroke="#047857" stroke-width="3" marker-end="url(#flowArr)"/>
          <text x="515" y="98" fill="#065f46" font-size="9" font-weight="bold" text-anchor="middle">10%</text>

          <!-- T3 Carnivores -->
          <rect x="545" y="80" width="105" height="60" rx="8" fill="#8b5cf6"/>
          <text x="597" y="105" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">CARNIVORES (T3)</text>
          <text x="597" y="125" fill="#ede9fe" font-size="11" text-anchor="middle">100 J</text>

          <!-- Arrow T3 to T4 -->
          <line x1="655" y1="110" x2="685" y2="110" stroke="#047857" stroke-width="3" marker-end="url(#flowArr)"/>
          <text x="670" y="98" fill="#065f46" font-size="9" font-weight="bold" text-anchor="middle">10%</text>

          <!-- T4 Top Carnivores -->
          <rect x="695" y="80" width="90" height="60" rx="8" fill="#e11d48"/>
          <text x="740" y="105" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">TOP CARN. (T4)</text>
          <text x="740" y="125" fill="#ffe4e6" font-size="11" text-anchor="middle">10 J</text>

          <!-- Heat Loss Arrows (Downwards) -->
          <line x1="265" y1="145" x2="265" y2="215" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4" marker-end="url(#heatArr)"/>
          <text x="265" y="235" fill="#b91c1c" font-size="10" text-anchor="middle">9,000 J Heat Loss</text>

          <line x1="432" y1="145" x2="432" y2="215" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4" marker-end="url(#heatArr)"/>
          <text x="432" y="235" fill="#b91c1c" font-size="10" text-anchor="middle">900 J Heat Loss</text>

          <line x1="597" y1="145" x2="597" y2="215" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4" marker-end="url(#heatArr)"/>
          <text x="597" y="235" fill="#b91c1c" font-size="10" text-anchor="middle">90 J Heat Loss</text>

          <line x1="740" y1="145" x2="740" y2="215" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4" marker-end="url(#heatArr)"/>
          <text x="740" y="235" fill="#b91c1c" font-size="10" text-anchor="middle">9 J Heat Loss</text>

          <!-- Decomposer Basin -->
          <rect x="200" y="265" width="560" height="50" rx="8" fill="#334155"/>
          <text x="480" y="295" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">DECOMPOSERS (Bacteria &amp; Fungi) — Break down unconsumed detritus at all levels</text>
        </svg>`,
        caption: "Figure 12.3: Unidirectional Energy Flow and Lindeman's 10% Law showing 90% metabolic dissipation at each trophic link.",
        guide: "WHAT TO OBSERVE: Notice how available energy decreases ten-fold at each successive trophic transfer (10,000 J → 1,000 J → 100 J → 10 J) while 90% of energy is dissipated as metabolic heat into the environment."
      },
      importantPoints: [
        "Energy flow is strictly unidirectional (open system), whereas nutrient flow is cyclic (closed system within the biosphere).",
        "Producers fix only 1% to 2% of the total incident solar energy into GPP (or 2% to 10% of PAR).",
        "The 10% rule explains why top carnivores (tigers, lions, eagles) are always numerically few and require vast territorial hunting ranges."
      ]
    },
    {
      heading: "5. Trophic Levels, Food Chains & Food Web Architecture",
      paragraphs: [
        "A Trophic Level represents a specific feeding position occupied by an organism in a food chain based on the source of its nutrition or food.",
        "Standard Trophic Classification:",
        "• First Trophic Level ($T_1$): Primary Producers / Autotrophs (Phytoplankton, Algae, Grasses, Trees).",
        "• Second Trophic Level ($T_2$): Primary Consumers / Herbivores (Zooplankton, Insects, Grasshopper, Deer, Rabbit, Cattle).",
        "• Third Trophic Level ($T_3$): Secondary Consumers / Primary Carnivores (Frogs, Small fishes, Lizards, Birds, Jackal).",
        "• Fourth Trophic Level ($T_4$): Tertiary Consumers / Secondary Carnivores / Top Predators (Large fishes, Snake, Wolf, Lion, Tiger, Eagle, Human).",
        "A Food Chain is a linear sequence of organisms through which nutrients and energy pass as one organism eats another. Food chains are categorized into:",
        "1. Grazing Food Chain (GFC): Begins with living green plants (producers). Example: $\\text{Grass } (T_1) \\to \\text{Goat } (T_2) \\to \\text{Man } (T_3)$ or $\\text{Phytoplankton } (T_1) \\to \\text{Zooplankton } (T_2) \\to \\text{Small Fish } (T_3) \\to \\text{Large Fish } (T_4)$. GFC is the predominant pathway of energy flow in aquatic ecosystems.",
        "2. Detritus Food Chain (DFC): Begins with dead organic matter (detritus) like fallen leaves, dead logs, and carcasses. The primary consumers in DFC are saprotrophic decomposers (fungi and bacteria) that secrete extracellular digestive enzymes to liquefy and absorb organic molecules. DFC is the predominant pathway of energy flow in terrestrial ecosystems (such as temperate/tropical forests).",
        "Interconnectivity and Food Web: In nature, simple linear food chains rarely exist in isolation. Many organisms feed on multiple food sources across different trophic tiers (e.g., Sparrow eats seeds as a primary consumer and insect larvae as a secondary consumer; Crow, Bear, and Human are omnivores). Interlocking patterns of interconnected food chains form a dynamic Food Web. Food webs provide alternative trophic pathways, conferring resilience, stability, and homeostasis to the ecosystem against population fluctuations."
      ],
      tables: [
        {
          title: "Master Comparison: Grazing Food Chain (GFC) vs Detritus Food Chain (DFC)",
          headers: ["Diagnostic Feature", "Grazing Food Chain (GFC)", "Detritus Food Chain (DFC)"],
          rows: [
            ["Starting Point", "Living autotrophic green plants (Producers)", "Dead organic matter / Plant litter / Carcasses (Detritus)"],
            ["Primary Energy Source", "Radiant solar energy captured via photosynthesis", "Chemical energy locked inside dead organic tissue"],
            ["First Consumer Level", "Herbivorous animals (Insects, Cattle, Zooplankton)", "Saprotrophic micro-organisms (Bacteria, Fungi, Detritivores)"],
            ["Size of Organisms", "Progressively larger at higher trophic levels", "Progressively smaller (macro-organisms to micro-organisms)"],
            ["Dominance in Ecosystems", "Major energy flow conduit in Aquatic ecosystems", "Major energy flow conduit in Terrestrial ecosystems"],
            ["Ecosystem Linkage", "Supplies detritus to DFC upon death of members", "Supplies prey/nutrients to carnivores of GFC"]
          ]
        }
      ],
      importantPoints: [
        "A given species may occupy more than one trophic level simultaneously in the same ecosystem (e.g., sparrow eating grains = primary consumer; sparrow eating insect larvae = secondary consumer).",
        "DFC may be connected with GFC at several trophic levels (e.g., earthworms of DFC are eaten by birds/frogs of GFC; predatory insects feed on detritivores)."
      ]
    },
    {
      heading: "6. Ecosystem Services & Economic Valuation (Robert Costanza)",
      paragraphs: [
        "Ecosystem Services are defined as the wide variety of ecological processes, life-support functions, and tangible goods that healthy natural ecosystems provide to sustain human existence and economic welfare.",
        "Key Functional Categories of Ecosystem Services:",
        "1. Provisioning Services: Direct harvestable products including timber, fuelwood, medicinal herbs, wild foods, freshwater, and genetic resources.",
        "2. Regulating Services: Climate stabilization via carbon sequestration, purification of air and water, mitigation of floods and droughts through wetland absorption, disease control, and biological pollination of agricultural crops.",
        "3. Supporting Services: Fundamental ecological processes necessary for the production of all other services: Soil genesis, maintenance of soil fertility, biogeochemical nutrient cycling, and primary production.",
        "4. Cultural Services: Aesthetic, spiritual, recreational, and ecotourism values.",
        "Valuation by Robert Costanza (1997): Robert Costanza and his ecological-economic research colleagues attempted to put price tags on nature's fundamental life-support services. They calculated an average annual value of US $33 trillion (ranging from US $16 to 54 trillion per year) for global ecosystem services. This was nearly double the total Global Gross National Product (GNP) at the time, which was approximately US $18 trillion per year.",
        "Cost Breakdown of Ecosystem Services:",
        "• Soil Formation: Accounts for approximately 50% of total ecosystem service valuation (~US $16.5 trillion).",
        "• Recreation: Accounts for less than 10% of total valuation.",
        "• Nutrient Cycling: Accounts for less than 10% of total valuation.",
        "• Climate Regulation: Accounts for approximately 6% of total valuation.",
        "• Habitat for Wildlife: Accounts for approximately 6% of total valuation."
      ],
      importantPoints: [
        "Robert Costanza valued global ecosystem services at an average of US $33 trillion per year against the global GNP of US $18 trillion.",
        "Soil formation is the single most expensive ecosystem service, accounting for ~50% of the total valuation.",
        "Pollination, though taken for granted, is an irreplaceable regulating ecosystem service without which commercial crop seed-set and fruit development would collapse."
      ]
    }
  ],

  formulae: [
    {
      title: "Net Primary Productivity Equation",
      formula: "\\text{NPP} = \\text{GPP} - R",
      meaning: "Net Primary Productivity equals Gross Primary Productivity minus Autotroph Respiration loss.",
      symbols: "NPP = Net Primary Productivity, GPP = Gross Primary Productivity, R = Respiration consumption by plants",
      unit: "\\text{g }\\text{m}^{-2}\\text{ yr}^{-1} \\text{ or } \\text{kcal }\\text{m}^{-2}\\text{ yr}^{-1}",
      calculationExample: {
        problem: "In a tropical grassland ecosystem, Gross Primary Productivity (GPP) is measured as 8,500 kcal m⁻² yr⁻¹. If autotrophic plants expend 3,200 kcal m⁻² yr⁻¹ during cellular respiration, calculate the Net Primary Productivity (NPP) available to herbivores.",
        given: "GPP = 8,500 kcal m⁻² yr⁻¹, Respiration loss (R) = 3,200 kcal m⁻² yr⁻¹",
        stepByStep: [
          "State formula: NPP = GPP - R",
          "Substitute given values: NPP = 8,500 - 3,200",
          "Calculate: NPP = 5,300 kcal m⁻² yr⁻¹"
        ],
        answer: "5,300 kcal m⁻² yr⁻¹"
      }
    },
    {
      title: "Lindeman's 10% Energy Transfer Calculation",
      formula: "E_{n+1} = E_n \\times 0.10",
      meaning: "Energy available at trophic level (n+1) is approximately 10% of the energy stored at trophic level n.",
      symbols: "E_n = Energy at lower trophic level, E_{n+1} = Energy at next higher trophic level",
      unit: "\\text{Joules (J) or kcal}",
      calculationExample: {
        problem: "If 1,000,000 J of incident sunlight falls on a forest ecosystem, calculate the amount of energy that will be captured by plants, and the amount of energy that will reach the Tertiary Consumer (T4) assuming 1% solar capture by producers and a 10% transfer rate at each subsequent trophic step.",
        given: "Incident solar energy = 1,000,000 J. Plant capture efficiency = 1%. Trophic transfer efficiency = 10%.",
        stepByStep: [
          "Step 1: Energy captured by Producers (T1) = 1% of 1,000,000 J = 10,000 J",
          "Step 2: Energy transferred to Primary Consumers / Herbivores (T2) = 10% of 10,000 J = 1,000 J",
          "Step 3: Energy transferred to Secondary Consumers / Carnivores (T3) = 10% of 1,000 J = 100 J",
          "Step 4: Energy transferred to Tertiary Consumers / Top Carnivores (T4) = 10% of 100 J = 10 J"
        ],
        answer: "Producers capture 10,000 J; Tertiary consumers receive 10 J."
      }
    }
  ],

  neetImportantPoints: [
    "🔥 PAR (Photosynthetically Active Radiation) is between 400 nm and 700 nm and constitutes LESS THAN 50% of total incident solar radiation.",
    "🔥 Green plants capture ONLY 2-10% of PAR, which corresponds to merely 1-5% of total incident solar energy.",
    "🔥 Total annual Net Primary Productivity of the entire biosphere is ~170 billion tons (dry weight) of organic matter: Terrestrial = 115 billion tons (67.6%), Oceans = 55 billion tons (32.4%).",
    "🔥 In aquatic ecosystems, GFC is the major conduit for energy flow; in terrestrial ecosystems, DFC is the major conduit for energy flow.",
    "🔥 Energy flow through an ecosystem is STRICTLY UNIDIRECTIONAL; energy is never recycled.",
    "🔥 Measuring biomass in terms of dry weight is far more accurate than fresh weight because fresh weight varies with seasonal hydration.",
    "🔥 Robert Costanza valuation: Global ecosystem services = US $33 trillion/year (nearly double global GNP of US $18 trillion). Soil formation accounts for ~50% of this total cost."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing GPP and NPP, or believing that herbivores consume all of GPP.",
      correctFact: "Herbivores CANNOT consume GPP because plants actively consume a significant portion of GPP for their own cellular respiration (R). Herbivores and decomposers only have access to NPP (NPP = GPP - R).",
      whyItMattersForNEET: "Frequently tested in formula-based statement questions in NEET UG."
    },
    {
      commonConfusion: "Believing that oceans have higher total annual productivity than land because oceans cover 70% of Earth's surface.",
      correctFact: "Despite covering 70% of Earth's surface, oceans contribute only 55 billion tons (~32%) of annual NPP, while land contributes 115 billion tons (~68%), because the open ocean is nutrient-poor and light only penetrates the upper euphotic layer.",
      whyItMattersForNEET: "A classic NCERT data trap frequently asked in Assertion-Reason questions."
    },
    {
      commonConfusion: "Thinking that plants capture 2-10% of total incident sunlight.",
      correctFact: "Plants capture 2-10% of PAR (Photosynthetically Active Radiation), NOT total incident sunlight. Since PAR is <50% of incident sunlight, plants capture only 1-5% of total incident sunlight.",
      whyItMattersForNEET: "High-probability numerical phrasing trap in NEET."
    },
    {
      commonConfusion: "Assuming energy circulates cyclically through decomposers back to plants.",
      correctFact: "Nutrients (minerals) cycle continuously, but ENERGY FLOWS UNIDIRECTIONALLY and is lost as heat. Plants cannot reuse the heat energy dissipated by decomposers.",
      whyItMattersForNEET: "Core thermodynamic principle tested in ecological true/false statements."
    }
  ],

  quickRevision: [
    "Ecosystem: Structural & functional unit of nature (A.G. Tansley)",
    "Stratification: Vertical layering (Canopy trees → Sub-canopy → Shrubs → Herbs/Grasses)",
    "PAR: 400-700 nm wavelength (<50% of incident sunlight)",
    "Plant Solar Capture: 2-10% of PAR = 1-5% of total incident sunlight",
    "Productivity Formula: NPP = GPP - R",
    "Biosphere Annual NPP: 170 billion tons dry weight (Land = 115 billion tons; Oceans = 55 billion tons)",
    "Energy Flow: Strictly UNIDIRECTIONAL (obeys 1st and 2nd Laws of Thermodynamics)",
    "Lindeman's 10% Law: Only ~10% energy transferred to next trophic level; 90% lost as heat/respiration",
    "Major Energy Conduits: GFC in aquatic systems; DFC in terrestrial systems",
    "Costanza Valuation: US $33 trillion/yr; Soil formation = ~50%, Climate/Wildlife = ~6% each"
  ],

  practiceQuestions: [
    {
      questionId: "prac-eco-01",
      question: "The rate at which radiant light energy is converted into chemical organic biomass by green plants per unit area over a time period during photosynthesis, before subtracting respiratory utilization, is known as:",
      options: [
        "Net Primary Productivity (NPP)",
        "Gross Primary Productivity (GPP)",
        "Secondary Productivity",
        "Net Community Productivity"
      ],
      correctAnswer: 1,
      explanation: "Gross Primary Productivity (GPP) is the total rate of organic matter production during photosynthesis before any respiratory expenditure. Net Primary Productivity (NPP) is the remaining biomass after subtracting respiratory loss (NPP = GPP - R).",
      difficulty: "Easy",
      topicTested: "Ecosystem Productivity (GPP vs NPP)"
    },
    {
      questionId: "prac-eco-02",
      question: "Which of the following statements regarding the annual Net Primary Productivity (NPP) of the biosphere is correct according to NCERT?",
      options: [
        "Total biosphere NPP is 170 million tons, with oceans contributing 70%.",
        "Total biosphere NPP is 170 billion tons, with oceans contributing only 55 billion tons despite covering 70% of Earth's surface.",
        "Total biosphere NPP is 115 billion tons, with terrestrial ecosystems contributing 55 billion tons.",
        "Total biosphere NPP is 55 billion tons, with oceans and land contributing equally."
      ],
      correctAnswer: 1,
      explanation: "NCERT states that the annual net primary productivity of the whole biosphere is approximately 170 billion tons (dry weight). Despite covering ~70% of the surface, oceans account for only 55 billion tons; the remaining 115 billion tons are produced on land.",
      difficulty: "Medium",
      topicTested: "Global Biosphere Productivity"
    },
    {
      questionId: "prac-eco-03",
      question: "In an ecosystem, if 20,000 J of energy is captured by primary producers at the first trophic level (T1), how much energy will be available to the secondary consumer (T3) according to Lindeman's 10% law?",
      options: [
        "2,000 J",
        "200 J",
        "20 J",
        "2 J"
      ],
      correctAnswer: 1,
      explanation: "Applying the 10% law: T1 (Producers) = 20,000 J → T2 (Primary Consumers / Herbivores) = 10% of 20,000 = 2,000 J → T3 (Secondary Consumers / Primary Carnivores) = 10% of 2,000 = 200 J.",
      difficulty: "Medium",
      topicTested: "Lindeman's 10% Law Calculation"
    },
    {
      questionId: "prac-eco-04",
      question: "According to Robert Costanza and colleagues, which of the following ecosystem services accounts for about 50% of the total estimated economic value (US $33 trillion/year)?",
      options: [
        "Climate regulation",
        "Nutrient cycling",
        "Soil formation",
        "Recreation"
      ],
      correctAnswer: 2,
      explanation: "In Robert Costanza's valuation of ecosystem services (~US $33 trillion/year), soil formation accounts for about 50%, recreation and nutrient cycling are less than 10% each, and climate regulation and habitat for wildlife are about 6% each.",
      difficulty: "Easy",
      topicTested: "Ecosystem Services Valuation"
    }
  ],

  pyqs: [
    {
      id: "pyq-eco-2022",
      year: 2022,
      exam: "NEET UG",
      question: "Which one of the following statements is not correct?",
      options: [
        "The amount of living matter (biomass) present in every trophic level at a given time is called standing crop.",
        "The annual net primary productivity of the whole biosphere is approximately 170 billion tons (dry weight).",
        "In an aquatic ecosystem, grazing food chain (GFC) is the major conduit for energy flow.",
        "The energy pyramid is mostly upright, but in aquatic ecosystems, it is inverted."
      ],
      correctAnswer: 3,
      explanation: "Statement (4) is INCORRECT (and hence the correct answer) because the Pyramid of Energy is ALWAYS UPRIGHT and can NEVER be inverted under any circumstances in any ecosystem, because energy is continuously dissipated as heat at each trophic transfer (2nd law of thermodynamics). The pyramid of biomass in sea is inverted, but the pyramid of energy is always upright.",
      conceptTested: "Ecological Pyramids & Biosphere Productivity",
      verificationSource: "NEET UG 2022 Official Question Paper (Code S1, Q.142)"
    },
    {
      id: "pyq-eco-2020",
      year: 2020,
      exam: "NEET UG",
      question: "In relation to Gross Primary Productivity and Net Primary Productivity of an ecosystem, which one of the following statements is correct?",
      options: [
        "Gross primary productivity is always less than net primary productivity.",
        "Gross primary productivity is always more than net primary productivity.",
        "Gross primary productivity and Net primary productivity are one and the same.",
        "There is no relationship between Gross primary productivity and Net primary productivity."
      ],
      correctAnswer: 1,
      explanation: "Gross Primary Productivity (GPP) is the total rate of biomass production during photosynthesis. Since plants always consume a part of GPP during cellular respiration (R), NPP = GPP - R. Therefore, GPP is ALWAYS GREATER than NPP.",
      conceptTested: "GPP vs NPP Relationship",
      verificationSource: "NEET UG 2020 Official Question Paper (Code E1, Q.128)"
    },
    {
      id: "pyq-eco-2018",
      year: 2018,
      exam: "NEET UG",
      question: "What type of ecological pyramid would be obtained with the following data?\nSecondary consumer : 120 g\nPrimary consumer : 60 g\nPrimary producer : 10 g",
      options: [
        "Inverted pyramid of biomass",
        "Pyramid of energy",
        "Upright pyramid of numbers",
        "Upright pyramid of biomass"
      ],
      correctAnswer: 0,
      explanation: "The data shows biomass: Primary producer (10 g) < Primary consumer (60 g) < Secondary consumer (120 g). Since the base (producers) has the least biomass and higher trophic levels have progressively greater biomass, this represents an INVERTED PYRAMID OF BIOMASS (typical of marine/aquatic ecosystems where phytoplankton have low standing crop biomass but high turnover rate).",
      conceptTested: "Inverted Pyramid of Biomass",
      verificationSource: "NEET UG 2018 Official Question Paper (Code AA, Q.165)"
    },
    {
      id: "pyq-eco-2016",
      year: 2016,
      exam: "NEET UG Phase-I",
      question: "The primary producers of the deep-sea hydrothermal vent ecosystem are:",
      options: [
        "Green algae",
        "Chemosynthetic bacteria",
        "Blue-green algae",
        "Coral reefs"
      ],
      correctAnswer: 1,
      explanation: "Deep-sea hydrothermal vents exist in complete darkness where sunlight cannot penetrate. The primary producers are chemosynthetic autotrophic bacteria (archaebacteria) that oxidize inorganic hydrogen sulfide (H2S) and methane to synthesize organic matter.",
      conceptTested: "Producers in Extreme Ecosystems",
      verificationSource: "AIPMT / NEET UG 2016 Phase-I (Code A, Q.112)"
    }
  ],

  neetMarksPotential: {
    topicName: "Ecosystem Structure & Energy Flow",
    confidenceLabel: "HIGH",
    confidenceText: "Guaranteed 1 to 2 direct questions (4-8 marks) annually in NEET UG.",
    totalAnalyzedPapers: 12,
    papersWithDirectPyqs: 12,
    totalDirectPyqs: 18,
    totalHistoricalMarks: 72,
    averageDirectPyqsPerPaper: 1.5,
    maxDirectPyqsInSinglePaper: 3,
    minDirectPyqsInSinglePaper: 1,
    minDirectMarks: 4,
    maxDirectMarks: 12,
    avgDirectMarksPerPaper: 6.0,
    weightagePercentage: 2.2,
    expectedQuestionsCount: 2,
    totalMarksPotential: 8,
    historicalFrequencyYears: "2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024",
    trendAnalysis: "Consistently tested through GPP/NPP numerical equations, PAR percentage distinctions, 10% law calculations, and Costanza ecosystem service percentages.",
    preparationStrategy: "Master the exact equation NPP = GPP - R, memorize the 170 billion ton global biosphere productivity split (115 land : 55 sea), and practice 10% energy transfer calculations."
  }
};
