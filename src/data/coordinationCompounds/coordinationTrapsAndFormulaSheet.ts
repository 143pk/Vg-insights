// High-Yield NEET Traps, Formula Reference Sheet & Rapid Revision for Chapter 18: Coordination Compounds

export const COORDINATION_TRAPS_AND_SHEET = {
  // 1. 15 High-Yield NEET Traps
  neetTraps: [
    {
      id: "trap-1",
      trapTitle: "Counting Denticity in Coordination Number",
      confusion: "Thinking Coordination Number (C.N.) is always equal to the number of ligand molecules attached to the central metal.",
      correction: "C.N. = Sum of (Number of each ligand × Denticity). In [Fe(C₂O₄)₃]³⁻, there are 3 oxalate ligands, but each is bidentate (denticity = 2), so C.N. = 3 × 2 = 6, NOT 3!",
      neetTip: "Always verify ligand denticity: en, ox²⁻, dmg⁻ are bidentate (×2); dien is tridentate (×3); EDTA⁴⁻ is hexadentate (×6)."
    },
    {
      id: "trap-2",
      trapTitle: "Werner's Theory: Counting Precipitated AgCl Moles",
      confusion: "Assuming all chlorine atoms in a molecular formula will precipitate upon adding excess AgNO₃.",
      correction: "Only chloride ions present in the IONISATION SPHERE (outside the square brackets) are ionised and precipitated. In [Co(NH₃)₄Cl₂]Cl, 1 mole of compound gives only 1 mole of AgCl ppt, because 2 chlorines are inside the coordination sphere.",
      neetTip: "Primary valency satisfied by both primary & secondary (inside brackets) is NON-IONISABLE."
    },
    {
      id: "trap-3",
      trapTitle: "Tetrahedral Complexes NEVER Show Geometrical Isomerism",
      confusion: "Trying to draw cis/trans isomers for [NiCl₂Br₂]²⁻ or other tetrahedral [MA₂B₂] complexes.",
      correction: "In a regular tetrahedron, all 4 positions are adjacent to one another (bond angle = 109.5°). There are NO opposite (180°) trans positions. Hence, tetrahedral complexes CANNOT show cis-trans isomerism.",
      neetTip: "Geometrical isomerism with C.N.=4 is ONLY possible in SQUARE PLANAR complexes ([Pt(NH₃)₂Cl₂]), never in tetrahedral."
    },
    {
      id: "trap-4",
      trapTitle: "Optical Activity of trans vs cis [M(AA)₂B₂]",
      confusion: "Assuming both cis and trans forms of [Co(en)₂Cl₂]⁺ are optically active because both contain chelating ligands.",
      correction: "cis-[Co(en)₂Cl₂]⁺ has no plane or centre of inversion → Chiral and OPTICALLY ACTIVE (exists as d and l enantiomers). However, trans-[Co(en)₂Cl₂]⁺ has a centre of inversion (i) and plane of symmetry (σ) → Achiral and OPTICALLY INACTIVE!",
      neetTip: "Cis = Optically Active (2 enantiomers); Trans = Optically Inactive (meso-like superimposable)."
    },
    {
      id: "trap-5",
      trapTitle: "Square Planar Optical Inactivity",
      confusion: "Believing that square planar complexes with 4 different ligands ([MABCD]) are optically active.",
      correction: "All atoms in a square planar complex lie in a single plane. The molecular plane itself acts as a plane of symmetry (σ_h). Thus, square planar complexes are almost always optically INACTIVE.",
      neetTip: "Square planar [MABCD] gives 3 GEOMETRICAL isomers, but 0 optical isomers."
    },
    {
      id: "trap-6",
      trapTitle: "Tetrahedral Splitting Energy: Δₜ ≈ ⁴⁄₉ Δₒ",
      confusion: "Thinking tetrahedral complexes can form low-spin (strong field) configurations when ligands like CN⁻ or CO are present.",
      correction: "Because Δₜ is only ⁴⁄₉ (~44%) of Δₒ, the crystal field splitting energy in tetrahedral geometry is virtually NEVER large enough to overcome the pairing energy (P). Hence, Δₜ < P ALWAYS, and tetrahedral complexes are virtually ALWAYS HIGH SPIN.",
      neetTip: "In tetrahedral complexes, electrons fill: e² t₂³ (for d⁵ high spin), never e⁴ t₂¹."
    },
    {
      id: "trap-7",
      trapTitle: "Co³⁺ vs Co²⁺ with NH₃: The Spin State Flip",
      confusion: "Treating NH₃ as a strong field ligand for ALL metal ions.",
      correction: "NH₃ is a STRONG field ligand for Co³⁺ (high charge density causes Δₒ > P, yielding low-spin diamagnetic [Co(NH₃)₆]³⁺), but is a WEAK/INTERMEDIATE field ligand for Co²⁺ and Fe²⁺ (giving high-spin complexes).",
      neetTip: "Ligand field strength increases with higher oxidation state of the metal ion (Δₒ for M³⁺ > Δₒ for M²⁺)."
    },
    {
      id: "trap-8",
      trapTitle: "Colorless d⁰ and d¹⁰ Complexes",
      confusion: "Thinking all transition metal coordination complexes are brightly colored.",
      correction: "Color in coordination compounds arises primarily from d–d transitions. If d-orbitals are completely empty (d⁰: Sc³⁺, Ti⁴⁺) or completely filled (d¹⁰: Zn²⁺, Cd²⁺, Hg²⁺, Cu⁺), d–d transitions are impossible, so they are COLOURLESS.",
      neetTip: "Exception: KMnO₄ and K₂Cr₂O₇ are intensely colored despite d⁰ metals due to CHARGE TRANSFER spectra, not d-d transitions."
    },
    {
      id: "trap-9",
      trapTitle: "Absorbed Colour vs Observed (Transmitted) Colour",
      confusion: "Selecting the wavelength or color absorbed as the appearance of the solution in NEET MCQs.",
      correction: "The observed colour is the COMPLEMENTARY COLOUR of the light absorbed! [Ti(H₂O)₆]³⁺ absorbs yellow-green light (λ ~498 nm) and therefore appears VIOLET / PURPLE.",
      neetTip: "Memorize the color pairs: Red ↔ Green, Blue ↔ Orange, Yellow ↔ Violet."
    },
    {
      id: "trap-10",
      trapTitle: "Ambidentate Ligand Linkage vs Coordination Isomerism",
      confusion: "Mixing up Linkage isomerism with Coordination isomerism.",
      correction: "Linkage isomerism occurs within a SINGLE complex ion containing ambidentate ligands (e.g. NO₂⁻ vs ONO⁻). Coordination isomerism requires BOTH cationic and anionic complex entities (e.g. [Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆]).",
      neetTip: "Look for two square brackets [ ][ ] for Coordination isomerism; look for NO₂/ONO or SCN/NCS for Linkage."
    },
    {
      id: "trap-11",
      trapTitle: "Chelate Effect and Entropy (ΔS°)",
      confusion: "Thinking the chelate effect is driven primarily by bond enthalpy (stronger covalent bonds).",
      correction: "The chelate effect is predominantly an ENTROPY-DRIVEN phenomenon (ΔS° > 0). Replacing 6 monodentate H₂O ligands with 3 bidentate 'en' ligands increases the total number of free particles in solution from 4 to 7 particles.",
      neetTip: "[Ni(H₂O)₆]²⁺ + 3 en ⇌ [Ni(en)₃]²⁺ + 6 H₂O (Net gain of +3 free molecules → positive ΔS°)."
    },
    {
      id: "trap-12",
      trapTitle: "Facial (fac) vs Meridional (mer) Isomer Stoichiometry",
      confusion: "Looking for fac/mer isomers in MA₄B₂ or MA₂B₄ complexes.",
      correction: "fac-mer isomerism occurs SPECIFICALLY in octahedral complexes of the formula [MA₃B₃]. Three donor atoms occupy the corners of one octahedral face (fac) or lie in a plane passing through the metal centre along a meridian (mer).",
      neetTip: "[MA₄B₂] gives cis/trans (2 isomers). [MA₃B₃] gives fac/mer (2 isomers)."
    },
    {
      id: "trap-13",
      trapTitle: "Synergic Bonding in Metal Carbonyls [M(CO)ₙ]",
      confusion: "Assuming M–C bond in metal carbonyls is purely a coordinate sigma bond.",
      correction: "Metal carbonyls possess unique SYNERGIC BONDING: (1) σ-bond: Ligand CO donates lone pair into vacant metal orbital; (2) π-backbond: Filled metal d-orbital back-donates electrons into vacant π* antibonding orbital of CO. This strengthens M–C bond and WEAKENS C≡O bond!",
      neetTip: "Higher negative charge on metal complex (e.g. [V(CO)₆]⁻) → More π-backbonding → Stronger M–C bond, longer & weaker C–O bond (lowest C–O stretching frequency)."
    },
    {
      id: "trap-14",
      trapTitle: "Stepwise (Kₙ) vs Overall (βₙ) Stability Constants",
      confusion: "Thinking overall stability constant β₄ is the sum of stepwise constants (K₁ + K₂ + K₃ + K₄).",
      correction: "Overall stability constant βₙ is the PRODUCT of stepwise constants: β₄ = K₁ × K₂ × K₃ × K₄. In log terms: log β₄ = log K₁ + log K₂ + log K₃ + log K₄.",
      neetTip: "Stepwise constants almost always decrease: K₁ > K₂ > K₃ > K₄ due to steric hindrance and electrostatic factors."
    },
    {
      id: "trap-15",
      trapTitle: "Cisplatin vs Transplatin Medicinal Distinction",
      confusion: "Believing both cis and trans isomers of [Pt(NH₃)₂Cl₂] are active anti-cancer drugs.",
      correction: "ONLY cis-[Pt(NH₃)₂Cl₂] (Cisplatin) is an active anti-cancer drug because both labile Cl⁻ ions are in adjacent (cis) positions and can bind simultaneously to two adjacent guanine bases in DNA. trans-[Pt(NH₃)₂Cl₂] is biologically INACTIVE.",
      neetTip: "NEET loves testing the structural geometry and isomer specific to Cisplatin."
    }
  ],

  // 2. High-Yield Formula Reference Sheet
  formulaSheet: [
    {
      formulaName: "Spin-Only Magnetic Moment Formula",
      expression: "μ_s = \\sqrt{n(n + 2)} \\text{ BM}",
      variables: "n = number of unpaired electrons in d-orbitals; BM = Bohr Magnetons (eh / 4πmc)",
      where: "n = 1 → 1.73 BM; n = 2 → 2.83 BM; n = 3 → 3.87 BM; n = 4 → 4.90 BM; n = 5 → 5.92 BM"
    },
    {
      formulaName: "Octahedral Crystal Field Stabilization Energy (CFSE)",
      expression: "\\text{CFSE}_{\\text{oct}} = \\left[ -0.4 \\, n(t_{2g}) + 0.6 \\, n(e_g) \\right] \\Delta_o + mP",
      variables: "n(t₂g) = electrons in t₂g orbitals; n(e_g) = electrons in e_g orbitals; Δ_o = octahedral splitting; mP = extra pairing energy",
      where: "For weak field d⁴ (t₂g³ eg¹): CFSE = [-0.4(3) + 0.6(1)] Δ_o = -0.6 Δ_o"
    },
    {
      formulaName: "Tetrahedral Crystal Field Stabilization Energy (CFSE)",
      expression: "\\text{CFSE}_{\\text{tet}} = \\left[ -0.6 \\, n(e) + 0.4 \\, n(t_2) \\right] \\Delta_t",
      variables: "n(e) = electrons in lower e orbitals; n(t₂) = electrons in upper t₂ orbitals; Δ_t = tetrahedral splitting",
      where: "For d⁷ (e⁴ t₂³): CFSE = [-0.6(4) + 0.4(3)] Δ_t = -1.2 Δ_t"
    },
    {
      formulaName: "Relation Between Tetrahedral and Octahedral Splitting",
      expression: "\\Delta_t = \\frac{4}{9} \\Delta_o \\approx 0.44 \\, \\Delta_o",
      variables: "Δ_t = Tetrahedral splitting; Δ_o = Octahedral splitting",
      where: "Derived because tetrahedral has 4 ligands instead of 6 (factor of 4/6 = 2/3) and ligands do not point directly at d-orbitals (factor of 2/3), so 2/3 × 2/3 = 4/9."
    },
    {
      formulaName: "Overall Stability vs Stepwise Formation Constants",
      expression: "\\beta_n = K_1 \\times K_2 \\times K_3 \\times \\dots \\times K_n",
      variables: "β_n = Overall stability constant; K_n = Stepwise formation constant for ML_{n-1} + L ⇌ ML_n",
      where: "\\log \\beta_n = \\sum_{i=1}^n \\log K_i; \\quad K_{\\text{instability}} = \\frac{1}{\\beta_n}"
    },
    {
      formulaName: "Absorbed Energy and Wavelength of d-d Transition",
      expression: "\\Delta_o = h \\nu = \\frac{h c}{\\lambda}",
      variables: "Δ_o = Splitting energy (J); h = Planck's constant; c = speed of light; λ = absorbed wavelength",
      where: "Stronger ligand field → Larger Δ_o → Shorter absorbed wavelength λ (blue-shift of absorption)."
    }
  ],

  // 3. 15-Minute Rapid Revision Summary
  rapidRevisionPoints: [
    "⚡ Werner's Theory: Primary valency is ionisable, non-directional, and corresponds to Oxidation State. Secondary valency is non-ionisable, directional (determines geometry), and corresponds to Coordination Number.",
    "⚡ Werner's AgNO₃ Test: [Co(NH₃)₆]Cl₃ gives 3 mol AgCl; [Co(NH₃)₅Cl]Cl₂ gives 2 mol AgCl; [Co(NH₃)₄Cl₂]Cl gives 1 mol AgCl; [Co(NH₃)₃Cl₃] gives 0 mol AgCl ppt.",
    "⚡ IUPAC Naming Rule: Cation is named before anion. Within complex, ligands are named alphabetically before the metal. Anionic ligands end in '-ido', neutral have special names (ammine, aqua, carbonyl, nitrosyl). Multipliers: di, tri, tetra or bis, tris, tetrakis for complex ligands. Anionic complex metal suffix is '-ate' (ferrate, cuprate, argentate, platinate).",
    "⚡ Structural Isomers: Ionisation (different counter-ions exchanged with ligand), Hydrate/Solvate (water inside vs outside sphere), Linkage (ambidentate ligands: NO₂⁻/ONO⁻, SCN⁻/NCS⁻), Coordination (exchange of ligands between cationic and anionic complexes).",
    "⚡ Geometrical Isomerism: Square planar [MA₂B₂] (cis/trans), [MABCD] (3 isomers). Octahedral [MA₄B₂] (cis/trans), [MA₃B₃] (fac/mer). Tetrahedral complexes NEVER show geometrical isomerism.",
    "⚡ Optical Isomerism: Octahedral [M(AA)₃] (chiral, 2 enantiomers: d and l), cis-[M(AA)₂B₂] (optically active). trans-[M(AA)₂B₂] has inversion centre and is OPTICALLY INACTIVE.",
    "⚡ VBT Hybridization: C.N.=4 gives sp³ (Tetrahedral, e.g. [NiCl₄]²⁻, [Ni(CO)₄]) or dsp² (Square Planar, e.g. [Ni(CN)₄]²⁻, [Pt(NH₃)₂Cl₂]). C.N.=6 gives d²sp³ (Inner orbital/low spin with strong field) or sp³d² (Outer orbital/high spin with weak field).",
    "⚡ Crystal Field Theory (CFT): In octahedral field, d-orbitals split into lower t₂g (d_xy, d_yz, d_zx, -0.4 Δ_o) and higher e_g (d_x²-y², d_z², +0.6 Δ_o). In tetrahedral field, splitting is inverted: lower e (-0.6 Δ_t) and higher t₂ (+0.4 Δ_t), with Δ_t = 4/9 Δ_o.",
    "⚡ Spectrochemical Series: I⁻ < Br⁻ < S²⁻ < SCN⁻ < Cl⁻ < N₃⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < CN⁻ < CO. (Weak field: Δ_o < P → High spin; Strong field: Δ_o > P → Low spin).",
    "⚡ Colour in Complexes: Caused by d–d electron excitation. Absorbs complementary color. d⁰ (Ti⁴⁺, Sc³⁺) and d¹⁰ (Zn²⁺, Cu⁺) ions have no d–d transitions and are COLOURLESS. Anhydrous CuSO₄ is white; hydrated CuSO₄·5H₂O is blue.",
    "⚡ Magnetic Moment: μ = √[n(n+2)] BM. Diamagnetic (n=0, μ=0) vs Paramagnetic (n>0).",
    "⚡ Synergic Bonding in Metal Carbonyls: CO donates lone pair (σ-bond) and receives electron density from metal d-orbitals into vacant π* antibonding molecular orbitals (π-backbonding). This strengthens M–C and weakens C–O bond.",
    "⚡ Chelate Effect: Complexes with polydentate chelating ligands (en, EDTA⁴⁻, ox²⁻) are far more thermodynamically stable than monodentate analogues due to entropy gain (ΔS° > 0).",
    "⚡ Biological Complexes: Haemoglobin = Fe²⁺ (oxygen transport); Chlorophyll = Mg²⁺ (photosynthesis); Vitamin B₁₂ = Co³⁺ (anti-pernicious anaemia); Carbonic Anhydrase = Zn²⁺.",
    "⚡ Medicinal Uses: Cisplatin (cis-[Pt(NH₃)₂Cl₂]) = anti-cancer; EDTA-CaNa₂ = lead poisoning treatment; D-Penicillamine = Wilson's disease (copper poisoning); BAL = Arsenic/Mercury poisoning."
  ],

  // 4. Comparison Tables
  comparisonTables: {
    primaryVsSecondaryValency: {
      headers: ["Feature", "Primary Valency", "Secondary Valency"],
      rows: [
        ["Chemical Nature", "Corresponds to Oxidation State of central metal", "Corresponds to Coordination Number (C.N.)"],
        ["Ionisability", "Ionisable in aqueous solution", "Non-ionisable (covalently/datively bound)"],
        ["Spatial Direction", "Non-directional", "Directional in space (defines geometry)"],
        ["Satisfied By", "Negative ions (anions) only", "Negative ions or neutral molecules (ligands)"],
        ["Representation in formulas", "Outside square brackets (e.g. Cl₃ in [Co(NH₃)₆]Cl₃)", "Inside square brackets directly bound to metal"]
      ]
    },
    innerVsOuterOrbital: {
      headers: ["Property", "Inner Orbital Complex", "Outer Orbital Complex"],
      rows: [
        ["Hybridization", "d²sp³ (uses inner (n-1)d orbitals)", "sp³d² (uses outer nd orbitals)"],
        ["Ligand Field Strength", "Strong field ligands (CN⁻, CO, en, NH₃ for Co³⁺)", "Weak field ligands (F⁻, Cl⁻, H₂O)"],
        ["Electron Pairing", "Forces pairing of electrons against Hund's rule (Δ_o > P)", "No forced pairing; follows Hund's rule (Δ_o < P)"],
        ["Spin State", "Low Spin (spin-paired / diamagnetic or low paramagnetism)", "High Spin (spin-free / highly paramagnetic)"],
        ["Examples", "[Fe(CN)₆]⁴⁻ (μ = 0 BM), [Co(NH₃)₆]³⁺ (μ = 0 BM)", "[Fe(H₂O)₆]²⁺ (μ = 4.90 BM), [CoF₆]³⁻ (μ = 4.90 BM)"]
      ]
    },
    vbtVsCft: {
      headers: ["Parameter", "Valence Bond Theory (VBT)", "Crystal Field Theory (CFT)"],
      rows: [
        ["Bond Nature", "Assumes coordinate covalent bonding via orbital overlap", "Assumes purely electrostatic / ionic interaction"],
        ["d-Orbital Degeneracy", "Assumes all 5 d-orbitals remain degenerate during bonding", "Explicitly models crystal field splitting into t₂g and e_g sets"],
        ["Spectrochemical Series", "Cannot explain why CO is strong and I⁻ is weak", "Accounts for splitting magnitude Δ_o (though ligand field theory needed for covalent part)"],
        ["Colour & Spectra", "Fails to explain absorption spectra and colour of complexes", "Explains d–d transitions and visible absorption beautifully"],
        ["Thermodynamic Stability", "Does not provide quantitative CFSE values", "Calculates CFSE quantitatively to predict geometry & stability"]
      ]
    }
  }
};
