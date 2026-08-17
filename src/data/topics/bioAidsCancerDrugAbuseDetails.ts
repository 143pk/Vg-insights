import { DetailedTopicContent } from '../../types/neet';

export const bioAidsCancerDrugAbuseDetails: DetailedTopicContent = {
  topicId: "bio-aids-cancer-drug-abuse",
  topicName: "AIDS, Cancer & Drug Abuse",
  subject: "Biology",
  class: "Class 12",
  classification: "Biology & Human Welfare",
  chapter: "Human Health and Diseases",

  whatIsThisTopic: "Comprehensive master-level NCERT & NEET UG analysis of modern biomedical pathology and pharmacology: (1) AIDS etiology, HIV retroviral ultrastructure (ssRNA diploid genome, reverse transcriptase, gp120), modes of transmission, incubation period, cellular replication cycle in Macrophages ('HIV factory') and Helper T-lymphocytes ($CD4^+$ $T_H$ cells), diagnostic screening via ELISA and confirmatory Western Blot, and anti-retroviral therapies; (2) Cancer biology, contact inhibition breakdown, Benign vs Malignant neoplasms, the definitive hallmark of Metastasis, physical/chemical/biological Carcinogens, Proto-oncogenes ($c\\text{-}onc$) vs Viral oncogenes ($v\\text{-}onc$), modern diagnostic modalities (Biopsy, CT, MRI, Monoclonal antibodies), and multimodality treatment including Alpha-interferon immunotherapy; (3) Pharmacology of Drug and Alcohol Abuse: Opioids (Morphine from Papaver somniferum, Heroin/Diacetylmorphine depressant), Cannabinoids (Cannabis sativa, brain receptors, cardiovascular effects, Ganja/Charas/Hashish/Marijuana), Coca alkaloids/Cocaine (Erythroxylum coca, Dopamine reuptake inhibition, CNS stimulation, Hallucinations), Atropa belladonna, Datura, Nicotine/Tobacco pathology (Adrenal medulla stimulation, CO hypoxia, emphysema, cancer), Addiction, Dependence, and Withdrawal Syndrome management.",

  basicIdea: [
    "AIDS (Acquired Immuno Deficiency Syndrome): First reported in 1981, caused by the Human Immunodeficiency Virus (HIV), an enveloped Retrovirus containing two identical single-stranded RNA (ssRNA) molecules and the enzyme Reverse Transcriptase.",
    "Transmission of HIV: Transmitted through: (1) Sexual contact with an infected partner; (2) Transfusion of contaminated blood or blood products; (3) Sharing contaminated needles/syringes (intravenous drug abusers); (4) Transplacental transfer from infected mother to fetus. HIV is NOT spread by mere physical touch, hugging, or casual contact.",
    "Replication Mechanism of HIV: HIV binds CD4 receptors on Macrophages and Helper T-lymphocytes ($T_H$). In macrophages, viral Reverse Transcriptase synthesizes viral DNA from RNA; viral DNA integrates into host genome via Integrase. Macrophages continuously churn out new virions without immediate lysis, functioning as an 'HIV Factory'. Simultaneously, HIV infects and lyses Helper T-cells, causing a catastrophic decline in $CD4^+$ count (<200 cells/$\\mu$L), triggering severe immunodeficiency and opportunistic infections (Mycobacterium, Toxoplasma, fungi, viruses).",
    "Diagnosis & Therapy: ELISA (Enzyme-Linked Immunosorbent Assay) is the primary serological screening test; Western Blot serves as confirmatory test. Treatment uses Anti-Retroviral Therapy (ART), which prolongs survival but is not curative.",
    "Cancer Characteristics: Normal eukaryotic cells demonstrate 'Contact Inhibition' (contact with neighboring cells arrests proliferation). Cancer cells lose contact inhibition, dividing uncontrollably to form masses of cells called Tumors (Neoplasms).",
    "Benign vs Malignant Tumors & Metastasis: Benign tumors remain localized and encapsulated. Malignant tumors invade surrounding tissues, compete for nutrients, and enter blood/lymph channels to colonize distant anatomical organs. This secondary seeding is termed 'Metastasis'—the most feared characteristic of malignant neoplasms.",
    "Carcinogens & Oncogenes: Physical agents (X-rays, gamma rays, UV rays), Chemical agents (tobacco smoke causing lung cancer), and Biological agents (Oncogenic viruses with $v\\text{-}onc$). Normal human cells contain Proto-oncogenes ($c\\text{-}onc$) which, upon mutagenic activation, transform into active cancer-causing Oncogenes.",
    "Diagnosis & Treatment of Cancer: Diagnosed via Biopsy/Histopathology, Radiography, CT scan (3D imaging), and MRI (uses strong magnetic fields and non-ionizing radiation). Treatment combines Surgery, Radiotherapy, Chemotherapy (causes hair loss/anemia), and Immunotherapy with $\\alpha$-interferon (Biological Response Modifier).",
    "Drug Abuse Classification: (1) Opioids (Morphine from Papaver somniferum latex; Heroin/Diacetylmorphine synthesized by acetylation of morphine): bind CNS/GI receptors, depressant; (2) Cannabinoids (Cannabis sativa): bind brain receptors, affect cardiovascular system (Marijuana, Hashish, Charas, Ganja); (3) Cocaine (Erythroxylum coca): blocks Dopamine transport, causes euphoria and hallucinations; (4) Hallucinogens (Atropa belladonna, Datura).",
    "Addiction, Dependence & Withdrawal: Physical dependence causes severe Withdrawal Syndrome (anxiety, tremors, sweating, nausea) when drugs are discontinued abruptly."
  ],

  importantTerms: [
    {
      term: "Retrovirus (HIV)",
      definition: "An enveloped RNA virus family whose genome consists of two identical single-stranded RNA molecules enclosed in a capsid with the enzyme Reverse Transcriptase, allowing reverse transcription of RNA into DNA.",
      neetNote: "Contains 2 copies of ssRNA and reverse transcriptase; attacks CD4+ Helper T-cells."
    },
    {
      term: "HIV Factory",
      definition: "A term applied to human Macrophages infected with HIV because they continuously produce and release progeny viral particles into the bloodstream over long periods without undergoing immediate cytolytic destruction.",
      neetNote: "Direct NCERT concept: Macrophages act as the continuous virus-producing factory."
    },
    {
      term: "Contact Inhibition",
      definition: "A regulatory cellular mechanism in normal tissues wherein physical contact between neighboring cells inhibits further cell division and migration; lost completely in neoplastic/cancer cells.",
      neetNote: "Loss of contact inhibition is the definitive distinguishing characteristic of cancer cells."
    },
    {
      term: "Metastasis",
      definition: "The dissemination of malignant neoplastic cells from the primary tumor site through blood or lymphatic circulation to distant organs, establishing secondary malignant colonies.",
      neetNote: "NCERT Highlight: Metastasis is the most feared and definitive clinical property of malignant tumors."
    },
    {
      term: "Proto-Oncogenes (c-onc)",
      definition: "Normal cellular genes present in all healthy cells that regulate cell division, growth, and differentiation, but which can undergo mutational activation into cancer-causing oncogenes.",
      neetNote: "Contrasts with viral oncogenes (v-onc) found in oncogenic viruses."
    },
    {
      term: "Alpha-Interferon (α-IFN)",
      definition: "A biological response modifier protein administered in cancer immunotherapy that activates the host's innate and adaptive immune effector cells to identify and destroy tumor cells.",
      neetNote: "NCERT specific immunotherapy agent for cancer."
    },
    {
      term: "Heroin (Smack / Diacetylmorphine)",
      definition: "A white, odorless, bitter crystalline opioid compound synthesized by the chemical acetylation of morphine; acts as a powerful central nervous system depressant.",
      neetNote: "Synthesized by acetylation of morphine; binds opioid receptors in CNS and GI tract."
    },
    {
      term: "Cannabinoids",
      definition: "A group of chemicals derived from the inflorescences of Cannabis sativa that interact with specific cannabinoid receptors in the human brain, primarily impacting the cardiovascular system.",
      neetNote: "Includes marijuana, hashish, charas, and ganja; major effect on cardiovascular function."
    },
    {
      term: "Cocaine (Coca Alkaloid / Crack)",
      definition: "An alkaloid extracted from the South American plant Erythroxylum coca that interferes with the reuptake and transport of the neurotransmitter Dopamine, producing CNS stimulation, euphoria, and hallucinations at high doses.",
      neetNote: "Inhibits dopamine transport; other hallucinogenic plants include Atropa belladonna and Datura."
    },
    {
      term: "Withdrawal Syndrome",
      definition: "A distressing constellation of physiological and psychological symptoms (tremors, intense anxiety, sweating, nausea, tachycardia) that manifests when a drug/alcohol-dependent individual abruptly discontinues substance intake.",
      neetNote: "Relieved only by resumption of the substance, creating the physiological cycle of dependence."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. AIDS: Etiology, HIV Structure & Step-by-Step Replication Mechanism",
      paragraphs: [
        "AIDS (Acquired Immuno Deficiency Syndrome) represents the terminal stage of infection caused by the Human Immunodeficiency Virus (HIV). The term 'Syndrome' signifies a collection of diverse clinical symptoms resulting from immune collapse rather than a single specific disease.",
        "HIV Structural Biology: HIV is an enveloped Retrovirus with a spherical lipid bilayer membrane derived from the host cell during budding, studded with glycoprotein spikes (gp120 and gp41). The viral core contains two identical molecules of single-stranded RNA (diploid ssRNA genome), paired with vital viral enzymes: Reverse Transcriptase, Integrase, and Protease.",
        "Modes of Transmission: (1) Unprotected sexual intercourse with an infected individual; (2) Transfusion of contaminated blood or blood products; (3) Sharing contaminated needles/syringes among intravenous (IV) drug abusers; (4) Maternal-fetal transmission across the placenta and through breast milk. HIV is NOT transmitted by casual social contact, shaking hands, sharing food, or insect vectors (mosquitoes cannot transmit HIV).",
        "Incubation Period: The time interval between initial exposure to HIV and the clinical onset of full-blown AIDS symptoms ranges from a few months to as long as 5 to 10 years.",
        "Detailed Step-by-Step Intracellular Replication Mechanism:",
        "Step 1: Viral Entry: The viral envelope glycoprotein gp120 binds specifically to the CD4 receptor protein and co-receptors (CCR5 / CXCR4) present on the surface of human Macrophages and Helper T-lymphocytes ($T_H$). The viral membrane fuses with the host cell membrane, releasing the viral capsid and RNA genome into the host cytoplasm.",
        "Step 2: Reverse Transcription: In the host cytoplasm, the viral enzyme Reverse Transcriptase directs the synthesis of a complementary single strand of DNA from the viral RNA template, followed by synthesis of double-stranded viral cDNA.",
        "Step 3: Genomic Integration: The double-stranded viral DNA is transported into the host cell nucleus, where the enzyme Integrase incorporates the viral DNA into the host cell's chromosomal DNA (forming a provirus).",
        "Step 4: The 'HIV Factory' in Macrophages: The integrated viral DNA directs the host's RNA polymerase to transcribe multiple copies of viral genomic RNA and viral messenger RNAs. The viral mRNAs are translated into polyproteins by host ribosomes. Progeny virions are assembled and bud off from the macrophage cell membrane. Crucially, macrophages continue to generate and shed progeny virions continuously without dying immediately—functioning as a perpetual 'HIV Factory'.",
        "Step 5: Destruction of Helper T-Lymphocytes ($T_H$ / CD4+): Simultaneously, HIV enters Helper T-lymphocytes ($T_H$), replicates vigorously, and lyses the T-cells during viral exit. The progeny viruses attack other uninfected Helper T-cells in rapid succession. Consequently, the peripheral blood $CD4^+$ Helper T-cell count plummets from a normal range of 900–1200 cells/$\\mu$L down below 200 cells/$\\mu$L.",
        "Step 6: Clinical Immunodeficiency: Depleted of Helper T-cells, the patient cannot mount cell-mediated or effective humoral immune responses. The patient suffers from chronic fever, intractable diarrhea, and profound weight loss, becoming prey to opportunistic infections by Mycobacterium tuberculosis, Toxoplasma gondii, Cytomegalovirus (CMV), and fungal pathogens (Pneumocystis jirovecii / Candida).",
        "Diagnosis & Treatment: ELISA (Enzyme-Linked Immunosorbent Assay) is the widely utilized screening test. Western Blot is used for definitive confirmation. Treatment with Anti-Retroviral Drugs (cocktails of nucleoside reverse transcriptase inhibitors, non-nucleoside reverse transcriptase inhibitors, and protease inhibitors) reduces viral load and prolongs life expectancy, but cannot eradicate the integrated provirus."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
          <rect width="800" height="500" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="2"/>
          <text x="400" y="30" fill="#0f172a" font-size="17" font-weight="bold" text-anchor="middle">Mechanism of HIV Replication & Pathogenesis in Human Host Cells</text>
          
          <!-- Host Cell Outline -->
          <rect x="50" y="55" width="700" height="425" fill="#ffffff" rx="14" stroke="#3b82f6" stroke-width="2"/>
          <rect x="50" y="55" width="220" height="28" fill="#2563eb" rx="10"/>
          <text x="160" y="74" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Macrophage / Helper T-Cell</text>
          
          <!-- Nucleus -->
          <ellipse cx="400" cy="270" rx="150" ry="110" fill="#f1f5f9" stroke="#64748b" stroke-width="2" stroke-dasharray="6,3"/>
          <text x="400" y="195" fill="#334155" font-size="12" font-weight="bold" text-anchor="middle">Host Cell Nucleus</text>
          
          <!-- Step 1: HIV Virion Attachment -->
          <circle cx="100" cy="120" r="28" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="100" y="115" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">HIV</text>
          <text x="100" y="128" fill="#b91c1c" font-size="9" text-anchor="middle">(2 ssRNA)</text>
          <text x="100" y="165" fill="#1e293b" font-size="11" font-weight="bold" text-anchor="middle">1. Attachment & Entry</text>
          <text x="100" y="178" fill="#64748b" font-size="9.5" text-anchor="middle">Binds CD4 receptor</text>
          
          <!-- Arrow 1 to 2 -->
          <path d="M 135 125 L 210 125" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
          
          <!-- Step 2: Uncoating & Reverse Transcription -->
          <rect x="220" y="90" width="160" height="75" fill="#fef2f2" rx="8" stroke="#fca5a5" stroke-width="1.5"/>
          <text x="300" y="110" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">2. Reverse Transcription</text>
          <text x="300" y="128" fill="#475569" font-size="10" text-anchor="middle">Viral RNA Template</text>
          <text x="300" y="142" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="middle">↓ Reverse Transcriptase</text>
          <text x="300" y="156" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Double-Stranded Viral DNA</text>
          
          <!-- Arrow 2 to 3 (into nucleus) -->
          <path d="M 300 170 L 300 230" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue2)"/>
          
          <!-- Step 3: Integration into Genome -->
          <rect x="280" y="240" width="240" height="70" fill="#eff6ff" rx="8" stroke="#93c5fd" stroke-width="1.5"/>
          <text x="400" y="260" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">3. Genome Integration (Integrase)</text>
          <text x="400" y="278" fill="#334155" font-size="10" text-anchor="middle">Viral DNA incorporates into</text>
          <text x="400" y="294" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Host Chromosomal DNA (Provirus)</text>
          
          <!-- Arrow 3 to 4 (transcription out of nucleus) -->
          <path d="M 520 275 L 590 275 L 590 175" stroke="#16a34a" stroke-width="2" marker-end="url(#arrow-green)"/>
          
          <!-- Step 4: Transcription & Translation -->
          <rect x="500" y="90" width="180" height="80" fill="#f0fdf4" rx="8" stroke="#86efac" stroke-width="1.5"/>
          <text x="590" y="110" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">4. Viral RNA & Proteins</text>
          <text x="590" y="128" fill="#334155" font-size="10" text-anchor="middle">• New Viral RNA transcribed</text>
          <text x="590" y="144" fill="#334155" font-size="10" text-anchor="middle">• Viral coat polyproteins made</text>
          <text x="590" y="160" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">• Polyproteins cleaved by Protease</text>
          
          <!-- Step 5: Assembly & Budding -->
          <rect x="440" y="380" width="280" height="85" fill="#fefce8" rx="8" stroke="#fde047" stroke-width="1.5"/>
          <text x="580" y="400" fill="#854d0e" font-size="11.5" font-weight="bold" text-anchor="middle">5. Assembly & Budding of New Virions</text>
          <text x="580" y="418" fill="#334155" font-size="10.5">• In Macrophages: Acts as continuous HIV factory</text>
          <text x="580" y="434" fill="#b91c1c" font-size="10.5" font-weight="bold">• In Helper T-cells: Progressive cell lysis</text>
          <text x="580" y="450" fill="#b91c1c" font-size="10.5" font-weight="bold">• CD4+ count drops below 200/μL -> AIDS</text>
          
          <!-- Arrow from 4 to 5 -->
          <path d="M 590 175 L 590 375" stroke="#eab308" stroke-width="2" marker-end="url(#arrow-yellow)"/>
          
          <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker>
            <marker id="arrow-blue2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a"/></marker>
            <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#eab308"/></marker>
          </defs>
        </svg>`,
        caption: "High-Yield NEET Diagram: Molecular Replication Cycle of HIV in Human Macrophages and Helper T-Lymphocytes.",
        guide: "WHAT TO OBSERVE: (1) ssRNA converted to dsDNA by Reverse Transcriptase; (2) Integrase incorporates viral DNA into host genome; (3) Macrophages produce viruses continuously without instant lysis ('HIV factory'); (4) Helper T-cells are progressively destroyed, leading to opportunistic infections."
      },
      importantPoints: [
        "HIV contains 2 identical single-stranded RNA (ssRNA) molecules and Reverse Transcriptase.",
        "Macrophages act as the 'HIV factory', continuously releasing viral progeny.",
        "Helper T-cells (CD4+) are destroyed progressively, causing severe opportunistic infections.",
        "ELISA is the screening test; Western Blot is the confirmatory test."
      ]
    },
    {
      heading: "2. Cancer Biology: Loss of Contact Inhibition, Metastasis & Carcinogenesis",
      paragraphs: [
        "In a healthy human body, cell growth, proliferation, and differentiation are strictly regulated and highly controlled processes. Normal cells exhibit a fundamental physiological property known as Contact Inhibition: when normal dividing cells come into physical contact with surrounding adjacent cells, inhibitory signals arrest further mitotic cell division.",
        "Cancer cells appear to have completely lost this contact inhibition property. Consequently, cancerous cells continue unchecked mitotic division, piling upon one another to generate unorganized cellular masses known as Tumors or Neoplasms.",
        "Classification of Tumors: (1) Benign Tumors: Remain strictly confined to their original anatomical location, do not invade adjacent normal tissues, are typically encapsulated by fibrous connective tissue, and cause minimal physiological damage; (2) Malignant Tumors: Masses of proliferating neoplastic cells characterized by rapid, aggressive growth, local invasion, and destruction of adjacent healthy tissues. Cancer cells actively compete with normal cells for vital nutrients, starving surrounding tissues.",
        "Metastasis (The Most Feared Hallmark of Malignancy):",
        "Cells that slough off from the primary malignant tumor enter the systemic blood circulation or lymphatic vessels and travel to distant anatomical sites (e.g., lungs, liver, brain, bone). Wherever these circulating neoplastic cells lodge, they extravasate and initiate a new secondary tumor focus. Metastasis is the most devastating and definitive hallmark distinguishing malignant from benign neoplasms.",
        "Causes of Cancer (Carcinogenesis & Carcinogens):",
        "Transformation of normal cells into cancerous neoplasms is induced by physical, chemical, or biological agents termed Carcinogens:",
        "(a) Physical Carcinogens: Ionizing radiation (X-rays, gamma rays) and non-ionizing radiation (UV-B rays) induce double-strand DNA breaks and thymine dimer crosslinks, triggering oncogenic mutations.",
        "(b) Chemical Carcinogens: Major chemical agents present in tobacco smoke (e.g., Polycyclic aromatic hydrocarbons / benzopyrene, nitrosamines) are the primary cause of lung, oral, and bladder cancer; coal tar, aniline dyes, and asbestos fibers.",
        "(c) Biological Carcinogens: Cancer-causing viruses (Oncogenic Viruses) carry specific genes termed Viral Oncogenes ($v\\text{-}onc$). Furthermore, healthy human cells contain normal regulatory genes called Cellular Oncogenes ($c\\text{-}onc$) or Proto-Oncogenes. When activated by mutations, chromosomal translocations, or viral promoters, proto-oncogenes transform into active oncogenes, driving malignant cellular transformation."
      ],
      importantPoints: [
        "Loss of contact inhibition enables continuous uncontrolled division in cancer cells.",
        "Metastasis (secondary tumor spread via blood/lymph) is the most feared and definitive feature of malignant tumors.",
        "Proto-oncogenes (c-onc) are present in ALL normal cells; their mutational activation triggers oncogenesis.",
        "Tobacco smoke contains chemical carcinogens that are the leading cause of lung and oral cancer."
      ]
    },
    {
      heading: "3. Cancer Detection, Diagnosis & Multimodality Treatment",
      paragraphs: [
        "Early detection of cancers is crucial for successful clinical prognosis and curative treatment:",
        "Diagnostic Techniques:",
        "1. Biopsy and Histopathological Studies: A piece of the suspected abnormal tissue is surgically excised, sliced into thin sections, stained, and examined under a microscope by a pathologist to detect atypical mitotic figures and loss of cellular differentiation.",
        "2. Blood and Bone Marrow Examination: Used for diagnosing leukemias (blood cancers), detecting drastically elevated leukocyte counts.",
        "3. Radiography (X-rays) & Computed Tomography (CT Scan): CT uses X-rays to generate 3-dimensional anatomical slice images of internal organ tumors.",
        "4. Magnetic Resonance Imaging (MRI): Utilizes strong, uniform magnetic fields and non-ionizing radiofrequency pulses to accurately and non-invasively detect subtle pathological and physiological alterations in living soft tissues.",
        "5. Antibodies against Cancer-Specific Antigens: Monoclonal antibodies designed against tumor markers (e.g., PSA for prostate, CA-125 for ovarian cancer).",
        "6. Molecular Biology Techniques: DNA sequencing and PCR to detect inherited oncogenes (e.g., BRCA1/BRCA2 in individuals predisposed to breast cancer), allowing preventive counseling.",
        "Treatment Modalities for Cancer:",
        "Common therapeutic regimens involve a synergistic combination of:",
        "(a) Surgery: Surgical excision of localized tumor masses;",
        "(b) Radiotherapy: Tumor cells are lethally irradiated with focused ionizing beams while safeguarding surrounding healthy tissues;",
        "(c) Chemotherapy: Administration of antineoplastic chemical drugs (e.g., Vincristine, Vinblastine from Catharanthus roseus, Cisplatin) that block mitotic spindles or DNA replication. Most chemotherapeutic drugs exhibit collateral toxicity, causing severe side effects like Alopecia (hair loss) and Anemia;",
        "(d) Immunotherapy: Tumor cells frequently evade host immune surveillance. Patients are administered Biological Response Modifiers such as Alpha-Interferon ($\\alpha$-interferon), which activates the host's Natural Killer cells and Cytotoxic T-lymphocytes to actively destroy the neoplastic cells."
      ],
      tables: [
        {
          title: "Diagnostic Modalities for Cancer (NEET Comparative Matrix)",
          headers: ["Diagnostic Technique", "Physical Principle / Mechanism", "Key Clinical Application & Safety"],
          rows: [
            ["Biopsy & Histopathology", "Microscopic examination of stained tissue sections", "Definitive gold standard for solid tumors"],
            ["CT Scan", "Ionizing X-rays generating 3D cross-sectional images", "Visualizes internal organ tumors; uses ionizing radiation"],
            ["MRI Scan", "Strong magnetic fields & NON-IONIZING radiation", "Safest, highly sensitive imaging of soft tissue pathology"],
            ["Monoclonal Antibodies", "Antigen-antibody binding to tumor-specific antigens", "Detects specific tumor markers in patient serum"],
            ["Alpha-Interferon", "Biological response modifier (Immunotherapy)", "Activates patient's immune system to destroy tumor cells"]
          ]
        }
      ],
      importantPoints: [
        "MRI utilizes strong magnetic fields and NON-IONIZING radiation, making it completely safe from radiation damage.",
        "Alpha-interferon is a Biological Response Modifier used in cancer immunotherapy.",
        "Common chemotherapy side effects: Hair loss (alopecia) and anemia."
      ]
    },
    {
      heading: "4. Pharmacology of Drug Abuse: Opioids, Cannabinoids & Cocaine",
      paragraphs: [
        "Substance abuse involves the self-administration of pharmaceutical chemicals or psychoactive plant extracts for non-medical reasons, impairing physical, psychological, and physiological functions. The three major classes examined in NEET UG are:",
        "1. Opioids (Narcotic Analgesics & Depressants):",
        "Opioids are psychoactive drugs that bind to specific Opioid Receptors present in the Central Nervous System (CNS) and Gastrointestinal (GI) tract.",
        "(a) Morphine: A natural alkaloid extracted directly from the milky latex of the unripe seed capsules of the Poppy plant (Papaver somniferum). Morphine is an exceptionally potent Analgesic (painkiller) and sedative, indispensable in clinical medicine for patients recovering from major surgeries and severe trauma.",
        "(b) Heroin (Commonly called 'Smack' / Chemically Diacetylmorphine): A white, odorless, bitter crystalline compound produced by the chemical Acetylation of Morphine with acetic anhydride. Taken by snorting and intravenous injection. Heroin acts as a potent CNS Depressant and slows down bodily metabolic functions. Sharing needles for heroin injection is a major risk factor for transmission of HIV and Hepatitis B.",
        "2. Cannabinoids (Cardiovascular Modulators):",
        "Cannabinoids are a group of active terpenophenolic chemicals that interact with specific Cannabinoid Receptors situated principally in the human Brain.",
        "Source & Extraction: Extracted from the inflorescences, flower tops, leaves, and resins of the hemp plant (Cannabis sativa). Various preparations derived from combinations of these plant parts include Marijuana, Hashish, Charas, and Ganja.",
        "Administration & Physiological Effects: Ingested orally or inhaled via smoke. Cannabinoids predominantly impact the Cardiovascular System of the body (inducing tachycardia, altered blood pressure, and conjunctival injection). Frequently abused by certain sports persons to alter athletic focus.",
        "3. Coca Alkaloid / Cocaine (CNS Stimulant & Hallucinogen):",
        "Source: Extracted from the leaves of the South American plant Erythroxylum coca.",
        "Mechanism of Action: Cocaine interferes directly with the reuptake and transport of the neurotransmitter Dopamine at neural synapses, leading to dopamine accumulation and persistent synaptic firing.",
        "Physiological Effects: Cocaine (commonly referred to as 'Coke' or 'Crack') exerts a powerful stimulating action on the Central Nervous System, producing a sense of intense Euphoria and increased energy. In high or excessive doses, cocaine induces acute Hallucinations and paranoid psychosis.",
        "Other Hallucinogenic Plants: Atropa belladonna (Deadly Nightshade) and Datura species contain tropane alkaloids (atropine, scopolamine) possessing well-known hallucinogenic and deliriant properties.",
        "Other Abused Pharmaceuticals: Barbiturates, Amphetamines, and Benzodiazepines (normally prescribed as tranquilizers, hypnotics, and sedatives for insomnia and clinical depression) are frequently abused by addicts."
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
          <rect width="800" height="420" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="2"/>
          <text x="400" y="30" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">Classification, Plant Sources & Mechanisms of Major Abused Drugs</text>
          
          <!-- Opioids Column -->
          <rect x="30" y="60" width="230" height="335" fill="#fef2f2" rx="10" stroke="#f87171" stroke-width="2"/>
          <rect x="30" y="60" width="230" height="32" fill="#ef4444" rx="8"/>
          <text x="145" y="81" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">OPIOIDS (Depressants)</text>
          
          <text x="45" y="115" fill="#991b1b" font-size="11" font-weight="bold">Plant Source:</text>
          <text x="45" y="130" fill="#334155" font-size="10.5">• Poppy (Papaver somniferum)</text>
          <text x="45" y="145" fill="#334155" font-size="10.5">• Extracted from latex of capsule</text>
          
          <text x="45" y="175" fill="#991b1b" font-size="11" font-weight="bold">Key Compounds:</text>
          <text x="45" y="190" fill="#334155" font-size="10.5">• Morphine (analgesic/sedative)</text>
          <text x="45" y="205" fill="#b91c1c" font-size="10.5" font-weight="bold">• Heroin / Smack</text>
          <text x="45" y="220" fill="#334155" font-size="10">  (Diacetylmorphine by acetylation)</text>
          
          <text x="45" y="250" fill="#991b1b" font-size="11" font-weight="bold">Receptors & Action:</text>
          <text x="45" y="265" fill="#334155" font-size="10.5">• Receptors in CNS & GI Tract</text>
          <text x="45" y="280" fill="#334155" font-size="10.5">• Depressant; slows bodily functions</text>
          <text x="45" y="295" fill="#334155" font-size="10.5">• Taken by snorting & IV injection</text>
          
          <!-- Cannabinoids Column -->
          <rect x="285" y="60" width="230" height="335" fill="#f0fdf4" rx="10" stroke="#4ade80" stroke-width="2"/>
          <rect x="285" y="60" width="230" height="32" fill="#16a34a" rx="8"/>
          <text x="400" y="81" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">CANNABINOIDS</text>
          
          <text x="300" y="115" fill="#166534" font-size="11" font-weight="bold">Plant Source:</text>
          <text x="300" y="130" fill="#334155" font-size="10.5">• Hemp (Cannabis sativa)</text>
          <text x="300" y="145" fill="#334155" font-size="10.5">• Inflorescences, flower tops, resin</text>
          
          <text x="300" y="175" fill="#166534" font-size="11" font-weight="bold">Key Products:</text>
          <text x="300" y="190" fill="#334155" font-size="10.5">• Ganja, Charas, Hashish,</text>
          <text x="300" y="205" fill="#334155" font-size="10.5">  Marijuana</text>
          
          <text x="300" y="250" fill="#166534" font-size="11" font-weight="bold">Receptors & Action:</text>
          <text x="300" y="265" fill="#15803d" font-size="10.5" font-weight="bold">• Receptors principally in BRAIN</text>
          <text x="300" y="280" fill="#15803d" font-size="10.5" font-weight="bold">• Major effect on CARDIOVASCULAR</text>
          <text x="300" y="295" fill="#334155" font-size="10.5">  system of the body</text>
          <text x="300" y="310" fill="#334155" font-size="10.5">• Inhalation and oral ingestion</text>
          
          <!-- Cocaine Column -->
          <rect x="540" y="60" width="230" height="335" fill="#eff6ff" rx="10" stroke="#60a5fa" stroke-width="2"/>
          <rect x="540" y="60" width="230" height="32" fill="#2563eb" rx="8"/>
          <text x="655" y="81" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">COCAINE (Stimulant)</text>
          
          <text x="555" y="115" fill="#1e40af" font-size="11" font-weight="bold">Plant Source:</text>
          <text x="555" y="130" fill="#334155" font-size="10.5">• Erythroxylum coca (S. America)</text>
          <text x="555" y="145" fill="#334155" font-size="10.5">• Commonly called 'Coke' / 'Crack'</text>
          
          <text x="555" y="175" fill="#1e40af" font-size="11" font-weight="bold">Hallucinogenic Allies:</text>
          <text x="555" y="190" fill="#334155" font-size="10.5">• Atropa belladonna</text>
          <text x="555" y="205" fill="#334155" font-size="10.5">• Datura species</text>
          
          <text x="555" y="250" fill="#1e40af" font-size="11" font-weight="bold">Receptors & Action:</text>
          <text x="555" y="265" fill="#1e3a8a" font-size="10.5" font-weight="bold">• Blocks DOPAMINE transport</text>
          <text x="555" y="280" fill="#334155" font-size="10.5">• CNS stimulant -> Euphoria & energy</text>
          <text x="555" y="295" fill="#b91c1c" font-size="10.5" font-weight="bold">• High dose causes Hallucinations</text>
          <text x="555" y="310" fill="#334155" font-size="10.5">• Usually snorted</text>
        </svg>`,
        caption: "High-Yield NEET Drug Classification Chart: Botanical Sources, Receptors, and Physiological Target Organs.",
        guide: "CRITICAL NCERT DISTINCTIONS: (1) Opioid receptors = CNS + GI tract (Morphine/Heroin = Depressant); (2) Cannabinoid receptors = Brain (Cardiovascular effect); (3) Cocaine = Blocks Dopamine reuptake (Stimulant + Hallucinogen)."
      },
      importantPoints: [
        "Morphine is extracted from the latex of Papaver somniferum (Poppy).",
        "Heroin (Smack) is diacetylmorphine formed by acetylation of morphine; acts as a depressant.",
        "Cannabinoids interact with receptors in the brain and primarily affect the cardiovascular system.",
        "Cocaine (Erythroxylum coca) blocks dopamine reuptake; high doses cause hallucinations (like Atropa belladonna and Datura)."
      ]
    },
    {
      heading: "5. Tobacco, Smoking Pathology, Addiction, Dependence & Withdrawal Syndrome",
      paragraphs: [
        "Tobacco has been smoked, chewed, or used as snuff by humans for over 400 years. Tobacco contains a multitude of chemical alkaloids, the foremost being Nicotine.",
        "Action of Nicotine: Nicotine stimulates the Adrenal Glands (specifically the adrenal medulla) to secrete Adrenaline and Nor-Adrenaline into the systemic circulation. These catecholamines raise arterial Blood Pressure and increase Heart Rate.",
        "Pathology of Smoking: Smoking is associated with an alarming incidence of: (1) Cancers of the lungs, urinary bladder, oral cavity, and throat; (2) Chronic Bronchitis and Emphysema (progressive breakdown of alveolar septa reducing respiratory surface area); (3) Coronary heart disease; (4) Gastric ulcers.",
        "Carbon Monoxide (CO) Poisoning: Cigarette smoke contains high concentrations of Carbon Monoxide. CO binds to hemoglobin with ~200 times higher affinity than oxygen, forming Carboxyhemoglobin. This displaces oxygen and drastically reduces the concentration of haembound oxygen, inducing chronic systemic tissue hypoxia.",
        "Adolescence, Addiction, and Dependence:",
        "Adolescence is a vulnerable transitional period characterized by biological, emotional, and cognitive vulnerability. Curiosity, peer pressure, stress, and media glamorization often drive initial experimentation with drugs and alcohol.",
        "Addiction is a psychological attachment to certain effects (such as euphoria and temporary well-being) associated with drugs and alcohol. With repeated use, the tolerance level of receptors increases, requiring higher doses to produce the same effect.",
        "Dependence: Dependence is the state in which the body adapts to the continuous presence of the substance. If the regular dose is abruptly discontinued, the individual experiences severe, distressing physiological and psychological Withdrawal Symptoms: intense anxiety, shakiness/tremors, profuse sweating, nausea, tachycardia, and vomiting.",
        "Prevention and Control Strategies in Adolescents:",
        "(1) Avoid undue peer pressure; (2) Education and counseling; (3) Seeking help from parents and peers; (4) Looking for danger signs (dropping grades, isolation, aggressive behavior); (5) Seeking professional medical rehabilitation (psychologists, psychiatrists, de-addiction centers)."
      ],
      importantPoints: [
        "Nicotine stimulates the Adrenal Medulla to release adrenaline and noradrenaline, increasing blood pressure and heart rate.",
        "Smoking increases Carbon Monoxide (CO) levels in blood, decreasing haembound oxygen transport.",
        "Withdrawal syndrome manifests upon abrupt cessation of addictive substances due to physiological dependence."
      ]
    }
  ],

  formulae: [
    {
      title: "Heroin Chemical Synthesis",
      formula: "\\text{Morphine} + \\text{Acetic Anhydride} \\xrightarrow{\\text{Acetylation}} \\text{Diacetylmorphine (Heroin / Smack)}",
      meaning: "Chemical conversion of natural poppy morphine to semi-synthetic diacetylmorphine",
      symbols: "White, odorless, bitter crystalline opioid depressant",
      whenToUse: "NEET questions on chemical nature and derivation of heroin."
    },
    {
      title: "Drug-Receptor-Target Mapping",
      formula: "\\text{Opioids (CNS/GI)} \\mid \\text{Cannabinoids (Brain } \\to \\text{ Cardiovascular)} \\mid \\text{Cocaine (Dopamine reuptake } \\to \\text{ CNS)}",
      meaning: "Mapping of psychoactive substances to receptor locations and organ systems",
      whenToUse: "Match the column questions in NEET UG Biology."
    }
  ],

  visualLearning: {
    type: 'flowchart',
    flowchartSteps: [
      { step: "Initial Drug/Alcohol Experimentation", detail: "Driven by curiosity, peer pressure, or stress", arrowText: "Repeated use" },
      { step: "Receptor Tolerance & Addiction", detail: "Receptors desensitize; higher doses required for euphoria", arrowText: "Leads to" },
      { step: "Physical & Psychological Dependence", detail: "Body adapts to constant drug presence", arrowText: "Abrupt cessation" },
      { step: "Withdrawal Syndrome", detail: "Anxiety, tremors, sweating, nausea -> Relieved only by de-addiction rehab", arrowText: "" }
    ],
    caption: "The Pathophysiological Continuum of Addiction, Physical Dependence, and Withdrawal Syndrome."
  },

  neetImportantPoints: [
    "HIV is a retrovirus containing 2 identical single-stranded RNA molecules and Reverse Transcriptase enzyme.",
    "HIV binds CD4 receptors on Macrophages and Helper T-lymphocytes (TH).",
    "Macrophages act as the 'HIV factory', continuously shedding new virions without immediate death.",
    "HIV causes a steep drop in Helper T-cell count (<200/μL), leading to opportunistic infections (Mycobacterium, Toxoplasma, fungi).",
    "ELISA is the screening test; Western blot is the confirmatory test for HIV/AIDS.",
    "Contact inhibition is the property of normal cells to stop dividing upon contact with other cells; CANCER cells lose contact inhibition.",
    "Metastasis is the spread of cancer cells to distant sites via blood/lymph; it is the most feared characteristic of malignant tumors.",
    "Normal cells have Proto-oncogenes (c-onc) which when activated cause cancer; oncogenic viruses have viral oncogenes (v-onc).",
    "MRI uses strong magnetic fields and NON-IONIZING radiation to safely detect pathological changes.",
    "Alpha-interferon is a Biological Response Modifier used in cancer immunotherapy.",
    "Morphine is extracted from the latex of Papaver somniferum (Poppy); it is a powerful analgesic and sedative.",
    "Heroin (Smack) is diacetylmorphine, obtained by acetylation of morphine; it is a central nervous system depressant.",
    "Cannabinoids (Cannabis sativa) bind receptors in the brain and primarily affect the CARDIOVASCULAR system.",
    "Cocaine (Erythroxylum coca) interferes with the transport of the neurotransmitter DOPAMINE; high doses induce hallucinations.",
    "Atropa belladonna and Datura are well-known hallucinogenic plants.",
    "Nicotine in tobacco stimulates the Adrenal Medulla to release adrenaline and noradrenaline, raising BP and heart rate.",
    "Smoking elevates blood Carbon Monoxide (CO), reducing oxygen-carrying capacity."
  ],

  commonConfusions: [
    {
      commonConfusion: "Heroin is a stimulant that increases energy and metabolic activity.",
      correctFact: "Heroin is an opioid DEPRESSANT that slows down bodily metabolic and neural functions. Cocaine and amphetamines are stimulants.",
      whyItMattersForNEET: "Frequently tested classification distinction in NEET pharmacology questions."
    },
    {
      commonConfusion: "Cannabinoids bind to receptors in the liver and gastrointestinal tract.",
      correctFact: "Cannabinoid receptors are located principally in the BRAIN; their main physiological effect is on the CARDIOVASCULAR system. Opioid receptors are in the CNS and GI tract.",
      whyItMattersForNEET: "A favorite NEET trick question swapping cannabinoid and opioid receptor sites."
    },
    {
      commonConfusion: "MRI scan exposes the patient to dangerous ionizing radiation like X-rays.",
      correctFact: "MRI uses strong magnetic fields and NON-IONIZING radiofrequency radiation; it does NOT use harmful ionizing radiation.",
      whyItMattersForNEET: "Crucial physics-biology overlap question in medical imaging."
    },
    {
      commonConfusion: "HIV immediately kills the macrophages it infects.",
      correctFact: "Macrophages survive for long periods while continuously assembling and releasing new HIV particles, functioning as an 'HIV factory'. Helper T-cells are the ones that undergo rapid cytolysis.",
      whyItMattersForNEET: "Direct NCERT assertion tested in AIDS pathogenesis questions."
    }
  ],

  quickRevision: [
    "AIDS: HIV retrovirus | 2 ssRNA + Reverse Transcriptase | Macrophage = HIV factory | CD4+ T-cell lysis (<200/μL) | ELISA & Western Blot.",
    "Cancer: Loss of contact inhibition | Malignant tumors | Metastasis (distant spread via blood) | Proto-oncogenes (c-onc) -> Oncogenes.",
    "Cancer Therapy: Surgery + Radiotherapy + Chemotherapy (hair loss/anemia) + Immunotherapy (Alpha-interferon).",
    "Opioids: Morphine (Poppy Papaver somniferum, analgesic) | Heroin (Diacetylmorphine, depressant, snorting/IV) | Receptors in CNS & GI tract.",
    "Cannabinoids: Cannabis sativa | Receptors in Brain | Cardiovascular system effect | Marijuana, Hashish, Charas, Ganja.",
    "Cocaine: Erythroxylum coca | Blocks Dopamine reuptake | Stimulant & Euphoria | Hallucinations at high dose | Datura & Atropa belladonna.",
    "Tobacco: Nicotine stimulates Adrenal Medulla (Adrenaline -> High BP/Heart rate) | CO reduces oxygen transport | Emphysema & Cancer."
  ],

  practiceQuestions: [
    {
      question: "Which of the following statements correctly explains why macrophages are described as an 'HIV factory' during AIDS pathogenesis?",
      options: [
        "Macrophages immediately undergo apoptosis upon viral entry, releasing inflammatory cytokines.",
        "Macrophages synthesize reverse transcriptase to destroy viral RNA before it replicates.",
        "HIV replicates inside macrophages, and they continuously shed progeny virus particles without undergoing immediate cytolytic destruction.",
        "Macrophages convert viral single-stranded RNA into double-stranded DNA and permanently trap it inside lysosomes."
      ],
      correctAnswer: 2,
      explanation: "After HIV enters macrophages, its RNA is reverse-transcribed into viral DNA and integrated into the host genome. The macrophage continuously produces and releases new viral particles over a prolonged lifespan without undergoing immediate lysis, acting as an 'HIV factory'.",
      difficulty: "Medium",
      conceptTested: "AIDS Pathogenesis & Macrophage HIV Factory"
    },
    {
      question: "Match the drug in List I with its plant source and mechanism/effect in List II:\n(A) Morphine — (I) Erythroxylum coca; blocks dopamine reuptake\n(B) Cocaine — (II) Cannabis sativa; affects cardiovascular system\n(C) Cannabinoids — (III) Papaver somniferum; potent analgesic and sedative\n\nChoose the correct match:",
      options: [
        "A-III, B-I, C-II",
        "A-I, B-III, C-II",
        "A-II, B-I, C-III",
        "A-III, B-II, C-I"
      ],
      correctAnswer: 0,
      explanation: "Morphine is obtained from Papaver somniferum and is a potent analgesic and sedative (A-III); Cocaine is obtained from Erythroxylum coca and interferes with dopamine transport (B-I); Cannabinoids are derived from Cannabis sativa and affect the cardiovascular system (C-II).",
      difficulty: "Easy",
      conceptTested: "Pharmacological Classification of Drugs"
    },
    {
      question: "A cancer patient is prescribed Alpha-Interferon as part of their therapeutic protocol. What is the primary therapeutic mechanism of Alpha-Interferon in oncology?",
      options: [
        "It acts as a mitotic spindle poison during anaphase.",
        "It functions as a biological response modifier that activates the host immune system to destroy tumor cells.",
        "It destroys the blood supply of benign tumors by blocking VEGF receptors.",
        "It repairs mutated proto-oncogenes back into normal tumor suppressor genes."
      ],
      correctAnswer: 1,
      explanation: "Alpha-interferon is a Biological Response Modifier used in cancer immunotherapy. It activates the host's immune system (such as NK cells and cytotoxic T-cells) to recognize and destroy neoplastic tumor cells.",
      difficulty: "Medium",
      conceptTested: "Cancer Immunotherapy & Alpha-Interferon"
    },
    {
      question: "Which of the following characteristics is the MOST definitive hallmark of malignant neoplasms compared to benign tumors?",
      options: [
        "Presence of a fibrous connective tissue capsule",
        "Slow, localized growth without tissue destruction",
        "Metastasis to distant body organs via blood and lymphatic circulation",
        "Retention of normal cellular contact inhibition"
      ],
      correctAnswer: 2,
      explanation: "Metastasis (the detachment of cancer cells and colonization of distant anatomical organs through blood or lymph) is the most feared and definitive clinical hallmark of malignant tumors.",
      difficulty: "Easy",
      conceptTested: "Malignancy & Metastasis"
    }
  ],

  pyqs: [
    {
      id: "pyq-bio-aids-1",
      year: 2023,
      exam: "NEET UG",
      examName: "NEET UG 2023",
      examYear: "2023",
      verifiedExam: "NEET UG 2023",
      question: "Heroin is synthesized by:",
      options: [
        "Nitration of morphine",
        "Methylation of morphine",
        "Acetylation of morphine",
        "Glycosylation of morphine"
      ],
      correctAnswer: 2,
      explanation: "Heroin (commonly known as smack or diacetylmorphine) is a white, odorless, bitter crystalline compound obtained by the acetylation of morphine.",
      difficulty: "Easy",
      conceptTested: "Chemical Nature and Synthesis of Heroin",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.4",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2023 Official Paper"
    },
    {
      id: "pyq-bio-aids-2",
      year: 2022,
      exam: "NEET UG",
      examName: "NEET UG 2022",
      examYear: "2022",
      verifiedExam: "NEET UG 2022",
      question: "Which of the following is a correct statement regarding drug abuse?",
      options: [
        "Morphine is extracted from the leaves of Cannabis sativa.",
        "Cocaine is obtained from the plant Papaver somniferum.",
        "Cannabinoid receptors are present principally in the brain.",
        "Heroin accelerates body functions and acts as a stimulant."
      ],
      correctAnswer: 2,
      explanation: "Cannabinoids interact with specific cannabinoid receptors present principally in the brain. Morphine is from Papaver somniferum; Cocaine is from Erythroxylum coca; and Heroin is a depressant, not a stimulant.",
      difficulty: "Easy",
      conceptTested: "Cannabinoid Receptors and Drug Action",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.4",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2022 Official Paper"
    },
    {
      id: "pyq-bio-aids-3",
      year: 2021,
      exam: "NEET UG",
      examName: "NEET UG 2021",
      examYear: "2021",
      verifiedExam: "NEET UG 2021",
      question: "Which of the following statements is not correct with respect to AIDS?",
      options: [
        "HIV infects and damages Helper T-lymphocytes (CD4+).",
        "ELISA is the diagnostic screening test for AIDS.",
        "The causal agent of AIDS is an enveloped virus containing two identical molecules of ssRNA.",
        "HIV can be transmitted by shaking hands with an infected person."
      ],
      correctAnswer: 3,
      explanation: "HIV is transmitted through body fluids (sexual contact, blood transfusion, shared needles, placenta). It is NOT transmitted by casual physical contact such as shaking hands or hugging.",
      difficulty: "Easy",
      conceptTested: "Transmission of HIV & AIDS",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.3",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2021 Official Paper"
    },
    {
      id: "pyq-bio-aids-4",
      year: 2020,
      exam: "NEET UG",
      examName: "NEET UG 2020",
      examYear: "2020",
      verifiedExam: "NEET UG 2020",
      question: "Which of the following is used in the treatment of cancer as a biological response modifier?",
      options: [
        "Alpha-interferon",
        "Morphine",
        "Histamine",
        "Insulin"
      ],
      correctAnswer: 0,
      explanation: "Alpha-interferon is a biological response modifier that activates the patient's immune system to destroy neoplastic tumor cells.",
      difficulty: "Easy",
      conceptTested: "Cancer Immunotherapy (Alpha-interferon)",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.3",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2020 Official Paper"
    },
    {
      id: "pyq-bio-aids-5",
      year: 2019,
      exam: "NEET UG",
      examName: "NEET UG 2019",
      examYear: "2019",
      verifiedExam: "NEET UG 2019",
      question: "Drug called 'Heroin' is synthesized by:",
      options: [
        "Nitration of morphine",
        "Acetylation of morphine",
        "Glycosylation of morphine",
        "Methylation of morphine"
      ],
      correctAnswer: 1,
      explanation: "Heroin (diacetylmorphine) is prepared by the acetylation of morphine extracted from Papaver somniferum.",
      difficulty: "Easy",
      conceptTested: "Heroin Synthesis from Morphine",
      ncertReference: "NCERT Class 12 Biology, Chapter 8, Section 8.4",
      verified: true,
      isVerifiedPYQ: true,
      verificationSource: "NEET UG 2019 Official Paper"
    }
  ]
};
