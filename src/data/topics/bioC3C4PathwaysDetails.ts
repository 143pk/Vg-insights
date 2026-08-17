import { DetailedTopicContent } from '../../types/neet';

export const bioC3C4PathwaysDetails: DetailedTopicContent = {
  topicId: "bio-c3-c4-pathways",
  topicName: "Calvin C3 Cycle, C4 Hatch-Slack Pathway & Photorespiration",
  subject: "Biology",
  class: "Class 11",
  classification: "Plant Physiology",
  chapter: "Photosynthesis in Higher Plants",

  whatIsThisTopic: "The Biosynthetic Phase (Dark Reaction) reduces atmospheric CO₂ into carbohydrates using assimilation power (ATP + NADPH) produced during light reactions. Plants fix CO₂ either via the C3 Calvin Cycle (primary acceptor RuBP) or the C4 Hatch-Slack Pathway (primary acceptor PEP with Kranz anatomy), while photorespiration represents a wasteful side-reaction in C3 plants catalyzed by the oxygenase activity of RuBisCO.",

  basicIdea: [
    "The Biosynthetic Phase (Dark Reaction) occurs in the stroma of chloroplasts. It does not require light directly, but depends strictly on the products of light reaction (ATP and NADPH).",
    "Melvin Calvin mapped the carbon assimilation pathway using radioactive ¹⁴C in green alga Chlorella and Scenedesmus (Chromatography & Autoradiography), discovering that the first stable product of CO₂ fixation is a 3-carbon organic acid: 3-Phosphoglyceric acid (3-PGA) -> C3 Pathway.",
    "The C3 Calvin Cycle occurs in ALL photosynthetic plants (C3, C4, CAM) and consists of 3 stages: 1) Carboxylation (fixing CO₂ onto RuBP by RuBisCO); 2) Reduction (consuming 2 ATP and 2 NADPH per CO₂ to form triose phosphate); 3) Regeneration (regenerating RuBP, consuming 1 ATP).",
    "Synthesis of 1 molecule of Glucose (6C) requires 6 turns of Calvin cycle, consuming 6 CO₂, 18 ATP, and 12 NADPH.",
    "C4 Plants (e.g., Maize, Sugarcane, Sorghum, Amaranthus) adapt to tropical dry habitats. They exhibit 'Kranz Anatomy' (wreath-like arrangement of bundle sheath cells with thick walls, no intercellular spaces, and large agranal chloroplasts around vascular bundles).",
    "In C4 plants, initial CO₂ fixation occurs in Mesophyll cells catalyzed by PEPcase (PEP carboxylase), forming a 4-carbon acid (Oxaloacetic Acid, OAA). Decarboxylation occurs in Bundle Sheath cells where CO₂ is released to RuBisCO for the Calvin cycle.",
    "C4 plants lack photorespiration because they maintain a high CO₂ concentration at the RuBisCO active site in bundle sheath cells, granting them higher photosynthetic efficiency, higher temperature optimum, and greater water-use efficiency.",
    "Photorespiration (C2 Cycle) occurs when RuBisCO binds O₂ instead of CO₂ under high temperature and low CO₂/high O₂ ratio, yielding 1 molecule of 3-PGA (3C) and 1 molecule of 2-Phosphoglycolate (2C). It involves three organelles in sequence: Chloroplast → Peroxisome → Mitochondria, releasing CO₂ and consuming ATP without producing sugar or ATP."
  ],

  importantTerms: [
    {
      term: "RuBisCO (RuBP Carboxylase-Oxygenase)",
      definition: "The most abundant enzyme on Earth. Located in chloroplast stroma. Contains dual enzymatic capability: acts as Carboxylase when CO₂:O₂ ratio is high, and Oxygenase when O₂:CO₂ ratio is high.",
      neetNote: "NEET Key Point: RuBisCO is present in ALL photosynthetic plants (in mesophyll of C3 plants; strictly in bundle sheath cells of C4 plants)."
    },
    {
      term: "Kranz Anatomy",
      definition: "'Kranz' means crown or wreath. Specialized leaf structure in C4 plants where large bundle sheath cells encircle vascular bundles in multiple layers.",
      neetNote: "Bundle sheath cells feature: Thick impervious walls to gas exchange, no intercellular spaces, and large dimorphic chloroplasts (agranal - lacking grana)."
    },
    {
      term: "PEPcase (Phosphoenolpyruvate Carboxylase)",
      definition: "Enzyme present in mesophyll cells of C4 plants that fixes CO₂ onto 3-carbon PEP (Phosphoenolpyruvate) to form 4-carbon OAA. PEPcase lacks oxygenase activity completely.",
      neetNote: "PEPcase has a much higher affinity for CO₂ than RuBisCO and operates even at very low CO₂ concentrations."
    },
    {
      term: "Photorespiration (C2 Cycle)",
      definition: "A wasteful metabolic pathway in C3 plants where RuBisCO fixes O₂ instead of CO₂, converting RuBP into 3-PGA and Phosphoglycolate, releasing CO₂ with loss of ATP.",
      neetNote: "Involves three organelles in strict sequence: 1) Chloroplast, 2) Peroxisome, 3) Mitochondria."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. The Calvin Cycle (C3 Pathway)",
      paragraphs: [
        "The Calvin cycle operates in the stroma of chloroplasts in ALL photosynthetic plants (C3, C4, and CAM).",
        "The primary acceptor of CO₂ was discovered to be a 5-carbon ketose sugar: Ribulose 1,5-bisphosphate (RuBP).",
        "The Calvin Cycle is divided into three major stages:",
        "1. CARBOXYLATION (Most Critical Step): CO₂ is fixed onto 5C RuBP to form an unstable 6-carbon intermediate, which immediately splits into two molecules of 3-Phosphoglyceric Acid (3-PGA, 3C). Catalyzed by RuBisCO.",
        "   RuBP (5C) + CO₂ + H₂O \\xrightarrow{\\text{RuBisCO}} 2 \\times 3\\text{-PGA (3C)}",
        "2. REDUCTION: A series of reactions using light reaction products to form glucose.",
        "   • For each CO₂ fixed, 2 molecules of ATP (for phosphorylation) and 2 molecules of NADPH (for reduction) are consumed.",
        "   • Product: 2 molecules of Triose Phosphate (Glyceraldehyde 3-phosphate, G3P / PGAL).",
        "3. REGENERATION: To keep the cycle operating continuously, RuBP acceptor must be regenerated.",
        "   • Regeneration of 1 molecule of RuBP requires 1 molecule of ATP.",
        "OVERALL STOICHIOMETRY PER MOLECULE OF GLUCOSE (6 turns of Calvin cycle):",
        "• IN: 6 CO₂ + 18 ATP + 12 NADPH",
        "• OUT: 1 Glucose (C₆H₁₂O₆) + 18 ADP + 18 Pᵢ + 12 NADP⁺"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 550 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="550" height="320" fill="#0f172a" rx="12"/>
          <text x="275" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CALVIN CYCLE (C3 PATHWAY)</text>

          <!-- RuBP Top -->
          <g transform="translate(210, 50)">
            <rect x="0" y="0" width="130" height="35" fill="#0284c7" rx="6"/>
            <text x="65" y="22" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">RuBP (5C)</text>
          </g>

          <!-- CO2 Input -->
          <path d="M 120 67 L 210 67" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrow-yellow)"/>
          <text x="150" y="58" fill="#fbbf24" font-size="11" font-weight="bold">CO₂ + H₂O</text>

          <!-- Stage 1 Carboxylation -->
          <path d="M 340 67 Q 440 67 440 140" stroke="#10b981" stroke-width="3" fill="none" marker-end="url(#arrow-green)"/>
          <text x="440" y="95" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">1. CARBOXYLATION</text>
          <text x="440" y="110" fill="#64748b" font-size="9" text-anchor="middle">(RuBisCO Enzyme)</text>

          <!-- 3-PGA Right -->
          <g transform="translate(380, 140)">
            <rect x="0" y="0" width="120" height="35" fill="#059669" rx="6"/>
            <text x="60" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2 × 3-PGA (3C)</text>
          </g>

          <!-- Stage 2 Reduction -->
          <path d="M 440 175 Q 440 260 340 260" stroke="#10b981" stroke-width="3" fill="none" marker-end="url(#arrow-green)"/>
          <text x="440" y="220" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2. REDUCTION</text>
          <text x="440" y="235" fill="#f43f5e" font-size="9" text-anchor="middle">Consumes 2 ATP + 2 NADPH</text>

          <!-- Triose Phosphate Bottom -->
          <g transform="translate(210, 242)">
            <rect x="0" y="0" width="130" height="35" fill="#0d9488" rx="6"/>
            <text x="65" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Triose Phosphate (3C)</text>
          </g>

          <!-- Sugar Output -->
          <path d="M 275 277 L 275 310" stroke="#eab308" stroke-width="2.5" marker-end="url(#arrow-yellow)"/>
          <text x="275" y="300" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Sucrose / Starch (Glucose)</text>

          <!-- Stage 3 Regeneration -->
          <path d="M 210 260 Q 110 260 110 140 Q 110 67 210 67" stroke="#10b981" stroke-width="3" fill="none" marker-end="url(#arrow-green)"/>
          <text x="110" y="170" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">3. REGENERATION</text>
          <text x="110" y="185" fill="#f43f5e" font-size="9" text-anchor="middle">Consumes 1 ATP</text>

          <defs>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
            </marker>
            <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
            </marker>
          </defs>
        </svg>`,
        caption: "The Three Main Stages of Calvin Cycle (C3 Pathway).",
        guide: "WHAT TO OBSERVE: For every 1 CO₂ fixed, 2 ATP and 2 NADPH are consumed in Reduction, and 1 ATP is consumed in Regeneration (Total = 3 ATP + 2 NADPH per CO₂). Thus, 1 Glucose (6 CO₂) requires 18 ATP and 12 NADPH."
      },
      importantPoints: [
        "Primary CO₂ Acceptor in C3 = RuBP (5-Carbon keto-sugar).",
        "First stable product in C3 = 3-PGA (3-Carbon organic acid).",
        "Per CO₂ fixed: 3 ATP + 2 NADPH consumed.",
        "Per Glucose (6 CO₂): 18 ATP + 12 NADPH consumed."
      ]
    },
    {
      heading: "2. The C4 Pathway (Hatch & Slack Pathway) & Kranz Anatomy",
      paragraphs: [
        "C4 plants are specially adapted to dry tropical regions (e.g., Maize, Sugarcane, Sorghum, Pennisetum). They show two distinct photosynthetic cell types: Mesophyll Cells and Bundle Sheath Cells.",
        "Kranz Anatomy Characteristics:",
        "1. Vascular bundles encircled by several concentric layers of large Bundle Sheath Cells.",
        "2. Bundle sheath cells have thick walls impervious to gaseous exchange.",
        "3. No intercellular spaces among bundle sheath cells.",
        "4. Chloroplast Dimorphism: Bundle sheath chloroplasts are large, agranal (lack grana thylakoids), and rich in RuBisCO but LACK PEPcase. Mesophyll chloroplasts have well-developed grana, contain PEPcase, but LACK RuBisCO.",
        "Step-by-Step C4 Pathway Mechanism:",
        "1. In Mesophyll Cell: CO₂ combines with 3-carbon Phosphoenolpyruvate (PEP) catalyzed by PEPcase (PEP carboxylase) to form 4-carbon Oxaloacetic acid (OAA).",
        "   \\text{PEP (3C)} + \\text{HCO}_3^- \\xrightarrow{\\text{PEPcase}} \\text{OAA (4C)}",
        "2. Conversion & Transport: OAA is converted to Malic acid or Aspartic acid (4C) and transported through plasmodesmata to Bundle Sheath cells.",
        "3. Decarboxylation in Bundle Sheath: Malic acid is split into CO₂ (1C) and Pyruvic acid / Pyruvate (3C).",
        "4. Calvin Cycle in Bundle Sheath: Released CO₂ builds up high concentration in bundle sheath cells and enters the standard Calvin C3 cycle, binding to RuBisCO.",
        "5. Transport & Regeneration: Pyruvate (3C) is transported back to Mesophyll cells where it is converted back to PEP, consuming 2 ATP equivalents (ATP → AMP + PPᵢ = 2 ATP bonds).",
        "TOTAL ENERGY COST IN C4 PLANTS PER GLUCOSE:",
        "• Standard Calvin Cycle cost = 18 ATP + 12 NADPH",
        "• C4 PEP regeneration pump cost = 6 CO₂ × 2 ATP = 12 ATP",
        "• Total ATP required in C4 plants for 1 Glucose = 18 + 12 = 30 ATP + 12 NADPH."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="560" height="300" fill="#0f172a" rx="12"/>
          <text x="280" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">C4 HATCH-SLACK PATHWAY</text>

          <!-- Divider -->
          <line x1="280" y1="50" x2="280" y2="280" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="140" y="55" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">MESOPHYLL CELL (PEPcase)</text>
          <text x="420" y="55" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">BUNDLE SHEATH CELL (RuBisCO)</text>

          <!-- Mesophyll PEP -->
          <g transform="translate(40, 80)">
            <rect x="0" y="0" width="100" height="30" fill="#0284c7" rx="4"/>
            <text x="50" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">PEP (3C)</text>
          </g>

          <!-- CO2 Fixation -->
          <path d="M 20 95 L 40 95" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="15" y="85" fill="#f59e0b" font-size="9">HCO₃⁻</text>

          <path d="M 140 95 L 180 95" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>

          <!-- OAA -->
          <g transform="translate(180, 80)">
            <rect x="0" y="0" width="80" height="30" fill="#059669" rx="4"/>
            <text x="40" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C4 Acid (OAA)</text>
          </g>

          <!-- Transport C4 acid to Bundle Sheath -->
          <path d="M 220 110 L 220 170 L 320 170" stroke="#38bdf8" stroke-width="2.5" fill="none" marker-end="url(#arrow)"/>
          <text x="250" y="160" fill="#38bdf8" font-size="9" font-weight="bold">Transport C4 Acid</text>

          <!-- Bundle Sheath C4 Acid -->
          <g transform="translate(320, 155)">
            <rect x="0" y="0" width="80" height="30" fill="#059669" rx="4"/>
            <text x="40" y="19" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C4 Acid</text>
          </g>

          <!-- Decarboxylation -->
          <path d="M 400 170 L 460 170" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="430" y="155" fill="#f43f5e" font-size="9" font-weight="bold">CO₂ Released</text>

          <!-- Calvin Cycle -->
          <circle cx="480" cy="220" r="30" fill="#3b82f6" opacity="0.3" stroke="#60a5fa" stroke-width="2"/>
          <text x="480" y="223" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Calvin Cycle</text>

          <!-- C3 Acid (Pyruvate) return -->
          <path d="M 360 185 L 360 240 L 100 240 L 100 110" stroke="#eab308" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
          <text x="220" y="232" fill="#eab308" font-size="9" font-weight="bold">Transport C3 Acid (Pyruvate) back</text>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Spatial Separation of CO₂ Fixation in C4 Plants.",
        guide: "WHAT TO OBSERVE: Initial CO₂ fixation by PEPcase occurs in Mesophyll cells. Decarboxylation and final CO₂ reduction by RuBisCO in Calvin Cycle occurs in Bundle Sheath cells, avoiding photorespiration."
      },
      importantPoints: [
        "Primary CO₂ acceptor in C4 = Phosphoenolpyruvate (PEP, 3-Carbon).",
        "First stable product in C4 = Oxaloacetic acid (OAA, 4-Carbon).",
        "PEPcase is present in Mesophyll cells; RuBisCO is present in Bundle Sheath cells.",
        "Total ATP consumed per glucose in C4 plants = 30 ATP (18 Calvin + 12 C4 pump)."
      ]
    },
    {
      heading: "3. Photorespiration (C2 Cycle)",
      paragraphs: [
        "Photorespiration is a wasteful process occurring in C3 plants under high light intensity, high temperature, and high O₂/low CO₂ ratios.",
        "Mechanism:",
        "• RuBisCO active site can bind both CO₂ and O₂ (competitive binding).",
        "• When O₂ binds to RuBisCO instead of CO₂:",
        "  \\text{RuBP (5C)} + \\text{O}_2 \\xrightarrow{\\text{RuBisCO Oxygenase}} \\text{1 } \\times \\text{ 3-PGA (3C)} + \\text{1 } \\times \\text{ 2-Phosphoglycolate (2C)}",
        "Organelles Involved in Photorespiration (Sequential Order):",
        "1. Chloroplast: RuBP + O₂ → 3-PGA + Phosphoglycolate. Phosphoglycolate converted to Glycolate.",
        "2. Peroxisome: Glycolate transported to Peroxisome, oxidized to Glyoxylate and converted to amino acid Glycine.",
        "3. Mitochondria: Two Glycine molecules (2C each) react in Mitochondria to release 1 CO₂ and form 1 Serine (3C).",
        "Why Photorespiration is Wasteful:",
        "• No sugar or ATP/NADPH is synthesized.",
        "• CO₂ is released using ATP energy.",
        "• 25% of fixed carbon is lost as CO₂.",
        "Why C4 Plants DO NOT Have Photorespiration:",
        "C4 plants have a CO₂ concentrating mechanism. Decarboxylation of C4 acid in bundle sheath cells elevates internal CO₂ concentration at the RuBisCO site, ensuring RuBisCO functions exclusively as a carboxylase!"
      ],
      importantPoints: [
        "Organelles involved in C2 cycle in sequence: Chloroplast → Peroxisome → Mitochondria.",
        "2 molecules of Glycine (2C each) in Mitochondria produce 1 molecule of Serine (3C) + 1 CO₂.",
        "C4 plants lack photorespiration due to high CO₂ build-up in bundle sheath cells."
      ]
    }
  ],

  formulae: [
    {
      title: "Calvin Cycle Net Stoichiometry",
      formula: "6\\text{CO}_2 + 18\\text{ATP} + 12\\text{NADPH} + 12\\text{H}^+ \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 18\\text{ADP} + 18\\text{P}_i + 12\\text{NADP}^+ + 6\\text{H}_2\\text{O}",
      meaning: "Net energy requirement to synthesize 1 molecule of glucose in C3 plants.",
      symbols: "CO₂ = Carbon dioxide, ATP = Adenosine Triphosphate, NADPH = Reduced NADP, C₆H₁₂O₆ = Glucose",
      conditions: "Operates in stroma of chloroplasts in all photosynthetic plants.",
      whenToUse: "To calculate total ATP/NADPH consumption per glucose or hexose sugar formed."
    },
    {
      title: "Total ATP Requirement in C4 Plants",
      formula: "\\text{Total ATP (C4)} = 18\\text{ ATP (Calvin Cycle)} + 12\\text{ ATP (PEP Regeneration)} = 30\\text{ ATP}",
      meaning: "Total ATP required to produce 1 glucose molecule in C4 plants.",
      symbols: "ATP = Adenosine Triphosphate",
      conditions: "C4 pathway operating across mesophyll and bundle sheath cells.",
      whenToUse: "Comparing energy efficiency and ATP consumption between C3 and C4 plants."
    }
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ["Feature", "C3 Plants", "C4 Plants"],
      rows: [
        ["Primary CO₂ Acceptor", "RuBP (5-Carbon keto-sugar)", "PEP (3-Carbon) in Mesophyll"],
        ["First Stable Product", "3-PGA (3-Carbon acid)", "OAA (4-Carbon acid)"],
        ["Kranz Anatomy", "Absent", "Present in Bundle Sheath"],
        ["Chloroplast Types", "Monomorphic (Granal)", "Dimorphic (Granal in Mesophyll, Agranal in BS)"],
        ["Photorespiration", "Present & Wasteful", "Absent (Higher yield)"],
        ["Optimum Temperature", "20°C to 25°C", "30°C to 45°C"],
        ["ATP required per Glucose", "18 ATP", "30 ATP"],
        ["Examples", "Wheat, Rice, Barley, Tomato", "Maize, Sugarcane, Sorghum, Amaranthus"]
      ]
    },
    caption: "Comprehensive Comparison between C3 and C4 Photosynthetic Pathways."
  },

  neetImportantPoints: [
    "RuBisCO is present in ALL photosynthetic plants, but in C4 plants it is localized ONLY in Bundle Sheath cells.",
    "Primary CO₂ fixation in C4 occurs in Mesophyll cells by PEPcase, forming OAA (4C).",
    "To form 1 molecule of glucose, Calvin cycle turns 6 times, consuming 18 ATP and 12 NADPH in C3 plants, versus 30 ATP and 12 NADPH in C4 plants.",
    "Photorespiration involves three organelles in strict sequence: Chloroplast → Peroxisome → Mitochondria.",
    "C4 plants are photo-rationally superior because they lack photorespiration, show high productivity, and have greater temperature & drought tolerance."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming C4 plants do not perform the Calvin Cycle.",
      correctFact: "Calvin C3 cycle is the universal carbon fixation pathway present in ALL photosynthetic plants (C3, C4, CAM). In C4 plants, Calvin cycle occurs in Bundle Sheath cells.",
      whyItMattersForNEET: "High-yield conceptual question in NEET UG."
    },
    {
      commonConfusion: "Confusing the location of RuBisCO and PEPcase in C4 plants.",
      correctFact: "PEPcase is present ONLY in Mesophyll cells; RuBisCO is present ONLY in Bundle Sheath cells in C4 plants.",
      whyItMattersForNEET: "Direct match-the-following and statement assertion questions in NEET."
    },
    {
      commonConfusion: "Incorrect sequence of organelles in Photorespiration (C2 Cycle).",
      correctFact: "The correct organelle sequence is: Chloroplast → Peroxisome → Mitochondria (CPM).",
      whyItMattersForNEET: "Frequently tested organelle sequence question in NEET Biology."
    }
  ],

  quickRevision: [
    "C3 Cycle (Calvin): Acceptor = RuBP (5C), Product = 3-PGA (3C). Consumes 18 ATP + 12 NADPH per Glucose.",
    "C4 Cycle (Hatch-Slack): Acceptor = PEP (3C) in Mesophyll, Product = OAA (4C). Kranz Anatomy.",
    "C4 Energy Cost: 30 ATP + 12 NADPH per Glucose.",
    "Photorespiration: RuBP + O₂ → 3-PGA + Phosphoglycolate. Organelles: Chloroplast → Peroxisome → Mitochondria.",
    "C4 plants LACK photorespiration due to CO₂ concentration mechanism at RuBisCO site."
  ],

  practiceQuestions: [
    {
      id: "prac-c3c4-1",
      questionText: "In C4 plants, the primary CO₂ fixation and Calvin cycle take place respectively in:",
      options: [
        "Mesophyll cells and Bundle Sheath cells",
        "Bundle Sheath cells and Mesophyll cells",
        "Mesophyll cells only",
        "Bundle Sheath cells only"
      ],
      correctOption: 0,
      explanation: "In C4 plants, primary CO₂ fixation by PEPcase occurs in Mesophyll cells, while the Calvin cycle catalyzed by RuBisCO occurs in Bundle Sheath cells.",
      difficulty: "Easy",
      conceptTested: "Spatial separation of carbon fixation in C4 plants"
    },
    {
      id: "prac-c3c4-2",
      questionText: "How many ATP molecules are required for the synthesis of ONE molecule of glucose in C4 plants compared to C3 plants?",
      options: [
        "30 ATP in C4 and 18 ATP in C3",
        "18 ATP in C4 and 30 ATP in C3",
        "12 ATP in C4 and 18 ATP in C3",
        "30 ATP in C4 and 12 ATP in C3"
      ],
      correctOption: 0,
      explanation: "Synthesis of 1 glucose molecule requires 18 ATP in C3 plants (3 ATP per CO₂). In C4 plants, an additional 12 ATP are consumed to regenerate PEP, making the total 30 ATP.",
      difficulty: "Medium",
      conceptTested: "Energetics of C3 vs C4 pathways"
    }
  ],

  pyqs: [
    {
      id: "pyq-c3c4-1",
      year: 2020,
      exam: "NEET UG",
      questionText: "The primary CO₂ acceptor in C4 plants is:",
      options: [
        "Phosphoenolpyruvate (PEP)",
        "Ribulose 1,5-bisphosphate (RuBP)",
        "Oxaloacetic acid (OAA)",
        "3-Phosphoglyceric acid (3-PGA)"
      ],
      correctOption: 0,
      explanation: "Phosphoenolpyruvate (PEP), a 3-carbon compound present in mesophyll cells, is the primary CO₂ acceptor in C4 plants.",
      difficulty: "Easy",
      topicTested: "Primary CO2 Acceptor in C4 Plants",
      verified: true
    },
    {
      id: "pyq-c3c4-2",
      year: 2019,
      exam: "NEET UG",
      questionText: "Which of the following statement is INCORRECT regarding RuBisCO?",
      options: [
        "It is present in bundle sheath cells of C4 plants",
        "It can bind both CO₂ and O₂",
        "It has higher affinity for O₂ than CO₂",
        "It is the most abundant enzyme in the biosphere"
      ],
      correctOption: 2,
      explanation: "RuBisCO has a much higher affinity for CO₂ than for O₂ when the ratio of CO₂ to O₂ is nearly equal. Photorespiration occurs only when O₂ concentration becomes high.",
      difficulty: "Medium",
      topicTested: "Properties of RuBisCO Enzyme",
      verified: true
    },
    {
      id: "pyq-c3c4-3",
      year: 2018,
      exam: "NEET UG",
      questionText: "Phosphoenol pyruvate (PEP) is the primary CO₂ acceptor in:",
      options: [
        "C4 plants",
        "C3 plants",
        "C2 plants",
        "C3 and C4 plants"
      ],
      correctOption: 0,
      explanation: "PEP is the primary CO₂ acceptor in mesophyll cells of C4 plants (e.g. Maize, Sugarcane).",
      difficulty: "Easy",
      topicTested: "C4 Pathway",
      verified: true
    }
  ]
};
