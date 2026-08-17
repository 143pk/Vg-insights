import { DetailedTopicContent } from '../../types/neet';

export const bioPhotoperiodismVernalizationDetails: DetailedTopicContent = {
  topicId: "bio-photoperiodism-vernalization",
  topicName: "Photoperiodism, Vernalization & Seed Dormancy",
  subject: "Biology",
  class: "Class 11",
  classification: "Plant Physiology",
  chapter: "Plant Growth and Development",

  whatIsThisTopic: "Photoperiodism is the physiological response of plants to the relative duration of light and dark periods for inducing flowering (SDP, LDP, DNP). Leaves perceive the light signal and synthesize Florigen (FT protein). Vernalization is the requirement of low temperature (1°C - 10°C) exposure for flowering, perceived by shoot apices/embryos (winter vs spring cereals, biennials). Seed Dormancy is the inability of viable seeds to germinate under favorable conditions, overcome by scarification, stratification, or GA3.",

  basicIdea: [
    "Photoperiodism: Response of plants to relative day and night length to induce flowering. Categorized into Short-Day Plants (SDP), Long-Day Plants (LDP), and Day-Neutral Plants (DNP).",
    "Critical Dark Period: For SDPs, the dark period (night length) is CRITICAL and must be continuous/uninterrupted. A brief flash of red light during the dark night completely prevents flowering in SDPs!",
    "Site of Perception & Florigen: LEAVES perceive the photoperiodic light/dark signal via Phytochrome pigment (Pr <-> Pfr). Under favorable photoperiods, a hormonal signal (Florigen / FT protein) is synthesized in leaves and translocated via PHLOEM to the shoot apex to induce floral differentiation.",
    "Vernalization: Quantitative or qualitative dependence of flowering on low temperature (cold) exposure (1°C to 10°C).",
    "Perception Site of Vernalization: Shoot apical meristem, germinating embryo, or young leaves (NOT mature leaves). Generates the hypothetical hormone Vernalin.",
    "Agricultural Importance of Vernalization: Prevents premature reproductive development late in autumn. Distinguishes Winter vs. Spring varieties of wheat, barley, and rye. Biennial plants (Sugarbeet, Cabbage, Carrot) require cold treatment to flower in their second year.",
    "Seed Dormancy: State where viable seeds fail to germinate despite favorable moisture, oxygen, and temperature. Causes: hard seed coat, chemical inhibitors (ABA, phenolic acid), immature embryo. Overcome by scarification, stratification (cold moist treatment), or GA3 application."
  ],

  importantTerms: [
    {
      term: "Short-Day Plants (SDP)",
      definition: "Plants that flower only when day length is SHORTER than a critical photoperiod, requiring a continuous, uninterrupted long dark night (e.g., Soybean, Tobacco, Chrysanthemum, Xanthium).",
      neetNote: "Technically Long-Night Plants! Interruption of dark night with light inhibits flowering."
    },
    {
      term: "Long-Day Plants (LDP)",
      definition: "Plants that flower only when day length exceeds a critical photoperiod, requiring a short dark night (e.g., Wheat, Barley, Radish, Spinach, Henbane).",
      neetNote: "Interruption of dark night with light actually PROMOTES flowering in LDPs!"
    },
    {
      term: "Florigen",
      definition: "A hypothetical flowering hormone (now identified as Flowering Locus T / FT protein) synthesized in leaves under favorable photoperiods and transported to shoot apices via phloem.",
      neetNote: "Key NCERT Point: The site of photoperiod perception is the LEAF, not the floral apex!"
    },
    {
      term: "Vernalization",
      definition: "The promotion of flowering by a period of low temperature treatment (1°C - 10°C) applied to germinating seeds or young plants.",
      neetNote: "Crucial for winter varieties of wheat, barley, rye, and biennial crops (cabbage, sugarbeet)."
    },
    {
      term: "Scarification",
      definition: "Mechanical or chemical softening/breaking of a hard, impermeable seed coat (using sandpaper, file, or conc. H2SO4) to break seed dormancy.",
      neetNote: "Simulates natural digestion by animal digestive enzymes or soil abrasion."
    },
    {
      term: "Stratification",
      definition: "Incubation of dormant seeds at low temperatures ( cold moist treatment at 5°C) under well-aerated conditions to break seed dormancy.",
      neetNote: "Mimics natural winter chilling requirements."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Photoperiodism & Plant Categories",
      paragraphs: [
        "Photoperiodism is defined as the physiological response of plants to the relative duration of light (day length) and dark (night length) periods for the induction of flowering.",
        "• Plant Photoperiodic Categories:",
        "  1. SHORT-DAY PLANTS (SDP):",
        "     - Flower when exposed to day lengths SHORTER than a critical photoperiod.",
        "     - Require a continuous, UNINTERRUPTED dark period exceeding a critical duration.",
        "     - NCERT Examples: Soybean (Glycine max), Tobacco, Chrysanthemum, Cocklebur (Xanthium), Dahlia.",
        "  2. LONG-DAY PLANTS (LDP):",
        "     - Flower when exposed to day lengths LONGER than a critical photoperiod.",
        "     - NCERT Examples: Wheat, Barley, Radish, Spinach, Henbane (Hyoscyamus niger), Sugarbeet.",
        "  3. DAY-NEUTRAL PLANTS (DNP):",
        "     - Flowering is completely independent of photoperiod/day length.",
        "     - NCERT Examples: Tomato, Cucumber, Sunflower, Maize, Cotton, Pea."
      ],
      importantPoints: [
        "SDP NCERT examples = Tobacco, Soybean, Chrysanthemum, Xanthium.",
        "LDP NCERT examples = Wheat, Barley, Radish, Spinach, Henbane.",
        "DNP NCERT examples = Tomato, Cucumber, Sunflower, Maize."
      ]
    },
    {
      heading: "2. The Critical Dark Period & Night Break Effect",
      paragraphs: [
        "Experiments revealed that the duration of the DARK period (night length) is far more critical than the light period:",
        "• Short-Day Plants are technically LONG-NIGHT PLANTS:",
        "  - If the continuous dark night of an SDP is interrupted by even a brief flash of red light (660 nm), the plant FAILS to flower!",
        "  - This disruption is called the 'Night Break Effect'.",
        "• Long-Day Plants are technically SHORT-NIGHT PLANTS:",
        "  - Interrupting the long night of an LDP with a brief flash of light satisfies its requirement and PROMOTES flowering!"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="280" fill="#0f172a" rx="12"/>
          <text x="290" y="22" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">PHOTOPERIODIC RESPONSES &amp; NIGHT BREAK EFFECT</text>

          <!-- Row 1: SDP Normal -->
          <g transform="translate(30, 45)">
            <text x="0" y="15" fill="#f87171" font-size="10" font-weight="bold">SDP (Short-Day)</text>
            <rect x="110" y="0" width="80" fill="#f59e0b" height="20" rx="3"/>
            <rect x="195" y="0" width="160" fill="#1e293b" stroke="#64748b" height="20" rx="3"/>
            <text x="150" y="13" fill="#000" font-size="8" text-anchor="middle">Light</text>
            <text x="275" y="13" fill="#cbd5e1" font-size="8" text-anchor="middle">Long Dark Night</text>
            <text x="430" y="15" fill="#34d399" font-size="11" font-weight="bold">→ FLOWERS ✓</text>
          </g>

          <!-- Row 2: SDP Night Break -->
          <g transform="translate(30, 85)">
            <text x="0" y="15" fill="#f87171" font-size="10" font-weight="bold">SDP (Interrupted)</text>
            <rect x="110" y="0" width="80" fill="#f59e0b" height="20" rx="3"/>
            <rect x="195" y="0" width="70" fill="#1e293b" stroke="#64748b" height="20" rx="3"/>
            <rect x="268" y="0" width="10" fill="#ef4444" height="20" rx="1"/> <!-- Light flash -->
            <rect x="281" y="0" width="74" fill="#1e293b" stroke="#64748b" height="20" rx="3"/>
            <text x="273" y="-3" fill="#f87171" font-size="7" text-anchor="middle">Flash</text>
            <text x="430" y="15" fill="#f87171" font-size="11" font-weight="bold">→ NO FLOWER ✗</text>
          </g>

          <!-- Row 3: LDP Normal -->
          <g transform="translate(30, 140)">
            <text x="0" y="15" fill="#38bdf8" font-size="10" font-weight="bold">LDP (Long-Day)</text>
            <rect x="110" y="0" width="160" fill="#f59e0b" height="20" rx="3"/>
            <rect x="275" y="0" width="80" fill="#1e293b" stroke="#64748b" height="20" rx="3"/>
            <text x="190" y="13" fill="#000" font-size="8" text-anchor="middle">Long Light Day</text>
            <text x="315" y="13" fill="#cbd5e1" font-size="8" text-anchor="middle">Dark</text>
            <text x="430" y="15" fill="#34d399" font-size="11" font-weight="bold">→ FLOWERS ✓</text>
          </g>

          <!-- Row 4: LDP Interrupted -->
          <g transform="translate(30, 180)">
            <text x="0" y="15" fill="#38bdf8" font-size="10" font-weight="bold">LDP (Interrupted)</text>
            <rect x="110" y="0" width="80" fill="#f59e0b" height="20" rx="3"/>
            <rect x="195" y="0" width="70" fill="#1e293b" stroke="#64748b" height="20" rx="3"/>
            <rect x="268" y="0" width="10" fill="#ef4444" height="20" rx="1"/>
            <rect x="281" y="0" width="74" fill="#1e293b" stroke="#64748b" height="20" rx="3"/>
            <text x="430" y="15" fill="#34d399" font-size="11" font-weight="bold">→ FLOWERS ✓</text>
          </g>

          <text x="290" y="240" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">KEY LESSON: Continuous dark period is critical for SDPs. Night break destroys SDP flowering!</text>
        </svg>`,
        caption: "Effect of Continuous Dark Night vs. Light Interruption (Night Break Effect) on Short-Day and Long-Day Plants.",
        guide: "WHAT TO OBSERVE: For SDPs, a continuous uninterrupted dark night is MANDATORY. A red light flash during the dark night prevents flowering in SDPs, but induces flowering in LDPs!"
      },
      importantPoints: [
        "Dark period is critical for SDPs (Short-Day Plants are Long-Night Plants).",
        "Red light flash during night inhibits SDP flowering and promotes LDP flowering."
      ]
    },
    {
      heading: "3. Site of Perception, Phytochrome & Florigen Hypothesis",
      paragraphs: [
        "• Site of Perception: LEAVES are the sole perception organs for light/dark photoperiodic signals (verified by defoliation experiments; even a single leaf exposed to favorable photoperiod induces flowering).",
        "• PHYTOCHROME PIGMENT SYSTEM:",
        "  - Photoperiodic light is perceived by a blue-green proteinaceous chromofilament pigment called PHYTOCHROME.",
        "  - Phytochrome exists in two interconvertible forms:",
        "    1. Pr (Red light absorbing form, lambda = 660 nm): Physiologically inactive.",
        "    2. Pfr (Far-red light absorbing form, lambda = 730 nm): Physiologically active form.",
        "  - Conversion: Pr absorbs red light during the day and rapidly converts to Pfr. Pfr absorbs far-red light or slowly converts back to Pr during the dark night.",
        "• FLORIGEN HYPOTHESIS:",
        "  - When leaves receive the inductive photoperiod, a floral stimulus hormone termed FLORIGEN (identified as Flowering Locus T / FT protein) is synthesized in leaf mesophyll cells.",
        "  - Florigen translocates through the PHLOEM to the shoot apical meristem, where it converts vegetative shoot apices into floral buds."
      ],
      importantPoints: [
        "Perception site for photoperiodism = LEAF.",
        "Phytochrome Pfr is the active form.",
        "Florigen signal travels from leaf to shoot apex via PHLOEM."
      ]
    },
    {
      heading: "4. Vernalization: Cold Requirement & Agricultural Significance",
      paragraphs: [
        "Vernalization (from Latin 'vernus' = spring) is the quantitative or qualitative dependence of flowering on exposure to a low temperature treatment (1°C to 10°C).",
        "• Perception Site: Shoot apical meristem, germinating seed embryo, or young expanding leaves (NOT mature leaves). Generates the hypothetical hormone Vernalin.",
        "• AGRICULTURAL IMPORTANCE & NCERT CROP EXAMPLES:",
        "  1. WINTER VS. SPRING CEREALS (Wheat, Barley, Rye):",
        "     - Spring Varieties: Planted in spring; flower, set grain, and harvested before the end of the same growing season.",
        "     - Winter Varieties: Planted in autumn. They germinate, overwinter as small seedlings, undergo natural cold vernalization during winter, resume active growth in spring, and are harvested in mid-summer. (If planted in spring, winter varieties fail to produce grain!).",
        "  2. BIENNIAL PLANTS:",
        "     - Monocarpic plants that normally complete their lifecycle in two years (vegetative growth in year 1; flowering and death in year 2).",
        "     - NCERT Examples: Sugarbeet, Cabbage, Carrot.",
        "     - Subjecting young biennial plants to cold vernalization treatment tricks them into flowering in their first year!",
        "• DEVERNALIZATION: Reversal of vernalization achieved by subjecting cold-treated seeds immediately to high temperatures (35°C - 40°C)."
      ],
      importantPoints: [
        "Vernalization cold temperature range = 1°C to 10°C.",
        "Perception site for vernalization = Shoot apex / embryo (NOT mature leaf).",
        "Winter varieties of wheat/barley/rye require winter vernalization.",
        "Biennial plants (Sugarbeet, Cabbage, Carrot) flower after cold treatment.",
        "Devernalization = High temperature reversal of vernalization."
      ]
    },
    {
      heading: "5. Master Comparison: Photoperiodism vs. Vernalization",
      paragraphs: [
        "Although both mechanisms induce flowering, their physiological triggers and perception mechanisms differ distinctly:"
      ],
      tables: [
        {
          title: "PHOTOPERIODISM VS VERNALIZATION COMPARISON",
          headers: ["Feature", "Photoperiodism", "Vernalization"],
          rows: [
            ["Primary Stimulus", "Relative duration of light and dark (Photoperiod)", "Low temperature exposure (1°C - 10°C)"],
            ["Perception Site", "Mature Leaves", "Shoot apical meristem, embryo, young leaves"],
            ["Photoreceptor / Signal", "Phytochrome (Pr / Pfr); Florigen (FT protein)", "Vernalin (hypothetical signal)"],
            ["Transport Medium", "Translocated via Phloem from leaf to apex", "Acts locally at shoot meristem"],
            ["NCERT Examples", "Tobacco, Soybean, Wheat, Radish, Henbane", "Winter wheat, barley, rye; Sugarbeet, Cabbage, Carrot"]
          ]
        }
      ],
      importantPoints: [
        "Photoperiodism stimulus = Light/Dark perceived by LEAF.",
        "Vernalization stimulus = Cold temperature (1-10°C) perceived by SHOOT APEX/EMBRYO."
      ]
    },
    {
      heading: "6. Seed Dormancy: Causes & Methods to Overcome",
      paragraphs: [
        "Seed Dormancy is an evolutionary adaptation defined as a state in which viable seeds fail to germinate even when provided with favorable environmental conditions (water, oxygen, suitable temperature).",
        "• CAUSES OF SEED DORMANCY:",
        "  1. Impermeable and hard seed coat (prevents water and oxygen entry, e.g., Legumes).",
        "  2. Presence of chemical inhibitors: Abscisic Acid (ABA), phenolic acids, para-ascorbic acid in seed coat/endosperm (e.g., Tomato, Apple).",
        "  3. Immature embryo (requires a period of post-harvest maturation).",
        "• METHODS OF OVERCOMING SEED DORMANCY:",
        "  1. Natural Methods: Abrasion by soil particles, microbial decomposition, or passage through animal digestive tracts (gut enzymes digest seed coat).",
        "  2. Artificial / Agricultural Methods:",
        "     - Scarification: Mechanical chipping, filing with sandpaper, or brief treatment with conc. H2SO4 to rupture hard seed coats.",
        "     - Stratification: Subjecting moist seeds to low temperature chilling (5°C) with good aeration.",
        "     - Chemical Treatment: Application of Gibberellic acid (GA3) or Nitrates to neutralize ABA inhibitors."
      ],
      importantPoints: [
        "Seed dormancy chemical inhibitors = ABA, phenolic acid, para-ascorbic acid.",
        "Scarification = Mechanical or chemical breaking of hard seed coat.",
        "Stratification = Cold moist chilling treatment."
      ]
    }
  ],

  formulae: [],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ["Process", "Primary Site of Perception", "Active Signal / Pigment"],
      rows: [
        ["Photoperiodism", "Mature Green Leaves", "Phytochrome (Pr/Pfr) & Florigen (FT Protein)"],
        ["Vernalization", "Shoot Apical Meristem & Embryo", "Vernalin"],
        ["Seed Dormancy Release", "Embryo & Aleurone Layer", "Gibberellic Acid (GA3)"]
      ]
    },
    caption: "Comparative Summary of Developmental Signal Perception in Plants."
  },

  neetImportantPoints: [
    "Photoperiodism perception site is the LEAF.",
    "Phytochrome Pfr is the active form of the photoreceptor pigment.",
    "Short-Day Plants (SDP) require continuous uninterrupted dark night.",
    "Red light flash during night inhibits SDP flowering.",
    "Vernalization perception site is the SHOOT APEX or GERMINATING EMBRYO (1-10°C).",
    "Winter varieties of wheat/barley/rye fail to flower if sown in spring.",
    "Biennial crops (Sugarbeet, Cabbage, Carrot) flower after vernalization.",
    "Florigen travels from leaf to apex via PHLOEM.",
    "Seed dormancy chemical inhibitors: ABA, phenolic acid, para-ascorbic acid.",
    "Scarification = breaking seed coat mechanically/acidly.",
    "Stratification = cold moist chilling treatment."
  ],

  commonConfusions: [
    {
      commonConfusion: "Thinking photoperiodism is perceived by the shoot apex.",
      correctFact: "Photoperiodism light/dark signals are perceived strictly by the LEAVES, which then synthesize Florigen and send it to the shoot apex via phloem.",
      whyItMattersForNEET: "Frequently tested true/false assertion statement in NEET UG."
    },
    {
      commonConfusion: "Confusing perception sites of Photoperiodism vs Vernalization.",
      correctFact: "Photoperiodism is perceived by LEAVES. Vernalization is perceived by SHOOT APEX / EMBRYO.",
      whyItMattersForNEET: "High-yield NCERT comparison point in NEET UG."
    }
  ],

  quickRevision: [
    "Photoperiodism: Leaf perceives light -> Phytochrome (Pfr active) -> Florigen (FT protein) via Phloem -> Shoot apex flowers.",
    "SDP = Long night required (Tobacco, Soybean, Chrysanthemum, Xanthium). Night break destroys SDP flowering.",
    "LDP = Short night required (Wheat, Barley, Radish, Spinach, Henbane).",
    "DNP = Independent (Tomato, Cucumber, Sunflower, Maize).",
    "Vernalization: Cold treatment (1-10°C) perceived by Shoot Apex / Embryo. Winter wheat/rye/barley & Biennials (Sugarbeet, Cabbage, Carrot).",
    "Devernalization: High temperature reversal.",
    "Seed Dormancy: Inhibitors (ABA, phenolic acid). Broken by Scarification (sandpaper/H2SO4), Stratification (cold moist chilling), or GA3."
  ],

  practiceQuestions: [
    {
      id: "prac-photo-1",
      questionText: "Which part of the plant perceives the light/dark stimulus for photoperiodism?",
      options: [
        "Shoot apical meristem",
        "Mature leaves",
        "Axillary buds",
        "Root apex"
      ],
      correctOption: 1,
      explanation: "The perception of light/dark duration for photoperiodism occurs in mature leaves. Leaves synthesize Florigen which travels via phloem to the shoot apical meristem.",
      difficulty: "Easy",
      conceptTested: "Photoperiodism perception site"
    },
    {
      id: "prac-photo-2",
      questionText: "Which of the following is a biennial plant that requires cold treatment (vernalization) to induce flowering in its second year?",
      options: [
        "Wheat",
        "Sugarbeet",
        "Soybean",
        "Tobacco"
      ],
      correctOption: 1,
      explanation: "Sugarbeet (along with Cabbage and Carrot) is a biennial monocarpic plant that requires cold vernalization treatment to trigger flowering.",
      difficulty: "Medium",
      conceptTested: "Vernalization in biennial plants"
    }
  ],

  pyqs: [
    {
      id: "pyq-photo-1",
      year: 2021,
      exam: "NEET UG",
      questionText: "The site of perception of light in plants during photoperiodism is:",
      options: [
        "Shoot mist",
        "Stem tip",
        "Leaves",
        "Axillary bud"
      ],
      correctOption: 2,
      explanation: "Leaves are the site of perception of photoperiodic light/dark stimuli in plants.",
      difficulty: "Easy",
      topicTested: "Site of photoperiod perception",
      verified: true
    },
    {
      id: "pyq-photo-2",
      year: 2020,
      exam: "NEET UG",
      questionText: "Which of the following statements is correct regarding vernalization?",
      options: [
        "It refers to the promotion of flowering by high temperature treatment.",
        "It is perceived by mature green leaves.",
        "It prevents precocious reproductive development late in the growing season.",
        "It is caused by the hormone ABA."
      ],
      correctOption: 2,
      explanation: "Vernalization is low temperature promotion of flowering that prevents precocious reproductive development late in the growing season, enabling the plant to reach vegetative maturity.",
      difficulty: "Medium",
      topicTested: "Vernalization significance",
      verified: true
    },
    {
      id: "pyq-photo-3",
      year: 2019,
      exam: "NEET UG",
      questionText: "What happens if a winter variety of wheat is sown in spring season?",
      options: [
        "It flowers normally and produces grain.",
        "It will fail to produce flowers or mature grain within the season.",
        "It will undergo rapid vegetative growth and flower early.",
        "It will convert into a spring variety."
      ],
      correctOption: 1,
      explanation: "Winter varieties of wheat require a cold winter period (vernalization) to induce flowering. If sown in spring, they will fail to receive cold treatment and fail to flower or produce mature grain within that growing season.",
      difficulty: "Medium",
      topicTested: "Winter vs spring cereal varieties",
      verified: true
    }
  ]
};
