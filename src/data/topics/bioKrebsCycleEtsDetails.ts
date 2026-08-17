import { DetailedTopicContent } from '../../types/neet';

export const bioKrebsCycleEtsDetails: DetailedTopicContent = {
  topicId: "bio-krebs-cycle-ets",
  topicName: "Aerobic Respiration: Link Reaction, Krebs Cycle, ETS, Chemiosmosis, Amphibolic Pathway & RQ",
  subject: "Biology",
  class: "Class 11",
  classification: "Plant Physiology",
  chapter: "Respiration in Plants",

  whatIsThisTopic: "Aerobic respiration completes the total oxidation of pyruvate inside the mitochondria through three coupled stages: 1) Link Reaction (Matrix, Oxidative Decarboxylation producing Acetyl-CoA + CO₂ + NADH); 2) Krebs Cycle / TCA Cycle (Matrix, 8-step cyclic pathway producing CO₂, NADH, FADH₂, and GTP); 3) Electron Transport System (ETS) & Chemiosmosis (Inner Membrane, Complexes I–V generating bulk ATP via oxidative phosphorylation using O₂ as terminal electron acceptor). Respiration is an Amphibolic pathway, and substrate utilization is measured by Respiratory Quotient (RQ).",

  basicIdea: [
    "Aerobic Respiration requires molecular oxygen and occurs inside the MITOCHONDRIA of eukaryotic cells (or mesosomes/plasma membrane of aerobically respiring prokaryotes). It completely oxidizes glucose into 6 CO₂ + 6 H₂O, releasing 36 to 38 ATP.",
    "Mitochondrial Structure: The outer membrane is smooth and permeable. The inner membrane is folded into cristae (increasing surface area) and contains ETS complexes (Complexes I-V) and Cytochrome c. The central compartment is the Matrix containing Pyruvate dehydrogenase, Krebs cycle enzymes, mitochondrial DNA, and ribosomes.",
    "Link Reaction (Gate Step / Transition Step): Pyruvate (3C) transported from cytoplasm into the mitochondrial matrix undergoes oxidative decarboxylation catalyzed by PYRUVATE DEHYDROGENASE COMPLEX (requiring Mg²⁺, TPP, NAD⁺, CoA, and Lipoic acid) to yield Acetyl-CoA (2C) + CO₂ + NADH + H⁺.",
    "Krebs Cycle (TCA Cycle / Citric Acid Cycle): Elucidated by Sir Hans Krebs (Nobel Prize 1953). Occurs in the MITOCHONDRIAL MATRIX. Acetyl-CoA (2C) combines with Oxaloacetic acid (OAA, 4C) to form Citric acid (6C). The cycle releases 2 CO₂, produces 3 NADH, 1 FADH₂, and 1 GTP (via substrate-level phosphorylation) per Acetyl-CoA.",
    "Electron Transport System (ETS): Located on the INNER MITOCHONDRIAL MEMBRANE. Electrons from NADH and FADH₂ are transferred through a chain of 4 electron-carrier complexes (I: NADH Dehydrogenase, II: Succinate Dehydrogenase, III: Cytochrome bc₁ Complex, IV: Cytochrome c Oxidase) to molecular Oxygen (O₂), the terminal electron acceptor, forming H₂O.",
    "Chemiosmotic Hypothesis & Oxidative Phosphorylation: Electron transport drives proton pumping from the matrix into the intermembrane space, creating a proton electrochemical gradient (high [H⁺] in intermembrane space). Protons flow back into the matrix down their gradient through Complex V (ATP Synthase, F₀-F₁ complex). Flow of 2 H⁺ through F₀ drives the synthesis of 1 ATP at the F₁ headpiece.",
    "Respiratory Balance Sheet: Theoretical yield from 1 glucose molecule is 38 ATP (gross) or 36–38 ATP (net, depending on Glycerol-phosphate shuttle [36 ATP] vs. Malate-aspartate shuttle [38 ATP]). Modern biochemical estimates yield 30–32 ATP based on 2.5 ATP/NADH and 1.5 ATP/FADH₂.",
    "Amphibolic Pathway: Respiration is both catabolic (breakdown) and anabolic (synthesis). Intermediates of Krebs cycle and glycolysis are withdrawn for biosynthesizing fats, amino acids, proteins, cytochromes, and chlorophyll.",
    "Respiratory Quotient (RQ): RQ = (Volume of CO₂ evolved) / (Volume of O₂ consumed). Carbohydrates = 1.0, Fats (Tripalmitin) = 0.7, Proteins = 0.9, Organic Acids (Malic acid) = 1.33, Anaerobic = Infinity (∞), Succulents = 0."
  ],

  importantTerms: [
    {
      term: "Link Reaction (Pyruvate Oxidation)",
      definition: "The oxidative decarboxylation step in the mitochondrial matrix connecting glycolysis to the Krebs cycle, converting 2 Pyruvate (3C) into 2 Acetyl-CoA (2C) + 2 CO₂ + 2 NADH.",
      neetNote: "Catalyzed by Pyruvate Dehydrogenase complex requiring 5 cofactors: Mg²⁺, TPP, NAD⁺, CoA, and Lipoic acid."
    },
    {
      term: "Krebs Cycle (TCA Cycle)",
      symbol: "TCA",
      definition: "The cyclic matrix-located series of 8 enzymatic reactions that completely oxidizes Acetyl-CoA (2C) into 2 CO₂, generating reducing power (3 NADH, 1 FADH₂) and 1 GTP.",
      neetNote: "First stable product is Citric Acid (6C, a tricarboxylic acid). Primary acceptor is Oxaloacetic acid (OAA, 4C)."
    },
    {
      term: "Succinate Dehydrogenase",
      definition: "Complex II of ETS and the ONLY Krebs cycle enzyme that is MEMBRANE-BOUND (embedded in the inner mitochondrial membrane) rather than soluble in the matrix.",
      neetNote: "Frequently asked NEET trap: Catalyzes oxidation of Succinate to Fumarate, producing FADH₂."
    },
    {
      term: "Cytochrome c Oxidase (Complex IV)",
      symbol: "Complex IV",
      definition: "The final electron carrier complex of ETS containing Cytochromes a and a₃ and two Copper centers (Cu_A and Cu_B) that transfers electrons directly to molecular oxygen.",
      neetNote: "Inhibited by Cyanide (CN⁻) and Carbon Monoxide (CO)."
    },
    {
      term: "Oxidative Phosphorylation",
      definition: "The ATP synthesis process in mitochondria where phosphorylation of ADP to ATP is coupled to electron transfer from NADH/FADH₂ to O₂ via proton gradient across inner membrane.",
      neetNote: "Mediated by Complex V (ATP Synthase / F₀-F₁ complex)."
    },
    {
      term: "Amphibolic Pathway",
      definition: "A metabolic pathway involved in both catabolic (degradative) and anabolic (biosynthetic) reactions.",
      neetNote: "Respiratory pathway is correctly called Amphibolic rather than purely catabolic."
    },
    {
      term: "Respiratory Quotient (RQ)",
      symbol: "RQ",
      definition: "The volumetric ratio of CO₂ evolved to O₂ consumed per unit time during respiration of a specific substrate.",
      neetNote: "RQ values: Carbohydrates = 1.0, Fats = 0.7, Proteins = 0.9, Organic acids > 1, Anaerobic = ∞."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Aerobic Respiration Overview & Role of Oxygen",
      paragraphs: [
        "Aerobic respiration is the complete enzymatic oxidation of respiratory substrates in the presence of molecular oxygen (O₂), leading to total degradation into CO₂ and H₂O with maximum ATP generation.",
        "Mitochondrial Compartmentalization:",
        "1. Outer Mitochondrial Membrane: Smooth, porous, contains porin proteins. Permeable to small molecules.",
        "2. Intermembrane Space (Perimitochondrial Space): High proton concentration ([H⁺]) during active ETS, acting as a proton reservoir.",
        "3. Inner Mitochondrial Membrane: Highly impermeable, folded into CRISTAE to dramatically increase surface area. Houses ETS Complexes (I, II, III, IV), Cytochrome c, and Complex V (F₀-F₁ ATP Synthase).",
        "4. Mitochondrial Matrix: Dense fluid containing enzymes for Link Reaction, Krebs cycle, fatty acid oxidation, mitochondrial 70S ribosomes, and circular dsDNA."
      ],
      importantPoints: [
        "Krebs cycle occurs in the Mitochondrial Matrix.",
        "ETS and Oxidative Phosphorylation occur on the Inner Mitochondrial Membrane.",
        "Cristae increase the surface area available for ETS complexes."
      ]
    },
    {
      heading: "2. Pyruvate Oxidation / Link Reaction (The Gate Step)",
      paragraphs: [
        "Pyruvic acid (3C) generated in cytoplasm during glycolysis is actively transported into the mitochondrial matrix.",
        "Mechanism of Link Reaction:",
        "Inside the matrix, Pyruvate undergoes Oxidative Decarboxylation catalyzed by the multienzyme complex PYRUVATE DEHYDROGENASE.",
        "Reaction Equation:",
        "\\text{Pyruvic Acid (3C)} + \\text{CoA-SH} + \\text{NAD}^+ \\xrightarrow[\\text{Mg}^{2+}, \\text{TPP}, \\text{Lipoate}]{\\text{Pyruvate Dehydrogenase}} \\text{Acetyl-CoA (2C)} + \\text{CO}_2\\uparrow + \\text{NADH} + \\text{H}^+",
        "5 Essential Cofactors Required:",
        "1. Magnesium ions (Mg²⁺)",
        "2. Thiamine Pyrophosphate (TPP - Vitamin B₁ derivative)",
        "3. Nicotinamide Adenine Dinucleotide (NAD⁺)",
        "4. Coenzyme A (CoA-SH)",
        "5. Lipoic Acid (Lipoate)",
        "Energetics per Glucose Molecule (2 Pyruvate):",
        "• Yields 2 Acetyl-CoA (2C) + 2 CO₂ + 2 NADH + 2 H⁺."
      ],
      importantPoints: [
        "Link Reaction connects Glycolysis (cytoplasm) to Krebs Cycle (matrix).",
        "Produces 2 Acetyl-CoA + 2 CO₂ + 2 NADH per glucose molecule.",
        "Pyruvate Dehydrogenase requires 5 cofactors: Mg²⁺, TPP, NAD⁺, CoA, Lipoic acid."
      ]
    },
    {
      heading: "3. Krebs Cycle / TCA Cycle (Citric Acid Cycle) — Detailed 8 Steps",
      paragraphs: [
        "Discovered by Sir Hans Krebs in 1937 using pigeon breast muscle. Located entirely in the MITOCHONDRIAL MATRIX (except Succinate Dehydrogenase which is inner membrane bound).",
        "Step 1 (Condensation): Acetyl-CoA (2C) condenses with Oxaloacetic Acid (OAA, 4C) and H₂O to form Citric Acid (Citrate, 6C) and free CoA-SH. Enzyme: CITRATE SYNTHASE. (First 6C product gives the name Citric Acid Cycle).",
        "  \\text{Acetyl-CoA (2C)} + \\text{OAA (4C)} + \\text{H}_2\\text{O} \\xrightarrow{\\text{Citrate Synthase}} \\text{Citrate (6C)} + \\text{CoA-SH}",
        "Step 2 (Isomerization): Citrate (6C) is isomerized to Isocitrate (6C) via Cis-Aconitate intermediate. Enzyme: ACONITASE (requires Fe²⁺).",
        "Step 3 (First Oxidative Decarboxylation): Isocitrate (6C) is oxidized and decarboxylated to form α-Ketoglutarate (5C) + CO₂ + NADH + H⁺. Enzyme: ISOCITRATE DEHYDROGENASE (requires Mg²⁺/Mn²⁺).",
        "Step 4 (Second Oxidative Decarboxylation): α-Ketoglutarate (5C) undergoes oxidative decarboxylation with CoA-SH to form Succinyl-CoA (4C) + CO₂ + NADH + H⁺. Enzyme: α-KETOGLUTARATE DEHYDROGENASE.",
        "Step 5 (Substrate-Level Phosphorylation): High-energy thioester bond of Succinyl-CoA (4C) is cleaved to form Succinate (Succinic acid, 4C) and CoA-SH. Coupled to phosphorylation of GDP to GTP (or ADP to ATP). Enzyme: SUCCINYL-COA SYNTHETASE (Succinate Thiokinase).",
        "  \\text{Succinyl-CoA (4C)} + \\text{GDP} + \\text{P}_i \\xrightarrow{\\text{Succinyl-CoA Synthetase}} \\text{Succinate (4C)} + \\text{GTP} + \\text{CoA-SH}",
        "  (In plant cells, ATP is formed directly; in animal cells, GTP is formed which transfers P to ADP: GTP + ADP → GDP + ATP).",
        "Step 6 (Dehydrogenation/Oxidation): Succinate (4C) is oxidized to Fumarate (Fumaric acid, 4C), transferring 2 e⁻ and 2 H⁺ to FAD forming FADH₂. Enzyme: SUCCINATE DEHYDROGENASE (membrane-bound Complex II).",
        "Step 7 (Hydration): Fumarate (4C) adds a molecule of H₂O to form Malate (Malic acid, 4C). Enzyme: FUMARASE.",
        "Step 8 (Dehydrogenation/Oxidation - Regenerating Primary Acceptor): Malate (4C) is oxidized to Oxaloacetic Acid (OAA, 4C), yielding NADH + H⁺. Enzyme: MALATE DEHYDROGENASE. OAA is now ready to condense with another Acetyl-CoA!"
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="400" fill="#0f172a" rx="12"/>
          <text x="290" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">KREBS CYCLE (TCA / CITRIC ACID CYCLE) SCHEME</text>

          <!-- Input -->
          <g transform="translate(190, 42)">
            <rect x="0" y="0" width="200" height="28" fill="#0284c7" rx="6"/>
            <text x="100" y="18" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Acetyl-CoA (2C) [from Link Rxn]</text>
          </g>

          <path d="M 290 70 L 290 95" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)"/>

          <!-- Cycle Circle -->
          <circle cx="290" cy="230" r="110" fill="none" stroke="#334155" stroke-width="3" stroke-dasharray="6,4"/>

          <!-- Step 1: Citrate -->
          <g transform="translate(360, 125)">
            <rect x="0" y="0" width="130" height="32" fill="#059669" rx="6"/>
            <text x="65" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Citrate (6C)</text>
            <text x="65" y="27" fill="#a7f3d0" font-size="8" text-anchor="middle">Citrate Synthase</text>
          </g>

          <!-- Step 3: alpha-Ketoglutarate -->
          <g transform="translate(370, 240)">
            <rect x="0" y="0" width="140" height="36" fill="#059669" rx="6"/>
            <text x="70" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">α-Ketoglutarate (5C)</text>
            <text x="70" y="28" fill="#fde047" font-size="8" font-weight="bold" text-anchor="middle">+ CO₂ + NADH</text>
          </g>

          <!-- Step 5: Succinate -->
          <g transform="translate(225, 325)">
            <rect x="0" y="0" width="130" height="36" fill="#059669" rx="6"/>
            <text x="65" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Succinate (4C)</text>
            <text x="65" y="28" fill="#4ade80" font-size="8" font-weight="bold" text-anchor="middle">+1 GTP/ATP (SLP)</text>
          </g>

          <!-- Step 7: Malate -->
          <g transform="translate(70, 240)">
            <rect x="0" y="0" width="120" height="32" fill="#059669" rx="6"/>
            <text x="60" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Malate (4C)</text>
            <text x="60" y="27" fill="#a7f3d0" font-size="8" text-anchor="middle">+ FADH₂ (at Succinate)</text>
          </g>

          <!-- Step 8: OAA -->
          <g transform="translate(80, 125)">
            <rect x="0" y="0" width="120" height="32" fill="#0284c7" rx="6"/>
            <text x="60" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">OAA (4C)</text>
            <text x="60" y="27" fill="#7dd3fc" font-size="8" text-anchor="middle">+ NADH (Malate Dehyd)</text>
          </g>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
            </marker>
          </defs>
        </svg>`,
        caption: "Cyclic 8-Step Pathway of Krebs Cycle in Mitochondrial Matrix.",
        guide: "WHAT TO OBSERVE: 1 Acetyl-CoA (2C) + OAA (4C) → Citrate (6C). Cycle releases 2 CO₂, forms 3 NADH, 1 FADH₂, and 1 GTP/ATP via substrate-level phosphorylation per turn."
      },
      importantPoints: [
        "Primary acceptor of Acetyl-CoA in Krebs cycle = Oxaloacetic acid (OAA, 4C).",
        "First stable 6C product = Citric acid (Citrate).",
        "Substrate-level phosphorylation in Krebs cycle = Step 5 (Succinyl-CoA → Succinate yielding 1 GTP/ATP).",
        "Succinate Dehydrogenase (Step 6) is the ONLY membrane-bound enzyme of Krebs cycle (Complex II of ETS)."
      ]
    },
    {
      heading: "4. Krebs Cycle Energy Account",
      paragraphs: [
        "Energy products synthesized per turn of Krebs cycle (per 1 Acetyl-CoA molecule):",
        "• 3 molecules of NADH + H⁺ (generated at Steps 3, 4, and 8).",
        "• 1 molecule of FADH₂ (generated at Step 6).",
        "• 1 molecule of GTP / ATP (generated via substrate-level phosphorylation at Step 5).",
        "• 2 molecules of CO₂ released (at Steps 3 and 4).",
        "Per Glucose Molecule (2 Acetyl-CoA molecules from 2 Pyruvate):",
        "• 6 NADH + H⁺",
        "• 2 FADH₂",
        "• 2 GTP / ATP",
        "• 4 CO₂ released",
        "Combined Total Products from 1 Glucose through Link Reaction + Krebs Cycle:",
        "• Link Reaction: 2 Acetyl-CoA + 2 CO₂ + 2 NADH",
        "• Krebs Cycle: 4 CO₂ + 6 NADH + 2 FADH₂ + 2 GTP",
        "• Cumulative (Link + Krebs): 6 CO₂ + 8 NADH + 2 FADH₂ + 2 GTP."
      ],
      importantPoints: [
        "Per Acetyl-CoA: 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂.",
        "Per Glucose (2 Acetyl-CoA): 6 NADH, 2 FADH₂, 2 GTP, 4 CO₂.",
        "All 6 carbon atoms of Glucose are liberated as 6 CO₂ (2 in Link Rxn + 4 in Krebs Cycle)."
      ]
    },
    {
      heading: "5. Electron Transport System (ETS) & Multi-Protein Complexes",
      paragraphs: [
        "The Electron Transport System (ETS) consists of a metabolic sequence of electron-carrier complexes embedded in the INNER MITOCHONDRIAL MEMBRANE that transport electrons from NADH and FADH₂ to molecular oxygen.",
        "The 5 Inner Membrane Complexes:",
        "1. COMPLEX I (NADH Dehydrogenase / NADH-CoQ Reductase): Accepts 2 e⁻ from matrix NADH. Electrons pass from NADH → FMN (Flavin Mononucleotide) → Fe-S (Iron-Sulfur clusters) → Ubiquinone (UQ/CoQ). PUMPS 4 H⁺ from matrix into intermembrane space.",
        "2. COMPLEX II (Succinate Dehydrogenase / Succinate-CoQ Reductase): Accepts 2 e⁻ from matrix FADH₂ (generated at Step 6 of Krebs cycle). Electrons pass from FAD → Fe-S → Ubiquinone. DOES NOT PUMP H⁺ across membrane.",
        "3. UBIQUINONE (Coenzyme Q / UQ): A small lipophilic mobile electron carrier residing WITHIN the inner membrane bilayer. Receives electrons from both Complex I (NADH) and Complex II (FADH₂), becoming reduced to Ubiquinol (UQH₂). UQH₂ transfers electrons to Complex III.",
        "4. COMPLEX III (Cytochrome bc₁ Complex / Ubiquinol-Cytochrome c Reductase): Receives electrons from Ubiquinol. Electrons flow through Cytochrome b → Fe-S → Cytochrome c₁ → Cytochrome c. PUMPS 4 H⁺ into intermembrane space.",
        "5. CYTOCHROME c: A small water-soluble mobile protein attached to the OUTER SURFACE of the inner mitochondrial membrane. Acts as a mobile shuttle transferring electrons from Complex III to Complex IV.",
        "6. COMPLEX IV (Cytochrome c Oxidase): Contains Cytochromes a and a₃ and two Copper centers (Cu_A and Cu_B). Accepts electrons from Cytochrome c and delivers them to molecular Oxygen (O₂), the terminal acceptor. PUMPS 2 H⁺ into intermembrane space.",
        "  \\frac{1}{2}\\text{O}_2 + 2\\text{H}^+ + 2e^- \\rightarrow \\text{H}_2\\text{O (Metabolic Water)}",
        "7. COMPLEX V (ATP Synthase / F₀-F₁ Complex): Utilizes the proton electrochemical gradient built up by Complexes I, III, and IV to synthesize ATP."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
          <rect width="580" height="340" fill="#0f172a" rx="12"/>
          <text x="290" y="22" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ELECTRON TRANSPORT SYSTEM (ETS) COMPLEXES IN INNER MEMBRANE</text>

          <!-- Intermembrane Space -->
          <rect x="20" y="40" width="540" height="40" fill="#1e293b" stroke="#38bdf8" rx="6"/>
          <text x="30" y="65" fill="#f8fafc" font-size="11" font-weight="bold">INTERMEMBRANE SPACE (High H⁺ Concentration)</text>
          <text x="380" y="65" fill="#38bdf8" font-size="11" font-weight="bold">H⁺ H⁺ H⁺ H⁺ H⁺ H⁺</text>

          <!-- Inner Membrane Bilayer -->
          <rect x="20" y="90" width="540" height="150" fill="#334155" rx="6"/>
          <text x="30" y="110" fill="#cbd5e1" font-size="10" font-weight="bold">INNER MITOCHONDRIAL MEMBRANE</text>

          <!-- Complex I -->
          <g transform="translate(60, 115)">
            <rect x="0" y="0" width="70" height="110" fill="#0284c7" rx="6"/>
            <text x="35" y="30" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Complex I</text>
            <text x="35" y="50" fill="#bae6fd" font-size="8" text-anchor="middle">NADH Dehyd.</text>
            <text x="35" y="95" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">Pumps 4 H⁺↑</text>
          </g>

          <!-- Complex II -->
          <g transform="translate(150, 135)">
            <rect x="0" y="0" width="65" height="90" fill="#d97706" rx="6"/>
            <text x="32" y="30" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Complex II</text>
            <text x="32" y="50" fill="#fef08a" font-size="8" text-anchor="middle">Succinate Dehyd.</text>
            <text x="32" y="75" fill="#cbd5e1" font-size="8" text-anchor="middle">No H⁺ Pump</text>
          </g>

          <!-- UQ -->
          <g transform="translate(230, 145)">
            <circle cx="20" cy="25" r="20" fill="#f59e0b"/>
            <text x="20" y="28" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">UQ</text>
          </g>

          <!-- Complex III -->
          <g transform="translate(280, 115)">
            <rect x="0" y="0" width="70" height="110" fill="#0284c7" rx="6"/>
            <text x="35" y="30" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Complex III</text>
            <text x="35" y="50" fill="#bae6fd" font-size="8" text-anchor="middle">Cyt bc₁</text>
            <text x="35" y="95" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">Pumps 4 H⁺↑</text>
          </g>

          <!-- Cyt c -->
          <g transform="translate(365, 95)">
            <circle cx="15" cy="12" r="14" fill="#ec4899"/>
            <text x="15" y="15" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Cyt c</text>
          </g>

          <!-- Complex IV -->
          <g transform="translate(410, 115)">
            <rect x="0" y="0" width="70" height="110" fill="#0284c7" rx="6"/>
            <text x="35" y="25" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Complex IV</text>
            <text x="35" y="42" fill="#bae6fd" font-size="8" text-anchor="middle">Cyt c Oxidase</text>
            <text x="35" y="58" fill="#bae6fd" font-size="8" text-anchor="middle">(Cyt a, a₃, Cu)</text>
            <text x="35" y="95" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">Pumps 2 H⁺↑</text>
          </g>

          <!-- Complex V -->
          <g transform="translate(495, 110)">
            <rect x="0" y="0" width="55" height="120" fill="#10b981" rx="6"/>
            <text x="27" y="30" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Complex V</text>
            <text x="27" y="50" fill="#a7f3d0" font-size="8" text-anchor="middle">F₀-F₁ ATP</text>
            <text x="27" y="62" fill="#a7f3d0" font-size="8" text-anchor="middle">Synthase</text>
            <text x="27" y="100" fill="#fef08a" font-size="9" font-weight="bold" text-anchor="middle">H⁺↓ → ATP</text>
          </g>

          <!-- Matrix Space -->
          <rect x="20" y="250" width="540" height="75" fill="#1e293b" stroke="#38bdf8" rx="6"/>
          <text x="30" y="275" fill="#f8fafc" font-size="11" font-weight="bold">MITOCHONDRIAL MATRIX (Low H⁺ Concentration)</text>
          <text x="30" y="295" fill="#64748b" font-size="10">NADH → Complex I | FADH₂ → Complex II | Terminal Acceptor: ½ O₂ + 2H⁺ + 2e⁻ → H₂O</text>
        </svg>`,
        caption: "Coupled ETS Complexes I–IV and Complex V (ATP Synthase) in Inner Mitochondrial Membrane.",
        guide: "WHAT TO OBSERVE: Complex I, III, and IV pump protons (H⁺) from matrix into intermembrane space. Complex II does not pump H⁺. Cytochrome c is attached to the outer surface of inner membrane."
      },
      importantPoints: [
        "Cytochrome c is a mobile electron carrier attached to the OUTER surface of the inner mitochondrial membrane.",
        "Ubiquinone (UQ) is located WITHIN the inner membrane.",
        "Complex IV contains Cytochromes a and a₃ and two copper centers (Cu_A, Cu_B).",
        "Oxygen is the terminal electron acceptor and combines with protons to form metabolic water."
      ]
    },
    {
      heading: "6. Oxidative Phosphorylation & Chemiosmotic Hypothesis",
      paragraphs: [
        "Chemiosmotic Hypothesis (Peter Mitchell, Nobel Prize 1978):",
        "ATP synthesis in mitochondria is driven by a Proton Electrochemical Gradient across the inner membrane.",
        "Mechanistic Steps:",
        "1. Proton Pumping: As electrons flow along ETS complexes (I → UQ → III → Cyt c → IV), protons (H⁺) are actively pumped from the matrix into the intermembrane space.",
        "2. Gradient Formation: Accumulation of H⁺ in intermembrane space creates a high proton concentration (low pH) and positive electric potential compared to the matrix.",
        "3. Proton Motive Force: The membrane is impermeable to H⁺ except through the specific transmembrane channel of Complex V (ATP Synthase).",
        "4. ATP Synthesis at Complex V (F₀-F₁ ATP Synthase):",
        "   - F₀ Headpiece / Channel: Hydrophobic integral membrane protein complex forming a transmembrane channel through which protons cross back into the matrix.",
        "   - F₁ Headpiece: Peripheral membrane protein complex protruding into the matrix. Contains catalytic sites for ATP synthesis from ADP + Pᵢ.",
        "5. Stoichiometry: For every 2 H⁺ passing down the proton gradient through F₀ from intermembrane space to matrix, 1 molecule of ATP is synthesized at F₁ headpiece."
      ],
      importantPoints: [
        "Peter Mitchell proposed the Chemiosmotic Hypothesis.",
        "Protons pump OUT from matrix INTO intermembrane space; protons flow BACK into matrix through F₀ channel of Complex V.",
        "Flow of 2 H⁺ through F₀ produces 1 ATP at F₁ headpiece."
      ]
    },
    {
      heading: "7. Oxygen as Terminal Electron Acceptor",
      paragraphs: [
        "Although oxygen is used only at the very final step of aerobic respiration (Complex IV), the entire process of aerobic respiration operates ONLY in the presence of oxygen!",
        "Why Oxygen is Indispensable:",
        "• Oxygen acts as the ultimate 'electron sink' or terminal electron acceptor at Complex IV, combining with 2 e⁻ and 2 H⁺ to form H₂O.",
        "• By continually removing electrons from Complex IV, oxygen maintains electron flow through the entire ETS chain.",
        "• If oxygen is absent, Complex IV becomes backed up with electrons. Consequently, Complex III, UQ, Complex I, and II become fully reduced and stop transferring electrons.",
        "• ETS stops, proton pumping ceases, proton gradient dissipates, and ATP synthesis via oxidative phosphorylation completely halts!"
      ],
      importantPoints: [
        "Oxygen is the terminal electron acceptor at Complex IV.",
        "Role of O₂ is to drive the entire ETS chain by continually removing terminal electrons."
      ]
    },
    {
      heading: "8. ATP Yield & Respiratory Balance Sheet",
      paragraphs: [
        "Let us calculate the net ATP yield from complete theoretical oxidation of ONE Glucose molecule (C₆H₁₂O₆):",
        "Classic NCERT Theoretical Equivalents:",
        "• 1 NADH + H⁺ oxidized in ETS → 3 ATP synthesized.",
        "• 1 FADH₂ oxidized in ETS → 2 ATP synthesized.",
        "Complete Theoretical Accounting per Glucose:",
        "1. GLYCOLYSIS (Cytoplasm):",
        "   - Direct Substrate-Level Phosphorylation = +2 ATP (net)",
        "   - 2 Cytosolic NADH:",
        "     a) Malate-Aspartate Shuttle (Heart, Liver, Kidney): Yields 2 × 3 = +6 ATP.",
        "     b) Glycerol-Phosphate Shuttle (Skeletal muscle, Brain): Yields 2 × 2 = +4 ATP.",
        "2. LINK REACTION (Mitochondrial Matrix):",
        "   - 2 Matrix NADH → 2 × 3 = +6 ATP.",
        "3. KREBS CYCLE (Mitochondrial Matrix):",
        "   - Direct Substrate-Level Phosphorylation = +2 GTP (+2 ATP)",
        "   - 6 Matrix NADH → 6 × 3 = +18 ATP.",
        "   - 2 Matrix FADH₂ → 2 × 2 = +4 ATP.",
        "TOTAL THEORETICAL ATP YIELD:",
        "• With Malate-Aspartate Shuttle = 2 + 6 + 6 + 2 + 18 + 4 = 38 ATP (Gross/Max).",
        "• With Glycerol-Phosphate Shuttle = 2 + 4 + 6 + 2 + 18 + 4 = 36 ATP (Net in most eukaryotic cells).",
        "Modern Biochemical Values (P/O Ratio):",
        "Modern measurements show 1 NADH yields ~2.5 ATP and 1 FADH₂ yields ~1.5 ATP, giving a modern realistic net yield of 30 to 32 ATP per glucose."
      ],
      importantPoints: [
        "NCERT standard theoretical net yield = 36 to 38 ATP per glucose.",
        "Difference between 36 and 38 ATP depends on the shuttle system used to transport cytosolic 2 NADH into mitochondria.",
        "1 NADH = 3 ATP (NCERT standard); 1 FADH₂ = 2 ATP (NCERT standard)."
      ]
    },
    {
      heading: "9. Amphibolic Pathway: Respiration as Catabolic & Anabolic Hub",
      paragraphs: [
        "Traditionally, respiration was classified strictly as a CATABOLIC pathway (degradation of glucose into CO₂ and H₂O). However, modern biochemistry recognizes respiration as an AMPHIBOLIC PATHWAY because it involves both CATABOLISM (breakdown) and ANABOLISM (synthesis).",
        "1. Catabolic Entry Points for Alternative Respiratory Substrates:",
        "   - Fats: Hydrolyzed into Fatty Acids + Glycerol.",
        "     • Glycerol is phosphorylated and converted into DHAP (Dihydroxyacetone phosphate), entering glycolysis.",
        "     • Fatty Acids undergo β-oxidation to form Acetyl-CoA, entering the Krebs cycle.",
        "   - Proteins: Hydrolyzed by proteases into Amino Acids.",
        "     • Deaminated amino acids enter as Pyruvate, Acetyl-CoA, α-Ketoglutarate, Succinyl-CoA, or Oxaloacetate depending on carbon structure.",
        "2. Anabolic Intermediates Withdrawn for Biosynthesis:",
        "   - Acetyl-CoA is withdrawn to synthesize Fatty Acids, Cutin, Suberin, Steroids, and Terpenes.",
        "   - Succinyl-CoA is withdrawn to synthesize Chlorophyll, Cytochromes, and Phytochromes.",
        "   - α-Ketoglutarate and Oxaloacetate are withdrawn via reductive amination to synthesize Glutamic acid and Aspartic acid (amino acids/proteins).",
        "   - Oxaloacetate is withdrawn for pyrimidine synthesis.",
        "Because breakdown and synthesis occur simultaneously through the same pool of intermediates, calling respiration purely catabolic is incorrect; it is AMPHIBOLIC."
      ],
      importantPoints: [
        "Respiration is an AMPHIBOLIC pathway (both catabolic and anabolic).",
        "Glycerol enters respiration as DHAP.",
        "Fatty acids enter respiration as Acetyl-CoA.",
        "Succinyl-CoA is the precursor for Chlorophyll and Cytochrome synthesis."
      ]
    },
    {
      heading: "10. Respiratory Quotient (RQ) & Solved Numerical Questions",
      paragraphs: [
        "The Respiratory Quotient (RQ) or Respiratory Ratio is defined as the volumetric ratio of CO₂ evolved to O₂ consumed during cellular respiration over a specific period.",
        "Formula:",
        "\\text{RQ} = \\frac{\\text{Volume of CO}_2\\text{ evolved}}{\\text{Volume of O}_2\\text{ consumed}}",
        "RQ Values for Different Respiratory Substrates:",
        "1. Carbohydrates (Glucose, Starch, Glycogen): Fully oxidized.",
        "   \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy}",
        "   \\text{RQ} = \\frac{6\\text{ CO}_2}{6\\text{ O}_2} = 1.0",
        "2. Fats / Lipids (e.g., Tripalmitin): Oxygen-poor compounds requiring more O₂ for complete oxidation.",
        "   2\\text{C}_{51}\\text{H}_{98}\\text{O}_6 + 145\\text{O}_2 \\rightarrow 102\\text{CO}_2 + 98\\text{H}_2\\text{O}",
        "   \\text{RQ} = \\frac{102\\text{ CO}_2}{145\\text{ O}_2} = 0.7",
        "3. Proteins: Oxygen-poor organic molecules.",
        "   \\text{RQ} = \\sim 0.9",
        "4. Organic Acids (e.g., Malic Acid, Oxalic Acid): Oxygen-rich compounds requiring less O₂ for oxidation.",
        "   \\text{C}_4\\text{H}_6\\text{O}_5 (\\text{Malic Acid}) + 3\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 3\\text{H}_2\\text{O}",
        "   \\text{RQ} = \\frac{4\\text{ CO}_2}{3\\text{ O}_2} = 1.33",
        "   \\text{Oxalic Acid: } 2\\text{C}_2\\text{H}_2\\text{O}_4 + \\text{O}_2 \\rightarrow 4\\text{CO}_2 + 2\\text{H}_2\\text{O} \\implies \\text{RQ} = \\frac{4}{1} = 4.0",
        "5. Anaerobic Respiration: No O₂ consumed.",
        "   \\text{RQ} = \\frac{\\text{CO}_2}{0\\text{ O}_2} = \\infty \\text{ (Infinity)}",
        "6. Succulents / CAM Plants at Night: Incomplete oxidation of carbohydrates to organic acids without CO₂ release.",
        "   \\text{RQ} = \\frac{0\\text{ CO}_2}{\\text{O}_2} = 0"
      ],
      importantPoints: [
        "RQ of Carbohydrates = 1.0",
        "RQ of Fats (Tripalmitin) = 0.7",
        "RQ of Proteins = 0.9",
        "RQ of Organic acids > 1 (Malic acid = 1.33, Oxalic acid = 4.0)",
        "RQ during Anaerobic Respiration = Infinity (∞)",
        "In germinating fatty seeds (castor, mustard), RQ < 1. In germinating starchy seeds (wheat, rice), RQ = 1."
      ]
    }
  ],

  formulae: [
    {
      title: "Respiratory Quotient (RQ) General Formula",
      formula: "\\text{RQ} = \\frac{\\text{Volume of CO}_2\\text{ Evolved}}{\\text{Volume of O}_2\\text{ Consumed}}",
      meaning: "Measures the nature of respiratory substrate being oxidized by living cells.",
      symbols: "CO₂ = Carbon Dioxide, O₂ = Oxygen",
      conditions: "Measured using a Respirometer (e.g., Ganong's Respirometer).",
      whenToUse: "Calculating RQ from gas volume data or balanced chemical equations."
    },
    {
      title: "Tripalmitin (Fat) Oxidation RQ Equation",
      formula: "2\\text{C}_{51}\\text{H}_{98}\\text{O}_6 + 145\\text{O}_2 \\rightarrow 102\\text{CO}_2 + 98\\text{H}_2\\text{O} \\implies \\text{RQ} = \\frac{102}{145} = 0.7",
      meaning: "Quantitative RQ proof for fat oxidation.",
      symbols: "C₅₁H₉₈O₆ = Tripalmitin",
      conditions: "Germinating oily seeds or starvation state when body burns fats.",
      whenToUse: "Standard NEET numerical verification for fat RQ."
    },
    {
      title: "Malic Acid (Organic Acid) Oxidation RQ Equation",
      formula: "\\text{C}_4\\text{H}_6\\text{O}_5 + 3\\text{O}_2 \\rightarrow 4\\text{CO}_2 + 3\\text{H}_2\\text{O} \\implies \\text{RQ} = \\frac{4}{3} = 1.33",
      meaning: "Quantitative RQ proof for organic acid oxidation.",
      symbols: "C₄H₆O₅ = Malic Acid",
      conditions: "Respiration of fleshy fruits or succulents during daytime.",
      whenToUse: "Standard NEET numerical verification for organic acid RQ."
    }
  ],

  visualLearning: {
    type: 'table',
    tableData: {
      headers: ["Parameter", "Respiration", "Photosynthesis"],
      rows: [
        ["Process Type", "Catabolic & Amphibolic", "Anabolic & Endergonic"],
        ["Organelle", "Cytoplasm & Mitochondria", "Chloroplasts"],
        ["Energy Transformation", "Chemical Energy (Glucose) → ATP", "Radiant Energy (Light) → Chemical Energy"],
        ["Gas Exchange", "Consumes O₂, Releases CO₂", "Consumes CO₂, Releases O₂"],
        ["Primary Substrate", "Glucose / Organic Substrates", "CO₂ + H₂O"],
        ["Electron Donor", "NADH / FADH₂", "H₂O (Photolysis)"],
        ["Terminal Electron Acceptor", "Oxygen (O₂)", "NADP⁺"]
      ]
    },
    caption: "Comparative Summary of Respiration vs. Photosynthesis."
  },

  neetImportantPoints: [
    "Link Reaction occurs in mitochondrial matrix; requires Pyruvate Dehydrogenase + 5 cofactors (Mg²⁺, TPP, NAD⁺, CoA, Lipoate).",
    "Krebs cycle occurs in mitochondrial matrix; primary acceptor is Oxaloacetic Acid (OAA, 4C); first stable product is Citric Acid (6C).",
    "Succinate Dehydrogenase (Complex II) is the ONLY membrane-bound enzyme of the Krebs cycle.",
    "ETS Complex I = NADH Dehydrogenase, Complex II = Succinate Dehydrogenase, Complex III = Cytochrome bc₁, Complex IV = Cytochrome c Oxidase, Complex V = ATP Synthase.",
    "Cytochrome c is a mobile carrier on the OUTER surface of inner mitochondrial membrane.",
    "Complex IV contains Cytochromes a, a₃ and two Copper centers (Cu_A, Cu_B).",
    "Flow of 2 H⁺ through F₀ channel synthesizes 1 ATP at F₁ headpiece.",
    "NCERT Net ATP yield per glucose = 36 to 38 ATP.",
    "RQ values: Carbohydrates = 1.0, Fats = 0.7, Proteins = 0.9, Organic Acids > 1, Anaerobic = Infinity, Succulents at night = 0."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing that all Krebs cycle enzymes are in the mitochondrial matrix.",
      correctFact: "Succinate Dehydrogenase (Complex II) is NOT in the matrix fluid; it is bound to the INNER MITOCHONDRIAL MEMBRANE.",
      whyItMattersForNEET: "Frequently tested NEET direct objective trap."
    },
    {
      commonConfusion: "Confusing the location of Cytochrome c.",
      correctFact: "Cytochrome c is attached to the OUTER surface of the INNER mitochondrial membrane (facing the intermembrane space), acting as a mobile shuttle between Complex III and IV.",
      whyItMattersForNEET: "Extremely high-yield NCERT textual statement routinely tested in NEET."
    },
    {
      commonConfusion: "Assuming RQ is always 1.0.",
      correctFact: "RQ depends entirely on the nature of the respiratory substrate being oxidized. It is 1.0 for carbs, 0.7 for fats, 0.9 for proteins, and > 1.0 for organic acids.",
      whyItMattersForNEET: "Crucial for solving numerical and matching questions in NEET UG."
    }
  ],

  quickRevision: [
    "Link Reaction: 2 Pyruvate → 2 Acetyl-CoA + 2 CO₂ + 2 NADH (Matrix).",
    "Krebs Cycle: Matrix, Acetyl-CoA (2C) + OAA (4C) → Citrate (6C). Yields 3 NADH, 1 FADH₂, 1 GTP per Acetyl-CoA.",
    "Succinate Dehydrogenase = Only membrane-bound Krebs enzyme.",
    "ETS: Inner membrane, Complexes I-IV transport e⁻ to O₂ forming H₂O.",
    "Complex IV = Cyt a, a₃ + 2 Cu centers. Inhibited by Cyanide.",
    "Chemiosmosis: Protons pumped to intermembrane space flow back via F₀-F₁ (Complex V) → 2 H⁺/ATP.",
    "ATP Yield: 38 ATP theoretical max / 36 ATP net.",
    "Amphibolic pathway: Respiration is both catabolic and anabolic.",
    "RQ = CO₂ evolved / O₂ consumed. Carbs = 1.0, Fats = 0.7, Proteins = 0.9, Organic Acids > 1, Anaerobic = ∞."
  ],

  practiceQuestions: [
    {
      id: "prac-krebs-1",
      questionText: "In the Electron Transport System (ETS) of mitochondria, which electron carrier complex contains Cytochromes a and a₃ along with two copper centers?",
      options: [
        "Complex I",
        "Complex II",
        "Complex III",
        "Complex IV"
      ],
      correctOption: 3,
      explanation: "Complex IV (Cytochrome c Oxidase) contains Cytochromes a and a₃ and two copper centers (Cu_A and Cu_B) that transfer electrons directly to oxygen.",
      difficulty: "Easy",
      conceptTested: "ETS Complex Composition"
    },
    {
      id: "prac-krebs-2",
      questionText: "If Tripalmitin is used as a respiratory substrate, what will be the value of its Respiratory Quotient (RQ)?",
      options: [
        "1.0",
        "0.7",
        "0.9",
        "1.33"
      ],
      correctOption: 1,
      explanation: "Tripalmitin is a fat. Its oxidation requires 145 O₂ molecules and releases 102 CO₂ molecules, giving an RQ = 102 / 145 = 0.7.",
      difficulty: "Easy",
      conceptTested: "Respiratory Quotient calculation for fats"
    }
  ],

  pyqs: [
    {
      id: "pyq-krebs-1",
      year: 2022,
      exam: "NEET UG",
      questionText: "Which of the following statements is INCORRECT regarding the Krebs cycle?",
      options: [
        "There is one point in the cycle where FAD⁺ is reduced to FADH₂.",
        "During conversion of succinyl-CoA to succinic acid, a molecule of GTP is synthesized.",
        "The cycle starts with condensation of acetyl group (acetyl-CoA) with pyruvic acid to yield citric acid.",
        "There are three points in the cycle where NAD⁺ is reduced to NADH + H⁺."
      ],
      correctOption: 2,
      explanation: "Statement 3 is INCORRECT because the acetyl group (2C) condenses with OXALOACETIC ACID (OAA, 4C), NOT pyruvic acid, to yield citric acid (6C).",
      difficulty: "Medium",
      topicTested: "First reaction of Krebs Cycle",
      verified: true
    },
    {
      id: "pyq-krebs-2",
      year: 2021,
      exam: "NEET UG",
      questionText: "What is the role of NAD⁺ in cellular respiration?",
      options: [
        "It functions as an enzyme.",
        "It functions as an electron carrier.",
        "It is the final electron acceptor for anaerobic respiration.",
        "It is a nucleotide source for ATP synthesis."
      ],
      correctOption: 1,
      explanation: "NAD⁺ acts as an electron and proton carrier (coenzyme) that accepts electrons during dehydrogenation reactions in glycolysis, link reaction, and Krebs cycle and delivers them to Complex I of the ETS.",
      difficulty: "Easy",
      topicTested: "Role of NAD⁺ in respiration",
      verified: true
    },
    {
      id: "pyq-krebs-3",
      year: 2020,
      exam: "NEET UG",
      questionText: "Respiratory Quotient (RQ) value of tripalmitin is:",
      options: [
        "0.09",
        "0.9",
        "0.7",
        "1.0"
      ],
      correctOption: 2,
      explanation: "Tripalmitin is a fatty acid. Oxidation of tripalmitin yields RQ = 102 CO₂ / 145 O₂ = 0.7.",
      difficulty: "Easy",
      topicTested: "Respiratory Quotient of Tripalmitin",
      verified: true
    }
  ]
};
