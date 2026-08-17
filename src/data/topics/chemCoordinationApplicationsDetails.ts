import { DetailedTopicContent } from '../../types/neet';
import { COORDINATION_DIAGRAMS } from '../coordinationCompounds/coordinationDiagrams';
import { COORDINATION_CONCEPTS } from '../coordinationCompounds/coordinationTermsAndConcepts';
import { COORDINATION_TRAPS_AND_SHEET } from '../coordinationCompounds/coordinationTrapsAndFormulaSheet';
import { COORDINATION_PYQS } from '../coordinationCompounds/coordinationPyqs';
import { COORDINATION_PRACTICE_SETS } from '../coordinationCompounds/coordinationPracticeSets';

export const chemCoordinationApplicationsDetails: DetailedTopicContent = {
  topicId: "chem-coordination-properties-applications",
  topicName: "Magnetic Properties, Stability, Colour & Applications",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry",
  chapter: "Coordination Compounds",

  whatIsThisTopic: "This module covers the physical properties, thermodynamic stability, optical phenomena, and real-world applications of coordination compounds. Key areas include the origin of colour via d–d electron transitions and complementary colour transmission, spin-only magnetic moments (μ = √[n(n+2)] BM), stepwise vs overall stability constants (βₙ), the entropy-driven Chelate Effect, and the extensive NCERT catalogue of biological (Haemoglobin, Chlorophyll, Vitamin B₁₂), medicinal (Cisplatin, EDTA lead antidote, D-penicillamine), metallurgical (cyanide extraction of Au/Ag, Mond process for Ni), and catalytic applications (Wilkinson's catalyst).",

  basicIdea: [
    "Origin of Colour: Arises from d–d electronic transitions where light of specific wavelength is absorbed to promote an electron from lower t₂g to higher eg orbitals. The transmitted (observed) colour is the complementary colour of the absorbed light.",
    "Colourless Complexes: Transition metal ions with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺, Cd²⁺, Hg²⁺) configurations have no possible d–d transitions and are therefore colourless. Anhydrous CuSO₄ is white, but hydrated CuSO₄·5H₂O is blue due to ligand-induced splitting.",
    "Magnetic Properties: Governed by the number of unpaired electrons (n). Spin-only magnetic moment μ_s = √[n(n+2)] BM. Diamagnetic when n = 0; Paramagnetic when n > 0.",
    "Complex Stability: Measured by overall formation constant βₙ = K₁ × K₂ × ... × Kₙ. Stability increases with higher metal oxidation state, smaller ionic radius (Irving-Williams order: Mn²⁺ < Fe²⁺ < Co²⁺ < Ni²⁺ < Cu²⁺ > Zn²⁺), and the Chelate Effect (entropy gain ΔS° > 0).",
    "Biological Complexes: Haemoglobin contains Fe²⁺ (oxygen transport); Chlorophyll contains Mg²⁺ (photosynthesis); Vitamin B₁₂ contains Co³⁺ (anti-pernicious anaemia coenzyme).",
    "Medicinal & Industrial Uses: Cisplatin (cis-[Pt(NH₃)₂Cl₂]) as an anti-cancer drug; CaNa₂EDTA for lead poisoning; Mond's process for nickel refining via [Ni(CO)₄]; Cyanide process for Au/Ag extraction; Wilkinson's catalyst [(Ph₃P)₃RhCl] for alkene hydrogenation."
  ],

  importantTerms: [
    {
      term: "d–d Transition",
      definition: "The excitation of a d-electron from a lower-energy d-orbital subset (t₂g) to a higher-energy d-orbital subset (eg) upon absorption of visible light.",
      neetSignificance: "The fundamental cause of colour in transition metal coordination complexes."
    },
    {
      term: "Complementary Colour",
      definition: "The colour perceived by the human eye when a substance selectively absorbs a specific wavelength of white light.",
      neetSignificance: "e.g. Absorbing yellow-green (~498 nm) results in an observed purple/violet colour in [Ti(H₂O)₆]³⁺."
    },
    {
      term: "Overall Stability Constant (βₙ)",
      definition: "The equilibrium constant for the overall formation reaction of a complex MLₙ from the metal ion M and n ligands: βₙ = [MLₙ] / ([M][L]ⁿ).",
      neetSignificance: "Related to stepwise constants by βₙ = K₁ × K₂ × ... × Kₙ and instability constant K_inst = 1 / βₙ."
    },
    {
      term: "Irving-Williams Series",
      definition: "The empirical order of thermodynamic stability for high-spin divalent transition metal complexes: Mn²⁺ < Fe²⁺ < Co²⁺ < Ni²⁺ < Cu²⁺ > Zn²⁺.",
      neetSignificance: "Cu²⁺ complexes exhibit maximum stability due to Jahn-Teller stabilization."
    },
    {
      term: "Chelate Effect",
      definition: "The enhanced thermodynamic stability of complexes with polydentate chelating ligands compared to those with unidentate analogues due to positive entropy (ΔS° > 0).",
      neetSignificance: "[Ni(en)₃]²⁺ is ~10⁸ times more stable than [Ni(NH₃)₆]²⁺."
    },
    {
      term: "Cisplatin",
      definition: "The square planar coordination compound cis-diamminedichloridoplatinum(II), cis-[Pt(NH₃)₂Cl₂], used in cancer chemotherapy.",
      neetSignificance: "Inhibits tumor growth by crosslinking DNA; transplatin is biologically inactive."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Spectrochemical Series & Colour Origin (d–d Transitions)",
      paragraphs: [
        "In an octahedral complex, the 3d-orbitals are split into lower t₂g and higher eg sets separated by energy gap Δₒ. When visible light falls on the complex, an electron absorbs a photon of energy hν = Δₒ = hc / λ and is promoted from t₂g to eg.",
        "The light transmitted through the solution lacks the absorbed wavelength and appears as the COMPLEMENTARY COLOUR.",
        "Crucial NCERT Examples:",
        "1. [Ti(H₂O)₆]³⁺ (Ti³⁺ is 3d¹): Ground state configuration t₂g¹ eg⁰. It absorbs yellow-green light (λ ≈ 498 nm) to promote the electron to t₂g⁰ eg¹, giving the solution its characteristic PURPLE / VIOLET colour.",
        "2. Anhydrous CuSO₄ vs Hydrated CuSO₄·5H₂O: In anhydrous CuSO₄, no ligands surround Cu²⁺, so the 3d-orbitals remain degenerate (no crystal field splitting) → WHITE. In hydrated CuSO₄·5H₂O, four H₂O molecules coordinate in a square plane, splitting the d-orbitals → absorbs red-orange light and appears DEEP BLUE.",
        "3. Colourless Complexes (d⁰ and d¹⁰): Sc³⁺ (3d⁰), Ti⁴⁺ (3d⁰), Cu⁺ (3d¹⁰), Zn²⁺ (3d¹⁰) cannot undergo d–d transitions because their d-subshells are either completely empty or completely filled."
      ],
      visual: {
        caption: "Spectrochemical Series, d-d Transition Mechanism & Complementary Colour Wheel.",
        guide: "Use the colour wheel to determine the observed colour opposite to the absorbed wavelength.",
        svgContent: COORDINATION_DIAGRAMS.spectrochemicalAndColourWheel
      }
    },
    {
      heading: "2. Magnetic Properties & Spin-Only Calculations",
      paragraphs: [
        "Coordination complexes are classified magnetically as Diamagnetic (all electrons paired, weakly repelled by magnetic fields) or Paramagnetic (possessing unpaired electrons, attracted into magnetic fields).",
        "The spin-only magnetic moment is calculated using the formula: μ_s = √[n(n + 2)] Bohr Magnetons (BM), where n is the number of unpaired d-electrons.",
        "Relationship between n and μ_s:",
        "• n = 1 → μ = √3 ≈ 1.73 BM (e.g. [Ti(H₂O)₆]³⁺, [Cu(NH₃)₄]²⁺)",
        "• n = 2 → μ = √8 ≈ 2.83 BM (e.g. [Ni(H₂O)₆]²⁺, [NiCl₄]²⁻)",
        "• n = 3 → μ = √15 ≈ 3.87 BM (e.g. [Cr(H₂O)₆]³⁺, [V(H₂O)₆]²⁺)",
        "• n = 4 → μ = √24 ≈ 4.90 BM (e.g. [Fe(H₂O)₆]²⁺, [CoF₆]³⁻)",
        "• n = 5 → μ = √35 ≈ 5.92 BM (e.g. [Fe(H₂O)₆]³⁺, [Mn(H₂O)₆]²⁺)",
        "• n = 0 → μ = 0.0 BM (Diamagnetic, e.g. [Fe(CN)₆]⁴⁻, [Co(NH₃)₆]³⁺, [Ni(CN)₄]²⁻, [Ni(CO)₄])."
      ]
    },
    {
      heading: "3. Thermodynamic Stability of Complexes & The Chelate Effect",
      paragraphs: [
        "The formation of a complex in aqueous solution is an equilibrium process governed by stepwise stability constants (K₁, K₂, ..., Kₙ) and the overall stability constant βₙ: M + nL ⇌ MLₙ, where βₙ = K₁ × K₂ × ... × Kₙ.",
        "Factors Enhancing Complex Stability:",
        "1. Charge and Size of Metal Ion: Greater positive charge density (higher charge/radius ratio) yields greater stability (e.g. Fe³⁺ complexes are more stable than Fe²⁺).",
        "2. Irving-Williams Stability Order: For divalent transition metals of the 3d-series: Mn²⁺ < Fe²⁺ < Co²⁺ < Ni²⁺ < Cu²⁺ > Zn²⁺. Cu²⁺ shows maximum stability due to Jahn-Teller tetragonal elongation distortion.",
        "3. Basic Nature of Ligands: More basic ligands (better electron donors like CN⁻, NH₃) form more stable complexes than less basic ligands (halides).",
        "4. The Chelate Effect: Complexes formed with polydentate chelating ligands (e.g. 'en', EDTA⁴⁻) are vastly more stable than analogous monodentate complexes. For example, [Ni(H₂O)₆]²⁺ + 3 en ⇌ [Ni(en)₃]²⁺ + 6 H₂O. Replacing 3 ligand particles creates 6 free water molecules (net gain of +3 independent particles), resulting in a large increase in entropy (ΔS° > 0).",
        "5. Macrocyclic Effect: Complexes of pre-organized macrocyclic ligands (porphyrins, crown ethers, cryptands) exhibit even higher stability than open-chain chelates."
      ]
    },
    {
      heading: "4. NCERT Master Catalogue: Biological, Medicinal & Industrial Applications",
      paragraphs: [
        "Coordination compounds play pivotal roles across biological metabolism, pharmacology, metallurgy, industrial catalysis, and qualitative analytical chemistry."
      ],
      tables: [
        {
          title: "Comprehensive NCERT Applications of Coordination Compounds",
          headers: ["Domain", "Complex / System", "Metal Ion", "Coordinating Ligand", "Function / Mechanism"],
          rows: COORDINATION_CONCEPTS.applicationsMasterTable.map(app => [
            app.category,
            app.example,
            app.metal,
            app.ligandStructure,
            app.function
          ])
        }
      ]
    }
  ],

  formulae: [
    {
      title: "Overall Stability Constant",
      formula: "\\beta_n = \\prod_{i=1}^n K_i = K_1 \\times K_2 \\times \\dots \\times K_n",
      variables: "βₙ = overall stability constant, K_i = stepwise equilibrium constants",
      whenToUse: "When calculating complex formation constants or equilibrium concentrations"
    },
    {
      title: "Instability (Dissociation) Constant",
      formula: "K_{\\text{inst}} = \\frac{1}{\\beta_n}",
      variables: "K_inst = instability constant of the complex",
      whenToUse: "When comparing dissociation tendency of complex ions"
    },
    {
      title: "Wavelength of d–d Absorption",
      formula: "\\lambda = \\frac{h c}{\\Delta_o}",
      variables: "λ = absorbed wavelength (m), h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, Δₒ = crystal field splitting energy (J)",
      whenToUse: "When determining spectral shifts from spectrochemical series"
    }
  ],

  neetImportantPoints: [
    "Colour in transition metal complexes is caused by d–d transitions upon absorbing visible light. The perceived colour is the complementary colour.",
    "d⁰ (Sc³⁺, Ti⁴⁺) and d¹⁰ (Zn²⁺, Cu⁺) ions have no d–d transitions and are COLOURLESS.",
    "Anhydrous CuSO₄ is white (degenerate d-orbitals), whereas hydrated CuSO₄·5H₂O is deep blue (crystal field splitting).",
    "Irving-Williams stability order: Mn²⁺ < Fe²⁺ < Co²⁺ < Ni²⁺ < Cu²⁺ > Zn²⁺. Cu²⁺ is the most stable due to Jahn-Teller distortion.",
    "The Chelate Effect is an ENTROPY-DRIVEN phenomenon (ΔS° > 0) caused by the release of multiple monodentate solvent molecules.",
    "Haemoglobin contains Fe²⁺ (oxygen transport); Chlorophyll contains Mg²⁺ (photosynthesis); Vitamin B₁₂ contains Co³⁺ (anti-pernicious anaemia).",
    "Cisplatin (cis-[Pt(NH₃)₂Cl₂]) is an anti-cancer drug; CaNa₂EDTA treats lead poisoning; D-penicillamine treats Wilson's disease (copper poisoning); BAL treats Arsenic/Mercury poisoning.",
    "Wilkinson's Catalyst [(Ph₃P)₃RhCl] is used in homogeneous hydrogenation of alkenes.",
    "Mond's process purifies Nickel via volatile [Ni(CO)₄]; MacArthur-Forrest process extracts Au and Ag as [Au(CN)₂]⁻ and [Ag(CN)₂]⁻ complexes."
  ],

  commonConfusions: COORDINATION_TRAPS_AND_SHEET.neetTraps.slice(8, 15).map(t => ({
    commonConfusion: t.confusion,
    correctFact: t.correction,
    whyItMattersForNEET: t.neetTip
  })),

  quickRevision: COORDINATION_TRAPS_AND_SHEET.rapidRevisionPoints.slice(9, 15),

  practiceQuestions: COORDINATION_PRACTICE_SETS.propertiesAndApps,

  pyqs: COORDINATION_PYQS.propertiesAndApps,

  neetMarksPotential: {
    topicName: "Magnetic Properties, Stability, Colour & Applications",
    confidenceLabel: "HIGH",
    confidenceText: "Frequently tested through direct NCERT memory questions, magnetic moment values, and biological/medicinal matches.",
    totalAnalyzedPapers: 12,
    papersWithDirectPyqs: 11,
    totalDirectPyqs: 15,
    totalHistoricalMarks: 60,
    averageDirectPyqsPerPaper: 1.25,
    minDirectMarks: 4,
    maxDirectMarks: 8,
    weightagePercentage: 35,
    expectedQuestionsCount: 1,
    preparationStrategy: "Memorize the complementary colour wheel, magnetic moment values for d¹-d¹⁰, Chelate effect entropy mechanism, and NCERT medicinal applications (Cisplatin, EDTA, Vitamin B₁₂)."
  }
};
