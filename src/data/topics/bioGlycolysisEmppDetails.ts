import { DetailedTopicContent } from '../../types/neet';

export const bioGlycolysisEmppDetails: DetailedTopicContent = {
  topicId: "bio-glycolysis-empp",
  topicName: "Glycolysis (EMP Pathway), Fate of Pyruvate & Fermentation",
  subject: "Biology",
  class: "Class 11",
  classification: "Plant Physiology",
  chapter: "Respiration in Plants",

  whatIsThisTopic: "Cellular respiration is an enzyme-mediated catabolic process wherein organic substrates (primarily glucose) are oxidized to liberate free energy stored as ATP. Glycolysis (EMP pathway) is the universal 10-step anaerobic cytosolic pathway converting 1 Glucose (6C) into 2 Pyruvate (3C), yielding a net of 2 ATP and 2 NADH. Under anaerobic conditions, pyruvate undergoes fermentation (alcoholic or lactic acid) to regenerate NAD⁺.",

  basicIdea: [
    "Cellular respiration is an oxidative, catabolic, exergonic process in which C-C bonds of complex organic compounds (respiratory substrates like glucose, fats, proteins) are broken down by oxidation, releasing energy that is trapped in the high-energy terminal bonds of ATP (Adenosine Triphosphate), the universal energy currency of cells.",
    "Respiration vs. Breathing: Breathing is a physical/mechanical process of gas exchange (O₂ intake and CO₂ release) across respiratory surfaces without energy production. Cellular respiration is a biochemical intracellular enzyme-catalyzed process occurring in cytoplasm and mitochondria to release energy as ATP.",
    "Glycolysis (EMP Pathway): Named after Gustav Embden, Otto Meyerhof, and Jakub Parnas who elucidated the scheme. It occurs in the CYTOPLASM of ALL living organisms (prokaryotes and eukaryotes, obligate anaerobes and aerobes alike).",
    "Glycolysis requires NO oxygen and does not release CO₂. It converts 1 molecule of Glucose (6C) into 2 molecules of Pyruvic acid (3C) through 10 sequential enzymatic reactions.",
    "Glycolysis consists of 3 distinct phases: 1) Energy Investment Phase (Steps 1-3, consuming 2 ATP); 2) Cleavage Phase (Steps 4-5, splitting 6C Fructose-1,6-bisphosphate into two 3C triose phosphates); 3) Energy Payoff Phase (Steps 6-10, producing 4 ATP via substrate-level phosphorylation and 2 NADH + H⁺).",
    "Net Yield of Glycolysis per Glucose molecule: 2 Pyruvic acid (3C) + 2 Net ATP (4 produced - 2 used) + 2 NADH + 2 H⁺ + 2 H₂O.",
    "Fate of Pyruvate depends on cellular oxygen availability and organism type: 1) Aerobic Respiration in mitochondria (Krebs cycle + ETS); 2) Alcoholic Fermentation in yeast; 3) Lactic Acid Fermentation in oxygen-depleted muscle cells and Lactobacillus.",
    "Fermentation is an incomplete oxidation of glucose under anaerobic conditions yielding < 7% of total energy stored in glucose. Fermentation regenerates NAD⁺ from NADH, allowing glycolysis to continue in the absence of oxygen."
  ],

  importantTerms: [
    {
      term: "Cellular Respiration",
      definition: "The biochemical process by which cellular nutrients (respiratory substrates) are enzymatically oxidized, breaking carbon-carbon bonds to liberate energy captured as ATP.",
      neetNote: "NEET Key Point: Respiration is primarily catabolic, but because its intermediates are used for biosynthesis, it is correctly designated as an AMPHIBOLIC pathway."
    },
    {
      term: "Glycolysis (EMP Pathway)",
      symbol: "EMP",
      definition: "The 10-step cytosolic metabolic sequence present in all living cells that partially oxidizes 1 Glucose (6C) into 2 Pyruvic acid (3C) without utilizing oxygen.",
      neetNote: "It is the ONLY respiratory pathway operating in obligate anaerobes."
    },
    {
      term: "Substrate-Level Phosphorylation",
      definition: "Direct enzymatic synthesis of ATP (or GTP) by transferring a high-energy phosphate group from a phosphorylated metabolic intermediate directly to ADP (or GDP).",
      neetNote: "In Glycolysis, substrate-level phosphorylation occurs twice per 3C triose (Steps 7 & 10), yielding 4 gross ATP per glucose."
    },
    {
      term: "Phosphofructokinase (PFK)",
      symbol: "PFK",
      definition: "The key regulatory, rate-limiting enzyme of glycolysis that catalyzes the irreversible phosphorylation of Fructose-6-phosphate to Fructose-1,6-bisphosphate using 1 ATP.",
      neetNote: "PFK is termed the 'pacemaker enzyme' or 'gatekeeper' of glycolysis."
    },
    {
      term: "Fermentation",
      definition: "The incomplete anaerobic breakdown of organic substrates (pyruvate) into alcohol or organic acid, regenerating NAD⁺ without involving an electron transport chain.",
      neetNote: "Fermentation releases less than 7% of the energy in glucose, and yeast cells die when alcohol concentration reaches 13%."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Cellular Respiration Fundamentals: Energy Currency & Oxidation",
      paragraphs: [
        "Cellular respiration is the biochemical core of cellular metabolism. All living organisms require a continuous supply of energy for mechanical work, active transport, and biosynthesis.",
        "• Why Cells Respire: Solar energy trapped by autotrophs during photosynthesis is stored in C-C covalent bonds of carbohydrates (glucose, sucrose, starch). Heterotrophs and autotrophs alike must break these C-C bonds through stepwise enzymatic oxidation to release energy in controlled, usable packets rather than a single uncontrolled burst of heat.",
        "• ATP as Energy Currency: Energy liberated during oxidation is coupled to the synthesis of Adenosine Triphosphate (ATP). ATP possesses high-energy phosphoanhydride bonds between its phosphate groups. Hydrolysis of ATP to ADP + Pᵢ releases ~30.5 kJ/mol (7.3 kcal/mol) of free energy.",
        "• Respiratory Substrates: Compounds oxidized during respiration are called respiratory substrates. Glucose is the primary substrate, but fructose, sucrose, starch, fats, proteins, and organic acids can also be utilized under specific physiological conditions.",
        "• Respiration vs. Breathing:",
        "  - Breathing: Physical, extracellular process involving inhalation of O₂ and exhalation of CO₂ across a respiratory surface. No ATP is synthesized.",
        "  - Cellular Respiration: Biochemical, intracellular process occurring in cytoplasm and mitochondria. Involves multi-step oxidation and ATP synthesis."
      ],
      importantPoints: [
        "Respiration releases energy stepwise so that cells can capture it efficiently in ATP molecules.",
        "ATP is the universal energy currency of all living systems.",
        "Glucose is the preferred respiratory substrate; in plants, sucrose (produced by photosynthesis) is converted into glucose and fructose by the enzyme INVERTASE before entering glycolysis."
      ]
    },
    {
      heading: "2. Overview of Cellular Respiration & Global Pathway Map",
      paragraphs: [
        "The breakdown of glucose proceeds through distinct metabolic stages depending on the presence or absence of oxygen:",
        "1. GLYCOLYSIS (Cytoplasm, Universal): 1 Glucose (6C) → 2 Pyruvate (3C) + 2 ATP + 2 NADH.",
        "2. FATE OF PYRUVATE:",
        "   - ANAEROBIC (Fermentation in Cytoplasm):",
        "     a) Alcoholic Fermentation (Yeast): Pyruvate → Acetaldehyde + CO₂ → Ethanol + NAD⁺.",
        "     b) Lactic Acid Fermentation (Muscles/Bacteria): Pyruvate → Lactic Acid + NAD⁺.",
        "   - AEROBIC (Mitochondria):",
        "     a) Link Reaction (Matrix): 2 Pyruvate → 2 Acetyl-CoA + 2 CO₂ + 2 NADH.",
        "     b) Krebs Cycle (Matrix): 2 Acetyl-CoA → 4 CO₂ + 6 NADH + 2 FADH₂ + 2 GTP.",
        "     c) ETS & Oxidative Phosphorylation (Inner Membrane): NADH & FADH₂ donate electrons → Proton Gradient → ATP Synthase generates bulk ATP."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="320" fill="#0f172a" rx="12"/>
          <text x="290" y="25" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">OVERVIEW OF RESPIRATORY PATHWAYS</text>

          <!-- Glucose -->
          <g transform="translate(215, 40)">
            <rect x="0" y="0" width="150" height="32" fill="#0284c7" rx="6"/>
            <text x="75" y="20" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">GLUCOSE (6C)</text>
          </g>

          <path d="M 290 72 L 290 100" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)"/>
          <text x="360" y="90" fill="#94a3b8" font-size="10">Glycolysis (Cytoplasm)</text>

          <!-- Pyruvate -->
          <g transform="translate(215, 102)">
            <rect x="0" y="0" width="150" height="32" fill="#059669" rx="6"/>
            <text x="75" y="20" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">2 × PYRUVATE (3C)</text>
          </g>

          <!-- Branching -->
          <!-- Left: Alcoholic Fermentation -->
          <path d="M 230 134 L 110 180" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-yellow)"/>
          <text x="140" y="150" fill="#fbbf24" font-size="9" font-weight="bold">No O₂ (Yeast)</text>
          <g transform="translate(40, 185)">
            <rect x="0" y="0" width="140" height="45" fill="#78350f" stroke="#f59e0b" rx="6"/>
            <text x="70" y="18" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Alcoholic Fermentation</text>
            <text x="70" y="34" fill="#fef08a" font-size="9" text-anchor="middle">2 Ethanol (2C) + 2 CO₂</text>
          </g>

          <!-- Middle: Lactic Acid Fermentation -->
          <path d="M 290 134 L 290 180" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-yellow)"/>
          <text x="290" y="160" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">No O₂ (Muscles)</text>
          <g transform="translate(220, 185)">
            <rect x="0" y="0" width="140" height="45" fill="#78350f" stroke="#f59e0b" rx="6"/>
            <text x="70" y="18" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Lactic Acid Fermentation</text>
            <text x="70" y="34" fill="#fef08a" font-size="9" text-anchor="middle">2 Lactic Acid (3C)</text>
          </g>

          <!-- Right: Aerobic Respiration -->
          <path d="M 350 134 L 470 180" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
          <text x="440" y="150" fill="#34d399" font-size="9" font-weight="bold">+ O₂ (Mitochondria)</text>
          <g transform="translate(400, 185)">
            <rect x="0" y="0" width="140" height="75" fill="#064e3b" stroke="#10b981" rx="6"/>
            <text x="70" y="18" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Aerobic Respiration</text>
            <text x="70" y="34" fill="#6ee7b7" font-size="8" text-anchor="middle">• Link Rxn (Acetyl-CoA)</text>
            <text x="70" y="48" fill="#6ee7b7" font-size="8" text-anchor="middle">• Krebs Cycle (Matrix)</text>
            <text x="70" y="62" fill="#6ee7b7" font-size="8" text-anchor="middle">• ETS &amp; Chemiosmosis</text>
          </g>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
            </marker>
            <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b"/>
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Global Pathway Map connecting Glycolysis to Fermentation and Aerobic Respiration.",
        guide: "WHAT TO OBSERVE: Glycolysis occurs in cytoplasm yielding 2 Pyruvate. Under anaerobic conditions, Pyruvate undergoes fermentation in cytoplasm. Under aerobic conditions, Pyruvate enters the mitochondrion for complete oxidation."
      },
      importantPoints: [
        "Glycolysis is the common central pathway for both aerobic and anaerobic respiration.",
        "Plant sucrose is hydrolyzed into Glucose + Fructose by INVERTASE enzyme before entering glycolysis.",
        "Fructose enters glycolysis after phosphorylation by hexokinase into Fructose-6-phosphate."
      ]
    },
    {
      heading: "3. Glycolysis (EMP Pathway) — Step-by-Step Mechanism",
      paragraphs: [
        "Glycolysis consists of 10 sequential enzymatic steps taking place in the CYTOPLASM:",
        "--- PHASE I: ENERGY INVESTMENT PHASE (Steps 1–3, Consumes 2 ATP) ---",
        "• Step 1 (Phosphorylation): Glucose (6C) is phosphorylated by ATP to form Glucose-6-phosphate (6C). Enzyme: HEXOKINASE (requires Mg²⁺). Irreversible step. Consumes 1 ATP.",
        "  \\text{Glucose} + \\text{ATP} \\xrightarrow[\\text{Mg}^{2+}]{\\text{Hexokinase}} \\text{Glucose-6-Phosphate} + \\text{ADP}",
        "• Step 2 (Isomerization): Glucose-6-phosphate (aldose) isomerizes into Fructose-6-phosphate (ketose). Enzyme: PHOSPHOHEXOSE ISOMERASE. Reversible step.",
        "• Step 3 (Second Phosphorylation - Rate Limiting Step): Fructose-6-phosphate is phosphorylated by ATP to form Fructose-1,6-bisphosphate (6C). Enzyme: PHOSPHOFRUCTOKINASE (PFK, requires Mg²⁺). Irreversible step. Consumes 1 ATP.",
        "  \\text{Fructose-6-P} + \\text{ATP} \\xrightarrow[\\text{Mg}^{2+}]{\\text{PFK}} \\text{Fructose-1,6-bisphosphate} + \\text{ADP}",
        "--- PHASE II: CLEAVAGE PHASE (Steps 4–5) ---",
        "• Step 4 (Cleavage): Fructose-1,6-bisphosphate (6C) is cleaved into two 3-carbon isomers: Glyceraldehyde-3-phosphate (G3P / PGAL) and Dihydroxyacetone phosphate (DHAP). Enzyme: ALDOLASE.",
        "• Step 5 (Isomerization): DHAP is isomerized into a second molecule of G3P. Enzyme: TRIOSE PHOSPHATE ISOMERASE. From this point onwards, all reactions occur in DUPLICATE (×2).",
        "--- PHASE III: ENERGY PAYOFF PHASE (Steps 6–10, Yields 4 ATP & 2 NADH) ---",
        "• Step 6 (Oxidation & Phosphorylation): G3P (3C) undergoes dehydrogenation (oxidation) and inorganic phosphorylation (using Pᵢ, NOT ATP) to form 1,3-Bisphosphoglyceric acid (1,3-BPGA, 3C). 2 e⁻ and 2 H⁺ are transferred to NAD⁺ forming NADH + H⁺. Enzyme: GLYCERALDEHYDE-3-PHOSPHATE DEHYDROGENASE.",
        "  2 \\text{ G3P} + 2 \\text{NAD}^+ + 2 \\text{P}_i \\rightarrow 2 \\text{ 1,3-BPGA} + 2 \\text{NADH} + 2 \\text{H}^+",
        "• Step 7 (First Substrate-Level Phosphorylation): High-energy phosphate group from 1,3-BPGA is transferred to ADP, generating ATP and 3-Phosphoglyceric acid (3-PGA, 3C). Enzyme: PHOSPHOGLYCERATE KINASE. Yields +2 ATP per glucose.",
        "• Step 8 (Isomerization): 3-PGA is converted to 2-Phosphoglyceric acid (2-PGA, 3C). Enzyme: PHOSPHOGLYCERATE MUTASE.",
        "• Step 9 (Dehydration): 2-PGA loses a molecule of water to form Phosphoenolpyruvate (PEP, 3C), a high-energy compound. Enzyme: ENOLASE (requires Mg²⁺ / Mn²⁺). Releasing H₂O.",
        "• Step 10 (Second Substrate-Level Phosphorylation): High-energy phosphate from PEP is transferred to ADP, forming Pyruvic acid (3C) and ATP. Enzyme: PYRUVATE KINASE (requires Mg²⁺ and K⁺). Irreversible step. Yields +2 ATP per glucose."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="380" fill="#0f172a" rx="12"/>
          <text x="290" y="22" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">GLYCOLYSIS (EMP PATHWAY) STEP-BY-STEP SCHEME</text>

          <!-- Phase I -->
          <rect x="25" y="35" width="530" height="110" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" rx="8"/>
          <text x="35" y="52" fill="#60a5fa" font-size="10" font-weight="bold">PHASE I: ENERGY INVESTMENT PHASE (Consumes 2 ATP)</text>

          <text x="40" y="75" fill="#ffffff" font-size="10">Glucose (6C)</text>
          <path d="M 115 72 L 155 72" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="135" y="65" fill="#f43f5e" font-size="8">ATP→ADP (Hexokinase)</text>

          <text x="160" y="75" fill="#e2e8f0" font-size="10">Glucose-6-P (6C)</text>
          <path d="M 250 72 L 285 72" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

          <text x="290" y="75" fill="#e2e8f0" font-size="10">Fructose-6-P (6C)</text>
          <path d="M 380 72 L 420 72" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="400" y="65" fill="#f43f5e" font-size="8">ATP→ADP (PFK)</text>

          <text x="425" y="75" fill="#cbd5e1" font-size="10" font-weight="bold">Fructose-1,6-bisP (6C)</text>

          <!-- Phase II -->
          <rect x="25" y="155" width="530" height="60" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" rx="8"/>
          <text x="35" y="172" fill="#c084fc" font-size="10" font-weight="bold">PHASE II: CLEAVAGE PHASE (Aldolase &amp; Isomerase)</text>

          <path d="M 290 145 L 180 185" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="120" y="200" fill="#e2e8f0" font-size="10">DHAP (3C)</text>

          <path d="M 180 200 L 360 200" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
          <text x="270" y="195" fill="#c084fc" font-size="8" text-anchor="middle">Triose Phosphate Isomerase</text>

          <path d="M 290 145 L 400 185" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="405" y="200" fill="#34d399" font-size="10" font-weight="bold">2 × G3P / PGAL (3C)</text>

          <!-- Phase III -->
          <rect x="25" y="225" width="530" height="140" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="8"/>
          <text x="35" y="242" fill="#34d399" font-size="10" font-weight="bold">PHASE III: ENERGY PAYOFF PHASE (Yields 4 ATP &amp; 2 NADH)</text>

          <text x="40" y="270" fill="#e2e8f0" font-size="9">2 × G3P</text>
          <path d="M 85 266 L 130 266" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="105" y="258" fill="#38bdf8" font-size="8">2 NAD⁺→2 NADH</text>

          <text x="135" y="270" fill="#e2e8f0" font-size="9">2 × 1,3-BPGA</text>
          <path d="M 210 266 L 255 266" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="232" y="258" fill="#4ade80" font-size="8" font-weight="bold">+2 ATP (SLP)</text>

          <text x="260" y="270" fill="#e2e8f0" font-size="9">2 × 3-PGA</text>
          <path d="M 315 266 L 355 266" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>

          <text x="360" y="270" fill="#e2e8f0" font-size="9">2 × 2-PGA</text>
          <path d="M 410 266 L 450 266" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="430" y="258" fill="#94a3b8" font-size="8">-2 H₂O</text>

          <text x="455" y="270" fill="#e2e8f0" font-size="9">2 × PEP</text>

          <path d="M 480 280 L 480 320 L 290 320" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="420" y="312" fill="#4ade80" font-size="9" font-weight="bold">+2 ATP (SLP via Pyruvate Kinase)</text>

          <g transform="translate(180, 305)">
            <rect x="0" y="0" width="130" height="30" fill="#059669" rx="6"/>
            <text x="65" y="19" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2 × PYRUVATE (3C)</text>
          </g>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
            </marker>
          </defs>
        </svg>`,
        caption: "10-Step Sequential Enzymatic Pathway of Glycolysis in Cytoplasm.",
        guide: "WHAT TO OBSERVE: Steps 1 & 3 consume 1 ATP each (-2 ATP total). Steps 7 & 10 generate 2 ATP each (+4 ATP total). Step 6 generates 2 NADH. Net gain = +2 ATP + 2 NADH."
      },
      importantPoints: [
        "Rate-limiting regulatory enzyme = Phosphofructokinase (PFK) at Step 3.",
        "Irreversible steps in Glycolysis: Step 1 (Hexokinase), Step 3 (PFK), and Step 10 (Pyruvate kinase).",
        "Substrate-Level Phosphorylation steps: Step 7 (1,3-BPGA → 3-PGA) and Step 10 (PEP → Pyruvate).",
        "Water molecule is released at Step 9 (2-PGA → PEP) catalyzed by Enolase."
      ]
    },
    {
      heading: "4. Glycolysis Energy Account & Substrate-Level Phosphorylation",
      paragraphs: [
        "Let us calculate the exact stoichiometry of energy investment and payoff in glycolysis for 1 molecule of Glucose:",
        "• ATP Investment: Step 1 (-1 ATP) + Step 3 (-1 ATP) = -2 ATP consumed.",
        "• Gross ATP Production: Step 7 (+2 ATP) + Step 10 (+2 ATP) = +4 ATP generated via Substrate-Level Phosphorylation.",
        "• NET ATP GAIN: 4 Gross ATP - 2 Invested ATP = +2 NET ATP.",
        "• Reducing Power Generated: Step 6 yields +2 NADH + 2 H⁺.",
        "• Final Products: 2 Pyruvic acid (3C) + 2 Net ATP + 2 NADH + 2 H₂O.",
        "Substrate-Level Phosphorylation vs. Oxidative Phosphorylation:",
        "• Substrate-Level Phosphorylation: Direct enzymatic coupling of high-energy phosphate from substrate to ADP without needing oxygen or electron transport chain (e.g., Steps 7 & 10 of glycolysis, Step 5 of Krebs cycle).",
        "• Oxidative Phosphorylation: Indirect ATP synthesis driven by proton electrochemical gradient generated during electron flow through ETS in mitochondria."
      ],
      importantPoints: [
        "Gross ATP formed in Glycolysis = 4 ATP.",
        "Net ATP formed in Glycolysis = 2 ATP.",
        "Substrate-level phosphorylation in glycolysis accounts for ALL 4 gross ATP produced."
      ]
    },
    {
      heading: "5. Fate of Pyruvate: Three Major Metabolic Paths",
      paragraphs: [
        "Pyruvic acid (3C) is the key metabolic junction of glycolysis. Its fate is dictated by cellular oxygen availability and organismal enzymatic machinery:",
        "1. Aerobic Respiration (In Presence of O₂): Pyruvate enters the mitochondrial matrix for complete oxidation into CO₂ and H₂O via Link Reaction, Krebs Cycle, and ETS (yields 36 to 38 theoretical ATP per glucose).",
        "2. Alcoholic Fermentation (In Absence of O₂ in Yeasts/Plants): Pyruvate is anaerobically converted into Ethanol and CO₂.",
        "3. Lactic Acid Fermentation (In Absence/Deficit of O₂ in Muscle Cells & Lactic Acid Bacteria): Pyruvate is anaerobically reduced to Lactic Acid without CO₂ release.",
        "Why Fermentation occurs under anaerobic conditions:",
        "During glycolysis, Step 6 reduces NAD⁺ to NADH. Cytoplasmic pools of NAD⁺ are finite. Under aerobic conditions, NADH transfers its electrons into mitochondria via shuttles to regenerate NAD⁺. In the absence of O₂, ETS stops, so fermentation provides an alternative pathway to re-oxidize NADH back to NAD⁺ so that glycolysis can continue producing 2 ATP!"
      ],
      importantPoints: [
        "Primary purpose of fermentation: Regenerates NAD⁺ from NADH so glycolysis can continue producing ATP under anaerobic conditions.",
        "Without NAD⁺ regeneration, glycolysis would completely stop once all NAD⁺ is converted to NADH."
      ]
    },
    {
      heading: "6. Alcoholic Fermentation",
      paragraphs: [
        "Alcoholic fermentation is carried out by Yeasts (e.g., Saccharomyces cerevisiae) and some higher plants under anaerobic conditions.",
        "Two-Step Reaction Pathway:",
        "• Step 1 (Decarboxylation): Pyruvate (3C) undergoes decarboxylation to form Acetaldehyde (2C) and CO₂. Enzyme: PYRUVATE DECARBOXYLASE (requires TPP - Thiamine Pyrophosphate and Mg²⁺).",
        "  \\text{Pyruvic Acid (3C)} \\xrightarrow[\\text{Mg}^{2+}, \\text{TPP}]{\\text{Pyruvate Decarboxylase}} \\text{Acetaldehyde (2C)} + \\text{CO}_2\\uparrow",
        "• Step 2 (Reduction): Acetaldehyde (2C) is reduced to Ethanol (2C) by accepting electrons from NADH + H⁺, regenerating NAD⁺. Enzyme: ALCOHOL DEHYDROGENASE (requires Zn²⁺).",
        "  \\text{Acetaldehyde (2C)} + \\text{NADH} + \\text{H}^+ \\xrightarrow[\\text{Zn}^{2+}]{\\text{Alcohol Dehydrogenase}} \\text{Ethanol (2C)} + \\text{NAD}^+",
        "Biological Features & Limits:",
        "• Net ATP Yield: Exactly 2 ATP per glucose (derived solely from glycolysis). No extra ATP is produced during fermentation steps.",
        "• Alcohol Toxicity Limit: Yeast cells poison themselves to death when the concentration of alcohol reaches about 13%. (Naturally fermented beverages like wine and beer have maximum 13% alcohol; higher proof spirits require distillation)."
      ],
      importantPoints: [
        "Enzymes involved in alcoholic fermentation: Pyruvate Decarboxylase + Alcohol Dehydrogenase.",
        "CO₂ IS released in alcoholic fermentation (causing bread dough to rise and beer fizz).",
        "Yeasts die at ~13% alcohol concentration."
      ]
    },
    {
      heading: "7. Lactic Acid Fermentation",
      paragraphs: [
        "Lactic acid fermentation occurs in certain bacteria (e.g., Lactobacillus in curd formation) and in human skeletal muscle cells during strenuous exercise when oxygen supply cannot keep up with demand.",
        "Single-Step Direct Reduction:",
        "• Pyruvate (3C) is directly reduced to Lactic Acid (Lactate, 3C) by NADH + H⁺, regenerating NAD⁺. Enzyme: LACTATE DEHYDROGENASE (requires Zn²⁺).",
        "  \\text{Pyruvic Acid (3C)} + \\text{NADH} + \\text{H}^+ \\xrightarrow[\\text{Zn}^{2+}]{\\text{Lactate Dehydrogenase}} \\text{Lactic Acid (3C)} + \\text{NAD}^+",
        "Key Differences from Alcoholic Fermentation:",
        "1. NO CO₂ is evolved (Lactic acid is a 3C compound, same carbon number as Pyruvate).",
        "2. Catalyzed by Lactate Dehydrogenase enzyme.",
        "3. Accumulation of lactic acid in muscle cells causes muscle fatigue and cramps (relieved when oxygen debt is repaid and lactate is transported to liver via Cori Cycle to form glucose).",
        "Energy Efficiency of Fermentation:",
        "• Less than 7% of the energy stored in glucose is trapped in ATP during fermentation.",
        "• Both alcoholic and lactic acid fermentations are hazardous processes because toxic end products (alcohol or acid) accumulate."
      ],
      importantPoints: [
        "NO CO₂ is released in lactic acid fermentation.",
        "Energy trapped in fermentation is LESS THAN 7% of total glucose energy.",
        "Lactic acid accumulation causes muscle fatigue."
      ]
    }
  ],

  formulae: [
    {
      title: "Glycolysis Overall Equation",
      formula: "\\text{Glucose (6C)} + 2\\text{NAD}^+ + 2\\text{ADP} + 2\\text{P}_i \\rightarrow 2\\text{ Pyruvate (3C)} + 2\\text{NADH} + 2\\text{H}^+ + 2\\text{ATP} + 2\\text{H}_2\\text{O}",
      meaning: "Net chemical transformation of 1 glucose molecule during glycolysis in cytoplasm.",
      symbols: "Glucose = C₆H₁₂O₆, NAD⁺ = Oxidized Nicotinamide Adenine Dinucleotide, ATP = Adenosine Triphosphate",
      conditions: "Occurs in cytoplasm of all living organisms under both aerobic and anaerobic conditions.",
      whenToUse: "To calculate net reactants and products of glycolysis per glucose molecule."
    },
    {
      title: "Alcoholic Fermentation Equation",
      formula: "\\text{Pyruvic Acid (3C)} + \\text{NADH} + \\text{H}^+ \\xrightarrow{\\text{Pyruvate Decarboxylase, Alcohol Dehyd.}} \\text{C}_2\\text{H}_5\\text{OH (2C)} + \\text{CO}_2\\uparrow + \\text{NAD}^+",
      meaning: "Anaerobic conversion of pyruvate into ethanol and carbon dioxide in yeast.",
      symbols: "C₂H₅OH = Ethanol, CO₂ = Carbon dioxide, NAD⁺ = Regenerated electron carrier",
      conditions: "Anaerobic state in yeast cells.",
      whenToUse: "Calculating products and NAD⁺ regeneration in yeast fermentation."
    },
    {
      title: "Lactic Acid Fermentation Equation",
      formula: "\\text{Pyruvic Acid (3C)} + \\text{NADH} + \\text{H}^+ \\xrightarrow{\\text{Lactate Dehydrogenase}} \\text{Lactic Acid (3C)} + \\text{NAD}^+",
      meaning: "Direct reduction of pyruvate to lactic acid without CO₂ evolution.",
      symbols: "Lactic Acid = C₃H₆O₃",
      conditions: "Anaerobic/hypoxic conditions in skeletal muscle cells or Lactobacillus.",
      whenToUse: "Determining end products and carbon balance in muscle lactic acid formation."
    }
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ["Property", "Glycolysis", "Alcoholic Fermentation", "Lactic Acid Fermentation"],
      rows: [
        ["Site", "Cytoplasm", "Cytoplasm", "Cytoplasm"],
        ["Oxygen Need", "Independent of O₂", "Anaerobic (No O₂)", "Anaerobic (No O₂)"],
        ["End Product", "2 Pyruvate (3C)", "2 Ethanol (2C) + 2 CO₂", "2 Lactic Acid (3C)"],
        ["Net ATP / Glucose", "+2 ATP", "+2 ATP (from Glycolysis)", "+2 ATP (from Glycolysis)"],
        ["NADH Status", "2 NADH Produced", "2 NADH Consumed (Regenerates NAD⁺)", "2 NADH Consumed (Regenerates NAD⁺)"],
        ["CO₂ Released?", "NO", "YES (1 CO₂ per pyruvate)", "NO"],
        ["Key Enzymes", "Hexokinase, PFK, Pyruvate Kinase", "Pyruvate Decarboxylase, Alcohol Dehyd.", "Lactate Dehydrogenase"]
      ]
    },
    caption: "Comparative Analysis of Glycolysis, Alcoholic Fermentation, and Lactic Acid Fermentation."
  },

  neetImportantPoints: [
    "Glycolysis occurs in the CYTOPLASM of all living cells; it is the ONLY pathway in obligate anaerobes.",
    "Rate limiting enzyme of glycolysis is Phosphofructokinase (PFK) at Step 3.",
    "Gross ATP formed in glycolysis = 4 ATP; Net ATP gained = 2 ATP.",
    "Substrate-level phosphorylation occurs at Step 7 (1,3-BPGA → 3-PGA) and Step 10 (PEP → Pyruvate).",
    "Water is released at Step 9 catalyzed by Enolase.",
    "In Alcoholic Fermentation, CO₂ IS evolved; in Lactic Acid Fermentation, NO CO₂ is evolved.",
    "Yeast cells die when alcohol concentration reaches ~13%.",
    "Energy efficiency of fermentation is LESS THAN 7% of total glucose energy."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing Gross ATP and Net ATP yield of Glycolysis.",
      correctFact: "Gross ATP produced in Glycolysis is 4 ATP (via substrate-level phosphorylation). Net ATP gain is 2 ATP because 2 ATP are consumed during investment phase (Steps 1 & 3).",
      whyItMattersForNEET: "Extremely common trap in NEET questions testing 'gross' vs 'net' ATP yield."
    },
    {
      commonConfusion: "Believing that CO₂ is released during Lactic Acid Fermentation.",
      correctFact: "NO CO₂ is released during Lactic Acid Fermentation because Pyruvate (3C) is directly reduced to Lactic Acid (3C). CO₂ is released ONLY during Alcoholic Fermentation.",
      whyItMattersForNEET: "Frequently asked assertion-reason and statement matching question in NEET."
    },
    {
      commonConfusion: "Thinking Fermentation produces additional ATP beyond Glycolysis.",
      correctFact: "Fermentation steps themselves produce ZERO additional ATP. The 2 ATP gained under anaerobic conditions come solely from Glycolysis. Fermentation functions only to regenerate NAD⁺.",
      whyItMattersForNEET: "Critical energetic concept routinely tested in NEET UG."
    }
  ],

  quickRevision: [
    "Glycolysis: Cytoplasm, 1 Glucose → 2 Pyruvate + 2 Net ATP + 2 NADH.",
    "PFK = Rate limiting pacemaker enzyme of glycolysis.",
    "Substrate-level phosphorylation = Steps 7 & 10 (Gross 4 ATP).",
    "Invertase converts sucrose into glucose + fructose in plants.",
    "Alcoholic Fermentation: Pyruvate → Acetaldehyde + CO₂ → Ethanol + NAD⁺ (Pyruvate Decarboxylase + Alcohol Dehydrogenase). Yeast dies at 13% alcohol.",
    "Lactic Acid Fermentation: Pyruvate → Lactic Acid + NAD⁺ (Lactate Dehydrogenase). No CO₂ evolved.",
    "Fermentation traps < 7% of glucose energy."
  ],

  practiceQuestions: [
    {
      id: "prac-glyco-1",
      questionText: "How many molecules of ATP are directly generated via substrate-level phosphorylation during the complete conversion of ONE molecule of Glucose into two molecules of Pyruvic acid in glycolysis?",
      options: [
        "2 ATP",
        "4 ATP",
        "6 ATP",
        "8 ATP"
      ],
      correctOption: 1,
      explanation: "Substrate-level phosphorylation occurs twice per 3-carbon triose (at Step 7 and Step 10). Since 1 glucose yields two triose molecules, total gross ATP synthesized by substrate-level phosphorylation is 2 × 2 = 4 ATP. (Net gain is 2 ATP after subtracting 2 invested ATP).",
      difficulty: "Medium",
      conceptTested: "Substrate-level phosphorylation in Glycolysis"
    },
    {
      id: "prac-glyco-2",
      questionText: "Which of the following enzymes catalyzes an IRREVERSIBLE step in glycolysis involving ATP consumption?",
      options: [
        "Phosphoglycerate Kinase",
        "Phosphofructokinase",
        "Triose Phosphate Isomerase",
        "Enolase"
      ],
      correctOption: 1,
      explanation: "Phosphofructokinase (PFK) catalyzes the irreversible phosphorylation of Fructose-6-phosphate to Fructose-1,6-bisphosphate utilizing 1 ATP at Step 3.",
      difficulty: "Easy",
      conceptTested: "Key regulatory enzymes of Glycolysis"
    }
  ],

  pyqs: [
    {
      id: "pyq-glyco-1",
      year: 2021,
      exam: "NEET UG",
      questionText: "What is the net gain of ATP molecules during nuclear/cytosolic glycolysis of one glucose molecule?",
      options: [
        "2 ATP",
        "4 ATP",
        "36 ATP",
        "38 ATP"
      ],
      correctOption: 0,
      explanation: "During glycolysis, 4 ATP molecules are produced via substrate-level phosphorylation and 2 ATP molecules are consumed during the investment phase, resulting in a NET gain of 2 ATP molecules.",
      difficulty: "Easy",
      topicTested: "Net ATP yield of Glycolysis",
      verified: true
    },
    {
      id: "pyq-glyco-2",
      year: 2020,
      exam: "NEET UG",
      questionText: "Conversion of glucose to glucose-6-phosphate, the first irreversible reaction of glycolysis, is catalyzed by:",
      options: [
        "Hexokinase",
        "Enolase",
        "Phosphofructokinase",
        "Aldolase"
      ],
      correctOption: 0,
      explanation: "Hexokinase phosphorylates glucose into glucose-6-phosphate in the presence of Mg²⁺ at the first step of glycolysis.",
      difficulty: "Easy",
      topicTested: "First step enzyme of Glycolysis",
      verified: true
    },
    {
      id: "pyq-glyco-3",
      year: 2019,
      exam: "NEET UG",
      questionText: "Which of the following statements is INCORRECT regarding fermentation?",
      options: [
        "It accounts for a net gain of only two molecules of ATP for each molecule of glucose degraded to pyruvic acid.",
        "NADH is oxidized to NAD⁺ rather slowly in fermentation.",
        "Less than seven percent of energy in glucose is released in fermentation.",
        "Lactic acid fermentation involves decarboxylation of pyruvate."
      ],
      correctOption: 3,
      explanation: "Statement 4 is INCORRECT because Lactic acid fermentation does NOT involve decarboxylation (no CO₂ is released). Pyruvate (3C) is directly reduced to Lactic acid (3C).",
      difficulty: "Medium",
      topicTested: "Features of Lactic Acid Fermentation",
      verified: true
    }
  ]
};
