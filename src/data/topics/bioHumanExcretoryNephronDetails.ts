import { DetailedTopicContent } from '../../types/neet';

export const bioHumanExcretoryNephronDetails: DetailedTopicContent = {
  topicId: "bio-human-excretory-nephron",
  topicName: "Human Excretory System & Nephron Anatomy",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Excretory Products and Their Elimination",

  whatIsThisTopic: "In-depth physiological and anatomical analysis of metabolic waste elimination, nitrogenous wastes (ammonia, urea, uric acid), modes of excretion (ammonotelism, ureotelism, uricotelism), comparative excretory structures across animal phyla, human excretory system gross anatomy, internal kidney architecture (cortex, medulla, columns of Bertini, pelvis), nephron micro-anatomy (Malpighian corpuscle, PCT, Henle's loop, DCT, collecting duct), cortical vs. juxtamedullary nephrons, and renal blood vascular pathways.",

  basicIdea: [
    "Excretion is the elimination of metabolic nitrogenous wastes (ammonia, urea, uric acid), excess ions, and water to maintain homeostasis, whereas egestion is the removal of undigested food matter via the alimentary canal.",
    "Ammonia is highly toxic and requires large amounts of water for elimination (Ammonotelism - bony fishes, aquatic amphibians, aquatic insects).",
    "Urea is synthesized in the liver via the Ornithine/Urea cycle; it is 100,000 times less toxic than ammonia and requires moderate water (Ureotelism - mammals, adult amphibians, marine fishes).",
    "Uric acid is almost non-toxic, insoluble, excreted as a paste/pellet with minimal water loss, but requires high energy expenditure (Uricotelism - reptiles, birds, land snails, insects).",
    "Different animal phyla utilize specialized excretory structures: Protonephridia/Flame cells (Platyhelminthes, Rotifers, Amphioxus), Nephridia (Annelids), Malpighian Tubules (Insects/Cockroach), Antennal/Green Glands (Crustaceans/Prawns), and Kidneys (Vertebrates).",
    "The human excretory system consists of a pair of bean-shaped reddish-brown kidneys (located retroperitoneally at T12–L3 level), a pair of ureters, a muscular urinary bladder, and a urethra.",
    "Gross kidney anatomy reveals an outer Renal Cortex and an inner Renal Medulla divided into 8–18 conical Medullary Pyramids projecting into minor and major calyces, separated by cortex extensions called Renal Columns of Bertini.",
    "The Nephron is the structural and functional unit of the kidney (~1 million per kidney), composed of a Renal Corpuscle (Glomerulus + Bowman's Capsule) and a long Renal Tubule (PCT, Loop of Henle, DCT, Collecting Duct).",
    "Cortical nephrons (85%) have short loops of Henle and reduced vasa recta, whereas Juxtamedullary nephrons (15%) have long loops of Henle extending deep into the inner medulla with well-developed Vasa Recta parallel to Henle's loop, crucial for concentrating urine.",
    "Renal blood supply follows a unique pathway where the afferent arteriole breaks into the glomerular capillary network and exits via an efferent arteriole, which then forms peritubular capillaries around cortical tubules and Vasa Recta around medullary loops."
  ],

  importantTerms: [
    {
      term: "Excretion vs Egestion",
      definition: "Excretion is the biological process of removing metabolic waste products (especially nitrogenous wastes like urea, ammonia, uric acid) formed during cellular metabolism. Egestion is the discharge of undigested, unabsorbed food material (feces) from the digestive tract.",
      neetNote: "NCERT distinction: Excretion removes cellular metabolic waste; egestion eliminates unabsorbed alimentary canal residue."
    },
    {
      term: "Ammonotelism",
      definition: "The mode of excretion where ammonia ($NH_3$) is the primary nitrogenous waste. Ammonia is readily soluble, highly toxic, and diffuses rapidly across body surfaces or gill membranes as ammonium ions ($NH_4^+$) with large water loss.",
      neetNote: "Kidneys play no significant role in ammonia excretion in aquatic teleost fishes."
    },
    {
      term: "Ureotelism",
      definition: "The mode of excretion where urea is the primary nitrogenous waste product, synthesized from toxic ammonia and carbon dioxide in the liver via the Ornithine (Urea) cycle.",
      neetNote: "Terrestrial adaptation that conserves body water compared to ammonotelism."
    },
    {
      term: "Uricotelism",
      definition: "The mode of excretion where nitrogenous wastes are converted into uric acid or urate salts, excreted in the form of a white paste or thick pellet with minimal water loss.",
      neetNote: "Maximum energy expenditure ($ATP$) but maximum water conservation; primary adaptation for xeric/terrestrial life."
    },
    {
      term: "Flame Cells (Protonephridia)",
      definition: "Specialized excretory and osmoregulatory structures possessing a tuft of beating cilia (resembling a flickering flame) found in Platyhelminthes (flatworms like Planaria, Fasciola), Rotifers, some annelids, and Cephalochordates (Amphioxus).",
      neetNote: "Protonephridia are primarily osmoregulatory (fluid balance) in function."
    },
    {
      term: "Malpighian Tubules",
      definition: "Yellowish, blind-ended tubular excretory structures located at the junction of midgut and hindgut in insects (e.g. Cockroach), which extract potassium urate from hemolymph and convert it into uric acid.",
      neetNote: "Excretory and osmoregulatory organ of Class Insecta."
    },
    {
      term: "Columns of Bertini (Renal Columns)",
      definition: "Extensions of the outer renal cortex that project inward between adjacent medullary pyramids in the human kidney.",
      neetNote: "Frequent NCERT anatomical identification question in NEET UG."
    },
    {
      term: "Malpighian Corpuscle (Renal Corpuscle)",
      definition: "The initial filtration unit of a nephron, consisting of the Glomerulus (tuft of capillaries) enclosed within the double-walled cup-like Bowman's Capsule.",
      neetNote: "Malpighian corpuscle, PCT, and DCT are always located exclusively in the RENAL CORTEX."
    },
    {
      term: "Podocytes",
      definition: "Specialized visceral epithelial cells lining the inner wall of Bowman's capsule, possessing intricate foot processes (pedicels) that interdigitate to form minute filtration slits or slit pores.",
      neetNote: "Crucial component of the glomerular filtration barrier (~25 nm slit width)."
    },
    {
      term: "Juxtamedullary Nephrons",
      definition: "Nephrons whose renal corpuscles lie close to the cortico-medullary junction, possessing long loops of Henle extending deep into the inner medulla, associated with well-developed hairpin Vasa Recta.",
      neetNote: "Account for ~15% of total nephrons; essential for generating the medullary osmotic gradient to concentrate urine."
    },
    {
      term: "Vasa Recta",
      definition: "Capillary network arising from efferent arterioles of juxtamedullary nephrons that runs parallel to the loop of Henle as thin-walled hairpin loops deep into the renal medulla.",
      neetNote: "Absent or highly reduced in cortical nephrons; vital counter-current exchanger."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Introduction to Excretion, Physiological Rationale & Metabolic Waste Types",
      paragraphs: [
        "Metabolism within living cells continuously generates metabolic waste products. Nitrogenous wastes arise predominantly from the oxidative deamination of excess amino acids and the breakdown of nucleic acids (purines and pyrimidines). Accumulation of these nitrogenous substances—primarily Ammonia ($NH_3$), Urea ($CO(NH_2)_2$), and Uric Acid ($C_5H_4N_4O_3$)—is toxic to cellular enzymes and disrupts intracellular osmotic and acid-base equilibria.",
        "Crucial Biological Distinctions:",
        "1. Excretion vs. Egestion: Excretion refers specifically to the metabolic removal of nitrogenous waste, excess ions ($Na^+, K^+, Cl^-, H^+, HCO_3^-$), and water produced during intracellular biochemistry. Egestion is the mechanical expulsion of undigested, unabsorbed digestive tract residue (feces) via the anus.",
        "2. Excretion vs. Secretion: Secretion is the active transport or release of biologically functional substances (such as enzymes, hormones, mucus, or saliva) synthesized by glandular cells for physiological utility. Excretion involves the elimination of non-functional or harmful metabolic waste.",
        "Evolution of Nitrogenous Waste Products:",
        "The chemical form in which nitrogen is excreted correlates directly with the animal's evolutionary history, habitat, and availability of water in its environment."
      ],
      tables: [
        {
          title: "Comparative Analysis of Major Nitrogenous Wastes — NEET Core Table",
          headers: ["Property", "Ammonia (NH₃)", "Urea (CO(NH₂)₂)", "Uric Acid (C₅H₄N₄O₃)"],
          rows: [
            ["Chemical Nature", "Small, highly volatile, basic gas ($NH_3 / NH_4^+$)", "Organic diamide synthesized in liver", "Complex purine ring derivative"],
            ["Toxicity Level", "Extremely High (Requires instant elimination)", "Moderate (~100,000× less toxic than $NH_3$)", "Extremely Low / Non-toxic"],
            ["Solubility in Water", "Extremely High (Diffuses rapidly)", "High (Soluble in blood plasma)", "Almost Insoluble in water"],
            ["Water Required per Gram Nitrogen", "Very High (~300 – 500 mL water per g N)", "Moderate (~50 mL water per g N)", "Minimal (~1 – 10 mL water per g N)"],
            ["Energy Expenditure (ATP Cost)", "Zero / Minimal ATP required", "Moderate ATP cost (Ornithine cycle)", "Very High ATP cost (Complex purine pathway)"],
            ["Physical Form of Excretion", "Dilute aqueous solution / Ion diffusion", "Liquid urine", "Semi-solid white paste or dry pellet"],
            ["Organism Examples", "Aquatic invertebrates, bony fishes, tadpoles, aquatic insects", "Mammals, adult amphibians, marine fishes, cartilaginous fishes (sharks)", "Reptiles, birds, land snails, terrestrial insects"]
          ]
        }
      ],
      importantPoints: [
        "🔥 High-Yield NEET Fact: Ammonia requires maximum water (~500 mL/g N) and zero energy; Uric acid requires minimum water (~1–5 mL/g N) and maximum energy.",
        "Sharks and marine cartilaginous fishes retain significant amounts of UREA in their blood plasma to maintain hyper-osmolality relative to seawater, preventing osmotic water loss.",
        "In bony fishes, ammonia is excreted primarily as $NH_4^+$ ions across gill membranes by simple diffusion; kidneys play a minor excretory role."
      ]
    },
    {
      heading: "2. Physiological Modes of Excretion — Ammonotelism, Ureotelism & Uricotelism",
      paragraphs: [
        "Ammonotelism: Organisms that excrete ammonia as their principal nitrogenous waste are called ammonotelic. Because ammonia is extremely toxic and highly soluble in water, it must be removed instantly upon formation. Aquatic animals surrounded by vast water volumes can afford to eliminate ammonia freely via passive diffusion across general body surfaces or gill membranes. In teleost (bony) fishes, $NH_3$ combines with protons to form ammonium ions ($NH_4^+$), which are actively exchanged across gill epithelial cells.",
        "Ureotelism: Terrestrial animals face the constant threat of desiccation (water loss) and cannot afford the massive water expenditure required for ammonotelism. In ureotelic animals (mammals, adult amphibians like frogs and toads, marine fishes, and turtles), excess ammonia produced during amino acid deamination is transported to the Liver. In hepatocytes, two molecules of $NH_3$ combine with one molecule of $CO_2$ through a series of enzymatic steps called the Ornithine Cycle (Urea Cycle / Krebs-Henseleit Cycle) to yield UREA. Urea is released into the blood, filtered by the kidneys, and excreted as urine.",
        "Uricotelism: Terrestrial animals adapted to arid habitats with limited water supply (birds, land reptiles, land snails, and insects) convert nitrogenous waste into Uric Acid or urate salts. Because uric acid is virtually insoluble in water, it precipitates out of solution and is excreted as a thick white paste or dry pellet with negligible water loss. This represents an ultimate evolutionary adaptation for conserving water in terrestrial and egg-laying (cleidoic) organisms."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="260" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">MODES OF NITROGENOUS WASTE EXCRETION &amp; WATER TRADE-OFF</text>
          
          <!-- Ammonotelism -->
          <g transform="translate(30, 60)">
            <rect width="210" height="170" fill="#1e293b" stroke="#0284c7" stroke-width="2" rx="10"/>
            <rect x="10" y="10" width="190" height="30" fill="#0369a1" rx="6"/>
            <text x="105" y="30" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">AMMONOTELISM</text>
            <text x="105" y="62" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Waste: Ammonia (NH₃)</text>
            <text x="105" y="85" fill="#cbd5e1" font-size="11" text-anchor="middle">• Toxicity: EXTREME</text>
            <text x="105" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">• Water Loss: 300–500 mL/g N</text>
            <text x="105" y="125" fill="#cbd5e1" font-size="11" text-anchor="middle">• Energy Cost: ZERO</text>
            <text x="105" y="150" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Bony Fish, Aquatic Insects</text>
          </g>

          <!-- Ureotelism -->
          <g transform="translate(270, 60)">
            <rect width="210" height="170" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="10"/>
            <rect x="10" y="10" width="190" height="30" fill="#b45309" rx="6"/>
            <text x="105" y="30" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">UREOTELISM</text>
            <text x="105" y="62" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Waste: Urea</text>
            <text x="105" y="85" fill="#cbd5e1" font-size="11" text-anchor="middle">• Toxicity: MODERATE</text>
            <text x="105" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">• Water Loss: ~50 mL/g N</text>
            <text x="105" y="125" fill="#cbd5e1" font-size="11" text-anchor="middle">• Energy Cost: MODERATE</text>
            <text x="105" y="150" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Mammals, Adult Frogs, Sharks</text>
          </g>

          <!-- Uricotelism -->
          <g transform="translate(510, 60)">
            <rect width="210" height="170" fill="#1e293b" stroke="#ef4444" stroke-width="2" rx="10"/>
            <rect x="10" y="10" width="190" height="30" fill="#991b1b" rx="6"/>
            <text x="105" y="30" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">URICOTELISM</text>
            <text x="105" y="62" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">Waste: Uric Acid</text>
            <text x="105" y="85" fill="#cbd5e1" font-size="11" text-anchor="middle">• Toxicity: LOWEST / Nil</text>
            <text x="105" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">• Water Loss: ~1–10 mL/g N</text>
            <text x="105" y="125" fill="#cbd5e1" font-size="11" text-anchor="middle">• Energy Cost: HIGHEST</text>
            <text x="105" y="150" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Reptiles, Birds, Insects, Snails</text>
          </g>
        </svg>`,
        caption: "Figure 1: Comparison of nitrogenous waste modes showing toxicity, water requirement, energy trade-off, and evolutionary adaptations.",
        guide: "Observe that ureotelism and uricotelism are evolutionary adaptations for water conservation on land. Uricotelism achieves maximum water conservation at the expense of high metabolic energy (ATP) expenditure."
      },
      importantPoints: [
        "Tadpole of frog is AMMONOTELIC (lives in water), whereas adult frog is UREOTELIC (lives on land). This demonstrates evolutionary transition during metamorphosis!",
        "Cleidoic eggs (eggs enclosed in hard shells, like birds and reptiles) MUST be uricotelic because insoluble uric acid precipitates safely inside the eggshell without poisoning the developing embryo."
      ]
    },
    {
      heading: "3. Comparative Excretory Structures Across Animal Phyla",
      paragraphs: [
        "Different animal phyla have evolved distinct excretory organs suited to their anatomical complexity and physiological demands.",
        "1. Protonephridia (Flame Cells): Found in Platyhelminthes (Planaria, Tapeworms, Liver Fluke), Rotifers, some annelids, and Cephalochordates (Amphioxus / Branchiostoma). Protonephridia consist of tubular networks ending in specialized ciliated flame cells. Their primary function is Osmoregulation (maintaining ionic and fluid volume balance).",
        "2. Nephridia: Tubular excretory structures found in Annelids (such as Earthworms). Earthworms possess three types of nephridia: Septal, Pharyngeal, and Integumentary nephridia. Nephridia function in both excretion of nitrogenous wastes and regulation of fluid/electrolyte balance.",
        "3. Malpighian Tubules: Blind-ended, yellow fibrous tubules attached at the junction of midgut and hindgut in Insects (e.g. Cockroach) and other terrestrial arthropods. Cells of Malpighian tubules actively absorb potassium urate, water, and salts from the surrounding hemolymph, convert potassium urate to uric acid, and discharge it into the hindgut for elimination.",
        "4. Antennal Glands or Green Glands: Specialized paired excretory organs located near the base of antennae in Crustaceans (e.g. Prawns / Palaemon). They filter hemolymph and excrete nitrogenous waste via renal pores.",
        "5. Coxal Glands: Excretory glands situated at the base of legs in Arachnids (Scorpions and Spiders).",
        "6. Kidneys: Compact, highly vascularized tubular structures found in all Vertebrates (fishes, amphibians, reptiles, birds, and mammals)."
      ],
      tables: [
        {
          title: "Excretory Structures Across Animal Phyla — NCERT High-Yield Summary",
          headers: ["Excretory Organ", "Animal Group / Phylum", "Key Physiological Features", "Primary Role"],
          rows: [
            ["Protonephridia / Flame Cells", "Platyhelminthes, Rotifers, Amphioxus, some Annelids", "Network of blind tubules with ciliated flame cells", "Osmoregulation (fluid & ion balance)"],
            ["Nephridia", "Annelids (Earthworms, Leeches)", "Coiled vascularized tubular structures", "Excretion & Osmoregulation"],
            ["Malpighian Tubules", "Insects (Cockroach), Myriapods", "100–150 thin yellow tubules at midgut-hindgut junction", "Uric acid extraction from hemolymph"],
            ["Antennal / Green Glands", "Crustaceans (Prawns, Crabs)", "Paired glands at base of antennae with end-sac & duct", "Excretion of nitrogenous fluid waste"],
            ["Kidneys", "All Vertebrates (Fish to Mammals)", "Complex tubular nephron assemblies", "Excretion, Osmoregulation & Acid-Base balance"]
          ]
        }
      ],
      importantPoints: [
        "🔥 Direct NCERT Match: Protonephridia are primary osmoregulatory organs in Amphioxus (Cephalochordate).",
        "Cockroach excretory system includes Malpighian tubules, fat body, nephrocytes, and urecose glands."
      ]
    },
    {
      heading: "4. Human Excretory System — Gross Organ Anatomy & Coordinates",
      paragraphs: [
        "The human excretory system comprises: 1) A pair of Kidneys, 2) A pair of Ureters, 3) A Urinary Bladder, and 4) A Urethra.",
        "Kidney Location & Dimensions: Kidneys are dark reddish-brown, bean-shaped organs situated retroperitoneally (behind the parietal peritoneum) against the posterior abdominal wall, extending from the level of the 12th thoracic vertebra ($T_{12}$) to the 3rd lumbar vertebra ($L_3$). The right kidney is positioned slightly lower than the left kidney due to the space occupied by the liver.",
        "Key Adult Dimensions:",
        "• Length: 10 – 12 cm | Width: 5 – 7 cm | Thickness: 2 – 3 cm | Average Weight: 120 – 170 grams.",
        "Renal Hilum: Near the center of the inner concave border of each kidney is a notch called the Hilum (or Hilus). The renal artery, nerve fibers, and lymphatics enter the kidney through the hilum, while the renal vein and ureter exit here.",
        "Ureters: Slender, muscular tubes (~25–30 cm long) lined by transitional epithelium (urothelium). Smooth muscle layers in ureter walls exhibit peristaltic waves to propel urine from the renal pelvis to the urinary bladder.",
        "Urinary Bladder: A hollow, collapsible muscular sac located in the pelvic cavity. Its thick muscular wall is formed by the Detrusor Muscle (smooth muscle controlled by autonomic nerves). The mucosal lining contains transitional epithelium, allowing dramatic expansion. The triangular floor region between the two ureteric orifices and the urethral orifice is called the Trigone.",
        "Urethra: A muscular canal conveying urine from the bladder to the exterior. Guarded by an Internal Urethral Sphincter (involuntary, smooth muscle) and an External Urethral Sphincter (voluntary, skeletal muscle)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="360" fill="#0f172a" rx="16"/>
          <text x="375" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">HUMAN EXCRETORY SYSTEM ANATOMY &amp; VASCULAR CONNECTIONS</text>
          
          <!-- Inferior Vena Cava -->
          <rect x="310" y="55" width="24" height="230" fill="#1e3a8a" rx="4"/>
          <text x="322" y="160" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 322 160)">Inferior Vena Cava</text>

          <!-- Abdominal Aorta -->
          <rect x="345" y="55" width="24" height="230" fill="#831843" rx="4"/>
          <text x="357" y="160" fill="#fda4af" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 357 160)">Abdominal Aorta</text>

          <!-- Left Kidney -->
          <path d="M 460 70 C 420 70, 420 170, 460 170 C 510 170, 520 70, 460 70 Z" fill="#991b1b" stroke="#fca5a5" stroke-width="2"/>
          <text x="475" y="120" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Left Kidney</text>
          <text x="475" y="138" fill="#fca5a5" font-size="10" text-anchor="middle">(Level T12–L3)</text>

          <!-- Right Kidney -->
          <path d="M 220 85 C 260 85, 260 185, 220 185 C 170 185, 160 85, 220 85 Z" fill="#991b1b" stroke="#fca5a5" stroke-width="2"/>
          <text x="205" y="135" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Right Kidney</text>

          <!-- Adrenal Glands -->
          <path d="M 200 83 L 220 68 L 240 83 Z" fill="#f59e0b"/>
          <path d="M 440 68 L 460 53 L 480 68 Z" fill="#f59e0b"/>

          <!-- Ureters -->
          <path d="M 240 160 Q 260 220 330 280" stroke="#fde047" stroke-width="3" fill="none"/>
          <path d="M 440 145 Q 420 220 350 280" stroke="#fde047" stroke-width="3" fill="none"/>

          <!-- Urinary Bladder -->
          <ellipse cx="340" cy="305" rx="45" ry="30" fill="#065f46" stroke="#34d399" stroke-width="2"/>
          <text x="340" y="308" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Urinary Bladder</text>

          <!-- Urethra -->
          <rect x="335" y="335" width="10" height="20" fill="#10b981"/>
          <text x="340" y="352" fill="#a7f3d0" font-size="9" text-anchor="middle">Urethra</text>

          <!-- Callouts -->
          <text x="100" y="140" fill="#cbd5e1" font-size="11">Renal Hilum ➔</text>
          <text x="580" y="240" fill="#fde047" font-size="11">← Ureters (Peristaltic transport)</text>
        </svg>`,
        caption: "Figure 2: Gross anatomy of human excretory system showing kidneys, adrenal glands, renal vessels, ureters, urinary bladder, and urethra.",
        guide: "WHAT TO OBSERVE: Note the bean shape of kidneys, retroperitoneal position between T12 and L3, slightly lower right kidney, bilateral renal arteries and veins, paired yellow ureters conveying urine to the central pelvic urinary bladder."
      },
      importantPoints: [
        "Anatomical Coordinates: T12 to L3 vertebral level; Retroperitoneal position.",
        "Transitional Epithelium (Urothelium) lines the renal pelvis, ureters, and urinary bladder, permitting stretch without cell rupture."
      ]
    },
    {
      heading: "5. Internal Anatomy of the Human Kidney — Cortex, Medulla & Calyces",
      paragraphs: [
        "A longitudinal section (L.S.) of a human kidney reveals three distinct concentric structural zones:",
        "1. Renal Capsule: A tough, fibrous outer connective tissue membrane covering and protecting the kidney from infection and physical trauma.",
        "2. Renal Cortex: The outer, light-red granular region lying immediately beneath the capsule. The cortex contains the renal corpuscles (glomeruli + Bowman's capsules), proximal convoluted tubules (PCT), and distal convoluted tubules (DCT) of nephrons.",
        "3. Renal Medulla: The inner, darker striated region surrounding the renal pelvis. The medulla is divided into 8 to 18 conical mass clusters termed Medullary Pyramids (or Renal Pyramids). The broad bases of these pyramids face the cortex, while their blunt tips, termed Renal Papillae, point inward toward the renal pelvis.",
        "Renal Columns of Bertini: Extensions of cortical tissue that project radially inward between adjacent medullary pyramids, carrying interlobar blood vessels.",
        "Drainage Pathway inside Kidney:",
        "Nephrons ➔ Collecting Ducts ➔ Ducts of Bellini (in renal papilla) ➔ Minor Calyces (cup-like chambers, 8–18) ➔ Major Calyces (2–3 large channels) ➔ Renal Pelvis (broad, funnel-shaped space inside hilum) ➔ Ureter."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="320" fill="#0f172a" rx="16"/>
          <text x="375" y="28" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">LONGITUDINAL SECTION (L.S.) OF HUMAN KIDNEY</text>
          
          <!-- Outer Capsule border -->
          <path d="M 150 50 C 450 30, 650 160, 450 290 C 250 310, 150 230, 150 50 Z" fill="#1e293b" stroke="#f43f5e" stroke-width="3"/>

          <!-- Cortex Zone -->
          <path d="M 170 65 C 430 48, 620 160, 430 275 C 260 290, 170 220, 170 65 Z" fill="#831843" opacity="0.4"/>
          <text x="210" y="85" fill="#fda4af" font-size="13" font-weight="bold">Renal Cortex (Outer Zone)</text>

          <!-- Medullary Pyramids -->
          <!-- Pyramid 1 -->
          <path d="M 300 90 L 360 80 L 330 130 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1.5"/>
          <!-- Pyramid 2 -->
          <path d="M 420 100 L 480 110 L 420 150 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1.5"/>
          <!-- Pyramid 3 -->
          <path d="M 460 180 L 490 230 L 430 220 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1.5"/>
          <!-- Pyramid 4 -->
          <path d="M 330 220 L 360 260 L 300 240 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1.5"/>

          <text x="490" y="110" fill="#fca5a5" font-size="12" font-weight="bold">Medullary Pyramid</text>

          <!-- Column of Bertini -->
          <text x="480" y="155" fill="#fef08a" font-size="11" font-weight="bold">Column of Bertini</text>
          <line x1="475" y1="150" x2="425" y2="135" stroke="#fef08a" stroke-width="1.5" stroke-dasharray="2 2"/>

          <!-- Pelvis Funnel -->
          <path d="M 230 130 L 320 160 L 230 200 Z" fill="#0284c7" opacity="0.7"/>
          <text x="210" y="170" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="end">Renal Pelvis</text>

          <!-- Ureter -->
          <rect x="100" y="160" width="130" height="16" fill="#fde047" rx="4"/>
          <text x="140" y="172" fill="#0f172a" font-size="10" font-weight="bold">Ureter Exit</text>

          <!-- Hilum Notch -->
          <text x="140" y="145" fill="#cbd5e1" font-size="11" text-anchor="middle">Renal Hilum</text>
        </svg>`,
        caption: "Figure 3: Longitudinal section of human kidney depicting capsule, outer cortex, medullary pyramids, columns of Bertini, minor/major calyces, renal pelvis, and hilum.",
        guide: "WHAT TO OBSERVE: Cortical tissue projects between medullary pyramids as Columns of Bertini. Medullary pyramids converge into papillae, draining filtrate into minor calyces, major calyces, the funnel-shaped renal pelvis, and out through the ureter."
      },
      importantPoints: [
        "Glomeruli, Bowman's capsules, PCT, and DCT are situated EXCLUSIVELY in the Renal Cortex.",
        "Loops of Henle and Collecting Ducts extend into the Renal Medulla.",
        "Columns of Bertini are extensions of cortical tissue into the medulla."
      ]
    },
    {
      heading: "6. The Nephron — Complete Structural & Histological Analysis",
      paragraphs: [
        "The Nephron is the structural and functional microscopic unit of the human kidney. Each adult kidney contains approximately 1 million ($10^6$) nephrons, giving a total of ~2 million nephrons per individual. Each nephron consists of two major structural components: 1) Renal Corpuscle (Malpighian Corpuscle), and 2) Renal Tubule.",
        "1. Renal Corpuscle (Malpighian Corpuscle): Comprises the Glomerulus and Bowman's Capsule.",
        "• Glomerulus: A dense, spherical tuft of microscopic capillaries formed by the branching of the Afferent Arteriole (a short, wide branch of the renal artery). Blood leaves the glomerulus via the Efferent Arteriole (a narrower vessel). The broader diameter of the afferent arteriole compared to the efferent arteriole generates a high Glomerular Hydrostatic Pressure (~60 mmHg) essential for ultrafiltration.",
        "• Bowman's Capsule: A double-walled epithelial cup surrounding the glomerulus. The outer parietal layer consists of simple squamous epithelium. The inner visceral layer consists of highly specialized epithelial cells called Podocytes. Podocytes possess primary and secondary foot processes (pedicels) that wrap around glomerular capillaries, leaving narrow spaces called Filtration Slits or Slit Pores (~25 nm wide) covered by a thin slit diaphragm.",
        "2. Renal Tubule Architecture:",
        "• Proximal Convoluted Tubule (PCT): Highly coiled tubule situated in the cortex. Lined by Simple Cuboidal Brush Border Epithelium bearing dense microvilli that increase the absorptive surface area by ~20-fold. PCT cells contain abundant mitochondria to supply ATP for active sodium transport.",
        "• Henle's Loop (Loop of Henle): A U-shaped hairpin tube located in the medulla, comprising:",
        "  - Thin Descending Limb: Lined by simple squamous epithelium; highly permeable to water but virtually impermeable to solutes.",
        "  - Ascending Limb: Consists of a thin segment (squamous) and a thick segment (simple cuboidal); IMPERMEABLE to water, but actively and passively transports $Na^+$, $K^+$, and $Cl^-$ into the medullary interstitium.",
        "• Distal Convoluted Tubule (DCT): Coiled cortical tubule lined by simple cuboidal epithelium lacking a brush border. Reabsorbs $Na^+$, $H_2O$, and $HCO_3^-$ under hormonal control (Aldosterone and ADH) and secretes $H^+$ and $K^+$.",
        "• Collecting Duct: A long straight duct running from cortex into inner medulla. DCTs of multiple nephrons open into a single collecting duct. Multiple collecting ducts converge into Ducts of Bellini, opening at the renal papilla."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="360" fill="#0f172a" rx="16"/>
          <text x="375" y="28" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">DETAILED NEPHRON STRUCTURE &amp; SEGMENTAL ANATOMY</text>
          
          <!-- Cortico-Medullary Boundary line -->
          <line x1="40" y1="150" x2="710" y2="150" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="50" y="140" fill="#fef08a" font-size="11" font-weight="bold">RENAL CORTEX ZONE</text>
          <text x="50" y="170" fill="#fca5a5" font-size="11" font-weight="bold">RENAL MEDULLA ZONE</text>

          <!-- Bowman's Capsule & Glomerulus -->
          <circle cx="120" cy="80" r="30" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
          <circle cx="120" cy="80" r="18" fill="#b91c1c"/>
          <text x="120" y="84" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Glomerulus</text>
          <text x="120" y="38" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Bowman's Capsule</text>

          <!-- Afferent & Efferent -->
          <path d="M 60 70 L 102 75" stroke="#ef4444" stroke-width="4"/>
          <text x="60" y="60" fill="#ef4444" font-size="10" font-weight="bold">Afferent Art. (Wide)</text>
          <path d="M 138 75 L 170 60" stroke="#ef4444" stroke-width="2"/>
          <text x="175" y="52" fill="#fca5a5" font-size="10">Efferent Art. (Narrow)</text>

          <!-- PCT -->
          <path d="M 145 90 Q 200 110, 220 80 T 260 90" stroke="#38bdf8" stroke-width="4" fill="none"/>
          <text x="210" y="55" fill="#38bdf8" font-size="12" font-weight="bold">PCT (Brush Border)</text>

          <!-- Loop of Henle -->
          <!-- Descending -->
          <path d="M 260 90 L 260 290" stroke="#0284c7" stroke-width="3" fill="none"/>
          <!-- Hairpin turn -->
          <path d="M 260 290 C 260 320, 310 320, 310 290" stroke="#38bdf8" stroke-width="3" fill="none"/>
          <!-- Ascending -->
          <path d="M 310 290 L 310 100" stroke="#f59e0b" stroke-width="5" fill="none"/>

          <text x="210" y="220" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="end">Descending Limb (H₂O Permeable)</text>
          <text x="360" y="220" fill="#f59e0b" font-size="11" font-weight="bold">Ascending Limb (NaCl Active Pump)</text>

          <!-- DCT -->
          <path d="M 310 100 Q 360 60, 420 90 T 480 80" stroke="#a855f7" stroke-width="4" fill="none"/>
          <text x="440" y="55" fill="#c084fc" font-size="12" font-weight="bold">DCT (Hormonal Reabs.)</text>

          <!-- Collecting Duct -->
          <rect x="520" y="40" width="24" height="290" fill="#065f46" stroke="#10b981" stroke-width="2" rx="4"/>
          <path d="M 480 80 L 520 80" stroke="#a855f7" stroke-width="3"/>
          <text x="532" y="180" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 532 180)">Collecting Duct (H₂O &amp; Urea)</text>

          <text x="640" y="320" fill="#4ade80" font-size="11" font-weight="bold">To Minor Calyx ➔</text>
        </svg>`,
        caption: "Figure 4: Complete structure of a nephron showing Bowman's capsule, PCT, descending and ascending limbs of Henle's loop, DCT, and Collecting Duct relative to cortical and medullary zones.",
        guide: "WHAT TO OBSERVE: Malpighian corpuscle, PCT, and DCT lie in the cortex. Henle's loop dips into the medulla. Descending limb is thin and water permeable; ascending limb is thick and impermeable to water."
      },
      importantPoints: [
        "Simple Cuboidal Brush Border Epithelium in PCT maximizes surface area for 70–80% reabsorption.",
        "Ascending limb of Henle's loop is IMPERMEABLE to water; Descending limb is PERMEABLE to water.",
        "Glomerular capillaries are unique because they lie between TWO ARTERIOLES (Afferent and Efferent), generating high hydrostatic pressure."
      ]
    },
    {
      heading: "7. Cortical vs. Juxtamedullary Nephrons",
      paragraphs: [
        "Human kidneys contain two distinct populations of nephrons categorized by the location of their renal corpuscles and the depth to which their loops of Henle penetrate the medulla:",
        "1. Cortical Nephrons (~85% of total nephrons): Renal corpuscles lie in the outer cortex. They possess short loops of Henle that extend only slightly into the outer medulla. Their efferent arterioles form a dense peritubular capillary network surrounding PCT and DCT, but the Vasa Recta is either completely absent or highly reduced.",
        "2. Juxtamedullary Nephrons (~15% of total nephrons): Renal corpuscles lie deep in the inner cortex near the cortico-medullary junction. They possess very long loops of Henle that penetrate deep into the inner medullary zone. Their efferent arterioles give rise to well-developed, specialized capillary loops called Vasa Recta that run parallel to Henle's loop. Juxtamedullary nephrons are essential for establishing the hyperosmolar medullary interstitium required to produce hypertonic (concentrated) urine during water restriction."
      ],
      tables: [
        {
          title: "Detailed Comparison: Cortical vs. Juxtamedullary Nephrons — NEET Target Table",
          headers: ["Feature / Parameter", "Cortical Nephrons (~85%)", "Juxtamedullary Nephrons (~15%)"],
          rows: [
            ["Location of Renal Corpuscle", "Outer and middle renal cortex", "Deep cortex close to cortico-medullary junction"],
            ["Length of Henle's Loop", "Short; extends only into outer medulla", "Very long; penetrates deep into inner medulla"],
            ["Vasa Recta Development", "Absent or extremely reduced", "Highly developed; forms long parallel hairpin loops"],
            ["Peritubular Capillaries", "Extensive network around PCT and DCT", "Present around convoluted tubules"],
            ["Primary Physiological Role", "General blood filtration & reabsorption under normal hydration", "Creation of medullary osmotic gradient & urine concentration during water scarcity"],
            ["Relative Abundance", "85% of total nephron population", "15% of total nephron population"]
          ]
        }
      ],
      importantPoints: [
        "Desert animals (e.g. Kangaroo Rat / Dipodomys) possess almost 100% Juxtamedullary nephrons with extremely long Henle's loops, enabling them to excrete super-concentrated urine without drinking liquid water!",
        "Vasa Recta is present almost exclusively in Juxtamedullary nephrons."
      ]
    },
    {
      heading: "8. Renal Blood Supply & Micro-Vascular Architecture",
      paragraphs: [
        "The kidneys receive a massive blood supply (~1100 to 1200 mL of blood per minute, representing approximately 20–25% of total cardiac output) via the paired Renal Arteries arising directly from the abdominal aorta.",
        "Step-by-Step Vascular Pathway through the Kidney:",
        "Abdominal Aorta ➔ Renal Artery ➔ Interlobar Arteries (passing between pyramids in columns of Bertini) ➔ Arcuate Arteries (arching over pyramid bases at cortico-medullary junction) ➔ Interlobular Arteries (branching into cortex) ➔ Afferent Arterioles ➔ Glomerular Capillaries (Ultrafiltration) ➔ Efferent Arterioles ➔ Peritubular Capillaries (around cortical PCT/DCT) & Vasa Recta (around medullary Henle's loop) ➔ Interlobular Veins ➔ Arcuate Veins ➔ Interlobar Veins ➔ Renal Vein ➔ Inferior Vena Cava.",
        "Functional Significance of Double Arteriolar System:",
        "Unlike typical capillary beds that connect an arteriole to a venule, the glomerulus is situated between TWO ARTERIOLES (Afferent and Efferent). Because the efferent arteriole has a narrower lumen than the afferent arteriole, high vascular resistance is maintained inside glomerular capillaries (~60 mmHg), driving efficient fluid ultrafiltration."
      ],
      importantPoints: [
        "Renal blood flow = 1100–1200 mL/min (~1/5th of cardiac output).",
        "Efferent arteriole diameter < Afferent arteriole diameter $\\implies$ High Glomerular Hydrostatic Pressure.",
        "Peritubular capillaries reabsorb nutrients from PCT/DCT; Vasa Recta acts as counter-current exchanger in medulla."
      ]
    }
  ],

  formulae: [
    {
      title: "Glomerular Structure Definition",
      formula: "\\text{Malpighian Corpuscle} = \\text{Glomerulus (Capillary Tuft)} + \\text{Bowman's Capsule (Double Cup)}",
      meaning: "Defines the anatomical filtration unit at the start of each nephron.",
      whenToUse: "Use in structural identification and matching questions."
    },
    {
      title: "Total Renal Blood Flow Calculation",
      formula: "\\text{Renal Blood Flow (RBF)} = 20\\text{--}25\\% \\times \\text{Cardiac Output} \\approx 1100\\text{--}1200 \\text{ mL/min}",
      meaning: "Relates renal systemic blood supply to total cardiac output.",
      whenToUse: "Use in physiology numerical calculations."
    }
  ],

  neetImportantPoints: [
    "🔥 Ammonia is the most toxic nitrogenous waste (~500 mL water/g N); Uric acid is the least toxic (~1–5 mL water/g N).",
    "🔥 Protonephridia (flame cells) function primarily in osmoregulation in Platyhelminthes, Rotifers, and Amphioxus.",
    "🔥 Human kidney coordinates: T12 to L3 vertebrae, retroperitoneal, 10–12 cm long, 120–170 g weight.",
    "🔥 Podocytes in the visceral layer of Bowman's capsule form filtration slits (~25 nm wide) for ultrafiltration.",
    "🔥 Columns of Bertini are extensions of cortical tissue projecting between medullary pyramids.",
    "🔥 PCT is lined by simple cuboidal brush border epithelium with dense microvilli, reabsorbing 70–80% of electrolytes and water.",
    "🔥 Descending limb of Henle's loop is permeable to water but impermeable to salts; Ascending limb is impermeable to water but transports NaCl.",
    "🔥 Juxtamedullary nephrons (~15%) have long loops of Henle dipping deep into inner medulla and well-developed Vasa Recta, required for concentrating urine.",
    "🔥 Renin-releasing JG cells are located at the contact point between DCT and Afferent arteriole."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Excretion with Egestion.",
      correctFact: "Excretion is the elimination of cellular metabolic wastes (nitrogenous wastes like urea/ammonia) via kidneys/gills. Egestion is the discharge of undigested food residue (feces) via the anus.",
      whyItMattersForNEET: "Frequently tested in conceptual true/false statements in NEET."
    },
    {
      commonConfusion: "Believing that kidneys excrete ammonia in bony fishes.",
      correctFact: "Bony fishes (teleosts) excrete ammonia as $NH_4^+$ primarily across GILL MEMBRANES by simple diffusion; kidneys play a minor role in nitrogenous excretion.",
      whyItMattersForNEET: "Direct NCERT statement tested in NEET multiple times."
    },
    {
      commonConfusion: "Assuming Cortical nephrons concentrate urine.",
      correctFact: "Juxtamedullary nephrons (with long Henle's loops and Vasa Recta) create the medullary osmotic gradient to concentrate urine. Cortical nephrons have short loops and reduced vasa recta.",
      whyItMattersForNEET: "Crucial difference between nephron types in NEET questions."
    },
    {
      commonConfusion: "Thinking the Ascending limb of Henle's loop is permeable to water.",
      correctFact: "The Ascending limb is completely IMPERMEABLE to water. Water can exit only through the Descending limb and Collecting duct under ADH influence.",
      whyItMattersForNEET: "High-frequency trap in matching and statement questions."
    }
  ],

  quickRevision: [
    "Nitrogenous Wastes: Ammonia (most toxic, ammonotelism in bony fish), Urea (ureotelism in mammals/frogs), Uric acid (least toxic, uricotelism in birds/reptiles/insects).",
    "Excretory Organs: Flame cells (Platyhelminthes, Amphioxus), Nephridia (Annelids), Malpighian tubules (Insects), Green glands (Prawns), Kidneys (Vertebrates).",
    "Kidney Anatomy: Retroperitoneal (T12–L3), Cortex (outer) + Medulla (inner pyramids), Columns of Bertini, Pelvis, Ureter.",
    "Nephron Unit: Malpighian Corpuscle (Glomerulus + Bowman's Capsule with Podocytes) + PCT (brush border) + Loop of Henle + DCT + Collecting Duct.",
    "Cortical vs Juxtamedullary: Cortical (85%, short loop, reduced vasa recta); Juxtamedullary (15%, long loop deep in medulla, well-developed vasa recta for urine concentration).",
    "Renal Blood Supply: Renal artery → Afferent arteriole → Glomerulus → Efferent arteriole → Peritubular capillaries / Vasa recta → Renal vein."
  ],

  practiceQuestions: [
    {
      id: "prac-excretory-1",
      question: "NEET-Style Practice Question — NOT A PYQ: Which of the following animal groups correctly matches its primary nitrogenous waste and excretory organ?",
      options: [
        "Prawn — Uric acid — Malpighian tubules",
        "Cockroach — Uric acid — Malpighian tubules",
        "Adult Frog — Ammonia — Protonephridia",
        "Bony Fish — Urea — Antennal glands"
      ],
      correctAnswerIndex: 1,
      explanation: "Cockroaches (insects) are uricotelic (excrete uric acid) and utilize Malpighian tubules as their excretory organs. Prawns utilize green glands; adult frogs are ureotelics with kidneys; bony fishes are ammonotelics excreting primarily via gills.",
      conceptTested: "Matching animals to nitrogenous wastes and excretory organs"
    },
    {
      id: "prac-excretory-2",
      question: "NEET-Style Practice Question — NOT A PYQ: Which structural adaptation of the Proximal Convoluted Tubule (PCT) cells enables reabsorption of 70–80% of electrolytes and water from the filtrate?",
      options: [
        "Presence of podocytes with slit pores",
        "Simple cuboidal epithelium with dense microvilli brush border and abundant mitochondria",
        "Squamous epithelium with high permeability to passive water channels",
        "Ciliated columnar epithelium propelling filtrate forward"
      ],
      correctAnswerIndex: 1,
      explanation: "PCT cells are lined by simple cuboidal brush border epithelium bearing dense microvilli that tremendously increase surface area for reabsorption. Abundant mitochondria provide ATP for active Na+ transport.",
      conceptTested: "Histology and functional adaptations of PCT"
    },
    {
      id: "prac-excretory-3",
      question: "NEET-Style Practice Question — NOT A PYQ: What is the primary functional significance of Juxtamedullary nephrons compared to Cortical nephrons?",
      options: [
        "They constitute 85% of total nephrons and drive rapid baseline filtration.",
        "Their long loops of Henle and well-developed Vasa Recta generate a deep medullary osmotic gradient for urine concentration.",
        "They completely lack Vasa Recta to prevent water reabsorption.",
        "They are located in the outer capsule and lack collecting ducts."
      ],
      correctAnswerIndex: 1,
      explanation: "Juxtamedullary nephrons (~15% of total) possess long loops of Henle penetrating deep into the inner medulla along with parallel Vasa Recta, establishing the medullary hyperosmolar gradient (300 to 1200 mOsmol/L) necessary to concentrate urine.",
      conceptTested: "Physiological role of Juxtamedullary nephrons"
    }
  ],

  pyqs: [
    {
      id: "pyq-excretory-2023",
      year: 2023,
      exam: "NEET UG",
      question: "Which of the following statement is correct regarding the excretion in terrestrial animals?",
      options: [
        "Reptiles and birds excrete uric acid in the form of pellet or paste with a minimum loss of water.",
        "Mammals excrete ammonia as the primary nitrogenous waste product.",
        "Insects excrete urea to prevent excess water loss.",
        "Protonephridia are the excretory structures in all adult amphibians."
      ],
      correctAnswerIndex: 0,
      explanation: "Reptiles, birds, land snails, and insects are uricotelic, excreting uric acid as a semi-solid paste or pellet with minimal water loss. Mammals are ureotelic; insects are uricotelic; adult amphibians have mesonephric kidneys.",
      conceptTested: "Uricotelism as terrestrial water conservation adaptation",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Question Paper"
    },
    {
      id: "pyq-excretory-2021",
      year: 2021,
      exam: "NEET UG",
      question: "Which of the following conditions is NOT responsible for the release of Renin from Juxtaglomerular (JG) cells?",
      options: [
        "A fall in Glomerular Filtration Rate (GFR)",
        "A decrease in glomerular blood pressure",
        "A decrease in arterial blood flow to kidneys",
        "An increase in Atrial Natriuretic Factor (ANF)"
      ],
      correctAnswerIndex: 3,
      explanation: "ANF (released when blood pressure/volume increases) causes vasodilation and INHIBITS the release of Renin. A fall in GFR, fall in glomerular BP, or reduced renal blood flow STIMULATES JG cells to release Renin.",
      conceptTested: "Regulation of Renin release from JG cells",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Question Paper"
    },
    {
      id: "pyq-excretory-2018",
      year: 2018,
      exam: "NEET UG",
      question: "Match the items given in Column I with those in Column II and select the correct option:\nColumn I: (A) Glycosuria, (B) Gout, (C) Renal Calculi, (D) Glomerulonephritis\nColumn II: (i) Accumulation of uric acid in joints, (ii) Mass of crystallised salts within the kidney, (iii) Inflammation in glomeruli, (iv) Presence of glucose in urine",
      options: [
        "(A)-(iv), (B)-(i), (C)-(ii), (D)-(iii)",
        "(A)-(i), (B)-(ii), (C)-(iii), (D)-(iv)",
        "(A)-(ii), (B)-(iii), (C)-(iv), (D)-(i)",
        "(A)-(iv), (B)-(ii), (C)-(iii), (D)-(i)"
      ],
      correctAnswerIndex: 0,
      explanation: "Glycosuria (A) = Presence of glucose in urine (iv). Gout (B) = Accumulation of uric acid in joints (i). Renal Calculi (C) = Crystallised salts mass in kidney (ii). Glomerulonephritis (D) = Inflammation of glomeruli (iii).",
      conceptTested: "Clinical disorders of human excretory system",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2018 Official Question Paper"
    }
  ],

  neetMarksPotential: {
    averageQuestionsPerYear: 3,
    scoreWeightage: "12 Marks",
    difficultyRating: "Medium",
    highYieldStatus: true
  }
};
