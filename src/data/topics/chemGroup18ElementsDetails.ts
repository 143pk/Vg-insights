import { DetailedTopicContent } from '../../types/neet';
import { P_BLOCK_12_DIAGRAMS } from '../pBlock12/pBlock12Diagrams';
import { P_BLOCK_12_VERIFIED_PYQS } from '../pBlock12/pBlock12Pyqs';

export const chemGroup18ElementsDetails: DetailedTopicContent = {
  topicId: "chem-group-18-elements",
  topicName: "Group 18 Elements (Noble Gases — Inertness, Bartlett's Landmark Reaction, Xenon Compounds & Uses)",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry (Class 12)",
  chapter: "p-Block Elements (Group 15 to 18)",

  whatIsThisTopic:
    "Group 18 of the periodic table, known as the Noble Gases or Rare/Inert Gases, comprises Helium (He), Neon (Ne), Argon (Ar), Krypton (Kr), Xenon (Xe), and Radon (Rn). This high-yield NEET module covers their electronic configurations (ns² np⁶, except He: 1s²), general physical properties (monatomic nature, extremely low boiling points, large positive electron gain enthalpies, exceptionally high ionization enthalpies), the chemical inertness of noble gases and the historical breakthrough of Neil Bartlett's landmark synthesis of Xe⁺[PtF₆]⁻ in 1962, synthesis and preparation conditions of Xenon fluorides (XeF₂, XeF₄, XeF₆), VSEPR geometries and hybridizations (XeF₂ linear, XeF₄ square planar, XeF₆ distorted octahedral, XeO₃ pyramidal, XeOF₄ square pyramidal, XeO₂F₂ see-saw), chemical reactions (complete and partial hydrolysis, fluoride ion donor/acceptor behavior), and industrial/medical applications of Helium, Neon, Argon, Krypton, Xenon, and Radon in modern technology and medicine.",

  basicIdea: [
    "1. Electronic Configuration & Closed Shell Stability: All noble gases have completely filled valence s and p subshells (ns² np⁶), except Helium which has 1s². Because of this stable, closed-shell electronic configuration, they have no tendency to gain or lose electrons under standard conditions, resulting in exceptionally high ionization enthalpies and large positive electron gain enthalpies.",
    "2. Physical Properties & Weak Intermolecular Forces: All noble gases are colorless, odorless, tasteless, and monatomic gases. Because they are non-polar single atoms, the only interatomic interactions holding them together are extremely weak London dispersion (van der Waals) forces. Consequently, they possess the lowest boiling points of any group in the periodic table. Helium has the lowest boiling point of any known substance (4.2 K) and does not solidify under atmospheric pressure even at absolute zero.",
    "3. Neil Bartlett's Landmark Reaction (1962): Historically, noble gases were thought to be completely unreactive. In March 1962, Neil Bartlett observed that platinum hexafluoride (PtF₆), a powerful oxidizing agent, oxidized molecular oxygen (O₂) to give a red crystalline ionic solid O₂⁺[PtF₆]⁻. Bartlett noticed that the first ionization enthalpy of molecular oxygen (1175 kJ/mol) was nearly identical to that of Xenon (1170 kJ/mol). He mixed Xenon gas with PtF₆ vapor at room temperature and obtained the first noble gas compound: Xe⁺[PtF₆]⁻ (orange-yellow solid), opening the field of noble gas chemistry.",
    "4. Xenon Fluorides Synthesis (XeF₂, XeF₄, XeF₆): Prepared by direct thermal reaction of Xenon with Fluorine in nickel vessels under controlled temperature, pressure, and molar ratios: (a) Xe + F₂ (1:1 ratio, 673 K, 1 bar) → XeF₂(s); (b) Xe + 2 F₂ (1:5 ratio, 873 K, 7 bar) → XeF₄(s); (c) Xe + 3 F₂ (1:20 ratio, 573 K, 60-70 bar) → XeF₆(s). All are colorless crystalline solids that sublime readily.",
    "5. VSEPR Geometries & Hybridization: (a) XeF₂: sp³d hybridization, 2 bond pairs + 3 lone pairs in equatorial positions ⇒ Linear shape (180°). (b) XeF₄: sp³d² hybridization, 4 bond pairs + 2 lone pairs in axial positions ⇒ Square Planar shape. (c) XeF₆: sp³d³ hybridization, 6 bond pairs + 1 lone pair ⇒ Distorted Octahedral shape. (d) XeO₃: sp³ hybridization, 3 σ bond pairs + 1 lone pair + 3 π bonds ⇒ Pyramidal shape (explosive solid). (e) XeOF₄: sp³d² hybridization, 5 bond pairs + 1 lone pair ⇒ Square Pyramidal shape.",
    "6. Hydrolysis of Xenon Fluorides: (a) XeF₂ undergoes slow hydrolysis: 2 XeF₂ + 2 H₂O → 2 Xe + 4 HF + O₂. (b) XeF₄ undergoes disproportionation on hydrolysis: 6 XeF₄ + 12 H₂O → 2 Xe + 4 XeO₃ + 24 HF + 3 O₂. (c) XeF₆ undergoes complete hydrolysis to give XeO₃: XeF₆ + 3 H₂O → XeO₃ + 6 HF. Partial hydrolysis of XeF₆ yields oxyfluorides: XeF₆ + H₂O → XeOF₄ + 2 HF; XeF₆ + 2 H₂O → XeO₂F₂ + 4 HF.",
    "7. High-Yield Uses of Noble Gases: Helium is used in filling meteorological balloons (non-flammable, lighter than air) and as a diluent for oxygen in modern deep-sea diving cylinders (replaces nitrogen to prevent 'bends' due to low blood solubility). Liquid Helium (4.2 K) is used to produce superconductivity in MRI machines. Neon is used in discharge tubes and advertising signs. Argon is used to provide an inert atmosphere in high-temperature metallurgy (arc welding) and filling incandescent light bulbs. Radon is used in radiotherapy for cancer treatment."
  ],

  importantTerms: [
    {
      term: "Neil Bartlett's Reaction",
      symbol: "Xe + PtF₆ ⎯(Room Temp)⎯→ Xe⁺ [PtF₆]⁻",
      definition: "The historic synthesis of the first true noble gas compound in 1962, based on the equality of ionization enthalpies of Xe (1170 kJ/mol) and O₂ (1175 kJ/mol).",
      neetNote: "Bartlett utilized the powerful oxidizing agent PtF₆ (platinum hexafluoride) to oxidize Xe."
    },
    {
      term: "Distorted Octahedral Geometry of XeF₆",
      definition: "The molecular geometry of Xenon hexafluoride having 6 bond pairs and 1 sterically active lone pair (steric number = 7, sp³d³ hybridization).",
      neetNote: "XeF₆ is NOT a regular octahedron; the presence of 1 lone pair distorts the octahedral symmetry."
    },
    {
      term: "Partial vs Complete Hydrolysis of XeF₆",
      definition: "The stepwise reaction of XeF₆ with controlled amounts of water to yield xenon oxyfluorides and ultimately xenon trioxide.",
      neetNote: "With 1 mol H₂O: XeF₆ + H₂O → XeOF₄ (Square pyramidal) + 2 HF. With 2 mol H₂O: XeF₆ + 2 H₂O → XeO₂F₂ (See-saw) + 4 HF. With 3 mol H₂O (Complete): XeF₆ + 3 H₂O → XeO₃ (Pyramidal, explosive solid) + 6 HF."
    },
    {
      term: "Fluoride Ion Donor / Acceptor Behavior of XeF₂",
      definition: "The Lewis acid-base reactions of xenon fluorides with phosphorus and transition metal pentafluorides or alkali metal fluorides.",
      neetNote: "With PF₅ / SbF₅ (Fluoride donor): XeF₂ + PF₅ → [XeF]⁺ [PF₆]⁻. With MF (Fluoride acceptor, where M = Na, K, Rb, Cs): XeF₆ + MF → M⁺ [XeF₇]⁻."
    },
    {
      term: "Helium in Deep-Sea Diving",
      definition: "A breathing mixture of 80% He and 20% O₂ used by scuba and deep-sea divers instead of air.",
      neetNote: "Helium has exceptionally low solubility in blood even under high underwater pressure, preventing nitrogen narcosis and decompression sickness ('the bends')."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Group 18 Noble Gases Periodic Trends & Chemical Inertness",
      paragraphs: [
        "Group 18 (Noble Gases) comprises Helium (₂He), Neon (₁₀Ne), Argon (₁₈Ar), Krypton (₃₆Kr), Xenon (₅₄Xe), and Radon (₈₆Rn). The valence electronic configuration of Helium is 1s², while all other members possess the complete octet configuration ns² np⁶.",
        "Chemical Inertness: Noble gases are chemically very unreactive due to three fundamental reasons: (1) Completely filled valence shells (1s² in He, ns² np⁶ in others), (2) Extremely high ionization enthalpies across the periodic table, and (3) Highly positive (endothermic) electron gain enthalpies, as an extra electron must enter an entirely new principal shell.",
        "Physical Properties: Monatomic, colorless, odorless, and non-flammable gases. The interatomic forces are limited exclusively to weak London dispersion forces, which scale with polarizability and atomic size. Consequently, boiling points and melting points are exceptionally low (He: 4.2 K, Ne: 27.1 K, Ar: 87.2 K, Kr: 119.7 K, Xe: 165.0 K, Rn: 211.0 K).",
        "Helium Anomalies: Helium has the lowest boiling point of any known substance (4.2 K). It exhibits superfluidity (zero viscosity) near absolute zero and can diffuse rapidly through rubber, glass, and most plastics."
      ],
      visual: {
        type: 'svg',
        svgContent: P_BLOCK_12_DIAGRAMS.group1718TrendsAndStructures,
        caption: "Figure 16.4: Group 18 Xenon Geometries (XeF₂, XeF₄, XeF₆, XeO₃, XeOF₄) & VSEPR Table.",
        guide: "Diagram Guide: Verify the lone pair positions for each Xenon compound: XeF₂ has 3 equatorial lone pairs (linear), XeF₄ has 2 axial lone pairs (square planar)."
      },
      importantPoints: [
        "Noble gases have large POSITIVE electron gain enthalpies (not negative!).",
        "Helium has the lowest boiling point (4.2 K) of any substance on Earth.",
        "Argon is the most abundant noble gas in the atmosphere (~0.93% by volume)."
      ]
    },
    {
      heading: "2. Neil Bartlett's Discovery & Xenon Fluorides Synthesis",
      paragraphs: [
        "Neil Bartlett's Discovery (1962): Neil Bartlett at the University of British Columbia synthesized the red compound O₂⁺[PtF₆]⁻ by reacting oxygen gas with PtF₆. Recognizing that the first ionization enthalpy of molecular oxygen (1175 kJ/mol) was nearly identical to that of Xenon (1170 kJ/mol), Bartlett mixed Xenon gas with PtF₆ vapor to produce the first noble gas compound: Xe + PtF₆ ⎯(298 K)⎯→ Xe⁺[PtF₆]⁻ (an orange-yellow solid).",
        "Synthesis of Xenon Fluorides: Xenon reacts directly with fluorine gas in sealed nickel vessels under specific stoichiometric and physical conditions:",
        "1. Xenon Difluoride (XeF₂): Xe(g) + F₂(g) ⎯(673 K, 1 bar, 1:1 molar ratio)⎯→ XeF₂(s)",
        "2. Xenon Tetrafluoride (XeF₄): Xe(g) + 2 F₂(g) ⎯(873 K, 7 bar, 1:5 molar ratio)⎯→ XeF₄(s)",
        "3. Xenon Hexafluoride (XeF₆): Xe(g) + 3 F₂(g) ⎯(573 K, 60-70 bar, 1:20 molar ratio)⎯→ XeF₆(s)",
        "Alternative Preparation of XeF₆: XeF₄ + O₂F₂ ⎯(143 K)⎯→ XeF₆ + O₂ (Dioxygen difluoride acts as a powerful fluorinating agent at low temperatures).",
        "All three fluorides are white crystalline solids that sublime at 298 K, act as powerful fluorinating agents, and undergo rapid hydrolysis."
      ],
      importantPoints: [
        "XeF₂ requires 1:1 ratio at 673 K and 1 bar.",
        "XeF₄ requires 1:5 ratio at 873 K and 7 bar.",
        "XeF₆ requires 1:20 ratio at 573 K and 60-70 bar.",
        "O₂F₂ oxidizes XeF₄ to XeF₆ at 143 K."
      ]
    },
    {
      heading: "3. Molecular Geometries & Hybridization of Xenon Compounds",
      paragraphs: [
        "The geometries of Xenon compounds are explained cleanly using VSEPR theory (valence shell of Xe has 8 electrons):",
        "1. XeF₂ (Xenon Difluoride): Steric Number = 2 bond pairs + 3 lone pairs = 5. Hybridization: sp³d. To minimize lone pair-lone pair repulsion at 90°, all 3 lone pairs occupy equatorial positions of the trigonal bipyramid. The resulting molecular shape is strictly LINEAR (F-Xe-F angle = 180°).",
        "2. XeF₄ (Xenon Tetrafluoride): Steric Number = 4 bond pairs + 2 lone pairs = 6. Hybridization: sp³d². The 2 lone pairs occupy trans/axial positions (180° apart) of the octahedron to minimize repulsion. The resulting molecular shape is SQUARE PLANAR.",
        "3. XeF₆ (Xenon Hexafluoride): Steric Number = 6 bond pairs + 1 lone pair = 7. Hybridization: sp³d³. The sterically active lone pair distorts the regular octahedral geometry, yielding a DISTORTED OCTAHEDRAL shape.",
        "4. XeO₃ (Xenon Trioxide): Steric Number = 3 σ bond pairs + 1 lone pair = 4 (Xe forms 3 double bonds with oxygen: 3 σ and 3 dπ-pπ bonds). Hybridization: sp³. Molecular shape is PYRAMIDAL (like NH₃). XeO₃ is a colorless, highly explosive hygroscopic solid.",
        "5. XeOF₄ (Xenon Oxytetrafluoride): Steric Number = 5 σ bond pairs + 1 lone pair = 6 (one Xe=O double bond and four Xe-F single bonds). Hybridization: sp³d². Molecular shape is SQUARE PYRAMIDAL.",
        "6. XeO₂F₂ (Xenon Dioxydifluoride): Steric Number = 4 σ bond pairs + 1 lone pair = 5. Hybridization: sp³d. Molecular shape is SEE-SAW."
      ],
      importantPoints: [
        "XeF₂ is LINEAR (sp³d, 3 equatorial lone pairs).",
        "XeF₄ is SQUARE PLANAR (sp³d², 2 axial lone pairs).",
        "XeF₆ is DISTORTED OCTAHEDRAL (sp³d³, 1 lone pair).",
        "XeO₃ is PYRAMIDAL (sp³, 1 lone pair, explosive solid).",
        "XeOF₄ is SQUARE PYRAMIDAL (sp³d², 1 lone pair, liquid)."
      ]
    },
    {
      heading: "4. Chemical Reactions, Hydrolysis & High-Yield Uses",
      paragraphs: [
        "Hydrolysis of Xenon Compounds (⚠️ Very High-Yield NEET Trap):",
        "• Hydrolysis of XeF₂: 2 XeF₂ + 2 H₂O → 2 Xe + 4 HF + O₂",
        "• Hydrolysis of XeF₄ (Disproportionation): 6 XeF₄ + 12 H₂O → 2 Xe + 4 XeO₃ + 24 HF + 3 O₂ (Xe in +4 state disproportionates into Xe (0) and XeO₃ (+6)).",
        "• Complete Hydrolysis of XeF₆: XeF₆ + 3 H₂O → XeO₃ + 6 HF",
        "• Partial Hydrolysis of XeF₆: XeF₆ + H₂O → XeOF₄ + 2 HF; XeF₆ + 2 H₂O → XeO₂F₂ + 4 HF.",
        "Fluoride Ion Donor / Acceptor Reactions:",
        "• As Fluoride Donor (with Lewis acids like PF₅, AsF₅, SbF₅): XeF₂ + PF₅ → [XeF]⁺ [PF₆]⁻; XeF₄ + SbF₅ → [XeF₃]⁺ [SbF₆]⁻; XeF₆ + SbF₅ → [XeF₅]⁺ [SbF₆]⁻.",
        "• As Fluoride Acceptor (with alkali metal fluorides MF, M = Na, K, Rb, Cs): XeF₆ + MF → M⁺ [XeF₇]⁻.",
        "High-Yield Uses of Noble Gases:",
        "1. Helium: Non-flammable and light; used in filling meteorological and observation balloons. Used as a coolant in nuclear reactors. Liquid Helium (4.2 K) is essential for maintaining superconductivity in superconducting magnets used in MRI (Magnetic Resonance Imaging) scanners and NMR spectrometers. Used to dilute oxygen in deep-sea diving mixtures (prevents decompression sickness / the bends due to low solubility in blood).",
        "2. Neon: Used in discharge tubes and neon sign advertising boards (gives brilliant orange-red glow). Used in beacon lights for airports.",
        "3. Argon: Used to provide an inert atmosphere in high-temperature metallurgical processes (e.g. arc welding of aluminium and stainless steels) and for filling incandescent electric light bulbs to retard filament evaporation.",
        "4. Krypton & Xenon: Used in high-efficiency incandescent lamps, airport runway approach flash lamps, and laser technology.",
        "5. Radon: Radioactive element; used in radiotherapy for the treatment of malignant cancer tumors."
      ],
      importantPoints: [
        "Hydrolysis of XeF₄ is a DISPROPORTIONATION reaction yielding Xe, XeO₃, HF, and O₂.",
        "Complete hydrolysis of XeF₆ yields XeO₃ and HF without liberating oxygen gas.",
        "Deep sea divers use He-O₂ mixture because Helium has very low blood solubility compared to N₂."
      ]
    }
  ],

  formulae: [
    {
      title: "Xenon Fluorides Synthesis Summary",
      formula: "Xe + F_2 \\xrightarrow[673\\text{ K}, 1\\text{ bar}]{1:1} XeF_2 \\\\ Xe + 2F_2 \\xrightarrow[873\\text{ K}, 7\\text{ bar}]{1:5} XeF_4 \\\\ Xe + 3F_2 \\xrightarrow[573\\text{ K}, 60-70\\text{ bar}]{1:20} XeF_6",
      meaning: "Stoichiometric temperature/pressure conditions for Xe fluorides",
      symbols: "Molar ratios: 1:1 for XeF₂, 1:5 for XeF₄, 1:20 for XeF₆",
      unit: "Kelvin, bar",
      conditions: "Sealed Nickel reaction vessel",
      whenToUse: "Use for reaction condition matching and preparation stoichiometry."
    },
    {
      title: "XeF₄ Disproportionation Hydrolysis",
      formula: "6 XeF_4(s) + 12 H_2O(l) \\rightarrow 2 Xe(g) + 4 XeO_3(s) + 24 HF(aq) + 3 O_2(g)",
      meaning: "Hydrolysis and disproportionation of xenon tetrafluoride",
      symbols: "Xe(+4) disproportionates into Xe(0) and Xe(+6)",
      unit: "Stoichiometry",
      conditions: "Aqueous ambient conditions",
      whenToUse: "Use in balancing redox and disproportionation reactions."
    },
    {
      title: "XeF₆ Hydrolysis Steps",
      formula: "XeF_6 + H_2O \\rightarrow XeOF_4 + 2 HF \\\\ XeF_6 + 2 H_2O \\rightarrow XeO_2F_2 + 4 HF \\\\ XeF_6 + 3 H_2O \\rightarrow XeO_3 + 6 HF",
      meaning: "Partial and complete hydrolysis of xenon hexafluoride",
      symbols: "XeOF₄ = Square pyramidal, XeO₂F₂ = See-saw, XeO₃ = Pyramidal",
      unit: "Molar ratio with H₂O",
      conditions: "Controlled addition of moisture",
      whenToUse: "Use in product prediction for partial vs complete hydrolysis."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: P_BLOCK_12_DIAGRAMS.group1718TrendsAndStructures,
    caption: "Group 18 Master Visualization: Bartlett's Reaction & Xenon VSEPR Geometries."
  },

  neetImportantPoints: [
    "Neil Bartlett synthesized the first noble gas compound Xe⁺[PtF₆]⁻ based on the nearly identical first ionization enthalpies of Xe (1170 kJ/mol) and O₂ (1175 kJ/mol).",
    "Noble gases have positive electron gain enthalpies due to their fully occupied stable shells.",
    "XeF₂ has a LINEAR geometry with 3 equatorial lone pairs (sp³d hybridization).",
    "XeF₄ has a SQUARE PLANAR geometry with 2 trans-axial lone pairs (sp³d² hybridization).",
    "XeF₆ has a DISTORTED OCTAHEDRAL geometry with 1 sterically active lone pair (sp³d³ hybridization).",
    "XeO₃ is a colorless, highly explosive pyramidal solid (sp³ hybridization with 3 dπ-pπ double bonds).",
    "XeOF₄ is a colorless square pyramidal liquid (sp³d² hybridization with 1 lone pair).",
    "Helium is mixed with oxygen in scuba diving tanks because of its extremely low solubility in blood, preventing decompression sickness ('bends').",
    "Liquid Helium is used to maintain superconductivity in superconducting magnets for MRI scanners."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming XeF₂ is bent or angular because it contains 2 fluorine atoms.",
      correctFact: "In XeF₂, the steric number is 5 (sp³d). The 3 lone pairs occupy equatorial positions at 120° angles to minimize repulsions, leaving the two axial Xe-F bonds in a perfectly LINEAR geometry (180°).",
      whyItMattersForNEET: "Frequently tested in NEET geometry matching questions."
    },
    {
      commonConfusion: "Confusing complete hydrolysis of XeF₄ with complete hydrolysis of XeF₆.",
      correctFact: "Hydrolysis of XeF₄ is a disproportionation that produces Xe(0), XeO₃, HF, and O₂. Hydrolysis of XeF₆ produces ONLY XeO₃ and HF (no elemental Xe or O₂ gas is evolved).",
      whyItMattersForNEET: "High-yield NEET trap in reaction completion questions."
    },
    {
      commonConfusion: "Thinking noble gases have negative electron gain enthalpies because they do not react.",
      correctFact: "Noble gases have LARGE POSITIVE electron gain enthalpies because an added electron must enter the next higher principal quantum shell (e.g. 2p⁶ → 3s¹ in Ne), which requires significant input of energy.",
      whyItMattersForNEET: "Consistently tested in assertion-reasoning questions."
    }
  ],

  quickRevision: [
    "⚡ Neil Bartlett (1962): First noble gas compound Xe⁺[PtF₆]⁻ (IE of Xe = 1170 kJ/mol ≈ IE of O₂ = 1175 kJ/mol).",
    "⚡ Noble gases: Highest IE in period, large POSITIVE ΔegH, lowest boiling points.",
    "⚡ XeF₂: Linear (sp³d, 3 equatorial lp).",
    "⚡ XeF₄: Square planar (sp³d², 2 axial lp).",
    "⚡ XeF₆: Distorted octahedral (sp³d³, 1 lp).",
    "⚡ XeO₃: Pyramidal (sp³, 1 lp, explosive solid).",
    "⚡ XeOF₄: Square pyramidal (sp³d², 1 lp, liquid).",
    "⚡ XeF₄ + H₂O → Xe + XeO₃ + HF + O₂ (Disproportionation).",
    "⚡ XeF₆ + 3 H₂O → XeO₃ + 6 HF (Complete hydrolysis).",
    "⚡ Helium in diving tanks: prevents bends due to low blood solubility.",
    "⚡ Liquid Helium: MRI scanner superconducting magnet coolant (4.2 K)."
  ],

  practiceQuestions: [
    {
      id: "prac-pblock-18-1",
      question: "Which of the following noble gas compounds was the FIRST to be synthesized by Neil Bartlett?",
      options: [
        "Xe⁺[PtF₆]⁻",
        "XeF₂",
        "XeF₄",
        "XeO₃"
      ],
      correctAnswer: 0,
      explanation: "Neil Bartlett synthesized the first noble gas compound, Xe⁺[PtF₆]⁻ (an orange-yellow solid), in 1962 by reacting Xenon gas with platinum hexafluoride (PtF₆) vapor at room temperature.",
      conceptTested: "Neil Bartlett's Discovery of Noble Gas Compounds",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-18-elements"
    },
    {
      id: "prac-pblock-18-2",
      question: "Match the following Xenon compounds with their molecular shapes according to VSEPR theory:\n(a) XeF₂  (b) XeF₄  (c) XeF₆  (d) XeO₃\n\n1. Pyramidal  2. Distorted octahedral  3. Linear  4. Square planar",
      options: [
        "(a)-3, (b)-4, (c)-2, (d)-1",
        "(a)-4, (b)-3, (c)-2, (d)-1",
        "(a)-3, (b)-4, (c)-1, (d)-2",
        "(a)-1, (b)-2, (c)-3, (d)-4"
      ],
      correctAnswer: 0,
      explanation: "VSEPR shapes of Xenon compounds:\n• XeF₂: 2 bond pairs + 3 lone pairs (sp³d) = Linear (3)\n• XeF₄: 4 bond pairs + 2 lone pairs (sp³d²) = Square Planar (4)\n• XeF₆: 6 bond pairs + 1 lone pair (sp³d³) = Distorted Octahedral (2)\n• XeO₃: 3 bond pairs + 1 lone pair (sp³) = Pyramidal (1).",
      conceptTested: "VSEPR Shapes of Xenon Compounds",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-18-elements"
    },
    {
      id: "prac-pblock-18-3",
      question: "Complete hydrolysis of XeF₆ yields:",
      options: [
        "XeO₃ and HF",
        "Xe, O₂ and HF",
        "XeOF₄ and HF",
        "XeO₂F₂ and HF"
      ],
      correctAnswer: 0,
      explanation: "Complete hydrolysis of XeF₆ with excess water yields Xenon trioxide (XeO₃) and hydrogen fluoride (HF):\nXeF₆ + 3 H₂O → XeO₃ + 6 HF.\nUnlike XeF₄, no elemental Xe or O₂ gas is evolved during complete hydrolysis of XeF₆.",
      conceptTested: "Complete Hydrolysis of XeF6",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-18-elements"
    },
    {
      id: "prac-pblock-18-4",
      question: "Helium is added to the oxygen supply used by deep-sea divers because:",
      options: [
        "It is less soluble in blood than nitrogen under high underwater pressure",
        "It is lighter than nitrogen and facilitates breathing",
        "It is a non-toxic inert gas",
        "It prevents oxidation of hemoglobin"
      ],
      correctAnswer: 0,
      explanation: "Under high hydrostatic pressure deep underwater, nitrogen from air dissolves in the blood. When the diver ascends, nitrogen bubbles out, causing severe pain known as decompression sickness or 'the bends'. Helium has exceptionally low solubility in blood and is used in deep-sea diving gas mixtures (80% He + 20% O₂) to prevent decompression sickness.",
      conceptTested: "Use of Helium in Deep Sea Diving & Henry's Law Application",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-18-elements"
    }
  ],

  pyqs: P_BLOCK_12_VERIFIED_PYQS.filter(q => q.topicId === "chem-group-18-elements")
};
