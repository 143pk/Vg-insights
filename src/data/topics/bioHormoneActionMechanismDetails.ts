import { DetailedTopicContent } from '../../types/neet';

export const bioHormoneActionMechanismDetails: DetailedTopicContent = {
  topicId: "bio-hormone-action-mechanism",
  topicName: "Mechanism of Hormone Action",
  subject: "Biology",
  class: "Class 11",
  classification: "Human Physiology",
  chapter: "Chemical Coordination and Integration",

  whatIsThisTopic: "An in-depth teaching-level explanation of how hormones interact with specific target cell receptors, detailing chemical classifications of hormones, membrane-bound receptor signaling via second messengers (cAMP, IP3, Ca²⁺), and intracellular nuclear receptor regulation of gene transcription.",

  basicIdea: [
    "Hormones exert their biochemical effects on target tissues by binding specifically to target cell receptors, forming a Hormone-Receptor Complex.",
    "Target cells possess specific receptors; each receptor is specific to one hormone only. Receptors located on the cell membrane are Membrane-bound Receptors, while those inside the cell are Intracellular Receptors (mostly nuclear receptors).",
    "Chemical classification divides hormones into 4 groups: 1) Peptide/Protein (Insulin, Glucagon, Pituitary/Hypothalamic hormones), 2) Steroids (Cortisol, Aldosterone, Testosterone, Estrogen, Progesterone), 3) Iodothyronines (T3, T4), and 4) Amino acid derivatives (Epinephrine, Norepinephrine, Melatonin).",
    "Water-soluble hormones (Peptides & Amino acid derivatives) bind to membrane-bound receptors because they cannot cross the lipid bilayer. They generate SECOND MESSENGERS (cAMP, IP3, Ca²⁺) to activate protein kinases and alter cellular metabolism.",
    "Lipid-soluble hormones (Steroids & Iodothyronines) easily diffuse across the plasma membrane and bind to intracellular/nuclear receptors. The hormone-receptor complex interacts directly with nuclear DNA (genome) to regulate gene expression and mRNA transcription.",
    "Membrane-bound receptor pathways produce rapid, short-term physiological responses, whereas intracellular receptor pathways produce slower, long-lasting developmental and tissue growth responses."
  ],

  importantTerms: [
    {
      term: "Hormone Receptor",
      definition: "Specific protein molecules located on the plasma membrane or inside the cytoplasm/nucleus of target cells that bind exclusively to a specific hormone with high affinity.",
      neetNote: "Receptor binding is highly specific; absence of specific receptors renders tissue non-responsive to the circulating hormone."
    },
    {
      term: "Hormone-Receptor Complex",
      definition: "The biochemical complex formed when a hormone binds to its specific receptor, triggering conformational changes that initiate cellular signaling cascades.",
      neetNote: "Formation of this complex is the mandatory first step in all hormone action mechanisms."
    },
    {
      term: "Second Messenger",
      definition: "Intracellular signaling molecules (e.g., cAMP, IP3, DAG, Ca²⁺) generated inside target cells following the binding of a water-soluble first messenger hormone to membrane-bound receptors.",
      neetNote: "Crucial NEET distinction: Steroid hormones do NOT generate second messengers."
    },
    {
      term: "Cyclic AMP (cAMP)",
      definition: "A key second messenger produced from ATP by the enzyme Adenylate Cyclase upon membrane receptor activation, which in turn activates Protein Kinase A.",
      neetNote: "Classic second messenger example in NCERT diagrams (e.g., FSH and Epinephrine signaling)."
    },
    {
      term: "Intracellular / Nuclear Receptor",
      definition: "Receptors located in the cytoplasm or nucleus of target cells that bind lipid-soluble hormones (steroids and thyroid hormones).",
      neetNote: "Nuclear receptors function as ligand-dependent transcription factors interacting directly with chromatin."
    },
    {
      term: "Hormone Response Element (HRE)",
      definition: "Specific nucleotide sequences in nuclear DNA to which the activated steroid hormone-receptor complex binds to modulate gene transcription.",
      neetNote: "Underlies the direct genomic regulatory mechanism of steroid and thyroid hormones."
    },
    {
      term: "Signal Amplification Cascade",
      definition: "A metabolic domino effect where a single hormone molecule binding to a membrane receptor leads to the generation of thousands of second messengers and millions of activated enzyme molecules.",
      neetNote: "Explains why hormones are effective at extremely minute (nanomolar/picomolar) concentrations."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Chemical Classification of Hormones & Receptor Specificity",
      paragraphs: [
        "Hormones act as intercellular chemical messengers, but they affect ONLY specific target tissues. Target tissue cells are characterized by the presence of specific protein molecules called Hormone Receptors. Receptors are highly specific—each receptor type binds exclusively to one specific hormone.",
        "Anatomically and structurally, hormone receptors are categorized into two primary classes:",
        "1. Membrane-Bound Receptors: Embedded in the plasma membrane facing the extracellular fluid. They bind water-soluble, lipid-insoluble hormones that cannot cross the hydrophobic lipid bilayer.",
        "2. Intracellular Receptors: Located within the target cell cytoplasm or nucleus (mostly nuclear receptors). They bind lipid-soluble hormones that easily permeate the plasma membrane.",
        "Based on chemical structure, hormones are classified into four major chemical groups:",
        "• Peptide, Polypeptide, and Protein Hormones: Water-soluble. Includes Insulin, Glucagon, Pituitary hormones (GH, TSH, ACTH, LH, FSH, PRL), Hypothalamic hormones, Thymosins, Parathyroid Hormone (PTH), Thyrocalcitonin (TCT), ANF, and GI tract hormones.",
        "• Steroid Hormones: Lipid-soluble derivatives of cholesterol. Includes Cortisol, Aldosterone, Testosterone, Estrogen, and Progesterone.",
        "• Iodothyronines: Lipid-soluble iodinated amino acid derivatives of tyrosine. Includes Thyroid hormones (T3 - Triiodothyronine and T4 - Tetraiodothyronine / Thyroxine).",
        "• Amino Acid Derivatives: Small water-soluble molecules derived from specific amino acids. Includes Epinephrine and Norepinephrine (derived from tyrosine) and Melatonin (derived from tryptophan)."
      ],
      tables: [
        {
          title: "NCERT Chemical Classification of Hormones",
          headers: ["Chemical Group", "Solubility", "NCERT Hormone Examples", "Primary Receptor Location", "Primary Action Mode"],
          rows: [
            ["Peptide / Protein", "Water-Soluble", "Insulin, Glucagon, Pituitary & Hypothalamic hormones, PTH, TCT", "Membrane-bound", "Second Messengers (cAMP, IP3, Ca²⁺)"],
            ["Steroids", "Lipid-Soluble", "Cortisol, Aldosterone, Testosterone, Estrogen, Progesterone", "Intracellular (Nuclear)", "Gene expression & Chromatin binding"],
            ["Iodothyronines", "Lipid-Soluble", "Thyroid hormones (T3 and T4)", "Intracellular (Nuclear)", "Gene transcription & Protein synthesis"],
            ["Amino Acid Derivatives", "Water-Soluble", "Epinephrine (Adrenaline), Norepinephrine", "Membrane-bound", "Second Messengers (cAMP, Ca²⁺)"]
          ]
        }
      ],
      importantPoints: [
        "Receptors are specific: absence of a specific receptor makes a cell non-responsive to that hormone.",
        "Steroids and Thyroid hormones are lipid-soluble and act via intracellular receptors.",
        "Peptides and Catecholamines are water-soluble and act via membrane-bound receptors."
      ]
    },
    {
      heading: "2. Water-Soluble Hormones: Membrane Receptors & Second Messengers",
      paragraphs: [
        "Hormones that are water-soluble (peptides, proteins, and amino acid derivatives like Epinephrine and FSH) cannot pass through the hydrophobic lipid core of the plasma membrane. Therefore, they exert their effects through Membrane-Bound Receptors located on the extracellular face of target cell membranes.",
        "Detailed Step-by-Step Mechanism for Water-Soluble Hormones:",
        "Step 1: Hormone (First Messenger) Binding",
        "The hormone molecule circulates in blood and binds specifically to the extracellular domain of its membrane-bound receptor on the target cell surface, forming the Hormone-Receptor Complex.",
        "Step 2: Receptor Conformational Change & Enzyme Activation",
        "Binding induces a structural change in the receptor protein, which activates membrane-associated G-proteins (G-stimulatory proteins). The activated G-protein interacts with and activates an effector enzyme on the inner membrane face, such as Adenylate Cyclase or Phospholipase C.",
        "Step 3: Generation of Second Messengers",
        "The activated effector enzyme converts intracellular precursors into SECOND MESSENGERS:",
        "• Adenylate Cyclase converts ATP into Cyclic AMP (cAMP).",
        "• Phospholipase C cleaves membrane PIP2 into Inositol Trisphosphate (IP3) and Diacylglycerol (DAG). IP3 triggers Ca²⁺ release from the endoplasmic reticulum into the cytoplasm.",
        "• Cyclic AMP (cAMP), IP3, DAG, and Calcium ions (Ca²⁺) serve as NCERT-listed Second Messengers.",
        "Step 4: Activation of Protein Kinases & Biochemical Response",
        "Second messengers bind to and activate specific intracellular enzymes, such as Protein Kinase A (PKA). Kinases phosphorylate key cellular proteins and metabolic enzymes, altering their activity (activation or inhibition).",
        "Step 5: Physiological / Metabolic Outcome",
        "Altered enzymatic activity modifies cellular metabolism, resulting in specific physiological outcomes (e.g., FSH stimulating follicular cell growth and estrogen production in ovaries; Epinephrine triggering glycogen breakdown into glucose in hepatocytes)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="600" height="280" fill="#f8fafc" rx="12"/>
          
          <!-- Plasma Membrane -->
          <rect x="180" y="20" width="30" height="240" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <text x="195" y="140" font-size="11" font-weight="bold" fill="#334155" transform="rotate(-90,195,140)" text-anchor="middle">Plasma Membrane (Lipid Bilayer)</text>

          <!-- Extracellular Fluid (Left) -->
          <text x="90" y="35" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Extracellular Fluid</text>
          
          <!-- Hormone (e.g., FSH / Epinephrine) -->
          <circle cx="50" cy="90" r="14" fill="#0284c7"/>
          <text x="50" y="94" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Hormone</text>
          <text x="50" y="120" font-size="9" fill="#0369a1" text-anchor="middle">(1st Messenger)</text>

          <!-- Arrow Hormone to Receptor -->
          <line x1="65" y1="90" x2="165" y2="90" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow-blue)"/>

          <!-- Membrane Receptor -->
          <rect x="165" y="65" width="45" height="50" fill="#38bdf8" stroke="#0284c7" stroke-width="2" rx="6"/>
          <text x="187" y="93" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">Receptor</text>

          <!-- Intracellular Fluid (Right) -->
          <text x="390" y="35" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Intracellular Cytoplasm</text>

          <!-- Response 1: Second Messenger -->
          <rect x="240" y="65" width="140" height="50" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="6"/>
          <text x="310" y="85" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">Response 1:</text>
          <text x="310" y="102" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">Second Messengers</text>
          <text x="310" y="125" font-size="9" fill="#15803d" text-anchor="middle">(cAMP, IP3, Ca²⁺)</text>

          <!-- Arrow Receptor -> Response 1 -->
          <line x1="210" y1="90" x2="235" y2="90" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-green)"/>

          <!-- Response 2: Biochemical Responses -->
          <rect x="420" y="65" width="150" height="50" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="6"/>
          <text x="495" y="85" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Response 2:</text>
          <text x="495" y="102" font-size="10" fill="#92400e" text-anchor="middle">Biochemical Cascade</text>
          <text x="495" y="125" font-size="9" fill="#b45309" text-anchor="middle">(Enzyme Activation)</text>

          <!-- Arrow Response 1 -> Response 2 -->
          <line x1="380" y1="90" x2="415" y2="90" stroke="#d97706" stroke-width="2" marker-end="url(#arrow-amber)"/>

          <!-- Response 3: Physiological Responses -->
          <rect x="300" y="180" width="220" height="65" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="8"/>
          <text x="410" y="202" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Response 3: Physiological Outcome</text>
          <text x="410" y="222" font-size="10" fill="#7f1d1d" text-anchor="middle">e.g., Follicular Growth (FSH)</text>
          <text x="410" y="236" font-size="10" fill="#7f1d1d" text-anchor="middle">or Glycogenolysis (Epinephrine)</text>

          <!-- Arrow Response 2 -> Response 3 -->
          <path d="M 495 115 L 495 150 L 410 150 L 410 175" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>

          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#0284c7"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/></marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#d97706"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/></marker>
          </defs>
        </svg>`,
        caption: "Mechanism of Water-Soluble Hormone Action (NCERT Diagram Pattern): Membrane Receptor -> Second Messengers (cAMP/IP3/Ca²⁺) -> Biochemical Cascade -> Physiological Response.",
        guide: "Water-soluble hormones DO NOT enter the target cell. They generate second messengers inside the cell."
      },
      importantPoints: [
        "Water-soluble hormones (FSH, LH, Epinephrine, Insulin) bind to membrane-bound receptors.",
        "They do NOT enter the cell directly.",
        "NCERT Second Messengers: Cyclic AMP (cAMP), IP3, and Calcium ions (Ca²⁺).",
        "Cascade amplification allows minute hormone amounts to trigger huge cellular responses."
      ]
    },
    {
      heading: "3. Lipid-Soluble Hormones: Intracellular Receptors & Gene Regulation",
      paragraphs: [
        "Lipid-soluble hormones—comprising Steroids (Cortisol, Aldosterone, Testosterone, Estrogen, Progesterone) and Iodothyronines (Thyroid hormones T3 and T4)—are hydrophobic and non-polar. Consequently, they easily dissolve through the phospholipid bilayer of the plasma membrane into the target cell cytoplasm.",
        "Detailed Step-by-Step Mechanism for Lipid-Soluble Hormones:",
        "Step 1: Direct Membrane Diffusion",
        "The circulating steroid or thyroid hormone diffuses freely across the plasma membrane into the cytoplasm of the target cell.",
        "Step 2: Formation of Intracellular Hormone-Receptor Complex",
        "Inside the cell, the hormone binds to its specific Intracellular Receptor (present in the cytoplasm or inside the nucleus). Binding induces a conformational change, converting the receptor into an active ligand-bound transcription factor.",
        "Step 3: Translocation & Chromatin Binding",
        "The activated Hormone-Receptor Complex enters the nucleus (if bound in cytoplasm) and binds to specific regulatory DNA sequences known as Hormone Response Elements (HRE) on target genes within the genome/chromatin.",
        "Step 4: Regulation of Gene Expression (Transcription)",
        "Binding to HRE alters gene transcription, either stimulating or repressing RNA Polymerase to produce specific messenger RNA (mRNA) strands.",
        "Step 5: Translation & Protein Synthesis",
        "The transcribed mRNA leaves the nucleus and undergoes ribosomal translation in the cytoplasm to produce new functional or structural proteins (enzymes, growth regulators).",
        "Step 6: Tissue Growth & Physiological Outcome",
        "The newly synthesized proteins alter cellular physiology and drive long-term physiological and developmental outcomes (e.g., Estrogen regulating uterine cell multiplication, tissue differentiation, and sexual maturation)."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
          <rect width="600" height="280" fill="#f8fafc" rx="12"/>
          
          <!-- Plasma Membrane -->
          <rect x="120" y="20" width="16" height="240" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          
          <!-- Extracellular Steroid Hormone -->
          <ellipse cx="50" cy="80" rx="18" ry="12" fill="#c084fc"/>
          <text x="50" y="84" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Steroid</text>
          <text x="50" y="110" font-size="9" fill="#7e22ce" text-anchor="middle">(Estrogen / Cortisol)</text>

          <!-- Diffusion through Membrane -->
          <line x1="70" y1="80" x2="160" y2="80" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow-purple)"/>

          <!-- Nuclear Membrane -->
          <rect x="280" y="40" width="290" height="200" fill="#fae8ff" stroke="#c084fc" stroke-width="2" rx="12"/>
          <text x="425" y="60" font-size="12" font-weight="bold" fill="#581c87" text-anchor="middle">NUCLEUS (Genome / Chromatin)</text>

          <!-- Intracellular Receptor & Binding -->
          <rect x="175" y="65" width="40" height="30" fill="#f472b6" rx="4"/>
          <text x="195" y="83" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">Receptor</text>

          <!-- Hormone-Receptor Complex entering Nucleus -->
          <line x1="220" y1="80" x2="310" y2="80" stroke="#db2777" stroke-width="2" marker-end="url(#arrow-pink)"/>

          <!-- Genome DNA Interaction -->
          <path d="M 320 100 Q 350 80 380 100 T 440 100 T 500 100" fill="none" stroke="#7e22ce" stroke-width="3"/>
          <text x="410" y="125" font-size="10" font-weight="bold" fill="#6b21a8" text-anchor="middle">Hormone-Receptor Complex + Genome</text>

          <!-- Transcription mRNA -->
          <line x1="410" y1="135" x2="410" y2="160" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue2)"/>
          <rect x="360" y="165" width="100" height="25" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4"/>
          <text x="410" y="181" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">mRNA Transcription</text>

          <!-- Translation & Proteins -->
          <path d="M 410 190 L 410 210 L 220 210" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-green2)"/>
          <rect x="50" y="190" width="160" height="45" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="6"/>
          <text x="130" y="208" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">Proteins / Tissue Growth</text>
          <text x="130" y="224" font-size="9" fill="#166534" text-anchor="middle">(e.g., Uterine differentiation)</text>

          <defs>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7"/></marker>
            <marker id="arrow-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#db2777"/></marker>
            <marker id="arrow-blue2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
            <marker id="arrow-green2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/></marker>
          </defs>
        </svg>`,
        caption: "Mechanism of Lipid-Soluble (Steroid) Hormone Action (NCERT Diagram Pattern): Hormone diffuses across membrane -> Intracellular Nuclear Receptor -> Genome Interaction -> mRNA Transcription -> Translation -> Tissue Growth & Differentiation.",
        guide: "Steroid hormones cross the plasma membrane and interact directly with intracellular nuclear receptors and genome DNA."
      },
      importantPoints: [
        "Lipid-soluble hormones (Steroids & Iodothyronines) easily diffuse across the plasma membrane.",
        "They bind to INTRA-CELLULAR nuclear receptors.",
        "The hormone-receptor complex interacts with genome DNA to regulate gene transcription.",
        "They do NOT generate second messengers; their actions are slower but long-lasting."
      ]
    },
    {
      heading: "4. Side-by-Side Comparison of Water-Soluble vs Lipid-Soluble Mechanisms",
      paragraphs: [
        "To excel in NEET UG MCQs, candidates must thoroughly contrast the operational differences between the membrane-bound second messenger pathway (Peptides/Catecholamines) and the intracellular nuclear gene regulation pathway (Steroids/Iodothyronines).",
        "Key Comparative Parameters:",
        "1. Entry into Target Cell: Water-soluble hormones NEVER enter the cytoplasm; lipid-soluble hormones freely enter the cytoplasm and nucleus.",
        "2. Receptor Location: Outer plasma membrane face vs cytoplasmic/nuclear matrix.",
        "3. Second Messenger Role: Mandatory for water-soluble hormones (cAMP, IP3, Ca²⁺); ABSENT in lipid-soluble hormone signaling.",
        "4. Primary Target of Action: Cytoplasmic enzymes and protein kinases vs nuclear chromatin and genomic DNA.",
        "5. Onset & Duration of Response: Rapid onset (seconds to minutes) with brief duration vs slow onset (hours to days) with long-lasting developmental effects."
      ],
      tables: [
        {
          title: "Water-Soluble vs Lipid-Soluble Hormone Mechanism Comparison",
          headers: ["Feature / Parameter", "Water-Soluble Hormones (Group I)", "Lipid-Soluble Hormones (Group II)"],
          rows: [
            ["Hormone Types", "Peptides, Proteins, Catecholamines (FSH, Insulin, Epinephrine)", "Steroids (Cortisol, Estrogen, Testosterone) & Iodothyronines (T3, T4)"],
            ["Lipid Solubility", "Insoluble in membrane lipids (Hydrophilic)", "Soluble in membrane lipids (Lipophilic)"],
            ["Receptor Position", "Membrane-Bound (Cell Surface)", "Intracellular (Nuclear / Cytoplasmic)"],
            ["Second Messengers", "REQUIRED (cAMP, IP3, Ca²⁺, DAG)", "NOT REQUIRED (Absent)"],
            ["Direct Genome Interaction", "NO direct interaction with DNA", "YES (Binds to Hormone Response Elements on DNA)"],
            ["Primary Cellular Effect", "Alters enzyme activity via kinase phosphorylation", "Regulates gene transcription (mRNA) & protein synthesis"],
            ["Speed of Physiological Action", "Rapid & Short-lived (Minutes)", "Slower & Long-lasting (Hours / Days)"]
          ]
        }
      ],
      importantPoints: [
        "Peptides: Membrane receptor + Second messenger (cAMP, IP3, Ca²⁺) -> Enzyme modification.",
        "Steroids: Intracellular receptor + Genome interaction -> mRNA transcription -> Protein synthesis.",
        "Memorize exact NCERT examples for both categories for NEET matching questions."
      ]
    }
  ],

  formulae: [
    {
      title: "Membrane Signaling Pathway Equation",
      formula: "\\text{Peptide Hormone} + \\text{Membrane Receptor} \\rightarrow \\text{cAMP / IP}_3 / Ca^{2+} \\rightarrow \\text{Kinase Activation} \\rightarrow \\text{Biochemical Response}",
      meaning: "Water-soluble hormones bind membrane receptors to produce second messengers that activate protein kinases without entering the cell.",
      "whenToUse": "Use when answering questions on peptide hormone signal transduction and second messenger generation."
    },
    {
      title: "Genomic Signaling Pathway Equation",
      formula: "\\text{Steroid Hormone} + \\text{Intracellular Receptor} \\rightarrow \\text{Complex} + \\text{Genome DNA} \\rightarrow \\text{mRNA Transcription} \\rightarrow \\text{Protein Synthesis}",
      meaning: "Lipid-soluble hormones enter cells and bind nuclear receptors to regulate gene expression directly at the genome level.",
      "whenToUse": "Use for NEET questions on steroid hormone action, gene transcription, and long-term tissue growth."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto">
      <rect width="600" height="280" fill="#f8fafc" rx="12"/>
      
      <!-- Side-by-Side Dual Pathway Comparison -->
      <line x1="300" y1="20" x2="300" y2="260" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4"/>

      <!-- Left: Water Soluble -->
      <text x="150" y="30" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">PEPTIDE / WATER-SOLUBLE</text>
      <rect x="30" y="45" width="240" height="215" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5" rx="8"/>
      <text x="150" y="70" font-size="10" font-weight="bold" fill="#075985" text-anchor="middle">• Membrane-Bound Receptor</text>
      <text x="150" y="95" font-size="10" fill="#0369a1" text-anchor="middle">• Generates SECOND MESSENGERS</text>
      <text x="150" y="115" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">(cAMP, IP3, Ca²⁺)</text>
      <text x="150" y="140" font-size="10" fill="#0369a1" text-anchor="middle">• Activates Protein Kinases</text>
      <text x="150" y="165" font-size="10" fill="#0369a1" text-anchor="middle">• Modifies Enzymatic Activity</text>
      <text x="150" y="190" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">• Rapid, Short-term Response</text>
      <text x="150" y="215" font-size="9" fill="#075985" text-anchor="middle">e.g., FSH, LH, Epinephrine, Insulin</text>

      <!-- Right: Lipid Soluble -->
      <text x="450" y="30" font-size="12" font-weight="bold" fill="#6b21a8" text-anchor="middle">STEROID / LIPID-SOLUBLE</text>
      <rect x="330" y="45" width="240" height="215" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5" rx="8"/>
      <text x="450" y="70" font-size="10" font-weight="bold" fill="#581c87" text-anchor="middle">• Intracellular Nuclear Receptor</text>
      <text x="450" y="95" font-size="10" fill="#6b21a8" text-anchor="middle">• NO Second Messengers</text>
      <text x="450" y="115" font-size="10" fill="#6b21a8" text-anchor="middle">• Binds directly to Genome / DNA</text>
      <text x="450" y="140" font-size="10" fill="#6b21a8" text-anchor="middle">• Regulates mRNA Transcription</text>
      <text x="450" y="165" font-size="10" fill="#6b21a8" text-anchor="middle">• Synthesizes New Proteins</text>
      <text x="450" y="190" font-size="10" font-weight="bold" fill="#6b21a8" text-anchor="middle">• Slower, Long-lasting Growth Response</text>
      <text x="450" y="215" font-size="9" fill="#581c87" text-anchor="middle">e.g., Estrogen, Cortisol, Testosterone, T3/T4</text>
    </svg>`,
    caption: "Side-by-Side Dual Pathway Summary: Membrane-Bound Second Messenger Pathway vs Intracellular Genomic Regulation Pathway."
  },

  neetImportantPoints: [
    "Receptors are specific: each receptor binds exclusively to one hormone.",
    "NCERT Second Messengers for water-soluble hormones: cAMP, IP3, and Calcium ions (Ca²⁺).",
    "Steroid hormones (Cortisol, Aldosterone, Estrogen, Progesterone, Testosterone) and Iodothyronines (T3/T4) interact with INTRA-CELLULAR receptors.",
    "Steroid hormones do NOT generate second messengers.",
    "The steroid hormone-receptor complex regulates gene expression by interacting with chromatin/DNA in the nucleus.",
    "Peptide hormones (FSH, Insulin, Glucagon) bind to membrane-bound receptors and trigger second messengers."
  ],

  commonConfusions: [
    {
      commonConfusion: "Steroid hormones generate cAMP as a second messenger.",
      correctFact: "Steroid hormones (lipid-soluble) cross the plasma membrane and bind directly to intracellular nuclear receptors to regulate gene expression. They do NOT generate second messengers. Second messengers (cAMP, IP3, Ca²⁺) are generated ONLY by water-soluble peptide hormones and amino acid derivatives.",
      whyItMattersForNEET: "Direct, high-yield conceptual question frequently tested in NEET UG."
    },
    {
      commonConfusion: "Thyroid hormones (T3/T4) bind to membrane-bound receptors.",
      correctFact: "Thyroid hormones (Iodothyronines) are lipophilic amino acid derivatives that freely permeate target cell membranes and bind to INTRA-CELLULAR nuclear receptors to regulate gene expression.",
      whyItMattersForNEET: "Frequently tested exception question in hormone mechanism MCQs."
    },
    {
      commonConfusion: "FSH enters the cytoplasm to regulate gene expression directly.",
      correctFact: "FSH is a protein hormone (water-soluble) that binds to membrane-bound receptors on the ovarian cell surface and generates second messengers (cAMP) to stimulate biochemical responses. It does NOT enter the cytoplasm.",
      whyItMattersForNEET: "NCERT diagram-based question in NEET UG."
    }
  ],

  quickRevision: [
    "Peptide / Protein Hormones: Water-soluble -> Membrane-bound receptor -> Second messengers (cAMP, IP3, Ca²⁺) -> Biochemical response.",
    "Steroid & Iodothyronine Hormones: Lipid-soluble -> Cross membrane -> Intracellular nuclear receptor -> Complex + Genome DNA -> mRNA transcription -> New protein synthesis.",
    "Second Messengers listed in NCERT: Cyclic AMP (cAMP), Inositol Trisphosphate (IP3), Calcium ions (Ca²⁺).",
    "Estrogen, Cortisol, Testosterone, Aldosterone = Steroids = Nuclear Receptors.",
    "FSH, LH, TSH, ACTH, Insulin, Glucagon, Epinephrine = Peptides/Amines = Membrane Receptors."
  ],

  practiceQuestions: [
    {
      id: "pq-bio-mech-1",
      question: "Which of the following hormones acts by binding to intracellular receptors and modulating gene transcription?",
      options: [
        "Follicle Stimulating Hormone (FSH)",
        "Insulin",
        "Estrogen",
        "Epinephrine"
      ],
      correctAnswerIndex: 2,
      explanation: "Estrogen is a steroid hormone (lipid-soluble) that crosses the plasma membrane and binds to intracellular nuclear receptors, regulating gene expression and mRNA transcription. FSH, Insulin, and Epinephrine are water-soluble and bind to membrane-bound receptors.",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-mech-2",
      question: "Which of the following is NOT a second messenger in hormone action as explicitly defined in NCERT?",
      options: [
        "Cyclic AMP (cAMP)",
        "Inositol Trisphosphate (IP3)",
        "Calcium ions (Ca²⁺)",
        "Sodium ions (Na⁺)"
      ],
      correctAnswerIndex: 3,
      explanation: "NCERT explicitly lists cAMP, IP3, and Ca²⁺ as second messengers generated inside target cells following water-soluble hormone binding to membrane receptors. Sodium ions (Na⁺) are not classified as second messengers in this context.",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-mech-3",
      question: "When Follicle Stimulating Hormone (FSH) binds to its specific receptor on the ovarian cell membrane, what is the immediate intracellular event that occurs next?",
      options: [
        "Direct binding of FSH to chromatin DNA",
        "Generation of second messenger (cAMP)",
        "Translation of mRNA on ribosomes",
        "Diffusion of FSH through the lipid bilayer"
      ],
      correctAnswerIndex: 1,
      explanation: "FSH is a peptide hormone that binds to a membrane-bound receptor on ovarian cells, triggering the generation of a second messenger (cAMP), which then activates protein kinases for biochemical responses.",
      difficulty: "Medium"
    },
    {
      id: "pq-bio-mech-4",
      question: "Which of the following chemical categories of hormones is correctly paired with its receptor location and mechanism of action?",
      options: [
        "Iodothyronines – Membrane-bound receptor – Second messenger generation",
        "Steroids – Intracellular receptor – Gene expression regulation",
        "Peptide hormones – Intracellular receptor – Direct chromatin binding",
        "Amino acid derivatives – Nuclear receptor – No second messenger"
      ],
      correctAnswerIndex: 1,
      explanation: "Steroid hormones (Cortisol, Testosterone, Estrogen, Progesterone) bind to intracellular nuclear receptors and regulate gene expression by interacting with genomic DNA. Iodothyronines also act via intracellular receptors.",
      difficulty: "Medium"
    },
    {
      id: "pq-bio-mech-5",
      question: "Which property distinguishes peptide hormone signaling from steroid hormone signaling?",
      options: [
        "Peptide hormones generate second messengers; steroid hormones do not.",
        "Steroid hormones bind only to cell membrane surface receptors.",
        "Peptide hormones alter gene expression directly by binding to DNA.",
        "Steroid hormones produce immediate physiological effects within milliseconds."
      ],
      correctAnswerIndex: 0,
      explanation: "Peptide hormones bind to membrane receptors and generate second messengers (cAMP, IP3, Ca²⁺). Steroid hormones diffuse through the membrane and bind intracellular receptors to modulate gene expression without generating second messengers.",
      difficulty: "Medium"
    }
  ],

  pyqs: [
    {
      id: "pyq-bio-mech-1",
      year: 2021,
      exam: "NEET UG 2021",
      question: "Which of the following hormones is NOT a peptide hormone?",
      options: [
        "Insulin",
        "Glucagon",
        "Testosterone",
        "Parathyroid Hormone (PTH)"
      ],
      correctAnswerIndex: 2,
      explanation: "Testosterone is a steroid hormone derived from cholesterol. Insulin, Glucagon, and Parathyroid Hormone (PTH) are peptide/protein hormones.",
      topicTested: "Chemical Classification of Hormones",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Paper"
    },
    {
      id: "pyq-bio-mech-2",
      year: 2019,
      exam: "NEET UG 2019",
      question: "Which of the following is a second messenger involved in the mechanism of action of peptide hormones?",
      options: [
        "cAMP",
        "CGMP",
        "ATP",
        "GTP"
      ],
      correctAnswerIndex: 0,
      explanation: "Cyclic AMP (cAMP) is a classic second messenger produced inside target cells during peptide hormone (e.g., FSH, Epinephrine) signaling via membrane-bound receptors.",
      topicTested: "Second Messengers in Hormone Action",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper"
    },
    {
      id: "pyq-bio-mech-3",
      year: 2016,
      exam: "NEET UG 2016",
      question: "Which of the following hormones interacts with intracellular receptors?",
      options: [
        "Thyroxine (T4)",
        "Insulin",
        "Epinephrine",
        "Melatonin"
      ],
      correctAnswerIndex: 0,
      explanation: "Thyroxine (T4), an iodothyronine, is lipid-soluble and diffuses through the plasma membrane to bind to intracellular nuclear receptors, regulating gene expression.",
      topicTested: "Intracellular Receptors & Thyroid Hormones",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2016 Official Paper"
    },
    {
      id: "pyq-bio-mech-4",
      year: 2013,
      exam: "NEET UG 2013",
      question: "Which of the following statement is CORRECT regarding hormone action?",
      options: [
        "Steroid hormones generate second messengers like cAMP.",
        "Protein hormones cross the cell membrane easily.",
        "Hormones bind to specific receptors to form a hormone-receptor complex.",
        "Iodothyronines require second messengers for cellular action."
      ],
      correctAnswerIndex: 2,
      explanation: "Every hormone exerts its effect by binding specifically to target cell receptors to form a Hormone-Receptor Complex. Steroid and thyroid hormones do NOT generate second messengers; protein hormones do not cross the membrane easily.",
      topicTested: "Hormone-Receptor Complex & Signaling",
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2013 Official Paper"
    },
    {
      id: "pyq-bio-mech-5",
      year: 2010,
      exam: "AIPMT 2010",
      question: "Which one of the following pairs of hormones are chemical derivatives of amino acids?",
      options: [
        "Epinephrine and Norepinephrine",
        "Cortisol and Aldosterone",
        "Insulin and Glucagon",
        "Oxytocin and Vasopressin"
      ],
      correctAnswerIndex: 0,
      explanation: "Epinephrine and Norepinephrine (catecholamines) are amino acid derivatives synthesized from the amino acid tyrosine.",
      topicTested: "Amino Acid Derivative Hormones",
      isVerifiedPYQ: true,
      verificationSource: "AIPMT 2010 Official Paper"
    },
    {
      id: "pyq-bio-mech-6",
      year: 2008,
      exam: "AIPMT 2008",
      question: "Which one of the following statements is correct regarding the mechanism of action of human hormones?",
      options: [
        "Oxytocin stimulates growth and activity of thyroid gland.",
        "Tropical hormones are secreted by parathyroid gland.",
        "Secretin is a peptide hormone that stimulates secretion of pancreatic juice.",
        "Steroid hormones act rapidly by generating second messengers."
      ],
      correctAnswerIndex: 2,
      explanation: "Secretin is a peptide hormone secreted by duodenal mucosa that acts on the exocrine pancreas to stimulate water and bicarbonate ion secretion. Steroid hormones act via nuclear receptors without second messengers.",
      topicTested: "Peptide Hormones vs Steroid Action",
      isVerifiedPYQ: true,
      verificationSource: "AIPMT 2008 Official Paper"
    }
  ]
};
