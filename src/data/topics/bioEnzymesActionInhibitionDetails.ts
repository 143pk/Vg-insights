import { DetailedTopicContent } from '../../types/neet';

export const bioEnzymesActionInhibitionDetails: DetailedTopicContent = {
  topicId: "bio-enzymes-action-inhibition",
  topicName: "Enzymes — Action Mechanism, Kinetics, Competitive Inhibition, Cofactors & Metabolism",
  subject: "Biology",
  class: "Class 11",
  classification: "Cell Structure & Function",
  chapter: "Biomolecules",
  whatIsThisTopic: "Complete NCERT study guide covering enzyme properties, active site, activation energy lowering, Michaelis-Menten kinetics (Vmax, Km), factors affecting activity (temperature, pH, [S]), competitive vs non-competitive inhibition, IUBMB enzyme classification, cofactors (prosthetic groups, coenzymes, metal ions), and living state dynamics.",
  basicIdea: [
    "Enzymes are biological catalysts produced by living cells. Almost all enzymes are tertiary 3D globular proteins, except ribozymes (catalytic RNA molecules such as 23S rRNA).",
    "An enzyme speeds up metabolic chemical reactions by lowering the Activation Energy (Ea) required to reach the high-energy unstable transition state (S‡), without altering the equilibrium constant (Keq) or overall free energy change (ΔG).",
    "Substrates bind to a specific pocket called the Active Site on the enzyme, forming a transient Enzyme-Substrate (ES) complex. This undergoes catalytic transformation into an Enzyme-Product (EP) complex, followed by product release and enzyme regeneration: E + S ⇌ ES → EP → E + P.",
    "Enzyme velocity is affected by Temperature, pH, and Substrate Concentration [S]. Km (Michaelis constant) is the substrate concentration at which reaction velocity reaches 1/2 Vmax. Km is inversely proportional to enzyme-substrate affinity.",
    "Competitive Inhibitors resemble the substrate in structure and compete for the active site. They INCREASE Km while leaving Vmax UNCHANGED (e.g., Malonate inhibiting Succinic Dehydrogenase). Non-competitive inhibitors bind to allosteric sites, DECREASING Vmax while leaving Km UNCHANGED.",
    "Enzymes are categorized into 6 IUBMB classes: Oxidoreductases, Transferases, Hydrolases, Lyases, Isomerases, and Ligases.",
    "A Holoenzyme consists of a protein part (Apoenzyme) and a non-protein part (Cofactor). Cofactors include Prosthetic Groups (tightly bound, e.g., Haem), Coenzymes (loosely bound vitamin derivatives, e.g., NAD/NADP), and Metal Ions (e.g., Zn2+ in Carboxypeptidase)."
  ],
  importantTerms: [
    {
      term: "Active Site",
      definition: "A specific 3D crevice or pocket in a tertiary folded enzyme protein where substrate molecules bind and undergo catalytic reaction."
    },
    {
      term: "Activation Energy (Ea)",
      definition: "The minimum kinetic energy required by reactant molecules (substrates) to reach the high-energy, unstable transition state (S‡) needed to convert into products."
    },
    {
      term: "Vmax (Maximum Velocity)",
      definition: "The maximum initial rate of an enzyme-catalyzed reaction achieved when all active sites of the enzyme molecules are fully saturated with substrate."
    },
    {
      term: "Km (Michaelis Constant)",
      definition: "The substrate concentration [S] at which the reaction velocity reaches exactly half of its maximum velocity (1/2 Vmax). Lower Km indicates higher enzyme-substrate affinity."
    },
    {
      term: "Competitive Inhibition",
      definition: "Inhibition where a structural analog of the substrate competes for binding to the active site, increasing Km without altering Vmax (can be overcome by raising [S])."
    },
    {
      term: "Allosteric / Non-Competitive Inhibition",
      definition: "Inhibition where an inhibitor binds to an allosteric site (different from the active site), altering active site conformation and decreasing Vmax while leaving Km unchanged."
    },
    {
      term: "Apoenzyme",
      definition: "The inactive, purely proteinaceous component of a conjugated enzyme (holoenzyme) that requires a cofactor for catalytic activity."
    },
    {
      term: "Prosthetic Group",
      definition: "An organic cofactor that is tightly and permanently bound to the apoenzyme (e.g., Haem group in Catalase and Peroxidase)."
    },
    {
      term: "Coenzyme",
      definition: "An organic cofactor that binds loosely and transiently to the apoenzyme during catalysis, often derived from water-soluble vitamins (e.g., NAD/NADP containing Niacin)."
    },
    {
      term: "Turnover Number",
      definition: "The maximum number of substrate molecules converted into product per active site per unit time when the enzyme is fully saturated with substrate (e.g., Carbonic Anhydrase = 600,000/sec!)."
    }
  ],
  conceptExplanation: [
    {
      heading: "1. Nature of Enzymes & Concept of Activation Energy Lowering",
      paragraphs: [
        "Enzymes are biocatalysts that accelerate chemical and metabolic reactions in living organisms without being consumed in the process. Virtually all enzymes are tertiary globular proteins. A notable exception is RIBOZYMES — catalytic RNA molecules such as the 23S rRNA in bacterial ribosomes that acts as a peptidyl transferase enzyme during translation.",
        "Like inorganic catalysts, enzymes accelerate reaction rates. However, enzymes differ in crucial ways: (1) Enzymes are highly specific for their substrates, (2) They operate under mild physiological temperature and pH, (3) They are denatured at high temperatures (>40–50°C), whereas inorganic catalysts withstand high temperatures and pressures, and (4) Thermal organisms (e.g., thermophilic bacteria living in hot springs at 80–100°C) possess heat-stable enzymes (e.g., Taq DNA Polymerase).",
        "CONCEPT OF ACTIVATION ENERGY: In any chemical reaction, reactants must absorb energy to reach an unstable, high-energy TRANSITION STATE (S‡) before forming products. The energy barrier between the ground state of the substrate and the transition state is called the ACTIVATION ENERGY (Ea). Enzymes accelerate reaction velocity by lowering the Activation Energy barrier. They achieve this by binding substrate molecules at their active site, inducing structural strain on substrate bonds, and stabilizing the transition state complex. IMPORTANT: Enzymes DO NOT alter the overall free energy change (ΔG) or the equilibrium constant (Keq) of a reaction; they merely accelerate the rate at which equilibrium is reached."
      ],
      visual: {
        type: "svg",
        caption: "Figure 2.1: Energy Profile Diagram Showing Activation Energy Barrier Lowering by Enzyme.",
        svgContent: `<svg viewBox="0 0 800 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="360" fill="#f8fafc" rx="16"/>
  <text x="400" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Concept of Activation Energy (Ea) Lowering by Enzymes</text>
  
  <!-- Graph Axes -->
  <line x1="100" y1="300" x2="720" y2="300" stroke="#0f172a" stroke-width="3"/>
  <line x1="100" y1="300" x2="100" y2="60" stroke="#0f172a" stroke-width="3"/>
  <text x="410" y="335" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Progress of Reaction (Reaction Coordinate)</text>
  <text x="40" y="180" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" transform="rotate(-90 40 180)" text-anchor="middle">Potential Energy (E)</text>
  
  <!-- Substrate Energy Line -->
  <line x1="100" y1="200" x2="200" y2="200" stroke="#0284c7" stroke-width="3" stroke-dasharray="4"/>
  <rect x="110" y="175" width="80" height="22" fill="#e0f2fe" stroke="#0284c7" rx="4"/>
  <text x="150" y="190" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Substrate (S)</text>
  
  <!-- Product Energy Line -->
  <line x1="600" y1="260" x2="700" y2="260" stroke="#16a34a" stroke-width="3" stroke-dasharray="4"/>
  <rect x="610" y="235" width="80" height="22" fill="#dcfce7" stroke="#16a34a" rx="4"/>
  <text x="650" y="250" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Product (P)</text>
  
  <!-- Curve 1: Uncatalyzed Reaction (High Peak) -->
  <path d="M 200 200 C 280 70, 420 70, 600 260" stroke="#ef4444" stroke-width="3" fill="none"/>
  <text x="350" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Transition State (S‡) without Enzyme</text>
  
  <!-- Curve 2: Enzyme Catalyzed Reaction (Low Peak) -->
  <path d="M 200 200 C 280 130, 420 130, 600 260" stroke="#2563eb" stroke-width="3" fill="none"/>
  <text x="350" y="140" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">Transition State with Enzyme (Lower Ea)</text>
  
  <!-- Arrows for Ea -->
  <line x1="280" y1="200" x2="280" y2="85" stroke="#ef4444" stroke-width="2" stroke-dasharray="3"/>
  <text x="260" y="140" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" transform="rotate(-90 260 140)" text-anchor="middle">Ea (Uncatalyzed)</text>
  
  <line x1="450" y1="200" x2="450" y2="135" stroke="#2563eb" stroke-width="2" stroke-dasharray="3"/>
  <text x="470" y="170" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8" transform="rotate(-90 470 170)" text-anchor="middle">Ea (Catalyzed)</text>
  
  <!-- Net Energy Change ΔG -->
  <line x1="680" y1="200" x2="680" y2="260" stroke="#0f172a" stroke-width="2"/>
  <text x="735" y="235" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Net ΔG (Unchanged)</text>
</svg>`
      }
    },
    {
      heading: "2. Factors Affecting Enzyme Activity & Michaelis-Menten Kinetics",
      paragraphs: [
        "Enzyme activity is sensitive to physical and chemical parameters in its environment:",
        "1. TEMPERATURE: Enzyme activity exhibits a bell-shaped curve with respect to temperature. At low temperatures, enzymes are temporarily INACTIVE (thermal inactivation). As temperature rises, kinetic energy increases, leading to more frequent enzyme-substrate collisions and higher velocity until the OPTIMUM TEMPERATURE is reached (usually 37°C for human enzymes). Beyond the optimum temperature, high thermal energy breaks hydrogen and non-covalent bonds holding the tertiary 3D structure, causing permanent DENATURATION and loss of catalytic activity.",
        "2. pH: Like temperature, enzyme activity shows a bell-shaped curve with respect to pH. Every enzyme has a specific OPTIMUM pH where its active site amino acid side chains possess the ideal ionization state. Deviation in pH (either too acidic or too basic) alters ionization of amino acid R-groups, disrupting active site conformation. Examples: Pepsin operates optimally at acidic pH 1.5–2.0 in the stomach; Salivary Amylase operates at pH 6.8; Trypsin operates at alkaline pH 8.0 in the small intestine.",
        "3. SUBSTRATE CONCENTRATION [S] & MICHAELIS-MENTEN KINETICS: When substrate concentration [S] is increased while keeping enzyme concentration constant, the initial reaction velocity (V) rises rapidly. At low [S], velocity is directly proportional to [S] (first-order kinetics). As [S] increases further, active sites become progressively occupied until a point is reached where ALL enzyme active sites are saturated with substrate. At this point, reaction velocity reaches a maximum asymptote called Vmax (Maximum Velocity; zero-order kinetics).",
        "MICHAELIS CONSTANT (Km): Km is defined as the substrate concentration [S] at which the reaction velocity reaches exactly half of its maximum velocity (1/2 Vmax). Km is a fundamental characteristic of an enzyme:",
        "• Km is INVERSELY PROPORTIONAL to enzyme-substrate affinity.",
        "• A LOW Km value indicates HIGH affinity of the enzyme for its substrate (enzyme reaches 1/2 Vmax at very low substrate concentrations).",
        "• A HIGH Km value indicates LOW affinity."
      ],
      visual: {
        type: "svg",
        caption: "Figure 2.2: Factors Affecting Enzyme Activity — Temperature, pH, and Substrate Concentration [S] Kinetics.",
        svgContent: `<svg viewBox="0 0 800 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="320" fill="#f8fafc" rx="16"/>
  <text x="400" y="25" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Factors Affecting Enzyme Activity (Temperature, pH, [S] Kinetics)</text>
  
  <!-- Panel 1: Temperature Curve -->
  <g transform="translate(30, 45)">
    <rect width="230" height="250" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="115" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Effect of Temperature</text>
    <line x1="30" y1="210" x2="210" y2="210" stroke="#0f172a" stroke-width="2"/>
    <line x1="30" y1="210" x2="30" y2="40" stroke="#0f172a" stroke-width="2"/>
    <path d="M 30 210 C 80 180, 110 50, 120 50 C 130 50, 160 180, 210 210" stroke="#ef4444" stroke-width="3" fill="none"/>
    <line x1="120" y1="50" x2="120" y2="210" stroke="#dc2626" stroke-width="1" stroke-dasharray="3"/>
    <text x="120" y="225" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Optimum Temp (37°C)</text>
    <text x="50" y="180" font-family="system-ui, sans-serif" font-size="9" fill="#78350f">Inactive</text>
    <text x="180" y="180" font-family="system-ui, sans-serif" font-size="9" fill="#7f1d1d">Denatured</text>
  </g>
  
  <!-- Panel 2: pH Curve -->
  <g transform="translate(280, 45)">
    <rect width="230" height="250" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="115" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Effect of pH</text>
    <line x1="30" y1="210" x2="210" y2="210" stroke="#0f172a" stroke-width="2"/>
    <line x1="30" y1="210" x2="30" y2="40" stroke="#0f172a" stroke-width="2"/>
    <path d="M 40 210 C 80 180, 110 50, 120 50 C 130 50, 160 180, 200 210" stroke="#16a34a" stroke-width="3" fill="none"/>
    <line x1="120" y1="50" x2="120" y2="210" stroke="#15803d" stroke-width="1" stroke-dasharray="3"/>
    <text x="120" y="225" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Optimum pH</text>
    <text x="50" y="240" font-family="system-ui, sans-serif" font-size="9" fill="#166534">Pepsin (pH 2)</text>
    <text x="170" y="240" font-family="system-ui, sans-serif" font-size="9" fill="#166534">Trypsin (pH 8)</text>
  </g>
  
  <!-- Panel 3: [S] Kinetics & Km -->
  <g transform="translate(530, 45)">
    <rect width="240" height="250" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="120" y="22" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Substrate Conc [S] &amp; Km</text>
    <line x1="30" y1="200" x2="220" y2="200" stroke="#0f172a" stroke-width="2"/>
    <line x1="30" y1="200" x2="30" y2="40" stroke="#0f172a" stroke-width="2"/>
    
    <!-- Hyperbolic Curve -->
    <path d="M 30 200 Q 80 80, 220 70" stroke="#2563eb" stroke-width="3" fill="none"/>
    
    <!-- Vmax line -->
    <line x1="30" y1="70" x2="220" y2="70" stroke="#dc2626" stroke-width="1" stroke-dasharray="3"/>
    <text x="180" y="62" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#dc2626">Vmax</text>
    
    <!-- 1/2 Vmax line -->
    <line x1="30" y1="135" x2="105" y2="135" stroke="#2563eb" stroke-width="1" stroke-dasharray="3"/>
    <text x="15" y="140" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" fill="#1d4ed8">1/2 Vmax</text>
    
    <!-- Km line -->
    <line x1="105" y1="135" x2="105" y2="200" stroke="#2563eb" stroke-width="1" stroke-dasharray="3"/>
    <circle cx="105" cy="200" r="4" fill="#2563eb"/>
    <text x="105" y="218" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Km</text>
  </g>
</svg>`
      }
    },
    {
      heading: "3. Enzyme Inhibition — Competitive vs Non-Competitive Kinetics",
      paragraphs: [
        "Enzyme inhibitors are chemical substances that reduce or completely abolish enzyme activity by binding to the enzyme.",
        "1. COMPETITIVE INHIBITION:",
        "In competitive inhibition, the inhibitor closely resembles the substrate in molecular shape and chemical structure. Because of this structural similarity, the inhibitor competes directly with the substrate for binding to the ACTIVE SITE of the enzyme. When the inhibitor binds to the active site, it prevents substrate binding.",
        "KINETIC EFFECTS OF COMPETITIVE INHIBITION:",
        "• Vmax REMAINS UNCHANGED: The maximum velocity can still be achieved if substrate concentration [S] is increased significantly, outcompeting the inhibitor molecules for active site occupancy.",
        "• Km INCREASES: Apparent affinity of the enzyme for its substrate decreases, so higher [S] is required to reach 1/2 Vmax.",
        "CRITICAL NCERT EXAMPLES OF COMPETITIVE INHIBITION:",
        "• MALONATE INHIBITION: Malonate closely resembles Succinate in structure and competitively inhibits the enzyme SUCCINIC DEHYDROGENASE in the Krebs cycle.",
        "• SULFA DRUGS: Sulfanilamide resembles Para-Aminobenzoic Acid (PABA) and competitively inhibits bacterial folic acid synthesis enzymes, killing pathogenic bacteria without harming humans.",
        "2. NON-COMPETITIVE / ALLOSTERIC INHIBITION:",
        "In non-competitive inhibition, the inhibitor binds to an ALLOSTERIC SITE (a regulatory site on the enzyme distinct from the active site). This binding induces a conformational change in the enzyme's active site, rendering it non-functional or reducing catalytic efficiency.",
        "KINETIC EFFECTS OF NON-COMPETITIVE INHIBITION:",
        "• Vmax DECREASES: Maximum catalytic capacity is reduced because inhibited enzyme molecules are rendered permanently inactive regardless of substrate concentration.",
        "• Km REMAINS UNCHANGED: Binding of substrate to uninhibited enzyme active sites remains unaffected.",
        "Example: Cyanide poisoning inhibits Cytochrome Oxidase in mitochondrial electron transport chain, halting cellular respiration."
      ],
      visual: {
        type: "svg",
        caption: "Figure 2.3: Competitive vs Non-Competitive Inhibition Binding and Kinetic Graphs.",
        svgContent: `<svg viewBox="0 0 800 350" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="350" fill="#f8fafc" rx="16"/>
  <text x="400" y="25" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Competitive vs Non-Competitive Enzyme Inhibition</text>
  
  <!-- Left: Competitive Mechanism -->
  <g transform="translate(30, 45)">
    <rect width="350" height="270" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="175" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Competitive Inhibition (Active Site)</text>
    
    <!-- Enzyme box -->
    <rect x="40" y="60" width="270" height="80" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="8"/>
    <text x="175" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Enzyme (Active Site)</text>
    
    <!-- Substrate & Inhibitor -->
    <rect x="50" y="150" width="120" height="35" fill="#dcfce7" stroke="#16a34a" rx="6"/>
    <text x="110" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Substrate (Succinate)</text>
    
    <rect x="180" y="150" width="120" height="35" fill="#fef2f2" stroke="#ef4444" rx="6"/>
    <text x="240" y="172" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Inhibitor (Malonate)</text>
    
    <rect x="20" y="200" width="310" height="55" fill="#fefce8" stroke="#fde047" rx="6"/>
    <text x="30" y="220" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#854d0e">• Vmax = UNCHANGED (overcome by high [S])</text>
    <text x="30" y="240" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#854d0e">• Km = INCREASES (apparent affinity drops)</text>
  </g>
  
  <!-- Right: Kinetic Graph Comparison -->
  <g transform="translate(410, 45)">
    <rect width="360" height="270" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="180" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Kinetic Graph (V vs [S])</text>
    <line x1="40" y1="220" x2="330" y2="220" stroke="#0f172a" stroke-width="2"/>
    <line x1="40" y1="220" x2="40" y2="40" stroke="#0f172a" stroke-width="2"/>
    
    <!-- Curve 1: Normal -->
    <path d="M 40 220 Q 90 70, 330 60" stroke="#16a34a" stroke-width="3" fill="none"/>
    <text x="260" y="55" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#15803d">Normal Enzyme</text>
    
    <!-- Curve 2: Competitive (Shifted Right, same Vmax) -->
    <path d="M 40 220 Q 180 140, 330 60" stroke="#2563eb" stroke-width="3" stroke-dasharray="4" fill="none"/>
    <text x="230" y="85" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8">Competitive (Same Vmax, Km ↑)</text>
    
    <!-- Curve 3: Non-Competitive (Lower Vmax) -->
    <path d="M 40 220 Q 90 140, 330 130" stroke="#ef4444" stroke-width="3" fill="none"/>
    <text x="230" y="125" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">Non-Comp (Vmax ↓, Km same)</text>
  </g>
</svg>`
      },
      tables: [
        {
          title: "Comparison of Competitive vs Non-Competitive Inhibition",
          headers: ["Feature", "Competitive Inhibition", "Non-Competitive / Allosteric Inhibition"],
          rows: [
            ["Binding Site on Enzyme", "Active Site (competes directly with substrate)", "Allosteric Site (different from active site)"],
            ["Inhibitor Structure", "Resembles substrate structurally (analog)", "Does not resemble substrate structure"],
            ["Effect on Vmax", "Vmax REMAINS UNCHANGED (overcome by high [S])", "Vmax DECREASES permanently"],
            ["Effect on Km", "Km INCREASES (apparent affinity decreases)", "Km REMAINS UNCHANGED"],
            ["NCERT / Medical Example", "Malonate vs Succinate for Succinic Dehydrogenase; Sulfa drugs vs PABA", "Cyanide inhibiting Cytochrome Oxidase; Heavy metals (Pb2+, Hg2+)"]
          ]
        }
      ]
    },
    {
      heading: "4. Classification of Enzymes (IUBMB 6 Major Classes)",
      paragraphs: [
        "The International Union of Biochemistry and Molecular Biology (IUBMB) classifies all enzymes into SIX MAJOR CLASSES based on the type of chemical reaction catalyzed. Each class is divided into subclasses and sub-subclasses designated by a 4-digit EC number (e.g., EC 1.1.1.1):",
        "1. OXIDOREDUCTASES / DEHYDROGENASES: Catalyze oxidation-reduction (redox) reactions involving transfer of electrons or hydrogen atoms between two substrates (S_red + S'_ox → S_ox + S'_red). Examples: Alcohol dehydrogenase, Lactate dehydrogenase, Cytochrome oxidase.",
        "2. TRANSFERASES: Catalyze the transfer of a specific functional group (G, e.g., phosphate, amino, methyl group—other than hydrogen) from a donor substrate to an acceptor substrate (S - G + S' → S + S' - G). Example: Hexokinase (transfers phosphate from ATP to Glucose).",
        "3. HYDROLASES: Catalyze cleavage of bonds (ester, ether, peptide, glycosidic, C-C, C-halide, or P-N bonds) by the addition of water (hydrolysis). Examples: Pepsin, Trypsin, Lipase, Amylase, Sucrase.",
        "4. LYASES: Catalyze removal of groups from substrates by mechanisms other than hydrolysis, leaving double bonds, or addition of groups to double bonds (X - C - C - Y → X - Y + C = C). Example: Carbonic Anhydrase, Aldolase, Decarboxylase.",
        "5. ISOMERASES: Catalyze interconversion of optical, geometric, or positional isomers (rearrangement of atoms within a single molecule). Examples: Triose phosphate isomerase, Glucose-6-phosphate isomerase.",
        "6. LIGASES / SYNTHETASES: Catalyze linking together of two compounds (forming C-O, C-S, C-N, or P-O bonds) coupled with ATP cleavage. Examples: DNA Ligase, Glutamine synthetase, Acetyl-CoA synthetase."
      ],
      tables: [
        {
          title: "NCERT Classification of Enzymes (IUBMB 6 Major Classes)",
          headers: ["Class Number & Name", "Reaction Catalyzed", "NCERT & Physiological Examples"],
          rows: [
            ["1. Oxidoreductases / Dehydrogenases", "Transfer of electrons or H atoms (Redox reactions)", "Lactate Dehydrogenase, Alcohol Dehydrogenase, Cytochrome Oxidase"],
            ["2. Transferases", "Transfer of functional group G (phosphate, amino) between substrates", "Hexokinase, Transaminase, Phosphofructokinase"],
            ["3. Hydrolases", "Cleavage of ester, peptide, glycosidic bonds using water (Hydrolysis)", "Digestive enzymes (Pepsin, Trypsin, Lipase, Amylase)"],
            ["4. Lyases", "Group elimination leaving double bonds WITHOUT hydrolysis", "Carbonic Anhydrase, Fumarase, Pyruvate Decarboxylase"],
            ["5. Isomerases", "Interconversion of optical, geometric, or structural isomers", "Triose Phosphate Isomerase, Phosphoglucomutase"],
            ["6. Ligases / Synthetases", "Joining of 2 molecules with covalent bond linked to ATP cleavage", "DNA Ligase, Glutamine Synthetase, RuBisCO carboxylase"]
          ]
        }
      ]
    },
    {
      heading: "5. Cofactors — Apoenzyme, Prosthetic Groups, Coenzymes & Metal Ions",
      paragraphs: [
        "Enzymes can be simple proteins (composed solely of amino acids) or conjugated enzymes. A complete, catalytically active conjugated enzyme is called a HOLOENZYME. A Holoenzyme consists of two parts: (1) Apoenzyme — the inactive protein portion, and (2) Cofactor — the non-protein constituent required for catalytic activity.",
        "HOLOENZYME = APOENZYME + COFACTOR",
        "If the cofactor is removed from the holoenzyme, the remaining apoenzyme completely LOSES its catalytic activity. NCERT categorizes cofactors into three distinct types:",
        "1. PROSTHETIC GROUPS: Organic compounds that are tightly and permanently bound to the apoenzyme. Example: HAEM is the prosthetic group for CATALASE and PEROXIDASE enzymes (which catalyze the breakdown of hydrogen peroxide into water and oxygen: 2H2O2 -> 2H2O + O2).",
        "2. COENZYMES: Organic compounds whose association with the apoenzyme is transient and loose, occurring during the catalytic cycle. Many coenzymes are derivatives of water-soluble VITAMINS:",
        "• NAD (Nicotinamide Adenine Dinucleotide) and NADP contain the vitamin NIACIN (Vitamin B3).",
        "• FAD (Flavin Adenine Dinucleotide) contains RIBOFLAVIN (Vitamin B2).",
        "• Coenzyme A contains PANTOTHENIC ACID (Vitamin B5).",
        "3. METAL IONS: Inorganic metal cations that form coordination bonds with amino acid side chains at the active site and with the substrate, stabilizing transition states.",
        "• ZINC (Zn2+): Essential cofactor for CARBOXYPEPTIDASE (proteolytic digestive enzyme) and CARBONIC ANHYDRASE.",
        "• MAGNESIUM (Mg2+): Essential cofactor for HEXOKINASE, DNA Polymerase, and RuBisCO.",
        "• IRON (Fe2+/Fe3+): Essential cofactor for Cytochromes and Catalase."
      ],
      visual: {
        type: "svg",
        caption: "Figure 2.4: Assembly of Holoenzyme = Apoenzyme + Cofactors (Prosthetic Group, Coenzyme, Metal Ion).",
        svgContent: `<svg viewBox="0 0 800 320" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="320" fill="#f8fafc" rx="16"/>
  <text x="400" y="25" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Structure of Conjugated Enzyme (Holoenzyme Assembly)</text>
  
  <!-- Left: Apoenzyme + Cofactor -->
  <g transform="translate(40, 50)">
    <rect width="320" height="230" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="160" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Components</text>
    
    <rect x="20" y="45" width="280" height="50" fill="#eff6ff" stroke="#3b82f6" rx="6"/>
    <text x="160" y="68" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">APOENZYME (Protein Component)</text>
    <text x="160" y="85" font-family="system-ui, sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Catalytically inactive alone</text>
    
    <text x="160" y="115" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" fill="#ef4444" text-anchor="middle">+</text>
    
    <rect x="20" y="130" width="280" height="80" fill="#fef2f2" stroke="#ef4444" rx="6"/>
    <text x="160" y="150" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">COFACTOR (Non-protein Component)</text>
    <text x="160" y="170" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Prosthetic Group (Tightly bound, e.g. Haem)</text>
    <text x="160" y="188" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Coenzyme (Loose vitamin derivative, NAD/NADP)</text>
    <text x="160" y="202" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Metal Ion (Coordination bonds, e.g. Zn2+)</text>
  </g>
  
  <!-- Arrow -->
  <path d="M 380 160 L 430 160" stroke="#0f172a" stroke-width="4" marker-end="url(#arrow)"/>
  
  <!-- Right: Active Holoenzyme -->
  <g transform="translate(450, 50)">
    <rect width="310" height="230" fill="#dcfce7" stroke="#16a34a" stroke-width="3" rx="10"/>
    <text x="155" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">HOLOENZYME</text>
    <text x="155" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Complete Catalytically Active Enzyme</text>
    
    <rect x="30" y="80" width="250" height="120" fill="#ffffff" stroke="#22c55e" rx="8"/>
    <text x="155" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">Catalysis Ready!</text>
    <text x="40" y="135" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Catalase / Peroxidase + Haem</text>
    <text x="40" y="155" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Dehydrogenase + NAD (Niacin)</text>
    <text x="40" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Carboxypeptidase + Zn2+</text>
  </g>
</svg>`
      },
      tables: [
        {
          title: "Classification of Cofactors",
          headers: ["Cofactor Type", "Binding Nature", "Chemical Composition", "NCERT Examples"],
          rows: [
            ["Prosthetic Group", "Tightly & permanently bound to apoenzyme", "Organic compounds", "Haem in Catalase and Peroxidase enzymes"],
            ["Coenzyme", "Transient & loosely bound during catalytic cycle", "Organic vitamin derivatives", "NAD and NADP (contain Vitamin Niacin / B3); FAD (Riboflavin)"],
            ["Metal Ion", "Coordination bonds with active site & substrate", "Inorganic cations", "Zn2+ in Carboxypeptidase and Carbonic Anhydrase; Mg2+ in Hexokinase"]
          ]
        }
      ]
    },
    {
      heading: "6. Metabolism & Living State Dynamics",
      paragraphs: [
        "Metabolism is the sum total of all interconnected chemical reactions occurring within a living organism. Living organisms exist in a DYNAMIC STATE where biomolecules are constantly synthesized and broken down (metabolic turnover).",
        "1. ANABOLISM (Biosynthetic Pathways): Metabolic pathways that build complex molecules from simpler ones, consuming energy (ATP). Example: Synthesis of proteins from amino acids, synthesis of glycogen from glucose.",
        "2. CATABOLISM (Degradative Pathways): Metabolic pathways that break down complex molecules into simpler ones, releasing energy stored as Adenosine Triphosphate (ATP). Example: Glycolysis (breakdown of glucose into lactic acid or pyruvic acid).",
        "THE LIVING STATE AS A NON-EQUILIBRIUM STEADY STATE: A fundamental principle in NCERT is that living organisms exist in a steady state characterized by definite concentrations of biomolecules. Physical systems at equilibrium CANNOT perform work. Therefore, to be able to perform continuous physiological work, living systems must NEVER reach chemical equilibrium. The living state is a NON-EQUILIBRIUM STEADY STATE maintained constantly by energy input derived from catabolism. Metabolism is the mechanism that prevents living organisms from falling into equilibrium (death)."
      ]
    }
  ],
  formulae: [
    {
      title: "Holoenzyme Structure",
      formula: "\\text{Holoenzyme (Active)} = \\text{Apoenzyme (Protein)} + \\text{Cofactor (Non-protein)}"
    },
    {
      title: "Michaelis-Menten Velocity Equation",
      formula: "V = \\frac{V_{max} \\cdot [S]}{K_m + [S]}"
    },
    {
      title: "Competitive Inhibition Kinetics",
      formula: "V_{max} = \\text{Unchanged}, \\quad K_m = \\text{Increases (Shifted right on } [S] \\text{ axis)}"
    }
  ],
  neetImportantPoints: [
    "🔥 HOLOENZYME FORMULA: Holoenzyme = Apoenzyme + Cofactor. Removal of cofactor destroys enzymatic activity completely.",
    "🔥 COMPETITIVE INHIBITION KINETICS: In competitive inhibition, Vmax remains UNCHANGED while Km INCREASES. Example: Malonate inhibiting Succinic Dehydrogenase.",
    "🔥 NON-COMPETITIVE KINETICS: In non-competitive/allosteric inhibition, Vmax DECREASES while Km remains UNCHANGED.",
    "🔥 PROSTHETIC GROUP: Haem is the prosthetic group for both Catalase and Peroxidase enzymes.",
    "🔥 COENZYME VITAMIN: NAD and NADP coenzymes contain the vitamin NIACIN (Vitamin B3).",
    "🔥 METAL ION COFACTOR: Zinc (Zn2+) is the cofactor for Carboxypeptidase and Carbonic Anhydrase.",
    "🔥 LIVING STATE: The living state is a NON-EQUILIBRIUM STEADY STATE. Systems at equilibrium cannot perform work."
  ],
  commonConfusions: [
    {
      commonConfusion: "Assuming that competitive inhibition decreases Vmax.",
      correctFact: "Competitive inhibition leaves Vmax UNCHANGED because high substrate concentration [S] outcompetes the inhibitor for active site binding. Only Km increases.",
      whyItMattersForNEET: "High-frequency NEET question testing Km vs Vmax graph curves."
    },
    {
      commonConfusion: "Thinking Apoenzyme is the complete active enzyme.",
      correctFact: "Apoenzyme is purely the inactive protein part. It becomes active only when combined with its cofactor to form the Holoenzyme.",
      whyItMattersForNEET: "Direct match-the-following option in NEET 2021."
    },
    {
      commonConfusion: "Believing all enzymes are proteins without exception.",
      correctFact: "Ribozymes (catalytic RNA molecules like 23S rRNA) are non-protein nucleic acid enzymes.",
      whyItMattersForNEET: "Crucial exception tested in NCERT statement questions."
    }
  ],
  quickRevision: [
    "Enzymes lower Activation Energy (Ea) without altering ΔG or Keq.",
    "Ribozymes = Catalytic RNA (23S rRNA peptidyl transferase).",
    "Km = [S] at 1/2 Vmax; Km is inversely proportional to enzyme affinity.",
    "Competitive Inhibition: Active site binding, Structural analog, Vmax same, Km increases (e.g., Malonate vs Succinic Dehydrogenase).",
    "Non-Competitive Inhibition: Allosteric site binding, Vmax decreases, Km same.",
    "IUBMB 6 Classes: 1. Oxidoreductases, 2. Transferases, 3. Hydrolases, 4. Lyases, 5. Isomerases, 6. Ligases.",
    "Holoenzyme = Apoenzyme + Cofactor.",
    "Prosthetic group = Haem in Catalase/Peroxidase; Coenzyme = NAD/NADP (Niacin B3); Metal Ion = Zn2+ in Carboxypeptidase.",
    "Living state = Non-equilibrium steady state powered by metabolic ATP."
  ],
  practiceQuestions: [
    {
      id: "pq-enz-1",
      question: "In a competitive inhibition reaction, what happens to the values of Vmax and Km when the inhibitor is present?",
      options: [
        "Vmax decreases and Km remains unchanged",
        "Vmax remains unchanged and Km increases",
        "Both Vmax and Km decrease proportionally",
        "Vmax increases and Km decreases"
      ],
      correctAnswer: 1,
      explanation: "In competitive inhibition, the inhibitor competes with the substrate for the active site. Increasing substrate concentration [S] can overcome the inhibition, so Vmax remains UNCHANGED. However, a higher [S] is required to reach 1/2 Vmax, meaning Km INCREASES.",
      topicTested: "Enzyme Kinetics & Competitive Inhibition",
      difficulty: "Medium"
    },
    {
      id: "pq-enz-2",
      question: "Zinc (Zn2+) acts as an essential cofactor for which of the following digestive and metabolic enzymes?",
      options: [
        "Peroxidase and Catalase",
        "Carboxypeptidase and Carbonic Anhydrase",
        "Hexokinase and DNA Polymerase",
        "Lactate Dehydrogenase and Trypsin"
      ],
      correctAnswer: 1,
      explanation: "According to NCERT, Zinc (Zn2+) is a metal ion cofactor for the proteolytic enzyme Carboxypeptidase and Carbonic Anhydrase. Haem is the cofactor for Catalase and Peroxidase.",
      topicTested: "Cofactors & Metal Ions",
      difficulty: "Easy"
    },
    {
      id: "pq-enz-3",
      question: "Which of the following statements correctly describes the living state of a biological system?",
      options: [
        "It is a state at chemical equilibrium capable of doing spontaneous work",
        "It is a non-equilibrium steady state maintained to perform continuous physiological work",
        "It is a state of maximum entropy where metabolism ceases",
        "It is an equilibrium state maintained by inorganic catalysts"
      ],
      correctAnswer: 1,
      explanation: "NCERT emphasizes that physical systems at equilibrium cannot perform work. Living organisms exist in a non-equilibrium steady state maintained by metabolic energy input (ATP) to perform work continuously.",
      topicTested: "The Living State & Metabolism",
      difficulty: "Medium"
    }
  ],
  pyqs: [
    {
      id: "pyq-enz-1",
      year: 2021,
      exam: "NEET",
      examName: "NEET 2021",
      examYear: "2021",
      verifiedExam: "NEET 2021",
      question: "Which one of the following statements is correct with reference to enzymes?",
      options: [
        "Holoenzyme = Apoenzyme + Coenzyme",
        "Coenzyme = Apoenzyme + Holoenzyme",
        "Holoenzyme = Coenzyme + Apoenzyme",
        "Apoenzyme = Holoenzyme + Coenzyme"
      ],
      correctAnswer: 0,
      correctOption: 0,
      explanation: "A complete catalytically active enzyme is called a Holoenzyme, which consists of a protein component (Apoenzyme) combined with a non-protein cofactor or coenzyme: Holoenzyme = Apoenzyme + Coenzyme/Cofactor.",
      topicTested: "Enzyme Structure & Cofactors",
      conceptTested: "Holoenzyme Formula",
      ncertReference: "Class 11 NCERT Biology, Chapter 9, Section 9.8",
      verified: true
    },
    {
      id: "pyq-enz-2",
      year: 2017,
      exam: "NEET",
      examName: "NEET 2017",
      examYear: "2017",
      verifiedExam: "NEET 2017",
      question: "Which one of the following statements is correct regarding competitive inhibition?",
      options: [
        "Competitive inhibitor binds at allosteric site and decreases Vmax",
        "Competitive inhibitor resembles substrate structure and competes for active site; Vmax remains unchanged while Km increases",
        "Competitive inhibitor increases Vmax and decreases Km",
        "Competitive inhibitor permanently destroys the apoenzyme"
      ],
      correctAnswer: 1,
      correctOption: 1,
      explanation: "A competitive inhibitor closely resembles the substrate in structure, competing for active site binding. Because inhibition can be reversed by adding excess substrate, Vmax remains UNCHANGED while Km INCREASES.",
      topicTested: "Competitive Inhibition Kinetics",
      conceptTested: "Vmax and Km changes during competitive inhibition",
      ncertReference: "Class 11 NCERT Biology, Chapter 9, Section 9.7",
      verified: true
    },
    {
      id: "pyq-enz-3",
      year: 2014,
      exam: "AIPMT",
      examName: "AIPMT 2014",
      examYear: "2014",
      verifiedExam: "AIPMT 2014",
      question: "Select the option which correctly matches the cofactor with its enzyme:",
      options: [
        "Zinc - Carboxypeptidase",
        "Iron - Hexokinase",
        "Copper - Carbonic Anhydrase",
        "Magnesium - Catalase"
      ],
      correctAnswer: 0,
      correctOption: 0,
      explanation: "Zinc is the metal ion cofactor for Carboxypeptidase and Carbonic Anhydrase. Haem (iron-porphyrin) is the prosthetic group for Catalase, and Magnesium is required for Hexokinase.",
      topicTested: "Cofactors",
      conceptTested: "Metal ion cofactors",
      ncertReference: "Class 11 NCERT Biology, Chapter 9, Section 9.8",
      verified: true
    }
  ]
};
