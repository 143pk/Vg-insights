import { DetailedTopicContent } from '../../types/neet';

export const bioUrineFormationCounterCurrentDetails: DetailedTopicContent = {
  topicId: "bio-urine-formation-counter-current",
  topicName: "Urine Formation, Counter-Current Mechanism & Regulation",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Excretory Products and Their Elimination",

  whatIsThisTopic: "Complete physiological mechanisms of urine formation (Glomerular Filtration, Selective Reabsorption, Tubular Secretion), Glomerular Filtration Rate (GFR = 125 mL/min), Net Filtration Pressure (NFP = +10 mmHg), nephron segment functions (PCT, Henle's loop, DCT, Collecting Duct), Counter-Current Mechanism (Loop of Henle & Vasa Recta medullary hyperosmolar gradient 300 to 1200 mOsmol/L), renal regulation (ADH/Hypothalamus, RAAS system, ANF/ANP), micturition reflex, normal urine composition, accessory excretory organs (lungs, liver, skin), clinical disorders (uraemia, renal failure, renal calculi, glomerulonephritis), and hemodialysis (artificial kidney).",

  basicIdea: [
    "Urine formation involves three main physiological processes: 1) Glomerular Filtration (ultrafiltration of blood plasma), 2) Selective Reabsorption (retrieval of essential nutrients, water, and ions), and 3) Tubular Secretion (active transport of waste ions into tubular fluid).",
    "Ultrafiltration occurs across a three-layered filtration membrane: fenestrated capillary endothelium, acellular basement membrane, and visceral podocytes with filtration slits (~25 nm).",
    "Net Filtration Pressure (NFP) is calculated as: $NFP = GHP - (BCOP + CHP) = 60 - (32 + 18) = +10 \\text{ mmHg}$.",
    "Glomerular Filtration Rate (GFR) is approximately $125 \\text{ mL/min}$ or $180 \\text{ Liters/day}$. Of this 180 L of filtrate, 99% is reabsorbed, yielding only $1.5 \\text{ Liters}$ of final urine daily.",
    "PCT reabsorbs 70–80% of water and electrolytes, and 100% of glucose and amino acids via active secondary sodium co-transport.",
    "The Counter-Current Mechanism operates between the U-shaped Loop of Henle and Vasa Recta to create a hyperosmolar medullary interstitium ($300 \\text{ mOsmol/L}$ in cortex to $1200 \\text{ mOsmol/L}$ in inner medulla) using NaCl transport and Urea recycling, enabling production of urine $4\\times$ more concentrated than blood plasma.",
    "ADH (Vasopressin) released from the posterior pituitary during dehydration increases aquaporin water channels in DCT and Collecting Duct, promoting water retention and hypertonic urine.",
    "The RAAS (Renin-Angiotensin-Aldosterone System) is activated by low blood pressure/GFR: JG cells release Renin $\\to$ Angiotensinogen $\\to$ Angiotensin I $\\to$ Angiotensin II $\\to$ Aldosterone, restoring blood pressure and Na+/water balance.",
    "ANF (Atrial Natriuretic Factor) is secreted by heart atria in response to high blood pressure, causing vasodilation and inhibiting Renin and Aldosterone (acting as a check on RAAS).",
    "Micturition is a neural reflex triggered by bladder stretch receptors sending impulses to the CNS, contracting the detrusor muscle and relaxing urethral sphincters.",
    "Hemodialysis (Artificial Kidney) clears nitrogenous wastes from uremic patient blood by diffusion across a semi-permeable cellophane membrane into nitrogen-free dialyzing fluid in the presence of heparin/anti-heparin."
  ],

  importantTerms: [
    {
      term: "Ultrafiltration",
      definition: "The non-selective pressure filtering of blood plasma passing through glomerular capillaries under high hydrostatic pressure (~60 mmHg), where all plasma constituents except proteins and blood cells enter Bowman's capsule.",
      neetNote: "Forms ~180 L/day of primary filtrate containing glucose, amino acids, urea, and ions."
    },
    {
      term: "Glomerular Filtration Rate (GFR)",
      definition: "The total volume of filtrate formed by all nephrons of both kidneys per unit time. Normal human GFR = $125 \\text{ mL/min} = 180 \\text{ Liters/day}$.",
      neetNote: "Standard NCERT quantitative value constantly tested in NEET UG."
    },
    {
      term: "Juxtaglomerular Apparatus (JGA)",
      definition: "A specialized cellular regulatory complex formed by the intimate cellular contact between the terminal ascending limb/early DCT (Macula Densa cells) and the Afferent Arteriole (Juxtaglomerular JG cells containing Renin granules).",
      neetNote: "Secretes RENIN in response to a fall in glomerular blood pressure or GFR."
    },
    {
      term: "Obligatory vs Conditional Water Reabsorption",
      definition: "Obligatory water reabsorption occurs automatically in the PCT (70–80%) and descending limb of Henle's loop by osmosis following solute reabsorption. Conditional water reabsorption occurs in the DCT and Collecting Duct strictly under ADH control.",
      neetNote: "Conditional reabsorption is dynamic and adjusted according to body hydration state."
    },
    {
      term: "Counter-Current Multiplier & Exchanger",
      definition: "The Loop of Henle acts as a Counter-Current Multiplier (actively establishing the medullary osmotic gradient using NaCl pumps), while the Vasa Recta acts as a Counter-Current Exchanger (passively maintaining the gradient without washing out medullary solutes).",
      neetNote: "Essential conceptual distinction between Henle's loop and Vasa recta."
    },
    {
      term: "Medullary Hyperosmolarity",
      definition: "The progressive increase in osmotic concentration of the medullary interstitial fluid from $300 \\text{ mOsmol/L}$ at the cortico-medullary border to $1200 \\text{ mOsmol/L}$ at the renal papilla tip.",
      neetNote: "Driven primarily by NaCl accumulation (from ascending Henle's limb) and Urea recycling (from collecting duct)."
    },
    {
      term: "Antidiuretic Hormone (ADH / Vasopressin)",
      definition: "A peptide hormone synthesized in the hypothalamus and released by the neurohypophysis (posterior pituitary) that increases water permeability of DCT and collecting duct cells by inserting aquaporin-2 water channels.",
      neetNote: "Prevents Diuresis (excess water excretion); deficiency causes Diabetes Insipidus."
    },
    {
      term: "Renin-Angiotensin-Aldosterone System (RAAS)",
      definition: "A endocrine cascade initiated by JG cell Renin release during renal hypoperfusion. Renin cleaves Angiotensinogen to Angiotensin I, converted by ACE to Angiotensin II, which triggers systemic vasoconstriction and adrenal Aldosterone release.",
      neetNote: "Increases Na+ and water reabsorption in DCT, raising blood pressure and GFR."
    },
    {
      term: "Atrial Natriuretic Factor (ANF / ANP)",
      definition: "A peptide hormone released by the cardiac atrial walls in response to excessive venous return or high blood pressure, promoting renal excretion of sodium (natriuresis) and water, and causing systemic vasodilation.",
      neetNote: "Acts as a direct physiological antagonist / check to the RAAS pathway."
    },
    {
      term: "Micturition Reflex",
      definition: "An autonomic spinal reflex (modulated by brainstem centers) triggered by distension of the urinary bladder, producing parasympathetic contraction of detrusor muscle and relaxation of internal urethral sphincter.",
      neetNote: "Voluntary relaxation of the external urethral sphincter permits urination."
    },
    {
      term: "Hemodialysis",
      definition: "A medical procedure using an artificial kidney to remove nitrogenous metabolic wastes (urea, uric acid, creatinine) and excess electrolytes from the blood of patients suffering from acute or chronic renal failure.",
      neetNote: "Relies on simple passive diffusion across a porous cellophane membrane into dialyzing fluid."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Physiology of Urine Formation — Ultrafiltration, Reabsorption & Secretion",
      paragraphs: [
        "Urine formation is a continuous homeostatic process carried out by nephrons through three distinct sequential steps: 1) Glomerular Filtration, 2) Selective Reabsorption, and 3) Tubular Secretion.",
        "1. Glomerular Filtration (Ultrafiltration):",
        "Blood enters glomerular capillaries under high hydrostatic pressure (~60 mmHg) generated by the wide afferent arteriole draining into a narrow efferent arteriole. Filtration occurs across a three-layered Filtration Barrier:",
        "• Layer 1: Endothelium of Glomerular Capillaries (bearing thousands of tiny pores called fenestrae, 70–100 nm).",
        "• Layer 2: Acellular Basement Membrane (gel-like matrix composed of collagen IV and negatively charged heparan sulfate glycoproteins that repel plasma proteins).",
        "• Layer 3: Visceral Epithelium of Bowman's Capsule (composed of specialized Podocytes whose interdigitating foot processes form filtration slits ~25 nm wide covered by a slit diaphragm).",
        "Because of this ultra-fine barrier, almost all plasma components except plasma proteins (albumin, globulins) and blood cells pass into Bowman's space to form the Primary Ultrafiltrate.",
        "Dynamics of Net Filtration Pressure (NFP):",
        "Filtration is governed by Starling forces across glomerular capillaries:",
        "• Glomerular Hydrostatic Pressure (GHP): Outward blood pressure pushing fluid OUT of capillaries $\\approx +60 \\text{ mmHg}$.",
        "• Blood Colloidal Osmotic Pressure (BCOP): Inward osmotic pressure exerted by plasma proteins pulling fluid IN $\\approx -32 \\text{ mmHg}$.",
        "• Capsular Hydrostatic Pressure (CHP): Inward hydrostatic pressure exerted by fluid already inside Bowman's capsule pulling fluid IN $\\approx -18 \\text{ mmHg}$.",
        "Formula: $Net Filtration Pressure (NFP) = GHP - (BCOP + CHP) = 60 - (32 + 18) = +10 \\text{ mmHg}$.",
        "Glomerular Filtration Rate (GFR): The volume of filtrate formed by both kidneys per minute. Normal GFR $= 125 \\text{ mL/min} = 180 \\text{ Liters/day}$. Out of 180 L formed daily, only $\\sim 1.5 \\text{ Liters}$ is excreted as urine, demonstrating that $99\\%$ of filtrate is reabsorbed!"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#0f172a" rx="16"/>
          <text x="375" y="28" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">GLOMERULAR FILTRATION BARRIER &amp; NET FILTRATION PRESSURE (NFP)</text>
          
          <!-- Capillary Endothelium Layer -->
          <rect x="100" y="70" width="550" height="25" fill="#991b1b" stroke="#ef4444" stroke-width="2" rx="4"/>
          <text x="375" y="87" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. Fenestrated Capillary Endothelium (Pores 70–100 nm)</text>

          <!-- Basement Membrane Layer -->
          <rect x="100" y="110" width="550" height="20" fill="#f59e0b" rx="4"/>
          <text x="375" y="125" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">2. Basement Membrane (Negatively Charged Heparan Sulfate - Blocks Proteins)</text>

          <!-- Podocyte Visceral Epithelium Layer -->
          <rect x="100" y="145" width="550" height="25" fill="#0284c7" stroke="#38bdf8" stroke-width="2" rx="4"/>
          <text x="375" y="162" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3. Podocyte Visceral Layer (Filtration Slits / Slit Pores ~25 nm)</text>

          <!-- Bowman's Space -->
          <rect x="100" y="185" width="550" height="95" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
          <text x="375" y="210" fill="#fde047" font-size="13" font-weight="bold" text-anchor="middle">PRIMARY ULTRAFILTRATE IN BOWMAN'S CAPSULE</text>
          
          <g transform="translate(120, 225)">
            <rect width="510" height="45" fill="#0f172a" rx="6"/>
            <text x="255" y="20" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">NFP = GHP - (BCOP + CHP) = 60 - (32 + 18) = +10 mmHg</text>
            <text x="255" y="38" fill="#cbd5e1" font-size="10" text-anchor="middle">GFR = 125 mL/min (180 L/day) ➔ 99% Reabsorbed ➔ 1.5 L Urine Excreted Daily</text>
          </g>
        </svg>`,
        caption: "Figure 1: The 3-layered glomerular filtration barrier and Starling pressure values determining Net Filtration Pressure (NFP = +10 mmHg).",
        guide: "WHAT TO OBSERVE: Three layers: 1) Fenestrated endothelium, 2) Acellular basement membrane, 3) Podocyte filtration slits. Proteins and blood cells are retained in blood; small solutes and water enter Bowman's space."
      },
      importantPoints: [
        "NFP formula: $\\text{NFP} = \\text{GHP} - (\\text{BCOP} + \\text{CHP}) = 60 - (32 + 18) = +10 \\text{ mmHg}$.",
        "GFR $= 125 \\text{ mL/min} = 180 \\text{ L/day}$. 99% reabsorbed; $1.5 \\text{ L/day}$ urine output.",
        "Basement membrane is negatively charged, repelling negatively charged plasma proteins (albumin)."
      ]
    },
    {
      heading: "2. Functions of Nephron Segments — Detailed Reabsorption & Secretion",
      paragraphs: [
        "Reabsorption and secretion occur along different segments of the renal tubule, altering the volume and osmolarity of tubular fluid.",
        "1. Proximal Convoluted Tubule (PCT):",
        "• Primary Site of Reabsorption: PCT reabsorbs ~70–80% of water and electrolytes ($Na^+, K^+, Cl^-, HCO_3^-$), and 100% of essential organic nutrients (Glucose and Amino Acids). Glucose and amino acids are reabsorbed via active $Na^+$-dependent secondary active transport (SGLT co-transporters) until transport saturation ($T_m$).",
        "• Tubular Secretion in PCT: PCT cells actively secrete $H^+$, $K^+$, and $NH_3$ (ammonia) into the filtrate while absorbing $HCO_3^-$, maintaining blood pH and ionic equilibrium.",
        "2. Henle's Loop (Loop of Henle):",
        "• Descending Limb: Extremely PERMEABLE to water (via aquaporin-1 channels) but virtually IMPERMEABLE to electrolytes. As filtrate moves down into the hyperosmolar medullary interstitium, water leaves by osmosis, concentrating tubular fluid ($300 \\to 600 \\to 900 \\to 1200 \\text{ mOsmol/L}$ at the hairpin bend).",
        "• Ascending Limb: Completely IMPERMEABLE to water, but actively and passively transports $Na^+, K^+$, and $Cl^-$ (via $Na^+$-$K^+$-$2Cl^-$ NKCC2 co-transporters) into medullary interstitium. Solute removal dilutes tubular fluid ($1200 \\to 900 \\to 600 \\to 200 \\text{ mOsmol/L}$ at top of ascending limb); hence called the diluting segment.",
        "3. Distal Convoluted Tubule (DCT):",
        "• Conditional Reabsorption: Reabsorbs $Na^+$ and water strictly under hormonal control. Aldosterone stimulates $Na^+$ reabsorption (and $K^+$ secretion); ADH stimulates water reabsorption.",
        "• pH & Ionic Balance: Reabsorbs $HCO_3^-$ and selectively secretes $H^+$, $K^+$, and $NH_3$.",
        "4. Collecting Duct:",
        "• Large volumes of water are reabsorbed from the collecting duct under ADH stimulation as it passes through the medullary hyperosmolar gradient, producing hypertonic urine ($1200 \\text{ mOsmol/L}$). Small amounts of Urea diffuse out of the lower medullary collecting duct into the medullary interstitium to maintain high gradient osmolality."
      ],
      tables: [
        {
          title: "Segmental Summary of Reabsorption & Secretion across Nephron — NEET Master Table",
          headers: ["Nephron Segment", "Permeability Properties", "Major Substances Reabsorbed", "Major Substances Secreted", "Filtrate Osmolarity"],
          rows: [
            ["PCT", "Permeable to water & solutes", "70-80% H₂O, Na⁺, Cl⁻, HCO₃⁻, 100% Glucose & Amino Acids", "H⁺, K⁺, NH₃, drugs", "Isotonic (300 mOsmol/L)"],
            ["Descending Limb of Henle", "Permeable to H₂O; Impermeable to salts", "Water (leaves passively into medulla)", "None", "Hypertonic (300 ➔ 1200 mOsmol/L)"],
            ["Ascending Limb of Henle", "Impermeable to H₂O; Permeable to NaCl", "NaCl (Na⁺, K⁺, 2Cl⁻ active transport)", "None", "Hypotonic (1200 ➔ 200 mOsmol/L)"],
            ["DCT", "Conditional permeability (ADH/Aldosterone)", "Na⁺, Cl⁻, H₂O (conditional), HCO₃⁻", "H⁺, K⁺, NH₃", "Hypotonic to Isotonic (200 ➔ 300)"],
            ["Collecting Duct", "Water permeable under ADH", "Water (massive reabsorption), Urea (medullary portion)", "H⁺, K⁺", "Hypertonic (Up to 1200 mOsmol/L)"]
          ]
        }
      ],
      importantPoints: [
        "100% of glucose and amino acids are reabsorbed in PCT under normal physiological conditions.",
        "Descending limb concentrates filtrate; Ascending limb dilutes filtrate.",
        "DCT and Collecting Duct perform CONDITIONAL reabsorption regulated by Aldosterone and ADH."
      ]
    },
    {
      heading: "3. The Counter-Current Mechanism — Deep Step-by-Step Breakdown",
      paragraphs: [
        "Mammals possess the unique ability to produce hypertonic (concentrated) urine—up to 4 times ($4\\times$) more concentrated than normal blood plasma ($1200 \\text{ mOsmol/L}$ vs $300 \\text{ mOsmol/L}$). This is achieved by the Counter-Current Mechanism operating in the renal medulla.",
        "The Counter-Current System involves two parallel U-shaped structures:",
        "1. Loop of Henle (Counter-Current Multiplier): Flow of fluid in descending and ascending limbs occurs in opposite directions.",
        "2. Vasa Recta (Counter-Current Exchanger): Flow of blood in descending and ascending capillary limbs occurs in opposite directions.",
        "Establishment & Maintenance of Medullary Gradient:",
        "• Cortico-Medullary Gradient: Interstitial fluid osmolarity increases progressively from $300 \\text{ mOsmol/L}$ in the cortex to $600 \\text{ mOsmol/L}$ in outer medulla, $900 \\text{ mOsmol/L}$ in mid medulla, and $1200 \\text{ mOsmol/L}$ in inner medulla at renal papillae.",
        "• Role of NaCl: The thick ascending limb of Henle's loop actively pumps $Na^+$ and $Cl^-$ into the medullary interstitium. This NaCl enters the descending limb of Vasa Recta. As blood ascends in the ascending limb of Vasa Recta, NaCl is returned to the medullary interstitium. Thus, NaCl is trapped in the medulla without being carried away by systemic blood flow!",
        "• Role of Urea Recycling: A small amount of urea diffuses out of the lower medullary collecting duct into the medullary interstitium, contributing significantly to inner medullary hyperosmolarity. This urea enters the thin ascending limb of Henle's loop and passes through DCT back to the collecting duct, recycling continuously.",
        "• Concentration of Final Urine: As tubular fluid passes down the collecting duct through this hyperosmolar medullary interstitium ($300 \\to 1200 \\text{ mOsmol/L}$), water is passively drawn out into the interstitium by osmosis (facilitated by ADH aquaporin channels). The resulting urine exiting into the calyces reaches an osmolarity of $1200 \\text{ mOsmol/L}$."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="360" fill="#0f172a" rx="16"/>
          <text x="375" y="28" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">COUNTER-CURRENT MECHANISM: LOOP OF HENLE &amp; VASA RECTA</text>
          
          <!-- Osmolarity Gradient Levels on Left -->
          <g fill="#94a3b8" font-size="11" font-weight="bold">
            <text x="30" y="70">Cortex: 300 mOsm/L</text>
            <text x="30" y="140">Outer Medulla: 600 mOsm/L</text>
            <text x="30" y="220">Inner Medulla: 900 mOsm/L</text>
            <text x="30" y="300">Papilla: 1200 mOsm/L</text>
          </g>

          <!-- Gradient Dotted Lines -->
          <line x1="170" y1="70" x2="710" y2="70" stroke="#334155" stroke-dasharray="4 4"/>
          <line x1="170" y1="140" x2="710" y2="140" stroke="#334155" stroke-dasharray="4 4"/>
          <line x1="170" y1="220" x2="710" y2="220" stroke="#334155" stroke-dasharray="4 4"/>
          <line x1="170" y1="300" x2="710" y2="300" stroke="#334155" stroke-dasharray="4 4"/>

          <!-- Loop of Henle (Center Left) -->
          <!-- Descending -->
          <path d="M 230 60 L 230 300" stroke="#0284c7" stroke-width="4"/>
          <!-- Hairpin -->
          <path d="M 230 300 C 230 330, 290 330, 290 300" stroke="#38bdf8" stroke-width="4"/>
          <!-- Ascending -->
          <path d="M 290 300 L 290 60" stroke="#f59e0b" stroke-width="6"/>

          <text x="260" y="45" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">LOOP OF HENLE (Multiplier)</text>

          <!-- Arrows & Exchanges Henle -->
          <!-- H2O leaving descending -->
          <path d="M 225 120 L 190 120" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-blue)"/>
          <text x="180" y="115" fill="#38bdf8" font-size="10">H₂O</text>
          <path d="M 225 200 L 190 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-blue)"/>
          <text x="180" y="195" fill="#38bdf8" font-size="10">H₂O</text>

          <!-- NaCl leaving ascending -->
          <path d="M 295 180 L 330 180" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-yellow)"/>
          <text x="335" y="185" fill="#f59e0b" font-size="10">NaCl (Active)</text>

          <!-- Vasa Recta (Center Right) -->
          <!-- Descending -->
          <path d="M 450 60 L 450 300" stroke="#ef4444" stroke-width="4"/>
          <!-- Hairpin -->
          <path d="M 450 300 C 450 330, 510 330, 510 300" stroke="#ef4444" stroke-width="4"/>
          <!-- Ascending -->
          <path d="M 510 300 L 510 60" stroke="#ef4444" stroke-width="4"/>

          <text x="480" y="45" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">VASA RECTA (Exchanger)</text>

          <!-- Collecting Duct (Far Right) -->
          <rect x="620" y="50" width="20" height="270" fill="#065f46" stroke="#10b981" stroke-width="2" rx="4"/>
          <text x="630" y="40" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">Collecting Duct</text>
          
          <!-- H2O leaving CD -->
          <path d="M 615 200 L 570 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-blue)"/>
          <text x="590" y="190" fill="#38bdf8" font-size="10">H₂O (ADH)</text>

          <!-- Urea leaving CD -->
          <path d="M 615 280 L 560 280" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow-purple)"/>
          <text x="585" y="275" fill="#c084fc" font-size="10">Urea</text>

          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/></marker>
            <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/></marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#c084fc"/></marker>
          </defs>
        </svg>`,
        caption: "Figure 2: Counter-current mechanism between Henle's loop multiplier and Vasa recta exchanger, showing NaCl transport, urea recycling, and gradient generation (300 to 1200 mOsmol/L).",
        guide: "WHAT TO OBSERVE: Osmolarity increases from 300 mOsmol/L in cortex to 1200 mOsmol/L in inner medulla. Ascending limb pumps NaCl into interstitium; collecting duct reabsorbs H2O under ADH to yield 1200 mOsmol/L hypertonic urine."
      },
      importantPoints: [
        "Henle's Loop = Counter-Current Multiplier; Vasa Recta = Counter-Current Exchanger.",
        "Medullary osmotic gradient range: $300 \\text{ mOsmol/L}$ (cortex) $\\to 1200 \\text{ mOsmol/L}$ (inner medulla).",
        "Primary solutes generating gradient: $NaCl$ (from ascending Henle limb) and $Urea$ (recycled from collecting duct)."
      ]
    },
    {
      heading: "4. Endocrine Regulation of Kidney Function — ADH, RAAS & ANF Mechanisms",
      paragraphs: [
        "Renal function and urine concentration are dynamically regulated by neural and hormonal pathways involving the Hypothalamus, Juxtaglomerular Apparatus (JGA), and Heart Atria.",
        "1. Hypothalamus & ADH / Vasopressin Pathway (Water Balance):",
        "• Dehydration / Fluid Loss / High Plasma Osmolarity $\\implies$ Stimulates Osmoreceptors in Hypothalamus $\\implies$ Signals Neurohypophysis (posterior pituitary) to release ADH (Antidiuretic Hormone) $\\implies$ ADH binds $V_2$ receptors on principal cells of DCT and Collecting Duct $\\implies$ Inserts Aquaporin-2 water channels $\\implies$ Massive conditional water reabsorption into blood $\\implies$ Prevents Diuresis and excretes concentrated urine. Once body fluid volume is restored, osmoreceptors switch off (Negative Feedback).",
        "• Alcohol / Ingestion of Water $\\implies$ Inhibits ADH release $\\implies$ DCT/Collecting duct become water-impermeable $\\implies$ Massive dilute urine output (Diuresis).",
        "2. Renin-Angiotensin-Aldosterone System (RAAS) (Blood Pressure & Na+ Balance):",
        "• Fall in Glomerular Blood Pressure / Renal Blood Flow / GFR $\\implies$ Activates JG cells in JGA to release RENIN into bloodstream $\\implies$ Renin cleaves plasma Angiotensinogen (produced by liver) into Angiotensin I $\\implies$ ACE (Angiotensin Converting Enzyme in lung capillaries) converts Angiotensin I into ANGIOTENSIN II.",
        "• Actions of Angiotensin II:",
        "  1) Potent Systemic Arteriolar Vasoconstrictor $\\implies$ Increases glomerular hydrostatic pressure and restores GFR.",
        "  2) Stimulates Adrenal Cortex to release ALDOSTERONE $\\implies$ Aldosterone acts on DCT to increase $Na^+$ and water reabsorption (excreting $K^+$ and $H^+$), expanding blood volume and pressure.",
        "3. Atrial Natriuretic Factor (ANF / ANP) Pathway (Safety Check on RAAS):",
        "• Excessive Blood Volume / High Venous Return $\\implies$ Stretches atrial walls of the heart $\\implies$ Secretes ANF into blood $\\implies$ ANF causes Systemic Vasodilation, promotes renal excretion of $Na^+$ (Natriuresis) and water, and INHIBITS Renin and Aldosterone release $\\implies$ Lowers blood pressure. ANF acts as a physiological check on RAAS."
      ],
      tables: [
        {
          title: "Comparison of Key Renal Hormones — ADH vs. Aldosterone vs. ANF",
          headers: ["Hormone", "Source Organ", "Primary Trigger for Release", "Target Tissue", "Primary Physiological Action"],
          rows: [
            ["ADH (Vasopressin)", "Hypothalamus (released by posterior pituitary)", "Dehydration / High plasma osmolarity (>280 mOsmol/L)", "DCT & Collecting Duct", "Inserts aquaporins; increases water reabsorption; prevents diuresis"],
            ["Aldosterone", "Adrenal Cortex (Zona Glomerulosa)", "Angiotensin II / High plasma K⁺ / Low Na⁺", "Late DCT & Collecting Duct", "Reabsorbs Na⁺ and water; secretes K⁺ and H⁺; raises blood pressure"],
            ["ANF / ANP", "Heart Atrial Myocytes", "High blood volume / Increased atrial stretch", "Afferent arterioles & JG cells", "Causes vasodilation; inhibits Renin & Aldosterone; promotes Na⁺ excretion"]
          ]
        }
      ],
      importantPoints: [
        "🔥 High-Yield NEET Rule: ANF is the ONLY hormone that INHIBITS Renin/RAAS and LOWERS blood pressure.",
        "Diabetes Insipidus is caused by ADH deficiency, leading to excretion of massive volumes of dilute urine (polydipsia & polyuria).",
        "Angiotensin II is a potent vasoconstrictor that raises glomerular hydrostatic pressure."
      ]
    },
    {
      heading: "5. Micturition Reflex & Normal Urine Composition",
      paragraphs: [
        "Micturition is the process of expelling urine from the urinary bladder through the urethra.",
        "Neural Physiology of Micturition Reflex:",
        "As urine formed by nephrons accumulates in the urinary bladder, the bladder wall expands, stretching the mucosa and smooth muscle. Stretch receptors on the bladder wall send afferent sensory nerve signals to the CNS (micturition reflex center in sacral spinal cord and pons). The CNS transmits efferent motor parasympathetic signals causing: 1) Synchronous contraction of the smooth Detrusor Muscle of the bladder wall, and 2) Simultaneous relaxation of the Internal Urethral Sphincter (involuntary smooth muscle). Voluntary relaxation of the External Urethral Sphincter (skeletal muscle) permits micturition.",
        "Characteristics of Normal Human Urine:",
        "• Volume: $1.0 \\text{ to } 1.5 \\text{ Liters}$ per day (varies with fluid intake).",
        "• Color: Transparent light yellow due to the pigment Urochrome (breakdown product of hemoglobin).",
        "• pH: Slightly acidic, average pH $\\approx 6.0$ (range 4.5–8.0 depending on diet).",
        "• Nitrogenous Content: Excretes $25 \\text{ to } 30 \\text{ grams}$ of UREA per 24 hours.",
        "Clinical Urine Analysis Identifiers:",
        "• Glycosuria: Presence of glucose in urine (indicates Diabetes Mellitus when blood glucose exceeds renal threshold $\\sim 180 \\text{ mg/dL}$).",
        "• Ketonuria: Presence of ketone bodies (acetoacetate, $\\beta$-hydroxybutyrate) in urine (indicates starvation or uncontrolled Diabetes Mellitus).",
        "• Hematuria: Presence of RBCs/blood in urine (indicates glomerular damage, kidney stones, or infection).",
        "• Proteinuria / Albuminuria: Presence of plasma proteins in urine (indicates glomerulonephritis or basement membrane damage)."
      ],
      importantPoints: [
        "Normal urine pH $= 6.0$; contains 25–30 g urea/day.",
        "Glycosuria + Ketonuria = Classic diagnostic hallmark of Diabetes Mellitus.",
        "Detrusor muscle contraction is mediated by Parasympathetic nerve fibers."
      ]
    },
    {
      heading: "6. Role of Other Organs in Excretion — Lungs, Liver & Skin",
      paragraphs: [
        "Although kidneys are the primary excretory organs, other organs contribute significantly to metabolic waste removal:",
        "1. Lungs: Excrete massive quantities of gaseous metabolic waste—approximately $200 \\text{ mL}$ of $CO_2$ per minute (representing $\\sim 18 \\text{ Liters}$ of $CO_2$ daily) along with significant volumes of water vapor during respiration.",
        "2. Liver: The largest gland in the human body. Deaminates excess amino acids to synthesize urea via the Ornithine cycle. The liver secretes bile containing bile pigments (Bilirubin and Biliverdin), Cholesterol, degraded Steroid Hormones, Vitamins, and inactivated Drugs into the digestive tract for elimination via feces.",
        "3. Skin (Sweat & Sebaceous Glands):",
        "• Sweat Glands (Sudoriferous Glands): Produce watery sweat containing $NaCl$, small amounts of urea, lactic acid, and amino acids. Primary role is Thermoregulation (cooling body via evaporation), but also assists in minor waste excretion.",
        "• Sebaceous Glands: Excrete sebum containing sterols, hydrocarbons, and fatty waxes, forming a protective oily layer over skin."
      ],
      importantPoints: [
        "Lungs eliminate $\\sim 200 \\text{ mL } CO_2/\\text{min}$ ($18 \\text{ L } CO_2/\\text{day}$).",
        "Bilirubin and Biliverdin are hemoglobin breakdown pigments excreted by the liver via bile into feces."
      ]
    },
    {
      heading: "7. Disorders of the Human Excretory System",
      paragraphs: [
        "1. Uraemia (Uremia): Accumulation of high concentrations of urea and other nitrogenous toxic wastes in the blood due to impaired renal filtration. Highly hazardous; can lead to multi-organ failure and death if untreated.",
        "2. Renal Failure (Kidney Failure): Cessation or severe reduction of kidney filtration function (acute or chronic), resulting in complete inability to maintain fluid, electrolyte, and waste homeostasis. Primary treatment is Hemodialysis or Kidney Transplantation.",
        "3. Renal Calculi (Kidney Stones): Insoluble masses of crystallized salts (most commonly Calcium Oxalate, Calcium Phosphate, or Uric Acid crystals) formed within the renal pelvis or calyces. Causes severe colicky flank pain and hematuria.",
        "4. Glomerulonephritis (Bright's Disease): Inflammation of the glomeruli of both kidneys, often triggered by autoimmune reactions or post-streptococcal immune complex deposition. Leads to hematuria, proteinuria, edema, and hypertension."
      ],
      importantPoints: [
        "Renal Calculi are composed predominantly of Calcium Oxalate crystals.",
        "Glomerulonephritis is characterized by glomerular inflammation, causing RBCs and proteins to leak into urine."
      ]
    },
    {
      heading: "8. Hemodialysis — Artificial Kidney Principle & Procedure",
      paragraphs: [
        "When a patient suffers from severe renal failure, urea and toxic wastes accumulate dangerously in the blood (Uraemia). In such cases, blood is cleared artificially using a Hemodialyzer (Artificial Kidney).",
        "Principle & Step-by-Step Procedure:",
        "1. Arterial Blood Withdrawal: Blood is drawn from a convenient artery (e.g. Radial artery) and cooled to $0^\\circ\\text{C}$.",
        "2. Addition of Anticoagulant: HEPARIN is added to the blood to prevent intravascular coagulation inside the machine.",
        "3. Dialysis Membrane Unit: Blood is pumped through porous coiled Cellophane tubes submerged in a tank filled with Dialyzing Fluid (Dialysate).",
        "4. Composition of Dialyzing Fluid: Dialyzing fluid has an exact mineral and osmotic composition equal to normal blood plasma EXCEPT THAT IT CONTAINS ZERO NITROGENOUS WASTES ($0\\% \\text{ Urea, Uric Acid, Creatinine}$).",
        "5. Concentration Gradient Diffusion: As blood flows through cellophane tubes, nitrogenous waste molecules (urea, uric acid) diffuse freely DOWN their concentration gradient from the blood across the cellophane membrane into the dialyzing fluid.",
        "6. Return to Body: The cleared, purified blood is warmed back to body temperature, mixed with ANTI-HEPARIN (to restore normal clotting ability), and pumped back into the patient's body through a convenient Vein (e.g. Radial vein)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="300" fill="#0f172a" rx="16"/>
          <text x="375" y="28" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">SCHEMATIC DIAGRAM OF HEMODIALYSIS (ARTIFICIAL KIDNEY)</text>
          
          <!-- Patient Arm / Blood Source -->
          <rect x="40" y="80" width="120" height="140" fill="#1e293b" stroke="#3b82f6" stroke-width="2" rx="10"/>
          <text x="100" y="110" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">PATIENT</text>
          <text x="100" y="135" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Artery (Outflow)</text>
          <text x="100" y="185" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">Vein (Inflow)</text>

          <!-- Heparin Addition -->
          <rect x="190" y="70" width="100" height="40" fill="#b91c1c" rx="6"/>
          <text x="240" y="94" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">+ HEPARIN</text>

          <!-- Dialyzer Tank -->
          <rect x="320" y="60" width="260" height="180" fill="#0284c7" stroke="#38bdf8" stroke-width="2" rx="12"/>
          <text x="450" y="85" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">DIALYZER TANK</text>

          <!-- Coiled Cellophane Tubing inside -->
          <path d="M 340 120 C 400 100, 400 160, 460 140 S 520 200, 560 180" stroke="#f59e0b" stroke-width="6" fill="none"/>
          <text x="450" y="125" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Cellophane Tubing (Porous)</text>

          <!-- Dialyzing Fluid -->
          <text x="450" y="210" fill="#ffffff" font-size="11" text-anchor="middle">Dialysate (No Urea/Nitrogenous Wastes)</text>

          <!-- Anti-Heparin Addition -->
          <rect x="610" y="170" width="100" height="40" fill="#15803d" rx="6"/>
          <text x="660" y="194" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">+ ANTI-HEPARIN</text>

          <!-- Arrows -->
          <path d="M 160 130 L 190 90" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)"/>
          <path d="M 290 90 L 320 120" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)"/>
          <path d="M 580 180 L 610 180" stroke="#4ade80" stroke-width="3" marker-end="url(#arrow-green)"/>
          <path d="M 660 170 L 610 140 L 160 180" stroke="#4ade80" stroke-width="3" marker-end="url(#arrow-green)"/>

          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80"/></marker>
          </defs>
        </svg>`,
        caption: "Figure 3: Hemodialysis setup showing arterial blood extraction, heparin addition, cellophane tube diffusion into waste-free dialysate, anti-heparin addition, and venous return.",
        guide: "WHAT TO OBSERVE: Blood drawn from artery, mixed with Heparin to prevent clotting, passed through porous cellophane tubes in dialyzing fluid. Wastes diffuse down concentration gradient. Cleared blood mixed with Anti-Heparin is returned via a vein."
      },
      importantPoints: [
        "Blood is drawn from an ARTERY (with Heparin) and returned to a VEIN (with Anti-Heparin).",
        "Dialyzing fluid is identical to plasma EXCEPT it lacks nitrogenous wastes, establishing a steep concentration gradient for urea diffusion."
      ]
    }
  ],

  formulae: [
    {
      title: "Net Filtration Pressure (NFP) Formula",
      formula: "NFP = GHP - (BCOP + CHP) = 60 - (32 + 18) = +10 \\text{ mmHg}",
      meaning: "Calculates the effective pressure driving ultrafiltration across glomerular capillaries.",
      whenToUse: "Use when evaluating renal filtration pressure values in numerical questions."
    },
    {
      title: "Glomerular Filtration Rate & Reabsorption Ratio",
      formula: "\\text{Percentage Reabsorbed} = \\frac{\\text{GFR} - \\text{Urine Volume}}{\\text{GFR}} \\times 100 = \\frac{180 - 1.5}{180} \\times 100 = 99.17\\%",
      meaning: "Demonstrates that over 99% of primary filtrate is retrieved by tubular reabsorption.",
      whenToUse: "Use in numerical questions on urine volume versus filtrate volume."
    }
  ],

  neetImportantPoints: [
    "🔥 Net Filtration Pressure (NFP) $= +10 \\text{ mmHg}$; Glomerular Hydrostatic Pressure $= 60 \\text{ mmHg}$.",
    "🔥 GFR $= 125 \\text{ mL/min} = 180 \\text{ L/day}$; Daily urine output $= 1.5 \\text{ Liters}$ (99% reabsorbed).",
    "🔥 PCT reabsorbs 100% of glucose & amino acids, and 70–80% of water and electrolytes.",
    "🔥 Descending limb of Henle is permeable to water; Ascending limb is impermeable to water but actively pumps NaCl.",
    "🔥 Medullary Osmotic Gradient ranges from $300 \\text{ mOsmol/L}$ (cortex) to $1200 \\text{ mOsmol/L}$ (papilla tip).",
    "🔥 ADH (Vasopressin) acts on DCT & Collecting Duct to increase aquaporins, preventing diuresis.",
    "🔥 Renin (from JG cells) converts Angiotensinogen $\\to$ Angiotensin I $\\to$ Angiotensin II $\\to$ Aldosterone.",
    "🔥 ANF (Atrial Natriuretic Factor) causes vasodilation, promotes Natriuresis, and inhibits Renin/RAAS.",
    "🔥 Micturition reflex is triggered by bladder stretch receptors; Detrusor contracts while sphincters relax.",
    "🔥 Hemodialysis draws blood from an ARTERY (+ Heparin) and returns cleared blood to a VEIN (+ Anti-Heparin)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Diabetes Insipidus with Diabetes Mellitus.",
      correctFact: "Diabetes Insipidus is caused by deficiency of ADH (Vasopressin), leading to excretion of massive dilute urine without glucose. Diabetes Mellitus is caused by Insulin deficiency/resistance, leading to Hyperglycemia, Glycosuria (glucose in urine), and Ketonuria.",
      whyItMattersForNEET: "Frequently tested diagnostic distinction in NEET UG."
    },
    {
      commonConfusion: "Assuming ANF increases blood pressure.",
      correctFact: "ANF (Atrial Natriuretic Factor) DECREASES blood pressure by causing vasodilation and promoting Na+/water excretion. RAAS and ADH INCREASE blood pressure.",
      whyItMattersForNEET: "Crucial hormonal check mechanism tested in NEET."
    },
    {
      commonConfusion: "Thinking Heparin is added before returning blood to the patient during Hemodialysis.",
      correctFact: "HEPARIN (anticoagulant) is added when blood is drawn from the artery into the machine. ANTI-HEPARIN is added before pumping cleared blood back into the patient's vein.",
      whyItMattersForNEET: "Direct sequence question on artificial kidney procedure."
    }
  ],

  quickRevision: [
    "Ultrafiltration: NFP = GHP - (BCOP + CHP) = 60 - (32 + 18) = +10 mmHg. GFR = 125 mL/min = 180 L/day.",
    "Reabsorption: PCT (70-80% H2O/ions, 100% glucose/amino acids), Descending Henle (water permeable), Ascending Henle (NaCl active pump, water impermeable), DCT/CD (conditional under ADH/Aldosterone).",
    "Counter-Current Mechanism: Henle loop multiplier + Vasa recta exchanger. Gradient 300 to 1200 mOsmol/L built by NaCl and Urea.",
    "Hormonal Control: ADH (water reabsorption, prevents diuresis), RAAS (Renin -> Angiotensin II -> Aldosterone, Na+/H2O reabsorption, raises BP), ANF (vasodilation, natriuresis, lowers BP).",
    "Micturition: Stretch receptors -> CNS -> Detrusor contraction + Sphincter relaxation.",
    "Normal Urine: 1.5 L/day, pH ~6.0, 25-30g urea/day.",
    "Accessory Organs: Lungs (18 L CO2/day), Liver (bile pigments), Skin (sweat/sebum).",
    "Hemodialysis: Artery (+ Heparin) -> Cellophane tube in nitrogen-free dialysate -> Vein (+ Anti-Heparin)."
  ],

  practiceQuestions: [
    {
      id: "prac-urine-1",
      question: "NEET-Style Practice Question — NOT A PYQ: If the Glomerular Hydrostatic Pressure (GHP) is 60 mmHg, Blood Colloidal Osmotic Pressure (BCOP) is 30 mmHg, and Capsular Hydrostatic Pressure (CHP) is 20 mmHg, what is the Net Filtration Pressure (NFP)?",
      options: [
        "+10 mmHg",
        "+20 mmHg",
        "+50 mmHg",
        "+110 mmHg"
      ],
      correctAnswerIndex: 0,
      explanation: "Net Filtration Pressure (NFP) = GHP - (BCOP + CHP) = 60 mmHg - (30 mmHg + 20 mmHg) = 60 - 50 = +10 mmHg.",
      conceptTested: "Calculation of Net Filtration Pressure using Starling forces"
    },
    {
      id: "prac-urine-2",
      question: "NEET-Style Practice Question — NOT A PYQ: What will be the physiological consequence of inhibiting the release of Antidiuretic Hormone (ADH) from the posterior pituitary?",
      options: [
        "Increased water reabsorption in DCT resulting in hypertonic urine",
        "Decreased water permeability in DCT and Collecting Duct resulting in excretion of large volumes of dilute urine (Diuresis)",
        "Activation of the Renin-Angiotensin system and severe hypertension",
        "Complete cessation of glomerular filtration"
      ],
      correctAnswerIndex: 1,
      explanation: "ADH inserts aquaporin water channels in DCT and Collecting Duct. Inhibiting ADH renders these segments water-impermeable, preventing conditional water reabsorption and causing excretion of massive dilute urine (Diuresis / Diabetes Insipidus).",
      conceptTested: "Physiological function of ADH on renal tubules"
    },
    {
      id: "prac-urine-3",
      question: "NEET-Style Practice Question — NOT A PYQ: Which of the following correctly describes the chemical composition of the dialyzing fluid used in hemodialysis?",
      options: [
        "Contains high concentration of urea and creatinine to attract water by osmosis.",
        "Exact same composition as blood plasma except that it lacks all nitrogenous wastes.",
        "Contains heparin and high concentrations of plasma proteins.",
        "Contains hypertonic sodium chloride to absorb excess blood cells."
      ],
      correctAnswerIndex: 1,
      explanation: "Dialyzing fluid has the exact same mineral and osmotic composition as normal blood plasma EXCEPT that it contains ZERO nitrogenous wastes (urea, uric acid, creatinine), allowing wastes in blood to diffuse passively down their concentration gradient into the dialysate.",
      conceptTested: "Principle of Hemodialysis and dialyzing fluid composition"
    }
  ],

  pyqs: [
    {
      id: "pyq-urine-2023",
      year: 2023,
      exam: "NEET UG",
      question: "Which of the following statements are correct regarding renal regulation?\nA. An excessive loss of body fluid switches off osmoreceptors.\nB. ADH facilitates water reabsorption to prevent diuresis.\nC. ANF causes vasodilation.\nD. ADH causes an increase in blood pressure.\nE. ADH is responsible for a decrease in GFR.",
      options: [
        "A, B and E only",
        "C, D and E only",
        "A and C only",
        "B, C and D only"
      ],
      correctAnswerIndex: 3,
      explanation: "Statement B is correct (ADH prevents diuresis). Statement C is correct (ANF causes vasodilation). Statement D is correct (ADH causes vasoconstriction at high levels, raising blood pressure and GFR). Statement A is incorrect (fluid loss SWITCHES ON osmoreceptors). Statement E is incorrect (ADH increases or maintains GFR). Thus, B, C, and D are correct.",
      conceptTested: "Hormonal regulation of kidney function (ADH, ANF)",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Question Paper"
    },
    {
      id: "pyq-urine-2020",
      year: 2020,
      exam: "NEET UG",
      question: "Presence of which of the following conditions in urine are indicative of Diabetes Mellitus?",
      options: [
        "Uremia and Ketonuria",
        "Uremia and Renal Calculi",
        "Ketonuria and Glycosuria",
        "Renal calculi and Hyperglycemia"
      ],
      correctAnswerIndex: 2,
      explanation: "Presence of glucose in urine (Glycosuria) and ketone bodies in urine (Ketonuria) are diagnostic clinical indicators of uncontrolled Diabetes Mellitus.",
      conceptTested: "Clinical analysis of urine and Diabetes Mellitus indicators",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Question Paper"
    },
    {
      id: "pyq-urine-2019",
      year: 2019,
      exam: "NEET UG",
      question: "Which of the following factors is responsible for the formation of concentrated urine?",
      options: [
        "Hydrostatic pressure during glomerular filtration",
        "Low levels of antidiuretic hormone",
        "Maintaining hyperosmolarity towards inner medullary interstitium in the kidneys",
        "Secretion of erythropoietin by Juxtaglomerular complex"
      ],
      correctAnswerIndex: 2,
      explanation: "Maintaining hyperosmolarity in the inner medullary interstitium (from 300 mOsmol/L in cortex to 1200 mOsmol/L in medulla) via the counter-current mechanism enables water reabsorption from collecting ducts, producing concentrated urine.",
      conceptTested: "Counter-current mechanism and urine concentration",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Question Paper"
    }
  ],

  neetMarksPotential: {
    averageQuestionsPerYear: 3,
    scoreWeightage: "12 Marks",
    difficultyRating: "High",
    highYieldStatus: true
  }
};
