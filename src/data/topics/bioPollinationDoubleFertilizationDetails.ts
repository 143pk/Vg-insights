import { DetailedTopicContent } from '../../types/neet';

export const bioPollinationDoubleFertilizationDetails: DetailedTopicContent = {
  topicId: "bio-pollination-double-fertilization",
  topicName: "Pollination & Double Fertilization",
  subject: "Biology",
  class: "Class 12",
  classification: "Reproduction",
  chapter: "Sexual Reproduction in Flowering Plants",

  whatIsThisTopic: "A comprehensive NCERT-aligned teaching guide covering mechanisms of pollination (autogamy, geitonogamy, xenogamy), chasmogamous vs cleistogamous flowers, abiotic pollination (wind, water), biotic pollination (insects, birds, bats, obligate mutualisms), outbreeding devices, pollen-pistil interaction, pollen tube growth, and double fertilization (syngamy and triple fusion).",

  basicIdea: [
    "Pollination is the physical transfer of pollen grains from the anther to the stigma of a pistil. It is classified into Autogamy (self-pollination in same flower), Geitonogamy (pollination between different flowers on same plant), and Xenogamy (cross-pollination between different plants).",
    "Cleistogamous flowers (e.g., Viola, Oxalis, Commelina) remain closed, ensuring 100% autogamy and assured seed set without pollinators, but cause inbreeding depression. Chasmogamous flowers open to expose anthers and stigmas.",
    "Abiotic pollination: Wind (Anemophily) is most common; pollen is light, non-sticky, produced in vast numbers, with feathery stigmas and well-exposed anthers (e.g., Grasses, Corn cob). Water (Hydrophily) occurs in ~30 monocot genera (e.g., Vallisneria, Hydrilla, Zostera).",
    "Crucial NCERT Exception: Water hyacinth (Eichhornia) and Water lily (Nymphaea) grow in water but are pollinated above water by insects or wind, NOT water!",
    "Biotic pollination (Zoophily/Entomophily): Insects (especially bees) are primary vectors. Floral rewards include nectar, pollen, and safe egg-laying sites (e.g., 6-foot tall Amorphophallus flower and Yucca moth Pronuba obligate mutualism).",
    "Outbreeding devices prevent inbreeding depression: Non-synchronous pollen release (dichogamy), spatial separation (herkogamy), genetic self-incompatibility, and dioecy (separate male and female plants like Papaya).",
    "Pollen-Pistil Interaction: A dynamic chemical dialogue between pollen and stigma proteins that determines pollen compatibility. Only compatible pollen hydrates, germinates, and sends a pollen tube down the style.",
    "Double Fertilization (Unique to Angiosperms): Discovered by Nawaschin in Lilium/Fritillaria. One male gamete (n) fuses with the Egg (n) to form a Diploid Zygote (2n) (Syngamy). The second male gamete (n) fuses with 2 Polar Nuclei (n+n) to form a Triploid Primary Endosperm Nucleus (PEN, 3n) (Triple Fusion)."
  ],

  importantTerms: [
    {
      term: "Autogamy vs Geitonogamy vs Xenogamy",
      definition: "Autogamy is self-pollination within same flower. Geitonogamy is pollination between two flowers on same plant (functionally cross-pollination, genetically autogamy). Xenogamy is pollination between flowers on different plants.",
      neetNote: "NEET favorite: Geitonogamy requires a pollinator (functional cross-pollination) but results in genetically identical offspring (genetic self-pollination)."
    },
    {
      term: "Cleistogamous Flowers",
      definition: "Flowers that never open at maturity, ensuring complete self-pollination (autogamy) and 100% seed-set even in total absence of pollinators.",
      neetNote: "Examples: Viola (common pansy), Oxalis, and Commelina. Disadvantage: Leads to inbreeding depression."
    },
    {
      term: "Outbreeding Devices",
      definition: "Structural, temporal, or genetic adaptations evolved by hermaphrodite flowers to discourage self-pollination and force cross-pollination.",
      neetNote: "Includes dichogamy, herkogamy, self-incompatibility, and dicliny/unisexuality."
    },
    {
      term: "Self-Incompatibility",
      definition: "A genetically controlled mechanism in plants that prevents self-pollen from fertilizing ovules by inhibiting pollen germination or pollen tube growth in the style.",
      neetNote: "Prevents inbreeding; encoded by multi-allelic S-genes."
    },
    {
      term: "Double Fertilization",
      definition: "The occurrence of two distinct nuclear fusions (Syngamy and Triple Fusion) within the same embryo sac in angiosperms.",
      neetNote: "Universal and unique diagnostic feature of angiosperms. Discovered by S.G. Nawaschin."
    },
    {
      term: "Triple Fusion",
      definition: "Fusion of the second haploid male gamete (n) with two haploid polar nuclei (n+n) in the central cell to produce the triploid Primary Endosperm Nucleus (PEN, 3n).",
      neetNote: "Produces nutritive endosperm (3n) that feeds the developing zygote (2n)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Types of Pollination: Autogamy, Geitonogamy & Xenogamy",
      paragraphs: [
        "Pollination is defined as the transfer of pollen grains shed from the anther to the receptive stigma of a pistil. Depending on the source of pollen, pollination is divided into three distinct types:",
        "1. Autogamy (Self-Pollination):",
        "• Transfer of pollen grains from the anther to the stigma of the SAME flower.",
        "• Requires exact synchrony in pollen release and stigma receptivity, as well as close physical proximity of anther and stigma.",
        "• Types of Flowers in Plants like Viola (common pansy), Oxalis, and Commelina:",
        "a) Chasmogamous Flowers: Normal open flowers with exposed anthers and stigmas.",
        "b) Cleistogamous Flowers: Closed flowers that NEVER open at all! Anthers dehisce inside the closed bud, ensuring pollen directly contacts the stigma. Advantages: 100% assured seed set even without pollinators! Disadvantage: No genetic variation, leading to severe inbreeding depression.",
        "2. Geitonogamy:",
        "• Transfer of pollen grains from the anther of one flower to the stigma of ANOTHER flower on the SAME plant.",
        "• Functional Aspect: Requires a pollinating agent (wind, water, or insect), so it is functionally cross-pollination.",
        "• Genetic Aspect: Since both flowers belong to the same parent plant, the pollen comes from the same genetic source, so it is genetically equivalent to autogamy!",
        "3. Xenogamy (True Cross-Pollination):",
        "• Transfer of pollen grains from the anther to the stigma of a flower on a DIFFERENT plant of the same species.",
        "• Brings genetically different types of pollen grains to the stigma, generating maximum genetic variation and evolutionary adaptability."
      ],
      tables: [
        {
          title: "Comprehensive Comparison of Autogamy, Geitonogamy & Xenogamy",
          headers: ["Feature", "Autogamy", "Geitonogamy", "Xenogamy"],
          rows: [
            ["Pollen Source", "Same Flower", "Another flower on SAME plant", "Flower on DIFFERENT plant"],
            ["Pollinator Required?", "No (In Cleistogamous)", "Yes (Functional cross-pollination)", "Yes (True cross-pollination)"],
            ["Genetic Nature", "Identical (Self)", "Identical (Self)", "Recombinant (Cross)"],
            ["Variation Produced", "None", "None", "High genetic variation"],
            ["Examples", "Viola, Oxalis, Commelina", "Maize, Cucurbits", "Papaya, Palms, Sunflower"]
          ]
        }
      ],
      importantPoints: [
        "Cleistogamous flowers never open and produce assured seed set even without pollinators.",
        "Geitonogamy is functionally cross-pollination but genetically self-pollination."
      ]
    },
    {
      heading: "2. Agents of Pollination: Abiotic (Wind, Water) & Biotic (Animals, Insects)",
      paragraphs: [
        "Plants use two abiotic agents (Wind and Water) and one biotic agent (Animals) to achieve pollination. Biotic agents dominate in nature (~80%+ of angiosperms).",
        "1. Abiotic Agents:",
        "A. Wind Pollination (Anemophily): Most common abiotic pollination mode.",
        "• Pollen Adaptations: Lightweight, dry, non-sticky, produced in enormous quantities.",
        "• Flower Adaptations: Well-exposed stamens, large feathery stigmas to easily trap air-borne pollen, single ovule per ovary, numerous small flowers packed into an inflorescence (e.g., Grasses, Corn cob tassels where tassels are styles and stigmas waving in the wind).",
        "B. Water Pollination (Hydrophily): Rare, restricted to ~30 genera, mostly monocotyledons.",
        "• Vallisneria (Submerged fresh water plant): Female flower reaches the water surface by a long coiled stalk. Male flowers are released on the surface and float passively to meet female stigmas.",
        "• Zostera (Sea grass): Female flowers remain submerged underwater. Long ribbon-like pollen grains released underwater float passively with mucilaginous coating to prevent wetting.",
        "• CRITICAL NEET TRAP: Aquatic plants like Water Hyacinth (Eichhornia) and Water Lily (Nymphaea) grow in water, but their flowers emerge ABOVE water level and are pollinated by INSECTS or WIND, NOT by water!",
        "2. Biotic Agents (Zoophily / Entomophily):",
        "• Bees, butterflies, beetles, wasps, ants, moths, birds (sunbirds, hummingbirds), and bats. Bees are the dominant pollinators.",
        "• Animal-pollinated flowers are large, colorful, fragrant, and rich in nectar.",
        "• Floral Rewards: Nectar and pollen grains serve as edible rewards. Some plants offer safe egg-laying sites (e.g., 6-foot tall Amorphophallus flower and Yucca moth Pronuba obligate mutualism, where neither species can complete its life cycle without the other!).",
        "• Nectar / Pollen Robbers: Animals that consume nectar or pollen without causing pollination."
      ],
      tables: [
        {
          title: "Pollination Vectors & Characteristic Floral Adaptations",
          headers: ["Vector / Mode", "Term", "Pollen Characteristics", "Floral Features & Examples"],
          rows: [
            ["Wind", "Anemophily", "Lightweight, non-sticky, powdery", "Feathery stigma, single ovule, corn cob, grasses"],
            ["Water", "Hydrophily", "Mucilage-coated, ribbon-like", "Unwettable pollen, Vallisneria, Zostera"],
            ["Insects (Bees)", "Entomophily", "Sticky pollen (pollenkit)", "Large, colorful, fragrant, rich in nectar"],
            ["Birds", "Ornithophily", "Sticky, abundant", "Tubular, brightly colored flowers (Bignonia, Silk cotton)"],
            ["Bats", "Chiropterophily", "Copious pollen", "Nocturnal, strong musky odor (Kigelia, Anthocephalus)"]
          ]
        }
      ],
      importantPoints: [
        "Water Hyacinth and Water Lily are pollinated by insects or wind, NOT by water.",
        "Yucca plant and Pronuba moth share an obligate mutualism for pollination and larval development."
      ]
    },
    {
      heading: "3. Outbreeding Devices: Preventing Inbreeding Depression",
      paragraphs: [
        "Continuous self-pollination results in Inbreeding Depression (reduced fertility, vigor, and survival). To prevent self-pollination and promote cross-pollination, hermaphrodite flowers have evolved several Outbreeding Devices:",
        "1. Dichogamy (Temporal Separation): Pollen release and stigma receptivity are not synchronized. Either pollen is released before stigma becomes receptive (Protandry, e.g., Sunflower) or stigma becomes receptive before pollen release (Protogyny, e.g., Gloriosa).",
        "2. Herkogamy (Spatial Separation): Anthers and stigmas are placed at different spatial positions so that pollen cannot contact the stigma of the same flower.",
        "3. Self-Incompatibility (Genetic Block): A genetically controlled mechanism that prevents self-pollen (from same flower or same plant) from fertilizing ovules by inhibiting pollen germination or pollen tube growth in the style.",
        "4. Dicliny / Unisexuality (Production of Single-Sex Flowers):",
        "• Monoecious Plants (e.g., Castor, Maize, Cucurbits): Male and female flowers present on the SAME plant. This prevents Autogamy, but DOES NOT prevent Geitonogamy!",
        "• Dioecious Plants (e.g., Papaya, Date palm): Male and female flowers present on SEPARATE individual plants. This prevents BOTH Autogamy AND Geitonogamy!"
      ],
      tables: [
        {
          title: "Outbreeding Mechanisms & Their Impact on Self-Pollination",
          headers: ["Outbreeding Device", "Mechanism", "Prevents Autogamy?", "Prevents Geitonogamy?"],
          rows: [
            ["Dichogamy", "Pollen and stigma mature at different times", "Yes", "No"],
            ["Herkogamy", "Physical barrier between anther and stigma", "Yes", "No"],
            ["Self-Incompatibility", "Genetic inhibition of self-pollen tube growth", "Yes", "Yes (Inhibits self genetic line)"],
            ["Monoecy (Castor, Maize)", "Separate male/female flowers on same plant", "Yes", "NO (Geitonogamy still possible)"],
            ["Dioecy (Papaya, Date Palm)", "Male and female flowers on separate plants", "YES", "YES (Both completely prevented)"]
          ]
        }
      ],
      importantPoints: [
        "Monoecy (Castor, Maize) prevents autogamy but allows geitonogamy.",
        "Dioecy (Papaya, Date palm) prevents both autogamy and geitonogamy."
      ]
    },
    {
      heading: "4. Pollen-Pistil Interaction & Pollen Tube Chemotropic Growth",
      paragraphs: [
        "Pollination does not guarantee compatible fertilization. The pistil has the remarkable ability to recognize whether pollen is compatible (right type, same species) or incompatible (wrong type or self-pollen).",
        "Pollen-Pistil Interaction is a dynamic dialogue mediated by chemical interactions between pollen proteins and style tissues:",
        "1. Recognition & Acceptance: If compatible, the pistil accepts the pollen and promotes post-pollination events. Water and nutrients are absorbed by the pollen grain from the stigma surface.",
        "2. Pollen Germination: The intine grows out through a germ pore as a Pollen Tube.",
        "3. Pollen Tube Growth through Style: The pollen tube grows through the solid tissues of stigma and style by secreting cell wall degrading enzymes (pectinase and cellulase). Growth is chemotropically guided by a Calcium-Boron ion gradient toward the ovary.",
        "4. Male Gamete Division: If pollen is shed at the 2-celled stage, the generative cell divides mitotically inside the growing pollen tube to form 2 Male Gametes. If shed at the 3-celled stage, the pollen tube contains 2 male gametes from the start.",
        "5. Entry into Ovule & Synergid: The pollen tube reaches the ovary, enters the ovule through the Micropyle (Porogamy), and penetrates one of the Synergids through the Filiform Apparatus. The filiform apparatus guides the pollen tube, which ruptures and discharges two male gametes into the cytoplasm of the synergid."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="600" height="320" fill="#f8fafc" rx="12"/>
          <text x="300" y="25" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Pollen Tube Chemotropic Entry into Synergid via Filiform Apparatus</text>
          
          <!-- Style Tissue Outer Boundary -->
          <path d="M 220 40 L 380 40 L 380 180 C 380 260, 220 260, 220 180 Z" fill="#fdf4ff" stroke="#c084fc" stroke-width="2"/>
          
          <!-- Pollen Tube Growing Downward -->
          <path d="M 300 40 L 300 180 C 300 210, 280 220, 280 235" fill="none" stroke="#16a34a" stroke-width="8" stroke-linecap="round"/>
          <circle cx="280" cy="235" r="5" fill="#22c55e"/>

          <!-- 2 Male Gametes inside Pollen Tube Tip -->
          <circle cx="295" cy="190" r="4" fill="#dc2626"/>
          <circle cx="295" cy="205" r="4" fill="#dc2626"/>
          <text x="390" y="195" font-size="10" font-weight="bold" fill="#dc2626">2 Male Gametes (n)</text>
          <line x1="302" y1="195" x2="380" y2="195" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="2,2"/>

          <!-- Synergid Cell Structure -->
          <path d="M 240 240 C 240 210, 310 210, 310 240 C 310 270, 240 270, 240 240 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
          <text x="140" y="240" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="end">Synergid Cytoplasm</text>

          <!-- Filiform Apparatus Wall Ingrowths -->
          <path d="M 270 220 L 290 220 M 272 224 L 288 224 M 274 228 L 286 228" stroke="#0284c7" stroke-width="3.5"/>
          <text x="140" y="215" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="end">Filiform Apparatus</text>
          <line x1="150" y1="215" x2="265" y2="224" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2,2"/>

          <!-- Egg Cell Adjacent -->
          <circle cx="340" cy="250" r="22" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
          <circle cx="340" cy="250" r="5" fill="#9d174d"/>
          <text x="390" y="255" font-size="10" font-weight="bold" fill="#9d174d">Egg Cell (n)</text>
          <line x1="364" y1="250" x2="380" y2="255" stroke="#db2777" stroke-width="1.5" stroke-dasharray="2,2"/>

          <text x="300" y="300" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Chemotropic Guidance into Synergid Tip</text>
        </svg>`,
        caption: "Chemotropic Guidance of Pollen Tube through Synergid Filiform Apparatus into Embryo Sac.",
        guide: "WHAT TO OBSERVE: Note the pollen tube containing two male gametes growing downward, guided directly into the synergid cell by the finger-like filiform apparatus."
      },
      importantPoints: [
        "Pollen tube growth is guided chemotropically by calcium-boron chemicals secreted by synergids.",
        "Filiform apparatus directs the pollen tube entry into one of the synergids."
      ]
    },
    {
      heading: "5. Double Fertilization: Universal & Unique Angiosperm Feature",
      paragraphs: [
        "Double Fertilization is an event unique to flowering plants (Angiosperms), discovered by S.G. Nawaschin in 1898 in Lilium and Fritillaria.",
        "After entering the synergid, the pollen tube tip ruptures, discharging TWO Male Gametes (n) into the cytoplasm of the synergid/central cell.",
        "Step 1: Syngamy (Generative Fertilization):",
        "• One male gamete (n) moves towards the egg cell and fuses with the egg nucleus (n).",
        "• Nuclear fusion (n + n → 2n) forms a Diploid Zygote (2n).",
        "• The Zygote eventually develops into the Embryo.",
        "Step 2: Triple Fusion (Vegetative Fertilization):",
        "• The second male gamete (n) moves towards the central cell and fuses with the two polar nuclei (n + n) (or secondary diploid nucleus, 2n).",
        "• Fusion of three haploid nuclei (n + n + n → 3n) forms the Triploid Primary Endosperm Nucleus (PEN, 3n).",
        "• The central cell after triple fusion becomes the Primary Endosperm Cell (PEC), which develops into the nutritive Endosperm (3n).",
        "Why is it called DOUBLE FERTILIZATION?",
        "Because two types of nuclear fusions—Syngamy and Triple Fusion—take place simultaneously inside the same female gametophyte (embryo sac)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="600" height="320" fill="#f8fafc" rx="12"/>
          <text x="300" y="25" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Mechanism of Double Fertilization (Syngamy + Triple Fusion)</text>
          
          <!-- Central Cell Diagram Box -->
          <rect x="120" y="50" width="360" height="220" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5" rx="20"/>
          
          <!-- 1. Syngamy Visual Block -->
          <rect x="150" y="80" width="140" height="160" fill="#fbcfe8" stroke="#db2777" stroke-width="2" rx="12"/>
          <text x="220" y="105" font-size="11" font-weight="bold" fill="#9d174d" text-anchor="middle">1. SYNGAMY</text>
          <text x="220" y="125" font-size="9" fill="#831843" text-anchor="middle">Male Gamete (n)</text>
          <text x="220" y="140" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">+</text>
          <text x="220" y="155" font-size="9" fill="#831843" text-anchor="middle">Egg Nucleus (n)</text>
          <line x1="170" y1="170" x2="270" y2="170" stroke="#db2777" stroke-width="2"/>
          <rect x="165" y="180" width="110" height="40" fill="#be185d" rx="6"/>
          <text x="220" y="198" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">ZYGOTE (2n)</text>
          <text x="220" y="212" font-size="8" fill="#fbcfe8" text-anchor="middle">(Develops into Embryo)</text>

          <!-- 2. Triple Fusion Visual Block -->
          <rect x="310" y="80" width="150" height="160" fill="#fef08a" stroke="#ca8a04" stroke-width="2" rx="12"/>
          <text x="385" y="105" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">2. TRIPLE FUSION</text>
          <text x="385" y="125" font-size="9" fill="#713f12" text-anchor="middle">Male Gamete (n)</text>
          <text x="385" y="140" font-size="11" font-weight="bold" fill="#a16207" text-anchor="middle">+</text>
          <text x="385" y="155" font-size="9" fill="#713f12" text-anchor="middle">2 Polar Nuclei (n+n)</text>
          <line x1="330" y1="170" x2="440" y2="170" stroke="#ca8a04" stroke-width="2"/>
          <rect x="325" y="180" width="120" height="40" fill="#a16207" rx="6"/>
          <text x="385" y="198" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">PEN (3n)</text>
          <text x="385" y="212" font-size="8" fill="#fef08a" text-anchor="middle">(Primary Endosperm Nucleus)</text>

          <text x="300" y="295" font-size="11" font-weight="bold" fill="#ea580c" text-anchor="middle">Double Fertilization = Syngamy (2n Zygote) + Triple Fusion (3n PEN)</text>
        </svg>`,
        caption: "Summary of Double Fertilization showing Syngamy (formation of 2n Zygote) and Triple Fusion (formation of 3n PEN).",
        guide: "WHAT TO OBSERVE: Note the two distinct fertilization events: Syngamy yielding a diploid Zygote (2n), and Triple Fusion yielding a triploid PEN (3n)."
      },
      importantPoints: [
        "Double fertilization is universal and exclusive to Angiosperms.",
        "Syngamy yields a diploid Zygote (2n); Triple Fusion yields a triploid PEN (3n).",
        "Total 5 nuclei are involved in Double Fertilization (1 male gamete + 1 egg nucleus in Syngamy = 2 nuclei; 1 male gamete + 2 polar nuclei in Triple Fusion = 3 nuclei; Total = 5 nuclei)."
      ]
    }
  ],

  formulae: [
    {
      title: "Double Fertilization Equations",
      formula: "\\text{Syngamy: } \\text{Male Gamete (n)} + \\text{Egg Nucleus (n)} \\rightarrow \\text{Diploid Zygote (2n)}",
      meaning: "Generative fertilization resulting in the diploid zygote which becomes the embryo."
    },
    {
      title: "Triple Fusion Equation",
      formula: "\\text{Triple Fusion: } \\text{Male Gamete (n)} + 2 \\text{ Polar Nuclei (n + n)} \\rightarrow \\text{Triploid PEN (3n)}",
      meaning: "Vegetative fertilization resulting in the triploid Primary Endosperm Nucleus (PEN) which forms endosperm."
    },
    {
      title: "Ploidy & Nuclei Summary in Double Fertilization",
      formula: "\\text{Total Nuclei Involved} = 2 \\text{ (Syngamy)} + 3 \\text{ (Triple Fusion)} = 5 \\text{ Nuclei}",
      meaning: "Five nuclei total participate in double fertilization within a single embryo sac.",
      whenToUse: "Frequently asked NCERT true/false and quantitative numerical MCQs."
    }
  ],

  visualLearning: {
    type: 'flowchart',
    flowchartSteps: [
      { step: "Pollen Grain Hydration on Stigma", detail: "Compatible pollen absorbs water and nutrients from stigma", arrowText: "Pollen Tube Germination" },
      { step: "Pollen Tube Growth through Style", detail: "Secreates pectinase/cellulase, chemotropically guided by Ca-B gradient", arrowText: "Enters Ovule Micropyle" },
      { step: "Entry into Synergid", detail: "Guided by Filiform Apparatus into synergid cytoplasm", arrowText: "Discharges 2 Male Gametes" },
      { step: "Syngamy (1st Male Gamete + Egg)", detail: "Fusion forms Diploid Zygote (2n) -> Embryo", arrowText: "Simultaneous with" },
      { step: "Triple Fusion (2nd Male Gamete + 2 Polar Nuclei)", detail: "Fusion forms Triploid PEN (3n) -> Primary Endosperm Cell -> Endosperm", arrowText: "Post-Fertilization Stage" }
    ],
    caption: "Flowchart depicting the complete sequence from Pollen Germination to Double Fertilization."
  },

  neetImportantPoints: [
    "Geitonogamy is functionally cross-pollination but genetically self-pollination.",
    "Cleistogamous flowers (Viola, Oxalis, Commelina) never open and guarantee 100% seed set.",
    "Water Hyacinth and Water Lily are pollinated by INSECTS or WIND, NOT water.",
    "Monoecious plants (Castor, Maize) prevent autogamy but allow geitonogamy.",
    "Dioecious plants (Papaya, Date palm) prevent BOTH autogamy and geitonogamy.",
    "Yucca and Pronuba moth share an obligate mutualistic relationship.",
    "Double fertilization involves 2 fusions (Syngamy + Triple Fusion) and 5 nuclei.",
    "PEN is triploid (3n) and develops into endosperm tissue."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming Geitonogamy produces genetic variations.",
      correctFact: "Geitonogamy involves flowers on the SAME plant. Even though pollinators move pollen, the genetic material comes from the same parent, so offspring are genetically identical to autogamy.",
      whyItMattersForNEET: "Classic NEET trap regarding genetic versus functional classification."
    },
    {
      commonConfusion: "Classifying Water Hyacinth as hydrophilous.",
      correctFact: "Water Hyacinth (Eichhornia) and Water Lily (Nymphaea) produce flowers above the water line, which are pollinated by insects or wind.",
      whyItMattersForNEET: "Direct NCERT exception question frequently asked in NEET."
    },
    {
      commonConfusion: "Forgetting that Monoecy allows Geitonogamy.",
      correctFact: "Monoecy (separate male and female flowers on same plant like Castor/Maize) prevents autogamy within a flower, but geitonogamy between flowers on the same plant can still readily occur.",
      whyItMattersForNEET: "Crucial distinction between Monoecy and Dioecy in NEET MCQs."
    }
  ],

  quickRevision: [
    "Autogamy: Same flower self-pollination.",
    "Geitonogamy: Functional cross, genetic self (same plant).",
    "Xenogamy: True cross-pollination (different plants).",
    "Cleistogamy: Closed flowers, 100% autogamy, no pollinators needed.",
    "Anemophily: Wind pollinated, feathery stigma, light pollen, single ovule.",
    "Hydrophily exceptions: Eichhornia & Nymphaea = Insect/Wind pollinated!",
    "Monoecy: Prevents autogamy ONLY (Castor, Maize).",
    "Dioecy: Prevents BOTH autogamy & geitonogamy (Papaya, Date palm).",
    "Double Fertilization: Discovered by Nawaschin; Syngamy (2n Zygote) + Triple Fusion (3n PEN); 5 nuclei involved."
  ],

  practiceQuestions: [
    {
      id: "pq-bio-poll-1",
      question: "Which of the following plants prevents BOTH autogamy and geitonogamy?",
      options: [
        "Castor",
        "Maize",
        "Papaya",
        "Cucumber"
      ],
      correctAnswerIndex: 2,
      explanation: "Papaya is a dioecious plant bearing male and female flowers on separate individual plants. Hence, it completely prevents both autogamy and geitonogamy. Castor, Maize, and Cucumber are monoecious (separate male and female flowers on the same plant), so they prevent autogamy but allow geitonogamy.",
      difficulty: "Medium"
    },
    {
      id: "pq-bio-poll-2",
      question: "Although water hyacinth and water lily are aquatic plants, their flowers are pollinated by:",
      options: [
        "Water currents passively",
        "Insects or wind",
        "Submerged water currents",
        "Bats and birds"
      ],
      correctAnswerIndex: 1,
      explanation: "NCERT Highlight: In water hyacinth (Eichhornia) and water lily (Nymphaea), flowers emerge above the surface of water and are pollinated by insects or wind, just like most land plants.",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-poll-3",
      question: "How many total haploid nuclei participate in the process of Double Fertilization in angiosperms?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswerIndex: 3,
      explanation: "Double fertilization involves: 1 male gamete nucleus + 1 egg nucleus in Syngamy (= 2 nuclei) AND 1 male gamete nucleus + 2 polar nuclei in Triple Fusion (= 3 nuclei). Total nuclei involved = 2 + 3 = 5 nuclei.",
      difficulty: "Medium"
    },
    {
      id: "pq-bio-poll-4",
      question: "What is the ploidy of the Primary Endosperm Nucleus (PEN) resulting from triple fusion?",
      options: [
        "Haploid (n)",
        "Diploid (2n)",
        "Triploid (3n)",
        "Tetraploid (4n)"
      ],
      correctAnswerIndex: 2,
      explanation: "Triple fusion involves the fusion of 1 haploid male gamete (n) with 2 haploid polar nuclei (n + n), yielding a triploid (3n) Primary Endosperm Nucleus (PEN).",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-poll-5",
      question: "Which of the following feature is NOT characteristic of wind-pollinated (anemophilous) flowers?",
      options: [
        "Lightweight and non-sticky pollen grains",
        "Well-exposed stamens and feathery stigmas",
        "Large, colorful petals with sweet nectar",
        "Single ovule in each ovary"
      ],
      correctAnswerIndex: 2,
      explanation: "Large, colorful petals and nectar are adaptations for insect pollination (entomophily). Wind-pollinated flowers are small, non-fragrant, lack nectar, and have feathery stigmas.",
      difficulty: "Easy"
    }
  ],

  pyqs: [
    {
      id: "pyq-bio-poll-1",
      year: 2023,
      exam: "NEET UG 2023",
      question: "In angiosperms, the site of double fertilization is:",
      options: [
        "Embryo sac",
        "Nucellus",
        "Stigma",
        "Style"
      ],
      correctAnswerIndex: 0,
      explanation: "Double fertilization takes place inside the female gametophyte, which is the Embryo Sac.",
      topicTested: "Double Fertilization Site",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Paper"
    },
    {
      id: "pyq-bio-poll-2",
      year: 2020,
      exam: "NEET UG 2020",
      question: "Which of the following is correct regarding water pollinated plants?",
      options: [
        "Pollen grains are heavy and sticky.",
        "In Vallisneria, female flower reaches water surface to receive pollen.",
        "In Zostera, pollen grains float on water surface.",
        "Water lily flowers remain submerged underwater for pollination."
      ],
      correctAnswerIndex: 1,
      explanation: "In Vallisneria, the female flower reaches the water surface by a long coiled stalk, where passive water currents bring pollen grains released on the surface to the stigma.",
      topicTested: "Hydrophily in Vallisneria",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Paper"
    },
    {
      id: "pyq-bio-poll-3",
      year: 2019,
      exam: "NEET UG 2019",
      question: "What is the fate of the male gametes discharged in the synergid?",
      options: [
        "One fuses with the egg, other fuses with polar nuclei.",
        "One fuses with the egg, other degenerates.",
        "All fuse with the egg cell.",
        "One fuses with the egg, other fuses with synergid."
      ],
      correctAnswerIndex: 0,
      explanation: "One male gamete fuses with the egg cell (Syngamy -> 2n Zygote), and the other male gamete fuses with the 2 polar nuclei (Triple Fusion -> 3n PEN).",
      topicTested: "Double Fertilization Mechanism",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper"
    },
    {
      id: "pyq-bio-poll-4",
      year: 2017,
      exam: "NEET UG 2017",
      question: "Attractants and rewards are required for:",
      options: [
        "Entomophily",
        "Hydrophily",
        "Cleistogamy",
        "Anemophily"
      ],
      correctAnswerIndex: 0,
      explanation: "Entomophily (insect pollination) requires visual attractants (bright petals) and rewards (nectar, pollen, safe egg-laying sites) to attract insect pollinators.",
      topicTested: "Biotic Pollination Rewards",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2017 Official Paper"
    },
    {
      id: "pyq-bio-poll-5",
      year: 2016,
      exam: "NEET UG 2016",
      question: "Dioecy in plant species prevents:",
      options: [
        "Both autogamy and geitonogamy",
        "Autogamy but not geitonogamy",
        "Geitonogamy but not autogamy",
        "Neither autogamy nor geitonogamy"
      ],
      correctAnswerIndex: 0,
      explanation: "In dioecious plants (separate male and female plants like Papaya), male and female flowers are on different plants, completely preventing both autogamy and geitonogamy.",
      topicTested: "Dioecy as Outbreeding Device",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2016 Official Paper"
    },
    {
      id: "pyq-bio-poll-6",
      year: 2013,
      exam: "NEET UG 2013",
      question: "Which one of the following statements is correct?",
      options: [
        "Cleistogamous flowers are always autogamous.",
        "Xenogamy occurs only by wind pollination.",
        "Chasmogamous flowers do not open at all.",
        "Geitonogamy involves pollen from a different plant."
      ],
      correctAnswerIndex: 0,
      explanation: "Cleistogamous flowers never open at all, ensuring that pollen from anthers within the closed bud can only land on the stigma of the same flower (100% autogamy).",
      topicTested: "Cleistogamy & Autogamy",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2013 Official Paper"
    }
  ]
};
