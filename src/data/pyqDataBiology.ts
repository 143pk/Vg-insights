import { PYQQuestion } from './pyqDatabase';

export const BIOLOGY_PYQS_ARCHIVE: PYQQuestion[] = [
  // ================= 2026 / 2025 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2026-1',
    year: 2026,
    subject: 'biology',
    chapterId: 'biotechnology-principles-and-processes',
    chapterTitle: 'Biotechnology: Principles and Processes',
    topicId: 'recombinant-dna-technology',
    topicTitle: 'Recombinant DNA Technology & Restriction Enzymes',
    question: 'During gel electrophoresis, DNA fragments move towards the anode because:',
    options: [
      'DNA is positively charged due to histone proteins',
      'DNA is negatively charged due to phosphate backbone groups',
      'DNA is neutral and moves solely by molecular weight gradient',
      'DNA has basic nitrogenous bases that attract positive electrodes'
    ],
    correctIndex: 1,
    explanation: 'DNA fragments are negatively charged polyanions because of the negatively charged oxygen atoms on phosphate groups (PO₄³⁻) in the phosphodiester backbone. Hence, under an electric field in agarose gel electrophoresis, DNA fragments migrate toward the positive electrode (anode).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 11, Page 198'
  },
  {
    id: 'bio-pyq-2025-1',
    year: 2025,
    subject: 'biology',
    chapterId: 'molecular-basis-of-inheritance',
    chapterTitle: 'Molecular Basis of Inheritance',
    topicId: 'lac-operon',
    topicTitle: 'Regulation of Gene Expression: Lac Operon',
    question: 'In the Lac Operon model of E. coli, which gene synthesizes the repressor protein constitutively?',
    options: [
      'z gene',
      'y gene',
      'a gene',
      'i gene'
    ],
    correctIndex: 3,
    explanation: 'The *i* gene (inhibitor/repressor gene) synthesizes the Lac repressor protein constitutively (all the time). In the absence of lactose (inducer), the repressor binds to the operator region (O) and prevents RNA polymerase from transcribing the operon.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 6, Page 116'
  },
  {
    id: 'bio-pyq-2025-2',
    year: 2025,
    subject: 'biology',
    chapterId: 'human-health-and-disease',
    chapterTitle: 'Human Health and Disease',
    topicId: 'immunity',
    topicTitle: 'Innate & Acquired Immunity, Antibodies',
    question: 'Colostrum, the yellowish fluid secreted by mother during initial days of lactation, is abundant in which immunoglobulin that confers passive immunity to the infant?',
    options: [
      'IgG',
      'IgA',
      'IgM',
      'IgE'
    ],
    correctIndex: 1,
    explanation: 'Colostrum contains abundant antibodies of the IgA class (secretory IgA) to protect the newborn infant against gastrointestinal and respiratory pathogens. This is a classic example of naturally acquired passive immunity.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 8, Page 152'
  },

  // ================= 2024 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2024-1',
    year: 2024,
    subject: 'biology',
    chapterId: 'principles-of-inheritance-and-variation',
    chapterTitle: 'Principles of Inheritance and Variation',
    topicId: 'chromosomal-theory',
    topicTitle: 'Linkage, Recombination & Sex Determination',
    question: 'Which of the following statements about Down\'s syndrome is CORRECT?',
    options: [
      'It is an allosomal monosomy (45, XO)',
      'Affected individual has gynecomastia and is sterile male (47, XXY)',
      'Affected individual has short stature, round head, furrowed tongue and broad palm with characteristic palm crease',
      'It is caused by the deletion of short arm of chromosome 5'
    ],
    correctIndex: 2,
    explanation: 'Down\'s syndrome (Trisomy 21) was first described by Langdon Down (1866). Key clinical features include: short stature, small round head, furrowed tongue, partially open mouth, broad palm with distinct palm crease (simian crease), and slow physical/mental development.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 5, Page 91'
  },
  {
    id: 'bio-pyq-2024-2',
    year: 2024,
    subject: 'biology',
    chapterId: 'ecosystem',
    chapterTitle: 'Ecosystem',
    topicId: 'ecological-pyramids',
    topicTitle: 'Energy Flow & Ecological Pyramids',
    question: 'The pyramid of energy in any ecosystem is ALWAYS:',
    options: [
      'Inverted in marine ecosystems and upright on land',
      'Always upright because energy is lost as heat at each trophic transfer',
      'Spindle-shaped in forest ecosystems',
      'Inverted when tree is the primary producer'
    ],
    correctIndex: 1,
    explanation: 'Pyramid of energy is ALWAYS upright, can never be inverted, because when energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat in metabolic processes according to Lindeman\'s 10% law.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 14, Page 249'
  },
  {
    id: 'bio-pyq-2024-3',
    year: 2024,
    subject: 'biology',
    chapterId: 'cell-cycle-and-cell-division',
    chapterTitle: 'Cell Cycle and Cell Division',
    topicId: 'meiosis',
    topicTitle: 'Stages of Meiosis I & II',
    question: 'The enzyme responsible for crossing over and genetic recombination during Pachytene stage of Meiosis I is:',
    options: [
      'DNA ligase',
      'DNA Polymerase',
      'Recombinase',
      'RNA Polymerase'
    ],
    correctIndex: 2,
    explanation: 'Crossing over is an enzyme-mediated process mediated by the enzyme complex called *recombinase*. Recombination nodules appear at Pachytene stage where non-sister chromatids of homologous chromosomes exchange genetic material.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 10, Page 168'
  },

  // ================= 2023 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2023-bio-1',
    year: 2023,
    subject: 'biology',
    chapterId: 'sexual-reproduction-in-flowering-plants',
    chapterTitle: 'Sexual Reproduction in Flowering Plants',
    topicId: 'double-fertilization',
    topicTitle: 'Double Fertilization & Endosperm Development',
    question: 'What is the ploidy level of cells of the Perisperm and Endosperm in angiospermic seeds?',
    options: [
      'Perisperm (2n), Endosperm (3n)',
      'Perisperm (n), Endosperm (3n)',
      'Perisperm (3n), Endosperm (2n)',
      'Perisperm (2n), Endosperm (2n)'
    ],
    correctIndex: 0,
    explanation: 'Perisperm is the persistent residual nucellus (maternal tissue, diploid = 2n, e.g., in Black Pepper and Beet). Endosperm in angiosperms is formed by triple fusion (one haploid male gamete + diploid secondary nucleus), hence triploid (3n).',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 12, Chapter 2, Page 36'
  },
  {
    id: 'bio-pyq-2023-bio-2',
    year: 2023,
    subject: 'biology',
    chapterId: 'human-reproduction',
    chapterTitle: 'Human Reproduction',
    topicId: 'hormonal-control',
    topicTitle: 'Menstrual Cycle & Hormonal Regulation',
    question: 'Which hormone surge triggers ovulation and rupture of the Graafian follicle around day 14 of menstrual cycle?',
    options: [
      'Progesterone surge',
      'Estrogen drop',
      'LH (Luteinizing Hormone) surge',
      'Oxytocin release'
    ],
    correctIndex: 2,
    explanation: 'Rapid secretion of LH leading to its maximum level during the mid-cycle (called LH surge) induces rupture of the mature Graafian follicle and thereby the release of ovum (ovulation).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 3, Page 51'
  },

  // ================= 2022 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2022-bio-1',
    year: 2022,
    subject: 'biology',
    chapterId: 'morphology-of-flowering-plants',
    chapterTitle: 'Morphology of Flowering Plants',
    topicId: 'root-stem-leaf-modifications',
    topicTitle: 'Modifications of Root, Stem and Leaf',
    question: 'Pneumatophores (respiratory roots) showing negative geotropism are characteristically observed in:',
    options: [
      'Rhizophora in halophytic swampy areas',
      'Opuntia in arid zones',
      'Eichhornia in aquatic ponds',
      'Pisum sativum in garden soil'
    ],
    correctIndex: 0,
    explanation: 'In plants growing in swampy/saline areas such as *Rhizophora*, many roots come out vertically upwards of the ground and grow upwards (negative geotropism). These are called pneumatophores and help to get oxygen for respiration.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 5, Page 67'
  },
  {
    id: 'bio-pyq-2022-bio-2',
    year: 2022,
    subject: 'biology',
    chapterId: 'respiration-in-plants',
    chapterTitle: 'Respiration in Plants',
    topicId: 'glycolysis-krebs-cycle',
    topicTitle: 'Glycolysis, Krebs Cycle & Oxidative Phosphorylation',
    question: 'What is the Respiratory Quotient (RQ) when tripalmitin (a fat) is used as respiratory substrate?',
    options: [
      '1.0',
      '0.7',
      '0.9',
      'Greater than 1.0'
    ],
    correctIndex: 1,
    explanation: 'For fats such as tripalmitin (2 C₅₁H₉₈O₆ + 145 O₂ → 102 CO₂ + 98 H₂O + Energy), RQ = Volume of CO₂ evolved / Volume of O₂ consumed = 102 / 145 = 0.7.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 14, Page 237'
  },

  // ================= 2021 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2021-bio-1',
    year: 2021,
    subject: 'biology',
    chapterId: 'photosynthesis-in-higher-plants',
    chapterTitle: 'Photosynthesis in Higher Plants',
    topicId: 'c4-pathway',
    topicTitle: 'C4 Pathway (Hatch & Slack) & Kranz Anatomy',
    question: 'The primary CO₂ acceptor in C₄ plants is located in mesophyll cells and is:',
    options: [
      'RuBP (Ribulose 1,5-bisphosphate)',
      'PEP (Phosphoenolpyruvate)',
      'PGA (Phosphoglyceric acid)',
      'OAA (Oxaloacetic acid)'
    ],
    correctIndex: 1,
    explanation: 'In C₄ plants, the primary CO₂ acceptor is a 3-carbon molecule Phosphoenolpyruvate (PEP) and is present in the mesophyll cells. The reaction is catalyzed by PEP carboxylase (PEPcase) yielding 4-carbon Oxaloacetic acid (OAA).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 13, Page 218'
  },
  {
    id: 'bio-pyq-2021-bio-2',
    year: 2021,
    subject: 'biology',
    chapterId: 'biotechnology-and-its-applications',
    chapterTitle: 'Biotechnology and its Applications',
    topicId: 'rnai',
    topicTitle: 'RNA Interference (RNAi) & Pest Resistance',
    question: 'RNA interference (RNAi) is a gene silencing mechanism that uses which molecule to prevent mRNA translation in eukaryotes?',
    options: [
      'Single-stranded DNA',
      'Double-stranded RNA (dsRNA)',
      'Single-stranded snRNA',
      'Ribosomal rRNA'
    ],
    correctIndex: 1,
    explanation: 'RNAi takes place in all eukaryotic organisms as a method of cellular defense. It involves silencing of a specific mRNA due to a complementary double-stranded RNA (dsRNA) molecule that binds to and prevents translation (cleaves the target mRNA via RISC complex).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 12, Page 209'
  },

  // ================= 2020 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2020-bio-1',
    year: 2020,
    subject: 'biology',
    chapterId: 'organism-and-populations',
    chapterTitle: 'Organisms and Populations',
    topicId: 'adaptations-diapause',
    topicTitle: 'Suspended Development, Diapause & Hibernation',
    question: 'Under unfavorable conditions, many zooplankton species in lakes and ponds enter a state of suspended development called:',
    options: [
      'Aestivation',
      'Hibernation',
      'Diapause',
      'Dormancy'
    ],
    correctIndex: 2,
    explanation: 'Under unfavorable conditions, many zooplankton species in lakes and ponds are known to enter Diapause, a stage of suspended physiological development.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 13, Page 225'
  },
  {
    id: 'bio-pyq-2020-bio-2',
    year: 2020,
    subject: 'biology',
    chapterId: 'locomotion-and-movement',
    chapterTitle: 'Locomotion and Movement',
    topicId: 'sliding-filament-theory',
    topicTitle: 'Mechanism of Muscle Contraction & Sarcomere',
    question: 'During skeletal muscle contraction, which of the following events takes place?',
    options: [
      'A band shortens while I band remains constant',
      'I band shortens, H zone disappears, while A band retains length',
      'Actin filaments shorten while myosin filaments lengthen',
      'Z-lines move further apart'
    ],
    correctIndex: 1,
    explanation: 'According to sliding filament theory, during contraction, thin actin filaments slide over thick myosin filaments. As a result, the \'I\' bands shorten, \'H\' zone gets reduced or vanishes, the two \'Z\' lines come closer, while the \'A\' band retains its original length.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 20, Page 307'
  },

  // ================= 2019 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2019-bio-1',
    year: 2019,
    subject: 'biology',
    chapterId: 'neural-control-and-coordination',
    chapterTitle: 'Neural Control and Coordination',
    topicId: 'nerve-impulse-transmission',
    topicTitle: 'Resting Membrane Potential & Action Potential',
    question: 'Resting membrane potential of an unexcited nerve axon is maintained predominantly by:',
    options: [
      'Voltage-gated calcium channels',
      'Active Na⁺/K⁺ ATPase pump (3 Na⁺ pumped out for 2 K⁺ pumped in)',
      'Equilibrium diffusion of chloride ions',
      'Passive efflux of sodium ions'
    ],
    correctIndex: 1,
    explanation: 'The ionic gradients across the resting membrane are maintained by active transport of ions by the sodium-potassium pump, which transports 3 Na⁺ outwards for 2 K⁺ into the cell per ATP hydrolyzed, keeping the axonal inside negatively charged (-70 mV).',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 21, Page 317'
  },
  {
    id: 'bio-pyq-2019-bio-2',
    year: 2019,
    subject: 'biology',
    chapterId: 'plant-kingdom',
    chapterTitle: 'Plant Kingdom',
    topicId: 'bryophytes-pteridophytes',
    topicTitle: 'Life Cycles & Alternation of Generations',
    question: 'Which group of plants represents the first terrestrial plants to possess vascular tissues (xylem and phloem)?',
    options: [
      'Algae (Thallophyta)',
      'Bryophytes (Mosses & Liverworts)',
      'Pteridophytes (Ferns & Horsetails)',
      'Gymnosperms'
    ],
    correctIndex: 2,
    explanation: 'Pteridophytes are the first terrestrial vascular cryptogams to possess vascular tissues — xylem (without vessels in most) and phloem (without companion cells and sieve tubes).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 3, Page 36'
  },

  // ================= 2018 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2018-bio-1',
    year: 2018,
    subject: 'biology',
    chapterId: 'organism-and-populations',
    chapterTitle: 'Organisms and Populations',
    topicId: 'ecological-niche',
    topicTitle: 'Habitat vs Ecological Niche',
    question: 'Niche is defined as:',
    options: [
      'The physical space where an organism lives',
      'The functional role played by the organism where it lives, along with the precise range of conditions it can tolerate',
      'The geographical range of a species',
      'The abiotic factors influencing an organism'
    ],
    correctIndex: 1,
    explanation: 'Each organism has an invariably defined range of conditions that it can tolerate, diversity in the resources it utilizes, and a distinct functional role in the ecological system, all these together comprise its ecological niche (NCERT Page 221).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 13, Page 221'
  },
  {
    id: 'bio-pyq-2018-bio-2',
    year: 2018,
    subject: 'biology',
    chapterId: 'chemical-coordination-and-integration',
    chapterTitle: 'Chemical Coordination and Integration',
    topicId: 'thyroid-parathyroid',
    topicTitle: 'Hormones of Thyroid & Parathyroid Glands',
    question: 'Which hormone stimulates bone resorption (demineralization) to increase blood calcium (Ca²⁺) levels?',
    options: [
      'Calcitonin (Thyrocalcitonin)',
      'Parathyroid Hormone (PTH)',
      'Aldosterone',
      'Thyroxine (T4)'
    ],
    correctIndex: 1,
    explanation: 'Parathyroid hormone (PTH) is a hypercalcemic hormone that stimulates bone resorption (dissolution/demineralization), increases reabsorption of Ca²⁺ by renal tubules, and stimulates Ca²⁺ absorption from digested food, increasing blood Ca²⁺ levels.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 22, Page 335'
  },

  // ================= 2017 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2017-bio-1',
    year: 2017,
    subject: 'biology',
    chapterId: 'cell-the-unit-of-life',
    chapterTitle: 'Cell: The Unit of Life',
    topicId: 'cell-membrane-fluid-mosaic',
    topicTitle: 'Fluid Mosaic Model & Membrane Structure',
    question: 'The quasi-fluid nature of membrane lipid bilayer according to Singer and Nicolson\'s Fluid Mosaic Model enables:',
    options: [
      'Lateral movement of proteins within overall bilayer',
      'Flip-flop movement of all integral proteins freely',
      'Complete impermeability to water-soluble solutes',
      'Permanent rigid crystal structure'
    ],
    correctIndex: 0,
    explanation: 'The quasi-fluid nature of lipid enables lateral movement of proteins within the overall bilayer. This ability to move within the membrane is measured as its fluidity, which is important for cell growth, formation of intercellular junctions, secretion, and endocytosis.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 8, Page 132'
  },
  {
    id: 'bio-pyq-2017-bio-2',
    year: 2017,
    subject: 'biology',
    chapterId: 'anatomy-of-flowering-plants',
    chapterTitle: 'Anatomy of Flowering Plants',
    topicId: 'secondary-growth-wood',
    topicTitle: 'Vascular Cambium, Heartwood & Sapwood',
    question: 'Heartwood differs from sapwood in:',
    options: [
      'Being light colored and conducting water efficiently',
      'Having living parenchymatous cells actively transporting sap',
      'Having dark, non-functional dead elements with tyloses and deposits of tannins, resins, oils',
      'Lacking tracheary elements completely'
    ],
    correctIndex: 2,
    explanation: 'The greater part of secondary xylem in old trees is dark brown due to deposition of organic compounds (tannins, resins, gums). These substances make it hard, durable, and resistant to microorganisms. This region comprises dead elements with highly lignified walls and is called heartwood (duramen).',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 6, Page 96'
  },

  // ================= 2016 NEET UG BIOLOGY =================
  {
    id: 'bio-pyq-2016-bio-1',
    year: 2016,
    subject: 'biology',
    chapterId: 'reproductive-health',
    chapterTitle: 'Reproductive Health',
    topicId: 'contraception',
    topicTitle: 'Contraceptive Methods & IUDs',
    question: 'Which of the following is a hormone-releasing Intrauterine Device (IUD)?',
    options: [
      'Lippes loop',
      'CuT',
      'Multiload 375',
      'LNG-20'
    ],
    correctIndex: 3,
    explanation: 'LNG-20 and Progestasert are hormone-releasing IUDs. They make the uterus unsuitable for implantation and the cervix hostile to the sperms. CuT, Cu7, and Multiload 375 are copper-releasing IUDs; Lippes loop is a non-medicated IUD.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 4, Page 60'
  },
  {
    id: 'bio-pyq-2016-bio-2',
    year: 2016,
    subject: 'biology',
    chapterId: 'excretory-products-and-their-elimination',
    chapterTitle: 'Excretory Products and their Elimination',
    topicId: 'counter-current-mechanism',
    topicTitle: 'Counter Current Mechanism & Concentration of Urine',
    question: 'The high osmolarity (up to 1200 mOsmol/L) of the inner medullary interstitium in mammalian kidney is maintained by:',
    options: [
      'Active transport of glucose and amino acids',
      'Counter-current mechanism between Henle\'s loop and Vasa recta transporting NaCl and Urea',
      'Ultrafiltration at Bowman\'s capsule',
      'Secretion of renin by juxtaglomerular apparatus'
    ],
    correctIndex: 1,
    explanation: 'The proximity between Henle\'s loop and vasa recta, as well as the counter current in them, helps in maintaining an increasing osmolarity towards inner medullary interstitium (300 to 1200 mOsmol/L). This gradient is mainly caused by NaCl and urea.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 19, Page 296'
  },

  // ================= 2015 AIPMT / NEET BIOLOGY =================
  {
    id: 'bio-pyq-2015-bio-1',
    year: 2015,
    subject: 'biology',
    chapterId: 'biodiversity-and-conservation',
    chapterTitle: 'Biodiversity and Conservation',
    topicId: 'in-situ-ex-situ',
    topicTitle: 'In-situ vs Ex-situ Conservation Strategies',
    question: 'Which of the following is an EX-SITU conservation method for endangered flora and fauna?',
    options: [
      'National Parks',
      'Biosphere Reserves',
      'Sacred Groves',
      'Cryopreservation of gametes in liquid nitrogen (-196°C)'
    ],
    correctIndex: 3,
    explanation: 'In ex-situ conservation, threatened animals and plants are taken out from their natural habitat and placed in special settings (e.g., Zoological parks, Botanical gardens, Wildlife Safari parks, Seed banks, and Cryopreservation at -196°C in liquid nitrogen). National parks and Biosphere reserves are in-situ.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 15, Page 267'
  },
  {
    id: 'bio-pyq-2015-bio-2',
    year: 2015,
    subject: 'biology',
    chapterId: 'digestion-and-absorption',
    chapterTitle: 'Digestion and Absorption',
    topicId: 'gastric-enzymes',
    topicTitle: 'Digestive Enzymes & Secretions',
    question: 'Parietal (Oxyntic) cells in the gastric mucosa secrete:',
    options: [
      'Pepsinogen and mucus',
      'Hydrochloric acid (HCl) and Castle\'s intrinsic factor',
      'Trypsinogen and amylase',
      'Bile salts and bilirubin'
    ],
    correctIndex: 1,
    explanation: 'Gastric glands have Parietal or Oxyntic cells that secrete HCl (provides acidic pH 1.8 for pepsin) and Intrinsic factor (Castle\'s factor essential for absorption of Vitamin B₁₂ in the ileum).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 16, Page 260'
  },

  // ================= 2014 AIPMT / NEET BIOLOGY =================
  {
    id: 'bio-pyq-2014-bio-1',
    year: 2014,
    subject: 'biology',
    chapterId: 'evolution',
    chapterTitle: 'Evolution',
    topicId: 'hardy-weinberg-equilibrium',
    topicTitle: 'Hardy-Weinberg Principle & Allele Frequencies',
    question: 'In a population at Hardy-Weinberg equilibrium, the frequency of recessive allele (q) is 0.4. What is the percentage of heterozygous carriers (2pq) in this population?',
    options: [
      '16%',
      '24%',
      '48%',
      '36%'
    ],
    correctIndex: 2,
    explanation: 'According to Hardy-Weinberg law: p + q = 1. Given q = 0.4, therefore dominant allele frequency p = 1 - 0.4 = 0.6. The frequency of heterozygous individuals is 2pq = 2 × (0.6) × (0.4) = 0.48 = 48%.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 12, Chapter 7, Page 137'
  },
  {
    id: 'bio-pyq-2014-bio-2',
    year: 2014,
    subject: 'biology',
    chapterId: 'biological-classification',
    chapterTitle: 'Biological Classification',
    topicId: 'viruses-viroids-prions',
    topicTitle: 'Viruses, Viroids & Prions Characteristics',
    question: 'Viroids differ from viruses in having:',
    options: [
      'DNA molecules with protein coat',
      'Free infectious RNA molecules without a protein coat',
      'Double-stranded RNA wrapped in capsomeres',
      'Infectious proteinaceous fibrils without nucleic acid'
    ],
    correctIndex: 1,
    explanation: 'Viroids were discovered by T.O. Diener in 1971 as an infectious agent that was smaller than viruses and caused potato spindle tuber disease. It was found to be a free RNA; it lacked the protein coat that is found in viruses, hence the name viroid.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 2, Page 27'
  }
];
