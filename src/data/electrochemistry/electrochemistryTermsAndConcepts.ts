import { ImportantTerm } from '../../types/neet';

export const ELECTROCHEMISTRY_IMPORTANT_TERMS: ImportantTerm[] = [
  // Galvanic Cells & Nernst Equation (Topic 1)
  {
    term: "Galvanic (Voltaic) Cell",
    symbol: "E_cell",
    definition: "An electrochemical device that converts the chemical energy of a spontaneous redox reaction (ΔG < 0) directly into electrical energy. The anode is the negative electrode (oxidation) and the cathode is the positive electrode (reduction).",
    neetNote: "Mnemonic LOAN: Left, Oxidation, Anode, Negative. Cathode is CPR: Cathode, Positive, Reduction."
  },
  {
    term: "Standard Electrode Potential",
    symbol: "E°",
    definition: "The potential difference developed between a pure metal electrode and a 1.0 M solution of its ions at 298 K and 1 bar pressure, measured relative to the Standard Hydrogen Electrode (SHE, defined as exactly 0.000 V). By IUPAC convention, electrode potential ALWAYS refers to standard REDUCTION potential.",
    unit: "Volt (V)",
    neetNote: "Higher E° = stronger oxidising agent (greater tendency to be reduced). Lower/more negative E° = stronger reducing agent."
  },
  {
    term: "Salt Bridge",
    definition: "A U-tube filled with an inert agar-agar gel saturated with strong electrolyte containing ions of nearly identical ionic mobilities (KCl, KNO₃, or NH₄NO₃). It completes the electrical circuit and maintains electrical neutrality in both half-cells without liquid junction potential.",
    neetNote: "KCl cannot be used in a salt bridge if the half-cell contains Ag⁺, Pb²⁺, or Hg₂²⁺ because insoluble chlorides (AgCl, PbCl₂) precipitate."
  },
  {
    term: "Electrochemical Series",
    definition: "An ordered arrangement of redox couples in decreasing order of their standard reduction potentials (E°). Topmost species (e.g. F₂/F⁻, E° = +2.87 V) is the strongest oxidising agent; lowest species (e.g. Li⁺/Li, E° = -3.05 V) is the strongest reducing agent in aqueous solution.",
    neetNote: "Any metal with lower E° (more negative) can displace a metal with higher E° (more positive) from its aqueous salt solution."
  },
  {
    term: "Nernst Equation",
    formula: "E_{cell} = E°_{cell} - \\frac{2.303 RT}{nF} \\log_{10} Q = E°_{cell} - \\frac{0.0591}{n} \\log_{10} Q \\text{ at } 298\\text{ K}",
    definition: "The fundamental thermodynamic equation relating the non-standard electrode potential or cell potential to the reaction quotient Q (activities/concentrations of products and reactants), temperature T, and number of transferred electrons n.",
    neetNote: "Pure solids and pure liquids have activity = 1.0. For gas electrodes, partial pressure in bar is used."
  },
  {
    term: "Cell EMF vs Cell Potential",
    symbol: "E_cell",
    definition: "Electromotive Force (EMF) is the maximum potential difference between the two electrodes of a galvanic cell when NO current is flowing (open circuit). Cell potential under current draw is lower due to internal resistance.",
    unit: "Volt (V)",
    neetNote: "E°_cell = E°_cathode - E°_anode = E°_right - E°_left (using standard reduction potentials for both!)."
  },
  {
    term: "Gibbs Free Energy & Cell Potential Relation",
    formula: "\\Delta_r G° = -n F E°_{cell}",
    definition: "Thermodynamic relation between the standard Gibbs free energy change of a cell reaction and its standard electromotive force. For spontaneity, E°_cell must be positive so that ΔG° is negative.",
    unit: "J mol⁻¹ or kJ mol⁻¹",
    neetNote: "F = Faraday constant = 96487 C mol⁻¹ ≈ 96500 C mol⁻¹. Note: ΔG is extensive (scales with stoichiometric multiplier), but E° is INTENSIVE (independent of stoichiometric multiplier)."
  },
  {
    term: "Equilibrium Constant from E°cell",
    formula: "\\log_{10} K_c = \\frac{n E°_{cell}}{0.0591} \\text{ at } 298\\text{ K}",
    definition: "At electrochemical equilibrium, the cell potential E_cell drops to 0.00 V and the reaction quotient Q becomes equal to the equilibrium constant K_c. Therefore, ΔG = 0 and 0 = E°_cell - (0.0591/n) log Kc.",
    neetNote: "Even a small positive E°cell (e.g. +0.59 V with n=2) yields an enormous equilibrium constant Kc = 10²⁰."
  },
  {
    term: "Concentration Cell",
    definition: "A galvanic cell in which both half-cells contain the same chemical electrodes and same electrolyte, but at DIFFERENT ionic concentrations (c₁ < c₂). Since both electrodes are identical, E°_cell = 0.00 V, and the EMF is driven solely by concentration gradient: E_cell = (0.0591/n) log(c₂/c₁).",
    neetNote: "Electrons flow from the dilute half-cell (anode, c₁) to the concentrated half-cell (cathode, c₂) until c₁ = c₂."
  },

  // Electrolytic Conductance & Kohlrausch's Law (Topic 2)
  {
    term: "Electrolytic Conductance",
    symbol: "G",
    definition: "The ease with which electric current flows through an electrolytic solution via migration of solvated cations and anions. Conductance is the reciprocal of electrolytic resistance: G = 1 / R.",
    unit: "Siemens (S) or ohm⁻¹ (Ω⁻¹ / mho)",
    neetNote: "Unlike metals (where conductance decreases with rising temperature due to lattice vibrations), electrolytic conductance INCREASES with temperature due to decreased viscosity and increased ionic mobility."
  },
  {
    term: "Conductivity (Specific Conductance)",
    symbol: "\\kappa \\text{ (kappa)}",
    definition: "The conductance of a solution of 1 m (or 1 cm) length with a cross-sectional area of 1 m² (or 1 cm²). Mathematically, κ = (1/R) · (l/A) = G · G*, where G* = l/A is the cell constant.",
    unit: "S m⁻¹ or S cm⁻¹ (1 S cm⁻¹ = 100 S m⁻¹)",
    neetNote: "Conductivity κ ALWAYS DECREASES upon dilution for both strong and weak electrolytes, because the number of current-carrying ions per unit volume decreases."
  },
  {
    term: "Cell Constant",
    symbol: "G*",
    definition: "The geometric ratio of the distance between the two parallel platinized platinum electrodes (l) to their cross-sectional plate area (A). G* = l / A = R · κ.",
    unit: "cm⁻¹ or m⁻¹ (1 cm⁻¹ = 100 m⁻¹)",
    neetNote: "Cell constant is fixed for a given conductivity cell and is determined experimentally using a standard 0.1 M or 0.01 M KCl solution of known conductivity."
  },
  {
    term: "Molar Conductivity",
    symbol: "\\Lambda_m",
    definition: "The conducting power of all the ions produced by dissolving one mole of an electrolyte in a given volume of solution. Mathematically, Λ_m = (1000 · κ) / M when κ is in S cm⁻¹ and M is molarity in mol L⁻¹.",
    unit: "S cm² mol⁻¹ (or S m² mol⁻¹; 1 S m² mol⁻¹ = 10⁴ S cm² mol⁻¹)",
    neetNote: "Molar conductivity Λ_m ALWAYS INCREASES upon dilution for both strong and weak electrolytes, because the increase in dilution volume V overcomes the decrease in κ."
  },
  {
    term: "Limiting Molar Conductivity",
    symbol: "\\Lambda°_m",
    definition: "The molar conductivity of an electrolytic solution when the concentration approaches zero (infinite dilution), where inter-ionic interactions become negligible and weak electrolytes achieve 100% dissociation.",
    unit: "S cm² mol⁻¹",
    neetNote: "For strong electrolytes, Λ°_m is obtained by linear extrapolation of Λ_m vs √c (Debye-Hückel-Onsager plot). For weak electrolytes, Λ°_m CANNOT be found by extrapolation; it MUST be determined via Kohlrausch's law."
  },
  {
    term: "Debye-Hückel-Onsager Equation",
    formula: "\\Lambda_m = \\Lambda°_m - A \\sqrt{c}",
    definition: "Empirical relationship for strong electrolytes showing linear variation of molar conductivity with square root of molar concentration (c). The constant A depends on the electrolyte type (1-1, 2-1, etc.), solvent, and temperature.",
    neetNote: "Slope of Λ_m vs √c plot is -A. All electrolytes of the same stoichiometry (e.g. NaCl, KCl, KNO₃ are 1-1 type) have the same value of A in a given solvent."
  },
  {
    term: "Kohlrausch's Law of Independent Migration of Ions",
    formula: "\\Lambda°_m(A_x B_y) = x \\lambda°(A^{y+}) + y \\lambda°(B^{x-})",
    definition: "At infinite dilution, when dissociation is complete and all inter-ionic effects disappear, each ion makes a definite, independent contribution to the total limiting molar conductivity of the electrolyte, irrespective of the nature of the co-ion with which it is associated.",
    neetNote: "Primary application in NEET: Calculating Λ°_m for weak acids (CH₃COOH) from strong electrolytes (HCl, NaCl, CH₃COONa): Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl)."
  },
  {
    term: "Degree of Dissociation from Molar Conductivity",
    formula: "\\alpha = \\frac{\\Lambda_m}{\\Lambda°_m}",
    definition: "The fraction of weak electrolyte molecules dissociated into ions at a given concentration c. For Ostwald's dilution law: K_a = \\frac{c \\alpha^2}{1 - \\alpha} = \\frac{c (\\Lambda_m / \\Lambda°_m)^2}{1 - (\\Lambda_m / \\Lambda°_m)}.",
    neetNote: "Valid only for weak electrolytes (weak acids, weak bases) in dilute aqueous solution."
  },

  // Electrolysis, Batteries & Corrosion (Topic 3)
  {
    term: "Electrolytic Cell",
    definition: "An electrochemical apparatus where an external source of direct electrical energy (DC battery) is supplied to drive a non-spontaneous chemical redox reaction (ΔG > 0). Anode is POSITIVE (connected to battery + terminal) and Cathode is NEGATIVE (connected to battery - terminal).",
    neetNote: "Notice sign reversal vs Galvanic cell: In electrolytic cells, Anode is (+), Cathode is (-). But in BOTH cells, Anode is ALWAYS oxidation and Cathode is ALWAYS reduction."
  },
  {
    term: "Faraday's First Law of Electrolysis",
    formula: "m = Z \\cdot Q = Z \\cdot I \\cdot t = \\frac{M \\cdot I \\cdot t}{n \\cdot F}",
    definition: "The chemical mass (m) of any substance deposited or liberated at any electrode during electrolysis is directly proportional to the total quantity of electric charge (Q = I · t) passed through the electrolyte.",
    unit: "m in grams, I in Amperes (A), t in seconds (s)",
    neetNote: "Z is the Electrochemical Equivalent (ECE) = Molar Mass / (n · 96500) g C⁻¹. 1 Faraday (96500 C) deposits 1 gram-equivalent of any substance."
  },
  {
    term: "Faraday's Second Law of Electrolysis",
    formula: "\\frac{m_1}{E_1} = \\frac{m_2}{E_2} = \\frac{m_3}{E_3} = \\frac{Q}{F}",
    definition: "When the same quantity of electric charge (Q) is passed through different electrolytic cells connected in series, the masses of substances liberated/deposited at respective electrodes are directly proportional to their chemical equivalent weights (E = M / n-factor).",
    neetNote: "If 1 F of charge passes through AgNO₃, CuSO₄, and AlCl₃ in series, moles deposited are: 1 mol Ag : 0.5 mol Cu : 0.333 mol Al (ratio 6 : 3 : 2)."
  },
  {
    term: "Overpotential (Overvoltage)",
    definition: "The extra potential (beyond the theoretical reversible equilibrium potential) required to discharge a gas at an electrode due to kinetic barriers (slow electron transfer rate or activation energy).",
    neetNote: "Although oxidation of H₂O to O₂ has a lower standard potential (E° = +1.23 V) than 2Cl⁻ to Cl₂ (E° = +1.36 V), oxidation of Cl⁻ occurs preferentially at the anode during electrolysis of concentrated NaCl (brine) because of the large overpotential of oxygen."
  },
  {
    term: "Primary Battery (Dry Cell / Mercury Cell)",
    definition: "A galvanic battery in which the redox reaction occurs only once and cannot be recharged by passing electric current, as the cell reactions are irreversible.",
    neetNote: "Leclanché dry cell gives ~1.5 V (voltage drops slowly during life). Mercury button cell gives a strictly constant potential of ~1.35 V throughout its life because overall reaction involves NO ions in solution whose concentration can change: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l)."
  },
  {
    term: "Secondary Battery (Lead Storage / Ni-Cd)",
    definition: "A rechargeable electrochemical accumulator where the discharged chemical products adhere to the electrodes and can be converted back to reactants by passing direct current in the opposite direction.",
    neetNote: "Lead storage battery uses 38% H₂SO₄ (density 1.30 g/mL). During discharge, PbSO₄(s) is formed at BOTH electrodes. During recharge, anode and cathode functions reverse."
  },
  {
    term: "Fuel Cell (H₂-O₂ Apollo Cell)",
    formula: "2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)",
    definition: "Galvanic cells designed to continuously convert the energy of combustion of gaseous fuels (such as H₂, CO, or CH₄) directly into electrical energy without passing through an intermediate thermal cycle.",
    neetNote: "Theoretical efficiency is ~70% (much higher than ~40% for thermal power plants). Uses porous carbon electrodes impregnated with catalyst (Pt/Pd) and aqueous KOH electrolyte at ~400 K."
  },
  {
    term: "Corrosion & Rusting of Iron",
    formula: "\\text{Rust} = Fe_2O_3 \\cdot xH_2O",
    definition: "The slow electrochemical destruction and degradation of metal surfaces by oxidation via atmospheric oxygen and moisture. At the anodic pit: Fe(s) → Fe²⁺ + 2e⁻ (E° = -0.44 V). At cathodic site: O₂ + 4H⁺ + 4e⁻ → 2H₂O (E° = +1.23 V).",
    neetNote: "Galvanization: Iron is coated with zinc (E°_Zn = -0.76 V). Zinc oxidizes preferentially (sacrificial protection) even if the coating is scratched because zinc is more electropositive than iron."
  }
];

