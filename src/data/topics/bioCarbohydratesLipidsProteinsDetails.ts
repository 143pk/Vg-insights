import { DetailedTopicContent } from '../../types/neet';

export const bioCarbohydratesLipidsProteinsDetails: DetailedTopicContent = {
  topicId: "bio-carbohydrates-lipids-proteins",
  topicName: "Biomolecules — Chemical Composition, Metabolites, Carbohydrates, Lipids, Proteins & Nucleic Acids",
  subject: "Biology",
  class: "Class 11",
  classification: "Cell Structure & Function",
  chapter: "Biomolecules",
  whatIsThisTopic: "Exhaustive NCERT study guide covering elemental analysis of living tissue, primary vs secondary metabolites, structures and functions of carbohydrates, lipids, proteins, 4 levels of protein organization, denaturation, and nucleic acids (DNA/RNA).",
  basicIdea: [
    "All living organisms are composed of organic and inorganic molecules built primarily around carbon, hydrogen, oxygen, nitrogen, phosphorus, and sulfur.",
    "Chemical analysis of living tissue using trichloroacetic acid (CCl3COOH) separates biomolecules into an acid-soluble pool (micromolecules, MW < 800 Da) and an acid-insoluble fraction (macromolecules, MW > 10,000 Da, along with membrane lipids).",
    "Primary metabolites (e.g., glucose, amino acids) have identifiable physiological roles in growth and development, whereas secondary metabolites (alkaloids, toxins, lectins, gums) are ecological products synthesized by plants, fungi, and microbes.",
    "Carbohydrates (monosaccharides, disaccharides, polysaccharides) are linked by glycosidic bonds. Starch and glycogen are branched storage glucans, whereas cellulose is a linear structural glucan.",
    "Lipids are hydrophobic or amphipathic esters of fatty acids and glycerol. Phospholipids (e.g., lecithin) form the structural matrix of biological membranes.",
    "Proteins are heteropolymers of 20 standard amino acids joined by peptide bonds. They exhibit 4 structural levels (Primary, Secondary, Tertiary, and Quaternary), where tertiary structure is essential for biological activity.",
    "Nucleic acids (DNA and RNA) are polymers of nucleotides joined by 3'-5' phosphodiester bonds, carrying genetic information and catalytic machinery."
  ],
  importantTerms: [
    {
      term: "Acid-Soluble Pool (Filtrate)",
      definition: "The fraction obtained after filtering homogenized living tissue in CCl3COOH; contains micromolecules with molecular weights ranging from 18 to 800 Daltons (e.g., monosaccharides, amino acids, nucleotides)."
    },
    {
      term: "Acid-Insoluble Fraction (Retentate)",
      definition: "The fraction retained on the filter cloth containing biological macromolecules with molecular weight > 10,000 Daltons (proteins, nucleic acids, polysaccharides) plus cell membrane lipid aggregates."
    },
    {
      term: "Primary Metabolites",
      definition: "Organic compounds directly involved in normal growth, development, and physiological functioning of an organism, with known metabolic functions (e.g., glucose, amino acids, fatty acids, nucleotides)."
    },
    {
      term: "Secondary Metabolites",
      definition: "Organic compounds produced by plants, fungi, and microbes that do not have direct roles in primary metabolism but possess ecological, defense, or medicinal importance (e.g., alkaloids like morphine, toxins like ricin, lectins like concanavalin A)."
    },
    {
      term: "Glycosidic Bond",
      definition: "A covalent ether linkage formed between two monosaccharide units by dehydration (loss of a water molecule) involving anomeric carbon atoms."
    },
    {
      term: "Peptide Bond",
      definition: "A covalent amide linkage (-CO-NH-) formed by dehydration condensation between the alpha-carboxyl group of one amino acid and the alpha-amino group of an adjacent amino acid."
    },
    {
      term: "Phosphodiester Bond",
      definition: "A covalent bond linking the 3'-carbon of one pentose sugar to the 5'-carbon of an adjacent pentose sugar via a phosphate group in a polynucleotide chain."
    },
    {
      term: "Zwitterion",
      definition: "A dipolar ion carrying both positive (-NH3+) and negative (-COO-) charges simultaneously at a specific pH (isoelectric point), making amino acids amphoteric."
    },
    {
      term: "Essential Amino Acids",
      definition: "Amino acids that cannot be synthesized by the human body and must be obtained through diet (e.g., Leucine, Isoleucine, Valine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine)."
    },
    {
      term: "Denaturation",
      definition: "The loss of 2°, 3°, and 4° structures of a protein due to heat or pH changes, causing loss of biological activity without breaking primary covalent peptide bonds."
    }
  ],
  conceptExplanation: [
    {
      heading: "1. Chemical Composition of Living Tissue & Primary vs Secondary Metabolites",
      paragraphs: [
        "To analyze the chemical composition of living organisms, a fresh tissue sample (e.g., a leaf or liver piece) is ground in Trichloroacetic acid (CCl3COOH) using a mortar and pestle. The thick slurry obtained is filtered through cheesecloth or cotton wool. This yields two fractions: (1) The Acid-Soluble Pool (Filtrate), containing thousands of low-molecular-weight organic compounds (18 to 800 Daltons) representing the cytoplasmic pool, and (2) The Acid-Insoluble Fraction (Retentate), containing high-molecular-weight macromolecules (> 10,000 Daltons) such as proteins, nucleic acids, and polysaccharides.",
        "A critical NCERT distinction involves Lipids. Lipids have molecular weights not exceeding 800 Daltons (micromolecules). However, during grinding, cell membranes and organelle membranes are disrupted into water-insoluble lipid vesicles. These vesicles get retained on the cheesecloth along with macromolecules and are recovered in the acid-insoluble fraction. Thus, lipids are NOT strictly macromolecules, but reside in the acid-insoluble pool due to their structural aggregation.",
        "Elemental analysis reveals that Carbon and Hydrogen are significantly more abundant in living organisms (per unit weight) than in the Earth's crust. Water is the most abundant chemical compound in living cells (70–90% of total mass), followed by Proteins (10–15%), Nucleic Acids (5–7%), Carbohydrates (3%), Lipids (2%), and Ions (1%).",
        "NCERT divides metabolites into Primary and Secondary: Primary metabolites (e.g., amino acids, sugars, nitrogenous bases) have identifiable functions and play known roles in normal physiological processes. Secondary metabolites are synthesized by plants, fungi, and microbes; they lack direct roles in primary cellular physiology, but serve ecological roles (e.g., defense against herbivores, pollinator attraction) and commercial uses (e.g., medicines, rubber, spices)."
      ],
      visual: {
        type: "svg",
        caption: "Figure 1.1: Chemical Analysis of Living Tissue (CCl3COOH Filtration) and Metabolite Classification.",
        svgContent: `<svg viewBox="0 0 800 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="380" fill="#f8fafc" rx="16"/>
  <text x="400" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Chemical Analysis of Living Tissue &amp; Fractions</text>
  
  <!-- Flow Chart: Tissue + CCl3COOH -->
  <rect x="30" y="50" width="220" height="60" fill="#3b82f6" rx="10"/>
  <text x="140" y="75" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Living Tissue (Leaf / Liver)</text>
  <text x="140" y="95" font-family="system-ui, sans-serif" font-size="11" fill="#dbeafe" text-anchor="middle">+ Grind in CCl3COOH slurry</text>
  
  <!-- Arrow down -->
  <path d="M 140 110 L 140 145" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
    </marker>
  </defs>
  
  <!-- Filtration Box -->
  <rect x="30" y="150" width="220" height="50" fill="#6366f1" rx="10"/>
  <text x="140" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Filter through Cheesecloth</text>
  
  <!-- Branch Right -> Retentate -->
  <path d="M 250 160 L 320 100" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)"/>
  
  <!-- Branch Right -> Filtrate -->
  <path d="M 250 190 L 320 250" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)"/>
  
  <!-- Retentate Box -->
  <rect x="320" y="60" width="450" height="100" fill="#fef2f2" stroke="#fca5a5" stroke-width="2" rx="12"/>
  <text x="335" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#991b1b">1. Acid-Insoluble Fraction (Retentate)</text>
  <text x="335" y="108" font-family="system-ui, sans-serif" font-size="12" fill="#7f1d1d">• Macromolecules (MW &gt; 10,000 Da): Proteins, Polysaccharides, Nucleic Acids</text>
  <text x="335" y="128" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">• Membrane Lipids (MW &lt; 800 Da, form vesicles retained on filter cloth!)</text>
  <text x="335" y="148" font-family="system-ui, sans-serif" font-size="11" fill="#991b1b">NCERT Trap: Lipids are NOT true macromolecules, but reside in acid-insoluble pool.</text>
  
  <!-- Filtrate Box -->
  <rect x="320" y="210" width="450" height="100" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="2" rx="12"/>
  <text x="335" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#065f46">2. Acid-Soluble Pool (Filtrate)</text>
  <text x="335" y="258" font-family="system-ui, sans-serif" font-size="12" fill="#047857">• Biomolecules / Micromolecules (MW = 18 to 800 Da)</text>
  <text x="335" y="278" font-family="system-ui, sans-serif" font-size="12" fill="#047857">• Represents cytoplasmic composition: Monosaccharides, Amino Acids, Nucleotides, Minerals</text>
  <text x="335" y="298" font-family="system-ui, sans-serif" font-size="11" fill="#065f46">Water constitutes 70–90% of cell mass; Proteins 10–15%; Nucleic Acids 5–7%.</text>
  
  <!-- Footer Note -->
  <rect x="30" y="325" width="740" height="40" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" rx="8"/>
  <text x="400" y="350" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Average Cell Mass %: Water (70-90%) &gt; Protein (10-15%) &gt; Nucleic Acid (5-7%) &gt; Carbohydrate (3%) &gt; Lipid (2%) &gt; Ions (1%)</text>
</svg>`
      },
      tables: [
        {
          title: "NCERT Table 9.3 — Secondary Metabolites Categories & Examples",
          headers: ["Category", "NCERT Examples", "Biological / Commercial Importance"],
          rows: [
            ["Pigments", "Carotenoids, Anthocyanins", "Plant pigmentation, antioxidant light harvesting"],
            ["Alkaloids", "Morphine, Codeine", "Pain relievers, opium poppy derivatives, defense"],
            ["Terpenoids", "Monoterpenes, Diterpenes", "Essential plant defense, aromatic compounds"],
            ["Essential Oils", "Lemon grass oil, Eucalyptus oil", "Aromatic oils, insect repellent, perfumery"],
            ["Toxins", "Abrin (Abrus precatorius), Ricin (Castor)", "Potent ribosome-inactivating protein toxins"],
            ["Lectins", "Concanavalin A", "Carbohydrate-binding proteins, agglutinins"],
            ["Drugs", "Vinblastine (periwinkle), Curcumin (turmeric)", "Anti-cancer chemotherapy, anti-inflammatory"],
            ["Polymeric Substances", "Rubber, Gums, Cellulose", "Plant latex, structural polymers, commercial gum"]
          ]
        }
      ]
    },
    {
      heading: "2. Carbohydrates — Monosaccharides, Disaccharides & Polysaccharides",
      paragraphs: [
        "Carbohydrates are hydrates of carbon with the empirical formula Cx(H2O)y. Chemically, they are polyhydroxy aldehydes or polyhydroxy ketones. They are classified into three main groups based on hydrolysis: (1) Monosaccharides (cannot be hydrolyzed further into simpler sugars), (2) Oligosaccharides (yield 2 to 10 monosaccharide units on hydrolysis), and (3) Polysaccharides (yield more than 10 monosaccharide units).",
        "Monosaccharides are classified by carbon number: Trioses (3C, e.g., Glyceraldehyde), Pentoses (5C, e.g., Ribose, Deoxyribose), and Hexoses (6C, e.g., Glucose, Fructose, Galactose). Sugars with a free aldehyde or ketone group capable of reducing cupric ions (Cu2+) to cuprous ions (Cu+) in Fehling's or Benedict's solution are called REDUCING SUGARS (all monosaccharides, plus disaccharides like Maltose and Lactose). SUCROSE is a NON-REDUCING SUGAR because its reducing aldehyde group of glucose (C1) and ketone group of fructose (C2) are both involved in the alpha-1,2-glycosidic bond.",
        "Disaccharides are formed when two monosaccharides combine via a Glycosidic Bond (a dehydration reaction releasing H2O):",
        "• Maltose = Glucose + Glucose (alpha-1,4 glycosidic bond; reducing sugar)",
        "• Lactose = Glucose + Galactose (beta-1,4 glycosidic bond; milk sugar; reducing sugar)",
        "• Sucrose = Glucose + Fructose (alpha-1,2 glycosidic bond; cane sugar; non-reducing sugar)",
        "Polysaccharides are long chains of monosaccharides linked by glycosidic bonds. They function as energy storage or structural elements. Homopolysaccharides consist of a single monomer type, whereas Heteropolysaccharides contain different monomers.",
        "• Starch: Plant storage polysaccharide made of Glucose units. It consists of two components: linear Amylose (alpha-1,4 linked, unbranched, forms secondary helical structures) and branched Amylopectin (alpha-1,4 linear with alpha-1,6 branch points every 24-30 glucose units). Starch forms helical structures that trap Iodine molecules (I2), producing an intense blue-black color.",
        "• Cellulose: Structural homopolymer of Glucose present in plant cell walls. Glucose units are linked by beta-1,4 glycosidic bonds in straight, unbranched linear chains. Cellulose DOES NOT form helices and therefore CANNOT hold Iodine (I2) (remains brown/yellow).",
        "• Glycogen: Animal storage polysaccharide stored in liver and muscle. Highly branched homopolymer of Glucose with alpha-1,4 linear links and alpha-1,6 branches occurring frequently (every 8-12 units). In a glycogen chain, the right end is called the REDUCING END and the left end is the NON-REDUCING END.",
        "• Inulin: Homopolymer of Fructose (storage carbohydrate in Dahlia roots). Chitin: Structural homopolymer of N-acetylglucosamine (NAG) present in fungal cell walls and arthropod exoskeletons."
      ],
      visual: {
        type: "svg",
        caption: "Figure 1.2: Chemical Structures of Glucose, Glycosidic Bond Formation, and Starch vs Cellulose vs Glycogen.",
        svgContent: `<svg viewBox="0 0 800 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="360" fill="#f8fafc" rx="16"/>
  <text x="400" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Carbohydrate Architectures &amp; Glycosidic Linkages</text>
  
  <!-- Glucose Ring -->
  <g transform="translate(40, 50)">
    <rect width="210" height="140" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="105" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">α-D-Glucose Ring</text>
    <path d="M 60 70 L 105 50 L 150 70 L 150 110 L 105 130 L 60 110 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <text x="105" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">C6H12O6</text>
    <text x="155" y="75" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444">C1 (Anomeric)</text>
  </g>
  
  <!-- Glycosidic Bond Reaction -->
  <g transform="translate(270, 50)">
    <rect width="490" height="140" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="245" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Glycosidic Bond Formation (Dehydration Synthesis)</text>
    <rect x="20" y="45" width="130" height="40" fill="#eff6ff" stroke="#3b82f6" rx="6"/>
    <text x="85" y="70" font-family="system-ui, sans-serif" font-size="12" fill="#1d4ed8" text-anchor="middle">Monosaccharide 1</text>
    <text x="170" y="70" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ef4444">+</text>
    <rect x="190" y="45" width="130" height="40" fill="#eff6ff" stroke="#3b82f6" rx="6"/>
    <text x="255" y="70" font-family="system-ui, sans-serif" font-size="12" fill="#1d4ed8" text-anchor="middle">Monosaccharide 2</text>
    
    <path d="M 330 65 L 360 65" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="345" y="55" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444" text-anchor="middle">- H2O</text>
    
    <rect x="370" y="45" width="105" height="40" fill="#dcfce7" stroke="#16a34a" rx="6"/>
    <text x="422" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">Disaccharide</text>
    <text x="245" y="115" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Ether linkage (-C-O-C-) connecting C1 of one sugar to C4 or C2 of another.</text>
  </g>
  
  <!-- Polysaccharide Comparison -->
  <g transform="translate(40, 210)">
    <!-- Starch -->
    <rect x="0" y="0" width="220" height="130" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="10"/>
    <text x="110" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">STARCH (Amylose + Amylopectin)</text>
    <text x="15" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#78350f">• α-1,4 linear + α-1,6 branch</text>
    <text x="15" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#78350f">• Secondary Helical Structure</text>
    <text x="15" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#b45309">• Traps I2 → Intense Blue Color</text>
    <text x="15" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#78350f">• Main plant energy storage</text>
    
    <!-- Cellulose -->
    <rect x="250" y="0" width="220" height="130" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" rx="10"/>
    <text x="360" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">CELLULOSE</text>
    <text x="265" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• β-1,4 glucan unbranched chain</text>
    <text x="265" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Straight parallel microfibrils</text>
    <text x="265" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d">• No Helices → CANNOT hold I2</text>
    <text x="265" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Plant cell wall structural unit</text>
    
    <!-- Glycogen -->
    <rect x="500" y="0" width="220" height="130" fill="#fef2f2" stroke="#ef4444" stroke-width="2" rx="10"/>
    <text x="610" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">GLYCOGEN</text>
    <text x="515" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Highly branched α-1,4 &amp; α-1,6</text>
    <text x="515" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Frequent branches (8-12 units)</text>
    <text x="515" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">• Right = Reducing, Left = Non-Red</text>
    <text x="515" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Stored in animal liver &amp; muscles</text>
  </g>
</svg>`
      },
      tables: [
        {
          title: "Comparison of Starch, Cellulose, and Glycogen",
          headers: ["Feature", "Starch", "Cellulose", "Glycogen"],
          rows: [
            ["Monomer Unit", "alpha-D-Glucose", "beta-D-Glucose", "alpha-D-Glucose"],
            ["Glycosidic Linkage", "alpha-1,4 (Amylose) & alpha-1,6 (Amylopectin)", "beta-1,4 (Unbranched linear)", "alpha-1,4 (Linear) & alpha-1,6 (Branches)"],
            ["Branching", "Moderately branched (every 24-30 units)", "Unbranched straight chains", "Highly branched (every 8-12 units)"],
            ["Secondary Structure", "Forms helices that trap Iodine", "No helices (straight parallel chains)", "Tree-like branched structure"],
            ["Iodine Test", "Gives Blue-Black color with I2", "No color change with I2", "Gives Red-Violet color with I2"],
            ["Biological Location", "Plant storage (chloroplasts/amyloplasts)", "Plant cell wall structural matrix", "Animal storage (Liver & Skeleton muscle)"]
          ]
        }
      ]
    },
    {
      heading: "3. Lipids — Fatty Acids, Glycerol, Triglycerides & Phospholipids",
      paragraphs: [
        "Lipids are water-insoluble hydrophobic or amphipathic organic compounds containing carbon, hydrogen, and oxygen (with oxygen proportion much lower than in carbohydrates). They dissolve readily in non-polar organic solvents like ether, chloroform, and benzene. Lipids are composed of fatty acids and alcohols (mainly glycerol).",
        "Fatty Acids consist of a carboxyl group (-COOH) attached to an hydrocarbon alkyl group (R). The hydrocarbon chain length ranges from 4 to 20 carbons. NCERT highlights two specific fatty acid examples: (1) Palmitic Acid — saturated 16-carbon fatty acid (CH3-(CH2)14-COOH), including carboxyl carbon, and (2) Arachidonic Acid — unsaturated 20-carbon fatty acid with 4 double bonds (including carboxyl carbon). Fatty acids are classified as:",
        "• Saturated Fatty Acids: Contain no carbon-carbon double bonds (C=C). High melting points; solid at room temperature (e.g., Palmitic acid, Stearic acid).",
        "• Unsaturated Fatty Acids: Contain one or more double bonds (C=C). Low melting points; liquid at room temperature (e.g., Oleic acid, Linoleic acid, Linolenic acid).",
        "Glycerol is Trihydroxypropane (CH2OH-CHOH-CH2OH), a 3-carbon alcohol. Fatty acids are esterified to glycerol via Ester Bonds (-COO-). When one fatty acid joins glycerol, a Monoglyceride is formed; two fatty acids form a Diglyceride; three fatty acids form a Triglyceride (Triacylglycerol).",
        "Fats vs Oils: Fats have higher melting points and remain solid at room temperature (e.g., butter, lard). Oils have lower melting points and remain liquid at room temperature (e.g., Gingelly oil / sesame oil, mustard oil).",
        "Phospholipids are compound lipids containing a glycerol backbone, two fatty acids esterified at C1 and C2, and a phosphate group esterified at C3 attached to a polar head group (e.g., Choline). LECITHIN (phosphatidylcholine) is the quintessential NCERT phospholipid example. Phospholipids are AMPHIPATHIC molecules with a hydrophilic (water-attracting) polar phosphate head and two hydrophobic (water-repelling) non-polar fatty acid tails. This amphipathic nature enables them to self-assemble into lipid bilayers that form the structural foundation of cell membranes.",
        "Cholesterol is a complex sterol lipid composed of four fused carbon rings (cyclopentanoperhydrophenanthrene ring system) with a hydroxyl group at C3. It regulates membrane fluidity and acts as a precursor for steroid hormones (estrogen, progesterone, testosterone, cortisol) and vitamin D."
      ],
      visual: {
        type: "svg",
        caption: "Figure 1.3: Chemical Structures of Glycerol, Fatty Acids, Triglyceride, Lecithin Phospholipid, and Bilayer.",
        svgContent: `<svg viewBox="0 0 800 350" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="350" fill="#f8fafc" rx="16"/>
  <text x="400" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Lipid Molecular Structures &amp; Phospholipid Membrane Matrix</text>
  
  <!-- Glycerol & Triglyceride -->
  <g transform="translate(30, 50)">
    <rect width="230" height="270" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="115" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">1. Glycerol &amp; Triglyceride</text>
    <rect x="15" y="45" width="200" height="60" fill="#f0f9ff" stroke="#0284c7" rx="6"/>
    <text x="115" y="70" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Glycerol (Trihydroxypropane)</text>
    <text x="115" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#0284c7" text-anchor="middle">CH2OH - CHOH - CH2OH</text>
    
    <path d="M 115 110 L 115 130" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="115" y="125" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444" text-anchor="middle">+ 3 Fatty Acids (- 3 H2O)</text>
    
    <rect x="15" y="145" width="200" height="105" fill="#f0fdf4" stroke="#16a34a" rx="6"/>
    <text x="115" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">Triglyceride (Triacylglycerol)</text>
    <text x="25" y="195" font-family="system-ui, sans-serif" font-size="11" fill="#166534">Glycerol backbone esterified with</text>
    <text x="25" y="215" font-family="system-ui, sans-serif" font-size="11" fill="#166534">3 Fatty Acid acyl chains via 3 Ester</text>
    <text x="25" y="235" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d">bonds (-COO-).</text>
  </g>
  
  <!-- Fatty Acids: Saturated vs Unsaturated -->
  <g transform="translate(280, 50)">
    <rect width="230" height="270" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="115" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">2. NCERT Fatty Acids</text>
    <rect x="15" y="45" width="200" height="100" fill="#fef2f2" stroke="#fca5a5" rx="6"/>
    <text x="115" y="68" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">Palmitic Acid (16 Carbons)</text>
    <text x="25" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• CH3-(CH2)14-COOH</text>
    <text x="25" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Saturated (No C=C double bonds)</text>
    <text x="25" y="130" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• High melting point (Solid fat)</text>
    
    <rect x="15" y="155" width="200" height="100" fill="#fefce8" stroke="#fde047" rx="6"/>
    <text x="115" y="178" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">Arachidonic Acid (20 Carbons)</text>
    <text x="25" y="200" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• 20 Carbons (incl. -COOH)</text>
    <text x="25" y="220" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• Unsaturated (4 C=C double bonds)</text>
    <text x="25" y="240" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• Kinked chain, lower melting pt</text>
  </g>
  
  <!-- Phospholipid & Bilayer -->
  <g transform="translate(530, 50)">
    <rect width="240" height="270" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="120" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">3. Lecithin (Phospholipid)</text>
    <circle cx="120" cy="70" r="22" fill="#3b82f6"/>
    <text x="120" y="75" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Head</text>
    <path d="M 110 92 L 105 140" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <path d="M 130 92 L 135 140" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
    <text x="120" y="160" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Hydrophilic Head (Phosphate + Choline)</text>
    <text x="120" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">2 Hydrophobic Tails (Fatty Acids)</text>
    <rect x="15" y="200" width="210" height="55" fill="#eff6ff" stroke="#93c5fd" rx="6"/>
    <text x="120" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">AMPHIPATHIC NATURE</text>
    <text x="120" y="242" font-family="system-ui, sans-serif" font-size="10" fill="#1e3a8a" text-anchor="middle">Forms Cell Membrane Bilayer</text>
  </g>
</svg>`
      },
      tables: [
        {
          title: "Saturated vs Unsaturated Fatty Acids",
          headers: ["Feature", "Saturated Fatty Acids", "Unsaturated Fatty Acids"],
          rows: [
            ["Carbon Double Bonds (C=C)", "Absent (only single C-C bonds)", "Present (one or more C=C double bonds)"],
            ["NCERT Example", "Palmitic Acid (16C), Stearic Acid (18C)", "Arachidonic Acid (20C, 4 double bonds), Oleic acid"],
            ["Melting Point", "High melting point", "Low melting point"],
            ["Physical State at 20°C", "Solid at room temperature (Fats)", "Liquid at room temperature (Oils like Gingelly oil)"],
            ["Hydrocarbon Chain Shape", "Straight unbent alkyl chain", "Kinked/bent at double bonds"],
            ["Health Impact", "Excess consumption raises LDL cholesterol", "Essential fatty acids promote HDL cardiovascular health"]
          ]
        }
      ]
    },
    {
      heading: "4. Proteins — Amino Acids, Peptide Bonds & 4 Levels of Structure",
      paragraphs: [
        "Proteins are HETEROPOLYMERS of amino acids joined linearly by PEPTIDE BONDS. Because proteins are composed of 20 different amino acids, they are never homopolymers. Proteins constitute 10-15% of total cellular mass.",
        "An Amino Acid is a substituted methane consisting of an alpha-carbon bonded to four substituent groups: (1) an Amino group (-NH2), (2) a Carboxyl group (-COOH), (3) a Hydrogen atom (-H), and (4) a variable side-chain R group. Amino acids exist in a Zwitterionic state at their isoelectric pH, where the carboxyl group loses a proton (-COO-) and the amino group gains a proton (-NH3+), making amino acids amphoteric.",
        "Classification of 20 Standard Amino Acids based on R-group chemistry:",
        "• Acidic Amino Acids: Carry carboxyl R groups (e.g., Glutamic Acid, Aspartic Acid)",
        "• Basic Amino Acids: Carry basic nitrogenous R groups (e.g., Lysine, Arginine, Histidine)",
        "• Neutral Amino Acids: Non-polar aliphatic R groups (e.g., Valine, Alanine, Leucine, Isoleucine, Glycine)",
        "• Aromatic Amino Acids: Contain aromatic ring systems (e.g., Tyrosine, Phenylalanine, Tryptophan)",
        "• Sulfur-Containing: Cysteine (forms disulfide -S-S- bonds) and Methionine",
        "• Smallest / Achiral Amino Acid: GLYCINE (R = H, lacking a chiral asymmetric carbon atom!). Alcoholic: Serine, Threonine.",
        "PEPTIDE BOND FORMATION: A peptide bond (-CO-NH-) is formed when the alpha-carboxyl group of one amino acid reacts with the alpha-amino group of the next amino acid with the release of a water molecule (dehydration synthesis).",
        "FOUR LEVELS OF PROTEIN ORGANIZATION:",
        "1. Primary Structure: The linear positional sequence of amino acids in a polypeptide chain. The FIRST amino acid is at the N-terminal (left end, free -NH2 group), and the LAST amino acid is at the C-terminal (right end, free -COOH group). Primary structure contains positional information but is biologically non-functional on its own.",
        "2. Secondary Structure: Local folding of the polypeptide chain into regular repeating motifs. Examples include the Right-Handed Alpha-Helix (intrachain H-bonds between C=O of residue n and N-H of residue n+4) and Beta-Pleated Sheets (interchain or intrachain H-bonds between adjacent parallel/antiparallel strands). Note: In proteins, ONLY right-handed helices are observed.",
        "3. Tertiary Structure: Long-range 3D folding of the polypeptide chain into a compact, globular architectural shape. It is stabilized by Hydrogen bonds, Ionic/electrostatic bonds, Disulfide bridges (-S-S-), and Hydrophobic interactions. Tertiary structure is ABSOLUTELY NECESSARY for biological, enzymatic, and receptor activities of proteins!",
        "4. Quaternary Structure: Architectural assembly of multiple polypeptide chains (subunits) into a functional multi-subunit complex. Example: Human Adult Hemoglobin (Hb) consists of 4 subunits—2 alpha chains and 2 beta chains (a2b2 tetramer).",
        "CRITICAL NCERT PROTEIN EXAMPLES:",
        "• Collagen: Most abundant protein in the ANIMAL world (triple helical fibrous structural protein).",
        "• RuBisCO (Ribulose bisphosphate carboxylase-oxygenase): Most abundant protein in the ENTIRE BIOSPHERE!",
        "• GLUT-4: Glucose transporter 4 that enables insulin-dependent glucose transport into cells.",
        "• Antibodies: Y-shaped defense proteins that fight infectious pathogens."
      ],
      visual: {
        type: "svg",
        caption: "Figure 1.4: Amino Acid Zwitterion, Peptide Bond Formation, and 4 Levels of Protein Architecture.",
        svgContent: `<svg viewBox="0 0 800 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="380" fill="#f8fafc" rx="16"/>
  <text x="400" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Protein Architecture: Zwitterion, Peptide Bond &amp; 4 Structural Levels</text>
  
  <!-- Top Left: Zwitterion -->
  <g transform="translate(30, 50)">
    <rect width="220" height="140" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="110" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Amino Acid Zwitterion</text>
    <rect x="20" y="45" width="180" height="75" fill="#fefce8" stroke="#eab308" rx="6"/>
    <text x="110" y="70" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a16207" text-anchor="middle">H3N+ - CH(R) - COO-</text>
    <text x="110" y="95" font-family="system-ui, sans-serif" font-size="11" fill="#854d0e" text-anchor="middle">Dipolar ion at Isoelectric pH</text>
    <text x="110" y="112" font-family="system-ui, sans-serif" font-size="10" fill="#713f12" text-anchor="middle">Amphoteric (acidic &amp; basic character)</text>
  </g>
  
  <!-- Top Right: Peptide Bond -->
  <g transform="translate(270, 50)">
    <rect width="500" height="140" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="250" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Peptide Bond Formation (-CO-NH- Linkage)</text>
    <rect x="20" y="45" width="180" height="40" fill="#eff6ff" stroke="#3b82f6" rx="6"/>
    <text x="110" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#1d4ed8" text-anchor="middle">Amino Acid 1 (-COOH)</text>
    <text x="215" y="70" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ef4444">+</text>
    <rect x="230" y="45" width="180" height="40" fill="#eff6ff" stroke="#3b82f6" rx="6"/>
    <text x="320" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#1d4ed8" text-anchor="middle">Amino Acid 2 (NH2-)</text>
    
    <path d="M 420 65 L 450 65" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="435" y="55" font-family="system-ui, sans-serif" font-size="10" fill="#ef4444" text-anchor="middle">- H2O</text>
    
    <rect x="110" y="95" font-family="system-ui, sans-serif" width="280" height="35" fill="#dcfce7" stroke="#16a34a" rx="6"/>
    <text x="250" y="118" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">Dipeptide with Amide Linkage (-CO-NH-)</text>
  </g>
  
  <!-- Bottom: 4 Levels of Protein Structure -->
  <g transform="translate(30, 210)">
    <!-- Primary -->
    <rect x="0" y="0" width="170" height="150" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" rx="10"/>
    <text x="85" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Primary Structure</text>
    <text x="10" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#0284c7">• Linear sequence</text>
    <text x="10" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#0284c7">• N-terminal (left)</text>
    <text x="10" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#0284c7">• C-terminal (right)</text>
    <text x="10" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#0284c7">• Peptide bonds only</text>
    <text x="10" y="130" font-family="system-ui, sans-serif" font-size="10" fill="#0369a1">Non-functional alone</text>
    
    <!-- Secondary -->
    <rect x="190" y="0" width="170" height="150" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" rx="10"/>
    <text x="275" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">2. Secondary Structure</text>
    <text x="200" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Right-handed α-helix</text>
    <text x="200" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• β-pleated sheets</text>
    <text x="200" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Hydrogen bonds</text>
    <text x="200" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#14532d">• Regular local coiling</text>
    <text x="200" y="130" font-family="system-ui, sans-serif" font-size="10" fill="#166534">NCERT: Only right-helix</text>
    
    <!-- Tertiary -->
    <rect x="380" y="0" width="180" height="150" fill="#fef2f2" stroke="#ef4444" stroke-width="2" rx="10"/>
    <text x="470" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">3. Tertiary Structure</text>
    <text x="390" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• 3D Globular fold</text>
    <text x="390" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• H-bonds, Disulfide (-S-S-)</text>
    <text x="390" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#7f1d1d">• Ionic &amp; Hydrophobic</text>
    <text x="390" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">• ESSENTIAL for enzymes</text>
    <text x="390" y="130" font-family="system-ui, sans-serif" font-size="10" fill="#991b1b">Active catalytic state</text>
    
    <!-- Quaternary -->
    <rect x="580" y="0" width="160" height="150" fill="#fefce8" stroke="#eab308" stroke-width="2" rx="10"/>
    <text x="660" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">4. Quaternary Structure</text>
    <text x="590" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• Multi-subunit assembly</text>
    <text x="590" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• Example: Adult Hb</text>
    <text x="590" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• 2 α chains + 2 β chains</text>
    <text x="590" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• Tetrameric complex</text>
    <text x="590" y="130" font-family="system-ui, sans-serif" font-size="10" fill="#854d0e">Cooperative O2 binding</text>
  </g>
</svg>`
      },
      tables: [
        {
          title: "Comparison of 4 Levels of Protein Structure",
          headers: ["Structural Level", "Description & Shape", "Stabilizing Bonds", "Biological Significance & Examples"],
          rows: [
            ["Primary (1°)", "Linear sequence of amino acids (N-terminal to C-terminal)", "Covalent Peptide Bonds (-CO-NH-)", "Contains positional genetic information; non-functional alone"],
            ["Secondary (2°)", "Local repeating coiling: Right-handed alpha-helix or beta-pleated sheets", "Intrachain / Interchain Hydrogen Bonds", "Provides mechanical strength (e.g., Keratin in hair/nails, Collagen)"],
            ["Tertiary (3°)", "Complex 3D folding into a compact globular protein architecture", "H-bonds, Disulfide (-S-S-), Ionic, Hydrophobic interactions", "ABSOLUTELY ESSENTIAL for biological activity, enzymes, antibodies, receptors"],
            ["Quaternary (4°)", "Spatial arrangement and interaction of multiple polypeptide subunits", "Non-covalent ionic, H-bonds, hydrophobic subunit interfaces", "Functional multi-subunit complexes (e.g., Adult Hemoglobin alpha-2 beta-2)"]
          ]
        }
      ]
    },
    {
      heading: "5. Nucleic Acids — Nucleosides, Nucleotides, DNA & RNA Architecture",
      paragraphs: [
        "Nucleic acids (DNA and RNA) are macromolecules made of linear chains of monomeric units called NUCLEOTIDES. They constitute the genetic material and protein synthesis machinery in all living cells.",
        "NUCLEOSIDE vs NUCLEOTIDE:",
        "• Nucleoside = Nitrogenous Base + Pentose Sugar (joined by N-Glycosidic Bond at N9 of purine or N1 of pyrimidine). Examples: Adenosine, Guanosine, Cytidine, Uridine, Deoxythymidine.",
        "• Nucleotide = Nitrogenous Base + Pentose Sugar + Phosphate Group (formed when a phosphate group is attached to the 5'-OH of a nucleoside by an Ester Linkage). Examples: Adenylic acid (AMP), Guanylic acid (GMP), Cytidylic acid (CMP), Thymidylic acid (dTMP).",
        "NITROGENOUS BASES:",
        "• Purines: Heterocyclic dicyclic 9-membered double-ring structures: Adenine (A) and Guanine (G). Present in both DNA and RNA.",
        "• Pyrimidines: Heterocyclic monocyclic 6-membered single-ring structures: Cytosine (C - in DNA & RNA), Uracil (U - in RNA only), and Thymine (T / 5-methyluracil - in DNA only).",
        "PENTOSE SUGARS: Ribose in RNA (has -OH group at C2' position) vs 2'-Deoxyribose in DNA (lacks oxygen atom at C2' position, having -H instead).",
        "PHOSPHODIESTER BOND: In a polynucleotide chain, adjacent nucleotides are linked together by 3'-5' Phosphodiester Bonds. The 3'-OH group of the pentose sugar of one nucleotide is joined to the 5'-OH group of the sugar of the next nucleotide via a phosphate bridge.",
        "WATSON-CRICK DNA DOUBLE HELIX MODEL (1953):",
        "1. Two polynucleotide chains wound in a RIGHT-HANDED double helix around a central axis.",
        "2. The two strands are ANTIPARALLEL: One strand runs in 5' -> 3' direction, and the other runs in 3' -> 5' direction.",
        "3. The backbone is formed by alternating Sugar-Phosphate-Sugar units, while the nitrogenous bases project inward perpendicular to the axis.",
        "4. Nitrogenous bases on opposite strands are joined by HYDROGEN BONDS following strict complementary base pairing: Adenine pairs with Thymine via 2 Hydrogen Bonds (A=T); Guanine pairs with Cytosine via 3 Hydrogen Bonds (G ≡ C).",
        "5. HELIX DIMENSIONS (B-DNA): Diameter = 2.0 nm (20 Angstroms). Pitch (one full 360-degree turn) = 3.4 nm (34 Angstroms), containing 10 base pairs. Distance between adjacent base pairs = 0.34 nm (3.4 Angstroms).",
        "6. CHARGAFF'S RULES: In any double-stranded DNA, the ratio of Purines to Pyrimidines is 1:1. Thus, [A] = [T] and [G] = [C], meaning [A + G] / [T + C] = 1.0."
      ],
      visual: {
        type: "svg",
        caption: "Figure 1.5: Nucleoside vs Nucleotide, Phosphodiester Bond Linkage, and DNA Double Helix Dimensions.",
        svgContent: `<svg viewBox="0 0 800 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="360" fill="#f8fafc" rx="16"/>
  <text x="400" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Nucleic Acid Architecture &amp; B-DNA Double Helix Dimensions</text>
  
  <!-- Left: Nucleoside vs Nucleotide -->
  <g transform="translate(30, 50)">
    <rect width="360" height="150" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="180" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Nucleoside vs Nucleotide</text>
    
    <rect x="15" y="45" width="155" height="85" fill="#eff6ff" stroke="#3b82f6" rx="6"/>
    <text x="92" y="68" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">NUCLEOSIDE</text>
    <text x="92" y="88" font-family="system-ui, sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">Nitrogenous Base</text>
    <text x="92" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">+ Pentose Sugar</text>

    <text x="180" y="90" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ef4444">+</text>
    
    <rect x="195" y="45" width="150" height="85" fill="#dcfce7" stroke="#16a34a" rx="6"/>
    <text x="270" y="68" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">NUCLEOTIDE</text>
    <text x="270" y="88" font-family="system-ui, sans-serif" font-size="11" fill="#166534">Nucleoside</text>
    <text x="270" y="105" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d">+ Phosphate Group</text>
  </g>
  
  <!-- Right: B-DNA Helix Dimensions -->
  <g transform="translate(410, 50)">
    <rect width="360" height="280" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" rx="10"/>
    <text x="180" y="25" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">B-DNA Helix Dimensions (Watson-Crick)</text>
    
    <!-- DNA Strands drawing -->
    <path d="M 120 50 Q 180 90 120 130 Q 60 170 120 210 Q 180 250 120 270" stroke="#2563eb" stroke-width="4" fill="none"/>
    <path d="M 240 50 Q 180 90 240 130 Q 300 170 240 210 Q 180 250 240 270" stroke="#dc2626" stroke-width="4" fill="none"/>
    
    <!-- Base Rungs -->
    <line x1="135" y1="70" x2="225" y2="70" stroke="#059669" stroke-width="3"/>
    <line x1="120" y1="90" x2="240" y2="90" stroke="#059669" stroke-width="3"/>
    <line x1="135" y1="110" x2="225" y2="110" stroke="#059669" stroke-width="3"/>
    <line x1="165" y1="150" x2="195" y2="150" stroke="#059669" stroke-width="3"/>
    <line x1="135" y1="190" x2="225" y2="190" stroke="#059669" stroke-width="3"/>
    
    <!-- Annotations -->
    <text x="20" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#2563eb">5'</text>
    <text x="20" y="260" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#2563eb">3'</text>
    <text x="330" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">3'</text>
    <text x="330" y="260" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">5'</text>
    
    <!-- Info Boxes -->
    <rect x="20" y="215" width="320" height="55" fill="#f8fafc" stroke="#94a3b8" rx="6"/>
    <text x="30" y="235" font-family="system-ui, sans-serif" font-size="11" fill="#0f172a">• Pitch (1 Turn) = 3.4 nm (34 Å) | 10 bp per turn</text>
    <text x="30" y="255" font-family="system-ui, sans-serif" font-size="11" fill="#0f172a">• Distance between bp = 0.34 nm | Helix Width = 2.0 nm</text>
  </g>
  
  <!-- Bottom Left: Purines vs Pyrimidines -->
  <g transform="translate(30, 210)">
    <rect width="360" height="120" fill="#fefce8" stroke="#fde047" stroke-width="2" rx="10"/>
    <text x="180" y="25" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">Purines vs Pyrimidines</text>
    <text x="15" y="50" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• PURINES: Adenine (A) &amp; Guanine (G) [Dicyclic 9-ring]</text>
    <text x="15" y="70" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">• PYRIMIDINES: Cytosine (C), Thymine (T), Uracil (U) [6-ring]</text>
    <text x="15" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#854d0e">• Chargaff: [A] = [T] (2 H-bonds) &amp; [G] = [C] (3 H-bonds)</text>
  </g>
</svg>`
      },
      tables: [
        {
          title: "Comparison of DNA and RNA",
          headers: ["Feature", "DNA (Deoxyribonucleic Acid)", "RNA (Ribonucleic Acid)"],
          rows: [
            ["Pentose Sugar", "2'-Deoxyribose (lacks -OH at C2' position)", "Ribose (has -OH at C2' position)"],
            ["Nitrogenous Pyrimidine", "Thymine (5-methyluracil) and Cytosine", "Uracil and Cytosine (Thymine absent)"],
            ["Strand Configuration", "Double-stranded antiparallel right-handed helix", "Single-stranded (may fold locally into hairpins)"],
            ["Base Pairing Rule", "A = T (2 H-bonds) and G ≡ C (3 H-bonds)", "A = U (2 H-bonds) and G ≡ C (3 H-bonds)"],
            ["Chemical Stability", "Highly stable (lacks 2'-OH, less reactive)", "Less stable, catalytic/labile (2'-OH makes it reactive)"],
            ["Primary Function", "Permanent genetic material in all organisms", "Genetic messenger (mRNA), transport (tRNA), catalytic (rRNA/Ribozyme)"]
          ]
        }
      ]
    }
  ],
  formulae: [
    {
      title: "Average Cellular Mass Percentage",
      formula: "\\text{Water (70-90\\%)} > \\text{Protein (10-15\\%)} > \\text{Nucleic Acid (5-7\\%)} > \\text{Carbohydrate (3\\%)} > \\text{Lipid (2\\%)} > \\text{Ions (1\\%)}"
    },
    {
      title: "Chargaff's Base Ratio Rule for dsDNA",
      formula: "[A] = [T], \\quad [G] = [C], \\quad \\frac{[A] + [G]}{[T] + [C]} = 1.0"
    },
    {
      title: "DNA Double Helix Pitch & Distance Between Base Pairs",
      formula: "\\text{Pitch} = 3.4\\text{ nm} = 34\\text{ \\AA}, \\quad \\text{bp per turn} = 10, \\quad \\text{Distance between bp} = 0.34\\text{ nm} = 3.4\\text{ \\AA}"
    }
  ],
  neetImportantPoints: [
    "🔥 LIPID TRAP: Lipids have molecular weight < 800 Da (micromolecules), but are found in the ACID-INSOLUBLE pool because membrane vesicles aggregate on cheesecloth.",
    "🔥 RECENT NEET QUESTION: Sucrose is a NON-REDUCING disaccharide because both reducing C1 of glucose and C2 of fructose are locked in the alpha-1,2-glycosidic bond.",
    "🔥 STARCH vs CELLULOSE: Starch forms secondary helices that trap Iodine (I2) to give a blue-black color; Cellulose has straight parallel chains without helices and CANNOT hold Iodine.",
    "🔥 GLYCOGEN ENDS: In a glycogen chain, the RIGHT end is the REDUCING end and the LEFT end is the NON-REDUCING end.",
    "🔥 MOST ABUNDANT PROTEINS: Collagen is the most abundant protein in the ANIMAL world; RuBisCO is the most abundant protein in the ENTIRE BIOSPHERE.",
    "🔥 PROTEIN HELIX HANDEDNESS: In proteins, ONLY RIGHT-HANDED helices are observed.",
    "🔥 TERTIARY STRUCTURE: Tertiary 3D globular structure is ABSOLUTELY NECESSARY for the biological and catalytic activities of proteins and enzymes."
  ],
  commonConfusions: [
    {
      commonConfusion: "Confusing Lipids as true macromolecules due to their presence in the acid-insoluble retentate.",
      correctFact: "Lipids have molecular weight < 800 Da and are NOT true macromolecules. They reside in the retentate only because membrane lipid vesicles fail to pass through cheesecloth.",
      whyItMattersForNEET: "Direct AIPMT 2015 question asking 'Which of the following biomolecules is NOT a macromolecule?' -> Answer is Lipids."
    },
    {
      commonConfusion: "Believing that Sucrose is a reducing sugar like Maltose or Lactose.",
      correctFact: "Sucrose is a non-reducing sugar because both anomeric reducing carbons (C1 of glucose and C2 of fructose) are involved in the glycosidic bond.",
      whyItMattersForNEET: "High-frequency NEET option trap in carbohydrate reducing property questions."
    },
    {
      commonConfusion: "Assuming Primary structure of protein is biologically active.",
      correctFact: "Primary structure is merely a linear sequence of amino acids with positional info; only TERTIARY (3D folded) structure possesses biological and enzymatic activity.",
      whyItMattersForNEET: "Crucial statement-based assertion/reason question in NEET UG."
    }
  ],
  quickRevision: [
    "Acid-soluble filtrate = Micromolecules (18-800 Da); Acid-insoluble retentate = Macromolecules (>10,000 Da + Membrane Lipids).",
    "Cell Composition: Water (70-90%) > Protein (10-15%) > Nucleic Acid (5-7%) > Carbohydrate (3%) > Lipid (2%) > Ions (1%).",
    "Secondary Metabolites: Abrin & Ricin = Toxins; Concanavalin A = Lectin; Morphine & Codeine = Alkaloids; Vinblastine & Curcumin = Drugs.",
    "Carbohydrates: Maltose (Gluc+Gluc α-1,4), Lactose (Gluc+Galac β-1,4), Sucrose (Gluc+Fruc α-1,2 non-reducing).",
    "Starch = Helical, holds I2 (blue); Cellulose = Linear β-1,4, no helices, no I2 color; Glycogen = Highly branched, Right=Reducing, Left=Non-reducing.",
    "Lipids: Palmitic acid = 16C saturated; Arachidonic acid = 20C unsaturated; Lecithin = Phospholipid (amphipathic matrix of membranes).",
    "Proteins: Heteropolymers of 20 amino acids; Glycine = Achiral; Glutamic acid = Acidic; Lysine = Basic; Collagen = Animal abundance; RuBisCO = Biosphere abundance.",
    "Protein 3D Structure: Tertiary structure is essential for enzymatic activity. Denaturation breaks 2°, 3°, 4° structures but spares 1° peptide bonds.",
    "Nucleic Acids: Nucleoside = Sugar + Base; Nucleotide = Sugar + Base + Phosphate. DNA pitch = 3.4 nm, 10 bp/turn, A=T (2 H-bonds), G≡C (3 H-bonds)."
  ],
  practiceQuestions: [
    {
      id: "pq-bio-1",
      question: "Which of the following secondary metabolites are classified as toxins in NCERT Table 9.3?",
      options: [
        "Morphine and Codeine",
        "Abrin and Ricin",
        "Vinblastine and Curcumin",
        "Concanavalin A and Gums"
      ],
      correctAnswer: 1,
      explanation: "According to NCERT Table 9.3, Abrin and Ricin are classified as Toxins. Morphine and Codeine are Alkaloids, Vinblastine and Curcumin are Drugs, and Concanavalin A is a Lectin.",
      topicTested: "Secondary Metabolites",
      difficulty: "Easy"
    },
    {
      id: "pq-bio-2",
      question: "A solution of pure cellulose does not give a blue color with Iodine solution because:",
      options: [
        "Cellulose is a heteropolysaccharide that hydrolyzes iodine",
        "Cellulose does not contain complex helices and cannot hold iodine molecules",
        "Cellulose contains alpha-1,4 glycosidic bonds which repel iodine",
        "Cellulose is a monomeric sugar that dissolves iodine"
      ],
      correctAnswer: 1,
      explanation: "NCERT explicitly states that Starch forms secondary helical structures that can hold Iodine molecules (I2) to produce a blue color. Cellulose, being a straight unbranched chain of beta-1,4 glucose, does not contain helices and therefore cannot hold Iodine.",
      topicTested: "Polysaccharides & Iodine Test",
      difficulty: "Medium"
    },
    {
      id: "pq-bio-3",
      question: "Which structural level of a protein is absolutely essential for its enzymatic and biological activity, and is disrupted during denaturation while leaving primary peptide bonds intact?",
      options: [
        "Primary structure",
        "Secondary alpha-helix structure",
        "Tertiary structure",
        "Quaternary subunit structure"
      ],
      correctAnswer: 2,
      explanation: "The Tertiary structure brings distant amino acid residues together to form the 3D globular shape and active catalytic crevices of enzymes. Denaturation disrupts 2°, 3°, and 4° structures, destroying catalytic activity, while primary covalent peptide bonds remain intact.",
      topicTested: "Protein Structural Levels & Denaturation",
      difficulty: "Medium"
    }
  ],
  pyqs: [
    {
      id: "pyq-bio-1",
      year: 2020,
      exam: "NEET",
      examName: "NEET 2020",
      examYear: "2020",
      verifiedExam: "NEET 2020",
      question: "Identify the basic amino acid from the following:",
      options: [
        "Glutamic Acid",
        "Lysine",
        "Valine",
        "Tyrosine"
      ],
      correctAnswer: 1,
      correctOption: 1,
      explanation: "Lysine (as well as Arginine and Histidine) contains an extra basic amino group (-NH2) in its side chain R group, making it a basic amino acid. Glutamic acid is acidic, Valine is neutral, and Tyrosine is aromatic.",
      topicTested: "Amino Acid Classification",
      conceptTested: "Acidic vs Basic vs Neutral Amino Acids",
      ncertReference: "Class 11 NCERT Biology, Chapter 9, Section 9.3",
      verified: true
    },
    {
      id: "pyq-bio-2",
      year: 2019,
      exam: "NEET",
      examName: "NEET 2019",
      examYear: "2019",
      verifiedExam: "NEET 2019",
      question: "Which of the following organic compounds is a secondary metabolite?",
      options: [
        "Glucose",
        "Ricin",
        "Amino acid",
        "Fatty acid"
      ],
      correctAnswer: 1,
      correctOption: 1,
      explanation: "Ricin is a ribosome-inactivating toxin produced by castor seeds and is listed as a Secondary Metabolite in NCERT Table 9.3. Glucose, amino acids, and fatty acids are primary metabolites essential for basic cellular metabolism.",
      topicTested: "Primary vs Secondary Metabolites",
      conceptTested: "NCERT Table 9.3 Examples",
      ncertReference: "Class 11 NCERT Biology, Chapter 9, Table 9.3",
      verified: true
    },
    {
      id: "pyq-bio-3",
      year: 2018,
      exam: "NEET",
      examName: "NEET 2018",
      examYear: "2018",
      verifiedExam: "NEET 2018",
      question: "Which of the following glucose transporters is insulin-dependent for transport of glucose into cells?",
      options: [
        "GLUT-1",
        "GLUT-2",
        "GLUT-3",
        "GLUT-4"
      ],
      correctAnswer: 3,
      correctOption: 3,
      explanation: "NCERT Table 9.5 lists GLUT-4 as the glucose transporter that enables insulin-dependent glucose transport into skeletal muscle and adipose cells.",
      topicTested: "Protein Functions",
      conceptTested: "NCERT Table 9.5 Proteins and Functions",
      ncertReference: "Class 11 NCERT Biology, Chapter 9, Table 9.5",
      verified: true
    },
    {
      id: "pyq-bio-4",
      year: 2015,
      exam: "AIPMT",
      examName: "AIPMT 2015",
      examYear: "2015",
      verifiedExam: "AIPMT 2015",
      question: "Which of the following biomolecules does NOT consist of macromolecules?",
      options: [
        "Proteins",
        "Nucleic acids",
        "Polysaccharides",
        "Lipids"
      ],
      correctAnswer: 3,
      correctOption: 3,
      explanation: "Lipids have molecular weights not exceeding 800 Daltons and are NOT true macromolecules. They reside in the acid-insoluble retentate only because cell membrane lipids form aggregated insoluble vesicles during tissue homogenization.",
      topicTested: "Chemical Composition & Macromolecules",
      conceptTested: "Acid-Insoluble Retentate vs True Macromolecules",
      ncertReference: "Class 11 NCERT Biology, Chapter 9, Section 9.1 & 9.4",
      verified: true
    }
  ]
};
