import { DetailedTopicContent } from '../../types/neet';
import { P_BLOCK_12_DIAGRAMS } from '../pBlock12/pBlock12Diagrams';
import { P_BLOCK_12_VERIFIED_PYQS } from '../pBlock12/pBlock12Pyqs';

export const chemGroup1718ElementsDetails: DetailedTopicContent = {
  topicId: "chem-group-17-18-elements",
  topicName: "Group 17 & Group 18 Elements (Halogens & Noble Gases — Trends, Anomalies, Interhalogens, Bartlett's Reaction & Xe Compounds)",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry (Class 12)",
  chapter: "p-Block Elements (Group 15 to 18)",

  whatIsThisTopic:
    "A unified high-yield NEET study module covering Group 17 (Halogens: F, Cl, Br, I, At) and Group 18 (Noble Gases: He, Ne, Ar, Kr, Xe, Rn). Topics include: valence configurations (ns² np⁵ and ns² np⁶), negative electron gain enthalpy anomaly (Cl > F > Br > I), bond dissociation enthalpy anomaly (Cl₂ > Br₂ > F₂ > I₂), powerful oxidising action of halogens (hydration enthalpy & reduction potentials), hydrogen halides (HX acidity and boiling points), bleaching action of chlorine vs SO₂, Interhalogen compounds (ClF₃ T-shape, BrF₅ square pyramidal, IF₇ pentagonal bipyramidal, hydrolysis and higher reactivity), oxoacids of halogens, noble gas inertness, Neil Bartlett's landmark 1962 discovery of Xe⁺[PtF₆]⁻, synthesis conditions of xenon fluorides (XeF₂, XeF₄, XeF₆), VSEPR geometries (XeF₂ linear, XeF₄ square planar, XeF₆ distorted octahedral, XeO₃ pyramidal, XeOF₄ square pyramidal), partial and complete hydrolysis of xenon fluorides, and modern applications of noble gases.",

  basicIdea: [
    "1. Group 17 Halogen Anomalies: Chlorine (-349 kJ/mol) has a MORE negative electron gain enthalpy than Fluorine (-333 kJ/mol) because the compact 2p orbital in F causes severe electron-electron repulsion. Bond dissociation enthalpy order is Cl₂ (242.6) > Br₂ (192.8) > F₂ (158.8) > I₂ (151.1 kJ/mol) due to intense lone pair-lone pair repulsion across the short F-F bond.",
    "2. Powerful Oxidizing Nature of Halogens: E° order: F₂ (+2.87 V) > Cl₂ (+1.36 V) > Br₂ (+1.09 V) > I₂ (+0.54 V). F₂ is the strongest oxidizer because its low bond dissociation enthalpy combined with high hydration enthalpy of the small F⁻ ion yields the most positive standard reduction potential.",
    "3. Hydracids Acidic Strength & Boiling Points: Acidic strength: HF < HCl < HBr < HI (governed by decreasing H-X bond dissociation energy; HI is strongest acid). Boiling point: HCl < HBr < HI < HF (HF has strong intermolecular H-bonding).",
    "4. Interhalogen Compounds (XX'ₙ): More reactive than pure halogens (except F₂) due to weaker and polar X-X' bonds. Hydrolysis always yields halide of smaller halogen (HX') and oxoacid of larger halogen. VSEPR shapes: ClF₃ is T-shaped (sp³d, 2 equatorial lone pairs); BrF₅ is square pyramidal (sp³d², 1 lone pair); IF₇ is pentagonal bipyramidal (sp³d³).",
    "5. Group 18 Noble Gases & Bartlett's Discovery: Noble gases possess closed shell configurations (ns² np⁶, He: 1s²), very high IE, large positive ΔegH, and exceptionally low boiling points (He: 4.2 K). In 1962, Neil Bartlett prepared the first noble gas compound Xe⁺[PtF₆]⁻ by comparing the IE of Xe (1170 kJ/mol) with O₂ (1175 kJ/mol).",
    "6. Xenon Compounds Geometries & Hydrolysis: XeF₂ (Linear, sp³d), XeF₄ (Square planar, sp³d²), XeF₆ (Distorted octahedral, sp³d³), XeO₃ (Pyramidal, sp³, explosive solid), XeOF₄ (Square pyramidal, sp³d²). Complete hydrolysis: XeF₆ + 3 H₂O → XeO₃ + 6 HF. Hydrolysis of XeF₄ is a disproportionation reaction yielding Xe, XeO₃, HF, and O₂.",
    "7. Key Uses: Helium in deep-sea diving (low blood solubility prevents bends) and MRI superconducting magnets (4.2 K liquid He). Neon in discharge tubes/signs. Argon in metallurgical arc welding and incandescent bulbs. Radon in cancer radiotherapy."
  ],

  importantTerms: [
    {
      term: "Electron Gain Enthalpy Anomaly",
      definition: "Negative ΔegH order: Cl (-349) > F (-333) > Br (-325) > I (-295 kJ/mol) due to small 2p size and electron repulsion in F.",
      neetNote: "Cl has the highest negative electron gain enthalpy in the periodic table."
    },
    {
      term: "Halogen Bond Dissociation Enthalpy Anomaly",
      definition: "Bond energy order: Cl₂ (242.6) > Br₂ (192.8) > F₂ (158.8) > I₂ (151.1 kJ/mol) due to lone pair-lone pair repulsion in F₂.",
      neetNote: "F₂ is lower than both Cl₂ and Br₂."
    },
    {
      term: "Interhalogen Compounds",
      definition: "Binary covalent compounds formed between two different halogens (XX'ₙ).",
      neetNote: "More reactive than halogens (except F₂); ClF₃ is T-shaped; BrF₅ is square pyramidal; IF₇ is pentagonal bipyramidal."
    },
    {
      term: "Neil Bartlett's Discovery (1962)",
      definition: "Synthesis of first noble gas compound Xe⁺[PtF₆]⁻ based on matching ionization enthalpies of Xe and O₂.",
      neetNote: "Pioneered xenon chemical synthesis."
    },
    {
      term: "Deep-Sea Diving Gas Mixture",
      definition: "Helium-oxygen mixture (80% He + 20% O₂) used by deep sea divers.",
      neetNote: "Helium has exceptionally low solubility in blood, preventing decompression sickness ('the bends')."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Group 17 Halogen Periodic Trends & Anomalies",
      paragraphs: [
        "Group 17 (Halogens: F, Cl, Br, I, At) have the valence configuration ns² np⁵. They exhibit the highest electronegativities and highest electron gain enthalpies in their respective periods.",
        "Electron Gain Enthalpy Anomaly: Chlorine (-349 kJ/mol) > Fluorine (-333 kJ/mol) > Bromine (-325 kJ/mol) > Iodine (-295 kJ/mol). The compact 2p orbital in fluorine causes significant electron-electron repulsion that opposes the incoming electron.",
        "Bond Dissociation Enthalpy Anomaly: Cl₂ (242.6 kJ/mol) > Br₂ (192.8 kJ/mol) > F₂ (158.8 kJ/mol) > I₂ (151.1 kJ/mol). Non-bonding lone pairs on compact F atoms repel each other intensely across the short F-F bond, weakening it.",
        "Oxidizing Power: F₂ (+2.87 V) > Cl₂ (+1.36 V) > Br₂ (+1.09 V) > I₂ (+0.54 V). F₂ is the strongest oxidizing agent in water due to low bond dissociation enthalpy and huge hydration enthalpy."
      ],
      visual: {
        type: 'svg',
        svgContent: P_BLOCK_12_DIAGRAMS.group1718TrendsAndStructures,
        caption: "Figure 16.5: Group 17 Halogen Trends, Interhalogens & Group 18 Xenon Geometries.",
        guide: "Diagram Guide: Master the VSEPR geometries of ClF₃ (T-shape), XeF₂ (Linear), XeF₄ (Square planar), and XeF₆ (Distorted octahedral)."
      },
      importantPoints: [
        "Negative ΔegH: Cl > F > Br > I; Bond energy: Cl₂ > Br₂ > F₂ > I₂.",
        "Fluorine shows ONLY -1 oxidation state (no d-orbitals, highest electronegativity).",
        "Acidic strength of hydracids: HF < HCl < HBr < HI (HI is strongest acid)."
      ]
    },
    {
      heading: "2. Interhalogens, Oxoacids & Reactions with Alkali",
      paragraphs: [
        "Interhalogen Compounds (XX'ₙ): More reactive than elemental halogens (except F₂) because the polar X-X' bond is weaker than the homonuclear X-X bond.",
        "• VSEPR Geometries: ClF₃ (T-shaped, sp³d), BrF₅ (Square pyramidal, sp³d²), IF₇ (Pentagonal bipyramidal, sp³d³).",
        "• Hydrolysis: XX'ₙ + H₂O yields halide of smaller halogen (HX') and oxoacid of larger halogen (HXOₘ).",
        "Reaction of Chlorine with NaOH:",
        "• With Cold Dilute NaOH: 2 NaOH + Cl₂ → NaCl + NaOCl (+1) + H₂O.",
        "• With Hot Concentrated NaOH: 6 NaOH + 3 Cl₂ → 5 NaCl + NaClO₃ (+5) + 3 H₂O.",
        "Oxoacids of Chlorine: Acidic strength increases with oxidation state: HClO < HClO₂ < HClO₃ < HClO₄ (HClO₄ is strongest acid due to resonance-stabilized ClO₄⁻)."
      ],
      importantPoints: [
        "ClF₃ is T-shaped (sp³d, 2 equatorial lone pairs).",
        "Cold dilute NaOH + Cl₂ gives NaOCl; Hot concentrated NaOH + Cl₂ gives NaClO₃.",
        "Acidic strength: HClO < HClO₂ < HClO₃ < HClO₄; Oxidizing power is the reverse: HClO > HClO₂ > HClO₃ > HClO₄."
      ]
    },
    {
      heading: "3. Group 18 Noble Gases & Neil Bartlett's Discovery",
      paragraphs: [
        "Group 18 (He, Ne, Ar, Kr, Xe, Rn) have complete valence shells (ns² np⁶, He: 1s²). They are monatomic, non-polar gases with very low boiling points (He: 4.2 K, lowest of any substance).",
        "Neil Bartlett's Discovery (1962): Noticed that PtF₆ oxidized O₂ to O₂⁺[PtF₆]⁻. Since IE of Xe (1170 kJ/mol) ≈ IE of O₂ (1175 kJ/mol), Bartlett reacted Xe with PtF₆ to produce the first noble gas compound Xe⁺[PtF₆]⁻.",
        "Synthesis of Xenon Fluorides:",
        "• Xe + F₂ (1:1, 673 K, 1 bar) → XeF₂(s)",
        "• Xe + 2 F₂ (1:5, 873 K, 7 bar) → XeF₄(s)",
        "• Xe + 3 F₂ (1:20, 573 K, 60-70 bar) → XeF₆(s)"
      ],
      importantPoints: [
        "Noble gases have large POSITIVE electron gain enthalpies.",
        "Helium has the lowest boiling point of any known substance (4.2 K).",
        "Bartlett's rationale: IE(Xe) ≈ IE(O₂)."
      ]
    },
    {
      heading: "4. Xenon Compound Geometries, Hydrolysis & Noble Gas Uses",
      paragraphs: [
        "VSEPR Shapes of Xenon Compounds:",
        "• XeF₂: Steric number 5 (2 bp + 3 lp) ⇒ Linear (sp³d)",
        "• XeF₄: Steric number 6 (4 bp + 2 lp) ⇒ Square Planar (sp³d²)",
        "• XeF₆: Steric number 7 (6 bp + 1 lp) ⇒ Distorted Octahedral (sp³d³)",
        "• XeO₃: Steric number 4 (3 σ bp + 1 lp) ⇒ Pyramidal (sp³, explosive solid)",
        "• XeOF₄: Steric number 6 (5 bp + 1 lp) ⇒ Square Pyramidal (sp³d²)",
        "Hydrolysis Reactions:",
        "• 2 XeF₂ + 2 H₂O → 2 Xe + 4 HF + O₂",
        "• 6 XeF₄ + 12 H₂O → 2 Xe + 4 XeO₃ + 24 HF + 3 O₂ (Disproportionation)",
        "• XeF₆ + 3 H₂O → XeO₃ + 6 HF (Complete hydrolysis)",
        "• XeF₆ + H₂O → XeOF₄ + 2 HF; XeF₆ + 2 H₂O → XeO₂F₂ + 4 HF (Partial hydrolysis)",
        "Noble Gas Uses:",
        "• Helium: Deep-sea diving gas (prevents bends due to low blood solubility); Coolant for superconducting MRI magnets (4.2 K); Filling balloons.",
        "• Neon: Discharge tubes and advertising display signs.",
        "• Argon: Inert atmosphere in arc welding and electric light bulbs.",
        "• Radon: Radiotherapy in cancer treatment."
      ],
      importantPoints: [
        "XeF₂ is LINEAR, XeF₄ is SQUARE PLANAR, XeF₆ is DISTORTED OCTAHEDRAL.",
        "Complete hydrolysis of XeF₆ gives XeO₃ and HF.",
        "Helium in diving tanks prevents decompression sickness."
      ]
    }
  ],

  formulae: [
    {
      title: "Halogen Enthalpy Anomaly Summary",
      formula: "\\text{Negative } \\Delta_{eg}H: Cl > F > Br > I \\\\ \\text{Bond Dissociation Enthalpy: } Cl_2 > Br_2 > F_2 > I_2",
      meaning: "Fundamental electron gain and bond enthalpy anomalies",
      symbols: "Cl (-349 kJ/mol), F (-333 kJ/mol); Cl₂ (242.6 kJ/mol), F₂ (158.8 kJ/mol)",
      unit: "kJ/mol",
      conditions: "Standard gas phase",
      whenToUse: "Use in periodic trend matching and ranking questions."
    },
    {
      title: "Xenon VSEPR Hybridization & Geometries",
      formula: "\\text{XeF}_2: sp^3d \\text{ (Linear)} \\\\ \\text{XeF}_4: sp^3d^2 \\text{ (Square Planar)} \\\\ \\text{XeF}_6: sp^3d^3 \\text{ (Distorted Octahedral)} \\\\ \\text{XeO}_3: sp^3 \\text{ (Pyramidal)} \\\\ \\text{XeOF}_4: sp^3d^2 \\text{ (Square Pyramidal)}",
      meaning: "Master VSEPR classification of Xenon compounds",
      symbols: "bp = bond pairs, lp = lone pairs",
      unit: "Steric number",
      conditions: "Valence shell electron pair repulsion theory",
      whenToUse: "Use in geometry matching and hybridization questions."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: P_BLOCK_12_DIAGRAMS.group1718TrendsAndStructures,
    caption: "Group 17 & 18 Combined Master Schematic: Halogens & Noble Gas Geometries."
  },

  neetImportantPoints: [
    "Cl has highest negative ΔegH (-349 kJ/mol); F₂ has lower bond dissociation enthalpy than Cl₂ and Br₂ due to lp-lp repulsion.",
    "F₂ is the strongest oxidizing agent in water (E° = +2.87 V).",
    "Acidic strength of hydracids: HF < HCl < HBr < HI; Boiling points: HCl < HBr < HI < HF.",
    "Interhalogen compounds (XX'ₙ) are more reactive than parent halogens (except F₂).",
    "ClF₃ is T-shaped (sp³d); BrF₅ is square pyramidal (sp³d²); IF₇ is pentagonal bipyramidal (sp³d³).",
    "Neil Bartlett synthesized Xe⁺[PtF₆]⁻ in 1962 using PtF₆ based on IE(Xe) ≈ IE(O₂).",
    "XeF₂ (Linear, 3 lp), XeF₄ (Square planar, 2 lp), XeF₆ (Distorted octahedral, 1 lp), XeO₃ (Pyramidal, 1 lp).",
    "Complete hydrolysis of XeF₆ produces XeO₃ and HF; Hydrolysis of XeF₄ is a disproportionation.",
    "Helium is used in deep sea diving because of low blood solubility, preventing bends."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming Fluorine has the most negative electron gain enthalpy.",
      correctFact: "Chlorine (-349 kJ/mol) has the most negative electron gain enthalpy in the periodic table; Fluorine is -333 kJ/mol due to 2p electron repulsion.",
      whyItMattersForNEET: "Classic NEET ranking question."
    },
    {
      commonConfusion: "Assuming XeF₂ has a bent shape like H₂O.",
      correctFact: "In XeF₂, the 3 lone pairs occupy equatorial positions (120°), making the molecular shape perfectly LINEAR (180°).",
      whyItMattersForNEET: "Frequently tested in VSEPR matching questions."
    },
    {
      commonConfusion: "Confusing products of Cl₂ with cold dilute vs hot concentrated NaOH.",
      correctFact: "Cold dilute NaOH + Cl₂ → NaCl + NaOCl; Hot concentrated NaOH + Cl₂ → NaCl + NaClO₃.",
      whyItMattersForNEET: "High negative marking rate question in NEET."
    }
  ],

  quickRevision: [
    "⚡ Negative ΔegH: Cl > F > Br > I; Bond energy: Cl₂ > Br₂ > F₂ > I₂.",
    "⚡ Oxidizing power: F₂ > Cl₂ > Br₂ > I₂ (F₂ has E° = +2.87 V).",
    "⚡ Hydracid acidity: HF < HCl < HBr < HI; Boiling point: HCl < HBr < HI < HF.",
    "⚡ Cold dil NaOH + Cl₂ → NaOCl; Hot conc NaOH + Cl₂ → NaClO₃.",
    "⚡ Interhalogens: ClF₃ (T-shaped), BrF₅ (Square pyramidal), IF₇ (Pentagonal bipyramidal).",
    "⚡ Bartlett (1962): Xe⁺[PtF₆]⁻ (IE of Xe = 1170 kJ/mol ≈ IE of O₂ = 1175 kJ/mol).",
    "⚡ XeF₂: Linear (sp³d); XeF₄: Square planar (sp³d²); XeF₆: Distorted octahedral (sp³d³).",
    "⚡ XeO₃: Pyramidal (sp³, explosive solid); XeOF₄: Square pyramidal (sp³d²).",
    "⚡ XeF₆ + 3 H₂O → XeO₃ + 6 HF (Complete hydrolysis).",
    "⚡ Helium: Deep sea diving (prevents bends) and MRI superconducting magnet coolant (4.2 K)."
  ],

  practiceQuestions: [
    {
      id: "prac-pblock-1718-1",
      question: "Which of the following molecules has a square planar shape according to VSEPR theory?",
      options: ["XeF₄", "XeF₂", "XeO₃", "ClF₃"],
      correctAnswer: 0,
      explanation: "XeF₄ has 4 bond pairs and 2 lone pairs on the central Xe atom (steric number = 6, sp³d² hybridization). The two lone pairs occupy trans/axial positions, resulting in a square planar molecular geometry.",
      conceptTested: "XeF4 Square Planar Geometry",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-17-18-elements"
    },
    {
      id: "prac-pblock-1718-2",
      question: "The correct order of increasing acidic strength of oxoacids of chlorine is:",
      options: [
        "HClO < HClO₂ < HClO₃ < HClO₄",
        "HClO₄ < HClO₃ < HClO₂ < HClO",
        "HClO₂ < HClO < HClO₃ < HClO₄",
        "HClO₃ < HClO₄ < HClO₂ < HClO"
      ],
      correctAnswer: 0,
      explanation: "The acidic strength of oxoacids of chlorine increases with increasing oxidation state of chlorine: HClO (+1) < HClO₂ (+3) < HClO₃ (+5) < HClO₄ (+7). The conjugate base ClO₄⁻ is stabilized by resonance across 4 equivalent oxygen atoms.",
      conceptTested: "Acidic Strength of Chlorine Oxoacids",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-17-18-elements"
    },
    {
      id: "prac-pblock-1718-3",
      question: "Which of the following noble gases is used in Magnetic Resonance Imaging (MRI) machines to produce superconductivity in magnet coils?",
      options: ["Liquid Helium", "Liquid Argon", "Neon", "Krypton"],
      correctAnswer: 0,
      explanation: "Liquid Helium has the lowest boiling point of any substance (4.2 K). It is used as a cryogenic coolant to achieve and maintain superconductivity in the superconducting magnets of MRI scanners and NMR spectrometers.",
      conceptTested: "Use of Liquid Helium in Superconductivity and MRI",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-17-18-elements"
    },
    {
      id: "prac-pblock-1718-4",
      question: "The geometry of ClF₃ is T-shaped because:",
      options: [
        "The central Cl atom has 3 bond pairs and 2 lone pairs in equatorial positions of a trigonal bipyramid",
        "The central Cl atom has 3 bond pairs and 2 lone pairs in axial positions",
        "It undergoes sp³d² hybridization",
        "Fluorine atoms repel each other strongly"
      ],
      correctAnswer: 0,
      explanation: "In ClF₃, the central Cl has 7 valence electrons. With 3 F atoms, it forms 3 bond pairs and retains 2 lone pairs (steric number = 5, sp³d hybridization). To minimize 90° lp-lp and lp-bp repulsions, both lone pairs occupy equatorial positions, resulting in a T-shaped molecular geometry.",
      conceptTested: "ClF3 VSEPR Shape & Lone Pair Positioning",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-17-18-elements"
    }
  ],

  pyqs: P_BLOCK_12_VERIFIED_PYQS.filter(q => q.topicId === "chem-group-17-elements" || q.topicId === "chem-group-18-elements" || q.topicId === "chem-group-17-18-elements")
};