export const ELECTROCHEMISTRY_COMPARISON_TABLES = [
  {
    title: "Table 1: Comprehensive Comparison — Galvanic Cell vs. Electrolytic Cell",
    headers: ["Characteristic / Parameter", "Galvanic (Voltaic) Cell (e.g. Daniell Cell)", "Electrolytic Cell (e.g. Downs Cell, Refining)"],
    rows: [
      ["Energy Conversion", "Converts Chemical Energy into Electrical Energy", "Converts Electrical Energy into Chemical Energy"],
      ["Thermodynamic Nature", "Spontaneous redox reaction (ΔG < 0, E_cell > 0)", "Non-spontaneous reaction forced by external source (ΔG > 0)"],
      ["Anode (Electrode where Oxidation occurs)", "Negative (-) polarity electrode (electrons released)", "Positive (+) polarity electrode (connected to battery + terminal)"],
      ["Cathode (Electrode where Reduction occurs)", "Positive (+) polarity electrode (electrons consumed)", "Negative (-) polarity electrode (connected to battery - terminal)"],
      ["Salt Bridge Requirement", "Required to maintain electrical neutrality between 2 half-cells", "Not required; both electrodes are immersed in the same electrolyte"],
      ["Electron Flow in External Circuit", "Anode (-) to Cathode (+) through wire/load", "From DC source (-) to Cathode, and Anode to DC source (+)"],
      ["EMF / Cell Potential", "E_cell = E°_cell - (0.0591/n) log Q (positive)", "Requires external voltage V_ext > E_cell to operate"]
    ]
  },
  {
    title: "Table 2: Metallic (Electronic) Conduction vs. Electrolytic (Ionic) Conduction",
    headers: ["Parameter", "Metallic (Electronic) Conduction", "Electrolytic (Ionic) Conduction"],
    rows: [
      ["Charge Carriers", "Delocalized valence electrons (sea of electrons)", "Free hydrated cations and anions"],
      ["Chemical Change", "No chemical decomposition or mass transfer occurs", "Chemical decomposition (oxidation/reduction) occurs at electrodes"],
      ["Matter Transfer", "No transfer of matter; only electrons drift", "Actual physical migration of matter (ions) toward electrodes"],
      ["Effect of Increasing Temperature", "Resistance increases, Conductance DECREASES (due to enhanced kernel/lattice thermal vibrations)", "Resistance decreases, Conductance INCREASES (due to decreased viscosity and increased ion dissociation & mobility)"],
      ["Conducting Power", "Extremely high conductance (copper, silver)", "Relatively lower conductance compared to metals"],
      ["Faraday's Laws Applicability", "Does not follow Faraday's laws of electrolysis", "Strictly obeys Faraday's laws of electrolysis"]
    ]
  },
  {
    title: "Table 3: Molar Conductivity Behavior: Strong Electrolyte vs. Weak Electrolyte",
    headers: ["Feature", "Strong Electrolytes (e.g. KCl, NaCl, HCl)", "Weak Electrolytes (e.g. CH₃COOH, NH₄OH)"],
    rows: [
      ["Initial Dissociation (α) at Moderate Concentration", "Completely dissociated (α ≈ 1.0) at all practical concentrations", "Partially dissociated (α ≪ 1.0, typically 1% to 5%)"],
      ["Reason for Increase in Λ_m on Dilution", "Due to weakening of inter-ionic attractions (ions move further apart, mobility increases)", "Due to sharp increase in degree of dissociation α (Ostwald's dilution law) yielding more ions"],
      ["Variation with √c (Plot Behavior)", "Linear decrease: Λ_m = Λ°_m - A√c (Debye-Hückel-Onsager)", "Non-linear; steep asymptotic surge towards infinity as c → 0"],
      ["Determination of Limiting Molar Conductivity Λ°_m", "Can be found directly by extrapolating linear plot to c = 0", "CANNOT be found by extrapolation; must use Kohlrausch's law"],
      ["Applicability of α = Λ_m / Λ°_m", "Not applicable for finding α (since α is always 1)", "Directly applicable to find degree of dissociation α and K_a"]
    ]
  },
  {
    title: "Table 4: Classification of Commercial Batteries (Primary, Secondary & Fuel Cells)",
    headers: ["Battery Type", "Anode & Cathode", "Electrolyte & Voltage", "Key NEET Feature / Cell Reaction"],
    rows: [
      [
        "Dry Cell (Leclanché Cell)",
        "Anode: Zinc container (Zn)\nCathode: Carbon (graphite) rod surrounded by powdered MnO₂ and carbon black",
        "Moist paste of NH₄Cl and ZnCl₂\nEMF ≈ 1.5 V",
        "Primary (non-rechargeable). Zn → Zn²⁺ + 2e⁻; MnO₂ reduced to MnO(OH). Zn²⁺ forms complex [Zn(NH₃)₄]²⁺ preventing gas pressure buildup."
      ],
      [
        "Mercury Button Cell",
        "Anode: Zinc-mercury amalgam (Zn(Hg))\nCathode: Paste of HgO and carbon",
        "Paste of KOH and ZnO\nEMF = 1.35 V (strictly constant)",
        "Primary cell for hearing aids/watches. Constant EMF because overall reaction has no ionic concentration variables: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l)."
      ],
      [
        "Lead Storage Battery",
        "Anode: Spongy Lead (Pb)\nCathode: Lead grid packed with PbO₂",
        "38% aqueous H₂SO₄ (d = 1.30 g/mL)\nEMF = 2.0 V per cell (12 V pack = 6 cells)",
        "Secondary (rechargeable). On discharge, BOTH electrodes form insoluble PbSO₄(s) and density of H₂SO₄ drops. Recharging reverses this."
      ],
      [
        "Nickel-Cadmium (Ni-Cd) Cell",
        "Anode: Cadmium (Cd)\nCathode: Nickel(IV) oxide hydroxide (NiO(OH))",
        "Aqueous KOH\nEMF ≈ 1.4 V",
        "Secondary rechargeable cell. Longer life than lead accumulator but higher manufacturing cost. Net: Cd + 2NiO(OH) + 2H₂O → Cd(OH)₂ + 2Ni(OH)₂."
      ],
      [
        "Hydrogen-Oxygen (H₂-O₂) Fuel Cell",
        "Anode: Porous carbon with Pt/Pd catalyst (H₂ gas)\nCathode: Porous carbon with Pt/Pd catalyst (O₂ gas)",
        "Concentrated aqueous KOH (at ~400 K)\nEMF ≈ 0.9 - 1.23 V (70% efficiency)",
        "Fuel continuously fed. Converts combustion energy directly to electricity. Byproduct is pure drinking water for astronauts in Apollo space missions."
      ]
    ]
  }
];

