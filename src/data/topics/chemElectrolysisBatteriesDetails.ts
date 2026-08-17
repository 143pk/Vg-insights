import { DetailedTopicContent } from '../../types/neet';
import {
  ELECTROLYSIS_CELL_DIAGRAM,
  LEAD_STORAGE_BATTERY_DIAGRAM,
  H2_O2_FUEL_CELL_DIAGRAM,
  RUSTING_CORROSION_MECHANISM_DIAGRAM
} from '../electrochemistry/electrochemistryDiagrams';
import { ELECTROCHEMISTRY_VERIFIED_PYQS } from '../electrochemistry/electrochemistryPyqs';

export const chemElectrolysisBatteriesDetails: DetailedTopicContent = {
  topicId: "chem-electrolysis-batteries",
  topicName: "Electrolysis, Batteries & Corrosion",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Physical Chemistry (Class 12)",
  chapter: "Electrochemistry",

  whatIsThisTopic: "Electrolytic cells, Faraday's First and Second Laws of Electrolysis, quantitative calculations (Faraday constant, electrochemical equivalent Z), products of electrolysis for molten and aqueous solutions, overpotential phenomenon, commercial primary batteries (Dry cell, Mercury cell), secondary rechargeable batteries (Lead-acid storage battery, Ni-Cd cell), Hydrogen-Oxygen Fuel Cells, and the electrochemical mechanism of corrosion and rust prevention.",

  basicIdea: [
    "An Electrolytic Cell uses external electrical energy (DC power source) to drive a non-spontaneous chemical redox reaction (ΔG > 0). Anode is POSITIVE (+) and Cathode is NEGATIVE (-). Note that oxidation ALWAYS occurs at the anode and reduction ALWAYS occurs at the cathode.",
    "Faraday's 1st Law: Mass deposited m = Z · Q = Z · I · t = (M · I · t) / (n · F), where Z = M / (n · 96500) is the Electrochemical Equivalent in g C⁻¹.",
    "Faraday's 2nd Law: When the same quantity of electricity Q passes through different electrolytes in series, the masses deposited are directly proportional to their chemical equivalent weights: (m₁ / E₁) = (m₂ / E₂) = Q / F.",
    "Products of Electrolysis: Molten NaCl yields Na(l) at cathode and Cl₂(g) at anode. Aqueous NaCl (brine) yields H₂(g) at cathode and Cl₂(g) at anode (due to the large overpotential of oxygen liberation), leaving NaOH(aq) in solution.",
    "Primary Batteries (non-rechargeable): Dry Cell (~1.5 V) and Mercury Cell (strictly constant 1.35 V because its overall reaction involves no ionic species in solution whose concentration can change).",
    "Secondary Batteries (rechargeable): Lead Storage Battery (Anode = Pb, Cathode = PbO₂, Electrolyte = 38% H₂SO₄, EMF = 2.0 V/cell). During discharge, BOTH electrodes form white insoluble PbSO₄(s) and density of H₂SO₄ drops.",
    "Fuel Cells (H₂-O₂ Apollo Cell): Continuously converts combustion energy of gaseous fuels directly into electrical energy with ~70% thermodynamic efficiency. Byproduct is pure drinking water.",
    "Corrosion of Iron (Rusting): An electrochemical process. Anodic site: Fe(s) → Fe²⁺ + 2e⁻ (E° = -0.44 V). Cathodic site: O₂ + 4H⁺ + 4e⁻ → 2H₂O (E° = +1.23 V). Rust is hydrated ferric oxide Fe₂O₃ · xH₂O. Galvanization with Zn provides sacrificial cathodic protection because E°(Zn²⁺/Zn) = -0.76 V is more negative than E°(Fe²⁺/Fe) = -0.44 V."
  ],

  importantTerms: [
    {
      term: "Electrolytic Cell",
      definition: "An electrochemical apparatus in which direct electrical current from an external source forces a non-spontaneous chemical redox reaction to take place (ΔG > 0). Anode is (+) and Cathode is (-).",
      neetNote: "Contrast with Galvanic cell: In electrolytic cells, Anode is (+) and Cathode is (-). However, Anode = Oxidation and Cathode = Reduction in ALL cells."
    },
    {
      term: "Faraday's First Law of Electrolysis",
      formula: "m = Z \\cdot Q = Z \\cdot I \\cdot t = \\frac{M \\cdot I \\cdot t}{n \\cdot F}",
      definition: "The chemical mass (m) of any substance deposited or liberated at an electrode during electrolysis is directly proportional to the total quantity of electric charge (Q = I · t) passed.",
      unit: "m in grams (g), I in Amperes (A), t in seconds (s)",
      neetNote: "1 Faraday (F ≈ 96500 C) deposits 1 gram-equivalent of any chemical species."
    },
    {
      term: "Electrochemical Equivalent (Z)",
      symbol: "Z",
      unit: "g C⁻¹ or kg C⁻¹",
      formula: "Z = \\frac{\\text{Equivalent Weight}}{F} = \\frac{M}{n \\cdot 96500}",
      definition: "The mass of substance liberated or deposited at an electrode when a current of 1 Ampere passes for 1 second (1 Coulomb of electric charge).",
      neetNote: "Z is a characteristic physical constant for each element/ion."
    },
    {
      term: "Faraday's Second Law of Electrolysis",
      formula: "\\frac{m_1}{E_1} = \\frac{m_2}{E_2} = \\frac{m_3}{E_3} = \\frac{Q}{F}",
      definition: "When the same quantity of electricity is passed through multiple electrolytic cells connected in series, the masses of substances liberated are directly proportional to their equivalent weights (E = M / n).",
      neetNote: "Passing 1 F through AgNO₃, CuSO₄, and AlCl₃ in series deposits: 1 mol Ag (108 g) : 0.5 mol Cu (31.75 g) : 0.333 mol Al (9.0 g)."
    },
    {
      term: "Overpotential (Overvoltage)",
      definition: "The extra potential (beyond the thermodynamic reversible standard potential) required to discharge a gas at an electrode due to kinetic activation barriers.",
      neetNote: "Explains why Cl₂ gas (E° = +1.36 V) evolves at the anode during brine electrolysis instead of O₂ gas (E° = +1.23 V)."
    },
    {
      term: "Dry Cell (Leclanché Cell)",
      definition: "A commercial primary cell with a zinc cup anode, graphite rod cathode surrounded by MnO₂ and carbon black, and an electrolyte paste of NH₄Cl and ZnCl₂. EMF ≈ 1.5 V.",
      neetNote: "Zn²⁺ ions form the complex [Zn(NH₃)₄]²⁺ with liberated NH₃, preventing high internal gas pressure."
    },
    {
      term: "Mercury Button Cell",
      definition: "A miniature primary cell consisting of a Zn(Hg) amalgam anode, HgO cathode, and KOH-ZnO paste electrolyte. Delivers a constant potential of 1.35 V.",
      neetNote: "Potential is constant because the overall reaction involves no ions in solution: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l)."
    },
    {
      term: "Lead Storage Battery (Accumulator)",
      definition: "The most common secondary rechargeable battery. Anode is spongy Pb, cathode is a lead grid packed with PbO₂, and electrolyte is 38% H₂SO₄ (d = 1.30 g/mL). EMF = 2.0 V per cell.",
      neetNote: "On discharge, BOTH electrodes form insoluble PbSO₄(s), H₂SO₄ is consumed, and density drops. Recharging reverses these reactions."
    },
    {
      term: "Hydrogen-Oxygen Fuel Cell",
      formula: "2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)",
      definition: "A galvanic cell that continuously converts the combustion energy of hydrogen fuel and oxygen directly into electricity using porous carbon electrodes impregnated with Pt/Pd catalyst in hot aqueous KOH.",
      neetNote: "Operates at ~70% thermodynamic efficiency with zero harmful emissions (used in Apollo space program for power and crew drinking water)."
    },
    {
      term: "Corrosion & Galvanization",
      definition: "Electrochemical degradation of metals exposed to moisture and oxygen. Galvanization is the coating of iron with zinc (E° = -0.76 V vs E°_Fe = -0.44 V), providing sacrificial cathodic protection even if scratched.",
      neetNote: "Zinc acts as a sacrificial anode and oxidizes preferentially, protecting the iron substrate."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Quantitative Laws of Electrolysis (Faraday's Laws) & Products of Electrolysis",
      paragraphs: [
        "Electrolysis is the process of chemical decomposition of an electrolyte caused by the passage of direct electric current through its molten state or aqueous solution. Michael Faraday (1834) established the quantitative relationships governing electrolysis.",
        "Faraday's First Law: The mass (m) of a substance liberated at any electrode is directly proportional to the total electric charge passed (Q = I · t): m = Z · Q = Z · I · t. The constant Z is the Electrochemical Equivalent: Z = M / (n · F), where M is molar mass, n is the number of electrons in the half-reaction, and F ≈ 96500 C mol⁻¹ is the Faraday constant (charge of 1 mole of electrons = e · N_A).",
        "Faraday's Second Law: When the same current flows through multiple electrolytes connected in series for the same duration, the ratio of masses deposited equals the ratio of their chemical equivalent weights (E = M / n): (m₁ / E₁) = (m₂ / E₂) = (m₃ / E₃) = Q / F.",
        "Products of Electrolysis (NCERT Case Studies):",
        "1. Molten NaCl (Downs Cell): At Cathode: Na⁺ + e⁻ → Na(l). At Anode: 2Cl⁻ → Cl₂(g) + 2e⁻.",
        "2. Concentrated Aqueous NaCl (Brine):",
        "• At Cathode: Reduction of water occurs preferentially over Na⁺ (since E°_red of H₂O is -0.83 V vs -2.71 V for Na⁺): 2H₂O(l) + 2e⁻ → H₂(g) + 2OH⁻(aq).",
        "• At Anode: Thermodynamically, oxidation of water to O₂ (E° = +1.23 V) is easier than 2Cl⁻ to Cl₂ (E° = +1.36 V). However, due to the large kinetic OVERPOTENTIAL of oxygen gas on platinum/carbon, oxidation of chloride ions to Cl₂(g) takes place preferentially!",
        "• Solution: Na⁺ and OH⁻ remain, producing an aqueous NaOH solution.",
        "3. Aqueous CuSO₄ with Inert Pt Electrodes vs Active Cu Electrodes:",
        "• With Pt (Inert): Cathode deposits Cu(s); Anode evolves O₂(g) from water oxidation; solution becomes acidic (H₂SO₄).",
        "• With Cu (Active): Cathode deposits pure Cu(s); Anode undergoes electrolytic dissolution of impure copper (Cu(s) → Cu²⁺ + 2e⁻). Used in industrial electrolytic refining of copper."
      ],
      visual: {
        type: 'svg',
        svgContent: ELECTROLYSIS_CELL_DIAGRAM,
        caption: "Industrial Electrolysis of Aqueous Brine (NaCl): Cathode evolves H₂(g), Anode evolves Cl₂(g) via Overpotential, producing NaOH(aq).",
        guide: "Observe the polarity: In electrolytic cells, Anode is POSITIVE (+) connected to the DC power source positive terminal, and Cathode is NEGATIVE (-). Chloride ions migrate to the anode and water reduces at the cathode."
      },
      importantPoints: [
        "1 Faraday (96500 C) deposits: 1 mol Ag⁺ (108 g), 0.5 mol Cu²⁺ (31.75 g), 0.333 mol Al³⁺ (9 g).",
        "Electricity to reduce 1 mol MnO₄⁻ to Mn²⁺: n = 5  ⟹  Q = 5 F = 482,500 C.",
        "Electricity to reduce 1 mol Cr₂O₇²⁻ to 2Cr³⁺: n = 6  ⟹  Q = 6 F = 579,000 C.",
        "Overpotential is a kinetic phenomenon (not thermodynamic) that allows chlorine to discharge before oxygen at the anode."
      ]
    },
    {
      heading: "2. Commercial Batteries: Primary Cells, Secondary Cells & Fuel Cells",
      paragraphs: [
        "A battery is an arrangement of one or more galvanic cells connected in series that serves as a portable DC voltage source. Commercial batteries must be compact, lightweight, maintain a steady voltage, and resist self-discharge.",
        "1. Primary Batteries (Non-Rechargeable): The chemical reaction occurs only once; once reactants are exhausted, the battery is dead.",
        "• Leclanché Dry Cell (~1.5 V): Anode: Zinc container (Zn → Zn²⁺ + 2e⁻). Cathode: Carbon graphite rod surrounded by powdered MnO₂ and carbon black. Electrolyte: Moist paste of NH₄Cl and ZnCl₂. At cathode, MnO₂ is reduced: MnO₂ + NH₄⁺ + e⁻ → MnO(OH) + NH₃. Liberated NH₃ gas forms the complex [Zn(NH₃)₄]²⁺ with Zn²⁺, preventing gas pressure buildup.",
        "• Mercury Button Cell (1.35 V): Anode: Zinc-mercury amalgam (Zn(Hg)). Cathode: Paste of HgO and carbon. Electrolyte: Paste of KOH and ZnO. Overall reaction: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l). Because no ions in solution change concentration, its cell potential remains strictly constant at 1.35 V throughout its operating life.",
        "2. Secondary Batteries (Rechargeable / Accumulators): Can be recharged repeatedly by passing direct current in the opposite direction.",
        "• Lead Storage Battery (2.0 V/cell, 12 V battery = 6 cells in series):",
        "  - Anode: Spongy lead (Pb). Cathode: Lead grid packed with lead dioxide (PbO₂). Electrolyte: 38% aqueous H₂SO₄ (density = 1.30 g/mL).",
        "  - Discharging Anode: Pb(s) + SO₄²⁻(aq) → PbSO₄(s) + 2e⁻.",
        "  - Discharging Cathode: PbO₂(s) + SO₄²⁻(aq) + 4H⁺(aq) + 2e⁻ → PbSO₄(s) + 2H₂O(l).",
        "  - Overall Discharge: Pb(s) + PbO₂(s) + 2H₂SO₄(aq) → 2PbSO₄(s) + 2H₂O(l). Both electrodes get coated with white insoluble PbSO₄(s), H₂SO₄ is consumed, and density falls below 1.20 g/mL.",
        "  - Recharging: The reverse reactions occur when connected to an external DC charging source.",
        "• Nickel-Cadmium (Ni-Cd) Cell (~1.4 V): Overall: Cd(s) + 2NiO(OH)(s) + 2H₂O(l) → Cd(OH)₂(s) + 2Ni(OH)₂(s). Longer cycle life than lead storage, but more expensive.",
        "3. Fuel Cells (H₂-O₂ Fuel Cell): Converts the chemical energy of combustion of gaseous fuels (H₂ + 1/2 O₂ → H₂O, ΔH = -285.8 kJ/mol) directly into electricity without intermediate thermal-mechanical losses. Operates at ~70% thermodynamic efficiency (vs ~40% for thermal turbines). Used in the Apollo space missions to provide onboard electric power and pure drinking water for astronauts."
      ],
      visual: {
        type: 'svg',
        svgContent: LEAD_STORAGE_BATTERY_DIAGRAM,
        caption: "Lead-Acid Storage Battery (Secondary Accumulator) showing reversible electrode chemistry during Discharge and Recharge cycles.",
        guide: "Observe that during discharge, BOTH spongy Pb (anode) and PbO₂ (cathode) are converted into PbSO₄(s), consuming H₂SO₄. Recharging regenerates Pb at the negative plate and PbO₂ at the positive plate."
      },
      importantPoints: [
        "Primary cells: Dry cell (1.5 V, variable) vs Mercury cell (1.35 V, strictly constant).",
        "Why mercury cell voltage is constant: Overall reaction Zn(Hg) + HgO(s) → ZnO(s) + Hg(l) contains no aqueous ionic terms whose concentration can change.",
        "Lead storage battery density indicator: Discharged when H₂SO₄ density drops < 1.20 g/mL; fully charged at 1.30 g/mL.",
        "H₂-O₂ Fuel Cell efficiency: η = (ΔG° / ΔH°) × 100 ≈ 70%."
      ]
    },
    {
      heading: "3. Electrochemical Theory of Corrosion & Prevention (Rusting of Iron)",
      paragraphs: [
        "Corrosion is the slow, spontaneous degradation and destruction of metal surfaces via electrochemical oxidation by atmospheric gases (O₂, CO₂, SO₂) and moisture.",
        "Electrochemical Mechanism of Rusting of Iron:",
        "At a particular spot on the iron surface (e.g. stress point or impurity), iron undergoes oxidation, acting as an ANODIC SITE: 2Fe(s) → 2Fe²⁺(aq) + 4e⁻  (E° = -0.44 V).",
        "The electrons released travel through the conducting metal to another spot on the surface where atmospheric oxygen in the presence of H⁺ ions (derived from carbonic acid H₂CO₃ = H₂O + CO₂) is reduced, acting as a CATHODIC SITE: O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)  (E° = +1.23 V).",
        "Overall Reaction: 2Fe(s) + O₂(g) + 4H⁺(aq) → 2Fe²⁺(aq) + 2H₂O(l)  (E°_cell = +1.67 V).",
        "The Fe²⁺ ions are further oxidized by atmospheric oxygen to ferric state and precipitate as hydrated ferric oxide (Rust): 4Fe²⁺(aq) + O₂(g) + 4H₂O(l) + 2xH₂O → 2Fe₂O₃ · xH₂O(s) + 8H⁺(aq).",
        "Methods of Corrosion Prevention:",
        "1. Barrier Protection: Coating iron with paint, grease, oil, or non-corroding electroplated metals (Sn, Ni, Cr).",
        "2. Sacrificial Protection (Galvanization): Coating iron with a thin layer of zinc. Zinc has a more negative reduction potential (E° = -0.76 V) than iron (E° = -0.44 V). Therefore, zinc oxidizes preferentially (Zn → Zn²⁺ + 2e⁻), acting as a sacrificial anode and supplying electrons to iron even if the surface coating is scratched.",
        "3. Cathodic (Electrical) Protection: Connecting underground iron pipes and ship hulls to sacrificial blocks of more electropositive metals (Mg or Zn) via insulated wires. The sacrificial block corrodes and is periodically replaced."
      ],
      visual: {
        type: 'svg',
        svgContent: RUSTING_CORROSION_MECHANISM_DIAGRAM,
        caption: "Electrochemical Theory of Iron Rusting: Anodic site (Fe oxidation), Cathodic site (O₂ reduction in H⁺ film), electron transport through iron, and formation of Fe₂O₃ · xH₂O rust.",
        guide: "Trace the miniature galvanic cell formed on the iron surface: Fe acts as Anode, O₂ reduction site in water droplet acts as Cathode, and water containing dissolved CO₂ acts as electrolyte."
      },
      importantPoints: [
        "Rust chemical formula: Fe₂O₃ · xH₂O (Hydrated Ferric Oxide).",
        "Acidic environment accelerates rusting: Dissolved CO₂ forms H₂CO₃, providing H⁺ for cathodic O₂ reduction.",
        "Saline water (sea water) drastically accelerates rusting because NaCl ions increase the electrical conductivity of the aqueous electrolyte film.",
        "Galvanization: Zn protects Fe even after scratching because E°(Zn²⁺/Zn) = -0.76 V < E°(Fe²⁺/Fe) = -0.44 V. In contrast, Tin coating (Sn, E° = -0.14 V) protects only as long as it is intact; once scratched, iron rusts FASTER because iron oxidizes before tin!"
      ]
    }
  ],

  formulae: [
    {
      title: "Faraday's First Law of Electrolysis",
      formula: "m = Z \\cdot Q = Z \\cdot I \\cdot t = \\left( \\frac{M}{n F} \\right) \\cdot I \\cdot t",
      meaning: "Mass of metal deposited or gas liberated is proportional to current and time.",
      symbols: "m in grams; Z = electrochemical equivalent (g C⁻¹); I in Amperes; t in seconds; M in g mol⁻¹; n = electrons transferred; F = 96500 C mol⁻¹.",
      unit: "Mass in grams (g)",
      conditions: "Time must strictly be in seconds; 100% current efficiency.",
      whenToUse: "Use for quantitative electrolysis calculations."
    },
    {
      title: "Faraday's Second Law of Electrolysis",
      formula: "\\frac{m_1}{E_1} = \\frac{m_2}{E_2} = \\frac{m_3}{E_3} = \\frac{Q}{F} \\quad \\text{where } E = \\frac{M}{n}",
      meaning: "Equal charge passed through solutions in series deposits chemically equivalent amounts.",
      symbols: "m₁, m₂ = masses deposited (g); E₁, E₂ = equivalent weights (g eq⁻¹).",
      unit: "Dimensionless ratios",
      conditions: "Electrolytic cells connected in electrical series.",
      whenToUse: "Use to calculate deposited mass of metal B when mass of metal A in series is known."
    },
    {
      title: "Fuel Cell Thermodynamic Efficiency",
      formula: "\\eta = \\frac{\\Delta_r G°}{\\Delta_r H°} \\times 100",
      meaning: "Fraction of combustion enthalpy converted directly into electrical free energy.",
      symbols: "η = efficiency percentage; ΔG° = Gibbs free energy change; ΔH° = combustion enthalpy change.",
      unit: "Percentage (%)",
      conditions: "Operating at standard temperature and pressure (typically ~70% theoretical).",
      whenToUse: "Use to evaluate fuel cell thermodynamic performance vs thermal engines."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: H2_O2_FUEL_CELL_DIAGRAM,
    caption: "Hydrogen-Oxygen Fuel Cell: Clean Electrochemical Energy Conversion (2H₂ + O₂ → 2H₂O) with 70% Efficiency."
  },

  neetImportantPoints: [
    "In electrolytic cells, Anode is POSITIVE (+) and Cathode is NEGATIVE (-). In galvanic cells, Anode is NEGATIVE (-) and Cathode is POSITIVE (+). In BOTH, Anode = Oxidation, Cathode = Reduction.",
    "Electrolysis of brine (aqueous NaCl) produces Cl₂(g) at anode due to the OVERPOTENTIAL of oxygen, H₂(g) at cathode, and leaves NaOH(aq) in solution.",
    "Mercury button cell delivers a strictly constant 1.35 V because its overall cell reaction involves no ionic species in solution whose concentration can change.",
    "In a lead storage battery during discharge, BOTH electrodes form insoluble PbSO₄(s), H₂SO₄ is consumed, and density drops < 1.20 g/mL.",
    "Galvanization protects iron even after scratching because zinc (E° = -0.76 V) is more electropositive than iron (E° = -0.44 V) and oxidizes sacrificially.",
    "Tin plating (E° = -0.14 V) on iron accelerates corrosion once the coating is breached because iron is more reactive than tin."
  ],

  commonConfusions: [
    {
      commonConfusion: "Using time in minutes or hours in Faraday's first law formula.",
      correctFact: "Current I is in Amperes (Coulombs per second). Time t MUST be in SECONDS. Always multiply minutes by 60 or hours by 3600.",
      whyItMattersForNEET: "The #1 student calculation blunder in NEET electrolysis numericals."
    },
    {
      commonConfusion: "Believing that O₂ gas is evolved during the electrolysis of concentrated brine.",
      correctFact: "Although oxidation of water to O₂ has a lower standard potential (E° = +1.23 V) than Cl⁻ oxidation (E° = +1.36 V), water oxidation suffers from a large kinetic OVERPOTENTIAL on platinum/graphite. Therefore, Cl₂ gas evolves at the anode.",
      whyItMattersForNEET: "A classic NCERT conceptual question tested frequently in NEET."
    },
    {
      commonConfusion: "Assuming Pb is formed at the anode and PbO₂ at the cathode during lead battery discharge.",
      correctFact: "During discharge, BOTH electrodes react with H₂SO₄ to form insoluble white lead sulfate: PbSO₄(s). Pb and PbO₂ are regenerated only during the RECHARGING process.",
      whyItMattersForNEET: "Tested in NEET 2023 and NEET 2020."
    }
  ],

  quickRevision: [
    "m = (M · I · t) / (n · 96500).",
    "Series electrolysis: m₁/E₁ = m₂/E₂ = Q/F.",
    "Molten NaCl: Na at cathode, Cl₂ at anode.",
    "Aqueous NaCl: H₂ at cathode, Cl₂ at anode (overpotential), NaOH in solution.",
    "Dry cell: 1.5 V, Zn anode, carbon cathode.",
    "Mercury cell: 1.35 V (strictly constant potential).",
    "Lead accumulator: 2.0 V/cell, Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O.",
    "H₂-O₂ Fuel cell: 2H₂ + O₂ → 2H₂O (70% efficiency).",
    "Rusting: Fe₂O₃ · xH₂O, accelerated by acids and salts; prevented by Zn galvanization."
  ],

  practiceQuestions: [
    {
      questionId: "prac-elec-1",
      topicId: "chem-electrolysis-batteries",
      question: "A steady current of 2.0 A is passed through an aqueous solution of CuSO₄ for 30 minutes. What mass of copper will be deposited at the cathode? (Molar mass of Cu = 63.5 g mol⁻¹, F = 96500 C mol⁻¹)",
      options: [
        "1.185 g",
        "2.370 g",
        "0.592 g",
        "4.740 g"
      ],
      correctAnswerIndex: 0,
      explanation: "Cathode reaction: Cu²⁺ + 2e⁻ → Cu (n = 2).\nTime t = 30 min = 30 × 60 = 1800 s.\nTotal charge Q = I × t = 2.0 A × 1800 s = 3600 C.\nMass deposited m = (M × I × t) / (n × F) = (63.5 × 3600) / (2 × 96500) = 228,600 / 193,000 = 1.1844 g ≈ 1.185 g.",
      difficulty: "Easy",
      conceptTested: "Faraday's First Law Calculation"
    },
    {
      questionId: "prac-elec-2",
      topicId: "chem-electrolysis-batteries",
      question: "Why does a mercury button cell provide a constant electrical voltage throughout its working lifetime?",
      options: [
        "The overall cell reaction does not involve any ions in solution whose concentration can change.",
        "It uses a solid electrolyte that does not decompose.",
        "It operates at a high internal temperature where resistance is zero.",
        "It undergoes continuous self-recharging."
      ],
      correctAnswerIndex: 0,
      explanation: "The overall cell reaction in a mercury cell is: Zn(Hg) + HgO(s) → ZnO(s) + Hg(l). Since all reactants and products are pure solids, liquids, or amalgams with constant activities (no ionic concentrations in solution that vary over time), the reaction quotient Q remains constant, giving a steady EMF of 1.35 V.",
      difficulty: "Easy",
      conceptTested: "Mercury Cell Constant Potential Principle"
    },
    {
      questionId: "prac-elec-3",
      topicId: "chem-electrolysis-batteries",
      question: "What happens to the density of the electrolyte (H₂SO₄) during the discharging of a lead storage battery?",
      options: [
        "Density decreases because H₂SO₄ is consumed and H₂O is produced.",
        "Density increases because SO₄²⁻ ions are released.",
        "Density remains constant because PbSO₄ dissolves.",
        "Density first increases then decreases."
      ],
      correctAnswerIndex: 0,
      explanation: "During discharge, the overall cell reaction is: Pb(s) + PbO₂(s) + 2H₂SO₄(aq) → 2PbSO₄(s) + 2H₂O(l). Sulfuric acid is consumed and water is produced as a byproduct, causing the density of the electrolyte solution to decrease from ~1.30 g/mL to below 1.20 g/mL.",
      difficulty: "Easy",
      conceptTested: "Lead Storage Battery Electrolyte Density Changes"
    }
  ],

  pyqs: ELECTROCHEMISTRY_VERIFIED_PYQS.filter(q => q.topicId === "chem-electrolysis-batteries")
};
