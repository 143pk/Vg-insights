// Comprehensive NCERT-Focused Conceptual Master Data for Chapter 18: Coordination Compounds

export const COORDINATION_CONCEPTS = {
  // 1. Core Terminology & Basic Definitions
  fundamentalTerms: [
    {
      term: "Coordination Entity",
      definition: "A central metal atom or ion bonded to a fixed number of ions or molecules (ligands). It is enclosed within square brackets [ ].",
      example: "[Co(NH₃)₆]³⁺, [Ni(CO)₄], [Pt(NH₃)₂Cl₂]",
      neetPoint: "Species inside the brackets do not ionise in aqueous solution."
    },
    {
      term: "Central Atom / Ion",
      definition: "The metal atom or cation to which a fixed number of ligands are attached via coordinate (dative) bonds. It acts as a Lewis acid (electron pair acceptor).",
      example: "Co³⁺ in [Co(NH₃)₆]³⁺, Fe²⁺ in [Fe(CN)₆]⁴⁻",
      neetPoint: "Usually transition metals due to high nuclear charge, small ionic radius, and availability of vacant d-orbitals."
    },
    {
      term: "Ligand",
      definition: "An ion or neutral molecule containing at least one unshared pair of electrons that coordinates to the central metal ion by donating electron pairs (Lewis base).",
      example: "NH₃, H₂O, Cl⁻, CN⁻, en, EDTA⁴⁻",
      neetPoint: "Classified by denticity (donor atom count), charge (cationic, neutral, anionic), and binding modes."
    },
    {
      term: "Coordination Number (C.N.)",
      definition: "The total number of ligand donor atoms directly bonded to the central metal atom/ion.",
      example: "In [PtCl₆]²⁻ C.N. = 6; in [Fe(C₂O₄)₃]³⁻ C.N. = 3 × 2 = 6 (ox²⁻ is bidentate).",
      neetPoint: "C.N. is NOT simply the count of ligand molecules; for polydentate ligands, multiply by denticity!"
    },
    {
      term: "Coordination Sphere vs Ionisation Sphere",
      definition: "The central metal and ligands within square brackets form the Coordination Sphere (non-ionisable). The counter ions outside the brackets form the Ionisation Sphere (ionisable).",
      example: "In K₄[Fe(CN)₆], K⁺ is in the ionisation sphere, [Fe(CN)₆]⁴⁻ is the coordination sphere.",
      neetPoint: "Only counter ions in the ionisation sphere precipitate with reagents like AgNO₃ or BaCl₂."
    },
    {
      term: "Homoleptic vs Heteroleptic Complexes",
      definition: "Homoleptic complexes have only one type of donor ligand. Heteroleptic complexes have more than one type of ligand coordinated to the metal.",
      example: "Homoleptic: [Co(NH₃)₆]³⁺; Heteroleptic: [Co(NH₃)₄Cl₂]⁺",
      neetPoint: "Heteroleptic complexes frequently exhibit geometrical isomerism (e.g. cis/trans)."
    },
    {
      term: "Denticity",
      definition: "The number of coordinating donor atoms through which a single ligand binds to the central metal ion.",
      example: "Monodentate = 1 (Cl⁻, NH₃), Bidentate = 2 (en, ox²⁻), Hexadentate = 6 (EDTA⁴⁻)",
      neetPoint: "Polydentate ligands that form 5- or 6-membered rings are called chelating ligands."
    },
    {
      term: "Ambidentate Ligand",
      definition: "A monodentate ligand that possesses two different donor atoms, but coordinates through only ONE donor atom at a time.",
      example: "NO₂⁻ (nitro via N or nitrito via O); SCN⁻ (thiocyanato via S or isothiocyanato via N)",
      neetPoint: "Ambidentate ligands are the direct cause of Linkage Isomerism."
    },
    {
      term: "Chelate Effect",
      definition: "The enhanced thermodynamic stability of a coordination complex formed by chelating (polydentate) ligands compared to an analogous complex with monodentate ligands.",
      example: "[Ni(en)₃]²⁺ is vastly more stable than [Ni(NH₃)₆]²⁺.",
      neetPoint: "Driven by entropy increase (ΔS° > 0) due to release of multiple monodentate solvent molecules."
    }
  ],

  // 2. NCERT Ligands Master Table
  ligandClassificationTable: [
    {
      name: "Aqua",
      formula: "H₂O",
      charge: 0,
      denticity: 1,
      donorAtom: "O",
      type: "Neutral Monodentate",
      fieldStrength: "Weak Field",
      iupacName: "aqua"
    },
    {
      name: "Ammine",
      formula: "NH₃",
      charge: 0,
      denticity: 1,
      donorAtom: "N",
      type: "Neutral Monodentate",
      fieldStrength: "Intermediate / Strong Field",
      iupacName: "ammine (double m)"
    },
    {
      name: "Carbonyl",
      formula: "CO",
      charge: 0,
      denticity: 1,
      donorAtom: "C",
      type: "Neutral Monodentate",
      fieldStrength: "Strongest Field (π-acid)",
      iupacName: "carbonyl"
    },
    {
      name: "Nitrosyl",
      formula: "NO",
      charge: 0,
      denticity: 1,
      donorAtom: "N",
      type: "Neutral Monodentate",
      fieldStrength: "Strong Field",
      iupacName: "nitrosyl"
    },
    {
      name: "Chlorido",
      formula: "Cl⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "Cl",
      type: "Anionic Monodentate",
      fieldStrength: "Weak Field",
      iupacName: "chlorido"
    },
    {
      name: "Bromido",
      formula: "Br⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "Br",
      type: "Anionic Monodentate",
      fieldStrength: "Weak Field",
      iupacName: "bromido"
    },
    {
      name: "Fluorido",
      formula: "F⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "F",
      type: "Anionic Monodentate",
      fieldStrength: "Weak Field",
      iupacName: "fluorido"
    },
    {
      name: "Hydroxido",
      formula: "OH⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "O",
      type: "Anionic Monodentate",
      fieldStrength: "Weak Field",
      iupacName: "hydroxido"
    },
    {
      name: "Cyanido (C-bonded)",
      formula: "CN⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "C",
      type: "Ambidentate Anionic",
      fieldStrength: "Very Strong Field",
      iupacName: "cyanido or cyanido-κC"
    },
    {
      name: "Isocyanido (N-bonded)",
      formula: "NC⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "N",
      type: "Ambidentate Anionic",
      fieldStrength: "Strong Field",
      iupacName: "isocyanido or cyanido-κN"
    },
    {
      name: "Nitro (N-bonded)",
      formula: "NO₂⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "N",
      type: "Ambidentate Anionic",
      fieldStrength: "Strong Field",
      iupacName: "nitrito-κN or nitro"
    },
    {
      name: "Nitrito (O-bonded)",
      formula: "ONO⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "O",
      type: "Ambidentate Anionic",
      fieldStrength: "Weak Field",
      iupacName: "nitrito-κO or nitrito"
    },
    {
      name: "Thiocyanato (S-bonded)",
      formula: "SCN⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "S",
      type: "Ambidentate Anionic",
      fieldStrength: "Weak Field",
      iupacName: "thiocyanato-κS or thiocyanato"
    },
    {
      name: "Isothiocyanato (N-bonded)",
      formula: "NCS⁻",
      charge: -1,
      denticity: 1,
      donorAtom: "N",
      type: "Ambidentate Anionic",
      fieldStrength: "Intermediate Field",
      iupacName: "thiocyanato-κN or isothiocyanato"
    },
    {
      name: "Ethylenediamine (en)",
      formula: "H₂NCH₂CH₂NH₂",
      charge: 0,
      denticity: 2,
      donorAtom: "2 × N",
      type: "Neutral Bidentate (Chelating)",
      fieldStrength: "Strong Field",
      iupacName: "ethane-1,2-diamine"
    },
    {
      name: "Oxalato (ox²⁻)",
      formula: "C₂O₄²⁻",
      charge: -2,
      denticity: 2,
      donorAtom: "2 × O",
      type: "Anionic Bidentate (Chelating)",
      fieldStrength: "Weak/Intermediate Field",
      iupacName: "oxalato"
    },
    {
      name: "Glycinato (gly⁻)",
      formula: "NH₂CH₂COO⁻",
      charge: -1,
      denticity: 2,
      donorAtom: "1 N, 1 O (Unsymmetrical)",
      type: "Anionic Bidentate (Chelating)",
      fieldStrength: "Intermediate Field",
      iupacName: "glycinato"
    },
    {
      name: "EDTA⁴⁻",
      formula: "[(OOCCH₂)₂NCH₂CH₂N(CH₂COO)₂]⁴⁻",
      charge: -4,
      denticity: 6,
      donorAtom: "2 N, 4 O",
      type: "Hexadentate (Polydentate Chelating)",
      fieldStrength: "Strong Field",
      iupacName: "ethylenediaminetetraacetato"
    },
    {
      name: "Dimethylglyoximato (dmg⁻)",
      formula: "[CH₃-C(=NOH)-C(=NO⁻)-CH₃]",
      charge: -1,
      denticity: 2,
      donorAtom: "2 × N (H-bonded ring)",
      type: "Anionic Bidentate",
      fieldStrength: "Strong Field",
      iupacName: "dimethylglyoximato (in Ni(dmg)₂ rosy red ppt)"
    }
  ],

  // 3. Werner's Theory Master Reference
  wernersTheoryObservations: [
    {
      formula: "CoCl₃ · 6NH₃",
      wernerFormulation: "[Co(NH₃)₆]Cl₃",
      color: "Yellow (Luteo)",
      primaryValency: 3,
      secondaryValency: 6,
      totalIons: 4,
      ratio: "1 : 3",
      agclMoles: "3 mol AgCl ppt",
      electricalConductance: "Highest among Cobalt series (4 ions)"
    },
    {
      formula: "CoCl₃ · 5NH₃",
      wernerFormulation: "[Co(NH₃)₅Cl]Cl₂",
      color: "Purple (Purpureo)",
      primaryValency: 3,
      secondaryValency: 6,
      totalIons: 3,
      ratio: "1 : 2",
      agclMoles: "2 mol AgCl ppt",
      electricalConductance: "Moderate conductance (3 ions)"
    },
    {
      formula: "CoCl₃ · 4NH₃ (trans)",
      wernerFormulation: "trans-[Co(NH₃)₄Cl₂]Cl",
      color: "Green (Praseo)",
      primaryValency: 3,
      secondaryValency: 6,
      totalIons: 2,
      ratio: "1 : 1",
      agclMoles: "1 mol AgCl ppt",
      electricalConductance: "Lower conductance (2 ions)"
    },
    {
      formula: "CoCl₃ · 4NH₃ (cis)",
      wernerFormulation: "cis-[Co(NH₃)₄Cl₂]Cl",
      color: "Violet (Violeo)",
      primaryValency: 3,
      secondaryValency: 6,
      totalIons: 2,
      ratio: "1 : 1",
      agclMoles: "1 mol AgCl ppt",
      electricalConductance: "Lower conductance (2 ions)"
    },
    {
      formula: "CoCl₃ · 3NH₃",
      wernerFormulation: "[Co(NH₃)₃Cl₃]",
      color: "Blue",
      primaryValency: 3,
      secondaryValency: 6,
      totalIons: 0,
      ratio: "Non-electrolyte",
      agclMoles: "0 mol AgCl (No precipitation)",
      electricalConductance: "Zero (Non-conducting neutral complex)"
    }
  ],

  // 4. IUPAC Nomenclature Master Rules & Solved Examples
  iupacSolvedExamples: [
    {
      formula: "[Co(NH₃)₆]Cl₃",
      cation: "[Co(NH₃)₆]³⁺",
      anion: "3 Cl⁻",
      ligands: "6 ammine (neutral = 0)",
      metalOxidationState: "x + 6(0) = +3 ⇒ x = +3",
      coordinationNumber: 6,
      iupacName: "hexaamminecobalt(III) chloride",
      neetExplanation: "Complex cation named first; metal keeps standard English name 'cobalt' with Roman numeral (III)."
    },
    {
      formula: "[Co(NH₃)₅Cl]Cl₂",
      cation: "[Co(NH₃)₅Cl]²⁺",
      anion: "2 Cl⁻",
      ligands: "5 ammine, 1 chlorido",
      metalOxidationState: "x + 5(0) + 1(-1) = +2 ⇒ x = +3",
      coordinationNumber: 6,
      iupacName: "pentaamminechloridocobalt(III) chloride",
      neetExplanation: "Alphabetical order: ammine ('a') precedes chlorido ('c'). Prefix penta- is ignored in alphabetization."
    },
    {
      formula: "K₄[Fe(CN)₆]",
      cation: "4 K⁺",
      anion: "[Fe(CN)₆]⁴⁻",
      ligands: "6 cyanido (charge = -1)",
      metalOxidationState: "x + 6(-1) = -4 ⇒ x = +2",
      coordinationNumber: 6,
      iupacName: "potassium hexacyanidoferrate(II)",
      neetExplanation: "Cation K⁺ named first without prefix 'tetra'; anionic complex suffix changes from iron to 'ferrate'."
    },
    {
      formula: "K₃[Fe(CN)₆]",
      cation: "3 K⁺",
      anion: "[Fe(CN)₆]³⁻",
      ligands: "6 cyanido (charge = -1)",
      metalOxidationState: "x + 6(-1) = -3 ⇒ x = +3",
      coordinationNumber: 6,
      iupacName: "potassium hexacyanidoferrate(III)",
      neetExplanation: "Potassium hexacyanidoferrate(III) (commonly Potassium ferricyanide)."
    },
    {
      formula: "[Pt(NH₃)₂Cl(NO₂)]",
      cation: "Neutral complex",
      anion: "None",
      ligands: "2 ammine, 1 chlorido, 1 nitrito-κN (nitro)",
      metalOxidationState: "x + 2(0) + 1(-1) + 1(-1) = 0 ⇒ x = +2",
      coordinationNumber: 4,
      iupacName: "diamminechloridonitrito-κNplatinum(II)",
      neetExplanation: "Alphabetical order: ammine > chlorido > nitrito. Metal retains standard name 'platinum'."
    },
    {
      formula: "[Cr(H₂O)₄Cl₂]Cl",
      cation: "[Cr(H₂O)₄Cl₂]⁺",
      anion: "Cl⁻",
      ligands: "4 aqua, 2 chlorido",
      metalOxidationState: "x + 4(0) + 2(-1) = +1 ⇒ x = +3",
      coordinationNumber: 6,
      iupacName: "tetraaquadichloridochromium(III) chloride",
      neetExplanation: "Aqua comes before chlorido alphabetically. Cation complex uses standard name chromium."
    },
    {
      formula: "[Co(en)₃]₂(SO₄)₃",
      cation: "[Co(en)₃]³⁺",
      anion: "SO₄²⁻",
      ligands: "3 ethane-1,2-diamine (polydentate with numerical prefix)",
      metalOxidationState: "2x + 6(0) + 3(-2) = 0 ⇒ x = +3",
      coordinationNumber: 6,
      iupacName: "tris(ethane-1,2-diamine)cobalt(III) sulphate",
      neetExplanation: "Because ligand ethane-1,2-diamine contains numerical prefix 'di', multiplier 'tris' is used with parentheses."
    },
    {
      formula: "[Ag(NH₃)₂][Ag(CN)₂]",
      cation: "[Ag(NH₃)₂]⁺",
      anion: "[Ag(CN)₂]⁻",
      ligands: "Cation: 2 ammine; Anion: 2 cyanido",
      metalOxidationState: "In both Ag is +1",
      coordinationNumber: 2,
      iupacName: "diamminesilver(I) dicyanidoargentate(I)",
      neetExplanation: "Cationic complex uses 'silver'; anionic complex uses Latin root 'argentate'."
    },
    {
      formula: "Na₂[Fe(CN)₅(NO)]",
      cation: "2 Na⁺",
      anion: "[Fe(CN)₅(NO)]²⁻ (Sodium nitroprusside)",
      ligands: "5 cyanido, 1 nitrosyl / nitrosonium (NO⁺)",
      metalOxidationState: "x + 5(-1) + 1(+1) = -2 ⇒ x = +2 (or +3 in older IUPAC)",
      coordinationNumber: 6,
      iupacName: "sodium pentacyanidonitrosylferrate(II)",
      neetExplanation: "Classic reagent for sulphide detection (gives violet colour [Fe(CN)₅(NOS)]⁴⁻)."
    },
    {
      formula: "[Ni(CO)₄]",
      cation: "Neutral complex",
      anion: "None",
      ligands: "4 carbonyl (neutral = 0)",
      metalOxidationState: "x + 4(0) = 0 ⇒ x = 0",
      coordinationNumber: 4,
      iupacName: "tetracarbonylnickel(0)",
      neetExplanation: "Oxidation state is (0) in Roman numerals. Carbonyl carbon is donor atom."
    }
  ],

  // 5. Valence Bond Theory (VBT) Master Reference Matrix
  vbtHybridizationMatrix: [
    {
      complex: "[Co(NH₃)₆]³⁺",
      metalIon: "Co³⁺ (3d⁶)",
      ligandType: "NH₃ (Strong field on Co³⁺)",
      pairingOccurs: "Yes (all 6 d-electrons pair up into 3 d-orbitals)",
      hybridization: "d²sp³ (Inner Orbital)",
      geometry: "Octahedral",
      unpairedElectrons: 0,
      magneticBehavior: "Diamagnetic",
      spinState: "Low Spin",
      magneticMoment: "0.0 BM"
    },
    {
      complex: "[CoF₆]³⁻",
      metalIon: "Co³⁺ (3d⁶)",
      ligandType: "F⁻ (Weak field)",
      pairingOccurs: "No (4 unpaired d-electrons remain)",
      hybridization: "sp³d² (Outer Orbital, uses 4d)",
      geometry: "Octahedral",
      unpairedElectrons: 4,
      magneticBehavior: "Paramagnetic",
      spinState: "High Spin",
      magneticMoment: "√[4(6)] = √24 ≈ 4.90 BM"
    },
    {
      complex: "[Fe(CN)₆]⁴⁻",
      metalIon: "Fe²⁺ (3d⁶)",
      ligandType: "CN⁻ (Very strong field)",
      pairingOccurs: "Yes (6 paired electrons in 3d)",
      hybridization: "d²sp³ (Inner Orbital)",
      geometry: "Octahedral",
      unpairedElectrons: 0,
      magneticBehavior: "Diamagnetic",
      spinState: "Low Spin",
      magneticMoment: "0.0 BM"
    },
    {
      complex: "[Fe(H₂O)₆]²⁺",
      metalIon: "Fe²⁺ (3d⁶)",
      ligandType: "H₂O (Weak field)",
      pairingOccurs: "No (4 unpaired electrons)",
      hybridization: "sp³d² (Outer Orbital)",
      geometry: "Octahedral",
      unpairedElectrons: 4,
      magneticBehavior: "Paramagnetic",
      spinState: "High Spin",
      magneticMoment: "√24 ≈ 4.90 BM"
    },
    {
      complex: "[Fe(CN)₆]³⁻",
      metalIon: "Fe³⁺ (3d⁵)",
      ligandType: "CN⁻ (Strong field)",
      pairingOccurs: "Yes (1 unpaired electron remains in 3d)",
      hybridization: "d²sp³ (Inner Orbital)",
      geometry: "Octahedral",
      unpairedElectrons: 1,
      magneticBehavior: "Paramagnetic",
      spinState: "Low Spin",
      magneticMoment: "√[1(3)] = √3 ≈ 1.73 BM"
    },
    {
      complex: "[Ni(CN)₄]²⁻",
      metalIon: "Ni²⁺ (3d⁸)",
      ligandType: "CN⁻ (Strong field)",
      pairingOccurs: "Yes (forces 2 unpaired electrons to pair, freeing one 3d orbital)",
      hybridization: "dsp²",
      geometry: "Square Planar",
      unpairedElectrons: 0,
      magneticBehavior: "Diamagnetic",
      spinState: "Low Spin",
      magneticMoment: "0.0 BM"
    },
    {
      complex: "[NiCl₄]²⁻",
      metalIon: "Ni²⁺ (3d⁸)",
      ligandType: "Cl⁻ (Weak field)",
      pairingOccurs: "No (3d remains unchanged with 2 unpaired electrons)",
      hybridization: "sp³",
      geometry: "Tetrahedral",
      unpairedElectrons: 2,
      magneticBehavior: "Paramagnetic",
      spinState: "High Spin",
      magneticMoment: "√[2(4)] = √8 ≈ 2.83 BM"
    },
    {
      complex: "[Ni(CO)₄]",
      metalIon: "Ni⁰ (3d⁸ 4s²)",
      ligandType: "CO (Very strong field)",
      pairingOccurs: "Yes (4s electrons pushed into 3d, giving 3d¹⁰)",
      hybridization: "sp³",
      geometry: "Tetrahedral",
      unpairedElectrons: 0,
      magneticBehavior: "Diamagnetic",
      spinState: "Diamagnetic tetrahedral",
      magneticMoment: "0.0 BM"
    },
    {
      complex: "[Cu(NH₃)₄]²⁺",
      metalIon: "Cu²⁺ (3d⁹)",
      ligandType: "NH₃ (Strong field)",
      pairingOccurs: "dsp² (1 unpaired electron in higher orbital/Jahn-Teller distorted)",
      hybridization: "dsp² (or sp²d)",
      geometry: "Square Planar",
      unpairedElectrons: 1,
      magneticBehavior: "Paramagnetic",
      spinState: "Paramagnetic",
      magneticMoment: "√3 ≈ 1.73 BM"
    }
  ],

  // 6. Crystal Field Theory: d1 to d10 CFSE Configuration Table (Octahedral)
  cftOctahedralCfseTable: [
    {
      dCount: "d¹",
      highSpinConfig: "t₂g¹ eg⁰",
      highSpinCfse: "−0.4 Δₒ",
      highSpinUnpaired: 1,
      lowSpinConfig: "t₂g¹ eg⁰",
      lowSpinCfse: "−0.4 Δₒ",
      lowSpinUnpaired: 1,
      notes: "Identical for weak and strong fields (No pairing choice)"
    },
    {
      dCount: "d²",
      highSpinConfig: "t₂g² eg⁰",
      highSpinCfse: "−0.8 Δₒ",
      highSpinUnpaired: 2,
      lowSpinConfig: "t₂g² eg⁰",
      lowSpinCfse: "−0.8 Δₒ",
      lowSpinUnpaired: 2,
      notes: "Identical for weak and strong fields"
    },
    {
      dCount: "d³",
      highSpinConfig: "t₂g³ eg⁰",
      highSpinCfse: "−1.2 Δₒ",
      highSpinUnpaired: 3,
      lowSpinConfig: "t₂g³ eg⁰",
      lowSpinCfse: "−1.2 Δₒ",
      lowSpinUnpaired: 3,
      notes: "Half-filled t₂g (Exceptionally stable, e.g. Cr³⁺)"
    },
    {
      dCount: "d⁴",
      highSpinConfig: "t₂g³ eg¹",
      highSpinCfse: "−0.6 Δₒ (3×-0.4 + 1×0.6)",
      highSpinUnpaired: 4,
      lowSpinConfig: "t₂g⁴ eg⁰",
      lowSpinCfse: "−1.6 Δₒ + 1P",
      lowSpinUnpaired: 2,
      notes: "First bifurcation! High spin if Δₒ < P; Low spin if Δₒ > P"
    },
    {
      dCount: "d⁵",
      highSpinConfig: "t₂g³ eg²",
      highSpinCfse: "0.0 Δₒ (Spherically symmetrical)",
      highSpinUnpaired: 5,
      lowSpinConfig: "t₂g⁵ eg⁰",
      lowSpinCfse: "−2.0 Δₒ + 2P",
      lowSpinUnpaired: 1,
      notes: "High spin d⁵ has CFSE = 0 (e.g. [Mn(H₂O)₆]²⁺, [Fe(H₂O)₆]³⁺)"
    },
    {
      dCount: "d⁶",
      highSpinConfig: "t₂g⁴ eg²",
      highSpinCfse: "−0.4 Δₒ + 1P",
      highSpinUnpaired: 4,
      lowSpinConfig: "t₂g⁶ eg⁰",
      lowSpinCfse: "−2.4 Δₒ + 2P",
      lowSpinUnpaired: 0,
      notes: "Low spin d⁶ has fully filled t₂g⁶ (Diamagnetic, e.g. [Co(NH₃)₆]³⁺, [Fe(CN)₆]⁴⁻)"
    },
    {
      dCount: "d⁷",
      highSpinConfig: "t₂g⁵ eg²",
      highSpinCfse: "−0.8 Δₒ + 2P",
      highSpinUnpaired: 3,
      lowSpinConfig: "t₂g⁶ eg¹",
      lowSpinCfse: "−1.8 Δₒ + 1P",
      lowSpinUnpaired: 1,
      notes: "Low spin d⁷ has 1 unpaired electron (e.g. [Co(en)₃]²⁺)"
    },
    {
      dCount: "d⁸",
      highSpinConfig: "t₂g⁶ eg²",
      highSpinCfse: "−1.2 Δₒ + 3P",
      highSpinUnpaired: 2,
      lowSpinConfig: "t₂g⁶ eg²",
      lowSpinCfse: "−1.2 Δₒ + 3P",
      lowSpinUnpaired: 2,
      notes: "Identical for weak and strong fields (e.g. Ni²⁺)"
    },
    {
      dCount: "d⁹",
      highSpinConfig: "t₂g⁶ eg³",
      highSpinCfse: "−0.6 Δₒ + 4P",
      highSpinUnpaired: 1,
      lowSpinConfig: "t₂g⁶ eg³",
      lowSpinCfse: "−0.6 Δₒ + 4P",
      lowSpinUnpaired: 1,
      notes: "Jahn-Teller elongation distortion common (e.g. Cu²⁺)"
    },
    {
      dCount: "d¹⁰",
      highSpinConfig: "t₂g⁶ eg⁴",
      highSpinCfse: "0.0 Δₒ + 5P",
      highSpinUnpaired: 0,
      lowSpinConfig: "t₂g⁶ eg⁴",
      lowSpinCfse: "0.0 Δₒ + 5P",
      lowSpinUnpaired: 0,
      notes: "CFSE = 0 (e.g. Zn²⁺, Cd²⁺, Hg²⁺, Cu⁺)"
    }
  ],

  // 7. Biological, Analytical & Medicinal Applications of Complexes
  applicationsMasterTable: [
    {
      category: "Biological Systems",
      example: "Haemoglobin",
      metal: "Fe²⁺ (Iron(II))",
      ligandStructure: "Porphyrin ring (Heme group)",
      function: "Transports O₂ from lungs to tissues. CO poisoning occurs because CO binds to Fe²⁺ ~200× more strongly than O₂."
    },
    {
      category: "Biological Systems",
      example: "Chlorophyll",
      metal: "Mg²⁺ (Magnesium(II))",
      ligandStructure: "Porphyrin-like chlorin macrocycle",
      function: "Absorbs solar photon energy (red and blue light) to drive photosynthesis in green plants."
    },
    {
      category: "Biological Systems",
      example: "Vitamin B₁₂ (Cyanocobalamin)",
      metal: "Co³⁺ (Cobalt(III))",
      ligandStructure: "Corrin ring macrocycle",
      function: "Essential coenzyme in DNA synthesis, erythrocyte maturation, and prevents pernicious anaemia."
    },
    {
      category: "Biological Systems",
      example: "Carbonic Anhydrase & Carboxypeptidase",
      metal: "Zn²⁺ (Zinc(II))",
      ligandStructure: "Histidine imidazole coordination",
      function: "Hydration of CO₂ (carbonic anhydrase) and peptide cleavage in digestion (carboxypeptidase)."
    },
    {
      category: "Medicinal Chemistry",
      example: "Cisplatin (cis-[Pt(NH₃)₂Cl₂])",
      metal: "Pt²⁺ (Platinum(II))",
      ligandStructure: "cis-diamminedichloridoplatinum(II)",
      function: "Effective chemotherapeutic anti-cancer drug. Crosslinks purine bases (guanine) of cancer DNA, halting division."
    },
    {
      category: "Medicinal Chemistry",
      example: "EDTA-CaNa₂ Chelate",
      metal: "Ca²⁺ / Na⁺ (replaces with Pb²⁺)",
      ligandStructure: "Ethylenediaminetetraacetate",
      function: "Treatment of lead (Pb²⁺) poisoning. Pb²⁺ forms a more stable, non-toxic water-soluble chelate excreted in urine."
    },
    {
      category: "Medicinal Chemistry",
      example: "D-Penicillamine & Desferrioxamine B",
      metal: "Cu²⁺ (Penicillamine) / Fe³⁺ (Desferrioxamine)",
      ligandStructure: "Chelating agents",
      function: "D-Penicillamine chelates excess copper in Wilson's disease; Desferrioxamine removes excess iron in thalassaemia."
    },
    {
      category: "Medicinal Chemistry",
      example: "British Anti-Lewisite (BAL / Dimercaprol)",
      metal: "As³⁺, Hg²⁺, Au³⁺",
      ligandStructure: "Dithiol chelating agent",
      function: "Antidote for heavy metal poisoning (Arsenic, Mercury, Gold)."
    },
    {
      category: "Industrial & Metallurgy",
      example: "Cyanide Process (MacArthur-Forrest)",
      metal: "Au and Ag",
      ligandStructure: "[Au(CN)₂]⁻ and [Ag(CN)₂]⁻",
      function: "Extraction of gold and silver by leaching ore with dilute NaCN in presence of air (O₂), followed by zinc reduction."
    },
    {
      category: "Industrial & Metallurgy",
      example: "Mond's Process for Nickel Refining",
      metal: "Ni⁰ (Nickel)",
      ligandStructure: "[Ni(CO)₄] (Volatile tetracarbonylnickel)",
      function: "Impure Ni heated with CO at 330-350 K forms volatile [Ni(CO)₄], which decomposes at 450-470 K to yield pure Ni."
    },
    {
      category: "Industrial Catalysis",
      example: "Wilkinson's Catalyst",
      metal: "Rh⁺ (Rhodium(I))",
      ligandStructure: "[(Ph₃P)₃RhCl] (Chloridotris(triphenylphosphine)rhodium(I))",
      function: "Homogeneous hydrogenation of alkenes to alkanes."
    },
    {
      category: "Analytical Chemistry",
      example: "Qualitative Group Detection",
      metal: "Ni²⁺, Fe³⁺, Cu²⁺",
      ligandStructure: "Ni(dmg)₂ (Rosy red), [Fe(SCN)]²⁺ (Blood red), [Cu(NH₃)₄]²⁺ (Deep blue)",
      function: "Specific colour tests for identification and separation of cations in salt analysis."
    },
    {
      category: "Photography",
      example: "Fixer Solution (Hypo / Na₂S₂O₃)",
      metal: "Ag⁺",
      ligandStructure: "[Ag(S₂O₃)₂]³⁻ (Soluble dithiosulphatoargentate(I))",
      function: "Removes unexposed silver halide (AgBr) from photographic films during fixing."
    }
  ]
};
