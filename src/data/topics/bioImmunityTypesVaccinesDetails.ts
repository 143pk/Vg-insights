import { DetailedTopicContent } from '../../types/neet';

export const bioImmunityTypesVaccinesDetails: DetailedTopicContent = {
  topicId: "bio-immunity-types-vaccines",
  topicName: "Immunity, Antibody Structure & Vaccination",
  subject: "Biology",
  class: "Class 12",
  classification: "Biology & Human Welfare",
  chapter: "Human Health and Diseases",

  whatIsThisTopic: "Deep-dive NCERT & NEET UG pedagogy covering the architecture and physiology of the human immune system. Detailed breakdown of Innate Immunity (Physical, Physiological, Cellular, and Cytokine barriers with PMNL-neutrophils, Macrophages, and Interferons), Acquired / Adaptive Immunity (specificity, diversity, memory, self vs non-self discrimination), Primary vs Secondary (Anamnestic) immune responses, Humoral Immunity (B-lymphocytes, plasma cells) vs Cell-Mediated Immunity (CMI / T-lymphocytes and their non-negotiable role in Graft Rejection during organ transplantation), detailed biochemical structure of the $H_2L_2$ Antibody molecule (variable regions, paratope, constant regions, disulfide bridges), immunoglobulin classes (IgA in colostrum, IgG placental transfer, IgE in hypersensitivity/allergies, IgM, IgD), Active vs Passive Immunization (Natural vs Artificial, Anti-tetanus serum, Snake antivenom), Recombinant DNA vaccines (Hepatitis B from Yeast), Allergies and Mast cell mediators (Histamine, Serotonin), Autoimmune pathology (Rheumatoid arthritis), and the complete organization of Primary (Bone marrow, Thymus) vs Secondary lymphoid organs (Spleen, Lymph nodes, Tonsils, Peyer's patches, MALT accounting for 50% of all lymphoid tissue).",

  basicIdea: [
    "Definition of Immunity: The overall ability of the host organism to resist, neutralize, and fight off disease-causing pathogens, conferred by the coordinated actions of the immune system. Immunity is categorized into Innate (inborn, non-specific) and Acquired (adaptive, pathogen-specific).",
    "Innate Immunity (Non-Specific First-Line Defenses): Present from birth, providing immediate resistance through four functional barrier systems: (1) Physical barriers (Stratum corneum of skin, mucus coating of respiratory/GI/urogenital tracts); (2) Physiological barriers (Gastric HCl, lysozyme in saliva and tears); (3) Cellular barriers (PMNL-neutrophils, monocytes, Natural Killer lymphocytes, tissue macrophages); (4) Cytokine barriers (Interferons secreted by virus-infected cells to protect neighboring uninfected cells).",
    "Acquired / Adaptive Immunity (Specific Memory Defenses): Characterized by distinct attributes: high specificity, vast diversity, immunological memory, and discrimination between self and non-self.",
    "Primary vs Secondary Immune Response: Primary response upon initial antigen encounter is slow with low antibody titers. Secondary (Anamnestic) response upon re-exposure is rapid, highly amplified, and long-lasting due to memory B and T cells.",
    "Humoral Immunity (AMI) vs Cell-Mediated Immunity (CMI): AMI is antibody-driven via B-lymphocytes circulating in blood and lymph. CMI is mediated by T-lymphocytes (Helper T-cells, Cytotoxic/Killer T-cells). CMI is SOLELY responsible for GRAFT REJECTION in organ transplants (kidney, heart, cornea, liver).",
    "Antibody Molecule ($H_2L_2$): A Y-shaped glycoprotein composed of four polypeptide chains—2 identical Heavy (H) chains (~50 kDa each) and 2 identical Light (L) chains (~25 kDa each) linked by inter-chain and intra-chain disulfide (—S—S—) bonds. The N-terminal ends form the antigen-binding sites (Paratopes).",
    "Immunoglobulin Isotypes: (1) IgA: Found in colostrum (first yellowish milk) and body secretions, conferring natural passive immunity to newborns; (2) IgG: Most abundant (~75–80%), crosses the human placenta; (3) IgE: Mediates type-I hypersensitivity (allergies) by binding to mast cells and basophils; (4) IgM: Pentameric, first antibody produced during primary response; (5) IgD: B-cell surface receptor.",
    "Active vs Passive Immunity: Active immunity involves the host synthesizing its own antibodies (slow, produces long-term memory; e.g., natural infection or vaccines like BCG/polio). Passive immunity provides pre-formed antibodies directly (immediate protection, no memory; e.g., colostrum IgA, placenta IgG, Anti-tetanus serum ATS, snake antivenom).",
    "Vaccination & Recombinant Vaccines: Vaccines utilize killed/attenuated pathogens or antigenic peptides to generate memory cells. Recombinant DNA technology produces pure subunit vaccines in transgenic hosts (e.g., Hepatitis B surface antigen produced in Saccharomyces cerevisiae yeast).",
    "Allergies & Autoimmunity: Allergy is an exaggerated IgE-mediated immune reaction to harmless environmental allergens, causing mast cells to release histamine and serotonin (treated with antihistamines, adrenaline, steroids). Autoimmunity is the breakdown of self-tolerance where the immune system attacks self-cells (e.g., Rheumatoid arthritis).",
    "Lymphoid Organs: Primary lymphoid organs (Bone marrow and Thymus) are sites where immature lymphocytes originate, proliferate, and mature into antigen-sensitive cells. Secondary lymphoid organs (Spleen, Lymph nodes, Tonsils, Peyer's patches of small intestine, Appendix) provide sites for lymphocyte interaction with antigens. MALT (Mucosa-Associated Lymphoid Tissue) constitutes about 50% of the lymphoid tissue in the human body."
  ],

  importantTerms: [
    {
      term: "Innate Immunity",
      definition: "Non-specific defense mechanisms present from birth that provide an immediate barrier against the entry and proliferation of diverse foreign pathogens.",
      neetNote: "Comprises four barrier classes: Physical, Physiological, Cellular, and Cytokine barriers."
    },
    {
      term: "Interferons (IFNs)",
      definition: "A family of low-molecular-weight cytokine proteins (e.g., IFN-α, IFN-β) secreted by virus-infected cells that bind to adjacent uninfected cells, inducing an antiviral state to halt viral replication.",
      neetNote: "Cytokine barrier of innate immunity. Also used in cancer immunotherapy (alpha-interferon as biological response modifier)."
    },
    {
      term: "PMNL-Neutrophils",
      definition: "Polymorphonuclear Leukocytes; the most abundant circulating white blood cells (60–65%) possessing multi-lobed nuclei and potent phagocytic activity.",
      neetNote: "Classified under cellular barriers of innate immunity in NCERT."
    },
    {
      term: "Cell-Mediated Immunity (CMI)",
      definition: "The branch of adaptive immunity governed by T-lymphocytes (specifically Cytotoxic CD8+ T-cells and Helper CD4+ T-cells) capable of recognizing intracellular pathogens and foreign histocompatibility antigens.",
      neetNote: "Responsible for ALLOGRAFT REJECTION in organ transplantation; necessitates tissue matching and lifelong immunosuppressants (e.g., Cyclosporin A)."
    },
    {
      term: "Paratope",
      definition: "The specific antigen-binding site situated at the amino-terminal (N-terminal) variable domains ($V_H$ and $V_L$) of an antibody molecule that specifically binds the complementary epitope of an antigen.",
      neetNote: "Each $H_2L_2$ monomer antibody possesses exactly 2 antigen-binding sites."
    },
    {
      term: "Colostrum",
      definition: "The yellowish fluid secreted by the mammary glands of the mother during the initial few days of lactation, exceptionally rich in secretory IgA antibodies.",
      neetNote: "Provides critical Natural Passive Immunity to the newborn infant."
    },
    {
      term: "Anamnestic Response",
      definition: "The rapid, highly intensified secondary immune response elicited upon re-encounter with a previously experienced pathogen, mediated by memory B and T lymphocytes.",
      neetNote: "Forms the fundamental cellular basis for the protective efficacy of vaccines."
    },
    {
      term: "MALT (Mucosa-Associated Lymphoid Tissue)",
      definition: "Aggregates of lymphoid tissue situated beneath the mucosal epithelial linings of the major physiological tracts: respiratory, gastrointestinal, and urogenital systems.",
      neetNote: "Accounts for approximately 50% of the total lymphoid tissue in the human body (exact NCERT statistic)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Innate Immunity: The Four Non-Specific Defensive Barriers",
      paragraphs: [
        "Innate immunity represents the body's congenital, non-specific first line of defense. Unlike adaptive immunity, it does not require prior sensitization and operates instantly upon pathogen exposure across four distinct barrier levels:",
        "1. Physical Barriers: (a) Skin: The dry, keratinized stratum corneum of the epidermis forms an impenetrable physical shield preventing microbial entry; (b) Mucus Membranes: The sticky mucus coating of the epithelium lining the respiratory tract, gastrointestinal tract, and urogenital tract traps inhaled or ingested bacteria and particles, which are swept away by ciliated epithelial cells.",
        "2. Physiological Barriers: Chemical and biochemical secretions that inhibit microbial growth: (a) Hydrochloric acid (HCl, pH 1.5–2.0) in the stomach destroys ingested microbes; (b) Lysozyme present in saliva and tears breaks down bacterial peptidoglycan cell walls, causing bacteriolysis; (c) Acidic vaginal secretions and sebum (containing fatty acids) on skin surfaces.",
        "3. Cellular Barriers: Specialized phagocytic leukocytes capable of engulfing, digesting, and eliminating foreign invaders: (a) Polymorphonuclear Leukocytes (PMNL-neutrophils) and Monocytes in the bloodstream; (b) Natural Killer (NK) lymphocytes (large granular lymphocytes that induce apoptosis in tumor and virus-infected cells without prior antigen sensitization); (c) Macrophages residing in tissues (e.g., Kupffer cells in liver, alveolar macrophages in lungs, microglia in brain).",
        "4. Cytokine Barriers: Virus-infected host cells synthesize and secrete specialized signaling glycoproteins called Interferons (IFN-α, IFN-β). These interferons diffuse to neighboring uninfected cells, binding to membrane receptors and stimulating the transcription of antiviral proteins (e.g., 2',5'-oligoadenylate synthetase, protein kinase R) that block viral mRNA translation and replication, shielding intact cells from spreading infection."
      ],
      tables: [
        {
          title: "Classification of Innate Immunity Barriers with Examples (NCERT Table)",
          headers: ["Barrier Category", "Key Anatomical / Physiological Components", "Mechanism of Action"],
          rows: [
            ["Physical Barrier", "Skin (keratinized epidermis), Mucus coating of GI, respiratory & urogenital tracts", "Blocks physical entry; traps foreign microbes in mucus layer"],
            ["Physiological Barrier", "Gastric HCl (stomach), Lysozyme in tears & saliva, Sebum", "Destroys microbial cell walls; acidic pH denatures pathogen proteins"],
            ["Cellular Barrier", "PMNL-neutrophils, Monocytes, Natural Killer (NK) cells, Macrophages", "Phagocytosis and intracellular enzymatic digestion of microbes"],
            ["Cytokine Barrier", "Interferons (IFN-α, IFN-β) secreted by virus-infected cells", "Induces antiviral resistance in neighboring uninfected cells"]
          ]
        }
      ],
      importantPoints: [
        "Innate immunity is non-specific, present from birth, and lacks immunological memory.",
        "Interferons protect NON-INFECTED cells from viral infection (they do not save the already infected cell).",
        "PMNL-neutrophils and monocytes are cellular barriers of innate immunity."
      ]
    },
    {
      heading: "2. Acquired Immunity: Specificity, Memory & Primary vs Secondary Responses",
      paragraphs: [
        "Acquired (Adaptive) Immunity is pathogen-specific and is acquired over an individual's lifetime. It is defined by four hallmark features: (1) Specificity: Ability to discriminate between distinct antigens and epitopes; (2) Diversity: Capacity to recognize millions of unique antigenic determinants; (3) Discrimination between Self and Non-Self: Ability to tolerate autologous tissues while attacking foreign entities; (4) Memory: Generation of long-lived memory cells.",
        "Primary Immune Response: When a naive host encounters a novel pathogen for the very first time, the immune system undergoes a lag phase (antigen processing, clonal selection, B and T cell proliferation). The resulting primary response is of LOW INTENSITY and requires days to produce detectable serum antibody titers.",
        "Secondary (Anamnestic) Immune Response: Subsequent encounter with the SAME pathogen elicits a highly accelerated, intensely magnified secondary response. This occurs because the initial exposure generated a clone of long-lived Memory B and Memory T lymphocytes. These memory cells immediately recognize the antigen, proliferating into effector plasma cells that produce massive surges of high-affinity antibodies within hours, neutralizing the pathogen before clinical disease can develop."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="380" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="2"/>
          <text x="375" y="30" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Antibody Titer: Primary vs Secondary (Anamnestic) Immune Response</text>
          
          <!-- Axes -->
          <line x1="80" y1="320" x2="700" y2="320" stroke="#475569" stroke-width="2"/>
          <line x1="80" y1="320" x2="80" y2="60" stroke="#475569" stroke-width="2"/>
          
          <text x="700" y="340" fill="#475569" font-size="12" font-weight="600" text-anchor="end">Time (Days / Weeks) →</text>
          <text x="35" y="180" fill="#475569" font-size="12" font-weight="600" transform="rotate(-90 35,180)" text-anchor="middle">Serum Antibody Concentration (Titer) →</text>
          
          <!-- First Exposure Point -->
          <line x1="120" y1="320" x2="120" y2="280" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
          <circle cx="120" cy="320" r="5" fill="#ef4444"/>
          <text x="120" y="345" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">1st Exposure</text>
          <text x="120" y="360" fill="#64748b" font-size="10" text-anchor="middle">(Day 0)</text>
          
          <!-- Primary Curve -->
          <path d="M 120 320 C 160 320, 180 310, 210 240 C 230 190, 250 200, 270 240 C 300 300, 340 315, 380 320" fill="none" stroke="#2563eb" stroke-width="3.5"/>
          
          <!-- Primary Peak Label -->
          <rect x="175" y="160" width="130" height="50" fill="#eff6ff" rx="6" stroke="#bfdbfe" stroke-width="1.5"/>
          <text x="240" y="180" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Primary Response</text>
          <text x="240" y="196" fill="#3b82f6" font-size="10" text-anchor="middle">• Slow lag phase</text>
          <text x="240" y="208" fill="#3b82f6" font-size="10" text-anchor="middle">• Low antibody titer (IgM)</text>
          
          <!-- Second Exposure Point -->
          <line x1="420" y1="320" x2="420" y2="100" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
          <circle cx="420" cy="320" r="5" fill="#ef4444"/>
          <text x="420" y="345" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">2nd Exposure</text>
          <text x="420" y="360" fill="#64748b" font-size="10" text-anchor="middle">(Same Antigen)</text>
          
          <!-- Secondary Curve -->
          <path d="M 420 320 C 435 320, 450 180, 480 90 C 510 80, 560 95, 620 160 C 660 210, 680 260, 700 280" fill="none" stroke="#16a34a" stroke-width="3.5"/>
          
          <!-- Secondary Peak Label -->
          <rect x="490" y="70" width="170" height="65" fill="#f0fdf4" rx="6" stroke="#bbf7d0" stroke-width="1.5"/>
          <text x="575" y="90" fill="#15803d" font-size="12" font-weight="bold" text-anchor="middle">Secondary / Anamnestic</text>
          <text x="575" y="106" fill="#166534" font-size="10.5" text-anchor="middle">• Instant recognition by Memory Cells</text>
          <text x="575" y="120" fill="#166534" font-size="10.5" text-anchor="middle">• Massive, prolonged IgG titer</text>
        </svg>`,
        caption: "Kinetics of Primary vs Secondary (Anamnestic) Immune Response demonstrating immunological memory.",
        guide: "OBSERVE: The secondary response has virtually no lag phase, achieves dramatically higher antibody concentration, and persists longer due to pre-existing antigen-specific memory B and T cells."
      },
      importantPoints: [
        "Primary response is characterized by low titer and predominance of IgM.",
        "Secondary response is rapid, highly intense, dominated by IgG, and mediated by memory lymphocytes."
      ]
    },
    {
      heading: "3. Humoral vs Cell-Mediated Immunity & The Critical Mechanism of Graft Rejection",
      paragraphs: [
        "The acquired immune system operates via two complementary functional arms:",
        "1. Humoral Immunity (Antibody-Mediated Immunity / AMI): Mediated by B-lymphocytes. When B-cells encounter specific antigens, they proliferate into clones of Effector Plasma Cells and Memory B Cells. Plasma cells secrete an army of soluble glycoprotein antibodies into body fluids ('humors' like blood, lymph, and tissue interstitial fluid) to neutralize toxins and opsonize extracellular pathogens.",
        "2. Cell-Mediated Immunity (CMI): Mediated by T-lymphocytes (Helper $T_H$ / CD4+ cells, Cytotoxic $T_C$ / CD8+ cells, Regulatory T cells). T-lymphocytes do not secrete antibodies directly; instead, they recognize intracellular pathogens, viral antigens displayed on Major Histocompatibility Complex (MHC/HLA) class I/II proteins, and direct cytotoxic destruction of infected/cancerous cells.",
        "Organ Transplantation & Graft Rejection (High-Yield NEET Mechanism):",
        "When an organ (cornea, kidney, heart, liver) fails, grafting or organ transplantation is performed. The recipient's immune system recognizes foreign histocompatibility antigens (Human Leukocyte Antigens - HLA / MHC) present on donor cells as non-self.",
        "Cell-Mediated Immunity (T-lymphocytes) is SOLELY responsible for Graft Rejection. Cytotoxic T-lymphocytes ($T_C$) infiltrate the graft tissue, bind foreign MHC-I molecules, and release perforins and granzymes, destroying the graft vasculature and parenchymal cells.",
        "Clinical Requirement: Successful transplantation mandates: (1) Strict ABO blood group matching; (2) Detailed HLA / tissue matching between donor and recipient; and (3) Lifelong administration of immunosuppressive drugs such as Cyclosporin A (obtained from the fungus Trichoderma polysporum)."
      ],
      importantPoints: [
        "NEET Golden Rule: GRAFT REJECTION is mediated by Cell-Mediated Immunity (CMI / T-lymphocytes), NEVER by humoral antibodies alone.",
        "Corneal transplants have the highest success rate because the cornea is avascular ('immune privileged site').",
        "Immunosuppressants like Cyclosporin A inhibit T-cell activation, preventing allograft rejection."
      ]
    },
    {
      heading: "4. Structure of the Antibody Molecule ($H_2L_2$) & Immunoglobulin Classes",
      paragraphs: [
        "Antibodies (Immunoglobulins / Ig) are Y-shaped gamma-globulin glycoproteins synthesized by differentiated plasma B-cells. Each basic antibody monomer is designated as an $H_2L_2$ molecule because it consists of four polypeptide chains:",
        "1. Two Identical Heavy (H) Chains: Longer, higher molecular weight polypeptides (~450 amino acids, ~50 kDa each).",
        "2. Two Identical Light (L) Chains: Shorter, lower molecular weight polypeptides (~220 amino acids, ~25 kDa each).",
        "Chemical Linkages: The four chains are covalently held together by inter-chain and intra-chain Disulfide (—S—S—) bridges. Inter-chain disulfide bonds connect each Light chain to a Heavy chain ($L-H$), and connect the two Heavy chains to each other ($H-H$) at a flexible Hinge region.",
        "Structural Domains:",
        "(a) Variable Region ($V$ region): Located at the amino-terminal (N-terminal) ends of both Heavy ($V_H$) and Light ($V_L$) chains. The hypervariable loops in this region constitute the Paratope (Antigen-Binding Site). Because an antibody monomer has two identical arms, it possesses 2 Antigen-Binding Sites, giving it a valency of 2.",
        "(b) Constant Region ($C$ region): Located at the carboxy-terminal (C-terminal) ends ($C_H$ and $C_L$). The constant domain of heavy chains ($C_H1, C_H2, C_H3$) forms the Fc (crystallizable) fragment, determining the immunoglobulin class and binding to host cell surface receptors (macrophages, mast cells) and complement proteins.",
        "Classes of Immunoglobulins:",
        "1. IgA: Dimeric in secretions, possesses a secretory component and J-chain. Present abundantly in Colostrum (the initial yellowish breastmilk secreted during the first days of lactation), saliva, and tears, protecting mucosal surfaces of the infant.",
        "2. IgG: Most abundant antibody in human serum (~75–80%). Monomer. The ONLY immunoglobulin capable of crossing the human placental barrier, conferring natural passive immunity to the developing fetus.",
        "3. IgE: Monomer; present in trace amounts in serum. Binds with high affinity to Fcε receptors on Mast Cells and Basophils. Triggers mast cell degranulation and explosive release of Histamine and Serotonin during Allergic reactions (Type-I hypersensitivity).",
        "4. IgM: Pentameric structure (consisting of 5 $H_2L_2$ units joined by a J-chain, having 10 antigen-binding sites). First antibody class synthesized during primary immune response; potent complement activator and agglutinator.",
        "5. IgD: Monomer present on mature naive B-lymphocyte membranes, functioning as an antigen receptor."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 750 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
          <rect width="750" height="480" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="2"/>
          <text x="375" y="30" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Biochemical Structure of Antibody Molecule (H₂L₂ Monomer)</text>
          
          <!-- Left Arm Light Chain -->
          <rect x="140" y="80" width="30" height="90" fill="#93c5fd" rx="6" stroke="#2563eb" stroke-width="2"/>
          <rect x="140" y="170" width="30" height="90" fill="#dbeafe" rx="6" stroke="#2563eb" stroke-width="2"/>
          <text x="155" y="125" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">V_L</text>
          <text x="155" y="215" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">C_L</text>
          <text x="155" y="70" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">N-term</text>
          
          <!-- Left Arm Heavy Chain Top -->
          <rect x="200" y="80" width="38" height="90" fill="#fdba74" rx="6" stroke="#ea580c" stroke-width="2"/>
          <rect x="200" y="170" width="38" height="90" fill="#fed7aa" rx="6" stroke="#ea580c" stroke-width="2"/>
          <text x="219" y="125" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">V_H</text>
          <text x="219" y="215" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">C_H1</text>
          <text x="219" y="70" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">N-term</text>
          
          <!-- Right Arm Heavy Chain Top -->
          <rect x="512" y="80" width="38" height="90" fill="#fdba74" rx="6" stroke="#ea580c" stroke-width="2"/>
          <rect x="512" y="170" width="38" height="90" fill="#fed7aa" rx="6" stroke="#ea580c" stroke-width="2"/>
          <text x="531" y="125" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">V_H</text>
          <text x="531" y="215" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">C_H1</text>
          <text x="531" y="70" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">N-term</text>
          
          <!-- Right Arm Light Chain -->
          <rect x="580" y="80" width="30" height="90" fill="#93c5fd" rx="6" stroke="#2563eb" stroke-width="2"/>
          <rect x="580" y="170" width="30" height="90" fill="#dbeafe" rx="6" stroke="#2563eb" stroke-width="2"/>
          <text x="595" y="125" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">V_L</text>
          <text x="595" y="215" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">C_L</text>
          <text x="595" y="70" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">N-term</text>
          
          <!-- Antigen Binding Sites (Paratopes) -->
          <ellipse cx="187" cy="65" rx="35" ry="12" fill="#fef08a" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="187" y="48" fill="#854d0e" font-size="11" font-weight="bold" text-anchor="middle">Antigen-Binding Site</text>
          
          <ellipse cx="563" cy="65" rx="35" ry="12" fill="#fef08a" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4,2"/>
          <text x="563" y="48" fill="#854d0e" font-size="11" font-weight="bold" text-anchor="middle">Antigen-Binding Site</text>
          
          <!-- Stem Heavy Chains (C_H2, C_H3) -->
          <rect x="335" y="270" width="38" height="85" fill="#fed7aa" rx="6" stroke="#ea580c" stroke-width="2"/>
          <rect x="377" y="270" width="38" height="85" fill="#fed7aa" rx="6" stroke="#ea580c" stroke-width="2"/>
          <text x="354" y="315" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">C_H2</text>
          <text x="396" y="315" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">C_H2</text>
          
          <rect x="335" y="355" width="38" height="85" fill="#fed7aa" rx="6" stroke="#ea580c" stroke-width="2"/>
          <rect x="377" y="355" width="38" height="85" fill="#fed7aa" rx="6" stroke="#ea580c" stroke-width="2"/>
          <text x="354" y="400" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">C_H3</text>
          <text x="396" y="400" fill="#9a3412" font-size="11" font-weight="bold" text-anchor="middle">C_H3</text>
          <text x="354" y="460" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">C-term</text>
          <text x="396" y="460" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">C-term</text>
          
          <!-- Hinge Lines & Disulfide Bridges -->
          <!-- Left arm to stem -->
          <path d="M 219 260 C 240 270, 310 270, 335 285" fill="none" stroke="#ea580c" stroke-width="12" stroke-linecap="round"/>
          <!-- Right arm to stem -->
          <path d="M 531 260 C 510 270, 440 270, 415 285" fill="none" stroke="#ea580c" stroke-width="12" stroke-linecap="round"/>
          
          <!-- Interchain S-S bonds -->
          <!-- Left L-H -->
          <line x1="170" y1="215" x2="200" y2="215" stroke="#eab308" stroke-width="3"/>
          <text x="185" y="210" fill="#a16207" font-size="9" font-weight="bold" text-anchor="middle">-S-S-</text>
          <!-- Right L-H -->
          <line x1="550" y1="215" x2="580" y2="215" stroke="#eab308" stroke-width="3"/>
          <text x="565" y="210" fill="#a16207" font-size="9" font-weight="bold" text-anchor="middle">-S-S-</text>
          <!-- H-H Hinge S-S -->
          <line x1="365" y1="280" x2="385" y2="280" stroke="#eab308" stroke-width="3"/>
          <line x1="365" y1="290" x2="385" y2="290" stroke="#eab308" stroke-width="3"/>
          <text x="375" y="275" fill="#a16207" font-size="9" font-weight="bold" text-anchor="middle">-S-S-</text>
          
          <!-- Labels Fab and Fc -->
          <path d="M 120 75 L 105 75 L 105 265 L 120 265" fill="none" stroke="#64748b" stroke-width="1.5"/>
          <text x="95" y="175" fill="#475569" font-size="12" font-weight="bold" transform="rotate(-90 95,175)" text-anchor="middle">Fab (Antigen-binding fragment)</text>
          
          <path d="M 430 270 L 445 270 L 445 440 L 430 440" fill="none" stroke="#64748b" stroke-width="1.5"/>
          <text x="460" y="355" fill="#475569" font-size="12" font-weight="bold" transform="rotate(90 460,355)" text-anchor="middle">Fc (Crystallizable fragment)</text>
        </svg>`,
        caption: "High-Yield NEET Diagram: Biochemical Architecture of an H₂L₂ Immunoglobulin Monomer with Disulfide Bridges and Domains.",
        guide: "WHAT TO OBSERVE: (1) 2 Heavy chains (orange) and 2 Light chains (blue); (2) Variable domains (V_H, V_L) at the N-termini forming 2 Paratopes; (3) Constant domains (C_H, C_L) with C-termini; (4) Inter-chain disulfide (-S-S-) bonds linking L to H and H to H at the hinge region."
      },
      importantPoints: [
        "Each antibody monomer has formula H2L2 and possesses 2 antigen-binding sites (paratopes) formed by V_H and V_L.",
        "IgA is dimeric and present in colostrum, saliva, and tears.",
        "IgG is the only antibody class capable of crossing the placenta.",
        "IgE triggers mast cell degranulation (histamine/serotonin release) during allergic responses."
      ]
    },
    {
      heading: "5. Active vs Passive Immunity & Vaccination Principles",
      paragraphs: [
        "Immunity is classified based on whether the host's own cellular machinery synthesized the antibodies or whether pre-formed antibodies were passively received:",
        "1. Active Immunity: Occurs when a host is exposed to living or dead antigens, microbes, or microbial proteins, triggering the host's immune cells to synthesize its own antibodies.",
        "Features of Active Immunity: (a) Slow in onset, taking days/weeks to build protective titers; (b) Safe and non-reactive; (c) Generates long-lived immunological Memory B and T cells; (d) Lasts for months, years, or lifetime.",
        "Types of Active Immunity: (i) Natural Active: Acquired naturally following a clinical infection (e.g., getting chickenpox confers lifelong immunity); (ii) Artificial Active: Induced deliberately by vaccines containing dead, attenuated, or toxoid antigens (e.g., BCG for tuberculosis, Polio oral vaccine, MMR).",
        "2. Passive Immunity: Conferred when ready-made, pre-formed antibodies are directly administered or transferred to an individual without requiring the recipient's immune cells to produce them.",
        "Features of Passive Immunity: (a) Immediate therapeutic protection (ideal for emergency toxin neutralization); (b) Does NOT generate immunological memory; (c) Temporary protection (degrades as donor antibodies undergo catabolism over weeks).",
        "Types of Passive Immunity: (i) Natural Passive: Transfer of maternal IgG antibodies across the placenta to the developing fetus, and transfer of maternal secretory IgA in Colostrum to the breastfeeding newborn; (ii) Artificial Passive: Therapeutic injection of purified pre-formed antibodies: Anti-Tetanus Serum (ATS) for immediate neutralization of Clostridium tetani neurotoxin, Anti-Snake Venom for rapid neutralization of snakebite venom, and Anti-Rabies Immunoglobulin.",
        "Vaccination & Recombinant DNA Vaccines:",
        "Vaccination is grounded on the fundamental property of 'Memory' of the immune system. Vaccines contain inactivated/attenuated pathogens or antigenic surface proteins. When introduced, they generate primary antibody responses and memory B and T cells without causing full-blown disease.",
        "Second-Generation / Recombinant DNA Vaccines: Produced by cloning antigenic genes into expression vectors within transgenic host organisms. Classic NCERT Example: Hepatitis B vaccine produced in Yeast cells (Saccharomyces cerevisiae) using recombinant surface antigen (HBsAg)."
      ],
      tables: [
        {
          title: "Comprehensive Comparison: Active vs Passive Immunity (NEET Exam Matrix)",
          headers: ["Parameter", "Active Immunity", "Passive Immunity"],
          rows: [
            ["Source of Antibodies", "Produced actively by the recipient's own plasma B-cells", "Received ready-made from an external source (mother/serum)"],
            ["Onset of Protection", "Slow; requires a lag phase to develop antibody titers", "Immediate / Fast; provides instant neutralization"],
            ["Immunological Memory", "Generated (Memory B and T cells formed)", "NOT generated (No memory cells produced)"],
            ["Duration of Efficacy", "Long-lasting (years to lifetime)", "Short-lived (weeks to a few months)"],
            ["Natural Example", "Recovering from natural infection (measles, smallpox)", "Colostrum (IgA) to infant; Placental IgG to fetus"],
            ["Artificial Example", "Vaccination (BCG, Polio, Hepatitis B recombinant vaccine)", "Anti-tetanus serum (ATS), Snake antivenom, Anti-rabies serum"]
          ]
        }
      ],
      importantPoints: [
        "Colostrum is rich in IgA; Placenta transfers IgG -> Both are natural passive immunity.",
        "Anti-tetanus serum (ATS) and snake antivenom provide artificial passive immunity.",
        "Hepatitis B vaccine is produced in yeast (Saccharomyces cerevisiae) via recombinant DNA technology."
      ]
    },
    {
      heading: "6. Allergies, Autoimmune Diseases & Lymphoid Organ Architecture",
      paragraphs: [
        "Allergies (Type-I Hypersensitivity): An exaggerated, hypersensitive immune response to otherwise harmless foreign environmental antigens (Allergens: pollen grains, dust mites, animal dander, mold spores).",
        "Mechanism: The first exposure sensitizes B-cells to produce excessive IgE antibodies. IgE molecules bind via their Fc region to high-affinity receptors on Mast Cells and Basophils. Upon re-exposure, the allergen cross-links adjacent IgE molecules on mast cells, triggering rapid degranulation and explosive release of inflammatory mediators: Histamine and Serotonin.",
        "Clinical Manifestations & Treatment: Symptoms include sneezing, watery eyes, rhinorrhea, redness, urticaria (hives), and bronchoconstriction (asthma/wheezing). Emergency treatments include Antihistamines, Adrenaline (epinephrine), and Corticosteroids which rapidly suppress inflammation and reverse bronchospasm.",
        "Autoimmunity: Higher vertebrates possess the ability to distinguish foreign molecules/pathogens from self-cells. However, due to genetic factors and unknown environmental triggers, the immune system loses self-tolerance and attacks autologous tissues (self-antigens), causing Autoimmune Diseases. Hallmark NCERT Example: Rheumatoid Arthritis (chronic autoimmune attack against synovial membrane and joints), Myasthenia Gravis, and Hashimoto's Thyroiditis.",
        "The Human Immune System: Lymphoid Organs:",
        "1. Primary Lymphoid Organs: Sites where immature lymphocytes originate, proliferate, and differentiate into antigen-sensitive, immunocompetent cells:",
        "(a) Bone Marrow: The main primary lymphoid organ where all blood cells, including both B-lymphocytes and T-lymphocytes, originate. It is also the site of maturation for B-lymphocytes.",
        "(b) Thymus: A lobed organ situated near the heart, beneath the breastbone (sternum). It is quite large at birth but steadily atrophies and reduces in size with age, becoming very small by puberty. The thymus provides the specialized microenvironment for the maturation and selection of T-lymphocytes.",
        "2. Secondary Lymphoid Organs: Organs to which mature lymphocytes migrate, encounter foreign antigens, undergo clonal expansion, and differentiate into effector cells:",
        "(a) Spleen: A large bean-shaped organ situated in the upper left abdomen. Contains lymphocytes and phagocytes. Acts as a supreme blood filter by trapping blood-borne microorganisms and debris. It serves as a major reservoir of erythrocytes (RBCs).",
        "(b) Lymph Nodes: Small solid encapsulated structures located at intervals along the lymphatic vessels. They filter lymph fluid, trapping antigens; trapped antigens stimulate resident lymphocytes, initiating immune responses.",
        "(c) Mucosa-Associated Lymphoid Tissue (MALT): Extensive lymphoid aggregations situated within the mucosal lining of the respiratory, digestive, and urogenital tracts. MALT constitutes approximately 50% of all lymphoid tissue in the human body (a crucial NCERT fact!).",
        "(d) Tonsils and Peyer's Patches of the small intestine."
      ],
      importantPoints: [
        "Allergies are mediated by IgE antibodies and Histamine/Serotonin released from Mast Cells.",
        "Rheumatoid arthritis is an autoimmune disorder where the body attacks its own synovial joints.",
        "Bone marrow and Thymus are Primary Lymphoid Organs; Spleen, Lymph nodes, and Peyer's patches are Secondary.",
        "MALT constitutes approximately 50% of the lymphoid tissue in the human body.",
        "Thymus is large at birth and keeps reducing in size with aging."
      ]
    }
  ],

  formulae: [
    {
      title: "Antibody Structure Formula",
      formula: "H_2L_2 = 2 Heavy Chains + 2 Light Chains Linked by Disulfide Bridges (-S-S-)",
      meaning: "Stoichiometry and polypeptide assembly of an immunoglobulin monomer",
      symbols: "V_H + V_L = Paratope (Antigen-Binding Site); C_H = Constant heavy chain (Fc domain)",
      conditions: "Valency = 2 per monomer (binds 2 epitopes)",
      whenToUse: "Structural questions on immunoglobulins in NEET Biology."
    },
    {
      title: "Lymphoid Tissue Distribution",
      formula: "MALT \\approx 50\\% \\text{ of Total Human Lymphoid Tissue}",
      meaning: "Quantification of Mucosa-Associated Lymphoid Tissue in human body",
      symbols: "Respiratory + Gastrointestinal + Urogenital mucosal linings",
      whenToUse: "Direct NCERT numerical and factual questions in NEET."
    }
  ],

  visualLearning: {
    type: 'flowchart',
    flowchartSteps: [
      { step: "Pluripotent Stem Cells (Bone Marrow)", detail: "Origin of all lymphoid progenitors", arrowText: "Differentiate" },
      { step: "Primary Lymphoid Organs", detail: "Bone Marrow (B-cells) & Thymus (T-cells) -> Maturation into antigen-sensitive cells", arrowText: "Migrate to" },
      { step: "Secondary Lymphoid Organs", detail: "Spleen, Lymph Nodes, Tonsils, Peyer's patches, MALT (50%)", arrowText: "Antigen encounter" },
      { step: "Immune Response & Memory", detail: "Plasma cells (Antibodies) + Effector T-cells (CMI) + Long-lived Memory cells", arrowText: "" }
    ],
    caption: "Hierarchical Architecture of the Human Immune System: From Primary to Secondary Lymphoid Organs."
  },

  neetImportantPoints: [
    "Innate immunity has 4 barriers: Physical (Skin, Mucus), Physiological (HCl, Lysozyme), Cellular (PMNL, Monocytes, Macrophages), Cytokine (Interferons).",
    "Interferons are glycoproteins secreted by virus-infected cells that protect neighboring non-infected cells from viral infection.",
    "Cell-Mediated Immunity (CMI / T-lymphocytes) is responsible for graft rejection in organ transplants; necessitates tissue/HLA matching and cyclosporin A.",
    "Each antibody monomer has formula H2L2 with 2 antigen-binding sites (paratopes) at the N-terminal variable domains.",
    "IgA is found in Colostrum, conferring natural passive immunity to newborns.",
    "IgG is the only antibody class capable of crossing the placenta from mother to fetus.",
    "IgE mediates allergic reactions by binding to Mast cells and triggering release of Histamine and Serotonin.",
    "Active immunity is slow and produces memory; Passive immunity is fast and provides pre-formed antibodies without memory.",
    "Anti-tetanus serum (ATS) and snake antivenom are examples of artificial passive immunity.",
    "Hepatitis B vaccine is a recombinant DNA vaccine produced in Yeast (Saccharomyces cerevisiae).",
    "Rheumatoid arthritis is an autoimmune disorder where the immune system attacks self-tissues.",
    "Primary lymphoid organs = Bone marrow and Thymus; Secondary lymphoid organs = Spleen, Lymph nodes, Tonsils, Peyer's patches.",
    "MALT (Mucosa-Associated Lymphoid Tissue) accounts for about 50% of the lymphoid tissue in the human body.",
    "Thymus is large at birth and steadily decreases in size with age."
  ],

  commonConfusions: [
    {
      commonConfusion: "Graft rejection is mediated by circulating humoral antibodies.",
      correctFact: "Graft rejection is primarily mediated by Cell-Mediated Immunity (CMI) through cytotoxic T-lymphocytes recognizing foreign MHC/HLA antigens.",
      whyItMattersForNEET: "A recurring high-yield concept tested in NEET Assertion-Reason questions."
    },
    {
      commonConfusion: "Interferons cure or save the virus-infected cell that produces them.",
      correctFact: "Interferons are secreted by the infected cell to alert and protect adjacent UNINFECTED cells by inducing antiviral proteins; they do not rescue the original infected cell.",
      whyItMattersForNEET: "Crucial functional distinction in cytokine barrier mechanisms."
    },
    {
      commonConfusion: "Administration of Anti-Tetanus Serum (ATS) confers active long-term immunity.",
      correctFact: "ATS provides pre-formed anti-tetanus antibodies (Artificial Passive Immunity) for immediate toxin neutralization; it does NOT stimulate memory cells and protection is short-lived.",
      whyItMattersForNEET: "Standard confusion tested between active vaccines vs passive antisera."
    },
    {
      commonConfusion: "Spleen and Lymph nodes are primary lymphoid organs.",
      correctFact: "Only Bone Marrow and Thymus are Primary lymphoid organs (sites of maturation). Spleen, Lymph nodes, and MALT are Secondary lymphoid organs (sites of antigen encounter).",
      whyItMattersForNEET: "Categorization questions on lymphoid anatomy appear frequently in NEET."
    }
  ],

  quickRevision: [
    "Innate Barriers: Physical (Skin, Mucus) | Physiological (HCl, Lysozyme) | Cellular (PMNL, Monocytes) | Cytokine (Interferons).",
    "Acquired Immunity: Humoral (B-cells, Antibodies) | Cell-Mediated (T-cells, Graft Rejection).",
    "Antibody (H2L2): 2 Heavy + 2 Light chains | Disulfide bonds | 2 Paratopes at N-termini.",
    "Immunoglobulins: IgA (Colostrum) | IgG (Placenta cross) | IgE (Allergy & Mast cell Histamine) | IgM (Pentamer, primary response).",
    "Active Immunity: Slow, host makes antibodies, Memory formed (Vaccines, Infection).",
    "Passive Immunity: Fast, pre-formed antibodies, No memory (Colostrum, ATS, Snake Antivenom).",
    "Vaccines: Hepatitis B from Yeast (Recombinant DNA).",
    "Autoimmunity: Self-tolerance failure | Rheumatoid arthritis.",
    "Lymphoid Organs: Primary (Bone marrow, Thymus) | Secondary (Spleen, Lymph nodes, Tonsils, MALT).",
    "MALT = ~50% of human lymphoid tissue | Spleen = Blood filter & Erythrocyte reservoir."
  ],

  practiceQuestions: [
    {
      question: "Which of the following statements is INCORRECT regarding the human immune system?",
      options: [
        "Innate immunity is non-specific and present at the time of birth.",
        "MALT constitutes approximately 50 percent of the lymphoid tissue in human body.",
        "Cell-mediated immune response is responsible for the graft rejection during organ transplantation.",
        "The antibodies present in colostrum protecting the infant belong to the IgG class."
      ],
      correctAnswer: 3,
      explanation: "Statement 3 is incorrect because the antibodies abundantly present in colostrum that provide passive immunity to the newborn infant belong to the IgA class (secretory IgA), not IgG. IgG crosses the placenta during gestation.",
      difficulty: "Easy",
      conceptTested: "Immunoglobulin Classes & Colostrum"
    },
    {
      question: "A patient stepping on a rusty nail is administered an injection of Anti-Tetanus Serum (ATS). This medical intervention is an example of:",
      options: [
        "Natural active immunity",
        "Artificial active immunity",
        "Natural passive immunity",
        "Artificial passive immunity"
      ],
      correctAnswer: 3,
      explanation: "Anti-Tetanus Serum (ATS) contains pre-formed antibodies against the tetanus neurotoxin harvested from immunized animals. Because ready-made antibodies are artificially injected into the patient for immediate neutralization without stimulating memory cells, it is classified as Artificial Passive Immunity.",
      difficulty: "Medium",
      conceptTested: "Active vs Passive Immunization"
    },
    {
      question: "Which barrier of innate immunity is correctly paired with its biological component?",
      options: [
        "Physical barrier — Polymorphonuclear leukocytes (PMNL)",
        "Physiological barrier — Lysozyme in tears and saliva",
        "Cellular barrier — Mucus coating of the respiratory tract",
        "Cytokine barrier — Hydrochloric acid in the stomach"
      ],
      correctAnswer: 1,
      explanation: "Physiological barriers include chemical secretions like lysozyme in tears/saliva and HCl in gastric juice. PMNL is a cellular barrier; mucus coating is a physical barrier; HCl is a physiological barrier (not cytokine).",
      difficulty: "Easy",
      conceptTested: "Innate Immunity Barrier Classification"
    },
    {
      question: "During an organ transplant procedure, which type of immune response is primarily responsible for the rejection of the transplanted kidney graft?",
      options: [
        "Humoral immune response mediated by IgE",
        "Cell-mediated immune response mediated by T-lymphocytes",
        "Innate physiological barrier mediated by interferons",
        "Autoimmune response mediated by rheumatoid factors"
      ],
      correctAnswer: 1,
      explanation: "Graft rejection is primarily governed by the Cell-Mediated Immune (CMI) response orchestrated by T-lymphocytes. T-cells recognize foreign major histocompatibility complex (MHC/HLA) antigens on donor graft cells and mount a cytotoxic attack.",
      difficulty: "Easy",
      conceptTested: "Graft Rejection & Cell-Mediated Immunity"
    }
  ],

  pyqs: [
    {
      id: "pyq-bio-imm-1",
      year: 2023,
      exam: "NEET UG",
      examName: "NEET UG 2023",
      examYear: "2023",
      verifiedExam: "NEET UG 2023",
      question: "Which of the following is not a secondary lymphoid organ?",
      options: [
        "Spleen",
        "Lymph nodes",
        "Thymus",
        "Peyer's patches"
      ],
      correctAnswer: 2,
      explanation: "Thymus and Bone Marrow are Primary lymphoid organs where immature lymphocytes differentiate into antigen-sensitive lymphocytes. Spleen, Lymph nodes, and Peyer's patches of small intestine are Secondary lymphoid organs.",
      difficulty: "Easy",
      conceptTested: "Primary vs Secondary Lymphoid Organs",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.2.5",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Paper"
    },
    {
      id: "pyq-bio-imm-2",
      year: 2022,
      exam: "NEET UG",
      examName: "NEET UG 2022",
      examYear: "2022",
      verifiedExam: "NEET UG 2022",
      question: "Which of the following statements is not correct?",
      options: [
        "Innate immunity is non-specific type of defense, that is present at the time of birth.",
        "MALT constitutes about 50% of the lymphoid tissue in human body.",
        "The primary lymphoid organs are bone marrow and thymus.",
        "An antibody is represented by H1L1 formula."
      ],
      correctAnswer: 3,
      explanation: "An antibody molecule consists of four polypeptide chains: two identical heavy chains and two identical light chains, hence it is represented by the formula H2L2, NOT H1L1.",
      difficulty: "Easy",
      conceptTested: "Antibody Structure Formula (H2L2)",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2022 Official Paper"
    },
    {
      id: "pyq-bio-imm-3",
      year: 2020,
      exam: "NEET UG",
      examName: "NEET UG 2020",
      examYear: "2020",
      verifiedExam: "NEET UG 2020",
      question: "The yellowish fluid 'colostrum' secreted by mother during the initial days of lactation is very essential to impart immunity to the newborn infants because it contains:",
      options: [
        "Immunoglobulin A",
        "Natural killer cells",
        "Monocytes",
        "Macrophages"
      ],
      correctAnswer: 0,
      explanation: "Colostrum secreted by the mother during the initial days of lactation contains abundant amounts of Immunoglobulin A (IgA) antibodies, which provide essential natural passive immunity protecting the newborn infant from various infections.",
      difficulty: "Easy",
      conceptTested: "Colostrum & Secretory IgA",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.2.3",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Paper"
    },
    {
      id: "pyq-bio-imm-4",
      year: 2019,
      exam: "NEET UG",
      examName: "NEET UG 2019",
      examYear: "2019",
      verifiedExam: "NEET UG 2019",
      question: "Which of the following immune responses is responsible for rejection of kidney graft?",
      options: [
        "Cell-mediated immune response",
        "Auto-immune response",
        "Humoral immune response",
        "Inflammatory immune response"
      ],
      correctAnswer: 0,
      explanation: "Cell-mediated immune response (orchestrated by T-lymphocytes) is responsible for the rejection of grafted tissues/organs like kidney transplants.",
      difficulty: "Easy",
      conceptTested: "Cell-Mediated Immunity & Graft Rejection",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.2.2",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper"
    },
    {
      id: "pyq-bio-imm-5",
      year: 2018,
      exam: "NEET UG",
      examName: "NEET UG 2018",
      examYear: "2018",
      verifiedExam: "NEET UG 2018",
      question: "In which of the following diseases the body's immune system attacks its own cells, identifying them as foreign?",
      options: [
        "Rheumatoid arthritis",
        "Asthma",
        "Cancer",
        "AIDS"
      ],
      correctAnswer: 0,
      explanation: "Rheumatoid arthritis is an autoimmune disorder where the immune system loses self-tolerance and attacks the body's own cells and tissues (specifically synovial joints).",
      difficulty: "Easy",
      conceptTested: "Autoimmune Diseases (Rheumatoid Arthritis)",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.2.4",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2018 Official Paper"
    }
  ]
};
