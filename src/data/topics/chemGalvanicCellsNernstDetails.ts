import { DetailedTopicContent } from '../../types/neet';
import {
  DANIELL_CELL_DIAGRAM,
  STANDARD_HYDROGEN_ELECTRODE_DIAGRAM,
  NERNST_EQUATION_PLOT_DIAGRAM
} from '../electrochemistry/electrochemistryDiagrams';
import { ELECTROCHEMISTRY_VERIFIED_PYQS } from '../electrochemistry/electrochemistryPyqs';

export const chemGalvanicCellsNernstDetails: DetailedTopicContent = {
  topicId: "chem-galvanic-cells-nernst",
  topicName: "Galvanic Cells & Nernst Equation",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Electrochemistry",

  whatIsThisTopic: "Galvanic cells, Daniell cell construction and working, Standard Hydrogen Electrode (SHE), Standard Electrode Potentials (E°), Electrochemical Series, IUPAC cell representation, Nernst Equation for half-cells and full cells, Concentration cells, and thermodynamic relations (ΔrG° and Equilibrium Constant Kc).",

  basicIdea: [
    "A Galvanic (Voltaic) cell converts the chemical free energy of a spontaneous redox reaction (ΔG < 0) directly into electrical energy.",
    "The electrode at which oxidation occurs is the Anode (negative polarity, releases electrons into external circuit). The electrode at which reduction occurs is the Cathode (positive polarity, accepts electrons). Mnemonic: LOAN (Left, Oxidation, Anode, Negative).",
    "A Salt Bridge contains an agar-agar gel saturated with inert electrolyte (KCl, KNO₃, NH₄NO₃) having ions of equal mobilities. It completes the internal circuit and preserves electrical neutrality in both half-cells without liquid junction potential.",
    "Standard Cell Potential: E°_cell = E°_cathode - E°_anode = E°_right - E°_left (both values MUST strictly be Standard Reduction Potentials, SRP).",
    "Nernst Equation at 298 K: E_cell = E°_cell - (0.0591 / n) log₁₀ Q, where Q is the reaction quotient and n is the number of transferred electrons.",
    "Thermodynamic relationships: Δ_r G° = -n F E°_cell and log₁₀ K_c = (n E°_cell) / 0.0591 at 298 K (F ≈ 96500 C mol⁻¹)."
  ],

  importantTerms: [
    {
      term: "Galvanic (Voltaic) Cell",
      symbol: "E_cell",
      definition: "An electrochemical device that converts chemical energy of a spontaneous redox process into electrical energy. Anode is negative (oxidation), cathode is positive (reduction).",
      neetNote: "Remember: LOAN (Left, Oxidation, Anode, Negative). Electrons travel externally from Anode to Cathode, while conventional current flows from Cathode to Anode."
    },
    {
      term: "Standard Electrode Potential (E°)",
      symbol: "E°",
      unit: "Volt (V)",
      definition: "Potential difference between a metal electrode and 1.0 M solution of its ions at 298 K and 1 bar pressure relative to the Standard Hydrogen Electrode (SHE = 0.000 V).",
      neetNote: "By IUPAC convention, electrode potential ALWAYS means Standard Reduction Potential (SRP). Higher positive E° indicates a stronger oxidising agent; lower/more negative E° indicates a stronger reducing agent."
    },
    {
      term: "Standard Hydrogen Electrode (SHE)",
      symbol: "Pt(s) | H₂(g, 1 bar) | H⁺(aq, 1 M)",
      unit: "0.000 V (defined reference)",
      definition: "A primary reference electrode consisting of a platinized platinum foil immersed in 1.0 M H⁺ solution with pure H₂ gas bubbled at 1 bar pressure at 298 K. Its standard potential is assigned as exactly 0.000 V at all temperatures.",
      neetNote: "Can act as anode (H₂ → 2H⁺ + 2e⁻) or cathode (2H⁺ + 2e⁻ → H₂) depending on the half-cell it is coupled with."
    },
    {
      term: "Salt Bridge",
      definition: "An inverted U-tube filled with agar-agar gel saturated with an inert electrolyte whose ions have nearly identical ionic mobilities (e.g., KCl, KNO₃). It prevents liquid junction potential and maintains charge balance.",
      neetNote: "KCl cannot be used if half-cell contains Ag⁺, Pb²⁺, or Hg₂²⁺ due to precipitation of insoluble chlorides (AgCl, PbCl₂)."
    },
    {
      term: "Electrochemical Series",
      definition: "Arrangement of redox couples in decreasing order of standard reduction potentials. Fluorine (F₂/F⁻, E° = +2.87 V) sits at the top as the strongest oxidising agent; Lithium (Li⁺/Li, E° = -3.05 V) sits at the bottom as the strongest reducing agent in aqueous medium.",
      neetNote: "Metals with more negative E° displace metals with less negative/positive E° from their aqueous salt solutions."
    },
    {
      term: "Nernst Equation",
      formula: "E_{cell} = E°_{cell} - \\frac{0.0591}{n} \\log_{10} Q \\text{ at } 298\\text{ K}",
      definition: "Quantitative equation relating non-standard cell potential E_cell to standard potential E°_cell, temperature, electron number n, and reaction quotient Q = [Products]ᵖ / [Reactants]ʳ.",
      neetNote: "Pure solids and liquids have activity = 1.0. If product ion concentration increases, E_cell decreases."
    },
    {
      term: "Standard Gibbs Energy of Reaction (ΔrG°)",
      formula: "\\Delta_r G° = -n F E°_{cell}",
      unit: "J mol⁻¹ or kJ mol⁻¹",
      definition: "Standard Gibbs free energy change for the cell reaction. A positive E°_cell corresponds to a negative ΔrG°, indicating thermodynamic spontaneity.",
      neetNote: "E° is an INTENSIVE property (does not change with stoichiometric multiplier), but ΔG° is EXTENSIVE (doubles when reaction is multiplied by 2)."
    },
    {
      term: "Concentration Cell",
      definition: "A galvanic cell constructed from identical electrodes immersed in the same electrolyte but at different concentrations (c₁ < c₂). Since both electrodes are identical, E°_cell = 0.00 V, and EMF is generated purely by concentration difference: E_cell = (0.0591/n) log(c₂/c₁).",
      neetNote: "Electrons flow from the dilute half-cell (anode, c₁) to the concentrated half-cell (cathode, c₂)."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Construction and Working of Galvanic Cells (Daniell Cell)",
      paragraphs: [
        "A Galvanic cell is an electrochemical device in which the chemical energy of a spontaneous redox reaction is converted directly into electrical energy. The classic archetype is the Daniell Cell, invented by John Frederic Daniell in 1836.",
        "In the Daniell cell, a zinc rod is immersed in a 1.0 M ZnSO₄ aqueous solution (anode compartment), and a copper strip is immersed in a 1.0 M CuSO₄ aqueous solution (cathode compartment). The two half-cells are electrically connected via an external metallic wire containing an ammeter/voltmeter and an internal Salt Bridge.",
        "At the Anode (Oxidation half-reaction): Zinc metal loses two electrons to form hydrated Zn²⁺ ions in solution: Zn(s) → Zn²⁺(aq) + 2e⁻. Because electrons are released here, the anode accumulates negative charge and is designated as the NEGATIVE (-) terminal.",
        "At the Cathode (Reduction half-reaction): Cu²⁺ ions in the solution accept two electrons from the copper strip and deposit as metallic copper: Cu²⁺(aq) + 2e⁻ → Cu(s). The cathode is electron-depleted and is designated as the POSITIVE (+) terminal.",
        "Net Cell Reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). The standard cell potential is E°_cell = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = +0.34 V - (-0.76 V) = +1.10 V at 298 K."
      ],
      visual: {
        type: 'svg',
        svgContent: DANIELL_CELL_DIAGRAM,
        caption: "Daniell Cell (Zn-Cu Galvanic Cell) showing electron flow (Anode to Cathode), conventional current, ion migrations via Salt Bridge, and standard potential +1.10 V.",
        guide: "Observe the LOAN mnemonic: Left half-cell is Anode (Zn), Negative polarity, where Oxidation occurs (Zn → Zn²⁺ + 2e⁻). Right half-cell is Cathode (Cu), Positive polarity, where Reduction occurs (Cu²⁺ + 2e⁻ → Cu). Cl⁻ ions migrate into the Zn half-cell and K⁺ ions migrate into the Cu half-cell through the agar-agar salt bridge."
      },
      importantPoints: [
        "Electron flow in external circuit: Zn anode (-) → Cu cathode (+).",
        "Conventional electric current flow: Cu cathode (+) → Zn anode (-).",
        "External Voltage Oppositions (NCERT Case Studies):",
        "Case 1: When V_ext < 1.10 V: Cell functions as normal Galvanic cell; electrons flow from Zn to Cu, Zn dissolves, Cu deposits.",
        "Case 2: When V_ext = 1.10 V: Cell reaction stops completely; no electron flow, no current, no chemical reaction occurs (Electrochemical Equilibrium).",
        "Case 3: When V_ext > 1.10 V: The cell operation is FORCED TO REVERSE! It now behaves as an Electrolytic Cell: electrons flow from Cu to Zn, Zn deposits on zinc electrode, and Cu dissolves from copper electrode."
      ]
    },
    {
      heading: "2. Standard Hydrogen Electrode (SHE) & Measurement of Electrode Potentials",
      paragraphs: [
        "The absolute potential of an isolated individual half-cell cannot be measured independently because neither oxidation nor reduction can occur in isolation. Therefore, an arbitrarily assigned standard reference electrode is used: the Standard Hydrogen Electrode (SHE).",
        "Construction: SHE consists of a platinum electrode coated with finely divided platinum black (platinized platinum foil). It is immersed in an aqueous solution of 1.0 M H⁺ ions (e.g. 1.0 M HCl), and pure hydrogen gas is continuously bubbled over the platinum surface at 1.0 bar (or 1 atm) pressure at 298 K.",
        "The standard electrode potential of SHE is defined as EXACTLY 0.000 V at all temperatures: E°(H⁺/H₂) = 0.000 V.",
        "To measure the standard reduction potential of any metal couple Mⁿ⁺/M, a galvanic cell is set up by coupling the metal half-cell with SHE. If the metal electrode undergoes reduction relative to SHE (e.g. Cu²⁺/Cu), the measured cell potential is positive (+0.34 V). If the metal electrode oxidizes relative to SHE (e.g. Zn/Zn²⁺), the SHE acts as cathode and the reduction potential of the metal is negative (-0.76 V)."
      ],
      visual: {
        type: 'svg',
        svgContent: STANDARD_HYDROGEN_ELECTRODE_DIAGRAM,
        caption: "Standard Hydrogen Electrode (SHE): Pt(s) | H₂(g, 1 bar) | H⁺(aq, 1 M) acting as the 0.000 V universal reference electrode.",
        guide: "Notice the platinized platinum foil providing catalytic surface for adsorption of H₂ gas molecules and electron transfer: 2H⁺(aq, 1 M) + 2e⁻ ⇌ H₂(g, 1 bar)."
      },
      importantPoints: [
        "SHE representation: Pt(s) | H₂(g, 1 bar) | H⁺(aq, 1 M).",
        "Standard cell potential: E°_cell = E°_cathode - E°_anode = E°_right - E°_left.",
        "Electrochemical Series Hierarchy: Strongest oxidising agent at top (F₂, E° = +2.87 V); strongest reducing agent in aqueous medium at bottom (Li, E° = -3.05 V).",
        "Metals with negative E°_red (e.g. Zn, Fe, Mg, Al) react with dilute acids (HCl, H₂SO₄) to displace and liberate H₂(g)."
      ]
    },
    {
      heading: "3. The Nernst Equation & Concentration Dependence of Cell Potential",
      paragraphs: [
        "Under non-standard conditions (where ionic concentrations ≠ 1.0 M or gas pressures ≠ 1 bar), the electrode potential and cell potential deviate from standard values E°. Walther Nernst derived the quantitative relation from classical thermodynamics: ΔG = ΔG° + RT ln Q.",
        "Substituting ΔG = -nFE and ΔG° = -nFE° into the Gibbs equation yields: -nFE = -nFE° + RT ln Q  ⟹  E_cell = E°_cell - (RT / nF) ln Q.",
        "Converting to base-10 logarithm and substituting universal constants (R = 8.314 J K⁻¹ mol⁻¹, T = 298.15 K, F = 96487 C mol⁻¹): 2.303 RT / F = 0.05916 V ≈ 0.0591 V.",
        "Master Nernst Equation at 298 K: E_cell = E°_cell - (0.0591 / n) log₁₀ Q.",
        "For the generalized redox reaction: aA + bB ⇌ cC + dD, the reaction quotient is Q = ([C]ᶜ [D]ᵈ) / ([A]ᵃ [B]ᵇ). Note that concentrations of pure solids, pure liquids, and solvent water are taken as unity (1.0)."
      ],
      visual: {
        type: 'svg',
        svgContent: NERNST_EQUATION_PLOT_DIAGRAM,
        caption: "Nernst Equation plot of E_cell vs log₁₀([Zn²⁺]/[Cu²⁺]) showing linear decline with negative slope (-0.0591/n = -0.02955 V/decade).",
        guide: "Observe that when [Zn²⁺] = [Cu²⁺] (log Q = 0), E_cell = E°_cell (+1.10 V). As product [Zn²⁺] accumulates, E_cell drops linearly until reaching 0.00 V at equilibrium."
      },
      importantPoints: [
        "Effect of ionic concentration: Increasing reactant ion concentration increases E_cell; increasing product ion concentration decreases E_cell.",
        "For a single half-cell Mⁿ⁺ + ne⁻ → M(s): E(Mⁿ⁺/M) = E°(Mⁿ⁺/M) - (0.0591 / n) log₁₀(1 / [Mⁿ⁺]) = E° + (0.0591 / n) log₁₀[Mⁿ⁺].",
        "For hydrogen electrode: E(H⁺/H₂) = 0.00 - 0.0591 × pH (at 298 K and 1 bar H₂).",
        "At electrochemical equilibrium: E_cell = 0.00 V, Q = K_c  ⟹  log₁₀ K_c = (n E°_cell) / 0.0591.",
        "Gibbs free energy: Δ_r G° = -n F E°_cell. Electrical work W_max = -ΔG = n F E_cell."
      ]
    }
  ],

  formulae: [
    {
      title: "Standard Cell EMF (E°cell)",
      formula: "E°_{cell} = E°_{cathode} - E°_{anode} = E°_{right} - E°_{left}",
      meaning: "Difference between standard reduction potentials of cathode and anode.",
      symbols: "E°_cathode = SRP of reduction half-cell; E°_anode = SRP of oxidation half-cell.",
      unit: "Volt (V)",
      conditions: "Standard state: 1.0 M solute concentrations, 1.0 bar gas pressure, 298.15 K.",
      whenToUse: "Use to predict cell spontaneity and calculate standard open-circuit potential."
    },
    {
      title: "Nernst Equation at 298 K",
      formula: "E_{cell} = E°_{cell} - \\frac{0.0591}{n} \\log_{10} Q = E°_{cell} - \\frac{0.0591}{n} \\log_{10} \\left( \\frac{[\\text{Products}]^p}{[\\text{Reactants}]^r} \\right)",
      meaning: "Calculates the EMF of an electrochemical cell under non-standard conditions.",
      symbols: "n = moles of electrons in balanced cell reaction; Q = reaction quotient; F = 96487 C mol⁻¹.",
      unit: "Volt (V)",
      conditions: "T = 298 K (25°C). Activities of pure solids and pure liquids = 1.0.",
      whenToUse: "Use whenever ionic concentrations or gas pressures differ from 1.0 M / 1.0 bar."
    },
    {
      title: "Hydrogen Electrode Potential vs pH",
      formula: "E(H^+/H_2) = -0.0591 \\cdot \\text{pH} \\text{ at } 298\\text{ K, } P(H_2) = 1\\text{ bar}",
      meaning: "Electrode potential of hydrogen half-cell decreases linearly by 59.1 mV per unit increase in pH.",
      symbols: "pH = -log₁₀[H⁺].",
      unit: "Volt (V)",
      conditions: "T = 298 K, P(H₂) = 1 bar.",
      whenToUse: "Direct NEET shortcut for hydrogen electrode in acid/base solutions."
    },
    {
      title: "Standard Gibbs Energy & Cell Potential Relation",
      formula: "\\Delta_r G° = -n F E°_{cell}",
      meaning: "Maximum reversible electrical work obtainable from a galvanic cell equals the decrease in Gibbs free energy.",
      symbols: "Δ_r G° in J mol⁻¹ or kJ mol⁻¹; n = transferred electrons; F = 96487 C mol⁻¹; E°_cell in Volts.",
      unit: "J mol⁻¹ or kJ mol⁻¹",
      conditions: "Reversible galvanic cell operating at constant temperature and pressure.",
      whenToUse: "Use to calculate ΔrG° from E°cell or predict thermodynamic spontaneity (ΔG° < 0 ⟺ E° > 0)."
    },
    {
      title: "Equilibrium Constant (Kc) from E°cell",
      formula: "\\log_{10} K_c = \\frac{n E°_{cell}}{0.0591} \\text{ at } 298\\text{ K}",
      meaning: "Calculates the chemical equilibrium constant from standard cell potential.",
      symbols: "K_c = Equilibrium constant; n = number of transferred electrons; E°_cell = Standard cell EMF.",
      unit: "Dimensionless",
      conditions: "At equilibrium, cell potential E_cell = 0.00 V and Q = K_c.",
      whenToUse: "Use to find K_c without measuring equilibrium concentrations directly."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: DANIELL_CELL_DIAGRAM,
    caption: "Galvanic Daniell Cell Architecture: Anode (-), Cathode (+), Salt Bridge, and External Electron Flow."
  },

  neetImportantPoints: [
    "E° is an INTENSIVE property: Multiplying a half-reaction by a stoichiometric integer (e.g. 2Ag⁺ + 2e⁻ → 2Ag) does NOT change E° (+0.80 V). However, ΔG° is EXTENSIVE and doubles (ΔG° = -nFE°).",
    "Formula E°_cell = E°_cathode - E°_anode strictly requires STANDARD REDUCTION POTENTIALS for BOTH electrodes.",
    "If V_ext < 1.10 V: Galvanic cell (Zn → Cu electrons). If V_ext = 1.10 V: No current (equilibrium). If V_ext > 1.10 V: Electrolytic cell (Cu → Zn electrons).",
    "In concentration cells, E°_cell = 0.00 V. The EMF is driven solely by concentration ratio: E_cell = (0.0591/n) log(c_cathode / c_anode).",
    "Reaction Quotient Q exponents MUST match stoichiometric coefficients: for Mg(s) + 2Ag⁺(aq) → Mg²⁺(aq) + 2Ag(s), Q = [Mg²⁺] / [Ag⁺]² with n = 2."
  ],

  commonConfusions: [
    {
      commonConfusion: "Doubling E° when multiplying a half-cell reaction by 2.",
      correctFact: "Standard electrode potential E° is an intensive thermodynamic property and remains invariant regardless of stoichiometric multipliers. Only ΔG° scales with stoichiometry.",
      whyItMattersForNEET: "A very common calculation error in NEET MCQs on ΔG° and cell potential."
    },
    {
      commonConfusion: "Using oxidation potential directly in E°_cell = E°_cathode - E°_anode.",
      correctFact: "IUPAC convention mandates that all electrode potentials in the subtraction formula must be Standard Reduction Potentials (SRP). If given E°_ox = +0.76 V, convert to E°_red = -0.76 V first.",
      whyItMattersForNEET: "Sign reversal trap frequently placed as option B or C in NEET papers."
    },
    {
      commonConfusion: "Assuming the cell potential remains constant as the reaction proceeds.",
      correctFact: "As the cell discharges, reactant ions are consumed and product ions accumulate. Reaction quotient Q increases, causing E_cell to decrease steadily until reaching E_cell = 0.00 V at equilibrium (battery dies).",
      whyItMattersForNEET: "Tested in conceptual Assertion-Reason questions."
    }
  ],

  quickRevision: [
    "LOAN: Left, Oxidation, Anode, Negative polarity.",
    "E°_cell = E°_cathode - E°_anode (using Standard Reduction Potentials).",
    "Nernst Eq: E_cell = E°_cell - (0.0591 / n) log₁₀ Q at 298 K.",
    "Δ_r G° = -n F E°_cell  (Spontaneous when E°_cell > 0, ΔG° < 0).",
    "Equilibrium: log₁₀ K_c = (n E°_cell) / 0.0591 at 298 K.",
    "Hydrogen Electrode: E(H⁺/H₂) = -0.0591 × pH.",
    "Concentration cell: E° = 0.00 V, E_cell = (0.0591/n) log(c₂/c₁)."
  ],

  practiceQuestions: [
    {
      questionId: "prac-nernst-1",
      topicId: "chem-galvanic-cells-nernst",
      question: "Calculate the EMF of the cell: Mg(s) | Mg²⁺(0.001 M) || Cu²⁺(0.0001 M) | Cu(s) at 298 K. Given E°(Mg²⁺/Mg) = -2.37 V and E°(Cu²⁺/Cu) = +0.34 V.",
      options: [
        "2.68 V",
        "2.71 V",
        "2.74 V",
        "2.37 V"
      ],
      correctAnswerIndex: 0,
      explanation: "E°_cell = E°(Cu²⁺/Cu) - E°(Mg²⁺/Mg) = +0.34 - (-2.37) = +2.71 V.\nn = 2; Q = [Mg²⁺] / [Cu²⁺] = 10⁻³ / 10⁻⁴ = 10.\nE_cell = 2.71 - (0.0591 / 2) log₁₀(10) = 2.71 - 0.02955(1) = 2.68045 V ≈ 2.68 V.",
      difficulty: "Medium",
      conceptTested: "Nernst Equation Calculation for Cell EMF"
    },
    {
      questionId: "prac-nernst-2",
      topicId: "chem-galvanic-cells-nernst",
      question: "The standard electrode potential for the reaction: Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s) is E°_cell = 1.56 V at 298 K. What is the value of standard Gibbs free energy change (Δ_r G°)? (F = 96500 C mol⁻¹)",
      options: [
        "-301.08 kJ mol⁻¹",
        "-150.54 kJ mol⁻¹",
        "+301.08 kJ mol⁻¹",
        "-602.16 kJ mol⁻¹"
      ],
      correctAnswerIndex: 0,
      explanation: "n = 2 moles of electrons transferred.\nΔ_r G° = -n F E°_cell = - (2) × (96500 C mol⁻¹) × (1.56 V) = - 301,080 J mol⁻¹ = - 301.08 kJ mol⁻¹.",
      difficulty: "Easy",
      conceptTested: "Standard Gibbs Energy Calculation (ΔG° = -nFE°)"
    },
    {
      questionId: "prac-nernst-3",
      topicId: "chem-galvanic-cells-nernst",
      question: "Which of the following conditions represents an electrochemical cell at equilibrium?",
      options: [
        "E_cell = 0.00 V and Q = K_c",
        "E°_cell = 0.00 V and ΔG° = 0",
        "E_cell = E°_cell and Q = 1",
        "Δ_r G° = 0 and K_c = 1"
      ],
      correctAnswerIndex: 0,
      explanation: "At electrochemical equilibrium, the cell has stopped producing any current. The cell potential E_cell becomes exactly 0.00 V, and the reaction quotient Q equals the equilibrium constant K_c. (Note: Standard potential E°_cell is a constant and does not become zero).",
      difficulty: "Easy",
      conceptTested: "Electrochemical Equilibrium Conditions"
    }
  ],

  pyqs: ELECTROCHEMISTRY_VERIFIED_PYQS.filter(q => q.topicId === "chem-galvanic-cells-nernst")
};
