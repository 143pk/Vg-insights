// Graded Practice Question Sets for Chapter 18: Coordination Compounds
import { PracticeQuestion } from '../../types/neet';

export const COORDINATION_PRACTICE_SETS: Record<string, PracticeQuestion[]> = {
  // Topic 1 Practice Set: Fundamentals & IUPAC Nomenclature
  fundamentals: [
    {
      id: "prac-coord-fund-1",
      question: "Which of the following is an example of an ambidentate ligand?",
      options: [
        "SCN⁻",
        "NH₃",
        "H₂O",
        "en (ethane-1,2-diamine)"
      ],
      correctAnswer: 0,
      explanation: "An ambidentate ligand has two different donor atoms through which it can coordinate, but it binds through only one donor atom at a time. SCN⁻ can coordinate through Sulphur (thiocyanato) or Nitrogen (isothiocyanato). NH₃, H₂O, and 'en' have only one type of donor atom.",
      difficulty: "Easy",
      conceptTested: "Ambidentate ligand definition"
    },
    {
      id: "prac-coord-fund-2",
      question: "What is the coordination number and oxidation state of cobalt in the complex [Co(en)₂Cl(NO₂)]⁺?",
      options: [
        "Coordination number = 6, Oxidation state = +3",
        "Coordination number = 4, Oxidation state = +3",
        "Coordination number = 6, Oxidation state = +2",
        "Coordination number = 4, Oxidation state = +2"
      ],
      correctAnswer: 0,
      explanation: "Ligands: 2 'en' (bidentate = 2 × 2 = 4 donors), 1 Cl⁻ (monodentate = 1 donor), 1 NO₂⁻ (monodentate = 1 donor). Total C.N. = 4 + 1 + 1 = 6.\nOxidation state: x + 2(0) + 1(-1) + 1(-1) = +1 ⇒ x = +3.",
      difficulty: "Medium",
      conceptTested: "Calculating Coordination Number with bidentate ligands and Oxidation State"
    },
    {
      id: "prac-coord-fund-3",
      question: "The correct IUPAC name of the complex K₂[PdCl₄] is:",
      options: [
        "Potassium tetrachloridopalladate(II)",
        "Potassium tetrachloridopalladium(II)",
        "Dipotassium tetrachloridopalladate(IV)",
        "Potassium chloridopalladate(II)"
      ],
      correctAnswer: 0,
      explanation: "Cation K⁺ is named first (without prefix 'di-'). The complex anion [PdCl₄]²⁻ has 4 chloride ligands (tetrachlorido) and Pd in +2 oxidation state (x + 4(-1) = -2 ⇒ x = +2). Because the complex is an anion, the metal ends in '-ate' (palladate(II)). Name: potassium tetrachloridopalladate(II).",
      difficulty: "Easy",
      conceptTested: "IUPAC naming of anionic complexes"
    },
    {
      id: "prac-coord-fund-4",
      question: "A coordination compound with molecular formula CrCl₃·6H₂O loses 2 molecules of water on treatment with concentrated H₂SO₄ and gives a precipitate of 1 mole of AgCl with excess AgNO₃. The correct structural formula is:",
      options: [
        "[Cr(H₂O)₄Cl₂]Cl · 2H₂O",
        "[Cr(H₂O)₅Cl]Cl₂ · H₂O",
        "[Cr(H₂O)₆]Cl₃",
        "[Cr(H₂O)₃Cl₃] · 3H₂O"
      ],
      correctAnswer: 0,
      explanation: "1. Loss of 2 water molecules with conc. H₂SO₄ indicates 2 molecules of water of hydration (outside the coordination sphere).\n2. Precipitation of 1 mole of AgCl indicates exactly 1 ionisable Cl⁻ in the ionisation sphere.\n3. Combining these facts gives: [Cr(H₂O)₄Cl₂]Cl · 2H₂O (4 H₂O and 2 Cl inside the sphere, 1 Cl and 2 H₂O outside).",
      difficulty: "Medium",
      conceptTested: "Werner's theory and hydrate formulation from chemical tests"
    },
    {
      id: "prac-coord-fund-5",
      question: "According to Werner's theory, the secondary valencies of a transition metal ion are:",
      options: [
        "Directional and correspond to the coordination number",
        "Non-directional and correspond to the oxidation state",
        "Ionisable in aqueous solution",
        "Satisfied exclusively by negative ions"
      ],
      correctAnswer: 0,
      explanation: "In Werner's theory, primary valencies are ionisable, non-directional, and equal oxidation state. Secondary valencies are non-ionisable, directional in space (dictating the geometry/coordination polyhedron), and equal the coordination number.",
      difficulty: "Easy",
      conceptTested: "Characteristics of Werner's secondary valency"
    },
    {
      id: "prac-coord-fund-6",
      question: "Which of the following complexes will produce the maximum number of ions when dissolved in water?",
      options: [
        "[Co(NH₃)₆]Cl₃",
        "[Co(NH₃)₅Cl]Cl₂",
        "K₂[PtCl₆]",
        "[Ni(CO)₄]"
      ],
      correctAnswer: 0,
      explanation: "1. [Co(NH₃)₆]Cl₃ → [Co(NH₃)₆]³⁺ + 3 Cl⁻ = 4 ions per formula unit (1:3 electrolyte).\n2. [Co(NH₃)₅Cl]Cl₂ → 1 complex + 2 Cl⁻ = 3 ions.\n3. K₂[PtCl₆] → 2 K⁺ + 1 complex = 3 ions.\n4. [Ni(CO)₄] → Non-electrolyte = 0 ions.",
      difficulty: "Easy",
      conceptTested: "Van 't Hoff factor and electrolytic conductivity of coordination compounds"
    },
    {
      id: "prac-coord-fund-7",
      question: "The IUPAC name of the complex [Pt(py)₄][PtCl₄] is:",
      options: [
        "Tetrapyridineplatinum(II) tetrachloridoplatinate(II)",
        "Tetrapyridineplatinate(II) tetrachloridoplatinum(II)",
        "Tetrapyridineplatinum(IV) tetrachloridoplatinate(II)",
        "Tetrapyridineplatinum(II) tetrachloridoplatinum(II)"
      ],
      correctAnswer: 0,
      explanation: "In complexes where both cation and anion are coordination entities:\nCation: [Pt(py)₄]²⁺ → tetrapyridineplatinum(II)\nAnion: [PtCl₄]²⁻ → tetrachloridoplatinate(II)\nCombined: tetrapyridineplatinum(II) tetrachloridoplatinate(II).",
      difficulty: "Hard",
      conceptTested: "IUPAC naming of coordination complexes with both complex cation and anion"
    },
    {
      id: "prac-coord-fund-8",
      question: "Which among the following ligands is a flexidentate ligand?",
      options: [
        "EDTA⁴⁻",
        "NH₃",
        "H₂O",
        "CO"
      ],
      correctAnswer: 0,
      explanation: "A flexidentate ligand is a polydentate ligand that can adjust its denticity and coordinate through fewer donor atoms than its maximum capacity depending on reaction conditions and the metal ion. EDTA⁴⁻ (normally hexadentate) can act as a pentadentate or tetradentate ligand in certain complexes (e.g. in [Cr(H-EDTA)(H₂O)]).",
      difficulty: "Medium",
      conceptTested: "Concept of flexidentate ligands"
    }
  ],

  // Topic 2 Practice Set: Isomerism in Coordination Compounds
  isomerism: [
    {
      id: "prac-coord-isom-1",
      question: "Which of the following pairs of coordination compounds represents ionisation isomerism?",
      options: [
        "[Co(NH₃)₅(SO₄)]Br and [Co(NH₃)₅Br]SO₄",
        "[Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅(ONO)]Cl₂",
        "[Cr(H₂O)₆]Cl₃ and [Cr(H₂O)₅Cl]Cl₂·H₂O",
        "[Pt(NH₃)₂Cl₂] and [Pt(NH₃)₄][PtCl₄]"
      ],
      correctAnswer: 0,
      explanation: "Ionisation isomerism arises when counter-ion in the ionisation sphere exchanges position with a ligand inside the coordination sphere. [Co(NH₃)₅(SO₄)]Br gives Br⁻ in solution (forms pale yellow AgBr ppt with AgNO₃), while [Co(NH₃)₅Br]SO₄ gives SO₄²⁻ in solution (forms white BaSO₄ ppt with BaCl₂).",
      difficulty: "Easy",
      conceptTested: "Identification of ionisation isomerism and chemical distinction tests"
    },
    {
      id: "prac-coord-isom-2",
      question: "Facial (fac) and Meridional (mer) isomerism is associated with which of the following complex types?",
      options: [
        "[MA₃B₃] octahedral complexes",
        "[MA₄B₂] octahedral complexes",
        "[MA₂B₂] square planar complexes",
        "[MABCD] tetrahedral complexes"
      ],
      correctAnswer: 0,
      explanation: "fac-mer isomerism is a specific subtype of geometrical isomerism observed in octahedral [MA₃B₃] complexes (e.g. [Co(NH₃)₃(NO₂)₃]). In the fac-isomer, three donor atoms of the same type occupy the corners of one octahedral face. In the mer-isomer, they lie on a meridian around the metal centre.",
      difficulty: "Easy",
      conceptTested: "fac-mer isomerism stoichiometry"
    },
    {
      id: "prac-coord-isom-3",
      question: "How many geometrical isomers are possible for the square planar complex [Pt(NH₃)(NH₂OH)(py)(NO₂)]⁺?",
      options: [
        "3",
        "2",
        "4",
        "1"
      ],
      correctAnswer: 0,
      explanation: "This is a square planar complex of type [MABCD] where all four monodentate ligands are different. By fixing ligand A and placing B, C, D in the trans position one after the other, exactly 3 geometrical isomers are obtained.",
      difficulty: "Medium",
      conceptTested: "Calculation of geometrical isomers in square planar [MABCD]"
    },
    {
      id: "prac-coord-isom-4",
      question: "Which of the following statements regarding the optical activity of [Co(en)₂Cl₂]⁺ is TRUE?",
      options: [
        "The cis-isomer is optically active, while the trans-isomer is optically inactive.",
        "Both cis and trans isomers are optically active.",
        "Both cis and trans isomers are optically inactive.",
        "The trans-isomer is optically active, while the cis-isomer is optically inactive."
      ],
      correctAnswer: 0,
      explanation: "cis-[Co(en)₂Cl₂]⁺ is chiral and lacks a plane or centre of symmetry, hence it is optically active (resolvable into d and l enantiomers). trans-[Co(en)₂Cl₂]⁺ has a centre of inversion (i) and plane of symmetry (σ), making it achiral and optically inactive.",
      difficulty: "Medium",
      conceptTested: "Optical activity distinction between cis and trans isomers"
    },
    {
      id: "prac-coord-isom-5",
      question: "The total number of possible isomers (structural + stereo) for the coordination entity [Co(en)₂(NO₂)Cl]⁺ is:",
      options: [
        "6",
        "4",
        "2",
        "8"
      ],
      correctAnswer: 0,
      explanation: "1. For the nitro (-NO₂) form: [Co(en)₂(NO₂)Cl]⁺ has cis (optically active, 2 enantiomers: d & l) and trans (1 isomer) = 3 isomers.\n2. For the nitrito (-ONO) linkage isomer: [Co(en)₂(ONO)Cl]⁺ also has cis (d & l, 2 enantiomers) and trans (1 isomer) = 3 isomers.\nTotal isomers = 3 + 3 = 6 isomers.",
      difficulty: "Hard",
      conceptTested: "Combined structural linkage and geometrical-optical isomer counting"
    },
    {
      id: "prac-coord-isom-6",
      question: "Why do tetrahedral complexes of type [MA₂B₂] NOT exhibit geometrical isomerism?",
      options: [
        "All four positions in a regular tetrahedron are adjacent (equivalent) with 109.5° angles.",
        "Tetrahedral complexes are always paramagnetic.",
        "The metal-ligand bonds are purely ionic.",
        "Tetrahedral complexes undergo rapid inversion."
      ],
      correctAnswer: 0,
      explanation: "In a regular tetrahedron, every corner is equidistant from every other corner, and all bond angles are 109.5°. No two positions can be 'trans' (180°) to each other. Hence, cis/trans isomerism is impossible.",
      difficulty: "Easy",
      conceptTested: "Theoretical basis for absence of geometrical isomerism in tetrahedral systems"
    }
  ],

  // Topic 3 Practice Set: Bonding Theories (VBT & CFT)
  bonding: [
    {
      id: "prac-coord-bond-1",
      question: "Which of the following octahedral complexes is an inner orbital complex (d²sp³ hybridized)?",
      options: [
        "[Fe(CN)₆]⁴⁻",
        "[FeF₆]³⁻",
        "[Ni(H₂O)₆]²⁺",
        "[MnCl₆]³⁻"
      ],
      correctAnswer: 0,
      explanation: "In [Fe(CN)₆]⁴⁻, Fe²⁺ is 3d⁶. CN⁻ is a strong field ligand (Δ_o > P). Under the strong crystal field, the 6 d-electrons pair up completely in three 3d-orbitals, leaving two empty 3d-orbitals for d²sp³ inner-orbital hybridization (diamagnetic, low spin).",
      difficulty: "Easy",
      conceptTested: "Inner orbital vs outer orbital complex hybridization criteria"
    },
    {
      id: "prac-coord-bond-2",
      question: "In an octahedral crystal field, the magnitude of CFSE for a high-spin d⁴ ion (where Δ_o < P) is:",
      options: [
        "−0.6 Δ_o",
        "−1.6 Δ_o",
        "−0.8 Δ_o",
        "0.0 Δ_o"
      ],
      correctAnswer: 0,
      explanation: "For high-spin d⁴ (Δ_o < P), electrons fill according to Hund's rule: configuration is t_2g³ e_g¹.\nCFSE = [−0.4 × 3 + 0.6 × 1] Δ_o = [−1.2 + 0.6] Δ_o = −0.6 Δ_o.",
      difficulty: "Medium",
      conceptTested: "Calculating CFSE for high-spin configurations"
    },
    {
      id: "prac-coord-bond-3",
      question: "What is the relationship between crystal field splitting in tetrahedral (Δ_t) and octahedral (Δ_o) complexes?",
      options: [
        "Δ_t = (4/9) Δ_o",
        "Δ_t = (9/4) Δ_o",
        "Δ_t = (2/3) Δ_o",
        "Δ_t = (1/2) Δ_o"
      ],
      correctAnswer: 0,
      explanation: "Δ_t = ⁴⁄₉ Δ_o (~0.44 Δ_o). This is because tetrahedral has only 4 ligands instead of 6 (factor of 4/6) and the ligands do not point directly along the d-orbital axes (factor of 2/3), resulting in (4/6) × (2/3) = 4/9.",
      difficulty: "Easy",
      conceptTested: "Fundamental CFT relationship between tetrahedral and octahedral splitting"
    },
    {
      id: "prac-coord-bond-4",
      question: "The spin-only magnetic moment of [Mn(CN)₆]³⁻ is approximately:",
      options: [
        "2.83 BM",
        "4.90 BM",
        "1.73 BM",
        "3.87 BM"
      ],
      correctAnswer: 0,
      explanation: "In [Mn(CN)₆]³⁻, Mn³⁺ is 3d⁴. CN⁻ is a strong field ligand → low spin configuration t_2g⁴ e_g⁰.\nIn t_2g⁴, 2 electrons are paired and 2 electrons are unpaired (n = 2).\nμ_s = √[2(2 + 2)] = √8 ≈ 2.83 BM.",
      difficulty: "Medium",
      conceptTested: "Determining magnetic moment in strong field d⁴ octahedral complex"
    },
    {
      id: "prac-coord-bond-5",
      question: "Which of the following statements correctly explains the stability of metal carbonyls?",
      options: [
        "Synergic bonding involving M←CO σ-donation and M→CO π-backdonation strengthens the M–C bond.",
        "Metal carbonyls are held exclusively by weak Van der Waals forces.",
        "CO acts only as a σ-donor and never participates in π-bonding.",
        "The carbon-oxygen bond order increases upon coordination."
      ],
      correctAnswer: 0,
      explanation: "Metal carbonyls exhibit synergic bonding: CO donates a lone pair to form a coordinate σ-bond, and the filled d-orbitals of the metal back-donate electron density into the vacant π* antibonding orbitals of CO (π-backbonding). This synergistic effect drastically strengthens the M–C bond while decreasing the C–O bond order.",
      difficulty: "Medium",
      conceptTested: "Synergic bonding mechanism in metal carbonyls"
    },
    {
      id: "prac-coord-bond-6",
      question: "Assertion (A): [Ni(CO)₄] is diamagnetic, while [NiCl₄]²⁻ is paramagnetic.\nReason (R): CO is a strong field π-acid ligand causing pairing of electrons, whereas Cl⁻ is a weak field ligand.",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "(A) is true but (R) is false.",
        "(A) is false but (R) is true."
      ],
      correctAnswer: 0,
      explanation: "In [Ni(CO)₄], Ni is in 0 oxidation state (3d⁸ 4s²). CO is a strong field ligand that forces pairing of 4s electrons into 3d to give 3d¹⁰ (n = 0, diamagnetic). In [NiCl₄]²⁻, Ni²⁺ is 3d⁸ and Cl⁻ is a weak field ligand that cannot cause pairing, leaving 2 unpaired electrons (paramagnetic). Both A and R are true and R correctly explains A.",
      difficulty: "Medium",
      conceptTested: "Assertion-Reason on VBT magnetic behavior and ligand strength"
    }
  ],

  // Topic 4 Practice Set: Properties, Colour, Stability & Applications
  propertiesAndApps: [
    {
      id: "prac-coord-prop-1",
      question: "Which of the following coordination entities is expected to be COLOURLESS?",
      options: [
        "[Sc(H₂O)₆]³⁺",
        "[Ti(H₂O)₆]³⁺",
        "[Fe(H₂O)₆]³⁺",
        "[Cu(NH₃)₄]²⁺"
      ],
      correctAnswer: 0,
      explanation: "Sc³⁺ has atomic number 21 (neutral [Ar] 3d¹ 4s²). Upon losing 3 electrons, Sc³⁺ has electronic configuration [Ar] 3d⁰. Since there are NO electrons in the d-orbitals, d–d transitions cannot take place. Hence, [Sc(H₂O)₆]³⁺ is colourless.",
      difficulty: "Easy",
      conceptTested: "Criterion for colour in coordination compounds (d⁰ / d¹⁰ vs d¹-d⁹)"
    },
    {
      id: "prac-coord-prop-2",
      question: "Anhydrous CuSO₄ is white, but hydrated CuSO₄·5H₂O is deep blue. Why?",
      options: [
        "In the absence of ligands (water), crystal field splitting does not occur; in CuSO₄·5H₂O, H₂O ligands split d-orbitals allowing d-d transition.",
        "Anhydrous CuSO₄ contains Cu⁺ instead of Cu²⁺.",
        "Water molecules undergo oxidation to produce blue color.",
        "Hydration changes the hybridization of Copper to sp³."
      ],
      correctAnswer: 0,
      explanation: "In anhydrous CuSO₄, there are no coordinating ligands around Cu²⁺, so the 3d-orbitals remain degenerate (no crystal field splitting) and d-d transitions cannot occur, making it white. In hydrated CuSO₄·5H₂O, water molecules act as ligands, causing crystal field splitting of the d-orbitals. Electron excitation from lower to higher d-orbitals absorbs red-orange light and transmits blue light.",
      difficulty: "Medium",
      conceptTested: "CFT explanation for color in hydrated vs anhydrous salts"
    },
    {
      id: "prac-coord-prop-3",
      question: "The thermodynamic stability of [Ni(en)₃]²⁺ is much higher than that of [Ni(NH₃)₆]²⁺. This is primarily attributed to:",
      options: [
        "The Chelate Effect, which causes an increase in entropy (ΔS° > 0)",
        "The larger size of the nitrogen donor atom in en",
        "Higher resonance stabilization of the aliphatic backbone",
        "A decrease in the coordination number of Nickel"
      ],
      correctAnswer: 0,
      explanation: "When 3 bidentate 'en' molecules displace 6 monodentate ammonia/water ligands, the net reaction increases the number of independent dissolved species (from 4 particles to 7 particles), resulting in a large positive change in entropy (ΔS° > 0). This entropy-driven thermodynamic stabilization is known as the Chelate Effect.",
      difficulty: "Medium",
      conceptTested: "Thermodynamic basis of the Chelate Effect"
    },
    {
      id: "prac-coord-prop-4",
      question: "Match List-I (Complex / Compound) with List-II (Application / Significance):\n(A) Chlorophyll — (1) Anti-cancer drug\n(B) Cisplatin — (2) Photosynthetic pigment with Mg²⁺\n(C) Vitamin B₁₂ — (3) Lead poisoning treatment\n(D) CaNa₂EDTA — (4) Anti-pernicious anaemia coenzyme with Co³⁺",
      options: [
        "A-2, B-1, C-4, D-3",
        "A-1, B-2, C-3, D-4",
        "A-2, B-4, C-1, D-3",
        "A-3, B-1, C-4, D-2"
      ],
      correctAnswer: 0,
      explanation: "A. Chlorophyll contains Mg²⁺ (photosynthetic green pigment) → 2\nB. Cisplatin (cis-[Pt(NH₃)₂Cl₂]) is an anti-cancer drug → 1\nC. Vitamin B₁₂ contains Co³⁺ (anti-pernicious anaemia) → 4\nD. CaNa₂EDTA is a chelating antidote for lead poisoning → 3.\nCorrect match: A-2, B-1, C-4, D-3.",
      difficulty: "Easy",
      conceptTested: "Match the column on biological and medicinal applications of coordination compounds"
    },
    {
      id: "prac-coord-prop-5",
      question: "During the extraction of Gold (Au) by the MacArthur-Forrest Cyanide process, which coordination complex is formed in the aqueous leaching step?",
      options: [
        "[Au(CN)₂]⁻",
        "[Au(CN)₄]⁻",
        "[Au(NH₃)₂]⁺",
        "[Au(CO)₄]⁻"
      ],
      correctAnswer: 0,
      explanation: "In the cyanide process, native gold is leached with dilute NaCN solution in the presence of atmospheric oxygen: 4 Au + 8 CN⁻ + 2 H₂O + O₂ → 4 [Au(CN)₂]⁻ + 4 OH⁻. Gold is subsequently recovered by reducing the soluble [Au(CN)₂]⁻ complex with zinc dust.",
      difficulty: "Medium",
      conceptTested: "Metallurgical extraction applications of coordination complexes"
    }
  ]
};
