import { DetailedTopicContent } from '../../types/neet';

export const bioPlantGrowthRegulatorsDetails: DetailedTopicContent = {
  topicId: "bio-plant-growth-regulators",
  topicName: "Plant Growth Regulators (Auxins, Gibberellins, Cytokinins, Ethylene & ABA)",
  subject: "Biology",
  class: "Class 11",
  classification: "Plant Physiology",
  chapter: "Plant Growth and Development",

  whatIsThisTopic: "Plant Growth Regulators (PGRs) or plant hormones are organic signal molecules synthesized in minute quantities that regulate growth, development, and physiological responses. Promoters include Auxins, Gibberellins, and Cytokinins. Inhibitors include Abscisic Acid (ABA) and Ethylene (gaseous hormone). Each hormone has distinct classical discovery experiments, cellular mechanisms, agricultural applications, and complex interactions (synergism, antagonism).",

  basicIdea: [
    "PGR Classification: Plant Growth Promoters (Auxins, Gibberellins, Cytokinins - promote cell division, cell enlargement, pattern formation) vs. Plant Growth Inhibitors (Abscisic Acid - promotes dormancy, abscission, stress responses) and Ethylene (gaseous PGR, promotes ripening, abscission, but also some growth responses).",
    "Discovery Experiments: Auxin (Charles & Francis Darwin phototropism on canary grass; Boysen-Jensen gelatin/mica test; Paál asymmetric tip test; Went Avena curvature test); Gibberellin (E. Kurosawa on 'Bakanae' foolish seedling disease in rice caused by Gibberella fujikuroi); Cytokinin (Skoog & Miller on tobacco pith callus & herring sperm DNA kinetin); Ethylene (H.H. Cousins on ripe oranges ripening unripened bananas); ABA (Inhibitor-B, Abscissin II, Dormin).",
    "Auxins (IAA, IBA, NAA, 2,4-D): Cell elongation (acid growth hypothesis), Apical Dominance (suppression of axillary buds), Rooting in stem cuttings (IBA, NAA), Parthenocarpy in tomatoes, Abscission regulation (prevents premature drop, promotes mature drop), Selective Herbicide (2,4-D kills dicot weeds).",
    "Gibberellins (GA3): Stem & Internode elongation, Bolting (rapid internode elongation before flowering in rosette plants like Cabbage, Sugarbeet), Breaking seed dormancy, Seed Germination engine (induces alpha-amylase in barley aleurone layer), Malting in brewing, Sugarcane yield increase (up to 20 tonnes/acre).",
    "Cytokinins (Zeatin, Kinetin): Adenine derivatives. Promotes Cell Division (cytokinesis), Overcomes Apical Dominance (promotes lateral shoot growth), Adventitious shoot formation, Delays Leaf Senescence (Richmond-Lang effect by nutrient mobilization). High Auxin:Low Cytokinin -> Roots; Low Auxin:High Cytokinin -> Shoots.",
    "Ethylene (Gaseous C2H4): Synthesized from Methionine. Fruit Ripening (Respiratory Climacteric), Seedling Triple Response (inhibition of elongation, radial swelling, horizontal growth/apical hook), Root hair formation, Ethephon application (tomato ripening, cucumber female flowers).",
    "Abscisic Acid (ABA): Stress Hormone derived from carotenoids. Induces Stomatal Closure under drought via K+ efflux, Promotes Seed Dormancy, General growth inhibitor, Direct Antagonist to Gibberellins."
  ],

  importantTerms: [
    {
      term: "Apical Dominance",
      definition: "The phenomenon where the growing apical bud suppresses the growth of lateral axillary buds due to high auxin synthesis at the tip.",
      neetNote: "Decapitation (removing apical bud) removes auxin source, allowing lateral buds to grow (used in tea plantations and hedge making)."
    },
    {
      term: "Bolting",
      definition: "The dramatic internode elongation just prior to flowering in rosette plants (e.g., Cabbage, Sugarbeet, Beetroot) induced by Gibberellins.",
      neetNote: "High-yield NCERT concept: GA treatment induces bolting without requiring long days or cold treatment."
    },
    {
      term: "Richmond-Lang Effect",
      definition: "The delay of leaf senescence induced by Cytokinins through active nutrient mobilization and retention of chlorophyll.",
      neetNote: "Cytokinins keep leaves green longer by preventing protein and chlorophyll degradation."
    },
    {
      term: "Respiratory Climacteric",
      definition: "The sudden sharp rise in the rate of cellular respiration accompanying fruit ripening triggered by Ethylene gas.",
      neetNote: "Observed in climacteric fruits like Apple, Banana, Tomato, Mango."
    },
    {
      term: "Ethephon",
      definition: "The most widely used commercial aqueous source of Ethylene (2-chloroethylphosphonic acid) that releases ethylene inside plant tissues.",
      neetNote: "Accelerates fruit ripening in tomatoes/apples, fruit thinning in cotton/walnuts, and promotes female flowers in cucumbers."
    },
    {
      term: "Stress Hormone (ABA)",
      definition: "Abscisic Acid, named for its pivotal role in protecting plants against environmental stresses (drought, salinity) by inducing stomatal closure.",
      neetNote: "Triggers rapid K+ ion efflux from guard cells, closing stomata under water deficit."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Classical Discovery Experiments of Plant Growth Regulators",
      paragraphs: [
        "The discovery of each major class of plant hormones originated from accidental observations or rigorous classical physiology experiments:",
        "• AUXIN DISCOVERY:",
        "  1. Charles & Francis Darwin (1880): Observed that canary grass (Phalaris canariensis) coleoptiles bent towards unilateral light (phototropism). Transmitted signal originated from the tip.",
        "  2. Peter Boysen-Jensen (1913): Inserted gelatin blocks or mica plates. Signal passed through gelatin (diffusible chemical) but was blocked by impermeable mica on the shaded side.",
        "  3. Arpad Paál (1919): Placed decapitated coleoptile tip asymmetrically in dark; caused curvature toward the opposite side without light.",
        "  4. Frits Went (1928): Successfully isolated the chemical into agar blocks from oat (Avena sativa) coleoptile tips. Developed the AVENA CURVATURE TEST for quantitative bioassay of Auxin.",
        "• GIBBERELLIN DISCOVERY:",
        "  - E. Kurosawa (1926): Investigated 'Bakanae' (foolish seedling) disease in rice crops characterized by unhealthily tall sterile plants. Proved it was caused by fungal infection of Gibberella fujikuroi (Fusarium moniliforme). The active sterile filtrate contained Gibberellic Acid (GA3).",
        "• CYTOKININ DISCOVERY:",
        "  - F. Skoog and Carlos Miller (1955): Observed tobacco stem pith callus proliferated only when auxin was supplemented with vascular tissue extract, yeast extract, coconut milk, or DNA. Isolated the active cell division factor from autoclaved herring sperm DNA and named it KINETIN (a synthetic N6-furfurylamino purine). Later, Letham isolated natural Zeatin from corn kernels.",
        "• ETHYLENE DISCOVERY:",
        "  - H. H. Cousins (1910): Confirmed that ripe oranges released a volatile gas that greatly accelerated the ripening of unripened bananas stored nearby. Identified chemically as gaseous Ethylene (C2H4).",
        "• ABSCISIC ACID DISCOVERY:",
        "  - 1960s: Three independent research groups isolated three different growth inhibitors: Inhibitor-B, Abscissin II, and Dormin. All three were proved chemically identical and named Abscisic Acid (ABA)."
      ],
      importantPoints: [
        "Avena curvature test = Went (Auxin bioassay).",
        "Bakanae / foolish seedling disease in rice = E. Kurosawa / Gibberella fujikuroi (Gibberellin).",
        "Herring sperm DNA / tobacco callus = Skoog & Miller (Kinetin / Cytokinin).",
        "Ripe oranges ripening unripened bananas = H.H. Cousins (Ethylene)."
      ]
    },
    {
      heading: "2. Auxins (IAA, IBA, NAA, 2,4-D): Functions & Applications",
      paragraphs: [
        "Auxins (from Greek 'auxein' = to grow) were the first plant hormones discovered. Synthesized primarily at stem and root apices.",
        "• Types of Auxins:",
        "  - Natural Auxins: Indole-3-acetic acid (IAA), Indole butyric acid (IBA).",
        "  - Synthetic Auxins: Naphthalene acetic acid (NAA), 2,4-Dichlorophenoxyacetic acid (2,4-D), 2,4,5-T.",
        "• Key Physiological Effects & Applications:",
        "  1. Cell Elongation: Acid Growth Hypothesis (auxin activates H+-ATPase pumps, lowering cell wall pH, activating expansins to loosen wall polymers).",
        "  2. Apical Dominance: High auxin concentrations synthesized at the apical bud inhibit lateral axillary bud growth. Removing the apical tip (decapitation) triggers rapid lateral branching (widely applied in tea gardening and hedge pruning).",
        "  3. Root Initiation: IBA and NAA stimulate adventitious root formation in stem cuttings (used in vegetative propagation).",
        "  4. Parthenocarpy: Induces formation of seedless fruits in Tomatoes.",
        "  5. Abscission Regulation: Prevents premature leaf and fruit drop at young stages, but PROMOTES abscission of older, mature leaves and fruits.",
        "  6. Selective Herbicide: 2,4-D selectively kills broad-leaved dicot weeds in grain fields while leaving mature monocot crops completely unharmed."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="260" fill="#0f172a" rx="12"/>
          <text x="290" y="24" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">AUXIN MECHANISMS: PHOTOTROPISM &amp; APICAL DOMINANCE</text>

          <!-- Phototropism Left -->
          <g transform="translate(30, 45)">
            <rect x="0" y="0" width="240" height="195" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">A. Phototropic Bending</text>

            <!-- Light source -->
            <circle cx="205" cy="45" r="12" fill="#f59e0b"/>
            <text x="205" y="49" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">SUN</text>

            <!-- Bending stem -->
            <path d="M 100 180 L 100 110 Q 100 80 140 60" fill="none" stroke="#10b981" stroke-width="12" stroke-linecap="round"/>
            <text x="50" y="100" fill="#fbbf24" font-size="9" font-weight="bold">Auxin migrates</text>
            <text x="50" y="112" fill="#fbbf24" font-size="9" font-weight="bold">to shaded side</text>

            <text x="120" y="165" fill="#cbd5e1" font-size="9" text-anchor="middle">Shaded side elongates faster</text>
            <text x="120" y="180" fill="#cbd5e1" font-size="9" text-anchor="middle">→ Bends towards light</text>
          </g>

          <!-- Apical Dominance Right -->
          <g transform="translate(310, 45)">
            <rect x="0" y="0" width="240" height="195" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="8"/>
            <text x="120" y="22" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">B. Decapitation Effect</text>

            <!-- Intact plant -->
            <line x1="60" y1="150" x2="60" y2="60" stroke="#34d399" stroke-width="4"/>
            <circle cx="60" cy="55" r="6" fill="#ef4444"/>
            <text x="60" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Intact Tip</text>
            <text x="60" y="182" fill="#ef4444" font-size="8" text-anchor="middle">(Suppressed)</text>

            <!-- Decapitated plant -->
            <line x1="170" y1="150" x2="170" y2="80" stroke="#34d399" stroke-width="4"/>
            <!-- Lateral branches -->
            <line x1="170" y1="100" x2="145" y2="85" stroke="#34d399" stroke-width="3"/>
            <line x1="170" y1="110" x2="195" y2="95" stroke="#34d399" stroke-width="3"/>
            <text x="170" y="170" fill="#cbd5e1" font-size="8" text-anchor="middle">Decapitated Tip</text>
            <text x="170" y="182" fill="#34d399" font-size="8" text-anchor="middle">(Lateral Growth)</text>
          </g>
        </svg>`,
        caption: "Auxin Mechanisms: Phototropic bending due to lateral auxin migration, and removal of Apical Dominance by decapitation.",
        guide: "WHAT TO OBSERVE: Unilateral light causes auxin to accumulate on the shaded side, stimulating elongation on that side and bending stem toward light. Decapitation removes apical auxin source, releasing lateral buds from suppression."
      },
      importantPoints: [
        "Natural Auxins = IAA, IBA; Synthetic Auxins = NAA, 2,4-D, 2,4,5-T.",
        "Apical dominance removal (decapitation) is used in tea gardens and hedge making.",
        "2,4-D is a selective dicot weedicide in monocot fields."
      ]
    },
    {
      heading: "3. Gibberellins (GA3): Functions & Agricultural Uses",
      paragraphs: [
        "Gibberellins comprise over 100 acidic diterpenoid hormones (GA1, GA2, GA3, etc.). GA3 (Gibberellic acid) was the first discovered and remains the most intensively studied.",
        "• Key Physiological Effects & Applications:",
        "  1. Stem & Internode Elongation: Overcomes genetic dwarfism in plants (e.g., dwarf corn or peas grow tall with GA application).",
        "  2. BOLTING: Promotes sudden internode elongation prior to flowering in rosette plants like Cabbage, Sugarbeet, and Beetroot.",
        "  3. Breaking Seed Dormancy: Overcomes light/cold dormancy requirements in seeds.",
        "  4. Seed Germination Engine: During barley seed germination, GA secreted by the embryo diffuses into the ALEURONE LAYER to induce gene expression of hydrolytic enzymes (alpha-amylase, proteases). Alpha-amylase hydrolyzes endosperm starch into glucose to feed the growing embryo.",
        "  5. Malting Industry: Speeds up the malting process in barley grains for brewing beer.",
        "  6. Increasing Sugarcane Yield: Spraying sugarcane crops with GAs increases stem/internode length, increasing sugar yield by up to 20 tonnes per acre!",
        "  7. Fruit Shape & Stalk Length: Increases length of grape stalks (stalk elongation prevents rotting) and improves apple shape/length.",
        "  8. Early Seed Production: Hastens maturity period in juvenile conifers, leading to early seed production."
      ],
      importantPoints: [
        "GA3 induces BOLTING in rosette plants (Cabbage, Beet).",
        "GA induces alpha-amylase synthesis in barley aleurone layer for seed germination.",
        "Spraying GA on sugarcane increases yield by up to 20 tonnes/acre.",
        "GA speeds up malting in the brewing industry."
      ]
    },
    {
      heading: "4. Cytokinins (Zeatin, Kinetin): Cell Division & Senescence",
      paragraphs: [
        "Cytokinins are basic purine (adenine) derivatives discovered for their powerful ability to promote cytokinesis (cell division).",
        "• Types:",
        "  - Synthetic: Kinetin (N6-furfurylamino purine).",
        "  - Natural: Zeatin (isolated from corn grain/endosperm and coconut milk), Isopentenyl adenine (iPA).",
        "• Synthesis Site: Regions of active cell division (root apices, developing shoot buds, young fruits).",
        "• Key Physiological Effects & Applications:",
        "  1. Promotes Cytokinesis / Cell Division: Essential for callus proliferation in tissue culture.",
        "  2. Overcomes Apical Dominance: Promotes the outgrowth of lateral axillary buds (direct antagonist to Auxin).",
        "  3. Adventitious Shoot Initiation: High Cytokinin to Auxin ratio induces shoot organogenesis.",
        "  4. RICHMOND-LANG EFFECT (Delay of Leaf Senescence): Delays aging and chlorophyll loss in detached leaves by mobilizing nutrients towards treated tissue.",
        "  5. Auxin : Cytokinin Ratio in Plant Tissue Culture:",
        "     - High Auxin : Low Cytokinin -> Root Differentiation (Rhizogenesis).",
        "     - Low Auxin : High Cytokinin -> Shoot Differentiation (Caulogenesis).",
        "     - Balanced Auxin : Cytokinin -> Undifferentiated Callus Proliferation."
      ],
      importantPoints: [
        "Zeatin is a natural cytokinin from corn/coconut milk; Kinetin is synthetic from herring DNA.",
        "Richmond-Lang effect = Cytokinin delays leaf senescence via nutrient mobilization.",
        "High Auxin:Low Cytokinin = Roots; Low Auxin:High Cytokinin = Shoots."
      ]
    },
    {
      heading: "5. Ethylene: The Gaseous Hormone & Fruit Ripening",
      paragraphs: [
        "Ethylene (C2H4) is a simple, volatile gaseous hydrocarbon synthesized in tissues undergoing senescence and ripening fruits. Precursor amino acid is Methionine.",
        "• Key Physiological Effects & Applications:",
        "  1. FRUIT RIPENING & RESPIRATORY CLIMACTERIC: Promotes rapid fruit ripening accompanied by a sudden dramatic increase in cellular respiration rate (Respiratory Climacteric).",
        "  2. TRIPLE RESPONSE IN SEEDLINGS: 1) Swelling/thickening of axis (radial expansion); 2) Inhibition of longitudinal elongation; 3) Horizontal growth habit and apical hook formation in dicot seedlings.",
        "  3. Root & Root Hair Formation: Stimulates root growth and adventitious root hair development, dramatically increasing root absorption surface area.",
        "  4. Breaking Seed and Bud Dormancy: Promotes seed germination in peanut seeds and sprouting of potato tubers.",
        "  5. ETHEPHON (2-chloroethylphosphonic acid): Most widely used commercial aqueous source. Readily absorbed and releases ethylene gas inside tissues.",
        "     - Accelerates fruit ripening in tomatoes and apples.",
        "     - Accelerates abscission / fruit thinning in cotton, cherry, and walnut.",
        "     - Promotes FEMALE FLOWERS in cucumbers (increasing fruit yield)."
      ],
      importantPoints: [
        "Ethylene precursor = Methionine.",
        "Respiratory climacteric = Sudden spike in respiration during fruit ripening.",
        "Ethephon promotes female flowers in cucumbers and fruit thinning in walnuts."
      ]
    },
    {
      heading: "6. Abscisic Acid (ABA): The Stress Hormone",
      paragraphs: [
        "Abscisic Acid (ABA) is a sesquiterpenoid derivative of carotenoids (violaxanthin) that acts primarily as a plant growth inhibitor and stress responder.",
        "• Key Physiological Effects & Applications:",
        "  1. STOMATAL CLOSURE UNDER WATER STRESS: Under drought or water deficit, roots signal leaves to produce ABA. ABA acts on guard cells, causing rapid efflux of K+ ions and water loss, forcing stomata to close to prevent transpirational water loss.",
        "  2. PROMOTES SEED DORMANCY: Inhibits seed germination and development, ensuring seeds remain dormant during unfavorable freezing or dry conditions.",
        "  3. ABA-GA ANTAGONISM: ABA is the direct antagonist of Gibberellic acid. While GA induces alpha-amylase and seed germination, ABA suppresses alpha-amylase synthesis and maintains dormancy.",
        "  4. Promotes Abscission of leaves, flowers, and fruits, and accelerates tissue senescence."
      ],
      importantPoints: [
        "ABA is derived from carotenoids.",
        "ABA closes stomata during drought via K+ efflux from guard cells.",
        "ABA is directly ANTAGONISTIC to Gibberellins (GA)."
      ]
    },
    {
      heading: "7. Master Comparison & Hormone Interactions",
      paragraphs: [
        "Plant growth regulators do not work in isolation; plant development is orchestrated through complex hormonal interplay:",
        "• Types of Interactions:",
        "  1. Antagonistic Interactions: ABA vs GA (dormancy vs germination); Auxin vs Cytokinin (apical dominance suppression vs lateral bud promotion).",
        "  2. Synergistic Interactions: Auxin + Cytokinin (working together for cell division in tissue culture).",
        "  3. Complementary / Sequential Interactions: Auxin induces flowering in pineapple, followed by Ethylene synchronizing fruit set."
      ],
      tables: [
        {
          title: "MASTER COMPARISON OF ALL 5 PLANT GROWTH REGULATORS",
          headers: ["Hormone", "Precursor", "Group Status", "Key Physiological Functions", "Major Agricultural Application"],
          rows: [
            ["Auxin", "Tryptophan", "Promoter", "Apical dominance, cell elongation, root initiation", "2,4-D herbicide; IBA rooting cuttings; Tomato parthenocarpy"],
            ["Gibberellin", "Acetate / Terpenes", "Promoter", "Internode elongation, Bolting, Seed germination", "Sugarcane yield; Grape stalk elongation; Barley malting"],
            ["Cytokinin", "Adenine (Purine)", "Promoter", "Cell division, Richmond-Lang effect (delays senescence)", "Overcoming apical dominance; Tissue culture shoot formation"],
            ["Ethylene", "Methionine", "Inhibitor / Promoter", "Fruit ripening, Respiratory climacteric, Triple response", "Ethephon for tomato ripening & female cucumber flowers"],
            ["Abscisic Acid", "Carotenoids", "Inhibitor", "Stomatal closure, Seed dormancy, Stress defense", "Anti-transpirant; Inducing dormancy under harsh conditions"]
          ]
        }
      ],
      importantPoints: [
        "Auxin precursor = Tryptophan; Ethylene precursor = Methionine; ABA precursor = Carotenoid.",
        "ABA vs GA is the classic antagonist pair for seed dormancy vs germination."
      ]
    }
  ],

  formulae: [
    {
      title: "Tissue Culture Auxin:Cytokinin Differentiation Ratio",
      formula: "\\text{Auxin : Cytokinin Ratio}",
      meaning: "Determines organogenesis direction in plant callus cultures.",
      symbols: "High Auxin:Cytokinin -> Rooting (Rhizogenesis); Low Auxin:Cytokinin -> Shooting (Caulogenesis)",
      conditions: "Aseptic tissue culture media.",
      whenToUse: "NEET questions on micropropagation and callus differentiation."
    }
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ["Discovered By", "Hormone", "Experimental System / Source"],
      rows: [
        ["Charles & Francis Darwin; Went", "Auxin", "Canary grass phototropism; Oat (Avena) coleoptile tip"],
        ["E. Kurosawa", "Gibberellin", "Gibberella fujikuroi fungus ('Bakanae' in rice)"],
        ["F. Skoog & C. Miller", "Cytokinin", "Autoclaved herring sperm DNA & tobacco callus"],
        ["H. H. Cousins", "Ethylene", "Ripe oranges accelerating banana ripening"],
        ["Carns, Addicott, Wareing", "Abscisic Acid", "Inhibitor-B, Abscissin II, Dormin"]
      ]
    },
    caption: "Historical Summary of Plant Hormone Discoveries."
  },

  neetImportantPoints: [
    "Auxin precursor is Tryptophan (requires Zinc ion cofactor).",
    "Synthetic auxins: 2,4-D (selective dicot weedicide) and NAA.",
    "Apical dominance is caused by Auxin; Cytokinin overcomes apical dominance.",
    "Decapitation (pruning) is used in tea gardens to promote lateral branching.",
    "Gibberellins induce BOLTING in rosette plants (Cabbage, Sugarbeet).",
    "GA induces alpha-amylase in barley aleurone layer for endosperm digestion.",
    "Spraying GA on sugarcane increases yield by up to 20 tonnes/acre.",
    "Cytokinin delays leaf senescence = Richmond-Lang effect.",
    "Ethylene precursor is Methionine; gas causes Respiratory Climacteric.",
    "Ethephon releases ethylene; increases female flowers in cucumbers.",
    "Abscisic acid (ABA) is derived from carotenoids; stress hormone closing stomata via K+ efflux.",
    "ABA and GA are directly ANTAGONISTIC in seed dormancy."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Auxin and Cytokinin roles in apical dominance.",
      correctFact: "Auxin ENFORCES apical dominance (suppresses lateral buds). Cytokinin OVERCOMES apical dominance (promotes lateral bud growth).",
      whyItMattersForNEET: "Frequently tested direct conceptual question in NEET UG."
    },
    {
      commonConfusion: "Confusing synthetic auxin 2,4-D weedicide specificity.",
      correctFact: "2,4-D selectively kills broad-leaved DICOT weeds; it does NOT affect mature MONOCOT crops (grasses/wheat/maize).",
      whyItMattersForNEET: "High-yield application question in NEET UG."
    },
    {
      commonConfusion: "Confusing ABA and GA roles in seed germination.",
      correctFact: "GA PROMOTES seed germination (induces alpha-amylase). ABA INHIBITS seed germination (maintains seed dormancy). They are antagonistic.",
      whyItMattersForNEET: "Classic antagonist hormone question in NEET UG."
    }
  ],

  quickRevision: [
    "Auxin: Tryptophan precursor. Apical dominance, rooting cuttings (IBA, NAA), 2,4-D dicot herbicide, tomato parthenocarpy.",
    "Gibberellin: GA3 diterpene. Stem elongation, Bolting in cabbage/beet, alpha-amylase induction, barley malting, sugarcane +20 tonnes/acre.",
    "Cytokinin: Adenine derivative (Zeatin, Kinetin). Cell division, Richmond-Lang effect (delays senescence), overcomes apical dominance.",
    "Ethylene: Methionine precursor. Gaseous C2H4, Fruit ripening (climacteric), triple response, Ethephon (female cucumber flowers).",
    "ABA: Carotenoid derivative. Stress hormone, closes stomata (K+ efflux), maintains seed dormancy, GA antagonist.",
    "Discoveries: Went (Avena/Auxin), Kurosawa (Bakanae/GA), Skoog/Miller (Herring DNA/Kinetin), Cousins (Ripe oranges/Ethylene)."
  ],

  practiceQuestions: [
    {
      id: "prac-pgr-1",
      questionText: "Which plant growth regulator would you apply to increase the yield of sugarcane crop by elongating stem internodes?",
      options: [
        "Auxin",
        "Gibberellin",
        "Cytokinin",
        "Abscisic Acid"
      ],
      correctOption: 1,
      explanation: "Spraying sugarcane crops with Gibberellins (GA) increases internode length, thereby increasing the yield by as much as 20 tonnes per acre.",
      difficulty: "Easy",
      conceptTested: "Gibberellin applications"
    },
    {
      id: "prac-pgr-2",
      questionText: "Which hormone exhibits a classic antagonistic relationship with Gibberellic Acid regarding seed germination and dormancy?",
      options: [
        "Indole-3-acetic acid",
        "Zeatin",
        "Abscisic Acid",
        "Ethylene"
      ],
      correctOption: 2,
      explanation: "Abscisic Acid (ABA) acts as a direct antagonist to Gibberellins. While GA breaks dormancy and stimulates alpha-amylase synthesis for germination, ABA maintains seed dormancy.",
      difficulty: "Medium",
      conceptTested: "Hormone antagonism"
    }
  ],

  pyqs: [
    {
      id: "pyq-pgr-1",
      year: 2021,
      exam: "NEET UG",
      questionText: "The plant hormone used to destroy broad-leaved dicotyledonous weeds in cereal crop fields is:",
      options: [
        "IAA",
        "NAA",
        "2,4-D",
        "IBA"
      ],
      correctOption: 2,
      explanation: "2,4-D (2,4-Dichlorophenoxyacetic acid) is a synthetic auxin widely used as a selective herbicide to kill broad-leaved dicot weeds without affecting mature monocot cereal plants.",
      difficulty: "Easy",
      topicTested: "Selective herbicide 2,4-D",
      verified: true
    },
    {
      id: "pyq-pgr-2",
      year: 2020,
      exam: "NEET UG",
      questionText: "Which of the following is NOT an effect of Ethylene gas in plants?",
      options: [
        "Promotes female flowers in cucumbers",
        "Breaks seed and bud dormancy",
        "Induces stomatal closure during drought stress",
        "Promotes respiratory climacteric during fruit ripening"
      ],
      correctOption: 2,
      explanation: "Inducing stomatal closure during drought stress is the characteristic function of Abscisic Acid (ABA), not Ethylene.",
      difficulty: "Medium",
      topicTested: "Ethylene vs ABA functions",
      verified: true
    },
    {
      id: "pyq-pgr-3",
      year: 2019,
      exam: "NEET UG",
      questionText: "It takes very long for pineapple plants to produce flowers. Which combination of hormones can be applied to induce flowering throughout the year?",
      options: [
        "Auxin and Ethylene",
        "Gibberellin and Cytokinin",
        "Gibberellin and ABA",
        "Cytokinin and ABA"
      ],
      correctOption: 0,
      explanation: "Auxin and Ethylene are both known to promote and synchronize flowering in pineapple plants throughout the year.",
      difficulty: "Medium",
      topicTested: "Hormone applications in pineapple flowering",
      verified: true
    }
  ]
};
