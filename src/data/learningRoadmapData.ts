export interface RoadmapStep {
  id: string;
  stepNumber: number;
  phaseId: 1 | 2 | 3 | 4 | 5;
  phaseName: string;
  subject: 'biology' | 'chemistry' | 'physics';
  subjectName: string;
  classLevel: 'class-11' | 'class-12';
  chapterId: string;
  chapterTitle: string;
  topicId: string;
  topicTitle: string;
  estimatedHours: number;
  neetWeightage: 'Very High' | 'High' | 'Medium';
  whyStartHere: string;
  keyConcepts: string[];
  mustRememberPoints: string[];
  commonTraps: string[];
  masteryQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface RoadmapPhase {
  id: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  description: string;
  stepRange: string;
  icon: string;
  badgeColor: string;
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 1,
    title: 'Phase 1: Zero-to-One Foundations',
    subtitle: 'The Absolute First Steps for Every Aspirant',
    description: 'Start with fundamental cell biology, basic chemical calculations, and physics unit analysis to build your foundational confidence.',
    stepRange: 'Steps 1 – 6',
    icon: '🌱',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
  },
  {
    id: 2,
    title: 'Phase 2: Core Mechanics & Bonding',
    subtitle: 'Class 11 Structural Backbone',
    description: 'Master Kinematics, Chemical Bonding geometries, and Cell Cycle mechanisms that link directly to advanced topics.',
    stepRange: 'Steps 7 – 12',
    icon: '⚡',
    badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
  },
  {
    id: 3,
    title: 'Phase 3: High-Yield NCERT Powerhouses',
    subtitle: 'High Scoring Conceptual Pillars',
    description: 'Dive into Biomolecules, Periodic Trends, Newton\'s Laws, and General Organic Chemistry (GOC).',
    stepRange: 'Steps 13 – 18',
    icon: '🔥',
    badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20'
  },
  {
    id: 4,
    title: 'Phase 4: Class 12 Heavyweights',
    subtitle: 'Maximum NEET Marks Density',
    description: 'Genetics crosses, Current Electricity circuits, Chemical Kinetics, and Molecular Biology.',
    stepRange: 'Steps 19 – 24',
    icon: '🧬',
    badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20'
  },
  {
    id: 5,
    title: 'Phase 5: High-Scoring Rank Boosters',
    subtitle: 'Finish Strong & Clinch Top Ranks',
    description: 'Ecology NCERT facts, Coordination Chemistry, Ray & Wave Optics, and Modern Physics.',
    stepRange: 'Steps 25 – 30',
    icon: '🏆',
    badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20'
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  // ==================== PHASE 1: ZERO-TO-ONE FOUNDATIONS ====================
  {
    id: 'step-1',
    stepNumber: 1,
    phaseId: 1,
    phaseName: 'Phase 1: Zero-to-One Foundations',
    subject: 'biology',
    subjectName: 'Biology',
    classLevel: 'class-11',
    chapterId: 'bio-11-08-cell-unit-of-life',
    chapterTitle: 'Cell: The Unit of Life',
    topicId: 'bio-cell-structure-functions',
    topicTitle: 'Cell Membrane & Organelles (Endomembrane System)',
    estimatedHours: 2.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Starting with Cell Biology gives immediate confidence. It is 100% direct NCERT, carries 3–4 questions every single year, and forms the basis of all Botany and Zoology.',
    keyConcepts: [
      'Fluid Mosaic Model proposed by Singer & Nicolson (1972): Quasi-fluid nature of lipids enables lateral movement of proteins.',
      'Endomembrane System consists of ER, Golgi Apparatus, Lysosomes, and Vacuoles because their functions are coordinated.',
      'Mitochondria & Chloroplasts are semi-autonomous organelles possessing their own circular 70S DNA and ribosomes.'
    ],
    mustRememberPoints: [
      'Lipid bilayer consists mainly of phosphoglycerides with polar heads towards the outside and hydrophobic tails towards the inside.',
      'Sedimentation coefficient "S" (Svedberg unit) stands for sedimentation rate and is an indirect measure of density and size.',
      'Mesosomes in bacteria are invaginations of plasma membrane helping in cell wall formation, DNA replication, and respiration.'
    ],
    commonTraps: [
      'Trap: Peroxisomes are NOT part of the endomembrane system because their functions are not coordinated with ER/Golgi.',
      'Trap: 70S ribosomes are found in prokaryotes, chloroplast stroma, and mitochondrial matrix, while 80S are in eukaryotic cytoplasm.'
    ],
    masteryQuiz: [
      {
        question: 'Which of the following cellular components is NOT a part of the endomembrane system?',
        options: ['Endoplasmic reticulum', 'Golgi complex', 'Peroxisome', 'Lysosome'],
        correctIndex: 2,
        explanation: 'According to NCERT, the endomembrane system includes ER, Golgi, Lysosomes, and Vacuoles. Peroxisomes and Mitochondria are not coordinated with them.'
      },
      {
        question: 'The quasi-fluid nature of the cell membrane is primarily due to:',
        options: ['Phospholipids', 'Peripheral proteins', 'Carbohydrates', 'Cholesterol esters'],
        correctIndex: 0,
        explanation: 'The quasi-fluid nature of lipids enables lateral movement of proteins within the overall bilayer (Singer and Nicolson, 1972).'
      }
    ]
  },
  {
    id: 'step-2',
    stepNumber: 2,
    phaseId: 1,
    phaseName: 'Phase 1: Zero-to-One Foundations',
    subject: 'chemistry',
    subjectName: 'Chemistry',
    classLevel: 'class-11',
    chapterId: 'chem-11-01-basic-concepts',
    chapterTitle: 'Some Basic Concepts of Chemistry',
    topicId: 'chem-atomic-mass-mole-concept',
    topicTitle: 'Mole Concept, Molar Mass & Stoichiometry',
    estimatedHours: 3.0,
    neetWeightage: 'Very High',
    whyStartHere: 'The Mole Concept is the mathematical language of Physical Chemistry. Without it, you cannot solve Solutions, Electrochemistry, Kinetics, or Equilibrium.',
    keyConcepts: [
      '1 Mole = 6.022 × 10²³ particles (Avogadro number NA).',
      'Number of moles (n) = Given Mass / Molar Mass = Volume of gas at STP (in L) / 22.4 L = Number of particles / NA.',
      'Limiting Reagent (LR): The reactant which is completely consumed first in a reaction and dictates the maximum amount of product formed.'
    ],
    mustRememberPoints: [
      'Molarity (M) = Moles of solute / Volume of solution (L) [Temperature dependent].',
      'Molality (m) = Moles of solute / Mass of solvent (kg) [Temperature independent].',
      'Mole Fraction (χ) has no units and sum of mole fractions of all components is always 1.'
    ],
    commonTraps: [
      'Trap: In molality, the denominator is mass of SOLVENT in kg, NOT mass of solution.',
      'Trap: At STP (1 atm, 273.15 K), 1 mole of ideal gas occupies 22.4 L. At standard conditions (1 bar, 273.15 K), it is 22.7 L.'
    ],
    masteryQuiz: [
      {
        question: 'What is the molality of a 1 M aqueous solution of NaCl having a density of 1.0585 g/mL? (Molar mass of NaCl = 58.5 g/mol)',
        options: ['1.0 m', '1.0585 m', '0.95 m', '1.2 m'],
        correctIndex: 0,
        explanation: 'Mass of 1 L solution = 1058.5 g. Mass of solute (1 mol NaCl) = 58.5 g. Mass of solvent = 1058.5 - 58.5 = 1000 g = 1 kg. Molality = 1 mol / 1 kg = 1.0 m.'
      },
      {
        question: 'Which of the following concentration terms changes with temperature?',
        options: ['Molality', 'Mole fraction', 'Molarity', 'Mass percentage'],
        correctIndex: 2,
        explanation: 'Molarity depends on the volume of the solution, which expands or contracts with temperature variations.'
      }
    ]
  },
  {
    id: 'step-3',
    stepNumber: 3,
    phaseId: 1,
    phaseName: 'Phase 1: Zero-to-One Foundations',
    subject: 'physics',
    subjectName: 'Physics',
    classLevel: 'class-11',
    chapterId: 'phys-11-01-units-and-measurements',
    chapterTitle: 'Units and Measurements',
    topicId: 'phys-units-si-derived',
    topicTitle: 'Units, Dimensional Analysis & Significant Figures',
    estimatedHours: 2.5,
    neetWeightage: 'High',
    whyStartHere: 'Dimensional analysis is the best cheat-code in NEET Physics. It gives you 2 guaranteed easy questions (8 marks) and allows you to eliminate wrong options in difficult formula questions.',
    keyConcepts: [
      'Principle of Homogeneity: In any physical equation, the dimensions of each term on both sides must be identical.',
      'Quantities having same dimensions can be added or subtracted; arguments of trigonometric, logarithmic, and exponential functions are dimensionless.',
      'Relative Error = ΔA / A; Percentage Error = (ΔA / A) × 100%.'
    ],
    mustRememberPoints: [
      'Planck constant (h) and Angular momentum have identical dimensions: [M L² T⁻¹].',
      'Work, Energy, and Torque have dimensions: [M L² T⁻²].',
      'When Z = A^p · B^q / C^r, Maximum fractional error is: ΔZ/Z = p(ΔA/A) + q(ΔB/B) + r(ΔC/C).'
    ],
    commonTraps: [
      'Trap: Errors ALWAYS ADD up; never subtract error terms even if the variable appears in the denominator.',
      'Trap: Dimensions of (1/√(μ₀ε₀)) is velocity of light [M⁰ L¹ T⁻¹].'
    ],
    masteryQuiz: [
      {
        question: 'The physical quantities not having same dimensions are:',
        options: [
          'Torque and Work',
          'Momentum and Planck constant',
          'Stress and Young modulus',
          'Speed and (1/√(μ₀ε₀))'
        ],
        correctIndex: 1,
        explanation: 'Momentum has dimensions [M L T⁻¹] whereas Planck constant has dimensions [M L² T⁻¹]. All others in the options share identical dimensions.'
      },
      {
        question: 'If percentage error in measuring radius of a sphere is 2%, the percentage error in its volume will be:',
        options: ['2%', '4%', '6%', '8%'],
        correctIndex: 2,
        explanation: 'V = (4/3)πr³. Therefore, ΔV/V = 3(Δr/r) = 3 × 2% = 6%.'
      }
    ]
  },
  {
    id: 'step-4',
    stepNumber: 4,
    phaseId: 1,
    phaseName: 'Phase 1: Zero-to-One Foundations',
    subject: 'biology',
    subjectName: 'Biology',
    classLevel: 'class-11',
    chapterId: 'bio-11-10-cell-cycle',
    chapterTitle: 'Cell Cycle and Cell Division',
    topicId: 'bio-cell-cycle-mitosis-meiosis',
    topicTitle: 'Cell Cycle Phases & Meiosis Crossing Over',
    estimatedHours: 2.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Cell division provides the mechanistic key to Genetics. The sub-stages of Prophase-I (Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis) are asked almost every year in NEET.',
    keyConcepts: [
      'G1 Phase (Cell growth & RNA/protein synthesis) → S Phase (DNA replication, chromosome number remains unchanged while DNA amount doubles 2C→4C) → G2 Phase → M Phase.',
      'Prophase I Sub-stages: Leptotene (Chromatin condenses), Zygotene (Synapsis & Synaptonemal complex), Pachytene (Crossing over via Recombinase), Diplotene (Chiasmata & dissolution of synaptonemal complex), Diakinesis (Terminalisation of chiasmata).',
      'Meiosis results in 4 haploid daughter cells and generates genetic variations essential for evolution.'
    ],
    mustRememberPoints: [
      'In animal cells, during S phase, DNA replicates in nucleus while centriole duplicates in cytoplasm.',
      'G0 (Quiescent stage): Cells remain metabolically active but no longer proliferate unless called upon.',
      'Recombination nodule appears in Pachytene; Chiasmata become visible in Diplotene.'
    ],
    commonTraps: [
      'Trap: During S phase, DNA amount doubles (2C to 4C), but chromosome number remains 2n.',
      'Trap: Oocytes of some vertebrates can remain arrested in Diplotene for months or years.'
    ],
    masteryQuiz: [
      {
        question: 'Crossing over takes place between non-sister chromatids of homologous chromosomes during which stage of Prophase I?',
        options: ['Zygotene', 'Pachytene', 'Diplotene', 'Diakinesis'],
        correctIndex: 1,
        explanation: 'Crossing over is an enzyme-mediated process (enzyme: recombinase) occurring during the Pachytene stage of Meiosis I.'
      },
      {
        question: 'If a cell has 2n = 16 chromosomes and 2C DNA in G1 phase, what will be the chromosome number and DNA content after S phase?',
        options: ['2n = 16, 4C', '2n = 32, 4C', '2n = 16, 2C', '2n = 32, 2C'],
        correctIndex: 0,
        explanation: 'In S phase, DNA replication doubles the amount of DNA (2C → 4C), but the chromosome number remains unchanged (2n = 16).'
      }
    ]
  },
  {
    id: 'step-5',
    stepNumber: 5,
    phaseId: 1,
    phaseName: 'Phase 1: Zero-to-One Foundations',
    subject: 'chemistry',
    subjectName: 'Chemistry',
    classLevel: 'class-11',
    chapterId: 'chem-11-02-structure-of-atom',
    chapterTitle: 'Structure of Atom',
    topicId: 'chem-structure-atom-bohr',
    topicTitle: 'Bohr Model, Quantum Numbers & Electronic Configuration',
    estimatedHours: 3.0,
    neetWeightage: 'High',
    whyStartHere: 'Electronic configuration dictates all of Inorganic and Organic Chemistry. Understanding orbitals, quantum numbers, and Hund\'s rule makes Periodic Trends and Bonding effortless.',
    keyConcepts: [
      'Bohr Model: En = -13.6 × (Z²/n²) eV/atom; Radius rn = 0.529 × (n²/Z) Å.',
      'Quantum Numbers: Principal (n: shell/size), Azimuthal (l: subshell/shape, 0 to n-1), Magnetic (m: orientation, -l to +l), Spin (s: +1/2 or -1/2).',
      'Aufbau Principle (lower (n+l) filled first), Pauli Exclusion (no two electrons have same 4 quantum numbers), Hund\'s Rule (maximum multiplicity).'
    ],
    mustRememberPoints: [
      'Number of radial nodes = n - l - 1; Angular nodes = l; Total nodes = n - 1.',
      'de Broglie wavelength λ = h / mv = h / √(2mE).',
      'Exceptional configurations: Cr (3d⁵ 4s¹) and Cu (3d¹⁰ 4s¹) due to symmetrical half-filled and fully-filled orbital stability.'
    ],
    commonTraps: [
      'Trap: For a single-electron system (like H, He⁺, Li²⁺), energy of orbitals depends ONLY on n (e.g. 3s = 3p = 3d in H atom).',
      'Trap: Azimuthal quantum number for d-orbital is l = 2, so orbital angular momentum = √(l(l+1)) · h/2π = √6 · h/2π.'
    ],
    masteryQuiz: [
      {
        question: 'What is the total number of radial and angular nodes respectively in a 4d orbital?',
        options: ['1 and 2', '2 and 1', '2 and 2', '0 and 3'],
        correctIndex: 0,
        explanation: 'For 4d: n = 4, l = 2. Radial nodes = n - l - 1 = 4 - 2 - 1 = 1. Angular nodes = l = 2.'
      },
      {
        question: 'Which set of quantum numbers is NOT permitted for an electron in an atom?',
        options: [
          'n = 3, l = 2, m = -2, s = +1/2',
          'n = 4, l = 0, m = 0, s = -1/2',
          'n = 3, l = 3, m = +1, s = +1/2',
          'n = 2, l = 1, m = 0, s = -1/2'
        ],
        correctIndex: 2,
        explanation: 'The value of l must be strictly less than n (l ranges from 0 to n-1). When n = 3, l can only be 0, 1, or 2. l = 3 is forbidden.'
      }
    ]
  },
  {
    id: 'step-6',
    stepNumber: 6,
    phaseId: 1,
    phaseName: 'Phase 1: Zero-to-One Foundations',
    subject: 'physics',
    subjectName: 'Physics',
    classLevel: 'class-11',
    chapterId: 'phys-11-02-motion-straight-line',
    chapterTitle: 'Motion in a Straight Line',
    topicId: 'phys-motion-speed-velocity',
    topicTitle: 'Kinematics 1D, Graphs & Free Fall Equations',
    estimatedHours: 3.0,
    neetWeightage: 'High',
    whyStartHere: 'Kinematics teaches you how to translate physical scenarios into graphs and equations. Once you master constant acceleration equations, mechanics feels intuitive.',
    keyConcepts: [
      'Equations of Motion (constant acceleration): v = u + at, s = ut + (1/2)at², v² = u² + 2as, s_nth = u + (a/2)(2n - 1).',
      'Free Fall Under Gravity: Time of flight T = 2u/g, Maximum height H = u²/2g, Velocity on striking ground v = √(2gh).',
      'Graphical interpretation: Slope of s-t graph gives Velocity; Slope of v-t graph gives Acceleration; Area under v-t graph gives Displacement.'
    ],
    mustRememberPoints: [
      'Galileo’s Law of Odd Numbers: For a body dropped from rest, distance traveled in consecutive equal time intervals are in the ratio 1 : 3 : 5 : 7 : 9...',
      'If a car stops in distance s with initial speed v, with speed 2v it will stop in distance 4s (Stopping distance ∝ v²).'
    ],
    commonTraps: [
      'Trap: At the highest point of projectile/vertical throw, velocity is zero (or horizontal), but acceleration is still non-zero (g downward).',
      'Trap: Distance is always ≥ |Displacement|; average speed is always ≥ |average velocity|.'
    ],
    masteryQuiz: [
      {
        question: 'A body dropped from the top of a tower falls through 45 m in the last second of its fall. If g = 10 m/s², the total height of the tower is:',
        options: ['125 m', '80 m', '100 m', '180 m'],
        correctIndex: 0,
        explanation: 's_nth = u + g/2(2n-1) => 45 = 0 + 5(2n-1) => 2n-1 = 9 => n = 5 seconds. Total height H = (1/2)gt² = 0.5 × 10 × 25 = 125 m.'
      }
    ]
  },

  // ==================== PHASE 2: CORE MECHANICS & BONDING ====================
  {
    id: 'step-7',
    stepNumber: 7,
    phaseId: 2,
    phaseName: 'Phase 2: Core Mechanics & Bonding',
    subject: 'chemistry',
    subjectName: 'Chemistry',
    classLevel: 'class-11',
    chapterId: 'chem-11-04-chemical-bonding',
    chapterTitle: 'Chemical Bonding and Molecular Structure',
    topicId: 'chem-chemical-bonding-vsepr',
    topicTitle: 'VSEPR Theory, Hybridization & Dipole Moments',
    estimatedHours: 3.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Chemical Bonding is the single most tested chapter in Inorganic Chemistry (4–5 questions every year). Hybridization and shape predictions are guaranteed marks.',
    keyConcepts: [
      'Steric Number = (Number of bonded atoms) + (Number of lone pairs on central atom).',
      'Steric Number 2 (sp, Linear), 3 (sp², Trigonal Planar / Bent), 4 (sp³, Tetrahedral / Pyramidal / Bent), 5 (sp³d, TBP / See-saw / T-shape / Linear), 6 (sp³d², Octahedral / Square Pyramidal / Square Planar).',
      'Molecular Orbital Theory (MOT): Bond Order = 1/2 (Nb - Na). If Bond Order > 0, molecule exists; unpaired electrons = paramagnetic.'
    ],
    mustRememberPoints: [
      'Order of repulsion: Lone pair - Lone pair > Lone pair - Bond pair > Bond pair - Bond pair.',
      'For O₂ and F₂: σ1s < σ*1s < σ2s < σ*2s < σ2pz < (π2px = π2py) < (π*2px = π*2py) < σ*2pz.',
      'For B₂, C₂, N₂ (≤14 electrons): π2px = π2py fills BEFORE σ2pz.'
    ],
    commonTraps: [
      'Trap: In PCl₅, axial bonds are longer and weaker than equatorial bonds due to greater repulsion from 3 equatorial bonds at 90°.',
      'Trap: XeF₄ has sp³d² hybridization with 2 lone pairs in trans positions, resulting in a Square Planar geometry and ZERO dipole moment.'
    ],
    masteryQuiz: [
      {
        question: 'Which of the following species has a planar geometry with sp³d² hybridization on the central atom?',
        options: ['SF₄', 'XeF₄', 'PCl₅', 'NH₄⁺'],
        correctIndex: 1,
        explanation: 'In XeF₄, Xe has 8 valence electrons. 4 form σ-bonds and 2 remain as lone pairs. Steric number = 4 + 2 = 6 (sp³d²). The 2 lone pairs take axial positions, giving a square planar geometry.'
      },
      {
        question: 'According to MOT, which of the following diatomic species is diamagnetic and has a bond order of 3?',
        options: ['O₂', 'N₂', 'B₂', 'C₂'],
        correctIndex: 1,
        explanation: 'N₂ has 14 electrons. All electrons in bonding and antibonding orbitals are paired (diamagnetic) and Bond Order = (10 - 4)/2 = 3.'
      }
    ]
  },
  {
    id: 'step-8',
    stepNumber: 8,
    phaseId: 2,
    phaseName: 'Phase 2: Core Mechanics & Bonding',
    subject: 'physics',
    subjectName: 'Physics',
    classLevel: 'class-11',
    chapterId: 'phys-11-04-laws-of-motion',
    chapterTitle: 'Laws of Motion',
    topicId: 'phys-newtons-laws',
    topicTitle: 'Newton\'s Laws, Friction & Free Body Diagrams (FBD)',
    estimatedHours: 3.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Drawing Free Body Diagrams (FBD) is the primary superpower in Physics. Once you master normal force, tension, and friction, Work-Power-Energy and Rotation become much easier.',
    keyConcepts: [
      'Newton’s 2nd Law: F_net = ma; Momentum p = mv; Impulse = F · Δt = Δp.',
      'Static Friction fs ≤ μs N (self-adjusting force up to limiting value); Kinetic Friction fk = μk N (constant, μk < μs).',
      'Apparent weight in a lift: Accelerating upward (N = m(g + a)), Accelerating downward (N = m(g - a)), Free fall (N = 0).'
    ],
    mustRememberPoints: [
      'Angle of Repose (θ) = Angle of Friction (λ), where tan θ = μs.',
      'Connected blocks on smooth horizontal table pulled with force F: Common acceleration a = F / (m1 + m2 + m3).',
      'Banking of roads without friction: v = √(rg tan θ); With friction: v_max = √[rg (tan θ + μ) / (1 - μ tan θ)].'
    ],
    commonTraps: [
      'Trap: Action and reaction forces NEVER cancel each other because they act on TWO DIFFERENT bodies.',
      'Trap: Static friction does not always equal μs N; it is equal to the applied force until limiting friction is reached.'
    ],
    masteryQuiz: [
      {
        question: 'A block of mass 2 kg rests on a rough horizontal surface with coefficient of static friction μs = 0.5. If a horizontal force of 4 N is applied, the force of friction acting on the block is (g = 10 m/s²):',
        options: ['10 N', '4 N', '0 N', '2 N'],
        correctIndex: 1,
        explanation: 'Limiting friction = μs N = 0.5 × (2 × 10) = 10 N. Since the applied force (4 N) is less than the limiting friction (10 N), static friction self-adjusts to equal the applied force = 4 N.'
      }
    ]
  },
  {
    id: 'step-9',
    stepNumber: 9,
    phaseId: 2,
    phaseName: 'Phase 2: Core Mechanics & Bonding',
    subject: 'biology',
    subjectName: 'Biology',
    classLevel: 'class-11',
    chapterId: 'bio-11-09-biomolecules',
    chapterTitle: 'Biomolecules',
    topicId: 'bio-biomolecules-structure-enzymes',
    topicTitle: 'Enzymes, Amino Acids, Lipids & Nucleic Acids',
    estimatedHours: 3.0,
    neetWeightage: 'Very High',
    whyStartHere: 'Biomolecules is an overlap chapter between Biology and Organic Chemistry. Learning Michaelis-Menten enzyme kinetics and peptide bonds gives double advantage.',
    keyConcepts: [
      'Proteins are heteropolymers of amino acids linked by peptide bonds (-CO-NH-).',
      'Enzymes lower activation energy. Competitive inhibitors (e.g. Malonate inhibiting Succinate Dehydrogenase) increase Km without altering Vmax.',
      'Nucleic Acids: Nucleoside = Nitrogenous base + Sugar; Nucleotide = Nucleoside + Phosphate group linked via Phosphodiester bond.'
    ],
    mustRememberPoints: [
      'Collagen is the most abundant protein in animal world; RuBisCO is the most abundant protein in whole biosphere.',
      'In a double helix DNA (B-DNA), pitch is 3.4 nm with 10 base pairs per turn, so rise per base pair is 0.34 nm.',
      'Lipids are NOT strictly macromolecules because their molecular weight does not exceed 800 Da, but they appear in acid-insoluble fraction due to vesicle formation.'
    ],
    commonTraps: [
      'Trap: Non-protein constituent of an enzyme is called a cofactor (Apoenzyme + Cofactor = Holoenzyme).',
      'Trap: GLUT-4 enables insulin-dependent glucose transport into cells.'
    ],
    masteryQuiz: [
      {
        question: 'Which of the following statements about enzyme competitive inhibition is correct?',
        options: [
          'Inhibitor binds to an allosteric site and decreases Vmax',
          'Inhibitor closely resembles the substrate, binds active site, increases apparent Km without changing Vmax',
          'Inhibitor binds irreversibly to the enzyme-substrate complex',
          'Km decreases and Vmax increases'
        ],
        correctIndex: 1,
        explanation: 'A competitive inhibitor competes with the substrate for the active site due to structural similarity (e.g., malonate and succinate). Excess substrate overcomes inhibition, so Vmax is unchanged while Km increases.'
      }
    ]
  },

  // ==================== PHASE 3: HIGH-YIELD NCERT POWERHOUSES ====================
  {
    id: 'step-10',
    stepNumber: 10,
    phaseId: 3,
    phaseName: 'Phase 3: High-Yield NCERT Powerhouses',
    subject: 'chemistry',
    subjectName: 'Chemistry',
    classLevel: 'class-11',
    chapterId: 'chem-11-12-organic-basic-principles',
    chapterTitle: 'Organic Chemistry – Basic Principles & Techniques',
    topicId: 'chem-electronic-effects-intermediates',
    topicTitle: 'GOC: Inductive, Resonance, Hyperconjugation & Intermediates',
    estimatedHours: 4.0,
    neetWeightage: 'Very High',
    whyStartHere: 'General Organic Chemistry (GOC) is the king of Organic Chemistry. If your carbocation stability, acidity, and basicity orders are crystal clear, Class 12 Organic Chemistry becomes a breeze.',
    keyConcepts: [
      'Inductive Effect (I): Permanent electron shift through σ-bonds (-I: -NO2 > -CN > -COOH > -F > -Cl; +I: -C(CH3)3 > -CH(CH3)2 > -CH2CH3 > -CH3).',
      'Resonance / Mesomeric (+M / -M) and Hyperconjugation (Baker-Nathan effect, α-C-H bonds).',
      'Carbocation stability: 3° > 2° > 1° > methyl (dictated by resonance, hyperconjugation, and +I effect).'
    ],
    mustRememberPoints: [
      'Acidity ∝ Stability of Conjugate Base ∝ -M, -I, -H effects.',
      'Basicity in aqueous solution for aliphatic amines: (CH3)2NH (2°) > CH3NH2 (1°) > (CH3)3N (3°) > NH3 [for methyl group].',
      'For ethyl group: (C2H5)2NH (2°) > (C2H5)3N (3°) > C2H5NH2 (1°) > NH3.'
    ],
    commonTraps: [
      'Trap: Ortho-effect increases acidity of ortho-substituted benzoic acids regardless of electron donating or withdrawing nature of the group.',
      'Trap: Aromaticity requires planar cyclic conjugated ring with (4n + 2) π electrons (Hückel\'s rule).'
    ],
    masteryQuiz: [
      {
        question: 'Which of the following carbocations is most stable?',
        options: ['(CH3)3C⁺', '(C6H5)3C⁺', 'CH2=CH-CH2⁺', 'CH3-CH2⁺'],
        correctIndex: 1,
        explanation: 'Triphenylmethyl carbocation (C6H5)3C⁺ is stabilized by extensive resonance delocalization across 3 benzene rings.'
      }
    ]
  },
  {
    id: 'step-11',
    stepNumber: 11,
    phaseId: 3,
    phaseName: 'Phase 3: High-Yield NCERT Powerhouses',
    subject: 'physics',
    subjectName: 'Physics',
    classLevel: 'class-11',
    chapterId: 'phys-11-05-work-energy-power',
    chapterTitle: 'Work, Energy and Power',
    topicId: 'phys-work-done',
    topicTitle: 'Work-Energy Theorem, Potential Energy & Collisions',
    estimatedHours: 3.0,
    neetWeightage: 'Very High',
    whyStartHere: 'Work-Energy Theorem (W_net = ΔK) solves almost 50% of complex mechanics problems without needing tricky vector force equations.',
    keyConcepts: [
      'Work Done W = F · s · cos θ = ∫ F dx. Conservative force: Work done around closed path is zero (F = -dU/dx).',
      'Work-Energy Theorem: Total work done by all forces (conservative + non-conservative + external) equals change in kinetic energy: W_all = Kf - Ki.',
      'Coefficient of Restitution e = (v2 - v1) / (u1 - u2). Elastic collision (e = 1), Inelastic collision (0 < e < 1), Perfectly inelastic (e = 0, bodies stick together).'
    ],
    mustRememberPoints: [
      'Potential energy of an ideal spring U = (1/2)kx²; Restoring force F = -kx.',
      'In a vertical circle of radius R (minimum speed to complete loop): Bottom v = √(5gR), Top v = √(gR), Horizontal position v = √(3gR).',
      'Tension at bottom = 6mg + Tension at top.'
    ],
    commonTraps: [
      'Trap: Normal force and centripetal force do ZERO work when displacement is perpendicular to force direction.',
      'Trap: Kinetic energy is conserved ONLY in elastic collisions; linear momentum is conserved in ALL collisions in the absence of external net force.'
    ],
    masteryQuiz: [
      {
        question: 'A mass m attached to a string is swung in a vertical circle of radius R. The minimum speed at the lowest point so that the string does not slacken at the top is:',
        options: ['√(gR)', '√(2gR)', '√(3gR)', '√(5gR)'],
        correctIndex: 3,
        explanation: 'At the top, minimum speed is √(gR). Using conservation of mechanical energy between bottom and top, v_bottom = √(5gR).'
      }
    ]
  },
  {
    id: 'step-12',
    stepNumber: 12,
    phaseId: 3,
    phaseName: 'Phase 3: High-Yield NCERT Powerhouses',
    subject: 'biology',
    subjectName: 'Biology',
    classLevel: 'class-12',
    chapterId: 'bio-12-05-principles-of-inheritance',
    chapterTitle: 'Principles of Inheritance and Variation',
    topicId: 'bio-principles-inheritance-mendel',
    topicTitle: 'Mendelian Crosses, Linkage & Genetic Disorders',
    estimatedHours: 4.0,
    neetWeightage: 'Very High',
    whyStartHere: 'Genetics alone contributes 6–8 questions in NEET Biology (24–32 marks). Mastering Punnett squares and pedigree charts guarantees high accuracy.',
    keyConcepts: [
      'Monohybrid phenotypic ratio: 3:1; Genotypic ratio: 1:2:1. Dihybrid phenotypic ratio: 9:3:3:1.',
      'Incomplete Dominance (Snapdragon / Mirabilis jalapa: 1:2:1 for both phenotype & genotype), Codominance (ABO blood group: IA and IB are codominant).',
      'Morgan’s Linkage experiment on Drosophila melanogaster: Linked genes do not show independent assortment; recombination frequency ∝ physical distance between genes on chromosome.'
    ],
    mustRememberPoints: [
      'Sickle-cell anemia: Point mutation causing GAG → GUG change at 6th codon of β-globin chain (Glutamic acid → Valine).',
      'Turner syndrome (45, X0), Klinefelter syndrome (47, XXY), Down syndrome (Trisomy 21).',
      'Hemophilia and Color Blindness are X-linked recessive disorders showing criss-cross inheritance.'
    ],
    commonTraps: [
      'Trap: Test cross is crossing an individual of unknown dominant genotype with a homozygous recessive parent (e.g. T_ × tt).',
      'Trap: Phenylketonuria is an autosomal recessive inborn error of metabolism showing pleiotropy (single gene affecting multiple phenotypic traits).'
    ],
    masteryQuiz: [
      {
        question: 'In a dihybrid cross between two heterozygous parents (AaBb × AaBb), what fraction of the offspring will have the genotype AaBb?',
        options: ['1/16', '2/16', '4/16', '9/16'],
        correctIndex: 2,
        explanation: 'Probability of Aa = 2/4 = 1/2. Probability of Bb = 2/4 = 1/2. Combined probability of AaBb = (1/2) × (1/2) = 1/4 = 4/16.'
      }
    ]
  },

  // ==================== PHASE 4: CLASS 12 HEAVYWEIGHTS ====================
  {
    id: 'step-13',
    stepNumber: 13,
    phaseId: 4,
    phaseName: 'Phase 4: Class 12 Heavyweights',
    subject: 'physics',
    subjectName: 'Physics',
    classLevel: 'class-12',
    chapterId: 'phys-12-03-current-electricity',
    chapterTitle: 'Current Electricity',
    topicId: 'phys-current-ohms-law',
    topicTitle: 'Kirchhoff\'s Laws, Drift Velocity, Potentiometer & Circuits',
    estimatedHours: 3.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Current Electricity has the highest return on investment in Class 12 Physics (3–4 direct questions). Circuit rules like KCL and KVL are simple and formulaic.',
    keyConcepts: [
      'Drift Velocity vd = eEτ / m; Current I = n A e vd; Current density J = σ E.',
      'Kirchhoff\'s Junction Law (KCL: conservation of charge); Loop Law (KVL: conservation of energy).',
      'Internal Resistance of cell: V = E - Ir (discharging), V = E + Ir (charging), r = R(E/V - 1).'
    ],
    mustRememberPoints: [
      'Meter Bridge works on the principle of balanced Wheatstone bridge: P/Q = R/S = l / (100 - l).',
      'Temperature coefficient of resistance: α is positive for metals/conductors and negative for semiconductors/insulators.',
      'Maximum Power Transfer Theorem: Power delivered to load is maximum when load resistance equals total internal resistance (R = r).'
    ],
    commonTraps: [
      'Trap: When a wire is stretched to n times its length, its resistance becomes n²R (since volume remains constant, A decreases to A/n).',
      'Trap: Potentiometer measures EMF accurately without drawing any current from the cell at balance point.'
    ],
    masteryQuiz: [
      {
        question: 'A wire of resistance R is stretched uniformly such that its length increases by 10%. The percentage increase in its resistance is approximately:',
        options: ['10%', '21%', '19%', '25%'],
        correctIndex: 1,
        explanation: 'Since volume V = A·L is constant, R ∝ L². New length L\' = 1.1 L => New resistance R\' = (1.1)² R = 1.21 R. Percentage increase = (1.21 - 1) × 100% = 21%.'
      }
    ]
  },
  {
    id: 'step-14',
    stepNumber: 14,
    phaseId: 4,
    phaseName: 'Phase 4: Class 12 Heavyweights',
    subject: 'chemistry',
    subjectName: 'Chemistry',
    classLevel: 'class-12',
    chapterId: 'chem-12-04-chemical-kinetics',
    chapterTitle: 'Chemical Kinetics',
    topicId: 'chem-chemical-kinetics-rate-law',
    topicTitle: 'Rate Laws, Integrated Rate Equations & Arrhenius Activation',
    estimatedHours: 3.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Chemical Kinetics questions in NEET are 100% numerical and predictable. Master Zero and 1st order integrated equations and Arrhenius equation to bag 8–12 marks.',
    keyConcepts: [
      'Zero Order: k = [A]0 - [A] / t; Half-life t1/2 = [A]0 / 2k (half-life directly proportional to initial concentration).',
      'First Order: k = (2.303 / t) log([A]0 / [A]); Half-life t1/2 = 0.693 / k (half-life independent of initial concentration).',
      'Arrhenius Equation: k = A e^(-Ea / RT); log(k2 / k1) = (Ea / 2.303R) × [(T2 - T1) / (T1 T2)].'
    ],
    mustRememberPoints: [
      'For a 1st order reaction: t99.9% = 10 × t50%; t99% = 2 × t90%; t75% = 2 × t50%.',
      'Units of rate constant k = (mol/L)^(1-n) · s⁻¹, where n is the overall order of the reaction.',
      'Catalyst increases the reaction rate by providing an alternative pathway with lower activation energy without altering ΔG or equilibrium constant Keq.'
    ],
    commonTraps: [
      'Trap: Molecularity can NEVER be zero, fractional, or negative; Order can be zero, fractional, or integer determined experimentally.',
      'Trap: Pseudo-first order reactions (e.g. Acid hydrolysis of ethyl acetate) have higher molecularity (2) but order 1 because water is in large excess.'
    ],
    masteryQuiz: [
      {
        question: 'For a first-order reaction, the time required for 99% completion is related to half-life (t1/2) by:',
        options: ['t99% = 2 t1/2', 't99% = 4 t1/2', 't99% = 6.64 t1/2', 't99% = 10 t1/2'],
        correctIndex: 2,
        explanation: 't99% = (2.303/k) log(100/1) = (2.303/k) × 2. Since t1/2 = 0.693/k = (2.303 × log 2)/k, t99% / t1/2 = 2 / 0.3010 ≈ 6.64.'
      }
    ]
  },
  {
    id: 'step-15',
    stepNumber: 15,
    phaseId: 4,
    phaseName: 'Phase 4: Class 12 Heavyweights',
    subject: 'biology',
    subjectName: 'Biology',
    classLevel: 'class-12',
    chapterId: 'bio-12-06-molecular-basis-inheritance',
    chapterTitle: 'Molecular Basis of Inheritance',
    topicId: 'bio-molecular-basis-dna-replication',
    topicTitle: 'DNA Replication, Transcription, Translation & Lac Operon',
    estimatedHours: 4.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Molecular Biology is the single highest-yield chapter in all of NEET (7–9 questions every year). Central dogma, genetic code rules, and Lac operon are tested extensively.',
    keyConcepts: [
      'DNA Replication is semi-conservative (proven by Meselson & Stahl using ¹⁵NH₄Cl in E. coli) and semi-discontinuous (Okazaki fragments on lagging strand joined by DNA ligase).',
      'Transcription: RNA Polymerase synthesizes RNA in 5\' → 3\' direction. In eukaryotes, post-transcriptional processing includes Capping (7-methylguanosine), Tailing (Poly-A tail), and Splicing (introns removed).',
      'Genetic Code: Triplet, degenerate (61 codons for 20 amino acids, 3 stop codons: UAA, UAG, UGA), unambiguous, universal; AUG codes for Methionine and acts as initiator codon.',
      'Lac Operon: Inducer (Allolactose / lactose) binds repressor protein, freeing the operator site so RNA polymerase can transcribe lac z, y, and a genes.'
    ],
    mustRememberPoints: [
      'Lac Z codes for β-galactosidase; Lac Y codes for Permease; Lac A codes for Transacetylase.',
      'tRNA has an anticodon loop that pairs with mRNA codon and an amino acid acceptor end (CCA 3\').',
      'DNA fingerprinting utilizes Variable Number of Tandem Repeats (VNTRs) as minisatellite probes (developed by Alec Jeffreys).'
    ],
    commonTraps: [
      'Trap: RNA polymerase binds to the Promoter sequence, NOT the operator (Repressor protein binds the operator).',
      'Trap: DNA polymerase III requires a free 3\'-OH group provided by RNA primer to synthesize new DNA strands.'
    ],
    masteryQuiz: [
      {
        question: 'In the Lac operon of E. coli, which gene product is responsible for increasing the permeability of the cell to β-galactosides?',
        options: ['lac z gene product', 'lac y gene product', 'lac a gene product', 'lac i gene product'],
        correctIndex: 1,
        explanation: 'The lac y gene codes for permease, which increases permeability of the cell to β-galactosides like lactose.'
      }
    ]
  },

  // ==================== PHASE 5: HIGH-SCORING RANK BOOSTERS ====================
  {
    id: 'step-16',
    stepNumber: 16,
    phaseId: 5,
    phaseName: 'Phase 5: High-Scoring Rank Boosters',
    subject: 'physics',
    subjectName: 'Physics',
    classLevel: 'class-12',
    chapterId: 'phys-12-09-ray-optics',
    chapterTitle: 'Ray Optics and Optical Instruments',
    topicId: 'phys-optics-reflection-refraction',
    topicTitle: 'Prisms, Total Internal Reflection & Lens Maker\'s Formula',
    estimatedHours: 3.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Ray Optics brings 3 questions in NEET. Total Internal Reflection (critical angle), Prism refraction formulas, and Lens combinations are purely formula-based.',
    keyConcepts: [
      'Snell\'s Law: n1 sin i = n2 sin r; Critical Angle: sin C = 1 / μ (from denser to rarer medium).',
      'Lens Maker’s Formula: 1/f = (μ - 1) [1/R1 - 1/R2]; Combination of thin lenses: 1/F = 1/f1 + 1/f2 (Power P = P1 + P2).',
      'Refraction through Prism: A + δ = i + e; At minimum deviation (δ = δm): i = e and r1 = r2 = A/2 => μ = sin((A + δm)/2) / sin(A/2).'
    ],
    mustRememberPoints: [
      'Compound Microscope Magnification: m = -(L / fo) × (1 + D / fe) [at near point D = 25 cm]; m = -(L / fo) × (D / fe) [at infinity].',
      'Astronomical Telescope: Normal adjustment m = -fo / fe; Length of tube L = fo + fe.',
      'When a convex lens of glass (μ = 1.5) is immersed in water (μ = 1.33), its focal length increases 4 times.'
    ],
    commonTraps: [
      'Trap: When a lens is cut vertically in half, each half has same focal length f but intensity of image becomes half. When cut horizontally, focal length doubles (2f).',
      'Trap: Dispersion without deviation vs Deviation without dispersion conditions.'
    ],
    masteryQuiz: [
      {
        question: 'A convex lens of glass (μ = 1.5) has a focal length of 20 cm in air. Its focal length when completely immersed in water (μ = 4/3) is:',
        options: ['20 cm', '40 cm', '80 cm', '10 cm'],
        correctIndex: 2,
        explanation: 'f_water / f_air = [(μ_g - 1) / (μ_g/μ_w - 1)] = [(1.5 - 1) / (1.5 / (4/3) - 1)] = 0.5 / (1.125 - 1) = 0.5 / 0.125 = 4. Therefore, f_water = 4 × 20 = 80 cm.'
      }
    ]
  },
  {
    id: 'step-17',
    stepNumber: 17,
    phaseId: 5,
    phaseName: 'Phase 5: High-Scoring Rank Boosters',
    subject: 'chemistry',
    subjectName: 'Chemistry',
    classLevel: 'class-12',
    chapterId: 'chem-12-09-coordination-compounds',
    chapterTitle: 'Coordination Compounds',
    topicId: 'chem-coordination-iupac-isomerism',
    topicTitle: 'Werner\'s Theory, IUPAC Naming, CFT & Crystal Field Splitting',
    estimatedHours: 3.5,
    neetWeightage: 'Very High',
    whyStartHere: 'Coordination Chemistry is high scoring and carries 3 guaranteed questions. Crystal Field Splitting (Δo vs P) and magnetic moments calculations are straightforward.',
    keyConcepts: [
      'Werner\'s Theory: Primary valency (ionizable, corresponds to oxidation state); Secondary valency (non-ionizable, fixed coordination number).',
      'Crystal Field Theory (CFT): In octahedral field, d-orbitals split into lower t2g (3 orbitals: dxy, dyz, dxz) and higher eg (2 orbitals: dx²-y², dz²); Crystal field stabilization energy CFSE = -0.4 x + 0.6 y (in units of Δo).',
      'Strong field ligands (CN⁻, CO, en, NH3) cause pairing of electrons (Δo > P, low spin complexes); Weak field ligands (I⁻, Br⁻, Cl⁻, F⁻, H2O) form high spin complexes.'
    ],
    mustRememberPoints: [
      'Spin-only magnetic moment μ = √(n(n + 2)) Bohr Magnetons (BM), where n = number of unpaired electrons.',
      'Spectrochemical series order: I⁻ < Br⁻ < S²⁻ < SCN⁻ < Cl⁻ < N3⁻ < F⁻ < OH⁻ < C2O4²⁻ < H2O < NCS⁻ < edta⁴⁻ < NH3 < en < NO2⁻ < CN⁻ < CO.',
      'Geometrical isomerism: cis/trans in [Pt(NH3)2Cl2] (square planar) and facial/meridional (fac/mer) in [Co(NH3)3(NO2)3].'
    ],
    commonTraps: [
      'Trap: Tetrahedral complexes do NOT show geometrical isomerism because all positions are adjacent (bond angles are all 109.5°).',
      'Trap: Cis-isomer of [Co(en)2Cl2]⁺ is optically active (non-superimposable mirror image), whereas trans-isomer is optically inactive due to plane of symmetry.'
    ],
    masteryQuiz: [
      {
        question: 'What is the spin-only magnetic moment of [Fe(CN)6]³⁻ complex ion? (Atomic number of Fe = 26)',
        options: ['1.73 BM', '5.92 BM', '2.84 BM', '4.90 BM'],
        correctIndex: 0,
        explanation: 'Fe³⁺ has 3d⁵ configuration. CN⁻ is a strong field ligand, causing pairing: t2g⁵ eg⁰. There is only 1 unpaired electron (n = 1). μ = √(1(1 + 2)) = √3 = 1.73 BM.'
      }
    ]
  },
  {
    id: 'step-18',
    stepNumber: 18,
    phaseId: 5,
    phaseName: 'Phase 5: High-Scoring Rank Boosters',
    subject: 'biology',
    subjectName: 'Biology',
    classLevel: 'class-12',
    chapterId: 'bio-12-13-organisms-populations',
    chapterTitle: 'Organisms and Populations',
    topicId: 'bio-ecology-organisms-population',
    topicTitle: 'Population Interactions, Growth Models & Adaptations',
    estimatedHours: 3.0,
    neetWeightage: 'Very High',
    whyStartHere: 'Ecology is the easiest scoring unit in NEET Biology (10–12 questions across 4 chapters). It is 100% textbook facts with zero complex math.',
    keyConcepts: [
      'Population Growth Models: Exponential growth dN/dt = rN (J-shaped curve under unlimited resources); Logistic growth dN/dt = rN((K - N)/K) (Sigmoid curve with carrying capacity K).',
      'Population Interactions table: Mutualism (+/+), Commensalism (+/0: Barnacles on whale, Orchid on mango tree), Parasitism (+/-), Predation (+/-), Amensalism (-/0: Penicillium producing penicillin inhibiting bacteria), Competition (-/-: Gause\'s competitive exclusion principle).'
    ],
    mustRememberPoints: [
      'Allen’s Rule: Mammals from colder climates have shorter ears and limbs to minimize heat loss.',
      'Kangaroo rat in North American deserts satisfies water requirements via internal fat oxidation and excretes concentrated urine.',
      'Gause\'s Principle: Two closely related species competing for identical resources cannot coexist indefinitely; the competitively inferior one is eventually eliminated.'
    ],
    commonTraps: [
      'Trap: Orchid growing on mango tree is Commensalism (+/0), whereas Cuscuta (Dodder) on hedge plant is Parasitism (+/-).',
      'Trap: Resource partitioning (MacArthur\'s warblers) allows competing species to coexist rather than get eliminated.'
    ],
    masteryQuiz: [
      {
        question: 'An interaction between two species where one species is harmed while the other is unaffected (-/0) is known as:',
        options: ['Commensalism', 'Amensalism', 'Parasitism', 'Mutualism'],
        correctIndex: 1,
        explanation: 'Amensalism is an interaction where one species is inhibited or destroyed while the other species remains completely unaffected (-/0), such as Penicillium fungus inhibiting bacterial growth.'
      }
    ]
  }
];

export class LearningRoadmapService {
  private static readonly STORAGE_KEY = 'neet_beginner_roadmap_progress';

  public static getCompletedStepIds(): string[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Error reading roadmap progress from localStorage:', e);
    }
    return [];
  }

  public static markStepCompleted(stepId: string, completed: boolean = true): void {
    const list = new Set(this.getCompletedStepIds());
    if (completed) {
      list.add(stepId);
    } else {
      list.delete(stepId);
    }
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(Array.from(list)));
    } catch (e) {
      console.warn('Error saving roadmap progress:', e);
    }
  }

  public static isStepCompleted(stepId: string): boolean {
    const list = this.getCompletedStepIds();
    return list.includes(stepId);
  }

  public static getNextRecommendedStepId(): string {
    const completed = this.getCompletedStepIds();
    for (const step of ROADMAP_STEPS) {
      if (!completed.includes(step.id)) {
        return step.id;
      }
    }
    return ROADMAP_STEPS[0].id;
  }

  public static getProgressMetrics() {
    const completed = this.getCompletedStepIds();
    const total = ROADMAP_STEPS.length;
    const completedCount = completed.filter(id => ROADMAP_STEPS.some(s => s.id === id)).length;
    const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    
    // Subject distribution
    const bioTotal = ROADMAP_STEPS.filter(s => s.subject === 'biology').length;
    const bioDone = ROADMAP_STEPS.filter(s => s.subject === 'biology' && completed.includes(s.id)).length;
    
    const chemTotal = ROADMAP_STEPS.filter(s => s.subject === 'chemistry').length;
    const chemDone = ROADMAP_STEPS.filter(s => s.subject === 'chemistry' && completed.includes(s.id)).length;
    
    const physTotal = ROADMAP_STEPS.filter(s => s.subject === 'physics').length;
    const physDone = ROADMAP_STEPS.filter(s => s.subject === 'physics' && completed.includes(s.id)).length;

    return {
      total,
      completedCount,
      percentage,
      bioDone,
      bioTotal,
      chemDone,
      chemTotal,
      physDone,
      physTotal
    };
  }
}
