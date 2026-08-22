import { PYQQuestion } from './pyqDatabase';

export const CHEMISTRY_PYQS_ARCHIVE: PYQQuestion[] = [
  // ================= 2026 / 2025 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2026-1',
    year: 2026,
    subject: 'chemistry',
    chapterId: 'chemical-bonding-and-molecular-structure',
    chapterTitle: 'Chemical Bonding and Molecular Structure',
    topicId: 'vsepr-molecular-geometry',
    topicTitle: 'VSEPR Theory, Hybridization & Dipole Moment',
    question: 'According to VSEPR theory, the shape and number of lone pairs on the central xenon atom in XeF₄ are respectively:',
    options: [
      'Tetrahedral, 0 lone pairs',
      'Square planar, 2 lone pairs',
      'See-saw, 1 lone pair',
      'Octahedral, 0 lone pairs'
    ],
    correctIndex: 1,
    explanation: 'For XeF₄, Xenon has 8 valence electrons. 4 electrons form single bonds with four fluorine atoms, leaving 4 non-bonding valence electrons (2 lone pairs). Total steric number = 4 (bond pairs) + 2 (lone pairs) = 6 (sp³d² hybridization, octahedral electron geometry). To minimize lp-lp repulsions, the two lone pairs occupy trans-axial positions, resulting in a Square Planar molecular geometry.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 4, Page 114'
  },
  {
    id: 'chem-pyq-2025-1',
    year: 2025,
    subject: 'chemistry',
    chapterId: 'coordination-compounds',
    chapterTitle: 'Coordination Compounds',
    topicId: 'crystal-field-theory',
    topicTitle: 'Crystal Field Theory & Magnetic Moments',
    question: 'The spin-only magnetic moment of [Fe(CN)₆]³⁻ complex ion (Fe³⁺, d⁵ system with strong field CN⁻ ligand) is:',
    options: [
      '1.73 BM',
      '5.92 BM',
      '4.90 BM',
      '0.00 BM'
    ],
    correctIndex: 0,
    explanation: 'Fe³⁺ has electronic configuration [Ar] 3d⁵. Cyanide (CN⁻) is a strong field ligand producing high crystal field splitting (Δ_o > P), forcing pairing of d-electrons in t₂g orbitals: t₂g⁵ eg⁰. Number of unpaired electrons n = 1. Spin-only magnetic moment μ = √(n(n+2)) = √(1 × 3) = √3 = 1.73 BM.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 12, Chapter 9, Page 254'
  },
  {
    id: 'chem-pyq-2025-2',
    year: 2025,
    subject: 'chemistry',
    chapterId: 'aldehydes-ketones-and-carboxylic-acids',
    chapterTitle: 'Aldehydes, Ketones and Carboxylic Acids',
    topicId: 'aldol-cannizzaro-reactions',
    topicTitle: 'Aldol Condensation & Cannizzaro Reaction',
    question: 'Which of the following compounds will undergo Cannizzaro reaction upon heating with concentrated (50%) NaOH solution?',
    options: [
      'Acetaldehyde (CH₃CHO)',
      'Acetone (CH₃COCH₃)',
      'Benzaldehyde (C₆H₅CHO)',
      'Propionaldehyde (CH₃CH₂CHO)'
    ],
    correctIndex: 2,
    explanation: 'Aldehydes lacking α-hydrogen atoms (such as Benzaldehyde C₆H₅CHO, Formaldehyde HCHO, and Trimethylacetaldehyde) undergo disproportionation (Cannizzaro reaction) in concentrated alkali to yield one molecule of alcohol and one molecule of carboxylic acid salt.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 12, Page 370'
  },

  // ================= 2024 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2024-1',
    year: 2024,
    subject: 'chemistry',
    chapterId: 'electrochemistry',
    chapterTitle: 'Electrochemistry',
    topicId: 'nernst-equation-kohlrausch',
    topicTitle: 'Nernst Equation, EMF of Cell & Gibbs Free Energy',
    question: 'For a galvanic cell reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) with standard EMF E°_cell = 1.10 V at 298 K, the standard Gibbs free energy change ΔG° is (take F = 96500 C/mol):',
    options: [
      '-212.3 kJ/mol',
      '+212.3 kJ/mol',
      '-106.15 kJ/mol',
      '-424.6 kJ/mol'
    ],
    correctIndex: 0,
    explanation: 'The number of moles of electrons transferred n = 2. From thermodynamic relation: ΔG° = -n F E°_cell = -2 × 96500 C/mol × 1.10 V = -212300 J/mol = -212.3 kJ/mol.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 3, Page 72'
  },
  {
    id: 'chem-pyq-2024-2',
    year: 2024,
    subject: 'chemistry',
    chapterId: 'd-and-f-block-elements',
    chapterTitle: 'd- and f-Block Elements',
    topicId: 'lanthanoid-contraction',
    topicTitle: 'Lanthanoid Contraction & Consequence on Radii',
    question: 'The atomic/ionic radii of Zirconium (Zr, 4d series) and Hafnium (Hf, 5d series) are almost identical (Zr ≈ 160 pm, Hf ≈ 159 pm) primarily due to:',
    options: [
      'Diagonal relationship',
      'Inert pair effect',
      'Lanthanoid contraction caused by poor shielding of 4f electrons',
      'Screening effect of d-orbitals'
    ],
    correctIndex: 2,
    explanation: 'Due to the filling of 4f subshell before 5d series, the imperfect shielding of one 4f electron by another results in a regular decrease in size called Lanthanoid Contraction. As a result, 4d and 5d transition elements of same group (e.g. Zr and Hf, Nb and Ta) have virtually identical radii.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 8, Page 220'
  },

  // ================= 2023 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2023-chem-1',
    year: 2023,
    subject: 'chemistry',
    chapterId: 'solutions',
    chapterTitle: 'Solutions',
    topicId: 'colligative-properties-raoult',
    topicTitle: 'Raoult\'s Law, Elevation of Boiling Point & Vant Hoff Factor',
    question: 'An aqueous solution of 0.1 M BaCl₂ will have the highest boiling point elevation compared to 0.1 M solutions of glucose, urea, and NaCl because:',
    options: [
      'It has molecular mass lower than glucose',
      'It is non-volatile covalent compound',
      'Its Van\'t Hoff factor i = 3 (dissociates into Ba²⁺ + 2 Cl⁻)',
      'It forms azeotrope with water'
    ],
    correctIndex: 2,
    explanation: 'Elevation in boiling point ΔT_b = i × K_b × m. For non-electrolytes (glucose, urea), i = 1. For NaCl, i = 2. For BaCl₂, i = 3 (1 Ba²⁺ + 2 Cl⁻). Since molality is equal, BaCl₂ produces maximum effective particle concentration and greatest ΔT_b.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 2, Page 53'
  },
  {
    id: 'chem-pyq-2023-chem-2',
    year: 2023,
    subject: 'chemistry',
    chapterId: 'chemical-kinetics',
    chapterTitle: 'Chemical Kinetics',
    topicId: 'integrated-rate-equations',
    topicTitle: 'First Order Reaction Kinetics & Half-Life',
    question: 'For a first-order chemical reaction, the time required for 99.9% completion (t_99.9%) is approximately how many times its half-life (t_1/2)?',
    options: [
      '2 times',
      '3 times',
      '10 times',
      '20 times'
    ],
    correctIndex: 2,
    explanation: 'For a 1st order reaction: t = (2.303 / k) log([A]₀ / [A]). For 99.9% completion: [A] = 0.1% [A]₀ = 10⁻³ [A]₀ ⇒ t_99.9% = (2.303 / k) log(10³) = 3 × (2.303 / k) = 3 × (2.303 / 0.693 × t_1/2) ≈ 10 × t_1/2.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 12, Chapter 4, Page 108'
  },

  // ================= 2022 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2022-chem-1',
    year: 2022,
    subject: 'chemistry',
    chapterId: 'organic-chemistry-some-basic-principles-and-techniques',
    chapterTitle: 'Organic Chemistry: Basic Principles & Techniques',
    topicId: 'carbocation-stability-hyperconjugation',
    topicTitle: 'Inductive Effect, Hyperconjugation & Carbocation Stability',
    question: 'The correct decreasing order of carbocation stability is:',
    options: [
      'Tertiary (3°) > Secondary (2°) > Primary (1°) > Methyl',
      'Methyl > Primary (1°) > Secondary (2°) > Tertiary (3°)',
      'Secondary (2°) > Tertiary (3°) > Primary (1°) > Methyl',
      'Primary (1°) > Secondary (2°) > Tertiary (3°) > Methyl'
    ],
    correctIndex: 0,
    explanation: 'Carbocation stability is stabilized by +I (inductive) effect of alkyl groups and hyperconjugation (α-C-H no-bond resonance). Tertiary carbocation (CH₃)₃C⁺ has 9 α-hydrogens, secondary (CH₃)₂CH⁺ has 6 α-hydrogens, primary CH₃CH₂⁺ has 3 α-hydrogens. Stability order: 3° > 2° > 1° > Methyl.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 12, Page 344'
  },
  {
    id: 'chem-pyq-2022-chem-2',
    year: 2022,
    subject: 'chemistry',
    chapterId: 'p-block-elements',
    chapterTitle: 'p-Block Elements',
    topicId: 'halogens-noble-gases',
    topicTitle: 'Oxoacids of Halogens & Interhalogens',
    question: 'Which of the following noble gases forms the maximum number of chemical compounds (such as XeF₂, XeF₄, XeF₆, XeOF₄)?',
    options: [
      'Helium (He)',
      'Neon (Ne)',
      'Argon (Ar)',
      'Xenon (Xe)'
    ],
    correctIndex: 3,
    explanation: 'Neil Bartlett in 1962 prepared the first noble gas compound Xe⁺[PtF₆]⁻ after realizing that the first ionization enthalpy of molecular oxygen (1175 kJ/mol) is very close to that of Xenon (1170 kJ/mol). Xenon has lower ionization enthalpy and available empty 5d orbitals.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 7, Page 206'
  },

  // ================= 2021 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2021-chem-1',
    year: 2021,
    subject: 'chemistry',
    chapterId: 'haloalkanes-and-haloarenes',
    chapterTitle: 'Haloalkanes and Haloarenes',
    topicId: 'sn1-sn2-mechanisms',
    topicTitle: 'SN1 vs SN2 Nucleophilic Substitution Mechanisms',
    question: 'The reaction of optically active 2-bromooctane with aqueous hydroxide ion (OH⁻) via SN2 mechanism yields 2-octanol with:',
    options: [
      'Complete inversion of stereochemical configuration (Walden Inversion)',
      'Complete retention of configuration',
      'Racemic mixture (50% retention + 50% inversion)',
      'Complete loss of optical activity due to carbocation intermediate'
    ],
    correctIndex: 0,
    explanation: 'SN2 (bimolecular nucleophilic substitution) is a concerted single-step mechanism where the nucleophile attacks from the side opposite to the leaving group (backside attack). This leads to 100% stereochemical inversion of configuration, known as Walden inversion.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 10, Page 303'
  },
  {
    id: 'chem-pyq-2021-chem-2',
    year: 2021,
    subject: 'chemistry',
    chapterId: 'equilibrium',
    chapterTitle: 'Equilibrium',
    topicId: 'le-chatelier-buffer-ph',
    topicTitle: 'Buffer Solutions & Henderson-Hasselbalch Equation',
    question: 'A basic buffer solution can be prepared by mixing equimolar amounts of:',
    options: [
      'Weak base (NH₄OH) and its salt with a strong acid (NH₄Cl)',
      'Strong base (NaOH) and strong acid (HCl)',
      'Weak acid (CH₃COOH) and weak base (NH₄OH)',
      'Strong base (KOH) and salt (KCl)'
    ],
    correctIndex: 0,
    explanation: 'A basic buffer consists of a mixture of a weak base and its salt with a strong acid (e.g., NH₄OH + NH₄Cl). An acidic buffer consists of a weak acid and its salt with a strong base (e.g., CH₃COOH + CH₃COONa).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 7, Page 226'
  },

  // ================= 2020 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2020-chem-1',
    year: 2020,
    subject: 'chemistry',
    chapterId: 'structure-of-atom',
    chapterTitle: 'Structure of Atom',
    topicId: 'quantum-numbers-orbitals',
    topicTitle: 'Quantum Numbers, Aufbau Principle & Pauli Exclusion',
    question: 'The maximum number of electrons that can be accommodated in a subshell with azimuthal quantum number l = 3 (f-subshell) is:',
    options: [
      '6',
      '10',
      '14',
      '18'
    ],
    correctIndex: 2,
    explanation: 'The number of orbitals in a subshell is given by (2l + 1). For l = 3, number of orbitals = 2(3) + 1 = 7 orbitals. According to Pauli\'s Exclusion Principle, each orbital can hold at most 2 electrons with opposite spins. Maximum electrons = 2 × (2l + 1) = 2 × 7 = 14 electrons.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 2, Page 57'
  },
  {
    id: 'chem-pyq-2020-chem-2',
    year: 2020,
    subject: 'chemistry',
    chapterId: 'thermodynamics',
    chapterTitle: 'Thermodynamics (Chemistry)',
    topicId: 'gibbs-free-energy-spontaneity',
    topicTitle: 'Enthalpy, Entropy & Spontaneity Criterion',
    question: 'A chemical reaction is spontaneous at ALL temperatures if:',
    options: [
      'ΔH < 0 (exothermic) and ΔS > 0 (entropy increases)',
      'ΔH > 0 and ΔS < 0',
      'ΔH > 0 and ΔS = 0',
      'ΔH < 0 and ΔS < 0 at very high temperatures'
    ],
    correctIndex: 0,
    explanation: 'From Gibbs-Helmholtz equation: ΔG = ΔH - T ΔS. When ΔH is negative (negative value) and ΔS is positive (so -T ΔS is always negative), ΔG is strictly negative (< 0) regardless of the magnitude of absolute temperature T. Hence, the process is spontaneous at all temperatures.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 6, Page 178'
  },

  // ================= 2019 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2019-chem-1',
    year: 2019,
    subject: 'chemistry',
    chapterId: 'amines',
    chapterTitle: 'Amines',
    topicId: 'hoffmann-bromamide-carbylamine',
    topicTitle: 'Hoffmann Bromamide Degradation & Carbylamine Test',
    question: 'Carbylamine test (isocyanide test) yielding an extremely foul-smelling alkyl isocyanide is given ONLY by:',
    options: [
      'Primary (1°) aliphatic and aromatic amines',
      'Secondary (2°) aliphatic amines',
      'Tertiary (3°) aromatic amines',
      'All quaternary ammonium salts'
    ],
    correctIndex: 0,
    explanation: 'Aliphatic and aromatic primary amines on heating with chloroform (CHCl₃) and ethanolic potassium hydroxide (KOH) form isocyanides or carbylamines which are foul smelling substances (R-NH₂ + CHCl₃ + 3 KOH → R-NC + 3 KCl + 3 H₂O). Secondary and tertiary amines do not show this reaction.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 13, Page 394'
  },
  {
    id: 'chem-pyq-2019-chem-2',
    year: 2019,
    subject: 'chemistry',
    chapterId: 'classification-of-elements-and-periodicity-in-properties',
    chapterTitle: 'Classification of Elements and Periodicity',
    topicId: 'ionization-enthalpy-electron-gain',
    topicTitle: 'Periodic Trends: Ionization Enthalpy & Electron Gain Enthalpy',
    question: 'Which of the following elements has the MOST negative electron gain enthalpy (highest electron affinity)?',
    options: [
      'Fluorine (F)',
      'Chlorine (Cl)',
      'Bromine (Br)',
      'Iodine (I)'
    ],
    correctIndex: 1,
    explanation: 'Chlorine (Cl) has a more negative electron gain enthalpy (-349 kJ/mol) than Fluorine (-328 kJ/mol). In Fluorine, the incoming electron enters the compact 2p subshell where it experiences significant interelectronic repulsion. In Chlorine, the incoming electron enters the larger 3p subshell with lower repulsion.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 3, Page 89'
  },

  // ================= 2018 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2018-chem-1',
    year: 2018,
    subject: 'chemistry',
    chapterId: 'biomolecules',
    chapterTitle: 'Biomolecules',
    topicId: 'amino-acids-peptide-bond',
    topicTitle: 'Structures of Amino Acids, Proteins & Denaturation',
    question: 'Which of the following amino acids is optically INACTIVE due to the absence of a chiral carbon center?',
    options: [
      'Alanine',
      'Glycine (H₂N-CH₂-COOH)',
      'Valine',
      'Leucine'
    ],
    correctIndex: 1,
    explanation: 'In Glycine (H₂N-CH₂-COOH), the α-carbon is bonded to two hydrogen atoms (-H, -H), an amino group (-NH₂), and a carboxyl group (-COOH). Because it lacks four different substituent groups, it has no chiral center and is optically inactive.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 14, Page 415'
  },
  {
    id: 'chem-pyq-2018-chem-2',
    year: 2018,
    subject: 'chemistry',
    chapterId: 'hydrocarbons',
    chapterTitle: 'Hydrocarbons',
    topicId: 'aromaticity-huckel-rule',
    topicTitle: 'Hückel\'s Rule (4n+2) π electrons & Electrophilic Substitution',
    question: 'According to Hückel\'s rule, a planar cyclic conjugated ring system exhibits aromatic stability if it contains:',
    options: [
      '(4n + 2) π electrons (where n = 0, 1, 2, 3...)',
      '4n π electrons',
      '(2n + 1) π electrons',
      '2n² π electrons'
    ],
    correctIndex: 0,
    explanation: 'Hückel\'s rule states that cyclic, planar, completely conjugated systems containing (4n + 2) delocalized π electrons (e.g. 2, 6, 10, 14...) possess exceptional aromatic stability.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 13, Page 391'
  },

  // ================= 2017 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2017-chem-1',
    year: 2017,
    subject: 'chemistry',
    chapterId: 'alcohols-phenols-and-ethers',
    chapterTitle: 'Alcohols, Phenols and Ethers',
    topicId: 'reimer-tiemann-kolbe',
    topicTitle: 'Kolbe\'s Reaction & Reimer-Tiemann Reaction',
    question: 'Phenol reacts with chloroform (CHCl₃) in presence of aqueous NaOH followed by acidification to produce Salicylaldehyde. This reaction is known as:',
    options: [
      'Kolbe\'s reaction',
      'Reimer-Tiemann reaction (intermediate is dichlorocarbene :CCl₂)',
      'Friedel-Crafts acylation',
      'Rosenmund reduction'
    ],
    correctIndex: 1,
    explanation: 'On treating phenol with chloroform in the presence of sodium hydroxide, an -CHO group is introduced at ortho position of benzene ring to give salicylaldehyde. The electrophile in Reimer-Tiemann reaction is the neutral dichlorocarbene (:CCl₂).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 11, Page 344'
  },
  {
    id: 'chem-pyq-2017-chem-2',
    year: 2017,
    subject: 'chemistry',
    chapterId: 'some-basic-concepts-of-chemistry',
    chapterTitle: 'Some Basic Concepts of Chemistry',
    topicId: 'mole-concept-stoichiometry',
    topicTitle: 'Molar Mass, Empirical Formula & Limiting Reagent',
    question: 'What is the number of moles of water molecules present in 180 grams of pure liquid water (H₂O)?',
    options: [
      '1 mole',
      '10 moles (10 × 6.022 × 10²³ molecules)',
      '18 moles',
      '100 moles'
    ],
    correctIndex: 1,
    explanation: 'Molar mass of H₂O = (2 × 1) + 16 = 18 g/mol. Number of moles n = Given mass / Molar mass = 180 g / (18 g/mol) = 10 moles.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 1, Page 18'
  },

  // ================= 2016 NEET UG CHEMISTRY =================
  {
    id: 'chem-pyq-2016-chem-1',
    year: 2016,
    subject: 'chemistry',
    chapterId: 'redox-reactions',
    chapterTitle: 'Redox Reactions',
    topicId: 'oxidation-number-balancing',
    topicTitle: 'Oxidation Number & Balancing Redox Equations',
    question: 'The oxidation state of Chromium (Cr) in potassium dichromate (K₂Cr₂O₇) is:',
    options: [
      '+3',
      '+4',
      '+6',
      '+7'
    ],
    correctIndex: 2,
    explanation: 'Let oxidation state of Cr be x. In neutral K₂Cr₂O₇: 2(+1) + 2(x) + 7(-2) = 0 ⇒ 2 + 2x - 14 = 0 ⇒ 2x = 12 ⇒ x = +6.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 8, Page 260'
  },
  {
    id: 'chem-pyq-2016-chem-2',
    year: 2016,
    subject: 'chemistry',
    chapterId: 'chemical-bonding-and-molecular-structure',
    chapterTitle: 'Chemical Bonding and Molecular Structure',
    topicId: 'molecular-orbital-theory',
    topicTitle: 'Molecular Orbital Theory & Bond Order',
    question: 'According to Molecular Orbital (MO) Theory, the bond order of diatomic Oxygen molecule (O₂) and its magnetic character are:',
    options: [
      'Bond order = 2, Paramagnetic (2 unpaired electrons in π*2px and π*2py)',
      'Bond order = 2, Diamagnetic',
      'Bond order = 3, Paramagnetic',
      'Bond order = 1.5, Diamagnetic'
    ],
    correctIndex: 0,
    explanation: 'For O₂ (16 electrons): Electronic configuration is σ1s² σ*1s² σ2s² σ*2s² σ2pz² (π2px² = π2py²) (π*2px¹ = π*2py¹). Number of bonding electrons N_b = 10, anti-bonding N_a = 6. Bond order = (N_b - N_a) / 2 = (10 - 6) / 2 = 2. Due to two unpaired electrons in degenerate π* antibonding orbitals, O₂ is paramagnetic.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 4, Page 129'
  },

  // ================= 2015 AIPMT / NEET CHEMISTRY =================
  {
    id: 'chem-pyq-2015-chem-1',
    year: 2015,
    subject: 'chemistry',
    chapterId: 'solutions',
    chapterTitle: 'Solutions',
    topicId: 'henrys-law-solubility',
    topicTitle: 'Henry\'s Law of Gas Solubility in Liquids',
    question: 'According to Henry\'s Law (p = K_H × x), as temperature increases, the Henry\'s law constant K_H for a gas in liquid:',
    options: [
      'Increases, and therefore gas solubility decreases',
      'Decreases, and therefore gas solubility increases',
      'Remains constant',
      'Increases, and gas solubility increases'
    ],
    correctIndex: 0,
    explanation: 'Henry\'s law constant K_H increases with increase in temperature. Since solubility x = p / K_H, higher K_H at elevated temperatures means lower solubility of the gas in liquids (e.g., aquatic species are more comfortable in cold waters than in warm waters).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 2, Page 42'
  },
  {
    id: 'chem-pyq-2015-chem-2',
    year: 2015,
    subject: 'chemistry',
    chapterId: 'equilibrium',
    chapterTitle: 'Equilibrium',
    topicId: 'solubility-product-ksp',
    topicTitle: 'Solubility Product (Ksp) & Common Ion Effect',
    question: 'For a sparingly soluble salt of type AB₂ (e.g., CaF₂ or PbCl₂) with molar solubility S, the solubility product K_sp is expressed as:',
    options: [
      'K_sp = S²',
      'K_sp = 2 S²',
      'K_sp = 4 S³',
      'K_sp = 27 S⁴'
    ],
    correctIndex: 2,
    explanation: 'Dissociation: AB₂(s) ⇌ A²⁺(aq) + 2 B⁻(aq). At equilibrium: [A²⁺] = S, [B⁻] = 2S. K_sp = [A²⁺] [B⁻]² = (S) × (2S)² = S × 4S² = 4 S³.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 7, Page 232'
  },

  // ================= 2014 AIPMT / NEET CHEMISTRY =================
  {
    id: 'chem-pyq-2014-chem-1',
    year: 2014,
    subject: 'chemistry',
    chapterId: 'electrochemistry',
    chapterTitle: 'Electrochemistry',
    topicId: 'faradays-laws-electrolysis',
    topicTitle: 'Faraday\'s 1st and 2nd Laws of Electrolysis',
    question: 'How many Faradays of electric charge are required to electroplate 1 mole of aluminum from molten Al₂O₃ (Al³⁺ + 3 e⁻ → Al)?',
    options: [
      '1 F',
      '2 F',
      '3 F (3 × 96500 C)',
      '6 F'
    ],
    correctIndex: 2,
    explanation: 'The cathodic reduction reaction is: Al³⁺ + 3 e⁻ → Al. To produce 1 mole of aluminum metal, 3 moles of electrons are required. Since 1 mole of electrons carries 1 Faraday (F) of electric charge, total charge required = 3 Faradays (3F).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 3, Page 85'
  },
  {
    id: 'chem-pyq-2014-chem-2',
    year: 2014,
    subject: 'chemistry',
    chapterId: 'organic-chemistry-some-basic-principles-and-techniques',
    chapterTitle: 'Organic Chemistry: Basic Principles & Techniques',
    topicId: 'inductive-mesomeric-effects',
    topicTitle: 'Acidity of Carboxylic Acids & Substituted Benzoic Acids',
    question: 'Which of the following carboxylic acids has the HIGHEST acidity (lowest pKa value) due to strong electron-withdrawing (-I) inductive effect?',
    options: [
      'Formic acid (HCOOH)',
      'Acetic acid (CH₃COOH)',
      'Trichloroacetic acid (CCl₃COOH)',
      'Chloroacetic acid (CH₂ClCOOH)'
    ],
    correctIndex: 2,
    explanation: 'Three electronegative chlorine atoms on the α-carbon in CCl₃COOH exert powerful electron-withdrawing (-I) inductive effects, dispersing the negative charge on the conjugate carboxylate anion (CCl₃COO⁻) and vastly increasing acid strength.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 12, Page 382'
  }
];
