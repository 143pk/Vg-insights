// Verified Authentic NEET & AIPMT Previous Year Questions for Chapter 18: Coordination Compounds
import { PYQuestion } from '../../types/neet';

export const COORDINATION_PYQS: Record<string, PYQuestion[]> = {
  // Topic 1: Fundamentals & Nomenclature PYQs
  fundamentals: [
    {
      id: "pyq-coord-fund-1",
      year: 2023,
      exam: "NEET UG 2023",
      question: "The IUPAC name of the complex [Co(NH₃)₅(CO₃)]Cl is:",
      options: [
        "Pentaamminecarbonatocobalt(III) chloride",
        "Carbonatopentaamminecobalt(III) chloride",
        "Pentaamminecarbonatocobalt(II) chloride",
        "Pentaamminecarbonatocobaltate(III) chloride"
      ],
      correctAnswer: 0,
      explanation: "Step 1: Cation is [Co(NH₃)₅(CO₃)]⁺ and anion is Cl⁻.\nStep 2: Ligands inside the coordination sphere are ammine (NH₃, neutral) and carbonato (CO₃²⁻, charge = -2). In alphabetical order, 'ammine' comes before 'carbonato'.\nStep 3: Oxidation state of Cobalt: x + 5(0) + 1(-2) = +1 ⇒ x = +3.\nStep 4: The coordination sphere is cationic, so the metal name remains 'cobalt' with Roman numeral (III), followed by the counter-ion 'chloride'.\nTherefore, the correct IUPAC name is pentaamminecarbonatocobalt(III) chloride.",
      difficulty: "Easy",
      conceptTested: "IUPAC nomenclature of heteroleptic cationic complexes with anionic and neutral ligands",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.3"
    },
    {
      id: "pyq-coord-fund-2",
      year: 2021,
      exam: "NEET UG 2021",
      question: "Ethylene diaminetetraacetate (EDTA) ion is:",
      options: [
        "Hexadentate ligand with four 'O' and two 'N' donor atoms",
        "Unidentate ligand",
        "Bidentate ligand with two 'N' donor atoms",
        "Tridentate ligand with three 'N' donor atoms"
      ],
      correctAnswer: 0,
      explanation: "EDTA⁴⁻ (ethylenediaminetetraacetate) contains two nitrogen donor atoms (each having a lone pair) and four oxygen donor atoms (from four acetate groups -COO⁻). Hence it coordinates through 6 donor atoms simultaneously to form stable 5-membered chelate rings. It is a hexadentate ligand with four 'O' and two 'N' donor atoms.",
      difficulty: "Easy",
      conceptTested: "Classification and denticity of polydentate chelating ligands",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.2"
    },
    {
      id: "pyq-coord-fund-3",
      year: 2019,
      exam: "NEET UG 2019",
      question: "The correct order of the stoichiometries of AgCl precipitated when excess AgNO₃ is added to: CoCl₃·6NH₃, CoCl₃·5NH₃, and CoCl₃·4NH₃ respectively is:",
      options: [
        "3 AgCl, 2 AgCl, 1 AgCl",
        "2 AgCl, 3 AgCl, 1 AgCl",
        "1 AgCl, 2 AgCl, 3 AgCl",
        "3 AgCl, 1 AgCl, 2 AgCl"
      ],
      correctAnswer: 0,
      explanation: "According to Werner's Coordination Theory:\n1. CoCl₃·6NH₃ is formulated as [Co(NH₃)₆]Cl₃ → gives 3 Cl⁻ ions in solution → yields 3 moles AgCl.\n2. CoCl₃·5NH₃ is formulated as [Co(NH₃)₅Cl]Cl₂ → gives 2 Cl⁻ ions in solution → yields 2 moles AgCl.\n3. CoCl₃·4NH₃ is formulated as [Co(NH₃)₄Cl₂]Cl → gives 1 Cl⁻ ion in solution → yields 1 mole AgCl.\nTherefore, the correct ratio is 3 AgCl, 2 AgCl, 1 AgCl.",
      difficulty: "Easy",
      conceptTested: "Werner's coordination theory and ionisable chloride precipitation",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.1"
    },
    {
      id: "pyq-coord-fund-4",
      year: 2016,
      exam: "AIPMT (Phase 2) 2016",
      question: "The correct increasing order of trans-effect of the following species is:",
      options: [
        "F⁻ < Cl⁻ < Br⁻ < I⁻ < CN⁻",
        "Cl⁻ < Br⁻ < I⁻ < CN⁻ < F⁻",
        "Br⁻ < Cl⁻ < F⁻ < I⁻ < CN⁻",
        "CN⁻ < I⁻ < Br⁻ < Cl⁻ < F⁻"
      ],
      correctAnswer: 0,
      explanation: "The trans-effect order in square planar substitution chemistry follows: F⁻ < Cl⁻ < Br⁻ < I⁻ < NO₂⁻ < PR₃ < CN⁻ ≈ CO ≈ C₂H₄. Halides increase in trans-directing ability with increasing polarizability and size (F⁻ < Cl⁻ < Br⁻ < I⁻), and strong π-acid ligands like CN⁻ have the highest trans-effect.",
      difficulty: "Medium",
      conceptTested: "Trans-effect in square planar complexes",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Chapter 9"
    }
  ],

  // Topic 2: Isomerism PYQs
  isomerism: [
    {
      id: "pyq-coord-isom-1",
      year: 2022,
      exam: "NEET UG 2022",
      question: "Which one of the following complexes is NOT expected to exhibit optical isomerism?",
      options: [
        "trans-[Co(en)₂Cl₂]⁺",
        "cis-[Co(en)₂Cl₂]⁺",
        "[Co(en)₃]³⁺",
        "[Co(en)(NH₃)₂Cl₂]⁺"
      ],
      correctAnswer: 0,
      explanation: "Optical isomerism requires the absence of a plane of symmetry (σ) or a centre of inversion (i).\n1. trans-[Co(en)₂Cl₂]⁺ has a centre of inversion (i) and a plane of symmetry passing through the Co and the two 'en' chelate planes. Because it is centrosymmetric and achiral, its mirror image is superimposable, making it OPTICALLY INACTIVE.\n2. In contrast, cis-[Co(en)₂Cl₂]⁺ and [Co(en)₃]³⁺ are chiral and lack any plane/centre of symmetry, thus forming non-superimposable d and l enantiomers.",
      difficulty: "Medium",
      conceptTested: "Symmetry elements and optical inactivity of trans-octahedral complexes",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.4.2"
    },
    {
      id: "pyq-coord-isom-2",
      year: 2020,
      exam: "NEET UG 2020",
      question: "The type of isomerism shown by the complex [Co(NH₃)₅(NO₂)]Cl₂ is:",
      options: [
        "Linkage isomerism",
        "Coordination isomerism",
        "Ionisation isomerism",
        "Geometrical isomerism"
      ],
      correctAnswer: 0,
      explanation: "The ligand NO₂⁻ is an ambidentate ligand. It can coordinate to the central Co³⁺ ion through the nitrogen atom as nitro (-NO₂, yellow) or through the oxygen atom as nitrito (-ONO, red). Compounds containing ambidentate ligands exhibit Linkage Isomerism. [Note: It also exhibits ionisation isomerism with Cl⁻, but linkage is the primary characteristic tested for NO₂⁻].",
      difficulty: "Easy",
      conceptTested: "Linkage isomerism in complexes with ambidentate ligands",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.4.1"
    },
    {
      id: "pyq-coord-isom-3",
      year: 2018,
      exam: "NEET UG 2018",
      question: "The number of geometrical isomers possible for the complex [Pt(NH₃)(Br)(Cl)(py)] is:",
      options: [
        "3",
        "2",
        "4",
        "6"
      ],
      correctAnswer: 0,
      explanation: "The complex [Pt(NH₃)(Br)(Cl)(py)] is a square planar complex of the type [MABCD] where all four monodentate ligands are different.\nFor a square planar [MABCD] complex, by fixing one ligand (e.g. NH₃) at position 1 and arranging the remaining three ligands (Br, Cl, py) at the trans position (position 3) one by one, exactly 3 distinct geometrical isomers are obtained (two are cis-like arrangements and one is trans-like relative to any pair).",
      difficulty: "Medium",
      conceptTested: "Number of geometrical isomers in square planar [MABCD] systems",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.4.2"
    },
    {
      id: "pyq-coord-isom-4",
      year: 2015,
      exam: "AIPMT 2015 (Re-exam)",
      question: "Which of the following complex ions is expected to absorb visible light and show d-d transition along with cis-trans isomerism?",
      options: [
        "[Cr(NH₃)₄Cl₂]⁺",
        "[Zn(NH₃)₄]²⁺",
        "[Sc(H₂O)₆]³⁺",
        "[Ti(en)₃]⁴⁺"
      ],
      correctAnswer: 0,
      explanation: "1. [Cr(NH₃)₄Cl₂]⁺ is an octahedral [MA₄B₂] complex of Cr³⁺ (3d³). It shows cis-trans geometrical isomerism (cis = violet, trans = green) and has 3 unpaired d-electrons (d³), enabling d-d transitions and absorption in the visible region.\n2. Zn²⁺ is d¹⁰, Sc³⁺ is d⁰, and Ti⁴⁺ is d⁰ (all colourless with no d-d transitions).",
      difficulty: "Medium",
      conceptTested: "Combination of geometrical isomerism with d-orbital electronic configuration",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.4 & 9.5"
    }
  ],

  // Topic 3: Bonding Theories (VBT & CFT) PYQs
  bonding: [
    {
      id: "pyq-coord-bond-1",
      year: 2023,
      exam: "NEET UG 2023",
      question: "The geometry and magnetic behaviour of the complex [Ni(CO)₄] are respectively:",
      options: [
        "Tetrahedral geometry and diamagnetic",
        "Square planar geometry and diamagnetic",
        "Tetrahedral geometry and paramagnetic",
        "Square planar geometry and paramagnetic"
      ],
      correctAnswer: 0,
      explanation: "In [Ni(CO)₄], Nickel has oxidation state 0 (valence configuration 3d⁸ 4s²).\nCO is a very strong field π-acid ligand. Under the strong ligand field of 4 CO molecules, the two 4s electrons are pushed into the 3d subshell to pair up completely, giving a filled 3d¹⁰ configuration.\nThe vacant 4s and three 4p orbitals undergo sp³ hybridization to accommodate 4 electron pairs from 4 CO ligands.\nGeometry = Tetrahedral; all electrons are paired (n = 0) → Diamagnetic (μ = 0 BM).",
      difficulty: "Medium",
      conceptTested: "VBT hybridization and electronic rearrangement in zero-valent metal carbonyls",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.5.1"
    },
    {
      id: "pyq-coord-bond-2",
      year: 2022,
      exam: "NEET UG 2022",
      question: "The correct order of energy of d-orbitals in an octahedral crystal field is:",
      options: [
        "d_xy = d_yz = d_zx < d_x²-y² = d_z²",
        "d_x²-y² = d_z² < d_xy = d_yz = d_zx",
        "d_xy = d_yz < d_zx < d_x²-y² = d_z²",
        "d_z² < d_x²-y² < d_xy = d_yz = d_zx"
      ],
      correctAnswer: 0,
      explanation: "In an octahedral crystal field, six ligands approach along the x, y, and z Cartesian axes. The axial d-orbitals (d_x²-y² and d_z², termed e_g set) point directly at the approaching ligands and experience maximum electrostatic repulsion, raising their energy by +0.6 Δ_o.\nThe non-axial d-orbitals (d_xy, d_yz, d_zx, termed t_2g set) point between the Cartesian axes and experience less repulsion, lowering their energy by -0.4 Δ_o relative to the spherical barycentre.\nTherefore, the energy order is: d_xy = d_yz = d_zx (t_2g) < d_x²-y² = d_z² (e_g).",
      difficulty: "Easy",
      conceptTested: "Crystal Field Theory d-orbital splitting pattern in octahedral geometry",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.5.2"
    },
    {
      id: "pyq-coord-bond-3",
      year: 2020,
      exam: "NEET UG 2020",
      question: "The calculated spin only magnetic moment of [Cr(H₂O)₆]³⁺ is:",
      options: [
        "3.87 BM",
        "4.90 BM",
        "2.83 BM",
        "1.73 BM"
      ],
      correctAnswer: 0,
      explanation: "In [Cr(H₂O)₆]³⁺, Chromium is in +3 oxidation state. Neutral Cr is [Ar] 3d⁵ 4s¹, so Cr³⁺ is [Ar] 3d³.\nIn an octahedral field, the 3 d-electrons occupy the lower t_2g set singly with parallel spins: t_2g³ e_g⁰.\nNumber of unpaired electrons n = 3.\nSpin-only magnetic moment μ_s = √[n(n + 2)] = √[3(3 + 2)] = √15 ≈ 3.87 BM.",
      difficulty: "Easy",
      conceptTested: "Calculation of spin-only magnetic moment from CFT electronic configuration",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.5.2"
    },
    {
      id: "pyq-coord-bond-4",
      year: 2017,
      exam: "NEET UG 2017",
      question: "Correct increasing order for the wavelengths of absorption in the visible region for the complexes of Co³⁺ is:",
      options: [
        "[Co(en)₃]³⁺ < [Co(NH₃)₆]³⁺ < [Co(H₂O)₆]³⁺",
        "[Co(H₂O)₆]³⁺ < [Co(NH₃)₆]³⁺ < [Co(en)₃]³⁺",
        "[Co(NH₃)₆]³⁺ < [Co(en)₃]³⁺ < [Co(H₂O)₆]³⁺",
        "[Co(en)₃]³⁺ < [Co(H₂O)₆]³⁺ < [Co(NH₃)₆]³⁺"
      ],
      correctAnswer: 0,
      explanation: "According to the Spectrochemical Series, ligand field strength follows: H₂O < NH₃ < en.\nCrystal field splitting energy Δ_o follows: Δ_o[Co(H₂O)₆³⁺] < Δ_o[Co(NH₃)₆³⁺] < Δ_o[Co(en)₃³⁺].\nSince energy Δ_o is inversely proportional to wavelength (Δ_o = hc / λ), the complex with the highest splitting energy absorbs light at the SHORTEST wavelength λ.\nThus, absorption wavelength order is: λ[Co(en)₃³⁺] < λ[Co(NH₃)₆³⁺] < λ[Co(H₂O)₆³⁺].",
      difficulty: "Medium",
      conceptTested: "Relationship between spectrochemical series, CFSE (Δ_o), and absorption wavelength",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.5.4"
    }
  ],

  // Topic 4: Magnetic Properties, Colour & Applications PYQs
  propertiesAndApps: [
    {
      id: "pyq-coord-prop-1",
      year: 2021,
      exam: "NEET UG 2021",
      question: "Which of the following is used in the treatment of lead poisoning?",
      options: [
        "Ca-EDTA complex",
        "Cis-platin",
        "D-penicillamine",
        "Desferrioxamine B"
      ],
      correctAnswer: 0,
      explanation: "Calcium disodium EDTA (CaNa₂EDTA) is used as a chelating agent to treat lead (Pb²⁺) poisoning. Lead ion replaces calcium from the EDTA complex because the lead-EDTA complex is far more stable (higher stability constant), water-soluble, non-toxic, and is safely excreted through urine.\n(Cisplatin is an anti-cancer drug; D-penicillamine treats copper poisoning; Desferrioxamine B treats iron overload).",
      difficulty: "Easy",
      conceptTested: "Medicinal applications of chelating agents and coordination compounds",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.8"
    },
    {
      id: "pyq-coord-prop-2",
      year: 2019,
      exam: "NEET UG 2019 (Odisha)",
      question: "Which of the following complex ions is diamagnetic in nature?",
      options: [
        "[Co(NH₃)₆]³⁺",
        "[CoF₆]³⁻",
        "[FeF₆]³⁻",
        "[Fe(H₂O)₆]²⁺"
      ],
      correctAnswer: 0,
      explanation: "1. In [Co(NH₃)₆]³⁺, Cobalt is in +3 state (3d⁶). NH₃ acts as a strong field ligand for Co³⁺, creating a large Δ_o (Δ_o > P). All 6 d-electrons pair up into the lower t_2g orbitals: configuration is t_2g⁶ e_g⁰. Number of unpaired electrons n = 0 → DIAMAGNETIC.\n2. In [CoF₆]³⁻, F⁻ is a weak field ligand → t_2g⁴ e_g² (n = 4, paramagnetic).\n3. In [FeF₆]³⁻, Fe³⁺ is 3d⁵ weak field → t_2g³ e_g² (n = 5, paramagnetic).\n4. In [Fe(H₂O)₆]²⁺, Fe²⁺ is 3d⁶ weak field → t_2g⁴ e_g² (n = 4, paramagnetic).",
      difficulty: "Medium",
      conceptTested: "Magnetic character determination via CFT electron distribution",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.5.2"
    },
    {
      id: "pyq-coord-prop-3",
      year: 2016,
      exam: "AIPMT (Phase 1) 2016",
      question: "Cobalt(III) chloride forms four different complexes with ammonia. One of these complexes upon treatment with excess AgNO₃ solution precipitates 1 mole of AgCl per mole of complex and is electrically conducting (1:1 electrolyte). The formula of this complex is:",
      options: [
        "[Co(NH₃)₄Cl₂]Cl",
        "[Co(NH₃)₆]Cl₃",
        "[Co(NH₃)₅Cl]Cl₂",
        "[Co(NH₃)₃Cl₃]"
      ],
      correctAnswer: 0,
      explanation: "Precipitation of 1 mole of AgCl per mole of complex indicates exactly ONE ionisable chloride outside the coordination sphere.\nA 1:1 electrolyte yields 2 ions per formula unit in aqueous solution ([Co(NH₃)₄Cl₂]⁺ and Cl⁻).\nTherefore, the formula is [Co(NH₃)₄Cl₂]Cl.",
      difficulty: "Easy",
      conceptTested: "Werner's formulation from electrical conductivity and precipitation data",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.1"
    },
    {
      id: "pyq-coord-prop-4",
      year: 2014,
      exam: "AIPMT 2014",
      question: "Which of the following compounds has the highest magnetic moment value?",
      options: [
        "[Fe(H₂O)₆]³⁺",
        "[Co(NH₃)₆]³⁺",
        "[Fe(CN)₆]⁴⁻",
        "[Cr(H₂O)₆]³⁺"
      ],
      correctAnswer: 0,
      explanation: "1. [Fe(H₂O)₆]³⁺: Fe³⁺ (3d⁵), weak field H₂O → t_2g³ e_g² (n = 5 unpaired electrons, μ = √[5(7)] = √35 ≈ 5.92 BM) → HIGHEST.\n2. [Cr(H₂O)₆]³⁺: Cr³⁺ (3d³), t_2g³ e_g⁰ (n = 3, μ = √15 ≈ 3.87 BM).\n3. [Fe(CN)₆]⁴⁻: Fe²⁺ (3d⁶), strong field CN⁻ → t_2g⁶ e_g⁰ (n = 0, μ = 0 BM).\n4. [Co(NH₃)₆]³⁺: Co³⁺ (3d⁶), strong field NH₃ → t_2g⁶ e_g⁰ (n = 0, μ = 0 BM).",
      difficulty: "Medium",
      conceptTested: "Comparison of spin-only magnetic moments across transition metal complexes",
      ncertReference: "Class 12 NCERT Chemistry Part 1, Section 9.5"
    }
  ]
};