export const ELECTROCHEMISTRY_RAPID_REVISION_POINTS: string[] = [
  "In any electrochemical cell, ANODE is always the site of OXIDATION (Loss of electrons), and CATHODE is always the site of REDUCTION (Gain of electrons).",
  "In Galvanic cells, Anode is (-) and Cathode is (+). In Electrolytic cells, Anode is (+) and Cathode is (-). Remember: LOAN (Left, Oxidation, Anode, Negative).",
  "Standard cell potential E°_cell = E°_cathode - E°_anode = E°_right - E°_left (using standard REDUCTION potentials for both half-cells).",
  "Nernst Equation at 298 K: E_cell = E°_cell - (0.0591 / n) log₁₀ Q. Notice: If product ion concentration increases, E_cell DECREASES.",
  "For a spontaneous cell reaction: E°_cell > 0, ΔG° < 0, and equilibrium constant K_c > 1.",
  "Thermodynamic relationship: Δ_r G° = -n F E°_cell and log₁₀ K_c = (n E°_cell) / 0.0591 at 298 K.",
  "1 Faraday (F) = Charge of 1 mole of electrons = e · N_A = (1.6022 × 10⁻¹⁹ C) × (6.022 × 10²³ mol⁻¹) ≈ 96487 C mol⁻¹ ≈ 96500 C mol⁻¹.",
  "Specific conductivity (κ) = (1 / R) · (l / A) = G · G*. Units: S cm⁻¹ or S m⁻¹. Conductivity ALWAYS decreases on dilution for all electrolytes.",
  "Molar conductivity (Λ_m) = (1000 · κ) / M. Units: S cm² mol⁻¹. Molar conductivity ALWAYS increases on dilution for all electrolytes.",
  "Debye-Hückel-Onsager equation for strong electrolytes: Λ_m = Λ°_m - A√c. The y-intercept gives limiting molar conductivity Λ°_m.",
  "Kohlrausch's Law of Independent Migration: Limiting molar conductivity of an electrolyte is the sum of limiting molar conductivities of its individual constituent ions: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋.",
  "Degree of dissociation for weak electrolyte: α = Λ_m / Λ°_m. Dissociation constant: K_a = (c · α²) / (1 - α) = [c · (Λ_m / Λ°_m)²] / [1 - (Λ_m / Λ°_m)].",
  "Faraday's 1st Law: Mass deposited m = Z · I · t = (M / nF) · I · t. 1 Faraday of electricity deposits 1 gram-equivalent of any substance.",
  "Faraday's 2nd Law: When same charge Q passes through solutions in series, (m₁ / E₁) = (m₂ / E₂).",
  "Electrolysis of molten NaCl yields Na(l) at cathode and Cl₂(g) at anode. Electrolysis of aqueous NaCl (brine) yields H₂(g) at cathode and Cl₂(g) at anode (due to oxygen overpotential), leaving NaOH(aq) in solution.",
  "Mercury cell gives a strictly CONSTANT potential (~1.35 V) throughout its working life because the overall cell reaction does not involve any ions in solution whose concentration could change.",
  "In a lead-acid accumulator, during discharge, BOTH electrodes become coated with PbSO₄(s), H₂SO₄ is consumed, and the density of H₂SO₄ drops below 1.20 g/cm³.",
  "Galvanization: Iron is protected from rusting by a thin coating of zinc. Even if the zinc coating is scratched, zinc acts as a sacrificial anode because E°(Zn²⁺/Zn) = -0.76 V is more negative than E°(Fe²⁺/Fe) = -0.44 V."
];
