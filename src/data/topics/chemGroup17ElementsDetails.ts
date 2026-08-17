import { DetailedTopicContent } from '../../types/neet';
import { P_BLOCK_12_DIAGRAMS } from '../pBlock12/pBlock12Diagrams';
import { P_BLOCK_12_VERIFIED_PYQS } from '../pBlock12/pBlock12Pyqs';

export const chemGroup17ElementsDetails: DetailedTopicContent = {
  topicId: "chem-group-17-elements",
  topicName: "Group 17 Elements (Halogens — Trends, Anomalies, F₂ vs Cl₂, Oxidising Power, HCl, Interhalogens & Oxoacids)",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry (Class 12)",
  chapter: "p-Block Elements (Group 15 to 18)",

  whatIsThisTopic:
    "Group 17 of the periodic table, known as the Halogens (salt formers), comprises Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I), and Astatine (At). This NEET module covers electronic configurations (ns² np⁵), atomic and physical properties, the negative electron gain enthalpy anomaly (Cl > F > Br > I), bond dissociation enthalpy anomaly (Cl₂ > Br₂ > F₂ > I₂), powerful oxidising action of halogens (standard reduction potentials and hydration enthalpy contributions), anomalous behavior of Fluorine (highest electronegativity, absence of d-orbitals, limitation to -1 oxidation state), chemical reactivity of hydrogen halides (HX acidity, thermal stability, reducing power), manufacture and reactions of Chlorine and Hydrochloric Acid (Deacon's process, bleaching action, aqua regia), Interhalogen compounds (types XX', XX'₃, XX'₅, XX'₇, VSEPR shapes: ClF₃ T-shape, BrF₅ square pyramidal, IF₇ pentagonal bipyramidal, hydrolysis and higher reactivity), and Oxoacids of Halogens (hypohalous, halous, halic, perhalic acids, acid strength and oxidizing trends).",

  basicIdea: [
    "1. Electronic Configuration & Extreme Reactivity: Halogens have the valence shell configuration ns² np⁵, having just one electron short of the stable octet (noble gas configuration). Consequently, they possess the highest electronegativities and highest negative electron gain enthalpies in their respective periods.",
    "2. Electron Gain Enthalpy Anomaly (Cl > F): Negative ΔegH order is Chlorine (-349 kJ/mol) > Fluorine (-333 kJ/mol) > Bromine (-325 kJ/mol) > Iodine (-295 kJ/mol). Fluorine has a less negative ΔegH than Chlorine because adding an electron to the compact 2p orbital of F experiences intense electron-electron repulsion, whereas the 3p orbital of Cl is more spacious.",
    "3. Bond Dissociation Enthalpy Anomaly (Cl₂ > Br₂ > F₂ > I₂): Bond dissociation enthalpies (kJ/mol): Cl₂ (242.6) > Br₂ (192.8) > F₂ (158.8) > I₂ (151.1). Due to the small size of fluorine atoms, the three non-bonding lone pairs on each F atom repel each other strongly across the short F-F bond, drastically weakening the bond compared to Cl₂ and Br₂.",
    "4. Powerful Oxidizing Nature of Halogens (F₂ > Cl₂ > Br₂ > I₂): Halogens are strong oxidizing agents in aqueous solution. Fluorine is the strongest oxidizer in the entire periodic table (E° = +2.87 V). Although its ΔegH is slightly less negative than Cl, its low bond dissociation enthalpy (158.8 kJ/mol) combined with its exceptionally large hydration enthalpy (due to tiny F⁻ ion) makes its overall electrode potential the highest. F₂ oxidizes water to O₂: 2 F₂ + 2 H₂O → 4 H⁺ + 4 F⁻ + O₂.",
    "5. Hydrogen Halides (HX: HF, HCl, HBr, HI): Acidic strength in water: HF (weak acid) < HCl < HBr < HI (strongest acid). Acidity is governed by H-X bond dissociation enthalpy (H-F: 574 kJ/mol >> H-I: 295 kJ/mol). Thermal stability: HF > HCl > HBr > HI. Reducing power: HF < HCl < HBr < HI (HI is a powerful reducing agent). Boiling point: HCl < HBr < HI < HF (HF has strong intermolecular H-bonding).",
    "6. Interhalogen Compounds (XX'ₙ): Formed between two different halogens (n = 1, 3, 5, 7), where X is larger and X' is smaller. All are covalent, diamagnetic, and MORE reactive than pure halogens (except F₂) because the polar X-X' bond is weaker than the X-X bond. Key geometries: ClF₃ / BrF₃ (T-shaped, sp³d), BrF₅ / IF₅ (Square pyramidal, sp³d²), IF₇ (Pentagonal bipyramidal, sp³d³). Hydrolysis always gives halide of smaller halogen and oxoacid of larger halogen.",
    "7. Oxoacids of Halogens: Fluorine forms only ONE oxoacid: Fluoric(I) acid / Hypofluorous acid (HOF), where F is in -1 oxidation state. Other halogens form four series of oxoacids (+1, +3, +5, +7). Acidic strength of oxoacids of the same halogen increases with increasing oxidation state: HClO < HClO₂ < HClO₃ < HClO₄ (due to resonance stabilization of the perchlorate anion ClO₄⁻). For the same oxidation state, acidic strength decreases with decreasing halogen electronegativity: HClO > HBrO > HIO."
  ],

  importantTerms: [
    {
      term: "Bond Dissociation Enthalpy Anomaly in F₂",
      definition: "The unusually low bond energy of F-F bond compared to Cl-Cl and Br-Br caused by strong electrostatic repulsion between non-bonding valence electron pairs in the compact 2p orbitals.",
      neetNote: "Exact order: Cl₂ (242.6) > Br₂ (192.8) > F₂ (158.8) > I₂ (151.1 kJ/mol)."
    },
    {
      term: "Deacon's Process for Chlorine",
      symbol: "4 HCl + O₂ ⎯(CuCl₂, 723 K)⎯→ 2 Cl₂ + 2 H₂O",
      definition: "The industrial manufacture of chlorine gas by catalytic air oxidation of hydrogen chloride gas over cupric chloride (CuCl₂) catalyst at 723 K.",
      neetNote: "CuCl₂ serves as the industrial catalyst in Deacon's process."
    },
    {
      term: "Aqua Regia",
      symbol: "3 HCl (conc) + 1 HNO₃ (conc)",
      definition: "A highly corrosive, fuming yellow-orange liquid mixture of 3 parts concentrated hydrochloric acid and 1 part concentrated nitric acid by volume.",
      neetNote: "Dissolves noble metals (Au, Pt): Au + 4 H⁺ + NO₃⁻ + 4 Cl⁻ → [AuCl₄]⁻ + NO + 2 H₂O; Pt + 8 H⁺ + 2 NO₃⁻ + 6 Cl⁻ → [PtCl₆]²⁻ + 2 NO + 4 H₂O."
    },
    {
      term: "Interhalogen Compounds",
      definition: "Binary covalent compounds formed between two different halogen atoms (general formula XX'ₙ where n = 1, 3, 5, 7).",
      neetNote: "Always more reactive than elemental halogens (except F₂); ClF₃ is T-shaped (sp³d); BrF₅ is square pyramidal (sp³d²); IF₇ is pentagonal bipyramidal (sp³d³)."
    },
    {
      term: "Bleaching Powder",
      symbol: "Ca(OCl)₂ · CaCl₂ · Ca(OH)₂ · 2 H₂O",
      definition: "A composite compound produced by the action of chlorine gas on dry slaked lime: 2 Ca(OH)₂ + 2 Cl₂ → Ca(OCl)₂ + CaCl₂ + 2 H₂O.",
      neetNote: "Bleaching action is due to available chlorine, which releases nascent oxygen in the presence of dilute acid."
    },
    {
      term: "Hypofluorous Acid (HOF)",
      definition: "The only known oxoacid of fluorine, prepared by passing fluorine gas over ice at 233 K: F₂ + H₂O → HOF + HF.",
      neetNote: "Fluorine has -1 oxidation state in HOF (oxygen is in 0 formal oxidation state), because F is more electronegative than O."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Group 17 Halogens Electronic Configuration & Periodic Trends",
      paragraphs: [
        "Group 17 (Halogens) comprises Fluorine (₉F), Chlorine (₁₇Cl), Bromine (₃₅Br), Iodine (₅₃I), and Astatine (₈₅At). All members have the valence electron configuration ns² np⁵. They require just one electron to complete a stable noble gas octet.",
        "Atomic & Ionic Radii: Halogens have the smallest atomic radii in their respective periods due to maximum effective nuclear charge. Radii increase down the group from F to I.",
        "Ionization Enthalpy: Very high across the group due to strong nuclear attraction: F (1680) > Cl (1256) > Br (1142) > I (1008 kJ/mol).",
        "Electron Gain Enthalpy Anomaly: All halogens release huge amounts of energy upon capturing an electron (highly negative ΔegH). However, Chlorine (-349 kJ/mol) has a MORE negative electron gain enthalpy than Fluorine (-333 kJ/mol). In the tiny 2p subshell of fluorine, electron density is extremely high; the incoming electron suffers significant electrostatic repulsion from the 7 valence electrons. In chlorine, the 3p subshell is more spacious, accommodating the incoming electron with much less inter-electronic repulsion. Exact sequence of negative ΔegH: Cl > F > Br > I.",
        "Bond Dissociation Enthalpy Anomaly: The expected decrease in bond energy down the group from F₂ to I₂ is disrupted: Cl₂ (242.6 kJ/mol) > Br₂ (192.8 kJ/mol) > F₂ (158.8 kJ/mol) > I₂ (151.1 kJ/mol). The F-F bond is unexpectedly weak because the non-bonding lone pairs on adjacent small fluorine atoms are packed closely together, causing intense lone pair-lone pair repulsion that weakens the covalent bond.",
        "Electronegativity: Fluorine (4.0 on Pauling scale) is the most electronegative element in the entire universe, followed by Chlorine (3.16), Bromine (2.96), and Iodine (2.66)."
      ],
      visual: {
        type: 'svg',
        svgContent: P_BLOCK_12_DIAGRAMS.group1718TrendsAndStructures,
        caption: "Figure 16.3: Group 17 Halogen Anomalies, Interhalogen Shapes & Xenon Geometries.",
        guide: "Diagram Guide: Observe the bond dissociation enthalpy anomaly (Cl₂ > Br₂ > F₂ > I₂) and the T-shaped geometry of ClF₃ (sp³d, 2 equatorial lone pairs)."
      },
      importantPoints: [
        "Chlorine has the highest negative electron gain enthalpy in the entire periodic table (-349 kJ/mol).",
        "Bond dissociation enthalpy order: Cl₂ > Br₂ > F₂ > I₂ (F₂ is lower than Cl₂ and Br₂ due to lp-lp repulsion).",
        "Fluorine shows ONLY -1 oxidation state (never shows positive oxidation states due to highest electronegativity and lack of d-orbitals)."
      ]
    },
    {
      heading: "2. Oxidizing Power & Hydrogen Halides (HX)",
      paragraphs: [
        "Oxidizing Power of Halogens: Standard reduction potentials decrease down the group: F₂ (+2.87 V) > Cl₂ (+1.36 V) > Br₂ (+1.09 V) > I₂ (+0.54 V). Thus, Fluorine is the strongest oxidizing halogen and oxidizes all other halide ions in solution (F₂ + 2 X⁻ → 2 F⁻ + X₂). Cl₂ oxidizes Br⁻ and I⁻; Br₂ oxidizes I⁻.",
        "Why F₂ is the Strongest Oxidizing Agent: The reduction of halogen in aqueous solution involves three energetic steps: (1) 1/2 X₂(g) → X(g) (Bond dissociation enthalpy, ΔdissH), (2) X(g) + e⁻ → X⁻(g) (Electron gain enthalpy, ΔegH), and (3) X⁻(g) + aq → X⁻(aq) (Hydration enthalpy, ΔhydH). For Fluorine: Low bond dissociation enthalpy (158.8 kJ/mol) + Exceedingly large negative hydration enthalpy (-515 kJ/mol, due to tiny F⁻ ion) more than compensate for its slightly less negative ΔegH, resulting in the most positive E° value (+2.87 V).",
        "Hydrogen Halides (HX: HF, HCl, HBr, HI): Formed by direct combination of H₂ with halogens.",
        "• Acidic Strength: In aqueous solution: HF (weak, pKa = 3.2) < HCl < HBr < HI. Acid strength is determined by the H-X bond dissociation enthalpy: H-F (574 kJ/mol) > H-Cl (432 kJ/mol) > H-Br (363 kJ/mol) > H-I (295 kJ/mol). The weak H-I bond ionizes most readily to yield H⁺ ions.",
        "• Thermal Stability: Follows the same bond strength order: HF > HCl > HBr > HI. HI decomposes into H₂ and I₂ even on gentle heating.",
        "• Reducing Power: Increases down the group: HF < HCl < HBr < HI. HI is a powerful reducing agent and reduces H₂SO₄ to SO₂ and H₂S.",
        "• Boiling Point Anomaly: HF (293 K) has a dramatically higher boiling point than HCl (189 K), HBr (206 K), and HI (238 K) because HF molecules form strong zigzag intermolecular hydrogen bonds (H-F···H-F)."
      ],
      importantPoints: [
        "F₂ oxidizes water to oxygen (2 F₂ + 2 H₂O → 4 HF + O₂), whereas Cl₂ and Br₂ react with water to give hypohalous and hydrohalic acids.",
        "Acidic strength of hydracids: HF < HCl < HBr < HI (HI is strongest acid).",
        "Boiling point of hydracids: HCl < HBr < HI < HF (HF has highest boiling point due to H-bonding)."
      ]
    },
    {
      heading: "3. Chlorine (Cl₂), Hydrochloric Acid (HCl) & Reactions",
      paragraphs: [
        "Chlorine (Cl₂): Discovered by Scheele in 1774. Prepared in the lab by heating MnO₂ with concentrated HCl: MnO₂ + 4 HCl → MnCl₂ + Cl₂ + 2 H₂O, or by action of HCl on KMnO₄: 2 KMnO₄ + 16 HCl → 2 KCl + 2 MnCl₂ + 5 Cl₂ + 8 H₂O.",
        "Industrial Manufacture: (1) Deacon's Process: 4 HCl + O₂ ⎯(CuCl₂, 723 K)⎯→ 2 Cl₂ + 2 H₂O. (2) Electrolytic Process: Electrolysis of brine (aqueous NaCl) in the chlor-alkali membrane cell (Cl₂ liberated at anode).",
        "Reactions with Alkalies (⚠️ Very High-Yield NEET Trap):",
        "1. With Cold and Dilute NaOH: 2 NaOH(cold & dil) + Cl₂ → NaCl + NaOCl (Sodium hypochlorite) + H₂O.",
        "2. With Hot and Concentrated NaOH: 6 NaOH(hot & conc) + 3 Cl₂ → 5 NaCl + NaClO₃ (Sodium chlorate) + 3 H₂O.",
        "Bleaching Action of Chlorine: Chlorine in the presence of moisture acts as a powerful, permanent bleaching agent and disinfectant: Cl₂ + H₂O → HCl + HOCl; HOCl → HCl + [O] (Nascent oxygen). Colored substance + [O] → Colorless oxidized substance.",
        "Hydrochloric Acid (HCl): Prepared by heating NaCl with concentrated H₂SO₄ (Glauber's method): NaCl + H₂SO₄ ⎯420K⎯→ NaHSO₄ + HCl; NaHSO₄ + NaCl ⎯823K⎯→ Na₂SO₄ + HCl. Gas is dried by passing through concentrated H₂SO₄ (cannot use CaO or P₄O₁₀ because they react with HCl).",
        "Aqua Regia: A 3:1 (by volume) mixture of concentrated HCl and concentrated HNO₃. Dissolves gold and platinum by converting them into soluble chlorometallate complexes: Au + 4 H⁺ + NO₃⁻ + 4 Cl⁻ → [AuCl₄]⁻ + NO + 2 H₂O."
      ],
      importantPoints: [
        "Cold dilute NaOH + Cl₂ produces NaOCl (+1 state); Hot conc NaOH + Cl₂ produces NaClO₃ (+5 state) via disproportionation.",
        "Cl₂ bleaches permanently by oxidation via nascent oxygen [O].",
        "Aqua regia is 3 parts conc. HCl + 1 part conc. HNO₃."
      ]
    },
    {
      heading: "4. Interhalogen Compounds & Oxoacids of Halogens",
      paragraphs: [
        "Interhalogen Compounds (XX'ₙ): Binary covalent compounds formed between two different halogens, where X is larger/less electronegative and X' is smaller/more electronegative. They are classified into four types: XX', XX'₃, XX'₅, and XX'₇.",
        "Preparation & Reactivity: Prepared by direct combination of halogens in specific stoichiometric ratios (e.g. Cl₂ + F₂ (1:1, 437 K) → 2 ClF; Cl₂ + 3 F₂ (1:3, 573 K) → 2 ClF₃; I₂ + 7 F₂ (excess, 573 K) → 2 IF₇). Interhalogens are MORE reactive than halogens (except F₂) because the polar X-X' covalent bond is weaker than the non-polar X-X covalent bond in pure halogens.",
        "VSEPR Geometries of Interhalogens:",
        "• XX' (e.g., ClF, BrF, ICl): Linear (sp³ hybridization).",
        "• XX'₃ (e.g., ClF₃, BrF₃): T-shaped (sp³d hybridization: 3 bond pairs + 2 lone pairs in equatorial positions).",
        "• XX'₅ (e.g., BrF₅, IF₅): Square Pyramidal (sp³d² hybridization: 5 bond pairs + 1 lone pair in axial position).",
        "• XX'₇ (e.g., IF₇): Pentagonal Bipyramidal (sp³d³ hybridization: 7 bond pairs + 0 lone pairs).",
        "Hydrolysis of Interhalogens: Hydrolysis always yields the halide of the smaller halogen (HX') and an oxoacid of the larger halogen: XX' + H₂O → HX' + HOX; XX'₃ + 2 H₂O → 3 HX' + HXO₂; XX'₅ + 3 H₂O → 5 HX' + HXO₃; IF₇ + 4 H₂O → 7 HF + HIO₄.",
        "Oxoacids of Halogens: Acidic strength of oxoacids containing the same halogen increases with increasing oxidation state: HClO (+1) < HClO₂ (+3) < HClO₃ (+5) < HClO₄ (+7). Reason: As the oxidation state increases, more electronegative oxygen atoms are attached to the central chlorine atom, drawing electron density away via inductive and resonance effects, which weakens the O-H bond and stabilizes the conjugate anion ClO₄⁻ through resonance across 4 equivalent oxygen atoms."
      ],
      importantPoints: [
        "ClF₃ is T-shaped (sp³d hybridization with 2 equatorial lone pairs).",
        "IF₇ is pentagonal bipyramidal (sp³d³ hybridization with zero lone pairs).",
        "Acidic strength of chlorine oxoacids: HClO < HClO₂ < HClO₃ < HClO₄ (HClO₄ is the strongest acid).",
        "Oxidizing power of chlorine oxoacids is the reverse: HClO > HClO₂ > HClO₃ > HClO₄."
      ]
    }
  ],

  formulae: [
    {
      title: "Deacon's Process for Chlorine",
      formula: "4 HCl(g) + O_2(g) \\xrightarrow[723\\text{ K}]{\\text{CuCl}_2} 2 Cl_2(g) + 2 H_2O(g)",
      meaning: "Catalytic oxidation of hydrogen chloride to chlorine",
      symbols: "CuCl₂ = Cupric chloride catalyst",
      unit: "Kelvin, moles",
      conditions: "723 K temperature with CuCl₂ catalyst",
      whenToUse: "Use in industrial chlorine manufacturing and catalyst questions."
    },
    {
      title: "Chlorine Reaction with Cold vs Hot NaOH",
      formula: "2 NaOH(\\text{cold, dil}) + Cl_2 \\rightarrow NaCl + NaOCl + H_2O \\\\ 6 NaOH(\\text{hot, conc}) + 3 Cl_2 \\rightarrow 5 NaCl + NaClO_3 + 3 H_2O",
      meaning: "Disproportionation of chlorine in different alkaline conditions",
      symbols: "NaOCl = Sodium hypochlorite (+1), NaClO₃ = Sodium chlorate (+5)",
      unit: "Stoichiometry",
      conditions: "Cold dilute vs Hot concentrated alkali",
      whenToUse: "Use in disproportionation reactions and product prediction problems."
    },
    {
      title: "Interhalogen Hydrolysis General Equation",
      formula: "XX'_n + \\frac{n+1}{2} H_2O \\rightarrow n HX' + HXO_m \\quad (m = \\frac{n+1}{2})",
      meaning: "Hydrolysis of interhalogens into small halide and large oxoacid",
      symbols: "X = larger halogen, X' = smaller more electronegative halogen",
      unit: "Stoichiometric balance",
      conditions: "Aqueous medium",
      whenToUse: "Use in predicting hydrolysis products of interhalogen species."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: P_BLOCK_12_DIAGRAMS.group1718TrendsAndStructures,
    caption: "Group 17 Master Schematic: Halogen Enthalpy Anomalies & Interhalogen VSEPR Geometries."
  },

  neetImportantPoints: [
    "Chlorine has the highest negative electron gain enthalpy in the periodic table (-349 kJ/mol).",
    "Bond dissociation enthalpy order: Cl₂ > Br₂ > F₂ > I₂ (F₂ is weaker than Cl₂ and Br₂ due to intense lp-lp repulsions).",
    "Fluorine is the strongest oxidizing agent in water (E° = +2.87 V) due to low bond dissociation enthalpy and exceptionally large hydration enthalpy.",
    "Acidic strength of halogen hydracids: HF < HCl < HBr < HI (HI is strongest acid due to lowest bond dissociation enthalpy).",
    "Boiling point of halogen hydracids: HCl < HBr < HI < HF (HF is highest due to intermolecular H-bonding).",
    "Interhalogen compounds (XX'ₙ) are more reactive than parent halogens (except F₂) due to polar and weaker X-X' bonds.",
    "ClF₃ is T-shaped (sp³d); BrF₅ is square pyramidal (sp³d²); IF₇ is pentagonal bipyramidal (sp³d³).",
    "Acidic strength of chlorine oxoacids: HClO < HClO₂ < HClO₃ < HClO₄ (HClO₄ is strongest acid due to resonance-stabilized ClO₄⁻ conjugate base).",
    "Oxidizing power of chlorine oxoacids: HClO > HClO₂ > HClO₃ > HClO₄ (HClO is strongest oxidizer because it releases nascent oxygen most readily)."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming Fluorine has the most negative electron gain enthalpy because it is the most electronegative element.",
      correctFact: "Chlorine has the most negative electron gain enthalpy (-349 kJ/mol vs F: -333 kJ/mol) because the compact 2p orbital of F experiences intense electron-electron repulsion.",
      whyItMattersForNEET: "Consistently tested in NEET periodic property ranking questions."
    },
    {
      commonConfusion: "Predicting the bond dissociation enthalpy of F₂ to be higher than Cl₂.",
      correctFact: "Cl₂ has higher bond energy (242.6 kJ/mol) than F₂ (158.8 kJ/mol). F₂ bond is weakened by repulsion between non-bonding electron pairs on compact F atoms.",
      whyItMattersForNEET: "High-yield NEET trap that appears in almost every alternative year."
    },
    {
      commonConfusion: "Confusing the products of Cl₂ with cold dilute vs hot concentrated NaOH.",
      correctFact: "Cold dilute NaOH + Cl₂ gives NaCl + NaOCl (+1 state). Hot concentrated NaOH + Cl₂ gives NaCl + NaClO₃ (+5 state).",
      whyItMattersForNEET: "Frequent direct question with very high negative marking rate."
    }
  ],

  quickRevision: [
    "⚡ Negative ΔegH order: Cl > F > Br > I (Cl is highest in entire periodic table).",
    "⚡ Bond dissociation enthalpy: Cl₂ > Br₂ > F₂ > I₂ (F₂ is lower than Cl₂ and Br₂).",
    "⚡ Oxidizing power: F₂ > Cl₂ > Br₂ > I₂ (F₂ has E° = +2.87 V).",
    "⚡ Hydracid acidity: HF < HCl < HBr < HI (HI is strongest acid).",
    "⚡ Hydracid boiling points: HCl < HBr < HI < HF (HF has H-bonding).",
    "⚡ Cold dil NaOH + Cl₂ → NaCl + NaOCl; Hot conc NaOH + Cl₂ → NaCl + NaClO₃.",
    "⚡ Cl₂ bleaches by OXIDATION (permanent); SO₂ bleaches by REDUCTION (temporary).",
    "⚡ Interhalogen shapes: ClF₃ (T-shaped, sp³d), BrF₅ (Square pyramidal, sp³d²), IF₇ (Pentagonal bipyramidal, sp³d³).",
    "⚡ Interhalogens are MORE reactive than halogens (except F₂).",
    "⚡ Chlorine oxoacid acidity: HClO < HClO₂ < HClO₃ < HClO₄ (HClO₄ is strongest acid)."
  ],

  practiceQuestions: [
    {
      id: "prac-pblock-17-1",
      question: "Which of the following represents the correct order of bond dissociation enthalpy of halogen molecules?",
      options: [
        "Cl₂ > Br₂ > F₂ > I₂",
        "F₂ > Cl₂ > Br₂ > I₂",
        "Cl₂ > F₂ > Br₂ > I₂",
        "I₂ > Br₂ > Cl₂ > F₂"
      ],
      correctAnswer: 0,
      explanation: "The bond dissociation enthalpies of halogen molecules are: Cl₂ (242.6 kJ/mol) > Br₂ (192.8 kJ/mol) > F₂ (158.8 kJ/mol) > I₂ (151.1 kJ/mol). F₂ has an anomalously low bond dissociation enthalpy due to strong lone pair-lone pair repulsion between non-bonding electrons on adjacent small fluorine atoms.",
      conceptTested: "Halogen Bond Dissociation Enthalpy Trend & Anomaly",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-17-elements"
    },
    {
      id: "prac-pblock-17-2",
      question: "When chlorine gas is reacted with hot and concentrated sodium hydroxide solution, the oxidation states of chlorine in the products obtained are:",
      options: [
        "-1 and +5",
        "-1 and +1",
        "-1 and +3",
        "+1 and +5"
      ],
      correctAnswer: 0,
      explanation: "The reaction of chlorine with hot concentrated NaOH is a disproportionation reaction: 6 NaOH(hot & conc) + 3 Cl₂ → 5 NaCl + NaClO₃ + 3 H₂O. In NaCl, the oxidation state of chlorine is -1; in NaClO₃, the oxidation state of chlorine is +5. Thus, the oxidation states are -1 and +5.",
      conceptTested: "Disproportionation of Chlorine with Hot Concentrated Alkali",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-17-elements"
    },
    {
      id: "prac-pblock-17-3",
      question: "According to VSEPR theory, the hybridization and molecular geometry of ClF₃ are respectively:",
      options: [
        "sp³d and T-shaped",
        "sp³d² and Square planar",
        "sp³ and Trigonal pyramidal",
        "sp³d and Trigonal bipyramidal"
      ],
      correctAnswer: 0,
      explanation: "In ClF₃, the central chlorine atom has 7 valence electrons. It forms 3 single bonds with fluorine atoms and has (7 - 3)/2 = 2 lone pairs. Steric number = 3 bond pairs + 2 lone pairs = 5 (sp³d hybridization). To minimize lone pair-lone pair repulsion, the 2 lone pairs occupy equatorial positions, resulting in a T-shaped molecular geometry.",
      conceptTested: "ClF3 VSEPR Geometry & Hybridization",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-17-elements"
    },
    {
      id: "prac-pblock-17-4",
      question: "Which of the following oxoacids of chlorine is the strongest acid?",
      options: [
        "HClO₄ (Perchloric acid)",
        "HClO₃ (Chloric acid)",
        "HClO₂ (Chlorous acid)",
        "HClO (Hypochlorous acid)"
      ],
      correctAnswer: 0,
      explanation: "The acidic strength of oxoacids of chlorine increases with the oxidation state of the chlorine atom: HClO (+1) < HClO₂ (+3) < HClO₃ (+5) < HClO₄ (+7). In HClO₄, the conjugate base ClO₄⁻ is stabilized by resonance over 4 equivalent oxygen atoms, making perchloric acid the strongest acid.",
      conceptTested: "Acidic Strength of Chlorine Oxoacids",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-17-elements"
    }
  ],

  pyqs: P_BLOCK_12_VERIFIED_PYQS.filter(q => q.topicId === "chem-group-17-elements")
};
