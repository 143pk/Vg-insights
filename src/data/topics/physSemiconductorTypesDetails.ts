import { DetailedTopicContent } from '../../types/neet';
import { SEMI_SVGS } from '../semiconductors/semiconductorDiagrams';

export const physSemiconductorTypesDetails: DetailedTopicContent = {
  topicId: "phys-semiconductor-types",
  topicName: "Energy Bands & Semiconductor Types (Intrinsic & Extrinsic)",
  subject: "Physics",
  class: "Class 12",
  classification: "Electronic Devices & Experimental Skills",
  chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",

  whatIsThisTopic: "First-principles masterclass on Energy Bands in Solids, classification of Conductors, Insulators & Semiconductors, Intrinsic Semiconductors, Hole Physics, Doping mechanisms, and n-type & p-type semiconductors.",

  basicIdea: [
    "In isolated single atoms, electrons occupy sharp, discrete Bohr energy levels. When N atoms assemble into a crystal lattice (spacing d ≈ 2–3 Å), Pauli's exclusion principle splits each energy level into N closely spaced sub-levels, forming continuous Energy Bands.",
    "The Valence Band (VB) is formed by valence electrons and is completely filled at 0 K in semiconductors. The Conduction Band (CB) is the band above VB where free electrons conduct electrical current.",
    "The Forbidden Energy Gap (E_g = E_c − E_v) determines material conductivity: Conductors have E_g ≈ 0 eV (overlapping bands), Insulators have E_g > 3 eV (e.g. Diamond E_g = 6 eV), and Semiconductors have small E_g < 3 eV (Silicon = 1.1 eV, Germanium = 0.72 eV).",
    "In Intrinsic Semiconductors (pure Si/Ge), thermal energy breaks covalent bonds at T > 0 K, creating equal concentrations of free electrons and holes: n_e = n_h = n_i. Total current is I = I_e + I_h.",
    "A Hole is a vacant electron site in a covalent bond that behaves dynamically as an effective positive charge carrier (+e). Electron mobility is always greater than hole mobility (µ_e > µ_h).",
    "Doping with pentavalent impurities (P, As, Sb) adds extra free electrons, creating an n-type semiconductor (majority: electrons, minority: holes, donor level E_d just below CB).",
    "Doping with trivalent impurities (B, Al, Ga, In) creates electron vacancies, creating a p-type semiconductor (majority: holes, minority: electrons, acceptor level E_a just above VB).",
    "Universal Mass Action Law: At thermal equilibrium, n_e · n_h = n_i²(T). Both n-type and p-type crystals remain strictly ELECTRICALLY NEUTRAL overall."
  ],

  importantTerms: [
    {
      term: "Valence Band (VB)",
      definition: "The highest occupied electronic energy band formed by valence electrons of atoms in a crystal lattice. At absolute zero (0 K), it is completely filled in semiconductors and insulators.",
      neetNote: "Electrons in a completely filled Valence Band cannot move into unoccupied states to conduct electric current."
    },
    {
      term: "Conduction Band (CB)",
      definition: "The lowest empty or partially occupied energy band above the valence band. Electrons present in this band are free to accelerate under an applied electric field.",
      neetNote: "Electrical conductivity of a solid is directly proportional to the number of free electrons in the Conduction Band."
    },
    {
      term: "Forbidden Energy Gap (E_g)",
      definition: "The energy difference between the top of the valence band (E_v) and the bottom of the conduction band (E_c): E_g = E_c − E_v. No stable electronic states can exist in this forbidden zone.",
      neetNote: "Si (1.1 eV) and Ge (0.72 eV) are semiconductors; Diamond (6 eV) is an insulator; Metals have E_g = 0 eV."
    },
    {
      term: "Hole (h⁺)",
      definition: "A vacant electron state in a covalent bond within the valence band behaving dynamically as a positive charge carrier (+1.6 × 10⁻¹⁹ C) with effective mass m_h*.",
      neetNote: "Hole is NOT a proton. It moves by valence electrons sequentially hopping between adjacent covalent bonds."
    },
    {
      term: "Intrinsic Semiconductor",
      definition: "A chemically pure semiconductor crystal (pure Si or Ge) with no intentional impurity atoms. Thermal excitation creates equal carrier concentrations: n_e = n_h = n_i.",
      neetNote: "At 0 K, pure Si behaves as a perfect insulator. Total current at room temp is I = I_e + I_h."
    },
    {
      term: "Donor Impurity (Pentavalent)",
      definition: "Group 15 impurity atoms (P, As, Sb) added to Si/Ge that provide an extra conduction electron, creating an n-type semiconductor. Forms a donor energy level E_d ~0.01–0.05 eV below CB.",
      neetNote: "Donor atom becomes an immobile positive ion (N_d⁺). The n-type crystal remains electrically neutral!"
    },
    {
      term: "Acceptor Impurity (Trivalent)",
      definition: "Group 13 impurity atoms (B, Al, Ga, In) added to Si/Ge that accept a valence electron, creating a hole in a p-type semiconductor. Forms an acceptor energy level E_a ~0.01–0.05 eV above VB.",
      neetNote: "Acceptor atom becomes an immobile negative ion (N_a⁻). The p-type crystal remains electrically neutral!"
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Origin of Energy Bands & Solid Classification",
      paragraphs: [
        "In an isolated single atom, electrons revolve in quantized, sharply defined energy levels described by Bohr's model. However, inside a solid crystal where ~10²⁸ atoms/m³ sit separated by tiny interatomic distances (2–3 Å), the valence electron wavefunctions overlap strongly. By Pauli's Exclusion Principle, each discrete atomic level splits into a band of closely spaced sub-levels.",
        "The highest occupied band is the Valence Band (VB). The next allowed higher band is the Conduction Band (CB). Between them lies the Forbidden Energy Gap (E_g). Solids are classified into three distinct categories based on E_g:",
        "1. Conductors (Metals): E_g ≈ 0 eV. VB and CB overlap (e.g., Zinc, Magnesium) OR the CB is partially filled (e.g., Sodium, Copper). Free electron density is huge (~10²⁸ m⁻³) even at 0 K. Resistance increases with temperature (α > 0).",
        "2. Insulators: E_g > 3 eV (e.g., Diamond E_g ≈ 6 eV, Glass, Quartz). At ordinary temperatures, thermal energy (kT ≈ 0.026 eV at 300 K) cannot excite electrons across 6 eV. Conduction band remains completely empty.",
        "3. Semiconductors: Small band gap E_g < 3 eV (Silicon E_g = 1.1 eV; Germanium E_g = 0.72 eV; GaAs E_g = 1.42 eV). At 0 K, they behave as perfect insulators. At room temperature, thermal vibrations excite a small fraction of electrons across E_g into the CB, leaving holes in the VB. Resistance decreases exponentially with temperature (α < 0)."
      ],
      visual: {
        type: 'svg',
        svgContent: SEMI_SVGS.bandComparison,
        caption: "Figure 14.1: Energy Band Structure Comparison: Conductor (Overlapping Bands), Insulator (Large E_g > 3 eV), and Semiconductor (Moderate E_g < 3 eV).",
        guide: "Observe the gap: Conductors have zero bandgap with overlapping bands; Insulators have a wide forbidden gap (> 3 eV); Semiconductors have a small forbidden gap (1.1 eV for Si, 0.72 eV for Ge) allowing thermal transition."
      },
      importantPoints: [
        "Silicon E_g = 1.1 eV at 300 K (1.21 eV at 0 K); Germanium E_g = 0.72 eV at 300 K (0.78 eV at 0 K).",
        "Temperature coefficient of resistance α is positive for conductors and negative for semiconductors.",
        "Diamond has 4 valence electrons like Si/Ge, but its huge bandgap (6 eV) makes it a strict insulator."
      ]
    },
    {
      heading: "2. Intrinsic Semiconductors & Physics of Hole Conduction",
      paragraphs: [
        "An intrinsic semiconductor is a pure crystal of tetravalent Silicon or Germanium without any dopants. Each atom shares its 4 valence electrons with 4 neighbouring atoms, forming tetrahedral covalent bonds.",
        "At absolute zero (T = 0 K), all covalent bonds are intact and no free electrons exist (conduction band is completely empty). At room temperature (T = 300 K), thermal energy breaks a small fraction of covalent bonds (~1 in 10⁹ bonds in Si). The liberated electron jumps into the Conduction Band, leaving behind a vacancy in the covalent bond called a HOLE in the Valence Band.",
        "A hole is an absence of an electron in a covalent bond that behaves as an effective positive charge (+e = +1.6 × 10⁻¹⁹ C). When an electric field E is applied, free conduction electrons move opposite to E, while valence electrons jump from neighbouring bonds into vacant holes, causing the hole to drift in the direction of E.",
        "In intrinsic semiconductors, electrons and holes are always created in pairs, so their number densities are strictly equal: n_e = n_h = n_i. Total electric current is the sum of electron current and hole current: I = I_e + I_h = e A (n_e v_e + n_h v_h) = e A n_i (µ_e + µ_h) E.",
        "Electron mobility µ_e is always greater than hole mobility µ_h (µ_e > µ_h) because conduction electrons travel in free inter-atomic space, whereas holes move through sequential bound-to-bound transitions."
      ],
      visual: {
        type: 'svg',
        svgContent: SEMI_SVGS.intrinsicLattice,
        caption: "Figure 14.2: Pure Silicon Crystal Lattice showing Thermal Covalent Bond Rupture and Electron-Hole Pair Generation (n_e = n_h = n_i).",
        guide: "Trace the thermal release of an electron into the conduction state and the simultaneous creation of a positive hole vacancy in the covalent lattice."
      },
      importantPoints: [
        "Intrinsic carrier concentration n_i increases exponentially with temperature: n_i(T) ∝ T^(3/2) exp(−E_g / 2kT).",
        "Total current in a semiconductor is I = I_e + I_h (both carrier types contribute additively to conventional current).",
        "A hole is not a proton; it is a collective valence electronic vacancy behaving dynamically as a positive charge."
      ]
    },
    {
      heading: "3. Extrinsic Semiconductors: Doping Principles, n-Type & p-Type",
      paragraphs: [
        "The electrical conductivity of pure intrinsic semiconductor at room temperature is extremely low (~10⁻⁴ S/m for Si). To make it useful for practical electronics, a small controlled amount of suitable impurity atoms (~1 to 100 ppm) is added. This deliberate process is called DOPING.",
        "1. n-Type Semiconductor (Pentavalent Doping): Pure Si or Ge is doped with Group 15 pentavalent atoms (Phosphorus P, Arsenic As, Antimony Sb). Four valence electrons form covalent bonds with adjacent Si atoms, while the 5th electron is loosely bound to the donor nucleus. The ionization energy to free this 5th electron into the conduction band is minuscule: E_d ≈ 0.01 eV for Ge and 0.05 eV for Si. The donor energy level E_d sits just below the CB. Electrons become Majority Carriers (n_e ≈ N_d) and holes become Minority Carriers (n_h = n_i² / N_d).",
        "2. p-Type Semiconductor (Trivalent Doping): Pure Si or Ge is doped with Group 13 trivalent atoms (Boron B, Aluminium Al, Gallium Ga, Indium In). The 3 valence electrons bond with 3 neighbouring Si atoms, leaving the 4th bond incomplete with a vacant hole site. Valence electrons jump into this vacancy with very little energy (E_a ≈ 0.01–0.05 eV), creating an acceptor energy level E_a just above the VB. Holes become Majority Carriers (n_h ≈ N_a) and electrons become Minority Carriers (n_e = n_i² / N_a).",
        "Mass Action Law: In any semiconductor at thermal equilibrium, the product of electron and hole concentrations is constant: n_e · n_h = n_i²(T).",
        "Electrical Neutrality: A doped semiconductor crystal is strictly ELECTRICALLY NEUTRAL as a whole. For n-type: n_e = N_d⁺ + n_h; for p-type: n_h = N_a⁻ + n_e. Every free charge carrier is balanced by an immobile ionized dopant core."
      ],
      visual: {
        type: 'svg',
        svgContent: SEMI_SVGS.dopingLattice,
        caption: "Figure 14.3: Extrinsic Semiconductor Lattices: Pentavalent Phosphorus Doping (n-type) with Extra 5th Electron vs Trivalent Boron Doping (p-type) with Incomplete Bond Hole.",
        guide: "Observe that in n-type, the 5th valence electron is free; in p-type, a vacant bond creates a hole. Notice both structures remain electrically neutral overall."
      },
      importantPoints: [
        "Doping ratio is typically 1 impurity atom per 10⁶ to 10⁸ host Silicon atoms.",
        "In n-type: n_e ≫ n_h; in p-type: n_h ≫ n_e; in intrinsic: n_e = n_h = n_i.",
        "Donor level E_d is just below CB; Acceptor level E_a is just above VB.",
        "Total crystal charge is zero: n-type is NOT negative; p-type is NOT positive."
      ]
    }
  ],

  formulae: [
    {
      formulaName: "Forbidden Band Gap & Threshold Wavelength",
      formula: "E_g = h ν_max = (h c) / λ_max ≈ 12400 / λ_max(Å) eV",
      description: "Minimum photon energy required to excite an electron from valence band to conduction band in a semiconductor."
    },
    {
      formulaName: "Mass Action Law",
      formula: "n_e · n_h = n_i²(T)",
      description: "Product of equilibrium electron and hole densities in any semiconductor at constant temperature T."
    },
    {
      formulaName: "Electrical Conductivity of Semiconductor",
      formula: "σ = e (n_e µ_e + n_h µ_h) = 1 / ρ",
      description: "Total electrical conductivity combining both electron and hole conduction drift currents."
    },
    {
      formulaName: "Intrinsic Electrical Conductivity",
      formula: "σ_i = e · n_i · (µ_e + µ_h)",
      description: "Conductivity of pure intrinsic semiconductor where n_e = n_h = n_i."
    },
    {
      formulaName: "Extrinsic Conductivity Approximations",
      formula: "n-type: σ_n ≈ e · N_d · µ_e  ;  p-type: σ_p ≈ e · N_a · µ_h",
      description: "Conductivity dominated overwhelmingly by majority carrier density provided by dopant atoms."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: SEMI_SVGS.donorAcceptorBands,
    caption: "Figure 14.4: Energy Band Diagrams of n-Type Semiconductor (showing Donor Level E_d just below CB) and p-Type Semiconductor (showing Acceptor Level E_a just above VB)."
  },

  neetImportantPoints: [
    "At absolute zero (0 K), pure silicon has zero conductivity and acts as a perfect insulator.",
    "Semiconductors have a negative temperature coefficient of resistance (α < 0); metals have α > 0.",
    "A hole is an effective positive charge vacancy (+e), not a moving nuclear proton.",
    "Electron mobility µ_e is always strictly greater than hole mobility µ_h (µ_e > µ_h).",
    "Both n-type and p-type semiconductor crystals are electrically neutral overall (q_net = 0).",
    "Pentavalent impurities (P, As, Sb) create n-type; Trivalent impurities (B, Al, Ga, In) create p-type.",
    "The donor level E_d is situated 0.01 eV (Ge) / 0.05 eV (Si) below the bottom edge of Conduction Band.",
    "The acceptor level E_a is situated 0.01 eV (Ge) / 0.05 eV (Si) above the top edge of Valence Band.",
    "Mass Action Law n_e · n_h = n_i² holds at thermal equilibrium for both intrinsic and doped semiconductors."
  ],

  commonConfusions: [
    {
      commonConfusion: "Thinking an n-type semiconductor is negatively charged because electrons are majority carriers.",
      correctFact: "An n-type semiconductor is completely electrically neutral. The extra free electrons are exactly balanced by fixed positive donor ions (N_d⁺ = n_e).",
      whyItMattersForNEET: "One of the most frequently asked conceptual assertion-reason questions in NEET UG."
    },
    {
      commonConfusion: "Assuming hole mobility is equal to electron mobility.",
      correctFact: "Electron mobility µ_e is always higher than hole mobility µ_h because CB electrons move through crystal space, whereas holes move by valence electron inter-bond hops.",
      whyItMattersForNEET: "Directly impacts total conductivity σ = e(n_e µ_e + n_h µ_h) calculations."
    },
    {
      commonConfusion: "Thinking Diamond is a semiconductor because it is in Group 14 with 4 valence electrons.",
      correctFact: "Diamond has a huge band gap of ~6 eV, making it a strong insulator at ordinary conditions.",
      whyItMattersForNEET: "Essential classification question comparing C, Si, and Ge."
    }
  ],

  quickRevision: [
    "Energy bands arise from splitting of discrete atomic levels when N atoms form a solid lattice.",
    "Conductors: E_g = 0 eV (overlapping bands); Insulators: E_g > 3 eV; Semiconductors: E_g < 3 eV (Si: 1.1 eV, Ge: 0.72 eV).",
    "Intrinsic semiconductor: Pure Si/Ge, n_e = n_h = n_i, Total current I = I_e + I_h.",
    "Hole: Covalent bond vacancy acting as positive charge (+e), moves opposite to electron jump direction.",
    "n-Type: Doped with Pentavalent (P, As, Sb), n_e ≫ n_h, Donor level E_d just below CB, Neutral overall.",
    "p-Type: Doped with Trivalent (B, Al, Ga, In), n_h ≫ n_e, Acceptor level E_a just above VB, Neutral overall.",
    "Mass Action Law: n_e · n_h = n_i²(T) at thermal equilibrium.",
    "Conductivity: σ = e (n_e µ_e + n_h µ_h). Resistance decreases with temperature (α < 0)."
  ],

  practiceQuestions: [
    {
      question: "An intrinsic semiconductor with band gap E_g = 1.12 eV is illuminated by light. What is the maximum wavelength of light that can create an electron-hole pair?",
      options: [
        "1110 nm",
        "850 nm",
        "620 nm",
        "400 nm"
      ],
      correctAnswer: 0,
      explanation: "λ_max = (h · c) / E_g = 1240 eV·nm / 1.12 eV = 1107 nm ≈ 1110 nm (Infrared region)."
    },
    {
      question: "Pure Silicon at 300 K has n_i = 1.5 × 10¹⁶ m⁻³. When doped with Indium of concentration 4.5 × 10²² m⁻³, the thermal equilibrium electron concentration n_e is:",
      options: [
        "5.0 × 10⁹ m⁻³",
        "2.25 × 10¹⁶ m⁻³",
        "3.0 × 10²² m⁻³",
        "1.5 × 10¹² m⁻³"
      ],
      correctAnswer: 0,
      explanation: "Indium is trivalent (p-type), so n_h ≈ N_a = 4.5 × 10²² m⁻³. By Mass Action Law: n_e = n_i² / n_h = (1.5 × 10¹⁶)² / (4.5 × 10²²) = (2.25 × 10³²) / (4.5 × 10²²) = 5.0 × 10⁹ m⁻³."
    }
  ],

  pyqs: [
    {
      exam: "NEET UG",
      year: 2021,
      question: "An intrinsic semiconductor is converted into an n-type extrinsic semiconductor by doping it with:",
      options: [
        "Phosphorus",
        "Aluminium",
        "Boron",
        "Indium"
      ],
      correctAnswer: 0,
      explanation: "To produce an n-type semiconductor, a pentavalent impurity from Group 15 (such as Phosphorus, Arsenic, or Antimony) must be doped into the silicon crystal.",
      conceptTested: "Extrinsic Doping with Pentavalent vs Trivalent Impurities"
    }
  ]
};
