import { DetailedTopicContent } from '../../types/neet';

export const bioEndospermApomixisDetails: DetailedTopicContent = {
  topicId: "bio-endosperm-apomixis",
  topicName: "Endosperm, Seed & Apomixis",
  subject: "Biology",
  class: "Class 12",
  classification: "Reproduction",
  chapter: "Sexual Reproduction in Flowering Plants",

  whatIsThisTopic: "An authoritative, complete NCERT-aligned study guide covering endosperm development (free-nuclear vs cellular, coconut water), embryogenesis in dicots and monocots (scutellum, coleoptile, coleorhiza, epiblast), seed structure (albuminous vs ex-albuminous, perisperm, dormancy), fruit types (true, false/accessory, parthenocarpic), apomixis (asexual seed formation mimicking sexual reproduction), and polyembryony.",

  basicIdea: [
    "Endosperm Development: Primary Endosperm Nucleus (PEN, 3n) divides repeatedly to form triploid endosperm tissue packed with reserve food. Crucial Rule: Endosperm development PRECEDES embryo development to ensure a ready supply of nutrition for the dividing zygote.",
    "Free Nuclear vs Cellular Endosperm: In free nuclear endosperm (most common), PEN undergoes repeated nuclear divisions without wall formation. Coconut water is free nuclear endosperm (thousands of nuclei); the surrounding white coconut meat is cellular endosperm.",
    "Non-albuminous (Ex-albuminous) Seeds consume endosperm completely before seed maturation (e.g., Pea, Groundnut, Beans). Albuminous Seeds retain endosperm in the mature seed (e.g., Wheat, Maize, Barley, Castor, Sunflower).",
    "Dicot Embryo Structure: Consists of an embryonal axis and 2 cotyledons. The axis above cotyledon level is the Epicotyl (terminates in Plumule/shoot tip); the axis below cotyledon level is the Hypocotyl (terminates in Radicle/root tip covered by Root Cap).",
    "Monocot (Grass) Embryo Structure: Consists of 1 large, shield-shaped cotyledon called the Scutellum placed laterally. The radicle and root cap are enclosed in an unbranched sheath called the Coleorhiza. The shoot apex and leaf primordia are enclosed in a hollow foliar sheath called the Coleoptile.",
    "Perisperm: Persistent, residual nucellus present in mature seeds of Black Pepper and Beet. (Crucial NEET Trap: Perisperm is diploid 2n nucellar tissue, distinct from 3n endosperm!).",
    "Fruits: True fruits develop exclusively from the ovary. False (Accessory) fruits involve floral parts like thalamus (e.g., Apple, Pear, Strawberry, Cashew nut). Parthenocarpic fruits develop WITHOUT fertilization (e.g., Banana) and are seedless.",
    "Apomixis: A form of asexual reproduction that MIMICS sexual reproduction by producing seeds WITHOUT fertilization (e.g., Asteraceae, Grasses). Mechanisms include diploid unreduced egg development and Nucellar Embryony.",
    "Polyembryony: Occurrence of more than one embryo in a single seed, common in Citrus and Mango due to maternal nucellar cells (2n) protruding into the embryo sac."
  ],

  importantTerms: [
    {
      term: "Free-Nuclear Endosperm",
      definition: "Endosperm development in which the Primary Endosperm Nucleus (3n) undergoes successive free-nuclear mitotic divisions without immediate cytokinesis.",
      neetNote: "Example: Coconut water represents free-nuclear endosperm containing thousands of free floating nuclei."
    },
    {
      term: "Scutellum, Coleoptile & Coleorhiza",
      definition: "In monocot (grass) embryos, Scutellum is the single shield-shaped cotyledon; Coleoptile is the protective sheath covering the shoot apex (epicotyl); Coleorhiza is the protective sheath covering the root tip (radicle).",
      neetNote: "High-yield NEET diagram identification question: Coleoptile = Shoot sheath; Coleorhiza = Root sheath."
    },
    {
      term: "Perisperm vs Endosperm",
      definition: "Perisperm is persistent, residual nucellar tissue (diploid 2n) present in mature seeds of Black Pepper and Beet. Endosperm is triploid (3n) nutritive tissue formed by triple fusion.",
      neetNote: "Guaranteed NEET trap: Perisperm is 2n (nucellus), whereas Endosperm is 3n."
    },
    {
      term: "Parthenocarpy",
      definition: "Development of fruit without fertilization, resulting in naturally seedless fruits (e.g., Banana). Can be artificially induced by plant hormones (Auxins and Gibberellins).",
      neetNote: "Parthenocarpic fruits are seedless, unlike apomictic seeds which produce functional seeds without fertilization."
    },
    {
      term: "Apomixis",
      definition: "A special mechanism of seed production without fertilization, representing asexual reproduction that mimics sexual reproduction.",
      neetNote: "Used in agriculture to fix hybrid vigor in hybrid crops so farmers do not need to buy expensive hybrid seeds every season."
    },
    {
      term: "Polyembryony",
      definition: "The presence of more than one embryo inside a single seed, frequently caused by adventive embryony where nucellar cells (2n) divide and project into the embryo sac.",
      neetNote: "Classic examples: Citrus (Orange, Lemon) and Mango."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Endosperm Development & Seed Nutrition Classification",
      paragraphs: [
        "The Primary Endosperm Cell (PEC) containing the Primary Endosperm Nucleus (PEN, 3n) undergoes repeated mitotic cell divisions to form the triploid Endosperm tissue.",
        "Crucial Functional Principle: Endosperm development PRECEDES embryo development! The PEN divides first to build a nutritive tissue packed with carbohydrates, proteins, and fats, ensuring that the zygote (2n) has guaranteed nutrition when it begins embryogenesis.",
        "Modes of Endosperm Development:",
        "1. Free-Nuclear Endosperm (Most Common Mode): The PEN undergoes repeated nuclear divisions without cell wall formation, creating a multinucleate state. Subsequently, cell wall formation (cellularization) proceeds from the periphery towards the center.",
        "• Classic NCERT Benchmark Example: Tender Coconut Water is free-nuclear endosperm consisting of thousands of free nuclei floating in fluid. The surrounding white coconut kernel/flesh is cellular endosperm!",
        "2. Cellular Endosperm: Every nuclear division of PEN is immediately followed by cytokinesis (cell wall formation).",
        "Classification of Seeds Based on Endosperm Retention at Maturity:",
        "• Non-Albuminous / Ex-Albuminous Seeds: The endosperm is completely consumed by the developing embryo before seed maturation (e.g., Pea, Groundnut, Beans). Mature seed lacks endosperm.",
        "• Albuminous / Endospermic Seeds: The mature seed retains a portion of endosperm because it is not completely consumed during embryo development (e.g., Wheat, Maize, Barley, Castor, Sunflower). Endosperm feeds the seedling during germination."
      ],
      tables: [
        {
          title: "Non-Albuminous vs Albuminous Seeds Comparison",
          headers: ["Feature", "Non-Albuminous (Ex-albuminous)", "Albuminous (Endospermic)"],
          rows: [
            ["Endosperm Retention", "Completely consumed before seed maturity", "Retained in mature seed"],
            ["Food Storage Site", "Food stored in thick, fleshy Cotyledons", "Food stored in persistent Endosperm"],
            ["Ploidy of Storage Tissue", "Cotyledons are Diploid (2n)", "Endosperm is Triploid (3n)"],
            ["Dicot Examples", "Pea, Gram, Bean, Groundnut", "Castor, Sunflower"],
            ["Monocot Examples", "Amorphophallus, Vallisneria, Orchids", "Wheat, Maize, Barley, Coconut"]
          ]
        }
      ],
      importantPoints: [
        "Endosperm development precedes embryo development.",
        "Coconut water = Free nuclear endosperm (3n); White coconut meat = Cellular endosperm (3n).",
        "Castor is a dicot with albuminous (endospermic) seeds; Bean/Pea are dicots with ex-albuminous seeds."
      ]
    },
    {
      heading: "2. Embryogenesis: Structural Anatomy of Dicot & Monocot Embryos",
      paragraphs: [
        "Embryogeny: The process of development of the mature embryo from the zygote. The early stages of embryogeny (Proembryo → Globular → Heart-shaped → Mature Embryo stage) are fundamentally similar in both dicotyledons and monocotyledons.",
        "1. Structure of a Dicotyledonous Embryo:",
        "A typical dicot embryo consists of an Embryonal Axis and two Cotyledons.",
        "• Epicotyl: The portion of embryonal axis ABOVE the level of cotyledon attachment. It terminates in the Plumule (stem tip / shoot apex).",
        "• Hypocotyl: The cylindrical portion of embryonal axis BELOW the level of cotyledon attachment. It terminates at its lower end in the Radicle (root tip). The radicle is protected by a Root Cap.",
        "2. Structure of a Monocotyledonous (Grass) Embryo:",
        "Monocot embryos possess only ONE Cotyledon, called the Scutellum in the grass family, which is shield-shaped and attached laterally to the embryonal axis.",
        "• Embryonal Axis Components in Monocots:",
        "a) Upper End (above scutellum attachment): Epicotyl, which contains the shoot apex and a few leaf primordia enclosed in a hollow foliar structure called the Coleoptile.",
        "b) Lower End (below scutellum attachment): Contains the radicle and root cap enclosed in an undifferentiated protective sheath called the Coleorhiza.",
        "c) Epiblast: A small flap-like outgrowth representing the remnant/vestige of the second cotyledon present in some grasses."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="600" height="320" fill="#f8fafc" rx="12"/>
          <text x="300" y="22" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Structure of Dicot Embryo vs Monocot (Grass) Embryo</text>

          <!-- Left Panel: Dicot Embryo -->
          <g transform="translate(40, 40)">
            <rect width="230" height="255" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" rx="12"/>
            <text x="115" y="25" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">A. Dicot Embryo</text>
            
            <!-- Cotyledons (2 large lobes) -->
            <path d="M 60 70 C 20 70, 20 160, 80 160 C 100 160, 100 80, 60 70 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
            <path d="M 170 70 C 210 70, 210 160, 150 160 C 130 160, 130 80, 170 70 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
            
            <!-- Axis -->
            <rect x="105" y="50" width="20" height="150" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" rx="10"/>
            
            <!-- Plumule at Top -->
            <circle cx="115" cy="55" r="8" fill="#22c55e"/>
            <text x="115" y="42" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Plumule (Shoot Tip)</text>

            <text x="35" y="115" font-size="9" font-weight="bold" fill="#15803d">Cotyledon</text>
            <text x="195" y="115" font-size="9" font-weight="bold" fill="#15803d" text-anchor="end">Cotyledon</text>

            <!-- Hypocotyl & Radicle at Bottom -->
            <text x="115" y="220" font-size="9" font-weight="bold" fill="#b45309" text-anchor="middle">Radicle & Root Cap</text>
          </g>

          <!-- Right Panel: Monocot (Grass) Embryo -->
          <g transform="translate(330, 40)">
            <rect width="230" height="255" fill="#eff6ff" stroke="#2563eb" stroke-width="2" rx="12"/>
            <text x="115" y="25" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">B. Monocot (Grass) Embryo</text>
            
            <!-- Scutellum Shield -->
            <path d="M 40 50 C 20 100, 20 180, 60 210 C 90 210, 80 50, 40 50 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
            <text x="45" y="130" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Scutellum</text>

            <!-- Coleoptile at Top -->
            <rect x="110" y="50" width="40" height="40" fill="#93c5fd" stroke="#1d4ed8" rx="6"/>
            <text x="130" y="75" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">Coleoptile</text>
            
            <!-- Shoot Apex inside Coleoptile -->
            <circle cx="130" cy="82" r="4" fill="#1e3a8a"/>

            <!-- Epiblast Flap -->
            <path d="M 100 130 C 80 130, 80 150, 100 150 Z" fill="#dbeafe" stroke="#2563eb"/>
            <text x="80" y="143" font-size="8" font-weight="bold" fill="#1e40af">Epiblast</text>

            <!-- Coleorhiza at Bottom -->
            <rect x="110" y="170" width="40" height="40" fill="#93c5fd" stroke="#1d4ed8" rx="6"/>
            <text x="130" y="195" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">Coleorhiza</text>
            
            <!-- Radicle inside Coleorhiza -->
            <circle cx="130" cy="178" r="4" fill="#1e3a8a"/>
          </g>
        </svg>`,
        caption: "Anatomy of Dicot Embryo (with 2 cotyledons) versus Monocot Grass Embryo (with Scutellum, Coleoptile, Coleorhiza, and Epiblast).",
        guide: "WHAT TO OBSERVE: Compare the 2 cotyledons of the dicot with the single shield-shaped Scutellum in monocot. Note Coleoptile protecting shoot tip and Coleorhiza protecting root tip."
      },
      importantPoints: [
        "Coleoptile encloses epicotyl/shoot tip; Coleorhiza encloses radicle/root tip.",
        "Scutellum is the single shield-shaped cotyledon in monocot grass embryos.",
        "Epiblast represents the reduced second cotyledon remnant in grass embryos."
      ]
    },
    {
      heading: "3. Seed Anatomy, Perisperm, Fruit Development & Types",
      paragraphs: [
        "Seed Structure & Development:",
        "A seed is the final product of sexual reproduction, defined as a fertilized, mature ovule.",
        "• Seed Coat: Formed from ovular integuments. Outer thick layer is the Testa; inner thin layer is the Tegmen. The Micropyle remains as a small pore in the seed coat, facilitating oxygen and water entry during seed germination.",
        "• Hilum: Scar on the seed coat marking the point of attachment to the funicle.",
        "• Perisperm: Persistent, residual Nucellus inside mature seeds! Found in Black Pepper and Beet. Crucial NEET Distinction: Perisperm is diploid (2n) maternal nucellar tissue, unlike triploid (3n) endosperm!",
        "• Seed Dormancy: State of metabolic inactivity when seed moisture content drops to 10–15% by mass, enabling survival through adverse conditions.",
        "Fruit Development & Structural Types:",
        "As seeds mature, the ovary wall transforms into the Fruit Wall (Pericarp). Pericarp may be dry (Mustard, Groundnut) or fleshy (Mango, Orange). Fleshy pericarp divides into Epicarp, Mesocarp, and Endocarp.",
        "1. True Fruits: Fruits that develop EXCLUSIVELY from the Ovary after fertilization (e.g., Mango, Tomato, Pea).",
        "2. False Fruits (Accessory Fruits): Fruits in which the Thalamus or other non-ovarian floral parts grow and contribute to fruit formation along with the ovary (e.g., Apple, Pear, Strawberry, Cashew Nut where the edible part is fleshy thalamus).",
        "3. Parthenocarpic Fruits: Fruits that develop WITHOUT fertilization! They are naturally seedless (e.g., Banana). Parthenocarpy can be induced artificially by applying plant growth hormones like Auxins and Gibberellins."
      ],
      tables: [
        {
          title: "Fruit Classification & Example Summary",
          headers: ["Fruit Category", "Developmental Origin", "Seed Status", "NCERT Examples"],
          rows: [
            ["True Fruit", "Ovary exclusively after fertilization", "Seeded", "Mango, Tomato, Pea, Wheat"],
            ["False (Accessory) Fruit", "Ovary + Thalamus / Floral parts", "Seeded", "Apple, Pear, Strawberry, Cashew nut"],
            ["Parthenocarpic Fruit", "Ovary WITHOUT fertilization", "Seedless", "Banana (Induced by Auxins/Gibberellins)"]
          ]
        }
      ],
      importantPoints: [
        "Perisperm is persistent 2n nucellus in seeds of Black Pepper and Beet.",
        "In Apple, Pear, and Strawberry, the edible part is the fleshy Thalamus (False Fruit).",
        "Parthenocarpic fruits (Banana) are seedless fruits formed without fertilization."
      ]
    },
    {
      heading: "4. Apomixis & Polyembryony: Asexual Reproduction Mimicking Sexual Reproduction",
      paragraphs: [
        "Apomixis (Greek: Apo = without; mixis = mixing):",
        "Apomixis is a special form of asexual reproduction that MIMICS sexual reproduction by producing seeds WITHOUT fertilization!",
        "Occurs commonly in families Asteraceae (Compositae) and Poaceae (Grasses).",
        "Mechanisms of Apomixis Formation:",
        "1. Diploid Unreduced Egg Cell Development: In some species, a diploid (2n) megaspore mother cell develops into a diploid egg cell WITHOUT undergoing reductional division (meiosis). This diploid egg then develops directly into an embryo without fertilization.",
        "2. Nucellar Embryony: Cells of the maternal nucellus (2n) surrounding the embryo sac divide, protrude into the embryo sac, and develop into functional embryos.",
        "Agricultural Importance of Apomixis:",
        "• Hybrid crops (like hybrid Maize, Jowar) produce dramatically higher yields due to Hybrid Vigor (heterosis). However, farmers cannot reuse hybrid seeds saved from their harvest because sexual segregation causes offspring to lose hybrid vigor!",
        "• If hybrid seeds are engineered to be Apomictic, the apomictic seeds produce genetically identical clones. Farmers can save apomictic hybrid seeds year after year and reuse them indefinitely without buying expensive hybrid seeds every season!"
      ],
      importantPoints: [
        "Apomixis is asexual reproduction that mimics sexual reproduction by forming seeds without fertilization.",
        "Nucellar Embryony leads to Polyembryony in Citrus (Orange, Lemon) and Mango.",
        "Apomixis preserves hybrid vigor across generations without genetic segregation."
      ]
    }
  ],

  formulae: [
    {
      title: "Ploidy Level Summary of Post-Fertilization & Seed Structures",
      formula: "\\text{Ploidy: } \\text{Zygote (2n), Embryo (2n), Cotyledons (2n), Nucellus (2n), Perisperm (2n), Testa/Tegmen (2n)}",
      meaning: "Diploid maternal and zygotic structures inside the mature seed."
    },
    {
      title: "Endosperm Ploidy Formula",
      formula: "\\text{PEN / Endosperm (3n) in Angiosperms}",
      meaning: "Triploid nutritive tissue formed by triple fusion of 1 male gamete (n) and 2 polar nuclei (n+n)."
    },
    {
      title: "Apomictic Embryo Ploidy",
      formula: "\\text{Nucellar / Apomictic Embryo} = 2n \\text{ (Identical clone of maternal plant)}",
      meaning: "Apomictic embryos originating from 2n nucellar cells retain complete diploid maternal genotype."
    }
  ],

  visualLearning: {
    type: 'flowchart',
    flowchartSteps: [
      { step: "Triple Fusion (Male Gamete + 2 Polar Nuclei)", detail: "Forms Triploid Primary Endosperm Nucleus (PEN, 3n)", arrowText: "PEN Divides First" },
      { step: "Free-Nuclear Endosperm Stage", detail: "Repeated nuclear mitoses create free floating nuclei (e.g. Coconut water)", arrowText: "Cellularization" },
      { step: "Cellular Endosperm Stage", detail: "Cell wall formation constructs solid endosperm (e.g. White coconut meat)", arrowText: "Nourishes Zygote" },
      { step: "Zygote (2n) Embryogenesis", detail: "Proembryo -> Globular -> Heart-shaped -> Mature Embryo", arrowText: "Seed Maturation" },
      { step: "Mature Seed Formation", detail: "Integuments -> Seed Coat; Ovary -> Fruit; Nucellus remnant -> Perisperm", arrowText: "Dormancy & Germination" }
    ],
    caption: "Flowchart depicting post-fertilization developmental events from PEN to Seed and Fruit."
  },

  neetImportantPoints: [
    "Endosperm development PRECEDES embryo development.",
    "Tender coconut water is free-nuclear endosperm (3n); white flesh is cellular endosperm.",
    "Castor is an endospermic (albuminous) dicot seed; Pea and Bean are non-albuminous dicot seeds.",
    "Perisperm is persistent 2n nucellus found in Black Pepper and Beet.",
    "Scutellum is the shield-shaped single cotyledon in monocot grass embryos.",
    "Coleoptile encloses shoot apex; Coleorhiza encloses radicle/root cap.",
    "False fruits involve thalamus (Apple, Pear, Strawberry, Cashew nut).",
    "Apomixis is asexual seed formation mimicking sexual reproduction.",
    "Polyembryony in Citrus and Mango is caused by nucellar embryony."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Perisperm with Endosperm or Pericarp.",
      correctFact: "Perisperm is persistent diploid (2n) Nucellus (Black Pepper/Beet). Endosperm is triploid (3n) nutritive tissue formed by triple fusion. Pericarp is the fruit wall derived from the ovary wall.",
      whyItMattersForNEET: "High-yield NEET trap regarding ploidy and anatomical origin."
    },
    {
      commonConfusion: "Mixing up Coleoptile and Coleorhiza roles.",
      correctFact: "ColeopTILE covers the shoot tip (Epicotyl). ColeoRHIZA covers the root tip (Radicle / Rhiza).",
      whyItMattersForNEET: "Frequently tested diagram labeling question."
    },
    {
      commonConfusion: "Believing Apomixis involves fertilization.",
      correctFact: "Apomixis forms seeds WITHOUT fertilization. It is fundamentally an asexual mechanism that produces seeds mimicking sexual reproduction.",
      whyItMattersForNEET: "Conceptual definition question in NEET."
    }
  ],

  quickRevision: [
    "Endosperm precedes embryo development.",
    "Coconut water = Free nuclear endosperm (3n).",
    "Albuminous seeds: Wheat, Maize, Castor, Sunflower.",
    "Non-albuminous seeds: Pea, Gram, Groundnut, Beans.",
    "Dicot embryo: 2 cotyledons, epicotyl (plumule), hypocotyl (radicle).",
    "Monocot embryo: Scutellum (1 cotyledon), Coleoptile (shoot sheath), Coleorhiza (root sheath).",
    "Perisperm: Persistent 2n nucellus (Black Pepper, Beet).",
    "False fruit: Edible thalamus (Apple, Pear, Strawberry).",
    "Parthenocarpy: Seedless fruit without fertilization (Banana).",
    "Apomixis: Seed formation without fertilization (Asteraceae, Grasses).",
    "Polyembryony: Multiple embryos in 1 seed (Citrus, Mango)."
  ],

  practiceQuestions: [
    {
      id: "pq-bio-endo-1",
      question: "In black pepper and beet, remnants of nucellus are persistent in the mature seed. This persistent nucellus is termed as:",
      options: [
        "Endosperm",
        "Perisperm",
        "Pericarp",
        "Scutellum"
      ],
      correctAnswerIndex: 1,
      explanation: "In seeds of black pepper and beet, residual, persistent nucellus remains present. This persistent nucellus is called Perisperm and is diploid (2n).",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-endo-2",
      question: "Which structure in a grass embryo represents the single shield-shaped cotyledon attached laterally to the embryonal axis?",
      options: [
        "Coleoptile",
        "Coleorhiza",
        "Scutellum",
        "Epiblast"
      ],
      correctAnswerIndex: 2,
      explanation: "In grass embryos (monocots), the single cotyledon is large, shield-shaped, and situated laterally. It is termed the Scutellum.",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-endo-3",
      question: "Why does endosperm development precede embryo development during seed formation?",
      options: [
        "Endosperm secretes hormones required for zygote cleavage",
        "To provide an assured supply of nutrition to the developing embryo",
        "Endosperm forms the protective seed coat around the zygote",
        "To trigger pollen tube discharge"
      ],
      correctAnswerIndex: 1,
      explanation: "Endosperm development precedes embryo development as an adaptation to ensure that a rich nutritive tissue is already formed to feed the developing zygote during embryogenesis.",
      difficulty: "Medium"
    },
    {
      id: "pq-bio-endo-4",
      question: "Apple, strawberry, and cashew nut are classified as false fruits because:",
      options: [
        "They develop without fertilization",
        "They are seedless fruits",
        "Thalamus contributes to fruit formation along with ovary",
        "They develop from unfertilized ovules"
      ],
      correctAnswerIndex: 2,
      explanation: "In false (accessory) fruits like apple, strawberry, and cashew nut, the thalamus or other non-ovarian floral structures grow and form the major edible part of the fruit alongside the ovary.",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-endo-5",
      question: "What is the primary commercial advantage of introducing apomixis into hybrid crop plants?",
      options: [
        "Eliminates the requirement for water during seed germination",
        "Prevents segregation of desirable hybrid traits across generations",
        "Doubles the chromosome number in endosperm",
        "Makes the plant immune to viral infections"
      ],
      correctAnswerIndex: 1,
      explanation: "Apomixis produces seeds without fertilization (asexually). If hybrid crops are made apomictic, farmers can save and sow apomictic seeds repeatedly without trait segregation, preserving hybrid vigor indefinitely.",
      difficulty: "Hard"
    }
  ],

  pyqs: [
    {
      id: "pyq-bio-endo-1",
      year: 2022,
      exam: "NEET UG 2022",
      question: "Which of the following is NOT a correct statement?",
      options: [
        "Perisperm is persistent nucellus in seed.",
        "Coconut water is free-nuclear endosperm.",
        "Castor seed is non-albuminous.",
        "Apomixis is a form of asexual reproduction that mimics sexual reproduction."
      ],
      correctAnswerIndex: 2,
      explanation: "Castor seed is an Albuminous (endospermic) seed, retaining endosperm at maturity. Therefore, statement C is INCORRECT.",
      topicTested: "Albuminous vs Non-albuminous Seeds",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2022 Official Paper"
    },
    {
      id: "pyq-bio-endo-2",
      year: 2021,
      exam: "NEET UG 2021",
      question: "The plant part which consists of two generations - one within the other:",
      options: [
        "Pollen grain inside anther",
        "Germinated pollen grain with two male gametes",
        "Seed inside fruit",
        "Embryo sac inside ovule"
      ],
      correctAnswerIndex: 0,
      explanation: "Pollen grain (haploid gametophyte, n) resides inside anther wall (diploid sporophyte, 2n), representing two generations—one within the other.",
      topicTested: "Alternation of Generations in Flower",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Paper"
    },
    {
      id: "pyq-bio-endo-3",
      year: 2019,
      exam: "NEET UG 2019",
      question: "Persistent nucellus in the seed is known as:",
      options: [
        "Perisperm",
        "Hilum",
        "Tegmen",
        "Chalaza"
      ],
      correctAnswerIndex: 0,
      explanation: "Persistent residual nucellus present inside mature seeds (like Black Pepper and Beet) is called Perisperm.",
      topicTested: "Perisperm in Seed",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper"
    },
    {
      id: "pyq-bio-endo-4",
      year: 2018,
      exam: "NEET UG 2018",
      question: "The coconut water from tender coconut represents:",
      options: [
        "Free nuclear endosperm",
        "Cellular endosperm",
        "Free nuclear embryo",
        "Fleshy pericarp"
      ],
      correctAnswerIndex: 0,
      explanation: "The liquid coconut water inside tender coconut is free-nuclear endosperm composed of thousands of free nuclei.",
      topicTested: "Coconut Water Endosperm",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2018 Official Paper"
    },
    {
      id: "pyq-bio-endo-5",
      year: 2015,
      exam: "AIPMT 2015",
      question: "Coconut water from a tender coconut is:",
      options: [
        "Degenerated nucellus",
        "Immature embryo",
        "Free nuclear endosperm",
        "Inner layer of seed coat"
      ],
      correctAnswerIndex: 2,
      explanation: "Tender coconut water is free-nuclear endosperm (3n).",
      topicTested: "Free Nuclear Endosperm",
      isVerifiedPYQ: true,
      verificationSource: "AIPMT 2015 Official Paper"
    },
    {
      id: "pyq-bio-endo-6",
      year: 2010,
      exam: "AIPMT 2010",
      question: "Apomictic embryos in Citrus arise from:",
      options: [
        "Maternal sporophytic tissues in ovule (nucellus/integuments)",
        "Diplod egg",
        "Synergids",
        "Antipodal cells"
      ],
      correctAnswerIndex: 0,
      explanation: "In Citrus and Mango, polyembryony and apomixis occur due to adventive nucellar embryony, where diploid maternal nucellar/integument cells protrude into the embryo sac and form embryos.",
      topicTested: "Polyembryony & Nucellar Embryony in Citrus",
      isVerifiedPYQ: true,
      verificationSource: "AIPMT 2010 Official Paper"
    }
  ]
};
