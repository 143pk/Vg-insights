import { DetailedTopicContent } from '../../types/neet';
import { COORDINATION_DIAGRAMS } from '../coordinationCompounds/coordinationDiagrams';
import { COORDINATION_CONCEPTS } from '../coordinationCompounds/coordinationTermsAndConcepts';
import { COORDINATION_TRAPS_AND_SHEET } from '../coordinationCompounds/coordinationTrapsAndFormulaSheet';
import { COORDINATION_PYQS } from '../coordinationCompounds/coordinationPyqs';
import { COORDINATION_PRACTICE_SETS } from '../coordinationCompounds/coordinationPracticeSets';

export const chemVbtCftTheoriesDetails: DetailedTopicContent = {
  topicId: "chem-vbt-cft-theories",
  topicName: "Bonding Theories: VBT & Crystal Field Theory",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry",
  chapter: "Coordination Compounds",

  whatIsThisTopic: "Bonding in coordination compounds is explained by two primary theoretical frameworks: Valence Bond Theory (VBT) and Crystal Field Theory (CFT). VBT models coordinate bond formation via orbital hybridization (sp³, dsp², d²sp³, sp³d²) and accounts for inner vs outer orbital geometries and magnetic properties. CFT treats metal-ligand interactions as electrostatic point charges, explaining the splitting of degenerate 3d-orbitals into t₂g and eg sets in octahedral fields (Δₒ) and e and t₂ sets in tetrahedral fields (Δₜ = 4/9 Δₒ). This module covers CFSE calculations, the Spectrochemical Series, high-spin vs low-spin states, magnetic moments (μ = √[n(n+2)] BM), and synergic bonding in metal carbonyls.",

  basicIdea: [
    "Valence Bond Theory (VBT): Ligands donate electron pairs into vacant hybrid orbitals of the central metal. Hybridization dictates geometry: sp³ (Tetrahedral), dsp² (Square Planar), d²sp³ (Inner Orbital Octahedral), sp³d² (Outer Orbital Octahedral).",
    "Crystal Field Theory (CFT): Purely electrostatic model. In an octahedral field, axial eg orbitals (d_x²-y², d_z²) are destabilized by +0.6 Δₒ, while non-axial t₂g orbitals (d_xy, d_yz, d_zx) are stabilized by −0.4 Δₒ relative to the spherical barycentre.",
    "Tetrahedral Splitting (Δₜ): Splitting pattern is inverted (lower e, upper t₂) and smaller in magnitude: Δₜ ≈ ⁴⁄₉ Δₒ. Because Δₜ is small, Δₜ < P always, making tetrahedral complexes virtually ALWAYS HIGH SPIN.",
    "Spectrochemical Series: Experimentally determined order of ligand field splitting ability: I⁻ < Br⁻ < S²⁻ < SCN⁻ < Cl⁻ < N₃⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < CN⁻ < CO.",
    "Spin-Only Magnetic Moment: μ_s = √[n(n+2)] BM (where n is the number of unpaired electrons). Diamagnetic when n = 0 (μ = 0); Paramagnetic when n > 0.",
    "Synergic Bonding in Metal Carbonyls: σ-bond from ligand lone pair donation (CO → M) is reinforced by π-backbonding from filled metal d-orbitals into empty π* antibonding molecular orbitals of CO (M → CO)."
  ],

  importantTerms: [
    {
      term: "Inner Orbital Complex",
      definition: "An octahedral complex utilizing inner (n-1)d orbitals in d²sp³ hybridization, typically formed with strong field ligands yielding low-spin states.",
      neetSignificance: "e.g. [Fe(CN)₆]⁴⁻, [Co(NH₃)₆]³⁺ (Diamagnetic, μ = 0 BM)."
    },
    {
      term: "Outer Orbital Complex",
      definition: "An octahedral complex utilizing outer nd orbitals in sp³d² hybridization, typically formed with weak field ligands yielding high-spin states.",
      neetSignificance: "e.g. [Fe(H₂O)₆]²⁺, [CoF₆]³⁻ (Paramagnetic, μ = 4.90 BM)."
    },
    {
      term: "Crystal Field Splitting Energy (Δₒ / Δₜ)",
      definition: "The energy difference between the split d-orbital energy levels created by the electrostatic crystal field of approaching ligands.",
      neetSignificance: "Δₒ determines whether pairing occurs (if Δₒ > P → low spin; if Δₒ < P → high spin)."
    },
    {
      term: "Pairing Energy (P)",
      definition: "The electrostatic energy required to pair two electrons against Coulombic electron-electron repulsion within the same orbital.",
      neetSignificance: "If Δₒ > P (strong field), electrons pair in t₂g; if Δₒ < P (weak field), electrons occupy eg singly."
    },
    {
      term: "Spectrochemical Series",
      definition: "The empirical arrangement of ligands in order of increasing crystal field splitting energy (magnitude of Δₒ).",
      neetSignificance: "Tested directly in NEET to predict spin state, CFSE, and absorption wavelength."
    },
    {
      term: "Synergic π-Backbonding",
      definition: "Simultaneous σ-donation from ligand to metal and π-backdonation from metal d-orbitals into ligand π* antibonding orbitals.",
      neetSignificance: "Strengthens M–C bond and weakens C–O bond in metal carbonyls [M(CO)ₙ]."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Valence Bond Theory (VBT): Hybridization, Geometries & Magnetic Moments",
      paragraphs: [
        "Valence Bond Theory (Pauling) treats metal-ligand coordination as the overlap of vacant hybrid orbitals of the central metal atom/ion with filled donor orbitals of ligands.",
        "Coordination Number 4:",
        "• sp³ Hybridization → Tetrahedral geometry. Formed with weak field ligands (e.g. [NiCl₄]²⁻, paramagnetic, 2 unpaired electrons) or d¹⁰ ions with strong field ligands (e.g. [Ni(CO)₄], diamagnetic, 0 unpaired electrons).",
        "• dsp² Hybridization → Square Planar geometry. Formed when strong field ligands force electron pairing in d⁸ systems, freeing one 3d orbital (e.g. [Ni(CN)₄]²⁻, [Pt(NH₃)₂Cl₂], diamagnetic). All 4d and 5d metals (Pt²⁺, Pd²⁺) form square planar complexes even with weak field halides due to high effective nuclear charge.",
        "Coordination Number 6:",
        "• d²sp³ (Inner Orbital / Low Spin): Strong field ligands (CN⁻, en, CO, NH₃ for Co³⁺) force pairing of (n-1)d electrons, freeing two 3d orbitals.",
        "• sp³d² (Outer Orbital / High Spin): Weak field ligands (F⁻, Cl⁻, H₂O) cannot force electron pairing; the complex uses outer 4d orbitals."
      ],
      tables: [
        {
          title: "VBT Hybridization & Magnetic Matrix for Key NEET Complexes",
          headers: ["Complex", "Metal Ion & d-Config", "Ligand Field", "Hybridization", "Geometry", "Unpaired e⁻ (n)", "Magnetic Moment (μ)"],
          rows: COORDINATION_CONCEPTS.vbtHybridizationMatrix.map(c => [
            c.complex,
            c.metalIon,
            c.ligandType,
            c.hybridization,
            c.geometry,
            String(c.unpairedElectrons),
            c.magneticMoment
          ])
        },
        COORDINATION_TRAPS_AND_SHEET.comparisonTables.innerVsOuterOrbital
      ]
    },
    {
      heading: "2. Crystal Field Theory (CFT): Octahedral (Δₒ) vs Tetrahedral (Δₜ) Splitting",
      paragraphs: [
        "Crystal Field Theory (Bethe & Van Vleck) models the metal-ligand interaction as purely electrostatic: ligands are point negative charges (anions) or point dipoles (neutral molecules).",
        "Octahedral Splitting (Δₒ): As 6 ligands approach along the Cartesian x, y, z axes, the axial orbitals (d_x²-y², d_z², termed e_g) experience greater electrostatic repulsion and are raised in energy by +0.6 Δₒ (+3/5 Δₒ). The non-axial orbitals (d_xy, d_yz, d_zx, termed t_2g) point between the axes, experience less repulsion, and are lowered in energy by −0.4 Δₒ (−2/5 Δₒ).",
        "Tetrahedral Splitting (Δₜ): As 4 ligands approach the corners of a cube, they point closer to the non-axial d-orbitals. Hence, the splitting is INVERTED: e set (d_x²-y², d_z²) is lowered by −0.6 Δₜ, and t₂ set (d_xy, d_yz, d_zx) is raised by +0.4 Δₜ.",
        "Critical NEET Relation: Δₜ = ⁴⁄₉ Δₒ (~0.44 Δₒ). Because of the smaller magnitude of Δₜ, the crystal field splitting energy is virtually never greater than the pairing energy (Δₜ < P always), meaning tetrahedral complexes are almost ALWAYS HIGH SPIN."
      ],
      visual: {
        caption: "Crystal Field Theory: Octahedral (Δₒ) vs Tetrahedral (Δₜ) Splitting Diagrams.",
        guide: "Observe the barycentre, the splitting direction, and the relative energy shifts.",
        svgContent: COORDINATION_DIAGRAMS.crystalFieldSplitting
      }
    },
    {
      heading: "3. Spectrochemical Series & Octahedral CFSE Calculation Table (d¹ to d¹⁰)",
      paragraphs: [
        "The Spectrochemical Series arranges ligands in order of increasing crystal field splitting energy Δₒ:",
        "I⁻ < Br⁻ < S²⁻ < SCN⁻ < Cl⁻ < N₃⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < CN⁻ < CO.",
        "• Weak field ligands (Halides, H₂O, ox²⁻): Δₒ < P → High spin (follow Hund's rule, electrons fill t₂g then eg before pairing).",
        "• Strong field ligands (CO, CN⁻, en, NH₃ for Co³⁺): Δₒ > P → Low spin (electrons pair up completely in t₂g before occupying eg).",
        "Crystal Field Stabilization Energy formula: CFSE(oct) = [−0.4 n(t₂g) + 0.6 n(eg)] Δₒ + mP."
      ],
      tables: [
        {
          title: "Complete Octahedral CFSE Configuration Table (d¹ to d¹⁰)",
          headers: ["d-Count", "Weak Field Config", "High Spin CFSE", "Unpaired (n)", "Strong Field Config", "Low Spin CFSE", "Unpaired (n)"],
          rows: COORDINATION_CONCEPTS.cftOctahedralCfseTable.map(row => [
            row.dCount,
            row.highSpinConfig,
            row.highSpinCfse,
            String(row.highSpinUnpaired),
            row.lowSpinConfig,
            row.lowSpinCfse,
            String(row.lowSpinUnpaired)
          ])
        },
        COORDINATION_TRAPS_AND_SHEET.comparisonTables.vbtVsCft
      ]
    },
    {
      heading: "4. Synergic Bonding in Metal Carbonyls & Bond Strengths",
      paragraphs: [
        "Homoleptic metal carbonyls (e.g. [Ni(CO)₄], [Fe(CO)₅], [Cr(CO)₆], [V(CO)₆]⁻, [Mn₂(CO)₁₀]) possess unique synergic bonding consisting of two components:",
        "1. σ-Bond (M ← C≡O): The lone pair on the carbon atom of CO is donated into a vacant hybrid d/s/p orbital of the central metal atom.",
        "2. π-Backbond (M → C≡O): A filled non-bonding d-orbital of the metal back-donates electron density into the vacant π* antibonding molecular orbital of the carbon monoxide ligand.",
        "Synergic Effect: The σ-donation increases electron density on the metal, facilitating π-backdonation; in turn, π-backdonation decreases electron density on the metal, facilitating σ-donation.",
        "Consequence on Bond Orders: π-backbonding into the π* orbital of CO reduces the C–O triple bond order and weakens the C–O bond (decreasing C–O stretching frequency ν_CO in IR spectra), while strengthening the M–C bond.",
        "NEET Trend: Greater negative charge on the metal complex → More extensive π-backbonding → Stronger M–C bond → Weaker & longer C–O bond (e.g. C–O bond length: [V(CO)₆]⁻ > [Cr(CO)₆] > [Mn(CO)₆]⁺)."
      ]
    }
  ],

  formulae: [
    {
      title: "Spin-Only Magnetic Moment Formula",
      formula: "\\mu_s = \\sqrt{n(n + 2)} \\text{ BM}",
      variables: "n = number of unpaired d-electrons; BM = Bohr Magnetons",
      calculationExample: {
        problem: "Calculate the spin-only magnetic moment of [Fe(H₂O)₆]²⁺ and [Fe(CN)₆]⁴⁻.",
        given: "Fe²⁺ has electronic configuration [Ar] 3d⁶.",
        stepByStep: [
          "For [Fe(H₂O)₆]²⁺: H₂O is a weak field ligand (Δₒ < P). Configuration is t₂g⁴ eg² → n = 4 unpaired electrons.",
          "μ_s = √[4(4 + 2)] = √24 ≈ 4.90 BM (Paramagnetic).",
          "For [Fe(CN)₆]⁴⁻: CN⁻ is a strong field ligand (Δₒ > P). Configuration is t₂g⁶ eg⁰ → n = 0 unpaired electrons.",
          "μ_s = √[0(0 + 2)] = 0.0 BM (Diamagnetic)."
        ],
        answer: "[Fe(H₂O)₆]²⁺ = 4.90 BM (paramagnetic); [Fe(CN)₆]⁴⁻ = 0.0 BM (diamagnetic)."
      }
    },
    {
      title: "Octahedral CFSE Calculation",
      formula: "\\text{CFSE} = \\left[ -0.4 \\, n(t_{2g}) + 0.6 \\, n(e_g) \\right] \\Delta_o + mP",
      variables: "n(t₂g) = electrons in t₂g; n(eg) = electrons in eg; m = additional paired electron sets",
      calculationExample: {
        problem: "Find CFSE for high-spin d⁵ and low-spin d⁶ octahedral complexes.",
        given: "High spin d⁵ = t₂g³ eg²; Low spin d⁶ = t₂g⁶ eg⁰",
        stepByStep: [
          "High spin d⁵: CFSE = [−0.4(3) + 0.6(2)] Δₒ = [−1.2 + 1.2] Δₒ = 0.0 Δₒ.",
          "Low spin d⁶: CFSE = [−0.4(6) + 0.6(0)] Δₒ + 2P = −2.4 Δₒ + 2P."
        ],
        answer: "d⁵ (high spin) CFSE = 0.0 Δₒ; d⁶ (low spin) CFSE = −2.4 Δₒ + 2P."
      }
    },
    {
      title: "Tetrahedral to Octahedral Splitting Relationship",
      formula: "\\Delta_t = \\frac{4}{9} \\Delta_o \\approx 0.44 \\, \\Delta_o",
      variables: "Δₜ = tetrahedral splitting; Δₒ = octahedral splitting",
      whenToUse: "When comparing crystal field splitting magnitudes between geometries"
    }
  ],

  neetImportantPoints: [
    "In octahedral CFT, d-orbitals split into lower t₂g (d_xy, d_yz, d_zx, −0.4 Δₒ) and higher eg (d_x²-y², d_z², +0.6 Δₒ).",
    "In tetrahedral CFT, splitting is inverted (lower e, higher t₂) and smaller: Δₜ = (4/9) Δₒ. Δₜ is always less than pairing energy P, so tetrahedral complexes are virtually always high spin.",
    "[Ni(CO)₄] is sp³ hybridized, tetrahedral, and diamagnetic (3d¹⁰). [Ni(CN)₄]²⁻ is dsp² hybridized, square planar, and diamagnetic (3d⁸). [NiCl₄]²⁻ is sp³ hybridized, tetrahedral, and paramagnetic (2 unpaired electrons).",
    "[Co(NH₃)₆]³⁺ is diamagnetic (d²sp³, low spin) because NH₃ acts as a strong field ligand for Co³⁺.",
    "[CoF₆]³⁻ is paramagnetic with 4 unpaired electrons (sp³d², high spin) because F⁻ is a weak field ligand.",
    "Metal carbonyl synergic bonding involves M←CO σ-donation and M→CO π-backbonding into empty π* antibonding molecular orbitals.",
    "Higher negative charge on a carbonyl complex (e.g. [V(CO)₆]⁻) increases π-backbonding, strengthening the M–C bond and lengthening/weakening the C–O bond."
  ],

  commonConfusions: COORDINATION_TRAPS_AND_SHEET.neetTraps.slice(5, 9).map(t => ({
    commonConfusion: t.confusion,
    correctFact: t.correction,
    whyItMattersForNEET: t.neetTip
  })),

  quickRevision: COORDINATION_TRAPS_AND_SHEET.rapidRevisionPoints.slice(6, 12),

  practiceQuestions: COORDINATION_PRACTICE_SETS.bonding,

  pyqs: COORDINATION_PYQS.bonding,

  neetMarksPotential: {
    topicName: "Bonding Theories: VBT & Crystal Field Theory",
    confidenceLabel: "HIGH",
    confidenceText: "Highest-weightage topic in the entire Coordination Compounds chapter (consistently 2 questions per NEET exam).",
    totalAnalyzedPapers: 12,
    papersWithDirectPyqs: 12,
    totalDirectPyqs: 18,
    totalHistoricalMarks: 72,
    averageDirectPyqsPerPaper: 1.5,
    minDirectMarks: 4,
    maxDirectMarks: 12,
    weightagePercentage: 42,
    expectedQuestionsCount: 2,
    preparationStrategy: "Master CFSE calculations, spectrochemical series order, VBT hybridization derivations for Ni and Co complexes, and synergic bonding in metal carbonyls."
  }
};
