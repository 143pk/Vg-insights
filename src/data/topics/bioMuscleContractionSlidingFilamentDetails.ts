import { DetailedTopicContent } from '../../types/neet';

export const bioMuscleContractionSlidingFilamentDetails: DetailedTopicContent = {
  topicId: "bio-muscle-contraction-sliding-filament",
  topicName: "Skeletal Muscle & Sliding Filament Theory",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Locomotion and Movement",

  whatIsThisTopic: "Comprehensive physiological, anatomical, and molecular breakdown of movement vs. locomotion, types of animal movement (amoeboid, ciliary, flagellar, muscular), muscular tissue properties, structural types of muscle tissues (skeletal, smooth, cardiac), skeletal muscle hierarchical organization, micro-anatomy of muscle fibres and myofibrils, sarcomere architecture, actin and myosin molecular structure, sliding filament theory, complete 18-step excitation-contraction coupling sequence, role of calcium and ATP, cross-bridge cycle, neuromuscular junction, and muscle relaxation mechanism.",

  basicIdea: [
    "Movement is a fundamental feature of all living organisms ranging from protoplasmic streaming in unicellular Amoeba to limb movement in humans. Locomotion is a voluntary movement that results in a change of place or location.",
    "All locomotions are movements, but all movements are not locomotions (e.g., beating of heart, peristalsis, blinking of eyes, jaw movement).",
    "Three primary types of cellular movement occur in human body: Amoeboid (macrophages, leucocytes via pseudopodia/microfilaments), Ciliary (ciliated epithelium in trachea and oviducts), and Muscular (limbs, jaws, tongue via muscle contraction). Flagellar movement occurs in spermatozoa swimming.",
    "Muscle tissue is of mesodermal origin, constituting 40–50% of adult body weight, possessing four core properties: Excitability, Contractility, Extensibility, and Elasticity.",
    "Muscles are classified into three types: Skeletal (striated, voluntary, multinucleated/syncytial, unbranched), Smooth (non-striated/visceral, involuntary, uninucleate, spindle-shaped/fusiform), and Cardiac (striated, involuntary, branched, uninucleate, with intercalated discs).",
    "Skeletal muscle hierarchy: Gross Muscle (wrapped in epimysium) -> Muscle Fascicles (wrapped in perimysium/fascia) -> Muscle Fibres/Cells (wrapped in endomysium) -> Myofibrils -> Sarcomere -> Myofilaments (Actin & Myosin).",
    "The Sarcomere is the functional unit of muscle contraction, defined as the region between two adjacent Z-lines. It consists of a central dark A-band (myosin filaments) and two half light I-bands (actin filaments).",
    "Thin filament (Actin) is composed of two helical F-actin polymers of G-actin monomers, wrapped by two tropomyosin strands and troponin complex units (TnT, TnI, TnC).",
    "Thick filament (Myosin) is a polymer of meromyosin monomers, each having a Heavy Meromyosin (HMM) globular head with ATP-binding site and actin-binding site + cross arm, and a Light Meromyosin (LMM) tail.",
    "Sliding Filament Theory states that muscle contraction occurs when thin (actin) filaments slide past thick (myosin) filaments toward the center of the sarcomere (M-line), shortening the I-band and H-zone while the A-band length remains strictly unchanged.",
    "Excitation-contraction coupling involves 18 precise steps: Motor neuron ACh release -> Sarcolemma/T-tubule depolarization -> SR Ca²⁺ release -> Ca²⁺ binding to Troponin C -> Tropomyosin shift unmasking actin sites -> Myosin head cross-bridge formation -> Power stroke (ADP+Pi release) -> ATP binding & detachment -> ATP hydrolysis re-cocking myosin head -> SERCA Ca²⁺ reuptake -> Muscle relaxation."
  ],

  importantTerms: [
    {
      term: "Locomotion vs Movement",
      definition: "Movement is any change in posture or position of a body part without necessarily changing the location of the whole organism. Locomotion is voluntary movement that results in a change of place or location (e.g., walking, running, flying, swimming).",
      neetNote: "NEERT Axiom: 'All locomotions are movements, but all movements are not locomotions.'"
    },
    {
      term: "Diapedesis",
      definition: "The amoeboid squeezing movement of leucocytes (neutrophils and macrophages) through intact capillary walls into tissues to reach sites of infection.",
      neetNote: "Driven by pseudopodia formation via actin microfilament cytoskeletal reorganization."
    },
    {
      term: "Syncytium",
      definition: "A single multinucleated cell formed by the fusion of multiple individual cells during development. A skeletal muscle fibre is a syncytium because its sarcoplasm contains multiple peripheral nuclei.",
      neetNote: "Formed by embryonic fusion of myoblasts; contrast with cardiac muscle which is functionally syncytial via intercalated discs."
    },
    {
      term: "Sarcomere",
      definition: "The functional structural unit of a myofibril in striated muscle, bounded by two successive Z-lines, comprising one full A-band and two adjacent half I-bands.",
      neetNote: "NCERT core concept: Shortens during contraction as Z-lines are pulled closer."
    },
    {
      term: "Fascia",
      definition: "A collagenous connective tissue layer that binds together multiple muscle fascicles (bundles) into a functional skeletal muscle.",
      neetNote: "Skeletal muscle bundles/fascicles are held together by a common collagenous connective tissue layer called fascia."
    },
    {
      term: "Troponin Complex",
      definition: "A trimeric regulatory protein complex (TnT, TnI, TnC) distributed at regular intervals along tropomyosin strands on thin actin filaments.",
      neetNote: "TnC binds Ca²⁺, TnI inhibits actin-myosin interaction, TnT binds troponin to tropomyosin."
    },
    {
      term: "Meromyosin",
      definition: "The monomeric protein subunit of thick myosin filaments, consisting of Heavy Meromyosin (HMM - head and short arm) and Light Meromyosin (LMM - tail).",
      neetNote: "Myosin head possesses active ATPase enzyme and binding sites for ATP and actin."
    },
    {
      term: "Power Stroke",
      definition: "The mechanical pivoting action of the myosin head ($45^\circ$ angle shift) after binding actin, pulling the thin filament toward the center of the sarcomere (M-line), accompanied by the release of ADP and inorganic phosphate ($P_i$).",
      neetNote: "Generates force and shortens the sarcomere during contraction."
    },
    {
      term: "Rigidity / Rigor Mortis",
      definition: "State of sustained muscular stiffness after death caused by complete depletion of ATP, preventing detachment of myosin heads from actin filaments.",
      neetNote: "Demonstrates that ATP binding is required for cross-bridge detachment and muscle relaxation."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Biological Movement vs. Locomotion & Types of Movements",
      paragraphs: [
        "Movement is one of the most prominent features of living organisms. Animals and plants exhibit a wide range of movements. From microscopic streaming of protoplasm in single-celled Amoeba to complex locomotion in mammals, movement is essential for survival, nutrition, defence, and reproduction.",
        "It is crucial to distinguish between Movement and Locomotion. Movement refers to any change in position of any part of the organism's body (e.g., movement of eyelids, tongue, jaws, heart beating, streaming of cytoplasm). Locomotion refers specifically to voluntary movement resulting in a change in total body location or place (e.g., walking, running, climbing, swimming, flying).",
        "Thus, all locomotions are movements, but all movements are NOT locomotions. For example, when a human stands in one place and waves their hand or chews food, movement occurs without locomotion. When the same human walks across a room, both movement and locomotion occur simultaneously.",
        "Cells of the human body exhibit three main types of movements: Amoeboid movement, Ciliary movement, and Muscular movement. A fourth type, Flagellar movement, is seen in specialized human cells."
      ],
      tables: [
        {
          title: "Comprehensive Matrix of Types of Cellular Movements",
          headers: ["Type of Movement", "Cellular Mechanism & Structures", "Human & Animal Examples", "NEET High-Yield Relevance"],
          rows: [
            ["Amoeboid Movement", "Pseudopodia formed by streaming of protoplasm; driven by actin microfilament cytoskeleton reorganization.", "Macrophages and Neutrophils (leucocytes) in blood during diapedesis; Amoeba proteus.", "Enables immune cells to migrate out of blood capillaries into infected tissue spaces."],
            ["Ciliary Movement", "Rhythmic, coordinated beating of hair-like cilia lining epithelial surfaces.", "Ciliated epithelium of respiratory tract (tracheal mucosa removing dust/mucus); Fallopian tubes (oviducts moving ovum/zygote).", "Prevents foreign particulate entry into lungs and propels non-motile female gametes."],
            ["Flagellar Movement", "Whip-like undulation of single long flagellum powered by microtubule axoneme (9+2 arrangement).", "Human spermatozoa swimming in female reproductive tract; Choanocytes in sponges; Euglena locomotion.", "Essential for male gamete motility and fertilization in sexual reproduction."],
            ["Muscular Movement", "Forceful contraction and relaxation of specialized muscular tissue attached to skeletal framework.", "Limb movement, jaw mastication, tongue movement, heart pumping, gastrointestinal peristalsis.", "Requires coordinated activity of muscular, skeletal, and neural systems."]
          ]
        }
      ],
      importantPoints: [
        "Protoplasmic streaming (cyclosis) in Amoeba is a simple form of amoeboid movement.",
        "Flagellar movement in sponges maintains the water canal system current inside spongocoel.",
        "Locomotion requires perfect coordination between Muscular, Skeletal, and Neural systems."
      ]
    },
    {
      heading: "2. Muscular Tissue Properties & Comparative Histology of Muscle Types",
      paragraphs: [
        "Muscle is a specialized tissue of mesodermal origin. About 40–50 per cent of the total body weight of a human adult is contributed by muscles. Muscles possess four fundamental physiological properties that enable them to generate movement:",
        "1. Excitability: The capacity to receive and respond to neural or chemical stimuli by generating electrical action potentials across sarcolemma.",
        "2. Contractility: The ability to shorten forcefully when adequately stimulated, generating mechanical force.",
        "3. Extensibility: The capacity to be stretched beyond resting length without tearing or suffering structural damage.",
        "4. Elasticity: The ability to recoil back to its original resting length and shape after being stretched or contracted.",
        "Based on location, microscopic appearance (striated or non-striated), and mode of neural control (voluntary or involuntary), muscles are categorized into three distinct types: Skeletal Muscle, Smooth (Visceral) Muscle, and Cardiac Muscle."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="2"/>
          <text x="375" y="28" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Histological Comparison of Muscle Types (Skeletal vs Smooth vs Cardiac)</text>
          
          <!-- Skeletal Muscle Panel -->
          <g transform="translate(25, 50)">
            <rect width="215" height="240" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="107" y="24" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="middle">Skeletal Muscle</text>
            <!-- Fibres -->
            <rect x="25" y="45" width="165" height="28" fill="#fecdd3" stroke="#e11d48" stroke-width="1.5" rx="4"/>
            <line x1="45" y1="45" x2="45" y2="73" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="75" y1="45" x2="75" y2="73" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="105" y1="45" x2="105" y2="73" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="135" y1="45" x2="135" y2="73" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="165" y1="45" x2="165" y2="73" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <circle cx="35" cy="50" r="4" fill="#881337"/>
            <circle cx="155" cy="68" r="4" fill="#881337"/>

            <rect x="25" y="85" width="165" height="28" fill="#fecdd3" stroke="#e11d48" stroke-width="1.5" rx="4"/>
            <line x1="45" y1="85" x2="45" y2="113" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="75" y1="85" x2="75" y2="113" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="105" y1="85" x2="105" y2="113" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="135" y1="85" x2="135" y2="113" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <line x1="165" y1="85" x2="165" y2="113" stroke="#9f1239" stroke-width="1" stroke-dasharray="2,2"/>
            <circle cx="55" cy="90" r="4" fill="#881337"/>
            <circle cx="140" cy="108" r="4" fill="#881337"/>

            <text x="107" y="140" fill="#475569" font-size="11" text-anchor="middle">• Long, Cylindrical, Unbranched</text>
            <text x="107" y="158" fill="#475569" font-size="11" text-anchor="middle">• Prominent Dark/Light Striations</text>
            <text x="107" y="176" fill="#475569" font-size="11" text-anchor="middle">• Syncytial (Multinucleated)</text>
            <text x="107" y="194" fill="#475569" font-size="11" text-anchor="middle">• Peripheral Nuclei</text>
            <text x="107" y="212" fill="#0284c7" font-size="11" font-weight="bold" text-anchor="middle">Voluntary (Somatic CNS)</text>
          </g>

          <!-- Smooth Muscle Panel -->
          <g transform="translate(265, 50)">
            <rect width="215" height="240" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="107" y="24" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="middle">Smooth (Visceral) Muscle</text>
            <!-- Spindle Fibres -->
            <path d="M 30,55 Q 107,35 185,55 Q 107,75 30,55 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="107" cy="55" r="5" fill="#14532d"/>

            <path d="M 30,95 Q 107,75 185,95 Q 107,115 30,95 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
            <circle cx="107" cy="95" r="5" fill="#14532d"/>

            <text x="107" y="140" fill="#475569" font-size="11" text-anchor="middle">• Fusiform (Spindle-shaped)</text>
            <text x="107" y="158" fill="#475569" font-size="11" text-anchor="middle">• Tapered Ends, Unbranched</text>
            <text x="107" y="176" fill="#475569" font-size="11" text-anchor="middle">• Non-striated (Smooth)</text>
            <text x="107" y="194" fill="#475569" font-size="11" text-anchor="middle">• Uninucleate, Central Nucleus</text>
            <text x="107" y="212" fill="#d97706" font-size="11" font-weight="bold" text-anchor="middle">Involuntary (Autonomic ANS)</text>
          </g>

          <!-- Cardiac Muscle Panel -->
          <g transform="translate(505, 50)">
            <rect width="215" height="240" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="107" y="24" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="middle">Cardiac Muscle</text>
            <!-- Branched Fibres -->
            <path d="M 25,45 H 185 V 68 H 120 L 100,85 H 185 V 108 H 25 V 85 H 80 L 100,68 H 25 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
            <!-- Intercalated Discs -->
            <line x1="80" y1="45" x2="80" y2="68" stroke="#0369a1" stroke-width="3.5"/>
            <line x1="140" y1="85" x2="140" y2="108" stroke="#0369a1" stroke-width="3.5"/>
            <circle cx="55" cy="56" r="4.5" fill="#0c4a6e"/>
            <circle cx="150" cy="96" r="4.5" fill="#0c4a6e"/>

            <text x="107" y="140" fill="#475569" font-size="11" text-anchor="middle">• Cylindrical, Branched Fibres</text>
            <text x="107" y="158" fill="#475569" font-size="11" text-anchor="middle">• Faint Striations Present</text>
            <text x="107" y="176" fill="#475569" font-size="11" text-anchor="middle">• Intercalated Discs (Gap Junctions)</text>
            <text x="107" y="194" fill="#475569" font-size="11" text-anchor="middle">• Uninucleate, Central Nucleus</text>
            <text x="107" y="212" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">Involuntary & Myogenic Rhythm</text>
          </g>
        </svg>`,
        caption: "Histological features, cell shape, nucleation pattern, striations, and neural control of Skeletal, Smooth, and Cardiac muscle tissues.",
        guide: "WHAT TO OBSERVE: Note the peripheral multinucleated pattern and parallel cylindrical shape in skeletal muscle; the spindle shape with single central nucleus in smooth muscle; and the branching pattern with dark intercalated discs in cardiac muscle."
      },
      tables: [
        {
          title: "Detailed Comparison Table of Muscle Types (Skeletal vs Smooth vs Cardiac)",
          headers: ["Feature / Property", "Skeletal Muscle", "Smooth (Visceral) Muscle", "Cardiac Muscle"],
          rows: [
            ["Primary Location", "Attached to bones (e.g. limbs, trunk, face, jaw).", "Walls of hollow internal visceral organs (stomach, intestine, blood vessels, urinary bladder, reproductive tract).", "Myocardium of heart wall."],
            ["Cell Shape", "Long, cylindrical, unbranched.", "Spindle-shaped (fusiform) with pointed/tapered ends.", "Short, cylindrical, branched network."],
            ["Striations (Bands)", "Present (distinct dark A-bands and light I-bands).", "Absent (non-striated / smooth appearance).", "Present (faint cross-striations)."],
            ["Nucleation", "Multinucleated (syncytium) with peripheral nuclei beneath sarcolemma.", "Uninucleate with single centrally placed oval nucleus.", "Uninucleate with single central nucleus."],
            ["Control Mechanism", "Voluntary (controlled by Somatic Nervous System).", "Involuntary (controlled by Autonomic Nervous System & hormones).", "Involuntary (myogenic self-excitation modulated by ANS)."],
            ["Special Structures", "T-tubules, well-developed Sarcoplasmic Reticulum triad.", "Caveolae, dense bodies (acting like Z-discs), poorly developed SR.", "Intercalated discs (desmosomes + gap junctions for electrical syncytium)."],
            ["Rate of Contraction", "Fastest contraction speed.", "Slowest, sustained, tonic contraction.", "Intermediate speed, rhythmic contractions."],
            ["Fatigue Resistance", "Fatogues quickly due to lactic acid accumulation.", "Highly resistant to fatigue; can stay contracted.", "Completely fatigue-resistant due to high myoglobin & abundant mitochondria."]
          ]
        }
      ],
      importantPoints: [
        "Intercalated discs in cardiac muscle contain desmosomes (mechanical adhesion) and gap junctions (electrical coupling).",
        "Smooth muscle contains non-striated filaments anchored to dense bodies.",
        "Skeletal muscle is the ONLY muscle under voluntary somatic conscious control."
      ]
    },
    {
      heading: "3. Structural Organization & Hierarchy of Skeletal Muscle",
      paragraphs: [
        "Each organized skeletal muscle in our body (such as biceps, triceps, or gastrocnemius) is made of a complex hierarchical structure consisting of multiple nested layers of connective tissues and contractile units.",
        "1. Muscle (Gross Organ): Wrapped externally by a tough collagenous sheath called Epimysium.",
        "2. Muscle Fascicles (Bundles): Inside the muscle, muscle fibres are arranged in distinct bundles called fascicles. Each fascicle is surrounded by a connective tissue layer called Perimysium. Multiple fascicles are bound together by a common collagenous connective tissue layer known as Fascia.",
        "3. Muscle Fibre (Cell): Each fascicle contains a large number of parallel elongated cells called Muscle Fibres. Each muscle fibre is wrapped individually by a thin delicate connective tissue sheath called Endomysium.",
        "4. Myofibrils: Each muscle fibre contains hundreds to thousands of parallel longitudinal rod-like structures running along its length called Myofibrils (or myofilaments).",
        "5. Sarcomere: Each myofibril displays repeating functional contractile units called Sarcomeres, bounded by Z-lines."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="2"/>
          <text x="375" y="28" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Hierarchical Organization of Skeletal Muscle Structure</text>
          
          <!-- Gross Muscle -->
          <g transform="translate(30, 60)">
            <rect width="130" height="200" fill="#ffe4e6" stroke="#f43f5e" stroke-width="2" rx="10"/>
            <text x="65" y="25" fill="#9f1239" font-size="13" font-weight="bold" text-anchor="middle">Skeletal Muscle</text>
            <text x="65" y="42" fill="#be123c" font-size="10" text-anchor="middle">(Epimysium Cover)</text>
            <!-- Fascicles inside -->
            <circle cx="45" cy="80" r="18" fill="#fecdd3" stroke="#e11d48"/>
            <circle cx="85" cy="80" r="18" fill="#fecdd3" stroke="#e11d48"/>
            <circle cx="45" cy="130" r="18" fill="#fecdd3" stroke="#e11d48"/>
            <circle cx="85" cy="130" r="18" fill="#fecdd3" stroke="#e11d48"/>
            <text x="65" y="175" fill="#475569" font-size="10" text-anchor="middle">Fascia Collagen</text>
          </g>

          <path d="M 165,130 L 210,130" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="4,3" marker-end="url(#arrow)"/>

          <!-- Muscle Fascicle -->
          <g transform="translate(215, 60)">
            <rect width="130" height="200" fill="#fecdd3" stroke="#e11d48" stroke-width="2" rx="10"/>
            <text x="65" y="25" fill="#9f1239" font-size="13" font-weight="bold" text-anchor="middle">Muscle Fascicle</text>
            <text x="65" y="42" fill="#be123c" font-size="10" text-anchor="middle">(Perimysium Cover)</text>
            <!-- Fibres inside -->
            <circle cx="40" cy="80" r="12" fill="#fda4af" stroke="#be123c"/>
            <circle cx="70" cy="75" r="12" fill="#fda4af" stroke="#be123c"/>
            <circle cx="95" cy="95" r="12" fill="#fda4af" stroke="#be123c"/>
            <circle cx="45" cy="125" r="12" fill="#fda4af" stroke="#be123c"/>
            <circle cx="80" cy="130" r="12" fill="#fda4af" stroke="#be123c"/>
          </g>

          <path d="M 350,130 L 395,130" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="4,3" marker-end="url(#arrow)"/>

          <!-- Muscle Fibre -->
          <g transform="translate(400, 60)">
            <rect width="140" height="200" fill="#fda4af" stroke="#be123c" stroke-width="2" rx="10"/>
            <text x="70" y="25" fill="#881337" font-size="13" font-weight="bold" text-anchor="middle">Muscle Fibre (Cell)</text>
            <text x="70" y="42" fill="#9f1239" font-size="10" text-anchor="middle">(Endomysium / Sarcolemma)</text>
            <!-- Syncytial nuclei -->
            <ellipse cx="20" cy="70" rx="10" ry="4" fill="#4c0519"/>
            <ellipse cx="120" cy="110" rx="10" ry="4" fill="#4c0519"/>
            <ellipse cx="25" cy="150" rx="10" ry="4" fill="#4c0519"/>
            <!-- Myofibrils -->
            <rect x="35" y="65" width="70" height="18" fill="#f43f5e" rx="3"/>
            <rect x="35" y="95" width="70" height="18" fill="#f43f5e" rx="3"/>
            <rect x="35" y="125" width="70" height="18" fill="#f43f5e" rx="3"/>
            <text x="70" y="175" fill="#881337" font-size="10" font-weight="bold" text-anchor="middle">Myofibrils</text>
          </g>

          <path d="M 545,130 L 590,130" stroke="#be123c" stroke-width="2.5" stroke-dasharray="4,3" marker-end="url(#arrow)"/>

          <!-- Sarcomere -->
          <g transform="translate(595, 60)">
            <rect width="125" height="200" fill="#ffffff" stroke="#9f1239" stroke-width="2" rx="10"/>
            <text x="62" y="25" fill="#881337" font-size="13" font-weight="bold" text-anchor="middle">Sarcomere</text>
            <text x="62" y="42" fill="#9f1239" font-size="10" text-anchor="middle">(Functional Unit)</text>
            <!-- Z lines -->
            <line x1="20" y1="60" x2="20" y2="150" stroke="#000000" stroke-width="3"/>
            <line x1="105" y1="60" x2="105" y2="150" stroke="#000000" stroke-width="3"/>
            <text x="20" y="165" fill="#000000" font-size="9" text-anchor="middle">Z-Line</text>
            <text x="105" y="165" fill="#000000" font-size="9" text-anchor="middle">Z-Line</text>
            <!-- Actin/Myosin sketch -->
            <line x1="20" y1="85" x2="60" y2="85" stroke="#22c55e" stroke-width="2"/>
            <line x1="65" y1="85" x2="105" y2="85" stroke="#22c55e" stroke-width="2"/>
            <line x1="40" y1="105" x2="85" y2="105" stroke="#ea580c" stroke-width="4"/>
            <line x1="20" y1="125" x2="60" y2="125" stroke="#22c55e" stroke-width="2"/>
            <line x1="65" y1="125" x2="105" y2="125" stroke="#22c55e" stroke-width="2"/>
          </g>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#be123c"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Hierarchical nesting of skeletal muscle: Muscle organ -> Fascicles (bundles) -> Muscle fibres (cells) -> Myofibrils -> Sarcomere unit.",
        guide: "WHAT TO OBSERVE: Epimysium covers whole muscle; Perimysium covers fascicle; Endomysium covers individual muscle fibre; Sarcolemma encloses multinucleated sarcoplasm containing myofibrils."
      },
      importantPoints: [
        "Fascia is the common collagenous connective tissue layer binding multiple fascicles.",
        "Muscle fibre = Muscle cell. Sarcoplasm contains multiple oval nuclei lying just beneath the sarcolemma (syncytial condition).",
        "Sarcoplasmic reticulum is a storehouse of Ca²⁺ ions."
      ]
    },
    {
      heading: "4. Detailed Microscopic Anatomy of Sarcomere & Myofilaments",
      paragraphs: [
        "Under the light and electron microscope, a myofibril exhibits alternate dark and light bands. This gives skeletal muscle its characteristic striated appearance.",
        "The dark band is called the A-band (Anisotropic band), which contains the entire length of thick (myosin) filaments. The light band is called the I-band (Isotropic band), which contains only thin (actin) filaments.",
        "In the center of each I-band is an elastic fibrous line called the Z-line (Zwischenscheibe line). The thin actin filaments are firmly anchored to the Z-line.",
        "The portion of the myofibril between two successive Z-lines is considered the functional unit of contraction and is called a SARCOMERE.",
        "In a resting state, the central part of the thick myosin filaments is NOT overlapped by thin actin filaments. This central un-overlapped region of the A-band is called the H-zone (Hensen's zone).",
        "A thin dark fibrous membrane running down the exact middle of the H-zone holds thick filaments together; this is called the M-line (Mittellinie)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="2"/>
          <text x="375" y="28" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Detailed Microscopic Architecture of a Sarcomere</text>
          
          <!-- Z lines -->
          <path d="M 80,60 L 95,80 L 80,100 L 95,120 L 80,140 L 95,160 L 80,180 L 95,200 L 80,220" stroke="#0284c7" stroke-width="4" fill="none"/>
          <path d="M 670,60 L 685,80 L 670,100 L 685,120 L 670,140 L 685,160 L 670,180 L 685,200 L 670,220" stroke="#0284c7" stroke-width="4" fill="none"/>
          <text x="87" y="240" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">Z-Line</text>
          <text x="677" y="240" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">Z-Line</text>

          <!-- M Line -->
          <line x1="375" y1="60" x2="375" y2="220" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,2"/>
          <text x="375" y="240" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">M-Line</text>

          <!-- Thin Actin Filaments -->
          <!-- Top layer -->
          <line x1="87" y1="85" x2="300" y2="85" stroke="#16a34a" stroke-width="3"/>
          <line x1="450" y1="85" x2="677" y2="85" stroke="#16a34a" stroke-width="3"/>
          <!-- Middle layer -->
          <line x1="87" y1="140" x2="300" y2="140" stroke="#16a34a" stroke-width="3"/>
          <line x1="450" y1="140" x2="677" y2="140" stroke="#16a34a" stroke-width="3"/>
          <!-- Bottom layer -->
          <line x1="87" y1="195" x2="300" y2="195" stroke="#16a34a" stroke-width="3"/>
          <line x1="450" y1="195" x2="677" y2="195" stroke="#16a34a" stroke-width="3"/>

          <!-- Thick Myosin Filaments with Heads -->
          <!-- Upper Myosin -->
          <rect x="230" y="105" width="290" height="12" fill="#ea580c" rx="3"/>
          <!-- Heads -->
          <circle cx="250" cy="98" r="4" fill="#c2410c"/><circle cx="280" cy="98" r="4" fill="#c2410c"/>
          <circle cx="470" cy="98" r="4" fill="#c2410c"/><circle cx="500" cy="98" r="4" fill="#c2410c"/>
          <circle cx="250" cy="124" r="4" fill="#c2410c"/><circle cx="280" cy="124" r="4" fill="#c2410c"/>
          <circle cx="470" cy="124" r="4" fill="#c2410c"/><circle cx="500" cy="124" r="4" fill="#c2410c"/>

          <!-- Lower Myosin -->
          <rect x="230" y="160" width="290" height="12" fill="#ea580c" rx="3"/>
          <circle cx="250" cy="153" r="4" fill="#c2410c"/><circle cx="280" cy="153" r="4" fill="#c2410c"/>
          <circle cx="470" cy="153" r="4" fill="#c2410c"/><circle cx="500" cy="153" r="4" fill="#c2410c"/>
          <circle cx="250" cy="179" r="4" fill="#c2410c"/><circle cx="280" cy="179" r="4" fill="#c2410c"/>
          <circle cx="470" cy="179" r="4" fill="#c2410c"/><circle cx="500" cy="179" r="4" fill="#c2410c"/>

          <!-- Dimension Brackets -->
          <!-- A Band -->
          <line x1="230" y1="260" x2="520" y2="260" stroke="#ea580c" stroke-width="2"/>
          <line x1="230" y1="255" x2="230" y2="265" stroke="#ea580c" stroke-width="2"/>
          <line x1="520" y1="255" x2="520" y2="265" stroke="#ea580c" stroke-width="2"/>
          <text x="375" y="275" fill="#ea580c" font-size="12" font-weight="bold" text-anchor="middle">A-Band (Dark / Anisotropic) [Myosin Length]</text>

          <!-- H Zone -->
          <line x1="300" y1="45" x2="450" y2="45" stroke="#d97706" stroke-width="2"/>
          <line x1="300" y1="40" x2="300" y2="50" stroke="#d97706" stroke-width="2"/>
          <line x1="450" y1="40" x2="450" y2="50" stroke="#d97706" stroke-width="2"/>
          <text x="375" y="40" fill="#d97706" font-size="11" font-weight="bold" text-anchor="middle">H-Zone (Un-overlapped Myosin)</text>

          <!-- I Band -->
          <line x1="87" y1="290" x2="230" y2="290" stroke="#16a34a" stroke-width="2"/>
          <line x1="87" y1="285" x2="87" y2="295" stroke="#16a34a" stroke-width="2"/>
          <line x1="230" y1="285" x2="230" y2="295" stroke="#16a34a" stroke-width="2"/>
          <text x="158" y="305" fill="#16a34a" font-size="11" font-weight="bold" text-anchor="middle">Half I-Band (Light / Isotropic)</text>

          <!-- Sarcomere Bracket -->
          <line x1="87" y1="15" x2="677" y2="15" stroke="#000000" stroke-width="2"/>
          <line x1="87" y1="10" x2="87" y2="20" stroke="#000000" stroke-width="2"/>
          <line x1="677" y1="10" x2="677" y2="20" stroke="#000000" stroke-width="2"/>
          <text x="375" y="12" fill="#000000" font-size="12" font-weight="bold" text-anchor="middle">ONE SARCOMERE (Z-Line to Z-Line)</text>
        </svg>`,
        caption: "Micro-anatomy of resting Sarcomere showing Z-lines, M-line, A-band (myosin length), I-band (actin only), and central H-zone.",
        guide: "WHAT TO OBSERVE: Sarcomere is Z-to-Z region. A-band width equals myosin filament length. I-band contains only thin filaments anchored at Z-line. H-zone is central region of A-band with NO actin overlap."
      },
      importantPoints: [
        "A-band length = length of myosin filaments.",
        "I-band contains ONLY actin filaments.",
        "H-zone contains ONLY myosin filaments (unoverlapped by actin).",
        "Z-line bisects the I-band; M-line bisects the H-zone."
      ]
    },
    {
      heading: "5. Molecular Structure of Contractile & Regulatory Proteins",
      paragraphs: [
        "Each myofilament is built from precise molecular protein assemblies.",
        "A. Thin Filament (Actin Filament): Composed of three distinct proteins:",
        "1. F-actin (Filamentous actin): Two F-actin strands helical intertwining with each other form the backbone. Each F-actin is a polymer of monomeric G-actins (Globular actin). Polymerization requires Mg²⁺ and ATP.",
        "2. Tropomyosin: Two fibrous strands of tropomyosin protein run closely along the grooves of the F-actin double helix throughout its length. In resting state, tropomyosin physically covers/masks the myosin-binding active sites on G-actin monomers.",
        "3. Troponin Complex: A complex trimeric protein distributed at regular intervals on tropomyosin. It consists of three subunits: Troponin T (TnT, binds troponin to tropomyosin), Troponin I (TnI, inhibits actin-myosin interaction), and Troponin C (TnC, contains high-affinity binding sites for Ca²⁺ ions).",
        "B. Thick Filament (Myosin Filament): A polymer composed of many monomeric proteins called Meromyosins.",
        "Each Meromyosin monomer has two important parts:",
        "1. Heavy Meromyosin (HMM): Comprises a globular head with a short arm (Cross Arm). The head projects outwards at regular distance and angle from the thick filament surface.",
        "2. Light Meromyosin (LMM): Represents the fibrous tail region of the monomer.",
        "The Myosin Head is an active ATPase enzyme and possesses two crucial functional binding sites: an Active Actin-Binding Site and an ATP-Binding Site."
      ],
      importantPoints: [
        "G-actin is monomeric; F-actin is polymeric.",
        "Troponin C subunit specifically binds Ca²⁺ ions during excitation.",
        "Myosin head acts as an active ATPase enzyme splitting ATP into ADP + Pi.",
        "Myosin head + short arm = Heavy Meromyosin (HMM); Tail = Light Meromyosin (LMM)."
      ]
    },
    {
      heading: "6. Sliding Filament Theory & Sarcomere Dimensional Changes",
      paragraphs: [
        "Proposed by Hugh Huxley, Jean Hanson, Andrew Huxley, and Rolf Niedergerke in 1954, the Sliding Filament Theory is the universally accepted mechanism for muscle contraction.",
        "The theory states that contraction of a muscle fibre occurs by the sliding of thin (actin) filaments over thick (myosin) filaments toward the center of the sarcomere (M-line). The filaments themselves DO NOT shrink or shorten in length!",
        "During muscle contraction, the following dimensional changes occur in the sarcomere:",
        "1. Distance between two adjacent Z-lines DECREASES (Sarcomere shortens).",
        "2. Width of I-band SHORTENS (as thin filaments slide deeper into A-band).",
        "3. Width of H-zone SHORTENS and MAY DISAPPEAR completely during maximum contraction.",
        "4. Length of A-band REMAINS ABSOLUTELY UNCHANGED (because myosin filament length does not change).",
        "5. Length of individual actin and myosin filaments REMAINS UNCHANGED."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="340" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="2"/>
          <text x="375" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Sliding Filament Mechanism: Relaxed vs Contracted Sarcomere</text>

          <!-- Relaxed Sarcomere Panel -->
          <g transform="translate(20, 45)">
            <rect width="710" height="130" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="20" y="22" fill="#0369a1" font-size="13" font-weight="bold">1. RELAXED SARCOMERE (Wide I-Band & H-Zone)</text>
            <!-- Z lines -->
            <line x1="60" y1="35" x2="60" y2="115" stroke="#0284c7" stroke-width="3"/>
            <line x1="650" y1="35" x2="650" y2="115" stroke="#0284c7" stroke-width="3"/>
            <!-- M Line -->
            <line x1="355" y1="35" x2="355" y2="115" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
            <!-- Actin -->
            <line x1="60" y1="55" x2="250" y2="55" stroke="#16a34a" stroke-width="3"/>
            <line x1="460" y1="55" x2="650" y2="55" stroke="#16a34a" stroke-width="3"/>
            <line x1="60" y1="95" x2="250" y2="95" stroke="#16a34a" stroke-width="3"/>
            <line x1="460" y1="95" x2="650" y2="95" stroke="#16a34a" stroke-width="3"/>
            <!-- Myosin -->
            <rect x="200" y="70" width="310" height="10" fill="#ea580c" rx="2"/>
            <!-- H Zone bracket -->
            <line x1="250" y1="40" x2="460" y2="40" stroke="#d97706" stroke-width="1.5"/>
            <text x="355" y="32" fill="#d97706" font-size="10" font-weight="bold" text-anchor="middle">H-Zone (Wide)</text>
          </g>

          <!-- Contracted Sarcomere Panel -->
          <g transform="translate(20, 190)">
            <rect width="710" height="130" fill="#ffffff" rx="8" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="20" y="22" fill="#b91c1c" font-size="13" font-weight="bold">2. CONTRACTED SARCOMERE (Z-Lines pulled inward, I-Band shortens, H-Zone disappears)</text>
            <!-- Z lines pulled closer -->
            <line x1="140" y1="35" x2="140" y2="115" stroke="#0284c7" stroke-width="3"/>
            <line x1="570" y1="35" x2="570" y2="115" stroke="#0284c7" stroke-width="3"/>
            <!-- M Line -->
            <line x1="355" y1="35" x2="355" y2="115" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
            <!-- Actin pulled inward overlapping -->
            <line x1="140" y1="55" x2="350" y2="55" stroke="#16a34a" stroke-width="3"/>
            <line x1="360" y1="55" x2="570" y2="55" stroke="#16a34a" stroke-width="3"/>
            <line x1="140" y1="95" x2="350" y2="95" stroke="#16a34a" stroke-width="3"/>
            <line x1="360" y1="95" x2="570" y2="95" stroke="#16a34a" stroke-width="3"/>
            <!-- Myosin unchanged length -->
            <rect x="200" y="70" width="310" height="10" fill="#ea580c" rx="2"/>
            <text x="355" y="42" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">H-Zone Disappeared! Thin filaments meet at M-line.</text>
          </g>
        </svg>`,
        caption: "Comparison of Relaxed vs Contracted Sarcomere: Z-lines move inward, I-band shortens, H-zone disappears, A-band length remains constant.",
        guide: "WHAT TO OBSERVE: A-band length (orange myosin) remains identical in both states. In contracted state, green actin filaments slide inward until their ends meet at the M-line, obliterating the H-zone and reducing overall Z-to-Z length."
      },
      tables: [
        {
          title: "NEET Summary of Sarcomere Band Changes During Contraction",
          headers: ["Sarcomere Region", "Relaxed State", "Contracted State", "NEET Exam Rule"],
          rows: [
            ["A-Band Length", "Full length of myosin filaments.", "Equal to relaxed state.", "REMAINS CONSTANT (NEVER CHANGES!)."],
            ["I-Band Width", "Wide (contains un-overlapped actin).", "Significantly shortened.", "SHORTENS as actin slides inward."],
            ["H-Zone Width", "Wide (contains un-overlapped myosin).", "Shortened or completely disappears.", "DISAPPEARS in maximal contraction."],
            ["Distance between Z-Lines", "Maximum resting length.", "Significantly reduced.", "SHORTENS (Sarcomere shortens)."],
            ["Actin Filament Length", "Standard molecular length.", "Equal to relaxed state.", "REMAINS CONSTANT (Filaments do not shrink!)."],
            ["Myosin Filament Length", "Standard molecular length.", "Equal to relaxed state.", "REMAINS CONSTANT (Filaments do not shrink!)."]
          ]
        }
      ],
      importantPoints: [
        "A-band length NEVER changes during muscle contraction or relaxation.",
        "H-zone disappears when thin filaments from opposite sides meet at the M-line.",
        "Contraction is caused by sliding of filaments, NOT by shortening of the filaments themselves."
      ]
    },
    {
      heading: "7. Step-by-Step Mechanism of Muscle Contraction (18-Step Sequence)",
      paragraphs: [
        "Muscle contraction is initiated by a signal sent by the Central Nervous System (CNS) via a motor neuron. Below is the complete 18-step physiological sequence of Excitation-Contraction Coupling and Muscle Relaxation:",
        "1. Neural Signal Arrival: Nerve impulse (action potential) reaches the axon terminal of a motor neuron at the Neuromuscular Junction (NMJ / Motor End Plate).",
        "2. Acetylcholine Release: Influx of extracellular Ca²⁺ into axon terminal triggers exocytosis of synaptic vesicles, releasing neurotransmitter Acetylcholine (ACh) into the synaptic cleft.",
        "3. Sarcolemma Depolarization: ACh diffuses across synaptic cleft and binds to nicotinic ACh receptors on motor end plate, opening cation channels and generating End-Plate Potential (EPP).",
        "4. Action Potential Propagation: EPP triggers a self-propagating action potential across the sarcolemma and down the T-tubules into the interior of the muscle fibre.",
        "5. Sarcoplasmic Reticulum Activation: Action potential traversing T-tubules stimulates voltage-sensitive DHPR receptors, which open Ryanodine receptors (RyR) on terminal cisternae of Sarcoplasmic Reticulum (SR).",
        "6. Massive Ca²⁺ Influx: SR releases stored Ca²⁺ ions into sarcoplasm; cytosolic Ca²⁺ concentration surges nearly 100-fold.",
        "7. Ca²⁺ Binding to Troponin: Released Ca²⁺ ions bind specifically to Troponin C (TnC) subunit on thin actin filaments.",
        "8. Troponin Conformational Change: Ca²⁺-TnC binding alters the spatial conformation of the troponin trimer complex.",
        "9. Unmasking of Actin Binding Sites: Troponin pulls tropomyosin deep into the F-actin helical groove, unmasking active myosin-binding sites on G-actin monomers.",
        "10. Cross-Bridge Formation: High-energy energized myosin head (carrying bound ADP + Pi) binds to the exposed active site on actin, forming a Cross-Bridge.",
        "11. Power Stroke: Release of inorganic phosphate (Pi) triggers the power stroke: myosin head pivots $45^\circ$, pulling thin actin filament toward the center of sarcomere (M-line). ADP is subsequently released.",
        "12. Low-Energy Rigor State: Myosin head remains tightly attached to actin in a low-energy state until a new ATP molecule binds.",
        "13. ATP Binding & Detachment: A fresh ATP molecule binds to the ATP-binding site on myosin head, inducing a conformational change that breaks the cross-bridge (Detachment).",
        "14. Myosin Head Re-cocking: Myosin ATPase hydrolyzes bound ATP into ADP + Pi. Energy released re-cocks myosin head back to its high-energy $90^\circ$ resting orientation.",
        "15. Cycle Repetition: As long as cytosolic Ca²⁺ remains elevated and ATP is available, cross-bridge cycling repeats repeatedly, sliding actin further inward.",
        "16. Cessation of Neural Signal: Action potentials stop arriving at motor neuron terminal.",
        "17. ACh Breakdown: Enzyme Acetylcholinesterase (AChE) in synaptic cleft rapidly hydrolyzes ACh into acetate and choline, ending sarcolemma excitation.",
        "18. Ca²⁺ Reuptake & Relaxation: Active Ca²⁺-ATPase pumps (SERCA) actively transport Ca²⁺ from sarcoplasm back into SR cisternae. Dropping Ca²⁺ causes Troponin C to release Ca²⁺ -> Tropomyosin slides back to mask actin active sites -> Muscle relaxes back to resting length."
      ],
      importantPoints: [
        "Neuromuscular Junction (NMJ) is the synapse between axon terminal of motor neuron and motor end plate of sarcolemma.",
        "Ca²⁺ release from SR is triggered by action potential passing down T-tubules.",
        "ATP binding causes DETACHMENT of cross-bridge; ATP hydrolysis causes RE-COCKING of myosin head.",
        "SERCA Ca²⁺-ATPase pumps consume ATP during muscle RELAXATION."
      ]
    },
    {
      heading: "8. The Cross-Bridge Cycle & Roles of Ca²⁺ and ATP",
      paragraphs: [
        "The Cross-Bridge Cycle consists of four recurring molecular stages: Attachment, Power Stroke, Detachment, and Re-cocking.",
        "Stage 1: Attachment — Energized myosin head (with ADP + Pi) binds exposed actin active site -> Cross-bridge formed.",
        "Stage 2: Power Stroke — Release of Pi causes myosin head to pivot, pulling actin toward M-line -> ADP released.",
        "Stage 3: Detachment — Fresh ATP binds to myosin head -> Cross-bridge breaks.",
        "Stage 4: Re-cocking — Myosin ATPase hydrolyzes ATP to ADP + Pi -> Myosin head re-cocks to $90^\circ$ high-energy state.",
        "Dual Essential Roles of Calcium (Ca²⁺):",
        "1. In Motor Axon Terminal: Triggers exocytosis of ACh vesicles into synaptic cleft.",
        "2. In Sarcoplasm: Binds Troponin C to move Tropomyosin and expose actin myosin-binding sites.",
        "Dual Essential Roles of ATP:",
        "1. In Contraction: Hydrolysis of ATP by myosin ATPase provides energy for re-cocking myosin head; fresh ATP binding breaks cross-bridge.",
        "2. In Relaxation: ATP powers SERCA active transport pumps to pump Ca²⁺ back into SR against concentration gradient."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="2"/>
          <text x="375" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Four Stages of the Cross-Bridge Cycle</text>

          <!-- Stage 1 -->
          <g transform="translate(30, 45)">
            <rect width="320" height="120" fill="#ffffff" rx="8" stroke="#16a34a" stroke-width="1.5"/>
            <text x="160" y="20" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">1. ATTACHMENT (Cross-Bridge Formation)</text>
            <line x1="20" y1="45" x2="300" y2="45" stroke="#16a34a" stroke-width="4"/>
            <circle cx="160" cy="45" r="7" fill="#86efac"/>
            <path d="M 160,85 L 160,52" stroke="#ea580c" stroke-width="5" marker-end="url(#head)"/>
            <text x="160" y="105" fill="#475569" font-size="10" text-anchor="middle">Myosin Head (ADP + Pi) binds Actin</text>
          </g>

          <!-- Stage 2 -->
          <g transform="translate(400, 45)">
            <rect width="320" height="120" fill="#ffffff" rx="8" stroke="#dc2626" stroke-width="1.5"/>
            <text x="160" y="20" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">2. POWER STROKE (Pi & ADP Released)</text>
            <line x1="20" y1="45" x2="300" y2="45" stroke="#16a34a" stroke-width="4"/>
            <path d="M 190,85 L 150,52" stroke="#ea580c" stroke-width="5"/>
            <text x="160" y="105" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Pivots 45° pulling actin toward M-line; releases ADP+Pi</text>
          </g>

          <!-- Stage 3 -->
          <g transform="translate(30, 180)">
            <rect width="320" height="120" fill="#ffffff" rx="8" stroke="#0284c7" stroke-width="1.5"/>
            <text x="160" y="20" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">3. DETACHMENT (Fresh ATP Binds)</text>
            <line x1="20" y1="45" x2="300" y2="45" stroke="#16a34a" stroke-width="4"/>
            <path d="M 160,95 L 160,65" stroke="#ea580c" stroke-width="5"/>
            <rect x="130" y="98" width="60" height="18" fill="#e0f2fe" stroke="#0284c7" rx="3"/>
            <text x="160" y="111" fill="#0369a1" font-size="9" font-weight="bold" text-anchor="middle">ATP Binds</text>
            <text x="160" y="80" fill="#0369a1" font-size="10" text-anchor="middle">Myosin Head Detaches from Actin</text>
          </g>

          <!-- Stage 4 -->
          <g transform="translate(400, 180)">
            <rect width="320" height="120" fill="#ffffff" rx="8" stroke="#d97706" stroke-width="1.5"/>
            <text x="160" y="20" fill="#b45309" font-size="12" font-weight="bold" text-anchor="middle">4. RE-COCKING (ATP Hydrolysis)</text>
            <line x1="20" y1="45" x2="300" y2="45" stroke="#16a34a" stroke-width="4"/>
            <path d="M 160,95 L 160,65" stroke="#ea580c" stroke-width="5"/>
            <text x="160" y="80" fill="#b45309" font-size="10" text-anchor="middle">ATPase splits ATP -> ADP + Pi</text>
            <text x="160" y="105" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">Re-cocks head back to 90° high energy</text>
          </g>

          <defs>
            <marker id="head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
              <circle cx="5" cy="5" r="4" fill="#ea580c"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Cyclic molecular states during Cross-Bridge turnover: Attachment -> Power stroke -> ATP-binding detachment -> ATP hydrolysis re-cocking.",
        guide: "WHAT TO OBSERVE: Note that detachment CANNOT occur without fresh ATP binding. Hydrolysis of ATP into ADP + Pi re-cocks the myosin head back to its cocked 90° high-energy state."
      },
      importantPoints: [
        "If ATP is absent (e.g. death), myosin heads remain attached to actin -> Rigor Mortis.",
        "Power stroke occurs when inorganic phosphate (Pi) is released.",
        "ATP hydrolysis re-cocks myosin head; ATP binding breaks cross-bridge."
      ]
    }
  ],

  formulae: [
    {
      title: "Sarcomere Dimensional Rules During Muscle Contraction",
      formula: "\\text{Sarcomere Length} = L_{\\text{A-band}} + 2 \\times L_{\\text{Half I-band}}",
      meaning: "Mathematical relationship defining sarcomere length from A-band and I-band lengths.",
      symbols: "L_A = \\text{A-band length (constant)}, L_I = \\text{I-band length (shortens)}",
      unit: "Micrometers (\\mu m)",
      conditions: "Applies to resting and contracting striated muscle sarcomeres.",
      whenToUse: "Use in numerical NEET questions calculating sarcomere shortening or band width changes."
    }
  ],

  neetImportantPoints: [
    "NEET Core Fact: 'All locomotions are movements, but all movements are not locomotions.'",
    "Macrophage and Neutrophil diapedesis is driven by amoeboid movement via actin microfilaments.",
    "Ciliated epithelium lines trachea and fallopian tubes (oviducts).",
    "Skeletal muscle fibre is a syncytium (multinucleated cell formed by fusion of embryonic myoblasts).",
    "Fascia is the common collagenous connective tissue layer binding multiple muscle fascicles.",
    "A-band length NEVER changes during muscle contraction or relaxation.",
    "I-band shortens, H-zone shortens or disappears, and Z-lines move closer during contraction.",
    "Thin filament = F-actin + Tropomyosin + Troponin (TnT, TnI, TnC).",
    "TnC subunit binds Ca²⁺ ions; TnI inhibits actin-myosin binding; TnT binds troponin to tropomyosin.",
    "Myosin monomer = Meromyosin (HMM head + cross arm, LMM tail).",
    "Myosin head possesses active ATPase enzyme activity.",
    "Fresh ATP binding is required for cross-bridge DETACHMENT; ATP hydrolysis provides energy for RE-COCKING.",
    "SERCA Ca²⁺-ATPase pumps require ATP during muscle RELAXATION."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing that actin and myosin filaments themselves shorten or contract during muscle contraction.",
      correctFact: "Actin and myosin filaments DO NOT shrink or change length during contraction! They merely slide past one another. Only the I-band, H-zone, and total Sarcomere length shorten.",
      whyItMattersForNEET: "Extremely common NEET statement verification trap."
    },
    {
      commonConfusion: "Thinking that ATP is required only for muscle contraction and not for muscle relaxation.",
      correctFact: "ATP is required for BOTH contraction (re-cocking myosin head) AND relaxation (detaching myosin head from actin and powering SERCA Ca²⁺ reuptake pumps into SR).",
      whyItMattersForNEET: "Explains Rigor Mortis where lack of ATP prevents relaxation and causes continuous stiffness."
    },
    {
      commonConfusion: "Confusing Troponin C with Tropomyosin role.",
      correctFact: "Troponin C specifically binds Ca²⁺ ions. Tropomyosin is the fibrous protein strand that physically masks active myosin-binding sites on G-actin.",
      whyItMattersForNEET: "Direct match-the-column topic in NEET UG Biology."
    }
  ],

  quickRevision: [
    "Locomotion = voluntary movement causing change of location.",
    "3 muscle types: Skeletal (striated/voluntary/syncytium), Smooth (non-striated/involuntary/fusiform), Cardiac (striated/involuntary/intercalated discs).",
    "Sarcomere = region between two adjacent Z-lines = 1 A-band + two half I-bands.",
    "A-band = dark, contains myosin; I-band = light, contains actin only; H-zone = un-overlapped myosin center.",
    "During contraction: A-band unchanged; I-band shortens; H-zone disappears; Z-lines move closer.",
    "Thin filament = 2 F-actin + 2 Tropomyosin + Troponin (TnC, TnI, TnT).",
    "Thick filament = Meromyosin (HMM head + LMM tail); Head has ATPase, actin-binding site, ATP-binding site.",
    "Contraction trigger: Neural signal -> ACh release at NMJ -> Sarcolemma/T-tubule action potential -> SR Ca²⁺ release -> Ca²⁺ binds TnC -> Tropomyosin shifts -> Cross-bridge forms -> Power stroke -> ATP detachment -> ATP hydrolysis re-cocking.",
    "Relaxation: AChE hydrolyzes ACh -> SERCA pumps Ca²⁺ back into SR -> Tropomyosin re-masks actin sites."
  ],

  practiceQuestions: [
    {
      questionId: "prac-loco-001",
      questionText: "During skeletal muscle contraction, which of the following regions of the sarcomere remains UNCHANGED in length?",
      options: [
        "A) I-band",
        "B) H-zone",
        "C) A-band",
        "D) Distance between two Z-lines"
      ],
      correctAnswerIndex: 2,
      explanation: "According to the Sliding Filament Theory, the length of the A-band (which corresponds to the entire length of the myosin thick filaments) remains strictly constant during muscle contraction. The I-band shortens, the H-zone narrows/disappears, and the distance between adjacent Z-lines decreases.",
      difficulty: "Easy",
      topicTested: "Sliding Filament Theory & Sarcomere Dimensional Changes",
      conceptTested: "Sarcomere Band Changes During Contraction"
    },
    {
      questionId: "prac-loco-002",
      questionText: "Calcium ions ($Ca^{2+}$) play a vital role in skeletal muscle contraction by binding directly to which regulatory protein?",
      options: [
        "A) Tropomyosin",
        "B) Troponin C",
        "C) F-actin",
        "D) Heavy Meromyosin"
      ],
      correctAnswerIndex: 1,
      explanation: "Calcium ions released from the sarcoplasmic reticulum bind specifically to the Troponin C (TnC) subunit of the troponin complex on thin actin filaments. This binding induces a conformational change that pulls tropomyosin away from the active myosin-binding sites on G-actin.",
      difficulty: "Easy",
      topicTested: "Role of Calcium in Muscle Contraction",
      conceptTested: "Troponin C Calcium Binding"
    },
    {
      questionId: "prac-loco-003",
      questionText: "What is the immediate consequence of fresh ATP binding to the ATP-binding site on the myosin head during the cross-bridge cycle?",
      options: [
        "A) Formation of cross-bridge with actin",
        "B) Power stroke pulling actin toward M-line",
        "C) Detachment of myosin head from actin filament",
        "D) Release of calcium ions from sarcoplasmic reticulum"
      ],
      correctAnswerIndex: 2,
      explanation: "When a fresh ATP molecule binds to the ATP-binding site on the myosin head, it causes a conformational change that breaks the bond between myosin and actin, leading to the DETACHMENT of the myosin head from the thin filament. Subsequent ATP hydrolysis provides energy to re-cock the head.",
      difficulty: "Medium",
      topicTested: "Cross-Bridge Cycle & Role of ATP",
      conceptTested: "ATP Binding and Cross-Bridge Detachment"
    }
  ],

  pyqs: [
    {
      id: "pyq-loco-2023-1",
      year: 2023,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2023",
      question: "Which of the following statements is CORRECT regarding skeletal muscle contraction?",
      options: [
        "A) H-zone increases in length during contraction.",
        "B) I-band shortens during muscle contraction.",
        "C) A-band shortens during muscle contraction.",
        "D) Z-lines move further apart during contraction."
      ],
      correctAnswerIndex: 1,
      explanation: "During skeletal muscle contraction, thin actin filaments slide inward past thick myosin filaments toward the M-line. Consequently, the I-band shortens, the H-zone narrows or disappears, and Z-lines move closer together. The length of the A-band remains completely unchanged.",
      topicTested: "Sarcomere Band Changes",
      difficulty: "Easy",
      conceptTested: "Sliding Filament Mechanism",
      ncertReference: "NCERT Class 11 Biology Chapter 20 (Locomotion and Movement) - Section 20.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Question Paper Code F1"
    },
    {
      id: "pyq-loco-2021-1",
      year: 2021,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2021",
      question: "During muscle contraction, hydrolysis of ATP by myosin ATPase results in:",
      options: [
        "A) Detachment of myosin head from actin",
        "B) Re-cocking of myosin head to high-energy state",
        "C) Binding of calcium to troponin C",
        "D) Release of acetylcholine at neuromuscular junction"
      ],
      correctAnswerIndex: 1,
      explanation: "Myosin ATPase hydrolyzes bound ATP into ADP and inorganic phosphate ($P_i$). The energy released from this hydrolysis re-cocks the myosin head back into its high-energy $90^\circ$ resting orientation, preparing it to form the next cross-bridge.",
      topicTested: "Role of ATP in Muscle Contraction",
      difficulty: "Medium",
      conceptTested: "Cross-Bridge Cycle & ATP Hydrolysis",
      ncertReference: "NCERT Class 11 Biology Chapter 20 - Section 20.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Question Paper"
    },
    {
      id: "pyq-loco-2020-1",
      year: 2020,
      exam: "NEET UG",
      verifiedExam: "NEET UG 2020",
      question: "Match the following columns and select the CORRECT option:\n(a) Fast oxidative fibres - (i) Low myoglobin\n(b) Troponin - (i) Complex protein on tropomyosin\n(c) Meromyosin - (iii) Monomer of thick filament\n(d) Sarcomere - (iv) Functional unit of contraction",
      options: [
        "A) (a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)",
        "B) (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
        "C) (a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)",
        "D) (a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"
      ],
      correctAnswerIndex: 0,
      explanation: "Troponin is a complex trimeric protein distributed on tropomyosin. Meromyosin is the monomeric subunit of thick myosin filaments. Sarcomere is the functional unit of myofibrillar contraction between two Z-lines.",
      topicTested: "Muscle Components & Sarcomere",
      difficulty: "Medium",
      conceptTested: "Muscle Protein Structure and Sarcomere Definition",
      ncertReference: "NCERT Class 11 Biology Chapter 20 - Section 20.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Question Paper"
    }
  ]
};
