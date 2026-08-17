import { DetailedTopicContent } from '../../types/neet';

export const humanRespiratorySystemDetails: DetailedTopicContent = {
  topicId: "human-respiratory-system",
  topicName: "Human Respiratory System & Mechanism of Breathing",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Breathing and Exchange of Gases",
  whatIsThisTopic: "Comprehensive anatomical breakdown of the human respiratory tract from nostrils to alveoli, structural specialization of the respiratory membrane, comparative animal respiratory organs, and the pressure-volume physics of inspiration and expiration.",
  
  basicIdea: [
    "Respiration vs Breathing: Breathing (ventilation) is the mechanical process of taking in O2-rich air and expelling CO2-rich air, whereas cellular respiration is the intracellular enzymatic breakdown of nutrient molecules (like glucose) to yield ATP, producing CO2 and water as metabolic byproducts.",
    "Need for Gaseous Exchange: Oxygen is continuously required by living cells for oxidative phosphorylation and ATP generation. Carbon dioxide generated during catabolism is toxic and causes blood acidosis, requiring continuous elimination.",
    "Anatomical Pathway: Air enters via External Nostrils → Nasal Chamber → Pharynx (Nasopharynx) → Larynx (Glottis) → Trachea → Primary Bronchi → Secondary Bronchi → Tertiary Bronchi → Initial Bronchioles → Terminal Bronchioles → Respiratory Bronchioles → Alveolar Ducts → Alveolar Sacs → Alveoli.",
    "Conducting vs Exchange Zone: Conducting part (nostrils to terminal bronchioles) filters, humidifies, and warms incoming air; Exchange part (alveoli and their ducts) is the actual site of simple gas diffusion across the respiratory membrane.",
    "Breathing Mechanics: Inspiration is an ACTIVE process driven by diaphragm contraction (expands AP axis) and external intercostal muscle contraction (expands DV axis), lowering intrapulmonary pressure below atmospheric pressure. Expiration is a PASSIVE process resulting from muscle relaxation and elastic recoil."
  ],

  importantTerms: [
    {
      term: "Breathing (Ventilation)",
      definition: "The physical, mechanical process of moving air into and out of the lungs to facilitate gaseous exchange with the external environment.",
      neetSignificance: "Differentiated from cellular respiration which is a chemical, intracellular process."
    },
    {
      term: "Incomplete Cartilaginous Rings",
      definition: "C-shaped hyaline cartilaginous structures that support the trachea, primary, secondary, tertiary bronchi, and initial bronchioles on their dorsal side to prevent airway collapse during low pressure.",
      neetSignificance: "Crucial NCERT fact: Cartilaginous rings extend up to INITIAL bronchioles and are ABSENT in terminal bronchioles and alveoli."
    },
    {
      term: "Epiglottis",
      definition: "A thin, flexible, leaf-shaped elastic cartilaginous flap that covers the glottis (laryngeal opening) during swallowing to prevent food/water entry into the windpipe.",
      neetSignificance: "Prevents choking and aspiration pneumonia; frequently asked in NCERT structural questions."
    },
    {
      term: "Respiratory Membrane",
      definition: "The ultra-thin (< 1 µm) three-layered diffusion barrier between alveolar air and capillary blood consisting of alveolar squamous epithelium, basement substance, and capillary endothelium.",
      neetSignificance: "Key NCERT structure determining diffusion efficiency; total surface area is ~70-100 m²."
    },
    {
      term: "Intrapulmonary Pressure",
      definition: "The air pressure within the alveolar spaces of the lungs. It drops below atmospheric pressure during inspiration and rises above it during expiration.",
      neetSignificance: "Drives bulk air movement along pressure gradients according to Boyle's Law."
    },
    {
      term: "Intrapleural Pressure",
      definition: "The sub-atmospheric (negative) fluid pressure present in the pleural cavity between the parietal and visceral pleura (approx -4 to -7 mmHg).",
      neetSignificance: "Prevents lung collapse (atelectasis) and maintains mechanical adhesion between lungs and thoracic wall."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Breathing vs Cellular Respiration & Need for Gaseous Exchange",
      paragraphs: [
        "In living organisms, cellular respiration is the metabolic process by which nutrient molecules such as glucose are broken down oxidatively inside cells to release chemical energy in the form of Adenosine Triphosphate (ATP). This catabolic process continuously consumes Oxygen (O2) and generates Carbon Dioxide (CO2), Hydrogen ions (H+), and water.",
        "Because accumulated CO2 forms carbonic acid in body fluids, leading to life-threatening respiratory acidosis, CO2 must be continuously expelled from the body. Breathing (or pulmonary ventilation) serves as the organismal mechanism that delivers fresh atmospheric O2 to the gas-exchange surfaces and removes metabolic CO2 from the internal environment.",
        "For efficient gas exchange, ideal respiratory surfaces across the animal kingdom share four essential structural characteristics: (1) Ultra-thin permeable wall to minimize diffusion distance, (2) Large surface area to maximize total diffusion volume, (3) Moist surface because respiratory gases diffuse only in dissolved form, and (4) Rich vascularity (dense capillary network) to maintain steep partial pressure gradients."
      ],
      tables: [
        {
          title: "Comparative Analysis: Breathing vs Cellular Respiration",
          headers: ["Parameter", "Breathing (External Respiration)", "Cellular Respiration (Internal)"],
          rows: [
            ["Nature of Process", "Physical / Mechanical process", "Biochemical / Enzymatic process"],
            ["Cellular Location", "Occurs outside cells (extracellular)", "Occurs inside cells (cytoplasm & mitochondria)"],
            ["Energy Dynamic", "No energy (ATP) released; consumes energy during active inspiration", "Releases energy trapped in respiratory substrates as ATP"],
            ["Enzyme Involvement", "Does not involve metabolic respiratory enzymes", "Requires specific intracellular dehydrogenases and decarboxylases"],
            ["Primary Function", "Exchange of O2 and CO2 between environment and blood", "Oxidative breakdown of glucose to generate ATP for cellular work"]
          ]
        }
      ],
      importantPoints: [
        "Oxygen is required for mitochondrial electron transport chain (final electron acceptor).",
        "CO2 toxicity stems from H+ ion generation: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-.",
        "Respiratory surfaces must remain moist because gases diffuse through liquid films before crossing cell membranes."
      ]
    },
    {
      heading: "2. Respiratory Organs Across Animal Phyla",
      paragraphs: [
        "Evolutionary adaptations across different animal phyla reflect structural complexity and habitat requirements. Lower invertebrates rely on simple diffusion across their general body surface, whereas complex terrestrial animals have evolved specialized internal pulmonary structures.",
        "Simple Invertebrates (Sponges, Coelenterates, Flatworms/Planaria) lack specialized respiratory organs and exchange O2 and CO2 by simple diffusion over their entire body surface.",
        "Cutaneous Respiration: Earthworms (Annelids) and amphibians (like Frogs during hibernation and aestivation) use their moist, vascularized skin (cuticle) for gas exchange.",
        "Tracheal System: Insects (like Cockroach), centipedes, and spiders possess an intricate network of air tubes called tracheae opening via small lateral pores called spiracles. Air diffuses directly through tracheoles to tissues without needing a pigment-bearing blood circulatory system.",
        "Branchial Respiration (Gills): Aquatic arthropods (prawns), molluscs, and fishes possess vascularized gills that extract dissolved oxygen from water using counter-current or cross-current flow.",
        "Pulmonary Respiration (Lungs): Terrestrial vertebrates—Reptiles, Birds, Mammals, and adult Amphibians (on land)—possess highly vascularized, enclosed spongy lungs."
      ],
      tables: [
        {
          title: "NCERT Summary of Animal Respiratory Organs",
          headers: ["Animal Group / Phylum", "Respiratory Organ", "Type of Respiration", "Key NCERT Example"],
          rows: [
            ["Sponges, Coelenterates, Flatworms", "General Body Surface", "Simple Diffusion", "Sycon, Hydra, Planaria"],
            ["Annelids (Earthworm, Leech)", "Moist Cuticle / Skin", "Cutaneous Respiration", "Pheretima (Earthworm)"],
            ["Insects, Arachnids", "Tracheal Tubes & Spiracles", "Tracheal Respiration", "Cockroach, Locust"],
            ["Aquatic Arthropods & Molluscs", "Gills (Branchia)", "Branchial Respiration", "Prawn, Unio, Pila"],
            ["Fishes", "Internal Vascular Gills", "Branchial Respiration", "Cartilaginous & Bony Fishes"],
            ["Amphibians (Frog)", "Moist Skin, Buccopharyngeal cavity, Lungs", "Cutaneous, Buccal & Pulmonary", "Rana tigrina"],
            ["Reptiles, Birds, Mammals", "Vascularized Spongy Lungs", "Pulmonary Respiration", "Lizard, Pigeon, Human"]
          ]
        }
      ]
    },
    {
      heading: "3. Human Respiratory System Anatomy — From Nostrils to Alveoli",
      paragraphs: [
        "The human respiratory tract begins at the pair of external nostrils (nares) situated above the upper lip. Air moves through the nasal vestibule into the nasal chamber.",
        "Nasal Chamber & Nasal Conchae: The nasal chamber is divided into right and left halves by a cartilaginous nasal septum. It contains three scroll-like bones (Superior, Middle, Inferior Nasal Conchae or Turbinates) lined by Pseudostratified Ciliated Columnar Epithelium rich in mucus-secreting goblet cells (Schneiderian membrane). This structure filters particulate dust, warms cold air to body temperature (37°C), and humidifies dry atmospheric air.",
        "Pharynx: The nasal chamber opens dorsally into the Pharynx. The pharynx is divided into Nasopharynx (air passage only), Oropharynx (common passage for food and air), and Laryngopharynx. The Eustachian tubes open into the nasopharynx to equalize air pressure across the tympanic membrane.",
        "Larynx (Voice Box): Located at the upper end of the trachea, the larynx is a cartilaginous box containing 9 cartilages (Thyroid, Cricoid, Epiglottis, and paired Arytenoid, Corniculate, Cuneiform). The opening into the larynx is called the Glottis. During deglutition (swallowing), a thin, elastic cartilaginous flap called the Epiglottis covers the glottis, preventing food or liquid entry into the respiratory tract.",
        "Trachea (Windpipe): A straight tube (~10-12 cm long) extending through the neck into the mid-thoracic cavity up to the level of the 5th Thoracic Vertebra (T5). It is supported internally by 16-20 incomplete, C-shaped Hyaline Cartilaginous Rings on its posterior side to prevent mechanical collapse during forced inspiration.",
        "Bronchial Tree Division: At the T5 vertebral level, the trachea bifurcates into Right and Left Primary Bronchi. Each primary bronchus enters its respective lung at the hilum and undergoes repeated branching: Primary Bronchi → Secondary (Lobar) Bronchi → Tertiary (Segmental) Bronchi → Initial Bronchioles → Terminal Bronchioles → Respiratory Bronchioles → Alveolar Ducts → Atria → Alveolar Sacs → Alveoli.",
        "Distribution of Cartilaginous Support: Incomplete C-shaped cartilaginous rings are present in the Trachea, Primary Bronchi, Secondary Bronchi, Tertiary Bronchi, and Initial Bronchioles. They are completely ABSENT in Terminal Bronchioles, Respiratory Bronchioles, Alveolar Ducts, and Alveoli!"
      ],
      importantPoints: [
        "Trachea divides at the level of 5th Thoracic Vertebra (T5).",
        "Right Primary Bronchus is wider, shorter (~2.5 cm), and more vertical than the Left (~5 cm). Consequently, inhaled foreign objects enter the right lung more frequently.",
        "Cartilaginous rings extend up to INITIAL bronchioles only.",
        "Larynx prominent in males is called Adam's Apple (formed by Thyroid cartilage)."
      ]
    },
    {
      heading: "4. Conducting Part vs Exchange Part of Respiratory System",
      paragraphs: [
        "Functionally, the human respiratory tract is divided into two distinct anatomical zones: the Conducting Part and the Respiratory / Exchange Part.",
        "Conducting Part: Extends from the External Nostrils up to the Terminal Bronchioles. It does NOT participate in actual gas exchange across blood vessels.",
        "Exchange Part: Consists of the Alveoli and their thin-walled alveolar ducts. This is the sole site where actual simple diffusion of O2 and CO2 occurs between atmospheric air and pulmonary capillary blood."
      ],
      tables: [
        {
          title: "Master Comparison: Conducting Zone vs Exchange Zone",
          headers: ["Feature", "Conducting Zone", "Exchange (Respiratory) Zone"],
          rows: [
            ["Anatomical Boundaries", "External nostrils to Terminal Bronchioles", "Respiratory Bronchioles, Alveolar Ducts, Alveoli"],
            ["Cartilaginous Support", "Present (Trachea to Initial Bronchioles)", "Completely Absent"],
            ["Epithelial Lining", "Pseudostratified Ciliated Columnar / Ciliated Cuboidal", "Simple Squamous Epithelium"],
            ["Primary Functions", "1. Transports air to alveoli\n2. Clears trapped dust/microbes\n3. Humidifies air\n4. Warms air to 37°C", "Actual simple diffusion of O2 and CO2 across the thin respiratory membrane"],
            ["Dead Space Volume", "Forms Anatomic Dead Space (~150 mL of air)", "Participates in active gas exchange (~350 mL per normal tidal breath)"]
          ]
        }
      ]
    },
    {
      heading: "5. Alveoli and the Respiratory Membrane (Diffusion Barrier)",
      paragraphs: [
        "Alveoli are tiny, cup-shaped, polyhedral vascular sacs forming the functional units of the lungs. Both human lungs together contain approximately 300 million alveoli, providing a massive total gas exchange surface area of 70 to 100 square meters.",
        "Structure of Alveolar Wall: The alveolar wall consists of two major epithelial cell types: (1) Type I Pneumocytes: Simple squamous epithelial cells covering ~95% of alveolar surface area, optimized for rapid gas diffusion. (2) Type II Pneumocytes: Cuboidal cells that secrete Pulmonary Surfactant (dipalmitoylphosphatidylcholine / lecithin), a phospholipid mixture that lowers alveolar surface tension, preventing alveolar collapse (atelectasis) during expiration.",
        "The Respiratory Membrane (Diffusion Barrier): Gas exchange between alveolar air and pulmonary capillary blood occurs across an extremely thin diffusion barrier whose total thickness is less than one micrometer (< 1 µm, typically 0.2–0.5 µm).",
        "The Respiratory Membrane consists of THREE distinct anatomical layers:",
        "1. Thin Squamous Epithelium of Alveoli (single cell layer).",
        "2. Endothelium of Pulmonary Capillaries (single layer of squamous endothelial cells).",
        "3. Basement Substance: A thin interstitial space filled with fused basement membranes of the alveolar epithelium and capillary endothelium."
      ],
      visuals: [
        {
          type: 'svg',
          svgContent: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto bg-slate-900 rounded-lg p-2">
            <!-- Background grid -->
            <rect width="600" height="320" fill="#0f172a" rx="8" />
            
            <!-- Title -->
            <text x="300" y="25" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">THE RESPIRATORY MEMBRANE (DIFFUSION BARRIER)</text>

            <!-- Alveolar Air Space -->
            <path d="M 40,50 Q 180,40 220,160 Q 180,280 40,270 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" />
            <text x="110" y="150" fill="#7dd3fc" font-size="14" font-weight="bold" text-anchor="middle">ALVEOLAR AIR SPACE</text>
            <text x="110" y="170" fill="#38bdf8" font-size="12" text-anchor="middle">(pO2 = 104 mmHg)</text>
            <text x="110" y="190" fill="#f43f5e" font-size="12" text-anchor="middle">(pCO2 = 40 mmHg)</text>

            <!-- Layer 1: Alveolar Epithelium -->
            <path d="M 220,60 C 250,100 250,220 220,260" fill="none" stroke="#f59e0b" stroke-width="8" />
            <text x="245" y="45" fill="#f59e0b" font-size="11" font-weight="bold">1. Alveolar Squamous Epithelium</text>

            <!-- Layer 2: Basement Substance -->
            <path d="M 235,60 C 265,100 265,220 235,260" fill="none" stroke="#94a3b8" stroke-width="5" />
            <text x="270" y="160" fill="#cbd5e1" font-size="11" font-weight="bold">2. Basement Substance</text>

            <!-- Layer 3: Capillary Endothelium -->
            <path d="M 250,60 C 280,100 280,220 250,260" fill="none" stroke="#e11d48" stroke-width="8" />
            <text x="275" y="280" fill="#f43f5e" font-size="11" font-weight="bold">3. Capillary Endothelium</text>

            <!-- Capillary Lumen -->
            <path d="M 260,50 Q 420,40 540,160 Q 420,280 260,270 Z" fill="#2d1218" stroke="#e11d48" stroke-width="2" />
            <text x="430" y="140" fill="#fda4af" font-size="14" font-weight="bold" text-anchor="middle">PULMONARY CAPILLARY BLOOD</text>
            <text x="430" y="160" fill="#38bdf8" font-size="12" text-anchor="middle">Deox: pO2 = 40 mmHg → Ox: pO2 = 95 mmHg</text>
            <text x="430" y="180" fill="#f43f5e" font-size="12" text-anchor="middle">Deox: pCO2 = 45 mmHg → Ox: pCO2 = 40 mmHg</text>

            <!-- Diffusion Arrows -->
            <!-- O2 Arrow (Alveolus to Blood) -->
            <line x1="160" y1="110" x2="330" y2="110" stroke="#38bdf8" stroke-width="4" marker-end="url(#arrowO2)" />
            <text x="235" y="100" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">O2 Diffusion Path</text>

            <!-- CO2 Arrow (Blood to Alveolus) -->
            <line x1="330" y1="210" x2="160" y2="210" stroke="#f43f5e" stroke-width="4" marker-end="url(#arrowCO2)" />
            <text x="235" y="230" fill="#f43f5e" font-size="13" font-weight="bold" text-anchor="middle">CO2 Diffusion Path</text>

            <!-- Arrow Markers -->
            <defs>
              <marker id="arrowO2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
              <marker id="arrowCO2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
              </marker>
            </defs>
          </svg>`,
          caption: "Figure 14.1: Structural composition of the 3-layered Respiratory Membrane across which O2 and CO2 diffuse down partial pressure gradients.",
          guide: "WHAT TO OBSERVE: Note the 3 distinct layers forming the barrier: Alveolar Squamous Epithelium (orange), Basement Substance (grey), and Capillary Endothelium (pink). Total thickness is < 1 µm. Observe O2 moving from Alveolar Space (pO2 = 104 mmHg) into Blood (pO2 = 40 mmHg), while CO2 moves from Blood (pCO2 = 45 mmHg) into Alveolar Space (pCO2 = 40 mmHg)."
        }
      ],
      importantPoints: [
        "Thickness of the respiratory membrane is LESS THAN 1 mm (0.2 - 0.5 µm).",
        "It consists of 3 layers: Alveolar Squamous Epithelium + Basement Substance + Capillary Endothelium.",
        "CO2 solubility is 20-25 times higher than O2, enabling rapid CO2 transfer despite a smaller partial pressure difference (45 - 40 = 5 mmHg vs 104 - 40 = 64 mmHg for O2)."
      ]
    },
    {
      heading: "6. Lungs, Pleura & Thoracic Cage Architecture",
      paragraphs: [
        "The human lungs are a pair of soft, spongy, highly elastic vascular organs situated in the airtight Thoracic Chamber. The right lung is broader and heavier (~625 g) with 3 lobes (Superior, Middle, Inferior) separated by Horizontal and Oblique Fissures. The left lung is narrower (~565 g) with 2 lobes (Superior, Inferior) separated by an Oblique Fissure and features a medial indentation called the Cardiac Notch for the heart.",
        "Pleural Membranes & Pleural Fluid: Each lung is enclosed by a double-layered serous membrane called the Pleura. The outer Parietal Pleura lines the thoracic wall and diaphragm, while the inner Visceral Pleura adheres tightly to the surface of the lung. The narrow Pleural Cavity between these layers contains a film of Pleural Fluid that lubricates pleural surfaces, reduces friction during lung inflation/deflation, and creates negative intrapleural pressure that keeps the lungs inflated.",
        "Airtight Thoracic Cage: The thoracic cavity is anatomically framed to form an airtight chamber:",
        "• Dorsally: Vertebral Column (Thoracic Vertebrae T1–T12).",
        "• Ventrally: Sternum (Breastbone).",
        "• Laterally: 12 pairs of Ribs and Intercostal Muscles.",
        "• Inferiorly: Dome-shaped Muscular Diaphragm.",
        "Anatomical Significance of Airtight Chamber: Because the lungs are non-muscular elastic structures, they cannot inflate or deflate independently. Any volume change in the airtight thoracic cavity is directly transmitted to the pulmonary cavity. Thus, contraction of respiratory muscles alters thoracic volume, which passively changes pulmonary volume and drives air movement."
      ]
    },
    {
      heading: "7. Mechanism of Breathing — Physics of Inspiration and Expiration",
      paragraphs: [
        "Pulmonary ventilation consists of two phases: Inspiration (taking in atmospheric air) and Expiration (releasing alveolar air). Air flow is governed by pressure gradients established between the atmosphere and the intrapulmonary cavity according to Boyle's Law ($P \\propto 1/V$).",
        "INSPIRATION (Active Process — Duration ~2 seconds):",
        "1. Neural impulses from the Medullary Respiratory Rhythm Centre stimulate contraction of the Diaphragm via phrenic nerves. The dome-shaped diaphragm flattens downward toward the abdomen. This increases thoracic cavity volume along the ANTERO-POSTERIOR (AP) Axis.",
        "2. Simultaneously, contraction of the External Intercostal Muscles (EIM) lifts the ribs and sternum upward and outward. This increases thoracic cavity volume along the DORSO-VENTRAL (DV) Axis.",
        "3. Combined expansion increases total thoracic volume → expands pulmonary volume → Intrapulmonary (Alveolar) Pressure drops below atmospheric pressure (757 to 759 mmHg, i.e., -1 to -3 mmHg relative to 760 mmHg).",
        "4. Atmospheric air flows rapidly through conducting airways into alveoli until intrapulmonary pressure equals atmospheric pressure.",
        "EXPIRATION (Passive Process under resting conditions — Duration ~3 seconds):",
        "1. Relaxation of the Diaphragm allows it to return to its original dome-shaped position, decreasing thoracic volume along the AP axis.",
        "2. Relaxation of the External Intercostal Muscles allows the ribs and sternum to return to their original resting positions, decreasing thoracic volume along the DV axis.",
        "3. Reduction in thoracic volume compresses pulmonary cavity → Pulmonary volume decreases → Intrapulmonary Pressure rises above atmospheric pressure (761 to 763 mmHg, i.e., +1 to +3 mmHg relative to 760 mmHg).",
        "4. Alveolar air is expelled forcefully out into the atmosphere.",
        "FORCED BREATHING (Active Expiration): During vigorous exercise or coughing, expiration becomes active. Contraction of Abdominal Muscles pushes abdominal viscera upward against the diaphragm, while Internal Intercostal Muscles (IIM) contract to actively depress the ribcage, rapidly increasing intrapulmonary pressure."
      ],
      tables: [
        {
          title: "Master Comparison: Inspiration vs Expiration",
          headers: ["Feature", "Inspiration (Inhalation)", "Expiration (Exhalation)"],
          rows: [
            ["Process Nature", "Active process (requires ATP for muscle contraction)", "Passive process under normal resting conditions (elastic recoil)"],
            ["Diaphragm Status", "Contracts and flattens downward", "Relaxes and arches upward into dome shape"],
            ["Antero-Posterior Thoracic Axis", "Volume INCREASES along AP axis", "Volume DECREASES along AP axis"],
            ["External Intercostal Muscles", "Contract, lifting ribs and sternum upward & outward", "Relax, lowering ribs and sternum downward & inward"],
            ["Dorso-Ventral Thoracic Axis", "Volume INCREASES along DV axis", "Volume DECREASES along DV axis"],
            ["Pulmonary Volume", "Increases as lungs expand passively", "Decreases as lungs recoil passively"],
            ["Intrapulmonary Pressure", "Drops BELOW atmospheric (~757-759 mmHg)", "Rises ABOVE atmospheric (~761-763 mmHg)"],
            ["Air Flow Direction", "Atmosphere → Into Lungs / Alveoli", "Lungs / Alveoli → Out into Atmosphere"],
            ["Duration at Rest", "~2 seconds", "~3 seconds"]
          ]
        }
      ]
    }
  ],

  formulae: [
    {
      title: "Intrapulmonary Pressure Differential during Inspiration",
      formula: "P_{\\text{pulmonary}} = P_{\\text{atm}} - (1 \\text{ to } 3 \\text{ mmHg}) = 757 - 759 \\text{ mmHg}",
      description: "Negative pressure gradient relative to atmosphere that causes air influx during active inspiration.",
      variables: "P_atm = Standard atmospheric pressure at sea level (760 mmHg), P_pulmonary = Alveolar/intrapulmonary pressure inside lungs"
    },
    {
      title: "Intrapulmonary Pressure Differential during Expiration",
      formula: "P_{\\text{pulmonary}} = P_{\\text{atm}} + (1 \\text{ to } 3 \\text{ mmHg}) = 761 - 763 \\text{ mmHg}",
      description: "Positive pressure gradient relative to atmosphere that drives air outflow during passive expiration."
    }
  ],

  visualLearning: {
    type: 'flowchart',
    flowchartSteps: [
      { step: "1. Rhythm Centre Signal", detail: "Medulla sends nerve impulses via phrenic and intercostal nerves." },
      { step: "2. Muscle Contraction", detail: "Diaphragm flattens (AP expansion) & External Intercostals contract (DV expansion)." },
      { step: "3. Thoracic Volume Expands", detail: "Airtight thoracic chamber volume increases." },
      { step: "4. Intrapulmonary Pressure Drops", detail: "Alveolar pressure falls to 757-759 mmHg (< 760 mmHg atmospheric)." },
      { step: "5. Air Influx (Inspiration)", detail: "Atmospheric air rushes into lungs until pressures equalize." },
      { step: "6. Muscle Relaxation", detail: "Diaphragm domes & ribs return down (Passive Expiration)." }
    ],
    caption: "Sequence of mechanical and physical events governing pulmonary ventilation during breathing cycles."
  },

  neetImportantPoints: [
    "🔥 Trachea bifurcates into primary bronchi at the level of the 5th Thoracic Vertebra (T5).",
    "🔥 Diaphragm contraction increases thoracic volume along the ANTERO-POSTERIOR axis.",
    "🔥 External Intercostal muscle contraction increases thoracic volume along the DORSO-VENTRAL axis.",
    "🔥 Normal expiration is a PASSIVE process driven by elastic recoil of lungs and relaxation of respiratory muscles.",
    "🔥 Incomplete C-shaped cartilaginous rings support trachea up to INITIAL bronchioles (absent in terminal bronchioles and alveoli).",
    "🔥 The Respiratory Membrane consists of 3 layers with total thickness < 1 µm (0.2 - 0.5 µm).",
    "🔥 CO2 solubility in plasma is 20-25 times higher than O2 solubility."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing AP and DV axis volume changes during diaphragm vs intercostal muscle contraction.",
      correctFact: "Diaphragm contraction flattens it down, expanding the ANTERO-POSTORIOR axis. External intercostal contraction lifts the ribcage up/out, expanding the DORSO-VENTRAL axis.",
      whyItMattersForNEET: "High-frequency NEET Assertion-Reason and Statement matching questions test this exact distinction."
    },
    {
      commonConfusion: "Believing that cartilaginous rings extend all the way to terminal bronchioles and alveoli.",
      correctFact: "Incomplete cartilaginous rings extend ONLY up to INITIAL bronchioles. Terminal bronchioles, respiratory bronchioles, and alveoli lack cartilaginous support.",
      whyItMattersForNEET: "Direct NCERT line question in NEET Biology."
    },
    {
      commonConfusion: "Thinking normal expiration is an active process requiring muscle contraction.",
      correctFact: "Normal restful expiration is completely PASSIVE due to muscle relaxation and elastic recoil of lungs. Muscle contraction (Internal Intercostals & Abdominals) occurs only during FORCED expiration.",
      whyItMattersForNEET: "Key physiological concept frequently tested in NEET mechanism questions."
    }
  ],

  quickRevision: [
    "Respiration = ATP generation inside cell; Breathing = Ventilation of lungs.",
    "Trachea divides at T5 vertebra; C-shaped hyaline rings present up to initial bronchioles.",
    "Conducting zone = Nostrils to Terminal Bronchioles; Exchange zone = Alveoli & ducts.",
    "Respiratory membrane = 3 layers (Alveolar epithelium + Basement substance + Capillary endothelium), thickness < 1 µm.",
    "Diaphragm = AP axis volume increase; External Intercostals = DV axis volume increase.",
    "Inspiration = Active (Intrapulmonary P < Atm P); Expiration = Passive (Intrapulmonary P > Atm P)."
  ],

  practiceQuestions: [
    {
      id: "prac-resp-1",
      question: "Which of the following statements correctly describes the anatomical level of tracheal bifurcation and the extent of incomplete cartilaginous rings in the human respiratory system?",
      options: [
        "Trachea bifurcates at 3rd cervical vertebra; rings extend up to terminal bronchioles.",
        "Trachea bifurcates at 5th thoracic vertebra; rings extend up to initial bronchioles.",
        "Trachea bifurcates at 5th thoracic vertebra; rings extend up to alveolar ducts.",
        "Trachea bifurcates at 7th thoracic vertebra; rings extend up to terminal bronchioles."
      ],
      correctAnswerIndex: 1,
      explanation: "According to NCERT Class 11, the trachea is a straight tube extending up to the mid-thoracic cavity, which divides at the level of the 5th thoracic vertebra (T5) into right and left primary bronchi. Incomplete C-shaped cartilaginous rings support the trachea, primary, secondary, tertiary bronchi, and initial bronchioles, but are absent in terminal bronchioles and alveoli.",
      conceptTested: "Tracheal anatomy and cartilaginous ring distribution (NCERT Direct Fact)"
    },
    {
      id: "prac-resp-2",
      question: "NEET-Style Practice Question — NOT A PYQ: During inspiration in humans, contraction of the diaphragm and external intercostal muscles increases thoracic volume along which respective anatomical axes?",
      options: [
        "Diaphragm: Dorso-ventral axis; External intercostals: Antero-posterior axis",
        "Diaphragm: Antero-posterior axis; External intercostals: Dorso-ventral axis",
        "Diaphragm: Transverse axis; External intercostals: Antero-posterior axis",
        "Both muscles increase thoracic volume exclusively along the dorso-ventral axis"
      ],
      correctAnswerIndex: 1,
      explanation: "Contraction of the diaphragm moves it downward, increasing thoracic volume along the antero-posterior (AP) axis. Contraction of external intercostal muscles lifts the ribs and sternum upward and outward, increasing thoracic volume along the dorso-ventral (DV) axis.",
      conceptTested: "Mechanics of pulmonary ventilation and anatomical axes of volume expansion"
    }
  ],

  pyqs: [
    {
      id: "pyq-resp-2019",
      year: 2019,
      exam: "NEET UG",
      question: "Tidal Volume and Expiratory Reserve Volume of an athlete is 500 mL and 1000 mL respectively. What will be his Expiratory Capacity if the Residual Volume is 1200 mL?",
      options: [
        "1500 mL",
        "1700 mL",
        "2200 mL",
        "2700 mL"
      ],
      correctAnswerIndex: 0,
      explanation: "Expiratory Capacity (EC) is the total volume of air a person can expire after a normal inspiration. EC = Tidal Volume (TV) + Expiratory Reserve Volume (ERV) = 500 mL + 1000 mL = 1500 mL. Note that Residual Volume (RV = 1200 mL) is not included in Expiratory Capacity.",
      conceptTested: "Calculation of lung capacities from respiratory volumes",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Question Paper"
    },
    {
      id: "pyq-resp-2022",
      year: 2022,
      exam: "NEET UG",
      question: "Under normal physiological conditions in human, every 100 mL of oxygenated blood can deliver how much amount of O2 to the tissues?",
      options: [
        "5 mL",
        "4 mL",
        "10 mL",
        "20 mL"
      ],
      correctAnswerIndex: 0,
      explanation: "According to NCERT Class 11 Biology Chapter 14, every 100 mL of oxygenated blood carries about 20 mL of O2 and delivers approximately 5 mL of O2 to the tissues under normal resting physiological conditions. (In comparison, 100 mL of deoxygenated blood delivers 4 mL of CO2 to the alveoli).",
      conceptTested: "Quantitative gas delivery by blood to tissues",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2022 Official Question Paper"
    }
  ],

  neetMarksPotential: {
    averageQuestionsPerYear: 2,
    scoreWeightage: "8 Marks",
    difficultyRating: "Medium",
    highYieldStatus: true
  }
};
